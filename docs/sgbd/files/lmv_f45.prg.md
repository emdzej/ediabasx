# lmv_f45.prg

## General

|  |  |
| --- | --- |
| File | lmv_f45.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 72 |
| Origin | BMW EA-523 Christian_Grain |
| Revision | 3.017 |
| Author | BorgWarner TTE Clas_Emanuelsson |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Längsmomentverteilung |  |  |
| ORIGIN | string | BMW EA-523 Christian_Grain |  |  |
| REVISION | string | 3.017 |  |  |
| AUTHOR | string | BorgWarner TTE Clas_Emanuelsson |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.60 |  |  |
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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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

### ENERGIESPARMODE

Einstellen des Energiesparmodes UDS   : $31   RoutineControlRequestServiceID UDS   : $01   startRoutine UDS   : $0F0C DataIdentifier ControlEnergySavingMode UDS   : $??   Mode Modus : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00: Normalmode 0x01: Fertigungsmode 0x02: Transportmode 0x03: Flashmode |

### STATUS_ENERGIESPARMODE

Energy-Saving-Mode auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100A DataIdentifier EnergySavingMode Modus: Default

_No arguments._

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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ACTIVE_SESSION_STATE

| WERT | TEXT |
| --- | --- |
| 0x01 | sessionStateLocked |
| 0x02 | sessionStateUnlocked |

### ARG_0X4000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PRESSURE | kPa | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -2.0 | 4000.0 | Gibt den Soll-Pumpendruck an.  Bereich -2...4000kPa;  -2 bedeutet Kupplung lüften -1 beendet die manuelle Steuerung sofort 0 bedeutet Leerlauf (ca. 0,8 bar) |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PUMP_CURRENT | mA | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 5000.0 | Gibt den Soll-Strom an. |

### ARG_0X4025_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HOK_SERIAL_NUMBER | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | Serienummer der Hang-On-Kupplung |

### ARG_0X4026_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAG_SERIAL_NUMBER | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | Serienummer der Hinter-Achs-Getriebe |

### ARG_0X4036_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TORQUE_SET_POINT_0_WERT | Nm | high | unsigned int | - | - | 16.0 | 1.0 | 0.0 | - | - | Schreiben der Moment Setpoint der erste Punkt. |
| STAT_TORQUE_CALIB_POINT_0_WERT | Nm | high | unsigned int | - | - | 16.0 | 1.0 | 0.0 | - | - | Schreiben der Moment Kalibrierwert der erste Punkt. |
| STAT_TORQUE_SET_POINT_1_WERT | Nm | high | unsigned int | - | - | 16.0 | 1.0 | 0.0 | - | - | Schreiben der Moment Setpoint der zweite Punkt. |
| STAT_TORQUE_CALIB_POINT_1_WERT | Nm | high | unsigned int | - | - | 16.0 | 1.0 | 0.0 | - | - | Schreiben der Moment Kalibrierwert der zweite Punkt. |
| STAT_TORQUE_SET_POINT_2_WERT | Nm | high | unsigned int | - | - | 16.0 | 1.0 | 0.0 | - | - | Schreiben der Moment Setpoint der dritte Punkt. |
| STAT_TORQUE_CALIB_POINT_2_WERT | Nm | high | unsigned int | - | - | 16.0 | 1.0 | 0.0 | - | - | Schreiben der Moment Kalibrierwert der dritte Punkt. |

### ARG_0X4037_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | K | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 65000.0 | Temperatur |
| STAT_PUMP_PRESSURE_POINT_0_WERT | bar | high | unsigned int | - | - | 195.0 | 1.0 | 0.0 | -1.0 | 100.0 | Pumpendruck an Punkt 0 in bar |
| STAT_PUMP_PRESSURE_POINT_1_WERT | bar | high | unsigned int | - | - | 195.0 | 1.0 | 0.0 | -1.0 | 100.0 | Pumpendruck an Punkt 1 in bar |
| STAT_PUMP_PRESSURE_POINT_2_WERT | bar | high | unsigned int | - | - | 195.0 | 1.0 | 0.0 | -1.0 | 100.0 | Pumpendruck an Punkt 2 in bar |
| STAT_SPEED_CONTROL_CALIB_POINT_0_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Speed Kalibrierwert für die Pumpe bei 1 bar. |
| STAT_SPEED_CONTROL_CALIB_POINT_1_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Speed Kalibrierwert für die Pumpe bei 15 bar. |
| STAT_SPEED_CONTROL_CALIB_POINT_2_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Speed Kalibrierwert für die Pumpe bei 35 bar. |

### ARG_0XDB31_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SOLLMOMENT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -2.0 | 1300.0 | Gibt das vorzugebende Sollmoment an.  Bereich -2...1300Nm;  -2 bedeutet Kupplung lüften -1 beendet die manuelle Steuerung sofort 0 bedeutet Leerlauf (ca. 0,8 bar) |
| ARG_TIMETICKS | s | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 120.0 | Dauer der Sollwertvorgabe.  Bereich 0...120s |

