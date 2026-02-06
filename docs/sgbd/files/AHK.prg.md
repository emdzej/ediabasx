# AHK.prg

## General

|  |  |
| --- | --- |
| File | AHK.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 4 |
| Origin | BMW TP-421 Hirsch |
| Revision | 1.64 |
| Author | BMW TP-421 Hirsch |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktive Hinterachskinematik E31 |  |  |
| ORIGIN | string | BMW TP-421 Hirsch |  |  |
| REVISION | string | 1.64 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch |  |  |
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

### STATUS_LESEN

Status Eingaenge AHK

_No arguments._

### STATUS_FUNKTIONSAUSFUEHRUNG

Auslesen des Status einer Funktionsausfuehrung

_No arguments._

### AKTIVE_DIAGNOSE

Aktive Diagnose einschalten

_No arguments._

### K_ZAHL_SPEICHERN

Speichern der K-Zahl

_No arguments._

### O_STELLUNG_LENKRADW_SPEICHERN

Aktuelle Stellwegistposition als 0-Lenkradwinkel speichern

_No arguments._

### O_STELLUNG_HINTERRADLENKW_SPEICHERN

Aktuelle Stellwegistposition als 0-Hinterradlenkwinkel speichern

_No arguments._

### DIGITALE_FKT_SCHALTEN

Schalten digitaler Funktionen (einzelne Ventile und Fehlerlampe)

| Name | Type | Description |
| --- | --- | --- |
| STATUS | string | EIN (Einschalten), AUS (Ausschalten) |

### POSITION_ANFAHREN

Anfahren einer vorgegebenen Ist-Position

| Name | Type | Description |
| --- | --- | --- |
| POSITION | int | Anzufahrende Position in 0.001 mm Gueltige Werte: -10 mm bis 10 mm |
| GESCHW | int | Verstellgeschwindigkeit in 0.01 mm/s Gueltige Werte: 1 mm/s bis 200 mm/s |
| ANZAHL | int | Anzahl der einfachen Wege Gueltige Werte: 1 bis 127 |
| FEHLERPRF | string | Fehlerpruefung Gueltige Werte: EIN, AUS |

### MECHANISCHE_MITTE_STELLEN

Stellgied in die mechanische Mitte stellen

_No arguments._

### SYSTEM_DEAKTIVIEREN

