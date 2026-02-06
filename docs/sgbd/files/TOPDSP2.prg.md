# TOPDSP2.prg

## General

|  |  |
| --- | --- |
| File | TOPDSP2.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 7 |
| Origin | Lear_Automotive_Electronics_GmbH DCS Bach |
| Revision | 1.00 |
| Author | Lear_Automotive_Electronics_GmbH DCS Bach, BMW TI-431 Rochal, BMW TI-431 Dennert, BMW TI-431 Weber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TOPDSP2 |  |  |
| ORIGIN | string | Lear_Automotive_Electronics_GmbH DCS Bach |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | Lear_Automotive_Electronics_GmbH DCS Bach, BMW TI-431 Rochal, BMW TI-431 Dennert, BMW TI-431 Weber |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### STATUS_IO_LINES

Auslesen einiger interner Statusleitungen

_No arguments._

### STATUS_DSP_ON

Auslesen DS on/off

_No arguments._

### STATUS_DSP_VOLUME

Auslesen Lautstaerke

_No arguments._

### STATUS_QUELLE

Auslesen DSP Tonquelle

_No arguments._

### STATUS_LOUDNESS

Auslesen loudness on / off

_No arguments._

### STATUS_BALANCE

Auslesen Einstellung Balance

_No arguments._

### STATUS_FADER

Auslesen Einstellung Fader

_No arguments._

### STATUS_BASS

Auslesen Einstellung Bass

_No arguments._

### STATUS_TREBLE

Auslesen Einstellung Bass

_No arguments._

### STATUS_GAL

Auslesen der GAL-Einstellung

_No arguments._

### STATUS_INT_VERSIONEN

Auslesen interner Versionen

_No arguments._

### RESET

Loest einen Reset des Verstaerkers aus

_No arguments._

### STEUERN_DSP

DSP Einstellungen veraendern

| Name | Type | Description |
| --- | --- | --- |
| FUNCTION | string | Funktion die beeinflusst werden soll table STEUERN FUNKTION |
| PARAMETER | string | DSP: 0=Off  1=On VOLUME: 0(max)-255 QUELLE table QUELLE ORT LOUDNESS: 0=Off  1=On BALANCE: -15 - +15 FADER: -15 - +15 BASS: -15 - +15 TREBLE: -15 - +15 GAL: 1 - 6 |

### DSP_SELBSTTEST

startet den Digitalteil selbsttest (!anschliessend FS-lesen notwendig)

_No arguments._

### LAUTSPRECHER_TEST_START

startet die Lautsprecher-Testsequenz mit verschiedenen Frequenzen

_No arguments._

### LAUTSPRECHER_TEST_ENDE

beendet die Lautsprecher-Testsequenz

_No arguments._

### STEUERN_SINUSGENERATOR

kanalselektiver Sinusgenerator

| Name | Type | Description |
| --- | --- | --- |
| CHANNELSELECT | unsigned int | Vorgabe des Kanals 0   Subwoofer (vorne) links 1   Tieftoener vorne links 2   Mitteltoener vorne links 3   Hochtoener vorne links 4   Subwoofer (vorne) rechts 5   Tieftoener vorne rechts 6   Mitteltoener vorne rechts 7   Hochtoener vorne rechts 8   Subwoofer (hinten) links 9   Tieftoener hinten links 10  Mitteltoener hinten links 11  Hochtoener hinten links 12  Subwoofer (hinten) rechts 13  Tieftoener hinten rechts 14  Mitteltoener hinten rechts 15  Hochtoener hinten rechts |
| FREQUENZ | unsigned int | Frequenzvorgabe 50 ... 14000Hz |
| VOLUME | unsigned int | Daempfung in dB gegenueber Vollaussteuerung |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_SCHREIBEN

Codierdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x001 | Fehler DSP_1 |
| 0x002 | Fehler DSP_2 |
| 0x003 | Fehler externes RAM |
| 0x004 | Checksummenfehler Controller-Flash |
| 0x005 | Checksummenfehler im internen EEPROM |
| 0x006 | Checksummenfehler im externen EEPROM (Lear) |
| 0x007 | Checksummenfehler im externen EEPROM (BMW) |
| 0x008 | Initialisierungsfehler AK-Receiver |
| 0x009 | Uebertemperatur InRoom1 - Subwooferabschaltung |
| 0x010 | Uebertemperatur InRoom2 - Endstufenabschaltung |
| 0x011 | Uebertemperatur Schaltnetzteil - Subwooferabschaltung |
| 0x012 | Unterspannung Klemme 30 bei Selbsttest erkannt |
| 0x013 | Unterspannung Radio ein bei Selbsttest erkannt |
| 0x0XY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x01 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |

### STEUERN

| FUNKTION | CTRL_BYTE |
| --- | --- |
| DSP | 0x00 |
| VOLUME | 0x01 |
| QUELLE | 0x02 |
| LOUDNESS | 0x03 |
| BALANCE | 0x04 |
| FADER | 0x05 |
| BASS | 0x06 |
| TREBLE | 0x07 |
| GAL | 0x08 |

### QUELLE

| ORT | CTRL_BYTE |
| --- | --- |
| CD | 0x00 |
| TUNER/TAPE | 0x01 |
| TMC | 0x07 |
| -- | 0x0F |
| NAVI | 0x02 |
| TV/VCR | 0x03 |
| GONG | 0x06 |
| unknown source | 0xXY |
