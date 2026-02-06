# DEVB10_2.PRG

## General

|  |  |
| --- | --- |
| File | DEVB10_2.PRG |
| Type | PRG |
| Jobs | 114 |
| Tables | 11 |
| Origin | Ricardo Chris Potter |
| Revision | 3.4 |
| Author | Ricardo E2D C.Potter |
| ECU Comment | @(B00)Software. Development@ |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | @EMS2K@ |  |  |
| ORIGIN | string | Ricardo C.Potter |  |  |
| REVISION | string | 3.04 |  |  |
| AUTHOR | string | Ricardo E2 Designs Ltd. C.Potter |  |  |
| COMMENT | string | @(B10) Software. Development@ |  |  |
| SPRACHE | string | @sprache@ |  |  |

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

### CONFIG_BYTES_SCHREIBEN

Write the Config Bytes

| Name | Type | Description |
| --- | --- | --- |
| CONFIG_BYTES | string | Config Bytes - 6 characters |

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

Auslesen des Anwender-Info-Feldes

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
| 0x11 | @SERVICE NOT SUPPORTED@ |
| 0x12 | @SUB-FUNCTION NOT SUPPORTED@ |
| 0x22 | @CONDITION NOT CORRECT@ |
| 0x31 | @REQUEST OUT OF RANGE@ |
| 0x33 | @SECURITY ACCESS DENIED / REQUIRED@ |
| 0x35 | @INVALID KEY@ |
| 0x36 | @EXCEEDED NUMBER OF ATTEMPTS@ |
| 0x37 | @REQUIRED TIME DELAY NOT EXPIRED@ |
| 0x40 | @DOWNLOAD NOT ACCEPTED@ |
| 0x41 | @IMPROPER DOWNLOAD TYPE@ |
| 0x42 | @CANNOT DOWNLOAD TO SPECIFIED ADDRESS@ |
| 0x50 | @UPLOAD NOT ACCEPTED@ |
| 0x52 | @CANNOT UPLOAD FROM SPECIFIED ADDRESS@ |
| 0x53 | @CANNOT UPLOAD NUMBER OF BYTES REQUESTED@ |
| 0x78 | @REQUEST CORRECTLY RECEIVED - RESPONSE PENDING@ |
| 0x79 | @INCORRECT BYTE COUNT DURING BLOCK TRANSFER@ |
| 0x80 | @SERVICE NOT SUPPORTED IN CURRENT DIAGNOSTIC MODE@ |
| 0x90 | @OPERATION NOT PERFORMED@ |
| 0x91 | @INCORRECT MESSAGE FORMAT@ |
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
| 0x19 | @Elektromatik Suedafrika@ |
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
| 0xFF | @unbekannter Hersteller@ |

### FREEZEFRAME

