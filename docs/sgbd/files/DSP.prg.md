# DSP.prg

## General

|  |  |
| --- | --- |
| File | DSP.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW TP-421 Spoljarec |
| Revision | 1.19 |
| Author | BMW TP-421 Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DSP-Booster E38, E39 |  |  |
| ORIGIN | string | BMW TP-421 Spoljarec |  |  |
| REVISION | string | 1.19 |  |  |
| AUTHOR | string | BMW TP-421 Spoljarec |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer DSP-Booster E38

_No arguments._

### IDENT

Ident-Daten fuer DSP

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose mit Aenderung

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_IO_LINES

Auslesen einiger interner Statusleitungen

_No arguments._

### LAUTSPRECHER_TEST_START

startet die zyklische Ansteuerung aller 4 Kanaele mit verschiedenen Frequenzen

_No arguments._

### LAUTSPRECHER_TEST_ENDE

beendet die zyklische Ansteuerung aller 4 Kanaele

_No arguments._

### DIAGNOSE_WEITER

Diagnose aufrechterhalten

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
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | I-BUS-Kollision |
| 0x02 | kein polling des DSP |
| 0x03 | kein I-BUS Echo am DSP |
| 0x04 | unbekannten Diagnosebefehl erhalten |
| 0xXY | unbekannter Fehlerort |
