/**
 * Thin compatibility layer over `@emdzej/ediabasx-host-config`.
 *
 * The shared package owns the file schema, loader, save, and selection
 * resolver — that's what nfsx-cli (and any future external consumer)
 * also imports. This file keeps the CLI-internal alias `EdiabasConfig`
 * (with a typed `logging` field) and the legacy named exports the
 * existing call sites use, so the migration is local and reversible.
 */

import {
  DEFAULT_CONFIG_PATH,
  EdiabasConfigError,
  type EdiabasHostConfig,
  loadConfig as loadHostConfig,
  saveConfig as saveHostConfig,
} from "@emdzej/ediabasx-host-config";
import type { LoggerFileConfig } from "./logger-config.js";

/**
 * The shared schema's `logging` field is opaque (`unknown`) so the
 * host-config package doesn't depend on bimmerz-logger. The CLI knows
 * the concrete shape, so we narrow it here for type-safe local use.
 */
type EdiabasConfig = EdiabasHostConfig & {
  logging?: LoggerFileConfig;
};

function getConfigPath(configPath?: string): string {
  return configPath ?? DEFAULT_CONFIG_PATH;
}

/**
 * Load `~/.config/ediabasx/config.json` (or the explicit `configPath`).
 * Wraps the shared loader: legacy callers expect "throws on missing
 * file" when a path is given; the shared loader already enforces that.
 */
function loadConfig(configPath: string): EdiabasConfig {
  const cfg = loadHostConfig(configPath);
  if (!cfg) {
    // Shared loader returns `undefined` only when called with no arg
    // and the default path doesn't exist — can't happen here since
    // we always pass an explicit path. Defensive throw matches the
    // old API contract.
    throw new EdiabasConfigError(`Config file not found: ${configPath}`);
  }
  return cfg as EdiabasConfig;
}

function saveConfig(config: EdiabasConfig, configPath: string): void {
  saveHostConfig(config, configPath);
}

export type { EdiabasConfig };
export {
  DEFAULT_CONFIG_PATH,
  EdiabasConfigError,
  getConfigPath,
  loadConfig,
  saveConfig,
};
