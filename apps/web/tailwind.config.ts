import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,svelte}"],
  theme: {
    extend: {
      colors: {
        // Subtle accent matching the CLI's cyan focus colour.
        accent: {
          DEFAULT: "#06b6d4",
          muted: "#0e7490",
        },
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
