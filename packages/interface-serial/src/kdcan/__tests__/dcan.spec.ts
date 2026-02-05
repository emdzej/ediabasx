import { describe, expect, it } from "vitest";
import { MockSerialTransport } from "../../mockSerialTransport";
import { CanFlags, Protocols } from "../constants";
import { createCanTelegram } from "../telegram";
import { DcanSession, segmentIsoTpPayload } from "../dcan";

describe("DcanSession", () => {
  it("sends TP20 telegram using adapter framing", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const session = new DcanSession({
      adapterType: 0x0002,
      adapterVersion: 0x0008,
      canTxId: -1,
      canRxId: -1,
      canFlags: CanFlags.BusCheck,
      protocol: Protocols.Tp20,
      baudRate: 500000
    });

    const payload = Uint8Array.from([0x12, 0x34]);
    await session.sendRequest(transport, payload);

    const writes = transport.getWrites();
    expect(writes).toHaveLength(1);
    expect(writes[0]).toEqual(
      createCanTelegram(payload, payload.length, {
        adapterType: 0x0002,
        adapterVersion: 0x0008,
        currentBaudRate: 500000,
        currentProtocol: Protocols.Tp20,
        canTxId: -1,
        canRxId: -1,
        canFlags: CanFlags.BusCheck
      })
    );
  });

  it("sends ISO-TP telegram using adapter framing", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const session = new DcanSession({
      adapterType: 0x0002,
      adapterVersion: 0x0009,
      canTxId: 0x6f1,
      canRxId: 0x6f9,
      canFlags: CanFlags.Disconnect,
      protocol: Protocols.IsoTp,
      baudRate: 500000
    });

    const payload = Uint8Array.from([0x22, 0xf1, 0x90]);
    await session.sendRequest(transport, payload);

    const writes = transport.getWrites();
    expect(writes).toHaveLength(1);
    expect(writes[0]).toEqual(
      createCanTelegram(payload, payload.length, {
        adapterType: 0x0002,
        adapterVersion: 0x0009,
        currentBaudRate: 500000,
        currentProtocol: Protocols.IsoTp,
        canTxId: 0x6f1,
        canRxId: 0x6f9,
        canFlags: CanFlags.Disconnect
      })
    );
  });
});

describe("segmentIsoTpPayload", () => {
  it("builds single-frame payloads", () => {
    const frames = segmentIsoTpPayload(Uint8Array.from([0x01, 0x02]));
    expect(frames).toEqual([Uint8Array.from([0x02, 0x01, 0x02])]);
  });

  it("builds multi-frame payloads", () => {
    const payload = Uint8Array.from([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]);
    const frames = segmentIsoTpPayload(payload, { frameSize: 8 });
    expect(frames).toEqual([
      Uint8Array.from([0x10, 0x08, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06]),
      Uint8Array.from([0x21, 0x07, 0x08])
    ]);
  });
});
