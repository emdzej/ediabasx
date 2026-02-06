import { describe, expect, it, vi } from "vitest";
import { MockSerialTransport } from "../mockSerialTransport";
import { SerialInterface } from "../SerialInterface";

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
});
