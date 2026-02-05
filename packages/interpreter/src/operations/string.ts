/**
 * BEST2 String Operations
 *
 * This module implements string manipulation opcodes for the BEST2 interpreter:
 * - SCAT (string concatenate)
 * - SLEN (string length)
 * - SCMP (string compare)
 * - SGET/SSET (get/set character at index)
 * - STOI/ITOS (string to int / int to string)
 * - STOH/HTOS (string to hex / hex to string)
 * - SFIND (find substring)
 * - SSUB (substring)
 * - SUPPER/SLOWER (uppercase/lowercase)
 * - STRIM (trim whitespace)
 * - SREV (reverse string)
 * - SERASE (erase portion of string)
 * - SPASTE (paste string into another)
 * - STOKEN (extract token)
 *
 * All string operations work with S registers (S0-SF).
 * String length is limited by maxStringSize (default 255).
 */

import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import {
  getIntValue,
  getStringValue,
  setIntValue,
  setStringValue,
} from "./register-values";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

/**
 * Update flags based on string comparison result.
 */
function updateStringFlags(flags: Flags, cmpResult: number): void {
  flags.z = cmpResult === 0;
  flags.s = cmpResult < 0;
  flags.c = cmpResult < 0;
  flags.v = false;
}

/**
 * SCAT - String concatenate.
 *
 * Appends the source string to the destination string.
 * Result is truncated to maxStringSize if necessary.
 *
 * @param registers - Register set
 * @param destination - Destination S register (modified)
 * @param source - Source S register
 *
 * @example
 * ```ts
 * // S0 = "Hello", S1 = " World"
 * scat(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
 * // S0 = "Hello World"
 * ```
 */
export function scat(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: StringRegisterRef
): void {
  const destValue = getStringValue(registers, destination);
  const srcValue = getStringValue(registers, source);
  setStringValue(registers, destination, destValue + srcValue);
}

/**
 * SLEN - String length.
 *
 * Gets the length of the string and stores it in the destination integer register.
 *
 * @param registers - Register set
 * @param destination - Destination integer register (receives length)
 * @param source - Source S register
 *
 * @example
 * ```ts
 * // S0 = "Hello"
 * slen(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 });
 * // I0 = 5
 * ```
 */
export function slen(
  registers: RegisterSet,
  destination: IntRegisterRef,
  source: StringRegisterRef
): void {
  const value = getStringValue(registers, source);
  setIntValue(registers, destination, value.length);
}

/**
 * SCMP - String compare.
 *
 * Compares two strings lexicographically and sets CPU flags.
 * - Z flag: set if strings are equal
 * - S flag: set if first < second
 * - C flag: set if first < second (unsigned borrow)
 *
 * @param registers - Register set
 * @param flags - CPU flags (modified)
 * @param left - First S register
 * @param right - Second S register
 *
 * @example
 * ```ts
 * // S0 = "abc", S1 = "abd"
 * scmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
 * // Z = false, S = true (abc < abd)
 * ```
 */
export function scmp(
  registers: RegisterSet,
  flags: Flags,
  left: StringRegisterRef,
  right: StringRegisterRef
): void {
  const leftValue = getStringValue(registers, left);
  const rightValue = getStringValue(registers, right);
  const cmpResult = leftValue.localeCompare(rightValue);
  updateStringFlags(flags, cmpResult);
}

/**
 * SGET - Get character at index.
 *
 * Gets the character code (byte value) at the specified index.
 * If index is out of bounds, returns 0.
 *
 * @param registers - Register set
 * @param destination - Destination integer register (receives char code)
 * @param source - Source S register
 * @param indexReg - Index register (0-based position)
 *
 * @example
 * ```ts
 * // S0 = "Hello", I1 = 1
 * sget(registers, { kind: "B", index: 0 }, { kind: "S", index: 0 }, { kind: "I", index: 1 });
 * // B0 = 101 ('e')
 * ```
 */
export function sget(
  registers: RegisterSet,
  destination: IntRegisterRef,
  source: StringRegisterRef,
  indexReg: IntRegisterRef
): void {
  const str = getStringValue(registers, source);
  const index = getIntValue(registers, indexReg);

  if (index < 0 || index >= str.length) {
    setIntValue(registers, destination, 0);
  } else {
    setIntValue(registers, destination, str.charCodeAt(index));
  }
}

/**
 * SSET - Set character at index.
 *
 * Sets the character at the specified index to the given character code.
 * If index is out of bounds or beyond string length, operation is ignored.
 *
 * @param registers - Register set
 * @param destination - Destination S register (modified)
 * @param indexReg - Index register (0-based position)
 * @param charReg - Character code register
 *
 * @example
 * ```ts
 * // S0 = "Hello", I0 = 0, B0 = 74 ('J')
 * sset(registers, { kind: "S", index: 0 }, { kind: "I", index: 0 }, { kind: "B", index: 0 });
 * // S0 = "Jello"
 * ```
 */
