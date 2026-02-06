# EMS2K.prg

## General

|  |  |
| --- | --- |
| File | EMS2K.prg |
| Type | PRG |
| Jobs | 123 |
| Tables | 11 |
| Origin | BMW TI-431 Majerus |
| Revision | 1.15 |
| Author | Software Style Mike Rafferty, Ricardo Ian Short |
| ECU Comment | R00  Software |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EMS2K |  |  |
| ORIGIN | string | BMW TI-431 Majerus |  |  |
| REVISION | string | 1.15 |  |  |
| AUTHOR | string | Software Style Mike Rafferty, Ricardo Ian Short |  |  |
| COMMENT | string | R00  Software |  |  |
| PACKAGE | string | 1.14 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

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

### IDENT_OLD

Ident-Daten fuer EMS2000

_No arguments._

### IDENT

Ident-Daten fuer EMS2000

_No arguments._

### IDENT_CODING

Ident-Daten fuer EMS2000

_No arguments._

### IDENT_EXTENDED

Read additional ECU Ident information

_No arguments._

### IDENT_AIF

Ident und AIF zusammen lesen

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

### CONFIG_BYTES_LESEN

Read the Configuraton Bytes

_No arguments._

### PRUEFCODE_LESEN

Pruefcode-Daten in Hex auslesen

_No arguments._

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
| NAME | string | Name of the Adaptive value to reset From the "NAME" column of the table "Adaptive_Values" ALL_VALUES MAP KNOCK_CONTROL ECT_THROTTLE CVT LAMBDA MISFIRING IDLE_SPEED DYNAMIC_TRIM KNOCK_SPARK_ADV CVT_DIST |

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

Read Analogue Input and Output States for LID 15 Read Engine 6 analogue infomation - oxygen  heaters

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

### STATUS_ANA_CVT_RATIO_ADAPTION

Read Analogue Input and Output States for LID 25 Read CVT ratio adaption information

_No arguments._

### STATUS_ANA_CVT_CLUTCH_ADAPTION

Read Analogue Input and Output States for LID 26 Read CVT clutch adaption information

_No arguments._

### STATUS_ANA_BASE_ENGINE

Read Analogue Input and Output States for LID 27 Read Base Engine information

_No arguments._

### STATUS_ANA_OBD2

Read Analogue Input and Output States for LID 28 Read OBD 2 information

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

### STATUS_ADAPTION_CVI

Read Digital Input States for LID 26 

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

### STATUS_IO_CVT_CLUTCH_ADAPTION

Read Digital Input States for LID 26 Read clutch adaption information

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

norm. Heizleist. L-Sonde vKat1 Read the upstream oxygen  heater

_No arguments._

### STATUS_LS_NKAT_HEIZUNG_TV_1

norm. Heizleist. L-Sonde hKat1 Read the downstream oxygen  heater

_No arguments._

### STATUS_LS_VKAT_SIGNAL_1

Lambdasondenspannung v Kat Read the voltage of the upstream oxygen

_No arguments._

### STATUS_LS_NKAT_SIGNAL_1

Lambdasondenspannung n Kat Read the voltage of the downstream oxygen

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

Fahrerwunsch Read the pedal  signals

_No arguments._

### STATUS_PWG_WINKEL

PWG-Winkel auslesen Read the pedal  angle

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Ansauglufttemperatur Read the air intake temperature

_No arguments._

### STATUS_MOTORTEMPERATUR

Motortemperatur Read the engine coolant temperature

_No arguments._

### STATUS_UBATT

Ubatt Read the battery voltage after relay

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Geberradadaption Read the crank  adaption (engine is synchonized switch)

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
| 0x11 | DIENST NICHT UNTERSTÜTZT |
| 0x12 | UNTERFUNKTION NICHT UNTERSTÜTZT |
| 0x22 | BEDINGUNG NICHT RICHTIG |
| 0x31 | ABFRAGE AUSSERHALB BEREICH |
| 0x33 | BERECHTIGUNG VERWEIGERT / GEFORDERT |
| 0x35 | UNGÜLTIGE TASTE |
| 0x36 | ANZAHL DER VERSUCHE ÜBERSCHRITTEN |
| 0x37 | GEFORDERTE VERZÖGERUNGSZEIT NICHT ABGELAUFEN |
| 0x40 | HERUNTERLADEN NICHT AKZEPTIERT |
| 0x41 | FALSCHER HERUNTERLADEN-TYP |
| 0x42 | HERUNTERLADEN AUF ANGEGEBENE ADRESSE NICHT MÖGLICH |
| 0x50 | HOCHLADEN NICHT AKZEPTIERT |
| 0x52 | HOCHLADEN VON ANGEGEBENER ADRESSE NICHT MÖGLICH |
| 0x53 | HOCHLADEN DER ANGEFORDERTEN ANZAHL VON BYTES NICHT MÖGLICH |
| 0x78 | ANFORDERUNGRICHTIG EMPFANGEN - ANTWORT IN BEARBEITUNG |
| 0x79 | FALSCHER BYTE-ZÄHLWERT BEI BLOCKÜBERTRAGUNG |
| 0x80 | IN AKTUELLEM DIAGNOSEMODUS NICHT UNTERSTÜTZTER DIENST |
| 0x90 | VORGANG NICHT AUSGEFÜHRT |
| 0x91 | FALSCHES MELDUNGSFORMAT |
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
| 0xFF | unbekannter Hersteller |

### FREEZEFRAME

