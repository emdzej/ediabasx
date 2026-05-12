import { utf8ToCp1252 } from "@emdzej/ediabasx-core";
import { EdiabasInterface, EdiabasTimeoutError } from "@emdzej/ediabasx-interface-base";
import { IsoTpFrameTypes, parseIsoTpFrame } from "@emdzej/ediabasx-protocol-uds";
import { SerialTimeoutError } from "./errors";
// `NodeSerialTransport` is imported lazily inside the constructor so the
// browser bundle doesn't pull in `serialport` (a Node-only native dep).
// Browser consumers pass a `WebSerialTransport` via `config.transport`
// and never hit the fallback branch.
import {
  AdapterModes,
  AdapterWrappedTransport,
  DCAN_BAUD_RATE,
  DEFAULT_KWP2000_TIMERS,
  DcanSession,
  Ds2Session,
  Kwp2000Session,
  KwpProtocols,
  calcChecksumBmwFast as bmwFastChecksum,
  parseKeyBytes,
  Protocols,
  segmentIsoTpPayload,
  send5BaudInit,
  sendFastInit,
  switchToCanMode,
  type AdapterInfoState,
  type AdapterMode,
  type Ds2ConceptId,
  type KwpProtocol,
  type Kwp2000Timers
} from "./kdcan";
import {
  SerialCommParameterIds,
  SerialInitModes,
  SerialProtocols,
  type SerialCommParameterState,
  type SerialInitMode,
  type SerialInterfaceConfig,
  type SerialTransport,
  type SerialTransportConfig
} from "./types";

const DEFAULT_CONFIG = {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  timeoutMs: 5000,
  telegramEndTimeoutMs: 20,
  receiveBufferSize: 4096,
  p1DelayMs: 0,
  kwpModeSelectPayload: Uint8Array.from([0x10, 0x81]),
  kwpTesterPresentPayload: Uint8Array.from([0x3e, 0x00]),
  kwpWakeAddress: 0x33
} as const;

const SerialTiming = {
  p1Min: 0,
  p1Max: 20,
  p2Min: 25,
  p3Min: 55
} as const;

export class SerialInterface extends EdiabasInterface {
  private readonly config: Required<Omit<SerialInterfaceConfig, "transport" | "probeAdapterOnConnect">> & {
    probeAdapterOnConnect: boolean;
  };
  private readonly transport: SerialTransport;
  private lastSendAt: number | null = null;
  private lastReceiveAt: number | null = null;
  private lastByteSentAt: number | null = null;
  private ports = new Map<number, number>();
  private _loopTest = 0;
  private _programVoltage = 0;
  private _siRelaisTime = 0;
  private readonly commParameter: SerialCommParameterState = {};
  private answerLength: number | null = null;
  private kwpSession: Kwp2000Session | null = null;
  private klineProtocol: KwpProtocol | null = null;
  private klineKeyBytes: Uint8Array | null = null;
  private dcanSession: DcanSession | null = null;
  private ds2Session: Ds2Session | null = null;
  private ds2ConceptId: Ds2ConceptId | null = null;
  /**
   * Number of additional retries on transient send/receive failures. The BEST2
   * `xreps N` opcode lands here via the CommunicationInterface forwarder. C#
   * `EdInterfaceObd.ObdTrans` runs `retries+1` total attempts, breaking out only
   * on hard interface errors. Many BMW DS2 ECUs (notably MS43) only respond on
   * the second or third attempt for follow-up queries.
   */
  private commRepeats = 0;
  private adapterMode: AdapterMode = AdapterModes.Uart;
  /** When non-null, K-line writes are wrapped via K+DCAN adapter telegrams. */
  private adapterWrappedTransport: AdapterWrappedTransport | null = null;
  /** True once we've successfully polled adapter info on the active connection. */
  private adapterDetected = false;
  /**
   * True iff a K+DCAN-style adapter was detected (adapterType ≥ 2). When false, we
   * assume the cable is a passthrough FTDI and use raw bytes for K-line.
   */
  private isKDCanAdapter = false;
  /**
   * If process.env.EDIABASX_VERBOSE === "1", traces wire-level send/recv so the
   * user can debug a real K+DCAN bring-up. The logger is set during connect().
   */
  private verboseLogger?: (tag: "send" | "recv" | "error", message: string, data?: Uint8Array) => void;
  private adapterInfo: AdapterInfoState = this.createDefaultAdapterInfo();
  private receiveBuffer: number[] = [];
  private frequentModeActive = false;
  private frequentSendBuffer: Uint8Array | null = null;
  private frequentRecvBuffer: Uint8Array | null = null;
  private frequentTimer: ReturnType<typeof setInterval> | null = null;
  private frequentIntervalMs = 100;

  constructor(config: SerialInterfaceConfig) {
    super();
    const merged = {
      ...DEFAULT_CONFIG,
      ...config
    };

    this.config = {
      port: merged.port,
      baudRate: merged.baudRate,
      dataBits: merged.dataBits,
      parity: merged.parity,
      stopBits: merged.stopBits,
      timeoutMs: merged.timeoutMs,
      telegramEndTimeoutMs: merged.telegramEndTimeoutMs,
      receiveBufferSize: merged.receiveBufferSize,
      p1DelayMs: this.clampP1(merged.p1DelayMs),
      kwpModeSelectPayload: Uint8Array.from(merged.kwpModeSelectPayload),
      kwpTesterPresentPayload: Uint8Array.from(merged.kwpTesterPresentPayload),
      kwpWakeAddress: merged.kwpWakeAddress,
      probeAdapterOnConnect: config.probeAdapterOnConnect ?? false,
    };

    if (!merged.transport) {
      // No transport supplied. Used to fall back to `NodeSerialTransport`,
      // but that pulled `serialport` (a Node-only native dep) into the
      // browser bundle even for callers that never hit the fallback. Now
      // callers must construct a transport explicitly — Node consumers use
      // `NodeSerialTransport` from `@emdzej/ediabasx-interface-serial/node`,
      // browser consumers use `WebSerialTransport` from the main entry.
      throw new Error(
        "SerialInterface requires a `transport` — pass NodeSerialTransport (Node) or WebSerialTransport (browser)."
      );
    }
    this.transport = merged.transport;
  }

