import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import {
  SerialInterface,
  SerialTiming,
  type SerialConfig,
} from "../src/interfaces/serial";
import { SerialPortMock } from "serialport";

vi.mock("serialport", async () => {
  const actual = await import("serialport");
  return {
    ...actual,
    SerialPort: actual.SerialPortMock,
  };
});

const PORT_PATH = "/dev/mock";

const createInterface = (config: Partial<SerialConfig> = {}) =>
  new SerialInterface({
    port: PORT_PATH,
    initType: "fast",
    ...config,
  });

const getBindingPort = (iface: SerialInterface) => {
  // @ts-expect-error access private for tests
  const port = iface.port as SerialPortMock | null;
  if (!port) {
    throw new Error("Port is not open");
  }
  // @ts-expect-error access internal binding for tests
  return port.port as { emitData: (data: Uint8Array) => void };
};

const baudRates = [
  75, 110, 134, 150, 200, 300, 600, 1200, 1800, 2400, 4800, 9600, 10400,
  14400, 19200, 28800, 38400, 56000, 57600, 76800, 115200, 128000, 230400,
  250000, 256000, 460800, 500000, 576000, 921600, 1000000, 1152000, 1500000,
  2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 6000000,
  7000000, 8000000, 9000000, 10000000, 12345, 54321, 22222, 33333, 44444,
  55555, 66666, 77777, 88888, 99999, 111111, 222222, 333333, 444444,
  555555,
];

const timeoutValues = Array.from({ length: 20 }, (_, index) => (index + 1) * 100);

