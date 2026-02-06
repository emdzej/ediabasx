# ACM_CTRL.prg

## General

|  |  |
| --- | --- |
| File | ACM_CTRL.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 2 |
| Origin | BMW EE-73 Knöbl |
| Revision | 1.7 |
| Author | BMW EE-73 Knöbl |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Spezial SGBD für die Flashabnahme |  |  |
| ORIGIN | string | BMW EE-73 Knöbl |  |  |
| REVISION | string | 1.7 |  |  |
| AUTHOR | string | BMW EE-73 Knöbl |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.09 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### UIF_GET_SIZE

Ermitteln der Länge des AIFs Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| ECU_ADDRESS | int | Steuergeräteadresse |

### UIF_IDENT_READ

Auslesen des aktuellen AIFs KWP2000: $1a ReadEcuIdentification $86 CurrentUifDataTable Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |

### UIF_MEM_READ

Auslesen des AIF-Speichers KWP2000: $23 ReadMemoryByAddress $hh Address $mm Address $ll Address $07 UIF Memory $nn Size Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |
| AIF_GROESSE | int | AIF Länge |

### FUNC_PHYS_HW_NR_READ

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräte- oder funktionale Adresse Default: $EF (alle SG) |

### ACM_INIT_IDENT

Modus  : Default

_No arguments._

### ACM_SHOW_IDENT

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ECU_ADDR | int | Optional: Steuergeräte Adresse |

### ACM_FORCE_ERROR

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ERR_MODE | int | Fehlermodus 0..15 Default: 0 (AUS) |
| ERR_CNTR | int | Anzahl Durchläufe 0..255, 0 = endlos Default: 0 |
| ERR_WAIT | int | Warteblöcke 0..255 Default: 9 |
| ERR_KILL | int | Störblöcke 0..255 Default: 1 |

### EDIABAS_SEND_JOB

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ECU_ADDR | int | Steuergeräte Adresse |
| ECU_DATA | string | Hex-Bytes Beispiel: 1a80 -> 1a 80 oder: 23,0,0,0,7,0 -> 23 00 00 07 00 oder: 22,2501 -> 22 25 01 |
| ERROR_REPEAT_COUNTER | int | Wiederholungen im Fehlerfall (Default: 2) |

### EDIABAS_WAIT_SEC

Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SECONDS | int | Wartezeit in Sekunden (max. 300 sec) |

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED__SECURITY_ACCESS_REQUESTED |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x40 | ERROR_ECU_DOWNLOAD_NOT_ACCEPTED |
| 0x41 | ERROR_ECU_IMPROPER_DOWNLOAD_TYPE |
| 0x42 | ERROR_ECU_CANNOT_DOWNLOAD_TO_SPECIFIED_ADDRESS |
| 0x43 | ERROR_ECU_CANNOT_DOWNLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x50 | ERROR_ECU_UPLOAD_NOT_ACCEPTED |
| 0x51 | ERROR_ECU_IMPROPER_UPLOAD_TYPE |
| 0x52 | ERROR_ECU_CANNOT_UPLOAD_FROM_SPECIFIED_ADDRESS |
| 0x53 | ERROR_ECU_CANNOT_UPLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x71 | ERROR_ECU_TRANSFER_SUSPENDED |
| 0x72 | ERROR_ECU_TRANSFER_ABORTED |
| 0x74 | ERROR_ECU_ILLEGAL_ADDRESS_IN_BLOCK_TRANSFER |
| 0x75 | ERROR_ECU_ILLEGAL_BYTE_COUNT_IN_BLOCK_TRANSFER |
| 0x76 | ERROR_ECU_ILLEGAL_BLOCK_TRANSFER_TYPE |
| 0x77 | ERROR_ECU_BLOCKTRANSFER_DATA_CHECKSUM_ERROR |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIAGNOSTIC_MODE |
| ?00? | OKAY |
| ?02? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?03? | ERROR_ECU_INCORRECT_LEN |
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
| ?41? | ERROR_BAUDRATE |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_DATA_OUT_OF_RANGE |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| ?73? | ERROR_NO_BIN_BUFFER |
| ?74? | ERROR_BIN_BUFFER |
| ?75? | ERROR_DATA_TYPE |
| ?76? | ERROR_CHECKSUM |
| ?80? | ERROR_FLASH_SIGNATURE_CHECK |
| ?81? | ERROR_VIHICLE_IDENTFICATON_NR |
| ?82? | ERROR_PROGRAMMING_DATE |
| ?83? | ERROR_ASSEMBLY_NR |
| ?84? | ERROR_CALIBRATION_DATASET_NR |
| ?85? | ERROR_EXHAUST_REGULATION_OR_TYPE_APPROVAL_NR |
| ?86? | ERROR_REPAIR_SHOP_NR |
| ?87? | ERROR_TESTER_SERIAL_NR |
| ?88? | ERROR_MILAGE |
| ?89? | ERROR_PROGRAMMING_REFERENCE |
| ?8A? | ERROR_NO_FREE_UIF |
| ?8B? | ERROR_MAX_UIF |
| ?8C? | ERROR_SIZE_UIF |
| ?8D? | ERROR_LEVEL |
| ?8E? | ERROR_KEY |
| ?8F? | ERROR_AUTHENTICATION |
| ?90? | ERROR_NO_DREF |
| ?91? | ERROR_CHECK_PECUHN |
| ?92? | ERROR_CHECK_PRGREF |
| ?93? | ERROR_AIF_NR |
| ?94? | ERROR_CHECK_DREF |
| ?95? | ERROR_CHECK_HWREF |
| ?96? | ERROR_CHECK_HWREF |
| ?97? | ERROR_CHECK_PRGREFB |
| ?98? | ERROR_CHECK_VMECUH*NB |
| ?99? | ERROR_CHECK_PRGREFB |
| ?9A? | ERROR_CHECK_VMECUH*N |
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |
