import type { POI } from "../data/types";
import { cityById } from "../data";
import { useAppStore } from "../store/appStore";
import { t, tPoiName, tPoiBlurb, tPoiTips, tArea, CATEGORY_KEY } from "../i18n";

const toggleStyle = (pushRight: boolean) => ({
  marginLeft: pushRight ? ("auto" as const) : undefined,
  padding: "2px 12px",
  fontSize: "0.8rem",
});

export function PoiCard({
  poi,
  extraTags = [],
  showVisitToggle = false,
  showWishToggle = false,
}: {
  poi: POI;
  extraTags?: string[];
  showVisitToggle?: boolean;
  showWishToggle?: boolean;
}) {
  const visited = useAppStore((s) => !!s.visited[poi.id]);
  const wished = useAppStore((s) => !!s.wishlist[poi.id]);
  const toggleVisited = useAppStore((s) => s.toggleVisited);
  const toggleWish = useAppStore((s) => s.toggleWish);
  const lang = useAppStore((s) => s.lang);
  useAppStore((s) => s.dictTick); // 語言包載入完成時原地重繪
  const tips = tPoiTips(poi);

  return (
    <div className={`poi-card${visited ? " visited" : ""}`}>
      <div className="poi-head">
        <span className="poi-name">{tPoiName(poi)}</span>
        {lang !== "ja" && <span className="poi-ja">{poi.nameJa}</span>}
        {poi.priority === 1 && <span className="tag hot">{t("must_see", lang)}</span>}
      </div>
      <p className="poi-blurb">{tPoiBlurb(poi)}</p>
      {tips && <p className="poi-tips">💡 {tips}</p>}
      <div className="poi-meta">
        <span className="tag">{t(CATEGORY_KEY[poi.category], lang)}</span>
        <span className="tag">{tArea(poi.city, poi.area)}</span>
        {extraTags.map((tag) => (
          <span key={tag} className="tag ok">
            {tag}
          </span>
        ))}
        <a
          className="tag maplink"
          // 用日文店名+城市搜尋,pin 會吸到店家本體(還帶營業時間評論);
          // 純座標差一點就會釘到隔壁棟
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${poi.nameJa} ${(cityById(poi.city)?.nameJa ?? "").split("・")[0]}`.trim(),
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("navigate", lang)}
        </a>
        {showWishToggle && (
          <button
            className={`ghost${wished ? " selected" : ""}`}
            style={toggleStyle(true)}
            onClick={() => toggleWish(poi.id)}
          >
            {wished ? t("wished", lang) : t("wish_add", lang)}
          </button>
        )}
        {showVisitToggle && (
          <button
            className={`ghost${visited ? " selected" : ""}`}
            style={toggleStyle(!showWishToggle)}
            onClick={() => toggleVisited(poi.id)}
          >
            {visited ? t("visited", lang) : t("check_in", lang)}
          </button>
        )}
      </div>
    </div>
  );
}
