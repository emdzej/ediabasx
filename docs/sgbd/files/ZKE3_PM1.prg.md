# ZKE3_PM1.prg

## General

|  |  |
| --- | --- |
| File | ZKE3_PM1.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 7 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 1.00 |
| Author | BMW TI-433 Gerd Huber, BMW TP-422 Frank Fannasch |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ZKE III: Memorymodule E38, E39 |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-433 Gerd Huber, BMW TP-422 Frank Fannasch |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| PACKAGE | string | 1.00 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Ident-Daten fuer GM III

| Name | Type | Description |
| --- | --- | --- |
| P_MODUL | string | gewuenschtes Peripheriemodul table PeripherieModule PM_ABK PM_TEXT |

### STATUS_DIGITAL_SM_LSM

Status der Digitalsignale des SM/LSM (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STATUS_ANALOG_SM

Status der Achsenposition des SM

_No arguments._

### STATUS_ANALOG_SMBF

Status der Achsenposition des SMBF

_No arguments._

### STATUS_ANALOG_LSM

Status der Achsenposition des LSM

_No arguments._

### STATUS_ANALOG_SM_LAENGS_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_HOEHE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_NEIGUNG_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_LEHNE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_KOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_SITZTIEFE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_LEHNENKOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_LSM_NEIGUNG_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_LSM_LAENGS_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_LAENGS_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_HOEHE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_NEIGUNG_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_LEHNE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_KOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_SITZTIEFE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_LEHNENKOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STEUERN_DIGITAL_SM_LSM

Ansteuern eines digitalen Ein- oder Ausgangs des SM_LSM nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SM_LSM NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SMBF

Status der Digitalsignale des SMBF (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STEUERN_DIGITAL_SMBF

Ansteuern eines digitalen Ein- oder Ausgangs des SMBF nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SMBF NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SMSFB

Status der Digitalsignale des SMSFB (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STEUERN_DIGITAL_SMSFB

Ansteuern eines digitalen Ein- oder Ausgangs des SMSFB nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SMBF NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STEUERN_DIGITAL_NACHEINANDER

Ansteuern maximal 5 digitaler Signale des GM3 oder eines Peripheriemoduls NACHEINANDER

| Name | Type | Description |
| --- | --- | --- |
| P_MODUL | string | Name des gewuenschten Peripherie-Moduls table PeripherieModule PM_ABK PM_TEXT |
| SEKUNDEN | int | Pausenzeit am Ende in Sekunden ACHTUNG: Zeitangabe funktioniert nicht bei EDIABAS im EDIC |
| ORT1 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT2 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT3 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT4 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT5 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |

### IDENT_SW_NR_TUEREN

Vergleich der Softwarenummern der Tuermodule FT und BT

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
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
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
| 0x55 | BHTC (Behr Hella Thermocontrol) |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon |
| 0x58 | Autoliv |
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
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

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| up | 1 |
| down | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

### PERIPHERIEMODULE

| PM_NR | PM_ABK | PM_TEXT |
| --- | --- | --- |
| 0x00 | GM3 | Grundmodul III |
| 0x01 | FT | Fahrertuer |
| 0x02 | BT | Beifahrertuer |
| 0x03 | SHD | Schiebehebedach |
| 0x04 | SB | Schalterblock |
| 0x05 | SM_LSM | Sitz/Lenksaeulenmemory Fahrer |
| 0x08 | SM_BF | Sitzmemory Beifahrer |
| 0x09 | SM_SFB | Sitzmemory Fernbedienung Beifahrersitz |
| 0xXY | XY | ERROR_PM_UNBEKANNT |

### BITS_SM_LSM

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| MSLFAVO | 1 | 0x01 | 0x01 | E | Sitzschlitten vor |
| MSLFAZU | 1 | 0x02 | 0x02 | E | Sitzschlitten zurueck |
| MSHFAAF | 1 | 0x04 | 0x04 | E | Sitzhoehe auf |
| MSHFAAB | 1 | 0x08 | 0x08 | E | Sitzhoehe ab |
| MSNFAAF | 1 | 0x10 | 0x10 | E | Sitzneigung auf |
| MSNFAAB | 1 | 0x20 | 0x20 | E | Sitzneigung ab |
| MLNFAVO | 1 | 0x40 | 0x40 | E | Sitzlehne vor |
| MLNFAZU | 1 | 0x80 | 0x80 | E | Sitzlehne zurueck |
| MKFAAF | 2 | 0x01 | 0x01 | E | Kopfstuetze auf |
| MKFAAB | 2 | 0x02 | 0x02 | E | Kopfstuetze ab |
| MSOFAV | 2 | 0x04 | 0x04 | E | Sitztiefe vor |
| MSOFAZ | 2 | 0x08 | 0x08 | E | Sitztiefe zurueck |
| LKVFA | 2 | 0x10 | 0x10 | E | Lehnenkopf vor |
| LKZFA | 2 | 0x20 | 0x20 | E | Lehnenkopf zurueck |
| MLSNAF | 2 | 0x40 | 0x40 | E | Lenksaeule auf |
| MLSNAB | 2 | 0x80 | 0x80 | E | Lenksaeule ab |
| MLSLVO | 3 | 0x01 | 0x01 | E | Lenksaeule vor |
| MLSLZU | 3 | 0x02 | 0x02 | E | Lenksaeule zurueck |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_SMBF

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| MSLBFVO | 1 | 0x01 | 0x01 | E | Sitzschlitten vor |
| MSLBFZU | 1 | 0x02 | 0x02 | E | Sitzschlitten zurueck |
| MSHBFAF | 1 | 0x04 | 0x04 | E | Sitzhoehe auf |
| MSHBFAB | 1 | 0x08 | 0x08 | E | Sitzhoehe ab |
| MSNBFAF | 1 | 0x10 | 0x10 | E | Sitzneigung auf |
| MSNBFAB | 1 | 0x20 | 0x20 | E | Sitzneigung ab |
| MLNBFVO | 1 | 0x40 | 0x40 | E | Sitzlehne vor |
| MLNBFZU | 1 | 0x80 | 0x80 | E | Sitzlehne zurueck |
| MKBFAF | 2 | 0x01 | 0x01 | E | Kopfstuetze auf |
| MKBFAB | 2 | 0x02 | 0x02 | E | Kopfstuetze ab |
| MSOBFV | 2 | 0x04 | 0x04 | E | Sitztiefe vor |
| MSOBFZ | 2 | 0x08 | 0x08 | E | Sitztiefe zurueck |
| LKVBF | 2 | 0x10 | 0x10 | E | Lehnenkopf vor |
| LKZBF | 2 | 0x20 | 0x20 | E | Lehnenkopf zurueck |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
