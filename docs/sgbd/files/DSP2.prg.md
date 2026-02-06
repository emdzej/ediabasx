# DSP2.prg

## General

|  |  |
| --- | --- |
| File | DSP2.prg |
| Type | PRG |
| Jobs | 24 |
| Tables | 7 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.9 |
| Author | TI-431 Spoljarec, TI-431 Krueger, TI-431 Mellersh, BMW TI-431 Rochal |
| ECU Comment | DSP2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DSP2-Booster |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.9 |  |  |
| AUTHOR | string | TI-431 Spoljarec, TI-431 Krueger, TI-431 Mellersh, BMW TI-431 Rochal |  |  |
| COMMENT | string | DSP2 |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer DSP-Booster E38

_No arguments._

### IDENT

Ident-Daten fuer DSP

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_IO_LINES

Auslesen einiger interner Statusleitungen

_No arguments._

### STATUS_SG

Auslesen interner Stati

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

### RESET

Loest einen Reset des Verstaerkers aus

_No arguments._

### STEUERN_DSP

DSP Einstellungen veraendern

| Name | Type | Description |
| --- | --- | --- |
| FUNCTION | string | Funktion die beeinflusst werden soll table STEUERN FUNKTION |
| PARAMETER | string | DSP: 0=Off  1=On VOLUME: 0(max)-255 QUELLE table QUELLE ORT LOUDNESS: 0=Off  1=On BALANCE: -16 - +16 FADER: -16 - +16 BASS: -16 - +16 TREBLE: -16 - +16 GAL: 1 - 6 |

### DSP_SELBSTTEST

startet den Digitalteil selbsttest (!anschliessend FS-lesen notwendig)

_No arguments._

### LAUTSPRECHER_TEST_START

startet die zyklische Ansteuerung aller 4 Kanaele mit verschiedenen Frequenzen

_No arguments._

### LAUTSPRECHER_TEST_ENDE

beendet die zyklische Ansteuerung aller 4 Kanaele

_No arguments._

### DIAGNOSE_WEITER

Diagnose aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FG_LESEN

Auslesen der Fahrgestellnummer

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
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Fehler DSP Funktion links |
| 0x02 | Fehler DSP Funktion rechts |
| 0x03 | Fehler externes RAM links |
| 0x04 | Fehler externes RAM rechts |
| 0x05 | DSP konnte nicht initialisiert werden |
| 0x06 | Unterspannung Klemme 30 bei Selbsttest erkannt |
| 0x07 | Unterspannung Radio ein bei Selbsttest erkannt |
| 0x08 | Uebertemperatur SW-Kanal abgeschaltet |
| 0x09 | Checksummenfehler im internen EEPROM (UTL) |
| 0x10 | Checksummenfehler im externen EEPROM (UTL) |
| 0x11 | Checksummenfehler im externen EEPROM (BMW) |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
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
