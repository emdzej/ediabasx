# tfm_i1.prg

## General

|  |  |
| --- | --- |
| File | tfm_i1.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 62 |
| Origin | BMW EK-532 Günther |
| Revision | 6.004 |
| Author | IAV-GMBH EA-722 Perez |
| ECU Comment | Neue SGBD: neue DID:0xE2E0, 0xE2E1. Kommentare präzisiert: 0xD2F5, 0xD2F4 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Tank Funktions Modul |  |  |
| ORIGIN | string | BMW EK-532 Günther |  |  |
| REVISION | string | 6.004 |  |  |
| AUTHOR | string | IAV-GMBH EA-722 Perez |  |  |
| COMMENT | string | Neue SGBD: neue DID:0xE2E0, 0xE2E1. Kommentare präzisiert: 0xD2F5, 0xD2F4 |  |  |
| PACKAGE | string | 1.984 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers UDS  : $85 ControlDTCSetting UDS  : $?? Sperren ($02) / Freigabe ($01) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT Default: "ja" |

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

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)] 35up: LH Diagnosemaster V11 oder höher pre35up: LH Diagnosemaster V6 - V9

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

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

### STATUS_SW_VERSION

HELBAKO Software Version

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
| 0x0000C3 | Panasonic |
| 0x0000C4 | Alpitronic GmbH |
| 0x0000C5 | Telemotive AG |
| 0x0000C6 | Garmin |
| 0x0000C7 | RSG Elotech Elektronische Baugruppen GmbH |
| 0x0000C8 | KEBODA TECHNOLOGY CORP |
| 0x0000C9 | Aptiv |
| 0x0000CA | SEG Automotive Germany GmbH |
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
| 0x44 | ECURSU | ECURsuSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0x61 | ECUSUPSPEC | ECUSupplierSpecificSession |
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
| 0x3B30 | Elektrische Wasserpumpe 22 | 1 |
| 0x3B40 | Elektrische Wasserpumpe 23 | 1 |
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
| 0x6700 | Hochdruck- Temperatursensor 1 | 1 |
| 0x6710 | Niederdruck- Temperatursensor 1 | 1 |
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
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
| 0x5E4F | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer oben | 1 |
| 0x5E50 | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer unten | 1 |
| 0x5E51 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne oben | 1 |
| 0x5E52 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne unten | 1 |
| 0x5E53 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten oben | 1 |
| 0x5E54 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten unten | 1 |
| 0x5E55 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne oben | 1 |
| 0x5E56 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne unten | 1 |
| 0x5E57 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten oben | 1 |
| 0x5E58 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten unten | 1 |
| 0x5E59 | Innenbeleuchtung Hochtöner Fahrertür vorne | 1 |
| 0x5E5A | Innenbeleuchtung Hochtöner Beifahrertür vorne | 1 |
| 0x5E5B | Innenbeleuchtung Mitteltöner Fahrertür vorne | 1 |
| 0x5E5C | Innenbeleuchtung Mitteltöner Beifahrertür vorne | 1 |
| 0x5E5D | Innenbeleuchtung Mitteltöner Fahrertür hinten | 1 |
| 0x5E5E | Innenbeleuchtung Mitteltöner Beifahrertür hinten | 1 |
| 0x5E5F | Innenbeleuchtung Centerspeaker | 1 |
| 0x5E60 | Innenbeleuchtung Fireplace Mittelkonsole vorne | 1 |
| 0x5E61 | Innenbeleuchtung Fireplace Mittelkonsole hinten | 1 |
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
| 0x7A40 | Elektrische Getriebeoelpumpe | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0x7C00 | elektrischer Durchlaufheizer Hochvoltspeicher | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
| 0xF070 | Motorrad Scheinwerfer | 1 |
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

### ARG_0XA0F0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = NICHT_AKTIV = unbestromt, d. h. TAV geoeffnet; 0x01 = AKTIV = bestromt, d.h. TAV geschlossen; |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit für das Aufrechterhalten der Diagnoseansteuerung |

### ARG_0XA0F1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x01 = AKTIV = bestromt, d.h. AIV/FTIV geoeffnet; 0x00 = NICHT_AKTIV = unbestromt, d. h. AIV/FTIV geschlossen |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit für das Aufrechterhalten der Diagnoseansteuerung |

### ARG_0XA0F2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEZUGSSENSOR | + | - | 0-n | high | unsigned char | - | TAB_STEUERN_SENSORABGLEICH | - | - | - | - | - | Steuern / Starten Sensorabgleich Tankdrucksensor zu Drucksensor (R)DME |

### ARG_0XA0F3_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERSORGUNGSZUSTAND | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 AUS; 0x01 EIN |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeitdauer Ansteuerung Spannungsversorgung Tankdrucksensor für das Aufrechterhalten des Diagnosezustands, danach Rückkehr in normalen Betriebszustand |

