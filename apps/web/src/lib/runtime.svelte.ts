// Runtime state for the Jobs view: connection lifecycle (Web Serial /
// simulation / remote server), the IEdiabas instance, and the most
// recent run's results.
//
// Non-reactive plumbing (the IEdiabas instance, the granted SerialPort)
// lives in module-scoped `let` bindings — wrapping them with
// `$state(...)` would proxy their methods, which breaks the
// interpreter's internal `this` references. Only the UI-visible fields
// are in `$state`.
//
// Unified `IEdiabas` surface: both embedded (EmbeddedEdiabas wrapping a
// local Ediabas) and client (EdiabasClient over JSON-RPC) implement
// the same interface. `instance: IEdiabas | null` is the single source
// of truth — `connect()` picks which concrete implementation to build
// based on `app.config.mode`, `runJob` calls `instance.job(...)`
// uniformly.

import type { EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { EdiabasClient, EmbeddedEdiabas } from "@emdzej/ediabasx-client/client";
import type { IEdiabas, EdiabasJobResponse, EdiabasResultEntry } from "@emdzej/ediabasx-core";
import { GatewayClient } from "@emdzej/ediabasx-interfaces/client";
import {
  SerialInterface,
  WebSerialTransport,
  type WebSerialPortLike,
} from "@emdzej/ediabasx-interface-serial";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";
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
/**
 * The active IEdiabas implementation — either `EmbeddedEdiabas` (local
 * cable / simulation) or `EdiabasClient` (remote server via direct
 * WebSocket or Bimmerz Connect relay). `runJob` uses this uniformly
 * regardless of mode.
 */
let instance: IEdiabas | null = null;
/**
 * Same pointer as `instance` when mode is "client", `null` otherwise.
 * Some accessors (`listSgbd` / `listJobs` / `getJobMetadata` /
 * `disassembleJob` / `subscribeLogs`) are EdiabasClient-only — they
 * sit above the IEdiabas surface for server introspection. Keep a
 * typed handle so the UI's remote-sidebar paths don't have to type-
 * test `instance`.
 */
let clientInstance: EdiabasClient | null = null;

function setStatus(phase: ConnectionPhase, message: string): void {
  runtime.phase = phase;
  runtime.message = message;
}

/**
 * Render the device descriptor for the embedded path — just the
 * device, not the "Connected" prefix (the caller adds that uniformly
 * via `Connected: <device|url|bimmerzconnect>`).
 */
function describeEmbeddedDevice(): string {
  const config = app.config;
  if (config.interface === "webserial") {
    const baud = config.serial?.baudRate;
    return baud ? `Web Serial @ ${baud}` : "Web Serial";
  }
  if (config.interface === "j2534") {
    return "J2534 (OpenPort 2.0)";
  }
  if (config.interface === "gateway") {
    const url = config.gateway?.url?.trim();
    return url ? `Gateway · ${url}` : "Gateway";
  }
  return config.interface;
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
 * Build the EDIABAS communication interface based on the wizard
 * config. For the webserial path this prompts the user with the
 * browser's port picker (must run inside a user gesture, which the
 * Connect button click is). Returns an `EdiabasInterface` subclass.
 */
async function buildInterface(): Promise<EdiabasInterface> {
  const config = app.config;

  if (config.interface === "webserial") {
    const serial = getSerial();
    if (!serial) {
      throw new Error("Web Serial API not available — needs Chrome / Edge / Opera on desktop");
    }
    const port = await serial.requestPort();
    const webTransport = new WebSerialTransport(port);
    // Use a plain SerialInterface with adapter probing disabled — Web
    // Serial doesn't have a working FTDI VCP shim, so the K+DCAN smart
    // adapter handshake can hang. The cable still works as a passthrough.
    return new SerialInterface({
      port: "webserial",
      baudRate: config.serial?.baudRate ?? 9600,
      dataBits: (config.serial?.dataBits ?? 8) as 7 | 8,
      parity: (config.serial?.parity ?? "none") as "none" | "even" | "odd",
      stopBits: (config.serial?.stopBits ?? 1) as 1 | 2,
      timeoutMs: config.serial?.timeoutMs ?? 5000,
      probeAdapterOnConnect: false,
      transport: webTransport,
    });
  }

  if (config.interface === "j2534") {
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
    return new J2534Interface({
      transport: { kind: "instance", transport: j2534Transport },
      protocol: "ds2",
      baudRate: 9600,
    });
  }

  if (config.interface === "gateway") {
    const url = config.gateway?.url?.trim();
    if (!url) {
      throw new Error("Gateway URL is empty — set ws://host:port in the wizard");
    }
    if (!/^wss?:\/\//i.test(url)) {
      throw new Error("Gateway URL must start with ws:// or wss://");
    }
    /* GatewayClient is an EdiabasInterface — the type assertion is
       only because of inferred narrowing across packages, not a real
       shape mismatch. */
    return new GatewayClient({ transport: "websocket", url }) as unknown as EdiabasInterface;
  }

  throw new Error(`Interface "${config.interface}" not supported in the web app`);
}

/**
 * Build the EmbeddedEdiabas wrapper around the configured interface.
 * Returns an `IEdiabas` — same shape as `EdiabasClient`, so `runJob`
 * doesn't care which mode it's in.
 */
async function buildEmbedded(): Promise<EmbeddedEdiabas> {
  const iface = await buildInterface();
  const config = app.config;
  return new EmbeddedEdiabas({
    /* No on-disk lookup in the browser — `loadSgbdResolver` does all
       resolution from the install catalogue. `sgbdPath` is unused
       (kept as a placeholder for parity with the option's required
       shape). */
    sgbdPath: ".",
    interface: iface,
    timeout: config.serial?.timeoutMs ?? 5000,
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
  if (runtime.phase === "connected" && instance) return;

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

  try {
    let next: IEdiabas;
    let label: string;

    if (app.config.mode === "client") {
      /* Remote server — pick direct WebSocket or Bimmerz Connect
         relay based on the user's choice in Settings. Both produce
         an EdiabasClient implementing IEdiabas. */
      const isConnect = app.config.connectionMethod === "connect";
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
        label = "Bimmerz Connect";
      } else {
        const url = app.config.serverUrl?.trim();
        if (!url) throw new Error("Server URL is empty — set it in Settings");
        if (!/^wss?:\/\//i.test(url)) throw new Error("Server URL must start with ws:// or wss://");
        c = new EdiabasClient({
          transport: "websocket",
          url,
          onNotification: handleServerNotification,
        });
        /* Direct server — surface the URL so the user can see which
           endpoint they're actually talking to (matters when one
           machine hosts multiple ediabasx-servers on different
           ports). */
        label = url;
      }

      await c.init();
      /* `subscribeLogs` is EdiabasClient-only (server log streaming
         doesn't belong on the IEdiabas surface — it's a server
         observability concern). Call it on the typed client before
         we widen back to IEdiabas. */
      await c.subscribeLogs(app.config.logging?.level ?? "info");
      clientInstance = c;
      next = c;
    } else {
      /* Local — EmbeddedEdiabas around a Web Serial / J2534 / Gateway
         interface. Same IEdiabas surface as the remote path. */
      const eb = await buildEmbedded();
      await eb.init();
      next = eb;
      label = describeEmbeddedDevice();
    }

    instance = next;
    /* Unified format — `Connected: <device|url|bimmerzconnect>`. The
       device descriptor for embedded mode is e.g. "Web Serial @ 9600",
       for direct server it's the ws:// URL, for Bimmerz Connect it's
       the literal "Bimmerz Connect" string. */
    setStatus("connected", `Connected: ${label}`);
  } catch (error) {
    instance = null;
    clientInstance = null;
    setStatus("error", "Connect failed");
    runtime.errorMessage = error instanceof Error ? error.message : String(error);
  }
}

export async function disconnect(): Promise<void> {
  if (instance) {
    try { await instance.end(); } catch { /* tearing down */ }
    instance = null;
  }
  clientInstance = null;
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
  if (runtime.phase !== "connected" || !instance) {
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

  /* Unified IEdiabas path — same call regardless of mode:
     • Embedded: EmbeddedEdiabas.job() runs `loadSgbd` via our
       `loadSgbdResolver` (reads bytes from `app.install.sgbds[]`),
       then executes the bytecode locally.
     • Client: EdiabasClient.job() sends a JSON-RPC request; the
       server resolves the SGBD from its `sgbdPath` and runs the
       job there. */
  const ecuName = app.loadedFile.name;
  const paramStr = params
    .map((p) =>
      p instanceof Uint8Array
        ? Array.from(p).map((b) => b.toString(16).padStart(2, "0")).join("")
        : String(p),
    )
    .join(";");

  const startedAt = Date.now();
  try {
    const response = await instance.job(ecuName, jobName, paramStr || undefined);
    runtime.results = convertClientResults(response);
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
