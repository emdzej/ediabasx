import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    // Force runes mode for every component in this app. Without this Svelte 5
    // falls back to legacy mode for components that don't *visibly* use runes
    // in their <script> (e.g. App.svelte only reads `app.view` — no $state /
    // $derived in its own scope, so Svelte heuristically picks legacy mode).
    // Legacy mode drops reactive tracking for module-level $state mutations,
    // which is why tab clicks were swapping `state.view` without re-rendering
    // the `{#if state.view === "wizard"}` branch.
    runes: true,
  },
};