| NAME | FACT_A | FACT_B | EINH | UWNR | POS | SIZE | MASK | TYPE | UWTEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FTL | 1.0 | 0.0 | L | 0x01 | 6 | 1 | 0xFF | 0 | Füllstand Kraftstofftank |
| OBD_TPS | 0.468627450 | 0.0 | Grad DK | 0x02 | 7 | 1 | 0xFF | 0 | Drosselklappenöffnung |
| OBD_PV_AV | 0.392156860 | 0.0 | % | 0x03 | 8 | 1 | 0xFF | 0 | Fahrerwunsch |
| VB_RLY | 0.112941180 | 0.0 | V | 0x04 | 9 | 1 | 0xFF | 0 | Batteriespannung |
| LV_CAN_TQ_STATE | 1.0 | 0.0 |  | 0x05 | 10 | 1 | 0x01 | 0 | Activierungsstatus ABS/ACS |
| LV_VS_ERR | 0.5 | 0.0 |  | 0x06 | 10 | 1 | 0x02 | 0 | Fehlerstatus Fahrgeschwindigkeit |
| LV_ACCOUT_RLY | 1.0 | 0.0 |  | 0x07 | 11 | 1 | 0x01 | 0 | Status Klimaanlage |
| LV_DRI | 1.0 | 0.0 |  | 0x08 | 12 | 1 | 0x01 | 0 | Status Getriebe |
| OBD_MAP_UP | 0.036621653 | 0.0 | hPa | 0x09 | 13 | 2 | 0xFF | 0 | Saugrohrdruck vor DK |
| CMD_TYPE | 1.0 | 0.0 |  | 0x0A | 15 | 1 | 0xFF | 0 | Art CVT-Befehl |
| OBD_TIA | 0.75 | -48.0 | Grad C | 0x0B | 16 | 1 | 0xFF | 0 | Einlasslufttemperatur |
| DIST_FAIL | 0.1 | 0.0 | km | 0x0D | 18 | 4 | 0xFF | 0 | Zurückgelegte Strecke bei Ausfall |
| STATE_LS1 | 1.0 | 0.0 |  | 0x0E | 22 | 1 | 0xFF | 0 | Status Kraftstoffsystem 1 |
| LOAD_CLC | 0.392156860 | 0.0 | % | 0x10 | 24 | 1 | 0xFF | 0 | Berechneter Lastwert |
| OBD_TCO | 0.75 | -48.0 | Grad C | 0x11 | 25 | 1 | 0xFF | 0 | Kühlmitteltemperatur/Motor |
| TI_LAM_1 | 0.001525902 | 0.0 | % | 0x12 | 26 | 2 | 0xFF | 1 | Kurzfristige Kraftstoffkorrektur, Zylinderreihe 1 |
| FUEL_AD_MMV_REL_1 | 0.001525902 | 0.0 | % | 0x13 | 28 | 2 | 0xFF | 1 | Langfristige Kraftstoffkorrektur, Zylinderreihe 1 |
| OBD_MAP | 0.036621653 | 0.0 | hPa | 0x16 | 35 | 2 | 0xFF | 0 | Saugrohr-Absolutdruck |
| N | 1.0 | 0.0 | 1/min | 0x17 | 37 | 2 | 0xFF | 0 | Motordrehzahl |
| VS | 1.0 | 0.0 | km/h | 0x18 | 39 | 1 | 0xFF | 0 | Fahrgeschwindigkeit |
| Unbekannter Gegenstand | 0.0 | 0.0 |  | 0x00 | 0 | 0 | 0xFF | 0 | Unbekannter Gegenstand |

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
| LV_ERR_PRES_TLDP_EOL_ONE | 37 | 0x40 | 0x40 |
| LV_ERR_PRES_CAT_EOL | 37 | 0x80 | 0x80 |
| LV_ERR_PRES_0_TLDP | 65 | 0x01 | 0x01 |
| LV_ERR_PRES_1_TLDP | 65 | 0x02 | 0x02 |
| LV_ERR_PRES_2_TLDP | 65 | 0x04 | 0x04 |
| LV_ERR_PRES_3_TLDP | 65 | 0x08 | 0x08 |
| LV_ERR_PRES_4_TLDP | 65 | 0x10 | 0x10 |
| LV_ERR_PRES_5_TLDP | 65 | 0x20 | 0x20 |
| LV_ERR_PRES_6_TLDP | 65 | 0x40 | 0x40 |
| LV_ERR_PRES_7_TLDP | 65 | 0x80 | 0x80 |
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
| LV_CLU_CAL_DONE_D | 16 | 0x01 | 0x01 |
| LV_CLU_CAL_DONE_R | 16 | 0x02 | 0x02 |
| LV_CLU_ADAPT_D_MAX_FAULT | 16 | 0x04 | 0x04 |
| LV_CLU_ADAPT_D_MIN_FAULT | 16 | 0x08 | 0x08 |
| LV_CLU_ADAPT_R_MAX_FAULT | 16 | 0x10 | 0x10 |
| LV_CLU_ADAPT_R_MIN_FAULT | 16 | 0x20 | 0x20 |
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
| CAN_N | 1.0 | 0.0 | 1/min |
| CAN_TQI_BAS | 0.3906525 | 0.0 | % |
| CAN_TQI_LOSS | 0.3906525 | 0.0 | % |
| CAN_MUL_INFO | 1.0 | 0.0 |  |
| CAN_MUL_COD | 1.0 | 0.0 |  |
| CAN_TCO | 0.75 | -48.0 | Grad C |
| CAN_CRU_SET_LAMP | 1.0 | 0.0 |  |
| CAN_PV_AV | 0.392156860 | 0.0 | % |
| TI_SUM_FCO | 1.0 | 0.0 | Microliter |
| CAN_DES_AIM_POSITION | 0.5 | 0.0 | Schritte |
| CAN_DES_CMD_TYPE | 1.0 | 0.0 |  |
| CAN_DES_AIM_SPEED | 1.0 | 0.0 |  |
| CAN_DES_CLU_SOL_DR | 0.195694720 | 0.0 | % |
| CAN_CLUTCH_CODES | 1.0 | 0.0 |  |
| CAN_DES_SDRY_PRES_DR | 0.195694720 | 0.0 | % |
| CAN_SDRY_PRES_CODES | 1.0 | 0.0 |  |
| CAN_MAP | 1.0 | -100.0 | kPa |
| CAN_TQ_AT_WHEELS_WOUT_LOSS | 0.03125 | 0.0 | Nm |
| CAN_TW_NORM | 20.0 | 0.0 | Nm |
| CAN_TW_TQ_LOSS | 0.03125 | 0.0 | Nm |
| CAN_TW_TQI_REQ_TRA | 0.0015259 | 0.0 | % |
| CAN_GR_AT | 1.0 | 0.0 |  |
| CAN_L_GS | 1.0 | 0.0 |  |
| CAN_GR_AT_SEL | 1.0 | 0.0 |  |
| CAN_GR_MOD | 1.0 | 0.0 |  |
| CAN_CURRENT_POSITION | 0.5 | 0.0 | Schritte |
| CAN_MOTOR_CDN_COD | 1.0 | 0.0 |  |
| CAN_DRIV_LED_STATUS | 1.0 | 0.0 |  |
| CAN_CLU_AV_DR | 0.195694720 | 0.0 | % |
| CAN_CLU_CDN_COD | 1.0 | 0.0 |  |
| CAN_DRIV_LED_ERR | 1.0 | 0.0 |  |
| CAN_SDRY_PRS_AV_DR | 0.195694720 | 0.0 | % |
| CAN_SDRY_PRS_CDN_COD | 1.0 | 0.0 |  |
| CAN_GIB_SW_NR | 1.0 | 0.0 |  |
| CAN_DIST | 10.0 | 0.0 | km |
| CAN_FTL | 1.0 | 0.0 | L |
| CAN_AC_TEMP | 0.364 | -30.0 | Grad C |
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
| TCO | 0.75 | -48.0 | Grad C |
| TIA | 0.75 | -48.0 | Grad C |
| MAP | 0.036621653 | 0.0 | hPa |
| MAP_UP | 0.036621653 | 0.0 | hPa |
| TCO_EX | 0.75 | -48.0 | Grad C |
| TRANS_OIL_TEMP | 1.0 | -50.0 | Grad C |
| AC_PRS | 0.156862750 | 0.0 | bar |
| TPS_MTC_1 | 0.001823 | 0.0 | Grad DK |
| TPS_MTC_2 | 0.001823 | 0.0 | Grad DK |
| TPS | 0.468627450 | 0.0 | Grad DK |
| PV_AV_1 | 0.392156860 | 0.0 | % |
| PV_AV_2 | 0.392156860 | 0.0 | % |
| PV_AV | 0.392156860 | 0.0 | % |
| VLS_UP_1 | 0.004887586 | 0.0 | V |
| VLS_DOWN_1 | 0.004887586 | 0.0 | V |
| VB_RLY | 0.112941180 | 0.0 | V |
| VB_KEY | 0.112941180 | 0.0 | V |
| KNKS_BAS | 0.00489 | 0.0 | V |
| IGA_CYL_KNK0 | 0.001459144 | 0.0 | Grad KW |
| KNKWB_0 | 1.0 | 0.0 | Grad KW |
| KNKWD_0 | 1.0 | 0.0 | Grad KW |
| KNK_EGY_0 | 1.0 | 0.0 |  |
| KNKS_0 | 1.0 | 0.0 |  |
| IGA_IGC_0 | -0.375 | 72.0 | Grad KW |
| IGA_IGC_1 | -0.375 | 72.0 | Grad KW |
| IGA_IGC_2 | -0.375 | 72.0 | Grad KW |
| IGA_IGC_3 | -0.375 | 72.0 | Grad KW |
| IGA_SP | 0.375 | -23.625 | Grad KW |
| LSHPWM_UP_1 | 0.001525902 | 0.0 | % |
| LSHPWM_DOWN | 0.001525902 | 0.0 | % |
| MAF_KGH | 0.25 | 0.0 | kg/h |
| MAP_SP | 0.036621653 | 0.0 | hPa |
| MAP_UP_SP | 0.036621653 | 0.0 | hPa |
| TPS_SP_CLC | 0.001823 | 0.0 | Grad DK |
| V_TPS_AD_BOL_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_BOL_2 | 0.004887586 | 0.0 | V |
| V_TPS_AD_EL_BOL_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_EL_BOL_2 | 0.004887586 | 0.0 | V |
| V_TPS_AD_LIH_1 | 0.004887586 | 0.0 | V |
| V_TPS_AD_LIH_2 | 0.004887586 | 0.0 | V |
| N_SP_IS | 1.0 | 0.0 | 1/min |
| TPS_LIH | 0.001823 | 0.0 | Grad DK |
| TI_LAM_1 | 0.001525902 | 0.0 | % |
| LAM_MV_1 | 0.001525902 | 0.0 | % |
| TI_AD_ADD_MMV_0 | 0.004 | 0.0 | ms |
| TI_AD_ADD_MMV_REL_0 | 0.004 | 0.0 | ms |
| TI_AD_FAC_MMV_0 | 0.001525902 | 0.0 | % |
| TI_AD_FAC_MMV_REL_0 | 0.001525902 | 0.0 | % |
| VB | 0.112941180 | 0.0 | V |
| VS | 1.0 | 0.0 | km/h |
| N | 1.0 | 0.0 | 1/min |
| VS_CVT | 0.1 | 0.0 | km/h |
| GR_MT | 1.0 | 0.0 |  |
| GR_AT | 1.0 | 0.0 |  |
| CPPWM | 0.392156860 | 0.0 | % |
| LOAD_CLC | 0.392156860 | 0.0 | % |
| TIPR | 0.016 | 0.0 | ms |
| TI_V_000 | 0.0039999542 | 0.0 | ms |
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
| ER_000 | 1.0 | 0.0 | Mikrosekunde |
| ER_001 | 1.0 | 0.0 | Mikrosekunde |
| ER_002 | 1.0 | 0.0 | Mikrosekunde |
| ER_003 | 1.0 | 0.0 | Mikrosekunde |
| ER_MMV_EOL_000 | 0.00122 | 0.0 | Mikrosekunde |
| ER_MMV_EOL_001 | 0.00122 | 0.0 | Mikrosekunde |
| ER_MMV_EOL_002 | 0.00122 | 0.0 | Mikrosekunde |
| ER_MMV_EOL_003 | 0.00122 | 0.0 | Mikrosekunde |
| ER_THD_000 | 1.0 | 0.0 | Mikrosekunde |
| ER_THD_001 | 1.0 | 0.0 | Mikrosekunde |
| ER_THD_002 | 1.0 | 0.0 | Mikrosekunde |
| ER_THD_003 | 1.0 | 0.0 | Mikrosekunde |
| FAIL_TLDP_EOL | 1.0 | 0.0 |  |
| CMD_TYPE | 1.0 | 0.0 |  |
| MODE_CURRENT | 1.0 | 0.0 |  |
| ENG_SPD_TARGET | 1.0 | 0.0 | 1/min |
| CVT_DFT_TOT_DIST | 0.1 | 0.0 | km |
| T_CVT_MODE_NEUTRAL | 1.0 | 0.0 | s |
| T_CVT_MODE_DRIVE | 1.0 | 0.0 | s |
| T_CVT_MODE_SPORT | 1.0 | 0.0 | s |
| T_CVT_MODE_MANUAL | 1.0 | 0.0 | s |
| T_CVT_ENG_RUN | 1.0 | 0.0 | s |
| TAB_IP_TRAN_CRV_ADJUST_00 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_01 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_02 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_03 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_04 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_05 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_06 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_07 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_08 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_09 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_10 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_11 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_12 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_13 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_14 | 0.5 | -255.0 | Schritte |
| TAB_IP_TRAN_CRV_ADJUST_15 | 0.5 | -255.0 | Schritte |
| FAST_ADAPT | 1.0 | 0.0 |  |
| BP_ADAPTION_D | 0.1956 | 0.0 | % |
| BP_ADAPTION_R | 0.1956 | 0.0 | % |
| CLU_BITE_POINT_EOL_D | 0.1956 | 0.0 | % |
| CLU_BITE_POINT_EOL_R | 0.1956 | 0.0 | % |
| LONG_TERM_ADPT_D | 0.1956 | 0.0 | % |
| LONG_TERM_ADPT_R | 0.1956 | 0.0 | % |
| CVT_ADAPT_1 | 1.0 | 0.0 |  |
| CLU_MOD_ACTIVE | 1.0 | 0.0 |  |
| TQ_AV | 0.03125 | 0.0 | Nm |
| TQ_DIF_IS_AD | 0.03125 | 0.0 | Nm |
| TQ_DIF_I_IS | 0.03125 | 0.0 | Nm |
| TQ_DIF_P_D_IS | 0.03125 | 0.0 | Nm |
| DIF_AR_RED | 0.000976563 | 0.0 | cm2 |
| SLOP_AR_RED | 0.001525902 | 0.0 | % |
| DIF_MAF_SCHA_SAV | 0.25 | 0.0 | kg/h |
| DIST_ACT_MIL | 0.1 | 0.0 | km |
| DIST_ACT_WAL_1 | 0.1 | 0.0 | km |
| DIST_ACT_WAL_2 | 0.1 | 0.0 | km |
| DOWN_DYN_MEM_CAT | 0.003891051 | 0.0 |  |
| VLS_CYC_SUM_MEM | 0.01 | 0.0 | s |
| VLS_CYC_MAX_MEM | 0.01 | 0.0 | s |
| SEG_AD_MMV_000 | 0.061035156 | 0.0 | % |
| SEG_AD_MMV_001 | 0.061035156 | 0.0 | % |
| SEG_AD_MMV_002 | 0.061035156 | 0.0 | % |
| SEG_AD_MMV_003 | 0.061035156 | 0.0 | % |
| CTR_CDN_RBM_TLDP | 1.0 | 0.0 |  |
| CTR_COMP_RBM_TLDP | 1.0 | 0.0 |  |
| CTR_CDN_RBM_LS_UP_DIAG | 1.0 | 0.0 |  |
| CTR_COMP_RBM_LS_UP_DIAG | 1.0 | 0.0 |  |
| CTR_CDN_RBM_CAT_DIAG | 1.0 | 0.0 |  |
| CTR_COMP_RBM_CAT_DIAG | 1.0 | 0.0 |  |
| CTR_IGK_CYC_RBM | 1.0 | 0.0 |  |
| CTR_CDN_OBD_RBM | 1.0 | 0.0 |  |
| N_SP_ADD_KWP_LTA | 1.0 | 0.0 |  |
| Unbekannter Gegenstand | 0.0 | 0 |  |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0071 | Ambient Lufteinlass Temperatursensor Range/Performance ungültiger Wert |
| 0x113C | Lufteinlass Temperatur TIA haengender Wert |
| 0x113D | Temperatur Lufteinlass ungültige Werte |
| 0x316B | Temperatursignal Motorlüfter haengt unter Einschalttemperatur |
| 0x316A | Temperatursignal Motorlüfter zu hoch |
| 0x0700 | AISIN TCU OBD relevanter Fehler |
| 0x101F | Temperatur Lufteinlass und ungültige Werte der Aussentemperatur-Sensoren |
| 0x0070 | Fehlfunktion Aussentemperatur-Sensor oder Stromkreis unterbrochen |
| 0x0113 | Intake Air Temperature Circuit High Input |
| 0x0112 | Intake Air Temperature Circuit Low Input |
| 0x0114 | Stromkreis Ansauglufttemperatur, zeitw. unterbr. |
| 0x0108 | Stromkreis Saugrohr-Absolutdruck/Atmosphärendruck, Eingang hoch |
| 0x0107 | Stromkreis Saugrohr-Absolutdruck/Atmosphärendruck, Eingang niedrig |
| 0x0109 | Stromkreis Saugrohr-Absolutdruck/Atmosphärendruck, zeitw. unterbr. |
| 0x1106 | Saugrohrdrucksensor zu niedrig bei Motorstillstand |
| 0x1107 | Saugrohrdrucksensor zu niedrig im Leerlauf |
| 0x1108 | Saugrohrdrucksensor zu niedrig bei Vollast für niedrige Motordrehzahl |
| 0x1109 | Saugrohrdruck zu hoch im Schiebebetrieb |
| 0x1238 | Sekundär-Saugrohrdrucksensor vor DK, Eingang hoch |
| 0x1237 | Sekundär-Saugrohrdrucksensor vor DK, Eingang niedrig |
| 0x1235 | Sekundär-Saugrohrdrucksensor vor DK, Stromkreis zeitw. unterbr. |
| 0x1239 | Sekundär-Saugrohrdrucksensor vor DK zu niedrig bei Motorstillstand |
| 0x1240 | Sekundär-Saugrohrdrucksensor vor DK zu niedrig im Leerlauf |
| 0x1241 | Sekundär-Saugrohrdrucksensor vor DK zu niedrig bei Vollast für niedrige Motordrehzahl |
| 0x1242 | Sekundär-Saugrohrdrucksensor vor DK zu hoch im Schiebebetrieb |
| 0x1499 | Ansaugluftfilter undicht |
| 0x1497 | Luftundichtigkeit nach DK |
| 0x1498 | Luftundichtigkeit nach Lader |
| 0x0118 | Engine Coolant Temperature Circuit High Input |
| 0x0117 | Engine Coolant Temperature Circuit Low Input |
| 0x0116 | Engine Coolant Temperature Circuit Circuit Range/ Performance Problem |
| 0x0125 | Kühlmitteltemperatur nicht ausreichend für Lambaregelung |
| 0x0128 | Kühlmittelthermostat (Kühlmitteltemperatur unter Thermostat-Regeltemperatur) |
| 0x0119 | Kühlmitteltemperatur/Motor, Stromkreis zeitw. unterbr. |
| 0x0234 | Overboost (Ladedrucküberschreitung) |
| 0x1112 | Kühlmitteltemperatur/Motor, Sensor Kühlerauslauf, Eingang hoch |
| 0x1111 | Kühlmitteltemperatur/Motor, Sensor Kühlerauslauf, Eingang niedrig |
| 0x1113 | Kühlmitteltemperatur/Motor, Sensor Kühlerauslauf, zeitw. unterbr. |
| 0x0132 | Stromkreis Lambasonde, Spannung hoch (Reihe1 Sensor1) |
| 0x0131 | Stromkreis Lambasonde, Spannung niedrig (Reihe1 Sensor1) |
| 0x0130 | Stromkreis Lambasonde (Reihe1 Sensor1) |
| 0x0032 | Steuerstromkreis Sondenheizung hoch (Reihe1 Sensor1) |
| 0x0031 | Steuerstromkreis Sondenheizung niedrig (Reihe1 Sensor1) |
| 0x0030 | Steuerstromkreis Sondenheizung (Reihe1 Sensor1) |
| 0x0135 | Stromkreis Sondenheizung (Reihe1 Sensor1) |
| 0x0053 | HO2S Heizwiderstand (Bank1 Sensor1) |
| 0x0138 | Stromkreis Lambasonde, Spannung hoch (Reihe1 Sensor2) |
| 0x0137 | Stromkreis Lambasonde, Spannung niedrig (Reihe1 Sensor2) |
| 0x0136 | Funktionsstörung Stromkreis Lambasonde (Reihe1 Sensor2) |
| 0x0038 | Steuerstromkreis Sondenheizung hoch (Reihe1 Sensor2) |
| 0x0037 | Steuerstromkreis Sondenheizung niedrig (Reihe1 Sensor2) |
| 0x0036 | Steuerstromkreis Sondenheizung (Reihe1 Sensor2) |
| 0x0141 | Stromkreis Sondenheizung (Reihe1 Sensor2) |
| 0x0054 | HO2S Heizwiderstand (Bank1 Sensor2) |
| 0x0262 | Stromkreis Einspritzventil Zylinder 1 hoch |
| 0x0261 | Stromkreis Einspritzventil Zylinder 1 niedrig |
| 0x0201 | Stromkreis Einspritzventil - Zylinder 1 |
| 0x0265 | Stromkreis Einspritzventil Zylinder 2 hoch |
| 0x0264 | Stromkreis Einspritzventil Zylinder 2 niedrig |
| 0x0202 | Stromkreis Einspritzventil - Zylinder 2 |
| 0x0268 | Stromkreis Einspritzventil Zylinder 3 hoch |
| 0x0267 | Stromkreis Einspritzventil Zylinder 3 niedrig |
| 0x0203 | Stromkreis Einspritzventil - Zylinder 3 |
| 0x0271 | Stromkreis Einspritzventil Zylinder 4 hoch |
| 0x0270 | Stromkreis Einspritzventil Zylinder 4 niedrig |
| 0x0204 | Stromkreis Einspritzventil - Zylinder 4 |
| 0x1236 | Primärkreis Relais/Kraftstoffpumpe hoch |
| 0x1234 | Primärkreis Relais/Kraftstoffpumpe niedrig |
| 0x0171 | System zu mager (Reihe1) |
| 0x0172 | System zu fett (Reihe1) |
| 0x0133 | Stromkreis Lambasonde, Reaktion zu langsam (Reihe1 Sensor1) |
| 0x0139 | Stromkreis Lambasonde, Reaktion zu langsam (Reihe1 Sensor2) |
| 0x1143 | Prüfsignal Sondenaktivität zu hoch (Reihe1 Sensor 2) |
| 0x1144 | Prüfsignal Sondenaktivität zu niedrig (Reihe1 Sensor 2) |
| 0x2271 | Lambdasondensignal bei fett haengend (Bank 1 Sensor 2) |
| 0x2270 | Lambdasondensignal bei mager haengend (Bank 1 Sensor 2) |
| 0x2096 | Kraftstoffkorrektursystem nach Kat zu mager, Reihe1 |
| 0x2097 | Kraftstoffkorrektursystem nach Kat zu fett, Reihe1 |
| 0x0340 | Stromkreis Nockenwinkelsensor A (Reihe1 oder Einzelsensor) |
| 0x0341 | Stromkreis Nockenwinkelsensor A, Bereich/Betriebsgüte (Reihe1 oder Einzelsensor) |
| 0x0351 | Zündspule A, Primär-/Sekundärkreis |
| 0x1366 | Zündspule A, Primär-/Sekundärkreis niedrig |
| 0x0352 | Zündspule B, Primär-/Sekundärkreis |
| 0x1367 | Zündspule B, Primär-/Sekundärkreis niedrig |
| 0x2301 | Zündspule A, Primärsteuerkreis hoch |
| 0x2300 | Zündspule A, Primärsteuerkreis niedrig |
| 0x2304 | Zündspule B, Primärsteuerkreis niedrig |
| 0x2303 | Zündspule B, Primärsteuerkreis hoch |
| 0x0326 | Stromkreis Klopfsensor 1, Bereich/Betriebsgüte (Reihe1 oder Einzelsensor) |
| 0x0324 | Fehler in Klopfregelung |
| 0x1340 | Fehlzündg. beim Start, Mehrfachfehler |
| 0x0300 | Fehlzündg. erkannt, stochastisch/mehrere Zyl. |
| 0x1341 | Kat-schäd. Fehlzündg., Mehrfachfehler |
| 0x1342 | Fehlzündg. beim Start, Zylinder 1 |
| 0x0301 | Fehlzündg. Zylinder 1 erkannt |
| 0x1343 |   |
| 0x1344 | Fehlzündg. beim Start, Zylinder 2 |
| 0x0302 | Fehlzündg. Zylinder 2 erkannt |
| 0x1345 | Kat-schäd. Fehlzündg. Zylinder 2 |
| 0x1346 | Fehlzündg. beim Start Zylinder 3 |
| 0x0303 | Fehlzündg. Zylinder 3 erkannt |
| 0x1347 | Kat-schäd. Fehlzündg. Zylinder 3 |
| 0x1348 | Fehlzündg. beim Start Zylinder 4 |
| 0x0304 | Fehlzündg. Zylinder 4 erkannt |
| 0x1349 | Kat-schäd. Fehlzündg. Zylinder 4 |
| 0x0313 | Fehlzündg. bei Kraftstoffmangel erkannt |
| 0x1320 | Schwungradanpassung für Bereich Fehlzündungserkennung |
| 0x1321 | Schwungradanpassung für Betriebsgüte Fehlzündungserkennung |
| 0x0420 | Katalysatorwirkungsgrad unter Schwelle (Reihe 1) |
| 0x0443 | AKF-System, Stromkreis Regenerierventil |
| 0x0444 | AKF-System, Stromkreis Regenerierventil unterbr. |
| 0x0445 | AKF-System, Stromkreis Regenerierventil kurzgeschl. |
| 0x1443 | Leckdiagnosepumpe, Signal hoch |
| 0x1442 | Leckdiagnosepumpe, Signal niedrig |
| 0x1436 | Leckdiagnosepumpe, Unterbrechung |
| 0x2402 | AKF-System, Leckdiagnosepumpe, Steuerkreis hoch |
| 0x2401 | AKF-System, Leckdiagnosepumpe, Steuerkreis niedrig |
| 0x2400 | AKF-System, Leckdiagnosepumpe, Kanal offen |
| 0x1475 | Reed-Schalter schliesst nicht |
| 0x1477 | Reed-Schalter öffnet nicht |
| 0x1437 | Bereich/Betriebsgüte Leckdiagnosepumpe |
| 0x2404 | AKF-System, Leckdiagnosepumpe, Sensorkanal Bereich/Betriebsgüte |
| 0x0441 | AKF-System, Regenerierluftstrom n.i.O. |
| 0x1476 | Leckdiagnosepumpe, Leitung eingeklemmt |
| 0x0455 | AKF-System, Leck erkannt (grosses Leck) |
| 0x0442 | AKF-System, Leck erkannt (kleines Leck) |
| 0x0456 | AKF-System, Leck erkannt (sehr kleines Leck) |
| 0x0123 | Stromkreis DK-Sensor/Pedalwegsensor/Schalter A, Eingang hoch |
| 0x0122 | Stromkreis DK-Sensor/Pedalwegsensor/Schalter A, Eingang niedrig |
| 0x0223 | Stromkreis DK-Sensor/Pedalwegsensor/Schalter B, Eingang hoch |
| 0x0222 | Stromkreis DK-Sensor/Pedalwegsensor/Schalter B, Eingang niedrig |
| 0x1125 | DK-Sensor A und B, Bereich/Betriebsgüte, geringer Fehler |
| 0x1126 | DK-Sensor A und B, Bereich/Betriebsgüte, enormer Fehler |
| 0x1229 | Drosselklappensensor, Anpassungsfehler |
| 0x1226 | Funktionsstörung Drosselklappe (Klappe defekt) |
| 0x1123 | Pedalwegsensor 1, Eingang hoch |
| 0x1122 | Pedalwegsensor 1, Eingang niedrig |
| 0x1223 | Pedalwegsensor 2, Eingang hoch |
| 0x1222 | Pedalwegsensor 2, Eingang niedrig |
| 0x1224 | Pedalwegsensor 1 und 2, Bereich/Betriebsgüte n.i.O. |
| 0x0638 | Drosselklappensteller Bereich/Betriebsgüte |
| 0x2123 | DK/PWG Position Sensor/Schalter D Kanal High Input |
| 0x2122 | DK/PWG Position Sensor/Schalter D Kanal Low Input |
| 0x2128 | DK/PWG Position Sensor/Schalter E Kanal High Input |
| 0x2127 | DK/PWG Position Sensor/Schalter E Kanal Low Input |
| 0x2138 | DK/PWG Position Sensor/Schalter D/E Spannungswechselbeziehung |
| 0x1617 | Elektr. Steuergerät, Regler H-Brücke |
| 0x1679 | E-Gas, Überwachungsebene 2/3, Berechnung Drehmomentverlust |
| 0x1680 | E-Gas, Überwachungsebene 2/3, Fehler ADK-Prozessor |
| 0x1681 | E-Gas, Überwachungsebene 2/3, Berechnungsfehler Motordrehzahl |
| 0x1682 | E-Gas, Überwachungsebene 2/3, Berechnungsfehler Leerlaufdrehzahl A |
| 0x1683 | E-Gas, Überwachungsebene 2/3, Berechnungsfehler Leerlaufdrehzahl B |
| 0x1685 | E-Gas, Überwachungsebene 2/3, max. Fehler Kupplungsdrehmoment |
| 0x1684 | E-Gas, Überwachungsebene 2/3, min. Fehler Kupplungsdrehmoment |
| 0x1686 | E-Gas, Überwachungsebene 2/3, Diagnosefehler Pedalwegsensor |
| 0x1687 | E-Gas, Überwachungsebene 2/3 Diagnosefehler DK-Sensor |
| 0x1688 | E-Gas, Überwachungsebene 2/3, Berechnung Luftmassenstrom |
| 0x1689 | E-Gas, Überwachungsebene 2/3, Fehler Drehmomentberechnung |
| 0x1691 | E-Gas, Überwachungsebene 2/3, Fehler Drehzahlbegrenzung, elektromot. Drosselklappensteller |
| 0x1692 | E-Gas, Überwachungsebene 2/3, elektromot. Drosselklappensteller und Kraftstoffabschaltung 'A' |
| 0x1693 | E-Gas, Überwachungsebene 2/3, elektromot. Drosselklappensteller und Kraftstoffabschaltung 'B' |
| 0x0533 | Stromkreis Kältemitteldrucksensor, Eingang hoch |
| 0x0532 | Stromkreis Kältemitteldrucksensor, Eingang niedrig |
| 0x0500 | Fahrgeschwindigkeitssensor |
| 0x0335 | Stromkreis Kurbelwinkelsensor A |
| 0x0336 | Stromkreis Kurbelwinkelsensor A, Bereich/Betriebsgüte |
| 0x0647 | Relais/Kompressorkupplung, Steuerstromkreis hoch |
| 0x0646 | Relais/Kompressorkupplung, Steuerstromkreis niedrig |
| 0x1482 | Relais/Motorkühlerlüfter 1, Eingang hoch |
| 0x1481 | Relais/Motorkühlerlüfter 1, Eingang niedrig |
| 0x1485 | Relais/Motorkühlerlüfter 2, Eingang hoch |
| 0x1484 | Relais/Motorkühlerlüfter 2, Eingang niedrig |
| 0x1488 | Relais/Motorkühlerlüfter 3, Eingang hoch |
| 0x1487 | Relais/Motorkühlerlüfter 3, Eingang niedrig |
| 0x0692 | Luefter 1 Steuerkreis hoch |
| 0x0691 | Luefter 1 Steuerkreis niedrig |
| 0x0694 | Luefter 2 Steuerkreis hoch |
| 0x0693 | Luefter 2 Steuerkreis niedrig |
| 0x0696 | Luefter 3 Steuerkreis hoch |
| 0x0695 | Luefter 3 Steuerkreis niedrig |
| 0x0704 | Funktionsstörung Eingangsstromkreis Kupplungsschalter |
| 0x0571 | Stromkreis Geschwindigkeitsregelung / Bremsschalter A |
| 0x0568 | Einstellsignal Geschwindigkeitsregelung |
| 0x0575 | Eingangsstromkreis Geschwindigkeitsregelung |
| 0x1627 | Systemspannung, Lastsensor hoch |
| 0x1626 | Systemspannung, Lastsensor niedrig |
| 0x0506 | Leerlaufregelsystem, Drehzahl niedriger als erwartet |
| 0x0507 | Leerlaufregelsystem, Drehzahl höher als erwartet |
| 0x0218 | Getriebeflüssigkeit, Übertemperaturzustand |
| 0x0713 | Stromkreis Temperatursensor Getriebeflüssigkeit, Eingang hoch |
| 0x0712 | Stromkreis Temperatursensor Getriebeflüssigkeit, Eingang niedrig |
| 0x0714 | Temperatursensor Getriebeflüssigkeit, Stromkreis zeitw. unterbr. |
| 0x0721 | Stromkreis Abtriebsdrehzahlsensor, Bereich/Betriebsgüte |
| 0x0705 | Funktionsstörung Stromkreis Getriebepositionssensor (PRNDL-Eingang) |
| 0x0816 | Stromkreis Herunterschaltkontakt |
| 0x0815 | Stromkreis Hochschaltkontakt |
| 0x1816 | Fehler Lenkrad-Minusschalter, Eingang niedrig |
| 0x1815 | Fehler Lenkrad-Plusschalter, Eingang niedrig |
| 0x0790 | Stromkreis, Normal/Sport-Schalter |
| 0x1698 | Steuerungsfehler Getriebesteuergerät |
| 0x1699 | Prüfsummenfehler Getriebesteuergerät |
| 0x1705 | Unterbrechung LED-Ausgang Getriebesteuergerät |
| 0x1706 | Kurzschluss LED-Ausgang Getriebesteuergerät |
| 0x1786 | Stromkreis Stellantrieb Getriebeübersetzung, Bereich/Betriebsgüte |
| 0x1788 | Kurzschluss Stellantrieb Getriebeübersetzung |
| 0x1787 | Unterbrechung Stellantrieb Getriebeübersetzung |
| 0x1785 | Funktionsstörung Stromkreis Stellantrieb Getriebeübersetzung |
| 0x1789 | Kommunikationsfehler Stellantrieb Getriebeübersetzung |
| 0x1825 | Funktionsstörung Wählhebelsperre |
| 0x1826 | Relais Wählhebelsperrmagnet (CVT), Eingang niedrig |
| 0x1827 | Relais Wählhebelsperrmagnet (CVT), Eingang hoch |
| 0x1739 | Kupplungsmagnetventil, Kommunikationsfehler |
| 0x1740 | Stromkreis Kupplungsmagnetventil, Bereich/Betriebsgüte |
| 0x1741 | Unterbrechung Kupplungsmagnetventil |
| 0x1742 | Kurzschluss Kupplungsmagnetventil |
| 0x1749 | Sekundärdruck-Magnetventil, Kommunikationsfehler |
| 0x1750 | Stromkreis Sekundärdruck-Magnetventil, Bereich/Betriebsgüte |
| 0x1751 | Sekundärdruck-Magnetventil, Unterbrechung |
| 0x1752 | Sekundärdruck-Magnetventil, Kurzschluss |
| 0x1661 | Zeitüberschreitung EWS-Telegramm |
| 0x1656 | EWS, falscher Code |
| 0x0604 | Steuergerät, interner RAM-Speicher, Fehler |
| 0x0603 | Steuergerät, interner KAM-Speicher, Fehler |
| 0x0601 | Steuergerät, interner Speicher, Prüfsummenfehler |
| 0x1615 | Elektr. Steuergerät, Prozessor, Ausfall SPI-Bus |
| 0x1600 | Steuergerät, externer RAM-Speicher, Fehler |
| 0x1616 | Elektr. Steuergerät, Codierspeicher, Prüfsummenfehler |
| 0x0563 | Systemspannung hoch |
| 0x0562 | Systemspannung niedrig |
| 0x1571 | Elektr. Steuergerät, Sensorspeisung A, Ausgang hoch |
| 0x1570 | Elektr. Steuergerät, Sensorspeisung A, Ausgang niedrig |
| 0x1572 | Elektr. Steuergerät, Sensorspeisung A, unsauberes Signal |
| 0x1574 | Elektr. Steuergerät, Sensorspeisung B, Ausgang hoch |
| 0x1573 | Elektr. Steuergerät, Sensorspeisung B, Ausgang niedrig |
| 0x1575 | Elektr. Steuergerät, Sensorspeisung B, unsauberes Signal |
| 0x1696 | Steuerstromkreis Hauptrelais, Eingang niedrig |
| 0x1697 | Steuerstromkreis Hauptrelais, Eingang hoch |
| 0x0643 | Sensor Referenzspannung A Kanal Hoch |
| 0x0642 | Sensor Referenzspannung A Kanal niedrig |
| 0x0653 | Sensor Referenzspannung B Kanal Hoch |
| 0x0652 | Sensor Referenzspannung B Kanal niedrig |
| 0x0686 | ECM/PCM Hauptrelais Steuerkreis niedrig |
| 0x0687 | ECM/PCM Hauptrelais Steuerkreis hoch |
| 0x1613 | Serielle Kommunikationsverbindung ASC |
| 0x1612 | Serielle Kommunikationsverbindung Kombiinstrument |
| 0x1611 | Serielle Kommunikationsverbindung Getriebesteuergerät |
| 0x1607 | CAN-Status |
| 0x1712 | Getriebeflüssigkeit, Temperatur zu hoch |
| 0x2299 | Gaspedal Position/Bremse Plausibilitaetsfehler |
| 0xFFFF | Unbekannter Fehler |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 0x0071 | 4 | 1 | 0x17 | 0x11 | 0x02 | 0x0B |
| 0x113C | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x113D | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x316B | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x316A | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0700 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x0D |
| 0x101F | 4 | 1 | 0x17 | 0x11 | 0x02 | 0x0B |
| 0x0070 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0113 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0112 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0114 | 4 | 1 | 0x17 | 0x11 | 0x16 | 0x0B |
| 0x0108 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0107 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x0109 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x1106 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x1107 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x1108 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x1109 | 4 | 1 | 0x17 | 0x02 | 0x16 | 0x0B |
| 0x1238 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1237 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1235 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1239 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1240 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1241 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1242 | 4 | 1 | 0x17 | 0x02 | 0x09 | 0x16 |
| 0x1499 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x1497 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x1498 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x0118 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0117 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0116 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0125 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0128 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0119 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x0B |
| 0x0234 | 4 | 1 | 0x17 | 0x16 | 0x11 | 0x09 |
| 0x1112 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x00 |
| 0x1111 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x00 |
| 0x1113 | 4 | 1 | 0x17 | 0x16 | 0x0B | 0x00 |
| 0x0132 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0131 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0130 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0032 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0031 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0030 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0135 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0053 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0138 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0137 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0136 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0038 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0037 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0036 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0141 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0054 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0262 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0261 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0201 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0265 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0264 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0202 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0268 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0267 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0203 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0271 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0270 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0204 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x1236 | 4 | 1 | 0x17 | 0x0E | 0x01 | 0x16 |
| 0x1234 | 4 | 1 | 0x17 | 0x0E | 0x01 | 0x16 |
| 0x0171 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0172 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0133 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0139 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1143 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1144 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2271 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2270 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2096 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2097 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0340 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0341 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0351 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x1366 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x0352 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x1367 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x2301 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x2300 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x2304 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x2303 | 4 | 1 | 0x17 | 0x04 | 0x11 | 0x16 |
| 0x0326 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x0324 | 4 | 1 | 0x17 | 0x0E | 0x11 | 0x16 |
| 0x1340 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0300 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1341 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1342 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0301 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1343 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1344 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0302 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1345 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1346 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0303 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1347 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1348 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0304 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x1349 | 4 | 1 | 0x17 | 0x0B | 0x11 | 0x16 |
| 0x0313 | 4 | 1 | 0x17 | 0x01 | 0x11 | 0x16 |
| 0x1320 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x1321 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0420 | 4 | 1 | 0x17 | 0x0E | 0x13 | 0x16 |
| 0x0443 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0444 | 4 | 1 | 0x17 | 0x04 | 0x0E | 0x16 |
| 0x0445 | 4 | 1 | 0x17 | 0x0B | 0x0E | 0x16 |
| 0x1443 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1442 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1436 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2402 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2401 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2400 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1475 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1477 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1437 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x2404 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x0441 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1476 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
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
| 0x1223 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1222 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1224 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x0638 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x2123 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x2122 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x2128 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x2127 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x2138 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1617 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1679 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1680 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x16 |
| 0x1681 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x1682 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x1683 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x1684 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x1685 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x1686 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1687 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0x1688 | 4 | 1 | 0x17 | 0x13 | 0x0E | 0x16 |
| 0x1689 | 4 | 1 | 0x17 | 0x10 | 0x05 | 0x16 |
| 0x1691 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x1692 | 4 | 1 | 0x17 | 0x02 | 0x10 | 0x16 |
| 0x1693 | 4 | 1 | 0x17 | 0x02 | 0x10 | 0x16 |
| 0x0533 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x0532 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x0500 | 4 | 1 | 0x17 | 0x18 | 0x06 | 0x16 |
| 0x0335 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0336 | 4 | 1 | 0x17 | 0x04 | 0x06 | 0x16 |
| 0x0647 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x0646 | 4 | 1 | 0x17 | 0x07 | 0x11 | 0x16 |
| 0x1482 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1481 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1485 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1484 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1488 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x1487 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0692 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0691 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0694 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0693 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0696 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0695 | 4 | 1 | 0x17 | 0x10 | 0x11 | 0x16 |
| 0x0704 | 4 | 1 | 0x17 | 0x18 | 0x04 | 0x16 |
| 0x0571 | 4 | 1 | 0x17 | 0x18 | 0x04 | 0x16 |
| 0x1825 | 4 | 1 | 0x17 | 0x0A | 0x08 | 0x16 |
| 0x0575 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x16 |
| 0x0568 | 4 | 1 | 0x17 | 0x18 | 0x08 | 0x16 |
| 0x1627 | 4 | 1 | 0x17 | 0x04 | 0x10 | 0x16 |
| 0x1626 | 4 | 1 | 0x17 | 0x04 | 0x10 | 0x16 |
| 0x0506 | 4 | 1 | 0x17 | 0x16 | 0x02 | 0x11 |
| 0x0507 | 4 | 1 | 0x17 | 0x16 | 0x02 | 0x11 |
| 0x0218 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x1712 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0713 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0712 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0714 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0721 | 4 | 1 | 0x17 | 0x08 | 0x11 | 0x16 |
| 0x0705 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x0816 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x0815 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1816 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1815 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x0790 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1698 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1699 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1705 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1706 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1786 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1788 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1787 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1785 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1789 | 4 | 1 | 0x17 | 0x08 | 0x04 | 0x16 |
| 0x1826 | 4 | 1 | 0x04 | 0x18 | 0x0A | 0x08 |
| 0x1827 | 4 | 1 | 0x04 | 0x18 | 0x0A | 0x08 |
| 0x1739 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1740 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1741 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1742 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1749 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1750 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1751 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1752 | 4 | 1 | 0x04 | 0x17 | 0x11 | 0x08 |
| 0x1661 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1656 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0604 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0603 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0601 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1615 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1600 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0563 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x0D |
| 0x0562 | 4 | 1 | 0x17 | 0x10 | 0x04 | 0x0D |
| 0x1571 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1570 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1572 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1574 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1573 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1575 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1697 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x1696 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x0643 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0642 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0653 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0652 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x0687 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x0686 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x1613 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x10 |
| 0x1612 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1611 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1607 | 4 | 1 | 0x17 | 0x0D | 0x04 | 0x16 |
| 0x1616 | 4 | 1 | 0x17 | 0xOD | 0x04 | 0x16 |
| 0x2299 | 4 | 1 | 0x17 | 0x02 | 0x03 | 0x16 |
| 0xFFFF | 0 | 0 | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss mit V batt |
| 0x02 | Kurzschluss mit Masse |
| 0x03 | Kein Signal erkannt |
| 0x04 | Signal ausserhalb Bereich |
| 0x05 | Test abgeschlossen |
| 0x06 | Sporadischer Fehler |
| 0x07 | Fehler vorhanden |
| 0x08 | Warnleuchtenstatus |
| 0xFF | Unbekannter Status |

