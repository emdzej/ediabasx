# KOMBI32.prg

## General

|  |  |
| --- | --- |
| File | KOMBI32.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 3 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.0 |
| Author | Softing, BMW ET-421 Teepe, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kombi E32 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.00 |  |  |
| AUTHOR | string | Softing, BMW ET-421 Teepe, BMW TI-433 Dennert |  |  |
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

### GWSZ_RESET

Ruecksetzen des Gesamtwegstreckenzaehlers

_No arguments._

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Oel/Weg/AG-Oel oder Zeit - Reset |
| ARG2 | string | Oel/Weg/AG-Oel oder Zeit - Reset |
| ARG3 | string | Oel/Weg/AG-Oel oder Zeit - Reset |
| ARG4 | string | Oel/Weg/AG-Oel oder Zeit - Reset |

### FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### AGS_COD_LESEN

Auslesen der AGS-Codierung

_No arguments._

### AGS_COD_SCHREIBEN

Schreiben der AGS-Codierung

_No arguments._

## Tables

### FORTTEXTE

| CODE | ORT | ORTTEXT |
| --- | --- | --- |
| 0x00 | 0x00 | unbekannter Fehlerort |
| 0x02 | 0x01 | Kodierstecker fehlerhaft |
| 0x01 | 0x02 | Programmierung fehlerhaft |
| 0x04 | 0x03 | K-Zahl fehlerhaft |
| 0x03 | 0x04 | Tachoprogrammierung |
| 0x05 | 0x05 | Geschwindigkeitslimit |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| AG_OEL_RESET | 0x03 |
| ZEIT_RESET | 0x04 |

### AGS_COD

| AGSCOD | AGSCODTEXT |
| --- | --- |
| 0x00 | AGS_NICHT_CODIERT |
| 0xFF | AGS_CODIERT |
