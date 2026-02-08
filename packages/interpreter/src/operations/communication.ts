import { EdiabasError, EdiabasErrorCodes } from "@ediabasx/core";
import type { EdiabasInterface } from "@ediabasx/interface-base";
import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import {
  getBinaryValue,
  getIntValue,
  setBinaryValue,
  setIntValue,
  setStringValue,
} from "./register-values";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type CommunicationInterface = Pick<
  EdiabasInterface,
  | "connect"
  | "disconnect"
  | "send"
  | "receive"
  | "transmitFrequent"
  | "receiveFrequent"
  | "stopFrequent"
  | "isConnected"
  | "getPort"
  | "setPort"
  | "ignitionVoltage"
  | "loopTest"
  | "setProgramVoltage"
  | "rawData"
  | "switchSiRelais"
> & {
  batteryVoltage?: Promise<number> | number;
  reset?: () => Promise<void> | void;
  boot?: () => Promise<void> | void;
  getInterfaceType?: () => string;
  getInterfaceVersion?: () => number;
  interfaceType?: string;
  interfaceVersion?: number;
  type?: string;
  version?: number;
  keyBytes?: Uint8Array;
  getKeyBytes?: () => Promise<Uint8Array> | Uint8Array;
  state?: Uint8Array;
  getState?: () => Uint8Array | undefined;
  transmitData?: (payload: Uint8Array) => Promise<Uint8Array> | Uint8Array;
  setParameter?: (parameter: number, value: number) => Promise<void> | void;
  setCommParameter?: (parameters: number[]) => Promise<void> | void;
  commParameter?: number[];
  setAnswerLengths?: (lengths: number[]) => Promise<void> | void;
  commAnswerLen?: number[];
  setAnswerLength?: (length: number) => Promise<void> | void;
  setRepeatCounter?: (count: number) => Promise<void> | void;
  commRepeats?: number;
  open?: (mode?: number) => Promise<void> | void;
  close?: () => Promise<void> | void;
  closeEx?: (mode?: number) => Promise<void> | void;
  switchInterface?: (index: number) => Promise<void> | void;
  sendExtended?: (payload: Uint8Array) => Promise<void> | void;
  receiveExtended?: (timeoutMs?: number) => Promise<Uint8Array> | Uint8Array;
};

function toBytes(registers: RegisterSet, ref: StringRegisterRef): Uint8Array {
  return getBinaryValue(registers, ref);
}

