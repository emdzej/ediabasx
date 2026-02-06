# CCM38.prg

## General

|  |  |
| --- | --- |
| File | CCM38.prg |
| Type | PRG |
| Jobs | 17 |
| Tables | 3 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.55 |
| Author | BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Check-Control Modul E38 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.55 |  |  |
| AUTHOR | string | BMW TP-422 Teepe |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### PRUEFSTEMPEL_LESEN

Default pruefstempel_lesen job

_No arguments._

### PRUEFSTEMPEL_SETZEN

Default pruefstempel_setzen job

| Name | Type | Description |
| --- | --- | --- |
| WELCHER_PRUEFSTEMPEL | int | 1 bis 3 |
| WELCHES_BIT | int | 0 bis 7 |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| HIGH | int | gewuenschte Startadresse high als Hexwert! |
| LOW | int | gewuenschte Startadresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl Datenbytes, max. 24! |

### IDENT

Default IDENTIFIKATION job

_No arguments._

### FS_ZAEHLER

fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### FS_LOESCHEN

Default fs_loeschen job

_No arguments._

### STATUS_LESEN

Default status job

_No arguments._

### SELBSTTEST

selbsttest job

_No arguments._

### CODIERUNG_LESEN

codierung_lesen job

_No arguments._

### LERN_BEREICH_LESEN

lern_bereich_lesen job

_No arguments._

### MOTORKENNFELD_LESEN

MOTORKENNFELD_LESEN job

_No arguments._

### OELWARNSCHWELLEN_LESEN

auslesen Oelwarnschwellen_LESEN job

_No arguments._

### POWER_DOWN

POWER_DOWN job

_No arguments._

### DIAGNOSE_ENDE

diagnose_ende job

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Parkbremse loesen |
| 0x02 | Tuer offen |
| 0x03 | Kofferraum offen |
| 0x04 | Vorgluehen |
| 0x05 | Einspritzanlage |
| 0x06 | Bremsfluessigkeit pruefen |
| 0x07 | Stop! Oeldruck Motor |
| 0x08 | Niveauregulierung inaktiv |
| 0x09 | EEPROM CCM |
| 0x0A | Kuehlwassertemperatur |
| 0x0B | Bremslicht pruefen |
| 0x0C | Motornotprogramm |
| 0x0D | I-Bus CCME38 OK |
| 0x0E | Abblendlicht pruefen |
| 0x0F | Standlicht pruefen |
| 0x10 | Ruecklicht pruefen |
| 0x11 | Nebellicht vorn pruefen |
| 0x12 | Nebellicht hinten pruefen |
| 0x13 | Kennzeichenlicht pruefen |
| 0x14 | Anhaengerlicht pruefen |
| 0x15 | Getriebenotprogramm |
| 0x16 | Bremsbelag pruefen |
| 0x17 | Oelstand Motor pruefen |
| 0x18 | Kuehlwasserstand pruefen |
| 0x19 | Motornotprogramm |
| 0x1A | Waschwasser fuellen |
| 0x1B | Licht an ? |
| 0x1C | Zuendschluessel steckt |
| 0x1D | Gurt anlegen |
| 0x1E | Langsam! Kat zu heiss |
| 0x1F | LIMIT |
| 0x20 | EDC inaktiv |
| 0x21 | Servotronic inaktiv |
| 0x22 | CHECK CONTROL OK |
| 0x23 | Funkschluessel Batterie |
| 0x24 | Langsam! Kat zu heiss |
| 0x25 | Panzertuer Gepaeckraum |
| 0x26 | Luftanlage pruefen |
| 0x27 | Feuerloeschanlage pruefen |
| 0x28 | Fernlicht pruefen |
| 0x29 | Rueckfahrlicht pruefen |
| 0x2A | CC Text 42 |
| 0x2B | CC Text 43 |
| 0x2C | CC Text 44 |
| 0x2D | CC Text 45 |
| 0x2E | CC Text 46 |
| 0x2F | CC Text 47 |
| 0x30 | CC Text 48 |
| 0x31 | CC Text 49 |
| 0x32 | CC Text 50 |
| 0x33 | CC Text 51 |
| 0x34 | CC Text 52 |
| 0x35 | CC Text 53 |
| 0x36 | CC Text 54 |
| 0x37 | CC Text 55 |
| 0x38 | CC Text 56 |
| 0x39 | CC Text 57 |
| 0x3A | CC Text 58 |
| 0x3B | CC Text 59 |
| 0x3C | Schwimmerschalter statisch/dynamisch |
| 0x3D | thermischer Oelstandssensor |
| 0x3E | F3 Oelstand Sensor thermisch |
| 0x46 | Checksumme Codierdaten |
| 0x47 | COP Monitor Reset / Quarzausfall |
| 0x49 | Fehler EEPROM schreiben |
| 0x4A | Fehler EEPROM loeschen |
| 0x4B | Fehler Watchdog |
| 0x4C | Fehler illegal Opcode |
| 0xFF | unbekannter Fehlerort |

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
