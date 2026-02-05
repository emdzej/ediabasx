/**
 * BEST2 Table Operations
 *
 * This module implements table manipulation opcodes for the BEST2 interpreter:
 * - TABGET (get value from table by index)
 * - TABSET (set value in table)
 * - TABLEN/TABROWS (get number of rows in table)
 * - TABCOLS (get number of columns in table)
 * - TABFIND/TABSEEK (find value in table)
 * - TABLINE (get line/row from table as string)
 *
 * Tables are parsed by @ediabas/best-parser and provided as PrgTable objects.
 * Table structure:
 * - First row (values[0]) contains column headers
 * - Subsequent rows contain data
 * - Tables are identified by name
 */

import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

/**
 * Table structure as parsed by best-parser.
 * Named BestTable to avoid conflict with global WebAssembly.Table type.
 */
export interface BestTable {
  /** Table name */
  name: string;
  /** Number of columns */
  columns: number;
  /** Number of data rows (excluding header) */
  rows: number;
  /** Column offset in file (used by parser) */
  columnOffset: number;
  /** Table data: first row is headers, rest is data */
  values: string[][];
}

// Note: We don't export "Table" type alias to avoid collision with global WebAssembly.Table

/**
 * Context containing available tables.
 */
export interface TableContext {
  /** Map of table name (uppercase) to table data */
  tables: Map<string, BestTable>;
  /** Current table being accessed */
  currentTable?: BestTable;
  /** Current row index (0-based, in data section) */
  currentRow?: number;
}

// Types are defined in register-refs.

/**
 * Get string value from register.
 */
function getStringValue(registers: RegisterSet, ref: StringRegisterRef): string {
  return registers.getS(ref.index);
}

/**
 * Set string value in register.
 */
function setStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef,
  value: string
): void {
  registers.setS(ref.index, value);
}

/**
 * Get integer value from register.
 */
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

/**
 * Set integer value in register.
 */
function setIntValue(
  registers: RegisterSet,
  ref: IntRegisterRef,
  value: number
): void {
  switch (ref.kind) {
    case "B":
      registers.setB(ref.index, value);
      break;
    case "A":
      registers.setA(ref.index, value);
      break;
    case "I":
      registers.setI(ref.index, value);
      break;
    case "L":
      registers.setL(ref.index, value);
      break;
  }
}

/**
 * TABGET - Get value from table by row and column index.
 *
 * Retrieves a cell value from the current table at the specified row and column.
 * Row 0 is the first data row (not the header).
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if out of bounds)
 * @param context - Table context
 * @param destination - Destination S register (receives cell value)
 * @param rowReg - Row index register (0-based, data rows)
 * @param colReg - Column index register (0-based)
 *
 * @example
 * ```ts
 * // Table has headers ["Name", "Value"], data [["A", "1"], ["B", "2"]]
 * // I0 = 1, I1 = 0
 * tabget(registers, flags, ctx, { kind: "S", index: 0 },
 *        { kind: "I", index: 0 }, { kind: "I", index: 1 });
 * // S0 = "B" (row 1, column 0)
 * ```
 */
