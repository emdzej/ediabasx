import { createConnection, type Socket } from "node:net";
import { EdiabasInterface } from "@ediabasx/interface-base";

type GatewayClientOptions = {
  host?: string;
  port?: number;
};

type JsonRpcId = number;

type JsonRpcResponse = {
  jsonrpc: "2.0";
  id: JsonRpcId | null;
  result?: unknown;
  error?: {
    code: number;
    message: string;
    data?: unknown;
  };
};

type PendingRequest = {
  resolve: (value: unknown) => void;
  reject: (error: Error) => void;
};

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 6801;

export class GatewayClient extends EdiabasInterface {
  private readonly host: string;
  private readonly port: number;
  private socket?: Socket;
  private buffer = "";
  private nextId = 1;
  private pending = new Map<JsonRpcId, PendingRequest>();
  private connectPromise?: Promise<void>;

  constructor(options: GatewayClientOptions = {}) {
    super();
    this.host = options.host ?? DEFAULT_HOST;
    this.port = options.port ?? DEFAULT_PORT;
  }

  async connect(): Promise<void> {
    await this.ensureSocket();
    const result = await this.request<{ connected: boolean }>("connect");
    this.connected = Boolean(result?.connected);
  }

  async disconnect(): Promise<void> {
    if (!this.socket) {
      this.connected = false;
      return;
    }

    try {
      await this.request("disconnect");
    } finally {
      await new Promise<void>((resolve) => {
        this.socket?.end(() => resolve());
      });
      this.socket?.destroy();
      this.socket = undefined;
      this.connected = false;
    }
  }

  async send(data: Uint8Array): Promise<void> {
    this.assertConnected();
    await this.request("send", { data: Array.from(data) });
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    this.assertConnected();
    const result = await this.request<{ data: number[] }>("receive", {
      timeoutMs
    });
    return Uint8Array.from(result?.data ?? []);
  }

  async sendReceive(data: Uint8Array, timeoutMs?: number): Promise<Uint8Array> {
    this.assertConnected();
    const result = await this.request<{ data: number[] }>("sendReceive", {
      data: Array.from(data),
      timeoutMs
    });
    return Uint8Array.from(result?.data ?? []);
  }

  async info(): Promise<{ connected: boolean; clients: number; host: string; port: number }> {
    return this.request("info");
  }

  async setParameter(parameter: number, value: number): Promise<void> {
    this.assertConnected();
    await this.request("setParam", { parameter, value });
  }

  async getPort(index: number): Promise<number> {
    this.assertConnected();
    const result = await this.request<{ value: number }>("getPort", { index });
    return result?.value ?? 0;
  }

  async setPort(index: number, value: number): Promise<void> {
    this.assertConnected();
    await this.request("setPort", { index, value });
  }

  get ignitionVoltage(): Promise<number> {
    this.assertConnected();
    return this.request<{ value: number }>("getIgnitionVoltage").then((result) => result?.value ?? 0);
  }

  get loopTest(): Promise<number> {
    this.assertConnected();
    return this.request<{ value: number }>("getLoopTest").then((result) => result?.value ?? 0);
  }

  async setProgramVoltage(value: number): Promise<void> {
    this.assertConnected();
    await this.request("setProgramVoltage", { value });
  }

  async rawData(request: Uint8Array): Promise<Uint8Array> {
    this.assertConnected();
    const result = await this.request<{ data: number[] }>("rawData", {
      data: Array.from(request)
    });
    return Uint8Array.from(result?.data ?? []);
  }

  async switchSiRelais(time: number): Promise<void> {
    this.assertConnected();
    await this.request("switchSiRelais", { time });
  }

  private async ensureSocket(): Promise<void> {
    if (this.socket && !this.socket.destroyed) {
      return;
    }
    if (this.connectPromise) {
      return this.connectPromise;
    }

    this.connectPromise = new Promise<void>((resolve, reject) => {
      const socket = createConnection(this.port, this.host, () => {
        this.socket = socket;
        this.buffer = "";
        socket.on("data", (chunk) => this.handleData(chunk.toString("utf8")));
        socket.on("error", (error) => this.handleSocketError(error));
        socket.on("close", () => this.handleSocketClose());
        resolve();
      });

      socket.on("error", (error) => {
        this.connectPromise = undefined;
        reject(error);
      });
    }).finally(() => {
      this.connectPromise = undefined;
    });

    return this.connectPromise;
  }

  private handleData(chunk: string): void {
    this.buffer += chunk;
    let newlineIndex = this.buffer.indexOf("\n");
    while (newlineIndex >= 0) {
      const line = this.buffer.slice(0, newlineIndex).trim();
      this.buffer = this.buffer.slice(newlineIndex + 1);
      if (line) {
        this.handleLine(line);
      }
      newlineIndex = this.buffer.indexOf("\n");
    }
  }

  private handleLine(line: string): void {
    let payload: JsonRpcResponse | null = null;
    try {
      payload = JSON.parse(line) as JsonRpcResponse;
    } catch {
      return;
    }
    if (!payload || payload.id === null || payload.id === undefined) {
      return;
    }
    const pending = this.pending.get(payload.id);
    if (!pending) {
      return;
    }
    this.pending.delete(payload.id);

    if (payload.error) {
      const error = new Error(payload.error.message);
      (error as Error & { code?: number; data?: unknown }).code = payload.error.code;
      (error as Error & { data?: unknown }).data = payload.error.data;
      pending.reject(error);
      return;
    }

    pending.resolve(payload.result);
  }

  private handleSocketError(error: Error): void {
    for (const pending of this.pending.values()) {
      pending.reject(error);
    }
    this.pending.clear();
    this.connected = false;
  }

  private handleSocketClose(): void {
    const error = new Error("Gateway connection closed");
    for (const pending of this.pending.values()) {
      pending.reject(error);
    }
    this.pending.clear();
    this.connected = false;
  }

  private async request<T = unknown>(method: string, params?: unknown): Promise<T> {
    await this.ensureSocket();
    const socket = this.socket;
    if (!socket) {
      throw new Error("Gateway socket not available");
    }

    const id = this.nextId++;
    const payload = {
      jsonrpc: "2.0",
      id,
      method,
      params
    };

    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve: resolve as (value: unknown) => void, reject });
      socket.write(`${JSON.stringify(payload)}\n`);
    });
  }

  private assertConnected(): void {
    if (!this.connected) {
      throw new Error("Gateway client is not connected");
    }
  }
}

export type { GatewayClientOptions };
