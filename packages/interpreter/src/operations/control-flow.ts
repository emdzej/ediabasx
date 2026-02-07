/**
 * BEST2 Control Flow Operations
 *
 * This module implements control flow opcodes for the BEST2 interpreter:
 * - Unconditional jumps (JMP)
 * - Conditional jumps based on flags (JC, JNC, JZ, JNZ, JB, JNB, JA, JNA, JL, JNL, JG, JNG)
 * - Subroutine calls (CALL/JTSR, RET)
 * - Loop instruction (LOOP)
 *
 * Jump targets are relative offsets from the instruction following the jump.
 * The offset is a signed 32-bit value added to the current program counter.
 */

import type { Flags } from "../flags";
import type { CallStack } from "../callstack";

/**
 * Represents the execution state for control flow operations.
 * Contains the program counter and provides methods to modify it.
 */
export interface ExecutionState {
  /** Current program counter (address of next instruction) */
  pc: number;
  /** CPU flags for conditional jumps */
  flags: Flags;
  /** Call stack for subroutine calls */
  callStack: CallStack;
}

/**
 * Result of a control flow operation.
 * Contains the new program counter value after the operation.
 */
export interface ControlFlowResult {
  /** New program counter value */
  newPc: number;
  /** Whether execution should continue (false for RET with empty stack in some modes) */
  shouldContinue?: boolean;
}

/**
 * Unconditional jump (JMP).
 *
 * Transfers execution to the target address unconditionally.
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC (signed 32-bit)
 * @returns New program counter
 *
 * @example
 * ```ts
 * // Jump forward 10 bytes
 * const result = jmp({ pc: 100, flags, callStack }, 10);
 * // result.newPc === 110
 * ```
 */
export function jmp(state: ExecutionState, offset: number): ControlFlowResult {
  return { newPc: state.pc + offset };
}

/**
 * Jump if Carry (JC) - also known as Jump if Below (JB) for unsigned comparisons.
 *
 * Jumps to target if the carry flag is set.
 * After CMP a, b: jumps if a < b (unsigned).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jc(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.c) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Not Carry (JNC) - also known as Jump if Above or Equal (JAE) for unsigned comparisons.
 *
 * Jumps to target if the carry flag is clear.
 * After CMP a, b: jumps if a >= b (unsigned).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jnc(state: ExecutionState, offset: number): ControlFlowResult {
  if (!state.flags.c) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Zero (JZ) - also known as Jump if Equal (JE).
 *
 * Jumps to target if the zero flag is set.
 * After CMP a, b: jumps if a == b.
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jz(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.z) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Not Zero (JNZ) - also known as Jump if Not Equal (JNE).
 *
 * Jumps to target if the zero flag is clear.
 * After CMP a, b: jumps if a != b.
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jnz(state: ExecutionState, offset: number): ControlFlowResult {
  if (!state.flags.z) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Below (JB) - unsigned comparison.
 *
 * Jumps to target if carry flag is set (same as JC).
 * After CMP a, b: jumps if a < b (unsigned).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jb(state: ExecutionState, offset: number): ControlFlowResult {
  return jc(state, offset);
}

/**
 * Jump if Not Below (JNB) - also known as Jump if Above or Equal (JAE).
 *
 * Jumps to target if carry flag is clear (same as JNC).
 * After CMP a, b: jumps if a >= b (unsigned).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jnb(state: ExecutionState, offset: number): ControlFlowResult {
  return jnc(state, offset);
}

/**
 * Jump if Above (JA) - unsigned comparison.
 *
 * Jumps to target if carry flag is clear AND zero flag is clear.
 * After CMP a, b: jumps if a > b (unsigned).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function ja(state: ExecutionState, offset: number): ControlFlowResult {
  if (!state.flags.c && !state.flags.z) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Not Above (JNA) - also known as Jump if Below or Equal (JBE).
 *
 * Jumps to target if carry flag is set OR zero flag is set.
 * After CMP a, b: jumps if a <= b (unsigned).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jna(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.c || state.flags.z) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Less (JL) - signed comparison.
 *
 * Jumps to target if sign flag != overflow flag.
 * After CMP a, b: jumps if a < b (signed).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jl(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.s !== state.flags.v) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Not Less (JNL) - also known as Jump if Greater or Equal (JGE).
 *
 * Jumps to target if sign flag == overflow flag.
 * After CMP a, b: jumps if a >= b (signed).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jnl(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.s === state.flags.v) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Greater (JG) - signed comparison.
 *
 * Jumps to target if zero flag is clear AND sign flag == overflow flag.
 * After CMP a, b: jumps if a > b (signed).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jg(state: ExecutionState, offset: number): ControlFlowResult {
  if (!state.flags.z && state.flags.s === state.flags.v) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Not Greater (JNG) - also known as Jump if Less or Equal (JLE).
 *
 * Jumps to target if zero flag is set OR sign flag != overflow flag.
 * After CMP a, b: jumps if a <= b (signed).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jng(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.z || state.flags.s !== state.flags.v) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Overflow (JV/JO).
 *
 * Jumps to target if overflow flag is set.
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jv(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.v) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if No Overflow (JNV/JNO).
 *
 * Jumps to target if overflow flag is clear.
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jnv(state: ExecutionState, offset: number): ControlFlowResult {
  if (!state.flags.v) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Minus (JMI/JS) - sign flag set.
 *
 * Jumps to target if sign flag is set (result was negative).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jmi(state: ExecutionState, offset: number): ControlFlowResult {
  if (state.flags.s) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if Plus (JPL/JNS) - sign flag clear.
 *
 * Jumps to target if sign flag is clear (result was positive or zero).
 *
 * @param state - Current execution state
 * @param offset - Relative offset from current PC
 * @returns New program counter
 */
