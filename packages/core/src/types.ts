export type BestDataType = "string" | "int" | "long" | "float" | "double" | "binary";

export type ResultValue = {
  name: string;
  type: BestDataType;
  value: string | number | Uint8Array;
};

export type JobResult = {
  name: string;
  results: ResultValue[];
  error?: string;
};
