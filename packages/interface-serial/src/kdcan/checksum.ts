export function calcChecksumBmwFast(
  data: Uint8Array,
  offset: number,
  length: number
): number {
  let sum = 0;
  for (let i = 0; i < length; i += 1) {
    sum = (sum + data[offset + i]) & 0xff;
  }
  return sum;
}
