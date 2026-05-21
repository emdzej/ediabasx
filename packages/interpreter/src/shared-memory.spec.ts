import { beforeEach, describe, expect, it } from "vitest";
import { RegisterSet } from "./registers";
import { SharedMemory, shmget, shmset } from "./operations/shared-memory";

const S0 = { kind: "S", index: 0 } as const;
const S1 = { kind: "S", index: 1 } as const;

describe("Shared memory operations", () => {
  let registers: RegisterSet;
  let memory: SharedMemory;

  beforeEach(() => {
    registers = new RegisterSet();
    memory = new SharedMemory();
  });

  it("shmset stores values and shmget retrieves them", () => {
    registers.setS(0, "KEY_1");
    registers.setS(1, "VALUE_1");

    shmset(registers, memory, S0, S1);
    registers.setS(1, "");
    shmget(registers, memory, S1, S0);

    expect(registers.getS(1)).toBe("VALUE_1");
  });

  it("shmget returns empty string for missing keys", () => {
    registers.setS(0, "MISSING");
    shmget(registers, memory, S1, S0);
    expect(registers.getS(1)).toBe("");
    // Missing key → C# `SetArrayData(ByteArray0)` → true length 0.
    // The previous string path would have produced length 1 here.
    expect(registers.getSBinary(1).length).toBe(0);
  });

  it("shmget preserves byte length of payloads not ending in 0x00", () => {
    // Mirrors C# `OpShmget` (EdOperations.cs:2136): writes the stored
    // bytes via `SetArrayData(byte[])` — no NUL terminator. Routing
    // through `setStringValue` grew non-zero-tailed payloads by 1,
    // breaking any caller that round-trips a binary value through
    // `shmset`/`shmget` and length-checks the result.
    registers.setS(0, "KEY_BIN");
    memory.set("KEY_BIN", new Uint8Array([0x12, 0x34, 0x89]));

    shmget(registers, memory, S1, S0);

    expect(Array.from(registers.getSBinary(1))).toEqual([0x12, 0x34, 0x89]);
    expect(registers.getSBinary(1).length).toBe(3);
  });
});
