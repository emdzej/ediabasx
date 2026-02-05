import { describe, it, expect, beforeEach } from "vitest";
import { Flags } from "./flags";
import { CallStack } from "./callstack";
import {
  type ExecutionState,
  jmp,
  jc,
  jnc,
  jz,
  jnz,
  jb,
  jnb,
  ja,
  jna,
  jl,
  jnl,
  jg,
  jng,
  jv,
  jnv,
  jmi,
  jpl,
  call,
  jtsr,
  ret,
  loop,
  jae,
  jbe,
  jge,
  jle,
  jo,
  jno,
  js,
  jns,
  jt,
  jnt,
} from "./operations/control-flow";

describe("Control Flow Operations", () => {
  let flags: Flags;
  let callStack: CallStack;

  function createState(pc: number): ExecutionState {
    return { pc, flags, callStack };
  }

  beforeEach(() => {
    flags = new Flags();
    callStack = new CallStack();
  });

  describe("JMP (Unconditional Jump)", () => {
    it("should jump forward with positive offset", () => {
      const result = jmp(createState(100), 50);
      expect(result.newPc).toBe(150);
    });

    it("should jump backward with negative offset", () => {
      const result = jmp(createState(100), -30);
      expect(result.newPc).toBe(70);
    });

    it("should handle zero offset (no jump)", () => {
      const result = jmp(createState(100), 0);
      expect(result.newPc).toBe(100);
    });

    it("should handle large positive offset", () => {
      const result = jmp(createState(0), 0x10000);
      expect(result.newPc).toBe(0x10000);
    });
  });

  describe("JC/JB (Jump if Carry/Below)", () => {
    it("should jump when carry flag is set", () => {
      flags.c = true;
      const result = jc(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when carry flag is clear", () => {
      flags.c = false;
      const result = jc(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JB should behave identically to JC", () => {
      flags.c = true;
      const jcResult = jc(createState(100), 20);
      const jbResult = jb(createState(100), 20);
      expect(jbResult.newPc).toBe(jcResult.newPc);
    });
  });

  describe("JNC/JAE/JNB (Jump if Not Carry/Above or Equal)", () => {
    it("should jump when carry flag is clear", () => {
      flags.c = false;
      const result = jnc(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when carry flag is set", () => {
      flags.c = true;
      const result = jnc(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JAE should behave identically to JNC", () => {
      flags.c = false;
      const jncResult = jnc(createState(100), 20);
      const jaeResult = jae(createState(100), 20);
      expect(jaeResult.newPc).toBe(jncResult.newPc);
    });

    it("JNB should behave identically to JNC", () => {
      flags.c = false;
      const jncResult = jnc(createState(100), 20);
      const jnbResult = jnb(createState(100), 20);
      expect(jnbResult.newPc).toBe(jncResult.newPc);
    });
  });

  describe("JZ/JE (Jump if Zero/Equal)", () => {
    it("should jump when zero flag is set", () => {
      flags.z = true;
      const result = jz(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when zero flag is clear", () => {
      flags.z = false;
      const result = jz(createState(100), 20);
      expect(result.newPc).toBe(100);
    });
  });

  describe("JNZ/JNE (Jump if Not Zero/Not Equal)", () => {
    it("should jump when zero flag is clear", () => {
      flags.z = false;
      const result = jnz(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when zero flag is set", () => {
      flags.z = true;
      const result = jnz(createState(100), 20);
      expect(result.newPc).toBe(100);
    });
  });

  describe("JA (Jump if Above - unsigned)", () => {
    it("should jump when C=0 and Z=0 (a > b unsigned)", () => {
      flags.c = false;
      flags.z = false;
      const result = ja(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when C=1 (a < b)", () => {
      flags.c = true;
      flags.z = false;
      const result = ja(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("should not jump when Z=1 (a == b)", () => {
      flags.c = false;
      flags.z = true;
      const result = ja(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("should not jump when both C=1 and Z=1", () => {
      flags.c = true;
      flags.z = true;
      const result = ja(createState(100), 20);
      expect(result.newPc).toBe(100);
    });
  });

  describe("JNA/JBE (Jump if Not Above/Below or Equal - unsigned)", () => {
    it("should jump when C=1 (a < b)", () => {
      flags.c = true;
      flags.z = false;
      const result = jna(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should jump when Z=1 (a == b)", () => {
      flags.c = false;
      flags.z = true;
      const result = jna(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should jump when both C=1 and Z=1", () => {
      flags.c = true;
      flags.z = true;
      const result = jna(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when C=0 and Z=0 (a > b)", () => {
      flags.c = false;
      flags.z = false;
      const result = jna(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JBE should behave identically to JNA", () => {
      flags.c = true;
      flags.z = false;
      const jnaResult = jna(createState(100), 20);
      const jbeResult = jbe(createState(100), 20);
      expect(jbeResult.newPc).toBe(jnaResult.newPc);
    });
  });

  describe("JL (Jump if Less - signed)", () => {
    it("should jump when S != V (negative result without overflow)", () => {
      flags.s = true;
      flags.v = false;
      const result = jl(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should jump when S=0 V=1 (positive result with overflow)", () => {
      flags.s = false;
      flags.v = true;
      const result = jl(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when S == V (S=0, V=0)", () => {
      flags.s = false;
      flags.v = false;
      const result = jl(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("should not jump when S == V (S=1, V=1)", () => {
      flags.s = true;
      flags.v = true;
      const result = jl(createState(100), 20);
      expect(result.newPc).toBe(100);
    });
  });

  describe("JNL/JGE (Jump if Not Less/Greater or Equal - signed)", () => {
    it("should jump when S == V (S=0, V=0)", () => {
      flags.s = false;
      flags.v = false;
      const result = jnl(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should jump when S == V (S=1, V=1)", () => {
      flags.s = true;
      flags.v = true;
      const result = jnl(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when S != V", () => {
      flags.s = true;
      flags.v = false;
      const result = jnl(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JGE should behave identically to JNL", () => {
      flags.s = false;
      flags.v = false;
      const jnlResult = jnl(createState(100), 20);
      const jgeResult = jge(createState(100), 20);
      expect(jgeResult.newPc).toBe(jnlResult.newPc);
    });
  });

  describe("JG (Jump if Greater - signed)", () => {
    it("should jump when Z=0 and S==V", () => {
      flags.z = false;
      flags.s = false;
      flags.v = false;
      const result = jg(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should jump when Z=0 and S==V (both true)", () => {
      flags.z = false;
      flags.s = true;
      flags.v = true;
      const result = jg(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when Z=1 (equal)", () => {
      flags.z = true;
      flags.s = false;
      flags.v = false;
      const result = jg(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("should not jump when S != V", () => {
      flags.z = false;
      flags.s = true;
      flags.v = false;
      const result = jg(createState(100), 20);
      expect(result.newPc).toBe(100);
    });
  });

  describe("JNG/JLE (Jump if Not Greater/Less or Equal - signed)", () => {
    it("should jump when Z=1 (equal)", () => {
      flags.z = true;
      flags.s = false;
      flags.v = false;
      const result = jng(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should jump when S != V (less than)", () => {
      flags.z = false;
      flags.s = true;
      flags.v = false;
      const result = jng(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when Z=0 and S==V (greater than)", () => {
      flags.z = false;
      flags.s = false;
      flags.v = false;
      const result = jng(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JLE should behave identically to JNG", () => {
      flags.z = true;
      const jngResult = jng(createState(100), 20);
      const jleResult = jle(createState(100), 20);
      expect(jleResult.newPc).toBe(jngResult.newPc);
    });
  });

  describe("JV/JO (Jump if Overflow)", () => {
    it("should jump when overflow flag is set", () => {
      flags.v = true;
      const result = jv(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when overflow flag is clear", () => {
      flags.v = false;
      const result = jv(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JO should behave identically to JV", () => {
      flags.v = true;
      const jvResult = jv(createState(100), 20);
      const joResult = jo(createState(100), 20);
      expect(joResult.newPc).toBe(jvResult.newPc);
    });
  });

  describe("JNV/JNO (Jump if No Overflow)", () => {
    it("should jump when overflow flag is clear", () => {
      flags.v = false;
      const result = jnv(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when overflow flag is set", () => {
      flags.v = true;
      const result = jnv(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JNO should behave identically to JNV", () => {
      flags.v = false;
      const jnvResult = jnv(createState(100), 20);
      const jnoResult = jno(createState(100), 20);
      expect(jnoResult.newPc).toBe(jnvResult.newPc);
    });
  });

  describe("JMI/JS (Jump if Minus/Sign)", () => {
    it("should jump when sign flag is set", () => {
      flags.s = true;
      const result = jmi(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when sign flag is clear", () => {
      flags.s = false;
      const result = jmi(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JS should behave identically to JMI", () => {
      flags.s = true;
      const jmiResult = jmi(createState(100), 20);
      const jsResult = js(createState(100), 20);
      expect(jsResult.newPc).toBe(jmiResult.newPc);
    });
  });

  describe("JPL/JNS (Jump if Plus/No Sign)", () => {
    it("should jump when sign flag is clear", () => {
      flags.s = false;
      const result = jpl(createState(100), 20);
      expect(result.newPc).toBe(120);
    });

    it("should not jump when sign flag is set", () => {
      flags.s = true;
      const result = jpl(createState(100), 20);
      expect(result.newPc).toBe(100);
    });

    it("JNS should behave identically to JPL", () => {
      flags.s = false;
      const jplResult = jpl(createState(100), 20);
      const jnsResult = jns(createState(100), 20);
      expect(jnsResult.newPc).toBe(jplResult.newPc);
    });
  });

  describe("CALL/JTSR (Call Subroutine)", () => {
    it("should push return address and jump to target", () => {
      const state = createState(100);
      const result = call(state, 200);
      
      expect(result.newPc).toBe(300);
      expect(callStack.depth()).toBe(1);
      expect(callStack.peek()).toBe(100);
    });

    it("should handle negative offset (backward call)", () => {
      const state = createState(500);
      const result = call(state, -100);
      
      expect(result.newPc).toBe(400);
      expect(callStack.peek()).toBe(500);
    });

    it("JTSR should behave identically to CALL", () => {
      const state1 = createState(100);
      const state2 = createState(100);
      const callStack2 = new CallStack();
      state2.callStack = callStack2;
      
      const callResult = call(state1, 50);
      const jtsrResult = jtsr(state2, 50);
      
      expect(jtsrResult.newPc).toBe(callResult.newPc);
    });

    it("should support nested calls", () => {
      const state = createState(100);
      
      // First call
      call(state, 200); // PC -> 300, return addr 100
      state.pc = 300;
      
      // Second call  
      call(state, 100); // PC -> 400, return addr 300
      
      expect(callStack.depth()).toBe(2);
      expect(callStack.pop()).toBe(300); // Most recent
      expect(callStack.pop()).toBe(100); // First call
    });

    it("should throw on stack overflow", () => {
      const smallStack = new CallStack({ maxDepth: 2 });
      const state = { pc: 100, flags, callStack: smallStack };
      
      call(state, 10);
      call(state, 10);
      
      expect(() => call(state, 10)).toThrow();
    });
  });

  describe("RET (Return from Subroutine)", () => {
    it("should pop return address and jump to it", () => {
      callStack.push(500);
      const state = createState(100);
      
      const result = ret(state);
      
      expect(result.newPc).toBe(500);
      expect(callStack.isEmpty()).toBe(true);
    });

    it("should handle nested returns correctly", () => {
      callStack.push(100); // First call
      callStack.push(300); // Second call
      
      const state = createState(400);
      
      // First return
      const result1 = ret(state);
      expect(result1.newPc).toBe(300);
      
      // Second return
      state.pc = 300;
      const result2 = ret(state);
      expect(result2.newPc).toBe(100);
    });

    it("should throw on stack underflow", () => {
      const state = createState(100);
      expect(() => ret(state)).toThrow();
    });
  });

  describe("CALL/RET integration", () => {
    it("should correctly call and return from subroutine", () => {
      const state = createState(100);
      
      // Call subroutine at PC + 200
      const callResult = call(state, 200);
      expect(callResult.newPc).toBe(300);
      
      // Simulate executing subroutine and returning
      state.pc = 350; // Somewhere in subroutine
      const retResult = ret(state);
      expect(retResult.newPc).toBe(100);
    });

    it("should handle multiple nested calls and returns", () => {
      const state = createState(100);
      
      // main calls sub1 at 200
      call(state, 100);
      state.pc = 200;
      
      // sub1 calls sub2 at 400
      call(state, 200);
      state.pc = 400;
      
      // sub2 calls sub3 at 600
      call(state, 200);
      state.pc = 600;
      
      expect(callStack.depth()).toBe(3);
      
      // Return from sub3
      let result = ret(state);
      expect(result.newPc).toBe(400);
      state.pc = 400;
      
      // Return from sub2
      result = ret(state);
      expect(result.newPc).toBe(200);
      state.pc = 200;
      
      // Return from sub1
      result = ret(state);
      expect(result.newPc).toBe(100);
      
      expect(callStack.isEmpty()).toBe(true);
    });
  });

  describe("LOOP instruction", () => {
    it("should decrement counter and jump when counter > 1", () => {
      const state = createState(100);
      const result = loop(5, state, -20);
      
      expect(result.newCounter).toBe(4);
      expect(result.newPc).toBe(80);
      expect(result.shouldJump).toBe(true);
    });

    it("should decrement counter and not jump when counter becomes 0", () => {
      const state = createState(100);
      const result = loop(1, state, -20);
      
      expect(result.newCounter).toBe(0);
      expect(result.newPc).toBe(100);
      expect(result.shouldJump).toBe(false);
    });

    it("should handle counter wrapping at 0 (underflow to max)", () => {
      const state = createState(100);
      const result = loop(0, state, -20);
      
      // 0 - 1 wraps to 0xFFFFFFFF
      expect(result.newCounter).toBe(0xffffffff);
      expect(result.shouldJump).toBe(true);
    });

    it("should work correctly for a complete loop", () => {
      const state = createState(100);
      let counter = 3;
      const iterations: number[] = [];
      
      while (counter > 0) {
        const result = loop(counter, state, -20);
        counter = result.newCounter;
        iterations.push(counter);
        
        if (!result.shouldJump) break;
      }
      
      expect(iterations).toEqual([2, 1, 0]);
    });

    it("should handle forward jump offset", () => {
      const state = createState(100);
      const result = loop(5, state, 50);
      
      expect(result.newPc).toBe(150);
      expect(result.shouldJump).toBe(true);
    });
  });

  describe("Conditional jumps after CMP scenarios", () => {
    // Simulate flags after CMP a, b operations
    
    describe("after CMP 5, 3 (a > b)", () => {
      beforeEach(() => {
        // 5 - 3 = 2: Z=0, C=0, S=0, V=0
        flags.z = false;
        flags.c = false;
        flags.s = false;
        flags.v = false;
      });

      it("JA should jump (5 > 3 unsigned)", () => {
        expect(ja(createState(100), 20).newPc).toBe(120);
      });

      it("JG should jump (5 > 3 signed)", () => {
        expect(jg(createState(100), 20).newPc).toBe(120);
      });

      it("JBE should not jump", () => {
        expect(jna(createState(100), 20).newPc).toBe(100);
      });

      it("JLE should not jump", () => {
        expect(jng(createState(100), 20).newPc).toBe(100);
      });
    });

    describe("after CMP 3, 5 (a < b)", () => {
      beforeEach(() => {
        // 3 - 5 = -2 (0xFE in 8-bit): Z=0, C=1 (borrow), S=1, V=0
        flags.z = false;
        flags.c = true;
        flags.s = true;
        flags.v = false;
      });

      it("JB should jump (3 < 5 unsigned)", () => {
        expect(jb(createState(100), 20).newPc).toBe(120);
      });

      it("JL should jump (3 < 5 signed)", () => {
        expect(jl(createState(100), 20).newPc).toBe(120);
      });

      it("JAE should not jump", () => {
        expect(jae(createState(100), 20).newPc).toBe(100);
      });

      it("JGE should not jump", () => {
        expect(jge(createState(100), 20).newPc).toBe(100);
      });
    });

    describe("after CMP 5, 5 (a == b)", () => {
      beforeEach(() => {
        // 5 - 5 = 0: Z=1, C=0, S=0, V=0
        flags.z = true;
        flags.c = false;
        flags.s = false;
        flags.v = false;
      });

      it("JZ should jump (equal)", () => {
        expect(jz(createState(100), 20).newPc).toBe(120);
      });

      it("JGE should jump (5 >= 5)", () => {
        expect(jge(createState(100), 20).newPc).toBe(120);
      });

      it("JLE should jump (5 <= 5)", () => {
        expect(jle(createState(100), 20).newPc).toBe(120);
      });

      it("JG should not jump (not greater)", () => {
        expect(jg(createState(100), 20).newPc).toBe(100);
      });

      it("JL should not jump (not less)", () => {
        expect(jl(createState(100), 20).newPc).toBe(100);
      });
    });

    describe("signed overflow case: CMP -128, 1 (8-bit)", () => {
      beforeEach(() => {
        // -128 - 1 = -129 (overflow): Z=0, C=0, S=0 (appears positive), V=1
        flags.z = false;
        flags.c = false;
        flags.s = false; // Result appears positive due to overflow
        flags.v = true;
      });

      it("JL should jump (S != V means a < b signed)", () => {
        // S=0, V=1, so S != V
        expect(jl(createState(100), 20).newPc).toBe(120);
      });

      it("JV should jump (overflow occurred)", () => {
        expect(jv(createState(100), 20).newPc).toBe(120);
      });
    });
  });

  describe("Timer flag jumps (JT/JNT)", () => {
    it("JT jumps when timer flag is set", () => {
      const timerState = { timerFlag: true };
      expect(jt(createState(100), timerState, 20).newPc).toBe(120);
    });

    it("JT does not jump when timer flag is clear", () => {
      const timerState = { timerFlag: false };
      expect(jt(createState(100), timerState, 20).newPc).toBe(100);
    });

    it("JNT jumps when timer flag is clear", () => {
      const timerState = { timerFlag: false };
      expect(jnt(createState(100), timerState, 20).newPc).toBe(120);
    });

    it("JNT does not jump when timer flag is set", () => {
      const timerState = { timerFlag: true };
      expect(jnt(createState(100), timerState, 20).newPc).toBe(100);
    });

    it("JT handles negative offset", () => {
      const timerState = { timerFlag: true };
      expect(jt(createState(100), timerState, -30).newPc).toBe(70);
    });

    it("JNT handles negative offset", () => {
      const timerState = { timerFlag: false };
      expect(jnt(createState(100), timerState, -30).newPc).toBe(70);
    });
  });
});