| NAME | FACT_A | FACT_B | EINH | UWNR | POS | SIZE | MASK | TYPE | UWTEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FTL | 1.0 | 0.0 | L | 0x01 | 6 | 1 | 0xFF | 0 | @Fuel Tank Level@ |
| OBD_TPS | 0.468627450 | 0.0 | @Deg TPS@ | 0x02 | 7 | 1 | 0xFF | 0 | @Throttle Opening@ |
| OBD_PV_AV | 0.392156860 | 0.0 | % | 0x03 | 8 | 1 | 0xFF | 0 | @Driver Demand@ |
| VB_RLY | 0.112941180 | 0.0 | V | 0x04 | 9 | 1 | 0xFF | 0 | @Battery Voltage@ |
| LV_CAN_TQ_STATE | 1.0 | 0.0 |  | 0x05 | 10 | 1 | 0x01 | 0 | @ABS/ACS Activity Status@ |
| LV_VS_ERR | 0.5 | 0.0 |  | 0x06 | 10 | 1 | 0x02 | 0 | @Vehicle Speed Error Status@ |
| LV_ACCOUT_RLY | 1.0 | 0.0 |  | 0x07 | 11 | 1 | 0x01 | 0 | @Air Con Status@ |
| LV_DRI | 1.0 | 0.0 |  | 0x08 | 12 | 1 | 0x01 | 0 | @Gear Status@ |
| OBD_MAP_UP | 0.036621653 | 0.0 | hPa | 0x09 | 13 | 2 | 0xFF | 0 | @Upstream Manifold Pressure@ |
| CMD_TYPE | 1.0 | 0.0 |  | 0x0A | 15 | 1 | 0xFF | 0 | @CVT command type@ |
| OBD_TIA | 0.75 | -48.0 | @Deg C@ | 0x0B | 16 | 1 | 0xFF | 0 | @Inlet Air Temperature@ |
| OBD_TCO_EX | 0.75 | -48.0 | @Deg C@ | 0x0C | 17 | 1 | 0xFF | 0 | @Radiator Coolant Temperature@ |
| DIST_FAIL | 100.0 | 0.0 | m | 0x0D | 18 | 4 | 0xFF | 0 | @Covered distance at failure@ |
| STATE_LS1 | 1.0 | 0.0 |  | 0x0E | 22 | 1 | 0xFF | 0 | @Status of Fuel System 1@ |
| LOAD_CLC | 0.392156860 | 0.0 | % | 0x10 | 24 | 1 | 0xFF | 0 | @Calculated Load Value@ |
| OBD_TCO | 0.75 | -48.0 | @Deg C@ | 0x11 | 25 | 1 | 0xFF | 0 | @Engine Coolant Temperature@ |
| TI_LAM_1 | 0.001525902 | 0.0 | % | 0x12 | 26 | 2 | 0xFF | 1 | @Short Term Fuel Trim Bank 1@ |
| FUEL_AD_MMV_REL_1 | 0.001525902 | 0.0 | % | 0x13 | 28 | 2 | 0xFF | 1 | @Long Term Fuel Trim Bank 1@ |
| OBD_MAP | 0.036621653 | 0.0 | hPa | 0x16 | 35 | 2 | 0xFF | 0 | @Intake Manifold Absolute Pressure@ |
| N | 1.0 | 0.0 | @rpm@ | 0x17 | 37 | 2 | 0xFF | 0 | @Engine Speed@ |
| VS | 1.0 | 0.0 | @km/h@ | 0x18 | 39 | 1 | 0xFF | 0 | @Vehicle Speed@ |
| @Unknown item@ | 0.0 | 0.0 |  | 0x00 | 0 | 0 | 0xFF | 0 |  |

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
| LV_TCS_TW_ACK | 9 | 0x02 | 0x02 |
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
| LV_CS_CRU | 11 | 0x20 | 0x20 |
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
| LV_ERR_PRES_TLDP_EOL | 37 | 0x40 | 0x40 |
| LV_ERR_PRES_CAT_EOL | 37 | 0x80 | 0x80 |
| LV_CRU_CTL_ACT | 6 | 0x01 | 0x01 |
| LV_CRU_CTL_AUTH | 6 | 0x02 | 0x02 |
| LV_CRU_SWI_ON_OFF | 6 | 0x04 | 0x04 |
| LV_CRU_SWI_RES | 6 | 0x08 | 0x08 |
| LV_CRU_SWI_SET_POS | 6 | 0x10 | 0x10 |
| LV_CRU_SWI_SET_MINUS | 6 | 0x20 | 0x20 |
| LV_BLS_1 | 7 | 0x01 | 0x01 |
| LV_CS_CRU_1 | 7 | 0x02 | 0x02 |
| LV_DRIV_1 | 7 | 0x04 | 0x04 |
| LV_N_CRU_AUTH_1 | 7 | 0x08 | 0x08 |
| LV_VS_CRU_ON_AUTH_1 | 7 | 0x10 | 0x10 |
| LV_ASR_MSR_ACT_1 | 7 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_1 | 7 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_1 | 7 | 0x80 | 0x80 |
| LV_BLS_2 | 8 | 0x01 | 0x01 |
| LV_CS_CRU_2 | 8 | 0x02 | 0x02 |
| LV_DRIV_2 | 8 | 0x04 | 0x04 |
| LV_N_CRU_AUTH_2 | 8 | 0x08 | 0x08 |
| LV_VS_CRU_ON_AUTH_2 | 8 | 0x10 | 0x10 |
| LV_ASR_MSR_ACT_2 | 8 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_2 | 8 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_2 | 8 | 0x80 | 0x80 |
| LV_BLS_3 | 9 | 0x01 | 0x01 |
| LV_CS_CRU_3 | 9 | 0x02 | 0x02 |
| LV_DRIV_3 | 9 | 0x04 | 0x04 |
| LV_N_CRU_AUTH_3 | 9 | 0x08 | 0x08 |
| LV_VS_CRU_ON_AUTH_3 | 9 | 0x10 | 0x10 |
| LV_ASR_MSR_ACT_3 | 9 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_3 | 9 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_3 | 9 | 0x80 | 0x80 |
| LV_BLS_4 | 10 | 0x01 | 0x01 |
| LV_CS_CRU_4 | 10 | 0x02 | 0x02 |
| LV_DRIV_4 | 10 | 0x04 | 0x04 |
| LV_N_CRU_AUTH_4 | 10 | 0x08 | 0x08 |
| LV_VS_CRU_ON_AUTH_4 | 10 | 0x10 | 0x10 |
| LV_ASR_MSR_ACT_4 | 10 | 0x20 | 0x20 |
| LV_VS_RATIO_DFT_4 | 10 | 0x40 | 0x40 |
| LV_CRU_SWI_ON_OFF_4 | 10 | 0x80 | 0x80 |
| LV_BLS_5 | 11 | 0x01 | 0x01 |
| LV_CS_CRU_5 | 11 | 0x02 | 0x02 |
| LV_DRIV_5 | 11 | 0x04 | 0x04 |
| LV_N_CRU_AUTH_5 | 11 | 0x08 | 0x08 |
| LV_VS_CRU_ON_AUTH_5 | 11 | 0x10 | 0x10 |
| LV_ASR_MSR_ACT_5 | 11 | 0x20 | 0x20 |
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
| CAN_VS_BAS | 0.06258 | 0.0 | @km/h@ |
| CAN_TQI_ASR | 0.3906525 | 0.0 | % |
| CAN_TQI_MSR | 0.3906525 | 0.0 | % |
| CAN_VRD_LV_ASC | 0.06258 | 0.0 | @km/h@ |
| CAN_VRD_RV_ASC | 0.06258 | 0.0 | @km/h@ |
| CAN_VRD_LH_ASC | 0.06258 | 0.0 | @km/h@ |
| CAN_VRD_RH_ASC | 0.06258 | 0.0 | @km/h@ |
| CAN_RR | 0.08 | 0.0 | @G@ |
| CAN_TQI_TW_ASR | 0.001525902 | 0.0 | % |
| CAN_TQI_TW_MSR | 0.001525902 | 0.0 | % |
| TQ_COR_STATE | 1.0 | 0.0 |  |
| CAN_TQI_AV | 0.3906525 | 0.0 | % |
| CAN_N | 1.0 | 0.0 | @rpm@ |
| CAN_TQI_BAS | 0.3906525 | 0.0 | % |
| CAN_TQI_LOSS | 0.3906525 | 0.0 | % |
| CAN_MUL_INFO | 1.0 | 0.0 |  |
| CAN_MUL_COD | 1.0 | 0.0 |  |
| CAN_TCO | 0.75 | -48.0 | @Deg C@ |
| CAN_CRU_SET_LAMP | 1.0 | 0.0 |  |
| CAN_PV_AV | 0.392156860 | 0.0 | % |
| TI_SUM_FCO | 1.0 | 0.0 |  |
| CAN_DES_AIM_POSITION | 0.5 | 0.0 | @steps@ |
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
| CAN_GR_AT | 1.0 | 0.0 |  |
| CAN_L_GS | 1.0 | 0.0 |  |
| CAN_GR_AT_SEL | 1.0 | 0.0 |  |
| CAN_GR_MOD | 1.0 | 0.0 |  |
| CAN_CURRENT_POSITION | 0.5 | 0.0 | @steps@ |
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
| CAN_AC_TEMP | 0.364 | 0.0 | @Deg C@ |
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
| TCO | 0.75 | -48.0 | @Deg C@ |
| TIA | 0.75 | -48.0 | @Deg C@ |
| MAP | 0.036621653 | 0.0 | hPa |
| MAP_UP | 0.036621653 | 0.0 | hPa |
| TCO_EX | 0.75 | -48.0 | @Deg C@ |
| TRANS_OIL_TEMP | 1.0 | -50.0 | @Deg C@ |
| AC_PRS | 0.156862750 | 0.0 | @Bar@ |
| TPS_MTC_1 | 0.001823 | 0.0 | @Deg TPS@ |
| TPS_MTC_2 | 0.001823 | 0.0 | @Deg TPS@ |
| TPS | 0.468627450 | 0.0 | @Deg TPS@ |
| PV_AV_1 | 0.392156860 | 0.0 | % |
| PV_AV_2 | 0.392156860 | 0.0 | % |
| PV_AV | 0.392156860 | 0.0 | % |
| VLS_UP_1 | 0.004887586 | 0.0 | V |
| VLS_DOWN_1 | 0.004887586 | 0.0 | V |
| VB_RLY | 0.112941180 | 0.0 | V |
| VB_KEY | 0.112941180 | 0.0 | V |
| KNKS_BAS | 0.00489 | 0.0 | V |
| IGA_CYL_KNK0 | 0.001459144 | 0.0 | @Deg CRK@ |
| KNKWB_0 | 1.0 | 0.0 | @Deg CRK@ |
| KNKWD_0 | 1.0 | 0.0 | @Deg CRK@ |
| KNK_EGY_0 | 1.0 | 0.0 |  |
| KNKS_0 | 1.0 | 0.0 |  |
| IGA_IGC_0 | 0.375 | -23.625 | @Deg CRK@ |
| IGA_IGC_1 | 0.375 | -23.625 | @Deg CRK@ |
| IGA_IGC_2 | 0.375 | -23.625 | @Deg CRK@ |
| IGA_IGC_3 | 0.375 | -23.625 | @Deg CRK@ |
| IGA_SP | 0.375 | -23.625 | @Deg CRK@ |
| LSHPWM_UP_1 | 0.001525902 | 0.0 | % |
| LSHPWM_DOWN | 0.001525902 | 0.0 | % |
| MAF_KGH | 0.25 | 0.0 | @kg/h@ |
| MAP_SP | 0.036621653 | 0.0 | hPa |
| MAP_UP_SP | 0.036621653 | 0.0 | hPa |
| TPS_SP_CLC | 0.001823 | 0.0 | @Deg TPS@ |
| V_TPS_AD_BOL_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_BOL_2 | 0.004887586 | 0.0 | V |
| V_TPS_AD_EL_BOL_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_EL_BOL_2 | 0.004887586 | 0.0 | V |
| V_TPS_AD_LIH_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_LIH_2 | 0.004887586 | 0.0 | V |
| N_SP_IS | 1.0 | 0.0 | @rpm@ |
| TPS_LIH | 0.001823 | 0.0 | @Deg TPS@ |
| TI_LAM_1 | 0.001525902 | 0.0 | % |
| LAM_MV_1 | 0.001525902 | 0.0 | % |
| TI_AD_ADD_MMV_0 | 0.004 | 0.0 | ms |
| TI_AD_ADD_MMV_REL_0 | 0.004 | 0.0 | ms |
| TI_AD_FAC_MMV_0 | 0.001525902 | 0.0 | % |
| TI_AD_FAC_MMV_REL_0 | 0.001525902 | 0.0 | % |
| VB | 0.112941180 | 0.0 | V |
| VS | 1.0 | 0.0 | @km/h@ |
| N | 1.0 | 0.0 | @rpm@ |
| VS_CVT | 0.1 | 0.0 | @km/h@ |
| GR_MT | 1.0 | 0.0 |  |
| GR_AT | 1.0 | 0.0 |  |
| CPPWM | 0.392156860 | 0.0 | % |
| LOAD_CLC | 0.392156860 | 0.0 | % |
| TIPR | 0.016 | 0.0 | ms |
| TI_V_000 | 3.999954200 | 0.0 | @microsecond@ |
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
| ER_MMV_EOL_000 | 1.0 | 0.0 | @microsecond@ |
| ER_MMV_EOL_001 | 1.0 | 0.0 | @microsecond@ |
| ER_MMV_EOL_002 | 1.0 | 0.0 | @microsecond@ |
| ER_MMV_EOL_003 | 1.0 | 0.0 | @microsecond@ |
| CMD_TYPE | 1.0 | 0.0 |  |
| MODE_CURRENT | 1.0 | 0.0 |  |
| ENG_SPD_TARGET | 1.0 | 0.0 | @rpm@ |
| CVT_DFT_TOT_DIST | 1.0 | 0.0 |  |
| N_SP_ADD_KWP_LTA | 1.0 | 0.0 |  |
| @Unknown item@ | 0.0 | 0 |  |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0113 | @Intake air temperature circuit high input@ |
| 0x0112 | @Intake air temperature circuit low input@ |
| 0x0114 | @Intake air temperature circuit intermittent@ |
| 0x0108 | @Manifold absolute pressure/barometric pressure circuit high input@ |
| 0x0107 | @Manifold absolute pressure/barometric pressure circuit low input@ |
| 0x0109 | @Manifold absolute pressure/barometric pressure circuit intermittent@ |
| 0x0106 | @Manifold Air Pressure Sensor Plausibility@ |
| 0x0238 | @Secondary Upstream Manifold Air Pressure Sensor High Input@ |
| 0x0237 | @Secondary Upstream Manifold Air Pressure Sensor Low Input@ |
| 0x0235 | @Secondary Upstream Manifold Air Pressure Sensor Circuit Intermittent@ |
| 0x0236 | @Secondary Upstream Manifold Air Pressure Sensor Plausibility@ |
| 0x1499 | @Air cleaner leak@ |
| 0x1497 | @Downstream throttle air leak@ |
| 0x1498 | @Downstream supercharger air leak@ |
| 0x0118 | @Engine coolant temperature circuit high input@ |
| 0x0117 | @Engine coolant temperature circuit low input@ |
| 0x0125 | @Insufficient coolant temperature for closed loop fuel control@ |
| 0x0128 | @Coolant Thermostat (Coolant Temperature Below Thermostat Regulating Temperature)@ |
| 0x0119 | @Engine coolant temperature circuit intermittent@ |
| 0x1112 | @Engine Coolant Temperature Radiator Outlet Sensor High Input@ |
| 0x1111 | @Engine Coolant Temperature Radiator Outlet Sensor Low Input@ |
| 0x1113 | @Engine Coolant Temperature Radiator Outlet Sensor Malfunction@ |
| 0x0132 | @O2 sensor circuit high voltage (Bank1 Sensor1)@ |
| 0x0131 | @O2 sensor circuit low voltage (Bank1 Sensor1)@ |
| 0x0130 | @O2 sensor circuit  (Bank1 Sensor1)@ |
| 0x0032 | @HO2S Heater Control Circuit High  (Bank1 Sensor1)@ |
| 0x0031 | @HO2S Heater Control Circuit Low (Bank1 Sensor1)@ |
| 0x0030 | @HO2S Heater Control Circuit (Bank1 Sensor1)@ |
| 0x0135 | @O2 sensor heater circuit (Bank1 Sensor1)@ |
| 0x0138 | @O2 sensor circuit high voltage (Bank1 Sensor2)@ |
| 0x0137 | @O2 sensor circuit low voltage (Bank1 Sensor2)@ |
| 0x0136 | @O2 sensor circuit malfunction (Bank1 Sensor2)@ |
| 0x0038 | @HO2S Heater Control Circuit High  (Bank1 Sensor2)@ |
| 0x0037 | @HO2S Heater Control Circuit Low (Bank1 Sensor2)@ |
| 0x0036 | @HO2S Heater Control Circuit (Bank1 Sensor2)@ |
| 0x0141 | @O2 sensor heater circuit (Bank1 Sensor2)@ |
| 0x0262 | @Cylinder 1 injector circuit high@ |
| 0x0261 | @Cylinder 1 injector circuit low@ |
| 0x0265 | @Cylinder 2 injector circuit high@ |
| 0x0264 | @Cylinder 2 injector circuit low@ |
| 0x0268 | @Cylinder 3 injector circuit high@ |
| 0x0267 | @Cylinder 3 injector circuit low@ |
| 0x0271 | @Cylinder 4 injector circuit high@ |
| 0x0270 | @Cylinder 4 injector circuit low@ |
| 0x0232 | @Fuel Pump Relay Primary Circuit High@ |
| 0x0231 | @Fuel Pump Relay Primary Circuit Low@ |
| 0x0171 | @System too lean (Bank1 )@ |
| 0x0172 | @System too rich (Bank1 )@ |
| 0x0133 | @O2 sensor circuit slow response (Bank1 Sensor1)@ |
| 0x0139 | @O2 sensor circuit slow response (Bank1 Sensor2)@ |
| 0x0340 | @Camshaft position sensor A circuit (Bank1 or single Sensor)@ |
| 0x0341 | @Camshaft position sensor A circuit range/performance  (Bank1 or single Sensor)@ |
| 0x0351 | @Ignition coil A primary/secondary circuit@ |
| 0x0352 | @Ignition coil B primary/secondary circuit@ |
| 0x0326 | @Knock sensor 1 circuit range/performance (Bank1 or single sensor)@ |
| 0x0324 | @Knock Control System Error@ |
| 0x0300 | @Random/multiple cylinder misfire detected@ |
| 0x0301 | Cylinder 1 misfire detected |
| 0x0302 | Cylinder 2 misfire detected |
| 0x0303 | Cylinder 3 misfire detected |
| 0x0304 | Cylinder 4 misfire detected |
| 0x0313 | Misfire Detected with Low Fuel |
| 0x1320 | @Flywheel Adaption for Misfire Detection Range@ |
| 0x1321 | @Flywheel Adaption for Misfire Detection Performance@ |
| 0x0420 | @Catalyst system  efficiency below threshold (Bank1)@ |
| 0x0445 | @Evaporative emission control system purge control valve short to Vbatt@ |
| 0x0444 | @Evaporative emission control system purge control valve short to ground or open circuit@ |
| 0x0448 | @Leakage Diagnostic Pump Signal short to Vbatt@ |
| 0x0447 | @Leakage Diagnostic Pump Signal short to ground or open circuit@ |
| 0x0452 | @Reed switch not closed or pump problem@ |
| 0x0453 | @Reed switch does not open@ |
| 0x1441 | @Evaporative emission control system incorrect purge flow@ |
| 0x1442 | @Leakage Diagnosis Pump clamped tube@ |
| 0x0455 | @Evaporative emission control system leak detected (gross leak)@ |
| 0x0442 | @Evaporative emission control system leak detected (small leak)@ |
| 0x0456 | @Evaporative emission control system leak detected (very small leak)@ |
| 0x0123 | @Throttle/pedal position sensor/switch A circuit high input @ |
| 0x0122 | @Throttle/pedal position sensor/switch A circuit low input@ |
| 0x0223 | @Throttle/pedal position sensor/switch B circuit high Input@ |
| 0x0222 | @Throttle/pedal position sensor/switch B circuit low Input@ |
| 0x1125 | @Throttle Position Sensor 1 and 2 Range/Performance Small Error@ |
| 0x1126 | @Throttle Position Sensor 1 and 2 Range/Performance Large Error@ |
| 0x1229 | @Throttle Sensor Adaption Failure@ |
| 0x1226 | @Throttle Malfunction (Flap Malfunction)@ |
| 0x1123 | @Pedal Position Sensor 1 High Input@ |
| 0x1122 | @Pedal Position Sensor 1 Low Input@ |
| 0x1228 | @Pedal Position Sensor 2  High Input@ |
| 0x1227 | @Pedal Position Sensor 2  Low Input@ |
| 0x1224 | @Pedal Position Sensor 1 and 2 Range/Performance Error @ |
| 0x1636 | @Electronic Control Module H Bridge ETC @ |
| 0x1649 | @ECT Monitor Level 2/3 Torque Loss Calculation @ |
| 0x1650 | @ECT Monitor Level 2/3 ADC Processor Fault @ |
| 0x1651 | @ECT Monitor Level 2/3 Engine Speed Calculation Error@ |
| 0x1652 | @ECT Monitor Level 2/3 Idle Speed A Calculation Fault @ |
| 0x1653 | @ECT Monitor Level 2/3 Idle Speed B Calculation Fault @ |
| 0x1654 | @ECT Monitor Level 2/3 Clutch Torque Min Error @ |
| 0x1655 | @ECT Monitor Level 2/3 Clutch Torque Max Error @ |
| 0x1656 | @ECT Monitor Level 2/3 PVS Diagnostic Error @ |
| 0x1657 | @ECT Monitor Level 2/3 TPS Diagnostic Error @ |
| 0x1658 | @ECT Monitor Level 2/3 Mass Air Flow Calculation @ |
| 0x1659 | @ECT Monitor Level 2/3 Torque Calculation Error @ |
| 0x1660 | @ECT Monitor Level 2/3 MTC Engine Speed Limitation Error @ |
| 0x1666 | @ECT Monitor Level 2/3 MTC and F1 Switch Off 'A' @ |
| 0x1662 | @ECT Monitor Level 2/3 MTC and F1 Switch Off 'B'@ |
| 0x0533 | @A/C refrigerant pressure sensor circuit high input@ |
| 0x0532 | @A/C refrigerant pressure sensor circuit low input@ |
| 0x0500 | @Vehicle speed sensor@ |
| 0x0335 | @Crankshaft position sensor A circuit@ |
| 0x0336 | @Crankshaft position sensor A circuit range/performance@ |
| 0x1538 | @A/C clutch relay control circuit high@ |
| 0x1537 | @A/C clutch relay control circuit low@ |
| 0x0480 | @Engine Cooling Fan Relay 1 circuit@ |
| 0x0481 | @Engine Cooling Fan Relay 2 circuit@ |
| 0x0482 | @Engine Cooling Fan Relay 3 circuit@ |
| 0x0704 | @Clutch switch input circuit malfunction@ |
| 0x0571 | @Cruise control / brake switch A circuit@ |
| 0x1825 | @Shift Lock malfunction@ |
| 0x0568 | @Cruise control set signal@ |
| 0x0575 | @Cruise Control Input Circuit @ |
| 0x0622 | @System Voltage Load Sensor circuit@ |
| 0x0506 | @Idle control system RPM lower than expected@ |
| 0x0507 | @Idle control system RPM higher than expected@ |
| 0x0713 | @Transmission fluid temperature sensor circuit high input@ |
| 0x0712 | @Transmission fluid temperature sensor circuit low input@ |
| 0x0714 | @Transmission fluid temperature sensor circuit intermittent@ |
| 0x0721 | @Output speed sensor circuit range/performance@ |
| 0x0705 | @Transmission range sensor circuit malfunction (PRNDL input)@ |
| 0x1816 | @Downshift Switch / Wheel Minus Switch Error Low Input@ |
| 0x1815 | @Upshift Switch Wheel Plus Switch Error Low Input@ |
| 0x0790 | @Normal/performance switch circuit@ |
| 0x1606 | @Transmission Control Module Error@ |
| 0x1601 | @Transmission Control Module Checksum Error @ |
| 0x1810 | @Transmission Control Module LED Output Circuit@ |
| 0x1786 | @Transmission Ratio Control Actuator Circuit Range/Performance@ |
| 0x1788 | @Transmission Ratio Control Actuator Short Circuit@ |
| 0x1787 | @Transmission Ratio Control Actuator Open Circuit@ |
| 0x1785 | @Transmission Ratio Control Actuator Malfunction@ |
| 0x1840 | @Solonoid defaulted (GIB Communication Error)@ |
| 0x1826 | @Shiftlock Solenoid Relay CVT High Input@ |
| 0x1827 | @Shiftlock Solenoid Relay CVT Low Input@ |
| 0x0741 | @Clutch Solenoid Open circuit@ |
| 0x0743 | @Clutch Solenoid Short circuit@ |
| 0x0746 | @Secondary Pressure Solenoid Open Circuit@ |
| 0x0748 | @Secondary Pressure Solenoid Shorted@ |
| 0x0740 | @Clutch Solenoid Circuit Range / Performance @ |
| 0x0745 | @Secondary Pressure Solenoid Circuit Range / Performance@ |
| 0x1666 | @Timeout EWS-Telegram@ |
| 0x1672 | @EWS wrong code@ |
| 0x0604 | @ECU Internal/ external random access memory (RAM) error@ |
| 0x0603 | @Internal control module keep alive memory (KAM) error  @ |
| 0x0601 | @Internal control module memory checksum error@ |
| 0x0606 | @Electronic Control Module Processor SPI-Bus Failure @ |
| 0x1600 | @Electronic Control Module Coding Memory Checksum Error@ |
| 0x0563 | @System voltage high@ |
| 0x0562 | @System voltage Low@ |
| 0x0608 | @Electronic Control Module Sensor Supply A malfunction@ |
| 0x0609 | @Electronic Control Module Sensor Supply B malfunction @ |
| 0x1610 | @Main Engine Control Module Relay Circuit High Voltage@ |
| 0x1611 | @Main Engine Control Module Relay Circuit Low Voltage@ |
| 0x1685 | @Serial Communication Link ASC@ |
| 0x1687 | @Serial Communication Link Instrument Pack(Kombi)@ |
| 0x1686 | @Serial Communication Link Transmission Control Unit@ |
| 0x1683 | @CAN-Status@ |
| 0x1694 | @Transmission Control Module Communication Error@ |
| 0x1712 | @Transmission Fluid Temperature too High@ |
| 0xFFFF | @Unknown Error@ |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 0x0113 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0112 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0114 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0108 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0107 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0109 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0106 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0238 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x0237 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x0235 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x0236 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1499 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x0C |
| 0x1497 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x0C |
| 0x1498 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x0C |
| 0x0118 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0117 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0125 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0128 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0C |
| 0x0119 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x1112 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x0C |
| 0x1111 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x0C |
| 0x1113 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x0C |
| 0x0132 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0131 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0130 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0032 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0031 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0030 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0135 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0138 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0137 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0136 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0038 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0037 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0036 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
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
| 0x0341 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0351 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x0352 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x0326 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x0324 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x0300 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0301 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0302 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0303 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0304 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0313 | 4 | 1 | 0x17 | 0x01 | 0x11 | 0x16 |
| 0x1320 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x1321 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0420 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0445 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0444 | 4 | 1 | 0x17 | 0x0B | 0x0E | 0x16 |
| 0x0448 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0447 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0452 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0453 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1441 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1442 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0455 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0442 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0456 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0123 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0122 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0223 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0222 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1125 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1126 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1229 | 4 | 1 | 0x17 | 0x02 | 0x11 | 0x16 |
| 0x1226 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1123 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1122 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1228 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1227 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1224 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1636 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1649 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1650 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x16 |
| 0x1651 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x1652 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x1653 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x1654 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x1655 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x1656 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1657 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1658 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1659 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x1660 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x1661 | 4 | 1 | 0x17 | 0x02 | 0x10 | 0x16 |
| 0x1662 | 4 | 1 | 0x17 | 0x02 | 0x10 | 0x16 |
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
| 0x0575 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x16 |
| 0x0568 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x16 |
| 0x0622 | 4 | 1 | 0x17 | 0x04 | 0x10 | 0x16 |
| 0x0506 | 4 | 1 | 0x17 | 0x16 | 0x02 | 0x11 |
| 0x0507 | 4 | 1 | 0x17 | 0x16 | 0x02 | 0x11 |
| 0x0713 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0712 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0714 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0721 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0705 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1816 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1815 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x0790 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1606 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1601 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1810 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1786 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1788 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1787 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1785 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1840 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1827 | 4 | 1 | 0x04 | 0x18 | 0x0A | 0x08 |
| 0x1826 | 4 | 1 | 0x04 | 0x18 | 0x0A | 0x08 |
| 0x0741 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x0743 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x0746 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x0748 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x0740 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x0745 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1666 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1672 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0604 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0603 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0601 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0606 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1600 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0563 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x0D |
| 0x0562 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x0D |
| 0x0608 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0609 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1610 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x1611 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x1685 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x1687 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1686 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1683 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x00 | 0 | 0 | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | @short to V batt@ |
| 0x02 | @short to ground@ |
| 0x03 | @no signal detected@ |
| 0x04 | @signal out of range@ |
| 0x05 | @test complete@ |
| 0x06 | @sporadic error@ |
| 0x07 | @fault present@ |
| 0x08 | @warning lamp state@ |
| 0xFF | @unknown status@ |

