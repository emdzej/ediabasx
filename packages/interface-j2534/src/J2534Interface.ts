import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";
// Types only — erased at compile time, no runtime import.
import type {
  IoctlId as IoctlIdType,
  PassThruMsg,
  Protocol as ProtocolType,
  SConfig,
  Transport as J2534Transport
} from "@emdzej/j2534-types";
import type { J2534Device } from "@emdzej/j2534-driver";

/**
 * Which BMW protocol the upper layer expects to talk. The J2534 device
 * just shuttles bytes; this picks the right Protocol + ConnectFlag combo
 * on the OpenPort side.
 *
 * - `ds2`: BMW proprietary over K-line. ISO9141 channel + NO_CHECKSUM +
 *   K_LINE_ONLY. 8/EVEN/1 parity. Validated against MS43 in the j2534
 *   repo (`examples/ds2/`).
 * - `kwp`: KWP2000 fast-init over K-line. ISO14230 channel + K_LINE_ONLY.
 *   Caller delivers full KWP frames (header + length + payload + checksum).
 * - `can`: raw CAN (11-bit). Caller delivers framed CAN messages; ISO-TP
 *   segmentation is the upper layer's responsibility (same as today's
 *   serial path with `SerialProtocols.IsoTp`).
 */
export type J2534Protocol = "ds2" | "kwp" | "can";

/**
 * How to construct the J2534 transport when the interface connects.
 * The factory passes a lazy spec so we don't have to import (ESM-only)
 * j2534 modules synchronously from CJS-compiled ediabasx code — the
 * dynamic `import()` works in either module system.
 */
export type J2534TransportSpec =
  | { kind: "instance"; transport: J2534Transport }
  | { kind: "serial"; port?: string }
  | { kind: "usb" };

export interface J2534InterfaceConfig {
  /** Already-built Transport, OR a spec we resolve lazily in connect(). */
  transport: J2534Transport | J2534TransportSpec;
  protocol?: J2534Protocol;
  /** K-line baud rate. DS2/KWP standard is 9600. Ignored for CAN. */
  baudRate?: number;
  /** Default battery voltage in mV when the device can't read it. */
  defaultBatteryMv?: number;
  /**
   * Whether OpenPort surfaces our own TX bytes on the RX stream. We
   * default to `true` because that's the configuration the j2534
   * repo's DS2 example (`examples/ds2/src/index.ts`) validated against
   * MS43 — on K-line (half-duplex by physics) the OpenPort firmware
   * doesn't reliably strip the echo even with LOOPBACK=0, so the safer
   * pattern is "let it through, filter on the host side". The
   * interface's `receive()` does that filtering for you.
   */
  loopback?: boolean;
  /** Per-poll receive timeout in ms. */
  readTimeoutMs?: number;
  /**
   * Host-side inter-byte delay (ms) inserted between consecutive
   * bytes of a TX. Workaround for OpenPort 2.0 firmware silently
   * ignoring `P4_MIN`: when > 0, send() issues one passThruWriteMsgs
   * per byte and sleeps this long between them, so the cluster's
   * UART RX gets the gaps it would naturally see from a K+DCAN
   * cable (where FTDI's USB chunking provides ~3-5ms). 0 disables
   * the workaround (fast ECUs like MS43 don't need it).
   */
  hostInterByteMs?: number;
}

const PARITY_NONE = 0;
const PARITY_EVEN = 2;

/**
 * BMW-flavoured EdiabasInterface backed by a Tactrix OpenPort 2.0 via
 * the J2534 PassThru API.
 *
 * Boundary of responsibility: this interface delivers / receives whole
 * frames as the upper EdiabasX layer assembles them (DS2 packets, KWP
 * frames, raw CAN). It does NOT do any framing of its own. The J2534
 * device handles bit timing, parity, K-line voltage, programming pin,
 * and frame-level integrity — that's what eliminates the per-byte
 * UART jitter that K+DCAN cables introduce.
 *
 * The j2534 packages are ESM-only so we lazy-import them in `connect()`.
 * Keeps `createInterface()` synchronous and lets a CJS-compiled
 * ediabasx host transitively load this package without throwing
 * ERR_PACKAGE_PATH_NOT_EXPORTED at import time.
 */
