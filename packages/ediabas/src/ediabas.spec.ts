import { describe, it, expect } from "vitest";
import { Ediabas } from "./ediabas";

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
});
