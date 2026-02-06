# x_dwa.prg

## General

|  |  |
| --- | --- |
| File | x_dwa.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 64 |
| Origin | BMW UX-EE-2 Schulz |
| Revision | 3.000 |
| Author | BMW_AG UX-EE-2 J._Schulz, BMW_AG UX-EE-1 M._Kiesewetter, Dräxlm |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Diebstahlwarnanlage |  |  |
| ORIGIN | string | BMW UX-EE-2 Schulz |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW_AG UX-EE-2 J._Schulz, BMW_AG UX-EE-1 M._Kiesewetter, Dräxlm |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.78 |  |  |
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
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

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

### STEUERN_IO

Vorgeben eines Status UDS  : $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment optionales Argument Wenn nicht angegeben, dann kein InputOutputControlParameter im Request |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### STEUERN_ROUTINE

Vorgeben eines Status UDS  : $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'STR'  = startRoutine 'STPR' = stopRoutine 'RRR'  = requestRoutineResults |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### IS_LESEN

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $2000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

_No arguments._

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $22 ReadDataByIdentifier UDS  : $20 dataIdentifier UDS  : $00 alle Info-Meldungen anschließend UDS  : $20 dataIdentifier UDS  : $nn Details zur Info-Meldung an der Position n Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### PROG_ZAEHLER_LESEN

Programmierzaehler lesen UDS  : $22   ReadDataByIdentifier UDS  : $2502 ProgrammingCounter Modus: Default

_No arguments._

### PROG_MAX_LESEN

Anzahl der maximal möglichen Programmiervorgänge auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2503 ProgrammingCounter Modus: Default

_No arguments._

### _STATUS_DWA_MR_MONITOR

JobHeaderFormat 0x4632 DIAG_DID_4632_READ_MONITOR

_No arguments._

### _STEUERN_DWA_MR_MONITOR_LOESCHEN

JobHeaderFormat 0x4633 DIAG_DID_4633_MONITOR_RESET

_No arguments._

### _STATUS_DWA_MR_SQUARES_SN

JobHeaderFormat 0x463D DIAG_DID_463D_READ_SQUARES_SN

_No arguments._

### _STEUERN_DWA_MR_SQUARES_SN

JobHeaderFormat 0x463E DIAG_DID_463E_WRITE_SQUARES_SN Change the SERIAL NUMBER of the square the PCB is installed in. It is saved in NVRAM

| Name | Type | Description |
| --- | --- | --- |
| SN_BYTE0 | int | byte0 |
| SN_BYTE1 | int | byte1 |
| SN_BYTE2 | int | byte2 |
| SN_BYTE3 | int | byte3 |
| SN_BYTE4 | int | byte4 |
| SN_BYTE5 | int | byte5 |
| SN_BYTE6 | int | byte6 |
| SN_BYTE7 | int | byte7 |
| SN_BYTE8 | int | byte8 |

### _STATUS_DWA_MR_DEAKTIVIERUNG_IRS_NG

JobHeaderFormat 0x4634 DWA_SENSINSPEICHER

_No arguments._

### _STEUERN_DWA_MR_DEAKTIVIERUNG_IRS_NG_LOESCHEN

JobHeaderFormat 0x4635 DWA_SENSINSPEICHER_LOESCHEN

_No arguments._

### _STATUS_DWA_MR_PIN_TEST_RES

JobHeaderFormat 0x4643 DIAG_DID_4643_READ_PIN_TEST_RES

_No arguments._

### _STEUERN_DWA_MR_ALARMSPEICHER_LOESCHEN

JobHeaderFormat 0xAA7D DWA_ALARMSPEICHER_LOESCHEN

_No arguments._

### _STATUS_DWA_MR_ALARMSPEICHER

JobHeaderFormat 0xDCBE DWA_ALARMSPEICHER

_No arguments._

### _STATUS_DWA_MR_ICT_TEST_RESULTS

JobHeaderFormat 0x4651 DIAG_DID_4651_ICT_TEST_RESULTS

_No arguments._

### _STATUS_DWA_RADIO_PEGEL

JobHeaderFormat 0xE0C6 DIAG_DID_E0C6_DWA_RSSI_REGS

_No arguments._

### _STEUERN_DWA_MR_LOW_POWER_TIMERS

