# DDSHD.prg

## General

|  |  |
| --- | --- |
| File | DDSHD.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 2 |
| Origin | BMW ET-421 Teepe |
| Revision | 1.34 |
| Author | BMW ET-421 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDSHD E34/2 |  |  |
| ORIGIN | string | BMW ET-421 Teepe |  |  |
| REVISION | string | 1.34 |  |  |
| AUTHOR | string | BMW ET-421 Teepe |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Auslesen der Identifikationsdaten

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### STATUS_IO_LESEN

Auslesen der Ein- Ausgaenge

_No arguments._

### STATUS_POS_LESEN

Auslesen der Deckelpositionen

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Relais 1 zieht nicht an |
| 0x02 | Relais 2 zieht nicht an |
| 0x03 | Relais 3 zieht nicht an |
| 0x04 | Relais 4 zieht nicht an |
| 0x05 | Relais 1 klebt |
| 0x06 | Relais 2 klebt |
| 0x07 | Relais 3 klebt |
| 0x08 | Relais 4 klebt |
| 0x09 | Zuleitung HD Motor verpolt |
| 0x0a | Zuleitung VD Motor verpolt |
| 0x0b | Hinterer Motor / Geber |
| 0x0c | Vorderer Motor / Geber |
| 0x0d | Spannungs-Versorgung |
| 0x0e | Impulsgeber VD /HD |
| 0x0f | SHD-Schalter |
| 0x10 | DDSHD_Modul |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0 | sporadischer Fehler |
| 1 | statischer Fehler |
