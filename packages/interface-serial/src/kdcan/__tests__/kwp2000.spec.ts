import { describe, expect, it } from "vitest";
import { MockSerialTransport } from "../../mockSerialTransport";
import {
  buildBmwFastTelegram,
  Kwp2000Session,
  type Kwp2000Timers
} from "../kwp2000";

const BASE_TIMERS: Kwp2000Timers = {
  w1: 5,
  w2: 5,
  w3: 0,
  w4: 0,
  w5: 0,
  p1: 5,
  p2: 5,
  p3: 0,
  p4: 0,
  timeoutNr78: 5,
  retryNr78: 2
};

describe("Kwp2000Session", () => {
  it("starts session with mode select and tester present", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const session = new Kwp2000Session({
      ecuAddress: 0x12,
      testerAddress: 0xf1,
      modeSelectPayload: Uint8Array.from([0x10, 0x81]),
      testerPresentPayload: Uint8Array.from([0x3e, 0x00]),
      timers: BASE_TIMERS
    });

    const modeResponse = buildBmwFastTelegram(
      Uint8Array.from([0x50, 0x81]),
      0x12,
      0xf1
    );
    const testerResponse = buildBmwFastTelegram(
      Uint8Array.from([0x7e, 0x00]),
      0x12,
      0xf1
    );

    const startPromise = session.startSession(transport);

    transport.enqueueRead([0x12, 0x8f]);
    transport.enqueueRead(modeResponse);
    transport.enqueueRead(testerResponse);

    await startPromise;

    const writes = transport.getWrites().map((entry) => Array.from(entry));
    expect(writes).toEqual([
      Array.from(
        buildBmwFastTelegram(
          Uint8Array.from([0x10, 0x81]),
          0x12,
          0xf1
        )
      ),
      Array.from(
        buildBmwFastTelegram(
          Uint8Array.from([0x3e, 0x00]),
          0x12,
          0xf1
        )
      )
    ]);
  });

  it("handles NR78 response pending until completion", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const session = new Kwp2000Session({
      ecuAddress: 0x12,
      testerAddress: 0xf1,
      modeSelectPayload: Uint8Array.from([0x10, 0x81]),
      testerPresentPayload: Uint8Array.from([0x3e, 0x00]),
      timers: BASE_TIMERS
    });

    const nr78Response = buildBmwFastTelegram(
      Uint8Array.from([0x7f, 0x10, 0x78]),
      0x12,
      0xf1
    );
    const okResponse = buildBmwFastTelegram(
      Uint8Array.from([0x50, 0x81]),
      0x12,
      0xf1
    );

    transport.enqueueRead(nr78Response);
    transport.enqueueRead(okResponse);

    const response = await session.sendRequest(
      transport,
      Uint8Array.from([0x10, 0x81])
    );

    expect(Array.from(response)).toEqual(Array.from(okResponse));
  });

  it("stops waiting after NR78 retries are exceeded", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const session = new Kwp2000Session({
      ecuAddress: 0x12,
      testerAddress: 0xf1,
      modeSelectPayload: Uint8Array.from([0x10, 0x81]),
      testerPresentPayload: Uint8Array.from([0x3e, 0x00]),
      timers: { ...BASE_TIMERS, retryNr78: 0 }
    });

    const nr78Response = buildBmwFastTelegram(
      Uint8Array.from([0x7f, 0x10, 0x78]),
      0x12,
      0xf1
    );

    transport.enqueueRead(nr78Response);
    transport.enqueueRead(nr78Response);

    const response = await session.sendRequest(
      transport,
      Uint8Array.from([0x10, 0x81])
    );

    expect(Array.from(response)).toEqual(Array.from(nr78Response));
  });
});
