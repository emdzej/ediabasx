import { createConnection, type Socket } from "node:net";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GatewayServer } from "../gateway-server";
import { EdiabasInterface } from "@ediabasx/interface-base";

type Deferred<T> = {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
};

function createDeferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

class MockInterface extends EdiabasInterface {
  sent: Uint8Array[] = [];
  responses: Uint8Array[] = [];
  parameters: Array<[number, number]> = [];
  ports = new Map<number, number>();
  programVoltage: number | undefined;
  lastSiRelaisTime: number | undefined;

  async connect(): Promise<void> {
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  async send(data: Uint8Array): Promise<void> {
    this.sent.push(data);
  }

  async receive(): Promise<Uint8Array> {
    return this.responses.shift() ?? new Uint8Array();
  }

  async setParameter(parameter: number, value: number): Promise<void> {
    this.parameters.push([parameter, value]);
  }

  async getPort(index: number): Promise<number> {
    return this.ports.get(index) ?? 0;
  }

  async setPort(index: number, value: number): Promise<void> {
    this.ports.set(index, value);
  }

  get ignitionVoltage(): number {
    return 123;
  }

  get loopTest(): number {
    return 7;
  }

  async setProgramVoltage(value: number): Promise<void> {
    this.programVoltage = value;
  }

  async rawData(request: Uint8Array): Promise<Uint8Array> {
    return Uint8Array.from(request).reverse();
  }

  async switchSiRelais(time: number): Promise<void> {
    this.lastSiRelaisTime = time;
  }
}

function createLineReader(socket: Socket) {
  let buffer = "";
  const queue: string[] = [];
  const pending: Array<(line: string) => void> = [];

  socket.on("data", (chunk) => {
    buffer += chunk.toString("utf8");
    let index = buffer.indexOf("\n");
    while (index >= 0) {
      const line = buffer.slice(0, index);
      buffer = buffer.slice(index + 1);
      const resolver = pending.shift();
      if (resolver) {
        resolver(line);
      } else {
        queue.push(line);
      }
      index = buffer.indexOf("\n");
    }
  });

  return () =>
    new Promise<string>((resolve) => {
      const line = queue.shift();
      if (line !== undefined) {
        resolve(line);
        return;
      }
      pending.push(resolve);
    });
}

function createRpcClient(socket: Socket) {
  const readLine = createLineReader(socket);
  return async (request: unknown): Promise<unknown> => {
    socket.write(`${JSON.stringify(request)}\n`);
    const line = await readLine();
    return JSON.parse(line) as unknown;
  };
}

describe("GatewayServer", () => {
  const logger = {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn()
  };

  let server: GatewayServer | undefined;
  let socket: Socket | undefined;

  afterEach(async () => {
    socket?.end();
    socket?.destroy();
    socket = undefined;
    if (server) {
      await server.stop();
      server = undefined;
    }
  });

  it("handles connect, send, receive, info, and extended methods", async () => {
    const iface = new MockInterface();
    iface.responses.push(Uint8Array.from([9, 10]));
    iface.ports.set(2, 99);

    server = new GatewayServer({ interface: iface, port: 0, logger });
    await server.start();

    socket = createConnection(server.address.port, server.address.host);
    const sendRpc = createRpcClient(socket);

    const connectResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 1,
      method: "connect"
    });

    expect((connectResponse as { result: { connected: boolean } }).result.connected).toBe(true);

    const sendResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 2,
      method: "send",
      params: { data: [1, 2, 3] }
    });

    expect((sendResponse as { result: { ok: boolean } }).result.ok).toBe(true);

    const receiveResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 3,
      method: "receive"
    });

    expect((receiveResponse as { result: { data: number[] } }).result.data).toEqual([9, 10]);

    const infoResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 4,
      method: "info"
    });

    expect((infoResponse as { result: { clients: number } }).result.clients).toBe(1);

    const setParamResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 5,
      method: "setParam",
      params: { parameter: 5, value: 11 }
    });

    expect((setParamResponse as { result: { ok: boolean } }).result.ok).toBe(true);
    expect(iface.parameters).toEqual([[5, 11]]);

    const getPortResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 6,
      method: "getPort",
      params: { index: 2 }
    });

    expect((getPortResponse as { result: { value: number } }).result.value).toBe(99);

    const setPortResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 7,
      method: "setPort",
      params: { index: 3, value: 44 }
    });

    expect((setPortResponse as { result: { ok: boolean } }).result.ok).toBe(true);
    expect(iface.ports.get(3)).toBe(44);

    const ignitionResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 8,
      method: "getIgnitionVoltage"
    });

    expect((ignitionResponse as { result: { value: number } }).result.value).toBe(123);

    const loopTestResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 9,
      method: "getLoopTest"
    });

    expect((loopTestResponse as { result: { value: number } }).result.value).toBe(7);

    const programResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 10,
      method: "setProgramVoltage",
      params: { value: 42 }
    });

    expect((programResponse as { result: { ok: boolean } }).result.ok).toBe(true);
    expect(iface.programVoltage).toBe(42);

    const rawResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 11,
      method: "rawData",
      params: { data: [1, 2, 3] }
    });

    expect((rawResponse as { result: { data: number[] } }).result.data).toEqual([3, 2, 1]);

    const siResponse = await sendRpc({
      jsonrpc: "2.0",
      id: 12,
      method: "switchSiRelais",
      params: { time: 6 }
    });

    expect((siResponse as { result: { ok: boolean } }).result.ok).toBe(true);
    expect(iface.lastSiRelaisTime).toBe(6);
  });

  it("queues interface requests sequentially", async () => {
    const iface = new MockInterface();
    const deferred = createDeferred<void>();
    let callCount = 0;

    iface.send = vi.fn(async () => {
      callCount += 1;
      if (callCount === 1) {
        await deferred.promise;
      }
    });

    server = new GatewayServer({ interface: iface, port: 0, logger });
    await server.start();

    socket = createConnection(server.address.port, server.address.host);
    const sendRpc = createRpcClient(socket);

    const firstResponse = sendRpc({
      jsonrpc: "2.0",
      id: "a",
      method: "send",
      params: { data: [1] }
    });

    const secondResponse = sendRpc({
      jsonrpc: "2.0",
      id: "b",
      method: "send",
      params: { data: [2] }
    });

    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(callCount).toBe(1);

    deferred.resolve();

    await Promise.all([firstResponse, secondResponse]);
    expect(callCount).toBe(2);
  });
});
