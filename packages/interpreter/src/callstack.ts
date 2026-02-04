/**
 * BEST2 Call Stack
 *
 * The CallStack class manages return addresses for subroutine calls (JTSR/RET instructions).
 * It implements a simple stack with overflow/underflow protection.
 *
 * Usage:
 * - JTSR (Jump To Subroutine): Push return address, then jump
 * - RET (Return): Pop return address and jump back
 */

import { EdiabasError, EdiabasErrorCodes } from "@ediabas/core";

/** Default maximum call stack depth */
export const DEFAULT_MAX_DEPTH = 256;

/**
 * Configuration options for CallStack.
 */
export interface CallStackOptions {
  /**
   * Maximum stack depth before overflow error.
   * @default 256
   */
  maxDepth?: number;
}

/**
 * BEST2 Call Stack implementation.
 *
 * Manages return addresses for nested subroutine calls with overflow/underflow protection.
 *
 * @example
 * ```ts
 * const callStack = new CallStack();
 *
 * // JTSR instruction: save return address before jumping
 * callStack.push(currentAddress + instructionSize);
 *
 * // RET instruction: get return address
 * const returnAddress = callStack.pop();
 * ```
 */
export class CallStack {
  /** Internal stack storage */
  private readonly stack: number[];

  /** Maximum allowed stack depth */
  private readonly maxDepth: number;

  /**
   * Creates a new CallStack instance.
   *
   * @param options - Configuration options
   */
  constructor(options: CallStackOptions = {}) {
    this.maxDepth = options.maxDepth ?? DEFAULT_MAX_DEPTH;
    this.stack = [];
  }

  /**
   * Pushes a return address onto the stack.
   *
   * Called during JTSR (Jump To Subroutine) to save the return address.
   *
   * @param returnAddress - The address to return to after RET
   * @throws {EdiabasError} If stack overflow (depth exceeds maxDepth)
   *
   * @example
   * ```ts
   * // Before jumping to subroutine at address 0x1000
   * callStack.push(0x0104); // Save return address (next instruction)
   * // Then: pc = 0x1000
   * ```
   */
  push(returnAddress: number): void {
    if (this.stack.length >= this.maxDepth) {
      throw new EdiabasError(
        EdiabasErrorCodes.STACK_OVERFLOW,
        `Call stack overflow: exceeded maximum depth of ${this.maxDepth}`
      );
    }
    this.stack.push(returnAddress);
  }

  /**
   * Pops and returns the top return address from the stack.
   *
   * Called during RET (Return) to get the address to jump back to.
   *
   * @returns The return address
   * @throws {EdiabasError} If stack underflow (empty stack)
   *
   * @example
   * ```ts
   * // RET instruction
   * const returnAddress = callStack.pop();
   * // Then: pc = returnAddress
   * ```
   */
  pop(): number {
    const address = this.stack.pop();
    if (address === undefined) {
      throw new EdiabasError(
        EdiabasErrorCodes.STACK_UNDERFLOW,
        "Call stack underflow: RET without matching JTSR"
      );
    }
    return address;
  }

  /**
   * Returns the top return address without removing it.
   *
   * Useful for debugging or inspecting the current call context.
   *
   * @returns The top return address, or undefined if stack is empty
   */
  peek(): number | undefined {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
  }

  /**
   * Checks if the call stack is empty.
   *
   * @returns true if no return addresses are stored
   */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /**
   * Returns the current stack depth (number of nested calls).
   *
   * @returns The number of return addresses on the stack
   */
  depth(): number {
    return this.stack.length;
  }

  /**
   * Clears all return addresses from the stack.
   *
   * Called during interpreter reset or error recovery.
   */
  clear(): void {
    this.stack.length = 0;
  }

  /**
   * Returns the configured maximum stack depth.
   */
  getMaxDepth(): number {
    return this.maxDepth;
  }

  /**
   * Creates a snapshot of the current stack state for debugging.
   *
   * @returns Array of return addresses (bottom to top)
   */
  snapshot(): number[] {
    return [...this.stack];
  }
}