### BF_QU_SER

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PUMPSTATUS | 0/1 | high | unsigned char | 0x010 | - | - | - | - | Status der Pumpe  1 : Pumpe ist eingeschaltet, 0 : Pumpe ist ausgeschaltet |
| THERMAL_STRESS_IN_THE_AMPLIFIER | 0/1 | high | unsigned char | 0x00C | - | - | - | - | Termische Kapazität in der Verstärker 00: weniger als 30%, 01: grösser als oder gleich 30%, weniger als 50%, 10: grösser als oder gleich 50%, weniger als 80%, 11: grösser als oder gleich 80% |
| THERMAL_STRESS_OF_THE_CLUTCH | 0/1 | high | unsigned char | 0x003 | - | - | - | - | Termische Kapazität der Kupplung 00: weniger als 40%, 01: grösser als oder gleich 40%, weniger als 98%, 10: grösser als oder gleich 98%  |
| BASIS_QUALIFIER | 0/1 | high | unsigned char | 0xF00 | - | - | - | - | Basis Qualifier  1000 : ECU initialization, 0010 : Service available, 1011 : Service temporary limited available, 1110 : Service not available - standby, 0111 : Service not available - calibration is running, 1111 : Signal is invalid |

### BF_QU_SER_OLD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PUMPSTATE | 0/1 | high | unsigned char | 0x010 | - | - | - | - | Status der Pumpe.  0 = Pumpe ist eingeschaltet,  1 = Pumpe ist ausgeschaltet |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DM_TAB_ROE_ACTIVATED_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Aktive Fehlermeldung deaktiviert |
| 1 | Aktive Fehlermeldung aktiviert |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021900 | Energiesparmode aktiv | 0 |
| 0x021908 | Coding: ECU not coded | 0 |
| 0x021909 | Coding: Error during coding data transaction | 0 |
| 0x02190A | Coding: Coding data signature error | 0 |
| 0x02190B | Coding: Coding data vehicle mismatch | 0 |
| 0x02190C | Coding: Invalid data during coding data transaction | 0 |
| 0x02FF19 | Dummy DTC within component range, for testing purpose only | 1 |
| 0x44003C | Undervoltage identified | 1 |
| 0x44003D | Overvoltage identified | 1 |
| 0x440200 | Status Raddrehzahl unplausibel | 1 |
| 0x440201 | Status Raddrehzahl ungesichert | 1 |
| 0x440202 | Status Istdrehzahl Rad unplausibel | 1 |
| 0x440203 | Status Istdrehzahl Rad ungesichert | 1 |
| 0x440204 | Status Sollmoment unplausibel | 1 |
| 0x440205 | Status Sollmoment ungesichert | 1 |
| 0x440206 | Status Sollmoment ungeprüft | 1 |
| 0x440207 | Status Sollmoment unplausibel oder ungesichert | 1 |
| 0x440208 | Status Relativzeit unplausibel | 1 |
| 0x440209 | Status Relativzeit ungesichert | 1 |
| 0x440300 | Pumpenmotor: Pin A oder Pin B Kurzschluss nach Masse | 0 |
| 0x440301 | Pumpenmotor: Pin A oder Pin B Kurzschluss nach Plus | 0 |
| 0x440302 | Pumpenmotor: Leitungsunterbrechung | 0 |
| 0x440303 | Pumpenmotor: Kurzschluss zwischen Pin A und Pin B | 0 |
| 0x440304 | Pumpenmotor: Strom zu niedrig | 0 |
| 0x440305 | Pumpenmotor: defekt | 0 |
| 0x440306 | Steuergerät Prozessor: Temperatur zu hoch | 0 |
| 0x440307 | Steuergerät Prozessor: Temperatur zu niedrig | 0 |
| 0x440308 | Temperatursensor Prozessor: Kurzschluss | 0 |
| 0x440309 | Temperatursensor Prozessor: Leitungsunterbrechung | 0 |
| 0x440316 | Kupplung: Berechnete Temperatur zu hoch | 0 |
| 0x440317 | Pumpenmotor: Sammelfehler allgemein | 0 |
| 0x440318 | Analog Digital Converter: Fehler | 0 |
| 0x440330 | Steuergerät: Parameter zur Pumpenansteuerung fehlerhaft | 0 |
| 0x440331 | Steuergerät: Software nicht kompatibel mit EEPROM | 0 |
| 0x440332 | Steuergerät: Software oder Hardware nicht kompatibel | 0 |
| 0x440333 | Pumpenmotor: Kalibrierung fehlt | 0 |
| 0x440334 | Pumpenmotor: Kalibrierung außerhalb des gültigen Bereichs | 0 |
| 0x440335 | Steuergerät: EEPROM Prüfsummenfehler | 0 |
| 0x440337 | Steuergerät: Übergreifende Parameter fehlen oder sind nicht kompatibel | 0 |
| 0x440339 | Funktion Sicherheit | 0 |
| 0x44033A | Steuergerät: Memorytest Fehler - Nicht behebbar | 0 |
| 0x44033B | Steuergerät: Memorytest Fehler - Behebbar | 0 |
| 0x440350 | Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x440351 | Klemme 15: Unterspannung | 1 |
| 0x440352 | Klemme 15: Überspannung | 1 |
| 0xCF450B | B2-CAN physical bus error | 0 |
| 0xCF4514 | B2-CAN Control Module Bus OFF | 0 |
| 0xCF4BFF | Dummy-DTC (network range) for testing purpose only | 1 |
| 0xCF5400 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) fehlt, Empfänger LMV, Sender DME1 | 1 |
| 0xCF5401 | Botschaft (Sollmoment, 0x0E5) fehlt, Empfänger LMV, Sender DSC | 1 |
| 0xCF5402 | Signal (Drehmoment Kurbelwelle 1, 0xA5) ungültig, Sender DME1 | 1 |
| 0xCF5403 | Botschaft (Relativzeit BN2020, 0x328) fehlt, Empfänger LMV, Sender KOMBI | 1 |
| 0xCF5404 | Signal (Relativzeit, 0x328) ungültig, Sender KOMBI | 1 |
| 0xCF5406 | Botschaft (Ist Drehzahl Rad ungesichert, 0x254) fehlt, Empfänger LMV,Sender DSC | 1 |
| 0xCF5408 | Botschaft (Kilometerstand, 0x330) fehlt, Empfänger LMV, Sender KOMBI | 1 |
| 0xCF5409 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger LMV, Sender BDC | 1 |
| 0xCF5412 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger LMV, Sender DSC | 1 |
| 0xCF5413 | Botschaft (Daten Antriebsstrang 2, 0x3F9) fehlt, Empänger LMV, Sender DME1 | 1 |
| 0xCF5414 | Signal (Daten Antriebsstrang 2, 0x3F9) ungültig, Sender DME1 | 1 |
| 0xCF5421 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Empfänger LMV, Sender ZGW | 1 |
| 0xCF5422 | Botschaft (Ist Drehzahl Rad Qualifier, 0x258) fehlt, Empfänger LMV, Sender DSC | 1 |
| 0xCF5480 | Signal (Sollmoment, 0x0E5) ungültig, Sender DSC | 1 |
| 0xCF5486 | Signal (Ist Drehzahl Rad ungesichert, 0x254) ungültig, Sender DSC | 1 |
| 0xCF5488 | Signal (Kilometerstand, 0x330) ungültig, Sender KOMBI | 1 |
| 0xCF5489 | Signal (Klemmen, 0x12F) ungültig, Sender BDC | 1 |
| 0xCF5493 | Signal (Geschwindigkeit Fahzeug, 0x1A1) ungültig, Sender DSC | 1 |
| 0xCF54A1 | Signal (Fahrzeugzustand, 0x3A0) ungültig, Sender ZGW | 1 |
| 0xCF54A2 | Signal (Ist Drehzahl Rad Qualifier, 0x258) ungültig, Sender DSC | 1 |
| 0xCF54C1 | Botschaft (Sollmoment, 0x0E5) nicht aktuell, Empfänger LMV, Sender DSC | 1 |
| 0xCF54C2 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) nicht aktuell, Empfänger LMV, Sender DSC | 1 |
| 0xCF5501 | Botschaft (Sollmoment, 0x0E5) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 |
| 0xCF5502 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Safe State | 0-n | High | 0xFF | SAFESTATEREASON | - | - | - |
| 0x400E | Strom Pumpenmotor | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | Status Sperre Fehlerspeicher | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4016 | Status Klemme 15 | 0/1 | High | 0xFF | - | - | - | - |
| 0x4017 | Spannung Steuergerät | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | Temperatur Kupplungsgehäuse | K | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4019 | Errechneter Pumpendruck | kPa | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x401A | Spannung Pumpenmotor | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x401B | Drehzahl Pumpenmotor | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4027 | PAF Version | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | DAF Version | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | Bootloader Version | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x402A | Drehgeschwindigkeit Kupplung Eingang | rad/s | High | unsigned int | - | 1.0 | 16.0 | 0.0 |
| 0x402B | Drehgeschwindigkeitsdifferenz Kupplung Eingang/Ausgang | rad/s | High | signed int | - | 1.0 | 128.0 | 0.0 |
| 0x402C | Zeit Betriebszustand | ms | High | unsigned int | - | 20.0 | 1.0 | 0.0 |
| 0x4031 | Status Zeit Betriebszustand | 0-n | High | 0xFF | SYSTEM_TIME_STATUS_TABLE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x43FFFF | Puffer für Aktive Fehlermeldungen voll. | 1 |
| 0x44000C | Botschaft (Relativzeit, 0x328) fehlt, Sender KOMBI | 0 |
| 0x440010 | Versand Aktiver Fehlermeldungen mehrfach erfolglos. Puffer wird gelöscht. | 1 |
| 0x440011 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Sender ZGW | 0 |
| 0x440336 | Automatische Kalibrierung nicht durchgeführt | 0 |
| 0x440338 | Rollenprüfstandmodus aktiviert | 0 |
| 0x440339 | Funktion Sicherheit | 0 |
| 0x44033C | ECU-Reset | 0 |
| 0x44033D | Automatische Entlüftung nicht durchgeführt | 1 |
| 0x44033E | Acoustic function deactivated | 0 |
| 0x440340 | Pumpenmotor: Speed Control Kalibrierung fehlt | 0 |
| 0x440341 | Pumpenmotor: Speed Control Kalibrierung ausserhalb des gültigen Bereichs | 0 |
| 0x440342 | Pumpenmotor:  Hinweiss Strom zu niedrig | 0 |
| 0x440380 | ADC_E_TIMEOUT | 0 |
| 0x440381 | CAN_E_TIMEOUT | 0 |
| 0x440382 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x440383 | CANIF_E_INVALID_DLC | 0 |
| 0x440384 | CANIF_E_STOPPED | 0 |
| 0x440385 | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x440386 | CANNM_E_TX_PATH_FAILED | 0 |
| 0x440387 | CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x440388 | CANSM_E_MODE_CHANGE_NETWORK_0 | 0 |
| 0x440389 | CANSM_E_SETTRSCVMODE_NETWORK_0 | 0 |
| 0x44038A | CANTP_E_COM | 0 |
| 0x44038B | CANTP_E_OPER_NOT_SUPPORTED | 0 |
| 0x44038C | CANTRCV_30_X_E_NO_TRCV_CONTROL | 0 |
| 0x44038D | CSM_E_ERROR_EVENT | 0 |
| 0x44038E | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x44038F | ECUM_E_RAM_CHECKED_FAILED | 0 |
| 0x440390 | EEP_E_COM_FAILURE | 0 |
| 0x440391 | FEE_E_WRITE_FAILED | 0 |
| 0x440392 | FLS_E_COMPARE_FAILED | 0 |
| 0x440393 | FLS_E_ERASE_FAILED | 0 |
| 0x440394 | FLS_E_HW_FAILED | 0 |
| 0x440395 | FLS_E_READ_FAILED | 0 |
| 0x440396 | FLS_E_TIMEOUT | 0 |
| 0x440397 | FLS_E_WRITE_FAILED | 0 |
| 0x440398 | FRIF_E_JLE_SYNC | 0 |
| 0x440399 | FRNM_E_INIT_FAILED | 0 |
| 0x44039A | FRSM_E_CLUSTER_STARTUP | 0 |
| 0x44039B | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x44039C | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x44039D | LINIF_E_RESPONSE | 0 |
| 0x44039E | MCU_E_CLOCK_FAILURE | 0 |
| 0x44039F | MCU_E_LOCK_FAILURE | 0 |
| 0x4403A0 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x4403A1 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x4403A2 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x4403A3 | NVM_E_REQ_FAILED | 0 |
| 0x4403A4 | PDUR_E_INIT_FAILED | 0 |
| 0x4403A5 | PDUR_E_PDU_INSTANCE_LOST | 0 |
| 0x4403A6 | PIA_E_IO_ERROR | 0 |
| 0x4403A7 | PWM_E_UNEXPECTED_IRQ | 0 |
| 0x4403A8 | SPI_E_TIMEOUT | 0 |
| 0x4403A9 | WDG_E_DISABLE_REJECTED | 0 |
| 0x4403AA | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x4403AB | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x4403AC | WDGM_E_SET_MODE | 0 |
| 0xCF540C | Botschaft (Lenkwinkel Vorderachse Effektiv, 0x302) fehlt, Sender DSC | 1 |
| 0xCF5420 | Botschaft (Außentemperatur, 0x2CA) fehlt, Empfänger LMV, Sender KOMBI | 1 |
| 0xCF548C | Signal (Lenkwinkel Vorderachse Effektiv, 0x302) ungültig, Empfänger LMV, Sender DSC | 1 |
| 0xCF54A0 | Signal (Außentemperatur, 0x2CA) ungültig, Empfänger LMV, Sender KOMBI | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Safe State | 0-n | High | 0xFF | SAFESTATEREASON | - | - | - |
| 0x0002 | Reset Reason | 0-n | High | 0xFF | RESETREASON | - | - | - |
| 0x400E | Strom Pumpenmotor | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | Status Sperre Fehlerspeicher | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4016 | Status Klemme 15 | 0/1 | High | 0xFF | - | - | - | - |
| 0x4017 | Spannung Steuergerät | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | Temperatur Kupplungsgehäuse | K | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4019 | Errechneter Pumpendruck | kPa | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x401A | Spannung Pumpenmotor | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x401B | Drehzahl Pumpenmotor | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4027 | PAF Version | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | DAF Version | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | Bootloader Version | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x402A | Drehgeschwindigkeit Kupplung Eingang | rad/s | High | unsigned int | - | 1.0 | 16.0 | 0.0 |
| 0x402B | Drehgeschwindigkeitsdifferenz Kupplung Eingang/Ausgang | rad/s | High | signed int | - | 1.0 | 128.0 | 0.0 |
| 0x402C | Zeit Betriebszustand | ms | High | unsigned int | - | 20.0 | 1.0 | 0.0 |
| 0x4031 | Status Zeit Betriebszustand | 0-n | High | 0xFF | SYSTEM_TIME_STATUS_TABLE | - | - | - |
| 0x4032 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### NVRAM_INFO_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | No NVRAM error has occured. |
| 1 | NVRAM error has occured. |
| 0xFFFFFFFF | Wert ungültig |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### RESETREASON

