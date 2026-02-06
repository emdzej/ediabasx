# carbpr.prg

## General

|  |  |
| --- | --- |
| File | carbpr.prg |
| Type | PRG |
| Jobs | 23 |
| Tables | 0 |
| Origin | BMW EA34 Hecht |
| Revision | 1.30 |
| Author | Josef Greppmair, GD |
| ECU Comment | Abgeleitet von CARB.B2V |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SCANTOOL-Schnittstelle nach SAE J1979 speziell fuer FASTA |  |  |
| ORIGIN | string | BMW EA34 Hecht |  |  |
| REVISION | string | 1.30 |  |  |
| AUTHOR | string | Josef Greppmair, GD |  |  |
| COMMENT | string | Abgeleitet von CARB.B2V |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Dieser Job wird vom EDIABAS automatisch beim erstem Zugriff auf eine SGBD aufgerufen. Bei weitern Zugriffen auf die selbe SGBD wird dieser Job nicht mehr aufgerufen. In der INITIALISIERUNG werden alle Funktionen aufgerufen, die nur einmal, vor der Kommunikation mit einem SG notwendig sind.

_No arguments._

### SCAN_ENDE

_No description._

_No arguments._

### SCAN_IDENT

Information ueber verbaute Steuergeraete

_No arguments._

### SCAN_STATUS_READYNESS

Anzahl Fehler, und MIL-Status

_No arguments._

### SCAN_KM_MIL_ON

Zurueckgelegte Wegstrecke mit eingeschalteter MIL

_No arguments._

### SCAN_ZEIT_MIL_ON

Zeit mit eingeschalteter MIL

_No arguments._

### SCAN_FF_TROUBLE_CODE

Last holen

_No arguments._

### SCAN_OBD_REQUIREMENT_VERSION

SCAN_OBD_REQUIREMENT_VERSION

_No arguments._

### SCAN_FF_ENGINE_RPM

Freezeframewert fuer Drehzahl lesen

_No arguments._

### SCAN_ENGINE_RPM

aktuelle Drehzahl lesen

_No arguments._

### SCAN_PCODE_MODE3_LESEN

PCODES holen

_No arguments._

### SCAN_FF_FUEL_SYSTEM

Status des Kraftstoffsystems

_No arguments._

### SCAN_FF_CALCULATED_LOAD

Last holen

_No arguments._

### GET_TEMPERATUR_MOTOR

Motortemperatur holen

_No arguments._

### GET_STATUS_LAMDAREGLER_BANK1

Statuswert holen

_No arguments._

### GET_ADAPTION_LAMDAREGLER_BANK1

Statuswert holen

_No arguments._

### GET_STATUS_LAMDAREGLER_BANK2

Statuswert holen

_No arguments._

### GET_ADAPTION_LAMDAREGLER_BANK2

Statuswert holen

_No arguments._

### GET_DRUCK_KRAFTSTOFF

Statuswert holen

_No arguments._

### GET_DRUCK_EINLASS

Statuswert holen

_No arguments._

### GET_DREHZAHL

Statuswert holen

_No arguments._

### GET_GESCHWINDIGKEIT

Statuswert holen

_No arguments._

## Tables

_No tables._
