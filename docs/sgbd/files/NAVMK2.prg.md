# NAVMK2.prg

## General

|  |  |
| --- | --- |
| File | NAVMK2.prg |
| Type | PRG |
| Jobs | 19 |
| Tables | 7 |
| Origin | BMW TI-433 Helmich |
| Revision | 1.2 |
| Author | BMW TI-433 Helmich, BMW TI-433 Robert Kuessel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Navigationsrechner MK2 |  |  |
| ORIGIN | string | BMW TI-433 Helmich |  |  |
| REVISION | string | 1.02 |  |  |
| AUTHOR | string | BMW TI-433 Helmich, BMW TI-433 Robert Kuessel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job Navigationsrechner

_No arguments._

### STATUS_LESEN

_No description._

_No arguments._

### IDENT

Ident-Daten fuer Navigationsrechner

_No arguments._

### FS_LESEN

Fehlerspeicher lesen High Konzept nach LH Codierung/Diagnose mit Umweltbeding

_No arguments._

### IS_LESEN

Fehlerspeicher lesen High Konzept nach LH Codierung/Diagnose mit Umweltbeding

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### SPEICHER_LESEN

Lesen, welche Software geladen ist

_No arguments._

### SPEICHER_SCHREIBEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| SPRACHE_1 | int | Sprache 1 der Sprachauswahl |
| SPRACHE_2 | int | Sprache 2 der Sprachauswahl |
| SPRACHE_3 | int | Sprache 3 der Sprachauswahl |

### SPEICHER_LOESCHEN

Sprachen loeschen

_No arguments._

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### STEUERN_SELBSTTEST

Selbsttest Navigationsrechner

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen im Navigationsrechner

_No arguments._

### QUICK_ERASE

Fehlerspeicher loeschen ohne BUSY abzuwarten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

### SYSTEM_PARAMETER_LESEN

_No description._

_No arguments._

### SLEEP_MODE

Steuergeraet in Sleep-Mode versetzen

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Navigationsrechner |
| 0x02 | Radsensor |
| 0x03 | Eingaenge Peripherie |
| 0x04 | GPS Receiver reagiert nicht auf Initialisierung von NavMk2 |
| 0x05 | Temperatur zu hoch |
| 0x06 | Anwendungs Software |
| 0x07 | Display |
| 0x08 | Audio |
| 0x09 | CD-Fehler |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x40 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x3B | CARIN CD in MK2 fehlt |
| 0x4B | Video |
| 0x4F | Audio |
| 0x51 | CD Lesen |
| 0x52 | Checksum Instruction EEPROM |
| 0x53 | Checksum Sprach EEPROM |
| 0x54 | Checksum Datei Verwaltung EEPROM |
| 0x55 | Kommunikation Display Bus |
| 0x62 | Gyro Wert nicht im Toleranzbereich  |
| 0x63 | Schnittstelle Temperatur Sensor |
| 0x64 | Initialisierung GPS-Empfaenger |
| 0x65 | Luefterfuntion |
| 0x68 | 5V Spannungsversorgung CD-Player |
| 0x69 | 5V Spannungsversorgung |
| 0x6A | 12V Spannungsversorgung CD-Player |
| 0x6B | Spannungsversorgung Sensoren |
| 0x6C | Interne Temperatur zu hoch |
| 0x70 | Interne Temperatur CD-Player zu hoch |
| 0x71 | CD-Player |
| 0x72 | Slave memory |
| 0x73 | Bootcode memory |
| 0x74 | DRAM memory |
| 0x7C | CD-Player |
| 0x7D | CD-Player |
| 0x7E | CD-Player |
| 0x98 | Unerwartetes Software Ereignis, Reset Navigationsrechner |
| 0x99 | Unerwartetes Software Ereignis, Reset Navigationsrechner |
| 0xB5 | Busfehler, Reset Navigationsrechner |
| 0xB6 | Adressfehler, Reset Navigationsrechner |
| 0xFF | Unbekannter Fehlercode im Shadowspeicher |

### LAENDERCODEZIELLAND

| CODE | ZIELLAND |
| --- | --- |
| 0x00 | Deutschland |
| 0x01 | englisch UK |
| 0x02 | englisch US |
| 0x03 | Italien |
| 0x04 | Spanien |
| 0x05 | englisch Japan |
| 0x06 | Frankreich |
| 0x07 | CDN |
| 0x08 | Aus/Golf/ZA |
| 0xFF | unbekanntes Land |

### CODESPRACHEN

| CODE | SPRACHEN |
| --- | --- |
| 0x00 | deutsch maennlich |
| 0x80 | deutsch weiblich |
| 0x01 | englisch UK maennlich |
| 0x81 | englisch UK weiblich |
| 0x02 | englisch US maennlich |
| 0x82 | englisch US weiblich |
| 0x03 | italienisch maennlich |
| 0x83 | italienisch weiblich |
| 0x04 | spanisch maennlich |
| 0x84 | spanisch weiblich |
| 0x05 | englisch UK maennlich |
| 0x85 | englisch UK weiblich |
| 0x06 | franzoesisch maennlich |
| 0x86 | franzoesisch weiblich |
| 0x07 | englisch US maennlich |
| 0x87 | englisch US weiblich |
| 0x08 | englisch UK maennlich |
| 0x88 | englisch UK weiblich |
| 0xFF | keine Sprache |

### CODESOFTWARELADENTEXT

| CODE | TEXT |
| --- | --- |
| 0x00 | Software erfolgreich geladen |
| 0x01 | Software laden erforderlich |
| 0xFF | unplausibler Wert |
