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
