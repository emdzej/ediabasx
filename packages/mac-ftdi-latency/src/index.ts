// Thin TypeScript wrapper around the native addon. The `.node` binary
// is built at install time by `node-gyp rebuild` (run from this
// package's `install` script). Consumers should treat the addon's
// `setLatencyMicros` as best-effort and fall back gracefully on
// `{ ok: false, error }` (it's a soft tuning, not protocol-essential).

import { createRequire } from "node:module";

export interface LatencyResult {
  ok: boolean;
  error?: string;
}

interface NativeBinding {
  setLatencyMicros(devicePath: string, latencyUs: number): LatencyResult;
}

// Load the prebuilt .node binary lazily. `createRequire` lets us use
// CommonJS-style `.node` loading from this ESM module without needing
// the experimental `--experimental-import-meta-resolve` flag.
let cachedBinding: NativeBinding | null = null;

function loadBinding(): NativeBinding {
  if (cachedBinding) return cachedBinding;
  const require = createRequire(import.meta.url);
  // `../build/Release/mac_ftdi_latency.node` resolved relative to
  // `dist/index.js` → ../build/Release/...
  cachedBinding = require("../build/Release/mac_ftdi_latency.node") as NativeBinding;
  return cachedBinding;
}

/**
 * Apply the FTDI USB-side latency timer to a macOS serial device.
 *
 * @param devicePath  e.g. "/dev/cu.usbserial-A50285BI"
 * @param latencyUs   microseconds. **Safe range at 9600 baud: 2000+ µs.**
 *                    Setting below the per-byte UART transit time
 *                    (1.15 ms at 9600 8E1) creates a flush-vs-receive
 *                    race in `AppleUSBFTDI` that corrupts reads.
 *                    Pass `0` to reset the driver to its built-in
 *                    default — this also clears any FIFO state left
 *                    over from a previous bad latency value, which a
 *                    plain re-set to e.g. 16000 does NOT do. The
 *                    setting persists at the kernel-driver level and
 *                    survives process exit / `close()`.
 */
export function setLatencyMicros(devicePath: string, latencyUs: number): LatencyResult {
  if (process.platform !== "darwin") {
    return { ok: false, error: `unsupported platform: ${process.platform}` };
  }
  try {
    return loadBinding().setLatencyMicros(devicePath, latencyUs);
  } catch (err) {
    return { ok: false, error: `failed to load native binding: ${(err as Error).message}` };
  }
}
