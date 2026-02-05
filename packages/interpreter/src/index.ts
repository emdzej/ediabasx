export {
  RegisterSet,
  DEFAULT_SSIZE,
  type RegisterSetOptions,
  type RegisterSnapshot,
} from "./registers";

export { Interpreter, type ExecutionOptions, type InterpreterSnapshot } from "./interpreter";

export { Flags, type BitWidth, type FlagSnapshot } from "./flags";

export {
  CallStack,
  DEFAULT_MAX_DEPTH,
  type CallStackOptions,
} from "./callstack";

export {
  DataStack,
  DEFAULT_STACK_DEPTH,
  type DataStackOptions,
} from "./stack";

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
  move,
  clear,
  comp,
  subb,
  adds,
  mult,
  divs,
  lsl,
  lsr,
  asl,
  asr,
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

export { clrc, setc, clrv, setv } from "./operations/flags";

export {
  push,
  pop,
  pushf,
  popf,
  atsp,
  swap,
  setspc,
} from "./operations/stack";

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
  a2fix,
  fix2hex,
  fix2dez,
  ufix2dez,
  hex2fix,
  dez2fix,
  udez2fix,
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
  fix2flt,
  flt2fix,
} from "./operations/float";

// Table operations
export {
  type TableData,
  type TableState,
  type TableRegistry,
  type StringRegisterRef as TableStringRef,
  type IntRegisterRef as TableIntRef,
  createTableRegistry,
  tabset,
  tabseek,
  tabseeku,
  tabget,
  tabrows,
  tabcols,
  tabline,
  // Aliases
  tablen,
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
  ergiValue,
  ergr,
  ergs,
  ergy,
} from "./operations/result";

// Parameter operations
export {
  type JobParameter,
  type ParameterIndex,
  ParameterSet,
  type StringRegisterRef as ParameterStringRef,
  type IntRegisterRef as ParameterIntRef,
  type FloatRegisterRef as ParameterFloatRef,
  parb,
  parw,
  parl,
  pars,
  parr,
  pary,
  parn,
} from "./operations/parameters";

// File operations
export {
  type FileSystem,
  type FileHandle,
  type FileOpenMode,
  type SeekOrigin,
  type StringRegisterRef as FileStringRef,
  type IntRegisterRef as FileIntRef,
  fopen,
  fclose,
  fread,
  fwrite,
  fseek,
  fseekln,
  feof,
} from "./operations/file";

// Time/Date operations
export {
  type TimeValueRef,
  type DateTimeDestination,
  Timer,
  gettmr,
  settmr,
  getdate,
  gettime,
  wait,
  date,
  time,
} from "./operations/time";

// Shared memory operations
export {
  type SharedMemoryKey,
  type SharedMemoryValue,
  SharedMemory,
  shmset,
  shmget,
} from "./operations/shared-memory";

// Procedure operations
export {
  type ProcedureArgument,
  type ProcedureHandler,
  ProcedureRegistry,
  ProcedureStack,
  plink,
  pcall,
  ppush,
  ppushflt,
  ppushy,
  ppushBinary,
  ppopBinary,
  ppopString,
} from "./operations/procedures";

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
  xsetpar,
  xawlen,
  xsendf,
  xrequf,
  xstopf,
  xkeyb,
  xstate,
  xboot,
  xreps,
  xgetport,
  xsetport,
  xignit,
  xloopt,
  xprog,
  xraw,
  xsireset,
  xopen,
  xclose,
  xcloseex,
  xswitch,
  xsendex,
  xrecvex,
} from "./operations/communication";
