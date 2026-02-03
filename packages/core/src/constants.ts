export enum BestOpcode {
  Nop = 0x00,
  PushConst = 0x01,
  PushVar = 0x02,
  Pop = 0x03,
  Add = 0x04,
  Sub = 0x05,
  Mul = 0x06,
  Div = 0x07,
  Mod = 0x08,
  And = 0x09,
  Or = 0x0a,
  Xor = 0x0b,
  Not = 0x0c,
  Jump = 0x0d,
  JumpIfZero = 0x0e,
  Call = 0x0f,
  Return = 0x10,
}

export enum BestDataTypeId {
  String = 0x01,
  Int = 0x02,
  Long = 0x03,
  Float = 0x04,
  Double = 0x05,
  Binary = 0x06,
}

export enum EdiabasIfhErrorCode {
  Ok = 0,
  Timeout = 1,
  InvalidResponse = 2,
  NotSupported = 3,
}

export enum EdiabasBipErrorCode {
  Ok = 0,
  InvalidOpcode = 1000,
  StackUnderflow = 1001,
  StackOverflow = 1002,
  DivisionByZero = 1003,
}

export enum EdiabasSysErrorCode {
  Ok = 0,
  FileNotFound = 2000,
  IoError = 2001,
  PermissionDenied = 2002,
}

export enum EdiabasApiErrorCode {
  Ok = 0,
  NotInitialized = 3000,
  InvalidArgument = 3001,
  Busy = 3002,
}
