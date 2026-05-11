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
| `MockSerialTransport` | Tests — stage bytes via `enqueueRead`, observe writes |
| `AdapterWrappedTransport` (`./kdcan`) | Wraps a raw transport with K+DCAN adapter telegram framing |

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
