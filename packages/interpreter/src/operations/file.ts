import { cp1252ToUtf8, utf8ToCp1252 } from "@emdzej/ediabasx-core";
import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, getStringValue, setIntValue, setStringValue } from "./register-values";
import type { Flags } from "../flags";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type FileHandle = number;

export type FileOpenMode = "r" | "w" | "a" | "r+" | "w+" | "a+";

export type SeekOrigin = "start" | "current" | "end";

export interface FileSystem {
  open(path: string, mode: FileOpenMode): FileHandle;
  close(handle: FileHandle): void;
  read(handle: FileHandle, length: number): Uint8Array;
  readLine?(handle: FileHandle): Uint8Array | null;
  write(handle: FileHandle, data: Uint8Array): number;
  seek(handle: FileHandle, offset: number, origin: SeekOrigin): void;
  tell?(handle: FileHandle): number;
  tellLine?(handle: FileHandle): number;
  eof(handle: FileHandle): boolean;
}

export function fopen(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  pathRef: StringRegisterRef,
  modeRef?: StringRegisterRef | FileOpenMode,
  flags?: Flags
): void {
  const path = getStringValue(registers, pathRef);
  const mode = typeof modeRef === "string"
    ? modeRef
    : modeRef
      ? (getStringValue(registers, modeRef) as FileOpenMode)
      : "r";
  let handle = -1;
  try {
    handle = fileSystem.open(path, mode);
  } catch {
    handle = -1;
  }
  setIntValue(registers, destination, handle);
  if (flags) {
    const masked = handle & 0xff;
    flags.z = masked === 0;
    flags.s = (masked & 0x80) !== 0;
  }
}

export function fclose(
  fileSystem: FileSystem,
  registers: RegisterSet,
  handleRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  fileSystem.close(handle);
}

export function fread(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handleRef: IntRegisterRef,
  flags?: Flags
): void {
  const handle = getIntValue(registers, handleRef);
  let value = -1;
  try {
    const data = fileSystem.read(handle, 1);
    if (data.length > 0) {
      value = data[0];
    }
  } catch {
    value = -1;
  }

  if (value < 0) {
    value = 0;
    if (flags) {
      flags.c = true;
    }
  } else if (flags) {
    flags.c = false;
  }

  setIntValue(registers, destination, value);
}

export function fwrite(
  fileSystem: FileSystem,
  registers: RegisterSet,
  handleRef: IntRegisterRef,
  source: StringRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  const data = utf8ToCp1252(getStringValue(registers, source));
  fileSystem.write(handle, data);
}

export function fseek(
  fileSystem: FileSystem,
  registers: RegisterSet,
  handleRef: IntRegisterRef,
  offsetRef: IntRegisterRef,
  origin: SeekOrigin = "start"
): void {
  const handle = getIntValue(registers, handleRef);
  const offset = getIntValue(registers, offsetRef);
  fileSystem.seek(handle, offset, origin);
}

export function fseekln(
  fileSystem: FileSystem,
  registers: RegisterSet,
  handleRef: IntRegisterRef,
  offsetRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  const line = getIntValue(registers, offsetRef);
  fileSystem.seek(handle, 0, "start");
  for (let i = 0; i < line; i++) {
    if (fileSystem.readLine) {
      const data = fileSystem.readLine(handle);
      if (!data) {
        break;
      }
    } else {
      let readAny = false;
      while (!fileSystem.eof(handle)) {
        const byte = fileSystem.read(handle, 1);
        if (byte.length === 0) {
          break;
        }
        readAny = true;
        if (byte[0] === 0x0a) {
          break;
        }
      }
      if (!readAny) {
        break;
      }
    }
  }
}

export function feof(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handleRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  setIntValue(registers, destination, fileSystem.eof(handle) ? 1 : 0);
}

/**
 * FREADLN - Read a line from file.
 * Reads until newline (LF) or EOF. CR is stripped.
 */
export function freadln(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: StringRegisterRef,
  handleRef: IntRegisterRef,
  flags?: Flags
): void {
  const handle = getIntValue(registers, handleRef);
  let data: Uint8Array | null = null;

  if (fileSystem.readLine) {
    data = fileSystem.readLine(handle);
  } else {
    // Fallback: read byte by byte until newline
    const bytes: number[] = [];
    let readAny = false;
    while (!fileSystem.eof(handle)) {
      const byte = fileSystem.read(handle, 1);
      if (byte.length === 0) break;
      readAny = true;
      if (byte[0] === 0x0a) break;
      if (byte[0] !== 0x0d) {
        bytes.push(byte[0]);
      }
    }
    data = readAny ? new Uint8Array(bytes) : null;
  }

  if (!data) {
    setStringValue(registers, destination, "");
    if (flags) {
      flags.c = true;
    }
    return;
  }

  setStringValue(registers, destination, cp1252ToUtf8(data));
  if (flags) {
    flags.c = false;
  }
}

/**
 * FTELL - Get current file position (byte offset).
 */
export function ftell(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handleRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  const position = fileSystem.tell ? fileSystem.tell(handle) : 0;
  setIntValue(registers, destination, position);
}

/**
 * FTELLLN - Get current line number in file.
 */
export function ftellln(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handleRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  const lineNumber = fileSystem.tellLine ? fileSystem.tellLine(handle) : 0;
  setIntValue(registers, destination, lineNumber);
}
