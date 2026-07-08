# 日本旅圖 🗾 japan-planner

日本自由行的兩種打開方式 —— 看你今天是 J 人還是 P 人。

- **🗓️ J人規劃**:選地區、天數、節奏(🍵 輕鬆 / 🥾 行軍)、出發日(自動避開公休),
  一鍵排出逐日行程:分區聚類連走、名店午晚餐自動插槽、輕鬆模式下午 ☕ 咖啡歇腳、
  換城市日開頭有 🚄 城際移動時段、當日路線地圖、📋 一鍵複製貼 LINE。不滿意就 🎲 重骰。
- **🎲 P人隨走**:「每天想明天去哪好累」—— 選你現在在哪個車站/地標、還想玩幾小時,
  馬上給你等等可以去的地方。支援 🌧️ 雨天只推室內、打卡收集足跡、🗺️ 一鍵導航。

## 內容

830 個景點 / 55 個城市 / 9 大地區(東京・關東近郊、關西、北海道、九州、沖繩、中部北陸、中國地方、四國、東北),含約 270 家餐廳咖啡廳、55 份伴手禮清單與交通建議(自駕/大眾運輸)。每個景點含日文原名
(方便對照 Google Maps)、輕鬆/行軍兩種停留時間、適合時段、固定公休、
雨天備案標記與實用 tips。

純靜態站,無後端、無追蹤個資;行程與足跡存在瀏覽器 localStorage。

## 開發

```bash
npm install
npm run dev      # localhost:5220
npm run check    # 內容驗證器(座標/bbox/id/停留時間/公休)
npm run check -- src/data/cities/osaka.ts   # 單檔驗證
npm run build    # tsc + vite build
npm run e2e      # playwright 冒煙:J/P 兩條完整流程
```

新增城市:寫 `src/data/cities/<id>.ts`(自包含,exports `city` 與 `pois`),
掛進 `src/data/index.ts` 的 `CITY_MODULES` 與 `src/data/regions.ts`,跑 `npm run check`。

## 架構

- React 19 + TypeScript + Vite,Zustand(localStorage persist)
- `src/lib/planner.ts` — J人排程:城市天數分配(保底+權重)、分區貪婪填時間軸
- `src/lib/suggest.ts` — P人建議:距離+時段+公休+雨天過濾,Gumbel 擾動排序
- 地圖 maplibre-gl + OpenFreeMap(lazy chunk)

---

© 2026 wadasiwak. All rights reserved.
