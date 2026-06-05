import type {
  IEdiabas,
  EdiabasJobResponse,
  EdiabasResultType,
  EdiabasState,
} from "@emdzej/ediabasx-core";

export type EdiabasClientTransport = "tcp" | "websocket";

export interface EdiabasClientOptions {
  host?: string;
  port?: number;
  transport?: EdiabasClientTransport;
  url?: string;
  /** Pre-connected WebSocket (e.g. from a Bimmerz Connect relay). Skips internal socket creation. */
  socket?: WebSocket;
  onNotification?: (method: string, params: unknown) => void;
}

type JsonRpcId = number;

type JsonRpcResponse = {
  jsonrpc: "2.0";
  id: JsonRpcId | null;
  result?: unknown;
  error?: { code: number; message: string; data?: unknown };
};

type PendingRequest = {
  resolve: (value: unknown) => void;
  reject: (error: Error) => void;
};

interface ClientConnection {
  send(payload: string): void;
  close(): Promise<void>;
}

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 6802;

export class EdiabasClient implements IEdiabas {
  private readonly host: string;
  private readonly port: number;
  private readonly transport: EdiabasClientTransport;
  private readonly url?: string;
  private readonly externalSocket?: WebSocket;
  private readonly onNotification?: (method: string, params: unknown) => void;
  private connection?: ClientConnection;
  private nextId = 1;
  private pending = new Map<JsonRpcId, PendingRequest>();
  private connectPromise?: Promise<void>;

  private cachedResults: EdiabasJobResponse | null = null;
  private cachedState: EdiabasState = "ready";
  private cachedErrorCode = 0;
  private cachedErrorText = "";

  constructor(options: EdiabasClientOptions = {}) {
    this.host = options.host ?? DEFAULT_HOST;
    this.port = options.port ?? DEFAULT_PORT;
    this.transport = options.transport ?? "websocket";
    this.url = options.url;
    this.externalSocket = options.socket;
    this.onNotification = options.onNotification;
  }

  async init(): Promise<void> {
    await this.ensureConnection();
    await this.request("init");
    this.cachedResults = null;
    this.cachedState = "ready";
    this.cachedErrorCode = 0;
    this.cachedErrorText = "";
  }

  async end(): Promise<void> {
    try {
      if (this.connection) {
        await this.request("end");
      }
    } finally {
      try {
        await this.connection?.close();
      } catch { /* already gone */ }
      this.connection = undefined;
      this.cachedResults = null;
      this.cachedState = "ready";
      this.cachedErrorCode = 0;
      this.cachedErrorText = "";
    }
  }

  async job(
    ecu: string,
    jobName: string,
    params?: string | Uint8Array | (string | Uint8Array)[],
  ): Promise<EdiabasJobResponse> {
    /* Wire shape: legacy hosts (≤0.7.0) accept `params: string`
       (semicolon-joined). New hosts (≥0.7.1) accept either that
       form OR an array of `string | {binary: <base64>}` entries.
       Pick the array form whenever any binary entry is present —
       the server normalizes both. Pure-string calls keep emitting
       the legacy string so a 0.7.1 client can still talk to a
       0.7.0 server until the user upgrades both sides. */
    const list = normalizeClientParams(params);
    const wireParams = list.some((p) => p instanceof Uint8Array)
      ? list.map(encodeParamEntry)
      : list.length > 0
        ? list.join(";")
        : "";
    const result = await this.request<EdiabasJobResponse>("job", {
      ecu,
      job: jobName,
      params: wireParams,
    });
    this.cachedResults = result;
    this.cachedState = "ready";
    this.cachedErrorCode = 0;
    this.cachedErrorText = "";
    return result;
  }

  resultSets(): number {
    // Match C# `apiResultSets` / native EDIABAS: returns the **data**
    // set count, i.e. total length minus the system set at index 0.
    if (!this.cachedResults) return 0;
    const n = this.cachedResults.sets.length;
    return n > 0 ? n - 1 : 0;
  }

  resultText(name: string, set: number, _format?: string): string {
    const entry = this.cachedResults?.sets[set]?.[name];
    if (!entry) return "";
    if (Array.isArray(entry.value)) return `[${entry.value.length} bytes]`;
    return String(entry.value ?? "");
  }

  resultInt(name: string, set: number): number {
    const entry = this.cachedResults?.sets[set]?.[name];
    if (!entry) return 0;
    return typeof entry.value === "number" ? Math.trunc(entry.value) : 0;
  }

  resultReal(name: string, set: number): number {
    const entry = this.cachedResults?.sets[set]?.[name];
    if (!entry) return 0;
    return typeof entry.value === "number" ? entry.value : 0;
  }

  resultBinary(name: string, set: number): number[] {
    const entry = this.cachedResults?.sets[set]?.[name];
    if (!entry || !Array.isArray(entry.value)) return [];
    return entry.value;
  }

  resultFormat(name: string, set: number): EdiabasResultType | undefined {
    return this.cachedResults?.sets[set]?.[name]?.type;
  }

  state(): EdiabasState {
    return this.cachedState;
  }

