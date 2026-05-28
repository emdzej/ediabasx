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
   * Have OpenPort echo TX back as RX. Off by default — EdiabasInterface
   * expects clean ECU-only responses. The j2534 DS2 example uses
   * loopback=1 for diagnostic visibility; we don't.
   */
  loopback?: boolean;
  /** Per-poll receive timeout in ms. */
  readTimeoutMs?: number;
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

  private readonly cfg: {
    protocol: J2534Protocol;
    baudRate: number;
    defaultBatteryMv: number;
    loopback: boolean;
    readTimeoutMs: number;
  };
  private readonly transportSpec: J2534Transport | J2534TransportSpec;
  private lastVbattMv: number;

  constructor(config: J2534InterfaceConfig) {
    super();
    this.transportSpec = config.transport;
    this.cfg = {
      protocol: config.protocol ?? "ds2",
      baudRate: config.baudRate ?? 9600,
      defaultBatteryMv: config.defaultBatteryMv ?? 12_000,
      loopback: config.loopback ?? false,
      readTimeoutMs: config.readTimeoutMs ?? 1000
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
      this.activeProtocol === undefined
    ) {
      throw new Error("J2534Interface.send called before connect()");
    }
    const msg = this.createMsgFn(this.activeProtocol, Array.from(data));
    await this.device.passThruWriteMsgs(this.channelId, [msg], 1000);
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    if (!this.device || this.channelId === undefined) {
      throw new Error("J2534Interface.receive called before connect()");
    }
    const deadline = Date.now() + (timeoutMs ?? this.cfg.readTimeoutMs);
    // Loop until we get a message or the caller's deadline expires.
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
        if (msgs.length > 0) {
          const m = msgs[0]!;
          return new Uint8Array(m.data.subarray(0, m.dataSize));
        }
      } catch {
        // ERR_BUFFER_EMPTY — keep polling until deadline
      }
    }
    return new Uint8Array(0);
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
      // DS2 wire: 9600/8E1. Aggressive inter-byte mins — DS2 ECUs
      // hold the line idle between bytes only briefly. Values copied
      // from the j2534 repo's DS2 example which round-trips MS43.
      list.push({ parameter: ConfigParam.PARITY, value: PARITY_EVEN });
      list.push({ parameter: ConfigParam.DATA_BITS, value: 0 }); // 0 = 8 bits (J2534 convention)
      list.push({ parameter: ConfigParam.P1_MAX, value: 1 });
      list.push({ parameter: ConfigParam.P3_MIN, value: 1 });
      list.push({ parameter: ConfigParam.P4_MIN, value: 0 });
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
