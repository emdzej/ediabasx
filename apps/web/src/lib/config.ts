// localStorage-backed wizard config. Three interfaces are practical in a
// browser today:
//
//   - `webserial` drives a generic FTDI / CDC ACM cable directly via the
//                 Web Serial API. Talks raw bytes to whatever's on the
//                 K-line (or D-CAN). Right for K+DCAN-style cables.
//   - `j2534`     drives a SAE J2534 device (Tactrix OpenPort 2.0). The
//                 j2534 driver handles bit timing + frame integrity in
//                 hardware — much better K-line reliability than the
//                 webserial / raw-UART path.
//   - `gateway`   talks to a remote `ediabasx gateway --transport websocket`
//                 server, which in turn drives the real cable on its side.
//
// Interface-shape types come from `@emdzej/ediabasx-web-ui` so the
// InterfaceConfigPanel and this storage layer agree on a single shape.

import type { AppMode, InterfaceConfig, InterfaceType, ModeConfig } from "@emdzej/ediabasx-web-ui";
import { isEmbedded, embeddedEndpoints } from "./embedded";

export type {
  AppMode,
  InterfaceConfig,
  InterfaceType,
  ModeConfig,
  SerialProtocol,
  SerialInitMode,
} from "@emdzej/ediabasx-web-ui";

/**
 * One of the bimmerz-logger levels. Kept as a flat string union here
 * (instead of importing `LogLevel` from the package) so this file
 * stays a pure config-shape definition with no library dependency —
 * the wiring layer in `main.ts` is what actually pulls in
 * bimmerz-logger.
 */
export type LogLevel =
  | "trace"
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal"
  | "silent";

export const LOG_LEVELS: readonly LogLevel[] = [
  "trace",
  "debug",
  "info",
  "warn",
  "error",
  "fatal",
  "silent",
];

/**
 * Persisted logger configuration. Mirrors `@emdzej/bimmerz-logger`'s
 * `LoggerConfig` minus the sink (the web app always uses the console
 * sink — no Node-style pino transport surface in the browser).
 */
export interface WebLoggerConfig {
  /** Default level when no `categories` rule matches. */
  level?: LogLevel;
  /**
   * Per-category overrides. Dot-separated keys; rules walk up the
   * hierarchy. See the ediabasx README for the catalogue.
   *
   * Example: `{ "EDIABASX.ediabas.wire": "trace" }` flips on wire
   * tracing without raising every other category.
   */
  categories?: Record<string, LogLevel>;
}

/** Full app config = the shared interface shape + mode shape + ediabasx-specific extras. */
export interface WebConfig extends InterfaceConfig, ModeConfig {
  /** Logger settings — applied via `configureLogger()` at boot + on Settings save. */
  logging?: WebLoggerConfig;
}

const STORAGE_KEY = "ediabasx.web.config.v1";

const DEFAULT_CONFIG: WebConfig = {
  mode: "embedded",
  interface: "webserial",
  serial: {
    baudRate: 9600,
    dataBits: 8,
    parity: "none",
    stopBits: 1,
    protocol: "kwp",
    initMode: "fast",
    timeoutMs: 5000,
  },
  gateway: {
    url: "ws://localhost:6801",
  },
  serverUrl: "ws://localhost:6802",
  logging: {
    level: "info",
  },
};

/**
 * Connection fields the embedded build owns at compile/boot time —
 * the user shouldn't (and can't) change these on the dongle. Other
 * persisted preferences (theme, logging, per-feature toggles) flow
 * through the regular localStorage merge below.
 *
 * `serverUrl` is derived from `window.location.origin` so the same
 * embedded artefact works regardless of whether the dongle hosts
 * itself at `http://172.16.7.1`, a reverse-proxied
 * `https://dongle.local`, or a future IP the user routes to. The
 * other fields are static.
 */
function embeddedConnectionOverrides(): Pick<
  WebConfig,
  "mode" | "connectionMethod" | "serverUrl"
> {
  return {
    mode: "client",
    connectionMethod: "direct",
    serverUrl: embeddedEndpoints().serverWsUrl,
  };
}

export function loadConfig(): WebConfig {
  if (typeof localStorage === "undefined") {
    return isEmbedded
      ? { ...structuredClone(DEFAULT_CONFIG), ...embeddedConnectionOverrides() }
      : structuredClone(DEFAULT_CONFIG);
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const base = !raw
      ? structuredClone(DEFAULT_CONFIG)
      : (() => {
          const parsed = JSON.parse(raw) as Partial<WebConfig>;
          // Older builds stored `interface: "simulation" | "serial" | "kdcan" | "enet"`.
          // Coerce anything we no longer support back to the default so the UI
          // doesn't show a phantom selection.
          const iface: InterfaceType =
            parsed.interface === "webserial" ||
            parsed.interface === "j2534" ||
            parsed.interface === "gateway"
              ? parsed.interface
              : DEFAULT_CONFIG.interface;
          const mode: AppMode =
            parsed.mode === "embedded" || parsed.mode === "client"
              ? parsed.mode
              : "embedded";
          return {
            ...structuredClone(DEFAULT_CONFIG),
            ...parsed,
            mode,
            interface: iface,
            serial: { ...DEFAULT_CONFIG.serial, ...parsed.serial },
            gateway: { ...DEFAULT_CONFIG.gateway, ...parsed.gateway },
          };
        })();
    /* In embedded builds the connection fields are dongle-owned —
       the persisted mode/serverUrl/connectionMethod are stale junk
       (the dongle's IP/host can change between sessions). Override
       them on every load; leave logging/theme/etc. intact. */
    if (isEmbedded) {
      return { ...base, ...embeddedConnectionOverrides() };
    }
    return base;
  } catch {
    return isEmbedded
      ? { ...structuredClone(DEFAULT_CONFIG), ...embeddedConnectionOverrides() }
      : structuredClone(DEFAULT_CONFIG);
  }
}

export function saveConfig(config: WebConfig): void {
  if (typeof localStorage === "undefined") return;
  /* Persist the full object even in embedded mode — the connection
     fields will be re-overridden on next load, so leaving them in
     storage is harmless drift, not a correctness issue. Keeps
     saveConfig idempotent and avoids ad-hoc field-stripping. */
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function resetConfig(): WebConfig {
  if (typeof localStorage !== "undefined") localStorage.removeItem(STORAGE_KEY);
  return structuredClone(DEFAULT_CONFIG);
}
