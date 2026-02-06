# KOMBIR50.prg

## General

|  |  |
| --- | --- |
| File | KOMBIR50.prg |
| Type | PRG |
| Jobs | 56 |
| Tables | 11 |
| Origin | BMW TI-431 Lothar Dennert |
| Revision | 1.05 |
| Author | Software-Style Mike Rafferty, BMW TI-431 Lothar Dennert, BMW TI-431 Robert Kuessel |
| ECU Comment | V6.9 of Diag Spec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBIR50 |  |  |
| ORIGIN | string | BMW TI-431 Lothar Dennert |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | Software-Style Mike Rafferty, BMW TI-431 Lothar Dennert, BMW TI-431 Robert Kuessel |  |  |
| COMMENT | string | V6.9 of Diag Spec |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Ident-Daten fuer Instrument Pack

_No arguments._

### AIF_SIA_DATEN_LESEN

Read the SIA from the User Information

_No arguments._

### AIF_DATUM_FZ_LESEN

Read the Build Data from the User Information Auslesen Herstelldatum des FZ

_No arguments._

### AIF_GWSZ_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen Read the Kilometers from the User Information Memory Block

_No arguments._

### GWSZ_OFFSET_LESEN

OFFSET-Wert des GWSZ aus EEPROM lesen

_No arguments._

### GWSZ_MINUS_OFFSET_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen und Offset abziehen

_No arguments._

### GWSZ_OFFSET_SCHREIBEN

OFFSET-Wert des GWSZ in EEPROM schreiben

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_OFFSET_WERT | int | absoluter Offset-Wert des GWSZ |

### GWSZ_RESET

GWSZ zuruecksetzen, nur moeglich wenn Km-Stand < 255

_No arguments._

### AIF_ZENTRALCODE_LESEN

Anwenderinfofeld Block 4 auslesen Read the ZCS from the AIF record

_No arguments._

### C_ZCS_LESEN

Anwenderinfofeld Block 4 auslesen Read the ZCS from the AIF record

_No arguments._

### C_ZCS_AUFTRAG

Write and verify the Central code

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal (8 ASCII nos + 1 ASCII c/sum) Basic features |
| SA | string | Zentralcode C2 - Sonderausstattung (16 ASCII nos + 1 ASCII c/sum) Particular equipment |
| VN | string | Zentralcode C3 - Versionsmerkmal (10 ASCII nos + 1 ASCII c/sum) Version information |

### AIF_FG_NR_LESEN

Read the VIN from the User Information Auslesen der Fahrgestellnummer aus dem Anwenderinfofeld

_No arguments._

### C_FG_LESEN

Read the VIN from the User Information Auslesen der Fahrgestellnummer aus dem Anwenderinfofeld

_No arguments._

### C_FG_AUFTRAG

Schreiben der 7-stelligen Fahrgestellnummer Write the 7 digit VIN into block 2 of the AIF record

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) VIN Either 17 or 18 characters - if 18 the last character is ignored |

### C_C_LESEN

