// 內容驗證器:把 src/data bundle 成臨時 ESM 後載入,檢查每個 POI / Hub /
// City 的完整性。內容擴充批次(subagent 產的分片)合入前必跑。
//
// 單檔模式:`node scripts/check-content.mjs src/data/cities/osaka.ts`
// 只驗那一個城市檔(exports { city, pois }),給內容產生 agent 自驗用。
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = mkdtempSync(join(tmpdir(), "jp-check-"));
const bundle = join(tmp, "data.mjs");

const singleFile = process.argv[2];
const entry = singleFile ? join(root, singleFile) : join(root, "src/data/index.ts");

execFileSync(
  join(root, "node_modules/.bin/rolldown"),
  [entry, "--format", "esm", "--platform", "node", "--file", bundle],
  { stdio: ["ignore", "ignore", "inherit"] },
);

const mod = await import(pathToFileURL(bundle).href);
rmSync(tmp, { recursive: true, force: true });

// 單檔模式:把單一城市包成一個虛擬 region 走同一套檢查
const { REGIONS, ALL_POIS, CITIES } = singleFile
  ? {
      REGIONS: [
        {
          id: "single",
          name: "(單檔檢查)",
          emoji: "🔍",
          blurb: "single-file check",
          cities: [mod.city],
        },
      ],
      ALL_POIS: mod.pois,
      CITIES: [mod.city],
    }
  : mod;

const errors = [];
const warn = [];
const err = (msg) => errors.push(msg);

// 日本大致範圍(含沖繩、北海道)
const JAPAN = { minLat: 24, maxLat: 45.7, minLng: 122.5, maxLng: 146 };
const inBox = (c, b) =>
  c.lat >= b.minLat && c.lat <= b.maxLat && c.lng >= b.minLng && c.lng <= b.maxLng;

const CATEGORIES = new Set([
  "sight", "temple", "nature", "museum", "food", "cafe", "shopping", "nightlife", "experience",
]);
const BEST_TIMES = new Set(["morning", "afternoon", "evening", "any"]);

// --- Regions / Cities / Hubs ---
const cityById = new Map();
const hubIds = new Set();
const seenRegion = new Set();
for (const r of REGIONS) {
  if (seenRegion.has(r.id)) err(`region 重複 id: ${r.id}`);
  seenRegion.add(r.id);
  if (!r.name || !r.emoji || !r.blurb) err(`region ${r.id}: 缺 name/emoji/blurb`);
  for (const c of r.cities) {
    if (cityById.has(c.id)) err(`city 重複 id: ${c.id}`);
    cityById.set(c.id, c);
    if (!c.name || !c.nameJa || !c.emoji) err(`city ${c.id}: 缺 name/nameJa/emoji`);
    if (!(c.maxDays >= 1 && c.maxDays <= 10)) err(`city ${c.id}: maxDays 不合理 (${c.maxDays})`);
    const b = c.bbox;
    if (!b || b.minLat >= b.maxLat || b.minLng >= b.maxLng) err(`city ${c.id}: bbox 不合法`);
    if (!c.hubs || c.hubs.length < 3) err(`city ${c.id}: hubs 少於 3 個`);
    for (const h of c.hubs ?? []) {
      if (hubIds.has(h.id)) err(`hub 重複 id: ${h.id}`);
      hubIds.add(h.id);
      if (!h.id.startsWith(`${c.id}-`)) err(`hub ${h.id}: id 需以 "${c.id}-" 開頭`);
      if (!h.name || !h.nameJa) err(`hub ${h.id}: 缺 name/nameJa`);
      if (!inBox(h.center, b)) err(`hub ${h.id}: 座標超出 ${c.id} bbox`);
    }
  }
}

// --- POIs ---
const poiIds = new Set();
for (const p of ALL_POIS) {
  const tag = `poi ${p.id}`;
  if (poiIds.has(p.id)) err(`${tag}: 重複 id`);
  poiIds.add(p.id);
  const city = cityById.get(p.city);
  if (!city) {
    err(`${tag}: city "${p.city}" 不存在`);
    continue;
  }
  if (!p.id.startsWith(`${p.city}-`)) err(`${tag}: id 需以 "${p.city}-" 開頭`);
  if (!p.name || !p.nameJa) err(`${tag}: 缺 name/nameJa`);
  if (!p.area) err(`${tag}: 缺 area`);
  if (!inBox(p.center, JAPAN)) err(`${tag}: 座標不在日本境內 (${p.center.lat}, ${p.center.lng})`);
  else if (!inBox(p.center, city.bbox)) err(`${tag}: 座標超出 ${p.city} bbox (${p.center.lat}, ${p.center.lng})`);
  if (!CATEGORIES.has(p.category)) err(`${tag}: category 不合法 "${p.category}"`);
  if (!BEST_TIMES.has(p.bestTime)) err(`${tag}: bestTime 不合法 "${p.bestTime}"`);
  if (!p.blurb || p.blurb.length < 20) err(`${tag}: blurb 缺或太短`);
  if (p.blurb && p.blurb.length > 160) warn.push(`${tag}: blurb 偏長 (${p.blurb.length} 字)`);
  const s = p.stayMin;
  if (!s || !(s.march >= 15) || !(s.relaxed >= s.march) || s.relaxed > 360)
    err(`${tag}: stayMin 不合理 (relaxed=${s?.relaxed}, march=${s?.march})`);
  if (![1, 2, 3].includes(p.priority)) err(`${tag}: priority 不合法`);
  if (typeof p.indoor !== "boolean") err(`${tag}: indoor 需為 boolean`);
  if (!hubIds.has(p.nearHub)) err(`${tag}: nearHub "${p.nearHub}" 不存在`);
  else if (!p.nearHub.startsWith(`${p.city}-`)) err(`${tag}: nearHub 不屬於 ${p.city}`);
  if (p.closedDays && p.closedDays.some((d) => d < 0 || d > 6)) err(`${tag}: closedDays 需為 0–6`);
}

// --- 城際交通表:同地區內每對城市都要有真實時刻(避免 fallback 公式低估) ---
if (!singleFile && mod.intercityLeg) {
  for (const r of REGIONS) {
    for (let i = 0; i < r.cities.length; i++) {
      for (let j = i + 1; j < r.cities.length; j++) {
        const [a, b] = [r.cities[i].id, r.cities[j].id];
        const leg = mod.intercityLeg(a, b);
        if (!leg) err(`transit: ${r.id} 缺 ${a} ↔ ${b} 的城際交通`);
        else if (leg.min < 20 || leg.min > 420)
          err(`transit: ${a}↔${b} 時間不合理 (${leg.min} 分)`);
      }
    }
  }
}

// --- 每城市內容量統計 ---
console.log("📊 內容統計");
for (const r of REGIONS) {
  const parts = r.cities.map((c) => {
    const n = ALL_POIS.filter((p) => p.city === c.id).length;
    if (n > 0 && n < 8) warn.push(`city ${c.id}: 只有 ${n} 個 POI,P人模式會很快沒東西推`);
    return `${c.name} ${n}`;
  });
  console.log(`  ${r.emoji} ${r.name}: ${parts.join(" / ")}`);
}
console.log(`  合計 ${ALL_POIS.length} POI / ${CITIES.length} 城市 / ${REGIONS.length} 地區`);

for (const w of warn) console.log(`⚠️  ${w}`);
if (errors.length) {
  console.error(`\n❌ ${errors.length} 個錯誤:`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`\n✅ 內容驗證通過${warn.length ? `(${warn.length} 個警告)` : ""}`);