### ARG_0XA0F4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit für das Aufrechterhalten der Diagnoseansteuerung (max. 20s) |
| RICHTUNG | + | - | 0-n | high | unsigned char | - | TAB_STEUERN_U_TANKKLAPPENVERRIEGELUNG | - | - | - | - | - | Ansteuerung der Tankklappenverriegelung mit kontinuierlicher Aufrechterhaltung der Bestromung (mit  Haltestrom ) |

### ARG_0XD2F2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_STEUERN_TANKKLAPPENRIEGEL | - | - | - | - | - | Richtung in der die Tankdeckelverriegelung gefahren werden soll; 0x00 = Verriegelung öffnen/geöffnet; 0x01 = Verriegelung schließen/geschlossen |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit für das Aufrechterhalten des Diagnosezustands, danach Rückkehr in normalen Betriebszustand 0-255 Sekunden |

### ARG_0XD2FF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_RUECK_TAV_SICHER | - | - | - | - | - | 1 = Ruecksetzen; 0 = keine Aktion |

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
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x021D00 | Energiesparmode aktiv | 0 | - |
| 0x02FF1D | Dummy Fehler im Komponentenbereich | 1 | - |
| 0x806000 | Stellantrieb für Tankklappe: Kurzschluss nach Plus | 0 | - |
| 0x806001 | Stellantrieb für Tankklappe: Kurzschluss nach Masse | 0 | - |
| 0x806002 | Stellantrieb für Tankklappe: Kurzschluss der Leitungen untereinander | 0 | - |
| 0x806003 | Stellantrieb für Tankklappe: Unterbrechung | 0 | - |
| 0x806004 | Tankabsperrventil (TAV): Kurzschluss nach Plus | 0 | - |
| 0x806005 | Tankabsperrventil (TAV): Unterbrechung | 0 | - |
| 0x806006 | Tankabsperrventil (TAV): Kurzschluss nach Masse | 0 | - |
| 0x806007 | Tankabsperrventil (TAV): Kurzschluss der Leitungen untereinander | 0 | - |
| 0x806008 | Atmosphärenisolationsventil (AIV/FTIV): Kurzschluss nach Plus | 0 | - |
| 0x806009 | Atmosphärenisolationsventil (AIV/FTIV): Unterbrechung | 0 | - |
| 0x80600A | Atmosphärenisolationsventil (AIV/FTIV): Kurzschluss nach Masse | 0 | - |
| 0x80600B | Atmosphärenisolationsventil (AIV/FTIV): Kurzschluss der Leitungen untereinander | 0 | - |
| 0x80600C | Taster für Betanken, Versorgungsleitung: Kurzschluss nach Plus | 0 | - |
| 0x80600D | Taster für Betanken, Versorgungsleitung: Kurzschluss nach Masse | 0 | - |
| 0x80600E | Taster für Betanken: Unterbrechung oder Signalleitung Kurzschluss nach Plus | 0 | - |
| 0x80600F | Taster für Betanken: Taster klemmt geschlossen | 0 | - |
| 0x806010 | Taster für Betanken: Taster klemmt geöffnet | 0 | - |
| 0x806011 | Tankklappensensor, Signalleitung: Kurzschluss nach Plus oder Versorgungsleitung | 0 | - |
| 0x806012 | Tankklappensensor, Signalleitung: Unterbrechung oder Kurzschluss nach Masse | 0 | - |
| 0x806013 | Tankklappensensor, Versorgungsleitung: Kurzschluss nach Plus | 0 | - |
| 0x806014 | Tankklappensensor, Versorgungsleitung: Kurzschluss nach Masse | 0 | - |
| 0x806015 | Tankklappensensor, Signalwert: Unplausibler Wert - klemmt offen | 0 | - |
| 0x806016 | Tankdrucksensor, Versorgungsleitung: Kurzschluss nach Plus | 0 | - |
| 0x806017 | Tankdrucksensor, Versorgungsleitung: Kurzschluss nach Masse | 0 | - |
| 0x806018 | Tankdrucksensor: Maximaler zulässiger Versorgungsstrom überschritten | 0 | - |
| 0x806019 | Tankdrucksensor, Signalwert: festliegend | 0 | - |
| 0x80601A | Tankdrucksensor: Kommunikationsfehler | 0 | - |
| 0x80601B | Tankdrucksensor: Falscher Sensor verbaut | 0 | - |
| 0x80601C | Tankdrucksensor: Bitfehler oder Checksumme ungültig | 0 | - |
| 0x80601D | Tankdrucksensor, Signalwert: Unplausibel oder kein Druckabbau im Tank nach Ventillöffnung | 0 | - |
| 0x80601F | Tankdrucksensor, absoluter Druckwert: oberhalb des messbaren Wertebereiches | 0 | - |
| 0x806020 | Tankdrucksensor: Temperatursignal unplausibler Offset | 0 | - |
| 0x806021 | Atmosphärenisolationsventil (AIV): klemmt geschlossen | 0 | - |
| 0x806022 | Tankabsperrventil (TAV): klemmt geschlossen | 0 | - |
| 0x806023 | Interner Steuergerätefehler | 0 | - |
| 0x806024 | Umgebungsdruckmesswert (R)DME: nicht plausibel | 1 | - |
| 0x806025 | Atmosphärenisolationsventil (AIV): klemmt offen | 0 | - |
| 0x806026 | Tankabsperrventil (TAV): klemmt offen | 0 | - |
| 0x806027 | Tankentlüftungssystem: sehr kleines Leck entdeckt | 0 | - |
| 0x806028 | Tankfunktionsmodul: dauerkurzschlussgeschädigt | 0 | - |
| 0x806029 | Tankdrucksensor, absoluter Druckwert: unterhalb des messbaren Wertebereiches | 0 | - |
| 0x80602A | Temperatur im Kraftstofftank oberhalb des messbaren Wertebereichs | 0 | - |
| 0x80602B | Temperatur im Kraftstofftank unterhalb des messbaren Wertebereichs | 0 | - |
| 0x80602C | Unterspannung erkannt | 1 | - |
| 0x80602D | Überspannung erkannt | 1 | - |
| 0x80602E | Tankklappensensor, Signalwert: Unplausibler Wert - klemmt geschlossen | 0 | - |
| 0x80602F | Stellantrieb für Tankklappe: klemmt offen | 0 | - |
| 0x806030 | Stellantrieb für Tankklappe: klemmt geschlossen | 0 | - |
| 0x806031 | Zeitgeber Tankfunktionsmodul: Fehlfunktion | 0 | - |
| 0x806032 | Tankdrucksensor: Temperatursignal unplausible Drift | 0 | - |
| 0x806033 | Taster für Betanken, Signalwert: Unplausibler Wert | 0 | - |
| 0x806034 | Tankabsperrventil (TAV) oder Drucktanksystem: abgesicherter Modus | 0 | - |
| 0x806035 | Tankklappensensor, Signalwert: elektrisch ungültig | 0 | - |
| 0x806036 | Tankdrucksensor: In diesem Fahrzeug noch nicht abgeglichen | 1 | - |
| 0xD0440A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xD0447C | LE-CAN Control Module Bus OFF | 0 | - |
| 0xD04BFF | Dummy-Fehler im Netzwerkbereich | 1 | - |
| 0xD04C1E | Sub-Bus ausgefallen / Tankdrucksensor antwortet nicht | 0 | - |
| 0xD05400 | Botschaft Außentemperatur (2CAh): Ausfall | 0 | - |
| 0xD05401 | Botschaft Daten Ansteuerung Drucktank (2A1h): Ausfall | 0 | - |
| 0xD05402 | Botschaft Daten Antriebsstrang 1 (3FBh) oder Daten Langzeit Verbrennungsmotor Range Extender (2B0h): Ausfall | 0 | - |
| 0xD05403 | Botschaft Geschwindigkeit Fahrzeug (1A1h): Ausfall | 0 | - |
| 0xD05404 | Botschaft Ist Daten Langzeit Verbrennungsmotor Range Extender (2B0h): Ausfall | 0 | - |
| 0xD05405 | Botschaft Kilometerstand/Reichweite (330h): Ausfall | 0 | - |
| 0xD05406 | Botschaft Klemmen (12Fh): Ausfall | 0 | - |
| 0xD05407 | Botschaft Nachlaufzeit Stromversorgung (3BEh): Ausfall | 0 | - |
| 0xD05408 | Botschaft Relativzeit BN2020 (328h): Ausfall | 0 | - |
| 0xD05409 | Botschaft Drehmoment Kurbelwelle 1 (0A5h): Ausfall | 0 | - |
| 0xD0540A | Botschaft ZV und Klappenzustand (2FCh): Ausfall | 0 | - |
| 0xD0540B | Botschaft Daten Antriebsstrang 2 (3F9h): Ausfall | 0 | - |
| 0xD0540C | Botschaft Ist Daten Verbrennungsmotor Range Extender (0A9h): Ausfall | 0 | - |
| 0xD0540D | Botschaft Status Verbrauch Kraftstoff Motor (2C4h): Ausfall | 0 | - |
| 0xD0540E | Botschaft Steuerung Diagnose OBD Motorsteuerung (3D2h): Ausfall | 0 | - |
| 0xD0540F | Botschaft Diagnose OBD Motor (397h): Ausfall | 1 | - |
| 0xD05410 | Botschaft Fahrgestellnummer (380h): Ausfall | 0 | - |
| 0xD05411 | Botschaft Fahrzeugzustand (3A0h): Ausfall | 0 | - |
| 0xD05412 | Botschaft Powermanagement Verbrauchersteuerung (3B3h): Ausfall | 0 | - |
| 0xD05413 | Botschaft Längsbeschleunigung Schwerpunkt (199h): Ausfall | 1 | - |
| 0xD05414 | Botschaft Querbeschleunigung Schwerpunkt (19Ah): Ausfall | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4500 | TANKDRUCK_ABSOLUT | hPa | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4501 | TANKDRUCK_RELATIV | hPa | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4502 | TANKINNENTEMPERATUR | °C | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4503 | STREUBREITE_TANKINNENDRUCK | hPa | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4504 | LECKDIAGNOSE_DELTA_P_TANK | hPa | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4505 | TANKFUELLSTAND | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4506 | ENTNAHME_KRAFTSTOFF | l | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4507 | BETRIEBSSPANNUNG TFM | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4508 | BETAETIGUNGSZEIT_TASTER_TANKEN | s | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4509 | ZAEHLER_FAHRTEN_TKS_OFFEN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x450A | ZAEHLER_TKS_OEFFNUNGEN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x450B | RUHEDAUER_DRUCKTANK | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x450C | BETRIEBSDAUER_DRUCKTANK | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x450F | SAUGROHRDRUCK_DRUCKTANK | hPa | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4510 | Durchsatz TEV | kg/h | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4511 | Ladezustand Hochvoltspeicher | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x4512 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 0.0156 | 1.0 | 0.0 |
| 0xD2F6 | KOMPENSATIONSWERT_DRUCK_TANK_ZU_DME | hPa | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0xD2F9 | UMGEBUNGSDRUCK_ABSOLUT | hPa | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2FD | STATUS_TEV | 0-n | High | 0xFF | TAB_STATUS_TEV | - | - | - |
| 0xD2FE | AUSSENTEMPERATUR_FZG_TFM | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x1D0001 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 | - |
| 0x1D0002 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0x1D0003 | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0x1D0004 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 | - |
| 0x1D0006 | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x1D0007 | NVM_E_REQ_FAILED | 0 | - |
| 0x1D0008 | WDGM_E_SET_MODE | 0 | - |
| 0x1D0009 | CANNM_E_INIT_FAILED | 0 | - |
| 0x1D000A | FLS_E_READ_FAILED | 0 | - |
| 0x1D000B | CANNM_E_CANIF_TRANSMIT_ERROR | 0 | - |
| 0x1D000C | FLS_E_ERASE_FAILED | 0 | - |
| 0x1D000D | IPDUM_E_TRANSMIT_FAILED | 0 | - |
| 0x1D000E | LINIF_E_NC_NO_RESPONSE | 0 | - |
| 0x1D000F | FLS_E_WRITE_FAILED | 0 | - |
| 0x1D0011 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x1D0012 | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x1D0013 | CAN_E_TIMEOUT | 0 | - |
| 0x1D0014 | CANIF_E_FULL_TX_BUFFER | 0 | - |
| 0x1D0015 | WDGM_E_ALIVE_SUPERVISION | 0 | - |
| 0x1D0016 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x1D0017 | CANIF_E_STOPPED | 0 | - |
| 0x1D0018 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x1D0019 | LINIF_E_RESPONSE | 0 | - |
| 0x1D001A | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x1D001B | CNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x1D001C | CANTP_E_COMM | 0 | - |
| 0x1D0024 | FEE_E_STARTUP_FAILED | 0 | - |
| 0x1D0028 | LINIF_E_CHANNEL_0_SLAVE_PT_TANK | 0 | - |
| 0x1D0029 | LINSM_E_CONFIRMATION_TIMEOUT | 0 | - |
| 0x1D002F | FEE_E_READ_FAILED | 0 | - |
| 0x1D0030 | FEE_E_WRITE_FAILED | 0 | - |
| 0x1D0040 | Watchdog-Reset | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4500 | TANKDRUCK_ABSOLUT | hPa | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4501 | TANKDRUCK_RELATIV | hPa | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4502 | TANKINNENTEMPERATUR | °C | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4503 | STREUBREITE_TANKINNENDRUCK | hPa | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4504 | LECKDIAGNOSE_DELTA_P_TANK | hPa | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4505 | TANKFUELLSTAND | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4506 | ENTNAHME_KRAFTSTOFF | l | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4507 | BETRIEBSSPANNUNG TFM | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4508 | BETAETIGUNGSZEIT_TASTER_TANKEN | s | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4509 | ZAEHLER_FAHRTEN_TKS_OFFEN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x450A | ZAEHLER_TKS_OEFFNUNGEN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x450B | RUHEDAUER_DRUCKTANK | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x450C | BETRIEBSDAUER_DRUCKTANK | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x450F | SAUGROHRDRUCK_DRUCKTANK | hPa | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4510 | Durchsatz TEV | kg/h | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4511 | Ladezustand Hochvoltspeicher | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x4512 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 0.0156 | 1.0 | 0.0 |
| 0xD2F6 | KOMPENSATIONSWERT_DRUCK_TANK_ZU_DME | hPa | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0xD2F9 | UMGEBUNGSDRUCK_ABSOLUT | hPa | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2FD | STATUS_TEV | 0-n | High | 0xFF | TAB_STATUS_TEV | - | - | - |
| 0xD2FE | AUSSENTEMPERATUR_FZG_TFM | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XA0F0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_TAV_STATUS_2 | - | - | - | Status Betriebszustand des TAV |

