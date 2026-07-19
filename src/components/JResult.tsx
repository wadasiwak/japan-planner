import { lazy, Suspense, useMemo, useState } from "react";
import { cityById, poiById, regionById } from "../data";
import {
  fmtTime,
  removeSlot,
  replaceSlot,
  rerollUnlocked,
  type Plan,
  type PlanSlot,
} from "../lib/planner";
import { planShareUrl } from "../lib/share";
import { downloadIcs } from "../lib/ics";
import { matchPasses } from "../data/passes";
import { MAX_SAVED_PLANS, useAppStore } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import type { MapPoint } from "./DayMap";
import {
  t,
  tArea,
  tCityName,
  tPoiBlurb,
  tPoiName,
  tPoiTips,
  tRegionName,
  tSlotInfo,
  tSouvenirs,
  WEEKDAY_BY_LANG,
  type Lang,
} from "../i18n";

// maplibre 很肥,地圖元件延遲載入,首屏不用扛
const DayMap = lazy(() =>
  import("./DayMap").then((m) => ({ default: m.DayMap })),
);

/** 動態時段文字:新版走結構化 info,舊分享連結 fallback note 原文。 */
const slotText = (slot: PlanSlot, lang: Lang): string =>
  slot.info ? tSlotInfo(slot.info, lang) : (slot.note ?? "");

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
  // 鎖日狀態存 store(persist),reload 後跟行程一起還原
  const lockedArr = useAppStore((s) => s.lockedDays);
  const setLockedArr = useAppStore((s) => s.setLockedDays);
  const lockedDays = useMemo(() => new Set(lockedArr), [lockedArr]);
  const savedPlans = useAppStore((s) => s.savedPlans);
  const lang = useAppStore((s) => s.lang);
  useAppStore((s) => s.dictTick); // 語言包載入完成時原地重繪
  const WD = WEEKDAY_BY_LANG[lang];

  const dirty = () => {
    setSaved(false);
    setCopied(false);
    setShared(false);
  };
  const savePlan = useAppStore((s) => s.savePlan);
  const region = regionById(plan.input.regionId);
  const day = plan.days[dayIdx];
  const title = t(
    "title_days",
    lang,
    region ? tRegionName(region) : "?",
    plan.input.days,
    t(plan.input.pace === "relaxed" ? "pace_label_relaxed" : "pace_label_march", lang),
  );

  const mapPoints = useMemo<MapPoint[]>(() => {
    if (!plan.days[dayIdx]) return [];
    let order = 0;
    return plan.days[dayIdx].slots
      .filter((s) => s.poiId)
      .map((s) => {
        const p = poiById(s.poiId!)!;
        return {
          center: p.center,
          label: tPoiName(p),
          kind: (s.kind === "meal" ? "food" : "poi") as MapPoint["kind"],
          order: ++order,
        };
      });
  }, [plan, dayIdx, lang]);

  const reroll = () => {
    dirty();
    onReplace(rerollUnlocked(plan, lockedDays, Math.floor(Math.random() * 1e9)));
  };

  const toggleLock = (dayNo: number) => {
    const next = new Set(lockedDays);
    if (next.has(dayNo)) next.delete(dayNo);
    else next.add(dayNo);
    setLockedArr([...next]);
  };

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

  const [shareOpen, setShareOpen] = useState(false);

  const promoText = () => t("share_promo", lang, title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(planShareUrl(plan));
    setShared(true);
    setShareOpen(false);
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ text: promoText(), url: planShareUrl(plan) });
    } catch {
      /* 用戶取消 */
    }
    setShareOpen(false);
  };

  const openIntent = (make: (text: string, url: string) => string) => {
    window.open(make(promoText(), planShareUrl(plan)), "_blank", "noopener");
    setShareOpen(false);
  };

  const INTENTS: { label: string; make: (text: string, url: string) => string }[] = [
    {
      label: "LINE",
      make: (text, url) =>
        `https://line.me/R/share?text=${encodeURIComponent(`${text}\n${url}`)}`,
    },
    {
      label: "Facebook",
      make: (text, url) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
    },
    {
      label: "X",
      make: (text, url) =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "Threads",
      make: (text, url) =>
        `https://www.threads.net/intent/post?text=${encodeURIComponent(`${text}\n${url}`)}`,
    },
  ];

  // 全程行程轉純文字,貼 LINE 給旅伴用
  const copyText = async () => {
    const lines: string[] = [`【${title}】${t("brand", lang)}JP 🗾`];
    for (const d of plan.days) {
      const wd = d.weekday != null ? `(${WD[d.weekday]})` : "";
      const city = cityById(d.cityId);
      lines.push(
        "",
        `Day ${d.day}${wd} ${city ? tCityName(city) : ""} — ${d.areas
          .map((a) => tArea(d.cityId, a))
          .join("、")}`,
      );
      for (const s of d.slots) {
        const poi = s.poiId ? poiById(s.poiId) : undefined;
        if (poi) {
          const suffix = s.kind === "meal" ? " 🍽️" : s.kind === "cafe" ? " ☕" : "";
          const ja = lang === "ja" ? "" : `(${poi.nameJa})`;
          lines.push(`${fmtTime(s.start)} ${tPoiName(poi)}${ja}${suffix}`);
        } else if (s.kind === "meal") {
          lines.push(`${fmtTime(s.start)} 🍽️ ${slotText(s, lang)}`);
        } else if (s.kind === "transit" && (s.info?.t === "ic" || s.note?.startsWith("🚄"))) {
          lines.push(`${fmtTime(s.start)} ${slotText(s, lang)}`);
        }
      }
    }
    lines.push("", "https://wadasiwak.github.io/japan-planner/");
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
  };

  if (!day) {
    return <div className="empty">{t("region_preparing", lang)}</div>;
  }

  const dayCity = cityById(day.cityId);

  return (
    <div className="screen">
      {/* 工具列鍵多(重骰/複製/分享/PDF/行事曆/存),窄螢幕要能換行 */}
      <div className="row wrap">
        <strong>{title}</strong>
        <span className="spacer" />
        <button className="ghost" onClick={reroll}>
          {t("reroll", lang)}
        </button>
        <button className={copied ? "selected" : "ghost"} onClick={copyText}>
          {copied ? t("copied", lang) : t("copy", lang)}
        </button>
        <button
          className={shared ? "selected" : "ghost"}
          onClick={() => setShareOpen((o) => !o)}
        >
          {shared ? t("shared", lang) : t("share", lang)}
        </button>
        <button className="ghost" title={t("pdf_hint", lang)} onClick={() => window.print()}>
          {t("download_pdf", lang)}
        </button>
        <button
          className="ghost"
          title={t("ics_hint", lang)}
          onClick={() => downloadIcs(plan, lang)}
        >
          {t("ics_export", lang)}
        </button>
        <button
          className={saved ? "selected" : ""}
          onClick={() => {
            // 存滿上限時明確提示會丟最舊的一份
            if (
              savedPlans.length >= MAX_SAVED_PLANS &&
              !window.confirm(t("save_limit_confirm", lang, MAX_SAVED_PLANS))
            )
              return;
            savePlan(title, plan);
            setSaved(true);
          }}
        >
          {saved ? t("saved", lang) : t("save", lang)}
        </button>
      </div>

      {shareOpen && (
        <div className="share-menu">
          {"share" in navigator && (
            <button className="ghost small" onClick={nativeShare}>
              {t("share_native", lang)}
            </button>
          )}
          {INTENTS.map((it) => (
            <button
              key={it.label}
              className="ghost small"
              onClick={() => openIntent(it.make)}
            >
              {it.label}
            </button>
          ))}
          <button className="ghost small" onClick={copyLink}>
            {t("copy_link", lang)}
          </button>
        </div>
      )}

      {(() => {
        // 交通票券建議:依這趟去的城市/城際段數觸發
        const cityIds = [...new Set(plan.days.map((d) => d.cityId))];
        const legs = plan.days.reduce(
          (s, d) => s + d.slots.filter((x) => x.info?.t === "ic").length,
          0,
        );
        const passes = matchPasses({
          regionId: plan.input.regionId,
          cityIds,
          intercityLegs: legs,
        });
        if (!passes.length) return null;
        return (
          <details className="card pass-card" open>
            <summary>{t("pass_head", lang)}</summary>
            {passes.map((p) => (
              <div key={p.id} className="pass-item">
                <strong>{p.name[lang]}</strong>
                <span className="tag ok">{p.price}</span>
                <p className="muted small">{p.desc[lang]}</p>
              </div>
            ))}
            <p className="muted small pass-note">{t("pass_note", lang)}</p>
          </details>
        );
      })()}

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
            {d.weekday != null ? `(${WD[d.weekday]})` : ""} ·{" "}
            {(() => {
              const c = cityById(d.cityId);
              return c ? tCityName(c) : d.cityId;
            })()}
          </button>
        ))}
      </div>

      <div className="row">
        <p className="muted small" style={{ margin: 0 }}>
          {dayCity?.emoji} {dayCity ? tCityName(dayCity) : ""} —{" "}
          {day.areas.map((a) => tArea(day.cityId, a)).join("、")} ·{" "}
          {t("n_points", lang, day.slots.filter((s) => s.kind === "poi").length)}
          {day.slots.some((s) => s.kind === "cafe") ? " ·☕" : ""}
          {dayCity?.transport && (
            <span className="tag ok" style={{ marginLeft: 6 }}>
              {t(`transport_${dayCity.transport}`, lang)}
            </span>
          )}
        </p>
        <span className="spacer" />
        <button
          className={`ghost small${lockedDays.has(day.day) ? " selected" : ""}`}
          onClick={() => toggleLock(day.day)}
        >
          {lockedDays.has(day.day) ? t("locked_day", lang) : t("lock_day", lang)}
        </button>
      </div>

      <Suspense fallback={<div className="map-box" />}>
        <DayMap points={mapPoints} connect />
      </Suspense>

      {(() => {
        // 這是在此城市的最後一天 → 提醒買伴手禮
        const isLastDayInCity =
          dayIdx === plan.days.length - 1 ||
          plan.days[dayIdx + 1].cityId !== day.cityId;
        const souvenirs = dayCity ? tSouvenirs(dayCity) : undefined;
        if (!isLastDayInCity || !dayCity || !souvenirs?.length) return null;
        return (
          <div className="card souvenirs">
            <strong>{t("souvenir_head", lang, tCityName(dayCity))}</strong>
            <ul>
              {souvenirs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        );
      })()}

      {day.slots.length === 0 && <div className="empty">{t("empty_day", lang)}</div>}

      {/* 列印/PDF 專用:全部天數攤平,螢幕上隱藏(見 @media print) */}
      <div className="print-view">
        <h1>
          {title} — {t("brand", lang)}JP 🗾
        </h1>
        {plan.days.map((d, di) => {
          const c = cityById(d.cityId);
          const isLastInCity =
            di === plan.days.length - 1 || plan.days[di + 1].cityId !== d.cityId;
          const souvenirs = c && isLastInCity ? tSouvenirs(c) : undefined;
          return (
            <section key={d.day} className="print-day">
              <h2>
                Day {d.day}
                {d.weekday != null ? `(${WD[d.weekday]})` : ""} ·{" "}
                {c ? tCityName(c) : ""} —{" "}
                {d.areas.map((a) => tArea(d.cityId, a)).join("、")}
              </h2>
              {d.slots.map((s, i) => {
                const poi = s.poiId ? poiById(s.poiId) : undefined;
                if (!poi) {
                  const txt = slotText(s, lang);
                  return txt ? (
                    <p key={i} className="print-transit">
                      {fmtTime(s.start)} {s.kind === "meal" ? "🍽️ " : "🚃 "}
                      {txt}
                    </p>
                  ) : null;
                }
                const tips = tPoiTips(poi);
                return (
                  <div key={i} className="print-poi">
                    <p className="print-poi-head">
                      <strong>
                        {fmtTime(s.start)}–{fmtTime(s.end)} {tPoiName(poi)}
                      </strong>{" "}
                      {lang !== "ja" && <span>({poi.nameJa})</span>}
                      {s.kind === "meal" ? " 🍽️" : s.kind === "cafe" ? " ☕" : ""}
                    </p>
                    <p className="print-poi-blurb">{tPoiBlurb(poi)}</p>
                    {tips && <p className="print-poi-tips">💡 {tips}</p>}
                  </div>
                );
              })}
              {souvenirs && souvenirs.length > 0 && (
                <p className="print-souvenirs">
                  🎁 {souvenirs.join("、")}
                </p>
              )}
            </section>
          );
        })}
        <p className="print-footer">https://wadasiwak.github.io/japan-planner/</p>
      </div>

      <div className="timeline">
        {day.slots.map((slot, i) => {
          const poi = slot.poiId ? poiById(slot.poiId) : undefined;
          if (slot.kind === "transit" || (slot.kind === "meal" && !poi)) {
            return (
              <div
                key={i}
                className={`slot ${slot.kind === "transit" ? "transit" : "meal-free"}`}
              >
                <span className="time">{fmtTime(slot.start)}</span>
                <div className="body">
                  {slot.kind === "transit" ? "🚃 " : "🍽️ "}
                  {slotText(slot, lang)}
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
                      ? [t("tag_meal", lang)]
                      : slot.kind === "cafe"
                        ? [t("tag_cafe", lang)]
                        : []
                  }
                />
                <div className="slot-actions">
                  <button className="ghost small" onClick={() => doReplace(i)}>
                    {t("swap", lang)}
                  </button>
                  <button className="ghost small" onClick={() => doRemove(i)}>
                    {t("drop", lang)}
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
