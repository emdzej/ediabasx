# GR2.prg

## General

|  |  |
| --- | --- |
| File | GR2.prg |
| Type | PRG |
| Jobs | 19 |
| Tables | 3 |
| Origin | BMW TP-421 Winkler |
| Revision | 1.16 |
| Author | BMW TP-421 Baumgartner, BMW TP-421 Winkler |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Geschwindigkeitsregelung II |  |  |
| ORIGIN | string | BMW TP-421 Winkler |  |  |
| REVISION | string | 1.16 |  |  |
| AUTHOR | string | BMW TP-421 Baumgartner, BMW TP-421 Winkler |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer GRII E38

_No arguments._

### IDENT

Ident-Daten fuer GRII E38

_No arguments._

### FS_QUICK_LESEN

Quicktest High-Konzept nach Lastenheft (mit Abwandlungen)

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

### HARDWARETEST

Hardwaretest GRII

_No arguments._

### SPEICHER_LESEN

Speicher lesen GRII

| Name | Type | Description |
| --- | --- | --- |
| H_ADR | string | High- Byte Adresse des Speicherbereichs |
| L_ADR | string | LOW- Byte Adresse des Speicherbereichs |
| ANZ_BYTE | int | Anzahl auszulesender Bytes |

### CODIERDATEN_LESEN

Codierdaten lesen GRII

_No arguments._

### STATUS_LESEN

Statusfeld lesen GRII

_No arguments._

### STATUS_FGRMOT_PLUS

Ausgangsspannung Motorendstufe Plus

_No arguments._

### STATUS_FGRPOT_PLUS

Referenzspannung Stellglied PLUS

_No arguments._

### STATUS_FGRMOT_MINUS

Ausgangsspannung Motorendstufe Minus

_No arguments._

### STATUS_KU_PLUS

Ausgangsspannung Kupplungsendstufe PLUS

_No arguments._

### STATUS_SPANNUNG

Versorgungsspannung

_No arguments._

### STATUS_LEITUNG_MFL

Status Datenleitung MFL

_No arguments._

### STATUS_INKREMENTE

Statusfeld INKREMENTE lesen bei GRII

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
| 0x01 | Watchdog-Error, Fehlerhaftes WD-System |
| 0x02 | Fehler im RAM bei Initialisierung |
| 0x03 | Fehlerhafte Checksumme der Codierdaten |
| 0x05 | Unplausible Eingangssignalerkennung ( Main- Switch)  |
| 0x06 | Vmin- Fehler, Unplausibilitaet zwischen Hard-/Software- Vmin  |
| 0x07 | Unplaus. zwischen Hard- und Software Abschaltspeicher |
| 0x10 | Fehler Kupplungszustand zu ku_plus Plausibilitaet |
| 0x11 | Stellglied hat max. Abschaltzeit ueberschritten |
| 0x12 | Fehler bei Reglerueberwachung |
| 0x13 | P+ - Spannung im ungueltigen Spannungsbereich |
| 0x21 | Fehler Togglebit |
| 0x30 | Bereichsueberschreitung des Kodierdatenpointers |
| 0xFF | unbekannter Fehlerort |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
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
| 0xFF | unbekannter Hersteller |
