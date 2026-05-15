import { createServer as createTcpServer, type Server as NetServer, type Socket } from "node:net";
import { createServer as createHttpServer, type Server as HttpServer } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";

export interface GatewayLogger {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  debug?: (message: string) => void;
}

/**
 * Transport layer for the gateway.
 *
 *  - `"tcp"`     — line-delimited JSON-RPC over a raw `net.Server`
 *                  (the original transport; node-only clients).
 *  - `"websocket"` — one JSON-RPC message per WebSocket frame, served via
 *                  `http.Server` + `ws.WebSocketServer`. Browser-friendly:
 *                  any page can `new WebSocket("ws://host:6801")`.
 *
 * Both speak the same JSON-RPC 2.0 vocabulary; only the framing differs.
 */
export type GatewayTransport = "tcp" | "websocket";

export type GatewayServerOptions = {
  host?: string;
  port?: number;
  /** Wire framing. Defaults to "tcp" for backwards-compat with existing clients. */
  transport?: GatewayTransport;
  interface: EdiabasInterface & {
    setParameter?: (parameter: number, value: number) => Promise<void> | void;
  };
  logger?: GatewayLogger;
};

type JsonRpcId = string | number | null;

type JsonRpcRequest = {
  jsonrpc: "2.0";
  method: string;
  params?: unknown;
  id?: JsonRpcId;
};

type JsonRpcSuccess = {
  jsonrpc: "2.0";
  id: JsonRpcId;
  result: unknown;
};

type JsonRpcError = {
  jsonrpc: "2.0";
  id: JsonRpcId;
  error: {
    code: number;
    message: string;
    data?: unknown;
  };
};

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 6801;

const jsonRpcErrors = {
  parseError: { code: -32700, message: "Parse error" },
  invalidRequest: { code: -32600, message: "Invalid Request" },
  methodNotFound: { code: -32601, message: "Method not found" },
  invalidParams: { code: -32602, message: "Invalid params" },
  internalError: { code: -32603, message: "Internal error" },
  serverError: { code: -32000, message: "Server error" }
};

/**
 * Per-connection handle the JSON-RPC dispatcher writes to. Lets the
 * request-handling code stay transport-agnostic — TCP sockets and
 * WebSockets both satisfy this shape, just with different framing
 * underneath.
 */
interface ClientChannel {
  /** Send one JSON-RPC payload (already serialised, no trailing newline). */
  send(payload: string): void;
  /** Drop the connection. */
  close(): void;
  /** True until the channel is half-closed or destroyed. */
  isOpen(): boolean;
}

export class GatewayServer {
  private readonly host: string;
  private port: number;
  private readonly transport: GatewayTransport;
  private readonly iface: GatewayServerOptions["interface"];
  private readonly logger: GatewayLogger;
  private tcpServer?: NetServer;
  private httpServer?: HttpServer;
  private wsServer?: WebSocketServer;
  private channels = new Set<ClientChannel>();
  private queue: Promise<void> = Promise.resolve();
  private shuttingDown = false;
  private signalHandlersBound = false;

  constructor(options: GatewayServerOptions) {
    this.host = options.host ?? DEFAULT_HOST;
    this.port = options.port ?? DEFAULT_PORT;
    this.transport = options.transport ?? "tcp";
    this.iface = options.interface;
    this.logger = options.logger ?? console;
  }

  get address(): { host: string; port: number } {
    return { host: this.host, port: this.port };
  }

  get clientCount(): number {
    return this.channels.size;
  }

  /** Transport in use — useful for tests and the CLI's startup log. */
  getTransport(): GatewayTransport {
    return this.transport;
  }

  async start(): Promise<void> {
    if (this.tcpServer || this.httpServer) {
      return;
    }

    if (this.transport === "tcp") {
      await this.startTcp();
    } else {
      await this.startWebSocket();
    }

    this.logger.info(
      `Gateway server listening on ${this.host}:${this.port} (transport=${this.transport})`
    );
    this.bindSignalHandlers();
  }

