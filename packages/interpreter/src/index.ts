export {
  RegisterSet,
  DEFAULT_SSIZE,
  type RegisterSetOptions,
  type RegisterSnapshot,
} from "./registers";

export { Flags, type BitWidth, type FlagSnapshot } from "./flags";

export {
  CallStack,
  DEFAULT_MAX_DEPTH,
  type CallStackOptions,
} from "./callstack";

export {
  RegisterKinds,
  type RegisterKind,
  type RegisterRef,
  add,
  sub,
  mul,
  div,
  mod,
  neg,
  inc,
  dec,
  and,
  or,
  xor,
  not,
  shl,
  shr,
  cmp,
  test,
} from "./operations/arithmetic";

export {
  type ExecutionState,
  type ControlFlowResult,
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
  // Aliases
  jae,
  jbe,
  jge,
  jle,
  jo,
  jno,
  js,
  jns,
} from "./operations/control-flow";
