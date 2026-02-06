# EKM.prg

## General

|  |  |
| --- | --- |
| File | EKM.prg |
| Type | PRG |
| Jobs | 21 |
| Tables | 3 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.2 |
| Author | Softing Taubert, BMW ET-421 Drexel, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronik Karosseriemodul EKM E31 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.02 |  |  |
| AUTHOR | string | Softing Taubert, BMW ET-421 Drexel, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

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

### GWSZ_RESET

Ruecksetzen des Gesamtwegstreckenzaehlers

_No arguments._

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Oel/Weg oder Zeit - Reset |
| ARG2 | string | Oel/Weg oder Zeit - Reset |
| ARG3 | string | Oel/Weg oder Zeit - Reset |

### STATUS_MOTOR

Pruefung ob Motor ein oder aus Wenn die Motordrehzahl groesser 360 U/min ist wird auf "Motor ist ein" erkannt

_No arguments._

### STATUS_DIAGNOSE_LESEN

Abfrage der aktuellen Diagnose-Stati

_No arguments._

### STATUS_DIGITAL_GEFILTERT_LESEN

Lesen der gefilterten Digitalwerte

_No arguments._

### STATUS_DIGITAL_UNGEFILTERT_LESEN

Lesen der ungefilterten Digitalwerte

_No arguments._

### CODIERDATEN_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Speicheradresse im I/O-Prozessor |
| ANZAHL | int | Anzahl der zu lesenden Bytes (1..10) |

### SIA_DATEN_LESEN

SIA-Daten lesen und interpretieren

_No arguments._

### CODIERUNG_LESEN

Codier-Daten lesen und interpretieren

_No arguments._

### SPEICHER_LESEN

Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicheradresse 24Bit |
| ANZAHL | int | Anzahl der zu lesenden Bytes (1..249) |

### SPEICHER_LESEN_IO_PROZ

Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Speicheradresse im I/O-Prozessor 16Bit |
| ANZAHL | int | Anzahl der zu lesenden Bytes (1..1024) |

### STATUS_AUSGAENGE_LESEN

Stati der Ausgaenge lesen

_No arguments._

### STATUS_ANALOG_GEFILTERT_LESEN

gefilterte Analogwerte lesen

_No arguments._

### STATUS_ANALOG_UNGEFILTERT_LESEN

ungefilterte Analogwerte lesen

_No arguments._

### TACHO_A

liefert geschwindigkeitsproportionales Signal

| Name | Type | Description |
| --- | --- | --- |
| GESCHWINDIGKEIT | int | Vorgabegeschwindigkeit in km/h, (4-250 km/h) |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | unbekannter Fehlerort |
| 0x01 | Klemme 15, Klemme R und (Td+Ti) |
| 0x02 | Klemme 50, ohne Klemme 15 |
| 0x03 | Klemme 50, mehr als 60 sec aktiv |
| 0x04 | Alarmausgang, Kurzschluss gegen U-Batt |
| 0x05 | Alarmausgang, Leitungsunterbrechung oder Kurzschluss gegen Masse |
| 0x06 | Akustik 1, Kurzschluss gegen U-Batt |
| 0x07 | Akustik 1, Leitungsunterbrechung oder Kurzschluss gegen Masse |
| 0x08 | Akustik 2, Kurzschluss gegen U-Batt |
| 0x09 | Akustik 2, Leitungsunterbrechung oder Kurzschluss gegen Masse |
| 0x0a | Akustik 3, Kurzschluss gegen U-Batt |
| 0x0b | Akustik 3, Leitungsunterbrechung oder Kurzschluss gegen Masse |
| 0x0c | Ti 1, Leitungsunterbrechung oder Kurzschluss gegen U-Batt |
| 0x0d | Ti 1, Kurzschluss gegen Masse |
| 0x0e | Ti 1, Signal gestoert |
| 0x0f | Ti 2, Leitungsunterbrechung oder Kurzschluss gegen U-Batt |
| 0x10 | Ti 2, Kurzschluss gegen Masse |
| 0x11 | Ti 2, Signal gestoert |
| 0x12 | Klemme 15 ohne Klemme R |
| 0x13 | Td, Leitungsunterbrechung oder Kurzschluss gegen U-Batt |
| 0x14 | Td, Kurzschluss gegen Masse |
| 0x15 | Td, Signal gestoert |
| 0x16 | Wegsignal, Leitungsunterbrechung |
| 0x17 | Wegsignal, Signal gestoert |
| 0x18 | Standheizung Kurzschluss gegen U-Batt |
| 0x19 | Standheizung Kurzschluss gegen Masse |
| 0x1a | Standlueftung Kurzschluss gegen U-Batt |
| 0x1b | Standlueftung Kurzschluss gegen Masse |
| 0x1c | Startblockierung Kurzschluss gegen U-Batt |
| 0x1d | Startblockierung Kurzschluss gegen Masse |
| 0x1e | Tacho A, Kurzschluss gegen U-Batt |
| 0x1f | Tacho A, Kurzschluss gegen Masse |
| 0x20 | Masse Tacho und Kraftstoffvorratsgeber |
| 0x21 | Kraftstoffvorratsgeber Kurzschluss gegen U-Batt |
| 0x22 | Kraftstoffvorratsgeber Kurzschluss gegen Masse |
| 0x23 | Kuehlermitteltemperatur, Leitungsunterbrechung oder Kurzschluss gegen U-Batt |
| 0x24 | Kuehlermitteltemperatur, Kurzschluss gegen Masse |
| 0x25 | Aussentemperatur Kurzschluss gegen U-Batt |
| 0x26 | Aussentemperatur Kurzschluss gegen Masse |
| 0x27 | Masse Aussentemperatur und Kuehlermitteltemperatur |
| 0x28 | Datenuebertragung zum Kombi gestoert |
| 0x29 | Datenuebertragung zum Kombi Kurzschluss gegen U-Batt |
| 0x2a | Datenuebertragung zum Kombi Kurzschluss gegen Masse |
| 0x2b | Datenuebertragung zum MID/BM gestoert |
| 0x2c | Datenuebertragung zum ZKE/GM2 gestoert |
| 0x2d | Datenuebertragung zum LKM gestoert |
| 0x2e | Datenuebertragung zur BM-Tastatur gestoert |
| 0x2f | Datenuebertragung zum Audiomodul gestoert |
| 0x30 | Datenuebertragung zur AHK gestoert |
| 0x31 | Datenuebertragung zum Navigationssystem gestoert |
| 0x32 | Datenuebertragung zur Verdecksteuerung gestoert |
| 0x33 | Datenuebertragung zum TV-Tuner gestoert |
| 0x34 | Datenuebertragung zur RDC gestoert |
| 0x35 | I-Bus, Kurzschluss gegen U-Batt |
| 0x36 | I-Bus, Kurzschluss gegen Masse |
| 0x37 | I-Bus, Datenuebertragung gestoert |
| 0x38 | EKM-Speicher fehlerhaft |
| 0x39 | Wegfahrsicherung, Code |
| 0x3a | EKM-Code fehlerhaft |
| 0x3b | Interner Fehler |
| 0xFF | unbekannter Fehlerort |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x04 |
| ZEIT_RESET | 0x08 |

### STATDIAKL

| KS | KLEMME |
| --- | --- |
| 0x01 | KL30 |
| 0x02 | KLR |
| 0x03 | KL15 |
| 0x04 | KL50 |
| 0xFF | ERROR_UNBEKANNTER_KLEMMENSTATUS |
