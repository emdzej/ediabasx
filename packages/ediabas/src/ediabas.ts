/**
 * Main Ediabas library class
 */

import { parsePrg, type PrgFile } from "@emdzej/ediabasx-best-parser";
import { EdiabasError, EdiabasErrorCodes } from "@emdzej/ediabasx-core";
import {
  Interpreter,
  type ExecutionOptions,
  type JobResult,
  type CommunicationInterface,
  ParameterSet,
} from "@emdzej/ediabasx-interpreter";
import { EdiabasInterface, SimulationInterface } from "@emdzej/ediabasx-interface-base";
import { getLogger } from "@emdzej/bimmerz-logger";

// `fs/promises` and `path` are imported lazily inside `loadSgbd()` so the
// browser bundler doesn't pull them into the static graph. Consumers that
// only call `loadSgbdFromBuffer()` (the web app) never touch them.

const log = getLogger("EDIABASX.ediabas");
// Wire-level tracing is reserved on the `EDIABASX.ediabas.wire`
// category — once the interface implementations (interface-serial,
// interface-enet, …) route through bimmerz-logger, every xsend /
// xrecv / handshake byte flows through there at `trace`. Users opt
// in via:
//
//   EDIABASX_LOG_CATEGORIES="EDIABASX.ediabas.wire=trace"
//
// or the equivalent in the `logging.categories` section of the
// ediabas config file. Replaces the per-instance
// `Ediabas.config.logging` boolean removed in 0.3.0.

/**
 * Resolve an SGBD path against the on-disk reality. Handles two
 * Windows→Unix mismatches that bite real INPA installs:
 *
 *   1. **Casing**: scripts hard-code uppercase names (`D_0012.PRG`,
 *      `MS430DS0.PRG`); real disks (after rsync from Windows or zip
 *      extraction) often have lowercase basenames.
 *
 *   2. **Extension**: scripts request a name like `D_0012.prg` but the
 *      actual file on disk may be a `.grp` (group definition that
 *      delegates) or the other way around. Native EDIABAS probes both
 *      `.prg` and `.grp` for any given ECU name; mirror that here so
 *      callers don't have to know which form the file takes.
 *
 * Fast path: exact match. On miss, `readdir` the parent once and look
 * for a case-insensitive basename match, allowing a `.prg` ↔ `.grp`
 * swap. Returns the original path unchanged if nothing matches so the
 * caller sees the canonical ENOENT.
 */
/**
 * Derive the SGBD's `VARIANTE` system result value from its filename.
 * BMW convention: VARIANTE is the basename without extension, uppercase
 * — what an INPA script compares against to confirm it's talking to the
 * right ECU type (e.g. `"MS430DS0"`).
 */
function extractVariantName(filenameOrPath: string): string {
  return stripExtension(basenameOf(filenameOrPath)).toUpperCase();
}

function basenameOf(filenameOrPath: string): string {
  const lastSlash = Math.max(
    filenameOrPath.lastIndexOf("/"),
    filenameOrPath.lastIndexOf("\\")
  );
  return filenameOrPath.slice(lastSlash + 1);
}

function stripExtension(name: string): string {
  const dot = name.lastIndexOf(".");
  return dot > 0 ? name.slice(0, dot) : name;
}

/**
 * Coerce a user-supplied parameter into the `ParameterSet` entry shape.
 *
 * EDIABAS exposes two parameter channels to the BEST/2 bytecode:
 *
 *   • **Strings** — read by the `pari` (per-index int-from-string) and
 *     `pars` (per-index string) opcodes. Stored in
 *     `ParameterSet.parameters[i]`.
 *   • **Binary** — read by `pary` (full buffer as bytes) and
 *     `parb` / `parw` / `parl` / `parr` (slot-indexed byte/word/long/real
 *     reads off the same buffer). Stored as `ParameterSet.binaryPayload`,
 *     a single buffer shared across all binary parameter reads.
 *
 * This is the same split the C API exposes via `apiJob` (strings) vs
 * `apiJobData` (binary). Callers indicate which channel they mean by
 * the element type: `Uint8Array` ⇒ binary, everything else ⇒ string.
 *
 * Why the split matters: binbuf-driven SGBDs (BMW NCS coding —
 * `C_S_LESEN` / `C_S_SCHREIBEN` / `C_S_AUFTRAG`, F-series equivalents)
 * call `pary` at the top of their entry point and bail out with
 * `JOB_STATUS=ERROR_NO_BIN_BUFFER` if the binary payload is empty.
 * Hex-encoding the bytes into a string parameter doesn't work because
 * that lands in the string channel, not in `binaryPayload`.
 */
