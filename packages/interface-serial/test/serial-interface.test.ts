import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SerialPortMock } from "serialport";
import { MockBinding as ExternalMockBinding } from "@serialport/mock-binding";
import {
  CommonAdapterConfigs,
  SerialInterface,
  SerialTiming
} from "../src";
import { EdiabasTimeoutError } from "@ediabas/interface-base";

const PORT_PATH = "/dev/EDIABAS";
const MockBinding = SerialPortMock.binding;

const makeBytes = (length: number, seed = 0): Uint8Array =>
  Uint8Array.from({ length }, (_, index) => (seed + index) & 0xff);

const openInterfaces: SerialInterface[] = [];

const createInterface = (overrides: Partial<ConstructorParameters<typeof SerialInterface>[0]> = {}) => {
  MockBinding.createPort(PORT_PATH, { echo: false, record: true });
  const iface = new SerialInterface({
    port: PORT_PATH,
    initType: "none",
    portClass: SerialPortMock,
    ...overrides
  });
  openInterfaces.push(iface);
  return iface;
};

const createInterfaceWithoutInit = (
  overrides: Partial<ConstructorParameters<typeof SerialInterface>[0]> = {}
) => {
  MockBinding.createPort(PORT_PATH, { echo: false, record: true });
  const iface = new SerialInterface({
    port: PORT_PATH,
    portClass: SerialPortMock,
    ...overrides
  });
  openInterfaces.push(iface);
  return iface;
};

const getMockPort = (instance: SerialInterface) =>
  (instance as unknown as { port: SerialPortMock | null }).port;

const getRecording = (instance: SerialInterface): Buffer => {
  const port = getMockPort(instance);
  return port?.port?.recording ?? Buffer.alloc(0);
};

const emitData = (instance: SerialInterface, data: Uint8Array | number[]) => {
  const port = getMockPort(instance);
  if (!port) {
    return;
  }
  const payload = Buffer.from(data);
  const emitter = port as unknown as { emit?: (event: string, payload: Buffer) => void };
  if (typeof emitter.emit === "function") {
    emitter.emit("data", payload);
    return;
  }
  port.port?.emitData(payload);
};

type SerialConfigSnapshot = {
  baudRate: number;
  dataBits: number;
  stopBits: number;
  parity: string;
  initType: string;
  p1DelayMs: number;
  timeoutMs: number;
};

const getConfigSnapshot = (instance: SerialInterface): SerialConfigSnapshot =>
  (instance as unknown as { config: SerialConfigSnapshot }).config;

class TrackingSerialInterface extends SerialInterface {
  public delays: number[] = [];
  public states: boolean[] = [];
  private time = 0;

  protected override async delay(ms: number): Promise<void> {
    this.delays.push(ms);
    this.time += ms;
  }

  protected override now(): number {
    return this.time;
  }

  protected override async setLineState(activeLow: boolean): Promise<void> {
    this.states.push(activeLow);
  }

  advance(ms: number): void {
    this.time += ms;
  }
}

const createTrackingInterface = (
  overrides: Partial<ConstructorParameters<typeof SerialInterface>[0]> = {}
) => {
  MockBinding.createPort(PORT_PATH, { echo: false, record: true });
  const iface = new TrackingSerialInterface({
    port: PORT_PATH,
    initType: "none",
    portClass: SerialPortMock,
    ...overrides
  });
  openInterfaces.push(iface);
  return iface;
};

beforeEach(() => {
  ExternalMockBinding.reset();
  MockBinding.reset();
  openInterfaces.length = 0;
});

afterEach(async () => {
  await Promise.all(
    openInterfaces.map(async (iface) => {
      try {
        await iface.disconnect();
      } catch {
        // ignore
      }
    })
  );
  MockBinding.reset();
});

