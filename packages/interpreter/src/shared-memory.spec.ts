import { beforeEach, describe, expect, it } from "vitest";
import { RegisterSet } from "./registers";
import { SharedMemory, shmget, shmset, type SharedMemoryKeyOperand, type SharedMemoryValueOperand } from "./operations/shared-memory";

const S0 = { kind: "S", index: 0 } as const;
const S1 = { kind: "S", index: 1 } as const;

describe("Shared memory operations", () => {
  let registers: RegisterSet;
  let memory: SharedMemory;

  beforeEach(() => {
    registers = new RegisterSet();
    memory = new SharedMemory();
  });

  it("shmset stores values with string key and value", () => {
    const keyOp: SharedMemoryKeyOperand = { kind: "string", value: "TEST_KEY" };
    const valueOp: SharedMemoryValueOperand = { kind: "string", value: "test value" };

    shmset(registers, memory, keyOp, valueOp);
    
    expect(memory.has("TEST_KEY")).toBe(true);
    const stored = memory.get("TEST_KEY");
    expect(new TextDecoder().decode(stored)).toBe("test value");
  });

  it("shmget retrieves stored values into string register", () => {
    const keyOp: SharedMemoryKeyOperand = { kind: "string", value: "MY_KEY" };
    const valueOp: SharedMemoryValueOperand = { kind: "string", value: "hello world" };
    
    shmset(registers, memory, keyOp, valueOp);
    shmget(registers, memory, S0, keyOp);

    expect(registers.getS(0)).toBe("hello world");
  });

  it("shmget returns empty string for missing keys", () => {
    registers.setS(0, "should be cleared");
    const keyOp: SharedMemoryKeyOperand = { kind: "string", value: "NONEXISTENT" };
    
    shmget(registers, memory, S0, keyOp);
    
    expect(registers.getS(0)).toBe("");
  });

  it("shmset/shmget with register operands", () => {
    registers.setS(0, "REG_KEY");
    registers.setS(1, "value from register");
    
    const keyOp: SharedMemoryKeyOperand = { kind: "register", ref: S0 };
    const valueOp: SharedMemoryValueOperand = { kind: "register", ref: S1 };
    
    shmset(registers, memory, keyOp, valueOp);
    
    expect(memory.has("REG_KEY")).toBe(true);
  });

  it("key lookup is case-insensitive", () => {
    const keyLower: SharedMemoryKeyOperand = { kind: "string", value: "mykey" };
    const keyUpper: SharedMemoryKeyOperand = { kind: "string", value: "MYKEY" };
    const valueOp: SharedMemoryValueOperand = { kind: "string", value: "case test" };
    
    shmset(registers, memory, keyLower, valueOp);
    shmget(registers, memory, S0, keyUpper);
    
    expect(registers.getS(0)).toBe("case test");
  });
});
