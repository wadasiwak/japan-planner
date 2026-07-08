import type { CityDef, POI, Pace } from "../data/types";
import { regionById, poisByCity } from "../data";
import { intercityLeg } from "../data/transit";
import { haversineKm, transitMinutes, intercityMinutes, fmtDuration } from "./geo";
import { mulberry32, gumbelScore } from "./rng";

export interface PlanInput {
  regionId: string;
  days: number; // 1–10
  pace: Pace;
  seed: number; // 重骰 = 換 seed
  /** 出發日 ISO(yyyy-mm-dd)。有填就避開各點當天的固定公休。 */
  startDate?: string;
}

export interface PlanSlot {
  kind: "poi" | "meal" | "cafe" | "transit";
  /** minutes from 00:00 */
  start: number;
  end: number;
  poiId?: string; // poi / meal(有選到店時)
  note?: string; // transit 說明或「自由覓食」
}

export interface PlanDay {
  day: number; // 1-based
  cityId: string;
  /** 0=日 … 6=六;有填出發日才有。 */
  weekday?: number;
  areas: string[];
  slots: PlanSlot[];
}

export const WEEKDAY_CHAR = ["日", "一", "二", "三", "四", "五", "六"] as const;

export interface Plan {
  input: PlanInput;
  days: PlanDay[];
}

const PRIORITY_W = { 1: 3, 2: 2, 3: 1 } as const;

// 節奏參數:活動時間預算(不含移動)、一天的起訖、每天最多幾個分區。
const PACE_CFG = {
  relaxed: { budget: 360, dayStart: 9 * 60, dayEnd: 20 * 60, maxAreas: 2 },
  march: { budget: 600, dayStart: 8.5 * 60, dayEnd: 22 * 60, maxAreas: 3 },
} as const;

const LUNCH = 12 * 60;
const DINNER = 18 * 60;

/** 把天數依 POI 份量分給地區內的城市(largest remainder,cap maxDays)。 */
export function allocateDays(
  cities: CityDef[],
  totalDays: number,
): { city: CityDef; days: number }[] {
  const weights = cities.map((c) =>
    poisByCity(c.id).reduce((s, p) => s + PRIORITY_W[p.priority], 0),
  );
  const totalW = weights.reduce((a, b) => a + b, 0);
  if (totalW === 0) return [];
  const alloc = cities.map((c, i) => ({
    city: c,
    exact: (weights[i] / totalW) * totalDays,
    days: 0,
  }));
  // 天數夠分時每城保底 1 天(關西 5 天不能沒有奈良的鹿),
  // 不夠分時才純看權重淘汰小城市。
  const floor = totalDays >= cities.length ? 1 : 0;
  let used = 0;
  for (const a of alloc) {
    a.days = Math.min(Math.max(Math.floor(a.exact), floor), a.city.maxDays);
    used += a.days;
  }
  // 保底可能導致超分:從小數餘額最小、天數 >1 的城市開始扣回
  while (used > totalDays) {
    const donor = [...alloc]
      .filter((a) => a.days > 1)
      .sort((x, y) => x.exact - x.days - (y.exact - y.days))[0];
    if (!donor) break;
    donor.days--;
    used--;
  }
  // 剩餘天數按小數餘額大到小補
  const byRemainder = [...alloc].sort(
    (x, y) => y.exact - Math.floor(y.exact) - (x.exact - Math.floor(x.exact)),
  );
  let guard = 0;
  while (used < totalDays && guard++ < 100) {
    let gave = false;
    for (const a of byRemainder) {
      if (used >= totalDays) break;
      if (a.days < a.city.maxDays) {
        a.days++;
        used++;
        gave = true;
      }
    }
    if (!gave) break; // 全部城市都到上限
  }
  return alloc.filter((a) => a.days > 0).map(({ city, days }) => ({ city, days }));
}

interface AreaGroup {
  area: string;
  main: POI[]; // 非 food/cafe,照排程順序
  food: POI[];
  cafe: POI[];
  score: number;
}

/** 依 bestTime 排一天內的先後:morning 先、evening 殿後。 */
const TIME_ORDER = { morning: 0, any: 1, afternoon: 2, evening: 3 } as const;

