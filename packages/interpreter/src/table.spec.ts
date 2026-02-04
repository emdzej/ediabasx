import { describe, it, expect, beforeEach } from "vitest";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import {
  type Table,
  type TableContext,
  tabget,
  tabgetHeader,
  tabset,
  tabrows,
  tabcols,
  tabfind,
  tabseeku,
  tabline,
  tabselect,
  tabgetnext,
  createTableContext,
  selectFirstTable,
  tablen,
  tabseek,
} from "./operations/table";

describe("Table Operations", () => {
  let registers: RegisterSet;
  let flags: Flags;
  let context: TableContext;

  // Sample table with headers and data - template
  const createSampleTable = (): Table => ({
    name: "TEST_TABLE",
    columns: 3,
    rows: 3,
    columnOffset: 0,
    values: [
      ["ID", "Name", "Value"], // Header row
      ["1", "Alpha", "100"], // Data row 0
      ["2", "Beta", "200"], // Data row 1
      ["3", "Gamma", "300"], // Data row 2
    ],
  });

  const createEcuTable = (): Table => ({
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

  let sampleTable: Table;
  let ecuTable: Table;

  beforeEach(() => {
    registers = new RegisterSet();
    flags = new Flags();
    sampleTable = createSampleTable();
    ecuTable = createEcuTable();
    context = createTableContext([sampleTable, ecuTable]);
    context.currentTable = sampleTable;
    context.currentRow = 0;
  });

  describe("createTableContext", () => {
    it("should create context from table array", () => {
      const ctx = createTableContext([sampleTable]);
      expect(ctx.tables.size).toBe(1);
      expect(ctx.tables.has("TEST_TABLE")).toBe(true);
    });

    it("should use uppercase table names", () => {
      const table = { ...sampleTable, name: "lower_case" };
      const ctx = createTableContext([table]);
      expect(ctx.tables.has("LOWER_CASE")).toBe(true);
    });

    it("should create empty context with no tables", () => {
      const ctx = createTableContext([]);
      expect(ctx.tables.size).toBe(0);
    });
  });

  describe("selectFirstTable", () => {
    it("should select first table", () => {
      const ctx = createTableContext([sampleTable, ecuTable]);
      const result = selectFirstTable(ctx);
      expect(result).toBe(true);
      expect(ctx.currentTable).toBeDefined();
    });

    it("should return false when no tables", () => {
      const ctx = createTableContext([]);
      const result = selectFirstTable(ctx);
      expect(result).toBe(false);
    });
  });

  describe("TABGET (Get Cell Value)", () => {
    it("should get value at row 0, col 0", () => {
      registers.setI(0, 0); // row
      registers.setI(1, 0); // col
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("1");
      expect(flags.z).toBe(false);
    });

    it("should get value at row 1, col 1", () => {
      registers.setI(0, 1); // row
      registers.setI(1, 1); // col
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("Beta");
    });

    it("should get value at last row", () => {
      registers.setI(0, 2); // row
      registers.setI(1, 2); // col
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("300");
    });

    it("should return empty and set Z flag for out of bounds row", () => {
      registers.setI(0, 10); // row (out of bounds)
      registers.setI(1, 0); // col
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("");
      expect(flags.z).toBe(true);
      expect(flags.c).toBe(true);
    });

    it("should return empty for out of bounds column", () => {
      registers.setI(0, 0); // row
      registers.setI(1, 10); // col (out of bounds)
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("");
      expect(flags.z).toBe(true);
    });

    it("should return empty when no current table", () => {
      context.currentTable = undefined;
      registers.setI(0, 0);
      registers.setI(1, 0);
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("");
      expect(flags.z).toBe(true);
    });
  });

  describe("TABGET_HEADER (Get Column Header)", () => {
    it("should get first header", () => {
      registers.setI(0, 0);
      tabgetHeader(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("ID");
    });

    it("should get second header", () => {
      registers.setI(0, 1);
      tabgetHeader(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("Name");
    });

    it("should get last header", () => {
      registers.setI(0, 2);
      tabgetHeader(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("Value");
    });

    it("should return empty for out of bounds", () => {
      registers.setI(0, 10);
      tabgetHeader(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("");
      expect(flags.z).toBe(true);
    });
  });

  describe("TABSET (Set Cell Value)", () => {
    it("should set value at specified position", () => {
      registers.setS(0, "Modified");
      registers.setI(0, 0); // row
      registers.setI(1, 1); // col
      tabset(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(context.currentTable!.values[1][1]).toBe("Modified");
      expect(flags.z).toBe(false);
    });

    it("should fail for out of bounds", () => {
      registers.setS(0, "Modified");
      registers.setI(0, 10); // row
      registers.setI(1, 0); // col
      tabset(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(flags.z).toBe(true);
      expect(flags.c).toBe(true);
    });

    it("should fail when no current table", () => {
      context.currentTable = undefined;
      registers.setS(0, "Modified");
      registers.setI(0, 0);
      registers.setI(1, 0);
      tabset(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(flags.z).toBe(true);
    });
  });

  describe("TABROWS/TABLEN (Get Row Count)", () => {
    it("should return number of data rows", () => {
      tabrows(registers, flags, context, { kind: "I", index: 0 });
      expect(registers.getI(0)).toBe(3);
      expect(flags.z).toBe(false);
    });

    it("should return 0 when no current table", () => {
      context.currentTable = undefined;
      tabrows(registers, flags, context, { kind: "I", index: 0 });
      expect(registers.getI(0)).toBe(0);
      expect(flags.z).toBe(true);
    });

    it("should work with L register", () => {
      tabrows(registers, flags, context, { kind: "L", index: 0 });
      expect(registers.getL(0)).toBe(3);
    });

    it("should support TABLEN alias", () => {
      tablen(registers, flags, context, { kind: "I", index: 0 });
      expect(registers.getI(0)).toBe(3);
    });
  });

  describe("TABCOLS (Get Column Count)", () => {
    it("should return number of columns", () => {
      tabcols(registers, flags, context, { kind: "I", index: 0 });
      expect(registers.getI(0)).toBe(3);
      expect(flags.z).toBe(false);
    });

    it("should return 0 when no current table", () => {
      context.currentTable = undefined;
      tabcols(registers, flags, context, { kind: "I", index: 0 });
      expect(registers.getI(0)).toBe(0);
      expect(flags.z).toBe(true);
    });
  });

  describe("TABFIND/TABSEEK (Find Value in Column)", () => {
    it("should find value in first column", () => {
      registers.setS(0, "2");
      registers.setI(0, 0); // column
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(1);
      expect(flags.z).toBe(false);
    });

    it("should find value in second column", () => {
      registers.setS(0, "Gamma");
      registers.setI(0, 1); // column
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(2);
    });

    it("should return -1 when not found", () => {
      registers.setS(0, "NotFound");
      registers.setI(0, 1); // column
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(65535); // -1 as unsigned 16-bit
      expect(flags.z).toBe(true);
    });

    it("should start from specified row", () => {
      registers.setS(0, "1");
      registers.setI(0, 0); // column
      registers.setI(1, 1); // start row
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 2 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      // Should not find "1" because we start from row 1
      expect(registers.getI(2)).toBe(65535);
    });

    it("should update currentRow on match", () => {
      registers.setS(0, "Beta");
      registers.setI(0, 1); // column
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(context.currentRow).toBe(1);
    });

    it("should support TABSEEK alias", () => {
      registers.setS(0, "Alpha");
      registers.setI(0, 1);
      tabseek(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(0);
    });

    it("should fail when no current table", () => {
      context.currentTable = undefined;
      registers.setS(0, "Test");
      registers.setI(0, 0);
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(flags.z).toBe(true);
    });
  });

  describe("TABSEEKU (Case-Insensitive Find)", () => {
    it("should find case-insensitively", () => {
      registers.setS(0, "alpha");
      registers.setI(0, 1); // column
      tabseeku(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(0);
      expect(flags.z).toBe(false);
    });

    it("should find UPPERCASE when searching lowercase", () => {
      registers.setS(0, "BETA");
      registers.setI(0, 1); // column
      tabseeku(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(1);
    });

    it("should return -1 when not found", () => {
      registers.setS(0, "notfound");
      registers.setI(0, 1);
      tabseeku(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(flags.z).toBe(true);
    });
  });

  describe("TABLINE (Get Row as String)", () => {
    it("should get row with default delimiter", () => {
      registers.setI(0, 0);
      tabline(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("1\tAlpha\t100");
      expect(flags.z).toBe(false);
    });

    it("should get row with custom delimiter", () => {
      registers.setI(0, 1);
      registers.setS(1, ",");
      tabline(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "S", index: 1 }
      );
      expect(registers.getS(0)).toBe("2,Beta,200");
    });

    it("should return empty for out of bounds", () => {
      registers.setI(0, 10);
      tabline(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("");
      expect(flags.z).toBe(true);
    });

    it("should get last row", () => {
      registers.setI(0, 2);
      tabline(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("3\tGamma\t300");
    });
  });

  describe("TABSELECT (Select Table by Name)", () => {
    it("should select table by name", () => {
      context.currentTable = undefined;
      registers.setS(0, "ECU_DATA");
      tabselect(registers, flags, context, { kind: "S", index: 0 });
      expect(context.currentTable?.name).toBe("ECU_DATA");
      expect(flags.z).toBe(false);
    });

    it("should be case-insensitive", () => {
      registers.setS(0, "ecu_data");
      tabselect(registers, flags, context, { kind: "S", index: 0 });
      expect(context.currentTable?.name).toBe("ECU_DATA");
    });

    it("should set Z flag when table not found", () => {
      registers.setS(0, "NONEXISTENT");
      tabselect(registers, flags, context, { kind: "S", index: 0 });
      expect(context.currentTable).toBeUndefined();
      expect(flags.z).toBe(true);
    });

    it("should reset currentRow on selection", () => {
      context.currentRow = 5;
      registers.setS(0, "ECU_DATA");
      tabselect(registers, flags, context, { kind: "S", index: 0 });
      expect(context.currentRow).toBe(0);
    });
  });

  describe("TABGETNEXT (Get Value After Seek)", () => {
    it("should get value from current row", () => {
      context.currentRow = 1;
      registers.setI(0, 1); // column
      tabgetnext(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("Beta");
      expect(flags.z).toBe(false);
    });

    it("should fail when no current row", () => {
      context.currentRow = undefined;
      registers.setI(0, 0);
      tabgetnext(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("");
      expect(flags.z).toBe(true);
    });

    it("should fail when currentRow is negative", () => {
      context.currentRow = -1;
      registers.setI(0, 0);
      tabgetnext(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(flags.z).toBe(true);
    });
  });

  describe("Multiple tables workflow", () => {
    it("should switch between tables", () => {
      // Start with TEST_TABLE
      registers.setI(0, 0);
      registers.setI(1, 1);
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("Alpha");

      // Switch to ECU_DATA
      registers.setS(1, "ECU_DATA");
      tabselect(registers, flags, context, { kind: "S", index: 1 });

      // Get value from ECU_DATA
      registers.setI(0, 0);
      registers.setI(1, 0);
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(0)).toBe("E01");
    });

    it("should find and get in workflow", () => {
      // Find "Beta" in column 1
      registers.setS(0, "Beta");
      registers.setI(0, 1);
      tabfind(
        registers,
        flags,
        context,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getI(1)).toBe(1);

      // Get corresponding Value (column 2)
      registers.setI(2, 2);
      tabgetnext(
        registers,
        flags,
        context,
        { kind: "S", index: 1 },
        { kind: "I", index: 2 }
      );
      expect(registers.getS(1)).toBe("200");
    });
  });

  describe("Empty table handling", () => {
    it("should handle table with no data rows", () => {
      const emptyTable: Table = {
        name: "EMPTY",
        columns: 2,
        rows: 0,
        columnOffset: 0,
        values: [["Col1", "Col2"]], // Only headers
      };
      const ctx = createTableContext([emptyTable]);
      ctx.currentTable = emptyTable;

      tabrows(registers, flags, ctx, { kind: "I", index: 0 });
      expect(registers.getI(0)).toBe(0);
      expect(flags.z).toBe(true);
    });

    it("should handle find in empty table", () => {
      const emptyTable: Table = {
        name: "EMPTY",
        columns: 2,
        rows: 0,
        columnOffset: 0,
        values: [["Col1", "Col2"]],
      };
      const ctx = createTableContext([emptyTable]);
      ctx.currentTable = emptyTable;

      registers.setS(0, "test");
      registers.setI(0, 0);
      tabfind(
        registers,
        flags,
        ctx,
        { kind: "I", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(flags.z).toBe(true);
    });
  });

  describe("Boundary conditions", () => {
    it("should handle negative row index", () => {
      registers.setI(0, 0xFFFF); // -1 as unsigned
      registers.setI(1, 0);
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(flags.z).toBe(true);
    });

    it("should handle negative column index", () => {
      registers.setI(0, 0);
      registers.setI(1, 0xFFFF); // -1 as unsigned
      tabget(
        registers,
        flags,
        context,
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(flags.z).toBe(true);
    });
  });
});
