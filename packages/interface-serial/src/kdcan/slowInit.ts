import { SerialTransport } from "../types";
import { delay } from "./delay";
import { withLineControl } from "./lineControl";

export const FIVE_BAUD_BIT_TIME_MS = 200;

export type FiveBaudInitOptions = {
  readonly setDtr?: boolean;
  readonly bothLines?: boolean;
  readonly bitTimeMs?: number;
  readonly autoKeyByteDelay?: number;
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

  await withLineControl(
    transport,
    {
      setDtr,
      setRts: bothLines,
      sendPulse: async pulseTransport => {
        await pulseTransport.sendPulse?.(
          build5BaudDataBits(value),
          10,
          bitTimeMs,
          setDtr,
          bothLines,
          autoKeyByteDelay
        );
      }
    },
    async () => {
      const bits = buildBitSequence(value);
      for (const bit of bits) {
        if (bit === 0) {
          await transport.setBreak(bitTimeMs);
        } else {
          await transport.setBreak(0);
          await delay(bitTimeMs);
        }
      }
    }
  );
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