  async connect(): Promise<void> {
    if (this.connected) {
      return;
    }
    // If we'll probe the adapter, open at 115200 8N1 (K+DCAN command baud).
    // Otherwise honour the caller's UART config — that path supports plain FTDI
    // passthrough where the program drives baud/parity directly.
    const transportConfig: SerialTransportConfig = this.config.probeAdapterOnConnect
      ? { baudRate: 115200, dataBits: 8, parity: "none", stopBits: 1 }
      : {
          baudRate: this.config.baudRate,
          dataBits: this.config.dataBits,
          parity: this.config.parity,
          stopBits: this.config.stopBits,
        };
    await this.transport.configure(transportConfig);
    await this.transport.open(this.config.port);
    this.connected = true;

    // Guard process.env reads — this class is also used by the browser bundle
    // (via @emdzej/ediabasx-interface-serial in the web app) where `process`
    // may not exist. The verbose logger is opt-in via EDIABASX_VERBOSE=1 and
    // intentionally a Node-only diagnostic.
    if (typeof process !== "undefined" && process.env?.EDIABASX_VERBOSE === "1") {
      this.verboseLogger = (tag, message, data) => {
        const hex = data
          ? Array.from(data)
              .map((b) => b.toString(16).padStart(2, "0"))
              .join(" ")
          : "";
        process.stderr.write(`[serial:${tag}] ${message}${hex ? " | " + hex : ""}\n`);
      };
    }

    if (this.config.probeAdapterOnConnect) {
      try {
        const ok = await this.pollAdapterInfo(true);
        this.adapterDetected = ok && this.adapterInfo.adapterType >= 0;
        this.isKDCanAdapter = ok && this.adapterInfo.adapterType >= 0x0002;
        if (this.verboseLogger) {
          this.verboseLogger(
            "send",
            `adapter probe ${ok ? "ok" : "failed"} type=0x${this.adapterInfo.adapterType.toString(16)}` +
              ` version=0x${this.adapterInfo.adapterVersion.toString(16)}`
          );
        }
      } catch (error) {
        this.adapterDetected = false;
        this.isKDCanAdapter = false;
        if (this.verboseLogger) {
          this.verboseLogger("error", `adapter probe threw: ${(error as Error).message}`);
        }
      }

      // The probe opened the port at 115200 8N1 (K+DCAN command baud) so we
      // could talk to a smart adapter. If the probe failed — i.e. this is a
      // passthrough FTDI / K-line-transceiver cable — we now need to drop
      // back to the caller's configured baud so xsend bytes actually clock
      // out at the K-line speed (typically 9600/10400). Without this, every
      // xsend after connect garbles at the ECU and the script reads a
      // timeout / empty response (BMW INPA's symptom: "Steuergerät nicht
      // gefunden" because IDENTIFIKATION can't probe).
      if (!this.adapterDetected) {
        try {
          await this.transport.configure({
            baudRate: this.config.baudRate,
            dataBits: this.config.dataBits,
            parity: this.config.parity,
            stopBits: this.config.stopBits,
          });
          if (this.verboseLogger) {
            this.verboseLogger(
              "send",
              `passthrough fallback — reconfigured to ${this.config.baudRate} ` +
                `${this.config.dataBits}${this.config.parity[0].toUpperCase()}` +
                `${this.config.stopBits}`
            );
          }
        } catch (error) {
          if (this.verboseLogger) {
            this.verboseLogger(
              "error",
              `passthrough fallback reconfigure failed: ${(error as Error).message}`
            );
          }
        }
      }
    }
  }

  async disconnect(): Promise<void> {
    if (!this.connected) {
      return;
    }
    if (this.frequentModeActive) {
      await this.stopFrequent();
    }
    await this.transport.close();
    this.connected = false;
    this.kwpSession = null;
    this.klineProtocol = null;
    this.klineKeyBytes = null;
    this.dcanSession = null;
    this.ds2Session = null;
    this.ds2ConceptId = null;
    this.adapterWrappedTransport = null;
    this.adapterDetected = false;
    this.isKDCanAdapter = false;
    this.commRepeats = 0;
    this.adapterMode = AdapterModes.Uart;
    this.adapterInfo = this.createDefaultAdapterInfo();
    this.receiveBuffer = [];
  }

  async send(data: Uint8Array): Promise<void> {
    this.assertConnected();
    await this.enforceP3Timing();
    for (const value of data.values()) {
      await this.enforceP1Timing();
      await this.transport.write(Uint8Array.of(value));
      this.lastByteSentAt = this.now();
    }
    this.lastSendAt = this.now();
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    this.assertConnected();
    const timeout = timeoutMs ?? this.config.timeoutMs;
    try {
      const payload = await this.transport.read(
        this.config.receiveBufferSize,
        timeout
      );
      await this.enforceP2Timing();
      this.lastReceiveAt = this.now();
      return payload;
    } catch (error) {
      if (error instanceof SerialTimeoutError) {
        throw new EdiabasTimeoutError();
      }
      throw error;
    }
  }

  async transmitFrequent(data: Uint8Array): Promise<void> {
    this.assertConnected();
    this.frequentSendBuffer = Uint8Array.from(data);
    this.frequentModeActive = true;

    if (!this.frequentTimer) {
      this.frequentTimer = setInterval(() => {
        void this.runFrequentCycle();
      }, this.frequentIntervalMs);
    }
  }