JobHeaderFormat 0x4653 DIAG_DID_4653_TIMINGS_CHANGE

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIMERS_TICK_SECONDS | unsigned char | set timers resolution, '0' means do not change, 'FF' means default value |
| ARG_MICRO_OFF_TICKS | unsigned char | time delay before micro power off, '0' means do not change, 'FF' means default value |
| ARG_REC_OFF_DISARMED_TICKS | unsigned char | time delay before receiver power off, '0' means do not change, 'FF' means default value |
| ARG_REC_OFF_ARMED_TICKS | unsigned char | time delay before receiver power off, '0' means do not change, 'FF' means default value |
| ARG_CAN_SLEEP_DELAY_SECONDS | unsigned char | '0' means do not change, 'FF' means default value |

### _STEUERN_DWA_MR_REC_TYPE

JobHeaderFormat 0x4654 DIAG_DID_4654_WRITE_DWA_SVK_HISTORY

| Name | Type | Description |
| --- | --- | --- |
| REC_TYPE | unsigned char | 0x00 = Rec Type 433Mhz - 0x01 = Rec Type 315Mhz |

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

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALARM_SPEICHER_LOESCHEN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Löscht den Alarm-Ringspeicher: 1 = löschen, 0 = nicht löschen |

### ARG_0X4639_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZAHL_RESETS_LOESCHEN_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Löscht die Anzahl der Resets. 0 oder 1 löscht die Resets |

### ARG_0X463C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TR_BYTE_0 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Testergebnis Byte 0 |
| TR_BYTE_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Testergebnis Byte 1 |
| TR_BYTE_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Testergebnis Byte 2 |
| TR_BYTE_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Testergebnis Byte 3 |
| TR_BYTE_4 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Testergebnis Byte 4 |

### ARG_0X4640_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATUM_BYTE_YY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Produktionsjahr z.B.  09 (2009) |
| DATUM_BYTE_MM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Produktionsmonat |
| DATUM_BYTE_DD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Produktionstag |
| DATUM_BYTE_RESERVE0 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reservebyte 0 |
| DATUM_BYTE_RESERVE1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reservebyte 1 |

### ARG_0X4642_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_BYTE_0 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bestellnummer Byte 0 |
| ON_BYTE_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bestellnummer Byte 1 |
| ON_BYTE_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bestellnummer Byte 2 |

### ARG_0X4645_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SN_BYTE_0 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 9.0 | Seriennummer Byte 0: Jahrzehnt in Schritten 0..9 |
| SN_BYTE_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 9.0 | Seriennummer Byte 1: Jahr in Schritten 0..9 |
| SN_BYTE_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Seriennummer Byte 2: Zehner der zweistelligen Monatsdarstellung in Schritten 0..1 |
| SN_BYTE_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 9.0 | Seriennummer Byte 3: Einheit der zweistelligen Monatsdarstellung in Schritten 0..9 |
| SN_BYTE_4 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | Seriennummer Byte 4: Zehner der zweistelligen Tagesdarstellung in Schritten 0..3 |
| SN_BYTE_5 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 9.0 | Seriennummer Byte 5: Einheit der zweistelligen Tagesdarstellung in Schritten 0..9 |
| SN_BYTE_6 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 15.0 | Seriennummer Byte 6: Byte 3 der Nummer in Schritten 0..F |
| SN_BYTE_7 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 15.0 | Seriennummer Byte 7: Byte 2 der Nummer in Schritten 0..F |
| SN_BYTE_8 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 15.0 | Seriennummer Byte 8: Byte 1 der Nummer in Schritten 0..F |
| SN_BYTE_9 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 15.0 | Seriennummer Byte 9: Byte 0 der Nummer in Schritten 0..F |

### ARG_0X4646_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CKM_LOESCHEN_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt das Car Key Management zurück. 0 oder 1 setzt CKM zurück. |

### ARG_0X464D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BYTE_00 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Erstes Argument Byte |
| ARG_BYTE_01 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zweites Argument Byte |
| ARG_BYTE_02 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Drittes Argument Byte |
| ARG_BYTE_03 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Viertes Argument Byte |
| ARG_BYTE_04 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Fünftes Argument Byte |

