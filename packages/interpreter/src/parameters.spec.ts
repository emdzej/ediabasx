import { beforeEach, describe, expect, it } from "vitest";
import { Flags } from "./flags";
import { RegisterSet } from "./registers";
import {
  ParameterSet,
  pary,
  pushParameterBinary,
} from "./operations/parameters";

const S1 = { kind: "S", index: 1 } as const;

// Regression suite for the NUL-append bug described in
// ncsx/docs/ediabasx-pary-nul-bug.md. Mirrors C# OpPary semantics:
// `arg0.SetArrayData(result)` — the binary payload is written raw, no
// terminator. Routing through `setStringValue` (the previous impl)
// grew the destination by one when the last byte wasn't already
// `0x00`, which broke any SGBD that `slen`-checks the input (BMW NCS
// `C_S_SCHREIBEN` tripping `ERROR_BIN_BUFFER` was the trigger).
describe("pary preserves binary payload length", () => {
  let registers: RegisterSet;
  let flags: Flags;
  let parameters: ParameterSet;

  beforeEach(() => {
    registers = new RegisterSet();
    flags = new Flags();
    parameters = new ParameterSet();
  });

  it("payload ending in 0x00 is preserved verbatim", () => {
    const payload = new Uint8Array([0x12, 0x34, 0x00]);
    pushParameterBinary(parameters, 1, payload);

    pary(registers, flags, parameters, S1);

    const out = registers.getSBinary(1);
    expect(Array.from(out)).toEqual([0x12, 0x34, 0x00]);
    expect(out.length).toBe(3);
    expect(flags.z).toBe(false);
  });

  it("payload ending in non-zero is also preserved verbatim", () => {
    const payload = new Uint8Array([0x12, 0x34, 0x89]);
    pushParameterBinary(parameters, 1, payload);

    pary(registers, flags, parameters, S1);

    const out = registers.getSBinary(1);
    expect(Array.from(out)).toEqual([0x12, 0x34, 0x89]);
    expect(out.length).toBe(3);
    expect(flags.z).toBe(false);
  });

  it("terminator-style payload preserves length", () => {
    const payload = new Uint8Array([0x01, 0x02, 0x03]);
    pushParameterBinary(parameters, 1, payload);

    pary(registers, flags, parameters, S1);

    const out = registers.getSBinary(1);
    expect(out.length).toBe(3);
  });

  it("real-world NCS coding payload (16 bytes, last byte 0x0A) keeps length", () => {
    // Anchor: BMW NCS `C_S_SCHREIBEN` failure mode. The header expects
    // a fixed 38-byte buffer (0x16 header + wordCount*wortBreite); a
    // single NUL-append turns 38 into 39 and trips `ERROR_BIN_BUFFER`.
    const payload = new Uint8Array([
      0x89, 0xdb, 0x31, 0x2d, 0x02, 0x04, 0x84, 0x5a,
      0x1a, 0x00, 0x50, 0x4d, 0x10, 0x27, 0x70, 0x0a,
    ]);
    pushParameterBinary(parameters, 1, payload);

    pary(registers, flags, parameters, S1);

    expect(registers.getSBinary(1).length).toBe(16);
  });

  it("empty binary payload sets Z=true and yields length 0", () => {
    pushParameterBinary(parameters, 1, new Uint8Array());

    pary(registers, flags, parameters, S1);

    expect(registers.getSBinary(1).length).toBe(0);
    expect(flags.z).toBe(true);
  });
});
