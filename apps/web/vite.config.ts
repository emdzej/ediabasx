import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    svelte(),
    // PWA — generates a Web App Manifest, registers a service worker
    // that precaches the build output, and gives users an "install"
    // affordance on Chromium / Edge. The SW is regenerated on every
    // build, scoped to "/" (the deploy root at
    // ediabasx.bimmerz.app).
    //
    // `registerType: "autoUpdate"` means a new build's SW silently
    // activates after the next reload — no user-facing refresh
    // prompt. Swap to `"prompt"` if we ever want a user-controlled
    // refresh.
    //
    // `maximumFileSizeToCacheInBytes` is bumped because the
    // ediabasx-web bundle is non-trivial; Workbox's default 2 MB
    // cap would refuse to precache once we grow.
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "icon.svg",
        "favicon.ico",
        "apple-touch-icon-180x180.png",
      ],
      manifest: {
        name: "EdiabasX",
        short_name: "EdiabasX",
        description:
          "Browser SPA for EdiabasX — parse BMW SGBD files, configure interfaces, run jobs against a live ECU via Web Serial.",
        // Match the in-app accent cyan (#06b6d4) so the splash
        // screen and Android theme bar pick up the brand colour.
        theme_color: "#06b6d4",
        background_color: "#09090b",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          { src: "pwa-64x64.png", sizes: "64x64", type: "image/png" },
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          { src: "icon.svg", sizes: "any", type: "image/svg+xml" },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        // SPA fallback so direct-URL navigation works offline.
        navigateFallback: "/index.html",
      },
    }),
  ],
  server: {
    port: 5173,
  },
  // Workspace packages compile to CommonJS-ish ESM (`tsconfig.base.json`
  // is `module: NodeNext` with no `"type": "module"`). Rollup's
  // named-import analyzer trips over `Object.defineProperty` exports
  // unless we explicitly include them in `commonjsOptions`.
  // `optimizeDeps` makes Vite's dev-server pre-bundle them too so
  // the dev/build paths behave identically.
  optimizeDeps: {
    include: [
      "@emdzej/ediabasx-best-parser",
      "@emdzej/ediabasx-core",
      "@emdzej/ediabasx-ediabas",
      "@emdzej/ediabasx-interface-base",
      "@emdzej/ediabasx-interface-serial",
      "@emdzej/ediabasx-interfaces",
      "@emdzej/ediabasx-interpreter",
      "@emdzej/ediabasx-logger",
    ],
  },
  // `@emdzej/ediabasx-interfaces` carries a TCP gateway transport gated
  // behind a dynamic `import("node:net")`. We only use the WebSocket
  // path in the browser, but Rollup still tries to resolve the dynamic
  // import target. Stub `node:net` so the build succeeds — the stub
  // module is never actually invoked because the WebSocket branch
  // bypasses the TCP path entirely.
  resolve: {
    alias: [{ find: /^node:net$/, replacement: "/src/lib/node-net-stub.ts" }],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages\//],
      transformMixedEsModules: true,
    },
  },
});
