/**
 * BEST2 Table Operations
 *
 * Table operations rely on internal interpreter state to track the active table
 * and current row index (similar to EdiabasLib).
 */

import type { PrgTable } from "@ediabasx/best-parser";
import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { setIntValue, setStringValue } from "./register-values";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type TableData = PrgTable;

export type TableState = {
  activeTable: TableData | null;
  rowIndex: number;
};

export type TableRegistry = Map<string, TableData>;

export function createTableRegistry(tables: TableData[]): TableRegistry {
  const registry = new Map<string, TableData>();
  for (const table of tables) {
    registry.set(table.name.toUpperCase(), table);
  }
  return registry;
}

function parseEdiabasInt(value: string): number {
  const trimmed = value.trimEnd();
  if (trimmed.length === 0) {
    return 0;
  }
  const lower = trimmed.toLowerCase();
  try {
    if (lower.startsWith("0x")) {
      return parseInt(trimmed.slice(2), 16);
    }
    if (lower.startsWith("0y")) {
      return parseInt(trimmed.slice(2), 2);
    }
    if (lower === "-" || lower === "--") {
      return 0;
    }
    if (lower[0] >= "a" && lower[0] <= "z") {
      return 0;
    }
    let numberConv = trimmed.trimStart();
    const index = numberConv.search(/[.,]/);
    if (index >= 0) {
      numberConv = numberConv.slice(0, index);
    }
    return parseInt(numberConv, 10);
  } catch {
    return 0;
  }
}

function getColumnIndex(table: TableData, columnName: string): number {
  const header = table.values[0] ?? [];
  const target = columnName.toUpperCase();
  for (let i = 0; i < header.length; i += 1) {
    if ((header[i] ?? "").toUpperCase() === target) {
      return i;
    }
  }
  return -1;
}

export function tabset(
  flags: Flags,
  registry: TableRegistry,
  state: TableState,
  tableName: string
): void {
  const table = registry.get(tableName.toUpperCase()) ?? null;
  const previousTable = state.activeTable;
  const previousRow = state.rowIndex;

  state.activeTable = table;
  state.rowIndex = -1;

  if (table && previousTable === table) {
    state.rowIndex = previousRow;
  }

  if (!table) {
    flags.z = true;
  }
}

export function tabseek(
  flags: Flags,
  state: TableState,
  columnName: string,
  searchValue: string
): void {
  const table = state.activeTable;
  if (!table) {
    state.rowIndex = -1;
    flags.z = true;
    return;
  }

  const columnIndex = getColumnIndex(table, columnName);
  if (columnIndex < 0) {
    state.rowIndex = -1;
    flags.z = true;
    return;
  }

  const searchUpper = searchValue.toUpperCase();
  for (let row = 0; row < table.rows; row += 1) {
    const dataRowIndex = row + 1;
    const cellValue = (table.values[dataRowIndex]?.[columnIndex] ?? "").toUpperCase();
    if (cellValue === searchUpper) {
      state.rowIndex = row;
      flags.z = false;
      return;
    }
  }

  state.rowIndex = table.rows > 0 ? table.rows - 1 : -1;
  flags.z = true;
}

export function tabseeku(
  flags: Flags,
  state: TableState,
  columnName: string,
  searchValue: number
): void {
  const table = state.activeTable;
  if (!table) {
    state.rowIndex = -1;
    flags.z = true;
    return;
  }

  const columnIndex = getColumnIndex(table, columnName);
  if (columnIndex < 0) {
    state.rowIndex = -1;
    flags.z = true;
    return;
  }

  const searchNumber = searchValue >>> 0;
  for (let row = 0; row < table.rows; row += 1) {
    const dataRowIndex = row + 1;
    const cellValue = table.values[dataRowIndex]?.[columnIndex] ?? "";
    if ((parseEdiabasInt(cellValue) >>> 0) === searchNumber) {
      state.rowIndex = row;
      flags.z = false;
      return;
    }
  }

  state.rowIndex = table.rows > 0 ? table.rows - 1 : -1;
  flags.z = true;
}

export function tabget(
  registers: RegisterSet,
  _flags: Flags,
  state: TableState,
  destination: StringRegisterRef,
  columnName: string
): void {
  const table = state.activeTable;
  if (!table || state.rowIndex < 0) {
    setStringValue(registers, destination, "");
    return;
  }

  const columnIndex = getColumnIndex(table, columnName);
  if (columnIndex < 0) {
    setStringValue(registers, destination, "");
    return;
  }

  if (state.rowIndex >= table.rows) {
    setStringValue(registers, destination, "");
    return;
  }

  const dataRowIndex = state.rowIndex + 1;
  const value = table.values[dataRowIndex]?.[columnIndex] ?? "";
  setStringValue(registers, destination, value);
}

export function tabrows(
  registers: RegisterSet,
  _flags: Flags,
  state: TableState,
  destination: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table) {
    setIntValue(registers, destination, 0);
    return;
  }

  setIntValue(registers, destination, table.rows + 1);
}

export function tabcols(
  registers: RegisterSet,
  _flags: Flags,
  state: TableState,
  destination: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table) {
    setIntValue(registers, destination, 0);
    return;
  }

  setIntValue(registers, destination, table.columns);
}

export function tabline(
  flags: Flags,
  state: TableState,
  line: number
): void {
  const table = state.activeTable;
  if (!table) {
    state.rowIndex = -1;
    flags.z = true;
    return;
  }

  if (line >= table.rows) {
    state.rowIndex = table.rows > 0 ? table.rows - 1 : -1;
    flags.z = true;
    return;
  }

  state.rowIndex = line;
  flags.z = false;
}

export const tablen = tabrows;
