# @emdzej/ediabasx-core

Shared primitives used across the [EdiabasX](https://github.com/emdzej/ediabasx) monorepo. No external dependencies.

## Install

```bash
pnpm add @emdzej/ediabasx-core
```

## What's in here

| Export | Purpose |
|---|---|
| `cp1252ToUtf8(bytes)` / `utf8ToCp1252(str)` | Round-trip BMW's Windows-1252 strings to/from JS strings |
| `xorDecrypt(bytes, key)` / `xorEncrypt(bytes, key)` | PRG/GRP payload de/encryption (BEST2 uses key `0xF7`) |
| `EdiabasError`, `EdiabasErrorCodes` | Typed errors mirroring the C# `ErrorCodes` enum (`EDIABAS_IFH_*`, `EDIABAS_BIP_*`, `EDIABAS_SYS_*`, …) |
| Constants & type definitions | Stable shapes shared by parser, interpreter, transports |

## Example

```ts
import { cp1252ToUtf8, xorDecrypt, EdiabasError, EdiabasErrorCodes } from "@emdzej/ediabasx-core";

// Decode the encoded section of a PRG/GRP file (everything past 0xA0).
const decoded = xorDecrypt(encoded, new Uint8Array([0xf7]));

// Decode a CP1252 byte string (e.g. job comment, table cell).
const text = cp1252ToUtf8(decoded.subarray(0, 64));

throw new EdiabasError(EdiabasErrorCodes.EDIABAS_BIP_0001, "array overflow");
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
