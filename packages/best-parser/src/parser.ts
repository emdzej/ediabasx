import { cp1252ToUtf8, xorDecrypt } from "@ediabas/core";
import { BinaryReader } from "./reader";
import type { PrgArg, PrgBinaryJob, PrgFile, PrgHeader, PrgJob, PrgMetadata, PrgResult, PrgTable } from "./types";

const LEGACY_MAGIC = 0x00475250; // "PRG\0" little-endian
const EDIABAS_MAGIC = "@EDIABAS OBJECT";
const EDIABAS_DATA_OFFSET = 0xa0;
const EDIABAS_XOR_KEY = new Uint8Array([0xf7]);

// Header offsets for binary PRG
const OFFSET_TABLE = 0x84;
const OFFSET_JOB = 0x88;

// Entry sizes
const JOB_ENTRY_SIZE = 0x44; // 68 bytes: 64 name + 4 offset
const TABLE_ENTRY_SIZE = 0x50; // 80 bytes: 64 name + metadata

/**
 * Parse legacy PRG format (if encountered)
 */
function readLegacyHeader(reader: BinaryReader): PrgHeader {
  const magic = reader.readUint32LE();
  const version = reader.readUint32LE();
  const stringTableOffset = reader.readUint32LE();
  const stringTableSize = reader.readUint32LE();
  const jobTableOffset = reader.readUint32LE();
  const jobCount = reader.readUint32LE();
  const codeOffset = reader.readUint32LE();
  const codeSize = reader.readUint32LE();

  return {
    magic,
    version,
    stringTableOffset,
    stringTableEnd: stringTableOffset + stringTableSize,
    jobTableOffset,
    jobTableEnd: jobTableOffset + jobCount * 12,
    codeOffset,
    codeEnd: codeOffset + codeSize,
    nameTableOffset: 0,
    nameTableEnd: 0,
    dataOffset: 0,
  };
}

/**
 * Parse EDIABAS OBJECT header
 */
function readEdiabasHeader(buffer: Uint8Array): PrgHeader {
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  const magicBytes = buffer.slice(0, 16);
  const magic = cp1252ToUtf8(magicBytes).replace(/\0/g, "");
  const version = view.getUint32(0x10, true);

  return {
    magic,
    version,
    stringTableOffset: EDIABAS_DATA_OFFSET,
    stringTableEnd: buffer.length,
    jobTableOffset: 0,
    jobTableEnd: 0,
    codeOffset: 0,
    codeEnd: 0,
    nameTableOffset: 0,
    nameTableEnd: 0,
    dataOffset: EDIABAS_DATA_OFFSET,
  };
}

/**
 * XOR decode the data section (from 0xA0 onwards)
 */
function decodeEdiabasData(buffer: Uint8Array): Uint8Array {
  if (buffer.length <= EDIABAS_DATA_OFFSET) {
    return buffer;
  }

  const decoded = new Uint8Array(buffer.length);
  decoded.set(buffer.slice(0, EDIABAS_DATA_OFFSET));
  
  const encoded = buffer.slice(EDIABAS_DATA_OFFSET);
  const decrypted = xorDecrypt(encoded, EDIABAS_XOR_KEY);
  decoded.set(decrypted, EDIABAS_DATA_OFFSET);
  
  return decoded;
}

/**
 * XOR decode a single uint32 at given offset (for data after 0xA0)
 */
function xorDecodeUint32(buffer: Uint8Array, offset: number): number {
  if (offset < EDIABAS_DATA_OFFSET) {
    // Not encoded
    return new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getUint32(offset, true);
  }
  const b0 = buffer[offset] ^ 0xf7;
  const b1 = buffer[offset + 1] ^ 0xf7;
  const b2 = buffer[offset + 2] ^ 0xf7;
  const b3 = buffer[offset + 3] ^ 0xf7;
  return (b0 | (b1 << 8) | (b2 << 16) | (b3 << 24)) >>> 0;
}

/**
 * XOR decode a string at given offset (null-terminated, for data after 0xA0)
 */
function xorDecodeString(buffer: Uint8Array, offset: number, maxLen: number): string {
  const bytes: number[] = [];
  for (let i = 0; i < maxLen; i++) {
    const b = offset + i >= EDIABAS_DATA_OFFSET 
      ? buffer[offset + i] ^ 0xf7 
      : buffer[offset + i];
    if (b === 0) break;
    bytes.push(b);
  }
  return cp1252ToUtf8(new Uint8Array(bytes));
}

