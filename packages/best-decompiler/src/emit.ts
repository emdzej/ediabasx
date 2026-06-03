import type { Instruction } from "@emdzej/ediabasx-best-parser";
import type { CfgResult } from "./cfg.js";
import { formatOperand, formatCondition, conditionConsumedIndices } from "./format.js";

const ASSIGN_OPS: Record<string, string> = {
  move: "=",
  adds: "+=",
  subb: "-=",
  mult: "*=",
  divs: "/=",
  and: "&=",
  or: "|=",
  xor: "^=",
  asl: "<<=",
  lsl: "<<=",
  asr: ">>=",
  lsr: ">>=",
  fadd: "+=",
  fsub: "-=",
  fmul: "*=",
  fdiv: "/=",
};

const SKIP_MNEMONICS = new Set(["nop"]);

const CALL_STYLE = new Set([
  "xconnect", "xhangup", "xsetpar", "xawlen",
  "xsend", "xsendf", "xrequf", "xstopf",
  "xkeyb", "xstate", "xboot", "xreset",
  "xtype", "xvers", "xreps", "xsendr",
  "xrecv", "xinfo", "xdownl", "xgetport",
  "xignit", "xloopt", "xprog", "xraw",
  "xsetport", "xsireset", "xstoptr", "xparraw",
  "xopen", "xclose", "xcloseex", "xswitch",
  "xsendex", "xrecvex", "xbatt",
  "ergb", "ergw", "ergd", "ergi",
  "ergr", "ergs", "ergy", "ergc", "ergl",
  "ergsysi",
  "parb", "parw", "parl", "pars",
  "parr", "pary", "parn",
  "tabset", "tabseek", "tabget", "tabline",
  "tabsetex", "tabseeku", "tabcols", "tabrows",
  "fopen", "fread", "freadln", "fseek",
  "fseekln", "ftell", "ftellln", "fclose",
  "enewset", "eerr", "generr",
  "push", "pop", "pushf", "popf",
  "atsp", "swap", "tosp",
  "scat", "scut", "slen", "spaste", "serase",
  "srevrs", "stoken", "setspc", "strcat",
  "strlen", "strcmp",
  "a2flt", "a2fix", "fix2flt", "flt2a",
  "fix2hex", "fix2dez", "ufix2dez", "flt2fix",
  "setflt", "flt2y4", "flt2y8", "y42flt", "y82flt",
  "a2y", "hex2y", "y2bcd", "y2hex",
  "gettmr", "settmr", "sett", "clrt",
  "wait", "waitex", "ticks", "date", "time",
  "ssize", "shmset", "shmget",
  "cfgig", "cfgsg", "cfgis",
  "iupdate", "irange", "iincpos",
  "addc", "subc",
  "clrc", "setc", "clrv",
  "plink", "plinkv", "pcall",
  "ppush", "ppop", "ppushflt", "ppopflt",
  "ppushy", "ppopy", "pjtsr",
]);

