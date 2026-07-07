// Travel content data. Plain literals designed to be LLM-generatable: to add
// POIs for a region, append objects of this shape to that region's file under
// src/data/pois/ — the planner, suggester, and codex all pick them up
// automatically. UI is Traditional Chinese; names carry the Japanese original
// for on-the-ground navigation and Google Maps lookup.

/** 遊玩節奏:輕鬆 or 行軍。 */
export type Pace = "relaxed" | "march";

export type Category =
  | "sight" // 地標/街區/城堡
  | "temple" // 神社寺院
  | "nature" // 公園/山/海
  | "museum" // 博物館/美術館/水族館
  | "food" // 市場/名店/美食街 — 規劃器拿來當午晚餐槽
  | "shopping" // 商店街/百貨/藥妝
  | "nightlife" // 夜景/居酒屋街/夜間限定
  | "experience"; // 溫泉/體驗/主題樂園

export type BestTime = "morning" | "afternoon" | "evening" | "any";

export interface LatLng {
  lat: number;
  lng: number;
}

/** P人模式「我現在在哪」的錨點:車站或地標。 */
export interface Hub {
  /** kebab-case, prefixed with city id, e.g. "tokyo-shinjuku-sta". */
  id: string;
  name: string; // 中文,e.g. "新宿車站"
  nameJa: string; // 日文原名,e.g. "新宿駅"
  center: LatLng;
}

export interface CityDef {
  /** kebab-case, e.g. "tokyo". */
  id: string;
  name: string; // "東京"
  nameJa: string; // "東京"
  emoji: string;
  /** Bounding box used by the content validator and map fitting. */
  bbox: { minLat: number; maxLat: number; minLng: number; maxLng: number };
  /** J人模式:這城市單獨玩最多值得排幾天(分配天數的上限)。 */
  maxDays: number;
  /** 5–10 個 P人模式錨點。 */
  hubs: Hub[];
}

export interface RegionDef {
  /** kebab-case, e.g. "kansai". */
  id: string;
  name: string; // "關西"
  emoji: string;
  /** ~40–60 chars 一句話介紹。 */
  blurb: string;
  cities: CityDef[];
}

export interface POI {
  /** kebab-case, prefixed with city id, e.g. "tokyo-sensoji". */
  id: string;
  name: string; // "淺草寺"
  nameJa: string; // "浅草寺"
  /** Must match a CityDef.id. */
  city: string;
  /** 市內分區名(同分區的點會被排在同一天連走), e.g. "淺草・上野". */
  area: string;
  center: LatLng;
  category: Category;
  /** ~60–120 chars,兩句:它是什麼+為什麼值得去。 */
  blurb: string;
  /** 停留分鐘。輕鬆版含發呆拍照,必須 ≥ 行軍版。 */
  stayMin: { relaxed: number; march: number };
  bestTime: BestTime;
  /** 固定公休的星期幾(0=日 … 6=六)。沒有就省略。 */
  closedDays?: number[];
  /** 室內為主(下雨天備案)。 */
  indoor: boolean;
  /** 1=必去 2=推薦 3=有時間再去。 */
  priority: 1 | 2 | 3;
  /** 最近的 Hub.id — 必須存在於該城市的 hubs。 */
  nearHub: string;
  /** 一句實用提示(排隊/交通/季節),可省略。 */
  tips?: string;
}
