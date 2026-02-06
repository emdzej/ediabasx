# 04BMSC2.prg

## General

|  |  |
| --- | --- |
| File | 04BMSC2.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 3 |
| Origin | Softing Roman Marziw |
| Revision | 1.7 |
| Author | Softing Roman Marziw, Hays/BMW EA-413 Thomas Klöker |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | BMSC2 |  |  |
| ORIGIN | string | Softing AG |  |  |
| REVISION | string | 1.6 |  |  |
| AUTHOR | string | Softing AG, Roman Marziw |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### Initialisierung

Dieser Job wird vom EDIABAS automatisch beim ersten Zugriff auf eine SGBD aufgerufen. Bei weiteren Zugriffen auf dieselbe SGBD wird dieser Job nicht mehr aufgerufen. Ausnahme: nach einem EDIABAS-Fehler wird dieser Auftrag erneut aufgerufen In der INITIALISIERUNG werden alle Funktionen aufgerufen, die nur einmal, vor der Kommunikation mit dem SG notwendig sind, z.B. -  Verbindung zum Interface aufbauen -  Setzen des Wiederholungszaehlers -  Setzen der Kommunikationsparameter 

_No arguments._

### NEU_REIZEN

Dieser Job wird immer dann aufgerufen, wenn das SG resettet wurde, die Steuergeraetekommunikation aber weitergefuehrt werden soll ohne dass das EDIC einen Timeout-Fehler meldet. Der Job bewirkt, dass das EDIC die Kommunikation abbricht und wieder neu aufsetzt (wie im JOB Initi- alisierung.

_No arguments._

### Ende

Dieser Job wird vom EDIABAS automatisch bei einem Wechsel der SGBD aufgerufen. Job dient der Beendigung der KWP2000 Kommunikation

_No arguments._

### INFO

Information SGBD

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

Job Zulieferer Infofeld lesen

_No arguments._

### ZIF_BACKUP

Job ZIF_BACKUP

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | Nummer des zu lesenden AIF's >=1. 0 bedeutet aktuelles AIF, auf das ein freies AIF folgt |

### AIF_SCHREIBEN

Schreiben des Anwender-Info-Feldes nach einer Programmierung

| Name | Type | Description |
| --- | --- | --- |
| AIF_FG_NR | string | Fahrgestellnummer |
| AIF_DATUM | string | BMW-Fertigungsdatum |
| AIF_SW_NR | string | Softwarenummer |
| AIF_AENDERUNGS_INDEX | string | Aenderungsindex |
| AIF_BEHOERDEN_NR | long | Behoerdennummer |
| AIF_ZB_NR | long | ZusBaunummer |
| AIF_SERIEN_NR | string | Seriennummer (Programmiergeraet) |
| AIF_HAENDLER_NR | int | Haendlernummer |
| AIF_KM | long | km-Stand |
| AIF_PROG_NR | string | Programmstandsnummer |

### START_PROGRAMMING_SESSION

Status

| Name | Type | Description |
| --- | --- | --- |
| PROGRAMMING_MODE | long | PROGRAMMING_MODE 85 = ProgProg, 88 = DatProg |

### START_DIAGNOSTIC_SESSION

Status

| Name | Type | Description |
| --- | --- | --- |
| DIAGNOSTIC_MODE | long | DIAGNOSTIC_MODE 84 = EOLSSM, 87 =ECUAdjustmentMode |

### STOP_DIAGNOSTIC_SESSION

Status

_No arguments._

### STATUS_LESEN

Status

_No arguments._

### FLASH_LOESCHEN

Flash  - Zellen loeschen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten: enthalten Adressinfo |

### FLASH_SCHREIBEN_ADRESSE

Vorbereitung fuer Flash schreiben (RequestDownload)

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten: enthalten Adressinfo |

### FLASH_SCHREIBEN

Beliebige Flash Zellen beschreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### FLASH_LESEN

Job Flash lesen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LESEN_ADR | long | Adresse des ersten zu lesenden Bytes |
| FLASH_LESEN_ANZAHL | int | Anzahl der zu lesenden Bytes |

### FLASH_SCHREIBEN_ENDE

Programmiersitzung schliessen

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

| Name | Type | Description |
| --- | --- | --- |
| ACCESS_MODE | int | fuer die Uebergabe des Access-Modes 0x01, 0x03 oder 0x05 |

### IDENT

Liest Identifikationsdaten aus dem Steuergeraet aus

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### POWER_DOWN_MODE

Nachlaufzyklus initiieren nichtfluechtige Daten werden ins EEPROM geschrieben

_No arguments._

### UPROG_LESEN

Programmierspannung auslesen

_No arguments._

### LOESCH_DAUER_LESEN

Loeschdauer aus SG auslesen

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### FS_QUICK_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus

| Name | Type | Description |
| --- | --- | --- |
| F_VERSION_STATUS | int | gewaehlter StatusOfDTC (0/1) |

### ECU_RESET

PowerOn-Reset per Software

_No arguments._

### ECU_RESET_STATUS

Abfrage der letzten Reset-Ursache

_No arguments._

### ADAPTION_LESEN_SETZEN

Status

| Name | Type | Description |
| --- | --- | --- |
| IOCP_ADAPTION | int | Adaption lesen = 0x09, selektiv setzen = 0x04 |
| CS1_ADAPTION | int | Adaption Auswahlbyte1 |
| CS2_ADAPTION | int | Adaption Auswahlbyte2 |

### IO_STATUS_VORGEBEN

Status

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_IO_STATUS | int |  |
| IOCP_IO_STATUS | int |  |
| CS1_IO_STATUS | int | IO_STATUS Auswahlbyte1 |
| CS2_IO_STATUS | int | IO_STATUS Auswahlbyte2 |

### PARK_POS_LL_STEPPER

Status

_No arguments._

### SONDEN_SPANNUNG_LESEN

Auslesen der Sondenspannung aus Messwerteblock 1

_No arguments._

## Tables

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
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE |
| 0x41 | Megamos |
| 0x42 | TRW |
| 0x43 | Wabco |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0xFF | unbekannter Hersteller |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED__SECURITY_ACCESS_REQUESTED |
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
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIAGNOSTIC_MODE |
| ?00? | OKAY |
| ?01? | BUSY |
| ?02? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?10? | ERROR_F_CODE |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0105 | Umgebungsdrucksensor |
| 0x0110 | Ansauglufttemperaturfühler |
| 0x0115 | Motortemperaturfühler |
| 0x0120 | Drosselklappenpotentiometer |
| 0x0121 | schnelle Drosselklappenadaption |
| 0x0130 | Lambdasonde |
| 0x0135 | Lambdasondenheizung |
| 0x0201 | Einspritzventil |
| 0x0230 | Elektrische Kraftstoffpumpe |
| 0x0335 | KW-Signal |
| 0x0412 | Sekundärluftventil |
| 0x0443 | Tankentlüftungsventil |
| 0x0480 | Elektrischer Lüfter |
| 0x0500 | Geschwindigkeitssignal |
| 0x0505 | Leerlaufregler |
| 0x0560 | Ubatt-Signal |
| 0x0561 | Wackelkontakt |
| 0x0601 | E2-Emulation |
| 0x0603 | Steuergerätetest (SGS) |
| 0x0608 | UEXT Spannungsversorgung DKP |
| 0x0655 | Übertemperatur LED |
| 0x1510 | Elektrischer Lüfter |
| 0x1600 | Steuergerätetest (SGS) |
| 0x9997 | schnelle Drosselklappenadaption |
| 0x9999 | Übertemperatur LED |
| 0x???? | unbekannter Fehler |
