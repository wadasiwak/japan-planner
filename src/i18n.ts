import type { POI, CityDef, Hub, RegionDef } from "./data/types";
import type { ContentDict } from "./data/i18n/types";
import type { SlotInfo } from "./lib/planner";
import { cityById, ALL_POIS } from "./data";

export type Lang = "zh" | "en" | "ja";
export const LANGS: { id: Lang; label: string }[] = [
  { id: "zh", label: "中" },
  { id: "en", label: "EN" },
  { id: "ja", label: "日" },
];

// ---------------------------------------------------------------------------
// 內容字典:zh 不需要;en/ja 由 App 在切換語言時 lazy import 後注入。
// ---------------------------------------------------------------------------
let contentDict: ContentDict | null = null;
let currentLang: Lang = "zh";

export function setContent(lang: Lang, dict: ContentDict | null): void {
  currentLang = lang;
  contentDict = dict;
}

export async function loadContent(lang: Lang): Promise<ContentDict | null> {
  if (lang === "zh") return null;
  const mod =
    lang === "en"
      ? await import("./data/i18n/en/index")
      : await import("./data/i18n/ja/index");
  return mod.DICT;
}

const cityT = (cityId: string) => contentDict?.cities[cityId];

export const tPoiName = (p: POI): string => {
  if (currentLang === "ja") return p.nameJa;
  return cityT(p.city)?.pois[p.id]?.name ?? p.name;
};
export const tPoiBlurb = (p: POI): string =>
  cityT(p.city)?.pois[p.id]?.blurb ?? p.blurb;
export const tPoiTips = (p: POI): string | undefined => {
  const tr = cityT(p.city)?.pois[p.id];
  // 有翻譯包但沒翻 tips → 原文有 tips 也不顯示中文,避免混語;沒字典則原文
  return contentDict ? tr?.tips : p.tips;
};
export const tArea = (cityId: string, area: string): string =>
  cityT(cityId)?.areas[area] ?? area;
export const tCityName = (c: CityDef): string => {
  if (currentLang === "ja") return c.nameJa;
  return cityT(c.id)?.name ?? c.name;
};
export const tHubName = (cityId: string, h: Hub): string => {
  if (currentLang === "ja") return h.nameJa;
  return cityT(cityId)?.hubs?.[h.id] ?? h.name;
};
export const tRegionName = (r: RegionDef): string =>
  contentDict?.regions[r.id]?.name ?? r.name;
export const tRegionBlurb = (r: RegionDef): string =>
  contentDict?.regions[r.id]?.blurb ?? r.blurb;
export const tSouvenirs = (c: CityDef): string[] | undefined =>
  contentDict ? cityT(c.id)?.souvenirs : c.souvenirs;

// ---------------------------------------------------------------------------
// UI 字串
// ---------------------------------------------------------------------------
type S = Record<Lang, string>;

