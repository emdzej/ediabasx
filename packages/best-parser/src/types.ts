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
 * Parsed PRG/GRP file
 */
export type PrgFile = {
  header: PrgHeader;
  /** File metadata */
  metadata: PrgMetadata;
  /** Raw decoded text content */
  rawContent: string;
  /** All strings (legacy format) */
  strings: string[];
  /** Job definitions */
  jobs: PrgJob[];
  /** Bytecode (empty for metadata-only files) */
  code: Uint8Array;
};