export function sset(
  registers: RegisterSet,
  destination: StringRegisterRef,
  indexReg: IntRegisterRef,
  charReg: IntRegisterRef
): void {
  const str = getStringValue(registers, destination);
  const index = getIntValue(registers, indexReg);
  const charCode = getIntValue(registers, charReg);

  if (index >= 0 && index < str.length) {
    const newStr =
      str.substring(0, index) +
      String.fromCharCode(charCode & 0xff) +
      str.substring(index + 1);
    setStringValue(registers, destination, newStr);
  }
}

/**
 * STOI - String to integer.
 *
 * Parses the string as a decimal integer.
 * Sets Z flag if parsing failed.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set on parse error)
 * @param destination - Destination integer register
 * @param source - Source S register
 *
 * @example
 * ```ts
 * // S0 = "12345"
 * stoi(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
 * // L0 = 12345, Z = false
 * ```
 */
export function stoi(
  registers: RegisterSet,
  flags: Flags,
  destination: IntRegisterRef,
  source: StringRegisterRef
): void {
  const str = getStringValue(registers, source).trim();
  const value = parseInt(str, 10);

  if (isNaN(value)) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    flags.c = true;
  } else {
    setIntValue(registers, destination, value);
    flags.z = false;
    flags.c = false;
  }
  flags.v = false;
  flags.s = value < 0;
}

/**
 * ITOS - Integer to string.
 *
 * Converts an integer to its decimal string representation.
 *
 * @param registers - Register set
 * @param destination - Destination S register
 * @param source - Source integer register
 *
 * @example
 * ```ts
 * // L0 = 12345
 * itos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
 * // S0 = "12345"
 * ```
 */
export function itos(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: IntRegisterRef
): void {
  const value = getIntValue(registers, source);
  // For L registers, treat as signed 32-bit
  let signedValue = value;
  if (source.kind === "L") {
    signedValue = value | 0; // Convert to signed 32-bit
  }
  setStringValue(registers, destination, signedValue.toString(10));
}

/**
 * STOH - String to hex integer.
 *
 * Parses the string as a hexadecimal integer.
 * Handles optional "0x" or "$" prefix.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set on parse error)
 * @param destination - Destination integer register
 * @param source - Source S register
 *
 * @example
 * ```ts
 * // S0 = "FF"
 * stoh(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
 * // L0 = 255
 * ```
 */
export function stoh(
  registers: RegisterSet,
  flags: Flags,
  destination: IntRegisterRef,
  source: StringRegisterRef
): void {
  let str = getStringValue(registers, source).trim();

  // Remove common hex prefixes
  if (str.startsWith("0x") || str.startsWith("0X")) {
    str = str.substring(2);
  } else if (str.startsWith("$")) {
    str = str.substring(1);
  }

  const value = parseInt(str, 16);

  if (isNaN(value)) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    flags.c = true;
  } else {
    setIntValue(registers, destination, value);
    flags.z = false;
    flags.c = false;
  }
  flags.v = false;
  flags.s = false;
}

/**
 * HTOS - Hex integer to string.
 *
 * Converts an integer to its hexadecimal string representation (uppercase).
 *
 * @param registers - Register set
 * @param destination - Destination S register
 * @param source - Source integer register
 *
 * @example
 * ```ts
 * // L0 = 255
 * htos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
 * // S0 = "FF"
 * ```
 */
export function htos(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: IntRegisterRef
): void {
  const value = getIntValue(registers, source);
  // Convert to unsigned representation
  const unsigned = value >>> 0;
  setStringValue(registers, destination, unsigned.toString(16).toUpperCase());
}

/**
 * SFIND - Find substring.
 *
 * Finds the first occurrence of needle in haystack starting from startIndex.
 * Returns -1 if not found.
 *
 * @param registers - Register set
 * @param destination - Destination integer register (receives index or -1)
 * @param haystack - String to search in
 * @param needle - String to search for
 * @param startIndexReg - Start position for search (optional, defaults to 0)
 *
 * @example
 * ```ts
 * // S0 = "Hello World", S1 = "World"
 * sfind(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 }, { kind: "S", index: 1 });
 * // I0 = 6
 * ```
 */
export function sfind(
  registers: RegisterSet,
  destination: IntRegisterRef,
  haystack: StringRegisterRef,
  needle: StringRegisterRef,
  startIndexReg?: IntRegisterRef
): void {
  const haystackStr = getStringValue(registers, haystack);
  const needleStr = getStringValue(registers, needle);
  const startIndex = startIndexReg ? getIntValue(registers, startIndexReg) : 0;

  const index = haystackStr.indexOf(needleStr, startIndex);
  setIntValue(registers, destination, index);
}