### ARG_0X464E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TON_TYP | 0-n | high | unsigned char | - | TAB_MR_DWA_TON | 1.0 | 1.0 | 0.0 | - | - | Wählt den Typ des Warntons ECE oder US |
| SUMMER_AKTIVIEREN | 0-n | high | unsigned char | - | TAB_MR_DWA_SUMMER | 1.0 | 1.0 | 0.0 | - | - | Summer aktivieren |

### ARG_0X464F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIEZO_SEC_ST_INH_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = ST aktiv, 1 = ST inaktiv |

### ARG_0X4650_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXT_BATT_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 schaltet die externe Batterie aus, 1 schaltet die externe Batterie ein |

### ARG_0X4652_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEHLER_SPEICHERN_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet die Fehlerspeicherung ein. 0 = Fehlerspeicherung nicht einschalten 1 = Fehlerspeicherung einschalten |

### ARG_0XB040_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DWA_SCHAERFEN_MR | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 oder kein Argument: DWA entschärfen; 1: DWA schärfen (im SG-Nachlauf) |

### ARG_0XE0BF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_PWM_WERT_MR | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | - | - | PWM Wert für die Zentralverriegelung |
| ZV_PWM_ZEIT_MR | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Betätigung |
| ZV_PWM_RICHTUNG_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Richtung der Betätigung entriegelt = 0, verriegelt = 1 |

### ARG_0XE0C9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_RICHTUNG_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Betätigungsrichtung zu = 1, auf = 0 |

### ARG_0XE0CA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAGNOSE_NEIGUNGSS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet die Diagnosefunktion ein = 1 oder aus = 0 |

### ARG_0XE110_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORFELD_BEL_MR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schalten der Vorfeldbeleuchtung; 0 = aus; 1 = ein |

### ARG_0XE111_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORFELD_BEL_PWM_WERT_MR | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | - | - | PWM Wert |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x024100 | Energiesparmode  aktiv | 0 |
| 0x02FF41 | DM Test Appl | 0 |
| 0x800000 | Ueberspannung Batterie | 1 |
| 0x800001 | Unterspannung Batterie | 1 |
| 0x800002 | DWA battery undervoltage | 0 |
| 0x800003 | Neigungssensor: Plausibilisierung fehlgeschlagen | 0 |
| 0x800006 | Hardwarefehler Steuergeraet | 0 |
| 0x800008 | Vorfeldbeleuchtung Leitungsunterbrechung | 0 |
| 0x800009 | Vorfeldbeleuchtung Kurzschluss | 0 |
| 0x80000A | Zentralverriegelung Leitungsunterbrechung | 0 |
| 0x80000B | Zentralverriegelung Kurzschluss | 0 |
| 0x80000C | Zentralverriegelung Ueberlast | 0 |
| 0x800015 | Fahrzeugbatterie falsch gepolt | 0 |
| 0x800020 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x800021 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x800022 | Codierung : Codiersignaturfehler | 0 |
| 0x800023 | Codierung : falsches Fahrzeug | 0 |
| 0x800024 | Codierung : unplausible Daten während Transaktion | 0 |
| 0x800025 | Leitungsunterbrechung Transformatorkreis primärseitig | 0 |
| 0x800026 | Kurzschluss Transformatorkreis primärseitig | 0 |
| 0x800027 | Leitungsunterbrechung Transformatorkreis sekundärseitig | 0 |
| 0x800028 | Kurzschluss Transformatorkreis sekundärseitig | 0 |
| 0x800029 | Alarm | 0 |
| 0x80002B | DWA Batterie Überspannung | 0 |
| 0x80002D | Spannungsversorgung Schaltkreis defekt | 0 |
| 0x80002E | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x80002F | NVM_E_READ_ALL_FAILED | 0 |
| 0x800030 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x800031 | NVM_E_ERASE_FAILED | 0 |
| 0x800032 | NVM_E_CONTROL_FAILED | 0 |
| 0x800033 | NVM_E_READ_FAILED | 0 |
| 0x800034 | NVM_E_WRITE_FAILED | 0 |
| 0xD9441C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD94424 | CAN AE DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD94426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD9442A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD94436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD9445F | CAN Bus Off | 1 |
| 0xD94BFF | DM Test Com | 1 |
| 0xD9541C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD95424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD95426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD9542A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD95436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x001001 | DM_EVENT_ZEITBOSCHAFT_TIMEOUT | 0 |
| 0x800007 | SEK Ueberspannung Batterie | 1 |
| 0x80000C | SEK Unterspannung Batterie | 1 |
| 0x800038 | DEM_EVENT_DRIVER_INHIBIT_SENSORS | 0 |
| 0x800039 | DM_Queue_FULL | 0 |
| 0x80003A | DM_Queue_DELETED | 0 |
| 0x80003B | DEM_EVENT_RC_UNAUTHORISED_ID | 0 |
| 0x80003C | DEM_EVENT_RC_ROLLING_CODE_OVER | 0 |
| 0x80003D | DEM_EVENT_RC_WRONG_APPL_CMD_LEN_RECEIVED | 0 |
| 0x80003E | DEM_EVENT_RC_WRONG_LEARN_CMD_LEN_RECEIVED | 0 |
| 0x80003F | DEM_EVENT_RC_WRONG_LEARN_CMD_ID_RECEIVED | 0 |
| 0x800040 | DEM_EVENT_RC_ROLLING_CODE_EQUAL | 0 |
| 0x800041 | DEM_EVENT_RC_ROLLING_CODE_MINOR | 0 |
| 0x800042 | DEM_EVENT_RC_CHK_ERR_SYNC1 | 0 |
| 0x800043 | DEM_EVENT_RC_CHK_ERR_SYNC2 | 0 |
| 0x800044 | DEM_EVENT_RC_MAC_ERROR | 0 |
| 0x800045 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x800046 | DEM_EVENT_2A2_MISSING_5_TIMES | 0 |
| 0x800047 | DEM_EVENT_130_MISSING_5_TIMES | 0 |
| 0x800048 | DEM_EVENT_10C_MISSING_5_TIMES | 0 |
| 0x800049 | DEM_EVENT_2A8_MISSING_5_TIMES | 0 |
| 0xD9441D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD94425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD9442B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD94437 | SEK_CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010: Zeitüberschreitung | 0 |
| 0xD9541D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD95425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD9542B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD95437 | SEK_CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_ALARM_SPEICHER_1 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Erster Eintrag des Alarm Speichers |
| STAT_DWA_ALARM_SPEICHER_2 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Zweiter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_3 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Dritter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_4 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Vierter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_5 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Fünfter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_6 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Sechster Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_7 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Siebenter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_8 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Achter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_9 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Neunter Eintrag des Alarmspeichers |
| STAT_DWA_ALARM_SPEICHER_10 | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Zehnter Eintrag des Alarmspeichers |

