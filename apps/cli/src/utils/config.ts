import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import type { InterfaceOptions } from "@emdzej/ediabasx-interfaces";
import type { LoggerFileConfig } from "./logger-config.js";

type EdiabasConfig = {
  interface: string;
  options: InterfaceOptions;
  /**
   * Optional `logging` section — pass-through to `@emdzej/bimmerz-logger`'s
   * `configureLogger()`. Env vars (`EDIABASX_LOG_*`) override values here.
   */
  logging?: LoggerFileConfig;
};

const DEFAULT_CONFIG_DIR = path.join(os.homedir(), ".config", "ediabasx");
const DEFAULT_CONFIG_PATH = path.join(DEFAULT_CONFIG_DIR, "config.json");

function getConfigPath(configPath?: string): string {
  return configPath ?? DEFAULT_CONFIG_PATH;
}

function loadConfig(configPath: string): EdiabasConfig {
  const resolved = path.resolve(configPath);
  if (!fs.existsSync(resolved)) {
    throw new Error(`Config file not found: ${resolved}`);
  }
  const raw = fs.readFileSync(resolved, "utf-8");
  const parsed = JSON.parse(raw) as EdiabasConfig;

  if (!parsed.interface || typeof parsed.interface !== "string") {
    throw new Error(`Invalid config: "interface" must be a string`);
  }
  if (parsed.options !== undefined && typeof parsed.options !== "object") {
    throw new Error(`Invalid config: "options" must be an object`);
  }

  return {
    interface: parsed.interface,
    options: parsed.options ?? {},
    logging: parsed.logging,
  };
}

function saveConfig(config: EdiabasConfig, configPath: string): void {
  const resolved = path.resolve(configPath);
  const dir = path.dirname(resolved);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(resolved, JSON.stringify(config, null, 2) + "\n", "utf-8");
}

export type { EdiabasConfig };
export { DEFAULT_CONFIG_PATH, getConfigPath, loadConfig, saveConfig };
