export type PrgHeader = {
  magic: string | number;
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