/**
 * Read a null-terminated string from XOR-decoded data
 */
function readXorString(buffer: Uint8Array, offset: number): string {
  const bytes: number[] = [];
  let i = offset;
  while (i < buffer.length) {
    const b = i >= EDIABAS_DATA_OFFSET ? buffer[i] ^ 0xf7 : buffer[i];
    if (b === 0) break;
    bytes.push(b);
    i++;
  }
  return cp1252ToUtf8(new Uint8Array(bytes));
}

/**
 * Parse binary job entries from compiled PRG
 * Job list is at offset stored at 0x88, each entry is 0x44 bytes
 * NOTE: jobCount is NOT XOR encoded, but job entries ARE
 */
function parseBinaryJobs(buffer: Uint8Array): PrgBinaryJob[] {
  if (buffer.length < OFFSET_JOB + 4) return [];
  
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  const jobListOffset = view.getUint32(OFFSET_JOB, true);
  
  if (jobListOffset <= 0 || jobListOffset >= buffer.length - 4) return [];
  
  // Job count is NOT XOR encoded (it's the count itself)
  const jobCount = view.getInt32(jobListOffset, true);
  
  if (jobCount <= 0 || jobCount > 1000) return [];
  
  const jobs: PrgBinaryJob[] = [];
  const entriesStart = jobListOffset + 4;
  
  for (let i = 0; i < jobCount; i++) {
    const entryOffset = entriesStart + i * JOB_ENTRY_SIZE;
    if (entryOffset + JOB_ENTRY_SIZE > buffer.length) break;
    
    const name = xorDecodeString(buffer, entryOffset, 64);
    const bytecodeOffset = xorDecodeUint32(buffer, entryOffset + 0x40);
    
    jobs.push({ name, offset: bytecodeOffset });
  }
  
  return jobs;
}

/**
 * Parse binary table entries from compiled PRG
 * Table list is at offset stored at 0x84, each entry is 0x50 bytes
 * NOTE: tableCount encoding is inconsistent - try both raw and XOR decoded
 */
function parseBinaryTables(buffer: Uint8Array): PrgTable[] {
  if (buffer.length < OFFSET_TABLE + 4) return [];
  
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  const tableListOffset = view.getUint32(OFFSET_TABLE, true);
  
  if (tableListOffset <= 0 || tableListOffset >= buffer.length - 4) return [];
  
  // Table count encoding is inconsistent across files
  // Try raw first, if invalid try XOR decoded
  let tableCount = view.getInt32(tableListOffset, true);
  if (tableCount <= 0 || tableCount > 1000) {
    // Try XOR decoded
    tableCount = xorDecodeUint32(buffer, tableListOffset);
  }
  
  if (tableCount <= 0 || tableCount > 1000) return [];
  
  const tables: PrgTable[] = [];
  const entriesStart = tableListOffset + 4;
  
  for (let i = 0; i < tableCount; i++) {
    const entryOffset = entriesStart + i * TABLE_ENTRY_SIZE;
    if (entryOffset + TABLE_ENTRY_SIZE > buffer.length) break;
    
    const name = xorDecodeString(buffer, entryOffset, 64);
    const columnOffset = xorDecodeUint32(buffer, entryOffset + 0x40);
    const columns = xorDecodeUint32(buffer, entryOffset + 0x48);
    const rows = xorDecodeUint32(buffer, entryOffset + 0x4c);
    
    // Parse table data (headers + rows)
    const values = parseTableData(buffer, columnOffset, columns, rows);
    
    tables.push({ name, columns, rows, columnOffset, values });
  }
  
  return tables;
}

/**
 * Parse table data: headers (row 0) + data rows
 * Each cell is a null-terminated XOR-encoded string
 */
