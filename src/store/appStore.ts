import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Plan } from "../lib/planner";
import type { Pace, Category } from "../data/types";
import type { Lang } from "../i18n";

export interface SavedPlan {
  id: string;
  title: string; // e.g. "關西 5 天・輕鬆"
  createdAt: number;
  plan: Plan;
}

/** J-setup 表單進行中狀態(reload 還原)。 */
export interface JDraft {
  regionId: string | null;
  days: number;
  pace: Pace;
  startDate: string;
  prefs: Category[];
  excluded: string[];
  skipVisited: boolean;
}

/** P-suggest 設定進行中狀態(reload 還原;seed/排除是一次性的不存)。 */
export interface PDraft {
  cityId: string | null;
  hubId: string | null;
  hoursLeft: number;
  pace: Pace;
  rain: boolean;
  when: "now" | "tomorrow";
}

export type ScreenId = "home" | "j-setup" | "j-result" | "p-suggest" | "codex";

export const MAX_SAVED_PLANS = 20;

interface AppState {
  /** 去過的 POI id → 打卡時間。 */
  visited: Record<string, number>;
  /** ⭐收藏(wishlist)的 POI id → 加入時間;J 人排程同條件下優先排入。 */
  wishlist: Record<string, number>;
  savedPlans: SavedPlan[];
  lang: Lang;
  /** 目前畫面(reload 回到原畫面)。 */
  screen: ScreenId;
  /** 目前產出的行程(含 seed,在 plan.input 裡)。 */
  currentPlan: Plan | null;
  /** 重骰時鎖住的天(day 編號)。 */
  lockedDays: number[];
  jDraft: JDraft | null;
  pDraft: PDraft | null;
  /** 內容字典載入完成的訊號:元件訂閱它,語言包到位時原地重繪(不重掛)。不 persist。 */
  dictTick: number;
  toggleVisited: (poiId: string) => void;
  toggleWish: (poiId: string) => void;
  savePlan: (title: string, plan: Plan) => void;
  deletePlan: (id: string) => void;
  setLang: (lang: Lang) => void;
  setScreen: (screen: ScreenId) => void;
  setCurrentPlan: (plan: Plan | null) => void;
  setLockedDays: (days: number[]) => void;
  setJDraft: (draft: JDraft) => void;
  setPDraft: (draft: PDraft) => void;
  bumpDict: () => void;
}

/** persist 白名單(partialize 產物;dictTick 是實作 artifact,不進 localStorage)。 */
type PersistedState = Pick<
  AppState,
  | "visited"
  | "wishlist"
  | "savedPlans"
  | "lang"
  | "screen"
  | "currentPlan"
  | "lockedDays"
  | "jDraft"
  | "pDraft"
>;

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      visited: {},
      wishlist: {},
      savedPlans: [],
      lang: "zh" as Lang,
      screen: "home" as ScreenId,
      currentPlan: null,
      lockedDays: [],
      jDraft: null,
      pDraft: null,
      dictTick: 0,
      setLang: (lang) => set({ lang }),
      setScreen: (screen) => set({ screen }),
      setCurrentPlan: (currentPlan) => set({ currentPlan }),
      setLockedDays: (lockedDays) => set({ lockedDays }),
      setJDraft: (jDraft) => set({ jDraft }),
      setPDraft: (pDraft) => set({ pDraft }),
      bumpDict: () => set((s) => ({ dictTick: s.dictTick + 1 })),
      toggleVisited: (poiId) =>
        set((s) => {
          const visited = { ...s.visited };
          if (visited[poiId]) delete visited[poiId];
          else visited[poiId] = Date.now();
          return { visited };
        }),
      toggleWish: (poiId) =>
        set((s) => {
          const wishlist = { ...s.wishlist };
          if (wishlist[poiId]) delete wishlist[poiId];
          else wishlist[poiId] = Date.now();
          return { wishlist };
        }),
      savePlan: (title, plan) =>
        set((s) => ({
          savedPlans: [
            { id: `${Date.now()}-${plan.input.seed}`, title, createdAt: Date.now(), plan },
            ...s.savedPlans,
          ].slice(0, MAX_SAVED_PLANS),
        })),
      deletePlan: (id) =>
        set((s) => ({ savedPlans: s.savedPlans.filter((p) => p.id !== id) })),
    }),
    {
      name: "japan-planner",
      version: 1,
      partialize: (s): PersistedState => ({
        visited: s.visited,
        wishlist: s.wishlist,
        savedPlans: s.savedPlans,
        lang: s.lang,
        screen: s.screen,
        currentPlan: s.currentPlan,
        lockedDays: s.lockedDays,
        jDraft: s.jDraft,
        pDraft: s.pDraft,
      }),
      // v0(無 partialize 時代)→ v1:丟掉誤存的 dictTick,其餘照收;
      // 新欄位缺 key 時,zustand 淺合併會保留程式內的預設值。
      migrate: (persisted) => {
        const s = { ...(persisted as Record<string, unknown>) };
        delete s.dictTick;
        return s as unknown as PersistedState;
      },
    },
  ),
);