  async receiveFrequent(): Promise<Uint8Array> {
    this.assertConnected();
    return this.frequentRecvBuffer ?? new Uint8Array(0);
  }

  async stopFrequent(): Promise<void> {
    if (this.frequentTimer) {
      clearInterval(this.frequentTimer);
      this.frequentTimer = null;
    }
    this.frequentModeActive = false;
    this.frequentSendBuffer = null;
    this.frequentRecvBuffer = null;
  }

  getPort(index: number): number {
    return this.ports.get(index) ?? 0;
  }

  setPort(index: number, value: number): void {
    this.ports.set(index, value);
  }

  get batteryVoltage(): number {
    // C# `EdInterfaceObd.BatteryVoltage` returns the constant
    // `BatteryVoltageValue` (default 12000 mV, SGBD-configurable) when
    // the DSR line is high, 0 otherwise — never a scaled byte from the
    // adapter. We don't have DSR over Web Serial / pipe-style transports,
    // so "connected" stands in for "DSR high". Matches the BEST2
    // bytecode's 10000-mV "ignition on" threshold without surprises.
    return this.connected ? 12000 : 0;
  }

  get ignitionVoltage(): number {
    // C# `EdInterfaceObd.IgnitionVoltage` returns `IgnitionVoltageValue`
    // (default 12000 mV) when ignition is on, 0 otherwise. Two paths:
    //
    //   1. Without active ignition-status support (or non-BmwFast
    //      protocol) → `GetDsrState() ? IgnitionVoltageValue : 0`. The
    //      same DSR-as-proxy-for-connected substitution we use for
    //      `batteryVoltage`.
    //
    //   2. With active support (BmwFast on K+DCAN) → query the adapter
    //      with `0x82 0xF1 0xF1 0xFA 0xFA` and parse the response.
    //      We don't implement the active query yet, but for K-LINE the
    //      EdiabasLib fallback is "status not present → ignition on"
    //      anyway, so the connected→12000 default matches.
    return this.connected ? 12000 : 0;
  }

  get ignitionStatus(): number {
    return this.adapterInfo.ignitionStatus;
  }

  get adapterType(): number {
    return this.adapterInfo.adapterType;
  }

  get adapterVersion(): number {
    return this.adapterInfo.adapterVersion;
  }

  get loopTest(): number {
    return this._loopTest;
  }

  setProgramVoltage(value: number): void {
    this._programVoltage = value;
  }

  setParameter(parameter: number, value: number): void {
    switch (parameter) {
      case SerialCommParameterIds.Protocol:
        this.commParameter.protocol = value;
        return;
      case SerialCommParameterIds.TesterAddress:
        this.commParameter.testerAddress = value;
        return;
      case SerialCommParameterIds.EcuAddress:
        this.commParameter.ecuAddress = value;
        return;
      case SerialCommParameterIds.TesterCanId:
        this.commParameter.testerCanId = value;
        return;
      case SerialCommParameterIds.EcuCanId:
        this.commParameter.ecuCanId = value;
        return;
      case SerialCommParameterIds.P1:
        this.commParameter.p1 = value;
        return;
      case SerialCommParameterIds.P2:
        this.commParameter.p2 = value;
        return;
      case SerialCommParameterIds.P3:
        this.commParameter.p3 = value;
        return;
      case SerialCommParameterIds.W1:
        this.commParameter.w1 = value;
        return;
      case SerialCommParameterIds.W2:
        this.commParameter.w2 = value;
        return;
      case SerialCommParameterIds.W3:
        this.commParameter.w3 = value;
        return;
      case SerialCommParameterIds.W4:
        this.commParameter.w4 = value;
        return;
      case SerialCommParameterIds.W5:
        this.commParameter.w5 = value;
        return;
      case SerialCommParameterIds.InterByteTime:
        this.commParameter.interByteTime = value;
        return;
      case SerialCommParameterIds.RetryCount:
        this.commParameter.retryCount = value;
        return;
      case SerialCommParameterIds.TimeoutNr78:
        this.commParameter.timeoutNr78 = value;
        return;
      case SerialCommParameterIds.RetryNr78:
        this.commParameter.retryNr78 = value;
        return;
      case SerialCommParameterIds.InitMode:
        this.commParameter.initMode = this.resolveInitMode(value);
        return;
      case SerialCommParameterIds.SendPulse:
        this.commParameter.sendPulse = value !== 0;
        return;
      case SerialCommParameterIds.CanFlags:
        this.commParameter.canFlags = value;
        return;
      case SerialCommParameterIds.CanBaudRate:
        this.commParameter.canBaudRate = value;
        return;
      default:
        return;
    }
  }

  setAnswerLength(length: number): void {
    this.answerLength = length;
  }

  /**
   * Mirrors C# `EdInterfaceObd.CommRepeats` setter — invoked by the BEST2
   * `xreps N` opcode via the CommunicationInterface forwarder. Stores the
   * extra-attempts counter consumed by `transmitDs2WithRetry`.
   */
  async setRepeatCounter(count: number): Promise<void> {
    this.commRepeats = Math.max(0, count >>> 0);
  }

  /** Returns the current repeat counter (0 = no extra retries). */
  getRepeatCounter(): number {
    return this.commRepeats;
  }

  getCommParameterState(): SerialCommParameterState {
    return { ...this.commParameter };
  }

  getAnswerLength(): number | null {
    return this.answerLength;
  }

  async sendFormatted(format: string, payload: string): Promise<void> {
    void format;
    const request = utf8ToCp1252(payload);
    if (this.shouldUseKlineSession()) {
      await this.sendKlineRequest(request);
      return;
    }
    await this.send(request);
  }

