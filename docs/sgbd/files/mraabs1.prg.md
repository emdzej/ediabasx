# mraabs1.prg

## General

|  |  |
| --- | --- |
| File | mraabs1.prg |
| Type | PRG |
| Jobs | 7 |
| Tables | 2 |
| Origin | I+ME Actia R&D ABT, KA |
| Revision | 1.004 |
| Author | I+ME R&D Axel Bäthge |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ABS Steuergerät AB02.5 |  |  |
| ORIGIN | string | I+ME Actia R&D ABT, KA |  |  |
| REVISION | string | 1.004 |  |  |
| AUTHOR | string | I+ME R&D Axel Bäthge |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### IDENT

Fakeantwort notwendig wegen ISTA zur Steuerung SG-Baum

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler)

_No arguments._

### INIT_FS_LOESCHEN

Initialisierung und Kommunikationsparameter

_No arguments._

### FS_LOESCHEN

Initialisierung und Kommunikationsparameter

_No arguments._

### DIAGNOSE_ENDE

Deinitialisierung

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | INITIALISIEREN VON ICOM_E FEHLGESCHLAGEN |
| 0x03 | LINIE SETZEN FEHLGESCHLAGEN |
| 0x04 | BLINKCODE LESEN FEHLGESCHLAGEN |
| 0x05 | INITIALISIEREN DER BLINKZAHLERFASSUNG FEHLGESCHLAGEN |
| 0x06 | BEENDEN DER BLINKZAHLERFASSUNG FEHLGESCHLAGEN |
| 0x07 | BEENDEN VON ICOM_E FEHLGESCHLAGEN |
| 0xFF | UNBEKANNTER FEHLER |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x01 | Druckmodulator vorn | 0 |
| 0x02 | Druckmodulator hinten | 0 |
| 0x03 | Sensor vorn | 0 |
| 0x04 | Sensor hinten | 0 |
| 0x05 | Batterie-Unterspannung | 0 |
| 0x06 | ABS-Relais | 0 |
| 0x07 | ABS-Steuergerät mit Druckmodulator | 0 |
| 0x08 | Störung durch äußere Einflüsse | 0 |
| 0x09 | Warnlampen-Bereich inkl. WL-Relais | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |
