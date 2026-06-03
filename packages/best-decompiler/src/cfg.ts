import type { Instruction } from "@emdzej/ediabasx-best-parser";

export interface WhileLoop {
  condStart: number;
  condJump: number;
  bodyStart: number;
  backJump: number;
  afterLoop: number;
}

export interface DoWhile {
  bodyStart: number;
  condJump: number;
}

export interface IfElse {
  condJump: number;
  thenStart: number;
  elseStart?: number;
  afterIf: number;
}

export interface CfgResult {
  whileLoops: Map<number, WhileLoop>;
  doWhiles: Map<number, DoWhile>;
  ifElses: Map<number, IfElse>;
  consumedJumps: Set<number>;
  labelTargets: Set<number>;
}

const COND_JUMPS = new Set([
  "jz", "jnz", "jg", "jge", "jl", "jle",
  "ja", "jae", "jbe", "jc", "jmi", "jpl",
  "jt", "jnt", "jv", "jnv",
]);

function parseLabelOffset(operand: string): number | undefined {
  if (operand.startsWith("__")) {
    return parseInt(operand.slice(2), 16);
  }
  return undefined;
}

export function analyseControlFlow(instrs: readonly Instruction[]): CfgResult {
  const offsetToIndex = new Map<number, number>();
  for (let i = 0; i < instrs.length; i++) {
    offsetToIndex.set(instrs[i].offset, i);
  }

  const resolveTarget = (operand: string): number | undefined => {
    const targetOffset = parseLabelOffset(operand);
    if (targetOffset === undefined) return undefined;
    return offsetToIndex.get(targetOffset);
  };

  const jumpMap = new Map<number, number>();
  const condJumpMap = new Map<number, number>();

  for (let i = 0; i < instrs.length; i++) {
    const ins = instrs[i];
    if (ins.operands.length === 0) continue;
    const target = resolveTarget(ins.operands[0]);
    if (target === undefined) continue;

    if (ins.mnemonic === "jump") {
      jumpMap.set(i, target);
    } else if (COND_JUMPS.has(ins.mnemonic)) {
      condJumpMap.set(i, target);
    }
  }

  const consumedJumps = new Set<number>();
  const whileLoops = new Map<number, WhileLoop>();

  for (const [jmpIdx, targetIdx] of jumpMap) {
    if (targetIdx > jmpIdx) continue;
    for (let s = targetIdx; s < jmpIdx; s++) {
      const condTarget = condJumpMap.get(s);
      if (condTarget !== undefined && condTarget > jmpIdx) {
        whileLoops.set(targetIdx, {
          condStart: targetIdx,
          condJump: s,
          bodyStart: s + 1,
          backJump: jmpIdx,
          afterLoop: jmpIdx + 1,
        });
        consumedJumps.add(jmpIdx);
        consumedJumps.add(s);
        break;
      }
    }
  }

  const doWhiles = new Map<number, DoWhile>();
  for (const [condIdx, targetIdx] of condJumpMap) {
    if (consumedJumps.has(condIdx)) continue;
    if (targetIdx >= condIdx) continue;
    doWhiles.set(targetIdx, { bodyStart: targetIdx, condJump: condIdx });
    consumedJumps.add(condIdx);
  }

  const ifElses = new Map<number, IfElse>();
  for (const [condIdx, targetIdx] of condJumpMap) {
    if (consumedJumps.has(condIdx)) continue;
    if (targetIdx <= condIdx) continue;

    const beforeTarget = targetIdx - 1;
    const tailJump = jumpMap.get(beforeTarget);
    if (tailJump !== undefined && tailJump > targetIdx && !consumedJumps.has(beforeTarget)) {
      ifElses.set(condIdx, {
        condJump: condIdx,
        thenStart: condIdx + 1,
        elseStart: targetIdx,
        afterIf: tailJump,
      });
      consumedJumps.add(condIdx);
      consumedJumps.add(beforeTarget);
    } else {
      ifElses.set(condIdx, {
        condJump: condIdx,
        thenStart: condIdx + 1,
        afterIf: targetIdx,
      });
      consumedJumps.add(condIdx);
    }
  }

  const labelTargets = new Set<number>();
  for (const [idx, target] of jumpMap) {
    if (!consumedJumps.has(idx)) labelTargets.add(target);
  }
  for (const [idx, target] of condJumpMap) {
    if (!consumedJumps.has(idx)) labelTargets.add(target);
  }

  return { whileLoops, doWhiles, ifElses, consumedJumps, labelTargets };
}
