import { describe, it, expect, beforeEach } from "vitest";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import {
  type TableData,
  type TableState,
  createTableRegistry,
  tabset,
  tabseek,
  tabseeku,
  tabget,
  tabrows,
  tabcols,
  tabline,
} from "./operations/table";

describe("Table Operations", () => {
  let registers: RegisterSet;
  let flags: Flags;
  let registry: ReturnType<typeof createTableRegistry>;
  let state: TableState;

  const createSampleTable = (): TableData => ({
    name: "TEST_TABLE",
    columns: 3,
    rows: 3,
    columnOffset: 0,
    values: [
      ["ID", "Name", "Value"],
      ["1", "Alpha", "100"],
      ["2", "Beta", "200"],
      ["3", "Gamma", "300"],
    ],
  });

  const createEcuTable = (): TableData => ({
    name: "ECU_DATA",
    columns: 2,
    rows: 2,
    columnOffset: 0,
    values: [
      ["Code", "Description"],
      ["E01", "Engine Control"],
      ["E02", "Transmission Control"],
    ],
  });

  beforeEach(() => {
    registers = new RegisterSet();
    flags = new Flags();
    registry = createTableRegistry([createSampleTable(), createEcuTable()]);
    state = { activeTable: null, rowIndex: 0 };
  });

  it("tabset selects active table", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });

    expect(state.activeTable?.name).toBe("TEST_TABLE");
    expect(state.rowIndex).toBe(0);
    expect(flags.z).toBe(false);
  });

  it("tabset sets flags when table missing", () => {
    registers.setS(0, "MISSING");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });

    expect(state.activeTable).toBeNull();
    expect(flags.z).toBe(true);
    expect(flags.c).toBe(true);
  });

  it("tabseek updates row index and tabget reads current row", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });

    registers.setS(1, "Beta");
    registers.setI(0, 1);
    tabseek(registers, flags, state, { kind: "S", index: 1 }, { kind: "I", index: 0 });

    registers.setI(1, 0);
    tabget(registers, flags, state, { kind: "S", index: 2 }, { kind: "I", index: 1 });

    expect(state.rowIndex).toBe(1);
    expect(registers.getS(2)).toBe("2");
    expect(flags.z).toBe(false);
  });

  it("tabseek sets flags when value not found", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });

    registers.setS(1, "Missing");
    registers.setI(0, 0);
    tabseek(registers, flags, state, { kind: "S", index: 1 }, { kind: "I", index: 0 });

    expect(state.rowIndex).toBe(-1);
    expect(flags.z).toBe(true);
    expect(flags.c).toBe(true);
  });

  it("tabseeku performs case-insensitive search", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });

    registers.setS(1, "gamma");
    registers.setI(0, 1);
    tabseeku(registers, flags, state, { kind: "S", index: 1 }, { kind: "I", index: 0 });

    expect(state.rowIndex).toBe(2);
    expect(flags.z).toBe(false);
  });

  it("tabrows and tabcols use active table", () => {
    registers.setS(0, "ECU_DATA");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });

    tabrows(registers, flags, state, { kind: "I", index: 0 });
    tabcols(registers, flags, state, { kind: "I", index: 1 });

    expect(registers.getI(0)).toBe(2);
    expect(registers.getI(1)).toBe(2);
  });

  it("tabline returns current row with delimiter", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(registers, flags, registry, state, { kind: "S", index: 0 });
    state.rowIndex = 0;

    registers.setS(1, "|");
    tabline(registers, flags, state, { kind: "S", index: 2 }, { kind: "S", index: 1 });

    expect(registers.getS(2)).toBe("1|Alpha|100");
  });
});
