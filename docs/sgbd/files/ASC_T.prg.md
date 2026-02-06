# ASC_T.prg

## General

|  |  |
| --- | --- |
| File | ASC_T.prg |
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
| ECU | string | Antiblockiersystem u. Autom. Stabilitaets Control E31 - M70 |  |  |
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
| 0x02 | Verb. zum EML gestoert |
| 0x03 | Verb. zur DME gestoert |
| 0x04 | Sensor hinten links |
| 0x05 | Sensor hinten rechts |
| 0x06 | Sensor vorne rechts |
| 0x07 | Sensor vorne links |
| 0x08 | ABS-Ventil hinten links |
| 0x09 | ABS-Ventil hinten rechts |
| 0x0A | ABS-Ventil vorne rechts |
| 0x0B | ABS-Ventil vorne links |
| 0x0C | Plunger-Ventil hinten li. |
| 0x0D | Plunger-Ventil hinten re. |
| 0x0E | Ventilrelaisfehler |
| 0x0F | ABS-Rueckfoerderpumpe |
| 0x10 | Plungerspeicherladeventil |
| 0x11 | Ladezeit Plungerspeicher |
| 0x12 | Leckage Plungerspeicher |
| 0x13 | Speicherwarndruckschwelle |
| 0x14 | Schnittstelle zum EGS |
| 0x15 | ABS/ASC-Steuergeraet def. |
| 0x16 | Drehzahlsignalfehler |
| 0x17 | Fehler Getriebecodierung |
| 0x18 | Falsches Impulsrad am Rad |
| 0x19 | Bremslichts. Leitungsunterbrechung |
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

### FUMWELTTEXTE

| UWNR | UWTEXT |
| --- | --- |
| 0x01 | Geschwindigkeit  km/h |
