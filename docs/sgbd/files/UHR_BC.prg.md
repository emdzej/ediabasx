# UHR_BC.prg

## General

|  |  |
| --- | --- |
| File | UHR_BC.prg |
| Type | PRG |
| Jobs | 7 |
| Tables | 2 |
| Origin | BMW TP-421 Spoljarec |
| Revision | 1.5 |
| Author | BMW TP-421 Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Uhr und Bordcomputer E36/5 E36/7 |  |  |
| ORIGIN | string | BMW TP-421 Spoljarec |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | BMW TP-421 Spoljarec |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer UHRBC

_No arguments._

### IDENT

Ident-Daten fuer UhrBC

_No arguments._

### COD_LESEN

Auslesen der BC-Codierung

_No arguments._

### STATUS_LESEN

alle analogen Stati des Uhr-BC 5 lesen

_No arguments._

### RESET_UHR_BC

power on Reset Uhr-BC

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xB0 | ERROR_ECU_PARAMETER |
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
