/**
 * DS1 / DS2 / Concept-1 protocol framing.
 *
 * Mirrors EdiabasLib EdInterfaceObd.TransDs2 / TelLengthDs2 / CalcChecksumXor.
 *
 * Telegram format (bytes are 8E1 over UART):
 *   [b0, b1, ..., bN-1, XOR]
 * where the final byte is the XOR of every preceding byte. The "header length"
 * convention follows C# CommAnswerLen[0]:
 *   - Concept 1 (0x0001): -2 → byte at offset 2 is the total length.
 *   - DS1/DS2 (0x0005, 0x0006): -1 → byte at offset 1 is the total length.
 *   - Positive value → fixed-length frame (no length byte).
 * CommAnswerLen[1] is added to the length byte (a fixed offset).
 */

import type { SerialTransport, SerialTransportConfig } from "../types";

/**
 * Mirrors C# `EchoTimeout` constant (`EdInterfaceObd.cs:131`) — the budget for
 * reading our own wire-echo back after a write. K-line echo is a tens-of-µs
 * round-trip on the wire, but FTDI's default 16ms latency timer plus Node.js
 * event-loop scheduling can stretch this; 250ms is comfortably above any
 * reasonable jitter without delaying genuine "no-echo" failures by too much.
 */
const ECHO_TIMEOUT_MS = 250;

/**
 * Mirrors C# `ObdAddRecTimeout` (`EdInterfaceObd.cs:131`) — fixed buffer added
 * to every receive timeout to absorb USB-Serial driver latency.
 */
const ADD_REC_TIMEOUT_MS = 20;

export type Ds2ConceptId = 0x0001 | 0x0005 | 0x0006;

export type Ds2SessionOptions = {
  /** Concept ID from the BEST2 CommParameter[0]. */
  concept: Ds2ConceptId;
  /** Baud rate from CommParameter[1] (typically 9600 for ECU comms). */
  baudRate: number;
  /** ParTimeoutStd (CommParameter[5]) — initial response timeout in ms. */
  timeoutStdMs: number;
  /** ParRegenTime (CommParameter[6]) — minimum gap between request/response cycles. */
  regenTimeMs: number;
  /** ParTimeoutTelEnd (CommParameter[7]) — inter-byte timeout in ms. */
  telegramEndTimeoutMs: number;
  /** ParInterbyteTime (CommParameter[8]) — delay between sent bytes. */
  interByteTimeMs?: number;
  /**
   * If true, the BEST2 program is responsible for appending the XOR checksum.
   * If false (default), this session appends it before transmission.
   */
  checksumByUser?: boolean;
  /**
   * If true, skip checksum verification on received frames (some legacy ECUs lie).
   */
  checksumNoCheck?: boolean;
  /**
   * If true, treat the sent telegram as echoed back by the adapter (FTDI/ELM/ADS echo).
   */
  hasAdapterEcho?: boolean;
  /**
   * If true, raise DTR before sending (DS2 typically uses DTR for direction control).
   */
  sendSetDtr?: boolean;
  /**
   * If true, skip the pre-send `transport.purge()`. Useful for unit tests that
   * stage RX bytes via `enqueueRead` *before* the first `sendRequest` — purging
   * would drop those bytes. On real hardware leave this false so we always start
   * each transaction with a clean buffer (matches C# `SendData` behavior).
   */
  skipPrePurge?: boolean;
  /**
   * Optional logger for wire-level traces. Receives "send"/"recv"/"error" tags
   * along with the relevant byte payload. Set via the `EDIABASX_VERBOSE` env
   * var in the CLI to surface failures during the K+DCAN bring-up.
   */
  logger?: (tag: "send" | "recv" | "error", message: string, data?: Uint8Array) => void;
};

/** XOR all bytes [offset .. offset+length-1]. */
export function calcChecksumXor(data: Uint8Array, offset: number, length: number): number {
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = (sum ^ data[offset + i]) & 0xff;
  }
  return sum;
}

/**
 * Convert a Concept ID to the (headerLen, lengthAddend) pair used by C# TelLengthDs2.
 * Returns the C# CommAnswerLen[0..1] tuple. Negative headerLen means "byte at -value is total length".
 */
