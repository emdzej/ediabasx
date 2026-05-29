# @emdzej/ediabasx-interface-serial

Serial / K-line / **K+DCAN** transport for the [EdiabasX](https://github.com/emdzej/ediabasx) BEST2 interpreter. Implements BMW DS2 framing, KWP2000 (fast / 5-baud init), and ISO-TP over CAN for D-CAN ECUs.

## Install

```bash
pnpm add @emdzej/ediabasx-interface-serial
```

## What it does

- **DS2** framing with proper header / length / XOR-checksum handling (concepts `0x0001 / 0x0005 / 0x0006`)
- **Smart K+DCAN** detection — probes the adapter on connect, then encodes K-line baud/parity inside adapter telegrams so the cable drives the K-line correctly
- **Passthrough K+DCAN** (raw FTDI) — drives the FTDI UART at the K-line baud directly, with DTR toggling for direction control
- **KWP2000** sessions with key-byte parsing, fast-init / 5-baud init, key-byte-derived protocol selection
- **ISO-TP** segmentation / reassembly (single, first, consecutive, flow-control frames) for D-CAN ECUs
- Retry-on-failure loop (mirrors C# `ObdTrans`), DTR/RTS line control, configurable timeouts (P1, P2, P3, W1–W5, NR78, regen-time)
- **FTDI USB-side latency timer** auto-tuned on connect (`latencyTimerMs`, default 1 ms). Default FTDI behaviour is 16 ms, which is coarse enough to break slow-init K-line negotiation on cluster / IKE / body modules; we shrink it via OS-specific paths so the user doesn't need to know about Device Manager / sysfs / ioctls.

## Usage

```ts
import { SerialInterface, NodeSerialTransport } from "@emdzej/ediabasx-interface-serial";

const transport = new SerialInterface({
  transport: new NodeSerialTransport({ path: "/dev/cu.usbserial-A50285BI" }),
  timeoutMs: 5000,
});

await transport.connect();
// BEST2's INITIALISIERUNG job will typically call xsetpar to set
// concept/baud/timing. Or wire it up via @emdzej/ediabasx-ediabas.
```

For the common case, use [`@emdzej/ediabasx-interfaces`](../interfaces) to build a transport from a config object:

```ts
import { createInterface } from "@emdzej/ediabasx-interfaces";

const transport = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
  protocol: "isotp",
  initMode: "fast",
});
```

## Transport adapters

| Class | Use case |
|---|---|
| `NodeSerialTransport` | Node.js via the `serialport` package |
| `WebSerialTransport` | Browser via the Web Serial API (Chrome/Edge/Opera/Brave on HTTPS or localhost) |
| `MockSerialTransport` | Tests — stage bytes via `enqueueRead`, observe writes |
| `AdapterWrappedTransport` (`./kdcan`) | Wraps a raw transport with K+DCAN adapter telegram framing |

## FTDI latency timer

The FTDI USB-to-serial bridge defaults to a 16 ms latency timer (waits up to 16 ms for more bytes before forwarding a partial USB packet). For slow K-line ECUs, that adds enough delay that inter-byte windows close before the host can react. On `connect()` we apply `latencyTimerMs` (default 1) via the OS's standard FTDI driver:

| OS | Mechanism | Status |
|---|---|---|
| Linux | `/sys/bus/usb-serial/devices/<tty>/latency_timer` write | implemented, no extra dep |
| macOS | `ioctl(fd, IOSSDATALAT, &us)` via [`@emdzej/ediabasx-mac-ftdi-latency`](../mac-ftdi-latency) (optional native addon — only installed on Darwin) | implemented; needs Xcode CLT at install time |
| Windows | Per-COM registry `…\Device Parameters\LatencyTimer` | hint only; set via Device Manager → Advanced → Latency Timer = 1 ms |
| Browser | Out of reach (Web Serial doesn't expose FTDI internals) | falls through silently; for slow K-line over WebSerial, run [`ediabasx-gateway`](../../apps/cli) on a Linux/macOS/Windows host and switch the web app's interface to **Gateway** |

Set `latencyTimerMs: 0` to skip the apply step entirely (you can still tune the driver out-of-band).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
