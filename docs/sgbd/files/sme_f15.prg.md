# sme_f15.prg

## General

|  |  |
| --- | --- |
| File | sme_f15.prg |
| Type | PRG |
| Jobs | 43 |
| Tables | 269 |
| Origin | BMW EA-412 Christian_Komposch |
| Revision | 8.003 |
| Author | BMW EA-412 Komposch |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Speicher Management Elektronik |  |  |
| ORIGIN | string | BMW EA-412 Christian_Komposch |  |  |
| REVISION | string | 8.003 |  |  |
| AUTHOR | string | BMW EA-412 Komposch |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.991 |  |  |
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

### _STATUS_FS_LESEN_CSC_JOB2

JobHeaderFormat UDS  : $22 ReadDataByIdentifier 0x650A _FS_LESEN_CSC

| Name | Type | Description |
| --- | --- | --- |
| _CSC_NUMBER | unsigned char | Nummer des CSCs 0..15 |

### _STATUS_FS_LESEN_CSC

JobHeaderFormat UDS  : $22 ReadDataByIdentifier 0x650A _FS_LESEN_CSC

| Name | Type | Description |
| --- | --- | --- |
| _CSC_NUMBER | unsigned char | Nummer des CSCs 0..15 |

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
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

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
| 0x4610 | Nackenwärmer Fahrer | 1 |
| 0x4620 | Nackenwärmer Beifahrer | 1 |
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
| 0x6720 | Elektrisches Expansionsventil | 1 |
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
| 0x5B50 | AR (augmented reality) Kamera | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5C10 | Wasserstand Sensor 1 | 1 |
| 0x5C18 | Wasserstand Sensor 2 | 1 |
| 0x5C20 | Diebstahlschutz Client für Airbag | 1 |
| 0x5C28 | Diebstahlschutz Client für Lenkrad | 1 |
| 0x5C30 | zentrale Lenkrad Elektronik | 1 |
| 0x5C40 | Funkempfänger vorne links | 1 |
| 0x5C44 | Funkempfänger vorne rechts | 1 |
| 0x5C48 | Funkempfänger hinten links | 1 |
| 0x5C4C | Funkempfänger hinten rechts | 1 |
| 0x5C50 | Türgriffelektronik Fahrer | 1 |
| 0x5C54 | Türgriffelektronik Beifahrer | 1 |
| 0x5C58 | Türgriffelektronik Fahrer hinten | 1 |
| 0x5C5C | Türgriffelektronik Beifahrer hinten | 1 |
| 0x5C60 | Sitzheizung Fahrer dritte Sitzreihe | 1 |
| 0x5C68 | Sitzheizung Beifahrer dritte Sitzreihe | 1 |
| 0x5C70 | Armauflagenheizung mitte hinten | 1 |
| 0x5C78 | Armauflagenheizung + Infrarotheizung Mittelkonsole vorne | 1 |
| 0x5C80 | Infrarotheizung Fahrer | 1 |
| 0x5C84 | Infrarotheizung Beifahrer | 1 |
| 0x5C88 | Infrarotheizung vorne | 1 |
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
| 0x5E62 | Innenbeleuchtung Konturlinie Fahrertür vorne hinten | 1 |
| 0x5E63 | Innenbeleuchtung Konturlinie Fahrertür hinten hinten | 1 |
| 0x5E64 | Innenbeleuchtung Konturlinie Beifahrertür vorne hinten | 1 |
| 0x5E65 | Innenbeleuchtung Konturlinie Beifahrertür hinten hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5E90 | Stromverteiler vorne | 1 |
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
| 0x7D01 | Ultraschallsensor vorne Seite links | 1 |
| 0x7D02 | Ultraschallsensor vorne Aussen links | 1 |
| 0x7D03 | Ultraschallsensor vorne Mitte links | 1 |
| 0x7D04 | Ultraschallsensor vorne Mitte rechts | 1 |
| 0x7D05 | Ultraschallsensor vorne Aussen rechts | 1 |
| 0x7D06 | Ultraschallsensor vorne Seite rechts | 1 |
| 0x7D07 | Ultraschallsensor hinten Seite rechts | 1 |
| 0x7D08 | Ultraschallsensor hinten Aussen rechts | 1 |
| 0x7D09 | Ultraschallsensor hinten Mitte rechts | 1 |
| 0x7D0A | Ultraschallsensor hinten Mitte links | 1 |
| 0x7D0B | Ultraschallsensor hinten Aussen links | 1 |
| 0x7D0C | Ultraschallsensor hinten Seite links | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
| 0xF070 | Motorrad Scheinwerfer | 1 |
| 0xF080 | Motorrad Radiobedienteil | 1 |
| 0xF090 | Motorrad Kombischalter links | 1 |
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
| 0x002D | PSA Peugeot Citroen |
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
| 0x00D0 | Dometic |
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
| 0x013A | ISSI Integrated Silicon Solution Inc |
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

### ARG_0X6500_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6501_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6502_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6506_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SCHUETZE_STEUERN | - | - | - | - | - | 0 = Schuetze nicht ansteuern, 1 = Schuetze schliessen, 2 = Schuetze oeffnen |

### ARG_0X6507_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SCHUETZE_STEUERN | - | - | - | - | - | 0 = Schuetze nicht ansteuern, 1 = Schuetze schliessen, 2 = Schuetze oeffnen |

### ARG_0X6508_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SCHUETZE_STEUERN | - | - | - | - | - | 0 = Schuetze nicht ansteuern, 1 = Schuetze schliessen, 2 = Schuetze oeffnen |

### ARG_0X6511_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SYM_MODUS | - | - | - | - | - | 0=Normalmodus, 1=Spannungsgesteuerter Modus, 3=Zeitgesteuertes Balancing, 4=keine Symmetrierung, 5=Entscheidung durch SW, keinen Einfluss durch Steuern-Job |

### ARG_0X6512_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_MB_SENDEN_1 | - | - | - | - | - | 0 - nicht aktiv, keine Botschaften versenden 1 - nur Multiplexer 1 verschicken 2 - nur Multiplexer 2 verschicken 3 - nur Multiplexer 3 verschicken .. 10 - nur Multiplexer 10 verschicken 11 - Messbotschaften zyklisch durchiterieren 255 - unplausibel |

### ARG_0X6519_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=kein Standby, 1=Standby |

### ARG_0X651B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=geregelt/keine Anforderung, 1=Schütze schließen |

### ARG_0X651C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=Betriebsgrenzen und ISO-Wächter auf dem Originalwert zurückstellen, 1=Betriebsgrenzen bis auf Sicherheitsgrenzen öffnen und ISO-Wächter deaktivieren |

### ARG_0X651E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=geregelt/keine Anforderung, 1=Schütze schließen |

### ARG_0X6520_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_HL_ERR_KAT0 | - | - | - | - | - | Alle High-Level-Fehler (DTCs) werden auf KAT0 gesetzt. |

### ARG_0X6521_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_NV_DATA_RESET_AKKLL | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0X6522_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_NV_DATA_RESET_VOL | - | - | - | - | - | 0= nicht Zurücksetzen   1 = Zurücksetzen |

### ARG_0X6523_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAVB_ENABLE_ISENS_FUSI | - | - | - | - | - | 0 = b_enable_isens_fusi wird von der HL-SW gebildet 1 = ansteuern Wert 0 für PP_SME_S_U08_b_IMon_req_Fusi d.H. FuSi Current sensor mode inactive 2 = ansteuern Wert 1 für PP_SME_S_U08_b_IMon_req_Fusi d.H. FuSi Diagmode 3 = ansteuern Wert 2 für PP_SME_S_U08_b_IMon_req_Fusi d.H. FuSi full Active |

### ARG_0X6524_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_MB_SENDEN_2 | - | - | - | - | - | 0 - nicht aktiv, keine Botschaften versenden 1 - nur Multiplexer 1 verschicken 2 - nur Multiplexer 2 verschicken 3 - nur Multiplexer 3 verschicken .. 15 - nur Multiplexer 15 verschicken 16 - Messbotschaften zyklisch durchiterieren 255 - unplausibel |

### ARG_0X6525_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Übernahme vom Ergebnis eines Kapazitätstests in den SoH_C-Schätzer |
| AKTION | 0-n | high | unsigned char | - | TAB_KAPATEST | - | - | - | - | - | Ergebnisübertragung des Kapazitätstests in SoH_C-Schätzer (0: keine Übernahme, 1: Übernahme) |

### ARG_0X6528_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort für Ausführung des Jobs |
| AKTION | 0-n | high | unsigned char | - | TAB_DEM_TEST | - | - | - | - | - | Aktivieren/Deaktivieren |

### ARG_0X6529_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEHLER_ID | HEX | high | unsigned long | - | - | - | - | - | - | - | ID des Fehlerspeichereintrags |
| FEHLERSTATUS | 0-n | high | unsigned char | - | TAB_FEHLERSTATUS_TEST | - | - | - | - | - | Fehlerstatus. Passed, Failed |

### ARG_0XAD75_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZIEL_SPANNUNG | + | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe Zielspannung |

### ARG_0XAD76_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_CSC | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer von CSC dessen DMC ermittelt werden soll |

### ARG_0XAD7C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen des Spannungshistogramms von Modul x |

### ARG_0XDD61_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht freigegeben; 1 = freigegeben |

### ARG_0XDD6F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLERKREISLAUF_VENTIL | 1.0 | 1.0 | 0.0 | - | - | Steuern des Kühlmittel-Ventils: Geschlossen oder offen |

### ARG_0XDD78_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktivieren der SOC Rekalbieriung (0 = nicht aktiv; 1 = aktiv) >> Job darf nur bei GEÖFFNETEN Schützen durchgeführt werden! |

### ARG_0XDDA1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLDREHZAHL_KUEHLMITTELPUMPE | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ansteuerung der Kühlmittelpumpe in Prozent (0-100%) |
| ZEITDAUER | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000.0 | Vorgabe der Zeitdauer während der die Kühlmittelpumpe aktiv ist |

### ARG_0XDDA5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLMITTELPUMPE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktivieren / Deaktivieren der Lauffähigkeit Kühlmittelpumpe (0 = deaktiviert, 1 = aktiviert) |

### ARG_0XDDC4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort für Veränderung des SOC Werts |
| SOC_VORGABE | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | SOC-Wert vorgeben ( 0 - 100%) |

### ARG_0XDDCD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktivieren / Deaktivierung des Sendens von CC-Meldung (0 = Senden nicht aktiv; 1 = Senden aktiv) |

### ARG_0XDDEA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zum Zurücksetzen des Zählers |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDDED_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CSC_IDX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index/Verbauposition der CSC mit folgenedem DMC |
| CSC_DMC | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | - | - | DMC String einer CSC (28-stellig) |

### ARG_0XDDEE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CSC_IDX_UEBERNEHMEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Indizes uebernehmen |

### ARG_0XDE35_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID_FELD_NR | 0-n | high | unsigned int | - | TAB_ID_FIELD | - | - | - | - | - | Eingabe der Nummer des ID-Feldes, welches geändert werden soll [2..13]. '0' und '1' werden SW-seitig auf Basis der HVS-Codierung geschrieben und sind nicht manipulierbar. |
| ID_FELD_HEXWERT | HEX | high | unsigned int | - | - | - | - | - | - | - | Eingabe des HEX-Werts des ID-Feldes // Eingabe mit 0x beginnen! Bsp.: D101 Eingabe: 0xD101 |

### ARG_0XDF78_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Temperaturhistogramms von Modul x |

### ARG_0XDF79_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Spannungsfehlergrenzenhistogramms von Modul x |

### ARG_0XDF7A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Spannungshistogramms von Modul x |

### ARG_0XDF7B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Servicejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0XDF7C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0XDF7F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Modul dessen Kapazität auf einem Wert gesetzt werden soll. xx = Modulnummer 88 = gesamter Speicher (99 = SoH_low) nur LI |
| KAPA_NEU | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neuer Kapazitätswert |

### ARG_0XDF80_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| SERIENNUMMER | HEX | high | unsigned long | - | - | - | - | - | - | - | Einzutragende Seriennummer |

### ARG_0XDF82_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0-n | high | unsigned char | - | TAB_RESET_SBOX | - | - | - | - | - | Verweis zum Zurücksetzen des entsprechendes Parameters |

### ARG_0XDF87_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZELLPACK_IDX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index/Verbauposition des Zellpack/Modul mit folgenedem DMC |
| ZELLPACK_DMC | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | - | - | DMC String eines Zellpacks/Moduls (28-stellig) |

### ARG_0XDF94_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF95_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF96_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF97_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF98_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF99_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDFA2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSFUEHRUNG_TESTFALL | 0-n | high | unsigned char | - | TAB_BGC_TESTFALL | - | - | - | - | - | Testfälle durch Auswahl starten 0x01 -->Testfall 1: sofortige Versendung des Battery-Guard-Calls 0x02 --> Testfall 2: zeitlich verzögerte Versendung des Battery-Guard-Calls (wird beim nächsten RTC-Aufwachvorgang der SME versendet) |

### ARG_0XDFA4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_SBOX_TAUSCH | - | - | - | - | - | Zähler für Anzahl der durchgeführten SBOX Tauschvorgänge bearbeiten. |

### ARG_0XDFAF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDFC3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Inkrementieren 1 = Inkrementieren |

### ARG_0XDFC4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDFC9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zum Setzen des neuen HVS-Eigenschutz-Stromintegralwerts |
| SET_LD_INTEGRAL | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert des neuen HVS-Eigenschutz-Stromintegrals |

### ARG_0XE519_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: nicht Zurücksetzen  0x01: Zurücksetzen |

### ARG_0XE5EF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zum Zurücksetzen des Zählers |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht zurücksetzen 1 = zurücksetzen |

### ARG_0XE5F0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zur Inkrementierung des Zählers |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Änderung, 1 = Zähler inkrementieren |

### ARG_0XE5F5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: nicht ansteuern 0x01: ansteuern |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

### BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | n=0 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | n=1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1<n<=NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | NrCellsProModul<n<=NrCellsTotal/2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | NrCellsTotal-NrCellsProModul < n <= NrCellsTotal -2 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | n = NrCellsTotal -1 |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | n= NrCellsTotal |

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
| 0x020700 | Energiesparmode aktiv | 0 | - |
| 0x020708 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020709 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02070A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02070B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02070C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02070D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x020720 | CAN-Fehler (Sammelfehler) | 0 | - |
| 0x020723 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x020726 | Hardwarefehler (Sammelfehler) | 0 | - |
| 0x02FF07 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x21F000 | DTC ENTFALLEN: SBOX: Hauptschalter Schuetzansteuerung ausgefallen | 0 | - |
| 0x21F001 | HVS: Battery Guard: Untere Reststandzeit erreicht | 0 | - |
| 0x21F002 | HVS: Battery Guard: Mittlere Reststandzeit erreicht | 0 | - |
| 0x21F003 | HVS: Battery Guard: Obere Reststandzeit erreicht | 0 | - |
| 0x21F004 | SME: EEPROM NV-Daten stehen auf Initialwerten | 0 | - |
| 0x21F005 | DTC ENTFALLEN: HVS: Hauptschalter: Schütze defekt | 0 | - |
| 0x21F006 | DTC ENTFALLEN: SME: Spannungsversorgung intern- - 5V Spannung zu niedrig | 0 | - |
| 0x21F007 | HVS: Stromversorgung CSC- - Kurzschluss nach Masse | 0 | - |
| 0x21F008 | HVS: Stromversorgung CSC- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F009 | HVS: Stromversorgung CSC- - offene Leitung | 0 | - |
| 0x21F00A | HVS: CSC Treiberfehler | 0 | - |
| 0x21F00B | SME: Werte der Echtzeituhr unplausibel | 0 | - |
| 0x21F00C | SME: Wakeup der Echtzeituhr fehlerhaft | 0 | - |
| 0x21F00D | Kühlventil: Kurzschluss nach Masse | 1 | - |
| 0x21F00E | Kühlventil: Kurzschluss nach Ubatt | 1 | - |
| 0x21F00F | Kühlventil: offene Leitung | 1 | - |
| 0x21F010 | Kühlventil: Treiberfehler | 1 | - |
| 0x21F011 | HVS: Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 0 | - |
| 0x21F012 | HVS: Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 0 | - |
| 0x21F013 | HVS: Temp.-Sensor Kühlung: Kurzschluss nach Masse | 0 | - |
| 0x21F014 | HVS: Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 | - |
| 0x21F015 | SME: EEPROM, NV-Daten- - Interner Fehler | 0 | - |
| 0x21F016 | SME: unerwarteter Reset festgestellt | 0 | - |
| 0x21F018 | SME: RAM Defekt in Initialisierungsphase | 0 | - |
| 0x21F019 | SME: RAM Defekt in Laufzeitphase | 0 | - |
| 0x21F01A | SME: ROM Defekt in Laufzeitphase | 0 | - |
| 0x21F01E | U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 | - |
| 0x21F01F | U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 | - |
| 0x21F020 | U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 | - |
| 0x21F021 | U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 | - |
| 0x21F022 | SBOX: Messbereichsüberschreitung U_ZK (oben) | 0 | - |
| 0x21F023 | SBOX: Messbereichsüberschreitung U_ZK (unten) | 0 | - |
| 0x21F024 | HVS: SBOX - BUS OFF | 0 | - |
| 0x21F025 | HVS: SBOX -  CRC-Fehler erkannt auf SME | 0 | - |
| 0x21F029 | HVS: SBOX -  Fehler Maincontroller | 0 | - |
| 0x21F02A | HVS: SBOX -  Sensorfehler | 0 | - |
| 0x21F02B | Klemme30: Wert außerhalb Bereich oben | 0 | - |
| 0x21F02C | DTC ENTFALLEN: Klemme 15: Wert außerhalb Bereich oben | 0 | - |
| 0x21F02D | HVS: Ruhestromabschaltung HW-Peripherie -  nicht funktionsfähig | 0 | - |
| 0x21F02E | HVS: Ruhestromabschaltung SME -  Timeout für Nachlaufdiagnosen | 0 | - |
| 0x21F02F | HVS: Ruhestromabschaltung SME -  Timeout im Nachlauf | 0 | - |
| 0x21F030 | DTC ENTFALLEN: HVS Heizung: Kommunikationsfehler | 0 | - |
| 0x21F031 | DTC ENTFALLEN: HVS Heizung: Kurzschluss Heizelement | 0 | - |
| 0x21F032 | DTC ENTFALLEN: HVS Heizung: Unterbrechung Heizelement | 0 | - |
| 0x21F033 | DTC ENTFALLEN: HVS Heizung: Mosfet Leistungsschalter allgemeiner Defekt | 0 | - |
| 0x21F034 | DTC ENTFALLEN: HVS Heizung: Mosfet Leistungsschalter Defekt durchgeschaltet | 0 | - |
| 0x21F035 | DTC ENTFALLEN: HVS Heizung: Mosfet Leistungsschalter Überhitzung | 0 | - |
| 0x21F036 | DTC ENTFALLEN: HVS Heizung: Kurzschluss ZK+ nach HV+ | 0 | - |
| 0x21F037 | DTC ENTFALLEN: HVS Heizung: Kurzschluss ZK+ nach HV- | 0 | - |
| 0x21F038 | DTC ENTFALLEN: HVS Heizung: Sicherung F2 ausgelöst | 0 | - |
| 0x21F039 | DTC ENTFALLEN: HVS Heizung: Strommessung Überlast | 0 | - |
| 0x21F03A | DTC ENTFALLEN: HVS Heizung: Spannungsmessung Batterie Unterspannung | 0 | - |
| 0x21F03B | DTC ENTFALLEN: HVS Heizung: Spannungsmessung Batterie Überspannung | 0 | - |
| 0x21F03C | DTC ENTFALLEN: HVS Heizung: Strommessung Plausibilisierung fehlerhaft | 0 | - |
| 0x21F03D | DTC ENTFALLEN: Stromsensor Heizung: außerhalb Bereich (oben) | 0 | - |
| 0x21F03E | DTC ENTFALLEN: Stromsensor Heizung: außerhalb Bereich (unten) | 0 | - |
| 0x21F040 | DTC ENTFALLEN: HVS SBOX -  Heizleistung ungueltig | 0 | - |
| 0x21F043 | INFO: Wasserpumpe nicht freigegeben | 0 | - |
| 0x21F044 | HVS: Wasserpumpe -  Event1 Trockenlauf | 0 | - |
| 0x21F045 | HVS: Wasserpumpe -  offene Leitung | 0 | - |
| 0x21F046 | HVS: Wasserpumpe -  Kurzschluss nach UBATT | 0 | - |
| 0x21F047 | HVS: Wasserpumpe -  Event2 Blockierung oder Überstrom oder Unterschreitung der Minimaldrehzahl | 0 | - |
| 0x21F048 | HVS: Wasserpumpe -  Event3 Übertemperatur erkannt | 0 | - |
| 0x21F049 | DTC ENTFALLEN: HVS: Wasserpumpe -  Event4 Reduzierte Pumperdrehzahl | 0 | - |
| 0x21F04A | HVS: Wasserpumpe -  Kurzschluss nach Masse | 0 | - |
| 0x21F04B | HVS: CSC CAN: Steuerungsmodul BUS OFF | 0 | - |
| 0x21F04C | DTC ENTFALLEN: HVS: CSC CAN: CSC fehlt | 0 | - |
| 0x21F04D | HVS: CSC CAN: CSC 1 fehlt | 0 | - |
| 0x21F04E | HVS: CSC CAN: CSC 2 fehlt | 0 | - |
| 0x21F04F | HVS: CSC CAN: CSC 3 fehlt | 0 | - |
| 0x21F050 | HVS: CSC CAN: CSC 4 fehlt | 0 | - |
| 0x21F051 | HVS: CSC CAN: CSC 5 fehlt | 0 | - |
| 0x21F052 | HVS: CSC CAN: CSC 6 fehlt | 0 | - |
| 0x21F053 | HVS: CSC CAN: CSC 7 fehlt | 0 | - |
| 0x21F054 | HVS: CSC CAN: CSC 8 fehlt | 0 | - |
| 0x21F055 | HVS: CSC CAN: CSC 9 fehlt | 0 | - |
| 0x21F056 | HVS: CSC CAN: CSC 10 fehlt | 0 | - |
| 0x21F057 | HVS: CSC CAN: CSC 11 fehlt | 0 | - |
| 0x21F058 | HVS: CSC CAN: CSC 12 fehlt | 0 | - |
| 0x21F059 | HVS: CSC CAN: CSC 13 fehlt | 0 | - |
| 0x21F05A | HVS: CSC CAN: CSC 14 fehlt | 0 | - |
| 0x21F05B | HVS: CSC CAN: CSC 15 fehlt | 0 | - |
| 0x21F05C | HVS: CSC CAN: CSC 16 fehlt | 0 | - |
| 0x21F061 | HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F062 | HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F063 | HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F064 | HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F065 | HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F066 | HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F067 | HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F068 | HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F069 | HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06A | HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06B | HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06C | HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06D | HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06E | HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06F | HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F070 | HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F071 | HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F072 | HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F073 | HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F074 | HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F075 | HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F076 | HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F077 | HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F078 | HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F079 | HVS: CSC 13 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F07A | HVS: CSC 13 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F07B | HVS: CSC 14 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F07C | HVS: CSC 14 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F07D | HVS: CSC 15 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F07E | HVS: CSC 15 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F07F | HVS: CSC 16 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F080 | HVS: CSC 16 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F081 | HVS: CSC 1 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F082 | HVS: CSC 1 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F083 | HVS: CSC 2 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F084 | HVS: CSC 2 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F085 | HVS: CSC 3 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F086 | HVS: CSC 3 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F087 | HVS: CSC 4 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F088 | HVS: CSC 4 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F089 | HVS: CSC 5 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F08A | HVS: CSC 5 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F08B | HVS: CSC 6 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F08C | HVS: CSC 6 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F08D | HVS: CSC 7 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F08E | HVS: CSC 7 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F08F | HVS: CSC 8 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F090 | HVS: CSC 8 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F091 | HVS: CSC 9 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F092 | HVS: CSC 9 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F093 | HVS: CSC 10 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F094 | HVS: CSC 10 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F095 | HVS: CSC 11 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F096 | HVS: CSC 11 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F097 | HVS: CSC 12 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F098 | HVS: CSC 12 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F099 | HVS: CSC 13 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F09A | HVS: CSC 13 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F09B | HVS: CSC 14 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F09C | HVS: CSC 14 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F09D | HVS: CSC 15 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F09E | HVS: CSC 15 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F09F | HVS: CSC 16 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F0A0 | HVS: CSC 16 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F0A1 | HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A2 | HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A3 | HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A4 | HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A5 | HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A6 | HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A7 | HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A8 | HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A9 | HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AA | HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AB | HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AC | HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AD | HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AE | HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AF | HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B0 | HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B1 | HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B2 | HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B3 | HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B4 | HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B5 | HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B6 | HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B7 | HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B8 | HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B9 | HVS: CSC 13 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0BA | HVS: CSC 13 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0BB | HVS: CSC 14 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0BC | HVS: CSC 14 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0BD | HVS: CSC 15 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0BE | HVS: CSC 15 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0BF | HVS: CSC 16 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0C0 | HVS: CSC 16 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0C1 | DTC ENTFALLEN: HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung aufgetreten | 0 | - |
| 0x21F0C2 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 1 aufgetreten | 0 | - |
| 0x21F0C3 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 2 aufgetreten | 0 | - |
| 0x21F0C4 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 3 aufgetreten | 0 | - |
| 0x21F0C5 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 4 aufgetreten | 0 | - |
| 0x21F0C6 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 5 aufgetreten | 0 | - |
| 0x21F0C7 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 6 aufgetreten | 0 | - |
| 0x21F0C8 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 7 aufgetreten | 0 | - |
| 0x21F0C9 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 8 aufgetreten | 0 | - |
| 0x21F0CA | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 9 aufgetreten | 0 | - |
| 0x21F0CB | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 10 aufgetreten | 0 | - |
| 0x21F0CC | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 11 aufgetreten | 0 | - |
| 0x21F0CD | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 12 aufgetreten | 0 | - |
| 0x21F0CE | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 13 aufgetreten | 0 | - |
| 0x21F0CF | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 14 aufgetreten | 0 | - |
| 0x21F0D0 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 15 aufgetreten | 0 | - |
| 0x21F0D1 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 16 aufgetreten | 0 | - |
| 0x21F0D2 | DTC ENTFALLEN HVS: CSC Funktion: Symmetriereinheit defekt | 0 | - |
| 0x21F0D3 | HVS: CSC Funktion: NTC_HW1/2 (MON) offene Leitung | 0 | - |
| 0x21F0D4 | HVS: CSC Funktion: Referenzspannung Sensorik  ausserhalb Bereich oben | 0 | - |
| 0x21F0D5 | HVS: CSC Funktion: thermisches Abschalten aufgetreten | 0 | - |
| 0x21F0D6 | HVS: CSC Funktion: Ungültige Anfrage empfangen | 0 | - |
| 0x21F0D7 | HVS: CSC Funktion: Symmetrierung nicht möglich, niedrigste Symmetrierspannung erreicht | 0 | - |
| 0x21F0D8 | HVS: CSC Funktion: CSC Wake-Up defekt | 0 | - |
| 0x21F0D9 | HVS: CSC Funktion: Kommunikation Frontend/CSC fehlgeschlagen | 0 | - |
| 0x21F0DA | DTC ENTFALLEN: HVS: CSC Funktion: ungültige CAN DB | 0 | - |
| 0x21F0DB | DTC ENTFALLEN HVS: CSC Funktion: Referenzspannung LTC6801 (MON) ausserhalb Bereich | 0 | - |
| 0x21F0DC | HVS: CSC Funktion: CAN Kommunikationsausfall detektiert | 0 | - |
| 0x21F0DD | HVS: CSC Funktion: ADC-Test Frontend nicht bestanden | 0 | - |
| 0x21F0DE | DTC ENTFALLEN HVS: CSC Funktion: ADC-Test 2 LTC6802 nicht bestanden | 0 | - |
| 0x21F0DF | HVS: CSC Funktion: LTC6801 Selbsttest nicht bestanden | 0 | - |
| 0x21F0E0 | HVS: CSC Funktion: RAM Selbsttest nicht bestanden | 0 | - |
| 0x21F0E1 | HVS: CSC Funktion: ROM Selbsttest nicht bestanden | 0 | - |
| 0x21F0E2 | DTC ENTFALLEN: HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten | 0 | - |
| 0x21F0E3 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F0E4 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F0E5 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F0E6 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F0E7 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F0E8 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F0E9 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F0EA | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F0EB | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 9 | 0 | - |
| 0x21F0EC | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 10 | 0 | - |
| 0x21F0ED | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 11 | 0 | - |
| 0x21F0EE | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 12 | 0 | - |
| 0x21F0EF | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 13 | 0 | - |
| 0x21F0F0 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 14 | 0 | - |
| 0x21F0F1 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 15 | 0 | - |
| 0x21F0F2 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 16 | 0 | - |
| 0x21F0F3 | HVS: CSC Funktion: Plausibilitätsfehler Zellspannung | 0 | - |
| 0x21F0F4 | HVS: CSC Funktion: Plausibilitätsfehler Zelltemperatur | 0 | - |
| 0x21F0F5 | DTC ENTFALLEN: HVS: CSC Funktion: kritischer Hardwaredefekt | 0 | - |
| 0x21F0F6 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 1 | 0 | - |
| 0x21F0F7 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 2 | 0 | - |
| 0x21F0F8 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 3 | 0 | - |
| 0x21F0F9 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 4 | 0 | - |
| 0x21F0FA | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 5 | 0 | - |
| 0x21F0FB | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 6 | 0 | - |
| 0x21F0FC | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 7 | 0 | - |
| 0x21F0FD | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 8 | 0 | - |
| 0x21F0FE | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 9 | 0 | - |
| 0x21F0FF | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 10 | 0 | - |
| 0x21F100 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 11 | 0 | - |
| 0x21F101 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 12 | 0 | - |
| 0x21F102 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 13 | 0 | - |
| 0x21F103 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 14 | 0 | - |
| 0x21F104 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 15 | 0 | - |
| 0x21F105 | HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 16 | 0 | - |
| 0x21F106 | HVS: CSC Funktion: Test auf offene Leitung nicht durchgefuehrt | 0 | - |
| 0x21F107 | DTC ENTFALLEN HVS: CSC Funktion: Reissleine fehlerhaft gezogen, PWM OK | 0 | - |
| 0x21F108 | DTC ENTFALLEN HVS: CSC Funktion: Reissleine fehlerhaft nicht gezogen, PWM nicht OK | 0 | - |
| 0x21F109 | Service Disconnect: steckt nicht | 1 | - |
| 0x21F10A | Service Disconnect: Auswertung unplausibel | 0 | - |
| 0x21F10B | Crash: Crash I (ACAN, reversibel) festgestellt | 1 | - |
| 0x21F10C | Crash: Crash II (KL30C, irreversibel) festgestellt | 1 | - |
| 0x21F10D | 12 V Versorgung (KL 30): Unterspannung | 1 | - |
| 0x21F10E | 12 V Versorgung (KL 30): Überspannung | 1 | - |
| 0x21F10F | DTC ENTFALLEN: 12 V Versorgung (KL 30 C): Unterspannung | 1 | - |
| 0x21F110 | Kühlventil: Ventil lässt sich nicht schließen | 1 | - |
| 0x21F111 | Kühlventil: Ventil lässt sich nicht öffnen | 1 | - |
| 0x21F112 | HVS: Hauptschalter: Abschaltung aufgrund KL30C Unterspannung | 1 | - |
| 0x21F114 | HVS: Hauptschalter: Lebensdauerende erreicht | 0 | - |
| 0x21F115 | HVS: Hauptschalter: neg. Schütz klebt | 0 | - |
| 0x21F116 | HVS: Hauptschalter: neg. Schütz lässt sich nicht schließen | 0 | - |
| 0x21F117 | HVS: Hauptschalter: pos. Schütz klebt | 0 | - |
| 0x21F118 | HVS: Hauptschalter: pos. Schütz lässt sich nicht schließen oder Sicherung ausgelöst | 0 | - |
| 0x21F119 | HVS: Hauptschalter: Vorlade Schütz klebt | 0 | - |
| 0x21F11A | HVS: Hauptschalter: Vorlade Schütz lässt sich nicht schließen oder Sicherung ausgelöst | 0 | - |
| 0x21F11B | Hauptschalter: Abschaltung unter Last festgestellt | 0 | - |
| 0x21F11C | DTC ENTFALLEN Stromüberwachung: Leitungsschutzgrenze verletzt | 1 | - |
| 0x21F11D | DTC ENTFALLEN Stromüberwachung: Zellsicherheitsgrenze verletzt | 1 | - |
| 0x21F11E | Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 1 | - |
| 0x21F11F | Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 0 | - |
| 0x21F121 | DTC ENTFALLEN: Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung | 0 | - |
| 0x21F122 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F123 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F124 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F125 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F126 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F127 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F128 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F129 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F12A | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 9 | 0 | - |
| 0x21F12B | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 10 | 0 | - |
| 0x21F12C | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 11 | 0 | - |
| 0x21F12D | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 12 | 0 | - |
| 0x21F12E | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 13 | 0 | - |
| 0x21F12F | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 14 | 0 | - |
| 0x21F130 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 15 | 0 | - |
| 0x21F131 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 16 | 0 | - |
| 0x21F132 | DTC_ENTFALLEN: Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung | 0 | - |
| 0x21F133 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F134 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F135 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F136 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F137 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F138 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F139 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F13A | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F13B | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 9 | 0 | - |
| 0x21F13C | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 10 | 0 | - |
| 0x21F13D | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 11 | 0 | - |
| 0x21F13E | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 12 | 0 | - |
| 0x21F13F | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 13 | 0 | - |
| 0x21F140 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 14 | 0 | - |
| 0x21F141 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 15 | 0 | - |
| 0x21F142 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 16 | 0 | - |
| 0x21F144 | HVS: U/i-Sensor - Kommunikationsausfall | 0 | - |
| 0x21F145 | Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 1 | - |
| 0x21F146 | Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 1 | - |
| 0x21F147 | HVS: HV-Interlock: kein Signal erzeugt | 0 | - |
| 0x21F148 | HV-Interlock: offene Leitung | 1 | - |
| 0x21F149 | HV-Interlock: Kurzschluss in Schleife | 1 | - |
| 0x21F14A | HV-Interlock: Kurzschluss nach Ubatt | 1 | - |
| 0x21F14B | HV-Interlock: Kurzschluss nach Masse | 1 | - |
| 0x21F14C | Isolationsüberwachung -  Isolationsfehler im Gesamtsystem (geschlossene Schütze) | 0 | - |
| 0x21F14D | Isolationsüberwachung -  Isolationswarnung im Gesamtsystem (geschlossene Schütze) | 0 | - |
| 0x21F14E | HVS: Isolationsüberwachung -  interner Isolationsfehler (offene Schütze) | 0 | - |
| 0x21F14F | HVS: Isolationsüberwachung -  Isolationsüberwachung deaktiviert | 0 | - |
| 0x21F150 | HVS: Isolationsüberwachung -  interne Isolationwarnung (offene Schütze) | 0 | - |
| 0x21F151 | HV-Powerdown im Energiesparmodus | 0 | - |
| 0x21F153 | DTC ENTFALLEN: Vorladung -  Strom zu hoch | 0 | - |
| 0x21F155 | Vorladung -  Zeit zu lang | 1 | - |
| 0x21F156 | Vorladung - Sbox Vorladebedingung nicht erfüllt | 0 | - |
| 0x21F157 | Vorladung -  Kurzschluss im Zwischenkreis detektiert | 0 | - |
| 0x21F159 | Plausibilität Stromwert -  Strom unplausibel. Kein Ersatzwert vorhanden | 0 | - |
| 0x21F15B | HVS: Plausibilität Zwischenkreisspannung -  Spannung fehlerhaft, kein Ersatzwert vorhanden | 0 | - |
| 0x21F15C | DTC ENTFALLEN: HVS: Zellspannungsmessung -  eine oder mehrere Zellspannungen ungültig | 0 | - |
| 0x21F15D | HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, Ersatzwert im Einsatz | 0 | - |
| 0x21F15E | HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, kein Ersatzwert vorhanden | 0 | - |
| 0x21F15F | DTC ENTFALLEN: HVS: Plausibilität Batteriespannung -  Modulsummenspannung unplausibel | 0 | - |
| 0x21F160 | DTC ENTFALLEN: HVS: Plausibilität Batteriespannung -  Zellsummenspannung unplausibel | 0 | - |
| 0x21F161 | HVS: Plausibillität Spannungssensorik CSC 1 -  Spannung unplausibel | 0 | - |
| 0x21F162 | HVS: Plausibillität Spannungssensorik CSC 2 -  Spannung unplausibel | 0 | - |
| 0x21F163 | HVS: Plausibillität Spannungssensorik CSC 3 -  Spannung unplausibel | 0 | - |
| 0x21F164 | HVS: Plausibillität Spannungssensorik CSC 4 -  Spannung unplausibel | 0 | - |
| 0x21F165 | HVS: Plausibillität Spannungssensorik CSC 5 -  Spannung unplausibel | 0 | - |
| 0x21F166 | HVS: Plausibillität Spannungssensorik CSC 6 -  Spannung unplausibel | 0 | - |
| 0x21F167 | HVS: Plausibillität Spannungssensorik CSC 7 -  Spannung unplausibel | 0 | - |
| 0x21F168 | HVS: Plausibillität Spannungssensorik CSC 8 -  Spannung unplausibel | 0 | - |
| 0x21F169 | HVS: Plausibillität Spannungssensorik CSC 9 -  Spannung unplausibel | 0 | - |
| 0x21F16A | HVS: Plausibillität Spannungssensorik CSC 10 -  Spannung unplausibel | 0 | - |
| 0x21F16B | HVS: Plausibillität Spannungssensorik CSC 11 -  Spannung unplausibel | 0 | - |
| 0x21F16C | HVS: Plausibillität Spannungssensorik CSC 12 -  Spannung unplausibel | 0 | - |
| 0x21F16D | HVS: Plausibillität Spannungssensorik CSC 13 -  Spannung unplausibel | 0 | - |
| 0x21F16E | HVS: Plausibillität Spannungssensorik CSC 14 -  Spannung unplausibel | 0 | - |
| 0x21F16F | HVS: Plausibillität Spannungssensorik CSC 15 -  Spannung unplausibel | 0 | - |
| 0x21F170 | HVS: Plausibillität Spannungssensorik CSC 16 -  Spannung unplausibel | 0 | - |
| 0x21F171 | HVS: Zelltemperaturen -  Modultemperatur CSC 1 unplausibel | 0 | - |
| 0x21F172 | HVS: Zelltemperaturen -  Modultemperatur CSC 2 unplausibel | 0 | - |
| 0x21F173 | HVS: Zelltemperaturen -  Modultemperatur CSC 3 unplausibel | 0 | - |
| 0x21F174 | HVS: Zelltemperaturen -  Modultemperatur CSC 4 unplausibel | 0 | - |
| 0x21F175 | HVS: Zelltemperaturen -  Modultemperatur CSC 5 unplausibel | 0 | - |
| 0x21F176 | HVS: Zelltemperaturen -  Modultemperatur CSC 6 unplausibel | 0 | - |
| 0x21F177 | HVS: Zelltemperaturen -  Modultemperatur CSC 7 unplausibel | 0 | - |
| 0x21F178 | HVS: Zelltemperaturen -  Modultemperatur CSC 8 unplausibel | 0 | - |
| 0x21F179 | HVS: Zelltemperaturen -  Modultemperatur CSC 9 unplausibel | 0 | - |
| 0x21F17A | HVS: Zelltemperaturen -  Modultemperatur CSC 10 unplausibel | 0 | - |
| 0x21F17B | HVS: Zelltemperaturen -  Modultemperatur CSC 11 unplausibel | 0 | - |
| 0x21F17C | HVS: Zelltemperaturen -  Modultemperatur CSC 12 unplausibel | 0 | - |
| 0x21F17D | HVS: Zelltemperaturen -  Modultemperatur CSC 13 unplausibel | 0 | - |
| 0x21F17E | HVS: Zelltemperaturen -  Modultemperatur CSC 14 unplausibel | 0 | - |
| 0x21F17F | HVS: Zelltemperaturen -  Modultemperatur CSC 15 unplausibel | 0 | - |
| 0x21F180 | HVS: Zelltemperaturen -  Modultemperatur CSC 16 unplausibel | 0 | - |
| 0x21F181 | HVS: Echtzeituhr - Abgleich mit Relativzeit unplausibel | 0 | - |
| 0x21F182 | HVS: Zelltemperaturen - Zellkerntemperatur ungültig | 0 | - |
| 0x21F183 | HVS: Zelltemperaturen: Zu viele Sensoren unplausibel oder ausgefallen | 0 | - |
| 0x21F184 | HVS: Zelltemperaturen -  Modultemperaturen CSC 1 ausgefallen | 0 | - |
| 0x21F185 | HVS: Zelltemperaturen -  Modultemperaturen CSC 2 ausgefallen | 0 | - |
| 0x21F186 | HVS: Zelltemperaturen -  Modultemperaturen CSC 3 ausgefallen | 0 | - |
| 0x21F187 | HVS: Zelltemperaturen -  Modultemperaturen CSC 4 ausgefallen | 0 | - |
| 0x21F188 | HVS: Zelltemperaturen -  Modultemperaturen CSC 5 ausgefallen | 0 | - |
| 0x21F189 | HVS: Zelltemperaturen -  Modultemperaturen CSC 6 ausgefallen | 0 | - |
| 0x21F18A | HVS: Zelltemperaturen -  Modultemperaturen CSC 7 ausgefallen | 0 | - |
| 0x21F18B | HVS: Zelltemperaturen -  Modultemperaturen CSC 8 ausgefallen | 0 | - |
| 0x21F18C | HVS: Zelltemperaturen -  Modultemperaturen CSC 9 ausgefallen | 0 | - |
| 0x21F18D | HVS: Zelltemperaturen -  Modultemperaturen CSC 10 ausgefallen | 0 | - |
| 0x21F18E | HVS: Zelltemperaturen -  Modultemperaturen CSC 11 ausgefallen | 0 | - |
| 0x21F18F | HVS: Zelltemperaturen -  Modultemperaturen CSC 12 ausgefallen | 0 | - |
| 0x21F190 | HVS: Zelltemperaturen -  Modultemperaturen CSC 13 ausgefallen | 0 | - |
| 0x21F191 | HVS: Zelltemperaturen -  Modultemperaturen CSC 14 ausgefallen | 0 | - |
| 0x21F192 | HVS: Zelltemperaturen -  Modultemperaturen CSC 15 ausgefallen | 0 | - |
| 0x21F193 | HVS: Zelltemperaturen -  Modultemperaturen CSC 16 ausgefallen | 0 | - |
| 0x21F194 | HVS: Zelltemperaturen - Hohe Temperatur, Laden abgebrochen | 1 | - |
| 0x21F196 | HVS: Zelltemperaturen: Hohe Temperatur, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F197 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 1, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F198 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 2, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F199 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 3, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19A | HVS: Zelltemperaturen: Hohe Temperatur in Modul 4, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19B | HVS: Zelltemperaturen: Hohe Temperatur in Modul 5, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19C | HVS: Zelltemperaturen: Hohe Temperatur in Modul 6, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19D | HVS: Zelltemperaturen: Hohe Temperatur in Modul 7, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19E | HVS: Zelltemperaturen: Hohe Temperatur in Modul 8, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19F | HVS: Zelltemperaturen: Hohe Temperatur in Modul 9, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A0 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 10, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A1 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 11, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A2 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 12, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A3 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 13, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A4 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 14, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A5 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 15, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A6 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 16, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A7 | HVS: Zelltemperaturen: CSC 1 Übertemperatur | 0 | - |
| 0x21F1A8 | HVS: Zelltemperaturen: CSC 2 Übertemperatur | 0 | - |
| 0x21F1A9 | HVS: Zelltemperaturen: CSC 3 Übertemperatur | 0 | - |
| 0x21F1AA | HVS: Zelltemperaturen: CSC 4 Übertemperatur | 0 | - |
| 0x21F1AB | HVS: Zelltemperaturen: CSC 5 Übertemperatur | 0 | - |
| 0x21F1AC | HVS: Zelltemperaturen: CSC 6 Übertemperatur | 0 | - |
| 0x21F1AD | HVS: Zelltemperaturen: CSC 7 Übertemperatur | 0 | - |
| 0x21F1AE | HVS: Zelltemperaturen: CSC 8 Übertemperatur | 0 | - |
| 0x21F1AF | HVS: Zelltemperaturen: CSC 9 Übertemperatur | 0 | - |
| 0x21F1B0 | HVS: Zelltemperaturen: CSC 10 Übertemperatur | 0 | - |
| 0x21F1B1 | HVS: Zelltemperaturen: CSC 11 Übertemperatur | 0 | - |
| 0x21F1B2 | HVS: Zelltemperaturen: CSC 12 Übertemperatur | 0 | - |
| 0x21F1B3 | HVS: Zelltemperaturen: CSC 13 Übertemperatur | 0 | - |
| 0x21F1B4 | HVS: Zelltemperaturen: CSC 14 Übertemperatur | 0 | - |
| 0x21F1B5 | HVS: Zelltemperaturen: CSC 15 Übertemperatur | 0 | - |
| 0x21F1B6 | HVS: Zelltemperaturen: CSC 16 Übertemperatur | 0 | - |
| 0x21F1B7 | DTC ENTFALLEN: HVS: Widerstand der Heizung nicht im erwarteten Bereich | 0 | - |
| 0x21F1B8 | DTC ENTFALLEN: HVS: Fehlerhafte Wärmeleitung zum Hochvoltspeicher | 0 | - |
| 0x21F1BA | HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 | - |
| 0x21F1BC | DTC ENTFALLEN: Ladungszustand: kritische obere SoC-Grenze erreicht | 0 | - |
| 0x21F1BD | Ladungszustand: kritische untere SoC-Grenze erreicht | 0 | - |
| 0x21F1BF | HVS: Zellüberwachung: Zellen sind stark unsymmetriert | 0 | - |
| 0x21F1C2 | DTC ENTFALLEN: HVS: Zellüberwachung: Zelldefekt festgestellt | 0 | - |
| 0x21F1C3 | HVS: Zellüberwachung: Zelldefekt in Modul 1 festgestellt | 0 | - |
| 0x21F1C4 | HVS: Zellüberwachung: Zelldefekt in Modul 2 festgestellt | 0 | - |
| 0x21F1C5 | HVS: Zellüberwachung: Zelldefekt in Modul 3 festgestellt | 0 | - |
| 0x21F1C6 | HVS: Zellüberwachung: Zelldefekt in Modul 4 festgestellt | 0 | - |
| 0x21F1C7 | HVS: Zellüberwachung: Zelldefekt in Modul 5 festgestellt | 0 | - |
| 0x21F1C8 | HVS: Zellüberwachung: Zelldefekt in Modul 6 festgestellt | 0 | - |
| 0x21F1C9 | HVS: Zellüberwachung: Zelldefekt in Modul 7 festgestellt | 0 | - |
| 0x21F1CA | HVS: Zellüberwachung: Zelldefekt in Modul 8 festgestellt | 0 | - |
| 0x21F1CB | HVS: Zellüberwachung: Zelldefekt in Modul 9 festgestellt | 0 | - |
| 0x21F1CC | HVS: Zellüberwachung: Zelldefekt in Modul 10 festgestellt | 0 | - |
| 0x21F1CD | HVS: Zellüberwachung: Zelldefekt in Modul 11 festgestellt | 0 | - |
| 0x21F1CE | HVS: Zellüberwachung: Zelldefekt in Modul 12 festgestellt | 0 | - |
| 0x21F1CF | HVS: Zellüberwachung: Zelldefekt in Modul 13 festgestellt | 0 | - |
| 0x21F1D0 | HVS: Zellüberwachung: Zelldefekt in Modul 14 festgestellt | 0 | - |
| 0x21F1D1 | HVS: Zellüberwachung: Zelldefekt in Modul 15 festgestellt | 0 | - |
| 0x21F1D2 | HVS: Zellüberwachung: Zelldefekt in Modul 16 festgestellt | 0 | - |
| 0x21F1D3 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung festgestellt | 0 | - |
| 0x21F1D4 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 1 festgestellt | 0 | - |
| 0x21F1D5 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 2 festgestellt | 0 | - |
| 0x21F1D6 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 3 festgestellt | 0 | - |
| 0x21F1D7 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 4 festgestellt | 0 | - |
| 0x21F1D8 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 5 festgestellt | 0 | - |
| 0x21F1D9 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 6 festgestellt | 0 | - |
| 0x21F1DA | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 7 festgestellt | 0 | - |
| 0x21F1DB | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 8 festgestellt | 0 | - |
| 0x21F1DC | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 9 festgestellt | 0 | - |
| 0x21F1DD | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 10 festgestellt | 0 | - |
| 0x21F1DE | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 11 festgestellt | 0 | - |
| 0x21F1DF | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 12 festgestellt | 0 | - |
| 0x21F1E0 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 13 festgestellt | 0 | - |
| 0x21F1E1 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 14 festgestellt | 0 | - |
| 0x21F1E2 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 15 festgestellt | 0 | - |
| 0x21F1E3 | DTC ENTFALLEN: HVS: Zellüberwachung: Tiefentladung in Modul 16 festgestellt | 0 | - |
| 0x21F1F6 | Deaktivierung Hauptschalter nach Fehler | 0 | - |
| 0x21F1F7 | Zuschaltung verhindert -  Überhitzungsschutz | 0 | - |
| 0x21F1F8 | Zuschaltung verhindert -  Maximale Anzahl Fehlversuche überschritten. | 0 | - |
| 0x21F1F9 | Zuschaltung verhindert -  Zwischenkreisspannung außerhalb des zulässigen Bereichs | 0 | - |
| 0x21F1FA | Zuschaltung verhindert -  Sicherheitsmerkmale nicht erfüllt | 0 | - |
| 0x21F1FB | HVS: Zuschaltung verhindert -  Transport-Bit gesetzt | 0 | - |
| 0x21F1FD | HVS: Zuschaltung verhindert -  NM nicht aktiv | 1 | - |
| 0x21F1FE | HVS: Abschaltung der Hauptschütze -  Flashmode aktiv | 0 | - |
| 0x21F200 | HVS: Zuschaltung nicht möglich, Verdacht auf Kontaktunterbrechung durch Schmelzsicherung. Überstrom erkannt. | 0 | - |
| 0x21F201 | HVS: Pruefstandsmodus aktiv | 0 | - |
| 0x21F203 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt | 0 | - |
| 0x21F204 | HVS: Sicherheitskonzept, Ebene 2: Spannung zu niedrig/hoch oder unbekannt | 1 | - |
| 0x21F205 | HVS: Sicherheitskonzept, Ebene 2: Strom zu niedrig/hoch | 1 | - |
| 0x21F206 | DTC ENTFALLEN | 0 | - |
| 0x21F207 | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest fehlgeschlagen | 0 | - |
| 0x21F208 | SME: Sicherheitskonzept - Fehler in Laufzeitüberwachung | 0 | - |
| 0x21F209 | SME: Sicherheitskonzept - Prozessor-Test fehlgeschlagen | 0 | - |
| 0x21F20A | SME: Sicherheitskonzept, Ebene 3: Reset des Sicherheitsrechners | 0 | - |
| 0x21F20B | DTC ENTFALLEN: SME: Sicherheitskonzept - Reset durch Hauptrechner | 0 | - |
| 0x21F20C | SME: Sicherheitskonzept - inkonsistentes RAM erkannt | 0 | - |
| 0x21F20D | SME: Sicherheitskonzept -  Abschaltung durch Ebene2 | 0 | - |
| 0x21F20F | SME: Sicherheitskonzept - Unbekannter Reset-Grund | 0 | - |
| 0x21F210 | SME: Sicherheitskonzept - Reset durch Sicherheitsrechner | 0 | - |
| 0x21F211 | SME: Sicherheitskonzept -  Vorhalt 06 | 0 | - |
| 0x21F212 | SME: Sicherheitskonzept -  Reset-Ursache ECC-Fehler | 0 | - |
| 0x21F213 | SME: Sicherheitskonzept -  Reset-Ursache Unimplemented Interrupt | 0 | - |
| 0x21F214 | SME: Sicherheitskonzept -  Reset-Ursache Watchdog-Reset | 0 | - |
| 0x21F21C | HVS: SBOX -  Kommunikation-Fehler | 0 | - |
| 0x21F21D | HVS: Sicherheitskonzept, Ebene 2: Strom außerhalb der Leitungsschutzgrenzen | 1 | - |
| 0x21F21E | HVS: Warnung: Thermisches Ereignis | 0 | - |
| 0x21F21F | HVS: Isolationsüberwachung - ausgefallen Aufgrund SBOX HW/SW Fehler | 0 | - |
| 0x21F220 | HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Masse | 0 | - |
| 0x21F221 | HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F222 | HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 | - |
| 0x21F227 | Plausibilität Kühlmittelsensor - Kühlmittelsensor liefert unplausible Werte zurück | 0 | - |
| 0x21F22D | CSC Version ungültig | 0 | - |
| 0x21F22E | CSC Indizierung verloren, korrekte Modulzuordnung nicht mehr gewährleistet | 0 | - |
| 0x21F22F | CSC Indizierung fehlgeschlagen | 0 | - |
| 0x21F230 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 1 | 0 | - |
| 0x21F231 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 2 | 0 | - |
| 0x21F232 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 3 | 0 | - |
| 0x21F233 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 4 | 0 | - |
| 0x21F234 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 5 | 0 | - |
| 0x21F235 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 6 | 0 | - |
| 0x21F236 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 7 | 0 | - |
| 0x21F237 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 8 | 0 | - |
| 0x21F238 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 9 | 0 | - |
| 0x21F239 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 10 | 0 | - |
| 0x21F23A | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 11 | 0 | - |
| 0x21F23B | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 12 | 0 | - |
| 0x21F23C | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 13 | 0 | - |
| 0x21F23D | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 14 | 0 | - |
| 0x21F23E | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 15 | 0 | - |
| 0x21F23F | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG2 zu niedrig/hoch in Modul 16 | 0 | - |
| 0x21F240 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 1 | 0 | - |
| 0x21F241 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 2 | 0 | - |
| 0x21F242 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 3 | 0 | - |
| 0x21F243 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 4 | 0 | - |
| 0x21F244 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 5 | 0 | - |
| 0x21F245 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 6 | 0 | - |
| 0x21F246 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 7 | 0 | - |
| 0x21F247 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 8 | 0 | - |
| 0x21F248 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 9 | 0 | - |
| 0x21F249 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 10 | 0 | - |
| 0x21F24A | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 11 | 0 | - |
| 0x21F24B | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 12 | 0 | - |
| 0x21F24C | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 13 | 0 | - |
| 0x21F24D | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 14 | 0 | - |
| 0x21F24E | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 15 | 0 | - |
| 0x21F24F | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt Modul 16 | 0 | - |
| 0x21F250 | DTC_ENTFALLEN - alt: DTC_MAIN_SW_K1(2,3)_CTRL_CIRCUIT | 0 | - |
| 0x21F251 | DTC_ENTFALLEN - alt: DTC_MAIN_SW_K1(2,3)_CTRL_CIRCUIT | 0 | - |
| 0x21F252 | DTC_ENTFALLEN - alt: DTC_MAIN_SW_K1(2,3)_CTRL_CIRCUIT | 0 | - |
| 0x21F255 | HVS: Funktion STEUERN_CC_Meldung aktiv | 0 | - |
| 0x21F257 | HVS: Erhöhter Ladungsverlust Zelle | 0 | - |
| 0x21F258 | HVS: Hauptschalter: manuelle Schützansteuerung aktiv | 0 | - |
| 0x21F259 | HVS: SBOX -  CRC/ALIVE Fehler bei Empfang auf SBOX | 0 | - |
| 0x21F25A | Reduzierte Ladeleistung  durch Fahrladen | 1 | - |
| 0x21F25F | Speicher Dauterstrombelastung in kritischen Bereich, temporäre Reduzierung Dauerstromgrenze | 0 | - |
| 0x21F260 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F261 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F262 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F263 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F264 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F265 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F266 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F267 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F268 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 9 | 0 | - |
| 0x21F269 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 10 | 0 | - |
| 0x21F26A | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 11 | 0 | - |
| 0x21F26B | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 12 | 0 | - |
| 0x21F26C | HVS: Sicherheitskonzept Ebene 2: Spannungserfassung CSC empfangener Wert ungleich Erwartungswert | 0 | - |
| 0x21F26D | HVS: Sicherheitskonzept Ebene 2: Spannungserfassung CSC Diagnose ist nicht verfügbar | 0 | - |
| 0x21F26E | Fehlerspeicher Test aktiv | 0 | - |
| 0x21F270 | DTC_ENTFALLEN HVS: Sicherheitskonzept Ebene 3: Schützabschaltung nach Flash-Timeout erzwungen | 0 | - |
| 0x21F271 | Reissleine durch CSC gezogen | 0 | - |
| 0x21F272 | Reissleinen-Test fehlgeschlagen: CSC antwortet nicht auf Trigger | 0 | - |
| 0x21F273 | Reissleinen-Test fehlgeschlagen: CSC-Feedback (Toggeln der Reissleine) fehlt | 0 | - |
| 0x21F274 | HVS: SBOX Übertemperatur unmittelbar bevorstehend | 0 | - |
| 0x21F275 | Reissleine fehlerhaft NICHT durch CSC gezogen | 0 | - |
| 0x21F276 | Reissleinen-Test fehlgeschlagen zwischen Sicherheitsrechner und Hauptrechner | 0 | - |
| 0x21F277 | HVS: SBOX Temperatursensorik NTC OOR high | 0 | - |
| 0x21F278 | HVS: SBOX Temperatursensorik NTC OOR low | 0 | - |
| 0x21F279 | HVS: SBOX Temperatursensorik Plausibilitätsfehler | 0 | - |
| 0x21F27A | HVS SBOX: Schützöffnen infolge Übertemperatur | 0 | - |
| 0x21F280 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 1 | 0 | - |
| 0x21F281 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 2 | 0 | - |
| 0x21F282 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 3 | 0 | - |
| 0x21F283 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 4 | 0 | - |
| 0x21F284 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 5 | 0 | - |
| 0x21F285 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 6 | 0 | - |
| 0x21F286 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 7 | 0 | - |
| 0x21F287 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 8 | 0 | - |
| 0x21F288 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 9 | 0 | - |
| 0x21F289 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 10 | 0 | - |
| 0x21F28A | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 11 | 0 | - |
| 0x21F28B | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 12 | 0 | - |
| 0x21F28C | HVS: Sicherheitskonzept, Ebene 2: Empfangener Strom Qualifier ungültig | 1 | - |
| 0x21F28D | HVS: Sicherheitskonzept, Ebene 2: Stromüberwachung Empfangener CRC oder ALIVE entspricht nicht dem Erwartungswert | 1 | - |
| 0x21F290 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu Schützfehlern | 0 | - |
| 0x21F291 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu Vorladefehlern | 0 | - |
| 0x21F292 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu Kommunikationsfehlern | 0 | - |
| 0x21F293 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu Systemfehlern | 0 | - |
| 0x21F294 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu ADUCp-Fehlern | 0 | - |
| 0x21F295 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu ADUCs-Fehlern | 0 | - |
| 0x21F296 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu ISM-Fehlern | 0 | - |
| 0x21F297 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu Safety-Qualifier-Fehlern | 0 | - |
| 0x21F298 | HVS: SBOX -  Erweiterte SBOX Diagnoseinformation zu Safety-Bus-Off-Fehlern | 0 | - |
| 0x21F299 | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 1 | 0 | - |
| 0x21F29A | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 2 | 0 | - |
| 0x21F29B | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 3 | 0 | - |
| 0x21F29C | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 4 | 0 | - |
| 0x21F29D | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 5 | 0 | - |
| 0x21F29E | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 6 | 0 | - |
| 0x21F29F | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 7 | 0 | - |
| 0x21F2A0 | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 8 | 0 | - |
| 0x21F2A1 | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 9 | 0 | - |
| 0x21F2A2 | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 10 | 0 | - |
| 0x21F2A3 | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 11 | 0 | - |
| 0x21F2A4 | HVS: Zelltemperaturen: Temperaturdrift eines Sensors in Modul 12 | 0 | - |
| 0x21F2B0 | HVS: Erhöhter Ladungsverlust Zelle Modul 1 | 0 | - |
| 0x21F2B1 | HVS: Erhöhter Ladungsverlust Zelle Modul 2 | 0 | - |
| 0x21F2B2 | HVS: Erhöhter Ladungsverlust Zelle Modul 3 | 0 | - |
| 0x21F2B3 | HVS: Erhöhter Ladungsverlust Zelle Modul 4 | 0 | - |
| 0x21F2B4 | HVS: Erhöhter Ladungsverlust Zelle Modul 5 | 0 | - |
| 0x21F2B5 | HVS: Erhöhter Ladungsverlust Zelle Modul 6 | 0 | - |
| 0x21F2B6 | HVS: Erhöhter Ladungsverlust Zelle Modul 7 | 0 | - |
| 0x21F2B7 | HVS: Erhöhter Ladungsverlust Zelle Modul 8 | 0 | - |
| 0x21F2B8 | HVS: Erhöhter Ladungsverlust Zelle Modul 9 | 0 | - |
| 0x21F2B9 | HVS: Erhöhter Ladungsverlust Zelle Modul 10 | 0 | - |
| 0x21F2BA | HVS: Erhöhter Ladungsverlust Zelle Modul 11 | 0 | - |
| 0x21F2BB | HVS: Erhöhter Ladungsverlust Zelle Modul 12 | 0 | - |
| 0x21F2C1 | HVS: Symmetrierschaltung Modul 1 ausgefallen | 0 | - |
| 0x21F2C2 | HVS: Symmetrierschaltung Modul 2 ausgefallen | 0 | - |
| 0x21F2C3 | HVS: Symmetrierschaltung Modul 3 ausgefallen | 0 | - |
| 0x21F2C4 | HVS: Symmetrierschaltung Modul 4 ausgefallen | 0 | - |
| 0x21F2C5 | HVS: Symmetrierschaltung Modul 5 ausgefallen | 0 | - |
| 0x21F2C6 | HVS: Symmetrierschaltung Modul 6 ausgefallen | 0 | - |
| 0x21F2C7 | HVS: Symmetrierschaltung Modul 7 ausgefallen | 0 | - |
| 0x21F2C8 | HVS: Symmetrierschaltung Modul 8 ausgefallen | 0 | - |
| 0x21F2C9 | HVS: Symmetrierschaltung Modul 9 ausgefallen | 0 | - |
| 0x21F2CA | HVS: Symmetrierschaltung Modul 10 ausgefallen | 0 | - |
| 0x21F2CB | HVS: Symmetrierschaltung Modul 11 ausgefallen | 0 | - |
| 0x21F2CC | HVS: Symmetrierschaltung Modul 12 ausgefallen | 0 | - |
| 0x21F2D1 | Ebene 2: Temperatursensor HW-RL in Modul 1 unplausibel | 0 | - |
| 0x21F2D2 | Ebene 2: Temperatursensor HW-RL in Modul 2 unplausibel | 0 | - |
| 0x21F2D3 | Ebene 2: Temperatursensor HW-RL in Modul 3 unplausibel | 0 | - |
| 0x21F2D4 | Ebene 2: Temperatursensor HW-RL in Modul 4 unplausibel | 0 | - |
| 0x21F2D5 | Ebene 2: Temperatursensor HW-RL in Modul 5 unplausibel | 0 | - |
| 0x21F2D6 | Ebene 2: Temperatursensor HW-RL in Modul 6 unplausibel | 0 | - |
| 0x21F2D7 | Ebene 2: Temperatursensor HW-RL in Modul 7 unplausibel | 0 | - |
| 0x21F2D8 | Ebene 2: Temperatursensor HW-RL in Modul 8 unplausibel | 0 | - |
| 0x21F2D9 | Ebene 2: Temperatursensor HW-RL in Modul 9 unplausibel | 0 | - |
| 0x21F2DA | Ebene 2: Temperatursensor HW-RL in Modul 10 unplausibel | 0 | - |
| 0x21F2DB | Ebene 2: Temperatursensor HW-RL in Modul 11 unplausibel | 0 | - |
| 0x21F2DC | Ebene 2: Temperatursensor HW-RL in Modul 12 unplausibel | 0 | - |
| 0x21F2F0 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 1 | 0 | - |
| 0x21F2F1 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 2 | 0 | - |
| 0x21F2F2 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 3 | 0 | - |
| 0x21F2F3 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 4 | 0 | - |
| 0x21F2F4 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 5 | 0 | - |
| 0x21F2F5 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 6 | 0 | - |
| 0x21F2F6 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 7 | 0 | - |
| 0x21F2F7 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 8 | 0 | - |
| 0x21F2F8 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 9 | 0 | - |
| 0x21F2F9 | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 10 | 0 | - |
| 0x21F2FA | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 11 | 0 | - |
| 0x21F2FB | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung SG1 zu niedrig/hoch oder unbekannt Modul 12 | 0 | - |
| 0x21F2FF | HVS: Sicherheitskonzept, Ebene 2: Diagnose Zellspannung zu niedrig/hoch oder unbekannt und Hardware-Reisleine ausgelöst | 0 | - |
| 0xCAC47C | LE-CAN Control Module Bus OFF | 0 | - |
| 0xCAC486 | A-CAN Control Module Bus OFF | 0 | - |
| 0xCACBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCAD400 | Botschaft (Status E-Motor 1, 0x10F) fehlt | 1 | - |
| 0xCAD401 | Botschaft (Außentemperatur, 0x2CA) fehlt | 1 | - |
| 0xCAD402 | Botschaft (Relativzeit, 0x328) fehlt | 1 | - |
| 0xCAD403 | Botschaft (Zustand Fahrzeug 0x3C) fehlt | 1 | - |
| 0xCAD404 | Botschaft (Anforderung Hochvoltspeicher, 0xCC) fehlt | 1 | - |
| 0xCAD405 | Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8) fehlt | 1 | - |
| 0xCAD407 | Botschaft (Fahrgestellnummer, 0x380) fehlt | 1 | - |
| 0xCAD408 | Botschaft (Fzgzustand, 0x3A0) fehlt | 1 | - |
| 0xCAD409 | Botschaft (Freigabe Kühlung Hochvolt-Batterie, 0x37B) fehlt | 1 | - |
| 0xCAD40A | Botschaft (Geschwindigkeit, 0x1A1) fehlt | 1 | - |
| 0xCAD40B | Botschaft (Kilometerstand/Reichweite, 0x330) fehlt | 1 | - |
| 0xCAD40C | Botschaft (Klemmen, 0x12F) fehlt | 1 | - |
| 0xCAD411 | Botschaft (Crash, 0x19B A-CAN / 0xAB LE-CAN) fehlt | 1 | - |
| 0xCAD413 | Botschaft (Vorgabe Hochvoltspeicher, 0x433) fehlt | 1 | - |
| 0xCAD415 | Botschaft (Trennschalter HVS, 0x10B) fehlt | 1 | - |
| 0xCAD416 | Schnittstelle AE Vorgabe Trennschalter Hochvoltspeicher, 0x10B: Signal ungültig | 1 | - |
| 0xCAD421 | Botschaft (Daten Ladeelektronik, 0x108) fehlt | 1 | - |
| 0xCAD426 | Botschaft (Ladestatus, 0x3E9) fehlt | 1 | - |
| 0xCAD428 | Botschaft (Steuerung Teilnetze, 0x19E) fehlt | 1 | - |
| 0xCAD429 | Botschaft (Prognose Fahrt Info, 0x3CA) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Service Disconnect steckt nicht | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | HVIL steckt nicht | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | Crash erkannt | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | Schützkleber erkannt | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0005 | Lebensdauerende der Schütze erkannt | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0006 | HV-Speicher tiefentladen | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | Messung der Batteriespannung ungültig | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0008 | Messung des Batteriestroms ungültig | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0009 | Messung der Zwischenkreisspannung ungültig | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000B | Schützkleber DTC vorhanden | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000C | FuSi: Ebene 2 Fehler/Verriegelung | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000D | SBOX: Vorladebedingung nicht erfuellt | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000E | Ungültige Zellspannungen | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000F | SG nicht kodiert | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0010 | nicht belegt  | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0011 | U/I-Sensor / SBOX  nicht aktiv | 0/1 | High | 0x0200 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x65E0 | Spannung der 12V-Versorgungsklemme | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x65E2 | Spannung HV | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E3 | Spannung HV_LINK | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65E4 | Strom HV | A | High | unsigned int | - | 1.0 | 10.0 | -819.2 |
| 0x65E5 | Batterietemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E6 | Kühlertemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E7 | SOC (State of Charge) | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E8 | Status Statemachine | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65E9 | Status Laden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65EA | Isolationswiderstand DC | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EB | Isolationswiderstand intern | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EC | Teilnetz laden aktiv | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65ED | minimale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65EE | maximale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65F3 | minimale Modultemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F4 | maximale Modultemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F5 | minimale Modelltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F6 | maximale Modelltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F7 | maximale T-Spreizung eines Moduls | ° | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65F8 | Spannung HV Zellsummenspannung | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65F9 | Spannung HV Modulsummenspannung | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65FA | RTC Absolutzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x65FB | aktuelle Gesamtkapazität | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65FC | minimale Abweichung Ucellsum_mod - Umod | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65FD | maximale Abweichung Ucellsum_mod -Umod | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65FE | CSC Bitindex zu NTC_HW1/2 (MON) Fehlerbit 9 | HEX | High | unsigned int | - | - | - | - |
| 0x65FF | CSC Bitindex zu Referenzspannung LTC6802 (BAT) ausserhalb Bereich Fehlerbit 10 | HEX | High | unsigned int | - | - | - | - |
| 0x6600 | CSC Bitindex zu thermisches Abschalten aufgetreten Fehlerbit 11 | HEX | High | unsigned int | - | - | - | - |
| 0x6602 | CSC Bitindex zu CSC Wake-Up defekt Fehlerbit 14 | HEX | High | unsigned int | - | - | - | - |
| 0x6603 | CSC Bitindex zu Kommunikation Frontend/CSC fehlgeschlagen Fehlerbit 15 | HEX | High | unsigned int | - | - | - | - |
| 0x6604 | CSC Bitindex zu Referenzspannung LTC6801 (MON) ausserhalb Bereich Fehlerbit 16 | HEX | High | unsigned int | - | - | - | - |
| 0x6605 | CSC Bitindex zu ADC-Test 1 LTC6802 nicht bestanden Fehlerbit 18 | HEX | High | unsigned int | - | - | - | - |
| 0x6606 | CSC Bitindex zu ADC-Test 2 LTC6802 nicht bestanden Fehlerbit 18 | HEX | High | unsigned int | - | - | - | - |
| 0x6607 | CSC Bitindex zu LTC6801 Selbsttest nicht bestanden Fehlerbit 20 | HEX | High | unsigned int | - | - | - | - |
| 0x6608 | CSC Bitindex zu RAM Selbsttest nicht bestanden Fehlerbit 21 | HEX | High | unsigned int | - | - | - | - |
| 0x6609 | CSC Bitindex zu ROM Selbsttest nicht bestanden Fehlerbit 22 | HEX | High | unsigned int | - | - | - | - |
| 0x660A | CSC Bitindex zu Plausibilitätsfehler Zellspannung Fehlerbit 25 | HEX | High | unsigned int | - | - | - | - |
| 0x660B | CSC Bitindex zu Plausibilitätsfehler Zelltemperatur Fehlerbit 26 | HEX | High | unsigned int | - | - | - | - |
| 0x660C | CSC Bitindex zu Test auf offene Leitung nicht durchgefuehrt Fehlerbit 28 | HEX | High | unsigned int | - | - | - | - |
| 0x660D | CSC Bitindex zu Reissleine fehlerhaft gezogen, PWM OK Fehlerbit 29 | HEX | High | unsigned int | - | - | - | - |
| 0x660E | CSC Bitindex zu Reissleine fehlerhaft nicht gezogen, PWM nicht OK Fehlerbit 30 | HEX | High | unsigned int | - | - | - | - |
| 0x660F | Data Exception Address Register | HEX | High | unsigned long | - | - | - | - |
| 0x6610 | Exception Syndrome Register | HEX | High | unsigned long | - | - | - | - |
| 0x6616 | HV OFF Zeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6617 | HV ON Zeit der SBOX | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6618 | Maximal gemessener Strom | mA | High | unsigned int | - | 1.0 | 10.0 | -819.2 |
| 0x6619 | Minimal gemessener Strom | mA | High | unsigned int | - | 1.0 | 10.0 | 819.2 |
| 0x661A | FuSi Error Status Peripherie (SBOX) | 0-n | High | 0xFF | _TAB_SFTY_I_Q | - | - | - |
| 0x661B | Aussentemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x661C | Qualifier Isolationswiderstand (Standard-Messung) | HEX | High | unsigned char | - | - | - | - |
| 0x661D | Qualifier Isolationswiderstand (interne Messung/Batterie) | HEX | High | unsigned char | - | - | - | - |
| 0x661E | Isolationswiderstand (getriggerte Messung) | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x661F | Qualifier Isolationswiderstand (getriggerte Messung) | HEX | High | unsigned char | - | - | - | - |
| 0x6620 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6621 | Alterung des Innenwiderstandes | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6622 | Anzahl normale Schützschaltungen | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6623 | Anzahl Schützschaltungen unter Last | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6624 | Timeout ungültige Isolationsmessung (bitcodiert) | HEX | High | unsigned char | - | - | - | - |
| 0x6625 | mittlerer SoH_C | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6627 | Peripherie: Sbox power on und el. Fehlerzustand | HEX | High | unsigned char | - | - | - | - |
| 0x6628 | Peripherie: CSC power on und el. Fehlerzustand | HEX | High | unsigned char | - | - | - | - |
| 0x6629 | Layer 3 Fehler | HEX | High | unsigned char | - | - | - | - |
| 0x662A | Crashschwere vorne | 0-n | High | 0xFF | TAB_ST_CRSE | - | - | - |
| 0x662B | Crashschwere hinten | 0-n | High | 0xFF | TAB_ST_CRSE | - | - | - |
| 0x662C | Crashschwere Überschlag | 0-n | High | 0xFF | TAB_ST_CRSE | - | - | - |
| 0x662D | Crashschwere links | 0-n | High | 0xFF | TAB_ST_CRSE | - | - | - |
| 0x662E | Crashschwere rechts | 0-n | High | 0xFF | TAB_ST_CRSE | - | - | - |
| 0x662F | SBOX Schützfehler Teil 1 | HEX | High | unsigned long | - | - | - | - |
| 0x6630 | SBOX Schützfehler Teil 2 | HEX | High | unsigned long | - | - | - | - |
| 0x6631 | SBOX Vorladefehler | HEX | High | unsigned long | - | - | - | - |
| 0x6632 | SBOX Kommunikationsfehler | HEX | High | unsigned long | - | - | - | - |
| 0x6633 | SBOX Systemfehler Teil 1 | HEX | High | unsigned long | - | - | - | - |
| 0x6634 | SBOX Systemfehler Teil 2 | HEX | High | unsigned long | - | - | - | - |
| 0x6635 | SBOX ADUCp-Fehler | HEX | High | unsigned long | - | - | - | - |
| 0x6636 | SBOX ADUCs-Fehler | HEX | High | unsigned long | - | - | - | - |
| 0x6637 | SBOX ISM-Fehler | HEX | High | unsigned long | - | - | - | - |
| 0x6638 | SBOX Safety-Qualifier-Fehler | HEX | High | unsigned long | - | - | - | - |
| 0x6639 | SBOX Safety-Bus-Off Fehler Teil 1 | HEX | High | unsigned long | - | - | - | - |
| 0x663A | SBOX Safety-Bus-Off Fehler Teil 2 | HEX | High | unsigned long | - | - | - | - |
| 0x663B | SBOX Safety-Bus-Off Fehler Teil 3 | HEX | High | unsigned long | - | - | - | - |
| 0x663C | SBOX Safety-Bus-Off Fehler Teil 4. | HEX | High | unsigned long | - | - | - | - |
| 0x663D | SBOX Spannung Quer | V | High | unsigned int | - | 1.0 | 20.0 | -500.0 |
| 0x663E | SBOX Spannung Schütz 2 | V | High | unsigned int | - | 1.0 | 20.0 | -500.0 |
| 0x663F | SBOX Shunt-Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6640 | RMS Strom absolut | A | High | unsigned int | - | 1.0 | 50.0 | -500.0 |
| 0x6641 | RMS Ladestrom | A | High | unsigned int | - | 1.0 | 50.0 | -500.0 |
| 0x6642 | Ursache für Stromgrenzendegradation | HEX | High | unsigned char | - | - | - | - |
| 0x6643 | FuSi: RAM Adresse | HEX | High | unsigned long | - | - | - | - |
| 0x6644 | Status Versorgungsspannung CSC | 0/1 | High | 0x01 | - | - | - | - |
| 0x664A | _SBOX_CPU_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x664B | _SBOX_NTC1_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x664C | _SBOX_OBD_NTC_HV | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x21F017 | SME: Temperatur zu hoch | 0 | - |
| 0x21F01B | MMU: Memory Management Unit Fehler | 0 | - |
| 0x21F01C | HVS: U/i-Sensor -  CRC/ALIVE Fehler bei Empfang auf SBOX | 0 | - |
| 0x21F01D | HVS: U/i-Sensor -  Sensortemperatur außerhalb Bereich | 0 | - |
| 0x21F026 | HVS: SBOX - CAN RX Pufferüberlauf | 0 | - |
| 0x21F027 | HVS: SBOX - Measurement Frontend Reset | 0 | - |
| 0x21F028 | HVS: SBOX - Reset | 0 | - |
| 0x21F03F | HVS SBOX -  Temperaturmesswert ungueltig | 0 | - |
| 0x21F041 | HVS: SBOX: Hohe Temperatur | 0 | - |
| 0x21F042 | DTC ENTFALLEN: HVS: U/i-Sensor -  falscher Messmodus eingestellt | 0 | - |
| 0x21F05D | HVS: CSC CAN: unvollstaendige CAN Daten Modultemperaturen | 0 | - |
| 0x21F05E | HVS: CSC CAN: unvollstaendige CAN Daten Einzelzellspannungen | 0 | - |
| 0x21F05F | HVS: CSC CAN: unvollstaendige CAN Daten Modulspannungen | 0 | - |
| 0x21F060 | HVS: CSC Funktion: Opmode-Befehl nicht akzeptiert | 0 | - |
| 0x21F113 | HVS: Hauptschalter: Warnung Schützalterung | 0 | - |
| 0x21F120 | DTC ENTGFFALLEN: : FLS_E_HW_FAILED | 0 | - |
| 0x21F143 | DTC ENTGFFALLEN:  FLS_E_TIMEOUT | 0 | - |
| 0x21F152 | HVS: U/i-Sensor -  Main Controller Error | 0 | - |
| 0x21F154 | DTC ENTFALLEN: Vorladung -  falsche Stromrichtung | 1 | - |
| 0x21F158 | Klemme 15: unplausibel / Fehler | 1 | - |
| 0x21F15A | DTC ENTFALLEN: Plausibilität Stromwert -  Prüfung nicht möglich | 0 | - |
| 0x21F195 | HVS: Zelltemperaturen - Hohe Temperaturspreizung erkannt | 0 | - |
| 0x21F1B9 | HVS: Batteriealterung: SOH niedrig (Warnschwelle) | 0 | - |
| 0x21F1BB | HVS: Batteriealterung: Online-Kapazitätsbestimmung veraltet | 0 | - |
| 0x21F1BE | Ladungszustand:SoC unplausibel | 0 | - |
| 0x21F1C0 | DTC_ENTFALLEN: HVS: Zellüberwachung: Zellspannungen stark unterschiedlich | 0 | - |
| 0x21F1C1 | DTC ENTFALLEN: HVS:Zellüberwachung: Zellwiderstände stark unterschiedlich | 0 | - |
| 0x21F1E4 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 1 festgestellt | 0 | - |
| 0x21F1E5 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 2 festgestellt | 0 | - |
| 0x21F1E6 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 3 festgestellt | 0 | - |
| 0x21F1E7 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 4 festgestellt | 0 | - |
| 0x21F1E8 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 5 festgestellt | 0 | - |
| 0x21F1E9 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 6 festgestellt | 0 | - |
| 0x21F1EA | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 7 festgestellt | 0 | - |
| 0x21F1EB | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 8 festgestellt | 0 | - |
| 0x21F1EC | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 9 festgestellt | 0 | - |
| 0x21F1ED | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 10 festgestellt | 0 | - |
| 0x21F1EE | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 11 festgestellt | 0 | - |
| 0x21F1EF | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 12 festgestellt | 0 | - |
| 0x21F1F0 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 13 festgestellt | 0 | - |
| 0x21F1F1 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 14 festgestellt | 0 | - |
| 0x21F1F2 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 15 festgestellt | 0 | - |
| 0x21F1F3 | DTC ENTFALLEN: HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 16 festgestellt | 0 | - |
| 0x21F1F4 | Drosselung -  Herabsetzung der Entladungsstromgrenze aufgrund niedrigen SoCs | 0 | - |
| 0x21F1F5 | Drosselung -  Herabsetzung des Ladestroms aufgrund hoher Zelltemperatur | 0 | - |
| 0x21F1FC | HVS: Entladeschutz aktiv, CSC im Standby | 0 | - |
| 0x21F1FF | HVS: Aufstartdauer CSC zu lang | 0 | - |
| 0x21F202 | DTC ENTFALLEN: INFO: Kuehlmittelpumpe nicht freigegeben | 0 | - |
| 0x21F20E | HVS: U/i-Sensor -  Main Controller Error in last operation cycle | 0 | - |
| 0x21F215 | MPU: Speicherzugriffsfehler | 0 | - |
| 0x21F216 | HVS: U/i-Sensor -  Measurement Frontend error | 0 | - |
| 0x21F217 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT_ZGW | 0 | - |
| 0x21F218 | HVS: U/i-Sensor -  Deactivation path error | 0 | - |
| 0x21F219 | SME: unerwarteter Powerdown festgestellt | 0 | - |
| 0x21F21A | VSM_EVENT_VEHICLESTATE | 0 | - |
| 0x21F21B | HVS: U/i-Sensor -  BMU CAN message implausible | 0 | - |
| 0x21F223 | ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0x21F224 | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x21F225 | NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x21F226 | NVM_E_VERIFY_FAILED | 0 | - |
| 0x21F228 | NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x21F229 | NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x21F22A | NVM_E_WRITE_PROTECTED | 0 | - |
| 0x21F22B | SPI_E_HARDWARE_ERROR | 0 | - |
| 0x21F22C | WDGM_E_IMPROPER_CALLER | 0 | - |
| 0x21F253 | WDGM_E_MF_TIMINGVIOLATION | 0 | - |
| 0x21F254 | WDGM_E_DATA_CORRUPTION | 0 | - |
| 0x21F256 | SME: Power-Reset SBOX durch SME | 0 | - |
| 0x21F25B | HVS: Wasserpumpe -  Event4 Reduzierte Pumpedrehzahl | 0 | - |
| 0x21F25C | HVS: Ansteuerleitung Hauptschalter pos. elektrischer Fehler | 0 | - |
| 0x21F25D | HVS: Ansteuerleitung Hauptschalter neg. elektrischer Fehler | 0 | - |
| 0x21F25E | HVS: Ansteuerleitung Hauptschalter pre. elektrischer Fehler | 0 | - |
| 0x21F26F | HVS: CDC-Event verloren | 0 | - |
| 0x21F27B | HVS: SBOX Temperatursensorik erhöhte NTC CPU Temperatur | 0 | - |
| 0x21F2E0 | DTC ENTFALLEN HVS: CSC 01 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E1 | DTC ENTFALLEN HVS: CSC 02 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E2 | DTC ENTFALLEN HVS: CSC 03 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E3 | DTC ENTFALLEN HVS: CSC 04 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E4 | DTC ENTFALLEN HVS: CSC 05 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E5 | DTC ENTFALLEN HVS: CSC 06 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E6 | DTC ENTFALLEN HVS: CSC 07 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E7 | DTC ENTFALLEN HVS: CSC 08 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E8 | DTC ENTFALLEN HVS: CSC 09 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2E9 | DTC ENTFALLEN HVS: CSC 10 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2EA | DTC ENTFALLEN HVS: CSC 11 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F2EB | DTC ENTFALLEN HVS: CSC 12 Funktion: ADC-Test Frontend nicht bestanden - unentprellt | 0 | - |
| 0x21F300 | HVS: CPI - Speicherkühlung nicht ausreichend | 0 | - |
| 0x21F400 | DTC ENTGFFALLEN:  CANIF_E_STOPPED | 0 | - |
| 0x21F401 | NVM_E_REQ_FAILED | 0 | - |
| 0x21F402 | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x21F403 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x21F404 | FLS_E_ERASE_FAILED | 0 | - |
| 0x21F405 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x21F406 | FLS_E_WRITE_FAILED | 0 | - |
| 0x21F407 | DTC ENTGFFALLEN:  ADC_E_TIMEOUT | 0 | - |
| 0x21F408 | DTC ENTGFFALLEN:  CANIF_E_INVALID_DLC | 0 | - |
| 0x21F409 | CANSM_E_BUSOFF_NETWORK_0 | 0 | - |
| 0x21F40A | DTC ENTGFFALLEN: PWM_E_UNEXPECTED_IRQ | 0 | - |
| 0x21F40B | DTC ENTGFFALLEN: SPI_E_TIMEOUT | 0 | - |
| 0x21F40C | DTC ENTGFFALLEN: WDG_E_MISS_TRIGGER | 0 | - |
| 0x21F40D | DTC ENTGFFALLEN: ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x21F40E | DTC ENTGFFALLEN:  IPDUM_E_TRANSMIT_FAILED | 0 | - |
| 0x21F40F | DTC ENTGFFALLEN: CAN_E_TIMEOUT | 0 | - |
| 0x21F410 | DTC ENTGFFALLEN: CANIF_E_FULL_TX_BUFFER | 0 | - |
| 0x21F411 | DTC ENTGFFALLEN: CANTP_E_COMM | 0 | - |
| 0x21F412 | DTC ENTGFFALLEN: CANNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x21F413 | DTC ENTGFFALLEN:  FR_E_ACCESS | 0 | - |
| 0x21F414 | WDGM_E_ALIVE_SUPERVISION | 0 | - |
| 0x21F415 | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x21F416 | WDGM_E_SET_MODE | 0 | - |
| 0x21F417 | DTC ENTGFFALLEN: CANNM_E_CANIF_TRANSMIT_ERROR | 0 | - |
| 0x21F418 | DTC ENTGFFALLEN: CANNM_E_INIT_FAILED | 0 | - |
| 0x21F419 | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x21F41A | FLS_E_READ_FAILED | 0 | - |
| 0x21F41B | DTC ENTGFFALLEN:  DM_Queue_FULL | 0 | - |
| 0x21F41C | DTC ENTGFFALLEN:  DM_Queue_DELETED | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Service Disconnect steckt nicht | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | HVIL steckt nicht | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | Crash erkannt | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | Schützkleber erkannt | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0005 | Lebensdauerende der Schütze erkannt | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0006 | HV-Speicher tiefentladen | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | Messung der Batteriespannung ungültig | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0008 | Messung des Batteriestroms ungültig | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0009 | Messung der Zwischenkreisspannung ungültig | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000B | Schützkleber DTC vorhanden | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000C | FuSi: Ebene 2 Fehler/Verriegelung | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000D | SBOX: Vorladebedingung nicht erfuellt | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000E | Ungültige Zellspannungen | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000F | SG nicht kodiert | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0010 | nicht belegt  | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0011 | U/I-Sensor / SBOX  nicht aktiv | 0/1 | High | 0x0200 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x65E0 | Spannung der 12V-Versorgungsklemme | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x65E2 | Spannung HV | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E3 | Spannung HV_LINK | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65E4 | Strom HV | A | High | unsigned int | - | 1.0 | 10.0 | -819.2 |
| 0x65E5 | Batterietemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E6 | Kühlertemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E7 | SOC (State of Charge) | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E8 | Status Statemachine | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65EA | Isolationswiderstand DC | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EC | Teilnetz laden aktiv | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65ED | minimale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65F3 | minimale Modultemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F4 | maximale Modultemperatur | ° | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F5 | minimale Modelltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F6 | maximale Modelltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F7 | maximale T-Spreizung eines Moduls | ° | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65FA | RTC Absolutzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x65FB | aktuelle Gesamtkapazität | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x660F | Data Exception Address Register | HEX | High | unsigned long | - | - | - | - |
| 0x6610 | Exception Syndrome Register | HEX | High | unsigned long | - | - | - | - |
| 0x6611 | MPU Slave 0 Error Address Register | HEX | High | unsigned long | - | - | - | - |
| 0x6612 | MPU Slave 1 Error Address Register | HEX | High | unsigned long | - | - | - | - |
| 0x6613 | MPU Slave 0 Error Details Register | HEX | High | unsigned long | - | - | - | - |
| 0x6614 | MPU Slave 1 Error Details Register | HEX | High | unsigned long | - | - | - | - |
| 0x6615 | MPU CESR Error Bit Register | HEX | High | unsigned char | - | - | - | - |
| 0x6617 | HV ON Zeit der SBOX | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6618 | Maximal gemessener Strom | mA | High | unsigned int | - | 1.0 | 10.0 | -819.2 |
| 0x6619 | Minimal gemessener Strom | mA | High | unsigned int | - | 1.0 | 10.0 | 819.2 |
| 0x661A | FuSi Error Status Peripherie (SBOX) | 0-n | High | 0xFF | _TAB_SFTY_I_Q | - | - | - |
| 0x661B | Aussentemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x661C | Qualifier Isolationswiderstand (Standard-Messung) | HEX | High | unsigned char | - | - | - | - |
| 0x6620 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6621 | Alterung des Innenwiderstandes | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6622 | Anzahl normale Schützschaltungen | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6623 | Anzahl Schützschaltungen unter Last | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6625 | mittlerer SoH_C | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6627 | Peripherie: Sbox power on und el. Fehlerzustand | HEX | High | unsigned char | - | - | - | - |
| 0x6628 | Peripherie: CSC power on und el. Fehlerzustand | HEX | High | unsigned char | - | - | - | - |
| 0x663F | SBOX Shunt-Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6646 | _FRONTEND_FAULT_SUMMARY | HEX | High | unsigned int | - | - | - | - |
| 0x6647 | _FRONTEND_COMMUNICATION_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x6648 | _FRONTEND_SYSTEM_FAULT | HEX | High | unsigned int | - | - | - | - |
| 0x6649 | _FRONTEND_CHIP_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x664A | _SBOX_CPU_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x664B | _SBOX_NTC1_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x664C | _SBOX_OBD_NTC_HV | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6650 | Verlustenergie pro Observezeit in [Ws/min] | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6651 | Gemessener Temperaturgradient CPI in [K/min] | - | High | unsigned int | - | 1.0 | 100.0 | -10.0 |
| 0x6652 | Gemessener Temperaturgradient CPI DS in [K/min] | - | High | unsigned int | - | 1.0 | 100.0 | -10.0 |
| 0x6653 | Status Klimaanlage | 0-n | High | 0xFF | TAB_FRT_AC_STATUS | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XAD61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSUNG_ERFOLGREICH | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ERFOLGREICH | 1.0 | 1.0 | 0.0 | aktueller Zustand Isolationsmessung |
| STAT_MESSUNG_ISOLATIONSFEHLER | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ISOLATIONSFEHLER | 1.0 | 1.0 | 0.0 | aktueller Zustand des Isolationsfehlers |

