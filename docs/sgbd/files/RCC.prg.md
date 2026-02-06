# RCC.prg

## General

|  |  |
| --- | --- |
| File | RCC.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 2 |
| Origin | BMW TI-433 Dennert |
| Revision | 1.0 |
| Author | BMW TP-422 Zender, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funkuhrmodul - Radio Controlled Clock |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TP-422 Zender, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### INFO

Information SGBD

_No arguments._

### EEPROM_LESEN

Daten aus dem EEPROM auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00 - 0xFF) der Wortadresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der 2-Byte-Worte (max. 6 Worte = 12 Bytes), die ausgelesen werden sollen |

### RAM_LESEN

RAM-Daten auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00 - 0xFF) der Adresse ,ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 12 !) die ausgelesen werden sollen |

### STATUS_FELDSTAERKE_LESEN

gibt die aktuelle Feldstaerke des empfangenen Funkuhrsignals an

_No arguments._

### STATUS_ZEITSTEMPEL_LESEN

gibt die Empfangshistorie wieder

| Name | Type | Description |
| --- | --- | --- |
| NUMMER | int | Nummer [1-5] des gewuenschten Zeitstempels, 1 = jung, 5 = alt |

### STATUS_TESTINFO_LESEN

Lieferantentestinformation auslesen

_No arguments._

### STEUERN_ANTENNENVERSTAERKER_EIN

Einschalten des Antennenverstaerkers

_No arguments._

### STEUERN_ANTENNENVERSTAERKER_AUS

Ausschalten des Antennenverstaerkers

_No arguments._

### STEUERN_ZEITINFO_SENDEN

Fordert RCC auf, die Zeitinfo auf dem I/K-Bus auszugeben

_No arguments._

### SOFT_RESET

Loest selbststaendig einen Reset aus

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
| 0xFF | unbekannter Hersteller |
