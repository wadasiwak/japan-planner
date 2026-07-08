import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Plan } from "../lib/planner";
import type { Lang } from "../i18n";

export interface SavedPlan {
  id: string;
  title: string; // e.g. "關西 5 天・輕鬆"
  createdAt: number;
  plan: Plan;
}

interface AppState {
  /** 去過的 POI id → 打卡時間。 */
  visited: Record<string, number>;
  savedPlans: SavedPlan[];
  lang: Lang;
  toggleVisited: (poiId: string) => void;
  savePlan: (title: string, plan: Plan) => void;
  deletePlan: (id: string) => void;
  setLang: (lang: Lang) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      visited: {},
      savedPlans: [],
      lang: "zh" as Lang,
      setLang: (lang) => set({ lang }),
      toggleVisited: (poiId) =>
        set((s) => {
          const visited = { ...s.visited };
          if (visited[poiId]) delete visited[poiId];
          else visited[poiId] = Date.now();
          return { visited };
        }),
      savePlan: (title, plan) =>
        set((s) => ({
          savedPlans: [
            { id: `${Date.now()}-${plan.input.seed}`, title, createdAt: Date.now(), plan },
            ...s.savedPlans,
          ].slice(0, 20),
        })),
      deletePlan: (id) =>
        set((s) => ({ savedPlans: s.savedPlans.filter((p) => p.id !== id) })),
    }),
    { name: "japan-planner" },
  ),
);
