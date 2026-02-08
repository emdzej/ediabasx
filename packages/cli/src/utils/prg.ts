import { readFileSync } from "node:fs";
import { parsePrg } from "@ediabasx/best-parser";
import type { PrgFile } from "@ediabasx/best-parser";

function readPrgFile(filePath: string): PrgFile {
  const buffer = readFileSync(filePath);
  return parsePrg(new Uint8Array(buffer));
}

function readFileBuffer(filePath: string): Uint8Array {
  return new Uint8Array(readFileSync(filePath));
}

export { readFileBuffer, readPrgFile };
