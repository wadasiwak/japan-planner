// 天氣預報:Open-Meteo(免 API key、免註冊)。
// 行程有設定出發日、且日期落在未來 16 天預報範圍內才抓;
// 同座標同日結果快取在 sessionStorage,避免重複打 API;
// 抓不到(離線/失敗/超範圍)一律安靜略過,UI 整段隱藏不破版。
// (PWA 的 SW 對跨網域請求一律直通不快取,這裡自己管快取。)
import type { LatLng } from "../data/types";

export interface DayWeather {
  /** WMO weather code。 */
  code: number;
  /** 高/低溫(°C,已四捨五入)。 */
  max: number;
  min: number;
  /** 當日最大降雨機率(%)。 */
  rain: number;
}

/** 降雨機率 ≥ 這個值,該日顯示「可能下雨,室內點優先」提示。 */
export const RAIN_HINT_PROB = 60;

/** Open-Meteo 預報上限:今天起算 16 天。 */
const FORECAST_DAYS = 16;

/** WMO weather code → emoji(粗分類就夠日常看)。 */
export function weatherEmoji(code: number): string {
  if (code === 0) return "☀️";
  if (code <= 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 57) return "🌦️";
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return "🌧️";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "❄️";
  if (code >= 95) return "⛈️";
  return "🌤️";
}

const pad = (n: number): string => String(n).padStart(2, "0");

const fmtISO = (d: Date): string =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** ISO 日期(yyyy-mm-dd)加 n 天。 */
export function addDaysISO(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  return fmtISO(d);
}

const coordKey = (c: LatLng): string => `${c.lat.toFixed(2)},${c.lng.toFixed(2)}`;
const cacheKey = (c: LatLng, date: string): string => `wx:${coordKey(c)}:${date}`;

const readCache = (k: string): DayWeather | null => {
  try {
    const v = sessionStorage.getItem(k);
    return v ? (JSON.parse(v) as DayWeather) : null;
  } catch {
    return null;
  }
};

const writeCache = (k: string, w: DayWeather): void => {
  try {
    sessionStorage.setItem(k, JSON.stringify(w));
  } catch {
    /* 私密模式/容量滿:不快取也能跑 */
  }
};

export interface WeatherRequest {
  /** yyyy-mm-dd(當日所在城市的日期)。 */
  date: string;
  /** 該日所在城市座標。 */
  center: LatLng;
}

/**
 * 批次抓多天天氣:同座標的日期併成一段 start/end 一次抓,回 Map<date, DayWeather>。
 * (行程一天只在一個城市,date 當 key 不會撞。)
 */
export async function fetchDayWeathers(
  reqs: WeatherRequest[],
): Promise<Map<string, DayWeather>> {
  const out = new Map<string, DayWeather>();
  const today = fmtISO(new Date());
  const maxDate = addDaysISO(today, FORECAST_DAYS - 1);
  const pending = new Map<string, { center: LatLng; dates: string[] }>();
  for (const r of reqs) {
    if (r.date < today || r.date > maxDate) continue; // 超過預報範圍:不顯示
    const cached = readCache(cacheKey(r.center, r.date));
    if (cached) {
      out.set(r.date, cached);
      continue;
    }
    const g = coordKey(r.center);
    const grp = pending.get(g) ?? { center: r.center, dates: [] };
    grp.dates.push(r.date);
    pending.set(g, grp);
  }
  await Promise.all(
    [...pending.values()].map(async ({ center, dates }) => {
      const sorted = [...dates].sort();
      const url =
        "https://api.open-meteo.com/v1/forecast" +
        `?latitude=${center.lat.toFixed(4)}&longitude=${center.lng.toFixed(4)}` +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
        `&timezone=Asia%2FTokyo&start_date=${sorted[0]}&end_date=${sorted[sorted.length - 1]}`;
      try {
        const res = await fetch(url);
        if (!res.ok) return;
        const j = (await res.json()) as {
          daily?: {
            time?: string[];
            weather_code?: number[];
            temperature_2m_max?: number[];
            temperature_2m_min?: number[];
            precipitation_probability_max?: (number | null)[];
          };
        };
        (j.daily?.time ?? []).forEach((date, i) => {
          if (!dates.includes(date)) return;
          const w: DayWeather = {
            code: Number(j.daily?.weather_code?.[i] ?? 0),
            max: Math.round(Number(j.daily?.temperature_2m_max?.[i])),
            min: Math.round(Number(j.daily?.temperature_2m_min?.[i])),
            rain: Number(j.daily?.precipitation_probability_max?.[i] ?? 0),
          };
          if (!Number.isFinite(w.max) || !Number.isFinite(w.min)) return;
          out.set(date, w);
          writeCache(cacheKey(center, date), w);
        });
      } catch {
        /* 離線/失敗:安靜隱藏 */
      }
    }),
  );
  return out;
}