export function jpl(state: ExecutionState, offset: number): ControlFlowResult {
  if (!state.flags.s) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Call Subroutine (CALL/JTSR - Jump To SubRoutine).
 *
 * Pushes the current program counter onto the call stack and jumps to target.
 * The return address is the address of the instruction following the CALL.
 *
 * @param state - Current execution state
 * @param offset - Relative offset to subroutine
 * @returns New program counter
 * @throws {EdiabasError} If call stack overflow
 *
 * @example
 * ```ts
 * // Call subroutine at PC + 100
 * const result = call({ pc: 50, flags, callStack }, 100);
 * // result.newPc === 150
 * // callStack now contains return address 50
 * ```
 */
export function call(state: ExecutionState, offset: number): ControlFlowResult {
  // Push return address (current PC, which is already past the CALL instruction)
  state.callStack.push(state.pc);
  // Jump to subroutine
  return { newPc: state.pc + offset };
}

/**
 * Return from Subroutine (RET).
 *
 * Pops the return address from the call stack and jumps to it.
 *
 * @param state - Current execution state
 * @returns New program counter and continuation flag
 * @throws {EdiabasError} If call stack underflow (RET without matching CALL)
 *
 * @example
 * ```ts
 * // Return to caller
 * callStack.push(200); // Simulating prior CALL
 * const result = ret({ pc: 300, flags, callStack });
 * // result.newPc === 200
 * ```
 */
export function ret(state: ExecutionState): ControlFlowResult {
  const returnAddress = state.callStack.pop();
  return { newPc: returnAddress };
}

/**
 * Loop instruction (LOOP).
 *
 * Decrements the counter register. If the result is not zero, jumps to target.
 * This is a combined decrement-and-branch operation commonly used for counted loops.
 *
 * Note: The counter value should be managed by the caller. This function takes
 * the current counter value and returns whether to jump and the new counter value.
 *
 * @param counter - Current loop counter value
 * @param state - Current execution state
 * @param offset - Relative offset if loop continues
 * @returns Object with new counter, new PC, and flags update info
 *
 * @example
 * ```ts
 * // Loop 5 times
 * let counter = 5;
 * const result = loop(counter, { pc: 100, flags, callStack }, -20);
 * // result.newCounter === 4
 * // result.newPc === 80 (jumped back)
 * // result.shouldJump === true
 * ```
 */
export function loop(
  counter: number,
  state: ExecutionState,
  offset: number
): { newCounter: number; newPc: number; shouldJump: boolean } {
  // Decrement counter (wrapping at 32-bit unsigned boundary)
  // Use >>> 0 to convert to unsigned 32-bit integer
  const newCounter = (counter - 1) >>> 0;

  // Jump if counter is not zero
  if (newCounter !== 0) {
    return {
      newCounter,
      newPc: state.pc + offset,
      shouldJump: true,
    };
  }

  return {
    newCounter,
    newPc: state.pc,
    shouldJump: false,
  };
}

// Aliases for common naming conventions
export { jc as jb_alias }; // JC is same as JB (Jump if Below)
export { jnc as jae }; // JNC is same as JAE (Jump if Above or Equal)
export { jnc as jnb_alias }; // JNC is same as JNB (Jump if Not Below)
export { jna as jbe }; // JNA is same as JBE (Jump if Below or Equal)
export { jnl as jge }; // JNL is same as JGE (Jump if Greater or Equal)
export { jng as jle }; // JNG is same as JLE (Jump if Less or Equal)
export { jv as jo }; // JV is same as JO (Jump if Overflow)
export { jnv as jno }; // JNV is same as JNO (Jump if No Overflow)
export { jmi as js }; // JMI is same as JS (Jump if Sign)
export { jpl as jns }; // JPL is same as JNS (Jump if No Sign)
export { call as jtsr }; // CALL is same as JTSR (Jump To SubRoutine)

/**
 * Error trap state for JT/JNT operations.
 */
export interface ErrorTrapState {
  errorTrapBitNr: number;
}

function isTrapErrorDetected(
  errorTrapBitNr: number,
  testBit: number | null,
  hasArg: boolean,
  noArgUsesAnyError: boolean
): boolean {
  if (hasArg && testBit !== null) {
    if (testBit > 0) {
      if (errorTrapBitNr === testBit) {
        return true;
      }
      if (errorTrapBitNr === 0 && testBit === 32) {
        return true;
      }
    } else if (errorTrapBitNr >= 0x40000000) {
      return true;
    }
    return false;
  }

  if (noArgUsesAnyError) {
    return errorTrapBitNr >= 0;
  }
  return errorTrapBitNr >= 0x40000000;
}

/**
 * Jump if trap/error detected (JT).
 */
export function jt(
  state: ExecutionState,
  trapState: ErrorTrapState,
  offset: number,
  testBit?: number
): ControlFlowResult {
  const hasArg = typeof testBit === "number";
  const detected = isTrapErrorDetected(
    trapState.errorTrapBitNr,
    hasArg ? testBit! : null,
    hasArg,
    true
  );
  if (detected) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}

/**
 * Jump if no trap/error detected (JNT).
 */
export function jnt(
  state: ExecutionState,
  trapState: ErrorTrapState,
  offset: number,
  testBit?: number
): ControlFlowResult {
  const hasArg = typeof testBit === "number";
  const detected = isTrapErrorDetected(
    trapState.errorTrapBitNr,
    hasArg ? testBit! : null,
    hasArg,
    false
  );
  if (!detected) {
    return { newPc: state.pc + offset };
  }
  return { newPc: state.pc };
}
