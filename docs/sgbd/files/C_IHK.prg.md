# C_IHK.prg

## General

|  |  |
| --- | --- |
| File | C_IHK.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 2 |
| Origin | BMW TI-431 Lothar Dennert |
| Revision | 1.08 |
| Author | BMW TP-421 Mario Spoljarec, BMW TI-431 Lothar Dennert, BMW TI-431 Michael Nau |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD IHKA/IHR E36/E39/E46 |  |  |
| ORIGIN | string | BMW TI-431 Lothar Dennert |  |  |
| REVISION | string | 1.08 |  |  |
| AUTHOR | string | BMW TP-421 Mario Spoljarec, BMW TI-431 Lothar Dennert, BMW TI-431 Michael Nau |  |  |
| COMMENT | string | Verifiziert |  |  |
| PACKAGE | string | 1.10 |  |  |
| SPRACHE | string | @sprache@ |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Kommunikationsparameter

_No arguments._

### IDENT

Identifikation

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

### C_S_LESEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### BUGFIX_AUSSENTEMPERATUR

Behebung für Fehler durch falsches Aussentemperatursignal vom Kombiinstrument Bosch Redesign SW 31 und 32 Die Aussentemperaturabhängige Sollwertaufschaltung in der Klimabetätigung wird unterbunden Job funktioniert nur, wenn er über die Diagnoseschnittstelle d.h. über das Kombi, durchgeführt wird

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
