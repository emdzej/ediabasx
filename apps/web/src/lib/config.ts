// localStorage-backed wizard config. Two interfaces are practical in a
// browser today:
//
//   - `webserial` drives a local USB cable directly via the Web Serial API.
//   - `gateway`   talks to a remote `ediabasx gateway --transport websocket`
//                 server, which in turn drives the real cable on its side.
//
// Everything else (raw `serial`, `kdcan`, `enet`, gateway-over-TCP,
// `simulation`) requires Node-only APIs and is intentionally omitted.

export type InterfaceType = "webserial" | "gateway";
export type SerialProtocol = "uart" | "kwp" | "isotp" | "tp20";
export type SerialInitMode = "fast" | "five-baud";

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

export interface WebConfig {
  interface: InterfaceType;
  serial?: {
    baudRate?: number;
    dataBits?: 7 | 8;
    parity?: "none" | "even" | "odd";
    stopBits?: 1 | 2;
    protocol?: SerialProtocol;
    initMode?: SerialInitMode;
    testerCanId?: string; // hex string for readability
    ecuCanId?: string;
    timeoutMs?: number;
  };
  gateway?: {
    /**
     * Full WebSocket URL of the remote ediabasx gateway, e.g.
     * `ws://192.168.1.50:6801` or `wss://gateway.example.com/ediabasx`.
     * The CLI default is `ws://localhost:6801`.
     */
    url?: string;
  };
  /** Logger settings — applied via `configureLogger()` at boot + on Settings save. */
  logging?: WebLoggerConfig;
}

const STORAGE_KEY = "ediabasx.web.config.v1";

const DEFAULT_CONFIG: WebConfig = {
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
  logging: {
    level: "info",
  },
};

export function loadConfig(): WebConfig {
  if (typeof localStorage === "undefined") return structuredClone(DEFAULT_CONFIG);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_CONFIG);
    const parsed = JSON.parse(raw) as Partial<WebConfig>;
    // Older builds stored `interface: "simulation" | "serial" | "kdcan" | "enet"`.
    // Coerce anything we no longer support back to the default so the UI
    // doesn't show a phantom selection.
    const iface: InterfaceType =
      parsed.interface === "webserial" || parsed.interface === "gateway"
        ? parsed.interface
        : DEFAULT_CONFIG.interface;
    return {
      ...structuredClone(DEFAULT_CONFIG),
      ...parsed,
      interface: iface,
      serial: { ...DEFAULT_CONFIG.serial, ...parsed.serial },
      gateway: { ...DEFAULT_CONFIG.gateway, ...parsed.gateway },
    };
  } catch {
    return structuredClone(DEFAULT_CONFIG);
  }
}

export function saveConfig(config: WebConfig): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function resetConfig(): WebConfig {
  if (typeof localStorage !== "undefined") localStorage.removeItem(STORAGE_KEY);
  return structuredClone(DEFAULT_CONFIG);
}
