import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,svelte}"],
  // Class-based dark mode so the boot script can flip by adding/removing the `dark` class
  // on <html> based on OS preference. Mirrors the ncsx-web / inpax-web pattern.
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#06b6d4", // cyan-500 — distinct from ncsx (blue-600) and inpax (blue-500).
          muted: "#0e7490",
        },
        base: "rgb(var(--theme-bg) / <alpha-value>)",
        surface: "rgb(var(--theme-surface) / <alpha-value>)",
        elevated: "rgb(var(--theme-elevated) / <alpha-value>)",
        divider: "rgb(var(--theme-border-subtle) / <alpha-value>)",
        rule: "rgb(var(--theme-border-strong) / <alpha-value>)",
        foreground: "rgb(var(--theme-text-primary) / <alpha-value>)",
        muted: "rgb(var(--theme-text-secondary) / <alpha-value>)",
        faint: "rgb(var(--theme-text-muted) / <alpha-value>)",
      },
      borderColor: {
        DEFAULT: "rgb(var(--theme-border-subtle) / <alpha-value>)",
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
