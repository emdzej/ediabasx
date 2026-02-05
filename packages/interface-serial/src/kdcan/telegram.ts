import {
  BAUD_AUTO,
  CANF_CAN_ERROR,
  CANF_CONNECT_CHECK,
  CANF_DISCONNECT,
  CANF_NO_ECHO,
  CAN_PROT_ISOTP,
  CAN_PROT_TP20,
  CanFlags,
  KLINEF1_FAST_INIT,
  KLINEF1_NO_ECHO,
  KLINEF1_PARITY_EVEN,
  KLINEF1_PARITY_MARK,
  KLINEF1_PARITY_NONE,
  KLINEF1_PARITY_ODD,
  KLINEF1_PARITY_SPACE,
  KLINEF1_SEND_PULSE,
  KLINEF1_USE_KLINE,
  KLINEF1_USE_LLINE,
  KLINEF2_KWP1281_DETECT,
  KWP1281_TIMEOUT,
  MAX_BAUD_RATE,
  Protocols,
  type CanFlag,
  type Protocol,
  type SerialParity
} from "./constants";
import { calcChecksumBmwFast } from "./checksum";

export type AdapterTelegramConfig = {
  adapterType: number;
  adapterVersion: number;
  currentBaudRate: number;
  interByteTime: number;
  currentProtocol: Protocol;
  currentParity: SerialParity;
  fastInit: boolean;
};

export type PulseTelegramConfig = {
  adapterType: number;
  adapterVersion: number;
  currentBaudRate: number;
  interByteTime: number;
  currentProtocol: Protocol;
  currentParity: SerialParity;
};

export type CanTelegramConfig = {
  adapterType: number;
  adapterVersion: number;
  currentBaudRate: number;
  currentProtocol: Protocol;
  canTxId: number;
  canRxId: number;
  canFlags: CanFlag;
};

export function getMinBaudRate(
  adapterType: number,
  adapterVersion: number
): number {
  if (adapterType < 0x0002 || adapterVersion < 0x000d) {
    return 4000;
  }
  return 980;
}

export function calcParityFlags(parity: SerialParity): number {
  switch (parity) {
    case "odd":
      return KLINEF1_PARITY_ODD;
    case "even":
      return KLINEF1_PARITY_EVEN;
    case "mark":
      return KLINEF1_PARITY_MARK;
    case "space":
      return KLINEF1_PARITY_SPACE;
    case "none":
    default:
      return KLINEF1_PARITY_NONE;
  }
}

export function createAdapterTelegram(
  sendData: Uint8Array,
  length: number,
  setDtr: boolean,
  config: AdapterTelegramConfig
): Uint8Array | null {
  if (config.adapterType < 0x0002 || config.adapterVersion < 0x0003) {
    return null;
  }

  const minBaudRate = getMinBaudRate(
    config.adapterType,
    config.adapterVersion
  );
  if (
    config.currentBaudRate !== 115200 &&
    (config.currentBaudRate < minBaudRate ||
      config.currentBaudRate > MAX_BAUD_RATE)
  ) {
    return null;
  }

  if (config.interByteTime < 0 || config.interByteTime > 255) {
    return null;
  }

  const telType = config.adapterVersion < 0x0008 ? 0x00 : 0x02;
  const resultArray = new Uint8Array(
    length + (telType === 0x00 ? 9 : 11)
  );
  resultArray[0] = 0x00;
  resultArray[1] = telType;

  let baudHalf = 0;
  let flags1 = KLINEF1_NO_ECHO;
  if (config.currentBaudRate !== 115200) {
    baudHalf = config.currentBaudRate >> 1;
    if (!setDtr) {
      flags1 |= KLINEF1_USE_LLINE;
    }
    flags1 |= calcParityFlags(config.currentParity);
    if (config.fastInit) {
      flags1 |= KLINEF1_FAST_INIT;
    }
  }

  let interByteTime = config.interByteTime;
  let flags2 = 0x00;
  if (config.currentProtocol === Protocols.Kwp) {
    flags2 |= KLINEF2_KWP1281_DETECT;
    if (
      interByteTime > 0 &&
      config.adapterType >= 0x0002 &&
      config.adapterVersion < 0x000b
    ) {
      interByteTime = 0;
    }
  }

  resultArray[2] = (baudHalf >> 8) & 0xff;
  resultArray[3] = baudHalf & 0xff;
  resultArray[4] = flags1;

  if (telType === 0x00) {
    resultArray[5] = interByteTime & 0xff;
    resultArray[6] = (length >> 8) & 0xff;
    resultArray[7] = length & 0xff;
    resultArray.set(sendData.subarray(0, length), 8);
  } else {
    resultArray[5] = flags2;
    resultArray[6] = interByteTime & 0xff;
    resultArray[7] = KWP1281_TIMEOUT;
    resultArray[8] = (length >> 8) & 0xff;
    resultArray[9] = length & 0xff;
    resultArray.set(sendData.subarray(0, length), 10);
  }

  resultArray[resultArray.length - 1] = calcChecksumBmwFast(
    resultArray,
    0,
    resultArray.length - 1
  );

  return resultArray;
}