### ACTUATOR_TEST

| NAME | LID | ACTION |
| --- | --- | --- |
| MAIN_RELAY | 0x11 | Hauptrelais |
| FUEL_PUMP | 0x12 | Kraftstoffpumpe |
| AC_COMPRESSOR | 0x13 | Klimakompressor |
| FAN_RELAY_HIGH | 0x1B | Kühlerlüfterrelais (hoch) |
| FAN_RELAY_MED | 0x1A | Kühlerlüfterrelais (mittel) |
| FAN_RELAY_LOW | 0x19 | Kühlerlüfterrelais (niedrig) |
| CANISTER_PURGE | 0x20 | AKF-Regenerierung |
| THROTTLE_ACT | 0x23 | Drosselklappensteller |
| LEAK_DETECTION | 0x24 | Leckdiagnosepumpe |
| PRIME_FUEL | 0x34 | Anlasskraftstoffleitung |
| CVT_SHIFT_LOCK | 0x37 | Stufenloses Getriebe Wählhebelsperre |
| INJECTOR_1 | 0x39 | Einspritzventil 1 |
| INJECTOR_2 | 0x3A | Einspritzventil 2 |
| INJECTOR_3 | 0x3B | Einspritzventil 3 |
| INJECTOR_4 | 0x3C | Einspritzventil 4 |
| UPSTR_O2_HEAT | 0x3D | Heizung Lambasonde vor Kat |
| DWSTR_O2_HEAT | 0x3E | Heizung Lambasonde nach Kat |
| DISABLE_ACTS | 0x3F | Alle Stellantriebe deaktivieren |
|  | 0xFF |  |

