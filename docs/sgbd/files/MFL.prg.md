# MFL.prg

## General

|  |  |
| --- | --- |
| File | MFL.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 7 |
| Origin | BMW TI-430 Stübinger |
| Revision | 1.17 |
| Author | BMW TP-421 Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Multifunktionslenkrad E38 |  |  |
| ORIGIN | string | BMW TI-430 Stübinger |  |  |
| REVISION | string | 1.17 |  |  |
| AUTHOR | string | BMW TP-421 Spoljarec |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer MFL E38

_No arguments._

### IDENT

Ident-Daten fuer MFL

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_LESEN

alle Stati des MFL lesen

_No arguments._

### HERSTELLDATEN_LESEN

Herstelldaten lesen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Datenunterbrechung Signalleitung zum MFL |
| 0x02 | Tasten rechts SB und VER gleichzeitig betaetigt |
| 0x03 | Tasten links Radio-laut und leise gleichzeitig betaetigt |
| 0x07 | Kurzschluss Versorgungsspannung Lenkrad gegen Masse |
| 0x0A | EEPROM Schreibfehler |
| 0xXY | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler nicht aktiv |
| 0x20 | Fehler aktiv |
| 0xXY | unbekannte Fehlerart |

### SG_BETRIEBSMODE

| B_ART | B_ART_TEXTE |
| --- | --- |
| 0x01 | Radio |
| 0x02 | Telefon |
| 0x04 | Umluft |
| 0x08 | Tempomat |

### EINGANG_RECHTS

| TASTE_R | TASTE_R_TEXTE |
| --- | --- |
| 0x09 | Tempomat Wiederaufnahme |
| 0x12 | Tempomat Setzen Beschleunigen |
| 0x40 | Tempomat Verzoegerung |
| 0x24 | Tempomat Aus |
| 0x80 | Umluft |

### EINGANG_LINKS

| TASTE_L | TASTE_L_TEXTE |
| --- | --- |
| 0x83 | Suchlauf aufwaerts |
| 0x43 | Lautstaerke plus |
| 0x23 | Lautstaerke minus |
| 0x13 | Suchlauf abwaerts |
| 0x0B | Radio/Telefon |
| 0x07 | Telefon |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen |
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
| 0xFF | unbekannter Hersteller |
