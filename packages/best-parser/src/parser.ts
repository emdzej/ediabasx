import { cp1252ToUtf8, xorDecrypt } from "@ediabas/core";
import { BinaryReader } from "./reader";
import type { PrgArg, PrgFile, PrgHeader, PrgJob, PrgMetadata, PrgResult } from "./types";

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
    
    // No bytecode in this format
    const code = new Uint8Array(0);

    return { 
      header, 
      metadata,
      rawContent,
      strings: [], 
      jobs, 
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
    code,
  };
}
