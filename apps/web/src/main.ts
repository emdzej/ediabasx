import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";
import { registerSW } from "virtual:pwa-register";
import { applyTheme, watchSystemTheme } from "./lib/settings.svelte";
import { loadConfig } from "./lib/config";
import { applyLoggerConfig } from "./lib/logger-wiring";

// Apply the persisted theme before Svelte mounts so the first paint
// already matches the saved choice. The inline script in index.html
// applied OS preference unconditionally; now `applyTheme()` consults
// the user's saved override too. The OS-preference watcher is
// installed once for the page lifetime — it only fires when the user
// has chosen "system".
applyTheme();
watchSystemTheme();

// Apply the persisted bimmerz-logger config before mount so any
// log calls during component initialisation hit the user's chosen
// level/categories. The Settings dialog re-applies on change at
// runtime — bimmerz-logger handles are proxies, so existing log
// handles pick up the new settings instantly.
applyLoggerConfig(loadConfig().logging);

const target = document.getElementById("app");
if (!target) {
  throw new Error("Missing #app mount point");
}

mount(App, { target });

// Register the service worker. `autoUpdate` mode means a new build's
// SW activates after the next page reload — no user-facing prompt
// needed. The two optional callbacks are wired only for diagnostics.
registerSW({
  onRegisteredSW(swUrl) {
    if (typeof console !== "undefined") {
      console.info(`[pwa] service worker registered at ${swUrl}`);
    }
  },
  onOfflineReady() {
    if (typeof console !== "undefined") {
      console.info("[pwa] offline-ready — bundle is cached, app works without network");
    }
  },
});
