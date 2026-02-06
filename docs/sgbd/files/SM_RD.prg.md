# SM_RD.prg

## General

|  |  |
| --- | --- |
| File | SM_RD.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 5 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.44 |
| Author | BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SM_RD E31 / E32 / E34 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.44 |  |  |
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

### IDENT

Default ident job

_No arguments._

### FS_LESEN

Default fs_lesen job

_No arguments._

### STATUS_ANALOG_LESEN

Default position_lesen job

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente und Richtung |

### STATUS_DIGITAL_LESEN

Default STATUS_DIGITAL_LESEN job

_No arguments._

### DIAGNOSE_ENDE

Default diagnose_ende job

_No arguments._

### RAM_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| LOW | int | gewuenschte Startadresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl als Hexwert! |

### RAM_SCHREIBEN

Schreiben des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_LOW | int | gewuenschte Adresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl Bytes (maximal 7!) |
| BYTE1 | int | gewuenschter Wert fuer Byte1 als Hexwert! |
| BYTE2 | int | gewuenschter Wert fuer Byte2 als Hexwert! |
| BYTE3 | int | gewuenschter Wert fuer Byte3 als Hexwert! |
| BYTE4 | int | gewuenschter Wert fuer Byte4 als Hexwert! |
| BYTE5 | int | gewuenschter Wert fuer Byte5 als Hexwert! |
| BYTE6 | int | gewuenschter Wert fuer Byte6 als Hexwert! |
| BYTE7 | int | gewuenschter Wert fuer Byte7 als Hexwert! |

### EEPROM_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| LOW | int | gewuenschte Startadresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl (max. 12) |

### EEPROM_SCHREIBEN

Schreiben des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_LOW | int | gewuenschte Adresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl Bytes (maximal 7!) |
| BYTE1 | int | gewuenschter Wert fuer Byte1 als Hexwert! |
| BYTE2 | int | gewuenschter Wert fuer Byte2 als Hexwert! |
| BYTE3 | int | gewuenschter Wert fuer Byte3 als Hexwert! |
| BYTE4 | int | gewuenschter Wert fuer Byte4 als Hexwert! |
| BYTE5 | int | gewuenschter Wert fuer Byte5 als Hexwert! |
| BYTE6 | int | gewuenschter Wert fuer Byte6 als Hexwert! |
| BYTE7 | int | gewuenschter Wert fuer Byte7 als Hexwert! |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Potentiometerfehler Kopfstuetze |
| 0x02 | Potentiometerfehler Sitzhoehe |
| 0x03 | Potentiometerfehler Lehnenneigung |
| 0x04 | Potentiometerfehler Oberschenkelauflage |
| 0x05 | Potentiometerfehler Sitzneigung |
| 0x06 | Potentiometerfehler Sitzlaengsverstellung |
| 0x07 | nicht verwendet 07 |
| 0x08 | nicht verwendet 08 |
| 0x09 | intern 09 |
| 0x0A | intern 0A |
| 0x0B | Potentiometer Beifahrerspiegel horizontal |
| 0x0C | Potentiometer Beifahrerspiegel vertikal |
| 0x0D | Potentiometer Fahrerspiegel horizontal |
| 0x0E | Potentiometer Fahrerspiegel vertikal |
| 0x0F | intern 0F |
| 0x10 | intern 10 |
| 0x11 | Antrieb Kopfstuetze |
| 0x12 | Antrieb Sitzhoehe |
| 0x13 | Antrieb Sitzlehne |
| 0x14 | Antrieb Oberschenkelauflage |
| 0x15 | Antrieb Sitzneigung |
| 0x16 | Antrieb Sitzschlitten |
| 0x17 | Relaisueberwachung Langzeitfehler |
| 0x18 | Relaisueberwachung Kurzzeitfehler |
| 0x19 | intern 19 |
| 0x1A | intern 1A |
| 0x1B | Antrieb BF-Spiegel horizontal |
| 0x1C | Antrieb BF-Spiegel vertikal |
| 0x1D | Antrieb F-Spiegel horizontal |
| 0x1E | Antrieb F-Spiegel vertikal |
| 0x1F | intern 1F |
| 0x20 | intern 20 |
| 0x21 | Laufrichtung Kopfstuetze |
| 0x22 | Laufrichtung Sitzhoehe |
| 0x23 | Laufrichtung Lehnenneigung |
| 0x24 | Laufrichtung Oberschenkelauflage |
| 0x25 | Laufrichtung Sitzneigung |
| 0x26 | Laufrichtung Sitzschlitten |
| 0x27 | intern 27 |
| 0x28 | intern 28 |
| 0x29 | intern 29 |
| 0x2A | intern 2A |
| 0x2B | Laufrichtung BF-Spiegel horizontal |
| 0x2C | Laufrichtung BF-Spiegel vertikal |
| 0x2D | Laufrichtung F-Spiegel horizontal |
| 0x2E | Laufrichtung F-Spiegel vertikal |
| 0x2F | intern 2F |
| 0x30 | intern 30 |

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

### STEUERN

| ORT | BYTE1 | BYTE2 | BYTE3 |
| --- | --- | --- | --- |
| SOZ | 0xFD | 0xFF | 0xFF |
| SOV | 0xFB | 0xFF | 0xFF |
| SHA | 0xF7 | 0xFF | 0xFF |
| SKB | 0xEF | 0xFF | 0xFF |
| SKA | 0xDF | 0xFF | 0xFF |
| SLZ | 0xBF | 0xFF | 0xFF |
| SLV | 0x7F | 0xFF | 0xFF |
| SSZ | 0xFF | 0xF7 | 0xFF |
| SSV | 0xFF | 0xEF | 0xFF |
| SNB | 0xFF | 0xDF | 0xFF |
| SNA | 0xFF | 0xBF | 0xFF |
| SHB | 0xFF | 0x7F | 0xFF |
| SPFA | 0xFF | 0xFF | 0x07 |
| SPFB | 0xFF | 0xFF | 0x0B |
| SPFL | 0xFF | 0xFF | 0x0D |
| SPFR | 0xFF | 0xFF | 0x0E |
| SPBA | 0xFF | 0xFF | 0x17 |
| SPBB | 0xFF | 0xFF | 0x1B |
| SPBL | 0xFF | 0xFF | 0x1D |
| SPBR | 0xFF | 0xFF | 0x1E |
| default | 0xFF | 0xFF | 0xFF |

### BYTES

| NAME | BYTE | MIN | MAX | MINDEF | MAXDEF | A | B | DIV |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POKO | 0x03 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POSH | 0x04 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POLN | 0x05 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POOA | 0x06 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POSN | 0x07 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POSS | 0x08 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POBH | 0x09 | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POBV | 0x0A | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POFH | 0x0B | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| POFV | 0x0C | 0x08 | 0xF8 | -1 | -2 | -20 | 5000 | 1000 |
| UBAT | 0x0E | 0x00 | 0xFF |   |   | 718 | 0 | 10 |

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