### RES_0XAD66_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPAZITAET_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kapazitätsschätzwert in % (Wertebereich 0-100%) bezogen auf Nennkapazität |
| STAT_AKTUELLER_ZUSTAND_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SME_ERMITTLUNG | - | - | - | Rückgabe Ermittlung läuft, erfolgreich oder mit Fehler beendet |

### RES_0XAD6B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM | - | - | + | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_ERGEBNISSE | - | - | - | Status der Symmetrierung |

### RES_0XAD75_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM | - | - | + | 0-n | high | unsigned char | - | TAB_SYM | - | - | - | Status der Symmetrierung |

### RES_0XAD76_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DMC_CSCX_TEXT | - | - | + | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | Der DMC vom CSC x (x= Modulnummer) |

### RES_0XAD7C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_LIM_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für minimale Spannung in Volt (projektspezifischer UminLim) |
| STAT_SPANNUNG_MAX_LIM_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für maximale Spannung in Volt (projektspezifischer UmaxLim) |
| STAT_HIS_SPANNUNG_NOP_MOD_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse U < UminLim |
| STAT_HIS_SPANNUNG_NOP_MOD_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_NOP_MOD_3_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse 3.57 < U <= 3.93 |
| STAT_HIS_SPANNUNG_NOP_MOD_4_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse 3.93 < U <= UmaxLim |

### RES_0XD4BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |

### RES_0XD4BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |

### RES_0XD4BC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |

### RES_0XD4BD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD6_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD7_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD8_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD9_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD10_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |

### RES_0XD4BE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD10_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD11_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD10_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD11_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD11_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |

### RES_0XD4BF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_LIM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für minimale Spannung in Volt (projektspezifischer UminLim) |
| STAT_SPANNUNG_MAX_LIM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für maximale Spannung in Volt (projektspezifischer UmaxLim) |
| STAT_HIS_SPANNUNG_MOD1_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD1_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD1_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD1_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD2_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD2_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD2_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD2_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD3_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD3_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD3_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD3_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD4_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD4_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD4_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD4_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD5_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD5_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD5_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD5_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD6_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD6_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD6_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD6_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD7_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD7_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD7_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD7_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD8_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD8_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD8_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD8_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD9_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD9_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD9_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD9_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD10_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD10_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD10_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD10_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD11_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD11_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD11_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD11_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |

### RES_0XD4C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVER_VOLT_INT_LIM_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_over] Fehlerschwellwert des ÜBERspannungsintegrals >> Überlaufen von OVER_1 (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) in [V*V*s] |
| STAT_UNDER_VOLT_INT_LIM_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_under] Fehlerschwellwert des UNTERspannungsintegrals >> Überlaufen von UNDER_1  (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) in [V*V*s] |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |

### RES_0XD4C5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRUND_REKAL_1 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-1 |
| STAT_ZEITPUNKT_REKAL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-1 |
| STAT_HVOFFTIME_REKAL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-1 |
| STAT_TEMP_MESS_MEAN_VOR_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-1 |
| STAT_TEMP_MESS_MEAN_NACH_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-1 |
| STAT_UCEL_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-1 |
| STAT_UCEL_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-1 |
| STAT_UCEL_MEAN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-1 |
| STAT_SOC_MIN_NENN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-1 |
| STAT_SOC_MAX_NENN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-1 |
| STAT_SOC_MEAN_NENN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-1 |
| STAT_SOC_MIN_NENN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-1 |
| STAT_SOC_MAX_NENN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-1 |
| STAT_SOC_MEAN_NENN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-1 |
| STAT_SOC_MIN_AKT_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-1 |
| STAT_SOC_MAX_AKT_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-1 |
| STAT_SOC_MEAN_AKT_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-1 |
| STAT_SOC_MIN_AKT_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-1 |
| STAT_SOC_MAX_AKT_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-1 |
| STAT_SOC_MEAN_AKT_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-1 |
| STAT_SOH_MIN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-1 |
| STAT_SOH_MAX_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-1 |
| STAT_SOH_MEAN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-1 |
| STAT_SOC_BAND_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-1 |
| STAT_SOC_BAND_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-1 |
| STAT_GRUND_REKAL_2 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-2 |
| STAT_ZEITPUNKT_REKAL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-2 |
| STAT_HVOFFTIME_REKAL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-2 |
| STAT_TEMP_MESS_MEAN_VOR_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-2 |
| STAT_TEMP_MESS_MEAN_NACH_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-2 |
| STAT_UCEL_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-2 |
| STAT_UCEL_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-2 |
| STAT_UCEL_MEAN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-2 |
| STAT_SOC_MIN_NENN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-2 |
| STAT_SOC_MAX_NENN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-2 |
| STAT_SOC_MEAN_NENN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-2 |
| STAT_SOC_MIN_NENN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-2 |
| STAT_SOC_MAX_NENN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-2 |
| STAT_SOC_MEAN_NENN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-2 |
| STAT_SOC_MIN_AKT_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-2 |
| STAT_SOC_MAX_AKT_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-2 |
| STAT_SOC_MEAN_AKT_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-2 |
| STAT_SOC_MIN_AKT_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-2 |
| STAT_SOC_MAX_AKT_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-2 |
| STAT_SOC_MEAN_AKT_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-2 |
| STAT_SOH_MIN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-2 |
| STAT_SOH_MAX_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-2 |
| STAT_SOH_MEAN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-2 |
| STAT_SOC_BAND_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-2 |
| STAT_SOC_BAND_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-2 |
| STAT_GRUND_REKAL_3 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-3 |
| STAT_ZEITPUNKT_REKAL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-3 |
| STAT_HVOFFTIME_REKAL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-3 |
| STAT_TEMP_MESS_MEAN_VOR_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-3 |
| STAT_TEMP_MESS_MEAN_NACH_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-3 |
| STAT_UCEL_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-3 |
| STAT_UCEL_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-3 |
| STAT_UCEL_MEAN_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-3 |
| STAT_SOC_MIN_NENN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-3 |
| STAT_SOC_MAX_NENN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-3 |
| STAT_SOC_MEAN_NENN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-3 |
| STAT_SOC_MIN_NENN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-3 |
| STAT_SOC_MAX_NENN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-3 |
| STAT_SOC_MEAN_NENN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-3 |
| STAT_SOC_MIN_AKT_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-3 |
| STAT_SOC_MAX_AKT_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-3 |
| STAT_SOC_MEAN_AKT_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-3 |
| STAT_SOC_MIN_AKT_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-3 |
| STAT_SOC_MAX_AKT_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-3 |
| STAT_SOC_MEAN_AKT_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-3 |
| STAT_SOH_MIN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-3 |
| STAT_SOH_MAX_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-3 |
| STAT_SOH_MEAN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-3 |
| STAT_SOC_BAND_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-3 |
| STAT_SOC_BAND_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-3 |
| STAT_GRUND_REKAL_4 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-4 |
| STAT_ZEITPUNKT_REKAL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-4 |
| STAT_HVOFFTIME_REKAL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-4 |
| STAT_TEMP_MESS_MEAN_VOR_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-4 |
| STAT_TEMP_MESS_MEAN_NACH_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-4 |
| STAT_UCEL_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-4 |
| STAT_UCEL_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-4 |
| STAT_UCEL_MEAN_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-4 |
| STAT_SOC_MIN_NENN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-4 |
| STAT_SOC_MAX_NENN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-4 |
| STAT_SOC_MEAN_NENN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-4 |
| STAT_SOC_MIN_NENN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-4 |
| STAT_SOC_MAX_NENN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-4 |
| STAT_SOC_MEAN_NENN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-4 |
| STAT_SOC_MIN_AKT_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-4 |
| STAT_SOC_MAX_AKT_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-4 |
| STAT_SOC_MEAN_AKT_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-4 |
| STAT_SOC_MIN_AKT_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-4 |
| STAT_SOC_MAX_AKT_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-4 |
| STAT_SOC_MEAN_AKT_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-4 |
| STAT_SOH_MIN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-4 |
| STAT_SOH_MAX_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-4 |
| STAT_SOH_MEAN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-4 |
| STAT_SOC_BAND_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-4 |
| STAT_SOC_BAND_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-4 |
| STAT_GRUND_REKAL_5 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-5 |
| STAT_ZEITPUNKT_REKAL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-5 |
| STAT_HVOFFTIME_REKAL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-5 |
| STAT_TEMP_MESS_MEAN_VOR_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-5 |
| STAT_TEMP_MESS_MEAN_NACH_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-5 |
| STAT_UCEL_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-5 |
| STAT_UCEL_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-5 |
| STAT_UCEL_MEAN_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-5 |
| STAT_SOC_MIN_NENN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-5 |
| STAT_SOC_MAX_NENN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-5 |
| STAT_SOC_MEAN_NENN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-5 |
| STAT_SOC_MIN_NENN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-5 |
| STAT_SOC_MAX_NENN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-5 |
| STAT_SOC_MEAN_NENN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-5 |
| STAT_SOC_MIN_AKT_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-5 |
| STAT_SOC_MAX_AKT_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-5 |
| STAT_SOC_MEAN_AKT_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-5 |
| STAT_SOC_MIN_AKT_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-5 |
| STAT_SOC_MAX_AKT_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-5 |
| STAT_SOC_MEAN_AKT_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-5 |
| STAT_SOH_MIN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-5 |
| STAT_SOH_MAX_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-5 |
| STAT_SOH_MEAN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-5 |
| STAT_SOC_BAND_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-5 |
| STAT_SOC_BAND_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-5 |

### RES_0XD4C6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AH_CUMULATIVE_ENT_LADUNG_1_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_1_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN1_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN2_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_1_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_2_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_2_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_2_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_3_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_3_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_3_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_4_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_4_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_4_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_5_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_5_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_5_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |

### RES_0XD4C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_SOC_GUETE_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes bei HVON in der Klasse: 0 <= GW < 3 |
| STAT_HIS_SOC_GUETE_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes bei HVON in der Klasse: 3 <= GW < 7 |
| STAT_HIS_SOC_GUETE_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes bei HVON in der Klasse: 7 <= GW < 20 |
| STAT_HIS_SOC_GUETE_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes bei HVON in der Klasse: 20 <= GW < 30 |
| STAT_HIS_SOC_GUETE_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes bei HVON in der Klasse:  GW >= 30 |

### RES_0XD4CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MIN_NENN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-1 |
| STAT_SOC_MIN_NENN_WENN_VOLL_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-1 |
| STAT_SOC_MAX_AKT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-1 |
| STAT_SOC_MAX_AKT_WENN_VOLL_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-1 |
| STAT_TEMP_LADEBEGINN_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-1 |
| STAT_TEMP_LADEENDE_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-1 |
| STAT_SOC_MIN_NENN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-2 |
| STAT_SOC_MIN_NENN_WENN_VOLL_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-2 |
| STAT_SOC_MAX_AKT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-2 |
| STAT_SOC_MAX_AKT_WENN_VOLL_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-2 |
| STAT_TEMP_LADEBEGINN_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-2 |
| STAT_TEMP_LADEENDE_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-2 |
| STAT_SOC_MIN_NENN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-3 |
| STAT_SOC_MIN_NENN_WENN_VOLL_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-3 |
| STAT_SOC_MAX_AKT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-3 |
| STAT_SOC_MAX_AKT_WENN_VOLL_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-3 |
| STAT_TEMP_LADEBEGINN_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-3 |
| STAT_TEMP_LADEENDE_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-3 |
| STAT_SOC_MIN_NENN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-4 |
| STAT_SOC_MIN_NENN_WENN_VOLL_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-4 |
| STAT_SOC_MAX_AKT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-4 |
| STAT_SOC_MAX_AKT_WENN_VOLL_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-4 |
| STAT_TEMP_LADEBEGINN_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-4 |
| STAT_TEMP_LADEENDE_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-4 |
| STAT_SOC_MIN_NENN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-5 |
| STAT_SOC_MIN_NENN_WENN_VOLL_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-5 |
| STAT_SOC_MAX_AKT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-5 |
| STAT_SOC_MAX_AKT_WENN_VOLL_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-5 |
| STAT_TEMP_LADEBEGINN_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-5 |
| STAT_TEMP_LADEENDE_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-5 |

### RES_0XD4CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLDAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Kühldauer [tmax] (projektspezifisch) |
| STAT_KUEHLDAUER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: 0 < t <= tmax*0.25 |
| STAT_KUEHLDAUER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: 0.25*tmax < t <= tmax*0.5 |
| STAT_KUEHLDAUER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: 0.5*tmax < t <= tmax |
| STAT_KUEHLDAUER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: t > tmax |

### RES_0XD4CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEF_NX_UND_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klassen-Grenzwerten der X-Klassen (NX plus 1 Werte) |
| STAT_DEF_NY_UND_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klassen-Grenzwerten der Y-Klassen (NY plus 1 Werte) |
| STAT_DEF_NZ1_UND_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klassen-Grenzwerten der Z1-Klassen (NZ1 plus 1 Werte) |
| STAT_DEF_NZ2_UND_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klassen-Grenzwerten der Z2-Klassen (NZ2 plus 1 Werte) |
| STAT_DEF_NZ3_UND_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klassen-Grenzwerten der Z3-Klassen (NZ3 plus 1 Werte) |
| STAT_JOB1_DATEN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_1 |
| STAT_JOB1_DATEN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_2 |
| STAT_JOB1_DATEN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_3 |
| STAT_JOB1_DATEN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_4 |
| STAT_JOB1_DATEN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_5 |
| STAT_JOB1_DATEN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_6 |
| STAT_JOB1_DATEN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_7 |
| STAT_JOB1_DATEN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_8 |
| STAT_JOB1_DATEN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_9 |
| STAT_JOB1_DATEN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_10 |
| STAT_JOB1_DATEN_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_11 |
| STAT_JOB1_DATEN_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_12 |
| STAT_JOB1_DATEN_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_13 |
| STAT_JOB1_DATEN_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_14 |
| STAT_JOB1_DATEN_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_15 |
| STAT_JOB1_DATEN_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_16 |
| STAT_JOB1_DATEN_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_17 |
| STAT_JOB1_DATEN_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_18 |
| STAT_JOB1_DATEN_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_19 |
| STAT_JOB1_DATEN_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_20 |
| STAT_JOB1_DATEN_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_21 |
| STAT_JOB1_DATEN_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_22 |
| STAT_JOB1_DATEN_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_23 |
| STAT_JOB1_DATEN_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_24 |
| STAT_JOB1_DATEN_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_25 |
| STAT_JOB1_DATEN_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_26 |
| STAT_JOB1_DATEN_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_27 |
| STAT_JOB1_DATEN_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_28 |
| STAT_JOB1_DATEN_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_29 |
| STAT_JOB1_DATEN_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_30 |
| STAT_JOB1_DATEN_31_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_31 |
| STAT_JOB1_DATEN_32_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_32 |
| STAT_JOB1_DATEN_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_33 |
| STAT_JOB1_DATEN_34_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_34 |
| STAT_JOB1_DATEN_35_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_35 |
| STAT_JOB1_DATEN_36_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_36 |
| STAT_JOB1_DATEN_37_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_37 |
| STAT_JOB1_DATEN_38_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_38 |
| STAT_JOB1_DATEN_39_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_39 |
| STAT_JOB1_DATEN_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_40 |
| STAT_JOB1_DATEN_41_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_41 |
| STAT_JOB1_DATEN_42_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_42 |
| STAT_JOB1_DATEN_43_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_43 |
| STAT_JOB1_DATEN_44_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_44 |
| STAT_JOB1_DATEN_45_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_45 |
| STAT_JOB1_DATEN_46_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_46 |
| STAT_JOB1_DATEN_47_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_47 |
| STAT_JOB1_DATEN_48_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_48 |
| STAT_JOB1_DATEN_49_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_49 |
| STAT_JOB1_DATEN_50_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_50 |
| STAT_JOB1_DATEN_51_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_51 |
| STAT_JOB1_DATEN_52_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_52 |
| STAT_JOB1_DATEN_53_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_53 |
| STAT_JOB1_DATEN_54_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_54 |
| STAT_JOB1_DATEN_55_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_55 |
| STAT_JOB1_DATEN_56_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_56 |
| STAT_JOB1_DATEN_57_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_57 |
| STAT_JOB1_DATEN_58_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_58 |
| STAT_JOB1_DATEN_59_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_59 |
| STAT_JOB1_DATEN_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_60 |
| STAT_JOB1_DATEN_61_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_61 |
| STAT_JOB1_DATEN_62_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_62 |
| STAT_JOB1_DATEN_63_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_63 |
| STAT_JOB1_DATEN_64_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_64 |
| STAT_JOB1_DATEN_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_65 |
| STAT_JOB1_DATEN_66_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_66 |
| STAT_JOB1_DATEN_67_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_67 |
| STAT_JOB1_DATEN_68_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_68 |
| STAT_JOB1_DATEN_69_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_69 |
| STAT_JOB1_DATEN_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_70 |
| STAT_JOB1_DATEN_71_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_71 |
| STAT_JOB1_DATEN_72_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_72 |
| STAT_JOB1_DATEN_73_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_73 |
| STAT_JOB1_DATEN_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_74 |
| STAT_JOB1_DATEN_75_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_75 |
| STAT_JOB1_DATEN_76_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_76 |
| STAT_JOB1_DATEN_77_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_77 |
| STAT_JOB1_DATEN_78_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_78 |
| STAT_JOB1_DATEN_79_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_79 |
| STAT_JOB1_DATEN_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_80 |
| STAT_JOB1_DATEN_81_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_81 |
| STAT_JOB1_DATEN_82_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_82 |
| STAT_JOB1_DATEN_83_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_83 |
| STAT_JOB1_DATEN_84_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_84 |
| STAT_JOB1_DATEN_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_85 |
| STAT_JOB1_DATEN_86_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_86 |
| STAT_JOB1_DATEN_87_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_87 |
| STAT_JOB1_DATEN_88_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_88 |
| STAT_JOB1_DATEN_89_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_89 |
| STAT_JOB1_DATEN_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_90 |
| STAT_JOB1_DATEN_91_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_91 |
| STAT_JOB1_DATEN_92_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_92 |
| STAT_JOB1_DATEN_93_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_93 |
| STAT_JOB1_DATEN_94_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_94 |
| STAT_JOB1_DATEN_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_95 |
| STAT_JOB1_DATEN_96_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_96 |
| STAT_JOB1_DATEN_97_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_97 |
| STAT_JOB1_DATEN_98_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_98 |
| STAT_JOB1_DATEN_99_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_99 |
| STAT_JOB1_DATEN_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_100 |
| STAT_JOB1_DATEN_101_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_101 |
| STAT_JOB1_DATEN_102_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_102 |
| STAT_JOB1_DATEN_103_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_103 |
| STAT_JOB1_DATEN_104_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_104 |
| STAT_JOB1_DATEN_105_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_105 |
| STAT_JOB1_DATEN_106_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_106 |
| STAT_JOB1_DATEN_107_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_107 |
| STAT_JOB1_DATEN_108_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_108 |
| STAT_JOB1_DATEN_109_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_109 |
| STAT_JOB1_DATEN_110_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_110 |
| STAT_JOB1_DATEN_111_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_111 |
| STAT_JOB1_DATEN_112_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_112 |
| STAT_JOB1_DATEN_113_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_113 |
| STAT_JOB1_DATEN_114_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_114 |
| STAT_JOB1_DATEN_115_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_115 |
| STAT_JOB1_DATEN_116_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_116 |
| STAT_JOB1_DATEN_117_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_117 |
| STAT_JOB1_DATEN_118_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_118 |
| STAT_JOB1_DATEN_119_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_119 |
| STAT_JOB1_DATEN_120_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_120 |
| STAT_JOB1_DATEN_121_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_121 |
| STAT_JOB1_DATEN_122_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_122 |
| STAT_JOB1_DATEN_123_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_123 |
| STAT_JOB1_DATEN_124_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_124 |
| STAT_JOB1_DATEN_125_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job1_125 |

