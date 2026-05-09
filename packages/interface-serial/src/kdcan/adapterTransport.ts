/**
 * AdapterWrappedTransport — drop-in replacement for SerialTransport that speaks
 * to the K+DCAN cable via adapter telegrams.
 *
 * The K+DCAN adapter has its own command protocol: the PC always talks to the
 * cable at 115200 8N1, and each K-line transmission is wrapped by
 * `createAdapterTelegram(...)` which tells the cable what baud / parity / flags
 * to use on the K-line side. The cable transmits the inner payload over K-line,
 * receives the response, and returns the response bytes unwrapped (with echo
 * suppressed because we set `KLINEF1_NO_ECHO`).
 *
 * This wrapper:
 *   - keeps the underlying USB UART at 115200 8N1 (the cable's "command" baud);
 *   - intercepts `write(data)` to wrap `data` as an adapter telegram before sending;
 *   - leaves `read()` untouched — the cable returns K-line bytes as-is;
 *   - turns DTR/RTS/break/configure into no-ops or pass-throughs (the cable's
 *     line-control happens via adapter-telegram flags, not real DTR/RTS).
 */

import {
  Protocols,
  type Protocol,
  type SerialParity as KdcanSerialParity,
} from "./constants";
import { createAdapterTelegram, type AdapterTelegramConfig } from "./telegram";
import type {
  SerialTransport,
  SerialTransportConfig,
  SerialParity,
} from "../types";

export type AdapterWrappedTransportOptions = {
  /** Underlying USB transport (must already be open at 115200 8N1). */
  inner: SerialTransport;
  /** Adapter type from `updateAdapterInfo` (must be ≥ 0x0002 for telegram support). */
  adapterType: number;
  /** Adapter firmware version. */
  adapterVersion: number;
  /** K-line baud rate (e.g. 9600 for DS2 / Concept-1). */
  klineBaudRate: number;
  /** K-line parity (DS2 uses even). */
  klineParity: SerialParity | KdcanSerialParity;
  /** Inter-byte delay in milliseconds for K-line transmissions (0 = no delay). */
  interByteTimeMs?: number;
  /** Logical protocol (Kwp/Uart) controls KWP1281-detect flag. */
  protocol?: Protocol;
  /** When true, wraps subsequent sends with the FastInit flag (one-shot). */
  fastInitNext?: boolean;
};

/** Map our public SerialParity to the kdcan internal SerialParity union (compatible superset). */
function mapParity(parity: SerialParity): KdcanSerialParity {
  switch (parity) {
    case "even":
      return "even";
    case "odd":
      return "odd";
    case "none":
    default:
      return "none";
  }
}

export class AdapterWrappedTransport implements SerialTransport {
  private readonly inner: SerialTransport;
  private adapterType: number;
  private adapterVersion: number;
  private klineBaudRate: number;
  private klineParity: KdcanSerialParity;
  private interByteTimeMs: number;
  private protocol: Protocol;
  private fastInitNext: boolean;

  constructor(options: AdapterWrappedTransportOptions) {
    this.inner = options.inner;
    this.adapterType = options.adapterType;
    this.adapterVersion = options.adapterVersion;
    this.klineBaudRate = options.klineBaudRate;
    this.klineParity = mapParity(options.klineParity as SerialParity);
    this.interByteTimeMs = options.interByteTimeMs ?? 0;
    this.protocol = options.protocol ?? Protocols.Uart;
    this.fastInitNext = options.fastInitNext ?? false;
  }

  /**
   * Update K-line transmission parameters (baud / parity / inter-byte delay)
   * without rebuilding the wrapper. Useful when `xsetpar` switches concepts.
   */
  updateLineConfig(opts: {
    klineBaudRate?: number;
    klineParity?: SerialParity | KdcanSerialParity;
    interByteTimeMs?: number;
    protocol?: Protocol;
  }): void {
    if (opts.klineBaudRate !== undefined) this.klineBaudRate = opts.klineBaudRate;
    if (opts.klineParity !== undefined) {
      this.klineParity = mapParity(opts.klineParity as SerialParity);
    }
    if (opts.interByteTimeMs !== undefined) this.interByteTimeMs = opts.interByteTimeMs;
    if (opts.protocol !== undefined) this.protocol = opts.protocol;
  }

  /** Arm a one-shot fast-init flag for the next telegram. */
  setFastInitNext(): void {
    this.fastInitNext = true;
  }

  // SerialTransport implementation -------------------------------------------------

  open(port: string): Promise<void> {
    return this.inner.open(port);
  }

  close(): Promise<void> {
    return this.inner.close();
  }

  /**
   * The K+DCAN cable's USB UART must stay at 115200 8N1. Inner config is the
   * "command channel" baud, not the K-line baud. We intercept and force 115200.
   */
  configure(config: SerialTransportConfig): Promise<void> {
    void config;
    return this.inner.configure({
      baudRate: 115200,
      dataBits: 8,
      parity: "none",
      stopBits: 1,
    });
  }

  /** DTR is encoded into adapter-telegram flags; pass through anyway in case caller relies on it. */
  setDtr(value: boolean): Promise<void> {
    return this.inner.setDtr(value);
  }

  setRts(value: boolean): Promise<void> {
    return this.inner.setRts(value);
  }

  /** BREAK pulses aren't valid on the wrapped channel; ignore. */
  setBreak(durationMs: number): Promise<void> {
    void durationMs;
    return Promise.resolve();
  }

  purge(): Promise<void> {
    return this.inner.purge();
  }

  /**
   * Wrap the K-line payload in an adapter telegram before forwarding.
   * The caller (DS2 session, KWP, etc.) supplies the bytes that should appear
   * on the K-line; this method prepends the adapter header and BMW-FAST checksum.
   */
  async write(data: Uint8Array): Promise<void> {
    const setDtr = false; // K+DCAN routes DTR through adapter flags; caller doesn't need it.
    const tel = createAdapterTelegram(data, data.length, setDtr, this.config());
    if (!tel) {
      throw new Error(
        `K+DCAN: cannot build adapter telegram (adapterType=${this.adapterType}, ` +
          `version=${this.adapterVersion}, baud=${this.klineBaudRate})`
      );
    }
    this.fastInitNext = false;
    await this.inner.write(tel);
  }

  read(length: number, timeoutMs: number): Promise<Uint8Array> {
    return this.inner.read(length, timeoutMs);
  }

  async sendPulse(
    dataBits: number,
    length: number,
    pulseWidthMs: number,
    setDtr: boolean,
    bothLines: boolean,
    autoKeyByteDelay?: number
  ): Promise<void> {
    if (!this.inner.sendPulse) {
      throw new Error("Underlying transport does not support sendPulse");
    }
    return this.inner.sendPulse(
      dataBits,
      length,
      pulseWidthMs,
      setDtr,
      bothLines,
      autoKeyByteDelay
    );
  }

  // ---------------------------------------------------------------------------------

  private config(): AdapterTelegramConfig {
    return {
      adapterType: this.adapterType,
      adapterVersion: this.adapterVersion,
      currentBaudRate: this.klineBaudRate,
      interByteTime: this.interByteTimeMs,
      currentProtocol: this.protocol,
      currentParity: this.klineParity,
      fastInit: this.fastInitNext,
    };
  }

  /** Expose adapter info for callers that need to consult it. */
  getAdapterType(): number {
    return this.adapterType;
  }

  getAdapterVersion(): number {
    return this.adapterVersion;
  }
}
