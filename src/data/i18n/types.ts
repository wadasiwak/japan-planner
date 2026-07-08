// 內容翻譯包的形狀:每語言 × 每地區一個檔(src/data/i18n/<lang>/<region>.ts,
// exports `cities: Record<cityId, CityTranslation>`)。原始資料檔維持繁中不動,
// 顯示時查字典、查不到 fallback 繁中。日文的 POI 名直接用原檔 nameJa,不用翻。

export interface PoiTranslation {
  /** 英文包必填;日文包省略(用 nameJa)。 */
  name?: string;
  blurb: string;
  tips?: string;
}

export interface CityTranslation {
  name: string;
  /** 繁中分區名 → 譯名。 */
  areas: Record<string, string>;
  /** hub id → 譯名(日文包可省略,用 hub.nameJa)。 */
  hubs?: Record<string, string>;
  souvenirs?: string[];
  pois: Record<string, PoiTranslation>;
}

export interface RegionTranslation {
  name: string;
  blurb: string;
}

export interface ContentDict {
  regions: Record<string, RegionTranslation>;
  cities: Record<string, CityTranslation>;
}