| WERT | TEXT |
| --- | --- |
| 0 | DEFAULT |

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMPENDRUCK_SOLLVORGABE_WERT | kPa | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert des Solldrucks der Pumpenansteuerung |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMP_CURRENT_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom |

### RES_0X4022_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTER_DRIVE_CYCL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrzyklen |
| STAT_COUNTER_SUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl erfolgreicher Kalibrierungen |
| STAT_COUNTER_DRIVE_CYCL_SINCE_LAST_SUCC_CALIB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrzyklen seit der letzten erfolgreichen Kalibrierung |
| STAT_MAX_NUMBER_DRIVE_CYCL_BETWEEN_SUCC_CALIB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Anzahl der Fahrzyklen, die zwischen zwei erfolgreichen Kalibrierungen erfolgt sind. |
| STAT_NUMBER_ABORTED_CALIBS_BY_DSC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kalibrierversuche abgebrochen durch DSC-SW. |
| STAT_NUMBER_ABORTED_CALIBS_BY_LMV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kalibrierversuche abgebrochen durch LMV-SW. |

### RES_0X4024_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_MILEAGE_GEARBOX_WERT | km | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Laufleistung des Getriebes |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0-50 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50-100 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100-150 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 150-200 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200-250 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 250-300 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300-350 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 350-400 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_9_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 400-450 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_10_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 450-500 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_11_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500-550 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_12_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 550- U/min |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 100 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 200 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 300 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 - 400 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 400 - 500 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 600 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 600 - 700 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 700 - 800 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_9_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 800 - 900 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_10_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 900 - 1000 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_11_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1100 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_12_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1100 - 1200 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_13_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1200 - 1300 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_14_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1300 - Nm |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 -  Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 10 - 50 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 10 - 50 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 -  Nm, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 50 - kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 -  Nm, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_1_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_2_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_3_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_4_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_1_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_2_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_3_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_4_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_1_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_2_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_3_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_4_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_1_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_2_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_3_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_4_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamte Betriebzeit |
| STAT_NVRAM_OPERATING_TIME_EFFICIENT_MODE_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Efficient 4x4 Betriebszeit  |
| STAT_NVRAM_OPERATING_TIME_HIGH_LAMELLA_TEMPERATUE_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit unter erhöhter Lamellentemperatur  |
| STAT_NVRAM_OPERATING_TIME_OVERHEAT_PROTECTION_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit in Temperaturschutz  |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -273  - -30C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  -30 - -20C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  -20 - -10C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  -10 - 0C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  0 - 20C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  20 - 40C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  40 - 60C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  60 - 80C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  80 - 100C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  100 - 150C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  150 - 200C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  200 - C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -273 - -40C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -40 - -20C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -20 - -10C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -10 - 0C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit 0 - 20C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit 20 - 40C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  40 - 60C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  60 - 70C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit 70 - 80C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  80 - 100C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  100 - 115C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  115 - C |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 1 A   |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit  1 - 2 A  |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   2 - 3 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   3 - 4 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   4 - 5 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   5 - 6 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   6 - 7 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   7 - 8 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_9_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   8 - 9 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_10_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   9 - 10 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_11_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   10 - 11 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_12_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   11 - 12 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_13_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   12 - 20 A |
| STAT_ECU_SERIAL_NUMBER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | ECU Serial Number |
| STAT_HOK_SERIAL_NUMBER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Serienummer der Kupplung |
| STAT_HAG_SERIAL_NUMBER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Serienummer der Hinter-Achs-Getriebe |

