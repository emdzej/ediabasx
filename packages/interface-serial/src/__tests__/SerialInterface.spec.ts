import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  build5BaudDataBits,
  buildBmwFastTelegram,
  MockSerialTransport,
  SerialCommParameterIds,
  SerialInitModes,
  SerialInterface,
  SerialProtocols
} from "..";

const PORT = "/dev/mock";

describe("SerialInterface", () => {
  it("connects and configures the transport", async () => {
    const transport = new MockSerialTransport();
    const openSpy = vi.spyOn(transport, "open");
    const configureSpy = vi.spyOn(transport, "configure");

    const serialInterface = new SerialInterface({
      port: PORT,
      baudRate: 19200,
      dataBits: 7,
      parity: "even",
      stopBits: 2,
      transport
    });

    await serialInterface.connect();

    expect(configureSpy).toHaveBeenCalledWith({
      baudRate: 19200,
      dataBits: 7,
      parity: "even",
      stopBits: 2
    });
    expect(openSpy).toHaveBeenCalledWith(PORT);
  });

  it("sends payload via transport", async () => {
    const transport = new MockSerialTransport();
    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    await serialInterface.connect();
    await serialInterface.send(Uint8Array.from([0x01, 0x02, 0x03]));

    const writes = transport.getWrites();
    expect(writes).toEqual([
      Uint8Array.from([0x01]),
      Uint8Array.from([0x02]),
      Uint8Array.from([0x03])
    ]);
  });

  it("receives payload via transport", async () => {
    const transport = new MockSerialTransport();
    const serialInterface = new SerialInterface({
      port: PORT,
      transport,
      receiveBufferSize: 3
    });

    await serialInterface.connect();
    transport.enqueueRead([0xaa, 0xbb, 0xcc]);

    await expect(serialInterface.receive(100)).resolves.toEqual(
      Uint8Array.from([0xaa, 0xbb, 0xcc])
    );
  });

  it("maps comm parameters to state", () => {
    const serialInterface = new SerialInterface({
      port: PORT,
      transport: new MockSerialTransport()
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, 1);
    serialInterface.setParameter(SerialCommParameterIds.TesterAddress, 0xf1);
    serialInterface.setParameter(SerialCommParameterIds.EcuAddress, 0x12);
    serialInterface.setParameter(SerialCommParameterIds.TesterCanId, 0x7e0);
    serialInterface.setParameter(SerialCommParameterIds.EcuCanId, 0x7e8);
    serialInterface.setParameter(SerialCommParameterIds.P1, 12);
    serialInterface.setParameter(SerialCommParameterIds.P2, 300);
    serialInterface.setParameter(SerialCommParameterIds.P3, 50);
    serialInterface.setParameter(SerialCommParameterIds.W1, 300);
    serialInterface.setParameter(SerialCommParameterIds.W2, 20);
    serialInterface.setParameter(SerialCommParameterIds.W3, 20);
    serialInterface.setParameter(SerialCommParameterIds.W4, 50);
    serialInterface.setParameter(SerialCommParameterIds.W5, 300);
    serialInterface.setParameter(SerialCommParameterIds.InterByteTime, 7);
    serialInterface.setParameter(SerialCommParameterIds.RetryCount, 2);
    serialInterface.setParameter(SerialCommParameterIds.TimeoutNr78, 5000);
    serialInterface.setParameter(SerialCommParameterIds.RetryNr78, 3);
    serialInterface.setParameter(SerialCommParameterIds.InitMode, 1);
    serialInterface.setParameter(SerialCommParameterIds.SendPulse, 1);

    expect(serialInterface.getCommParameterState()).toEqual({
      protocol: 1,
      testerAddress: 0xf1,
      ecuAddress: 0x12,
      testerCanId: 0x7e0,
      ecuCanId: 0x7e8,
      p1: 12,
      p2: 300,
      p3: 50,
      w1: 300,
      w2: 20,
      w3: 20,
      w4: 50,
      w5: 300,
      interByteTime: 7,
      retryCount: 2,
      timeoutNr78: 5000,
      retryNr78: 3,
      initMode: SerialInitModes.Fast,
      sendPulse: true
    });
  });

  it("uses answer length for formatted requests", async () => {
    const transport = new MockSerialTransport();
    const serialInterface = new SerialInterface({
      port: PORT,
      transport,
      receiveBufferSize: 4
    });

    await serialInterface.connect();
    serialInterface.setAnswerLength(2);
    transport.enqueueRead([0xaa, 0xbb, 0xcc]);

    await expect(
      serialInterface.requestFormatted("%s", "REQ")
    ).resolves.toEqual(Uint8Array.from([0xaa, 0xbb]));
  });

  it("starts KWP2000 session with fast init", async () => {
    const transport = new MockSerialTransport() as MockSerialTransport & {
      sendPulse: (
        dataBits: number,
        length: number,
        pulseWidthMs: number,
        setDtr: boolean,
        bothLines: boolean
      ) => Promise<void>;
    };
    await transport.open(PORT);

    transport.sendPulse = vi.fn().mockResolvedValue(undefined);
    vi.spyOn(transport, "purge").mockResolvedValue(undefined);

    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, SerialProtocols.Kwp);
    serialInterface.setParameter(SerialCommParameterIds.InitMode, 1);
    serialInterface.setParameter(SerialCommParameterIds.TesterAddress, 0xf1);
    serialInterface.setParameter(SerialCommParameterIds.EcuAddress, 0x12);
    serialInterface.setParameter(SerialCommParameterIds.W1, 5);
    serialInterface.setParameter(SerialCommParameterIds.W2, 5);
    serialInterface.setParameter(SerialCommParameterIds.W3, 0);
    serialInterface.setParameter(SerialCommParameterIds.W4, 0);
    serialInterface.setParameter(SerialCommParameterIds.W5, 0);
    serialInterface.setParameter(SerialCommParameterIds.P1, 5);
    serialInterface.setParameter(SerialCommParameterIds.P2, 5);
    serialInterface.setParameter(SerialCommParameterIds.P3, 0);
    serialInterface.setParameter(SerialCommParameterIds.SendPulse, 1);

    await serialInterface.connect();

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
    const dataResponse = buildBmwFastTelegram(
      Uint8Array.from([0x62, 0x01]),
      0x12,
      0xf1
    );

    transport.enqueueRead([0x12, 0x8f]);
    transport.enqueueRead(modeResponse);
    transport.enqueueRead(testerResponse);
    transport.enqueueRead(dataResponse);

    const response = await serialInterface.rawData(Uint8Array.from([0x22, 0x01]));

    expect(Array.from(response)).toEqual(Array.from(dataResponse));
    expect(transport.sendPulse).toHaveBeenCalledWith(0x02, 2, 25, true, false);

    const requestTelegram = buildBmwFastTelegram(
      Uint8Array.from([0x22, 0x01]),
      0x12,
      0xf1
    );

    expect(transport.getWrites().map((entry) => Array.from(entry))).toEqual([
      Array.from(
        buildBmwFastTelegram(Uint8Array.from([0x10, 0x81]), 0x12, 0xf1)
      ),
      Array.from(
        buildBmwFastTelegram(Uint8Array.from([0x3e, 0x00]), 0x12, 0xf1)
      ),
      Array.from(requestTelegram)
    ]);
  });

  it("falls back to raw KWP1281 after 5-baud init", async () => {
    const transport = new MockSerialTransport() as MockSerialTransport & {
      sendPulse: (
        dataBits: number,
        length: number,
        pulseWidthMs: number,
        setDtr: boolean,
        bothLines: boolean,
        autoKeyByteDelay?: number
      ) => Promise<void>;
    };
    await transport.open(PORT);

    transport.sendPulse = vi.fn().mockResolvedValue(undefined);
    vi.spyOn(transport, "purge").mockResolvedValue(undefined);

    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, SerialProtocols.Kwp);
    serialInterface.setParameter(SerialCommParameterIds.InitMode, 0);
    serialInterface.setParameter(SerialCommParameterIds.EcuAddress, 0x33);
    serialInterface.setParameter(SerialCommParameterIds.W1, 100);
    serialInterface.setParameter(SerialCommParameterIds.W2, 100);
    serialInterface.setParameter(SerialCommParameterIds.W3, 0);
    serialInterface.setParameter(SerialCommParameterIds.SendPulse, 1);

    await serialInterface.connect();

    transport.enqueueRead([0x12, 0x01]);
    transport.enqueueRead([0xaa]);

    const response = await serialInterface.rawData(Uint8Array.from([0x99, 0x88]));

    expect(Array.from(response)).toEqual([0xaa]);
    expect(transport.sendPulse).toHaveBeenCalledWith(
      build5BaudDataBits(0x33),
      10,
      200,
      true,
      true,
      0
    );

    expect(transport.getWrites()).toEqual([
      Uint8Array.from([0x99]),
      Uint8Array.from([0x88])
    ]);
  });

  it("retries NR78 responses during KWP2000 requests", async () => {
    const transport = new MockSerialTransport() as MockSerialTransport & {
      sendPulse: () => Promise<void>;
    };
    await transport.open(PORT);
    
    transport.sendPulse = vi.fn().mockResolvedValue(undefined);
    vi.spyOn(transport, "purge").mockResolvedValue(undefined);
    
    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, SerialProtocols.Kwp);
    serialInterface.setParameter(SerialCommParameterIds.InitMode, 1);
    serialInterface.setParameter(SerialCommParameterIds.TesterAddress, 0xf1);
    serialInterface.setParameter(SerialCommParameterIds.EcuAddress, 0x12);
    serialInterface.setParameter(SerialCommParameterIds.W1, 100);
    serialInterface.setParameter(SerialCommParameterIds.W2, 100);
    serialInterface.setParameter(SerialCommParameterIds.W3, 0);
    serialInterface.setParameter(SerialCommParameterIds.W4, 0);
    serialInterface.setParameter(SerialCommParameterIds.W5, 0);
    serialInterface.setParameter(SerialCommParameterIds.P1, 100);
    serialInterface.setParameter(SerialCommParameterIds.P2, 100);
    serialInterface.setParameter(SerialCommParameterIds.P3, 0);
    serialInterface.setParameter(SerialCommParameterIds.TimeoutNr78, 100);
    serialInterface.setParameter(SerialCommParameterIds.RetryNr78, 1);
    serialInterface.setParameter(SerialCommParameterIds.SendPulse, 1);

    await serialInterface.connect();

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
    const nr78Response = buildBmwFastTelegram(
      Uint8Array.from([0x7f, 0x22, 0x78]),
      0x12,
      0xf1
    );
    const okResponse = buildBmwFastTelegram(
      Uint8Array.from([0x62, 0x01]),
      0x12,
      0xf1
    );

    transport.enqueueRead([0x12, 0x8f]);
    transport.enqueueRead(modeResponse);
    transport.enqueueRead(testerResponse);
    transport.enqueueRead(nr78Response);
    transport.enqueueRead(okResponse);

    const response = await serialInterface.rawData(Uint8Array.from([0x22, 0x01]));

    expect(Array.from(response)).toEqual(Array.from(okResponse));
  });

  it("switches to CAN mode for ISO-TP protocol", async () => {
    const transport = new MockSerialTransport();
    const configureSpy = vi.spyOn(transport, "configure");
    const setDtrSpy = vi.spyOn(transport, "setDtr");
    const setRtsSpy = vi.spyOn(transport, "setRts");

    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, SerialProtocols.IsoTp);
    serialInterface.setParameter(SerialCommParameterIds.TesterCanId, 0x7e0);
    serialInterface.setParameter(SerialCommParameterIds.EcuCanId, 0x7e8);

    await serialInterface.connect();

    // Enqueue CAN response
    transport.enqueueRead([0x03, 0x7f, 0x22, 0x10]);

    await serialInterface.rawData(Uint8Array.from([0x22, 0xf1, 0x90]));

    // Should have switched to CAN mode (500000 baud, DTR+RTS high)
    expect(configureSpy).toHaveBeenCalledWith(
      expect.objectContaining({ baudRate: 500000 })
    );
    expect(setDtrSpy).toHaveBeenCalledWith(true);
    expect(setRtsSpy).toHaveBeenCalledWith(true);
  });

  it("reassembles ISO-TP response payloads", async () => {
    const transport = new MockSerialTransport();
    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, SerialProtocols.IsoTp);
    serialInterface.setParameter(SerialCommParameterIds.TesterCanId, 0x7e0);
    serialInterface.setParameter(SerialCommParameterIds.EcuCanId, 0x7e8);

    await serialInterface.connect();

    const responsePayload = Uint8Array.from([
      0x62, 0xf1, 0x90, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07
    ]);

    transport.enqueueRead([0x10, 0x0a, 0x62, 0xf1, 0x90, 0x01, 0x02, 0x03]);
    transport.enqueueRead([0x21, 0x04, 0x05, 0x06, 0x07]);

    const response = await serialInterface.rawData(Uint8Array.from([0x22, 0xf1, 0x90]));

    expect(response).toEqual(responsePayload);
  });

  it("segments large ISO-TP payloads", async () => {
    const transport = new MockSerialTransport();
    const writeSpy = vi.spyOn(transport, "write");

    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    serialInterface.setParameter(SerialCommParameterIds.Protocol, SerialProtocols.IsoTp);
    serialInterface.setParameter(SerialCommParameterIds.TesterCanId, 0x7e0);
    serialInterface.setParameter(SerialCommParameterIds.EcuCanId, 0x7e8);

    await serialInterface.connect();

    // Enqueue response
    transport.enqueueRead([0x03, 0x62, 0xf1, 0x90]);

    // Send a payload larger than 7 bytes (requires ISO-TP segmentation)
    const largePayload = Uint8Array.from([
      0x22, 0xf1, 0x90, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08
    ]);

    await serialInterface.rawData(largePayload);

    // Should have written multiple frames (first frame + consecutive frames)
    const writes = writeSpy.mock.calls;
    expect(writes.length).toBeGreaterThanOrEqual(2);
  });

  it("exposes adapter info after polling", async () => {
    const transport = new MockSerialTransport();
    const serialInterface = new SerialInterface({
      port: PORT,
      transport
    });

    await serialInterface.connect();

    // Initially adapter info is not available
    expect(serialInterface.adapterType).toBe(-1);
    expect(serialInterface.ignitionStatus).toBe(-1);
  });

  describe("frequent mode", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("runs frequent mode lifecycle", async () => {
      const transport = new MockSerialTransport({ telegramEndTimeoutMs: 5 });
      const serialInterface = new SerialInterface({
        port: PORT,
        transport,
        receiveBufferSize: 3
      });

      await serialInterface.connect();
      await serialInterface.transmitFrequent(Uint8Array.from([0x01, 0x02]));

      transport.enqueueRead([0xaa, 0xbb, 0xcc]);

      expect(vi.getTimerCount()).toBe(1);

      const cycle = (
        serialInterface as unknown as { runFrequentCycle: () => Promise<void> }
      ).runFrequentCycle();
      await vi.advanceTimersByTimeAsync(30);
      await cycle;

      const received = await serialInterface.receiveFrequent();
      expect(received).toEqual(Uint8Array.from([0xaa, 0xbb, 0xcc]));

      await serialInterface.stopFrequent();
      await vi.runAllTimersAsync();
      expect((await serialInterface.receiveFrequent()).length).toBe(0);
      expect(vi.getTimerCount()).toBe(0);
    });

    it("cleans up frequent timer on disconnect", async () => {
      const transport = new MockSerialTransport();
      const serialInterface = new SerialInterface({
        port: PORT,
        transport
      });

      await serialInterface.connect();
      await serialInterface.transmitFrequent(Uint8Array.from([0x0f]));
      expect(vi.getTimerCount()).toBe(1);

      await serialInterface.disconnect();
      await vi.runAllTimersAsync();

      expect(vi.getTimerCount()).toBe(0);
    });
  });
});
