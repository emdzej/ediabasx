# ems2k_a.prg

## General

|  |  |
| --- | --- |
| File | ems2k_a.prg |
| Type | PRG |
| Jobs | 115 |
| Tables | 11 |
| Origin | BMW TI-433 Robert Kuessel |
| Revision | 0.6 |
| Author | Rover SSL M.Rafferty |
| ECU Comment | A00 Software Version |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EMS2K |  |  |
| ORIGIN | string | BMW TI-433 Robert Kuessel |  |  |
| REVISION | string | 0.06 |  |  |
| AUTHOR | string | Rover SSL M.Rafferty |  |  |
| COMMENT | string | A00 Software Version |  |  |
| SPRACHE | string | English |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### START_DIAGNOSTIC_SESSION

Begins a diagnostic session

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Diagnostic mode: 0x81=Standard, 0x83=EOL, 0x86=Development 0x85=Programming at 9.6k, 0xFF=Programming at 62.5k |

### SEED_KEY

Obtain security access to the ECU Schutzmechanismus SEED_KEY

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Security access mode Typ zugang 1 = breakdown, 3 = dealer, 5 = End of line 7 = programming, 9 = development |

### IDENT

Ident-Daten fuer EMS2000

_No arguments._

### IDENT_EXTENDED

Read additional ECU Ident information

_No arguments._

### DIAGNOSE_AUFRECHT

Tester present message

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden Stop the diagnostic session

_No arguments._

### SG_RESET

Reset the ECU

_No arguments._

### STAT_FREEZEFRAME

Read the freeze frame data

| Name | Type | Description |
| --- | --- | --- |
| DTC | int | Diagnostic trouble code See "ORT" column in table "FOrtTexte" Fehler ort nummer |

### FS_LESEN

Read all faults

_No arguments._

### FS_LOESCHEN

Clears All Faults

_No arguments._

### READ_MEMORY

Read ECU Memory by Address Speicher lesen mit Adresse

| Name | Type | Description |
| --- | --- | --- |
| MEM_ADDRESS | long | 24 bit ECU memory address addresse speicher SG 0xF600 -> 0xFDFF (IRAM) 0xE000 -> 0xE7FF (XRAM) 0x4000 -> 0x7FFF (EEPROM) 0xC000 -> 0xDFFF (EXRAM) 0x70000 -> 0xEFFFF (FLASH) |
| MEM_LENGTH | int | Length of memory to be read (1 - 254) Umfang speicher lesen |

### WRITE_MEMORY

Write data to a specified memory address Speicher schreiben mit Adresse

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS | long | 24 bit ECU memory address addresse speicher SG 0xF600 -> 0xFDFF (IRAM) 0xE000 -> 0xE7FF (XRAM) 0xC000 -> 0xDFFF (EXRAM) |
| LENGTH | int | Length of memory to write (1 -> 250) Umfang speicher schreiben |
| MEMDATA | string | Data to write Data format hex: 0xXX 0xXX ... 0xXX Data format decimal: d d ... d Data format binary: 0ybbbbbbbb 0ybbbbbbbb ... 0ybbbbbbbb |

### ACCESS_TIMING_PARAMETERS

Read the comms timing parameters Kommunikationsparameter lesen

_No arguments._

### CHANGE_TIMING_PARAMETERS

Set timing parameters for standard or programming mode Diagnosetimeout aendern

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Set timing parameters mode 0 = set timing parameters to standard mode 1 = set timing parameters to programming mode |

### CODE_LOESCHEN

Erase the software code and calibration data within flash Das kalibrabrierung daten und software schluessel in flash loeshen

_No arguments._

### DATA_LOESCHEN

Erase the calibration data within flash Das kalibrabrierung daten in flash loeshen

_No arguments._

### CHECK_REPROG_DEPENDING

Calculate the checksum and check the coherence system

_No arguments._

### REPORT_REPROG_STATUS

Get the status of reprogramming after a mistake Programmieren status nach fehler auslesen

_No arguments._

### LEARN_IMOB_SEED

The ECM learns the immobolisation seed

_No arguments._

### RESYNC_IMOB_SEED

The ECM resynchronises the immobolisation seed

_No arguments._

### SLEEP_MODE

Stop the power latch phase

_No arguments._

### START_MAN_TEST

Start the end of line test Hersteller test

_No arguments._

### START_CAT_TEST

Start catalyst test Katalysator test

_No arguments._

### GIB_SELF_TEST

Run the Gearbox Interface Box self test routine Getriebe Interface test

_No arguments._

### LDP_TEST

Run the Leak Detection Pump test Leckdiagnosepumpen test

_No arguments._

### EXECUTE_RAM_ROUTINE

Start a routine which is stored within RAM (MTOS)

_No arguments._

### SWITCH_TO_BOOT

Allow activation of the boot software mode Needed for programming

_No arguments._

### SWNR_SCHREIBEN

Write the Software number

| Name | Type | Description |
| --- | --- | --- |
| SWNR | string | Software number - 8 characters |

### TUNE_NR_SCHREIBEN

Write the tune part number

| Name | Type | Description |
| --- | --- | --- |
| TUNE_NR | string | Tune part number - 8 characters |

### FLASH_SCHREIBEN_ADRESSE

Request download

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 24 bit ECU memory address Addresse speicher SG 0x108000 -> 0x13FFFF (FLASH) |
| SIZE | long | Uncompressed memory size 0x000000 -> 0xFFFFFF Speicher umfang |

### FLASH_SCHREIBEN

Transfer data to the ECU

| Name | Type | Description |
| --- | --- | --- |
| DATA | binary | Data to transfer to the ECU (250 bytes) |

### FLASH_SCHREIBEN_ENDE

Exit data transfer

_No arguments._

### AIF_LESEN

Read the AIF record

_No arguments._

### AIF_SCHREIBEN

Write the AIF record

| Name | Type | Description |
| --- | --- | --- |
| AIF_FG_NR | string | Fahrgestellnummer VIN - 17 or 18 characters - if 18 the last character is ignored |
| AIF_DATUM | string | Fertigungsdatum Programming date - 6 characters |
| AIF_ZB_NR | string | Zusbaunummer Assembly number - 14 characters |
| AIF_BEHOERDEN_NR | long | Behoerdennummer Homologation test number |
| AIF_PROGG_NR | string | Programming unit serial number - 12 characters |
| AIF_WERKSCODE | string | Plant / Workshop number (Dealer number) - 6 characters |
| AIF_KM_STAND | long | km-Stand (0 -> 655350) |
| AIF_PROG_STATUS | string | Program Status - 8 characters |

### C_FG_LESEN

Auslesen der Fahrgestellnummer aus dem Anwenderinfofeld Read the VIN from the current AIF record

_No arguments._

### C_FG_AUFTRAG

Schreiben der 17-stelligen Fahrgestellnummer in dem Anwenderinfofeld Write the VIN into the AIF record

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer VIN Either 17 or 18 characters - if 18 the last character is ignored |

### C_ZCS_LESEN

Read the ZCS record

_No arguments._

### C_ZCS_AUFTRAG

Write and verify the Central code

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal (8 ASCII nos + 1 ASCII c/sum) Basic features |
| SA | string | Zentralcode C2 - Sonderausstattung (16 ASCII nos + 1 ASCII c/sum) Particular equipment |
| VN | string | Zentralcode C3 - Versionsmerkmal (10 ASCII nos + 1 ASCII c/sum) Version information |

### C_AZCS_LESEN

Read the auxiliary ZCS record

_No arguments._

### C_AZCS_AUFTRAG

