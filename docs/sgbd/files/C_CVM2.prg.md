# C_CVM2.prg

## General

|  |  |
| --- | --- |
| File | C_CVM2.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 2 |
| Origin | BMW TI-431 Michael Nau |
| Revision | 1.06 |
| Author | BMW TI-433 Mario Spoljarec, BMW TI-431 Lothar Dennert, BMW TI-431 Michael Nau |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C_SGBD CVM2 |  |  |
| ORIGIN | string | BMW TI-431 Michael Nau |  |  |
| REVISION | string | 1.06 |  |  |
| AUTHOR | string | BMW TI-433 Mario Spoljarec, BMW TI-431 Lothar Dennert, BMW TI-431 Michael Nau |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer Grundmodul V automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer CVM 2

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

### STEUERGERAETE_RESET

Steuergeraet in RESET-Zustand versetzen

_No arguments._

### C_S_LESEN

Speicher schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | EEPROM Daten |

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | BUSY |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNKTION |
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
| 0xXY | unbekannter Hersteller |
