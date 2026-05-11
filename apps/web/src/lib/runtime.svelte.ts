// Runtime state for the Jobs view: connection lifecycle (Web Serial /
// simulation), the Ediabas instance, and the most recent run's results.
//
// Non-reactive plumbing (the `Ediabas` class instance, the granted
// SerialPort) lives in module-scoped `let` bindings — wrapping them with
// `$state(...)` would proxy their methods, which breaks the interpreter's
// internal `this` references. Only the UI-visible fields are in `$state`.

import { Ediabas, type EdiabasConfig, type EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { SimulationInterface } from "@emdzej/ediabasx-interface-base";
import {
  SerialInterface,
  WebSerialTransport,
  type WebSerialPortLike,
} from "@emdzej/ediabasx-interface-serial";
import { state as app } from "./app.svelte";

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
let serialPort: WebSerialPortLike | null = null;

function setStatus(phase: ConnectionPhase, message: string): void {
  runtime.phase = phase;
  runtime.message = message;
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

/**
 * Build the Ediabas comm interface based on the wizard config. For the
 * webserial path this prompts the user with the browser's port picker
 * (must run inside a user gesture, which the Connect button click is).
 */
async function buildEdiabas(): Promise<Ediabas> {
  const config = app.config;

  let transport: SimulationInterface | SerialInterface | undefined;

  if (config.interface === "simulation") {
    transport = new SimulationInterface();
  } else if (config.interface === "webserial") {
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
  } else {
    throw new Error(`Interface "${config.interface}" not supported in the web app`);
  }

  return new Ediabas({
    ecuPath: ".",
    transport: transport as unknown as EdiabasConfig["transport"],
    simulation: config.interface === "simulation",
    timeout: config.serial?.timeoutMs ?? 5000,
    logging: false,
  });
}

/**
 * Establish a connection and load the currently-selected SGBD into a
 * fresh Ediabas instance. Idempotent — calling while already connected
 * is a no-op.
 */
export async function connect(): Promise<void> {
  if (runtime.phase === "connecting") return;
  if (runtime.phase === "connected" && ediabasInstance) return;
  if (!app.prgBuffer || !app.loadedFile) {
    setStatus("error", "No SGBD loaded");
    runtime.errorMessage = "Pick a PRG/GRP file before connecting.";
    return;
  }

  setStatus("connecting", "Connecting…");
  runtime.errorMessage = null;
  try {
    const e = await buildEdiabas();
    e.loadSgbdFromBuffer(app.prgBuffer, app.loadedFile.relativePath);
    await e.connect();
    ediabasInstance = e;
    setStatus(
      "connected",
      `Connected · ${app.config.interface}` +
        (app.config.interface === "webserial" && app.config.serial?.baudRate
          ? ` @ ${app.config.serial.baudRate}`
          : "")
    );
  } catch (error) {
    ediabasInstance = null;
    serialPort = null;
    setStatus("error", "Connect failed");
    runtime.errorMessage = error instanceof Error ? error.message : String(error);
  }
}

export async function disconnect(): Promise<void> {
  if (ediabasInstance) {
    try {
      await ediabasInstance.disconnect();
    } catch {
      /* ignore — we're tearing down anyway */
    }
    ediabasInstance = null;
  }
  if (serialPort) {
    // SerialInterface.disconnect() above closes the WebSerial port via its
    // transport, but null the local handle to release any references.
    serialPort = null;
  }
  setStatus("disconnected", "Disconnected");
  runtime.errorMessage = null;
}

/**
 * Execute the named job with optional string params (same shape the CLI
 * accepts on the command line). Results land in `runtime.results` /
 * `runtime.resultsJobName` for the UI to render.
 */
export async function runJob(jobName: string, params: string[] = []): Promise<void> {
  if (!ediabasInstance || runtime.phase !== "connected") {
    runtime.errorMessage = "Not connected — click Connect first.";
    return;
  }
  if (runtime.isRunning) return;

  runtime.isRunning = true;
  runtime.errorMessage = null;
  runtime.results = null;
  runtime.resultsJobName = jobName;
  runtime.resultsExecMs = null;

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