### RES_0X4025_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT__TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Serienummer der Kupplung |

### RES_0X4026_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT__TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Serienummer der Hinter-Achs-Getriebe |

### RES_0X4035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | K | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Temperatur |
| STAT_PUMP_IDENTIFICATION_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Pumpen-Identifikationsnummer Bedeutung:  Jahr-Monat-Tag-Teilenummer-Seriennummer xx-xx-xx-xxxxxx-xxxxxxxxx |
| STAT_PUMP_PRESSURE_POINT_0_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 0 in bar |
| STAT_PUMP_CURRENT_POINT_0_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 0 in mA |
| STAT_PUMP_VOLTAGE_POINT_0_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpemspannung an Punkt 0 in mV |
| STAT_PUMP_PRESSURE_POINT_1_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 1 in bar |
| STAT_PUMP_CURRENT_POINT_1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 1 in mA |
| STAT_PUMP_VOLTAGE_POINT_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenspannung an Punkt 1 in mV |
| STAT_PUMP_PRESSURE_POINT_2_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 2 in bar |
| STAT_PUMP_CURRENT_POINT_2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 2 in mA |
| STAT_PUMP_VOLTAGE_POINT_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenspannung an Punkt 2 in mV |
| STAT_SPEED_CONTROL_CALIB_POINT_0_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Speed Kalibrierwert für die Pumpe bei 1 bar. |
| STAT_SPEED_CONTROL_CALIB_POINT_1_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Speed Kalibrierwert für die Pumpe bei 15 bar. |
| STAT_SPEED_CONTROL_CALIB_POINT_2_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Speed Kalibrierwert für die Pumpe bei 35 bar. |

