import { describe, expect, it, vi } from "vitest";
import {
  SerialCommParameterIds,
  SerialInitModes,
  MockSerialTransport,
  SerialInterface
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
});
