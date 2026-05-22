import { utf8ToCp1252 } from "@emdzej/ediabasx-core";
import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, getStringValue, setBinaryValue, setIntValue } from "./register-values";
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
  fopenString(fileSystem, registers, destination, path, flags, mode);
}

/** fopen variant taking a resolved filename string (for polymorphic operands). */
export function fopenString(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  path: string,
  flags?: Flags,
  mode: FileOpenMode = "r"
): void {
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

/** fclose variant taking a resolved handle value. */
export function fcloseValue(fileSystem: FileSystem, handle: number): void {
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
  freadHandle(fileSystem, registers, destination, handle, flags);
}

/** fread variant taking a resolved handle value. */
export function freadHandle(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handle: number,
  flags?: Flags
): void {
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
  fseekHandle(fileSystem, handle, offset, origin);
}

/** fseek variant taking resolved handle/offset values. */
export function fseekHandle(
  fileSystem: FileSystem,
  handle: number,
  offset: number,
  origin: SeekOrigin = "start"
): void {
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
  fseeklnHandle(fileSystem, handle, line);
}

/** fseekln variant taking resolved handle/line values. */
export function fseeklnHandle(
  fileSystem: FileSystem,
  handle: number,
  line: number
): void {
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
  freadlnHandle(fileSystem, registers, destination, handle, flags);
}

/** freadln variant taking a resolved handle. */
export function freadlnHandle(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: StringRegisterRef,
  handle: number,
  flags?: Flags
): void {
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

  // Mirrors C# `OpFreadln` (EdOperations.cs:1091): writes the line
  // bytes via `SetArrayData(byte[])` — no NUL terminator. The string
  // path (`SetStringData`) would grow the buffer by one whenever the
  // last line byte isn't already `0x00`, throwing off any caller that
  // length-checks the result.
  if (!data) {
    setBinaryValue(registers, destination, new Uint8Array());
    if (flags) {
      flags.c = true;
    }
    return;
  }

  setBinaryValue(registers, destination, data);
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
  ftellHandle(fileSystem, registers, destination, handle);
}

/** ftell variant taking a resolved handle. */
export function ftellHandle(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handle: number
): void {
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
  ftelllnHandle(fileSystem, registers, destination, handle);
}

/** ftellln variant taking a resolved handle. */
export function ftelllnHandle(
  fileSystem: FileSystem,
  registers: RegisterSet,
  destination: IntRegisterRef,
  handle: number
): void {
  const lineNumber = fileSystem.tellLine ? fileSystem.tellLine(handle) : 0;
  setIntValue(registers, destination, lineNumber);
}
