/**
 * Structured logging for EdiabasX.
 *
 * The logger never reads from `process.env` or any other environment-
 * specific source. Configuration comes exclusively from the host
 * application — the CLI reads `EDIABASX_VERBOSE` / `EDIABASX_LOG_LEVEL` at
 * startup and forwards them via `configureLogger()`; the web app reads
 * from its wizard config and does the same. This keeps the package
 * portable between Node and the browser.
 */

import pino from "pino";

export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "silent";

export interface LoggerConfig {
  /** Log threshold. Defaults to "info". */
  level?: LogLevel;
  /**
   * Render through `pino-pretty` for human-friendly stdout. Node-only —
   * silently ignored in browser builds (pino's browser entry doesn't
   * support transports).
   */
  pretty?: boolean;
  /** Write to a file path instead of stdout. Node-only. */
  destination?: string;
}

const DEFAULT_CONFIG: Required<Pick<LoggerConfig, "level" | "pretty">> = {
  level: "info",
  pretty: false,
};

// Active configuration — mutated by `configureLogger()`. Kept as a module
// singleton so every `getLogger(module)` call sees the latest settings.
let active: LoggerConfig = { ...DEFAULT_CONFIG };

// Root pino instance is built lazily on first use so the host has a
// chance to call `configureLogger()` before any module emits a log line.
let root: pino.Logger | null = null;

const isBrowser = typeof window !== "undefined";

function buildRoot(): pino.Logger {
  const level = active.level ?? DEFAULT_CONFIG.level;
  // Transports use Node worker threads — not available in browser builds.
  // If the host accidentally passes `pretty: true` in a browser context,
  // silently drop it rather than crash.
  const transport = isBrowser
    ? undefined
    : active.destination
      ? { target: "pino/file", options: { destination: active.destination } }
      : active.pretty
        ? { target: "pino-pretty", options: { colorize: true } }
        : undefined;

  return pino({
    level,
    name: "ediabasx",
    transport,
  });
}

/**
 * Apply a new logger configuration. Discards the cached root logger so
 * the next `getLogger()` call rebuilds against the new settings. Existing
 * child loggers handed out by previous `getLogger()` calls keep their old
 * pino reference — host applications should call `configureLogger()`
 * once, early, at startup.
 */
export function configureLogger(config: LoggerConfig): void {
  active = { ...active, ...config };
  root = null;
}

/**
 * Read the currently-active config. Mostly useful for tests / introspection.
 */
export function getLoggerConfig(): Readonly<LoggerConfig> {
  return { ...active };
}

/**
 * Get a child logger bound to a `module` field. The root logger is
 * constructed on first call from whatever `configureLogger()` was given.
 */
export function getLogger(module: string): pino.Logger {
  if (!root) root = buildRoot();
  return root.child({ module });
}

export type { Logger } from "pino";