### RES_0XD4CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_JOB2_DATEN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_1 |
| STAT_JOB2_DATEN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_2 |
| STAT_JOB2_DATEN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_3 |
| STAT_JOB2_DATEN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_4 |
| STAT_JOB2_DATEN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_5 |
| STAT_JOB2_DATEN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_6 |
| STAT_JOB2_DATEN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_7 |
| STAT_JOB2_DATEN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_8 |
| STAT_JOB2_DATEN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_9 |
| STAT_JOB2_DATEN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_10 |
| STAT_JOB2_DATEN_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_11 |
| STAT_JOB2_DATEN_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_12 |
| STAT_JOB2_DATEN_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_13 |
| STAT_JOB2_DATEN_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_14 |
| STAT_JOB2_DATEN_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_15 |
| STAT_JOB2_DATEN_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_16 |
| STAT_JOB2_DATEN_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_17 |
| STAT_JOB2_DATEN_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_18 |
| STAT_JOB2_DATEN_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_19 |
| STAT_JOB2_DATEN_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_20 |
| STAT_JOB2_DATEN_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_21 |
| STAT_JOB2_DATEN_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_22 |
| STAT_JOB2_DATEN_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_23 |
| STAT_JOB2_DATEN_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_24 |
| STAT_JOB2_DATEN_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_25 |
| STAT_JOB2_DATEN_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_26 |
| STAT_JOB2_DATEN_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_27 |
| STAT_JOB2_DATEN_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_28 |
| STAT_JOB2_DATEN_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_29 |
| STAT_JOB2_DATEN_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_30 |
| STAT_JOB2_DATEN_31_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_31 |
| STAT_JOB2_DATEN_32_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_32 |
| STAT_JOB2_DATEN_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_33 |
| STAT_JOB2_DATEN_34_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_34 |
| STAT_JOB2_DATEN_35_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_35 |
| STAT_JOB2_DATEN_36_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_36 |
| STAT_JOB2_DATEN_37_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_37 |
| STAT_JOB2_DATEN_38_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_38 |
| STAT_JOB2_DATEN_39_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_39 |
| STAT_JOB2_DATEN_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_40 |
| STAT_JOB2_DATEN_41_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_41 |
| STAT_JOB2_DATEN_42_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_42 |
| STAT_JOB2_DATEN_43_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_43 |
| STAT_JOB2_DATEN_44_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_44 |
| STAT_JOB2_DATEN_45_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_45 |
| STAT_JOB2_DATEN_46_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_46 |
| STAT_JOB2_DATEN_47_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_47 |
| STAT_JOB2_DATEN_48_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_48 |
| STAT_JOB2_DATEN_49_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_49 |
| STAT_JOB2_DATEN_50_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_50 |
| STAT_JOB2_DATEN_51_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_51 |
| STAT_JOB2_DATEN_52_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_52 |
| STAT_JOB2_DATEN_53_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_53 |
| STAT_JOB2_DATEN_54_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_54 |
| STAT_JOB2_DATEN_55_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_55 |
| STAT_JOB2_DATEN_56_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_56 |
| STAT_JOB2_DATEN_57_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_57 |
| STAT_JOB2_DATEN_58_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_58 |
| STAT_JOB2_DATEN_59_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_59 |
| STAT_JOB2_DATEN_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_60 |
| STAT_JOB2_DATEN_61_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_61 |
| STAT_JOB2_DATEN_62_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_62 |
| STAT_JOB2_DATEN_63_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_63 |
| STAT_JOB2_DATEN_64_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_64 |
| STAT_JOB2_DATEN_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_65 |
| STAT_JOB2_DATEN_66_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_66 |
| STAT_JOB2_DATEN_67_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_67 |
| STAT_JOB2_DATEN_68_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_68 |
| STAT_JOB2_DATEN_69_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_69 |
| STAT_JOB2_DATEN_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_70 |
| STAT_JOB2_DATEN_71_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_71 |
| STAT_JOB2_DATEN_72_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_72 |
| STAT_JOB2_DATEN_73_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_73 |
| STAT_JOB2_DATEN_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_74 |
| STAT_JOB2_DATEN_75_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_75 |
| STAT_JOB2_DATEN_76_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_76 |
| STAT_JOB2_DATEN_77_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_77 |
| STAT_JOB2_DATEN_78_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_78 |
| STAT_JOB2_DATEN_79_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_79 |
| STAT_JOB2_DATEN_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_80 |
| STAT_JOB2_DATEN_81_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_81 |
| STAT_JOB2_DATEN_82_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_82 |
| STAT_JOB2_DATEN_83_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_83 |
| STAT_JOB2_DATEN_84_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_84 |
| STAT_JOB2_DATEN_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_85 |
| STAT_JOB2_DATEN_86_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_86 |
| STAT_JOB2_DATEN_87_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_87 |
| STAT_JOB2_DATEN_88_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_88 |
| STAT_JOB2_DATEN_89_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_89 |
| STAT_JOB2_DATEN_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_90 |
| STAT_JOB2_DATEN_91_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_91 |
| STAT_JOB2_DATEN_92_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_92 |
| STAT_JOB2_DATEN_93_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_93 |
| STAT_JOB2_DATEN_94_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_94 |
| STAT_JOB2_DATEN_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_95 |
| STAT_JOB2_DATEN_96_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_96 |
| STAT_JOB2_DATEN_97_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_97 |
| STAT_JOB2_DATEN_98_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_98 |
| STAT_JOB2_DATEN_99_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_99 |
| STAT_JOB2_DATEN_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_100 |
| STAT_JOB2_DATEN_101_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_101 |
| STAT_JOB2_DATEN_102_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_102 |
| STAT_JOB2_DATEN_103_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_103 |
| STAT_JOB2_DATEN_104_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_104 |
| STAT_JOB2_DATEN_105_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_105 |
| STAT_JOB2_DATEN_106_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_106 |
| STAT_JOB2_DATEN_107_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_107 |
| STAT_JOB2_DATEN_108_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_108 |
| STAT_JOB2_DATEN_109_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_109 |
| STAT_JOB2_DATEN_110_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_110 |
| STAT_JOB2_DATEN_111_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_111 |
| STAT_JOB2_DATEN_112_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_112 |
| STAT_JOB2_DATEN_113_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_113 |
| STAT_JOB2_DATEN_114_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_114 |
| STAT_JOB2_DATEN_115_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_115 |
| STAT_JOB2_DATEN_116_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_116 |
| STAT_JOB2_DATEN_117_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_117 |
| STAT_JOB2_DATEN_118_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_118 |
| STAT_JOB2_DATEN_119_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_119 |
| STAT_JOB2_DATEN_120_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_120 |
| STAT_JOB2_DATEN_121_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_121 |
| STAT_JOB2_DATEN_122_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_122 |
| STAT_JOB2_DATEN_123_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_123 |
| STAT_JOB2_DATEN_124_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_124 |
| STAT_JOB2_DATEN_125_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_125 |
| STAT_JOB2_DATEN_126_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_126 |
| STAT_JOB2_DATEN_127_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datenwert Job2_127 |

### RES_0XD67F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MIN_NENN_01_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_01_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_02_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_02_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_03_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_03_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_04_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_04_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_05_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_05_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_ID_ZELLE_SOC_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID der Zelle mit kleinstem SoC_min_nenn |
| STAT_COUNTER_RG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler, wie oft der Ringspeicher seit dem letzten Reset beschrieben wurde |

### RES_0XD6C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_R_ISO_TRG_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 01 |
| STAT_R_ISO_QAL_TRG_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 01 |
| STAT_R_ISO_TRG_02_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 02 |
| STAT_R_ISO_QAL_TRG_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 02 |
| STAT_R_ISO_TRG_03_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 03 |
| STAT_R_ISO_QAL_TRG_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 03 |
| STAT_R_ISO_TRG_04_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 04 |
| STAT_R_ISO_QAL_TRG_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 04 |
| STAT_R_ISO_TRG_05_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 05 |
| STAT_R_ISO_QAL_TRG_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 05 |

### RES_0XD6C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STD_KM_ISO_01_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 01 |
| STAT_STD_R_ISO_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 01 |
| STAT_STD_R_ISO_QAL_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 01 |
| STAT_STD_KM_ISO_02_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 02 |
| STAT_STD_R_ISO_02_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 02 |
| STAT_STD_R_ISO_QAL_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 02 |
| STAT_STD_KM_ISO_03_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 03 |
| STAT_STD_R_ISO_03_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 03 |
| STAT_STD_R_ISO_QAL_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 03 |
| STAT_STD_KM_ISO_04_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 04 |
| STAT_STD_R_ISO_04_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 04 |
| STAT_STD_R_ISO_QAL_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 04 |
| STAT_STD_KM_ISO_05_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 05 |
| STAT_STD_R_ISO_05_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 05 |
| STAT_STD_R_ISO_QAL_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 05 |
| STAT_STD_KM_ISO_06_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 06 |
| STAT_STD_R_ISO_06_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 06 |
| STAT_STD_R_ISO_QAL_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 06 |
| STAT_STD_KM_ISO_07_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 07 |
| STAT_STD_R_ISO_07_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 07 |
| STAT_STD_R_ISO_QAL_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 07 |
| STAT_STD_KM_ISO_08_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 08 |
| STAT_STD_R_ISO_08_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 08 |
| STAT_STD_R_ISO_QAL_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 08 |
| STAT_STD_KM_ISO_09_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 09 |
| STAT_STD_R_ISO_09_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 09 |
| STAT_STD_R_ISO_QAL_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 09 |
| STAT_STD_KM_ISO_10_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 10 |
| STAT_STD_R_ISO_10_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 10 |
| STAT_STD_R_ISO_QAL_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 10 |

### RES_0XD6C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRG_KM_ISO_01_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 01 |
| STAT_TRG_R_ISO_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 01 |
| STAT_TRG_R_ISO_QAL_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 01 |
| STAT_TRG_KM_ISO_02_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 02 |
| STAT_TRG_R_ISO_02_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 02 |
| STAT_TRG_R_ISO_QAL_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 02 |
| STAT_TRG_KM_ISO_03_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 03 |
| STAT_TRG_R_ISO_03_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 03 |
| STAT_TRG_R_ISO_QAL_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 03 |
| STAT_TRG_KM_ISO_04_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 04 |
| STAT_TRG_R_ISO_04_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 04 |
| STAT_TRG_R_ISO_QAL_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 04 |
| STAT_TRG_KM_ISO_05_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 05 |
| STAT_TRG_R_ISO_05_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 05 |
| STAT_TRG_R_ISO_QAL_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 05 |
| STAT_TRG_KM_ISO_06_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 06 |
| STAT_TRG_R_ISO_06_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 06 |
| STAT_TRG_R_ISO_QAL_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 06 |
| STAT_TRG_KM_ISO_07_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 07 |
| STAT_TRG_R_ISO_07_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 07 |
| STAT_TRG_R_ISO_QAL_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 07 |
| STAT_TRG_KM_ISO_08_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 08 |
| STAT_TRG_R_ISO_08_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 08 |
| STAT_TRG_R_ISO_QAL_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 08 |
| STAT_TRG_KM_ISO_09_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 09 |
| STAT_TRG_R_ISO_09_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 09 |
| STAT_TRG_R_ISO_QAL_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 09 |
| STAT_TRG_KM_ISO_10_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 10 |
| STAT_TRG_R_ISO_10_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 10 |
| STAT_TRG_R_ISO_QAL_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 10 |

### RES_0XD6CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLERZAEHLER_STD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler aller aufgetretenen Fehler der Standardmessung |
| STAT_ISO_STD_FZ1_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | erstmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_ISO_STD_FZ1_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | erstmaliger Fehlerzeitpunkt R_iso_gesQUAL |
| STAT_ISO_STD_FZ2_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | letztmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_ISO_STD_FZ2_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | letztmaliger Fehlerzeitpunkt R_iso_gesQUAL |

### RES_0XD6CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_C_MIN_ERG_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C (auf Speicherebene) als Ergebnis des ersten Kapazitätstests |
| STAT_SOH_C_MIN_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C VOR erstem Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SoH_C VOR erstem Kapazitätstest |
| STAT_SOH_C_AVG_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SoH_C VOR erstem Kapazitätstest |
| STAT_TEMP_VOR_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere gemessene Temperatur auf HVS-Ebene VOR erstem Kapazitätstest |
| STAT_MAX_DELTA_U_CELL_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximales Spannungsdelta der Zellen VOR erstem Kapazitätstest (alt)  Asymmetrie-Potential als Spannungsdifferenz der während des 1-ten Kapazitätstests am tiefsten entladenen Zelle zu Ucel_max im Volllademoment (neu)  |
| STAT_MAX_DELTA_SOC_NENN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximales SoC-Delta der Zellen VOR erstem Kapazitätstest (alt)  Asymmetrie-Potential als SoC_Nenn-Prozent-Wert, der während des 1-ten Kapazitätstests ermittelt wurde (neu) |
| STAT_ZEITPUNKT_TEST_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) am Ende des ersten Kapazitätstests |
| STAT_SOH_C_MIN_ERG_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C (auf Speicherebene) als Ergebnis des zweiten Kapazitätstests |
| STAT_SOH_C_MIN_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C VOR zweitem Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SoH_C VOR zweitem Kapazitätstest |
| STAT_SOH_C_AVG_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SoH_C VOR zweitem Kapazitätstest |
| STAT_TEMP_VOR_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere gemessene Temperatur auf HVS-Ebene VOR zweitem Kapazitätstest |
| STAT_MAX_DELTA_U_CELL_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximales Spannungsdelta der Zellen VOR zweitem Kapazitätstest (alt)  Asymmetrie-Potential als Spannungsdifferenz der während des zweiten Kapazitätstests am tiefsten entladenen Zelle zu Ucel_max im Volllademoment (neu) |
| STAT_MAX_DELTA_SOC_NENN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximales SoC-Delta der Zellen VOR zweitem Kapazitätstest (alt)  Asymmetrie-Potential als SoC_Nenn-Prozent-Wert, der während des zweiten Kapazitätstests ermittelt wurde (neu) |
| STAT_ZEITPUNKT_TEST_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) am Ende des zweiten Kapazitätstests |
| STAT_SOH_C_MIN_ERG_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C (auf Speicherebene) als Ergebnis des dritten Kapazitätstests |
| STAT_SOH_C_MIN_VOR_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C VOR drittem Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SoH_C VOR drittem Kapazitätstest |
| STAT_SOH_C_AVG_VOR_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SoH_C VOR drittem Kapazitätstest |
| STAT_TEMP_VOR_TEST_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere gemessene Temperatur auf HVS-Ebene VOR drittem Kapazitätstest |
| STAT_MAX_DELTA_U_CELL_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximales Spannungsdelta der Zellen VOR drittem Kapazitätstest (alt)  Asymmetrie-Potential als Spannungsdifferenz der während des dritten Kapazitätstests am tiefsten entladenen Zelle zu Ucel_max im Volllademoment (neu) |
| STAT_MAX_DELTA_SOC_NENN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximales SoC-Delta der Zellen VOR drittem Kapazitätstest (alt)  Asymmetrie-Potential als SoC_Nenn-Prozent-Wert, der während des dritten Kapazitätstests ermittelt wurde (neu) |
| STAT_ZEITPUNKT_TEST_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) am Ende des dritten Kapazitätstests |

### RES_0XD6CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_ADAPT_COUNT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 1. Adaption |
| STAT_GRUND_ADAPTION_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 1. Adaption |
| STAT_AH_CUM_ABS_1_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_1_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 1. Adaption geöffnet war |
| STAT_TEMP_MEAN1_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 1. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 1. Adaption |
| STAT_UCEL_MIN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_UCEL_MAX_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_UCEL_MEAN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 1. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 1. Adaption |
| STAT_OVC1_ZELLE1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 1. Adaption |
| STAT_OVC2_ZELLE1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 1. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_1_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die erste Adaption |
| STAT_SOH_MIN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 1. Adaption |
| STAT_SOH_MAX_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 1. Adaption |
| STAT_SOH_MEAN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 1. Adaption |
| STAT_SOH_ADAPT_COUNT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 2. Adaption |
| STAT_GRUND_ADAPTION_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 2. Adaption |
| STAT_AH_CUM_ABS_2_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_2_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 2. Adaption geöffnet war |
| STAT_TEMP_MEAN1_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 2. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 2. Adaption |
| STAT_UCEL_MIN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_UCEL_MAX_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_UCEL_MEAN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 2. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 2. Adaption |
| STAT_OVC1_ZELLE1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 2. Adaption |
| STAT_OVC2_ZELLE1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 2. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_2_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die zweite Adaption |
| STAT_SOH_MIN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 2. Adaption |
| STAT_SOH_MAX_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 2. Adaption |
| STAT_SOH_MEAN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 2. Adaption |
| STAT_SOH_ADAPT_COUNT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 3. Adaption |
| STAT_GRUND_ADAPTION_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 3. Adaption |
| STAT_AH_CUM_ABS_3_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_3_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 3. Adaption geöffnet war |
| STAT_TEMP_MEAN1_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 3. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 3. Adaption |
| STAT_UCEL_MIN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_UCEL_MAX_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_UCEL_MEAN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 3. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 3. Adaption |
| STAT_OVC1_ZELLE1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 3. Adaption |
| STAT_OVC2_ZELLE1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 3. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_3_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die dritte Adaption |
| STAT_SOH_MIN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 3. Adaption |
| STAT_SOH_MAX_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 3. Adaption |
| STAT_SOH_MEAN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 3. Adaption |
| STAT_SOH_ADAPT_COUNT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 4. Adaption |
| STAT_GRUND_ADAPTION_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 4. Adaption |
| STAT_AH_CUM_ABS_4_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_4_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 4. Adaption geöffnet war |
| STAT_TEMP_MEAN1_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 4. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 4. Adaption |
| STAT_UCEL_MIN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_UCEL_MAX_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_UCEL_MEAN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 4. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 4. Adaption |
| STAT_OVC1_ZELLE1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 4. Adaption |
| STAT_OVC2_ZELLE1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 4. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_4_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die vierte Adaption |
| STAT_SOH_MIN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 4. Adaption |
| STAT_SOH_MAX_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 4. Adaption |
| STAT_SOH_MEAN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 4. Adaption |
| STAT_SOH_ADAPT_COUNT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 5. Adaption |
| STAT_GRUND_ADAPTION_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 5. Adaption |
| STAT_AH_CUM_ABS_5_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_5_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 5. Adaption geöffnet war |
| STAT_TEMP_MEAN1_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 5. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 5. Adaption |
| STAT_UCEL_MIN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_UCEL_MAX_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_UCEL_MEAN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 5. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 5. Adaption |
| STAT_OVC1_ZELLE1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 5. Adaption |
| STAT_OVC2_ZELLE1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 5. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_5_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die fünfte Adaption |
| STAT_SOH_MIN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 5. Adaption |
| STAT_SOH_MAX_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 5. Adaption |
| STAT_SOH_MEAN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 5. Adaption |
| STAT_SOH_MIN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH VOR der ältesten Adaption |
| STAT_SOH_MAX_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH VOR der ältesten Adaption |
| STAT_SOH_MEAN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH VOR der ältesten Adaption |

### RES_0XD6CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSTEMP_CSC1_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 1 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC1_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 1 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC1_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 1 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC2_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 2 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC2_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 2 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC2_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 2 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC3_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 3 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC3_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 3 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC3_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 3 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC4_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 4 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC4_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 4 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC4_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 4 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC5_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 5 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC5_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 5 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC5_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 5 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC6_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 6 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC6_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 6 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC6_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 6 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC7_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 7 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC7_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 7 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC7_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 7 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC8_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 8 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC8_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 8 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC8_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 8 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC9_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 9 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC9_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 9 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC9_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 9 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC10_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 10 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC10_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 10 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC10_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 10 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC11_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 11 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC11_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 11 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC11_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 11 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC12_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 12 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC12_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 12 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC12_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 12 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC13_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 13 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC13_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 13 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC13_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 13 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC14_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 14 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC14_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 14 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC14_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 14 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC15_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 15 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC15_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 15 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC15_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 15 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC16_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 16 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC16_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 16 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC16_SENS3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 3 CSC 16 // 127 = Qual ungültig |

### RES_0XD6D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLERZAEHLER_TRG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler aller aufgetretenen Fehler der getriggerten Nachlaufmessung |
| STAT_ISO_TRG_FZ1_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | erstmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_ISO_TRG_FZ1_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | erstmaliger Fehlerzeitpunkt R_iso_gesQUAL |
| STAT_ISO_TRG_FZ2_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | letztmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_ISO_TRG_FZ2_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | letztmaliger Fehlerzeitpunkt R_iso_gesQUAL |

### RES_0XD6D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_R_ISO_ROH_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert als Rohwert der letzten ISO-Messung [kOhm] |
| STAT_R_ISO_ROH_QAL_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier des R_iso_Rohwertes der letzten Iso-Messung // Ungültigkeitswert: 255. Gültige Werte sind zwischen 0 und 21 definiert und abhängig von der Qualität der Isolationsmessung. Dabei hat eine Messung mit der besten Qualität den Wert 21. |

### RES_0XDD61_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_FREIGABE | 0-n | high | unsigned char | - | TAB_SCHUETZ_FREIGABE | 1.0 | 1.0 | 0.0 | Liest das Bit zur Freigabe oder Sperrung der Schützschalter |

### RES_0XDD63_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SCHALTUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schaltungen der Schützschalter ohne Last |
| STAT_ANZAHL_SCHALTUNGEN_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schaltungen der Schützschalter unter Last |

### RES_0XDD6A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISOWIDERSTAND_EXT_TRG_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Nachlauf (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_EXT_STD_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Betrieb (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_INT_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter interner Isowiderstand (offene Schütze); wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |
| STAT_ISOWIDERSTAND_EXT_TRG_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Nachlauf: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_EXT_STD_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Betrieb: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_INT_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Intern: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel; wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |

### RES_0XDD6F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE | - | - | - | Status Kühlmittel-Ventil: Geschlossen oder offen |

### RES_0XDD7C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNG_MAX_WERT | W | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | Vordefinierter maximaler Leistungswert in Watt (projektspezifisch, auf Gesamtspeicherebene) |
| STAT_ZEIT_POWER_DCHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  0 < P <= Pmax*0.16 |
| STAT_ZEIT_POWER_DCHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.16 < P <= Pmax*0.33 |
| STAT_ZEIT_POWER_DCHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.33 < P <= Pmax*0.5 |
| STAT_ZEIT_POWER_DCHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.5 < P <= Pmax*0.66 |
| STAT_ZEIT_POWER_DCHG_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.66 < P <= Pmax*0.80 |
| STAT_ZEIT_POWER_DCHG_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.80 < P <= Pmax |
| STAT_ZEIT_POWER_DCHG_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  P > Pmax |
| STAT_ZEIT_POWER_CHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  0 < P <= Pmax*0.16 |
| STAT_ZEIT_POWER_CHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.16 < P <= Pmax*0.33 |
| STAT_ZEIT_POWER_CHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.33 < P <= Pmax*0.5 |
| STAT_ZEIT_POWER_CHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.5 < P <= Pmax*0.66 |
| STAT_ZEIT_POWER_CHG_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.66 < P <= Pmax*0.80 |
| STAT_ZEIT_POWER_CHG_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.80 < P <= Pmax |
| STAT_ZEIT_POWER_CHG_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  P > Pmax |

### RES_0XDD7D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Ladestrom |
| STAT_ENTLADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Entladesstrom |

### RES_0XDD7E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | maximal erlaubte Ladespannung |
| STAT_ENTLADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | maximal erlaubte Entladespannung |

### RES_0XDD8E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_MAX_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Vorderfinierter maximaler Stromwert in Ampere (projektspezifisch) |
| STAT_STROM_MIN_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Vorderfinierter minimaler Stromwert in Ampere (projektspezifisch) |
| STAT_I_HISTO_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse I < =Imin |
| STAT_I_HISTO_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imin < I <= Imin*0.5 |
| STAT_I_HISTO_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imin*0.5 < I <= Imin*0.03 |
| STAT_I_HISTO_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse in Imin*0.03 < I <= 0 |
| STAT_I_HISTO_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse 0 < I <= Imax*0.01 |
| STAT_I_HISTO_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imax*0.01 < I <= Imax*0.16 |
| STAT_I_HISTO_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imax*0.16 < I <= Imax*0.32 |
| STAT_I_HISTO_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse I > =Imax*0.32 |

### RES_0XDD90_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_TEMP_TOTAL_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T kleiner -25°C, Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen -25°C und -10°C, Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen -10°C und 0°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 0°C und 10°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 10°C und 20°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 20°C und 25°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 25°C und 30°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 30°C und 35°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 35°C und 40°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 40°C und 45°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 45°C und 50°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 50°C und 55°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 55°C und 60°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_TOTAL_14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T grösser 60°C , Schütze offen und geschlossen |
| STAT_ZEIT_TEMP_NO_OP_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T kleiner -25°C, Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen -25°C und -10°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen -10°C und 0°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 0°C und 10°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 10°C und 20°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 20°C und 25°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 25°C und 30°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 30°C und 35°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 35°C und 40°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 40°C und 45°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 45°C und 50°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 50°C und 55°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T zwischen 55°C und 60°C , Schütze offen |
| STAT_ZEIT_TEMP_NO_OP_14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T grösser 60°C , Schütze offen |

### RES_0XDD91_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_SOC_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 1: %0 < SOC <= %10 |
| STAT_ZEIT_SOC_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 2: %10 < SOC <= %20 |
| STAT_ZEIT_SOC_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 3: %20 < SOC <= %30 |
| STAT_ZEIT_SOC_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 4: %30 < SOC <= %40 |
| STAT_ZEIT_SOC_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 5: %40 < SOC <= %50 |
| STAT_ZEIT_SOC_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 6: %50 < SOC <= %60 |
| STAT_ZEIT_SOC_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 7: %60 < SOC <= %70 |
| STAT_ZEIT_SOC_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 8: %70 < SOC <= %80 |
| STAT_ZEIT_SOC_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 9: %80 < SOC <= %85 |
| STAT_ZEIT_SOC_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 10: %85 < SOC <= %90 |
| STAT_ZEIT_SOC_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 11: %90 < SOC <= %95 |
| STAT_ZEIT_SOC_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 12: SOC > %95 |

### RES_0XDDA1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLDREHZAHL_KUEHLMITTELPUMPE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Ansteuerung der Kühlmittelumpe in % |

### RES_0XDDA5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_KUEHLMITTELPUMPE_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Kühlmittelpumpe (0 = nicht freigegeben, 1 = freigegeben) |

### RES_0XDDBC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktueller Anzeige Soc |
| STAT_MAXIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | obere Grenze des Anzeige Soc |
| STAT_MINIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | untere Grenze des Anzeige Soc |

