# IHKAR50.prg

## General

|  |  |
| --- | --- |
| File | IHKAR50.prg |
| Type | PRG |
| Jobs | 22 |
| Tables | 11 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.3 |
| Author | SW-Style Rafferty, BMW TI-431 Küssel, BMW TI-430 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaautomatik R50 |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.3 |  |  |
| AUTHOR | string | SW-Style Rafferty, BMW TI-431 Küssel, BMW TI-430 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identification data

_No arguments._

### FS_LESEN

Read faults

_No arguments._

### FS_LOESCHEN

Clears All Faults

_No arguments._

### SPEICHER_LESEN

Read ECU Memory by Address Speicher lesen mit adresse

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS | unsigned long | Address in EEPROM 0x0000 -> 0x01FF |
| LENGTH | unsigned int | Length of memory to read, 1 -> 32 Anzahl spiecher lesen |

### SPEICHER_SCHREIBEN

Write memory to a specified address Speicher schreiben mit adresse

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS | unsigned long | Address in EEPROM 0x0000 -> 0x01FF |
| LENGTH | unsigned int | Length of memory to read, 1 -> 27 Anzahl spiecher schreiben |
| DATA | string | Data bytes to write |

### STATUS_SYSTEM_PARAMETER

Read the system parameters

_No arguments._

### READ_MANUFACTURER_DATA

Read both blocks of manufacturer data

_No arguments._

### STEUERN_SELF_TEST

Enter Self test mode

_No arguments._

### SG_RESET

Reset ECU

_No arguments._

### STEUERN_ACTUATORS

Force the blend actuators IO block 0

| Name | Type | Description |
| --- | --- | --- |
| FORCE_BLEND | int | Force Blend (1 = force, 0 = not force) |
| BLEND_PCT | int | Blend percentage 0 - 100% |
| FORCE_DISTRIB | int | Force Distrib (1 = force, 0 = not force) |
| DISTRIB_PCT | int | Distribution percentage 0 - 100% |
| FORCE_BLOWER | int | Force Blower (1 = force, 0 = not force) |
| BLOWER_LEVEL | int | Blower level 0 - 31 |

### STEUERN_LCD_LED

Force the LEDs and LCDs IO block 1

| Name | Type | Description |
| --- | --- | --- |
| FORCE_LCD_LED | int | Force LCDs and LEDs (1 = force, 0 = not force) |
| LCD_DUTY_CYCLE | int | LCD duty cycle wert 0 -> 255 |
| LED_BIT_0_TO_7 | int | LEDs Bits 0 to 7 (BIT = 1 LED ON, 0 LED OFF) wert 0 -> 255 |
| LED_BIT_8_TO_10 | int | LEDs Bits 8 to 10 (BIT = 1 LED ON, 0 LED OFF) Bits 11 -> 15 unused. wert 0 -> 7 |
| LCD_BIT_0_TO_7 | int | LCDs Bits 0 to 7 (BIT = 1 LCD ON, 0 LCD OFF) wert 0 -> 255 |
| LCD_BIT_8_TO_15 | int | LCDs Bits 8 to 15 (BIT = 1 LCD ON, 0 LCD OFF) wert 0 -> 255 |
| LCD_BIT_16_TO_23 | int | LCDs Bits 16 to 23 (BIT = 1 LCD ON, 0 LCD OFF) wert 0 -> 255 |
| LCD_BIT_24_TO_29 | int | LCDs Bits 24 to 29 (BIT = 1 LCD ON, 0 LCD OFF) Bits 30 -> 31 unused. wert 0 -> 63 |

### STEUERN_AIRCON_RECIRC

Force Air conditioning and recirculation IO block 2

| Name | Type | Description |
| --- | --- | --- |
| FORCE_AIRCON | int | Force Aircon (1 = force, 0 = not force) |
| AIRCON_ON | int | Air conditioning  value (1 = ON, 0 = OFF) |
| FORCE_RECIRC | int | Force Recirc (1 = force, 0 = not force) |
| RECIRC_ON | int | Recirculation value (1 - ON, 0 - OFF) |

### STATUS_IO_DIGITAL

