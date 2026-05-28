import { describe, expect, it } from "vitest";
import {
  parseGatewayAddress,
  resolveSelection,
  summariseSelection,
  EdiabasConfigError,
  DEFAULT_GATEWAY_PORT,
} from "../index";

describe("resolveSelection", () => {
  it("uses fileConfig when no overrides", () => {
    const r = resolveSelection(
      { interface: "kdcan", options: { port: "/dev/ttyUSB0", baudRate: 9600 } },
      {},
    );
    expect(r.interface).toBe("kdcan");
    expect(r.options.port).toBe("/dev/ttyUSB0");
    expect(r.options.baudRate).toBe(9600);
  });

  it("falls back to 'simulation' when nothing is configured", () => {
    const r = resolveSelection(undefined, {});
    expect(r.interface).toBe("simulation");
    expect(r.options).toEqual({});
  });

  it("honours the custom fallback", () => {
    const r = resolveSelection(undefined, {}, { fallback: "kdcan" });
    expect(r.interface).toBe("kdcan");
  });

  it("CLI interfaceName overrides file", () => {
    const r = resolveSelection(
      { interface: "kdcan", options: { port: "/dev/ttyUSB0" } },
      { interfaceName: "simulation" },
    );
    expect(r.interface).toBe("simulation");
  });

  it("DOES inherit file options when CLI keeps the same interface", () => {
    const r = resolveSelection(
      { interface: "kdcan", options: { port: "/dev/ttyUSB0", baudRate: 9600 } },
      { interfaceName: "kdcan", options: { baudRate: 38400 } },
    );
    // port inherited, baudRate overridden by CLI
    expect(r.options.port).toBe("/dev/ttyUSB0");
    expect(r.options.baudRate).toBe(38400);
  });

  it("does NOT inherit file options when CLI switches interface (regression fix)", () => {
    // Bug: file has `protocol: "uart"` for kdcan. CLI switches to j2534
    // whose `protocol` enum is ds2/kwp/can. Without this rule, the
    // factory would reject "uart" as invalid for j2534's protocol option.
    const r = resolveSelection(
      { interface: "kdcan", options: { port: "/dev/ttyUSB0", protocol: "uart" } },
      { interfaceName: "j2534" },
    );
    expect(r.interface).toBe("j2534");
    expect(r.options.protocol).toBeUndefined();
    expect(r.options.port).toBeUndefined();
  });

  it("--gateway implies interface=gateway and parses host/port", () => {
    const r = resolveSelection(undefined, { gateway: "10.0.0.1:6802" });
    expect(r.interface).toBe("gateway");
    expect(r.options.host).toBe("10.0.0.1");
    expect(r.options.port).toBe(6802);
  });

  it("undefined override values are dropped (lets caller spread freely)", () => {
    const r = resolveSelection(
      { interface: "kdcan", options: { port: "/dev/ttyUSB0", baudRate: 9600 } },
      { interfaceName: "kdcan", options: { port: undefined, baudRate: 38400 } },
    );
    // port retained from file (override was undefined), baudRate overridden
    expect(r.options.port).toBe("/dev/ttyUSB0");
    expect(r.options.baudRate).toBe(38400);
  });
});

describe("parseGatewayAddress", () => {
  it("parses host:port", () => {
    expect(parseGatewayAddress("10.0.0.1:6802")).toEqual({ host: "10.0.0.1", port: 6802 });
  });

  it("defaults to 6801 when port omitted", () => {
    expect(parseGatewayAddress("10.0.0.1")).toEqual({
      host: "10.0.0.1",
      port: DEFAULT_GATEWAY_PORT,
    });
  });

  it("parses bracketed IPv6", () => {
    expect(parseGatewayAddress("[::1]:6802")).toEqual({ host: "::1", port: 6802 });
  });

  it("bracketed IPv6 without port defaults to 6801", () => {
    expect(parseGatewayAddress("[::1]")).toEqual({ host: "::1", port: DEFAULT_GATEWAY_PORT });
  });

  it("rejects empty input", () => {
    expect(() => parseGatewayAddress("")).toThrow(EdiabasConfigError);
  });

  it("rejects malformed addresses", () => {
    expect(() => parseGatewayAddress(":6801")).toThrow(EdiabasConfigError);
    expect(() => parseGatewayAddress("host:")).toThrow(EdiabasConfigError);
    expect(() => parseGatewayAddress("host:abc")).toThrow(EdiabasConfigError);
  });
});

describe("summariseSelection", () => {
  it("simulation has a friendly label", () => {
    expect(summariseSelection({ interface: "simulation", options: {} })).toContain(
      "simulation",
    );
  });

  it("kdcan summary includes port and baud", () => {
    expect(
      summariseSelection({
        interface: "kdcan",
        options: { port: "/dev/cu.usbserial-A50285BI", baudRate: 9600 },
      }),
    ).toBe("kdcan · /dev/cu.usbserial-A50285BI @ 9600");
  });

  it("j2534 summary includes transport and protocol", () => {
    expect(
      summariseSelection({
        interface: "j2534",
        options: { transport: "serial", protocol: "ds2", baudRate: 9600 },
      }),
    ).toBe("j2534 · serial/ds2 @ 9600");
  });

  it("gateway summary includes host and port", () => {
    expect(
      summariseSelection({
        interface: "gateway",
        options: { host: "10.0.0.1", port: 6802 },
      }),
    ).toBe("gateway · 10.0.0.1:6802");
  });

  it("unknown interface falls back to a JSON dump", () => {
    expect(
      summariseSelection({ interface: "weird", options: { foo: "bar" } }),
    ).toBe('weird · {"foo":"bar"}');
  });
});
