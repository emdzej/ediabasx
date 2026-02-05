import { describe, expect, it } from "vitest";
import { Interpreter } from "./interpreter";
import { RegisterSet } from "./registers";
import type { PrgFile, PrgJob, PrgHeader, PrgMetadata, PrgTable } from "@ediabas/best-parser";

function createHeader(): PrgHeader {
  return {
    magic: "",
    version: 1,
    stringTableOffset: 0,
    stringTableEnd: 0,
    jobTableOffset: 0,
    jobTableEnd: 0,
    codeOffset: 0,
    codeEnd: 0,
    nameTableOffset: 0,
    nameTableEnd: 0,
    dataOffset: 0,
  };
}

function createJob(name: string): PrgJob {
  return {
    name,
    offset: 0,
    argCount: 0,
    resultCount: 0,
    args: [],
    results: [],
  };
}

function createPrg(code: Uint8Array, tables: PrgTable[] = []): PrgFile {
  const header = createHeader();
  const metadata: PrgMetadata = {};
  return {
    header,
    rawBuffer: code,
    metadata,
    rawContent: "",
    strings: [],
    jobs: [createJob("TEST")],
    binaryJobs: [],
    tables,
    code,
    rawBuffer: code,
  };
}

function encodeImmString(text: string): Uint8Array {
  const bytes = new TextEncoder().encode(`${text}\0`);
  const length = bytes.length;
  const buffer = new Uint8Array(2 + bytes.length);
  const view = new DataView(buffer.buffer);
  view.setInt16(0, length, true);
  buffer.set(bytes, 2);
  return buffer;
}