### RES_0XA0F1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AIV_FTIV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_AIV_FTIV_STATUS | - | - | - | Status Betriebszustand AIV bzw. FTIV |

### RES_0XA0F2_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_ABGLEICH_NR | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_SENSORABGLEICH | - | - | - | Rückmeldung Status Sensorabgleich |

### RES_0XA0F3_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSORGUNGSZUSTAND | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 AUS; 0x01 EIN |

### RES_0XA0F4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_TANKKLAPPENVERRIEGELUNG | - | - | + | 0-n | high | unsigned char | - | TAB_U_TANKKLAPPENVERRIEGELUNG | - | - | - | Status der Bestromung der Tankklappenverriegelung |

### RES_0XD2F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAV_NR | 0-n | high | unsigned char | - | TAB_TAV_STATUS | - | - | - | 0x00 = NICHT_AKTIV = unbestromt, d. h. TAV geoeffnet; 0x01 = AKTIV = bestromt, d.h. TAV geschlossen; 0x02 = TAV fehlerhaft; 0x03 = Fahrzeugtyp ohne TAV |
| STAT_AIV_FTIV_NR | 0-n | high | unsigned char | - | TAB_AIV_FTIV_STATUS | - | - | - | 0x00 = NICHT_AKTIV = unbestromt, d. h. AIV/FTIV geschlossen; 0x01 = AKTIV = bestromt, d.h. AIV/FTIV geoeffnet; 0x02 AIV-FTIV fehlerhaft |

