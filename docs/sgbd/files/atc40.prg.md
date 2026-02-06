# atc40.prg

## General

|  |  |
| --- | --- |
| File | atc40.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 2 |
| Origin | BMW TI-433 Drexel |
| Revision | 0.3 |
| Author | BMW TI-433 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Klimaautomatik R40 |  |  |
| ORIGIN | string | BMW TI-433 Drexel |  |  |
| REVISION | string | 0.03 |  |  |
| AUTHOR | string | BMW TI-433 Drexel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### STATUS_ANALOGEINGAENGE

Status lesen

_No arguments._

### STATUS_REGLERGROESSEN

Status lesen

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

Status lesen

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### STATUS_BEDIENTEIL

Status lesen

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
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x11 | Innenraumtemperaturfuehler |
| 0x12 | Aussentemperatur |
| 0x13 | Verdampferfuehler |
| 0x14 | Waermetauscherfuehler |
| 0x21 | Solarsensor links |
| 0x22 | Solarsensor rechts |
| 0x31 | Temperatur-Mischklappenmotor oder Potentiometer links |
| 0x32 | Temperatur-Mischklappenmotor oder Potentiometer rechts |
| 0x33 | Luftverteilungsklappenmotor oder Potentiometer |
| 0xFF | unbekannter Fehlerort |