function parseTableData(
  buffer: Uint8Array, 
  startOffset: number, 
  columns: number, 
  rows: number
): string[][] {
  const values: string[][] = [];
  let offset = startOffset;
  
  // Total rows = header row (1) + data rows
  const totalRows = rows + 1;
  
  for (let row = 0; row < totalRows; row++) {
    const rowData: string[] = [];
    for (let col = 0; col < columns; col++) {
      if (offset >= buffer.length) break;
      
      // Read null-terminated string
      const str = readXorString(buffer, offset);
      rowData.push(str);
      
      // Move past the string + null terminator
      // Find actual length by scanning
      let len = 0;
      while (offset + len < buffer.length) {
        const b = offset + len >= EDIABAS_DATA_OFFSET 
          ? buffer[offset + len] ^ 0xf7 
          : buffer[offset + len];
        len++;
        if (b === 0) break;
      }
      offset += len;
    }
    if (rowData.length > 0) {
      values.push(rowData);
    }
  }
  
  return values;
}

/**
 * Parse file metadata from text content
 */
function parseMetadata(text: string): PrgMetadata {
  const metadata: PrgMetadata = {};
  
  // ECU: line (first ECU: is the main one)
  const ecuMatch = text.match(/^ECU:(.*)$/m);
  if (ecuMatch) {
    metadata.ecu = ecuMatch[1].trim();
  }
  
  // ORIGIN:
  const originMatch = text.match(/^ORIGIN:(.*)$/m);
  if (originMatch) {
    metadata.origin = originMatch[1].trim();
  }
  
  // REVISION:
  const revisionMatch = text.match(/^REVISION:(.*)$/m);
  if (revisionMatch) {
    metadata.revision = revisionMatch[1].trim();
  }
  
  // AUTHOR:
  const authorMatch = text.match(/^AUTHOR:(.*)$/m);
  if (authorMatch) {
    metadata.author = authorMatch[1].trim();
  }
  
  // ECUCOMMENT:
  const ecuCommentMatch = text.match(/^ECUCOMMENT:(.*)$/m);
  if (ecuCommentMatch) {
    metadata.ecuComment = ecuCommentMatch[1].trim();
  }
  
  return metadata;
}

/**
 * Parse full job metadata from text content.
 * Format:
 *   JOBNAME:name
 *   JOBCOMMENT:description
 *   RESULT:name
 *   RESULTTYPE:type
 *   RESULTCOMMENT:comment
 *   ARG:name
 *   ARGTYPE:type
 *   ARGCOMMENT:comment
 */
function parseJobsFromText(text: string): PrgJob[] {
  const jobs: PrgJob[] = [];
  const lines = text.split("\n");
  
  let currentJob: PrgJob | null = null;
  let currentResult: Partial<PrgResult> | null = null;
  let currentArg: Partial<PrgArg> | null = null;
  
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    
    switch (key) {
      case "JOBNAME":
        // Save previous job
        if (currentJob) {
          if (currentResult?.name) {
            currentJob.results.push(currentResult as PrgResult);
          }
          if (currentArg?.name) {
            currentJob.args.push(currentArg as PrgArg);
          }
          jobs.push(currentJob);
        }
        // Start new job
        currentJob = {
          name: value,
          offset: 0,
          argCount: 0,
          resultCount: 0,
          args: [],
          results: [],
        };
        currentResult = null;
        currentArg = null;
        break;
        
      case "JOBCOMMENT":
        if (currentJob) {
          currentJob.comment = currentJob.comment 
            ? currentJob.comment + " " + value 
            : value;
        }
        break;
        
      case "RESULT":
        if (currentJob) {
          // Save previous result
          if (currentResult?.name) {
            currentJob.results.push(currentResult as PrgResult);
          }
          currentResult = { name: value };
        }
        break;
        
      case "RESULTTYPE":
        if (currentResult) {
          currentResult.type = value;
        }
        break;
        
      case "RESULTCOMMENT":
        if (currentResult) {
          currentResult.comment = currentResult.comment
            ? currentResult.comment + " " + value
            : value;
        }
        break;
        
      case "ARG":
        if (currentJob) {
          // Save previous arg
          if (currentArg?.name) {
            currentJob.args.push(currentArg as PrgArg);
          }
          currentArg = { name: value };
        }
        break;
        
      case "ARGTYPE":
        if (currentArg) {
          currentArg.type = value;
        }
        break;
        
      case "ARGCOMMENT":
        if (currentArg) {
          currentArg.comment = currentArg.comment
            ? currentArg.comment + " " + value
            : value;
        }
        break;
    }
  }
  
  // Save last job
  if (currentJob) {
    if (currentResult?.name) {
      currentJob.results.push(currentResult as PrgResult);
    }
    if (currentArg?.name) {
      currentJob.args.push(currentArg as PrgArg);
    }
    jobs.push(currentJob);
  }
  
  // Update counts
  for (const job of jobs) {
    job.argCount = job.args.length;
    job.resultCount = job.results.length;
  }
  
  return jobs;
}