### RES_0XD2F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKKLAPPENRIEGEL_NR | 0-n | high | unsigned char | - | TAB_STATUS_TANKKLAPPENRIEGEL | - | - | - | Status der Tankklappenverriegelung |

### RES_0XD2F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETANKUNGSTASTER_NR | 0-n | high | unsigned char | - | TAB_STAT_TASTER | - | - | - | Status des Betankungstasters: 0x00 = nicht gedrückt, 0x01 = gedrückt, 0x02 = Betankungstaster fehlerhaft |
| STAT_TANKKLAPPENSENSOR_NR | 0-n | high | unsigned char | - | TAB_STAT_TANKKLAPPE | - | - | - | Status des  Tankklappensensors: 0x00 = Tankklappe geöffnet, 0x01 = Tankklappe geschlossen, 0x02 = Tankklappensensor fehlerhaft |

### RES_0XD2F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNGSMOTOR_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 40.0 | 0.0 | aktueller Messwert Motorstrom |
| STAT_TANKKLAPPENSENSOR_U_SUPPLY_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert Versorgungsspannung Hallsensor Tankklappe |
| STAT_TANKKLAPPENSENSOR_I_SIGNAL_WERT | mA | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom des Hallsensor Tankklappe |
| STAT_TANKDRUCKSENSOR_U_SUPPLY_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert Versorgungsspannung Tankdrucksensor |
| STAT_BETANKUNGSTASTER_U_SUPPLY_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert Versorgungsspannung Taster Betankungswunsch |
| STAT_BETANKUNGSTASTER_U_SIGNAL_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert Spannung am Eingang Taster Betankungswunsch |
| STAT_TEMPERATURSENSOR_SG_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert Temperatursensor SG-intern.(0x7FFF: kein Sensor verbaut) |
| STAT_DRUCKSENSOR_SG_INTERN_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert Drucksensor SG-intern (derzeit im TFM nicht benutzt) |
| STAT_BETRIEBSSPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | aktueller Messwert der anliegenden Versorgungsspannung |