export function paramToEntry(
  param: string | Uint8Array,
): { kind: "string"; value: string } | { kind: "binary"; value: Uint8Array } {
  return param instanceof Uint8Array
    ? { kind: "binary", value: param }
    : { kind: "string", value: param };
}

async function resolveCaseInsensitive(
  fs: typeof import("node:fs/promises"),
  path: typeof import("node:path"),
  fullPath: string
): Promise<string> {
  try {
    await fs.access(fullPath);
    return fullPath;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
  }

  const dir = path.dirname(fullPath);
  const requested = path.basename(fullPath).toLowerCase();
  // Build a set of acceptable basenames: the requested one + the same
  // with the .prg/.grp extension swapped. Anything else, single match.
  const candidates = new Set<string>([requested]);
  if (requested.endsWith(".prg")) candidates.add(requested.slice(0, -4) + ".grp");
  else if (requested.endsWith(".grp")) candidates.add(requested.slice(0, -4) + ".prg");

  let entries: string[];
  try {
    entries = await fs.readdir(dir);
  } catch {
    // Parent dir doesn't exist → preserve original ENOENT semantics.
    return fullPath;
  }

  // Prefer an exact-extension match over the swapped form so an existing
  // `.prg` always wins over a `.grp` with the same stem, and vice versa.
  let extensionSwap: string | null = null;
  for (const entry of entries) {
    const lower = entry.toLowerCase();
    if (lower === requested) return path.join(dir, entry);
    if (candidates.has(lower)) extensionSwap = entry;
  }
  return extensionSwap ? path.join(dir, extensionSwap) : fullPath;
}

export interface EdiabasConfig {
  /** Path to ECU files (.prg, .grp) */
  ecuPath: string;
  /** Hardware interface (e.g., NodeSerialTransport) */
  transport?: EdiabasInterface;
  /** Use simulation interface (no hardware) */
  simulation?: boolean;
  /** Default timeout in ms */
  timeout?: number;
  /**
   * Optional: read an SGBD by basename. Both `loadSgbd` (initial
   * load) and the internal `.grp → .prg` swap after IDENTIFIKATION
   * route through this hook when present. Node hosts can leave it
   * unset — the default uses `node:fs.readFile(ecuPath + filename)`,
   * with the same case-insensitive + `.prg ↔ .grp` swap resolver
   * the existing `loadSgbd` already does.
   *
   * Browser hosts MUST set this (along with `loadSgbdFromBuffer`
   * for the initial load), since the Node default touches
   * `node:fs` / `node:path` which Vite externalises into stubs.
   * Without the hook a `.grp` load would succeed via
   * `loadSgbdFromBuffer` but the post-IDENT swap would throw
   * "Cannot access node:path.resolve in client code" on every
   * resolved variant.
   *
   * The returned bytes are passed straight through `parsePrg`; the
   * `name` argument is the resolved on-disk filename used for
   * `prgPath` and the basename-derived `VARIANTE`. If the host
   * can resolve case-insensitive or extension-swap variants, it
   * should do so and return the canonical name; otherwise return
   * the input unchanged.
   */
  loadSgbdResolver?: (filename: string) => Promise<{ bytes: Uint8Array; name: string }>;
}

export interface EdiabasJob {
  name: string;
  comment?: string;
  args: string[];
  results: string[];
}

export interface EdiabasJobResult {
  name: string;
  type: JobResult["type"];
  value: JobResult["value"];
  unit?: string;
  comment?: string;
}

