# svt_83.prg

## General

|  |  |
| --- | --- |
| File | svt_83.prg |
| Type | PRG |
| Jobs | 27 |
| Tables | 8 |
| Origin | Helbako A. Spanner, Stefan Fleck, magnasteyr |
| Revision | 1.01 |
| Author | HELBAKO E2 Spanner |
| ECU Comment | SGBD fuer E83 Servotronic |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SVT E83 |  |  |
| ORIGIN | string | Helbako A. Spanner, Stefan Fleck, magnasteyr |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | HELBAKO E2 Spanner |  |  |
| COMMENT | string | SGBD fuer E83 Servotronic |  |  |
| PACKAGE | string | 0.11 |  |  |
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

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### C_CI_LESEN

Codierindex lesen Standard Codierjob

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

### SPEICHER_LESEN

Lesen des internen Speichers der SVT Als Argumente werden die Anzahl und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | 1 - 32 |
| ADRESSE | int | 0x0000 - 0xFFFF |

### STATUS_IO_LESEN

es werden die Eingangs- und Ausgangsstati aus dem Steuergeraet gelesen Die Auflistung der Statusbits erfolgt von LSB nach MSB

_No arguments._

### STEUERN_WANDLERSTROM

Default ident job

| Name | Type | Description |
| --- | --- | --- |
| PWM_IN_PROZENT | unsigned char | PWM-Duty-Cycle |

### RESET

Steuergeraet in RESET-Zustand versetzen

_No arguments._

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LOESCHEN

modifizierter Default-Job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### IDENT_ERWEITERT

Identdaten lesen

_No arguments._

### SPEICHER_SCHREIBEN

Schreibzugriff auf einzelne RAM-Zellen Als Argumente wird die Adresse der zu aendernden Zelle sowie deren Soll-Inhalt uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | RAM   : 0x0000 - 0x07FF EEPROM: 0x0800 - 0x0BFF |
| DATA | int | 0x00 - 0xFF, neuer Inhalt der Zelle |

### STATUS_SERIENNUMMER

Seriennummer des Moduls

_No arguments._

### STATUS_AD_WERTE

Register der AD-Umsetzer auslesen

_No arguments._

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Byte 0:               01=Daten 02=Maskenbyte (nicht unterstuetzt Byte 1:               Wortbreite (0:Byte, 2:Word, 3:DWord) Byte 2:               Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3:               Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4:               Byteparameter 1 Byte 5,6:             WordParameter 1 (low/high) Byte 7,8:             WordParameter 2 (low/high) Byte 9,10,11,12:      Maske (linksbuendig) Byte 13,14:           Anzahl Bytedaten (low/high) Byte 15,16:           Anzahl Wortdaten (low/high) Byte 17:              Byteadresse im Block Byte 18,19,20:        Blockadresse (low, middle, high) Byte 21,....:         Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### STATUS_CPCBO

Meßwert der Stromplausibilisierung vor Wandlerbestromung

_No arguments._

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte  21+Anzahl Daten: ETX (0x03) |

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
| 0x00 | Klemme 30 |
| 0x01 | Lastkreis |
| 0x02 | Messpfad |
| 0x03 | ECU intern |
| 0x04 | CAN low |
| 0x05 | CAN high |
| 0x06 | ASC1 |
| 0x07 | DME2_DDE2 |
| 0x08 | INSTR2 |
| 0x09 | Strommmessung |
| 0x0A | KBus-Kommunikation |
| 0x0B | Codierdaten |
| 0xXY | unbekannter Fehlecode |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | statischer Fehler |
| 0x02 | sporadischer Fehler |
| 0x10 | Unterspannung Klemme 30 |
| 0x11 | Überspannung Klemme 30 |
| 0x12 | Unterbrechung Klemme 30 |
| 0x13 | Symptom unbekannt |
| 0x14 | Symptom unbekannt |
| 0x15 | Symptom unbekannt |
| 0x20 | Leitungsunterbrechung |
| 0x21 | Kurzschluss Servo1 gegen Klemme 31 |
| 0x22 | Kurzschluss Servo1/Servo2 gegen Klemme 30 |
| 0x23 | Kurzschluss Servo2 gegen Klemme 31 |
| 0x24 | Symptom unbekannt |
| 0x25 | Kurzschluss Servo1 gegen Servo2 = KS-Ventil |
| 0x30 | Symptom unbekannt |
| 0x31 | Symptom unbekannt |
| 0x32 | Symptom unbekannt |
| 0x33 | Symptom unbekannt |
| 0x34 | Symptom unbekannt |
| 0x35 | Messpfad defekt |
| 0x40 | Takt Fehler |
| 0x41 | Programmfluß Fehler |
| 0x42 | Watchdog Reset |
| 0x43 | EEPROM-Fehler |
| 0x44 | ROM-Fehler |
| 0x45 | RAM-Fehler |
| 0x50 | Symptom unbekannt |
| 0x51 | Symptom unbekannt |
| 0x52 | Symptom unbekannt |
| 0x53 | Leitungsunterbrechung = kein Signal |
| 0x54 | Kurzschluss gegen Klemme 31 |
| 0x55 | Kurzschluss gegen Klemme 30 |
| 0x60 | fehlerhaft |
| 0x61 | Timeout |
| 0x62 | Symptom unbekannt |
| 0x63 | Symptom unbekannt |
| 0x64 | Symptom unbekannt |
| 0x65 | Symptom unbekannt |
| 0x70 | Symptom unbekannt |
| 0x71 | Symptom unbekannt |
| 0x72 | Symptom unbekannt |
| 0x73 | nicht kalibriert |
| 0x74 | unplausibel bei Initialisierung |
| 0x75 | unplausibel im Betrieb |
| 0x80 | Symptom unbekannt |
| 0x81 | Symptom unbekannt |
| 0x82 | Symptom unbekannt |
| 0x83 | Symptom unbekannt |
| 0x84 | Klemmenstatus unplausibel |
| 0x85 | kein Klemmenstatus vom Kombi |
| 0x90 | Modul nicht codiert |
| 0x91 | Codierdaten fehlerhaft |
| 0x92 | Symptom unbekannt |
| 0x93 | Symptom unbekannt |
| 0x94 | Symptom unbekannt |
| 0x95 | Symptom unbekannt |
| 0xFF | nicht belegt |
| 0xXY | unbekannte Fehlerart |

### FARTBIT

| BIT | VALUE |
| --- | --- |
| 0x01 | 5 |
| 0x02 | 4 |
| 0x04 | 3 |
| 0x08 | 2 |
| 0x10 | 1 |
| 0x20 | 0 |

### FARTOFFSET

| ORT | OFFSET |
| --- | --- |
| 0x00 | 0x10 |
| 0x01 | 0x20 |
| 0x02 | 0x30 |
| 0x03 | 0x40 |
| 0x04 | 0x50 |
| 0x05 | 0x50 |
| 0x06 | 0x60 |
| 0x07 | 0x60 |
| 0x08 | 0x60 |
| 0x09 | 0x70 |
| 0x0A | 0x80 |
| 0x0B | 0x90 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | ----   | ---- |
| 0x01 | Kilometerstand | km |
| 0x02 | Geschwindigkeit | km/h |
| 0x03 | Versorgungsspannung KL30 | V |
| 0xXY | unbekannte Umweltbedingung | -- |
