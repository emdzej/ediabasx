
import { EdiabasErrorCodes } from "@ediabas/core";

export const TrapBitDict: Record<number, number> = {
  [EdiabasErrorCodes.EDIABAS_BIP_0002]: 2,
  [EdiabasErrorCodes.EDIABAS_BIP_0006]: 6,
  [EdiabasErrorCodes.EDIABAS_BIP_0009]: 9,
  [EdiabasErrorCodes.EDIABAS_BIP_0010]: 10,
  [EdiabasErrorCodes.EDIABAS_IFH_0001]: 11,
  [EdiabasErrorCodes.EDIABAS_IFH_0002]: 12,
  [EdiabasErrorCodes.EDIABAS_IFH_0003]: 13,
  [EdiabasErrorCodes.EDIABAS_IFH_0004]: 14,
  [EdiabasErrorCodes.EDIABAS_IFH_0005]: 15,
  [EdiabasErrorCodes.EDIABAS_IFH_0006]: 16,
  [EdiabasErrorCodes.EDIABAS_IFH_0007]: 17,
  [EdiabasErrorCodes.EDIABAS_IFH_0008]: 18,
  [EdiabasErrorCodes.EDIABAS_IFH_0009]: 19,
  [EdiabasErrorCodes.EDIABAS_IFH_0010]: 20,
  [EdiabasErrorCodes.EDIABAS_IFH_0011]: 21,
  [EdiabasErrorCodes.EDIABAS_IFH_0012]: 22,
  [EdiabasErrorCodes.EDIABAS_IFH_0013]: 23,
  [EdiabasErrorCodes.EDIABAS_IFH_0014]: 24,
  [EdiabasErrorCodes.EDIABAS_IFH_0015]: 25,
  [EdiabasErrorCodes.EDIABAS_IFH_0016]: 26,
  // 7.6.0+
  [EdiabasErrorCodes.EDIABAS_BIP_0011]: 8,
  [EdiabasErrorCodes.EDIABAS_IFH_0069]: 28,
  // 7.7.0+
  [EdiabasErrorCodes.EDIABAS_IFH_0074]: 29,
};
