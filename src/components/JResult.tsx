import { useState } from "react";
import { cityById, poiById, regionById } from "../data";
import { buildPlan, fmtTime, type Plan } from "../lib/planner";
import { useAppStore } from "../store/appStore";
import { PoiCard } from "./PoiCard";

const PACE_LABEL = { relaxed: "輕鬆", march: "行軍" } as const;

export function JResult({
  plan,
  onReplace,
}: {
  plan: Plan;
  onReplace: (plan: Plan) => void;
}) {
  const [dayIdx, setDayIdx] = useState(0);
  const [saved, setSaved] = useState(false);
  const savePlan = useAppStore((s) => s.savePlan);
  const region = regionById(plan.input.regionId);
  const day = plan.days[dayIdx];
  const title = `${region?.name ?? "?"} ${plan.input.days} 天・${PACE_LABEL[plan.input.pace]}`;

  const reroll = () => {
    setDayIdx(0);
    setSaved(false);
    onReplace(
      buildPlan({ ...plan.input, seed: Math.floor(Math.random() * 1e9) }),
    );
  };

  if (!day) {
    return <div className="empty">這個地區的內容還在準備中,先去東京晃晃?</div>;
  }

  return (
    <div className="screen">
      <div className="row">
        <strong>{title}</strong>
        <span className="spacer" />
        <button className="ghost" onClick={reroll}>
          🎲 重骰
        </button>
        <button
          className={saved ? "selected" : ""}
          onClick={() => {
            savePlan(title, plan);
            setSaved(true);
          }}
        >
          {saved ? "✓ 已存" : "💾 存起來"}
        </button>
      </div>

      <div className="day-tabs">
        {plan.days.map((d, i) => (
          <button
            key={d.day}
            className={i === dayIdx ? "selected" : ""}
            onClick={() => setDayIdx(i)}
          >
            Day {d.day} · {cityById(d.cityId)?.name}
          </button>
        ))}
      </div>

      <p className="muted small">
        {cityById(day.cityId)?.emoji} {cityById(day.cityId)?.name} —{" "}
        {day.areas.join("、")}
      </p>

      {day.slots.length === 0 && (
        <div className="empty">
          這天先留白 —— 睡到自然醒,或切去「P人隨走」看看附近有什麼。
        </div>
      )}

      <div className="timeline">
        {day.slots.map((slot, i) => {
          const poi = slot.poiId ? poiById(slot.poiId) : undefined;
          if (slot.kind === "transit" || (slot.kind === "meal" && !poi)) {
            return (
              <div key={i} className={`slot ${slot.kind === "transit" ? "transit" : "meal-free"}`}>
                <span className="time">{fmtTime(slot.start)}</span>
                <div className="body">
                  {slot.kind === "transit" ? "🚃 " : "🍽️ "}
                  {slot.note}
                </div>
              </div>
            );
          }
          if (!poi) return null;
          return (
            <div key={i} className="slot">
              <span className="time">
                {fmtTime(slot.start)}
                <br />| {fmtTime(slot.end)}
              </span>
              <div className="body">
                <PoiCard
                  poi={poi}
                  extraTags={slot.kind === "meal" ? ["🍽️ 用餐"] : []}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