### RES_0X4638_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_PORF_RESETS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power On Resets (HW Bit PORF gesetzt) seit dem letzten Löschvorgang (wird durch Systemreset nicht beeinflusst) |
| STAT_ANZAHL_LVRF_RESETS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Unterspannung Resets (HW Bit LVRF gesetzt) seit dem letzten Löschvorgang (wird durch Systemreset nicht beeinflusst) |
| STAT_ANZAHL_ILAF_RESETS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl unerlaubter Adresszugriff Resets (HW Bit ILAF gesetzt) seit dem letzten Löschvorgang (wird durch Systemreset nicht beeinflusst) |
| STAT_ANZAHL_SONSTIGE_RESETS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl sonstiger Resets seit dem letzten Löschvorgang |

### RES_0X463A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_ID_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Software ID Byte 2 |
| STAT_SW_ID_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Software ID Byte 1 |
| STAT_SW_ID_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Software ID Byte 0 |

### RES_0X463B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_ERGEBNIS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis 1 des Produktionstests |
| STAT_TEST_ERGEBNIS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis 2 des Produktionstests |
| STAT_TEST_ERGEBNIS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis 3 des Produktionstests |
| STAT_TEST_ERGEBNIS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis 4 des Produktionstests |
| STAT_TEST_ERGEBNIS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis 5 des Produktionstests |

### RES_0X463F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_BYTE_YY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsjahr z.B.  09 (2009) |
| STAT_DATUM_BYTE_MM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsmonat |
| STAT_DATUM_BYTE_DD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionstag |
| STAT_DATUM_BYTE_RESERVE0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservebyte 0 |
| STAT_DATUM_BYTE_RESERVE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservebyte 1 |

### RES_0X4641_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BESTELLNR_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsbestellnummer Byte 0 |
| STAT_BESTELLNR_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsbestellnummer Byte 1 |
| STAT_BESTELLNR_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsbestellnummer Byte 2 |

