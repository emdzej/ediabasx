import { beforeEach, describe, expect, it } from "vitest";
import { RegisterSet } from "./registers";
import {
  ProcedureRegistry,
  ProcedureStack,
  plink,
  pcall,
  ppush,
  ppushflt,
  ppushy,
  ppop,
  ppopflt,
  ppopy,
  ppopString,
} from "./operations/procedures";

const I0 = { kind: "I", index: 0 } as const;
const I1 = { kind: "I", index: 1 } as const;
const F0 = { kind: "F", index: 0 } as const;
const F1 = { kind: "F", index: 1 } as const;
const S0 = { kind: "S", index: 0 } as const;
const S1 = { kind: "S", index: 1 } as const;

describe("Procedure operations", () => {
  let registers: RegisterSet;
  let registry: ProcedureRegistry;
  let stack: ProcedureStack;

  beforeEach(() => {
    registers = new RegisterSet();
    registry = new ProcedureRegistry();
    stack = new ProcedureStack();
  });

  it("plink registers a procedure and pcall executes it", () => {
    const handler = (args: { kind: string }[]) => `args:${args.length}`;
    plink(registry, 1, handler);

    const result = pcall(registry, stack, 1);
    expect(result).toBe("args:0");
  });

  it("ppush/ppushflt/ppushy collect arguments", () => {
    registers.setI(0, 7);
    registers.setF(0, 3.5);
    registers.setS(0, "hi");

    ppush(registers, stack, I0);
    ppushflt(registers, stack, F0);
    ppushy(registers, stack, S0);

    plink(registry, 2, (args) => {
      expect(args[0]).toEqual({ kind: "int", value: 7 });
      expect(args[1]).toEqual({ kind: "float", value: 3.5 });
      expect(args[2].kind).toBe("binary");
    });

    pcall(registry, stack, 2);
  });

  it("ppopString returns binary payload as string", () => {
    registers.setS(0, "OK");
    ppushy(registers, stack, S0);

    const value = ppopString(stack);
    expect(value).toBe("OK");
  });

  it("ppop pops int value from stack to register", () => {
    registers.setI(0, 42);
    ppush(registers, stack, I0);

    ppop(registers, stack, I1);
    expect(registers.getI(1)).toBe(42);
  });

  it("ppop returns 0 when stack is empty", () => {
    registers.setI(1, 99);
    ppop(registers, stack, I1);
    expect(registers.getI(1)).toBe(0);
  });

  it("ppopflt pops float value from stack to register", () => {
    registers.setF(0, 3.14);
    ppushflt(registers, stack, F0);

    ppopflt(registers, stack, F1);
    expect(registers.getF(1)).toBeCloseTo(3.14);
  });

  it("ppopflt returns 0 when stack is empty", () => {
    registers.setF(1, 99.9);
    ppopflt(registers, stack, F1);
    expect(registers.getF(1)).toBe(0);
  });

  it("ppopy pops binary/string value from stack to register", () => {
    registers.setS(0, "Hello");
    ppushy(registers, stack, S0);

    ppopy(registers, stack, S1);
    expect(registers.getS(1)).toBe("Hello");
  });

  it("ppopy returns empty string when stack is empty", () => {
    registers.setS(1, "previous");
    ppopy(registers, stack, S1);
    expect(registers.getS(1)).toBe("");
  });
});
