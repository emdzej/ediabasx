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
  });
});
