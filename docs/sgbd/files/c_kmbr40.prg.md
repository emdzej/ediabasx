# c_kmbr40.prg

## General

|  |  |
| --- | --- |
| File | c_kmbr40.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 3 |
| Origin | EE-62 D.Gamble |
| Revision | 1.2 |
| Author | ROVER REE-47 Andrew Mellett, EE-62 D.Gamble |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD R40 Instrument Pack |  |  |
| ORIGIN | string | EE-62 D.Gamble |  |  |
| REVISION | string | 1.02 |  |  |
| AUTHOR | string | ROVER REE-47 Andrew Mellett, EE-62 D.Gamble |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | english |  |  |

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

### MILEAGE_RESET

Diagnose beenden

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### C_ZEIT_RESET

Ruecksetzen des Zeitinspektionsintervall

_No arguments._

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

### ROVERPARTNUMPREFIX

| ROVER_NR | PREFIX |
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
| 0xXY | ??? |
