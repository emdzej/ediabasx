import { cp1252ToUtf8, utf8ToCp1252 } from "@ediabas/core";
import { RegisterSet } from "../registers";
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

  set(index: ParameterIndex, parameter: JobParameter): void {
    this.parameters.set(index, parameter);
  }

  get(index: ParameterIndex): JobParameter | undefined {
    return this.parameters.get(index);
  }

  size(): number {
    return this.parameters.size;
  }
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
    case "string": {
      const parsed = parseInt(parameter.value, 10);
      return isNaN(parsed) ? 0 : parsed | 0;
    }
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
    case "string": {
      const parsed = parseFloat(parameter.value);
      return isNaN(parsed) ? 0 : parsed;
    }
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
  parameters: ParameterSet,
  destination: IntRegisterRef,
  index: ParameterIndex
): void {
  setIntValue(registers, destination, resolveIntParameter(parameters.get(index)));
}

export const parw = parb;
export const parl = parb;

export function pars(
  registers: RegisterSet,
  parameters: ParameterSet,
  destination: StringRegisterRef,
  index: ParameterIndex
): void {
  setStringValue(registers, destination, resolveStringParameter(parameters.get(index)));
}

export function parr(
  registers: RegisterSet,
  parameters: ParameterSet,
  destination: FloatRegisterRef,
  index: ParameterIndex
): void {
  setFloatValue(registers, destination, resolveFloatParameter(parameters.get(index)));
}

export function pary(
  registers: RegisterSet,
  parameters: ParameterSet,
  destination: StringRegisterRef,
  index: ParameterIndex
): void {
  const parameter = parameters.get(index);
  if (!parameter) {
    setStringValue(registers, destination, "");
    return;
  }
  switch (parameter.kind) {
    case "binary":
      setStringValue(registers, destination, cp1252ToUtf8(parameter.value));
      return;
    case "string":
      setStringValue(registers, destination, parameter.value);
      return;
    case "int":
      setStringValue(registers, destination, parameter.value.toString(10));
      return;
    case "float":
      setStringValue(registers, destination, parameter.value.toString(10));
      return;
    case "null":
      setStringValue(registers, destination, "");
      return;
  }
}

export function parn(
  registers: RegisterSet,
  parameters: ParameterSet,
  destination: IntRegisterRef
): void {
  setIntValue(registers, destination, parameters.size());
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
