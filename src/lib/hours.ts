import type { POI } from "../data/types";

/**
 * 「最晚幾點前要結束參觀」的類別啟發式(分,從 00:00 起算)。
 * 資料層沒有逐點營業時間,用類別粗估:美術館/體驗設施多 17-18 關門、
 * 寺社 16:30-17、購物街 20-21;夜景/夜生活與 bestTime=evening 的點不設限,
 * 吃的交給用餐邏輯。寧可保守,別把美術館排到晚上八點。
 */
/**
 * 「最早幾點開始才有意義」(分):夜生活/夜景 16:00 前不排——
 * 早上九點的歡樂街只有鐵門可看。afternoon 限定的點 11:00 起。
 */
export function earliestStartMin(p: POI): number {
  if (p.category === "nightlife" || p.bestTime === "evening") return 16 * 60;
  if (p.bestTime === "afternoon") return 11 * 60;
  return 0;
}

export function latestEndMin(p: POI): number {
  if (p.bestTime === "evening" || p.category === "nightlife") return 24 * 60;
  switch (p.category) {
    case "museum":
    case "experience":
      return 18 * 60;
    case "temple":
      return 17.5 * 60;
    case "nature":
      return 18.5 * 60;
    case "sight":
      return 20 * 60;
    case "shopping":
      return 20.5 * 60;
    default:
      return 24 * 60; // food / cafe
  }
}
