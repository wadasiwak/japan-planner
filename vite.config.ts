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

export default defineConfig({
  plugins: [react(), copyrightBanner()],
  // Relative base so the static build works at any path (GitHub Pages
  // serves it under /japan-planner/).
  base: './',
  server: { port: 5220 },
  preview: { port: 5220 },
})
