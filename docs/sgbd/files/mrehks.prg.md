# mrehks.prg

## General

|  |  |
| --- | --- |
| File | mrehks.prg |
| Type | PRG |
| Jobs | 44 |
| Tables | 5 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.030 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrohydraulischer Kippständer EHKS |  |  |
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

### IDENT

Modus  : Default

_No arguments._

### STATUS_TEILENUMMER

Teilenummer lesen Byte 4-7, BCD

_No arguments._

### STATUS_HARDWARESTAND

Hardwarestand lesen Byte 8, BCD

_No arguments._

### STATUS_CODIERINDEX

Codierindex lesen Byte 9

_No arguments._

### STATUS_DIAGNOSEINDEX

Diagnoseindex lesen Byte 10

_No arguments._

### STATUS_BUSINDEX

BusIndex lesen Byte 11

_No arguments._

### STATUS_HERSTELLUNGSKALENDERWOCHE

Kalenderwoche lesen Byte 12

_No arguments._

### STATUS_HERSTELLUNGSKALENDERJAHR

Kalenderjahr lesen Byte 13

_No arguments._

### STATUS_ZULIEFERER

Zulieferer lesen Byte 14

_No arguments._

### STATUS_SOFTWARESTAND

Softwarestand lesen Byte 15

_No arguments._

### DIAGNOSE_ENDE

Rücksetzen des Steuergerätes in den normalen Betrieb

_No arguments._

### STATUS_SERIENNUMMER

Seriennummer lesen

_No arguments._

### STATUS_DAUER_MOTORLAUF

maximale Einschaltdauer Motor Byte 5-6 lesen

_No arguments._

### STATUS_EHKS_TASTER_ENTPRELLZEIT

Entprellzeit EHKS-Taster Byte 7 lesen

_No arguments._

### STATUS_ENDPOSITIONSSCHALTER_ENTPRELLZEIT

Entprellzeit Endpositionsschalter Byte 8 lesen

_No arguments._

### STATUS_SEITENSTUETZE_ENTPRELLZEIT

Entprellzeit Seitenstütze Byte 9

_No arguments._

### STATUS_BREMSLICHT_ENTPRELLZEIT

Entprellzeit Bremslicht Byte 10

_No arguments._

### STATUS_LEERLAUF_SIGNAL_ENTRELLZEIT

Entprellzeit Leerlaufsignal Byte 11

_No arguments._

### STATUS_KLEMME15_ENTRPELLZEIT

Klemme 15 Entprellzeit Byte 12

_No arguments._

### STATUS_KLEMME30_ENTPRELLZEIT

Klemme 30 Entprellzeit Byte 13

_No arguments._

### STATUS_BETAETIGUNG_MIN_PAUSE

Minimale Pause zwischen 2 Aktivierungen Byte 16-17

_No arguments._

### STATUS_SYSTEMUEBERLAST_DAUER

Dauer der Systemüberlast lesen Byte 18-19

_No arguments._

### STATUS_UEBERLAST_MIN_PAUSE

Minimale Pause nach Systemüberlast Byte 20-21

_No arguments._

### STATUS_RESET_DURCH_KL15_EIN

System Reset wenn die Zündung eingeschaltet wird lesen (Ja/Nein) Byte 22

_No arguments._

### STATUS_LED_FREQUENZ

Lesen der Led Frequenz bei Betrieb und Überlast (4 oder 2 Hz) Byte 23

_No arguments._

### STATUS_KLEMME30

Batteriespannung lesen Byte 4-5

_No arguments._

### STATUS_KLEMME15

Spannung Klemme 15 (Zündung) lesen Byte 8-9

_No arguments._

### STATUS_SCHALTER_ENDPOSITION

Status Schalter Endposition lesen Byte 16

_No arguments._

### STATUS_EHKS_TASTER

Status EHKS-Taster lesen Byte 17

_No arguments._

### STATUS_BREMSLICHTSIGNAL

Status Bremslichtsignal lesen Byte 18

_No arguments._

### STATUS_GESCHWINDIGKEIT

Geschwindigkeit lesen Byte 19

_No arguments._

### STATUS_SEITENSTUETZSCHALTER

Schalter Seitenstütze lesen Byte 20

_No arguments._

### STATUS_LEERLAUF_SIGNAL

Leerlaufsignal lesen Byte 21

_No arguments._

### STATUS_WARNLAMPE

Status EHKS-Kontrollleuchte lesen Byte 22

_No arguments._

### STATUS_RELAIS

Status EHKS-Relais lesen Byte 23

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

Fehlerspeicher Löschen

_No arguments._

### STEUERN_LED

Led ansteuern

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | 1 - Led ein, 0 - Led aus |

### STEUERN_RELAIS

EHKS Relais ansteuern

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | 1 - Relais ein, 0 - Relais aus Relais wird nach 16 sekunden automatisch abgeschaltet Wiedereinschalten erst nach einer bestimmten Zeit möglich |

### STEUERN_SELBSTTEST

Selbsttest EHKS starten

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
| 0xA0 | OKAY |
| 0xB0 | FEHLER: PARAMETER |
| 0xB1 | FEHLER: FUNKTION |
| 0xFF | FEHLER: FUNKTION NICHT DEFINIERT |
| 0x00 | FEHLER: UNBEKANNT |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Fehler Endpositionsschalter |
| 0x02 | Fehler EHKS-Taster |
| 0x03 | Fehler Bremssignal |
| 0x04 | Fehler Geschwindigkeitssignal |
| 0x05 | Fehler Signal Seitenstützenschalter |
| 0x06 | Fehler EHKS-Kontrollleuchte |
| 0x07 | Fehler Ansteuerung EHKS-Relais |
| 0x08 | Fehler Leerlaufsignal |
| 0x09 | Interner Fehler |
| 0x0A | IBUS Fehler |
| 0x0B | Unterspannung |
| 0xFF | UNBEKANNT |

### FARTTEXTE

| WERT | ARTTEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | Kurzschluss nach Plus |
| 0x02 | Kurzschluss nach Masse |
| 0x04 | Unterbrechung |
| 0x05 | Unterbrechung oder Kurzschluss nach Plus |
| 0x06 | Unterbrechung oder Kurzschluss nach Masse |
| 0x08 | Unplausibel |
| 0x10 | Speicherfehler |
| 0x20 | Tasterfehler |
| 0xFF | unbekannte Fehlerart |
| 0x21 | Fehler vorhanden |
| 0x22 | Fehler sporadisch |
| 0x23 | Fehler vorhanden und sporadisch |

### FEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Fehler nicht vorhanden |
| 0x01 | Fehler vorhanden |
| 0x02 | Fehler sporadisch |
| 0x03 | Fehler vorhanden und sporadisch |
| 0xFF | Status: unbekannt |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen => Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe => Lear |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Continental Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO => BERU |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE |
| 0x41 | Megamos |
| 0x42 | TRW |
| 0x43 | Wabco |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0x47 | ZF |
| 0x48 | GMPT |
| 0x49 | Harman Kardon |
| 0x50 | Remes |
| 0x51 | ZF Lenksysteme |
| 0x52 | Magneti Marelli |
| 0x53 | Borg Instruments |
| 0x54 | GETRAG |
| 0x55 | BHTC (Behr Hella Thermocontrol) |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon |
| 0x58 | Autoliv |
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0xFF | unbekannter Hersteller |
