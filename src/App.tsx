import { useEffect, useState } from "react";
import type { Plan } from "./lib/planner";
import { planFromHash } from "./lib/share";
import { ALL_POIS, REGIONS } from "./data";
import { JSetup } from "./components/JSetup";
import { JResult } from "./components/JResult";
import { PSuggest } from "./components/PSuggest";
import { Codex } from "./components/Codex";
import { PoiSearch } from "./components/PoiSearch";
import { useAppStore, type ScreenId } from "./store/appStore";
import { t, LANGS, loadContent, setContent, type StringKey } from "./i18n";

const TITLE_KEY: Record<Exclude<ScreenId, "home">, StringKey> = {
  "j-setup": "title_jsetup",
  "j-result": "title_jresult",
  "p-suggest": "title_psuggest",
  codex: "title_codex",
};

// 分享連結:#p=... 直接開行程(模組載入時處理一次,store 已同步 hydrate)
{
  const shared = planFromHash();
  if (shared) {
    const st = useAppStore.getState();
    st.setCurrentPlan(shared);
    st.setLockedDays([]);
    st.setScreen("j-result");
  }
}

export default function App() {
  // 畫面與目前行程都在 store(persist):reload 回到原畫面並還原行程
  const storedScreen = useAppStore((s) => s.screen);
  const plan = useAppStore((s) => s.currentPlan);
  const setScreen = useAppStore((s) => s.setScreen);
  const setCurrentPlan = useAppStore((s) => s.setCurrentPlan);
  const setLockedDays = useAppStore((s) => s.setLockedDays);
  const screen: ScreenId =
    storedScreen === "j-result" && !plan ? "home" : storedScreen;
  const visitedCount = useAppStore((s) => Object.keys(s.visited).length);
  const planCount = useAppStore((s) => s.savedPlans.length);
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  const bumpDict = useAppStore((s) => s.bumpDict);
  // 內容字典載好後 bump 訊號讓元件原地重繪(不重掛,畫面狀態保留)
  const [dictLang, setDictLang] = useState<string>("zh");

  useEffect(() => {
    let alive = true;
    document.documentElement.lang =
      lang === "zh" ? "zh-Hant" : lang === "ja" ? "ja" : "en";
    if (lang === "zh") {
      setContent("zh", null);
      setDictLang("zh");
      bumpDict();
      return;
    }
    loadContent(lang).then((dict) => {
      if (!alive) return;
      setContent(lang, dict);
      setDictLang(lang);
      bumpDict();
    });
    return () => {
      alive = false;
    };
  }, [lang, bumpDict]);

  // 切換畫面回到頂端(設定頁捲到底按「排行程」,結果頁要從 Day 1 開始讀);
  // 只看 screen:重骰/換一個仍停在原位
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const ready = dictLang === lang;

  /** 開新行程(J 排出/打開存檔):換行程時清掉舊的鎖日。 */
  const openPlan = (p: Plan) => {
    setCurrentPlan(p);
    setLockedDays([]);
    setScreen("j-result");
  };

  return (
    <div>
      <div className="lang-switch">
        {/* 語言包 lazy 載入中:不擋操作的局部指示(內容先以繁中顯示,載好原地換) */}
        {!ready && <span className="lang-loading">{t("lang_loading", lang)}</span>}
        {LANGS.map((l) => (
          <button
            key={l.id}
            className={`ghost small${lang === l.id ? " selected" : ""}`}
            onClick={() => setLang(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      {screen !== "home" && (
        <header className="app-header">
          <button className="back-btn ghost" onClick={() => setScreen("home")}>
            ←
          </button>
          <h1>{t(TITLE_KEY[screen], lang)}</h1>
        </header>
      )}

      {screen === "home" && (
        <div className="screen">
          <div className="hero">
            <h1 className="brand">
              {t("brand", lang)}
              <span className="brand-jp">
                <span className="jj">J</span>
                <span className="pp">P</span>
              </span>
              <span className="brand-flag">🗾</span>
            </h1>
            <p className="slogan">
              <span className="chip-j">{t("slogan_j", lang)}</span>
              <span className="chip-p">{t("slogan_p", lang)}</span>
            </p>
          </div>
          <button className="mode-card mode-j" onClick={() => setScreen("j-setup")}>
            <span className="mode-title">{t("mode_j", lang)}</span>
            <span className="mode-desc">{t("mode_j_desc", lang)}</span>
          </button>
          <button className="mode-card mode-p" onClick={() => setScreen("p-suggest")}>
            <span className="mode-title">{t("mode_p", lang)}</span>
            <span className="mode-desc">{t("mode_p_desc", lang)}</span>
          </button>
          <button className="mode-card" onClick={() => setScreen("codex")}>
            <span className="mode-title">{t("mode_codex", lang)}</span>
            <span className="mode-desc">
              {t("codex_stat", lang, planCount, visitedCount)}
            </span>
          </button>
          <PoiSearch />
          <div className="stats-row">
            <span className="stat-chip">{t("stat_regions", lang, REGIONS.length)}</span>
            <span className="stat-chip">{t("stat_pois", lang, ALL_POIS.length)}</span>
            <span className="stat-chip">
              {t(
                "stat_food",
                lang,
                ALL_POIS.filter((p) => p.category === "food" || p.category === "cafe")
                  .length,
              )}
            </span>
          </div>
        </div>
      )}

      {screen === "j-setup" && <JSetup onPlan={openPlan} />}
      {screen === "j-result" && plan && (
        <JResult plan={plan} onReplace={(p) => setCurrentPlan(p)} />
      )}
      {screen === "p-suggest" && <PSuggest />}
      {screen === "codex" && <Codex onOpenPlan={(sp) => openPlan(sp.plan)} />}

      <footer className="footer">© 2026 wadasiwak. All rights reserved.</footer>
    </div>
  );
}
