/**
 * Map env vars + the CLI's config-file `logging` section onto a
 * `bimmerz-logger` `LoggerConfig`. The logger library itself never
 * reads `process.env` (it has to stay browser-portable); the CLI is
 * the host that knows about env vars and forwards them here.
 *
 * Precedence, high → low:
 *   1. Env vars (`EDIABASX_LOG_*`)
 *   2. Config file's `logging` section
 *   3. Library defaults (info, no categories, default console sink)
 *
 * Env namespace (replaces 0.2.x's `EDIABASX_VERBOSE`):
 *
 *   EDIABASX_LOG_LEVEL        trace|debug|info|warn|error|fatal|silent
 *   EDIABASX_LOG_CATEGORIES   cat=level,cat=level,…
 *                             e.g. "EDIABASX.ediabas.wire=trace,EDIABASX=info"
 *   EDIABASX_LOG_DESTINATION  file path; logs go to file instead of stdout
 *   EDIABASX_LOG_FORMAT       pretty|json — sink format
 */

import { pinoSink } from '@emdzej/bimmerz-logger/sinks/pino';
import type { LoggerConfig, LogLevel } from '@emdzej/bimmerz-logger';

/** Logger section shape in the CLI's local config file — matches `bimmerz-logger`'s LoggerConfig. */
export interface LoggerFileConfig {
  level?: LogLevel;
  categories?: Record<string, LogLevel>;
  destination?: string;
  pretty?: boolean;
}

export interface ResolveLoggerInputs {
  env: NodeJS.ProcessEnv;
  /** Logger section parsed out of the CLI's config file, if any. */
  fileLogging?: LoggerFileConfig;
  /**
   * `process.stdout.isTTY` (or equivalent). Drives the "pretty when
   * TTY" default when neither env nor file picks a format.
   */
  isTty?: boolean;
}

const VALID_LEVELS = new Set<LogLevel>([
  'trace',
  'debug',
  'info',
  'warn',
  'error',
  'fatal',
  'silent',
]);

function parseLevel(raw: string | undefined, where: string): LogLevel | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim().toLowerCase();
  if (!VALID_LEVELS.has(trimmed as LogLevel)) {
    throw new Error(
      `${where}: invalid log level "${raw}" — expected one of ${[...VALID_LEVELS].join(', ')}`,
    );
  }
  return trimmed as LogLevel;
}

/**
 * Parse `EDIABASX_LOG_CATEGORIES`'s `cat=lvl,cat=lvl,…` syntax.
 * Empty input returns `undefined` (don't override file rules).
 */
function parseCategories(
  raw: string | undefined,
): Record<string, LogLevel> | undefined {
  if (!raw) return undefined;
  const out: Record<string, LogLevel> = {};
  for (const pair of raw.split(',')) {
    const trimmedPair = pair.trim();
    if (trimmedPair === '') continue;
    const eq = trimmedPair.indexOf('=');
    if (eq < 0) {
      throw new Error(
        `EDIABASX_LOG_CATEGORIES: expected "category=level" pairs, got "${pair}"`,
      );
    }
    const cat = trimmedPair.slice(0, eq).trim();
    const lvl = parseLevel(
      trimmedPair.slice(eq + 1),
      `EDIABASX_LOG_CATEGORIES (entry "${trimmedPair}")`,
    );
    if (cat && lvl) out[cat] = lvl;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

/**
 * Compose the final `LoggerConfig` for `configureLogger()`.
 *
 * `categories` is a shallow merge — env entries override file
 * entries for any category present in both, but file entries
 * survive when env doesn't mention them. That keeps the file-level
 * "set EDIABASX.parser to trace" rule alive while the user types
 * `EDIABASX_LOG_CATEGORIES="EDIABASX=debug"` at the shell prompt.
 */
export function resolveLoggerConfig(
  inputs: ResolveLoggerInputs,
): Partial<LoggerConfig> {
  const { env, fileLogging, isTty } = inputs;

  const envLevel = parseLevel(env.EDIABASX_LOG_LEVEL, 'EDIABASX_LOG_LEVEL');
  const envCategories = parseCategories(env.EDIABASX_LOG_CATEGORIES);
  const envDestination = env.EDIABASX_LOG_DESTINATION;
  const envFormatRaw = env.EDIABASX_LOG_FORMAT?.trim().toLowerCase();
  const envPretty =
    envFormatRaw === 'pretty' ? true : envFormatRaw === 'json' ? false : undefined;
  if (envFormatRaw && envFormatRaw !== 'pretty' && envFormatRaw !== 'json') {
    throw new Error(
      `EDIABASX_LOG_FORMAT: expected "pretty" or "json", got "${env.EDIABASX_LOG_FORMAT}"`,
    );
  }

  const level: LogLevel = envLevel ?? fileLogging?.level ?? 'info';

  const fileCategories = fileLogging?.categories;
  const mergedCategories: Record<string, LogLevel> | undefined =
    envCategories || fileCategories
      ? { ...(fileCategories ?? {}), ...(envCategories ?? {}) }
      : undefined;

  const destination = envDestination ?? fileLogging?.destination;
  // When writing to a file, pino-pretty + transports get sticky — use
  // JSON. When writing to stdout, default to pretty when TTY, json
  // when piped, unless explicitly overridden.
  const pretty = envPretty ?? fileLogging?.pretty ?? (destination ? false : isTty ?? false);

  return {
    level,
    categories: mergedCategories,
    sink: pinoSink({ pretty, destination }),
  };
}