### RES_0XD2F5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANK_INNEN_TEMP_ROH_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | direkter physikalischer Messwert Tankinnentemperatur des pT-Sensors (nur TFM LIN) |
| STAT_TANK_INNEN_DRUCK_ROH_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | direkter physikalischer Messwert absoluter Tankinnendruck des pT-Sensors (nur TFM LIN) |

### RES_0XD2F8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKDRUCKSENSOR_HW_VERSION_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Hardwareversion Tankdrucksensor; Ausgabe in Format X.Y.Z entspricht Hauptversion.Unterversion.Patchversion kodiert in ASCII (0-9, A-F) |
| STAT_TANKDRUCKSENSOR_SW_VERSION_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Softwareversion Tankdrucksensor; Ausgabe in Format X.Y.Z entspricht Hauptversion.Unterversion.Patchversion kodiert in ASCII (0-9, A-F) |

### RES_0XD2FA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANK_INNEN_DRUCK_RELATIV_WERT | hPa | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller relativer Tankinnendruck |
| STAT_TANK_INNEN_DRUCK_STREUUNG_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Streubreite der Tankinnendruckmesswerte beim Stuck Check |
| STAT_TANK_INNEN_DRUCK_ABSOLUT_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | offsetkompensierter absoluter Tankinnendruckmesswert |
| STAT_TANK_INNEN_TEMP_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | offsetkompensierter Messwert Tankinnentemperatur des pT-Sensors |

