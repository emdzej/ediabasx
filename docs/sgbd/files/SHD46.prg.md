# SHD46.prg

## General

|  |  |
| --- | --- |
| File | SHD46.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 7 |
| Origin | BMW TI-430 Schnelle |
| Revision | 1.05 |
| Author | BMW TI-430 Gerd Huber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Schiebehebedach fuer E46/R40 |  |  |
| ORIGIN | string | BMW TI-430 Schnelle |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | BMW TI-430 Gerd Huber |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer Schiebehebedach E46 automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten fuer SGD E46

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose Sonderfall: Laenge das Antworttelegramms ist konstant !

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_DIGITAL

digitale Stati des SHD E46 Der Wertebereich ist bei allen Results: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STATUS_ANALOG

analoge Stati des SHD E46

_No arguments._

### STEUERN_DIGITAL

Ansteuern SHD E46 ! erlaubte Namen des Arguments 'ORT' ueber Tool XTRACT.exe ! Aufruf 'XTRACT [-F] SHD46.prg'

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### COD_LESEN

Auslesen der Codierdaten des SHD E46

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers des SHD E46 Als Argumente werden die Adresse und die Anzahl der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| ANZAHL | int | Anzahl der Daten Bereich: 0x00-0xFF |

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
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
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
| an | 1 |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Relais |
| 0x02 | Inkrementgeber |
| 0x03 | Bedienschalter |
| 0x04 | EEPROM-Fehler |
| 0x05 | reserviert |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### BITS

| ZELLE | BYTE | MASK | VALUE | NAME | TEXT |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0x01 | 0x01 | SSHDH | Schalter SHD Heben |
| 2 | 0 | 0x04 | 0x04 | SSHDZ | Schalter SHD Zu |
| 4 | 0 | 0x10 | 0x10 | SSHDA | Schalter SHD Auf |
| 11 | 1 | 0x08 | 0x08 | RSHDZ | Relais-Ansteuerung Zu |
| 23 | 2 | 0x80 | 0x80 | NORM | SHD normiert |
| 25 | 3 | 0x02 | 0x02 | TIPP_H | Tipp Heben |
| 27 | 3 | 0x08 | 0x08 | TIPP_Z | Tipp Schieben Zu |
| 29 | 3 | 0x20 | 0x20 | TIPP_A | Tipp Schieben Auf |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