### APPLIC_CORRECTION

| NAME | LID | ACTION |
| --- | --- | --- |
| IDLE_CO_TRIM | 0x90 | Leerlaufdrehzahl CO-Korrektur |
| IDLE_TEMP_CORR | 0x91 | Leerlaufdrehzahl Vorübergehende Korrektur |
| IDLE_DUR_CORR | 0x92 | Leerlaufdrehzahl Dauerhafte Korrektur |
|  | 0xFF |  |

### ADAPTIVE_VALUES

| NAME | LID | ACTION |
| --- | --- | --- |
| ALL_VALUES | 0x50 | Rücksetzen Alle Adaptivwerte |
| MAP | 0x51 | Rücksetzen Korrektur Saugrohrdruck |
| KNOCK_CONTROL | 0x52 | Rücksetzen Klopfregelung Adaptivwert |
| ECT_THROTTLE | 0x53 | Rücksetzen Anpassung E-Gas |
| CVT | 0x54 | Rücksetzen Stufenloses Getriebe |
| LAMBDA | 0x56 | Rücksetzen Lambda Adaptivwert |
| MISFIRING | 0x57 | Rücksetzen Fehlzündungen Adaptivwert |
| IDLE_SPEED | 0x58 | Rücksetzen Leerlaufdrehzahl Adaptivwert |
| DYNAMIC_TRIM | 0x59 | Rücksetzen Dynamische Korrektur |
| KNOCK_SPARK_ADV | 0x5A | Rücksetzen Klopffrühverstellung, Langsamkorrektur |
| CVT_DIST | 0x5B | Rücksetzen CVT Weg im Notprogramm zurueckgelegt |
|  | 0xFF |  |
