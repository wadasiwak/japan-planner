import type { LatLng } from "../data/types";

/** Great-circle distance in km. */
export function haversineKm(a: LatLng, b: LatLng): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const la = (a.lat * Math.PI) / 180;
  const lb = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** 粗略步行+電車移動時間(分):2km 內當步行,再遠當搭車。 */
export function transitMinutes(km: number): number {
  if (km <= 0.8) return 10;
  if (km <= 2) return Math.round(km * 14);
  // 電車:進出站緩衝 15 分 + 平均時速 30km
  return Math.round(15 + km * 2);
}
