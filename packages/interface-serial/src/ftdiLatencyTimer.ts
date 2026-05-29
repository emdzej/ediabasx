/**
 * Apply the FTDI USB-side "latency timer" knob via the OS's standard
 * FTDI driver — no FTD2XX / libusb dependency. The default of 16 ms
 * means the FTDI chip waits up to 16 ms after the last byte before
 * forwarding a partial USB packet; for slow-K-line BMW ECUs (cluster,
 * IKE) that adds enough delay that some inter-byte windows close
 * before the host can react. Dropping it to 1 ms removes the penalty.
 *
 * BMW's own OBD32.dll never touches this — they rely on the user
 * having set it via Device Manager → Advanced. We do it from code so
 * the operator doesn't have to know.
 *
 * Per-OS reachability:
 *   - Linux: `/sys/bus/usb-serial/devices/<ttyName>/latency_timer`
 *     (1–255 ms, plain text file write).
 *   - macOS: `ioctl(fd, IOSSDATALAT, &latency_us)` — requires a
 *     native addon (not in scope here). Returns `not-applied` with
 *     a hint; affected users can run the ediabasx-gateway on a
 *     non-mac host or fall back to manual config.
 *   - Windows: per-COM registry key under
 *     `HKLM\SYSTEM\CurrentControlSet\Enum\FTDIBUS\…\Device Parameters\LatencyTimer`.
 *     Setting from code needs admin AND a non-trivial FTDIBUS subkey
 *     walk to find the right device. Documented manual path is faster
 *     for users; we return `not-applied` with the Device-Manager hint.
 *   - Anything else (browser / unknown): silent no-op.
 */

// `node:fs/promises` and `node:path` are imported lazily inside
// `applyLinux` only — keeping the static graph free of Node-only
// modules so this file can be safely included in a browser bundle
// (Vite would otherwise fail to resolve them for client builds).

export type LatencyTimerResult =
  | { applied: true; path: string; valueMs: number }
  | { applied: false; reason: string; hint?: string };

export async function applyFtdiLatencyTimer(
  portPath: string,
  latencyMs: number
): Promise<LatencyTimerResult> {
  if (!Number.isFinite(latencyMs) || latencyMs < 1 || latencyMs > 255) {
    return { applied: false, reason: `invalid latencyMs=${latencyMs} (must be 1..255)` };
  }

  // Browser / non-Node env: no access to OS-level paths.
  if (typeof process === "undefined" || !process.platform) {
    return { applied: false, reason: "non-Node environment (browser?)" };
  }

  switch (process.platform) {
    case "linux":
      return applyLinux(portPath, latencyMs);
    case "darwin":
      return applyDarwin(portPath, latencyMs);
    case "win32":
      return {
        applied: false,
        reason: "Windows registry write needs admin + per-device FTDIBUS subkey walk",
        hint: "Device Manager → COM port → Properties → Port Settings → Advanced → set 'Latency Timer (msec)' = 1.",
      };
    default:
      return { applied: false, reason: `unsupported platform: ${process.platform}` };
  }
}

async function applyDarwin(portPath: string, latencyMs: number): Promise<LatencyTimerResult> {
  // The native addon is shipped as a separate, mac-only optional dep.
  // If it's missing (Linux/Windows install, or build failed because
  // Xcode CLT isn't present) we gracefully return a hint.
  //
  // The specifier is held in a variable so Rollup / Vite can't
  // statically trace the dynamic import — otherwise the web app's
  // browser bundle would try to resolve `node:module` (used by the
  // addon's `createRequire`) and fail. At runtime this branch only
  // executes when `process.platform === "darwin"`, so a browser
  // bundle never reaches it.
  let mod: { setLatencyMicros(p: string, us: number): { ok: boolean; error?: string } };
  try {
    const macAddonSpec = "@emdzej/ediabasx-mac-ftdi-latency";
    mod = (await import(macAddonSpec)) as typeof mod;
  } catch (err) {
    return {
      applied: false,
      reason: `macOS native addon not loaded: ${(err as Error).message}`,
      hint:
        "Install Xcode Command Line Tools (`xcode-select --install`) and reinstall " +
        "@emdzej/ediabasx-mac-ftdi-latency, or run ediabasx-gateway on another host.",
    };
  }
  const result = mod.setLatencyMicros(portPath, latencyMs * 1000);
  if (result.ok) {
    return { applied: true, path: portPath, valueMs: latencyMs };
  }
  return {
    applied: false,
    reason: `IOSSDATALAT ioctl failed: ${result.error ?? "unknown error"}`,
    hint: portPath.startsWith("/dev/tty.")
      ? "macOS `tty.*` devices are exclusive-open; try the matching `/dev/cu.*` path instead."
      : undefined,
  };
}

async function applyLinux(portPath: string, latencyMs: number): Promise<LatencyTimerResult> {
  const [{ writeFile }, { basename }] = await Promise.all([
    import("node:fs/promises"),
    import("node:path"),
  ]);
  // /dev/ttyUSB0 → ttyUSB0
  const ttyName = basename(portPath);
  if (!/^tty(USB|ACM)\d+$/.test(ttyName)) {
    return {
      applied: false,
      reason: `port "${portPath}" doesn't look like a usb-serial device (skipping sysfs write)`,
    };
  }
  const sysfsPath = `/sys/bus/usb-serial/devices/${ttyName}/latency_timer`;
  try {
    await writeFile(sysfsPath, String(latencyMs));
    return { applied: true, path: sysfsPath, valueMs: latencyMs };
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "ENOENT") {
      return {
        applied: false,
        reason: `${sysfsPath} not present (non-FTDI cable, or kernel without latency_timer attribute)`,
      };
    }
    if (code === "EACCES" || code === "EPERM") {
      return {
        applied: false,
        reason: `${sysfsPath} write denied (need root or a udev rule granting write to the user)`,
        hint:
          `Add a udev rule: SUBSYSTEM=="usb-serial", ATTR{latency_timer}="${latencyMs}" ` +
          `to /etc/udev/rules.d/99-ftdi-latency.rules and reload.`,
      };
    }
    return { applied: false, reason: `unexpected error writing ${sysfsPath}: ${(err as Error).message}` };
  }
}
