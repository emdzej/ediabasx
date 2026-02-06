import { SerialTransport } from "../types";
import { calcChecksumBmwFast } from "./checksum";
import { KwpProtocols, parseKeyBytes, sendFastInit } from "./fastInit";

const DEFAULT_TIMERS = {
  w1: 300,
  w2: 20,
  w3: 20,
  w4: 50,
  w5: 300,
  p1: 10,
  p2: 1200,
  p3: 20,
  p4: 0,
  timeoutNr78: 5000,
  retryNr78: 2
} as const;

export const DEFAULT_KWP2000_TIMERS: Kwp2000Timers = { ...DEFAULT_TIMERS };

export type Kwp2000Timers = {
  readonly w1: number;
  readonly w2: number;
  readonly w3: number;
  readonly w4: number;
  readonly w5: number;
  readonly p1: number;
  readonly p2: number;
  readonly p3: number;
  readonly p4: number;
  readonly timeoutNr78: number;
  readonly retryNr78: number;
};

export type Kwp2000SessionOptions = {
  readonly ecuAddress: number;
  readonly testerAddress: number;
  readonly modeSelectPayload: Uint8Array;
  readonly testerPresentPayload: Uint8Array;
  readonly timers?: Partial<Kwp2000Timers>;
  readonly fastInit?: Parameters<typeof sendFastInit>[1];
};

type SessionState = "idle" | "key-bytes" | "mode-select" | "active";

export class Kwp2000Session {
  private readonly ecuAddress: number;
  private readonly testerAddress: number;
  private readonly modeSelectPayload: Uint8Array;
  private readonly testerPresentPayload: Uint8Array;
  private readonly timers: Kwp2000Timers;
  private readonly fastInitOptions?: Parameters<typeof sendFastInit>[1];
  private state: SessionState = "idle";
  private lastResponseAt = 0;
  private readonly nr78Retries = new Map<number, number>();

  constructor(options: Kwp2000SessionOptions) {
    this.ecuAddress = options.ecuAddress;
    this.testerAddress = options.testerAddress;
    this.modeSelectPayload = Uint8Array.from(options.modeSelectPayload);
    this.testerPresentPayload = Uint8Array.from(options.testerPresentPayload);
    this.timers = { ...DEFAULT_TIMERS, ...options.timers };
    this.fastInitOptions = options.fastInit;
  }

  async startSession(transport: SerialTransport): Promise<Uint8Array> {
    this.assertState("idle");
    await sendFastInit(transport, this.fastInitOptions);

    const keyBytes = await this.readKeyBytes(transport);
    return this.startSessionWithKeyBytes(transport, keyBytes);
  }

  async startSessionWithKeyBytes(
    transport: SerialTransport,
    keyBytes: Uint8Array
  ): Promise<Uint8Array> {
    this.assertState("idle");
    if (parseKeyBytes(keyBytes) !== KwpProtocols.Kwp2000) {
      throw new Error("KWP2000 key bytes not detected");
    }

    this.state = "key-bytes";
    await delay(this.timers.w4);

    const modeResponse = await this.sendRequest(transport, this.modeSelectPayload);
    this.state = "mode-select";

    await delay(this.timers.w5);
    await this.sendTesterPresent(transport);

    this.state = "active";
    return modeResponse;
  }

  async sendRequest(
    transport: SerialTransport,
    payload: Uint8Array
  ): Promise<Uint8Array> {
    if (payload.length === 0) {
      return new Uint8Array();
    }

    this.nr78Retries.clear();
    await this.waitRegenTime();

    const telegram = buildBmwFastTelegram(
      payload,
      this.ecuAddress,
      this.testerAddress
    );
    await transport.write(telegram);

    for (;;) {
      const timeout = this.nr78Retries.size > 0
        ? this.timers.timeoutNr78
        : this.timers.p2;
      const response = await readBmwFastTelegram(
        transport,
        timeout,
        this.timers.p1
      );

      const { dataLength, dataOffset } = getBmwFastDataWindow(response);
      if (
        dataLength === 3 &&
        response[dataOffset] === 0x7f &&
        response[dataOffset + 2] === 0x78
      ) {
        this.addNr78(response[2]);
        if (this.nr78Retries.size === 0) {
          this.lastResponseAt = Date.now();
          return response;
        }
        continue;
      }

      this.removeNr78(response[2]);
      this.lastResponseAt = Date.now();
      return response;
    }
  }

