import { lazy, Suspense, useMemo, useState } from "react";
import { CITIES, cityById, hubById } from "../data";
import type { Pace } from "../data/types";
import { suggest, type SuggestInput } from "../lib/suggest";
import { useAppStore } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import type { MapPoint } from "./DayMap";

// maplibre 很肥,地圖元件延遲載入,首屏不用扛
const DayMap = lazy(() =>
  import("./DayMap").then((m) => ({ default: m.DayMap })),
);

export function PSuggest() {
  const [cityId, setCityId] = useState<string | null>(null);
  const [hubId, setHubId] = useState<string | null>(null);
  const [hoursLeft, setHoursLeft] = useState(4);
  const [pace, setPace] = useState<Pace>("relaxed");
  const [rain, setRain] = useState(false);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const visited = useAppStore((s) => s.visited);

  const city = cityId ? cityById(cityId) : undefined;

  const results = useMemo(() => {
    if (!cityId || !hubId) return [];
    const now = new Date();
    const input: SuggestInput = {
      cityId,
      hubId,
      nowMinutes: now.getHours() * 60 + now.getMinutes(),
      hoursLeft,
      pace,
      weekday: now.getDay(),
      rain,
      visited: new Set(Object.keys(visited)),
      excludeIds: excluded,
      seed,
    };
    return suggest(input);
  }, [cityId, hubId, hoursLeft, pace, rain, seed, excluded, visited]);

  const mapPoints = useMemo<MapPoint[]>(() => {
    const hub = hubId ? hubById(hubId) : undefined;
    if (!hub) return [];
    return [
      { center: hub.center, label: hub.name, kind: "hub" as const },
      ...results.map((r) => ({
        center: r.poi.center,
        label: r.poi.name,
        kind: (r.poi.category === "food" ? "food" : "poi") as MapPoint["kind"],
      })),
    ];
  }, [hubId, results]);

  const nextBatch = () => {
    setExcluded((prev) => {
      const next = new Set(prev);
      for (const r of results) next.add(r.poi.id);
      return next;
    });
    setSeed(Math.floor(Math.random() * 1e9));
  };

  return (
    <div className="screen">
      <p className="section-label">你在哪個城市?</p>
      <div className="choice-grid">
        {CITIES.map((c) => (
          <button
            key={c.id}
            className={cityId === c.id ? "selected" : ""}
            onClick={() => {
              setCityId(c.id);
              setHubId(null);
              setExcluded(new Set());
            }}
          >
            {c.emoji} {c.name}
          </button>
        ))}
      </div>

      {city && (
        <>
          <p className="section-label">你現在在哪附近?</p>
          <div className="choice-grid">
            {city.hubs.map((h) => (
              <button
                key={h.id}
                className={hubId === h.id ? "selected" : ""}
                onClick={() => {
                  setHubId(h.id);
                  setExcluded(new Set());
                }}
              >
                📍 {h.name}
              </button>
            ))}
          </div>
        </>
      )}

      {hubId && (
        <>
          <div className="row wrap">
            <span className="section-label">還想玩</span>
            <div className="row">
              <button onClick={() => setHoursLeft((h) => Math.max(1, h - 1))}>−</button>
              <strong style={{ minWidth: 64, textAlign: "center" }}>
                {hoursLeft} 小時
              </strong>
              <button onClick={() => setHoursLeft((h) => Math.min(12, h + 1))}>＋</button>
            </div>
            <span className="spacer" />
            <button
              className={pace === "march" ? "selected" : ""}
              onClick={() => setPace((p) => (p === "march" ? "relaxed" : "march"))}
            >
              🥾 行軍模式
            </button>
            <button className={rain ? "selected" : ""} onClick={() => setRain((r) => !r)}>
              🌧️ 下雨了
            </button>
          </div>

          {results.length === 0 ? (
            <div className="empty">
              這個條件下找不到點了 —— 放寬時間或關掉雨天模式試試。
            </div>
          ) : (
            <>
              <Suspense fallback={<div className="map-box" />}>
                <DayMap points={mapPoints} />
              </Suspense>
              <p className="muted small">等等可以去:</p>
              {results.map((r) => (
                <PoiCard
                  key={r.poi.id}
                  poi={r.poi}
                  showVisitToggle
                  extraTags={r.reasons}
                />
              ))}
              <button onClick={nextBatch}>🔄 換一批</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
