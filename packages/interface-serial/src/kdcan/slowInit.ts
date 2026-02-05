import { SerialTransport } from "../types";

export const FIVE_BAUD_BIT_TIME_MS = 200;

export type FiveBaudInitOptions = {
  readonly setDtr?: boolean;
  readonly bothLines?: boolean;
  readonly bitTimeMs?: number;
  readonly autoKeyByteDelay?: number;
};

type PulseCapableTransport = SerialTransport & {
  sendPulse?: (
    dataBits: number,
    length: number,
    pulseWidthMs: number,
    setDtr: boolean,
    bothLines: boolean,
    autoKeyByteDelay?: number
  ) => Promise<void>;
};

export function build5BaudDataBits(value: number): number {
  const masked = value & 0xff;
  return (masked << 1) | 0x0200;
}

export async function send5BaudInit(
  transport: SerialTransport,
  value: number,
  options: FiveBaudInitOptions = {}
): Promise<void> {
  const {
    setDtr = false,
    bothLines = false,
    bitTimeMs = FIVE_BAUD_BIT_TIME_MS,
    autoKeyByteDelay = 0
  } = options;

  await transport.purge();

  const pulseTransport = transport as PulseCapableTransport;
  if (pulseTransport.sendPulse) {
    await pulseTransport.sendPulse(
      build5BaudDataBits(value),
      10,
      bitTimeMs,
      setDtr,
      bothLines,
      autoKeyByteDelay
    );
    return;
  }

  if (setDtr) {
    await transport.setDtr(true);
  }

  if (bothLines) {
    await transport.setRts(true);
  }

  const bits = buildBitSequence(value);
  for (const bit of bits) {
    if (bit === 0) {
      await transport.setBreak(bitTimeMs);
    } else {
      await transport.setBreak(0);
      await delay(bitTimeMs);
    }
  }

  if (bothLines) {
    await transport.setRts(false);
  }

  if (setDtr) {
    await transport.setDtr(false);
  }
}

function buildBitSequence(value: number): number[] {
  const masked = value & 0xff;
  const bits = [0];
  for (let i = 0; i < 8; i += 1) {
    bits.push((masked >> i) & 0x01);
  }
  bits.push(1);
  return bits;
}

function delay(durationMs: number): Promise<void> {
  if (durationMs <= 0) {
    return Promise.resolve();
  }
  return new Promise((resolve) => setTimeout(resolve, durationMs));
}
