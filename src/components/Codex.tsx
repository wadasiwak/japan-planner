import { ALL_POIS, cityById, regionById, REGIONS } from "../data";
import { useAppStore, type SavedPlan } from "../store/appStore";
import { PoiCard } from "./PoiCard";

const PACE_LABEL = { relaxed: "輕鬆", march: "行軍" } as const;

export function Codex({ onOpenPlan }: { onOpenPlan: (p: SavedPlan) => void }) {
  const visited = useAppStore((s) => s.visited);
  const savedPlans = useAppStore((s) => s.savedPlans);
  const deletePlan = useAppStore((s) => s.deletePlan);

  const visitedPois = ALL_POIS.filter((p) => visited[p.id]).sort(
    (a, b) => (visited[b.id] ?? 0) - (visited[a.id] ?? 0),
  );

  return (
    <div className="screen">
      <p className="section-label">存起來的行程</p>
      {savedPlans.length === 0 && (
        <p className="muted small">還沒有 —— 去「J人規劃」排一份存起來。</p>
      )}
      {savedPlans.map((sp) => {
        const region = regionById(sp.plan.input.regionId);
        return (
          <div key={sp.id} className="card row">
            <div>
              <strong>{sp.title}</strong>
              <div className="muted small">
                {region?.emoji}{" "}
                {sp.plan.days
                  .map((d) => cityById(d.cityId)?.name)
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .join("→")}{" "}
                · {PACE_LABEL[sp.plan.input.pace]} ·{" "}
                {new Date(sp.createdAt).toLocaleDateString("zh-TW")}
              </div>
            </div>
            <span className="spacer" />
            <button onClick={() => onOpenPlan(sp)}>打開</button>
            <button className="ghost" onClick={() => deletePlan(sp.id)}>
              🗑
            </button>
          </div>
        );
      })}

      <p className="section-label">
        足跡 · 去過 {visitedPois.length} / {ALL_POIS.length} 個地方
      </p>
      <div className="card">
        {REGIONS.map((r) => {
          const cityIds = new Set(r.cities.map((c) => c.id));
          const total = ALL_POIS.filter((p) => cityIds.has(p.city)).length;
          const done = visitedPois.filter((p) => cityIds.has(p.city)).length;
          return (
            <div key={r.id} className="progress-row">
              <span className="progress-label">
                {r.emoji} {r.name}
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
        <p className="muted small">
          在「P人隨走」看到去過的地方就打卡,這裡會變成你的日本足跡收集冊。
        </p>
      )}
      {visitedPois.map((p) => (
        <PoiCard key={p.id} poi={p} showVisitToggle />
      ))}
    </div>
  );
}
