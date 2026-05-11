// localStorage-backed wizard config. Mirrors the CLI's `configure` schema
// shape so future read/write of `~/.config/ediabasx/config.json` style files
// can use the same keys.

export type InterfaceType = "simulation" | "serial" | "kdcan" | "webserial" | "enet";
export type SerialProtocol = "uart" | "kwp" | "isotp" | "tp20";
export type SerialInitMode = "fast" | "five-baud";

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
  enet?: {
    host?: string;
    port?: number;
  };
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
  enet: {
    host: "192.168.0.1",
    port: 6801,
  },
};

export function loadConfig(): WebConfig {
  if (typeof localStorage === "undefined") return structuredClone(DEFAULT_CONFIG);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_CONFIG);
    const parsed = JSON.parse(raw) as Partial<WebConfig>;
    return {
      ...structuredClone(DEFAULT_CONFIG),
      ...parsed,
      serial: { ...DEFAULT_CONFIG.serial, ...parsed.serial },
      enet: { ...DEFAULT_CONFIG.enet, ...parsed.enet },
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
