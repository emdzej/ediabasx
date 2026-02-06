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
    state = { activeTable: null, rowIndex: -1 };
  });

  it("tabset selects active table", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(flags, registry, state, registers.getS(0));

    expect(state.activeTable?.name).toBe("TEST_TABLE");
    expect(state.rowIndex).toBe(-1);
    expect(flags.z).toBe(false);
  });

  it("tabset sets flags when table missing", () => {
    registers.setS(0, "MISSING");
    tabset(flags, registry, state, registers.getS(0));

    expect(state.activeTable).toBeNull();
    expect(flags.z).toBe(true);
  });

  it("tabseek updates row index and tabget reads current row", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(flags, registry, state, registers.getS(0));

    tabseek(flags, state, "Name", "Beta");
    tabget(registers, flags, state, { kind: "S", index: 2 }, "ID");

    expect(state.rowIndex).toBe(1);
    expect(registers.getS(2)).toBe("2");
    expect(flags.z).toBe(false);
  });

  it("tabseek sets flags when value not found", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(flags, registry, state, registers.getS(0));

    tabseek(flags, state, "Name", "Missing");

    expect(state.rowIndex).toBe(2);
    expect(flags.z).toBe(true);
  });

  it("tabseeku performs case-insensitive search", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(flags, registry, state, registers.getS(0));

    registers.setI(0, 3);
    tabseeku(flags, state, "ID", 3);

    expect(state.rowIndex).toBe(2);
    expect(flags.z).toBe(false);
  });

  it("tabrows and tabcols use active table", () => {
    registers.setS(0, "ECU_DATA");
    tabset(flags, registry, state, registers.getS(0));

    tabrows(registers, flags, state, { kind: "I", index: 0 });
    tabcols(registers, flags, state, { kind: "I", index: 1 });

    expect(registers.getI(0)).toBe(3);
    expect(registers.getI(1)).toBe(2);
  });

  it("tabline selects a row index", () => {
    registers.setS(0, "TEST_TABLE");
    tabset(flags, registry, state, registers.getS(0));

    tabline(flags, state, 1);
    tabget(registers, flags, state, { kind: "S", index: 2 }, "Name");

    expect(state.rowIndex).toBe(1);
    expect(registers.getS(2)).toBe("Beta");
  });
});
