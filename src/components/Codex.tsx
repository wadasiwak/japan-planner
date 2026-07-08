import { ALL_POIS, cityById, regionById, REGIONS } from "../data";
import { useAppStore, type SavedPlan } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import { t, tCityName, tRegionName } from "../i18n";

export function Codex({ onOpenPlan }: { onOpenPlan: (p: SavedPlan) => void }) {
  const visited = useAppStore((s) => s.visited);
  const savedPlans = useAppStore((s) => s.savedPlans);
  const deletePlan = useAppStore((s) => s.deletePlan);
  const lang = useAppStore((s) => s.lang);

  const visitedPois = ALL_POIS.filter((p) => visited[p.id]).sort(
    (a, b) => (visited[b.id] ?? 0) - (visited[a.id] ?? 0),
  );

  return (
    <div className="screen">
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
    </div>
  );
}