### RES_0X4036_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TORQUE_SET_POINT_0_WERT | Nm | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Lesen der Moment Setpoint der erste Punkt. |
| STAT_TORQUE_CALIB_POINT_0_WERT | Nm | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Lesen der Moment Kalibrierwert der erste Punkt. |
| STAT_TORQUE_SET_POINT_1_WERT | Nm | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Lesen der Moment Setpoint der zweite Punkt. |
| STAT_TORQUE_CALIB_POINT_1_WERT | Nm | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Lesen der Moment Kalibrierwert der zweite Punkt. |
| STAT_TORQUE_SET_POINT_2_WERT | Nm | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Lesen der Moment Setpoint der dritte Punkt. |
| STAT_TORQUE_CALIB_POINT_2_WERT | Nm | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Lesen der Moment Kalibrierwert der dritte Punkt. |

### RES_0X4039_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | K | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Temperatur |
| STAT_PUMP_IDENTIFICATION_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Pumpen-Identifikationsnummer Bedeutung:  Jahr-Monat-Tag-Teilenummer-Seriennummer xx-xx-xx-xxxxxx-xxxxxxxxx |
| STAT_PUMP_PRESSURE_POINT_0_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 0 in bar |
| STAT_PUMP_CURRENT_POINT_0_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 0 in mA |
| STAT_PUMP_VOLTAGE_POINT_0_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpemspannung an Punkt 0 in mV |
| STAT_PUMP_PRESSURE_POINT_1_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 1 in bar |
| STAT_PUMP_CURRENT_POINT_1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 1 in mA |
| STAT_PUMP_VOLTAGE_POINT_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenspannung an Punkt 1 in mV |
| STAT_PUMP_PRESSURE_POINT_2_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 2 in bar |
| STAT_PUMP_CURRENT_POINT_2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 2 in mA |
| STAT_PUMP_VOLTAGE_POINT_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenspannung an Punkt 2 in mV |

