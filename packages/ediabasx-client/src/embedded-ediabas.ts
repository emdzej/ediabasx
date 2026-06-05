import type {
  IEdiabas,
  EdiabasJobResponse,
  EdiabasResultType,
  EdiabasResultSet,
  EdiabasState,
} from "@emdzej/ediabasx-core";
import { Ediabas, type EdiabasJobResult, type EdiabasConfig } from "@emdzej/ediabasx-ediabas";
import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";

export interface EmbeddedEdiabasOptions {
  /** Where `loadSgbd(name)` resolves bare ECU names against (Node path
      lookup). Browser hosts supplying `loadSgbdResolver` can pass any
      placeholder — the resolver short-circuits the path resolution. */
  sgbdPath: string;
  /** EDIABAS communication interface — built by the caller. Pass
      `new SimulationInterface()` for a fake. */
  interface: EdiabasInterface;
  /** Default per-job comm timeout in ms (forwarded to inner Ediabas). */
  timeout?: number;
  /**
   * Browser-side SGBD bytes resolver — same shape as
   * `EdiabasConfig.loadSgbdResolver`. Required for variant swap on
   * `.grp` loads in bundles where `node:fs` is stubbed (Vite, etc.).
   * Forwarded straight through to the inner Ediabas. Node hosts can
   * leave it unset.
   */
  loadSgbdResolver?: EdiabasConfig["loadSgbdResolver"];
}

export class EmbeddedEdiabas implements IEdiabas {
  private readonly sgbdPath: string;
  private readonly iface: EdiabasInterface;
  private readonly timeout: number | undefined;
  private readonly loadSgbdResolver: EdiabasConfig["loadSgbdResolver"];
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
    this.timeout = options.timeout;
    this.loadSgbdResolver = options.loadSgbdResolver;
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
          interface: this.iface,
          timeout: this.timeout,
          loadSgbdResolver: this.loadSgbdResolver,
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

  async job(
    ecu: string,
    jobName: string,
    params?: string | Uint8Array | (string | Uint8Array)[],
  ): Promise<EdiabasJobResponse> {
    return this.enqueue(async () => {
      if (!this.ediabas) throw new Error("Not initialised — call init() first");

      this.currentState = "busy";
      this.lastError = { code: 0, text: "" };

      try {
        /* Cache key + filename are the same — `Ediabas.loadSgbd`
           handles path resolution (Node `node:fs` lookup with
           `.prg ↔ .grp` extension swap + case-insensitive directory
           scan) and browser-side resolver dispatch internally.
           We just track which name the inner `Ediabas` was loaded
           with to skip the reload (which would otherwise reset
           `initialized` / `identRan` / `systemResults` and force a
           re-probe). */
        const cacheKey = ecu.toLowerCase();
        if (cacheKey !== this.loadedSgbdPath) {
          await this.ediabas.loadSgbd(ecu);
          this.loadedSgbdPath = cacheKey;
        }

        const paramList = normalizeParams(params);
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
   * Abort the currently-running job by forwarding `Ediabas.break()`
   * to the underlying interpreter (which throws `EDIABAS_BIP_0008`
   * at the next instruction boundary). Native EDIABAS `apiBreak`
   * semantics.
   *
   * Critical: this method **bypasses {@link enqueue}**. Routing it
   * through the same queue as `job()` would mean `break()` only
   * fires after the job it's trying to interrupt finishes, which
   * defeats the whole point. Calling `break()` while no job is in
   * flight is a no-op on the underlying `Ediabas` (the active-
   * interpreter pointer is null), so the timing race between "job
   * starting" and "break landing" is benign.
   */
  async break(): Promise<void> {
    this.ediabas?.break();
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

/**
 * Coerce the public {@link IEdiabas.job} params union into the
 * `(string | Uint8Array)[]` shape `Ediabas.executeJob` expects. String
 * shorthand is split on `;` to preserve the apiJob convention; bare
 * `Uint8Array` becomes a single binary entry; arrays are passed
 * through untouched. The element type carries the channel: string →
 * indexed-string params (pari/pars), Uint8Array → binary payload
 * (pary/parb/parw/parl/parr).
 *
 * Exported for test reach; not part of the public surface. Callers
 * should drive `IEdiabas.job(...)` directly rather than reaching for
 * this helper.
 */
export function normalizeParams(
  params: string | Uint8Array | (string | Uint8Array)[] | undefined,
): (string | Uint8Array)[] {
  if (params === undefined) return [];
  if (typeof params === "string") return params.length > 0 ? params.split(";") : [];
  if (params instanceof Uint8Array) return [params];
  return params;
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
