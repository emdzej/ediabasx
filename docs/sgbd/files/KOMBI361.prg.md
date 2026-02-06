# KOMBI361.prg

## General

|  |  |
| --- | --- |
| File | KOMBI361.prg |
| Type | PRG |
| Jobs | 18 |
| Tables | 5 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.6 |
| Author | BMW TP-421 Teepe, BMW TP-421 Drexel, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kombi E36 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.06 |  |  |
| AUTHOR | string | BMW TP-421 Teepe, BMW TP-421 Drexel, BMW TI-433 Dennert |  |  |
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

### FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### CODIERUNG_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### STATUS_LESEN

Auslesen der Stati

| Name | Type | Description |
| --- | --- | --- |
| K_ZAHL | int | gleich STAT_K_ZAHL |
| KVA | int | gleich STAT_KVA |
| MOTORFAKTOR | int | gleich STAT_MOTORFAKTOR |

### EEPROM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00) der Adresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 16 !) die ausgelesen werden sollen |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | Anzahl der Datenbytes: 1 bis 16 (0x10) |
| ADRESSE_HIGH | int | Startadresse high |
| ADRESSE_LOW | int | Startadresse low |

### STEUERN_ANALOG

Vorgeben der Analog-Signale

| Name | Type | Description |
| --- | --- | --- |
| AUSGANG | string | anzusteuernder Ausgang |
| WERT | int | Tastverhaeltnis anzusteuernder Ausgang |

### STEUERN_TACHO_A

Vorgeben des Tacho-A-Signals

| Name | Type | Description |
| --- | --- | --- |
| GESCHWINDIGKEIT | int | gewuenschte Vorgabegeschwindigkeit |

### SELBSTTEST

Vorgeben des Tacho-Selbsttests

_No arguments._

### STEUERN_SELBSTTEST

Vorgeben des Tacho-Selbsttests

_No arguments._

### STEUERN_DIGITAL

Vorgeben der Digital-Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| AUSGANG | string | anzusteuernder Ausgang |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Interner Fehler (RAM) |
| 0x05 | EEPROM Lesefehler |
| 0x07 | K-Zahl fehlerhaft |
| 0x08 | A/D-Wandler, Wandlerzeit ueberschritten |
| 0x09 | Bordnetzfehler, Kl.15 high / Kl.R low |
| 0x0a | Klemme 15 Ueberspannung |
| 0x0D | Ueberstrom Messinstrumente |
| 0x0E | PCVA thermisch ueberlastet |
| 0x0F | SIA-Eingang defekt |
| 0x10 | Tankgeber defekt |
| 0x11 | Kuehlmitteltemperaturgeber defekt |
| 0x13 | Oeltemperaturgeber defekt |
| 0x15 | 5-Volt-Spannung gestoert |
| 0x16 | KOMBI-Taste defekt |
| 0x18 | Geschwindigkeits-Signal gestoert |
| 0x19 | Drehzahlsignal gestoert |
| 0x1A | Einspritzsignal gestoert |
| 0x1B | Bremsbelagverschleiss |
| 0x1c | Tankreservekontakt |
| 0x1E | Fahrertuerkontakt |
| 0x1F | Zuendschluesselkontakt |
| 0xff | unbekannter Fehler |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Kurzschluss gegen U-Batt |
| 0x01 | Kurzschluss gegen Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | ungueltiger Arbeitsbereich |
| 0x04 | sporadischer Fehler |
| 0x05 | statischer Fehler |
| 0xFF | unbekannte Fehlerart |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| ZEIT_RESET | 0x04 |
| unbekannt | 0x00 |

### STEUERNANALOG

| SELECTOR | BYTE |
| --- | --- |
| TACHO | 0x01 |
| DZM | 0x02 |
| KVA | 0x03 |
| TANK | 0x04 |
| TEMP | 0x05 |
| OELTEMP | 0x06 |
| IK_LCD | 0x07 |
| unbekannt | 0x00 |

### STEUERNDIGITAL

| SELECTOR | BYTE |
| --- | --- |
| GONG_T3 | 0x01 |
| TANKRES | 0x02 |
| UEBERTEMP | 0x04 |
| BVA | 0x08 |
| GURT | 0x10 |
| EGS | 0x20 |
| AKUSTIK | 0x40 |
| ALLE_AN | 0x7F |
| ALLE_AUS | 0x00 |
| unbekannt | 0x00 |