export class J2534Interface extends EdiabasInterface {
  // Resolved lazily inside connect(); typing kept loose to avoid a
  // static value import of the (ESM-only) j2534 driver from this file.
  private device?: J2534Device;
  private channelId?: number;
  private activeProtocol?: ProtocolType;
  private ioctlEnum?: typeof IoctlIdType;
  private createMsgFn?: (
    protocol: ProtocolType,
    data: number[],
    txFlags?: number
  ) => PassThruMsg;

  // Mutable on purpose — `setCommParameter` may rebuild the channel at a
  // different baud rate when INITIALISIERUNG asks for one. The other
  // fields stay constant within a session.
  private readonly cfg: {
    protocol: J2534Protocol;
    baudRate: number;
    defaultBatteryMv: number;
    loopback: boolean;
    readTimeoutMs: number;
    hostInterByteMs: number;
  };
  private readonly transportSpec: J2534Transport | J2534TransportSpec;
  private activeFlags = 0;
  private lastVbattMv: number;

  /**
   * Wall-clock time (ms) when receive() last returned a non-echo
   * frame. Used to enforce ParRegenTime (the SGBD-declared minimum
   * idle between ECU response end and our next request) host-side,
   * mirroring Ds2Session.sendRequest() in interface-serial. Slow BMW
   * ECUs (cluster, IKE) need this gap; the firmware's P3_MIN appears
   * to be clamped to a useless value and can't enforce it.
   */
  private lastResponseAtMs = 0;
  /** SGBD's ParRegenTime (param[6]) from the most recent setpar. */
  private regenTimeMs = 0;

  // `xawlen` (set answer lengths) and `xreps` (set repeat counter)
  // land here. J2534 handles framing + retries in hardware, so the
  // values are informational only — storing them keeps the interpreter
  // happy.
  //
  // The `Ediabas` wrapper builds a property-less adapter object before
  // passing the interface to the interpreter, so a bare property
  // wouldn't survive (the interpreter's `"commAnswerLen" in iface`
  // fallback never sees it). Expose explicit method shims so the
  // adapter forwards them via its `if (fwd.setX)` checks.
  commAnswerLen: number[] = [];
  commRepeats = 0;

  setAnswerLengths(lengths: number[]): void {
    this.commAnswerLen = lengths;
  }

  setAnswerLength(length: number): void {
    this.commAnswerLen = [length];
  }

  setRepeatCounter(count: number): void {
    this.commRepeats = count;
  }

  /**
   * Most recent bytes we transmitted. `receive()` uses this to drop
   * the K-line echo (half-duplex wire physics: our TX always shows up
   * on RX). OpenPort's LOOPBACK config controls whether the device
   * surfaces the echo at the J2534 layer — empirically with LOOPBACK=1
   * it does, and we filter here.
   */
  private lastTxBytes?: Uint8Array;

  /**
   * DS2 framing state — populated by `setCommParameter` from the
   * INITIALISIERUNG parameters. When `dsConcept` is one of the DS2
   * concept IDs AND `checksumByUser` is false, the SGBD hands us
   * `[addr][len][cmd...]` and expects the wire layer to append a
   * single-byte XOR checksum. SerialInterface does this via
   * `Ds2Session.sendRequest`; we do the same here.
   *
   * Concept 0 = unset (we won't touch the buffer).
   */
  private dsConcept = 0;
  private checksumByUser = false;

  /**
   * Opt-in TX/RX/event logger gated on `EDIABASX_VERBOSE=1` (Node-only;
   * `process.env` is guarded). Matches the same env knob
   * SerialInterface uses so the operator can flip one switch and see
   * both interfaces' on-wire behaviour. Outputs to stderr so stdout
   * stays clean for parseable job output.
   */
  private trace(
    tag: "tx" | "rx" | "rx:echo" | "rx:empty" | "setpar" | "rebuild" | "event" | "setconfig",
    message: string,
    data?: Uint8Array
  ): void {
    if (typeof process === "undefined" || process.env?.EDIABASX_VERBOSE !== "1") return;
    const hex = data
      ? Array.from(data)
          .map((b) => b.toString(16).padStart(2, "0"))
          .join(" ")
      : "";
    process.stderr.write(`[j2534:${tag}] ${message}${hex ? " | " + hex : ""}\n`);
  }

