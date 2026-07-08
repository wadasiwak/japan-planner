// 地區骨架:city 內容檔在 src/data/cities/,這裡只負責分組與排序
// (cities 陣列順序 = J人模式的旅行順序)。

export interface RegionMeta {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  /** 依旅行順序排列,對應 cities/<id>.ts。 */
  cityIds: string[];
}

export const REGION_META: RegionMeta[] = [
  {
    id: "kanto",
    name: "東京・關東近郊",
    emoji: "🗼",
    blurb: "第一次日本自由行的起點:都心逛不完,近郊鎌倉、橫濱、日光一日來回。",
    cityIds: ["tokyo", "yokohama", "kamakura", "nikko"],
  },
  {
    id: "kansai",
    name: "關西",
    emoji: "⛩️",
    blurb: "大阪的吃、京都的古、奈良的鹿、神戶的港,一條路線四種風景。",
    cityIds: ["osaka", "kyoto", "nara", "kobe"],
  },
  {
    id: "hokkaido",
    name: "北海道",
    emoji: "🐻",
    blurb: "夏天薰衣草冬天雪祭,海鮮和拉麵永遠不分季節。",
    cityIds: ["sapporo", "otaru", "hakodate"],
  },
  {
    id: "kyushu",
    name: "九州",
    emoji: "♨️",
    blurb: "福岡屋台、長崎異國情調、別府由布院泡不完的溫泉。",
    cityIds: ["fukuoka", "nagasaki", "beppu"],
  },
  {
    id: "okinawa",
    name: "沖繩",
    emoji: "🏝️",
    blurb: "日本裡的南國:那霸市區逛國際通,租車北上看美麗海。",
    cityIds: ["naha", "okinawa-north"],
  },
  {
    id: "chubu",
    name: "中部北陸",
    emoji: "🏔️",
    blurb: "名古屋城、金澤兼六園、高山老街與白川鄉合掌村。",
    cityIds: ["nagoya", "kanazawa", "takayama"],
  },
  {
    id: "chugoku",
    name: "中國地方",
    emoji: "🦌",
    blurb: "廣島宮島、倉敷美觀、出雲結緣、鳥取砂丘,山陽山陰一次走。",
    // 旅行順序:廣島→岡山(山陽)→鳥取→出雲(山陰往西)
    cityIds: ["hiroshima", "okayama", "tottori", "izumo"],
  },
  {
    id: "shikoku",
    name: "四國",
    emoji: "🍜",
    blurb: "高松烏龍麵配直島藝術、鳴門漩渦、高知炙鰹魚、道後溫泉泡湯。",
    // 旅行順序:高松進(直飛)→德島→高知→松山出
    cityIds: ["takamatsu", "tokushima", "kochi", "matsuyama"],
  },
  {
    id: "tohoku",
    name: "東北",
    emoji: "🌾",
    blurb: "仙台牛舌、松島百島、山寺藏王、平泉金色堂、青森奧入瀨,人少景美的大東北。",
    // 旅行順序:仙台進 → 山形一日 → 平泉 → 一路北上青森(城際移動總量最小)
    cityIds: ["sendai", "yamagata", "hiraizumi", "aomori"],
  },
];
