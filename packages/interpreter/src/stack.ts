/**
 * BEST2 Data Stack
 *
 * Manages data values pushed/popped by stack-related opcodes.
 */

import { EdiabasError, EdiabasErrorCodes } from "@ediabas/core";

export const DEFAULT_STACK_DEPTH = 256;

export interface DataStackOptions {
  maxDepth?: number;
}

export class DataStack {
  private readonly stack: number[];
  private readonly maxDepth: number;

  constructor(options: DataStackOptions = {}) {
    this.maxDepth = options.maxDepth ?? DEFAULT_STACK_DEPTH;
    this.stack = [];
  }

  pushByte(value: number): void {
    if (this.stack.length >= this.maxDepth) {
      throw new EdiabasError(
        EdiabasErrorCodes.STACK_OVERFLOW,
        `Data stack overflow: exceeded maximum depth of ${this.maxDepth}`
      );
    }
    this.stack.push(value & 0xff);
  }

  popByte(): number {
    const value = this.stack.pop();
    if (value === undefined) {
      throw new EdiabasError(
        EdiabasErrorCodes.STACK_UNDERFLOW,
        "Data stack underflow: POP without matching PUSH"
      );
    }
    return value;
  }

  peekByte(offset: number = 0): number | undefined {
    const index = this.stack.length - 1 - offset;
    if (index < 0 || index >= this.stack.length) {
      return undefined;
    }
    return this.stack[index];
  }

  push(value: number): void {
    this.pushByte(value);
  }

  pop(): number {
    return this.popByte();
  }

  peek(offset: number = 0): number | undefined {
    return this.peekByte(offset);
  }

  swap(): void {
    if (this.stack.length < 2) {
      return;
    }
    const top = this.stack.length - 1;
    const tmp = this.stack[top];
    this.stack[top] = this.stack[top - 1];
    this.stack[top - 1] = tmp;
  }

  clear(): void {
    this.stack.length = 0;
  }

  depth(): number {
    return this.stack.length;
  }

  setDepth(depth: number): void {
    const nextDepth = Math.max(0, Math.min(this.maxDepth, depth | 0));
    if (nextDepth < this.stack.length) {
      this.stack.length = nextDepth;
      return;
    }
    while (this.stack.length < nextDepth) {
      this.stack.push(0);
    }
  }

  getMaxDepth(): number {
    return this.maxDepth;
  }

  snapshot(): number[] {
    return [...this.stack];
  }
}
