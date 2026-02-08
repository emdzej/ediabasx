import { cp1252ToUtf8, utf8ToCp1252 } from "@ediabasx/core";
import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getFloatValue, getIntValue, getStringValue, setFloatValue, setIntValue, setStringValue } from "./register-values";

export type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./register-refs";

export type ParameterIndex = number;

export type JobParameter =
  | { kind: "int"; value: number }
  | { kind: "float"; value: number }
  | { kind: "string"; value: string }
  | { kind: "binary"; value: Uint8Array }
  | { kind: "null" };

export class ParameterSet {
  private readonly parameters = new Map<ParameterIndex, JobParameter>();
  private binaryPayload: Uint8Array = new Uint8Array();

  set(index: ParameterIndex, parameter: JobParameter): void {
    this.parameters.set(index, parameter);
    if (parameter.kind === "binary") {
      this.binaryPayload = new Uint8Array(parameter.value);
    }
  }

  get(index: ParameterIndex): JobParameter | undefined {
    return this.parameters.get(index);
  }

  size(): number {
    return this.parameters.size;
  }

  getBinaryPayload(): Uint8Array {
    return new Uint8Array(this.binaryPayload);
  }
}

function parseEdiabasInt(value: string): { value: number; valid: boolean } {
  let parsedValue = 0;
  let valid = false;
  const trimmed = value.trimEnd();
  if (trimmed.length === 0) {
    return { value: parsedValue, valid };
  }
  const lower = trimmed.toLowerCase();
  try {
    if (lower.startsWith("0x")) {
      if (lower.length > 2) {
        const firstChar = lower[2];
        if ((firstChar >= "0" && firstChar <= "9") || (firstChar >= "a" && firstChar <= "f")) {
          parsedValue = parseInt(trimmed.slice(2), 16);
          valid = true;
        }
      }
    } else if (lower.startsWith("0y")) {
      parsedValue = parseInt(trimmed.slice(2), 2);
      valid = true;
    } else {
      if (lower !== "-" && lower !== "--") {
        if (!(lower[0] >= "a" && lower[0] <= "z")) {
          let numberConv = trimmed.trimStart();
          const index = numberConv.search(/[.,]/);
          if (index >= 0) {
            numberConv = numberConv.slice(0, index);
          }
          parsedValue = parseInt(numberConv, 10);
          valid = true;
        }
      }
    }
  } catch {
    parsedValue = 0;
  }

  if (Number.isNaN(parsedValue)) {
    parsedValue = 0;
    valid = false;
  }
  return { value: parsedValue, valid };
}

function parseEdiabasFloat(value: string): { value: number; valid: boolean } {
  const normalized = value.replace(/,/g, ".");
  const parsed = parseFloat(normalized);
  if (Number.isNaN(parsed)) {
    return { value: 0, valid: false };
  }
  return { value: parsed, valid: true };
}

function resolveIntParameter(parameter: JobParameter | undefined): number {
  if (!parameter) {
    return 0;
  }
  switch (parameter.kind) {
    case "int":
      return parameter.value | 0;
    case "float":
      return Math.trunc(parameter.value);
    case "string":
      return parseEdiabasInt(parameter.value).value | 0;
    case "binary":
      return parameter.value.length | 0;
    case "null":
      return 0;
  }
}

function resolveFloatParameter(parameter: JobParameter | undefined): number {
  if (!parameter) {
    return 0;
  }
  switch (parameter.kind) {
    case "float":
      return parameter.value;
    case "int":
      return parameter.value;
    case "string":
      return parseEdiabasFloat(parameter.value).value;
    case "binary":
      return parameter.value.length;
    case "null":
      return 0;
  }
}

function resolveStringParameter(parameter: JobParameter | undefined): string {
  if (!parameter) {
    return "";
  }
  switch (parameter.kind) {
    case "string":
      return parameter.value;
    case "int":
      return parameter.value.toString(10);
    case "float":
      return parameter.value.toString(10);
    case "binary":
      return cp1252ToUtf8(parameter.value);
    case "null":
      return "";
  }
}