export function answerLenForConcept(concept: Ds2ConceptId): [number, number] {
  switch (concept) {
    case 0x0001:
      return [-2, 0];
    case 0x0005:
    case 0x0006:
      return [-1, 0];
  }
}

/**
 * Compute the total telegram length given an already-received header.
 * Mirrors TelLengthDs2.
 */
export function telLengthDs2(
  receivedHeader: Uint8Array,
  answerLen: [number, number]
): number {
  const [headerLen, addend] = answerLen;
  if (headerLen >= 0) {
    return headerLen;
  }
  const offset = -headerLen;
  if (receivedHeader.length < offset) {
    return 0;
  }
  return receivedHeader[offset] + addend;
}

/**
 * One DS2 send/receive transaction.
 *
 * Implements the C# TransDs2 algorithm:
 *   1. (optionally append XOR checksum)
 *   2. wait until ParRegenTime since last response has elapsed
 *   3. send all bytes (with optional inter-byte delay, optional DTR raise)
 *   4. (optionally consume our own echo from the adapter)
 *   5. read the header bytes (per AnswerLen[0])
 *   6. compute total length via TelLengthDs2; read the rest within ParTimeoutTelEnd
 *   7. verify XOR checksum
 */
export class Ds2Session {
  private readonly options: Ds2SessionOptions;
  private readonly answerLen: [number, number];
  private lastResponseAtMs = 0;

  constructor(options: Ds2SessionOptions) {
    this.options = options;
    this.answerLen = answerLenForConcept(options.concept);
  }

  /** SerialTransportConfig matching DS2 line settings (8 data bits, even parity, 1 stop). */
  buildTransportConfig(): SerialTransportConfig {
    return {
      baudRate: this.options.baudRate,
      dataBits: 8,
      parity: "even",
      stopBits: 1,
    };
  }