Codierdaten lesen Read the coding data

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Byte 0:               01=Daten 02=Maskenbyte (nicht unterstuetzt) Byte 1:               Wortbreite (0:Byte, 2:Word, 3:DW Byte 2:               Byteordnung (0:LSB zuerst, 1 MSB Byte 3:               Adressierung (0: freie Adressier Byte 4:               Byteparameter 1 Byte 5,6:             WordParameter 1 (low/high) Byte 7,8:             WordParameter 2 (low/high) Byte 9,10,11,12:      Maske (linksbuendig) Byte 13,14:           Anzahl Bytedaten (low/high) Byte 15,16:           Anzahl Wortdaten (low/high) Byte 17:              Byteadresse im Block Byte 18,19,20:        Blockadresse (low, middle, high) Byte 21,....:         Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### CODIERBLOCK_LESEN

Codierblock auslesen Read the coding data

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | Blockadresse |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren Write and then verify the coding data

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Byte 0:               01=Daten 02=Maskenbyte (nicht unterstuetzt) Byte 1:               Wortbreite (0:Byte, 2:Word, 3:DW Byte 2:               Byteordnung (0:LSB zuerst, 1 MSB Byte 3:               Adressierung (0: freie Adressier Byte 4:               Byteparameter 1 Byte 5,6:             WordParameter 1 (low/high) Byte 7,8:             WordParameter 2 (low/high) Byte 9,10,11,12:      Maske (linksbuendig) Byte 13,14:           Anzahl Bytedaten (low/high) Byte 15,16:           Anzahl Wortdaten (low/high) Byte 17:              Byteadresse im Block Byte 18,19,20:        Blockadresse (low, middle, high) Byte 21,....:         Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### RAM_LESEN

RAM-Speicher auslesen Read internal and external RAM

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | ECU address in RAM Hexwert (0x000-0x3FFF) der Adresse, ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Number of bytes of data to read, 1 -> 32 |

### ROM_LESEN

ROM-Speicher auslesen Read ROM out of IKE

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | ECU address in ROM Hexwert (0x8000-0xFEFF) der Adresse, ab der das Rom gelesen werden soll |
| BYTE_ANZAHL | int | Number of bytes of data to read, 1 -> 32 |

### EEPROM_LESEN

EEPROM-Speicher auslesen Read EEPROM out of IKE

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x0000-0xFFFF) der WortAdresse, ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Number of bytes of data to read, 1 -> 32 |

### PSEUDO_EEPROM_LESEN

PSEUDO-EEPROM-Speicher auslesen Read EEPROM out of IKE

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x0000-0xFFFF) der WortAdresse, ab der das Pseudo- EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Number of bytes of data to read, 1 -> 32 |

### STATUS_IO_POWER

Read Power digital inputs from Port 0

_No arguments._

### STATUS_IO_TRIP_RESET

Read Trip Reset digital input from Port 3

_No arguments._

### STATUS_IO_DIMMER_SW

Read dimmer switch digital inputs from Port 1

_No arguments._

### STATUS_IO_MISC

Read miscellaneous digital inputs from Port 2

_No arguments._

### STATUS_IO_HAZARD_SW

Read hazard switch digital input from Port 4

_No arguments._

### STATUS_IO_WAKE_UP

Read 10 minute wake up status from port 2

_No arguments._

### STATUS_IO_LCD_BACKLIGHT

Read LCD Backlight input from port 4

_No arguments._

### STATUS_IO_CAN_SHUTDOWN

Read status of CAN shutdown output from port 4

_No arguments._

### STATUS_IO_KBUS_INTERRUPT

Read status of Kbus interrupt from port 2

_No arguments._

### STATUS_IO_DIMMER_DRIVER

Read dimmer driver digital input from Port 4

_No arguments._

### STATUS_IO_LED_DIG_INPUTS

Read LED 19, LED 20 and LED A9 digital inputs from Port 3

_No arguments._

### STATUS_IO_MOTOR_DRIVERS

Read status of the motor drivers from port 2

_No arguments._

### READ_DIGITAL

Read all Digital Inputs for a specified port

| Name | Type | Description |
| --- | --- | --- |
| PORT | int | Port of the micro controller in the instrument pack ECU 1 -> 4 |

### STATUS_ANALOG

Read Analogue Input States

_No arguments._

### STATUS_TANKINHALT_LESEN

Tankinhalt lesen

_No arguments._

### STATUS_AUSSENTEMP_LESEN

Read Temprature

_No arguments._

### STEUERN_LEUCHTE

Force the warning lamps in byte blocks

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Bit0 = Spare Bit1 = EPAS warning lamp Bit2 = Engine Coolant Temp Warning Lamp Bit3 = Battery Charge Warning Lamp Bit4 = ABS Warning Lamp Bit5 = Low Fuel Warning Lamp Bit6 = Hazard Warning Lamp Bit7 = Saudi Overspeed Warning Lamp (KMH Packs Only) |
| BYTE1 | int | Bit0 = Deflation Warning System Lamp Bit1 = Seat Belt Warning Lamp Bit2 = SRS Warning Lamp Bit3 = Drive By Wire Warning Lamp Bit4 = Cruise Control Active Lamp Bit5 = Rear Facing Infant Seat Indicator Bit6 = Traction Control Warning Lamp Bit7 = Red Line 1 |
| BYTE2 | int | Bit0 = Red Line 2 Bit1 = Red Line 3 Bit2 = Red Line 4 Bit3 = Red Line 5 Bit4 = Main Beam (twin) Bit5 = Oil Pressure (twin) Bit6 = OBD (MIL) (twin) Bit7 = Brake System (twin) |
| BYTE3 | int | Bit0 = Bonnet + Boot Open (twin) Bit1 = Directional Indicators (twin) Bit2 = Cruise Control Active Lamp (twin) or Main Beam (single) Bit3 = Drive By Wire Warning Lamp (twin) or Oil Pressure (single) Bit4 = Saudi Overspeed Warning Lamp (twin) or OBD (MIL) (single) Bit5 = Engine Coolant Temp Warning Lamp (twin) or Brake System (single) Bit6 = ABS Warning Lamp (twin) or Bonnet + Boot Open (single) Bit7 = Battery Charge Warning Lamp (twin) or Directional Indicators (single) |
| BYTE4 | int | Bit0 = Red Line 1 Lamp Bit1 = Red Line 2 Lamp Bit2 = Red Line 3 Lamp Bit3 = Red Line 4 Lamp Bit4 = Red Line 5 Lamp Bit5 = Traction Control Warning Lamp Bit6 = EPAS Warning Lamp Bit7 = Deflation Warning System Lamp |
| BYTE5 | int | Bit0 = Spare Bit1 = Spare Bit2 = Spare Bit3 = Seat Belt Bit4 = SRS Bit5 = Rear Facing Infant Seat Indicator Bit6 = Spare Bit7 = Low Fuel Warning |
| BYTE6 | int | Bit0 = Fuel level indicator Bit1 = Fuel level indicator Bit2 = Fuel level indicator Bit3 = Fuel level indicator Bit4 = Fuel level indicator Bit5 = Fuel level indicator Bit6 = Fuel level indicator Bit7 = Spare |
| BYTE7 | int | Bit0 = Spare Bit1 = Spare Bit2 = Spare Bit3 = Spare Bit4 = not used Bit5 = not used Bit6 = not used Bit7 = not used |

### STEUERN_ANZEIGE

Force an instrument gauge

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Instrument gauge to force TACHO, DREHZAHL, TANKINHALT, TEMPERATUR Parameter "ORT" in table "Komponenten" |
| WERT | int | Forcing value for the gauge 0 -> 100% full scale deflection |

### STEUERN_ALL_GAUGES

Force all instrument gauges

| Name | Type | Description |
| --- | --- | --- |
| SPEEDO | int | Steuern TACHO Force the speedometer (0 - 100% full scale deflection) |
| TACHO | int | Steuern DREHZAHL Force the tachometer (0 - 100% fsd) |
| FUEL_GAUGE | int | Steuern TANKINHALT Force the fuel gauge (0 - 100% fsd) |
| TEMP_GAUGE | int | Steuern TEMPERATUR Force the temperature gauge (0 - 100% fsd) |
| BOOST_GAUGE | int | Steuern BOOST Force the boost pressure gauge (0 - 100% fsd) |

### STEUERN_PANEL_LIGHT

Force the Panel Illumination

| Name | Type | Description |
| --- | --- | --- |
| LIGHT_LEVEL | int | Illumination level (0 -> 100 percent) |

### STEUERN_BACKLIGHT

Force the Odometer and trip computer backlight

| Name | Type | Description |
| --- | --- | --- |
| LIGHT_LEVEL | int | light level (0 - 100 percent) |

### STEUERN_GONG

Force the gong

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Forcing mode of gong 0=No sound, 1=Single high note, 2=Single low note, 3=Tic Toc |

### STEUERN_LCD_ODO

Force the LCD Odometer

| Name | Type | Description |
| --- | --- | --- |
| TEST_MAP | int | Which test map to use (0x00 - 0x03) 0 = All on 1 = All off 2 = Pattern 2 3 = Pattern 3 |
| TEST_SEGMENT | int | Test segment (0x00 -> 0x08) Segment 00 = (Blank) Segment 01 = 'k' Segment 02 = 'm' Segment 03 = 'iles' Segment 04 = 'Inspection' Segment 05 = 'Oil Service' Segment 06 = (Clock Face) Segment 07 = (Blank) Segment 08 = '.' Segments 0x09 - 0xFF = Not Used |

### STEUERN_LCD_TRIP

Force the LCD trip computer

| Name | Type | Description |
| --- | --- | --- |
| TEST_MAP | int | Which test map to use (0x00 - 0x03) 0 = All on 1 = All off 2 = Pattern 2 3 = Pattern 3 |
| TEST_SEGMENT | int | Test segment (0x00 - 0x11) Segment 00 = 'Range' Segment 01 = 'trip 2' Segment 02 = 'Speed' Segment 03 = 'timer' Segment 04 = ' C' - Deg C (Grad C) Segment 05 = ' F' - Deg F (Grad F) Segment 06 = 'S' Segment 07 = 'mph' Segment 08 = 'km' Segment 09 = 'miles' Segment 0A = 'k/h' Segment 0B = 'm' Segment 0C = 'mpg' Segment 0D = 'km/' Segment 0E = 'L' Segment 0F = 'Temp' Segment 10 = 'Ave.S' Segment 11 = 'Cons' Segment 12 = '.' Segment 13 = '/100K' |

### STEUERN_SELBSTTEST

Perform ECU Self Test

_No arguments._

### SIA_RESET

Force an SIA reset

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | moegliche Uebergabeparameter: OEL_RESET, WEG_RESET, ZEIT_RESET parameter "SELECTOR" from table "SiaReset" |

### ZEITINSPEKTIONSZAEHLER_LESEN

Zeitinspektionszaehler auslesen

_No arguments._

### PRUEFSTEMPEL_LESEN

Read the Test Stamp Default pruefstempel_lesen job

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Read the Test Stamp Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden (0x00-0xFF) |
| BYTE2 | int | kann beliebig verwendet werden (0x00-0xFF) |
| BYTE3 | int | kann beliebig verwendet werden (0x00-0xFF) |

### SOFTWARE_RESET

Instrument cluster will reset itself Kombi loest selbststaendig einen Reset aus

_No arguments._

### SLEEP_MODE

Send the ECU into sleep mode

_No arguments._

### DIAGNOSE_AUFRECHT

ECU Pinging message

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden Terminate the diagnostic session

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0x28 | DODUCO |
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
| 0xFF | unbekannter Hersteller |

### DIGITAL

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| KLR | 3 | 0x01 | 0x01 |
| KLR_15 | 3 | 0x02 | 0x02 |
| KLR_50 | 3 | 0x04 | 0x04 |
| TRIP_RESET | 3 | 0x08 | 0x08 |
| DIMMER_1 | 3 | 0x04 | 0x04 |
| DIMMER_2 | 3 | 0x08 | 0x08 |
| PDC_INPUT | 3 | 0x01 | 0x01 |
| LOW_OIL_INPUT | 3 | 0x02 | 0x02 |
| TRIP_COMPUTER_INPUT | 3 | 0x04 | 0x04 |
| LOW_BRAKE_FLUID_INPUT | 3 | 0x08 | 0x08 |
| ALTERNATOR_CHARGE_INPUT | 3 | 0x10 | 0x10 |
| REVERSE_GEAR_INPUT | 3 | 0x20 | 0x20 |
| SEAT_BELT | 3 | 0x40 | 0x40 |
| HAND_BRAKE_INPUT | 3 | 0x80 | 0x80 |
| HAZARD_SWITCH | 3 | 0x01 | 0x01 |
| DIMMER | 3 | 0x04 | 0x04 |
| SPARE_LED_A9 | 3 | 0x20 | 0x20 |
| TACHO_RED_LINE_LED_19 | 3 | 0x40 | 0x40 |
| TACHO_RED_LINE_LED_20 | 3 | 0x80 | 0x80 |
| MOTOR_DRIVERS_RESET | 3 | 0x02 | 0x02 |
| MOTOR_DRIVERS_ERROR | 3 | 0x20 | 0x20 |
| CENTRE_GAUGE_MOTOR | 3 | 0x40 | 0x40 |
| TEMP_AND_FUEL_MOTORS | 3 | 0x80 | 0x80 |
| 10_MIN_TIMER | 3 | 0x01 | 0x01 |
| LCD_BACKLIGHT | 3 | 0x08 | 0x08 |
| CAN_SHUTDOWN_OUTPUT | 3 | 0x80 | 0x80 |
| KBUS_INTERRUPT | 3 | 0x10 | 0x10 |
| ?? | FF | 0x00 | 0xFF |

### ANALOG

| NAME | FACT_A | FACT_B | EINH |
| --- | --- | --- | --- |
| AD1_FUEL_SENDER_1 | 1.0 | 0.0 |  |
| AD0_FUEL_SENDER_2 | 1.0 | 0.0 |  |
| AD2_AMBIENT_TEMP | 1.0 | 0.0 |  |
| AD3_AMBIENT_LIGHT_LEVEL | 1.0 | 0.0 |  |
| AD4 | 1.0 | 0.0 |  |
| AD5_BATTERY_VOLTS | 0.019698 | 0.93 | Volts |
| AD6 | 1.0 | 0.0 |  |
| AD7 | 1.0 | 0.0 |  |
| BOOST_PRESSURE_CAN | 1.0 | -100.0 | kPa |
| ROAD_SPEED_CAN | 0.0625 | 0.0 | km/h |
| TACHO_CAN | 0.15625 | 0.0 | Umdrehunge pro Minute |
| FUEL_CONSUMPTION_CAN | 1.0 | 0.0 | Mikroliter |
| ENGINE_TEMP_CAN | 0.75 | -48.0 | Grad C |
| Unknown item | 0.0 | 0 |  |

### LEDDATA

| NAME | BYTE | VALUE |
| --- | --- | --- |
| HIGH_COOLANT_TEMP | 0 | 0x04 |
| BATTERY_CHARGE | 0 | 0x08 |
| LOW_OIL_PRESSURE | 0 | 0x10 |
| LOW_FUEL | 0 | 0x20 |
| HAZARD | 0 | 0x40 |
| MAIN_BEAM | 0 | 0x80 |
| BONNET | 1 | 0x01 |
| ABS | 1 | 0x02 |
| BRAKE_SYSTEM | 1 | 0x04 |
| DRIVE_BY_WIRE | 1 | 0x08 |
| MIL | 1 | 0x10 |
| DI | 1 | 0x20 |
| SEAT_BELT | 1 | 0x40 |
| RED_LINE_3 | 2 | 0x01 |
| RED_LINE_1 | 2 | 0x02 |
| RED_LINE_4 | 2 | 0x04 |
| CAN_CRUISE_ACTIVE | 3 | 0x01 |
| CAN_TRACTION_CONTROL | 3 | 0x02 |
| CAN_SEAT_BELT | 3 | 0x04 |
| CAN_SAUDI_OVERSPEED | 3 | 0x08 |
| CAN_DRIVE_BY_WIRE | 3 | 0x10 |
| CAN_MIL | 3 | 0x20 |
| CAN_MAIN_BEAM | 3 | 0x40 |
| CAN_ABS | 3 | 0x80 |
| CAN_BREAK_SYSTEM | 4 | 0x01 |
| CAN_BONNET | 4 | 0x02 |
| CAN_DI | 4 | 0x04 |
| CAN_TIRE_DEFLATION | 4 | 0x08 |
| Unknown item | 0 | 0x00 |

### ROVERPARTPREFIX

| CODE | PREFIX |
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
| 0xB6 | YUW |
| 0xFF | ??? |

### SIARESET

| SELECTOR | RESET | TEXT |
| --- | --- | --- |
| OEL_RESET | 0x01 | Oel Service Reset |
| WEG_RESET | 0x02 | Inspektion Reset |
| ZEIT_RESET | 0x04 | Zeit Service Reset |
|  | 0x00 |  |

### KOMPONENTEN

| ORT | BYTE | TEXT |
| --- | --- | --- |
| TACHO | 0x0A | Tachometer |
| DREHZAHL | 0x0B | Tachometer |
| TANKINHALT | 0x0C | Tankuhr |
| TEMPERATUR | 0x0D | Temperaturmesser |
| BOOST | 0x0E | Ladedruckmesser |
| unbekannt | 0xFF |  |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x87 | K-Bus Kurzschluss gegen Masse oder Batteriespannung |
| 0x8F | Batteriespannung > 16V - Fehler in Lichtmaschine |
| 0xC7 | Ölsender Eingang input Kurzschluss gegen Masse oder Batteriespannung |
| 0xCE | Aussentmperatur Sensor Kurzschluss zu Masse oder Batteriespannung |
| 0x8C | KL.R unplausible Bedingung |
| 0xCF | SIA Reset Fehler - DS2 PIN Kurschluss gegen Masse länger als 1 Minute |
| 0xBE | LM-EEPROM-Fehler |
| 0xBF | EEPROM Checksum Fehler |
| 0xC1 | TWEG + (Tacho) - Motordrehzahl oberhalb 3000 Umdrehungen für 10 Minuten ohne zurückgelegtem Weg |
| 0xC3 | TD - Fuel used but engine speed is 0 for longer than 1 second |
| 0x8D | Notprogramm - Getriebe SG hat Getriebe falsches Flag gesendet |
| 0xF0 | CAN: Bus Off - CAN HI Kurschluss gegen Masse, CAN Low gegen Batteriespannung oder CAN HI gegen CAN LO |
| 0xF4 | CAN: Keine ID - Kein CAN- Signal für 1500ms und bus ist nicht ausgeschaltet |
| 0xF5 | CAN: Kein ASC1 - Keine ABS- Meldung für 1500ms |
| 0xF6 | CAN: Keine DME1 - Kein Telegramm erhalten 1 von EMS for 1500ms |
| 0xF7 | CAN: Keine DME2 - Kein Telegramm erhalten 2 von EMS for 1500ms |
| 0xF8 | CAN: Keine DME4 - Kein Telegramm erhalten 4 von EMS for 1500ms |
| 0xFD | CAN: Keine DME5 - Kein Telegramm erhalten 5 von EMS for 1500ms |
| 0xFB | CAN: Kein EGS1 - Kein Telegramm erhalten von ATCU für 1500ms |
| 0xFC | CAN: Kein RIP1 - Kein Telegramm erhalten von 'Remote Instrument Pack (RIP) |
| 0xFF | Unbekannter Fehler |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen Batterie |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Unplausibler Wert, ungueltiger Arbeitsbereich |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | Älterer Fehler |
| 0xFF | Unbekannter Status |

### SUPPLIERDATA

| INDEX | INFO |
| --- | --- |
| 0x00 | Zusätliche Software Identifikation |
| 0x01 | Elektronik / PCB Index |
