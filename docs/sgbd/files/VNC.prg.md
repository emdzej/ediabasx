# VNC.prg

## General

|  |  |
| --- | --- |
| File | VNC.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 3 |
| Origin | BMW TP-421 Weber |
| Revision | 1.1 |
| Author | BMW TP-421 Weber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| SPRACHE | string | deutsch |  |  |
| ECU | string | VNC fuer E36 M3 |  |  |
| ORIGIN | string | BMW TP-421 Weber |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | BMW TP-421 Weber |  |  |
| COMMENT | string |  |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer die VNC

_No arguments._

### VERSION_LESEN

Auslesen der Versionsnummer

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

### STATUS_LESEN

Einlesen der Betriebswerte

_No arguments._

### MESSE_VERSTELLZEIT

Messen der minimalen und maximalen Verstellzeit

_No arguments._

### ANFAHREN_POSITION

Anfahren einer vorgegebenen Position

| Name | Type | Description |
| --- | --- | --- |
| SOLLWINKEL | int | Sollwinkel |

### STEUERN_DICHTHEIT_PRUEF

Messen der Dichtheit der Ventile

| Name | Type | Description |
| --- | --- | --- |
| SOLLWINKEL | int | Sollwinkel |

### STEUERN_VENTILE

Ansteuern der Ventile

| Name | Type | Description |
| --- | --- | --- |
| VENTIL | int | Anzusteuerndes Ventil |

### STEUERN_E_LUEFTER

Ansteuern des E-Luefters

_No arguments._

### STEUERN_BEENDEN

Beenden von Ansteuerungen

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Ventil 1 defekt |
| 0x02 | Fehler auf dem CAN-Bus |
| 0x03 | nicht belegt |
| 0x04 | nicht belegt |
| 0x06 | Geber 1 defekt |
| 0x08 | Pruefsummenfehler festgestellt |
| 0x09 | Ventil 2 defekt |
| 0x0E | Geber 2 defekt |
| 0x00 | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x01 | momentan   |
| 0x00 | sporadisch |
