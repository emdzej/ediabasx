# EKP_III.PRG

## General

|  |  |
| --- | --- |
| File | EKP_III.PRG |
| Type | PRG |
| Jobs | 11 |
| Tables | 7 |
| Origin | BMW |
| Revision | 0.2 |
| Author | HELBAKO E2 Spanner |
| ECU Comment | SGBD fuer EKP III |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EKP III |  |  |
| ORIGIN | string | BMW |  |  |
| REVISION | string | 0.02 |  |  |
| AUTHOR | string | HELBAKO E2 Spanner |  |  |
| COMMENT | string | SGBD fuer EKP III |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### CODIERUNG_LESEN

Lesezugriff auf die einzelnen Codierdatenbloecke Als Argument wird die Nummer des zu lesenden Codierdatenblockes uebergeben

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | zulaessige Blocknummern liegen i Bereich 0x0000 - 0x0004 |

### CODIERUNG_SCHREIBEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Byte 0:               01=Daten 02=Maskenbyte (nicht unterstuetzt Byte 1:               Wortbreite (0:Byte, 2:Word, 3:DWord) Byte 2:               Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3:               Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4:               Byteparameter 1 Byte 5,6:             WordParameter 1 (low/high) Byte 7,8:             WordParameter 2 (low/high) Byte 9,10,11,12:      Maske (linksbuendig) Byte 13,14:           Anzahl Bytedaten (low/high) Byte 15,16:           Anzahl Wortdaten (low/high) Byte 17:              Byteadresse im Block Byte 18,19,20:        Blockadresse (low, middle, high) Byte 21,....:         Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### IS_LESEN

is_lesen job

_No arguments._

### ADU_WERTE_LESEN

es werden die Messwerte des AD-Umsetzers ausgelesen

_No arguments._

### EKP_DATEN_LESEN

es werden die Messwerte des AD-Umsetzers ausgelesen

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
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen => Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe => Lear |
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
| 0x28 | DODUCO => BERU |
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
| 0x47 | ZF |
| 0x48 | GMPT |
| 0x49 | Harman Kardon |
| 0x50 | Remes |
| 0x51 | ZF Lenksysteme |
| 0x52 | Magneti Marelli |
| 0x53 | Borg Instruments |
| 0x54 | GETRAG |
| 0xFF | unbekannter Hersteller |

### ROVERPARTNUMPREFIX

| ROVER_NR | PREFIX |
| --- | --- |
| 0xA0 | AMR |
| 0xA1 | HHF |
| 0xA2 | JFC |
| 0xA3 | MKC |
| 0xA4 | SCB |
| 0xA5 | SRB |
| 0xA6 | XQC |
| 0xA7 | XQD |
| 0xA8 | XQE |
| 0xA9 | XVD |
| 0xAA | YAC |
| 0xAB | YDB |
| 0xAC | YFC |
| 0xAD | YUB |
| 0xAE | YWC |
| 0xAF | YWQ |
| 0xB0 | EGQ |
| 0xB1 | YIB |
| 0xB2 | YIC |
| 0xB3 | YIE |
| 0xXY | ??? |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC1 | MOTORSPANNUNG_ZU_HOCH    0xC1 |
| 0xC2 | MOTORSTROM_ZU_HOCH       0xC2 |
| 0xC3 | DREHZAHL_FEHLT           0xC3 |
| 0xC4 | DREHZAHL_ZU_HOCH         0xC4 |
| 0xC5 | DREHZAHL_ZU_NIEDRIG      0xC5 |
| 0xC6 | UEBERTEMP_HIGH_SIDE      0xC6 |
| 0xC7 | UEBERTEMP_LOW_SIDE       0xC7 |
| 0xC8 | CAN_ANST_TIMEOUT         0xC8 |
| 0xC9 | UC_UEBERTEMP             0xC9 |
| 0xCA | MOTORSTROM_ZU_NIEDRIG    0xCA |
| 0xCB | MOTORSTROM_FEHLT         0xCB |
| 0xCC | MOTORSPANNUNG_ZU_NIEDRIG 0xCC |
| 0xFF | unbekannter Fehlecode |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xD1 | KL15_ZU_HOCH               0xD1 |
| 0xD2 | KL30_FEHLT                 0xD2 |
| 0xD3 | KL30_ZU_HOCH               0xD3 |
| 0xD4 | DREHZAL_ZU_NIEDRIG_UNTERSP 0xD4 |
| 0xFF | unbekannter Infocode |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | ----   | ---- |
| 0x01 | Aussentemperatur | Grad C |
| 0x02 | Sollfoerdermenge | l/h |
| 0x03 | Kilometerstand | km |
| 0xXY | unbekannte Umweltbedingung | -- |