export class Ediabas {
  private readonly config: EdiabasConfig & { timeout: number; simulation: boolean };
  private prg: PrgFile | null = null;
  private prgPath: string | null = null;
  private commInterface: EdiabasInterface | null = null;
  /**
   * True after INITIALISIERUNG has run successfully against the loaded SGBD.
   * BMW SGBDs use the INITIALISIERUNG job to call xsetpar / wake-up routines
   * before any other diagnostic job; subsequent jobs assume the comm session
   * has already been set up. We auto-run it on the first executeJob call to
   * mirror EDIABAS's host behavior.
   */
  private initialized = false;
  /**
   * True once IDENTIFIKATION has been chained after a successful
   * INITIALISIERUNG on this loaded SGBD. For .grp files this is what
   * populates VARIANTE in systemResults with the resolved variant
   * (e.g. `"MS430DS0"`) instead of the group's basename. We run it
   * exactly once per load — variant resolution is sticky.
   */
  private identRan = false;
  /**
   * Group → resolved variant cache, mirroring C# `_groupMappingDict`.
   * Once a `.grp` has been probed and its variant matched, a future
   * `loadSgbd` of the same group skips the IDENT probe and loads the
   * variant `.prg` directly. Keyed by lowercased group basename, stores
   * the resolved variant name (also lowercased to match the cache key
   * style; the actual `.prg` lookup is case-insensitive via
   * resolveCaseInsensitive).
   */
  private groupMappingCache: Map<string, string> = new Map();
  /**
   * System / metadata results — VARIANTE (SGBD basename), JOB_STATUS, plus
   * everything emitted by the INFO job (ECU, ORIGIN, REVISION, etc.).
   * Native EDIABAS exposes these alongside per-job result sets so scripts
   * can read SGBD metadata without remembering which set holds what; we
   * mirror that. Populated at loadSgbd time, JOB_STATUS refreshed after
   * each executeJob.
   */
  private systemResults: Map<string, EdiabasJobResult> = new Map();

  constructor(config: EdiabasConfig) {
    this.config = {
      ecuPath: config.ecuPath,
      transport: config.transport,
      simulation: config.simulation ?? false,
      timeout: config.timeout ?? 5000,
      loadSgbdResolver: config.loadSgbdResolver,
    };

    // Create interface
    if (this.config.simulation) {
      this.commInterface = new SimulationInterface();
    } else if (this.config.transport) {
      this.commInterface = this.config.transport;
    }
  }

  /**
   * Swap the active communication interface at runtime. Used by hosts
   * that construct an `Ediabas` instance up-front but only learn the
   * actual transport later — e.g. the browser app waits for the user
   * to click Connect (which opens a Web Serial port and builds a
   * `SerialInterface`) and then needs to wire that transport into a
   * VM that's already been started by an IPO selection.
   *
   * Replaces whatever the constructor set (simulation or a previously
   * configured transport). `connect()` afterwards uses the new one.
   */
  setTransport(transport: EdiabasInterface): void {
    this.commInterface = transport;
  }

