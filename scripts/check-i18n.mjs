// 翻譯包驗證器。
// 單檔模式(給翻譯 agent 自驗):node scripts/check-i18n.mjs en src/data/i18n/en/kanto.ts
//   檢查該檔涵蓋的每個城市:所有 POI/分區/伴手禮齊全、en 要有 name、字數合理。
// 全量模式(接線後):node scripts/check-i18n.mjs en
//   要求 55 城 830 POI 全覆蓋。
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const [lang, singleFile] = process.argv.slice(2);
if (!["en", "ja"].includes(lang)) {
  console.error("用法: node scripts/check-i18n.mjs <en|ja> [regionFile.ts]");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = mkdtempSync(join(tmpdir(), "jp-i18n-"));
const bundle = (entry, out) => {
  execFileSync(
    join(root, "node_modules/.bin/rolldown"),
    [join(root, entry), "--format", "esm", "--platform", "node", "--file", join(tmp, out)],
    { stdio: ["ignore", "ignore", "inherit"] },
  );
  return import(pathToFileURL(join(tmp, out)).href);
};

const data = await bundle("src/data/index.ts", "data.mjs");
const mod = singleFile
  ? await bundle(singleFile, "dict.mjs")
  : await bundle(`src/data/i18n/${lang}/index.ts`, "dict.mjs");
rmSync(tmp, { recursive: true, force: true });

const cities = singleFile ? mod.cities : mod.DICT.cities;
const errors = [];
const err = (m) => errors.push(m);

// 全量模式要求全部城市;單檔模式只驗檔內城市
const targetCityIds = singleFile
  ? Object.keys(cities ?? {})
  : data.CITIES.map((c) => c.id);
if (!targetCityIds.length) err("翻譯檔沒有任何城市");
if (!singleFile) {
  for (const c of data.CITIES) if (!cities[c.id]) err(`缺城市 ${c.id}`);
  const regions = mod.DICT.regions ?? {};
  for (const r of data.REGIONS)
    if (!regions[r.id]?.name || !regions[r.id]?.blurb) err(`缺地區翻譯 ${r.id}`);
}

for (const cityId of targetCityIds) {
  const tr = cities[cityId];
  const city = data.cityById(cityId);
  if (!city) {
    err(`${cityId}: 不存在的城市 id`);
    continue;
  }
  if (!tr?.name) err(`${cityId}: 缺 name`);
  const pois = data.poisByCity(cityId);
  const areas = new Set(pois.map((p) => p.area));
  for (const a of areas)
    if (!tr.areas?.[a]) err(`${cityId}: 缺分區譯名「${a}」`);
  for (const a of Object.keys(tr.areas ?? {}))
    if (!areas.has(a)) err(`${cityId}: 多出不存在的分區 key「${a}」`);
  if (lang === "en") {
    for (const h of city.hubs)
      if (!tr.hubs?.[h.id]) err(`${cityId}: 缺 hub 譯名 ${h.id}`);
  }
  if (city.souvenirs?.length) {
    if (!tr.souvenirs || tr.souvenirs.length !== city.souvenirs.length)
      err(`${cityId}: souvenirs 數量不符(原 ${city.souvenirs.length})`);
  }
  for (const p of pois) {
    const pt = tr.pois?.[p.id];
    if (!pt) {
      err(`${cityId}: 缺 POI ${p.id}`);
      continue;
    }
    if (lang === "en" && !pt.name) err(`${p.id}: en 缺 name`);
    if (!pt.blurb || pt.blurb.length < 20) err(`${p.id}: blurb 缺或太短`);
    if (p.tips && !pt.tips) err(`${p.id}: 原文有 tips 但沒翻`);
  }
  const extraPois = Object.keys(tr.pois ?? {}).filter(
    (id) => !pois.some((p) => p.id === id),
  );
  for (const id of extraPois) err(`${cityId}: 多出不存在的 POI key ${id}`);
}

if (errors.length) {
  console.error(`❌ ${errors.length} 個問題:`);
  for (const e of errors.slice(0, 40)) console.error(`  - ${e}`);
  if (errors.length > 40) console.error(`  …還有 ${errors.length - 40} 個`);
  process.exit(1);
}
console.log(
  `✅ ${lang} 翻譯驗證通過(${targetCityIds.length} 城市,${targetCityIds.reduce(
    (s, id) => s + Object.keys(cities[id].pois ?? {}).length,
    0,
  )} POI)`,
);
