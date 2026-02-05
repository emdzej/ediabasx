import { cp1252ToUtf8, utf8ToCp1252, EdiabasError, EdiabasErrorCodes } from "@ediabas/core";
import { RegisterSet } from "../registers";

export type StringRegisterRef = {
  kind: "S";
  index: number;
};

export type IntRegisterRef = {
  kind: "B" | "A" | "I" | "L";
  index: number;
};

export interface CommunicationInterface {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  send(data: Uint8Array): Promise<void>;
  receive(timeoutMs?: number): Promise<Uint8Array>;
  isConnected?: () => boolean;
  reset?: () => Promise<void> | void;
  getInterfaceType?: () => string;
  getInterfaceVersion?: () => number;
  type?: string;
  version?: number;
}

function getIntValue(registers: RegisterSet, ref: IntRegisterRef): number {
  switch (ref.kind) {
    case "B":
      return registers.getB(ref.index);
    case "A":
      return registers.getA(ref.index);
    case "I":
      return registers.getI(ref.index);
    case "L":
      return registers.getL(ref.index);
  }
}

function setIntValue(registers: RegisterSet, ref: IntRegisterRef, value: number): void {
  switch (ref.kind) {
    case "B":
      registers.setB(ref.index, value);
      return;
    case "A":
      registers.setA(ref.index, value);
      return;
    case "I":
      registers.setI(ref.index, value);
      return;
    case "L":
      registers.setL(ref.index, value);
      return;
  }
}

function getStringValue(registers: RegisterSet, ref: StringRegisterRef): string {
  return registers.getS(ref.index);
}

function setStringValue(registers: RegisterSet, ref: StringRegisterRef, value: string): void {
  registers.setS(ref.index, value);
}

function toBytes(registers: RegisterSet, ref: StringRegisterRef): Uint8Array {
  return utf8ToCp1252(getStringValue(registers, ref));
}

function fromBytes(registers: RegisterSet, ref: StringRegisterRef, data: Uint8Array): void {
  setStringValue(registers, ref, cp1252ToUtf8(data));
}

function assertConnected(interfaceClass: CommunicationInterface): void {
  if (interfaceClass.isConnected && !interfaceClass.isConnected()) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "Interface is not connected");
  }
}

function isTimeoutError(error: unknown): boolean {
  return error instanceof Error && error.name === "EdiabasTimeoutError";
}

function wrapInterfaceError(error: unknown, action: string): never {
  if (isTimeoutError(error)) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, `${action} timed out`);
  }
  if (error instanceof Error) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, `${action} failed: ${error.message}`);
  }
  throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, `${action} failed`);
}

export async function xconnect(interfaceClass: CommunicationInterface): Promise<void> {
  try {
    await interfaceClass.connect();
  } catch (error) {
    wrapInterfaceError(error, "Connect");
  }
}

export async function xhangup(interfaceClass: CommunicationInterface): Promise<void> {
  try {
    await interfaceClass.disconnect();
  } catch (error) {
    wrapInterfaceError(error, "Disconnect");
  }
}

export async function xsend(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  source: StringRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  try {
    await interfaceClass.send(toBytes(registers, source));
  } catch (error) {
    wrapInterfaceError(error, "Send");
  }
}

export async function xrecv(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: StringRegisterRef,
  timeoutMs?: IntRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  const timeout = timeoutMs ? getIntValue(registers, timeoutMs) : undefined;
  try {
    const data = await interfaceClass.receive(timeout);
    fromBytes(registers, destination, data);
  } catch (error) {
    wrapInterfaceError(error, "Receive");
  }
}

export async function xsendr(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  response: StringRegisterRef,
  request: StringRegisterRef,
  timeoutMs?: IntRegisterRef
): Promise<void> {
  await xsend(registers, interfaceClass, request);
  await xrecv(registers, interfaceClass, response, timeoutMs);
}

export async function xreset(interfaceClass: CommunicationInterface): Promise<void> {
  try {
    if (interfaceClass.reset) {
      await interfaceClass.reset();
      return;
    }
    await interfaceClass.disconnect();
    await interfaceClass.connect();
  } catch (error) {
    wrapInterfaceError(error, "Reset");
  }
}

export function xtype(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: StringRegisterRef
): void {
  const typeValue =
    (interfaceClass.getInterfaceType && interfaceClass.getInterfaceType()) ??
    interfaceClass.type ??
    interfaceClass.constructor?.name ??
    "unknown";
  setStringValue(registers, destination, typeValue);
}

export function xvers(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): void {
  const versionValue =
    (interfaceClass.getInterfaceVersion && interfaceClass.getInterfaceVersion()) ??
    interfaceClass.version ??
    0;
  setIntValue(registers, destination, versionValue);
}
