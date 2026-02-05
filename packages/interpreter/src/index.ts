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

// String operations
export {
  type StringRegisterRef as StringRef,
  type IntRegisterRef as StringIntRef,
  scat,
  slen,
  scmp,
  sget,
  sset,
  stoi,
  itos,
  stoh,
  htos,
  sfind,
  ssub,
  supper,
  slower,
  strim,
  srev,
  serase,
  spaste,
  stoken,
  scopy,
  sclear,
  ssetImm,
  // Aliases
  strcmp,
  strlen,
  strcat,
} from "./operations/string";

// Float operations
export {
  type FloatRegisterRef as FloatRef,
  type StringRegisterRef as FloatStringRef,
  type IntRegisterRef as FloatIntRef,
  fadd,
  fsub,
  fmul,
  fdiv,
  fcmp,
  fabs,
  fneg,
  ftoi,
  itof,
  ftos,
  stof,
  fsqrt,
  fpow,
  fmod,
  fround,
  ffloor,
  fceil,
  fclear,
  fcopy,
  fsetImm,
  // Aliases
  fcomp,
  a2flt,
  flt2a,
} from "./operations/float";

// Table operations
export {
  type BestTable,
  type TableContext,
  type StringRegisterRef as TableStringRef,
  type IntRegisterRef as TableIntRef,
  tabget,
  tabgetHeader,
  tabset,
  tabrows,
  tabcols,
  tabfind,
  tabseeku,
  tabline,
  tabselect,
  tabgetnext,
  createTableContext,
  selectFirstTable,
  // Aliases
  tablen,
  tabseek,
} from "./operations/table";

// Result operations
export {
  type JobResult,
  ResultCollector,
  type StringRegisterRef as ResultStringRef,
  type IntRegisterRef as ResultIntRef,
  type FloatRegisterRef as ResultFloatRef,
  ergb,
  ergw,
  ergd,
  ergi,
  ergr,
  ergs,
  ergy,
} from "./operations/result";

// Communication operations
export {
  type CommunicationInterface,
  type StringRegisterRef as CommunicationStringRef,
  type IntRegisterRef as CommunicationIntRef,
  xconnect,
  xhangup,
  xsend,
  xrecv,
  xsendr,
  xreset,
  xtype,
  xvers,
} from "./operations/communication";
