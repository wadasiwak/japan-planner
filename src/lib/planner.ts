import type { CityDef, POI, Pace, Category } from "../data/types";
import { regionById, poisByCity, poiById, cityById } from "../data";
import { intercityLeg } from "../data/transit";
import { haversineKm, transitMinutes, intercityMinutes, fmtDuration } from "./geo";
import { mulberry32, gumbelScore } from "./rng";

export interface PlanInput {
  regionId: string;
  days: number; // 1–10
  pace: Pace;
  seed: number; // 重骰 = 換 seed
  /** 出發日 ISO(yyyy-mm-dd)。有填就避開公休、過濾季節限定、加權當季。 */
  startDate?: string;
  /** 興趣偏好:這些類別加權多排。 */
  prefs?: Category[];
}

export interface PlanSlot {
  kind: "poi" | "meal" | "cafe" | "transit";
  /** minutes from 00:00 */
  start: number;
  end: number;
  poiId?: string; // poi / cafe / meal(有選到店時)
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

export interface Plan {
  input: PlanInput;
  days: PlanDay[];
}

export const WEEKDAY_CHAR = ["日", "一", "二", "三", "四", "五", "六"] as const;

const PRIORITY_W = { 1: 3, 2: 2, 3: 1 } as const;

// 節奏參數:活動時間預算(不含移動)、一天的起訖、每天最多幾個分區。
const PACE_CFG = {
  relaxed: { budget: 360, dayStart: 9 * 60, dayEnd: 20 * 60, maxAreas: 2 },
  march: { budget: 600, dayStart: 8.5 * 60, dayEnd: 22 * 60, maxAreas: 3 },
} as const;

const LUNCH = 12 * 60;
const DINNER = 18 * 60;

/** 排程上下文:亂數、星期、月份(季節)、偏好。 */
interface Ctx {
  rnd: () => number;
  weekday?: number;
  month?: number;
  prefs?: Set<Category>;
  startCursor?: number;
}

/** 季節硬過濾:有 months 且不含當月就不排。月份未知(沒填出發日)一律通過。 */
export const seasonOk = (p: POI, month?: number): boolean =>
  month == null || !p.months || p.months.includes(month);

const inSeasonBoost = (p: POI, month?: number): boolean =>
  month != null && !!p.bestMonths?.includes(month);

/** 把天數依 POI 份量分給地區內的城市(每城保底+largest remainder,cap maxDays)。 */
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
  main: POI[]; // 非 food/cafe
  food: POI[];
  cafe: POI[];
  score: number;
}

