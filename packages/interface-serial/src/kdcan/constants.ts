export const KLINEF1_PARITY_MASK = 0x07;
export const KLINEF1_PARITY_NONE = 0x00;
export const KLINEF1_PARITY_EVEN = 0x01;
export const KLINEF1_PARITY_ODD = 0x02;
export const KLINEF1_PARITY_MARK = 0x03;
export const KLINEF1_PARITY_SPACE = 0x04;
export const KLINEF1_USE_LLINE = 0x08;
export const KLINEF1_SEND_PULSE = 0x10;
export const KLINEF1_NO_ECHO = 0x20;
export const KLINEF1_FAST_INIT = 0x40;
export const KLINEF1_USE_KLINE = 0x80;

export const KLINEF2_KWP1281_DETECT = 0x01;

export const CANF_NO_ECHO = 0x01;
export const CANF_CAN_ERROR = 0x02;
export const CANF_CONNECT_CHECK = 0x04;
export const CANF_DISCONNECT = 0x08;

export const CAN_PROT_BMW = 0x00;
export const CAN_PROT_TP20 = 0x01;
export const CAN_PROT_ISOTP = 0x02;

export const KWP1281_TIMEOUT = 60;

export const EscapeConfRead = 0x01;
export const EscapeConfWrite = 0x02;
export const EscapeCodeDefault = 0xff;
export const EscapeMaskDefault = 0x80;
export const EscapeXor = 0x55;

export const ADAPTER_VOLTAGE_SCALE = 0.1;
export const ADAPTER_VOLTAGE_TIMEOUT_MS = 10000;

export const MAX_BAUD_RATE = 25000;
export const BAUD_AUTO = 2;

export const Protocols = {
  Uart: "uart",
  Kwp: "kwp",
  Tp20: "tp20",
  IsoTp: "isotp"
} as const;

export type Protocol = (typeof Protocols)[keyof typeof Protocols];

export const SerialParities = {
  None: "none",
  Odd: "odd",
  Even: "even",
  Mark: "mark",
  Space: "space"
} as const;

export type SerialParity =
  (typeof SerialParities)[keyof typeof SerialParities];

export const CanFlags = {
  Empty: 0x00,
  BusCheck: 0x01,
  Disconnect: 0x02
} as const;

export type CanFlag = number;
