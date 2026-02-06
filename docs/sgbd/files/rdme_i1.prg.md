# rdme_i1.prg

## General

|  |  |
| --- | --- |
| File | rdme_i1.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 90 |
| Origin | Continental_Automotive_AG P_ES_SW Jürgen_Radlbeck |
| Revision | 8.100 |
| Author | Continental_Automotive_AG P_ES_SW Jürgen_Radlbeck |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Range-Extender Motorelektronik |  |  |
| ORIGIN | string | Continental_Automotive_AG P_ES_SW Jürgen_Radlbeck |  |  |
| REVISION | string | 8.100 |  |  |
| AUTHOR | string | Continental_Automotive_AG P_ES_SW Jürgen_Radlbeck |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.57 |  |  |
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

### ARG_0X602A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_DK | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_TV_DK | % | high | unsigned char | - | - | 1.0 | 0.3906 | 0.0 | 0.0 | 99.6 | Sollwert Drosselklappenwinkel |
| SW_TO_DK | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510s in 2er Schritten |

### ARG_0X60CB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_SLP | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Softwaren nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_ON_SLS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0 = Aus 1 = Ein |
| SW_TO_TEV | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 60.0 | Dauer der Ansteuerung: Min: 2 Max: 60 in 2er Schritten |

### ARG_0X60CF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_TEV | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_TV_TEV | % | high | unsigned char | - | - | 1.0 | 0.3906 | 0.0 | 0.0 | 45.0 | Ansteuerung in % |
| SW_TO_TEV | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510 in 2er Schritten |

### ARG_0X60D0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_LSH1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_TV_LSH1 | % | high | unsigned char | - | - | 1.0 | 0.3906 | 0.0 | 0.0 | 99.6 | Ansteuerung in % |
| SW_TO_LSH1 | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510 in 2er Schritten |

### ARG_0X60D1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_LSH2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_TV_LSH2 | % | high | unsigned char | - | - | 1.0 | 0.3906 | 0.0 | 0.0 | 99.6 | Ansteuerung in % |
| SW_TO_LSH2 | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510 in 2er Schritten |

### ARG_0X60D4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_MIL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_TV_MIL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Umstellungswert für die MIL: 1 = aktiv und 0 = inaktiv |
| SW_TO_MIL | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510 in 2er Schritten |

### ARG_0X60D8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_EKP | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| SW_TV_EKP | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Komponentenansteuerung: Elektrische Kraftstoffpumpe 1 = Elektrische Kraftstoffpumpe ansteuern 0 = Ansteuerung beenden Min: 0.0 Max: 1.0 |
| SW_TO_EKP | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Timeout Elektrische Kraftstoffpumpe Min: 2 Max: 510 in 2er Schritten |

### ARG_0X60E1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CS_PD_EV1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| CS_TV_EV1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Injektor ansteuern |
| CS_TO_EV1 | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510s in 2er Schritten |

### ARG_0X60E2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CS_PD_EV2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 255.0 | 255.0 | Dummy-Argument. Wird in Software nicht verwendet, ist aber mit zu versenden. Wert ist mit 0xFF zu belegen. |
| CS_TV_EV2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Injektor ansteuern |
| CS_TO_EV2 | s | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 2.0 | 510.0 | Dauer der Ansteuerung: Min: 2 Max: 510s in 2er Schritten |

### ARG_0XF025

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVAUSBL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 3.0 | Anforderung der Einspritzungssperre durch Service-Tool in Bit-Mustern kodiert: INH_IV_EXT_ADJ = x x x x x x 0 1 BIN = 1 (logischer Zylinder 0 gesperrt) INH_IV_EXT_ADJ = x x x x x x 1 0 BIN = 2 (logischer Zylinder 1 gesperrt) INH_IV_EXT_ADJ = x x x x x x 1 1 BIN = 3 (logischer Zylinder 0 und 1 gesperrt) |

### ARG_0XF030

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE_1 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Byte 1 Bit 7 = frei Byte 1 Bit 6 = LACO Adaption (LC_AD_CLR_LACO = 1) Byte 1 Bit 5 = Drosselklappensensor (LC_AD_CLR_TPS = 1) Byte 1 Bit 4 = Massenstrom im Ansaugrohr (LC_AD_CLR_INSY = 1) Byte 1 Bit 3 = frei Byte 1 Bit 2 = Zylinderindividuelle Lambdaregelung (LC_AD_CLR_CILC = 1) Byte 1 Bit 1 = Klopfregelung (LC_KNK_AD_CLR = 1) Byte 1 Bit 0 = frei |
| BYTE_2 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Byte 2 Bit 7 = frei Byte 2 Bit 6 = Adaptierte Varianten (LC_AD_CLR_AT = 1) Byte 2 Bit 5 = frei Byte 2 Bit 4 = frei Byte 2 Bit 3 = frei Byte 2 Bit 2 = frei Byte 2 Bit 1 = frei Byte 3 Bit 0 = frei |
| BYTE_3 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Byte 3 Bit 7 = frei Byte 3 Bit 6 = frei Byte 3 Bit 5 = frei Byte 3 Bit 4 = Laufunruhe Aption (LC_AD_CLR_ENRD = 1) Byte 3 Bit 3 = frei Byte 3 Bit 2 = frei Byte 3 Bit 1 = Laufunruhe Segmentzeit (LC_AD_CLR_ENRD = 1) Byte 3 Bit 0 = frei |

### ARG_0XF031

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE_1 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Byte 1 Bit 7 = frei Byte 1 Bit 6 = frei Byte 1 Bit 5 = frei Byte 1 Bit 4 = frei Byte 1 Bit 3 = frei Byte 1 Bit 2 = frei Byte 1 Bit 1 = frei Byte 1 Bit 0 = frei |
| BYTE_2 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Byte 2 Bit 7 = frei Byte 2 Bit 6 = Verlustmomentadaption (LC_AD_CLR_TQLO = 1) Byte 2 Bit 5 = frei Byte 2 Bit 4 = frei Byte 2 Bit 3 = frei Byte 2 Bit 2 = frei Byte 2 Bit 1 = frei Byte 2 Bit 0 = frei |
| BYTE_3 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Byte 3 Bit 7 = frei Byte 3 Bit 6 = frei Byte 3 Bit 5 = frei Byte 3 Bit 4 = frei Byte 3 Bit 3 = frei Byte 3 Bit 2 = Serviceintervallanforderungen Byte 3 Bit 1 = CTG statistische Adaptionen Byte 3 Bit 0 = frei |

### ARG_0XF03A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EFF_IGA_CST_LIM_EXT_ADJ | + | - | - | high | unsigned int | - | - | 1.0 | 65535.0 | 0.0 | 0.0 | 2.0 | Externe Wirkungsgradbegrenzung |
| FAC_CH_DIAG_EXT_ADJ_IS | + | - | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | 0.0 | 1.9922 | Manipulationsfaktor für Katheiz-Drehmomentreserve für Zündwinkelwirkungsgradüberwachung - demo-mode Leerlauf |
| FAC_CH_DIAG_EXT_ADJ_PL | + | - | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | 0.0 | 1.9922 | Manipulationsfaktor für Katheiz-Drehmomentreserve für Zündwinkelwirkungsgradüberwachung - demo-mode Teillast |

### ARG_0XF03B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TI_FAC_CYBL_DGNC_CYL_1 | + | - | - | high | unsigned int | - | - | 32768.0 | 1.0 | 0.0 | 0.0 | 1.9999 | Multiplikativer Faktor für Einspritzzeitkorrektur für Zylinderausgleich Zylinder 1 |
| TI_FAC_CYBL_DGNC_CYL_2 | + | - | - | high | unsigned int | - | - | 32768.0 | 1.0 | 0.0 | 0.0 | 1.9999 | Multiplikativer Faktor für Einspritzzeitkorrektur für Zylinderausgleich Zylinder 2 |

### ARG_0XF03C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TI_FAC_FSD_DGNC | + | - | - | high | unsigned int | - | - | 32768.0 | 1.0 | 0.0 | 0.0 | 1.9999 | Multiplikativer Faktor für Einspritzzeitkorrektur für FSD Fehleraufschaltung über Tester |

### ARG_0XF03D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAC_LAMB_LS_UP_MAN_TRIM_SIM | + | - | - | high | unsigned int | - | - | 32768.0 | 1.0 | 0.0 | 0.0 | 1.9999 | Lambdasignalvertrimmung |

### BF_DIGITAL_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LS_REGELUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status Lambdaregelung |