export function tabget(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: StringRegisterRef,
  rowReg: IntRegisterRef,
  colReg: IntRegisterRef
): void {
  if (!context.currentTable) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const row = getIntValue(registers, rowReg);
  const col = getIntValue(registers, colReg);

  // Row 0 is first data row (values[1] since values[0] is headers)
  const dataRowIndex = row + 1;

  if (
    row < 0 ||
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

/**
 * TABGET_HEADER - Get column header value.
 *
 * Retrieves a column header (from row 0 of the table).
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if out of bounds)
 * @param context - Table context
 * @param destination - Destination S register
 * @param colReg - Column index register
 */
export function tabgetHeader(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: StringRegisterRef,
  colReg: IntRegisterRef
): void {
  if (!context.currentTable || context.currentTable.values.length === 0) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const col = getIntValue(registers, colReg);

  if (col < 0 || col >= table.columns) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const value = table.values[0][col] ?? "";
  setStringValue(registers, destination, value);
  flags.z = false;
  flags.c = false;
}

/**
 * TABSET - Set value in table at row and column.
 *
 * Sets a cell value in the current table at the specified row and column.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if out of bounds)
 * @param context - Table context (table is modified)
 * @param source - Source S register (value to set)
 * @param rowReg - Row index register (0-based, data rows)
 * @param colReg - Column index register (0-based)
 */
export function tabset(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  source: StringRegisterRef,
  rowReg: IntRegisterRef,
  colReg: IntRegisterRef
): void {
  if (!context.currentTable) {
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const row = getIntValue(registers, rowReg);
  const col = getIntValue(registers, colReg);
  const value = getStringValue(registers, source);

  // Row 0 is first data row (values[1] since values[0] is headers)
  const dataRowIndex = row + 1;

  if (
    row < 0 ||
    dataRowIndex >= table.values.length ||
    col < 0 ||
    col >= table.columns
  ) {
    flags.z = true;
    flags.c = true;
    return;
  }

  table.values[dataRowIndex][col] = value;
  flags.z = false;
  flags.c = false;
}

/**
 * TABROWS/TABLEN - Get number of data rows in table.
 *
 * Returns the number of data rows (excluding the header row).
 *
 * @param registers - Register set
 * @param flags - CPU flags
 * @param context - Table context
 * @param destination - Destination integer register
 *
 * @example
 * ```ts
 * // Table has 5 data rows
 * tabrows(registers, flags, ctx, { kind: "I", index: 0 });
 * // I0 = 5
 * ```
 */
export function tabrows(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: IntRegisterRef
): void {
  if (!context.currentTable) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    return;
  }

  const rows = context.currentTable.rows;
  setIntValue(registers, destination, rows);
  flags.z = rows === 0;
}

/**
 * TABCOLS - Get number of columns in table.
 *
 * @param registers - Register set
 * @param flags - CPU flags
 * @param context - Table context
 * @param destination - Destination integer register
 *
 * @example
 * ```ts
 * // Table has 3 columns
 * tabcols(registers, flags, ctx, { kind: "I", index: 0 });
 * // I0 = 3
 * ```
 */
export function tabcols(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: IntRegisterRef
): void {
  if (!context.currentTable) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    return;
  }

  const cols = context.currentTable.columns;
  setIntValue(registers, destination, cols);
  flags.z = cols === 0;
}

/**
 * TABFIND/TABSEEK - Find value in table column.
 *
 * Searches for a value in the specified column and returns the row index.
 * Returns -1 if not found.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if not found)
 * @param context - Table context (currentRow is updated on match)
 * @param destination - Destination integer register (receives row index or -1)
 * @param valueReg - S register containing value to search for
 * @param colReg - Column index register to search in
 * @param startRowReg - Optional start row for search
 *
 * @example
 * ```ts
 * // Search for "BMW" in column 0
 * // S0 = "BMW", I0 = 0
 * tabfind(registers, flags, ctx, { kind: "I", index: 1 },
 *         { kind: "S", index: 0 }, { kind: "I", index: 0 });
 * // I1 = row index where "BMW" was found, or -1
 * ```
 */
export function tabfind(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: IntRegisterRef,
  valueReg: StringRegisterRef,
  colReg: IntRegisterRef,
  startRowReg?: IntRegisterRef
): void {
  if (!context.currentTable) {
    setIntValue(registers, destination, -1);
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const searchValue = getStringValue(registers, valueReg);
  const col = getIntValue(registers, colReg);
  const startRow = startRowReg ? getIntValue(registers, startRowReg) : 0;

  if (col < 0 || col >= table.columns) {
    setIntValue(registers, destination, -1);
    flags.z = true;
    flags.c = true;
    return;
  }

  // Search through data rows (starting from values[1])
  for (let i = startRow; i < table.rows; i++) {
    const dataRowIndex = i + 1; // Skip header row
    if (dataRowIndex < table.values.length) {
      const cellValue = table.values[dataRowIndex][col] ?? "";
      if (cellValue === searchValue) {
        setIntValue(registers, destination, i);
        context.currentRow = i;
        flags.z = false;
        flags.c = false;
        return;
      }
    }
  }

  // Not found
  setIntValue(registers, destination, -1);
  flags.z = true;
  flags.c = true;
}

/**
 * TABSEEKU - Find value in table column (case-insensitive).
 *
 * Like TABFIND but performs case-insensitive comparison.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if not found)
 * @param context - Table context (currentRow is updated on match)
 * @param destination - Destination integer register
 * @param valueReg - S register containing value to search for
 * @param colReg - Column index register to search in
 * @param startRowReg - Optional start row for search
 */
export function tabseeku(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: IntRegisterRef,
  valueReg: StringRegisterRef,
  colReg: IntRegisterRef,
  startRowReg?: IntRegisterRef
): void {
  if (!context.currentTable) {
    setIntValue(registers, destination, -1);
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const searchValue = getStringValue(registers, valueReg).toUpperCase();
  const col = getIntValue(registers, colReg);
  const startRow = startRowReg ? getIntValue(registers, startRowReg) : 0;

  if (col < 0 || col >= table.columns) {
    setIntValue(registers, destination, -1);
    flags.z = true;
    flags.c = true;
    return;
  }

  // Search through data rows (starting from values[1])
  for (let i = startRow; i < table.rows; i++) {
    const dataRowIndex = i + 1; // Skip header row
    if (dataRowIndex < table.values.length) {
      const cellValue = (table.values[dataRowIndex][col] ?? "").toUpperCase();
      if (cellValue === searchValue) {
        setIntValue(registers, destination, i);
        context.currentRow = i;
        flags.z = false;
        flags.c = false;
        return;
      }
    }
  }

  // Not found
  setIntValue(registers, destination, -1);
  flags.z = true;
  flags.c = true;
}

/**
 * TABLINE - Get entire row as a delimited string.
 *
 * Returns all values in a row joined by a delimiter.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if out of bounds)
 * @param context - Table context
 * @param destination - Destination S register
 * @param rowReg - Row index register (0-based, data rows)
 * @param delimiterReg - Optional S register containing delimiter (default: tab)
 *
 * @example
 * ```ts
 * // Row 0 has ["A", "B", "C"]
 * // I0 = 0
 * tabline(registers, flags, ctx, { kind: "S", index: 0 }, { kind: "I", index: 0 });
 * // S0 = "A\tB\tC"
 * ```
 */
export function tabline(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: StringRegisterRef,
  rowReg: IntRegisterRef,
  delimiterReg?: StringRegisterRef
): void {
  if (!context.currentTable) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const row = getIntValue(registers, rowReg);
  const delimiter = delimiterReg ? getStringValue(registers, delimiterReg) : "\t";

  // Row 0 is first data row (values[1] since values[0] is headers)
  const dataRowIndex = row + 1;

  if (row < 0 || dataRowIndex >= table.values.length) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const rowData = table.values[dataRowIndex];
  const line = rowData.join(delimiter);
  setStringValue(registers, destination, line);
  flags.z = false;
  flags.c = false;
}

/**
 * TABSELECT - Select a table by name.
 *
 * Sets the current table in the context.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set if table not found)
 * @param context - Table context (currentTable is updated)
 * @param tableNameReg - S register containing table name
 *
 * @example
 * ```ts
 * // S0 = "ECU_DATA"
 * tabselect(registers, flags, ctx, { kind: "S", index: 0 });
 * // ctx.currentTable is now the ECU_DATA table
 * ```
 */
export function tabselect(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  tableNameReg: StringRegisterRef
): void {
  const tableName = getStringValue(registers, tableNameReg).toUpperCase();
  const table = context.tables.get(tableName);

  if (table) {
    context.currentTable = table;
    context.currentRow = 0;
    flags.z = false;
    flags.c = false;
  } else {
    context.currentTable = undefined;
    context.currentRow = undefined;
    flags.z = true;
    flags.c = true;
  }
}

/**
 * TABGETNEXT - Get next row after seek.
 *
 * Gets a value from the row after the last seek operation.
 *
 * @param registers - Register set
 * @param flags - CPU flags
 * @param context - Table context
 * @param destination - Destination S register
 * @param colReg - Column index register
 */
export function tabgetnext(
  registers: RegisterSet,
  flags: Flags,
  context: TableContext,
  destination: StringRegisterRef,
  colReg: IntRegisterRef
): void {
  if (
    !context.currentTable ||
    context.currentRow === undefined ||
    context.currentRow < 0
  ) {
    setStringValue(registers, destination, "");
    flags.z = true;
    flags.c = true;
    return;
  }

  const table = context.currentTable;
  const col = getIntValue(registers, colReg);
  const row = context.currentRow;

  // Row is 0-based data row, so actual index is row + 1
  const dataRowIndex = row + 1;

  if (
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

/**
 * Create a TableContext from an array of tables.
 *
 * @param tables - Array of BestTable objects
 * @returns TableContext ready for use
 */
export function createTableContext(tables: BestTable[]): TableContext {
  const tableMap = new Map<string, BestTable>();

  for (const table of tables) {
    tableMap.set(table.name.toUpperCase(), table);
  }

  return {
    tables: tableMap,
    currentTable: undefined,
    currentRow: undefined,
  };
}

/**
 * Select the first table as current (convenience function).
 *
 * @param context - Table context
 * @returns true if a table was selected
 */
export function selectFirstTable(context: TableContext): boolean {
  const firstTable = context.tables.values().next().value;
  if (firstTable) {
    context.currentTable = firstTable;
    context.currentRow = 0;
    return true;
  }
  return false;
}

// Aliases for EdiabasLib compatibility
/**
 * TABLEN - Get number of rows (alias for TABROWS).
 */
export const tablen = tabrows;

/**
 * TABSEEK - Find value in table (alias for TABFIND).
 */
export const tabseek = tabfind;
