import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 5173,
  },
  // Workspace packages compile to CommonJS (`tsconfig.base.json` is
  // `module: NodeNext` with no `"type": "module"`). Rollup's named-import
  // analyzer trips over CJS named exports via `Object.defineProperty(...)`
  // unless we explicitly include them in `commonjsOptions`. `optimizeDeps`
  // makes Vite's dev-server pre-bundle them too so they go through the same
  // esbuild interop in dev as in build.
  optimizeDeps: {
    include: [
      "@emdzej/ediabasx-best-parser",
      "@emdzej/ediabasx-core",
      "@emdzej/ediabasx-ediabas",
      "@emdzej/ediabasx-interface-base",
      "@emdzej/ediabasx-interface-serial",
      "@emdzej/ediabasx-interpreter",
      "@emdzej/ediabasx-logger",
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages\//],
      transformMixedEsModules: true,
    },
  },
});
