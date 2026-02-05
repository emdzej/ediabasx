/**
 * BEST2 Table Operations
 *
 * Table operations rely on internal interpreter state to track the active table
 * and current row index (similar to EdiabasLib).
 */

import type { PrgTable } from "@ediabas/best-parser";
import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, getStringValue, setIntValue, setStringValue } from "./register-values";

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

export function tabset(
  registers: RegisterSet,
  flags: Flags,
  registry: TableRegistry,
  state: TableState,
  tableNameRef: StringRegisterRef
): void {
  const tableName = getStringValue(registers, tableNameRef).toUpperCase();
  const table = registry.get(tableName) ?? null;

  state.activeTable = table;
  state.rowIndex = 0;

  if (!table) {
    flags.z = true;
    flags.c = true;
    return;
  }

  flags.z = false;
  flags.c = false;
}

export function tabseek(
  registers: RegisterSet,
  flags: Flags,
  state: TableState,
  valueRef: StringRegisterRef,
  colRef: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table) {
    state.rowIndex = -1;
    flags.z = true;
    flags.c = true;
    return;
  }

  const searchValue = getStringValue(registers, valueRef);
  const col = getIntValue(registers, colRef);

  if (col < 0 || col >= table.columns) {
    state.rowIndex = -1;
    flags.z = true;
    flags.c = true;
    return;
  }

  for (let row = 0; row < table.rows; row += 1) {
    const dataRowIndex = row + 1;
    if (dataRowIndex >= table.values.length) {
      continue;
    }
    const cellValue = table.values[dataRowIndex][col] ?? "";
    if (cellValue === searchValue) {
      state.rowIndex = row;
      flags.z = false;
      flags.c = false;
      return;
    }
  }

  state.rowIndex = -1;
  flags.z = true;
  flags.c = true;
}

export function tabseeku(
  registers: RegisterSet,
  flags: Flags,
  state: TableState,
  valueRef: StringRegisterRef,
  colRef: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table) {
    state.rowIndex = -1;
    flags.z = true;
    flags.c = true;
    return;
  }

  const searchValue = getStringValue(registers, valueRef).toUpperCase();
  const col = getIntValue(registers, colRef);

  if (col < 0 || col >= table.columns) {
    state.rowIndex = -1;
    flags.z = true;
    flags.c = true;
    return;
  }

  for (let row = 0; row < table.rows; row += 1) {
    const dataRowIndex = row + 1;
    if (dataRowIndex >= table.values.length) {
      continue;
    }
    const cellValue = (table.values[dataRowIndex][col] ?? "").toUpperCase();
    if (cellValue === searchValue) {
      state.rowIndex = row;
      flags.z = false;
      flags.c = false;
      return;
    }
  }

  state.rowIndex = -1;
  flags.z = true;
  flags.c = true;
}

export function tabget(
  registers: RegisterSet,
  flags: Flags,
  state: TableState,
  destination: StringRegisterRef,
  colRef: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table || state.rowIndex < 0) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const col = getIntValue(registers, colRef);
  const dataRowIndex = state.rowIndex + 1;

  if (
    dataRowIndex < 1 ||
    dataRowIndex >= table.values.length ||
    col < 0 ||
    col >= table.columns
  ) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const value = table.values[dataRowIndex][col] ?? "";
  setStringValue(registers, destination, value);
  flags.z = false;
  flags.c = false;
}

export function tabrows(
  registers: RegisterSet,
  flags: Flags,
  state: TableState,
  destination: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    return;
  }

  setIntValue(registers, destination, table.rows);
  flags.z = table.rows === 0;
}

export function tabcols(
  registers: RegisterSet,
  flags: Flags,
  state: TableState,
  destination: IntRegisterRef
): void {
  const table = state.activeTable;
  if (!table) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    return;
  }

  setIntValue(registers, destination, table.columns);
  flags.z = table.columns === 0;
}

export function tabline(
  registers: RegisterSet,
  flags: Flags,
  state: TableState,
  destination: StringRegisterRef,
  delimiterRef?: StringRegisterRef
): void {
  const table = state.activeTable;
  if (!table || state.rowIndex < 0) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const dataRowIndex = state.rowIndex + 1;
  if (dataRowIndex < 1 || dataRowIndex >= table.values.length) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const delimiter = delimiterRef ? getStringValue(registers, delimiterRef) : "\t";
  const line = table.values[dataRowIndex].join(delimiter);
  setStringValue(registers, destination, line);
  flags.z = false;
  flags.c = false;
}

export const tablen = tabrows;
