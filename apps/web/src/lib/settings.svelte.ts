/**
 * UI preferences persisted to localStorage. Distinct from `config.ts`
 * (which holds interface/connection settings — baud rate, gateway URL,
 * …): those describe the *machine* setup; this file is about the
 * *user's workspace* — what's collapsed, which theme.
 *
 * Exposed as a reactive Svelte 5 `$state` object plus mutator
 * functions; consumers read `settings.theme` directly, mutate via the
 * helpers, and `persist()` writes through to localStorage on every
 * change.
 *
 * Mirrors `inpax/apps/inpax-web/src/lib/settings.svelte.ts` — same
 * pattern, narrower set of fields (no startupIpo / debugMode).
 */

export type ThemeChoice = "light" | "dark" | "system";

export interface WebSettings {
  /** Sidebar collapsed state — the SGBD browser folds into a thin rail. */
  sidebarCollapsed: boolean;
  /**
   * Theme choice. "system" tracks `prefers-color-scheme` and updates
   * when the OS toggles light/dark; "light" / "dark" pin the theme
   * regardless of OS preference. `applyTheme()` resolves this into a
   * boolean and toggles a `dark` class on <html>.
   */
  theme: ThemeChoice;
}

const STORAGE_KEY = "ediabasx.web.settings.v1";

const DEFAULTS: WebSettings = {
  sidebarCollapsed: false,
  theme: "system",
};

function load(): WebSettings {
  if (typeof localStorage === "undefined") return { ...DEFAULTS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw) as Partial<WebSettings>;
    return { ...DEFAULTS, ...parsed };
  } catch {
    return { ...DEFAULTS };
  }
}

export const settings = $state<WebSettings>(load());

function persist(): void {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    /* quota / disabled — silent, settings are best-effort */
  }
}

export function setSidebarCollapsed(collapsed: boolean): void {
  settings.sidebarCollapsed = collapsed;
  persist();
}

export function setTheme(theme: ThemeChoice): void {
  settings.theme = theme;
  persist();
  applyTheme();
}

/**
 * Resolve the user's theme choice into a concrete light/dark flag.
 * For `"system"` we consult `prefers-color-scheme` at call time.
 * Safe in SSR / pre-DOM contexts (returns the light branch).
 */
export function isDarkTheme(): boolean {
  if (settings.theme === "dark") return true;
  if (settings.theme === "light") return false;
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Push the resolved theme onto `<html>` — adds the `dark` class for
 * dark mode, removes it otherwise. Called on settings change and on
 * OS-preference change (when theme === "system").
 */
export function applyTheme(): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (isDarkTheme()) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/**
 * Install a `prefers-color-scheme` listener so the page tracks OS
 * theme changes when the user has chosen `"system"`. Returns the
 * unsubscribe function (mainly for tests; the production app keeps
 * the subscription for the page lifetime).
 */
export function watchSystemTheme(): () => void {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = (): void => {
    if (settings.theme === "system") applyTheme();
  };
  mql.addEventListener("change", handler);
  return () => mql.removeEventListener("change", handler);
}