const STRINGS = {
  brand: { zh: "日本旅伴", en: "Japan Buddy", ja: "日本旅伴" },
  slogan_j: { zh: "J 人排好排滿", en: "J: plan every hour", ja: "J型は計画びっしり" },
  slogan_p: { zh: "P 人說走就走", en: "P: just wing it", ja: "P型は思いつきで" },
  mode_j: { zh: "🗓️ J人規劃", en: "🗓️ J-mode Planner", ja: "🗓️ J型プランナー" },
  mode_j_desc: {
    zh: "選地區、天數、節奏,一鍵排出逐日行程。出發前就把每天安排得明明白白。",
    en: "Pick a region, days and pace — get a full day-by-day itinerary before you fly.",
    ja: "エリア・日数・ペースを選ぶだけで、日別プランを自動作成。出発前に全部決めたい人へ。",
  },
  mode_p: { zh: "🎲 P人隨走", en: "🎲 P-mode Wander", ja: "🎲 P型きまま旅" },
  mode_p_desc: {
    zh: "「每天想明天去哪好累」—— 告訴我你現在在哪,馬上給你等等可以去的地方。",
    en: "Tell us where you are right now and we'll suggest what to do next.",
    ja: "「明日どこ行くか考えるの疲れた」——今いる場所を選べば、次に行ける場所をすぐ提案。",
  },
  mode_codex: { zh: "🧳 我的收藏", en: "🧳 My Collection", ja: "🧳 マイコレクション" },
  codex_stat: {
    zh: "存好的行程 {0} 份 · 打卡足跡 {1} 處",
    en: "{0} saved plans · {1} places visited",
    ja: "保存プラン {0} 件 · 訪問スタンプ {1} 箇所",
  },
  stat_regions: { zh: "{0} 大地區", en: "{0} regions", ja: "{0} エリア" },
  stat_pois: { zh: "{0} 個景點", en: "{0} spots", ja: "{0} スポット" },
  stat_food: { zh: "{0} 家餐廳咖啡廳", en: "{0} restaurants & cafés", ja: "グルメ {0} 軒" },
  title_jsetup: { zh: "🗓️ J人規劃", en: "🗓️ J-mode Planner", ja: "🗓️ J型プランナー" },
  title_jresult: { zh: "🗓️ 你的行程", en: "🗓️ Your Itinerary", ja: "🗓️ あなたのプラン" },
  title_psuggest: { zh: "🎲 P人隨走", en: "🎲 P-mode Wander", ja: "🎲 P型きまま旅" },
  title_codex: { zh: "🧳 我的收藏", en: "🧳 My Collection", ja: "🧳 マイコレクション" },
  // JSetup
  q_region: { zh: "要去哪個地區?", en: "Which region?", ja: "どのエリアへ?" },
  n_spots: { zh: " · {0} 個景點", en: " · {0} spots", ja: " · {0} スポット" },
  q_cities: {
    zh: "這些城市都去?(去過的可以點掉)",
    en: "Visit all these cities? (tap to skip ones you've been to)",
    ja: "この都市ぜんぶ行く?(行った所はタップで除外)",
  },
  skip_visited: {
    zh: "⛔ 跳過我打過卡的 {0} 個點",
    en: "⛔ Skip my {0} visited spots",
    ja: "⛔ 訪問済み {0} スポットを外す",
  },
  q_days: { zh: "玩幾天?", en: "How many days?", ja: "何日間?" },
  days_unit: { zh: "{0} 天", en: "{0} days", ja: "{0} 日" },
  cap_hint: {
    zh: "這個地區的內容約可排 {0} 天",
    en: "This region has enough for about {0} days",
    ja: "このエリアは約 {0} 日分のスポットがあります",
  },
  q_pace: { zh: "遊玩節奏?", en: "Your pace?", ja: "旅のペースは?" },
  pace_relaxed: { zh: "🍵 輕鬆", en: "🍵 Relaxed", ja: "🍵 ゆったり" },
  pace_relaxed_desc: {
    zh: " · 一天約 6 小時,含下午咖啡歇腳",
    en: " · ~6h/day incl. an afternoon café break",
    ja: " · 1日約6時間、午後のカフェ休憩つき",
  },
  pace_march: { zh: "🥾 行軍", en: "🥾 Power mode", ja: "🥾 弾丸" },
  pace_march_desc: {
    zh: " · 一天 10 小時塞好塞滿",
    en: " · 10h/day, packed schedule",
    ja: " · 1日10時間ぎっしり詰め込み",
  },
  q_prefs: {
    zh: "特別喜歡?(選填,勾了會多排這些)",
    en: "Favorites? (optional — we'll schedule more of these)",
    ja: "特に好きなもの?(任意・多めに組み込みます)",
  },
  pref_temple: { zh: "⛩️ 神社寺院", en: "⛩️ Shrines & temples", ja: "⛩️ 神社仏閣" },
  pref_sight: { zh: "🏯 經典景點", en: "🏯 Landmarks", ja: "🏯 定番スポット" },
  pref_nature: { zh: "🌿 自然風景", en: "🌿 Nature", ja: "🌿 自然" },
  pref_museum: { zh: "🖼️ 博物展館", en: "🖼️ Museums", ja: "🖼️ 美術館・博物館" },
  pref_shopping: { zh: "🛍️ 逛街購物", en: "🛍️ Shopping", ja: "🛍️ 買い物" },
  pref_nightlife: { zh: "🌃 夜生活", en: "🌃 Nightlife", ja: "🌃 ナイトライフ" },
  pref_experience: { zh: "🎡 體驗活動", en: "🎡 Experiences", ja: "🎡 体験" },
  q_date: { zh: "出發日?(選填)", en: "Start date? (optional)", ja: "出発日?(任意)" },
  date_hint_on: {
    zh: "會自動避開各景點當天的固定公休",
    en: "We'll avoid each spot's weekly closing days",
    ja: "各スポットの定休日を自動で回避します",
  },
  date_hint_off: {
    zh: "不填就不管公休日",
    en: "Leave blank to ignore closing days",
    ja: "未入力なら定休日は考慮しません",
  },
  clear: { zh: "清除", en: "Clear", ja: "クリア" },
  go_plan: { zh: "排出我的行程 →", en: "Build my itinerary →", ja: "プランを作る →" },
  // JResult
  pace_label_relaxed: { zh: "輕鬆", en: "Relaxed", ja: "ゆったり" },
  pace_label_march: { zh: "行軍", en: "Power", ja: "弾丸" },
  title_days: { zh: "{0} {1} 天・{2}", en: "{0}, {1} days · {2}", ja: "{0} {1}日間・{2}" },
  reroll: { zh: "🎲 重骰", en: "🎲 Reroll", ja: "🎲 振り直す" },
  copy: { zh: "📋 複製", en: "📋 Copy", ja: "📋 コピー" },
  copied: { zh: "✓ 已複製", en: "✓ Copied", ja: "✓ コピー済み" },
  share: { zh: "🔗 分享", en: "🔗 Share", ja: "🔗 シェア" },
  shared: { zh: "✓ 連結已複製", en: "✓ Link copied", ja: "✓ リンクをコピー" },
  save: { zh: "💾 存起來", en: "💾 Save", ja: "💾 保存" },
  share_promo: {
    zh: "我用日本旅伴JP排好了「{0}」🗾 J人排好排滿、P人說走就走:",
    en: "Planned my \"{0}\" trip with Japan Buddy JP 🗾 — day-by-day, closures avoided:",
    ja: "日本旅伴JPで「{0}」のプランを作った🗾 定休日も自動回避:",
  },
  share_native: { zh: "📤 分享…", en: "📤 Share…", ja: "📤 共有…" },
  copy_link: { zh: "🔗 複製連結", en: "🔗 Copy link", ja: "🔗 リンクをコピー" },
  download_pdf: { zh: "📄 PDF", en: "📄 PDF", ja: "📄 PDF" },
  pdf_hint: {
    zh: "在列印視窗選「另存為 PDF」",
    en: "Choose “Save as PDF” in the print dialog",
    ja: "印刷画面で「PDFとして保存」を選択",
  },
  saved: { zh: "✓ 已存", en: "✓ Saved", ja: "✓ 保存済み" },
  lock_day: { zh: "🔓 鎖住這天", en: "🔓 Lock this day", ja: "🔓 この日を固定" },
  locked_day: { zh: "🔒 已鎖定", en: "🔒 Locked", ja: "🔒 固定中" },
  n_points: { zh: "{0} 個點", en: "{0} stops", ja: "{0} か所" },
  transport_transit: { zh: "🚃 大眾運輸OK", en: "🚃 Transit-friendly", ja: "🚃 公共交通OK" },
  transport_car: { zh: "🚗 建議自駕", en: "🚗 Car recommended", ja: "🚗 レンタカー推奨" },
  transport_mixed: {
    zh: "🚃+🚗 市區電車,郊區自駕較省",
    en: "🚃+🚗 Transit in town, car for outskirts",
    ja: "🚃+🚗 市街は電車、郊外は車が楽",
  },
  souvenir_head: {
    zh: "🎁 離開{0}前,伴手禮買了嗎?",
    en: "🎁 Leaving {0} — got your souvenirs?",
    ja: "🎁 {0}を発つ前に、お土産は買った?",
  },
  souvenir_list: { zh: "🎁 {0}伴手禮清單", en: "🎁 {0} souvenir list", ja: "🎁 {0}のお土産リスト" },
  empty_day: {
    zh: "這天先留白 —— 睡到自然醒,或切去「P人隨走」看看附近有什麼。",
    en: "A free day — sleep in, or switch to P-mode and see what's nearby.",
    ja: "この日はフリー——寝坊するか、P型モードで近くを探そう。",
  },
  tag_meal: { zh: "🍽️ 用餐", en: "🍽️ Meal", ja: "🍽️ 食事" },
  tag_cafe: { zh: "☕ 歇腳", en: "☕ Café break", ja: "☕ ひと休み" },
  swap: { zh: "🔁 換一個", en: "🔁 Swap", ja: "🔁 変える" },
  drop: { zh: "✕ 不去", en: "✕ Skip", ja: "✕ 行かない" },
  region_preparing: {
    zh: "這個地區的內容還在準備中,先去東京晃晃?",
    en: "This region isn't ready yet — how about Tokyo?",
    ja: "このエリアは準備中——まずは東京へ?",
  },
  // planner runtime
  free_lunch: { zh: "自由覓食(午餐)", en: "Lunch on your own", ja: "ランチは自由に" },
  free_dinner: { zh: "自由覓食(晚餐)", en: "Dinner on your own", ja: "夕食は自由に" },
  move_to: { zh: "移動到「{0}」(約 {1} 分)", en: "Move to {0} (~{1} min)", ja: "「{0}」へ移動(約{1}分)" },
  intercity: {
    zh: "🚄 從{0}移動到{1}(約 {2},含拉行李)",
    en: "🚄 {0} → {1} (~{2} incl. luggage time)",
    ja: "🚄 {0}から{1}へ移動(約{2}・荷物込み)",
  },
  dur_h: { zh: "{0} 小時", en: "{0}h", ja: "{0}時間" },
  dur_hm: { zh: "{0} 小時 {1} 分", en: "{0}h {1}m", ja: "{0}時間{1}分" },
  dur_m: { zh: "{0} 分", en: "{0} min", ja: "{0}分" },
  // PSuggest
  q_city: { zh: "你在哪個城市?", en: "Which city are you in?", ja: "いまどの都市?" },
  change_city: { zh: "換城市", en: "Change city", ja: "都市を変える" },
  q_hub: { zh: "你現在在哪附近?", en: "Where are you right now?", ja: "いまどのあたり?" },
  want_hours: { zh: "還想玩", en: "Time left", ja: "あと" },
  hours_unit: { zh: "{0} 小時", en: "{0} h", ja: "{0} 時間" },
  march_mode: { zh: "🥾 行軍模式", en: "🥾 Power mode", ja: "🥾 弾丸モード" },
  rain_mode: { zh: "🌧️ 下雨了", en: "🌧️ It's raining", ja: "🌧️ 雨降ってきた" },
  next_up: { zh: "等等可以去:", en: "Up next:", ja: "次はここ:" },
  next_batch: { zh: "🔄 換一批", en: "🔄 More options", ja: "🔄 別の候補" },
  p_empty: {
    zh: "這個條件下找不到點了 —— 放寬時間或關掉雨天模式試試。",
    en: "Nothing fits — try more hours or turn off rain mode.",
    ja: "条件に合う場所がない——時間を増やすか雨モードを切ってみて。",
  },
  reason_walkable: { zh: "走路就到", en: "Walkable", ja: "徒歩圏内" },
  reason_transit: { zh: "移動約 {0} 分", en: "~{0} min away", ja: "移動約{0}分" },
  reason_must: { zh: "必去清單", en: "Must-see", ja: "マスト" },
  reason_slot: { zh: "{0}去正合適", en: "Perfect for the {0}", ja: "{0}にぴったり" },
  reason_season: { zh: "正是當季", en: "In season now", ja: "今が旬" },
  reason_rain: { zh: "下雨也不怕", en: "Rain-proof", ja: "雨でもOK" },
  slot_morning: { zh: "早上", en: "morning", ja: "朝" },
  slot_afternoon: { zh: "下午", en: "afternoon", ja: "午後" },
  slot_evening: { zh: "晚上", en: "evening", ja: "夜" },
  // Codex
  saved_plans: { zh: "存起來的行程", en: "Saved itineraries", ja: "保存したプラン" },
  no_saved: {
    zh: "還沒有 —— 去「J人規劃」排一份存起來。",
    en: "None yet — build one in J-mode and save it.",
    ja: "まだない——J型プランナーで作って保存しよう。",
  },
  open: { zh: "打開", en: "Open", ja: "開く" },
  footprints: {
    zh: "足跡 · 去過 {0} / {1} 個地方",
    en: "Footprints · {0} / {1} places visited",
    ja: "スタンプ · {0} / {1} 箇所",
  },
  no_footprints: {
    zh: "在「P人隨走」看到去過的地方就打卡,這裡會變成你的日本足跡收集冊。",
    en: "Check in places you've visited in P-mode — this becomes your Japan collection.",
    ja: "P型モードで行った場所にチェックイン——ここが日本スタンプ帳になる。",
  },
  // PoiCard
  must_see: { zh: "必去", en: "Must-see", ja: "マスト" },
  visited: { zh: "✓ 去過了", en: "✓ Visited", ja: "✓ 行った" },
  check_in: { zh: "打卡", en: "Check in", ja: "チェックイン" },
  navigate: { zh: "🗺️ 導航", en: "🗺️ Maps", ja: "🗺️ 地図" },
  cat_sight: { zh: "🏯 景點", en: "🏯 Sight", ja: "🏯 名所" },
  cat_temple: { zh: "⛩️ 神社寺院", en: "⛩️ Shrine/Temple", ja: "⛩️ 神社仏閣" },
  cat_nature: { zh: "🌿 自然", en: "🌿 Nature", ja: "🌿 自然" },
  cat_museum: { zh: "🖼️ 展館", en: "🖼️ Museum", ja: "🖼️ ミュージアム" },
  cat_food: { zh: "🍜 美食", en: "🍜 Food", ja: "🍜 グルメ" },
  cat_cafe: { zh: "☕ 咖啡甜點", en: "☕ Café", ja: "☕ カフェ" },
  cat_shopping: { zh: "🛍️ 購物", en: "🛍️ Shopping", ja: "🛍️ 買い物" },
  cat_nightlife: { zh: "🌃 夜生活", en: "🌃 Nightlife", ja: "🌃 ナイト" },
  cat_experience: { zh: "🎡 體驗", en: "🎡 Experience", ja: "🎡 体験" },
} satisfies Record<string, S>;

