import { EdiabasInterface, SimulationInterface } from "@emdzej/ediabasx-interface-base";
import {
  SerialCommParameterIds,
  SerialInitModes,
  SerialInterface,
  SerialProtocols,
  type SerialInterfaceConfig,
  type SerialInitMode,
  type SerialParity,
  type SerialProtocol
} from "@emdzej/ediabasx-interface-serial";
import { NodeSerialTransport } from "@emdzej/ediabasx-interface-serial/node";
import { EnetInterface } from "@emdzej/ediabasx-interface-enet";
import { GatewayClient } from "./gateway-client";
import { getInterfaceMetadata, type InterfaceMetadata } from "./registry";

export type InterfaceOptions = Record<string, string | number | boolean | undefined>;

const SERIAL_PROTOCOL_MAP: Record<string, SerialProtocol> = {
  uart: SerialProtocols.Uart,
  kwp: SerialProtocols.Kwp,
  tp20: SerialProtocols.Tp20,
  isotp: SerialProtocols.IsoTp
};

const SERIAL_INIT_MAP: Record<string, SerialInitMode> = {
  fast: SerialInitModes.Fast,
  "five-baud": SerialInitModes.FiveBaud
};

export function createInterface(name: string, rawOptions: InterfaceOptions = {}): EdiabasInterface {
  const metadata = getInterfaceMetadata(name);
  if (!metadata) {
    throw new Error(`Interface "${name}" is not registered`);
  }

  const options = resolveInterfaceOptions(metadata, rawOptions);

  switch (metadata.name) {
    case "simulation":
      return new SimulationInterface();
    case "gateway":
      return new GatewayClient({
        host: options.host as string | undefined,
        port: options.port as number | undefined,
        transport: options.transport as "tcp" | "websocket" | undefined,
        url: options.url as string | undefined
      });
    case "enet":
      return new EnetInterface();
    case "serial":
    case "kdcan":
      return createSerialInterface(options);
    default:
      throw new Error(`Interface "${metadata.name}" is not supported`);
  }
}

function resolveInterfaceOptions(
  metadata: InterfaceMetadata,
  rawOptions: InterfaceOptions
): Record<string, string | number | boolean> {
  const resolved: Record<string, string | number | boolean> = {};
  const options = metadata.options ?? [];

  for (const option of options) {
    const rawValue = rawOptions[option.name];
    if (rawValue === undefined || rawValue === null) {
      if (option.default !== undefined) {
        resolved[option.name] = option.default;
      } else if (option.required) {
        throw new Error(`Missing required option "${option.name}" for interface "${metadata.name}"`);
      }
      continue;
    }

    resolved[option.name] = coerceOptionValue(option, rawValue);
  }

  return resolved;
}

function coerceOptionValue(
  option: { name: string; type: string; values?: string[] },
  value: string | number | boolean
): string | number | boolean {
  switch (option.type) {
    case "string":
      return String(value);
    case "number":
      return parseNumber(option.name, value);
    case "boolean":
      return parseBoolean(option.name, value);
    case "enum": {
      const enumValue = String(value).toLowerCase();
      if (option.values && !option.values.includes(enumValue)) {
        throw new Error(`Invalid value for option "${option.name}": ${value}`);
      }
      return enumValue;
    }
    default:
      return value;
  }
}

function parseNumber(name: string, value: string | number | boolean): number {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error(`Invalid value for option "${name}": ${value}`);
    }
    return value;
  }
  if (typeof value === "boolean") {
    return value ? 1 : 0;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid value for option "${name}": ${value}`);
  }
  return parsed;
}

function parseBoolean(name: string, value: string | number | boolean): boolean {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "number") {
    return value !== 0;
  }
  const normalized = value.toLowerCase();
  if (["true", "1", "yes"].includes(normalized)) {
    return true;
  }
  if (["false", "0", "no"].includes(normalized)) {
    return false;
  }
  throw new Error(`Invalid value for option "${name}": ${value}`);
}

function createSerialInterface(options: Record<string, string | number | boolean>): SerialInterface {
  const config: SerialInterfaceConfig = {
    port: options.port as string,
    baudRate: options.baudRate as number | undefined,
    dataBits: options.dataBits as 7 | 8 | undefined,
    parity: options.parity as SerialParity | undefined,
    stopBits: options.stopBits as 1 | 2 | undefined,
    timeoutMs: options.timeoutMs as number | undefined,
    // CLI defaults to probing the adapter on connect — that's how we detect a
    // real K+DCAN cable. User code that drives the SerialInterface directly
    // can opt out by passing `probeAdapterOnConnect: false`.
    probeAdapterOnConnect:
      options.probeAdapter === undefined
        ? true
        : parseBoolean("probeAdapter", options.probeAdapter),
  };

  // Inject the Node serialport-backed transport here — `SerialInterface`
  // no longer ships a built-in default so the browser bundle can avoid
  // pulling in `serialport`.
  const serial = new SerialInterface({ ...config, transport: new NodeSerialTransport() });

  if (options.protocol !== undefined) {
    serial.setParameter(
      SerialCommParameterIds.Protocol,
      resolveSerialProtocol(options.protocol)
    );
  }

  if (options.initMode !== undefined) {
    serial.setParameter(
      SerialCommParameterIds.InitMode,
      resolveSerialInitMode(options.initMode)
    );
  }

  if (options.testerCanId !== undefined) {
    serial.setParameter(
      SerialCommParameterIds.TesterCanId,
      parseNumber("testerCanId", options.testerCanId)
    );
  }

  if (options.ecuCanId !== undefined) {
    serial.setParameter(
      SerialCommParameterIds.EcuCanId,
      parseNumber("ecuCanId", options.ecuCanId)
    );
  }

  applySerialTiming(serial, options);

  return serial;
}

function resolveSerialProtocol(value: string | number | boolean): SerialProtocol {
  if (typeof value === "number") {
    return value as SerialProtocol;
  }
  const normalized = String(value).toLowerCase();
  const protocol = SERIAL_PROTOCOL_MAP[normalized];
  if (protocol === undefined) {
    throw new Error(`Unknown serial protocol: ${value}`);
  }
  return protocol;
}

function resolveSerialInitMode(value: string | number | boolean): number {
  if (typeof value === "number") {
    return value;
  }
  const normalized = String(value).toLowerCase();
  const mode = SERIAL_INIT_MAP[normalized];
  if (mode === undefined) {
    throw new Error(`Unknown serial init mode: ${value}`);
  }
  return mode === SerialInitModes.Fast ? 1 : 0;
}

function applySerialTiming(serial: SerialInterface, options: Record<string, string | number | boolean>): void {
  const timingMap: Array<[keyof typeof SerialCommParameterIds, keyof typeof options]> = [
    ["P1", "p1"],
    ["P2", "p2"],
    ["P3", "p3"],
    ["W1", "w1"],
    ["W2", "w2"],
    ["W3", "w3"],
    ["W4", "w4"],
    ["W5", "w5"],
    ["InterByteTime", "interByteTime"],
    ["TimeoutNr78", "timeoutNr78"],
    ["RetryNr78", "retryNr78"]
  ];

  for (const [paramKey, optionKey] of timingMap) {
    const value = options[optionKey];
    if (value === undefined) {
      continue;
    }
    serial.setParameter(
      SerialCommParameterIds[paramKey],
      parseNumber(String(optionKey), value)
    );
  }
}