### RES_0XD2FB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DELTA_P_TANK_LECKDIAGNOSE_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | festgestellte Druckveränderung auf Grund von Temperaturveränderung im Tank (DELTA_P_TANK) |
| STAT_P_TANK_MIN_LECKDIAGNOSE_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | minimaler Tankdruck während der Leckdiagnose (p_Tank_min) |
| STAT_P_TANK_MAX_LECKDIAGNOSE_WERT | hPa | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximaler Tankdruck während der Leckdiagnose (p_Tank_max) |
| STAT_T_TANK_MIN_LECKDIAGOSE_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | minimale Temperatur während der Leckdiagnose (T_Tank_min) |
| STAT_T_TANK_MAX_LECKDIAGOSE_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | maximale Temperatur während der Leckdiagnose (T_Tank_max) |

### RES_0XD2FC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUELLSTAND_TANK_WERT | l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Tankfüllstand |
| STAT_ENTNAHME_KRAFTSTOFF_TANK_WERT | l | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | entnommene Kraftstoffmenge seit letzter Tankklappenöffnung |

### RES_0XE2E0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANK_INNEN_TEMP_ROH_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | direkter physikalischer Messwert Tankinnentemperatur des pT-Sensors (nur TFM SENT) |
| STAT_TANK_INNEN_DRUCK_ROH_RELATIV_WERT | hPa | high | signed int | - | - | 1.0 | 10.0 | 0.0 | direkter physikalischer Messwert relativer Tankinnendruck des pT-Sensors (nur TFM SENT) |

