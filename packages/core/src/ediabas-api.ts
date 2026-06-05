/**
 * Shared contract for ediabasx API — implemented by `EdiabasClient`
 * (remote JSON-RPC) and `EmbeddedEdiabas` (in-process). Mirrors the
 * EDIABAS C API without the `api` prefix, minus config/device switching
 * (those are startup-time concerns).
 *
 * `job(...)` covers both `apiJob` (string params, read via the SGBD's
 * `pari` / `pars` opcodes) and `apiJobData` (binary params, read via
 * `pary` / `parb` / `parw` / `parl` / `parr`). Callers pick the channel
 * by the element type they hand in: a string entry lands in the indexed-
 * string params, a `Uint8Array` entry lands in the binary payload.
 * Bare `string` and bare `Uint8Array` are shorthand for "all params on
 * one channel"; the array form interleaves both.
 */

export type EdiabasResultType =
  | "char"
  | "byte"
  | "integer"
  | "word"
  | "long"
  | "dword"
  | "real"
  | "text"
  | "binary";

export interface EdiabasResultEntry {
  name: string;
  type: EdiabasResultType;
  value: string | number | number[];
  unit?: string;
  comment?: string;
}

export type EdiabasResultSet = Record<string, EdiabasResultEntry>;

export interface EdiabasJobResponse {
  sets: EdiabasResultSet[];
}

export type EdiabasState = "busy" | "ready" | "break" | "error";

export interface IEdiabas {
  init(): Promise<void>;
  end(): Promise<void>;

  job(
    ecu: string,
    jobName: string,
    params?: string | Uint8Array | (string | Uint8Array)[],
  ): Promise<EdiabasJobResponse>;

  resultSets(): number;
  resultText(name: string, set: number, format?: string): string;
  resultInt(name: string, set: number): number;
  resultReal(name: string, set: number): number;
  resultBinary(name: string, set: number): number[];
  resultFormat(name: string, set: number): EdiabasResultType | undefined;

  state(): EdiabasState;
  break(): Promise<void>;

  errorCode(): number;
  errorText(): string;
}
