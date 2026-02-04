// BEST opcodes
export const BestOpcodes = {
  NOP: 0x00,
  PUSH_CONST: 0x01,
  PUSH_VAR: 0x02,
  POP: 0x03,
  ADD: 0x04,
  SUB: 0x05,
  MUL: 0x06,
  DIV: 0x07,
  MOD: 0x08,
  AND: 0x09,
  OR: 0x0a,
  XOR: 0x0b,
  NOT: 0x0c,
  JUMP: 0x0d,
  JUMP_IF_ZERO: 0x0e,
  CALL: 0x0f,
  RETURN: 0x10,
} as const;

export type BestOpcode = (typeof BestOpcodes)[keyof typeof BestOpcodes];

// BEST data types (numeric IDs for binary format)
export const BestDataTypeIds = {
  STRING: 0x01,
  INT: 0x02,
  LONG: 0x03,
  FLOAT: 0x04,
  DOUBLE: 0x05,
  BINARY: 0x06,
} as const;

export type BestDataTypeId = (typeof BestDataTypeIds)[keyof typeof BestDataTypeIds];

// IFH (Interface Handler) error codes
export const IfhErrorCodes = {
  OK: 0,
  TIMEOUT: 1,
  INVALID_RESPONSE: 2,
  NOT_SUPPORTED: 3,
} as const;

export type IfhErrorCode = (typeof IfhErrorCodes)[keyof typeof IfhErrorCodes];

// BIP (BEST Interpreter) error codes
export const BipErrorCodes = {
  OK: 0,
  INVALID_OPCODE: 1000,
  STACK_UNDERFLOW: 1001,
  STACK_OVERFLOW: 1002,
  DIVISION_BY_ZERO: 1003,
} as const;

export type BipErrorCode = (typeof BipErrorCodes)[keyof typeof BipErrorCodes];

// System error codes
export const SysErrorCodes = {
  OK: 0,
  FILE_NOT_FOUND: 2000,
  IO_ERROR: 2001,
  PERMISSION_DENIED: 2002,
} as const;

export type SysErrorCode = (typeof SysErrorCodes)[keyof typeof SysErrorCodes];

// API error codes
export const ApiErrorCodes = {
  OK: 0,
  NOT_INITIALIZED: 3000,
  INVALID_ARGUMENT: 3001,
  BUSY: 3002,
} as const;

export type ApiErrorCode = (typeof ApiErrorCodes)[keyof typeof ApiErrorCodes];
