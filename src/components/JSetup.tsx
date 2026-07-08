import { useState } from "react";
import { REGIONS, regionById, poisByCity } from "../data";
import type { Pace, Category } from "../data/types";
import { buildPlan, type Plan } from "../lib/planner";
import { useAppStore } from "../store/appStore";

const PREF_OPTIONS: { cat: Category; label: string }[] = [
  { cat: "temple", label: "⛩️ 神社寺院" },
  { cat: "sight", label: "🏯 經典景點" },
  { cat: "nature", label: "🌿 自然風景" },
  { cat: "museum", label: "🖼️ 博物展館" },
  { cat: "shopping", label: "🛍️ 逛街購物" },
  { cat: "nightlife", label: "🌃 夜生活" },
  { cat: "experience", label: "🎡 體驗活動" },
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
      <p className="section-label">要去哪個地區?</p>
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
              {r.emoji} {r.name}
              <span className="muted small"> · {n} 個景點</span>
            </button>
          );
        })}
      </div>

      {region && region.cities.length > 1 && (
        <>
          <p className="section-label">這些城市都去?(去過的可以點掉)</p>
          <div className="choice-grid">
            {region.cities.map((c) => (
              <button
                key={c.id}
                className={excluded.has(c.id) ? "excluded" : "selected"}
                style={{ minWidth: 0, flex: "0 1 auto" }}
                onClick={() => toggleCity(c.id)}
              >
                {excluded.has(c.id) ? "✕ " : ""}
                {c.emoji} {c.name}
              </button>
            ))}
          </div>
          {visitedCount > 0 && (
            <button
              className={skipVisited ? "selected" : "ghost"}
              onClick={() => setSkipVisited((v) => !v)}
            >
              {skipVisited ? "✓" : ""} ⛔ 跳過我打過卡的 {visitedCount} 個點
            </button>
          )}
        </>
      )}

      <p className="section-label">玩幾天?</p>
      <div className="stepper">
        <button onClick={() => setDays((d) => Math.max(1, d - 1))}>−</button>
        <span className="num">{days} 天</span>
        <button
          disabled={days >= cap}
          onClick={() => setDays((d) => Math.min(cap, d + 1))}
        >
          ＋
        </button>
      </div>
      {regionId && (
        <p className="muted small" style={{ textAlign: "center", margin: 0 }}>
          這個地區的內容約可排 {cap} 天
        </p>
      )}

      <p className="section-label">遊玩節奏?</p>
      <div className="choice-grid">
        <button
          className={pace === "relaxed" ? "selected" : ""}
          onClick={() => setPace("relaxed")}
        >
          🍵 輕鬆
          <span className="muted small"> · 一天約 6 小時,含下午咖啡歇腳</span>
        </button>
        <button
          className={pace === "march" ? "selected" : ""}
          onClick={() => setPace("march")}
        >
          🥾 行軍
          <span className="muted small"> · 一天 10 小時塞好塞滿</span>
        </button>
      </div>

      <p className="section-label">特別喜歡?(選填,勾了會多排這些)</p>
      <div className="choice-grid">
        {PREF_OPTIONS.map(({ cat, label }) => (
          <button
            key={cat}
            className={prefs.includes(cat) ? "selected" : ""}
            style={{ minWidth: 0, flex: "0 1 auto" }}
            onClick={() => togglePref(cat)}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="section-label">出發日?(選填)</p>
      <div className="row wrap">
        <input
          type="date"
          className="date-input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {startDate ? (
          <>
            <span className="muted small">會自動避開各景點當天的固定公休</span>
            <button className="ghost small" onClick={() => setStartDate("")}>
              清除
            </button>
          </>
        ) : (
          <span className="muted small">不填就不管公休日</span>
        )}
      </div>

      <button className="primary" disabled={!regionId} onClick={go}>
        排出我的行程 →
      </button>
    </div>
  );
}
