import type { POI, Pace } from "../data/types";
import { poisByCity, hubById } from "../data";
import { haversineKm, transitMinutes } from "./geo";
import { mulberry32, gumbelScore } from "./rng";

export interface SuggestInput {
  cityId: string;
  hubId: string;
  /** 現在時刻(分,從 00:00 起算)。 */
  nowMinutes: number;
  /** 今天還想玩幾小時。 */
  hoursLeft: number;
  pace: Pace;
  /** 今天星期幾(0=日 … 6=六),過濾公休。 */
  weekday: number;
  /** 現在月份(1–12),過濾季節限定、加權當季。 */
  month?: number;
  /** 下雨模式:只出室內。 */
  rain: boolean;
  visited: Set<string>;
  /** 「換一批」時已出過的,先避開。 */
  excludeIds: Set<string>;
  seed: number;
}

export interface Suggestion {
  poi: POI;
  km: number;
  transitMin: number;
  reasons: string[];
}

function timeSlot(nowMinutes: number): "morning" | "afternoon" | "evening" {
  if (nowMinutes < 11 * 60) return "morning";
  if (nowMinutes < 17 * 60) return "afternoon";
  return "evening";
}

const SLOT_LABEL = { morning: "早上", afternoon: "下午", evening: "晚上" } as const;

function candidates(input: SuggestInput, ignoreExclude: boolean): POI[] {
  const hub = hubById(input.hubId);
  if (!hub) return [];
  const slot = timeSlot(input.nowMinutes);
  const budgetMin = input.hoursLeft * 60;
  return poisByCity(input.cityId).filter((p) => {
    if (input.visited.has(p.id)) return false;
    if (!ignoreExclude && input.excludeIds.has(p.id)) return false;
    if (p.closedDays?.includes(input.weekday)) return false;
    if (input.month && p.months && !p.months.includes(input.month)) return false;
    if (input.rain && !p.indoor) return false;
    // 硬性不合時段:早上限定的點傍晚後不推、晚上限定的點早上不推
    if (p.bestTime === "morning" && slot === "evening") return false;
    if (p.bestTime === "evening" && slot === "morning") return false;
    // 剩餘時間要塞得下移動+停留
    const t = transitMinutes(haversineKm(hub.center, p.center));
    return t + p.stayMin[input.pace] <= budgetMin;
  });
}

export function suggest(input: SuggestInput): Suggestion[] {
  const hub = hubById(input.hubId);
  if (!hub) return [];
  const slot = timeSlot(input.nowMinutes);
  const rnd = mulberry32(input.seed);

  // 避開出過的;不夠選就把出過的放回來
  let pool = candidates(input, false);
  if (pool.length < 3) pool = candidates(input, true);

  const scored = pool.map((p) => {
    const km = haversineKm(hub.center, p.center);
    const base =
      (4 - p.priority) * 2 + // 必去 6 / 推薦 4 / 湊數 2
      (p.bestTime === slot ? 1.5 : 0) +
      (p.bestTime === "any" ? 0.5 : 0) +
      (input.month && p.bestMonths?.includes(input.month) ? 1.5 : 0) - // 當季加分
      Math.min(km * 1.2, 6); // 距離罰分,封頂避免直接淘汰遠處必去
    return { p, km, score: gumbelScore(base, rnd) };
  });
  scored.sort((a, b) => b.score - a.score);

  const n = input.pace === "march" ? 4 : 3;
  return scored.slice(0, n).map(({ p, km }) => {
    const t = transitMinutes(km);
    const reasons: string[] = [];
    if (km <= 1) reasons.push("走路就到");
    else reasons.push(`移動約 ${t} 分`);
    if (p.priority === 1) reasons.push("必去清單");
    if (p.bestTime === slot) reasons.push(`${SLOT_LABEL[slot]}去正合適`);
    if (input.month && p.bestMonths?.includes(input.month))
      reasons.push("正是當季");
    if (input.rain && p.indoor) reasons.push("下雨也不怕");
    return { poi: p, km, transitMin: t, reasons };
  });
}