  constructor(config: J2534InterfaceConfig) {
    super();
    this.transportSpec = config.transport;
    this.cfg = {
      protocol: config.protocol ?? "ds2",
      baudRate: config.baudRate ?? 9600,
      defaultBatteryMv: config.defaultBatteryMv ?? 12_000,
      loopback: config.loopback ?? true,
      readTimeoutMs: config.readTimeoutMs ?? 1000,
      hostInterByteMs: config.hostInterByteMs ?? 0
    };
    this.lastVbattMv = this.cfg.defaultBatteryMv;
  }

  // ── Lifecycle ────────────────────────────────────────────────────

  async connect(): Promise<void> {
    if (this.connected) return;

    // Resolve the j2534 packages dynamically so a CJS ediabasx host can
    // still pull this module in without ERR_PACKAGE_PATH_NOT_EXPORTED.
    const driverMod = await import("@emdzej/j2534-driver");
    const typesMod = await import("@emdzej/j2534-types");
    this.ioctlEnum = typesMod.IoctlId;
    this.createMsgFn = driverMod.createMsg;

    const transport = await this.resolveTransport();
    this.device = new driverMod.J2534Device({ transport });

    await this.device.passThruOpen();

    const { protocol, flags } = this.resolveProtocolFlags(typesMod);
    this.activeProtocol = protocol;
    this.activeFlags = flags;
    this.channelId = await this.device.passThruConnect(
      protocol,
      flags,
      this.cfg.baudRate
    );

    // Pass-all filter so the channel surfaces every frame.
    const mask = this.createMsgFn(protocol, [0x00]);
    const pattern = this.createMsgFn(protocol, [0x00]);
    await this.device.passThruStartMsgFilter(
      this.channelId,
      typesMod.FilterType.PASS_FILTER,
      mask,
      pattern
    );

    // Diagnostic: read OpenPort's defaults BEFORE we touch SET_CONFIG.
    // Helps tell whether the firmware's defaults are already wrong or
    // our SET_CONFIG is making things worse.
    try {
      const params = [
        { name: "P1_MAX", id: typesMod.ConfigParam.P1_MAX },
        { name: "P2_MIN", id: typesMod.ConfigParam.P2_MIN },
        { name: "P2_MAX", id: typesMod.ConfigParam.P2_MAX },
        { name: "P3_MIN", id: typesMod.ConfigParam.P3_MIN },
        { name: "P3_MAX", id: typesMod.ConfigParam.P3_MAX },
        { name: "P4_MIN", id: typesMod.ConfigParam.P4_MIN },
        { name: "P4_MAX", id: typesMod.ConfigParam.P4_MAX },
        { name: "PARITY", id: typesMod.ConfigParam.PARITY },
        { name: "LOOPBACK", id: typesMod.ConfigParam.LOOPBACK },
      ];
      const probe = params.map((p) => ({ parameter: p.id, value: 0 }));
      const got = (await this.device.passThruIoctl(
        this.channelId,
        typesMod.IoctlId.GET_CONFIG,
        probe
      )) as SConfig[];
      const summary = params.map((p, i) => `${p.name}=${got[i]?.value ?? "?"}`).join(" ");
      this.trace("setconfig", `defaults ${summary}`);
    } catch {
      // Not all firmware versions answer GET_CONFIG cleanly — diagnostic only.
    }

    // Apply channel-specific timing / parity / loopback.
    const configList = this.buildSConfigList(typesMod);
    if (configList.length > 0) {
      await this.device.passThruIoctl(
        this.channelId,
        typesMod.IoctlId.SET_CONFIG,
        configList
      );
    }

    this.connected = true;
  }

  async disconnect(): Promise<void> {
    if (!this.connected) return;
    try {
      if (this.device && this.channelId !== undefined) {
        await this.device.passThruDisconnect(this.channelId);
      }
    } finally {
      this.channelId = undefined;
      try {
        if (this.device) await this.device.passThruClose();
      } catch {
        // swallow — we're closing anyway
      }
      this.connected = false;
    }
  }

  // ── Data path ────────────────────────────────────────────────────

