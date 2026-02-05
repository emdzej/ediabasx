import { describe, expect, it } from "vitest";
import { RegisterSet } from "./registers";
import {
  xconnect,
  xhangup,
  xsend,
  xrecv,
  xsendr,
  xreset,
  xtype,
  xvers,
  type CommunicationInterface,
} from "./operations/communication";
import { EdiabasError } from "@ediabas/core";
import { utf8ToCp1252 } from "@ediabas/core";

class TimeoutError extends Error {
  constructor() {
    super("Receive timed out");
    this.name = "EdiabasTimeoutError";
  }
}

class MockInterface implements CommunicationInterface {
  connected = false;
  sent: Uint8Array[] = [];
  receiveQueue: Uint8Array[] = [];
  resetCalled = false;
  type = "mock";
  version = 0x1234;

  async connect(): Promise<void> {
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  async send(data: Uint8Array): Promise<void> {
    if (!this.connected) {
      throw new Error("Not connected");
    }
    this.sent.push(data);
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    if (!this.connected) {
      throw new Error("Not connected");
    }
    if (this.receiveQueue.length > 0) {
      return this.receiveQueue.shift() as Uint8Array;
    }
    if (timeoutMs && timeoutMs > 0) {
      await new Promise<void>((_, reject) =>
        setTimeout(() => reject(new TimeoutError()), timeoutMs)
      );
    }
    return new Uint8Array();
  }

  isConnected(): boolean {
    return this.connected;
  }

  async reset(): Promise<void> {
    this.resetCalled = true;
  }
}

describe("communication operations", () => {
  it("xconnect and xhangup should toggle connection", async () => {
    const iface = new MockInterface();

    await xconnect(iface);
    expect(iface.connected).toBe(true);

    await xhangup(iface);
    expect(iface.connected).toBe(false);
  });

  it("xsend should transmit bytes from S register", async () => {
    const registers = new RegisterSet();
    const iface = new MockInterface();
    registers.setS(0, "HELLO");

    await xconnect(iface);
    await xsend(registers, iface, { kind: "S", index: 0 });

    expect(iface.sent).toHaveLength(1);
    expect(Array.from(iface.sent[0])).toEqual(Array.from(utf8ToCp1252("HELLO")));
  });

  it("xrecv should populate S register with response", async () => {
    const registers = new RegisterSet();
    const iface = new MockInterface();
    iface.receiveQueue.push(utf8ToCp1252("OK"));

    await xconnect(iface);
    await xrecv(registers, iface, { kind: "S", index: 1 });

    expect(registers.getS(1)).toBe("OK");
  });

  it("xsendr should send request and receive response", async () => {
    const registers = new RegisterSet();
    const iface = new MockInterface();
    registers.setS(0, "PING");
    iface.receiveQueue.push(utf8ToCp1252("PONG"));

    await xconnect(iface);
    await xsendr(
      registers,
      iface,
      { kind: "S", index: 2 },
      { kind: "S", index: 0 }
    );

    expect(iface.sent).toHaveLength(1);
    expect(registers.getS(2)).toBe("PONG");
  });

  it("xreset should call reset when available", async () => {
    const iface = new MockInterface();

    await xreset(iface);

    expect(iface.resetCalled).toBe(true);
  });

  it("xtype and xvers should return interface metadata", () => {
    const registers = new RegisterSet();
    const iface = new MockInterface();

    xtype(registers, iface, { kind: "S", index: 0 });
    xvers(registers, iface, { kind: "I", index: 0 });

    expect(registers.getS(0)).toBe("mock");
    expect(registers.getI(0)).toBe(0x1234);
  });

  it("xrecv should surface timeout errors as EdiabasError", async () => {
    const registers = new RegisterSet();
    const iface = new MockInterface();
    registers.setI(0, 1);

    await xconnect(iface);

    await expect(
      xrecv(registers, iface, { kind: "S", index: 0 }, { kind: "I", index: 0 })
    ).rejects.toBeInstanceOf(EdiabasError);
  });
});
