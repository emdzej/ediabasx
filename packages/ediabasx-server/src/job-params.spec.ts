import { describe, expect, it } from "vitest";
import { decodeJobParams } from "./ediabas-server.js";

/**
 * JSON-RPC wire shape — server side. Pins what we accept from
 * ≥0.7.1 clients and what we accept from ≤0.7.0 clients (legacy
 * `"a;b;c"` string). Symmetric with `encodeParamEntry` in
 * `ediabasx-client/src/ediabas-client.ts` — if you change one,
 * change both.
 */
describe("EdiabasServer — decodeJobParams", () => {
  it("undefined → []", () => {
    expect(decodeJobParams(undefined)).toEqual([]);
  });

  it("null → [] (treat absent the same as undefined)", () => {
    expect(decodeJobParams(null)).toEqual([]);
  });

  it("legacy string: empty → []", () => {
    expect(decodeJobParams("")).toEqual([]);
  });

  it("legacy string: splits on `;`", () => {
    expect(decodeJobParams("a;b;c")).toEqual(["a", "b", "c"]);
  });

  it("array of strings: pass-through", () => {
    expect(decodeJobParams(["pre", "post"])).toEqual(["pre", "post"]);
  });

  it("{binary: <base64>} entries decode to Uint8Array", () => {
    const out = decodeJobParams([{ binary: "q83v" }]);
    expect(out).toHaveLength(1);
    expect(out[0]).toBeInstanceOf(Uint8Array);
    expect(Array.from(out[0] as Uint8Array)).toEqual([0xAB, 0xCD, 0xEF]);
  });

  it("mixed entries preserve order + types", () => {
    const out = decodeJobParams(["pre", { binary: "AQI=" }, "post"]);
    expect(out).toHaveLength(3);
    expect(out[0]).toBe("pre");
    expect(out[1]).toBeInstanceOf(Uint8Array);
    expect(Array.from(out[1] as Uint8Array)).toEqual([0x01, 0x02]);
    expect(out[2]).toBe("post");
  });

  it("rejects an unknown entry shape with a positional message", () => {
    expect(() => decodeJobParams([42])).toThrow(/params\[0\]/);
    expect(() => decodeJobParams(["ok", { whatever: 1 }])).toThrow(/params\[1\]/);
  });

  it("rejects non-string/array `params`", () => {
    expect(() => decodeJobParams(42)).toThrow(/string or array/);
  });
});
