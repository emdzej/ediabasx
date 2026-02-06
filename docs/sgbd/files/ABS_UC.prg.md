# ABS_UC.prg

## General

|  |  |
| --- | --- |
| File | ABS_UC.prg |
| Type | PRG |
| Jobs | 7 |
| Tables | 3 |
| Origin | BMW TP-421 Hirsch |
| Revision | 1.23 |
| Author | BMW TP-421 Hirsch |
| ECU Comment | Keine Diagnose bei v > 6km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ABS-System E34 - M5 |  |  |
| ORIGIN | string | BMW TP-421 Hirsch |  |  |
| REVISION | string | 1.23 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch |  |  |
| COMMENT | string | Keine Diagnose bei v > 6km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung

_No arguments._

### INFO

Information SGBD

_No arguments._

### ENDE

Abbruch der Kommunikation

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

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x04 | Drehzahlfuehler Fehler hinten links |
| 0x05 | Drehzahlfuehler Fehler hinten rechts |
| 0x06 | Drehzahlfuehler Fehler vorne rechts |
| 0x07 | Drehzahlfuehler Fehler vorne links |
| 0x08 | ABS Ventil Fehler hinten links |
| 0x09 | ABS Ventil Fehler hinten rechts |
| 0x0A | ABS Ventil Fehler vorne rechts |
| 0x0B | ABS Ventil Fehler vorne links |
| 0x0E | Ventilrelais Fehler |
| 0x0F | Rueckfoerderpumpen Fehler |
| 0x15 | Steuergeraete-Fehler |
| 0x18 | Falsches Zahnrad an einem der 4 Raeder |
| 0x19 | Bremslichtschalter Leitungsunterbrechung |
| 0xFF | undefinierter Fehler |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | statischer Fehler -- momentan vorhanden |
| 0x02 | sporadischer Fehler -- Zuendung ein < 49mal |
| 0x03 | sporadischer Fehler -- Zuendung ein >= 49mal |
| 0x04 | Kurzschluss nach U-Batt oder Unterbrechung |
| 0x05 | keine Fehlerart erkannt |
| 0x06 | BLS betaetigt |
| 0x07 | BLS nicht betaetigt |
| 0x08 | ABS Regelung aktiv |
| 0x09 | ABS Regelung passiv |

### FUMWELTTEXTE

| UWNR | UWTEXT |
| --- | --- |
| 0x01 | Geschwindigkeit  km/h |