describe("SerialInterface connection lifecycle", () => {
  it("starts disconnected", () => {
    const iface = createInterface();
    expect(iface.isConnected()).toBe(false);
  });

  it("connect marks connected", async () => {
    const iface = createInterface();
    await iface.connect();
    expect(iface.isConnected()).toBe(true);
  });

  it("connect is idempotent", async () => {
    const iface = createInterface();
    await iface.connect();
    await iface.connect();
    expect(iface.isConnected()).toBe(true);
  });

  it("disconnect marks disconnected", async () => {
    const iface = createInterface();
    await iface.connect();
    await iface.disconnect();
    expect(iface.isConnected()).toBe(false);
  });

  it("disconnect without connect is safe", async () => {
    const iface = createInterface();
    await iface.disconnect();
    expect(iface.isConnected()).toBe(false);
  });

  it("send throws when disconnected", async () => {
    const iface = createInterface();
    await expect(iface.send(makeBytes(2))).rejects.toThrow("Not connected");
  });

  it("receive throws when disconnected", async () => {
    const iface = createInterface();
    await expect(iface.receive()).rejects.toThrow("Not connected");
  });

  it("disconnect rejects pending receive", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive(1000);
    await iface.disconnect();
    await expect(pending).rejects.toThrow("Disconnected");
  });

  it("disconnect rejects multiple pending receives", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = [iface.receive(1000), iface.receive(1000), iface.receive(1000)];
    await iface.disconnect();
    for (const task of pending) {
      await expect(task).rejects.toThrow("Disconnected");
    }
  });

  it("disconnect clears buffered data", async () => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, [0x10]);
    await iface.disconnect();
    await expect(iface.receive(10)).rejects.toThrow("Not connected");
  });

  it("connect after disconnect does not resolve old receives", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive(50);
    await iface.disconnect();
    await iface.connect();
    await expect(pending).rejects.toThrow("Disconnected");
  });
});

describe("SerialInterface adapter config", () => {
  const presets = Object.entries(CommonAdapterConfigs);

  it.each(presets)("applies preset %s", async (name, config) => {
    const iface = createInterfaceWithoutInit({ adapter: name as never });
    const merged = (iface as unknown as { config: typeof config }).config;
    expect(merged.baudRate).toBe(config.baudRate);
    expect(merged.dataBits).toBe(config.dataBits);
    expect(merged.stopBits).toBe(config.stopBits);
    expect(merged.parity).toBe(config.parity);
    expect(merged.initType).toBe(config.initType);
  });

  it("explicit config overrides adapter preset", () => {
    const iface = createInterface({
      adapter: "inpa",
      baudRate: 4800,
      parity: "even",
      initType: "slow"
    });
    const merged = getConfigSnapshot(iface);
    expect(merged.baudRate).toBe(4800);
    expect(merged.parity).toBe("even");
    expect(merged.initType).toBe("slow");
  });

  it.each([
    { value: -5, expected: SerialTiming.p1Min },
    { value: 50, expected: SerialTiming.p1Max },
    { value: 10, expected: 10 }
  ])("clamps p1DelayMs ($value)", ({ value, expected }) => {
    const iface = createInterface({ p1DelayMs: value });
    const merged = getConfigSnapshot(iface);
    expect(merged.p1DelayMs).toBe(expected);
  });

  it("default timeout is applied", () => {
    const iface = createInterface();
    const merged = getConfigSnapshot(iface);
    expect(merged.timeoutMs).toBe(5000);
  });

  it("allows custom timeout", () => {
    const iface = createInterface({ timeoutMs: 1234 });
    const merged = getConfigSnapshot(iface);
    expect(merged.timeoutMs).toBe(1234);
  });
});

