# BC_V.prg

## General

|  |  |
| --- | --- |
| File | BC_V.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 4 |
| Origin | BMW TP-421 Spoljarec |
| Revision | 1.5 |
| Author | BMW TP-421 Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Bordcomputer 5 E36 |  |  |
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

Init-Job fuer BCV

_No arguments._

### IDENT

Auslesen der Identifikationsdaten

_No arguments._

### COD_LESEN

Auslesen der BC-Codierung

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DISPLAYTEST

Ausloesen des Displaytests

_No arguments._

### STATUS_DIGITAL_LESEN

alle digitalen Stati des BC 5 lesen

_No arguments._

### STATUS_TASTEN_LESEN

alle Tastatur Stati des BC 5 lesen

_No arguments._

### STATUS_ANALOG_LESEN

alle analogen Stati des BC 5 lesen

_No arguments._

### STEUERN_IO_STATUS

Ansteuern von den I/O Stati

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | siehe table IO_STATUS |

### DIAGNOSE_ENDE

Diagnosemode beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x09 | OKAY |
| 0x0B | BUSY |
| 0x0A | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### SPRACH_TAB

| SPB | SPRACHE_TEXT |
| --- | --- |
| 0x00 | Deutschland |
| 0x01 | engl. UK |
| 0x02 | engl. US |
| 0x03 | Italien |
| 0x04 | Spanien |
| 0x05 | engl. Japan |
| 0x06 | Frankreich |
| 0x07 | Kanada |
| 0x08 | Australien/Golf/ZA |
| 0xXY | unbekannte Sprache |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | BC ZHL - Check-Control-Lampe im Kombi |
| 0x02 | Gong T2 Ausgang |
| 0x03 | Gong T1 Ausgang |
| 0x04 | Code Ausgang - Wegfahrsicherung zur Motronic |
| 0x05 | Horn ausgang - Alarmhorn (Relaisbox/DWA) |
| 0x06 | Timer Ausgang |
| 0x07 | Temperatur Eingang - Aussentemperaturfuehler |
| 0x08 | BC CLC - Clock-Leitung zum Check-Modul |
| 0x09 | BC LAC - Latch-Signal zum Check-Modul |
| 0x0A | BC DATA - serielle Datenltg. zum Check.Modul |
| 0x0B | Klemme 15 ohne Klemme R |
| 0x0C | Klemme 50 ohne Klemme 15 |
| 0x0D | Haube/Radio - Ueberwachung Hauben-/Radio-Kontakt |
| 0x0E | Tacho A - Wegsignal vom Kombi |
| 0x0F | T KVA - Einspritzsignal von Motronic |
| 0x10 | kein Tanksignal vom Kombi |
| 0x11 | RxD - Diagnoseempfangsleitung Fehler |
| 0x12 | Kurzschluss TxD-Leitung nach UBatt |
| 0x13 | Lenkstockschalter |
| 0x14 | kein LCD-Dimmsignal vom Kombi |
| 0x15 | BLTS - Bremslichttestschalter |
| 0xXY | unbekannter Fehlerort |

### IO_STATUS

| SIGNAL | BYTE |
| --- | --- |
| TIMER | 0x02 |
| HORN | 0x04 |
| CODE | 0x08 |
| GONG1 | 0x10 |
| GONG2 | 0x20 |
| ZHL | 0x40 |
