import { describe, expect, it } from "vitest";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";
import { EmbeddedEdiabas } from "./embedded-ediabas.js";

/**
 * `break()` must bypass the internal queue. If it didn't, the abort
 * would only fire after the in-flight job's queue slot completed —
 * which defeats the entire point of `apiBreak` (interrupting the
 * running job). These tests pin that semantics.
 *
 * No real PRG or transport involved: we stub a hanging `connect()`
 * so an `init()` call sits in the queue indefinitely, then verify
 * `break()` resolves promptly regardless.
 */
class HangingInterface extends EdiabasInterface {
  /* Hangs forever — simulates a transport that can't establish. The
     init()'s queued task is stuck here, so any queued follow-up
     (`job` / `end`) would also be stuck. `break()` must not be. */
  async connect(): Promise<void> {
    return new Promise(() => { /* never resolves */ });
  }

  async disconnect(): Promise<void> {}

  async send(): Promise<void> {}
  async receive(): Promise<Uint8Array> { return new Uint8Array(); }

  getPort(): number { return 0; }
  setPort(): void {}
  get ignitionVoltage(): number { return 0; }
  get batteryVoltage(): number { return 0; }
  get loopTest(): number { return 0; }
  setProgramVoltage(): void {}
  rawData(): Uint8Array { return new Uint8Array(); }
  switchSiRelais(): void {}
}

describe("EmbeddedEdiabas.break", () => {
  it("resolves immediately while a queued init() is hanging on connect()", async () => {
    const iface = new HangingInterface();
    const eb = new EmbeddedEdiabas({
      sgbdPath: "/tmp/ecu",
      interface: iface,
    });

    /* Kick off init — it'll queue an async task that hangs in
       commInterface.connect() forever. */
    void eb.init();

    /* Yield once so the queued task gets a chance to start
       and reach the hanging connect() call. */
    await new Promise((resolve) => setTimeout(resolve, 5));

    /* break() must NOT queue behind the stuck init(). It bypasses
       the queue, calls Ediabas.break() (no-op when no interpreter
       is running), and resolves. */
    const t0 = Date.now();
    await eb.break();
    const elapsed = Date.now() - t0;

    // Generous threshold — even a slow CI box should resolve well
    // under this. Without the bypass this would be Infinity (the
    // init's queue slot never completes).
    expect(elapsed).toBeLessThan(100);
    expect(eb.state()).toBe("break");
  });

  it("doesn't throw before init() has been called", async () => {
    const iface = new HangingInterface();
    const eb = new EmbeddedEdiabas({
      sgbdPath: "/tmp/ecu",
      interface: iface,
    });

    /* break() on a never-init'd EmbeddedEdiabas — no inner Ediabas
       exists yet. Should resolve cleanly, not throw. Mirrors native
       EDIABAS where apiBreak is safe at any point in the lifecycle. */
    await expect(eb.break()).resolves.toBeUndefined();
    expect(eb.state()).toBe("break");
  });
});