  async sendTesterPresent(transport: SerialTransport): Promise<Uint8Array> {
    return this.sendRequest(transport, this.testerPresentPayload);
  }

  private async readKeyBytes(transport: SerialTransport): Promise<Uint8Array> {
    const first = await transport.read(1, this.timers.w1);
    const second = await transport.read(1, this.timers.w2);
    await delay(this.timers.w3);
    return Uint8Array.from([first[0], second[0]]);
  }

  private async waitRegenTime(): Promise<void> {
    const elapsed = Date.now() - this.lastResponseAt;
    const remaining = this.timers.p3 - elapsed;
    if (remaining > 0) {
      await delay(remaining);
    }
  }

  private addNr78(deviceAddress: number): void {
    const current = this.nr78Retries.get(deviceAddress);
    if (current === undefined) {
      this.nr78Retries.set(deviceAddress, 0);
      return;
    }
    const next = current + 1;
    this.nr78Retries.delete(deviceAddress);
    if (next <= this.timers.retryNr78) {
      this.nr78Retries.set(deviceAddress, next);
    }
  }

  private removeNr78(deviceAddress: number): void {
    if (this.nr78Retries.has(deviceAddress)) {
      this.nr78Retries.delete(deviceAddress);
    }
  }

  private assertState(expected: SessionState): void {
    if (this.state !== expected) {
      throw new Error(`Invalid session state: ${this.state}`);
    }
  }
}

export function buildBmwFastTelegram(
  payload: Uint8Array,
  ecuAddress: number,
  testerAddress: number
): Uint8Array {
  const dataLength = payload.length;
  let headerLength = 3;
  let header = new Uint8Array(0);

  if (dataLength > 0x3f) {
    headerLength = 4;
    header = new Uint8Array(headerLength);
    header[0] = 0x80;
    header[1] = ecuAddress & 0xff;
    header[2] = testerAddress & 0xff;
    header[3] = dataLength & 0xff;
  } else {
    header = new Uint8Array(headerLength);
    header[0] = 0x80 | (dataLength & 0x3f);
    header[1] = ecuAddress & 0xff;
    header[2] = testerAddress & 0xff;
  }

  const telegram = new Uint8Array(headerLength + dataLength + 1);
  telegram.set(header, 0);
  telegram.set(payload, headerLength);
  telegram[telegram.length - 1] = calcChecksumBmwFast(
    telegram,
    0,
    telegram.length - 1
  );
  return telegram;
}

function getBmwFastDataWindow(response: Uint8Array): {
  dataLength: number;
  dataOffset: number;
} {
  const dataLengthField = response[0] & 0x3f;
  if (dataLengthField === 0) {
    if (response[3] === 0) {
      return {
        dataLength: (response[4] << 8) + response[5],
        dataOffset: 6
      };
    }
    return { dataLength: response[3], dataOffset: 4 };
  }
  return { dataLength: dataLengthField, dataOffset: 3 };
}

function calcBmwFastLength(response: Uint8Array): number {
  let length = response[0] & 0x3f;
  if (length === 0) {
    if (response[3] === 0) {
      length = (response[4] << 8) + response[5] + 6;
    } else {
      length = response[3] + 4;
    }
  } else {
    length += 3;
  }

  return length;
}

async function readBmwFastTelegram(
  transport: SerialTransport,
  timeoutMs: number,
  telEndTimeoutMs: number
): Promise<Uint8Array> {
  const header = await transport.read(4, timeoutMs);
  if ((header[0] & 0xc0) !== 0x80) {
    throw new Error("Invalid BMW-FAST header byte");
  }

  let headerBytes = Array.from(header);
  if ((header[0] & 0x3f) === 0 && header[3] === 0) {
    const lengthBytes = await transport.read(2, timeoutMs);
    headerBytes = headerBytes.concat(Array.from(lengthBytes));
  }

  const totalLength = calcBmwFastLength(Uint8Array.from(headerBytes));
  const remaining = totalLength - headerBytes.length + 1;
  const tail = await transport.read(remaining, telEndTimeoutMs);
  const full = Uint8Array.from([...headerBytes, ...tail]);

  const checksum = calcChecksumBmwFast(full, 0, totalLength);
  if (full[totalLength] !== checksum) {
    throw new Error("BMW-FAST checksum mismatch");
  }

  return full;
}

function delay(durationMs: number): Promise<void> {
  if (durationMs <= 0) {
    return Promise.resolve();
  }
  return new Promise((resolve) => setTimeout(resolve, durationMs));
}