  async send(data: Uint8Array): Promise<void> {
    if (
      !this.device ||
      this.channelId === undefined ||
      !this.createMsgFn ||
      this.activeProtocol === undefined ||
      !this.ioctlEnum
    ) {
      throw new Error("J2534Interface.send called before connect()");
    }
    // Honour ParRegenTime — wait at least `regenTimeMs` since the
    // last received ECU response before sending the next request.
    // Mirrors Ds2Session.sendRequest() in interface-serial. Slow BMW
    // K-line ECUs (cluster, IKE) require this gap; the firmware's
    // J2534 P3_MIN handling appears insufficient.
    if (this.lastResponseAtMs > 0 && this.regenTimeMs > 0) {
      const elapsed = Date.now() - this.lastResponseAtMs;
      if (elapsed < this.regenTimeMs) {
        await new Promise<void>((r) => setTimeout(r, this.regenTimeMs - elapsed));
      }
    }

    // Drain stale RX bytes (echo leftovers, partial prior frames)
    // before the next transmission. Mirrors `Ds2Session.purge()` in
    // interface-serial — without this, OpenPort can deliver leftover
    // bytes from the previous transaction as if they were the new
    // response, and subsequent reads time out empty.
    try {
      await this.device.passThruIoctl(
        this.channelId,
        this.ioctlEnum.CLEAR_RX_BUFFER
      );
    } catch {
      // Best-effort — some firmware versions reject this on
      // ISO9141. Falling through is fine; receive() still gets a
      // chance via its echo filter.
    }
    // DS2 wire framing: when concept is set + checksumByUser is false,
    // the SGBD sends us `[addr][len][cmd...]` and expects us to append
    // a single-byte XOR over the whole frame. Mirrors
    // `Ds2Session.sendRequest` in interface-serial.
    const needsChecksum =
      this.cfg.protocol === "ds2" && this.dsConcept !== 0 && !this.checksumByUser;
    let toSend: Uint8Array;
    if (needsChecksum) {
      const cs = calcXorChecksum(data);
      toSend = new Uint8Array(data.length + 1);
      toSend.set(data, 0);
      toSend[data.length] = cs;
    } else {
      toSend = new Uint8Array(data);
    }
    // Snapshot the bytes actually placed on the wire so receive()'s
    // echo filter sees the full frame (incl. checksum).
    this.lastTxBytes = toSend;
    this.trace(
      "tx",
      needsChecksum ? `${toSend.length} bytes (incl XOR cs)` : `${toSend.length} bytes`,
      toSend
    );

    // OpenPort 2.0 firmware accepts SET_CONFIG with P4_MIN but is
    // known not to actually insert inter-byte gaps on K-line. K+DCAN
    // (FTDI passthrough) gets the gap for free from USB chunking,
    // which slower ECUs (KMB clusters reading EEPROM) depend on.
    // Workaround: when `hostInterByteMs > 0`, split the TX into
    // per-byte passThruWriteMsgs calls so the firmware sees N small
    // frames separated by USB round-trip latency on our side.
    const hostInterByteMs = this.cfg.hostInterByteMs;
    if (hostInterByteMs > 0 && toSend.length > 1 &&
        (this.cfg.protocol === "ds2" || this.cfg.protocol === "kwp")) {
      for (let i = 0; i < toSend.length; i++) {
        const single = this.createMsgFn(this.activeProtocol, [toSend[i]]);
        await this.device.passThruWriteMsgs(this.channelId, [single], 1000);
        if (i < toSend.length - 1) {
          await new Promise<void>((r) => setTimeout(r, hostInterByteMs));
        }
      }
    } else {
      const msg = this.createMsgFn(this.activeProtocol, Array.from(toSend));
      await this.device.passThruWriteMsgs(this.channelId, [msg], 1000);
    }

    // passThruWriteMsgs queues the USB write but returns before
    // OpenPort has finished clocking bytes onto the K-line. Wait the
    // wire-time so the device's TX-to-RX direction switch completes
    // before we start polling for the ECU's reply; otherwise the
    // first bytes of a fast response can land while the line driver
    // is still in TX mode and get lost. Mirrors `Ds2Session.sendRequest`
    // in interface-serial (its `byteTime * length + 5ms` DTR wait).
    if (this.cfg.protocol === "ds2" || this.cfg.protocol === "kwp") {
      const bitsPerByte = 11; // start + 8 data + parity + stop
      const wireTimeMs = Math.ceil((1000 / this.cfg.baudRate) * bitsPerByte * toSend.length);
      const switchGuardMs = 5;
      await new Promise<void>((resolve) => setTimeout(resolve, wireTimeMs + switchGuardMs));
    }
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    if (!this.device || this.channelId === undefined) {
      throw new Error("J2534Interface.receive called before connect()");
    }
    const deadline = Date.now() + (timeoutMs ?? this.cfg.readTimeoutMs);
    // Loop until we get a NON-ECHO message or the deadline expires.
    // passThruReadMsgs blocks for its own per-call timeout; we slice
    // the deadline so the host can still observe shorter timeouts.
    while (Date.now() < deadline) {
      const remaining = Math.max(1, deadline - Date.now());
      try {
        const msgs = await this.device.passThruReadMsgs(
          this.channelId,
          1,
          Math.min(remaining, this.cfg.readTimeoutMs)
        );
        for (const m of msgs) {
          const bytes = new Uint8Array(m.data.subarray(0, m.dataSize));
          if (this.isTxEcho(m, bytes)) {
            this.trace("rx:echo", `${bytes.length} bytes (rxStatus=0x${m.rxStatus.toString(16)})`, bytes);
            continue;
          }
          this.trace("rx", `${bytes.length} bytes (rxStatus=0x${m.rxStatus.toString(16)})`, bytes);
          this.lastResponseAtMs = Date.now();
          return bytes;
        }
      } catch {
        // ERR_BUFFER_EMPTY — keep polling until deadline
      }
    }
    this.trace("rx:empty", `deadline expired after ${timeoutMs ?? this.cfg.readTimeoutMs}ms`);
    return new Uint8Array(0);
  }