### RES_0XB040_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SCHAERFEN_MR | - | - | + | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: DWA entschärft; 1: DWA geschärft (im SG-Nachlauf) |

### RES_0XB041_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SELBSTTEST_MR | - | - | + | 0-n | - | signed char | - | TAB_MR_DWA_SELBSTTEST | 1.0 | 1.0 | 0.0 | Ergebnis des Selbsttest |

### RES_0XB042_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SIRENE_MR | - | - | + | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Sirene ein = 1, aus = 0 |

### RES_0XB046_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNB_ID_WERT | - | - | + | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID der aktiven Fernbedienung |
| STAT_FERNB_TASTE | - | - | + | 0-n | - | unsigned char | - | TAB_MR_DWA_FERNB_TASTE | 1.0 | 1.0 | 0.0 | Gedrückte Taste der aktiven Fernbedienung |
| STAT_FERNB_ANZAHL_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angelernten Fernbedienungen |

### RES_0XE0C1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INT_BATTERIE_MR | 0-n | - | signed char | - | TAB_MR_INT_BATTERIE | 1.0 | 1.0 | 0.0 | DWA: Tabelle gibt Beurteilung der internen Batterie-Status wieder |
| STAT_INT_BATTERIE_SPANNUNG_MR_WERT | Volt | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung der internen Batterie der Sirene in der DWA |

### RES_0XE0C2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEIGUNG_ZUSTAND_MR | 0-n | - | unsigned char | - | TAB_MR_NEIGUNGSSENSOR | 1.0 | 1.0 | 0.0 | Aktueller Zustand des Neigungssensors |
| STAT_NEIGUNG_X_ASOLUT_MR_WERT | Grad | - | signed int | - | - | 1.0 | 10.0 | 0.0 | absoluter bzw. linearer Neigungswinkel um die X-Achse in Grad, Bereich von -45 Grad bis +45 Grad |
| STAT_NEIGUNG_Y_ASOLUT_MR_WERT | Grad | - | signed int | - | - | 1.0 | 10.0 | 0.0 | absoluter bzw. linearer Neigungswinkel um die Y-Achse in Grad, Bereich von -45 Grad bis +45 Grad |
| STAT_NEIGUNG_Z_ASOLUT_MR_WERT | Grad | - | signed int | - | - | 1.0 | 10.0 | 0.0 | absoluter bzw. linearer Neigungswinkel um die Z-Achse in Grad, Bereich von -45 Grad bis +45 Grad |
| STAT_NEIGUNG_X_RELATIV_MR_WERT | Grad | - | signed char | - | - | 1.0 | 10.0 | 0.0 | relativer Neigungswinkel um die X-Achse in Grad, Bereich von -12,7 Grad bis +12,7 Grad |
| STAT_NEIGUNG_Y_RELATIV_MR_WERT | Grad | - | signed char | - | - | 1.0 | 10.0 | 0.0 | relativer Neigungswinkel um die Y-Achse in Grad, Bereich von -12,7 Grad bis +12,7 Grad |
| STAT_NEIGUNG_Z_RELATIV_MR_WERT | Grad | - | signed char | - | - | 1.0 | 10.0 | 0.0 | relativer Neigungswinkel um die Z-Achse in Grad, Bereich von -12,7 Grad bis +12,7 Grad |

### RES_0XE0C5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNBEDIENUNG_A_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fernbedienung Taste A ein/aus remote control button A on/off |
| STAT_FERNBEDIENUNG_B_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fernbedienung Taste B ein/aus remote control button B on/off |
| STAT_FERNB_ANZ_MR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angelernten Fernbedienungen |
| STAT_FERNB_CODE_MR_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den Code der Fernbedienung zurück |

### RES_0XE0C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_ALARM_MR | 0-n | - | unsigned char | - | TAB_MR_DWA_ALARMS | 1.0 | 1.0 | 0.0 | Grund des letzten Alarms |
| STAT_DWA_ANZ_AALARMS_MR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme mit interner Batterie |

### RES_0XE0C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Zentralverriegelung zu = 1, auf = 0 |
| STAT_ZV_TASTER_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Taster Zentralverriegelung ein = 1, aus = 0 |
| STAT_ZV_STROM_WERT | mA | - | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Mittelwert der letzten Strommessung |

