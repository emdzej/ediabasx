import type { Command } from "commander";
import type { InterfaceOptions } from "@emdzej/ediabasx-interfaces";
import { configureLogger } from "@emdzej/bimmerz-logger";
import { parseGatewayAddress } from "@emdzej/ediabasx-host-config";
import fs from "node:fs";
import { parseNumber, parseOptionalNumber } from "./numbers.js";
import { DEFAULT_CONFIG_PATH, loadConfig } from "./config.js";
import { resolveLoggerConfig } from "./logger-config.js";

type InterfaceCliOptions = {
  config?: string;
  interface?: string;
  simulation?: boolean;
  timeout?: string;
  gateway?: string;
  gatewayHost?: string;
  gatewayPort?: string;
  gatewayTransport?: string;
  gatewayUrl?: string;
  serialPort?: string;
  serialBaud?: string;
  serialDataBits?: string;
  serialParity?: string;
  serialStopBits?: string;
  serialInit?: string;
  serialProtocol?: string;
  serialTesterCanId?: string;
  serialEcuCanId?: string;
  serialTimeout?: string;
  serialP1?: string;
  serialP2?: string;
  serialP3?: string;
  serialW1?: string;
  serialW2?: string;
  serialW3?: string;
  serialW4?: string;
  serialW5?: string;
  serialInterByteTime?: string;
  serialTimeoutNr78?: string;
  serialRetryNr78?: string;
  enetHost?: string;
  enetPort?: string;
  interfaceOption?: string[];
};

// Note: gateway-address parsing + the file-options inheritance rule now
// live in `@emdzej/ediabasx-host-config`. This file keeps the
// commander-flag → InterfaceOptions translation, which is CLI-specific.

function addInterfaceOptions(command: Command): Command {
  return command
    .option(
      "-c, --config <path>",
      "path to config file (default: auto-detect ~/.config/ediabasx/config.json)"
    )
    .option(
      "-i, --interface <name>",
      "interface to use (simulation|serial|kdcan|enet|gateway|j2534)"
    )
    .option("--serial-port <path>", "serial device path")
    .option("--serial-baud <baud>", "serial baud rate")
    .option("--serial-data-bits <bits>", "serial data bits (7|8)")
    .option("--serial-parity <parity>", "serial parity (none|even|odd)")
    .option("--serial-stop-bits <bits>", "serial stop bits (1|2)")
    .option("--serial-protocol <protocol>", "serial protocol (uart|kwp|tp20|isotp)")
    .option("--serial-init <mode>", "serial init mode (fast|five-baud)")
    .option("--serial-tester-can-id <id>", "CAN tester ID (hex or decimal)")
    .option("--serial-ecu-can-id <id>", "CAN ECU ID (hex or decimal)")
    .option("--serial-timeout <ms>", "serial receive timeout (ms)")
    .option("--serial-p1 <ms>", "KWP P1 timing (ms)")
    .option("--serial-p2 <ms>", "KWP P2 timing (ms)")
    .option("--serial-p3 <ms>", "KWP P3 timing (ms)")
    .option("--serial-w1 <ms>", "KWP W1 timing (ms)")
    .option("--serial-w2 <ms>", "KWP W2 timing (ms)")
    .option("--serial-w3 <ms>", "KWP W3 timing (ms)")
    .option("--serial-w4 <ms>", "KWP W4 timing (ms)")
    .option("--serial-w5 <ms>", "KWP W5 timing (ms)")
    .option("--serial-inter-byte-time <ms>", "inter-byte delay (ms)")
    .option("--serial-timeout-nr78 <ms>", "NR78 timeout (ms)")
    .option("--serial-retry-nr78 <count>", "NR78 retry count")
    .option("--gateway-host <host>", "gateway host (for interface=gateway)")
    .option("--gateway-port <port>", "gateway port (for interface=gateway)")
    .option(
      "--gateway-transport <transport>",
      "gateway wire framing: 'tcp' (default) or 'websocket'"
    )
    .option(
      "--gateway-url <url>",
      "explicit gateway URL (overrides host/port; useful for ws:// or wss:// deployments)"
    )
    .option("--enet-host <host>", "ENET target host")
    .option("--enet-port <port>", "ENET target port")
    .option(
      "-O, --interface-option <key=value>",
      "set a generic interface option (repeatable). Useful for interface-specific knobs without a dedicated flag, e.g. -O hostInterByteMs=5 -O loopback=true",
      (value: string, prev: string[] = []) => [...prev, value],
      [] as string[]
    );
}

