import type { Instruction } from "@emdzej/ediabasx-best-parser";

export function formatOperand(op: string): string {
  const immHex = op.match(/^#\$([0-9A-Fa-f]+)\.[BIL]$/);
  if (immHex) {
    return `0x${immHex[1].replace(/^0+(?=.)/, "").toUpperCase()}`;
  }

  if (op.match(/^#'.'$/) || op.match(/^#'\\.'$/)) {
    return op.slice(1);
  }

  if (op.startsWith('"') && op.endsWith('"')) {
    return op;
  }

  if (op.startsWith("{") && op.endsWith("}")) {
    const inner = op.slice(1, -1);
    const parts = inner.split(",").map((p) => {
      const m = p.trim().match(/^\$([0-9A-Fa-f]+)\.?[BIL]?$/);
      return m ? `0x${m[1].toUpperCase()}` : p.trim();
    });
    return `{${parts.join(", ")}}`;
  }

  const idxImm = op.match(/^([A-Z][0-9A-F])\[#\$([0-9A-Fa-f]+)\](.*)$/);
  if (idxImm) {
    const idx = parseInt(idxImm[2], 16);
    const suffix = idxImm[3] ? formatLenSuffix(idxImm[3]) : "";
    return `${idxImm[1]}[${idx}]${suffix}`;
  }

  const idxReg = op.match(/^([A-Z][0-9A-F])\[([A-Z][0-9A-F])(.*)\](.*)$/);
  if (idxReg) {
    const incPart = idxReg[3] ? formatIncPart(idxReg[3]) : "";
    const suffix = idxReg[4] ? formatLenSuffix(idxReg[4]) : "";
    return `${idxReg[1]}[${idxReg[2]}${incPart}]${suffix}`;
  }

  return op;
}

function formatLenSuffix(s: string): string {
  const m = s.match(/^#\$([0-9A-Fa-f]+)$/);
  if (m) return `:${parseInt(m[1], 16)}`;
  const reg = s.match(/^([A-Z][0-9A-F])$/);
  if (reg) return `:${reg[1]}`;
  return s;
}

function formatIncPart(s: string): string {
  const m = s.match(/^,#\$([0-9A-Fa-f]+)$/);
  if (m) return `, ${parseInt(m[1], 16)}`;
  return s;
}

const NEGATE_JUMP: Record<string, string> = {
  jz: "!=", jnz: "==",
  jg: "<=", jge: "<", jl: ">=", jle: ">",
  ja: "<=", jae: "<", jbe: ">",
  jc: ">=", jmi: ">=", jpl: "<",
};

const MATCH_JUMP: Record<string, string> = {
  jz: "==", jnz: "!=",
  jg: ">", jge: ">=", jl: "<", jle: "<=",
  ja: ">", jae: ">=", jbe: "<=",
  jc: "<", jmi: "<", jpl: ">=",
};

const EXPLICIT_COND = new Set(["comp", "scmp", "test", "fcomp"]);

function findConditionInstr(
  instrs: readonly Instruction[],
  jumpIdx: number,
): { instr: Instruction; index: number } | undefined {
  for (let i = jumpIdx - 1; i >= 0 && i >= jumpIdx - 5; i--) {
    if (EXPLICIT_COND.has(instrs[i].mnemonic)) {
      return { instr: instrs[i], index: i };
    }
  }
  return undefined;
}

function findImplicitCondSource(
  instrs: readonly Instruction[],
  jumpIdx: number,
): string | undefined {
  if (jumpIdx <= 0) return undefined;
  const prev = instrs[jumpIdx - 1];
  if (prev.mnemonic === "pop" && prev.operands.length > 0) {
    return formatOperand(prev.operands[0]);
  }
  if (prev.mnemonic === "move" && prev.operands.length > 0) {
    return formatOperand(prev.operands[0]);
  }
  if (prev.operands.length > 0) {
    const args = prev.operands.map(formatOperand).join(", ");
    return `${prev.mnemonic}(${args})`;
  }
  return prev.mnemonic;
}

export function formatCondition(
  instrs: readonly Instruction[],
  jumpIdx: number,
  negate: boolean,
): string {
  const jump = instrs[jumpIdx];
  const table = negate ? NEGATE_JUMP : MATCH_JUMP;
  const op = table[jump.mnemonic] ?? "??";

  const cond = findConditionInstr(instrs, jumpIdx);

  if (!cond) {
    const implicit = findImplicitCondSource(instrs, jumpIdx);
    if (implicit) {
      if (jump.mnemonic === "jz") return negate ? implicit : `!${implicit}`;
      if (jump.mnemonic === "jnz") return negate ? `!${implicit}` : implicit;
    }
    return `/* ${jump.mnemonic} */`;
  }

  const lhs = formatOperand(cond.instr.operands[0]);
  const rhs = cond.instr.operands.length > 1 ? formatOperand(cond.instr.operands[1]) : "";

  if (cond.instr.mnemonic === "test") {
    const expr = rhs ? `(${lhs} & ${rhs})` : lhs;
    if (negate) {
      return jump.mnemonic === "jz" ? expr : `!(${expr})`;
    }
    return jump.mnemonic === "jz" ? `!(${expr})` : expr;
  }

  return `${lhs} ${op} ${rhs}`;
}

export function conditionConsumedIndices(
  instrs: readonly Instruction[],
  jumpIdx: number,
): number[] {
  const cond = findConditionInstr(instrs, jumpIdx);
  return cond ? [cond.index] : [];
}
