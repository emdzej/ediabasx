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
  ppopString,
} from "./operations/procedures";

const I0 = { kind: "I", index: 0 } as const;
const F0 = { kind: "F", index: 0 } as const;
const S0 = { kind: "S", index: 0 } as const;

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
});
