import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// Surface package.json version in the app UI without bundling the whole manifest. Vite's
// `define` replaces the identifier at build time, so the production bundle just contains
// the string literal. Mirrors the ncsx-web pattern.
const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL("./package.json", import.meta.url)), "utf8"),
) as { version: string };

/**
 * Build modes:
 *
 *   • `pnpm web:build` — default. Full browser SPA: install picker,
 *     mode toggle, settings, PWA service worker, persisted config.
 *     Bundle deploys to `ediabasx.bimmerz.app` and similar hosted
 *     locations.
 *
 *   • `pnpm web:build:embedded` — built for the dongle scenario.
 *     The SPA is hosted by the dongle itself (e.g. ESP32-P4 over
 *     Wi-Fi AP at `http://172.16.7.1/`) alongside the ediabasx-server
 *     it talks to. In this build:
 *       - `__EMBEDDED__` is `true` (compile-time constant).
 *       - Mode / connection method / server URL are locked to client
 *         + direct + `${origin}/rpc/ediabasx` (see `lib/embedded.ts`).
 *       - The Settings UI hides the connection panels.
 *       - The PWA service worker is dropped — a device that has no
 *         internet doesn't benefit from precache + auto-update flows
 *         and the SW just gets in the way.
 *     Browser-side persisted state (logging level, theme, user-pref
 *     panels) still uses localStorage normally.
 *
 * The two outputs live side-by-side: `dist/` and `dist-embedded/`.
 */
export default defineConfig(({ mode }) => {
  const isEmbedded = mode === "embedded";
  return {
  /* Embedded build is mounted at `/ediabasx/` on the dongle — the
     firmware serves multiple apps side by side (`/ediabasx/`,
     `/inpax/`, `/ncsx/`, `/nfsx/`) over a single HTTP root. Vite
     rewrites all asset URLs + the SPA fallback to that prefix.
     Default browser build stays at `/` (deployed to a dedicated
     host like ediabasx.bimmerz.app).

     Same-origin endpoints (`/rpc/ediabasx`, `/data/`) sit at the
     dongle's HTTP root regardless of which app is mounted —
     `embeddedEndpoints()` reads `window.location.origin` so the
     base path doesn't affect it. */
  base: isEmbedded ? "/ediabasx/" : "/",
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __EMBEDDED__: JSON.stringify(isEmbedded),
  },
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
    //
    // Skipped in the embedded build: the dongle has no internet, no
    // benefit from offline precache (the SPA already lives on the
    // dongle's flash), and the SW's autoUpdate flow is confusing on
    // a device the user doesn't manage. `false &&` short-circuits at
    // build time so the plugin's options object is gone after
    // tree-shake.
    !isEmbedded && VitePWA({
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
          "Browser SPA for EdiabasX — parse BMW SGBD files and run jobs against a live ECU via Web Serial.",
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
      "@emdzej/ediabasx-interface-j2534",
      "@emdzej/ediabasx-interface-serial",
      "@emdzej/ediabasx-interfaces/client",
      "@emdzej/ediabasx-interpreter",
      "@emdzej/bimmerz-logger",
    ],
  },
  build: {
    /* Separate output for the embedded build so a normal `pnpm
       web:build` doesn't clobber the dongle artefacts and vice
       versa. Firmware packagers ship dist-embedded/ as static
       assets at the dongle's HTTP root. */
    outDir: isEmbedded ? "dist-embedded" : "dist",
    /* Drop sourcemaps in the embedded build — the dongle's flash is
       precious. */
    sourcemap: !isEmbedded,
    commonjsOptions: {
      include: [/node_modules/, /packages\//],
      transformMixedEsModules: true,
    },
    /* Embedded build drops the PWA plugin (no offline cache, no
       autoUpdate flow on a dongle). The dynamic `import("virtual:
       pwa-register")` in main.ts is gated behind `if (!isEmbedded)`
       and tree-shakes out, but Rollup still attempts to resolve the
       virtual specifier during the static-analysis pass — fails
       because the PWA plugin (which provides the virtual module)
       isn't loaded. Mark the specifier external in this build so
       Rollup leaves the call site alone; the gated branch is
       unreachable anyway. */
    rollupOptions: isEmbedded
      ? { external: ["virtual:pwa-register"] }
      : undefined,
  },
  };
});