  /**
   * Is this message the wire echo of our last `send()` call, rather
   * than an ECU response?
   *
   * Two signals:
   *   1. `rxStatus & TX_MSG_TYPE (0x0001)` — J2534 standard flag the
   *      device sets when the surfaced message is the host's own TX
   *      seen via loopback. Most authoritative.
   *   2. Byte-equality with `lastTxBytes` — fallback when the device
   *      doesn't set the flag (some OpenPort firmware revisions
   *      surface the K-line echo as if it were a real RX frame).
   *
   * The j2534 repo's DS2 example (validated against MS43) uses the
   * byte-equality fallback exclusively, so we keep it as a belt-and-
   * braces second check.
   */
  private isTxEcho(m: PassThruMsg, bytes: Uint8Array): boolean {
    // J2534 TX_MSG_TYPE = 0x0001 (defined in @emdzej/j2534-types
    // RxStatus enum but we avoid the value-import for the ESM/CJS
    // bridge reasons explained above).
    if ((m.rxStatus & 0x0001) !== 0) return true;
    const tx = this.lastTxBytes;
    if (!tx || tx.length !== bytes.length) return false;
    for (let i = 0; i < tx.length; i++) {
      if (tx[i] !== bytes[i]) return false;
    }
    return true;
  }

  // ── xsetpar — INITIALISIERUNG asks us to reconfigure ─────────────

