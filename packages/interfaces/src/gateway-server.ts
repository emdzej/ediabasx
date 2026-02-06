import { createServer, type Socket } from "node:net";
import type { Server } from "node:net";
import { EdiabasInterface } from "@ediabas/interface-base";

export interface GatewayLogger {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  debug?: (message: string) => void;
}

export type GatewayServerOptions = {
  host?: string;
  port?: number;
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

export class GatewayServer {
  private readonly host: string;
  private port: number;
  private readonly iface: GatewayServerOptions["interface"];
  private readonly logger: GatewayLogger;
  private server?: Server;
  private clients = new Set<Socket>();
  private queue: Promise<void> = Promise.resolve();
  private shuttingDown = false;
  private signalHandlersBound = false;

  constructor(options: GatewayServerOptions) {
    this.host = options.host ?? DEFAULT_HOST;
    this.port = options.port ?? DEFAULT_PORT;
    this.iface = options.interface;
    this.logger = options.logger ?? console;
  }

  get address(): { host: string; port: number } {
    return { host: this.host, port: this.port };
  }

  get clientCount(): number {
    return this.clients.size;
  }

  async start(): Promise<void> {
    if (this.server) {
      return;
    }
    this.server = createServer((socket) => this.handleConnection(socket));

    const server = this.server;
    await new Promise<void>((resolve, reject) => {
      const onError = (err: Error) => reject(err);
      server.on("error", onError);
      server.listen(this.port, this.host, () => {
        server.removeListener("error", onError);
        resolve();
      });
    });

    const address = this.server.address();
    if (address && typeof address === "object") {
      this.port = address.port;
    }

    this.logger.info(`Gateway server listening on ${this.host}:${this.port}`);
    this.bindSignalHandlers();
  }

  async stop(): Promise<void> {
    const server = this.server;
    if (!server || this.shuttingDown) {
      return;
    }
    this.shuttingDown = true;
    this.logger.info("Gateway server shutting down");

    for (const socket of this.clients) {
      socket.end();
      socket.destroy();
    }
    this.clients.clear();

    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });

    this.server = undefined;
    this.shuttingDown = false;
  }

  private handleConnection(socket: Socket): void {
    this.clients.add(socket);
    this.logger.info(`Client connected (${this.clients.size} total)`);

    let buffer = "";

    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      let newlineIndex = buffer.indexOf("\n");
      while (newlineIndex >= 0) {
        const line = buffer.slice(0, newlineIndex).trim();
        buffer = buffer.slice(newlineIndex + 1);
        if (line) {
          this.handleLine(socket, line);
        }
        newlineIndex = buffer.indexOf("\n");
      }
    });

    socket.on("close", () => {
      this.clients.delete(socket);
      this.logger.info(`Client disconnected (${this.clients.size} total)`);
    });

    socket.on("error", (error) => {
      this.logger.error(`Client socket error: ${error.message}`);
      socket.destroy();
    });
  }

  private handleLine(socket: Socket, line: string): void {
    let request: unknown;

    try {
      request = JSON.parse(line);
    } catch (error) {
      this.sendError(socket, null, jsonRpcErrors.parseError, error);
      return;
    }

    if (!this.isValidRequest(request)) {
      const reqId = (request as { id?: JsonRpcId })?.id ?? null;
      this.sendError(socket, reqId, jsonRpcErrors.invalidRequest);
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
        this.sendResult(socket, requestId, result);
      } catch (error) {
        const jsonRpc = (error as { jsonRpc?: { code: number; message: string } }).jsonRpc;
        if (jsonRpc) {
          this.sendError(socket, requestId, jsonRpc, error);
          return;
        }
        this.sendError(socket, requestId, jsonRpcErrors.serverError, error);
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
          clients: this.clients.size,
          host: this.host,
          port: this.port
        };
      case "setParam": {
        const { parameter, value } = this.extractParameter(params);
        if (!this.iface.setParameter) {
          throw new Error("Interface does not support setParameter");
        }
        await this.iface.setParameter(parameter, value);
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

  private sendResult(socket: Socket, id: JsonRpcId, result: unknown): void {
    const payload: JsonRpcSuccess = { jsonrpc: "2.0", id, result };
    socket.write(`${JSON.stringify(payload)}\n`);
  }

  private sendError(
    socket: Socket,
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
    socket.write(`${JSON.stringify(payload)}\n`);
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
