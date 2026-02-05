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
    metadata,
    rawContent: "",
    strings: [],
    jobs: [createJob("TEST")],
    binaryJobs: [],
    tables,
    code,
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
});
