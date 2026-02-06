# MFLR50.prg

## General

|  |  |
| --- | --- |
| File | MFLR50.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 4 |
| Origin | BMW TI-431 Stadlhofer |
| Revision | 1.2 |
| Author | Software-Style M.Rafferty |
| ECU Comment | Version Spec 1.2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Multifunktionslenkrad R50 |  |  |
| ORIGIN | string | BMW TI-431 Stadlhofer |  |  |
| REVISION | string | 1.2 |  |  |
| AUTHOR | string | Software-Style M.Rafferty |  |  |
| COMMENT | string | Version Spec 1.2 |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Read the ECU Identification data

_No arguments._

### IDENT_SCHREIBEN

Write the ECU Ident

| Name | Type | Description |
| --- | --- | --- |
| ID_BMW_NR | string | BMW-Teilenummer BMW Part number 7 character string if BMW format, 9 character string if Rover encoded |
| ID_HW_NR | int | BMW-Hardwarenummer |
| ID_COD_INDEX | int | Codier-Index |
| ID_DIAG_INDEX | int | Diagnose-Index |
| ID_BUS_INDEX | int | Bus-Index |
| ID_DATUM_KW | int | Herstelldatum KW Week of manufacture |
| ID_DATUM_JAHR | int | Herstelldatum Jahr Year of manufacture |
| ID_LIEF_NR | int | Lieferanten-Nummer Supplier code |

### STEUERN_IOSTATES

Force Digital Output States

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente Control name From NAME column in table "Digital" |
| EIN | int | 1 wenn einschalten  0 wenn ausschalten Forcing value: 1=on 0=off |

### STATUS_LESEN

alle Stati des MFL lesen Read all input/outputs

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten Continue Diagnostics - Send ping message

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden End diagnostics

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0xFF | unbekannter Hersteller |

### ROVERPARTPREFIX

| CODE | PREFIX |
| --- | --- |
| 0xA0 | AMR |
| 0xA1 | HHF |
| 0xA2 | JFC |
| 0xA3 | MKC |
| 0xA4 | SCB |
| 0xA5 | SRB |
| 0xA6 | XQC |
| 0xA7 | XQD |
| 0xA8 | XQE |
| 0xA9 | XVD |
| 0xAA | YAC |
| 0xAB | YDB |
| 0xAC | YFC |
| 0xAD | YUB |
| 0xAE | YWC |
| 0xAF | YWQ |
| 0xB0 | EGQ |
| 0xB1 | YIB |
| 0xB2 | YIC |
| 0xB3 | YIE |
| 0xB6 | YUW |
| 0xFF | ??? |

### DIGITAL

| NAME | BYTE | MASK | VALUE | ID_NR |
| --- | --- | --- | --- | --- |
| SEARCH_UP | 3 | 0x01 | 0x01 | 0x00 |
| SEARCH_DOWN | 3 | 0x02 | 0x02 | 0x01 |
| VOLUME_UP | 3 | 0x04 | 0x04 | 0x02 |
| VOLUME_DOWN | 3 | 0x08 | 0x08 | 0x03 |
| MODE | 3 | 0x10 | 0x10 | 0x04 |
| PHONE_SEND_END | 3 | 0x20 | 0x20 | 0x05 |
| SPEED_UP | 3 | 0x40 | 0x40 | 0x06 |
| SPEED_DOWN | 3 | 0x80 | 0x80 | 0x07 |
| CRUISE_ON_OFF | 4 | 0x01 | 0x01 | 0x08 |
| CRUISE_RESUME | 4 | 0x02 | 0x02 | 0x09 |
| ?? | FF | 0x00 | 0xFF | 0xFF |
