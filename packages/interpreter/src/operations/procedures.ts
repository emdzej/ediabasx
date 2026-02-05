import { cp1252ToUtf8, utf8ToCp1252, EdiabasError, EdiabasErrorCodes } from "@ediabas/core";
import { RegisterSet } from "../registers";
import type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getFloatValue, getIntValue, getStringValue } from "./register-values";

export type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./register-refs";

export type ProcedureArgument =
  | { kind: "int"; value: number }
  | { kind: "float"; value: number }
  | { kind: "binary"; value: Uint8Array };

export type ProcedureHandler = (args: ProcedureArgument[]) => void | number | string;

export class ProcedureRegistry {
  private readonly handlers = new Map<number, ProcedureHandler>();

  link(id: number, handler: ProcedureHandler): void {
    this.handlers.set(id, handler);
  }

  call(id: number, args: ProcedureArgument[]): void | number | string {
    const handler = this.handlers.get(id);
    if (!handler) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Procedure ${id} is not linked`
      );
    }
    return handler(args);
  }
}

export class ProcedureStack {
  private readonly args: ProcedureArgument[] = [];

  pushInt(value: number): void {
    this.args.push({ kind: "int", value });
  }

  pushFloat(value: number): void {
    this.args.push({ kind: "float", value });
  }

  pushBinary(value: Uint8Array): void {
    this.args.push({ kind: "binary", value: new Uint8Array(value) });
  }

  drain(): ProcedureArgument[] {
    const snapshot = this.args.splice(0, this.args.length);
    return snapshot.map((entry) =>
      entry.kind === "binary"
        ? { kind: entry.kind, value: new Uint8Array(entry.value) }
        : entry
    );
  }

  size(): number {
    return this.args.length;
  }
}

export function plink(
  registry: ProcedureRegistry,
  id: number,
  handler: ProcedureHandler
): void {
  registry.link(id, handler);
}

export function pcall(
  registry: ProcedureRegistry,
  stack: ProcedureStack,
  id: number
): void | number | string {
  const args = stack.drain();
  return registry.call(id, args);
}

export function ppush(
  registers: RegisterSet,
  stack: ProcedureStack,
  source: IntRegisterRef
): void {
  stack.pushInt(getIntValue(registers, source));
}

export function ppushflt(
  registers: RegisterSet,
  stack: ProcedureStack,
  source: FloatRegisterRef
): void {
  stack.pushFloat(getFloatValue(registers, source));
}

export function ppushy(
  registers: RegisterSet,
  stack: ProcedureStack,
  source: StringRegisterRef
): void {
  const value = getStringValue(registers, source);
  const encoded = utf8ToCp1252(value);
  stack.pushBinary(encoded);
}

export function ppushBinary(
  stack: ProcedureStack,
  value: Uint8Array
): void {
  stack.pushBinary(value);
}

export function ppopBinary(
  stack: ProcedureStack
): Uint8Array {
  const args = stack.drain();
  const entry = args.find((item) => item.kind === "binary");
  if (!entry || entry.kind !== "binary") {
    return new Uint8Array();
  }
  return new Uint8Array(entry.value);
}

export function ppopString(
  stack: ProcedureStack
): string {
  const binary = ppopBinary(stack);
  return cp1252ToUtf8(binary);
}
