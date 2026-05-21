import { describe, it, expect } from "vitest";
import { Ediabas, paramToEntry } from "./ediabas";

describe("Ediabas", () => {
  describe("constructor", () => {
    it("creates instance with minimal config", () => {
      const ediabas = new Ediabas({
        ecuPath: "/tmp/ecu",
      });

      expect(ediabas).toBeInstanceOf(Ediabas);
      expect(ediabas.isConnected()).toBe(false);
      expect(ediabas.getSgbdInfo()).toBeNull();
    });

    it("creates instance with simulation mode", () => {
      const ediabas = new Ediabas({
        ecuPath: "/tmp/ecu",
        simulation: true,
      });

      expect(ediabas).toBeInstanceOf(Ediabas);
      expect(ediabas.isConnected()).toBe(false);
    });
  });

  describe("getJobs", () => {
    it("throws when no SGBD loaded", () => {
      const ediabas = new Ediabas({
        ecuPath: "/tmp/ecu",
      });

      expect(() => ediabas.getJobs()).toThrow("No SGBD loaded");
    });
  });

  describe("executeJob", () => {
    it("throws when no SGBD loaded", async () => {
      const ediabas = new Ediabas({
        ecuPath: "/tmp/ecu",
      });

      await expect(ediabas.executeJob("IDENT")).rejects.toThrow("No SGBD loaded");
    });
  });

  describe("connect", () => {
    it("throws when no interface configured", async () => {
      const ediabas = new Ediabas({
        ecuPath: "/tmp/ecu",
      });

      await expect(ediabas.connect()).rejects.toThrow("No communication interface");
    });
  });

  describe("paramToEntry — param channel routing", () => {
    // EDIABAS exposes two parameter channels to the BEST/2 bytecode:
    // strings (read by `pari` / `pars`) and binary buffers (read by
    // `pary` / `parb` / `parw` / `parl` / `parr`). `paramToEntry`
    // decides which channel each entry in `executeJob(..., { params })`
    // routes to, based purely on the element type. Locks in the API
    // widening from `string[]` to `(string | Uint8Array)[]`.
    //
    // Anchor: binbuf-driven SGBDs (BMW NCS coding — `C_S_LESEN`,
    // `C_S_SCHREIBEN`, `C_S_AUFTRAG`, F-series equivalents) call
    // `pary` at the top of their entry point and bail with
    // `JOB_STATUS=ERROR_NO_BIN_BUFFER` if the binary payload is empty.
    // Pre-fix, callers had no way to populate `binaryPayload` —
    // hex-encoding the bytes into a string parameter landed in the
    // string channel.

    it("routes strings to the `string` channel", () => {
      const e = paramToEntry("hello");
      expect(e.kind).toBe("string");
      expect(e.value).toBe("hello");
    });

    it("routes empty string to the `string` channel", () => {
      // Empty strings still go to the string channel — explicitly NOT
      // the binary channel. A caller that wants an empty binary buffer
      // passes `new Uint8Array()`.
      const e = paramToEntry("");
      expect(e.kind).toBe("string");
      expect(e.value).toBe("");
    });

    it("routes Uint8Array to the `binary` channel", () => {
      const bytes = Uint8Array.from([0x01, 0x02, 0xFF]);
      const e = paramToEntry(bytes);
      expect(e.kind).toBe("binary");
      expect(e.value).toBe(bytes);
    });

    it("routes empty Uint8Array to the `binary` channel (separate from missing-param)", () => {
      // An empty Uint8Array is a valid explicit "binary payload of
      // length 0". Distinct from omitting the param entirely (which
      // leaves `binaryPayload` untouched).
      const bytes = new Uint8Array(0);
      const e = paramToEntry(bytes);
      expect(e.kind).toBe("binary");
      expect(e.value.length).toBe(0);
    });
  });
});
