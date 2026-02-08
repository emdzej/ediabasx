import { describe, expect, it } from "vitest";
import { Interpreter } from "./interpreter";
import { RegisterSet } from "./registers";
import { EdiabasErrorCodes, EdiabasError } from "@ediabasx/core";
import type { PrgFile, PrgJob, PrgHeader, PrgMetadata, PrgTable } from "@ediabasx/best-parser";

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

describe("Error Trap Mechanism", () => {
  // sett I0 (set trap bit from I0)
  // clrt (clear trap bit)
  // eerr (execute error)

  it("sett sets the trap bit", async () => {
    // sett I0: opcode 0x45, addrMode 0x30 (I reg), reg 0x10 (I0)
    const code = new Uint8Array([
      0x45, 0x30, 0x10, // sett I0
      0x1d, 0x00, // eoj
    ]);

    const registers = new RegisterSet();
    registers.setI(0, 10); // Trap bit 10

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST", { registers });
    
    await interpreter.step(); // sett

    const state = interpreter.getState();
    expect(state.errorTrapBitNr).toBe(10);
  });

  it("clrt clears the trap bit", async () => {
    // clrt: opcode 0x46
    const code = new Uint8Array([
      0x45, 0x30, 0x10, // sett I0
      0x46, 0x00, // clrt
      0x1d, 0x00, // eoj
    ]);

    const registers = new RegisterSet();
    registers.setI(0, 5);

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST", { registers });
    
    await interpreter.step(); // sett
    expect(interpreter.getState().errorTrapBitNr).toBe(5);
    
    await interpreter.step(); // clrt
    expect(interpreter.getState().errorTrapBitNr).toBe(-1);
  });

  it("eerr throws specific error when trap bit matches dictionary", async () => {
    // Trap bit 2 maps to EDIABAS_BIP_0002
    // sett I0, eerr
    const code = new Uint8Array([
      0x45, 0x30, 0x10, // sett I0
      0x4d, 0x00, // eerr
      0x1d, 0x00, // eoj
    ]);

    const registers = new RegisterSet();
    registers.setI(0, 2); // Corresponds to EDIABAS_BIP_0002

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST", { registers });

    await interpreter.step(); // sett
    
    // eerr should throw
    await expect(interpreter.step()).rejects.toThrowError(EdiabasError);
    
    try {
        await interpreter.step();
    } catch (e) {
        if (e instanceof EdiabasError) {
            expect(e.code).toBe(EdiabasErrorCodes.EDIABAS_BIP_0002);
        } else {
            throw e;
        }
    }
  });

  it("eerr throws generic error when trap bit is not in dictionary", async () => {
    // Trap bit 999 (unknown)
    const code = new Uint8Array([
      0x45, 0x30, 0x10, // sett I0
      0x4d, 0x00, // eerr
      0x1d, 0x00, // eoj
    ]);

    const registers = new RegisterSet();
    registers.setI(0, 999);

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST", { registers });

    await interpreter.step(); // sett
    
    // eerr should throw generic BIP_0000
    try {
        await interpreter.step();
    } catch (e) {
        if (e instanceof EdiabasError) {
            expect(e.code).toBe(EdiabasErrorCodes.EDIABAS_BIP_0000);
        } else {
            throw e;
        }
    }
  });

  it("eerr does nothing if trap bit is -1 (default)", async () => {
    const code = new Uint8Array([
      0x4d, 0x00, // eerr
      0x1d, 0x00, // eoj
    ]);

    const interpreter = new Interpreter(createPrg(code));
    interpreter.start("TEST");
    
    // Should simply proceed without error
    const result = await interpreter.step(); // eerr
    expect(result).toBe(true);
    
    const state = interpreter.getState();
    expect(state.errorTrapBitNr).toBe(-1);
  });
});
