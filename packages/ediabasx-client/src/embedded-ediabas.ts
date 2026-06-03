import type {
  IEdiabas,
  EdiabasJobResponse,
  EdiabasResultType,
  EdiabasResultSet,
  EdiabasState,
} from "@emdzej/ediabasx-core";
import { Ediabas, type EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";
import { resolveSgbd } from "@emdzej/ediabasx-host-config";

export interface EmbeddedEdiabasOptions {
  sgbdPath: string;
  interface: EdiabasInterface;
}

export class EmbeddedEdiabas implements IEdiabas {
  private readonly sgbdPath: string;
  private readonly iface: EdiabasInterface;
  private ediabas: Ediabas | null = null;
  private lastResults: EdiabasJobResult[][] = [];
  private lastError = { code: 0, text: "" };
  private currentState: EdiabasState = "ready";

  constructor(options: EmbeddedEdiabasOptions) {
    this.sgbdPath = options.sgbdPath;
    this.iface = options.interface;
  }

  async init(): Promise<void> {
    this.ediabas = new Ediabas({
      ecuPath: this.sgbdPath,
      transport: this.iface,
    });
    await this.ediabas.connect();
    this.lastResults = [];
    this.lastError = { code: 0, text: "" };
    this.currentState = "ready";
  }

  async end(): Promise<void> {
    if (this.ediabas) {
      await this.ediabas.disconnect();
      this.ediabas = null;
    }
    this.lastResults = [];
    this.lastError = { code: 0, text: "" };
    this.currentState = "ready";
  }

  async job(ecu: string, jobName: string, params?: string): Promise<EdiabasJobResponse> {
    if (!this.ediabas) throw new Error("Not initialised — call init() first");

    this.currentState = "busy";
    this.lastError = { code: 0, text: "" };

    try {
      const sgbdPath = resolveSgbd(ecu, this.sgbdPath);
      await this.ediabas.loadSgbd(sgbdPath);

      const paramList = params ? params.split(";") : [];
      const rawResults = await this.ediabas.executeJob(jobName, {
        params: paramList.length > 0 ? paramList : undefined,
      });

      this.lastResults = rawResults;
      this.currentState = "ready";

      return { sets: rawResults.map(convertResultSet) };
    } catch (error) {
      this.currentState = "error";
      this.lastError = {
        code: (error as { code?: number }).code ?? -1,
        text: error instanceof Error ? error.message : String(error),
      };
      throw error;
    }
  }

  resultSets(): number {
    return this.lastResults.length > 0 ? this.lastResults.length - 1 : 0;
  }

  resultText(name: string, set: number, _format?: string): string {
    const r = this.findResult(name, set);
    if (!r) return "";
    if (r.value instanceof Uint8Array) return `[${r.value.length} bytes]`;
    return String(r.value ?? "");
  }

  resultInt(name: string, set: number): number {
    const r = this.findResult(name, set);
    if (!r) return 0;
    return typeof r.value === "number" ? Math.trunc(r.value) : 0;
  }

  resultReal(name: string, set: number): number {
    const r = this.findResult(name, set);
    if (!r) return 0;
    return typeof r.value === "number" ? r.value : 0;
  }

  resultBinary(name: string, set: number): number[] {
    const r = this.findResult(name, set);
    if (!r || !(r.value instanceof Uint8Array)) return [];
    return Array.from(r.value);
  }

  resultFormat(name: string, set: number): EdiabasResultType | undefined {
    const r = this.findResult(name, set);
    if (!r) return undefined;
    return mapResultType(r.type);
  }

  state(): EdiabasState {
    return this.currentState;
  }

  async break(): Promise<void> {
    this.currentState = "break";
  }

  errorCode(): number {
    return this.lastError.code;
  }

  errorText(): string {
    return this.lastError.text;
  }

  private findResult(name: string, set: number): EdiabasJobResult | undefined {
    if (set < 0 || set >= this.lastResults.length) return undefined;
    return this.lastResults[set].find(
      (r) => r.name.toUpperCase() === name.toUpperCase(),
    );
  }
}

function mapResultType(type: string): EdiabasResultType {
  switch (type) {
    case "string": return "text";
    case "int": return "integer";
    case "real":
    case "float":
    case "double": return "real";
    case "bytes":
    case "binary": return "binary";
    case "long": return "long";
    case "bcd": return "text";
    default: return "text";
  }
}

function convertResultSet(results: EdiabasJobResult[]): EdiabasResultSet {
  const set: EdiabasResultSet = {};
  for (const r of results) {
    set[r.name] = {
      name: r.name,
      type: mapResultType(r.type),
      value: r.value instanceof Uint8Array ? Array.from(r.value) : r.value ?? "",
    };
  }
  return set;
}
