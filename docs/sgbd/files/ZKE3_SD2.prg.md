# ZKE3_SD2.prg

## General

|  |  |
| --- | --- |
| File | ZKE3_SD2.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 4 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 1.0 |
| Author | BMW TI-430 Gerd Huber |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ZKE III: Schiebehebedachmodul E39 ab 03/98 und E53 |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 1.0 |  |  |
| AUTHOR | string | BMW TI-430 Gerd Huber |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| PACKAGE | string | 0.07 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Ident-Daten fuer SHD

_No arguments._

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_DIGITAL_SHD

Status der Digitalsignale des neuen SHD fuer E39 ab 03/98 (Ein-/Ausgaenge) Der Wertebereich ist bei allen Results: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STATUS_ANALOG_SHD

Status der Analogsignale des neuen SHD fuer E39 ab 03/98

_No arguments._

### STEUERN_DIGITAL_SHD

Ansteuern eines digitalen Ein- oder Ausgangs des neuen SHD fuer E39 ab 03/98

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SHD NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_BYTES_SHD

Status aller Signale des Peripheriemoduls SHD Signalart: BYTE-weise, d.h. ohne Interpretation

_No arguments._

### STEUERN_START_AUTOINIT

Autoinit starten (SHD E39 ab 03/98)

_No arguments._

### STEUERN_PRUEFMODUS_FREIGEBEN

Pruefmodus freigeben (SHD E39 ab 03/98)

_No arguments._

### SETZEN_E39_2_GLAS_FIXIERT

fixiert die Codierung auf E39/2 Glas

_No arguments._

### SETZEN_SONDERFAHRZEUG_NICHT_FIXIERT

setzt die Codierung auf Sonderfahrzeug loescht Fixierung

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

### BITS_SHD

| NAME | BYTE | MASK | VALUE | TEXT |
| --- | --- | --- | --- | --- |
| KEY_HEB | 1 | 0x01 | 0x01 | Taste Heben |
| KEY_AUF | 1 | 0x02 | 0x02 | Taste Oeffnen |
| KEY_ZU | 1 | 0x04 | 0x04 | Taste Schliessen |
| SHDI | 2 | 0x04 | 0x04 | GM-Signale 2: SHD inaktiv |
| XY | XY | 0xXY | 0xXY | nicht definiertes Signal |
