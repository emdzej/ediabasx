# EDC3P.prg

## General

|  |  |
| --- | --- |
| File | EDC3P.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 2 |
| Origin | BMW TP-421 Gerd Huber |
| Revision | 3.0 |
| Author | Softing SAG Mw, BMW TP-421 Gerd Huber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Daempfer Regelung III plus |  |  |
| ORIGIN | string | BMW TP-421 Gerd Huber |  |  |
| REVISION | string | 3.00 |  |  |
| AUTHOR | string | Softing SAG Mw, BMW TP-421 Gerd Huber |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Initialisierung

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

### STEUERN_DIGITAL

Ansteuern der Ventilendstufen

| Name | Type | Description |
| --- | --- | --- |
| FUNKTION | string | Ansteuerfunktion auswaehlen |
| EIN | int | "1", wenn einschalten / "0", wenn ausschalten |

### STEUERN_VF

Abspeichern der aktuellen Geschwindigkeit VF

_No arguments._

### STATUS_VF

Auslesen der Raddrehzahl

_No arguments._

### STATUS_DIGITAL

Auslesen der Statusbytes

_No arguments._

### STATUS_ANALOG

Analogwerte auslesen

_No arguments._

### STATUS_ONLINE

Online-Lesen

_No arguments._

### CODIERUNG_LESEN

Fahrzeugcodierung auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Low-Byte der Startadresse |

### EEPROM_LESEN

Lesen des EEPROM-Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 2 Byte (high / low) |
| ANZAHL | int | normal 16 |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Lenkwinkelfehler: Differenz der Sensorwinkel zu gross |
| 0x01 | Lenkwinkelfehler: Ableitung Analogsignal zu gross |
| 0x02 | Lenkwinkelfehler: Aktivitaet zu gering |
| 0x03 | Lenkwinkelfehler: 5 Vref extern Masse-Schluss |
| 0x10 | Fehler im VF-Signal |
| 0x20 | B-Sensor vorne: ausgefallen |
| 0x21 | B-Sensor vorne: Pegelfehler |
| 0x30 | B-Sensor hinten: ausgefallen |
| 0x31 | B-Sensor hinten: Pegelfehler |
| 0x40 | B-Sensor laengs: ausgefallen |
| 0x41 | B-Sensor laengs: Pegelfehler |
| 0x50 | Ucoil: Schluss nach Masse |
| 0x51 | Ucoil: Schluss nach Klemme 15 |
| 0x52 | Ucoil: Ventilleitung an Klemme 15 |
| 0x53 | Ucoil: Ucoil ungleich PWM -> Steuergeraet defekt |
| 0x60 | Ventilfehler vorne: Unterbrechung Ucoil an Ventile |
| 0x61 | Ventilfehler vorne: Unterbrechung beider Ventilleitungen Mittel |
| 0x62 | Ventilfehler vorne: Unterbrechung einer Ventilleitung Mittel |
| 0x63 | Ventilfehler vorne: Unterbrechung beider Ventilleitungen Weich |
| 0x64 | Ventilfehler vorne: Unterbrechung einer Ventilleitung Weich |
| 0x80 | Ventilfehler hinten: Unterbrechung Ucoil an Ventile |
| 0x81 | Ventilfehler hinten: Unterbrechung beider Ventilleitungen Mittel |
| 0x82 | Ventilfehler hinten: Unterbrechung einer Ventilleitung Mittel |
| 0x83 | Ventilfehler hinten: Unterbrechung beider Ventilleitungen Weich |
| 0x84 | Ventilfehler hinten: Unterbrechung einer Ventilleitung Weich |
| 0xXY | unbekannter Fehlerort |

### STEUERN_DIGITAL

| FUNCT | BYTE |
| --- | --- |
| VW | 0x01 |
| VM | 0x02 |
| VH | 0x03 |
| HW | 0x04 |
| HM | 0x08 |
| HH | 0x0C |
| LENKW | 0x01 |
| TBEL | 0x02 |
| DIMM | 0x04 |
| CC | 0x08 |
| XY | 0xFF |