/**
 * SSUB - Substring extraction.
 *
 * Extracts a substring from startIndex with the specified length.
 *
 * @param registers - Register set
 * @param destination - Destination S register
 * @param source - Source S register
 * @param startIndexReg - Start position
 * @param lengthReg - Length of substring
 *
 * @example
 * ```ts
 * // S0 = "Hello World", I0 = 6, I1 = 5
 * ssub(registers, { kind: "S", index: 1 }, { kind: "S", index: 0 },
 *      { kind: "I", index: 0 }, { kind: "I", index: 1 });
 * // S1 = "World"
 * ```
 */
export function ssub(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: StringRegisterRef,
  startIndexReg: IntRegisterRef,
  lengthReg: IntRegisterRef
): void {
  const str = getStringValue(registers, source);
  const startIndex = getIntValue(registers, startIndexReg);
  const length = getIntValue(registers, lengthReg);

  if (startIndex < 0 || startIndex >= str.length) {
    setStringValue(registers, destination, "");
  } else {
    setStringValue(registers, destination, str.substring(startIndex, startIndex + length));
  }
}

/**
 * SUPPER - Convert string to uppercase.
 *
 * @param registers - Register set
 * @param destination - S register to convert (modified in place)
 *
 * @example
 * ```ts
 * // S0 = "Hello World"
 * supper(registers, { kind: "S", index: 0 });
 * // S0 = "HELLO WORLD"
 * ```
 */
export function supper(
  registers: RegisterSet,
  destination: StringRegisterRef
): void {
  const value = getStringValue(registers, destination);
  setStringValue(registers, destination, value.toUpperCase());
}

/**
 * SLOWER - Convert string to lowercase.
 *
 * @param registers - Register set
 * @param destination - S register to convert (modified in place)
 *
 * @example
 * ```ts
 * // S0 = "Hello World"
 * slower(registers, { kind: "S", index: 0 });
 * // S0 = "hello world"
 * ```
 */
export function slower(
  registers: RegisterSet,
  destination: StringRegisterRef
): void {
  const value = getStringValue(registers, destination);
  setStringValue(registers, destination, value.toLowerCase());
}

/**
 * STRIM - Trim whitespace from both ends.
 *
 * @param registers - Register set
 * @param destination - S register to trim (modified in place)
 *
 * @example
 * ```ts
 * // S0 = "  Hello World  "
 * strim(registers, { kind: "S", index: 0 });
 * // S0 = "Hello World"
 * ```
 */
export function strim(
  registers: RegisterSet,
  destination: StringRegisterRef
): void {
  const value = getStringValue(registers, destination);
  setStringValue(registers, destination, value.trim());
}

/**
 * SREV - Reverse string.
 *
 * @param registers - Register set
 * @param destination - S register to reverse (modified in place)
 *
 * @example
 * ```ts
 * // S0 = "Hello"
 * srev(registers, { kind: "S", index: 0 });
 * // S0 = "olleH"
 * ```
 */
export function srev(
  registers: RegisterSet,
  destination: StringRegisterRef
): void {
  const value = getStringValue(registers, destination);
  setStringValue(registers, destination, value.split("").reverse().join(""));
}

/**
 * SERASE - Erase portion of string.
 *
 * Removes characters from startIndex for the specified length.
 *
 * @param registers - Register set
 * @param destination - S register to modify
 * @param startIndexReg - Start position
 * @param lengthReg - Number of characters to remove
 *
 * @example
 * ```ts
 * // S0 = "Hello World", I0 = 5, I1 = 6
 * serase(registers, { kind: "S", index: 0 }, { kind: "I", index: 0 }, { kind: "I", index: 1 });
 * // S0 = "Hello"
 * ```
 */
export function serase(
  registers: RegisterSet,
  destination: StringRegisterRef,
  startIndexReg: IntRegisterRef,
  lengthReg: IntRegisterRef
): void {
  const str = getStringValue(registers, destination);
  const startIndex = getIntValue(registers, startIndexReg);
  const length = getIntValue(registers, lengthReg);

  if (startIndex < 0 || startIndex >= str.length) {
    // Nothing to erase
    return;
  }

  const newStr = str.substring(0, startIndex) + str.substring(startIndex + length);
  setStringValue(registers, destination, newStr);
}

/**
 * SPASTE - Paste string into another.
 *
 * Inserts the source string into the destination at the specified position.
 *
 * @param registers - Register set
 * @param destination - S register to modify
 * @param source - S register containing string to insert
 * @param positionReg - Insert position
 *
 * @example
 * ```ts
 * // S0 = "Hello", S1 = " World", I0 = 5
 * spaste(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 }, { kind: "I", index: 0 });
 * // S0 = "Hello World"
 * ```
 */