describe("SerialInterface send/receive", () => {
  it("send writes bytes to port", async () => {
    const iface = createInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x10, 0x20]));
    expect(getRecording(iface)).toEqual(Buffer.from([0x10, 0x20]));
  });

  it("receive returns buffered data", async () => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, [0xaa, 0xbb]);
    const response = await iface.receive();
    expect([...response]).toEqual([0xaa, 0xbb]);
  });

  it("receive resolves pending when data arrives", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive();
    emitData(iface, [0x01]);
    await expect(pending).resolves.toEqual(Uint8Array.from([0x01]));
  });

  it("buffered data preserves order", async () => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, [0x01]);
    emitData(iface, [0x02]);
    const first = await iface.receive();
    const second = await iface.receive();
    expect([...first]).toEqual([0x01]);
    expect([...second]).toEqual([0x02]);
  });

  it("pending receivers resolve in order", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = [iface.receive(), iface.receive()];
    emitData(iface, [0x11]);
    emitData(iface, [0x22]);
    await expect(pending[0]).resolves.toEqual(Uint8Array.from([0x11]));
    await expect(pending[1]).resolves.toEqual(Uint8Array.from([0x22]));
  });

  it("receive timeout rejects with EdiabasTimeoutError", async () => {
    vi.useFakeTimers();
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive(20);
    vi.advanceTimersByTime(20);
    await expect(pending).rejects.toThrow(EdiabasTimeoutError);
    vi.useRealTimers();
  });

  it("timeout is cleared when data arrives", async () => {
    vi.useFakeTimers();
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive(50);
    emitData(iface, [0x99]);
    vi.advanceTimersByTime(50);
    await expect(pending).resolves.toEqual(Uint8Array.from([0x99]));
    vi.useRealTimers();
  });

  it("receive returns Uint8Array", async () => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, [0x7f]);
    const response = await iface.receive();
    expect(response).toBeInstanceOf(Uint8Array);
  });

  it("send respects empty payload", async () => {
    const iface = createInterface();
    await iface.connect();
    await iface.send(new Uint8Array());
    expect(getRecording(iface)).toEqual(Buffer.alloc(0));
  });

  it.each([1, 2, 5, 8, 16, 32, 64])(
    "send/receive handles payload length %s",
    async (length) => {
      const iface = createInterface();
      await iface.connect();
      const payload = makeBytes(length, 3);
      emitData(iface, payload);
      const response = await iface.receive();
      expect(response.length).toBe(length);
    }
  );
});

describe("SerialInterface timing (P1/P2/P3)", () => {
  it("P1 delay is applied between bytes", async () => {
    const iface = createTrackingInterface({ p1DelayMs: 10 });
    await iface.connect();
    await iface.send(Uint8Array.from([0x01, 0x02, 0x03]));
    expect(iface.delays).toEqual([10, 10]);
  });

  it("P1 delay is not applied when only one byte", async () => {
    const iface = createTrackingInterface({ p1DelayMs: 10 });
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    expect(iface.delays).toEqual([]);
  });

  it("P1 delay is clamped to max", async () => {
    const iface = createTrackingInterface({ p1DelayMs: 100 });
    await iface.connect();
    await iface.send(Uint8Array.from([0x01, 0x02]));
    expect(iface.delays).toEqual([SerialTiming.p1Max]);
  });

  it("P2 delay is applied before delivering response", async () => {
    const iface = createTrackingInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    emitData(iface, [0x10]);
    const pending = iface.receive();
    await expect(pending).resolves.toEqual(Uint8Array.from([0x10]));
    expect(iface.delays).toContain(SerialTiming.p2Min);
  });

  it("P2 delay is skipped when elapsed exceeds minimum", async () => {
    const iface = createTrackingInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    iface.advance(SerialTiming.p2Min + 5);
    emitData(iface, [0x10]);
    const pending = iface.receive();
    await expect(pending).resolves.toEqual(Uint8Array.from([0x10]));
    expect(iface.delays).toEqual([]);
  });

  it("P3 delay is applied before sending", async () => {
    const iface = createTrackingInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    await iface.send(Uint8Array.from([0x02]));
    expect(iface.delays).toContain(SerialTiming.p3Min);
  });

  it("P3 delay is skipped when elapsed exceeds minimum", async () => {
    const iface = createTrackingInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    iface.advance(SerialTiming.p3Min + 10);
    await iface.send(Uint8Array.from([0x02]));
    expect(iface.delays).not.toContain(SerialTiming.p3Min);
  });

  it.each([0, 5, 10, 15, 20])(
    "P1 delay is accepted for %sms",
    async (delayMs) => {
      const iface = createTrackingInterface({ p1DelayMs: delayMs });
      await iface.connect();
      await iface.send(Uint8Array.from([0x11, 0x22]));
      const applied = iface.delays[0] ?? 0;
      expect(applied).toBe(delayMs);
    }
  );
});

