import { describe, expect, it } from "vitest";
import { SimulationInterface } from "@emdzej/ediabasx-interface-base";
import { SerialInterface } from "@emdzej/ediabasx-interface-serial";
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
});
