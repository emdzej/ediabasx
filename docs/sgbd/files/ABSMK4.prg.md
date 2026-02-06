# ABSMK4.prg

## General

|  |  |
| --- | --- |
| File | ABSMK4.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 3 |
| Origin | BMW TP-421 Hirsch |
| Revision | 1.9 |
| Author | BMW TP-421 Hirsch |
| ECU Comment | Keine Diagnose bei V > 2.5 km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Antiblockiersystem MK4 E36 |  |  |
| ORIGIN | string | BMW TP-421 Hirsch |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch |  |  |
| COMMENT | string | Keine Diagnose bei V > 2.5 km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer ABS_ASC_MK4

_No arguments._

### IDENT

Ident-Daten fuer ABS_MK4

_No arguments._

### FS_LESEN

Fehlerspeicher lesen fuer ABS_MK4

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer ABS_MK4

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge ABS_MK4

_No arguments._

### STEUERN_DIGITAL

Steuern_Digital mit mehreren Ausgaenge fuer ABS_MK4

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xFA | ERROR_ECU_FUNCTION |
| 0xFB | ERROR_ECU_FUNCTION |
| 0xF7 | ERROR_ECU_FUNCTION |
| 0xF8 | ERROR_ECU_FUNCTION |
| 0xF2 | ERROR_ECU_FUNCTION |
| 0x0A | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x11 | ABS Ventil Einlass vorne links |
| 0x12 | ABS Ventil Auslass vorne links |
| 0x14 | ABS Ventil Einlass vorne rechts |
| 0x18 | ABS Ventil Auslass vorne rechts |
| 0x21 | ABS Ventil Einlass Hinter Achse |
| 0x22 | ABS Ventil Auslass Hinter Achse |
| 0x44 | Bus od. Busprozessor |
| 0x48 | Interner IC-Fehler |
| 0x51 | Drehzahlfuehler Fehler VL, Triggersignal |
| 0x52 | Drehzahlfuehler Fehler VR, Triggersignal |
| 0x54 | Drehzahlfuehler Fehler HL, Triggersignal |
| 0x58 | Drehzahlfuehler Fehler HR, Triggersignal |
| 0x61 | Drehzahlfuehler Fehler VL, Kontinuitaet |
| 0x62 | Drehzahlfuehler Fehler VR, Kontinuitaet |
| 0x64 | Drehzahlfuehler Fehler HL, Kontinuitaet |
| 0x68 | Drehzahlfuehler Fehler HR, Kontinuitaet |
| 0x71 | Drehzahlfuehler Fehler VL, Anfahrerkennung |
| 0x72 | Drehzahlfuehler Fehler VR, Anfahrerkennung |
| 0x74 | Drehzahlfuehler Fehler HL, Anfahrerkennung |
| 0x78 | Drehzahlfuehler Fehler HR, Anfahrerkennung |
| 0x84 | Pedalwegsensor |
| 0x88 | Hydraulikpumpe |
| 0x91 | Pumpenmotor |
| 0x98 | Hydraulikkreislauf |
| 0xA1 | ABS Ventil Auslass vorne links |
| 0xA2 | ABS Ventil Auslass vorne rechts |
| 0xA4 | ABS Ventil Auslass Hinter Achse |
| 0xA8 | ABS Ventil Auslass Hinter Achse |
| 0xFF | NV-RAM |
| 0xXY | unbekannter Fehlerort |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| EVVL | 0 | 0x01 |
| AVVL | 0 | 0x02 |
| EVVR | 0 | 0x04 |
| AVVR | 0 | 0x08 |
| EVHA | 0 | 0x10 |
| AVHA | 0 | 0x20 |
| Pumpe | 1 | 0x01 |
| XYZ | 2 | 0xFF |
