/**
 * EDIABAS Error Base Class
 *
 * Base error class for all EDIABAS-related errors.
 * Provides error codes and structured error information.
 */

/**
 * Error codes for EDIABAS errors.
 */
export const EdiabasErrorCodes = {
  /** Generic/unknown error */
  UNKNOWN: 0,

  /** Stack overflow (too many nested calls) */
  STACK_OVERFLOW: 1,

  /** Stack underflow (return without call) */
  STACK_UNDERFLOW: 2,

  /** Invalid instruction or opcode */
  INVALID_INSTRUCTION: 3,

  /** Register access error */
  REGISTER_ERROR: 4,

  /** Memory access error */
  MEMORY_ERROR: 5,

  // --- BIP Error Codes (60-89) ---
  EDIABAS_BIP_0000: 60,
  EDIABAS_BIP_0001: 61,
  EDIABAS_BIP_0002: 62,
  EDIABAS_BIP_0003: 63,
  EDIABAS_BIP_0004: 64,
  EDIABAS_BIP_0005: 65,
  EDIABAS_BIP_0006: 66,
  EDIABAS_BIP_0007: 67,
  EDIABAS_BIP_0008: 68,
  EDIABAS_BIP_0009: 69,
  EDIABAS_BIP_0010: 70,
  EDIABAS_BIP_0011: 71,
  EDIABAS_BIP_0012: 72,
  EDIABAS_BIP_0013: 73,
  EDIABAS_BIP_0014: 74,
  EDIABAS_BIP_0015: 75,
  EDIABAS_BIP_0016: 76,
  EDIABAS_BIP_0017: 77,
  EDIABAS_BIP_0018: 78,
  EDIABAS_BIP_0019: 79,
  EDIABAS_BIP_0020: 80,
  EDIABAS_BIP_0021: 81,
  EDIABAS_BIP_0022: 82,
  EDIABAS_BIP_0023: 83,
  EDIABAS_BIP_0024: 84,
  EDIABAS_BIP_0025: 85,
  EDIABAS_BIP_0026: 86,
  EDIABAS_BIP_0027: 87,
  EDIABAS_BIP_0028: 88,
  EDIABAS_BIP_0029: 89,

  // --- IFH Error Codes (200-249) ---
  EDIABAS_IFH_0000: 10,
  EDIABAS_IFH_0001: 11,
  EDIABAS_IFH_0002: 12,
  EDIABAS_IFH_0003: 13,
  EDIABAS_IFH_0004: 14,
  EDIABAS_IFH_0005: 15,
  EDIABAS_IFH_0006: 16,
  EDIABAS_IFH_0007: 17,
  EDIABAS_IFH_0008: 18,
  EDIABAS_IFH_0009: 19,
  EDIABAS_IFH_0010: 20,
  EDIABAS_IFH_0011: 21,
  EDIABAS_IFH_0012: 22,
  EDIABAS_IFH_0013: 23,
  EDIABAS_IFH_0014: 24,
  EDIABAS_IFH_0015: 25,
  EDIABAS_IFH_0016: 26,
  EDIABAS_IFH_0017: 27,
  EDIABAS_IFH_0018: 28,
  EDIABAS_IFH_0019: 29,
  EDIABAS_IFH_0041: 51,
  EDIABAS_IFH_0056: 66,
  EDIABAS_IFH_0069: 219,
  EDIABAS_IFH_0074: 224,
} as const;

export type EdiabasErrorCode = (typeof EdiabasErrorCodes)[keyof typeof EdiabasErrorCodes];

/**
 * Base error class for EDIABAS-related errors.
 *
 * Extends the standard Error class with error codes and structured information.
 *
 * @example
 * ```ts
 * throw new EdiabasError(EdiabasErrorCodes.STACK_OVERFLOW, "Call stack exceeded maximum depth of 256");
 * ```
 */
export class EdiabasError extends Error {
  /**
   * The error code identifying the type of error.
   */
  readonly code: EdiabasErrorCode;

  /**
   * Creates a new EdiabasError.
   *
   * @param code - The error code
   * @param message - Human-readable error message
   */
  constructor(code: EdiabasErrorCode, message: string) {
    super(message);
    this.name = "EdiabasError";
    this.code = code;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EdiabasError);
    }
  }
}
