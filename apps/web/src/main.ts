import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";
import { registerSW } from "virtual:pwa-register";

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
