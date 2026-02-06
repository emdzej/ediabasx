// @ediabas/protocol-kwp - KWP2000/KWP1281 protocol utilities
// Currently a stub - actual implementation is in interface-serial/kdcan

export const KwpServiceIds = {
  DiagnosticSessionControl: 0x10,
  EcuReset: 0x11,
  ClearDiagnosticInfo: 0x14,
  ReadDtc: 0x18,
  ReadDataById: 0x22,
  ReadMemoryByAddress: 0x23,
  SecurityAccess: 0x27,
  WriteDataById: 0x2e,
  InputOutputControl: 0x30,
  StartRoutine: 0x31,
  RequestDownload: 0x34,
  RequestUpload: 0x35,
  TransferData: 0x36,
  TransferExit: 0x37,
  TesterPresent: 0x3e,
  NegativeResponse: 0x7f
} as const;

export type KwpServiceId =
  (typeof KwpServiceIds)[keyof typeof KwpServiceIds];

export const KwpNegativeResponses = {
  GeneralReject: 0x10,
  ServiceNotSupported: 0x11,
  SubFunctionNotSupported: 0x12,
  IncorrectMessageLength: 0x13,
  ResponseTooLong: 0x14,
  BusyRepeatRequest: 0x21,
  ConditionsNotCorrect: 0x22,
  RequestSequenceError: 0x24,
  NoResponseFromSubnet: 0x25,
  FailurePreventsExecution: 0x26,
  RequestOutOfRange: 0x31,
  SecurityAccessDenied: 0x33,
  InvalidKey: 0x35,
  ExceededNumberOfAttempts: 0x36,
  RequiredTimeDelayNotExpired: 0x37,
  UploadDownloadNotAccepted: 0x70,
  TransferDataSuspended: 0x71,
  GeneralProgrammingFailure: 0x72,
  WrongBlockSequence: 0x73,
  RequestPending: 0x78,
  SubFunctionNotSupportedInSession: 0x7e,
  ServiceNotSupportedInSession: 0x7f
} as const;

export type KwpNegativeResponse =
  (typeof KwpNegativeResponses)[keyof typeof KwpNegativeResponses];

export function isNegativeResponse(data: Uint8Array): boolean {
  return data.length >= 1 && data[0] === KwpServiceIds.NegativeResponse;
}

export function isRequestPending(data: Uint8Array): boolean {
  return (
    data.length >= 3 &&
    data[0] === KwpServiceIds.NegativeResponse &&
    data[2] === KwpNegativeResponses.RequestPending
  );
}

export function getPositiveResponseId(serviceId: number): number {
  return serviceId + 0x40;
}
