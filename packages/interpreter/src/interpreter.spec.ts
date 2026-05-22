import { describe, expect, it } from "vitest";
import { Interpreter } from "./interpreter";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import type { PrgFile, PrgJob, PrgHeader, PrgMetadata, PrgTable } from "@emdzej/ediabasx-best-parser";

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

function createPrg(bytecode: Uint8Array, tables: PrgTable[] = []): PrgFile {
  const header = createHeader();
  const metadata: PrgMetadata = {};
  return {
    header,
    rawBuffer: bytecode,
    metadata,
    rawContent: "",
    strings: [],
    jobs: [createJob("TEST")],
    binaryJobs: [],
    tables,
    code: bytecode,
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
    expect(results[0]).toHaveLength(1);
    expect(results[0][0].name).toBe("VALUE");
    expect(results[0][0].value).toBe(0x12);
  });

  it("loads config values with cfgsg", async () => {
    const keyBytes = encodeImmString("testkey");
    const code = new Uint8Array([
      0x8a,
      0x18,
      0x1c,
      ...keyBytes,
      0x1d,
      0x00,
    ]);

    const interpreter = new Interpreter(createPrg(code));
    const config = new Map([["TestKey", "Hello"]]);

    await interpreter.execute("TEST", { config });
    const state = interpreter.getState();

    expect(state.registers.s[0]).toBe("Hello");
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

  it("jumps to absolute address when target is a register", async () => {
    const code = new Uint8Array([
      0x00,
      0x37,
      0x10,
      0x0c,
      0x00,
      0x00,
      0x00,
      0x0b,
      0x30,
      0x10,
      0x1c,
      0x00,
      0x1d,
      0x00,
    ]);

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST");

    await interpreter.step();
    await interpreter.step();

    const state = interpreter.getState();
    expect(state.pc).toBe(12);
  });

  it("calls absolute address when target is a register", async () => {
    const code = new Uint8Array([
      0x00,
      0x37,
      0x10,
      0x0c,
      0x00,
      0x00,
      0x00,
      0x0c,
      0x30,
      0x10,
      0x1d,
      0x00,
    ]);

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST");

    await interpreter.step();
    await interpreter.step();

    const state = interpreter.getState();
    expect(state.pc).toBe(12);
    expect(state.callStack).toEqual([10]);
  });

  it("executes table operations with table state", async () => {
    const code = new Uint8Array([
      0x7b,
      0x10,
      0x1c,
      0x7c,
      0x11,
      0x1d,
      0x1e,
      0x7d,
      0x11,
      0x1f,
      0x20,
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
    registers.setS(1, "Name");
    registers.setS(2, "Beta");
    registers.setS(3, "");
    registers.setS(4, "ID");

    const interpreter = new Interpreter(createPrg(code, [table]));
    await interpreter.execute("TEST", { registers });

    expect(registers.getS(3)).toBe("2");
  });

  describe("string opcodes (0x20-0x25)", () => {
    it("scmp only updates Z flag", async () => {
      const code = new Uint8Array([
        0x20, 0x11, 0x1c, 0x1d, // scmp S0, S1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      const flags = new Flags();
      registers.setS(0, "ABC");
      registers.setS(1, "ABD");
      flags.c = true;
      flags.s = true;
      flags.v = true;

      const interpreter = new Interpreter(createPrg(code));
      await interpreter.execute("TEST", { registers, flags });

      expect(flags.z).toBe(false);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(true);
    });

    it("slen supports indexed operands and updates flags", async () => {
      const code = new Uint8Array([
        0x23, 0x3c, 0x10, 0x1c, 0x01, 0x00, 0x02, 0x00, // slen I0, S0[1:len=2]
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      const flags = new Flags();
      registers.setS(0, "ABCD");
      flags.c = true;

      const interpreter = new Interpreter(createPrg(code));
      await interpreter.execute("TEST", { registers, flags });

      expect(registers.getI(0)).toBe(2);
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(false);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
    });

    it("spaste does nothing when index is past end", async () => {
      const code = new Uint8Array([
        0x24, 0x91, 0x1c, 0x0a, 0x00, 0x1d, // spaste S0[10], S1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "Hello");
      registers.setS(1, "X");

      const interpreter = new Interpreter(createPrg(code));
      await interpreter.execute("TEST", { registers });

      expect(registers.getS(0)).toBe("Hello");
    });
  });

  describe("string opcodes (0x20-0x25)", () => {
    it("scmp only updates Z flag", async () => {
      const code = new Uint8Array([
        0x20, 0x11, 0x1c, 0x1d, // scmp S0, S1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      const flags = new Flags();
      registers.setS(0, "ABC");
      registers.setS(1, "ABD");
      flags.c = true;
      flags.s = true;
      flags.v = true;

      const interpreter = new Interpreter(createPrg(code));
      await interpreter.execute("TEST", { registers, flags });

      expect(flags.z).toBe(false);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(true);
    });

    it("slen supports indexed operands and updates flags", async () => {
      const code = new Uint8Array([
        0x23, 0x3c, 0x10, 0x1c, 0x01, 0x00, 0x02, 0x00, // slen I0, S0[1:len=2]
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      const flags = new Flags();
      registers.setS(0, "ABCD");
      flags.c = true;

      const interpreter = new Interpreter(createPrg(code));
      await interpreter.execute("TEST", { registers, flags });

      expect(registers.getI(0)).toBe(2);
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(false);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
    });

    it("spaste does nothing when index is past end", async () => {
      const code = new Uint8Array([
        0x24, 0x91, 0x1c, 0x0a, 0x00, 0x1d, // spaste S0[10], S1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "Hello");
      registers.setS(1, "X");

      const interpreter = new Interpreter(createPrg(code));
      await interpreter.execute("TEST", { registers });

      expect(registers.getS(0)).toBe("Hello");
    });
  });

  describe("etag (0x41)", () => {
    it("skips result when not in resultsRequest", async () => {
      // etag uses arg0=jump target (I register, mode 3), arg1=result name (S register, mode 1)
      // addrMode = 0x31 (arg0=3=REG_I, arg1=1=REG_S)
      // I2 = 0x12, S0 = 0x1c. Using I2 (not I0) so B1 (used by ergb) does not alias I0's high byte.
      const code = new Uint8Array([
        // At offset 0: etag I2, S0 (jump to offset 8 if not requested)
        0x41, 0x31, 0x12, 0x1c, // etag: opcode, addrMode=0x31, I2=0x12, S0=0x1c
        // At offset 4: ergb S0, B1
        0x34, 0x12, 0x1c, 0x01, // ergb: opcode, addrMode=0x12 (S,AB), S0=0x1c, B1=0x01
        // At offset 8: eoj
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "SKIPPED");
      registers.setI(2, 8); // jump to eoj (offset 8); I2 = bytes[4..5], does not alias B1
      registers.setB(1, 0x42);

      const interpreter = new Interpreter(createPrg(code));
      const results = await interpreter.execute("TEST", {
        registers,
        resultsRequest: new Set(["OTHER"]),
      });

      // etag with no matching result name → no results emitted at all → no sets archived
      expect(results).toHaveLength(0);
    });

    it("does not skip when result is in resultsRequest", async () => {
      const code = new Uint8Array([
        0x41, 0x31, 0x12, 0x1c, // etag I2, S0 (I2 avoids B1 aliasing)
        0x34, 0x12, 0x1c, 0x01, // ergb S0, B1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "WANTED");
      registers.setI(2, 8); // jump target (not used because WANTED is requested)
      registers.setB(1, 0x42);

      const interpreter = new Interpreter(createPrg(code));
      const results = await interpreter.execute("TEST", {
        registers,
        resultsRequest: new Set(["WANTED"]),
      });

      expect(results).toHaveLength(1);
      expect(results[0]).toHaveLength(1);
      expect(results[0][0].name).toBe("WANTED");
    });

    it("does not skip when resultsRequest is empty", async () => {
      const code = new Uint8Array([
        0x41, 0x31, 0x12, 0x1c, // etag I2, S0 (I2 avoids B1 aliasing)
        0x34, 0x12, 0x1c, 0x01, // ergb S0, B1
        0x1d, 0x00, // eoj
      ]);

      const registers = new RegisterSet();
      registers.setS(0, "RESULT");
      registers.setI(2, 8);
      registers.setB(1, 0x42);

      const interpreter = new Interpreter(createPrg(code));
      const results = await interpreter.execute("TEST", { registers });

      expect(results).toHaveLength(1);
      expect(results[0]).toHaveLength(1);
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

  describe("not (0x0a) — unary opcode regression", () => {
    // Anchor: KOMBI46R.prg::C_CHECKSUM in BMW NCS Expert's SG_CODIEREN
    // flow ran `not L0` and ediabasx aborted with
    // "Cannot read value from operand" — the 0x0A handler routed
    // through the binary `arithmeticReadModifyWrite` helper with a
    // synthetic `{ kind: "none" }` placeholder, which `readPolyValue`
    // rejected. Fix: dedicated `unaryReadModifyWrite` that never
    // touches arg1, mirroring C# `OpNot` (EdOperations.cs:1753).
    it("complements an L register in place and updates Z/S/V flags", async () => {
      // not L0 — addrMode = REG_L<<4 | NONE = 0x40; L0 register byte = 0x18.
      const code = new Uint8Array([
        0x0a, 0x40, 0x18, // not L0
        0x1d, 0x00,       // eoj
      ]);

      const registers = new RegisterSet();
      registers.setL(0, 0x12345678);

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step(); // not L0

      const state = interpreter.getState();
      expect(state.registers.l[0]).toBe((~0x12345678) >>> 0); // 0xEDCBA987
      expect(state.flags.s).toBe(true);   // high bit set
      expect(state.flags.z).toBe(false);
      expect(state.flags.v).toBe(false);
    });

    it("sets Z when the result is zero (input was all-ones)", async () => {
      const code = new Uint8Array([
        0x0a, 0x40, 0x18, // not L0
        0x1d, 0x00,       // eoj
      ]);

      const registers = new RegisterSet();
      registers.setL(0, 0xffffffff);

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step();

      const state = interpreter.getState();
      expect(state.registers.l[0]).toBe(0);
      expect(state.flags.z).toBe(true);
      expect(state.flags.s).toBe(false);
      expect(state.flags.v).toBe(false);
    });

    it("respects the destination's natural width (B0)", async () => {
      // not B0 — addrMode = REG_AB<<4 | NONE = 0x20; B0 register byte = 0x00.
      const code = new Uint8Array([
        0x0a, 0x20, 0x00, // not B0
        0x1d, 0x00,       // eoj
      ]);

      const registers = new RegisterSet();
      registers.setB(0, 0x0f);

      const interpreter = new Interpreter(createPrg(code));
      interpreter.start("TEST", { registers });
      await interpreter.step();

      const state = interpreter.getState();
      expect(state.registers.b[0]).toBe(0xf0); // masked to 8 bits
      expect(state.flags.s).toBe(true);
      expect(state.flags.z).toBe(false);
    });
  });
});