  async requestFormatted(
    format: string,
    payload: string,
    timeoutMs?: number
  ): Promise<Uint8Array> {
    void format;
    const request = utf8ToCp1252(payload);
    if (this.shouldUseKlineSession()) {
      return this.sendKlineRequest(request);
    }
    await this.send(request);
    const expectedLength =
      this.answerLength !== null && this.answerLength > 0
        ? this.answerLength
        : this.config.receiveBufferSize;
    return this.receiveWithLength(expectedLength, timeoutMs);
  }

  async rawData(request: Uint8Array): Promise<Uint8Array> {
    if (this.ds2Session) {
      // K-line write goes through the wrapped transport when a K+DCAN adapter is
      // present, so the cable knows what baud/parity to drive on its K-line side.
      const transport: SerialTransport = this.adapterWrappedTransport ?? this.transport;
      return this.transmitDs2WithRetry(transport, request);
    }
    if (this.shouldUseCanSession()) {
      return this.sendCanRequest(request);
    }
    if (this.shouldUseKlineSession()) {
      return this.sendKlineRequest(request);
    }
    await this.send(request);
    return this.receive();
  }

  /**
   * DS2 transmit wrapped with retry-on-failure (mirrors C# `ObdTrans`'s loop).
   * Tries once, plus `commRepeats` additional attempts on timeout / framing /
   * checksum failures. BMW MS43 in particular often ignores the very first
   * follow-up query after identification and responds on attempt #2.
   */
  private async transmitDs2WithRetry(
    transport: SerialTransport,
    request: Uint8Array
  ): Promise<Uint8Array> {
    const session = this.ds2Session;
    if (!session) {
      throw new Error("DS2 session not configured");
    }
    const totalAttempts = Math.max(1, 1 + (this.commRepeats >>> 0));
    let lastError: unknown;
    for (let attempt = 0; attempt < totalAttempts; attempt++) {
      try {
        return await session.sendRequest(transport, request);
      } catch (error) {
        lastError = error;
        if (this.verboseLogger) {
          this.verboseLogger(
            "error",
            `DS2 attempt ${attempt + 1}/${totalAttempts} failed: ${(error as Error).message}`
          );
        }
        // Best effort buffer drain between attempts so leftover bytes from a
        // partial response don't poison the next echo.
        try {
          await transport.purge();
        } catch {
          /* ignore */
        }
      }
    }
    throw lastError;
  }

  /**
   * Composite send-and-receive used by the BEST2 `xsend` opcode. Routes to the
   * appropriate protocol session (DS2 / KWP2000 / CAN) when configured, otherwise
   * falls back to a raw send + receive.
   */
  async transmitData(request: Uint8Array): Promise<Uint8Array> {
    return this.rawData(request);
  }

  /**
   * Mirrors C# EdInterfaceObd.CommParameter setter — the BEST2 program calls
   * `xsetpar` which lands here as a UInt32 array. Index 0 selects the protocol
   * "concept": 0x0001 (Concept-1), 0x0005 (DS1), 0x0006 (DS2) all use DS2 framing.
   * Other concepts will fall through to the legacy KWP/CAN paths defined elsewhere.
   *
   * Layout for DS2 concepts:
   *   [0] concept
   *   [1] baud rate
   *   [2..4] addressing/init params (unused here — handled by the BEST2 program)
   *   [5] ParTimeoutStd
   *   [6] ParRegenTime
   *   [7] ParTimeoutTelEnd
   *   [8] ParInterbyteTime (optional)
   *   [9] checksum mode (optional, 0=auto, !=0 → user-supplied)
   */
  async setCommParameter(parameters: number[]): Promise<void> {
    // Reset any prior session.
    this.ds2Session = null;
    this.ds2ConceptId = null;
    this.adapterWrappedTransport = null;

    if (parameters.length === 0) {
      return;
    }

    const concept = parameters[0] >>> 0;
    if (concept === 0x0001 || concept === 0x0005 || concept === 0x0006) {
      if (parameters.length < 8) {
        throw new Error(`DS2: comm parameter array too short (${parameters.length} < 8)`);
      }
      const baudRate = parameters[1] || 9600;
      const timeoutStdMs = parameters[5] || this.config.timeoutMs;
      const regenTimeMs = parameters[6] || 0;
      const telegramEndTimeoutMs = parameters[7] || this.config.telegramEndTimeoutMs;
      const interByteTimeMs = parameters.length >= 9 ? parameters[8] : 0;
      const checksumByUser = parameters.length >= 10 ? parameters[9] !== 0 : false;

      if (this.connected) {
        if (this.isKDCanAdapter) {
          // K+DCAN: USB UART stays at 115200 8N1; the K-line baud/parity travel
          // inside each adapter telegram. Build a wrapper transport so DS2 writes
          // are encoded for the cable.
          this.adapterWrappedTransport = new AdapterWrappedTransport({
            inner: this.transport,
            adapterType: this.adapterInfo.adapterType,
            adapterVersion: this.adapterInfo.adapterVersion,
            klineBaudRate: baudRate,
            klineParity: "even",
            interByteTimeMs,
          });
          await this.transport.configure({
            baudRate: 115200,
            dataBits: 8,
            parity: "none",
            stopBits: 1,
          });
        } else {
          // Dumb FTDI passthrough: drive the UART at the K-line baud directly.
          await this.transport.configure({
            baudRate,
            dataBits: 8,
            parity: "even",
            stopBits: 1,
          });
        }
      }

      this.ds2ConceptId = concept as Ds2ConceptId;
      // Mirror C# `EdInterfaceObd.cs:668-672`: for DS2 (concept 0x0006), ParSendSetDtr
      // is `!HasAdapterEcho`. Smart K+DCAN absorbs the echo (HasAdapterEcho=false →
      // SendSetDtr=false). Raw FTDI cables echo via the half-duplex K-line wire
      // (HasAdapterEcho=true → SendSetDtr=true) and need DTR raised during the
      // send for the cable's transceiver to switch direction.
      const hasAdapterEcho = !this.isKDCanAdapter;
      // EDIABASX_KLINE_DTR=0 disables DTR toggling for cables where it's
      // counter-productive (e.g. plain USB-UART without a K-line transceiver
      // requiring direction control).
      // Guarded for browser bundles where `process` is undefined; the
      // override is a Node-only escape hatch for cables that don't need DTR.
      const dtrDisabled = typeof process !== "undefined" && process.env?.EDIABASX_KLINE_DTR === "0";
      const sendSetDtr = !dtrDisabled && concept === 0x0006 ? hasAdapterEcho : false;
      this.ds2Session = new Ds2Session({
        concept: concept as Ds2ConceptId,
        baudRate,
        timeoutStdMs,
        regenTimeMs,
        telegramEndTimeoutMs,
        interByteTimeMs: interByteTimeMs > 0 ? interByteTimeMs : undefined,
        checksumByUser,
        sendSetDtr,
        hasAdapterEcho,
        // Skip pre-send purge in test/dev mode (where probeAdapterOnConnect=false and
        // the mock transport stages bytes via enqueueRead). On real hardware the probe
        // ran successfully, so the buffer state is known; subsequent purges are still
        // valuable to absorb stray bytes between transactions.
        skipPrePurge: !this.config.probeAdapterOnConnect,
        logger: this.verboseLogger,
      });
      return;
    }

    // Future: dispatch concept 0x0002 (KWP1281), 0x010C (BMW KWP2000), CAN concepts, ...
    // For now, store known indexed values to satisfy the legacy setParameter flow.
    if (parameters.length >= 1) this.commParameter.protocol = parameters[0];
    if (parameters.length >= 2) this.commParameter.testerAddress = parameters[1];
  }

