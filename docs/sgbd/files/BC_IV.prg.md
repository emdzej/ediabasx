# BC_IV.prg

## General

|  |  |
| --- | --- |
| File | BC_IV.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 2 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.4 |
| Author | BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Bordcomputer BC4 E32 / E34 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | BMW TP-422 Teepe |  |  |
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

### STATUS_LESEN

Auslesen der I-O-Ports

_No arguments._

### RAM_LESEN

Lesen des RAM-Speichers

_No arguments._

### EPROM_LESEN

Lesen des EPROM-Speichers

_No arguments._

## Tables

### FORTTEXTE

| CODE | ORT | ORTTEXT |
| --- | --- | --- |
| 0x01 | 0x15 | Luefterausgang |
| 0x02 | 0x14 | Zusatzheizung |
| 0x03 | 0x17 | Alarmhorn |
| 0x04 | 0x18 | Wegfahrsicherung |
| 0x05 | 0x12 | Warngong-Temperatur |
| 0x06 | 0x13 | Warngong-Zeit |
| 0x07 | 0x05 | Temperaturfuehler |
| 0x08 | 0x0f | Datenleitung |
| 0x09 | 0x08 | Klemme R |
| 0x0A | 0x06 | Klemme 15 |
| 0x0B | 0x0B | Tacho A Signal |
| 0x0C | 0x0c | Tauchrohrgeber |
| 0xFF | 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Kurzschluss gegen Masse |
| 0x04 | Fehler momentan nicht vorhanden |
| 0x05 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |
