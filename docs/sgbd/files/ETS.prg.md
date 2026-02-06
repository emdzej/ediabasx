# ETS.prg

## General

|  |  |
| --- | --- |
| File | ETS.prg |
| Type | PRG |
| Jobs | 19 |
| Tables | 4 |
| Origin | BMW TP-421 Winkler H.-J. |
| Revision | 1.00 |
| Author | BMW TP-421 Winkler H.-J. |
| ECU Comment | Vorversion |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronischer Trennschalter |  |  |
| ORIGIN | string | BMW TP-421 Winkler H.-J. |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TP-421 Winkler H.-J. |  |  |
| COMMENT | string | Vorversion |  |  |
| PACKAGE | string | 1.26 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer ETS automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten fuer ETS

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SPEICHER_LESEN

Lesen des Speichers

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 32 |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |

### SPEICHER_SCHREIBEN

Beschreiben des Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| WERT | int | Zu speicherder Wert Bereich: 0x00-0xFF |

### CODIERDATEN_LESEN

Lesen der Codierdaten

_No arguments._

### CODIERDATEN_SCHREIBEN

Schreiben der Codierdaten

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | Zu speichernde Daten (16 Byte, Bereich 0x00-0xFF), die einzelnen Bytes muessen durch Komma getrennt sein. Beispiel: "1,2,03,0x04,0x05..." |

### STATUS_DIGITAL_LESEN

Lesen der Digitalwerte

_No arguments._

### STATUS_ANALOG_LESEN

Lesen der Analogwerte

_No arguments._

### STEUERN_DIGITAL

Vorgeben eines Statuswertes (1 Signal)

| Name | Type | Description |
| --- | --- | --- |
| ZELLE | int | Zellennummer (0-2 oder 4 oder 7-14 oder 16-20 oder 23) |
| WERT | int | Zu speichernder Wert (0 oder 1) |

### ZYKLENZAEHLER_SCHREIBEN

Zaehlerstand des Zyklenzaehlers vorgeben

| Name | Type | Description |
| --- | --- | --- |
| WERT | long | Zaehlerstand Bereich: 0x0000 - 0xFFFF |

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

### MODUL_INAKTIV

Setzt das Modul temporaer inaktiv

_No arguments._

### MODUL_AKTIV

Setzt das Modul wieder aktiv

_No arguments._

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

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
| 0x00 | Interner Fehler: Interne Spannung |
| 0x01 | Interner Fehler: Ladungspumpe nicht abschaltbar |
| 0x10 | Interner Fehler: Prozessor Watchdog |
| 0x11 | Interner Fehler: Prozessor ROM |
| 0x12 | Interner Fehler: Taktgeber |
| 0x13 | Interner Fehler: Temperaturueberwachung defekt |
| 0x14 | Interner Fehler: EEPROM |
| 0x15 | Interner Fehler: Abgleichdaten fehlen |
| 0x16 | Interner Fehler: Codierdaten fehlen |
| 0x02 | Externer Fehler: Kl.15 Kurzschluss |
| 0x03 | Externer Fehler: Drehzahlsiganl am Eingang TD fehlt |
| 0x04 | Externer Fehler: E_KAT_EIN Masseschluss |
| 0x05 | Externer Fehler: Ueberspannung Starterbatterie |
| 0x17 | Externer Fehler: Generatorspannung zu niedrig |
| 0x18 | Externer Fehler: ZSK Kurzschluss |
| 0x19 | Externer Fehler: Stuetzen der Bordbatterie im Startbetrieb |
| 0x19 | Externer Fehler: Stuetzen der Bordbatterie im Fahrbetrieb |
| 0x1B | Externer Fehler: Batterien oder Modul wurden abgeklemmt |
| 0x1C | Externer Fehler: K-Bus- oder Kombisignal fehlt |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |
