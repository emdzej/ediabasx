import {
  ADAPTER_VOLTAGE_TIMEOUT_MS,
  EscapeCodeDefault,
  EscapeConfRead,
  EscapeConfWrite,
  EscapeMaskDefault,
  EscapeXor,
  Protocols,
  type Protocol
} from "./constants";
import { calcChecksumBmwFast } from "./checksum";

export type AdapterInfoState = {
  protocol: Protocol;
  adapterType: number;
  adapterVersion: number;
  adapterSerial: Uint8Array | null;
  adapterVoltage: number;
  ignitionStatus: number;
  escapeModeRead: boolean;
  escapeModeWrite: boolean;
  updateAdapterVoltage: boolean;
  lastCommTickMs: number;
  lastVoltageUpdateMs: number;
  reconnectRequired: boolean;
};

export type AdapterInfoIo = {
  sendData: (data: Uint8Array) => void;
  readInBuffer: () => Uint8Array;
  discardInBuffer: () => void;
  readTimeoutOffsetLongMs: number;
  nowMs?: () => number;
};

export type AdapterInfoOptions = {
  forceUpdate?: boolean;
};

export function isAdapterBlacklisted(
  adapterSerial: Uint8Array | null,
  blacklist: readonly Uint8Array[] | null
): boolean {
  if (!adapterSerial || !blacklist) {
    return false;
  }
  return blacklist.some((serial) =>
    serial.length === adapterSerial.length &&
    serial.every((value, index) => value === adapterSerial[index])
  );
}

export function updateAdapterInfo(
  state: AdapterInfoState,
  io: AdapterInfoIo,
  options: AdapterInfoOptions = {}
): boolean {
  const nowMs = io.nowMs ?? (() => Date.now());
  const forceUpdate = options.forceUpdate ?? false;

  let voltageUpdate = false;
  if (!forceUpdate && state.adapterType >= 0) {
    if (state.protocol !== Protocols.Kwp) {
      if (
        state.updateAdapterVoltage &&
        nowMs() - state.lastVoltageUpdateMs > ADAPTER_VOLTAGE_TIMEOUT_MS
      ) {
        voltageUpdate = true;
      }
    }

    if (!voltageUpdate) {
      return true;
    }
  }

  if (!voltageUpdate) {
    state.ignitionStatus = -1;
    state.adapterType = -1;
    state.adapterSerial = null;
  }
  state.adapterVoltage = -1;

  try {
    for (let telType = 0; telType < 5; telType += 1) {
      if (voltageUpdate && telType !== 4) {
        continue;
      }

      let respLen = 0;
      let testTel: Uint8Array | null = null;
      switch (telType) {
        case 0:
          respLen = 6;
          testTel = Uint8Array.from([0x82, 0xf1, 0xf1, 0xfe, 0xfe, 0x00]);
          break;
        case 1: {
          respLen = 8;
          let modeValue = 0x00;
          if (state.escapeModeRead) {
            modeValue |= EscapeConfRead;
          }
          if (state.escapeModeWrite) {
            modeValue |= EscapeConfWrite;
          }
          testTel = Uint8Array.from([
            0x84,
            0xf1,
            0xf1,
            0x06,
            (modeValue ^ EscapeXor) & 0xff,
            (EscapeCodeDefault ^ EscapeXor) & 0xff,
            (EscapeMaskDefault ^ EscapeXor) & 0xff,
            0x00
          ]);
          break;
        }
        case 2:
          respLen = 9;
          testTel = Uint8Array.from([0x82, 0xf1, 0xf1, 0xfd, 0xfd, 0x00]);
          break;
        case 3:
          if (state.adapterType < 0x0002) {
            break;
          }
          respLen = 13;
          testTel = Uint8Array.from([0x82, 0xf1, 0xf1, 0xfb, 0xfb, 0x00]);
          break;
        case 4:
          if (state.adapterType < 0x0002) {
            break;
          }
          respLen = 6;
          testTel = Uint8Array.from([0x82, 0xf1, 0xf1, 0xfc, 0xfc, 0x00]);
          break;
        default:
          break;
      }

      if (!testTel) {
        break;
      }

      testTel[testTel.length - 1] = calcChecksumBmwFast(
        testTel,
        0,
        testTel.length - 1
      );

      io.discardInBuffer();
      io.sendData(testTel);
      state.lastCommTickMs = nowMs();

      const responseList: number[] = [];
      let startTime = nowMs();

      for (;;) {
        const newList = io.readInBuffer();
        if (newList.length > 0) {
          responseList.push(...newList);
          startTime = nowMs();
        }

        if (responseList.length >= testTel.length + respLen) {
          const validEcho = testTel.every(
            (value, index) => responseList[index] === value
          );
          if (!validEcho) {
            return false;
          }

          if (
            calcChecksumBmwFast(
              Uint8Array.from(responseList),
              testTel.length,
              respLen - 1
            ) !== responseList[testTel.length + respLen - 1]
          ) {
            return false;
          }

          switch (telType) {
            case 0:
              state.ignitionStatus = responseList[testTel.length + 4];
              break;
            case 1: {
              const modeValue = responseList[testTel.length + 4] ^ EscapeXor;
              state.escapeModeRead = (modeValue & EscapeConfRead) !== 0x00;
              state.escapeModeWrite = (modeValue & EscapeConfWrite) !== 0x00;
              break;
            }
            case 2:
              state.adapterType =
                responseList[testTel.length + 5] +
                (responseList[testTel.length + 4] << 8);
              state.adapterVersion =
                responseList[testTel.length + 7] +
                (responseList[testTel.length + 6] << 8);
              break;
            case 3:
              state.adapterSerial = Uint8Array.from(
                responseList.slice(testTel.length + 4, testTel.length + 12)
              );
              break;
            case 4:
              state.adapterVoltage = responseList[testTel.length + 4];
              state.lastVoltageUpdateMs = nowMs();
              break;
            default:
              break;
          }

          break;
        }

        if (nowMs() - startTime > io.readTimeoutOffsetLongMs) {
          let failure = true;
          if (responseList.length >= testTel.length) {
            const validEcho = testTel.every(
              (value, index) => responseList[index] === value
            );
            if (validEcho) {
              switch (telType) {
                case 0:
                  state.adapterType = 0;
                  break;
                case 1:
                  state.escapeModeRead = false;
                  state.escapeModeWrite = false;
                  failure = false;
                  break;
                default:
                  break;
              }
            }
          }

          if (failure) {
            return false;
          }
          break;
        }
      }
    }
  } catch (error) {
    state.reconnectRequired = true;
    return false;
  }

  return true;
}
