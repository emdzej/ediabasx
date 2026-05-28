/**
 * Shared loader + resolver for `~/.config/ediabasx/config.json`.
 *
 * Two CLIs drive ediabasx today — `@emdzej/ediabasx-cli` (this repo) and
 * the external `@emdzej/nfsx-cli` (BMW NFS flash tool). Both honour the
 * same config file and the same `interface` / `options` shape; both had
 * been carrying near-identical loaders. This package consolidates the
 * file schema + the merge rules so neither side has to re-derive the
 * interpretation of fields, the inheritance edge cases, or the
 * gateway-address parsing.
 *
 * What stays in each CLI: the commander-options → `InterfaceOverrides`
 * translation. The set of override flags differs between callers, and a
 * shared package shouldn't dictate CLI flag shapes.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { InterfaceOptions } from "@emdzej/ediabasx-interfaces";

/**
 * The on-disk schema. `logging` is an opaque pass-through so each
 * consumer can apply its own logger config (or ignore it) without
 * forcing this package to depend on bimmerz-logger.
 */
export interface EdiabasHostConfig {
  /** Interface name as understood by `createInterface` from `@emdzej/ediabasx-interfaces`. */
  interface: string;
  /** Free-form per-interface options bag. Validated by the interface's registry entry at use time. */
  options: InterfaceOptions;
  /** Optional logger config — opaque pass-through. */
  logging?: unknown;
}

export class EdiabasConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EdiabasConfigError";
  }
}

export const DEFAULT_CONFIG_DIR = path.join(os.homedir(), ".config", "ediabasx");
export const DEFAULT_CONFIG_PATH = path.join(DEFAULT_CONFIG_DIR, "config.json");
export const DEFAULT_GATEWAY_PORT = 6801;

/**
 * Load `~/.config/ediabasx/config.json` (or the explicit `configPath`).
 *
 * When `configPath` is omitted and the default file doesn't exist,
 * returns `undefined` rather than throwing — that's the "no config,
 * use CLI flags / defaults" path. When `configPath` IS supplied,
 * absence is an error (the user named a file they expected to exist).
 */
