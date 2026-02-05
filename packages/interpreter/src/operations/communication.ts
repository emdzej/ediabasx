import { cp1252ToUtf8, utf8ToCp1252, EdiabasError, EdiabasErrorCodes } from "@ediabas/core";
import type { EdiabasInterface } from "@ediabas/interface-base";
import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import {
  getIntValue,
  getStringValue,
  setIntValue,
  setStringValue,
} from "./register-values";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type CommunicationInterface = Pick<
  EdiabasInterface,
  "connect" | "disconnect" | "send" | "receive" | "isConnected"
> & {
  reset?: () => Promise<void> | void;
  getInterfaceType?: () => string;
  getInterfaceVersion?: () => number;
  type?: string;
  version?: number;
  setParameter?: (parameter: number, value: number) => Promise<void> | void;
  setAnswerLength?: (length: number) => Promise<void> | void;
  sendFormatted?: (format: string, payload: string) => Promise<void> | void;
  requestFormatted?: (
    format: string,
    payload: string,
    timeoutMs?: number
  ) => Promise<Uint8Array> | Uint8Array;
  stopFormatted?: () => Promise<void> | void;
  readKeyboard?: () => Promise<string> | string;
  getState?: () => number;
  boot?: () => Promise<void> | void;
  setResponse?: (response: Uint8Array) => Promise<void> | void;
  getPort?: () => number;
  setPort?: (port: number) => Promise<void> | void;
  getIgnition?: () => number;
  loopTest?: () => Promise<number> | number;
  setProgrammingMode?: (enabled: boolean) => Promise<void> | void;
  rawCommand?: (payload: Uint8Array, timeoutMs?: number) => Promise<Uint8Array> | Uint8Array;
  resetServiceInterval?: () => Promise<void> | void;
  open?: (mode?: number) => Promise<void> | void;
  close?: () => Promise<void> | void;
  closeEx?: (mode?: number) => Promise<void> | void;
  switchInterface?: (index: number) => Promise<void> | void;
  sendExtended?: (payload: Uint8Array) => Promise<void> | void;
  receiveExtended?: (timeoutMs?: number) => Promise<Uint8Array> | Uint8Array;
};

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

function assertCapability<T>(value: T | undefined, action: string): T {
  if (!value) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, `${action} is not supported`);
  }
  return value;
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

export async function xsetpar(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  parameter: IntRegisterRef,
  value: IntRegisterRef
): Promise<void> {
  const setParameter = assertCapability(interfaceClass.setParameter, "Set parameter");
  try {
    await setParameter(getIntValue(registers, parameter), getIntValue(registers, value));
  } catch (error) {
    wrapInterfaceError(error, "Set parameter");
  }
}

export async function xawlen(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  length: IntRegisterRef
): Promise<void> {
  const setAnswerLength = assertCapability(interfaceClass.setAnswerLength, "Set answer length");
  try {
    await setAnswerLength(getIntValue(registers, length));
  } catch (error) {
    wrapInterfaceError(error, "Set answer length");
  }
}

export async function xsendf(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  format: StringRegisterRef,
  payload: StringRegisterRef
): Promise<void> {
  const sendFormatted = assertCapability(interfaceClass.sendFormatted, "Formatted send");
  try {
    await sendFormatted(getStringValue(registers, format), getStringValue(registers, payload));
  } catch (error) {
    wrapInterfaceError(error, "Formatted send");
  }
}

export async function xrequf(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  format: StringRegisterRef,
  payload: StringRegisterRef,
  response: StringRegisterRef,
  timeoutMs?: IntRegisterRef
): Promise<void> {
  const requestFormatted = assertCapability(interfaceClass.requestFormatted, "Formatted request");
  const timeout = timeoutMs ? getIntValue(registers, timeoutMs) : undefined;
  try {
    const data = await requestFormatted(
      getStringValue(registers, format),
      getStringValue(registers, payload),
      timeout
    );
    fromBytes(registers, response, data);
  } catch (error) {
    wrapInterfaceError(error, "Formatted request");
  }
}

export async function xstopf(interfaceClass: CommunicationInterface): Promise<void> {
  const stopFormatted = assertCapability(interfaceClass.stopFormatted, "Stop formatted");
  try {
    await stopFormatted();
  } catch (error) {
    wrapInterfaceError(error, "Stop formatted");
  }
}

export async function xkeyb(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: StringRegisterRef
): Promise<void> {
  const readKeyboard = assertCapability(interfaceClass.readKeyboard, "Keyboard read");
  try {
    const value = await readKeyboard();
    setStringValue(registers, destination, value);
  } catch (error) {
    wrapInterfaceError(error, "Keyboard read");
  }
}

export function xstate(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): void {
  const stateValue = interfaceClass.getState ? interfaceClass.getState() : 0;
  setIntValue(registers, destination, stateValue);
}