export function createPulseTelegram(
  dataBits: bigint,
  length: number,
  pulseWidth: number,
  setDtr: boolean,
  bothLines: boolean,
  autoKeyByteDelay: number,
  config: PulseTelegramConfig
): { telegram: Uint8Array | null; convertBaudResponse: boolean } {
  if (config.adapterType < 0x0002 || config.adapterVersion < 0x0007) {
    return { telegram: null, convertBaudResponse: false };
  }

  const minBaudRate = getMinBaudRate(
    config.adapterType,
    config.adapterVersion
  );
  if (
    config.currentBaudRate !== BAUD_AUTO &&
    (config.currentBaudRate < minBaudRate ||
      config.currentBaudRate > MAX_BAUD_RATE)
  ) {
    return { telegram: null, convertBaudResponse: false };
  }

  if (length < 0 || length > 64) {
    return { telegram: null, convertBaudResponse: false };
  }

  if (pulseWidth < 0 || pulseWidth > 255) {
    return { telegram: null, convertBaudResponse: false };
  }

  const convertBaudResponse =
    config.adapterVersion < 0x0008 && config.currentBaudRate === BAUD_AUTO;

  const telType = config.adapterVersion < 0x0008 ? 0x00 : 0x02;
  const dataBytes = (length + 7) >> 3;
  const resultArray = new Uint8Array(
    dataBytes + 2 + 1 + (telType === 0x00 ? 9 : 11)
  );
  resultArray[0] = 0x00;
  resultArray[1] = telType;

  const baudHalf = config.currentBaudRate >> 1;
  let flags1 = KLINEF1_SEND_PULSE | KLINEF1_NO_ECHO;
  if (bothLines) {
    flags1 |= KLINEF1_USE_LLINE | KLINEF1_USE_KLINE;
  } else if (!setDtr) {
    flags1 |= KLINEF1_USE_LLINE;
  }
  flags1 |= calcParityFlags(config.currentParity);

  let flags2 = 0x00;
  if (config.currentProtocol === Protocols.Kwp) {
    flags2 |= KLINEF2_KWP1281_DETECT;
  }

  resultArray[2] = (baudHalf >> 8) & 0xff;
  resultArray[3] = baudHalf & 0xff;
  resultArray[4] = flags1;

  if (telType === 0x00) {
    resultArray[5] = config.interByteTime & 0xff;
    resultArray[6] = 0x00;
    resultArray[7] = (dataBytes + 2 + 1) & 0xff;
    resultArray[8] = pulseWidth & 0xff;
    resultArray[9] = length & 0xff;
    for (let i = 0; i < dataBytes; i += 1) {
      resultArray[10 + i] = Number((dataBits >> BigInt(i << 3)) & 0xffn);
    }
  } else {
    resultArray[5] = flags2;
    resultArray[6] = config.interByteTime & 0xff;
    resultArray[7] = KWP1281_TIMEOUT;
    resultArray[8] = 0x00;
    resultArray[9] = (dataBytes + 2 + 1) & 0xff;
    resultArray[10] = pulseWidth & 0xff;
    resultArray[11] = length & 0xff;
    for (let i = 0; i < dataBytes; i += 1) {
      resultArray[12 + i] = Number((dataBits >> BigInt(i << 3)) & 0xffn);
    }
  }

  resultArray[resultArray.length - 2] = autoKeyByteDelay & 0xff;
  resultArray[resultArray.length - 1] = calcChecksumBmwFast(
    resultArray,
    0,
    resultArray.length - 1
  );

  return { telegram: resultArray, convertBaudResponse };
}

export function createCanTelegram(
  sendData: Uint8Array,
  length: number,
  config: CanTelegramConfig
): Uint8Array | null {
  if (config.adapterType < 0x0002 || config.adapterVersion < 0x0008) {
    return null;
  }

  let protocol: number;
  switch (config.currentProtocol) {
    case Protocols.Tp20:
      protocol = CAN_PROT_TP20;
      break;
    case Protocols.IsoTp:
      if (config.adapterVersion < 0x0009) {
        return null;
      }
      if (config.canTxId < 0 || config.canRxId < 0) {
        return null;
      }
      protocol = CAN_PROT_ISOTP;
      break;
    default:
      return null;
  }

  if (config.currentBaudRate !== 500000 && config.currentBaudRate !== 100000) {
    return null;
  }

  const telType = config.adapterVersion < 0x0009 ? 0x01 : 0x03;
  const resultArray = new Uint8Array(
    length + (telType === 0x01 ? 11 : 14)
  );
  resultArray[0] = 0x00;
  resultArray[1] = telType;

  let flags = CANF_NO_ECHO | CANF_CAN_ERROR;
  if ((config.canFlags & CanFlags.BusCheck) !== 0) {
    flags |= CANF_CONNECT_CHECK;
  }
  if ((config.canFlags & CanFlags.Disconnect) !== 0) {
    flags |= CANF_DISCONNECT;
  }

  resultArray[2] = protocol;
  resultArray[3] = config.currentBaudRate === 500000 ? 0x01 : 0x09;
  resultArray[4] = flags;

  if (protocol === CAN_PROT_TP20) {
    resultArray[5] = 0x0f;
    resultArray[6] = 0x0a;
    resultArray[7] = 1000 / 10;
  } else {
    resultArray[5] = 0x00;
    resultArray[6] = 0x00;
    resultArray[7] = (config.canTxId >> 8) & 0xff;
    resultArray[8] = config.canTxId & 0xff;
    resultArray[9] = (config.canRxId >> 8) & 0xff;
    resultArray[10] = config.canRxId & 0xff;
  }

  if (telType === 0x01) {
    resultArray[8] = (length >> 8) & 0xff;
    resultArray[9] = length & 0xff;
    resultArray.set(sendData.subarray(0, length), 10);
  } else {
    resultArray[11] = (length >> 8) & 0xff;
    resultArray[12] = length & 0xff;
    resultArray.set(sendData.subarray(0, length), 13);
  }

  resultArray[resultArray.length - 1] = calcChecksumBmwFast(
    resultArray,
    0,
    resultArray.length - 1
  );

  return resultArray;
}
