# MFL2.prg

## General

|  |  |
| --- | --- |
| File | MFL2.prg |
| Type | PRG |
| Jobs | 5 |
| Tables | 2 |
| Origin | BMW TI-430 Stübinger |
| Revision | 1.03 |
| Author | BMW TP-421 Spoljarec,BMW TI-431 Stadlhofer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MFL2 - Multifunktionslenkrad |  |  |
| ORIGIN | string | BMW TI-430 Stübinger |  |  |
| REVISION | string | 1.03 |  |  |
| AUTHOR | string | BMW TP-421 Spoljarec,BMW TI-431 Stadlhofer |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer MFL E38

_No arguments._

### IDENT

Ident-Daten fuer MFL

_No arguments._

### STATUS_LESEN

alle Stati des MFL lesen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen |
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
| 0xFF | unbekannter Hersteller |
