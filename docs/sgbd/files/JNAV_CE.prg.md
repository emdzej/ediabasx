# JNAV_CE.prg

## General

|  |  |
| --- | --- |
| File | JNAV_CE.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 7 |
| Origin | BMW EE-42 Alexander Maier |
| Revision | 3.07 |
| Author | ALPINE Electronics H.Nordalm |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | I-Bus Navigationssystem Japan (JNAV-CE) |  |  |
| ORIGIN | string | BMW EE-42 Alexander Maier |  |  |
| REVISION | string | 3.07 |  |  |
| AUTHOR | string | ALPINE Electronics H.Nordalm |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.23 |  |  |
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

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STEUERGERAETE_RESET

Steuergeraete Reset ausloesen

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### FS_LESEN

Fehlerspeicher lesen low-Konzept (lower als Lastenheft Codierung/Diagnose)

_No arguments._

### SELBSTTEST

Ausloesen des Selbsttest

_No arguments._

### SELBSTTEST_2

Ausloesen des Selbsttest 2

_No arguments._

### POWER_DOWN

Ausloesen des Power Down

| Name | Type | Description |
| --- | --- | --- |
| TIME_TO_WAIT | int | Einheit: 500 ms 0 = 0 s 1 = 0,5 s 2 = 1 s .... 40 = 20 s |

### VERSION_INFO

Ident-Daten fuer das JNAV

_No arguments._

### STATUS_SW_CNS_BOOTLOADER

SW Version des CNS2 Bootloaders

_No arguments._

### STATUS_SW_NAVI_IPL

SW Version des NAVI IPLs

_No arguments._

### STATUS_SW_NAVI_BIOS

SW Version des NAVI BIOS

_No arguments._

### STATUS_SW_APL

SW Version der APL

_No arguments._

### STATUS_SW_NAVI

SW Version der Navigation

_No arguments._

### STATUS_SW_NK

SW Version des NK

_No arguments._

### STATUS_SW_CNS

SW Version des CNS

_No arguments._

### STATUS_SW_VICS

SW Version des VICS Receivers

_No arguments._

### STATUS_GPS_CONNECTION

Verbindungs-Status zw. GPS-Antenne und JNAV-CE Modus  : Default

_No arguments._

### STATUS_VICS_FM_CONNECTION

Verbindungs-Status zw. internem VICS-Receiver und JNAV-CE und JNAV-CE Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREQUENCY | int | z.B.: 0x2345 entspricht 23,45 MHz |
| SIGNAL_LEVEL | int | Einheit 3,2 mV z.B.: 0x01D0 entspricht 1495,3 mV |

### STATUS_SPEEDPULSE

Geschwindigkeit vom SpeedPulse-Sensor Modus  : Default

_No arguments._

### STATUS_ETC

ETC connection test Modus  : Default

_No arguments._

### STEUERN_VOICE_TEST

starten der Sprach-Ausgabe Modus  : Default

_No arguments._

## Tables

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
| 0xFF | unbekannter Hersteller |

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
| 0x02 | Interner VICS Empfaenger gestoert |
| 0x03 | I-Bus-Fehler |
| 0x04 | S-RAM-Fehler |
| 0x05 | V-RAM-Fehler |
| 0x06 | Interner GPS Empfaenger gestoert oder Anschluss zur GPS Antenne gestoert |
| 0x07 | DVD-Lese-Fehler |
| 0x08 | Gyro-Fehler |
| 0x09 | Fertigungs-Mode an |
| 0x0A | Transport-Mode an |
| 0x0B | Werkstatt-Mode an |
| 0xXY | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