export function spaste(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: StringRegisterRef,
  positionReg: IntRegisterRef
): void {
  const destStr = getStringValue(registers, destination);
  const srcStr = getStringValue(registers, source);
  const position = getIntValue(registers, positionReg);

  let newStr: string;
  if (position <= 0) {
    newStr = srcStr + destStr;
  } else if (position >= destStr.length) {
    newStr = destStr + srcStr;
  } else {
    newStr = destStr.substring(0, position) + srcStr + destStr.substring(position);
  }

  setStringValue(registers, destination, newStr);
}

/**
 * STOKEN - Extract token from string.
 *
 * Extracts a token from the source string using a delimiter.
 * The token index specifies which token to extract (0-based).
 *
 * @param registers - Register set
 * @param destination - Destination S register (receives token)
 * @param source - Source S register
 * @param delimiter - S register containing delimiter character(s)
 * @param tokenIndexReg - Token index (0-based)
 *
 * @example
 * ```ts
 * // S0 = "one,two,three", S1 = ",", I0 = 1
 * stoken(registers, { kind: "S", index: 2 }, { kind: "S", index: 0 },
 *        { kind: "S", index: 1 }, { kind: "I", index: 0 });
 * // S2 = "two"
 * ```
 */
export function stoken(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: StringRegisterRef,
  delimiter: StringRegisterRef,
  tokenIndexReg: IntRegisterRef
): void {
  const str = getStringValue(registers, source);
  const delim = getStringValue(registers, delimiter);
  const tokenIndex = getIntValue(registers, tokenIndexReg);

  if (delim.length === 0) {
    // No delimiter, return entire string for index 0
    if (tokenIndex === 0) {
      setStringValue(registers, destination, str);
    } else {
      setStringValue(registers, destination, "");
    }
    return;
  }

  const tokens = str.split(delim);

  if (tokenIndex < 0 || tokenIndex >= tokens.length) {
    setStringValue(registers, destination, "");
  } else {
    setStringValue(registers, destination, tokens[tokenIndex]);
  }
}

/**
 * SCOPY - Copy string from source to destination.
 *
 * @param registers - Register set
 * @param destination - Destination S register
 * @param source - Source S register
 *
 * @example
 * ```ts
 * // S1 = "Hello"
 * scopy(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
 * // S0 = "Hello"
 * ```
 */
export function scopy(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: StringRegisterRef
): void {
  const value = getStringValue(registers, source);
  setStringValue(registers, destination, value);
}

/**
 * SCLEAR - Clear string (set to empty).
 *
 * @param registers - Register set
 * @param destination - S register to clear
 *
 * @example
 * ```ts
 * // S0 = "Hello"
 * sclear(registers, { kind: "S", index: 0 });
 * // S0 = ""
 * ```
 */
export function sclear(
  registers: RegisterSet,
  destination: StringRegisterRef
): void {
  setStringValue(registers, destination, "");
}

/**
 * SSET_IMM - Set string to immediate value.
 *
 * @param registers - Register set
 * @param destination - Destination S register
 * @param value - String value to set
 *
 * @example
 * ```ts
 * ssetImm(registers, { kind: "S", index: 0 }, "Hello");
 * // S0 = "Hello"
 * ```
 */
export function ssetImm(
  registers: RegisterSet,
  destination: StringRegisterRef,
  value: string
): void {
  setStringValue(registers, destination, value);
}

/**
 * STRCMP - Compare strings (alternative name for SCMP).
 * This is an alias for scmp used in some BEST2 dialects.
 */
export const strcmp = scmp;

/**
 * STRLEN - Get string length (alternative name for SLEN).
 * This is an alias for slen used in some BEST2 dialects.
 */
export const strlen = slen;

/**
 * STRCAT - Concatenate strings (alternative name for SCAT).
 * This is an alias for scat used in some BEST2 dialects.
 */
export const strcat = scat;

export const a2fix = stoi;
export const fix2hex = htos;
export const fix2dez = itos;

export function ufix2dez(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: IntRegisterRef
): void {
  const value = getIntValue(registers, source) >>> 0;
  setStringValue(registers, destination, value.toString(10));
}

export const hex2fix = stoh;
export const dez2fix = stoi;

export function udez2fix(
  registers: RegisterSet,
  flags: Flags,
  destination: IntRegisterRef,
  source: StringRegisterRef
): void {
  const str = getStringValue(registers, source).trim();
  const value = parseInt(str, 10);
  if (isNaN(value)) {
    setIntValue(registers, destination, 0);
    flags.z = true;
    flags.c = true;
  } else {
    setIntValue(registers, destination, value >>> 0);
    flags.z = false;
    flags.c = false;
  }
  flags.v = false;
  flags.s = false;
}