### BF_DIGITAL_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEMME | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Aktivierung: Klemme 15 = EIN |
| STAT_MOTORSTATUS | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Motorstatus:  Motor steht  |

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
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020900 | Energiesparmode aktiv | 0 |
| 0x020908 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x020909 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02090A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02090B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02090C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF09 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x100001 | Sekundärluftpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x100002 | Sekundärluftpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x100003 | Sekundärluftpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x101001 | Klopfsignal Erfassung | 0 |
| 0x101002 | Klopfsensor 1, Signal: unplausibel | 0 |
| 0x101003 | Klopfsensor 1, Signal: Varianz des Signals unplausibel zu klein | 0 |
| 0x102001 | Umgebungsdrucksensor Erfassung | 0 |
| 0x102002 | Umgebungsdrucksensor Speicher | 0 |
| 0x102003 | Umgebungsdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x102004 | Umgebungsdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x102005 | Umgebungsdrucksensor Sensor und Verdrahtungsfehler | 0 |
| 0x102006 | Umgebungsdrucksensor, elektrisch: Signal zu hoch | 0 |
| 0x102007 | Umgebungsdrucksensor, elektrisch: Signal zu niedrig | 0 |
| 0x102008 | Umgebungsdruck, Arbeitsbereich: Druck unplausibel | 0 |
| 0x103001 | Ansaugdrucksensor: Signal unplausibel | 0 |
| 0x103002 | Ansaugdrucksensor, elektrisch Kurzschluss nach Masse | 0 |
| 0x103003 | Ansaugdrucksensor elektrisch, Kurzschluss nach Plus | 0 |
| 0x104001 | Einlassnockenwellensensor, Signal: Synchronisationsfehler | 0 |
| 0x104002 | Einlassnockenwellensensor, elektrisch: Synchronisationsfehler | 0 |
| 0x104003 | Kurbelwelle - Einlassnockenwelle, Referenz: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x104004 | Einlassnockenwellensensor, elektrisch: Synchronisationsfehler | 0 |
| 0x104005 | Einlassnockenwellensensor, elektrisch: Synchronisationsfehler | 0 |
| 0x104006 | Einlassnockenwellensensor, Signal: Phasenposition fehlerhaft | 0 |
| 0x105001 | Kurbelwellensensor, Signal: fehlt | 0 |
| 0x105002 | Kurbelwellensensor, Signal: Synchronisationsfehler | 0 |
| 0x105003 | Kurbelwellensensor, Signal: Zahnzahlfehler | 0 |
| 0x105004 | Kurbelwellensensor, Signal: Segmentzeitenfehler | 0 |
| 0x105005 | Motordrehzahl: Drehzahl zu hoch | 0 |
| 0x106001 | Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x106002 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x106003 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x106004 | Tankentlüftungsventil: Fehlfunktion | 0 |
| 0x108001 | Drosselklappensteller Endstufe, elektrisch: Leitungsunterbrechung | 0 |
| 0x108002 | Drosselklappensteller Endstufe, elektrisch: Überhitzung | 0 |
| 0x108003 | Drosselklappensteller Endstufe, elektrisch: Kurzschluss | 0 |
| 0x108004 | Drosselklappensteller Endstufe, elektrisch: PWM 1 | 0 |
| 0x108005 | Drosselklappensteller Endstufe, elektrisch: PWM 2 | 0 |
| 0x108006 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108007 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108008 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108009 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x10800A | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x109001 | Zündspule alle Zylinder, elektrisch: Leitungsunterbrechung | 0 |
| 0x109002 | Zündspule 1, elektrisch: Leitungsunterbrechung | 0 |
| 0x109003 | Zündspule 2, elektrisch: Leitungsunterbrechung | 0 |
| 0x109004 | Zündspule 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109005 | Zündspule 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109006 | Zündspule 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109007 | Zündspule 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109008 | Zündschalter, elektrisch: unplausibel, Kurzschluss nach Masse | 0 |
| 0x109009 | Zündschalter, elektrisch: unplausibel, Kurzschluss nach Plus | 0 |
| 0x10900A | Klemmenstatus KL15: Plausibilisierung, CAN Fehler | 0 |
| 0x10900B | Klemmenstatus KL15: Plausibilisierung, Botschaftsfehler | 0 |
| 0x10A001 | Einspritzventil Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10A002 | Einspritzventil Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10A003 | Einspritzventil Zylinder 1, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10A004 | Einspritzventil Zylinder 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10A005 | Einspritzventil Zylinder 1, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10A006 | Einspritzventil Zylinder 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10B001 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x10B002 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x10B003 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10B004 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10B005 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10B006 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10B007 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10B008 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10B009 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x10B00A | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x10B00B | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x10B00C | Lambdasonde vor Katalysator, Verbau: Sonde nicht korrekt montiert in Abgasanlage | 0 |
| 0x10D001 | Elektrische Kraftstoffpumpe, elektrisch: Leitungsunterbrechung | 0 |
| 0x10D002 | Elektrische Kraftstoffpumpe, elektrisch: Kurzschluss nach Masse | 0 |
| 0x10D003 | Elektrische Kraftstoffpumpe, elektrisch: Kurzschluss nach Plus | 0 |
| 0x10E001 | DME-Hauptrelais, Ansteuerung: Schaltzeit zu langsam | 0 |
| 0x10E002 | DME-Hauptrelais, Ansteuerung: immer offen | 0 |
| 0x10E003 | DME-Hauptrelais, Ansteuerung: nicht eingeschalten | 0 |
| 0x10E004 | DME-Hauptrelais, Ansteuerung: nicht abgefallen | 0 |
| 0x10E005 | DME-Hauptrelais, Ansteuerung: Zustand Ausgeschalten nich plausibel | 0 |
| 0x10E006 | DME-Hauptrelais, Ansteuerung: Zustand Eingeschlaten nich plausibel | 0 |
| 0x10E00A | DME, interner Fehler: letzter Abschaltvorgang ungültig | 0 |
| 0x10F001 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x10F002 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x110001 | Versorgungsspannung: Spannung zu hoch | 0 |
| 0x110002 | Versorgungsspannung: Spannung zu hoch | 0 |
| 0x110003 | Versorgungsspannung: Spannung zu niedrig | 0 |
| 0x110004 | Versorgungsspannung: Spannung zu niedrig | 0 |
| 0x111001 | Batteriespannung 1 (KL30B): Spannung zu hoch | 0 |
| 0x111002 | Batteriespannung 2 (KL15N): Spannung zu hoch | 0 |
| 0x111003 | Batteriespannung 3 (Versorung Einspritzventile und Zündspulen): Spannung zu hoch | 0 |
| 0x111004 | Batteriespannung 1 (KL30B): Spannung zu niedrig | 0 |
| 0x111005 | Batteriespannung 2 (KL15N): Spannung zu niedrig | 0 |
| 0x111006 | Batteriespannung 3 (Versorung Einspritzventile und Zünspulen): Spannung zu niedrig | 0 |
| 0x112001 | DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x113001 | Geschwindigkeitssignal vom CAN ungültig | 0 |
| 0x113002 | Fahrzeuggeschwindigkeit, Sammelfehler: Signal und Plausibilität | 0 |
| 0x114001 | Motoröldruckschalter: Schalter hängt geschlossen, Druck zu niedrig | 0 |
| 0x114002 | Motoröldruckschalter: Schalter hängt offen | 0 |
| 0x115003 | Kühlmitteltemperatursensor, Plausibilität: Temperatur konstant zu hoch | 0 |
| 0x115004 | Kühlmitteltemperatursensor, Plausibilität: Temperatur konstant zu niedrig | 0 |
| 0x115005 | Kühlmitteltemperatursensor, Plausibilität: Signal unplausibel | 0 |
| 0x115006 | Thermostat: klemmt offen | 0 |
| 0x115007 | Kühlmitteltemperatur: zu hoch | 0 |
| 0x116001 | Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x116002 | Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x116003 | Umgebungstemperatursensor, Signal: Oberen Schwellwert überschritten | 0 |
| 0x116004 | Umgebungstemperatursensor, Signal: Unteren Schwellwert unterschritten | 0 |
| 0x116005 | Umgebungstemperatursensor, elektrisch: Signalfehler, Konfiguration zur Signalauswerung fehlerhaft | 0 |
| 0x116006 | Umgebungstemperatursensor, elektrisch: Signalfehler, Signalauswerung im Reset | 0 |
| 0x116007 | Ansauglufttemperatursensor: Signal nicht plausibel | 0 |
| 0x116008 | Umgebungstemperatursensor, Gradient: Gradient zu hoch | 0 |
| 0x116009 | Ansauglufttemperatursensor vor Drosselklappe, Gradient: Gradient zu hoch oder Sprung | 0 |
| 0x11600A | Umgebungstemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x11600B | Ansauglufttemperatursensor, Plausibilität: Ansauglufttemperatur zu hoch | 0 |
| 0x11600C | Umgebungstemperatursensor, Bereich: untere physikalische Grenze überschritten | 0 |
| 0x11600D | Ansauglufttemperatursensor, Plausibilität: Ansauglufttemperatur zu niedrig | 0 |
| 0x11600E | Umgebungslufttemperatursensor, elektrisch: Signal nicht plausibel | 0 |
| 0x11600F | Umgebungslufttemperatursensor: Unplausibler Signalwert vom Kombi empfangen | 0 |
| 0x117000 | Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis: Fehlfunktion oder Leitungsunterbrechung | 1 |
| 0x117001 | Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis: niedrig | 1 |
| 0x117002 | Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis: hoch | 1 |
| 0x117003 | Kraftstofftank Drucksensor/Temperaturfühler: Druck unplausibel | 1 |
| 0x117004 | Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem: Druck zu hoch | 1 |
| 0x117005 | Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem: Druck zu niedrig | 1 |
| 0x117006 | Kraftstofftank Drucksensor/Temperaturfühler: Temperatur unplausibel | 1 |
| 0x117007 | Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem: Untertemperatur | 1 |
| 0x117008 | Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem: Übertemperatur | 1 |
| 0x117009 | Kraftstofftank Drucksensor/Temperaturfühler: Drucksignal festliegend | 1 |
| 0x11700A | Kraftstofftank Drucksensor/Temperaturfühler: Temperatur unplausibel | 1 |
| 0x11700B | Tankentlüftungssystem Tankfunktionsmodul Zeitgeber: Fehlfunktion | 1 |
| 0x11700C | Tankabsperrventil Steuerkreis: Fehlfunktion oder Leitungsunterbrechung | 1 |
| 0x11700D | Tankabsperrventil Steuerkreis: niedrig | 1 |
| 0x11700E | Tankabsperrventil Steuerkreis: hoch | 1 |
| 0x11700F | Tankabsperrventil: klemmt offen | 1 |
| 0x117010 | Tankabsperrventil: klemmt geschlossen | 1 |
| 0x117011 | Tankabsperrventil Steuerkreis: niedrig | 1 |
| 0x117012 | Atmosphären Isolationsventil Steuerkreis: Fehlfunktion oder Leitungsunterbrechung | 1 |
| 0x117013 | Atmosphären Isolationsventil Steuerkreis: niedrig | 1 |
| 0x117014 | Atmosphären Isolationsventil Steuerkreis: hoch | 1 |
| 0x117015 | Atmosphären Isolationsventil: klemmt offen | 1 |
| 0x117016 | Atmosphären Isolationsventil: klemmt geschlossen | 1 |
| 0x117017 | Atmosphären Isolationsventil Steuerkreis: niedrig | 1 |
| 0x117018 | Tankklappe Positionssensor/-schalter Schaltkreis: Fehlfunktion oder  Leitungsunterbrechung | 1 |
| 0x117019 | Tankklappe Positionssensor/-schalter Schaltkreis: niedrig | 1 |
| 0x11701A | Tankklappe Positionssensor/-schalter Schaltkreis: hoch | 1 |
| 0x11701B | Tankklappe: klemmt offen | 1 |
| 0x11701C | Tankklappe: klemmt geschlossen | 1 |
| 0x11701D | Tankklappe Positionssensor/-schalter Schaltkreis: hoch | 1 |
| 0x11701E | Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis: Fehlfunktion oder Leitungsunterbrechung | 1 |
| 0x11701F | Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis: niedrig | 1 |
| 0x117020 | Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis: hoch | 1 |
| 0x117021 | Tankklappe Öffnungsanforderungssensor/-schalter: Leistungsproblem oder klemmt offen | 1 |
| 0x117022 | Tankklappe Öffnungsanforderungssensor/-schalter: klemmt geschlossen | 1 |
| 0x117023 | Tankklappe Verriegelungsteuerung: Fehlfunktion oder Leitungsunterbrechung | 1 |
| 0x117024 | Tankklappe Verriegelungsteuerung Schaltkreis: niedrig | 1 |
| 0x117025 | Tankklappe Verriegelungsteuerung Schaltkreis: hoch | 1 |
| 0x117026 | Tankklappe Verriegelungsteuerung: klemmt offen | 1 |
| 0x117027 | Tankklappe Verriegelungsteuerung: klemmt geschlossen | 1 |
| 0x117028 | Tankklappe Verriegelungsteuerung Schaltkreis: niedrig | 1 |
| 0x117029 | Tankentlüftungssystem: sehr kleines Leck entdeckt | 1 |
| 0x120001 | Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x120002 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Zeitüberschreitung oder Ungültigkeitswert | 0 |
| 0x120003 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Wake-up | 0 |
| 0x120004 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf | 0 |
| 0x120005 | Motorabstellzeit: Plausibilität Systemzeit im Nachlauf | 0 |
| 0x120006 | Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x120007 | Leerlaufdrehzahl bei Kaltstart: Abweichung von Nominaldrehzahl zu hoch | 0 |
| 0x120008 | Lehrlaufdrehzahl bei Kaltstart: Abweichung von Nominaldrehzahl zu niedrig | 0 |
| 0x121001 | Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x122001 | Kurbelwellensensor, Segmentadaption: Grenzwert überschritten | 0 |
| 0x123001 | Verbrennungsaussetzer: Tankfüllstand zu gering | 0 |
| 0x123002 | Gemischregelung: Maximales Limit der Lamdaadaption erreicht | 0 |
| 0x123003 | Gemischregelung: Minimales Limit der Lamdaadaption erreicht | 0 |
| 0x124001 | Lambdasonde nach Katalysator, Systemprüfung: Signal konstant mager | 0 |
| 0x124002 | Lambdasonde nach Katalysator, Systemprüfung: Signal konstant fett | 0 |
| 0x124003 | Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x124004 | Überprüfung Lambdasondenheizung nach Katatalysator: Sondentemperatur unplausibel | 0 |
| 0x124008 | Lambdasonde nach Katalysator, im Schub, Mager: Signal unplausibel | 0 |
| 0x124009 | Lambdasonde vor Katalysator: Signal unplausibel | 0 |
| 0x12400C | Lambdasonde vor Katalysator, Systemprüfung: Signal konstant mager | 0 |
| 0x12400D | Lambdasonde vor Katalysator, Systemprüfung: Signal konstant fett | 0 |
| 0x12400F | DME, interner Fehler: Überprüfung Lambdasondenheizung, ungültige Sensortemperatur, Auswertebaustein im Steuergerät defekt | 0 |
| 0x124010 | Lambdasonde vor Katalysator, Überprüfung Lambdasondenheizung: Sondentemperatur unplausibel | 0 |
| 0x124011 | Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x124012 | Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x124101 | Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x124102 | Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x124103 | Gemischregelung: Gemisch zu mager | 0 |
| 0x124104 | Gemischregelung: Gemisch zu fett | 0 |
| 0x124213 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x124214 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x124215 | Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x124216 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x124301 | Gemischregelung, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x124302 | Gemischregelung, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x124401 | DME, interner Fehler: Regler für Lambdasonde vor Katalysator defekt | 0 |
| 0x124402 | DME, interner Fehler: Regler für Lambdasonde vor Katalysator defekt | 0 |
| 0x124403 | DME, interner Fehler: Lambdasonde Auswertebaustein, Korrekturwert (Offset) unplausibel | 0 |
| 0x124404 | DME, interner Fehler: Lambdasonde Auswertebaustein, Pumpstrom (Ip) hat die Schwelle erreicht | 0 |
| 0x124405 | DME, interner Fehler: Lambdasonde Auswertebaustein, Nernst-Spannung (VN) hat die Schwelle erreicht | 0 |
| 0x124406 | DME, interner Fehler: Lambdasonde Auswertebaustein, Pumpspannung (Vp) hat die Schwelle erreicht | 0 |
| 0x124501 | Lambdasonde nach Katalysator, Verzögerung: verzögerter Signalverlauf von mager nach fett | 0 |
| 0x124502 | Lambdasonde nach Katalysator, Verzögerung: verzögerter Signalverlauf von fett nach mager | 0 |
| 0x124503 | Lambdasonde nach Katalysator, langsamer Signalverlauf: zu langsamer Signalverlauf von mager nach fett | 0 |
| 0x124504 | Lambdasonde nach Katalysator, langsamer Signalverlauf: zu langsamer Signalverlauf von fett nach mager | 0 |
| 0x124505 | Überprüfung Lambdasondenheizung vor Katalysator: Sondentemperatur unplausibel | 0 |
| 0x124506 | Lambdasonde nach Katalysator, Signal-Bereichsprüfung: Signal zu mager | 0 |
| 0x124507 | Lambdasonde nach Katalysator, Signal-Bereichsprüfung: Signal zu fett | 0 |
| 0x125001 | Verbrennungsaussetzer, Zylinder 1 | 0 |
| 0x125002 | Verbrennungsaussetzer, Zylinder 2 | 0 |
| 0x125003 | Verbrennungsaussetzer, mehrere Zylinder | 0 |
| 0x126001 | Drosselklappe, Startprüfung: Federtest, die Position unter dem Notlaufpunkt nicht erreicht | 0 |
| 0x126002 | Drosselklappe, Adaption: unterer mech. Anschlag nicht adaptiert | 0 |
| 0x126003 | Drosselklappe, Startprüfung: Federtest, Notlaufposition nicht erreicht | 0 |
| 0x126004 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 0 |
| 0x126005 | Drosselklappe, Adaption: Notlaufposition nicht adaptiert | 0 |
| 0x126006 | Drosselklappe, Startprüfung: Federtest, oberer Anschlag nicht erreicht | 0 |
| 0x126007 | Drosselklappe, Startprüfung: Federtest, Notlaufposition nicht erreicht | 0 |
| 0x126008 | Drosselklappe, Regelung: Regelabweichung zu groß | 0 |
| 0x126009 | Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zur Luftmasse | 0 |
| 0x12600A | Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zur Luftmasse | 0 |
| 0x12600B | Drosselklappe, Drosselklappenpotenziometer: Signal unplausibel | 0 |
| 0x12600C | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x12600D | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x12600E | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x12600F | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x126010 | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x126011 | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x126012 | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x126013 | Drosselklappe: Position im Teillastbetrieb nicht plausibel | 0 |
| 0x127000 | Zylinderindividuelle Lambdaregelung Zylinder 1: Korrekturfaktor am Maximum | 0 |
| 0x127001 | Zylinderindividuelle Lambdaregelung Zylinder 2: Korrekturfaktor am Maximum | 0 |
| 0x127002 | Zylinderindividuelle Lambdaregelung Zylinder 1: Korrekturfaktor am Minimum | 0 |
| 0x127003 | Zylinderindividuelle Lambdaregelung Zylinder 2: Korrekturfaktor am Minimum | 0 |
| 0x128002 | Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x129001 | Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x129002 | Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x132001 | DME, interner Fehler: RAM/ROM Fehler beim Selbsttest | 0 |
| 0x132002 | DME , interner Fehler: Prüfsummenfehler im Datenbereich beim Selbsttest | 0 |
| 0x132003 | DME, interner Fehler: Prüfsummenfehler in Applikationssoftware beim Selbsttest | 0 |
| 0x132004 | DME, interner Fehler: NVMY Fehler beim Selbsttest | 0 |
| 0x133001 | DME, interner Fehler: Programmflußüberwachung | 0 |
| 0x133002 | DME, interner Fehler: Hauptprozessor-Fehler | 0 |
| 0x133003 | DME, interner Fehler: Unter- oder Überspannungsfehler bei Prozessorüberwachung | 0 |
| 0x133004 | Drehmomentüberwachung: Motordrehmoment-Begrenzung | 0 |
| 0x133006 | DME, interner Fehler: DME Reset | 0 |
| 0x135001 | DME, interner Fehler: Kommuikation mit H-Brückentreiber | 0 |
| 0x135002 | DME, interner Fehler: Kommuikation mit Low Side Driver | 0 |
| 0x135003 | DME, interner Fehler: Kommuikation mit integriertem Umgebungsdrucksensor | 0 |
| 0x139001 | Ansauglufttemperatur, Kaltstart: Temperatur unplausibel | 0 |
| 0x139002 | Kühlmitteltemperatur, Kaltstart: Temperatur unplausibel | 0 |
| 0x139003 | Außentemperatur, Kaltstart: Temperatur unplausibel | 0 |
| 0x139900 | Montagemode: aktiv | 0 |
| 0x139901 | Wartungsintervall, Anzeige aktiv | 0 |
| 0xCB440A | FA-CAN Control Module Bus OFF | 0 |
| 0xCB4486 | A-CAN Control Module Bus OFF | 0 |
| 0xCB4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCB5400 | Botschaft (KILOMETERSTAND, 0x330, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCB5401 | Botschaft (Status Drucktank, 0x2E7): Botschaftsausfall | 1 |
| 0xCB5402 | Botschaft (Status Drucktank, 0x2E7): Checksummenfehler | 1 |
| 0xCB5403 | Botschaft (Status Drucktank, 0x2E7): Testzykluszähler Fehler | 1 |
| 0xCB5404 | Botschaft (Außentemperatur, 0x2CA): Botschaftsausfall | 1 |
| 0xCB5405 | Botschaft (Relativzeit, 0x28): Botschaftsausfall | 1 |
| 0xCB5406 | Botschaft (Klemmen, 0x12F): Botschaftsausfall | 1 |
| 0xCB5407 | Botschaft (Klemmen, 0x12F): Testzyklusfehler | 1 |
| 0xCB5408 | Botschaft (Klemmen, 0x12F): Checksummenfehler | 1 |
| 0xCB5409 | Botschaft (Steuerung Diagnose OBD Fahrdynamik, 0x1F9); Botschaftsausfall | 1 |
| 0xCB540A | Botschaft (Daten Antriebsstrang 2, 0x3F9): Botschaftsausfall | 1 |
| 0xCB540B | Botschaft (Steuerung Diagnose OBD Motorsteuerung Elektrisch, 0x3D0): Botschaftsausfall | 1 |
| 0xCB540C | Botschaft (Ist Daten E-Motor Traktion, 0x100): Botschaftsausfall | 1 |
| 0xCB540D | Botschaft (Fahrzeugzustand, 0x3A0): Botschaftsausfall | 1 |
| 0xCB5410 | Botschaft (Vorgabe Betriebsart Range Extender, 2E3h): falsche Prüfsumme | 1 |
| 0xCB5411 | Botschaft (Vorgabe Betriebsart Range Extender, 2E3h): Testzykluszähler Fehler | 1 |
| 0xCB5412 | Botschaft (Vorgabe Betriebsart Range Extender, 2E3h): Botschaftsausfall | 1 |
| 0xCB5413 | Botschaft (Vorgabe Betriebsbereich Range Extender, 0xAA): Botschaftsausfall | 1 |
| 0xCB5414 | Botschaft (Absicherung Antriebsstrang, 0x1D0): Falsche Prüfsumme | 1 |
| 0xCB5415 | Botschaft (Absicherung Antriebsstrang, 0x1D0): Testzykluszähler Fehler | 1 |
| 0xCB5416 | Botschaft (Absicherung Antriebsstrang, 0x1D0): Botschaftsausfall | 1 |
| 0xCB5417 | Botschaft (OBD Service 6, 0x8Dh, 0x8Eh ): Botschaftsausfall | 1 |
| 0xCB5418 | Botschaft (OBD Information vom Tank): Botschaftsausfall | 1 |
| 0xCB5419 | Botschaft (Steuerung Crash, 0x19Bh): Falsche Prüfsumme | 1 |
| 0xCB541A | Botschaft (Steuerung Crash, 0x19Bh):Testzykluszähler Fehler | 1 |
| 0xCB541B | Botschaft (Steuerung Crash, 0x19Bh): Botschaftsausfall | 1 |
| 0xCB541C | Botschaft (Daten Antriebsstrang 2, 0x3F9): Testzykluszähler Fehler | 1 |
| 0xCB541D | Botschaft (Daten Antriebsstrang 2, 0x3F9): Falsche Prüfsumme | 1 |
| 0xCB541E | Botschaft (Ist Daten E-Motor Traktion, 0x100): Testzykluszähler Fehler | 1 |
| 0xCB541F | Botschaft (Ist Daten E-Motor Traktion, 0x100): Falsche Prüfsumme | 1 |
| 0xCB5420 | Botschaft (Geschwindigkeit Fahrzeug): Botschaftsausfall | 1 |
| 0xCB5421 | Botschaft (Geschwindigkeit Fahrzeug): Testzykluszähler Fehler | 1 |
| 0xCB5422 | Botschaft (Geschwindigkeit Fahrzeug): Falsche Prüfsumme | 1 |
| 0xCB5423 | Botschaftsausfall (Diagnose OBD Motorsteuerung Elektrisch, 3E8h) | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5801 | UWB_IPUMG | kPa | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5802 | UWB_PWMTEV | % | High | unsigned char | - | 0.3922 | 1.0 | 0.0 |
| 0x5803 | UWB_ILAM1 | % | High | unsigned char | - | 0.7813 | 1.0 | -100.0 |
| 0x5804 | UWB_IINT1 | % | High | unsigned char | - | 0.7813 | 1.0 | -100.0 |
| 0x5805 | UWB_UIUDK1 | % DK | High | unsigned char | - | 0.3906 | 1.0 | 0.0 |
| 0x5806 | UWB_UIUDK2 | % DK | High | unsigned char | - | 0.3906 | 1.0 | 0.0 |
| 0x5807 | UWB_UIKTFS | % | High | unsigned char | - | 0.3922 | 1.0 | 0.0 |
| 0x5808 | UWB_UIGANG | ° KW | High | unsigned char | - | 0.5 | 1.0 | -64.0 |
| 0x5809 | UWB_UTRMLT | % | High | unsigned char | - | 0.7813 | 1.0 | -100.0 |
| 0x580A | UWB_UTRMST | % | High | unsigned char | - | 0.7813 | 1.0 | -100.0 |
| 0x580B | UWB_ILAG1 | - | High | unsigned char | - | 0.0078 | 1.0 | 0.0 |
| 0x580C | UWB_UILAG1 | - | High | unsigned char | - | 0.0078 | 1.0 | 0.0 |
| 0x580D | UWB_MOTORLAST | % | High | unsigned char | - | 0.3922 | 1.0 | 0.0 |
| 0x580E | UWB_UIPSAU | kPa | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x580F | UWB_UINMOT | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x5813 | UWB_MOTORLAUFZEIT | s | High | unsigned char | - | 8.0 | 1.0 | 0.0 |
| 0x5814 | UWB_ITANS | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5815 | UWB_UITSAUM | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5816 | UWB_UITUMGM | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5817 | UWB_UITUMG | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5819 | UWB_UITKUM | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x581A | UWB_DK_POSITION | % DK | High | unsigned char | - | 0.3063 | 1.0 | 0.0 |
| 0x581B | UWB_DK_SOLLWERT | % DK | High | unsigned char | - | 0.3922 | 1.0 | 0.0 |
| 0x581C | UWB_IUK87 | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x581D | UWB_UIUSV1 | V | High | unsigned char | - | 0.0195 | 1.0 | 0.0 |
| 0x581E | UWB_UIUSN1 | V | High | unsigned char | - | 0.0050 | 1.0 | 0.0 |
| 0x581F | UWB_FAHRGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5820 | UWB_UIUTANS | V | High | unsigned char | - | 0.0195 | 1.0 | 0.0 |
| 0x5821 | UWB_UIUTANDSST | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5822 | UWB_UIUTUMGST | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5825 | UWB_VP_TCO_ENVD | V | High | unsigned char | - | 0.0195 | 1.0 | 0.0 |
| 0x5826 | UWB_TCO_ST_DC | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5827 | UWB_TCO_STOP | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5828 | UWB_CL_MMV_ENVD | - | High | unsigned char | - | 0.0078 | 1.0 | 0.0 |
| 0x5829 | UWB_MFF_SP_MV_KWP | mg/stroke | High | unsigned char | - | 5.4471 | 1.0 | 0.0 |
| 0x582A | UWB_TI_1_HOM_ENVD | ms | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x582C | UWB_UMAIRST | kg/h | High | unsigned char | - | 8.0 | 1.0 | 0.0 |
| 0x582D | UWB_UMAIRS | mg/stroke | High | unsigned char | - | 5.4471 | 1.0 | 0.0 |
| 0x582E | UWB_STAT_AR_RED_DIF_REL_MMV_WERT | % | High | unsigned char | - | 0.3906 | 1.0 | -50.0 |
| 0x582F | UWB_PUT_MDL_DIF_MMV_REL_ENVD_WERT | % | High | unsigned char | - | 0.3906 | 1.0 | -50.0 |
| 0x5831 | UWB_V_TPS_1 | V | High | unsigned char | - | 0.0195 | 1.0 | 0.0 |
| 0x5832 | UWB_V_TPS_2 | V | High | unsigned char | - | 0.0195 | 1.0 | 0.0 |
| 0x5833 | UWB_ENVD_0_MON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5834 | UWB_ENVD_1_MON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5835 | UWB_ENVD_2_MON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5836 | UWB_ENVD_3_MON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5837 | UWB_ENVD_0_MON_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5838 | UWB_ENVD_1_MON_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5839 | UWB_ENVD_2_MON_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x583A | UWB_ENVD_3_MON_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5840 | UWB_FAC_DYN_LSL_UP_DIAG_SAE_ENVD_L | - | High | unsigned char | - | 0.0010 | 1.0 | 0.0 |
| 0x5843 | UWB_LAMB_DELTA_I_LAM_ADJ_KWP | - | High | signed char | - | 1.0 | 1024.0 | 0.0 |
| 0x5845 | UWB_LOAD_MIS_KWP | % | High | unsigned char | - | 0.3906 | 1.0 | 0.0 |
| 0x5846 | UWB_LSHPWM_UP_1 | % | High | unsigned char | - | 0.3906 | 1.0 | 0.0 |
| 0x5847 | UWB_LSHPWM_DOWN | % | High | unsigned char | - | 0.3906 | 1.0 | 0.0 |
| 0x5848 | UWB_T_ES_KWP | min | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x584A | UWB_T_ES_CUS_KWP | min | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x584B | UWB_TECU | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x584D | UWB_TQ_REQ_EXT_ENVD | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x584E | UWB_TQI_AV_KWP | Nm | High | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x5855 | UWB_DIST_DC_ST_ENVD | km | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x585C | UWB_R_IT_LS_DOWN_KWP_H | Ohm | High | unsigned char | - | 256.0 | 1.0 | 0.0 |
| 0x585E | UWB_R_IT_LS_DOWN_KWP_L | Ohm | Low | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x5860 | UWB_R_IT_LS_UP_KWP_H | Ohm | High | unsigned char | - | 64.0 | 1.0 | 0.0 |
| 0x5863 | UWB_R_IT_LS_UP_KWP_L | Ohm | Low | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x588C | UWB_TTIP_MES_LS_UP_KWP | °C | High | signed char | - | 16.0 | 1.0 | 0.0 |
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
| 0x010001 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x010002 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x011001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x139902 | MIL Anforderung DSC aktiv | 1 |
| 0x139903 | MIL Anforderung AE aktiv | 1 |
| 0x139904 | MIL Anforderung eDME aktiv | 1 |
| 0x139905 | MIL aktiv | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5801 | UWB_IPUMG | kPa | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5805 | UWB_UIUDK1 | % DK | High | unsigned char | - | 0.3906 | 1.0 | 0.0 |
| 0x580D | UWB_MOTORLAST | % | High | unsigned char | - | 0.3922 | 1.0 | 0.0 |
| 0x580F | UWB_UINMOT | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x5819 | UWB_UITKUM | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x582C | UWB_UMAIRST | kg/h | High | unsigned char | - | 8.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EV1_MW_WERT | ms | high | unsigned int | - | - | 0.0040 | 1.0 | 0.0 | Individuelle Einspritzzeit Zylinder 1, homogen, erster Puls |
| STAT_LR1_MW_WERT | % | high | unsigned int | - | - | 0.0015 | 1.0 | -50.0 | Ausgang Lambdaregler |
| STAT_VFZG_MW_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit |
| STAT_NMOT_MW_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kurbelwellendrehzahl |
| STAT_NSOL_MW_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leerlaufsolldrehzahl |
| STAT_CAM_EX_WERT | ° KW | high | unsigned char | - | - | -0.375 | 1.0 | -40.0 | Istwert Auslassnockenwellensteller |
| STAT_TIG_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ansauglufttemperatur |
| STAT_TLTS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Kuehlmitteltemperatur |
| STAT_IGA_IGC_WERT | ° KW | high | unsigned char | - | - | 0.375 | 1.0 | -35.625 | Zuendwinkel Zylinder 1 |
| STAT_TPS_AV_1_WERT | ° DK | high | unsigned int | - | - | 0.0073 | 1.0 | 0.0 | Drosselklappenwinkel Potentiometer 1 |
| STAT_MAF_KGH_MES_BAS_WERT | kg/h | high | unsigned int | - | - | 1.0 | 32.0 | 0.0 | Rohwert des gemessenen Luftmassenstromes |
| STAT_TQI_AV_WERT | Nm | high | unsigned int | - | - | 0.0313 | 1.0 | -1024.0 | Aktuelle Drehmomentanforderung |
| STAT_VB_WERT | V | high | unsigned char | - | - | 0.1016 | 1.0 | 0.0 | Batteriespannung |
| STAT_NL_0_WERT | V | high | unsigned int | - | - | 1.0 | 13109.0 | 0.0 | Spannung Klopfwerte Zylinder 1 |
| STAT_NL_1_WERT | V | high | unsigned int | - | - | 1.0 | 13109.0 | 0.0 | Spannung Klopfwerte Zylinder 2 |

### RES_0X4004

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLS_DIAG_END | 0/1 | high | unsigned char | - | - | - | - | - | Diagnose Sekundärluftsystem beendet. |
| STAT_SLS_DIAG_ERR | 0/1 | high | unsigned char | - | - | - | - | - | Fehler durch Diagnose Sekundärluft erkannt. |

### RES_0X400A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADD_1_WERT | mg/stroke | high | int | - | - | 0.0212 | 1.0 | 0.0 | Sollwertoffset Krafstoffmasse, Ausgang der Lambdaadaption |
| STAT_PWM_UP_WERT | % | high | unsigned char | - | - | 0.3906 | 1.0 | 0.0 | Lambdasondenheizung PWM vor Katalysator |
| STAT_PWM_DOWN_WERT | % | high | unsigned char | - | - | 0.3906 | 1.0 | 0.0 | Lambdasondenheizung PWM hinter Katalysator |

### RES_0X401F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_SW_REF_1_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Programmstand |
| STAT_ECU_SW_REF_2_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Programmstand |

### RES_0X4026

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTR_MOD_9_RBM_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |
| STAT_CTR_MOD_9_RBM_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerliste die mit Mode $09 an das Scan Tool gemeldet werden |

### RES_0X4027

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMP_RBM_AIR_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_AIR_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_AMP_ORNG_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_AMP_ORNG_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_AMP_ORNG_L_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_AMP_ORNG_L_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_AMP_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_AMP_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_AMP_TPS_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_AMP_TPS_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CAT_DIAG_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CAT_DIAG_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CHK_LS_DOWN_AFL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CHK_LS_DOWN_AFL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CHK_LS_DOWN_AFR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CHK_LS_DOWN_AFR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_DYN_LS_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_DYN_LS_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_EVAP_LEAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_EVAP_LEAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_LOAD_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_LOAD_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_LOAD_TPS_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_LOAD_TPS_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_MAP_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_MAP_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OBD_LSH_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OBD_LSH_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OBD_LSH_UP_MES_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OBD_LSH_UP_MES_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OC_LSL_UP_VG_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OC_LSL_UP_VG_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OC_LSL_UP_VIP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OC_LSL_UP_VIP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OC_LSL_UP_VN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OC_LSL_UP_VN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OC_LSL_UP_VRC_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OC_LSL_UP_VRC_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OC_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OC_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_OFS_LSL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_OFS_LSL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_PUC_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_PUC_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_PUC_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_PUC_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_PUT_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_PUT_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_SCG_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_SCG_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_SHIFT_AFL_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_SHIFT_AFL_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_SHIFT_AFR_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_SHIFT_AFR_LSL_UP_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TCO_COOL_MON_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TCO_COOL_MON_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEMP_CST_PLAUS_TIG_IM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEMP_CST_PLAUS_TIG_IM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEMP_CST_PLAUS_TCO_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEMP_CST_PLAUS_TCO_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEMP_CST_PLAUS_TAA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEMP_CST_PLAUS_TAA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEST_ABC_REC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEST_ABC_REC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |

### RES_0X4028

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMP_RBM_TFM_OBD1_31_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_31_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_32_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_32_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_34_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_34_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_35_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_35_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_36_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_36_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_37_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_37_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_38_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_38_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_39_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_39_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TFM_OBD1_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TFM_OBD1_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TIG_PLAUS_IM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TIG_PLAUS_IM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TLTS_AIR_PLAUS_TAA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TLTS_AIR_PLAUS_TAA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PLAUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MAX_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MAX_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MAX_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MAX_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MAX_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MAX_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MAX_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MAX_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MIN_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MIN_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MIN_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MIN_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MIN_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MIN_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PL_MIN_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PL_MIN_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MAX_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MAX_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MAX_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MAX_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MAX_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MAX_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MAX_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MAX_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MIN_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MIN_LAMB_ENA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MIN_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MIN_LAMB_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MIN_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MIN_LAMB_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TPS_PUT_MIN_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TPS_PUT_MIN_LAMB_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_T_ES_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_T_ES_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_T_ES_TCO_FAST_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_T_ES_TCO_FAST_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_T_ES_TCO_SLOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_T_ES_TCO_SLOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_VLS_DOWN_DIF_AFL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_VLS_DOWN_DIF_AFL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_VLS_DOWN_DIF_AFR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_VLS_DOWN_DIF_AFR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CAL_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CAL_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CAL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CAL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CAL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CAL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CYL_BAL_LAM_MAX_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CYL_BAL_LAM_MAX_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CYL_BAL_LAM_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CYL_BAL_LAM_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CYL_BAL_LAM_MIN_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CYL_BAL_LAM_MIN_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_CYL_BAL_LAM_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_CYL_BAL_LAM_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_DLY_L2R_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_DLY_L2R_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_DLY_R2L_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_DLY_R2L_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_EFF_IGA_CST_IS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_EFF_IGA_CST_IS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_EFF_IGA_CST_PL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_EFF_IGA_CST_PL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_GRD_L2R_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_GRD_L2R_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_GRD_R2L_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_GRD_R2L_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_ISC_CST_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_ISC_CST_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_ISC_CST_L_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_ISC_CST_L_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_MEC_OPEN_CPS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_MEC_OPEN_CPS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_PEAK_MAX_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_PEAK_MAX_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_PEAK_MIN_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_PEAK_MIN_LS_DOWN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_SAF_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_SAF_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_SA_SAV_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_SA_SAV_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEST_TBL_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEST_TBL_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEST_TBL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEST_TBL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TEST_TBL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TEST_TBL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TLTS_STUCK_H_TCE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TLTS_STUCK_H_TCE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |
| STAT_COMP_RBM_TLTS_STUCK_L_TCE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Numerator: Anzahl von DC mit Überwachung seit erstem Start |
| STAT_CDN_RBM_TLTS_STUCK_L_TCE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überwachung individueller Denumerator: Anzahl auf DC mit geeignetem Fahrzeugeinsatz für Überwachung seit erstem Start |

### RES_0X402D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMO_05_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | Gesamte DFT 0,5 Motorordnung |
| STAT_AMO_10_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | Gesamte DFT 1,0 Motorordnung |
| STAT_AMO_15_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | Gesamte DFT 1,5 Motorordnung |
| STAT_AMO_20_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | Gesamte DFT 2,0 Motorordnung |
| STAT_LURDIF_F_1_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | gefilterte mittlere Abweichung des Lur-Wertes; (physikalischer Zylinder 1); |
| STAT_LURDIF_F_2_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | gefilterte mittlere Abweichung des Lur-Wertes; (physikalischer Zylinder 2); |
| STAT_LURABS_F_1_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | gefilterte Laufunruhedeltas eines Zylinders; (physikalischer Zylinder 1); |
| STAT_LURABS_F_2_WERT | - | high | motorola double | - | - | 1.0 | 1.0 | 0.0 | gefilterte Laufunruhedeltas eines Zylinders; (physikalischer Zylinder 2); |

### RES_0X403C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALID_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Cal-ID auslesen Teil  (hier muss die Cal-ID wie bei Mode $09 (PID $04) ausgegeben werden) |
| STAT_TYPPRUEFNR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | TYPPRUEFNR für ECE, 0 für US |
| STAT_CVN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CVN auslesen (hier muss die CVN wie bei Mode $09 (PID $06) ausgegeben werden) |

### RES_0X409B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VLS_DOWN_PUE_PUC_GRD_MES_L2R_MAX_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PUE_PUC_GRD_MES_L2R  aus allen DC, Gapping |
| STAT_VLS_DOWN_PUE_PUC_GRD_PUC_MAX_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PUE_PUC_GRD_PUC aus allen DC, Schub |
| STAT_VLS_DOWN_GRD_L2R_SAE_MIN_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC, Schleppzeiger |
| STAT_VLS_DOWN_GRD_L2R_SAE_MMV_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_R2L_SAE_STD_0_WERT | V²/s² | high | unsigned long | - | - | 1.0 | 7812.5 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von VLS_DOWN_GRD_R2L_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_L2R_SAE_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_PUE_PUC_GRD_MES_L2R_MAX_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PUE_PUC_GRD_MES_L2R  aus allen DC, Gapping |
| STAT_VLS_DOWN_PUE_PUC_GRD_PUC_MAX_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PUE_PUC_GRD_PUC aus allen DC, Schub |
| STAT_VLS_DOWN_GRD_L2R_SAE_MIN_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC, Schleppzeiger |
| STAT_VLS_DOWN_GRD_L2R_SAE_MMV_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_L2R_SAE_STD_1_WERT | V²/s² | high | unsigned long | - | - | 1.0 | 7812.5 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_L2R_SAE_1_WERT | - | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_ACT_GRD_R2L_AFL_MAX_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_ACT_GRD_R2L_AFL aus allen DC, Gapping |
| STAT_VLS_DOWN_ACT_GRD_R2L_PUC_MAX_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_ACT_GRD_R2L_PUC aus allen DC, Schub |
| STAT_VLS_DOWN_GRD_R2L_SAE_MMV_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_GRD_R2L_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_L2R_SAE_STD_0_WERT | V²/s² | high | unsigned long | - | - | 1.0 | 7812.5 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von VLS_DOWN_GRD_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_R2L_SAE_0_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von VLS_DOWN_GRD_R2L_SAE aus allen DC |
| STAT_VLS_DOWN_ACT_GRD_R2L_AFL_MAX_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_ACT_GRD_R2L_AFL aus allen DC, Gapping |
| STAT_VLS_DOWN_ACT_GRD_R2L_PUC_MAX_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_ACT_GRD_R2L_PUC aus allen DC, Schub |
| STAT_VLS_DOWN_GRD_R2L_SAE_MMV_1_WERT | mV/s | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_GRD_R2L_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_R2L_SAE_STD_1_WERT | V²/s² | high | unsigned long | - | - | 1.0 | 7812.5 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von VLS_DOWN_GRD_R2L_SAE aus allen DC |
| STAT_VLS_DOWN_GRD_R2L_SAE_1_WERT | - | high | int | - | - | 2.0 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von VLS_DOWN_GRD_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_DIAG_R2L_MAX_0_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von  T_VLS_DOWN_DLY_DIAG_R2L aus allen DC |
| STAT_T_VLS_DOWN_DLY_R2L_MMV_0_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von T_VLS_DOWN_DLY_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_R2L_STD_0_WERT | - | high | unsigned int | - | - | 1.0E-4 | 1.0 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von T_VLS_DOWN_DLY_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_R2L_SAE_0_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von T_VLS_DOWN_DLY_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_DIAG_R2L_MAX_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von  T_VLS_DOWN_DLY_DIAG_R2L aus allen DC |
| STAT_T_VLS_DOWN_DLY_R2L_MMV_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von T_VLS_DOWN_DLY_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_R2L_STD_1_WERT | - | high | unsigned int | - | - | 1.0E-4 | 1.0 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von T_VLS_DOWN_DLY_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_R2L_SAE_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von T_VLS_DOWN_DLY_R2L_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_DIAG_L2R_MAX_0_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von T_VLS_DOWN_DLY_DIAG_L2R aus allen DC |
| STAT_T_VLS_DOWN_DLY_L2R_STD_0_WERT | - | high | unsigned int | - | - | 1.0E-4 | 1.0 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von T_VLS_DOWN_DLY_L2R_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_L2R_MMV_0_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von T_VLS_DOWN_DLY_L2R_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_L2R_SAE_0_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von T_VLS_DOWN_DLY_L2R_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_DIAG_L2R_MAX_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von T_VLS_DOWN_DLY_DIAG_L2R aus allen DC |
| STAT_T_VLS_DOWN_DLY_L2R_MMV_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von T_VLS_DOWN_DLY_L2R_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_L2R_STD_1_WERT | - | high | unsigned int | - | - | 1.0E-4 | 1.0 | 0.0 | Gespeicherte Standardabweichungswert pro Abgasbank von T_VLS_DOWN_DLY_L2R_SAE aus allen DC |
| STAT_T_VLS_DOWN_DLY_L2R_SAE_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Gespeicherte Standardabweichungsrohwert pro Abgasbank von T_VLS_DOWN_DLY_L2R_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MIN_SAE_MIN_0_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von VLS_DOWN_PEAK_MIN_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MIN_SAE_MMV_0_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_PEAK_MIN_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MIN_SAE_MAX_0_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PEAK_MIN_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MIN_SAE_MIN_1_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von VLS_DOWN_PEAK_MIN_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MIN_SAE_MMV_1_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_PEAK_MIN_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MIN_SAE_MAX_1_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PEAK_MIN_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MAX_SAE_MAX_0_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PEAK_MAX_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MAX_SAE_MMV_0_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_PEAK_MAX_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MAX_SAE_MIN_0_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von VLS_DOWN_PEAK_MAX_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MAX_SAE_MAX_1_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Miximalwert pro Abgasbank von VLS_DOWN_PEAK_MAX_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MAX_SAE_MMV_1_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von VLS_DOWN_PEAK_MAX_SAE aus allen DC |
| STAT_VLS_DOWN_PEAK_MAX_SAE_MIN_1_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von VLS_DOWN_PEAK_MAX_SAE aus allen DC |
| STAT_RATIO_O2L_LIM_CAT_GAP_AFL_MIN_0_WERT | - | high | unsigned long | - | - | 1.0 | 4194314.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von RATIO_O2L_LIM_CAT_GAP_AFL aus allen DC, Schleppzeiger |
| STAT_RATIO_O2L_LIM_CAT_GAP_AFL_MMV_0_WERT | - | low | unsigned long | - | - | 1.0 | 4194314.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von RATIO_O2L_LIM_CAT_GAP_AFL aus allen DC |
| STAT_EFF_CAT_DIAG_SAE_0_WERT | - | high | unsigned char | - | - | 2.0 | 255.0 | 0.0 | Gespeicherte Standardabweichungsrohwert von EFF_CAT_DIAG_SAE aus allen DC |
| STAT_EFF_CAT_DIAG_OBD_MMV_0_WERT | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von EFF_CAT_DIAG_OBD aus allen DC |
| STAT_EFF_CAT_DIAG_OBD_STD_0_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Gespeicherte Standardabweichung pro Abgasbank von EFF_CAT_DIAG_OBD aus allen DC |
| STAT_RATIO_O2L_LIM_CAT_GAP_AFL_MIN_1_WERT | - | high | unsigned long | - | - | 1.0 | 4194314.0 | 0.0 | Gespeicherter Minimalwert pro Abgasbank von RATIO_O2L_LIM_CAT_GAP_AFL aus allen DC, Schleppzeiger |
| STAT_RATIO_O2L_LIM_CAT_GAP_AFL_MMV_1_WERT | - | high | unsigned long | - | - | 1.0 | 4194314.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von RATIO_O2L_LIM_CAT_GAP_AFL aus allen DC |
| STAT_EFF_CAT_DIAG_SAE_1_WERT | - | high | unsigned char | - | - | 2.0 | 255.0 | 0.0 | Gespeicherte Standardabweichungsrohwert von EFF_CAT_DIAG_SAE aus allen DC |
| STAT_EFF_CAT_DIAG_OBD_MMV_1_WERT | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | Gespeicherter Mittelwert pro Abgasbank von EFF_CAT_DIAG_OBD aus allen DC |
| STAT_EFF_CAT_DIAG_OBD_STD_1_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Gespeicherte Standardabweichung pro Abgasbank von EFF_CAT_DIAG_OBD aus allen DC |

### RES_0X4105

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_READY_OBD_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Readiness code completion status 1 |
| STAT_STATE_READY_OBD_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Readiness code completion status 2 |
| STAT_C_STATE_READY_OBD_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Supported groups for readiness computation (continuous and non-continuous diagnostics) |

### RES_0XF020

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_SLS | + | + | + | 0-n | high | unsigned char | - | TAB_STAT_SYSTEMCHECK_SLS | - | - | - | Statusvariabel für EOL test SA |
| STAT_DIAGSLS | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_DIAGSLS | - | - | - | Status SA Diagnose |
| STAT_SAF_DIF_WERT | - | - | + | - | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Differenz zwischen modellierten und gemessenen Sekundärluftfluss |
| STAT_SAF_DIF_TOL_SAE_WERT | - | - | + | - | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Maximal erlaubte Differenz zwischen modellierten und gemessenen Sekundärluftfluss für Mode6 |
| STAT_LV_SA_DIAG_LS_UP_END | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Bit in Sekundärdiagnose für Lambdasondendiagnose beendet |
| STAT_LV_SA_DIAG_LS_UP_ERR | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Bit in Sekundärdiagnose für Lambdasondenfehler erkannt |

### RES_0XF022

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_DFTE | + | + | + | 0-n | high | unsigned char | - | TAB_STAT_SYSTEMCHECK_TEV | - | - | - | Statusvariabel für EOL test CPS |
| STAT_DIAGCPS | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_DIAGCPS | - | - | - | Status Funktionalitäts-Check CPS |
| STAT_FRQ_RATIO_DIAGCPS_EOL_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 655.35 | 0.0 | EOL Ergebnis vom Frequenzverhältnis für CPS Funktionalitäts-Check in Teillast |
| STAT_FRQ_RATIO_DIAGCPS_BOL_EOL_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 655.35 | 0.0 | EOL untere Grenze vom Frequenzverhältnis für CPS Funktionalitäts-Check in Teillast |
| STAT_FRQ_RATIO_DIAGCPS_TOL_EOL_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 655.35 | 0.0 | EOL obere Grenze vom Frequenzverhältnis für CPS Funktionalitäts-Check in Teillast |

### RES_0XF025

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INH_IV_EXT_ADJ_WERT | + | + | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung der Einspritzungssperre durch Service-Tool in Bit-Mustern kodiert: INH_IV_EXT_ADJ = x x x x x x 0 1 BIN = 1 (logischer Zylinder 0 gesperrt) INH_IV_EXT_ADJ = x x x x x x 1 0 BIN = 2 (logischer Zylinder 1 gesperrt) INH_IV_EXT_ADJ = x x x x x x 1 1 BIN = 3 (logischer Zylinder 0 und 1 gesperrt) |

### RES_0XF030

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BYTE_1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte 1 Bit 7 = frei Byte 1 Bit 6 = LACO Adaption (LC_AD_CLR_LACO = 1) Byte 1 Bit 5 = Drosselklappensensor (LC_AD_CLR_TPS = 1) Byte 1 Bit 4 = Massenstrom im Ansaugrohr (LC_AD_CLR_INSY = 1) Byte 1 Bit 3 = frei Byte 1 Bit 2 = Zylinderindividuelle Lambdaregelung (LC_AD_CLR_CILC = 1) Byte 1 Bit 1 = Klopfregelung (LC_KNK_AD_CLR = 1) Byte 1 Bit 0 = frei |
| STAT_BYTE_2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte 2 Bit 7 = frei Byte 2 Bit 6 = Adaptierte Varianten (LC_AD_CLR_AT = 1) Byte 2 Bit 5 = frei Byte 2 Bit 4 = frei Byte 2 Bit 3 = frei Byte 2 Bit 2 = frei Byte 2 Bit 1 = frei Byte 3 Bit 0 = frei |
| STAT_BYTE_3_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte 3 Bit 7 = frei Byte 3 Bit 6 = frei Byte 3 Bit 5 = frei Byte 3 Bit 4 = Laufunruhe Aption (LC_AD_CLR_ENRD = 1) Byte 3 Bit 3 = frei Byte 3 Bit 2 = frei Byte 3 Bit 1 = Laufunruhe Segmentzeit (LC_AD_CLR_ENRD = 1) Byte 3 Bit 0 = frei |

### RES_0XF031

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BYTE_1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte 1 Bit 7 = frei Byte 1 Bit 6 = frei Byte 1 Bit 5 = frei Byte 1 Bit 4 = frei Byte 1 Bit 3 = frei Byte 1 Bit 2 = frei Byte 1 Bit 1 = frei Byte 1 Bit 0 = frei0 |
| STAT_BYTE_2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte 2 Bit 7 = frei Byte 2 Bit 6 = Verlustmomentadaption (LC_AD_CLR_TQLO = 1) Byte 2 Bit 5 = frei Byte 2 Bit 4 = frei Byte 2 Bit 3 = frei Byte 2 Bit 2 = frei Byte 2 Bit 1 = frei Byte 2 Bit 0 = frei |
| STAT_BYTE_3_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte 3 Bit 7 = frei Byte 3 Bit 6 = frei Byte 3 Bit 5 = frei Byte 3 Bit 4 = frei Byte 3 Bit 3 = frei Byte 3 Bit 2 = Serviceintervallanforderungen Byte 3 Bit 1 = CTG statistische Adaptionen Byte 3 Bit 0 = frei |

### RES_0XF03A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ZWDIAG | + | + | + | 0-n | high | unsigned char | - | TAB_STAT_SYSTEMCHECK_CSERS | - | - | - | FUNKTIONSSTATUS ZWDIAG |
| STAT_LV_DIAG_CST_ACT | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Bedingung für Kaltstartdiagnose aktiv |
| STAT_LV_INH_DIAG_EFF_IGA_CST | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Sperrbedingung für Zündwinkelwirkungsgradüberwachungdiagnose gesetzt |
| STAT_STATE_CH | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_KATHEIZEN | - | - | - | Status Katheizen |
| STAT_T_AST_WERT | - | - | + | - | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Zeit nach start |
| STAT_TCO_ST_WERT | - | - | + | °C | high | unsigned char | - | - | 0.75 | 1.0 | 0.0 | Motortemperatur beim Start |
| STAT_LV_CDN_DIAG_EFF_IGA_CST_IS | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Diagnosebedingung für Zündwinkelwirkungsgradüberwachung beim Kaltstart - Leerlauf |
| STAT_LV_CDN_DIAG_EFF_IGA_CST_PL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Diagnosebedingung für Zündwinkelwirkungsgradüberwachung beim Kaltstart - Teillast |

### RES_0XF03B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_DGNC_CYBL_TRIM | + | + | + | 0-n | high | unsigned char | - | TAB_STAT_LAM_TRIM | - | - | - | Status Einspritzzeitvertrimmung |
| STAT_TI_FAC_CYBL_DGNC_CYL_1_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 32768.0 | 0.0 | Multiplikativer Faktor für Einspritzzeitkorrektur für Zylinderausgleich Zylinder 1 |
| STAT_TI_FAC_CYBL_DGNC_CYL_2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 32768.0 | 0.0 | Multiplikativer Faktor für Einspritzzeitkorrektur für Zylinderausgleich Zylinder 2 |

### RES_0XF03C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_DGNC_FSD_TRIM | + | + | + | 0-n | high | unsigned char | - | TAB_STAT_LAM_TRIM | - | - | - | Status Einspritzzeitvertrimmung |
| STAT_TI_FAC_FSD_DGNC_CYL_1_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 32768.0 | 0.0 | Multiplikativer Faktor für Einspritzzeitkorrektur für FSD Fehleraufschaltung über Tester (gilt sowohl für Zylinder 1 als auch für Zylinder 2) |

### RES_0XF03D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_DGNC_LAM_TRIM | + | + | + | 0-n | high | unsigned char | - | TAB_STAT_LAM_TRIM | - | - | - | Status Lambdasignalvertrimmung |
| STAT_FAC_LAMB_LS_UP_MAN_TRIM_SIM_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 32768.0 | 0.0 | Faktor für manuelle Lambda-Trim Simulation |

### RES_0XF043

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_MONTAGEMODUS_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FUNKTIONSSTATUS MONTAGEMODUS |
| STAT_ST_MONTAGE_MODUS_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Montage-Modus aktiv/inaktiv |

### RES_0XF0CF

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INH_CP | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Sperre Tankentlueftung |
| STAT_LAM_AD_ENA | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Lambdaadaption freigegeben |
| STAT_LAM_AD_END | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Lambdaadaption temporär beendet |

### RES_0XF0D9

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LSCL_EXT_REQ | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Deaktivierungsbit für vordere Lambdaregelung (Ausgang für LACO) |

### RES_0XF0EB

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_EOL_DGNC_CAT_DIAG | + | + | + | 0-n | high | unsigned char | - | TAB_SYSTEMCHECK_CAT_DIAG | - | - | - | Status Katdiagnose |
| STAT_CTR_VLD_CAT_GAP_AFL_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für magere GAP Katdiagnosezyklen |
| STAT_CTR_VLD_GAP_R2L_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von gültigen GAP Diagnosezyklen für fett nach mager Diagnose |
| STAT_CTR_VLD_GAP_L2R_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von gültigen GAP Diagnosezyklen für mager nach fett Diagnose |
| STAT_CTR_GRD_R2L_LS_DOWN_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von gültigen Wechselgradienten von fett nach mager |
| STAT_CTR_PUC_PUE_LS_DOWN_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Anzahl gültiger Kraftstoffabschaltphasen |
| STAT_CTR_PUE_LS_DOWN_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Anzahl beendeter gültiger Kraftstoffabschaltphasen |
| STAT_EFF_CAT_DIAG_WERT | - | - | + | - | high | unsigned char | - | - | 0.0078 | 1.0 | 0.0 | Finaler Wert für Katwirkungsgrad bei beendeter Diagnose |
| STAT_STATE_LAMB_SP_GAP | - | - | + | 0-n | high | unsigned char | - | TAB_LAMB_SP_GAP | - | - | - | Status der Lambdasollwertregelung für GAP Diagnose |
| STAT_TEMP_CAT_DYN_MDL_WERT | - | - | + | °C | high | unsigned int | - | - | 0.0625 | 1.0 | -273.15 | Modellierte Kattemperatur unter dynamischen Bedingungen |

### RES_0XF0EC

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_EOL_DGNC_LS_DYN | + | + | + | 0-n | high | unsigned char | - | TAB_SYSTEMCHECK_LS_DYN | - | - | - | Status Systemcheck Lambdasonde Dynamik |
| STAT_ERRM | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | ERRM Lokalisierungindex für DYN_LS_UP |
| STAT_FAC_DYN_LSL_UP_DIAG_SAE_WERT | - | - | + | - | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Service 06h Testwert der vorderen Lambdasondendynamik-Diagnose |
| STAT_FAC_DYN_LSL_UP_DIAG_TOL_SAE_WERT | - | - | + | - | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Service 06h obere Grenze der vorderen Lambdasondendynamik-Diagnose |

### RES_0XF0F2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_RAM_EEPROM | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_RAM | - | - | - | FUNKTIONSSTATUS RAM |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| READ_MW | 0x4000 | - | Ausgewählte Messwerte lesen | - | TI_1_HOM[0] | - | - | - | - | - | - | - | 22 | - | RES_0x4000 |
| STATUS_DIGITAL_1 | 0x4002 | - | Klemmen- und Motorstatus | Bit | - | high | BITFIELD | BF_DIGITAL_1 | - | - | - | - | 22 | - | - |
| SLS_DIAG | 0x4004 | - | Status Diagnose Sekundärluftsystem. | - | LV_SA_DIAG_LS_UP_END[0] | - | - | - | - | - | - | - | 22;2C | - | RES_0x4004 |
| STATUS_DIGITAL_0 | 0x4007 | - | Status Lambdaregelung | Bit | LV_LAM_LSCL[1] | high | BITFIELD | BF_DIGITAL_0 | - | - | - | - | 22 | - | - |
| ADAPTION_GEMISCH | 0x400A | - | Messwerte zur Gemischadaption | - | MFF_ADD_LAM_AD_OUT[1] | - | - | - | - | - | - | - | 22 | - | RES_0x400A |
| READ_PST | 0x401F | - | Programmstand auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401F |
| READ_RBMMODE9 | 0x4026 | - | RBM-Werte Mode 9 | - | CTR_MOD_9_RBM[0] | - | - | - | - | - | - | - | 22 | - | RES_0x4026 |
| READ_RBMMS1 | 0x4027 | - | Auslesen von RBM-Werten (Teil 1) | - | CTR_COMP_RBM_AIR_LSL_UP_1 | - | - | - | - | - | - | - | 22 | - | RES_0x4027 |
| READ_RBMMS2 | 0x4028 | - | Auslesen von RBM-Werten (Teil 2) | - | CTR_COMP_RBM_TFM_OBD1_31 | - | - | - | - | - | - | - | 22 | - | RES_0x4028 |
| LRP | 0x402D | - | Messwerte Laufruhepruefung auslesen | - | - | - | - | - | - | - | - | - | 22;2C | - | RES_0x402D |
| STATUS_CALCVN | 0x403C | - | Calibration-ID und Calibration Verification Number auslesen | - | ECU_ID_CAL | - | - | - | - | - | - | - | 22 | - | RES_0x403C |
| TYPCHECKNR | 0x4047 | STAT_TYPCHECKNR_WERT | Typpruefnummer (benötigt für Mode$9 /Infotype 4) | - | C_TYPCHECKNR | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CTG | 0x409B | - | Diagnoseergebnisse Close the Gap | - | VLS_DOWN_PUE_PUC_GRD_MES_L2R_MAX[0] | - | - | - | - | - | - | - | 22 | - | RES_0x409B |
| READ_REA | 0x4105 | - | Lesen der Readynessflags | - | STATE_READY_OBD_1 | - | - | - | - | - | - | - | 22 | - | RES_0x4105 |
| AR_RED_SUM_COR_ACT_REL | 0x4200 | STAT_AR_RED_SUM_COR_ACT_REL_WERT | Relativ aktive ar_red_correction | % | AR_RED_SUM_COR_ACT_REL | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| CL | 0x4201 | STAT_CL_WERT | Ladung im Aktivkohlefilter | - | CL | high | unsigned int | - | 2.0 | 65536.0 | 0.0 | - | 22 | - | - |
| CTR_CHK_MAX_PL_DIAGCPS | 0x4202 | STAT_CTR_CHK_MAX_PL_DIAGCPS_WERT | Zähler für maximale Anzahl an CPS Gesamtüberprüfungen (bei Teillast) | - | CTR_CHK_MAX_PL_DIAGCPS | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_CPS_CHK_PL | 0x4203 | STAT_CTR_CPS_CHK_PL_WERT | Anzahl an CPS Testzyklen (bei Teillast) | - | CTR_CPS_CHK_PL | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_GRD_R2L_AFL_LS_DOWN_CLC | 0x4204 | STAT_CTR_GRD_R2L_AFL_LS_DOWN_CLC_WERT | Zähler für Aktivierung der max. Berechnungen bezogen auf VLS_DOWN_ACT_GRD_R2L_AFL | - | CTR_GRD_R2L_AFL_LS_DOWN_CLC[0] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_IGK_CYC_RBM | 0x4205 | STAT_CTR_IGK_CYC_RBM_WERT | Zündungszyklenzähler: Anzahl von DC seit erstem DME-Aufstart | - | CTR_IGK_CYC_RBM | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_MAP_FRQ_DIAGCPS | 0x4206 | STAT_CTR_MAP_FRQ_DIAGCPS_WERT | Häufigkeitszähler für MAP-Abweichungsüberprüfungen innerhalb von i.O. Bedingungen | - | CTR_MAP_FRQ_DIAGCPS | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_MES_L2R_PUE_LS_DOWN_CLC | 0x4207 | STAT_CTR_MES_L2R_PUE_LS_DOWN_CLC_WERT | Zähler für Aktivierung der max. Berechnungen bezogen auf VLS_DOWN_PUE_PUC_GRD_MES_L2R | - | CTR_MES_L2R_PUE_LS_DOWN_CLC[0] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_PUC_PUE_LS_DOWN_CLC | 0x4208 | STAT_CTR_PUC_PUE_LS_DOWN_CLC_WERT | Zähler für Aktivierung der max. Berechnungen bezogen auf VLS_DOWN_PUE_PUC_GRD_PUC | - | CTR_PUC_PUE_LS_DOWN_CLC[0] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_STOP_FSD | 0x4209 | STAT_CTR_STOP_FSD_WERT | Zähler als Maßeinheit der Ölverdünnung unter Kaltstartbedingungen | - | CTR_STOP_FSD | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_T_EFF_IGA_CST_IS | 0x420A | STAT_CTR_T_EFF_IGA_CST_IS_WERT | Aufaddierender Zähler bei Leerlauf mit aktivem Katheizen für EFF_IGA_CST Diagnose | - | CTR_T_EFF_IGA_CST_IS | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_T_EFF_IGA_CST_PL | 0x420B | STAT_CTR_T_EFF_IGA_CST_PL_WERT | Aufaddierender Zähler bei Teillast mit aktivem Katheizen für EFF_IGA_CST Diagnose | - | CTR_T_EFF_IGA_CST_PL | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_VLD_DLY_L2R_CLC | 0x420C | STAT_CTR_VLD_DLY_L2R_CLC_WERT | Zähler für Aktivierung der statistischen Berechnungen bezogen zur DLY_L2R Diagnose | - | CTR_VLD_DLY_L2R_CLC[0] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CTR_VLD_DLY_R2L_CLC | 0x420D | STAT_CTR_VLD_DLY_R2L_CLC_WERT | Zähler für Aktivierung der statistischen Berechnungen bezogen zur DLY_R2L Diagnose | - | CTR_VLD_DLY_R2L_CLC[0] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EFF_CAT_DIAG | 0x420E | STAT_EFF_CAT_DIAG_WERT | Endwert bei beendeter Diagnose für Katkonvertierungspotenzial | - | EFF_CAT_DIAG[1] | high | unsigned char | - | 1.0 | 128.0 | 0.0 | - | 22 | - | - |
| EFF_CAT_DIAG_GAP | 0x420F | STAT_EFF_CAT_DIAG_GAP_WERT | Kat-Diagnose im OSC Bereich | - | EFF_CAT_DIAG_GAP[1] | high | unsigned char | - | 1.0 | 128.0 | 0.0 | - | 22 | - | - |
| EFF_IGA_CST_QUO_IS | 0x4210 | STAT_EFF_IGA_CST_QUO_IS_WERT | Quotient von Zündungswinkeleffizienzintegral und Zeitdauer bei Leerlauf | - | EFF_IGA_CST_QUO_IS | high | int | - | 2.0 | 32768.0 | 0.0 | - | 22 | - | - |
| EFF_IGA_CST_QUO_PL | 0x4211 | STAT_EFF_IGA_CST_QUO_PL_WERT | Quotient von Zündungswinkeleffizienzintegral und Zeitdauer bei Teillast | - | EFF_IGA_CST_QUO_PL | high | int | - | 2.0 | 32768.0 | 0.0 | - | 22 | - | - |
| EOI_1_HOM_0 | 0x4212 | STAT_EOI_1_HOM_0_WERT | Ende der ersten Einspritzung von Zylinder 1 in homogen Betrieb (Zwischenwert) | ° KW | EOI_1_HOM[0] | high | unsigned int | - | 0.375 | 1.0 | 0.0 | - | 22 | - | - |
| EOI_1_HOM_1 | 0x4213 | STAT_EOI_1_HOM_1_WERT | Ende der ersten Einspritzung von Zylinder 2 in homogen Betrieb (Zwischenwert) | ° KW | EOI_1_HOM[1] | high | unsigned int | - | 0.375 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_COMP_MV_DIAG_DYN_LSL_UP | 0x4214 | STAT_FAC_COMP_MV_DIAG_DYN_LSL_UP_WERT | Mittelwert des normalisierten asymmetrischen einfachen Faktors | - | FAC_COMP_MV_DIAG_DYN_LSL_UP[1] | high | int | - | 32.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_COMP_MV_DIAG_DYN_SENS_MDL | 0x4215 | STAT_FAC_COMP_MV_DIAG_DYN_SENS_MDL_WERT | Dynamischer asymmetrischer Diagnosefaktor, benutzt im Lambdaregler Anlagenmodell | - | FAC_COMP_MV_DIAG_DYN_SENS_MDL[1] | high | int | - | 32.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_COMP_VALUE_MAX_DYN_LSL_UP | 0x4216 | STAT_FAC_COMP_VALUE_MAX_DYN_LSL_UP_WERT | Maxwert des normalisierten asymmetrischen einfachen Faktors | - | FAC_COMP_VALUE_MAX_DYN_LSL_UP[1] | high | unsigned int | - | 32.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_COMP_VALUE_MIN_DYN_LSL_UP | 0x4217 | STAT_FAC_COMP_VALUE_MIN_DYN_LSL_UP_WERT | Minwert des normalisierten asymmetrischen einfachen Faktors | - | FAC_COMP_VALUE_MIN_DYN_LSL_UP[1] | high | unsigned int | - | 32.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_DIAG_DYN_LSL_UP | 0x4218 | STAT_FAC_DIAG_DYN_LSL_UP_WERT | Adaptionsfaktor der modellierten Sensorzeitkonstante | - | FAC_DIAG_DYN_LSL_UP[1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_DIAG_LSL_AMPL_MV | 0x4219 | STAT_FAC_DLY_DIAG_LSL_AMPL_MV_WERT | Mittelwertsamplitude des Diagnosefaktors | - | FAC_DLY_DIAG_LSL_AMPL_MV[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_DIAG_LSL_MAX | 0x421A | STAT_FAC_DLY_DIAG_LSL_MAX_WERT | Maximaler Verzögerungsfaktor über die komplette Diagnose | - | FAC_DLY_DIAG_LSL_MAX[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_DIAG_LSL_MAX_MV | 0x421B | STAT_FAC_DLY_DIAG_LSL_MAX_MV_WERT | Mittelwert des maximalen Diagnosefaktors über mehrere AFL/AFR Abläufe | - | FAC_DLY_DIAG_LSL_MAX_MV[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_DIAG_LSL_OUT | 0x421C | STAT_FAC_DLY_DIAG_LSL_OUT_WERT | Linearer Sensorsignalverzögerungsdiagnoseendwert | - | FAC_DLY_DIAG_LSL_OUT[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_DIAG_LSL_TMP | 0x421D | STAT_FAC_DLY_DIAG_LSL_TMP_WERT | Skaliertes Ergebnis der Verzögerungsdiagnose | - | FAC_DLY_DIAG_LSL_TMP[1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_LSL_UP_DIAG_SAE | 0x421E | STAT_FAC_DLY_LSL_UP_DIAG_SAE_WERT | Service 06h Testwert der vorderen Lambdasensordynamikdiagnose | - | FAC_DLY_LSL_UP_DIAG_SAE[1] | high | unsigned int | - | 0.0010 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_DLY_LSL_UP_DIAG_TOL_SAE | 0x421F | STAT_FAC_DLY_LSL_UP_DIAG_TOL_SAE_WERT | Service 06h obere Grenze der vorderen Lambdasensordynamikdiagnose | - | FAC_DLY_LSL_UP_DIAG_TOL_SAE[1] | high | unsigned int | - | 0.0010 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_DYN_LSL_UP_DIAG_TOL_SAE | 0x4220 | STAT_FAC_DYN_LSL_UP_DIAG_TOL_SAE_WERT | Service 06h untere Grenze der vorderen Lambdasensordynamikdiagnose | - | FAC_DYN_LSL_UP_DIAG_TOL_SAE[1] | high | unsigned int | - | 0.0010 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_AD_LAM_OUT | 0x4221 | STAT_FAC_LAM_AD_LAM_OUT_WERT | Sollwert Faktor Kraftstoffmasse, Ausgang der Lambdaadaption, Eingang Lambdaregeler | - | FAC_LAM_AD_LAM_OUT[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_AD_OUT | 0x4222 | STAT_FAC_LAM_AD_OUT_WERT | Sollwert Faktor Kraftstoffmasse, Ausgang der Lambdaadaption | - | FAC_LAM_AD_OUT[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_ADJ_LAM_AD | 0x4223 | STAT_FAC_LAM_ADJ_LAM_AD_WERT | Ausgangswert der Lambdaadaption für die Lambdareglerverstellung | - | FAC_LAM_ADJ_LAM_AD[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_LIM | 0x4224 | STAT_FAC_LAM_LIM_WERT | Grenzwert des Lambdareglerausgangs | - | FAC_LAM_LIM[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_PCTL | 0x4225 | STAT_FAC_LAM_PCTL_WERT | Vorsteuerung Pfadkorrektur | - | FAC_LAM_PCTL[1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_MFF_ADD_FAC_LAM_AD | 0x4226 | STAT_FAC_MFF_ADD_FAC_LAM_AD_WERT | Korrektur Lambdaadaption für Scantool | - | FAC_MFF_ADD_FAC_LAM_AD[1] | high | int | - | 1.0 | 327.68 | 0.0 | - | 22 | - | - |
| FAC_MFF_ADD_LAM_AD_OUT | 0x4227 | STAT_FAC_MFF_ADD_LAM_AD_OUT_WERT | Relativer Lambdaadaption-Abweichungsquotient | - | FAC_MFF_ADD_LAM_AD_OUT[1] | high | int | - | 1.0 | 327.68 | 0.0 | - | 22 | - | - |
| FAC_MFF_WUP | 0x4228 | STAT_FAC_MFF_WUP_WERT | Warm-up Korrekturfaktor | - | FAC_MFF_WUP | high | unsigned int | - | 4.0 | 65536.0 | 0.0 | - | 22 | - | - |
| FAC_MPL_LAM_AD_1 | 0x4229 | STAT_FAC_MPL_LAM_AD_1_WERT | Multiplikativer Adaptionsfaktor 1 | - | FAC_MPL_LAM_AD[1][1] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_MPL_LAM_AD_2 | 0x422A | STAT_FAC_MPL_LAM_AD_2_WERT | Multiplikativer Adaptionsfaktor 2 | - | FAC_MPL_LAM_AD[1][2] | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| FAC_ST_REST | 0x422B | STAT_FAC_ST_REST_WERT | Wiederholungsstartfaktor für die Korrektur des Kraftstoffmassenflusses beim Start | - | FAC_ST_REST | high | unsigned char | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_VALUE_MAX_DIAG_DYN_LSL_UP | 0x422C | STAT_FAC_VALUE_MAX_DIAG_DYN_LSL_UP_WERT | Maximum der normalisierten einfachen Sensorsignalamplitude | - | FAC_VALUE_MAX_DIAG_DYN_LSL_UP[1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| FAC_VALUE_MIN_DIAG_DYN_LSL_UP | 0x422D | STAT_FAC_VALUE_MIN_DIAG_DYN_LSL_UP_WERT | Minimum der normalisierten einfachen Sensorsignalamplitude | - | FAC_VALUE_MIN_DIAG_DYN_LSL_UP[1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| FLOW_CPS | 0x422E | STAT_FLOW_CPS_WERT | Durchfluss durch das CPS | kg/h | FLOW_CPS | high | unsigned int | - | 8.0 | 65536.0 | 0.0 | - | 22 | - | - |
| IGA_AV_1 | 0x422F | STAT_IGA_AV_1_WERT | Applizierter Zündwinkel, Zylinder 1 | ° KW | IGA_AV[0] | high | unsigned char | - | 0.375 | 1.0 | -35.625 | - | 22 | - | - |
| IGA_AV_2 | 0x4230 | STAT_IGA_AV_1_WERT | Applizierter Zündwinkel, Zylinder 2 | ° KW | IGA_AV[1] | high | unsigned char | - | 0.375 | 1.0 | -35.625 | - | 22 | - | - |
| IGA_CYL_AD_KNK_CYL1 | 0x4231 | STAT_IGA_CYL_AD_KNK_CYL1_WERT | Klopfadaption: korrigierter zyklischer Zündungswinkel Zylinder 1 | ° KW | IGA_CYL_AD_KNK[0] | high | unsigned int | - | 47.9985 | 65535.0 | 0.0 | - | 22 | - | - |
| IGA_CYL_AD_KNK_CYL2 | 0x4232 | STAT_IGA_CYL_AD_KNK_CYL2_WERT | Klopfadaption: korrigierter zyklischer Zündungswinkel Zylinder 2 | ° KW | IGA_CYL_AD_KNK[1] | high | unsigned int | - | 47.9985 | 65535.0 | 0.0 | - | 22 | - | - |
| IGA_CYL_FAST_KNK_CYL1 | 0x4233 | STAT_IGA_CYL_FAST_KNK_CYL1_WERT | Klopfadaption: schnell korrigierter zyklischer Zündungswinkel Zylinder 1 | ° KW | IGA_CYL_FAST_KNK[0] | high | unsigned int | - | 47.9985 | 65535.0 | 0.0 | - | 22 | - | - |
| IGA_CYL_FAST_KNK_CYL2 | 0x4234 | STAT_IGA_CYL_FAST_KNK_CYL2_WERT | Klopfadaption: schnell korrigierter zyklischer Zündungswinkel Zylinder 2 | ° KW | IGA_CYL_FAST_KNK[1] | high | unsigned int | - | 47.9985 | 65535.0 | 0.0 | - | 22 | - | - |
| IGA_CYL_KNK_CYL1 | 0x4235 | STAT_IGA_CYL_KNK_CYL1_WERT | Gesamtzahl Spätzündungen durch Klopfregelung mit Adaption (Zylinder 1) | ° KW | IGA_CYL_KNK[0] | high | unsigned char | - | 0.375 | 1.0 | -48.0 | - | 22 | - | - |
| IGA_CYL_KNK_CYL2 | 0x4236 | STAT_IGA_CYL_KNK_CYL2_WERT | Gesamtzahl Spätzündungen durch Klopfregelung mit Adaption (Zylinder 2) | ° KW | IGA_CYL_KNK[1] | high | unsigned char | - | 0.375 | 1.0 | -48.0 | - | 22 | - | - |
| IGA_SP | 0x4237 | STAT_IGA_SP_WERT | Sollzündwinkel vom Drehmomentmanagement | ° KW | IGA_SP | high | unsigned char | - | 0.375 | 1.0 | -35.625 | - | 22 | - | - |
| INH_IGC | 0x4238 | STAT_INH_IGC_WERT | Verbot des ausgewählten Zylinders | - | INH_IGC | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INH_INJ | 0x4239 | STAT_INH_INJ_WERT | Finales Zylinderabschaltungsmuster (feste Zylinder Belegung) | - | INH_INJ | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INH_IV | 0x423A | STAT_INH_IV_WERT | Abschaltmuster für statische Zylinderabschaltung (feste Zylinder Belegung) | - | INH_IV | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KNKS_THD_CYL1 | 0x423B | STAT_KNKS_THD_CYL1_WERT | Klopfschwelle Zylinder 1 | V | KNKS_THD[0] | high | unsigned char | - | 4.9805 | 255.0 | 0.0 | - | 22 | - | - |
| KNKS_THD_CYL2 | 0x423C | STAT_KNKS_THD_CYL2_WERT | Klopfschwelle Zylinder 2 | V | KNKS_THD[1] | high | unsigned char | - | 4.9805 | 255.0 | 0.0 | - | 22 | - | - |
| LAMB_COP_TMP_1 | 0x423D | STAT_LAMB_COP_TMP_1_WERT | Lambdasollwert für Katüberhitzungsschutz, Matrix: bankselektiv und für 1 oder 2 Lambdaregler | - | LAMB_COP_TMP[1][1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LAMB_COP_TMP_2 | 0x423E | STAT_LAMB_COP_TMP_2_WERT | Lambdasollwert für Katüberhitzungsschutz, Matrix: bankselektiv und für 1 oder 2 Lambdaregler | - | LAMB_COP_TMP[1][2] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LAMB_CTL_COR_ACT_REL_MMV_CLC | 0x423F | STAT_LAMB_CTL_COR_ACT_REL_MMV_CLC_WERT | Berechnete gefiltete aktive relative LAM Korrektur (einschließlich LAM Adaption und LAM Regler) | % | LAMB_CTL_COR_ACT_REL_MMV_CLC | high | int | - | 50.0 | 32768.0 | 0.0 | - | 22 | - | - |
| LAMB_DELTA_AD_LAM_ADJ | 0x4240 | STAT_LAMB_DELTA_AD_LAM_ADJ_WERT | Adaptionswert Trimregelung | - | LAMB_DELTA_AD_LAM_ADJ[1] | high | int | - | 1.0 | 16384.0 | 0.0 | - | 22 | - | - |
| LAMB_DELTA_D_LAM_ADJ | 0x4241 | STAT_LAMB_DELTA_D_LAM_ADJ_WERT | D-Anteil vom Trimregler | - | LAMB_DELTA_D_LAM_ADJ[1] | high | int | - | 1.0 | 16384.0 | 0.0 | - | 22 | - | - |
| LAMB_DELTA_LAM_ADJ | 0x4242 | STAT_LAMB_DELTA_LAM_ADJ_WERT | Gesamte Ausgänge (P-Anteil und I-Anteil) vom Trimregler | - | LAMB_DELTA_LAM_ADJ[1] | high | int | - | 1.0 | 16384.0 | 0.0 | - | 22 | - | - |
| LAMB_DELTA_P_LAM_ADJ | 0x4243 | STAT_LAMB_DELTA_P_LAM_ADJ_WERT | P-Anteil vom Trimregler | - | LAMB_DELTA_P_LAM_ADJ[1] | high | int | - | 1.0 | 16384.0 | 0.0 | - | 22 | - | - |
| LAMB_LS_UP | 0x4244 | STAT_LAMB_LS_UP_WERT | Lambasignal vom WRAF Sensor | - | LAMB_LS_UP | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LAMB_SP_BAS | 0x4245 | STAT_LAMB_SP_BAS_WERT | Lambdarückmeldung für Basisdrehmomentberechnung | - | LAMB_SP_BAS[1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LAMB_SP_DELTA_OC_LSL_UP | 0x4246 | STAT_LAMB_SP_DELTA_OC_LSL_UP_WERT | Inkrement Lambdasollpunktrampe für aktiven Teil des linearen Sensor offene Leitungsüberprüfung | - | LAMB_SP_DELTA_OC_LSL_UP[1] | high | int | - | 32.0 | 32768.0 | 0.0 | - | 22 | - | - |
| LAMB_SP_FIL_HOM | 0x4247 | STAT_LAMB_SP_FIL_HOM_WERT | Ausgangssignal vom WRAF Sensormodel für homogenen Betrieb | - | LAMB_SP_FIL_HOM[1] | high | unsigned int | - | 4.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LAMB_SP_PCTL | 0x4248 | STAT_LAMB_SP_PCTL_WERT | Vorsteuerung Lambdasollpunkt | - | LAMB_SP_PCTL[1] | high | unsigned int | - | 4.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LOAD_TCO_MDL | 0x4249 | STAT_LOAD_TCO_MDL_WERT | Lastinformation für Kühlmitteltemperaturmodel | % | LOAD_TCO_MDL | high | unsigned int | - | 100.0 | 65535.0 | 0.0 | - | 22 | - | - |
| LV_CDN_VB_OBD1 | 0x424A | STAT_LV_CDN_VB_OBD1 | Batteriespannungsbedingung für OBD-I Diagnose erfüllt | 0/1 | LV_CDN_VB_OBD1 | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_CDN_VB_OBD2 | 0x424B | STAT_LV_CDN_VB_OBD2 | Batteriespannungsbedingung für OBD-II Diagnose erfüllt | 0/1 | LV_CDN_VB_OBD2 | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_CH | 0x424C | STAT_LV_CH | Generelle Katheizfunktion | 0/1 | LV_CH | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_CP_ACT | 0x424D | STAT_LV_CP_ACT | Bedingung EVAP-Regelung aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_CP_READY_TANK_CAN | 0x424E | STAT_LV_CP_READY_TANK_CAN | Tanksystem zur Spülung bereit | 0/1 | LV_CP_READY_TANK_CAN | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_CPS_CHK_END_DIAGCPS | 0x424F | STAT_LV_CPS_CHK_END_DIAGCPS | CPS Überprüfungen abgeschlossen | 0/1 | LV_CPS_CHK_END_DIAGCPS | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_DIAG_PUC_END_LSL_UP | 0x4250 | STAT_LV_DIAG_PUC_END_LSL_UP | Ergebnis der PUC Plausiblisierungsdiagnose existiert | 0/1 | LV_DIAG_PUC_END_LSL_UP[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_DIAG_PUC_SYM_LSL_UP | 0x4251 | STAT_LV_DIAG_PUC_SYM_LSL_UP | Entprelltes Fehlersymptom der Signalplausibilisierung vom Lambdasensor Vorkat während PUC | 0/1 | LV_DIAG_PUC_SYM_LSL_UP[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_FAC_LAM_ADJ_LAM_AD | 0x4252 | STAT_LV_FAC_LAM_ADJ_LAM_AD | Anforderung Lambdareglerverschiebung | 0/1 | LV_FAC_LAM_ADJ_LAM_AD[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_FAC_MPL_LAM_AD | 0x4253 | STAT_LV_FAC_MPL_LAM_AD | Lambdaadaption im Faktor Lernfeld aktiv | 0/1 | LV_FAC_MPL_LAM_AD[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_FL | 0x4254 | STAT_LV_FL | Volllastanforderung | 0/1 | LV_FL | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_FSD_ACT | 0x4255 | STAT_LV_FSD_ACT | Kraftstoffsystemdiagnose aktiv | 0/1 | LV_FSD_ACT[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_LAM_LIM_LAM_AD | 0x4256 | STAT_LV_LAM_LIM_LAM_AD | Anforderung für erzwungende Lambdaadaption | 0/1 | LV_LAM_LIM_LAM_AD[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_LAM_LSCL | 0x4257 | STAT_LV_LAM_LSCL | Lambdaregelung aktiv | 0/1 | LV_LAM_LSCL[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_LAM_NOT_STAT_CDN | 0x4258 | STAT_LV_LAM_NOT_STAT_CDN | Stopmodusaktivierung des Lambdareglers durch Wandfilm | 0/1 | LV_LAM_NOT_STAT_CDN | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_MAP_FRQ_CHK_ACT_DIAGCPS | 0x4259 | STAT_LV_MAP_FRQ_CHK_ACT_DIAGCPS | MAP Häufigkeitsüberprüfung | 0/1 | LV_MAP_FRQ_CHK_ACT_DIAGCPS | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_MAP_FRQ_DIF_CHK_DIAGCPS | 0x425A | STAT_LV_MAP_FRQ_DIF_CHK_DIAGCPS | Fehlererkennung nach MAP Überprüfung (1 = kein Fehler 0 = Fehler) | 0/1 | LV_MAP_FRQ_DIF_CHK_DIAGCPS | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_MFF_ADD_RNG_LAM_AD | 0x425B | STAT_LV_MFF_ADD_RNG_LAM_AD | Lambdaadaption im Offset-Lernfeld aktiv | 0/1 | LV_MFF_ADD_RNG_LAM_AD[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_MTC_CUR_OFF | 0x425C | STAT_LV_MTC_CUR_OFF | Status ETC Endstufe | 0/1 | LV_MTC_CUR_OFF | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_N_CTR_HLD_EFF_IGA_CST | 0x425D | STAT_LV_N_CTR_HLD_EFF_IGA_CST | Anhaltbedingung durch dynamische Motordrehzahlerkennung zur Beendigung der Zündwinkeldiagnosen im Leerlauf und in der Teillast | 0/1 | LV_N_CTR_HLD_EFF_IGA_CST | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_PUC | 0x425E | STAT_LV_PUC | Status Motorarbeitsbereich (Schubabschaltung) | 0/1 | LV_PUC | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_R_IT_OSC_ENA_LSL_IF | 0x425F | STAT_LV_R_IT_OSC_ENA_LSL_IF | Anforderung WRAF Schnittstelle interner Oszillator freigegeben | 0/1 | LV_R_IT_OSC_ENA_LSL_IF[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_SAWUP | 0x4260 | STAT_LV_SAWUP | Einspritzzeitkorrektur für Sekundärluft aktiv | 0/1 | LV_SAWUP | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_SEG_AD_ER | 0x4261 | STAT_LV_SEG_AD_ER | ER Segment Adaptionsprozess freigegeben | 0/1 | LV_SEG_AD_ER | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_SYN_ENG | 0x4262 | STAT_LV_SYN_ENG | Motorsynchronisation beendet | 0/1 | LV_SYN_ENG | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_TEMP_DEW_LS_DOWN | 0x4263 | STAT_LV_TEMP_DEW_LS_DOWN | Taupunktende an der Nachkat Lambdasonde erreicht | 0/1 | LV_TEMP_DEW_LS_DOWN[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_TEMP_DEW_LS_UP | 0x4264 | STAT_LV_TEMP_DEW_LS_UP | Taupunktende an der Vorkat Lambdasonde erreicht | 0/1 | LV_TEMP_DEW_LS_UP[1] | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LV_WUP | 0x4265 | STAT_LV_WUP | Warm-up Funktionen aktiv | 0/1 | LV_WUP | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MAF_CYL | 0x4266 | STAT_MAF_CYL_WERT | Luftmassenstrom zum Zylinder | kg/h | MAF_CYL | high | unsigned int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| MAF_INT_PUC_ACT | 0x4267 | STAT_MAF_INT_PUC_ACT_WERT | Luftmassenstromintegral während Schubabschaltungsphase | g | MAF_INT_PUC_ACT | high | unsigned int | - | 0.0444 | 1.0 | 0.0 | - | 22 | - | - |
| MAF_KGH_MDL_DIF | 0x4268 | STAT_MAF_KGH_MDL_DIF_WERT | Abweichung des modellierten Luftmassenstroms | kg/h | MAF_KGH_MDL_DIF | high | int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| MAF_SP | 0x4269 | STAT_MAF_SP_WERT | MAF Ausgangssollpunkt für inversen Luftpfad | mg/stroke | MAF_SP | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_ADD_LAM_AD | 0x426A | STAT_MFF_ADD_LAM_AD_WERT | Offset des Kraftstoffmassensollpunktes, gespeicherter Wert der Lambdaadaption | mg/stroke | MFF_ADD_LAM_AD[1] | high | int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_ADD_LAM_AD_OUT | 0x426B | STAT_MFF_ADD_LAM_AD_OUT_WERT | Offset des Kraftstoffmassensollpunktes, Ausgangswert von der Lambdaadaption | mg/stroke | MFF_ADD_LAM_AD_OUT[1] | high | int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_AST | 0x426C | STAT_MFF_AST_WERT | Berechneter Kraftstoffmassenstrom nach Start | mg/stroke | MFF_AST | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_BAS | 0x426D | STAT_MFF_BAS_WERT | Basis Einspritzungs-Kraftstoffmassenstrom (homogene Ladung) | mg/stroke | MFF_BAS | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_COR_1 | 0x426E | STAT_MFF_COR_1_WERT | Arbeitspunktkorrektur für die einspritzende Kraftstoffmasse (Zylinder 1) | - | MFF_COR[1] | high | unsigned int | - | 2.0 | 65536.0 | 0.0 | - | 22 | - | - |
| MFF_COR_2 | 0x426F | STAT_MFF_COR_2_WERT | Arbeitspunktkorrektur für die einspritzende Kraftstoffmasse (Zylinder 2) | - | MFF_COR[2] | high | unsigned int | - | 2.0 | 65536.0 | 0.0 | - | 22 | - | - |
| MFF_SP | 0x4270 | STAT_MFF_SP_WERT | Kraftstoffmassensollpunkt nach Verbrennungsauswahl | mg/stroke | MFF_SP[1] | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_SP_HOM_ENG | 0x4271 | STAT_MFF_SP_HOM_ENG_WERT | Berechneter Kraftstoffmassenstrom für Tankentlüftung | mg/stroke | MFF_SP_HOM_ENG[1] | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_SP_HOM_MV | 0x4272 | STAT_MFF_SP_HOM_MV_WERT | Kraftstoffmassensollpunkt für homogenen Modus, Mittelwert | mg/stroke | MFF_SP_HOM_MV | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFF_ST_INJ | 0x4273 | STAT_MFF_ST_INJ_WERT | Kalibrierte Start-Einspritz-Kraftstoffmasse | mg/stroke | MFF_ST_INJ | high | unsigned int | - | 0.0212 | 1.0 | 0.0 | - | 22 | - | - |
| MFL_GAS_IM_AIRT | 0x4274 | STAT_MFL_GAS_IM_AIRT_WERT | Luftmassenstrom am Ansaugrohr für AIRT Aggregat | kg/h | MFL_GAS_IM_AIRT | high | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| MIS_CTR_A_1 | 0x4275 | STAT_MIS_CTR_A_1_WERT | Anzahl Aussetzer (zylinder individuell) nach Kombination und Gewichtung in CARB A Fenster, Zylinder 1 | - | MIS_CTR_A[0] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MIS_CTR_A_2 | 0x4276 | STAT_MIS_CTR_A_1_WERT | Anzahl Aussetzer (zylinder individuell) nach Kombination und Gewichtung in CARB A Fenster, Zylinder 2 | - | MIS_CTR_A[1] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MIS_CTR_B_1 | 0x4277 | STAT_MIS_CTR_B_1_WERT | Anzahl Aussetzer (zylinder individuell) nach Kombination und Gewichtung in CARB B Fenster, Zylinder 1 | - | MIS_CTR_B[0] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MIS_CTR_B_2 | 0x4278 | STAT_MIS_CTR_B_2_WERT | Anzahl Aussetzer (zylinder individuell) nach Kombination und Gewichtung in CARB B Fenster, Zylinder 2 | - | MIS_CTR_B[1] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| N_TAR_REX_REQ | 0x4279 | STAT_N_TAR_REX_REQ_WERT | Angeforderte Zieldrehzahl für Range-Extender | 1/min | N_TAR_REX_REQ | high | unsigned char | - | 32.0 | 1.0 | 0.0 | - | 22 | - | - |
| O2L_MAX_CAT_GAP_AFL_COR | 0x427A | STAT_O2L_MAX_CAT_GAP_AFL_COR_WERT | Korrigiertes maximales OSC für Katalysator bei aktuellem AFL Überwachungszyklus | g | O2L_MAX_CAT_GAP_AFL_COR[1] | high | unsigned int | - | 2.6168 | 65535.0 | 0.0 | - | 22 | - | - |
| POW_MMV_LSH_DOWN | 0x427B | STAT_POW_MMV_LSH_DOWN_WERT | Verschobener Mittelwert der hinteren Lambdasondenheizung | W | POW_MMV_LSH_DOWN[1] | high | unsigned int | - | 84.4987 | 65535.0 | 0.0 | - | 22 | - | - |
| PQ | 0x427C | STAT_PQ_WERT | Druckquotient an Drosselklappe | - | PQ | high | unsigned int | - | 1.0 | 65536.0 | 0.0 | - | 22 | - | - |
| PQ_AIRT | 0x427D | STAT_PQ_AIRT_WERT | Ladungsdruckverhältnis für AIRT Aggregat | - | PQ_AIRT | high | unsigned char | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| RATE_HEAT_IM | 0x427E | STAT_RATE_HEAT_IM_WERT | Gespeicherte Wärmemenge im Ansaugrohr während langer Leerlaufphase | - | RATE_HEAT_IM | high | unsigned int | - | 0.02 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_CDN_CP | 0x427F | STAT_STATE_CDN_CP | Aktivierungsbedingung für Verdunstungsemissions-Regulierungsfunktion | 0-n | STATE_CDN_CP | high | unsigned char | TAB_CDN_CP | - | - | - | - | 22 | - | - |
| STATE_CP | 0x4280 | STAT_STATE_CP | Status Verdunstungsemissions-Regulierungsfunktion | 0-n | STATE_CP | high | unsigned char | TAB_CP | - | - | - | - | 22 | - | - |
| STATE_FSD | 0x4281 | STAT_STATE_FSD | Status Kraftstoffsystemdiagnose für Lambdaadpationsüberwachung | 0-n | STATE_FSD[1] | high | unsigned char | TAB_FSD | - | - | - | - | 22 | - | - |
| STATE_FSD_LAM_LIM | 0x4282 | STAT_STATE_FSD_LAM_LIM | Status Kraftstoffsystemdiagnose für Lambdareglerüberwachung | 0-n | STATE_FSD_LAM_LIM[1] | high | unsigned char | TAB_FSD_LAM_LIM | - | - | - | - | 22 | - | - |
| STATE_FSD_OPT | 0x4283 | STAT_STATE_FSD_OPT | Status Kraftstoffsystemdiagnose für optionale Lambdaadpationsüberwachung | 0-n | STATE_FSD_OPT[1] | high | unsigned char | TAB_FSD_OPT | - | - | - | - | 22 | - | - |
| STATE_HEAT_TIG_PLAUS | 0x4284 | STAT_STATE_HEAT_TIG_PLAUS | Status für Wärmespeicherung im Ansaugrohr für TIG_PLAUS Diagnose | 0-n | STATE_HEAT_TIG_PLAUS | high | unsigned char | TAB_HEAT_TIG_PLAUS | - | - | - | - | 22 | - | - |
| STATE_LAM_AD_MPL | 0x4285 | STAT_STATE_LAM_AD_MPL | Status der Lambdaadaption | 0-n | STATE_LAM_AD_MPL[1] | high | unsigned char | TAB_LAM_AD_MPL | - | - | - | - | 22 | - | - |
| STATE_LSH_DOWN | 0x4286 | STAT_STATE_LSH_DOWN | Aktueller Lambdaheizungsstatus, Nachkat | 0-n | STATE_LSH_DOWN[1] | high | unsigned char | TAB_LSH_DOWN | - | - | - | - | 22 | - | - |
| STATE_LSH_UP | 0x4287 | STAT_STATE_LSH_UP | Aktueller Lambdaheizungsstatus, Vorkat | 0-n | STATE_LSH_UP[1] | high | unsigned char | TAB_LSH_UP | - | - | - | - | 22 | - | - |
| STATE_LSL_IF_CONF_SPI_RD | 0x4288 | STAT_STATE_LSL_IF_CONF_SPI_RD_WERT | Inhalt des Konfigurationsregisters: erfasste Verzögerungszeit bei Sensorunterbrechung und Icp Wert | - | STATE_LSL_IF_CONF_SPI_RD[1] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_LSL_IF_CONF_SPI_WR | 0x4289 | STAT_STATE_LSL_IF_CONF_SPI_WR_WERT | Zuordnung des zu schreibenden Inhaltes auf ATIC42 INIT_REG_1 | - | STATE_LSL_IF_CONF_SPI_WR[1] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_LSL_IF_SPI_RD | 0x428A | STAT_STATE_LSL_IF_SPI_RD_WERT | Bitfeld, Zuordnung verifizierter Inhalte vom ATIC42 Konfigurationsregister | - | STATE_LSL_IF_SPI_RD[1] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_LSL_IF_SPI_WR | 0x428B | STAT_STATE_LSL_IF_SPI_WR_WERT | Bitfeld, Zuordnung des zu schreibenden Inhaltes auf ATIC42 INIT_REG_1 | - | STATE_LSL_IF_SPI_WR[1] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_OBD_LSH_DOWN | 0x428C | STAT_STATE_OBD_LSH_DOWN | Angezeigte aktuelle Phase der Lambdasondenheizung für OBDII Diagnose | 0-n | STATE_OBD_LSH_DOWN[1] | high | unsigned char | TAB_OBD_LSH_DOWN | - | - | - | - | 22 | - | - |
| STATE_OPM_REX_AV | 0x428D | STAT_STATE_OPM_REX_AV | Arbeitsstatus des Range Extenders | 0-n | STATE_OPM_REX_AV | high | unsigned char | TAB_STATE_OPM_REX | - | - | - | - | 22 | - | - |
| STATE_OPM_REX_REQ | 0x428E | STAT_STATE_OPM_REX_REQ | Angeforderter Arbeitsstatus des Range Extenders | 0-n | STATE_OPM_REX_REQ | high | unsigned char | TAB_STATE_OPM_REX | - | - | - | - | 22 | - | - |
| STATE_READY | 0x428F | STAT_STATE_READY_WERT | Readiness Status Berechnung | - | STATE_READY | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_READY_OBD_1 | 0x4290 | STAT_STATE_READY_OBD_1_WERT | Readiness code completion status 1 | - | STATE_READY_OBD_1 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_READY_OBD_2 | 0x4291 | STAT_STATE_READY_OBD_2_WERT | Readiness code completion status 2 | - | STATE_READY_OBD_2 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATE_READY_OBD_3 | 0x4292 | STAT_STATE_READY_OBD_3_WERT | Readiness code completion status 3 | - | STATE_READY_OBD_3 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_AST_DC | 0x4293 | STAT_T_AST_DC_WERT | Zeit nach erstem Start des Fahrzyklus (RSG-Variante) | s | T_AST_DC | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| T_DEC_FSD_STOP_OIL | 0x4294 | STAT_T_DEC_FSD_STOP_OIL_WERT | Timer für Herabsetzen des Entprellungszählers der Ölverdünnungserkennung der Tanksystemdiagnose | s | T_DEC_FSD_STOP_OIL | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_CUS_DIAG_2 | 0x4295 | STAT_T_ES_CUS_DIAG_2_WERT | Vergleichstimer für Abstellzeit-Plausibilitätsdiagnose 2 | s | T_ES_CUS_DIAG_2 | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_CUS_ST_DIAG | 0x4296 | STAT_T_ES_CUS_ST_DIAG_WERT | Abstellzeitdauer beim Start des Fahrzyklus | s | T_ES_CUS_ST_DIAG | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_CUS_TCO_FAST_DIAG_MAX | 0x4297 | STAT_T_ES_CUS_TCO_FAST_DIAG_MAX_WERT | Berechnete maximale Abstellzeit für TCO_FAST Diagnose | s | T_ES_CUS_TCO_FAST_DIAG_MAX | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_CUS_TCO_SLOW_DIAG_MIN | 0x4298 | STAT_T_ES_CUS_TCO_SLOW_DIAG_MIN_WERT | Berechnete minimale Abstellzeit für TCO_FAST Diagnose | s | T_ES_CUS_TCO_SLOW_DIAG_MIN | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_LAM_AD_ACT_FSD | 0x4299 | STAT_T_LAM_AD_ACT_FSD_WERT | Zähler für Aktivierung der erzwungenen Lambdaadaption | s | T_LAM_AD_ACT_FSD[1] | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| T_POW_RISE_LSH_DOWN | 0x429A | STAT_T_POW_RISE_LSH_DOWN_WERT | Timer für Anzeige der Dauer der Vorheiz- und nach Taupunktendephase, Nachkat | s | T_POW_RISE_LSH_DOWN[1] | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| T_POW_RISE_LSH_UP | 0x429B | STAT_T_POW_RISE_LSH_UP_WERT | Timer für Anzeige der Dauer der Vorheiz- und nach Taupunktendephase, Vorkat | s | T_POW_RISE_LSH_UP[1] | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| T_REL_CAN_2 | 0x429C | STAT_T_REL_CAN_2_WERT | Relativerzeitzähler | s | T_REL_CAN_2 | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_CUS_DIAG_3 | 0x429D | STAT_T_ES_CUS_DIAG_3_WERT | Vergleichstimer für Abstellzeit-Plausibilitätsdiagnose 3 | s | T_ES_CUS_DIAG_3 | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TCO_MDL_LIH | 0x429E | STAT_TCO_MDL_LIH_WERT | Modellierte Kühlmitteltemperatur | °C | TCO_MDL[LIH] | high | int | - | 256.0 | 32768.0 | 0.0 | - | 22 | - | - |
| TCO_MDL_STUCK_L_COOL_MON | 0x429F | STAT_TCO_MDL_STUCK_L_COOL_MON_WERT | Modellierte Kühlmitteltemperatur | °C | TCO_MDL[STUCK_L_COOL_MON] | high | int | - | 256.0 | 32768.0 | 0.0 | - | 22 | - | - |
| TCO_MDL_TH | 0x42A0 | STAT_TCO_MDL_TH_WERT | Modellierte Kühlmitteltemperatur | °C | TCO_MDL[TH] | high | int | - | 256.0 | 32768.0 | 0.0 | - | 22 | - | - |
| TCO_ST | 0x42A1 | STAT_TCO_ST_WERT | Kühlmitteltemperatur beim Start | °C | TCO_ST | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22 | - | - |
| TCO_STOP_ST | 0x42A2 | STAT_TCO_STOP_ST_WERT | Differenz Kühlmitteltemperatur zwischen Motorstopp und Motorstart | °C | TCO_STOP_ST | high | unsigned char | - | 0.75 | 1.0 | 0.0 | - | 22 | - | - |
| TEG_DYN_LS_DOWN | 0x42A3 | STAT_TEG_DYN_LS_DOWN_WERT | Abgastemperatur bei Lambdasondensensor Nachkat | °C | TEG_DYN_LS_DOWN[1] | high | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEG_DYN_LS_UP | 0x42A4 | STAT_TEG_DYN_LS_UP_WERT | Abgastemperatur bei Lambdasondensensor Vorkat | °C | TEG_DYN_LS_UP[1] | high | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMP_CAT_DYN_MDL | 0x42A5 | STAT_TEMP_CAT_DYN_MDL_WERT | Modellierte Kattemperatur unter dynamischen Bedingungen | °C | TEMP_CAT_DYN_MDL[1] | high | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TI_1_MES_1 | 0x42A6 | STAT_TI_1_MES_1_WERT | Real ausgeführte zylinderindividuelle Einspritzzeit, Zylinder 1 | ms | TI_1_MES[0] | high | unsigned int | - | 0.0040 | 1.0 | 0.0 | - | 22 | - | - |
| TI_1_MES_2 | 0x42A7 | STAT_TI_1_MES_2_WERT | Real ausgeführte zylinderindividuelle Einspritzzeit, Zylinder 2 | ms | TI_1_MES[1] | high | unsigned int | - | 0.0040 | 1.0 | 0.0 | - | 22 | - | - |
| TIA_THR | 0x42A8 | STAT_TIA_THR_WERT | Lufttemperatur an der Drosselklappe | °C | TIA_THR | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22 | - | - |
| TIA_THR_ST | 0x42A9 | STAT_TIA_THR_ST_WERT | Lufttemperatur an der Drosselklappe beim Start | °C | TIA_THR_ST | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22 | - | - |
| TIG_IM_MES | 0x42AA | STAT_TIG_IM_MES_WERT | Ansauglufttemperatur im Saugrohr, gemessen | °C | TIG_IM_MES | high | int | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| TLTS_DIF_TLTS_STUCK_H | 0x42AB | STAT_TLTS_DIF_TLTS_STUCK_H_WERT | Erkannte TLTS Temperaturdifferenz des niedrigen Temperatursensors für stuck high Diagnose | °C | TLTS_DIF_TLTS_STUCK_H[TCE] | high | int | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| TLTS_MDL_2 | 0x42AC | STAT_TLTS_MDL_2_WERT | Modellierte Lufttemperatur von MDL_2 | °C | TLTS_MDL_2 | high | int | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| TLTS_MDL_2_ACT | 0x42AD | STAT_TLTS_MDL_2_ACT_WERT | Reale modellierte Lufttemperatur von MDL_2 | °C | TLTS_MDL_2_ACT | high | int | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| TLTS_STUCK_DIF_H | 0x42AE | STAT_TLTS_STUCK_DIF_H_WERT | Maximal erkannte TLTS Temperatur des niedrigen Temperatursensors für stuck high Diagnose | °C | TLTS_STUCK_DIF_H[TCE] | high | int | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| TLTS_STUCK_DIF_L | 0x42AF | STAT_TLTS_STUCK_DIF_L_WERT | Minimal erkannte TLTS Temperatur des niedrigen Temperatursensors für stuck high Diagnose | °C | TLTS_STUCK_DIF_L[TCE] | high | int | - | 0.0078 | 1.0 | 0.0 | - | 22 | - | - |
| TPS_DIF | 0x42B0 | STAT_TPS_DIF_WERT | Abweichung Drosselklappenposition | ° DK | TPS_DIF | high | int | - | 0.0073 | 1.0 | 0.0 | - | 22 | - | - |
| TPS_SP_AD | 0x42B1 | STAT_TPS_SP_AD_WERT | Sollwert Drosselklappenposition während Adaption | ° DK | TPS_SP_AD | high | unsigned int | - | 0.0073 | 1.0 | 0.0 | - | 22 | - | - |
| TQ_ADD_CH | 0x42B2 | STAT_TQ_ADD_CH_WERT | Drehmomentreserve für Katheizen | Nm | TQ_ADD_CH | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TQ_AV | 0x42B3 | STAT_TQ_AV_WERT | Reales statisches Motormoment beim Einkuppeln | Nm | TQ_AV | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TQ_MIS_ABS_CYL_1 | 0x42B4 | STAT_TQ_MIS_ABS_CYL_1_WERT | Finales absolutes Indexberechnungsergebnis, Zylinder 1 | Nm | TQ_MIS_ABS_CYL[0] | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TQ_MIS_ABS_CYL_2 | 0x42B5 | STAT_TQ_MIS_ABS_CYL_2_WERT | Finales absolutes Indexberechnungsergebnis, Zylinder 2 | Nm | TQ_MIS_ABS_CYL[1] | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TQI_ADD_MAX | 0x42B6 | STAT_TQI_ADD_MAX_WERT | Maximal mögliches anzeigendes Motormoment inklusive Drehmomentreserve von IGA_MIN oder IGA_MIN_TEG bezüglich der begrenzten ISC Reserve | Nm | TQI_ADD_MAX | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TQI_MIN_REQ | 0x42B7 | STAT_TQI_MIN_REQ_WERT | Minimal angezeites Motormoment, welches angefordert werden kann | Nm | TQI_MIN_REQ | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TQI_REQ_FAST_SEL | 0x42B8 | STAT_TQI_REQ_FAST_SEL_WERT | Schnell angezeigte Motormomentanforderung | Nm | TQI_REQ_FAST_SEL | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TQI_REQ_SLOW_SEL | 0x42B9 | STAT_TQI_REQ_SLOW_SEL_WERT | Langsam angezeigte Motormomentanforderung | Nm | TQI_REQ_SLOW_SEL | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TQI_SP | 0x42BA | STAT_TQI_SP_WERT | Sollwert Moment, schneller Pfad | Nm | TQI_SP | high | int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| TTIP_MES_LS_DOWN | 0x42BB | STAT_TTIP_MES_LS_DOWN_WERT | Hintere Lambdasondenkeramiktemperatur | °C | TTIP_MES_LS_DOWN[1] | high | int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| T_VLS_DOWN_DLY_L2R_SAE | 0x42BC | STAT_T_VLS_DOWN_DLY_L2R_SAE_WERT | Mode 06 - Testwert: Hinteres Lambdaverzögerungssignal bei L2R Wechsel | s | T_VLS_DOWN_DLY_L2R_SAE[1] | high | unsigned int | - | 0.0010 | 1.0 | 1.0 | - | 22 | - | - |
| T_VLS_DOWN_DLY_R2L_SAE | 0x42BD | STAT_T_VLS_DOWN_DLY_R2L_SAE_WERT | Mode 06 - Testwert: Hinteres Lambdaverzögerungssignal bei R2L Wechsel | s | T_VLS_DOWN_DLY_R2L_SAE[1] | high | unsigned int | - | 0.0010 | 1.0 | 0.0 | - | 22 | - | - |
| V_EFC_LSH_DOWN | 0x42BE | STAT_V_EFC_LSH_DOWN_WERT | Effektive finaler Ausgangswert der Heizungsspannung, Nachkat | V | V_EFC_LSH_DOWN[1] | high | unsigned char | - | 0.1016 | 1.0 | 0.0 | - | 22 | - | - |
| V_EFC_LSH_UP | 0x42BF | STAT_V_EFC_LSH_UP_WERT | Effektive finaler Ausgangswert der Heizungsspannung, Vorkat | V | V_EFC_LSH_UP[1] | high | unsigned char | - | 0.1016 | 1.0 | 0.0 | - | 22 | - | - |
| VLS_DOWN | 0x42C0 | STAT_VLS_DOWN_WERT | Gemessene Lambdasondenspannung, Nachkat | V | VLS_DOWN[1] | high | unsigned int | - | 0.0049 | 1.0 | 0.0 | - | 22 | - | - |
| VLS_DOWN_GRD_L2R_SAE | 0x42C1 | STAT_VLS_DOWN_GRD_L2R_SAE_WERT | Service 06h - Testwert: EGCP Systemdiagnose - mager nach fett | mV/s | VLS_DOWN_GRD_L2R_SAE[1] | high | int | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| VLS_DOWN_GRD_R2L_SAE | 0x42C2 | STAT_VLS_DOWN_GRD_R2L_SAE_WERT | Service 06h - Testwert: EGCP LS Wechelgradient von fett nach mager, Diagnose Nachkat | mV/s | VLS_DOWN_GRD_R2L_SAE[1] | high | int | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| VLS_DOWN_PEAK_MAX_SAE | 0x42C3 | STAT_VLS_DOWN_PEAK_MAX_SAE_WERT | Mode 06 - Testwert: Maximum Lambdasondenspannungscheck | V | VLS_DOWN_PEAK_MAX_SAE[1] | high | unsigned int | - | 7.9999 | 65535.0 | 0.0 | - | 22 | - | - |
| VLS_DOWN_PEAK_MIN_SAE | 0x42C4 | STAT_VLS_DOWN_PEAK_MIN_SAE_WERT | Mode 06 - Testwert: Minimum Lambdasondenspannungscheck | V | VLS_DOWN_PEAK_MIN_SAE[1] | high | unsigned int | - | 7.9999 | 65535.0 | 0.0 | - | 22 | - | - |
| VLS_SP_LAM_ADJ | 0x42C5 | STAT_VLS_SP_LAM_ADJ_WERT | Sollwert Trimmregler | V | VLS_SP_LAM_ADJ[1] | high | unsigned int | - | 0.0049 | 1.0 | 0.0 | - | 22 | - | - |
| VLS_UP_DIAG_PUC_UP_AFS | 0x42C6 | STAT_VLS_UP_DIAG_PUC_UP_AFS_WERT | Lineare Lambdasensorspannung, Vorkat, während PUC (AFS Symptom) für Leitungsunterbrechungsdiagnose | V | VLS_UP_DIAG_PUC_UP_AFS[1] | high | int | - | 0.0010 | 1.0 | 0.0 | - | 22 | - | - |
| VP_MAP | 0x42C7 | STAT_VP_MAP_WERT | Spannung des Ansaugdrucksensors | V | VP_MAP | high | unsigned int | - | 10.0 | 65536.0 | 0.0 | - | 22 | - | - |
| AMP_AD | 0x42C8 | STAT_AMP_AD_WERT | Angepasster Umgebungsdruck | hPa | AMP_AD | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AR_RED_AD_ADD | 0x42C9 | STAT_AR_RED_AD_ADD_WERT | Additvie adaptive Parameter | cm² | AR_RED_AD_ADD | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AR_RED_AD_FAC | 0x42CA | STAT_AR_RED_AD_ADD_WERT | Multiplikativer adaptiver Faktor | cm² | - | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAM_IN_MV_CAM_OFS_AD | 0x42CB | STAT_CAM_IN_MV_CAM_OFS_AD_WERT | Mittelwert der Messung CAM_IN | ° | cam_in_mv_cam_ofs_ad[0][0] | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_0 | 0x42CC | STAT_DIAG_INST_0_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) () | - | diag_inst[0] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_1 | 0x42CD | STAT_DIAG_INST_1_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (1) | - | diag_inst[1] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_2 | 0x42CE | STAT_DIAG_INST_2_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (2) | - | diag_inst[2] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_3 | 0x42CF | STAT_DIAG_INST_3_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (3) | - | diag_inst[3] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_4 | 0x42D0 | STAT_DIAG_INST_4_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (4) | - | diag_inst[4] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_5 | 0x42D1 | STAT_DIAG_INST_5_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (5) | - | diag_inst[5] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_6 | 0x42D2 | STAT_DIAG_INST_6_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (6) | - | diag_inst[6] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_7 | 0x42D3 | STAT_DIAG_INST_7_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (7) | - | diag_inst[7] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_8 | 0x42D4 | STAT_DIAG_INST_8_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (8) | - | diag_inst[8] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIAG_INST_9 | 0x42D5 | STAT_DIAG_INST_9_WERT | Index der Diagnoseinstanz IDX_ERR mit IDX_ERR = f(IDX_DYN) (9) | - | diag_inst[9] | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_AD_KNK_APP | 0x42DD | STAT_FAC_AD_KNK_APP_WERT | Multiplikativer Faktor für FAC_AD_KNK generiert aus Applikationsereignis (wird benutzt wenn LV_FAC_AD_KNK_APP aktiv ist) | - | fac_ad_knk_app | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_AD_WUP | 0x42DF | STAT_FAC_LAM_AD_WUP_WERT | fuel mass set point factor of lambda adaptation in warm-up phase | % | fac_lam_ad_wup[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_TCO_A | 0x42E0 | STAT_FAC_LAM_TCO_A_WERT | Labmdasondenausgang an C_TCO_A_LAM_AD_WUP | % | fac_lam_tco_a[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_TCO_B | 0x42E1 | STAT_FAC_LAM_TCO_B_WERT | Labmdasondenausgang an C_TCO_B_LAM_AD_WUP | % | fac_lam_tco_b[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_TCO_C | 0x42E2 | STAT_FAC_LAM_TCO_C_WERT | Labmdasondenausgang an C_TCO_C_LAM_AD_WUP | % | fac_lam_tco_c[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_TCO_D | 0x42E3 | STAT_FAC_LAM_TCO_D_WERT | Labmdasondenausgang an C_TCO_D_LAM_AD_WUP | % | fac_lam_tco_d[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_TCO_E | 0x42E4 | STAT_FAC_LAM_TCO_E_WERT | Labmdasondenausgang an C_TCO_E_LAM_AD_WUP | % | fac_lam_tco_e[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| IGA_MV_AD_KNK | 0x42E5 | STAT_IGA_MV_AD_KNK_WERT | Durchschnitt der Adaptionszyklen der Klopfkorrektur | ° | iga_mv_ad_knk | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LAB_DELTA_I_LAM_ADJ | 0x42E7 | STAT_LAMB_DELTA_I_LAM_AD_0_WERT | I share from trim control | - | lamb_delta_i_lam_adj[0] | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LV_MIL | 0x42E8 | STAT_LV_MIL_WERT | Boolean, die MIL-Ausgabe anzeigt | - | lv_mil | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LV_MIL_REQ_EXT | 0x42E9 | STAT_LV_MIL_REQ_EXT_WERT | MIL von einem anderen Steuergerät angefordert ohne Fehlerlöschungsfeedback und relevant für MIL-Statistik | - | lv_mil_req_ext | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TPS_AD_STEP | 0x42EA | STAT_TPS_AD_STEP_WERT | Drosselstufen der TPS-Adaption oder des Start-Checks | - | tps_ad_step | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VP_TPS_AD_BOL_1 | 0x42EB | STAT_VP_TPS_AD_BOL_1_WERT | Adaptionswert der unteren Grenze, TPS-Kanal 1 | V | vp_tps_ad_bol_1 | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VP_TPS_AD_BOL_2 | 0x42EC | STAT_VP_TPS_AD_BOL_2_WERT | Adaptionswert der unteren Grenze, TPS-Kanal 2 | V | vp_tps_ad_bol_2 | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur nach Filter | °C | TOIL | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Einlassnockenwellensensor Position in Grad Kurbelwelle | ° KW | PSN_CAM_IN[1] | high | unsigned int | - | 0.375 | 1.0 | -96.0 | - | 22 | - | - |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | ° DK | TPS_AV | high | unsigned int | - | 0.0073 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT | Status Bereitschaft Lamdasonde vor Kat | 0/1 | LV_IPLSL_VLD[1] | high | unsigned char | - | - | - | - | - | 22;2C | - | - |
| VLS_COR_LSL_SAE | 0x4702 | STAT_VLS_COR_LSL_SAE_WERT | Lambdasondenspannung | V | VLS_COR_LSL_SAE[1] | high | unsigned int | - | 8.0 | 65536.0 | 0.0 | - | 22 | - | - |
| LAMB_BAS | 0x4704 | STAT_LAMB_BAS_WERT | Bank selektiver Basis-Lambdasollwert | - | LAMB_BAS[1] | high | unsigned int | - | 64.0 | 65535.0 | 0.0 | - | 22 | - | - |
| SEKUNDAERLUFTPUMPE | 0x4804 | STAT_SEKUNDAERLUFTPUMPE | Bit für Sekundärluftpumpe aktiv | 0/1 | LV_SAP | high | unsigned char | - | - | - | - | - | 22 | - | - |
| KRAFTSTOFFPUMPE | 0x4805 | STAT_KRAFTSTOFFPUMPE | Bit für elektrische Kraftstoffpumpe aktiv | 0/1 | LV_EFP | high | unsigned char | - | - | - | - | - | 22 | - | - |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Kurbelwellendrehzahl | 1/min | N | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Fahrerwunsch Fahrpedal in % | % | PV_AV | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| FEOCNTR | 0x4897 | STAT_FEOCNTR_WERT | Verbrennungsmotorbetrieb Zündzykluszähler für Infotyp $12 | - | FEOCNTR | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LUFTMASSENSTROM | 0x4A1C | STAT_LUFTMASSENSTROM_WERT | Rohwert des gemessenen Luftmassenstromes | kg/h | MAF_KGH_MES_BAS | high | unsigned int | - | 1.0 | 32.0 | 0.0 | - | 22 | - | - |
| INDEXBERECHNUNGSERGEBNIS_ZYL1 | 0x4A1E | STAT_TQ_MIS_CYL1_WERT | Finales Indexberechnungsergebnis vom Zylinder 1 | Nm | tq_mis_cyl[0] | high | int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| INDEXBERECHNUNGSERGEBNIS_ZYL2 | 0x4A1F | STAT_TQ_MIS_CYL2_WERT | Finales Indexberechnungsergebnis vom Zylinder 2 | Nm | tq_mis_cyl[1] | high | int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ILUZ1 | 0x4A30 | STAT_TQ_DELTA_DET_MIS_1_WERT | Laufunruhewert für Zylinder 1 | Nm | TQ_DELTA_DET_MIS | high | int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ2 | 0x4A35 | STAT_TQ_DELTA_DET_MIS_2_WERT | Laufunruhewerte Zylinder 2 | Nm | TQ_DELTA_DET_MIS | high | int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKLO | 0x4A36 | STAT_KLOPFEN | Bit für Klopferkennung | 0/1 | LV_KNK | high | unsigned char | - | - | - | - | - | 22 | - | - |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Gemittelter Wert des Klopfsignals | V | NL[0] | high | unsigned int | - | 5.0 | 65535.0 | 0.0 | - | 22 | - | - |
| IUKZ2 | 0x4A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Gemittelter Wert des Klopfsignals | V | NL[1] | high | unsigned int | - | 5.0 | 65535.0 | 0.0 | - | 22 | - | - |
| IKSZ1 | 0x4A3D | STAT_KLOPFSIGNAL_ZYL1_WERT | Klopfsensorsignal Zylinder 1 | V | KNKS[0] | high | unsigned int | - | 5.0 | 65535.0 | 0.0 | - | 22 | - | - |
| IKSZ2 | 0x4A3E | STAT_KLOPFSIGNAL_ZYL2_WERT | Klopfsensorsignal Zylinder 2 | V | KNKS[1] | high | unsigned int | - | 5.0 | 65535.0 | 0.0 | - | 22 | - | - |
| OELDRUCKSCHALTER | 0x4A62 | STAT_OELDRUCKSCHALTER_WERT | Niedriger Öldruckschalter aktiv | - | LV_POIL_SWI_L | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Lambdaregelung, multiplikative Gemischadaption | % | FAC_LAM_AD[1] | high | int | - | 0.0015 | 1.0 | 0.0 | - | 22;2C | - | - |
| FAC_LAM_COR | 0x4A87 | STAT_OLAMREG_COR_WERT | Begrenzter Lambdareglerausgang mit Vorregelungskorrektur | % | FAC_LAM_COR[1] | high | int | - | 0.0015 | 1.0 | 0.0 | - | 22;2C | - | - |
| FAC_LAM_OUT | 0x4A89 | STAT_OLAMREG_WERT | Ausgang Lambdaregler | % | FAC_LAM_OUT | high | int | - | 0.0015 | 1.0 | 0.0 | - | 22;2C | - | - |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass Bank 1 Status Geberradadaption beendet / Nockenwelle Einlass | ° KW | PSN_AD_CAM_IN[1] | high | unsigned char | - | 0.375 | 1.0 | -48.0 | - | 22;2C | - | - |
| KURBELWELLENADAPTION | 0x4A99 | STAT_KW_ADAO_WERT | Prozessstatus Segmentadaptation: keine Adaption durchgeführt (=0), schnelle Adaption (=1) | - | LV_SEG_AD_AVL_ER | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UIPUMG | 0x5801 | STAT_IPUMG_WERT | Umgebungsdruck | kPa | AMP_SAE | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| PWMTEV | 0x5802 | STAT_PWMTEV_WERT | PWM Steuerungssignal für Tankentlüftung | % | CPPWM_CPS_SAE | high | unsigned char | - | 0.3922 | 1.0 | 0.0 | - | 22;2C | - | - |
| UILAM1 | 0x5803 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lamdasondenadaption | % | FAC_LAM_AD_SAE[1] | high | unsigned char | - | 0.7813 | 1.0 | -100.0 | - | 22;2C | - | - |
| UIINT1 | 0x5804 | STAT_INTEGRATOR_BANK1_WERT | Adaptionswert Lambdasonde | % | FAC_LAM_LIM_SAE[1] | high | unsigned char | - | 0.7813 | 1.0 | -100.0 | - | 22;2C | - | - |
| UIUDK1 | 0x5805 | STAT_UIUDK1_WERT | Absolute Drosselklappenposition (Sensor1) | % DK | FAC_TPS_1_SAE | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIUDK2 | 0x5806 | STAT_UIUDK2_WERT | Absolute Position der Drosselklappe (Sensor 2) | % DK | FAC_TPS_2_SAE | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIKTFS | 0x5807 | STAT_UIKTFS_WERT | Füllstand Kraftstofftank | % | FTL_SAE | high | unsigned char | - | 0.3922 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIGANG | 0x5808 | STAT_UIGANG_WERT | Zündwinkel | ° KW | IGA_IGC_SAE | high | unsigned char | - | 0.5 | 1.0 | -64.0 | - | 22;2C | - | - |
| UTRMLT | 0x5809 | STAT_UTRMLT_WERT | Sekundärer Gemischregelungswert (langzeitiger) | % | LAMB_DELTA_AD_LAM_ADJ_SAE[1] | high | unsigned char | - | 0.7813 | 1.0 | -100.0 | - | 22;2C | - | - |
| UTRMST | 0x580A | STAT_UTRMST_WERT | Sekundärer Gemischregelungswert (kurzzeitiger) | % | LAMB_DELTA_LAM_ADJ_SAE[1] | high | unsigned char | - | 0.7813 | 1.0 | -100.0 | - | 22;2C | - | - |
| UILAG1 | 0x580B | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambdawert | - | LAMB_KWP[1] | high | unsigned char | - | 0.0078 | 1.0 | 0.0 | - | 22;2C | - | - |
| UILAGSP1 | 0x580C | STAT_UILAGSP1_WERT | Lambda-Sollwert | - | LAMB_SP_KWP[1] | high | unsigned char | - | 0.0078 | 1.0 | 0.0 | - | 22;2C | - | - |
| MOTORLAST | 0x580D | STAT_MOTORLAST_WERT | Relative Motorlast | % | LOAD_CLC_SAE | high | unsigned char | - | 0.3922 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIPSAU | 0x580E | STAT_SAUGROHRDRUCK_WERT | Saugrohr- Absolutdruck | kPa | MAP_MES_SAE | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UINMOT | 0x580F | STAT_UINMOT_WERT | Motordrehzahl | 1/min | N_32 | high | unsigned char | - | 32.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UPWG1 | 0x5810 | STAT_UPWG1_WERT | Position Gaspedal (Sensor 1) | % | OBD_PV_1 | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22;2C | - | - |
| UPWG2 | 0x5811 | STAT_UPWG2_WERT | Position Gaspedal (Sensor 2) | % | OBD_PV_2 | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22;2C | - | - |
| UKSYS | 0x5812 | STAT_UKSYS | Status Kraftstoffsystem | 0-n | STATE_LS_SAE[1] | high | unsigned char | UKSYS_VAL | - | - | - | - | 22;2C | - | - |
| MOTORLAUFZEIT | 0x5813 | STAT_MOTORLAUFZEIT_WERT | Abgelaufene Zeit nach dem Motorstart | s | T_AST_ENVD | high | unsigned char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UITANS | 0x5814 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur vom HFM | °C | TIA_IM | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| UITSAUM | 0x5815 | STAT_UITSAUM_WERT | Lufttemperatur im Saugrohr | °C | TIG_MES_SAE[IM] | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| UITUMGM | 0x5816 | STAT_UITUMG_WERT | Umgebungslufttemperatur | °C | TAA_SAE | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| UITUMG | 0x5817 | STAT_UITUMG_WERT | Umgebungslufttemperatur | °C | TAM | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| UTCLNT | 0x5818 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlmitteltemperatur | °C | TLTS_MES_SAE[TEC] | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| UITKUM | 0x5819 | STAT_UITKUM_WERT | Motorkühlmitteltemperatur in Grad Celsius | °C | TCO_1_SYS | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| DK_POSITION | 0x581A | STAT_DK_POSITION_WERT | Relative Position der Drosselklappe | % DK | TPS_REL_SAE | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22;2C | - | - |
| DK_SOLLWERT | 0x581B | STAT_DK_SOLLWERT_WERT | Sollwert Drosselklappe | % DK | TPS_SP_SAE | high | unsigned char | - | 0.3922 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUK87 | 0x581C | STAT_KL87_SPANNUNG_WERT | Batteriespannung | V | VB_SAE | high | unsigned char | - | 0.25 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIUSV1 | 0x581D | STAT_UIUSV1_WERT | Spannung (Vor-Kat-Lambdasonde) | V | VLS_UP_KWP[1] | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIUSN1 | 0x581E | STAT_SONDENSPANNUNG_NACHKAT_WERT | ADC-Spannung Lambdasonde hinter Katalysator | V | VLS_DOWN_SAE[1] | high | unsigned char | - | 0.0050 | 1.0 | 0.0 | - | 22;2C | - | - |
| FAHRGESCHWINDIGKEIT | 0x581F | STAT_FAHRGESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | VS_SAE | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIUTANS | 0x5820 | STAT_UIUTANS_WERT | Spannung (Lufttemperatursensor) | V | VP_TIA_ENVD | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIUTANSST | 0x5821 | STAT_UIUTANSST_WERT | Lufttemperatur im Saugrohr beim ersten Start (aktueller Fahrzyklus) | °C | TIA_ST_DC[1] | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| UIUTUMGST | 0x5822 | STAT_UIUTUMGST_WERT | Umgebungslufttemperatur beim Start | °C | TAM_ST_DC | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| UIUPW1 | 0x5823 | STAT_UIUPW1_WERT | Spannung (Pedalwertsensor 1) | V | V_PVS1_ENVD | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| UIUPW2 | 0x5824 | STAT_UIUPW2_WERT | Spannung (Pedalwertsensor 2) | V | V_PVS_2_ENVD | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| VP_TCO_ENVD | 0x5825 | STAT_VP_TCO_ENVD_WERT | Spannung (Kühlmitteltemperatursensor) | V | VP_TCO_ENVD | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| TCO_ST_DC | 0x5826 | STAT_TCO_ST_DC_WERT | Kühlmitteltemperatur beim ersten Start (aktueller Fahrzyklus) | °C | TCO_ST_DC | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| TCO_STOP | 0x5827 | STAT_TCO_STOP_WERT | Kühlmitteltemperatur beim abstellen des Motors | °C | TCO_STOP | high | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| CL_MMV_ENVD | 0x5828 | STAT_CL_MMV_ENVD_WERT | Ladung im Aktivkohlefilter (gleitender Mittelwert) | - | CL_MMV_ENVD | high | unsigned char | - | 0.0078 | 1.0 | 0.0 | - | 22;2C | - | - |
| MFF_SP_MV_KWP | 0x5829 | STAT_MFF_SP_MV_KWP_WERT | Sollwert Kraftstoffmasse | mg/stroke | MFF_SP_MV_KWP | high | unsigned char | - | 5.4471 | 1.0 | 0.0 | - | 22;2C | - | - |
| TI_1_HOM_ENVD_1 | 0x582A | STAT_TI_1_HOM_ENVD_1_WERT | Einspritzzeit (Zylinderindividuell, erster Puls, Zylinder 1) | ms | TI_1_HOM_ENVD[1] | high | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| TI_1_HOM_ENVD_2 | 0x582B | STAT_TI_1_HOM_ENVD_2_WERT | Einspritzzeit (Zylinderindividuell, erster Puls, Zylinder 2) | ms | TI_1_HOM_ENVD[2] | high | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| UMAIRT | 0x582C | STAT_UMAIRT_WERT | Luftmassenstrom pro Segment | kg/h | MAF_KGH_ENVD | high | unsigned char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UMAIRS | 0x582D | STAT_UMAIRS_WERT | Luftmassenstrom pro Segment | mg/stroke | MAF_ENVD | high | unsigned char | - | 5.4471 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0X582E_WERT | 0x582E | STAT_ABGLEICH_DK_MODELL_WERT | AR_RED_DIF_REL | % | AR_RED_DIF_REL | high | unsigned char | - | 0.3906 | 1.0 | -50.0 | - | 22;2C | - | - |
| STAT_0X582F_WERT | 0x582F | STAT_ABGLEICH_EV_MODELL_WERT | Abgleich EV-Modell (Faktor) - PUT_MDL_DIF | % | PUT_MDL_DIF_MMV_REL_ENVD | high | unsigned char | - | 0.3906 | 1.0 | -50.0 | - | 22;2C | - | - |
| FAC_AD_KNK | 0x5830 | STAT_FAC_AD_KNK_WERT | Klopffaktor | - | FAC_AD_KNK | high | unsigned char | - | 0.0039 | 1.0 | 0.0 | - | 22;2C | - | - |
| V_TPS_1 | 0x5831 | STAT_V_TPS_WERT | Spannung (Drosselklappe Positionssensor 1) | V | V_TPS_1_KWP | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| V_TPS_2 | 0x5832 | STAT_V_TPS_2_WERT | Spannung (Drosselklappe Positionssensor 2) | V | V_TPS_2_KWP | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_0_MON | 0x5833 | STAT_ENVD_0_MON_WERT | Umweltdaten  für allgemeinen Fehler | - | ENVD_0_MON | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_1_MON | 0x5834 | STAT_ENVD_1_MON_WERT | Umweltdaten  für allgemeinen Fehler | - | ENVD_1_MON | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_2_MON | 0x5835 | STAT_ENVD_2_MON_WERT | Umweltdaten  für allgemeinen Fehler | - | ENVD_2_MON | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_3_MON | 0x5836 | STAT_ENVD_3_MON_WERT | Umweltdaten  für allgemeinen Fehler | - | ENVD_3_MON | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_0_MON_3 | 0x5837 | STAT_ENVD_0_MON_3_WERT | Umweltdaten beim Prozessorfehler | - | ENVD_0_MON_3 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_1_MON_3 | 0x5838 | STAT_ENVD_1_MON_3_WERT | Umweltdaten beim Prozessorfehler | - | ENVD_1_MON_3 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_2_MON_3 | 0x5839 | STAT_ENVD_2_MON_3_WERT | Umweltdaten beim Prozessorfehler | - | ENVD_2_MON_3 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_3_MON_3 | 0x583A | STAT_ENVD_3_MON_3_WERT | Umweltdaten beim Prozessorfehler | - | ENVD_3_MON_3 | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ENVD_0_MON_3_VD | 0x583B | STAT_ENVD_0_MON_3_VD_WERT | Umweltdaten beim Prozessorfehler bei Überwachung von Unter- und Überspannungsfehlern | - | ENVD_0_MON_3_VD | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ENVD_1_MON_3_VD | 0x583C | STAT_ENVD_1_MON_3_VD_WERT | Umweltdaten beim Prozessorfehler bei Überwachung von Unter- und Überspannungsfehlern | - | ENVD_1_MON_3_VD | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ENVD_2_MON_3_VD | 0x583D | STAT_ENVD_2_MON_3_VD_WERT | Umweltdaten beim Prozessorfehler bei Überwachung von Unter- und Überspannungsfehlern | - | ENVD_2_MON_3_VD | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ENVD_3_MON_3_VD | 0x583E | STAT_ENVD_3_MON_3_VD_WERT | Umweltdaten beim Prozessorfehler bei Überwachung von Unter- und Überspannungsfehlern | - | ENVD_3_MON_3_VD | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CPU_LOAD_RST_DET_KWP | 0x583F | STAT_CPU_LOAD_RST_DET_KWP_WERT | CPU Last bei Reset | % | CPU_LOAD_RST_DET_KWP | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_DYN_LSL_UP_DIAG_SAE_ENVD_L | 0x5840 | STAT_FAC_DYN_LSL_UP_DIAG_SAE_ENVD_L_WERT | Testwert für dynamische vordere Lambdasondendiagnose | - | FAC_DYN_LSL_UP_DIAG_SAE_ENVD_L | high | unsigned char | - | 0.0010 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_LAM_MV_MMV_KWP | 0x5841 | STAT_FAC_LAM_MV_MMV_KWP_WERT | Mittelwert des Lambdareglerausgangs | % | FAC_LAM_MV_MMV_KWP[1] | high | char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| FLOW_COR_CPS_KWP | 0x5842 | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | FLOW_COR_CPS_KWP | high | unsigned char | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| LAMB_DELTA_I_LAM_ADJ_KWP | 0x5843 | STAT_LAMB_DELTA_I_LAM_ADJ_KWP_WERT | I-Anteil der Trimregelung | - | LAMB_DELTA_I_LAM_ADJ_KWP[1] | high | unsigned char | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| LOAD_MIN_MIS_KWP | 0x5844 | STAT_LOAD_MIN_MIS_KWP_WERT | Nulllastwert für Aussetzererkennung | % | LOAD_MIN_MIS_KWP | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| LOAD_MIS_KWP | 0x5845 | STAT_LOAD_MIS_KWP_WERT | Lastwert für Aussetzererkennung | % | LOAD_MIS_KWP | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| LSHPWM_UP | 0x5846 | STAT_SONDENHEIZUNG_PWM_VORKAT_WERT | Lambdasondenheizung PWM vor Katalysator | - | LSHPWM_UP[1] | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| LSHPWM_DOWN | 0x5847 | STAT_SONDENHEIZUNG_PWM_NACHKAT_WERT | Lambdasondenheizung PWM hinter Katalysator | % | LSHPWM_DOWN[1] | high | unsigned char | - | 0.3906 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_KWP | 0x5848 | STAT_T_ES_KWP_WERT | Motorabstellzeit | min | T_ES_KWP | high | unsigned char | - | 4.0 | 1.0 | 0.0 | - | 22 | - | - |
| T_ES_CUS_KWP | 0x584A | STAT_T_ES_CUS_KWP_WERT | Abstellzeit | min | T_ES_CUS_KWP | high | unsigned char | - | 4.0 | 1.0 | 0.0 | - | 22 | - | - |
| TECU | 0x584B | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | °C | TECU | high | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| TPS_AD_STEP | 0x584C | STAT_TPS_AD_STEP | DK-Adaptionsschritt | 0-n | TPS_AD_STEP | high | unsigned char | TPS_ADAPTION | - | - | - | - | 22;2C | - | - |
| TQ_REQ_EXT_ENVD | 0x584D | STAT_TQ_REQ_EXT_ENVD_WERT | Extern angefordertes Kupplungdrehmoment | Nm | TQ_REQ_EXT_ENVD | high | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TQI_AV_KWP | 0x584E | STAT_MOTORMOMENT_AKTUELL_WERT | Aktuelles Moment | Nm | TQI_AV_KWP | high | char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| V_DUR_IGC_KWP_1 | 0x584F | STAT_FUNKENBRENNDAUER_ZYL_1_WERT | Funkenbrenndauer Zylinder 1 | ms | V_DUR_IGC_KWP[1] | high | unsigned char | - | 1.024 | 1.0 | 0.0 | - | 22 | - | - |
| V_DUR_IGC_KWP_2 | 0x5850 | STAT_FUNKENBRENNDAUER_ZYL_2_WERT | Funkenbrenndauer Zylinder 2 | ms | V_DUR_IGC_KWP[2] | high | unsigned char | - | 1.024 | 1.0 | 0.0 | - | 22 | - | - |
| FAC_MV_DIAG_DYN_LSL_UP_KWP | 0x5851 | STAT_FAC_MV_DIAG_DYN_LSL_UP_KWP_WERT | Mittelwert der Signalamplitude der Lambdasonde vor Katalysator | - | FAC_MV_DIAG_DYN_LSL_UP_KWP[1] | high | unsigned char | - | 0.0040 | 1.0 | 0.0 | - | 22 | - | - |
| VLS_DOWN_KWP | 0x5852 | STAT_SPANNUNG_LAMBDASONDE_NACHKAT_WERT | Spannung Lambdasonde hinter Katalysator | V | VLS_DOWN_KWP[1] | high | unsigned char | - | 0.0195 | 1.0 | 0.0 | - | 22 | - | - |
| DIST_DC_ST_ENVD | 0x5855 | STAT_KILOMETERZAEHLER_WERT | Kilometerzähler seit Beginn des aktuellen Fahrzyklus | km | DIST_DC_ST_ENVD | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| R_IT_LS_DOWN_KWP_H | 0x585C | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT_WERT | Oberes Byte Widerstand Lambdasonde hinter Katalysator | Ohm | R_IT_LS_DOWN_KWP_H[1] | high | unsigned char | - | 256.0 | 1.0 | 0.0 | - | 22 | - | - |
| R_IT_LS_DOWN_KWP_L | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT_UNTERES_BYTE_WERT | Unteres Byte Widerstand Lambdasonde hinter Katalysator | Ohm | R_IT_LS_DOWN_KWP_L[1] | low | unsigned char | - | 0.25 | 1.0 | 0.0 | - | 22 | - | - |
| R_IT_LS_UP_KWP_H | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT_WERT | Oberes Byte Widerstand Lambdasonde vor Katalysator | Ohm | R_IT_LS_DOWN_KWP_H[1] | high | unsigned char | - | 64.0 | 1.0 | 0.0 | - | 22 | - | - |
| R_IT_LS_UP_KWP_L | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT_UNTERES_BYTE_WERT | Unteres Byte Widerstand Lambdasonde vor Katalysator | Ohm | R_IT_LS_UP_KWP_L[1] | low | unsigned char | - | 0.25 | 1.0 | 0.0 | - | 22 | - | - |
| TTIP_MES_LS_UP_KWP | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator | °C | TTIP_MES_LS_UP_KWP[1] | high | char | - | 16.0 | 1.0 | 0.0 | - | 22 | - | - |
| N_32_MON | 0x58B8 | STAT_DREHZAHL_UEBERWACHUNG_WERT | Drehzahl Überwachung | 1/min | N_32_MON | high | unsigned char | - | 32.0 | 1.0 | 0.0 | - | 22 | - | - |
| SAF_DIF_SAE_ENVD_H | 0x58C0 | STAT_SAF_DIF_SAE_ENVD_H_WERT | Differenz zwischen modellierter und gemessener Sekundärluftmasse | kg/h | SAF_DIF_SAE_ENVD_H[1] | high | unsigned char | - | 0.25 | 1.0 | 0.0 | - | 22 | - | - |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Steuergerätetemperatur | °C | TECU | high | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| STEUERN_DK | 0x602A | - | Drosselklappe ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x602A | - |
| STEUERN_SLP | 0x60CB | - | Sekundärluftpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60CB | - |
| STEUERN_TEV | 0x60CF | - | Tankentlüftungsventil | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60CF | - |
| STEUERN_LSH1 | 0x60D0 | - | Lambdasondenheizung Vorkat ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D0 | - |
| STEUERN_LSH2 | 0x60D1 | - | Lambdasondenheizung Nachkat ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D1 | - |
| STEUERN_MIL | 0x60D4 | - | MIL | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D4 | - |
| STEUERN_EKP | 0x60D8 | - | EKP Ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D8 | - |
| STEUERN_EV1 | 0x60E1 | - | Einspritzventil 1 ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60E1 | - |
| STEUERN_EV2 | 0x60E2 | - | Einspritzventil 2 ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60E2 | - |
| SLSCHECK | 0xF020 | - | Systemcheck Sekundärluftsystem | - | STATE_EOL_DGNC_SA | - | - | - | - | - | - | - | 31 | - | RES_0xF020 |
| TEVCHECK | 0xF022 | - | Systemcheck Tankentlüftungsventil | - | STATE_EOL_DGNC_CPS | - | - | - | - | - | - | - | 31 | - | RES_0xF022 |
| EVAUSBL | 0xF025 | - | Ansteuerung für Ausblendung der Einspritzventile | - | INH_IV_EXT_ADJ | - | - | - | - | - | - | - | 31 | ARG_0xF025 | RES_0xF025 |
| ADAP_SELEKTIV_LOESCHEN | 0xF030 | - | Adaptionen löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF030 | RES_0xF030 |
| ADAP2_SELEKTIV_LOESCHEN | 0xF031 | - | Adaptionen löschen (2) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF031 | RES_0xF031 |
| ZWDIAG | 0xF03A | - | Systemcheck CSERS | - | EOL_DGNC_CH_DIAG | - | - | - | - | - | - | - | 31 | ARG_0xF03A | RES_0xF03A |
| CYBL | 0xF03B | - | Einspritzzeitvertrimmung für CYBL | - | STATE_DGNC_CYBL_TRIM | - | - | - | - | - | - | - | 31 | ARG_0xF03B | RES_0xF03B |
| FSD | 0xF03C | - | Einspritzzeitvertrimmung für Fehlersimulation der Kraftstoffsystemdiagnose | - | STATE_DGNC_FSD_TRIM | - | - | - | - | - | - | - | 31 | ARG_0xF03C | RES_0xF03C |
| LAM_TRIM | 0xF03D | - | Lambdasignalvertrimmung | - | STATE_DGNC_LAM_TRIM | - | - | - | - | - | - | - | 31 | ARG_0xF03D | RES_0xF03D |
| MONTAGEMODUS | 0xF043 | - | Ansteuern Montage-Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF043 |
| DEAK_TEVREGELUNG | 0xF0CF | - | Deaktiviert die Regelung der Tankentlüftung | - | LV_DGNC_INH_CP | - | - | - | - | - | - | - | 31 | - | RES_0xF0CF |
| DEAK_LAMBDAREGELUNG | 0xF0D9 | - | Deaktiverung der Lambdaregelung | - | LV_LSCL_EXT_REQ | - | - | - | - | - | - | - | 31 | - | RES_0xF0D9 |
| CAT_DIAG | 0xF0EB | - | Katwirkungsgrad | - | STATE_EOL_DGNC_CAT_DIAG | - | - | - | - | - | - | - | 31 | - | RES_0xF0EB |
| LS_DYN | 0xF0EC | - | Lambdasensor Dynamik | - | STATE_EOL_DGNC_LS_DYN | - | - | - | - | - | - | - | 31 | - | RES_0xF0EC |
| RAM | 0xF0F2 | - | RAM sichern / Status RAM Sichern | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0F2 |

### STUATUS_EINSPRTZTRIMM

| WERT | TEXT |
| --- | --- |
| 0 | INI |
| 1 | OL_CDN |
| 2 | CL |
| 4 | OL_INTR |
| 8 | OL_ERR |
| 16 | CL_ERR |

### TAB_CDN_CP

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_CDN - keine Bedingung |
| 0x01 | CDN_NO_PURGE - keine Spülung |
| 0x02 | CDN_MIN_PURGE - minimale Spülung |
| 0x03 | CDN_RAMP_OPEN - Rampe geöffnet |
| 0x04 | CDN_RAMP_FAST - schnelles rampen |
| 0x05 | CDN_NO_FAST - Spülung mit Rampe |

### TAB_CP

| WERT | TEXT |
| --- | --- |
| 0x00 | CP_NOT_ACT - CP nicht aktiv |
| 0x01 | NO_PURGE - keine Spülung |
| 0x02 | RAMP_TO_NO_PURGE - Rampe für keine Spülung |
| 0x03 | WAIT_RAMP_OPEN - Warte bis Rampe geöffnet |
| 0x04 | MIN_PURGE - minimale Spülung |
| 0x05 | - |
| 0x06 | - |
| 0x07 | - |
| 0x08 | RAMP_OPEN - Rampe geöffnet |
| 0x09 | RAMP_OPEN_FAST - Rampe schnell geöffnet |
| 0x0A | MAX_PURGE - maximale Spülung |
| 0x0B | MAX_PURGE - Rampe geschlossen |

### TAB_FSD

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_SDR - kein Diagnoseergebnis in diesem DC verfügbar |
| 0x01 | NO_ERR - Diagnose mindestens einmal im DC ohne Fehler gelaufen |
| 0x02 | ADD_MAX - Fehler mit Symptom  max  im Adaptions-Offset-Lernfeld erkannt |
| 0x03 | ADD_MIN - Fehler mit Symptom  min  im Adaptions-Offset-Lernfeld erkannt |
| 0x04 | FAC_MAX - Fehler mit Symptom  max  im Faktor-Lernfeld erkannt |
| 0x05 | FAC_MIN - Fehler mit Symptom  min  im Faktor-Lernfeld erkannt |

### TAB_FSD_LAM_LIM

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_SDR - kein Diagnoseergebnis in diesem DC verfügbar |
| 0x01 | NO_ERR - Diagnose mindestens einmal im DC ohne Fehler gelaufen |
| 0x02 | LAM_MAX - Lambdareglerbegrenzung mit Symptom  max  erkannt |
| 0x03 | LAM_MIN - Lambdareglerbegrenzung mit Symptom  min  erkannt |

### TAB_FSD_OPT

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_SDR - kein Diagnoseergebnis in diesem DC verfügbar |
| 0x01 | NO_ERR - Diagnose mindestens einmal im DC ohne Fehler gelaufen |
| 0x02 | ADD_MAX - Fehler mit Symptom  max  im Adaptions-Offset-Lernfeld erkannt |
| 0x03 | ADD_MIN - Fehler mit Symptom  min  im Adaptions-Offset-Lernfeld erkannt |
| 0x04 | FAC_MAX - Fehler mit Symptom  max  im Faktor-Lernfeld erkannt |
| 0x05 | FAC_MIN - Fehler mit Symptom  min  im Faktor-Lernfeld erkannt |

### TAB_HEAT_TIG_PLAUS

| WERT | TEXT |
| --- | --- |
| 0x00 | CON - konstante Heizleistung |
| 0x01 | DEC - verringerte Heizleistung |
| 0x02 | INC - erhöhte Heizleistung |

### TAB_LAMB_SP_GAP

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF - aus |
| 0x01 | COND_LEAN - Konditionierungsphase mager |
| 0x02 | COND_RICH - Konditionierungphase fett |
| 0x03 | MEAS_LEAN - Messungsphase mager |
| 0x04 | MEAS_RICH - Messungsphase fett |
| 0x05 | CAT_PURGE - Katausräumen |
| 0x06 | RICH_PURGE - Fettspülen |
| 0x07 | WAIT- Warten |

### TAB_LAM_AD_MPL

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT - Lambdaadaption nicht aktiv |
| 0x01 | WAIT - Wartezustand |
| 0x02 | CDN_FAC - Bedingung für multiplikative Lambdaadaption erfüllt |
| 0x03 | CDN_ADD - Bedingung für additive Lambdaadaption erfüllt |
| 0x04 | ADAPT_FAC - multiplikative Lambdaadaption aktiv |
| 0x05 | ADAPT_ADD - additive Lambdaadaption aktiv |

### TAB_LSH_DOWN

| WERT | TEXT |
| --- | --- |
| 0x00 | LSH_OFF |
| 0x01 | LSH_POW_RISE |
| 0x02 | LSH_POW_RED |
| 0x03 | LSH_POW_FALL |
| 0x04 | LSH_POW_CTL |
| 0x05 | LSH_VB_PROT |
| 0x06 | LSH_TEMP_PROT |
| 0x07 | LSH_POW_RED_FAST |

### TAB_LSH_UP

| WERT | TEXT |
| --- | --- |
| 0x00 | LSH_OFF |
| 0x01 | LSH_POW_RISE |
| 0x02 | LSH_POW_RED |
| 0x03 | LSH_POW_FALL |
| 0x04 | LSH_POW_CTL |
| 0x05 | LSH_VB_PROT |
| 0x06 | LSH_TEMP_PROT |

### TAB_OBD_LSH_DOWN

| WERT | TEXT |
| --- | --- |
| 0x00 | DIAG_OFF - Initialisierungsstatus; keine Bedingungen treffen zu |
| 0x01 | DIAG_INIT - Initialisierungsbedingung & Applikation |
| 0x02 | LS_READY - Sensor arbeitsbereit + 1 |
| 0x03 | OBD1_DLY - OBDI Überwachung verzögernd erfüllt + 1 & 2 |
| 0x04 | OBD1_CHK - Keine OBDI Fehler aufgetreten +1, 2 & 3 |
| 0x05 | TEG_THD - Abgas unterhalb des Schwellwertes + 1, 2, 3 & 4 |
| 0x06 | POW_INT - Powerintegral überschritten + 1,2,3,4 & 5 |
| 0x07 | DIAG_ACT - Diagnoseerkennung aktiv |
| 0x08 | DIAG_END - Diagnoseerkennung abgeschlossen |

### TAB_STATE_OPM_REX

| WERT | TEXT |
| --- | --- |
| 0x00 | STB - Standby |
| 0x01 | ACT - Aktivierung |
| 0x02 | TQ_CTL - Drehmomentensteuerung |
| 0x03 | ENG_SPEED_CTL - Drehzahlregelung |
| 0x04 | AUT_STOP - Automatikstopp |
| 0x05 | EMERGENCY_STOP - Notstopp |
| 0x06 | - |
| 0x07 | - |
| 0x08 | - |
| 0x09 | - |
| 0x0A | - |
| 0x0B | - |
| 0x0C | - |
| 0x0D | - |
| 0x0E | - |
| 0x0F | SIG_INVALID - Signal ungültig |

### TAB_STATUS_RAM

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TAB_STAT_DIAGCPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Wartezeit |
| 0x02 | CL-Check |
| 0x03 | CPS-Check |
| 0x04 | Diagnoseende |

### TAB_STAT_DIAGSLS

| WERT | TEXT |
| --- | --- |
| 0x00 | SA_DIAG_INACT |
| 0x01 | SA_DIAG_DLY |
| 0x02 | SA_DIAG_INTR |
| 0x03 | SA_MIN_DIAG |
| 0x04 | SAV_DIAG_DLY |
| 0x05 | SA_DIAG_SAV |
| 0x06 | SA_DIAG_CHK |
| 0x07 | SA_DIAG_END |
| 0x08 | SA_DIAG_CNL |

### TAB_STAT_KATHEIZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Katheizen aus |
| 0x01 | Katheizen nach Start |
| 0x02 | Katheizen bei niedriger Last |

### TAB_STAT_LAM_TRIM

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TAB_STAT_SYSTEMCHECK_CSERS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TAB_STAT_SYSTEMCHECK_SLS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TAB_STAT_SYSTEMCHECK_TEV

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TAB_SYSTEMCHECK_CAT_DIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TAB_SYSTEMCHECK_LS_DYN

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Startbedingungen nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Undefinierter Zustand |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion ergebnislos beendet |
| 0x07 | Funktion abgebrochen |
| 0x08 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen Fehler erkannt |

### TPS_ADAPTION

| WERT | TEXT |
| --- | --- |
| 0 | AD_INIT - Initialzustand |
| 1 | AD_CHK_LIH - Prüfung der Notlaufposition |
| 2 | AD_LIH_POS - Adaption der Notlaufposition |
| 3 | AD_GO_TOL - Drosselklappe fährt in die obere Position |
| 4 | AD_SPR_CHK_1 - Obere Rückstellfeder und Notlaufprüfung |
| 5 | ST_CHK_END - Ende der Startprüfung |
| 6 | AD_GO_BOL - Drosselklappe fährt in unteren mechanischen Anschlag |
| 7 | AD_BOL_POS - Adaption und Prüfung des unteren mechanischen Anschlags |
| 8 | AD_GO_LIH - Drosselklappe fährt in eine Postition unterhalb der Notlaufposition |
| 9 | AD_SPR_CHK_2 - Prüfung der unteren Rückstellfeder |
| 10 | AD_END - Adaptation erfolgreich beendet |

### UKSYS_VAL

| WERT | TEXT |
| --- | --- |
| 0 | INI (Initial status at engine stop and ignition on) |
| 1 | OL_CDN (Open loop - has not yet satisfied conditions to go closed loop) |
| 2 | CL (Closed loop - using oxygen sensor(s) as feedback for fuel control) |
| 4 | OL_INTR (Open loop due to driving conditions) |
| 8 | OL_ERR (Open loop due to detected system fault) |
| 16 | CL_ERR (Closed loop, but fault with at least one oxygen sensor) |
