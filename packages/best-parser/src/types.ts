export type PrgHeader = {
  magic: number;
  version: number;
  stringTableOffset: number;
  stringTableSize: number;
  jobTableOffset: number;
  jobCount: number;
  codeOffset: number;
  codeSize: number;
};

export type PrgJob = {
  name: string;
  offset: number;
  argCount: number;
  resultCount: number;
};

export type PrgFile = {
  header: PrgHeader;
  strings: string[];
  jobs: PrgJob[];
  code: Uint8Array;
};
