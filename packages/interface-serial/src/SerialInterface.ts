import { utf8ToCp1252 } from "@ediabas/core";
import { EdiabasInterface, EdiabasTimeoutError } from "@ediabas/interface-base";
import { SerialTimeoutError } from "./errors";
import { NodeSerialTransport } from "./nodeSerialTransport";
import {
  DEFAULT_KWP2000_TIMERS,
  Kwp2000Session,
  KwpProtocols,
  parseKeyBytes,
  send5BaudInit,
  sendFastInit,
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
  private readonly config: Required<Omit<SerialInterfaceConfig, "transport">>;
  private readonly transport: SerialTransport;
  private lastSendAt: number | null = null;
  private lastReceiveAt: number | null = null;
  private lastByteSentAt: number | null = null;
  private ports = new Map<number, number>();
  private _ignitionVoltage = 0;
  private _loopTest = 0;
  private _programVoltage = 0;
  private _siRelaisTime = 0;
  private readonly commParameter: SerialCommParameterState = {};
  private answerLength: number | null = null;
  private kwpSession: Kwp2000Session | null = null;
  private klineProtocol: KwpProtocol | null = null;
  private klineKeyBytes: Uint8Array | null = null;

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
      kwpWakeAddress: merged.kwpWakeAddress
    };

    this.transport =
      merged.transport ??
      new NodeSerialTransport({
        telegramEndTimeoutMs: this.config.telegramEndTimeoutMs
      });
  }

  async connect(): Promise<void> {
    if (this.connected) {
      return;
    }
    const transportConfig: SerialTransportConfig = {
      baudRate: this.config.baudRate,
      dataBits: this.config.dataBits,
      parity: this.config.parity,
      stopBits: this.config.stopBits
    };
    await this.transport.configure(transportConfig);
    await this.transport.open(this.config.port);
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    if (!this.connected) {
      return;
    }
    await this.transport.close();
    this.connected = false;
    this.kwpSession = null;
    this.klineProtocol = null;
    this.klineKeyBytes = null;
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

  getPort(index: number): number {
    return this.ports.get(index) ?? 0;
  }

  setPort(index: number, value: number): void {
    this.ports.set(index, value);
  }

  get ignitionVoltage(): number {
    return this._ignitionVoltage;
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
      default:
        return;
    }
  }

  setAnswerLength(length: number): void {
    this.answerLength = length;
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
    if (this.shouldUseKlineSession()) {
      return this.sendKlineRequest(request);
    }
    await this.send(request);
    return this.receive();
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

    return { ...DEFAULT_KWP2000_TIMERS, ...overrides };
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
}
