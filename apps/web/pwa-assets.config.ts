import {
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

/**
 * Source for all generated PWA icons. The asset generator reads
 * `public/icon.svg`, produces favicon.ico, apple-touch-icon.png,
 * pwa-{64,192,512}.png, and the maskable variant; all written into
 * `public/` and referenced from the manifest in vite.config.ts.
 * Run with `pnpm pwa-assets`; outputs are committed so the deploy
 * doesn't depend on `sharp` being present in CI.
 */
export default defineConfig({
  preset: minimal2023Preset,
  images: ["public/icon.svg"],
});
