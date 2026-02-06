# C_ACC.prg

## General

|  |  |
| --- | --- |
| File | C_ACC.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 3 |
| Origin | BMW TI-433 Spoljarec |
| Revision | 1.0 |
| Author | BMW TI-433 Spoljarec, BMW TP-421 Huber, BMW EE-33 Wanner, Dr. Sauer, Bosch K1/P-AF Fr. Schumacher |
| ECU Comment | mit VS-SG freigegeben ! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Radar-Tempomat ACC |  |  |
| ORIGIN | string | BMW TI-433 Spoljarec |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-433 Spoljarec, BMW TP-421 Huber, BMW EE-33 Wanner, Dr. Sauer, Bosch K1/P-AF Fr. Schumacher |  |  |
| COMMENT | string | mit VS-SG freigegeben ! |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information bzgl. SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer ACC automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### START_MODUS

Starten eines Diagnose-Modus fuer ACC

| Name | Type | Description |
| --- | --- | --- |
| MODUS | string | gewuenschter Diagnose-Modus table DiagModus MODUS MODUS_TEXT |

### STOP_MODUS

Stop des aktuellen Diagnose-Modus fuer ACC

_No arguments._

### IDENT_LESEN

Ident-Daten fuer ACC Modus: Default

_No arguments._

### SOFTWARE_RESET

Ausloesen eines SW_Resets

_No arguments._

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_CHECKSUM

Berechnung und Rueckgabe der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

## Tables

### DIAGMODUS

| NR | MODUS | MODUS_TEXT |
| --- | --- | --- |
| 0x82 | PT | Periodic-Transmission |
| 0x87 | ECU | ECUAdjustmentMode |
| 0xFA | RB | RB-Werk |
| 0x86 | E | Entwicklung |
| 0xXY | -- | unbekannter Diagnose-Modus |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | OKAY |
| 0x00 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED_INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED_SECURITY_ACCESS_REQUESTED |
| 0x35 | ERROR_ECU_INVALID_KEY |
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
| 0x78 | ERROR_ECU_REQ_CORRECTLY_RCVD_RSP_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIGNOSTICMODE |
| 0xF9 | ERROR_ECU_VEHICLE_MANUFACTURER_SPECIFIC |
| 0xFE | ERROR_ECU_SYSTEM_SUPPLIER_SPECIFIC |
| 0xFF | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0xXY | unbekannter Hersteller |
