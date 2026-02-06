# XENON_L.prg

## General

|  |  |
| --- | --- |
| File | XENON_L.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 4 |
| Origin | BMW TI-431 Lodde |
| Revision | 1.00 |
| Author | BMW TI-431 Schaller, BMW TI-431 Lodde, BMW TI-432 Pichler |
| ECU Comment | Version von BMW TP-422 Teepe ueberarbeitet |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Xenon links E46 / Mini |  |  |
| ORIGIN | string | BMW TI-431 Lodde |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-431 Schaller, BMW TI-431 Lodde, BMW TI-432 Pichler |  |  |
| COMMENT | string | Version von BMW TP-422 Teepe ueberarbeitet |  |  |
| PACKAGE | string | 1.00 |  |  |
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

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### STATUS_LESEN

STATUS_LESEN job

_No arguments._

### DIAGNOSE_WEITER

DIAGNOSE_WEITER job

_No arguments._

### DIAGNOSE_ENDE

DIAGNOSE_ENDE job

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### ADAPTIVWERT_LOESCHEN

loeschen eines Adaptivwerte Es muss immer ein Argument mit drei moeglichen Werten (WECHSEL_LAMPE, WECHSEL_ZUENDMODUL, WECHSEL_STEUERGERAET) uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| ADAPTIVWERT | string | WECHSEL_LAMPE, WECHSEL_ZUENDMODUL, WECHSEL_STEUERGERAET table JobResult STATUS_TEXT |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0A | Ul <65 Volt, Brennspannung ausserhalb des zulaessigen Bereichs |
| 0x0B | Ul >115 Volt, Brennspannung ausserhalb des zulaessigen Bereichs |
| 0x0C | D2S/R-Lampe ist erloschen |
| 0x0D | D2S/R-Lampe mehrmals erloschen |
| 0x14 | Zuendung erfolglos |
| 0x15 | Zuendgeraet nicht angeschlossen oder defekt |
| 0x1E | µC-interner Fehler |
| 0x1F | Hardwarefehler im Steuergeraet |
| 0x20 | Kurzschluss am Ausgang des Steuergeraetes (ZG-Pins) |
| 0x21 | Zuendhilfsspannung fehlerhaft |
| 0x28 | Ueberspannungsabschaltung, Klemme 56b > 19 Volt |
| 0x29 | SW-Kabelbaum oder Zuleitung zum SW zu hochohmig |
| 0x2A | Klemme 15 < 7,5 Volt |
| 0xFF | unbekannter Fehlerort |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
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
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Melco/ZKW |
| 0xFF | unbekannter Hersteller |

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

### ADAPTIVWERTE

| ADAPTIVWERT | BITWERT |
| --- | --- |
| WECHSEL_LAMPE | 0x01 |
| WECHSEL_ZUENDMODUL | 0x02 |
| WECHSEL_STEUERGERAET | 0x03 |
| FALSCHES_ARGUMENT | 0x00 |