### RES_0X4040_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMP_PRESSURE_POINT_0_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 0 in bar |
| STAT_PUMP_CURRENT_POINT_0_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 0 in mA |
| STAT_PUMP_VOLTAGE_POINT_0_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpemspannung an Punkt 0 in mV |
| STAT_PUMP_PRESSURE_POINT_1_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 1 in bar |
| STAT_PUMP_CURRENT_POINT_1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 1 in mA |
| STAT_PUMP_VOLTAGE_POINT_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenspannung an Punkt 1 in mV |
| STAT_PUMP_PRESSURE_POINT_2_WERT | bar | high | signed int | - | - | 1.0 | 195.0 | 0.0 | Pumpendruck an Punkt 2 in bar |
| STAT_PUMP_CURRENT_POINT_2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenstrom an Punkt 2 in mA |
| STAT_PUMP_VOLTAGE_POINT_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pumpenspannung an Punkt 2 in mV |
| STAT_TEMPERATUR_WERT | K | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Temperatur |

### RES_0X4051_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0-50 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50-100 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100-150 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 150-200 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200-250 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 250-300 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300-350 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 350-400 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_9_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 400-450 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_10_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 450-500 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_11_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500-550 U/min |
| STAT_NVRAM_OPERATING_TIME_DIFF_SPEED_CLASS_12_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 550- U/min |

### RES_0X4052_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 100 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 200 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 300 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 - 400 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 400 - 500 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 600 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 600 - 700 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 700 - 800 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_9_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 800 - 900 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_10_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 900 - 1000 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_11_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1100 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_12_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1100 - 1200 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_13_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1200 - 1300 Nm |
| STAT_NVRAM_OPERATING_TIME_APPLIED_TORQUE_CLASS_14_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1300 - Nm |

### RES_0X4053_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 -  Nm, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - Nm, 2 - 10 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 10 - 50 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 10 - 50 kWB |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 -  Nm, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_1_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 200 Nm, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_2_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 200 - 500 Nm, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_3_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 Nm, 50 - kW |
| STAT_NVRAM_OPERATING_TIME_TORQUE_4_FRICPOWER_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 -  Nm, 50 -  kW |

### RES_0X4054_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_1_DIFF_SPEED_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_1_DIFF_SPEED_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_1_DIFF_SPEED_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_1_DIFF_SPEED_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 0 - 2 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_2_DIFF_SPEED_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_2_DIFF_SPEED_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_2_DIFF_SPEED_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_2_DIFF_SPEED_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 2 - 10 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_3_DIFF_SPEED_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_3_DIFF_SPEED_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_3_DIFF_SPEED_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_3_DIFF_SPEED_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 10 - 50 kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_4_DIFF_SPEED_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 50 U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_4_DIFF_SPEED_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 50 - 100 U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_4_DIFF_SPEED_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 100 - 300 U/min, 50 -  kW |
| STAT_NVRAM_OPERATING_TIME_FRICPOWER_4_DIFF_SPEED_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 300 -  U/min, 50 -  kW |

### RES_0X4059_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -273 - -40C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -40 - -20C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -20 - -10C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -10 - 0C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit 0 - 20C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit 20 - 40C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  40 - 60C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  60 - 70C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit 70 - 80C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  80 - 100C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  100 - 115C |
| STAT_NVRAM_OPERATING_TIME_ECU_TEMPERATURE_CLASS_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  115 - C |

### RES_0X405A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit -273  - -30C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  -30 - -20C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  -20 - -10C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  -10 - 0C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  0 - 20C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  20 - 40C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  40 - 60C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  60 - 80C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  80 - 100C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  100 - 150C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  150 - 200C |
| STAT_NVRAM_OPERATING_TIME_OIL_TEMPERATURE_CLASS_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebzeit  200 - C |

### RES_0X405B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 1 A   |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit  1 - 2 A  |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   2 - 3 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   3 - 4 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   4 - 5 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   5 - 6 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   6 - 7 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   7 - 8 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_9_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   8 - 9 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_10_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   9 - 10 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_11_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   10 - 11 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_12_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   11 - 12 A |
| STAT_NVRAM_OPERATING_TIME_CURRENT_CLASS_13_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit   12 - 20 A |

### RES_0X405D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_1_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 500 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_2_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_3_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1500 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_4_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1500 - 2000 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_5_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 2000 - 3000 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_6_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 3000 - U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_1_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 500 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_2_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_3_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1500 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_4_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1500 - 2000 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_5_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 2000 - 3000 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_6_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 3000 - U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_1_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 500 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_2_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_3_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1500 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_4_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1500 - 2000 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_5_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 2000 - 3000 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_6_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 3000 - U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_HR_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamte Betriebzeit High Resolution auslesen |
| STAT_NVRAM_OPERATING_TIME_EFFICIENT_MODE_HR_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Efficient 4x4 Betriebszeit High Resolution |
| STAT_NVRAM_OPERATING_TIME_HIGH_LAMELLA_TEMPERATURE_HR_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit High Resolution unter erhöhter Lamellentemperatur  |
| STAT_NVRAM_OPERATING_TIME_OVERHEAT_PROTECTION_HR_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit High Resolution in Temperaturschutz  |
| STAT_NVRAM_NVINFO_VALUES_UNINTENTIONALLY_RESET | 0-n | high | unsigned long | - | NVRAM_INFO_STATUS | - | - | - | Boolean für fehlerhafte Auslesen der NVRAM. |
| STAT_NVRAM_ACCUMULATED_ENERGY_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gespeicherte Energie |

