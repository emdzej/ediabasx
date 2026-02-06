import { describe, expect, it } from "vitest";
import {
  calcChecksumBmwFast,
  type AdapterInfoState,
  type AdapterInfoIo,
  Protocols,
  updateAdapterInfo
} from "../index";

type ResponsePlan = {
  readonly response: Uint8Array;
};

describe("updateAdapterInfo", () => {
  it("polls adapter info and updates state", () => {
    const state: AdapterInfoState = {
      protocol: Protocols.Kwp,
      adapterType: -1,
      adapterVersion: 0,
      adapterSerial: null,
      adapterVoltage: -1,
      ignitionStatus: -1,
      escapeModeRead: false,
      escapeModeWrite: false,
      updateAdapterVoltage: true,
      lastCommTickMs: 0,
      lastVoltageUpdateMs: 0,
      reconnectRequired: false
    };

    const now = 0;
    let pendingResponse: ResponsePlan | null = null;

    const io: AdapterInfoIo = {
      sendData: (data) => {
        const response = buildResponseFor(data);
        pendingResponse = { response };
      },
      readInBuffer: () => {
        if (!pendingResponse) {
          return new Uint8Array();
        }
        const response = pendingResponse.response;
        pendingResponse = null;
        return response;
      },
      discardInBuffer: () => {
        pendingResponse = null;
      },
      readTimeoutOffsetLongMs: 50,
      nowMs: () => now
    };

    const success = updateAdapterInfo(state, io, { forceUpdate: true });

    expect(success).toBe(true);
    expect(state.ignitionStatus).toBe(0x55);
    expect(state.adapterType).toBe(0x0002);
    expect(state.adapterVersion).toBe(0x0009);
    expect(state.adapterSerial).toEqual(
      Uint8Array.from([0xde, 0xad, 0xbe, 0xef, 0x01, 0x02, 0x03, 0x04])
    );
    expect(state.adapterVoltage).toBe(0x2a);
  });
});

function buildResponseFor(testTel: Uint8Array): Uint8Array {
  const command = testTel[3];
  switch (command) {
    case 0xfe:
      return buildEchoedResponse(testTel, buildStatusResponse(0x55));
    case 0x06:
      return buildEchoedResponse(testTel, buildEscapeResponse());
    case 0xfd:
      return buildEchoedResponse(
        testTel,
        buildAdapterResponse(0x0002, 0x0009)
      );
    case 0xfb:
      return buildEchoedResponse(
        testTel,
        buildSerialResponse(
          Uint8Array.from([0xde, 0xad, 0xbe, 0xef, 0x01, 0x02, 0x03, 0x04])
        )
      );
    case 0xfc:
      return buildEchoedResponse(testTel, buildVoltageResponse(0x2a));
    default:
      return buildEchoedResponse(testTel, buildStatusResponse(0x00));
  }
}

function buildEchoedResponse(
  testTel: Uint8Array,
  response: Uint8Array
): Uint8Array {
  return Uint8Array.from([...testTel, ...response]);
}

function buildStatusResponse(ignitionStatus: number): Uint8Array {
  const response = Uint8Array.from([0x83, 0xf1, 0xf1, 0xfe, ignitionStatus, 0x00]);
  response[response.length - 1] = calcChecksumBmwFast(
    response,
    0,
    response.length - 1
  );
  return response;
}

function buildEscapeResponse(): Uint8Array {
  const response = Uint8Array.from([0x84, 0xf1, 0xf1, 0x06, 0x00, 0x00, 0x00, 0x00]);
  response[response.length - 1] = calcChecksumBmwFast(
    response,
    0,
    response.length - 1
  );
  return response;
}

function buildAdapterResponse(adapterType: number, adapterVersion: number): Uint8Array {
  const response = Uint8Array.from([
    0x85,
    0xf1,
    0xf1,
    0xfd,
    (adapterType >> 8) & 0xff,
    adapterType & 0xff,
    (adapterVersion >> 8) & 0xff,
    adapterVersion & 0xff,
    0x00
  ]);
  response[response.length - 1] = calcChecksumBmwFast(
    response,
    0,
    response.length - 1
  );
  return response;
}

function buildSerialResponse(serial: Uint8Array): Uint8Array {
  const response = new Uint8Array(13);
  response.set([0x86, 0xf1, 0xf1, 0xfb], 0);
  response.set(serial, 4);
  response[response.length - 1] = calcChecksumBmwFast(
    response,
    0,
    response.length - 1
  );
  return response;
}

function buildVoltageResponse(voltage: number): Uint8Array {
  const response = Uint8Array.from([0x83, 0xf1, 0xf1, 0xfc, voltage, 0x00]);
  response[response.length - 1] = calcChecksumBmwFast(
    response,
    0,
    response.length - 1
  );
  return response;
}
