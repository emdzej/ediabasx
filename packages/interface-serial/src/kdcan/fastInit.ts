import { SerialTransport } from "../types";
import {
  FAST_INIT_BREAK_MS,
  FAST_INIT_IDLE_MS,
  KWP_KEYBYTE_KWP2000
} from "./constants";
import { delay } from "./delay";
import { withLineControl } from "./lineControl";

export const KwpProtocols = {
  Kwp2000: "kwp2000",
  Kwp1281: "kwp1281"
} as const;

export type KwpProtocol = (typeof KwpProtocols)[keyof typeof KwpProtocols];

export type FastInitOptions = {
  readonly setDtr?: boolean;
  readonly useLLine?: boolean;
  readonly breakDurationMs?: number;
  readonly idleDurationMs?: number;
};

export async function sendFastInit(
  transport: SerialTransport,
  options: FastInitOptions = {}
): Promise<void> {
  const {
    setDtr = false,
    useLLine = false,
    breakDurationMs = FAST_INIT_BREAK_MS,
    idleDurationMs = FAST_INIT_IDLE_MS
  } = options;

  await withLineControl(
    transport,
    {
      setDtr,
      setRts: useLLine,
      sendPulse: async pulseTransport => {
        await pulseTransport.sendPulse?.(
          0x02,
          2,
          breakDurationMs,
          setDtr,
          useLLine
        );
      }
    },
    async () => {
      await transport.setBreak(breakDurationMs);
      await delay(idleDurationMs);
    }
  );
}

export function parseKeyBytes(response: Uint8Array): KwpProtocol {
  if (response.length < 2) {
    throw new Error("Key bytes response must include at least 2 bytes");
  }

  return response[1] === KWP_KEYBYTE_KWP2000
    ? KwpProtocols.Kwp2000
    : KwpProtocols.Kwp1281;
}