describe("SerialInterface K-Line init", () => {
  it("fast init toggles line low/high with delays", async () => {
    const iface = createTrackingInterface({ initType: "fast" });
    await iface.connect();
    expect(iface.states).toEqual([true, false]);
    expect(iface.delays).toEqual([SerialTiming.fastInitLow, SerialTiming.fastInitHigh]);
  });

  it("slow init sends 11-bit sequence", async () => {
    const iface = createTrackingInterface({ initType: "slow" });
    await iface.connect();
    expect(iface.states.length).toBe(11);
    expect(iface.delays.length).toBe(11);
  });

  it("slow init uses 200ms per bit", async () => {
    const iface = createTrackingInterface({ initType: "slow" });
    await iface.connect();
    expect(new Set(iface.delays)).toEqual(new Set([SerialTiming.slowInitBit]));
  });

  it("fast init uses 25ms low/high", async () => {
    const iface = createTrackingInterface({ initType: "fast" });
    await iface.connect();
    expect(iface.delays).toEqual([25, 25]);
  });

  it("no init skips line toggles", async () => {
    const iface = createTrackingInterface({ initType: "none" });
    await iface.connect();
    expect(iface.states).toEqual([]);
  });

  it("slow init starts with start bit low", async () => {
    const iface = createTrackingInterface({ initType: "slow" });
    await iface.connect();
    expect(iface.states[0]).toBe(true);
  });

  it("slow init ends with stop bit high", async () => {
    const iface = createTrackingInterface({ initType: "slow" });
    await iface.connect();
    expect(iface.states.at(-1)).toBe(false);
  });

  it("slow init includes parity bit", async () => {
    const iface = createTrackingInterface({ initType: "slow" });
    await iface.connect();
    expect(iface.states.length).toBe(11);
  });

  it.each(["fast", "slow"] as const)("connect runs %s init", async (initType) => {
    const iface = createTrackingInterface({ initType });
    await iface.connect();
    expect(iface.states.length).toBeGreaterThan(0);
  });

  it.each(["fast", "slow", "none"] as const)(
    "initType %s does not throw",
    async (initType) => {
      const iface = createTrackingInterface({ initType });
      await expect(iface.connect()).resolves.toBeUndefined();
    }
  );
});

describe("SerialInterface error handling", () => {
  it("normalizes permission errors", async () => {
    const iface = createInterface();
    const error = (iface as unknown as { normalizeError: (e: Error, p: string) => Error })
      .normalizeError(new Error("permission denied"), PORT_PATH);
    expect(error.message).toContain("permission denied");
  });

  it("normalizes not found errors", async () => {
    const iface = createInterface();
    const error = (iface as unknown as { normalizeError: (e: Error, p: string) => Error })
      .normalizeError(new Error("ENOENT"), PORT_PATH);
    expect(error.message).toContain("not found");
  });

  it("wraps generic errors", async () => {
    const iface = createInterface();
    const error = (iface as unknown as { normalizeError: (e: Error, p: string) => Error })
      .normalizeError(new Error("boom"), PORT_PATH);
    expect(error.message).toContain("Serial port error");
  });

  it("port error rejects pending receive", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive(1000);
    const port = getMockPort(iface);
    port?.emit("error", new Error("boom"));
    await expect(pending).rejects.toThrow("Serial port error");
  });

  it("receive timeout does not clear other pending receivers", async () => {
    vi.useFakeTimers();
    const iface = createInterface();
    await iface.connect();
    const first = iface.receive(10);
    const second = iface.receive(20);
    vi.advanceTimersByTime(10);
    await expect(first).rejects.toThrow(EdiabasTimeoutError);
    emitData(iface, [0x55]);
    vi.advanceTimersByTime(20);
    await expect(second).resolves.toEqual(Uint8Array.from([0x55]));
    vi.useRealTimers();
  });

  it("disconnect after port error clears pending", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive(1000);
    const port = getMockPort(iface);
    port?.emit("error", new Error("boom"));
    await iface.disconnect();
    await expect(pending).rejects.toThrow("Serial port error");
  });

  it.each([
    "permission denied",
    "not found",
    "enoent",
    "no such file"
  ])("normalizeError handles %s", (message) => {
    const iface = createInterface();
    const error = (iface as unknown as { normalizeError: (e: Error, p: string) => Error })
      .normalizeError(new Error(message), PORT_PATH);
    expect(error).toBeInstanceOf(Error);
  });
});

