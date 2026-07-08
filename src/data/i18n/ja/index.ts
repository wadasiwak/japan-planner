import type { ContentDict } from "../types";
import { cities as kantoA } from "./kanto_a";
import { cities as kantoB } from "./kanto_b";
import { cities as kansaiA } from "./kansai_a";
import { cities as kansaiB } from "./kansai_b";
import { cities as hokkaido } from "./hokkaido";
import { cities as kyushu } from "./kyushu";
import { cities as okinawa } from "./okinawa";
import { cities as chubu } from "./chubu";
import { cities as chugoku } from "./chugoku";
import { cities as shikoku } from "./shikoku";
import { cities as tohoku } from "./tohoku";

export const DICT: ContentDict = {
  regions: {
    kanto: {
      name: "東京・関東近郊",
      blurb: "はじめての日本旅の定番。都心は遊び尽くせず、箱根や河口湖で富士山と温泉も。",
    },
    kansai: {
      name: "関西",
      blurb: "大阪の食、京都の古都、奈良の鹿、神戸の港——1ルートで表情いろいろ。",
    },
    hokkaido: {
      name: "北海道",
      blurb: "富良野のラベンダー、登別地獄谷、函館の夜景。海鮮とラーメンは年中無休。",
    },
    kyushu: {
      name: "九州",
      blurb: "博多屋台、長崎、阿蘇、桜島、日南海岸——温泉は浸かり放題。",
    },
    okinawa: {
      name: "沖縄",
      blurb: "日本の南国。那覇で国際通り、車を借りて北へ美ら海とビーチ。",
    },
    chubu: {
      name: "中部・北陸",
      blurb: "伊勢神宮、名古屋、飛騨高山、上高地、金沢兼六園——山も海も一本道。",
    },
    chugoku: {
      name: "中国地方",
      blurb: "広島・宮島、倉敷美観地区、出雲大社、鳥取砂丘——山陽も山陰も。",
    },
    shikoku: {
      name: "四国",
      blurb: "高松のうどんと直島アート、鳴門の渦潮、高知のカツオ、道後温泉。",
    },
    tohoku: {
      name: "東北",
      blurb: "仙台牛タン、松島、山寺と蔵王、平泉の金色堂、青森のりんご。",
    },
  },
  cities: {
    ...kantoA,
    ...kantoB,
    ...kansaiA,
    ...kansaiB,
    ...hokkaido,
    ...kyushu,
    ...okinawa,
    ...chubu,
    ...chugoku,
    ...shikoku,
    ...tohoku,
  },
};