  /**
   * BMW SGBDs call `xsetpar` from INITIALISIERUNG to declare the
   * protocol concept + timings they need on the wire. We treat this
   * as the SGBD's intent overriding our connect-time config:
   *
   *   - **Same as connect** → no-op (SGBD agrees with us).
   *   - **Baud rate change** → tear down + rebuild the J2534 channel.
   *   - **Timing change** → translate to a J2534 `SET_CONFIG` IOCTL.
   *   - **Concept we don't yet support** → store the array (so
   *     read-back works) and log a warning.
   *
   * Schema (DS2 concepts 0x0001 / 0x0005 / 0x0006, mirrors
   * `SerialInterface.setCommParameter` lines 582-682):
   *
   *   [0] concept id
   *   [1] baud rate
   *   [2..4] addressing / init (handled by BEST2 itself)
   *   [5] ParTimeoutStd     — standard response timeout (ms)
   *   [6] ParRegenTime      — idle time before next request (ms)
   *   [7] ParTimeoutTelEnd  — telegram-end inter-byte timeout (ms)
   *   [8] ParInterbyteTime  — request inter-byte time (ms)
   *   [9] checksum mode     — 0=auto, !=0=user supplies
   */
  async setCommParameter(parameters: number[]): Promise<void> {
    this._commParameter = parameters;
    this.trace(
      "setpar",
      `concept=0x${(parameters[0] ?? 0).toString(16).padStart(4, "0")} count=${parameters.length}`,
      new Uint8Array(parameters.map((p) => p & 0xff))
    );
    if (parameters.length === 0) return;
    if (
      !this.device ||
      this.channelId === undefined ||
      !this.ioctlEnum ||
      this.activeProtocol === undefined
    ) {
      // Connect hasn't run yet — INITIALISIERUNG calling before
      // connect() shouldn't happen in normal flow, but defend.
      return;
    }

    const concept = parameters[0] >>> 0;
    const isDS2 = concept === 0x0001 || concept === 0x0005 || concept === 0x0006;

    if (!isDS2) {
      // KWP / CAN concepts not yet translated. Leave the channel as-is
      // — the values we set in connect() are usually close enough for
      // a first read. If a future SGBD needs more, decode here.
      return;
    }

    if (parameters.length < 8) return;
    const baudRate = parameters[1] || this.cfg.baudRate;
    const timeoutStdMs = parameters[5] || 0;
    const regenTimeMs = parameters[6] || 0;
    // Cache the regen time for host-side enforcement in send().
    this.regenTimeMs = regenTimeMs;
    const telegramEndTimeoutMs = parameters[7] || 0;
    const interByteTimeMs = parameters.length >= 9 ? (parameters[8] || 0) : 0;

    // Lock in the DS2 framing state so `send()` knows whether to
    // append a wire-level XOR checksum. The 10th parameter (when
    // present) flips ownership: 0 / absent → wire layer appends the
    // checksum; !=0 → SGBD already included it.
    this.dsConcept = concept;
    this.checksumByUser = parameters.length >= 10 ? parameters[9] !== 0 : false;

    // Baud rate change → channel rebuild. J2534's SET_CONFIG doesn't
    // touch link speed; only PassThruConnect does. If the SGBD agreed
    // with us, baudRate === this.cfg.baudRate → fast path skip.
    if (baudRate > 0 && baudRate !== this.cfg.baudRate) {
      await this.rebuildChannel(baudRate);
    }

    // Timing knobs that DO map to SET_CONFIG. Values in ms.
    const typesMod = await import("@emdzej/j2534-types");
    const list: SConfig[] = [];
    // P2_MAX intentionally NOT set: Tactrix's own DLL hardcodes a
    // blacklist that drops SET_CONFIG calls containing P2_MAX (along
    // with P2_MIN, P3_MAX, P4_MAX, P1_MIN). The firmware accepts the
    // value via the `ats` USB cmd if we send it directly — but stores
    // it as 25 of-some-internal-unit which appears to be a *short*
    // timeout, breaking slow K-line ECUs (cluster, IKE) whose
    // responses arrive after that window. Leaving the firmware to
    // use its built-in default — which presumably works since BMW's
    // own J2534-based Windows tooling consumes OpenPort via the
    // Tactrix DLL that never sends P2_MAX. Verified via Ghidra
    // decompile of op20pt32.dll PassThruIoctl.
    void timeoutStdMs;
    if (regenTimeMs > 0) {
      // ParRegenTime → P3_MIN (idle between response and next request).
      list.push({ parameter: typesMod.ConfigParam.P3_MIN, value: regenTimeMs });
    }
    if (telegramEndTimeoutMs > 0) {
      // ParTimeoutTelEnd → P1_MAX (max ECU inter-byte gap inside a
      // frame). Slow ECUs (cluster EEPROM reads) take longer between
      // bytes than the OpenPort default of 1ms; honour the SGBD's
      // declared timeout so the device doesn't split single responses
      // into multiple fragments.
      list.push({ parameter: typesMod.ConfigParam.P1_MAX, value: telegramEndTimeoutMs });
    }
    if (interByteTimeMs > 0) {
      // ParInterbyteTime → P4_MIN (tester inter-byte time).
      list.push({ parameter: typesMod.ConfigParam.P4_MIN, value: interByteTimeMs });
    }
    if (list.length > 0) {
      await this.device.passThruIoctl(
        this.channelId,
        this.ioctlEnum.SET_CONFIG,
        list
      );

      // Read back to confirm OpenPort actually retained the values.
      // Some firmware accepts SET_CONFIG with an ACK but silently
      // ignores certain params (P4_MIN is a known offender on
      // OpenPort 2.0). The trace shows applied vs requested so the
      // operator can tell the difference.
      try {
        const probe = list.map((s) => ({ parameter: s.parameter, value: 0 }));
        const got = (await this.device.passThruIoctl(
          this.channelId,
          this.ioctlEnum.GET_CONFIG,
          probe
        )) as SConfig[];
        const summary = list
          .map((s, i) => {
            const back = got[i]?.value;
            return `param${s.parameter}=${s.value}${back !== undefined && back !== s.value ? `(got ${back})` : ""}`;
          })
          .join(" ");
        this.trace("setconfig", summary);
      } catch {
        // GET_CONFIG isn't critical; ignore failures.
      }
    }
  }

