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
    blurb: "第一次日本自由行的起點:都心逛不完,箱根河口湖泡湯看富士山。",
    // 旅行順序:都心→近郊南線(橫濱鎌倉箱根熱海)→富士五湖→日光
    cityIds: ["tokyo", "kawagoe", "yokohama", "kamakura", "hakone", "atami", "kawaguchiko", "karuizawa", "kusatsu", "nikko"],
  },
  {
    id: "kansai",
    name: "關西",
    emoji: "⛩️",
    blurb: "大阪的吃、京都的古、奈良的鹿、神戶的港,一條路線四種風景。",
    cityIds: ["osaka", "kyoto", "nara", "kobe", "himeji", "koyasan", "shirahama"],
  },
  {
    id: "hokkaido",
    name: "北海道",
    emoji: "🐻",
    blurb: "富良野薰衣草、登別地獄谷、函館夜景,海鮮和拉麵永遠不分季節。",
    // 旅行順序:富良野(東)→札幌小樽→登別洞爺→函館(南),城際移動最省
    cityIds: ["shiretoko", "furano", "sapporo", "otaru", "noboribetsu", "hakodate"],
  },
  {
    id: "kyushu",
    name: "九州",
    emoji: "♨️",
    blurb: "福岡屋台、長崎異國情調、阿蘇火山、櫻島、日南海岸,溫泉泡好泡滿。",
    // 旅行順序:福岡進→長崎→熊本阿蘇→鹿兒島→宮崎→別府出(北→南→東北上)
    cityIds: ["fukuoka", "nagasaki", "kumamoto", "kagoshima", "yakushima", "miyazaki", "beppu"],
  },
  {
    id: "okinawa",
    name: "沖繩",
    emoji: "🏝️",
    blurb: "日本裡的南國:那霸市區逛國際通,租車北上看美麗海。",
    cityIds: ["naha", "okinawa-north", "miyako", "ishigaki"],
  },
  {
    id: "chubu",
    name: "中部北陸",
    emoji: "🏔️",
    blurb: "伊勢神宮、名古屋、飛驒高山、上高地、金澤兼六園,山海一條線。",
    // 旅行順序:伊勢(南)→名古屋→高山→松本→金澤,南往北一條線
    cityIds: ["ise", "nagoya", "takayama", "matsumoto", "tateyama", "kanazawa"],
  },
  {
    id: "chugoku",
    name: "中國地方",
    emoji: "🦌",
    blurb: "廣島宮島、倉敷美觀、出雲結緣、鳥取砂丘,山陽山陰一次走。",
    // 旅行順序:廣島→岡山(山陽)→鳥取→出雲(山陰往西)
    cityIds: ["hiroshima", "onomichi", "okayama", "tottori", "izumo"],
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
    // 旅行順序:南進北出——會津福島(南)→山形庄內→仙台→平泉盛岡→秋田內陸→八戶青森(北)
    cityIds: ["aizu", "fukushima", "yamagata", "tsuruoka", "sendai", "hiraizumi", "morioka", "kakunodate", "akita", "hachinohe", "aomori"],
  },
];
