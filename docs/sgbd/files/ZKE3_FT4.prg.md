# ZKE3_FT4.prg

## General

|  |  |
| --- | --- |
| File | ZKE3_FT4.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 5 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 1.00 |
| Author | BMW TI-433 Gerd Huber |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ZKE III: Fahrertuermodul E53 |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-433 Gerd Huber |  |  |
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

Ident-Daten fuer FT

_No arguments._

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_DIGITAL_FT

Status der Digitalsignale der FT E53 (Ein-/Ausgaenge)

_No arguments._

### STATUS_ANALOG_FT

Status der Analogsignale der FT E53

_No arguments._

### STEUERN_DIGITAL_FT

Ansteuern eines digitalen Ein- oder Ausgangs der FT

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_FT NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_BYTES_FT

Status aller Signale des Peripheriemoduls FT Signalart: BYTE-weise, d.h. ohne Interpretation

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

### BITS_FT

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| SSFA | 1 | 0x02 | 0x02 | E | Schalter Spiegel Fahrer in Fahr- oder Parkposition |
| TKFT | 1 | 0x04 | 0x04 | E | Tuerkontakt FT |
| VRFT | 1 | 0x20 | 0x20 | E | Schalterschliesszy. FT Verriegeln |
| ERFT | 1 | 0x80 | 0x80 | E | Schalterschliesszy. FT Entriegeln |
| SFFA | 4 | 0x01 | 0x01 | E | Schalter FH Fahrer auf |
| SFFZ | 4 | 0x02 | 0x02 | E | Schalter FH Fahrer zu |
| SFFT | 4 | 0x04 | 0x04 | E | Schalter FH Fahrer Tipp |
| SFFHA | 4 | 0x08 | 0x08 | E | Schalter FH Fahrer Hinten auf |
| SFFHZ | 4 | 0x10 | 0x10 | E | Schalter FH Fahrer Hinten zu |
| SFFHT | 4 | 0x20 | 0x20 | E | Schalter FH Fahrer Hinten Tipp |
| SBKS | 4 | 0x40 | 0x40 | E | Kindersicherung |
| SFBA | 5 | 0x01 | 0x01 | E | Schalter FH Beifahrer auf |
| SFBZ | 5 | 0x02 | 0x02 | E | Schalter FH Beifahrer zu |
| SFBT | 5 | 0x04 | 0x04 | E | Schalter FH Beifahrer Tipp |
| SFBHA | 5 | 0x08 | 0x08 | E | Schalter FH Beifahrer Hinten auf |
| SFBHZ | 5 | 0x10 | 0x10 | E | Schalter FH Beifahrer Hinten zu |
| SFBHT | 5 | 0x20 | 0x20 | E | Schalter FH Beifahrer Hinten Tipp |
| SSPO | 6 | 0x01 | 0x01 | E | Schalter Spiegel oben |
| SSPU | 6 | 0x02 | 0x02 | E | Schalter Spiegel unten |
| SSPR | 6 | 0x04 | 0x04 | E | Schalter Spiegel rechts |
| SSPL | 6 | 0x08 | 0x08 | E | Schalter Spiegel links |
| SSBT | 6 | 0x10 | 0x10 | E | Schalter Spiegel Beifahrer Verstellen |
| SSPE | 6 | 0x20 | 0x20 | E | Schalter Spiegel Einklappen |
| RFHFZ | 7 | 0x01 | 0x01 | A | Relais Fensterheber Fahrertuer zu |
| RFHFA | 7 | 0x02 | 0x02 | A | Relais Fensterheber Fahrertuer auf |
| DAY_MODE | 7 | 0x10 | 0x10 | A | LED Mode (Tag oder Nacht) |
| LED_ON | 7 | 0x20 | 0x20 | A | LED ein |
| BREMS | 8 | 0x01 | 0x01 | A | Motoren Spiegel bremsen |
| MFSE | 8 | 0x02 | 0x02 | A | Motor Spiegel Einklappen |
| MSFA | 8 | 0x04 | 0x04 | A | Motor Spiegel Ausklappen |
| SP_AB | 8 | 0x08 | 0x08 | A | Spiegel abwaerts |
| SP_AUF | 8 | 0x10 | 0x10 | A | Spiegel aufwaerts |
| SP_RE | 8 | 0x20 | 0x20 | A | Spiegel rechts |
| SP_LI | 8 | 0x40 | 0x40 | A | Spiegel links |
| SP_HZ | 8 | 0x80 | 0x80 | A | Spiegel heizen |
| MER | 9 | 0x01 | 0x01 | A | Motor ZV entriegeln |
| MVR | 9 | 0x02 | 0x02 | A | Motor ZV verriegeln |
| MZS | 9 | 0x04 | 0x04 | A | Motor ZV sichern |
| MSVR | 9 | 0x08 | 0x08 | A | Motor ZV sichern in verriegelt |
| BRKZS | 9 | 0x10 | 0x10 | A | Bremsen ZV |
| U2OFF | 9 | 0x20 | 0x20 | A | Versorgungsspannung U2 |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
