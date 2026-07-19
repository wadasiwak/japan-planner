import type { Plan, PlanSlot } from "./planner";
import { poiById, cityById } from "../data";
import { tPoiName, tPoiBlurb, tPoiTips, tSlotInfo, type Lang } from "../i18n";

// 行程 → .ics(iCalendar)。每個有時段的 slot 產一個 VEVENT:
// 景點/用餐/歇腳 + 城際移動(市內跨分區的小移動略過,行事曆看不需要)。
// 時間用 floating local time(不帶時區):人在日本看手機行事曆就是當地牆鐘時間。
// 有出發日用實際日期;沒有就 Day 1 = 今天起算(匯出鍵的 tooltip 有說明)。

const pad = (n: number): string => String(n).padStart(2, "0");

const fmtDate = (d: Date): string =>
  `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;

/** 當天日期 + 從 00:00 起算的分鐘 → YYYYMMDDTHHMMSS(超過午夜順延到隔天)。 */
const fmtDT = (day: Date, minutes: number): string => {
  const d = new Date(day);
  d.setDate(d.getDate() + Math.floor(minutes / (24 * 60)));
  const m = minutes % (24 * 60);
  return `${fmtDate(d)}T${pad(Math.floor(m / 60))}${pad(m % 60)}00`;
};

/** TEXT 值跳脫(RFC 5545)。 */
const esc = (s: string): string =>
  s
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replaceAll("\n", "\\n");

/** 行長折疊:一行 ≤ 75 octets,續行開頭一個空白(UTF-8 不能切在字元中間)。 */
function fold(line: string): string[] {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 74) return [line];
  const out: string[] = [];
  let cur = "";
  let curBytes = 0;
  for (const ch of line) {
    const b = enc.encode(ch).length;
    if (curBytes + b > 73) {
      out.push(cur);
      cur = "";
      curBytes = 0;
    }
    cur += ch;
    curBytes += b;
  }
  out.push(cur);
  return out.map((l, i) => (i === 0 ? l : ` ${l}`));
}

/** slot → VEVENT 的摘要/說明/地點;不值得進行事曆的回 null。 */
function slotEvent(
  slot: PlanSlot,
  lang: Lang,
): { summary: string; description?: string; location?: string } | null {
  const poi = slot.poiId ? poiById(slot.poiId) : undefined;
  if (poi) {
    const suffix = slot.kind === "meal" ? " 🍽️" : slot.kind === "cafe" ? " ☕" : "";
    const city = cityById(poi.city);
    const tips = tPoiTips(poi);
    return {
      summary: `${tPoiName(poi)}${suffix}`,
      description: tips ? `${tPoiBlurb(poi)}\n💡 ${tips}` : tPoiBlurb(poi),
      // 日文原名+城市,貼去 Google Maps 就能定位
      location: `${poi.nameJa}${city ? `, ${city.nameJa}` : ""}`,
    };
  }
  if (slot.kind === "meal" && slot.info)
    return { summary: `🍽️ ${tSlotInfo(slot.info, lang)}` };
  if (slot.kind === "transit" && slot.info?.t === "ic")
    return { summary: tSlotInfo(slot.info, lang) };
  return null; // 市內跨分區移動等小段落不進行事曆
}

export function planToIcs(plan: Plan, lang: Lang): string {
  const base = plan.input.startDate
    ? new Date(`${plan.input.startDate}T00:00:00`)
    : new Date(new Date().setHours(0, 0, 0, 0));
  const stamp = `${new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "")}`;

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//japan-planner//Japan Buddy JP//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  for (const day of plan.days) {
    const date = new Date(base);
    date.setDate(base.getDate() + day.day - 1);
    day.slots.forEach((slot, i) => {
      const ev = slotEvent(slot, lang);
      if (!ev) return;
      lines.push(
        "BEGIN:VEVENT",
        `UID:${plan.input.seed}-d${day.day}-s${i}@japan-planner`,
        `DTSTAMP:${stamp}`,
        `DTSTART:${fmtDT(date, slot.start)}`,
        `DTEND:${fmtDT(date, slot.end)}`,
        `SUMMARY:${esc(`Day ${day.day} ${ev.summary}`)}`,
      );
      if (ev.description) lines.push(`DESCRIPTION:${esc(ev.description)}`);
      if (ev.location) lines.push(`LOCATION:${esc(ev.location)}`);
      lines.push("END:VEVENT");
    });
  }
  lines.push("END:VCALENDAR");
  return lines.flatMap(fold).join("\r\n") + "\r\n";
}

/** 觸發下載。 */
export function downloadIcs(plan: Plan, lang: Lang): void {
  const blob = new Blob([planToIcs(plan, lang)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "japan-planner.ics";
  a.click();
  URL.revokeObjectURL(url);
}
