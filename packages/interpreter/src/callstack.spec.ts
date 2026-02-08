/**
 * CallStack Tests
 *
 * Tests for the BEST2 call stack implementation.
 */

import { describe, it, expect, beforeEach } from "vitest";
import { EdiabasError, EdiabasErrorCodes } from "@ediabasx/core";
import { CallStack, DEFAULT_MAX_DEPTH } from "./callstack";

describe("CallStack", () => {
  let callStack: CallStack;

  beforeEach(() => {
    callStack = new CallStack();
  });

  describe("constructor", () => {
    it("should create an empty stack", () => {
      expect(callStack.isEmpty()).toBe(true);
      expect(callStack.depth()).toBe(0);
    });

    it("should use default max depth of 256", () => {
      expect(callStack.getMaxDepth()).toBe(DEFAULT_MAX_DEPTH);
      expect(callStack.getMaxDepth()).toBe(256);
    });

    it("should accept custom max depth", () => {
      const customStack = new CallStack({ maxDepth: 64 });
      expect(customStack.getMaxDepth()).toBe(64);
    });
  });

  describe("push", () => {
    it("should push a return address onto the stack", () => {
      callStack.push(0x1000);
      expect(callStack.depth()).toBe(1);
      expect(callStack.isEmpty()).toBe(false);
    });

    it("should push multiple addresses", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.push(0x3000);
      expect(callStack.depth()).toBe(3);
    });

    it("should preserve LIFO order", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.push(0x3000);
      expect(callStack.peek()).toBe(0x3000);
    });

    it("should throw EdiabasError on stack overflow", () => {
      const smallStack = new CallStack({ maxDepth: 3 });
      smallStack.push(0x1000);
      smallStack.push(0x2000);
      smallStack.push(0x3000);

      expect(() => smallStack.push(0x4000)).toThrow(EdiabasError);
      try {
        smallStack.push(0x4000);
      } catch (e) {
        expect(e).toBeInstanceOf(EdiabasError);
        expect((e as EdiabasError).code).toBe(EdiabasErrorCodes.STACK_OVERFLOW);
        expect((e as EdiabasError).message).toContain("overflow");
        expect((e as EdiabasError).message).toContain("3");
      }
    });

    it("should throw EdiabasError at exact max depth", () => {
      const smallStack = new CallStack({ maxDepth: 2 });
      smallStack.push(0x1000);
      smallStack.push(0x2000);
      // Stack is now at max depth
      expect(() => smallStack.push(0x3000)).toThrow(EdiabasError);
    });

    it("should handle edge case of maxDepth = 1", () => {
      const singleStack = new CallStack({ maxDepth: 1 });
      singleStack.push(0x1000);
      expect(() => singleStack.push(0x2000)).toThrow(EdiabasError);
    });
  });

  describe("pop", () => {
    it("should pop the most recently pushed address", () => {
      callStack.push(0x1000);
      expect(callStack.pop()).toBe(0x1000);
    });

    it("should maintain LIFO order", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.push(0x3000);

      expect(callStack.pop()).toBe(0x3000);
      expect(callStack.pop()).toBe(0x2000);
      expect(callStack.pop()).toBe(0x1000);
    });

    it("should decrease depth after pop", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      expect(callStack.depth()).toBe(2);

      callStack.pop();
      expect(callStack.depth()).toBe(1);

      callStack.pop();
      expect(callStack.depth()).toBe(0);
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should throw EdiabasError on stack underflow", () => {
      expect(() => callStack.pop()).toThrow(EdiabasError);
      try {
        callStack.pop();
      } catch (e) {
        expect(e).toBeInstanceOf(EdiabasError);
        expect((e as EdiabasError).code).toBe(EdiabasErrorCodes.STACK_UNDERFLOW);
        expect((e as EdiabasError).message).toContain("underflow");
        expect((e as EdiabasError).message).toContain("RET");
        expect((e as EdiabasError).message).toContain("JTSR");
      }
    });

    it("should throw EdiabasError when popping from cleared stack", () => {
      callStack.push(0x1000);
      callStack.clear();
      expect(() => callStack.pop()).toThrow(EdiabasError);
    });

    it("should throw EdiabasError when popping more than pushed", () => {
      callStack.push(0x1000);
      callStack.pop();
      expect(() => callStack.pop()).toThrow(EdiabasError);
    });
  });

  describe("peek", () => {
    it("should return undefined for empty stack", () => {
      expect(callStack.peek()).toBeUndefined();
    });

    it("should return top address without removing it", () => {
      callStack.push(0x1000);
      expect(callStack.peek()).toBe(0x1000);
      expect(callStack.depth()).toBe(1);
      expect(callStack.peek()).toBe(0x1000);
    });

    it("should return most recently pushed address", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      expect(callStack.peek()).toBe(0x2000);
    });

    it("should update after push", () => {
      callStack.push(0x1000);
      expect(callStack.peek()).toBe(0x1000);
      callStack.push(0x2000);
      expect(callStack.peek()).toBe(0x2000);
    });

    it("should update after pop", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.pop();
      expect(callStack.peek()).toBe(0x1000);
    });
  });

  describe("isEmpty", () => {
    it("should return true for new stack", () => {
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should return false after push", () => {
      callStack.push(0x1000);
      expect(callStack.isEmpty()).toBe(false);
    });

    it("should return true after popping all elements", () => {
      callStack.push(0x1000);
      callStack.pop();
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should return true after clear", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.clear();
      expect(callStack.isEmpty()).toBe(true);
    });
  });

  describe("depth", () => {
    it("should return 0 for empty stack", () => {
      expect(callStack.depth()).toBe(0);
    });

    it("should track number of pushed addresses", () => {
      expect(callStack.depth()).toBe(0);
      callStack.push(0x1000);
      expect(callStack.depth()).toBe(1);
      callStack.push(0x2000);
      expect(callStack.depth()).toBe(2);
      callStack.push(0x3000);
      expect(callStack.depth()).toBe(3);
    });

    it("should decrease after pop", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.pop();
      expect(callStack.depth()).toBe(1);
    });

    it("should be 0 after clear", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.clear();
      expect(callStack.depth()).toBe(0);
    });
  });

  describe("clear", () => {
    it("should clear all addresses", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.push(0x3000);
      callStack.clear();

      expect(callStack.isEmpty()).toBe(true);
      expect(callStack.depth()).toBe(0);
      expect(callStack.peek()).toBeUndefined();
    });

    it("should be safe to call on empty stack", () => {
      expect(() => callStack.clear()).not.toThrow();
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should allow new pushes after clear", () => {
      callStack.push(0x1000);
      callStack.clear();
      callStack.push(0x2000);
      expect(callStack.depth()).toBe(1);
      expect(callStack.peek()).toBe(0x2000);
    });
  });

  describe("snapshot", () => {
    it("should return empty array for empty stack", () => {
      expect(callStack.snapshot()).toEqual([]);
    });

    it("should return copy of stack (bottom to top)", () => {
      callStack.push(0x1000);
      callStack.push(0x2000);
      callStack.push(0x3000);

      const snapshot = callStack.snapshot();
      expect(snapshot).toEqual([0x1000, 0x2000, 0x3000]);
    });

    it("should not modify original stack", () => {
      callStack.push(0x1000);
      const snapshot = callStack.snapshot();
      snapshot.push(0x9999);

      expect(callStack.depth()).toBe(1);
      expect(callStack.peek()).toBe(0x1000);
    });
  });

  describe("nested subroutine calls", () => {
    it("should handle nested calls correctly", () => {
      // Simulate: main calls sub1, sub1 calls sub2, sub2 calls sub3
      // main:   JTSR sub1  (push 0x0100)
      callStack.push(0x0100);
      expect(callStack.depth()).toBe(1);

      // sub1:   JTSR sub2  (push 0x1100)
      callStack.push(0x1100);
      expect(callStack.depth()).toBe(2);

      // sub2:   JTSR sub3  (push 0x2100)
      callStack.push(0x2100);
      expect(callStack.depth()).toBe(3);

      // sub3:   RET        (pop 0x2100)
      expect(callStack.pop()).toBe(0x2100);
      expect(callStack.depth()).toBe(2);

      // sub2:   RET        (pop 0x1100)
      expect(callStack.pop()).toBe(0x1100);
      expect(callStack.depth()).toBe(1);

      // sub1:   RET        (pop 0x0100)
      expect(callStack.pop()).toBe(0x0100);
      expect(callStack.depth()).toBe(0);
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should handle interleaved push/pop", () => {
      // Complex call pattern:
      // call A, call B, ret from B, call C, ret from C, ret from A
      callStack.push(0x0100); // call A
      callStack.push(0x0A00); // call B (from A)
      expect(callStack.pop()).toBe(0x0A00); // ret from B
      callStack.push(0x0A10); // call C (from A)
      expect(callStack.pop()).toBe(0x0A10); // ret from C
      expect(callStack.pop()).toBe(0x0100); // ret from A
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should support maximum nesting depth", () => {
      const smallStack = new CallStack({ maxDepth: 5 });

      // Push exactly 5 addresses
      for (let i = 0; i < 5; i++) {
        smallStack.push(0x1000 + i * 0x100);
      }
      expect(smallStack.depth()).toBe(5);

      // 6th push should fail
      expect(() => smallStack.push(0x6000)).toThrow(EdiabasError);

      // Pop all 5
      for (let i = 4; i >= 0; i--) {
        expect(smallStack.pop()).toBe(0x1000 + i * 0x100);
      }
      expect(smallStack.isEmpty()).toBe(true);
    });
  });

  describe("edge cases", () => {
    it("should handle address 0", () => {
      callStack.push(0);
      expect(callStack.peek()).toBe(0);
      expect(callStack.pop()).toBe(0);
    });

    it("should handle large addresses", () => {
      callStack.push(0xffffffff);
      expect(callStack.peek()).toBe(0xffffffff);
      expect(callStack.pop()).toBe(0xffffffff);
    });

    it("should handle repeated same address", () => {
      callStack.push(0x1000);
      callStack.push(0x1000);
      callStack.push(0x1000);

      expect(callStack.pop()).toBe(0x1000);
      expect(callStack.pop()).toBe(0x1000);
      expect(callStack.pop()).toBe(0x1000);
    });

    it("should work correctly after overflow error", () => {
      const smallStack = new CallStack({ maxDepth: 2 });
      smallStack.push(0x1000);
      smallStack.push(0x2000);

      // Overflow error
      expect(() => smallStack.push(0x3000)).toThrow(EdiabasError);

      // Stack should still be usable
      expect(smallStack.depth()).toBe(2);
      expect(smallStack.pop()).toBe(0x2000);
      expect(smallStack.pop()).toBe(0x1000);
    });
  });

  describe("EdiabasError properties", () => {
    it("should have correct name for overflow error", () => {
      const smallStack = new CallStack({ maxDepth: 0 });
      try {
        smallStack.push(0x1000);
      } catch (e) {
        expect((e as Error).name).toBe("EdiabasError");
      }
    });

    it("should have correct name for underflow error", () => {
      try {
        callStack.pop();
      } catch (e) {
        expect((e as Error).name).toBe("EdiabasError");
      }
    });
  });
});
