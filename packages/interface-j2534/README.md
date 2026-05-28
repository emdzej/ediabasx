# @emdzej/ediabasx-interface-j2534

SAE J2534 PassThru transport for EdiabasX via the **Tactrix OpenPort 2.0**. Wraps [`@emdzej/j2534-driver`](https://www.npmjs.com/package/@emdzej/j2534-driver) as an `EdiabasInterface` so any SGBD that runs over the K+DCAN serial path can also run over a frame-level OpenPort.

## Why J2534 (vs K+DCAN passthrough)

K+DCAN cables are FTDI USB-UART bridges — fine for fast ECUs but timing-noisy on slow K-line lines. The OpenPort 2.0 is an active J2534 device with its own K-line transceiver, so bit timing, direction switching, and parity are handled in hardware. Verified end-to-end against:

- E46 GS20 transmission (`10GD20.prg IDENT`)
- E46 KMB46 cluster (`C_KMB46.prg C_ZCS_LESEN` — slow EEPROM read, ~250 ms round-trip)

## Use

```ts
import { Ediabas } from '@emdzej/ediabasx-ediabas';
import { J2534Interface } from '@emdzej/ediabasx-interface-j2534';

const ed = new Ediabas({
  ecuPath: '.',
  transport: new J2534Interface({
    transport: { kind: 'serial' },   // node: USB-FTDI driver
    protocol: 'ds2',                 // ds2 | kwp | can
    baudRate: 9600,
  }),
});

await ed.connect();
ed.loadSgbd('C_KMB46');
const results = await ed.executeJob('C_ZCS_LESEN');
await ed.disconnect();
```

For browser-side use, hand the constructor an instance from `@emdzej/j2534-webserial`:

```ts
import { WebSerialTransport } from '@emdzej/j2534-webserial';

new J2534Interface({
  transport: { kind: 'instance', transport: new WebSerialTransport() },
  protocol: 'ds2',
  baudRate: 9600,
});
```

## Slow K-line ECUs

Without a host-side `ParRegenTime` wait between transactions, OpenPort firmware drops responses from clusters / IKE / body modules (slower than the J2534 `P2_MAX` window, which Tactrix's DLL doesn't expose). `J2534Interface.send()` enforces this delay host-side — mirrors `Ds2Session.sendRequest()` in `@emdzej/ediabasx-interface-serial`. The SGBD's `xsetpar` `ParRegenTime` (parameters[6]) drives the wait. **No action needed** — works automatically as long as the SGBD calls `INITIALISIERUNG`.

Some related findings (verified via Ghidra of `op20pt32.dll`):

- Tactrix's DLL silently drops `SET_CONFIG` calls containing `P2_MAX` / `P2_MIN` / `P3_MAX` / `P4_MAX` / `P1_MIN`. The firmware never sees those values.
- The `att` (transmit) USB cmd carries a `<timeoutMicros>` field — Tactrix defaults to 1 s for K-line. `@emdzej/j2534-driver` 0.2.0+ propagates the J2534 `Timeout` argument here.

## Configuration

| Option | Default | Purpose |
|---|---|---|
| `protocol` | `"ds2"` | Wire protocol — `ds2` for E36/E39/E46-era K-line, `kwp` for ISO14230 fast init, `can` for raw frames. Note: the SGBD's `xsetpar` overrides this on first job. |
| `baudRate` | `9600` | K-line baud. Ignored for `can`. |
| `loopback` | `true` | Have OpenPort echo TX back; the interface filters echoes host-side. Matches the j2534 repo's DS2 reference example. |
| `hostInterByteMs` | `0` | Host-side inter-byte gap. Workaround for ECUs that need K+DCAN-style USB-chunking delays; usually unnecessary. |
| `readTimeoutMs` | `1000` | Per-poll receive timeout. |
| `defaultBatteryMv` | `12000` | Battery-voltage fallback when the device can't measure. |

## Debugging

- `EDIABASX_VERBOSE=1` — TX/RX bytes, setpar decode, setconfig requests, regen waits.
- `J2534_RAW_TRACE=1` — raw USB-byte chunks from `@emdzej/j2534-driver`. Useful for telling "device sent nothing" apart from "device sent a frame our K-line assembler dropped".

## See also

- [`@emdzej/j2534-driver`](https://www.npmjs.com/package/@emdzej/j2534-driver) — the underlying SAE J2534 implementation.
- [`@emdzej/ediabasx-interface-serial`](../interface-serial/README.md) — K+DCAN / raw FTDI alternative.
