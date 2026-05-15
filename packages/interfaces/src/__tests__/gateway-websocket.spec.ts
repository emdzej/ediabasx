import { afterEach, describe, expect, it, vi } from "vitest";
import { GatewayServer } from "../gateway-server";
import { GatewayClient } from "../gateway-client";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";

class MockInterface extends EdiabasInterface {
  sent: Uint8Array[] = [];
  responses: Uint8Array[] = [];
  parameters: Array<[number, number]> = [];

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

  async getPort(): Promise<number> {
    return 0;
  }

  async setPort(): Promise<void> {
    /* no-op */
  }

  get ignitionVoltage(): number {
    return 0;
  }

  get batteryVoltage(): number {
    return 12000;
  }

  get loopTest(): number {
    return 0;
  }

  async setProgramVoltage(): Promise<void> {
    /* no-op */
  }

  async rawData(request: Uint8Array): Promise<Uint8Array> {
    return Uint8Array.from(request).reverse();
  }

  async switchSiRelais(): Promise<void> {
    /* no-op */
  }
}

describe("GatewayServer (websocket transport)", () => {
  const logger = {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn()
  };

  let server: GatewayServer | undefined;
  let client: GatewayClient | undefined;

  afterEach(async () => {
    if (client) {
      await client.disconnect();
      client = undefined;
    }
    if (server) {
      await server.stop();
      server = undefined;
    }
  });

  it("round-trips connect/send/receive over WebSocket", async () => {
    const iface = new MockInterface();
    iface.responses.push(Uint8Array.from([4, 5, 6]));

    server = new GatewayServer({
      interface: iface,
      port: 0,
      transport: "websocket",
      logger
    });
    await server.start();

    expect(server.getTransport()).toBe("websocket");

    client = new GatewayClient({
      host: server.address.host,
      port: server.address.port,
      transport: "websocket"
    });
    await client.connect();

    await client.send(Uint8Array.from([1, 2, 3]));
    const response = await client.receive();

    expect(iface.sent).toHaveLength(1);
    expect(Array.from(iface.sent[0])).toEqual([1, 2, 3]);
    expect(Array.from(response)).toEqual([4, 5, 6]);
  });

  it("reports websocket transport via info()", async () => {
    const iface = new MockInterface();

    server = new GatewayServer({
      interface: iface,
      port: 0,
      transport: "websocket",
      logger
    });
    await server.start();

    client = new GatewayClient({
      host: server.address.host,
      port: server.address.port,
      transport: "websocket"
    });
    await client.connect();

    const info = await client.info();
    expect(info.transport).toBe("websocket");
    expect(info.clients).toBe(1);
  });

  it("rejects plain HTTP requests with 426 Upgrade Required", async () => {
    const iface = new MockInterface();
    server = new GatewayServer({
      interface: iface,
      port: 0,
      transport: "websocket",
      logger
    });
    await server.start();

    const response = await fetch(
      `http://${server.address.host}:${server.address.port}/`
    );
    expect(response.status).toBe(426);
    expect(response.headers.get("upgrade")?.toLowerCase()).toBe("websocket");
  });

  it("supports rawData round-trip over WebSocket", async () => {
    const iface = new MockInterface();

    server = new GatewayServer({
      interface: iface,
      port: 0,
      transport: "websocket",
      logger
    });
    await server.start();

    client = new GatewayClient({
      host: server.address.host,
      port: server.address.port,
      transport: "websocket"
    });
    await client.connect();

    const result = await client.rawData(Uint8Array.from([1, 2, 3, 4]));
    expect(Array.from(result)).toEqual([4, 3, 2, 1]);
  });
});
