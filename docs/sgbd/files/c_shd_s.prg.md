# c_shd_s.prg

## General

|  |  |
| --- | --- |
| File | c_shd_s.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 4 |
| Origin | BMW VS-22 Wittelsberger |
| Revision | 1.0 |
| Author | BMW VS-22 Wittelsberger, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD fuer HO-Servicemassnahmen |  |  |
| ORIGIN | string | BMW VS-22 Wittelsberger |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW VS-22 Wittelsberger, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string |  |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Ident-Daten fuer GM III

| Name | Type | Description |
| --- | --- | --- |
| P_MODUL | string | gewuenschtes Peripheriemodul table PeripherieModule PM_ABK PM_TEXT |

### TESTEN_SHD_PATCH

ACHTUNG: nur E38,E39,E39/2 mit SW02,SW03,SW05 Testen der Daten des SHD bzgl. Uebernahme eins SW-Patch

_No arguments._

### SCHREIBEN_BCS_PATCH

ACHTUNG: nur fuer E38,E39, E39/2 SW 02, SW 03  SW 05! Zusaetzlicher Patch wegen Feldproblemen ab 9/97

_No arguments._

### PATCH_INFO_LESEN

Auslesen der Patch Info 

_No arguments._

### PATCH_DATEN_LESEN

Auslesen der Patch Daten 

_No arguments._

### SHD_INITIALISIERUNG_NACH_PATCH

Initialisierung nach Patch Daten schrieben 

_No arguments._

## Tables

### PERIPHERIEMODULE

| PM_NR | PM_ABK | PM_TEXT |
| --- | --- | --- |
| 0x00 | GM3 | @Grundmodul@ III |
| 0x01 | FT | @Fahrertuer@ |
| 0x02 | BT | @Beifahrertuer@ |
| 0x03 | SHD | @Schiebehebedach@ |
| 0x04 | SB | @Schalterblock@ |
| 0x05 | SM_LSM | @Sitz/Lenksaeulenmemory@ @Fahrer@ |
| 0x08 | SM_BF | @Sitzmemory@ @Beifahrer@ |
| 0x09 | SM_SFB | @Sitzmemory@ @Fernbedienung@ @Beifahrersitz@ |
| 0xXY | XY | ERROR_PM_UNBEKANNT |

### PERIPHERIEMODULE_HD

| PM_NR | PM_ABK | PM_TEXT |
| --- | --- | --- |
| 0x00 | GM3 | @Grundmodul@ III |
| 0x01 | FT | @Fahrertuer@ |
| 0x02 | BT | @Beifahrertuer@ |
| 0x03 | SHD | @Schiebehebedach@ |
| 0xXY | XY | ERROR_PM_NICHT_ERLAUBT |

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
| 0x19 | @Elektromatik Suedafrika@ |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0xXY | @unbekannter Hersteller@ |
