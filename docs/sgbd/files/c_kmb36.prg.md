# c_kmb36.prg

## General

|  |  |
| --- | --- |
| File | c_kmb36.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 2 |
| Origin | BMW TI-431 Michael Nau |
| Revision | 0.04 |
| Author | BMW TI-431 Lothar Dennert, Michael Nau |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD fuer Kombi E36 DSII |  |  |
| ORIGIN | string | BMW TI-431 Michael Nau |  |  |
| REVISION | string | 0.04 |  |  |
| AUTHOR | string | BMW TI-431 Lothar Dennert, Michael Nau |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | @sprache@ |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### IDENT

Identifikation

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### SG_RESET

Beenden der Diagnose

_No arguments._

### C_FG_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### C_FG_LESEN_2

Auslesen der Fahrgestellnummer

_No arguments._

### C_FG_AUFTRAG

Schreiben der 7-stelligen Fahrgestellnummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (7-stellig) |

### C_FG_AUFTRAG_2

Schreiben der 7-stelligen Fahrgestellnummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (7-stellig) |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_LESEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_CHECKSUM

Berechnung und Speicherung der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_ZCS_LESEN

Anwenderinfofeld Wortadr. 34-3D auslesen

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x09 | OKAY |
| 0x0c | OKAY |
| 0x0d | OKAY |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
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
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0xFF | unbekannter Hersteller |
