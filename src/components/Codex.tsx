import { useState } from "react";
import { ALL_POIS, cityById, regionById, REGIONS } from "../data";
import type { Category } from "../data/types";
import { useAppStore, type SavedPlan } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import { PoiSearch } from "./PoiSearch";
import { t, tCityName, tRegionName, CATEGORY_KEY } from "../i18n";

const CATEGORIES = Object.keys(CATEGORY_KEY) as Category[];

export function Codex({ onOpenPlan }: { onOpenPlan: (p: SavedPlan) => void }) {
  const visited = useAppStore((s) => s.visited);
  const wishlist = useAppStore((s) => s.wishlist);
  const savedPlans = useAppStore((s) => s.savedPlans);
  const deletePlan = useAppStore((s) => s.deletePlan);
  const lang = useAppStore((s) => s.lang);
  useAppStore((s) => s.dictTick); // 語言包載入完成時原地重繪

  // 圖鑑瀏覽器篩選:地區 → 城市 → 分類
  const [browseRegion, setBrowseRegion] = useState<string | null>(null);
  const [browseCity, setBrowseCity] = useState<string | null>(null);
  const [browseCat, setBrowseCat] = useState<Category | null>(null);

  const visitedPois = ALL_POIS.filter((p) => visited[p.id]).sort(
    (a, b) => (visited[b.id] ?? 0) - (visited[a.id] ?? 0),
  );
  const wishedPois = ALL_POIS.filter((p) => wishlist[p.id]).sort(
    (a, b) => (wishlist[b.id] ?? 0) - (wishlist[a.id] ?? 0),
  );

  const region = browseRegion ? regionById(browseRegion) : undefined;
  const browseCityIds = region && new Set(region.cities.map((c) => c.id));
  const browsePois = browseCityIds
    ? ALL_POIS.filter(
        (p) =>
          (browseCity ? p.city === browseCity : browseCityIds.has(p.city)) &&
          (!browseCat || p.category === browseCat),
      ).sort((a, b) => a.priority - b.priority)
    : [];

  return (
    <div className="screen">
      <PoiSearch />

      <p className="section-label">{t("saved_plans", lang)}</p>
      {savedPlans.length === 0 && <p className="muted small">{t("no_saved", lang)}</p>}
      {savedPlans.map((sp) => {
        const region = regionById(sp.plan.input.regionId);
        return (
          <div key={sp.id} className="card row">
            <div>
              <strong>{sp.title}</strong>
              <div className="muted small">
                {region?.emoji}{" "}
                {sp.plan.days
                  .map((d) => {
                    const c = cityById(d.cityId);
                    return c ? tCityName(c) : d.cityId;
                  })
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .join("→")}{" "}
                · {new Date(sp.createdAt).toLocaleDateString(
                  lang === "zh" ? "zh-TW" : lang === "ja" ? "ja-JP" : "en-US",
                )}
              </div>
            </div>
            <span className="spacer" />
            <button onClick={() => onOpenPlan(sp)}>{t("open", lang)}</button>
            <button className="ghost" onClick={() => deletePlan(sp.id)}>
              🗑
            </button>
          </div>
        );
      })}

      <p className="section-label">{t("wishlist_head", lang, wishedPois.length)}</p>
      <p className="muted small" style={{ margin: 0 }}>
        {t("wishlist_hint", lang)}
      </p>
      {wishedPois.map((p) => {
        const c = cityById(p.city);
        return (
          <PoiCard
            key={p.id}
            poi={p}
            showVisitToggle
            showWishToggle
            extraTags={c ? [`${c.emoji} ${tCityName(c)}`] : []}
          />
        );
      })}

      <p className="section-label">
        {t("footprints", lang, visitedPois.length, ALL_POIS.length)}
      </p>
      <div className="card">
        {REGIONS.map((r) => {
          const cityIds = new Set(r.cities.map((c) => c.id));
          const total = ALL_POIS.filter((p) => cityIds.has(p.city)).length;
          const done = visitedPois.filter((p) => cityIds.has(p.city)).length;
          return (
            <div key={r.id} className="progress-row">
              <span className="progress-label">
                {r.emoji} {tRegionName(r)}
              </span>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: total ? `${(done / total) * 100}%` : 0 }}
                />
              </div>
              <span className="muted small progress-num">
                {done}/{total}
              </span>
            </div>
          );
        })}
      </div>
      {visitedPois.length === 0 && (
        <p className="muted small">{t("no_footprints", lang)}</p>
      )}
      {visitedPois.map((p) => (
        <PoiCard key={p.id} poi={p} showVisitToggle />
      ))}

      {/* 圖鑑瀏覽器:地區 → 城市 → 分類,逛全部 POI、順手加 ⭐收藏 */}
      <p className="section-label">{t("browse_head", lang)}</p>
      <div className="choice-grid">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            className={`small${browseRegion === r.id ? " selected" : " ghost"}`}
            onClick={() => {
              setBrowseRegion((cur) => (cur === r.id ? null : r.id));
              setBrowseCity(null);
            }}
          >
            {r.emoji} {tRegionName(r)}
          </button>
        ))}
      </div>
      {!region && <p className="muted small">{t("browse_hint", lang)}</p>}
      {region && (
        <>
          {region.cities.length > 1 && (
            <div className="choice-grid">
              <button
                className={`small${browseCity === null ? " selected" : " ghost"}`}
                onClick={() => setBrowseCity(null)}
              >
                {t("browse_all", lang)}
              </button>
              {region.cities.map((c) => (
                <button
                  key={c.id}
                  className={`small${browseCity === c.id ? " selected" : " ghost"}`}
                  onClick={() => setBrowseCity(c.id)}
                >
                  {c.emoji} {tCityName(c)}
                </button>
              ))}
            </div>
          )}
          <div className="choice-grid">
            <button
              className={`small${browseCat === null ? " selected" : " ghost"}`}
              onClick={() => setBrowseCat(null)}
            >
              {t("browse_all", lang)}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`small${browseCat === cat ? " selected" : " ghost"}`}
                onClick={() => setBrowseCat((cur) => (cur === cat ? null : cat))}
              >
                {t(CATEGORY_KEY[cat], lang)}
              </button>
            ))}
          </div>
          <p className="muted small" style={{ margin: 0 }}>
            {t("n_points", lang, browsePois.length)}
          </p>
          {browsePois.map((p) => {
            const c = cityById(p.city);
            return (
              <PoiCard
                key={p.id}
                poi={p}
                showVisitToggle
                showWishToggle
                extraTags={!browseCity && c ? [`${c.emoji} ${tCityName(c)}`] : []}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