  /**
   * Stored parameter array. Some BEST2 opcodes also read it back; if
   * the interpreter does so we satisfy it from this field via the
   * matching getter.
   */
  private _commParameter: number[] = [];
  get commParameter(): number[] {
    return this._commParameter;
  }
  set commParameter(v: number[]) {
    // Allow the interpreter's `"commParameter" in interfaceClass`
    // fallback to write here too. Calling setCommParameter() is the
    // preferred path; this just stores without reconfiguring.
    this._commParameter = v;
  }

  private async rebuildChannel(newBaudRate: number): Promise<void> {
    if (!this.device || this.channelId === undefined || this.activeProtocol === undefined) return;
    this.trace("rebuild", `${this.cfg.baudRate} → ${newBaudRate} baud`);
    await this.device.passThruDisconnect(this.channelId);
    this.channelId = await this.device.passThruConnect(
      this.activeProtocol,
      this.activeFlags,
      newBaudRate
    );
    this.cfg.baudRate = newBaudRate;

    // Reapply the pass-all filter — channels are stateless on
    // reconnect; we have to re-issue filters and SET_CONFIG.
    if (this.createMsgFn) {
      const mask = this.createMsgFn(this.activeProtocol, [0x00]);
      const pattern = this.createMsgFn(this.activeProtocol, [0x00]);
      const typesMod = await import("@emdzej/j2534-types");
      await this.device.passThruStartMsgFilter(
        this.channelId,
        typesMod.FilterType.PASS_FILTER,
        mask,
        pattern
      );
      const configList = this.buildSConfigList(typesMod);
      if (configList.length > 0) {
        await this.device.passThruIoctl(
          this.channelId,
          typesMod.IoctlId.SET_CONFIG,
          configList
        );
      }
    }
  }

  // ── EdiabasInterface ancillaries ─────────────────────────────────

  // "Port" state is a leftover from FTDI-cable accessors (DSR for
  // ignition detect etc.). J2534 doesn't expose them directly.
  getPort(): number {
    return 0;
  }
  setPort(): void {
    // no-op
  }

  get ignitionVoltage(): Promise<number> {
    // EdiabasLib reports IgnitionVoltage in mV; >6V means "on".
    return this.readVbatt();
  }

  get batteryVoltage(): Promise<number> {
    return this.readVbatt();
  }

  get loopTest(): number {
    return 0;
  }

  async setProgramVoltage(value: number): Promise<void> {
    if (!this.device) return;
    // EdiabasLib semantics: value in mV; forward to PassThru.
    // PassThru constants (VOLTAGE_OFF / SHORT_TO_GROUND) live in
    // @emdzej/j2534-types — operator passes raw mV here.
    const PIN_7_K_LINE = 7;
    await this.device.passThruSetProgrammingVoltage(PIN_7_K_LINE, value);
  }

  async rawData(request: Uint8Array): Promise<Uint8Array> {
    // K+DCAN raw-control telegrams aren't a J2534 concept. Some BEST
    // scripts call rawData() to probe adapter identity / set adapter
    // parameters — no equivalent on PassThru. Returning empty signals
    // "feature absent" to the BEST runtime.
    void request;
    return new Uint8Array(0);
  }

  async switchSiRelais(time: number): Promise<void> {
    // VS-2/3 SI relay. OpenPort has no equivalent output.
    void time;
  }

