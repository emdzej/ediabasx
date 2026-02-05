/**
 * PRG/GRP file header
 */
export type PrgHeader = {
  magic: string | number;
  /** File type: 0 = GRP (group), 1 = PRG (program) */
  version: number;
  stringTableOffset: number;
  stringTableEnd: number;
  jobTableOffset: number;
  jobTableEnd: number;
  codeOffset: number;
  codeEnd: number;
  nameTableOffset: number;
  nameTableEnd: number;
  dataOffset: number;
};

/**
 * Job argument definition
 */
export type PrgArg = {
  name: string;
  type: string;
  comment?: string;
};

/**
 * Job result definition
 */
export type PrgResult = {
  name: string;
  type: string;
  comment?: string;
};

/**
 * Job definition with full metadata
 */
export type PrgJob = {
  name: string;
  /** Bytecode offset (0 for metadata-only files) */
  offset: number;
  /** Number of arguments */
  argCount: number;
  /** Number of results */
  resultCount: number;
  /** Job description/comment */
  comment?: string;
  /** Argument definitions */
  args: PrgArg[];
  /** Result definitions */
  results: PrgResult[];
};

/**
 * File metadata (ECU info)
 */
export type PrgMetadata = {
  /** ECU name/description */
  ecu?: string;
  /** Responsible author/origin */
  origin?: string;
  /** Version/revision string */
  revision?: string;
  /** Author names */
  author?: string;
  /** ECU comment */
  ecuComment?: string;
};

/**
 * Table definition
 */
export type PrgTable = {
  /** Table name */
  name: string;
  /** Number of columns */
  columns: number;
  /** Number of data rows (excluding header) */
  rows: number;
  /** Column offset in file */
  columnOffset: number;
  /** Table data: first row is headers, rest is data */
  values: string[][];
};

/**
 * Binary job entry (from compiled PRG)
 */
export type PrgBinaryJob = {
  /** Job name */
  name: string;
  /** Bytecode offset */
  offset: number;
};

/**
 * Parsed PRG/GRP file
 */
export type PrgFile = {
  header: PrgHeader;
  /** Raw file buffer */
  rawBuffer: Uint8Array;
  /** File metadata */
  metadata: PrgMetadata;
  /** Raw decoded text content */
  rawContent: string;
  /** All strings (legacy format) */
  strings: string[];
  /** Job definitions (from text metadata) */
  jobs: PrgJob[];
  /** Binary job entries (from compiled PRG) */
  binaryJobs: PrgBinaryJob[];
  /** Tables */
  tables: PrgTable[];
  /** Bytecode (empty for metadata-only files) */
  code: Uint8Array;
  /** Raw file buffer (for EDIABAS OBJECT format where bytecode is at binaryJob offsets) */
  rawBuffer: Uint8Array;
};

/**
 * Disassembled instruction
 */
export type Instruction = {
  offset: number;
  opcode: number;
  mnemonic: string;
  operands: string[];
};