### RES_0XE2E1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer pT-Sensor (nur TFM SENT) |
| STAT_HERSTELLERNUMMER_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Herstellernummer pT-Sensor (nur TFM SENT) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _TFM_TANK_INNEN_DRUCK_ABSOLUT | 0x4500 | STAT_TANK_INNEN_DRUCK_ABSOLUT_WERT | absoluter Tankinnendruck als UWB | hPa | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TFM_TANK_INNEN_DRUCK_RELATIV | 0x4501 | STAT_TANK_INNEN_DRUCK_RELATIV_WERT | relativer Tankinnendruck als UWB | hPa | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TFM_TANK_INNEN_TEMPERATUR | 0x4502 | STAT_TANK_INNEN_TEMP_WERT | abgeglichener Messwert Tankinnentemperatur des pT-Sensors | °C | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TFM_TANK_INNEN_DRUCK_STREUUNG | 0x4503 | STAT_TANK_INNEN_DRUCK_STREUUNG_WERT | Streubreite der Tankinnendruckmesswerte beim Stuck Check | hPa | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TFM_LECKDIAGNOSE_DRUCKVERAENDERUNG | 0x4504 | STAT_DELTA_P_TANK_LECKDIAGNOSE_WERT | festgestellte Druckveränderung auf Grund von Temperaturveränderung im Tank | hPa | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TFM_FUELLSTAND_TANK | 0x4505 | STAT_FUELLSTAND_TANK_WERT | aktueller Tankfüllstand | l | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _TFM_ENTNAHME_KRAFTSTOFF | 0x4506 | STAT_ENTNAHME_KRAFTSTOFF_TANK_WERT | entnommene Kraftstoffmenge seit letzter Tankklappenöffnung | l | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| _TFM_BETRIEBSSPANNUNG | 0x4507 | STAT_BETRIEBSSPANNUNG_WERT | aktueller Messwert der anliegenden Versorgungsspannung | V | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TFM_ZEIT_TBA_PLAUS | 0x4508 | STAT_ZEIT_TBA_PLAUS_WERT | Betätigungszeit des Taster Betankungsanforderung | s | TIMER_TBA_PLAUS | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _TFM_ZAEHLER_FAHRTEN_TKS_OFFEN | 0x4509 | STAT_ZAEHLER_FAHRTEN_TKS_OFFEN_WERT | Zähler der Fahrten mit offener Tankklappe | - | - | High | unsigned char | - | 1.0 | 1.0 | 1.0 | - | 22 | - | - |
| _TFM_ZAEHLER_TKS_OEFFNUNGEN | 0x450A | STAT_ZAEHLER_TKS_OEFFNUNGEN_WERT |  Zähler der Tankklappenöffnungen | - | ZAEHLER_TKS_OFFEN | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _TFM_RUHEDAUER_DRUCKTANK | 0x450B | STAT_RUHEDAUER_DRUCKTANK_WERT | vergangene Zeit seit letztem Eintritt in Busruhe (Systemzeitdifferenz) | s | TIMER_KALTSTART | High | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _TFM_BETRIEBSDAUER_DRUCKTANK | 0x450C | STAT_BETRIEBSDAUER_DRUCKTANK_WERT | Zeit seit Klemme 15 EIN | s | - | High | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _TFM_SAUGROHRDRUCK | 0x450F | STAT_SAUGROHRDRUCK_WERT | Relativer Druck im Saugrohr / im Spülluftpfad zur AKF-Entladung | hPa | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _TFM_DURCHSATZ_TEV | 0x4510 | STAT_DURCHSATZ_TEV_WERT | Durchsatz durch das TEV / Spülluftmenge zur AKF-Entladung | kg/h | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| _TFM_LADEZUSTAND_HOCHVOLTSPEICHER | 0x4511 | STAT_LADEZUSTAND_HOCHVOLTSPEICHER_WERT | Ladezustand Hochvoltspeicher als UWB zu einigen DTCs | % | - | High | unsigned char | - | 1.0 | 2.0 | 0.0 | - | 22 | - | - |
| TFM_STEUERN_TAV | 0xA0F0 | - | Ansteuerung Tankabsperrventil und Status rücklesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F0_R | RES_0xA0F0_R |
| TFM_STEUERN_AIV_FTIV | 0xA0F1 | - | Ansteuerung AIV oder FTIV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F1_R | RES_0xA0F1_R |
| TFM_DRUCKSENSORABGLEICH_TANK | 0xA0F2 | - | Drucksensorabgleich Tank | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F2_R | RES_0xA0F2_R |
| TFM_STEUERN_U_TANKDRUCKSENSOR | 0xA0F3 | - | Ansteuerung Spannung Tankdrucksensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F3_R | RES_0xA0F3_R |
| TFM_STEUERN_U_TANKKLAPPENVERRIEGELUNG | 0xA0F4 | - | Ansteuerung der Tankklappenverriegelung mit kontinuierlicher Aufrechterhaltung der Bestromung (mit  Haltestrom ) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F4_R | RES_0xA0F4_R |
| TFM_AUSGANG_VENTILE | 0xD2F1 | - | Ausgänge der Ventile | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2F1_D |
| TFM_TANKKLAPPEN_VERRIEGELUNG | 0xD2F2 | - | TANKKLAPPENVERRIEGELUNG | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD2F2_D | RES_0xD2F2_D |
| TFM_TASTER_SENSOREN | 0xD2F3 | - | Taster und Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2F3_D |
| TFM_INTERNE_WERTE_PHYSIKALISCH | 0xD2F4 | - | physikalische Messwerte TFM-interner Größen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2F4_D |
| TFM_TANKDRUCKSENSOR_DATEN | 0xD2F5 | - | Messwerte pT-Sensor Kraftstofftank | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2F5_D |
| TFM_KOMPENSATIONSWERT_DRUCK_TANK_ZU_DME | 0xD2F6 | STAT_KOMPENSATIONSWERT_DRUCK_TANK_ZU_DME_WERT | Kompensationswert Druckoffset p_Tank zu p_Umgebung_DME | hPa | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| TFM_TANKDRUCKSENSOR_VERSION | 0xD2F8 | - | Version vom Tankdrucksensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2F8_D |
| TFM_UMGEBUNGSDRUCKSENSOR_DME_DATEN | 0xD2F9 | STAT_UMGEBUNGSDRUCKSENSOR_DME_WERT | aktueller Messwert Drucksensor DME | hPa | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TFM_TANKZUSTAND_BERECHNET | 0xD2FA | - | aktuell berechnete Tankdruckwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2FA_D |
| TFM_TANKLECKDIAGNOSE | 0xD2FB | - | Messung und Status Werte für Tankleckdiagnose | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2FB_D |
| TFM_KRAFTSTOFFMENGEN | 0xD2FC | - | Tankfüllstand und Kraftstoffverbrauch | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2FC_D |
| TFM_STATUS_TEV | 0xD2FD | STAT_TEV_NR | Status Öffnung TEV in Schritten zu 10% | 0-n | - | High | unsigned char | TAB_STATUS_TEV | - | - | - | - | 22 | - | - |
| TFM_AUSSENTEMPERATUR | 0xD2FE | STAT_AUSSENTEMPERATUR_WERT | Aussentemperatur | °C | - | High | unsigned char | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| TFM_RUECKSETZEN_ABGESICHERTER_MODUS_TAV | 0xD2FF | - | Rücksetzen Zustandmerker  TAV/Drucktank abgesichert  nach Reparatur/Überprüfung des Fahrzeuges in Werkstatt | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD2FF_D | - |
| TFM_TANKDRUCKSENSOR_RELATIV_DATEN | 0xE2E0 | - | Messwerte Außen liegender pT-Sensor Kraftstofftank | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2E0_D |
| TFM_TANKDRUCKSENSOR_RELATIV_ID | 0xE2E1 | - | Tankdrucksensor Relativ-ID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2E1_D |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_AIV_FTIV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT_AKTIV = unbestromt, d. h. AIV-FTIV geschlossen |
| 0x01 | AKTIV = bestromt, d.h. AIV-FTIV geoeffnet |
| 0x02 | AIV-FTIV fehlerhaft |
| 0xFF | ungültig |

