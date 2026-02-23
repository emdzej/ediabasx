import { describe, expect, it } from "vitest";
import { utf8ToCp1252 } from "@emdzej/ediabasx-core";
import * as fs from "node:fs";
import * as path from "node:path";
import { parsePrg } from "../parser";

function writeUint32LE(view: DataView, offset: number, value: number): void {
  view.setUint32(offset, value, true);
}

function writeUint16LE(view: DataView, offset: number, value: number): void {
  view.setUint16(offset, value, true);
}

describe("parsePrg", () => {
  it("parses a minimal PRG file", () => {
    const magic = 0x00475250;
    const version = 1;

    const strings = ["JOB1", "JOB2"];
    const stringTableBytes = Uint8Array.from(
      strings.flatMap((value) => Array.from(utf8ToCp1252(`${value}\0`)))
    );

    const headerSize = 32;
    const stringTableOffset = headerSize;
    const stringTableSize = stringTableBytes.length;

    const jobTableOffset = stringTableOffset + stringTableSize;
    const jobCount = 2;
    const jobEntrySize = 12;

    const codeOffset = jobTableOffset + jobCount * jobEntrySize;
    const codeBytes = Uint8Array.from([0x01, 0x02, 0x03]);
    const codeSize = codeBytes.length;

    const totalSize = codeOffset + codeSize;
    const buffer = new Uint8Array(totalSize);
    const view = new DataView(buffer.buffer);

    writeUint32LE(view, 0, magic);
    writeUint32LE(view, 4, version);
    writeUint32LE(view, 8, stringTableOffset);
    writeUint32LE(view, 12, stringTableSize);
    writeUint32LE(view, 16, jobTableOffset);
    writeUint32LE(view, 20, jobCount);
    writeUint32LE(view, 24, codeOffset);
    writeUint32LE(view, 28, codeSize);

    buffer.set(stringTableBytes, stringTableOffset);

    let jobOffset = jobTableOffset;
    writeUint32LE(view, jobOffset, 0);
    writeUint32LE(view, jobOffset + 4, 0x10);
    writeUint16LE(view, jobOffset + 8, 1);
    writeUint16LE(view, jobOffset + 10, 2);

    jobOffset += jobEntrySize;
    writeUint32LE(view, jobOffset, strings[0].length + 1);
    writeUint32LE(view, jobOffset + 4, 0x20);
    writeUint16LE(view, jobOffset + 8, 0);
    writeUint16LE(view, jobOffset + 10, 1);

    buffer.set(codeBytes, codeOffset);

    const result = parsePrg(buffer);

    expect(result.header).toEqual({
      magic,
      version,
      stringTableOffset,
      stringTableEnd: stringTableOffset + stringTableSize,
      jobTableOffset,
      jobTableEnd: jobTableOffset + jobCount * jobEntrySize,
      codeOffset,
      codeEnd: codeOffset + codeSize,
      nameTableOffset: 0,
      nameTableEnd: 0,
      dataOffset: 0,
    });

    expect(result.strings).toEqual(strings);
    expect(result.jobs).toEqual([
      { name: "JOB1", offset: 0x10, argCount: 1, resultCount: 2, args: [], results: [] },
      { name: "JOB2", offset: 0x20, argCount: 0, resultCount: 1, args: [], results: [] },
    ]);
    expect(result.metadata).toEqual({});
    expect(result.rawContent).toBe("");
    expect(result.binaryJobs).toEqual([]);
    expect(result.tables).toEqual([]);
    expect(Array.from(result.code)).toEqual(Array.from(codeBytes));
  });

  describe("real PRG files", () => {
    const testDataDir = path.join(__dirname, "../../../..", "test-data");
    
    it("parses d_motor.prg with binary jobs", () => {
      const filePath = path.join(testDataDir, "d_motor.prg");
      if (!fs.existsSync(filePath)) {
        console.log("Skipping test: d_motor.prg not found");
        return;
      }
      
      const buffer = fs.readFileSync(filePath);
      const result = parsePrg(new Uint8Array(buffer));
      
      // Should have binary jobs
      expect(result.binaryJobs.length).toBe(10);
      expect(result.binaryJobs[0].name).toBe("INFO");
      expect(result.binaryJobs[0].offset).toBe(0xa0);
      expect(result.binaryJobs[1].name).toBe("INITIALISIERUNG");
      
      // d_motor has no tables
      expect(result.tables.length).toBe(0);
      
      // Text jobs should also be parsed
      expect(result.jobs.length).toBeGreaterThan(0);
      expect(result.jobs[0].name).toBe("INFO");
    });
    
    it("parses allgemeine.prg with tables", () => {
      const filePath = path.join(testDataDir, "allgemeine.prg");
      if (!fs.existsSync(filePath)) {
        console.log("Skipping test: allgemeine.prg not found");
        return;
      }
      
      const buffer = fs.readFileSync(filePath);
      const result = parsePrg(new Uint8Array(buffer));
      
      // Should have binary jobs
      expect(result.binaryJobs.length).toBe(230);
      expect(result.binaryJobs[0].name).toBe("INFO");
      
      // Should have 14 tables
      expect(result.tables.length).toBe(14);
      
      // Check first table (FORTTEXTE)
      const forttexte = result.tables.find(t => t.name === "FORTTEXTE");
      expect(forttexte).toBeDefined();
      expect(forttexte!.columns).toBe(6);
      expect(forttexte!.rows).toBe(170);
      
      // Check table has data
      expect(forttexte!.values.length).toBeGreaterThan(0);
      // First row should be headers
      expect(forttexte!.values[0]).toContain("ORT");
    });
  });
});
