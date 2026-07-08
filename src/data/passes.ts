// 交通票券建議:規則觸發,不做票價精算 —— 目的是回答「該不該買、買哪張」。
// 價格為約略值(以官網為準),display 時附註免責。

export interface L3 {
  zh: string;
  en: string;
  ja: string;
}

export interface PassCtx {
  regionId: string;
  /** 行程實際會去的城市(依序,去重)。 */
  cityIds: string[];
  /** 城際移動段數。 */
  intercityLegs: number;
}

export interface TransitPass {
  id: string;
  name: L3;
  /** 約略價格與天數,如 "約 ¥6,100(2日)"。 */
  price: string;
  desc: L3;
  match: (ctx: PassCtx) => boolean;
}

const has = (ctx: PassCtx, id: string) => ctx.cityIds.includes(id);

export const PASSES: TransitPass[] = [
  {
    id: "hakone-freepass",
    name: { zh: "箱根周遊券", en: "Hakone Freepass", ja: "箱根フリーパス" },
    price: "約 ¥6,100 (2日,新宿發)",
    desc: {
      zh: "小田急來回+箱根登山電車/纜車/空中纜車/海賊船/巴士全包。箱根的交通本身就是景點,幾乎必買。",
      en: "Round trip from Shinjuku plus unlimited rides on Hakone's railway, cablecar, ropeway, pirate ship and buses — in Hakone the transport IS the sightseeing.",
      ja: "新宿からの往復+登山電車・ケーブルカー・ロープウェイ・海賊船・バス乗り放題。箱根は乗り物自体が観光,ほぼ必携。",
    },
    match: (ctx) => has(ctx, "hakone"),
  },
  {
    id: "fuji-kawaguchiko",
    name: { zh: "河口湖交通套票", en: "Mt. Fuji Pass Combo", ja: "富士五湖エリアきっぷ" },
    price: "特急富士回遊來回+周遊巴士 約 ¥1,800 (2日)",
    desc: {
      zh: "新宿搭「富士回遊」直達河口湖,當地配紅/綠/藍線周遊巴士 2 日券,新倉山、忍野八海都到得了。",
      en: "Take the Fuji Excursion express from Shinjuku, then the 2-day sightseeing bus pass covers Chureito Pagoda, Oshino Hakkai and the lakes.",
      ja: "新宿から特急富士回遊で直行,現地は周遊バス2日券で新倉山も忍野八海もカバー。",
    },
    match: (ctx) => has(ctx, "kawaguchiko"),
  },
  {
    id: "jreast-tohoku",
    name: {
      zh: "JR EAST PASS(東北地區)",
      en: "JR EAST PASS (Tohoku)",
      ja: "JR EAST PASS(東北エリア)",
    },
    price: "約 ¥30,000 (連續5日)",
    desc: {
      zh: "東北新幹線+特急任搭。仙台↔青森來回就超過票價,跑 2 個城市以上必回本。",
      en: "Unlimited Tohoku shinkansen and expresses for 5 days — a Sendai↔Aomori round trip alone beats the price.",
      ja: "東北新幹線・特急が5日間乗り放題。仙台↔青森往復だけで元が取れる。",
    },
    match: (ctx) => ctx.regionId === "tohoku" && ctx.cityIds.length >= 2,
  },
  {
    id: "shoryudo",
    name: { zh: "昇龍道巴士周遊券", en: "Shoryudo Bus Pass", ja: "昇龍道バスきっぷ" },
    price: "約 ¥5,500 (3日) / ¥9,500 (5日)",
    desc: {
      zh: "名古屋—高山—白川鄉—金澤的高速巴士任搭,含機場線。這條山線就是為它設計的。",
      en: "Unlimited highway buses linking Nagoya, Takayama, Shirakawa-go and Kanazawa — exactly this route.",
      ja: "名古屋—高山—白川郷—金沢の高速バス乗り放題,空港線も含む。",
    },
    match: (ctx) =>
      ctx.regionId === "chubu" &&
      has(ctx, "nagoya") &&
      (has(ctx, "takayama") || has(ctx, "kanazawa")),
  },
  {
    id: "kansai-wide",
    name: {
      zh: "JR 關西廣域鐵路周遊券",
      en: "JR Kansai WIDE Area Pass",
      ja: "JR関西ワイドエリアパス",
    },
    price: "約 ¥12,000 (連續5日)",
    desc: {
      zh: "涵蓋山陽新幹線(新大阪—岡山)、往白濱/城崎特急與姬路。行程有白濱或姬路就值得。",
      en: "Covers the Sanyo shinkansen, Himeji and the Kuroshio express to Shirahama — worth it once your plan leaves the Osaka-Kyoto core.",
      ja: "山陽新幹線(新大阪—岡山)や白浜方面の特急,姫路をカバー。",
    },
    match: (ctx) =>
      ctx.regionId === "kansai" && (has(ctx, "shirahama") || has(ctx, "himeji")),
  },
  {
    id: "kintetsu",
    name: { zh: "近鐵電車周遊券", en: "KINTETSU RAIL PASS", ja: "近鉄週遊パス" },
    price: "約 ¥3,900 (5日)",
    desc: {
      zh: "大阪/京都/名古屋到伊勢志摩全線任搭,去伊勢神宮這張最省。",
      en: "Unlimited Kintetsu rides from Osaka/Kyoto/Nagoya all the way to Ise-Shima.",
      ja: "大阪・京都・名古屋から伊勢志摩まで近鉄全線乗り放題。",
    },
    match: (ctx) => has(ctx, "ise"),
  },
  {
    id: "all-shikoku",
    name: { zh: "四國鐵路周遊券", en: "ALL SHIKOKU Rail Pass", ja: "四国フリーきっぷ" },
    price: "約 ¥12,000 (4日)",
    desc: {
      zh: "JR 四國+土佐電/伊予鐵等私鐵任搭,跨 2 城以上就划算。",
      en: "Unlimited JR Shikoku plus local private lines — pays off with 2+ cities.",
      ja: "JR四国+私鉄も乗り放題。2都市以上まわるなら得。",
    },
    match: (ctx) => ctx.regionId === "shikoku" && ctx.cityIds.length >= 2,
  },
  {
    id: "jr-kyushu",
    name: {
      zh: "JR 九州鐵路周遊券",
      en: "JR Kyushu Rail Pass",
      ja: "JR九州レールパス",
    },
    price: "北部 ¥12,500 (3日) / 全九州 ¥22,500 (5日)",
    desc: {
      zh: "九州新幹線+特急任搭。福岡+長崎買北部版,下到鹿兒島宮崎就買全九州版。",
      en: "Unlimited Kyushu shinkansen and expresses — Northern pass for Fukuoka+Nagasaki, All-Kyushu if you go south.",
      ja: "九州新幹線・特急乗り放題。北部版と全九州版から行程に合わせて。",
    },
    match: (ctx) => ctx.regionId === "kyushu" && ctx.cityIds.length >= 2,
  },
  {
    id: "jr-hokkaido",
    name: { zh: "JR 北海道鐵路周遊券", en: "JR Hokkaido Rail Pass", ja: "JR北海道フリーパス" },
    price: "約 ¥27,000 (5日)",
    desc: {
      zh: "特急任搭,札幌↔函館來回+小樽就回本。夏季富良野/道東不少人改自駕,看行程取捨。",
      en: "Unlimited JR expresses — a Sapporo↔Hakodate round trip pays for it. Many rent a car for Furano/east Hokkaido instead.",
      ja: "特急乗り放題。札幌↔函館往復+小樽で元が取れる。富良野方面はレンタカー派も多い。",
    },
    match: (ctx) =>
      ctx.regionId === "hokkaido" &&
      ctx.cityIds.filter((c) => c !== "otaru").length >= 2,
  },
  {
    id: "sanyo-sanin",
    name: {
      zh: "JR 山陽&山陰鐵路周遊券",
      en: "JR Sanyo-San'in Area Pass",
      ja: "JR山陽&山陰パス",
    },
    price: "約 ¥23,000 (連續7日)",
    desc: {
      zh: "山陽新幹線+往鳥取/松江特急全包,山陽山陰一次走這張最順。",
      en: "Sanyo shinkansen plus the San'in expresses to Tottori and Matsue — made for this loop.",
      ja: "山陽新幹線+鳥取・松江方面の特急をカバー。",
    },
    match: (ctx) =>
      ctx.regionId === "chugoku" &&
      (has(ctx, "tottori") || has(ctx, "izumo")) &&
      ctx.cityIds.length >= 2,
  },
  {
    id: "tateyama-ticket",
    name: {
      zh: "立山黑部交通套票",
      en: "Tateyama Kurobe Option Ticket",
      ja: "立山黒部アルペンきっぷ",
    },
    price: "路線內交通套票 約 ¥13,000 起",
    desc: {
      zh: "阿爾卑斯路線的電纜車/高原巴士/無軌電車/空中纜車一票到底,單買每段會貴很多。",
      en: "One ticket for every leg of the Alpine Route (cablecar, highland bus, trolley, ropeway) — far cheaper than paying per ride.",
      ja: "アルペンルート内の乗り物を通しで。区間ごとに買うより断然安い。",
    },
    match: (ctx) => has(ctx, "tateyama"),
  },
  {
    id: "tokyo-subway",
    name: {
      zh: "Tokyo Subway Ticket 72hr",
      en: "Tokyo Subway Ticket 72hr",
      ja: "Tokyo Subway Ticket 72時間",
    },
    price: "¥1,500 (72小時)",
    desc: {
      zh: "東京地鐵+都營全線任搭,純東京行程一天搭三趟就回本(外國護照限定,機場/BIC 有售)。",
      en: "Unlimited Tokyo Metro + Toei for 72 hours — three rides a day breaks even (tourists only).",
      ja: "東京メトロ+都営が72時間乗り放題(訪日客向け)。",
    },
    match: (ctx) =>
      ctx.regionId === "kanto" &&
      ctx.cityIds.length === 1 &&
      ctx.cityIds[0] === "tokyo",
  },
];

export function matchPasses(ctx: PassCtx): TransitPass[] {
  return PASSES.filter((p) => p.match(ctx)).slice(0, 2); // 最多推兩張,不擾人
}
