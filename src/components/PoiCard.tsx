import type { POI } from "../data/types";
import { cityById } from "../data";
import { useAppStore } from "../store/appStore";
import { t, tPoiName, tPoiBlurb, tPoiTips, tArea, type StringKey } from "../i18n";

const CATEGORY_KEY: Record<POI["category"], StringKey> = {
  sight: "cat_sight",
  temple: "cat_temple",
  nature: "cat_nature",
  museum: "cat_museum",
  food: "cat_food",
  cafe: "cat_cafe",
  shopping: "cat_shopping",
  nightlife: "cat_nightlife",
  experience: "cat_experience",
};

export function PoiCard({
  poi,
  extraTags = [],
  showVisitToggle = false,
}: {
  poi: POI;
  extraTags?: string[];
  showVisitToggle?: boolean;
}) {
  const visited = useAppStore((s) => !!s.visited[poi.id]);
  const toggleVisited = useAppStore((s) => s.toggleVisited);
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
        {showVisitToggle && (
          <button
            className={`ghost${visited ? " selected" : ""}`}
            style={{ marginLeft: "auto", padding: "2px 12px", fontSize: "0.8rem" }}
            onClick={() => toggleVisited(poi.id)}
          >
            {visited ? t("visited", lang) : t("check_in", lang)}
          </button>
        )}
      </div>
    </div>
  );
}
