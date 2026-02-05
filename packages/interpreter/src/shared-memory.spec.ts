import { beforeEach, describe, expect, it } from "vitest";
import { RegisterSet } from "./registers";
import { SharedMemory, shmget, shmset } from "./operations/shared-memory";

const I0 = { kind: "I", index: 0 } as const;
const I1 = { kind: "I", index: 1 } as const;

describe("Shared memory operations", () => {
  let registers: RegisterSet;
  let memory: SharedMemory;

  beforeEach(() => {
    registers = new RegisterSet();
    memory = new SharedMemory();
  });

  it("shmset stores values and shmget retrieves them", () => {
    registers.setI(0, 42);
    registers.setI(1, 1234);

    shmset(registers, memory, I0, I1);
    registers.setI(1, 0);
    shmget(registers, memory, I1, I0);

    expect(registers.getI(1)).toBe(1234);
  });

  it("shmget returns 0 for missing keys", () => {
    shmget(registers, memory, I0, 99);
    expect(registers.getI(0)).toBe(0);
  });
});