  async stop(): Promise<void> {
    if (this.shuttingDown) {
      return;
    }
    if (!this.tcpServer && !this.httpServer) {
      return;
    }
    this.shuttingDown = true;
    this.logger.info("Gateway server shutting down");

    for (const channel of this.channels) {
      channel.close();
    }
    this.channels.clear();

    if (this.wsServer) {
      await new Promise<void>((resolve) => {
        this.wsServer!.close(() => resolve());
      });
      this.wsServer = undefined;
    }

    if (this.httpServer) {
      await new Promise<void>((resolve) => {
        this.httpServer!.close(() => resolve());
      });
      this.httpServer = undefined;
    }

    if (this.tcpServer) {
      await new Promise<void>((resolve) => {
        this.tcpServer!.close(() => resolve());
      });
      this.tcpServer = undefined;
    }

    this.shuttingDown = false;
  }

  // ---- Transport setup ----

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

    const address = server.address();
    if (address && typeof address === "object") {
      this.port = address.port;
    }
  }

  private async startWebSocket(): Promise<void> {
    // The HTTP server exists only to take the `upgrade` handshake; we
    // don't serve any regular HTTP responses. Anyone GETting the port
    // gets a 426 hint that they're at the right place but using the
    // wrong protocol.
    this.httpServer = createHttpServer((_req, res) => {
      res.statusCode = 426;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Upgrade", "websocket");
      res.end("ediabasx gateway — WebSocket clients only on this transport.\n");
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

    const address = httpServer.address();
    if (address && typeof address === "object") {
      this.port = address.port;
    }
  }

  // ---- Per-connection adapters ----

  private attachTcpSocket(socket: Socket): void {
    const channel: ClientChannel = {
      send: (payload) => {
        if (!socket.destroyed) socket.write(`${payload}\n`);
      },
      close: () => {
        socket.end();
        socket.destroy();
      },
      isOpen: () => !socket.destroyed
    };
    this.registerChannel(channel);

    let buffer = "";
    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      let newlineIndex = buffer.indexOf("\n");
      while (newlineIndex >= 0) {
        const line = buffer.slice(0, newlineIndex).trim();
        buffer = buffer.slice(newlineIndex + 1);
        if (line) {
          this.handleMessage(channel, line);
        }
        newlineIndex = buffer.indexOf("\n");
      }
    });

    socket.on("close", () => this.unregisterChannel(channel));

    socket.on("error", (error) => {
      this.logger.error(`Client socket error: ${error.message}`);
      socket.destroy();
    });
  }

  private attachWebSocket(ws: WebSocket): void {
    const channel: ClientChannel = {
      send: (payload) => {
        if (ws.readyState === ws.OPEN) ws.send(payload);
      },
      close: () => {
        try {
          ws.close();
        } catch {
          /* already closed */
        }
      },
      isOpen: () => ws.readyState === ws.OPEN
    };
    this.registerChannel(channel);

    ws.on("message", (data) => {
      // WebSocket gives us one message per `send()` call from the
      // peer, so we don't need line-buffering here — each message is
      // expected to be one JSON-RPC payload.
      const text = typeof data === "string" ? data : data.toString("utf8");
      const line = text.trim();
      if (line) this.handleMessage(channel, line);
    });

    ws.on("close", () => this.unregisterChannel(channel));

    ws.on("error", (error: Error) => {
      this.logger.error(`Client websocket error: ${error.message}`);
      try {
        ws.terminate();
      } catch {
        /* already gone */
      }
    });
  }

  private registerChannel(channel: ClientChannel): void {
    this.channels.add(channel);
    this.logger.info(`Client connected (${this.channels.size} total)`);
  }

  private unregisterChannel(channel: ClientChannel): void {
    if (this.channels.delete(channel)) {
      this.logger.info(`Client disconnected (${this.channels.size} total)`);
    }
  }

  // ---- JSON-RPC dispatch ----

  private handleMessage(channel: ClientChannel, line: string): void {
    let request: unknown;

    try {
      request = JSON.parse(line);
    } catch (error) {
      this.sendError(channel, null, jsonRpcErrors.parseError, error);
      return;
    }

    if (!this.isValidRequest(request)) {
      const reqId = (request as { id?: JsonRpcId })?.id ?? null;
      this.sendError(channel, reqId, jsonRpcErrors.invalidRequest);
      return;
    }

    const validRequest = request;
    const requestId = validRequest.id ?? null;

    if (validRequest.id === undefined) {
      void this.enqueue(async () => {
        try {
          await this.execute(validRequest);
        } catch (error) {
          this.logger.info(`Notification failed: ${(error as Error).message}`);
        }
      });
      return;
    }

    void this.enqueue(async () => {
      try {
        const result = await this.execute(validRequest);
        this.sendResult(channel, requestId, result);
      } catch (error) {
        const jsonRpc = (error as { jsonRpc?: { code: number; message: string } }).jsonRpc;
        if (jsonRpc) {
          this.sendError(channel, requestId, jsonRpc, error);
          return;
        }
        this.sendError(channel, requestId, jsonRpcErrors.serverError, error);
      }
    });
  }

  private enqueue(task: () => Promise<void | unknown>): Promise<void | unknown> {
    const next = this.queue.then(() => task(), () => task());
    this.queue = next.then(
      () => undefined,
      () => undefined
    );
    return next;
  }

  private async execute(request: JsonRpcRequest): Promise<unknown> {
    const params = request.params ?? {};

    switch (request.method) {
      case "connect":
        await this.iface.connect();
        return { connected: this.iface.isConnected() };
      case "disconnect":
        await this.iface.disconnect();
        return { connected: this.iface.isConnected() };
      case "send":
        await this.iface.send(this.extractData(params));
        return { ok: true };
      case "receive": {
        const timeout = this.extractTimeout(params);
        const response = await this.iface.receive(timeout);
        return { data: Array.from(response) };
      }
      case "sendReceive": {
        const timeout = this.extractTimeout(params);
        const payload = this.extractData(params);
        await this.iface.send(payload);
        const response = await this.iface.receive(timeout);
        return { data: Array.from(response) };
      }
      case "info":
        return {
          connected: this.iface.isConnected(),
          clients: this.channels.size,
          host: this.host,
          port: this.port,
          transport: this.transport
        };
      case "setParam": {
        const { parameter, value } = this.extractParameter(params);
        if (!this.iface.setParameter) {
          throw new Error("Interface does not support setParameter");
        }
        await this.iface.setParameter(parameter, value);
        return { ok: true };
      }
      case "getPort": {
        const index = this.extractIndex(params);
        const value = await this.iface.getPort(index);
        return { value };
      }
      case "setPort": {
        const { index, value } = this.extractIndexValue(params);
        await this.iface.setPort(index, value);
        return { ok: true };
      }
      case "getIgnitionVoltage": {
        const value = await this.iface.ignitionVoltage;
        return { value };
      }
      case "getBatteryVoltage": {
        const value = await this.iface.batteryVoltage;
        return { value };
      }
      case "getLoopTest": {
        const value = await this.iface.loopTest;
        return { value };
      }
      case "setProgramVoltage": {
        const value = this.extractValue(params);
        await this.iface.setProgramVoltage(value);
        return { ok: true };
      }
      case "rawData": {
        const payload = this.extractData(params);
        const response = await this.iface.rawData(payload);
        return { data: Array.from(response) };
      }
      case "switchSiRelais": {
        const time = this.extractValue(params, "time");
        await this.iface.switchSiRelais(time);
        return { ok: true };
      }
      default:
        throw this.buildJsonRpcError(jsonRpcErrors.methodNotFound);
    }
  }

  private extractParameter(params: unknown): { parameter: number; value: number } {
    if (!params || typeof params !== "object") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    const parameter = (params as { parameter?: unknown }).parameter;
    const value = (params as { value?: unknown }).value;
    if (typeof parameter !== "number" || typeof value !== "number") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return { parameter, value };
  }

  private extractTimeout(params: unknown): number | undefined {
    if (!params || typeof params !== "object") {
      return undefined;
    }
    const timeout = (params as { timeoutMs?: unknown; timeout?: unknown }).timeoutMs ??
      (params as { timeout?: unknown }).timeout;
    if (timeout === undefined) {
      return undefined;
    }
    if (typeof timeout !== "number") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return timeout;
  }

  private extractIndex(params: unknown): number {
    if (!params || typeof params !== "object") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    const index = (params as { index?: unknown }).index;
    if (typeof index !== "number") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return index;
  }

  private extractValue(params: unknown, key: "value" | "time" = "value"): number {
    if (!params || typeof params !== "object") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    const value = (params as Record<string, unknown>)[key];
    if (typeof value !== "number") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return value;
  }

  private extractIndexValue(params: unknown): { index: number; value: number } {
    if (!params || typeof params !== "object") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    const index = (params as { index?: unknown }).index;
    const value = (params as { value?: unknown }).value;
    if (typeof index !== "number" || typeof value !== "number") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return { index, value };
  }

  private extractData(params: unknown): Uint8Array {
    if (!params || typeof params !== "object") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    const data = (params as { data?: unknown }).data;
    if (data instanceof Uint8Array) {
      return data;
    }
    if (Array.isArray(data) && data.every((value) => typeof value === "number")) {
      return Uint8Array.from(data as number[]);
    }
    if (typeof data === "string") {
      return this.parseHexString(data);
    }
    throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
  }

  private parseHexString(value: string): Uint8Array {
    const cleaned = value.replace(/\s+/g, "");
    if (!cleaned || cleaned.length % 2 !== 0) {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    const bytes: number[] = [];
    for (let index = 0; index < cleaned.length; index += 2) {
      const chunk = cleaned.slice(index, index + 2);
      const parsed = Number.parseInt(chunk, 16);
      if (Number.isNaN(parsed)) {
        throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
      }
      bytes.push(parsed);
    }
    return Uint8Array.from(bytes);
  }

  private isValidRequest(request: unknown): request is JsonRpcRequest {
    if (!request || typeof request !== "object") {
      return false;
    }
    const req = request as Record<string, unknown>;
    if (req.jsonrpc !== "2.0" || typeof req.method !== "string") {
      return false;
    }
    if (req.id === undefined) {
      return true;
    }
    return (
      typeof req.id === "string" ||
      typeof req.id === "number" ||
      req.id === null
    );
  }

  private sendResult(channel: ClientChannel, id: JsonRpcId, result: unknown): void {
    const payload: JsonRpcSuccess = { jsonrpc: "2.0", id, result };
    channel.send(JSON.stringify(payload));
  }

  private sendError(
    channel: ClientChannel,
    id: JsonRpcId,
    error: { code: number; message: string },
    details?: unknown
  ): void {
    const payload: JsonRpcError = {
      jsonrpc: "2.0",
      id,
      error: {
        code: error.code,
        message: error.message,
        data: details instanceof Error ? details.message : details
      }
    };
    channel.send(JSON.stringify(payload));
  }

  private buildJsonRpcError(error: { code: number; message: string }): Error & { jsonRpc?: { code: number; message: string } } {
    const rpcError = new Error(error.message) as Error & {
      jsonRpc?: { code: number; message: string };
    };
    rpcError.jsonRpc = error;
    return rpcError;
  }

  private bindSignalHandlers(): void {
    if (this.signalHandlersBound) {
      return;
    }
    this.signalHandlersBound = true;
    const handler = async () => {
      try {
        await this.stop();
      } catch (error) {
        this.logger.error(`Failed to shutdown gateway server: ${(error as Error).message}`);
      }
    };
    process.on("SIGINT", handler);
    process.on("SIGTERM", handler);
  }
}