Read IO States for block 0 - Push Buttons, LEDs and Set Points

_No arguments._

### STATUS_IO_ANALOGUE

Read IO States for block 0 - Push Buttons, LEDs and Set Points

_No arguments._

### CALIBRATE_MOTORS

Send manual calibration of blend and distribution motors message

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. Only the last 3 bytes can be written

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### DIAGNOSE_AUFRECHT

Ping message

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### ANALOGUE

| NAME | FACT_A | FACT_B | EINH |
| --- | --- | --- | --- |
| TEMP_SET_POINT | 0.1 | 0.0 | C |
| BLOWER_SET_POINT | 1.0 | 0.0 |  |
| LCD_DUTY_CYCLE | 1.0 | 0.0 |  |
| SUN_LOAD | 1.0 | 0.0 | W/m2 |
| CABIN_TEMP | 0.1 | 0.0 | C |
| HEATER_AIR_OFF_TEMP | 0.1 | 0.0 | C |
| BLENDDOOR_CURRENT_FDBK | 1.0 | 0.0 | % |
| DISTRIB_CURRENT_FDBK | 1.0 | 0.0 | % |
| MINUS_BLOWER_VOLTAGE | 0.1 | 0.0 | V |
| PLUS_BLOWER_VOLTAGE | 0.1 | 0.0 | V |
| BATTERY_VOLTAGE | 0.1 | 0.0 | V |
| ASPIRATOR_DIAG_FREQ | 1.0 | 0.0 | Hz |
| CALIBRATION_DISTRI_MOTOR | 0.0 | 0.0 |  |
| CALIBRATION_BLEND_MOTOR | 0.0 | 0.0 |  |
| SOFTWARE_VERSION | 0.0 | 0.0 |  |
| SOFTWARE_INDEX | 0.0 | 0.0 |  |
| ?? | 0.0 | 0.0 | ?? |

### DIGITAL

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| DISTRIB_SCREEN | 8 | 0x01 | 0x01 |
| DISTRIB_FEET | 8 | 0x02 | 0x02 |
| DISTRIB_FACE | 8 | 0x04 | 0x04 |
| BLOWER_AUTO | 8 | 0x08 | 0x08 |
| RECIRC | 8 | 0x10 | 0x10 |
| AC | 8 | 0x20 | 0x20 |
| DISTRIB_AUTO | 8 | 0x40 | 0x40 |
| RECIRC_AUTO | 8 | 0x80 | 0x80 |
| BLUE_RED_LED | 9 | 0x01 | 0x01 |
| LCD_LED | 9 | 0x02 | 0x02 |
| BACKLIGHT_LED | 9 | 0x04 | 0x04 |
| DISTRIB_FACE_LED | 9 | 0x08 | 0x08 |
| DISTRIB_SCREEN_LED | 9 | 0x10 | 0x10 |
| DISTRIB_FEET_LED | 9 | 0x20 | 0x20 |
| AUTO_LED | 9 | 0x40 | 0x40 |
| AC_LED | 9 | 0x80 | 0x80 |
| RECIRC_LED | 10 | 0x02 | 0x02 |
| HRW_HFS_LED | 10 | 0x04 | 0x04 |
| TEMP_UNIT_FARENHEIT | 10 | 0x80 | 0x80 |
| TEMP_PLUS_BUTTON | 11 | 0x01 | 0x01 |
| TEMP_MINUS_BUTTON | 11 | 0x02 | 0x02 |
| BLOWER_PLUS_BUTTON | 11 | 0x04 | 0x04 |
| BLOWER_MINUS_BUTTON | 11 | 0x08 | 0x08 |
| FACE_BUTTON | 11 | 0x10 | 0x10 |
| SCREEN_BUTTON | 11 | 0x20 | 0x20 |
| FEET_BUTTON | 11 | 0x40 | 0x40 |
| AUTO_BUTTON | 11 | 0x80 | 0x80 |
| AC_BUTTON | 12 | 0x01 | 0x01 |
| OFF_BUTTON | 12 | 0x02 | 0x02 |
| RECIRC_BUTTON | 12 | 0x04 | 0x04 |
| HRW_HFS_BUTTON | 12 | 0x08 | 0x08 |
| ?? | 0 | 0x00 | 0x00 |

