# @emdzej/ediabasx-protocol-uds

UDS (ISO 14229) service identifiers, negative-response codes, and **ISO-TP** framing helpers (single / first / consecutive / flow-control frames). Part of [EdiabasX](https://github.com/emdzej/ediabasx).

## Install

```bash
pnpm add @emdzej/ediabasx-protocol-uds
```

## Usage

### ISO-TP segmentation

```ts
import { segmentIsoTpPayload } from "@emdzej/ediabasx-protocol-uds";

// Splits a UDS payload into 8-byte CAN frames per ISO-15765-2.
const frames = segmentIsoTpPayload(
  new Uint8Array([0x22, 0xf1, 0x90, /* …VIN read… */]),
);

for (const frame of frames) {
  await canTx.send(frame); // your CAN driver
}
```

The `interface-serial` package's K+DCAN ISO-TP path uses this internally for D-CAN ECUs.

### Service IDs and NRCs

```ts
import { IsoTpFrameTypes } from "@emdzej/ediabasx-protocol-uds";

if (frameType === IsoTpFrameTypes.FlowControl) {
  // …
}
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
