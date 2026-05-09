import { describe, expect, it } from "vitest";
import {
  Ds2Session,
  answerLenForConcept,
  calcChecksumXor,
  telLengthDs2,
} from "../ds2";
import { MockSerialTransport } from "../../mockSerialTransport";

describe("DS2 framing helpers", () => {
  it("calcChecksumXor folds bytes with XOR", () => {
    const data = Uint8Array.from([0x12, 0x05, 0x0b, 0x94]);
    // 0x12 ^ 0x05 ^ 0x0b ^ 0x94 = 0x88
    expect(calcChecksumXor(data, 0, data.length)).toBe(0x88);
  });

  it("answerLenForConcept returns expected (headerLen, addend) pairs", () => {
    expect(answerLenForConcept(0x0001)).toEqual([-2, 0]);
    expect(answerLenForConcept(0x0005)).toEqual([-1, 0]);
    expect(answerLenForConcept(0x0006)).toEqual([-1, 0]);
  });

  it("telLengthDs2 reads the length byte at the negated offset", () => {
    // Concept 1: header[2] is the total length.
    expect(telLengthDs2(Uint8Array.of(0x12, 0x00, 0x06), [-2, 0])).toBe(6);
    // DS2: header[1] is the total length.
    expect(telLengthDs2(Uint8Array.of(0x12, 0x06), [-1, 0])).toBe(6);
    // Fixed-length frames return the value directly.
    expect(telLengthDs2(Uint8Array.of(), [4, 0])).toBe(4);
  });
});

describe("Ds2Session", () => {
  it("appends XOR checksum and reads response telegram (DS2 concept)", async () => {
    const transport = new MockSerialTransport();
    await transport.open("mock");
    await transport.configure({ baudRate: 9600, dataBits: 8, parity: "even", stopBits: 1 });

    const session = new Ds2Session({
      concept: 0x0006,
      baudRate: 9600,
      timeoutStdMs: 200,
      regenTimeMs: 0,
      telegramEndTimeoutMs: 50,
      skipPrePurge: true,
    });

    // Stage a 5-byte response: ECU=0x12, len=0x05, status=0xa0, payload=0x01, XOR.
    const respBody = Uint8Array.of(0x12, 0x05, 0xa0, 0x01);
    const respChecksum = calcChecksumXor(respBody, 0, respBody.length);
    transport.enqueueRead(Uint8Array.of(...respBody, respChecksum));

    const response = await session.sendRequest(transport, Uint8Array.of(0x12, 0x04, 0x0b));

    // Verify the wire bytes include our XOR checksum (0x12 ^ 0x04 ^ 0x0b = 0x1d).
    const writes = transport.getWrites();
    const wire = Uint8Array.from(writes.flatMap((w) => Array.from(w)));
    expect(Array.from(wire)).toEqual([0x12, 0x04, 0x0b, 0x12 ^ 0x04 ^ 0x0b]);

    expect(Array.from(response)).toEqual([0x12, 0x05, 0xa0, 0x01, respChecksum]);
  });

  it("respects checksumByUser (does not append checksum)", async () => {
    const transport = new MockSerialTransport();
    await transport.open("mock");
    await transport.configure({ baudRate: 9600, dataBits: 8, parity: "even", stopBits: 1 });

    const session = new Ds2Session({
      concept: 0x0001,
      baudRate: 9600,
      timeoutStdMs: 200,
      regenTimeMs: 0,
      telegramEndTimeoutMs: 50,
      checksumByUser: true,
      checksumNoCheck: true,
      skipPrePurge: true,
    });

    // Concept 1: header[2] is the length. Stage a 4-byte response.
    const resp = Uint8Array.of(0x12, 0x00, 0x04, 0xff);
    transport.enqueueRead(resp);

    // Caller-supplied checksum byte at the end, no auto-append.
    await session.sendRequest(transport, Uint8Array.of(0x12, 0x05, 0x0b, 0x94));

    const writes = transport.getWrites();
    const wire = Uint8Array.from(writes.flatMap((w) => Array.from(w)));
    expect(Array.from(wire)).toEqual([0x12, 0x05, 0x0b, 0x94]);
  });

  it("rejects telegrams with invalid XOR checksum", async () => {
    const transport = new MockSerialTransport();
    await transport.open("mock");
    await transport.configure({ baudRate: 9600, dataBits: 8, parity: "even", stopBits: 1 });

    const session = new Ds2Session({
      concept: 0x0006,
      baudRate: 9600,
      timeoutStdMs: 200,
      regenTimeMs: 0,
      telegramEndTimeoutMs: 50,
      skipPrePurge: true,
    });

    // Bad checksum: real XOR would be 0x12^0x04^0xa0 = 0xb6, send 0x00 instead.
    transport.enqueueRead(Uint8Array.of(0x12, 0x04, 0xa0, 0x00));

    await expect(
      session.sendRequest(transport, Uint8Array.of(0x12, 0x03, 0x0b))
    ).rejects.toThrow(/checksum mismatch/);
  });
});
