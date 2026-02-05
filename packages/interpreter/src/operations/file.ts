import { cp1252ToUtf8, utf8ToCp1252 } from "@ediabas/core";
import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, getStringValue, setIntValue, setStringValue } from "./register-values";

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
  modeRef?: StringRegisterRef | FileOpenMode
): void {
  const path = getStringValue(registers, pathRef);
  const mode = typeof modeRef === "string"
    ? modeRef
    : modeRef
      ? (getStringValue(registers, modeRef) as FileOpenMode)
      : "r";
  const handle = fileSystem.open(path, mode);
  setIntValue(registers, destination, handle);
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
  destination: StringRegisterRef,
  handleRef: IntRegisterRef,
  lengthRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  const length = getIntValue(registers, lengthRef);
  const data = fileSystem.read(handle, length);
  setStringValue(registers, destination, cp1252ToUtf8(data));
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
  fseek(fileSystem, registers, handleRef, offsetRef, "current");
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
  handleRef: IntRegisterRef
): void {
  const handle = getIntValue(registers, handleRef);
  if (fileSystem.readLine) {
    const data = fileSystem.readLine(handle);
    setStringValue(registers, destination, data ? cp1252ToUtf8(data) : "");
  } else {
    // Fallback: read byte by byte until newline
    const bytes: number[] = [];
    while (!fileSystem.eof(handle)) {
      const byte = fileSystem.read(handle, 1);
      if (byte.length === 0 || byte[0] === 0x0a) break;
      if (byte[0] !== 0x0d) bytes.push(byte[0]);
    }
    setStringValue(registers, destination, cp1252ToUtf8(new Uint8Array(bytes)));
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
