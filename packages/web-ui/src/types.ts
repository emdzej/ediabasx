// Shared types consumed by both ediabasx-web and any future bimmerz-
// family web app (inpax-web, ncsx-web). The interface-config shape
// lives here so a single InterfaceConfigPanel can drive any consumer
// without copy-pasting the union + sub-shapes.
//
// Each app's full config typically extends `InterfaceConfig` with
// app-specific fields (logging, install handle, etc.).

/** Top-level operating mode: local hardware or remote server. */
export type AppMode = "embedded" | "client";

/** How the client reaches the server: direct WebSocket or via Bimmerz Connect relay. */
export type ClientConnectionMethod = "direct" | "connect";

/** Which transport the app uses to reach the ECU. */
export type InterfaceType = "webserial" | "j2534" | "gateway";

/** Framing-level protocol over a raw serial / K-line stream. */
export type SerialProtocol = "uart" | "kwp" | "isotp" | "tp20";

/** K-line wakeup. Most BMW ECUs from the K-line era use fast-init. */
export type SerialInitMode = "fast" | "five-baud";

/** Per-interface settings — populated only for the active interface. */
export interface SerialConfig {
  baudRate?: number;
  dataBits?: 7 | 8;
  parity?: "none" | "even" | "odd";
  stopBits?: 1 | 2;
  protocol?: SerialProtocol;
  initMode?: SerialInitMode;
  /** Hex string for readability ("0x7E0"). Only used for `isotp`. */
  testerCanId?: string;
  /** Hex string ("0x7E8"). Only used for `isotp`. */
  ecuCanId?: string;
  timeoutMs?: number;
}

export interface GatewayConfig {
  /**
   * Full WebSocket URL of the remote ediabasx gateway, e.g.
   * `ws://192.168.1.50:6801` or `wss://gateway.example.com/ediabasx`.
   */
  url?: string;
}

/**
 * Minimal config shape the InterfaceConfigPanel binds to. Apps extend
 * this with their own non-interface fields (logger, install, etc.).
 */
export interface InterfaceConfig {
  interface: InterfaceType;
  serial?: SerialConfig;
  gateway?: GatewayConfig;
}

/**
 * Config shape the ModeConfigPanel + ServerConfigPanel bind to.
 * Apps extend this alongside InterfaceConfig.
 */
export interface ModeConfig {
  mode: AppMode;
  serverUrl?: string;
  connectionMethod?: ClientConnectionMethod;
  connectRelayUrl?: string;
}

/**
 * Lifecycle phase of an interface connection. Mirrored from each app's
 * runtime — kept here so ConnectButton can render without importing an
 * app-specific runtime module.
 */
export type ConnectionPhase =
  | "idle"
  | "connecting"
  | "connected"
  | "error"
  | "disconnected";
