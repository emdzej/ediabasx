import { SerialTransport } from "../types";

type PulseCapableTransport = SerialTransport & {
  sendPulse?: (...args: unknown[]) => Promise<void>;
};

export type LineControlOptions = {
  readonly setDtr?: boolean;
  readonly setRts?: boolean;
  readonly sendPulse?: (transport: PulseCapableTransport) => Promise<void>;
};

export async function withLineControl(
  transport: SerialTransport,
  options: LineControlOptions,
  initLogic: () => Promise<void>
): Promise<void> {
  const { setDtr = false, setRts = false, sendPulse } = options;

  await transport.purge();

  const pulseTransport = transport as PulseCapableTransport;
  if (sendPulse && pulseTransport.sendPulse) {
    await sendPulse(pulseTransport);
    return;
  }

  if (setDtr) {
    await transport.setDtr(true);
  }

  if (setRts) {
    await transport.setRts(true);
  }

  try {
    await initLogic();
  } finally {
    if (setRts) {
      await transport.setRts(false);
    }

    if (setDtr) {
      await transport.setDtr(false);
    }
  }
}