describe("Interpreter", () => {
  it("executes a job and collects results", async () => {
    const nameBytes = encodeImmString("VALUE");
    const code = new Uint8Array([
      0x34,
      0x82,
      ...nameBytes,
      0x01,
      0x1d,
      0x00,
    ]);

    const registers = new RegisterSet();
    registers.setB(1, 0x12);

    const interpreter = new Interpreter(createPrg(code));
    const results = await interpreter.execute("TEST", { registers });

    expect(results).toHaveLength(1);
    expect(results[0].name).toBe("VALUE");
    expect(results[0].value).toBe(0x12);
  });

  it("steps through instructions", async () => {
    const nameBytes = encodeImmString("VALUE");
    const code = new Uint8Array([
      0x34,
      0x82,
      ...nameBytes,
      0x01,
      0x1d,
      0x00,
    ]);

    const registers = new RegisterSet();
    registers.setB(1, 0x34);

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST", { registers });

    const first = await interpreter.step();
    expect(first).toBe(true);
    const stateAfterFirst = interpreter.getState();
    expect(stateAfterFirst.pc).toBeGreaterThan(0);

    const second = await interpreter.step();
    expect(second).toBe(false);
  });

  it("executes table operations with table state", async () => {
    const code = new Uint8Array([
      0x7b,
      0x10,
      0x1c,
      0x7c,
      0x13,
      0x1d,
      0x10,
      0x7d,
      0x13,
      0x1e,
      0x11,
      0x1d,
      0x00,
    ]);

    const table: PrgTable = {
      name: "TEST_TABLE",
      columns: 2,
      rows: 2,
      columnOffset: 0,
      values: [
        ["ID", "Name"],
        ["1", "Alpha"],
        ["2", "Beta"],
      ],
    };

    const registers = new RegisterSet();
    registers.setS(0, "TEST_TABLE");
    registers.setS(1, "Beta");
    registers.setI(0, 1);
    registers.setI(1, 0);

    const interpreter = new Interpreter(createPrg(code, [table]));
    await interpreter.execute("TEST", { registers });

    expect(registers.getS(2)).toBe("2");
  });

  describe("etag (0x41)", () => {
    it("skips result when not in resultsRequest", async () => {
      // etag uses arg0=jump target (I register, mode 3), arg1=result name (S register, mode 1)
      // addrMode = 0x31 (arg0=3=REG_I, arg1=1=REG_S)
      // I0 = 0x10, S0 = 0x1c
      const code = new Uint8Array([
        // At offset 0: etag I0, S0 (jump to offset 8 if not requested)
        0x41, 0x31, 0x10, 0x1c, // etag: opcode, addrMode=0x31, I0=0x10, S0=0x1c
        // At offset 4: ergb S0, B1
        0x34, 0x12, 0x1c, 0x01, // ergb: opcode, addrMode=0x12 (S,AB), S0=0x1c, B1=0x01
        // At offset 8: eoj
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "SKIPPED");
      registers.setI(0, 8); // jump to eoj (offset 8)
      registers.setB(1, 0x42);

      const interpreter = new Interpreter(createPrg(code));
      const results = await interpreter.execute("TEST", {
        registers,
        resultsRequest: new Set(["OTHER"]),
      });

      expect(results).toHaveLength(0);
    });

    it("does not skip when result is in resultsRequest", async () => {
      const code = new Uint8Array([
        0x41, 0x31, 0x10, 0x1c, // etag I0, S0
        0x34, 0x12, 0x1c, 0x01, // ergb S0, B1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "WANTED");
      registers.setI(0, 8); // jump target (not used because WANTED is requested)
      registers.setB(1, 0x42);

      const interpreter = new Interpreter(createPrg(code));
      const results = await interpreter.execute("TEST", {
        registers,
        resultsRequest: new Set(["WANTED"]),
      });

      expect(results).toHaveLength(1);
      expect(results[0].name).toBe("WANTED");
    });

    it("does not skip when resultsRequest is empty", async () => {
      const code = new Uint8Array([
        0x41, 0x31, 0x10, 0x1c, // etag I0, S0
        0x34, 0x12, 0x1c, 0x01, // ergb S0, B1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "RESULT");
      registers.setI(0, 8);
      registers.setB(1, 0x42);

      const interpreter = new Interpreter(createPrg(code));
      const results = await interpreter.execute("TEST", { registers });

      expect(results).toHaveLength(1);
    });
  });

  describe("progress operations", () => {
    it("irange (0x98) sets progress range", async () => {
      // irange I0: addrMode=0x30 (arg0=3=REG_I, arg1=0=NONE)
      // I0 = 0x10
      const code = new Uint8Array([
        0x98, 0x30, 0x10, // irange I0
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setI(0, 100);

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step(); // irange
      
      const state = interpreter.getState();
      expect(state.progressRange).toBe(100);
      expect(state.progressPos).toBe(-1);
    });

    it("iincpos (0x99) increments progress position", async () => {
      // I0 = 0x10, I1 = 0x11
      const code = new Uint8Array([
        0x98, 0x30, 0x10, // irange I0 (100)
        0x99, 0x30, 0x11, // iincpos I1 (25)
        0x99, 0x30, 0x11, // iincpos I1 (25)
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setI(0, 100);
      registers.setI(1, 25);

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step(); // irange
      await interpreter.step(); // iincpos (0 -> 25)
      await interpreter.step(); // iincpos (25 -> 50)
      
      const state = interpreter.getState();
      expect(state.progressPos).toBe(50);
    });

    it("iincpos clamps to progressRange", async () => {
      const code = new Uint8Array([
        0x98, 0x30, 0x10, // irange I0 (50)
        0x99, 0x30, 0x11, // iincpos I1 (100)
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setI(0, 50);
      registers.setI(1, 100);

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step(); // irange
      await interpreter.step(); // iincpos
      
      const state = interpreter.getState();
      expect(state.progressPos).toBe(50); // clamped to range
    });

    it("iupdate (0x97) sets progress text", async () => {
      // iupdate S0: addrMode=0x10 (arg0=1=REG_S, arg1=0=NONE)
      // S0 = 0x1c
      const code = new Uint8Array([
        0x97, 0x10, 0x1c, // iupdate S0
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "Loading...");

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step(); // iupdate
      
      const state = interpreter.getState();
      expect(state.progressText).toBe("Loading...");
    });
  });
});