### RES_0XE110_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORFELD_BEL_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Vorfeldbeleuchtung; 0 = aus; 1 = ein |
| STAT_VORFELD_BEL_STROM_WERT | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der letzten Strommessung |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DWA_SCHAERFEN_MR | 0xB040 | - | DWA_SCHAERFEN Motorrad | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB040_R | RES_0xB040_R |
| DWA_SELBSTTEST_MR | 0xB041 | - | Selbsttest der DWA | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB041_R |
| DWA_SIRENE_MR | 0xB042 | - | Ansteuern der DWA-Sirene | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB042_R |
| DWA_INT_BATTERIE_RESET_MR | 0xB043 | - | setzt die Ladungsberechnung der internen Batterie der DWA zurück | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_FERNB_ANLERNEN_MR | 0xB044 | - | Anlernen einer Fernbedienung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_FERNB_TEST_MR | 0xB046 | - | Fernbedienungstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB046_R |
| ZV_PWM_MR | 0xE0BF | - | PWM-Werte der Zentralverriegelung | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE0BF_D | - |
| DWA_INTERN_MR | 0xE0C0 | STAT_DWA_INTERN_MR | interner DWA-Status | 0-n | - | - | unsigned char | TAB_MR_DWA_INTERN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_INT_BATTERIE_MR | 0xE0C1 | - | Status und Spannungswert der internen Sirenen-Batterie der DWA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0C1_D |
| DWA_NEIGUNG_MR | 0xE0C2 | - | Neigung Motorrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0C2_D |
| DWA_TEMPERATUR_MR | 0xE0C4 | STAT_DWA_TEMPERATUR_MR_WERT | Interne Temperatur der DWA | °C | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| DWA_FERNBEDIENUNG_MR | 0xE0C5 | - | DWA Fernbedienung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0C5_D |
| DWA_ALARM_MR | 0xE0C8 | - | DWA Alarm Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0C8_D |
| ZV_STATUS_MR | 0xE0C9 | - | Status Zentralverriegelung Motorrad | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0C9_D | RES_0xE0C9_D |
| DWA_DIAGNOSE_NEIGUNGSS_MR | 0xE0CA | - | Diagnosefunktionen des Neigungssensors ein und ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE0CA_D | - |
| VORFELD_BEL_MR | 0xE110 | - | Vorfeldbeleuchtung Motorrad  Illumination | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE110_D | RES_0xE110_D |
| VORFELD_BEL_PWM_MR | 0xE111 | - | PWM für Vorfeldbeleuchtung | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE111_D | - |
| WECKLEITUNG_DIGITAL_MR | 0xE11C | STAT_WECKLEITUNG_DIGITAL_EIN | aktueller Zustand der  Weckleitung | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| DWA_ALARM_SPEICHER_MR | 0x4004 | - | Zugriff auf den DWA Alarm Speicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| DWA_ALARM_SPEICHER_LOESCHEN_MR | 0x4006 | - | Löscht den Alarmspeicher | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006_D | - |
| DWA_ANZAHL_RESETS_MR | 0x4638 | - | Anzahl der Resets | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4638_D |
| DWA_ANZAHL_RESETS_LOESCHEN_MR | 0x4639 | - | Löscht die Einträge der Resetsanzahl | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4639_D | - |
| DWA_SW_ID_MR | 0x463A | - | Cans2 Software ID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x463A_D |
| DWA_TEST_ERGEBNIS_MR | 0x463B | - | Ergebnisse des Produktionstests | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x463B_D |
| DWA_TEST_ERGEBNIS_SCHREIBEN_MR | 0x463C | - | Schreibt die Ergebnisse des Produktionstests | - | - | - | - | - | - | - | - | - | 2E | ARG_0x463C_D | - |
| DWA_SG_PROD_DATUM_MR | 0x463F | - | Produktionsdatum des DWA Steuergeräts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x463F_D |
| DWA_SG_PROD_DATUM_SCHREIBEN_MR | 0x4640 | - | Schreibt das Produktionsdatum des Steuergeräts | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4640_D | - |
| DWA_BESTELLNR_MR | 0x4641 | - | DWA Bestellnummer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4641_D |
| DWA_BESTELLNR_SCHREIBEN_MR | 0x4642 | - | Schreibt die DWA Bestellnummer ins NVRAM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4642_D | - |
| DWA_SG_SERIENNR_SCHREIBEN_MR | 0x4645 | - | Steuergeräte-Seriennummer schreiben. Wird über den Standardjob SERIENNUMMER_LESEN ausgelesen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4645_D | - |
| DWA_CKM_LOESCHEN_MR | 0x4646 | - | Car Key Management zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4646_D | - |
| DWA_SVK_HISTORY_SCHREIBEN_MR | 0x464D | - | Schreibt die SVK History | - | - | - | - | - | - | - | - | - | 2E | ARG_0x464D_D | - |
| DWA_TON_MR | 0x464E | - | Stellt den Typ des DWA Warntons ein | - | - | - | - | - | - | - | - | - | 2E | ARG_0x464E_D | - |
| DWA_PIEZO_SEC_ST_INH_MR | 0x464F | - | Aktiviert/Deaktiviert Piezo Secondary ST | - | - | - | - | - | - | - | - | - | 2E | ARG_0x464F_D | - |
| DWA_EXT_BATT_MR | 0x4650 | - | Aktiviert/deaktiviert den VBAT Eingang | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4650_D | - |
| DWA_FEHLER_SPEICHERN_MR | 0x4652 | - | Speichern aktuell vorhandener Fehler | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4652_D | - |