### ACTUATOR_TEST

| NAME | LID | ACTION |
| --- | --- | --- |
| MAIN_RELAY | 0x11 | @Main Relay@ |
| FUEL_PUMP | 0x12 | @Fuel Pump@ |
| AC_COMPRESSOR | 0x13 | @Air conditioner compressor@ |
| FAN_RELAY_HIGH | 0x1B | @Cooling fan relay@ @(high)@ |
| FAN_RELAY_MED | 0x1A | @Cooling fan relay@ @(medium)@ |
| FAN_RELAY_LOW | 0x19 | @Cooling fan relay@ @(low)@ |
| CANISTER_PURGE | 0x20 | @Canister Purge@ |
| THROTTLE_ACT | 0x23 | @Throttle actuator@ |
| LEAK_DETECTION | 0x24 | @Leak detection pump@ |
| PRIME_FUEL | 0x34 | @Prime fuel line@ |
| CVT_SHIFT_LOCK | 0x37 | @Constantly Variable Transmission@ @shift interlock@ |
| INJECTOR_1 | 0x39 | @Injector@ 1 |
| INJECTOR_2 | 0x3A | @Injector@ 2 |
| INJECTOR_3 | 0x3B | @Injector@ 3 |
| INJECTOR_4 | 0x3C | @Injector@ 4 |
| UPSTR_O2_HEAT | 0x3D | @Upstream oxygen heater@ |
| DWSTR_O2_HEAT | 0x3E | @Downstream oxygen heater@ |
| DISABLE_ACTS | 0x3F | @Disable all actuators@ |
|  | 0xFF |  |

