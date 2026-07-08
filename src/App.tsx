import { useEffect, useState } from "react";
import type { Plan } from "./lib/planner";
import { planFromHash } from "./lib/share";
import { ALL_POIS, REGIONS } from "./data";
import { JSetup } from "./components/JSetup";
import { JResult } from "./components/JResult";
import { PSuggest } from "./components/PSuggest";
import { Codex } from "./components/Codex";
import { useAppStore } from "./store/appStore";
import { t, LANGS, loadContent, setContent, type StringKey } from "./i18n";

type Screen =
  | { t: "home" }
  | { t: "j-setup" }
  | { t: "j-result"; plan: Plan }
  | { t: "p-suggest" }
  | { t: "codex" };

const TITLE_KEY: Record<Exclude<Screen["t"], "home">, StringKey> = {
  "j-setup": "title_jsetup",
  "j-result": "title_jresult",
  "p-suggest": "title_psuggest",
  codex: "title_codex",
};

export default function App() {
  // 分享連結:#p=... 直接開行程
  const [screen, setScreen] = useState<Screen>(() => {
    const shared = planFromHash();
    return shared ? { t: "j-result", plan: shared } : { t: "home" };
  });
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

  const ready = dictLang === lang;

  return (
    <div style={ready ? undefined : { opacity: 0.5 }}>
      <div className="lang-switch">
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

      {screen.t !== "home" && (
        <header className="app-header">
          <button className="back-btn ghost" onClick={() => setScreen({ t: "home" })}>
            ←
          </button>
          <h1>{t(TITLE_KEY[screen.t], lang)}</h1>
        </header>
      )}

      {screen.t === "home" && (
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
          <button className="mode-card mode-j" onClick={() => setScreen({ t: "j-setup" })}>
            <span className="mode-title">{t("mode_j", lang)}</span>
            <span className="mode-desc">{t("mode_j_desc", lang)}</span>
          </button>
          <button className="mode-card mode-p" onClick={() => setScreen({ t: "p-suggest" })}>
            <span className="mode-title">{t("mode_p", lang)}</span>
            <span className="mode-desc">{t("mode_p_desc", lang)}</span>
          </button>
          <button className="mode-card" onClick={() => setScreen({ t: "codex" })}>
            <span className="mode-title">{t("mode_codex", lang)}</span>
            <span className="mode-desc">
              {t("codex_stat", lang, planCount, visitedCount)}
            </span>
          </button>
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

      {screen.t === "j-setup" && (
        <JSetup onPlan={(plan) => setScreen({ t: "j-result", plan })} />
      )}
      {screen.t === "j-result" && (
        <JResult
          plan={screen.plan}
          onReplace={(plan) => setScreen({ t: "j-result", plan })}
        />
      )}
      {screen.t === "p-suggest" && <PSuggest />}
      {screen.t === "codex" && (
        <Codex onOpenPlan={(sp) => setScreen({ t: "j-result", plan: sp.plan })} />
      )}

      <footer className="footer">© 2026 wadasiwak. All rights reserved.</footer>
    </div>
  );
}