/**
 * Parse string table - split by null bytes
 */
function parseStringTable(buffer: Uint8Array, offset: number, end: number): string[] {
  const table = buffer.slice(offset, end);
  const strings: string[] = [];
  let start = 0;

  for (let i = 0; i < table.length; i += 1) {
    if (table[i] === 0x00) {
      if (i > start) {
        strings.push(cp1252ToUtf8(table.slice(start, i)));
      }
      start = i + 1;
    }
  }

  if (start < table.length) {
    strings.push(cp1252ToUtf8(table.slice(start)));
  }

  return strings;
}

/**
 * Legacy format: read null-terminated string from table
 */
function readNullTerminatedString(table: Uint8Array, offset: number): string {
  let end = offset;
  while (end < table.length && table[end] !== 0x00) {
    end += 1;
  }
  return cp1252ToUtf8(table.slice(offset, end));
}

/**
 * Parse legacy job table
 */
function parseLegacyJobs(
  reader: BinaryReader,
  header: PrgHeader,
  stringTable: Uint8Array
): PrgJob[] {
  const jobs: PrgJob[] = [];
  const jobCount = Math.floor((header.jobTableEnd - header.jobTableOffset) / 12);
  reader.position = header.jobTableOffset;

  for (let i = 0; i < jobCount; i += 1) {
    const nameOffset = reader.readUint32LE();
    const offset = reader.readUint32LE();
    const argCount = reader.readUint16LE();
    const resultCount = reader.readUint16LE();

    const name = readNullTerminatedString(stringTable, nameOffset);
    jobs.push({ 
      name, 
      offset, 
      argCount, 
      resultCount,
      args: [],
      results: [],
    });
  }

  return jobs;
}

/**
 * Parse a PRG/GRP file.
 * 
 * EDIABAS files have:
 * - Magic: "@EDIABAS OBJECT\0" (16 bytes)
 * - Version at 0x10 (0 = GRP, 1 = PRG)
 * - XOR-encoded data from 0xA0 onwards (key: 0xF7)
 * - Decoded content is text with JOBNAME:, RESULT:, ARG: etc.
 * - Binary job list at offset 0x88
 * - Binary table list at offset 0x84
 */
export function parsePrg(buffer: Uint8Array): PrgFile {
  const magicText = cp1252ToUtf8(buffer.slice(0, 16)).replace(/\0/g, "");
  const isEdiabas = magicText.startsWith(EDIABAS_MAGIC);

  if (isEdiabas) {
    const decoded = decodeEdiabasData(buffer);
    const header = readEdiabasHeader(decoded);
    
    // The decoded data is text content
    const rawContent = cp1252ToUtf8(decoded.slice(EDIABAS_DATA_OFFSET));
    const metadata = parseMetadata(rawContent);
    const jobs = parseJobsFromText(rawContent);
    
    // Parse binary job entries (for bytecode offsets)
    const binaryJobs = parseBinaryJobs(buffer);
    
    // Parse binary tables
    const tables = parseBinaryTables(buffer);
    
    // No bytecode in this format (yet)
    const code = new Uint8Array(0);

    return { 
      header, 
      metadata,
      rawContent,
      strings: [], 
      jobs, 
      binaryJobs,
      tables,
      code,
    };
  }

  // Legacy binary format
  const reader = new BinaryReader(buffer);
  const header = readLegacyHeader(reader);
  
  if (header.magic !== LEGACY_MAGIC) {
    throw new Error(`Invalid PRG magic: 0x${header.magic.toString(16)}`);
  }

  const strings = parseStringTable(buffer, header.stringTableOffset, header.stringTableEnd);
  const stringTable = buffer.slice(header.stringTableOffset, header.stringTableEnd);
  const jobs = parseLegacyJobs(reader, header, stringTable);
  const code = buffer.slice(header.codeOffset, header.codeEnd);

  return { 
    header, 
    metadata: {},
    rawContent: "",
    strings, 
    jobs, 
    binaryJobs: [],
    tables: [],
    code,
  };
}