### RES_0XDDBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_VORLADUNG_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | zuletzt benötigte Vorladezeit |
| STAT_ZEIT_VORLADUNG_1_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (1 Vorgang zuvor) |
| STAT_ZEIT_VORLADUNG_2_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (2 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_3_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (3 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_4_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (4 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (letzte Vorladung) |
| STAT_MAX_STROM_VORLADUNG_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (1 Vorgang zuvor) |
| STAT_MAX_STROM_VORLADUNG_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (2 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_3_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (3 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_4_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (4 Vorgänge zuvor) |

### RES_0XDDC0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCORE_SIM_MIN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten minimalen Zellkerntemperaturen (327,67 = unplausibel) |
| STAT_TCORE_SIM_MAX_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten maximalen Zellkerntemperaturen (327,67 = unplausibel) |
| STAT_TCORE_SIM_AVG_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten durchschnittlichen Zellkerntemperaturen (327,67 = unplausibel) |
| STAT_TCORE_PLAUSIBILITAET | 0-n | high | unsigned char | - | TAB_TCORE_PLAUSI | - | - | - | Bewertung der Temperaturrückgabe: 0 = T_core und T_term unplausibel, 1 = T_core plausibel,  2 = T_term (Ersatzwert bei T_core unplausibel) |

### RES_0XDDC2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTOR_RS_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Korrekturfaktor des seriellen ohmschen Wiederstands (1,5 = Erhöhung des Wiederstands um 50%) |
| STAT_FAKTOR_RP_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Korrekturfaktor des paralellen ohmschen Wiederstands (1,5 = Erhöhung des Wiederstands um 50%) |
| STAT_FAKTOR_CP_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Korrekturfaktor der parallelen Kapazität (1,5 = Erhöhung der Kapazität um 50%) |

### RES_0XDDC4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC der HV-Batterie |
| STAT_SOC_PLAUSIBILITAET_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gültigkeit des gelesenen SOC Werts: 0 = Wert unplausibel (Fehler), 1 = Wert OK auch bei Qualifier Warnung |

### RES_0XDDC6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM_DAUER_MAX_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Symmetrierdauer in Minuten (projektspezifisch) |
| STAT_HISTO_SYM_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  0 < t <= tmax*0.04 |
| STAT_HISTO_SYM_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.04 < t <= tmax*0.2 |
| STAT_HISTO_SYM_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  0.2*tmax < t <= tmax*0.36 |
| STAT_HISTO_SYM_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.36 < t <= tmax*0.52 |
| STAT_HISTO_SYM_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.52 < t <= tmax*0.68 |
| STAT_HISTO_SYM_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.68 < t <= tmax*0.86 |
| STAT_HISTO_SYM_DAUER_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.86 < t <= tmax |
| STAT_HISTO_SYM_DAUER_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  t > tmax |

### RES_0XDDC7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTO_SYM_ZELLANZAHL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = 0 |
| STAT_HISTO_SYM_ZELLANZAHL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = 1 |
| STAT_HISTO_SYM_ZELLANZAHL_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen:  1 < n <= NrCellsProModul |
| STAT_HISTO_SYM_ZELLANZAHL_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsProModul < n <= NrCellsTotal/2 |
| STAT_HISTO_SYM_ZELLANZAHL_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HISTO_SYM_ZELLANZAHL_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsTotal-NrCellsProModul < n <= NrCellsTotal-2 |
| STAT_HISTO_SYM_ZELLANZAHL_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n <= NrCellsTotal-1 |
| STAT_HISTO_SYM_ZELLANZAHL_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = NrCellsTotal |

### RES_0XDDC8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM_DELTASOC_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | aktueller dSOC (zuletzt bestimmt) |
| STAT_SYM_DELTASOC_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor einer Fahrt |
| STAT_SYM_DELTASOC_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor 2 Fahrten |
| STAT_SYM_DELTASOC_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor 3 Fahrten |
| STAT_SYM_DELTASOC_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor 4 Fahrten |

### RES_0XDDC9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_SYM_DAUER_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des letzten Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 1 |
| STAT_BAL_COMPL_1_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 1 Fahrt |
| STAT_MAX_SYM_ZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 2 |
| STAT_BAL_COMPL_2_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 2 Fahrt |
| STAT_MAX_SYM_ZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 3 |
| STAT_BAL_COMPL_3_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 3 Fahrt |
| STAT_MAX_SYM_ZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 4 |
| STAT_BAL_COMPL_4_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 4 Fahrten |
| STAT_MAX_SYM_ZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 5 |
| STAT_BAL_COMPL_5_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |

### RES_0XDDCB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SOC_GRENZE_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige minimale SOC Grenze |
| STAT_MAX_SOC_GRENZE_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige maximale SOC Grenze |

### RES_0XDDCC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_K1_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K1 |
| STAT_SCHUETZ_K2_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K2 |
| STAT_SCHUETZ_K3_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K3 |

### RES_0XDDE9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HFK_GESAMT_SOC_HUB_70_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 40% und 50% über Gesamtzeit |
| STAT_HFK_GESAMT_SOC_HUB_74_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 50% und 60% über Gesamtzeit |
| STAT_HFK_GESAMT_SOC_HUB_80_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 60% und 70% über Gesamtzeit |
| STAT_HFK_GESAMT_SOC_HUB_85_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 70% und 80% über Gesamtzeit |
| STAT_HFK_GESAMT_SOC_HUB_90_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 80% und 90% über Gesamtzeit |
| STAT_HFK_GESAMT_SOC_HUB_95_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 90% und 100% über Gesamtzeit |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_70_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 40% und 50%, Summe letztes und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_74_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 50% und 60%, Summe letztes und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_80_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 60% und 70%, Summe letztes und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_85_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 70% und 80%, Summe letztes und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_90_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 80% und 90%, Summe letztes und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_95_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 90% und 100%, Summe letztes und laufendes Jahr |
| STAT_HFK_LAUFENDER_MONAT_SOC_HUB_70_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 40% und 50%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDER_MONAT_SOC_HUB_74_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 50% und 60%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDER_MONAT_SOC_HUB_80_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 60% und 70%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDER_MONAT_SOC_HUB_85_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 70% und 80%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDER_MONAT_SOC_HUB_90_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 80% und 90%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDER_MONAT_SOC_HUB_95_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 90% und 100%, Summe letzter und laufender Monat |
| STAT_ZEITSTEMPEL_SOC_HUB_70_74_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 40% und 50% |
| STAT_ZEITSTEMPEL_SOC_HUB_74_80_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 50% und 60% |
| STAT_ZEITSTEMPEL_SOC_HUB_80_85_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 60% und 70% |
| STAT_ZEITSTEMPEL_SOC_HUB_85_90_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 70% und 80% |
| STAT_ZEITSTEMPEL_SOC_HUB_90_95_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 80% und 90% |
| STAT_ZEITSTEMPEL_SOC_HUB_95_100_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 90% und 100% |

### RES_0XDDEB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_START_SOC_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-1 (255 = unplausibel) |
| STAT_START_SOC_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-2 (255 = unplausibel) |
| STAT_START_SOC_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-3 (255 = unplausibel) |
| STAT_START_SOC_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-4 (255 = unplausibel) |
| STAT_START_SOC_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-5 (255 = unplausibel) |
| STAT_VERF_P_LADEN_1_WERT | kW | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-1 (51 = unplausibel) |
| STAT_VERF_P_LADEN_2_WERT | kW | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-2 (51 = unplausibel) |
| STAT_VERF_P_LADEN_3_WERT | kW | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-3 (51 = unplausibel) |
| STAT_VERF_P_LADEN_4_WERT | kW | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-4 (51 = unplausibel) |
| STAT_VERF_P_LADEN_5_WERT | kW | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-5 (51 = unplausibel) |
| STAT_REAL_END_SOC_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen SOC nach Abschluss des Ladervorgang-1 (255 = unplausibel) |
| STAT_REAL_END_SOC_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen SOC nach Abschluss des Ladervorgang-2 (255 = unplausibel) |
| STAT_REAL_END_SOC_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen SOC nach Abschluss des Ladervorgang-3 (255 = unplausibel) |
| STAT_REAL_END_SOC_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen SOC nach Abschluss des Ladervorgang-4 (255 = unplausibel) |
| STAT_REAL_END_SOC_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen SOC nach Abschluss des Ladervorgang-5 (255 = unplausibel) |
| STAT_GRUND_LADEENDE_WERT_1 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-1 |
| STAT_GRUND_LADEENDE_WERT_2 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-2 |
| STAT_GRUND_LADEENDE_WERT_3 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-3 |
| STAT_GRUND_LADEENDE_WERT_4 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-4 |
| STAT_GRUND_LADEENDE_WERT_5 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-5 |
| STAT_START_TEMP_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur zu Ladebeginn-1 (127 = unplausibel) |
| STAT_START_TEMP_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur zu Ladebeginn-2 (127 = unplausibel) |
| STAT_START_TEMP_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur zu Ladebeginn-3 (127 = unplausibel) |
| STAT_START_TEMP_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur zu Ladebeginn-4 (127 = unplausibel) |
| STAT_START_TEMP_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur zu Ladebeginn-5 (127 = unplausibel) |
| STAT_END_TEMP_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur nach Abschluss des Ladervorgangs-1 (127 = unplausibel) |
| STAT_END_TEMP_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur nach Abschluss des Ladervorgangs-2 (127 = unplausibel) |
| STAT_END_TEMP_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur nach Abschluss des Ladervorgangs-3 (127 = unplausibel) |
| STAT_END_TEMP_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur nach Abschluss des Ladervorgangs-4 (127 = unplausibel) |
| STAT_END_TEMP_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der mitlleren gemessenen Speichertemperatur nach Abschluss des Ladervorgangs-5 (127 = unplausibel) |
| STAT_BEGINN_PROG_LADEZEIT_1_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-1 |
| STAT_BEGINN_PROG_LADEZEIT_2_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-2 |
| STAT_BEGINN_PROG_LADEZEIT_3_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-3 |
| STAT_BEGINN_PROG_LADEZEIT_4_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-4 |
| STAT_BEGINN_PROG_LADEZEIT_5_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-5 |
| STAT_REAL_LADEZEIT_1_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-1 |
| STAT_REAL_LADEZEIT_2_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-2 |
| STAT_REAL_LADEZEIT_3_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-3 |
| STAT_REAL_LADEZEIT_4_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-4 |
| STAT_REAL_LADEZEIT_5_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-5 |
| STAT_RELATIVZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-1 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-2 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-3 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-4 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-5 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |

### RES_0XDDEC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_PROG_LADEZEIT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-1: fact <= -%25 |
| STAT_HIS_PROG_LADEZEIT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-2: %-25 < fact <= -%15 |
| STAT_HIS_PROG_LADEZEIT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-3: %-15 < fact <= -%5 |
| STAT_HIS_PROG_LADEZEIT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-4:  %-5 < fact <= %5 |
| STAT_HIS_PROG_LADEZEIT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-5: %5 < fact <= %15 |
| STAT_HIS_PROG_LADEZEIT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-6: %15 < fact <= %25 |
| STAT_HIS_PROG_LADEZEIT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-7: fact > %25 |

### RES_0XDE35_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SP_ID_00 | 0-n | high | unsigned int | - | TAB_SP_TYP | - | - | - | ID_00 Speicher-Typ [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_01_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_01 Speicher-Nummer [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_02_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_02 Initialaufbaumuster [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_03_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_03 Gehäuse [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_04_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_04 Kühler [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_05_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_05 Modul [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_06_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_06 CSC [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_07_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_07 HV-KBB [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_08_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_08 NV-KBB [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_09_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_09 BMU [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_10_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_10 S-Box [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_11_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_11 FREI [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_12_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_12 FREI [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_13_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_13 FREI [Ungültigkeitswert = FFFF] |

### RES_0XDE38_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_STROM_RMS_01_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer in Minuten in Klasse 1  // 0 -- X_rel -- 40% |
| STAT_HIS_STROM_RMS_02_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer in Minuten in Klasse 2  // 40 -- X_rel -- 60% |
| STAT_HIS_STROM_RMS_03_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer in Minuten in Klasse 3  // 60 -- X_rel -- 80% |
| STAT_HIS_STROM_RMS_04_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer in Minuten in Klasse 4  // 80 -- X_rel -- 100% |

### RES_0XDF60_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_HV_ON_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Gesamtzeit bei geschlossenen Hauptschaltern |
| STAT_TIME_TOTAL_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die gesamte Batterielebensdauer (Gesamtzeit bei geschlossenen und geöffneten Hauptschaltern) |

### RES_0XDF65_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_SPREIZUNG_MAX_WERT | °C | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Vorderfinierter maximaler Temperaturspreizungswert in Celcius  (projektspezifisch) |
| STAT_TEMP_SPREIZUNG_SYS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 1: 0 < dT <= dTmax*0.2 |
| STAT_TEMP_SPREIZUNG_SYS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 2: dTmax*0.2 < dT <= dTmax*0.4 |
| STAT_TEMP_SPREIZUNG_SYS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 3: dTmax*0.4 < dT <= dTmax*0.6 |
| STAT_TEMP_SPREIZUNG_SYS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 4: dTmax*0.6 < dT <= dTmax*0.8 |
| STAT_TEMP_SPREIZUNG_SYS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 5: dTmax*0.8 < dT <= dTmax |
| STAT_TEMP_SPREIZUNG_SYS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 6: dT > dTmax |

### RES_0XDF66_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_KUEHLMITTEL_MAX_WERT | °C | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Vordefinierte maximale Kühlmittelstemperatur (projektspezifisch) |
| STAT_TEMP_KUEHLMITTEL_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  T < =0 |
| STAT_TEMP_KUEHLMITTEL_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  0 < T < = Tmax*0.25 |
| STAT_TEMP_KUEHLMITTEL_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  Tmax* 0.25 < T < = Tmax*0.5 |
| STAT_TEMP_KUEHLMITTEL_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  Tmax* 0.5 < T < = Tmax*0.75 |
| STAT_TEMP_KUEHLMITTEL_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  Tmax* 0.75 < T < = Tmax |
| STAT_TEMP_KUEHLMITTEL_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  T > Tmax |

### RES_0XDF67_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADUNG_KUEHLUNG_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ladungsmenge bei eingeschalteter Kühlung |
| STAT_ENTLADUNG_KUEHLUNG_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Entladungsmenge bei eingeschalteter Kühlung |

### RES_0XDF71_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_ZELLEN_INSGESAMT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zellen des HV-Speichers |
| STAT_ANZAHL_ZELLEN_PRO_MODUL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zellen pro Modul |
| STAT_ANZAHL_MODULE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Module des HV-Speichers |
| STAT_ANZAHL_TEMPERATURSENSOREN_PRO_MODUL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Temperatursensoren pro Modul |

### RES_0XDF76_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOKO_KUEHL_DAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Vorkonditionierungs-Kuehldauer in Minuten (projektspezifisch) |
| STAT_VOKO_KUEHL_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: 0 < t <= tmax*0.1 |
| STAT_VOKO_KUEHL_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.1 < t <= tmax*0.2 |
| STAT_VOKO_KUEHL_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.2 < t <= tmax*0.3 |
| STAT_VOKO_KUEHL_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.3 < t <= tmax*0.4 |
| STAT_VOKO_KUEHL_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.4 < t <= tmax*0.6 |
| STAT_VOKO_KUEHL_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: t > tmax*0.6 |

### RES_0XDF77_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADE_DAUER_MAX_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Ladezeit in Stunden (projektspezifisch) |
| STAT_LADEDAUER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: 0 < t <= tmax*0.05 |
| STAT_LADEDAUER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.05 < t <= tmax*0.1 |
| STAT_LADEDAUER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.1 < t <= tmax*0.35 |
| STAT_LADEDAUER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.35 < t <= tmax*0.5 |
| STAT_LADEDAUER_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.5 < t <= tmax |
| STAT_LADEDAUER_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: t > tmax |

### RES_0XDF81_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_LOW_I_ZERO_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte untere SOC-Warngrenze-1 (projektspezifisch) |
| STAT_SOC_LOW_WARN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte untere SOC-Warngrenze-2 (projektspezifisch) |
| STAT_SOC_HIGH_I_ZERO_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte obere SOC-Warngrenze-1 (projektspezifisch) |
| STAT_SOC_HIGH_WARN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte obere SOC-Warngrenze-2 (projektspezifisch) |
| STAT_HIS_SOC_WARN_GRENZEN_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC<=SOC_LOW_I_ZERO |
| STAT_HIS_SOC_WARN_GRENZEN_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC_LOW_I_ZERO<SOC<=SOC_LOW_WARN |
| STAT_HIS_SOC_WARN_GRENZEN_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC_LOW_WARN<SOC<=SOC_HIGH_WARN |
| STAT_HIS_SOC_WARN_GRENZEN_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC_HIGH_WARN<SOC<=SOC_HIGH_I_ZERO |
| STAT_HIS_SOC_WARN_GRENZEN_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC >SOC_HIGH_I_ZERO |

### RES_0XDF83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_SER_NR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufende Nummer |
| STAT_ID_MV_HW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Hauptversion, laufende Nummer |
| STAT_ID_SV_HW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Unterversion, laufende Nummer |
| STAT_ID_MV_SW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Hauptversion, laufende Nummer |
| STAT_ID_SV_SW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unterversion, laufende Nummer |
| STAT_ID_VAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Variantenkennung SBOX 00000b: BK2.0 |
| STAT_ID_PRIM_ADUC_SW_MAIN_VERS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Primary ADUC Software Main Version  |
| STAT_ID_SEC_ADUC_SW_MAIN_VERS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Secondary ADUC Software Main Version  |
| STAT_ID_PRIM_ADUC_SW_SUB_VERS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Primary ADUC Software Subversion |
| STAT_ID_SEC_ADUC_SW_SUB_VERS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Secondary ADUC Software Subversion |

### RES_0XDF86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_DAY_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des ersten Tages der Woche |
| STAT_SOC_DAY_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des zweiten Tages der Woche |
| STAT_SOC_DAY_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des dritten Tages der Woche |
| STAT_SOC_DAY_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des vierten Tages der Woche |
| STAT_SOC_DAY_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des fünften Tages der Woche |
| STAT_SOC_DAY_6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des sechsten Tages der Woche |
| STAT_SOC_DAY_7_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des siebten Tages der Woche |
| STAT_SOC_WEEK_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert vor zwei Wochen |
| STAT_SOC_WEEK_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert vor drei Wochen |
| STAT_SOC_WEEK_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert vor vier Wochen |
| STAT_LAST_HV_ON_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit in Stunden seit das letzte Mal HV on war HVofftime_last |
| STAT_SOC_LAST_DRIVE_CYCLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC beim letzten Fahrtende |
| STAT_TIME_STAMP_LAST_CHG_END_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit in Stunden wann das letzte Mal Laden beendet/abgebrochen wurde |

### RES_0XDF8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_T1_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_T1_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_T1_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_T1_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_CHG_4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_ABS_4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_abs |

### RES_0XDF8B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_T2_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_T2_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_T2_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_T2_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_CHG_4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_ABS_4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_abs |

### RES_0XDF8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_T3_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_T3_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_T3_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_T3_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_CHG_4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse:  140 (bis 16-07), 125 (ab 17-03) < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_ABS_4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_abs |

### RES_0XDF8D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_T4_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_T4_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_T4_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_T4_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_CHG_4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_ABS_4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_abs |

### RES_0XDF8E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_T5_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_T5_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_T5_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_T5_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_CHG_4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 (bis 16-07), 125 (ab 17-03) |
| STAT_HIS_EFF_CURR_ABS_4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 (bis 16-07), 125 (ab 17-03) < Irel_abs |

### RES_0XDF8F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_T1_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei T <= -10: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_T1_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei T <= -10: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF90_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_T2_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei -10 < T <= 5: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_T2_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei -10 < T <= 5: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF91_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_T3_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 5 < T <= 25: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_T3_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 5 < T <= 25: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_T4_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 25 < T: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_T4_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 25 < T: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF9C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWR_STUETZP_P1_WERT | W | high | unsigned char | - | - | 200.0 | 1.0 | 0.0 | Zur Verfügung stehende Ladeleistung, Stützpunkt P1 |
| STAT_PWR_STUETZP_P2_WERT | W | high | unsigned char | - | - | 200.0 | 1.0 | 0.0 | Zur Verfügung stehende Ladeleistung, Stützpunkt P2 |
| STAT_TEMP_STUETZP_T1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T1 |
| STAT_TEMP_STUETZP_T2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T2 |
| STAT_TEMP_STUETZP_T3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T3 |
| STAT_TEMP_STUETZP_T4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T4 |
| STAT_SOC_STUETZP_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC1 |
| STAT_SOC_STUETZP_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC2 |
| STAT_SOC_STUETZP_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC3 |
| STAT_SOC_STUETZP_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC4 |
| STAT_SOC_STUETZP_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC5 |
| STAT_FAKT_P1_T1_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC1 |
| STAT_FAKT_P1_T1_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC2 |
| STAT_FAKT_P1_T1_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC3 |
| STAT_FAKT_P1_T1_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC4 |
| STAT_FAKT_P1_T1_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC5 |
| STAT_FAKT_P1_T2_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC1 |
| STAT_FAKT_P1_T2_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC2 |
| STAT_FAKT_P1_T2_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC3 |
| STAT_FAKT_P1_T2_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC4 |
| STAT_FAKT_P1_T2_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC5 |
| STAT_FAKT_P1_T3_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC1 |
| STAT_FAKT_P1_T3_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC2 |
| STAT_FAKT_P1_T3_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC3 |
| STAT_FAKT_P1_T3_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC4 |
| STAT_FAKT_P1_T3_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC5 |
| STAT_FAKT_P1_T4_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC1 |
| STAT_FAKT_P1_T4_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC2 |
| STAT_FAKT_P1_T4_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC3 |
| STAT_FAKT_P1_T4_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC4 |
| STAT_FAKT_P1_T4_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC5 |
| STAT_FAKT_P2_T1_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC1 |
| STAT_FAKT_P2_T1_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC2 |
| STAT_FAKT_P2_T1_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC3 |
| STAT_FAKT_P2_T1_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC4 |
| STAT_FAKT_P2_T1_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC5 |
| STAT_FAKT_P2_T2_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC1 |
| STAT_FAKT_P2_T2_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC2 |
| STAT_FAKT_P2_T2_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC3 |
| STAT_FAKT_P2_T2_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC4 |
| STAT_FAKT_P2_T2_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC5 |
| STAT_FAKT_P2_T3_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC1 |
| STAT_FAKT_P2_T3_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC2 |
| STAT_FAKT_P2_T3_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC3 |
| STAT_FAKT_P2_T3_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC4 |
| STAT_FAKT_P2_T3_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC5 |
| STAT_FAKT_P2_T4_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC1 |
| STAT_FAKT_P2_T4_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC2 |
| STAT_FAKT_P2_T4_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC3 |
| STAT_FAKT_P2_T4_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC4 |
| STAT_FAKT_P2_T4_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC5 |

### RES_0XDFA0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLKAPAZITAET_MIN_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen minimalen gemessenen Zellkapazität aller Zellen in Ah |
| STAT_ZELLKAPAZITAET_MAX_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen maximalen gemessenen Zellkapazität aller Zellen in Ah |
| STAT_ZELLKAPAZITAET_MEAN_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen mittleren gemessenen Zellkapazität gemittelt über alle Zellen in Ah |
| STAT_ZELLSPANNUNG_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen minimalen gemessenen Zellspannung aller Zellen in V |
| STAT_ZELLSPANNUNG_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen maximalen gemessenen Zellspannung aller Zellen in V |
| STAT_ZELLSPANNUNG_MEAN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen mittleren gemessenen Zellspannung aller Zellen in V |
| STAT_ZELLTEMPERATUR_MIN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen minimalen gemessenen Zelltemperatur aller Zellen in °C |
| STAT_ZELLTEMPERATUR_MAX_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen maximalen gemessenen Zelltemperatur aller Zellen in °C |
| STAT_ZELLTEMPERATUR_MEAN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen mittleren gemessenen Zelltemperatur aller Zellen in °C |
| STAT_ZELLWIDERSTANDSFAKTOR_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe des aktuellen minimalen gemessenen Widerstandsfaktors aller Zellen |
| STAT_ZELLWIDERSTANDSFAKTOR_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe des aktuellen maximalen gemessenen Widerstandsfaktors aller Zellen |
| STAT_ZELLWIDERSTANDSFAKTOR_MEAN_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe des aktuellen mittleren gemessenen Widerstandsfaktors aller Zellen |
| STAT_ZELLSOC_MIN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des aktuellen minimalen gemessenen SoC aller Zellen in % |
| STAT_ZELLSOC_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des aktuellen maximalen gemessenen SoC aller Zellen in % |
| STAT_ZELLSOC_MEAN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des aktuellen mittleren gemessenen SoC aller Zellen in % |
| STAT_ZELLOCV_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen minimalen im letzten Ruhezustand gemessenen OCV aller Zellen in V |
| STAT_ZELLOCV_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen maximalen im letzten Ruhezustand gemessenen OCV aller Zellen in V |
| STAT_ZELLOCV_MEAN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen mittleren im letzten Ruhezustand gemessenen OCV aller Zellen in V |
| STAT_IMPEDANCE_ESTIMATION_ALPHA_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Aktueller Alterungsfaktor des seriellen und parallelen ohmschen Wider aktuellenstands sowie der parallelen Kapazität (1,5 = Eröhung des aktuellen Wider aktuellenstands um 50%) |
| STAT_CUMULATIVE_ENERGIE_LADUNG_WERT | Ws | high | unsigned long | - | - | 36.0 | 1.0 | 0.0 | Wert der kumulierten Energie für Ladevorgänge. |
| STAT_CUMULATIVE_ENERGIE_ENTLADUNG_WERT | Ws | high | unsigned long | - | - | 36.0 | 1.0 | 0.0 | Wert der kumulierten Energie für Entladevorgänge |
| STAT_OVER_VOLT_INT_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_over] Fehlerschwellwert des ÜBERspannungsintegrals (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) |
| STAT_UNDER_VOLT_INT_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_under] Fehlerschwellwert des UNTERspannungsintegrals (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_OVER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten des ÜBERspannungsintegrals über alle Module beim  Laden in der  Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_OVER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten des ÜBERspannungsintegrals über alle Module beim  Laden in der  Klasse: UerrInt_over > UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_UNDER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten des UNTERspannungsintegrals über alle Module beim  Laden in der  Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_UNDER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten des UNTERspannungsintegrals über alle Module beim  Laden in der  Klasse: UerrInt_under > UerrIntLim_under |
| STAT_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Kilometerstand |

### RES_0XDFA3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINIMALE_RESTSTANDZEIT_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nach max. Entladung durch Kunden (SOC_Lim_warn) minimale Standzeit in Tagen, die ein Kunde ohne Nachladen zur Verfügung hat bis zum Eintreten der Schädigung der Hochvolt-Batterie. |
| STAT_AKTUELLE_RESTSTANDZEIT_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Standzeit in Tagen bis zum Eintreten der Schädigung der HV-Batterie, wenn diese nicht nachgeladen wird. (65535 = unplausibel), plausibel nur bei SHUTDOWN o. PERIODIC |

### RES_0XDFA4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SBOX_TAUSCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der durchgeführten SBOX Tauschvorgänge. |

### RES_0XDFA5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_01_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 01; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_02_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 02; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_03_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 03; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_04_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 04; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_05_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 05; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_06_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 06; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_07_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 07; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_08_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 08; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_09_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 09; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 10; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_11_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 11; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_12_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 12; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_13_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 13; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_14_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 14; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_15_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 15; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_16_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 16; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_17_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 17; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_18_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 18; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_19_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 19; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_20_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 20; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_21_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 21; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_22_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 22; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_23_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 23; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_24_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 24; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_25_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 25; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_26_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 26; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_27_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 27; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_28_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 28; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_29_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 29; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 30; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_31_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 31; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_32_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 32; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_33_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 33; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_34_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 34; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_35_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 35; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_36_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 36; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_37_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 37; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_38_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 38; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_39_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 39; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_40_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 40; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_41_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 41; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_42_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 42; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_43_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 43; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_44_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 44; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_45_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 45; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_46_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 46; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_47_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 47; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_48_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 48; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_49_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 49; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_50_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 50; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_51_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 51; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_52_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 52; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_53_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 53; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_54_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 54; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_55_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 55; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_56_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 56; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_57_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 57; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_58_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 58 Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_59_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 59; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_60_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 60; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_61_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 61; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_62_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 62; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_63_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 63; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_64_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 64; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_65_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 65; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_66_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 66; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_67_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 67; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_68_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 68; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_69_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 69; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_70_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 70; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_71_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 71; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_72_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 72; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_73_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 73; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_74_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 74; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_75_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 75; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_76_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 76; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_77_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 77; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_78_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 78; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_79_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 79; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_80_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 80; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_81_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 81; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_82_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 82; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_83_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 83; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_84_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 84; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_85_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 85; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_86_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 86; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_87_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 87; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_88_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 88; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_89_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 89; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_90_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 90; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_91_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 91; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_92_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 92; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_93_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 93; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_94_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 94; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_95_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 95; Unplausibilitätswert = 65,535V |
| STAT_ZELLSPANNUNG_96_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung ZELLE 96; Unplausibilitätswert = 65,535V |

### RES_0XDFA6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLDEFEKT_MOD_01 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 01: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_02 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 02: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_03 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 03: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_04 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 04: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_05 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 05: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_06 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 06: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_07 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 07: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_08 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 08: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_09 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 09: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_10 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 10: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |
| STAT_ZELLDEFEKT_MOD_11 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 11: 0 = nicht vorhanden (i.O.), 1 = vorhanden (n.i.O.) |

### RES_0XDFA7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLPACK_01_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 01 (28-stellig) |
| STAT_ZELLPACK_02_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 02 (28-stellig) |
| STAT_ZELLPACK_03_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 03 (28-stellig) |
| STAT_ZELLPACK_04_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 04 (28-stellig) |
| STAT_ZELLPACK_05_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 05 (28-stellig) |
| STAT_ZELLPACK_06_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 06 (28-stellig) |

### RES_0XDFA8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLPACK_07_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 07 (28-stellig) |
| STAT_ZELLPACK_08_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 08 (28-stellig) |
| STAT_ZELLPACK_09_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 09 (28-stellig) |
| STAT_ZELLPACK_10_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 10 (28-stellig) |
| STAT_ZELLPACK_11_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 11 (28-stellig) |

### RES_0XDFA9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_MOD_01_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 01 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_02_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 02 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_03_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 03 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_04_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 04 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_05_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 05 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_06_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 06 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_07_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 07 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_08_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 08 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_09_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 09 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_10_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 10 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_TEMP_MOD_11_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 11 aktuell gemessene Temperatur (Mittelwert der 3 Modultemp-Sensoren) Unplausibilitätswert = 327,67°C |

### RES_0XDFAA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_KAPA_MOD_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 01 |
| STAT_MIN_KAPA_MOD_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 02 |
| STAT_MIN_KAPA_MOD_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 03 |
| STAT_MIN_KAPA_MOD_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 04 |
| STAT_MIN_KAPA_MOD_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 05 |
| STAT_MIN_KAPA_MOD_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 06 |
| STAT_MIN_KAPA_MOD_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 07 |
| STAT_MIN_KAPA_MOD_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 08 |
| STAT_MIN_KAPA_MOD_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 09 |
| STAT_MIN_KAPA_MOD_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 10 |
| STAT_MIN_KAPA_MOD_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 11 |

### RES_0XDFAB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTOR_MAX_R_INNEN_MOD_01_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 01 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_02_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 02 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_03_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 03 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_04_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 04 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_05_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 05 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_06_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 06 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_07_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 07 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_08_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 08 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_09_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 09 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_10_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 10 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |
| STAT_FAKTOR_MAX_R_INNEN_MOD_11_WERT | - | high | unsigned char | - | - | 1.0 | 20.0 | 0.0 | MODUL 11 Maximaler Widerstandsfaktor (1,00...5,00)  entspricht dem Vielfachen des Zellinnenwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt. Unplausibilitätswert = 12,75 |

### RES_0XDFAC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_LADEVORGAENGE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Anzahl ALLER Ladevorgänge. |
| STAT_ANZAHL_VOLLLADUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Anzahl aller VOLL-Ladevorgänge  |

### RES_0XDFAD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MOD_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 01 |
| STAT_SOC_MOD_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 02 |
| STAT_SOC_MOD_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 03 |
| STAT_SOC_MOD_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 04 |
| STAT_SOC_MOD_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 05 |
| STAT_SOC_MOD_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 06 |
| STAT_SOC_MOD_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 07 |
| STAT_SOC_MOD_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 08 |
| STAT_SOC_MOD_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 09 |
| STAT_SOC_MOD_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 10 |
| STAT_SOC_MOD_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 11 |

### RES_0XDFAE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MIN_NENN_MAX_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des maximalen MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. |
| STAT_SOC_MIN_NENN_MIN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des minimalen MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. |

### RES_0XDFC3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZ_U_FESTIGK_TEST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Zählerwertes der durchgeführten Spannungsfestigkeitstests |

### RES_0XDFC5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_SOC_U_RESIDIUUM_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 1 |
| STAT_HIS_SOC_U_RESIDIUUM_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 2 |
| STAT_HIS_SOC_U_RESIDIUUM_3_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 3 |
| STAT_HIS_SOC_U_RESIDIUUM_4_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 4 |
| STAT_HIS_SOC_U_RESIDIUUM_5_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 5 |
| STAT_HIS_SOC_U_RESIDIUUM_6_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 6 |
| STAT_HIS_SOC_U_RESIDIUUM_7_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 7 |
| STAT_HIS_SOC_U_RESIDIUUM_8_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Residiums im SoC Schätzer, bin 8 |
| STAT_HIS_SOC_KORREKTUR_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 1 |
| STAT_HIS_SOC_KORREKTUR_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 2 |
| STAT_HIS_SOC_KORREKTUR_3_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 3 |
| STAT_HIS_SOC_KORREKTUR_4_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 4 |
| STAT_HIS_SOC_KORREKTUR_5_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 5 |
| STAT_HIS_SOC_KORREKTUR_6_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 6 |
| STAT_HIS_SOC_KORREKTUR_7_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm der Korrekturfaktor im SoC Schätzer, bin 7 |
| STAT_HIS_SOC_U_DYN_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Modells der dynamische Spannung, bin 1 |
| STAT_HIS_SOC_U_DYN_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Modells der dynamische Spannung, bin 2 |
| STAT_HIS_SOC_U_DYN_3_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Modells der dynamische Spannung, bin 3 |
| STAT_HIS_SOC_U_DYN_4_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Modells der dynamische Spannung, bin 4 |
| STAT_HIS_SOC_U_DYN_5_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm des Modells der dynamische Spannung, bin 5 |
| STAT_HIS_SOC_FLAG_KORREKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitliche Zähler wie oft der SoC korrigiert wird während entladen |
| STAT_HIS_SOC_ANZAHL_BAT_GUARD_CALL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitliche Zähler wie oft ein BatteryGuard call gesendet wuerde |
| STAT_HIS_SOC_ANZAHL_OCV_REKALIBR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der OCV Rekalibrierungen |

### RES_0XDFC6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RING_SOC_GRUND_REKALIBR_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert mit der Grund der Rekalibrierung, 1. Element |
| STAT_RING_SOC_GRUND_REKALIBR_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert mit der Grund der Rekalibrierung, 2. Element |
| STAT_RING_SOC_GRUND_REKALIBR_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert mit der Grund der Rekalibrierung, 3. Element |
| STAT_RING_SOC_GRUND_REKALIBR_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert mit der Grund der Rekalibrierung, 4. Element |
| STAT_RING_SOC_GRUND_REKALIBR_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert mit der Grund der Rekalibrierung, 5. Element |
| STAT_RING_SOC_U_ZELL_MIN_1_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Kleinste gemessene Spannung bei Rekalibrierung, 1. Element |
| STAT_RING_SOC_U_ZELL_MIN_2_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Kleinste gemessene Spannung bei Rekalibrierung, 2. Element |
| STAT_RING_SOC_U_ZELL_MIN_3_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Kleinste gemessene Spannung bei Rekalibrierung, 3. Element |
| STAT_RING_SOC_U_ZELL_MIN_4_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Kleinste gemessene Spannung bei Rekalibrierung, 4. Element |
| STAT_RING_SOC_U_ZELL_MIN_5_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Kleinste gemessene Spannung bei Rekalibrierung, 5. Element |
| STAT_RING_SOC_U_ZELL_MAX_1_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Grösste gemessene Spannung bei Rekalibrierung, 1. Element |
| STAT_RING_SOC_U_ZELL_MAX_2_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Grösste gemessene Spannung bei Rekalibrierung, 2. Element |
| STAT_RING_SOC_U_ZELL_MAX_3_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Grösste gemessene Spannung bei Rekalibrierung, 3. Element |
| STAT_RING_SOC_U_ZELL_MAX_4_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Grösste gemessene Spannung bei Rekalibrierung, 4. Element |
| STAT_RING_SOC_U_ZELL_MAX_5_WERT | V | high | unsigned char | - | - | 14.0 | 2550.0 | 2.8 | Grösste gemessene Spannung bei Rekalibrierung, 5. Element |
| STAT_RING_SOC_MAX_DELTA_1_WERT | % | high | unsigned char | - | - | 20.0 | 255.0 | -10.0 | Grösste Änderung des SoC bei Rekalibrierung, 1. Element |
| STAT_RING_SOC_MAX_DELTA_2_WERT | % | high | unsigned char | - | - | 20.0 | 255.0 | -10.0 | Grösste Änderung des SoC bei Rekalibrierung, 2. Element |
| STAT_RING_SOC_MAX_DELTA_3_WERT | % | high | unsigned char | - | - | 20.0 | 255.0 | -10.0 | Grösste Änderung des SoC bei Rekalibrierung, 3. Element |
| STAT_RING_SOC_MAX_DELTA_4_WERT | % | high | unsigned char | - | - | 20.0 | 255.0 | -10.0 | Grösste Änderung des SoC bei Rekalibrierung, 4. Element |
| STAT_RING_SOC_MAX_DELTA_5_WERT | % | high | unsigned char | - | - | 20.0 | 255.0 | -10.0 | Grösste Änderung des SoC bei Rekalibrierung, 5. Element |
| STAT_RING_SOC_SOH_C_MIN_1_WERT | % | high | unsigned char | - | - | 50.0 | 255.0 | 60.0 | Kleinste Speicherkapazität bei Rekalibrierung, 1. Element |
| STAT_RING_SOC_SOH_C_MIN_2_WERT | % | high | unsigned char | - | - | 50.0 | 255.0 | 60.0 | Kleinste Speicherkapazität bei Rekalibrierung, 2. Element |
| STAT_RING_SOC_SOH_C_MIN_3_WERT | % | high | unsigned char | - | - | 50.0 | 255.0 | 60.0 | Kleinste Speicherkapazität bei Rekalibrierung, 3. Element |
| STAT_RING_SOC_SOH_C_MIN_4_WERT | % | high | unsigned char | - | - | 50.0 | 255.0 | 60.0 | Kleinste Speicherkapazität bei Rekalibrierung, 4. Element |
| STAT_RING_SOC_SOH_C_MIN_5_WERT | % | high | unsigned char | - | - | 50.0 | 255.0 | 60.0 | Kleinste Speicherkapazität bei Rekalibrierung, 5. Element |
| STAT_RING_KUM_LADUNG_ABS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung des absoluten Stroms zwischen 2 Rekalibrierungen, 1. Element in [Amin] |
| STAT_RING_KUM_LADUNG_ABS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung des absoluten Stroms zwischen 2 Rekalibrierungen, 2. Element in [Amin] |
| STAT_RING_KUM_LADUNG_ABS_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung des absoluten Stroms zwischen 2 Rekalibrierungen, 3. Element in [Amin] |
| STAT_RING_KUM_LADUNG_ABS_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung des absoluten Stroms zwischen 2 Rekalibrierungen, 4. Element in [Amin] |
| STAT_RING_KUM_LADUNG_ABS_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung des absoluten Stroms zwischen 2 Rekalibrierungen, 5. Element in [Amin] |
| STAT_RING_SOC_RELAT_ZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit seit Produktionsdatum bei der Rekalibrierung, 1. Element |
| STAT_RING_SOC_RELAT_ZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit seit Produktionsdatum bei der Rekalibrierung, 2. Element |
| STAT_RING_SOC_RELAT_ZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit seit Produktionsdatum bei der Rekalibrierung, 3. Element |
| STAT_RING_SOC_RELAT_ZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit seit Produktionsdatum bei der Rekalibrierung, 4. Element |
| STAT_RING_SOC_RELAT_ZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit seit Produktionsdatum bei der Rekalibrierung, 5. Element |
| STAT_RING_SOC_TEMP_MIN_1_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur bei Rekalibrierung, 1. Element |
| STAT_RING_SOC_TEMP_MIN_2_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur bei Rekalibrierung, 2. Element |
| STAT_RING_SOC_TEMP_MIN_3_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur bei Rekalibrierung, 3. Element |
| STAT_RING_SOC_TEMP_MIN_4_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur bei Rekalibrierung, 4. Element |
| STAT_RING_SOC_TEMP_MIN_5_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur bei Rekalibrierung, 5. Element |
| STAT_RING_SOC_KUM_LADUNG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung zwischen 2 Rekalibrierungen, 1. Element // Umrechnung nötig [0..255] entspricht [-25,4..25,4]Ah mit Formel: [WERT x 0,2Ah - 25,4Ah]  |
| STAT_RING_SOC_KUM_LADUNG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung zwischen 2 Rekalibrierungen, 2. Element // Umrechnung nötig [0..255] entspricht [-25,4..25,4]Ah mit Formel: [WERT x 0,2Ah - 25,4Ah] |
| STAT_RING_SOC_KUM_LADUNG_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung zwischen 2 Rekalibrierungen, 3. Element // Umrechnung nötig [0..255] entspricht [-25,4..25,4]Ah mit Formel: [WERT x 0,2Ah - 25,4Ah] |
| STAT_RING_SOC_KUM_LADUNG_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung zwischen 2 Rekalibrierungen, 4. Element // Umrechnung nötig [0..255] entspricht [-25,4..25,4]Ah mit Formel: [WERT x 0,2Ah - 25,4Ah] |
| STAT_RING_SOC_KUM_LADUNG_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kummulierte Ladung zwischen 2 Rekalibrierungen, 5. Element // Umrechnung nötig [0..255] entspricht [-25,4..25,4]Ah mit Formel: [WERT x 0,2Ah - 25,4Ah] |

### RES_0XDFC7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RING_SOC_ZEIT_HV_OFF_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit die die SME eingeschlafen war, 1. Element |
| STAT_RING_SOC_ZEIT_HV_OFF_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit die die SME eingeschlafen war, 2. Element |
| STAT_RING_SOC_ZEIT_HV_OFF_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit die die SME eingeschlafen war, 3. Element |
| STAT_RING_SOC_AKT_MIN_1_WERT | % | high | unsigned char | - | - | 120.0 | 255.0 | 0.0 | kleinster aktueller SoC beim Aufwachen der SME, 1. Element |
| STAT_RING_SOC_AKT_MIN_2_WERT | % | high | unsigned char | - | - | 120.0 | 255.0 | 0.0 | kleinster aktueller SoC beim Aufwachen der SME, 2. Element |
| STAT_RING_SOC_AKT_MIN_3_WERT | % | high | unsigned char | - | - | 120.0 | 255.0 | 0.0 | kleinster aktueller SoC beim Aufwachen der SME, 3. Element |
| STAT_RING_START_TEMP_MIN_1_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur beim Aufwachen der SME, 1. Element |
| STAT_RING_START_TEMP_MIN_2_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur beim Aufwachen der SME, 2. Element |
| STAT_RING_START_TEMP_MIN_3_WERT | K | high | unsigned char | - | - | 100.0 | 255.0 | -40.0 | Speichertemperatur beim Aufwachen der SME, 3. Element |

### RES_0XDFC8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEAN_SOH_R_MOD_01_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 01 |
| STAT_MEAN_SOH_R_MOD_02_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 02 |
| STAT_MEAN_SOH_R_MOD_03_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 03 |
| STAT_MEAN_SOH_R_MOD_04_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 04 |
| STAT_MEAN_SOH_R_MOD_05_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 05 |
| STAT_MEAN_SOH_R_MOD_06_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 06 |
| STAT_MEAN_SOH_R_MOD_07_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 07 |
| STAT_MEAN_SOH_R_MOD_08_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 08 |
| STAT_MEAN_SOH_R_MOD_09_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 09 |
| STAT_MEAN_SOH_R_MOD_10_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 10 |
| STAT_MEAN_SOH_R_MOD_11_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes Modul 11 |

### RES_0XDFC9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_LD_LIM_WERT_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | projektspez. Ladestromschwelle, ab der die Intergration läuft |
| STAT_LD_INT_LIM_START_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | projektspez. untere Integralschwelle, ab der der HVS-Eigenschutz beginnt zu wirken |
| STAT_LD_INT_LIM_END_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | projektspez. obere Integralschwelle, ab der der HVS-Eigenschutz maximal wirkt |
| STAT_LPA_HVS_LD_INT_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller HVS-Eigenschutz-Stromintegralwert |

### RES_0XDFCA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_UCELMAX_PER_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung im ersten Periodic nach dem letzten Laden |
| STAT_HIS_UCELMIN_PER_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung im ersten Periodic nach dem letzten Laden |
| STAT_IND_UCELMAX_PER_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung im ersten Periodic nach dem letzten Laden |
| STAT_HIS_UCELMAX_EOC_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Ladeende (letztes Laden) |
| STAT_HIS_UCELMIN_EOC_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Ladeende (letztes Laden) |
| STAT_IND_UCELMAX_EOC_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung bei Ladeende (letztes Laden) |
| STAT_HIS_UCELMAX_PER_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung im zweiten Periodic nach vorletztem Laden |
| STAT_HIS_UCELMIN_PER_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung im zweiten Periodic nach vorletztem Laden |
| STAT_IND_UCELMAX_PER_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung im zweiten Periodic nach vorletztem Laden |
| STAT_HIS_UCELMAX_EOC_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Ladeende (vorletztes Laden) |
| STAT_HIS_UCELMIN_EOC_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Ladeende (vorletztes Laden) |
| STAT_IND_UCELMAX_EOC_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung bei Ladeende (vorletztes Laden) |
| STAT_HIS_UCELMAX_PER_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung in dritter Periodic nach drittletztem Laden |
| STAT_HIS_UCELMIN_PER_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung in dritter Periodic nach drittletztem Laden |
| STAT_IND_UCELMAX_PER_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung in dritter Periodic nach drittletztem Laden |
| STAT_HIS_UCELMAX_EOC_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Ladeende (drittletztes Laden) |
| STAT_HIS_UCELMIN_EOC_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Ladeende (drittletztes Laden) |
| STAT_IND_UCELMAX_EOC_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung bei Ladeende (drittletztes Laden) |
| STAT_HIS_UCELMAX_PER_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung in vierter Periodic nach viertletztem Laden |
| STAT_HIS_UCELMIN_PER_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung in vierter Periodic nach viertletztem Laden |
| STAT_IND_UCELMAX_PER_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung in vierter Periodic nach viertletztem Laden |
| STAT_HIS_UCELMAX_EOC_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Ladeende (viertletztes Laden) |
| STAT_HIS_UCELMIN_EOC_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Ladeende (viertletztes Laden) |
| STAT_IND_UCELMAX_EOC_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung bei Ladeende (viertletztes Laden) |
| STAT_HIS_UCELMAX_PER_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung in fünfter Periodic nach fünftletztem Laden |
| STAT_HIS_UCELMIN_PER_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung in fünfter Periodic nach fünftletztem Laden |
| STAT_IND_UCELMAX_PER_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung in fünfter Periodic nach fünftletztem Laden |
| STAT_HIS_UCELMAX_EOC_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Ladeende (fünftletztes Laden) |
| STAT_HIS_UCELMIN_EOC_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Ladeende (fünftletztes Laden) |
| STAT_IND_UCELMAX_EOC_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der höchsten Spannung bei Ladeende (fünftletztes Laden) |

### RES_0XDFCB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_UCELMAX_SYM_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Symmetriestart |
| STAT_HIS_UCELMIN_SYM_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Symmetriestart |
| STAT_HIS_SOC_MAX_NENN_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Max_Nenn bei Symmetriestart |
| STAT_HIS_SOC_MIN_NENN_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Min_Nenn bei Symmetriestart |
| STAT_HIS_UCELMAX_SYM_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Symmetriestart |
| STAT_HIS_UCELMIN_SYM_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Symmetriestart |
| STAT_HIS_SOC_MAX_NENN_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Max_Nenn bei Symmetriestart |
| STAT_HIS_SOC_MIN_NENN_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Min_Nenn bei Symmetriestart |
| STAT_HIS_UCELMAX_SYM_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Symmetriestart |
| STAT_HIS_UCELMIN_SYM_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Symmetriestart |
| STAT_HIS_SOC_MAX_NENN_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Max_Nenn bei Symmetriestart |
| STAT_HIS_SOC_MIN_NENN_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Min_Nenn bei Symmetriestart |
| STAT_HIS_UCELMAX_SYM_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Symmetriestart |
| STAT_HIS_UCELMIN_SYM_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Symmetriestart |
| STAT_HIS_SOC_MAX_NENN_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Max_Nenn bei Symmetriestart |
| STAT_HIS_SOC_MIN_NENN_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Min_Nenn bei Symmetriestart |
| STAT_HIS_UCELMAX_SYM_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Zellspannung bei Symmetriestart |
| STAT_HIS_UCELMIN_SYM_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale Zellspannung bei Symmetriestart |
| STAT_HIS_SOC_MAX_NENN_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Max_Nenn bei Symmetriestart |
| STAT_HIS_SOC_MIN_NENN_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | SoC_Min_Nenn bei Symmetriestart |

### RES_0XDFE2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_LAST_BALANCING_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SoC bei dem zuletzt erfolgreich Symmetriert wurde |
| STAT_TIME_LAST_BALANCING_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolute Zeit bei der zuletzt erfolgreich symmetriert wurde |
| STAT_DIFFERENCE_VOLTAGE_LAST_BALANCING_WERT | mV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannungsdifferenz beim letzten erfolgreichen Symmetriervorgang |
| STAT_LAST_PARKING_SOC_1_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Letzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_2_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Zweitletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_3_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Drittletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_4_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Viertletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_5_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Fünftletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |

### RES_0XE540_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COD_SOC_HUB_REQ_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Codierparamter: Faktor zur Berechnung der angeforderten, nutzbaren Ladungsmenge (als SOC Hub) |
| STAT_COD_SOC_MIN_LOW_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Codierparamter: Minimalwert fuer die untere Ladezustands (SOC)-Grenze |
| STAT_COD_SOC_MIN_LOW_COLD_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Codierparamter: Qualifier fuer Minimalwert fuer die untere Ladezustands (SOC)-Grenze (Warm) |
| STAT_COD_SOC_MIN_INIT_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Codierparamter: Initialwert fuer die untere Ladezustands (SOC)-Grenze |
| STAT_COD_CELL_TYPE_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparamter: Zelltyp |
| STAT_COD_CSC_TYPE_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparamter: CSC-Typ |
| STAT_COD_VEHICLE_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparamter: Fahrzeugtyp |
| STAT_COD_EES_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparamter: Speicher-Derivat |
| STAT_COD_COUNTRY_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparamter: Länder-Code |

### RES_0XE5E8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STAT_SBOX_TEMP_1_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (1,1) |
| STAT_SBOX_TEMP_1_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (1,2) |
| STAT_SBOX_TEMP_1_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (1,3) |
| STAT_SBOX_TEMP_2_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (2,1) |
| STAT_SBOX_TEMP_2_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (2,2) |
| STAT_SBOX_TEMP_2_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (2,3) |
| STAT_SBOX_TEMP_3_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (3,1) |
| STAT_SBOX_TEMP_3_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (3,2) |
| STAT_SBOX_TEMP_3_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | S-Box Temperaturhistogramm, Bin (3,3) |

### RES_0XE5E9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_C_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 01 |
| STAT_SOH_C_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 02 |
| STAT_SOH_C_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 03 |
| STAT_SOH_C_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 04 |
| STAT_SOH_C_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 05 |
| STAT_SOH_C_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 06 |
| STAT_SOH_C_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 07 |
| STAT_SOH_C_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 08 |
| STAT_SOH_C_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 09 |
| STAT_SOH_C_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 10 |
| STAT_SOH_C_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 11 |
| STAT_SOH_C_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 12 |
| STAT_SOH_C_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 13 |
| STAT_SOH_C_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 14 |
| STAT_SOH_C_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 15 |
| STAT_SOH_C_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 16 |
| STAT_SOH_C_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 17 |
| STAT_SOH_C_18_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 18 |
| STAT_SOH_C_19_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 19 |
| STAT_SOH_C_20_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 20 |
| STAT_SOH_C_21_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 21 |
| STAT_SOH_C_22_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 22 |
| STAT_SOH_C_23_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 23 |
| STAT_SOH_C_24_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 24 |
| STAT_SOH_C_25_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 25 |
| STAT_SOH_C_26_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 26 |
| STAT_SOH_C_27_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 27 |
| STAT_SOH_C_28_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 28 |
| STAT_SOH_C_29_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 29 |
| STAT_SOH_C_30_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 30 |
| STAT_SOH_C_31_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 31 |
| STAT_SOH_C_32_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 32 |
| STAT_SOH_C_33_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 33 |
| STAT_SOH_C_34_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 34 |
| STAT_SOH_C_35_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 35 |
| STAT_SOH_C_36_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 36 |
| STAT_SOH_C_37_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 37 |
| STAT_SOH_C_38_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 38 |
| STAT_SOH_C_39_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 39 |
| STAT_SOH_C_40_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 40 |
| STAT_SOH_C_41_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 41 |
| STAT_SOH_C_42_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 42 |
| STAT_SOH_C_43_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 43 |
| STAT_SOH_C_44_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 44 |
| STAT_SOH_C_45_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 45 |
| STAT_SOH_C_46_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 46 |
| STAT_SOH_C_47_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 47 |
| STAT_SOH_C_48_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 48 |
| STAT_SOH_C_49_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 49 |
| STAT_SOH_C_50_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 50 |
| STAT_SOH_C_51_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 51 |
| STAT_SOH_C_52_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 52 |
| STAT_SOH_C_53_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 53 |
| STAT_SOH_C_54_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 54 |
| STAT_SOH_C_55_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 55 |
| STAT_SOH_C_56_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 56 |
| STAT_SOH_C_57_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 57 |
| STAT_SOH_C_58_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 58 |
| STAT_SOH_C_59_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 59 |
| STAT_SOH_C_60_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 60 |
| STAT_SOH_C_61_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 61 |
| STAT_SOH_C_62_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 62 |
| STAT_SOH_C_63_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 63 |
| STAT_SOH_C_64_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 64 |
| STAT_SOH_C_65_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 65 |
| STAT_SOH_C_66_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 66 |
| STAT_SOH_C_67_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 67 |
| STAT_SOH_C_68_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 68 |
| STAT_SOH_C_69_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 69 |
| STAT_SOH_C_70_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 70 |
| STAT_SOH_C_71_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 71 |
| STAT_SOH_C_72_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 72 |
| STAT_SOH_C_73_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 73 |
| STAT_SOH_C_74_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 74 |
| STAT_SOH_C_75_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 75 |
| STAT_SOH_C_76_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 76 |
| STAT_SOH_C_77_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 77 |
| STAT_SOH_C_78_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 78 |
| STAT_SOH_C_79_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 79 |
| STAT_SOH_C_80_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 80 |
| STAT_SOH_C_81_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 81 |
| STAT_SOH_C_82_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 82 |
| STAT_SOH_C_83_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 83 |
| STAT_SOH_C_84_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 84 |
| STAT_SOH_C_85_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 85 |
| STAT_SOH_C_86_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 86 |
| STAT_SOH_C_87_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 87 |
| STAT_SOH_C_88_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 88 |
| STAT_SOH_C_89_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 89 |
| STAT_SOH_C_90_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 90 |
| STAT_SOH_C_91_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 91 |
| STAT_SOH_C_92_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 92 |
| STAT_SOH_C_93_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 93 |
| STAT_SOH_C_94_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 94 |
| STAT_SOH_C_95_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 95 |
| STAT_SOH_C_96_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOH_C in Zelle 96 |
| STAT_SOC_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 01 |
| STAT_SOC_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 02 |
| STAT_SOC_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 03 |
| STAT_SOC_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 04 |
| STAT_SOC_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 05 |
| STAT_SOC_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 06 |
| STAT_SOC_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 07 |
| STAT_SOC_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 08 |
| STAT_SOC_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 09 |
| STAT_SOC_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 10 |
| STAT_SOC_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 11 |
| STAT_SOC_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 12 |
| STAT_SOC_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 13 |
| STAT_SOC_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 14 |
| STAT_SOC_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 15 |
| STAT_SOC_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 16 |
| STAT_SOC_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 17 |
| STAT_SOC_18_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 18 |
| STAT_SOC_19_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 19 |
| STAT_SOC_20_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 20 |
| STAT_SOC_21_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 21 |
| STAT_SOC_22_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 22 |
| STAT_SOC_23_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 23 |
| STAT_SOC_24_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 24 |
| STAT_SOC_25_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 25 |
| STAT_SOC_26_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 26 |
| STAT_SOC_27_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 27 |
| STAT_SOC_28_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 28 |
| STAT_SOC_29_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 29 |
| STAT_SOC_30_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 30 |
| STAT_SOC_31_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 31 |
| STAT_SOC_32_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 32 |
| STAT_SOC_33_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 33 |
| STAT_SOC_34_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 34 |
| STAT_SOC_35_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 35 |
| STAT_SOC_36_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 36 |
| STAT_SOC_37_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 37 |
| STAT_SOC_38_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 38 |
| STAT_SOC_39_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 39 |
| STAT_SOC_40_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 40 |
| STAT_SOC_41_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 41 |
| STAT_SOC_42_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 42 |
| STAT_SOC_43_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 43 |
| STAT_SOC_44_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 44 |
| STAT_SOC_45_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 45 |
| STAT_SOC_46_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 46 |
| STAT_SOC_47_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 47 |
| STAT_SOC_48_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 48 |
| STAT_SOC_49_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 49 |
| STAT_SOC_50_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 50 |
| STAT_SOC_51_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 51 |
| STAT_SOC_52_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 52 |
| STAT_SOC_53_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 53 |
| STAT_SOC_54_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 54 |
| STAT_SOC_55_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 55 |
| STAT_SOC_56_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 56 |
| STAT_SOC_57_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 57 |
| STAT_SOC_58_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 58 |
| STAT_SOC_59_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 59 |
| STAT_SOC_60_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 60 |
| STAT_SOC_61_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 61 |
| STAT_SOC_62_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 62 |
| STAT_SOC_63_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 63 |
| STAT_SOC_64_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 64 |
| STAT_SOC_65_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 65 |
| STAT_SOC_66_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 66 |
| STAT_SOC_67_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 67 |
| STAT_SOC_68_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 68 |
| STAT_SOC_69_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 69 |
| STAT_SOC_70_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 70 |
| STAT_SOC_71_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 71 |
| STAT_SOC_72_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 72 |
| STAT_SOC_73_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 73 |
| STAT_SOC_74_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 74 |
| STAT_SOC_75_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 75 |
| STAT_SOC_76_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 76 |
| STAT_SOC_77_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 77 |
| STAT_SOC_78_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 78 |
| STAT_SOC_79_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 79 |
| STAT_SOC_80_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 80 |
| STAT_SOC_81_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 81 |
| STAT_SOC_82_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 82 |
| STAT_SOC_83_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 83 |
| STAT_SOC_84_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 84 |
| STAT_SOC_85_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 85 |
| STAT_SOC_86_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 86 |
| STAT_SOC_87_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 87 |
| STAT_SOC_88_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 88 |
| STAT_SOC_89_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 89 |
| STAT_SOC_90_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 90 |
| STAT_SOC_91_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 91 |
| STAT_SOC_92_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 92 |
| STAT_SOC_93_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 93 |
| STAT_SOC_94_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 94 |
| STAT_SOC_95_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 95 |
| STAT_SOC_96_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller SOC in Zelle 96 |

### RES_0XE5EA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OCV_REACHED | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Ruhespannung (OCV) nicht erreicht 0x01: Ruhespannung (OCV) erreicht |
| STAT_U_CELL_INIT_01_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 1 |
| STAT_U_CELL_INIT_02_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 2 |
| STAT_U_CELL_INIT_03_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 3 |
| STAT_U_CELL_INIT_04_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 4 |
| STAT_U_CELL_INIT_05_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 5 |
| STAT_U_CELL_INIT_06_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 6 |
| STAT_U_CELL_INIT_07_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 7 |
| STAT_U_CELL_INIT_08_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 8 |
| STAT_U_CELL_INIT_09_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 9 |
| STAT_U_CELL_INIT_10_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 10 |
| STAT_U_CELL_INIT_11_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 11 |
| STAT_U_CELL_INIT_12_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 12 |
| STAT_U_CELL_INIT_13_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 13 |
| STAT_U_CELL_INIT_14_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 14 |
| STAT_U_CELL_INIT_15_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 15 |
| STAT_U_CELL_INIT_16_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 16 |
| STAT_U_CELL_INIT_17_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 17 |
| STAT_U_CELL_INIT_18_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 18 |
| STAT_U_CELL_INIT_19_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 19 |
| STAT_U_CELL_INIT_20_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 20 |
| STAT_U_CELL_INIT_21_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 21 |
| STAT_U_CELL_INIT_22_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 22 |
| STAT_U_CELL_INIT_23_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 23 |
| STAT_U_CELL_INIT_24_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 24 |
| STAT_U_CELL_INIT_25_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 25 |
| STAT_U_CELL_INIT_26_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 26 |
| STAT_U_CELL_INIT_27_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 27 |
| STAT_U_CELL_INIT_28_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 28 |
| STAT_U_CELL_INIT_29_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 29 |
| STAT_U_CELL_INIT_30_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 30 |
| STAT_U_CELL_INIT_31_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 31 |
| STAT_U_CELL_INIT_32_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 32 |
| STAT_U_CELL_INIT_33_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 33 |
| STAT_U_CELL_INIT_34_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 34 |
| STAT_U_CELL_INIT_35_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 35 |
| STAT_U_CELL_INIT_36_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 36 |
| STAT_U_CELL_INIT_37_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 37 |
| STAT_U_CELL_INIT_38_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 38 |
| STAT_U_CELL_INIT_39_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 39 |
| STAT_U_CELL_INIT_40_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 40 |
| STAT_U_CELL_INIT_41_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 41 |
| STAT_U_CELL_INIT_42_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 42 |
| STAT_U_CELL_INIT_43_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 43 |
| STAT_U_CELL_INIT_44_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 44 |
| STAT_U_CELL_INIT_45_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 45 |
| STAT_U_CELL_INIT_46_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 46 |
| STAT_U_CELL_INIT_47_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 47 |
| STAT_U_CELL_INIT_48_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 48 |
| STAT_U_CELL_INIT_49_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 49 |
| STAT_U_CELL_INIT_50_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 50 |
| STAT_U_CELL_INIT_51_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 51 |
| STAT_U_CELL_INIT_52_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 52 |
| STAT_U_CELL_INIT_53_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 53 |
| STAT_U_CELL_INIT_54_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 54 |
| STAT_U_CELL_INIT_55_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 55 |
| STAT_U_CELL_INIT_56_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 56 |
| STAT_U_CELL_INIT_57_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 57 |
| STAT_U_CELL_INIT_58_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 58 |
| STAT_U_CELL_INIT_59_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 59 |
| STAT_U_CELL_INIT_60_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 60 |
| STAT_U_CELL_INIT_61_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 61 |
| STAT_U_CELL_INIT_62_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 62 |
| STAT_U_CELL_INIT_63_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 63 |
| STAT_U_CELL_INIT_64_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 64 |
| STAT_U_CELL_INIT_65_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 65 |
| STAT_U_CELL_INIT_66_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 66 |
| STAT_U_CELL_INIT_67_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 67 |
| STAT_U_CELL_INIT_68_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 68 |
| STAT_U_CELL_INIT_69_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 69 |
| STAT_U_CELL_INIT_70_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 70 |
| STAT_U_CELL_INIT_71_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 71 |
| STAT_U_CELL_INIT_72_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 72 |
| STAT_U_CELL_INIT_73_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 73 |
| STAT_U_CELL_INIT_74_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 74 |
| STAT_U_CELL_INIT_75_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 75 |
| STAT_U_CELL_INIT_76_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 76 |
| STAT_U_CELL_INIT_77_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 77 |
| STAT_U_CELL_INIT_78_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 78 |
| STAT_U_CELL_INIT_79_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 79 |
| STAT_U_CELL_INIT_80_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 80 |
| STAT_U_CELL_INIT_81_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 81 |
| STAT_U_CELL_INIT_82_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 82 |
| STAT_U_CELL_INIT_83_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 83 |
| STAT_U_CELL_INIT_84_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 84 |
| STAT_U_CELL_INIT_85_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 85 |
| STAT_U_CELL_INIT_86_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 86 |
| STAT_U_CELL_INIT_87_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 87 |
| STAT_U_CELL_INIT_88_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 88 |
| STAT_U_CELL_INIT_89_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 89 |
| STAT_U_CELL_INIT_90_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 90 |
| STAT_U_CELL_INIT_91_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 91 |
| STAT_U_CELL_INIT_92_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 92 |
| STAT_U_CELL_INIT_93_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 93 |
| STAT_U_CELL_INIT_94_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 94 |
| STAT_U_CELL_INIT_95_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 95 |
| STAT_U_CELL_INIT_96_WERT | mV | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Zellspannung in Zelle 96 |

### RES_0XE5EB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_A_TEMP_SLEEP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Außentemperatur beim Einschlafen |
| STAT_TEMP_SLEEP_MIN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 1 |
| STAT_TEMP_SLEEP_MIN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 2 |
| STAT_TEMP_SLEEP_MIN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 3 |
| STAT_TEMP_SLEEP_MIN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 4 |
| STAT_TEMP_SLEEP_MIN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 5 |
| STAT_TEMP_SLEEP_MIN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 6 |
| STAT_TEMP_SLEEP_MIN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 7 |
| STAT_TEMP_SLEEP_MIN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 8 |
| STAT_TEMP_SLEEP_MIN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 9 |
| STAT_TEMP_SLEEP_MIN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 10 |
| STAT_TEMP_SLEEP_MIN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 11 |
| STAT_TEMP_SLEEP_MIN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur beim Einschlafen in Modul 12 |
| STAT_TEMP_SLEEP_MEAN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 1 |
| STAT_TEMP_SLEEP_MEAN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 2 |
| STAT_TEMP_SLEEP_MEAN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 3 |
| STAT_TEMP_SLEEP_MEAN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 4 |
| STAT_TEMP_SLEEP_MEAN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 5 |
| STAT_TEMP_SLEEP_MEAN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 6 |
| STAT_TEMP_SLEEP_MEAN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 7 |
| STAT_TEMP_SLEEP_MEAN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 8 |
| STAT_TEMP_SLEEP_MEAN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 9 |
| STAT_TEMP_SLEEP_MEAN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 10 |
| STAT_TEMP_SLEEP_MEAN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 11 |
| STAT_TEMP_SLEEP_MEAN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur beim Einschlafen in Modul 12 |
| STAT_TEMP_SLEEP_MAX_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 1 |
| STAT_TEMP_SLEEP_MAX_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 2 |
| STAT_TEMP_SLEEP_MAX_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 3 |
| STAT_TEMP_SLEEP_MAX_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 4 |
| STAT_TEMP_SLEEP_MAX_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 5 |
| STAT_TEMP_SLEEP_MAX_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 6 |
| STAT_TEMP_SLEEP_MAX_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 7 |
| STAT_TEMP_SLEEP_MAX_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 8 |
| STAT_TEMP_SLEEP_MAX_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 9 |
| STAT_TEMP_SLEEP_MAX_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 10 |
| STAT_TEMP_SLEEP_MAX_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 11 |
| STAT_TEMP_SLEEP_MAX_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur beim Einschlafen in Modul 12 |
| STAT_TEMP_PERIODIC_1_MIN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 1 |
| STAT_TEMP_PERIODIC_1_MIN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 2 |
| STAT_TEMP_PERIODIC_1_MIN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 3 |
| STAT_TEMP_PERIODIC_1_MIN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 4 |
| STAT_TEMP_PERIODIC_1_MIN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 5 |
| STAT_TEMP_PERIODIC_1_MIN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 6 |
| STAT_TEMP_PERIODIC_1_MIN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 7 |
| STAT_TEMP_PERIODIC_1_MIN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 8 |
| STAT_TEMP_PERIODIC_1_MIN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 9 |
| STAT_TEMP_PERIODIC_1_MIN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 10 |
| STAT_TEMP_PERIODIC_1_MIN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 11 |
| STAT_TEMP_PERIODIC_1_MIN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 1 in Modul 12 |
| STAT_TEMP_PERIODIC_1_MEAN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 1 |
| STAT_TEMP_PERIODIC_1_MEAN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 2 |
| STAT_TEMP_PERIODIC_1_MEAN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 3 |
| STAT_TEMP_PERIODIC_1_MEAN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 4 |
| STAT_TEMP_PERIODIC_1_MEAN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 5 |
| STAT_TEMP_PERIODIC_1_MEAN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 6 |
| STAT_TEMP_PERIODIC_1_MEAN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 7 |
| STAT_TEMP_PERIODIC_1_MEAN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 8 |
| STAT_TEMP_PERIODIC_1_MEAN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 9 |
| STAT_TEMP_PERIODIC_1_MEAN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 10 |
| STAT_TEMP_PERIODIC_1_MEAN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 11 |
| STAT_TEMP_PERIODIC_1_MEAN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 1 in Modul 12 |
| STAT_TEMP_PERIODIC_1_MAX_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 1 |
| STAT_TEMP_PERIODIC_1_MAX_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 2 |
| STAT_TEMP_PERIODIC_1_MAX_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 3 |
| STAT_TEMP_PERIODIC_1_MAX_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 4 |
| STAT_TEMP_PERIODIC_1_MAX_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 5 |
| STAT_TEMP_PERIODIC_1_MAX_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 6 |
| STAT_TEMP_PERIODIC_1_MAX_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 7 |
| STAT_TEMP_PERIODIC_1_MAX_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 8 |
| STAT_TEMP_PERIODIC_1_MAX_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 9 |
| STAT_TEMP_PERIODIC_1_MAX_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 10 |
| STAT_TEMP_PERIODIC_1_MAX_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 11 |
| STAT_TEMP_PERIODIC_1_MAX_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 1 in Modul 12 |
| STAT_TEMP_PERIODIC_2_MIN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 1 |
| STAT_TEMP_PERIODIC_2_MIN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 2 |
| STAT_TEMP_PERIODIC_2_MIN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 3 |
| STAT_TEMP_PERIODIC_2_MIN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 4 |
| STAT_TEMP_PERIODIC_2_MIN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 5 |
| STAT_TEMP_PERIODIC_2_MIN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 6 |
| STAT_TEMP_PERIODIC_2_MIN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 7 |
| STAT_TEMP_PERIODIC_2_MIN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 8 |
| STAT_TEMP_PERIODIC_2_MIN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 9 |
| STAT_TEMP_PERIODIC_2_MIN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 10 |
| STAT_TEMP_PERIODIC_2_MIN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 11 |
| STAT_TEMP_PERIODIC_2_MIN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 2 in Modul 12 |
| STAT_TEMP_PERIODIC_2_MEAN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 1 |
| STAT_TEMP_PERIODIC_2_MEAN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 2 |
| STAT_TEMP_PERIODIC_2_MEAN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 3 |
| STAT_TEMP_PERIODIC_2_MEAN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 4 |
| STAT_TEMP_PERIODIC_2_MEAN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 5 |
| STAT_TEMP_PERIODIC_2_MEAN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 6 |
| STAT_TEMP_PERIODIC_2_MEAN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 7 |
| STAT_TEMP_PERIODIC_2_MEAN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 8 |
| STAT_TEMP_PERIODIC_2_MEAN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 9 |
| STAT_TEMP_PERIODIC_2_MEAN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 10 |
| STAT_TEMP_PERIODIC_2_MEAN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 11 |
| STAT_TEMP_PERIODIC_2_MEAN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 2 in Modul 12 |
| STAT_TEMP_PERIODIC_2_MAX_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 1 |
| STAT_TEMP_PERIODIC_2_MAX_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 2 |
| STAT_TEMP_PERIODIC_2_MAX_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 3 |
| STAT_TEMP_PERIODIC_2_MAX_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 4 |
| STAT_TEMP_PERIODIC_2_MAX_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 5 |
| STAT_TEMP_PERIODIC_2_MAX_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 6 |
| STAT_TEMP_PERIODIC_2_MAX_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 7 |
| STAT_TEMP_PERIODIC_2_MAX_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 8 |
| STAT_TEMP_PERIODIC_2_MAX_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 9 |
| STAT_TEMP_PERIODIC_2_MAX_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 10 |
| STAT_TEMP_PERIODIC_2_MAX_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 11 |
| STAT_TEMP_PERIODIC_2_MAX_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 2 in Modul 12 |
| STAT_TEMP_PERIODIC_3_MIN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 1 |
| STAT_TEMP_PERIODIC_3_MIN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 2 |
| STAT_TEMP_PERIODIC_3_MIN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 3 |
| STAT_TEMP_PERIODIC_3_MIN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 4 |
| STAT_TEMP_PERIODIC_3_MIN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 5 |
| STAT_TEMP_PERIODIC_3_MIN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 6 |
| STAT_TEMP_PERIODIC_3_MIN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 7 |
| STAT_TEMP_PERIODIC_3_MIN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 8 |
| STAT_TEMP_PERIODIC_3_MIN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 9 |
| STAT_TEMP_PERIODIC_3_MIN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 10 |
| STAT_TEMP_PERIODIC_3_MIN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 11 |
| STAT_TEMP_PERIODIC_3_MIN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Minimale Temperatur in Periodic 3 in Modul 12 |
| STAT_TEMP_PERIODIC_3_MEAN_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 1 |
| STAT_TEMP_PERIODIC_3_MEAN_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 2 |
| STAT_TEMP_PERIODIC_3_MEAN_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 3 |
| STAT_TEMP_PERIODIC_3_MEAN_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 4 |
| STAT_TEMP_PERIODIC_3_MEAN_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 5 |
| STAT_TEMP_PERIODIC_3_MEAN_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 6 |
| STAT_TEMP_PERIODIC_3_MEAN_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 7 |
| STAT_TEMP_PERIODIC_3_MEAN_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 8 |
| STAT_TEMP_PERIODIC_3_MEAN_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 9 |
| STAT_TEMP_PERIODIC_3_MEAN_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 10 |
| STAT_TEMP_PERIODIC_3_MEAN_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 11 |
| STAT_TEMP_PERIODIC_3_MEAN_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur in Periodic 3 in Modul 12 |
| STAT_TEMP_PERIODIC_3_MAX_01_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 1 |
| STAT_TEMP_PERIODIC_3_MAX_02_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 2 |
| STAT_TEMP_PERIODIC_3_MAX_03_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 3 |
| STAT_TEMP_PERIODIC_3_MAX_04_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 4 |
| STAT_TEMP_PERIODIC_3_MAX_05_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 5 |
| STAT_TEMP_PERIODIC_3_MAX_06_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 6 |
| STAT_TEMP_PERIODIC_3_MAX_07_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 7 |
| STAT_TEMP_PERIODIC_3_MAX_08_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 8 |
| STAT_TEMP_PERIODIC_3_MAX_09_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 9 |
| STAT_TEMP_PERIODIC_3_MAX_10_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 10 |
| STAT_TEMP_PERIODIC_3_MAX_11_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 11 |
| STAT_TEMP_PERIODIC_3_MAX_12_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur in Periodic 3 in Modul 12 |
| STAT_TIME_AUFWACHEN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel vom letzten Aufwachen der SME |
| STAT_TIME_EINSCHLAFEN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel vom letzten Einschlafen der SME |
| STAT_LADUNGSZAEHLER_LADEN_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ladungszähler Laden |
| STAT_LADUNGSZAEHLER_ENTLADEN_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ladungszähler Entladen |

### RES_0XE5EE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPI_REL_TEMP__WERT | % | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Relative Abweichung des berechneten Temperaturgradienten vom Schwellwert |
| STAT_CPI_TEMP_GRAD_WERT | - | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | Berechneter Temperaturgradient der CPI-Diagnose (Einheit K/min) |
| STAT_CPI_E_LOSS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Berechnete Verlustenergie der CPI-Diagnose (Einheit Ws/min) |
| STAT_CPI_DIAGNOSE | 0-n | high | unsigned char | - | TAB_CPI_DIAGNOSE_STATUS | - | - | - | Ergebnis CPI-Diagnose |
| STAT_CPI_SPEICHER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Speicherhälfte indem die CPI-Diagnose durchgeführt wurde |
| STAT_CPI_TEMP_UMGEBUNG_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Umgebungstemperatatur während der CPI-Diagnose |
| STAT_CPI_FRT_AC | 0-n | high | unsigned char | - | TAB_AC_STATUS | - | - | - | Status der Innenraum-Klimatisierung während der CPI-Diagnose |
| STAT_CPI_LIFE_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel am Ende der CPI-Diagnose |
| STAT_ANZAHL_CPI_OK_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen in Speicherhälfte 1 seit dem letzten Reset mit Ergebnis Diag OK |
| STAT_ANZAHL_CPI_FAILED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen in Speicherhällfte 1 seit dem letzten Reset mit Ergebnis Diag Failed |
| STAT_ANZAHL_CPI_ABGBR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der vorzeitig abgebrochenen CPI-Diagnosen in Speicherhälfte 1 seit dem letzten Reset |
| STAT_ANZAHL_CPI_OK_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen in Speicherhälfte 2 seit dem letzten Reset mit Ergebnis Diag OK |
| STAT_ANZAHL_CPI_FAILED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen in Speicherhällfte 2 seit dem letzten Reset mit Ergebnis Diag Failed |
| STAT_ANZAHL_CPI_ABGBR_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der vorzeitig abgebrochenen CPI-Diagnosen in Speicherhälfte 2 seit dem letzten Reset |

### RES_0XE5F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_COUNTER_RB1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der geschriebenen Datensätze |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_1 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_2 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_3 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_4 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_5 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_6 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_5 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_6 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_COUNTER_RB2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der geschriebenen Datensätze |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_5_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_6_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_1 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_2 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_3 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_4 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_5 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_6 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_5 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| - | Bit | high | BITFIELD | - | BF_STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_6 | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur  |
| STAT_HVOFF_VOLTAGES_COUNTER_SCORE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler zur Bewertung des Spannungsabfalls über die Lebenszeit |

### RES_0XE5F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_MEAN_DCH_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Entladeende des ersten Kapazitätstests |
| STAT_TEMP_MIN_DCH_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Entladeende des ersten Kapazitätstests |
| STAT_TEMP_MAX_DCH_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Entladeende des ersten Kapazitätstests |
| STAT_TEMP_MEAN_CHA_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Ladeende des ersten Kapazitätstests |
| STAT_TEMP_MIN_CHA_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Ladeende des ersten Kapazitätstests |
| STAT_TEMP_MAX_CHA_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Ladeende des ersten Kapazitätstests |
| STAT_FRC_PWR_CHG_TEST_1_WERT | kW | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ladeleistung (aus Prognose) bei erstem Kapazitätstest |
| STAT_I_DCH_END_FILT_TEST_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Entladeabbruch-Strom (gefiltert) bei erstem Kapazitätstest |
| STAT_U_CELL_MIN_IDX_DCH_END_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung bei Entladeende des ersen Kapazitätstests |
| STAT_TEMP_MEAN_DCH_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MIN_DCH_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MAX_DCH_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MEAN_CHA_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Ladeende des zweiten Kapazitätstests |
| STAT_TEMP_MIN_CHA_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Ladeende des zweiten Kapazitätstests |
| STAT_TEMP_MAX_CHA_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Ladeende des zweiten Kapazitätstests |
| STAT_FRC_PWR_CHG_TEST_2_WERT | kW | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ladeleistung (aus Prognose) bei zweitem Kapazitätstest |
| STAT_I_DCH_END_FILT_TEST_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Entladeabbruch-Strom (gefiltert) bei zweitem Kapazitätstest |
| STAT_U_CELL_MIN_IDX_DCH_END_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MEAN_DCH_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Entladeende des dritten Kapazitätstests |
| STAT_TEMP_MIN_DCH_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Entladeende des dritten Kapazitätstests |
| STAT_TEMP_MAX_DCH_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Entladeende des dritten Kapazitätstests |
| STAT_TEMP_MEAN_CHA_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Ladeende des dritten Kapazitätstests |
| STAT_TEMP_MIN_CHA_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Ladeende des dritten Kapazitätstests |
| STAT_TEMP_MAX_CHA_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Ladeende des dritten Kapazitätstests |
| STAT_FRC_PWR_CHG_TEST_3_WERT | kW | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ladeleistung (aus Prognose) bei drittem Kapazitätstest |
| STAT_I_DCH_END_FILT_TEST_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Entladeabbruch-Strom (gefiltert) bei drittem Kapazitätstest |
| STAT_U_CELL_MIN_IDX_DCH_END_TEST_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung bei Entladeende des dritten Kapazitätstests |

### RES_0XE5F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPI_REL_TEMP_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Relative Abweichung des berechneten Temperaturgradienten vom Schwellenwert |
| STAT_CPI_TEMP_GRAD_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Berechneter Temperaturgradient der CPI-Diagnose (Einheit K/min) |
| STAT_CPI_E_LOSS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Berechnete Verlustenergie der CPI-Diagnose (Einheit: Ws/min) |
| STAT_CPI_DIAGNOSE | 0-n | high | unsigned char | - | TAB_CPI_DIAGNOSE_STATUS | - | - | - | Ergebnis CPI Diagnose |
| STAT_CPI_TEMP_UMGEBUNG_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Umgebungstemperatatur während der CPI-Diagnose |
| STAT_CPI_FRT_AC | 0-n | high | unsigned char | - | TAB_AC_STATUS | - | - | - | Status der Innenraum-Klimatisierung während der CPI-Diagnose |
| STAT_CPI_LIFE_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel am Ende der CPI-Diagnose |
| STAT_ANZAHL_CPI_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der vollständig durchgelaufenen CPI-Diagnosen seit dem letzten Reset |
| STAT_ANZAHL_CPI_OK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen seit dem letzten Reset mit Ergebnis Diag OK |
| STAT_ANZAHL_CPI_FAILED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen seit dem letzten Reset mit Ergebnis Diag Failed |
| STAT_ANZAHL_CPI_ABGEBROCHEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der vorzeitig abgebrochenen CPI-Diagnosen seit dem letzten Reset |

### RES_0XE5F6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_CODING_I2T_I_N1_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 1. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_1) |
| STAT_HIS_CODING_I2T_I_N2_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 2. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_2) |
| STAT_HIS_CODING_I2T_I_N3_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 3. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_3) |
| STAT_HIS_CODING_I2T_I_N4_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 4. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_4) |
| STAT_HIS_CODING_I2T_I_N5_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 5. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_5) |
| STAT_HIS_CODING_I2T_I_N6_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 6. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_6) |
| STAT_HIS_CODING_I2T_I_N7_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 7. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_7) |
| STAT_HIS_CODING_I2T_I_N8_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 8. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_8) |
| STAT_HIS_CODING_I2T_I_N9_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 9. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_9) |
| STAT_HIS_CODING_I2T_I_N10_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_10) |
| STAT_HIS_CODING_I2T_I_N11_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 11. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_11) |
| STAT_HIS_CODING_I2T_I_N12_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 12. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_12) |
| STAT_HIS_CODING_I2T_I_N13_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 13. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_13) |
| STAT_HIS_CODING_I2T_I_N14_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 14. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_14) |
| STAT_HIS_CODING_I2T_I_N15_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 15. Strom-Stützstelle der Leitungsschutz-I-t Kurve (Überwachungsperiode STAT_HIS_CODING_I2T_TIME_15) |
| STAT_HIS_CODING_I2T_TIME_1_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 1. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_2_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 2. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_3_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 3. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_4_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 4. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_5_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 5. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_6_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 6. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_7_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 7. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_8_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 8. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_9_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 9. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_10_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_11_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 11. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_12_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 12. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_13_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 13. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_14_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 14. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |
| STAT_HIS_CODING_I2T_TIME_15_WERT | s | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 15. Tau des RMS-PT1-Filters, entspricht 2/3 der eigentlichen Überwachungsperiode |