function fromBytes(registers: RegisterSet, ref: StringRegisterRef, data: Uint8Array): void {
  setBinaryValue(registers, ref, data);
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

function assertCapability<T>(value: T | undefined | null, action: string): T {
  if (value === undefined || value === null) {
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

async function sendAndReceive(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  response: StringRegisterRef,
  request: StringRegisterRef,
  timeoutMs?: IntRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  const requestBytes = toBytes(registers, request);
  const timeout = timeoutMs ? getIntValue(registers, timeoutMs) : undefined;
  try {
    if (interfaceClass.transmitData) {
      const data = await interfaceClass.transmitData(requestBytes);
      fromBytes(registers, response, data);
      return;
    }
    await interfaceClass.send(requestBytes);
    const data = await interfaceClass.receive(timeout);
    fromBytes(registers, response, data);
  } catch (error) {
    wrapInterfaceError(error, "Send and receive");
  }
}

export async function xsend(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  response: StringRegisterRef,
  request: StringRegisterRef
): Promise<void> {
  await sendAndReceive(registers, interfaceClass, response, request);
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
  await sendAndReceive(registers, interfaceClass, response, request, timeoutMs);
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
  assertConnected(interfaceClass);
  const typeValue =
    (interfaceClass.getInterfaceType && interfaceClass.getInterfaceType()) ??
    interfaceClass.interfaceType ??
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
  assertConnected(interfaceClass);
  const versionValue =
    (interfaceClass.getInterfaceVersion && interfaceClass.getInterfaceVersion()) ??
    interfaceClass.interfaceVersion ??
    interfaceClass.version ??
    0;
  setIntValue(registers, destination, versionValue);
}

export async function xsetpar(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  source: StringRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  const dataArray = toBytes(registers, source);
  let dataTypeLen = 0;
  if (dataArray.length >= 2) {
    switch (dataArray[1]) {
      case 0x00:
        dataTypeLen = 2;
        break;
      case 0x01:
        dataTypeLen = 4;
        break;
      case 0xff:
        dataTypeLen = 1;
        break;
    }
  }

  let parsArray: number[] = [];
  if (dataTypeLen > 0 && dataArray.length % dataTypeLen === 0) {
    const length = dataArray.length / dataTypeLen;
    parsArray = new Array<number>(length);
    for (let i = 0; i < length; i++) {
      const offset = i * dataTypeLen;
      let value = dataArray[offset];
      if (dataTypeLen >= 2) {
        value |= dataArray[offset + 1] << 8;
      }
      if (dataTypeLen >= 4) {
        value |= (dataArray[offset + 2] << 16) | (dataArray[offset + 3] << 24);
      }
      parsArray[i] = value >>> 0;
    }
  }

  try {
    if (interfaceClass.setCommParameter) {
      await interfaceClass.setCommParameter(parsArray);
      return;
    }
    if ("commParameter" in interfaceClass) {
      interfaceClass.commParameter = parsArray;
      return;
    }
    if (interfaceClass.setParameter) {
      for (let i = 0; i < parsArray.length; i++) {
        await interfaceClass.setParameter(i, parsArray[i]);
      }
      return;
    }
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "Set parameters is not supported");
  } catch (error) {
    wrapInterfaceError(error, "Set parameters");
  }
}

export async function xawlen(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  source: StringRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  const dataArray = toBytes(registers, source);
  if (dataArray.length % 2 !== 0) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "Invalid answer length data");
  }
  const length = dataArray.length / 2;
  const answerArray = new Array<number>(length);
  for (let i = 0; i < length; i++) {
    const offset = i * 2;
    const value = dataArray[offset] | (dataArray[offset + 1] << 8);
    answerArray[i] = value;
  }

  try {
    if (interfaceClass.setAnswerLengths) {
      await interfaceClass.setAnswerLengths(answerArray);
      return;
    }
    if ("commAnswerLen" in interfaceClass) {
      interfaceClass.commAnswerLen = answerArray;
      return;
    }
    if (interfaceClass.setAnswerLength && answerArray.length > 0) {
      await interfaceClass.setAnswerLength(answerArray[0]);
      return;
    }
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "Set answer length is not supported");
  } catch (error) {
    wrapInterfaceError(error, "Set answer length");
  }
}

export async function xsendf(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  payload: StringRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  try {
    await interfaceClass.transmitFrequent(toBytes(registers, payload));
  } catch (error) {
    wrapInterfaceError(error, "Send frequent");
  }
}

export async function xrequf(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  response: StringRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  try {
    const data = await interfaceClass.receiveFrequent();
    fromBytes(registers, response, data);
  } catch (error) {
    wrapInterfaceError(error, "Receive frequent");
  }
}

export async function xstopf(interfaceClass: CommunicationInterface): Promise<void> {
  assertConnected(interfaceClass);
  try {
    await interfaceClass.stopFrequent();
  } catch (error) {
    wrapInterfaceError(error, "Stop frequent");
  }
}

export async function xkeyb(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: StringRegisterRef
): Promise<void> {
  try {
    const keyBytes =
      interfaceClass.keyBytes ??
      (interfaceClass.getKeyBytes ? await interfaceClass.getKeyBytes() : undefined);
    if (keyBytes) {
      fromBytes(registers, destination, keyBytes);
    }
  } catch (error) {
    wrapInterfaceError(error, "Key bytes");
  }
}

