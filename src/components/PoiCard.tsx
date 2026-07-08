import type { POI } from "../data/types";
import { cityById } from "../data";
import { useAppStore } from "../store/appStore";

const CATEGORY_LABEL: Record<POI["category"], string> = {
  sight: "🏯 景點",
  temple: "⛩️ 神社寺院",
  nature: "🌿 自然",
  museum: "🖼️ 展館",
  food: "🍜 美食",
  cafe: "☕ 咖啡甜點",
  shopping: "🛍️ 購物",
  nightlife: "🌃 夜生活",
  experience: "🎡 體驗",
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

  return (
    <div className={`poi-card${visited ? " visited" : ""}`}>
      <div className="poi-head">
        <span className="poi-name">{poi.name}</span>
        <span className="poi-ja">{poi.nameJa}</span>
        {poi.priority === 1 && <span className="tag hot">必去</span>}
      </div>
      <p className="poi-blurb">{poi.blurb}</p>
      {poi.tips && <p className="poi-tips">💡 {poi.tips}</p>}
      <div className="poi-meta">
        <span className="tag">{CATEGORY_LABEL[poi.category]}</span>
        <span className="tag">{poi.area}</span>
        {extraTags.map((t) => (
          <span key={t} className="tag ok">
            {t}
          </span>
        ))}
        <a
          className="tag maplink"
          // 用日文店名+城市搜尋,pin 會吸到店家本體(還帶營業時間評論);
          // 純座標差一點就會釘到隔壁棟
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            // 複合城市名(別府・由布院)取第一段就好,多餘詞反而干擾搜尋
            `${poi.nameJa} ${(cityById(poi.city)?.nameJa ?? "").split("・")[0]}`.trim(),
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          🗺️ 導航
        </a>
        {showVisitToggle && (
          <button
            className={`ghost${visited ? " selected" : ""}`}
            style={{ marginLeft: "auto", padding: "2px 12px", fontSize: "0.8rem" }}
            onClick={() => toggleVisited(poi.id)}
          >
            {visited ? "✓ 去過了" : "打卡"}
          </button>
        )}
      </div>
    </div>
  );
}
