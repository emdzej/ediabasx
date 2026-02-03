import { cp1252ToUtf8 } from "@ediabas/core";
import { BinaryReader } from "./reader";
import type { PrgFile, PrgHeader, PrgJob } from "./types";

const PRG_MAGIC = 0x00475250;

function readHeader(reader: BinaryReader): PrgHeader {
  return {
    magic: reader.readUint32LE(),
    version: reader.readUint32LE(),
    stringTableOffset: reader.readUint32LE(),
    stringTableSize: reader.readUint32LE(),
    jobTableOffset: reader.readUint32LE(),
    jobCount: reader.readUint32LE(),
    codeOffset: reader.readUint32LE(),
    codeSize: reader.readUint32LE(),
  };
}

function parseStringTable(buffer: Uint8Array, offset: number, size: number): string[] {
  const table = buffer.slice(offset, offset + size);
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

function readNullTerminatedString(table: Uint8Array, offset: number): string {
  let end = offset;
  while (end < table.length && table[end] !== 0x00) {
    end += 1;
  }
  return cp1252ToUtf8(table.slice(offset, end));
}

function parseJobs(
  reader: BinaryReader,
  header: PrgHeader,
  stringTable: Uint8Array
): PrgJob[] {
  const jobs: PrgJob[] = [];
  reader.position = header.jobTableOffset;

  for (let i = 0; i < header.jobCount; i += 1) {
    const nameOffset = reader.readUint32LE();
    const offset = reader.readUint32LE();
    const argCount = reader.readUint16LE();
    const resultCount = reader.readUint16LE();

    const name = readNullTerminatedString(stringTable, nameOffset);
    jobs.push({ name, offset, argCount, resultCount });
  }

  return jobs;
}

export function parsePrg(buffer: Uint8Array): PrgFile {
  const reader = new BinaryReader(buffer);
  const header = readHeader(reader);

  if (header.magic !== PRG_MAGIC) {
    throw new Error(`Invalid PRG magic: 0x${header.magic.toString(16)}`);
  }

  const stringTable = buffer.slice(
    header.stringTableOffset,
    header.stringTableOffset + header.stringTableSize
  );
  const strings = parseStringTable(buffer, header.stringTableOffset, header.stringTableSize);
  const jobs = parseJobs(reader, header, stringTable);
  const code = buffer.slice(header.codeOffset, header.codeOffset + header.codeSize);

  return { header, strings, jobs, code };
}
