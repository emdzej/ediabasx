# @emdzej/ediabasx-best-parser

Parser and disassembler for BMW EDIABAS **PRG/GRP** files (the BEST2 binary diagnostic format). Part of the [EdiabasX](https://github.com/emdzej/ediabasx) monorepo.

## Install

```bash
pnpm add @emdzej/ediabasx-best-parser
```

## What it does

- Decodes the XOR-encoded payload (key `0xF7`) and validates the `@EDIABAS OBJECT` header
- Extracts the job list (with name, args, results, comment metadata)
- Extracts lookup tables (column names + cell values)
- Reads ECU metadata (origin, revision, author, package, language)
- Disassembles BEST2 bytecode into readable assembly bounded by next-job offsets, so multi-`eoj` jobs (early-return paths followed by tail code reached via backward jumps) decode in full

## Usage

```ts
import {
  parsePrg,
  disassembleJob,
  formatInstruction,
} from "@emdzej/ediabasx-best-parser";
import { readFile } from "node:fs/promises";

const buffer = new Uint8Array(await readFile("./MS430DS0.prg"));
const prg = parsePrg(buffer);

console.log(prg.metadata.ecu, prg.metadata.revision);
console.log(`${prg.jobs.length} jobs, ${prg.tables.length} tables`);

// Disassemble a single job, bounded by the next job's offset so multi-eoj
// jobs (e.g. FS_LESEN's fault loop) decode completely.
const job = prg.binaryJobs.find((j) => j.name === "FS_LESEN");
const nextJobOffset = /* sort binaryJobs by offset and pick the next */;
const instructions = disassembleJob(buffer, job.offset, { endOffset: nextJobOffset });

for (const instr of instructions) {
  console.log(formatInstruction(instr, { color: false }));
}
```

## API surface

```ts
parsePrg(buffer: Uint8Array): PrgFile

disassembleJob(buffer: Uint8Array, jobOffset: number, options?: {
  endOffset?: number;       // bound decoding by the next job's file offset
  maxInstructions?: number; // safety cap (defaults to 100_000)
}): Instruction[]

disassemble(code: Uint8Array): Instruction[]               // legacy: decoded bytes already
formatInstruction(instr: Instruction, options?: DisassemblyOptions): string
formatInstructions(instructions: Instruction[], options?: DisassemblyOptions, header?: string): string[]
```

## File format

- Magic header `@EDIABAS OBJECT\0` (16 bytes)
- `0x10`: file type (`0` = GRP, `1` = PRG)
- `0x18`: `SSIZE` (max string register size)
- Offsets at `0x7C / 0x80 / 0x84 / 0x88 / 0x90 / 0x94` point at uses / job code / tables / job list / descriptions / version info
- Everything past `0xA0` is XOR-encoded with key `0xF7`

The parser handles decryption transparently.

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
