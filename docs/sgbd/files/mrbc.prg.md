# mrbc.prg

## General

|  |  |
| --- | --- |
| File | mrbc.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 3 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.021 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Boardcomputer BC-DS2 |  |  |
| ORIGIN | string | I+ME Actia GmbH, Keck |  |  |
| REVISION | string | 1.021 |  |  |
| AUTHOR | string | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### GP_TESTCOM

Kommunikation mit dem Steuergerät prüfen

_No arguments._

### IDENT

Modus  : Default

_No arguments._

### GP_TEILENUMMER

Lesen der BMW Teile-Nummer Byte 3-6

_No arguments._

### GP_HARDWARENUMMER

Lesen der Hardware Nummer Byte 7

_No arguments._

### GP_CODIERINDEX

Codier Index lesen Byte 8

_No arguments._

### GP_DIAGNOSEINDEX

Diagnose Index lesen Byte 9

_No arguments._

### GP_HERSTELLERDATUM_KW

Kalenderwoche Herstelldatum lesen Byte 10

_No arguments._

### GP_HERSTELLERDATUM_JAHR

Herstelldatum Jahr lesen Byte 11

_No arguments._

### GP_LIEFERANTENNUMMER

Lieferanten Nummer lesen Byte 12

_No arguments._

### GET_AUSSENTEMPERATUR

Außentemperatur lesen in Grad Celsius

_No arguments._

### GET_AUSSENTEMPERATUR_F

Außentemperatur lesen in Grad Fahrenheit

_No arguments._

### GET_RESET_TASTER

Status Reset Taster

_No arguments._

### GET_MODE_TASTER

Status Mode Taster

_No arguments._

### GET_FERNBEDIENUNGS_TASTER

Status Mode Taster

_No arguments._

### SL_TANKINHALT

Tankinhalt aus dem Speicher lesen Wert in Milli Liter

_No arguments._

### SL_TANKINHALT_USGAL

Tankinhalt aus dem Speicher lesen Wert in US Galonen

_No arguments._

### SL_TANKINHALT_GBGAL

Tankinhalt aus dem Speicher lesen Wert in GB Galonen

_No arguments._

### SL_KZAHL

Wert K Zahl lesen k_bc wert, Eeeprom Adresse 0x10000

_No arguments._

### SL_EINSPRITZZEIT

Einspritzzeit lesen s_bc wert, Eeeprom Adresse 0x10002

_No arguments._

### SP_SEGMENTE_ZUSTAND

Ansteuerung Segmente

| Name | Type | Description |
| --- | --- | --- |
| ONOFF | int | 1 - alle Segmente ein 0 - alle Segmente aus 2 - Reset |

### SP_HELLIGKEIT_WERT

Ansteuerung Helligkeit

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Wertebereich Value 10..190 |

### SP_RESET

Reset Steuergerät

_No arguments._

### SP_DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0x11 | AIF_NICHT_PROGRAMMIERT |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x01 | ERROR_ECU_FUNCTION_ANSTEUERBEDINGUNG_NICHT_ERFUELLT |
| 0x02 | ERROR_ECU_FUNCTION_UEBERGABEPARAMETER_UNGUELTIG |
| 0x05 | ERROR_ECU_FUNCTION NOCH NICHT GESTARTET |
| 0x06 | FUNCTION BEENDET; DATEN GUELTIG |
| 0x55 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0x18 | Continental Teves |
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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0xFF | unbekannter Hersteller |

### DIGITALARGUMENT

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | UNBEKANNT |