function resolveInterfaceSelection(options: InterfaceCliOptions, fallback: string): {
  name: string;
  options: InterfaceOptions;
} {
  // Load config file: explicit path, or auto-detect from default location
  const configPath = options.config ?? (fs.existsSync(DEFAULT_CONFIG_PATH) ? DEFAULT_CONFIG_PATH : undefined);
  const fileConfig = configPath ? loadConfig(configPath) : undefined;

  // Second-pass logger configuration: apply the file's `logging`
  // section now that we've read it. Env vars (`EDIABASX_LOG_*`) win
  // when both are present. `index.ts` already ran a first pass with
  // env vars only, so any logger handles handed out before this point
  // pick up the merged config instantly (bimmerz-logger handles are
  // proxies — every `log.debug(...)` call resolves against the live
  // central config).
  if (fileConfig?.logging) {
    configureLogger(
      resolveLoggerConfig({
        env: process.env,
        fileLogging: fileConfig.logging,
        isTty: process.stdout.isTTY ?? false,
      }),
    );
  }

  // CLI flags override config file; config file overrides fallback
  const name = options.interface
    ?? (options.gateway ? "gateway" : undefined)
    ?? (options.simulation ? "simulation" : undefined)
    ?? fileConfig?.interface
    ?? fallback;

  if (options.simulation && name !== "simulation") {
    throw new Error("--simulation can only be used with the simulation interface");
  }

  if (options.gateway && name !== "gateway") {
    throw new Error("--gateway can only be used with the gateway interface");
  }

  // Only inherit file's options when the resolved interface matches what
  // the file was configured for. Otherwise the file's serial-specific
  // keys (e.g. `protocol: "uart"`, `initMode: "fast"`) leak into a
  // different interface's factory (e.g. j2534 rejects `protocol: "uart"`
  // because its enum is ds2/kwp/can). This matches the spirit of "the
  // file is a fallback when no CLI override is supplied".
  const fileInterfaceMatches =
    fileConfig?.interface !== undefined && fileConfig.interface === name;
  const interfaceOptions: InterfaceOptions = fileInterfaceMatches
    ? { ...(fileConfig?.options ?? {}) }
    : {};
  const serialOptions: InterfaceOptions = {};

  if (options.serialPort) {
    serialOptions.port = options.serialPort;
  }
  if (options.serialBaud !== undefined) {
    serialOptions.baudRate = parseNumber(options.serialBaud, "Serial baud rate");
  }
  if (options.serialDataBits !== undefined) {
    serialOptions.dataBits = parseNumber(options.serialDataBits, "Serial data bits");
  }
  if (options.serialParity !== undefined) {
    serialOptions.parity = options.serialParity;
  }
  if (options.serialStopBits !== undefined) {
    serialOptions.stopBits = parseNumber(options.serialStopBits, "Serial stop bits");
  }
  if (options.serialInit !== undefined) {
    serialOptions.initMode = options.serialInit;
  }
  if (options.serialProtocol !== undefined) {
    serialOptions.protocol = options.serialProtocol;
  }
  if (options.serialTesterCanId !== undefined) {
    serialOptions.testerCanId = parseNumber(options.serialTesterCanId, "Tester CAN ID");
  }
  if (options.serialEcuCanId !== undefined) {
    serialOptions.ecuCanId = parseNumber(options.serialEcuCanId, "ECU CAN ID");
  }
  if (options.serialTimeout !== undefined) {
    serialOptions.timeoutMs = parseOptionalNumber(options.serialTimeout, "Serial timeout");
  } else if (name === "serial" || name === "kdcan") {
    const fallbackTimeout = options.timeout;
    if (fallbackTimeout !== undefined) {
      serialOptions.timeoutMs = parseOptionalNumber(fallbackTimeout, "Serial timeout");
    }
  }
  if (options.serialP1 !== undefined) {
    serialOptions.p1 = parseNumber(options.serialP1, "KWP P1");
  }
  if (options.serialP2 !== undefined) {
    serialOptions.p2 = parseNumber(options.serialP2, "KWP P2");
  }
  if (options.serialP3 !== undefined) {
    serialOptions.p3 = parseNumber(options.serialP3, "KWP P3");
  }
  if (options.serialW1 !== undefined) {
    serialOptions.w1 = parseNumber(options.serialW1, "KWP W1");
  }
  if (options.serialW2 !== undefined) {
    serialOptions.w2 = parseNumber(options.serialW2, "KWP W2");
  }
  if (options.serialW3 !== undefined) {
    serialOptions.w3 = parseNumber(options.serialW3, "KWP W3");
  }
  if (options.serialW4 !== undefined) {
    serialOptions.w4 = parseNumber(options.serialW4, "KWP W4");
  }
  if (options.serialW5 !== undefined) {
    serialOptions.w5 = parseNumber(options.serialW5, "KWP W5");
  }
  if (options.serialInterByteTime !== undefined) {
    serialOptions.interByteTime = parseNumber(options.serialInterByteTime, "Inter-byte time");
  }
  if (options.serialTimeoutNr78 !== undefined) {
    serialOptions.timeoutNr78 = parseNumber(options.serialTimeoutNr78, "NR78 timeout");
  }
  if (options.serialRetryNr78 !== undefined) {
    serialOptions.retryNr78 = parseNumber(options.serialRetryNr78, "NR78 retry");
  }

  const hasSerialOptions = Object.keys(serialOptions).length > 0;
  if (hasSerialOptions) {
    if (name !== "serial" && name !== "kdcan") {
      throw new Error("Serial options can only be used with serial or kdcan interfaces");
    }
    Object.assign(interfaceOptions, serialOptions);
  }

  const enetOptions: InterfaceOptions = {};
  if (options.enetHost) {
    enetOptions.host = options.enetHost;
  }
  if (options.enetPort !== undefined) {
    enetOptions.port = parseNumber(options.enetPort, "ENET port");
  }
  const hasEnetOptions = Object.keys(enetOptions).length > 0;
  if (hasEnetOptions) {
    if (name !== "enet") {
      throw new Error("ENET options can only be used with the enet interface");
    }
    Object.assign(interfaceOptions, enetOptions);
  }

  if (name === "gateway") {
    if (options.gateway) {
      const address = parseGatewayAddress(options.gateway);
      interfaceOptions.host = address.host;
      interfaceOptions.port = address.port;
    } else {
      if (options.gatewayHost) {
        interfaceOptions.host = options.gatewayHost;
      }
      const gatewayPort = parseOptionalNumber(options.gatewayPort, "Gateway port");
      if (gatewayPort !== undefined) {
        interfaceOptions.port = gatewayPort;
      }
    }
    if (options.gatewayTransport !== undefined) {
      const t = options.gatewayTransport.toLowerCase();
      if (t !== "tcp" && t !== "websocket") {
        throw new Error("--gateway-transport must be 'tcp' or 'websocket'");
      }
      interfaceOptions.transport = t;
    }
    if (options.gatewayUrl !== undefined) {
      interfaceOptions.url = options.gatewayUrl;
    }
  } else if (
    options.gatewayHost ||
    options.gatewayPort ||
    options.gatewayTransport ||
    options.gatewayUrl
  ) {
    throw new Error("Gateway options can only be used with the gateway interface");
  }

  // Generic `-O key=value` overrides — applied last so they win over
  // both file config and the per-interface flag layer above. The
  // factory layer (`resolveInterfaceOptions`) handles type coercion
  // per the registry schema, so values are passed through as strings.
  if (options.interfaceOption) {
    for (const pair of options.interfaceOption) {
      const eq = pair.indexOf("=");
      if (eq === -1) {
        throw new Error(`Invalid --interface-option (expected key=value): "${pair}"`);
      }
      const key = pair.slice(0, eq).trim();
      const value = pair.slice(eq + 1);
      if (!key) {
        throw new Error(`Invalid --interface-option (empty key): "${pair}"`);
      }
      interfaceOptions[key] = value;
    }
  }

  return { name, options: interfaceOptions };
}

function formatInterfaceSummary(name: string, options: InterfaceOptions): string {
  const optionValue = (value: InterfaceOptions[string]): string | undefined => {
    if (value === undefined) return undefined;
    return String(value);
  };

  switch (name) {
    case "gateway": {
      const host = optionValue(options.host) ?? "127.0.0.1";
      const port = optionValue(options.port) ?? "6801";
      const transport = optionValue(options.transport) ?? "tcp";
      return `Gateway (${transport}) · ${host}:${port}`;
    }
    case "serial": {
      const port = optionValue(options.port) ?? "unknown";
      const baud = optionValue(options.baudRate) ?? "9600";
      return `Serial · ${port} @ ${baud}`;
    }
    case "kdcan": {
      const port = optionValue(options.port) ?? "unknown";
      const baud = optionValue(options.baudRate) ?? "115200";
      return `KDCAN · ${port} @ ${baud}`;
    }
    case "enet": {
      const host = optionValue(options.host) ?? "unknown";
      const port = optionValue(options.port) ?? "6801";
      return `ENET · ${host}:${port}`;
    }
    default:
      return "Simulation";
  }
}

export type { InterfaceCliOptions };
export { addInterfaceOptions, formatInterfaceSummary, resolveInterfaceSelection };
