# platform/posix

POSIX (macOS / Linux) backend for ediabasx-native.

## What's here

- **`serial.c`** — K-line / K+DCAN serial transport. Owns an FTDI tty
  device (typically `/dev/cu.usbserial-XXXX`), speaks DS2 with 2-byte or
  3-byte headers, and wraps frames in adapter telegrams when a smart
  K+DCAN cable is detected.
- **`loaders.c`** — default `sgbd_loader` + `table_loader` implementations.
  Both take an ECU directory string as context and resolve filenames
  case-insensitively (so `MS420DS0.PRG`, `Ms420Ds0.prg`, `ms420ds0.PRG`
  all hit the same file — matches BMW disk conventions).

## Serial transport notes

K+DCAN cables are **smart adapters**, not dumb FTDI passthroughs. The USB
side always runs at 115200 8N1 (the adapter's command channel); the K-line
side uses whatever baud + parity is embedded in each adapter telegram (9600
8E1 for DS2/Concept-1).

The cable is probed on connect via three telegrams (ignition, escape mode,
firmware). If the firmware probe responds with adapter type ≥ 0x0002, the
backend marks `is_kdcan = true` and wraps subsequent DS2 frames in adapter
telegrams. If the probe fails (older dumb cables, or cables in passthrough
mode), it falls back to raw K-line at the configured baud / parity.

Adapter telegram layout (firmware ≥ 0x0008):

```
[0x00] [0x02] [baudHalf_H] [baudHalf_L] [flags1] [flags2]
[interByteTime] [KWP1281_TIMEOUT=60] [length_H] [length_L]
[payload...] [bmwFastChecksum]
```

The BMW-FAST checksum is a plain byte sum & 0xFF (not the XOR checksum used
inside DS2 itself).

`apply_config()` is a no-op when `is_kdcan` — the host UART stays at
115200 8N1 regardless of what the SGBD's `xsetpar` requests, because the
cable applies the K-line config internally.

### FTDI latency timer

The macOS FTDI driver defaults the latency timer to 16 ms, which serialises
per-byte reads into 16ms chunks and breaks DS2 reception. The backend
deliberately does **not** auto-apply `IOSSDATALAT` — setting it below the
per-byte transit time corrupts reads in ways that survive process restart.
Recovery is replug or reboot. If you need to tune it, do so externally and
verify with a known-good ECU first.

## Loader notes

Both loaders use `opendir` + `strcasecmp` to find the actual filename, so
the same code works against `~/Downloads/inpa/EDIABAS/Ecu/` (mixed case)
and lower-case Linux layouts.

The SGBD loader appends `.prg` to the variant name (`MS420DS0` →
`MS420DS0.prg`). The table loader leaves the filename alone but appends
`.prg` if no extension is present — `.tab` companion files aren't
supported yet (they'd need a separate parser).

Returned `edxn_prg_t *` and backing `uint8_t *` are both `malloc`'d; the
caller (the VM) owns them and frees via `edxn_prg_free + free` on swap or
`edxn_vm_free`.