System dauerhaft deaktivieren (absolute Hochlaufsperre setzen)

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Steuergeraetefehler |
| 0x06 | Stack Ueberlauf |
| 0x07 | Zykluszeitueberlauf |
| 0x10 | Kommunikationsfehler Zeitlimit |
| 0x11 | Synchronisationsfehler Zeitlimit |
| 0x1D | Feinpotentiometer Abgleich negative Referenzspannung |
| 0x1E | Feinpotentiometer ( 1 ) Fehler 90 Grad |
| 0x21 | Spannung Schleifer 1 Feinpotentiometer ( 1 ) |
| 0x22 | Spannung Schleifer 2 Feinpotentiometer ( 2 ) |
| 0x23 | Lenkradwinkelstatistik 0-Punkt |
| 0x25 | Lenkradwinkel > Maximum |
| 0x27 | Lenkradwinkel Vergleichsfehler P1 zu P2 |
| 0x28 | Lenkradwinkel Abgleich Daten |
| 0x29 | Feinpotentiometer - Abgleich 90 Grad |
| 0x2A | Negative Referenzspannung Feinpotentiometer > Maximum |
| 0x2B | Negative Referenzspannung Feinpotentiometer < Minimum |
| 0x2C | LRW Abgleich Fehlerfehler |
| 0x2D | Klassierung nicht eindeutig |
| 0x2F | Aenderung Lenkradwinkel > Maximum |
| 0x30 | Feinpotentiometer Abgleich unvollstaendig |
| 0x31 | Feinpotentiometer Abgleich Einbaulage |
| 0x32 | Radsensor vorne links VLV low Fehler |
| 0x33 | Radsensor vorne links VLV high Fehler |
| 0x34 | Radsensor vorne rechts VRV low Fehler |
| 0x35 | Radsensor vorne rechts VRV high Fehler |
| 0x36 | (Tacho 'A' Signal) VTACHO  low Fehler |
| 0x37 | (Tacho 'A' Signal) VTACHO  high Fehler |
| 0x39 | V - Abgleich Grenzen |
| 0x3A | V - Abgleich Daten |
| 0x3B | Vref - Vergleichsfehler P1 zu P2 |
| 0x3C | Stellweg Soll - Ist Toleranzfehler |
| 0x3E | Stellwegsensor 1 Schleiferspannung |
| 0x3F | Stellwegsensor 1 negative Referenzspannung > Maximum |
| 0x40 | Stellwegsensor 2 Schleiferspannung |
| 0x41 | Stellwegsensor 1 negative Referenzspannung < Minimum |
| 0x43 | Stellwegsensor 1 Abgleich Einbaulage |
| 0x44 | Stellwegsensor 2 Abgleich Einbaulage |
| 0x45 | Stellweg - Soll Vergleichsfehler P1 zu P2 |
| 0x46 | Abgleichfehler Differenz zw. Sensor 1 und Sensor 2 |
| 0x47 | Stellweg - Ist Abgleich Daten |
| 0x48 | Stellweg - Ist - Sensor 1 / 2 Vergleichsfehler |
| 0x49 | Stellweg - Ist - Differenz bei Klemm - Test |
| 0x4A | Stellwegsensor 2 positive Referenzspannung > Maximum |
| 0x4B | Stellwegsensor 2 positive Referenzspannung < Minimum |
| 0x4F | Stellweg - Ist Differenz |
| 0x50 | Fehlerlampe defekt |
| 0x64 | I - Bus defekt |
| 0x65 | EKM antwortet nicht |
| 0x69 | VLV - Vergleichsfehler P1 zu P2 |
| 0x6A | VRV - Vergleichsfehler P1 zu P2 |
| 0x6B | VTacho - Vergleichsfehler P1 zu P2 |
| 0x6E | EEProm Speicherfehler |
| 0x6F | EEProm dauernd busy |
| 0x73 | Oeldruck - Sensor - Spannung < Minimum |
| 0x74 | Oeldruck - Sensor positive Referenzspannung < Minimum |
| 0x75 | Oeldruck - Sensor positive Referenzspannung > Maximum |
| 0x77 | Oeldruck - Sensor - Spannung > Maximum |
| 0x78 | Aktivierungsdruck verloren |
| 0x79 | Keine Druckaenderung in 60 Sekunden |
| 0x7A | Mittler Speicherladezeit zu lang |
| 0x7B | Oeldruckwert kleiner Klemmschwelle |
| 0x7C | Oeldruckwert kleiner Aktivierungsschwelle |
| 0x7D | Oeldruckwert kleiner Notsteuerschwelle |
| 0x7E | Mittler Speicherentladezeit zu kurz |
| 0x7F | Oeldruck groesser Speicherabschaltschwelle |
| 0x80 | Einschaltdauer Speicherladeventil zu lang |
| 0x81 | Oeldruckvergleichsfehler P1 zu P2 |
| 0x82 | Stromregelfehler fuer Proportionalventilspule 1 |
| 0x83 | Stromregelfehler fuer Proportionalventilspule 2 |
| 0x84 | MSV-Fehler bei Klemmleitungstest |
| 0x85 | HSV1-Fehler bei Klemmleitungstest |
| 0x86 | HSV2-Fehler bei Klemmleitungstest |
| 0x87 | DV-Fehler bei Klemmleitungstest |
| 0x88 | PV1-Fehler bei Klemmleitungstest |
| 0x89 | PV2-Fehler bei Klemmleitungstest |
| 0x8A | PV1 + PV2 - Strom im Betrieb > Maximum |
| 0x8B | PV - Strom Abgleich Grenzen |
| 0x8C | PV - Strom Abgleich Daten |
| 0x96 | Batteriespannng < 9 V |
| 0x97 | Batteriespannng < 10 V |
| 0x98 | Batteriespannng < 11 V |
| 0x99 | Batteriespannng > 16 V |
| 0x9A | Batteriespannng > 18 V |
| 0x9D | Batteriespannng Abgleich Grenzen |
| 0x9E | Batteriespannng Abgleich Daten |
| 0x9F | Batteriespannng Vergleichsfehler P1 zu P2 |
| 0xA0 | Proportionalventil 1 Fehler |
| 0xB0 | Proportionalventil 2 Fehler |
| 0xC0 | Mechanisches Sperrventil |
| 0xD0 | Hydraulisches Sperrventil 1 |
| 0xE0 | Hydraulisches Sperrventil 2 |
| 0xF0 | Speicherladeventil |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Fehler momentan nicht vorhanden |
| 0x02 | Fehler momentan vorhanden |
| 0x03 | Fehler trat bei ausgeschaltetem Ventil auf |
| 0x04 | Fehler trat bei eingeschaltetem Ventil auf |
| 0x05 | Letzter Fehler der die Klemmung ausloeste |
| 0x06 | Fehler aus Fehlerspeicherblock |

### FUMWELTTEXTE

| UWNR | UWTEXT |
| --- | --- |
| 0x01 | Softwarezustand |
| 0x02 | Lenkradwinkel |
| 0x03 | Stellweg-Ist |
| 0x04 | Stellweg-Soll |
| 0x05 | Fahrgeschwindigkeit |
| 0x06 | Hydraulikdruck |
| 0x07 | Betriebsspannung |

### SOFTWAREZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset |
| 0x01 | Minimalzyklus |
| 0x02 | Test Minimalsystem |
| 0x03 | Power-Up-Check |
| 0x04 | Fehlerspeicherauswertung |
| 0x05 | Passivzyklus |
| 0x06 | Warten auf Kl. 15 |
| 0x07 | Stellgliedpruefungen |
| 0x08 | Uebergang Power-Up-Fahrzyklus |
| 0x09 | Fahrzyklus |
| 0x0A | Notsteuerung |
| 0x0B | Aktive Diagnose |
| 0x0C | Klemminterrupt |
| 0x0D | elektrische Ventilpruefung |
| 0x0E | Warten auf Pruefbedingungen |
| 0x0F | nicht belegt |
| 0xXX | EE-Prom oder Abgleichwerte defekt |