export function loadConfig(configPath?: string): EdiabasHostConfig | undefined {
  const target = configPath ?? DEFAULT_CONFIG_PATH;
  if (!configPath && !fs.existsSync(target)) {
    return undefined;
  }

  const resolved = path.resolve(target);
  if (!fs.existsSync(resolved)) {
    throw new EdiabasConfigError(`EDIABAS-X config file not found: ${resolved}`);
  }

  const raw = fs.readFileSync(resolved, "utf-8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new EdiabasConfigError(
      `Invalid JSON in ${resolved}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
  if (!parsed || typeof parsed !== "object") {
    throw new EdiabasConfigError(
      `Invalid EDIABAS-X config in ${resolved}: expected an object`,
    );
  }
  const obj = parsed as Record<string, unknown>;

  if (typeof obj.interface !== "string" || obj.interface.length === 0) {
    throw new EdiabasConfigError(
      `Invalid EDIABAS-X config in ${resolved}: "interface" must be a non-empty string`,
    );
  }
  if (obj.options !== undefined && (typeof obj.options !== "object" || obj.options === null)) {
    throw new EdiabasConfigError(
      `Invalid EDIABAS-X config in ${resolved}: "options" must be an object`,
    );
  }

  const config: EdiabasHostConfig = {
    interface: obj.interface,
    options: (obj.options as InterfaceOptions | undefined) ?? {},
  };
  if (obj.logging !== undefined) {
    config.logging = obj.logging;
  }
  return config;
}

/** Write the config back to disk (creating parent dirs as needed). */
export function saveConfig(config: EdiabasHostConfig, configPath?: string): void {
  const target = configPath ?? DEFAULT_CONFIG_PATH;
  const resolved = path.resolve(target);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, JSON.stringify(config, null, 2) + "\n", "utf-8");
}

/**
 * The override bag each CLI translates its commander options into.
 *
 * `options` is keyed by the same field names the interface's registry
 * entry declares (e.g. `port`, `baudRate`, `host`). Anything not in
 * the registry is ignored by `createInterface` later.
 */
export interface InterfaceOverrides {
  /** Override the file's `interface` field. */
  interfaceName?: string;
  /**
   * Per-option overrides. Merged into the resolved selection's
   * `options` map. Undefined values are dropped (lets callers spread
   * `{ port: opts.serialPort }` without polluting the merge).
   */
  options?: Record<string, string | number | boolean | undefined>;
  /**
   * Convenience: parse `host:port` (or `[ipv6]:port`) into
   * `options.host` + `options.port`. Implies `interfaceName = "gateway"`
   * when neither file nor `interfaceName` already set one.
   */
  gateway?: string;
}

export interface ResolveSelectionOptions {
  /** Used when neither file nor overrides specify an interface. */
  fallback?: string;
}

/**
 * Resolve the effective interface selection by layering CLI overrides
 * on top of the file config.
 *
 * The non-obvious rule (worth calling out): **file options are
 * inherited only when the resolved interface matches the file's
 * `interface` field.** If the CLI switches interface (e.g. file says
 * `kdcan`, CLI passes `--interface j2534`), the file's
 * serial-specific options like `protocol: "uart"` would crash j2534's
 * factory enum validation — so we drop them. The file is a fallback
 * for the SAME interface; a different one starts fresh.
 */
export function resolveSelection(
  fileConfig: EdiabasHostConfig | undefined,
  overrides: InterfaceOverrides,
  opts: ResolveSelectionOptions = {},
): EdiabasHostConfig {
  const fallback = opts.fallback ?? "simulation";

  const resolvedName =
    overrides.interfaceName ??
    (overrides.gateway ? "gateway" : undefined) ??
    fileConfig?.interface ??
    fallback;

  const fileInterfaceMatches =
    fileConfig?.interface !== undefined && fileConfig.interface === resolvedName;

  const merged: InterfaceOptions = fileInterfaceMatches
    ? { ...(fileConfig?.options ?? {}) }
    : {};

  if (overrides.options) {
    for (const [k, v] of Object.entries(overrides.options)) {
      if (v !== undefined) merged[k] = v;
    }
  }

  if (overrides.gateway) {
    const { host, port } = parseGatewayAddress(overrides.gateway);
    merged.host = host;
    merged.port = port;
  }

  return { interface: resolvedName, options: merged };
}

/**
 * One-line human-readable summary of a resolved selection — what
 * CLIs print at startup so the operator sees which transport was
 * actually selected. Built-in shapes for the registered interfaces;
 * unknown names fall back to a JSON dump of `options`.
 */
export function summariseSelection(selection: EdiabasHostConfig): string {
  const o = selection.options;
  const port = o.port;
  const host = o.host;
  const baud = o.baudRate;
  switch (selection.interface) {
    case "simulation":
      return "simulation (no hardware)";
    case "serial":
    case "kdcan": {
      const baudStr = baud !== undefined ? ` @ ${baud}` : "";
      return `${selection.interface} · ${port ?? "unknown"}${baudStr}`;
    }
    case "j2534": {
      const transport = o.transport ?? "serial";
      const proto = o.protocol ?? "ds2";
      const baudStr = baud !== undefined ? ` @ ${baud}` : "";
      return `j2534 · ${transport}/${proto}${baudStr}`;
    }
    case "enet":
      return `enet · ${host ?? "unknown"}:${port ?? DEFAULT_GATEWAY_PORT}`;
    case "gateway":
      return `gateway · ${host ?? "127.0.0.1"}:${port ?? DEFAULT_GATEWAY_PORT}`;
    default:
      return `${selection.interface} · ${JSON.stringify(o)}`;
  }
}

/**
 * Parse `host:port` or `[ipv6]:port`. Bare host is allowed and
 * defaults the port to `DEFAULT_GATEWAY_PORT` (6801).
 *
 * Throws `EdiabasConfigError` on malformed input.
 */
export function parseGatewayAddress(value: string): { host: string; port: number } {
  const trimmed = value.trim();
  if (!trimmed) throw new EdiabasConfigError("gateway address cannot be empty");

  // IPv6 in brackets: [::1]:6801
  if (trimmed.startsWith("[")) {
    const end = trimmed.indexOf("]");
    if (end < 0) throw new EdiabasConfigError(`Invalid gateway address: ${value}`);
    const host = trimmed.slice(1, end);
    const rest = trimmed.slice(end + 1);
    const port = rest.startsWith(":")
      ? Number.parseInt(rest.slice(1), 10)
      : DEFAULT_GATEWAY_PORT;
    if (!Number.isFinite(port) || port <= 0) {
      throw new EdiabasConfigError(`Invalid gateway port in ${value}`);
    }
    return { host, port };
  }

  // host[:port]
  const idx = trimmed.lastIndexOf(":");
  if (idx < 0) return { host: trimmed, port: DEFAULT_GATEWAY_PORT };
  const host = trimmed.slice(0, idx);
  const port = Number.parseInt(trimmed.slice(idx + 1), 10);
  if (!host || !Number.isFinite(port) || port <= 0) {
    throw new EdiabasConfigError(`Invalid gateway address: ${value}`);
  }
  return { host, port };
}
