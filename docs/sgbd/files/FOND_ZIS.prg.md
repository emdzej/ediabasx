# FOND_ZIS.prg

## General

|  |  |
| --- | --- |
| File | FOND_ZIS.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 5 |
| Origin | BMW TP-421 Spoljarec |
| Revision | 1.7 |
| Author | BMW TP-421 Teepe, Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Fond Multi-Informations-Display E38 |  |  |
| ORIGIN | string | BMW TP-421 Spoljarec |  |  |
| REVISION | string | 1.07 |  |  |
| AUTHOR | string | BMW TP-421 Teepe, Spoljarec |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer FOND_ZIS E38

_No arguments._

### IDENT

Ident-Daten fuer Front-FOND_ZIS

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### FOND_ZIS_VERSION

FOND_ZIS-Variante auslesen

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

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
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Keine gueltige Statusrueckmeldung IKE |
| 0x02 | Keine gueltige Statusrueckmeldung AUDIO |
| 0x03 | Keine gueltige Statusrueckmeldung TELEFON |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |

### FOND_ZISVARIANTE

| CODE | VARIANTENTEXT | VAR_NR |
| --- | --- | --- |
| 0x00 | AUDIO, TELEFON, BC | 4 |
| 0x10 | AUDIO, TELEFON, BC, DSP | 7 |
| 0x01 | AUDIO, BC | 2 |
| 0x11 | AUDIO, BC, DSP | 5 |
| 0x02 | AUDIO, UHR | 3 |
| 0x12 | AUDIO, UHR, DSP | 6 |
| 0x03 | BC/UHR | 1 |

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