### RES_0XE5F7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80 |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |
| STAT_HIS_LEITUNG_RMS_B1_I2T_I_N15_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 70 < Irel_abs <=80  |
| STAT_HIS_LEITUNG_RMS_B2_I2T_I_N15_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 80 < Irel_abs <=90  |
| STAT_HIS_LEITUNG_RMS_B3_I2T_I_N15_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 90 < Irel_abs <=100  |
| STAT_HIS_LEITUNG_RMS_B4_I2T_I_N15_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Relativwerts von I_rms_I_t/I_t_Kurve_Stützen_I beim Laden und Entladen in Klasse: 100 < Irel_abs  |

### RES_0XE5F8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_EFF_CURR_ABS_1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse Irms_dch_lim < Irms_abs <= (Irms_dch_lim * 1,25 AND I_RMS_ABS) |
| STAT_HIS_EFF_CURR_ABS_2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse 1,25*Irms_dch_lim < Irel_abs <= I_RMS_ABS |
| STAT_HIS_EFF_CURR_ABS_3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse I_RMS_ABS < Irel_abs <= I_RMS_ABS * 1,25 |
| STAT_HIS_EFF_CURR_ABS_4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse I_RMS_ABS * 1,25 < Irel_abs |
| STAT_T7_THRES_LOW_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert Untere Schwelle |
| STAT_T7_THRES_HIGH_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert Obere Schwelle |

