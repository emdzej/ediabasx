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
  /**
   * Last SGBD path loaded into the shared `Ediabas`. `job()` skips
   * a redundant `loadSgbd` when the same ECU is targeted again —
   * without this, every job would reset INITIALISIERUNG / IDENT /
   * systemResults inside `Ediabas` and re-probe the ECU.
   */
  private loadedSgbdPath: string | null = null;
  private lastResults: EdiabasJobResult[][] = [];
  private lastError = { code: 0, text: "" };
  private currentState: EdiabasState = "ready";
  /**
   * Single-lane serialiser around the shared `Ediabas`. JS is single-
   * threaded but `executeJob` / `loadSgbd` are async — interleaving
   * two `job()` calls would race on loaded-SGBD / INITIALISIERUNG /
   * parameter-set state and corrupt results. Mirrors the queue in
   * `EdiabasServer`.
   */
  private queue: Promise<void> = Promise.resolve();

  constructor(options: EmbeddedEdiabasOptions) {
    this.sgbdPath = options.sgbdPath;
    this.iface = options.interface;
  }

  /**
   * Lazily create the inner `Ediabas` once per `EmbeddedEdiabas`
   * instance, mirroring the original single-instance contract.
   * Re-calling `init()` is idempotent — it just ensures the
   * transport is connected; it never replaces the inner `Ediabas`
   * (doing so would drop loaded-SGBD / INITIALISIERUNG / group-cache
   * state and leak the previous transport).
   */
  async init(): Promise<void> {
    return this.enqueue(async () => {
      if (!this.ediabas) {
        this.ediabas = new Ediabas({
          ecuPath: this.sgbdPath,
          transport: this.iface,
        });
      }
      if (!this.ediabas.isConnected()) {
        await this.ediabas.connect();
      }
      this.lastResults = [];
      this.lastError = { code: 0, text: "" };
      this.currentState = "ready";
    });
  }

  async end(): Promise<void> {
    return this.enqueue(async () => {
      if (this.ediabas) {
        await this.ediabas.disconnect();
        this.ediabas = null;
        this.loadedSgbdPath = null;
      }
      this.lastResults = [];
      this.lastError = { code: 0, text: "" };
      this.currentState = "ready";
    });
  }

  async job(ecu: string, jobName: string, params?: string): Promise<EdiabasJobResponse> {
    return this.enqueue(async () => {
      if (!this.ediabas) throw new Error("Not initialised — call init() first");

      this.currentState = "busy";
      this.lastError = { code: 0, text: "" };

      try {
        const sgbdPath = resolveSgbd(ecu, this.sgbdPath);
        if (sgbdPath !== this.loadedSgbdPath) {
          await this.ediabas.loadSgbd(sgbdPath);
          this.loadedSgbdPath = sgbdPath;
        }

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
    });
  }

  private enqueue<T>(task: () => Promise<T>): Promise<T> {
    const next = this.queue.then(task, task);
    this.queue = next.then(() => undefined, () => undefined);
    return next;
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

  /**
   * TODO(break): stub — flips state but does not abort the running
   * job. Native EDIABAS `apiBreak` cancels the in-flight job. Two
   * pieces are missing: (1) a cooperative cancel signal threaded
   * through the interpreter so `Ediabas.executeJob` can unwind on
   * demand; (2) **this method must NOT go through `enqueue`** — if
   * it queues behind the running `job()` it can only fire after that
   * job finishes, which defeats the point. Keep `break()` un-queued
   * and signal the in-flight task instead. Mirror of the same TODO
   * on `EdiabasServer.handleBreak`.
   */
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
    const entry: EdiabasResultSet[string] = {
      name: r.name,
      type: mapResultType(r.type),
      value: r.value instanceof Uint8Array ? Array.from(r.value) : r.value ?? "",
    };
    if (r.unit !== undefined) entry.unit = r.unit;
    if (r.comment !== undefined) entry.comment = r.comment;
    set[r.name] = entry;
  }
  return set;
}
