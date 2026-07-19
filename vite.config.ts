import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Prepend the copyright notice to every JS chunk. Done in generateBundle
// with enforce: 'post' so it runs after minification — a plain `banner`
// option would get stripped by the minifier.
function copyrightBanner(): Plugin {
  const banner = '/*! © 2026 wadasiwak. All rights reserved. */\n'
  return {
    name: 'copyright-banner',
    enforce: 'post',
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk') chunk.code = banner + chunk.code
      }
    },
  }
}

// PWA service worker:build 完成後掃 dist 產 sw.js(precache 全部產物,
// 含 lazy 的 en/ja 字典與 DayMap chunk)。手寫、不用 vite-plugin-pwa:
// 零新依賴、relative base 下 GH Pages 子路徑直接可用,而且本來就要客製
// 「跨網域(地圖磚)不攔不快取」與 SKIP_WAITING 更新流程。
// 在 closeBundle 跑:此時 publicDir 已複製進 dist,掃目錄才拿得到 icon/manifest。
function pwaServiceWorker(): Plugin {
  const root = fileURLToPath(new URL('.', import.meta.url))
  const EXCLUDE = new Set(['sw.js', 'og-image.png']) // og 圖只給爬蟲,離線用不到
  return {
    name: 'pwa-sw',
    apply: 'build',
    enforce: 'post',
    closeBundle() {
      const dist = join(root, 'dist')
      const files: string[] = []
      const walk = (dir: string) => {
        for (const ent of readdirSync(dir, { withFileTypes: true })) {
          const p = join(dir, ent.name)
          if (ent.isDirectory()) walk(p)
          else if (!EXCLUDE.has(relative(dist, p))) files.push(relative(dist, p))
        }
      }
      walk(dist)
      files.sort()
      const hash = createHash('sha256')
      for (const f of files) hash.update(f).update(readFileSync(join(dist, f)))
      const sw = readFileSync(join(root, 'scripts/sw-template.js'), 'utf8')
        .replaceAll('__VERSION__', hash.digest('hex').slice(0, 12))
        .replaceAll('__PRECACHE__', JSON.stringify(files.map((f) => `./${f}`)))
      writeFileSync(join(dist, 'sw.js'), sw)
      console.log(`[pwa-sw] sw.js generated — ${files.length} files precached`)
    },
  }
}

export default defineConfig({
  plugins: [react(), copyrightBanner(), pwaServiceWorker()],
  // Relative base so the static build works at any path (GitHub Pages
  // serves it under /japan-planner/).
  base: './',
  server: { port: 5220 },
  preview: { port: 5220 },
})