export function parb(
  registers: RegisterSet,
  flags: Flags,
  parameters: ParameterSet,
  destination: IntRegisterRef,
  index: ParameterIndex
): void {
  const position = index - 1;
  const parameter = position >= 0 ? parameters.get(position) : undefined;
  let value = 0;

  flags.z = true;
  flags.c = false;
  flags.s = false;
  flags.v = false;

  if (parameter) {
    if (parameter.kind === "string") {
      if (parameter.value.length > 0) {
        flags.z = false;
      }
      value = parseEdiabasInt(parameter.value).value;
    } else {
      value = resolveIntParameter(parameter);
      flags.z = value === 0;
    }
  }

  setIntValue(registers, destination, value);
}

export const parw = parb;
export const parl = parb;

export function pars(
  registers: RegisterSet,
  flags: Flags,
  parameters: ParameterSet,
  destination: StringRegisterRef,
  index: ParameterIndex
): void {
  const position = index - 1;
  const parameter = position >= 0 ? parameters.get(position) : undefined;
  const value = resolveStringParameter(parameter);
  flags.z = value.length === 0;
  setStringValue(registers, destination, value);
}

export function parr(
  registers: RegisterSet,
  flags: Flags,
  parameters: ParameterSet,
  destination: FloatRegisterRef,
  index: ParameterIndex
): void {
  const position = index - 1;
  const parameter = position >= 0 ? parameters.get(position) : undefined;
  let value = 0;

  flags.z = true;
  flags.c = false;
  flags.s = false;
  flags.v = false;

  if (parameter) {
    if (parameter.kind === "string") {
      if (parameter.value.length > 0) {
        flags.z = false;
      }
      value = parseEdiabasFloat(parameter.value).value;
    } else {
      value = resolveFloatParameter(parameter);
      flags.z = value === 0;
    }
  }

  setFloatValue(registers, destination, value);
}

export function pary(
  registers: RegisterSet,
  flags: Flags,
  parameters: ParameterSet,
  destination: StringRegisterRef
): void {
  const payload = parameters.getBinaryPayload();
  flags.z = payload.length === 0;
  setStringValue(registers, destination, cp1252ToUtf8(payload));
}

export function parn(
  registers: RegisterSet,
  flags: Flags,
  parameters: ParameterSet,
  destination: IntRegisterRef
): void {
  setIntValue(registers, destination, parameters.size());
  const value = getIntValue(registers, destination);
  const length = destination.kind === "I" ? 2 : destination.kind === "L" ? 4 : 1;
  const mask = length === 4 ? 0xffffffff : (1 << (length * 8)) - 1;
  const signMask = 1 << (length * 8 - 1);
  const masked = value & mask;
  flags.z = masked === 0;
  flags.s = (masked & signMask) !== 0;
  flags.v = false;
}

export function pushParameter(
  parameters: ParameterSet,
  index: ParameterIndex,
  source: IntRegisterRef | FloatRegisterRef | StringRegisterRef,
  registers: RegisterSet
): void {
  if (source.kind === "S") {
    parameters.set(index, { kind: "string", value: getStringValue(registers, source) });
    return;
  }
  if (source.kind === "F") {
    parameters.set(index, { kind: "float", value: getFloatValue(registers, source) });
    return;
  }
  parameters.set(index, { kind: "int", value: getIntValue(registers, source) });
}

export function pushParameterBinary(
  parameters: ParameterSet,
  index: ParameterIndex,
  value: Uint8Array
): void {
  parameters.set(index, { kind: "binary", value: new Uint8Array(value) });
}

export function pushParameterString(
  parameters: ParameterSet,
  index: ParameterIndex,
  value: string
): void {
  parameters.set(index, { kind: "string", value });
}

export function pushParameterStringBinary(
  parameters: ParameterSet,
  index: ParameterIndex,
  value: string
): void {
  parameters.set(index, { kind: "binary", value: utf8ToCp1252(value) });
}
