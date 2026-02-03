import iconv from 'iconv-lite';
import { Buffer } from 'node:buffer';

/**
 * Convert Windows CP1252 encoded buffer to UTF-8 string.
 * CP1252 is the default encoding used in EDIABAS/BEST files.
 */
export function cp1252ToUtf8(buffer: Uint8Array): string {
  return iconv.decode(Buffer.from(buffer), 'cp1252');
}

/**
 * Convert UTF-8 string to Windows CP1252 encoded buffer.
 */
export function utf8ToCp1252(str: string): Uint8Array {
  return new Uint8Array(iconv.encode(str, 'cp1252'));
}