### RES_0XE5F9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_EFF_CURR_ABS_1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse Irms_dch_lim < Irms_abs <= (Irms_dch_lim * 1,25 AND I_RMS_ABS) |
| STAT_HIS_EFF_CURR_ABS_2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse 1,25*Irms_dch_lim < Irel_abs <= I_RMS_ABS |
| STAT_HIS_EFF_CURR_ABS_3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse I_RMS_ABS < Irel_abs <= I_RMS_ABS * 1,25 |
| STAT_HIS_EFF_CURR_ABS_4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in MIN des Absolut-Stroms Irms_abs in der Klasse I_RMS_ABS * 1,25 < Irel_abs |
| STAT_T6_THRES_LOW_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert Untere Schwelle |
| STAT_T6_THRES_HIGH_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert Obere Schwelle |

### RES_0XE5FA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPATEST_ASYM_ZELLE_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zell-Index der Zelle, die während des Kapazitäts-Test am tiefsten entladen wurde. |
| STAT_KAPATEST_ASYM_MOD_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Modul-Index der Zelle, die während Kapazitätstest am tiefsten entladen wurde. |
| STAT_KAPATEST_ASYM_POT_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kapazitätsbereich, der potenziell durch eine Symmetrierung nutzbar gemacht werden kann. |

### RES_0XE5FB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean  kleiner gleich  -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C  kleiner  TmodMean  kleiner gleich  -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C  kleiner  TmodMean  kleiner gleich  10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C  kleiner  TmodMean  kleiner gleich  20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C  kleiner  TmodMean  kleiner gleich  30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C  kleiner  TmodMean  kleiner gleich  35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C  kleiner  TmodMean  kleiner gleich  40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C  kleiner  TmodMean  kleiner gleich  50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C  kleiner  TmodMean  kleiner gleich  60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C  kleiner  TmodMean  kleiner gleich  70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C  kleiner  TmodMean  kleiner gleich  80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD12_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean grösser  80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax  kleiner gleich  35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C  kleiner  TmodMax  kleiner gleich  40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C  kleiner  TmodMax  kleiner gleich  50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C  kleiner  TmodMax  kleiner gleich  60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C  kleiner  TmodMax  kleiner gleich  70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C  kleiner  TmodMax  kleiner gleich  80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD12_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der größten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax  grösser  80°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin  kleiner gleich  -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C  kleiner  TmodMin  kleiner gleich  -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C  kleiner  TmodMin  kleiner gleich  10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C  kleiner  TmodMin  kleiner gleich  20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C  kleiner  TmodMin  kleiner gleich  30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C  kleiner  TmodMin  kleiner gleich  35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD12_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin  grösser  35°C |

### RES_0XE5FC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD12_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12  Dauer in Minuten beim Laden in der Klasse: 0  kleiner  UerrInt_over  kleiner gleich  UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD12_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten beim Laden in der Klasse: UerrInt_over  grösser  UerrIntLim_over - GW-FALL |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD12_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten beim Entladen in der Klasse: 0  grösser  UerrInt_under  grösser gleich  UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD12_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under  grösser   UerrIntLim_under -- GW-FALL |
| STAT_HIS_SPANNUNG_MOD12_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten in der Klasse UminLim kleiner gleich  U kleiner gleich 3.57 |
| STAT_HIS_SPANNUNG_MOD12_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten in der Klasse  3.57  kleiner  U  kleiner gleich 3.77 |
| STAT_HIS_SPANNUNG_MOD12_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten in der Klasse  3.77 kleiner  U  kleiner gleich 3.93 |
| STAT_HIS_SPANNUNG_MOD12_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 12 Dauer in Minuten in der Klasse  3.93  kleiner  U  kleiner gleich  UmaxLim |
| STAT_SOC_MOD_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlerer SOC MODUL 12 |

