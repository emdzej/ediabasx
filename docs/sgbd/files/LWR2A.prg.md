# LWR2A.prg

## General

|  |  |
| --- | --- |
| File | LWR2A.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 4 |
| Origin | BMW TI-431 Nau |
| Revision | 2.18 |
| Author | BMW TI-433 Teepe, BMW TI-430 Drexel, BMW TI-431 Schaller, BMW TI-431 Kuessel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | automatische Leuchtweitenregulierung E38 |  |  |
| ORIGIN | string | BMW TI-431 Nau |  |  |
| REVISION | string | 2.18 |  |  |
| AUTHOR | string | BMW TI-433 Teepe, BMW TI-430 Drexel, BMW TI-431 Schaller, BMW TI-431 Kuessel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.12 |  |  |
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

fs_lesen job

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### IS_LESEN

Default IS_LESEN job

_No arguments._

### CODIERDATEN_LESEN

Default CODIERDATEN_LESEN job

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | auszulesender Codierdatenblock |

### SPEICHER_LESEN

Default SPEICHER_LESEN job

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Speicher-Segment (0 bis ??) |
| HIGH | int | high-Adresse (0 bis ff) |
| MIDDLE | int | middle-Adresse (0 bis ff) |
| LOW | int | low-Adresse (0 bis ff) |
| BYTES | int | Anzahl Bytes (maximal 31) |

### STATUS_LESEN

STATUS_LESEN job

_No arguments._

### STATUS_SENSOR_LESEN

STATUS_SENSOR_LESEN job

_No arguments._

### STEUERN_ANTRIEBE

STEUERN_ANTRIEBE job

| Name | Type | Description |
| --- | --- | --- |
| ZIELWERT1 | int | anzusteuernder ZIELWERT 1 (Bereich 0 bis 1024) |
| ZIELWERT2 | int | anzusteuernder Zielwert 2 |

### HERSTELLER_LESEN

Default hersteller_lesen job

_No arguments._

### PRUEFSTEMPEL_LESEN

Default pruefstempel_lesen job

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Default pruefstempel_setzen job

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0x00 bis 0xFF |
| BYTE2 | int | 0x00 bis 0xFF |
| BYTE3 | int | 0x00 bis 0xFF |

### DREHSINN_SENSOREN_LESEN

DIAGNOSE_ENDE job

_No arguments._

### DIAGNOSE_ENDE

DIAGNOSE_ENDE job

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Signalfehler |
| 0x02 | Sensorfehler vorn |
| 0x03 | Sensorfehler hinten |
| 0x04 | Antrieb Scheinwerfer links |
| 0x05 | Antrieb Scheinwerfer rechts |
| 0xFF | unbekannter Fehlercode |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan vorhanden |
| 0x01 | Fehler momentan nicht vorhanden |
| 0x02 | -- |
| 0x10 | Ueberwachung Versorgung Ub < 11,3 Volt |
| 0x11 | Interrupt im Steuergeraet |
| 0x12 | Reset im Steuergeraet |
| 0x13 | Sensorversorgung: PE0 < 2,5 Volt im Steuergeraet |
| 0x14 | DFAVR hat zu grosse Spruenge (extern) |
| 0x15 | DFAVR Ueberlauf (extern) |
| 0x16 | Telegrammfehler (extern) |
| 0x20 | Sensorversorgung: PE0 > 4,9 Volt |
| 0x21 | Sensorsignal vorne: PE1 < 0,5 Volt |
| 0x22 | Sensorsignal vorne: PE1 > 4,7 Volt |
| 0x30 | Sensorsignal hinten: PE3 < 0,5 Volt |
| 0x31 | Sensorsignal hinten: PE3 > 4,7 Volt |
| 0x40 | Kurzschluss Wicklung 1 |
| 0x41 | Kurzschluss Wicklung 2 |
| 0x42 | Open load Wicklung 1 |
| 0x43 | Open load Wicklung 2 |
| 0x44 | Temperatur prealarm |
| 0x50 | Kurzschluss Wicklung 1 |
| 0x51 | Kurzschluss Wicklung 2 |
| 0x52 | Open load Wicklung 1 |
| 0x53 | Open load Wicklung 2 |
| 0x54 | Temperatur prealarm |
| 0xFF | unbekannte Fehlerart |

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
