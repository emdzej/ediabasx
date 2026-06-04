// Runtime state for the Jobs view: connection lifecycle (Web Serial /
// simulation), the Ediabas instance, and the most recent run's results.
//
// Non-reactive plumbing (the `Ediabas` class instance, the granted
// SerialPort) lives in module-scoped `let` bindings — wrapping them with
// `$state(...)` would proxy their methods, which breaks the interpreter's
// internal `this` references. Only the UI-visible fields are in `$state`.

import { Ediabas, type EdiabasConfig, type EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { EdiabasClient } from "@emdzej/ediabasx-client/client";
import type { EdiabasJobResponse, EdiabasResultEntry } from "@emdzej/ediabasx-core";
import { GatewayClient } from "@emdzej/ediabasx-interfaces/client";
import {
  SerialInterface,
  WebSerialTransport,
  type WebSerialPortLike,
} from "@emdzej/ediabasx-interface-serial";
import { J2534Interface } from "@emdzej/ediabasx-interface-j2534";
import { WebSerialTransport as J2534WebSerialTransport } from "@emdzej/j2534-webserial";
import { state as app } from "./app.svelte";
import { readFileBytes } from "./files";

/**
 * SGBD resolver for the browser path of `Ediabas.swapToVariant` (and
 * the GRP→PRG load chain in general). Looks up the requested filename
 * inside the install's discovered `sgbds[]` catalogue case-insensitively,
 * with a `.prg ↔ .grp` extension swap as a fallback (mirrors the
 * Node-fs side's `resolveCaseInsensitive`). Without this wired in,
 * `swapToVariant` falls into the Node `fs/promises` branch and fails
 * silently in the browser — leaving the loaded SGBD at the original
 * .grp and the system set's VARIANTE pinned to the .grp basename.
 */
async function resolveSgbdInInstall(
  filename: string,
): Promise<{ bytes: Uint8Array; name: string }> {
  if (!app.install) {
    throw new Error(`SGBD resolver invoked with no install loaded (file: ${filename})`);
  }
  const lower = filename.toLowerCase();
  const stripped = lower.replace(/\.(prg|grp)$/, "");
  const altExt = lower.endsWith(".prg") ? ".grp" : ".prg";

  /* Match against either the relative path (preserves subdir layouts)
     or just the basename (BMW installs occasionally nest variants). */
  const candidates = [
    lower,
    `${stripped}${altExt}`,
  ];
  let picked = app.install.sgbds.find(
    (s) => candidates.includes(s.relativePath.toLowerCase()),
  );
  if (!picked) {
    picked = app.install.sgbds.find(
      (s) => candidates.includes(s.name.toLowerCase()),
    );
  }
  if (!picked) {
    throw new Error(`SGBD not found in install: ${filename}`);
  }
  const bytes = await readFileBytes(picked.file);
  return { bytes, name: picked.name };
}

export type ConnectionPhase =
  | "idle"           // no connection attempted yet
  | "connecting"     // requesting port / opening serial / running INIT
  | "connected"      // ready to run jobs
  | "error"          // connect or run failed
  | "disconnected";  // user explicitly disconnected

interface RuntimeUiState {
  phase: ConnectionPhase;
  /** Human-friendly status line for the connection pill. */
  message: string;
  /** Filled in once a run completes; sets are one per `enewset`. */
  results: EdiabasJobResult[][] | null;
  /** Which job's results are currently shown. */
  resultsJobName: string | null;
  /** Elapsed time of the last run in milliseconds. */
  resultsExecMs: number | null;
  /** Most recent error from connect / run. */
  errorMessage: string | null;
  isRunning: boolean;
}

export const runtime = $state<RuntimeUiState>({
  phase: "idle",
  message: "Not connected",
  results: null,
  resultsJobName: null,
  resultsExecMs: null,
  errorMessage: null,
  isRunning: false,
});

// Non-reactive — methods would break under a proxy.
let ediabasInstance: Ediabas | null = null;
let clientInstance: EdiabasClient | null = null;
let serialPort: WebSerialPortLike | null = null;
/**
 * Relative path of the SGBD currently loaded into `ediabasInstance` (or
 * `null` if no SGBD has been loaded yet on this instance). Used by
 * `runJob` to lazy-load / swap when the user picks a different file
 * from the sidebar without forcing a reconnect.
 */
let loadedSgbdName: string | null = null;

function setStatus(phase: ConnectionPhase, message: string): void {
  runtime.phase = phase;
  runtime.message = message;
}

function formatConnectedStatus(): string {
  const config = app.config;
  if (config.interface === "webserial") {
    const baud = config.serial?.baudRate;
    return baud ? `Connected · Web Serial @ ${baud}` : "Connected · Web Serial";
  }
  if (config.interface === "j2534") {
    return "Connected · J2534 (OpenPort 2.0)";
  }
  if (config.interface === "gateway") {
    const url = config.gateway?.url?.trim();
    return url ? `Connected · Gateway · ${url}` : "Connected · Gateway";
  }
  return `Connected · ${config.interface}`;
}

// Minimal subset of navigator.serial used here — declared locally so the
// package doesn't need lib.dom-Serial typings active globally. At runtime
// `navigator.serial` is the real Web Serial API.
interface WebNavigatorSerial {
  requestPort(options?: { filters?: Array<{ usbVendorId?: number; usbProductId?: number }> }): Promise<WebSerialPortLike>;
  getPorts(): Promise<WebSerialPortLike[]>;
}

function getSerial(): WebNavigatorSerial | null {
  if (typeof navigator === "undefined") return null;
  const nav = navigator as unknown as { serial?: WebNavigatorSerial };
  return nav.serial ?? null;
}

export function isWebSerialSupported(): boolean {
  return getSerial() !== null;
}

// ---- Server log streaming state ----

export interface ServerLogEntry {
  level: string;
  category: string | null;
  msg: string;
  time: number;
}

const MAX_SERVER_LOGS = 1000;
export const serverLogs = $state<{ entries: ServerLogEntry[] }>({ entries: [] });

function handleServerNotification(method: string, params: unknown): void {
  if (method === "log" && params && typeof params === "object") {
    const p = params as ServerLogEntry;
    serverLogs.entries.push(p);
    if (serverLogs.entries.length > MAX_SERVER_LOGS) {
      serverLogs.entries.splice(0, serverLogs.entries.length - MAX_SERVER_LOGS);
    }
  }
}

export function clearServerLogs(): void {
  serverLogs.entries.length = 0;
}

// ---- Wire type → local type conversion ----

function wireTypeToLocal(wireType: string): EdiabasJobResult["type"] {
  switch (wireType) {
    case "integer": return "int";
    case "text": return "string";
    default: return wireType as EdiabasJobResult["type"];
  }
}

function convertClientResults(response: EdiabasJobResponse): EdiabasJobResult[][] {
  return response.sets.map((set) =>
    Object.values(set).map((entry: EdiabasResultEntry) => ({
      name: entry.name,
      type: wireTypeToLocal(entry.type),
      value: Array.isArray(entry.value) ? new Uint8Array(entry.value) : entry.value,
    })),
  );
}

// ---- Remote SGBD listing ----

export async function fetchRemoteSgbdList(): Promise<{ name: string; ext: string }[]> {
  if (!clientInstance) throw new Error("Not connected to server");
  return clientInstance.listSgbd();
}

export async function fetchRemoteJobs(ecu: string): Promise<{
  jobs: { name: string; comment?: string; argCount: number; resultCount: number }[];
  tableCount: number;
}> {
  if (!clientInstance) throw new Error("Not connected to server");
  return clientInstance.listJobs(ecu);
}

export async function fetchRemoteJobMetadata(ecu: string, job: string): Promise<{
  name: string;
  comment?: string;
  args: { name: string; type: string; comment?: string }[];
  results: { name: string; type: string; comment?: string }[];
}> {
  if (!clientInstance) throw new Error("Not connected to server");
  return clientInstance.getJobMetadata(ecu, job);
}

export async function fetchRemoteDisassembly(ecu: string, job: string): Promise<string[]> {
  if (!clientInstance) throw new Error("Not connected to server");
  const result = await clientInstance.disassembleJob(ecu, job);
  return result.lines;
}

/**
 * Build the Ediabas comm interface based on the wizard config. For the
 * webserial path this prompts the user with the browser's port picker
 * (must run inside a user gesture, which the Connect button click is).
 */
async function buildEdiabas(): Promise<Ediabas> {
  const config = app.config;

  let transport: SerialInterface | GatewayClient | J2534Interface;

  if (config.interface === "webserial") {
    const serial = getSerial();
    if (!serial) {
      throw new Error("Web Serial API not available — needs Chrome / Edge / Opera on desktop");
    }
    const port = await serial.requestPort();
    serialPort = port;
    const webTransport = new WebSerialTransport(port);
    // Use a plain SerialInterface with adapter probing disabled — Web
    // Serial doesn't have a working FTDI VCP shim, so the K+DCAN smart
    // adapter handshake can hang. The cable still works as a passthrough.
    const ifaceConfig = {
      port: "webserial",
      baudRate: config.serial?.baudRate ?? 9600,
      dataBits: (config.serial?.dataBits ?? 8) as 7 | 8,
      parity: (config.serial?.parity ?? "none") as "none" | "even" | "odd",
      stopBits: (config.serial?.stopBits ?? 1) as 1 | 2,
      timeoutMs: config.serial?.timeoutMs ?? 5000,
      probeAdapterOnConnect: false,
    };
    transport = new SerialInterface({
      ...ifaceConfig,
      transport: webTransport,
    });
  } else if (config.interface === "j2534") {
    // J2534 path: Tactrix OpenPort 2.0 via Web Serial. The j2534-webserial
    // transport handles its own port picker via `navigator.serial.requestPort`
    // inside `open()` — must be called from a user gesture, which the
    // Connect button click is.
    if (typeof navigator === "undefined" || !("serial" in navigator)) {
      throw new Error("Web Serial API not available — needs Chrome / Edge / Opera on desktop");
    }
    const j2534Transport = new J2534WebSerialTransport();
    // Initial protocol + baud are seed values for the J2534 channel
    // before the SGBD issues setCommParameter. DS2 @ 9600 covers the
    // E36/E39/E46 K-line ECUs the OpenPort is realistic for; the SGBD
    // reconfigures on first job dispatch anyway.
    transport = new J2534Interface({
      transport: { kind: "instance", transport: j2534Transport },
      protocol: "ds2",
      baudRate: 9600,
    });
  } else if (config.interface === "gateway") {
    const url = config.gateway?.url?.trim();
    if (!url) {
      throw new Error("Gateway URL is empty — set ws://host:port in the wizard");
    }
    if (!/^wss?:\/\//i.test(url)) {
      throw new Error("Gateway URL must start with ws:// or wss://");
    }
    transport = new GatewayClient({ transport: "websocket", url });
  } else {
    throw new Error(`Interface "${config.interface}" not supported in the web app`);
  }

  return new Ediabas({
    ecuPath: ".",
    transport: transport as unknown as EdiabasConfig["transport"],
    timeout: config.serial?.timeoutMs ?? 5000,
    /* Required for GRP→PRG variant resolution in the browser. Without
       this, swapToVariant falls into a node:fs path that's stubbed in
       the Vite bundle, silently catching the failure and leaving the
       loaded SGBD at the unresolved .grp. */
    loadSgbdResolver: resolveSgbdInInstall,
  });
}

/**
 * Establish a connection and load the currently-selected SGBD into a
 * fresh Ediabas instance. Idempotent — calling while already connected
 * is a no-op.
 */
/**
 * Open the configured interface — Web Serial or remote gateway — and
 * leave the Ediabas instance ready for `runJob` to lazy-load any
 * picked SGBD. Decoupled from SGBD selection so the user can connect
 * first, then browse the sidebar (or vice versa).
 */
export async function connect(): Promise<void> {
  if (runtime.phase === "connected" && (ediabasInstance || clientInstance)) return;

  if (app.config.mode === "client") {
    const isConnect = app.config.connectionMethod === "connect";

    if (isConnect && !app.connectSessionId) {
      app.showConnectSession = true;
      return;
    }
  }

  if (runtime.phase === "connecting") return;
  setStatus("connecting", "Connecting…");
  runtime.errorMessage = null;

  if (app.config.mode === "client") {
    const isConnect = app.config.connectionMethod === "connect";

    try {
      let c: EdiabasClient;

      if (isConnect && app.connectSessionId && app.connectToken) {
        const relayUrl = app.config.connectRelayUrl?.trim() || "wss://connect.bimmerz.app";
        const { dial } = await import("@emdzej/swsrs-client");
        const peer = await dial({
          relayURL: relayUrl,
          sessionId: app.connectSessionId,
          token: app.connectToken,
        });
        c = new EdiabasClient({
          transport: "websocket",
          socket: peer.socket,
          onNotification: handleServerNotification,
        });
      } else {
        const url = app.config.serverUrl?.trim();
        if (!url) throw new Error("Server URL is empty — set it in Settings");
        if (!/^wss?:\/\//i.test(url)) throw new Error("Server URL must start with ws:// or wss://");
        c = new EdiabasClient({
          transport: "websocket",
          url,
          onNotification: handleServerNotification,
        });
      }

      await c.init();
      await c.subscribeLogs(app.config.logging?.level ?? "info");
      clientInstance = c;
      loadedSgbdName = null;
      const label = app.connectSessionId ? "Bimmerz Connect" : `Server · ${app.config.serverUrl}`;
      setStatus("connected", `Connected · ${label}`);
    } catch (error) {
      clientInstance = null;
      setStatus("error", "Connect failed");
      runtime.errorMessage = error instanceof Error ? error.message : String(error);
    }
    return;
  }

  try {
    const e = await buildEdiabas();
    await e.connect();
    ediabasInstance = e;
    loadedSgbdName = null;
    setStatus("connected", formatConnectedStatus());
  } catch (error) {
    ediabasInstance = null;
    serialPort = null;
    setStatus("error", "Connect failed");
    runtime.errorMessage = error instanceof Error ? error.message : String(error);
  }
}

export async function disconnect(): Promise<void> {
  if (clientInstance) {
    try { await clientInstance.end(); } catch { /* tearing down */ }
    clientInstance = null;
  }
  if (ediabasInstance) {
    try { await ediabasInstance.disconnect(); } catch { /* tearing down */ }
    ediabasInstance = null;
  }
  if (serialPort) {
    serialPort = null;
  }
  loadedSgbdName = null;
  setStatus("disconnected", "Disconnected");
  runtime.errorMessage = null;
}

/**
 * Execute the named job with optional string params (same shape the CLI
 * accepts on the command line). Results land in `runtime.results` /
 * `runtime.resultsJobName` for the UI to render.
 */
export async function runJob(
  jobName: string,
  params: (string | Uint8Array)[] = [],
): Promise<void> {
  if (runtime.phase !== "connected") {
    runtime.errorMessage = "Not connected — click Connect first.";
    return;
  }
  if (!app.loadedFile) {
    runtime.errorMessage = "Pick a PRG/GRP from the sidebar first.";
    return;
  }
  if (runtime.isRunning) return;

  runtime.isRunning = true;
  runtime.errorMessage = null;
  runtime.results = null;
  runtime.resultsJobName = jobName;
  runtime.resultsExecMs = null;

  // Client mode — delegate to remote server
  if (app.config.mode === "client" && clientInstance) {
    const ecuName = app.loadedFile.name.replace(/\.(prg|grp)$/i, "");
    const startedAt = Date.now();
    try {
      const paramStr = params.map((p) =>
        p instanceof Uint8Array ? Array.from(p).map((b) => b.toString(16).padStart(2, "0")).join("") : String(p),
      ).join(";");
      const response = await clientInstance.job(ecuName, jobName, paramStr || undefined);
      runtime.results = convertClientResults(response);
      runtime.resultsExecMs = Date.now() - startedAt;
    } catch (error) {
      runtime.resultsExecMs = Date.now() - startedAt;
      runtime.errorMessage = error instanceof Error ? error.message : String(error);
    } finally {
      runtime.isRunning = false;
    }
    return;
  }

  // Embedded mode — local Ediabas
  if (!ediabasInstance) {
    runtime.errorMessage = "Not connected — click Connect first.";
    runtime.isRunning = false;
    return;
  }
  if (!app.prgBuffer) {
    runtime.errorMessage = "Pick a PRG/GRP from the sidebar first.";
    runtime.isRunning = false;
    return;
  }

  const currentName = app.loadedFile.relativePath;
  if (loadedSgbdName !== currentName) {
    try {
      ediabasInstance.loadSgbdFromBuffer(app.prgBuffer, currentName);
      loadedSgbdName = currentName;
    } catch (error) {
      runtime.errorMessage = error instanceof Error ? error.message : String(error);
      runtime.isRunning = false;
      return;
    }
  }

  const startedAt = Date.now();
  try {
    const sets = await ediabasInstance.executeJob(jobName, { params });
    runtime.results = sets;
    runtime.resultsExecMs = Date.now() - startedAt;
  } catch (error) {
    runtime.resultsExecMs = Date.now() - startedAt;
    runtime.errorMessage = error instanceof Error ? error.message : String(error);
  } finally {
    runtime.isRunning = false;
  }
}

/**
 * Clear the displayed run results so the panel collapses. Useful when
 * the user switches to a different job and wants a fresh slate.
 */
export function clearResults(): void {
  runtime.results = null;
  runtime.resultsJobName = null;
  runtime.resultsExecMs = null;
  runtime.errorMessage = null;
}
