# FGR_KW.PRG

## General

|  |  |
| --- | --- |
| File | FGR_KW.PRG |
| Type | PRG |
| Jobs | 14 |
| Tables | 7 |
| Origin | BMW TI-435 Crichton N.D. |
| Revision | 1.0 |
| Author | BMW TI-435 Crichton N.D., BMW TI-433 Winkler |
| ECU Comment | Tempomat KWP2000* |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | FGR_KW |  |  |
| ORIGIN | string | BMW TI-435 Crichton N.D. |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-435 Crichton N.D., BMW TI-433 Winkler |  |  |
| COMMENT | string | Tempomat KWP2000* |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer FGR_KW

_No arguments._

### DIAGNOSE_START

Starten der Diagnose FGR_KW

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose FGR_KW

_No arguments._

### DIAGNOSE_ERHALTEN

Erhalten der Diagnose FGR_KW

_No arguments._

### IDENT

Identdaten FGR_KW

_No arguments._

### STATUS_LESEN

Auslesen Status FGR_KW mit ReadDataByLocalIdentifier 0x01

_No arguments._

### FS_LESEN

Lesen Fehlerspeicher FGR_KW mit ReadDataByLocalIdentifier 0x04

_No arguments._

### STATUS_LESEN_EINGANG

Auslesen Eingangsstatus FGR_KW mit ReadDataByLocalIdentifier 0x05

_No arguments._

### STATUS_LESEN_AUSGANG

Auslesen Ausgangsstatus FGR_KW mit ReadDataByLocalIdentifier 0x06

_No arguments._

### STATUS_LESEN_GESCHWINDIGKEIT

Auslesen Geschwindigkeitsinformationen FGR_KW mit ReadDataByLocalIdentifier 0x07

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers FGR_KW

_No arguments._

### SG_UNLOCK_0

Security Access 'Third Party'

_No arguments._

### SG_UNLOCK_1

Security Access 'Dealer'

_No arguments._

## Tables

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
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
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
| ?8A? | ERROR_LARGE_UIF_FOUND |
| ?8B? | ERROR_SMALL_UIF_FOUND |
| ?8C? | ERROR_NO_FREE_UIF |
| ?8D? | ERROR_MAX_UIF |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Pegel Spannungsausgang: Niedrig, hoch erwartet |
| 0x02 | Pegel Ventilausgang: Niedrig, hoch erwartet |
| 0x03 | Pegel Pumpenausgang: Niedrig, hoch erwartet |
| 0x04 | Steuergeraet: Interner Fehler |
| 0x05 | Pegel Spannungsausgang: Hoch, niedrig erwartet |
| 0x06 | Pegel Ventilausgang: Hoch, niedrig erwartet |
| 0x07 | Pegel Pumpenausgang: Hoch, niedrig erwartet |
| 0x08 | Geschwindigkeitseingabe: Eingabefehler |
| 0x09 | Fehlerspeicher: Lesefehler |
| 0xFF | unbekannter Fehlerort |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 |
| --- | --- | --- | --- | --- |
| 0x00 | 0xFF | 0x00 | 0xFF | 0x01 |
| 0x09 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Permanenter Fehler |
| 0x01 | Sporadischer Fehler |
| 0xFF | -- |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | 0x05 | 0x01 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x01 | Aktionen seit letztem Spannungsfehler | Aktionen |
| 0x02 | Aktionen seit letztem Ventilfehler | Aktionen |
| 0x03 | Aktionen seit letztem Pumpenfehler | Aktionen |
| 0x04 | Aktionen seit letztem Geschwindigkeitseingabefehler | Aktionen |
| 0x05 | Initialwert nach RESET | LAG-Nr. |
| 0x07 | Sollgeschwindigkeit > V_max | LAG-Nr. |
| 0x08 | Keine Vorgabe | LAG-Nr. |
| 0x0A | Relais-Ausgang niedrig | LAG-Nr. |
| 0x0B | Ventilkontrolle niedrig waehrend Benutzung | LAG-Nr. |
| 0x0C | Pumpenkontrolle niedrig waehrend Benutzung | LAG-Nr. |
| 0x0D | Istgeschwindigkeit > V_max | LAG-Nr. |
| 0x0E | Istgeschwindigkeit < V_min | LAG-Nr. |
| 0x0F | Beschleunigungsgrenze ueberschritten | LAG-Nr. |
| 0x10 | Pumpenkontrolle niedrig beim Einschalten | LAG-Nr. |
| 0x11 | Ventilkontrolle niedrig beim Einschalten | LAG-Nr. |
| 0x12 | Relaisausgang niedrig beim Einschalten | LAG-Nr. |
| 0x13 | Relaisausgang hoch waehrend Nichtbenutzung | LAG-Nr. |
| 0x14 | Brems- oder Kupplungsschalter offen | LAG-Nr. |
| 0x15 | Bremslicht an | LAG-Nr. |
| 0x16 | Fehler in redundanter V_min-Hardware | LAG-Nr. |
| 0x17 | Masseschluss Relais | LAG-Nr. |
| 0x18 | Differenz Soll-Ist-Geschwindigkeit zu gross | LAG-Nr. |
| 0x19 | Unterschiedliche Sollgeschwindigkeiten | LAG-Nr. |
| 0x1A | Relaisausgang hoch beim Ausschalten | LAG-Nr. |
| 0x1C | Fehler in redundanter Ventilkontrolle | LAG-Nr. |
| 0x1D | Fehler in redundanter Pumpenkontrolle | LAG-Nr. |
| 0x1F | Betaetigung AUS-Schalter | LAG-Nr. |
| 0x20 | Pumpenkontrolle bleibt hoch | LAG-Nr. |
| 0x21 | Ventilkontrolle bleibt hoch | LAG-Nr. |
| 0xFF | Unbekannt | LAG-Nr. |
