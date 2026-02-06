# C_LSZ.prg

## General

|  |  |
| --- | --- |
| File | C_LSZ.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 2 |
| Origin | BMW TI-433 Lothar Dennert |
| Revision | 1.6 |
| Author | BMW TP-421 Mario Spoljarec, BMW TI-433 Lothar Dennert |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD LSZ E46 |  |  |
| ORIGIN | string | BMW TI-433 Lothar Dennert |  |  |
| REVISION | string | 1.06 |  |  |
| AUTHOR | string | BMW TP-421 Mario Spoljarec, BMW TI-433 Lothar Dennert |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Default ident job

_No arguments._

### DIAGNOSE_ENDE

DIAGNOSE_ENDE job

_No arguments._

### SIA_LESEN

Default SIA_LESEN job

_No arguments._

### C_FG_LESEN

Auslesen der FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben der red. Datenablage mit der FG-Nummer

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

## Tables

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
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0xFF | unbekannter Hersteller |

### JOBRESULT

| SB | SNR | STATUS_TEXT |
| --- | --- | --- |
| 0xA0 |  1  | OKAY |
| 0xA1 |  2  | BUSY |
| 0xA2 |  3  | ERROR_ECU_REJECTED |
| 0xB0 |  4  | ERROR_ECU_PARAMETER |
| 0xB1 |  5  | ERROR_ECU_FUNCTION |
| 0xB2 |  6  | ERROR_ECU_NUMBER |
| 0xFF |  7  | ERROR_ECU_NACK |
| 0x00 |  8  | ERROR_ECU_UNKNOWN_STATUSBYTE |