describe("SerialInterface buffer handling", () => {
  it("buffers data when no pending receive", async () => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, [0xaa]);
    const response = await iface.receive();
    expect([...response]).toEqual([0xaa]);
  });

  it("buffered queue preserves order", async () => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, [0x01]);
    emitData(iface, [0x02]);
    emitData(iface, [0x03]);
    const responses = [await iface.receive(), await iface.receive(), await iface.receive()];
    expect(responses.map((r) => r[0])).toEqual([0x01, 0x02, 0x03]);
  });

  it("pending receives preempt buffered queue", async () => {
    const iface = createInterface();
    await iface.connect();
    const pending = iface.receive();
    emitData(iface, [0x10]);
    await expect(pending).resolves.toEqual(Uint8Array.from([0x10]));
  });

  it("handles rapid multiple data events", async () => {
    const iface = createInterface();
    await iface.connect();
    for (let i = 0; i < 5; i += 1) {
      emitData(iface, [i]);
    }
    const received = [] as number[];
    for (let i = 0; i < 5; i += 1) {
      const data = await iface.receive();
      received.push(data[0]);
    }
    expect(received).toEqual([0, 1, 2, 3, 4]);
  });

  it.each([1, 2, 3, 4, 5])("handles %s pending receives", async (count) => {
    const iface = createInterface();
    await iface.connect();
    const pending = Array.from({ length: count }, () => iface.receive());
    for (let i = 0; i < count; i += 1) {
      emitData(iface, [0x30 + i]);
    }
    const results = await Promise.all(pending);
    expect(results.map((r) => r[0])).toEqual(
      Array.from({ length: count }, (_, index) => 0x30 + index)
    );
  });
});

describe("SerialInterface timing boundaries", () => {
  it.each([
    { elapsed: 0, expected: 25 },
    { elapsed: 5, expected: 20 },
    { elapsed: 10, expected: 15 },
    { elapsed: 20, expected: 5 },
    { elapsed: 25, expected: 0 },
    { elapsed: 30, expected: 0 }
  ])("P2 delay for elapsed $elapsed", async ({ elapsed, expected }) => {
    const iface = createTrackingInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    iface.advance(elapsed);
    emitData(iface, [0x20]);
    const response = await iface.receive();
    expect([...response]).toEqual([0x20]);
    if (expected > 0) {
      expect(iface.delays).toContain(expected);
    } else {
      expect(iface.delays).toEqual([]);
    }
  });

  it.each([
    { elapsed: 0, expected: 55 },
    { elapsed: 10, expected: 45 },
    { elapsed: 30, expected: 25 },
    { elapsed: 55, expected: 0 },
    { elapsed: 60, expected: 0 }
  ])("P3 delay for elapsed $elapsed", async ({ elapsed, expected }) => {
    const iface = createTrackingInterface();
    await iface.connect();
    await iface.send(Uint8Array.from([0x01]));
    iface.advance(elapsed);
    await iface.send(Uint8Array.from([0x02]));
    if (expected > 0) {
      expect(iface.delays).toContain(expected);
    } else {
      expect(iface.delays).not.toContain(expected);
    }
  });
});

describe("SerialInterface payload permutations", () => {
  const payloads = [
    [0x00],
    [0x01, 0x02],
    [0xff, 0xee, 0xdd],
    [0x10, 0x20, 0x30, 0x40],
    [0x55, 0xaa, 0x55, 0xaa, 0x55],
    [0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc],
    [0xde, 0xad, 0xbe, 0xef],
    [0x5a, 0xa5],
    [0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33],
    [0x01, 0x01, 0x01, 0x01],
    [0x7f, 0x80, 0x81],
    [0x0f, 0xf0]
  ];

  const payloadCases = payloads.map((payload) => [payload]);

  it.each(payloadCases)("send writes payload %j", async (payload) => {
    const iface = createInterface();
    await iface.connect();
    await iface.send(Uint8Array.from(payload));
    expect(getRecording(iface)).toEqual(Buffer.from(payload));
  });

  it.each(payloadCases)("receive returns payload %j", async (payload) => {
    const iface = createInterface();
    await iface.connect();
    emitData(iface, payload);
    const response = await iface.receive();
    expect([...response]).toEqual(payload);
  });
});
