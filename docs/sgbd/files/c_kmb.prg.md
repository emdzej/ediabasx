# c_kmb.prg

## General

|  |  |
| --- | --- |
| File | c_kmb.prg |
| Type | PRG |
| Jobs | 15 |
| Tables | 3 |
| Origin | BMW TI-433 Mario Spoljarec |
| Revision | 1.19 |
| Author | BMW TI-433 Mario Spoljarec, BMW TI-433 Arnold Pollmann, BMW TI-433 Lothar Dennert |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD I-Kombi E36/E39 |  |  |
| ORIGIN | string | BMW TI-433 Mario Spoljarec |  |  |
| REVISION | string | 1.19 |  |  |
| AUTHOR | string | BMW TI-433 Mario Spoljarec, BMW TI-433 Arnold Pollmann, BMW TI-433 Lothar Dennert |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer Kombi

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Default ident job

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### SOFTWARE_RESET2

Kombi loest selbststaendig einen Reset aus mit Delay fuer 1s fuer BR E52

_No arguments._

### C_ZEIT_RESET

Ruecksetzen des Zeitinspektionsintervall

_No arguments._

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Oel/Weg oder Zeit - Reset |
| ARG2 | string | Oel/Weg oder Zeit - Reset |
| ARG3 | string | Oel/Wegs oder Zeit - Reset |

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_SCHREIBEN

Codierdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_LESEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_CHECKSUM

Berechnung und Speicherung der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_FG_AUFTRAG

Schreiben der 7-stelligen Fahrgestellnummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### C_ZCS_LESEN

Anwenderinfofeld Block 4 auslesen

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x02 | OKAY |
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

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| ZEIT_RESET | 0x04 |
