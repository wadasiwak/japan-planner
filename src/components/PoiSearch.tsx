import { useMemo, useState } from "react";
import type { POI } from "../data/types";
import { ALL_POIS, cityById } from "../data";
import { useAppStore } from "../store/appStore";
import { PoiCard } from "./PoiCard";
import { t, tCityName, poiSearchText } from "../i18n";

const MAX_RESULTS = 30;

/**
 * 全站 POI 即時搜尋:比對名稱(繁中/日文/已載入的字典譯名)、城市、分類。
 * 首頁與 Codex 共用;命中卡可看詳情(PoiCard)、打卡、⭐收藏。
 * 選取模式(onPick):J-result 手動加點用 —— 命中卡改顯示自訂動作鍵,
 * 並可用 excludeIds 濾掉已在行程中的點。
 */
export function PoiSearch({
  onPick,
  pickLabel,
  excludeIds,
}: {
  onPick?: (poi: POI) => void;
  pickLabel?: string;
  excludeIds?: Set<string>;
} = {}) {
  const [q, setQ] = useState("");
  const lang = useAppStore((s) => s.lang);
  const dictTick = useAppStore((s) => s.dictTick); // 字典載好後重算(涵蓋該語言)

  const hits = useMemo(() => {
    void dictTick; // 依賴字典狀態:載入後重算
    const query = q.trim().toLowerCase();
    if (!query) return null;
    return ALL_POIS.filter(
      (p) => !excludeIds?.has(p.id) && poiSearchText(p).includes(query),
    );
  }, [q, dictTick, excludeIds]);

  return (
    <>
      <input
        type="search"
        className="search-input"
        placeholder={t("search_placeholder", lang)}
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {hits && (
        <>
          <p className="muted small" style={{ margin: 0 }}>
            {hits.length === 0
              ? t("search_none", lang)
              : t("search_results", lang, hits.length)}
          </p>
          {hits.slice(0, MAX_RESULTS).map((p) => {
            const c = cityById(p.city);
            return (
              <PoiCard
                key={p.id}
                poi={p}
                showVisitToggle={!onPick}
                showWishToggle={!onPick}
                action={
                  onPick ? { label: pickLabel ?? "＋", onClick: () => onPick(p) } : undefined
                }
                extraTags={c ? [`${c.emoji} ${tCityName(c)}`] : []}
              />
            );
          })}
          {hits.length > MAX_RESULTS && (
            <p className="muted small" style={{ textAlign: "center" }}>
              {t("search_more", lang, hits.length - MAX_RESULTS)}
            </p>
          )}
        </>
      )}
    </>
  );
}
