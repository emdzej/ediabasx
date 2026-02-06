# NAVIGAT.prg

## General

|  |  |
| --- | --- |
| File | NAVIGAT.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 4 |
| Origin | BMW TP-422 Helmich |
| Revision | 2.6 |
| Author | BMW TP-422 Helmich, BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Navigationsrechner |  |  |
| ORIGIN | string | BMW TP-422 Helmich |  |  |
| REVISION | string | 2.06 |  |  |
| AUTHOR | string | BMW TP-422 Helmich, BMW TP-422 Teepe |  |  |
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

Spezielle Eingaenge lesen

_No arguments._

### IDENT

Ident-Daten fuer Navigationsrechner

_No arguments._

### FS_LESEN

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

"System Configuration lesen"

_No arguments._

### SPEICHER_SCHREIBEN

RDS und GPS Configuration schreiben

| Name | Type | Description |
| --- | --- | --- |
| RDS_CONFIGURATION | string | Nach Telegrammspezifikation "0" oder "R" 0: ohne RDS, R: mit RDS |
| GPS_CONFIGURATION | string | Nach Telegrammspezifikation "0","M" oder "T" 0: ohne GPS, M: Magnavox, T: Trimble |

### SELBSTTEST

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

### KALIBRIERUNG_LOESCHEN

Loeschen der Kalibrierung ds NAV-Systems

_No arguments._

### KALIBRIERUNG_LESEN

Loeschen der Kalibrierung ds NAV-Systems

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
| 0x10 | Hardwarefehler im Navigationsrechner |
| 0x11 | Hardwarefehler im Kompass-System |
| 0x13 | Hardwarefehler im Radsensor-System |
| 0x14 | Temperatur im Navigationsrechner zu hoch |
| 0x15 | CD-Fehler |
| 0x16 | Fehler in der Navigations-Software |
| 0x17 | Kalibrierfehler |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x40 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT |
| --- | --- |
| 0x00 | Kein Eintrag im Shadowspeicher |
| 0x60 | Rad-Sensor interface defekt |
| 0x61 | Hardwarefehler im Kompass-System |
| 0x64 | Fehler im GPS-Senor interface |
| 0x65 | Luefter ist defekt |
| 0x66 | Fehler beim Programmiern der EEPROMs durch die Spannungsvers. |
| 0x68 | 5V Versorgung fuer CD-player defekt |
| 0x69 | 5V Versorgung fuer NAV-Rechner defekt |
| 0x6A | 12V Versorgung fuer CD-player defekt |
| 0x6B | Spannungsversorgung fuer Sensor defekt |
| 0x6C | Temperatur im NAV-Rechner zu hoch |
| 0x70 | Temperatur im CD-player zu hoch |
| 0x71 | CD-player interner Fehler |
| 0x73 | Fehler im Boot-ROM |
| 0x74 | Fehler im DRAM |
| 0x75 | Fehler im FEPROM |
| 0x77 | Fehler im EEPROM |
| 0x78 | Fehler Vorwaerts-/Rueckwaertsgang Erkennung |
| 0x79 | Interner Fehler, kann ingnoriert werden |
| 0x7A | Interner Fehler, kann ingnoriert werden |
| 0x7B | GPS ein/aus Fehlfunktion |
| 0x7C | CD-player interner Fehler |
| 0x7D | CD-player interner Fehler |
| 0x7E | CD-player interner Fehler |
| 0x80 | Status Heckscheibenheizung falsch |
| 0x85 | Keine Impulse an beiden Raedern |
| 0x86 | Keine Impulse vom linken Rad |
| 0x87 | Keine Impulse vom rechten Rad |
| 0x89 | Negative Impulse vom linken Rad |
| 0x8A | Negative Impulse vom rechten Rad |
| 0x8B | Sensoranschluss falsch |
| 0x8C | Kompassanschluss falsch |
| 0x8D | Keine Linkskurve durchgefuehrt |
| 0x8E | Kompass ausserhalb Bereich |
| 0x8F | Kompass nahe am Grenzbereich |
| 0x95 | Zu wenig Messwerte |
| 0x96 | Zu wenig Messwerte in einigen Richtungen |
| 0x97 | Falsche Ellipsen-Achse |
| 0x98 | Falsche Ellipsen-Groesse |
| 0x99 | Zu viele gestoerte Messwerte |
| 0x9A | Alle Kompasswerte gleich |
| 0x9B | Alle Kompass X-Werte gleich |
| 0x9C | Alle Kompass Y-Werte gleich |
| 0x9F | Fahrgeschwindidkeit zu hoch |
| 0xFF | Unbekannter Fehler im Shadowspeicher |