export async function xboot(interfaceClass: CommunicationInterface): Promise<void> {
  const boot = assertCapability(interfaceClass.boot, "Boot");
  try {
    await boot();
  } catch (error) {
    wrapInterfaceError(error, "Boot");
  }
}

export async function xreps(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  response: StringRegisterRef
): Promise<void> {
  const setResponse = assertCapability(interfaceClass.setResponse, "Set response");
  try {
    await setResponse(toBytes(registers, response));
  } catch (error) {
    wrapInterfaceError(error, "Set response");
  }
}

export function xgetport(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): void {
  const portValue = interfaceClass.getPort ? interfaceClass.getPort() : 0;
  setIntValue(registers, destination, portValue);
}

export async function xsetport(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  source: IntRegisterRef
): Promise<void> {
  const setPort = assertCapability(interfaceClass.setPort, "Set port");
  try {
    await setPort(getIntValue(registers, source));
  } catch (error) {
    wrapInterfaceError(error, "Set port");
  }
}

export function xignit(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): void {
  const ignitionValue = interfaceClass.getIgnition ? interfaceClass.getIgnition() : 0;
  setIntValue(registers, destination, ignitionValue);
}

export async function xloopt(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): Promise<void> {
  const loopTest = assertCapability(interfaceClass.loopTest, "Loop test");
  try {
    const result = await loopTest();
    setIntValue(registers, destination, result);
  } catch (error) {
    wrapInterfaceError(error, "Loop test");
  }
}

export async function xprog(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  mode: IntRegisterRef
): Promise<void> {
  const setProgrammingMode = assertCapability(
    interfaceClass.setProgrammingMode,
    "Programming mode"
  );
  try {
    await setProgrammingMode(getIntValue(registers, mode) !== 0);
  } catch (error) {
    wrapInterfaceError(error, "Programming mode");
  }
}

export async function xraw(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  request: StringRegisterRef,
  response: StringRegisterRef,
  timeoutMs?: IntRegisterRef
): Promise<void> {
  const timeout = timeoutMs ? getIntValue(registers, timeoutMs) : undefined;
  try {
    if (interfaceClass.rawCommand) {
      const data = await interfaceClass.rawCommand(toBytes(registers, request), timeout);
      fromBytes(registers, response, data);
      return;
    }
    await xsend(registers, interfaceClass, request);
    await xrecv(registers, interfaceClass, response, timeoutMs);
  } catch (error) {
    wrapInterfaceError(error, "Raw communication");
  }
}

export async function xsireset(interfaceClass: CommunicationInterface): Promise<void> {
  const resetServiceInterval = assertCapability(
    interfaceClass.resetServiceInterval,
    "Service interval reset"
  );
  try {
    await resetServiceInterval();
  } catch (error) {
    wrapInterfaceError(error, "Service interval reset");
  }
}

export async function xopen(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  mode?: IntRegisterRef
): Promise<void> {
  const open = assertCapability(interfaceClass.open, "Open interface");
  const modeValue = mode ? getIntValue(registers, mode) : undefined;
  try {
    await open(modeValue);
  } catch (error) {
    wrapInterfaceError(error, "Open interface");
  }
}

export async function xclose(interfaceClass: CommunicationInterface): Promise<void> {
  const close = assertCapability(interfaceClass.close, "Close interface");
  try {
    await close();
  } catch (error) {
    wrapInterfaceError(error, "Close interface");
  }
}

export async function xcloseex(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  mode?: IntRegisterRef
): Promise<void> {
  const closeEx = assertCapability(interfaceClass.closeEx, "Close interface extended");
  const modeValue = mode ? getIntValue(registers, mode) : undefined;
  try {
    await closeEx(modeValue);
  } catch (error) {
    wrapInterfaceError(error, "Close interface extended");
  }
}

export async function xswitch(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  index: IntRegisterRef
): Promise<void> {
  const switchInterface = assertCapability(interfaceClass.switchInterface, "Switch interface");
  try {
    await switchInterface(getIntValue(registers, index));
  } catch (error) {
    wrapInterfaceError(error, "Switch interface");
  }
}

export async function xsendex(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  source: StringRegisterRef
): Promise<void> {
  if (interfaceClass.sendExtended) {
    try {
      await interfaceClass.sendExtended(toBytes(registers, source));
      return;
    } catch (error) {
      wrapInterfaceError(error, "Extended send");
    }
  }
  await xsend(registers, interfaceClass, source);
}

export async function xrecvex(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: StringRegisterRef,
  timeoutMs?: IntRegisterRef
): Promise<void> {
  const timeout = timeoutMs ? getIntValue(registers, timeoutMs) : undefined;
  if (interfaceClass.receiveExtended) {
    try {
      const data = await interfaceClass.receiveExtended(timeout);
      fromBytes(registers, destination, data);
      return;
    } catch (error) {
      wrapInterfaceError(error, "Extended receive");
    }
  }
  await xrecv(registers, interfaceClass, destination, timeoutMs);
}
