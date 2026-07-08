import { lazy, Suspense, useMemo, useState } from "react";
import { cityById, poiById, regionById } from "../data";
import {
  fmtTime,
  removeSlot,
  replaceSlot,
  rerollUnlocked,
  WEEKDAY_CHAR,
  type Plan,
} from "../lib/planner";
import { planShareUrl } from "../lib/share";
import { useAppStore } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import type { MapPoint } from "./DayMap";

// maplibre 很肥,地圖元件延遲載入,首屏不用扛
const DayMap = lazy(() =>
  import("./DayMap").then((m) => ({ default: m.DayMap })),
);

const PACE_LABEL = { relaxed: "輕鬆", march: "行軍" } as const;

const TRANSPORT_TAG = {
  transit: "🚃 大眾運輸OK",
  car: "🚗 建議自駕",
  mixed: "🚃+🚗 市區電車,郊區自駕較省",
} as const;

export function JResult({
  plan,
  onReplace,
}: {
  plan: Plan;
  onReplace: (plan: Plan) => void;
}) {
  const [dayIdx, setDayIdx] = useState(0);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [lockedDays, setLockedDays] = useState<Set<number>>(new Set());

  const dirty = () => {
    setSaved(false);
    setCopied(false);
    setShared(false);
  };
  const savePlan = useAppStore((s) => s.savePlan);
  const region = regionById(plan.input.regionId);
  const day = plan.days[dayIdx];
  const title = `${region?.name ?? "?"} ${plan.input.days} 天・${PACE_LABEL[plan.input.pace]}`;

  const mapPoints = useMemo<MapPoint[]>(() => {
    if (!plan.days[dayIdx]) return [];
    let order = 0;
    return plan.days[dayIdx].slots
      .filter((s) => s.poiId)
      .map((s) => {
        const p = poiById(s.poiId!)!;
        return {
          center: p.center,
          label: p.name,
          kind: (s.kind === "meal" ? "food" : "poi") as MapPoint["kind"],
          order: ++order,
        };
      });
  }, [plan, dayIdx]);

  const reroll = () => {
    dirty();
    onReplace(
      rerollUnlocked(plan, lockedDays, Math.floor(Math.random() * 1e9)),
    );
  };

  const toggleLock = (dayNo: number) =>
    setLockedDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayNo)) next.delete(dayNo);
      else next.add(dayNo);
      return next;
    });

  const doReplace = (slotIdx: number) => {
    const next = replaceSlot(plan, dayIdx, slotIdx, Math.floor(Math.random() * 1e9));
    if (next) {
      dirty();
      onReplace(next);
    }
  };

  const doRemove = (slotIdx: number) => {
    dirty();
    onReplace(removeSlot(plan, dayIdx, slotIdx));
  };

  const share = async () => {
    await navigator.clipboard.writeText(planShareUrl(plan));
    setShared(true);
  };

  // 全程行程轉純文字,貼 LINE 給旅伴用
  const copyText = async () => {
    const lines: string[] = [`【${title}】日本旅伴JP 🗾`];
    for (const d of plan.days) {
      const wd = d.weekday != null ? `(${WEEKDAY_CHAR[d.weekday]})` : "";
      lines.push("", `Day ${d.day}${wd} ${cityById(d.cityId)?.name} — ${d.areas.join("、")}`);
      for (const s of d.slots) {
        const poi = s.poiId ? poiById(s.poiId) : undefined;
        if (poi) {
          const suffix = s.kind === "meal" ? " 🍽️" : s.kind === "cafe" ? " ☕" : "";
          lines.push(`${fmtTime(s.start)} ${poi.name}(${poi.nameJa})${suffix}`);
        } else if (s.kind === "meal") {
          lines.push(`${fmtTime(s.start)} 🍽️ ${s.note}`);
        } else if (s.kind === "transit" && s.note?.startsWith("🚄")) {
          lines.push(`${fmtTime(s.start)} ${s.note}`);
        }
      }
    }
    lines.push("", "https://wadasiwak.github.io/japan-planner/");
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
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
        <button className={copied ? "selected" : "ghost"} onClick={copyText}>
          {copied ? "✓ 已複製" : "📋 複製"}
        </button>
        <button className={shared ? "selected" : "ghost"} onClick={share}>
          {shared ? "✓ 連結已複製" : "🔗 分享"}
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
            onClick={() => {
              setDayIdx(i);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {lockedDays.has(d.day) ? "🔒 " : ""}Day {d.day}
            {d.weekday != null ? `(${WEEKDAY_CHAR[d.weekday]})` : ""} ·{" "}
            {cityById(d.cityId)?.name}
          </button>
        ))}
      </div>

      <div className="row">
        <p className="muted small" style={{ margin: 0 }}>
          {cityById(day.cityId)?.emoji} {cityById(day.cityId)?.name} —{" "}
          {day.areas.join("、")} ·{" "}
          {day.slots.filter((s) => s.kind === "poi").length} 個點
          {day.slots.some((s) => s.kind === "cafe") ? " ·☕" : ""}
          {(() => {
            const t = cityById(day.cityId)?.transport;
            return t ? <span className="tag ok" style={{ marginLeft: 6 }}>{TRANSPORT_TAG[t]}</span> : null;
          })()}
        </p>
        <span className="spacer" />
        <button
          className={`ghost small${lockedDays.has(day.day) ? " selected" : ""}`}
          title="鎖住這天,重骰時不動它"
          onClick={() => toggleLock(day.day)}
        >
          {lockedDays.has(day.day) ? "🔒 已鎖定" : "🔓 鎖住這天"}
        </button>
      </div>

      <Suspense fallback={<div className="map-box" />}>
        <DayMap points={mapPoints} connect />
      </Suspense>

      {(() => {
        // 這是在此城市的最後一天 → 提醒買伴手禮
        const city = cityById(day.cityId);
        const isLastDayInCity =
          dayIdx === plan.days.length - 1 ||
          plan.days[dayIdx + 1].cityId !== day.cityId;
        if (!isLastDayInCity || !city?.souvenirs?.length) return null;
        return (
          <div className="card souvenirs">
            <strong>🎁 離開{city.name}前,伴手禮買了嗎?</strong>
            <ul>
              {city.souvenirs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        );
      })()}

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
            <div key={i} className={`slot slot-${slot.kind}`}>
              <span className="time">
                {fmtTime(slot.start)}
                <br />| {fmtTime(slot.end)}
              </span>
              <div className="body">
                <PoiCard
                  poi={poi}
                  extraTags={
                    slot.kind === "meal"
                      ? ["🍽️ 用餐"]
                      : slot.kind === "cafe"
                        ? ["☕ 歇腳"]
                        : []
                  }
                />
                <div className="slot-actions">
                  <button className="ghost small" onClick={() => doReplace(i)}>
                    🔁 換一個
                  </button>
                  <button className="ghost small" onClick={() => doRemove(i)}>
                    ✕ 不去
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