beforeEach(() => {
  SerialPortMock.binding.reset();
  SerialPortMock.binding.createPort(PORT_PATH, { record: true });
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("SerialInterface configuration", () => {
  it("initializes with defaults", () => {
    const iface = createInterface();
    // @ts-expect-error accessing private config for tests
    const config = iface.config;
    expect(config.baudRate).toBe(9600);
    expect(config.dataBits).toBe(8);
    expect(config.stopBits).toBe(1);
    expect(config.parity).toBe("none");
    expect(config.timeout).toBe(5000);
  });

  it("allows overriding defaults", () => {
    const iface = createInterface({
      baudRate: 19200,
      dataBits: 8,
      stopBits: 2,
      parity: "even",
      timeout: 2500,
    });
    // @ts-expect-error accessing private config for tests
    const config = iface.config;
    expect(config.baudRate).toBe(19200);
    expect(config.stopBits).toBe(2);
    expect(config.parity).toBe("even");
    expect(config.timeout).toBe(2500);
  });

  it("applies INPA adapter preset", () => {
    const iface = createInterface({ adapter: "inpa" });
    // @ts-expect-error private config
    const config = iface.config;
    expect(config.baudRate).toBe(9600);
  });

  it("applies ADS adapter preset", () => {
    const iface = createInterface({ adapter: "ads" });
    // @ts-expect-error private config
    const config = iface.config;
    expect(config.baudRate).toBe(9600);
  });

  it("applies DCAN adapter preset", () => {
    const iface = createInterface({ adapter: "dcan" });
    // @ts-expect-error private config
    const config = iface.config;
    expect(config.baudRate).toBe(115200);
  });

  describe.each(baudRates)("baud rate %s", (baudRate) => {
    it("stores the configured baud rate", () => {
      const iface = createInterface({ baudRate });
      // @ts-expect-error private config
      const config = iface.config;
      expect(config.baudRate).toBe(baudRate);
    });
  });

  describe.each(timeoutValues)("timeout %s", (timeout) => {
    it("stores the configured timeout", () => {
      const iface = createInterface({ timeout });
      // @ts-expect-error private config
      const config = iface.config;
      expect(config.timeout).toBe(timeout);
    });
  });
});

describe("SerialInterface lifecycle", () => {
  it("connects and disconnects", async () => {
    const iface = createInterface();
    await iface.connect();
    expect(iface.isConnected()).toBe(true);
    await iface.disconnect();
    expect(iface.isConnected()).toBe(false);
  });

  it("supports reconnect", async () => {
    const iface = createInterface();
    await iface.connect();
    await iface.disconnect();
    await iface.connect();
    expect(iface.isConnected()).toBe(true);
  });

  it("ignores disconnect when not connected", async () => {
    const iface = createInterface();
    await expect(iface.disconnect()).resolves.toBeUndefined();
  });
});

describe("K-Line initialization", () => {
  it("performs fast init timing", async () => {
    const timeoutSpy = vi.spyOn(global, "setTimeout");
    const iface = createInterface({ initType: "fast" });

    await iface.connect();

    const delays = timeoutSpy.mock.calls.map((call) => call[1]);
    expect(delays).toContain(SerialTiming.fastInitLow);
    expect(delays).toContain(SerialTiming.fastInitHigh);
  });

  it("performs slow init timing", async () => {
    const timeoutSpy = vi.spyOn(global, "setTimeout");
    const iface = createInterface({ initType: "slow" });

    await iface.connect();

    const slowInitCalls = timeoutSpy.mock.calls.filter(
      (call) => call[1] === SerialTiming.slowInitBit,
    );
    expect(slowInitCalls.length).toBeGreaterThanOrEqual(11);
  });
});

describe("Send and receive", () => {
  it("sends data frames", async () => {
    const iface = createInterface();
    const writeSpy = vi.spyOn(SerialPortMock.prototype, "write");
    await iface.connect();
    await iface.send(Uint8Array.from([1, 2, 3]));
    expect(writeSpy).toHaveBeenCalled();
  });

  it("receives data frames", async () => {
    const iface = createInterface();
    await iface.connect();

    const receivePromise = iface.receive(1000);
    const bindingPort = getBindingPort(iface);
    bindingPort.emitData(Buffer.from([0x10, 0x20]));

    await expect(receivePromise).resolves.toEqual(
      Uint8Array.from([0x10, 0x20]),
    );
  });

  it("buffers data if receive is called later", async () => {
    const iface = createInterface();
    await iface.connect();

    const bindingPort = getBindingPort(iface);
    bindingPort.emitData(Buffer.from([0x30, 0x40]));

    await expect(iface.receive(1000)).resolves.toEqual(
      Uint8Array.from([0x30, 0x40]),
    );
  });

  it("supports multiple concurrent receives", async () => {
    const iface = createInterface();
    await iface.connect();

    const first = iface.receive(1000);
    const second = iface.receive(1000);

    const bindingPort = getBindingPort(iface);
    bindingPort.emitData(Buffer.from([0x01]));
    await expect(first).resolves.toEqual(Uint8Array.from([0x01]));

    bindingPort.emitData(Buffer.from([0x02]));
    await expect(second).resolves.toEqual(Uint8Array.from([0x02]));
  });
});

describe("Timeouts and errors", () => {
  it("times out receive", async () => {
    const iface = createInterface();
    await iface.connect();

    await expect(iface.receive(50)).rejects.toThrow(/timeout/i);
  });

  it("throws when sending without connection", async () => {
    const iface = createInterface();
    await expect(iface.send(Uint8Array.from([1]))).rejects.toThrow(
      /not connected/i,
    );
  });

  it("throws when receiving without connection", async () => {
    const iface = createInterface();
    await expect(iface.receive(100)).rejects.toThrow(/not connected/i);
  });

  it("reports port not found errors", async () => {
    const openSpy = vi
      .spyOn(SerialPortMock.prototype, "open")
      .mockImplementation((callback) => {
        callback?.(new Error("ENOENT"));
        return undefined as void;
      });

    const iface = createInterface();
    await expect(iface.connect()).rejects.toThrow(/not found/i);
    openSpy.mockRestore();
  });

  it("reports permission denied errors", async () => {
    const openSpy = vi
      .spyOn(SerialPortMock.prototype, "open")
      .mockImplementation((callback) => {
        callback?.(new Error("Permission denied"));
        return undefined as void;
      });

    const iface = createInterface();
    await expect(iface.connect()).rejects.toThrow(/permission denied/i);
    openSpy.mockRestore();
  });

  it("rejects pending receives on serial error", async () => {
    const iface = createInterface();
    await iface.connect();

    const receivePromise = iface.receive(1000);
    // @ts-expect-error access private port
    iface.port?.emit("error", new Error("serial error"));

    await expect(receivePromise).rejects.toThrow(/serial port error/i);
  });
});

describe("Timing enforcement", () => {
  it("enforces P2 minimum response time", async () => {
    const iface = createInterface();
    await iface.connect();

    const timeoutSpy = vi.spyOn(global, "setTimeout");
    timeoutSpy.mockClear();

    await iface.send(Uint8Array.from([0x01]));
    const receivePromise = iface.receive(500);

    const bindingPort = getBindingPort(iface);
    bindingPort.emitData(Buffer.from([0x02]));

    await expect(receivePromise).resolves.toEqual(Uint8Array.from([0x02]));
    const delays = timeoutSpy.mock.calls.map((call) => call[1]);
    const p2Delay = delays.find(
      (delay) => delay >= SerialTiming.p2Min - 2 && delay <= SerialTiming.p2Min,
    );
    expect(p2Delay).toBeDefined();
  });

  it("enforces P3 minimum idle time between sends", async () => {
    const iface = createInterface();
    const timeoutSpy = vi.spyOn(global, "setTimeout");
    await iface.connect();

    timeoutSpy.mockClear();

    await iface.send(Uint8Array.from([0x10]));
    await iface.send(Uint8Array.from([0x11]));

    const delays = timeoutSpy.mock.calls.map((call) => call[1]);
    expect(delays).toContain(SerialTiming.p3Min);
  });
});