  /**
   * Send `request` and read the matching response telegram.
   *
   * `request` is the BEST2 send buffer. It MUST NOT include the XOR checksum unless
   * `checksumByUser` was set; in that case the caller is responsible for the checksum.
   */
  async sendRequest(transport: SerialTransport, request: Uint8Array): Promise<Uint8Array> {
    const opts = this.options;
    const log = opts.logger;

    // 1. Prepare outbound buffer with optional XOR checksum.
    let outBytes = request;
    if (!opts.checksumByUser) {
      const checksum = calcChecksumXor(request, 0, request.length);
      outBytes = new Uint8Array(request.length + 1);
      outBytes.set(request, 0);
      outBytes[request.length] = checksum;
    }
    log?.("send", `DS2 send (concept=0x${opts.concept.toString(16)})`, outBytes);

    // 2. Honour ParRegenTime since last response.
    const elapsed = Date.now() - this.lastResponseAtMs;
    if (this.lastResponseAtMs > 0 && elapsed < opts.regenTimeMs) {
      await delayMs(opts.regenTimeMs - elapsed);
    }

    // Drain any stale RX bytes (from probe responses or partial prior frames) so
    // the upcoming echo/header read doesn't consume them by mistake. Mirrors
    // C# `SendData` which calls `_serialPort.DiscardInBuffer()` before every
    // outbound write. Tests can opt out via `skipPrePurge`.
    if (!opts.skipPrePurge) {
      try {
        await transport.purge();
      } catch {
        /* purge is best-effort */
      }
    }

    // 3. Optionally raise DTR for the duration of this transmit. C# raw-SerialPort
    // path (`EdInterfaceObd.cs:3145-3158`) raises DTR, writes bytes, busy-waits the
    // exact wire-time for the bytes to leave the FTDI's internal TX buffer, then
    // drops DTR. Without that wait, the cable's transceiver flips back to RX mode
    // mid-transmission and corrupts the K-line. The OS-level drain() on serialport
    // doesn't account for the FTDI chip's own buffer, so we apply the same
    // `byteTime * length + DtrTimeCorr` wait here.
    if (opts.sendSetDtr) {
      await transport.setDtr(true);
    }
    try {
      if (opts.interByteTimeMs && opts.interByteTimeMs > 0) {
        for (let i = 0; i < outBytes.length; i++) {
          await transport.write(outBytes.subarray(i, i + 1));
          if (i < outBytes.length - 1) {
            await delayMs(opts.interByteTimeMs);
          }
        }
      } else {
        await transport.write(outBytes);
      }

      if (opts.sendSetDtr) {
        // 8E1 = 1 start + 8 data + 1 parity + 1 stop = 11 bits/byte.
        const bitCount = 11;
        const byteTimeMs = (1000 / opts.baudRate) * bitCount;
        const dtrTimeCorrMs = 5; // matches C# DtrTimeCorrCom default
        await delayMs(byteTimeMs * outBytes.length + dtrTimeCorrMs);
      }
    } finally {
      if (opts.sendSetDtr) {
        await transport.setDtr(false);
      }
    }

    // 4. Optional echo consumption — uses EchoTimeout (not ParTimeoutStd) because
    // the wire-echo round-trip is fast; budgeting the full P-timeout here would
    // mask a stuck-direction symptom for several seconds before retry kicks in.
    if (opts.hasAdapterEcho) {
      const echo = await transport.read(outBytes.length, ECHO_TIMEOUT_MS + ADD_REC_TIMEOUT_MS);
      if (echo.length !== outBytes.length) {
        throw new Error(`DS2: incomplete echo (${echo.length}/${outBytes.length})`);
      }
      for (let i = 0; i < outBytes.length; i++) {
        if (echo[i] !== outBytes[i]) {
          throw new Error(`DS2: echo mismatch at byte ${i}`);
        }
      }
    }

    // 5. Read header. C# uses ParTimeoutStd for the FIRST byte and ParTimeoutTelEnd
    // for subsequent bytes; our transport.read takes a single total-budget plus an
    // idle-detection at the constructor's `telegramEndTimeoutMs`. For the header
    // (typically 2 bytes) ParTimeoutStd is enough.
    const [headerLenSigned] = this.answerLen;
    const headerLen = headerLenSigned < 0 ? -headerLenSigned + 1 : headerLenSigned;
    if (headerLen <= 0) {
      throw new Error("DS2: header length is zero");
    }
    const header = await transport.read(headerLen, opts.timeoutStdMs + ADD_REC_TIMEOUT_MS);
    if (header.length < headerLen) {
      throw new Error(`DS2: short header (${header.length}/${headerLen})`);
    }

    // 6. Compute total length and read the tail.
    const totalLen = telLengthDs2(header, this.answerLen);
    if (totalLen === 0) {
      throw new Error("DS2: telegram length is zero");
    }
    if (totalLen > 0xff) {
      throw new Error(`DS2: telegram length ${totalLen} exceeds 0xff`);
    }
    const tailLen = totalLen - headerLen;
    // The total budget must cover the wire-time for `tailLen` bytes at the K-line
    // baud (1 start + 8 data + 1 parity + 1 stop = 11 bits/byte for 8E1) plus a
    // generous slack for FTDI latency, JS event-loop jitter and inter-byte gaps.
    // C# treats `ParTimeoutTelEnd` as a per-byte idle timeout, but our transport
    // uses a single total cap; bumping the cap to ParTimeoutStd matches C# in
    // the worst case while keeping the idle-detector firing on natural end-of-frame.
    const tail = tailLen > 0
      ? await transport.read(
          tailLen,
          Math.max(
            opts.timeoutStdMs,
            (tailLen * 11 * 1000) / opts.baudRate +
              opts.telegramEndTimeoutMs +
              ADD_REC_TIMEOUT_MS
          )
        )
      : new Uint8Array();
    if (tail.length < tailLen) {
      throw new Error(`DS2: short tail (${tail.length}/${tailLen})`);
    }

    const full = new Uint8Array(totalLen);
    full.set(header, 0);
    full.set(tail, headerLen);

    // 7. Verify XOR checksum unless suppressed.
    if (!opts.checksumNoCheck) {
      const expected = calcChecksumXor(full, 0, totalLen - 1);
      const actual = full[totalLen - 1];
      if (expected !== actual) {
        throw new Error(`DS2: checksum mismatch (expected 0x${expected.toString(16)}, got 0x${actual.toString(16)})`);
      }
    }

    this.lastResponseAtMs = Date.now();
    log?.("recv", `DS2 recv (${full.length} bytes)`, full);
    return full;
  }
}

function delayMs(durationMs: number): Promise<void> {
  if (durationMs <= 0) return Promise.resolve();
  return new Promise((resolve) => setTimeout(resolve, durationMs));
}
