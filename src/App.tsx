import { useState } from "react";
import type { Plan } from "./lib/planner";
import { planFromHash } from "./lib/share";
import { ALL_POIS, REGIONS } from "./data";
import { JSetup } from "./components/JSetup";
import { JResult } from "./components/JResult";
import { PSuggest } from "./components/PSuggest";
import { Codex } from "./components/Codex";
import { useAppStore } from "./store/appStore";

type Screen =
  | { t: "home" }
  | { t: "j-setup" }
  | { t: "j-result"; plan: Plan }
  | { t: "p-suggest" }
  | { t: "codex" };

const TITLES: Record<Screen["t"], string> = {
  home: "日本旅伴JP 🗾",
  "j-setup": "🗓️ J人規劃",
  "j-result": "🗓️ 你的行程",
  "p-suggest": "🎲 P人隨走",
  codex: "🧳 我的收藏",
};

export default function App() {
  // 分享連結:#p=... 直接開行程
  const [screen, setScreen] = useState<Screen>(() => {
    const shared = planFromHash();
    return shared ? { t: "j-result", plan: shared } : { t: "home" };
  });
  const visitedCount = useAppStore((s) => Object.keys(s.visited).length);
  const planCount = useAppStore((s) => s.savedPlans.length);

  return (
    <>
      {screen.t !== "home" && (
        <header className="app-header">
          <button className="back-btn ghost" onClick={() => setScreen({ t: "home" })}>
            ←
          </button>
          <h1>{TITLES[screen.t]}</h1>
        </header>
      )}

      {screen.t === "home" && (
        <div className="screen">
          <div className="hero">
            <h1 className="brand">
              日本旅伴
              <span className="brand-jp">
                <span className="jj">J</span>
                <span className="pp">P</span>
              </span>
              <span className="brand-flag">🗾</span>
            </h1>
            <p className="slogan">
              <span className="chip-j">J 人排好排滿</span>
              <span className="chip-p">P 人說走就走</span>
            </p>
          </div>
          <button
            className="mode-card mode-j"
            onClick={() => setScreen({ t: "j-setup" })}
          >
            <span className="mode-title">🗓️ J人規劃</span>
            <span className="mode-desc">
              選地區、天數、節奏,一鍵排出逐日行程。出發前就把每天安排得明明白白。
            </span>
          </button>
          <button
            className="mode-card mode-p"
            onClick={() => setScreen({ t: "p-suggest" })}
          >
            <span className="mode-title">🎲 P人隨走</span>
            <span className="mode-desc">
              「每天想明天去哪好累」—— 告訴我你現在在哪,馬上給你等等可以去的地方。
            </span>
          </button>
          <button className="mode-card" onClick={() => setScreen({ t: "codex" })}>
            <span className="mode-title">🧳 我的收藏</span>
            <span className="mode-desc">
              存好的行程 {planCount} 份 · 打卡足跡 {visitedCount} 處
            </span>
          </button>
          <div className="stats-row">
            <span className="stat-chip">{REGIONS.length} 大地區</span>
            <span className="stat-chip">{ALL_POIS.length} 個景點</span>
            <span className="stat-chip">
              {ALL_POIS.filter((p) => p.category === "food" || p.category === "cafe").length}{" "}
              家餐廳咖啡廳
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
    </>
  );
}
