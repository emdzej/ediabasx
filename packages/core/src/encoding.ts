/**
 * Windows CP1252 codec.
 *
 * Browser-safe — uses `TextDecoder("windows-1252")` for decode (part of the
 * WHATWG Encoding standard, present in every browser and in Node ≥ 11) and
 * derives the encode table from that same decoder so the mapping in both
 * directions comes from one source of truth.
 *
 * `TextEncoder` is UTF-8 only by spec, so there's no symmetric encode path —
 * we build the byte→char map from the decoder once, then invert it. Code
 * points outside CP1252's repertoire encode as `?` (0x3F), matching the
 * historical EDIABAS convention and the `iconv-lite` behaviour this used to
 * delegate to.
 */

const FALLBACK_BYTE = 0x3f; // '?'

// Lazy singleton — TextDecoder construction allocates a small object, no
// point doing it per call (`cp1252ToUtf8` is hot in the BEST2 parser).
let decoder: TextDecoder | null = null;

function getDecoder(): TextDecoder {
  if (!decoder) decoder = new TextDecoder("windows-1252");
  return decoder;
}

let encodeTable: Map<number, number> | null = null;

/**
 * Build (and memoise) the encode table by asking the decoder what every
 * byte in 0x00–0xFF maps to. CP1252 is a single-byte codepage, so the
 * result is a code-point → byte map with 256 entries (a handful collapse
 * because the codepage has five undefined slots that the decoder maps to
 * the same Unicode "private use" char).
 */
function getEncodeTable(): Map<number, number> {
  if (encodeTable) return encodeTable;
  const dec = getDecoder();
  const table = new Map<number, number>();
  const singleByte = new Uint8Array(1);
  for (let b = 0; b < 256; b++) {
    singleByte[0] = b;
    const decoded = dec.decode(singleByte);
    if (decoded.length === 1) {
      const cp = decoded.charCodeAt(0);
      // CP1252's "undefined" slots (0x81, 0x8D, 0x8F, 0x90, 0x9D) all decode
      // to control chars in the same code-point range as the byte itself —
      // skip them so an attempt to encode e.g. U+0081 round-trips as the
      // fallback rather than producing the undefined byte.
      if ((b >= 0x80 && b <= 0x9f) && cp === b) continue;
      table.set(cp, b);
    }
  }
  encodeTable = table;
  return table;
}

/**
 * Convert CP1252-encoded bytes to a JS string.
 */
export function cp1252ToUtf8(bytes: Uint8Array): string {
  return getDecoder().decode(bytes);
}

/**
 * Convert a JS string to a CP1252-encoded byte array.
 *
 * Code points outside CP1252's repertoire (including surrogate pairs / any
 * char above U+FFFF) are replaced with `?` (0x3F).
 */
export function utf8ToCp1252(str: string): Uint8Array {
  const table = getEncodeTable();
  // Pre-size: CP1252 is single-byte, so output length == code-point count.
  // `string.length` counts UTF-16 code units (a surrogate pair contributes
  // one fallback byte); worst case bound = str.length and we trim after.
  const out = new Uint8Array(str.length);
  let i = 0;
  for (const ch of str) {
    const cp = ch.codePointAt(0)!;
    out[i++] = table.get(cp) ?? FALLBACK_BYTE;
  }
  return i === out.length ? out : out.subarray(0, i);
}
