import { useState } from "react";
import { REGIONS, regionById, poisByCity } from "../data";
import type { Pace, Category } from "../data/types";
import { buildPlan, type Plan } from "../lib/planner";
import { useAppStore } from "../store/appStore";
import { t, tRegionName, tCityName, type StringKey } from "../i18n";

const PREF_OPTIONS: { cat: Category; key: StringKey }[] = [
  { cat: "temple", key: "pref_temple" },
  { cat: "sight", key: "pref_sight" },
  { cat: "nature", key: "pref_nature" },
  { cat: "museum", key: "pref_museum" },
  { cat: "shopping", key: "pref_shopping" },
  { cat: "nightlife", key: "pref_nightlife" },
  { cat: "experience", key: "pref_experience" },
];

/** 這個地區的內容最多值得排幾天(各城 maxDays 加總,封頂 10)。 */
const regionCapacity = (regionId: string): number => {
  const r = regionById(regionId);
  if (!r) return 10;
  return Math.min(
    10,
    r.cities.reduce((s, c) => s + c.maxDays, 0),
  );
};

export function JSetup({ onPlan }: { onPlan: (plan: Plan) => void }) {
  const [regionId, setRegionId] = useState<string | null>(null);
  const [days, setDays] = useState(4);
  const [pace, setPace] = useState<Pace>("relaxed");
  const [startDate, setStartDate] = useState("");
  const [prefs, setPrefs] = useState<Category[]>([]);
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const [skipVisited, setSkipVisited] = useState(false);
  const visitedCount = useAppStore((s) => Object.keys(s.visited).length);
  const lang = useAppStore((s) => s.lang);
  const region = regionId ? regionById(regionId) : undefined;
  // 容量隨排除的城市縮減
  const cap = region
    ? Math.min(
        10,
        region.cities
          .filter((c) => !excluded.has(c.id))
          .reduce((s, c) => s + c.maxDays, 0),
      )
    : 10;

  const togglePref = (cat: Category) =>
    setPrefs((ps) => (ps.includes(cat) ? ps.filter((c) => c !== cat) : [...ps, cat]));

  const toggleCity = (id: string) =>
    setExcluded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (region && region.cities.length - next.size > 1) next.add(id); // 至少留一城
      const newCap = region
        ? Math.min(
            10,
            region.cities
              .filter((c) => !next.has(c.id))
              .reduce((s, c) => s + c.maxDays, 0),
          )
        : 10;
      setDays((d) => Math.min(d, newCap));
      return next;
    });

  const go = () => {
    if (!regionId) return;
    onPlan(
      buildPlan({
        regionId,
        days,
        pace,
        seed: Math.floor(Math.random() * 1e9),
        startDate: startDate || undefined,
        prefs: prefs.length ? prefs : undefined,
        excludeCities: excluded.size ? [...excluded] : undefined,
        skipVisited: skipVisited || undefined,
      }),
    );
  };

  return (
    <div className="screen">
      <p className="section-label">{t("q_region", lang)}</p>
      <div className="choice-grid">
        {REGIONS.map((r) => {
          const n = r.cities.reduce((s, c) => s + poisByCity(c.id).length, 0);
          return (
            <button
              key={r.id}
              className={regionId === r.id ? "selected" : ""}
              onClick={() => {
                setRegionId(r.id);
                setDays((d) => Math.min(d, regionCapacity(r.id)));
                setExcluded(new Set());
              }}
            >
              {r.emoji} {tRegionName(r)}
              <span className="muted small">{t("n_spots", lang, n)}</span>
            </button>
          );
        })}
      </div>

      {region && region.cities.length > 1 && (
        <>
          <p className="section-label">{t("q_cities", lang)}</p>
          <div className="choice-grid">
            {region.cities.map((c) => (
              <button
                key={c.id}
                className={excluded.has(c.id) ? "excluded" : "selected"}
                style={{ minWidth: 0, flex: "0 1 auto" }}
                onClick={() => toggleCity(c.id)}
              >
                {excluded.has(c.id) ? "✕ " : ""}
                {c.emoji} {tCityName(c)}
              </button>
            ))}
          </div>
          {visitedCount > 0 && (
            <button
              className={skipVisited ? "selected" : "ghost"}
              onClick={() => setSkipVisited((v) => !v)}
            >
              {skipVisited ? "✓ " : ""}
              {t("skip_visited", lang, visitedCount)}
            </button>
          )}
        </>
      )}

      <p className="section-label">{t("q_days", lang)}</p>
      <div className="stepper">
        <button onClick={() => setDays((d) => Math.max(1, d - 1))}>−</button>
        <span className="num">{t("days_unit", lang, days)}</span>
        <button
          disabled={days >= cap}
          onClick={() => setDays((d) => Math.min(cap, d + 1))}
        >
          ＋
        </button>
      </div>
      {regionId && (
        <p className="muted small" style={{ textAlign: "center", margin: 0 }}>
          {t("cap_hint", lang, cap)}
        </p>
      )}

      <p className="section-label">{t("q_pace", lang)}</p>
      <div className="choice-grid">
        <button
          className={pace === "relaxed" ? "selected" : ""}
          onClick={() => setPace("relaxed")}
        >
          {t("pace_relaxed", lang)}
          <span className="muted small">{t("pace_relaxed_desc", lang)}</span>
        </button>
        <button
          className={pace === "march" ? "selected" : ""}
          onClick={() => setPace("march")}
        >
          {t("pace_march", lang)}
          <span className="muted small">{t("pace_march_desc", lang)}</span>
        </button>
      </div>

      <p className="section-label">{t("q_prefs", lang)}</p>
      <div className="choice-grid">
        {PREF_OPTIONS.map(({ cat, key }) => (
          <button
            key={cat}
            className={prefs.includes(cat) ? "selected" : ""}
            style={{ minWidth: 0, flex: "0 1 auto" }}
            onClick={() => togglePref(cat)}
          >
            {t(key, lang)}
          </button>
        ))}
      </div>

      <p className="section-label">{t("q_date", lang)}</p>
      <div className="row wrap">
        <input
          type="date"
          className="date-input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {startDate ? (
          <>
            <span className="muted small">{t("date_hint_on", lang)}</span>
            <button className="ghost small" onClick={() => setStartDate("")}>
              {t("clear", lang)}
            </button>
          </>
        ) : (
          <span className="muted small">{t("date_hint_off", lang)}</span>
        )}
      </div>

      <button className="primary" disabled={!regionId} onClick={go}>
        {t("go_plan", lang)}
      </button>
    </div>
  );
}