Write and verify the Auxiliary Central code

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal (8 ASCII nos + 1 ASCII c/sum) |
| SA | string | Zentralcode C2 - Sonderausstattung (16 ASCII nos + 1 ASCII c/sum) |
| VN | string | Zentralcode C3 - Versionsmerkmal (10 ASCII nos + 1 ASCII c/sum) |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Byte 0:               01=Daten 02=Maskenbyte (nicht unterstuetzt) Byte 1:               Wortbreite (0:Byte, 2:Word, 3:DW Byte 2:               Byteordnung (0:LSB zuerst, 1 MSB Byte 3:               Adressierung (0: freie Adressier Byte 4:               Byteparameter 1 Byte 5,6:             WordParameter 1 (low/high) Byte 7,8:             WordParameter 2 (low/high) Byte 9,10,11,12:      Maske (linksbuendig) Byte 13,14:           Anzahl Bytedaten (low/high) Byte 15,16:           Anzahl Wortdaten (low/high) Byte 17:              Byteadresse im Block Byte 18,19,20:        Blockadresse (low, middle, high) Byte 21,....:         Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren Write and verify coding data

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Byte 0:               01=Daten 02=Maskenbyte (nicht unterstuetzt) Byte 1:               Wortbreite (0:Byte, 2:Word, 3:DW Byte 2:               Byteordnung (0:LSB zuerst, 1 MSB Byte 3:               Adressierung (0: freie Adressier Byte 4:               Byteparameter 1 Byte 5,6:             WordParameter 1 (low/high) Byte 7,8:             WordParameter 2 (low/high) Byte 9,10,11,12:      Maske (linksbuendig) Byte 13,14:           Anzahl Bytedaten (low/high) Byte 15,16:           Anzahl Wortdaten (low/high) Byte 17:              Byteadresse im Block Byte 18,19,20:        Blockadresse (low, middle, high) Byte 21,....:         Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_CHECKSUM

Berechnung und Speicherung der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### STEUERN_ACTUATOR

Actuator test

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name of the Actuator test to perform From the "NAME" column of the table "Actuator_test" MAIN_RELAY FUEL_PUMP AC_COMPRESSOR FAN_RELAY_HIGH FAN_RELAY_MED FAN_RELAY_LOW CANISTER_PURGE THROTTLE_ACT LEAK_DETECTION PRIME_FUEL CVT_SHIFT_LOCK INJECTOR_1 INJECTOR_2 INJECTOR_3 INJECTOR_4 UPSTR_O2_HEAT DWSTR_O2_HEAT DISABLE_ACTS |
| CONTROL | int | Control option 0=return control to ECU, 1=report current status, 7=short term adjustments |

### STEUERN_APPLICATION_CORRECTION

Application correction. Non volatile adjustment

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name of the Application correction to make From the "NAME" column of the table "Applic_Correction" IDLE_CO_TRIM IDLE_TEMP_CORR IDLE_DUR_CORR |
| CONTROL | int | Control option 0=return control to ECU, 1=report current status 7=short term adjustments, 8=long term adjustments |
| STATE | int | only used when control option is short term adjustments 0=decrease short term adjustment, 1=increase short term adjustments |

### STEUERN_ADAPTIVE_VALUES

Reset adaptive values

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name of the Adaptive value to reset From the "NAME" column of the table "Adaptive_Values" ALL_VALUES MAP KNOCK_CONTROL ECT_THROTTLE CVT LAMBDA MISFIRING IDLE_SPEED DYNAMIC_TRIM KNOCK_SPARK_ADV |

### STATUS_ANA_CAN_ASC1

Read Analogue Input and Output States for LID 01 Read Anti Slip Control 1 analogue information

_No arguments._

### STATUS_ANA_WHEEL_SPEED

Read Analogue Input and Output States for LID 02 Read Anti Slip Control 2 analogue information (wheel speeds)

_No arguments._

### STATUS_ANA_CAN_ASC4

Read Analogue Input and Output States for LID 04 Read Anti Slip Control 4 analogue information

_No arguments._

### STATUS_ANA_CAN_DME1

Read Analogue Input and Output States for LID 05 Read Digital Motor Electronics 1 analogue information

_No arguments._

### STATUS_ANA_CAN_DME2

Read Analogue Input and Output States for LID 06 Read Digital Motor Electronics 2 analogue information

_No arguments._

### STATUS_ANA_FUEL_CONS

Read Analogue Input and Output States for LID 07 Read Digital Motor Electronics 4 analogue information - Fuel Consumption

_No arguments._

### STATUS_ANA_CAN_DME5

Read Analogue Input and Output States for LID 08 Read Digital Motor Electronics 5 analogue information

_No arguments._

### STATUS_ANA_WHEEL_TORQUE

Read Analogue Input and Output States for LID 09 Read Digital Motor Electronics 6 analogue information (wheel torques)

_No arguments._

### STATUS_ANA_CAN_DME_ZZ

Read Analogue Input and Output States for LID 0A Read Market and Engine information

_No arguments._

### STATUS_ANA_CAN_EGS1

Read Analogue Input and Output States for LID 0B Read Electonic Gear Selector 1 analogue information

_No arguments._

### STATUS_ANA_CVT1

Read Analogue Input and Output States for LID 0C Read Constant Velocity Transmission 1 analogue information

_No arguments._

### STATUS_ANA_CAN_INSTR2

Read Analogue Input and Output States for LID 0D Read Instruments 2 analogue information

_No arguments._

### STATUS_ANA_AC_EVAP

Read Analogue Input and Output States for LID 0F Read Instruments 2 analogue information - Air Conditioner Evaporator temperature

_No arguments._

### STATUS_ANA_ENGINE2

Read Analogue Input and Output States for LID 11 Read Engine 2 analogue information

_No arguments._

### STATUS_ANA_ENGINE3

Read Analogue Input and Output States for LID 12 Read Engine 3 analogue information

_No arguments._

### STATUS_ANA_ENGINE4

Read Analogue Input and Output States for LID 13 Read Engine 4 analogue information

_No arguments._

### STATUS_ANA_ENGINE5

Read Analogue Input and Output States for LID 14 Read Engine 5 analogue information

_No arguments._

### STATUS_ANA_O2_HEATER

Read Analogue Input and Output States for LID 15 Read Engine 6 analogue infomation - oxygen sensor heaters

_No arguments._

### STATUS_ANA_ENGINE7

Read Analogue Input and Output States for LID 16 Read Engine 7 analogue information

_No arguments._

### STATUS_ANA_FUEL_TRIM

Read Analogue Input and Output States for LID 17 Read Engine 8 analogue information - fuel trim

_No arguments._

### STATUS_ANA_ENGINE9

Read Analogue Input and Output States for LID 18 Read Engine 9 analogue information

_No arguments._

### STATUS_ANA_INJ_TIME

Read Analogue Input and Output States for LID 19 Read Engine 10 analogue information - injection times

_No arguments._

### STATUS_ANA_EWS

Read Analogue Input and Output States for LID 20 Read Immobiliser information

_No arguments._

### STATUS_ANA_MAN_TEST

Read Analogue Input and Output States for LID 21 Read Manufacturing Test information

_No arguments._

### STATUS_ANA_CVT2

Read Analogue Input and Output States for LID 23 Read Constant Velocity Transmission 2 analogue information

_No arguments._

### STATUS_IO_CAN_ASC1

Read Digital Input States for LID 01 Read Anti Slip Control 1 digital information

_No arguments._

### STATUS_IO_DRIVING_STABILITY

Read Digital Input States for LID 03 Read Driving Stability control status

_No arguments._

### STATUS_IO_CAN_ASC4

Read Digital Input States for LID 04 Read Anti Slip Control 4 digital information

_No arguments._

### STATUS_IO_CAN_DME1

Read Digital Input States for LID 05 Read Digital Motor Electronics 1 digital information

_No arguments._

### STATUS_IO_CAN_DME4

Read Digital Input States for LID 07 Read Digital Motor Electronics 4 digital information

_No arguments._

### STATUS_IO_WHEEL_TORQUE

Read Digital Input States for LID 09 Read Digital Motor Electronics 6 digital information - torque

_No arguments._

### STATUS_IO_SHIFTING

Read Digital Input States for LID 0B Read State of Gear Shifting

_No arguments._

### STATUS_IO_CVT1

Read Digital Input States for LID 0C Read Constant Vehicle Transmission 1 digital information

_No arguments._

### STATUS_IO_INSTR3

Read Digital Input States for LID 0E Read Instruments 3 digital information

_No arguments._

### STATUS_IO_ENGINE1

Read Digital Input States for LID 10 Read Engine 1 digital information

_No arguments._

### STATUS_IO_ENGINE2

Read Digital Input States for LID 11 Read Engine 2 digital information

_No arguments._

### STATUS_IO_EWS

Read Digital Input States for LID 20 Read Immobiliser digital information

_No arguments._

### STATUS_IO_MAN_TEST

Read Digital Input States for LID 21 Read Manufacturing Test digital information

_No arguments._

### STATUS_IO_CRUISE

Read Digital Input States for LID 22 Read Cruise digital information

_No arguments._

### STATUS_IO_OIL_TEST_OK

Read Digital Input States for LID 23 Read whether it is OK to measure the oil level

_No arguments._

### STATUS_IO_READY_CODE

Read Digital Input States for LID 24 Read Readiness code digital information

_No arguments._

### STATUS_MOTORDREHZAHL

Motordrehzahl Read the engine speed

_No arguments._

### STATUS_LL_SOLLDREHZAHL

Solldrehzahl Leerlaufregler auslesen Read the target idle speed

_No arguments._

### STATUS_ZUENDWINKEL

Zuendwinkel Zyl1 Read the spark advance angle

_No arguments._

### STATUS_LMM_MASSE

Luftmasse Read the air mass

_No arguments._

### STATUS_EINSPRITZZEIT

Einspritzzeit EV1 Read the injection duration

_No arguments._

### STATUS_LAST

Lastsignal auslesen Read the calculated load value

_No arguments._

### STATUS_DKP_WINKEL

DK-Winkel Read the throttle angle

_No arguments._

### STATUS_SYSTEMCHECK_LAUFUNRUHE

Laufunruhe lesen Read the engine roughness for each cylinder

_No arguments._

### STATUS_LS_VKAT_HEIZUNG_TV_1

norm. Heizleist. L-Sonde vKat1 Read the upstream oxygen sensor heater

_No arguments._

### STATUS_LS_NKAT_HEIZUNG_TV_1

norm. Heizleist. L-Sonde hKat1 Read the downstream oxygen sensor heater

_No arguments._

### STATUS_LS_VKAT_SIGNAL_1

Lambdasondenspannung v Kat Read the voltage of the upstream oxygen sensor

_No arguments._

### STATUS_LS_NKAT_SIGNAL_1

Lambdasondenspannung n Kat Read the voltage of the downstream oxygen sensor

_No arguments._

### STATUS_LAMBDA_INTEGRATOR_1

Lambdaregler1 Read the fuel control bank 1

_No arguments._

### STATUS_TE_TASTVERHAELTNIS

Tastverhaeltnis TEV Read solenoid valve, tank ventillation (purge cannister)

_No arguments._

### STATUS_MDK_POTI_SPANNUNG

Potentiometer Motordrosselklappe auslesen Read the throttle potentiometer signals

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Fahrerwunsch Read the pedal sensor signals

_No arguments._

### STATUS_PWG_WINKEL

PWG-Winkel auslesen Read the pedal sensor angle

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Ansauglufttemperatur Read the air intake temperature

_No arguments._

### STATUS_MOTORTEMPERATUR

Motortemperatur Read the engine coolant temperature

_No arguments._

### STATUS_KUEHLW_AUSL_TEMPERATUR

Temperatur Kuehleraustritt Read the radiator outlet coolant temperature

_No arguments._

### STATUS_UBATT

Ubatt Read the battery voltage after relay

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Geberradadaption Read the crank sensor adaption (engine is synchonized switch)

_No arguments._

### STATUS_DIGITAL

Status Schalteingaenge Read switches and I/O states

_No arguments._

### STATUS_LAMBDA_ADD_1

Gemischadaption additiv 1 Read adaption mixture additive bank 1

_No arguments._

### STATUS_LAMBDA_MUL_1

Gemischadaption multipl. 1 Read adaption mixture multiplicative bank 1

_No arguments._

### STATUS_DIGITAL_OBDII

Status Schalteingaenge Read OBD2 Readiness flags

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x11 | SERVICE NOT SUPPORTED |
| 0x12 | SUB-FUNCTION NOT SUPPORTED |
| 0x22 | CONDITION NOT CORRECT |
| 0x31 | REQUEST OUT OF RANGE |
| 0x33 | SECURITY ACCESS DENIED / REQUIRED |
| 0x35 | INVALID KEY |
| 0x36 | EXCEEDED NUMBER OF ATTEMPTS |
| 0x37 | REQUIRED TIME DELAY NOT EXPIRED |
| 0x40 | DOWNLOAD NOT ACCEPTED |
| 0x41 | IMPROPER DOWNLOAD TYPE |
| 0x42 | CANNOT DOWNLOAD TO SPECIFIED ADDRESS |
| 0x50 | UPLOAD NOT ACCEPTED |
| 0x52 | CANNOT UPLOAD FROM SPECIFIED ADDRESS |
| 0x53 | CANNOT UPLOAD NUMBER OF BYTES REQUESTED |
| 0x78 | REQUEST CORRECTLY RECEIVED - RESPONSE PENDING |
| 0x79 | INCORRECT BYTE COUNT DURING BLOCK TRANSFER |
| 0x80 | SERVICE NOT SUPPORTED IN CURRENT DIAGNOSTIC MODE |
| 0x90 | OPERATION NOT PERFORMED |
| 0x91 | INCORRECT MESSAGE FORMAT |
| 0xA0 | OKAY |
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
| 0x19 | Electromatic South Africa |
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
| 0xFF | Unknown manufacturer |

### FREEZEFRAME

| NAME | FACT_A | FACT_B | EINH | UWNR | POS | SIZE | MASK | TYPE | UWTEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FTL | 1.0 | 0.0 | L | 0x01 | 6 | 1 | 0xFF | 0 | Fuel Tank Level |
| OBD_TPS | 0.468627450 | 0.0 | Deg TPS | 0x02 | 7 | 1 | 0xFF | 0 | Throttle Opening |
| OBD_PV_AV | 0.392156860 | 0.0 | % | 0x03 | 8 | 1 | 0xFF | 0 | Driver Demand |
| VB_RLY | 0.112941180 | 0.0 | V | 0x04 | 9 | 1 | 0xFF | 0 | Battery Voltage |
| LV_CAN_TQ_STATE | 1.0 | 0.0 |  | 0x05 | 10 | 1 | 0x01 | 0 | ABS/ACS Activity Status |
| LV_VS_ERR | 0.5 | 0.0 |  | 0x06 | 10 | 1 | 0x02 | 0 | Vehicle Speed Error Status |
| LV_ACCOUT_RLY | 1.0 | 0.0 |  | 0x07 | 11 | 1 | 0x01 | 0 | Air Con Status |
| LV_DRI | 1.0 | 0.0 |  | 0x08 | 12 | 1 | 0x01 | 0 | Gear Status |
| OBD_MAP_UP | 0.036621653 | 0.0 | hPa | 0x09 | 13 | 2 | 0xFF | 0 | Upstream Manifold Pressure |
| CMD_TYPE | 1.0 | 0.0 |  | 0x0A | 15 | 1 | 0xFF | 0 | CVT command type |
| OBD_TIA | 0.75 | -48.0 | Deg C | 0x0B | 16 | 1 | 0xFF | 0 | Inlet Air Temperature |
| OBD_TCO_EX | 0.75 | -48.0 | Deg C | 0x0C | 17 | 1 | 0xFF | 0 | Radiator Coolant Temperature |
| DIST_FAIL | 100.0 | 0.0 | m | 0x0D | 18 | 4 | 0xFF | 0 | Covered distance at failure |
| STATE_LS1 | 1.0 | 0.0 |  | 0x0E | 22 | 1 | 0xFF | 0 | Status of Fuel System 1 |
| LOAD_CLC | 0.392156860 | 0.0 | % | 0x10 | 24 | 1 | 0xFF | 0 | Calculated Load Value |
| OBD_TCO | 0.75 | -48.0 | Deg C | 0x11 | 25 | 1 | 0xFF | 0 | Engine Coolant Temperature |
| TI_LAM_1 | 0.001525902 | 0.0 | % | 0x12 | 26 | 2 | 0xFF | 1 | Short Term Fuel Trim Bank 1 |
| FUEL_AD_MMV_REL_1 | 0.001525902 | 0.0 | % | 0x13 | 28 | 2 | 0xFF | 1 | Long Term Fuel Trim Bank 1 |
| OBD_MAP | 0.036621653 | 0.0 | hPa | 0x16 | 35 | 2 | 0xFF | 0 | Intake Manifold Absolute Pressure |
| N | 1.0 | 0.0 | rpm | 0x17 | 37 | 2 | 0xFF | 0 | Engine Speed |
| VS | 1.0 | 0.0 | km/h | 0x18 | 39 | 1 | 0xFF | 0 | Vehicle Speed |
| Unknown item | 0.0 | 0.0 |  | 0x00 | 0 | 0 | 0xFF | 0 |  |

### DIGITAL

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| LV_ASR_REQ | 6 | 0x01 | 0x01 |
| LV_MSR_REQ | 6 | 0x02 | 0x02 |
| LV_ASC_PAS | 6 | 0x04 | 0x04 |
| LV_GS_INH | 6 | 0x08 | 0x08 |
| LV_CAN_TQ_STATE | 7 | 0x02 | 0x02 |
| LV_VS_CAN_ERR_DET | 7 | 0x04 | 0x04 |
| LV_DSC_ACT | 10 | 0x04 | 0x04 |
| LV_TW_MSR_REQ | 7 | 0x20 | 0x20 |
| LV_TW_ASR_REQ | 7 | 0x40 | 0x40 |
| LV_KEY_OFF | 6 | 0x01 | 0x01 |
| LV_CAN_CRK_ERR | 6 | 0x02 | 0x02 |
| LV_TCS_ACK | 6 | 0x04 | 0x04 |
| LV_ACCOUT_RELAY | 6 | 0x40 | 0x40 |
| LV_MIL | 6 | 0x02 | 0x02 |
| LV_CRU_ON_LAMP | 6 | 0x08 | 0x08 |
| LV_WAL_1 | 6 | 0x10 | 0x10 |
| LV_CAN_TW_FLT | 9 | 0x01 | 0x01 |
| LV_CAN_TW_ACK | 9 | 0x02 | 0x02 |
| LV_CAN_GS | 6 | 0x08 | 0x08 |
| LV_SHIFTER_PARK | 6 | 0x01 | 0x01 |
| LV_SHIFTER_REVERSE | 6 | 0x02 | 0x02 |
| LV_SHIFTER_NEUTRAL | 6 | 0x04 | 0x04 |
| LV_SHIFTER_DRIVE | 6 | 0x08 | 0x08 |
| LV_SHIFTER_MANUAL | 6 | 0x10 | 0x10 |
| LV_SHIFTER_PLUS | 6 | 0x20 | 0x20 |
| LV_SHIFTER_MINUS | 6 | 0x40 | 0x40 |
| LV_SHIFTER_MODE | 6 | 0x80 | 0x80 |
| LV_WHEEL_PLUS | 7 | 0x01 | 0x01 |
| LV_WHEEL_MINUS | 7 | 0x02 | 0x02 |
| LV_SPARE_SWI_1 | 7 | 0x04 | 0x04 |
| LV_SPARE_SWI_2 | 7 | 0x08 | 0x08 |
| LV_GIB_CKS_ERR_DET | 7 | 0x10 | 0x10 |
| LV_GIB_CTL_ERR_DET | 7 | 0x20 | 0x20 |
| LV_ACCIN | 6 | 0x40 | 0x40 |
| LV_ACIN | 6 | 0x80 | 0x80 |
| LV_BLS_3 | 10 | 0x02 | 0x02 |
| LV_TIA_ERR | 6 | 0x01 | 0x01 |
| LV_TCO_ERR | 6 | 0x02 | 0x02 |
| LV_CAM_ERR | 6 | 0x04 | 0x04 |
| LV_CAM_ERR_LIH | 6 | 0x08 | 0x08 |
| LV_CAM_1_LEVEL | 6 | 0x10 | 0x10 |
| LV_CRK_ERR | 6 | 0x20 | 0x20 |
| LV_CRK_ERR_LIH | 6 | 0x40 | 0x40 |
| LV_MAP_ERR | 6 | 0x80 | 0x80 |
| LV_MAP_LIH | 7 | 0x01 | 0x01 |
| LV_TPS_ERR_1 | 7 | 0x02 | 0x02 |
| LV_TPS_ERR_2 | 7 | 0x04 | 0x04 |
| LV_ERR_IV_0 | 7 | 0x08 | 0x08 |
| LV_ERR_IV_1 | 7 | 0x10 | 0x10 |
| LV_ERR_IV_2 | 7 | 0x20 | 0x20 |
| LV_ERR_IV_3 | 7 | 0x40 | 0x40 |
| LV_TCO_EX_ERR | 7 | 0x80 | 0x80 |
| LV_PVS_ERR_1 | 8 | 0x01 | 0x01 |
| LV_PVS_ERR_2 | 8 | 0x02 | 0x02 |
| LV_MTC_AD_ERR | 8 | 0x04 | 0x04 |
| LV_MTC_CTL_ERR | 8 | 0x08 | 0x08 |
| LV_AC_PRS_ERR | 8 | 0x10 | 0x10 |
| LV_ERR_PRES_TLDP_EOL | 8 | 0x20 | 0x20 |
| LV_MAP_UP_ERR | 9 | 0x01 | 0x01 |
| LV_ERR_CPS | 9 | 0x02 | 0x02 |
| LV_ERR_EFP | 9 | 0x04 | 0x04 |
| LV_ERR_CAN_ASC | 9 | 0x08 | 0x08 |
| LV_ERR_CAN_EGS | 9 | 0x10 | 0x10 |
| LV_ERR_CAN_INSTR | 9 | 0x20 | 0x20 |
| LV_ERR_BOFF | 10 | 0x01 | 0x01 |
| LV_EFP | 10 | 0x02 | 0x02 |
| LV_AST | 10 | 0x04 | 0x04 |
| LV_IS | 10 | 0x08 | 0x08 |
| LV_PL | 10 | 0x20 | 0x20 |
| LV_PU | 10 | 0x40 | 0x40 |
| LV_PUC | 10 | 0x80 | 0x80 |
| LV_FL | 11 | 0x01 | 0x01 |
| LV_CT | 11 | 0x02 | 0x02 |
| LV_MAIN_RLY | 11 | 0x04 | 0x04 |
| LV_BLS | 11 | 0x08 | 0x08 |
| LV_BTS | 11 | 0x10 | 0x10 |
| LV_CS | 11 | 0x20 | 0x20 |
| LV_IN_RS_TLDP | 11 | 0x40 | 0x40 |
| LV_PRNDM_FAULT | 12 | 0x01 | 0x01 |
| LV_VS_CVT_ERR | 12 | 0x02 | 0x02 |
| LV_RATIO_PLAUS_ERR | 12 | 0x04 | 0x04 |
| LV_TRANS_OIL_TEMP_ERR | 12 | 0x08 | 0x08 |
| LV_SHIFT_IN_PROGRESS | 12 | 0x10 | 0x10 |
| LV_ASR_AUTH | 12 | 0x20 | 0x20 |
| LV_MSR_AUTH | 12 | 0x40 | 0x40 |
| LV_CLUTCH_LOCKED | 12 | 0x80 | 0x80 |
| LV_MIL_ALSO | 6 | 0x01 | 0x01 |
| LV_ACCOUT_RLY_ALSO | 6 | 0x02 | 0x02 |
| LV_CFA_1 | 6 | 0x04 | 0x04 |
| LV_CFA_2 | 6 | 0x08 | 0x08 |
| LV_CFA_3 | 6 | 0x10 | 0x10 |
| LV_KEY_ON | 7 | 0x01 | 0x01 |
| LV_ACIN_ALSO | 7 | 0x04 | 0x04 |
| LV_ACCIN_ALSO | 7 | 0x08 | 0x08 |
| LV_AC_FAN_REQ_1 | 7 | 0x10 | 0x10 |
| LV_AFR_1 | 8 | 0x01 | 0x01 |
| LV_LSCL_1 | 8 | 0x02 | 0x02 |
| LV_LS_UP | 8 | 0x04 | 0x04 |
| LV_LS_DOWN | 8 | 0x08 | 0x08 |
| LV_RUN_ENG | 9 | 0x01 | 0x01 |
| LV_SYN_ENG | 9 | 0x02 | 0x02 |
| LV_ES | 9 | 0x04 | 0x04 |
| LV_ST | 9 | 0x08 | 0x08 |
| LV_MSR_ACT | 9 | 0x10 | 0x10 |
| LV_ASR_ACT | 9 | 0x20 | 0x20 |
| LV_TPS_AD_REQ | 9 | 0x40 | 0x40 |
| LV_ERR_IMOB_03 | 6 | 0x01 | 0x01 |
| LV_ERR_IMOB_04 | 6 | 0x02 | 0x02 |
| LV_SEED_KEY_INI | 6 | 0x04 | 0x04 |
| LV_NOT_LEARNT_MEM_IMOB | 6 | 0x08 | 0x08 |
| LV_LOCK_IMOB | 6 | 0x10 | 0x10 |
| LV_ANS_ERR_IMOB | 6 | 0x20 | 0x20 |
| LV_ANS_ERR_COM_IMOB | 6 | 0x40 | 0x40 |
| LV_ANS_NOT_IMOB | 7 | 0x01 | 0x01 |
| LV_SEG_T_AD_ERR | 37 | 0x01 | 0x01 |
| LV_SEG_AD_STATE | 37 | 0x02 | 0x02 |
| LV_END_CAT_DIAG_EOL | 37 | 0x04 | 0x04 |
| LV_AUTH_CAT_DIAG_EOL | 37 | 0x08 | 0x08 |
| LV_ERR_PRES_LS_DOWN_EOL | 37 | 0x10 | 0x10 |
| LV_END_TLDP_DIAG_EOL | 37 | 0x20 | 0x20 |
| LV_CRU_CTL_ACT | 6 | 0x01 | 0x01 |
| LV_CRU_CTL_AUTH | 6 | 0x02 | 0x02 |
| LV_CRU_SWI_ON_OFF | 6 | 0x04 | 0x04 |
| LV_CRU_SWI_RES | 6 | 0x08 | 0x08 |
| LV_CRU_SWI_SET_POS | 6 | 0x10 | 0x10 |
| LV_CRU_SWI_SET_MINUS | 6 | 0x20 | 0x20 |
| LV_BLS_1 | 7 | 0x01 | 0x01 |
| LV_CS_1 | 7 | 0x02 | 0x02 |
| LV_DRIV_1 | 7 | 0x04 | 0x04 |
| LV_CRU_N_INH_1 | 7 | 0x08 | 0x08 |
| LV_CRU_VS_INH_1 | 7 | 0x10 | 0x10 |
| LV_TCS_AUTH_1 | 7 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_1 | 7 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_1 | 7 | 0x80 | 0x80 |
| LV_BLS_2 | 8 | 0x01 | 0x01 |
| LV_CS_2 | 8 | 0x02 | 0x02 |
| LV_DRIV_2 | 8 | 0x04 | 0x04 |
| LV_CRU_N_INH_2 | 8 | 0x08 | 0x08 |
| LV_CRU_VS_INH_2 | 8 | 0x10 | 0x10 |
| LV_TCS_AUTH_2 | 8 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_2 | 8 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_2 | 8 | 0x80 | 0x80 |
| LV_BLS_3 | 9 | 0x01 | 0x01 |
| LV_CS_3 | 9 | 0x02 | 0x02 |
| LV_DRIV_3 | 9 | 0x04 | 0x04 |
| LV_CRU_N_INH_3 | 9 | 0x08 | 0x08 |
| LV_CRU_VS_INH_3 | 9 | 0x10 | 0x10 |
| LV_TCS_AUTH_3 | 9 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_3 | 9 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_3 | 9 | 0x80 | 0x80 |
| LV_BLS_4 | 10 | 0x01 | 0x01 |
| LV_CS_4 | 10 | 0x02 | 0x02 |
| LV_DRIV_4 | 10 | 0x04 | 0x04 |
| LV_CRU_N_INH_4 | 10 | 0x08 | 0x08 |
| LV_CRU_VS_INH_4 | 10 | 0x10 | 0x10 |
| LV_TCS_AUTH_4 | 10 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_4 | 10 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_4 | 10 | 0x80 | 0x80 |
| LV_BLS_5 | 11 | 0x01 | 0x01 |
| LV_CS_5 | 11 | 0x02 | 0x02 |
| LV_DRIV_5 | 11 | 0x04 | 0x04 |
| LV_CRU_N_INH_5 | 11 | 0x08 | 0x08 |
| LV_CRU_VS_INH_5 | 11 | 0x10 | 0x10 |
| LV_TCS_AUTH_5 | 11 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_5 | 11 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_5 | 11 | 0x80 | 0x80 |
| LV_OIL_LEVEL_TEST_OK | 6 | 0x40 | 0x40 |
| LV_READY_EVAP_1 | 6 | 0x10 | 0x10 |
| LV_READY_EVAP_2 | 6 | 0x20 | 0x20 |
| LV_READY_EVAP_3 | 6 | 0x40 | 0x40 |
| LV_READY_EVAP_4 | 6 | 0x80 | 0x80 |
| LV_READY_MIS_A | 8 | 0x04 | 0x04 |
| LV_READY_MIS_B1 | 8 | 0x08 | 0x08 |
| LV_READY_MIS_B4 | 8 | 0x10 | 0x10 |
| LV_READY_FSD_1 | 8 | 0x20 | 0x20 |
| LV_READY_OBD | 8 | 0x80 | 0x80 |
| LV_READY_LS_UP_1 | 9 | 0x01 | 0x01 |
| LV_READY_LS_DOWN_1 | 9 | 0x04 | 0x04 |
| LV_READY_CAT_1 | 9 | 0x10 | 0x10 |
| ?? | FF | 0x00 | 0xFF |

### ANALOG

| NAME | FACT_A | FACT_B | EINH |
| --- | --- | --- | --- |
| CAN_VS_BAS | 0.06258 | 0.0 | km/h |
| CAN_TQI_ASR | 0.3906525 | 0.0 | % |
| CAN_TQI_MSR | 0.3906525 | 0.0 | % |
| CAN_VRD_LV_ASC | 0.06258 | 0.0 | km/h |
| CAN_VRD_RV_ASC | 0.06258 | 0.0 | km/h |
| CAN_VRD_LH_ASC | 0.06258 | 0.0 | km/h |
| CAN_VRD_RH_ASC | 0.06258 | 0.0 | km/h |
| CAN_RR | 0.08 | 0.0 | G |
| CAN_TQI_TW_ASR | 0.001525902 | 0.0 | % |
| CAN_TQI_TW_MSR | 0.001525902 | 0.0 | % |
| TQ_COR_STATE | 1.0 | 0.0 |  |
| CAN_TQI_AV | 0.3906525 | 0.0 | % |
| CAN_N | 1.0 | 0.0 | rpm |
| CAN_TQI_BAS | 0.3906525 | 0.0 | % |
| CAN_TQI_LOSS | 0.3906525 | 0.0 | % |
| CAN_MUL_INFO | 1.0 | 0.0 |  |
| CAN_MUL_COD | 1.0 | 0.0 |  |
| CAN_TCO | 0.75 | -48.0 | Deg C |
| CAN_CRU_SET_LAMP | 1.0 | 0.0 |  |
| CAN_PV_AV | 0.392156860 | 0.0 | % |
| TI_SUM_FCO | 1.0 | 0.0 |  |
| CAN_DES_AIM_POSITION | 0.5 | 0.0 | steps |
| CAN_DES_CMD_TYPE | 1.0 | 0.0 |  |
| CAN_DES_AIM_SPEED | 1.0 | 0.0 |  |
| CAN_DES_CLU_SOL_DR | 0.195694720 | 0.0 | % |
| CAN_CLUTCH_CODES | 1.0 | 0.0 |  |
| CAN_DES_SDRY_PRES_DR | 0.195694720 | 0.0 | % |
| CAN_SDRY_PRES_CODES | 1.0 | 0.0 |  |
| CAN_MAP | 1.0 | 0.0 |  |
| CAN_TQ_AT_WHEELS_WOUT_LOSS | 0.03125 | 0.0 | Nm |
| CAN_TW_NORM | 20.0 | 0.0 | Nm |
| CAN_TW_TQ_LOSS | 0.03125 | 0.0 | Nm |
| CAN_TW_TQI_REQ_TRA | 0.0015259 | 0.0 | % |
| MARKET_CONF | 1.0 | 0.0 |  |
| ENGINE_CONF | 1.0 | 0.0 |  |
| CAN_GR_AT | 1.0 | 0.0 |  |
| CAN_L_GS | 1.0 | 0.0 |  |
| CAN_GR_AT_SEL | 1.0 | 0.0 |  |
| CAN_GR_MOD | 1.0 | 0.0 |  |
| CAN_CURRENT_POSITION | 0.5 | 0.0 | steps |
| CAN_MOTOR_CDN_COD | 1.0 | 0.0 |  |
| CAN_DRIV_LED_STATUS | 1.0 | 0.0 |  |
| CAN_CLU_AV_DR | 0.195694720 | 0.0 | % |
| CAN_CLU_CDN_COD | 1.0 | 0.0 |  |
| CAN_DRIV_LED_ERR | 1.0 | 0.0 |  |
| CAN_SDRY_PRS_AV_DR | 0.195694720 | 0.0 | % |
| CAN_SDRY_PRS_CDN_COD | 1.0 | 0.0 |  |
| CAN_GIB_SW_NR | 1.0 | 0.0 |  |
| CAN_DIST | 10.0 | 0.0 | m |
| CAN_FTL | 1.0 | 0.0 | L |
| CAN_AC_TEMP | 0.364 | 0.0 | Deg C |
| STATE_CP | 1.0 | 0.0 |  |
| ALTER | 0.001525902 | 0.0 | % |
| TCO_BAS | 0.004887586 | 0.0 | V |
| TIA_BAS | 0.004887586 | 0.0 | V |
| MAP_BAS | 0.004887586 | 0.0 | V |
| MAP_UP_BAS | 0.004887586 | 0.0 | V |
| TCO_EX_BAS | 0.004887586 | 0.0 | V |
| TOIL_CVT_BAS | 0.004887586 | 0.0 | V |
| AC_PRS_BAS | 0.004887586 | 0.0 | V |
| TPS_1_BAS | 0.004887586 | 0.0 | V |
| TPS_2_BAS | 0.004887586 | 0.0 | V |
| PVS_1_BAS | 0.004887586 | 0.0 | V |
| PVS_2_BAS | 0.004887586 | 0.0 | V |
| VLS_UP_1_BAS | 0.004887586 | 0.0 | V |
| VLS_DOWN_1_BAS | 0.004887586 | 0.0 | V |
| VBK_BAS | 0.028152492 | 0.0 | V |
| VBR_BAS | 0.028152492 | 0.0 | V |
| TCO | 0.75 | -48.0 | Deg C |
| TIA | 0.75 | -48.0 | Deg C |
| MAP | 0.036621653 | 0.0 | hPa |
| MAP_UP | 0.036621653 | 0.0 | hPa |
| TCO_EX | 0.75 | -48.0 | Deg C |
| TRANS_OIL_TEMP | 1.0 | -50.0 | Deg C |
| AC_PRS | 0.156862750 | 0.0 | Bar |
| TPS_MTC_1 | 0.001823 | 0.0 | Deg TPS |
| TPS_MTC_2 | 0.001823 | 0.0 | Deg TPS |
| TPS | 0.468627450 | 0.0 | Deg TPS |
| PV_AV_1 | 0.392156860 | 0.0 | % |
| PV_AV_2 | 0.392156860 | 0.0 | % |
| PV_AV | 0.392156860 | 0.0 | % |
| VLS_UP_1 | 0.004887586 | 0.0 | V |
| VLS_DOWN_1 | 0.004887586 | 0.0 | V |
| VB_RLY | 0.112941180 | 0.0 | V |
| VB_KEY | 0.112941180 | 0.0 | V |
| KNKS_BAS | 0.00489 | 0.0 | V |
| IGA_CYL_KNK0 | 0.001459144 | 0.0 | Deg CRK |
| KNKWB_0 | 1.0 | 0.0 | Deg CRK |
| KNKWD_0 | 1.0 | 0.0 | Deg CRK |
| KNK_EGY_0 | 1.0 | 0.0 |  |
| KNKS_0 | 1.0 | 0.0 |  |
| IGA_IGC_0 | 0.375 | -23.625 | Deg CRK |
| IGA_IGC_1 | 0.375 | -23.625 | Deg CRK |
| IGA_IGC_2 | 0.375 | -23.625 | Deg CRK |
| IGA_IGC_3 | 0.375 | -23.625 | Deg CRK |
| IGA_SP | 0.375 | -23.625 | Deg CRK |
| LSHPWM_UP_1 | 0.001525902 | 0.0 | % |
| LSHPWM_DOWN | 0.001525902 | 0.0 | % |
| MAF_KGH | 0.25 | 0.0 | kg/h |
| MAP_SP | 0.036621653 | 0.0 | hPa |
| MAP_UP_SP | 0.036621653 | 0.0 | hPa |
| TPS_SP_CLC | 0.001823 | 0.0 | Deg TPS |
| V_TPS_AD_BOL_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_BOL_2 | 0.004887586 | 0.0 | V |
| V_TPS_AD_EL_BOL_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_EL_BOL_2 | 0.004887586 | 0.0 | V |
| V_TPS_AD_LIH_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_LIH_2 | 0.004887586 | 0.0 | V |
| N_SP_IS | 1.0 | 0.0 | rpm |
| TPS_LIH | 0.001823 | 0.0 | Deg TPS |
| TI_LAM_1 | 0.001525902 | 0.0 | % |
| LAM_MV_1 | 0.001525902 | 0.0 | % |
| TI_AD_ADD_MMV_0 | 0.004 | 0.0 | ms |
| TI_AD_ADD_MMV_REL_0 | 0.004 | 0.0 | ms |
| TI_AD_FAC_MMV_0 | 0.001525902 | 0.0 | % |
| TI_AD_FAC_MMV_REL_0 | 0.001525902 | 0.0 | % |
| VB | 0.112941180 | 0.0 | V |
| VS | 1.0 | 0.0 | km/h |
| N | 1.0 | 0.0 | rpm |
| VS_CVT | 0.1 | 0.0 | km/h |
| GR_MT | 1.0 | 0.0 |  |
| GR_AT | 1.0 | 0.0 |  |
| CPPWM | 0.392156860 | 0.0 | % |
| LOAD_CLC | 0.392156860 | 0.0 | % |
| TIPR | 0.016 | 0.0 | ms |
| TI_V_000 | 3.999954200 | 0.0 | microsecond |
| CTR_SDR_1_IMOB | 1.0 | 0.0 |  |
| CTR_SDR_2_IMOB | 1.0 | 0.0 |  |
| CTR_SDR_3_IMOB | 1.0 | 0.0 |  |
| VLS_CYC_MMV_EOL_1 | 0.01 | 0.0 | s |
| VLSH_UP_1 | 0.004887586 | 0.0 | V |
| VLSH_DOWN_1 | 0.004887586 | 0.0 | V |
| MIS_B0 | 1.0 | 0.0 |  |
| MIS_B1 | 1.0 | 0.0 |  |
| MIS_B2 | 1.0 | 0.0 |  |
| MIS_B3 | 1.0 | 0.0 |  |
| ER_MMV_EOL_000 | 1.0 | 0.0 | microsecond |
| ER_MMV_EOL_001 | 1.0 | 0.0 | microsecond |
| ER_MMV_EOL_002 | 1.0 | 0.0 | microsecond |
| ER_MMV_EOL_003 | 1.0 | 0.0 | microsecond |
| CMD_TYPE | 1.0 | 0.0 |  |
| MODE_CURRENT | 1.0 | 0.0 |  |
| ENG_SPD_TARGET | 1.0 | 0.0 | rpm |
| CVT_DFT_TOT_DIST | 1.0 | 0.0 |  |
| N_SP_ADD_KWP_LTA | 1.0 | 0.0 |  |
| Unknown item | 0.0 | 0 |  |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0113 | Air intake temperature sensor short to V batt or open circuit |
| 0x0112 | Air intake temperature sensor short to ground |
| 0x0111 | Air intake temperature sensor intermittent failure |
| 0x0108 | Manifold air pressure sensor short to V batt |
| 0x0107 | Manifold air pressure sensor short to ground or open circuit |
| 0x0109 | Manifold air pressure sensor intermittent failure |
| 0x0106 | Manifold air pressure sensor out of range |
| 0x0238 | Upstream compressor air pressure short to V batt |
| 0x0237 | Upstream compressor air pressure short to ground or open circuit |
| 0x0235 | Upstream compressor air pressure intermittent failure |
| 0x0236 | Manifold air pressure upstream sensor out of range |
| 0x1496 | Air cleaner leak |
| 0x1497 | Downstream throttle air leak |
| 0x1498 | Downstream supercharge air leak |
| 0x0118 | Coolant temperature sensor short to V batt or open circuit |
| 0x0117 | Coolant temperature sensor short to ground |
| 0x0125 | Coolant temperature sensor insufficient temperature for close loop control |
| 0x0119 | Coolant temperature sensor intermittent failure |
| 0x1118 | Radiator outlet Coolant temperature sensor short to V batt or open circuit |
| 0x1117 | Radiator outlet Coolant temperature sensor short to ground |
| 0x1119 | Radiator outlet Coolant temperature sensor intermittent failure |
| 0x0132 | Upstream Lambda sensor 1 short to V batt |
| 0x0131 | Upstream Lambda sensor 1 short to ground or air leakage |
| 0x0130 | Upstream Lambda sensor 1 line break |
| 0x0135 | Upstream Lambda sensor heater 1 malfunction |
| 0x0138 | Downstream Lambda sensor short to V batt |
| 0x0137 | Downstream Lambda sensor short to ground or air leakage |
| 0x0136 | Downstream Lambda sensor open circuit |
| 0x0141 | Downstream Lambda sensor heater malfunction |
| 0x0262 | Injector 1 short to V batt |
| 0x0261 | Injector 1 short to ground or open circuit |
| 0x0265 | Injector 2 short to V batt |
| 0x0264 | Injector 2 short to ground or open circuit |
| 0x0268 | Injector 3 short to V batt |
| 0x0267 | Injector 3 short to ground or open circuit |
| 0x0271 | Injector 4 short to V batt |
| 0x0270 | Injector 4 short to ground or open circuit |
| 0x0232 | Fuel pump relay short to V batt |
| 0x0231 | Fuel pump relay short to ground or line break |
| 0x0171 | Fuel system diagnosis lean limit or Nox emissions |
| 0x0172 | Fuel system diagnosis rich limit or HC/CO emissions |
| 0x0133 | Upstream oxygen sensor malfunction |
| 0x0139 | Downstream oxygen sensor malfunction |
| 0x0340 | Camshaft position sensor no signal |
| 0x0344 | Camshaft position sensor signal implausible |
| 0x0351 | Ignition control signal coil 1 malfunction |
| 0x0352 | Ignition control signal coil 2 malfunction |
| 0x0325 | Knock sensor noise level too low |
| 0x0324 | Knock sensor unreliable SPI communication |
| 0x0300 | Misfire on at least one cylinder |
| 0x0301 | Misfire on cylinder 1 |
| 0x0302 | Misfire on cylinder 2 |
| 0x0303 | Misfire on cylinder 3 |
| 0x0304 | Misfire on cylinder 4 |
| 0x1319 | Misfiring at low fuel |
| 0x1320 | Crankshaft signal - Segment adaptation at the limit |
| 0x1321 | Crankshaft signal - Tooth error |
| 0x0420 | Catalytic converter catalyst malfunction |
| 0x0444 | Canister purge valve short to V batt or open circuit |
| 0x0445 | Canister purge valve short to ground |
| 0x0448 | Tank leakage detection pump short to V batt or ground |
| 0x0447 | Tank leakage detection pump open circuit |
| 0x0452 | Tank leakage detection pump reed switch opened |
| 0x0453 | Tank leakage detection pump reed switch closed |
| 0x0451 | Tank leakage detection pump - pump problem |
| 0x0441 | Tank leakage detection pump - CPS blocked in position or clamped tube |
| 0x0455 | Tank leakage detection pump - big leakage, cap missing |
| 0x0442 | Tank leakage detection pump - leakage over 0.5mm |
| 0x0123 | Throttle position sensor 1 short to V batt |
| 0x0122 | Throttle position sensor 1 short to ground or open circuit |
| 0x0223 | Throttle position sensor 2 short to V batt |
| 0x0222 | Throttle position sensor 2 short to ground or open circuit |
| 0x1121 | Throttle position sensor 1 and 2 coherency small discrepency |
| 0x0121 | Throttle position sensor 1 and 2 coherency big discrepency |
| 0x1229 | Adaptative strategy failed |
| 0x1226 | Throttle flap malfunction |
| 0x0228 | Pedal position sensor 1 short to V batt |
| 0x0227 | Pedal position sensor 1 short to ground or open circuit |
| 0x1228 | Pedal position sensor 2 short to V batt |
| 0x1227 | Pedal position sensor 2 short to ground or open circuit |
| 0x0226 | Pedal position sensor 1 and 2 coherency - plausibility error |
| 0x1660 | ETC H bridge malfunction |
| 0x8004 | Fault in torque losses compensation |
| 0x8005 | ADC fault |
| 0x8006 | Engine speed error |
| 0x8007 | Idle speed controller PD part fault |
| 0x8008 | Idle speed controller I part fault |
| 0x8009 | Maximum torque at clutch error |
| 0x8010 | Different PVS diag between L1 and L2 |
| 0x8011 | Different TPS diag between L1 and L2 |
| 0x8012 | Mass air flow signal error |
| 0x8013 | Torque generation error |
| 0x8014 | Engine speed limitation error |
| 0x8015 | Error for final request for disabled power stages of MTC and IV |
| 0x8016 | Error for temporary request for disabled power stages of MTC and IV |
| 0x0533 | Linear A/C pressure sensor short to V batt or open circuit |
| 0x0532 | Linear A/C pressure sensor short to ground |
| 0x0500 | Vehicle speed signal implausible |
| 0x0335 | Crankshaft sensor no signal |
| 0x0336 | Crankshaft sensor signal implausible |
| 0x1538 | Air conditioner compressor short to V batt |
| 0x1537 | Air conditioner compressor short to ground or open circuit |
| 0x0480 | Engine cooling fan relay for 1 speed malfunction |
| 0x0481 | Engine cooling fan relay for 2 speed malfunction |
| 0x0482 | Engine cooling fan relay for 3 speed malfunction |
| 0x0704 | Clutch switch signal implausible |
| 0x0571 | Brake switch signal implausible |
| 0x1825 | Shift lock relay malfunction |
| 0x0568 | Cruise control out of range input |
| 0x1568 | Cruise control electrical error |
| 0x0563 | Alternator load sensor short to V batt |
| 0x0562 | Alternator load sensor open circuit |
| 0x0713 | Gear box oil temperature short to V batt or line break |
| 0x0712 | Gear box oil temperature short to ground |
| 0x0711 | Gear box oil temperature intermittent failure |
| 0x0721 | Gear box shaft speed signal implausible |
| 0x0705 | Gear box PRNDM sensor malfunction |
| 0x1816 | Shifter minus switch error |
| 0x1815 | Shifter plus switch error |
| 0x0790 | Mode switch error short to ground |
| 0x1601 | GIB ECU error internal failure |
| 0x1606 | GIB ECU error check sum error |
| 0x1810 | CVT LEDs error |
| 0x1786 | Motor electrical error plausibility error |
| 0x1788 | Motor electrical error open circuit |
| 0x1787 | Motor electrical error short circuit |
| 0x1666 | Anti-theft code no successful communication |
| 0x1672 | Anti-theft code wrong computation |
| 0x0604 | ECU self test RAM error |
| 0x0603 | ECU self test NVMY write error |
| 0x0601 | ECU self test checksum error |
| 0x0563 | Battery voltage after system relay short to V batt |
| 0x0562 | Battery voltage after system relay open circuit |
| 0x0608 | First sensor supply diagnosis malfunction |
| 0x0609 | Second sensor supply diagnosis malfunction |
| 0x1610 | System relay short to V batt |
| 0x1611 | System relay short to ground or line break |
| 0x1685 | CAN error with ABS - frame missing |
| 0x1687 | CAN error with instrument pack - frame missing |
| 0x1686 | CAN error with gear box - frame missing |
| 0x1683 | CAN bus - bus off mode |
| 0xFFFF | Unknown Error |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 0x0113 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0112 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0111 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0108 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0107 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0109 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0106 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0238 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x0237 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x0235 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x0236 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1496 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x0C |
| 0x1497 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x0C |
| 0x1498 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x0C |
| 0x0118 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0117 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0125 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0119 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x1118 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x0C |
| 0x1117 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x0C |
| 0x1119 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x0C |
| 0x0132 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0131 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0130 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0135 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0138 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0137 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0136 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0141 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0262 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0261 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0265 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0264 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0268 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0267 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0271 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0270 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0232 | 4 | 1 | 0x17 | 0x0E | 0x01 | 0x16 |
| 0x0231 | 4 | 1 | 0x17 | 0x0E | 0x01 | 0x16 |
| 0x0171 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0172 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0133 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0139 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0340 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0344 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0351 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x0352 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x0325 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x0324 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x0300 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0301 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0302 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0303 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0304 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1319 | 4 | 1 | 0x17 | 0x01 | 0x11 | 0x16 |
| 0x1320 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x1321 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0420 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0444 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0445 | 4 | 1 | 0x17 | 0x0B | 0x0E | 0x16 |
| 0x0448 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0447 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0452 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0453 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0451 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0441 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0455 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0442 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0123 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0122 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0223 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0222 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1121 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0121 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1229 | 4 | 1 | 0x17 | 0x02 | 0x11 | 0x16 |
| 0x1226 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0228 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0227 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1228 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1227 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0226 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1660 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x8004 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x8005 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x16 |
| 0x8006 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x8007 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x8008 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x8009 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x8010 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x8011 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x8012 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x8013 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x8014 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x8015 | 4 | 1 | 0x17 | 0x02 | 0x10 | 0x16 |
| 0x8016 | 4 | 1 | 0x17 | 0x02 | 0x10 | 0x16 |
| 0x0533 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x0532 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x0500 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x0335 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0336 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x1538 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x1537 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x0480 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0481 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0482 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0704 | 4 | 1 | 0x17 | 0x18 | 0x04 | 0x16 |
| 0x0571 | 4 | 1 | 0x17 | 0x18 | 0x04 | 0x16 |
| 0x1825 | 4 | 1 | 0x17 | 0x0A | 0x08 | 0x16 |
| 0x1568 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x16 |
| 0x0568 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x16 |
| 0x0563 | 4 | 1 | 0x17 | 0x04 | 0x10 | 0x16 |
| 0x0562 | 4 | 1 | 0x17 | 0x04 | 0x10 | 0x16 |
| 0x0713 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0712 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0711 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0721 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0705 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1816 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1815 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x0790 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1601 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1606 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1810 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1786 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1788 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1787 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1666 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1672 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0604 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0603 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0601 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0608 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0609 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1610 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1611 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1685 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1687 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1686 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1683 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x00 | 0 | 0 | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | short to V batt |
| 0x02 | short to ground |
| 0x03 | no signal detected |
| 0x04 | signal out of range |
| 0x05 | test complete |
| 0x06 | sporadic error |
| 0x07 | fault present |
| 0x08 | warning lamp state |
| 0xFF | unknown status |

### ACTUATOR_TEST

| NAME | LID | ACTION |
| --- | --- | --- |
| MAIN_RELAY | 0x11 | Main Relay |
| FUEL_PUMP | 0x12 | Fuel Pump |
| AC_COMPRESSOR | 0x13 | Air conditioner compressor |
| FAN_RELAY_HIGH | 0x1B | Cooling fan relay (high) |
| FAN_RELAY_MED | 0x1A | Cooling fan relay (medium) |
| FAN_RELAY_LOW | 0x19 | Cooling fan relay (low) |
| CANISTER_PURGE | 0x20 | Canister Purge |
| THROTTLE_ACT | 0x23 | Throttle actuator |
| LEAK_DETECTION | 0x24 | Leak detection pump |
| PRIME_FUEL | 0x34 | Prime fuel line |
| CVT_SHIFT_LOCK | 0x37 | Constantly Variable Transmission shift interlock |
| INJECTOR_1 | 0x39 | Injector 1 |
| INJECTOR_2 | 0x3A | Injector 2 |
| INJECTOR_3 | 0x3B | Injector 3 |
| INJECTOR_4 | 0x3C | Injector 4 |
| UPSTR_O2_HEAT | 0x3D | Upstream oxygen heater |
| DWSTR_O2_HEAT | 0x3E | Downstream oxygen heater |
| DISABLE_ACTS | 0x3F | Disable all actuators |
|  | 0xFF |  |

### APPLIC_CORRECTION

| NAME | LID | ACTION |
| --- | --- | --- |
| IDLE_CO_TRIM | 0x90 | Idle speed CO trim |
| IDLE_TEMP_CORR | 0x91 | Idle speed temporary correction |
| IDLE_DUR_CORR | 0x92 | Idle speed durable correction |
|  | 0xFF |  |

### ADAPTIVE_VALUES

| NAME | LID | ACTION |
| --- | --- | --- |
| ALL_VALUES | 0x50 | Reset All adaptive values |
| MAP | 0x51 | Reset Manifold Air Pressure correction |
| KNOCK_CONTROL | 0x52 | Reset Knock control adaptive value |
| ECT_THROTTLE | 0x53 | Reset ECT throttle adaption |
| CVT | 0x54 | Reset Constantly Variable Transmission |
| LAMBDA | 0x56 | Reset Lambda adaptive value |
| MISFIRING | 0x57 | Reset Misfiring adaptive value |
| IDLE_SPEED | 0x58 | Reset Idle speed adaptive value |
| DYNAMIC_TRIM | 0x59 | Reset Dynamic trim |
| KNOCK_SPARK_ADV | 0x5A | Reset Knock spark advance slow correction |
|  | 0xFF |  |
