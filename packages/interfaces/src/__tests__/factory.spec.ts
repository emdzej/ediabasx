import { describe, expect, it } from "vitest";
import { SimulationInterface } from "@emdzej/ediabasx-interface-base";
import { SerialInterface } from "@emdzej/ediabasx-interface-serial";
import { J2534Interface } from "@emdzej/ediabasx-interface-j2534";
import { GatewayClient } from "../gateway-client";
import { createInterface } from "../factory";

describe("interface factory", () => {
  it("creates a simulation interface", () => {
    const iface = createInterface("simulation");
    expect(iface).toBeInstanceOf(SimulationInterface);
  });

  it("creates a serial interface", () => {
    const iface = createInterface("serial", { port: "/dev/ttyUSB0" });
    expect(iface).toBeInstanceOf(SerialInterface);
  });

  it("creates a gateway interface", () => {
    const iface = createInterface("gateway", { host: "127.0.0.1", port: 6801 });
    expect(iface).toBeInstanceOf(GatewayClient);
  });

  it("throws when serial port is missing", () => {
    expect(() => createInterface("serial")).toThrow("Missing required option");
  });

  it("creates a j2534 interface (transport spec deferred until connect)", () => {
    // Constructor only stores the spec; actual transport + driver are
    // imported lazily inside connect(). This test verifies the sync
    // factory path doesn't pull in the (ESM-only) j2534 packages.
    const iface = createInterface("j2534", { protocol: "ds2" });
    expect(iface).toBeInstanceOf(J2534Interface);
  });

  it("rejects an unknown j2534 protocol via registry enum validation", () => {
    expect(() => createInterface("j2534", { protocol: "garbage" })).toThrow(
      /Invalid value for option "protocol"/
    );
  });

  it("rejects an unknown j2534 transport via registry enum validation", () => {
    expect(() => createInterface("j2534", { transport: "bluetooth" })).toThrow(
      /Invalid value for option "transport"/
    );
  });
});
