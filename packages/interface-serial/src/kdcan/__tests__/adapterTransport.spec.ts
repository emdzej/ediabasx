import { describe, expect, it } from "vitest";
import { AdapterWrappedTransport } from "../adapterTransport";
import { createAdapterTelegram } from "../telegram";
import { Protocols } from "../constants";
import { MockSerialTransport } from "../../mockSerialTransport";

describe("AdapterWrappedTransport", () => {
  it("wraps writes as K+DCAN adapter telegrams", async () => {
    const inner = new MockSerialTransport();
    await inner.open("mock");
    await inner.configure({ baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 });

    const wrapped = new AdapterWrappedTransport({
      inner,
      adapterType: 0x0002,
      adapterVersion: 0x000d,
      klineBaudRate: 9600,
      klineParity: "even",
      protocol: Protocols.Uart,
    });

    const payload = Uint8Array.of(0x12, 0x05, 0x0b, 0x94, 0x88);
    await wrapped.write(payload);

    const expected = createAdapterTelegram(payload, payload.length, false, {
      adapterType: 0x0002,
      adapterVersion: 0x000d,
      currentBaudRate: 9600,
      interByteTime: 0,
      currentProtocol: Protocols.Uart,
      currentParity: "even",
      fastInit: false,
    });

    const writes = inner.getWrites();
    expect(writes).toHaveLength(1);
    expect(Array.from(writes[0])).toEqual(Array.from(expected!));
  });

  it("forces the underlying UART to 115200 8N1 regardless of caller config", async () => {
    const inner = new MockSerialTransport();
    await inner.open("mock");

    let lastConfig: unknown;
    const orig = inner.configure.bind(inner);
    inner.configure = async (cfg) => {
      lastConfig = cfg;
      return orig(cfg);
    };

    const wrapped = new AdapterWrappedTransport({
      inner,
      adapterType: 0x0002,
      adapterVersion: 0x000d,
      klineBaudRate: 9600,
      klineParity: "even",
    });

    await wrapped.configure({ baudRate: 9600, dataBits: 8, parity: "even", stopBits: 1 });

    expect(lastConfig).toEqual({
      baudRate: 115200,
      dataBits: 8,
      parity: "none",
      stopBits: 1,
    });
  });

  it("read() passes through to the inner transport unmodified", async () => {
    const inner = new MockSerialTransport();
    await inner.open("mock");
    await inner.configure({ baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 });
    inner.enqueueRead([0xa0, 0xb1, 0xc2]);

    const wrapped = new AdapterWrappedTransport({
      inner,
      adapterType: 0x0002,
      adapterVersion: 0x000d,
      klineBaudRate: 9600,
      klineParity: "even",
    });

    const data = await wrapped.read(3, 100);
    expect(Array.from(data)).toEqual([0xa0, 0xb1, 0xc2]);
  });

  it("updateLineConfig changes telegram framing for subsequent writes", async () => {
    const inner = new MockSerialTransport();
    await inner.open("mock");
    await inner.configure({ baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 });

    const wrapped = new AdapterWrappedTransport({
      inner,
      adapterType: 0x0002,
      adapterVersion: 0x000d,
      klineBaudRate: 9600,
      klineParity: "even",
    });

    await wrapped.write(Uint8Array.of(0x01));
    wrapped.updateLineConfig({ klineBaudRate: 10400 });
    await wrapped.write(Uint8Array.of(0x02));

    const writes = inner.getWrites();
    expect(writes).toHaveLength(2);
    // Both telegrams encode the K-line baud as `baudHalf`. 9600/2 = 4800 (0x12c0),
    // 10400/2 = 5200 (0x1450) → byte-pair at offset 2..3 differs.
    expect(writes[0][2] !== writes[1][2] || writes[0][3] !== writes[1][3]).toBe(true);
  });
});
