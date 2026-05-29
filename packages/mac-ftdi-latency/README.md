# @emdzej/ediabasx-mac-ftdi-latency

macOS-only native addon: set the FTDI USB-side latency timer via the `IOSSDATALAT` ioctl on Apple's built-in `AppleUSBFTDI` driver. Used as an **optional dependency** of [`@emdzej/ediabasx-interface-serial`](../interface-serial) — Linux uses sysfs, Windows uses the registry, this package handles the macOS hole.

## Why this exists

FTDI USB-to-serial bridges (FT232BL / FT232RL, the K+DCAN cable family) default to a 16 ms latency timer: the chip waits up to 16 ms for more bytes before flushing a partial USB packet. For slow BMW K-line ECUs (cluster, IKE, body modules) that's enough to miss inter-byte windows and produce sporadic `ERROR_ECU_UNKNOWN_STATUSBYTE` failures.

On Linux and Windows the OS exposes the timer through documented paths. macOS's built-in serial driver exposes it only through the `IOSSDATALAT` ioctl on a `/dev/cu.*` file descriptor — no sysfs, no plist, no GUI. This package wraps that ioctl in a Node N-API addon so consumers can drop it from 16 ms → 1 ms in one call.

## Install

Normally pulled in automatically as an optional dep of `@emdzej/ediabasx-interface-serial` (it's marked `"os": ["darwin"]` so non-mac installs skip it cleanly):

```bash
pnpm add @emdzej/ediabasx-interface-serial   # macOS users get this transitively
```

Direct usage:

```bash
pnpm add @emdzej/ediabasx-mac-ftdi-latency
```

**Build-time requirement**: Xcode Command Line Tools (`xcode-select --install`). The addon compiles via `node-gyp` during `npm install`.

## Usage

```ts
import { setLatencyMicros } from "@emdzej/ediabasx-mac-ftdi-latency";

const result = setLatencyMicros("/dev/cu.usbserial-A50285BI", 1000); // 1 ms
if (result.ok) {
  console.log("latency set");
} else {
  console.warn("latency not set:", result.error);
}
```

`setLatencyMicros` is non-throwing — it returns `{ ok: false, error: string }` on every failure (device path missing, ioctl error, non-darwin platform). Callers treat it as best-effort tuning.

## How it works

The addon opens the device file non-exclusively (`O_RDWR | O_NOCTTY | O_NONBLOCK`) — macOS `cu.*` callout devices explicitly allow concurrent opens, so we don't fight whatever userspace driver (`node-serialport`, EDIABAS, etc.) holds the long-lived fd. The `IOSSDATALAT` ioctl applies to the underlying FTDI device (not the fd), so the change persists across our `close()`.

Header reference: `<IOKit/serial/ioss.h>`.

## Why "optional" dependency

`@emdzej/ediabasx-interface-serial`'s `package.json` lists this under `optionalDependencies`. That means:

- macOS installs build the addon (assuming Xcode CLT) and the dynamic-import call inside `applyFtdiLatencyTimer` resolves it.
- Linux / Windows installs skip the package entirely (`"os": ["darwin"]`), and the dynamic-import branch returns a soft "needs gateway / Device Manager" hint instead.
- The `interface-serial` install never fails even if this addon can't build — `optionalDependencies` deliberately ignores install errors.

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
