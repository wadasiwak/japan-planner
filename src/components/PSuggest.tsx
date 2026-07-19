import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { REGIONS, cityById, hubById } from "../data";
import type { Pace } from "../data/types";
import {
  suggest,
  closedNowCount,
  type SuggestInput,
  type ReasonInfo,
} from "../lib/suggest";
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
  // 設定存 store(persist),reload 後原樣還原;seed/換一批排除是一次性的不存。
  // 初始化只讀一次(getState,不訂閱),之後單向寫回,不會自迴圈。
  const draft = useAppStore.getState().pDraft;
  const draftCity = draft?.cityId && cityById(draft.cityId) ? draft.cityId : null;
  const draftHub =
    draftCity && draft?.hubId && cityById(draftCity)?.hubs.some((h) => h.id === draft.hubId)
      ? draft.hubId
      : null;
  const [cityId, setCityId] = useState<string | null>(draftCity);
  const [hubId, setHubId] = useState<string | null>(draftHub);
  const [hoursLeft, setHoursLeft] = useState(draft?.hoursLeft ?? 4);
  const [pace, setPace] = useState<Pace>(draft?.pace ?? "relaxed");
  const [rain, setRain] = useState(draft?.rain ?? false);
  // 前一天晚上規劃隔天:tomorrow = 明早 9:00 起算
  const [when, setWhen] = useState<"now" | "tomorrow">(draft?.when ?? "now");
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const setPDraft = useAppStore((s) => s.setPDraft);
  const visited = useAppStore((s) => s.visited);
  const lang = useAppStore((s) => s.lang);
  useAppStore((s) => s.dictTick); // 語言包載入完成時原地重繪

  useEffect(() => {
    setPDraft({ cityId, hubId, hoursLeft, pace, rain, when });
  }, [cityId, hubId, hoursLeft, pace, rain, when, setPDraft]);

  const city = cityId ? cityById(cityId) : undefined;

  const { results, closedNow } = useMemo(() => {
    if (!cityId || !hubId) return { results: [], closedNow: 0 };
    const base = new Date();
    if (when === "tomorrow") base.setDate(base.getDate() + 1);
    const input: SuggestInput = {
      cityId,
      hubId,
      nowMinutes:
        when === "tomorrow" ? 9 * 60 : base.getHours() * 60 + base.getMinutes(),
      hoursLeft,
      pace,
      weekday: base.getDay(),
      month: base.getMonth() + 1,
      rain,
      visited: new Set(Object.keys(visited)),
      excludeIds: excluded,
      seed,
    };
    return { results: suggest(input), closedNow: closedNowCount(input) };
  }, [cityId, hubId, hoursLeft, pace, rain, seed, excluded, visited, when]);

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
          <p className="section-label">{t("q_when", lang)}</p>
          <div className="segmented">
            <button
              className={when === "now" ? "on" : ""}
              onClick={() => setWhen("now")}
            >
              {t("when_now", lang)}
            </button>
            <button
              className={when === "tomorrow" ? "on" : ""}
              onClick={() => {
                setWhen("tomorrow");
                setHoursLeft((h) => Math.max(h, 8));
              }}
            >
              {t("when_tomorrow", lang)}
            </button>
          </div>
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
              <p className="muted small">
                {t(when === "tomorrow" ? "next_up_tomorrow" : "next_up", lang)}
              </p>
              {results.map((r) => (
                <PoiCard
                  key={r.poi.id}
                  poi={r.poi}
                  showVisitToggle
                  extraTags={r.reasons.map((x) => reasonText(x, lang))}
                />
              ))}
              <button onClick={nextBatch}>{t("next_batch", lang)}</button>
              {closedNow > 0 && (
                <p className="muted small" style={{ textAlign: "center" }}>
                  {t("p_closed_hint", lang, closedNow)}
                </p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
