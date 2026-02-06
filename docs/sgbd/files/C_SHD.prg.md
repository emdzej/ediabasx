# C_SHD.prg

## General

|  |  |
| --- | --- |
| File | C_SHD.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 3 |
| Origin | BMW TI-431 Lothar Dennert |
| Revision | 1.5 |
| Author | ROVER REE-47 Andrew Mellett, BMW TI-431 Lothar Dennert |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD Schiebehebedach E46/R40 |  |  |
| ORIGIN | string | BMW TI-431 Lothar Dennert |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | ROVER REE-47 Andrew Mellett, BMW TI-431 Lothar Dennert |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer Schiebehebedach E46 automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer SGD E46

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

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

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

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
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
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
| 0xXY | unbekannter Hersteller |

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