  /** Whether the connection is going through a smart K+DCAN adapter (vs raw FTDI). */
  isUsingKDCanAdapter(): boolean {
    return this.isKDCanAdapter;
  }

  /** Reported adapter info from the most recent probe (or default state if not yet polled). */
  getAdapterInfo(): AdapterInfoState {
    return { ...this.adapterInfo };
  }

  /** True if a DS2-style session is currently configured. */
  hasDs2Session(): boolean {
    return this.ds2Session !== null;
  }

  /** Concept ID for the active DS2 session (1, 5, or 6) or null. */
  getDs2ConceptId(): Ds2ConceptId | null {
    return this.ds2ConceptId;
  }

  switchSiRelais(time: number): void {
    this._siRelaisTime = time;
  }

  protected delay(durationMs: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, durationMs));
  }

  protected now(): number {
    return Date.now();
  }

  private async runFrequentCycle(): Promise<void> {
    if (!this.frequentModeActive || !this.frequentSendBuffer) {
      return;
    }
    try {
      if (this.shouldUseKlineSession()) {
        await this.frequentKwp2000();
        return;
      }
      if (
        this.shouldUseCanSession() ||
        this.adapterMode === AdapterModes.Can ||
        this.dcanSession
      ) {
        await this.frequentCan();
        return;
      }
      const response = await this.rawData(this.frequentSendBuffer);
      this.frequentRecvBuffer = response;
    } catch (error) {
      if (error instanceof EdiabasTimeoutError || error instanceof SerialTimeoutError) {
        console.warn("Frequent mode timeout", error);
        return;
      }
      console.error("Frequent mode communication error", error);
    }
  }

  private async frequentKwp2000(): Promise<void> {
    this.assertConnected();
    if (!this.frequentSendBuffer) {
      return;
    }

    await this.ensureKlineSession();

    if (this.klineProtocol !== KwpProtocols.Kwp2000 || !this.kwpSession) {
      const response = await this.sendKlineRequest(this.frequentSendBuffer);
      this.frequentRecvBuffer = response;
      return;
    }

    const response = await this.kwpSession.sendRequest(
      this.transport,
      this.frequentSendBuffer
    );
    this.frequentRecvBuffer = response;
  }

  private async frequentCan(): Promise<void> {
    this.assertConnected();
    if (!this.frequentSendBuffer) {
      return;
    }

    if (!this.dcanSession) {
      if (!this.shouldUseCanSession()) {
        throw new Error("CAN session not initialized");
      }
      await this.ensureCanSession();
    }

    if (!this.dcanSession) {
      throw new Error("CAN session not initialized");
    }

    const segments = segmentIsoTpPayload(this.frequentSendBuffer);
    for (const segment of segments) {
      await this.dcanSession.sendRequest(this.transport, segment);
    }

    const response =
      this.commParameter.protocol === SerialProtocols.IsoTp
        ? await this.receiveIsoTpResponse()
        : await this.receive();

    this.frequentRecvBuffer = response;
  }

  private clampP1(value: number): number {
    return Math.min(Math.max(value, SerialTiming.p1Min), SerialTiming.p1Max);
  }

  private resolveInitMode(value: number): SerialInitMode {
    if (value === 0) {
      return SerialInitModes.FiveBaud;
    }
    if (value === 1) {
      return SerialInitModes.Fast;
    }
    return SerialInitModes.Unknown;
  }

  private shouldUseKlineSession(): boolean {
    return this.commParameter.protocol === SerialProtocols.Kwp;
  }

  private async sendKlineRequest(request: Uint8Array): Promise<Uint8Array> {
    this.assertConnected();
    await this.ensureKlineSession();

    if (this.klineProtocol === KwpProtocols.Kwp2000 && this.kwpSession) {
      return this.kwpSession.sendRequest(this.transport, request);
    }

    await this.send(request);
    return this.receive();
  }

  private async ensureKlineSession(): Promise<void> {
    if (this.klineProtocol !== null) {
      return;
    }

    const initMode = this.commParameter.initMode ?? SerialInitModes.Fast;
    const timers = this.buildKwpTimers();
    const setDtr = this.commParameter.sendPulse ?? false;

    if (initMode === SerialInitModes.Fast) {
      await sendFastInit(this.transport, { setDtr });
    } else if (initMode === SerialInitModes.FiveBaud) {
      await send5BaudInit(this.transport, this.getKwpWakeAddress(), {
        setDtr,
        bothLines: true
      });
    } else {
      throw new Error("Unsupported K-line init mode");
    }

    const keyBytes = await this.readKeyBytes(timers);
    this.klineKeyBytes = keyBytes;
    this.klineProtocol = parseKeyBytes(keyBytes);

    if (this.klineProtocol === KwpProtocols.Kwp2000) {
      const session = this.createKwpSession(timers);
      this.kwpSession = session;
      await session.startSessionWithKeyBytes(this.transport, keyBytes);
    }
  }

  private buildKwpTimers(): Kwp2000Timers {
    const overrides: { -readonly [K in keyof Kwp2000Timers]?: Kwp2000Timers[K] } = {};
    if (this.commParameter.w1 !== undefined) {
      overrides.w1 = this.commParameter.w1;
    }
    if (this.commParameter.w2 !== undefined) {
      overrides.w2 = this.commParameter.w2;
    }
    if (this.commParameter.w3 !== undefined) {
      overrides.w3 = this.commParameter.w3;
    }
    if (this.commParameter.w4 !== undefined) {
      overrides.w4 = this.commParameter.w4;
    }
    if (this.commParameter.w5 !== undefined) {
      overrides.w5 = this.commParameter.w5;
    }
    if (this.commParameter.p1 !== undefined) {
      overrides.p1 = this.commParameter.p1;
    }
    if (this.commParameter.p2 !== undefined) {
      overrides.p2 = this.commParameter.p2;
    }
    if (this.commParameter.p3 !== undefined) {
      overrides.p3 = this.commParameter.p3;
    }
    if (this.commParameter.timeoutNr78 !== undefined) {
      overrides.timeoutNr78 = this.commParameter.timeoutNr78;
    }
    if (this.commParameter.retryNr78 !== undefined) {
      overrides.retryNr78 = this.commParameter.retryNr78;
    }

    const defaults: Kwp2000Timers = {
      ...DEFAULT_KWP2000_TIMERS,
      p2: this.config.timeoutMs
    };

    return { ...defaults, ...overrides };
  }

  private createKwpSession(timers: Kwp2000Timers): Kwp2000Session {
    const ecuAddress = this.commParameter.ecuAddress ?? 0x12;
    const testerAddress = this.commParameter.testerAddress ?? 0xf1;

    return new Kwp2000Session({
      ecuAddress,
      testerAddress,
      modeSelectPayload: this.config.kwpModeSelectPayload,
      testerPresentPayload: this.config.kwpTesterPresentPayload,
      timers
    });
  }

  private getKwpWakeAddress(): number {
    return this.commParameter.ecuAddress ?? this.config.kwpWakeAddress;
  }

  private async readKeyBytes(timers: Kwp2000Timers): Promise<Uint8Array> {
    try {
      const first = await this.transport.read(1, timers.w1);
      const second = await this.transport.read(1, timers.w2);
      await this.delay(timers.w3);
      return Uint8Array.from([first[0], second[0]]);
    } catch (error) {
      if (error instanceof SerialTimeoutError) {
        throw new EdiabasTimeoutError();
      }
      throw error;
    }
  }

  private async receiveIsoTpResponse(
    timeoutMs?: number
  ): Promise<Uint8Array> {
    this.assertConnected();
    const timeout = timeoutMs ?? this.config.timeoutMs;
    const firstFrame = await this.readIsoTpFrame(timeout);
    const firstInfo = parseIsoTpFrame(firstFrame);

    if (firstInfo.type === IsoTpFrameTypes.Single) {
      return Uint8Array.from(firstInfo.payload);
    }

    if (
      firstInfo.type !== IsoTpFrameTypes.First ||
      firstInfo.totalLength === undefined
    ) {
      throw new Error("Unexpected ISO-TP frame type");
    }

    const totalLength = firstInfo.totalLength;
    const payload = new Uint8Array(totalLength);
    let offset = 0;

    const firstPayload = firstInfo.payload.subarray(
      0,
      Math.min(6, totalLength)
    );
    payload.set(firstPayload, offset);
    offset += firstPayload.length;

    let expectedSequence = 1;
    while (offset < totalLength) {
      const frame = await this.readIsoTpFrame(timeout);
      const info = parseIsoTpFrame(frame);

      if (info.type === IsoTpFrameTypes.FlowControl) {
        continue;
      }

      if (info.type !== IsoTpFrameTypes.Consecutive) {
        throw new Error("Unexpected ISO-TP frame type");
      }

      if (info.sequence !== expectedSequence) {
        throw new Error("ISO-TP sequence mismatch");
      }

      const remaining = totalLength - offset;
      const slice = info.payload.subarray(0, Math.min(remaining, info.payload.length));
      payload.set(slice, offset);
      offset += slice.length;
      expectedSequence = (expectedSequence + 1) & 0x0f;
    }

    return payload;
  }

  private async readIsoTpFrame(timeoutMs: number): Promise<Uint8Array> {
    return this.transport.read(8, timeoutMs);
  }

  private async receiveWithLength(
    length: number,
    timeoutMs?: number
  ): Promise<Uint8Array> {
    this.assertConnected();
    if (length <= 0) {
      return new Uint8Array();
    }
    const timeout = timeoutMs ?? this.config.timeoutMs;
    try {
      const payload = await this.transport.read(length, timeout);
      await this.enforceP2Timing();
      this.lastReceiveAt = this.now();
      return payload;
    } catch (error) {
      if (error instanceof SerialTimeoutError) {
        throw new EdiabasTimeoutError();
      }
      throw error;
    }
  }

  private async enforceP1Timing(): Promise<void> {
    if (this.lastByteSentAt === null) {
      return;
    }
    const elapsed = this.now() - this.lastByteSentAt;
    const waitMs = Math.max(0, this.config.p1DelayMs - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private async enforceP2Timing(): Promise<void> {
    if (this.lastSendAt === null) {
      return;
    }
    const elapsed = this.now() - this.lastSendAt;
    const waitMs = Math.max(0, SerialTiming.p2Min - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private async enforceP3Timing(): Promise<void> {
    if (this.lastSendAt === null && this.lastReceiveAt === null) {
      return;
    }
    const lastActivity = Math.max(
      this.lastSendAt ?? 0,
      this.lastReceiveAt ?? 0
    );
    const elapsed = this.now() - lastActivity;
    const waitMs = Math.max(0, SerialTiming.p3Min - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private assertConnected(): void {
    if (!this.connected) {
      throw new Error("Not connected");
    }
  }

  private createDefaultAdapterInfo(): AdapterInfoState {
    return {
      protocol: Protocols.Kwp,
      adapterType: -1,
      adapterVersion: 0,
      adapterSerial: null,
      adapterVoltage: -1,
      ignitionStatus: -1,
      escapeModeRead: false,
      escapeModeWrite: false,
      updateAdapterVoltage: true,
      lastCommTickMs: 0,
      lastVoltageUpdateMs: 0,
      reconnectRequired: false
    };
  }

  /**
   * Probe the connected USB adapter for its identity (type / version / serial /
   * voltage) by exchanging the standard EdiabasLib test telegrams. Mirrors the C#
   * `updateAdapterInfo` flow, but uses async transport reads natively instead of
   * the polling buffer model so it composes with our SerialTransport interface.
   *
   * Returns false if the device doesn't respond like a K+DCAN-style adapter
   * (timeout, bad echo, bad checksum). Callers should treat that as "this is a
   * dumb passthrough cable" and fall back to raw K-line.
   */
  async pollAdapterInfo(forceUpdate = false): Promise<boolean> {
    void forceUpdate;
    this.assertConnected();

    // Allow generous probe timeout so slower USB-Serial bridges have time to
    // round-trip a 9-13 byte response. C# uses _readTimeoutOffsetLong which is
    // typically 1000ms+ — 500ms was too tight on this hardware.
    const probeTimeoutMs = Math.max(1000, Math.min(2000, this.config.timeoutMs));

    type Probe = {
      label: string;
      tel: number[];
      respLen: number;
      /** When set, on timeout-with-valid-echo run this fallback. Mirrors C# permissive
       * handling for the ignition-status / escape-mode probes — a dumb cable that
       * doesn't recognise the command but echoes correctly should not abort the probe. */
      onTimeoutWithEcho?: () => void;
      apply: (resp: Uint8Array) => void;
      gateOnAdapterType?: boolean;
    };

    // Escape-mode XOR codes (mirrors EscapeXor / EscapeCodeDefault / EscapeMaskDefault).
    const ESCAPE_XOR = 0x55;
    const ESCAPE_CODE_DEFAULT = 0xff;
    const ESCAPE_MASK_DEFAULT = 0x80;
    const escapeMode = 0x00; // both EscapeConfRead and EscapeConfWrite cleared

    const probes: Probe[] = [
      // telType 0: read ignition status. Permissive — dumb cables echo only.
      {
        label: "ignition",
        tel: [0x82, 0xf1, 0xf1, 0xfe, 0xfe, 0x00],
        respLen: 6,
        onTimeoutWithEcho: () => {
          // C# sets AdapterType = 0 here so subsequent probes still run.
          this.adapterInfo.adapterType = 0;
        },
        apply: (resp) => {
          this.adapterInfo.ignitionStatus = resp[4];
        },
      },
      // telType 1: escape mode setup (8-byte command, 8-byte response).
      // Without this the K+DCAN may not transition out of its boot/idle state and
      // can refuse subsequent transactions.
      {
        label: "escape",
        tel: [
          0x84,
          0xf1,
          0xf1,
          0x06,
          (escapeMode ^ ESCAPE_XOR) & 0xff,
          (ESCAPE_CODE_DEFAULT ^ ESCAPE_XOR) & 0xff,
          (ESCAPE_MASK_DEFAULT ^ ESCAPE_XOR) & 0xff,
          0x00,
        ],
        respLen: 8,
        onTimeoutWithEcho: () => {
          // C# leaves escape flags off but does NOT abort the probe sequence.
          this.adapterInfo.escapeModeRead = false;
          this.adapterInfo.escapeModeWrite = false;
        },
        apply: (resp) => {
          const modeValue = resp[4] ^ ESCAPE_XOR;
          this.adapterInfo.escapeModeRead = (modeValue & 0x01) !== 0;
          this.adapterInfo.escapeModeWrite = (modeValue & 0x02) !== 0;
        },
      },
      // telType 2: read firmware → adapterType / adapterVersion.
      {
        label: "firmware",
        tel: [0x82, 0xf1, 0xf1, 0xfd, 0xfd, 0x00],
        respLen: 9,
        apply: (resp) => {
          this.adapterInfo.adapterType = (resp[4] << 8) | resp[5];
          this.adapterInfo.adapterVersion = (resp[6] << 8) | resp[7];
        },
      },
      // telType 3: adapter serial (gated on adapterType ≥ 0x0002).
      {
        label: "serial",
        tel: [0x82, 0xf1, 0xf1, 0xfb, 0xfb, 0x00],
        respLen: 13,
        apply: (resp) => {
          this.adapterInfo.adapterSerial = resp.slice(4, 12);
        },
        gateOnAdapterType: true,
      },
      // telType 4: adapter voltage (gated on adapterType ≥ 0x0002).
      {
        label: "voltage",
        tel: [0x82, 0xf1, 0xf1, 0xfc, 0xfc, 0x00],
        respLen: 6,
        apply: (resp) => {
          this.adapterInfo.adapterVoltage = resp[4];
          this.adapterInfo.lastVoltageUpdateMs = this.now();
        },
        gateOnAdapterType: true,
      },
    ];

    // Reset the ID fields so we don't keep stale data from a prior connection.
    this.adapterInfo.ignitionStatus = -1;
    this.adapterInfo.adapterType = -1;
    this.adapterInfo.adapterSerial = null;
    this.adapterInfo.adapterVoltage = -1;

    let echoOnlyCount = 0;
    for (const probe of probes) {
      if (probe.gateOnAdapterType && this.adapterInfo.adapterType < 0x0002) {
        continue;
      }
      // Once the cable has echoed two probes back without ever answering, we
      // know it's a passthrough FTDI / K-line-transceiver cable, not a smart
      // K+DCAN. Stop probing so we don't keep dumping bytes on the K-line that
      // the ECU might interpret as junk diagnostics requests.
      if (echoOnlyCount >= 2) {
        this.verboseLogger?.(
          "send",
          `probe stopping early — cable identified as passthrough (no smart-adapter response)`
        );
        return false;
      }
      const tel = Uint8Array.from(probe.tel);
      tel[tel.length - 1] = bmwFastChecksum(tel, 0, tel.length - 1);

      try {
        await this.transport.purge();
        await this.transport.write(tel);
        // The cable echoes the telegram back, then sends `respLen` bytes.
        const echoAndResp = await this.transport.read(tel.length + probe.respLen, probeTimeoutMs);

        // Permissive failure: if we got at least the echo back and the probe
        // has an onTimeoutWithEcho fallback, treat it as a soft pass.
        if (echoAndResp.length < tel.length + probe.respLen) {
          if (echoAndResp.length >= tel.length && probe.onTimeoutWithEcho) {
            const echoOk = tel.every((value, index) => echoAndResp[index] === value);
            if (echoOk) {
              this.verboseLogger?.(
                "send",
                `probe '${probe.label}' echo-only (cable doesn't implement command)`
              );
              probe.onTimeoutWithEcho();
              echoOnlyCount += 1;
              continue;
            }
          }
          this.verboseLogger?.(
            "error",
            `probe '${probe.label}' incomplete: got ${echoAndResp.length}/${tel.length + probe.respLen} bytes`
          );
          return false;
        }

        for (let i = 0; i < tel.length; i++) {
          if (echoAndResp[i] !== tel[i]) {
            this.verboseLogger?.(
              "error",
              `probe '${probe.label}' echo mismatch at byte ${i}: ${echoAndResp[i]} != ${tel[i]}`
            );
            return false;
          }
        }
        const resp = echoAndResp.subarray(tel.length);
        const expectedSum = bmwFastChecksum(resp, 0, probe.respLen - 1);
        if (expectedSum !== resp[probe.respLen - 1]) {
          this.verboseLogger?.(
            "error",
            `probe '${probe.label}' bad checksum: expected ${expectedSum.toString(16)} got ${resp[probe.respLen - 1].toString(16)}`
          );
          return false;
        }
        probe.apply(resp);
      } catch (error) {
        this.verboseLogger?.("error", `probe '${probe.label}' threw: ${(error as Error).message}`);
        return false;
      }
    }

    this.adapterInfo.lastCommTickMs = this.now();
    this.adapterInfo.reconnectRequired = false;
    return true;
  }

  private shouldUseCanSession(): boolean {
    const protocol = this.commParameter.protocol;
    return protocol === SerialProtocols.IsoTp || protocol === SerialProtocols.Tp20;
  }

  private async ensureCanSession(): Promise<void> {
    if (this.adapterMode === AdapterModes.Can && this.dcanSession) {
      return;
    }

    // Use default adapter type/version if not polled
    // These defaults support CAN telegrams (type >= 0x0002, version >= 0x0009)
    const adapterType =
      this.adapterInfo.adapterType >= 0 ? this.adapterInfo.adapterType : 0x0002;
    const adapterVersion =
      this.adapterInfo.adapterVersion > 0
        ? this.adapterInfo.adapterVersion
        : 0x0009;

    const baudRate = this.commParameter.canBaudRate ?? DCAN_BAUD_RATE;
    await switchToCanMode(this.transport, baudRate);
    this.adapterMode = AdapterModes.Can;

    this.dcanSession = new DcanSession({
      adapterType,
      adapterVersion,
      canTxId: this.commParameter.testerCanId ?? 0x6f1,
      canRxId: this.commParameter.ecuCanId ?? 0x600,
      canFlags: this.commParameter.canFlags,
      baudRate,
      protocol:
        this.commParameter.protocol === SerialProtocols.Tp20
          ? Protocols.Tp20
          : Protocols.IsoTp
    });
  }

  private async sendCanRequest(request: Uint8Array): Promise<Uint8Array> {
    this.assertConnected();
    await this.ensureCanSession();

    if (!this.dcanSession) {
      throw new Error("CAN session not initialized");
    }

    const segments = segmentIsoTpPayload(request);
    for (const segment of segments) {
      await this.dcanSession.sendRequest(this.transport, segment);
    }

    if (this.commParameter.protocol === SerialProtocols.IsoTp) {
      return this.receiveIsoTpResponse();
    }

    return this.receive();
  }
}