function buildAreaGroups(pois: POI[], ctx: Ctx): AreaGroup[] {
  const byArea = new Map<string, POI[]>();
  for (const p of pois) {
    if (!seasonOk(p, ctx.month)) continue;
    const list = byArea.get(p.area);
    if (list) list.push(p);
    else byArea.set(p.area, [p]);
  }
  const groups: AreaGroup[] = [];
  for (const [area, list] of byArea) {
    // 分區份量:優先度+偏好類別+當季加分。
    // 偏好權重要大到能翻轉分區選擇(組成由選哪些分區決定,分區內只是順序)。
    const base = list.reduce(
      (s, p) =>
        s +
        PRIORITY_W[p.priority] +
        (ctx.prefs?.has(p.category) ? 2.5 : 0) +
        (inSeasonBoost(p, ctx.month) ? 1.5 : 0),
      0,
    );
    groups.push({
      area,
      main: list.filter((p) => p.category !== "food" && p.category !== "cafe"),
      food: list.filter((p) => p.category === "food"),
      cafe: list.filter((p) => p.category === "cafe"),
      score: gumbelScore(base, ctx.rnd),
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
  ctx: Ctx,
): { areas: string[]; slots: PlanSlot[] } {
  const cfg = PACE_CFG[pace];
  const budget = Math.min(cfg.budget, budgetCap);
  // 當天公休的點跳過但不消耗,留給其他天排
  const closed = (p: POI) =>
    ctx.weekday != null && (p.closedDays?.includes(ctx.weekday) ?? false);
  // 依評分取最佳(跳過公休);評分越低越好
  const takeBest = (
    list: POI[],
    score: (p: POI) => number,
  ): POI | undefined => {
    let bi = -1;
    let bs = Infinity;
    for (let i = 0; i < list.length; i++) {
      if (closed(list[i])) continue;
      const s = score(list[i]);
      if (s < bs) {
        bs = s;
        bi = i;
      }
    }
    return bi === -1 ? undefined : list.splice(bi, 1)[0];
  };

  const slots: PlanSlot[] = [];
  const areas: string[] = [];
  let cursor = Math.max(cfg.dayStart, ctx.startCursor ?? 0);
  let activity = 0;
  let lunchDone = false;
  let dinnerDone = false;
  let cafeDone = pace === "march"; // 行軍模式沒空喝咖啡
  let lastPoi: POI | null = null;

  const mealLen = pace === "relaxed" ? 60 : 45;
  const picked: AreaGroup[] = [];

  /** 與目前所在點的距離(km);一天剛開始還沒有定位就當 0。 */
  const distFrom = (p: POI) => (lastPoi ? haversineKm(lastPoi.center, p.center) : 0);

  const tryMeal = (group: AreaGroup | undefined) => {
    // 到午/晚餐窗口就插一餐:選離目前位置最近的 food POI;
    // 最近的都超過 2km 就不專程跑,改自由覓食(在附近隨便吃)。
    const wantLunch = !lunchDone && cursor >= LUNCH - 30;
    const wantDinner = !dinnerDone && cursor >= DINNER - 30;
    if (!wantLunch && !wantDinner) return;
    let food = group ? takeBest(group.food, distFrom) : undefined;
    if (food && distFrom(food) > 2) {
      group!.food.push(food);
      food = undefined;
    }
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

  // 輕鬆模式:下午 14:00–16:30 之間就近歇腳一次;要走超過 1.5km 就算了
  const tryCafe = (group: AreaGroup) => {
    if (cafeDone || cursor < 14 * 60 || cursor > 16.5 * 60) return;
    const cafe = takeBest(group.cafe, distFrom);
    if (!cafe) return;
    if (distFrom(cafe) > 1.5) {
      group.cafe.push(cafe);
      return;
    }
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
      // 最近鄰優先:距離為主,優先度/偏好/當季小幅加權;
      // 夜間限定的點白天先壓後、早晨限定的點下午降權,避免路線來回拉扯
      const poi = takeBest(group.main, (p) => {
        let s = distFrom(p) + (p.priority - 1) * 0.6 + ctx.rnd() * 0.4;
        if (ctx.prefs?.has(p.category)) s -= 1.2;
        if (inSeasonBoost(p, ctx.month)) s -= 1.5;
        if (p.bestTime === "evening" && cursor < 16 * 60) s += 5;
        if (p.bestTime === "morning" && cursor >= 13 * 60) s += 2;
        return s;
      });
      if (!poi) break;
      const stay = poi.stayMin[pace];
      if (cursor + stay > cfg.dayEnd || activity + stay > budget + 45) {
        group.main.unshift(poi); // 塞不下就放回去,留給其他天
        break;
      }
      if (lastPoi && lastPoi.area === poi.area)
        cursor += transitMinutes(distFrom(poi)); // 同分區依實距步行
      slots.push({ kind: "poi", start: cursor, end: cursor + stay, poiId: poi.id });
      cursor += stay;
      activity += stay;
      lastPoi = poi;
    }
    tryMeal(group);
  }
  // 當天沒排完的分區放回 pool 尾端,剩餘的點留給之後的天
  for (const g of picked) {
    if (g.main.length > 0 || g.food.length > 0 || g.cafe.length > 0) groups.push(g);
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

const monthOf = (startDate?: string): number | undefined =>
  startDate ? new Date(`${startDate}T00:00:00`).getMonth() + 1 : undefined;

/** 換城市第一天開頭的城際移動時段。 */
function intercitySlot(prev: CityDef, next: CityDef, pace: Pace): PlanSlot {
  const cfg = PACE_CFG[pace];
  // 優先查真實交通表(含路線建議),沒有的配對才用距離公式估
  const leg = intercityLeg(prev.id, next.id);
  const min =
    leg?.min ??
    intercityMinutes(haversineKm(prev.hubs[0].center, next.hubs[0].center));
  const via = leg ? `・${leg.via}` : "";
  return {
    kind: "transit",
    start: cfg.dayStart,
    end: cfg.dayStart + min,
    note: `🚄 從${prev.name}移動到${next.name}(約 ${fmtDuration(min)},含拉行李)${via}`,
  };
}

export function buildPlan(input: PlanInput): Plan {
  const region = regionById(input.regionId);
  if (!region) return { input, days: [] };
  const rnd = mulberry32(input.seed);
  const alloc = allocateDays(region.cities, input.days);
  const month = monthOf(input.startDate);
  const prefs = input.prefs?.length ? new Set(input.prefs) : undefined;

  // 有出發日就算出每天星期幾,排程避開當天公休
  const startWeekday = input.startDate
    ? new Date(`${input.startDate}T00:00:00`).getDay()
    : undefined;

  const days: PlanDay[] = [];
  let dayNo = 1;
  let prevCity: CityDef | null = null;
  for (const { city, days: n } of alloc) {
    const intercity = prevCity ? intercitySlot(prevCity, city, input.pace) : null;

    // 這城市的 POI 一次建組,跨這幾天共用消耗,不會重複排
    const ctx: Ctx = { rnd, month, prefs };
    const groups = buildAreaGroups(poisByCity(city.id), ctx);
    for (let d = 0; d < n; d++) {
      // 公平分配:剩餘內容 ÷ 剩餘天數,內容不夠塞滿時每天分得平均
      const remainingStay = groups.reduce(
        (s, g) => s + g.main.reduce((x, p) => x + p.stayMin[input.pace], 0),
        0,
      );
      const fairBudget = Math.ceil(remainingStay / (n - d));
      const weekday =
        startWeekday != null ? (startWeekday + dayNo - 1) % 7 : undefined;
      const { areas, slots } = planCityDay(input.pace, groups, fairBudget, {
        ...ctx,
        weekday,
        startCursor: d === 0 && intercity ? intercity.end : undefined,
      });
      if (d === 0 && intercity) slots.unshift(intercity);
      days.push({ day: dayNo++, cityId: city.id, weekday, areas, slots });
    }
    prevCity = city;
  }
  return { input, days };
}

// ---------------------------------------------------------------------------
// 行程編輯:單點替換 / 不去 / 鎖定日重骰
// ---------------------------------------------------------------------------

/** 重排一天的時間軸:保留順序與型態,重新累計時間(含同分區步行)。 */
export function retimeDay(day: PlanDay, pace: Pace): PlanDay {
  const cfg = PACE_CFG[pace];
  const mealLen = pace === "relaxed" ? 60 : 45;
  let cursor = day.slots[0]?.start ?? cfg.dayStart;
  let prevPoi: POI | undefined;
  const slots = day.slots.map((s) => {
    const poi = s.poiId ? poiById(s.poiId) : undefined;
    let dur = s.end - s.start;
    if (poi) dur = poi.stayMin[pace];
    else if (s.kind === "meal") dur = mealLen;
    // 兩個相鄰景點間補步行時間(原本 transit slot 的照舊)
    if (poi && prevPoi && s.kind !== "transit")
      cursor += transitMinutes(haversineKm(prevPoi.center, poi.center)) - 10 > 0
        ? transitMinutes(haversineKm(prevPoi.center, poi.center))
        : 10;
    const out = { ...s, start: cursor, end: cursor + dur };
    cursor += dur;
    if (poi) prevPoi = poi;
    return out;
  });
  return { ...day, slots };
}

/** 把某一格從行程拿掉(不去了),當天時間軸重排。 */
export function removeSlot(plan: Plan, dayIdx: number, slotIdx: number): Plan {
  const days = plan.days.map((d, i) =>
    i === dayIdx
      ? retimeDay({ ...d, slots: d.slots.filter((_, j) => j !== slotIdx) }, plan.input.pace)
      : d,
  );
  return { ...plan, days };
}

/** 換一個:同城市、同型態、就近的未用景點。找不到回 null。 */
export function replaceSlot(
  plan: Plan,
  dayIdx: number,
  slotIdx: number,
  seed: number,
): Plan | null {
  const day = plan.days[dayIdx];
  const slot = day?.slots[slotIdx];
  const old = slot?.poiId ? poiById(slot.poiId) : undefined;
  if (!day || !slot || !old) return null;
  const rnd = mulberry32(seed);
  const month = monthOf(plan.input.startDate);
  const used = new Set(
    plan.days.flatMap((d) => d.slots.map((s) => s.poiId)).filter(Boolean),
  );
  const wantKind = (p: POI) =>
    slot.kind === "meal"
      ? p.category === "food"
      : slot.kind === "cafe"
        ? p.category === "cafe"
        : p.category !== "food" && p.category !== "cafe";
  const candidates = poisByCity(day.cityId).filter(
    (p) =>
      !used.has(p.id) &&
      wantKind(p) &&
      seasonOk(p, month) &&
      !(day.weekday != null && p.closedDays?.includes(day.weekday)),
  );
  if (!candidates.length) return null;
  const best = candidates
    .map((p) => ({
      p,
      s: haversineKm(old.center, p.center) + (p.priority - 1) * 0.4 + rnd() * 0.3,
    }))
    .sort((a, b) => a.s - b.s)[0].p;
  const days = plan.days.map((d, i) =>
    i === dayIdx
      ? retimeDay(
          {
            ...d,
            slots: d.slots.map((s, j) =>
              j === slotIdx ? { ...s, poiId: best.id, note: undefined } : s,
            ),
          },
          plan.input.pace,
        )
      : d,
  );
  return { ...plan, days };
}

/** 重骰,但鎖住的天(day 編號)原封不動,其他天避開鎖定天已用的點。 */
export function rerollUnlocked(
  plan: Plan,
  lockedDays: Set<number>,
  seed: number,
): Plan {
  if (lockedDays.size === 0) return buildPlan({ ...plan.input, seed });
  const input = { ...plan.input, seed };
  const rnd = mulberry32(seed);
  const month = monthOf(input.startDate);
  const prefs = input.prefs?.length ? new Set(input.prefs) : undefined;
  const usedInLocked = new Set(
    plan.days
      .filter((d) => lockedDays.has(d.day))
      .flatMap((d) => d.slots.map((s) => s.poiId))
      .filter((x): x is string => !!x),
  );

  // 依原行程的天→城市對應重排(不重新分配天數,鎖定才有意義)
  const days: PlanDay[] = [];
  let i = 0;
  let prevCityId: string | null = null;
  while (i < plan.days.length) {
    const cityId = plan.days[i].cityId;
    const cityDays: (PlanDay & { done?: boolean })[] = [];
    while (i < plan.days.length && plan.days[i].cityId === cityId)
      cityDays.push({ ...plan.days[i++] });
    const city = cityById(cityId)!;
    const ctx: Ctx = { rnd, month, prefs };
    const groups = buildAreaGroups(
      poisByCity(cityId).filter((p) => !usedInLocked.has(p.id)),
      ctx,
    );
    const intercity =
      prevCityId && prevCityId !== cityId
        ? intercitySlot(cityById(prevCityId)!, city, input.pace)
        : null;
    const unlockedLeft = () =>
      cityDays.filter((d) => !lockedDays.has(d.day) && !d.done);
    for (const d of cityDays) {
      if (lockedDays.has(d.day)) {
        days.push({
          day: d.day,
          cityId,
          weekday: d.weekday,
          areas: d.areas,
          slots: d.slots,
        });
        d.done = true;
        continue;
      }
      const remainingStay = groups.reduce(
        (s, g) => s + g.main.reduce((x, p) => x + p.stayMin[input.pace], 0),
        0,
      );
      const fairBudget = Math.ceil(remainingStay / Math.max(1, unlockedLeft().length));
      const isCityFirst = d === cityDays[0];
      const { areas, slots } = planCityDay(input.pace, groups, fairBudget, {
        ...ctx,
        weekday: d.weekday,
        startCursor: isCityFirst && intercity ? intercity.end : undefined,
      });
      if (isCityFirst && intercity) slots.unshift(intercity);
      days.push({ day: d.day, cityId, weekday: d.weekday, areas, slots });
      d.done = true;
    }
    prevCityId = cityId;
  }
  return { input, days };
}

export function fmtTime(min: number): string {
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
