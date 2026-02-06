import { afterEach, describe, expect, it, vi } from "vitest";
import { GatewayServer } from "../gateway-server";
import { GatewayClient } from "../gateway-client";
import { EdiabasInterface } from "@ediabas/interface-base";

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
});
