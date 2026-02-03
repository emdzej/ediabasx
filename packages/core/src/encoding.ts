const CP1252_TABLE: Array<number> = [
  0x20ac, // 0x80 €
  0x0081, // 0x81 (undefined)
  0x201a, // 0x82 ‚
  0x0192, // 0x83 ƒ
  0x201e, // 0x84 „
  0x2026, // 0x85 …
  0x2020, // 0x86 †
  0x2021, // 0x87 ‡
  0x02c6, // 0x88 ˆ
  0x2030, // 0x89 ‰
  0x0160, // 0x8a Š
  0x2039, // 0x8b ‹
  0x0152, // 0x8c Œ
  0x008d, // 0x8d (undefined)
  0x017d, // 0x8e Ž
  0x008f, // 0x8f (undefined)
  0x0090, // 0x90 (undefined)
  0x2018, // 0x91 ‘
  0x2019, // 0x92 ’
  0x201c, // 0x93 “
  0x201d, // 0x94 ”
  0x2022, // 0x95 •
  0x2013, // 0x96 –
  0x2014, // 0x97 —
  0x02dc, // 0x98 ˜
  0x2122, // 0x99 ™
  0x0161, // 0x9a š
  0x203a, // 0x9b ›
  0x0153, // 0x9c œ
  0x009d, // 0x9d (undefined)
  0x017e, // 0x9e ž
  0x0178, // 0x9f Ÿ
];

const CP1252_REVERSE_TABLE = new Map<number, number>(
  CP1252_TABLE.map((codePoint, index) => [codePoint, 0x80 + index]),
);

export function cp1252ToUtf8(buffer: Uint8Array): string {
  let result = "";

  for (const byte of buffer) {
    if (byte < 0x80 || byte >= 0xa0) {
      result += String.fromCodePoint(byte);
      continue;
    }

    const codePoint = CP1252_TABLE[byte - 0x80];
    result += String.fromCodePoint(codePoint);
  }

  return result;
}

export function utf8ToCp1252(str: string): Uint8Array {
  const bytes: number[] = [];

  for (const char of str) {
    const codePoint = char.codePointAt(0);

    if (codePoint === undefined) {
      continue;
    }

    if (codePoint <= 0x7f) {
      bytes.push(codePoint);
      continue;
    }

    if (codePoint >= 0xa0 && codePoint <= 0xff) {
      bytes.push(codePoint);
      continue;
    }

    const mapped = CP1252_REVERSE_TABLE.get(codePoint);
    if (mapped !== undefined) {
      bytes.push(mapped);
      continue;
    }

    bytes.push(0x3f);
  }

  return Uint8Array.from(bytes);
}