  /**
   * Load an SGBD by reading a `.prg` / `.grp` file from disk relative to
   * `config.ecuPath`. Node-only — uses `fs/promises` + `path` via dynamic
   * import so the browser bundler doesn't pull them into the static dep
   * graph. Browser consumers should use {@link loadSgbdFromBuffer} instead.
   */
  async loadSgbd(filename: string): Promise<void> {
    // Browser-friendly path: when a resolver is supplied, route
    // through it and bypass node:fs / node:path entirely. The host
    // (e.g. the inpax web app) reads bytes from its own source
    // (FileSystemDirectoryHandle, fetch, etc.) and hands them back
    // together with the canonical filename for `prgPath`.
    if (this.config.loadSgbdResolver) {
      try {
        const { bytes, name } = await this.config.loadSgbdResolver(filename);
        this.loadSgbdFromBuffer(bytes, name);
        log.debug(`Loaded SGBD via resolver: ${filename} → ${name}`);
      } catch (err) {
        if (err instanceof EdiabasError) throw err;
        throw new EdiabasError(
          EdiabasErrorCodes.UNKNOWN,
          `Failed to load SGBD: ${filename} - ${(err as Error).message}`
        );
      }
      await this.runInfoForSystemResults();
      return;
    }

    const [{ default: fs }, { default: path }] = await Promise.all([
      import("node:fs/promises"),
      import("node:path"),
    ]);

    // Group-mapping cache: if we've already resolved this `.grp` to a
    // variant in a previous load, jump straight to the variant `.prg`
    // and skip the IDENT probe entirely. Mirrors C#
    // `EdiabasNet._groupMappingDict`. The variant stored is the
    // canonical lowercased name; the `.prg` extension is added and the
    // case-insensitive resolver finds the actual on-disk file.
    const baseName = stripExtension(basenameOf(filename)).toLowerCase();
    const cachedVariant = filename.toLowerCase().endsWith(".grp")
      ? this.groupMappingCache.get(baseName)
      : undefined;
    const effectiveFilename = cachedVariant ? `${cachedVariant}.prg` : filename;

    const fullPath = path.resolve(this.config.ecuPath, effectiveFilename);

    try {
      const resolved = await resolveCaseInsensitive(fs, path, fullPath);
      const buffer = await fs.readFile(resolved);
      this.loadSgbdFromBuffer(new Uint8Array(buffer), resolved);
      if (cachedVariant) {
        log.debug(`Loaded SGBD: ${filename} → cached variant ${cachedVariant}`);
      } else {
        log.debug(`Loaded SGBD: ${filename}`);
      }
    } catch (err) {
      if (err instanceof EdiabasError) throw err;
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Failed to load SGBD: ${filename} - ${(err as Error).message}`
      );
    }

    // Run INFO once we're loaded to populate metadata system results
    // (ECU, ORIGIN, REVISION, AUTHOR, COMMENT, PACKAGE, SPRACHE for most
    // BMW SGBDs). It's a no-comms job — pure metadata baked into the
    // PRG — but it can still throw if the SGBD doesn't define INFO, so
    // failures are silently ignored.
    await this.runInfoForSystemResults();
    // IDENTIFIKATION (group variant resolution) runs after
    // INITIALISIERUNG has set up the comm session — see executeJob /
    // runJobInternal. Running it here would xsend before the cable is
    // configured and just time out.
  }

  /**
   * Load an SGBD from an in-memory buffer of `.prg` / `.grp` bytes.
   *
   * The web app uses this — it reads files via the File API
   * (`file.arrayBuffer()`) and hands the bytes here directly, sidestepping
   * any filesystem dependency. The `name` is purely for display / error
   * messages and is exposed via `getSgbdInfo().path`.
   */
  loadSgbdFromBuffer(buffer: Uint8Array, name: string): void {
    try {
      this.prg = parsePrg(buffer);
      this.prgPath = name;
      // Reset both INITIALISIERUNG and metadata caches — a fresh SGBD
      // is a fresh runtime. Inject VARIANTE upfront from the basename
      // (BMW convention; what scripts compare against to verify the
      // ECU type they're talking to). loadSgbd will follow up with an
      // INFO run that adds ECU, ORIGIN, etc.; for the browser path
      // (loadSgbdFromBuffer used directly) VARIANTE is all we can
      // provide without async file I/O.
      this.initialized = false;
      this.identRan = false;
      this.systemResults = new Map();
      this.systemResults.set("VARIANTE", {
        name: "VARIANTE",
        type: "string",
        value: extractVariantName(name),
      });
      log.debug(`Loaded SGBD: ${name}`);
      log.debug(`  Jobs: ${this.prg.jobs.length}`);
      log.debug(`  Tables: ${this.prg.tables.length}`);
    } catch (err) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Failed to parse SGBD: ${name} - ${(err as Error).message}`
      );
    }
  }

  /**
   * Run the SGBD's `INFO` job (if defined) and merge its first result set
   * into systemResults. Used at load time to surface ECU/ORIGIN/REVISION/
   * AUTHOR/COMMENT/PACKAGE/SPRACHE — the canonical BMW SGBD-metadata
   * fields that scripts may read by name from any set. INFO is a
   * comms-free job (pure static metadata), so this is cheap and safe;
   * any failure is silenced because some custom SGBDs omit INFO.
   */
  private async runInfoForSystemResults(): Promise<void> {
    if (!this.hasJob("INFO")) return;
    try {
      const sets = await this.executeJobRaw("INFO", []);
      const first = sets[0];
      if (!first) return;
      for (const r of first) {
        if (r.name.toUpperCase() === "VARIANTE") continue; // honour our basename
        this.systemResults.set(r.name, r);
      }
    } catch (err) {
      log.warn(`INFO job failed at load time: ${(err as Error).message}`);
    }
  }

  /**
   * For .grp (group) SGBDs: after INITIALISIERUNG has set up the comm
   * session, run IDENTIFIKATION to resolve which specific variant the
   * group represents. The job probes the ECU (xsend/xrecv), matches
   * the response against the group's variant table, and emits
   * `VARIANTE` via `ergs`. We capture that emission into systemResults
   * — overwriting the basename-derived default — so scripts that
   * compare `VARIANTE` against a specific variant name (e.g.
   * `"MS430DS0"`) see the right value.
   *
   * Critical ordering: this MUST run after INITIALISIERUNG (which
   * configures xsetpar / xreps / xawlen), otherwise xsend goes onto
   * a bare cable with no protocol context and times out. The caller
   * is responsible for that ordering — `runJobInternal` chains us
   * directly after a successful INITIALISIERUNG, and `executeJob`
   * does the same when the script runs INITIALISIERUNG explicitly.
   *
   * Idempotent via `identRan`: runs once per loaded SGBD. Failures
   * are non-fatal (offline / unresponsive ECU leaves the basename
   * default in place); the error is logged in verbose mode.
   */
  private async runIdentAfterInit(): Promise<void> {
    if (this.identRan) return;
    if (!this.prg || this.prg.header.version !== 0) return; // .grp only
    if (!this.hasJob("IDENTIFIKATION")) return;
    this.identRan = true;

    let variantName: string | undefined;
    try {
      const sets = await this.executeJobRaw("IDENTIFIKATION", []);
      // IDENTIFIKATION emits VARIANTE = S1 (the resolved variant
      // name) once it finds a match — scan all sets and take the
      // last non-empty VARIANTE so retries / multi-pass probes
      // surface their final answer rather than an intermediate.
      for (const set of sets) {
        for (const r of set) {
          if (r.name.toUpperCase() === "VARIANTE" && r.value) {
            variantName = String(r.value);
          }
        }
      }
    } catch (err) {
      log.warn(`IDENTIFIKATION failed: ${(err as Error).message}`);
      return;
    }

    if (!variantName) return;

    // Cache so a later `loadSgbd(<group>.grp)` short-circuits to the
    // variant `.prg` without re-probing the ECU.
    const groupBaseName = stripExtension(basenameOf(this.prgPath ?? "")).toLowerCase();
    if (groupBaseName) {
      this.groupMappingCache.set(groupBaseName, variantName.toLowerCase());
    }

    // Swap the loaded SGBD from `.grp` to the variant `.prg`. Real
    // EDIABAS does this in `ResolveSgbdFile` (EdiabasNet.cs:5378) so
    // subsequent jobs run against the variant's job table — the group
    // only has INITIALISIERUNG + IDENTIFIKATION and would 404 on
    // everything else. `systemResults` are refreshed from the
    // variant's INFO (ECU/REVISION/etc.) so version checks see the
    // right metadata.
    await this.swapToVariant(variantName);
  }

  /**
   * Replace the loaded `.grp` with the resolved variant's `.prg`,
   * refresh INFO-derived systemResults from the new file, and pin
   * `VARIANTE` to the resolved name (so subsequent script reads
   * still see the variant, not the .prg's basename — for most BMW
   * SGBDs these match, but the explicit pin guards against the
   * occasional alias).
   */
  private async swapToVariant(variantName: string): Promise<void> {
    try {
      let bytes: Uint8Array;
      let resolvedName: string;
      if (this.config.loadSgbdResolver) {
        // Browser path — host reads bytes from a directory handle and
        // hands back the canonical filename it picked. Same hook the
        // initial `loadSgbd` uses.
        const result = await this.config.loadSgbdResolver(`${variantName}.prg`);
        bytes = result.bytes;
        resolvedName = result.name;
      } else {
        const [{ default: fs }, { default: path }] = await Promise.all([
          import("node:fs/promises"),
          import("node:path"),
        ]);
        const candidate = path.resolve(this.config.ecuPath, `${variantName}.prg`);
        const resolved = await resolveCaseInsensitive(fs, path, candidate);
        const buffer = await fs.readFile(resolved);
        bytes = new Uint8Array(buffer);
        resolvedName = resolved;
      }
      this.prg = parsePrg(bytes);
      this.prgPath = resolvedName;
      // systemResults is reset so the .grp's INFO outputs don't leak
      // through; rebuild VARIANTE first so the rerun-INFO honour-our-
      // basename guard keeps the resolved name in place.
      this.systemResults = new Map();
      this.systemResults.set("VARIANTE", {
        name: "VARIANTE",
        type: "string",
        value: variantName,
      });
      await this.runInfoForSystemResults();
      log.debug(`Swapped to variant ${variantName} (${resolvedName})`);
    } catch (err) {
      log.warn(`Variant swap to ${variantName}.prg failed: ${(err as Error).message}`);
    }
  }

  /**
   * System / metadata result set — VARIANTE + INFO job outputs + the
   * most-recent JOB_STATUS. Consumers (e.g. inpax's ediabasx-provider)
   * fall back here when a per-set lookup misses, mirroring the way
   * native EDIABAS exposes SGBD metadata transparently.
   */
  getSystemResults(): Map<string, EdiabasJobResult> {
    return this.systemResults;
  }

  /**
   * Get list of available jobs from loaded SGBD
   */
  getJobs(): EdiabasJob[] {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    return this.prg.jobs.map((job) => ({
      name: job.name,
      comment: job.comment,
      args: job.args?.map((a) => a.name) ?? [],
      results: job.results?.map((r) => r.name) ?? [],
    }));
  }

  /**
   * Get a specific job by name
   */
  getJob(name: string): EdiabasJob | undefined {
    return this.getJobs().find(
      (j) => j.name.toUpperCase() === name.toUpperCase()
    );
  }

  /** True if the loaded SGBD defines a job with the given name (case-insensitive). */
  private hasJob(name: string): boolean {
    if (!this.prg) return false;
    const target = name.toUpperCase();
    return (
      this.prg.jobs.some((j) => j.name.toUpperCase() === target) ||
      this.prg.binaryJobs.some((j) => j.name.toUpperCase() === target)
    );
  }

  /**
   * Internal job runner used by INITIALISIERUNG bootstrap. Returns silently on
   * failure so a missing/failing init doesn't mask the real error from the
   * user's actual job.
   */
  private async runJobInternal(
    jobName: string,
    params: (string | Uint8Array)[],
  ): Promise<void> {
    log.debug(`Auto-running ${jobName}`);
    try {
      // INITIALISIERUNG is a single-set bootstrap job; we don't need its
      // results, just side effects, so the sets shape is irrelevant here.
      await this.executeJobRaw(jobName, params);
      log.debug(`${jobName} completed`);
    } catch (err) {
      // Always surface init failures — they often hide the root cause
      // of subsequent job errors. `log.warn` always reaches the active
      // sink (default sink writes to console), so the stderr fallback
      // that lived here pre-bimmerz-logger is no longer needed.
      log.warn(`${jobName} failed: ${(err as Error).message}`);
    }
  }

  /** Run a job through the interpreter without the INITIALISIERUNG bootstrap. */
  private async executeJobRaw(
    jobName: string,
    params: (string | Uint8Array)[],
  ): Promise<EdiabasJobResult[][]> {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    const parameters = new ParameterSet();
    for (let i = 0; i < params.length; i++) {
      parameters.set(i, paramToEntry(params[i]));
    }
    const commAdapter = this.buildCommAdapter();
    const interpreter = new Interpreter(this.prg);
    const sets = await interpreter.execute(jobName, {
      parameters,
      communicationInterface: commAdapter,
    });
    return sets.map((set) =>
      set.map((r: JobResult) => ({
        name: r.name,
        type: r.type,
        value: r.value,
        unit: r.unit,
        comment: r.comment,
      }))
    );
  }

  /** Build the interpreter→interface adapter so xsetpar/xsend can route through. */
  private buildCommAdapter(): CommunicationInterface | undefined {
    const commInterface = this.commInterface;
    if (!commInterface) return undefined;
    const adapter: CommunicationInterface = {
      connect: () => commInterface.connect(),
      disconnect: () => commInterface.disconnect(),
      send: (data: Uint8Array) => commInterface.send(data),
      receive: (timeout?: number) => commInterface.receive(timeout ?? this.config.timeout),
      isConnected: () => commInterface.isConnected(),
      stopFrequent: () => commInterface.stopFrequent(),
      transmitFrequent: (data: Uint8Array) => commInterface.transmitFrequent(data),
      receiveFrequent: () => commInterface.receiveFrequent(),
      getPort: (index: number) => commInterface.getPort(index),
      setPort: (index: number, value: number) => commInterface.setPort(index, value),
      get ignitionVoltage() {
        return commInterface.ignitionVoltage;
      },
      get batteryVoltage() {
        return commInterface.batteryVoltage;
      },
      get loopTest() {
        return commInterface.loopTest;
      },
      setProgramVoltage: (value: number) => commInterface.setProgramVoltage(value),
      rawData: (payload: Uint8Array) => commInterface.rawData(payload),
      switchSiRelais: (time: number) => commInterface.switchSiRelais(time),
      sendExtended: (data: Uint8Array) => commInterface.send(data),
      receiveExtended: (timeout?: number) => commInterface.receive(timeout ?? this.config.timeout),
    };
    // Forward setCommParameter / transmitData when present so SerialInterface DS2
    // routing works through the adapter.
    const fwd = commInterface as unknown as {
      setCommParameter?: (params: number[]) => Promise<void> | void;
      transmitData?: (data: Uint8Array) => Promise<Uint8Array> | Uint8Array;
      setAnswerLengths?: (lengths: number[]) => Promise<void> | void;
      setAnswerLength?: (length: number) => Promise<void> | void;
      setRepeatCounter?: (count: number) => Promise<void> | void;
      interfaceType?: string;
      type?: string;
      interfaceVersion?: number;
      version?: number;
    };
    if (fwd.setCommParameter) adapter.setCommParameter = (params) => Promise.resolve(fwd.setCommParameter!(params));
    if (fwd.transmitData) adapter.transmitData = (data) => Promise.resolve(fwd.transmitData!(data));
    if (fwd.setAnswerLengths) adapter.setAnswerLengths = (lengths) => Promise.resolve(fwd.setAnswerLengths!(lengths));
    if (fwd.setAnswerLength) adapter.setAnswerLength = (length) => Promise.resolve(fwd.setAnswerLength!(length));
    if (fwd.setRepeatCounter) adapter.setRepeatCounter = (count) => Promise.resolve(fwd.setRepeatCounter!(count));
    // BEST2 xtype / xvers — UTILITY.PRG's INTERFACE job. The interpreter
    // reads these off the adapter object (not the underlying iface), so
    // forward the iface's declared identity through. Without this, real
    // backends that *do* set interfaceType (SerialInterface = "OBD",
    // J2534Interface = "OBD" via masquerade, EnetInterface = "ENET",
    // GatewayClient = whatever its server returned at connect time) all
    // surface as empty string through this adapter shim.
    const typeValue = fwd.interfaceType ?? fwd.type;
    if (typeValue !== undefined) adapter.interfaceType = typeValue;
    const versionValue = fwd.interfaceVersion ?? fwd.version;
    if (versionValue !== undefined) adapter.interfaceVersion = versionValue;
    return adapter;
  }

  /**
   * Execute a job and return all emitted result sets.
   *
   * Multi-record jobs (e.g. `FS_LESEN` reading N fault entries) emit one set
   * per record via the `enewset` opcode. Each set is one row, fields repeat
   * across sets. Single-record jobs return a single-element array.
   */
  async executeJob(
    jobName: string,
    options?: { params?: (string | Uint8Array)[]; timeout?: number },
  ): Promise<EdiabasJobResult[][]> {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    // Auto-run INITIALISIERUNG before the first user job so the SGBD has a
    // chance to set up comm parameters / wake the ECU. Skip if the user is
    // explicitly running INITIALISIERUNG, or if the SGBD doesn't define it,
    // or if this is a virtual/system job whose name starts with "_".
    const isExplicitIdent = jobName.toUpperCase() === "IDENTIFIKATION";
    if (
      !this.initialized &&
      !jobName.startsWith("_") &&
      jobName.toUpperCase() !== "INITIALISIERUNG" &&
      this.hasJob("INITIALISIERUNG")
    ) {
      try {
        await this.runJobInternal("INITIALISIERUNG", []);
      } finally {
        // Mark initialized whether or not the init job succeeded; if it failed
        // hard, the underlying error (timeout, IFH_*) will surface on the
        // user's job too — no need to re-run on every executeJob call.
        this.initialized = true;
      }
      // After auto-init, run IDENTIFIKATION on .grp loads so VARIANTE
      // in systemResults resolves to the matched .prg variant.
      //
      // Skip when the user *explicitly* asked for IDENTIFIKATION — their
      // own call below IS the IDENT, and auto-running it here would (a)
      // execute IDENT twice, and (b) trigger a swap to the resolved
      // variant's .prg, so the user's call would then run on the wrong
      // bytecode (the .prg's IDENTIFIKATION instead of the .grp's,
      // which has materially different opcodes and tripped a decode
      // error). The post-job hook below handles the swap from the
      // user's IDENT results instead.
      if (!isExplicitIdent) {
        await this.runIdentAfterInit();
      }
    }

    log.debug(`Executing job: ${jobName}`);

    // Setup parameters. EDIABAS exposes two distinct param channels —
    // strings (read by `pari` / `pars`) and binary buffers (read by
    // `pary` / `parb` / `parw` / `parl` / `parr`). Callers indicate
    // which one they mean by the element type: `Uint8Array` routes to
    // `ParameterSet.binaryPayload`, anything else (typically a string)
    // routes to the per-index `parameters` map. Mixing both shapes in
    // a single call is supported — the binbuf payload is shared across
    // all `parY` reads while the string channel is per-position.
    const parameters = new ParameterSet();
    if (options?.params) {
      for (let i = 0; i < options.params.length; i++) {
        parameters.set(i, paramToEntry(options.params[i]));
      }
    }

    // Build the comm adapter and interpreter for this job.
    const interpreter = new Interpreter(this.prg);
    const execOptions: ExecutionOptions = {
      parameters,
      communicationInterface: this.buildCommAdapter(),
    };

    try {
      const sets = await interpreter.execute(jobName, execOptions);
      const mapped = sets.map((set) =>
        set.map((r: JobResult) => ({
          name: r.name,
          type: r.type,
          value: r.value,
          unit: r.unit,
          comment: r.comment,
        }))
      );
      // Capture JOB_STATUS into systemResults so by-name lookups (incl.
      // INPA scripts doing INP1apiResultText("JOB_STATUS", 0, …)) hit
      // the right value without needing to know which set the job
      // emitted it in. Scan in reverse so the most recent emission
      // wins, matching the BEST2 _resultDict order.
      for (let i = mapped.length - 1; i >= 0; i--) {
        const status = mapped[i].find(
          (r) => r.name.toUpperCase() === "JOB_STATUS"
        );
        if (status) {
          this.systemResults.set("JOB_STATUS", status);
          break;
        }
      }
      // If the user just ran INITIALISIERUNG explicitly (auto-init
      // didn't fire because jobName === "INITIALISIERUNG"), chain
      // IDENTIFIKATION now so .grp variant resolution still happens.
      // runIdentAfterInit is idempotent — if auto-init already ran
      // it, this is a no-op.
      if (jobName.toUpperCase() === "INITIALISIERUNG") {
        this.initialized = true;
        await this.runIdentAfterInit();
      }
      // If the user ran IDENTIFIKATION explicitly on a .grp, do the
      // post-IDENT variant swap here instead of via runIdentAfterInit.
      // That way the user's call runs on the .grp bytecode (correct
      // for variant resolution) AND subsequent jobs see the swapped
      // .prg — same end state as the auto-chain, without the double-
      // exec that crashed when run against the .prg's IDENTIFIKATION.
      if (
        isExplicitIdent &&
        this.prg?.header.version === 0 &&
        !this.identRan
      ) {
        this.identRan = true;
        let variantName: string | undefined;
        for (const set of mapped) {
          for (const r of set) {
            if (r.name.toUpperCase() === "VARIANTE" && r.value) {
              variantName = String(r.value);
            }
          }
        }
        if (variantName) {
          const groupBaseName = stripExtension(basenameOf(this.prgPath ?? "")).toLowerCase();
          if (groupBaseName) {
            this.groupMappingCache.set(groupBaseName, variantName.toLowerCase());
          }
          await this.swapToVariant(variantName);
        }
      }
      return mapped;
    } catch (err) {
      if (err instanceof EdiabasError) {
        throw err;
      }
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Job execution failed: ${(err as Error).message}`
      );
    }
  }

  /**
   * Connect to ECU (if using real hardware)
   */
  async connect(): Promise<void> {
    if (!this.commInterface) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No communication interface configured"
      );
    }
    await this.commInterface.connect();
  }

  /**
   * Disconnect from ECU
   */
  async disconnect(): Promise<void> {
    if (this.commInterface?.isConnected()) {
      await this.commInterface.disconnect();
    }
    // Force the next executeJob to run INITIALISIERUNG again on a fresh connection.
    this.initialized = false;
  }

  /**
   * Check if connected to ECU
   */
  isConnected(): boolean {
    return this.commInterface?.isConnected() ?? false;
  }

  /**
   * Get loaded SGBD info
   */
  getSgbdInfo(): { path: string; jobs: number; tables: number } | null {
    if (!this.prg || !this.prgPath) {
      return null;
    }
    return {
      path: this.prgPath,
      jobs: this.prg.jobs.length,
      tables: this.prg.tables.length,
    };
  }
}