### APPLIC_CORRECTION

| NAME | LID | ACTION |
| --- | --- | --- |
| IDLE_CO_TRIM | 0x90 | @Idle speed@ @CO trim@ |
| IDLE_TEMP_CORR | 0x91 | @Idle speed@ @temporary correction@ |
| IDLE_DUR_CORR | 0x92 | @Idle speed@ @durable correction@ |
|  | 0xFF |  |

### ADAPTIVE_VALUES

| NAME | LID | ACTION |
| --- | --- | --- |
| ALL_VALUES | 0x50 | @Reset@ @All adaptive values@ |
| MAP | 0x51 | @Reset@ @Manifold Air Pressure correction@ |
| KNOCK_CONTROL | 0x52 | @Reset@ @Knock control@ @adaptive value@ |
| ECT_THROTTLE | 0x53 | @Reset@ @ECT throttle adaption@ |
| CVT | 0x54 | @Reset@ @Constantly Variable Transmission@ |
| LAMBDA | 0x56 | @Reset@ @Lambda@ @adaptive value@ |
| MISFIRING | 0x57 | @Reset@ @Misfiring@ @adaptive value@ |
| IDLE_SPEED | 0x58 | @Reset@ @Idle speed@ @adaptive value@ |
| DYNAMIC_TRIM | 0x59 | @Reset@ @Dynamic trim@ |
| KNOCK_SPARK_ADV | 0x5A | @Reset@ @Knock spark advance slow correction@ |
|  | 0xFF |  |