  // ── Helpers ──────────────────────────────────────────────────────

  private async resolveTransport(): Promise<J2534Transport> {
    const spec = this.transportSpec;
    // Already a Transport instance — common when the caller constructs
    // J2534Interface directly (tests, programmatic use).
    if (
      typeof (spec as J2534Transport).open === "function" &&
      typeof (spec as J2534Transport).read === "function"
    ) {
      return spec as J2534Transport;
    }
    const s = spec as J2534TransportSpec;
    if (s.kind === "instance") return s.transport;
    if (s.kind === "usb") {
      const mod = (await import("@emdzej/j2534-usb")) as {
        NodeUsbTransport: new () => J2534Transport;
      };
      return new mod.NodeUsbTransport();
    }
    if (s.kind === "serial") {
      const mod = (await import("@emdzej/j2534-serial")) as {
        SerialTransport: new (path?: string) => J2534Transport;
      };
      return new mod.SerialTransport(s.port);
    }
    throw new Error(`Unknown j2534 transport spec`);
  }

  private resolveProtocolFlags(
    typesMod: typeof import("@emdzej/j2534-types")
  ): { protocol: ProtocolType; flags: number } {
    const { Protocol, ConnectFlag } = typesMod;
    switch (this.cfg.protocol) {
      case "ds2":
        return {
          protocol: Protocol.ISO9141,
          flags:
            ConnectFlag.ISO9141_NO_CHECKSUM | ConnectFlag.ISO9141_K_LINE_ONLY
        };
      case "kwp":
        return {
          protocol: Protocol.ISO14230,
          flags: ConnectFlag.ISO9141_K_LINE_ONLY
        };
      case "can":
        return { protocol: Protocol.CAN, flags: 0 };
      default: {
        const _exhaustive: never = this.cfg.protocol;
        return _exhaustive;
      }
    }
  }

  private buildSConfigList(
    typesMod: typeof import("@emdzej/j2534-types")
  ): SConfig[] {
    const { ConfigParam } = typesMod;
    const list: SConfig[] = [];
    list.push({ parameter: ConfigParam.LOOPBACK, value: this.cfg.loopback ? 1 : 0 });

    if (this.cfg.protocol === "ds2") {
      // DS2 wire. Parity intentionally NOT forced: K+DCAN runs the
      // cluster at 8N1 (verified via SerialInterface trace), and the
      // SGBD's setpar doesn't say to use parity. Leaving PARITY at
      // the OpenPort firmware default keeps us aligned with the
      // working K+DCAN path.
      list.push({ parameter: ConfigParam.DATA_BITS, value: 0 }); // 0 = 8 bits (J2534 convention)
      list.push({ parameter: ConfigParam.P3_MIN, value: 1 });
      list.push({ parameter: ConfigParam.P4_MIN, value: 3 });
    } else if (this.cfg.protocol === "kwp") {
      // KWP standard timings — OpenPort firmware enforces sane
      // defaults; we just set parity none for KWP fast init.
      list.push({ parameter: ConfigParam.PARITY, value: PARITY_NONE });
      list.push({ parameter: ConfigParam.DATA_BITS, value: 0 });
    }

    return list;
  }

  /**
   * READ_VBATT via PassThru IOCTL. Device returns mV. On failure
   * (channel not yet open, IOCTL unsupported) fall back to the
   * configured default — EdiabasLib does the same for ENET cables
   * that can't physically measure UBatt.
   */
  private async readVbatt(): Promise<number> {
    if (!this.device || !this.ioctlEnum || this.channelId === undefined) {
      return this.lastVbattMv;
    }
    try {
      const result = await this.device.passThruIoctl(
        this.channelId,
        this.ioctlEnum.READ_VBATT
      );
      const value = typeof result === "number" ? result : Number(result);
      if (Number.isFinite(value) && value > 0) {
        this.lastVbattMv = value;
      }
    } catch {
      // Hold the previously-seen value rather than returning a sentinel.
    }
    return this.lastVbattMv;
  }
}

/** XOR all bytes — DS2 wire checksum. Mirrors `calcChecksumXor` in
 *  `interface-serial/src/kdcan/ds2.ts`. */
function calcXorChecksum(data: Uint8Array): number {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = (sum ^ data[i]) & 0xff;
  }
  return sum;
}
