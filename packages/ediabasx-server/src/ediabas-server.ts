import { readFileSync, readdirSync } from "node:fs";
import { createServer as createHttpServer, type Server as HttpServer } from "node:http";
import { createServer as createTcpServer, type Server as NetServer, type Socket } from "node:net";
import { WebSocketServer, type WebSocket } from "ws";

import { parsePrg, disassembleJob, formatInstruction } from "@emdzej/ediabasx-best-parser";
import type { PrgFile, PrgArg, PrgResult } from "@emdzej/ediabasx-best-parser";
import { Ediabas, type EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";
import { resolveSgbd } from "@emdzej/ediabasx-host-config";
import {
  configureLogger,
  multiSink,
  consoleSink,
  levelPasses,
  type Sink,
  type LogRecord,
  type LogLevel,
} from "@emdzej/bimmerz-logger";
import type {
  EdiabasResultType,
  EdiabasResultEntry,
  EdiabasResultSet,
  EdiabasJobResponse,
  EdiabasState,
} from "@emdzej/ediabasx-core";

export type EdiabasServerTransport = "tcp" | "websocket";

export interface EdiabasServerOptions {
  host?: string;
  port?: number;
  transport?: EdiabasServerTransport;
  sgbdPath: string;
  interface: EdiabasInterface;
  logger?: EdiabasServerLogger;
}

export interface EdiabasServerLogger {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
}

type JsonRpcId = string | number | null;

interface JsonRpcRequest {
  jsonrpc: "2.0";
  method: string;
  params?: unknown;
  id?: JsonRpcId;
}

interface ClientChannel {
  send(payload: string): void;
  close(): void;
  isOpen(): boolean;
}

const JSON_RPC_ERRORS = {
  parseError: { code: -32700, message: "Parse error" },
  invalidRequest: { code: -32600, message: "Invalid Request" },
  methodNotFound: { code: -32601, message: "Method not found" },
  invalidParams: { code: -32602, message: "Invalid params" },
  internalError: { code: -32603, message: "Internal error" },
  serverError: { code: -32000, message: "Server error" },
};

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 6802;

export class EdiabasServer {
  private readonly host: string;
  private port: number;
  private readonly transport: EdiabasServerTransport;
  private readonly sgbdPath: string;
  private readonly iface: EdiabasInterface;
  private readonly logger: EdiabasServerLogger;

  private ediabas: Ediabas | null = null;
  /**
   * Tracks the SGBD currently loaded into the shared `Ediabas` so
   * `handleJob` can skip a redundant `loadSgbd` when the same ECU is
   * targeted by consecutive jobs. Without this, every job would reset
   * `initialized` / `identRan` / `systemResults` inside `Ediabas` and
   * force INITIALISIERUNG + IDENT to re-run against the ECU — exactly
   * what the persistent-instance contract is supposed to avoid.
   */
  private loadedSgbdPath: string | null = null;
  private lastResults: EdiabasJobResult[][] = [];
  private lastError: { code: number; text: string } = { code: 0, text: "" };
  private currentState: EdiabasState = "ready";

  private tcpServer?: NetServer;
  private httpServer?: HttpServer;
  private wsServer?: WebSocketServer;
  private channels = new Set<ClientChannel>();
  private logSubscriptions = new Map<ClientChannel, LogLevel>();
  private queue: Promise<void> = Promise.resolve();
  private shuttingDown = false;
  private broadcastSinkInstalled = false;

  constructor(options: EdiabasServerOptions) {
    this.host = options.host ?? DEFAULT_HOST;
    this.port = options.port ?? DEFAULT_PORT;
    this.transport = options.transport ?? "websocket";
    this.sgbdPath = options.sgbdPath;
    this.iface = options.interface;
    this.logger = options.logger ?? console;
  }

  get address(): { host: string; port: number } {
    return { host: this.host, port: this.port };
  }

  get clientCount(): number {
    return this.channels.size;
  }

  async start(): Promise<void> {
    if (this.tcpServer || this.httpServer) return;

    if (this.transport === "tcp") {
      await this.startTcp();
    } else {
      await this.startWebSocket();
    }

    this.ensureBroadcastSink();

    this.logger.info(
      `EdiabasX server listening on ${this.host}:${this.port} (transport=${this.transport})`,
    );
    this.bindSignalHandlers();
  }

  async stop(): Promise<void> {
    if (this.shuttingDown) return;
    if (!this.tcpServer && !this.httpServer && this.channels.size === 0) return;
    this.shuttingDown = true;
    this.logger.info("EdiabasX server shutting down");

    for (const channel of this.channels) channel.close();
    this.channels.clear();

    if (this.ediabas) {
      try {
        await this.ediabas.disconnect();
      } catch { /* best effort */ }
      this.ediabas = null;
      this.loadedSgbdPath = null;
    }

    if (this.wsServer) {
      await new Promise<void>((r) => this.wsServer!.close(() => r()));
      this.wsServer = undefined;
    }
    if (this.httpServer) {
      await new Promise<void>((r) => this.httpServer!.close(() => r()));
      this.httpServer = undefined;
    }
    if (this.tcpServer) {
      await new Promise<void>((r) => this.tcpServer!.close(() => r()));
      this.tcpServer = undefined;
    }

    this.shuttingDown = false;
  }

  // ---- Transport setup (mirrors gateway-server pattern) ----

  private async startTcp(): Promise<void> {
    this.tcpServer = createTcpServer((socket) => this.attachTcpSocket(socket));
    const server = this.tcpServer;
    await new Promise<void>((resolve, reject) => {
      const onError = (err: Error) => reject(err);
      server.on("error", onError);
      server.listen(this.port, this.host, () => {
        server.removeListener("error", onError);
        resolve();
      });
    });
    const addr = server.address();
    if (addr && typeof addr === "object") this.port = addr.port;
  }

  private async startWebSocket(): Promise<void> {
    this.httpServer = createHttpServer((_req, res) => {
      res.statusCode = 426;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Upgrade", "websocket");
      res.end("ediabasx server — WebSocket clients only.\n");
    });
    this.wsServer = new WebSocketServer({ server: this.httpServer });
    this.wsServer.on("connection", (ws) => this.attachWebSocket(ws));

    const httpServer = this.httpServer;
    await new Promise<void>((resolve, reject) => {
      const onError = (err: Error) => reject(err);
      httpServer.on("error", onError);
      httpServer.listen(this.port, this.host, () => {
        httpServer.removeListener("error", onError);
        resolve();
      });
    });
    const addr = httpServer.address();
    if (addr && typeof addr === "object") this.port = addr.port;
  }

  // ---- Per-connection adapters ----

  /**
   * Attach a standard (globalThis) WebSocket as a client channel.
   * Used for relay-mediated connections where the WebSocket is already
   * established externally (e.g. via swsrs/Bimmerz Connect).
   */
  attachStandardWebSocket(ws: InstanceType<typeof globalThis.WebSocket>): void {
    const OPEN = 1;
    const channel: ClientChannel = {
      send: (payload) => { if (ws.readyState === OPEN) ws.send(payload); },
      close: () => { try { ws.close(); } catch { /* */ } },
      isOpen: () => ws.readyState === OPEN,
    };
    this.registerChannel(channel, "Relay");

    ws.addEventListener("message", (event: MessageEvent) => {
      const data = event.data;
      const text = typeof data === "string"
        ? data
        : new TextDecoder().decode(new Uint8Array(data as ArrayBuffer));
      const line = text.trim();
      if (line) this.handleMessage(channel, line);
    });
    ws.addEventListener("close", () => this.unregisterChannel(channel, "Relay"));
    ws.addEventListener("error", () => {
      this.logger.error("Relay websocket error");
      try { ws.close(); } catch { /* */ }
    });
  }

  private attachTcpSocket(socket: Socket): void {
    const channel: ClientChannel = {
      send: (payload) => { if (!socket.destroyed) socket.write(`${payload}\n`); },
      close: () => { socket.end(); socket.destroy(); },
      isOpen: () => !socket.destroyed,
    };
    this.registerChannel(channel);

    let buffer = "";
    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      let idx = buffer.indexOf("\n");
      while (idx >= 0) {
        const line = buffer.slice(0, idx).trim();
        buffer = buffer.slice(idx + 1);
        if (line) this.handleMessage(channel, line);
        idx = buffer.indexOf("\n");
      }
    });
    socket.on("close", () => this.unregisterChannel(channel));
    socket.on("error", (err) => {
      this.logger.error(`Client socket error: ${err.message}`);
      socket.destroy();
    });
  }

  private attachWebSocket(ws: WebSocket): void {
    const channel: ClientChannel = {
      send: (payload) => { if (ws.readyState === ws.OPEN) ws.send(payload); },
      close: () => { try { ws.close(); } catch { /* */ } },
      isOpen: () => ws.readyState === ws.OPEN,
    };
    this.registerChannel(channel);

    ws.on("message", (data) => {
      const text = typeof data === "string" ? data : data.toString("utf8");
      const line = text.trim();
      if (line) this.handleMessage(channel, line);
    });
    ws.on("close", () => this.unregisterChannel(channel));
    ws.on("error", (err: Error) => {
      this.logger.error(`Client websocket error: ${err.message}`);
      try { ws.terminate(); } catch { /* */ }
    });
  }

  private registerChannel(channel: ClientChannel, label = "Client"): void {
    this.channels.add(channel);
    this.logger.info(`${label} connected (${this.channels.size} total)`);
  }

  private unregisterChannel(channel: ClientChannel, label = "Client"): void {
    this.logSubscriptions.delete(channel);
    if (this.channels.delete(channel)) {
      this.logger.info(`${label} disconnected (${this.channels.size} total)`);
    }
  }

  // ---- JSON-RPC dispatch ----

  private handleMessage(channel: ClientChannel, line: string): void {
    let request: unknown;
    try {
      request = JSON.parse(line);
    } catch {
      this.sendError(channel, null, JSON_RPC_ERRORS.parseError);
      return;
    }

    if (!this.isValidRequest(request)) {
      this.sendError(channel, (request as { id?: JsonRpcId })?.id ?? null, JSON_RPC_ERRORS.invalidRequest);
      return;
    }

    const req = request as JsonRpcRequest;
    const id = req.id ?? null;

    /* `break` is the one method that MUST bypass the queue. Native
       EDIABAS `apiBreak` aborts the currently-running job — if we
       queue it behind that job's `handleJob` enqueue slot, the break
       only fires after the job it's trying to interrupt finishes,
       which defeats the point. Dispatch inline. Other read-only
       accessors (`state`, `errorCode`, `errorText`) still queue —
       they observe state set by `handleJob`, so serialising them
       keeps the snapshot consistent. */
    if (req.method === "break") {
      try {
        const result = this.handleBreakInline();
        if (id !== null) this.sendResult(channel, id, result);
      } catch (error) {
        if (id !== null) this.sendError(channel, id, JSON_RPC_ERRORS.serverError, error);
      }
      return;
    }

    if (req.id === undefined) {
      void this.enqueue(async () => {
        try { await this.execute(req, channel); } catch { /* notification — fire and forget */ }
      });
      return;
    }

    void this.enqueue(async () => {
      try {
        const result = await this.execute(req, channel);
        this.sendResult(channel, id, result);
      } catch (error) {
        this.sendError(channel, id, JSON_RPC_ERRORS.serverError, error);
      }
    });
  }

  /**
   * Synchronous break — forwards to `Ediabas.break()` which marks the
   * in-flight interpreter for cancellation. Called inline from
   * `handleMessage` (bypasses {@link enqueue}). The in-flight
   * `handleJob` will see the break flag at its next interpreter step
   * and reject the user's `job` call with `EDIABAS_BIP_0008`.
   */
  private handleBreakInline(): { ok: true } {
    this.ediabas?.break();
    this.currentState = "break";
    return { ok: true };
  }

  private enqueue(task: () => Promise<void | unknown>): Promise<void | unknown> {
    const next = this.queue.then(() => task(), () => task());
    this.queue = next.then(() => undefined, () => undefined);
    return next;
  }

  private async execute(request: JsonRpcRequest, channel: ClientChannel): Promise<unknown> {
    const p = (request.params ?? {}) as Record<string, unknown>;

    switch (request.method) {
      case "init":
        return this.handleInit();
      case "end":
        return this.handleEnd();
      case "job":
        return this.handleJob(p);
      case "listSgbd":
        return this.handleListSgbd();
      case "listJobs":
        return this.handleListJobs(p);
      case "getJobMetadata":
        return this.handleGetJobMetadata(p);
      case "disassembleJob":
        return this.handleDisassembleJob(p);
      case "log.subscribe":
        return this.handleLogSubscribe(channel, p);
      case "log.unsubscribe":
        return this.handleLogUnsubscribe(channel);
      case "resultSets":
        return { count: this.lastResults.length > 0 ? this.lastResults.length - 1 : 0 };
      case "resultText":
        return { value: this.getResultText(p) };
      case "resultInt":
        return { value: this.getResultInt(p) };
      case "resultReal":
        return { value: this.getResultReal(p) };
      case "resultBinary":
        return { value: this.getResultBinary(p) };
      case "resultFormat":
        return { format: this.getResultFormat(p) };
      case "state":
        return { state: this.currentState };
      case "break":
        return this.handleBreak();
      case "errorCode":
        return { code: this.lastError.code };
      case "errorText":
        return { text: this.lastError.text };
      case "info":
        return {
          connected: this.ediabas?.isConnected() ?? false,
          clients: this.channels.size,
          host: this.host,
          port: this.port,
          transport: this.transport,
          sgbdPath: this.sgbdPath,
        };
      default:
        throw Object.assign(
          new Error(`Unknown method: ${request.method}`),
          { jsonRpc: JSON_RPC_ERRORS.methodNotFound },
        );
    }
  }

  // ---- Method handlers ----

  /**
   * Lazily create the single Ediabas instance the server owns for its
   * lifetime, mirroring the original (single-process) Ediabas class:
   * one loaded SGBD / one transport / one accumulator across all
   * clients. Subsequent client `init` calls are idempotent — they
   * just ensure the transport is connected without recreating state
   * (loaded SGBD, INITIALISIERUNG flag, group cache, systemResults).
   *
   * Per-job state (`lastResults`, `lastError`, `currentState`) is
   * reset because that mirrors the per-API-handle semantics a client
   * expects from `apiInit`. The shared `Ediabas` itself is preserved.
   */
  private async handleInit(): Promise<{ ok: true }> {
    if (!this.ediabas) {
      this.ediabas = new Ediabas({
        ecuPath: this.sgbdPath,
        interface: this.iface,
      });
    }
    if (!this.ediabas.isConnected()) {
      await this.ediabas.connect();
    }
    this.lastResults = [];
    this.lastError = { code: 0, text: "" };
    this.currentState = "ready";
    return { ok: true };
  }

  /**
   * Per-client `end` is a no-op on the shared `Ediabas`. Tearing it
   * down here would break any other connected client mid-session, and
   * recreating it on the next `init` would drop the cached SGBD /
   * INITIALISIERUNG state. Server lifecycle (`stop()`) is what
   * actually disconnects the transport.
   *
   * Per-handle state is still cleared so the calling client sees a
   * fresh slate on its next `init`.
   */
  private async handleEnd(): Promise<{ ok: true }> {
    this.lastResults = [];
    this.lastError = { code: 0, text: "" };
    this.currentState = "ready";
    return { ok: true };
  }

  private async handleJob(p: Record<string, unknown>): Promise<EdiabasJobResponse> {
    if (!this.ediabas) throw new Error("Not initialised — call init() first");

    const ecu = String(p.ecu ?? "");
    const jobName = String(p.job ?? "");
    const paramsStr = String(p.params ?? "");

    if (!ecu) throw new Error("Missing required parameter: ecu");
    if (!jobName) throw new Error("Missing required parameter: job");

    this.currentState = "busy";
    this.lastError = { code: 0, text: "" };

    try {
      const sgbdPath = resolveSgbd(ecu, this.sgbdPath);
      if (sgbdPath !== this.loadedSgbdPath) {
        await this.ediabas.loadSgbd(sgbdPath);
        this.loadedSgbdPath = sgbdPath;
      }

      const params = paramsStr ? paramsStr.split(";") : [];
      const rawResults = await this.ediabas.executeJob(jobName, {
        params: params.length > 0 ? params : undefined,
      });

      this.lastResults = rawResults;
      this.currentState = "ready";

      return { sets: rawResults.map(convertResultSet) };
    } catch (error) {
      this.currentState = "error";
      this.lastError = {
        code: (error as { code?: number }).code ?? -1,
        text: error instanceof Error ? error.message : String(error),
      };
      throw error;
    }
  }

  /**
   * Fallback path — kept so the `case "break":` switch arm in
   * {@link execute} still has a target if a future caller bypasses
   * {@link handleMessage}. In practice every `break` RPC is short-
   * circuited inline by {@link handleBreakInline} before it reaches
   * the queue; this method is unreachable through the normal
   * dispatcher.
   */
  private async handleBreak(): Promise<{ ok: true }> {
    return this.handleBreakInline();
  }

  private handleListSgbd(): { sgbds: { name: string; ext: string }[] } {
    const sgbds: { name: string; ext: string }[] = [];
    const PRG_RE = /\.(prg|grp)$/i;
    try {
      const entries = readdirSync(this.sgbdPath, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isFile()) continue;
        const m = entry.name.match(PRG_RE);
        if (!m) continue;
        sgbds.push({ name: entry.name, ext: m[1]!.toLowerCase() });
      }
    } catch {
      // sgbdPath might not exist — return empty list rather than error
    }
    sgbds.sort((a, b) => a.name.localeCompare(b.name));
    return { sgbds };
  }

  private loadAndParseSgbd(ecu: string): { prg: PrgFile; buffer: Uint8Array } {
    const sgbdPath = resolveSgbd(ecu, this.sgbdPath);
    const buffer = new Uint8Array(readFileSync(sgbdPath));
    return { prg: parsePrg(buffer), buffer };
  }

  private handleListJobs(p: Record<string, unknown>): {
    jobs: { name: string; comment?: string; argCount: number; resultCount: number }[];
    tableCount: number;
  } {
    const ecu = String(p.ecu ?? "");
    if (!ecu) throw new Error("Missing required parameter: ecu");
    const { prg } = this.loadAndParseSgbd(ecu);
    return {
      jobs: prg.jobs.map((j) => ({
        name: j.name,
        comment: j.comment,
        argCount: j.argCount,
        resultCount: j.resultCount,
      })),
      tableCount: prg.tables.length,
    };
  }

  private handleGetJobMetadata(p: Record<string, unknown>): {
    name: string;
    comment?: string;
    args: PrgArg[];
    results: PrgResult[];
  } {
    const ecu = String(p.ecu ?? "");
    const jobName = String(p.job ?? "");
    if (!ecu) throw new Error("Missing required parameter: ecu");
    if (!jobName) throw new Error("Missing required parameter: job");
    const { prg } = this.loadAndParseSgbd(ecu);
    const job = prg.jobs.find((j) => j.name.toUpperCase() === jobName.toUpperCase());
    if (!job) throw new Error(`Job not found: ${jobName}`);
    return {
      name: job.name,
      comment: job.comment,
      args: job.args,
      results: job.results,
    };
  }

  private handleDisassembleJob(p: Record<string, unknown>): { lines: string[] } {
    const ecu = String(p.ecu ?? "");
    const jobName = String(p.job ?? "");
    if (!ecu) throw new Error("Missing required parameter: ecu");
    if (!jobName) throw new Error("Missing required parameter: job");
    const { prg, buffer } = this.loadAndParseSgbd(ecu);

    const sorted = [...prg.binaryJobs].sort((a, b) => a.offset - b.offset);
    const idx = sorted.findIndex((j) => j.name.toUpperCase() === jobName.toUpperCase());
    if (idx < 0) return { lines: ["(no bytecode for this job)"] };

    const start = sorted[idx]!.offset;
    const end = idx + 1 < sorted.length ? sorted[idx + 1]!.offset : buffer.length;
    const instructions = disassembleJob(buffer, start, { endOffset: end });
    return {
      lines: instructions.map((i) => {
        const addr = i.offset.toString(16).toUpperCase().padStart(8, "0");
        return `${addr}: ${formatInstruction(i, { color: false })}`;
      }),
    };
  }

  private handleLogSubscribe(
    channel: ClientChannel,
    p: Record<string, unknown>,
  ): { ok: true; level: string } {
    const level = (typeof p.level === "string" ? p.level : "info") as LogLevel;
    this.logSubscriptions.set(channel, level);
    return { ok: true, level };
  }

  private handleLogUnsubscribe(channel: ClientChannel): { ok: true } {
    this.logSubscriptions.delete(channel);
    return { ok: true };
  }

  // ---- Log broadcast sink ----

  ensureBroadcastSink(): void {
    if (this.broadcastSinkInstalled) return;
    this.broadcastSinkInstalled = true;
    const broadcastSink: Sink = {
      write: (record: LogRecord) => this.broadcastLog(record),
    };
    configureLogger({
      sink: multiSink(consoleSink(), broadcastSink),
    });
  }

  private broadcastLog(record: LogRecord): void {
    if (this.logSubscriptions.size === 0) return;
    const payload = JSON.stringify({
      jsonrpc: "2.0",
      method: "log",
      params: {
        level: record.level,
        category: record.category,
        msg: record.msg,
        time: record.time,
      },
    });
    for (const [channel, minLevel] of this.logSubscriptions) {
      if (!channel.isOpen()) {
        this.logSubscriptions.delete(channel);
        continue;
      }
      if (!levelPasses(record.level, minLevel)) continue;
      channel.send(payload);
    }
  }

  private sendNotification(channel: ClientChannel, method: string, params: unknown): void {
    if (!channel.isOpen()) return;
    channel.send(JSON.stringify({ jsonrpc: "2.0", method, params }));
  }

  // ---- Result accessors (operate on cached lastResults) ----

  private findResult(p: Record<string, unknown>): EdiabasJobResult | undefined {
    const name = String(p.name ?? "");
    const set = Number(p.set ?? 0);
    if (!name || set < 0 || set >= this.lastResults.length) return undefined;
    return this.lastResults[set].find(
      (r) => r.name.toUpperCase() === name.toUpperCase(),
    );
  }

  private getResultText(p: Record<string, unknown>): string {
    const r = this.findResult(p);
    if (!r) return "";
    if (r.value instanceof Uint8Array) return `[${r.value.length} bytes]`;
    return String(r.value ?? "");
  }

  private getResultInt(p: Record<string, unknown>): number {
    const r = this.findResult(p);
    if (!r) return 0;
    return typeof r.value === "number" ? Math.trunc(r.value) : 0;
  }

  private getResultReal(p: Record<string, unknown>): number {
    const r = this.findResult(p);
    if (!r) return 0;
    return typeof r.value === "number" ? r.value : 0;
  }

  private getResultBinary(p: Record<string, unknown>): number[] {
    const r = this.findResult(p);
    if (!r || !(r.value instanceof Uint8Array)) return [];
    return Array.from(r.value);
  }

  private getResultFormat(p: Record<string, unknown>): EdiabasResultType | undefined {
    const r = this.findResult(p);
    if (!r) return undefined;
    return mapResultType(r.type);
  }

  // ---- JSON-RPC helpers ----

  private isValidRequest(obj: unknown): obj is JsonRpcRequest {
    if (!obj || typeof obj !== "object") return false;
    const r = obj as Record<string, unknown>;
    return r.jsonrpc === "2.0" && typeof r.method === "string";
  }

  private sendResult(channel: ClientChannel, id: JsonRpcId, result: unknown): void {
    if (!channel.isOpen()) return;
    channel.send(JSON.stringify({ jsonrpc: "2.0", id, result }));
  }

  private sendError(
    channel: ClientChannel,
    id: JsonRpcId,
    error: { code: number; message: string },
    cause?: unknown,
  ): void {
    if (!channel.isOpen()) return;
    const data = cause instanceof Error ? cause.message : undefined;
    channel.send(JSON.stringify({
      jsonrpc: "2.0",
      id,
      error: { code: error.code, message: error.message, data },
    }));
  }

  bindSignalHandlers(): void {
    let force = false;
    const handler = () => {
      if (force) process.exit(1);
      force = true;
      this.logger.info("Received shutdown signal");
      void this.stop().then(() => process.exit(0));
    };
    process.on("SIGINT", handler);
    process.on("SIGTERM", handler);
  }
}

// ---- Result conversion helpers ----

function mapResultType(type: string): EdiabasResultType {
  switch (type) {
    case "string": return "text";
    case "int": return "integer";
    case "real":
    case "float":
    case "double": return "real";
    case "bytes":
    case "binary": return "binary";
    case "long": return "long";
    case "bcd": return "text";
    default: return "text";
  }
}

function convertResultSet(results: EdiabasJobResult[]): EdiabasResultSet {
  const set: EdiabasResultSet = {};
  for (const r of results) {
    const entry: EdiabasResultEntry = {
      name: r.name,
      type: mapResultType(r.type),
      value: r.value instanceof Uint8Array
        ? Array.from(r.value)
        : r.value ?? "",
    };
    if (r.unit !== undefined) entry.unit = r.unit;
    if (r.comment !== undefined) entry.comment = r.comment;
    set[r.name] = entry;
  }
  return set;
}