export function xstate(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: StringRegisterRef
): void {
  const stateValue =
    (interfaceClass.getState && interfaceClass.getState()) ?? interfaceClass.state;
  if (stateValue) {
    fromBytes(registers, destination, stateValue);
  }
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
  count: IntRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  const value = getIntValue(registers, count);
  try {
    if (interfaceClass.setRepeatCounter) {
      await interfaceClass.setRepeatCounter(value);
      return;
    }
    if ("commRepeats" in interfaceClass) {
      interfaceClass.commRepeats = value;
      return;
    }
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "Set repeat counter is not supported");
  } catch (error) {
    wrapInterfaceError(error, "Set repeat counter");
  }
}

export async function xgetport(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef,
  portIndex: number
): Promise<void> {
  const getPort = assertCapability(interfaceClass.getPort, "Get port");
  try {
    const portValue = await getPort(portIndex & 0xff);
    setIntValue(registers, destination, portValue);
  } catch (error) {
    wrapInterfaceError(error, "Get port");
  }
}

export async function xsetport(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  portIndexSource: StringRegisterRef,
  portValue: number
): Promise<void> {
  const setPort = assertCapability(interfaceClass.setPort, "Set port");
  try {
    const portData = toBytes(registers, portIndexSource);
    const portIndex = portData[0] ?? 0;
    await setPort(portIndex, portValue);
  } catch (error) {
    wrapInterfaceError(error, "Set port");
  }
}

export async function xbatt(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): Promise<void> {
  const batteryVoltage = assertCapability(interfaceClass.batteryVoltage, "Battery voltage");
  try {
    const value = await batteryVoltage;
    if (value !== undefined && value !== null && value !== Number.MIN_SAFE_INTEGER) {
      setIntValue(registers, destination, value);
    }
  } catch (error) {
    wrapInterfaceError(error, "Battery voltage");
  }
}

export async function xignit(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): Promise<void> {
  const ignitionVoltage = assertCapability(interfaceClass.ignitionVoltage, "Ignition voltage");
  try {
    const value = await ignitionVoltage;
    if (value !== undefined && value !== null && value !== Number.MIN_SAFE_INTEGER) {
      setIntValue(registers, destination, value);
    }
  } catch (error) {
    wrapInterfaceError(error, "Ignition voltage");
  }
}

export async function xloopt(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  destination: IntRegisterRef
): Promise<void> {
  const loopTest = assertCapability(interfaceClass.loopTest, "Loop test");
  try {
    const result = await loopTest;
    setIntValue(registers, destination, result);
  } catch (error) {
    wrapInterfaceError(error, "Loop test");
  }
}

export async function xprog(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  value: number
): Promise<void> {
  const setProgramVoltage = assertCapability(
    interfaceClass.setProgramVoltage,
    "Program voltage"
  );
  try {
    await setProgramVoltage(value);
  } catch (error) {
    wrapInterfaceError(error, "Program voltage");
  }
}

export async function xraw(
  registers: RegisterSet,
  interfaceClass: CommunicationInterface,
  response: StringRegisterRef,
  request: StringRegisterRef
): Promise<void> {
  assertConnected(interfaceClass);
  const rawData = assertCapability(interfaceClass.rawData, "Raw data");
  try {
    const data = await rawData(toBytes(registers, request));
    fromBytes(registers, response, data);
  } catch (error) {
    wrapInterfaceError(error, "Raw data");
  }
}

export async function xsireset(
  interfaceClass: CommunicationInterface,
  timeValue: number
): Promise<void> {
  const switchSiRelais = assertCapability(
    interfaceClass.switchSiRelais,
    "Service interval reset"
  );
  try {
    await switchSiRelais(timeValue);
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
  assertConnected(interfaceClass);
  try {
    await interfaceClass.send(toBytes(registers, source));
  } catch (error) {
    wrapInterfaceError(error, "Send");
  }
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
