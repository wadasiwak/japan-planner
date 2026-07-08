// 城際交通時間表:同地區內會互排的城市配對(雙向共用一筆)。
// min = 主要車站到主要車站的常見所要時間 + 退房拉行李/轉乘緩衝(約 30 分),
// via = 建議搭乘路線。查不到的配對由 intercityMinutes() 公式估算兜底。

export interface IntercityLeg {
  /** 兩端 city id,無方向性。 */
  cities: [string, string];
  /** 門到門估計分鐘(含拉行李緩衝)。 */
  min: number;
  /** 建議路線,顯示在行程的移動時段。 */
  via: string;
}

export const INTERCITY: IntercityLeg[] = [
  // ---- 關東 ----
  { cities: ["tokyo", "yokohama"], min: 60, via: "JR東海道線/東急東橫線" },
  { cities: ["tokyo", "kamakura"], min: 85, via: "JR橫須賀線直達" },
  { cities: ["tokyo", "nikko"], min: 140, via: "東武特急SPACIA(淺草發)" },
  { cities: ["yokohama", "kamakura"], min: 55, via: "JR橫須賀線" },
  { cities: ["yokohama", "nikko"], min: 185, via: "經東京轉東武特急" },
  { cities: ["kamakura", "nikko"], min: 200, via: "經東京轉東武特急,建議一早出發" },
  // ---- 關西 ----
  { cities: ["osaka", "kyoto"], min: 60, via: "JR京都線新快速" },
  { cities: ["osaka", "nara"], min: 70, via: "近鐵奈良線快速急行" },
  { cities: ["osaka", "kobe"], min: 50, via: "JR神戶線新快速" },
  { cities: ["kyoto", "nara"], min: 70, via: "近鐵京都線" },
  { cities: ["kyoto", "kobe"], min: 80, via: "JR新快速直達" },
  { cities: ["nara", "kobe"], min: 110, via: "阪神・近鐵直通快速" },
  // ---- 北海道 ----
  { cities: ["sapporo", "otaru"], min: 65, via: "JR快速エアポート" },
  { cities: ["sapporo", "hakodate"], min: 260, via: "JR特急北斗,建議一早出發" },
  { cities: ["otaru", "hakodate"], min: 290, via: "經札幌轉JR特急北斗,建議一早出發" },
  // ---- 九州 ----
  { cities: ["fukuoka", "nagasaki"], min: 115, via: "特急リレーかもめ+西九州新幹線" },
  { cities: ["fukuoka", "beppu"], min: 150, via: "JR特急ソニック" },
  { cities: ["nagasaki", "beppu"], min: 220, via: "經博多轉特急,建議一早出發" },
  // ---- 沖繩 ----
  { cities: ["naha", "okinawa-north"], min: 100, via: "沖繩自動車道自駕(或高速巴士)" },
  // ---- 中國地方 ----
  { cities: ["hiroshima", "okayama"], min: 75, via: "山陽新幹線" },
  { cities: ["hiroshima", "tottori"], min: 290, via: "經岡山轉特急,建議一早出發" },
  { cities: ["hiroshima", "izumo"], min: 220, via: "高速巴士みこと號直達,建議一早出發" },
  { cities: ["okayama", "tottori"], min: 140, via: "特急スーパーいなば" },
  { cities: ["okayama", "izumo"], min: 210, via: "特急やくも,建議一早出發" },
  { cities: ["tottori", "izumo"], min: 150, via: "山陰本線特急(經松江)" },
  // ---- 四國 ----
  { cities: ["takamatsu", "tokushima"], min: 100, via: "JR特急うずしお" },
  { cities: ["takamatsu", "kochi"], min: 160, via: "JR特急しまんと" },
  { cities: ["takamatsu", "matsuyama"], min: 175, via: "JR特急いしづち" },
  { cities: ["tokushima", "kochi"], min: 200, via: "特急經阿波池田轉乘,建議一早出發" },
  { cities: ["tokushima", "matsuyama"], min: 230, via: "高速巴士,建議一早出發" },
  { cities: ["kochi", "matsuyama"], min: 180, via: "高速巴士なんごく號" },
  // ---- 東北 ----
  { cities: ["sendai", "yamagata"], min: 105, via: "JR仙山線快速" },
  { cities: ["sendai", "hiraizumi"], min: 90, via: "東北新幹線(一ノ関轉東北本線)" },
  { cities: ["sendai", "aomori"], min: 130, via: "東北新幹線はやぶさ(新青森)" },
  { cities: ["yamagata", "hiraizumi"], min: 170, via: "經仙台轉東北新幹線" },
  { cities: ["yamagata", "aomori"], min: 220, via: "經仙台轉東北新幹線,建議一早出發" },
  { cities: ["hiraizumi", "aomori"], min: 130, via: "東北新幹線(一ノ関發)" },
  // ---- 中部北陸 ----
  { cities: ["nagoya", "kanazawa"], min: 180, via: "特急しらさぎ+北陸新幹線(敦賀轉乘)" },
  { cities: ["nagoya", "takayama"], min: 170, via: "JR特急ひだ" },
  { cities: ["kanazawa", "takayama"], min: 165, via: "高速巴士直達(或經富山轉特急ひだ)" },
];

const key = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);
const index = new Map(INTERCITY.map((l) => [key(l.cities[0], l.cities[1]), l]));

/** 查兩城市間的交通,查不到回 null(呼叫端 fallback 公式)。 */
export const intercityLeg = (a: string, b: string): IntercityLeg | null =>
  index.get(key(a, b)) ?? null;
