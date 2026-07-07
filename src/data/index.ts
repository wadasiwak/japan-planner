import type { RegionDef, CityDef, Hub, POI } from "./types";
import * as kanto from "./pois/kanto";

// Region modules: each exports `region: RegionDef` and `pois: POI[]`.
// Expansion shards (<region>_more*.ts) export only `pois` and are appended
// to EXTRA_POIS below.
const REGION_MODULES: { region: RegionDef; pois: POI[] }[] = [kanto];

const EXTRA_POIS: POI[][] = [];

export const REGIONS: RegionDef[] = REGION_MODULES.map((m) => m.region);

export const ALL_POIS: POI[] = [
  ...REGION_MODULES.flatMap((m) => m.pois),
  ...EXTRA_POIS.flat(),
];

export const CITIES: CityDef[] = REGIONS.flatMap((r) => r.cities);

const cityIndex = new Map(CITIES.map((c) => [c.id, c]));
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
