import { useState } from "react";
import { REGIONS, poisByCity } from "../data";
import type { Pace } from "../data/types";
import { buildPlan, type Plan } from "../lib/planner";

export function JSetup({ onPlan }: { onPlan: (plan: Plan) => void }) {
  const [regionId, setRegionId] = useState<string | null>(null);
  const [days, setDays] = useState(4);
  const [pace, setPace] = useState<Pace>("relaxed");
  const [startDate, setStartDate] = useState("");

  const go = () => {
    if (!regionId) return;
    onPlan(
      buildPlan({
        regionId,
        days,
        pace,
        seed: Math.floor(Math.random() * 1e9),
        startDate: startDate || undefined,
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
              onClick={() => setRegionId(r.id)}
            >
              {r.emoji} {r.name}
              <span className="muted small"> · {n} 個景點</span>
            </button>
          );
        })}
      </div>

      <p className="section-label">玩幾天?</p>
      <div className="stepper">
        <button onClick={() => setDays((d) => Math.max(1, d - 1))}>−</button>
        <span className="num">{days} 天</span>
        <button onClick={() => setDays((d) => Math.min(10, d + 1))}>＋</button>
      </div>

      <p className="section-label">遊玩節奏?</p>
      <div className="choice-grid">
        <button
          className={pace === "relaxed" ? "selected" : ""}
          onClick={() => setPace("relaxed")}
        >
          🍵 輕鬆
          <span className="muted small"> · 一天約 6 小時,留白發呆</span>
        </button>
        <button
          className={pace === "march" ? "selected" : ""}
          onClick={() => setPace("march")}
        >
          🥾 行軍
          <span className="muted small"> · 一天 10 小時塞好塞滿</span>
        </button>
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
