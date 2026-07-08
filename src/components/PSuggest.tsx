import { lazy, Suspense, useMemo, useState } from "react";
import { REGIONS, cityById, hubById } from "../data";
import type { Pace } from "../data/types";
import { suggest, type SuggestInput, type ReasonInfo } from "../lib/suggest";
import { useAppStore } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import type { MapPoint } from "./DayMap";
import {
  t,
  tCityName,
  tHubName,
  tPoiName,
  tRegionName,
  tSouvenirs,
  type Lang,
} from "../i18n";

// maplibre 很肥,地圖元件延遲載入,首屏不用扛
const DayMap = lazy(() =>
  import("./DayMap").then((m) => ({ default: m.DayMap })),
);

const reasonText = (r: ReasonInfo, lang: Lang): string => {
  switch (r.t) {
    case "walkable":
      return t("reason_walkable", lang);
    case "transit":
      return t("reason_transit", lang, r.min);
    case "must":
      return t("reason_must", lang);
    case "slot":
      return t("reason_slot", lang, t(`slot_${r.slot}`, lang));
    case "season":
      return t("reason_season", lang);
    case "rain":
      return t("reason_rain", lang);
  }
};

export function PSuggest() {
  const [cityId, setCityId] = useState<string | null>(null);
  const [hubId, setHubId] = useState<string | null>(null);
  const [hoursLeft, setHoursLeft] = useState(4);
  const [pace, setPace] = useState<Pace>("relaxed");
  const [rain, setRain] = useState(false);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const visited = useAppStore((s) => s.visited);
  const lang = useAppStore((s) => s.lang);

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
      month: now.getMonth() + 1,
      rain,
      visited: new Set(Object.keys(visited)),
      excludeIds: excluded,
      seed,
    };
    return suggest(input);
  }, [cityId, hubId, hoursLeft, pace, rain, seed, excluded, visited]);

  const mapPoints = useMemo<MapPoint[]>(() => {
    const hub = hubId ? hubById(hubId) : undefined;
    if (!hub || !cityId) return [];
    return [
      { center: hub.center, label: tHubName(cityId, hub), kind: "hub" as const },
      ...results.map((r) => ({
        center: r.poi.center,
        label: tPoiName(r.poi),
        kind: (r.poi.category === "food" ? "food" : "poi") as MapPoint["kind"],
      })),
    ];
  }, [hubId, cityId, results, lang]);

  const nextBatch = () => {
    setExcluded((prev) => {
      const next = new Set(prev);
      for (const r of results) next.add(r.poi.id);
      return next;
    });
    setSeed(Math.floor(Math.random() * 1e9));
  };

  const souvenirs = city ? tSouvenirs(city) : undefined;

  return (
    <div className="screen">
      <p className="section-label">{t("q_city", lang)}</p>
      {city && (
        <div className="row wrap">
          <button className="selected">
            {city.emoji} {tCityName(city)}
          </button>
          {city.transport && (
            <span className="tag ok">{t(`transport_${city.transport}`, lang)}</span>
          )}
          <button
            className="ghost small"
            onClick={() => {
              setCityId(null);
              setHubId(null);
              setExcluded(new Set());
            }}
          >
            {t("change_city", lang)}
          </button>
        </div>
      )}
      {!city &&
        REGIONS.map((r) => (
          <div key={r.id}>
            <p className="muted small region-label">
              {r.emoji} {tRegionName(r)}
            </p>
            <div className="choice-grid">
              {r.cities.map((c) => (
                <button
                  key={c.id}
                  className={cityId === c.id ? "selected" : ""}
                  onClick={() => {
                    setCityId(c.id);
                    setHubId(null);
                    setExcluded(new Set());
                  }}
                >
                  {c.emoji} {tCityName(c)}
                </button>
              ))}
            </div>
          </div>
        ))}

      {city && souvenirs && souvenirs.length > 0 && (
        <details className="card souvenirs">
          <summary>{t("souvenir_list", lang, tCityName(city))}</summary>
          <ul>
            {souvenirs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </details>
      )}

      {city && (
        <>
          <p className="section-label">{t("q_hub", lang)}</p>
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
                📍 {tHubName(city.id, h)}
              </button>
            ))}
          </div>
        </>
      )}

      {hubId && (
        <>
          <div className="row wrap">
            <span className="section-label">{t("want_hours", lang)}</span>
            <div className="row">
              <button onClick={() => setHoursLeft((h) => Math.max(1, h - 1))}>−</button>
              <strong style={{ minWidth: 64, textAlign: "center" }}>
                {t("hours_unit", lang, hoursLeft)}
              </strong>
              <button onClick={() => setHoursLeft((h) => Math.min(12, h + 1))}>＋</button>
            </div>
            <span className="spacer" />
            <button
              className={pace === "march" ? "selected" : ""}
              onClick={() => setPace((p) => (p === "march" ? "relaxed" : "march"))}
            >
              {t("march_mode", lang)}
            </button>
            <button className={rain ? "selected" : ""} onClick={() => setRain((r) => !r)}>
              {t("rain_mode", lang)}
            </button>
          </div>

          {results.length === 0 ? (
            <div className="empty">{t("p_empty", lang)}</div>
          ) : (
            <>
              <Suspense fallback={<div className="map-box" />}>
                <DayMap points={mapPoints} />
              </Suspense>
              <p className="muted small">{t("next_up", lang)}</p>
              {results.map((r) => (
                <PoiCard
                  key={r.poi.id}
                  poi={r.poi}
                  showVisitToggle
                  extraTags={r.reasons.map((x) => reasonText(x, lang))}
                />
              ))}
              <button onClick={nextBatch}>{t("next_batch", lang)}</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
