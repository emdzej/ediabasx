# FL40_O.PRG

## General

|  |  |
| --- | --- |
| File | FL40_O.PRG |
| Type | PRG |
| Jobs | 32 |
| Tables | 1 |
| Origin | BMW TP-421 Weber |
| Revision | 0.40 |
| Author | BMW TP-421 Weber |
| ECU Comment | Master - Datei fuer Flashprog. |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME 7.X M62  |  |  |
| ORIGIN | string | BMW TP-421 Weber |  |  |
| REVISION | string | 0.40 |  |  |
| AUTHOR | string | BMW TP-421 Weber |  |  |
| COMMENT | string | Master - Datei fuer Flashprog. |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### SET_BAUDRATE

Setzen der Baudrate

| Name | Type | Description |
| --- | --- | --- |
| INDEX_TAB_BAUDRATE | int | Index in der Tabelle der Baudraten |

### SET_COMMUNICATIONPARS

Setzen der Kommunicationsparameter fuer FlashPro

| Name | Type | Description |
| --- | --- | --- |
| WHAT | int | 0: Reset to default, 1: Parameter fuer FlashPro |
| INDEX_TAB_BAUDRATE | int | Index in der Tabelle der Baudraten |

### EDIC_RESET

EDIC-Reset

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### INFO

Information SGBD

_No arguments._

### UPROG_EIN

Programmierspannung einschalten

_No arguments._

### UPROG_AUS

Programmierspannung ausschalten

_No arguments._

### BLOCKLAENGE_MAX

maximale Blocklaenge

_No arguments._

### DATEN_REFERENZ

Job DATEN-Referenz

_No arguments._

### HW_REFERENZ

Job HW-Referenz

_No arguments._

### ZIF

Job ZIF

_No arguments._

### ZIF_BACKUP

Job ZIF_BACKUP

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### GET_CURRAIFADR

ermittelt die Adresse des Momentan gültigen AIF-Eintrags

_No arguments._

### AIF_SCHREIBEN

ermittelt die Adresse des Momentan gültigen AIF-Eintrags

| Name | Type | Description |
| --- | --- | --- |
| FAHRGESTELLNR | string |  |
| BMW_FERTIGUNGSDAT | string |  |
| BMW_SWNR | string |  |
| BMW_TYPPRUEFNR | long |  |
| BMW_ZBNR | long |  |
| PRG_GERAET_SER_NR | string |  |
| WERKSCODE | int |  |
| KM | int |  |
| PRG_STANDSNR | string |  |

### FLASH_LESEN

Beliebige FLASH - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low HEX |
| FLASH_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### START_DIAGNOSTIC_SESSION

Status

_No arguments._

### FLASH_PROG_STATUS

Status

_No arguments._

### FLASH_LOESCHEN

Flash  - Zellen loeschen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LOESCHEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |

### FLASH_SCHREIBEN_ADRESSE

Beliebige Flash Zellen mit 02 beschreiben

| Name | Type | Description |
| --- | --- | --- |
| FLASH_SCHREIBEN_ADRESSE_ANFANG | long | Uebergabeparameter, Startadresse High-Middle-Low und Daten |
| FLASH_SCHREIBEN_ADRESSE_ENDE | long | Uebergabeparameter, Endadresse High-Middle-Low und Daten |

### FLASH_SCHREIBEN

Beliebige Flash Zellen  beschreiben

| Name | Type | Description |
| --- | --- | --- |
| FLASH_SCHREIBEN_DATEN | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### FLASH_SCHREIBEN_ENDE

_No description._

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### IDENT

Ident-Daten fuer DME

_No arguments._

### FS_LESEN_STATUS

Auslesen des Fehlerspeichers

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### WECHSELCODE_SYNC_DME

Wechselcodesynchronisation EWS 3 - DME anstossen

_No arguments._

### STATUS_SYNC_MODE

_No description._

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0X00 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0X10 | ERROR_ECU_GENERAL_REJECT |
| 0X11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0X12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED_INVALID_FORMAT |
| 0X21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0X22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0X23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0X31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0X33 | ERROR_ECU_SECURITY_ACCESS_DENIED_SECURITY_ACCESS_REQUESTED |
| 0X35 | ERROR_ECU_INVALID_KEY |
| 0X36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0X37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0X40 | ERROR_ECU_DOWNLOAD_NOT_ACCEPTED |
| 0X41 | ERROR_ECU_IMPROPER_DOWNLOAD_TYPE |
| 0X42 | ERROR_ECU_CANNOT_DOWNLOAD_TO_SPECIFIED_ADDRESS |
| 0X43 | ERROR_ECU_CANNOT_DOWNLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0X50 | ERROR_ECU_UPLOAD_NOT_ACCEPTED |
| 0X51 | ERROR_ECU_IMPROPER_UPLOAD_TYPE |
| 0X52 | ERROR_ECU_CANNOT_UPLOAD_FROM_SPECIFIED_ADDRESS |
| 0X53 | ERROR_ECU_CANNOT_UPLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0X71 | ERROR_ECU_TRANSFER_SUSPENDED |
| 0X72 | ERROR_ECU_TRANSFER_ABORTED |
| 0X74 | ERROR_ECU_ILLEGAL_ADDRESS_IN_BLOCK_TRANSFER |
| 0X75 | ERROR_ECU_ILLEGAL_BYTE_COUNT_IN_BLOCK_TRANSFER |
| 0X76 | ERROR_ECU_ILLEGAL_BLOCK_TRANSFER_TYPE |
| 0X77 | ERROR_ECU_BLOCKTRANSFER_DATA_CHECKSUM_ERROR |
| 0X78 | ERROR_ECU_REQ_CORRECTLY_RCVD_RSP_PENDING |
| 0X79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0X80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIGNOSTICMODE |
| 0XF9 | ERROR_ECU_VEHICLE_MANUFACTURER_SPECIFIC |
| 0XFE | ERROR_ECU_SYSTEM_SUPPLIER_SPECIFIC |
| 0XFF | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |
