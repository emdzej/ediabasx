# c_video2.prg

## General

|  |  |
| --- | --- |
| File | c_video2.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 6 |
| Origin | BMW VS-22 Wittelsberger |
| Revision | 1.0 |
| Author | BMW VS-22 Wittelsberger, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD fuer Video-Flashprogrammierung |  |  |
| ORIGIN | string | BMW VS-22 Wittelsberger |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW VS-22 Wittelsberger, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job Videomodul TV-Teil

_No arguments._

### IDENT

Ident-Daten fuer Videomodul TV-Teil

_No arguments._

### CS_BILDEN

_No description._

_No arguments._

### DATEN_EEPROM_UEBERNEHMEN

_No description._

_No arguments._

### EEPROM_KENNUNG_LESEN

_No description._

_No arguments._

### RESET_VM

_No description._

_No arguments._

### FLASH_LOESCHEN

_No description._

_No arguments._

### BOOT_MODUS_AKTIVIEREN

_No description._

_No arguments._

### BLOCKCHECKSUMME_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| B0B1 | int | Byte fuer unterscheidung Block 0 oder Block 1 |

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### FLASH_SCHREIBEN

Beliebige Flash Zellen beschreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten |

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
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | IBus Dauerhigh Abschaltung |
| 0x02 | Watchdog ausgeloest |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | I-Bus-Pufferueberlauf |
| 0x02 | I2 C Fehler zum Graphikteil |
| 0x03 | I2 C Fehler vom Graphikteil |
| 0x04 | Uebertemperatur im Videomodul |
| 0x05 | Audio-Fehler |
| 0x06 | RGB-Fehler |
| 0x07 | Video-Fehler |
| 0x08 | Sonstige-Fehler |
| 0x09 | EEPROM read Fehler |
| 0x0A | EEPROM write Fehler |
| 0x0B | EEPROM Checksumfehler |
| 0x0C | EEPROM Neuinitialisierung |
| 0x0D | Kein RGB Telegramm vom Graphikteil |
| 0xXY | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler nicht aktiv |
| 0x20 | Fehler aktiv |
| 0xXY | unbekannte Fehlerart |

### SEGMENTAUSWAHL

| SEGMENT | AUSWAHLTEXT |
| --- | --- |
| 0x02 | EPROM |
| 0x03 | EEPROM |
| 0x04 | internes RAM DATA |
| 0x05 | externes RAM XDATA |
| 0x0B | internes RAM IDATA |
| 0xXY | Unbekanntes Segment |

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
