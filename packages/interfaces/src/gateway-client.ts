import { createConnection, type Socket } from "node:net";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";

/**
 * Transport for the client side. `"tcp"` matches the original line-delimited
 * JSON protocol; `"websocket"` uses the global `WebSocket` (browser + Node
 * 22+) and exchanges one JSON-RPC message per WS frame.
 */
export type GatewayClientTransport = "tcp" | "websocket";

type GatewayClientOptions = {
  host?: string;
  port?: number;
  /** Wire framing. Defaults to "tcp" for backwards-compat. */
  transport?: GatewayClientTransport;
  /**
   * Explicit URL override for the WebSocket transport. When unset we
   * synthesize `ws://<host>:<port>` from the host+port options.
   */
  url?: string;
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

/**
 * Connection-level adapter used by `GatewayClient` to abstract over the
 * TCP and WebSocket transports. The JSON-RPC dispatch code only deals
 * with `send(line)` + `onMessage(line => …)`.
 */
interface ClientConnection {
  send(payload: string): void;
  close(): Promise<void>;
}

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 6801;

export class GatewayClient extends EdiabasInterface {
  private readonly host: string;
  private readonly port: number;
  private readonly transport: GatewayClientTransport;
  private readonly url?: string;
  private connection?: ClientConnection;
  private nextId = 1;
  private pending = new Map<JsonRpcId, PendingRequest>();
  private connectPromise?: Promise<void>;

  constructor(options: GatewayClientOptions = {}) {
    super();
    this.host = options.host ?? DEFAULT_HOST;
    this.port = options.port ?? DEFAULT_PORT;
    this.transport = options.transport ?? "tcp";
    this.url = options.url;
  }

  async connect(): Promise<void> {
    await this.ensureConnection();
    const result = await this.request<{ connected: boolean }>("connect");
    this.connected = Boolean(result?.connected);
  }

  async disconnect(): Promise<void> {
    if (!this.connection) {
      this.connected = false;
      return;
    }

    try {
      await this.request("disconnect");
    } finally {
      try {
        await this.connection.close();
      } catch {
        /* already gone */
      }
      this.connection = undefined;
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

  async info(): Promise<{
    connected: boolean;
    clients: number;
    host: string;
    port: number;
    transport?: string;
  }> {
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

  get batteryVoltage(): Promise<number> {
    this.assertConnected();
    return this.request<{ value: number }>("getBatteryVoltage").then((result) => result?.value ?? 12000);
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

  private async ensureConnection(): Promise<void> {
    if (this.connection) {
      return;
    }
    if (this.connectPromise) {
      return this.connectPromise;
    }

    this.connectPromise = (this.transport === "tcp"
      ? this.connectTcp()
      : this.connectWebSocket()
    ).finally(() => {
      this.connectPromise = undefined;
    });

    return this.connectPromise;
  }

  // ---- TCP transport ----

  private connectTcp(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let buffer = "";
      const socket: Socket = createConnection(this.port, this.host, () => {
        const conn: ClientConnection = {
          send: (payload) => {
            if (!socket.destroyed) socket.write(`${payload}\n`);
          },
          close: () =>
            new Promise<void>((res) => {
              if (socket.destroyed) {
                res();
                return;
              }
              socket.end(() => {
                socket.destroy();
                res();
              });
            })
        };

        socket.on("data", (chunk) => {
          buffer += chunk.toString("utf8");
          let newlineIndex = buffer.indexOf("\n");
          while (newlineIndex >= 0) {
            const line = buffer.slice(0, newlineIndex).trim();
            buffer = buffer.slice(newlineIndex + 1);
            if (line) this.handleLine(line);
            newlineIndex = buffer.indexOf("\n");
          }
        });
        socket.on("error", (error) => this.handleTransportError(error));
        socket.on("close", () => this.handleTransportClose());

        this.connection = conn;
        resolve();
      });

      socket.on("error", (error) => {
        if (!this.connection) reject(error);
      });
    });
  }

  // ---- WebSocket transport ----

  private connectWebSocket(): Promise<void> {
    const url = this.url ?? `ws://${this.host}:${this.port}`;

    // Use the global `WebSocket` — Node 22+ exposes it as a global, and
    // every browser has it. We don't import `ws` here so the client
    // module stays dep-free for browser bundling.
    const WS: typeof WebSocket | undefined = (globalThis as { WebSocket?: typeof WebSocket }).WebSocket;
    if (!WS) {
      return Promise.reject(
        new Error(
          "GatewayClient: WebSocket transport requested but no global WebSocket is available. Node 22+ is required."
        )
      );
    }

    return new Promise<void>((resolve, reject) => {
      const ws = new WS(url);
      // We receive plain JSON strings; the binary path is unused.
      ws.binaryType = "arraybuffer";

      const conn: ClientConnection = {
        send: (payload) => {
          if (ws.readyState === ws.OPEN) ws.send(payload);
        },
        close: () =>
          new Promise<void>((res) => {
            if (ws.readyState === ws.CLOSED) {
              res();
              return;
            }
            const onClose = () => {
              ws.removeEventListener("close", onClose);
              res();
            };
            ws.addEventListener("close", onClose);
            try {
              ws.close();
            } catch {
              res();
            }
          })
      };

      ws.addEventListener("open", () => {
        this.connection = conn;
        resolve();
      });

      ws.addEventListener("message", (event: MessageEvent) => {
        // Server is expected to send strings. If we ever get binary
        // (ArrayBuffer), decode as UTF-8 — same payload semantics.
        const data = event.data;
        const text =
          typeof data === "string"
            ? data
            : new TextDecoder().decode(new Uint8Array(data as ArrayBuffer));
        const line = text.trim();
        if (line) this.handleLine(line);
      });

      ws.addEventListener("error", () => {
        // The error event itself carries no detail in browsers; surface
        // a generic message and rely on the close handler for state
        // cleanup.
        if (!this.connection) {
          reject(new Error("GatewayClient: WebSocket connection failed"));
        } else {
          this.handleTransportError(new Error("WebSocket error"));
        }
      });

      ws.addEventListener("close", () => this.handleTransportClose());
    });
  }

  // ---- Shared JSON-RPC plumbing ----

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

  private handleTransportError(error: Error): void {
    for (const pending of this.pending.values()) {
      pending.reject(error);
    }
    this.pending.clear();
    this.connected = false;
  }

  private handleTransportClose(): void {
    const error = new Error("Gateway connection closed");
    for (const pending of this.pending.values()) {
      pending.reject(error);
    }
    this.pending.clear();
    this.connected = false;
    this.connection = undefined;
  }

  private async request<T = unknown>(method: string, params?: unknown): Promise<T> {
    await this.ensureConnection();
    const conn = this.connection;
    if (!conn) {
      throw new Error("Gateway connection not available");
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
      conn.send(JSON.stringify(payload));
    });
  }

  private assertConnected(): void {
    if (!this.connected) {
      throw new Error("Gateway client is not connected");
    }
  }
}

export type { GatewayClientOptions };