  /**
   * Abort the in-flight job on the server. Sends a `break` JSON-RPC
   * request which the server dispatches inline (bypassing its
   * request queue) and forwards to the underlying `Ediabas.break()`.
   * The server's `job` call then rejects with `EDIABAS_BIP_0008`
   * once the interpreter reaches its next instruction boundary —
   * which surfaces here as that same rejection on the pending
   * `client.job(...)` promise.
   *
   * Cooperative cancel: an `xrecv` already in flight on the server
   * unwinds only when its timeout fires, so there's a worst-case
   * latency of `interface.timeoutMs` before the break takes effect.
   */
  async break(): Promise<void> {
    await this.request("break");
    this.cachedState = "break";
  }

  errorCode(): number {
    return this.cachedErrorCode;
  }

  errorText(): string {
    return this.cachedErrorText;
  }

  async info(): Promise<{
    connected: boolean;
    clients: number;
    host: string;
    port: number;
    transport: string;
    sgbdPath: string;
  }> {
    return this.request("info");
  }

  async listSgbd(): Promise<{ name: string; ext: string }[]> {
    const result = await this.request<{ sgbds: { name: string; ext: string }[] }>("listSgbd");
    return result.sgbds;
  }

  async listJobs(ecu: string): Promise<{
    jobs: { name: string; comment?: string; argCount: number; resultCount: number }[];
    tableCount: number;
  }> {
    return this.request("listJobs", { ecu });
  }

  async getJobMetadata(ecu: string, job: string): Promise<{
    name: string;
    comment?: string;
    args: { name: string; type: string; comment?: string }[];
    results: { name: string; type: string; comment?: string }[];
  }> {
    return this.request("getJobMetadata", { ecu, job });
  }

  async disassembleJob(ecu: string, job: string): Promise<{ lines: string[] }> {
    return this.request("disassembleJob", { ecu, job });
  }

  async subscribeLogs(level: string = "info"): Promise<void> {
    await this.request("log.subscribe", { level });
  }

  async unsubscribeLogs(): Promise<void> {
    await this.request("log.unsubscribe");
  }

  // ---- Transport ----

  private async ensureConnection(): Promise<void> {
    if (this.connection) return;
    if (this.connectPromise) return this.connectPromise;

    this.connectPromise = (this.transport === "tcp"
      ? this.connectTcp()
      : this.connectWebSocket()
    ).finally(() => { this.connectPromise = undefined; });

    return this.connectPromise;
  }

  private async connectTcp(): Promise<void> {
    const { createConnection } = await import("node:net");

    return new Promise<void>((resolve, reject) => {
      let buffer = "";
      const socket = createConnection(this.port, this.host, () => {
        const conn: ClientConnection = {
          send: (payload) => {
            if (!socket.destroyed) socket.write(`${payload}\n`);
          },
          close: () =>
            new Promise<void>((res) => {
              if (socket.destroyed) { res(); return; }
              socket.end(() => { socket.destroy(); res(); });
            }),
        };

        socket.on("data", (chunk) => {
          buffer += chunk.toString("utf8");
          let idx = buffer.indexOf("\n");
          while (idx >= 0) {
            const line = buffer.slice(0, idx).trim();
            buffer = buffer.slice(idx + 1);
            if (line) this.handleLine(line);
            idx = buffer.indexOf("\n");
          }
        });
        socket.on("error", (err) => this.handleTransportError(err));
        socket.on("close", () => this.handleTransportClose());

        this.connection = conn;
        resolve();
      });

      socket.on("error", (err) => {
        if (!this.connection) reject(err);
      });
    });
  }

  private connectWebSocket(): Promise<void> {
    if (this.externalSocket) return this.attachExternalSocket(this.externalSocket);

    const url = this.url ?? `ws://${this.host}:${this.port}`;

    const WS: typeof WebSocket | undefined = (globalThis as { WebSocket?: typeof WebSocket }).WebSocket;
    if (!WS) {
      return Promise.reject(
        new Error("EdiabasClient: no global WebSocket available. Node 22+ required for WebSocket transport."),
      );
    }

    return new Promise<void>((resolve, reject) => {
      const ws = new WS(url);
      ws.binaryType = "arraybuffer";

      const conn: ClientConnection = {
        send: (payload) => {
          if (ws.readyState === ws.OPEN) ws.send(payload);
        },
        close: () =>
          new Promise<void>((res) => {
            if (ws.readyState === ws.CLOSED) { res(); return; }
            const onClose = () => { ws.removeEventListener("close", onClose); res(); };
            ws.addEventListener("close", onClose);
            try { ws.close(); } catch { res(); }
          }),
      };

      ws.addEventListener("open", () => {
        this.connection = conn;
        resolve();
      });

      ws.addEventListener("message", (event: MessageEvent) => {
        const data = event.data;
        const text = typeof data === "string"
          ? data
          : new TextDecoder().decode(new Uint8Array(data as ArrayBuffer));
        const line = text.trim();
        if (line) this.handleLine(line);
      });

      ws.addEventListener("error", () => {
        if (!this.connection) {
          reject(new Error("EdiabasClient: WebSocket connection failed"));
        } else {
          this.handleTransportError(new Error("WebSocket error"));
        }
      });

      ws.addEventListener("close", () => this.handleTransportClose());
    });
  }

