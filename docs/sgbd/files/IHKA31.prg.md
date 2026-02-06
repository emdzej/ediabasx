# IHKA31.prg

## General

|  |  |
| --- | --- |
| File | IHKA31.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 3 |
| Origin | BMW ET-421 Drexel |
| Revision | 1.5 |
| Author | BMW ET-421 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaautomatik E31 |  |  |
| ORIGIN | string | BMW ET-421 Drexel |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | BMW ET-421 Drexel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Kommunikationsparameter fuer IHKA

_No arguments._

### ENDE

Dieser Job bricht die Kommunikation ab

_No arguments._

### IDENT

Identifikation

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Diese Funktion ist ein Dummy

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STATUS_LESEN_ANALOG

Status lesen

_No arguments._

### STATUS_LESEN_DIGITAL

Status lesen

_No arguments._

### STATUS_BEDIENTEIL

Status lesen Bedienteileinstellungen

_No arguments._

### SPEICHER_LESEN

Speicher lesen

_No arguments._

## Tables

### FARTMATRIX

| CODE | A10 | A11 | A20 | A21 | A30 | A31 | A4MASK |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000001 |
| 0x01 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000002 |
| 0x02 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000004 |
| 0x03 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000008 |
| 0x04 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000010 |
| 0x05 | 0 | 4 | 0 | 0 | 0 | 1 | 0x00000020 |
| 0x06 | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |
| 0x07 | 0 | 0 | 0 | 4 | 0 | 1 | 0x00000080 |
| 0x08 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000100 |
| 0x09 | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000200 |
| 0x0a | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000400 |
| 0x0b | 0 | 0 | 0 | 3 | 0 | 2 | 0x00000800 |
| 0x0c | 0 | 0 | 0 | 4 | 0 | 1 | 0x00001000 |
| 0x0d | 0 | 0 | 0 | 4 | 0 | 1 | 0x00002000 |
| 0x0e | 0 | 0 | 0 | 4 | 0 | 1 | 0x00004000 |
| 0x0f | 0 | 0 | 0 | 4 | 0 | 1 | 0x00008000 |
| 0x10 | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |
| 0x11 | 0 | 0 | 0 | 4 | 0 | 1 | 0x00020000 |
| 0x12 | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |
| 0x13 | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |
| 0x14 | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |
| 0x15 | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |
| 0x16 | 0 | 5 | 0 | 0 | 0 | 1 | 0x00400000 |
| 0x17 | 0 | 5 | 0 | 0 | 0 | 1 | 0x00800000 |
| 0x18 | 0 | 5 | 0 | 0 | 0 | 1 | 0x01000000 |
| 0x19 | 0 | 5 | 0 | 0 | 0 | 1 | 0x02000000 |
| 0x1a | 0 | 5 | 0 | 0 | 0 | 1 | 0x04000000 |
| 0x1b | 0 | 5 | 0 | 0 | 0 | 1 | 0x08000000 |
| 0x1c | 0 | 5 | 0 | 0 | 0 | 1 | 0x10000000 |
| 0x1d | 0 | 5 | 0 | 0 | 0 | 1 | 0x20000000 |
| 0x1e | 0 | 5 | 0 | 0 | 0 | 1 | 0x40000000 |
| 0x1f | 0 | 5 | 0 | 0 | 0 | 1 | 0x80000000 |
| 0xFF | 0 | 0 | 0 | 0 | 0 | 0 | 0x00000000 |

### FORTTEXTE

| CODE | ORT | ORTTEXT |
| --- | --- | --- |
| 0x00 | 0x01 | Sollwertsteller rechts |
| 0x01 | 0x04 | Waermetauscherfuehler rechts |
| 0x02 | 0x07 | Verdampferfuehler |
| 0x03 | 0x0a | Aussentemperaturfuehler |
| 0x04 | 0x0d | Innenraumtemperaturfuehler |
| 0x05 | 0x10 | Innenfuehlergeblaese |
| 0x06 | 0x13 | Relais Frontscheibenheizung |
| 0x07 | 0x16 | Relais Zusatzluefter |
| 0x08 | 0x19 | Sollwertsteller links |
| 0x09 | 0x1c | Waermetauscherfuehler links |
| 0x0a | 0x1f | Geblaesepotentiometer |
| 0x0b | 0x22 | Schichtungspotentiometer |
| 0x0c | 0x26 | Relais Zusatzwasserpumpe |
| 0x0d | 0x28 | Wasserventil links |
| 0x0e | 0x2c | Magnetkupplung Klimakompressor |
| 0x0f | 0x2e | Wasserventil rechts |
| 0x10 | 0x00 | unbekannter Fehlerort |
| 0x11 | 0x2f | Relais Heckscheibenheizung |
| 0x12 | 0x00 | unbekannter Fehlerort |
| 0x13 | 0x00 | unbekannter Fehlerort |
| 0x14 | 0x00 | unbekannter Fehlerort |
| 0x15 | 0x00 | unbekannter Fehlerort |
| 0x16 | 0x34 | Frischluftklappenmotor |
| 0x17 | 0x37 | Umluftklappenmotor |
| 0x18 | 0x3a | Belueftungsklappenmotor links |
| 0x19 | 0x3d | Schichtungsklappenmotor rechts |
| 0x1a | 0x40 | Schichtungsklappenmotor links |
| 0x1b | 0x43 | Fondraumklappenmotor |
| 0x1c | 0x46 | Fussraumklappenmotor links |
| 0x1d | 0x49 | Fussraumklappenmotor rechts |
| 0x1e | 0x4c | Entfrostungsklappenmotor |
| 0x1f | 0x4f | Belueftungsklappenmotor rechts |
| 0xFF | 0x00 | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0 | -- |
| 1 | Kurzschluss gegen U-Batt |
| 2 | Kurzschluss gegen U-Batt oder Leitungsunterbrechung |
| 3 | Kurzschluss gegen Masse |
| 4 | Kurzschluss gegen Masse oder Leitungsunterbrechung |
| 5 | Leitungsunterbrechung |
| 6 | Fehler momentan nicht vorhanden |
| 7 | Fehler momentan vorhanden |
