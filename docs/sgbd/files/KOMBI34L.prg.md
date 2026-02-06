# KOMBI34L.prg

## General

|  |  |
| --- | --- |
| File | KOMBI34L.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.2 |
| Author | Softing Taubert, BMW TP-422 Zender, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kombi E34l |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.02 |  |  |
| AUTHOR | string | Softing Taubert, BMW TP-422 Zender, BMW TI-433 Dennert |  |  |
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

### TACHO_A

liefert geschwindigkeitsproportionales Signal

| Name | Type | Description |
| --- | --- | --- |
| GESCHWINDIGKEIT | int | Vorgabegeschwindigkeit in km/h, (2-240 km/h) |

## Tables

### FORTTEXTE

| CODE | ORT | ORTTEXT |
| --- | --- | --- |
| 0x00 | 0x01 | Interner Fehler (RAM) |
| 0x01 | 0x01 | Interner Fehler (ROM) |
| 0x05 | 0x02 | Codierstecker fehlerhaft |
| 0x06 | 0x03 | Codierstecker fehlerhaft |
| 0x07 | 0x04 | Codierstecker fehlerhaft |
| 0x08 | 0x05 | Codierstecker fehlerhaft |
| 0x09 | 0x06 | Codierstecker falsch programmiert |
| 0x0a | 0x07 | Ueberspannung an Klemme R |
| 0x0b | 0x08 | K-Zahl fehlerhaft |
| 0x10 | 0x09 | Tankgeber ohne Funktion |
| 0x11 | 0x0a | Temperaturanzeige fehlerhaft |
| 0x1a | 0x0e | EGS Stoerung |
| 0x1b | 0x0b | Bremsbelagfuehler |
| 0x1c | 0x0c | Tankreservekontakt fehlerhaft |
| 0x1d | 0x0d | Kombitaste fehlerhaft |
| 0xff | 0x00 | unbekannter Fehler |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Kurzschluss nach UBatt |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Unterbrechung |
| 0x03 | ungueltiger Arbeitsbereich |
| 0x04 | sporadischer Fehler |
| 0x05 | statischer Fehler |
| 0xFF | unbekannte Fehlerart |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| AG_OEL_RESET | 0x03 |
| ZEIT_RESET | 0x04 |
