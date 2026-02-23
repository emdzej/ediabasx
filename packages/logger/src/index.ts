import pino from "pino";

export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "silent";

export interface LoggerOptions {
  level?: LogLevel;
  name?: string;
  pretty?: boolean;
  destination?: string;
}

const defaultLevel = (process.env.EDIABASX_LOG_LEVEL as LogLevel) || "info";
const isPretty = process.env.NODE_ENV !== "production";

export function createLogger(options: LoggerOptions = {}): pino.Logger {
  const level = options.level ?? defaultLevel;

  const transport = options.destination
    ? { target: "pino/file", options: { destination: options.destination } }
    : options.pretty ?? isPretty
      ? { target: "pino-pretty", options: { colorize: true } }
      : undefined;

  return pino({
    level,
    name: options.name,
    transport,
  });
}

export const logger = createLogger({ name: "ediabasx" });

export function getLogger(module: string): pino.Logger {
  return logger.child({ module });
}

export type { Logger } from "pino";
