# TELEFON.prg

## General

|  |  |
| --- | --- |
| File | TELEFON.prg |
| Type | PRG |
| Jobs | 5 |
| Tables | 4 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.40 |
| Author | BMW TP-421 Spoljarec, BMW TP-421 Teepe,BMW TI-433 Gelfert,BMW TI-431 Rochal |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Telefon |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.40 |  |  |
| AUTHOR | string | BMW TP-421 Spoljarec, BMW TP-421 Teepe,BMW TI-433 Gelfert,BMW TI-431 Rochal |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer BMW-TELEFON

_No arguments._

### IDENT

Ident-Daten fuer BMW-TELEFON

_No arguments._

### STATUS_LESEN

verschiedenen Teststati

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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

### TELEFONTYP

| TYP_NR | TYP_NAME |
| --- | --- |
| 0x01 | GSM Phase IV |
| 0x02 | AMPS Phase IV |
| 0x03 | GSM Phase IV Plus |
| 0x04 | GSM Phase V |
| 0x05 | AMPS Phase V |
| 0xFF | unknown |

### TELEFONTYP_2

| TYP_NR | TYP_NAME |
| --- | --- |
| 01 | GSM PHASE IV |
| 02 | AMPS PHASEIV |
| 03 | GSM Phase IV Plus |
| 04 | GSM Phase V |
| 05 | AMPS Phase V |
| FF | unknown |
