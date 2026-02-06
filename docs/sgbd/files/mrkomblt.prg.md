# mrkomblt.prg

## General

|  |  |
| --- | --- |
| File | mrkomblt.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 9 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.030 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kombiinstrument K1200 |  |  |
| ORIGIN | string | I+ME Actia GmbH, Keck |  |  |
| REVISION | string | 1.030 |  |  |
| AUTHOR | string | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### SEC_ACCESS

SG für erweiterte Diagnose freischalten Simple Protection Mode Algorithmus

| Name | Type | Description |
| --- | --- | --- |
| LEVEL | int | Security Level Werte 1 oder 2 |

### IDENT

Lesen der Teilenummer Byte 4-7

_No arguments._

### STATUS_TEILENUMMER

Lesen der Teilenummer Byte 4-7

_No arguments._

### STATUS_HARDWARESTAND

Lesen des Hardwarestandes Byte 8

_No arguments._

### STATUS_CODIERBARKEIT

Lesen der Codierbarkeit Byte 9

_No arguments._

### STATUS_DIAGNOSEINDEX

Lesen des Diagnoseindex Byte 10

_No arguments._

### STATUS_BUSINDEX

Lesen des BusIndex Byte 11

_No arguments._

### STATUS_HERSTELLUNGSKALENDERWOCHE

Lesen der Kalenderwoche Byte 12

_No arguments._

### STATUS_HERSTELLUNGSKALENDERJAHR

Lesen des Kalenderjahrs Byte 13

_No arguments._

### STATUS_ZULIEFERER

Lesen des Zulieferers Byte 14

_No arguments._

### STATUS_SOFTWARESTAND

Lesen des Softwaretandes Byte 15

_No arguments._

### FS_ANZAHL

Fehlerspeicher lesen (alle Fehler) Security Access Level 1 notwendig

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler)

_No arguments._

### FS_LESEN_FELD

Fehlerspeicher lesen (ein Fehlerfeld)

| Name | Type | Description |
| --- | --- | --- |
| NUMMER | int | Eingabe Fehler Feld 1..3 |

### FS_LOESCHEN

Fehlerspeicher Löschen Security Access Level 2 notwendig

_No arguments._

### STATUS_AD_KANAL

analoge A/D Werte lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_DREHZAHL

aktuelle Drehzahl lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_GESCHWINDIGKEIT

aktuelle Geschwindigkeit lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_VERBRAUCH

Verbrauch lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_DIGITAL_EA

alle digitalen Ein und Ausgänge lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_TANKINHALT

Tankinhalt lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_TEMP_MOTOR

angezeigte Kühlmittel Temperatur lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_GANG

Anzeige aktueller Gang Security Access Level 1 notwendig

_No arguments._

### STATUS_RESERVEANZEIGE

Warnung TankAnzeige Security Access Level 1 notwendig

_No arguments._

### STATUS_TEMP_LUFT

Lufttemperatur lesen Security Access Level 1 notwendig

_No arguments._

### STATUS_TASTER_BORDCOMPUTER

Zustand Taster Bordcomputer auslesen Security Access Level 1 notwendig

_No arguments._

### STATUS_BATTERIE

Batteriespannung, Radio Eingang, Zündung lesen Security Access Level 1 notwendig

_No arguments._

### STEUERN_DREHZAHLMESSER

Drehzahlmesser ansteuern Security Access Level 1 notwendig

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit Ansteuerung in Sekunden, 1..20 Sekunden Vorsicht- bei 20Sek-Angabe wird erst nach 20Sek Result ausgegeben |

### STEUERN_GESCHWINDIGKEIT

Geschwindigkeit ansteuern Security Access Level 1 notwendig

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit Ansteuerung in Sekunden, 1..20 Sekunden Vorsicht - bei 20Sek-Angabe wird erst nach 20Sek Result ausgegeben |

### STEUERN_TANK_ANZEIGE

Tankanzeige ansteuern Security Access Level 1 notwendig

_No arguments._

### STEUERN_KUEHLMITTEL_ANZEIGE

Kühlmittel Anzeige ansteuern Security Access Level 1 notwendig

_No arguments._

### STEUERN_GANG_ANZEIGE

Ganganzeige ansteuern Security Access Level 1 notwendig

_No arguments._

### STEUERN_SELBSTTEST_AKTIVIEREN

Selbst-Test starten Security Access Level 1 notwendig

_No arguments._

### STEUERN_SELBSTTEST_DEAKTIVIEREN

Selbst-Test starten Security Access Level 1 notwendig

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### ECU_RESET

_No description._

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | FEHLER: ARGUMENTE |
| 0x03 | FEHLER: AUSSERHALB BEREICH |
| 0x04 | FEHLER: ZUGRIFF VERWEIGERT |
| 0x05 | FEHLER: FORMATFEHLER DATEN (NICHT HEX) |
| 0x08 | FEHLER: ZUGRIFF VERWEIGERT |
| 0xA0 | OKAY |
| 0xB0 | FEHLER: PARAMETER |
| 0xB1 | FEHLER: FUNKTION |
| 0xFF | FEHLER: AUSFUEHRUNG NICHT MOEGLICH |
| 0x00 | FEHLER: UNBEKANNT |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | EHKS Fehler |
| 0x02 | IBUS Fehler |
| 0x03 | Kühlmitteltemperatur Fehler |
| 0x04 | Kraftstoffüllstand Fehler |
| 0x05 | Falscher Key |
| 0x06 | Umgebungstemperatur Fehler |
| 0x07 | Geschwindigkeitswert Fehler |
| 0x08 | Überspannung |
| 0x09 | Unterspannung |
| 0x0A | Power On Reset |
| 0x0B | Verbrauchwert Fehler |
| 0x0C | Radio Fehler |
| 0x10 | Interner Fehler |
| 0xFF | unbekannt |

### FARTTEXTE

| WERT | ARTTEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | Kurzschluss nach Plus |
| 0x02 | Kurzschluss nach Masse |
| 0x04 | Unterbrechung |
| 0x05 | Kurzschluss nach Plus oder Unterbrechung |
| 0x08 | Unplausibel |
| 0xFF | unbekannte Fehlerart |
| 0x21 | Fehler vorhanden |
| 0x22 | Fehler sporadisch |
| 0x23 | Fehler vorhanden und gespeichert |

### FEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Fehler nicht vorhanden |
| 0x01 | Fehler vorhanden |
| 0x02 | Fehler sporadisch |
| 0x03 | Fehler vorhenden und gespeichert |
| 0xFF | unbekannt |

### FEHLERCODETEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | TEST VOLLSTAENDIG |
| 0x01 | TEST UNVOLLSTAENDIG |
| 0xFF | UNBEKANNT |

### WARNLAMPE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0xFF | UNBEKANNT |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x46 | Gemel |
| 0x56 | Siemens VDO Automotive |
| 0xFF | Hersteller unbekannt |

### VERBRAUCH

| NR | TEXT |
| --- | --- |
| 0x00 | L/100km |
| 0x01 | mpgUK |
| 0x02 | mpgUS |
| 0xFF | UNBEKANNT |

### GANG

| NR | TEXT |
| --- | --- |
| 0x00 | Leerlauf |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x07 | 7. Gang |
| 0x08 | 8. Gang |
| 0xFF | UNBEKANNT |
