import type { RegionDef, CityDef, Hub, POI } from "./types";
import { REGION_META } from "./regions";
import * as tokyo from "./cities/tokyo";
import * as yokohama from "./cities/yokohama";
import * as kamakura from "./cities/kamakura";
import * as nikko from "./cities/nikko";
import * as osaka from "./cities/osaka";
import * as kyoto from "./cities/kyoto";
import * as nara from "./cities/nara";
import * as kobe from "./cities/kobe";
import * as sapporo from "./cities/sapporo";
import * as otaru from "./cities/otaru";
import * as hakodate from "./cities/hakodate";
import * as fukuoka from "./cities/fukuoka";
import * as nagasaki from "./cities/nagasaki";
import * as beppu from "./cities/beppu";
import * as naha from "./cities/naha";
import * as okinawaNorth from "./cities/okinawa-north";
import * as nagoya from "./cities/nagoya";
import * as kanazawa from "./cities/kanazawa";
import * as takayama from "./cities/takayama";
import * as hiroshima from "./cities/hiroshima";
import * as sendai from "./cities/sendai";
import * as yamagata from "./cities/yamagata";
import * as hiraizumi from "./cities/hiraizumi";
import * as aomori from "./cities/aomori";
import * as takamatsu from "./cities/takamatsu";
import * as tokushima from "./cities/tokushima";
import * as kochi from "./cities/kochi";
import * as matsuyama from "./cities/matsuyama";
import * as okayama from "./cities/okayama";
import * as izumo from "./cities/izumo";
import * as tottori from "./cities/tottori";

// 城市模組:每個 exports `city: CityDef` 與 `pois: POI[]`。
// 新增城市 → cities/<id>.ts + 在這裡 import + 掛進 CITY_MODULES。
const CITY_MODULES: { city: CityDef; pois: POI[] }[] = [
  tokyo,
  yokohama,
  kamakura,
  nikko,
  osaka,
  kyoto,
  nara,
  kobe,
  sapporo,
  otaru,
  hakodate,
  fukuoka,
  nagasaki,
  beppu,
  naha,
  okinawaNorth,
  nagoya,
  kanazawa,
  takayama,
  hiroshima,
  sendai,
  yamagata,
  hiraizumi,
  aomori,
  takamatsu,
  tokushima,
  kochi,
  matsuyama,
  okayama,
  izumo,
  tottori,
];

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

export { INTERCITY, intercityLeg } from "./transit";