### FORTTEXTE

| ORTNR | ORTTEXT |
| --- | --- |
| 0x01 | Solarsensor Fehler |
| 0x02 | Innenraumtemperaturfuehler Fehler |
| 0x03 | Heizluft aus Fehler |
| 0x04 | Verteilung Fehler |
| 0x05 | Mischklappe Fehler |
| 0x06 | Geblaese (-) Fehler |
| 0x07 | Geblaese (+) Fehler |
| 0x08 | Absauggeraet Fehler |
| 0x09 | Luftverteilungsmotor Fehler |
| 0x0A | Mischklappenmotor Fehler |
| 0xFE | Energiesparmode aktiviert |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Leitungsunterbrechung or Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung or Gebläse Kurzschluss |
| 0x04 | Frequenz < 15Hz |
| 0x05 | ungueltiger Wert fuer U-Batt |
| 0x06 | Rueckmeldung konstant |
| 0x07 | ungueltiger Wert fuer Masse |
| 0x08 | Flag = 1 |
| 0xFF | unbekannter Status |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0xFF | 0x02 | 0xFF | 0x01 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x02 | 0xFF | 0x02 | 0xFF | 0x01 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x03 | 0xFF | 0x02 | 0xFF | 0x01 | 0xFF | 0xFF |  0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x04 | 0xFF | 0x02 | 0xFF | 0x01 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x05 | 0xFF | 0x02 | 0xFF | 0x01 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x06 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x05 | 0xFF | 0x07 |
| 0x07 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x03 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x08 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x04 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x09 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x06 | 0xFF | 0x08 |
| 0x0A | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x06 | 0xFF | 0x08 |
| 0xFE | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x05 | 0xFF | 0x07 |
| 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 3 | 1 | 0x01 | 0x02 | 0x03 | -- |
| 0x02 | 3 | 1 | 0x01 | 0x02 | 0x04 | -- |
| 0x03 | 3 | 1 | 0x01 | 0x02 | 0x05 | -- |
| 0x04 | 3 | 1 | 0x01 | 0x02 | 0x06 | -- |
| 0x05 | 3 | 1 | 0x01 | 0x02 | 0x07 | -- |
| 0x06 | 4 | 1 | 0x01 | 0x02 | 0x08 | 0x09 |
| 0x07 | 3 | 1 | 0x01 | 0x02 | 0x08 | -- |
| 0x08 | 3 | 1 | 0x01 | 0x02 | 0x0A | -- |
| 0x09 | 3 | 1 | 0x01 | 0x0B | 0x0C | -- |
| 0x0A | 3 | 1 | 0x01 | 0x0B | 0x0D | -- |
| 0xFE | 4 | 1 | 0x01 | 0x02 | 0x08 | 0x09 |
| 0x00 | 0 | 0 | 0x00 | 0x00 | 0x00 | 0x00 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | UW_A | UW_B |
| --- | --- | --- | --- | --- |
| 0x01 | Batterie Spannung |  | 1.0 | 0 |
| 0x02 | IP Wert |  | 1.0 | 0 |
| 0x03 | FA2 + FA3 |  | 1.0 | 0 |
| 0x04 | FA1 + FA3 |  | 1.0 | 0 |
| 0x05 | FA1 + FA2 |  | 1.0 | 0 |
| 0x06 | FA5 |  | 1.0 | 0 |
| 0x07 | FA4 |  | 1.0 | 0 |
| 0x08 | Geblaese PWM |  | 1.0 | 0 |
| 0x09 | Geblaese + |  | 1.0 | 0 |
| 0x0A | Innenraumtemperatur |  | 1.0 | 0 |
| 0x0B | Rueckmeldung Wert |  | 1.0 | 0 |
| 0x0C | Luftverteilung Strom |  | 1.0 | 0 |
| 0x0D | Mischer Strom |  | 1.0 | 0 |
| 0x00 | ?? |  | 0.0 | 0 |