### RES_0XE5FD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_MOD_12_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | MODUL 12 aktuell gemessene Temperatur (Mittelwert der 3 Modul-Temperatur-Sensoren) Unplausibilitätswert = 327,67°C |
| STAT_MEAN_SOH_R_MOD_12_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rückgabe des mittleren SOH_R-Wertes von Modul 12 |
| STAT_MIN_KAPA_MOD_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von Modul 12 |
| STAT_ZELLDEFEKT_MOD_12 | 0/1 | high | unsigned char | - | - | - | - | - | Zelldefekt in MODUL 12: 0x00: nicht vorhanden (i.O.) 0x01: vorhanden (n.i.O.) |
| STAT_ZELLPACK_12_DMC_TEXT | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul 12 (28-stellig) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _STATUS_ALTERUNG_INNENWIDERSTAND_TS | 0x6334 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | Alterung des Innenwiderstands in Prozent: Innenwiderstand des Speichers im Neuzustand auf den aktuellen Wert des Innenwiderstands bezogen  (R_neu /R_akt) *100   (100% = Neuzustand, sinkt mit Alterung) | % | - | High | unsigned long | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| _STATUS_ALTERUNG_KAPAZITAET_TS | 0x6335 | STAT_ALTERUNG_KAPAZITAET_WERT | Restkapazitaet des Speichers | % | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SOC_GRENZEN | 0x6500 | - | State of Charge Grenzwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6500_D | - |
| _ISOLATION | 0x6501 | - | Isolationsüberwachung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6501_D | - |
| _UEBERLAST_SCHWELLE | 0x6502 | - | Lade- und Entladestromgrenzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6502_D | - |
| _SCHUETZ_K1 | 0x6506 | - | K1 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6506_D | - |
| _SCHUETZ_K2 | 0x6507 | - | K2 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6507_D | - |
| _SCHUETZ_K3 | 0x6508 | - | K3 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6508_D | - |
| _SYM_MODUS | 0x6511 | - | Symmetriemodus der SEM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6511_D | - |
| _MESSBOTSCHAFTEN_1 | 0x6512 | - | Messbotschaften ein/ausschalten, Umfang 1 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6512_D | - |
| _ST_SYM_MODUS | 0x6516 | STAT_SYM_MODUS | Status der Symmetrierung | 0-n | - | High | unsigned char | TAB_SYM_MODUS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CSC_STANDBY | 0x6519 | - | CSCs in Standby-Mode setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6519_D | - |
| _ANFORDERUNG_SCHUETZE_SCHLIESSEN | 0x651B | - | Schütze schließen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651B_D | - |
| _STEUERN_PRUEFSTANDSMODUS | 0x651C | - | Betriebsgrenzen von SOC, Strom, Spannung und Temperatur bis auf die Sicherheitsgrenzen öffnen und ISO-Wächter deaktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651C_D | - |
| _SCHUETZE_SCHLIESSEN_FUSI | 0x651E | - | Anforderung  Schütze Schließen  an Ebene 2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651E_D | - |
| _HL_ERRORS_KAT0 | 0x6520 | - | Alle High-Level-Fehler (DTCs) werden auf KAT0 gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6520_D | - |
| _NV_DATA_RESET_ALL | 0x6521 | - | Zurücksetzen aller NV-Daten auf Initialwert INCL der GW-DATEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6521_D | - |
| _NV_DATA_RESET_VOL | 0x6522 | - | Zurücksetzen aller volatilen NV-Daten (Block 5) auf Initialwert KEIN GW-DATEN RESET | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6522_D | - |
| _STEUERN_ENABLE_ISENS_FUSI | 0x6523 | - | Diagnosejob zum Test der FUSI-Funktionalität. Dieser Job teilt der Fusi-Funktion mit, dass der Stromsensor ausgeschaltet ist. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6523_D | - |
| _MESSBOTSCHAFTEN_2 | 0x6524 | - | Messbotschaften ein/ausschalten, Umfang 2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6524_D | - |
| _STEUERN_UEBERNAHME_KAPATEST_NV | 0x6525 | - | Diagnoseschalter um Übernahme vom Ergebnis eines Kapazitätstests in den SoH_C-Schätzer zu steuern | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6525_D | - |
| _STATUS_UEBERNAHME_KAPATEST_NV | 0x6526 | STAT_UEBERNAHME_KAPATEST_NV | Aktuelle Einstellung der Ergebnisübertragung eines Kapazitätstests in den SoH_C-Schätzer (0: keine Übernahme, 1: Übernahme (standard)) | 0-n | - | High | unsigned char | TAB_KAPATEST | - | - | - | - | 22 | - | - |
| _DEM_TEST | 0x6528 | - | Fehlerspeicher Test aktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6528_D | - |
| _DEM_TEST_EINTRAG | 0x6529 | - | Fehlerspeichereintrag im Test Modus setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6529_D | - |
| ISOLATION | 0xAD61 | - | Ergebnis Isolationstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD61_R |
| KAPAZITAET_BESTIMMUNG | 0xAD66 | - | Bestimmung der Kapazität | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD66_R |
| SYMMETRIERUNG | 0xAD6B | - | Symmetrierung ansteueren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD6B_R |
| SYMMETRIERUNG_FIXSPG | 0xAD75 | - | Anstoßen der spannungsgesteuerte Symmetrierung per Zielspannungsvorgabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD75_R | RES_0xAD75_R |
| CSC_IDS_LESEN | 0xAD76 | - | Eingabe der CSC-Nummer zum Auslesen des DMC  von CSC x | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD76_R | RES_0xAD76_R |
| HIS_SPANNUNG_NOP_MOD_LESEN | 0xAD7C | - | Zeit in Minuten in verschiedenen Spannungsklassen von einzelnen Modulen während Speicher nicht im Betrieb | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD7C_R | RES_0xAD7C_R |
| HIS_TEMP_HVON_MIN_MOD_1_9 | 0xD4BA | - | MODULE 1...9: Zeit in Minuten in 7 Temperaturklassen der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4BA_D |
| HIS_TEMP_HVON_MAX_MOD_1_9 | 0xD4BB | - | MODULE 1...9: Zeit in Minuten in 7 Temperaturklassen der größten gemessenen Zelltemperatur bei geschlossen Schützen (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4BB_D |
| HIS_TEMP_HVOFF_AVG_MOD_1_5 | 0xD4BC | - | MODULE 1...5: Zeit in Minuten in 12 Temperaturklassen der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4BC_D |
| HIS_TEMP_HVOFF_AVG_MOD_6_10 | 0xD4BD | - | MODULE 6...10: Zeit in Minuten in 12 Temperaturklassen der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4BD_D |
| HIS_TEMP_HVON_HVOFF_MOD_REST | 0xD4BE | - | REST MODULE ...11 der Jobs HIS_TEMP_HVON_MIN_MOD // HIS_TEMP_HVON_MAX_MOD // HIS_TEMP_HVOFF_AVG_MOD (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4BE_D |
| HIS_SPANNUNG_MOD | 0xD4BF | - | Zeit in Minuten in 4 Spannungsklassen aller Module, Schütze geschlossen (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4BF_D |
| HIS_ERR_LIM_SPANNUNG_MOD | 0xD4C0 | - | Ausgabe der Verweildauer in Spannungsfehlergrenzklassen aller Module. Bei Temperaturen < -10°C verändert sich die Spannungsfehlergrenze temperaturabhängig. (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C0_D |
| RB_SOC_REKALIBRIERUNG | 0xD4C5 | - | Auslesen des Betteriezustandes VOR und NACH der letzten 5 SOC Rekalibrierungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C5_D |
| RB_SOH_ADAPTION | 0xD4C6 | - | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C6_D |
| SOC_GUETE | 0xD4C7 | STAT_SOC_GUETE_WERT | Auslesen des aktuellen SOC Gütewertes auf Basis der SOC Schätzung (1 == beste Güte,  >30 == schlechteste Güte ) | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HIS_SOC_GUETE | 0xD4C8 | - | Auslesen der Aufenthaltsdauer in 5 Klassen des SOC Gütewertes auf Basis der SOC Schätzung bei HVON | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C8_D |
| ANZAHL_OCV_SOC_REKAL | 0xD4C9 | STAT_ANZAHL_OCV_SOC_REKAL_WERT | Anzahl der OCV-SOC Rekalibrierungen | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RB_SOC_VOLLADEENDE | 0xD4CB | - | Auslesen verschiedener SOCs der letzten 5 Vollladevorgänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CB_D |
| KUEHLDAUER_HVB | 0xD4CC | - | Job ist nicht für SME_03 relevant // Ersatz ist STATUS_KUEHLDAUER  Kühldauer der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CC_D |
| HIST3D_SOC_TEMP_STROM_1 | 0xD4CD | - | 3D-Histogramm für die Kombination von Nennladezustand (X),  Speichertemperatur (Y) und quadratischem Mittel des Stroms (Z) JOB_1/2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CD_D |
| HIST3D_SOC_TEMP_STROM_2 | 0xD4CE | - | 3D-Histogramm für die Kombination von Nennladezustand (X),  Speichertemperatur (Y) und quadratischem Mittel des Stroms (Z) JOB_2/2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CE_D |
| LADUNGSVERLUST_ZELLE | 0xD67F | - | Ringspeicher zum Ladungsverlust der Zellen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD67F_D |
| RB_ISO_MESS_TRG | 0xD6C7 | - | Rückgabe der R_iso incl. Qual. der letzten 5 Nachlaufmessungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C7_D |
| RB_ISO_MESS_STD_IO_NIO | 0xD6C8 | - | Rückgabe der letzten 10 Ereignisse der R_iso Standard Messung bei Fehlerschwellenunter-/-überschreitung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C8_D |
| RB_ISO_MESS_TRG_IO_NIO | 0xD6C9 | - | Rückgabe der letzten 10 Ereignisse der getriggerten Nachlauf-ISO-Messung bei Fehlerschwellenunter-/-überschreitung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C9_D |
| ISO_ERR_STD_FZ1_2 | 0xD6CB | - | Rückgabe von Inputsignalen und Ergebniswerten der Standard-ISO-Messung zu Fehlerzeitpunkt 1 und 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CB_D |
| RB_SOH_KAPATEST | 0xD6CC | - | Rückgabe der Ergebnisse der letzten 3 HVS-Offboard-Kapatests (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CC_D |
| RB_ALTERUNG_KAPA | 0xD6CE | - | Rückgabe der Ergebnisse der letzten 5 SoH_C-Adaptionen incl. Kapatests  (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CE_D |
| CSC_TEMPERATUREN | 0xD6CF | - | Rückgabe der aktuellen Temperaturmesswerte aller CSC-Sensoren (max 3*12, ohne HW-RL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CF_D |
| ISO_ERR_TRG_FZ1_2 | 0xD6D1 | - | Rückgabe von Inputsignalen und Ergebniswerten der getriggerte Nachlauf-ISO-Messung zu Fehlerzeitpunkt 1 und 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6D1_D |
| R_ISO_ROH | 0xD6D9 | - | Rückgabe des R_iso Rohwertes der letzten ISO-Messung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6D9_D |
| SCHUETZ_SCHALTER | 0xDD60 | STAT_SCHUETZ_SCHALTER | Status der Schützschalter: geschlossen, offen, verschweißte Kontakte oder nicht definiert. Ergebnisse siehe Tabelle TAB_SCHUETZ_SCHALTER | 0-n | - | High | unsigned char | TAB_SCHUETZ_SCHALTER | - | - | - | - | 22 | - | - |
| SCHUETZ_FREIGABE | 0xDD61 | - | Schreibt bzw. liest das Bit zur Freigabe oder Sperrung der Schützschalter. Job ist Klemmensicher | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD61_D | RES_0xDD61_D |
| SCHUETZSCHALTUNGEN_ANZAHL | 0xDD63 | - | Anzahl der Schaltungen der Schützschalter (stromlos und unter Last) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD63_D |
| HVIL | 0xDD64 | STAT_GUELTIG | Ergebnis HVIL-Prüfung | 0-n | - | High | unsigned char | TAB_STATUS_HVIL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_ZWISCHENKREIS | 0xDD66 | STAT_HV_SPANNUNG_WERT | Zwischenkreisspannung zum HV-Anschlussstecker, abhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ANZAHL_KUEHLANFORDERUNG_DRINGEND | 0xDD67 | STAT_ANZAHL_KUEHLANFORDERUNG_DRINGEND_WERT | Anzahl aufeinanderfolgenender Wachzyklen mit dringender Kühlanforderung (Lebensdauer-Max.wert) | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_STROM | 0xDD69 | STAT_HV_STROM_WERT | HV-Strom in A | A | - | High | signed long | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ISOLATIONSWIDERSTAND | 0xDD6A | - | Auslesen des aktuell anliegenden Isolationswiderstands | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD6A_D |
| KUEHLKREISLAUF_TEMP | 0xDD6C | STAT_TEMP_KUEHLKREISLAUF_WERT | Temperatur des Kühlmediums in °C (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| KUEHLKREISLAUF_VENTIL | 0xDD6F | - | Status / Steuern Kühlmittel-Ventil: Geschlossen oder offen / schliessen oder öffnen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD6F_D | RES_0xDD6F_D |
| AUFSTART_VERHINDERER | 0xDD72 | STAT_AUFSTART_VERHINDERER | Grund für nicht Aufstarten des HV-Systems | 0-n | - | High | unsigned char | TAB_AUFSTART_VERHINDERER | - | - | - | - | 22 | - | - |
| CUMULATIVE_LADUNG | 0xDD73 | STAT_LADUNG_AMP_STUNDEN_WERT | Die kumulierte Ladung für Ladevorgänge in Ah | Ah | - | Low | unsigned long | - | 1.0 | 3600.0 | 0.0 | - | 22 | - | - |
| CUMULATIVE_ENTLADUNG | 0xDD74 | STAT_ENTLADUNG_AMP_STUNDEN_WERT | Die kumulierte Ladung für Entladevorgänge in Ah | Ah | - | Low | unsigned long | - | 1.0 | 3600.0 | 0.0 | - | 22 | - | - |
| SOC_REKALIBRIERUNG | 0xDD78 | - | Triggern der SOC Rekalibierungsprozedur (0 = nicht aktiv; 1 = aktiv) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD78_D | - |
| ALTERUNG_KAPAZITAET | 0xDD7B | STAT_KAPAZITAET_WERT | Auslesen der Justierung Kapazität Batterie | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEISTUNGSHISTOGRAMM | 0xDD7C | - | Histogramm der Lade-Entladeleistung Gesamtspeicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7C_D |
| STROMGRENZEN | 0xDD7D | - | Stromgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7D_D |
| SPANNUNGSGRENZEN | 0xDD7E | - | Spannungsgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7E_D |
| HIS_STROM | 0xDD8E | - | Ausgabe der Strombelastung (Stromhistogramm) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD8E_D |
| ZEIT_TEMP_HISTOGRAMM | 0xDD90 | - | Zeit in verschiedenen Temperaturklassen und Steuergerätezuständen (SG wach, SG schläft) der gemittelten berechneten Temperatur über alle Zellkerne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD90_D |
| ZEIT_SOC_KLASSE | 0xDD91 | - | Liefert die Aufenthaltsdauer des SoC in SoC-Klassen über Lebensdauer / Gesamtdauer (schlafen + wach) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD91_D |
| KUEHLMITTELPUMPE | 0xDDA1 | - | Resultwerte oder Steuerung der Kühlmittelpumpe für die Kühlung des Hochvoltspeichers in % (0-100%) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDA1_D | RES_0xDDA1_D |
| FREIGABE_KUEHLMITTELPUMPE | 0xDDA5 | - | Freigeben oder Auslesen Status der Kühlmittelpumpe (0 = nicht freigegeben, 1 = freigegeben) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDA5_D | RES_0xDDA5_D |
| LADEZIELSPANNUNG_TAUSCH | 0xDDAB | STAT_LADEZIELSPANNUNG_WERT | Ausgabe der Ladezielspannung für Modultausch vor Einbau des Moduls ins Fahrzeug | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_BATTERIE | 0xDDB4 | STAT_HV_SPANNUNG_BATT_WERT | Batteriespannung hinter den Schützen, unabhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ALTERUNG_INNENWIDERSTAND | 0xDDB6 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | Alterung des Innenwiderstands in Prozent: Innenwiderstand des Speichers im Neuzustand auf den aktuellen Wert des Innenwiderstands bezogen  (R_neu /R_akt) *100   (100% = Neuzustand, sinkt mit Alterung) | % | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ANZEIGE_SOC | 0xDDBC | - | aktueller Anzeige Soc | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBC_D |
| SERVICE_DISCONNECT | 0xDDBD | STAT_SERVICE_DISCONNECT | Status des Service Disconnects (0 = offen, 1 = geschlossen, 2 = Signal ungültig)  | 0-n | - | High | unsigned char | TAB_ST_SD | - | - | - | - | 22 | - | - |
| VORLADUNG | 0xDDBE | - | Info über Zeit, Strom und Temperaturen bei Vorladung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBE_D |
| TEMPERATUREN_HVS | 0xDDC0 | - | Ausgabe der berechneten Zellkerntemperaturen (minimale, maximale und durchschnittliche) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC0_D |
| IMPEDANZ_KORREKTUR | 0xDDC2 | - | Korrekturfaktor des seriellen und parallelen ohmschen Widerstands sowie der parallelen Kapazität (1,5 = Eröhung des Widerstands um 50%) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC2_D |
| SOC | 0xDDC4 | - | Auslesen SOC Wert (in %) und Plausibilität oder Vorgabe des SOC Werts (0-100%) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDC4_D | RES_0xDDC4_D |
| HISTO_SYM_DAUER | 0xDDC6 | - | Auslesen der Anzahl von Symmetriervorgängen in den jeweiligen Zeitklassen (Ist-Zeit in der die Symmetrierwiderstände aktiv waren) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC6_D |
| HISTO_SYM_ZELLANZAHL | 0xDDC7 | - | Häufigkeit über Lebensdauer der Zellenanzahl, die zur Symmetrierung angewiesen wurden. Inkrementieren falls Symmertrierbedarf bei Einschlafen nach ERSTEM zyklischen Aufwachen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC7_D |
| SYM_DELTASOC | 0xDDC8 | - | Maximale SoC-Differenz in % über den gesamten HVS. Ringspeicher der letzten 5 Fahrten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC8_D |
| MAX_SYM_DAUER | 0xDDC9 | - | Maximale Symmetriedauer des letzten Symmetriervorgangs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC9_D |
| SERIENNUMMER_ECU | 0xDDCA | STAT_SERIENNUMMER_ECU_TEXT | Seriennummer des SME Steuergeräts | TEXT | - | High | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOC_GRENZEN | 0xDDCB | - | Auslesen und Ändern der SOC Grenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDCB_D |
| SCHUETZ_RESTZAEHLER | 0xDDCC | - | Auslesen oder Rücksetzen (0 = kein Reset; 1 = Reset) des Zählers für die noch möglichen Schaltungen der Schütze K1, K2, K3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDCC_D |
| CC_MELDUNG | 0xDDCD | - | Aktivieren / Deaktivierung des Sendens von CC-Meldung (0 = Senden nicht aktiv; 1 = Senden aktiv) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDCD_D | - |
| ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB | 0xDDE9 | - | Histogramm mit Häufigkeit einzelner aufgetretener SoC-Hübe im Betriebszeitraum | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE9_D |
| RESET_SBOX_ANZAHL_TAUSCH | 0xDDEA | - | Zurücksetzen des SBOX Tausch-Zählers | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDEA_D | - |
| RINGPUFFER_LADEVORGAENGE | 0xDDEB | - | Rückgabe von Messgrößen der letzten 5 abgeschlossenen Ladevorgänge: - Start-SOC - Verfügbare Ladeleistung - Tatsächlicher End-SOC - Grund Ladeende (Kein Ladeende detektiert 0, Ziel-SOC erreicht 1, U/I-Volladeerkennung 2, Abbruch extern 3, Fehler SME 4) - Start Temperatur  - End-Temperatur  - Zu Beginn prognostizierte Ladezeit in min  - Tatsächliche Ladezeit in min - Relativzeit (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDEB_D |
| HIS_ABW_PROG_LADEZEIT | 0xDDEC | - | Darstellung der Häufigkeit einer relative Abweichung der Ladezeitprognose vom realen Wert (fact = (t_prog-t_ist) / t_ist * 100%). t_prog =  zu Beginn der Ladephase prognostizierte Wert. t_ist =  tatsächlich bis zum Erreichen des Ladeziels benötigte Zeit. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDEC_D |
| CSC_IDS_ZUORDNEN | 0xDDED | - | Indizes/Verbauposition der einzelnen CSCs vergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDED_D | - |
| CSC_IDS_UEBERNEHMEN | 0xDDEE | - | Indizes/Verbauposition der einzelnen CSCs in SME übernehmen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDEE_D | - |
| HV_SPANNUNG_QUER | 0xDDEF | STAT_HV_SPANNUNG_QUER_WERT | SBox, Hochvolt-Spannung Quer (gleich Batteriespannung wenn K1 oder K3 geschlossen ist) | V | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_SPEICHER_ID | 0xDE35 | - | Abschnittweises Schreiben/Lesen der Speicheridentifikationsnummer des HV-Speichers | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE35_D | RES_0xDE35_D |
| ALPHA_INITIAL_ALTERUNG | 0xDE37 | STAT_ALPHA_INIT_ALTERUNG_WERT | Initialwert der SOH_R-Berechnung | - | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| HIS_STROM_RMS | 0xDE38 | - | Für SME wach: Lebensdauerhistogramm mit 4 Klassen des über 10s gemittelten Stroms [I_HV zu I_rms]  bezogen auf den def. max. Peakstrom [X_rel = I_rms/I_peak*100] | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE38_D |
| BETRIEBSSTUNDEN_HVS | 0xDF60 | - | Zeit für geschlossene Hauptschalter und gesamte Batterielebensdauer (geschlossene und geöffnete Zeit der Hauptschalter) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF60_D |
| COOL_DOWN | 0xDF62 | STAT_ANZAHL_KUEHLVORGAENGE_WERT | Anzahl der CoolDown Szenarios (Abfahrt mit heißem HV-Speicher) | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLEMMENZYKLEN | 0xDF63 | STAT_ANZAHL_KLEMMENZYKLEN_WERT | Anzahl der Klemmenzyklen | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_SPREIZUNG_SYSTEM | 0xDF65 | - | Zeit in verschiedenen dT-Klassen bei aktiver Kühlung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF65_D |
| TEMP_KUEHLMITTEL | 0xDF66 | - | Zeit in verschiedenen Temperaturklassen des Kühlmittels | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF66_D |
| LADUNG_KUEHLUNG | 0xDF67 | - | Ladungs- und Entladungsmenge bei eingeschalteter Kühlung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF67_D |
| PROJEKT_PARAMETER | 0xDF71 | - | Auslesen der projektspezifischen Parametern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF71_D |
| KURZSCHLUESSE | 0xDF72 | STAT_ANZAHL_KURZSCHLUESSE_WERT | Anzahl der vorgekommenen Kurschlüsse | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VOKO_KUEHL_DAUER | 0xDF76 | - | Anzahl der Vorkonditionierungs-Kühldauervorgängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF76_D |
| HIS_LADE_DAUER | 0xDF77 | - | Anzahl der Ladevorgänge in Ladedauerklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF77_D |
| RESET_HIS_TEMP_MOD | 0xDF78 | - | Zurücksetzen des Temperaturhistogramms von den ausgewählten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF78_D | - |
| RESET_HIS_ERR_LIM_SPANNUNG_MOD | 0xDF79 | - | Zurücksetzen des Spannungsfehlergrenzenhistogramms von den ausgewählten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF79_D | - |
| RESET_HIS_SPANNUNG_MOD | 0xDF7A | - | Zurücksetzen des Spannungshistogramms von den ausgewählten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7A_D | - |
| RESET_ISOLATIONSMESSWERTE | 0xDF7B | - | Zurücksetzen der Isolationswiderstandsmesswerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7B_D | - |
| ENTLADESPANNUNGSGRENZE_UNTEN | 0xDF7C | - | Entladespannungsgrenze runter setzen um bei Zellunterspannungen Zuschaltung zu ermöglichen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7C_D | - |
| ZELLKAPAZITAETEN | 0xDF7F | - | Setzen der Kapazität von Modul x bzw. aller Module auf einem bestimmten Wert | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7F_D | - |
| SERIENNUMMER_SCHREIBEN | 0xDF80 | - | Schreiben der HV-Speicher Seriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF80_D | - |
| HIS_SOC_WARN_GRENZEN | 0xDF81 | - | Betriebszeit in Minuten in unteren und oberen SOC-Warngrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF81_D |
| RESET_SBOX | 0xDF82 | - | Eingabe zum Zurücksetzen der S-BOX Parameter | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF82_D | - |
| ID_SBOX | 0xDF83 | - | Auslesen Identifiationsparameter der SBOX | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF83_D |
| SOC_HISTORIE | 0xDF86 | - | Auslesen der SOC-Historie Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF86_D |
| ZELLPACK_IDS_ZUORDNEN | 0xDF87 | - | Indizes/Verbauposition der einzelnen Zellpacks vergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF87_D | - |
| HIS_EFF_STROM_T1 | 0xDF8A | - | Bei T < -10: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8A_D |
| HIS_EFF_STROM_T2 | 0xDF8B | - | Bei -10 <= T < 5: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8B_D |
| HIS_EFF_STROM_T3 | 0xDF8C | - | Bei 5 <= T < 25: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8C_D |
| HIS_EFF_STROM_T4 | 0xDF8D | - | Bei 25 <= T < 40: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8D_D |
| HIS_EFF_STROM_T5 | 0xDF8E | - | Bei 40 <= T: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8E_D |
| HIS_ERR_LIM_STROM_T1 | 0xDF8F | - | Bei T <= -10: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8F_D |
| HIS_ERR_LIM_STROM_T2 | 0xDF90 | - | Bei -10 < T <= 5: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF90_D |
| HIS_ERR_LIM_STROM_T3 | 0xDF91 | - | Bei 5 < T <= 25: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF91_D |
| HIS_ERR_LIM_STROM_T4 | 0xDF92 | - | Bei 25 < T: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF92_D |
| RESET_ALTERUNG_KAPAZITAET_HIST_SOC_HUB | 0xDF94 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job:  STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF94_D | - |
| RESET_BETRIEBSSTUNDEN_HVS | 0xDF95 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job:  STATUS_BETRIEBSSTUNDEN_SME (I01) STATUS_BETRIEBSSTUNDEN_HVS (zukünftige Projekte) >> Achtung: für alle SME-Funktionen erscheint der gesamte HVS mit diesem Zurücksetzen als absolut NEU. Zurücksetzen ist also nur zu empfehlen bei Tausch von vielen bis allen Modulen! | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF95_D | - |
| RESET_ANZAHL_KUEHLANFORDERUNG_DRINGEND | 0xDF96 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_ANZAHL_KUEHLANFORDERUNG_DRINGEND >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF96_D | - |
| RESET_CUMULATIVE_ENT_LADUNG | 0xDF97 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_CUMULATIVE_ENTLADUNG STATUS_CUMULATIVE_LADUNG >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF97_D | - |
| RESET_HIS_EFF_ERR_LIM_STROM_ALL | 0xDF98 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Jobs: STATUS_HIS_EFF_STROM_Txxxx STATUS_HIS_ERR_LIM_STROM_Txxxx >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF98_D | - |
| RESET_HIS_SOC_WARN_GRENZEN | 0xDF99 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_HIS_SOC_WARN_GRENZEN >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF99_D | - |
| RESET_ZEIT_SOC_KLASSE | 0xDF9A | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_ZEIT_SOC_KLASSE >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9A_D | - |
| RESET_ZEIT_TEMP_HISTOGRAMM | 0xDF9B | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_ZEIT_TEMP_HISTOGRAMM >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9B_D | - |
| LADEZEIT_ADAPT_KENNFELD | 0xDF9C | - | Auslesen des Kennfeldes von Lernfaktoren zur Korrektur des Ladezeitprognose-Rohwerts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF9C_D |
| RESET_LADEZEIT_ADAPT_KENNFELD | 0xDF9D | - | Zurücksetzen auf den Initialwert des Kennfelds von Lernfaktoren zur Korrektur des Ladezeitprognose-Rohwerts. >> auszuführen bei Modultausch Info: Auslesen der Reset-Initialwerte durch anschließendes Ausführen von LADEZEIT_ADAPT_KENNFELD_LESEN möglich. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9D_D | - |
| VERH_VOLLADE_LADEVORG | 0xDF9E | STAT_VERH_VOLLADE_LADEVORG_WERT | Prozentualer Wert vom Verhältnis der Volladevorgänge zu den gesamten Ladevorgängen | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RESET_VERH_VOLLADE_LADEVORG | 0xDF9F | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_VERH_VOLLADE_LADEVORG >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9F_D | - |
| ZUSTAND_SPEICHER | 0xDFA0 | - | Ausgabe von zentralen Speicherzudstandsgrößen als Max.-, Min.- und Mittelwert | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA0_D |
| BATTERY_GUARD_CALL | 0xDFA2 | - | Einleitung eines Batteryguard-Calls unabhängig vom tatsächlichen Speicherzustand  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFA2_D | - |
| BATTERY_GUARD_RESTSTANDZEIT | 0xDFA3 | - | Auslesen der minimalen und aktuellen Reststandzeit des Hochvoltspeichers.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA3_D |
| ANZAHL_SBOX_TAUSCH | 0xDFA4 | - | Liefert die Anzahl der durchgeführten SBOX Tauschvorgänge und Möglichkeit den Zähler für die Tauschvorgänge zu erhöhen oder zurückzusetzen.  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFA4_D | RES_0xDFA4_D |
| ZELLSPANNUNGEN | 0xDFA5 | - | Liefert alle aktuellen gemessenen Zellspannungen incl. Plausibilisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA5_D |
| ZELLDEFEKT_MOD | 0xDFA6 | - | Rückgabe für alle Module, ob in einem Modul eine defekte Zelle vorhanden ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA6_D |
| ZELLPACK_DMC_01 | 0xDFA7 | - | Rückgabe der DMCs von  Zellpack 01 bis 06 (07 bis 11 mit STATUS_ZELLPACK_DMC_02) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA7_D |
| ZELLPACK_DMC_02 | 0xDFA8 | - | Rückgabe der DMCs von  Zellpack 07 bis 11 (01 bis 06 mit STATUS_ZELLPACK_DMC_01) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA8_D |
| TEMPERATUREN_MOD | 0xDFA9 | - | Rückabe der aktuell gemessenen Temperatur aller Module (Mittelwert der 3 Modultemp-Sensoren) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA9_D |
| MIN_KAPAZITAET_MOD | 0xDFAA | - | Auslesen der aktuellen minimalen Kapazität ALLER Module, bezogen auf Kapazitätsquotient (Kapazitätsquotient  = (C_akt /C_nenn(neu)) *100   (100% = entspricht Nennkapazität; Kapazitätsquotient > 100%  entspricht Zellkapazität > Nennkapazität, Kapazitätsquotient < 100%  entspricht Zellkapazität < Nennkapazität). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFAA_D |
| MAX_INNENWIDERSTANDSFAKTOR_MOD | 0xDFAB | - | Auslesen des aktuellen maximalen Innenwiderstandsfaktors ALLER Module, (Faktor= 1-5 mit zwei Nachkommastellen; Faktor >1  entspricht dem Vielfachen des Zellwiderstands von min. einer Zelle gegenüber dem Moduldurchschnitt) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFAB_D |
| ANZAHL_VOLL_LADEVORGAENGE | 0xDFAC | - | Rückgabe der aktuellen Anzahl ALLER Ladevorgänge und der VOLL-Ladevorgänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFAC_D |
| SOC_MODUL | 0xDFAD | - | Rückgabe des mittleren SOCs aller Module | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFAD_D |
| HIS_SOC_MAX_MIN | 0xDFAE | - | Ausgabe des minimalen und maximalen MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFAE_D |
| RESET_HIS_SOC_MAX_MIN | 0xDFAF | - | Zurücksetzen auf Initialwert des minimalen (=255) und maximalen (=0) MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. Auswirkung auf Rückgabe von STATUS_HIS_SOC_MAX_MIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFAF_D | - |
| ANZAHL_SPANNUNGSFESTIGKEITSTESTS | 0xDFC3 | - | Rückgabe des Zählerwertes der durchgeführten Spannungsfestigkeitstests bzw. inkrementieren des Zählers bei durchgeführtem Spannungsfestigkeitstest. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFC3_D | RES_0xDFC3_D |
| RESET_ANZAHL_SPANNUNGSFESTIGKEITSTESTS | 0xDFC4 | - | Reset des Zählers auf null der durchgeführten Spannungsfestigkeitstests: ANZAHL_SPANNUNGSFESTIGKEITSTESTS | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFC4_D | - |
| HIS_SOC_SCHAETZER | 0xDFC5 | - | Messwerte und Histogramme zur Analyse der SoC-Schaetzer anhand von Felddaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFC5_D |
| RING_SOC_REKALIBR | 0xDFC6 | - | Ringspeicher, der geupdatet wird nach einer Rekalibrieurung in der Zustandsschätzung, zur Analyse der Zustandsschätzer anhand von Felddaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFC6_D |
| RING_SOC_SME_INIT | 0xDFC7 | - | Ringspeicher, der geupdatet wird beim Aufwachen der SME, zur Analyse der Zustandsschätzer anhand von Felddaten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFC7_D |
| MEAN_SOH_R_MOD | 0xDFC8 | - | Rückgabe des mittleren SOH_R-Wertes je Modul (Rnenn/Rakt*100) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFC8_D |
| LPA_HVS_LD_INT | 0xDFC9 | - | Setzen des neuen HVS-Eigenschutz-Stromintegralwertes / Lesen des aktuellen HVS-Eigenschutz-Stromintegralwertes und Rückgabe der projekspezifischen Strom- und Stromintegralgrenzen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFC9_D | RES_0xDFC9_D |
| RB_SYM_EOC | 0xDFCA | - | Ringspeicher zu den symmetrierelevanten Zellspannungen nach einem Ladevorgang | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFCA_D |
| RB_SYM | 0xDFCB | - | Ringspeicher zu den letzten Symmetriestarts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFCB_D |
| SYMMETRIERBAND | 0xDFE2 | - | Informationen zum letzten erfolgreichen Symmetriervorgang und den letzten Ruhespannungs-SoCs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFE2_D |
| RESET_SBOX_TEMP_HIS | 0xE519 | - | Zurücksetzen des S-Box-Temperatur-Histogramms | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE519_D | - |
| CODIERVARIABLEN_HV_SPEICHER | 0xE540 | - | Liest alle Codiervariablen mit Manipulationspotential aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE540_D |
| SBOX_TEMP_HIS | 0xE5E8 | - | 2D Histogramm zum Logging der S-Box Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5E8_D |
| CDC_SOH_SOC | 0xE5E9 | - | Aktueller SoH und SoC die über CDC ausgelesen werden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5E9_D |
| CDC_SPANNUNG | 0xE5EA | - | Aktuelle Spannungen die über CDC ausgelesen werden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5EA_D |
| CDC_TEMP_ZEIT_LADUNG | 0xE5EB | - | Aktuelle Temperaturen, Zeiten und Ladungszähler die über CDC ausgelesen werden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5EB_D |
| DOPPEL_CPI_ANALYSE | 0xE5EE | - | Gibt ein Datenpaket mit der kritischsten relativen Temperaturabweichung seit dem letzten Reset zurück (Schleppzeiger). Ein Datenpaket enthält für die Bedatung der Doppel-CPI-Diagnose relevante Messwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5EE_D |
| ANZAHL_DEFEKTE_SICHERUNG_RESET | 0xE5EF | - | Setzt die Anzahl der defekten Sicherungen seit dem letzten Tausch aller Module zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5EF_D | - |
| ANZAHL_DEFEKTE_SICHERUNG_INKREMENT | 0xE5F0 | - | Inkrementiert die Anzahl der defekten Sicherungen seit dem letzten Tausch aller Module | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5F0_D | - |
| ANZAHL_DEFEKTE_SICHERUNG | 0xE5F1 | STAT_ANZAHL_DEFEKTE_SICHERUNG_WERT | Anzahl der defekten Sicherungen seit dem letzten Tausch aller Module | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HVOFF_VOLTAGES | 0xE5F2 | - | Statusjob zur Analyse der Spannungsabsenkung nach Abstellen des Fahrzeugs. Diese ermöglicht im Zusammenhang mit den Zellindizes und Statussignalen des Symmetrierbedarfs eine Indizsammlung für defekte bzw. besonders schwache Zellen im Modulverbund. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F2_D |
| RB_SOH_KAPATEST_ERW | 0xE5F3 | - | Erweiterung der Rückgabe der Ergebnisse der letzten 3 HVS-Offboard-Kapatests (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F3_D |
| CPI_ANALYSE | 0xE5F4 | - | Gibt ein Datenpaket mit der kritischsten relativen Temperaturabweichung seit dem letzten Reset zurück (Schleppzeiger). Ein Datenpaket enthält für die Bedatung der CPI-Diagnose relevante Messwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F4_D |
| CPI_DIAGNOSE | 0xE5F5 | - | Überprüfung der Funktionsfähigkeit der CPI-Diagnose. Kühlventil wird zukommandiert und Kühlventildiagnosen deaktiviert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5F5_D | - |
| HIS_LEITUNGSSCHUTZ_HVS | 0xE5F6 | - | Rückgabe einzelner Strom-Zeit-Überwachungspunkte der jeweiligen I-t-Kurven des HVS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F6_D |
| HIS_EFF_STROM_IT | 0xE5F7 | - | Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze_I_t_Kurve | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F7_D |
| HIS_EFF_STROM_T7 | 0xE5F8 | - | Ausnutzung der Betriebsgrenzen-Erhöhung Winter PHEV GEN4 zwischen den Temperaturen STAT_T7_THRES_LOW und STAT_T7_THRES_HIGH. Es werden die jeweiligen Verweildauern in Prozentwertklassen STAT_HIS_EFF_CURR_ABS_xxx_T7 im Verhältnis zum Effektivstrom gebildet. 4 Bins repräsentieren, die Verhältnisse wie beschrieben (4 Klassen). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F8_D |
| HIS_EFF_STROM_T6 | 0xE5F9 | - | Ausnutzung der Betriebsgrenzen-Erhöhung Winter PHEV GEN4 zwischen den Temperaturen STAT_T6_THRES_LOW und STAT_T6_THRES_HIGH. Es werden die jeweiligen Verweildauern in Prozentwertklassen STAT_HIS_EFF_CURR_ABS_xxx_T6 im Verhältnis zum Effektivstrom gebildet (4 Klassen). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F9_D |
| KAPAZITAETSTEST_ASYMMETRIE_POTENTIAL | 0xE5FA | - | Rückgabe von Größen zum Asymmetrie-Potenzial des Speichers, die im Rahmen einer Kapazitätsbestimmung (Offboard Kapatest) ermittelt wurden. Ausgegeben werden Zell- und Modul-Index der Zelle, die potenziell die geringste Kapazität besitzt, sowie der zusätzliche Kapazitätsbereich dieser Zelle (in Prozent), der potenziell durch eine Symmetrierung des Speichers nutzbar gemacht werden kann. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FA_D |
| HIS_TEMP_HVON_HVOFF_MOD_12 | 0xE5FB | - | Rückgabe folgender Informationen für das Modul 12: - Zeit in Minuten in 12 Temperaturklassen der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen (Samsung) - Zeit in Minuten in 7 Temperaturklassen der größten gemessenen Zelltemperatur bei geschlossen Schützen (Samsung) - Zeit in Minuten in 7 Temperaturklassen der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen (Samsung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FB_D |
| HIS_SPANNUNG_SOC_MOD_12 | 0xE5FC | - | Rückgabe folgender Informationen für das Modul 12: - Verweildauer in Spannungsfehlergrenzklassen. Bei Temperaturen unter -10°C verändert sich die Spannungsfehlergrenze temperaturabhängig. (Samsung) - Zeit in Minuten in 4 Spannungsklassen, Schütze geschlossen (Samsung) - mittlere SOC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FC_D |
| SERVICEDATEN_MOD_12 | 0xE5FD | - | Rückgabe der folgenden Daten für Modul 12: - aktuell gemessenen Temperatur - mittlerer SOH_R-Wert - aktuelle minimale Kapazität, bezogen auf Kapazitätsquotient - defekte Zelle im Modul 12 vorhanden - DMCs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FD_D |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_AC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AC OFF |
| 0x01 | AC ON |
| 0x03 | AC INV |
| 0xFF | Wert ungültig |

### TAB_AUFSTART_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | interner Fehler |
| 0x02 | nicht interner Fehler |
| 0xFF | nicht definiert |

### TAB_BGC_TESTFALL

| WERT | TEXT |
| --- | --- |
| 0x01 | Testcase 1: sending Battery-Guard-Calls directly |
| 0x02 | Testcase 2: delayed sending of the Battery-Guard-Calls (will be sended with the next RTC-wake-up process of the SME) |

### TAB_CPI_DIAGNOSE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnose fehlgeschlagen |
| 0x01 | Diagnose okay |
| 0x02 | Warten nach Kühlanforderung |
| 0x03 | Messung läuft |
| 0xFF | Wert ungültig |

### TAB_DEM_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivieren |
| 1 | Aktivieren |

### TAB_FEHLERSTATUS_TEST

| WERT | TEXT |
| --- | --- |
| 0 | PASSED |
| 1 | FAILED |

### TAB_FRT_AC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AC Taste AUS |
| 0x01 | AC Taste EIN |
| 0x03 | Signal unbefuellt |
| 0xFF | Wert ungültig |

### TAB_GR_REKAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Ucel_Qal reached |
| 0x01 | U/I fully charged |
| 0x02 | 12V Reset Ucel_Qal n.i.O. |
| 0x03 | 12V Reset Ucel_Qal i.O. |
| 0x04 | NVs Reset Ucel_Qal n.i.O. |
| 0x05 | NVs Reset Ucel_Qal i.O. |
| 0xFF | ungültiger Wert |

### TAB_HL_ERR_KAT0

| WERT | TEXT |
| --- | --- |
| 0 | keine Beeinflussung |
| 1 | auf KAT0 setzen |

### TAB_ID_FIELD

| WERT | TEXT |
| --- | --- |
| 00 | Speicher-Typ |
| 01 | Speicher-Nummer |
| 02 | Initialaufbaumuster |
| 03 | Gehäuse |
| 04 | Kühler |
| 05 | Modul |
| 06 | CSC |
| 07 | HV-KBB |
| 08 | NV-KBB |
| 09 | BMU |
| 10 | S-Box |
| 11 | FREI |
| 12 | FREI |
| 13 | FREI |
| 0xFFFF | Wert ungültig |

### TAB_ISOLATION_ERFOLGREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Isolationsmessung nicht erfolgreich |
| 0x01 | Isolationsmessung erfolgreich |
| 0x02 | Isolationsmessung läuft! |
| 0xFF | nicht definiert |

### TAB_ISOLATION_ISOLATIONSFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Isolationswarnung liegt vor |
| 0x02 | Isolationsfehler liegt vor |
| 0xFF | nicht definiert |

### TAB_KAPATEST

| WERT | TEXT |
| --- | --- |
| 0 | keine Übernahme |
| 1 | Übernahme |

### TAB_KUEHLERKREISLAUF_VENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | geregelt |
| 0xFF | nicht definiert |

### TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | Fehler |
| 0xFF | ungültiger Wert |

### TAB_MB_SENDEN_1

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv, keine Botschaften versenden |
| 1 | nur Multiplexer 1 verschicken |
| 2 | nur Multiplexer 2 verschicken |
| 3 | nur Multiplexer 3 verschicken |
| 4 | nur Multiplexer 4 verschicken |
| 5 | nur Multiplexer 5 verschicken |
| 6 | nur Multiplexer 6 verschicken |
| 7 | nur Multiplexer 7 verschicken |
| 8 | nur Multiplexer 8 verschicken |
| 9 | nur Multiplexer 9 verschicken |
| 10 | nur Multiplexer 10 verschicken |
| 11 | alle Multiplexer zyklisch durchiterieren |
| 255 | unplausibel |

### TAB_MB_SENDEN_2

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv, keine Botschaften versenden |
| 1 | nur Multiplexer 1 verschicken |
| 2 | nur Multiplexer 2 verschicken |
| 3 | nur Multiplexer 3 verschicken |
| 4 | nur Multiplexer 4 verschicken |
| 5 | nur Multiplexer 5 verschicken |
| 6 | nur Multiplexer 6 verschicken |
| 7 | nur Multiplexer 7 verschicken |
| 8 | nur Multiplexer 8 verschicken |
| 9 | nur Multiplexer 9 verschicken |
| 10 | nur Multiplexer 10 verschicken |
| 11 | nur Multiplexer 11 verschicken |
| 12 | nur Multiplexer 12 verschicken |
| 13 | nur Multiplexer 13 verschicken |
| 14 | nur Multiplexer 14 verschicken |
| 15 | nur Multiplexer 15 verschicken |
| 16 | alle Multiplexer zyklisch durchiterieren |
| 255 | unplausibel |

### TAB_NV_DATA_RESET_AKKLL

| WERT | TEXT |
| --- | --- |
| 0 | nicht Zurücksetzen |
| 1 | Zurücksetzen |

### TAB_NV_DATA_RESET_VOL

| WERT | TEXT |
| --- | --- |
| 0 | nicht Zurücksetzen |
| 1 | Zurücksetzen |

### TAB_RESET_SBOX

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN_RESET |
| 0x01 | RESET_NV |
| 0x02 | RESET_DIAGNOSE |
| 0x03 | RESET_BEIDE |

### TAB_RINGPUFFER_LADEVORGAENGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladeende detektiert |
| 0x01 | Ziel SOC-erreicht |
| 0x02 | U/I U/I Volladeerkennung |
| 0x03 | Abbruch extern |
| 0x04 | Fehler SME |
| 0xFF | Wert ungültig |

### TAB_SBOX_TAUSCH

| WERT | TEXT |
| --- | --- |
| 0x00 | Zähler nicht verändern |
| 0x01 | Zähler inkrementieren |
| 0x02 | Zähler zurücksetzen (Reset) |

### TAB_SCHUETZE_STEUERN

| WERT | TEXT |
| --- | --- |
| 0 | NICHT_ANSTEUERN |
| 1 | ANSTEUERN_SCHLIESSEN |
| 2 | ANSTEUERN_OEFFNEN |

### TAB_SCHUETZ_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht freigegeben |
| 0x01 | freigegeben |
| 0xFF | nicht definiert |

### TAB_SCHUETZ_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | nicht definiert |

### TAB_SME_ERMITTLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ermittlung läuft nicht |
| 0x01 | Ermittlung läuft: Schnelle Entladungsphase |
| 0x02 | Ermittlung läuft: Langsame Entladungsphase bis SoC min |
| 0x03 | Ermittlung läuft: Ladungsphase bis SoC max |
| 0x04 | Ermittlung erfolgreich beendet |
| 0x05 | Ermittlung mit Fehler beendet |

### TAB_SME_SYMMETRIERUNG_ERGEBNISSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Symmetrierung nicht aktiv, kein Symmetrierbedarf |
| 0x01 | Symmetrierung aktiv |
| 0x02 | Symmetrierung nicht aktiv, Zellen nicht in Ruhepause. 10 min warten. |
| 0x03 | Symmetrierung nicht aktiv, Symmetrierverhinderer aktiv |

### TAB_SME_SYMMETRIERUNG_FERTIG

| WERT | TEXT |
| --- | --- |
| 0x00 | abgeschlossen |
| 0x01 | nicht abgeschlossen |
| 0xFF | Wert ungültig |

### TAB_SP_TYP

| WERT | TEXT |
| --- | --- |
| 0x0001 | SH |
| 0x0002 | SE |
| 0x0003 | SP |
| 0xFFFF | Wert ungültig |

### TAB_STATUS_HVIL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht ok |
| 0x01 | ok |
| 0xFF | nicht definiert |

### TAB_ST_CRSE

| WERT | TEXT |
| --- | --- |
| 0 | kein Crash |
| 1 | Crashschwere 1 |
| 2 | Crashschwere 2 |
| 3 | Crashschwere 3 |
| 4 | Crashschwere 4 |
| 13 | Funktionsschnittstelle nicht verfügbar |
| 14 | Funktion meldet Fehler |
| 15 | Signal unbefüllt (UGBZ) |
| 0xFF | Wert ungültig |

### TAB_ST_SD

| WERT | TEXT |
| --- | --- |
| 0 | offen |
| 1 | geschlossen |
| 2 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_SYM

| WERT | TEXT |
| --- | --- |
| 0x00 | Symmetrierung nicht aktiv, kein Symmetrierbedarf |
| 0x01 | Symmetrierung aktiv |
| 0x02 | Symmetrierung nicht aktiv, Zellen nicht in Ruhephase.10 min warten |
| 0x03 | Symmetrierung nicht aktiv. Symmetrierverhinderer aktiv |

### TAB_SYM_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalmodus |
| 1 | Spannungsgesteuerter Modus |
| 2 | Bitbalancing (Auswertung Cell-SOCs) |
| 3 | Zeitgesteuertes Balancing |
| 4 | Keine Symmetrierung |
| 5 | Entscheidung durch SW, keinen Einfluss durch Steuern-Job |

### TAB_TCORE_PLAUSI

| WERT | TEXT |
| --- | --- |
| 0x00 | T_core und T_term unplausibel |
| 0x01 | T_core plausibel |
| 0x02 | T_term (Ersatzwert bei T_core unplausibel) |
| 0xFF | Rückgabewert unplausibel |

### TAVB_ENABLE_ISENS_FUSI

| WERT | TEXT |
| --- | --- |
| 0 | nicht ansteuern |
| 1 | Stromsensor inaktiv |
| 2 | Einzelschütz-Diagnosemodus |
| 3 | Stromsensor Normalbetrieb |

### TAB_0X6620

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x0011 | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### _TAB_SFTY_I_Q

| WERT | TEXT |
| --- | --- |
| 0 | Signal nicht definiert |
| 1 | Kein Fehler |
| 2 | Fehler aufgetreten |
| 3 | Signal ungültig |
| 4 | Invalid |

### _FORTTEXTEJOB2

| _ORT | _ORTTEXT |
| --- | --- |
| 0x00 | System |
| 0x10 | CAN |
| 0x20 | Voltage of 12-cell module |
| 0x21 | Temperature of NTC_SW1 |
| 0x22 | Temperature of NTC_SW2 |
| 0x23 | Monitoring WUP signal of the SME |
| 0x24 | Reference voltage of the LTC6802-2 |
| 0x25 | Internal temperature of CSC |
| 0x26 | Voltage of the reference voltage divider |
| 0x27 | Voltage at WD |
| 0x28 | Configuration of HW version |
| 0x2A | 5V-Supply |
| 0x2B | Reference Voltage of the LTC6801 |
| 0x30 | BSM |
| 0x31 | BSM: internal temp. |
| 0x32 | BSM: Temp.-Sens 1 |
| 0x33 | BSM: Temp.-Sens 2 |
| 0x34 | BSM: Monitor-Baustein |
| 0x40 | Versorgung |
| 0x50 | Balancing |
| 0x60 | Monitor-Baustein |
| 0x61 | MON: NTC_HW1 |
| 0x62 | MON: NTC_HW2 |
| 0x63 | MON: Hardware Reissleine |
| 0x64 | MON: NTC_HW ALL |
| 0xFF | unknown error |

### _FARTTEXTEJOB2

| _ART | _ARTTEXT |
| --- | --- |
| 0x00 | generic |
| 0x01 | Out of Range Low |
| 0x02 | Out of Range High |
| 0x03 | Bus Off |
| 0x04 | Alive invalid |
| 0x05 | Undervoltage Balancing |
| 0x06 | ADC self-test 1 |
| 0x07 | ADC self-test 2 |
| 0x08 | PEC-Error |
| 0x09 | VUV-Error |
| 0x0A | VOV-Error |
| 0x0B | Thermal shutdown |
| 0x0C | Over-temperature |
| 0x0D | Open connection |
| 0x0E | ROM |
| 0x0F | RAM |
| 0x10 | Bad request |
| 0x11 | Balancing unit defect |
| 0x12 | Compatibility |
| 0x13 | NVM |
| 0x14 | Plausibility check module voltage |
| 0x15 | Plausibility check temperature |
| 0x16 | Time-out communication to Front End |
| 0x17 | Plausibility RAM |
| 0x18 | RAM Adressing |
| 0x19 | Parameter in NVMS |
| 0x20 | Selftest |
| 0x21 | Release line wrongly drawn(PWM ok, RL drawn) |
| 0x22 | Release line wrongly not drwan (PWM nok, RL not drawn) |
| 0xFF | unknown kind of error |

### _FOPTTEXTEJOB2

| _OPT | _OPTTEXT |
| --- | --- |
| 0x00 | no option |
| 0x01 | fault is active |
| 0x02 | fault may be reset by SME-Request |
| 0x80 | fault is permanent, reset only by SME-request |
| 0xFF | invalid option |

### _BALANCIERTEXTEJOB2

| _BAL | _BALTEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv, SME gibt Grenze vor |
| 0x02 | aktiv, SME gibt Bitmap vor |
| 0x03 | aktiv, keine Ansteuerung |
| 0xFF | unbekannte Balancierart |

### _FEHLERMASKENTEXTEJOB2

| _MASK | _MASKTEXT |
| --- | --- |
| 0x00000000 | no CSC error;  |
| 0x00000001 | cell overvoltage occurred;  |
| 0x00000002 | cell undervoltage occurred;  |
| 0x00000004 | temp. sensor 1 out of range high; |
| 0x00000008 | temp. sensor 1 out of range low; |
| 0x00000010 | temp. sensor 2 out of range high; |
| 0x00000020 | temp. sensor 2 out of range low; |
| 0x00000040 | module volt. out of range (high);  |
| 0x00000080 | module volt. out of range (low);  |
| 0x00000100 | open wire detected;  |
| 0x00000200 | open wire at NTC_HW1_FE2 and NTC_HW2_FE2 (Mon); |
| 0x00000400 | Reference voltage of the LTC6802 (BAT) out of range; |
| 0x00000800 | thermal shutdown of Frontend occurred;  |
| 0x00001000 | invalid request from SME received;  |
| 0x00002000 | undervoltage during balancing;  |
| 0x00004000 | Wakeup ISO defective;  |
| 0x00008000 | PEC, Alive of frontend incorrect, communication timeout to frontend;  |
| 0x00010000 | Reference voltage of the LTC6801 (MON) out of range;  |
| 0x00020000 | CAN-Bus off detected;  |
| 0x00040000 | ADC-self-test 1 of LTC6802 failed;  |
| 0x00080000 | ADC-self-test 2 of LTC6802 failed;  |
| 0x00100000 | Self-test of LTC6801 failed;  |
| 0x00200000 | RAM-Test failed;  |
| 0x00400000 | ROM-Test failed;  |
| 0x00800000 | T1 open wire detected;  |
| 0x01000000 | T2 open wire detected;  |
| 0x02000000 | Ucell plausibility error;  |
| 0x04000000 | T plausibility error;  |
| 0x08000000 | critical HW defect, shut-off required;  |
| 0x10000000 | open connection not yet tested;  |
| 0x20000000 | release line wrongly drawn; |
| 0x40000000 | release line wrongly not drawn; |
| 0xFFFFFFFF | unknown error |

### _FARTTEXTE

| _ART | _ARTTEXT |
| --- | --- |
| 0x00 | generic |
| 0x01 | Out of Range Low |
| 0x02 | Out of Range High |
| 0x03 | Bus Off |
| 0x04 | Alive invalid |
| 0x05 | Undervoltage Balancing |
| 0x06 | ADC Selftest 1 |
| 0x07 | ADC Selftest 2 |
| 0x08 | CRC-Error |
| 0x09 | VUV-Error |
| 0x0A | VOV-Error |
| 0x0B | Thermal shutdown FE Bottom |
| 0x0C | Over-temperature |
| 0x0D | Open connection |
| 0x0E | ROM |
| 0x0F | RAM |
| 0x10 | Bad request |
| 0x11 | Balancing unit defect |
| 0x12 | Compatibility |
| 0x13 | NVM |
| 0x14 | Plausibility check module voltage |
| 0x15 | Plausibility check temperature |
| 0x16 | Time-out communication to Frontend |
| 0x17 | Plausibility RAM |
| 0x18 | RAM Adressing |
| 0x19 | Parameter in NVMS |
| 0x1A | Config-Data in NVMS |
| 0x20 | Selftest |
| 0x21 | Release line wrongly drawn (PWM ok, RL drawn) |
| 0x22 | Release line wrongly not drwan (PWM nok, RL not drawn) |
| 0x23 | Thermal shutdown FE Top |
| 0x24 | VUV module voltage FE Bottom |
| 0x25 | VUV module voltage FE Top |
| 0x26 | Frontend register |
| 0x27 | Frontend failure during measurement |
| 0x28 | MPU: RAM |
| 0x29 | MPU: ROM |
| 0x2A | Stack: Underflow |
| 0x2B | Stack: Overflow |
| 0x2C | COP |
| 0x2D | Program-Flow-Monitoring |
| 0x2E | Short to Ground |
| 0x2F | NSC FE Customer Checksum |
| 0x30 | AoU RX CRC Fault |
| 0x31 | AoU Win Comp Fault Test |
| 0x32 | AoU 4V5 Reference voltage |
| 0x33 | NSC FE Factory Checksum Test |
| 0x34 | ECC Failure (ROM execute) |
| 0x35 | HW Plausi: CSC-HW-Version and FE-Version incompatible |
| 0x36 | 1V8 Reference voltage |
| 0x37 | ECC Failure (RAM) |
| 0x38 | Illegal Opcode |
| 0x39 | Not handled reset-cause |
| 0x40 | Addressing |
| 0x41 | MPU Test RAM (during startup) failed |
| 0x42 | MPU Test ROM (during startup) failed |
| 0x43 | RL-Test failed |
| 0x44 | Development: Time-out communication to Frontend  |
| 0x45 | ECC Failur (ROM read) |
| 0x47 | ECC Test RAM (during startup) failed |
| 0x48 | ECC Test ROM read (during startup) failed |
| 0x49 | ECC Test ROM execute (during startup) failed |
| 0xFF | Unknown kind of error |

### _FORTTEXTE

| _ORT | _ORTTEXT |
| --- | --- |
| 0x00 | System |
| 0x10 | CAN |
| 0x20 | Voltage of cell module |
| 0x21 | Voltage of Temp.-Sens NTC1 |
| 0x22 | Voltage of Temp.-Sens NTC2 |
| 0x23 | Monitoring WUP signal of the SME |
| 0x24 | Reference voltage of Frontend |
| 0x25 | Internal temperature of CSC |
| 0x26 | Voltage of the reference voltage divider |
| 0x27 | Voltage of PreReg1 |
| 0x28 | Configuration of HW version |
| 0x29 | Voltage of PreReg2 |
| 0x2A | uC-Supply |
| 0x2C | Voltage of Temp.-Sens NTC3 |
| 0x2D | Voltage of Temp.-Sens NTC4 |
| 0x2E | 5V3 Frontend |
| 0x2F | Vref 3V3 |
| 0x30 | BSM |
| 0x31 | BSM: internal Temp. bottom FE |
| 0x32 | BSM: Temp.-Sens NTC1 |
| 0x33 | BSM: Temp.-Sens NTC2 |
| 0x34 | BSM: Monitor-Frontend Bottom |
| 0x35 | BSM: internal Temp. top FE |
| 0x36 | BSM: Temp.-Sens NTC3 |
| 0x37 | BSM: Temp.-Sens NTC4 |
| 0x38 | BSM: Monitor-Frontend TOP |
| 0x40 | Supply |
| 0x50 | Balancing |
| 0x60 | Monitor-Frontend |
| 0x61 | MON: NTC5 |
| 0x63 | MON: Hardware Release line |
| 0x70 | NSC Frontend |
| 0x71 | Internal Temp of analog die NSC Frontend |
| 0x72 | Internal Temp of digital die NSC Frontend |
| 0x73 | Daisy Chain |
| 0x80 | DEM (MCAL) -> no direct system-reaction! (Info-Entry) |
| 0xFE | Error not valid |
| 0xFF | Unknown kind of error |

### _FOPTTEXTE

| _OPT | _OPTTEXT |
| --- | --- |
| 0x00 | no option |
| 0x01 | fault is active |
| 0x02 | fault may be reset by SME-Request |
| 0x80 | fault is permanent, reset only by SME-request |
| 0xFF | invalid option |

### _BALANCIERTEXTE

| _BAL | _BALTEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv, SME gibt Spannungs-Grenze vor |
| 0x02 | aktiv, SME gibt Bitmap vor |
| 0x03 | aktiv, SME gibt Zeit vor |
| 0xFF | unbekannte Balancierart |

### _FEHLERMASKENTEXTE

| _MASK | _MASKTEXT |
| --- | --- |
| 0x00000000 | no CSC error;  |
| 0x00000001 | at least one Cell Voltage is out of range (OOR) high;  |
| 0x00000002 | at least one Cell Voltage is out of range (OOR) low;  |
| 0x00000004 | at least one of the temperature sensors is OOR high;  |
| 0x00000008 | at least one of the temperature sensors is OOR low;  |
| 0x00000010 | Frontend internal failure;  |
| 0x00000020 | Not assigned (frei) ;  |
| 0x00000040 | module voltage OOR high;  |
| 0x00000080 | module voltage OOR low;  |
| 0x00000100 | at least at one Cell an open connection is detected;  |
| 0x00000200 | open wire NTC_3 (NTC_MON);  |
| 0x00000400 | Reference voltage 3V3 OOR (µC-ADC-Reference);  |
| 0x00000800 | Frontend overtemperature detected;  |
| 0x00001000 | invalid request received;  |
| 0x00002000 | lowest balancing voltage reached;  |
| 0x00004000 | WakeUp (WUP_ISO) defect;  |
| 0x00008000 | Failure in FE-Communication (Timeout, CRC-Failure, Adressing DC);  |
| 0x00010000 | short to GND NTC_3 (NTC_MON);  |
| 0x00020000 | CAN-bus-off detected;  |
| 0x00040000 | Not assigned (frei) ;  |
| 0x00080000 | Not assigned (frei) ;  |
| 0x00100000 | failure in Monitor Frontend (Fault Line) not used in NSC;  |
| 0x00200000 | RAM failure detected;  |
| 0x00400000 | ROM failure detected;  |
| 0x00800000 | at least on one temp sensor (NTC_BAT) open wire detected;  |
| 0x01000000 | at least one temp sensor (NTC_BAT) short to GND;  |
| 0x02000000 | U plausibility error (module voltage « S cell voltages) ;  |
| 0x04000000 | Temp plausibility error;  |
| 0x08000000 | critical HW defect, shut-off required;  |
| 0x10000000 | Start-up-test not yet done;  |
| 0x20000000 | Not assigned (frei) ;  |
| 0x40000000 | Not assigned (frei) ;  |
| 0x80000000 | Not assigned (frei) ;  |
| 0xFFFFFFFF | unknown error;  |

### _FFOLTEXTE

| _FOL | _FOLTEXT |
| --- | --- |
| 0x00 | no option |
| 0x01 | just an info-entry |
| 0x02 | no measurement-results |
| 0x03 | SME had to switch off |
| 0x04 | fault generated a self-reset |
| 0x20 | no T-measurement possible |
| 0x40 | no U-measurement possible |
| 0x80 | not a selfhealing fault |
| 0xFF | invalid option |
