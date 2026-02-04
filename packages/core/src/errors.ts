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
