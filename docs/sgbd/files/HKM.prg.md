# HKM.prg

## General

|  |  |
| --- | --- |
| File | HKM.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 5 |
| Origin | BMW TI-430 Stefan Bendel |
| Revision | 1.1 |
| Author | BMW TI-430 Gerd Huber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Heckklappen-Modul fuer E38 |  |  |
| ORIGIN | string | BMW TI-430 Stefan Bendel |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | BMW TI-430 Gerd Huber |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer Heckklappen-Modul automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer HKM

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

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

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_IO

Stati aller Signale des Heckklappen-Moduls

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs v. HKM

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### COD_LESEN

Auslesen der Codierdaten des HKM

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
| 0xXY | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x90 | Interner Fehler im Heckklappen-Modul: Prozessor |
| 0x91 | Interner Fehler im Heckklappen-Modul: Prozessor ROM |
| 0x92 | Interner Fehler im Heckklappen-Modul: Taktgeber |
| 0x93 | Ansteuerung: Relais klebt bei Oeffnen |
| 0x94 | Ansteuerung: Relais versagt bei Oeffnen |
| 0x95 | Ansteuerung: Relais klebt bei Schliessen |
| 0x96 | Ansteuerung: Relais versagt bei Schliessen |
| 0xA0 | Ventil 1: Kurzschluss oder Leerlauf |
| 0xA1 | Neigungsschalter oder Leitung Neigungsschalter |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### BITS

| ZELLE | BYTE | MASK | VALUE | NAME | TEXT |
| --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0x01 | 0x01 | TOEHKK | Taster fuer Heckklappe Innenseite |
| 1 | 1 | 0x02 | 0x02 | HKNG2 | Heckklappen-Neigungsschalter 2 |
| 3 | 1 | 0x08 | 0x08 | TOEHK | Taster Oeffnen Heckklappe |
| 4 | 1 | 0x10 | 0x10 | HKNG1 | Heckklappen-Neigungsschalter 1 |
| 21 | 3 | 0x20 | 0x20 | HKVENT | Heckklappe Hydraulikventil |
| 22 | 3 | 0x40 | 0x40 | HKPA | Heckklappe Hydraulikpumpe Richtung auf |
| 23 | 3 | 0x80 | 0x80 | HKPZ | Heckklappe Hydraulikpumpe Richtung zu |
| 34 | 5 | 0x04 | 0x04 | KL50 | Klemme 50 |
| 35 | 5 | 0x08 | 0x08 | HKK | Heckklappenkontakt |
| 36 | 5 | 0x10 | 0x10 | TOEHKI | Taster Oeffnen Heckklappe Innenraum |
| 38 | 5 | 0x40 | 0x40 | HKFUNK | Funkschluessel Heckklappen-Taste |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