export function emitJob(
  instrs: readonly Instruction[],
  cfg: CfgResult,
  indent: string,
): string[] {
  const lines: string[] = [];
  const condConsumed = new Set<number>();

  for (const wl of cfg.whileLoops.values()) {
    for (const idx of conditionConsumedIndices(instrs, wl.condJump)) {
      condConsumed.add(idx);
    }
  }
  for (const dw of cfg.doWhiles.values()) {
    for (const idx of conditionConsumedIndices(instrs, dw.condJump)) {
      condConsumed.add(idx);
    }
  }
  for (const ie of cfg.ifElses.values()) {
    for (const idx of conditionConsumedIndices(instrs, ie.condJump)) {
      condConsumed.add(idx);
    }
  }

  const emit = (start: number, end: number, ind: string): void => {
    let i = start;
    while (i < end && i < instrs.length) {
      if (cfg.labelTargets.has(i)) {
        const labelInd = ind.length >= 2 ? ind.slice(0, -2) : "";
        lines.push(`${labelInd}L_${instrs[i].offset.toString(16).toUpperCase().padStart(8, "0")}:`);
      }

      const wl = cfg.whileLoops.get(i);
      if (wl && wl.backJump < end) {
        const cond = formatCondition(instrs, wl.condJump, true);
        lines.push(`${ind}while (${cond}) {`);
        emit(wl.bodyStart, wl.backJump, ind + indent);
        lines.push(`${ind}}`);
        i = wl.afterLoop;
        continue;
      }

      const dw = cfg.doWhiles.get(i);
      if (dw && dw.condJump < end) {
        lines.push(`${ind}do {`);
        emit(dw.bodyStart, dw.condJump, ind + indent);
        const cond = formatCondition(instrs, dw.condJump, false);
        lines.push(`${ind}} while (${cond});`);
        i = dw.condJump + 1;
        continue;
      }

      const ie = cfg.ifElses.get(i);
      if (ie && ie.afterIf <= end) {
        const cond = formatCondition(instrs, ie.condJump, true);
        lines.push(`${ind}if (${cond}) {`);
        if (ie.elseStart !== undefined) {
          emit(ie.thenStart, ie.elseStart - 1, ind + indent);
          lines.push(`${ind}} else {`);
          emit(ie.elseStart, ie.afterIf, ind + indent);
        } else {
          emit(ie.thenStart, ie.afterIf, ind + indent);
        }
        lines.push(`${ind}}`);
        i = ie.afterIf;
        continue;
      }

      if (condConsumed.has(i) || cfg.consumedJumps.has(i) || SKIP_MNEMONICS.has(instrs[i].mnemonic)) {
        i++;
        continue;
      }

      const line = emitStatement(instrs[i], instrs, i, cfg, ind);
      if (line !== null) {
        lines.push(line);
      }
      i++;
    }
  };

  emit(0, instrs.length, indent);
  return lines;
}

function emitStatement(
  instr: Instruction,
  instrs: readonly Instruction[],
  idx: number,
  _cfg: CfgResult,
  ind: string,
): string | null {
  const mn = instr.mnemonic;
  const ops = instr.operands;

  if (mn === "eoj") return null;

  const assignOp = ASSIGN_OPS[mn];
  if (assignOp) {
    const dst = formatOperand(ops[0]);
    if (assignOp === "=") {
      const src = ops.length > 1 ? formatOperand(ops[1]) : "0";
      return `${ind}${dst} = ${src};`;
    }
    const src = formatOperand(ops[1]);
    return `${ind}${dst} ${assignOp} ${src};`;
  }

  if (mn === "clear") {
    return `${ind}${formatOperand(ops[0])} = 0;`;
  }

  if (mn === "not") {
    return `${ind}${formatOperand(ops[0])} = ~${formatOperand(ops[0])};`;
  }

  if (mn === "comp" || mn === "scmp" || mn === "test" || mn === "fcomp") {
    return null;
  }

  if (mn === "jtsr") {
    const label = ops[0]?.startsWith("__") ? ops[0].slice(2) : ops[0];
    return `${ind}${label}();`;
  }

  if (mn === "ret") {
    return `${ind}return;`;
  }

  if (mn === "break") {
    return `${ind}break;`;
  }

  if (mn === "jump") {
    const label = ops[0] ?? "??";
    return `${ind}goto L_${label.startsWith("__") ? label.slice(2) : label};`;
  }

  if (mn === "etag") {
    const label = ops[0]?.startsWith("__") ? ops[0].slice(2) : (ops[0] ?? "");
    return `${ind}etag("${label}");`;
  }

  if (mn.startsWith("j")) {
    const cond = formatCondition(instrs, idx, true);
    const label = ops[0] ?? "??";
    const target = label.startsWith("__") ? label.slice(2) : label;
    return `${ind}if (${cond}) goto L_${target};`;
  }

  if (CALL_STYLE.has(mn)) {
    const args = ops.map(formatOperand).join(", ");
    return `${ind}${mn}(${args});`;
  }

  const args = ops.map(formatOperand).join(", ");
  return `${ind}${mn}(${args});`;
}
