import type { RegionDef, CityDef, Hub, POI } from "./types";
import { REGION_META } from "./regions";
import * as tokyo from "./cities/tokyo";

// 城市模組:每個 exports `city: CityDef` 與 `pois: POI[]`。
// 新增城市 → cities/<id>.ts + 在這裡 import + 掛進 CITY_MODULES。
const CITY_MODULES: { city: CityDef; pois: POI[] }[] = [tokyo];

export const CITIES: CityDef[] = CITY_MODULES.map((m) => m.city);

const cityIndex = new Map(CITIES.map((c) => [c.id, c]));

// REGION_META 裡還沒有內容檔的城市先跳過,內容批次補上後自動出現。
export const REGIONS: RegionDef[] = REGION_META.map((r) => ({
  id: r.id,
  name: r.name,
  emoji: r.emoji,
  blurb: r.blurb,
  cities: r.cityIds
    .map((id) => cityIndex.get(id))
    .filter((c): c is CityDef => !!c),
})).filter((r) => r.cities.length > 0);

export const ALL_POIS: POI[] = CITY_MODULES.flatMap((m) => m.pois);

const hubIndex = new Map<string, Hub>(
  CITIES.flatMap((c) => c.hubs.map((h) => [h.id, h] as const)),
);
const poiIndex = new Map(ALL_POIS.map((p) => [p.id, p]));

const poisByCityIndex = new Map<string, POI[]>();
for (const p of ALL_POIS) {
  const list = poisByCityIndex.get(p.city);
  if (list) list.push(p);
  else poisByCityIndex.set(p.city, [p]);
}

export const cityById = (id: string): CityDef | undefined => cityIndex.get(id);
export const hubById = (id: string): Hub | undefined => hubIndex.get(id);
export const poiById = (id: string): POI | undefined => poiIndex.get(id);
export const poisByCity = (cityId: string): POI[] =>
  poisByCityIndex.get(cityId) ?? [];
export const regionById = (id: string): RegionDef | undefined =>
  REGIONS.find((r) => r.id === id);
