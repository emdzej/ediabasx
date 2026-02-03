import { cp1252ToUtf8, xorDecrypt } from "@ediabas/core";
import { BinaryReader } from "./reader";
import type { PrgFile, PrgHeader, PrgJob } from "./types";

const LEGACY_MAGIC = 0x00475250; // "PRG\0" little-endian
const EDIABAS_MAGIC = "@EDIABAS OBJECT";
const EDIABAS_DATA_OFFSET = 0xa0;
const EDIABAS_XOR_KEY = new Uint8Array([0xf7]);

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
 * Parse job metadata from text content.
 * The decoded PRG/GRP contains text in format:
 *   JOBNAME:name
 *   JOBCOMMENT:description
 *   RESULT:name
 *   RESULTTYPE:type
 *   ARG:name
 *   ARGTYPE:type
 */
function parseJobsFromText(text: string): PrgJob[] {
  const jobs: PrgJob[] = [];
  const jobMatches = text.matchAll(/JOBNAME:([A-Za-z0-9_]+)/g);
  
  for (const match of jobMatches) {
    const name = match[1];
    // Count args and results for this job (until next JOBNAME)
    const jobStart = match.index ?? 0;
    const nextJobMatch = text.slice(jobStart + 1).match(/JOBNAME:/);
    const jobEnd = nextJobMatch 
      ? jobStart + 1 + (nextJobMatch.index ?? text.length)
      : text.length;
    
    const jobSection = text.slice(jobStart, jobEnd);
    const argCount = (jobSection.match(/\nARG:/g) || []).length;
    const resultCount = (jobSection.match(/\nRESULT:/g) || []).length;
    
    jobs.push({
      name,
      offset: jobStart,
      argCount,
      resultCount,
    });
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
    jobs.push({ name, offset, argCount, resultCount });
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
 */
export function parsePrg(buffer: Uint8Array): PrgFile {
  const magicText = cp1252ToUtf8(buffer.slice(0, 16)).replace(/\0/g, "");
  const isEdiabas = magicText.startsWith(EDIABAS_MAGIC);

  if (isEdiabas) {
    const decoded = decodeEdiabasData(buffer);
    const header = readEdiabasHeader(decoded);
    
    // The decoded data is text content
    const textContent = cp1252ToUtf8(decoded.slice(EDIABAS_DATA_OFFSET));
    const jobs = parseJobsFromText(textContent);
    
    // Store full text as single string for now
    const strings = [textContent];
    
    // No bytecode in this format
    const code = new Uint8Array(0);

    return { header, strings, jobs, code };
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

  return { header, strings, jobs, code };
}
