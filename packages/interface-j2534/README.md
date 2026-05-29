# @emdzej/ediabasx-interface-j2534

SAE J2534 PassThru transport for EdiabasX via the **Tactrix OpenPort 2.0**. Wraps [`@emdzej/j2534-driver`](https://www.npmjs.com/package/@emdzej/j2534-driver) as an `EdiabasInterface` so any SGBD that runs over the K+DCAN serial path can also run over a frame-level OpenPort.

> Requires `@emdzej/j2534-driver` (and `@emdzej/j2534-types`) `^0.3.0` — declared as **peer dependencies** so consumers control the version. Optional peers `@emdzej/j2534-usb` (Node) and `@emdzej/j2534-webserial` (browser) pick the USB transport.

## Why J2534 (vs K+DCAN passthrough)

K+DCAN cables are FTDI USB-UART bridges — fine for fast ECUs but timing-noisy on slow K-line lines. The OpenPort 2.0 is an active J2534 device with its own K-line transceiver, so bit timing, direction switching, and parity are handled in hardware. Verified end-to-end against:

- E46 GS20 transmission (`10GD20.prg IDENT`)
- E46 KMB46 cluster (`C_KMB46.prg C_ZCS_LESEN` — slow EEPROM read, ~250 ms round-trip)

## Interface identity: we masquerade as `OBD`

`UTILITY.PRG`'s `INTERFACE` job (and any BEST2 `xtype` / `xvers` call) reports:

```
TYP     = "OBD"
VERSION = 0xD1 (209)
```

— **identical to what BMW's reference `OBD32.dll` (K+DCAN over FTDI) publishes**, even though this transport is actually SAE J2534 over an OpenPort 2.0.

**Why**: J2534 isn't one of the IFH variants BMW shipped with EDIABAS (the known set is `STD:OBD` / `STD:ADS` / `STD:OMITEC` / `ENET`). SGBDs that branch on TYP (e.g. `if interface_type = "OBD" then ... else ...`) would either reject a literal `"J2534"` or fall through to an untested else-branch. The whole point of this package is "drop-in K+DCAN replacement over OpenPort 2.0" — upper layers should be unable to tell whether the K-line is being driven by an FTDI bridge or a J2534 PassThru device. The masquerade keeps that promise.

The trade-off: a job that legitimately needs to distinguish J2534-from-K+DCAN can't. None of the BMW SGBDs we've encountered do this; if one ever does, the right fix is a separate capability-probe channel, not a different TYP literal.

Values verified via Ghidra of `OBD32.dll`'s WRITEDATA dispatcher (case `0x12` → `"OBD\0"` literal at `_DAT_1000d1d0`, case `0x0B` → hardcoded `0xD1` immediate). Both constants are static — they don't depend on the `Hardware=` INI mode or on any on-wire adapter info.

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

- Tactrix's DLL silently drops `SET_CONFIG` / `GET_CONFIG` calls containing `P1_MIN` / `P2_MIN` / `P2_MAX` / `P3_MAX` / `P4_MAX`. The firmware never sees those values via the DLL. **`@emdzej/j2534-driver` 0.3.0+ mirrors this blacklist** in its own `passThruIoctl` — sending non-default values for those params on OpenPort 2.0 has been observed to corrupt the device's persistent configuration and require a Tactrix EcuFlash firmware reflash to recover. Override the safety with `allowUnsafeConfigParams: true` only when knowingly attempting recovery (e.g. writing the J2534 §6.4 sentinel `0xFFFFFFFF` = "use default").
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
