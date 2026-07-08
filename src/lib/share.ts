import type { Plan, PlanSlot } from "./planner";

// 行程 → URL hash。slots 序列化成緊湊陣列(kind 用索引、note 只留自由覓食
// 標記),城際移動的說明在解碼時重建,編輯過的行程也能原樣分享。

const KINDS = ["poi", "meal", "cafe", "transit"] as const;

interface Packed {
  v: 1;
  i: Plan["input"];
  d: {
    c: string; // cityId
    w?: number; // weekday
    a: string[]; // areas
    s: [number, number, number, string?, string?][]; // [kindIdx,start,end,poiId?,note?]
  }[];
}

const b64encode = (s: string): string =>
  btoa(String.fromCharCode(...new TextEncoder().encode(s)))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");

const b64decode = (s: string): string => {
  const b = atob(s.replaceAll("-", "+").replaceAll("_", "/"));
  return new TextDecoder().decode(Uint8Array.from(b, (c) => c.charCodeAt(0)));
};

export function encodePlan(plan: Plan): string {
  const packed: Packed = {
    v: 1,
    i: plan.input,
    d: plan.days.map((d) => ({
      c: d.cityId,
      w: d.weekday,
      a: d.areas,
      s: d.slots.map((s) => {
        const out: Packed["d"][0]["s"][0] = [
          KINDS.indexOf(s.kind),
          s.start,
          s.end,
        ];
        if (s.poiId) out[3] = s.poiId;
        else if (s.note) out[4] = s.note;
        return out;
      }),
    })),
  };
  return b64encode(JSON.stringify(packed));
}

export function decodePlan(code: string): Plan | null {
  try {
    const packed = JSON.parse(b64decode(code)) as Packed;
    if (packed.v !== 1 || !packed.i || !Array.isArray(packed.d)) return null;
    return {
      input: packed.i,
      days: packed.d.map((d, i) => ({
        day: i + 1,
        cityId: d.c,
        weekday: d.w,
        areas: d.a ?? [],
        slots: d.s.map(([k, start, end, poiId, note]): PlanSlot => {
          const slot: PlanSlot = { kind: KINDS[k] ?? "poi", start, end };
          // JSON 陣列空洞會變 null,要濾掉才能和原行程完全一致
          if (poiId != null) slot.poiId = poiId;
          if (note != null) slot.note = note;
          return slot;
        }),
      })),
    };
  } catch {
    return null;
  }
}

export function planShareUrl(plan: Plan): string {
  return `${location.origin}${location.pathname}#p=${encodePlan(plan)}`;
}

export function planFromHash(): Plan | null {
  const m = location.hash.match(/^#p=([A-Za-z0-9_-]+)/);
  return m ? decodePlan(m[1]) : null;
}