### TAB_ALARM_WERT_TO_TEXT

| WERT | TEXT |
| --- | --- |
| 0x70 | Spannungsversorgung Leitungsunterbrechnung alarm |
| 0xB1 | Ungueltig Klemme15 alarm |
| 0xD0 | Tilt Sensor X+ alarm |
| 0xD1 | Tilt Sensor X- alarm |
| 0xD2 | Tilt Sensor Y+ alarm |
| 0xD4 | Tilt Sensor Y- alarm |
| 0xD8 | Tilt Sensor Z+ alarm |
| 0xE0 | Tilt Sensor Z- alarm |

### TAB_MR_ALARM_SPEICHER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Alarm gespeichert |
| 0x01 | ungültiger Schlüssel |
| 0x02 | Bewegungssensor X-Achse |
| 0x03 | Bewegungssensor Y-Achse |
| 0x04 | Batterie entfernt |
| 0x05 | Bewegungssensor Z-Achse |
| 0xFF | ungültig |

### TAB_MR_DWA_ALARMS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Alarm gespeichert |
| 0x01 | ungültiger Schlüssel |
| 0x02 | Bewegungssensor X-Achse |
| 0x03 | Bewegungssensor Y-Achse |
| 0x04 | Batterie entfernt |
| 0x05 | Bewegungssensor Z-Achse |
| 0xFF | ungültig |

### TAB_MR_DWA_FERNB_TASTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Taste A |
| 0x01 | Taste B |
| 0x02 | Unplausibel |
| 0xFF | Ungültig |

### TAB_MR_DWA_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | DWA entschärft |
| 0x01 | DWA wird entschärft |
| 0x02 | DWA in Schärfung |
| 0x03 | DWA geschärft |
| 0x04 | DWA geschärft - Neigungssensor nicht aktiv |
| 0x05 | DWA Alarm |
| 0x06 | DWA Pause nach Alarm |
| 0x07 | DWA Selbsttest aktiv |
| 0x08 | Fernbedienung wird angelernt |
| 0x09 | Individualisierung über Fernbedienung |
| 0xFF | unbekannter Status |

### TAB_MR_DWA_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Selbsttest n.i.O. |
| 0x01 | Selbsttest i.O. |
| 0x02 | Selbsttest läuft |
| 0xFF | ungültig |

### TAB_MR_DWA_SUMMER

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Änderung |
| 0x01 | Summer deaktiviert |
| 0x02 | Summer aktiviert |
| 0x03 | Standard |

### TAB_MR_DWA_TON

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ändern |
| 0x01 | Ton ECE |
| 0x02 | Ton US |
| 0x03 | Standard-Ton |

### TAB_MR_INT_BATTERIE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Status vorhanden |
| 0x01 | Batterie leer |
| 0x02 | Batterie gut |
| 0x03 | Batterie neu |
| 0xFF | ungültig |

### TAB_MR_NEIGUNGSSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Wird geschärft |
| 0x01 | Geschärft |
| 0x02 | Alarm X-Achse |
| 0x03 | Alarm Y-Achse |
| 0xFF | Ungültig |