  private attachExternalSocket(ws: WebSocket): Promise<void> {
    ws.binaryType = "arraybuffer";

    const conn: ClientConnection = {
      send: (payload) => {
        if (ws.readyState === ws.OPEN) ws.send(payload);
      },
      close: () =>
        new Promise<void>((res) => {
          if (ws.readyState === ws.CLOSED) { res(); return; }
          const onClose = () => { ws.removeEventListener("close", onClose); res(); };
          ws.addEventListener("close", onClose);
          try { ws.close(); } catch { res(); }
        }),
    };

    ws.addEventListener("message", (event: MessageEvent) => {
      const data = event.data;
      const text = typeof data === "string"
        ? data
        : new TextDecoder().decode(new Uint8Array(data as ArrayBuffer));
      const line = text.trim();
      if (line) this.handleLine(line);
    });

    ws.addEventListener("error", () => {
      this.handleTransportError(new Error("WebSocket error"));
    });

    ws.addEventListener("close", () => this.handleTransportClose());

    this.connection = conn;
    return Promise.resolve();
  }

  // ---- JSON-RPC plumbing ----

  private handleLine(line: string): void {
    let payload: JsonRpcResponse | null = null;
    try { payload = JSON.parse(line) as JsonRpcResponse; } catch { return; }
    if (!payload) return;

    // Server-initiated notification (no id, has method)
    const msg = payload as unknown as Record<string, unknown>;
    if ((msg.id === null || msg.id === undefined) && typeof msg.method === "string") {
      this.onNotification?.(msg.method, msg.params);
      return;
    }
    if (payload.id === null || payload.id === undefined) return;

    const pending = this.pending.get(payload.id);
    if (!pending) return;
    this.pending.delete(payload.id);

    if (payload.error) {
      this.cachedState = "error";
      this.cachedErrorCode = payload.error.code;
      this.cachedErrorText = payload.error.message;
      const err = new Error(payload.error.message);
      (err as Error & { code?: number; data?: unknown }).code = payload.error.code;
      (err as Error & { data?: unknown }).data = payload.error.data;
      pending.reject(err);
      return;
    }

    pending.resolve(payload.result);
  }

  private handleTransportError(error: Error): void {
    for (const p of this.pending.values()) p.reject(error);
    this.pending.clear();
  }

  private handleTransportClose(): void {
    const error = new Error("EdiabasX server connection closed");
    for (const p of this.pending.values()) p.reject(error);
    this.pending.clear();
    this.connection = undefined;
  }

  private async request<T = unknown>(method: string, params?: unknown): Promise<T> {
    await this.ensureConnection();
    const conn = this.connection;
    if (!conn) throw new Error("EdiabasX server connection not available");

    const id = this.nextId++;
    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve: resolve as (v: unknown) => void, reject });
      conn.send(JSON.stringify({ jsonrpc: "2.0", id, method, params }));
    });
  }
}

/**
 * Mirror of `EmbeddedEdiabas`'s `normalizeParams`. Lives here so the
 * client doesn't pull on `@emdzej/ediabasx-client/embedded-ediabas`'s
 * inner Ediabas class (and its Node-only `node:fs` deps) when used in
 * a browser bundle. Exported for the JSON-RPC round-trip test only.
 */
export function normalizeClientParams(
  params: string | Uint8Array | (string | Uint8Array)[] | undefined,
): (string | Uint8Array)[] {
  if (params === undefined) return [];
  if (typeof params === "string") return params.length > 0 ? params.split(";") : [];
  if (params instanceof Uint8Array) return [params];
  return params;
}

/**
 * Encode one param entry for the JSON-RPC wire. Strings pass through
 * unchanged so a mixed-channel call reads naturally on the server
 * (`["abc", {binary: "..."}, "xyz"]`); `Uint8Array` becomes a tagged
 * `{binary: <base64>}` object — base64 because JSON has no binary
 * literal and we don't want to rely on `Buffer` (which doesn't exist
 * in browsers). Matches the decode in `ediabas-server.ts.handleJob`.
 * Exported so the symmetry test can drive it directly.
 */
export function encodeParamEntry(entry: string | Uint8Array): string | { binary: string } {
  if (typeof entry === "string") return entry;
  return { binary: bytesToBase64(entry) };
}

/**
 * `btoa` works on Latin-1 strings, not byte arrays — feeding raw
 * UTF-16 chars from a Uint8Array via String.fromCharCode is the
 * standard idiom. Node 16+ also has `btoa` as a global. Avoids
 * `Buffer` so the same code runs in browsers without polyfill.
 */
function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  /* Chunk to keep `String.fromCharCode(...spread)` below the V8 / JSC
     arg-count limit (~65k). 8 KiB is comfortably under the 0xffff
     ceiling and small enough to avoid a temporary copy of the buffer. */
  const chunk = 8192;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunk)),
    );
  }
  return btoa(binary);
}
