# BSM46C_4.prg

## General

|  |  |
| --- | --- |
| File | BSM46C_4.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 6 |
| Origin | BMW TI-431 Krueger |
| Revision | 1.0 |
| Author | BMW TI-433 Teepe, TI-431 Krueger |
| ECU Comment | BSM46C_4 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 4-Kanal Beifahrer-Sitzmemory E46 |  |  |
| ORIGIN | string | BMW TI-431 Krueger |  |  |
| REVISION | string | 1.0 |  |  |
| AUTHOR | string | BMW TI-433 Teepe, TI-431 Krueger |  |  |
| COMMENT | string | BSM46C_4 |  |  |
| PACKAGE | string | 0.05 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### INITIALISIERUNG

Init-Job fuer B_SM46_3 automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer das B_SM46_3

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_WEITER

Diagnose aufrechterhalten

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_HIGH | int |  |
| ADRESSE_LOW | int |  |
| ANZAHL | int | 1 bis 16 |

### SPEICHER_SCHREIBEN

Beschreiben des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ZELLE | int | immer nur 1 Speicherzelle |

### STATUS_1_LESEN

Stati des B_SM46_3

_No arguments._

### STATUS_2_LESEN

Stati des B_SM46_3

_No arguments._

### STEUERN_IO

Ansteuern eines digitalen Einganges

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### VARIANTE_LESEN

SG-Variante aus Zelle 0x0124 auslesen

_No arguments._

### POSITIONEN_LESEN

3 Speicher- und aktuelle Position aus EEPROM auslesen

_No arguments._

### CODIERUNG_LESEN

auslesen der Codierdaten zur Individualisierung

_No arguments._

### CODIERUNG_SCHREIBEN

auslesen der Codierdaten und Umschreiben mit den uebergebenen Argumenten

| Name | Type | Description |
| --- | --- | --- |
| TIPPTASTENBETRIEB | int | 0=gesperrt, 1=frei |
| REAKTION_AUF_FERNBEDIENUNG | int | 0=keine Reaktion, 1=Reaktion, wird im Telegramm invertiert! |
| ABRUF_VARIANTE | int | 0=direkte Reaktion, 1=Reaktion nach Tueroeffnen |

### SG_STATUS_LESEN

auslesen der Systemstati aus dem Steuergeraet

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
| 0x55 | BHTC |
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
| 0x00 | Hallsensor Lehnenneigung, Kurzschluss nach Masse |
| 0x01 | Hallsensor Lehnenneigung, Unterbrechung |
| 0x02 | Hallsensor Lehnenneigung, Kurzschluss nach Ubatt |
| 0x03 | Hallsensor Sitzhoehe, Kurzschluss nach Masse |
| 0x04 | Hallsensor Sitzhoehe, Unterbrechung |
| 0x05 | Hallsensor Sitzhoehe, Kurzschluss nach Ubatt |
| 0x06 | Hallsensor Sitzneigung, Kurzschluss nach Masse |
| 0x07 | Hallsensor Sitzneigung, Unterbrechung |
| 0x08 | Hallsensor Sitzneigung, Kurzschluss nach Ubatt |
| 0x09 | Hallsensor Sitzschlitten, Kurzschluss nach Masse |
| 0x0A | Hallsensor Sitzschlitten, Unterbrechung |
| 0x0B | Hallsensor Sitzschlitten, Kurzschluss nach Ubatt |
| 0x0C | Hallsensor Kopfstuetze, Kurzschluss nach Masse |
| 0x0D | Hallsensor Kopfstuetze, Unterbrechung |
| 0x0E | Hallsensor Kopfstuetze, Kurzschluss nach Ubatt |
| 0x0F | Hallsensor Lehnenverriegelung, Kurzschluss nach Masse |
| 0x10 | Hallsensor Lehnenverriegelung, Unterbrechung |
| 0x11 | Hallsensor Lehnenverriegelung, Kurzschluss nach Ubatt |
| 0x12 | Hallsensor ST2 nicht aufgesteckt, Kurzschluss nach Masse |
| 0x13 | Steuergeraetefehler, Motorbruecke defekt |
| 0x14 | Sitzbedienschalter, Kurzschluss nach Ubatt |
| 0x15 | Sitzbedienschalter, Kurzschluss nach Masse |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### STEUERN

| STEUER_I_O | BYTE1 | BYTE2 | BYTE3 |
| --- | --- | --- | --- |
| STOP | 0x01 | 0x00 | 0x00 |
| SLV_VOR | 0x01 | 0x01 | 0x00 |
| SLV_ZUR | 0x01 | 0x02 | 0x00 |
| SHV_AUF | 0x01 | 0x04 | 0x00 |
| SHV_AB | 0x01 | 0x08 | 0x00 |
| SNV_AUF | 0x01 | 0x10 | 0x00 |
| SNV_AB | 0x01 | 0x20 | 0x00 |
| LNV_VOR | 0x01 | 0x40 | 0x00 |
| LNV_ZUR | 0x01 | 0x80 | 0x00 |
| KHV_AB | 0x01 | 0x00 | 0x02 |
| KHV_AUF | 0x01 | 0x00 | 0x01 |
| LED_AN | 0x03 | 0x01 | 0x00 |
| LED_AUS | 0x03 | 0x00 | 0x00 |
| EH_STOP | 0x04 | 0x00 | 0x00 |
| EH_VOR | 0x04 | 0x01 | 0x00 |
| EH_ZUR | 0x04 | 0x02 | 0x00 |
| XXX | Y | Z | Z |
