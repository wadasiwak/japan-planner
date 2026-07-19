import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { LatLng } from "../data/types";
import { useAppStore } from "../store/appStore";
import { t } from "../i18n";

const MAP_STYLE = "https://tiles.openfreemap.org/styles/dark";

export interface MapPoint {
  center: LatLng;
  label: string;
  /** hub=出發點(橘)、poi=行程點(藍,顯示順序號)、food=餐(黃) */
  kind: "hub" | "poi" | "food";
  order?: number;
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

const KIND_BG = { hub: "#e8590c", poi: "#6aa8ff", food: "#e8b64c" } as const;

function markerEl(p: MapPoint): HTMLElement {
  const el = document.createElement("div");
  el.textContent = p.kind === "hub" ? "📍" : p.order != null ? String(p.order) : "•";
  el.title = p.label;
  Object.assign(el.style, {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    background: p.kind === "hub" ? "transparent" : KIND_BG[p.kind],
    color: "#0e1116",
    fontWeight: "800",
    fontSize: p.kind === "hub" ? "22px" : "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: p.kind === "hub" ? "none" : "2px solid #0e1116",
    boxShadow: "0 1px 6px rgba(0,0,0,0.5)",
  });
  return el;
}

/** 一張小地圖:標出點位,connect=true 時照 order 畫路線。 */
export function DayMap({ points, connect = false }: { points: MapPoint[]; connect?: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const lang = useAppStore((s) => s.lang);
  // 離線降級:地圖磚只有線上才有(SW 不快取),斷線時顯示訊息而不是破圖
  const [mapDown, setMapDown] = useState(
    typeof navigator !== "undefined" && !navigator.onLine,
  );

  useEffect(() => {
    const online = () => setMapDown(false); // 回到線上 → 重掛地圖
    const offline = () => setMapDown(true);
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    if (mapDown || !box || points.length === 0 || !hasWebGL()) return;

    const bounds = new maplibregl.LngLatBounds();
    for (const p of points) bounds.extend([p.center.lng, p.center.lat]);

    const map = new maplibregl.Map({
      container: box,
      style: MAP_STYLE,
      bounds,
      fitBoundsOptions: { padding: 40, maxZoom: 14 },
      attributionControl: { compact: true },
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }));

    // style 還沒載成功前就出錯(通常是斷網抓不到 style/磚)→ 切降級訊息
    let styleLoaded = false;
    map.on("load", () => {
      styleLoaded = true;
    });
    map.on("error", () => {
      if (!styleLoaded && !map.isStyleLoaded()) setMapDown(true);
    });

    const markers = points.map((p) =>
      new maplibregl.Marker({ element: markerEl(p) })
        .setLngLat([p.center.lng, p.center.lat])
        .setPopup(new maplibregl.Popup({ closeButton: false }).setText(p.label))
        .addTo(map),
    );

    if (connect) {
      map.on("load", () => {
        const ordered = points
          .filter((p) => p.kind !== "hub")
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        map.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: ordered.map((p) => [p.center.lng, p.center.lat]),
            },
          },
        });
        map.addLayer({
          id: "route",
          type: "line",
          source: "route",
          paint: {
            "line-color": "#6aa8ff",
            "line-width": 2.5,
            "line-dasharray": [1, 1.5],
            "line-opacity": 0.8,
          },
        });
      });
    }

    return () => {
      for (const m of markers) m.remove();
      map.remove();
    };
  }, [points, connect, mapDown]);

  if (!points.length) return null;
  if (mapDown)
    return <div className="map-box map-box-down">{t("map_offline", lang)}</div>;
  return <div className="map-box" ref={boxRef} />;
}