### TAB_RUECK_TAV_SICHER

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Ruecksetzen abgesicherter Modus Drucktank/TAV |

### TAB_STATUS_SENSORABGLEICH

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht abgeglichen oder Abgleich abgebrochen |
| 0x01 | Abgleich erfolgreich beendet |
| 0x02 | Abgleich läuft |
| 0x03 | Abgleich nicht möglich - nicht zulässig |
| 0xFF | nicht belegt |

### TAB_STATUS_TANKKLAPPENRIEGEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Verriegelung geöffnet |
| 0x01 | Verriegelung geschlossen |
| 0x02 | Verriegelung fehlerhaft |
| 0xFF | ungültig |

### TAB_STATUS_TEV

| WERT | TEXT |
| --- | --- |
| 0x00 | TEV geschlossen (0%) |
| 0x01 | TEV größer 0% bis gleich 10% getaktet angesteuert |
| 0x02 | TEV größer 10% bis gleich 20% getaktet angesteuert |
| 0x03 | TEV größer 20% bis gleich 30% getaktet angesteuert |
| 0x04 | TEV größer 30% bis gleich 40% getaktet angesteuert |
| 0x05 | TEV größer 40% bis gleich 50% getaktet angesteuert |
| 0x06 | TEV größer 50% bis gleich 60% getaktet angesteuert |
| 0x07 | TEV größer 60% bis gleich 70% getaktet angesteuert |
| 0x08 | TEV größer 70% bis gleich 80% getaktet angesteuert |
| 0x09 | TEV größer 80% bis  gleich 90% getaktet angesteuert |
| 0x0A | TEV größer 90% bis kleiner 100% getaktet angesteuert |
| 0x0B | TEV geöffnet (100%) |
| 0x0E | TEV Sensor-, Software- oder Hardware-Fehler |
| 0x0F | TEV-Status nicht verfügbar |
| 0xFF | unbekannt |

### TAB_STAT_TANKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Tankklappe geöffnet |
| 0x01 | Tankklappe geschlossen |
| 0x02 | Tankklappensensor fehlerhaft |
| 0xFF | ungültig |

### TAB_STAT_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster momentan nicht gedrückt |
| 0x01 | Taster momentan gedrückt |
| 0x02 | Taster fehlerhaft |
| 0xFF | ungültig |

### TAB_STEUERN_SENSORABGLEICH

| WERT | TEXT |
| --- | --- |
| 0x00 | default ungültig; Vermeidung unbeabsichtigter Abgleich |
| 0x01 | Steuern - Starten Sensorabgleich Tankdrucksensor zu Drucksensor (R)DME |

### TAB_STEUERN_TANKKLAPPENRIEGEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Verriegelung öffnen |
| 0x01 | Verriegelung schließen |
| 0xFF | ungültig |

### TAB_STEUERN_U_TANKKLAPPENVERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | default ungültig; Vermeidung unbeabsichtigte Ansteuerung |
| 0x01 | AKTIV mit Polarität Verriegeln |
| 0x02 | AKTIV mit Polarität Entriegeln |
| 0xFF | ungültig |

### TAB_TAV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT_AKTIV = unbestromt, d. h. TAV geoeffnet |
| 0x01 | AKTIV = bestromt, d.h. TAV geschlossen |
| 0x02 | TAV fehlerhaft |
| 0x03 | Fahrzeugtyp ohne TAV |
| 0xFF | ungültig |

### TAB_TAV_STATUS_2

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT AKTIV = unbestromt, d. h. TAV geoeffnet |
| 0x01 | AKTIV = bestromt, d. h. TAV geschlossen |
| 0x02 | TAV fehlerhaft |
| 0x03 | Fahrzeugtyp ohne TAV |
| 0xFF | ungültig |

### TAB_U_TANKKLAPPENVERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT AKTIV = unbestromt |
| 0x01 | AKTIV in Polarität verriegelt |
| 0x02 | AKTIV in Polarität entriegelt |
| 0xFF | ungültig |
