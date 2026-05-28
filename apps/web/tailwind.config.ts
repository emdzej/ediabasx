import type { Config } from "tailwindcss";
import bimmerzPreset from "@emdzej/bimmerz-theme";

// Token names (bg-base/surface/elevated, text-foreground/muted/faint,
// border-divider/rule, fontFamily.mono) + light/dark behaviour come from
// the shared bimmerz-theme preset. The CSS variables they reference are
// imported into app.css via `@import "@emdzej/bimmerz-theme/tokens.css"`.
//
// This config only adds the per-app accent — ediabasx is cyan-500,
// distinct from ncsx (blue-600) and inpax (blue-500). Everything else
// inherits from the preset to keep the bimmerz family visually aligned.
export default {
  // Tailwind tree-shakes any class it doesn't see in `content`. Workspace
  // packages live outside `./src`, so their Svelte source has to be added
  // explicitly — otherwise their `border-green-500` / `bg-accent` /
  // `text-muted` etc. resolve to empty utilities and the UI loses colour.
  content: [
    "./index.html",
    "./src/**/*.{ts,svelte}",
    "../../packages/web-ui/src/**/*.{ts,svelte}",
  ],
  presets: [bimmerzPreset],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#06b6d4",
          muted: "#0e7490",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