export type StringKey = keyof typeof STRINGS;

export function t(key: StringKey, lang: Lang, ...args: (string | number)[]): string {
  let s = STRINGS[key][lang];
  args.forEach((a, i) => {
    s = s.replaceAll(`{${i}}`, String(a));
  });
  return s;
}

export const WEEKDAY_BY_LANG: Record<Lang, readonly string[]> = {
  zh: ["日", "一", "二", "三", "四", "五", "六"],
  ja: ["日", "月", "火", "水", "木", "金", "土"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

/** 動態時段(城際/跨區移動、自由覓食)依語言組字串。 */
export function tSlotInfo(info: SlotInfo, lang: Lang): string {
  switch (info.t) {
    case "fm":
      return t(info.meal === "lunch" ? "free_lunch" : "free_dinner", lang);
    case "mv": {
      const from = cityByArea(info.area);
      return t("move_to", lang, from ? tArea(from, info.area) : info.area, info.min);
    }
    case "ic": {
      const from = cityById(info.from);
      const to = cityById(info.to);
      const base = t(
        "intercity",
        lang,
        from ? tCityName(from) : info.from,
        to ? tCityName(to) : info.to,
        fmtDurationLang(info.min, lang),
      );
      return info.via ? `${base}・${info.via}` : base;
    }
  }
}

// area 名稱反查所屬城市,供 mv 時段翻譯分區名(lazy 建索引)
let areaCityIndex: Map<string, string> | null = null;
function cityByArea(area: string): string | undefined {
  if (!areaCityIndex) {
    areaCityIndex = new Map();
    for (const p of ALL_POIS)
      if (!areaCityIndex.has(p.area)) areaCityIndex.set(p.area, p.city);
  }
  return areaCityIndex.get(area);
}

export function fmtDurationLang(min: number, lang: Lang): string {
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  if (h === 0) return t("dur_m", lang, m);
  return m === 0 ? t("dur_h", lang, h) : t("dur_hm", lang, h, m);
}
