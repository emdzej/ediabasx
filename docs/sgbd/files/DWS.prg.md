# DWS.prg

## General

|  |  |
| --- | --- |
| File | DWS.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 8 |
| Origin | BMW TI-431 Stadlhofer |
| Revision | 1.7 |
| Author | BMW TI-433 Krueger, BMW TI-433 Winkler, GTI Peter Gross-Grueber, BMW TI-433 Kuessel |
| ECU Comment | Info_Kommentar |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Deflation Warning System DWS |  |  |
| ORIGIN | string | BMW TI-431 Stadlhofer |  |  |
| REVISION | string | 1.7 |  |  |
| AUTHOR | string | BMW TI-433 Krueger, BMW TI-433 Winkler, GTI Peter Gross-Grueber, BMW TI-433 Kuessel |  |  |
| COMMENT | string | Info_Kommentar |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer Reifendruck-Control automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten fuer DWS

_No arguments._

### FS_QUICK_LESEN

Quicktest High-Konzept nach Lastenheft

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Speichersegment Bereich: 0x00-0xFF |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 16 |

### STATUS_IO

Auslesen der Statusbytes

_No arguments._

### STEUERN_DIGITAL

Ansteuern einiger Signale

| Name | Type | Description |
| --- | --- | --- |
| START_STANDARD | int | 1 = Standardisierung starten |
| BANDMODE_CLR | int | 1 = Bandmode loeschen |
| BANDMODE_SET | int | 1 = Bandmode setzen |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNKTION |
| 0xFF | ERROR_ECU_NOT_ACKNOWLEDGE |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x37 | Dunlop |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | ROM-Fehler |
| 0x02 | RAM-Fehler |
| 0x03 | EEPROM-Fehler (W/R,CHKSUM) |
| 0x04 | System-Fehler (main loop) |
| 0x05 | System-Fehler (stack) |
| 0x06 | DWS-Taster Masseschluss (Plausibilitaet |
| 0x07 | Geschwindigkeitsimpulse VL |
| 0x08 | Geschwindigkeitsimpulse VR |
| 0x09 | Geschwindigkeitsimpulse HL |
| 0x0A | Geschwindigkeitsimpulse HR |
| 0x0B | Kbus (60s kein Empfang bei KL15) |
| 0x0C | EEPROM: write check (standard) |
| 0xFF | unbekannter Fehlerort |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xFF | 0xFF | 0x00 | 0xFF | 0x01 | 0xFF | 0x02 | 0xFF | 0x03 | 0xFF | 0x04 | 0xFF | 0x05 | 0xFF | 0x06 | 0xFF | 0x07 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Batterieschluss |
| 0x01 | Masseschluss |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Wert unplausibel |
| 0x04 | -- |
| 0x05 | -- |
| 0x06 | Fehler momentan vorhanden |
| 0x07 | Fehler sporadisch |
| 0xFF | -- |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xFF | 0x8 | 0x3 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x01 | Geschwindigkeit | km/h |
| 0x02 | Batteriespannung | Volt |
| 0x03 | Status Standardisierung | 1=ein     / 0=aus    |
| 0x04 | Status Fehlerspeicherkonzept | 1=disable / 0=enable |
| 0x05 | Status Fehlerauswirkung | 1=disable / 0=enable |
| 0x06 | Bandmode | 1=ja      / 0=nein   |
| 0x07 | Systemfunktion aktiv | 1=ja      / 0=nein   |
| 0x08 | Blindphase | 1=ja      / 0=nein   |
| 0xFF | unbekannte Umweltbedingung |  |

### LN

| VEL | ROH |
| --- | --- |
| 0x00 | 0x00 |
| 0x19 | 0xBB8 |
| 0x32 | 0xBB8 |
| 0x4b | 0xBB8 |
| 0x5A | 0xBB8 |
| 0x6C | 0xBB8 |
| 0x7E | 0xBB8 |
| 0x69 | 0xBB8 |
| 0xb0 | 0xBB8 |
| 0xbb | 0xBB8 |
