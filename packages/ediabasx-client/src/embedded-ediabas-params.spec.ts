import { describe, expect, it } from "vitest";
import { normalizeParams } from "./embedded-ediabas.js";
import { encodeParamEntry, normalizeClientParams } from "./ediabas-client.js";

/**
 * Channel routing for the widened `IEdiabas.job(...)` params union.
 * `normalizeParams` is the single fan-in for the four accepted
 * shapes; pinning its behaviour here catches drift between the
 * public union type and what `Ediabas.executeJob` ends up seeing.
 */
describe("EmbeddedEdiabas — normalizeParams", () => {
  it("undefined → empty", () => {
    expect(normalizeParams(undefined)).toEqual([]);
  });

  it("empty string → empty (avoid a phantom '' indexed param)", () => {
    expect(normalizeParams("")).toEqual([]);
  });

  it("string splits on `;` into the indexed-string channel", () => {
    expect(normalizeParams("a;b;c")).toEqual(["a", "b", "c"]);
  });

  it("bare Uint8Array → single binary entry", () => {
    const bytes = new Uint8Array([0x10, 0x20]);
    const out = normalizeParams(bytes);
    expect(out).toHaveLength(1);
    expect(out[0]).toBe(bytes);
  });

  it("array passes through verbatim (interleaving preserved)", () => {
    const bytes = new Uint8Array([0xAB]);
    expect(normalizeParams(["pre", bytes, "post"])).toEqual(["pre", bytes, "post"]);
  });
});

/**
 * JSON-RPC wire shape — client side. Pins the encoder so a 0.7.1+
 * server (or its `decodeJobParams`) can read what we emit. The
 * symmetry test for decode lives in `ediabasx-server/` since the
 * two packages don't depend on each other (and shouldn't — keeps
 * `ediabasx-client` free of `@emdzej/ediabasx-server`'s Node-only
 * imports).
 */
describe("EdiabasClient — JSON-RPC param encoding", () => {
  it("string entry passes through unchanged", () => {
    expect(encodeParamEntry("hello")).toBe("hello");
  });

  it("Uint8Array → {binary: <base64>}", () => {
    // 0xAB 0xCD 0xEF — base64 of [171,205,239] = "q83v"
    expect(encodeParamEntry(new Uint8Array([0xAB, 0xCD, 0xEF])))
      .toEqual({ binary: "q83v" });
  });

  it("normalizeClientParams matches the embedded variant", () => {
    /* The two normalizers must agree — they're parallel
       implementations only because the client must stay free of
       the inner Ediabas (and its Node imports) for browser bundles. */
    const bytes = new Uint8Array([0x01]);
    expect(normalizeClientParams(undefined)).toEqual([]);
    expect(normalizeClientParams("")).toEqual([]);
    expect(normalizeClientParams("a;b")).toEqual(["a", "b"]);
    expect(normalizeClientParams(bytes)).toEqual([bytes]);
    expect(normalizeClientParams(["a", bytes])).toEqual(["a", bytes]);
  });

  it("array of mixed entries emits the canonical wire shape", () => {
    const bytes = new Uint8Array([0x01, 0x02]);
    const list = normalizeClientParams(["pre", bytes, "post"]);
    const wire = list.map(encodeParamEntry);
    expect(wire).toEqual(["pre", { binary: "AQI=" }, "post"]);
  });
});
