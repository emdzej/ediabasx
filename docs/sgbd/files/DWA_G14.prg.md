# DWA_G14.prg

## General

|  |  |
| --- | --- |
| File | DWA_G14.prg |
| Type | PRG |
| Jobs | 59 |
| Tables | 79 |
| Origin | BMW EI-701 Mayer |
| Revision | 1.001 |
| Author | BERTRANDT-INGENIEURBUERO-GMBH EE-254 Knorr |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DWA mit Sirene / Neigungsgeber Cabrio |  |  |
| ORIGIN | string | BMW EI-701 Mayer |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | BERTRANDT-INGENIEURBUERO-GMBH EE-254 Knorr |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.89 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Identdaten UDS  : $22   ReadDataByIdentifier UDS  : $F150 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC = '1', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

### FS_LESEN_DETAIL

Fehlerspeicher lesen (einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $04 reportDTCSnapshotRecordByDTCNumber UDS  : $06 reportDTCExtendedDataRecordByDTCNumber UDS  : $09 reportSeverityInformationOfDTC Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

### FS_LOESCHEN

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | 0x??????: Angabe eines einzelnen Fehlers Default: 0xFFFFFF: alle Fehler |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels UDS  : $22   ReadDataByIdentifier UDS  : $1000 TestStamp Modus: Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. UDS  : $2E   WriteDataByIdentifier UDS  : $1000 TestStamp Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### SVK_LESEN

Informationen zur Steuergeraete-Verbau-Kennung UDS  : $22   ReadDataByIdentifier UDS  : $F1xx Sub-Parameter fuer SVK UDS  : $F101 SVK_AKTUELL (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SVK | string | table SVK_ID BEZEICHNUNG WERT default SVK_AKTUELL |

### STATUS_LESEN

Lesen eines oder mehrerer Stati UDS  : $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige result erzeugt table SG_Funktionen ARG ID RESULTNAME RES_TABELLE ARG_TABELLE |

### STEUERN

Vorgeben eines Status UDS  : $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID LABEL ARG_TABELLE |
| WERT | string | Es muss mindestens ein Argument übergeben werden Argumente siehe table SG_Funktionen ARG ID ARG_TABELLE |

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### STEUERN_ROUTINE

Vorgeben eines Status UDS  : $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'STR'  = startRoutine 'STPR' = stopRoutine 'RRR'  = requestRoutineResults |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers UDS  : $85 ControlDTCSetting UDS  : $?? Sperren ($02) / Freigabe ($01) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT Default: "ja" |

### IS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $17 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $18 reportDTCSnapshotRecordByDTCNumber UDS  : $19 reportDTCExtendedDataRecordByDTCNumber UDS  : $-- reportSeverityInformationOfDTC (nicht möglich!) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode |

### IS_LOESCHEN

Infospeicher loeschen UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $0F06 ClearSecondaryDTCMemory Modus: Default

_No arguments._

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten UDS  : $3E TesterPresent UDS  : $?0 suppressPosRspMsgIndication Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### SLEEP_MODE

SG in Sleep-Mode versetzen UDS  : $11 ECUReset UDS  : $04 EnableRapidPowerShutDown Modus: Default

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes UDS   : $31   RoutineControlRequestServiceID UDS   : $01   startRoutine UDS   : $0F0C DataIdentifier ControlEnergySavingMode UDS   : $??   Mode Modus : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00: Normalmode 0x01: Fertigungsmode 0x02: Transportmode 0x03: Flashmode |

### STATUS_ENERGIESPARMODE

Energy-Saving-Mode auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100A DataIdentifier EnergySavingMode Modus: Default

_No arguments._

### STATUS_BETRIEBSMODE

Aktueller Betriebsmode SG muss sich im Energiersparmode befinden UDS  : $22   ReadDataByIdentifier UDS  : $100E Sub-Parameter Betriebsmode Modus: Default

_No arguments._

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### _STATUS_DWA_SLEEP

JobHeaderFormat 0x4651 DIAG_DID_4651_SLEEP

_No arguments._

### _STATUS_DWA_MUW_ERROR_MEMORY

JobHeaderFormat 0xDCC0 DIAG_DID_DCC0_DWA_MUW_DTCS

_No arguments._

### _STATUS_DWA_RESET_ANZAHL_LESEN

Abfrage Resets DWA JobHeaderFormat 0x4638 DIAG_DID_4638_READ_RESET_NUM_DWA

_No arguments._

### _STATUS_DWA_TESTRESULTS

JobHeaderFormat 0x463B DIAG_DID_DCC2_READ_TEST_RESULTS

_No arguments._

### _STATUS_DWA_SQUARES_SN

JobHeaderFormat 0x463D DIAG_DID_463D_READ_SQUARES_SN

_No arguments._

### _STATUS_DWA_ORDER_NUM

JobHeaderFormat 0x4641 DIAG_DID_4641_READ_ORDER_NUM

_No arguments._

### _STATUS_DWA_MUW_RESET_ANZAHL

JobHeaderFormat 0x464A DIAG_DID_464A_READ_DWA_MUW_RST_NUM

_No arguments._

### _STATUS_DWA_ICT_TEST_RESULTS

JobHeaderFormat 0x4651 DIAG_DID_4651_ICT_TEST_RESULTS

_No arguments._

### STATUS_DWA_DEAKTIVIERUNG_IRS_NG

JobHeaderFormat 0xDCB4 DWA_DEAKTIVIERUNG_IRS_NG

_No arguments._

### STATUS_DWA_ALARMSPEICHER

JobHeaderFormat 0xDCBE DWA_ALARMSPEICHER

_No arguments._

### STATUS_DWA_PANIKSPEICHER

JobHeaderFormat 0xDD15 DWA_PANIKSPEICHER

_No arguments._

### _STEUERN_DWA_RESET_ANZAHL_LOESCHEN

JobHeaderFormat 0x4639 DIAG_DID_4639_DWA_RESET_NUM_LOESCHEN

_No arguments._

### _STEUERN_DWA_TESTRESULTS

JobHeaderFormat 0x463C DIAG_DID_463C_WRITE_TEST_RESULTS - these results are written in production

| Name | Type | Description |
| --- | --- | --- |
| TR_BYTE_0 | int | test #0 |
| TR_BYTE_1 | int | test #1 |
| TR_BYTE_2 | int | test #2 |
| TR_BYTE_3 | int | test #3 |
| TR_BYTE_4 | int | test #4 |

### _STEUERN_DWA_DATEOFEM

JobHeaderFormat 0x4640 DIAG_DID_4640_WRITE_DATEOFEM, writes the date on 5 digits: yymdd

| Name | Type | Description |
| --- | --- | --- |
| DATE_BYTE_0 | int | year, e.g. '0x10' for 2010 |
| DATE_BYTE_1 | int | month (0x01=Jan,..., 0x12=Dec) |
| DATE_BYTE_2 | int | day, e.g. 0x28 means 28 |
| DATE_BYTE_3 | int | unused, for future expansions |
| DATE_BYTE_4 | int | unused, for future expansions |

### _STEUERN_DWA_ORDER_NUM

JobHeaderFormat 0x4642 DIAG_DID_4642_WRITE_ORDER_NUM Change the SERIAL NUMBER of the square the PCB is installed in. It is saved in NVRAM

| Name | Type | Description |
| --- | --- | --- |
| ON_BYTE0 | int | byte0 |
| ON_BYTE1 | int | byte1 |
| ON_BYTE2 | int | byte2 |

### _STEUERN_DWA_SERIENNUMMER

JobHeaderFormat 0x4645 DIAG_DID_4645_WRITE_SERIAL_NUMBER Change the SERIAL NUMBER of the CANSINE in NVRAM. The serial number shall then be read with job 'seriennummer_lesen' The S.N. is composed of 10 bytes: - the last two digits of year (2 bytes) - e.g. 0x01 0x02 for the year 2012 - two digits for month id (2 bytes) - e.g. 0x00 0x01 for Jan 0x01 0x02 for Dec - two digits for the day (2 bytes) - e.g. 0x03 0x00 for the day 30 - the progressive decimal number (4 bytes) ---> step of 1000, from '0' to '9' ---> step of 0100, from '0' to '9' ---> step of 0010, from '0' to '9' ---> step of 0001, from '0' to '9' Enter each byte separated by semicolon with hex notation (0xNN) example: 0x00 0x08 0x01 0x01 0x02 0x07 0x00 0x00 0x00 0x01 (in the example, semicolons are not shown because of conflicts with the SGBD sintax)

| Name | Type | Description |
| --- | --- | --- |
| SN_BYTE0 | unsigned char | byte0 |
| SN_BYTE1 | unsigned char | byte1 |
| SN_BYTE2 | unsigned char | byte2 |
| SN_BYTE3 | unsigned char | byte3 |
| SN_BYTE4 | unsigned char | byte4 |
| SN_BYTE5 | unsigned char | byte5 |
| SN_BYTE6 | unsigned char | byte6 |
| SN_BYTE7 | unsigned char | byte7 |
| SN_BYTE8 | unsigned char | byte8 |
| SN_BYTE9 | unsigned char | byte9 |

### _STEUERN_DWA_CKM_RESET

JobHeaderFormat 0x4646 DIAG_DID_4646_RESET_CKM

_No arguments._

### _STEUERN_DWA_MUW_ERROR_MEMORY_RESET

JobHeaderFormat 0x4649 DIAG_DID_4649_RESET_DWA_MUW_DTCS

_No arguments._

### _STEUERN_DWA_MUW_RESET_ANZAHL_LOESCHEN

JobHeaderFormat 0x464B DIAG_DID_464B_RESET_DWA_MUW_RST_NUM

_No arguments._

### _STEUERN_DWA_SVK_HISTORY

JobHeaderFormat 0x464D DIAG_DID_464D_WRITE_DWA_SVK_HISTORY

| Name | Type | Description |
| --- | --- | --- |
| ARG_BYTE_00 | unsigned char |  |
| ARG_BYTE_01 | unsigned char |  |
| ARG_BYTE_02 | unsigned char |  |
| ARG_BYTE_03 | unsigned char |  |
| ARG_BYTE_04 | unsigned char |  |

### _STEUERN_DWA_SOUNDS

JobHeaderFormat 0x464E DIAG_DID_464E_SET_DWA_SOUNDS, activates/deactivates USA/ECE & buzzers

| Name | Type | Description |
| --- | --- | --- |
| SOUND_TYPE | unsigned char | '0' no change, '1' ECE sound, '2' USA sound, '3' default |
| ACTIVATE_BUZZER | unsigned char | '0': no change, '1': deactivates, '2': activates, '3': default |

### _STEUERN_DWA_SECONDARY_ST_INHIBIT

JobHeaderFormat 0x464F DIAG_DID_464F_SET_SECONDARY_ST_INHIBIT, activates/deactivates piezo secondary ST

| Name | Type | Description |
| --- | --- | --- |
| PIEZO_SEC_ST_INH | unsigned char | '0' ST active, '1' ST inactive |

### _STEUERN_DWA_EXT_BAT

JobHeaderFormat 0x4650 DIAG_DID_4650_SET_EXT_BAT, activates/deactivates the Vbat input

| Name | Type | Description |
| --- | --- | --- |
| EXT_BAT_ON | unsigned char | '0' switch off the external battery, '1' switch on external battery |

### _STEUERN_DWA_TRIGGER_DTC_STORE

JobHeaderFormat 0x4652 DIAG_DID_4652_TRIGGER_DTC_STORE, triggers the storing of DTC's in nvram

_No arguments._

### STEUERN_DWA_ALARMSPEICHER_LOESCHEN

JobHeaderFormat 0xAA7D DWA_ALARMSPEICHER_LOESCHEN

_No arguments._

### STEUERN_DWA_DEAKTIVIERUNG_IRS_NG_LOESCHEN

JobHeaderFormat 0xAA81 DWA_IRS_NG_DEAKTIVIERUNGSSPEICHER_LOESCHEN

_No arguments._

### STEUERN_DWA_PANIKSPEICHER_LOESCHEN

JobHeaderFormat 0xAA82 DWA_PANIKSPEICHER_LOESCHEN

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED |
| 0x13 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH_OR_INVALID_FORMAT |
| 0x14 | ERROR_ECU_RESPONSE_TOO_LONG |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT |
| 0x24 | ERROR_ECU_REQUEST_SEQUENCE_ERROR |
| 0x25 | ERROR_ECU_NO_RESPONSE_FROM_SUBNET_COMPONENT |
| 0x26 | ERROR_ECU_FAILURE_PREVENTS_EXECUTION_OF_REQUESTED_ACTION |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x70 | ERROR_ECU_UPLOAD_DOWNLOAD_NOT_ACCEPTED |
| 0x71 | ERROR_ECU_TRANSFER_DATA_SUSPENDED |
| 0x72 | ERROR_ECU_GENERAL_PROGRAMMING_FAILURE |
| 0x73 | ERROR_ECU_WRONG_BLOCK_SEQUENCE_COUNTER |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x7E | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x7F | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x81 | ERROR_ECU_RPM_TOO_HIGH |
| 0x82 | ERROR_ECU_RPM_TOO_LOW |
| 0x83 | ERROR_ECU_ENGINE_IS_RUNNING |
| 0x84 | ERROR_ECU_ENGINE_IS_NOT_RUNNING |
| 0x85 | ERROR_ECU_ENGINE_RUN_TIME_TOO_LOW |
| 0x86 | ERROR_ECU_TEMPERATURE_TOO_HIGH |
| 0x87 | ERROR_ECU_TEMPERATURE_TOO_LOW |
| 0x88 | ERROR_ECU_VEHICLE_SPEED_TOO_HIGH |
| 0x89 | ERROR_ECU_VEHICLE_SPEED_TOO_LOW |
| 0x8A | ERROR_ECU_THROTTLE_PEDAL_TOO_HIGH |
| 0x8B | ERROR_ECU_THROTTLE_PEDAL_TOO_LOW |
| 0x8C | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_NEUTRAL |
| 0x8D | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_GEAR |
| 0x8F | ERROR_ECU_BRAKE_SWITCH_NOT_CLOSED |
| 0x90 | ERROR_ECU_SHIFTER_LEVER_NOT_IN_PARK |
| 0x91 | ERROR_ECU_TORQUE_CONVERTER_CLUTCH_LOCKED |
| 0x92 | ERROR_ECU_VOLTAGE_TOO_HIGH |
| 0x93 | ERROR_ECU_VOLTAGE_TOO_LOW |
| ?00? | OKAY |
| ?01? | ERROR_ECU_NO_RESPONSE |
| ?02? | ERROR_ECU_INCORRECT_LEN |
| ?03? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?04? | ERROR_ECU_TA_RESPONSE_NOT_SA_REQUEST |
| ?05? | ERROR_ECU_SA_RESPONSE_NOT_TA_REQUEST |
| ?06? | ERROR_ECU_RESPONSE_INCORRECT_DATA_IDENTIFIER |
| ?07? | ERROR_ECU_RESPONSE_TOO_MUCH_DATA |
| ?08? | ERROR_ECU_RESPONSE_TOO_LESS_DATA |
| ?09? | ERROR_ECU_RESPONSE_VALUE_OUT_OF_RANGE |
| ?0A? | ERROR_TABLE |
| ?10? | ERROR_F_CODE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?14? | ERROR_ECU_RESPONSE_INCORRECT_IO_CONTROL_PARAMETER |
| ?15? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_TYPE |
| ?16? | ERROR_ECU_RESPONSE_INCORRECT_SUB_FUNCTION |
| ?17? | ERROR_ECU_RESPONSE_INCORRECT_DYNAMICALLY_DEFINED_DATA_IDENTIFIER |
| ?18? | ERROR_ECU_RESPONSE_NO_STRING_END_CHAR |
| ?19? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_IDENTIFIER |
| ?1A? | ERROR_ECU_RESPONSE_INCORRECT_RESET_TYPE |
| ?1B? | ERROR_ECU_RESPONSE_INCORRECT_SERIAL_NUMBER_FORMAT |
| ?1C? | ERROR_ECU_RESPONSE_INCORRECT_DTC_BY_STATUS_MASK |
| ?1D? | ERROR_ECU_RESPONSE_INCORRECT_DTC_STATUS_AVAILABILITY_MASK |
| ?1E? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_IDENTIFIER |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_VERIFY |
| ?61? | ERROR_ECU_RESPONSE_ZGW |
| ?62? | ERROR_ECU_RESPONSE_BACKUP |
| ?70? | ERROR_CALID_CVN_INCORRECT_LEN |
| ?80? | ERROR_SVK_INCORRECT_LEN |
| ?81? | ERROR_SVK_INCORRECT_FINGERPRINT |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x000001 | Reinshagen / Delphi |
| 0x000002 | Leopold Kostal GmbH & Co. KG |
| 0x000003 | Hella Fahrzeugkomponenten GmbH |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako GmbH |
| 0x000008 | Robert Bosch GmbH |
| 0x000009 | Lear Corporation |
| 0x000010 | VDO |
| 0x000011 | Valeo GmbH |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine Electronics GmbH |
| 0x000018 | Continental Teves AG & Co. OHG |
| 0x000019 | Elektromatik Südafrika |
| 0x000020 | Harman Becker Automotive Systems |
| 0x000021 | Preh GmbH |
| 0x000022 | Alps Electric Co. Ltd. |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto SE |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi Automotive PLC |
| 0x000028 | DODUCO (Beru) |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer Corporation |
| 0x000033 | Jatco |
| 0x000034 | FUBA Automotive GmbH & Co. KG |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE (Fahrzeugtechnik Ebern) |
| 0x000041 | Megamos |
| 0x000042 | TRW Automotive GmbH |
| 0x000043 | WABCO Fahrzeugsysteme GmbH |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC Hella Electronics Corporation |
| 0x000046 | Gemel |
| 0x000047 | ZF Friedrichshafen AG |
| 0x000048 | GMPT |
| 0x000049 | Harman Becker Automotive Systems GmbH |
| 0x000050 | Remes GmbH |
| 0x000051 | ZF Lenksysteme GmbH |
| 0x000052 | Magneti Marelli S.p.A. |
| 0x000053 | Johnson Controls Inc. |
| 0x000054 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x000055 | Behr-Hella Thermocontrol GmbH |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon Innovation & Technology GmbH |
| 0x000058 | Autoliv AB |
| 0x000059 | Haberl Electronic GmbH & Co. KG |
| 0x000060 | Magna International Inc. |
| 0x000061 | Marquardt GmbH |
| 0x000062 | AB Elektronik GmbH |
| 0x000063 | SDVO/BORG |
| 0x000064 | Hirschmann Car Communication GmbH |
| 0x000065 | hoerbiger-electronics |
| 0x000066 | Thyssen Krupp Automotive |
| 0x000067 | Gentex Corporation |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steeting Europe |
| 0x000071 | NSI Beheer B.V. |
| 0x000072 | Aisin AW Co. Ltd. |
| 0x000073 | Schorlock |
| 0x000074 | Schrader Electronics Ltd. |
| 0x000075 | Huf-Electronics Bretten GmbH |
| 0x000076 | CEL |
| 0x000077 | AUDIO MOBIL Elektronik GmbH |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia-Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A. |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | Sonceboz S.A. |
| 0x000086 | Meta System S.p.A. |
| 0x000087 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x000088 | MANN+HUMMEL GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co. |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.a |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp |
| 0x000094 | Küster Automotive GmbH |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental AG |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls Inc. |
| 0x00009A | Takata-Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN Plc |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | peiker acustic GmbH & Co. KG |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Automotive Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0x0000A5 | Novero Dabendorf GmbH |
| 0x0000A6 | LAMES S.p.a. |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Harbin Wan Yu Technology Co |
| 0x0000A9 | ThyssenKrupp Presta AG |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors Stuttgart GmbH |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA S.p.A. |
| 0x0000AF | Alfmeier Präzision AG |
| 0x0000B0 | Eltek Deutechland GmbH |
| 0x0000B1 | OMRON Automotive Electronics Europe GmbH |
| 0x0000B2 | ASK Industries GmbH |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive |
| 0x0000B6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | Kyocera Display Europe GmbH |
| 0x0000B9 | Magna Powertrain AG & Co. KG |
| 0x0000BA | BorgWarner Beru Systems GmbH |
| 0x0000BB | BMW AG |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin Deutschland Zugangssysteme GmbH |
| 0x0000BE | Schaeffler Technologies AG & Co. KG |
| 0x0000BF | JTEKT Corporation |
| 0x0000C0 | VLF |
| 0x0000C1 | Flextronics |
| 0x0000C2 | LG Chem |
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler momentan vorhanden und bereits gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler momentan vorhanden und bereits gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler momentan vorhanden und bereits gespeichert |
| 0x20 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x21 | Fehler momentan vorhanden und bereits gespeichert |
| 0x24 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x25 | Fehler momentan vorhanden und bereits gespeichert |
| 0x28 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x29 | Fehler momentan vorhanden und bereits gespeichert |
| 0x2C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x2D | Fehler momentan vorhanden und bereits gespeichert |
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
| 0x60 | Fehler gespeichert |
| 0x61 | Fehler gespeichert |
| 0x64 | Fehler gespeichert |
| 0x65 | Fehler gespeichert |
| 0x68 | Fehler gespeichert |
| 0x69 | Fehler gespeichert |
| 0x6C | Fehler gespeichert |
| 0x6D | Fehler gespeichert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x80 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x81 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| an | 1 |
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

### PROZESSKLASSEN

| WERT | PROZESSKLASSE | BEZEICHNUNG |
| --- | --- | --- |
| 0x00 | - | ungueltig |
| 0x01 | HWEL | Hardware (Elektronik) |
| 0x02 | HWAP | Hardwareauspraegung |
| 0x03 | HWFR | Hardwarefarbe |
| 0x05 | CAFD | Codierdaten |
| 0x06 | BTLD | Bootloader |
| 0x08 | SWFL | Software ECU Speicherimage |
| 0x09 | SWFF | Flash File Software |
| 0x0A | SWPF | Pruefsoftware |
| 0x0B | ONPS | Onboard Programmiersystem |
| 0x0F | FAFP | FA2FP |
| 0x1A | TLRT | Temporaere Loeschroutine |
| 0x1B | TPRG | Temporaere Programmierroutine |
| 0x07 | FLSL | Flashloader Slave |
| 0x0C | IBAD | Interaktive Betriebsanleitung Daten |
| 0x10 | FCFA | Freischaltcode Fahrzeug-Auftrag |
| 0x1C | BLUP | Bootloader-Update Applikation |
| 0x1D | FLUP | Flashloader-Update Applikation |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0x04 | GWTB | Gateway-Tabelle |
| 0x0D | SWFK | BEGU: Detaillierung auf SWE-Ebene |
| 0xFF | - | ungueltig |

### SVK_ID

| WERT | BEZEICHNUNG |
| --- | --- |
| 0x01 | SVK_AKTUELL |
| 0x02 | SVK_SUPPLIER |
| 0x03 | SVK_WERK |
| 0x04 | SVK_BACKUP_01 |
| 0x05 | SVK_BACKUP_02 |
| 0x06 | SVK_BACKUP_03 |
| 0x07 | SVK_BACKUP_04 |
| 0x08 | SVK_BACKUP_05 |
| 0x09 | SVK_BACKUP_06 |
| 0x0A | SVK_BACKUP_07 |
| 0x0B | SVK_BACKUP_08 |
| 0x0C | SVK_BACKUP_09 |
| 0x0D | SVK_BACKUP_10 |
| 0x0E | SVK_BACKUP_11 |
| 0x0F | SVK_BACKUP_12 |
| 0x10 | SVK_BACKUP_13 |
| 0x11 | SVK_BACKUP_14 |
| 0x12 | SVK_BACKUP_15 |
| 0x13 | SVK_BACKUP_16 |
| 0x14 | SVK_BACKUP_17 |
| 0x15 | SVK_BACKUP_18 |
| 0x16 | SVK_BACKUP_19 |
| 0x17 | SVK_BACKUP_20 |
| 0x18 | SVK_BACKUP_21 |
| 0x19 | SVK_BACKUP_22 |
| 0x1A | SVK_BACKUP_23 |
| 0x1B | SVK_BACKUP_24 |
| 0x1C | SVK_BACKUP_25 |
| 0x1D | SVK_BACKUP_26 |
| 0x1E | SVK_BACKUP_27 |
| 0x1F | SVK_BACKUP_28 |
| 0x20 | SVK_BACKUP_29 |
| 0x21 | SVK_BACKUP_30 |
| 0x22 | SVK_BACKUP_31 |
| 0x23 | SVK_BACKUP_32 |
| 0x24 | SVK_BACKUP_33 |
| 0x25 | SVK_BACKUP_34 |
| 0x26 | SVK_BACKUP_35 |
| 0x27 | SVK_BACKUP_36 |
| 0x28 | SVK_BACKUP_37 |
| 0x29 | SVK_BACKUP_38 |
| 0x2A | SVK_BACKUP_39 |
| 0x2B | SVK_BACKUP_40 |
| 0x2C | SVK_BACKUP_41 |
| 0x2D | SVK_BACKUP_42 |
| 0x2E | SVK_BACKUP_43 |
| 0x2F | SVK_BACKUP_44 |
| 0x30 | SVK_BACKUP_45 |
| 0x31 | SVK_BACKUP_46 |
| 0x32 | SVK_BACKUP_47 |
| 0x33 | SVK_BACKUP_48 |
| 0x34 | SVK_BACKUP_49 |
| 0x35 | SVK_BACKUP_50 |
| 0x36 | SVK_BACKUP_51 |
| 0x37 | SVK_BACKUP_52 |
| 0x38 | SVK_BACKUP_53 |
| 0x39 | SVK_BACKUP_54 |
| 0x3A | SVK_BACKUP_55 |
| 0x3B | SVK_BACKUP_56 |
| 0x3C | SVK_BACKUP_57 |
| 0x3D | SVK_BACKUP_58 |
| 0x3E | SVK_BACKUP_59 |
| 0x3F | SVK_BACKUP_60 |
| 0x40 | SVK_BACKUP_61 |
| 0xXY | ERROR_UNKNOWN |

### DTCEXTENDEDDATARECORDNUMBER

| WERT | TEXT | ANZ_BYTE |
| --- | --- | --- |
| 0x00 | ISO_RESERVED | 0 |
| 0x01 | CONDITION_BYTE | 1 |
| 0x02 | HFK | 1 |
| 0x03 | HLZ | 1 |
| 0xFF | RECORD_UNKNOWN | 0 |

### DTCSNAPSHOTIDENTIFIER

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM_STAND | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1701 | ABS_ZEIT | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1702 | SAE_CODE | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1731 | Fehlerklasse_DTC | - | - | u char | - | 1 | 1 | 0.000000 |
| 0x1750 | PWF_Basinetz | 0-n | - | 0xFF | - | 1 | 1 | 0.000000 |
| 0x1751 | PWF_Teilnetz | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### FEHLERKLASSE

| NR | TEXT |
| --- | --- |
| 0x00 | Keine Fehlerklasse verfuegbar |
| 0x01 | Ueberpruefung bei naechstem Werkstattbesuch |
| 0x02 | Ueberpruefung bei naechstem Halt |
| 0x04 | Ueberpruefung sofort erforderlich ! |
| 0xFF | unbekannte Fehlerklasse |

### DIAGMODE

| NR | MODE | MODE_TEXT |
| --- | --- | --- |
| 0x00 | UNGUELTIG | DefaultMode |
| 0x01 | DEFAULT | DefaultMode |
| 0x02 | ECUPM | ECUProgrammingMode |
| 0x03 | ECUEXTDIAG | ECUExtendedDiagnosticSession |
| 0x04 | ECUSSDS | ECUSafetySystemDiagnosticSession |
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x43 | ECUHDD | ECUHDDDownloadSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0xXY | -- | unbekannter Diagnose-Mode |

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x570C | Satellit Upfront mitte | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor vorne links | 0 |
| 0x5770 | Fussgängerschutz Sensor vorne rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor vorne mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x57C0 | Satellit Drucksensor Schlauch PTS 1 vorne links p | 0 |
| 0x57C4 | Satellit Drucksensor Schlauch PTS 1 vorne rechts p | 0 |
| 0x57C8 | Satellit Drucksensor Schlauch PTS 2 vorne links p | 0 |
| 0x57CC | Satellit Drucksensor Schlauch PTS 2 vorne rechts p | 0 |
| 0x57D0 | Beschleunigungssensor vorne links X | 0 |
| 0x57D4 | Beschleunigungssensor vorne mitte X | 0 |
| 0x57D8 | Beschleunigungssensor vorne rechts X | 0 |
| 0x57DC | Beschleunigungssensor hinten mitte X | 0 |
| 0x57E0 | Sitzbelegungserkennung Beifahrer CIS/Bladder | 1 |
| 0x57E4 | Sitzbelegungserkennung 2. Sitzreihe links CIS/Bladder | 1 |
| 0x57E8 | Sitzbelegungserkennung 2. Sitzreihe rechts CIS/Bladder | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7620 | Sternenhimmel Steuergerät | 1 |
| 0x7640 | Partition Wall Steuergerät | 1 |
| 0x7680 | Durchreiche Partition Wall | 1 |
| 0x76A0 | Bedienelement Dach | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars |
| 0x0008 | Ford Motor Company |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH (formerly Mitsubishi) |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd (formerly Hitachi) |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Group Trucks |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC (formerly Arvinmeritor 2011-03-29) |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007B | Bury GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0091 | Mahle |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x0099 | Thomson Linear Motion |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x009C | Methode Electronics, Inc |
| 0x009D | Danlaw, Inc. |
| 0x009E | Federal-Mogul Corporation |
| 0x009F | Fujikoki Corporation |
| 0x00A0 | MENTOR Gmbh & Co. Praezisions-Bauteile KG |
| 0x00A1 | Toyota Industries Corporation |
| 0x00A2 | Strattec Security Corp. |
| 0x00A3 | TE Connectivity |
| 0x00A4 | Westfalia Automotive GmbH |
| 0x00A5 | Woco Industrietechnik GmbH |
| 0x00A6 | Minebea Co., Ltd |
| 0x00A7 | Magna |
| 0x00A8 | Dong IL Technology |
| 0x00A9 | Wilo SE |
| 0x00AA | Remy International, Inc. |
| 0x00AB | ACCUmotive |
| 0x00AC | Carling Technologies |
| 0x00B0 | Hanon Systems Korea |
| 0x00B1 | Eberspächer Controls Esslingen GmbH & Co. KG |
| 0x00B2 | WABCO Development GmbH |
| 0x00B3 | Sensirion AG |
| 0x00B4 | OSHINO Electronics Estonia OÜ |
| 0x00B5 | Fishman Thermo Technologies  LTD |
| 0x00B6 | Novalog Ltd |
| 0x00B7 | Hanon Systems USA |
| 0x00B8 | Leggett & Platt Automotive Group |
| 0x00B9 | Tremec |
| 0x00BA | Check Corporation |
| 0x00BB | Federal-Mogul Corporation |
| 0x00BC | fischer automotive systems |
| 0x00BD | Hi-Lex Europe GmbH |
| 0x00BE | SGX Sensortech |
| 0x00BF | AGM Automotive |
| 0x00C0 | Melecs |
| 0x00C1 | Robertshaw Controls Company |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0101 | Huber Automotive AG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
| 0x0135 | LG Electronics |
| 0x0136 | Eberspächer Controls GmbH & Co. KG |
| 0x0137 | AISIN Seiki Co., Ltd. |
| 0x0138 | Elektrosil Systeme der Elektronik GmbH |
| 0x0139 | Nidec Corporation |
| 0x013A | ISSI – Integrated Silicon Solution Inc |
| 0x013B | Twin Disc, Incorporated |
| 0x013C | SPAL Automotive Srl |
| 0x013D | OTTO Engineering, Inc. |
| 0xFFFF | unbekannter Hersteller |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler momentan vorhanden und bereits gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler momentan vorhanden und bereits gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler momentan vorhanden und bereits gespeichert |
| 0x20 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x21 | Fehler momentan vorhanden und bereits gespeichert |
| 0x24 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x25 | Fehler momentan vorhanden und bereits gespeichert |
| 0x28 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x29 | Fehler momentan vorhanden und bereits gespeichert |
| 0x2C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x2D | Fehler momentan vorhanden und bereits gespeichert |
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
| 0x60 | Fehler gespeichert |
| 0x61 | Fehler gespeichert |
| 0x64 | Fehler gespeichert |
| 0x65 | Fehler gespeichert |
| 0x68 | Fehler gespeichert |
| 0x69 | Fehler gespeichert |
| 0x6C | Fehler gespeichert |
| 0x6D | Fehler gespeichert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x80 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x81 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0XAA76_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | - | signed char | - | TAB_DWA_SELBSTTEST | 1.0 | 1.0 | 0.0 | - | - | optionales Argument; 0: Abbruch; 1: Selbsttest komplettes DWA-System; 2: Selbsttest Innenraumschutz; 3 Selbsttest Neigungsgeber; DEFAULT: 1 |

### ARG_0XAA79_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 oder kein Argument: DWA entschärfen; 1: DWA schärfen |

### ARG_0XDCA8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed int | - | TAB_DWA_LED_ARG | - | - | - | - | - | Ansteuerung der DWA-LED 0: Aus  1: Dauer-Ein  2: Blinken  3: Blitzen |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in ms |

### ARG_0XDCB5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed int | - | TAB_DWA_SCHNELLTEST | 1.0 | 1.0 | 0.0 | - | - | 0: Vorgang abbrechen; 1: Schnelltest leise 2: Schnelltest normal |

### ARG_0XDCBA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = kein Reset ausführen 0x01 = Reset ausführen |

### ARG_0XDCBB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = kein Reset ausführen 0x01 = Reset ausführen |

### ARG_0XDD16_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OBD_UEBERWACHUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = OBD-Überwachung nicht aktiv 1 = OBD-Überwachung aktiv |

### ARG_0XDD4B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = kein Reset ausführen 0x01 = Reset ausführen |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_STANDHEIZUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STANDHEIZUNG | 0-n | high | unsigned char | 0x03 | TAB_STAT_STANDHEIZUNG | - | - | - | Standheizung |

### BF_STANDLUEFTEN_GEBLAESE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STANDLUEFTEN | 0-n | high | unsigned char | 0x0C | TAB_STAT_STANDLUEFTEN | - | - | - | Standlüften |
| GEBLAESE | 0-n | high | unsigned char | 0xC0 | TAB_STAT_GEBLAESE | - | - | - | Gebläse |

### BF_STAT_DOOR_CONTACTS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOOR_CONTACT_FAT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status Türkontakt, Tür Fahrerseite vorne |
| DOOR_CONTACT_BFT | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Status Türkontakt, Tür Beifahrerseite vorne  |
| DOOR_CONTACT_FATH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Status Türkontakt, Tür Fahrerseite hinten  |
| DOOR_CONTACT_BFTH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Status Türkontakt, Tür Beifahrerseite hinten |
| TRUNK_CONTACT | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Kofferraumkontakt |
| BONNET_CONTACT | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Motorhaubenkontakt |
| REAR_WINDOW_CONTACT | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Heckscheibenkontakt |

### BF_WINDOW_MOVING_ACTS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINDOW_FAT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Fenster FAT |
| WINDOW_BFT | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Fenster BFT |
| WINDOW_FATH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Fenster FATH |
| WINDOW_BFTH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Fenster_BFTH |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x025000 | Energiesparmode aktiv | 0 | - |
| 0x025008 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x025009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02500A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02500B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02500C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF50 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x804C00 | DWA, Piezo-Schallgeber: interne Leitungsunterbrechung | 0 | - |
| 0x804C01 | DWA, Piezo-Schallgeber: interner Kurzschluss | 0 | - |
| 0x804C03 | DWA, Spiegel-LED: defekt oder Leitungsunterbrechung | 0 | - |
| 0x804C04 | DWA, Spiegel-LED: Kurzschluss nach Masse | 0 | - |
| 0x804C05 | DWA-Alarm, Details im Alarmspeicher | 1 | - |
| 0x804C06 | DWA, MUW_Sensor VR: keine Kommunikation | 0 | - |
| 0x804C07 | DWA, MUW_Sensor HR: keine Kommunikation | 0 | - |
| 0x804C08 | DWA, MUW_Sensor HL: keine Kommunikation | 0 | - |
| 0x804C09 | DWA, MUW_Sensor VL: keine Kommunikation | 0 | - |
| 0x804C0A | DWA, MUW_Sensor HI: keine Kommunikation | 0 | - |
| 0x804C0B | DWA, MUW_Sensor VR: Fehlermeldung | 0 | - |
| 0x804C0C | DWA, MUW_Sensor HR: Fehlermeldung | 0 | - |
| 0x804C0D | DWA, MUW_Sensor HL: Fehlermeldung | 0 | - |
| 0x804C0E | DWA, MUW_Sensor VL: Fehlermeldung | 0 | - |
| 0x804C0F | DWA, MUW_Sensor HI: Fehlermeldung | 0 | - |
| 0x804C10 | DWA, MUW_Sensor LIN-Bus: LIN-Bus gestört | 0 | - |
| 0x804C16 | DWA, Interne Versorgung: Unterspannung | 0 | - |
| 0x804C17 | DWA, Interne Versorgung: Überspannung | 0 | - |
| 0x804C19 | DWA, Neigungs-Sensor: interner Fehler beim Selbst-Test | 0 | - |
| 0x804C1C | DWA-Panik-Alarm, Details im Panikspeicher | 1 | - |
| 0x804C53 | Unterspannung erkannt | 1 | - |
| 0x804C54 | Überspannung erkannt | 1 | - |
| 0xDD0468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xDD0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xDD1403 | Botschaft (0x12F, Klemmen): Ausfall, Signal ungültig | 1 | - |
| 0xDD1404 | Botschaft (0x2FC, ZV und Klappenzustand): Ausfall, Signal ungültig | 1 | - |
| 0xDD1405 | Botschaft (0x3D6, Konfiguration DWA CKM): Signal ungültig | 1 | - |
| 0xDD1406 | Botschaft (0x256, Challenge Passive Access): Ausfall, Signal ungültig | 1 | - |
| 0xDD1407 | Botschaft (0x2A0, Steuerung Zentralverriegelung): Ausfall, Signal ungültig | 1 | - |
| 0xDD1408 | Botschaft (0xEC, Status Zentralverriegelung Tür Schloss): Ausfall, Signal ungültig | 1 | - |
| 0xDD1409 | Botschaft (0x23A, Status Funkschlüssel): Signal ungültig | 1 | - |
| 0xDD140A | Botschaft (0x2F8, Uhrzeit Datum): Ausfall, Signal ungültig | 1 | - |
| 0xDD140B | Botschaft (0x26E, Steuerung FH SHD Zentrale (Komfort)): Ausfall, Signal ungültig | 1 | - |
| 0xDD140C | Botschaft (0x3C, Zustand Fahrzeug): Ausfall, Signal ungültig | 1 | - |
| 0xDD140D | Botschaft (0xF0, Status Zentralverriegelung): Ausfall, Signal ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x804C52 | DWA: Deaktivierung des Innenraumschutzes und Neigungsgeber | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ISOSAEReserved_00 |
| 0x01 | defaultSession |
| 0x02 | programmingSession |
| 0x03 | extendedDiagnosticSession |
| 0x04 | safetySystemDiagnosticSession |
| 0x40 | vehicleManufacturerSpecific_40 |
| 0x41 | codingSession |
| 0x42 | SWTSession |
| 0x43 | HDDUpdateSession |
| 0xff | ungültig |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0XAA76_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SELBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_DWA_SELBSTTEST_ERG | 1.0 | 1.0 | 0.0 | 0: Selbsttest NIO  1: Selbsstest IO 2: Selbsttest läuft |

### RES_0XAA7E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_SELBSTTEST | - | - | + | 0-n | - | signed char | - | TAB_MUW_SELBSTTEST | 1.0 | 1.0 | 0.0 | Status der Ausführung |
| STAT_MUW_VL_SEBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Ergebnis Selbsttest MUW vorne links |
| STAT_MUW_VR_SEBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Ergebnis Selbsttest MUW vorne rechts |
| STAT_MUW_HL_SEBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Ergebnis Selbsttest MUW hinten links |
| STAT_MUW_HR_SEBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Ergebnis Selbsttest MUW hinten rechts |
| STAT_MUW_HI_SEBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Ergebnis Selbsttest MUW hinten zentral |

### RES_0XAA7F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_VL_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_FUNKTIONSTEST | 1.0 | 1.0 | 0.0 | Status MUW vorne links  0: MUW würde nicht auslösen  1: MUW würde auslösen 2: MUW fehlerhaft |
| STAT_MUW_VR_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_FUNKTIONSTEST | 1.0 | 1.0 | 0.0 | Status MUW vorne rechts  0: MUW würde nicht auslösen  1: MUW würde auslösen 2: MUW fehlerhaft |
| STAT_MUW_HL_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_FUNKTIONSTEST | 1.0 | 1.0 | 0.0 | Status MUW hinten links  0: MUW würde nicht auslösen  1: MUW würde auslösen 2: MUW fehlerhaft |
| STAT_MUW_HR_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_FUNKTIONSTEST | 1.0 | 1.0 | 0.0 | Status MUW hinten rechts  0: MUW würde nicht auslösen  1: MUW würde auslösen 2: MUW fehlerhaft |
| STAT_MUW_HI_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_FUNKTIONSTEST | 1.0 | 1.0 | 0.0 | Status MUW hinten zentral  0: MUW würde nicht auslösen  1: MUW würde auslösen 2: MUW fehlerhaft |
| STAT_MUW_FUNKTIONSTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_MUW_FUNKTIONSTEST_2 | 1.0 | 1.0 | 0.0 | Aktueller Status des Jobs |

### RES_0XDCA2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEITUNG_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status der Leitungsüberwachung |
| STAT_UNTERSPANNUNG_EXT_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Unterspannungsüberwachung der externen Batterie |
| STAT_EEPROM_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Überwachnung EEPROM |
| STAT_AKTIVER_SCHUTZ_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Aktiver Schutz |
| STAT_WAKE_UP_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Überwachung der WakeUp-Zeit |
| STAT_SIRENE_AKUSTIK_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Sirenenschaltkreis (Akustik) |
| STAT_TILT_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Neigungsgeber |

### RES_0XDCA8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_LED_NR | 0-n | - | signed char | - | TAB_DWA_LED | 1.0 | 1.0 | 0.0 | 0: Aus 1: Dauer-Ein 2: Blinken 3: Blitzen |

### RES_0XDCA9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEIGUNG_X_ACHSE_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Neigungswinkel X-Achse in Grad |
| STAT_NEIGUNG_Y_ACHSE_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Neigungswinkel Y-Achse in Grad |
| STAT_NEIGUNG_Z_ACHSE_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Neigungswinkel Z-Achse in Grad |

### RES_0XDCB0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_ALARM_MOTORHAUBE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Motorhaube; 1= DWA-Alarm ausgelöst durch Motorhaube |
| STAT_DWA_ALARM_FAT_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Fahrertür; 1= DWA-Alarm ausgelöst durch Fahrertür |
| STAT_DWA_ALARM_BFT_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür; 1= DWA-Alarm ausgelöst durch Beifahrertür |
| STAT_DWA_ALARM_FATH_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Fahrertür hinten; 1= DWA-Alarm ausgelöst durch Fahrertür hinten |
| STAT_DWA_ALARM_BFTH_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür hinten ; 1= DWA-Alarm ausgelöst durch Beifahrertür hinten |
| STAT_DWA_ALARM_HECKKLAPPE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Heckklappe; 1= DWA-Alarm ausgelöst durch Heckklappe |
| STAT_DWA_ALARM_HECKSCHEIBE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Heckscheibe; 1= DWA-Alarm ausgelöst durch Heckscheibe |
| STAT_DWA_ALARM_RESERVE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Reserve |
| STAT_DWA_ALARM_LEITUNGSUEBERWACHUNG_SINE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Leitungsüberwachung SINE; 1= DWA-Alarm ausgelöst durch Leitungsüberwachung SINE |
| STAT_DWA_ALARM_MANIPULATION_AUTH_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Manipulation Authentisierung; 1= DWA-Alarm ausgelöst durch Manipulation Authentisierung |
| STAT_DWA_ALARM_USIS_A_UND_B_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz A und B; 1= DWA-Alarm ausgelöst durch Innenraumschutz A und B |
| STAT_DWA_ALARM_USIS_A_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz A; 1= DWA-Alarm ausgelöst durch Innenraumschutz A |
| STAT_DWA_ALARM_USIS_B_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz B; 1= DWA-Alarm ausgelöst durch Innenraumschutz B |
| STAT_DWA_ALARM_NEIGUNGSGEBER_X_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber X-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber X-Achse |
| STAT_DWA_ALARM_NEIGUNGSGEBER_Y_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber Y-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber Y-Achse |
| STAT_DWA_ALARM_NEIGUNGSGEBER_X_UND_Y_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber X- und Y-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber X- und Y-Achse |
| STAT_DWA_ALARM_SINE_SPANNUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch SINE Spannungsversorgung; 1= DWA-Alarm ausgelöst durch SINE Spannungsversorgung |
| STAT_DWA_ALARM_SINE_LIN_TELEGRAMM_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch SINE kein LIN-Telegramm absetzbar; 1= DWA-Alarm ausgelöst durch SINE kein LIN-Telegramm absetzbar |
| STAT_DWA_ALARM_PANIKALARM_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Panikalarm; 1= DWA-Alarm ausgelöst durch Panikalarm |
| STAT_DWA_ALARM_USIS_ABDECKUNG_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Durch Abdecken des USIS Gitters wurde der Alarm ausgelöst. 0 = Keine Auslösung durch Abdeckung, 1 = Auslösung durch Abdeckung |
| STAT_DWA_ALARM_OBD_KOMMUNIKATION_EIN | 0/1 | high | unsigned char | - | - | - | - | - | OBD-Kommunikation wurde Alarm auslösen: 0 = Keine Auslösung durch OBD, 1 = OBD hat Alarm ausgelöst |

### RES_0XDCB7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_VL_TEMP_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur MUW vorne links |
| STAT_MUW_VR_TEMP_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur MUW vorne rechts |
| STAT_MUW_HL_TEMP_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur MUW hinten links |
| STAT_MUW_HR_TEMP_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur MUW hinten rechts |
| STAT_MUW_HI_TEMP_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur MUW hinten zentral |

### RES_0XDCB8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_VL_KOMM_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Kommunikationsfehler des MUW's vorne links |
| STAT_MUW_VR_KOMM_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Kommunikationsfehler des MUW's vorne rechts |
| STAT_MUW_HL_KOMM_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Kommunikationsfehler des MUW's hinten links |
| STAT_MUW_HR_KOMM_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Kommunikationsfehler des MUW's hinten rechts |
| STAT_MUW_HI_KOMM_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_KOMM_FEHLER | 1.0 | 1.0 | 0.0 | Kommunikationsfehler des MUW's hinten zentral |
| STAT_MUW_VL_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_INTERN | 1.0 | 1.0 | 0.0 | Interner Status des Sensors vorne links |
| STAT_MUW_VR_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_INTERN | 1.0 | 1.0 | 0.0 | Interner Status des Sensors vorne rechts |
| STAT_MUW_HL_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_INTERN | 1.0 | 1.0 | 0.0 | Interner Status des Sensors hinten links |
| STAT_MUW_HR_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_INTERN | 1.0 | 1.0 | 0.0 | Interner Status des Sensors hinten rechts |
| STAT_MUW_HI_FEHLER_NR | 0-n | - | signed char | - | TAB_MUW_INTERN | 1.0 | 1.0 | 0.0 | Interner Status des Sensors hinten zentral |
| STAT_MUW_VL_ALARMZAEHLER_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Alarme des MUW's vorne links |
| STAT_MUW_VR_ALARMZAEHLER_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Alarme des MUW's vorne rechts |
| STAT_MUW_HL_ALARMZAEHLER_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Alarme des MUW's hinten links |
| STAT_MUW_HR_ALARMZAEHLER_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Alarme des MUW's hinten rechts |
| STAT_MUW_HI_ALARMZAEHLER_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Alarme des MUW's hinten zentral |

### RES_0XDCB9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_VL_NOISE_LEVEL_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Grundrauschen von MUW vorne links |
| STAT_MUW_VR_NOISE_LEVEL_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Grundrauschen von MUW vorne rechts |
| STAT_MUW_HL_NOISE_LEVEL_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Grundrauschen von MUW hinten links |
| STAT_MUW_HR_NOISE_LEVEL_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Grundrauschen von MUW hinten rechts |
| STAT_MUW_HI_NOISE_LEVEL_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Grundrauschen von MUW hinten zentral |

### RES_0XDCBA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_LIN_KOMUNIKATION_VL | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW vorne links |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 1 |
| STAT_MUW_VL_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 1 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 2 |
| STAT_MUW_VL_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 2 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 3 |
| STAT_MUW_VL_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 3 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 4 |
| STAT_MUW_VL_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 4 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 5 |
| STAT_MUW_VL_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 5 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 6 |
| STAT_MUW_VL_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 6 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 7 |
| STAT_MUW_VL_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 7 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 8 |
| STAT_MUW_VL_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 8 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 9 |
| STAT_MUW_VL_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 9 |
| STAT_MUW_VL_ALARM_WAKEUP_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne links bei Alarm 10 |
| STAT_MUW_VL_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_VR | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW vorne rechts |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 1 |
| STAT_MUW_VR_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 1 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 2 |
| STAT_MUW_VR_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 2 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 3 |
| STAT_MUW_VR_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 3 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 4 |
| STAT_MUW_VR_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 4 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 5 |
| STAT_MUW_VR_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 5 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 6 |
| STAT_MUW_VR_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 6 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 7 |
| STAT_MUW_VR_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 7 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW  vorne rechts bei Alarm 8 |
| STAT_MUW_VR_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 8 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 9 |
| STAT_MUW_VR_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 9 |
| STAT_MUW_VR_ALARM_WAKEUP_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW vorne rechts bei Alarm 10 |
| STAT_MUW_VR_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_HL | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW hinten links |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 1 |
| STAT_MUW_HL_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 1 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 2 |
| STAT_MUW_HL_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 2 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 3 |
| STAT_MUW_HL_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 3 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 4 |
| STAT_MUW_HL_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 4 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 5 |
| STAT_MUW_HL_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 5 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 6 |
| STAT_MUW_HL_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 6 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 7 |
| STAT_MUW_HL_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 7 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 8 |
| STAT_MUW_HL_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 8 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 9 |
| STAT_MUW_HL_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 9 |
| STAT_MUW_HL_ALARM_WAKEUP_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten links bei Alarm 10 |
| STAT_MUW_HL_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_HR | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW hinten rechts |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 1 |
| STAT_MUW_HR_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 1 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 2 |
| STAT_MUW_HR_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 2 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 3 |
| STAT_MUW_HR_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 3 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 4 |
| STAT_MUW_HR_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 4 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 5 |
| STAT_MUW_HR_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 5 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 6 |
| STAT_MUW_HR_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 6 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 7 |
| STAT_MUW_HR_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 7 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 8 |
| STAT_MUW_HR_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 8 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 9 |
| STAT_MUW_HR_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 9 |
| STAT_MUW_HR_ALARM_WAKEUP_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten rechts bei Alarm 10 |
| STAT_MUW_HR_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_HI | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW hinten zentral |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 1 |
| STAT_MUW_HI_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 1 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 2 |
| STAT_MUW_HI_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 2 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 3 |
| STAT_MUW_HI_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 3 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 4 |
| STAT_MUW_HI_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 4 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 5 |
| STAT_MUW_HI_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 5 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 6 |
| STAT_MUW_HI_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 6 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 7 |
| STAT_MUW_HI_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 7 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 8 |
| STAT_MUW_HI_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 8 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 9 |
| STAT_MUW_HI_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 9 |
| STAT_MUW_HI_ALARM_WAKEUP_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-WakeUp-Spannungswert am MUW hinten zentral bei Alarm 10 |
| STAT_MUW_HI_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 10 |

### RES_0XDCBB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_LIN_KOMUNIKATION_VL | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW vorne links |
| STAT_MUW_VL_ALARM_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 1 |
| STAT_MUW_VL_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 1 |
| STAT_MUW_VL_ALARM_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 2 |
| STAT_MUW_VL_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 2 |
| STAT_MUW_VL_ALARM_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 3 |
| STAT_MUW_VL_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 3 |
| STAT_MUW_VL_ALARM_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 4 |
| STAT_MUW_VL_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 4 |
| STAT_MUW_VL_ALARM_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 5 |
| STAT_MUW_VL_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 5 |
| STAT_MUW_VL_ALARM_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 6 |
| STAT_MUW_VL_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 6 |
| STAT_MUW_VL_ALARM_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 7 |
| STAT_MUW_VL_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 7 |
| STAT_MUW_VL_ALARM_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 8 |
| STAT_MUW_VL_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 8 |
| STAT_MUW_VL_ALARM_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 9 |
| STAT_MUW_VL_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 9 |
| STAT_MUW_VL_ALARM_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne links bei Alarm 10 |
| STAT_MUW_VL_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne links bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_VR | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW vorne rechts |
| STAT_MUW_VR_ALARM_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 1 |
| STAT_MUW_VR_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 1 |
| STAT_MUW_VR_ALARM_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 2 |
| STAT_MUW_VR_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 2 |
| STAT_MUW_VR_ALARM_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 3 |
| STAT_MUW_VR_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 3 |
| STAT_MUW_VR_ALARM_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 4 |
| STAT_MUW_VR_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 4 |
| STAT_MUW_VR_ALARM_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 5 |
| STAT_MUW_VR_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 5 |
| STAT_MUW_VR_ALARM_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 6 |
| STAT_MUW_VR_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 6 |
| STAT_MUW_VR_ALARM_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 7 |
| STAT_MUW_VR_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 7 |
| STAT_MUW_VR_ALARM_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW  vorne rechts bei Alarm 8 |
| STAT_MUW_VR_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 8 |
| STAT_MUW_VR_ALARM_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 9 |
| STAT_MUW_VR_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 9 |
| STAT_MUW_VR_ALARM_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW vorne rechts bei Alarm 10 |
| STAT_MUW_VR_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW vorne rechts bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_HL | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW hinten links |
| STAT_MUW_HL_ALARM_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 1 |
| STAT_MUW_HL_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 1 |
| STAT_MUW_HL_ALARM_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 2 |
| STAT_MUW_HL_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 2 |
| STAT_MUW_HL_ALARM_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 3 |
| STAT_MUW_HL_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 3 |
| STAT_MUW_HL_ALARM_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 4 |
| STAT_MUW_HL_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 4 |
| STAT_MUW_HL_ALARM_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 5 |
| STAT_MUW_HL_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 5 |
| STAT_MUW_HL_ALARM_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 6 |
| STAT_MUW_HL_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 6 |
| STAT_MUW_HL_ALARM_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 7 |
| STAT_MUW_HL_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 7 |
| STAT_MUW_HL_ALARM_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 8 |
| STAT_MUW_HL_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 8 |
| STAT_MUW_HL_ALARM_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 9 |
| STAT_MUW_HL_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 9 |
| STAT_MUW_HL_ALARM_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten links bei Alarm 10 |
| STAT_MUW_HL_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten links bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_HR | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW hinten rechts |
| STAT_MUW_HR_ALARM_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 1 |
| STAT_MUW_HR_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 1 |
| STAT_MUW_HR_ALARM_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 2 |
| STAT_MUW_HR_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 2 |
| STAT_MUW_HR_ALARM_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 3 |
| STAT_MUW_HR_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 3 |
| STAT_MUW_HR_ALARM_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 4 |
| STAT_MUW_HR_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 4 |
| STAT_MUW_HR_ALARM_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 5 |
| STAT_MUW_HR_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 5 |
| STAT_MUW_HR_ALARM_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 6 |
| STAT_MUW_HR_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 6 |
| STAT_MUW_HR_ALARM_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 7 |
| STAT_MUW_HR_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 7 |
| STAT_MUW_HR_ALARM_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 8 |
| STAT_MUW_HR_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 8 |
| STAT_MUW_HR_ALARM_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 9 |
| STAT_MUW_HR_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 9 |
| STAT_MUW_HR_ALARM_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten rechts bei Alarm 10 |
| STAT_MUW_HR_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten rechts bei Alarm 10 |
| STAT_MUW_LIN_KOMUNIKATION_HI | 0/1 | high | unsigned char | - | - | - | - | - | Status der LIN-Komunikation des MUW hinten zentral |
| STAT_MUW_HI_ALARM_LEVEL_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 1 |
| STAT_MUW_HI_TEMP_LEVEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 1 |
| STAT_MUW_HI_ALARM_LEVEL_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 2 |
| STAT_MUW_HI_TEMP_LEVEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 2 |
| STAT_MUW_HI_ALARM_LEVEL_3_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 3 |
| STAT_MUW_HI_TEMP_LEVEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 3 |
| STAT_MUW_HI_ALARM_LEVEL_4_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 4 |
| STAT_MUW_HI_TEMP_LEVEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 4 |
| STAT_MUW_HI_ALARM_LEVEL_5_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 5 |
| STAT_MUW_HI_TEMP_LEVEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 5 |
| STAT_MUW_HI_ALARM_LEVEL_6_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 6 |
| STAT_MUW_HI_TEMP_LEVEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 6 |
| STAT_MUW_HI_ALARM_LEVEL_7_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 7 |
| STAT_MUW_HI_TEMP_LEVEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 7 |
| STAT_MUW_HI_ALARM_LEVEL_8_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 8 |
| STAT_MUW_HI_TEMP_LEVEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 8 |
| STAT_MUW_HI_ALARM_LEVEL_9_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 9 |
| STAT_MUW_HI_TEMP_LEVEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 9 |
| STAT_MUW_HI_ALARM_LEVEL_10_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Alarm-Spannungswert am MUW hinten zentral bei Alarm 10 |
| STAT_MUW_HI_TEMP_LEVEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur am MUW hinten zentral bei Alarm 10 |

### RES_0XDCBC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_VL_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung des Sensors vorne links |
| STAT_MUW_VR_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung des Sensors vorne rechts |
| STAT_MUW_HL_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung des Sensors hinten links |
| STAT_MUW_HR_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung des Sensors hinten rechts |
| STAT_MUW_HI_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung des Sensors hinten zentral |

### RES_0XDCDD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_FAHRERTUER_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Fahrertür |
| STAT_KONTAKT_BEIFAHRERTUER_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Beifahrertür |
| STAT_KONTAKT_FAHRERTUER_HINTEN_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Fahrertür hinten |
| STAT_KONTAKT_BEIFAHRERTUER_HINTEN_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Beifahrertür hinten |
| STAT_KONTAKT_MOTORHAUBE_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Motorhaube |
| STAT_KONTAKT_HECKKLAPPE_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Heckklappe |
| STAT_KONTAKT_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Heckscheibe |
| STAT_ZV_NR | 0-n | - | unsigned char | - | TAB_ZV_ST_CLSY | 1.0 | 1.0 | 0.0 | Status Zentralverriegelung |
| STAT_RESERVE_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve (noch nicht belegt) |

### RES_0XDD16_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OBD_UEBERWACHUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0 = OBD-Überwachung nicht aktiv 1 = OBD-Überwachung aktiv |

### RES_0XDD4B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUW_VL_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom MUW vorne links |
| STAT_MUW_VR_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom MUW vorne rechts |
| STAT_MUW_HL_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom MUW hinten links |
| STAT_MUW_HR_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom MUW hinten rechts |
| STAT_MUW_HI_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom MUW hinten zentral |
| STAT_LIN_MANIPULATION_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme des LIN-BUS (Manipulation) |
| STAT_TILT_X_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom Neigungs-Sensor X-Achse |
| STAT_TILT_Y_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom Neigungs-Sensor Y-Achse |
| STAT_TILT_Z_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme vom Neigungs-Sensor Z-Achse |
| STAT_FAT_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Fahrertürkontakt |
| STAT_BFT_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Beifahrertürkontakt |
| STAT_FATH_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Fahrertürkontakt hinten |
| STAT_BFTH_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Beifahrertürkontakt hinten |
| STAT_MHK_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Motorhaubenkontakt |
| STAT_HECKKLAPPE_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Heckklappenkontakt |
| STAT_HECKSCHEIBE_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme von dem Heckscheibenkontakt (oder 2 te Klappe) |
| STAT_PANIK_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme des Panik-Alarms |
| STAT_AUTARK_ALL_ALARM_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Summe aller ausgelösten Alarme des autarken-Alarms |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_SINE_ANSTEUERUNG | 0xAA70 | - | Ansteuerung der Sirene für maximal 5 Sekunden | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SINE_BATT_LEVEL_RESET | 0xAA71 | - | Reset des Batterie-Levels. Nur nach Austausch der Batterie durchführen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SELBSTTEST | 0xAA76 | - | Selbsttest DWA-System. Gefundene Fehler werden im Fehlerspeicher abgelegt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA76_R | RES_0xAA76_R |
| DWA_SCHAERFEN | 0xAA79 | - | 0: DWA entschärfen 1: DWA schärfen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA79_R | - |
| DWA_MUW_SELBSTTEST | 0xAA7E | - | Selbsttest der angeschlossenen MUW's  Defekte MUW's werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA7E_R |
| DWA_MUW_FUNKTIONSTEST | 0xAA7F | - | Funktionstest der MUW's. Anzeige, welcher MUW würde auslösen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA7F_R |
| DWA_SINE | 0xDCA2 | - | Status der Sirene / Neigungsgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA2_D |
| DWA_SINE_BATT_LEVEL | 0xDCA3 | STAT_SIRENE_INTERNER_BATTERIE_LEVEL_NR | Status interne Batterie: Siehe Tabelle TAB_SINE_BATT_LEVEL | 0-n | - | High | unsigned char | TAB_SINE_BATT_LEVEL | - | - | - | - | 22 | - | - |
| DWA_LED | 0xDCA8 | - | Status/Steuern DWA-LED. Für Details siehe Sub-Tabelle(n) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDCA8_D | RES_0xDCA8_D |
| DWA_SINE_NEIGUNG | 0xDCA9 | - | Neigungswinkel (X-, Y- und Z-Achse) des Fahrzeugs. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA9_D |
| DWA_INTERN | 0xDCAC | STAT_DWA_INTERN_NR | Abfrage Status DWA | 0-n | - | - | unsigned int | TAB_DWA_INTERN_2 | - | - | - | - | 22 | - | - |
| DWA_ALARM_AUSGELOEST | 0xDCB0 | - | Status, welcher Alarm ausgelöst hat | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB0_D |
| DWA_SCHNELLTEST | 0xDCB5 | - | Aktiviert den DWA-Schnelltest Modus (Sensoren werden geschaerft) 0: Vorgang beenden 1: leise  2: normale Lautstärke | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCB5_D | - |
| DWA_MUW_TEMPERATUR | 0xDCB7 | - | Ausgabe der internen Temperatur der Mirkowellensensoren (MUW's) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB7_D |
| DWA_MUW_INTERN | 0xDCB8 | - | Interner Status der Mirkowellensensoren (MUW) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB8_D |
| DWA_MUW_NOISE_LEVEL | 0xDCB9 | - | Grundrauschen der MUWs. Ausgegeben wird ein Spannungswert | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB9_D |
| DWA_MUW_WAKEUP_LEVELS | 0xDCBA | - | MUW-WAKEUP-Levels | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDCBA_D | RES_0xDCBA_D |
| DWA_MUW_ALARM_LEVELS | 0xDCBB | - | RESET MUW-Alarm-Levels | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDCBB_D | RES_0xDCBB_D |
| DWA_MUW_SPANNUNG | 0xDCBC | - | Status Spannungsversorgung der Mikrowellensensoren MUW | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCBC_D |
| DWA_TEMPERATUR | 0xDCBD | STAT_DWA_TEMPERATUR_WERT | Interne Temperatur der DWA | °C | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| DWA_SPANNUNG | 0xDCBF | STAT_DWA_SPANNUNG_WERT | Spannung der DWA | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| DWA_KLAPPENKONTAKTE | 0xDCDD | - | Status der eingelesenen Klappenkontakte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDD_D |
| OBD_UEBERWACHUNG | 0xDD16 | - | Status der OBD-Überwachung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD16_D | RES_0xDD16_D |
| DWA_ALARMZAEHLER | 0xDD4B | - | DWA Alarmzaehler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD4B_D | RES_0xDD4B_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_DWA_ALARMSPEICHER_CARBIO

| WERT | TEXT |
| --- | --- |
| 0x10 | Alarm CANSINE: MUW VR, Leitungsunterbrechung/-Kurzschluss |
| 0x11 | Alarm CANSINE: MUW HR, Leitungsunterbrechung/-Kurzschluss |
| 0x12 | Alarm CANSINE: MUW HL, Leitungsunterbrechung/-Kurzschluss |
| 0x13 | Alarm CANSINE: MUW VL, Leitungsunterbrechung/-Kurzschluss |
| 0x14 | Alarm CANSINE: MUW Hi, Leitungsunterbrechung/-Kurzschluss |
| 0x15 | Alarm CANSINE: MUW VR, Innenraumschutz |
| 0x16 | Alarm CANSINE: MUW HR, Innenraumschutz |
| 0x17 | Alarm CANSINE: MUW HL, Innenraumschutz |
| 0x18 | Alarm CANSINE: MUW VL, Innenraumschutz |
| 0x19 | Alarm CANSINE: MUW VL, Innenraumschutz |
| 0x30 | Alarm CANSINE: Türkontakt, Fahrertuer vorne |
| 0x31 | Alarm CANSINE: Türkontakt, Fahrertuer vorne, Daueralarm |
| 0x32 | Alarm CANSINE: Türkontakt, Beifahrertuer vorne |
| 0x33 | Alarm CANSINE: Türkontakt, Beifahrertuer vorne, Daueralarm |
| 0x34 | Alarm CANSINE: Türkontakt, Fahrertuer hinten |
| 0x35 | Alarm CANSINE: Türkontakt, Fahrertuer hinten, Daueralarm |
| 0x36 | Alarm CANSINE: Türkontakt, Beifahrertuer hinten |
| 0x37 | Alarm CANSINE: Türkontakt, Beifahrertuer hinten, Daueralarm |
| 0x38 | Alarm CANSINE: Kontakt, Heckklappe |
| 0x39 | Alarm CANSINE: Kontakt, Heckklappe, Daueralarm |
| 0x3A | Alarm CANSINE: Kontakt, Motorhaube |
| 0x3B | Alarm CANSINE: Kontakt, Motorhaube, Daueralarm |
| 0x3C | Alarm CANSINE: Kontakt, Heckscheibe |
| 0x3D | Alarm CANSINE: Kontakt, Heckscheibe, Daueralarm |
| 0x70 | Alarm CANSINE: Leitungsunterbrechung |
| 0xB1 | Alarm CANSINE: OBD-Kommunikation Ethernet |
| 0xB2 | Alarm CANSINE: OBD-Kommunikation D-CAN |
| 0xD0 | Alarm CANSINE: Tilt Sensor X+ |
| 0xD1 | Alarm CANSINE: Tilt Sensor X- |
| 0xD2 | Alarm CANSINE: Tilt Sensor Y+ |
| 0xD4 | Alarm CANSINE: Tilt Sensor Y- |
| 0xD8 | Alarm CANSINE: Tilt Sensor Z+ |
| 0xE0 | Alarm CANSINE2: Tilt Sensor Z- |
| 0xFF | Wert ungültig |

### TAB_DWA_INTERN_2

| WERT | TEXT |
| --- | --- |
| 0x00 | DWA entschärft |
| 0x01 | DWA wird entschärft |
| 0x02 | DWA in Schärfung |
| 0x03 | DWA geschärft |
| 0x04 | DWA geschärft - Klappenkontakte noch ausgeblendet |
| 0x05 | DWA geschärft - nach RSU |
| 0x06 | DWA geschärft - IRS nicht aktiv |
| 0x07 | DWA geschärft - Neigungssensor nicht aktiv |
| 0x08 | DWA geschärft - IRS und Neigungsgebersensor nicht aktiv |
| 0x09 | DWA geschärft - IRS und Neigungsgebersensor durch Benutzer deaktiviert |
| 0x0A | DWA geschärft - nach RSU, IRS und Neigungsgebersensor durch Benutzer deaktiviert |
| 0x0B | DWA Alarm |
| 0x0C | DWA Pause nach Alarm |
| 0x0D | DWA Panik Alarm Mode |
| 0x0E | DWA Transportmode |
| 0x0F | DWA Werkstattmode |
| 0x10 | DWA Fertigungsmode |
| 0x11 | DWA Energiesparmode wird beendet |
| 0x12 | DWA Powerdown Mode |
| 0x13 | DWA Schnelltest aktiv |
| 0x14 | DWA Selbsttest aktiv |
| 0xFF | unbekannter Status |
| 0xFFFF | Wert ungültig |

### TAB_DWA_KLAPPENKONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | unplausibel |
| 0x03 | ungültig |

### TAB_DWA_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Dauer-Ein |
| 0x02 | Blinken |
| 0x03 | Blitzen |
| 0xFF | unbekannter Zustand |

### TAB_DWA_LED_ARG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Aus |
| 0x0001 | Dauer-Ein |
| 0x0002 | Blinken |
| 0x0003 | Blitzen |
| 0xFFFF | unbekannter Zustand |

### TAB_DWA_SCHNELLTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbrechen |
| 0x01 | Schnelltest leise |
| 0x02 | Schnelltest normal |

### TAB_DWA_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbruch |
| 0x01 | Selbsttest Komplettes DWA-System |
| 0x02 | Selbsttest Innenraumschutz |
| 0x03 | Selbsttest Neigungssgeber |

### TAB_DWA_SELBSTTEST_ERG

| WERT | TEXT |
| --- | --- |
| 0x00 | Selbsttest NIO |
| 0x01 | Selbsttest IO |
| 0x02 | Selbsttest läuft |

### TAB_DWA_SINE_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler aktiv |
| 0x02 | Fehler war aktiv |
| 0x03 | ungültig |
| 0x04 | nicht unterstüzt |

### TAB_MUW_FUNKTIONSTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | MUW würde nicht auslösen |
| 0x01 | MUW würde auslösen |
| 0x02 | MUW fehlerhaft |
| 0xFF | ungültiger Wert |

### TAB_MUW_FUNKTIONSTEST_2

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktionstest nicht aktiv |
| 0x01 | Funktionstest läuft |
| 0x02 | Funktionstest konnte nicht gestartet werden |
| 0xFF | ungültiger Wert |

### TAB_MUW_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler vorhanden |
| 0x02 | Test läuft |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_MUW_KOMM_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | DWA Bus permanent gestört |
| 0x02 | MUW Timeout |
| 0x03 | Antwort vom falschen Sensor |
| 0x04 | Falsche Checksumme in der Antwort des Sensors |
| 0xFE | Sensor nicht konfiguriert |
| 0xFF | unbekannter Status |

### TAB_MUW_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Selbsttest läuft |
| 0x02 | Selbsttest erfolgreich abgeschlossen |
| 0x03 | Selbsttest mir Fehlern abgeschlossen |
| 0xFF | ungültiger Wert |

### TAB_SINE_BATT_LEVEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Batterie leer |
| 0x01 | Batterie gut |
| 0x02 | Batterie neu |
| 0xFF | Ungültiges Signal |

### TAB_STAT_GEBLAESE

| WERT | TEXT |
| --- | --- |
| 0x00 | Gebläse AUS |
| 0x01 | Gebläse EIN |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_STAT_OP_CABRIO_DACH

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Bedienung |
| 0x01 | öffnen |
| 0x02 | schließen |
| 0x03 | Beladeposition anfahren |
| 0x04 | Beladeposition verlassen |
| 0xFF | Wert ungültig |

### TAB_STAT_POS_VERDECK

| WERT | TEXT |
| --- | --- |
| 0x00 | Komplett geschlossen und verriegelt |
| 0x01 | Zwischenstellung |
| 0x02 | Komplett geöffnet und verriegelt |
| 0x03 | Beladeposition |
| 0x04 | Hardtop aufgesetzt |
| 0x05 | Komplett geschlossen |
| 0x06 | Komplett geöffnet |
| 0x07 | - |
| 0x08 | Notverriegelung durchgeführt |
| 0x09 | Beladehilfe in Zwischenposition |
| 0xFF | - |

### TAB_STAT_STANDHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion / Nicht verfügbar |
| 0x01 | Standheizung Aus |
| 0x02 | Standheizung Ein |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_STAT_STANDLUEFTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion / Nicht verfügbar |
| 0x01 | Standlüften Aus |
| 0x02 | Standlüften Ein |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_ZV_ST_CLSY

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status empfangen |
| 0x01 | Mindestens eine Tür ist entriegelt |
| 0x02 | Mindestens eine Tür ist verriegelt |
| 0x03 | Mindestens eine Tür ist entriegelt und Mindestens eine Tür ist verriegelt |
| 0x04 | Interner ZV-Master ist gesichert |
| 0x05 | Interner ZV-Master ist gesichert und Mindestens eine Tür ist entriegelt |
| 0x06 | Interner ZV-Master ist gesichert und Mindestens eine Tür ist verriegelt |
| 0x07 | Interner ZV-Master ist gesichert und Mindestens eine Tür ist entriegelt und Mindestens eine Tür ist verriegelt |
| 0xFF | Signal ungültig |
