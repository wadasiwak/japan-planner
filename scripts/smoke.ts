// 開發用煙霧測試:node_modules/.bin/esbuild --bundle 後用 node 跑,
// 快速確認 planner/suggest 輸出合理。不是正式測試。
import { buildPlan, fmtTime } from "../src/lib/planner";
import { suggest } from "../src/lib/suggest";
import { poiById } from "../src/data";

const plan = buildPlan({ regionId: "kanto", days: 3, pace: "march", seed: 42 });
for (const d of plan.days) {
  console.log(`\n=== Day ${d.day} [${d.cityId}] ${d.areas.join("、")}`);
  for (const s of d.slots) {
    const name = s.poiId ? poiById(s.poiId)?.name : s.note;
    console.log(`  ${fmtTime(s.start)}-${fmtTime(s.end)} [${s.kind}] ${name}`);
  }
}

console.log("\n=== P mode: 晚上7點在澀谷、還有3小時");
const sugg = suggest({
  cityId: "tokyo",
  hubId: "tokyo-sta-shibuya",
  nowMinutes: 19 * 60,
  hoursLeft: 3,
  pace: "relaxed",
  weekday: 3,
  rain: false,
  visited: new Set(),
  excludeIds: new Set(),
  seed: 7,
});
for (const s of sugg) {
  console.log(`  ${s.poi.name} (${s.km.toFixed(1)}km) — ${s.reasons.join("、")}`);
}

console.log("\n=== P mode: 早上9點在上野、下雨");
const sugg2 = suggest({
  cityId: "tokyo",
  hubId: "tokyo-sta-ueno",
  nowMinutes: 9 * 60,
  hoursLeft: 8,
  pace: "march",
  weekday: 1,
  rain: true,
  visited: new Set(),
  excludeIds: new Set(),
  seed: 7,
});
for (const s of sugg2) {
  console.log(`  ${s.poi.name} (${s.km.toFixed(1)}km) — ${s.reasons.join("、")}`);
}
