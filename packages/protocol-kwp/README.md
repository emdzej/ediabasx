# @emdzej/ediabasx-protocol-kwp

KWP2000 / KWP1281 service identifiers and negative-response codes, for [EdiabasX](https://github.com/emdzej/ediabasx).

The actual KWP framing / session handling lives in [`@emdzej/ediabasx-interface-serial`](../interface-serial) — this package is mostly constants you can use when crafting or decoding raw KWP telegrams.

## Install

```bash
pnpm add @emdzej/ediabasx-protocol-kwp
```

## Usage

```ts
import { KwpServiceIds, KwpNegativeResponses } from "@emdzej/ediabasx-protocol-kwp";

const request = new Uint8Array([
  KwpServiceIds.ReadDataById,  // 0x22
  0xf1, 0x90,                  // DID: VIN
]);

// Response negative? Look up the NRC name.
if (response[0] === KwpServiceIds.NegativeResponse) {
  const name = Object.entries(KwpNegativeResponses)
    .find(([, code]) => code === response[2])?.[0];
  console.error(`KWP NRC: ${name}`);
}
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
