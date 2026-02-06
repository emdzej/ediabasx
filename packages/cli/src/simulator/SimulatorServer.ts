import { EventEmitter } from "node:events";
import { createServer, type Socket, type Server } from "node:net";

export type SimulatorServerOptions = {
  host: string;
  port: number;
  logger?: {
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
  };
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

const jsonRpcErrors = {
  parseError: { code: -32700, message: "Parse error" },
  invalidRequest: { code: -32600, message: "Invalid Request" },
  methodNotFound: { code: -32601, message: "Method not found" },
  invalidParams: { code: -32602, message: "Invalid params" },
  requestCancelled: { code: -32001, message: "Request cancelled" },
  serverError: { code: -32000, message: "Server error" }
};

type DialogMode = "number" | "hex";

type DialogRequest = {
  prompt: string;
  mode: DialogMode;
  detail?: string;
  onSubmit: (value: string) => void;
  onCancel: () => void;
};

export class SimulatorServer extends EventEmitter {
  private readonly host: string;
  private port: number;
  private readonly logger: NonNullable<SimulatorServerOptions["logger"]>;
  private server?: Server;
  private clients = new Set<Socket>();
  private connectedClients = new Set<Socket>();
  private readonly responseQueue: Uint8Array[] = [];
  private shuttingDown = false;

  constructor(options: SimulatorServerOptions) {
    super();
    this.host = options.host;
    this.port = options.port;
    this.logger = options.logger ?? console;
  }

  get address(): { host: string; port: number } {
    return { host: this.host, port: this.port };
  }

  get clientCount(): number {
    return this.clients.size;
  }

  queueResponse(data: Uint8Array): void {
    if (data.length === 0) {
      this.responseQueue.push(data);
      this.emit("responseQueued", data);
      return;
    }
    this.responseQueue.push(new Uint8Array(data));
    this.emit("responseQueued", data);
  }

  async start(): Promise<void> {
    if (this.server) return;

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

    this.logger.info(`Simulator server listening on ${this.host}:${this.port}`);
  }

  async stop(): Promise<void> {
    const server = this.server;
    if (!server || this.shuttingDown) return;

    this.shuttingDown = true;
    this.logger.info("Simulator server shutting down");

    for (const socket of this.clients) {
      socket.end();
      socket.destroy();
    }
    this.clients.clear();
    this.connectedClients.clear();
    this.responseQueue.length = 0;

    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });

    this.server = undefined;
    this.shuttingDown = false;
  }

  private handleConnection(socket: Socket): void {
    this.clients.add(socket);
    this.emit("clientCount", this.clients.size);
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
      this.connectedClients.delete(socket);
      this.emit("clientCount", this.clients.size);
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
      const requestId = (request as { id?: JsonRpcId })?.id ?? null;
      this.sendError(socket, requestId, jsonRpcErrors.invalidRequest);
      return;
    }

    const validRequest = request;
    const requestId = validRequest.id ?? null;

    if (validRequest.id === undefined) {
      void this.execute(socket, validRequest).catch((error) => {
        this.logger.info(`Notification failed: ${(error as Error).message}`);
      });
      return;
    }

    void this.execute(socket, validRequest)
      .then((result) => this.sendResult(socket, requestId, result))
      .catch((error) => {
        const jsonRpc = (error as { jsonRpc?: { code: number; message: string } }).jsonRpc;
        if (jsonRpc) {
          this.sendError(socket, requestId, jsonRpc, error);
          return;
        }
        this.sendError(socket, requestId, jsonRpcErrors.serverError, error);
      });
  }

  private async execute(socket: Socket, request: JsonRpcRequest): Promise<unknown> {
    const params = request.params ?? {};

    switch (request.method) {
      case "connect":
        this.connectedClients.add(socket);
        return { connected: true };
      case "disconnect":
        this.connectedClients.delete(socket);
        return { connected: false };
      case "info":
        return {
          connected: this.connectedClients.has(socket),
          clients: this.clients.size,
          host: this.host,
          port: this.port,
        };
      case "send": {
        const data = this.extractData(params);
        this.emit("data", data);
        return { ok: true };
      }
      case "receive":
        return { data: this.dequeueResponse() };
      case "getIgnitionVoltage": {
        const value = await this.promptNumber("Ignition voltage (V):");
        return { value };
      }
      case "getLoopTest": {
        const value = await this.promptNumber("Loop test value:");
        return { value };
      }
      case "getPort": {
        const requestParams = this.requireObject(params);
        const index = this.parseNumberParam(requestParams, "index");
        const value = await this.promptNumber(`Port ${index} value:`);
        return { value };
      }
      case "rawData": {
        const requestData = this.extractData(params);
        this.emit("log", `rawData request: ${this.formatHex(requestData)}`);
        const response = await this.promptHex("Raw response (hex):");
        return { data: Array.from(response) };
      }
      case "setParam": {
        const requestParams = this.requireObject(params);
        const param = requestParams.param;
        const value = requestParams.value;
        this.emit("log", `setParam(param=${String(param)}, value=${String(value)})`);
        return { ok: true };
      }
      case "setPort": {
        const requestParams = this.requireObject(params);
        const index = this.parseNumberParam(requestParams, "index");
        const value = this.parseNumberParam(requestParams, "value");
        this.emit("log", `setPort(index=${index}, value=${value})`);
        return { ok: true };
      }
      case "setProgramVoltage": {
        const requestParams = this.requireObject(params);
        const value = this.parseNumberParam(requestParams, "value");
        this.emit("log", `setProgramVoltage(value=${value})`);
        return { ok: true };
      }
      case "switchSiRelais": {
        const requestParams = this.requireObject(params);
        const time = this.parseNumberParam(requestParams, "time");
        this.emit("log", `switchSiRelais(time=${time})`);
        return { ok: true };
      }
      default:
        throw this.buildJsonRpcError(jsonRpcErrors.methodNotFound);
    }
  }

  private dequeueResponse(): number[] {
    const next = this.responseQueue.shift();
    return next ? Array.from(next) : [];
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

  private requireObject(params: unknown): Record<string, unknown> {
    if (!params || typeof params !== "object") {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return params as Record<string, unknown>;
  }

  private parseNumberParam(params: Record<string, unknown>, key: string): number {
    const value = params[key];
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string") {
      const parsed = Number.parseFloat(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
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

  private parseHexResponse(value: string): Uint8Array {
    const cleaned = value.replace(/\s+/g, "");
    if (!cleaned) {
      return new Uint8Array();
    }
    if (cleaned.length % 2 !== 0) {
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

  private formatHex(data: Uint8Array): string {
    if (data.length === 0) return "(empty)";
    return Array.from(data)
      .map((byte) => byte.toString(16).padStart(2, "0").toUpperCase())
      .join(" ");
  }

  private async promptNumber(prompt: string): Promise<number> {
    const input = await this.requestDialog(prompt, "number");
    const parsed = Number.parseFloat(input);
    if (!Number.isFinite(parsed)) {
      throw this.buildJsonRpcError(jsonRpcErrors.invalidParams);
    }
    return parsed;
  }

  private async promptHex(prompt: string): Promise<Uint8Array> {
    const input = await this.requestDialog(prompt, "hex");
    return this.parseHexResponse(input);
  }

  private requestDialog(prompt: string, mode: DialogMode, detail?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const onSubmit = (value: string) => resolve(value);
      const onCancel = () => reject(this.buildJsonRpcError(jsonRpcErrors.requestCancelled));
      const request: DialogRequest = { prompt, mode, detail, onSubmit, onCancel };
      this.emit("dialog", request);
    });
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
}
