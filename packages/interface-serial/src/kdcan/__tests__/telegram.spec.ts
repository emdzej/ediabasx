import { describe, expect, it } from "vitest";
import {
  CanFlags,
  KLINEF1_NO_ECHO,
  KLINEF1_PARITY_EVEN,
  KLINEF2_KWP1281_DETECT,
  KWP1281_TIMEOUT,
  Protocols
} from "../constants";
import { calcChecksumBmwFast } from "../checksum";
import { createAdapterTelegram, createCanTelegram } from "../telegram";

describe("createAdapterTelegram", () => {
  it("creates K-line telegram with legacy header", () => {
    const sendData = Uint8Array.from([0x12, 0x34, 0x56]);
    const telegram = createAdapterTelegram(sendData, sendData.length, true, {
      adapterType: 0x0002,
      adapterVersion: 0x0007,
      currentBaudRate: 9600,
      interByteTime: 25,
      currentProtocol: Protocols.Kwp,
      currentParity: "even",
      fastInit: false
    });

    expect(telegram).not.toBeNull();
    const result = telegram as Uint8Array;
    expect(result[0]).toBe(0x00);
    expect(result[1]).toBe(0x00);
    expect(result[4]).toBe(KLINEF1_NO_ECHO | KLINEF1_PARITY_EVEN);
    expect(result[5]).toBe(0x00);
    expect(result[6]).toBe(0x00);
    expect(result[7]).toBe(sendData.length);
    expect(result.slice(8, 11)).toEqual(sendData);
    expect(result[result.length - 1]).toBe(
      calcChecksumBmwFast(result, 0, result.length - 1)
    );
  });

  it("creates K-line telegram with extended header", () => {
    const sendData = Uint8Array.from([0x01, 0x02]);
    const telegram = createAdapterTelegram(sendData, sendData.length, false, {
      adapterType: 0x0002,
      adapterVersion: 0x000b,
      currentBaudRate: 10400,
      interByteTime: 5,
      currentProtocol: Protocols.Kwp,
      currentParity: "none",
      fastInit: true
    });

    expect(telegram).not.toBeNull();
    const result = telegram as Uint8Array;
    expect(result[1]).toBe(0x02);
    expect(result[5]).toBe(KLINEF2_KWP1281_DETECT);
    expect(result[6]).toBe(5);
    expect(result[7]).toBe(KWP1281_TIMEOUT);
    expect(result[8]).toBe(0x00);
    expect(result[9]).toBe(sendData.length);
    expect(result.slice(10, 12)).toEqual(sendData);
  });
});

describe("createCanTelegram", () => {
  it("creates CAN TP20 telegram", () => {
    const sendData = Uint8Array.from([0xaa, 0xbb]);
    const telegram = createCanTelegram(sendData, sendData.length, {
      adapterType: 0x0002,
      adapterVersion: 0x0008,
      currentBaudRate: 500000,
      currentProtocol: Protocols.Tp20,
      canTxId: -1,
      canRxId: -1,
      canFlags: CanFlags.BusCheck
    });

    expect(telegram).not.toBeNull();
    const result = telegram as Uint8Array;
    expect(result[1]).toBe(0x01);
    expect(result[4]).toBe(0x01 | 0x02 | 0x04);
    expect(result[8]).toBe(0x00);
    expect(result[9]).toBe(sendData.length);
    expect(result.slice(10, 12)).toEqual(sendData);
  });

  it("creates CAN ISO-TP telegram with ids", () => {
    const sendData = Uint8Array.from([0x10, 0x20, 0x30]);
    const telegram = createCanTelegram(sendData, sendData.length, {
      adapterType: 0x0002,
      adapterVersion: 0x0009,
      currentBaudRate: 100000,
      currentProtocol: Protocols.IsoTp,
      canTxId: 0x7e0,
      canRxId: 0x7e8,
      canFlags: CanFlags.Disconnect
    });

    expect(telegram).not.toBeNull();
    const result = telegram as Uint8Array;
    expect(result[1]).toBe(0x03);
    expect(result[7]).toBe(0x07);
    expect(result[8]).toBe(0xe0);
    expect(result[9]).toBe(0x07);
    expect(result[10]).toBe(0xe8);
    expect(result[11]).toBe(0x00);
    expect(result[12]).toBe(sendData.length);
    expect(result.slice(13, 16)).toEqual(sendData);
  });
});
