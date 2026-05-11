import { afterEach, describe, expect, it, vi } from "vitest";
import { GatewayServer } from "../gateway-server";
import { GatewayClient } from "../gateway-client";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";

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
    return 321;
  }

  get batteryVoltage(): number {
    return 12345;
  }

  get loopTest(): number {
    return 8;
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

describe("GatewayClient", () => {
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

  it("connects and proxies send/receive calls", async () => {
    const iface = new MockInterface();
    iface.responses.push(Uint8Array.from([1, 2, 3]));

    server = new GatewayServer({ interface: iface, port: 0, logger });
    await server.start();

    client = new GatewayClient({ host: server.address.host, port: server.address.port });
    await client.connect();

    await client.send(Uint8Array.from([9, 8]));
    const response = await client.receive();

    expect(iface.sent).toHaveLength(1);
    expect(Array.from(iface.sent[0])).toEqual([9, 8]);
    expect(Array.from(response)).toEqual([1, 2, 3]);
  });

  it("supports setParameter via gateway", async () => {
    const iface = new MockInterface();

    server = new GatewayServer({ interface: iface, port: 0, logger });
    await server.start();

    client = new GatewayClient({ host: server.address.host, port: server.address.port });
    await client.connect();

    await client.setParameter(7, 12);

    expect(iface.parameters).toEqual([[7, 12]]);
  });

  it("supports extended interface methods via gateway", async () => {
    const iface = new MockInterface();
    iface.ports.set(2, 55);

    server = new GatewayServer({ interface: iface, port: 0, logger });
    await server.start();

    client = new GatewayClient({ host: server.address.host, port: server.address.port });
    await client.connect();

    const portValue = await client.getPort(2);
    await client.setPort(3, 44);
    const ignitionVoltage = await client.ignitionVoltage;
    const loopTest = await client.loopTest;
    await client.setProgramVoltage(90);
    const rawResponse = await client.rawData(Uint8Array.from([1, 2]));
    await client.switchSiRelais(6);

    expect(portValue).toBe(55);
    expect(iface.ports.get(3)).toBe(44);
    expect(ignitionVoltage).toBe(321);
    expect(loopTest).toBe(8);
    expect(iface.programVoltage).toBe(90);
    expect(Array.from(rawResponse)).toEqual([2, 1]);
    expect(iface.lastSiRelaisTime).toBe(6);
  });
});