### RES_0X405E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_1_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 500 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_2_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_3_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1500 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_4_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1500 - 2000 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_5_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 2000 - 3000 U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_6_TORQUE_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 3000 - U/min, 0 - 390 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_1_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 500 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_2_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_3_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1500 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_4_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1500 - 2000 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_5_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 2000 - 3000 U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_6_TORQUE_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 3000 - U/min, 390 - 780 Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_1_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 0 - 500 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_2_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 500 - 1000 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_3_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1000 - 1500 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_4_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 1500 - 2000 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_5_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 2000 - 3000 U/min, 780 - Nm |
| STAT_NVRAM_OPERATING_TIME_INPUT_SPEED_6_TORQUE_3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebzeit 3000 - U/min, 780 - Nm |

### RES_0XDB31_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLMOMENT_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gibt das angeforderte Moment zurück |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_RESULT | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Rueckgabewerte für Status Kalibrierung |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEAIRING | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Rückgabewert von De-Airing Job. |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEAIRING_AND_DEFAULT_CALIBRATION | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Auslesen Status des  Deairing und Default Kalibrierung Jobs |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 2 | infiniteTimeToResponse |

### SAFESTATEREASON

| WERT | TEXT |
| --- | --- |
| 0 | DEFAULT |
| 1 | MEMORY_CORRUPTION |
| 2 | HW_MEMORY_CORRUPTION |
| 3 | BAD_CALL_SIGNATURE |
| 4 | DOUBLE_INIT |
| 5 | UPDATE_BEFORE_INIT |
| 6 | PWM_LS_NOT_LOW_IN_STATE_SUPERVISE |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMV_SOLLMOMENT | 0xDB31 | - | Schreiben und lesen einer Sollmomentvorgabe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB31_D | RES_0xDB31_D |
| PRESSURE | 0x4000 | - | Pumpendruck | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4000_D | RES_0x4000_D |
| PUMP_PWM | 0x400D | STAT_PUMPEN_PWM_WERT | Wert der Pulsweitenmodulation (PWM) für die Pumpenansteuerung | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMP_CURRENT | 0x400E | - | Strom Pumpenmotor | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x400E_D | RES_0x400E_D |
| ECU_VOLTAGE | 0x4017 | STAT_KL15N_SUPPLY_VOLTAGE_WERT | Spannung des Steuergeräts | mV | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMP_PRESSURE_ESTIMATED | 0x4019 | STAT_PUMPENDRUCK_ISTWERT_WERT | Istwert Pumpendruck | kPa | - | high | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMP_VOLTAGE | 0x401A | STAT_PUMP_VOLTAGE_WERT | Spannung der Pumpenansteuerung | mV | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMP_RPM | 0x401B | STAT_PUMP_RPM_WERT | Pumpendrehzahl (RPM) | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_CPU | 0x401C | STAT_TEMP_CPU_WERT | Temperatur der CPU | K | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| MOMENT_ESTIMATED | 0x401D | STAT_MOMENT_ISTWERT_WERT | Rückgabewert des aktuellen Istmoments | Nm | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| QU_SER | 0x401E | STAT_QU_SER_WERT | Status des QU_SER | HEX | - | high | unsigned int | - | - | - | - | - | 22 | - | - |
| QU_AVL | 0x401F | STAT_QU_AVL_WERT | Signal-Qualifier QU_AVL_REPAT_XTRQ_FTAX_BAX | HEX | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| QU_TAR | 0x4020 | STAT_QU_TAR_DATA_WERT | Status der QU_TAR | HEX | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| PUMP_SET_VOLTAGE | 0x4021 | STAT_PUMP_SET_VOLTAGE_WERT | Sollwert der Pumpenspannung | mV | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUTO_CALIBRATION_STATISTICS | 0x4022 | - | Informationen zur statistischen Auswertung der Autokalibrierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4022_D |
| NVRAM_LOGGING_DATA | 0x4024 | - | Gesamt NVRAM Logging Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4024_D |
| HOK_SERIAL_NUMBER | 0x4025 | - | Serienummer der Hang-On-Kupplung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4025_D | RES_0x4025_D |
| HAG_SERIAL_NUMBER | 0x4026 | - | Serienummer der Hinter-Achs-Getriebe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4026_D | RES_0x4026_D |
| STATUS_LMV_CLUTCH_OPENED_COMPLETELY | 0x4034 | STAT_LMV_CLUTCH_OPENED_COMPLETELY | Status der Kuplung: 0 = STEUERN_LMV_SOLLMOMENT nicht auf -2 gesetzt 1 = STEUERN_LMV_SOLLMOMENT auf -2 gesetzt, Kuplung voll geöffnet  | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| SPEED_CONTROL_CALIBRATION_VALUES | 0x4035 | - | Speed Control Kalibrierwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4035_D |
| TORQUE_CALIBRATION_VALUES | 0x4036 | - | Moment Kalibrierwerte  | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4036_D | RES_0x4036_D |
| SPEED_CALIBRATION_VALUES | 0x4037 | - | Kalibrierwerte für Druck, Pumpengeschwindigkeit und Temperatur. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4037_D | - |
| PUMP_CALIBRATION_VALUES | 0x4039 | - | Kalibrierwerte der Pumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4039_D |
| STRS_CLUTCH | 0x403A | STAT_STRESS_CLUTCH_WERT | Stress Level der Kupplung | % | - | high | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMP_INT_CALIB_VALUES | 0x4040 | - | Interne Kalibrierwerte der Pumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4040_D |
| NVRAM_MILEAGE_GEARBOX | 0x4050 | STAT_NVRAM_MILEAGE_GEARBOX_WERT | Laufleistung des Getriebes | km | - | high | unsigned long | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_DIFF_SPEED | 0x4051 | - | Betriebszeit bei festgelegten Differenzdrehzahl-Niveaus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4051_D |
| NVRAM_OPERATING_TIME_APPLIED_TORQUE | 0x4052 | - | Betriebszeit bei festgelegten Sperrmoment-Niveaus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4052_D |
| NVRAM_OPERATING_TIME_TORQUE_FRICPOWER | 0x4053 | - | Sperrmomente über der Reibleistung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4053_D |
| NVRAM_OPERATING_TIME_DIFF_SPEED_FRICPOWER | 0x4054 | - | Drehzahldifferenzen über der Reibleistung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4054_D |
| NVRAM_OPERATING_TIME | 0x4055 | STAT_NVRAM_OPERATING_TIME_WERT | Gesamte Betriebzeit | min | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_EFFICIENT_MODE | 0x4056 | STAT_NVRAM_OPERATING_TIME_EFFICIENT_MODE_WERT | Efficient 4x4 Betriebszeit  | min | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_HIGH_LAMELLA_TEMPERATURE | 0x4057 | STAT_NVRAM_OPERATING_TIME_HIGH_LAMELLA_TEMPERATURE_WERT | Betriebszeit unter erhöhter Lamellentemperatur  | min | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_OVERHEAT_PROTECTION | 0x4058 | STAT_NVRAM_OPERATING_TIME_OVERHEAT_PROTECTION_WERT | Betriebszeit in Temperaturschutz  | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_ECU_TEMPERATURE | 0x4059 | - | Betriebszeit bei festgelegten ECU-Temperatur-Niveaus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4059_D |
| NVRAM_OPERATING_TIME_OIL_TEMPERATURE | 0x405A | - | Betriebszeit bei festgelegten Öl-Temperatur-Niveaus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405A_D |
| NVRAM_OPERATING_TIME_CURRENT | 0x405B | - | Betriebszeit bei festgelegten Ist-Strom-Niveaus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405B_D |
| NVRAM_LOGGING_DATA2 | 0x405D | - | Gesamt NVRAM2 Logging Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405D_D |
| NVRAM_OPERATING_TIME_TORQUE_INPUT_SPEED | 0x405E | - | Sperrmomente über der Eingangsdrehzahl | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405E_D |
| NVRAM_OPERATING_TIME_HR | 0x405F | STAT_NVRAM_OPERATING_TIME_HR_WERT | Gesamte Betriebzeit High Resolution auslesen | s | - | high | unsigned long | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_EFFICIENT_MODE_HR | 0x4060 | STAT_NVRAM_OPERATING_TIME_EFFICIENT_MODE_HR_WERT | Efficient 4x4 Betriebszeit High Resolution | s | - | high | unsigned long | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_HIGH_LAMELLA_TEMPERATURE_HR | 0x4061 | STAT_NVRAM_OPERATING_TIME_HIGH_LAMELLA_TEMPERATURE_HR_WERT | Betriebszeit High Resolution unter erhöhter Lamellentemperatur  | ms | - | high | unsigned long | - | 200.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_OPERATING_TIME_OVERHEAT_PROTECTION_HR | 0x4062 | STAT_NVRAM_OPERATING_TIME_OVERHEAT_PROTECTION_HR_WERT | Betriebszeit High Resolution in Temperaturschutz  | ms | - | high | unsigned long | - | 200.0 | 1.0 | 0.0 | - | 22 | - | - |
| NVRAM_NVINFO_VALUES_UNINTENTIONALLY_RESET | 0x4063 | STAT_NVRAM_NVINFO_VALUES_UNINTENTIONALLY_RESET | Boolean für fehlerhafte Auslesen der NVRAM. | 0-n | - | high | unsigned long | NVRAM_INFO_STATUS | - | - | - | - | 22 | - | - |
| NVRAM_ACCUMULATED_ENERGY | 0x4064 | STAT_NVRAM_ACCUMULATED_ENERGY_WERT | Gespeicherte Energie | kJ | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CALIBRATION | 0xF000 | - | RID zur Durchführung der Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF000_R |
| DEAIRING | 0xF001 | - | RID zum manuellen Entlüften der Hydraulikeinheit | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001_R |
| DEAIRING_AND_ERASE_CALIBRATION | 0xF002 | - | Manuellen Schreiben der  Entlüften und Default Kalibrierungswerten der Hydraulikeinheit | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF002_R |

### SIGNAL_VALID_1

| WERT | TEXT |
| --- | --- |
| 0x20 | Signal_valid_1 |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### SYSTEM_TIME_STATUS_TABLE

| WERT | TEXT |
| --- | --- |
| 1 | WAKEUP |
| 2 | KL15_ON |
| 3 | ENGINE_STARTED |
| 4 | POSTRUN |

### TAB_0X4023

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_0X4032

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0002 |

### TAB_CALIBRATION_RESULT

| WERT | TEXT |
| --- | --- |
| 0x01 | Kalibrierung erfolgreich |
| 0xFF | Ungueltig |

### TEST1

| WERT | TEXT |
| --- | --- |
| 0x20 | signal valid |