function buildAreaGroups(pois: POI[], rnd: () => number): AreaGroup[] {
  const byArea = new Map<string, POI[]>();
  for (const p of pois) {
    const list = byArea.get(p.area);
    if (list) list.push(p);
    else byArea.set(p.area, [p]);
  }
  const groups: AreaGroup[] = [];
  for (const [area, list] of byArea) {
    const base = list.reduce((s, p) => s + PRIORITY_W[p.priority], 0);
    const sortKey = (p: POI) =>
      TIME_ORDER[p.bestTime] * 100 + p.priority * 10 + rnd();
    const sorted = [...list].sort((a, b) => sortKey(a) - sortKey(b));
    groups.push({
      area,
      main: sorted.filter((p) => p.category !== "food" && p.category !== "cafe"),
      food: sorted.filter((p) => p.category === "food"),
      cafe: sorted.filter((p) => p.category === "cafe"),
      score: gumbelScore(base, rnd),
    });
  }
  return groups.sort((a, b) => b.score - a.score);
}

/**
 * 排單一城市單一天。groups 會被就地消耗(跨天不重複)。
 * budgetCap:當天活動分鐘上限 —— 內容不夠塞滿整趟時,由呼叫端傳
 * 「剩餘內容 ÷ 剩餘天數」讓每天分得平均,避免前面塞滿最後一天空白。
 */
function planCityDay(
  pace: Pace,
  groups: AreaGroup[],
  budgetCap: number,
  weekday?: number,
  startCursor?: number,
): { areas: string[]; slots: PlanSlot[] } {
  const cfg = PACE_CFG[pace];
  const budget = Math.min(cfg.budget, budgetCap);
  // 當天公休的點跳過但不消耗,留給其他天排
  const closed = (p: POI) =>
    weekday != null && (p.closedDays?.includes(weekday) ?? false);
  const takeOpen = (list: POI[]): POI | undefined => {
    const i = list.findIndex((p) => !closed(p));
    return i === -1 ? undefined : list.splice(i, 1)[0];
  };
  const slots: PlanSlot[] = [];
  const areas: string[] = [];
  let cursor = Math.max(cfg.dayStart, startCursor ?? 0);
  let activity = 0;
  let lunchDone = false;
  let dinnerDone = false;
  let cafeDone = pace === "march"; // 行軍模式沒空喝咖啡
  let lastPoi: POI | null = null;

  const mealLen = pace === "relaxed" ? 60 : 45;
  const picked: AreaGroup[] = [];

  const tryMeal = (group: AreaGroup | undefined) => {
    // 到午/晚餐窗口就插一餐:優先用當前分區的 food POI,沒有就自由覓食。
    const wantLunch = !lunchDone && cursor >= LUNCH - 30;
    const wantDinner = !dinnerDone && cursor >= DINNER - 30;
    if (!wantLunch && !wantDinner) return;
    const food = group ? takeOpen(group.food) : undefined;
    const len = food ? food.stayMin[pace] : mealLen;
    slots.push({
      kind: "meal",
      start: cursor,
      end: cursor + len,
      poiId: food?.id,
      note: food ? undefined : wantLunch ? "自由覓食(午餐)" : "自由覓食(晚餐)",
    });
    cursor += len;
    if (food) lastPoi = food;
    if (wantLunch) lunchDone = true;
    else dinnerDone = true;
  };

  // 輕鬆模式:下午 14:00–16:30 之間找當前分區的咖啡廳歇腳一次
  const tryCafe = (group: AreaGroup) => {
    if (cafeDone || cursor < 14 * 60 || cursor > 16.5 * 60) return;
    const cafe = takeOpen(group.cafe);
    if (!cafe) return;
    const len = cafe.stayMin[pace];
    slots.push({ kind: "cafe", start: cursor, end: cursor + len, poiId: cafe.id });
    cursor += len;
    lastPoi = cafe;
    cafeDone = true;
  };

  while (areas.length < cfg.maxAreas && cursor < cfg.dayEnd && activity < budget) {
    const group = groups.find(
      (g) => g.main.some((p) => !closed(p)) || g.food.some((p) => !closed(p)),
    );
    if (!group) break;
    groups.splice(groups.indexOf(group), 1);
    picked.push(group);
    areas.push(group.area);

    // 跨分區移動
    if (lastPoi) {
      const target =
        group.main.find((p) => !closed(p)) ?? group.food.find((p) => !closed(p));
      if (target) {
        const min = transitMinutes(haversineKm(lastPoi.center, target.center));
        slots.push({
          kind: "transit",
          start: cursor,
          end: cursor + min,
          note: `移動到「${group.area}」(約 ${min} 分)`,
        });
        cursor += min;
      }
    }

    while (cursor < cfg.dayEnd && activity < budget) {
      tryMeal(group);
      tryCafe(group);
      const poi = takeOpen(group.main);
      if (!poi) break;
      const stay = poi.stayMin[pace];
      if (cursor + stay > cfg.dayEnd || activity + stay > budget + 45) {
        group.main.unshift(poi); // 塞不下就放回去,留給其他天
        break;
      }
      if (lastPoi && lastPoi.area === poi.area) cursor += 10; // 同分區步行
      slots.push({ kind: "poi", start: cursor, end: cursor + stay, poiId: poi.id });
      cursor += stay;
      activity += stay;
      lastPoi = poi;
    }
    tryMeal(group);
  }
  // 當天沒排完的分區放回 pool 尾端,剩餘的點留給之後的天
  for (const g of picked) {
    if (g.main.length > 0 || g.food.length > 0) groups.push(g);
  }
  // 收尾:晚餐還沒吃就補一槽
  if (!dinnerDone && cursor >= DINNER - 60) {
    slots.push({
      kind: "meal",
      start: Math.max(cursor, DINNER),
      end: Math.max(cursor, DINNER) + mealLen,
      note: "自由覓食(晚餐)",
    });
  }
  return { areas, slots };
}

export function buildPlan(input: PlanInput): Plan {
  const region = regionById(input.regionId);
  if (!region) return { input, days: [] };
  const rnd = mulberry32(input.seed);
  const alloc = allocateDays(region.cities, input.days);

  // 有出發日就算出每天星期幾,排程避開當天公休
  const startWeekday = input.startDate
    ? new Date(`${input.startDate}T00:00:00`).getDay()
    : undefined;

  const cfg = PACE_CFG[input.pace];
  const days: PlanDay[] = [];
  let dayNo = 1;
  let prevCity: CityDef | null = null;
  for (const { city, days: n } of alloc) {
    // 換城市的第一天,行程從城際移動之後才開始(以各城第一個 hub 為錨)
    let intercity: PlanSlot | null = null;
    if (prevCity) {
      // 優先查真實交通表(含路線建議),沒有的配對才用距離公式估
      const leg = intercityLeg(prevCity.id, city.id);
      const min =
        leg?.min ??
        intercityMinutes(
          haversineKm(prevCity.hubs[0].center, city.hubs[0].center),
        );
      const via = leg ? `・${leg.via}` : "";
      intercity = {
        kind: "transit",
        start: cfg.dayStart,
        end: cfg.dayStart + min,
        note: `🚄 從${prevCity.name}移動到${city.name}(約 ${fmtDuration(min)},含拉行李)${via}`,
      };
    }

    // 這城市的 POI 一次建組,跨這幾天共用消耗,不會重複排
    const groups = buildAreaGroups(poisByCity(city.id), rnd);
    for (let d = 0; d < n; d++) {
      // 公平分配:剩餘內容 ÷ 剩餘天數,內容不夠塞滿時每天分得平均
      const remainingStay = groups.reduce(
        (s, g) => s + g.main.reduce((x, p) => x + p.stayMin[input.pace], 0),
        0,
      );
      const fairBudget = Math.ceil(remainingStay / (n - d));
      const weekday =
        startWeekday != null ? (startWeekday + dayNo - 1) % 7 : undefined;
      const startCursor = d === 0 && intercity ? intercity.end : undefined;
      const { areas, slots } = planCityDay(
        input.pace,
        groups,
        fairBudget,
        weekday,
        startCursor,
      );
      if (d === 0 && intercity) slots.unshift(intercity);
      days.push({ day: dayNo++, cityId: city.id, weekday, areas, slots });
    }
    prevCity = city;
  }
  return { input, days };
}

export function fmtTime(min: number): string {
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
