# eme_f18.prg

## General

|  |  |
| --- | --- |
| File | eme_f18.prg |
| Type | PRG |
| Jobs | 44 |
| Tables | 216 |
| Origin | BMW EA-441 Stefan_Blaskovic |
| Revision | 9.000 |
| Author | BMW EA-414 Dan |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotor Elektronik |  |  |
| ORIGIN | string | BMW EA-441 Stefan_Blaskovic |  |  |
| REVISION | string | 9.000 |  |  |
| AUTHOR | string | BMW EA-414 Dan |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.982 |  |  |
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

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

_No arguments._

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

### _STATUS_BUILD_ID

Gibt die Software-Id zurück (EntwicklerJob)

_No arguments._

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME, EME20, AE, REME, EMET, EMEZ ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### _STATUS_RESETINFO_LESEN

Auslesen der aktuellen bzw. abgespeicherten ResetInformationen

| Name | Type | Description |
| --- | --- | --- |
| CONTROLLER | int | 0 ==> MC0 1 ==> MC2 |
| SLOTNR | int | gewuenschter ResetInformation 0 ==> aktuell 255 ==> letzter abgespeicherter Datensatz 1..64 ==> Datensatz 1..64 Defaultwert: DEFAULT (DefaultMode) |

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

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
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
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
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
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

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIENNUMMER | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | Seriennummer (10 Zeichen) |
| JAHR | HEX | high | unsigned char | - | - | - | - | - | - | - | JAHR in HEX-Format  Bsp.: 15.12.2011 JAHR=0x11 |
| MONAT | HEX | high | unsigned char | - | - | - | - | - | - | - | MONAT in HEX-Format  Bsp.: 15.12.2011 MONAT=0x12 |
| TAG | HEX | high | unsigned char | - | - | - | - | - | - | - | TAG in HEX-Format  Bsp.: 15.12.2011 TAG=0x15 |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = nicht definiert 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | HEX | high | unsigned char | - | - | - | - | - | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0-62 = Nummer des Sensors 63 - 255  = nicht definiert |
| GAIN | HEX | high | unsigned long | - | - | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| OFFSET | HEX | high | unsigned long | - | - | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |
| EXPONENT | - | high | unsigned long | - | - | 100000.0 | 1.0 | 0.0 | - | - | Zusätzliche Skalierung |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor |
| SENSOR_BLOCK | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK | - | - | - | - | - | Sensor-Block, der geschrieben werden soll 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |

### ARG_0X400F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Hardwarekalibrationsmode setzen (0/1): 0 = keine Aktion 1 = Hardwarekalibrationsmode |

### ARG_0XADC0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_START_LADEN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ladestart anfordern = 1; keine Anforderung = 0 |

### ARG_0XADC1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_STOP_LADEN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ladestopp anfordern = 1; keine Anforderung = 0 |

### ARG_0XADC4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REX_SOLL_LEISTUNG | + | - | W | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 4000.0 | 28000.0 | Sollleistung, die der Motor liefern soll |
| REX_SOLL_DREHZAHL | + | - | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2200.0 | 4300.0 | Solldrehzahl, die der Motor fahren soll. |

### ARG_0XADC9_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWP_ANST_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Ansteuerwert in % (0 - 100%) |
| STAT_EWP_TO_ANST_WERT | + | - | s | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | 0.0 | 510.0 | Timeout elektrische Wasserpumpe (0-510s) |

### ARG_0XADEB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEREICH_DREHZAHL | + | - | 0-n | high | unsigned char | - | TAB_LAST_EMASCHINE | - | - | - | - | - | Auswahl Drehzahl Bereich |

### ARG_0XADED_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_LEISTUNGSMESSUNG_PHEV | + | - | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_SETZEN | - | - | - | - | - | Auswahl Modus für Leistungsmessung PHEV |

### ARG_0XADF1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_DCDC_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_DCDC_ANF | - | - | - | - | - | Anforderung Betriebsart DCDC |
| ST_B_DIAG_DCDC | + | - | 0-n | high | unsigned char | - | TAB_ST_B_DIAG_DCDC | - | - | - | - | - | Auswahl der Systemgrenze |
| I_DIAG_DCDC_LV_OUT | + | - | A | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -200.0 | 200.0 | LV Strom Systemgrenze |
| I_DIAG_DCDC_HV_OUT | + | - | A | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | HV Strom Systemgrenze |
| U_DIAG_DCDC_LV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 33.0 | LV Spannung Systemgrenze |
| U_DIAG_DCDC_HV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | HV Spannung Systemgrenze |

### ARG_0XADF2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_HV_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_HV_ANF | 1.0 | 1.0 | 0.0 | - | - | Anforderung HV |

### ARG_0XADF4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XADF9_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HISTOGRAMM_NR | + | - | 0-n | high | unsigned char | - | TAB_AE_DCDC_HISTOGRAMM | - | - | - | - | - | Histogramm das angefordert wird: 0 = PHistoF 1 = PHistoL 2 = T1HistoF 3 = T1HistoL 4 = T2HistoF 5 = T2HistoL 6 = T3HistoF 7 = T3HistoL 8 = T4HistoF 9 = T4HistoL 10 = rUtil 11 = rUtilF |

### ARG_0XADFB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_WERKSMODUS_PHEV | + | - | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV | - | - | - | - | - | Werksmodus PHEV setzen |

### ARG_0XADFC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SATZ | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des auszulesenden Satzes der Ladehistorie. |

### ARG_0XADFE_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LW_KLASSEN_GANG | + | - | 0-n | high | unsigned char | - | TAB_LW_KLASSEN | - | - | - | - | - | LW Klassen vom Gang |

### ARG_0XAE04_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLMITTEL_TEMPERATUR_KLASSE | + | - | 0-n | high | unsigned char | - | TAB_KUEHLMITTEL_TEMPERATUR_KLASSE | - | - | - | - | - | Bewertet Nutzung des Zwischenkreiskondensators in Abhängigkeit des RMS-Stroms, DC-Spannung und Kühlmitteltemperatur |

### ARG_0XAF42_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HISTOGRAMM_SLE_NR | + | - | 0-n | high | unsigned char | - | TAB_LADEGERAET_HISTOGRAMM | - | - | - | - | - | Auswahl des Histogrammtyps |

### ARG_0XDE07_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE08_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE09_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE0A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZAHL_BREMSBETAETIGUNG | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Bremsbetätigungen der ELUP |
| LAUFZEIT_ELUP | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Laufzeit der ELUP |
| ANLAEUFE_ELUP | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Anläufe der ELUP |

### ARG_0XDE1F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_ZSEBATT_REG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Keine Anforderung , 1 - ZSE-Batterie-Tausch registrieren |

### ARG_0XDE20_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_SZE_WERTELOESCHEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Keine Anforderung , 1 - Werte ZSE-Batterie zurücksetzen |

### ARG_0XDE23_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN | - | - | - | - | - | Vorgabe: 0 - Job inaktiv; 1  - Job aktiv & Ventil öffnen; 2 - Job aktiv & Ventil schliessen |

### ARG_0XDE93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |

### ARG_0XDEA1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy Eintrag, da kein Argument benötigt |

### ARG_0XDEAE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy Eintrag, da kein Argument benötigt |

### ARG_0XDEB1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | high | signed int | - | - | 1.0 | 0.0055 | 0.0 | - | - | Resolver Offset Winkel |

### ARG_0XDEB2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEDF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B_DERATING_HISTO_RESET_EM1 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Durchführen Rücksetzen UI Histogramm EM1 (0 = nicht rücksetzen; 1 = rücksetzen) |

### ARG_0XDEE0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B_DERATING_HISTO_RESET_EM2 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Durchführen Rücksetzen UI Histogramm EM2 (0 = nicht rücksetzen; 1 = rücksetzen) |

### ARG_0XDEE5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_CODE_LW | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Nicht löschen / 1 = Löschen |

### ARG_0XDF45_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SET_AC_I_LIMIT_LOW | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_LOW | - | - | - | - | - | Einstellung Stromgrenze AC_LOW |
| STAT_SET_AC_I_LIMIT_HIGH | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_HIGH | - | - | - | - | - | Einstellung Stromgrenze AC_HIGH |

### ARG_0XDF50_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BA_WERKLDMODUS | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | - | - | Auswahl des Lademodus Werk |
| STAT_SOC_ANF_WERKLADEMODUS | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Geforderter SOC Endwert HV-Batterie beim Lademodus Werk |

### ARG_0XDF51_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

### ARG_0XDF52_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | HEX | high | unsigned long | - | - | - | - | - | - | - | 3-Byte Chiffetext vom Resolver Offset Winkel |

### ARG_0XDF5C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Schwingungdämpfung: 0 = nicht deaktivieren; 1 = deaktivieren |

### ARG_0XDF5D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Aktion: 0 = nicht zurücksetzen; 1 = zurücksetzen |

### ARG_0XDFB4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_HIST_SLE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen der Histogramme: 0 = Keine Aktion; 1 = Reset |

### ARG_0XDFD6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Aktion: 0 = Nicht löschen; 1 = NVRAM löschen |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEF_VERFAHREN | + | - | 0-n | high | unsigned char | - | TAB_PRUEF_VERFAHREN | - | - | - | - | - | Verfahren zur Absicherung des nicht-flüchtigen Speichers |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | + | - | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | + | - | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0-62 = Nummer des Sensors 63 - 255  = nicht definiert |

### ARG_0XF012_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_SATZ | + | - | 0-n | high | unsigned char | - | TAB_AKS_INFO_SATZ | - | - | - | - | - | Selektiere den entsprechenden Eintrag aus dem Ringpuffer: 0= 1.Satz 1= 2.Satz 2= 3.Satz 3= 4. Satz |

### BF_SYSSTATE_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_KL15WUP_1 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Klemmenzustand (bitcodiert): Bit1 = Kl15WUP |
| STAT_SYSSTATE_KL30B_2 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Klemmenzustand (bitcodiert): Bit2 = KL30B |
| STAT_SYSSTATE_KL30C_3 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Klemmenzustand (bitcodiert): Bit3 = KL30C |

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
| 0x023A00 | Energiesparmode aktiv | 0 | - |
| 0x02FF3A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030FAD | DC/DC-Wandler - Hardware - defekt | 0 | - |
| 0x222008 | Sensorfehler, Messwerterfassung, Winkelgeber/Drehzahlgeber defekt | 0 | - |
| 0x22200B | Messwerterfassung, Hardwarekalibrationswerte, eine bzw. mehrere Werte fehlen auf dem MC0 | 0 | - |
| 0x22200C | Messwerterfassung, Hardwarekalibrationswerte, eine bzw. mehrere Werte fehlen auf dem MC2 | 0 | - |
| 0x22200F | Qualfierueberwachung, Signalausfall Intern | 0 | - |
| 0x222010 | Qualfierueberwachung, Signalausfall Resolver | 0 | - |
| 0x222012 | Messwerterfassung, Hardwarekalibrationswerte, CRC Fehler MC0 | 0 | - |
| 0x222013 | Messwerterfassung, Hardwarekalibrationswerte, CRC Fehler MC2 | 0 | - |
| 0x222014 | Sensorfehler, Messwerterfassung, Resolver Winkel | 0 | - |
| 0x222015 | Sensorfehler, Messwerterfassung, Resolver Drehzahl | 0 | - |
| 0x222020 | Fehler Rotolagesensor , Parity Bit aktiv | 0 | - |
| 0x222021 | Fehler Rotolagesensor , Phasendifferenz zwischen Sin und Cos Eingang überschreitet Schwelle | 0 | - |
| 0x222022 | Fehler Rotolagesensor , Drehzahl überschreitet Schwelle | 0 | - |
| 0x222023 | Fehler Rotolagesensor , Tracking Error überschreitet LOT Schwelle | 0 | - |
| 0x222029 | Fehler Rotolagesensor , Amplituden-Differenz zwischen Sin und Cos Eingang überschreitet DOS Mismatch Schwelle | 0 | - |
| 0x22202A | Fehler Rotolagesensor , Sin und/oder Cos Amplituden überschreiten  DOS Schwelle | 0 | - |
| 0x22202B | Fehler Rotolagesensor , Sin und/oder Cos Amplituden unterschreiten LOS Schwelle | 0 | - |
| 0x22202C | Fehler Rotolagesensor , Kurzschluss von Sin und/oder Cos Eingang nach Masse oder Ubat | 0 | - |
| 0x22202F | Erkennung der ungültigen Anforderung der Betriebsart der EM. | 0 | - |
| 0x222200 | DCDC, Hardware, Bauteilschutz, Unplausibler DutyCycle in Tiefsetzsteller 1 | 0 | - |
| 0x222201 | DCDC, Hardware, Bauteilschutz, Unplausibler DutyCycle in Tiefsetzsteller 2 | 0 | - |
| 0x222202 | DCDC, Hardware, Bauteilschutz, Überschreitung max. LV-Strom | 0 | - |
| 0x222203 | DCDC, Bauteilschutz, Überstrom I_LV redundante Messung | 0 | - |
| 0x222204 | DCDC, Hardware, Bauteilschutz, Unplausibler Resonanzstrom | 0 | - |
| 0x222205 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom im Resonanzkreis | 0 | - |
| 0x222206 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom in Tiefsetzsteller Phase 1 | 0 | - |
| 0x222207 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom in Tiefsetzsteller Phase 2 | 0 | - |
| 0x222208 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp GR1 | 0 | - |
| 0x222209 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GR2 | 0 | - |
| 0x22220A | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW HS1 | 0 | - |
| 0x22220B | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW HS2 | 0 | - |
| 0x22220C | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW LS1 | 0 | - |
| 0x22220D | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW LS2 | 0 | - |
| 0x22220E | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Diode TS1 | 0 | - |
| 0x22220F | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter TS1 | 0 | - |
| 0x222210 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Diode TS2 | 0 | - |
| 0x222211 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter TS2 | 0 | - |
| 0x222212 | DCDC, Hardware, Bauteilschutz, Überschreitung der max. Board-Temperatur | 0 | - |
| 0x222213 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Gleichrichters | 0 | - |
| 0x222214 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Gegentaktwandlers | 0 | - |
| 0x222215 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Tiefsetzstellers | 0 | - |
| 0x222216 | DCDC, Hardware, Bauteilschutz, Unplausibles Übersetzungsverhältnis GTW | 0 | - |
| 0x222217 | DCDC, Hardware, Bauteilschutz, GateTreiberVersorgung | 0 | - |
| 0x222218 | DCDC, Hardware, Bauteilschutz, Überschreitung max. LV-Spannung | 0 | - |
| 0x222219 | DCDC, Bauteilschutz, Überspannung U_LV redundante Messung | 0 | - |
| 0x22221A | DCDC, Hardware, Bauteilschutz, Überschreitung max. Grenzspannung am Tiefsetzstellerausgang | 0 | - |
| 0x22221B | DCDC, Hardware, Bauteilschutz, Unplausibler Wirkungsgrad | 0 | - |
| 0x22221C | DCDC, Überwachung, Fehler Masseanbindung_Notlauf | 0 | - |
| 0x22221D | DCDC, Überwachung, Spannung auf HV-Seite zu niedrig | 0 | - |
| 0x22221E | DCDC, Überwachung, Spannung auf HV-Seite zu hoch | 0 | - |
| 0x22221F | DCDC, ProtectionHandler, Strom auf LV-Seite zu hoch | 0 | - |
| 0x222220 | DCDC, ProtectionHandler, Spannung auf LV-Seite zu hoch | 0 | - |
| 0x222221 | DCDC, Überwachung, Fehler HW-Regler, Sollwerte werden nicht eingeregelt | 0 | - |
| 0x222222 | DCDC, Messwertüberprüfung, Fataler Fehler in Messwerterfassung I_LV | 0 | - |
| 0x222223 | DCDC, Messwertüberprüfung, Fataler Fehler in Messwerterfassung U_LV | 0 | - |
| 0x222224 | DCDC, Messwertüberprüfung, Fehler in Messwerterfassung_Notlauf möglich | 0 | - |
| 0x222225 | DCDC, Unzulässige MC6 Software Version | 0 | - |
| 0x222226 | interner Sensor DCDC; Trafo-Strom unplausibel zu hoch | 0 | - |
| 0x222227 | interner Sensor DCDC; Trafostrom unplausibel zu niedrig | 0 | - |
| 0x222228 | interner Sensor DCDC; Gefilterter Trafostrom unplausibel zu niedrig | 0 | - |
| 0x222229 | interner Sensor DCDC; Tiefsetzsteller-Strom 1 unplausibel zu hoch | 0 | - |
| 0x22222A | interner Sensor DCDC; Tiefsetzsteller-Strom 1 unplausibel zu niedrig | 0 | - |
| 0x22222B | interner Sensor DCDC; Tiefsetzsteller-Strom 2 unplausibel zu hoch | 0 | - |
| 0x22222C | interner Sensor DCDC; Tiefsetzsteller-Strom 2 unplausibel zu niedrig | 0 | - |
| 0x22222D | interner Sensor DCDC; Gleichrichter Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22222E | interner Sensor DCDC; Gleichrichter  Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22222F | interner Sensor DCDC; Gleichrichter  Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222230 | interner Sensor DCDC; Gegentaktwandler Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222231 | interner Sensor DCDC; Gegentaktwandler Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222232 | interner Sensor DCDC; Gegentaktwandler Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222233 | interner Sensor DCDC; PCB Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222234 | interner Sensor DCDC; PCB Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222235 | interner Sensor DCDC; PCB  Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222236 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222237 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222238 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222239 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22223A | interner Sensor DCDC; LV - Spannungssensor unplausibel zu hoch | 0 | - |
| 0x22223B | interner Sensor DCDC; LV - Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x22223C | DCDC, SPI Kommunikation, Controller- nach DCDC-Board fehlerhaft | 0 | - |
| 0x22223D | DCDC, SPI Kommunikation, DCDC- nach Controller-Board fehlerhaft | 0 | - |
| 0x22223E | DCDC, CAN-Überprüfung, Fehlerhafte Kommandierung | 0 | - |
| 0x22223F | DCDC, Hardware, Bauteilschutz, Überschreitung max. Trafostrom, Hardware-Intterupt | 0 | - |
| 0x222240 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Tiefsetzsteller-Strom1, Hardware-Intterupt | 0 | - |
| 0x222241 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Tiefsetzsteller-Strom2, Hardware-Intterupt | 0 | - |
| 0x222275 | DCDC, Überwachung, Alterung Masseband Anbindung | 0 | - |
| 0x222276 | DCDC, Überwachung, Alterung Masseband Anbindung und starke Derating des DCDC-Stroms  | 0 | - |
| 0x222277 | DCDC, Überwachung, Massefehler, Kurzschluss nach Masse | 0 | - |
| 0x222300 | Plausibilität Diagnose RRD inverter temperatur phase U untere Limit unterschritten | 0 | - |
| 0x222301 | Plausibilität Diagnose RRD inverter temperatur phase U obere Limit überschritten | 0 | - |
| 0x222302 | Plausibilität Diagnose RRD inverter temperatur phase V untere Limit unterschritten | 0 | - |
| 0x222303 | Plausibilität Diagnose RRD inverter temperatur phase V obere Limit überschritten | 0 | - |
| 0x222304 | Plausibilität Diagnose RRD inverter temperatur phase W untere Limit unterschritten | 0 | - |
| 0x222305 | Plausibilität Diagnose RRD inverter temperatur phase W obere Limit überschritten | 0 | - |
| 0x222306 | Plausibilität Diagnose GSC inverter gatedriver Temperatur obere Limit überschritten | 0 | - |
| 0x222307 | Plausibilität Diagnose GSC inverter gatedriver Temperatur untere Limit unterschritten | 0 | - |
| 0x22230A | Temperatur der Inverterphasen U oder V nicht plausibel | 0 | - |
| 0x22230B | Temperatur der Inverterphasen V oder W nicht plausibel | 0 | - |
| 0x22230C | Temperatur der Inverterphasen U oder W nicht plausibel | 0 | - |
| 0x22230D | mindestens zwei der drei Invertertemperatursensoren sind fehlerhaft | 0 | - |
| 0x222310 | Inverter, Temperatur ungültig, nicht kompensierbar | 0 | - |
| 0x222312 | Inverter, Dauerhafte Übertemperatur IGBT/Diode | 0 | - |
| 0x222313 | Inverter, Erhöhte Temperaturspreizung Platine zu IGBT/Diode | 0 | - |
| 0x222314 | Inverter, Dauerhafte Übertemperatur NTC | 0 | - |
| 0x222315 | Inverter, Dauerhafte Übertemperatur Kühlmittel | 0 | - |
| 0x222317 | Inverter, DC Überstrom erkannt | 0 | - |
| 0x222318 | Inverter, Dauerhafte Übertemperatur am Gatetrieber | 0 | - |
| 0x222319 | Inverter, Übertragener Kühlmittelvolumenstrom unterhalb zulässiger Schwelle | 0 | - |
| 0x22231A | Plausibilität Diagnose Zwischenkreisspannung SRD obere Schwelle überschritten | 0 | - |
| 0x22231B | Plausibilität Diagnose Zwischenkreisspannung SRD untere Schwelle unterschritten | 0 | - |
| 0x22231C | Plausibilität Diagnose MBD DC-Strom sensor obere Schwelle überschritten | 0 | - |
| 0x22231D | Plausibilität Diagnose CCD DC-Strom sensor untere Schwelle unterschritten | 0 | - |
| 0x22231E | Wirkungsgradüberwachung MBD DC-Current sensor obere Schwelle überschritten | 0 | - |
| 0x22231F | Wirkungsgradüberwachung MBD DC-Current sensor untere Schwelle unterschritten | 0 | - |
| 0x222320 | Interne EME-Temperatur Leistungselektronik Pulswechselrichter: Obere Temperaturschwelle überschritten | 0 | - |
| 0x222321 | EME, Stromsensor Phase U: Überstrom oder Sensor defekt | 0 | - |
| 0x222322 | EME, Stromsemnsor Phase V: Überstrom oder Sensor defekt | 0 | - |
| 0x222323 | EME, Stromsemnsor Phase W: Überstrom oder Sensor defekt | 0 | - |
| 0x2223AE | Plausibilität Diagnose CCD GDRV Temperature untere- oder obere Schwelle verletzt. | 0 | - |
| 0x2223B3 | Inverter, E-Maschine Rotolagesensor , Kurzschluss der Sinus- oder der Cosinus Spule/Leitung nach Masse | 0 | - |
| 0x2223B4 | Inverter, E-Maschine Rotolagesensor , Kurzschluss der Sinus- oder der Cosinus Spule/Leitung nach Plus | 0 | - |
| 0x2223B5 | Inverter, E-Maschine Rotolagesensor , Kurzschluss der Erreger Spule/Leitung nach Masse oder Plus | 0 | - |
| 0x2223B6 | Inverter, E-Maschine Rotolagesensor ,Offene Leitung oder Kabelbruch der Sinus, Cosinus oder Erreger Spule/Leitung | 0 | - |
| 0x222500 | interne Ladeelektronik; Charge_Enable Signal nicht vorhanden. | 0 | - |
| 0x222501 | interne Ladeelektronik; AC-Spannung wird nicht gemessen. (Sensordefekt oder Kabelschaden) | 0 | - |
| 0x222502 | interne Ladeelektronik; HV-Spannung zu gering. (Sensordefekt oder Verbindungsschaden) | 0 | - |
| 0x222505 | interne Ladeelektronik;Laden nicht möglich; | 0 | - |
| 0x222506 | SLE, SPI Kommunikation, Lader- nach Controller-Board fehlerhaft | 0 | - |
| 0x222507 | SLE, SPI Kommunikation, Controller- nach Lader-Board fehlerhaft | 0 | - |
| 0x22250D | SLE, Übertemperaturerkennung LLC Trafonsformator, max. Wert überschritten | 0 | - |
| 0x222510 | interne Ladeelektronik; AC-Spannungssensor unplausibel zu hoch | 0 | - |
| 0x222511 | interne Ladeelektronik; AC-Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x222512 | interne Ladeelektronik; DC (HV)-Spannungssensor unplausibel zu hoch | 0 | - |
| 0x222513 | interne Ladeelektronik; DC (HV)-Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x222514 | interne Ladeelektronik; PFC-Kondensator-Spannungssensor unplausibel zu hoch | 0 | - |
| 0x222515 | interne Ladeelektronik; PFC-Kondensator-Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x222518 | interne Ladeelektronik; DC (HV)-Stromsensor unplausibel zu hoch | 0 | - |
| 0x222519 | interne Ladeelektronik; DC (HV)-Stromsensor unplausibel zu niedrig | 0 | - |
| 0x22251A | interne Ladeelektronik; PFC1 Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22251B | interne Ladeelektronik; PFC1 Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22251C | interne Ladeelektronik; PFC1 Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22251D | interne Ladeelektronik; PFC2Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22251E | interne Ladeelektronik; PFC2Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22251F | interne Ladeelektronik; PFC2Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222520 | interne Ladeelektronik; PFC3Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222521 | interne Ladeelektronik; PFC3Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222522 | interne Ladeelektronik; PFC3Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222523 | interne Ladeelektronik; TransistorTemperatursensor unplausibel zu hoch | 0 | - |
| 0x222524 | interne Ladeelektronik; TransistorTemperatursensor unplausibel zu niedrig | 0 | - |
| 0x222525 | interne Ladeelektronik; TransistorTemperatursensor unplausibel zu niedrig | 0 | - |
| 0x222526 | interne Ladeelektronik; HV (Drossel)Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222527 | interne Ladeelektronik; HV (Drossel)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222528 | interne Ladeelektronik; HV (Drossel)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222529 | interne Ladeelektronik; HV (Zwischenkreis)Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22252A | interne Ladeelektronik; HV (Zwischenkreis)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22252B | interne Ladeelektronik; HV (Zwischenkreis)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22252C | interne Ladeelektronik; Leistungsreduktion (Lader kann nicht mehr die Solleistung liefern) | 0 | - |
| 0x22252D | interne Ladeelektronik; Kein Laden möglich | 0 | - |
| 0x22252E | interne Ladeelektronik; Bauteilschutz verhindert das Laden | 0 | - |
| 0x22252F | interne Ladeelektronik; SPI Kommunikation unterbrochen | 0 | - |
| 0x222532 | interne Ladeelektronik; Frequenz nicht zulässig | 0 | - |
| 0x222533 | interne Ladeelektronik; Iststrom ist kleiner als Sollstrom | 0 | - |
| 0x222534 | interne Ladeelektronik; Iststrom ist größer als Sollstrom | 0 | - |
| 0x222535 | interne Ladeelektronik; Istspannung ist kleiner als Sollspannung | 0 | - |
| 0x222536 | interne Ladeelektronik; Istspannung ist größer als Sollspannung | 0 | - |
| 0x222537 | SLE, Hardware, Bauteilschutz, Sammelfehler | 0 | - |
| 0x22260C | interner Fehler, AEPH, Zwischenkreisspannung oberen Grenzwert überschritten | 0 | - |
| 0x22260D | interner Fehler, AEPH, Zwischenkreisspannung unteren Grenzwert unterschritten | 0 | - |
| 0x22260E | interner Fehler, AEPH, Gatetreiber Zwischenkreisspannung oberen Grenzwert überschritten | 0 | - |
| 0x22260F | interner Fehler, AEPH, Gatetreiber Zwischenkreisspannung unteren Grenzwert unterschritten | 0 | - |
| 0x22261E | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC0 oberen Grenzwert überschritten | 0 | - |
| 0x22261F | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC0 unteren Grenzwert unterschritten | 0 | - |
| 0x222620 | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC2 oberen Grenzwert überschritten | 0 | - |
| 0x222621 | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC2 unteren Grenzwert unterschritten | 0 | - |
| 0x222624 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC2 oberen Grenzwert überschritten | 0 | - |
| 0x222625 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC2 unteren Grenzwert unterschritten | 0 | - |
| 0x222626 | HW-AKS aktiv, Angefordert durch FUSI, BTS oder Hardwareschaltung | 1 | - |
| 0x222627 | HW-Freilauf aktiv, Angefordert durch FUSI, BTS oder Hardwareschaltung | 1 | - |
| 0x222628 | interner Fehler, AEPH, Temperatur auf dem Digitalboard, Boardmitte oberen Grenzwert überschritten | 0 | - |
| 0x222629 | interner Fehler, AEPH, Temperatur auf dem Digitalboard, Boardmitte unteren Grenzwert unterschritten | 0 | - |
| 0x22262A | Über HVSM ausgelöster AKS ausgelesen über Rückleseleitung von CPLD | 0 | - |
| 0x22262B | Über Komperatur ermittelte Überspannung. Ermittelt über Rückleseleitung des CPLD | 0 | - |
| 0x22262C | Crash. Ermittelt über Rückleseleitung des CPLD | 0 | - |
| 0x22262D | Über HVSM ausgelöster AKS ausgelesen über Rückleseleitung von CPLD | 0 | - |
| 0x22262E | Inverterübertemperatur, Hardwareschaltung. Ermittelt über CPLD Rückleseleitung | 0 | - |
| 0x22262F | 12 V Ausfall des MC2, Hardwareschaltung. Ermittelt über CPLD Rückleseleitung | 0 | - |
| 0x222630 | Phasenüberstrom ermittelt durch Hardwareschaltung. Auslese Rückleseleitung | 0 | - |
| 0x222631 | Von FRM ausgelöster AKS. Ermittelt über CPLD Rückleseleitung.  Ereignis | 1 | - |
| 0x222632 | Sperrzeitüberwachung überschritten, Brückenkurzschluss | 0 | - |
| 0x222633 | AKS Anforderung über CY320-0 | 0 | - |
| 0x222634 | AKS Anforderung über CY320-2 | 0 | - |
| 0x222636 | HV SicherheitsManager, unerwartete aktive Entladung MC0 | 0 | - |
| 0x222701 | interner Fehler, Ebene3, ROM-Fehler mc0 | 0 | - |
| 0x222702 | interner Fehler, Ebene3, RAM-Fehler mc0 | 0 | - |
| 0x222703 | interner Fehler, Ebene3, Stack-Fehler mc0 | 0 | - |
| 0x222704 | interner Fehler, Ebene3, Doppelablage-Fehler mc0 | 0 | - |
| 0x222705 | interner Fehler, Ebene3, Interner ADC-Fehler mc0 | 0 | - |
| 0x222706 | interner Fehler, Ebene3, Programablauf-Fehler mc0 | 0 | - |
| 0x222707 | interner Fehler, Ebene3, Konfigregister-Fehler mc0 | 0 | - |
| 0x222708 | interner Fehler, Ebene3, Ebene2Prime-Fehler mc0 | 0 | - |
| 0x222709 | interner Fehler, Ebene3, Externer Watchdog-Fehler mc0 | 0 | - |
| 0x22270A | FUSI, Längsdynamik: Quadrantenplausibilisierung | 0 | - |
| 0x22270B | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Klemme 30C | 0 | - |
| 0x22270C | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: CY320 MC0 | 0 | - |
| 0x22270D | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: CY320 MC2 | 0 | - |
| 0x22270E | interner Fehler, Ebene3, ROM-Fehler mc2 | 0 | - |
| 0x22270F | interner Fehler, Ebene3, RAM-Fehler mc2 | 0 | - |
| 0x222710 | interner Fehler, Ebene3, Stack-Fehler mc2 | 0 | - |
| 0x222711 | interner Fehler, Ebene3, Doppelablage-Fehler mc2 | 0 | - |
| 0x222712 | interner Fehler, Ebene3, Interner ADC-Fehler mc2 | 0 | - |
| 0x222713 | interner Fehler, Ebene3, Programablauf-Fehler mc2 | 0 | - |
| 0x222714 | interner Fehler, Ebene3, Konfigregister-Fehler mc2 | 0 | - |
| 0x222715 | interner Fehler, Ebene3, Ebene2Prime-Fehler mc2 | 0 | - |
| 0x222716 | interner Fehler, Ebene3, Externer Watchdog-Fehler mc2 | 0 | - |
| 0x222717 | interner Fehler, FUSI, Abschaltpfadtest-Fehler mc2 | 0 | - |
| 0x222718 | interner Fehler, FUSI, aktive Entladung-Fehler | 0 | - |
| 0x222719 | FUSI, Radblockiererkennung: Anforderung AKS aktiv | 0 | - |
| 0x22271A | FUSI, Nullmomentenplausibilisierung aktiv | 0 | - |
| 0x22271B | interner Fehler, HVSM, Zwischenkreisspannung oberen Grenzwert überschritten | 0 | - |
| 0x22271C | interner Fehler, HVSM, Zwischenkreisspannung unteren Grenzwert unterschritten | 0 | - |
| 0x22271D | Funktionssicherheitsmanager, DCDC Gleichrichterabschaltung, Rückmeldung unplausibel | 0 | - |
| 0x22271E | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Hardwarepin | 0 | - |
| 0x22271F | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Airbag SG MRS5 | 0 | - |
| 0x222720 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Dual Port RAM defekt | 0 | - |
| 0x222721 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: eDME | 0 | - |
| 0x222722 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: FUSI Längsdynamik | 0 | - |
| 0x222723 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Phasenüberstrom | 0 | - |
| 0x222724 | Längsdynamik Ebene 2: Sammelfehler Momentgrenzen | 0 | - |
| 0x222725 | Längsdynamik Ebene 2:  Resolverfehler | 0 | - |
| 0x222726 | Längsdynamik Ebene 2: Stromsensorfehler | 0 | - |
| 0x222727 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: FUSI Längsdynamik | 0 | - |
| 0x222728 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Dual Port RAM defekt | 0 | - |
| 0x22272C | NULL-Zeiger erkannt auf MC0 | 0 | - |
| 0x22272D | NULL-Zeiger erkannt auf MC2 | 0 | - |
| 0x22272E | Laengsdynamik Ebene 2: Rotorlage Übertragungsfehler | 0 | - |
| 0x22272F | interner Fehler, Ebene3, CSFR-Fehler Startup, MC0 | 0 | - |
| 0x222730 | interner Fehler, Ebene3, CSFR-Fehler Zyklic, MC0 | 0 | - |
| 0x222731 | interner Fehler, Ebene3, SFR-Fehler Startup, MC0 | 0 | - |
| 0x222732 | interner Fehler, Ebene3, SFR-Fehler Zyklic, MC0 | 0 | - |
| 0x222733 | interner Fehler, Ebene3, RAM-Fehler Startup, MC0 | 0 | - |
| 0x222734 | interner Fehler, Ebene3, RAM-Fehler Zyklic, MC0 | 0 | - |
| 0x222735 | interner Fehler, Ebene3, RAM-CMEM-Fehler Startup, MC0 | 0 | - |
| 0x222736 | interner Fehler, Ebene3, RAM-CMEM-Fehler Zyklic, MC0 | 0 | - |
| 0x222737 | interner Fehler, Ebene3, ROM-Fehler Startup, MC0 | 0 | - |
| 0x222738 | interner Fehler, Ebene3, ROM-Fehler Zyklic, MC0 | 0 | - |
| 0x222739 | interner Fehler, Ebene3, SBST-Fehler Startup, MC0 | 0 | - |
| 0x22273A | interner Fehler, Ebene3, SBST-Fehler Zyklic, MC0 | 0 | - |
| 0x22273B | interner Fehler, Ebene3, ECC-Fehler Startup, MC0 | 0 | - |
| 0x22273C | interner Fehler, Ebene3, ECC-Fehler Zyklic, MC0 | 0 | - |
| 0x22273D | interner Fehler, Ebene3, PCP-Fehler Startup, MC0 | 0 | - |
| 0x22273E | interner Fehler, Ebene3, PCP-Fehler Zyklic, MC0 | 0 | - |
| 0x22273F | interner Fehler, Ebene3, CSFR-Fehler Startup, MC2 | 0 | - |
| 0x222740 | interner Fehler, Ebene3, CSFR-Fehler Zyklic, MC2 | 0 | - |
| 0x222741 | interner Fehler, Ebene3, SFR-Fehler Startup, MC2 | 0 | - |
| 0x222742 | interner Fehler, Ebene3, SFR-Fehler Zyklic, MC2 | 0 | - |
| 0x222743 | interner Fehler, Ebene3, RAM-Fehler Startup, MC2 | 0 | - |
| 0x222744 | interner Fehler, Ebene3, RAM-Fehler Zyklic, MC2 | 0 | - |
| 0x222745 | interner Fehler, Ebene3, RAM-CMEM-Fehler Startup, MC2 | 0 | - |
| 0x222746 | interner Fehler, Ebene3, RAM-CMEM-Fehler Zyklic, MC2 | 0 | - |
| 0x222747 | interner Fehler, Ebene3, ROM-Fehler Startup, MC2 | 0 | - |
| 0x222748 | interner Fehler, Ebene3, ROM-Fehler Zyklic, MC2 | 0 | - |
| 0x222749 | interner Fehler, Ebene3, SBST-Fehler Startup, MC2 | 0 | - |
| 0x22274A | interner Fehler, Ebene3, SBST-Fehler Zyklic, MC2 | 0 | - |
| 0x22274B | interner Fehler, Ebene3, ECC-Fehler Startup, MC2 | 0 | - |
| 0x22274C | interner Fehler, Ebene3, ECC-Fehler Zyklic, MC2 | 0 | - |
| 0x22274D | interner Fehler, Ebene3, PCP-Fehler Startup, MC2 | 0 | - |
| 0x22274E | interner Fehler, Ebene3, PCP-Fehler Zyklic, MC2 | 0 | - |
| 0x22274F | interner Fehler, Ebene3, MPU-Fehler, MC2 | 0 | - |
| 0x222750 | DME, FuSi: Safe State Request von DME FuSi | 1 | - |
| 0x222751 | DME, FuSi: Safe State Request Signalausfall von der DME | 1 | - |
| 0x222752 | EGS, FuSi: Safe State Request vom EGS | 1 | - |
| 0x222753 | EGS, FuSi: Safe State Request Signalausfall von EGS | 1 | - |
| 0x222754 | DME, FuSi: Safe State of DME via Level 1 not possible | 1 | - |
| 0x222755 | DME, FuSi: Safe State wegen Signalausfall der DME via Level 1 not possible | 1 | - |
| 0x222756 | EGS, FuSi: Safe State from EGS via Level 1 not possible | 1 | - |
| 0x222757 | EGS, FuSi: Safe State wegen Signalausdall des EGS via Level 1 not possible | 1 | - |
| 0x222758 | Internal Failure : Dualstore Error mc0 | 0 | - |
| 0x222759 | Internal Failure : Dualstore Error mc2 | 0 | - |
| 0x22275A | FuSi: Internal Failure : Program Flow Control Error | 0 | - |
| 0x22275B | FuSi: Internal Failure : Program Flow Control Error | 0 | - |
| 0x22275E | FUSI MSO AKS Fehler | 0 | - |
| 0x22275F | FUSI MSO RST Fehler | 0 | - |
| 0x222760 | NV Data Corruption on MC0  | 0 | - |
| 0x222761 | NV Data Corruption on MC2  | 0 | - |
| 0x22277A | FuSi Level 2: AKS/FW wegen Überstrom im Kabel AE<->EESS | 0 | - |
| 0x22277B | FuSi Level 2: Inverterstromsensorproblem hinderet Stromüberwachung. | 0 | - |
| 0x22277D | ADA, FuSi: ADA Limitation | 1 | - |
| 0x222800 | Dauerbetätigung Entriegelungstaster bei Typ1-Stecker | 1 | - |
| 0x222802 | Doppelter UCX-Schützkleber | 1 | - |
| 0x222804 | Fehler Steckererkennung | 1 | - |
| 0x222805 | Abstellen der Ladehardware (z.B. Aufgrund von Netzstörungen) | 1 | - |
| 0x222806 | Signalausfall laderelevanter Singale seitens SME | 1 | - |
| 0x222807 | HV Ausschaltaufforderer durch Laden gesetzt | 1 | - |
| 0x22280F | F_M_BMW_HVBATT_ISOERRDBL_FAULTTYPE -> HV Batterie : Isolationsfehler | 1 | - |
| 0x222812 | Crash: Zündpille aktiviert | 1 | - |
| 0x222813 | HV-Powermanagement: HV Erstfreigabe erfolgt | 1 | - |
| 0x222814 | F_M_BMW_HVBATT_ISOWARN_FAULTTYPE -> HV Batterie : Isolationswarnung | 1 | - |
| 0x222815 | F_M_BMW_HVOFF_FAIL_FAULTTYPE -> HV Zwischenkreisentladung : HV Zwischenkreis nicht spannungsfrei trotz Anforderung | 1 | - |
| 0x222816 | F_M_BMW_INLK_SYS_FAULTTYPE -> HV Powermanagement : Interlock unterbrochen | 1 | - |
| 0x222817 | F_M_BMW_SCHUETZKLEBER_1_FAULTTYPE -> HV Batterie : einfacher Schuetzkleber | 1 | - |
| 0x222818 | HV-Powermanagement: HV-batterieloser Betrieb wird verhindert aufgrund Schützkleber | 1 | - |
| 0x222819 | HV-Powermanagement: Unterversorgung 12V-Bordnetz (Ladekontrollleuchte aktiv) | 1 | - |
| 0x22281A | Externer Crashsensor über CAN: Crash detektiert (wird von BMW-Funktion HVPM eingetragen) | 1 | - |
| 0x22281B | EME, HV-Kommunikation: Schützkleber 2 von SME über CAN gemeldet (B_schuetzkleber_2) | 1 | - |
| 0x22281C | HV-Powermanagement: keine HV-Freigabe trotz Anforderung | 1 | - |
| 0x22281D | HV-Powermanagement: Systembedingte Degradation des DCDC-Wandlers | 1 | - |
| 0x222820 | FIS zum Auslösen der CCM 874 | 1 | - |
| 0x222821 | FIS zum Auslösen der CCM 873 | 1 | - |
| 0x222822 | FIS zum Auslösen der CCM 859 | 1 | - |
| 0x222824 | FIS zum Auslösen der CCM 794 | 1 | - |
| 0x222826 | FIS zum Auslösen der CCM 885 | 1 | - |
| 0x222831 | F_M_BMW_CCM636_FAULTTYPE -> Checkcontrol 636 : Hochvoltsystem abgeschaltet | 1 | - |
| 0x222832 | Lademanagement: CC-Meldung 802, Ladekabel pruefen | 1 | - |
| 0x222833 | F_M_BMW_CCM803_FAULTTYPE -> Checkcontrol 803 : Netzleistung zu gering | 1 | - |
| 0x222834 | F_M_BMW_CCM804_FAULTTYPE -> Checkcontrol 804 : Laden nicht moeglich | 1 | - |
| 0x222839 | Ungültiger Pilotstatus bei COMBO-Laden | 1 | - |
| 0x22283A | Ladeziel nicht erreichbar bei gestelltem Wochentimer | 1 | - |
| 0x22283B | F_M_BMW_HVAUS_SOC_FAULTTYPE -> HV Powermanagement : HV Power Down aufgrund niedrigem Ladezustand HV Batterie | 1 | - |
| 0x22283F | F_M_BMW_LADEN_AC_ABBRUCH_FAULTTYPE -> Lademanagement : AC Spannung fehlt nach Ladebeginn | 1 | - |
| 0x222841 | F_M_BMW_LADEN_FAILSAFE_FAULTTYPE -> Lademanagement : SLE/KLE in Failsafe | 1 | - |
| 0x222842 | F_M_BMW_LADEN_LADEFEHLER_FAULTTYPE -> Lademanagement : Ladefehler | 1 | - |
| 0x222843 | F_M_BMW_LADEN_LADEZIEL_FAULTTYPE -> Lademanagement : Ladeziel nicht erreichbar (SLE Leistung zu gering) | 1 | - |
| 0x222846 | F_M_BMW_LADEN_STOERUNG_FAULTTYPE -> Lademanagement : Ladestoerung | 1 | - |
| 0x222847 | F_M_BMW_PILOT_UNGUELTIG_FAULTTYPE -> Lademanagement : Pilotsignal ungueltig | 1 | - |
| 0x222848 | F_M_BMW_PILOT_UNGUELTIG_LK_FAULTTYPE -> Lademanagement : Pilotsignal ungueltig ausserhalb Ladebereitschaft | 1 | - |
| 0x222849 | F_M_BMW_VOKO_FEHLER_FAULTTYPE -> Lademanagement : Vorkonditionierung nicht moglich | 1 | - |
| 0x22284A | AE, ELUP, Unterdrucksystem, Förderleistung mechanische Pumpe zu gering, oder Rückschlagventil defekt | 0 | - |
| 0x22284F | FIS EWP Zustand unbekannt | 0 | - |
| 0x222850 | Notlaufmanager Folgefehler  Ursprungsfehler in der HV EM EM meldet AKS und Temperatur oberhalb Temperaturschwelle FIS_BMW_EM1_AKS_TEMP | 1 | - |
| 0x222854 | Notlaufmanager Fehler bei der Diagnose des Bremspedalsignals FIS_BMW_BLS_DIAG | 0 | - |
| 0x222855 | Notlaufmanager CCM 848 (China); Fehler aufgrund zu hoher Temperatur der Antriebs-E-Maschine FIS_BMW_CCM848 | 0 | - |
| 0x222856 | Notlaufmanager Folgefehler  Komponente meldet Fehler DCDC deaktiviert aufgrund zu hohen Stroms FIS_BMW_DCDC_CURT_OFF | 0 | - |
| 0x222857 | Notlaufmanager Folgefehler  Komponente meldet Fehler DCDC deaktiviert aufgrund Hardwarefehler FIS_BMW_DCDC_HWF_OFF | 0 | - |
| 0x222858 | Notlaufmanager Folgefehler  Komponente meldet Fehler DCDC deaktiviert aufgrund zu hoher Temperatur FIS_BMW_DCDC_OVERTEMP_OFF | 0 | - |
| 0x222859 | Notlaufmanager Folgefehler  Komponente meldet Fehler DCDC deaktiviert aufgrund Überspannung FIS_BMW_DCDC_VOLT_OFF | 0 | - |
| 0x22285D | NotlaufmanagerFolgefehler HV Batterie meldet Fehler Batterie Service RequestKAT 3FIS_BMW_SME_KAT3 | 0 | - |
| 0x22285E | Notlaufmanager Folgefehler  HV Batterie meldet  0-Stromanforderung FIS_BMW_SME_KAT5 | 0 | - |
| 0x22285F | Notlaufmanager Folgefehler  HV Batterie meldet  langsames Öffnen der Schütze FIS_BMW_SME_KAT6 | 0 | - |
| 0x222860 | Notlaufmanager Folgefehler  HV Batterie meldet  schnelles Öffnen der Schütze FIS_BMW_SME_KAT7 | 0 | - |
| 0x222862 | Notlaufmanager Folgefehler  Komponente meldet Fehler Aktiver Kurzschluss   verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_AKS | 0 | - |
| 0x222863 | NotlaufmanagerFolgefehler Komponente meldet FehlerFreilaufverbrennungsmotornahe HV E-MaschineFIS_BMW_EM1_FREILAUF | 0 | - |
| 0x222864 | NotlaufmanagerFolgefehler Komponente meldet Fehler0-Momentenanforderungverbrennungsmotornahe HV E-MaschineFIS_BMW_EM1_0MDREG | 0 | - |
| 0x222865 | NotlaufmanagerFolgefehler Komponente meldet FehlerTemperaturfehlerverbrennungsmotornahe HV E-MaschineFIS_BMW_EM1_TEMP_EM | 0 | - |
| 0x222866 | NotlaufmanagerFolgefehler Komponente meldet FehlerFehler Rotolagesensorverbrennungsmotornahe HV E-MaschineFIS_BMW_EM1_RLS | 0 | - |
| 0x222867 | NotlaufmanagerFolgefehler Komponente meldet FehlerHardwarefehler verbrennungsmotornahe HV E-MaschineFIS_BMW_EM1_HW_INV | 0 | - |
| 0x222868 | NotlaufmanagerFolgefehler Komponente meldet FehlerTemperaturfehler Inverterverbrennungsmotornahe HV E-MaschineFIS_BMW_EM1_TEMP_INV | 0 | - |
| 0x222870 | HV-Powermanagement: wichtige Signale der Antriebselektronik ungültig oder nicht empfangen | 1 | - |
| 0x222871 | HV-Powermanagement: wichtige Signale der HV-Batterie ungültig oder nicht empfangen | 1 | - |
| 0x222872 | DC-Laden: Ladestation hat einen Fehler im Ladevorgang detektiert | 1 | - |
| 0x222873 | DC-Laden: Ladestation meldet Ladestation und Fahrzeug nicht kompatibel | 1 | - |
| 0x222874 | DC-Laden: Fehler der Ladestation gemeldet | 1 | - |
| 0x222875 | DC-Laden: Keine Verriegelung des Ladesteckers durch die Ladestation | 1 | - |
| 0x222876 | LIM: FA-CAN-Kommunikation fehlerhaft | 1 | - |
| 0x222877 | DC-Laden: Falscher Ladestatus von der Ladestation versendet | 1 | - |
| 0x222878 | DC-Laden: Keine Rücknahme des Ladestatus durch die Ladestation | 1 | - |
| 0x22287A | DC-Laden: Signal der Ansteuerungsleitung von der Ladestation unplausibel | 0 | - |
| 0x22287B | DC-Laden: Abweichung des Ladestroms | 1 | - |
| 0x22287C | DC-Laden: Spannungsdifferenz zwischen Ladevorrichtung und Hochvolt-Batterie zu groß | 1 | - |
| 0x22287D | DC-Laden: DC-Ladebox, Schaltschütze unerwartet geöffnet oder nicht angesteuert | 1 | - |
| 0x22287E | AC-Laden: Netszpannung vorhanden obwohl keine Ladebereitschaft | 1 | - |
| 0x222881 | DC-Laden: Isolationswächter der Hochvolt-Batterieeinheit nicht richtig angesteuert | 1 | - |
| 0x222884 | Notlaufmanager Folgefehler  Komponente meldet Fehler Anforderung von der DME: Leistung des elektrischen Kältemittelverdichters reduzieren FIS_BMW_EKK_RED | 1 | - |
| 0x222885 | Notlaufmanager Folgefehler  Komponente meldet Fehler Anforderung von der DME: Kältemittelverdichter deaktivieren FIS_BMW_EKK_DEAK | 1 | - |
| 0x222894 | NotlaufmanagerSignalausfall Eingangssignal AE AE/ EME interner Qualifier zeigt SignalausfallSignalausfall verbrennergebundene E-Maschine AE internes Signal Ba_em1_istFIS_BMW_BA_EM1_IST_SIGNAL | 1 | - |
| 0x222895 | Notlaufmanager: Signalausfall Eingangssignal AE AE/ EME interner Qualifier zeigt SignalausfallSignalausfall verbrennergebundene E-Maschine AE internes Signal Md_em1_istFIS_BMW_MD_EM1_IST_SIGNAL | 1 | - |
| 0x222896 | Notlaufmanager: Signalausfall Eingangssignal AE AE/ EME interner Qualifier zeigt SignalausfallSignalausfall verbrennergebundene E-Maschine AE internes Signal Md_em1_mot_maxFIS_BMW_MD_EM1_MOT_MAX_SIGNAL | 1 | - |
| 0x222898 | Notlaufmanager:Signalausfall Eingangssignal AE AE/ EME interner Qualifier zeigt SignalausfallSignalausfall verbrennergebundene E-Maschine AE internes Signal Md_em1_gen_maxFIS_BMW_MD_EM1_GEN_MAX_SIGNAL | 1 | - |
| 0x22289C | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interner Qualifier zeigt Signalausfall Signalausfall verbrennergebundene E-Maschine  AE internes Signal N_em1_ist | 1 | - |
| 0x22289D | Notlaufmanager:Signalausfall Eingangssignal AE AE/ EME interner Qualifier zeigt SignalausfallSignalausfall verbrennergebundene E-Maschine AE internes Signal St_err_em1 FIS_BMW_ST_ERR_EM1_SIGNAL | 1 | - |
| 0x22289F | Notlaufmanager:Signalausfall Eingangssignal AE AE/ EME interner Qualifier zeigt SignalausfallSignalausfall Signal DME zur AE/ EME BUS Signal AVL_RPM_ENG_CRSH/ NkwFIS_BMW_NKW_SIGNAL | 1 | - |
| 0x2228A1 | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interner Qualifier zeigt Signalausfall Signalausfall Signal DME zur AE/ EME BUS Signal ST_DRV_VEH  St_antrieb_fahrzeug FIS_BMW_ST_ANTRIEB_FAHRZEUG_SIGNAL | 1 | - |
| 0x2228A3 | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interner Qualifier zeigt Signalausfall Signalausfall Signal DME zur AE/ EME  BUS Signal TAR_RPM_MOT_1_ENGMG_P2  AE internes Signal N_em1_soll_dme FIS_BMW_N_EM1_SOLL_DME_SIGNAL | 1 | - |
| 0x2228A4 | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interner Qualifier zeigt Signalausfall Signalausfall Signal DME zur AE/ EME  BUS Signal AVL_ANG_ACPD_VIRT  AE internes Signal Pwg_ist FIS_BMW_PWG_IST_SIGNAL | 1 | - |
| 0x2228A6 | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interner Qualifier zeigt Signalausfall Signalausfall Signal DME zur AE/ EME  BUS Signal RQ_EMMOD_HYB_DME_2  AE internes Signal St_anf_nl_dme_2 FIS_BMW_ST_ANF_NL_DME_2_SIGNAL | 1 | - |
| 0x2228A8 | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interner Qualifier zeigt Signalausfall  Signalausfall Signal SME zur AE/ EME BUS Signal CHGCOND_HVSTO ausgefallen (A-CAN) intern: Soc_hvb_ist FIS_BMW_SOC_HVB_IST_SIGNAL | 1 | - |
| 0x2228A9 | Notlaufmanager: Signalausfall Eingangssignal AE Signal SME zur AE/ EME  BUS Signal RQ_CHGCOND_HVSTO_MAX oder RQ_CHGCOND_HVSTO_MIN ausgefallen (A-CAN)  intern: Soc_hvb_min/ Soc_hvb_max FIS_BMW_SOC_HVB_MXMN_SIGNAL | 1 | - |
| 0x2228AA | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal SME zur AE/ EME  BUS Signal AVL_I_HVSTO  Ae internes Signal I_batt_sme FIS_BMW_I_BATT_SME_SIGNAL | 1 | - |
| 0x2228AB | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal SME zur AE/ EME  BUS Signal AVL_U_HVSTO  Ae internes Signal U_batt_sme FIS_BMW_U_BATT_SME_SIGNAL | 1 | - |
| 0x2228AC | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal Fahrzeuggeschwindigkeit ICM zur AE/ EME  BUS Signal V_VEH_COG  AE internes Signal V_fzg FIS_BMW_V_FZG_SIGNAL | 1 | - |
| 0x2228AD | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal EGS zur AE/ EME  BUS Signal TAR_TORQ_DVCH_COOTD_P2  AE internes Signal Mdg_soll FIS_BMW_MDG_SOLL_SIGNAL | 1 | - |
| 0x2228AE | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal EGS zur AE/ EME  BUS Signal RPM_GRDT_NEGL  AE internes Signal N_ab_m | 1 | - |
| 0x2228AF | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal DSC zur AE/ EME  BUS Signal AVL_RPM_WHL_RLH  AE internes Signal N_rad_hl  FIS_BMW_N_RAD_HL_SIGNAL | 1 | - |
| 0x2228B0 | Notlaufmanager: Signalausfall Eingangssignal AE  AE/ EME interne Qualifier zeigen Signalausfall Signalausfall Signal DSC zur AE/ EME  BUS Signal AVL_RPM_WHL_RRH  AE internes Signal N_rad_hr FIS_BMW_N_RAD_HR_SIGNAL | 1 | - |
| 0x2228B2 | Notlaufmanager Folgefehler  Komponente meldet Fehler SME meldet Kat 2 Fehler FIS_BMW_SME_KAT2 | 1 | - |
| 0x2228B3 | Notlaufmanager Folgefehler  Komponente meldet Fehler SME meldet Kat 4 Fehler FIS_BMW_SME_KAT4 | 1 | - |
| 0x2228C1 | Hochvoltpowermanagement: SLE Fehler Vorladung | 1 | - |
| 0x2228C2 | Hochvoltpowermanagement: Vorladung Comboladen konnte nicht abgeschlossen werden | 1 | - |
| 0x2228C3 | Notlaufmanager DME Ausfall  DME/ eDME  sendet mehrere, wichtige Botschaften nicht mehr an die AE/ EME  FIS_BMW_DME_OFF | 1 | - |
| 0x2228C5 | Notlaufmanager SME Ausfall SME sendet mehrere, wichtige Botschaften nicht mehr an die AE/ EME FIS_BMW_SME_OFF | 1 | - |
| 0x2228C6 | Werksmodus eFahren zur Überführung aktiv | 0 | - |
| 0x2228C7 | Werksmodus Fahrdynamische Prüfung aktiv | 0 | - |
| 0x2228C8 | Zustarteinheit - Zustartbatterie - Zusatzbatterie gealtert | 0 | - |
| 0x2228C9 | Zustarteinheit - Zustartbatterie - Zusatzbatterie defekt | 0 | - |
| 0x2228CA | Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 | - |
| 0x2228CB | Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 | - |
| 0x2228CC | Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 | - |
| 0x2228CD | Intelligenter Batteriesensor, Arbeitsbereich: Strom zu hoch | 0 | - |
| 0x2228CE | Intelligenter Batteriesensor, Arbeitsbereich: Strom zu niedrig | 0 | - |
| 0x2228CF | Intelligenter Batteriesensor, Arbeitsbereich: Temperatur zu hoch | 0 | - |
| 0x2228D0 | Intelligenter Batteriesensor, Arbeitsbereich: Temperatur zu niedrig | 0 | - |
| 0x2228D1 | Intelligenter Batteriesensor, Arbeitsbereich: Spannung zu hoch | 0 | - |
| 0x2228D2 | Intelligenter Batteriesensor, Arbeitsbereich: Spannung zu niedrig | 0 | - |
| 0x2228D3 | Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 | - |
| 0x2228D4 | Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 | - |
| 0x2228D5 | Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 | - |
| 0x2228D6 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 | - |
| 0x2228D7 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 | - |
| 0x2228D8 | LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 | - |
| 0x2228D9 | LIN Bus: Kommunikationsfehler | 0 | - |
| 0x2228DC | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Verlustleistung LeistungselektronikDer interne Qualifier des Signals AVL_PWR_LSS_MOT_1 ist nicht in OrdnungFIS_BMW_PV_EM1_LE1_SIGNAL | 1 | - |
| 0x2228DD | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal StrangverstärkungDer interne Qualifier des Signals REIN_GRDT ist nicht in OrdnungFIS_BMW_I_EFF_GES_SIGNAL | 1 | - |
| 0x2228DE | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Dynamische Stromgrenze bei EntladungDer Qualifier des Signals I_DYN_MAX_DCHG_HVSTO ist nicht in OrdnungFIS_BMW_I_ENTL_MIN_SME_SIGNAL | 1 | - |
| 0x2228DF | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Übersetzung gesamtDe rinterne Qualifier des Signals REIN_PT ist nicht in OrdnungFIS_BMW_I_GES_SIGNAL | 1 | - |
| 0x2228E0 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Übersetzung HinterachsgetriebeDer interne Qualifier des Signals TRNRAO_BAX ist nicht in OrdnungFIS_BMW_I_HA_SIGNAL | 1 | - |
| 0x2228E1 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Dynamische Stromgrenze bei LadungDer interne Qualifier des Signals I_DYN_MAX_CHG_HVSTO ist nicht in OrdnungFIS_BMW_I_LAD_MAX_SME_SIGNAL | 1 | - |
| 0x2228E2 | Notlaufmanager Signalausfall Eingangssignal AE HYM/ EME; Signal Momentaner Strom des EM FIS_BMW_I_REX_IST_SIGNAL | 1 | - |
| 0x2228E3 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Maximales Drehmoment VerbrennungsmotorDer interne Qualifier des Signals TORQ_MAX_CENG ist nicht in OrdnungFIS_BMW_MD_VM_MAX_SIGNAL | 1 | - |
| 0x2228E4 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Leistungsvorhalt VM StartDer Qualifier des Signals ST_CENG_STA_PWR_DRV ist nicht in OrdnungFIS_BMW_PE_VM_STRT_SIGNAL | 1 | - |
| 0x2228E5 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Status AntriebDer interne Qualifier des Signals ST_DRV_AVL ist nicht in OrdnungFIS_BMW_ST_ANTRIEB_IST_SIGNAL | 1 | - |
| 0x2228E6 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Status AntriebDer interne Qualifier des Signals ST_DRV_TAR ist nicht in OrdnungFIS_BMW_ST_ANTRIEB_SOLL_SIGNAL | 1 | - |
| 0x2228E7 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Status AntriebDer Qualifier des Signals ST_DRV_DSTN ist nicht in OrdnungFIS_BMW_ST_ANTRIEB_WUNSCH_SIGNAL | 1 | - |
| 0x2228E8 | Notlaufmanager:Signalausfall EingangssignalDer interne Qualifier des Signals ST_RDI_DRVG ist nicht in OrdnungFIS_BMW_ST_FAHRBEREIT_SIGNAL | 1 | - |
| 0x2228E9 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Spannung EMDer Qualifier des Signals ST_RDI_DRVG ist nicht in OrdnungFIS_BMW_U_REX_IST_SIGNAL | 1 | - |
| 0x2228EA | Notlaufmanager Signalausfall  Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste verbrennergebundene Hochvolt E-maschine motorischDer Qualifier des internen Signals (kein BUS Signal) ungültigFIS_BMW_PV_EM1_MDMOTMAX_SIGNAL | 1 | - |
| 0x2228EB | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste verbrennergebundene Hochvolt E-maschine generatorischDer Qualifier des internen Signals (kein BUS Signal) ungültigFIS_BMW_PV_EM1_MDGENMAX_SIGNAL | 1 | - |
| 0x2228EC | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Drehzahl Rad vorne linksDer interne Qualifier des Signals AVL_RPM_WHL_FLH ist nicht in OrdnungFIS_BMW_N_RAD_VL_SIGNAL | 1 | - |
| 0x2228ED | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Aktuelle Drehzahl Rad vorne rechtsDer interne Qualifier des Signals AVL_RPM_WHL_FRH ist nicht in OrdnungFIS_BMW_N_RAD_VR_SIGNA | 1 | - |
| 0x2228EE | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Sollmoment Traktions- E-MaschineDer Qualifier des Signals TAR_TORQ_MOT_TRCT ist nicht in OrdnungFIS_BMW_MD_EM1_SOLL_DME_SIGNAL | 1 | - |
| 0x2228EF | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Virtuelles FahrpedalDer Qualifier des Signals AVL_ANG_ACPD_VIRT ist nicht in OrdnungFIS_BMW_PWG_IST_VIRT_SIGNAL | 1 | - |
| 0x2228F0 | NotlaufmanagerSignalausfall Eingangssignal AE HYM/ EME; Signal Status Usecase SOCDer interne Qualifier des Signals ST_MOD_SOC ist nicht in OrdnungFIS_BMW_ST_USECASE_SOC_SIGNAL | 1 | - |
| 0x2228F2 | NotlaufmanagerFolgefehlerDME fordert über Notlaufsignal eine Momentenreduzierung der verbrennungsmotorgebundene Hochvolt E-Mascchine FIS_BMW_MD_EM1_RED | 1 | - |
| 0x2228F3 | Notlaufmanager Folgefehler; Erkennung Service Disconnect AE Service Disconnect wird aufgrund eines Signals ST_SER_DSCO_PLG festgestellt | 1 | - |
| 0x2228F4 | HV-Powermanagement : SME mehrere Werte fehlen auf dem MC0 Fehler in der Erkennung des State of Charge SoC | 1 | - |
| 0x2228FE | FIS_HVPM_CCM 880 (Heizen Kühlen im Stand nicht möglich) | 1 | - |
| 0x222903 | Isolationsfehler wurde detektiert | 1 | - |
| 0x222905 | Notlaufmanager: Folgefehler, Komponente meldet Fehler,Automatikgetriebe EGS meldet: ENPG1 FIX NotlaufFIS_BMW_GB1_ENPG1FIX | 0 | - |
| 0x222906 | Notlaufmanager: Folgefehler,Komponente meldet Fehler,Automatikgetriebe EGSmeldet:ENPG1 FIX Notlauf und die Drehzahl der HV E-Maschine hat die Leerlaufdrehzahl unterschritten. FIS_BMW_GB1_ENPG1FIX_RPM_LL | 0 | - |
| 0x22290A | Notlaufmanager: Folgefehler,Komponente meldet Fehler,Automatikgetriebe meldet mechanischen Notlauf FIS_BMW_GB1_NL_MECH | 1 | - |
| 0x22292F | Notlaufmanager: Folgefehler,  HV Batterie meldet Kategorie 1 Fehler  ;FIS_BMW_SME_KAT1 | 1 | - |
| 0x222930 | Lademanagement: Werksladen aktiv | 1 | - |
| 0x222A0C | Interner Fehler, Messwerterfassung, interner Sensor defekt MC0 | 0 | - |
| 0x222A0E | Interner Fehler, Messwerterfassung, interner Sensor defekt MC2 | 0 | - |
| 0x222A45 | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , Kurzschluss nach Ubat | 0 | - |
| 0x222A47 | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , Kurzschluss nach Masse | 0 | - |
| 0x222A49 | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , obere Schwelle überschritten | 0 | - |
| 0x222A4B | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , untere Schwelle unterschritten | 0 | - |
| 0x222A4D | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), Kurzschluss nach Ubat | 0 | - |
| 0x222A4F | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), Kurzschluss nach Masse | 0 | - |
| 0x222A51 | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), obere Schwelle überschritten | 0 | - |
| 0x222A53 | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), untere Schwelle unterschritten | 0 | - |
| 0x222A55 | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, Kurzschluss nach Ubat | 0 | - |
| 0x222A57 | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, Kurzschluss nach Masse | 0 | - |
| 0x222A59 | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, obere Schwelle überschritten | 0 | - |
| 0x222A5B | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, untere Schwelle unterschritten | 0 | - |
| 0x222A5D | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, Kurzschluss nach Ubat | 0 | - |
| 0x222A5F | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, Kurzschluss nach Masse | 0 | - |
| 0x222A61 | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, obere Schwelle überschritten | 0 | - |
| 0x222A63 | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, untere Schwelle unterschritten | 0 | - |
| 0x222A65 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, Kurzschluss nach Ubat | 0 | - |
| 0x222A67 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, Kurzschluss nach Masse | 0 | - |
| 0x222A6D | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, Kurzschluss nach Ubat | 0 | - |
| 0x222A6F | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, Kurzschluss nach Masse | 0 | - |
| 0x222A75 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, Kurzschluss nach Ubat | 0 | - |
| 0x222A77 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, Kurzschluss nach Masse | 0 | - |
| 0x222A7D | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, Kurzschluss nach Ubat | 0 | - |
| 0x222A7F | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, Kurzschluss nach Masse | 0 | - |
| 0x222A85 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2, Kurzschluss nach Ubat | 0 | - |
| 0x222A86 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2, Kurzschluss nach Masse | 0 | - |
| 0x222A88 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2, obere Schwelle überschritten | 0 | - |
| 0x222A8A | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2 exceeded lowertreshold | 0 | - |
| 0x222A8C | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, Kurzschluss nach Ubat | 0 | - |
| 0x222A8E | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, Kurzschluss nach Masse | 0 | - |
| 0x222A90 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, obere Schwelle überschritten | 0 | - |
| 0x222A92 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, untere Schwelle unterschritten | 0 | - |
| 0x222A94 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, Kurzschluss nach Ubat | 0 | - |
| 0x222A96 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, Kurzschluss nach Masse | 0 | - |
| 0x222A9C | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, Kurzschluss nach Ubat | 0 | - |
| 0x222A9E | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, Kurzschluss nach Masse | 0 | - |
| 0x222AA4 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, Kurzschluss nach Ubat | 0 | - |
| 0x222AA6 | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus) hast shortcut to ground | 0 | - |
| 0x222AA8 | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus) hast shortcut to battery | 0 | - |
| 0x222AAA | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), Kurzschluss nach Masse | 0 | - |
| 0x222AAC | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), Kurzschluss nach Ubat | 0 | - |
| 0x222AAE | EM Temperatur Spulenende, Kurzschluss nach Masse | 0 | - |
| 0x222AB0 | EM Temperatur Spulenende, Kurzschluss nach Ubat | 0 | - |
| 0x222AB6 | INV DC Strom vom/zum Inverter, Kurzschluss nach Masse | 0 | - |
| 0x222AB8 | INV DC Strom vom/zum Inverter, Kurzschluss nach Ubat | 0 | - |
| 0x222AB9 | INV Temperatur heissester Gate Treiber (phase W), Kurzschluss nach Masse | 0 | - |
| 0x222ABA | INV Temperatur heissester Gate Treiber (phase W), Kurzschluss nach Ubat | 0 | - |
| 0x222ABB | INV Temperatur IGBT U, Kurzschluss nach Masse | 0 | - |
| 0x222ABC | INV Temperatur IGBT U, Kurzschluss nach Ubat | 0 | - |
| 0x222ABD | INV Temperatur IGBT V, Kurzschluss nach Masse | 0 | - |
| 0x222ABE | INV Temperatur IGBT V, Kurzschluss nach Ubat | 0 | - |
| 0x222ABF | INV Temperatur IGBT W, Kurzschluss nach Masse | 0 | - |
| 0x222AC0 | INV Temperatur IGBT W, Kurzschluss nach Ubat | 0 | - |
| 0x222AC1 | INV Strom Phase U, Kurzschluss nach Masse | 0 | - |
| 0x222AC2 | INV Strom Phase U, Kurzschluss nach Ubat | 0 | - |
| 0x222AC3 | INV Strom Phase V, Kurzschluss nach Masse | 0 | - |
| 0x222AC4 | INV Strom Phase V, Kurzschluss nach Ubat | 0 | - |
| 0x222AC5 | INV Strom Phase W, Kurzschluss nach Masse | 0 | - |
| 0x222AC6 | INV Strom Phase W, Kurzschluss nach Ubat | 0 | - |
| 0x222AC7 | INV ZK-Spannung(=Spannung HV-Batterie), Kurzschluss nach Masse | 0 | - |
| 0x222AC8 | INV ZK-Spannung(=Spannung HV-Batterie), Kurzschluss nach Ubat | 0 | - |
| 0x222AC9 | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus), obere Schwelle überschritten | 0 | - |
| 0x222ACA | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus), untere Schwelle unterschritten | 0 | - |
| 0x222ACB | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), obere Schwelle überschritten | 0 | - |
| 0x222ACC | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), untere Schwelle unterschritten | 0 | - |
| 0x222ACD | EM Temperatur Spulenende, obere Schwelle überschritten | 0 | - |
| 0x222ACE | EM Temperatur Spulenende, untere Schwelle unterschritten | 0 | - |
| 0x222AD1 | INV DC Strom vom/zum Inverter, obere Schwelle überschritten | 0 | - |
| 0x222AD2 | INV DC Strom vom/zum Inverter, untere Schwelle unterschritten | 0 | - |
| 0x222AD3 | INV Temperatur heissester Gate Treiber (phase W), obere Schwelle überschritten | 0 | - |
| 0x222AD4 | INV Temperatur heissester Gate Treiber (phase W), untere Schwelle unterschritten | 0 | - |
| 0x222AD5 | INV Temperatur IGBT U, obere Schwelle überschritten | 0 | - |
| 0x222AD6 | INV Temperatur IGBT U, untere Schwelle unterschritten | 0 | - |
| 0x222AD7 | INV Temperatur IGBT V, obere Schwelle überschritten | 0 | - |
| 0x222AD8 | INV Temperatur IGBT V, untere Schwelle unterschritten | 0 | - |
| 0x222AD9 | INV Temperatur IGBT W, obere Schwelle überschritten | 0 | - |
| 0x222ADA | INV Temperatur IGBT W, untere Schwelle unterschritten | 0 | - |
| 0x222AE1 | INV ZK-Spannung(=Spannung HV-Batterie), obere Schwelle überschritten | 0 | - |
| 0x222AE2 | INV ZK-Spannung(=Spannung HV-Batterie), untere Schwelle unterschritten | 0 | - |
| 0x222AE3 | SLE AC-Spannung Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AE5 | SLE  PFC-Spannung Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AE7 | SLE  Zwischenkreis-Spannung Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEB | SLE HV Strom Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEE | SLE LLC-Temperatursensor  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF0 | SLE Transformator Temperatursensor Sensor  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF2 | SLE Drossel (HV) Temperatur  obere Schwelle  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF4 | SLE PFC_T_Sensor_1  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF6 | SLE PFC_T_Sensor_2  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF8 | SLE PFC_T_Sensor_3  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF9 | SLE AC-Spannung hat obere Schwelle überschritten | 0 | - |
| 0x222AFB | SLE  PFC-Spannung hat obere Schwelle überschritten | 0 | - |
| 0x222AFD | SLE  Zwischenkreis-Spannung hat obere Schwelle überschritten | 0 | - |
| 0x222B01 | SLE HV Strom hat obere Schwelle überschritten | 0 | - |
| 0x222B03 | SLE LLC-Temperatursensor hat obere Schwelle überschritten | 0 | - |
| 0x222B05 | SLE Transformator Temperatursensor hat obere Schwelle überschritten | 0 | - |
| 0x222B07 | SLE Drossel (HV)  Temperatur hat obere Schwelle überschritten | 0 | - |
| 0x222B09 | SLE PFC_T_Sensor_1 hat obere Schwelle überschritten | 0 | - |
| 0x222B0B | SLE PFC_T_Sensor_2 hat obere Schwelle überschritten | 0 | - |
| 0x222B0D | SLE PFC_T_Sensor_3 hat obere Schwelle überschritten | 0 | - |
| 0x222B0F | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, Kurzschluss nach Masse | 0 | - |
| 0x222B12 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, Kurzschluss nach Ubat | 0 | - |
| 0x222B13 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, Kurzschluss nach Masse | 0 | - |
| 0x222B14 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, obere Schwelle überschritten | 0 | - |
| 0x222B15 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, untere Schwelle unterschritten | 0 | - |
| 0x222B1E | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, Kurzschluss nach Ubat | 0 | - |
| 0x222B1F | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, Kurzschluss nach Masse | 0 | - |
| 0x222B20 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, obere Schwelle überschritten | 0 | - |
| 0x222B21 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, untere Schwelle unterschritten | 0 | - |
| 0x222B22 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, Kurzschluss nach Ubat | 0 | - |
| 0x222B23 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, Kurzschluss nach Masse | 0 | - |
| 0x222B24 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, obere Schwelle überschritten | 0 | - |
| 0x222B25 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, untere Schwelle unterschritten | 0 | - |
| 0x222B26 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, Kurzschluss nach Ubat | 0 | - |
| 0x222B27 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, Kurzschluss nach Masse | 0 | - |
| 0x222B28 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, obere Schwelle überschritten | 0 | - |
| 0x222B29 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, untere Schwelle unterschritten | 0 | - |
| 0x222B2A | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, Kurzschluss nach Ubat | 0 | - |
| 0x222B2B | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, Kurzschluss nach Masse | 0 | - |
| 0x222B2C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, obere Schwelle überschritten | 0 | - |
| 0x222B2D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, untere Schwelle unterschritten | 0 | - |
| 0x222B2E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, Kurzschluss nach Ubat | 0 | - |
| 0x222B2F | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, Kurzschluss nach Masse | 0 | - |
| 0x222B30 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, obere Schwelle überschritten | 0 | - |
| 0x222B31 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, untere Schwelle unterschritten | 0 | - |
| 0x222B32 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, Kurzschluss nach Ubat | 0 | - |
| 0x222B33 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, Kurzschluss nach Masse | 0 | - |
| 0x222B34 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, obere Schwelle überschritten | 0 | - |
| 0x222B35 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, untere Schwelle unterschritten | 0 | - |
| 0x222B36 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, Kurzschluss nach Ubat | 0 | - |
| 0x222B37 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, Kurzschluss nach Masse | 0 | - |
| 0x222B38 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, obere Schwelle überschritten | 0 | - |
| 0x222B39 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, untere Schwelle unterschritten | 0 | - |
| 0x222B3A | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, Kurzschluss nach Ubat | 0 | - |
| 0x222B3B | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, Kurzschluss nach Masse | 0 | - |
| 0x222B3C | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, obere Schwelle überschritten | 0 | - |
| 0x222B3D | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, untere Schwelle unterschritten | 0 | - |
| 0x222B3E | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B3F | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B40 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, obere Schwelle überschritten | 0 | - |
| 0x222B41 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B42 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B43 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B44 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B45 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B46 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung 2 Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B47 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung 2 Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B48 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung 2 Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B49 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung 2 Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B4C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B4D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B4E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B4F | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B50 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B51 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B52 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B53 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B54 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, Kurzschluss nach Ubat | 0 | - |
| 0x222B55 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, Kurzschluss nach Masse | 0 | - |
| 0x222B56 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, obere Schwelle überschritten | 0 | - |
| 0x222B57 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, untere Schwelle unterschritten | 0 | - |
| 0x222B58 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, Kurzschluss nach Ubat | 0 | - |
| 0x222B59 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, Kurzschluss nach Masse | 0 | - |
| 0x222B5A | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, obere Schwelle überschritten | 0 | - |
| 0x222B5B | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, untere Schwelle unterschritten | 0 | - |
| 0x222B5C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, Kurzschluss nach Ubat | 0 | - |
| 0x222B5D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, Kurzschluss nach Masse | 0 | - |
| 0x222B5E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, obere Schwelle überschritten | 0 | - |
| 0x222B5F | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, untere Schwelle unterschritten | 0 | - |
| 0x222B60 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B61 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B62 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, obere Schwelle überschritten | 0 | - |
| 0x222B63 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B64 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B65 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B66 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, obere Schwelle überschritten | 0 | - |
| 0x222B67 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B68 | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B69 | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B6A | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, obere Schwelle überschritten | 0 | - |
| 0x222B6B | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B6C | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, Kurzschluss nach Ubat | 0 | - |
| 0x222B6D | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, Kurzschluss nach Masse | 0 | - |
| 0x222B6E | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, obere Schwelle überschritten | 0 | - |
| 0x222B6F | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, untere Schwelle unterschritten | 0 | - |
| 0x222B70 | interner Fehler,  Leitungsdiagnose Kältemittelabsperrventil, Kurzschluss zu GND | 0 | - |
| 0x222B71 | interner Fehler,  Leitungsdiagnose Kältemittelabsperrventil, Leitungsunterbrechung. | 0 | - |
| 0x222B72 | interner Fehler,  Leitungsdiagnose Kältemittelabsperrventil, Kurzschluss zu UBAT oder Übertemperatur | 0 | - |
| 0x222C01 | interner Fehler, FZM: Systemzustand unplausibel | 0 | - |
| 0x222C02 | EWS Manipulationsschutz: erwartete Antwort unplausibel | 0 | - |
| 0x222C03 | EME durch EWS gesperrt | 0 | - |
| 0x222C04 | Interner Fehler, HVIL, KS Eingang gegen Masse oder KS Ausgang gegen B+ | 0 | - |
| 0x222C05 | Interner Fehler, HVIL, KS Ausgang gegen Masse oder KS Eingang gegen B+ | 0 | - |
| 0x222C06 | Interner Fehler, HVIL, Kurzschluss Eingang gegen Ausgang oder Leitung offen | 0 | - |
| 0x222C07 | Interner Fehler, HVIL, fehlerhaftes Signal | 0 | - |
| 0x222C08 | Interner Fehler, Montagemodus aktiv | 0 | - |
| 0x222C09 | Interner Fehler, Freilauf Modus aktiv | 0 | - |
| 0x222C0A | Interner Fehler, Freilauf Modus und 6km/h überschritten | 0 | - |
| 0x222C0B | Interner Fehler, Reset auf MC0 | 0 | - |
| 0x222C0C | Interner Fehler, Reset auf MC2 | 0 | - |
| 0x222D00 | ELUP: Betriebsbedingungen der Elup nicht erfüllt. Mögliche Ursachen sind Montage Mode oder Spannung außerhalb von 9 - 16 V | 0 | - |
| 0x222D01 | ELUP, Sensor: Unterdrucksensor elektrischer Fehler | 0 | - |
| 0x222D02 | ELUP, Aktuator: keine Gegeninduktion | 0 | - |
| 0x222D03 | ELUP, Aktuator: Kurzschluss nach Plus | 0 | - |
| 0x222D04 | ELUP, Aktuator: Kurzschluss nach Masse | 0 | - |
| 0x222D05 | ELUP, Aktuator: Unterbrechung oder nicht angesteckt | 0 | - |
| 0x222D06 | ELUP, Treiber: Strom zu hoch | 0 | - |
| 0x222D07 | ELUP, Treiber: Schaltet nicht durch | 0 | - |
| 0x222D08 | ELUP, Treiber: Temperatur zu hoch | 0 | - |
| 0x222D09 | ELUP, Sensor: Temperatur Sensor defekt | 0 | - |
| 0x222D0A | AE, ELUP, Unterdrucksystem, Lekage erkannt | 0 | - |
| 0x222D0B | AE, ELUP, Unterdrucksystem, Elektrische Unterdruckpumpe maximale Laufzeit überschritten (Dauerlauf) | 0 | - |
| 0x222D0C | AE, ELUP, Unterdrucksystem, Elektrische Unterdruckpumpe Förderleistung zu gering | 0 | - |
| 0x222D0D | AE, ELUP, Unterdrucksystem, Unterdruckniveau zu gering | 0 | - |
| 0x222D0E | AE, ELUP, Unterdrucksystem, Unterdrucksensor Messwert außerhalb gültigem Bereich | 0 | - |
| 0x222D0F | ELUP, Aktuator: Maximale Laufzeit ELUP überschritten | 0 | - |
| 0x222D5B | E-Antrieb Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch el. Kühlmittelpumpe erkannt | 0 | - |
| 0x222D5C | E-Antrieb Kühlsystem: Abschaltung el. Kühlmittelpumpe wegen Blockierung | 0 | - |
| 0x222D5D | E-Antrieb Kühlsystem: Betrieb el. Kühlmittelpumpe gestört | 0 | - |
| 0x222D5E | E-Antrieb Kühlsystem: Keine Kommunikation mit el. Kühlmittelpumpe | 0 | - |
| 0x222D5F | E-Antrieb Kühlsystem: Ansteuerleitung el. Kühlmittelpumpe unterbrochen | 0 | - |
| 0x222D60 | E-Antrieb Kühlsystem: Abschaltung el. Kühlmittelpumpe wegen Übertemperatur | 0 | - |
| 0x222D61 | E-Antrieb Kühlsystem: Ansteuerleitung el. Kühlmittelpumpe Kurzschluss nach Masse | 0 | - |
| 0x222D62 | E-Antrieb Kühlsystem: Ansteuerleitung el. Kühlmittelpumpe Kurzschluss nach Ubatt | 0 | - |
| 0x222D63 | Phasenstromoffset Phase U ausserhalb des gueltigen Bereichs | 0 | - |
| 0x222D64 | Phasenstromoffset Phase V ausserhalb des gueltigen Bereichs | 0 | - |
| 0x222D65 | Phasenstromoffset Phase W ausserhalb des gueltigen Bereichs | 0 | - |
| 0x222D66 | Phase U unterbrochen | 1 | - |
| 0x222D67 | Phase V unterbrochen | 1 | - |
| 0x222D68 | Phase W unterbrochen | 1 | - |
| 0x222D69 | EM Überdrehzahl | 0 | - |
| 0x222D6A | EM Übertemperatur | 0 | - |
| 0x222D6B | EME: Interner Fehler. Ebene 2: Alivecounter im Snapshot unplausibel | 0 | - |
| 0x222D6C | EME: Interner Fehler. Ebene 2: Rotorwinkel unplausibel | 0 | - |
| 0x222D6D | EME: Interner Fehler. Ebene 2: Istmoment unplausibel | 0 | - |
| 0x222D6E | EME: Interner Fehler. Ebene 2: Autorisiertes Momentenband verletzt | 0 | - |
| 0x222D6F | EME: Interner Fehler. Ebene 2: Rotorwinkeloffset ausserhalb der Toleranz | 0 | - |
| 0x222D70 | EME: Interner Fehler. Ebene 2: Strom im Zwischenkreis unplausibel | 0 | - |
| 0x222D71 | EME: Interner Fehler. Ebene 2: Rotorstromkomponenten unplausibel | 0 | - |
| 0x222D72 | EME: Interner Fehler. Ebene 2: Phasenstromsumme unplausibel | 0 | - |
| 0x222D73 | EME: Interner Fehler. Ebene 2: Fehler in der Doppelablage am Layer | 0 | - |
| 0x222D74 | EME: Interner Fehler. Ebene 2: PWM-Tastgrad unplausibel | 0 | - |
| 0x222D75 | EME: Interner Fehler. Ebene 2: Fehler in der internen Doppelablage | 0 | - |
| 0x222D76 | EME: Interner Fehler. Ebene 2: Drehzahl unplausibel | 0 | - |
| 0x222D77 | EME: Interner Fehler. Ebene 2: Hochvoltpannung unplausibel | 0 | - |
| 0x222D78 | Hochvoltpannung unplausibel | 0 | - |
| 0x222D79 | Phasenstromsumme unplausibel | 0 | - |
| 0x222D80 | Abschaltung der Elup wegen zu hoher Eingangsspannung | 0 | - |
| 0x222D81 | Abschaltung der Elup wegen zu geringer Eingangsspannung | 0 | - |
| 0x222E00 | E-Maschine Resolverabgleich nicht durchgeführt oder Rotorlagesensor-Offset nicht im Toleranzband. | 0 | - |
| 0x222E01 | E-Maschine, Ebene1, EM Schädigung magnetischer Kreismc2 | 1 | - |
| 0x222E02 | interner Fehler, Ebene1, Unplausibler Temperatursensor-Gradientmc2 | 1 | - |
| 0x222E03 | interner Fehler, Ebene1, Temperatursensor-Signal eingefrorenmc2 | 1 | - |
| 0x222E04 | interner Fehler, Ebene1, Temperaturplausibilisierungmc2 | 1 | - |
| 0x222E07 | AE, interner Sensor, ELUP, ELUP Spannung-Sensor unplausibel | 0 | - |
| 0x222E08 | AE, interner Sensor, ELUP, ELUP Strom-Sensor unplausibel | 0 | - |
| 0x222E09 | AE, interner Sensor, ELUP, ELUP Treiber Temperatur-Sensor unplausibel | 0 | - |
| 0x222E0A | AE, interner Sensor, ELUP, ELUP Treiber Temperatur-Sensor unplausibel | 0 | - |
| 0xD7840A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xD7841F | Flexray, Flexray Control Module Bus OFF | 1 | - |
| 0xD78486 | A-CAN Control Module Bus OFF | 0 | - |
| 0xD78BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD79400 | FA-CAN, Botschaft ausgefallen, A_TEMP | 1 | - |
| 0xD79401 | FA-CAN, Botschaft ausgefallen, DT_EL_GEY | 1 | - |
| 0xD79402 | A-CAN, Botschaft ausgefallen, DT_HVSTO | 1 | - |
| 0xD79403 | FA-CAN, Botschaft ausgefallen FLLUPT_GPWSUP | 1 | - |
| 0xD79404 | FA-CAN, Botschaft ausgefallen, FZZSTD | 1 | - |
| 0xD79405 | FA-CAN, Botschaft ausgefallen KLEMMEN | 1 | - |
| 0xD79406 | A-CAN, Botschaft ausgefallen LIM_CHG_DCHG_HVSTO | 1 | - |
| 0xD79407 | A-CAN, Botschaft ausgefallen, MOD_VC | 1 | - |
| 0xD79408 | A-CAN, Botschaft ausgefallen OBD_INQY_LIM_TORQ | 1 | - |
| 0xD79409 | A-CAN, Botschaft ausgefallen PWMG_LV | 1 | - |
| 0xD7940A | FA-CAN, Botschaft ausgefallen, RQ_AIC | 1 | - |
| 0xD7940B | A-CAN, CAN_Signal ungültig RQ_ELUP, Botschaft ELUP_SPEC | 1 | - |
| 0xD7940C | A-CAN, Botschaft ausgefallen, SAFG_PT | 1 | - |
| 0xD7940D | A-CAN, Botschaft ausgefallen ST_CHG_HVSTO_2 | 1 | - |
| 0xD7940E | A-CAN, Botschaft ausgefallen, ST_CHG_HVSTO_3 | 1 | - |
| 0xD7940F | FA-CAN, Botschaft ausgefallen, ST_CHGINTF | 1 | - |
| 0xD79410 | FA-CAN, Botschaft ausgefallen, ST_CHGINTF_2 | 1 | - |
| 0xD79411 | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_1_PT | 1 | - |
| 0xD79412 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_1_PT | 1 | - |
| 0xD79413 | A-CAN, Botschaft ausgefallen, ST_DIAG_OBD_2_PT | 1 | - |
| 0xD79414 | A-CAN, Alive-Counter Fehler ST_DIAG_OBD_2_PT | 1 | - |
| 0xD79415 | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_3_PT | 1 | - |
| 0xD79416 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_3_PT | 1 | - |
| 0xD7941D | A-CAN, Botschaft ausgefallen, ST_HVSTO_1 | 1 | - |
| 0xD7941E | A-CAN, Botschaft ausgefallen ST_HYB_2 | 1 | - |
| 0xD7941F | A-CAN, Botschaft ausgefallen STAT_HVSTO_2 | 1 | - |
| 0xD79420 | FA-CAN, Botschaft ausgefallen UHRZEIT_DATUM | 1 | - |
| 0xD79423 | FA-CAN, Alive-Counter Fehler, KLEMMEN | 1 | - |
| 0xD79424 | FA-CAN, CRC-Fehler KLEMMEN | 1 | - |
| 0xD79434 | FA-CAN, Botschaft ausgefallen, AVL_BRTORQ_SUM | 1 | - |
| 0xD79435 | A-CAN, Botschaft ausgefallen, AVL_DT_KLE | 1 | - |
| 0xD79436 | A-CAN, Botschaft ausgefallen, AVL_DT_KLE_LT | 1 | - |
| 0xD79437 | FA-CAN, Botschaft ausgefallen, CTR_CR | 1 | - |
| 0xD79438 | FA-CAN, Botschaft ausgefallen, DIAG_OBD_ENG | 1 | - |
| 0xD7943A | A-CAN, Botschaft ausgefallen IDENT_HVSTO | 1 | - |
| 0xD7943B | A-CAN, Botschaft ausgefallen, LIM_KLE | 1 | - |
| 0xD7943C | FA-CAN, Botschaft ausgefallen, ST_BLT_CT_SOCCU | 1 | - |
| 0xD7943D | A-CAN, Botschaft ausgefallen TORQ_CRSH_1 | 1 | - |
| 0xD7943E | Flexray, Botschaft ausgefallen, AVL_RPM_WHL_2 | 1 | - |
| 0xD7943F | Flexray, Botschaft ausgefallen, AVL_RPM_WHL | 1 | - |
| 0xD79440 | Flexray, Alive-Counter Fehler, AVL_RPM_WHL | 1 | - |
| 0xD79441 | Flexray, CRC-Fehler, AVL_RPM_WHL | 1 | - |
| 0xD79442 | FA-CAN, Botschaft ausgefallen, CON_VEH | 1 | - |
| 0xD79443 | Flexray, Botschaft ausgefallen, CRSH_TORQ_DT_HYB_2 | 1 | - |
| 0xD79444 | Flexray, Botschaft ausgefallen, CRSH_TORQ_DT_HYB | 1 | - |
| 0xD79445 | A-CAN, Botschaft ausgefallen, DIAG_OBD_ENG | 1 | - |
| 0xD79446 | A-CAN, Botschaft ausgefallen, DT_GRDT | 1 | - |
| 0xD79447 | A-CAN, Alive-Counter Fehler, DT_GRDT | 1 | - |
| 0xD79448 | A-CAN, CRC-Fehler, DT_GRDT | 1 | - |
| 0xD79449 | A-CAN, Botschaft ausgefallen, DT_HVSTO_2 | 1 | - |
| 0xD7944B | Flexray, Botschaft ausgefallen, DT_PT_2 | 1 | - |
| 0xD7944C | Flexray, Botschaft ausgefallen, DT_PT_3 | 1 | - |
| 0xD7944D | FA-CAN, Botschaft ausgefallen, FAHRGESTELLNUMMER | 1 | - |
| 0xD7944E | FA-CAN, Botschaft ausgefallen, KILOMETERSTAND | 1 | - |
| 0xD7944F | FA-CAN, Botschaft ausgefallen, NAV_SYS_INF | 1 | - |
| 0xD79450 | Flexray, Botschaft ausgefallen, NAVGRAPH_2_PROFIL | 1 | - |
| 0xD79451 | Flexray, Botschaft ausgefallen, NAVGRPH_2_EVT_PROFIL | 1 | - |
| 0xD79452 | Flexray, Botschaft ausgefallen, NAVGRPH_2_PRES_SEG | 1 | - |
| 0xD79453 | Flexray, Botschaft ausgefallen, NAVGRPH_2_RT_DESCR | 1 | - |
| 0xD79454 | Flexray, Botschaft ausgefallen, NAVGRPH_2_RT_OFFS_3R | 1 | - |
| 0xD79455 | FA-CAN, Botschaft ausgefallen, RQ_AIC_HYB | 1 | - |
| 0xD79456 | A-CAN, Botschaft ausgefallen RQ_TORQ_CRSH_GRB_2 | 1 | - |
| 0xD79457 | Flexray, Botschaft ausgefallen, RQ_TORQ_OSTR | 1 | - |
| 0xD79458 | A-CAN, Botschaft ausgefallen, ST_GRB_ECU | 1 | - |
| 0xD79459 | Flexray, Botschaft ausgefallen, ST_STA_PWR_DRV | 1 | - |
| 0xD7945A | Flexray, Botschaft ausgefallen, ST_STAB_DSC_ST_STAB_DSC_2 | 1 | - |
| 0xD7945B | Flexray, Alive-Counter Fehler, ST_STAB_DSC_ST_STAB_DSC_2 | 1 | - |
| 0xD7945C | Flexray, CRC-Fehler, ST_STAB_DSC_ST_STAB_DSC_2 | 1 | - |
| 0xD7945D | Flexray, Botschaft ausgefallen, STAT_ENG_STA_AUTO | 1 | - |
| 0xD7945E | Flexray, Botschaft ausgefallen, TLT_RW_STEA_FTAX_EFFV | 1 | - |
| 0xD7945F | Flexray, Botschaft ausgefallen, TORQ_CRSH_1_ANG_ACPD_2 | 1 | - |
| 0xD79460 | Flexray, Alive-Counter Fehler, TORQ_CRSH_1_ANG_ACPD_2 | 1 | - |
| 0xD79461 | Flexray, CRC-Fehler, TORQ_CRSH_1_ANG_ACPD_2 | 1 | - |
| 0xD79462 | Flexray, Botschaft ausgefallen, TORQ_CRSH_1_ANG_ACPD | 1 | - |
| 0xD79463 | Flexray, Alive-Counter Fehler, TORQ_CRSH_1_ANG_ACPD | 1 | - |
| 0xD79464 | Flexray, CRC-Fehler, TORQ_CRSH_1_ANG_ACPD | 1 | - |
| 0xD79465 | FA-CAN, Botschaft ausgefallen, TS_CALL_ST | 1 | - |
| 0xD79466 | Flexray, Botschaft ausgefallen, U_BN | 1 | - |
| 0xD79467 | Flexray, Botschaft ausgefallen, V_VEH | 1 | - |
| 0xD79468 | A-CAN, Botschaft ausgefallen, WMOM_DRV_1 | 1 | - |
| 0xD794A6 | Flexray, Botschaft ausgefallen, ACLNX_MASSCNTR_ACLNY_MASSCNTR | 1 | - |
| 0xD794B4 | Flexray, Botschaft ausgefallen SU_SW_DRDY_SU_SW_DRDY_2 | 1 | - |
| 0xD794BE | Flexray, Botschaft ausgefallen, RQ_WMOM_PT_SUM_RECUP_3R | 1 | - |
| 0xD794CD | Flexray, Botschaft ausgefallen, WMOM_DRV_5_WMOM_DRV_4 | 1 | - |
| 0xD794D1 | A-CAN, Botschaft ausgefallen RLS_COOL_HVSTO | 1 | - |
| 0xD794D2 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_SLV_3 | 1 | - |
| 0xD794D3 | A-CAN, Botschaft ausgefallen RQ_TORQ_CRSH_GRB | 1 | - |
| 0xD794D4 | Flexray, Botschaft ausgefallen, ST_ENERG_GEN | 1 | - |
| 0xD794D5 | A-CAN, Botschaft ausgefallen ST_GRB_HYB | 1 | - |
| 0xD794D6 | A-CAN, Alive-Counter Fehler, ST_GRB_HYB | 1 | - |
| 0xD794D7 | A-CAN, CRC-Fehler, ST_GRB_HYB | 1 | - |
| 0xD794D8 | Flexray, Botschaft ausgefallen, ST_INFO_CENG | 1 | - |
| 0xD794D9 | Flexray, CRC-Fehler STAT_ENG_STA_AUTO | 1 | - |
| 0xD794DA | FA-CAN, Botschaft ausgefallen, DT_PT_1 | 1 | - |
| 0xD794DB | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_SLV_2 | 1 | - |
| 0xD794DC | Flexray, Botschaft ausgefallen, RELATIVZEIT | 1 | - |
| 0xD794DD | Flexray, Botschaft ausgefallen NM2_A_FR | 1 | - |
| 0xD794E2 | Flexray, Alive-Counter Fehler STAT_ENG_STA_AUTO | 1 | - |
| 0xD794E3 | A-CAN, Botschaft ausgefallen ST_OPMO_HYB_2 | 1 | - |
| 0xD794E4 | A-CAN, Botschaft ausgefallen ST_CHG_HVSTO_1 | 1 | - |
| 0xD794E5 | Flexray, CRC-Fehler, CRSH_TORQ_DT_HYB | 1 | - |
| 0xD794E6 | Flexray, Alive-Counter Fehler, CRSH_TORQ_DT_HYB | 1 | - |
| 0xD794E7 | FA-CAN, Botschaft ausgefallen, BN_UVL | 1 | - |
| 0xD794E8 | A-CAN, Botschaft ausgefallen CTR_COOL_DRV_EL | 1 | - |
| 0xD794E9 | Flexray, Botschaft ausgefallen, SPEC_OPRNG_REX | 1 | - |
| 0xD794EA | FA-CAN, Botschaft ausgefallen, CTR_CRASH_SWO_EKP | 1 | - |
| 0xD794EB | Flexray, Botschaft ausgefallen, RQ_WMOM_PT_SUM_DRS | 1 | - |
| 0xD794EC | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_SLV_3 | 1 | - |
| 0xD794ED | A-CAN, Alive-Counter Fehler, DIAG_OBD_HYB_2 | 1 | - |
| 0xD794EE | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_SLV_2 | 1 | - |
| 0xD794EF | Flexray, Botschaft ausgefallen, DT_BRKSYS_ENGMG | 1 | - |
| 0xD794F0 | A-CAN, Botschaft ausgefallen DT_DISP_GRDT | 1 | - |
| 0xD794F1 | Flexray, Alive-Counter Fehler, DT_PT_2 | 1 | - |
| 0xD794F2 | A-CAN, CRC-Fehler, RQ_TORQ_CRSH_GRB | 1 | - |
| 0xD794F3 | A-CAN, Alive-Counter Fehler, RQ_TORQ_CRSH_GRB | 1 | - |
| 0xD794F4 | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_SLV_1 | 1 | - |
| 0xD794F5 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_SLV_1 | 1 | - |
| 0xD794F7 | A-CAN, Botschaft ausgefallen DIAG_OBD_HYB_2 | 1 | - |
| 0xD794F8 | Flexray, CRC-Fehler, DT_PT_2 | 1 | - |
| 0xD794F9 | A-CAN, Botschaft ausgefallen HYB_SPEC | 1 | - |
| 0xD794FA | Flexray, Botschaft ausgefallen, STAT_ZV_KLAPPEN | 1 | - |
| 0xD794FB | FA-CAN, Alive-Counter Fehler, TORQ_GRB_HYB | 1 | - |
| 0xD794FC | A-CAN, Botschaft ausgefallen, ENERG_COSP_ERR_ST_KLE | 1 | - |
| 0xD794FF | Flexray, Alive-Counter Fehler, V_VEH | 1 | - |
| 0xD79500 | Flexray, CRC-Fehler, V_VEH | 1 | - |
| 0xD79501 | A-CAN, Botschaft ausgefallen TORQ_CRSH_3 | 1 | - |
| 0xD79502 | A-CAN, CRC-Fehler, WMOM_DRV_1 | 1 | - |
| 0xD79503 | FA-CAN, Botschaft ausgefallen, TORQ_GRB_HYB | 1 | - |
| 0xD79504 | Flexray, Botschaft ausgefallen, WMOM_DRV_5_WMOM_DRV_2 | 1 | - |
| 0xD79505 | Flexray, Alive-Counter Fehler, WMOM_DRV_5_WMOM_DRV_2 | 1 | - |
| 0xD79506 | Flexray, CRC-Fehler, WMOM_DRV_5_WMOM_DRV_2 | 1 | - |
| 0xD79507 | Flexray, Botschaft ausgefallen, WMOM_DRV_5_WMOM_DRV | 1 | - |
| 0xD79508 | Flexray, Alive-Counter Fehler, WMOM_DRV_5_WMOM_DRV | 1 | - |
| 0xD79509 | Flexray, CRC-Fehler, WMOM_DRV_5_WMOM_DRV | 1 | - |
| 0xD7950A | Flexray, CRC-Fehler, ACLNX_MASSCNTR_ACLNY_MASS | 1 | - |
| 0xD7950B | Flexray, Alive-Counter Fehler, ACLNX_MASSCNTR_ACLNY_MASS | 1 | - |
| 0xD7950C | Flexray, Botschaft ausgefallen, ACLNX_MASSCNTR_ACLNY_MASS | 1 | - |
| 0xD7950D | A-CAN, Alive-Counter Fehler, WMOM_DRV_1 | 1 | - |
| 0xD7950E | Flexray, Alive-Counter Fehler, TLT_RW_STEA_FTAX_EFFV | 1 | - |
| 0xD79511 | Flexray, Botschaft ausgefallen, SU_SW_DRDY_SU_SW_DRDY | 1 | - |
| 0xD79512 | FA-CAN, Botschaft ausgefallen, TAR_DT_GRB_MOT_1 | 1 | - |
| 0xD79513 | FA-CAN, Alive-Counter Fehler, TAR_DT_GRB_MOT_1 | 1 | - |
| 0xD79514 | FA-CAN, CRC-Fehler, TAR_DT_GRB_MOT_1 | 1 | - |
| 0xD79515 | FA-CAN, CRC-Fehler, TORQ_GRB_HYB | 1 | - |
| 0xD79517 | A-CAN, Alive-Counter Fehler, HYB_SPEC | 1 | - |
| 0xD79518 | Flexray, CRC-Fehler, TLT_RW_STEA_FTAX_EFFV | 1 | - |
| 0xD79519 | A-CAN, CRC-Fehler, HYB_SPEC | 1 | - |
| 0xD7951A | A-CAN, CRC-Fehler, TORQ_CRSH_1 | 1 | - |
| 0xD7951C | A-CAN, Alive-Counter Fehler, TORQ_CRSH_1 | 1 | - |
| 0xD7951D | Flexray, Flexray Control Module Bus OFF | 1 | - |
| 0xD7951E | FA-CAN, Botschaft ausgefallen,  TORQ_CRSH_1 | 1 | - |
| 0xD7951F | FA-CAN, CRC-Fehler,  TORQ_CRSH_1 | 1 | - |
| 0xD79520 | FA-CAN, Alive-Counter Fehler,  TORQ_CRSH_1 | 1 | - |
| 0xD79521 | FA-CAN, Botschaft ausgefallen,  WMOM_DRV_1 | 1 | - |
| 0xD79522 | FA-CAN, CRC-Fehler,  WMOM_DRV_1 | 1 | - |
| 0xD79523 | FA-CAN, Alive-Counter Fehler,  WMOM_DRV_1 | 1 | - |
| 0xD79524 | A-CAN, Botschaft ausgefallen,  DT_PT_2 | 1 | - |
| 0xD79525 | A-CAN, CRC-Fehler,  DT_PT_2 | 1 | - |
| 0xD79526 | A-CAN, Alive-Counter Fehler,  DT_PT_2 | 1 | - |
| 0xD79527 | A-CAN, Botschaft ausgefallen, ST_DIAG_HV_1 | 1 | - |
| 0xD79528 | A-CAN, CRC-Fehler,  ST_DIAG_HV_1 | 1 | - |
| 0xD79529 | A-CAN, Alive-Counter Fehler,  ST_DIAG_HV_1 | 1 | - |
| 0xD7953A | A-CAN, Botschaft ausgefallen, TAR_DT_GRB_MOT_1 | 1 | - |
| 0xD7953B | A-CAN, Alive-Counter Fehler, TAR_DT_GRB_MOT_1 | 1 | - |
| 0xD7953C | A-CAN, CRC-Fehler, TAR_DT_GRB_MOT_1 | 1 | - |
| 0xD7953E | Flexray, CRC-Fehler, ACLNX_MASSCNTR_ACLNY_MASSCNTR | 1 | - |
| 0xD7953F | Flexray, Botschaft ausgefallen, V_VEH_V_VEH_2 | 1 | - |
| 0xD79540 | Flexray, CRC-Fehler, V_VEH_V_VEH_2 | 1 | - |
| 0xD79541 | Flexray, Alive-Counter Fehler, V_VEH_V_VEH_2 | 1 | - |
| 0xD79542 | Flexray, CRC-Fehler, WMOM_DRV_5_WMOM_DRV_4 | 1 | - |
| 0xD79543 | Flexray, Alive-Counter Fehler, WMOM_DRV_5_WMOM_DRV_4 | 1 | - |
| 0xD79547 | Flexray, Alive-Counter Fehler, ACLNX_MASSCNTR_ACLNY_MASSCNTR_3R | 1 | - |
| 0xD79549 | Flexray, CRC-Fehler, RQ_WMOM_PT_SUM_RECUP_3R | 1 | - |
| 0xD7954A | Flexray, Alive-Counter Fehler, RQ_WMOM_PT_SUM_RECUP_3R | 1 | - |
| 0xD7954B | Flexray, CRC-Fehler, WMOM_DRV_5_WMOM_DRV_4_3R | 1 | - |
| 0xD7954C | Flexray, CRC-Fehler, WMOM_DRV_5_WMOM_DRV_4_3R | 1 | - |
| 0xD7954D | Flexray, Alive-Counter Fehler, WMOM_DRV_5_WMOM_DRV_4_3R | 1 | - |
| 0xD7954E | Flexray, Alive-Counter Fehler, WMOM_DRV_5_WMOM_DRV_4_3R | 1 | - |
| 0xD7954F | A-CAN, CRC-Fehler, SAFG_PT_0R | 1 | - |
| 0xD79550 | A-CAN, Alive-Counter Fehler, SAFG_PT_0R | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Ausfall DSC | 0/1 | High | 0x80 | - | - | - | - |
| 0x0002 | Ausfall ASC | 0/1 | High | 0x40 | - | - | - | - |
| 0x0003 | Ausfall VDC | 0/1 | High | 0x20 | - | - | - | - |
| 0x0004 | Ausfall LMV | 0/1 | High | 0x10 | - | - | - | - |
| 0x0005 | Aktiver Heckspoiler | 0/1 | High | 0x08 | - | - | - | - |
| 0x0006 | Reifendruckverlust | 0/1 | High | 0x04 | - | - | - | - |
| 0x0007 | State of Charge low | 0/1 | High | 0x02 | - | - | - | - |
| 0x0008 | Reserve_7 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0009 | Rollenmodus | 0/1 | High | 0x80 | - | - | - | - |
| 0x000A | Motorstart | 0/1 | High | 0x40 | - | - | - | - |
| 0x000B | Reserve_2 | 0/1 | High | 0x20 | - | - | - | - |
| 0x000C | Reserve_3 | 0/1 | High | 0x10 | - | - | - | - |
| 0x000D | Reserve_4 | 0/1 | High | 0x08 | - | - | - | - |
| 0x000E | Reserve_5 | 0/1 | High | 0x04 | - | - | - | - |
| 0x000F | Reserve_6 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0010 | Reserve_7 | 0/1 | High | 0x01 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2800 | STAT_KL30_SPANNUNG_WERT | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x2801 | STAT_GESCHWINDIGKEIT_SCHWERPUNKT_WERT | km/h | High | unsigned char | - | 2.0 | 10.0 | 100.0 |
| 0x2802 | STAT_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x2803 | STAT_GIERRATE_SCHWERPUNKT_WERT | °/s | High | signed char | - | 1.0 | 0.77 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x280D | STAT_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x280E | STAT_IST_LENKWINKEL_FAHRER_WERT | ° | High | signed char | - | 1.0 | 15.0 | 0.0 |
| 0x2811 | STAT_LAENGSGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2812 | STAT_FAHRZUSTAND_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2818 | STAT_REFERNZGESCHWINDIGKEIT_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2858 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x2859 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x285A | STAT_IST_MODUS_SCHALTER_FAHRERLEBNIS | 0-n | High | 0xFF | TAB_FAHRERLEBNIS_MODUS | - | - | - |
| 0x285B | STAT_ANFORDERUNG_MODUS_WECHSEL | 0-n | High | 0xFF | TAB_FAHRERLEBNIS_MODUS | - | - | - |
| 0x285C | STAT_FILTER_MODUS_WECHSEL | 0-n | High | 0xFF | TAB_FAHRERLEBNIS_FILTER | - | - | - |
| 0x285D | STAT_INDIVIDUALISIERTE_AUSPRAEGUNG_SPORTMODUS_WERT | HEX | High | unsigned int | - | - | - | - |
| 0x4011 | UWB_U_AC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | UWB_I_AC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | UWB_U_DC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | UWB_I_DC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | UWB_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4016 | UWB_LLC_TRAFO_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4017 | UWB_SLE_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4018 | UWB_BTS_STATUS_PIC | HEX | High | unsigned int | - | - | - | - |
| 0x4019 | UWB_P_SOLL_HVPM_LADEN | W | High | unsigned int | - | 30.0 | 1.0 | 0.0 |
| 0x401A | UWB_I_MAX_ALTC_SLE | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x401B | UWB_I_MAX_DC_SLE | A | High | unsigned char | - | 0.8 | 1.0 | 0.0 |
| 0x401C | UWB_CHA_ENB | 0/1 | High | 0x01 | - | - | - | - |
| 0x401D | UWB_CTRL_STATUS_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401E | UWB_RUNLEVEL_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401F | UWB_CHA_DUR_SLE | s | High | unsigned char | - | 150.0 | 1.0 | 0.0 |
| 0x4020 | UWB_HVPM_CHGCOND_HVSTO | % | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4021 | UWB_HVPM_AVL_U_HV_LINK_MOT_TRCT | V | High | unsigned int | - | 0.2 | 1.0 | 0.0 |
| 0x4022 | UWB_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_HVPM_ST_CHGRDI | - | - | - |
| 0x4023 | UWB_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_HVPM_ST_CHGNG | - | - | - |
| 0x4031 | UWB_HVPM_AVL_I_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4032 | UWB_HWPM_AVL_I_EKK | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x4034 | UWB_HVPM_AVL_U_HVSTO | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4035 | UWB_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4036 | UWB_HVPM_CTR_MEASMT_ISL | 0-n | High | 0xFF | TAB_HVPM_CTR_MEASMT_ISL | - | - | - |
| 0x4037 | UWB_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_HVPM_CHGNG_TYP_IMME | - | - | - |
| 0x4038 | UWB_HVPM_STATUS_HV_STARTFEHLER | HEX | High | signed long | - | - | - | - |
| 0x4039 | UWB_HVPM_STATUS_HVSTART_KOMM | HEX | High | unsigned char | - | - | - | - |
| 0x403A | UWB_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x403B | UWB_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x403D | UWB_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x403E | UWB_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x403F | UWB_HVPM_I_BATT_SME | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4040 | UWB_HVPM_ST_CRASH_MOD | HEX | High | unsigned char | - | - | - | - |
| 0x4041 | UWB_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x4042 | UWB_HVPM_ST_CRASH_SERVERTY | HEX | High | unsigned char | - | - | - | - |
| 0x4043 | UWB_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4044 | UWB_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4045 | UWB_HVPM_IBATT_BN | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4046 | UWB_HVPM_UBATT_BN | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4047 | UWB_HVPM_F_DCDC1_gen | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x4048 | UWB_OBD_CALC_LOAD_VAL | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x4049 | UWB_OBD_VEH_SPEED | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x404A | UWB_OBD_ENG_COOL_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x404B | UWB_OBD_THROT_POS | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x404C | UWB_OBD_CHG_COND_HVSTO | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x404D | UWB_EWP_DUTYCYCLE | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x404E | UWB_EWP_DIAGSTATUS | HEX | High | unsigned char | - | - | - | - |
| 0x404F | UWB_EWP_AE_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4050 | UWB_EWP_TEMP_ENTRY | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4051 | UWB_EWP_TEMP_EXIT | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4052 | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4053 | UWB_ELUP_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | UWB_ELUP_UNTERDRUCK | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x4055 | UWB_BA_SOLL_HVPM_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4056 | UWB_REASON_FAILSAFE | HEX | High | unsigned int | - | - | - | - |
| 0x4057 | UWB_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x4058 | UWB_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x405B | UWB_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x405C | UWB_OBD_MOTORDREHZAHL | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x405D | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x405E | UWB_RSTINFO_EXCADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x405F | UWB_RSTINFO_FUSIFLAGS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4060 | UWB_RSTINFO_DSADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4061 | UWB_RSTINFO_CAUSE_MC0 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x4062 | UWB_RSTINFO_EXCCLASS_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4063 | UWB_RSTINFO_EXCTIN_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4064 | UWB_RSTINFO_WDERRCTR_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4065 | UWB_RSTINFO_EXTWDINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4066 | UWB_RSTINFO_EXTWDTREASON_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4067 | UWB_RSTINFO_OWNVSMSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4068 | UWB_RSTINFO_SWSOURCE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4069 | UWB_RSTINFO_SWINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x406A | UWB_RSTINFO_EXCADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406B | UWB_RSTINFO_FUSIFLAGS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406C | UWB_RSTINFO_DSADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406D | UWB_RSTINFO_CAUSE_MC2 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x406E | UWB_RSTINFO_EXCCLASS_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x406F | UWB_RSTINFO_EXCTIN_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4070 | UWB_RSTINFO_WDERRCTR_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4071 | UWB_RSTINFO_EXTWDINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4072 | UWB_RSTINFO_EXTWDTREASON_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4073 | UWB_RSTINFO_OWNVSMSTATE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4074 | UWB_RSTINFO_SWSOURCE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4075 | UWB_RSTINFO_SWINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4077 | UWB_EME_CPU_TIME_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4078 | UWB_EME_CPU_TIME_1 | HEX | High | unsigned long | - | - | - | - |
| 0x407B | UWB_CPLD_SS_ENTRY_0 | HEX | High | unsigned int | - | - | - | - |
| 0x407C | UWB_CPLD_SS_ENTRY_1 | HEX | High | unsigned int | - | - | - | - |
| 0x407F | UWB_RSTINFO_INTWDTREASON | HEX | High | unsigned char | - | - | - | - |
| 0x4081 | UWB_T_DIE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4085 | UWB_V_U_ZK | HEX | High | unsigned long | - | - | - | - |
| 0x4086 | UWB_EME_CPU_TIME_0_REC | HEX | High | unsigned long | - | - | - | - |
| 0x4087 | UWB_EME_CPU_TIME_1_REC | HEX | High | unsigned long | - | - | - | - |
| 0x408A | UWB_CPLD_SS_ENTRY_0_REC | HEX | High | unsigned int | - | - | - | - |
| 0x408B | UWB_CPLD_SS_ENTRY_1_REC | HEX | High | unsigned int | - | - | - | - |
| 0x4090 | UWB_DCDC_I_LAST | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4091 | UWB_DCDC_I_TRAFIL | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4092 | UWB_DCDC_I_TRA | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4093 | UWB_DCDC_I_TIEFSETZER_PH1 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4094 | UWB_DCDC_I_TIEFSETZER_PH2 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4095 | UWB_DCDC_I_BATTERY | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4096 | UWB_DCDC_T_BOARD | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4097 | UWB_DCDC_T_GLEICHRICHTER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4098 | UWB_DCDC_T_GEGENTAKTWANDLER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4099 | UWB_DCDC_T_TIEFSETZER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x409A | UWB_DCDC_U_HV_BATTERY | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x409B | UWB_DCDC_U_LV_AUSGANG | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x409C | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH1 | HEX | High | unsigned int | - | - | - | - |
| 0x409D | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH2 | HEX | High | unsigned int | - | - | - | - |
| 0x409E | UWB_DCDC_SPI_ERROR_STATUS_MC0 | HEX | High | unsigned int | - | - | - | - |
| 0x409F | UWB_DCDC_SPI_ERROR_STATUS_MC6 | HEX | High | unsigned int | - | - | - | - |
| 0x40A0 | UWB_DCDC_U_GNDDIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4100 | UWB_AE_EM_DREHZAL | 1/min | High | unsigned int | - | 0.5 | 1.0 | -12000.0 |
| 0x4101 | UWB_PS_AKTUELLER_BEFEHL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | UWB_PS_STROM_HBRUECKE | mA | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | UWB_PS_POS_SENS1 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | UWB_PS_POS_SENS2 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4105 | UWB_PS_SPG_SENS1 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4107 | UWB_AE_EM_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4108 | UWB_AE_INV_TEMP_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4109 | UWB_AE_INV_TEMP_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410A | UWB_AE_INV_TEMP_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410B | UWB_AE_EM_MD_SOLL | Nm | High | unsigned int | - | 0.5 | 1.0 | -1023.5 |
| 0x410C | UWB_SPI_RDC_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x410D | UWB_STAT_RESOLVER | HEX | High | unsigned char | - | - | - | - |
| 0x410E | UWB_FUSI_LD_MC0 | HEX | High | signed long | - | - | - | - |
| 0x4111 | UWB_VEH_SPEED | km/h | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4112 | UWB_FUSI_LD_MC2 | HEX | High | unsigned int | - | - | - | - |
| 0x4113 | UWB_ECU_SYSSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4116 | UWB_EM_ISTMOMENT | Nm | High | unsigned int | - | 1.0 | 1.0 | -5000.0 |
| 0x4117 | UWB_EM_ROTORTEMP | °C | High | unsigned char | - | 5.0 | 1.0 | -512.0 |
| 0x4118 | UWB_EM_DERATINGS | HEX | High | unsigned int | - | - | - | - |
| 0x4119 | UWB_INV_TEMP_GD | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x411A | UWB_INV_I_ZK | A | High | unsigned int | - | 1.0 | 10.0 | -1000.0 |
| 0x411B | UWB_EM_FAILAEO | HEX | High | unsigned int | - | - | - | - |
| 0x411C | UWB_TEMP_EX | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4130 | UWB_FUSI_SSD_STATUS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4131 | UWB_FUSI_CPLD_INFO | HEX | High | unsigned char | - | - | - | - |
| 0x4132 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x4133 | UWB_FUSI_UZK | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4134 | UWB_FUSI_DCRG_STATUS_MC0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4135 | UWB_FUSI_I_INV_DC | mA | High | unsigned char | - | 35.0 | 1.0 | -1000000.0 |
| 0x4136 | UWB_FUSI_BA_EM_SOLL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4137 | UWB_FUSI_T_PWR_UP | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4138 | UWB_FUSI_T_KL15_AN | s | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4139 | UWB_FUSI_SPT_TEST_STEP | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413A | UWB_FUSI_OPMO_CHGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413B | UWB_FUSI_DCRG_STATUS_MC2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413C | UWB_FUSI_OPMO_DCDC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413D | UWB_FUSI_I_DCDC_LV | mA | High | unsigned char | - | 200.0 | 1.0 | 0.0 |
| 0x413E | UWB_FUSI_SME_SUTZ_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413F | UWB_FUSI_DCDC_CTRL_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4140 | UWB_FUSI_INV_LSS_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x4141 | UWB_FUSI_PFC_ENUM_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4142 | UWB_FUSI_PFC_SIGNATURE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4143 | UWB_FUSI_PFC_MAXDIFF_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4144 | UWB_FUSI_PFC_MAXDIFF_10MS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4145 | UWB_FUSI_PFC_ENUM_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4146 | UWB_FUSI_PFC_SIGNATURE_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4147 | UWB_FUSI_PFC_MAXDIFF_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4148 | UWB_FUSI_PFC_MAXDIFF_10MS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4149 | UWB_FUSI_SPT_MIX_STATUS_1 | HEX | High | unsigned long | - | - | - | - |
| 0x414A | UWB_FUSI_SPT_MIX_STATUS_2 | HEX | High | unsigned int | - | - | - | - |
| 0x414B | UWB_FUSI_SPT_MIX_STATUS_3 | HEX | High | unsigned long | - | - | - | - |
| 0x414C | UWB_FUSI_HVSM0_STATUS | HEX | High | unsigned long | - | - | - | - |
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
| 0x001001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 | - |
| 0x002001 | NVM_E_WRITE_FAILED | 0 | - |
| 0x002002 | NVM_E_READ_FAILED | 0 | - |
| 0x002003 | NVM_E_CONTROL_FAILED | 0 | - |
| 0x002004 | NVM_E_ERASE_FAILED | 0 | - |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 | - |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 | - |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 | - |
| 0x222371 | Versorgungsspannungen Inverter-Gate-Driver außerhalb erlaubtem Bereich | 0 | - |
| 0x222503 | interne Ladeelektronik; Charge_Enable Signal nicht vorhanden. | 0 | - |
| 0x222504 | interne Ladeelektronik; AC-Spannung wird nicht gemessen. (Sensordefekt oder Kabelschaden) | 0 | - |
| 0x22250B | SLE, Unterspannungserkennung LLCHV Zwischenkreis, min. Wert unterschritten | 0 | - |
| 0x222516 | interne Ladeelektronik; AC-Stromsensor unplausibel zu hoch | 0 | - |
| 0x222517 | interne Ladeelektronik; AC-Stromsensor unplausibel zu niedrig | 0 | - |
| 0x222530 | interne Ladeelektronik; Wirkungsgrad ist unplausibel zu hoch | 0 | - |
| 0x222531 | interne Ladeelektronik; Wirkungsgrad ist unplausibel zu niedrig | 0 | - |
| 0x222635 | AEPH, AKS | 0 | - |
| 0x222700 | FUSI, Radblockiererkennung: Anforderung 0 Nm aktiv | 0 | - |
| 0x222783 |  FUSI SPT Keine HV Fehler  | 0 | - |
| 0x22278D | safe state request rootcause monitoring | 0 | - |
| 0x22278E | safe state requeste record monitoring | 0 | - |
| 0x222801 | Einfacher UCX-Schützkleber | 1 | - |
| 0x222803 | Degradation von Ladehardware | 1 | - |
| 0x222808 | HV-Powermanagement: Ausfall / Fehlverhalten des DCDC-Wandlers | 1 | - |
| 0x222809 | HV-Powermanagement: Abschaltaufforderer Kat 1 | 1 | - |
| 0x22280A | HV-Powermanagement: Abschaltaufforderer Kat 2 | 1 | - |
| 0x22280B | HV-Powermanagement: Abschaltaufforderer Kat 4 | 1 | - |
| 0x22280C | HV-Powermanagement: eKMV degradiert bei Fahrbereitschaft | 1 | - |
| 0x22280D | HV-Powermanagement: Verhindern Standfunktionen aufgrund niedrigem Ladezustand HV-Batterie | 1 | - |
| 0x22280E | HV-Batterie: Ausfall Batteriekühlung | 1 | - |
| 0x222811 | Bei SOC (HV-Batterie) nahe am SOC_min der HV-Batterie werden im Leistungskoordinator andere Prioritäten gesetzt | 1 | - |
| 0x22281F | FIS zum Auslösen der CCM 875 | 1 | - |
| 0x222825 | FIS zum Auslösen der CCM 884 | 1 | - |
| 0x222836 | F_M_BMW_SIG_HVPM_FAULTTYPE -> Signalausfall : HV Powermanagement | 1 | - |
| 0x2228DB | Notlaufmanager: Niedrige Restreichweite Reichweite kleiner Schwelle und Fahrer stellt das Fahrzeug ab FIS_BMW_SOCMIN_KL15 | 1 | - |
| 0x222A01 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, Kurzschluss nach Ubat | 0 | - |
| 0x222A03 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, Kurzschluss nach Masse | 0 | - |
| 0x222A05 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, obere Schwelle überschritten | 0 | - |
| 0x222A07 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, untere Schwelle unterschritten | 0 | - |
| 0x222A16 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase U fehlerhaft | 0 | - |
| 0x222A18 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase V fehlerhaft | 0 | - |
| 0x222A1A | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase W fehlerhaft | 0 | - |
| 0x222A1C | Interner Fehler, Messwerterfassung, Sensor: DC Strom Inverter fehlerhaft | 0 | - |
| 0x222A1E | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase U fehlerhaft | 0 | - |
| 0x222A20 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase V fehlerhaft | 0 | - |
| 0x222A22 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase W fehlerhaft | 0 | - |
| 0x222A24 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 12V Klemme 30B fehlerhaft | 0 | - |
| 0x222A26 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 5V CY320_MC0 fehlerhaft | 0 | - |
| 0x222A28 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 3.3V CY320_MC0 fehlerhaft | 0 | - |
| 0x222A2A | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 1.5V CY320_MC0 fehlerhaft | 0 | - |
| 0x222A2C | Interner Fehler, Messwerterfassung, Sensor: Zwischenkreisspannung fehlerhaft | 0 | - |
| 0x222A2E | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase U (redundant) fehlerhaft | 0 | - |
| 0x222A30 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase V (redundant) fehlerhaft | 0 | - |
| 0x222A32 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase W (redundant) fehlerhaft | 0 | - |
| 0x222A34 | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Inverter fehlerhaft | 0 | - |
| 0x222A36 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzsteller-Strom 1 fehlerhaft | 0 | - |
| 0x222A38 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzsteller-Strom 2 fehlerhaft | 0 | - |
| 0x222A3C | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktwandler fehlerhaft | 0 | - |
| 0x222A3E | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller fehlerhaft | 0 | - |
| 0x222A40 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter fehlerhaft | 0 | - |
| 0x222A42 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board fehlerhaft | 0 | - |
| 0x222A44 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Spannung Niedervoltseite fehlerhaft | 0 | - |
| 0x222A46 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom auf der Niedervoltseite fehlerhaft | 0 | - |
| 0x222A48 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gatetreiber Spannung fehlerhaft | 0 | - |
| 0x222A4A | Interner Fehler, Messwerterfassung, Sensor: analoger Messeingang SIN-Resolversignal fehlerhaft | 0 | - |
| 0x222A4C | Interner Fehler, Messwerterfassung, Sensor: analoger Messeingang COS-Resolversignal | 0 | - |
| 0x222A58 | Interner Fehler, Messwerterfassung, Sensor: Stromsignal der elektrischen Unterdruckpumpe fehlerhaft | 0 | - |
| 0x222A5A | Interner Fehler, Messwerterfassung, Sensor: analoges Messsignal Überwachung ELUP-Spannung fehlerhaft | 0 | - |
| 0x222A5C | Interner Fehler, Messwerterfassung, Sensor: Temperatur ELUP Endstufe fehlerhaft | 0 | - |
| 0x222A5E | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 5V CY320_MC2 fehlerhaft | 0 | - |
| 0x222A60 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 3.3V CY320_MC2 fehlerhaft | 0 | - |
| 0x222A62 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 1.5V CY320_MC2 fehlerhaft | 0 | - |
| 0x222A64 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interne 32V fehlerhaft | 0 | - |
| 0x222A66 | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Controllerboard fehlerhaft | 0 | - |
| 0x222A68 | Interner Fehler, Messwerterfassung, Sensor: CPLD Version fehlerhaft | 0 | - |
| 0x222A69 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, obere Schwelle überschritten | 0 | - |
| 0x222A6A | Interner Fehler, Messwerterfassung, Sensor: SLE Eingangsspannung fehlerhaft | 0 | - |
| 0x222A6B | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, untere Schwelle unterschritten | 0 | - |
| 0x222A6C | Interner Fehler, Messwerterfassung, Sensor: Spannung Ausgang  PFC Stufe fehlerhaft | 0 | - |
| 0x222A6E | Interner Fehler, Messwerterfassung, Sensor: Steuer-/Ladeelektronik Pic nicht verbunden | 0 | - |
| 0x222A70 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Pic nicht verbunden | 0 | - |
| 0x222A71 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, obere Schwelle überschritten | 0 | - |
| 0x222A72 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Trafo fehlerhaft | 0 | - |
| 0x222A73 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, untere Schwelle unterschritten | 0 | - |
| 0x222A74 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Trafo fehlerhaft | 0 | - |
| 0x222A76 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Spannung2 Niedervoltseite fehlerhaft | 0 | - |
| 0x222A78 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom2 auf der Niedervoltseite fehlerhaft | 0 | - |
| 0x222A79 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, obere Schwelle überschritten | 0 | - |
| 0x222A7B | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, untere Schwelle unterschritten | 0 | - |
| 0x222A7C | Interner Fehler, Messwerterfassung, Sensor: SLE LLC HV Ausgangsspannung fehlerhaft | 0 | - |
| 0x222A7E | Interner Fehler, Messwerterfassung, Sensor: Messsignal Motortemperatur Drahtspuelenende fehlerhaft | 0 | - |
| 0x222A81 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, obere Schwelle überschritten | 0 | - |
| 0x222A82 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Gatedriver fehlerhaft | 0 | - |
| 0x222A83 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, untere Schwelle unterschritten | 0 | - |
| 0x222A84 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Phasenstromsensoren fehlerhaft | 0 | - |
| 0x222A8D | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Versorgungsspannung 1 fehlerhaft | 0 | - |
| 0x222A8F | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Versorgungsspannung 2 fehlerhaft | 0 | - |
| 0x222A91 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Versorgungsspannung 3 fehlerhaft | 0 | - |
| 0x222A93 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Versorgungsspannung 1 fehlerhaft | 0 | - |
| 0x222A95 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Versorgungsspannung 2 fehlerhaft | 0 | - |
| 0x222A97 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Versorgungsspannung 3 fehlerhaft | 0 | - |
| 0x222A98 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, obere Schwelle überschritten | 0 | - |
| 0x222A9A | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, untere Schwelle unterschritten | 0 | - |
| 0x222A9B | Interner Fehler, Messwerterfassung, Sensor: Diagnoseeingang für Massefehler fehlerhaft | 0 | - |
| 0x222A9D | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungseingang Dcdc Board fehlerhaft | 0 | - |
| 0x222A9F | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungseingang Dcdc Board fehlerhaft | 0 | - |
| 0x222AA0 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, obere Schwelle überschritten | 0 | - |
| 0x222AA1 | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungseingang Dcdc Board fehlerhaft | 0 | - |
| 0x222AA2 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, untere Schwelle unterschritten | 0 | - |
| 0x222AA3 | Interner Fehler, Messwerterfassung, Sensor: gefilterter Dcdc Trafostrom fehlerhaft | 0 | - |
| 0x222AA5 | Interner Fehler, Messwerterfassung, Sensor: gefilterter SLE LLC Strom fehlerhaft | 0 | - |
| 0x222AA7 | Interner Fehler, Messwerterfassung, Sensor: gefilterter Effektivwert von SLE PFC Strom fehlerhaft | 0 | - |
| 0x222AA9 | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Board Temperatur 1 fehlerhaft | 0 | - |
| 0x222AAB | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE Hochvolttemperatur fehlerhaft | 0 | - |
| 0x222AAD | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE LLC Transformator Temperatur fehlerhaft | 0 | - |
| 0x222AAF | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Zwischenkreis Temperatur fehlerhaft | 0 | - |
| 0x222AB1 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Konverter Referenzspannung fehlerhaft | 0 | - |
| 0x222AB3 | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Board Temperatur 2 fehlerhaft | 0 | - |
| 0x222AB5 | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Board Temperatur 3 fehlerhaft | 0 | - |
| 0x222AE4 | SLE  AC-Spannung Sensor Kurzschluß zu Masse | 0 | - |
| 0x222AE6 | SLE  PFC-Spannung  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AE8 | SLE  Zwischenkreis-Spannung  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AE9 | SLE AC Strom Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEA | SLE AC Strom  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AEC | SLE  HV Strom  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AED | SLE LLC-Temperatursensor Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEF | SLE Transformator Temperatursensor Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF1 | SLE Drossel (HV)  Temperatur Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF3 | SLE PFC_T_Sensor_1 Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF5 | SLE PFC_T_Sensor_2 Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF7 | SLE PFC_T_Sensor_3 Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AFA | SLE  AC-Spannung hat untere Schwelle unterschritten | 0 | - |
| 0x222AFC | SLE  PFC-Spannung hat untere Schwelle unterschritten | 0 | - |
| 0x222AFE | SLE  Zwischenkreis-Spannung hat untere Schwelle unterschritten | 0 | - |
| 0x222AFF | SLE AC Strom hat obere Schwelle überschritten | 0 | - |
| 0x222B00 | SLE AC Strom hat untere Schwelle unterschritten | 0 | - |
| 0x222B02 | SLE  HV Strom hat untere Schwelle unterschritten | 0 | - |
| 0x222B04 | SLE LLC-Temperatursensor hat untere Schwelle unterschritten | 0 | - |
| 0x222B06 | SLE Transformator Temperatursensor Sensor hat untere Schwelle unterschritten | 0 | - |
| 0x222B08 | SLE Drossel (HV) Temperatur hat obere Schwelle hat untere Schwelle unterschritten | 0 | - |
| 0x222B0A | SLE PFC_T_Sensor_1 hat untere Schwelle unterschritten | 0 | - |
| 0x222B0C | SLE PFC_T_Sensor_2 hat untere Schwelle unterschritten | 0 | - |
| 0x222B0E | SLE PFC_T_Sensor_3 hat untere Schwelle unterschritten | 0 | - |
| 0x222B10 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, obere Schwelle überschritten | 0 | - |
| 0x222B11 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, untere Schwelle unterschritten | 0 | - |
| 0x222B73 | Interner Fehler, Messwerterfassung, Sensor: SLE Zwischenkreisspannung fehlerhaft | 0 | - |
| 0x222B7A | DC-Überstrom Inverter | 0 | - |
| 0x222C00 | Diagnose, AKS via Diagnosejob angefordert | 0 | - |
| 0x222E0B | AE, ELUP, Unterdrucksystem, Umgebungsdruck zu niedrig aufgrund Höhe | 0 | - |
| 0x223800 | SME, DTC_ACAN_BUS_BUS_OFF, 0xCAC486 | 0 | - |
| 0x223801 | SME, DTC_ACAN_MSG_A_TEMP_RX_FAIL, 0xCAD401 | 0 | - |
| 0x223802 | SME, DTC_ACAN_MSG_RLS_COOL_RX_FAIL, 0xCAD409 | 0 | - |
| 0x223803 | SME, DTC_ACAN_MSG_V_VEH_RX_FAIL, 0xCAD40A | 0 | - |
| 0x223804 | SME, DTC_ACAN_MSG_KLEMMEN_RX_FAIL, 0xCAD40C | 0 | - |
| 0x223805 | SME, DTC_ACAN_MSG_SPEC_DCSW_RX_FAIL, 0xCAD415 | 0 | - |
| 0x223806 | SME, DTC_ACAN_RQ_CLO_DCSW_INVALID, 0xCAD416 | 0 | - |
| 0x223807 | SME, DTC_MAINSW_K2_SHORT_GND, 0x21F000 | 0 | - |
| 0x223808 | SME, DTC_MAINSW_K2_SHORT_BAT, 0x21F001 | 0 | - |
| 0x223809 | SME, DTC_MAINSW_K2_OPEN_CABLE, 0x21F002 | 0 | - |
| 0x22380A | SME, DTC_MAINSW_K1_SHORT_GND, 0x21F003 | 0 | - |
| 0x22380B | SME, DTC_MAINSW_K1_SHORT_BAT, 0x21F004 | 0 | - |
| 0x22380C | SME, DTC_MAINSW_K1_OPEN_CABLE, 0x21F005 | 0 | - |
| 0x22380D | SME, DTC_MAINSW_K3_SHORT_GND, 0x21F006 | 0 | - |
| 0x22380E | SME, DTC_MAINSW_K3_SHORT_BAT, 0x21F007 | 0 | - |
| 0x22380F | SME, DTC_MAINSW_K3_OPEN_CABLE, 0x21F008 | 0 | - |
| 0x223810 | SME, FIS_DTC_MAINSW_K2_DRIVER_ERROR, 0x21F009 | 0 | - |
| 0x223811 | SME, FIS_DTC_MAINSW_K1_DRIVER_ERROR, 0x21F00A | 0 | - |
| 0x223812 | SME, FIS_DTC_MAINSW_K3_DRIVER_ERROR, 0x21F00B | 0 | - |
| 0x223813 | SME, FIS_DTC_SUPPLY_VOLT_5_LOW, 0x21F00E | 0 | - |
| 0x223814 | SME, FIS_DTC_CSC_POWER_SUP_SHORT_GND, 0x21F007 | 0 | - |
| 0x223815 | SME, FIS_DTC_CSC_POWER_SUP_SHORT_BAT, 0x21F008 | 0 | - |
| 0x223816 | SME, FIS_DTC_CSC_POWER_SUP_OPN_CBL, 0x21F009 | 0 | - |
| 0x223817 | SME, FIS_DTC_CSC_POWER_SUP_DRIVER_ERROR, 0x21F00A | 0 | - |
| 0x223818 | SME, FIS_DTC_ISENS_SUP_SHORT_GND, 0x21F220 | 0 | - |
| 0x223819 | SME, FIS_DTC_ISENS_SUP_SHORT_BAT, 0x21F221 | 0 | - |
| 0x22381A | SME, FIS_DTC_ISENS_SUP_OPN_CBL, 0x21F222 | 0 | - |
| 0x22381B | SME, FIS_DTC_COOL_VLV_SHORT_GND, 0x21F00D | 0 | - |
| 0x22381C | SME, FIS_DTC_COOL_VLV_SHORT_BAT, 0x21F00E | 0 | - |
| 0x22381D | SME, FIS_DTC_COOL_VLV_OPN_CBL, 0x21F00F | 0 | - |
| 0x22381E | SME, FIS_DTC_COOL_VLV_DRIVER_ERROR, 0x21F010 | 0 | - |
| 0x22381F | SME, FIS_DTC_COOLSYS_TEMP_RANGE_HI, 0x21F011 | 0 | - |
| 0x223820 | SME, FIS_DTC_COOLSYS_TEMP_RANGE_LO, 0x21F012 | 0 | - |
| 0x223821 | SME, FIS_DTC_COOLSYS_TSENS_SHORT_GND, 0x21F013 | 0 | - |
| 0x223822 | SME, FIS_DTC_COOLSYS_TSENS_SHORT_BAT, 0x21F014 | 0 | - |
| 0x223823 | SME, FIS_DTC_ECU_UNEXPECTED_SHUTDOWN, 0x21F022 | 0 | - |
| 0x223824 | SME, FIS_DTC_ECU_RAM_DEFECT_INIT, 0x21F023 | 0 | - |
| 0x223825 | SME, FIS_DTC_ECU_RAM_DEFECT_RUN, 0x21F024 | 0 | - |
| 0x223826 | SME, FIS_DTC_ECU_ROM_DEFECT_RUN, 0x21F025 | 0 | - |
| 0x223827 | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_CURRENT, 0x21F02E | 0 | - |
| 0x223828 | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_UBAT, 0x21F02F | 0 | - |
| 0x223829 | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_UK2, 0x21F030 | 0 | - |
| 0x22382A | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_UQ, 0x21F031 | 0 | - |
| 0x22382B | SME, FIS_DTC_ISENS_I_OUTOFRANGE_HI, 0x21F01E | 0 | - |
| 0x22382C | SME, FIS_DTC_ISENS_I_OUTOFRANGE_LO, 0x21F01F | 0 | - |
| 0x22382D | SME, FIS_DTC_ISENS_UBAT_OUTOFRANGE_HI, 0x21F020 | 0 | - |
| 0x22382E | SME, FIS_DTC_ISENS_UBAT_OUTOFRANGE_LO, 0x21F021 | 0 | - |
| 0x22382F | SME, FIS_DTC_ISENS_UK2_OUTOFRANGE_HI, 0x21F036 | 0 | - |
| 0x223830 | SME, FIS_DTC_ISENS_UK2_OUTOFRANGE_LO, 0x21F037 | 0 | - |
| 0x223831 | SME, FIS_DTC_ISENS_UQ_OUTOFRANGE_HI, 0x21F038 | 0 | - |
| 0x223832 | SME, FIS_DTC_ISENS_UQ_OUTOFRANGE_LO, 0x21F039 | 0 | - |
| 0x223833 | SME, FIS_DTC_ISENS_CAN_BUS_OFF, 0x21F03A | 0 | - |
| 0x223834 | SME, FIS_DTC_ISENS_INFO_CRC_ERROR, 0x21F025 | 0 | - |
| 0x223835 | SME, FIS_DTC_ISENS_DRIVER_ERROR, 0x21F029 | 0 | - |
| 0x223836 | SME, FIS_DTC_ISENS_INTERNAL_ERROR, 0x21F02A | 0 | - |
| 0x223837 | SME, FIS_DTC_HEAT_SHORT_ELMNT, 0x21F046 | 0 | - |
| 0x223838 | SME, FIS_DTC_HEAT_OPEN_LOAD, 0x21F047 | 0 | - |
| 0x223839 | SME, FIS_DTC_HEAT_MOSFET_DEFECT, 0x21F048 | 0 | - |
| 0x22383A | SME, FIS_DTC_HEAT_MOSFET_ERR_ACTIVE, 0x21F049 | 0 | - |
| 0x22383B | SME, FIS_DTC_HEAT_MOSFET_OVERTEMP, 0x21F04A | 0 | - |
| 0x22383C | SME, FIS_DTC_HEAT_SHORT_LINK_HV_PLUS, 0x21F04B | 0 | - |
| 0x22383D | SME, FIS_DTC_HEAT_SHORT_LINK_HV_MINUS, 0x21F04C | 0 | - |
| 0x22383E | SME, FIS_DTC_HEAT_FUSE_F2_BLOWN, 0x21F04D | 0 | - |
| 0x22383F | SME, FIS_DTC_HEAT_ISENS_OVERLOAD, 0x21F04E | 0 | - |
| 0x223840 | SME, FIS_DTC_HEAT_USENS_UNDERVOLTAGE, 0x21F04F | 0 | - |
| 0x223841 | SME, FIS_DTC_HEAT_USENS_OVERVOLTAGE, 0x21F050 | 0 | - |
| 0x223842 | SME, FIS_DTC_HEAT_ISENS_PLAUSI_ERROR, 0x21F051 | 0 | - |
| 0x223843 | SME, FIS_DTC_HT_ISENS_RANGE_HI, 0x21F1F7 | 0 | - |
| 0x223845 | SME, FIS_DTC_CSC_CAN_BUS_BUS_OFF, 0x21F04B | 0 | - |
| 0x223846 | SME, FIS_DTC_CSC_MISSING, 0x21F055 | 0 | - |
| 0x223847 | SME, FIS_DTC_CSC_1_MISSING, 0x21F04D | 0 | - |
| 0x223848 | SME, FIS_DTC_CSC_2_MISSING, 0x21F04E | 0 | - |
| 0x223849 | SME, FIS_DTC_CSC_3_MISSING, 0x21F04F | 0 | - |
| 0x22384A | SME, FIS_DTC_CSC_4_MISSING, 0x21F050 | 0 | - |
| 0x22384B | SME, FIS_DTC_CSC_5_MISSING, 0x21F051 | 0 | - |
| 0x22384C | SME, FIS_DTC_CSC_6_MISSING, 0x21F052 | 0 | - |
| 0x22384D | SME, FIS_DTC_CSC_7_MISSING, 0x21F201 | 0 | - |
| 0x22384E | SME, FIS_DTC_CSC_8_MISSING, 0x21F202 | 0 | - |
| 0x22384F | SME, FIS_DTC_CSC_9_MISSING, 0x21F203 | 0 | - |
| 0x223850 | SME, FIS_DTC_CSC_10_MISSING, 0x21F204 | 0 | - |
| 0x223851 | SME, FIS_DTC_CSC_11_MISSING, 0x21F205 | 0 | - |
| 0x223852 | SME, FIS_DTC_CSC_12_MISSING, 0x21F206 | 0 | - |
| 0x223853 | SME, FIS_DTC_MOD_1_CELV_OUTOFRANGE_HI, 0x21F061 | 0 | - |
| 0x223854 | SME, FIS_DTC_MOD_1_CELV_OUTOFRANGE_LO, 0x21F062 | 0 | - |
| 0x223855 | SME, FIS_DTC_MOD_2_CELV_OUTOFRANGE_HI, 0x21F063 | 0 | - |
| 0x223856 | SME, FIS_DTC_MOD_2_CELV_OUTOFRANGE_LO, 0x21F064 | 0 | - |
| 0x223857 | SME, FIS_DTC_MOD_3_CELV_OUTOFRANGE_HI, 0x21F065 | 0 | - |
| 0x223858 | SME, FIS_DTC_MOD_3_CELV_OUTOFRANGE_LO, 0x21F066 | 0 | - |
| 0x223859 | SME, FIS_DTC_MOD_4_CELV_OUTOFRANGE_HI, 0x21F067 | 0 | - |
| 0x22385A | SME, FIS_DTC_MOD_4_CELV_OUTOFRANGE_LO, 0x21F068 | 0 | - |
| 0x22385B | SME, FIS_DTC_MOD_5_CELV_OUTOFRANGE_HI, 0x21F069 | 0 | - |
| 0x22385C | SME, FIS_DTC_MOD_5_CELV_OUTOFRANGE_LO, 0x21F06A | 0 | - |
| 0x22385D | SME, FIS_DTC_MOD_6_CELV_OUTOFRANGE_HI, 0x21F06B | 0 | - |
| 0x22385E | SME, FIS_DTC_MOD_6_CELV_OUTOFRANGE_LO, 0x21F06C | 0 | - |
| 0x22385F | SME, FIS_DTC_MOD_7_CELV_OUTOFRANGE_HI | 0 | - |
| 0x223860 | SME, FIS_DTC_MOD_7_CELV_OUTOFRANGE_LO | 0 | - |
| 0x223861 | SME, FIS_DTC_MOD_8_CELV_OUTOFRANGE_HI, 0x21F064 | 0 | - |
| 0x223862 | SME, FIS_DTC_MOD_8_CELV_OUTOFRANGE_LO, 0x21F065 | 0 | - |
| 0x223863 | SME, FIS_DTC_MOD_9_CELV_OUTOFRANGE_HI, 0x21F066 | 0 | - |
| 0x223864 | SME, FIS_DTC_MOD_9_CELV_OUTOFRANGE_LO, 0x21F067 | 0 | - |
| 0x223865 | SME, FIS_DTC_MOD_10_CELV_OUTOFRANGE_HI | 0 | - |
| 0x223866 | SME, FIS_DTC_MOD_10_CELV_OUTOFRANGE_LO | 0 | - |
| 0x223867 | SME, FIS_DTC_MOD_11_CELV_OUTOFRANGE_HI | 0 | - |
| 0x223868 | SME, FIS_DTC_MOD_11_CELV_OUTOFRANGE_LO | 0 | - |
| 0x223869 | SME, FIS_DTC_MOD_12_CELV_OUTOFRANGE_HI | 0 | - |
| 0x22386A | SME, FIS_DTC_MOD_12_CELV_OUTOFRANGE_LO | 0 | - |
| 0x22386B | SME, FIS_DTC_MOD_1_TEMP_OUTOFRANGE_HI, 0x21F081 | 0 | - |
| 0x22386C | SME, FIS_DTC_MOD_1_TEMP_OUTOFRANGE_LO, 0x21F082 | 0 | - |
| 0x22386D | SME, FIS_DTC_MOD_2_TEMP_OUTOFRANGE_HI, 0x21F083 | 0 | - |
| 0x22386E | SME, FIS_DTC_MOD_2_TEMP_OUTOFRANGE_LO, 0x21F084 | 0 | - |
| 0x22386F | SME, FIS_DTC_MOD_3_TEMP_OUTOFRANGE_HI, 0x21F085 | 0 | - |
| 0x223870 | SME, FIS_DTC_MOD_3_TEMP_OUTOFRANGE_LO, 0x21F086 | 0 | - |
| 0x223871 | SME, FIS_DTC_MOD_4_TEMP_OUTOFRANGE_HI, 0x21F087 | 0 | - |
| 0x223872 | SME, FIS_DTC_MOD_4_TEMP_OUTOFRANGE_LO, 0x21F088 | 0 | - |
| 0x223873 | SME, FIS_DTC_MOD_5_TEMP_OUTOFRANGE_HI, 0x21F089 | 0 | - |
| 0x223874 | SME, FIS_DTC_MOD_5_TEMP_OUTOFRANGE_LO, 0x21F08A | 0 | - |
| 0x223875 | SME, FIS_DTC_MOD_6_TEMP_OUTOFRANGE_HI, 0x21F08B | 0 | - |
| 0x223876 | SME, FIS_DTC_MOD_6_TEMP_OUTOFRANGE_LO, 0x21F08C | 0 | - |
| 0x223877 | SME, FIS_DTC_MOD_7_TEMP_OUTOFRANGE_HI | 0 | - |
| 0x223878 | SME, FIS_DTC_MOD_7_TEMP_OUTOFRANGE_LO | 0 | - |
| 0x223879 | SME, FIS_DTC_MOD_8_TEMP_OUTOFRANGE_HI, 0x21F084 | 0 | - |
| 0x22387A | SME, FIS_DTC_MOD_8_TEMP_OUTOFRANGE_LO, 0x21F085 | 0 | - |
| 0x22387B | SME, FIS_DTC_MOD_9_TEMP_OUTOFRANGE_HI, 0x21F086 | 0 | - |
| 0x22387C | SME, FIS_DTC_MOD_9_TEMP_OUTOFRANGE_LO, 0x21F087 | 0 | - |
| 0x22387D | SME, FIS_DTC_MOD_10_TEMP_OUTOFRANGE_HI | 0 | - |
| 0x22387E | SME, FIS_DTC_MOD_10_TEMP_OUTOFRANGE_LO | 0 | - |
| 0x22387F | SME, FIS_DTC_MOD_11_TEMP_OUTOFRANGE_HI | 0 | - |
| 0x223880 | SME, FIS_DTC_MOD_11_TEMP_OUTOFRANGE_LO | 0 | - |
| 0x223881 | SME, FIS_DTC_MOD_12_TEMP_OUTOFRANGE_HI | 0 | - |
| 0x223882 | SME, FIS_DTC_MOD_12_TEMP_OUTOFRANGE_LO | 0 | - |
| 0x223883 | SME, FIS_DTC_MOD_1_ERR_UMODRANGE_HI, 0x21F0A1 | 0 | - |
| 0x223884 | SME, FIS_DTC_MOD_1_ERR_UMODRANGE_LO, 0x21F0A2 | 0 | - |
| 0x223885 | SME, FIS_DTC_MOD_2_ERR_UMODRANGE_HI, 0x21F0A3 | 0 | - |
| 0x223886 | SME, FIS_DTC_MOD_2_ERR_UMODRANGE_LO, 0x21F0A4 | 0 | - |
| 0x223887 | SME, FIS_DTC_MOD_3_ERR_UMODRANGE_HI, 0x21F0A5 | 0 | - |
| 0x223888 | SME, FIS_DTC_MOD_3_ERR_UMODRANGE_LO, 0x21F0A6 | 0 | - |
| 0x223889 | SME, FIS_DTC_MOD_4_ERR_UMODRANGE_HI, 0x21F0A7 | 0 | - |
| 0x22388A | SME, FIS_DTC_MOD_4_ERR_UMODRANGE_LO, 0x21F0A8 | 0 | - |
| 0x22388B | SME, FIS_DTC_MOD_5_ERR_UMODRANGE_HI, 0x21F0A9 | 0 | - |
| 0x22388C | SME, FIS_DTC_MOD_5_ERR_UMODRANGE_LO, 0x21F0AA | 0 | - |
| 0x22388D | SME, FIS_DTC_MOD_6_ERR_UMODRANGE_HI, 0x21F0AB | 0 | - |
| 0x22388E | SME, FIS_DTC_MOD_6_ERR_UMODRANGE_LO, 0x21F0AC | 0 | - |
| 0x22388F | SME, FIS_DTC_MOD_7_ERR_UMODRANGE_HI | 0 | - |
| 0x223890 | SME, FIS_DTC_MOD_7_ERR_UMODRANGE_LO | 0 | - |
| 0x223891 | SME, FIS_DTC_MOD_8_ERR_UMODRANGE_HI, 0x21F0A4 | 0 | - |
| 0x223892 | SME, FIS_DTC_MOD_8_ERR_UMODRANGE_LO, 0x21F0A5 | 0 | - |
| 0x223893 | SME, FIS_DTC_MOD_9_ERR_UMODRANGE_HI, 0x21F0A6 | 0 | - |
| 0x223894 | SME, FIS_DTC_MOD_9_ERR_UMODRANGE_LO, 0x21F0A7 | 0 | - |
| 0x223895 | SME, FIS_DTC_MOD_10_ERR_UMODRANGE_HI | 0 | - |
| 0x223896 | SME, FIS_DTC_MOD_10_ERR_UMODRANGE_LO | 0 | - |
| 0x223897 | SME, FIS_DTC_MOD_11_ERR_UMODRANGE_HI | 0 | - |
| 0x223898 | SME, FIS_DTC_MOD_11_ERR_UMODRANGE_LO | 0 | - |
| 0x223899 | SME, FIS_DTC_MOD_12_ERR_UMODRANGE_HI | 0 | - |
| 0x22389A | SME, FIS_DTC_MOD_12_ERR_UMODRANGE_LO | 0 | - |
| 0x22389B | SME, FIS_DTC_CSC_ERR_OPN_WIRE, 0x21F0B6 | 0 | - |
| 0x22389C | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_1, 0x21F0C2 | 0 | - |
| 0x22389D | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_2, 0x21F0C3 | 0 | - |
| 0x22389E | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_3, 0x21F0C4 | 0 | - |
| 0x22389F | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_4, 0x21F0C5 | 0 | - |
| 0x2238A0 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_5, 0x21F0C6 | 0 | - |
| 0x2238A1 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_6, 0x21F0C7 | 0 | - |
| 0x2238A2 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_7, 0x21F211 | 0 | - |
| 0x2238A3 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_8, 0x21F212 | 0 | - |
| 0x2238A4 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_9, 0x21F213 | 0 | - |
| 0x2238A5 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_10 | 0 | - |
| 0x2238A6 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_11 | 0 | - |
| 0x2238A7 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_12 | 0 | - |
| 0x2238A8 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_T, 0x21F0C4 | 0 | - |
| 0x2238A9 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL, 0x21F0C7 | 0 | - |
| 0x2238AA | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_1, 0x21F0F6 | 0 | - |
| 0x2238AB | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_2, 0x21F0F7 | 0 | - |
| 0x2238AC | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_3, 0x21F0F8 | 0 | - |
| 0x2238AD | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_4, 0x21F0F9 | 0 | - |
| 0x2238AE | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_5, 0x21F0FA | 0 | - |
| 0x2238AF | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_6, 0x21F0FB | 0 | - |
| 0x2238B0 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_7 | 0 | - |
| 0x2238B1 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_8 | 0 | - |
| 0x2238B2 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_9 | 0 | - |
| 0x2238B3 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_10 | 0 | - |
| 0x2238B4 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_11 | 0 | - |
| 0x2238B5 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_12 | 0 | - |
| 0x2238B6 | SME, FIS_DTC_SERVICE_DISCONNECT_IMPLAUS, 0x21F10A | 0 | - |
| 0x2238B7 | SME, FIS_DTC_CRASH_ACAN_CRASH_REV, 0x21F0CA | 0 | - |
| 0x2238B8 | SME, FIS_DTC_CRASH_KL30C_CRASH_IRR, 0x21F0CB | 0 | - |
| 0x2238B9 | SME, FIS_DTC_SUPPLY_VOLT_KL30F_LOW, 0x21F0CC | 0 | - |
| 0x2238BA | SME, FIS_DTC_SUPPLY_VOLT_KL30C_LOW, 0x21F0CE | 0 | - |
| 0x2238BB | SME, FIS_DTC_COOL_VLV_STUCKOPEN, 0x21F110 | 0 | - |
| 0x2238BC | SME, FIS_DTC_COOL_VLV_STUCKCLOSED, 0x21F111 | 0 | - |
| 0x2238BD | SME, FIS_DTC_MAIN_SW_HEALTH_VERY_LOW, 0x21F0D1 | 0 | - |
| 0x2238BE | SME, FIS_DTC_MAIN_SW_NEG_STUCKDOWN, 0x21F115 | 0 | - |
| 0x2238BF | SME, FIS_DTC_MAIN_SW_NEG_STUCKUP, 0x21F116 | 0 | - |
| 0x2238C0 | SME, FIS_DTC_MAIN_SW_POS_STUCKDOWN, 0x21F117 | 0 | - |
| 0x2238C1 | SME, FIS_DTC_MAIN_SW_POS_STUCKUP, 0x21F118 | 0 | - |
| 0x2238C2 | SME, FIS_DTC_OVERCURRENT_DISCHARGE, 0x21F11E | 0 | - |
| 0x2238C3 | SME, FIS_DTC_OVERCURRENT_CHARGE, 0x21F11F | 0 | - |
| 0x2238C4 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH, 0x21F0DA | 0 | - |
| 0x2238C5 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_1, 0x21F122 | 0 | - |
| 0x2238C6 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_2, 0x21F123 | 0 | - |
| 0x2238C7 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_3, 0x21F124 | 0 | - |
| 0x2238C8 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_4, 0x21F125 | 0 | - |
| 0x2238C9 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_5, 0x21F126 | 0 | - |
| 0x2238CA | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_6, 0x21F127 | 0 | - |
| 0x2238CB | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_7 | 0 | - |
| 0x2238CC | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_8 | 0 | - |
| 0x2238CD | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_9 | 0 | - |
| 0x2238CE | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_10 | 0 | - |
| 0x2238CF | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_11 | 0 | - |
| 0x2238D0 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_12 | 0 | - |
| 0x2238D1 | SME, FIS_DTC_CSC_CELL_VOLT_LOW, 0x21F0DB | 0 | - |
| 0x2238D2 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_1, 0x21F133 | 0 | - |
| 0x2238D3 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_2, 0x21F134 | 0 | - |
| 0x2238D4 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_3, 0x21F135 | 0 | - |
| 0x2238D5 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_4, 0x21F136 | 0 | - |
| 0x2238D6 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_5, 0x21F137 | 0 | - |
| 0x2238D7 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_6, 0x21F138 | 0 | - |
| 0x2238D8 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_7 | 0 | - |
| 0x2238D9 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_8 | 0 | - |
| 0x2238DA | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_9 | 0 | - |
| 0x2238DB | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_10 | 0 | - |
| 0x2238DC | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_11 | 0 | - |
| 0x2238DD | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_12 | 0 | - |
| 0x2238DE | SME, FIS_DTC_BAT_VOLT_HIGH, 0x21F145 | 0 | - |
| 0x2238DF | SME, FIS_DTC_BAT_VOLT_LOW, 0x21F146 | 0 | - |
| 0x2238E0 | SME, FIS_DTC_HVIL_NO_SIGNAL_GEN, 0x21F147 | 0 | - |
| 0x2238E1 | SME, FIS_DTC_HVIL_OPEN, 0x21F148 | 0 | - |
| 0x2238E2 | SME, FIS_DTC_HVIL_SHORT, 0x21F149 | 0 | - |
| 0x2238E3 | SME, FIS_DTC_HVIL_SHORT_HIGH, 0x21F14A | 0 | - |
| 0x2238E4 | SME, FIS_DTC_HVIL_SHORT_LOW, 0x21F14B | 0 | - |
| 0x2238E5 | SME, FIS_DTC_PRECHARGE_CURR_HIGH, 0x21F0E8 | 0 | - |
| 0x2238E6 | SME, FIS_DTC_PRECHARGE_TIMEOUT, 0x21F155 | 0 | - |
| 0x2238E7 | SME, FIS_DTC_PRECHARGE_TIME_SHORT, 0x21F0EA | 0 | - |
| 0x2238E8 | SME, FIS_DTC_PRECHARGE_SHORTCIRCUIT, 0x21F157 | 0 | - |
| 0x2238E9 | SME, FIS_DTC_HV_CURR_PLAUS_ERR, 0x21F159 | 0 | - |
| 0x2238EA | SME, FIS_DTC_HV_VOLT_ERROR, 0x21F15B | 0 | - |
| 0x2238EB | SME, FIS_DTC_CELL_VOLT_MEAS_INV, 0x21F0EE | 0 | - |
| 0x2238EC | SME, FIS_DTC_BAT_VOLT_PLAUS_NO_SUBST, 0x21F15E | 0 | - |
| 0x2238ED | SME, FIS_DTC_MOD_1_TEMP_IMPLAUSIBLE, 0x21F171 | 0 | - |
| 0x2238EE | SME, FIS_DTC_MOD_2_TEMP_IMPLAUSIBLE, 0x21F172 | 0 | - |
| 0x2238EF | SME, FIS_DTC_MOD_3_TEMP_IMPLAUSIBLE, 0x21F173 | 0 | - |
| 0x2238F0 | SME, FIS_DTC_MOD_4_TEMP_IMPLAUSIBLE, 0x21F174 | 0 | - |
| 0x2238F1 | SME, FIS_DTC_MOD_5_TEMP_IMPLAUSIBLE, 0x21F175 | 0 | - |
| 0x2238F2 | SME, FIS_DTC_MOD_6_TEMP_IMPLAUSIBLE, 0x21F176 | 0 | - |
| 0x2238F3 | SME, FIS_DTC_MOD_7_TEMP_IMPLAUSIBLE | 0 | - |
| 0x2238F4 | SME, FIS_DTC_MOD_8_TEMP_IMPLAUSIBLE, 0x21F10A | 0 | - |
| 0x2238F5 | SME, FIS_DTC_MOD_9_TEMP_IMPLAUSIBLE, 0x21F10B | 0 | - |
| 0x2238F6 | SME, FIS_DTC_MOD_10_TEMP_IMPLAUSIBLE | 0 | - |
| 0x2238F7 | SME, FIS_DTC_MOD_11_TEMP_IMPLAUSIBLE | 0 | - |
| 0x2238F8 | SME, FIS_DTC_MOD_12_TEMP_IMPLAUSIBLE | 0 | - |
| 0x2238F9 | SME, FIS_DTC_RTC_RELATIVZEIT_IMPLAUSIBLE, 0x21F181 | 0 | - |
| 0x2238FA | SME, FIS_DTC_MOD_TEMP_FAIL, 0x21F183 | 0 | - |
| 0x2238FB | SME, FIS_DTC_MOD_1_TEMP_FAIL, 0x21F184 | 0 | - |
| 0x2238FC | SME, FIS_DTC_MOD_2_TEMP_FAIL, 0x21F185 | 0 | - |
| 0x2238FD | SME, FIS_DTC_MOD_3_TEMP_FAIL, 0x21F186 | 0 | - |
| 0x2238FE | SME, FIS_DTC_MOD_4_TEMP_FAIL, 0x21F187 | 0 | - |
| 0x2238FF | SME, FIS_DTC_MOD_5_TEMP_FAIL, 0x21F188 | 0 | - |
| 0x223900 | SME, FIS_DTC_MOD_6_TEMP_FAIL, 0x21F189 | 0 | - |
| 0x223901 | SME, FIS_DTC_MOD_7_TEMP_FAIL | 0 | - |
| 0x223902 | SME, FIS_DTC_MOD_8_TEMP_FAIL, 0x21F11B | 0 | - |
| 0x223903 | SME, FIS_DTC_MOD_9_TEMP_FAIL, 0x21F11C | 0 | - |
| 0x223904 | SME, FIS_DTC_MOD_10_TEMP_FAIL | 0 | - |
| 0x223905 | SME, FIS_DTC_MOD_11_TEMP_FAIL, 0x21F11E | 0 | - |
| 0x223906 | SME, FIS_DTC_MOD_12_TEMP_FAIL | 0 | - |
| 0x223907 | SME, FIS_DTC_MOD_TEMP_HIGH, 0x21F124 | 0 | - |
| 0x223908 | SME, FIS_DTC_MOD_TEMP_HIGH_1, 0x21F197 | 0 | - |
| 0x223909 | SME, FIS_DTC_MOD_TEMP_HIGH_2, 0x21F198 | 0 | - |
| 0x22390A | SME, FIS_DTC_MOD_TEMP_HIGH_3, 0x21F199 | 0 | - |
| 0x22390B | SME, FIS_DTC_MOD_TEMP_HIGH_4, 0x21F19A | 0 | - |
| 0x22390C | SME, FIS_DTC_MOD_TEMP_HIGH_5, 0x21F19B | 0 | - |
| 0x22390D | SME, FIS_DTC_MOD_TEMP_HIGH_6, 0x21F19C | 0 | - |
| 0x22390E | SME, FIS_DTC_MOD_TEMP_HIGH_7, 0x21F258 | 0 | - |
| 0x22390F | SME, FIS_DTC_MOD_TEMP_HIGH_8, 0x21F259 | 0 | - |
| 0x223910 | SME, FIS_DTC_MOD_TEMP_HIGH_9, 0x21F25A | 0 | - |
| 0x223911 | SME, FIS_DTC_MOD_TEMP_HIGH_10, 0x21F25B | 0 | - |
| 0x223912 | SME, FIS_DTC_MOD_TEMP_HIGH_11, 0x21F25C | 0 | - |
| 0x223913 | SME, FIS_DTC_MOD_TEMP_HIGH_12, 0x21F25D | 0 | - |
| 0x223914 | SME, FIS_DTC_MOD_1_OVERTEMP, 0x21F1A7 | 0 | - |
| 0x223915 | SME, FIS_DTC_MOD_2_OVERTEMP, 0x21F1A8 | 0 | - |
| 0x223916 | SME, FIS_DTC_MOD_3_OVERTEMP, 0x21F1A9 | 0 | - |
| 0x223917 | SME, FIS_DTC_MOD_4_OVERTEMP, 0x21F1AA | 0 | - |
| 0x223918 | SME, FIS_DTC_MOD_5_OVERTEMP, 0x21F1AB | 0 | - |
| 0x223919 | SME, FIS_DTC_MOD_6_OVERTEMP, 0x21F1AC | 0 | - |
| 0x22391A | SME, FIS_DTC_MOD_7_OVERTEMP | 0 | - |
| 0x22391B | SME, FIS_DTC_MOD_8_OVERTEMP, 0x21F12C | 0 | - |
| 0x22391C | SME, FIS_DTC_MOD_9_OVERTEMP, 0x21F12D | 0 | - |
| 0x22391D | SME, FIS_DTC_MOD_10_OVERTEMP | 0 | - |
| 0x22391E | SME, FIS_DTC_MOD_11_OVERTEMP, 0x21F12F | 0 | - |
| 0x22391F | SME, FIS_DTC_MOD_12_OVERTEMP | 0 | - |
| 0x223920 | SME, FIS_DTC_HEATRES_ERROR, 0x21F135 | 0 | - |
| 0x223921 | SME, FIS_DTC_HEAT_TEMP_ERROR, 0x21F136 | 0 | - |
| 0x223922 | SME, FIS_DTC_BAT_HEALTH_LOW_ERR, 0x21F1BA | 0 | - |
| 0x223923 | SME, FIS_DTC_BAT_SOC_HIGH, 0x21F138 | 0 | - |
| 0x223924 | SME, FIS_DTC_BAT_SOC_LOW, 0x21F1BD | 0 | - |
| 0x223925 | SME, FIS_DTC_CELL_DEFECT, 0x21F13B | 0 | - |
| 0x223926 | SME, FIS_DTC_CELL_DEFECT_MOD_1, 0x21F1C3 | 0 | - |
| 0x223927 | SME, FIS_DTC_CELL_DEFECT_MOD_2, 0x21F1C4 | 0 | - |
| 0x223928 | SME, FIS_DTC_CELL_DEFECT_MOD_3, 0x21F1C5 | 0 | - |
| 0x223929 | SME, FIS_DTC_CELL_DEFECT_MOD_4, 0x21F1C6 | 0 | - |
| 0x22392A | SME, FIS_DTC_CELL_DEFECT_MOD_5, 0x21F1C7 | 0 | - |
| 0x22392B | SME, FIS_DTC_CELL_DEFECT_MOD_6, 0x21F1C8 | 0 | - |
| 0x22392C | SME, FIS_DTC_CELL_DEFECT_MOD_7 | 0 | - |
| 0x22392D | SME, FIS_DTC_CELL_DEFECT_MOD_8 | 0 | - |
| 0x22392E | SME, FIS_DTC_CELL_DEFECT_MOD_9 | 0 | - |
| 0x22392F | SME, FIS_DTC_CELL_DEFECT_MOD_10 | 0 | - |
| 0x223930 | SME, FIS_DTC_CELL_DEFECT_MOD_11 | 0 | - |
| 0x223931 | SME, FIS_DTC_CELL_DEFECT_MOD_12 | 0 | - |
| 0x223932 | SME, FIS_DTC_CELL_DEEP_DISCHARGED, 0x21F13C | 0 | - |
| 0x223933 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_1 | 0 | - |
| 0x223934 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_2 | 0 | - |
| 0x223935 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_3 | 0 | - |
| 0x223936 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_4 | 0 | - |
| 0x223937 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_5 | 0 | - |
| 0x223938 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_6 | 0 | - |
| 0x223939 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_7 | 0 | - |
| 0x22393A | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_8 | 0 | - |
| 0x22393B | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_9 | 0 | - |
| 0x22393C | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_10 | 0 | - |
| 0x22393D | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_11 | 0 | - |
| 0x22393E | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_12 | 0 | - |
| 0x22393F | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_1, 0x21F1E1 | 0 | - |
| 0x223940 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_2, 0x21F1E2 | 0 | - |
| 0x223941 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_3, 0x21F1E3 | 0 | - |
| 0x223942 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_4, 0x21F1E4 | 0 | - |
| 0x223943 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_5, 0x21F1E5 | 0 | - |
| 0x223944 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_6, 0x21F1E6 | 0 | - |
| 0x223945 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_7, 0x21F1E7 | 0 | - |
| 0x223946 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_8, 0x21F1E8 | 0 | - |
| 0x223947 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_9, 0x21F1E9 | 0 | - |
| 0x223948 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_10, 0x21F1EA | 0 | - |
| 0x223949 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_11, 0x21F1EB | 0 | - |
| 0x22394A | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_12, 0x21F1EC | 0 | - |
| 0x22394B | SME, FIS_DTC_LAYER2_SHUT_OFF, 0x21F20D | 0 | - |
| 0x22394C | SME, FIS_DTC_LAYER3_SHUT_OFF, 0x21F15D | 0 | - |
| 0x22394D | SME, FIS_DTC_RTC_CLOCK_ERR, 0x21F00B | 0 | - |
| 0x22394E | SME, FIS_DTC_CURRENT_OVERCURRENT, 0x21F11C | 0 | - |
| 0x2239B1 | IHKA, FIS_DFC_DOBD_IHKA_1_1, 0xE70C30 | 0 | - |
| 0x2239B3 | IHKA, FIS_DFC_DOBD_IHKA_1_3, 0x8013F6 | 0 | - |
| 0x2239B4 | IHKA, FIS_DFC_DOBD_IHKA_1_4, 0xE7041E | 0 | - |
| 0x2239BC | BDC, FIS_DFC_DOBD_IHKA_2_4, 0x801100 | 0 | - |
| 0x2239BF | BDC, FIS_DFC_DOBD_IHKA_2_7, 0x801103 | 0 | - |
| 0x2239C0 | BDC, FIS_DFC_DOBD_IHKA_2_8, 0x801104 | 0 | - |
| 0x2239C1 | eDH , FIS_DFC_DOBD_IHKA_3_1, 0xE70C3A | 0 | - |
| 0x2239C3 | IHKA, FIS_DFC_DOBD_IHKA_3_3, 0x8013FC | 0 | - |
| 0x2239C4 | IHKA, FIS_DFC_DOBD_IHKA_3_4, 0x8013FD | 0 | - |
| 0x2239C5 | IHKA, FIS_DFC_DOBD_IHKA_3_5, 0x8013FE | 0 | - |
| 0x2239C6 | IHKA, FIS_DFC_DOBD_IHKA_3_6, 0x8013FF | 0 | - |
| 0x2239C7 | IHKA, FIS_DFC_DOBD_IHKA_3_7, 0x8013FA | 0 | - |
| 0x2239C8 | eKMV, FIS_DFC_DOBD_IHKA_3_8, 0x8013C0 | 0 | - |
| 0x2239C9 | eKMV, FIS_DFC_DOBD_IHKA_4_1, 0x8013C1 | 0 | - |
| 0x2239CB | eKMV, FIS_DFC_DOBD_IHKA_4_3, 0x8013C3 | 0 | - |
| 0x2239CC | eKMV, FIS_DFC_DOBD_IHKA_4_4, 0x8013C4 | 0 | - |
| 0x2239CE | eKMV, FIS_DFC_DOBD_IHKA_5_4, 0x8013CC | 0 | - |
| 0x2239CF | eKMV, FIS_DFC_DOBD_IHKA_5_5, 0x8013CD | 0 | - |
| 0x2239D1 | eKMV, FIS_DFC_DOBD_IHKA_5_7, 0x8013CF | 0 | - |
| 0x2239D2 | eKMV, FIS_DFC_DOBD_IHKA_5_8, 0x8013D0 | 0 | - |
| 0x2239D3 | eKMV, FIS_DFC_DOBD_IHKA_6_1, 0x8013D1 | 0 | - |
| 0x2239D4 | eKMV, FIS_DFC_DOBD_IHKA_6_2, 0x8013D2 | 0 | - |
| 0x2239D5 | eKMV, FIS_DFC_DOBD_IHKA_6_3, 0x8013D3 | 0 | - |
| 0x2239D7 | eKMV, FIS_DFC_DOBD_IHKA_6_5, 0x8013D5 | 0 | - |
| 0x2239D8 | eKMV, FIS_DFC_DOBD_IHKA_6_6, 0x8013D6 | 0 | - |
| 0x2239D9 | eDH , FIS_DFC_DOBD_IHKA_6_7 | 0 | - |
| 0x2239DA | eKMV, FIS_DFC_DOBD_IHKA_6_8, 0x8013D8 | 0 | - |
| 0x2239DB | eKMV, FIS_DFC_DOBD_IHKA_7_1, 0x8013D9 | 0 | - |
| 0x2239DC | eDH , FIS_DFC_DOBD_IHKA_7_2, 0x8013A3 | 0 | - |
| 0x2239DD | eKMV, FIS_DFC_DOBD_IHKA_7_3, 0x8013DB | 0 | - |
| 0x2239DE | eKMV, FIS_DFC_DOBD_IHKA_7_4, 0x8013DC | 0 | - |
| 0x2239DF | eKMV, FIS_DFC_DOBD_IHKA_7_5, 0x8013DD | 0 | - |
| 0x2239E0 | eKMV, FIS_DFC_DOBD_IHKA_7_6, 0x8013DE | 0 | - |
| 0x2239E1 | eKMV, FIS_DFC_DOBD_IHKA_7_7, 0x8013DF | 0 | - |
| 0x2239E2 | eKMV, FIS_DFC_DOBD_IHKA_7_8, 0x8012C6 | 0 | - |
| 0x2239E3 | eKMV, FIS_DFC_DOBD_IHKA_8_1, 0x8013E1 | 0 | - |
| 0x2239E4 | eKMV, FIS_DFC_DOBD_IHKA_8_2, 0x8013E2 | 0 | - |
| 0x2239E5 | eKMV, FIS_DFC_DOBD_IHKA_8_3, 0x8013E3 | 0 | - |
| 0x2239E6 | eKMV, FIS_DFC_DOBD_IHKA_9_2, 0x8013EA | 0 | - |
| 0x2239E7 | eKMV, FIS_DFC_DOBD_IHKA_9_3, 0x8013EB | 0 | - |
| 0x2239E8 | eKMV, FIS_DFC_DOBD_IHKA_9_4, 0x8013EC | 0 | - |
| 0x2239E9 | eKMV, FIS_DFC_DOBD_IHKA_9_5, 0x8013ED | 0 | - |
| 0x2239EA | eKMV, FIS_DFC_DOBD_IHKA_9_6, 0x8013EE | 0 | - |
| 0x2239EB | eKMV, FIS_DFC_DOBD_IHKA_9_7, 0x8013EF | 0 | - |
| 0x2239EC | eDH, FIS_DFC_DOBD_IHKA_9_8, 0x801391 | 0 | - |
| 0x2239ED | eDH, FIS_DFC_DOBD_IHKA_10_1, 0x801392 | 0 | - |
| 0x2239EE | eDH, FIS_DFC_DOBD_IHKA_10_2, 0x801393 | 0 | - |
| 0x2239EF | eDH, FIS_DFC_DOBD_IHKA_10_3, 0x801382 | 0 | - |
| 0x2239F0 | eDH, FIS_DFC_DOBD_IHKA_10_4, 0x801383 | 0 | - |
| 0x2239F1 | eDH, FIS_DFC_DOBD_IHKA_10_5, 0x801396 | 0 | - |
| 0x2239F2 | eDH, FIS_DFC_DOBD_IHKA_10_6, 0x80139B | 0 | - |
| 0x2239F3 | eDH, FIS_DFC_DOBD_IHKA_10_7, 0x80139C | 0 | - |
| 0x2239F4 | eDH, FIS_DFC_DOBD_IHKA_10_8, 0x801398 | 0 | - |
| 0x2239F5 | eDH, FIS_DFC_DOBD_IHKA_11_1, 0x80139A | 0 | - |
| 0x2239F6 | eDH, FIS_DFC_DOBD_IHKA_11_2, 0x801399 | 0 | - |
| 0x2239F7 | eDH, FIS_DFC_DOBD_IHKA_11_3, 0x801397 | 0 | - |
| 0x2239F8 | eDH, FIS_DFC_DOBD_IHKA_11_4, 0x801388 | 0 | - |
| 0x2239F9 | eDH, FIS_DFC_DOBD_IHKA_11_5, 0x801390 | 0 | - |
| 0x2239FA | eDH, FIS_DFC_DOBD_IHKA_11_6, 0x80139E | 0 | - |
| 0x2239FB | eDH, FIS_DFC_DOBD_IHKA_11_7, 0x801385 | 0 | - |
| 0x2239FC | eDH, FIS_DFC_DOBD_IHKA_11_8, 0x80138C | 0 | - |
| 0x2239FD | eDH, FIS_DFC_DOBD_IHKA_12_1, 0x80139D | 0 | - |
| 0x2239FE | eDH, FIS_DFC_DOBD_IHKA_12_2, 0x801389 | 0 | - |
| 0x2239FF | eDH, FIS_DFC_DOBD_IHKA_12_3, 0x80138A | 0 | - |
| 0x223A00 | eDH, FIS_DFC_DOBD_IHKA_12_4, 0x8013A7 | 0 | - |
| 0x223A01 | eDH, FIS_DFC_DOBD_IHKA_12_5, 0x801386 | 0 | - |
| 0x223A02 | eDH, FIS_DFC_DOBD_IHKA_12_6, 0x80138D | 0 | - |
| 0x223A03 | eDH, FIS_DFC_DOBD_IHKA_12_7, 0x8013A8 | 0 | - |
| 0x223A04 | eDH, FIS_DFC_DOBD_IHKA_12_8, 0x801372 | 0 | - |
| 0x223A05 | eDH, FIS_DFC_DOBD_IHKA_13_1, 0x8013A9 | 0 | - |
| 0x223A06 | eDH, FIS_DFC_DOBD_IHKA_13_2, 0x801373 | 0 | - |
| 0x223A07 | eDH, FIS_DFC_DOBD_IHKA_13_3, 0x801374 | 0 | - |
| 0x223A08 | eDH, FIS_DFC_DOBD_IHKA_13_4, 0x801375 | 0 | - |
| 0x223A09 | eDH, FIS_DFC_DOBD_IHKA_13_5, 0x801376 | 0 | - |
| 0x223A65 | eDH, FIS_DFC_DOBD_IHKA_25_1, 0x8013AE | 0 | - |
| 0x223A66 | eDH, FIS_DFC_DOBD_IHKA_25_2, 0x8013AF | 0 | - |
| 0x223A67 | eDH, FIS_DFC_DOBD_IHKA_25_3, 0x8013B0 | 0 | - |
| 0x223A68 | eDH, FIS_DFC_DOBD_IHKA_25_4, 0x8013B1 | 0 | - |
| 0x223A69 | eDH, FIS_DFC_DOBD_IHKA_25_5, 0x8013B2 | 0 | - |
| 0x223A6A | eDH, FIS_DFC_DOBD_IHKA_25_6, 0x8013B3 | 0 | - |
| 0x223A6B | eDH, FIS_DFC_DOBD_IHKA_25_7, 0x8013B4 | 0 | - |
| 0x223A6C | eDH, FIS_DFC_DOBD_IHKA_25_8, 0x8013B5 | 0 | - |
| 0x223A6D | eDH, FIS_DFC_DOBD_IHKA_26_1, 0x8013B6 | 0 | - |
| 0x223A6E | eDH, FIS_DFC_DOBD_IHKA_26_2, 0x8013B8 | 0 | - |
| 0x223A6F | eDH, FIS_DFC_DOBD_IHKA_26_3, 0x8013B7 | 0 | - |
| 0x223A70 | eDH, FIS_DFC_DOBD_IHKA_26_4, 0x8013B9 | 0 | - |
| 0x223A71 | eDH, FIS_DFC_DOBD_IHKA_26_5, 0x8013BA | 0 | - |
| 0x223A72 | eDH, FIS_DFC_DOBD_IHKA_26_6, 0x8013BB | 0 | - |
| 0x223A73 | eDH, FIS_DFC_DOBD_IHKA_26_7, 0x8013BC | 0 | - |
| 0x223A74 | eDH, FIS_DFC_DOBD_IHKA_26_8, 0x8013BE | 0 | - |
| 0x223A75 | eDH, FIS_DFC_DOBD_IHKA_27_1, 0x8013BD | 0 | - |
| 0x223A76 | eDH, FIS_DFC_DOBD_IHKA_27_2, 0x8013BF | 0 | - |
| 0x223A77 | eDH, FIS_DFC_DOBD_IHKA_27_3, 0x801160 | 0 | - |
| 0x223A78 | eDH, FIS_DFC_DOBD_IHKA_27_4, 0x801161 | 0 | - |
| 0x223A79 | eDH, FIS_DFC_DOBD_IHKA_27_5, 0x801162 | 0 | - |
| 0x223A7A | eDH, FIS_DFC_DOBD_IHKA_27_6, 0x801163 | 0 | - |
| 0x223A7B | eDH, FIS_DFC_DOBD_IHKA_27_7, 0x801164 | 0 | - |
| 0x223A7C | eDH, FIS_DFC_DOBD_IHKA_27_8, 0x801165 | 0 | - |
| 0x223A7D | eDH, FIS_DFC_DOBD_IHKA_28_1, 0x801166 | 0 | - |
| 0x223A7E | eDH, FIS_DFC_DOBD_IHKA_28_2, 0x801167 | 0 | - |
| 0x223A7F | eDH, FIS_DFC_DOBD_IHKA_28_3, 0x801168 | 0 | - |
| 0x223A80 | eDH, FIS_DFC_DOBD_IHKA_28_4, 0x801169 | 0 | - |
| 0x223A81 | eDH, FIS_DFC_DOBD_IHKA_28_5, 0x80116A | 0 | - |
| 0x223A82 | eDH, FIS_DFC_DOBD_IHKA_28_6, 0x80116B | 0 | - |
| 0x223A83 | eDH, FIS_DFC_DOBD_IHKA_28_7, 0x80116C | 0 | - |
| 0x223A84 | eDH, FIS_DFC_DOBD_IHKA_28_8, 0x80116D | 0 | - |
| 0x223A85 | eDH, FIS_DFC_DOBD_IHKA_29_1, 0x80116E | 0 | - |
| 0x223A86 | eDH, FIS_DFC_DOBD_IHKA_29_2, 0x80116F | 0 | - |
| 0x223A87 | eDH, FIS_DFC_DOBD_IHKA_29_3, 0x801170 | 0 | - |
| 0x223A88 | eDH, FIS_DFC_DOBD_IHKA_29_4, 0x801171 | 0 | - |
| 0x223A89 | eDH, FIS_DFC_DOBD_IHKA_29_5, 0x8013A1 | 0 | - |
| 0x223A8A | eDH, FIS_DFC_DOBD_IHKA_29_6, 0x8013A4 | 0 | - |
| 0x223A8B | eDH, FIS_DFC_DOBD_IHKA_29_7, 0x801395 | 0 | - |
| 0x223A8C | eDH, FIS_DFC_DOBD_IHKA_29_8, 0x8013A0 | 0 | - |
| 0x223A8D | eDH, FIS_DFC_DOBD_IHKA_30_1, 0x80139F | 0 | - |
| 0x223A8E | eDH, FIS_DFC_DOBD_IHKA_30_2, 0x801394 | 0 | - |
| 0x223A8F | eDH, FIS_DFC_DOBD_IHKA_30_3, 0x8013A5 | 0 | - |
| 0x223A90 | eDH, FIS_DFC_DOBD_IHKA_30_4, 0x8013A6 | 0 | - |
| 0x223A91 | eDH, FIS_DFC_DOBD_IHKA_30_5, 0x8013AA | 0 | - |
| 0x223A92 | eDH, FIS_DFC_DOBD_IHKA_30_6, 0x8013AB | 0 | - |
| 0x223A93 | eDH, FIS_DFC_DOBD_IHKA_30_7, 0x8013AC | 0 | - |
| 0x223A94 | eDH, FIS_DFC_DOBD_IHKA_30_8, 0x8013AD | 0 | - |
| 0x223B3C | SME, DTC_HT_ISENS_RANGE_LO, 0x21F1F8 | 0 | - |
| 0x223B3D | SME DTC_CURRENT_OVERCURRENT_CELL, 0x21F11D | 0 | - |
| 0x223B3E | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_1, 0x21F0E3 | 0 | - |
| 0x223B3F | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_2, 0x21F0E4 | 0 | - |
| 0x223B40 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_3, 0x21F0E5 | 0 | - |
| 0x223B41 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_4, 0x21F0E6 | 0 | - |
| 0x223B42 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_5, 0x21F0E7 | 0 | - |
| 0x223B43 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_6, 0x21F0E8 | 0 | - |
| 0x223B44 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_7 | 0 | - |
| 0x223B45 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_8 | 0 | - |
| 0x223B46 | SME, DTC_CELL_MODUL1_VOLT_PLAUS_ERR, 0x21F161 | 0 | - |
| 0x223B47 | SME, DTC_CELL_MODUL2_VOLT_PLAUS_ERR, 0x21F162 | 0 | - |
| 0x223B48 | SME, DTC_CELL_MODUL3_VOLT_PLAUS_ERR, 0x21F163 | 0 | - |
| 0x223B49 | SME, DTC_CELL_MODUL4_VOLT_PLAUS_ERR, 0x21F164 | 0 | - |
| 0x223B4A | SME, DTC_CELL_MODUL5_VOLT_PLAUS_ERR, 0x21F165 | 0 | - |
| 0x223B4B | SME, DTC_CELL_MODUL6_VOLT_PLAUS_ERR, 0x21F166 | 0 | - |
| 0x223B4C | SME, DTC_CELL_MODUL7_VOLT_PLAUS_ERR, 0x21F0F9 | 0 | - |
| 0x223B4D | SME, DTC_CELL_MODUL8_VOLT_PLAUS_ERR, 0x21F0FA | 0 | - |
| 0x223B57 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_9 | 0 | - |
| 0x223B58 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_10 | 0 | - |
| 0x223B59 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_11 | 0 | - |
| 0x223B5A | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_12 | 0 | - |
| 0x223B5B | SME, DTC_CELL_MODUL9_VOLT_PLAUS_ERR, 0x21F0FB | 0 | - |
| 0x223B5C | SME, DTC_CELL_MODUL10_VOLT_PLAUS_ERR, 0x21F0FC | 0 | - |
| 0x223B5D | SME, DTC_CELL_MODUL11_VOLT_PLAUS_ERR, 0x21F0FD | 0 | - |
| 0x223B5E | SME, DTC_CELL_MODUL12_VOLT_PLAUS_ERR, 0x21F0FE | 0 | - |
| 0x223B88 | SLEB35, FIS_SLE2_PROTECT, 0x21E602 | 0 | - |
| 0x223B89 | SLEB35, FIS_SLE2_HW_FAULT, 0x21E606 | 0 | - |
| 0x223B8A | SLEB35, FIS_SLE2_SW_FAULT, 0x21E60B | 0 | - |
| 0x223B8B | SLEB35, FIS_SLE2_OOR_H_U_HVDC, 0x21E615 | 0 | - |
| 0x223B8C | SLEB35, FIS_SLE2_OOR_H_U_HVAC, 0x21E616 | 0 | - |
| 0x223B8D | SLEB35, FIS_SLE2_OOR_L_U_HVDC, 0x21E617 | 0 | - |
| 0x223B8E | SLEB35, FIS_SLE2_OOR_L_U_HVAC, 0x21E618 | 0 | - |
| 0x223B8F | SLEB35, FIS_SLE2_OOR_L_U_SUPPLY, 0x21E61D | 0 | - |
| 0x223B90 | SLEB35, FIS_SLE2_OOR_H_U_SUPPLY, 0x21E61E | 0 | - |
| 0x223B91 | SLEB35, FIS_SLE2_LOW_PWR, 0x21E61F | 0 | - |
| 0x223B92 | SLEB35, FIS_SLE2_SCG_U_HVDC, 0x21E622 | 0 | - |
| 0x223B93 | SLEB35, FIS_SLE2_SCB_U_HVDC, 0x21E623 | 0 | - |
| 0x223B94 | SLEB35, FIS_SLE2_SCG_U_HVAC, 0x21E626 | 0 | - |
| 0x223B95 | SLEB35, FIS_SLE2_SCB_U_HVAC, 0x21E627 | 0 | - |
| 0x223B96 | SLEB35, FIS_SLE2_15_WUP, 0x21E629 | 0 | - |
| 0x223B97 | SLEB35, FIS_SLE2_SCG_I_HVAC, 0x21E640 | 0 | - |
| 0x223B98 | SLEB35, FIS_SLE2_SCB_U_BOOST, 0x21E641 | 0 | - |
| 0x223B99 | SLEB35, FIS_SLE2_SCB_T_COOL, 0x21E645 | 0 | - |
| 0x223B9A | SLEB35, FIS_SLE2_SCG_T_COOL, 0x21E648 | 0 | - |
| 0x223B9B | SLEB35, FIS_SLE2_OOR_H_U_BOOST, 0x21E649 | 0 | - |
| 0x223B9C | SLEB35, FIS_SLE2_OOR_L_U_BOOST, 0x21E64A | 0 | - |
| 0x223B9D | SLEB35, FIS_SLE2_SCB_I_HVAC, 0x21E64B | 0 | - |
| 0x223B9E | SLEB35, FIS_SLE2_OC_I_HVAC, 0x21E64D | 0 | - |
| 0x223B9F | SLEB35, FIS_SLE2_SCB_T_AMB, 0x21E64E | 0 | - |
| 0x223BA0 | SLEB35, FIS_SLE2_SCG_T_AMB, 0x21E64F | 0 | - |
| 0x223BA1 | SLEB35, FIS_SLE2_SCG_U_BOOST, 0x21E652 | 0 | - |
| 0x223BA2 | SLEB35, FIS_SLE2_OOR_H_I_HVAC, 0x21E653 | 0 | - |
| 0x223BA3 | SLEB35, FIS_SLE2_SCG_T_PWR, 0x21E655 | 0 | - |
| 0x223BA4 | SLEB35, FIS_SLE2_SCB_T_PWR, 0x21E658 | 0 | - |
| 0x223BA5 | SLEB35, FIS_SLE2_SCG_I_HVDC, 0x21E65C | 0 | - |
| 0x223BA6 | SLEB35, FIS_SLE2_SCB_I_HVDC, 0x21E65D | 0 | - |
| 0x223BA7 | SLEB35, FIS_SLE2_OOR_H_I_HVDC, 0x21E661 | 0 | - |
| 0x223BA8 | SLEB35, FIS_SLE2_OOR_H_CHGFLP_SENS_M, 0x21E66F | 0 | - |
| 0x223BA9 | SLEB35, FIS_SLE2_SCG_CHFLP_SENS_M, 0x21E679 | 0 | - |
| 0x223BAA | SLEB35, FIS_SLE2_SCB_CHFLP_SENS_M, 0x21E67A | 0 | - |
| 0x223BAB | SLEB35, FIS_SLE2_OC_CHFLP_SENS_P, 0x21E67B | 0 | - |
| 0x223BAC | SLEB35, FIS_SLE2_SCG_PRX, 0x21E67C | 0 | - |
| 0x223BAD | SLEB35, FIS_SLE2_OOR_L_INT_SUPPLY, 0x21E67D | 0 | - |
| 0x223BAE | SLEB35, FIS_SLE2_OOR_H_INT_SUPPLY, 0x21E67E | 0 | - |
| 0x223BAF | SLEB35, FIS_SLE2_OOR_L_CHGFLP_SENS_P, 0x21E67F | 0 | - |
| 0x223BB0 | SLEB35, FIS_SLE2_OOR_H_CHGFLP_SENS_P, 0x21E680 | 0 | - |
| 0x223BB1 | SLEB35, FIS_SLE2_PLS_CHPLG, 0x21E681 | 0 | - |
| 0x223BB2 | SLEB35, FIS_SLE2_SCG_PLGLK, 0x21E682 | 0 | - |
| 0x223BB3 | SLEB35, FIS_SLE2_SCB_PLGLK, 0x21E683 | 0 | - |
| 0x223BB4 | SLEB35, FIS_SLE2_OC_PLGLK, 0x21E684 | 0 | - |
| 0x223BB5 | SLEB35, FIS_SLE2_SCG_FLPLK, 0x21E685 | 0 | - |
| 0x223BB6 | SLEB35, FIS_SLE2_SCB_FLPLK, 0x21E686 | 0 | - |
| 0x223BB7 | SLEB35, FIS_SLE2_OC_FLPLK, 0x21E687 | 0 | - |
| 0x223BB8 | SLEB35, FIS_SLE2_PLS_PLGLK, 0x21E689 | 0 | - |
| 0x223BB9 | SLEB35, FIS_SLE2_PLS_PLGLK_CHFLP, 0x21E691 | 0 | - |
| 0x223BBA | SLEB35, FIS_SLE2_OOR_PIL_FRQ, 0x21E693 | 0 | - |
| 0x223BBB | SLEB35, FIS_SLE2_OOR_PIL_AMPL, 0x21E694 | 0 | - |
| 0x223BBC | SLEB35, FIS_SLE2_OOR_PIL_DC, 0x21E696 | 0 | - |
| 0x223BBD | SLEB35, FIS_SLE2_SCB_CHFLP_SENS_P, 0x21E697 | 0 | - |
| 0x223BBE | SLEB35, FIS_SLE2_SCB_PLGLK_SENS, 0x21E698 | 0 | - |
| 0x223BBF | SLEB35, FIS_SLE2_SCG_PLGLK_SENS, 0x21E69A | 0 | - |
| 0x223BC0 | SLEB35, FIS_SLE2_SCG_CHFLP_SENS_P, 0x21E69B | 0 | - |
| 0x223BC1 | SLEB35, FIS_SLE2_PLS_T_AMB, 0x21E6AC | 0 | - |
| 0x223BC2 | SLEB35, FIS_SLE2_PLS_T_COOL, 0x21E6AD | 0 | - |
| 0x223BC3 | SLEB35, FIS_SLE2_PLS_CHA_PERF, 0x21E6AE | 0 | - |
| 0x223BC4 | SLEB35, FIS_SLE2_PLS_U_HVAC, 0x21E6AF | 0 | - |
| 0x223BC5 | SLEB35, FIS_SLE2_PLS_I_HVAC, 0x21E6B0 | 0 | - |
| 0x223BC6 | SLEB35, FIS_SLE2_PLS_I_HVDC, 0x21E6B1 | 0 | - |
| 0x223BC7 | SLEB35, FIS_SLE2_PLS_U_HVDC, 0x21E6B2 | 0 | - |
| 0x223BC8 | SLEB35, FIS_SLE2_PLS_U_BOOST, 0x21E6B3 | 0 | - |
| 0x223BC9 | SLEB35, FIS_SLE2_PLS_T_PWR, 0x21E6B4 | 0 | - |
| 0x223BCA | SLEB35, FIS_SLE2_OOR_L_PRX, 0x21E6B8 | 0 | - |
| 0x223BCB | SLEB35, FIS_SLE2_WDG, 0x21E6B5 | 0 | - |
| 0x223BCC | SLEB35, FIS_SLE2_WDG_TST, 0x21E6B6 | 0 | - |
| 0x223BCD | SLEB35, FIS_SLE2_INT_COM, 0x21E6B7 | 0 | - |
| 0x223BCE | SLEB35, FIS_SLE2_RAM, 0x21E6FA | 0 | - |
| 0x223BCF | SLEB35, FIS_SLE2_NVRAM, 0x21E6FB | 0 | - |
| 0x223BD0 | SLEB35, FIS_SLE2_ROM, 0x21E6FC | 0 | - |
| 0x223BD1 | SLEB35, FIS_SLE2_PFC, 0x21E6FE | 0 | - |
| 0x223BD2 | SLEB35, FIS_SLE2_CAN1_OFF, 0xCE040A | 0 | - |
| 0x223BD3 | SLEB35, FIS_SLE2_CAN2_OFF, 0xCE0486 | 0 | - |
| 0x223BD4 | SLEB35, FIS_SLE2_CON_VEH_CAN1, 0xCE1402 | 0 | - |
| 0x223BD5 | SLEB35, FIS_SLE2_KLEMMEN_CAN1, 0xCE1405 | 0 | - |
| 0x223BD6 | SLEB35, FIS_SLE2_V_VEH_CAN1, 0xCE1406 | 0 | - |
| 0x223BD7 | SLEB35, FIS_SLE2_STAT_ZV_KLAPPEN_CAN1, 0xCE1409 | 0 | - |
| 0x223BD8 | SLEB35, FIS_SLE2_CTR_ZV_CAN1, 0xCE140B | 0 | - |
| 0x223BD9 | SLEB35, FIS_SLE2_RELATIVZEIT_CAN1, 0xCE140D | 0 | - |
| 0x223BDA | SLEB35, FIS_SLE2_KILOMETERSTAND_CAN1, 0xCE140E | 0 | - |
| 0x223BDB | SLEB35, FIS_SLE2_FZZSTD_CAN1, 0xCE140F | 0 | - |
| 0x223BDC | SLEB35, FIS_SLE2_CHGNG_ST_CAN1, 0xCE1410 | 0 | - |
| 0x223BDD | SLEB35, FIS_SLE2_DT_PT_2_CAN1, 0xCE1411 | 0 | - |
| 0x223BDE | SLEB35, FIS_SLE2_KILOMETERSTAND_CAN2, 0xCE1500 | 0 | - |
| 0x223BDF | SLEB35, FIS_SLE2_CTR_PRNT_CAN2, 0xCE1501 | 0 | - |
| 0x223BE0 | SLEB35, FIS_SLE2_ST_HVSTO_1_CAN2, 0xCE1502 | 0 | - |
| 0x223BE1 | SLEB35, FIS_SLE2_ST_OPMO_MOT_TRCT_CAN2, 0xCE1505 | 0 | - |
| 0x223BE2 | SLEB35, FIS_SLE2_SPEC_CF_CHGE_CAN2, 0xCE1506 | 0 | - |
| 0x223BE3 | SLEB35, FIS_SLE2_ST_HVSTO_2_CAN2, 0xCE1507 | 0 | - |
| 0x223BE4 | SLEB35, FIS_SLE2_ST_DT_HVSTO_CAN2, 0xCE1509 | 0 | - |
| 0x223BE5 | SME, DTC_MAIN_SW_KX_DEFECT, 0x21F005 | 0 | - |
| 0x223BE6 | SME, DTC_SBOX_UZK_OUTOFRANGE_HI, 0x21F022 | 0 | - |
| 0x223BE7 | SME, DTC_SBOX_UZK_OUTOFRANGE_LO, 0x21F023 | 0 | - |
| 0x223BE8 | SME, DTC_SBOX_BUS_BUS_OFF, 0x21F024 | 0 | - |
| 0x223BE9 | SLEB35, FIS_SLE2_OOR_L_I_HVAC, 0x21E653 | 0 | - |
| 0x223BEA | SLEB35, FIS_SLE2_OC_CHFLP_SENS_M, 0x21E67B | 0 | - |
| 0x223BEB | SLEB35, FIS_SLE2_PLS_CHA_PERF_L, 0x21E6AE | 0 | - |
| 0x223BEC | SLEB35, FIS_SLE2_INV_431H_CAN2, 0xCE150A | 0 | - |
| 0x223BED | SLEB35, FIS_SLE2_UNDF_431H_CAN2, 0xCE150B | 0 | - |
| 0x223BEE | SLEB35, FIS_SLE2_INV_1FAH_CAN2, 0xCE150C | 0 | - |
| 0x223BEF | SLEB35, FIS_SLE2_INV_112H_CAN2, 0xCE150D | 0 | - |
| 0x223BF0 | SLEB35, FIS_SLE2_UNDF_112H_CAN2, 0xCE150E | 0 | - |
| 0x223BF1 | SLEB35, FIS_SLE2_INV_112H2_CAN2, 0xCE150F | 0 | - |
| 0x223BF2 | SLEB35, FIS_SLE2_INV_112H3_CAN2, 0xCE1510 | 0 | - |
| 0x223BF3 | SLEB35, FIS_SLE2_INV_112H4_CAN2, 0xCE1511 | 0 | - |
| 0x223BF4 | SLEB35, FIS_SLE2_UNDF_112H4_CAN2, 0xCE1512 | 0 | - |
| 0x223BF5 | SLEB35, FIS_SLE2_INV_19EH_CAN2, 0xCE1513 | 0 | - |
| 0x223BF6 | SLEB35, FIS_SLE2_INV_19EH2_CAN2, 0xCE1514 | 0 | - |
| 0x223BF7 | SLEB35, FIS_SLE2_INV_153H_CAN2, 0xCE1515 | 0 | - |
| 0x223BF8 | SLEB35, FIS_SLE2_UNDF_153H_CAN2, 0xCE1516 | 0 | - |
| 0x223BF9 | SLEB35, FIS_SLE2_INV_153H2_CAN2, 0xCE1517 | 0 | - |
| 0x223BFA | SLEB35, FIS_SLE2_INV_153H3_CAN2, 0xCE1518 | 0 | - |
| 0x223BFB | SLEB35, FIS_SLE2_INV_153H4_CAN2, 0xCE1519 | 0 | - |
| 0x223BFC | SLEB35, FIS_SLE2_UNDF_153H4_CAN2, 0xCE151A | 0 | - |
| 0x223BFD | SLEB35, FIS_SLE2_INV_153H5_CAN2, 0xCE151B | 0 | - |
| 0x223BFE | SLEB35, FIS_SLE2_INV_12FH_CAN1, 0xCE1412 | 0 | - |
| 0x223BFF | SLEB35, FIS_SLE2_INV_3E9H_CAN1, 0xCE1413 | 0 | - |
| 0x223C00 | SLEB35, FIS_SLE2_UNDF_3E9H_CAN1, 0xCE1414 | 0 | - |
| 0x223C01 | SLEB35, FIS_SLE2_INV_19BH_CAN1, 0xCE1415 | 0 | - |
| 0x223C02 | SLEB35, FIS_SLE2_UNDF_19BH_CAN1, 0xCE1416 | 0 | - |
| 0x223C03 | SLEB35, FIS_SLE2_INV_2A0H_CAN1, 0xCE1417 | 0 | - |
| 0x223C04 | SLEB35, FIS_SLE2_INV_2FCH_CAN1, 0xCE1418 | 0 | - |
| 0x223C05 | SLEB35, FIS_SLE2_CRSH_ST_CAN1, 0xCE1419 | 0 | - |
| 0x223C06 | SLEB35, FIS_SLE2_OOR_L_I_HVDC, 0x21E660 | 0 | - |
| 0x223C07 | SLEB35, FIS_SLE2_SCG_L_U_SUPPLY, 0x21E701 | 0 | - |
| 0x223C08 | SLEB35, FIS_SLE2_SCB_L_U_SUPPLY, 0x21E702 | 0 | - |
| 0x223C09 | SLEB35, FIS_SLE2_PLSL_FLPLK3, 0x21E703 | 0 | - |
| 0x223C0A | SLEB35, FIS_DTC_21E704, 0x21E704 | 0 | - |
| 0x223C0B | SLEB35, FIS_SLE2_GRH_T_AMB, 0x21E705 | 0 | - |
| 0x223C0C | SLEB35, FIS_SLE2_GRH_T_COOL, 0x21E706 | 0 | - |
| 0x223C0D | SLEB35, FIS_SLE2_GRH_T_PWR, 0x21E707 | 0 | - |
| 0x223C0E | SLEB35, FIS_SLE2_CSTR_T_PWR, 0x21E708 | 0 | - |
| 0x223C0F | SLEB35, FIS_SLE2_CSTR_T_COOL, 0x21E709 | 0 | - |
| 0x223C10 | SLEB35, FIS_SLE2_PLS_CHA_PERF_H, 0x21E710 | 0 | - |
| 0x223C11 | SLEB35, FIS_SLE2_PLSH_I_HVAC, 0x21E711 | 0 | - |
| 0x223C12 | SLEB35, FIS_SLE2_PLSH_I_HVDC, 0x21E712 | 0 | - |
| 0x223C13 | SLEB35, FIS_SLE2_PLSH_U_HVDC, 0x21E713 | 0 | - |
| 0x223C14 | SLEB35, FIS_SLE2_PLSH_U_BOOST, 0x21E714 | 0 | - |
| 0x223C15 | SLEB35, FIS_SLE2_RAM_PAT, 0x21E715 | 0 | - |
| 0x223C16 | SME, DTC_MSG_A_TEMP_RX_FAIL, 0xCAD401 | 0 | - |
| 0x223C17 | SME, DTC_MSG_RLS_COOL_RX_FAIL, 0xCAD409 | 0 | - |
| 0x223C18 | SME, DTC_MSG_KLEMMEN_RX_FAIL, 0xCAD40C | 0 | - |
| 0x223C19 | SME, DTC_MSG_SPEC_DCSW_RX_FAIL, 0xCAD415 | 0 | - |
| 0x223C1A | SME, DTC_RQ_CLO_DCSW_INVALID, 0xCAD416 | 0 | - |
| 0x223C1B | SME, DTC_MAIN_SW_K1_CTRL_CIRCUIT, 0x21F250 | 0 | - |
| 0x223C1C | SME, DTC_MAIN_SW_K2_CTRL_CIRCUIT, 0x21F251 | 0 | - |
| 0x223C1D | SME, DTC_MAIN_SW_K3_CTRL_CIRCUIT, 0x21F252 | 0 | - |
| 0x223C1E | SME, DTC_MSG_RELATIVZEIT_RX_FAIL, 0xCAD402 | 0 | - |
| 0x223C1F | IHKA,  DFC_DOBD_IHKA_3_2, 0x8013FB | 0 | - |
| 0x223C20 | SLEB35, FIS_SLE2_EEPROM, 0x21E6FB | 0 | - |
| 0x223C21 | SLEB35, FIS_SLE2_ASBLY_CHSUM, 0x21E6FC | 0 | - |
| 0x223C22 | SLEB35, FIS_SLE2_UNDF_3F9H_CAN1, 0xCE1401 | 0 | - |
| 0x223C23 | SLEB35, FIS_SLE2_INV_3F9H_CAN1, 0xCE1404 | 0 | - |
| 0x223C77 | SME, DTC_COOLSENS_PLAUS_ERROR, 0x21F027 | 0 | - |
| 0x223C78 | SME, CODING_EVENT_NOT_CODED, 0x020708 | 0 | - |
| 0x223C79 | SME, CODING_EVENT_TRANSACTION_FAILED, 0x020709 | 0 | - |
| 0x223C7A | SME, CODING_EVENT_SIGNATURE_ERROR, 0x02070A | 0 | - |
| 0x223C7B | SME, CODING_EVENT_WRONG_VEHICLE, 0x02070B | 0 | - |
| 0x223C7C | SME, CODING_EVENT_INVALID_DATA, 0x02070C | 0 | - |
| 0x223C7D | SME, CODING_EVENT_UNQUALIFIED_DATA, 0x02070D | 0 | - |
| 0x223C7E | SME, DTC_ECU_EEPROM_INTERNAL_ERROR, 0x21F015 | 0 | - |
| 0x223C90 | SME,DTC_CELL_CHARGE_LOSS, 0x21F257 | 0 | - |
| 0x223C91 | SME, DTC_LE_CAN_BUS_BUS_OFF, 0xCAC47C | 0 | - |
| 0x223C92 | SME, DTC_MSG_CON_VEH_RX_FAIL, 0xCAD403 | 0 | - |
| 0x223C93 | SME, DTC_MAIN_SW_PRE_STUCKDOWN, 0x21F119 | 0 | - |
| 0x223C94 | SME, DTC_MAIN_SW_PRE_STUCKUP, 0x21F11A | 0 | - |
| 0xC90401 | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0xC90402 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0xE89400 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Ausfall DSC | 0/1 | High | 0x80 | - | - | - | - |
| 0x0002 | Ausfall ASC | 0/1 | High | 0x40 | - | - | - | - |
| 0x0003 | Ausfall VDC | 0/1 | High | 0x20 | - | - | - | - |
| 0x0004 | Ausfall LMV | 0/1 | High | 0x10 | - | - | - | - |
| 0x0005 | Aktiver Heckspoiler | 0/1 | High | 0x08 | - | - | - | - |
| 0x0006 | Reifendruckverlust | 0/1 | High | 0x04 | - | - | - | - |
| 0x0007 | State of Charge low | 0/1 | High | 0x02 | - | - | - | - |
| 0x0008 | Reserve_7 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0009 | Rollenmodus | 0/1 | High | 0x80 | - | - | - | - |
| 0x000A | Motorstart | 0/1 | High | 0x40 | - | - | - | - |
| 0x000B | Reserve_2 | 0/1 | High | 0x20 | - | - | - | - |
| 0x000C | Reserve_3 | 0/1 | High | 0x10 | - | - | - | - |
| 0x000D | Reserve_4 | 0/1 | High | 0x08 | - | - | - | - |
| 0x000E | Reserve_5 | 0/1 | High | 0x04 | - | - | - | - |
| 0x000F | Reserve_6 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0010 | Reserve_7 | 0/1 | High | 0x01 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2800 | STAT_KL30_SPANNUNG_WERT | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x2801 | STAT_GESCHWINDIGKEIT_SCHWERPUNKT_WERT | km/h | High | unsigned char | - | 2.0 | 10.0 | 100.0 |
| 0x2802 | STAT_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x2803 | STAT_GIERRATE_SCHWERPUNKT_WERT | °/s | High | signed char | - | 1.0 | 0.77 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x280D | STAT_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x280E | STAT_IST_LENKWINKEL_FAHRER_WERT | ° | High | signed char | - | 1.0 | 15.0 | 0.0 |
| 0x2811 | STAT_LAENGSGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2812 | STAT_FAHRZUSTAND_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2818 | STAT_REFERNZGESCHWINDIGKEIT_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2858 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x2859 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x285A | STAT_IST_MODUS_SCHALTER_FAHRERLEBNIS | 0-n | High | 0xFF | TAB_FAHRERLEBNIS_MODUS | - | - | - |
| 0x285B | STAT_ANFORDERUNG_MODUS_WECHSEL | 0-n | High | 0xFF | TAB_FAHRERLEBNIS_MODUS | - | - | - |
| 0x285C | STAT_FILTER_MODUS_WECHSEL | 0-n | High | 0xFF | TAB_FAHRERLEBNIS_FILTER | - | - | - |
| 0x285D | STAT_INDIVIDUALISIERTE_AUSPRAEGUNG_SPORTMODUS_WERT | HEX | High | unsigned int | - | - | - | - |
| 0x4011 | UWB_U_AC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | UWB_I_AC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | UWB_U_DC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | UWB_I_DC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | UWB_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4016 | UWB_LLC_TRAFO_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4017 | UWB_SLE_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4018 | UWB_BTS_STATUS_PIC | HEX | High | unsigned int | - | - | - | - |
| 0x4019 | UWB_P_SOLL_HVPM_LADEN | W | High | unsigned int | - | 30.0 | 1.0 | 0.0 |
| 0x401A | UWB_I_MAX_ALTC_SLE | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x401B | UWB_I_MAX_DC_SLE | A | High | unsigned char | - | 0.8 | 1.0 | 0.0 |
| 0x401C | UWB_CHA_ENB | 0/1 | High | 0x01 | - | - | - | - |
| 0x401D | UWB_CTRL_STATUS_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401E | UWB_RUNLEVEL_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401F | UWB_CHA_DUR_SLE | s | High | unsigned char | - | 150.0 | 1.0 | 0.0 |
| 0x4020 | UWB_HVPM_CHGCOND_HVSTO | % | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4021 | UWB_HVPM_AVL_U_HV_LINK_MOT_TRCT | V | High | unsigned int | - | 0.2 | 1.0 | 0.0 |
| 0x4022 | UWB_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_HVPM_ST_CHGRDI | - | - | - |
| 0x4023 | UWB_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_HVPM_ST_CHGNG | - | - | - |
| 0x4031 | UWB_HVPM_AVL_I_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4032 | UWB_HWPM_AVL_I_EKK | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x4034 | UWB_HVPM_AVL_U_HVSTO | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4035 | UWB_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4036 | UWB_HVPM_CTR_MEASMT_ISL | 0-n | High | 0xFF | TAB_HVPM_CTR_MEASMT_ISL | - | - | - |
| 0x4037 | UWB_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_HVPM_CHGNG_TYP_IMME | - | - | - |
| 0x4038 | UWB_HVPM_STATUS_HV_STARTFEHLER | HEX | High | signed long | - | - | - | - |
| 0x4039 | UWB_HVPM_STATUS_HVSTART_KOMM | HEX | High | unsigned char | - | - | - | - |
| 0x403A | UWB_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x403B | UWB_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x403D | UWB_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x403E | UWB_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x403F | UWB_HVPM_I_BATT_SME | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4040 | UWB_HVPM_ST_CRASH_MOD | HEX | High | unsigned char | - | - | - | - |
| 0x4041 | UWB_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x4042 | UWB_HVPM_ST_CRASH_SERVERTY | HEX | High | unsigned char | - | - | - | - |
| 0x4043 | UWB_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4044 | UWB_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4045 | UWB_HVPM_IBATT_BN | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4046 | UWB_HVPM_UBATT_BN | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4047 | UWB_HVPM_F_DCDC1_gen | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x4048 | UWB_OBD_CALC_LOAD_VAL | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x4049 | UWB_OBD_VEH_SPEED | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x404A | UWB_OBD_ENG_COOL_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x404B | UWB_OBD_THROT_POS | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x404C | UWB_OBD_CHG_COND_HVSTO | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x404D | UWB_EWP_DUTYCYCLE | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x404E | UWB_EWP_DIAGSTATUS | HEX | High | unsigned char | - | - | - | - |
| 0x404F | UWB_EWP_AE_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4050 | UWB_EWP_TEMP_ENTRY | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4051 | UWB_EWP_TEMP_EXIT | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4052 | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4053 | UWB_ELUP_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | UWB_ELUP_UNTERDRUCK | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x4055 | UWB_BA_SOLL_HVPM_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4056 | UWB_REASON_FAILSAFE | HEX | High | unsigned int | - | - | - | - |
| 0x4057 | UWB_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x4058 | UWB_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x405B | UWB_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x405C | UWB_OBD_MOTORDREHZAHL | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x405D | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x405E | UWB_RSTINFO_EXCADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x405F | UWB_RSTINFO_FUSIFLAGS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4060 | UWB_RSTINFO_DSADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4061 | UWB_RSTINFO_CAUSE_MC0 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x4062 | UWB_RSTINFO_EXCCLASS_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4063 | UWB_RSTINFO_EXCTIN_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4064 | UWB_RSTINFO_WDERRCTR_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4065 | UWB_RSTINFO_EXTWDINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4066 | UWB_RSTINFO_EXTWDTREASON_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4067 | UWB_RSTINFO_OWNVSMSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4068 | UWB_RSTINFO_SWSOURCE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4069 | UWB_RSTINFO_SWINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x406A | UWB_RSTINFO_EXCADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406B | UWB_RSTINFO_FUSIFLAGS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406C | UWB_RSTINFO_DSADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406D | UWB_RSTINFO_CAUSE_MC2 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x406E | UWB_RSTINFO_EXCCLASS_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x406F | UWB_RSTINFO_EXCTIN_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4070 | UWB_RSTINFO_WDERRCTR_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4071 | UWB_RSTINFO_EXTWDINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4072 | UWB_RSTINFO_EXTWDTREASON_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4073 | UWB_RSTINFO_OWNVSMSTATE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4074 | UWB_RSTINFO_SWSOURCE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4075 | UWB_RSTINFO_SWINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4077 | UWB_EME_CPU_TIME_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4078 | UWB_EME_CPU_TIME_1 | HEX | High | unsigned long | - | - | - | - |
| 0x407B | UWB_CPLD_SS_ENTRY_0 | HEX | High | unsigned int | - | - | - | - |
| 0x407C | UWB_CPLD_SS_ENTRY_1 | HEX | High | unsigned int | - | - | - | - |
| 0x407F | UWB_RSTINFO_INTWDTREASON | HEX | High | unsigned char | - | - | - | - |
| 0x4081 | UWB_T_DIE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4085 | UWB_V_U_ZK | HEX | High | unsigned long | - | - | - | - |
| 0x4086 | UWB_EME_CPU_TIME_0_REC | HEX | High | unsigned long | - | - | - | - |
| 0x4087 | UWB_EME_CPU_TIME_1_REC | HEX | High | unsigned long | - | - | - | - |
| 0x408A | UWB_CPLD_SS_ENTRY_0_REC | HEX | High | unsigned int | - | - | - | - |
| 0x408B | UWB_CPLD_SS_ENTRY_1_REC | HEX | High | unsigned int | - | - | - | - |
| 0x4090 | UWB_DCDC_I_LAST | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4091 | UWB_DCDC_I_TRAFIL | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4092 | UWB_DCDC_I_TRA | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4093 | UWB_DCDC_I_TIEFSETZER_PH1 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4094 | UWB_DCDC_I_TIEFSETZER_PH2 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4095 | UWB_DCDC_I_BATTERY | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4096 | UWB_DCDC_T_BOARD | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4097 | UWB_DCDC_T_GLEICHRICHTER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4098 | UWB_DCDC_T_GEGENTAKTWANDLER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4099 | UWB_DCDC_T_TIEFSETZER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x409A | UWB_DCDC_U_HV_BATTERY | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x409B | UWB_DCDC_U_LV_AUSGANG | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x409C | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH1 | HEX | High | unsigned int | - | - | - | - |
| 0x409D | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH2 | HEX | High | unsigned int | - | - | - | - |
| 0x409E | UWB_DCDC_SPI_ERROR_STATUS_MC0 | HEX | High | unsigned int | - | - | - | - |
| 0x409F | UWB_DCDC_SPI_ERROR_STATUS_MC6 | HEX | High | unsigned int | - | - | - | - |
| 0x40A0 | UWB_DCDC_U_GNDDIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4100 | UWB_AE_EM_DREHZAL | 1/min | High | unsigned int | - | 0.5 | 1.0 | -12000.0 |
| 0x4101 | UWB_PS_AKTUELLER_BEFEHL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | UWB_PS_STROM_HBRUECKE | mA | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | UWB_PS_POS_SENS1 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | UWB_PS_POS_SENS2 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4105 | UWB_PS_SPG_SENS1 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4107 | UWB_AE_EM_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4108 | UWB_AE_INV_TEMP_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4109 | UWB_AE_INV_TEMP_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410A | UWB_AE_INV_TEMP_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410B | UWB_AE_EM_MD_SOLL | Nm | High | unsigned int | - | 0.5 | 1.0 | -1023.5 |
| 0x410C | UWB_SPI_RDC_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x410D | UWB_STAT_RESOLVER | HEX | High | unsigned char | - | - | - | - |
| 0x410E | UWB_FUSI_LD_MC0 | HEX | High | signed long | - | - | - | - |
| 0x4111 | UWB_VEH_SPEED | km/h | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4112 | UWB_FUSI_LD_MC2 | HEX | High | unsigned int | - | - | - | - |
| 0x4113 | UWB_ECU_SYSSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4116 | UWB_EM_ISTMOMENT | Nm | High | unsigned int | - | 1.0 | 1.0 | -5000.0 |
| 0x4117 | UWB_EM_ROTORTEMP | °C | High | unsigned char | - | 5.0 | 1.0 | -512.0 |
| 0x4118 | UWB_EM_DERATINGS | HEX | High | unsigned int | - | - | - | - |
| 0x4119 | UWB_INV_TEMP_GD | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x411A | UWB_INV_I_ZK | A | High | unsigned int | - | 1.0 | 10.0 | -1000.0 |
| 0x411B | UWB_EM_FAILAEO | HEX | High | unsigned int | - | - | - | - |
| 0x411C | UWB_TEMP_EX | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4130 | UWB_FUSI_SSD_STATUS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4131 | UWB_FUSI_CPLD_INFO | HEX | High | unsigned char | - | - | - | - |
| 0x4132 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x4133 | UWB_FUSI_UZK | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4134 | UWB_FUSI_DCRG_STATUS_MC0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4135 | UWB_FUSI_I_INV_DC | mA | High | unsigned char | - | 35.0 | 1.0 | -1000000.0 |
| 0x4136 | UWB_FUSI_BA_EM_SOLL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4137 | UWB_FUSI_T_PWR_UP | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4138 | UWB_FUSI_T_KL15_AN | s | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4139 | UWB_FUSI_SPT_TEST_STEP | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413A | UWB_FUSI_OPMO_CHGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413B | UWB_FUSI_DCRG_STATUS_MC2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413C | UWB_FUSI_OPMO_DCDC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413D | UWB_FUSI_I_DCDC_LV | mA | High | unsigned char | - | 200.0 | 1.0 | 0.0 |
| 0x413E | UWB_FUSI_SME_SUTZ_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413F | UWB_FUSI_DCDC_CTRL_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4140 | UWB_FUSI_INV_LSS_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x4141 | UWB_FUSI_PFC_ENUM_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4142 | UWB_FUSI_PFC_SIGNATURE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4143 | UWB_FUSI_PFC_MAXDIFF_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4144 | UWB_FUSI_PFC_MAXDIFF_10MS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4145 | UWB_FUSI_PFC_ENUM_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4146 | UWB_FUSI_PFC_SIGNATURE_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4147 | UWB_FUSI_PFC_MAXDIFF_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4148 | UWB_FUSI_PFC_MAXDIFF_10MS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4149 | UWB_FUSI_SPT_MIX_STATUS_1 | HEX | High | unsigned long | - | - | - | - |
| 0x414A | UWB_FUSI_SPT_MIX_STATUS_2 | HEX | High | unsigned int | - | - | - | - |
| 0x414B | UWB_FUSI_SPT_MIX_STATUS_3 | HEX | High | unsigned long | - | - | - | - |
| 0x414C | UWB_FUSI_HVSM0_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

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

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X2541_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALID_TEXT | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Cal-ID auslesen (hier muss die Cal-ID wie bei Mode $09 (PID $04) ausgegeben werden). |
| STAT_CVN_WERT | HEX | high | unsigned long | - | - | - | - | - | CVN auslesen (hier muss die CVN wie bei Mode $09 (PID $06) ausgegeben werden) |

### RES_0XADC9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWP_STATUS_NR | - | - | + | 0-n | high | unsigned char | - | TAB_AE_EWP_STATUS | - | - | - | Status der Elektrischen Wasserpumpe |
| STAT_EWP_ANST_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Drehzahl der Wasserpumpe in Prozent (0 - 100%) |
| STAT_EWP_TESTER_DOND | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Bedingung für Testerkontrolle: 0 = nicht erfüllt; 1 = erfüllt |

### RES_0XADEB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHZAHL_DREHMOMENT_01_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine unterhalb der Drehmomentstützstelle 1 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_02_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 1 und Drehmomentstützstelle 2 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_03_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 2 und Drehmomentstützstelle 3  (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_04_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 3 und Drehmomentstützstelle 4  (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_05_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 4 und Drehmomentstützstelle 5 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_06_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 5 und Drehmomentstützstelle 6 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_07_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 6 und Drehmomentstützstelle 7 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_08_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 7 und Drehmomentstützstelle 8 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_09_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 8 und Drehmomentstützstelle 9 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_10_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 9 und Drehmomentstützstelle 10 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_11_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 10 und Drehmomentstützstelle 11 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_12_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine oberhalb der Drehmomentstützstelle 11 (Drehzahlbereich je nach Job-Argument) in Sekunden |

### RES_0XADED_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNGSMESSUNG_PHEV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_STATUS | - | - | - | Aktueller Mode der Leistungsmessung PHEV |

### RES_0XADF0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ROTORLAGESENSOR_STATUS_MODE_GEN3 | - | - | - | aktueller Status und Modus |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | ° | high | signed int | - | - | 1.0 | 182.0 | 0.0 | EPS Offset Wert |

### RES_0XADF1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_DIAG_DCDC_MODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ST_DIAG_DCDC_MODUS | 1.0 | 1.0 | 0.0 | Rückmeldung Betriebsart DCDC |
| STAT_ST_DIAG_DCDC_GRENZEN | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ST_DIAG_DCDC_GRENZEN | 1.0 | 1.0 | 0.0 | Rückmeldung Grenzen |

### RES_0XADF2_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_SYSTEM_ON_OFF | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_HV_SYSTEM_ON_OFF | 1.0 | 1.0 | 0.0 | Auswahl für Ein-/Ausschalten des HV-Systems |

### RES_0XADF4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_ANFORDERUNG | - | + | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADF9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTVAL_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1. Wert des angeforderten Histogramm |
| STAT_HISTVAL_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2. Wert des angeforderten Histogramm |
| STAT_HISTVAL_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3. Wert des angeforderten Histogramm |
| STAT_HISTVAL_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 4. Wert des angeforderten Histogramm |
| STAT_HISTVAL_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 5. Wert des angeforderten Histogramm |
| STAT_HISTVAL_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 6. Wert des angeforderten Histogramm |
| STAT_HISTVAL_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 7. Wert des angeforderten Histogramm |
| STAT_HISTVAL_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 8. Wert des angeforderten Histogramm |
| STAT_HISTVAL_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 9. Wert des angeforderten Histogramm |
| STAT_HISTVAL_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 10. Wert des angeforderten Histogramm |

### RES_0XADFB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSMODUS_PHEV_NR | - | + | + | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV_ERGEBNIS | - | - | - | Status Werksmodus PHEV |

### RES_0XADFC_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SAETZE_GESAMT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gespeicherten Datensätze der Ladehistorie. |
| STAT_SATZNUMMER_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nummer des ausgelesenen Satzes der Ladehistorie. |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_WERT | + | - | - | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_WERT | + | - | - | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A |
| STAT_SYSTEMZEIT_EINSTECKEN_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) |
| STAT_KM_STAND_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag |
| STAT_HVB_SOC_EINSTECKEN_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - Auflösung 0,5% |
| STAT_LADEART | + | - | - | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Oma/AC Wallbox/DC/¿) |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (Standklima/Heizung) ausgewählt (0 = nein / 1 = ja) |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden wurde eingestellt (0 = nein / 1 = ja) |
| STAT_REMOTE_AENDERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Jedliche Änderungen per Remote-Funktion durchgeführt (0 = nein / 1 = ja) |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden (0 = nein / 1 = ja) |
| STAT_EINSTELLUNG_LADESTROMFAKTOR_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeestromfaktor (ABK) |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeende (Zeit in min rel. zu Ladestart (stecken)) |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (mit Fahrzeug Vorkonditionierung) |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_WERT | + | - | - | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (ohne Fahrzeug Vorkonditionierung) |
| STAT_SYSTEMZEIT_LADEENDE_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei der Ladeende |
| STAT_LADEDAUER_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktive Ladedauer (ohne evtl. Fahrzeug-Vorkonditionnierung aber mit Speicher-Vorkonditionnierung). |
| STAT_HVB_SOC_LADEENDE_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers (bei Ladeende) - Auflösung 0,5% |
| STAT_NETZ_ENTNOMMENE_ENERGIE_WERT | + | - | - | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Entnommene Netzenergie bis Ladeende (ohne Fahrzeug Vorkonditionierung) - Auflösung 0,2 kWh |
| STAT_NETZ_SPITZENLEISTUNG_WERT | + | - | - | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spitzenlast (Maximalwert der aufgen. Netzleistung) - Auflösung 0,5 kW |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_WERT | + | - | - | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzspannung zum Zeitpunkt des MAX-Wertes der Spitznetzleistung |
| STAT_HVB_VORKONDITIONNIERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung wurde durchgeführt (0= nein / 1 = ja) |
| STAT_VORKONDITIONNIERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (wie eingestellt) wurde durchgeführt (0 = nein / 1 = ja) |
| STAT_NETZ_AUSSETZER_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten ( 0 = nein / 1 = ja) |
| STAT_NETZ_AUSSETZER_ANZAHL_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t>1s) |
| STAT_LADEENDE_URSACHE | + | - | - | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende |

### RES_0XADFE_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMSTAND_START_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Start der Klassierung |
| STAT_KMSTAND_AKUTELL_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der Klassierung (aktuell) |
| STAT_KLASSIERTAKT_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Klassiertakt |
| STAT_ZUG_SCHUB_KLASS_KL1_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zug/Schub Wechsel Klassierung Zug : 0 bis 60 Nm Schub : 0 bis -60 Nm |
| STAT_ZUG_SCHUB_KLASS_KL2_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zug/Schub Wechsel Klassierung Zug : 60 bis 150 Nm Schub : -60 bis -150 Nm |
| STAT_ZUG_SCHUB_KLASS_KL3_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zug/Schub Wechsel Klassierung Zug : < 150 Nm Schub : < -150 Nm |

### RES_0XAE04_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INVERTER_CZK_LIFETIME_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [0A bis 50A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [50A bis 100A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [100A bis 150A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [150A bis 200A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [200A bis 250A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [250A bis 300A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [300A bis 350A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [350A bis 400A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [grösser 400A], DC-Spannung [kleiner 320V] |
| STAT_INVERTER_CZK_LIFETIME_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [0A bis 50A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [50A bis 100A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_12_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [100A bis 150A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_13_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [150A bis 200A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_14_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [200A bis 250A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_15_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [250A bis 300A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_16_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [300A bis 350A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_17_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [350A bis 400A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_18_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [grösser 400A], DC-Spannung [320V bis 380V] |
| STAT_INVERTER_CZK_LIFETIME_19_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [0A bis 50A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_20_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [50A bis 100A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_21_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [100A bis 150A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_22_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [150A bis 200A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_23_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [200A bis 250A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_24_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [250A bis 300A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_25_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [300A bis 350A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_26_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [350A bis 400A], DC-Spannung [grösser 380V] |
| STAT_INVERTER_CZK_LIFETIME_27_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Nutzung des Zwischenkreiskondensators bei RMS-Strom von [grösser 400A], DC-Spannung [grösser 380V] |

### RES_0XAF42_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTVAL_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1.Wert des angeforderten Histogramms |
| STAT_HISTVAL_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2.Wert des angeforderten Histogramms |
| STAT_HISTVAL_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3.Wert des angeforderten Histogramms |
| STAT_HISTVAL_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 4.Wert des angeforderten Histogramms |
| STAT_HISTVAL_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 5.Wert des angeforderten Histogramms |
| STAT_HISTVAL_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 6.Wert des angeforderten Histogramms |

### RES_0XDDF6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DCDC Wandler: IST-Spannung LV-Seite am B+ Bolzen |
| STAT_STROM_DCDC_LV_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | DCDC Wandler: IST-Strom LV-Seite am B+ Bolzen |

### RES_0XDE00_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HVB_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Ladezustand HV Batterie |
| STAT_SOC_HVB_MIN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Startfähigkeitsgrenze Ladezustand HV Batterie |
| STAT_LADEGERAET | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladegerät erkannt (1 = erkannt / 0 = nicht erkannt) |
| STAT_FREMDLADUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fremdladung (1 = erkannt / 0 = nicht erkannt) |
| STAT_FAHRB | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrbereitschaft (1 = aktiv / 0 = nicht aktiv) |
| STAT_BA_DCDC_KOMM_NR | 0-n | high | unsigned char | - | TAB_EME_KOMM_BETRIEBSART_DCDC | 1.0 | 1.0 | 0.0 | Kommandierte Betriebsart DC/DC Wandler |
| STAT_I_DCDC_HV_OUT_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze HV-Seite |
| STAT_U_DCDC_HV_OUT_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannungsgrenze HV-Seite |
| STAT_I_DCDC_LV_OUT_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze NV-Seite |
| STAT_U_DCDC_LV_OUT_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannungsgrenze NV-Seite |
| STAT_BA_DCDC_IST_NR | 0-n | high | unsigned char | - | TAB_EME_IST_BETRIEBSART_DCDC | 1.0 | 1.0 | 0.0 | IST-Betriebsart DCDC-Wandler |
| STAT_ALS_DCDC_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Auslastung DC/DC-Wandler |
| STAT_I_DCDC_HV_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Strom HV-Seite |
| STAT_U_DCDC_HV_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannung HV-Seite |
| STAT_I_DCDC_LV_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Strom NV-Seite |
| STAT_U_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannung NV-Seite |

### RES_0XDE02_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_DC_HV_LE_WERT | V | high | signed int | - | - | 0.0313 | 1.0 | 0.0 | HV-Zwischenkreisspannung |
| STAT_HV_READY | 0/1 | high | unsigned char | - | - | - | - | - | Freigabe HV |
| STAT_HDCAC_EREQ | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Schließen Schütze HV-Batterie |
| STAT_I0ANF_HVB | 0-n | high | unsigned char | - | TAB_EME_I0ANF_HVB | - | - | - | Status Nullstromanforderung |
| STAT_ANF_ENTL_ZK | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Entladung HV-Zwischenkreis durch DCDC-Wandler |
| STAT_HVSTART_KOMM | 0-n | high | unsigned char | - | TAB_EME_HVSTART_KOMM | - | - | - | Ausgabe des Stateflow-Status des HVPM Startsystems |
| STAT_ANF_ENTL_EME | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Notentladung ZK: 0 = nicht aktiv; 1 = aktiv |

### RES_0XDE04_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HVB_SOC_FAHRB_0_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_20_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_25_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_30_33_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_33_36_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_36_39_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_39_42_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_42_45_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_45_48_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_48_51_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_51_56_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_56_65_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_65_80_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_80_100_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |

### RES_0XDE06_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T_P_WUNSCH_ID_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heat Up - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Heizen - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cool-Down - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Kühlen - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Beschlag - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Defrost - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung dringend - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterieheizung - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC/DC-Wandler - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 1 - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_11_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 2 - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_12_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 3 - Zeit, während der Funktion angefordert war. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heat Up - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Heizen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cool-Down - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Kühlen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Beschlag - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Defrost - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung dringend - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterieheizung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC/DC-Wandler - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 1 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_11_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 2 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_12_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 3 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heat Up - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Heizen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cool-Down - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Kühlen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Beschlag - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Defrost - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung dringend - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterieheizung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC/DC-Wandler - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 1 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_11_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 2 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_12_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 3 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_0_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 1.- 3. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 4. - 6. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 7. - 9. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 10. - 12. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 13. - 15. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 16. - 18. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 19. - 21. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 22. - 24. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 25. - 27. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 28. - 30. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_0_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 1. - 3. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 4. - 6. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 7. - 9. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 10. - 12. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 13. - 15. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 16. - 18. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 19. - 21. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 22. - 24. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 25. - 27. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 28. - 30. Minute |

### RES_0XDE19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BREMSBTG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsbetätigungen |
| STAT_LAUFZEIT_ELUP_S_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Elup |
| STAT_ANLAUFE_ELUP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anläufe Elup |

### RES_0XDE1C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DCDC_ALS_HIST_BEREICH_NULL_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 0 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_1_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 1 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_2_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 2 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_3_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 3 |

### RES_0XDE1E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZE_KMSTAND_BATTTAUSCH_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei letztem ZSE-Batterie-Tausch |
| STAT_SZE_KMSTAND_BATTTAUSCH_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei vorletztem ZSE-Batterie-Tausch |
| STAT_SZE_KMSTAND_BATTTAUSCH_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei vorvorletztem ZSE-Batterie-Tausch |
| STAT_SZE_WASSERVERLUST_WERT | g/Ah | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Wasserverlust der ZSE-Batterie |
| STAT_SZE_HIST_OCV_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 1 |
| STAT_SZE_HIST_OCV_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 2 |
| STAT_SZE_HIST_OCV_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 3 |
| STAT_SZE_HIST_OCV_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 4 |
| STAT_SZE_HIST_OCV_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 5 |
| STAT_SZE_HIST_OCV_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 6 |
| STAT_SZE_HIST_OCV_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 7 |
| STAT_SZE_SOC_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | SOC der ZSE-Batterie |
| STAT_SZE_SOH_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOH der ZSE-Batterie |
| STAT_SZE_SOH_H2O_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wasserverlusts-SOH der ZSE-Batterie |
| STAT_SZE_SOH_OCV_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ruhespannungs-SOH der ZSE-Batterie |
| STAT_SZE_SOH_T_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | T-Histogramm-SOH der ZSE-Batterie |
| STAT_SZE_SOH_U_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | U-Histogramm-SOH der ZSE-Batterie |
| STAT_SZE_SOH_UT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | UT-Histogramm-SOH der ZSE-Batterie |
| STAT_SZE_SOH_ZDFKT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zelldefekt-SOH der ZSE-Batterie |
| STAT_SZE_SOH_ZTIEFEL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tiefentladungszähler-SOH der ZSE-Batterie |
| STAT_SZE_SOH_ZZUSTART_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustartszähler-SOH der ZSE-Batterie |
| STAT_SZE_HIST_T_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 1 |
| STAT_SZE_HIST_T_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 2 |
| STAT_SZE_HIST_T_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 3 |
| STAT_SZE_HIST_T_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 4 |
| STAT_SZE_HIST_T_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 5 |
| STAT_SZE_HIST_T_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 6 |
| STAT_SZE_HIST_T_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 7 |
| STAT_SZE_HIST_T_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Temperatur der ZSE-Batterie; Bereich 8 |
| STAT_SZE_HIST_U_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 1 |
| STAT_SZE_HIST_U_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 2 |
| STAT_SZE_HIST_U_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 3 |
| STAT_SZE_HIST_U_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 4 |
| STAT_SZE_HIST_U_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 5 |
| STAT_SZE_HIST_U_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 6 |
| STAT_SZE_HIST_U_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 7 |
| STAT_SZE_HIST_U_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 8 |
| STAT_SZE_HIST_U_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung der ZSE-Batterie; Bereich 9 |
| STAT_SZE_HIST_UT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung-Temperatur der ZSE-Batterie; Bereich 1 |
| STAT_SZE_HIST_UT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung-Temperatur der ZSE-Batterie; Bereich 2 |
| STAT_SZE_HIST_UT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung-Temperatur der ZSE-Batterie; Bereich 3 |
| STAT_SZE_HIST_UT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung-Temperatur der ZSE-Batterie; Bereich 4 |
| STAT_SZE_HIST_UT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung-Temperatur der ZSE-Batterie; Bereich 5 |
| STAT_SZE_HIST_UT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Spannung-Temperatur der ZSE-Batterie; Bereich 6 |
| STAT_SZE_Z_TIEFENTLADUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Tiefentladungen der ZSE-Batterie |
| STAT_SZE_Z_ZUSTART_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl erfolgte Zustarte aus der ZSE-Batterie |

### RES_0XDE75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_HV_SLE_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung in der SLE (F15: Wert nicht umgesetzt,da SLE_B35;  Result liefert 13107V = ungültig) |
| STAT_SPANNUNG_HV_SLE_PFC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | SLE Power Factor Corrector Spannung (F15: Wert nicht umgesetzt,da SLE_B35,  Result liefert 13107V = ungültig) |
| STAT_SPANNUNG_HV_SLE_AC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | SLE Eingangsspannung (F15: Wert nicht umgesetzt,da SLE_B35;  Result liefert 13107V = ungültig) |
| STAT_SPANNUNG_HV_DCDC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_SPANNUNG_HV_UMRICHTER_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung im Umrichter |

### RES_0XDE7E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_TEMP_ENDSTUFE_ELUP_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperaturmessung Endstufe für ELUP. |
| STAT_ROHSIGNAL_BUDS_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal BUDS. |

### RES_0XDE7F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_TEMP_EMASCHINE_STATOR_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor E-Maschine Stator |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_U_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase U. |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_V_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase V. |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_W_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase W. |
| STAT_ROHSIGNAL_SPANNUNG_HVDC_UMRICHTER_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal HV DC Spannung Umrichter |
| STAT_ROHSIGNAL_STROM_HVDC_UMRICHTER_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal HV DC Strom Umrichter. |
| STAT_ROHSIGNAL_STROM_U_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase U. |
| STAT_ROHSIGNAL_STROM_V_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase V. |
| STAT_ROHSIGNAL_STROM_W_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase W. |
| STAT_ROHSIGNAL_ROTORLAGESENSOR_WERT | rad | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Rotorlagesensor korrigierte elektrische Winkelposition (Radian) |

### RES_0XDE81_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_KL30B_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Spannungsmessung Klemme30b |
| STAT_ROHSIGNAL_KL15WUO_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal  Klemme 15WUO (0 = nicht aktiv, 1 = aktiv) |
| STAT_ROHSIGNAL_CRASHSIGNAL_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal Crasheingang Crashsignal elektrisch ( 0 = nicht aktiv; 1 = aktiv ) |

### RES_0XDE82_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_SPANNUNG_AC_NETZ_L1_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Spannungsmessung Phase L1 im AC Netz; Auflösung, Quantisierung, Range etc. wie in SG-interner Funktion verwendet wird. |
| STAT_ROHSIGNAL_STROM_PFC_EFF_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Strommessung Phase L1 im AC Netz; Auflösung, Quantisierung, Range etc. wie in SG-interner Funktion verwendet wird. |
| STAT_ROHSIGNAL_E_S_CHARGE_EN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Charge Enable Leitung; Auflösung, Quantisierung, Range etc. wie in SG-interner Funktion verwendet wird. |

### RES_0XDE83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_SPANNUNG_LV_DCDC_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Spannungsmessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_LV_DCDC_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_HV_DCDC_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung HV DCDC Wandler. |

### RES_0XDE84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NETZFREQUENZ_PHASE_1_WERT | - | high | unsigned int | - | - | 0.25 | 1.0 | 0.0 | Aktuelle Netzfrequenz Phase 1 |
| STAT_LADEDAUER_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der im aktuellen Ladezyklus verstrichenen Ladezeit |
| STAT_FEHLERZUSTAND_NR | 0-n | high | unsigned char | - | TAB_AE_SLE_FEHLERZUSTAENDE | - | - | - | SLE Fehlerzustände: 0=Derating 1=Ladeunterbrechung 2=Notlauf 3=Kommunikationsausfall 4=Reserviert 255 Signal ungültig |
| STAT_SLE_DERATING_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert, um den die DC-HV-Ausgangsleistung reduziert ist. 0-254% |
| STAT_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_AE_SLE_BETRIEBSMODE | - | - | - | Betriebsart |
| STAT_WIRKUNGSGRAD_LADEZYKLUS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Ladezyklus |

### RES_0XDE85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLE_DC_HV_LEISTUNG_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Abgegebende Momentanleistung in den Zwischenkreis |
| STAT_SLE_DC_HV_LEISTUNG_MAX_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Maximal abgebbare Leistung in den Zwischenkreis |
| STAT_SLE_AC_WIRKLEISTUNG_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Entnommene Momentanwirkleistung aus dem Netz |

### RES_0XDE86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_RMS_AC_PHASE_1_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Effektivwerte der AC Leiterspannungen (Phase1) |
| STAT_SPANNUNG_SLE_DC_HV_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | SLE DC HV Spannung |
| STAT_SPANNUNG_SLE_DC_HV_OBERGRENZE_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | SLE DC HV Spannungsobergrenze |

### RES_0XDE89_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_DCDC_WANDLER_HV_WERT | A | high | unsigned int | - | - | 0.05 | 1.0 | -100.0 | Strom des DCDC-Wandlers auf der HV-Seite |
| STAT_STROM_DCDC_WANDLER_12V_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | -1000.0 | Strom des DCDC-Wandlers auf der 12V-Seite |
| STAT_STROM_DCDC_TS1_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Tiefsetzsteller-Strom 1 |
| STAT_STROM_DCDC_TS2_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Tiefsetzsteller-Strom 2 |
| STAT_STROM_DCDC_TRAFO1_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Trafostrom 1 |
| STAT_STROM_DCDC_TRAFO2_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Trafostrom 2 |

### RES_0XDE8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_UMRICHTER_PHASE_U_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase U |
| STAT_TEMP_UMRICHTER_PHASE_V_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase V |
| STAT_TEMP_UMRICHTER_PHASE_W_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase W |
| STAT_TEMP_UMRICHTER_GT_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Inverter Gatedriver |
| STAT_TEMP_DCDC_BO_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des DCDC Boards |
| STAT_TEMP_DCDC_GTW_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur DC/DC-Gegentaktwandler |
| STAT_TEMP_DCDC_TS_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur DC/DC-Tiefsetzer |
| STAT_TEMP_DCDC_GR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des DCDC Boards |
| STAT_TEMP_SLE_PFC_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-PowerFactorCorrection |
| STAT_TEMP_SLE_GR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-Gleichrichter |
| STAT_TEMP_SLE_GTW_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-Gegentaktwandler |
| STAT_TEMP_SLE_BO_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des SLE Boards |
| STAT_TEMP_ELUP_LE_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur auf dem Powerbord - Messstelle ELUP Leistungsendstufe |
| STAT_TEMP_PROZESSOR_MC0_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor MC0 |
| STAT_TEMP_PROZESSOR_MC2_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor MC2 |

### RES_0XDE92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_AE_ZST_AKTIV_NAKTIV | - | - | - | Ist-Betriebsart des DCDC-Wandlers |
| STAT_SPANNUNG_LV_IST_WERT | V | high | unsigned int | - | - | 0.05 | 1.0 | 0.0 | Bordnetzspannung |
| STAT_AUSLASTUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung des DCDC-Wandlers |

### RES_0XDE93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur des ELUP-Treibers |

### RES_0XDE96_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLER_BIT0_EIN | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 0: Shutdown Undervoltage 0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT1_EIN | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 1: Shutdown Overvoltage  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT2_EIN | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 2: Shutdown Overtemperature  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT3_EIN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 3: Shutdown Overcurrent  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT4_EIN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 4: Interlock Fault  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT5_EIN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 5: Not in commanded mode  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT6_EIN | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 6: Genereller HW-Fehler (Err_State)  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT7_EIN | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 7: -Vorhalt- Verfeinerung HW-Fehler 1  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT8_EIN | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 8: -Vorhalt- Verfeinerung HW-Fehler 2  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT9_EIN | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit9: -Vorhalt- Verfeinerung HW-Fehler 3  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT10_EIN | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit10: -Vorhalt- Verfeinerung HW-Fehler 4  0=nicht aktiv 1=aktiv |

### RES_0XDE9E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_NR | 0-n | high | unsigned char | - | TAB_EDME_STATUS_LADEN | - | - | - | Information über den aktuellen Status des Ladens (siehe TAB_EDME_STATUS_LADEN) |
| STAT_REMOTE_LADEN_NR | 0-n | high | unsigned char | - | TAB_EDME_REMOTE_LADEN | - | - | - | Bit0: RemoteLaden nicht aktiv Bit1: RemoteLaden on Hold Bit2: RemoteLaden aktiv |
| STAT_TIMER_LADEN_NR | 0-n | high | unsigned char | - | TAB_EDME_TIMER_LADEN_NR | - | - | - | Bit0: TimerLaden nicht aktiv Bit1: TimerLaden on Hold Bit2: TimerLaden aktiv |
| STAT_HV_SOC_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Anzeige Ladezustand HV-Batterie |
| STAT_ZEIT_LADEENDE_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_MAX_LADESTROM_LADEGERAET_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximaler AC-Ladestrom Ladegerät |
| STAT_IST_AC_SPANNUNG_LADEGERAET_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-AC-Spannung Ladegerät |
| STAT_REICHWEITE_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reichweite |
| STAT_HVB_TEMP_WERT | ° | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Temperatur der HV-Batterie |
| STAT_TRIGGER_SEGMENTSPEICHER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösebedingung für das Lesen des Segmentspeichers |

### RES_0XDEA1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - aktueller Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_AKTUELL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - aktueller Vorgang |
| STAT_KM_STAND_AKTUELL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - aktueller Vorgang |
| STAT_HVB_SOC_EINSTECKEN_AKTUELL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - aktueller Vorgang |
| STAT_LADEART_NR_AKTUELL | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - aktueller Vorgang |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (Standklima/Heizung) ausgewählt (0 = nein / 1 = ja) - aktueller Vorgang |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden wurde eingestellt (0 = nein / 1 = ja) - aktueller Vorgang |
| STAT_REMOTE_AENDERUNG_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Jedliche Änderungen per Remote-Funktion durchgeführt (0 = nein / 1 = ja) - aktueller Vorgang |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden (0 = nein / 1 = ja) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADESTROMFAKTOR_AKTUELL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeestromfaktor (ABK) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeende (Zeit in min rel. zu Ladestart (stecken)) - aktueller Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (mit Fahrzeug Vorkonditionierung) - aktueller Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_AKTUELL_WERT | min | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (ohne Fahrzeug Vorkonditionierung) - aktueller Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_AKTUELL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei der Ladeende - aktueller Vorgang |
| STAT_LADEDAUER_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktive Ladedauer (ohne evtl. Fahrzeug-Vorkonditionnierung aber mit Speicher-Vorkonditionnierung) - aktueller Vorgang |
| STAT_HVB_SOC_LADEENDE_AKTUELL_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Ladezustand des HV-Speichers (bei Ladeende) - aktueller Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_AKTUELL_WERT | kWh | high | unsigned char | - | - | 0.2 | 1.0 | 0.0 | Entnommene Netzenergie bis Ladeende (ohne Fahrzeug Vorkonditionierung) - aktueller Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_AKTUELL_WERT | kW | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Spitzenlast (Maximalwert der aufgen. Netzleistung)  - aktueller Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_AKTUELL_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzspannung zum Zeitpunkt des MAX-Wertes der Spitznetzleistung - aktueller Vorgang |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung wurde durchgeführt (0= nein / 1 = ja) - aktueller Vorgang |
| STAT_VORKONDITIONNIERUNG_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (wie eingestellt) wurde durchgeführt (0 = nein / 1 = ja) - aktueller Vorgang |
| STAT_NETZ_AUSSETZER_EIN_AKTUELL | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten ( 0 = nein / 1 = ja) - aktueller Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_AKTUELL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - aktueller Vorgang |
| STAT_LADEENDE_URSACHE_NR_AKTUELL | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - letzter Vorgang |
| STAT_KM_STAND_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_1_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - letzter Vorgang |
| STAT_LADEART_NR_1 | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - letzter Vorgang |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (Standklima/Heizung) ausgewählt (0 = nein / 1 = ja) - letzter Vorgang |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden wurde eingestellt (0 = nein / 1 = ja) - letzter Vorgang |
| STAT_REMOTE_AENDERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Jedliche Änderungen per Remote-Funktion durchgeführt (0 = nein / 1 = ja) - letzter Vorgang |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden (0 = nein / 1 = ja) - letzter Vorgang |
| STAT_EINSTELLUNG_LADESTROMFAKTOR_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeestromfaktor (ABK) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeende (Zeit in min rel. zu Ladestart (stecken)) - letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (mit Fahrzeug Vorkonditionierung) - letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_1_WERT | min | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (ohne Fahrzeug Vorkonditionierung) - letzter Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei der Ladeende - letzter Vorgang |
| STAT_LADEDAUER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktive Ladedauer (ohne evtl. Fahrzeug-Vorkonditionnierung aber mit Speicher-Vorkonditionnierung) - letzter Vorgang |
| STAT_HVB_SOC_LADEENDE_1_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Ladezustand des HV-Speichers (bei Ladeende) - letzter Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_1_WERT | kWh | high | unsigned char | - | - | 0.2 | 1.0 | 0.0 | Entnommene Netzenergie bis Ladeende (ohne Fahrzeug Vorkonditionierung) - letzter Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_1_WERT | kW | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Spitzenlast (Maximalwert der aufgen. Netzleistung)  - letzter Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_1_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzspannung zum Zeitpunkt des MAX-Wertes der Spitznetzleistung - letzter Vorgang |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung wurde durchgeführt (0= nein / 1 = ja) - letzter Vorgang |
| STAT_VORKONDITIONNIERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (wie eingestellt) wurde durchgeführt (0 = nein / 1 = ja) - letzter Vorgang |
| STAT_NETZ_AUSSETZER_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten ( 0 = nein / 1 = ja) - letzter Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - letzter Vorgang |
| STAT_LADEENDE_URSACHE_NR_1 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - vorletzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - vorletzter Vorgang |
| STAT_KM_STAND_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - vorletzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_2_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - vorletzter Vorgang |
| STAT_LADEART_NR_2 | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - vorletzter Vorgang |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (Standklima/Heizung) ausgewählt (0 = nein / 1 = ja) - vorletzter Vorgang |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden wurde eingestellt (0 = nein / 1 = ja) - vorletzter Vorgang |
| STAT_REMOTE_AENDERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Jedliche Änderungen per Remote-Funktion durchgeführt (0 = nein / 1 = ja) - vorletzter Vorgang |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden (0 = nein / 1 = ja) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADESTROMFAKTOR_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeestromfaktor (ABK) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeende (Zeit in min rel. zu Ladestart (stecken)) - vorletzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (mit Fahrzeug Vorkonditionierung) - vorletzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_2_WERT | min | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (ohne Fahrzeug Vorkonditionierung) - vorletzter Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei der Ladeende - vorletzter Vorgang |
| STAT_LADEDAUER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktive Ladedauer (ohne evtl. Fahrzeug-Vorkonditionnierung aber mit Speicher-Vorkonditionnierung) - vorletzter Vorgang |
| STAT_HVB_SOC_LADEENDE_2_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Ladezustand des HV-Speichers (bei Ladeende) - vorletzter Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_2_WERT | kWh | high | unsigned char | - | - | 0.2 | 1.0 | 0.0 | Entnommene Netzenergie bis Ladeende (ohne Fahrzeug Vorkonditionierung) - vorletzter Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_2_WERT | kW | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Spitzenlast (Maximalwert der aufgen. Netzleistung)  - vorletzter Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_2_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzspannung zum Zeitpunkt des MAX-Wertes der Spitznetzleistung - vorletzter Vorgang |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung wurde durchgeführt (0= nein / 1 = ja) - vorletzter Vorgang |
| STAT_VORKONDITIONNIERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (wie eingestellt) wurde durchgeführt (0 = nein / 1 = ja) - vorletzter Vorgang |
| STAT_NETZ_AUSSETZER_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten ( 0 = nein / 1 = ja) - vorletzter Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - vorletzter Vorgang |
| STAT_LADEENDE_URSACHE_NR_2 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - 3.letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - 3.letzter Vorgang |
| STAT_KM_STAND_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - 3.letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_3_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - 3.letzter Vorgang |
| STAT_LADEART_NR_3 | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (Standklima/Heizung) ausgewählt (0 = nein / 1 = ja) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden wurde eingestellt (0 = nein / 1 = ja) - 3.letzter Vorgang |
| STAT_REMOTE_AENDERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Jedliche Änderungen per Remote-Funktion durchgeführt (0 = nein / 1 = ja) - 3.letzter Vorgang |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden (0 = nein / 1 = ja) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_LADESTROMFAKTOR_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeestromfaktor (ABK) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeende (Zeit in min rel. zu Ladestart (stecken)) - 3.letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (mit Fahrzeug Vorkonditionierung) - 3.letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_3_WERT | min | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (ohne Fahrzeug Vorkonditionierung) - 3.letzter Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei der Ladeende - 3.letzter Vorgang |
| STAT_LADEDAUER_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktive Ladedauer (ohne evtl. Fahrzeug-Vorkonditionnierung aber mit Speicher-Vorkonditionnierung) - 3.letzter Vorgang |
| STAT_HVB_SOC_LADEENDE_3_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Ladezustand des HV-Speichers (bei Ladeende) - 3.letzter Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_3_WERT | kWh | high | unsigned char | - | - | 0.2 | 1.0 | 0.0 | Entnommene Netzenergie bis Ladeende (ohne Fahrzeug Vorkonditionierung) - 3.letzter Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_3_WERT | kW | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Spitzenlast (Maximalwert der aufgen. Netzleistung)  - 3.letzter Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_3_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzspannung zum Zeitpunkt des MAX-Wertes der Spitznetzleistung - 3.letzter Vorgang |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung wurde durchgeführt (0= nein / 1 = ja) - 3.letzter Vorgang |
| STAT_VORKONDITIONNIERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (wie eingestellt) wurde durchgeführt (0 = nein / 1 = ja) - 3.letzter Vorgang |
| STAT_NETZ_AUSSETZER_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten ( 0 = nein / 1 = ja) - 3.letzter Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - 3.letzter Vorgang |
| STAT_LADEENDE_URSACHE_NR_3 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - 3.letzter Vorgang |

### RES_0XDEA6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP1_E_MOTOR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | E-Motor Temperatur 1 |
| STAT_TEMP2_E_MOTOR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | E-Motor Temperatur 2 |

### RES_0XDEA7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 0.5 | 1.0 | -5000.0 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | signed int | - | - | 0.5 | 1.0 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | signed int | - | - | 0.5 | 1.0 | 0.0 | SOLL Moment der E-Maschine |
| STAT_ELEKTRISCHE_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_AE_ELEKTRISCHE_BETRIEBSART | - | - | - | aktuelle Betriebsart der E-Maschine |

### RES_0XDEA9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Limitierung durch die kommandierte Leistungsgrenze: 0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Limitierung der Ausgangsleistung wegen Spannungskriterium: 0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Limitierung durch kommandierte Minimalspannung auf HV-Seite:  0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Limitierung wegen Temperaturkriterium: 0=nicht aktiv 1=aktiv |

### RES_0XDEAE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HFK_LADESTECKER_EINGESTECKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einsteckvorgänge Ladestecker |
| STAT_NETZ_ENTNOMMENE_ENERGIE_GESAMT_WERT | kWh | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entnommene Netzenergie gesamt |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn unter 10% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 11% und 20% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 21% und 30% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 31% und 40% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 41% und 50% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 51% und 60% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 61% und 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn über 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende unter 35% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 36% und 50% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 51% und 60% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 61% und 70% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 71% und 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 81% und 90% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende über 90% |
| STAT_HFK_LADEENDE_URSACHE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = unbekannt |
| STAT_HFK_LADEENDE_URSACHE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Ziel erreicht |
| STAT_HFK_LADEENDE_URSACHE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Ladestopp vom Fahrer angefordert |
| STAT_HFK_LADEENDE_URSACHE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Ladestecker abgezogen |
| STAT_HFK_LADEENDE_URSACHE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Netzausfall (auch Schuko-Stecker abgezogen) |
| STAT_HFK_LADEENDE_URSACHE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Fehler im HV-System |
| STAT_HFK_LADEENDE_URSACHE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Fehler der Ladestation |
| STAT_HFK_LADEENDE_URSACHE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Parksperrensignal ausgefallen |
| STAT_HFK_LADEENDE_URSACHE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = keine Parksperre |

### RES_0XDEBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_CY0_5V0_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 5V von CY320_MC0 |
| STAT_SPANNUNG_CY2_5V0_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 5V von CY320_MC2 |
| STAT_SPANNUNG_CY0_3V3_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY320_MC0 |
| STAT_SPANNUNG_CY2_3V3_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY320_MC2 |
| STAT_SPANNUNG_CY0_1V5_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 1,5V von CY320_MC0 |
| STAT_SPANNUNG_CY2_1V5_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 1,5V von CY320_MC2 |
| STAT_SPANNUNG_32V_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Rückmessung der internen 32 V |

### RES_0XDEBF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_DPR | 0/1 | high | unsigned char | - | - | - | - | - | Dualported RAM aktiv 0 = nicht aktiv 1 = aktiv |
| STAT_SYSSTATE_MC0_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des MC0 |
| STAT_SYSSTATE_MC2_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des MC2 |
| - | Bit | high | BITFIELD | - | BF_SYSSTATE_KLEMMEN | - | - | - | Klemmenzustand |

### RES_0XDEDE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEVERFAHREN_NR | 0-n | high | unsigned char | - | TAB_LADEVERFAHREN | - | - | - | Art des Ladetyps |
| STAT_LADESTATUS_NR | 0-n | high | unsigned char | - | TAB_LADESTATUS | - | - | - | Art des Ladestatus |
| STAT_BEGINN_FENSTER_STD_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nur bei AC-Laden: Beginn des günstigen Ladefensters (Stunden) |
| STAT_BEGINN_FENSTER_MIN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nur bei AC-Laden: Beginn des günstigen Ladefensters (Minuten) |
| STAT_ENDE_FENSTER_STD_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nur bei AC-Laden: Ende des günstigen Ladefensters (Stunden) |
| STAT_ENDE_FENSTER_MIN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nur bei AC-Laden: Ende des günstigen Ladefensters (Minuten) |
| STAT_LADEFENSTER1_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_LADEFENSTER_1 | - | - | - | Nur bei AC-Laden, Zwei Zeit Wecker: Auswahl des günstigen Ladefensters |
| STAT_LADEFENSTER2_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_LADEFENSTER_1 | - | - | - | Nur bei AC-Laden, Zwei Zeit Wecker: Auswahl des günstigen Ladefensters |
| STAT_FAKTOR_STROMBEGRENZUNG_NR | 0-n | high | unsigned char | - | TAB_FAKTOR_STROMBEGRENZUNG | - | - | - | Nur bei AC-Laden Rückmeldung der Strombegrenzung |
| STAT_STROMBEGRENZUNG_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_STROMBEGRENZUNG_AUSWAHL | - | - | - | Rückmeldung der AC- Strombegrenzungauswahl Nur bei AC-Laden: |
| STAT_POLY_TIM_1_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des ersten Stützpunktes |
| STAT_POLY_SOC_1_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte:  SOC des ersten Stützpunktes |
| STAT_POLY_TIM_2_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des zweiten Stützpunktes |
| STAT_POLY_SOC_2_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte:  SOC des zweiten Stützpunktes |
| STAT_POLY_TIM_3_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des dritten Stützpunktes |
| STAT_POLY_SOC_3_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte:  SOC des dritten Stützpunktes |
| STAT_POLY_TIM_4_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des vierten Stützpunktes |
| STAT_POLY_SOC_4_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte:  SOC des fünften Stützpunktes |
| STAT_POLY_TIM_5_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des fünften Stützpunktes |
| STAT_POLY_SOC_5_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte:  SOC des fünften Stützpunktes |
| STAT_HV_SOC_IST_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Aktueller SOC der HV-Batterie |
| STAT_LADEN_PROGNOSE_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Ladezeitprognose |
| STAT_LADEN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladespannung (nur bei AC Laden) |
| STAT_LADEN_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladestrom (nur bei AC Laden) |
| STAT_ENERGIEINHALT_IST_WERT | Ws | high | unsigned long | - | - | 3600.0 | 1.0 | 0.0 | Prognostizierte Energieinhalt in Abhängigkeit des Ladezustands und des Bordnetzverbrauches |
| STAT_LSC_TRIGGER_INHALT_NR | 0-n | high | unsigned char | - | TAB_LSC_TRIGGER_INHALT | - | - | - | Status des LSC-Triggers |
| STAT_ENERGIEINHALT_MAX_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher Energieinhalt des Hochvoltspeichers |
| STAT_LADEN_PROGNOSE_REST_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Prognostizierte Restladedauer 0-65531--Wertbereit 65533-Nicht verfügbar 65532-Initialisierung 65534-Fehler 65535-Signal ugültig |
| STAT_LADESTECKER_NR | 0-n | high | unsigned char | - | TAB_AE_LADESTECKER_LSC_LADEN | - | - | - | Current condition charging plug |

### RES_0XDEDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 6 |

### RES_0XDEE0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 6 |

### RES_0XDEED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTR_HIST_1607_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1607 |
| STAT_ANTR_HIST_1608_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1608 |
| STAT_ANTR_HIST_1609_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1609 |
| STAT_ANTR_HIST_1610_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1610 |
| STAT_ANTR_HIST_1611_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1611 |
| STAT_ANTR_HIST_1612_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1612 |
| STAT_ANTR_HIST_3285_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3285 |
| STAT_ANTR_HIST_3286_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3286 |
| STAT_ANTR_HIST_3287_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3287 |
| STAT_ANTR_HIST_3288_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3288 |
| STAT_ANTR_HIST_3289_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3289 |
| STAT_ANTR_HIST_028_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_028 |
| STAT_ANTR_HIST_029_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_029 |
| STAT_ANTR_HIST_030_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_030 |
| STAT_ANTR_HIST_031_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_031 |
| STAT_ANTR_HIST_032_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_032 |
| STAT_ANTR_HIST_033_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_033 |
| STAT_ANTR_HIST_034_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_034 |
| STAT_ANTR_HIST_035_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_035 |
| STAT_ANTR_HIST_036_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_036 |
| STAT_ANTR_HIST_037_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_037 |
| STAT_ANTR_HIST_038_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_038 |
| STAT_ANTR_HIST_3296_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3296 |
| STAT_ANTR_HIST_3297_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3297 |
| STAT_ANTR_HIST_3298_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3298 |
| STAT_ANTR_HIST_3299_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3299 |
| STAT_ANTR_HIST_32100_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32100 |
| STAT_ANTR_HIST_32101_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32101 |
| STAT_ANTR_HIST_32102_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32102 |
| STAT_ANTR_HIST_32103_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32103 |
| STAT_ANTR_HIST_32104_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32104 |
| STAT_ANTR_HIST_32105_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32105 |
| STAT_ANTR_HIST_32106_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32106 |
| STAT_ANTR_HIST_32107_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32107 |
| STAT_ANTR_HIST_32108_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32108 |
| STAT_ANTR_HIST_32109_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32109 |
| STAT_ANTR_HIST_32110_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32110 |
| STAT_ANTR_HIST_32111_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32111 |
| STAT_ANTR_HIST_32112_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32112 |
| STAT_ANTR_HIST_32113_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32113 |
| STAT_ANTR_HIST_32114_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32114 |
| STAT_ANTR_HIST_32115_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32115 |
| STAT_ANTR_HIST_32116_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32116 |
| STAT_ANTR_HIST_32117_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32117 |
| STAT_ANTR_HIST_32118_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32118 |
| STAT_ANTR_HIST_32119_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32119 |
| STAT_ANTR_HIST_32120_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32120 |
| STAT_ANTR_HIST_32121_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32121 |
| STAT_ANTR_HIST_32122_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32122 |
| STAT_ANTR_HIST_1601_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1601 |
| STAT_ANTR_HIST_1602_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1602 |
| STAT_ANTR_HIST_1603_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1603 |
| STAT_ANTR_HIST_1604_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1604 |
| STAT_ANTR_HIST_1605_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1605 |
| STAT_ANTR_HIST_1606_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1606 |
| STAT_ANTR_HIST_3214_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3214 |
| STAT_ANTR_HIST_3215_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3215 |
| STAT_ANTR_HIST_3216_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3216 |
| STAT_ANTR_HIST_3217_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3217 |
| STAT_ANTR_HIST_3218_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3218 |
| STAT_ANTR_HIST_3219_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3219 |
| STAT_ANTR_HIST_3220_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3220 |
| STAT_ANTR_HIST_3221_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3221 |
| STAT_ANTR_HIST_3290_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3290 |

### RES_0XDEEF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTR_HIST_3238_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3238 |
| STAT_ANTR_HIST_3239_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3239 |
| STAT_ANTR_HIST_3240_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3240 |
| STAT_ANTR_HIST_3241_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3241 |
| STAT_ANTR_HIST_3242_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3242 |
| STAT_ANTR_HIST_3243_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3243 |
| STAT_ANTR_HIST_3244_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3244 |
| STAT_ANTR_HIST_3245_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3245 |
| STAT_ANTR_HIST_3246_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3246 |
| STAT_ANTR_HIST_3247_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3247 |
| STAT_ANTR_HIST_3248_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3248 |
| STAT_ANTR_HIST_3249_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3249 |
| STAT_ANTR_HIST_3250_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3250 |
| STAT_ANTR_HIST_3251_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3251 |
| STAT_ANTR_HIST_3252_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3252 |
| STAT_ANTR_HIST_3253_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3253 |
| STAT_ANTR_HIST_3254_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3254 |
| STAT_ANTR_HIST_3255_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3255 |
| STAT_ANTR_HIST_3256_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3256 |
| STAT_ANTR_HIST_3257_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3257 |
| STAT_ANTR_HIST_3258_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3258 |
| STAT_ANTR_HIST_3259_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3259 |
| STAT_ANTR_HIST_3260_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3260 |
| STAT_ANTR_HIST_3261_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3261 |
| STAT_ANTR_HIST_3262_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3262 |
| STAT_ANTR_HIST_3263_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3263 |
| STAT_ANTR_HIST_3264_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3264 |
| STAT_ANTR_HIST_3265_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3265 |
| STAT_ANTR_HIST_3266_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3266 |
| STAT_ANTR_HIST_3267_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3267 |
| STAT_ANTR_HIST_3268_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3268 |
| STAT_ANTR_HIST_3269_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3269 |
| STAT_ANTR_HIST_3270_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3270 |
| STAT_ANTR_HIST_3271_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3271 |
| STAT_ANTR_HIST_3272_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3272 |
| STAT_ANTR_HIST_3273_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3273 |
| STAT_ANTR_HIST_3274_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3274 |
| STAT_ANTR_HIST_3275_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3275 |
| STAT_ANTR_HIST_3276_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3276 |
| STAT_ANTR_HIST_3277_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3277 |
| STAT_ANTR_HIST_3222_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3222 |
| STAT_ANTR_HIST_3223_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3223 |
| STAT_ANTR_HIST_3224_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3224 |
| STAT_ANTR_HIST_3225_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3225 |
| STAT_ANTR_HIST_3226_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3226 |
| STAT_ANTR_HIST_3227_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3227 |
| STAT_ANTR_HIST_3228_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3228 |
| STAT_ANTR_HIST_3229_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3229 |
| STAT_ANTR_HIST_3230_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3230 |
| STAT_ANTR_HIST_3231_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3231 |
| STAT_ANTR_HIST_3232_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3232 |
| STAT_ANTR_HIST_3233_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3233 |
| STAT_ANTR_HIST_3234_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3234 |
| STAT_ANTR_HIST_3235_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3235 |
| STAT_ANTR_HIST_3236_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3236 |
| STAT_ANTR_HIST_3237_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3237 |
| STAT_ANTR_HIST_32130_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32130 |
| STAT_ANTR_HIST_32131_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32131 |
| STAT_ANTR_HIST_32123_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32123 |
| STAT_ANTR_HIST_32124_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32124 |
| STAT_ANTR_HIST_32125_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32125 |
| STAT_ANTR_HIST_32126_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32126 |
| STAT_ANTR_HIST_32127_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32127 |
| STAT_ANTR_HIST_32128_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32128 |
| STAT_ANTR_HIST_32129_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32129 |

### RES_0XDF1E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INVERTER_IGBT_TEMP_HIST_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 1 Klasse (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_02_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 2 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_03_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 3 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_04_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 4 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 5 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_06_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 6 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_07_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 7 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_08_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 8 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_09_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 9 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 10 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 11 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 12 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 13 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 14 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 15 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 16 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 17 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_IGBT_TEMP_HIST_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten IGBT Temperatur-Hübe um 18 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 1 Klasse (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_02_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 2 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_03_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 3 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_04_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 4 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 5 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_06_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 6 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_07_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 7 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_08_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 8 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_09_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 9 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 10 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 11 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 12 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 13 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 14 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 15 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 16 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 17 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_DIODE_TEMP_HIST_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rainflow-Zählung der AE-internen berechneten Dioden Temperatur-Hübe um 18 Klassen (Klassenbreite 5°C) |
| STAT_INVERTER_TEMP_PASSIV_HIST_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_09_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [kleiner -10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [-10 bis 0] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_31_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_32_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [0 bis 10] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_34_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_35_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_36_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_37_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_38_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_39_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_41_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_42_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_43_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_44_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [10 bis 20] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_45_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_46_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_47_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_48_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_49_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_50_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_51_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_52_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_53_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_54_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_55_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [20 bis 30] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_56_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_57_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_58_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_59_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_61_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_62_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_63_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_64_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_66_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [30 bis 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_67_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [0 bis 10] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_68_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [10 bis 20] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_69_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [20 bis 30] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [30 bis 40] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_71_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [40 bis 50] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_72_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [50 bis 60] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_73_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [60 bis 70] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [70 bis 80] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_75_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [80 bis 90] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_76_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [90 bis 100] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |
| STAT_INVERTER_TEMP_PASSIV_HIST_77_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Temperaturhübe des Kühlmittels [grösser 100] °C von Starttemperatur [grösser 40] °C bei Fahrtbeginn bis Maximaltemperaturwert des aktuellen Fahrzyklus |

### RES_0XDF49_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNG_HIST_INT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 1 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 2 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 3 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 4 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 5 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 6 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 1 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 2 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 3 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 4 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 5 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 6 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 1 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 2 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 3 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 4 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 5 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 6 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 1 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 2 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 3 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 4 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 5 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 6 vom externen Ladegerät |

### RES_0XDF4D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INVERTER_IGBT_LEBENSZEIT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch IGBT |
| STAT_INVERTER_IGBT_LEBENSZEIT_KONST_KUEHLUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch IGBT für konstante Kühlmitteltemperatur von 70°C |
| STAT_INVERTER_DIODE_LEBENSZEIT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch Diode |
| STAT_INVERTER_DIODE_LEBENSZEIT_KONST_KUEHLUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch Diode für konstante Kühlmitteltemperatur von 70°C |
| STAT_INVERTER_RESET_LEBENSZEIT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der aufgetretenen Überläufe des Residuums |

### RES_0XDF50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_WERKLDMODUS_NR | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_SOC_LADEMODUS_WERK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### RES_0XDF58_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAE_DTC1_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 1 |
| STAT_SAE_DTC_NUM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 1 |
| STAT_SAE_DTC_DEN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 1 |
| STAT_SAE_DTC2_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 2 |
| STAT_SAE_DTC_NUM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 2 |
| STAT_SAE_DTC_DEN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 2 |
| STAT_SAE_DTC3_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 3 |
| STAT_SAE_DTC_NUM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 3 |
| STAT_SAE_DTC_DEN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 3 |
| STAT_SAE_DTC4_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 4 |
| STAT_SAE_DTC_NUM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 4 |
| STAT_SAE_DTC_DEN4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 4 |

### RES_0XDF59_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAE_DTC1_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 1 |
| STAT_SAE_DTC_NUM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 1 |
| STAT_SAE_DTC_DEN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 1 |
| STAT_SAE_DTC2_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 2 |
| STAT_SAE_DTC_NUM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 2 |
| STAT_SAE_DTC_DEN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 2 |
| STAT_SAE_DTC3_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 3 |
| STAT_SAE_DTC_NUM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 3 |
| STAT_SAE_DTC_DEN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 3 |
| STAT_SAE_DTC4_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 4 |
| STAT_SAE_DTC_NUM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 4 |
| STAT_SAE_DTC_DEN4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 4 |
| STAT_SAE_DTC5_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 5 |
| STAT_SAE_DTC_NUM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 5 |
| STAT_SAE_DTC_DEN5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 5 |
| STAT_SAE_DTC6_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 6 |
| STAT_SAE_DTC_NUM6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 6 |
| STAT_SAE_DTC_DEN6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 6 |
| STAT_SAE_DTC7_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 7 |
| STAT_SAE_DTC_NUM7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 7 |
| STAT_SAE_DTC_DEN7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 7 |
| STAT_SAE_DTC8_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 8 |
| STAT_SAE_DTC_NUM8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 8 |
| STAT_SAE_DTC_DEN8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 8 |

### RES_0XDF5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAE_DTC1_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 1 |
| STAT_SAE_DTC_NUM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 1 |
| STAT_SAE_DTC_DEN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 1 |
| STAT_SAE_DTC2_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 2 |
| STAT_SAE_DTC_NUM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 2 |
| STAT_SAE_DTC_DEN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 2 |
| STAT_SAE_DTC3_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 3 |
| STAT_SAE_DTC_NUM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 3 |
| STAT_SAE_DTC_DEN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 3 |
| STAT_SAE_DTC4_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 4 |
| STAT_SAE_DTC_NUM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 4 |
| STAT_SAE_DTC_DEN4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 4 |
| STAT_SAE_DTC5_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 5 |
| STAT_SAE_DTC_NUM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 5 |
| STAT_SAE_DTC_DEN5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 5 |
| STAT_SAE_DTC6_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 6 |
| STAT_SAE_DTC_NUM6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 6 |
| STAT_SAE_DTC_DEN6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 6 |
| STAT_SAE_DTC7_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 7 |
| STAT_SAE_DTC_NUM7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 7 |
| STAT_SAE_DTC_DEN7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 7 |
| STAT_SAE_DTC8_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 8 |
| STAT_SAE_DTC_NUM8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 8 |
| STAT_SAE_DTC_DEN8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 8 |
| STAT_SAE_DTC9_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 9 |
| STAT_SAE_DTC_NUM9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 9 |
| STAT_SAE_DTC_DEN9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 9 |
| STAT_SAE_DTC10_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 10 |
| STAT_SAE_DTC_NUM10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 10 |
| STAT_SAE_DTC_DEN10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 10 |
| STAT_SAE_DTC11_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 11 |
| STAT_SAE_DTC_NUM11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 11 |
| STAT_SAE_DTC_DEN11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 11 |
| STAT_SAE_DTC12_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 12 |
| STAT_SAE_DTC_NUM12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 12 |
| STAT_SAE_DTC_DEN12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 12 |
| STAT_SAE_DTC13_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 13 |
| STAT_SAE_DTC_NUM13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 13 |
| STAT_SAE_DTC_DEN13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 13 |
| STAT_SAE_DTC14_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 14 |
| STAT_SAE_DTC_NUM14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 14 |
| STAT_SAE_DTC_DEN14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 14 |
| STAT_SAE_DTC15_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 15 |
| STAT_SAE_DTC_NUM15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 15 |
| STAT_SAE_DTC_DEN15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 15 |
| STAT_SAE_DTC16_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 16 |
| STAT_SAE_DTC_NUM16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 16 |
| STAT_SAE_DTC_DEN16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 16 |
| STAT_SAE_DTC17_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 17 |
| STAT_SAE_DTC_NUM17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 17 |
| STAT_SAE_DTC_DEN17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 17 |
| STAT_SAE_DTC18_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 18 |
| STAT_SAE_DTC_NUM18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 18 |
| STAT_SAE_DTC_DEN18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 18 |
| STAT_SAE_DTC19_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 19 |
| STAT_SAE_DTC_NUM19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 19 |
| STAT_SAE_DTC_DEN19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 19 |
| STAT_SAE_DTC20_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 20 |
| STAT_SAE_DTC_NUM20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 20 |
| STAT_SAE_DTC_DEN20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 20 |
| STAT_SAE_DTC21_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 21 |
| STAT_SAE_DTC_NUM21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 21 |
| STAT_SAE_DTC_DEN21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 21 |
| STAT_SAE_DTC22_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 22 |
| STAT_SAE_DTC_NUM22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 22 |
| STAT_SAE_DTC_DEN22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 22 |
| STAT_SAE_DTC23_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 23 |
| STAT_SAE_DTC_NUM23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 23 |
| STAT_SAE_DTC_DEN23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 23 |
| STAT_SAE_DTC24_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 24 |
| STAT_SAE_DTC_NUM24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 24 |
| STAT_SAE_DTC_DEN24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 24 |

### RES_0XDFB5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_LLCHVFIL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 1 |
| STAT_TEMP_LLCHVFIL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 2 |
| STAT_TEMP_LLCHVFIL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 3 |
| STAT_TEMP_LLCHVFIL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 4 |
| STAT_TEMP_LLCHVFIL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 5 |
| STAT_TEMP_LLCHVFIL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 6 |
| STAT_TEMP_LLCTRAFIL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 1 |
| STAT_TEMP_LLCTRAFIL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 2 |
| STAT_TEMP_LLCTRAFIL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 3 |
| STAT_TEMP_LLCTRAFIL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 4 |
| STAT_TEMP_LLCTRAFIL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 5 |
| STAT_TEMP_LLCTRAFIL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 6 |
| STAT_TEMP_LLCZKFIL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 1 |
| STAT_TEMP_LLCZKFIL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 2 |
| STAT_TEMP_LLCZKFIL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 3 |
| STAT_TEMP_LLCZKFIL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 4 |
| STAT_TEMP_LLCZKFIL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 5 |
| STAT_TEMP_LLCZKFIL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 6 |

### RES_0XDFD0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHZAHL_ST_01_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehzahlachse |
| STAT_EM_DREHZAHL_ST_02_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehzahlachse |
| STAT_EM_DREHZAHL_ST_03_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehzahlachse |
| STAT_EM_DREHZAHL_ST_04_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehzahlachse |
| STAT_EM_DREHZAHL_ST_05_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehzahlachse |
| STAT_EM_DREHMOMENT_ST_01_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_02_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_03_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_04_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_05_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_06_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_07_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_08_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_09_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_10_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_11_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 von STEUERN_LAST_HISTOGRAMM_EMASCHINE Drehmomentachse |
| STAT_EM_DREHMOMENT_VORZEICHENWECHSEL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl an Vorzeichenwechsel des Drehmoments der Traktions E-Maschine |

### RES_0XDFD2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DAUER_MAGNET_TEMP_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen unterhalb von Stützstelle 1 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen oberhalb Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Magnettemperaturen |
| STAT_EM_DAUER_TEMP_WK_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen unterhalb der Stützstelle 1 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 9 und Stützstelle 10 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen oberhalb der Stützstelle 10 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_10_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Wickelkopf Temperaturen |
| STAT_EM_VERBAND_BLECH_GEHAUSE_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Kühlmitteltemperaturstützstelle 1  und zwischen Kühlmittelhubstützstelle 1 und Kühlmittelhubstützstelle 2  |
| STAT_EM_VERBAND_BLECH_GEHAUSE_02_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_03_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_04_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_06_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_07_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_08_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_09_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_33_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_34_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_35_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_36_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_37_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_38_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine  oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_39_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_40_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine  oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_41_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine  oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_42_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_10_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_11_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_12_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |

### RES_0XDFD5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_01_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | 1. Speicherblock 128 Byte NVRAM Data |
| STAT_NVRAM_BLOCK_02_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | 2. Speicherblock 128 Byte NVRAM Data |

### RES_0XE5FE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAR_OPMO_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll Betriebsart von HVPM an Ladekoordinator |
| STAT_AVL_OPMOCHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist Betriebsart von LDK an HVPM |
| STAT_TAR_OPMO_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll Betriebsart von LDK an internen Lader |
| STAT_AVL_OPMO_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist Betriebsart von internem Lader an LDK |
| STAT_TAR_OPMO_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll Betriebsart von LDK an externen Lader |
| STAT_AVL_OPMO_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist Betriebsart von externem Lader an LDK |
| STAT_TAR_CHG_MOD_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Lademodus des externer Laders (1- oder mehrphasig) |
| STAT_AVL_CHG_MOD_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Lademodus der Komfort Ladeelektronik (1- oder mehrphasig) |
| STAT_TAR_PWR_CHGNG_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sollleistung von HVPM an LDK |
| STAT_AVL_PWR_CHGNG_WERT | W | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Istleistung von LDK an HVPM |
| STAT_TAR_PWR_INTLE_WERT | W | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Sollleistung von LDK an interen Lader |
| STAT_AVL_PWR_INTLE_WERT | W | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ist-HV-Leistung des internen Laders |
| STAT_TAR_PWR_CF_CHGE_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollleistung von LDK an exteren Lader |
| STAT_AVL_PWR_CF_CHGE_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist-HV-leistung von externem Lader |
| STAT_SPEC_I_MAX_ALTC_CHGE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | HVPM-Vorgabe des maximal zulässigen AC-Leiterstromes (Effektivwert) für alle verfügbaren Netzphasen |
| STAT_SPEC_I_MAX_ALTC_CF_CHGE_WERT | A | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Vorgabe des maximal zulässigen AC-Leiterstromes (Effektivwert) für alle verfügbaren Netzphasen - Externer Lader. |
| STAT_SPEC_I_MAX_DC_CHGE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | HVPM-Vorgabe der maximal zulässigen DC-HV-Stromobergrenze |
| STAT_AVL_I_CHGE_WERT | A | high | signed int | - | - | 0.1 | 1.0 | -204.7 | Information über den aktuell von der LDK abgegebenen DC-HV-Strom |
| STAT_SPEC_I_MAX_DC_INTLE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Stromobergrenze - Interner Lader. |
| STAT_AVL_I_INTLE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Information über den aktuell von der KLE abgegebenen DC-HV-Strom - Interner Lader |
| STAT_SPEC_I_MAX_DC_CF_CHGE_WERT | A | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Stromobergrenze - Externer Lader. |
| STAT_AVL_I_CF_CHGE_WERT | A | high | signed int | - | - | 0.1 | 1.0 | -204.7 | Information über den aktuell von der KLE abgegebenen DC-HV-Strom - Externer Lader |
| STAT_SPEC_U_MAX_CHG_CHGE_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | HVPM-Vorgabe der maximal zulässigen DC-HV-Spannungsobergrenze der Ladeelektronik. |
| STAT_AVL_U_CHGE_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | von Ladegeraeten gemessene HV-Spannung (Max aus internem und externem Lader) |
| STAT_SPEC_U_MAX_INTLE_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Spannungsgrenze - Interner Lader. |
| STAT_AVL_U_INTLE_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ist-HV-Spannung von internem Lader |
| STAT_SPEC_U_MAX_CF_CHGE_WERT | V | high | signed int | - | - | 0.25 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Spannungsgrenze - Externer Lader. |
| STAT_AVL_U_CF_CHGE_WERT | V | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Ist-HV-Spannung von externem Lader |
| STAT_AVL_U_CHGE_ALTC_WR_1_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geglätteter und gefilterter AC-Spannungseffektiv-Istwert zwischen Leiter 1 und Nullleiter (Internes Ladegeraet) |
| STAT_AVL_U_1_CF_CHGE_ALTC_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geglätteter und gefilterter AC-Spannungseffektiv-Istwert zwischen Leiter 1 und Nullleiter (externes Ladegeraet) |
| STAT_AVL_U_2_CF_CHGE_ALTC_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geglätteter und gefilterter AC-Spannungseffektiv-Istwert zwischen Leiter 2 und Nullleiter (externes Ladegeraet) |
| STAT_AVL_TEMP_CHGE_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | -48.0 | Aktuelle Temperatur der Ladeelektronik. |
| STAT_AVL_TEMP_INTLE_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Temperatur des internen Laders. |
| STAT_AVL_TEMP_CF_CHGE_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | -48.0 | Aktuelle Temperatur des externenLaders. |
| STAT_PWR_HV_STAT_AVLB_DER_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Derating-Leistung der Ladeelektronik |
| STAT_PWR_HV_STAT_AVLB_INTLE_DER_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Derating-Leistung des internen Laders |
| STAT_PWR_HV_STAT_AVLB_CF_CHGE_DER_WERT | W | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Aktuelle Derating-Leistungsobergrenze der ExtLe. |
| STAT_REAS_FAILSAFE_CHGNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Information über den Auslöser für den Zustand Failsafe |
| STAT_REAS_FAILSAFE_INTLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Information über den Auslöser für den Zustand Failsafe des internen Laders |
| STAT_REAS_CON_VRFD_CF_CHGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Information über den Auslöser für den Zustand Failsafe im externen Lader. |
| STAT_REAS_DER_CHGNG_WERT | - | high | unsigned char | - | - | - | - | - | Information über die Deratingursache der Ladeelektronik |
| STAT_REAS_DER_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über die Deratingursache des internen Laders |
| STAT_REAS_DER_CF_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über die Deratingursache des externen Laders |
| STAT_ST_ERR_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über Fehlerzustände der Ladeelektronik |
| STAT_ST_ERR_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über Fehlerzustände des internen Laders |
| STAT_ST_ERR_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über Fehlerzustände des externer Laders |
| STAT_FREQWR_CHGNG_WERT | Hz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequenz AC-Netz der Ladeelektronik |
| STAT_FREQWR_INTLE_WERT | Hz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequenz AC-Netz des internen Laders |
| STAT_FREQWR_1_CF_CHGE_ALTC_WERT | Hz | high | unsigned long | - | - | 0.25 | 1.0 | 0.0 | Geglättete und gefilterte AC-Netzfrequenz zwischen Leiter 1 und Nulleiter des externen Laders. |
| STAT_FREQWR_2_CF_CHGE_ALTC_WERT | Hz | high | unsigned long | - | - | 0.25 | 1.0 | 0.0 | Geglättete und gefilterte AC-Netzfrequenz zwischen Leiter 2 und Nulleiter des externen Laders. |
| STAT_AVL_EFFY_CHGNG_CYC_WERT | % | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Effizienz der Ladeelektronik |
| STAT_AVL_EFFY_INTLE_CYC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Effizienz des internen Laders |
| STAT_AVL_EFFY_CF_CHGNG_CYC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Effizienz des externen Laders |
| STAT_TAR_CHGNG_TYP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorgabe-Ladetyp durch HVPM (konduktiv, induktiv) |
| STAT_AVL_CHGNG_TYP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Ladetyp Rückmeldung durch LDK (konduktiv, induktiv) |

### RES_0XE5FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVL_CUTIL_DCDC_CNV_WERT | % | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslastung DCDC |
| STAT_AVL_I_HV_DCDC_WERT | A | high | signed long | - | - | 0.1 | 1.0 | 0.0 | Momentaner HV-Strom des DC/DC-Wandlers |
| STAT_AVL_I_LV_DCDC_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC Wandler: IST-Strom LV-Seite am B+ Bolzen |
| STAT_AVL_OPMO_DCDC_CNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Betriebsart des DCDC-Wandlers |
| STAT_AVL_U_DCDC_CNV_HV_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_AVL_U_LV_DCDC_CNV_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | DCDC Wandler: IST-Spannung LV-Seite am B+ Bolzen |
| STAT_SPEC_PWR_DCDC_CNV_MAX_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kommandierte maximale HV-Leistung |
| STAT_ST_DCDC_CNV_DIAG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Status welche Stromgrenze/welches Derating des DCDC-Wandlers aktiv ist |
| STAT_ST_ERR_DCDC_CNV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktiven/inaktiven Fehler des DC/DC Wandlers - bitcodiert |
| STAT_TAR_OPMO_DCDC_CNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Betriebsart des DC/DC-Wandlers: 1: Standby 2: Buck 5: AC-Notladen |
| STAT_TAR_U_LV_DCDC_CNV_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Soll-LV-Spannung des DCDC-Wandlers im Buck-Betrieb (Maximaler Wert) |
| STAT_U_DCDC_CNV_HV_MIN_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimal zulässige HV-Spannungsgrenze |
| STAT_V_B_DCDC_HI_ENABLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DCDC-enabled-Signal (HW-Signal zum aktivieren der DCDC-HW) |
| STAT_V_E_DCDC_BTS_STATUS_MC6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status der Bauteilschutzdiagnosen auf dem MC6 (PIC) - bitcodiert |
| STAT_V_E_DCDC_CTRL_STATUS_MC6_PKR2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status des DC/DC-Controllers (von PIC) - bitcodiert (nur PKR2!) |
| STAT_V_E_DCDC_HI_ST_OUT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Ursache für die Begrenzungsgrößen des DC/DC-Wandlers. |
| STAT_V_E_DCDC_MC0_CTRL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Status und Steuerungsbits für den DCDC: Bit 0:   Freigabesignal (bei 1) für den Frequenzmodulation-Betrieb im DCDC Bit 1:   KL15-Status Bit 2: Status ELUP Anlauf (1: aktiv) (Bit 2 - nur für PKR2!) |
| STAT_V_H_SPI_DCDC_0_SPI_DATA_E_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status SPI-Kommunikation aus Sicht von MC0 |
| STAT_V_H_SPI_DCDC_6_SPI_DATA_E_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status SPI-Kommunikation aus Sicht von MC6 |
| STAT_V_I_DCDC_HV_MC6_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | HV-Strom |
| STAT_V_I_DCDC_TRA1_MC6_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Transformator Strom |
| STAT_V_I_DCDC_TRA_FIL_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Gefilterter Transformator Strom |
| STAT_V_S_DCDC_PWM_HTS1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einschaltdauer Tiefsetzsteller 1 (nur für non-PKR2 Software!)  Gegentaktwandler Phasenverschiebung zwischen HSS1 und HSS2 (nur PKR2!) |
| STAT_V_S_DCDC_PWM_HTS2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einschaltzeit Tiefsetzsteller 2 (nur für non-PKR2 Software!)  Einschaltzeit Gleichrichter (nur PKR2!) |
| STAT_V_S_DCDC_SW_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DCDC SW-Version |
| STAT_V_T_DCDC_BO_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperatur DCDC Board |
| STAT_V_T_DCDC_GR_MC6_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperatur Gleichrichter |
| STAT_V_T_DCDC_GTW_MC6_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperatur Gegentaktwandler |
| STAT_V_U_DCDC_GT_MC6_PKR2_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gatetreiber-Versorgungsspannung (nur PKR2!) |
| STAT_V_U_DCDC_LV_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | LV Ist-Spannung |
| STAT_V_U_DCDC_LV_CAL_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Rohsignal LV Spannungsmessung DCDC Wandler |
| STAT_V_U_DCDC_LV_SOLL_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | LV-Soll-Spannung-Vorgabe |
| STAT_V_I_DCDC_TS1_MC6_RUKO_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Tiefsetzsteller Phase1 Strom (nur für non-PKR2 Software!) |
| STAT_V_I_DCDC_TS2_MC6_RUKO_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Tiefsetzsteller Phase 2 Strom (nur für non-PKR2 Software!) |
| STAT_V_T_DCDC_TS_MC6_RUKO_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Tiefsetzsteller Temperatur (nur für non-PKR2 Software!) |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERARBEITUNGSSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_VERARBEITUNGSSTATUS | - | - | - | Aktueller Zustand der Verarbeitung |
| STAT_ZAEHLER_EBF_MC0_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC0, Anzahl der detektierte Einzel-Bit-Fehler |
| STAT_ZAEHLER_DBF_MC0_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC0, Anzahl der detektierte Doppel-Bit-Fehler |
| STAT_ZAEHLER_EBF_MC2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC2, Anzahl der detektierte Einzel-Bit-Fehler |
| STAT_ZAEHLER_DBF_MC2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC2, Anzahl der detektierte Doppel-Bit-Fehler |

### RES_0XF010_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GAIN_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_OFFSET_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_EXPONENT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 100000.0 | 0.0 | Zusätzliche Skalierung |

### RES_0XF012_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRM_ISR_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Protectionmanager: Status der ISR |
| STAT_HVSM_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Status Mc0 |
| STAT_HVSM_AKKUM_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Akkum. Status MC0 |
| STAT_HVSM_MC2_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Status Mc2 |
| STAT_HVSM_AKKUM_MC2_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Akkum. Status MC2 |
| STAT_FUSI_MC2_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | FUSI: UWB MC2 |
| STAT_FUSI_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | FUSI: UWB MC0 |
| STAT_SSD_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | SSD: Status vom mc0 |
| STAT_ZEIT_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Zeitstempel in hex |
| STAT_KILOMETERSTAND_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_FRM_WHY_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | FRM: Why-Wort (welcher DTC war verantwortlich für den AKS) |
| STAT_FRM_EM2_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | FRM: Statusbits (Fehler prio) |
| STAT_POM_1MS_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Protectionmanager: Status der 1ms |
| STAT_POM_10MS_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Protectionmanager: Status der 10ms |
| STAT_ERR_MOT_TRCT_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | St Error Statuswort der E-Maschine |
| STAT_BAM_STATUS_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Status Betriebsartenmanager |
| STAT_CPLD_INFO_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | CPLD: Info |
| STAT_ERR_UPDATE_IN_PROGRESS_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Laufzeit: Update-In-Progress Fehler |

### RES_0XF050_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS | - | - | + | 0-n | high | signed char | - | TAB_AKTIV | - | - | - | Status Freilauf: 0=inaktiv; 1=aktiv |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| STATUS_CALCVN | 0x2541 | - | Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. (OBD-Umfänge)   Byte-Layout: 20 Byte lang 00-15 = STAT_CALID_WERT 16-19 = STAT_CVN_EINH als Hex  unit32 im Intel Format | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2541_D |
| AE_SN_SETZEN | 0x400C | - | Seriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| AE_HWCAL_SETZEN | 0x400D | - | Hardware Kalibrierungsdaten der AE setzen Es kann nicht die Seriennummer gesetz werden (eigener Job _steuern_sn_setzen)!!! | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D_D | - |
| AE_HWCAL_FLASHEN | 0x400E | - | Schreibt die HWCALs eines bestimmten Blocks ins Flash | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400E_D | - |
| AE_HWCAL_MODE | 0x400F | - | SG in den HWCAL Flash-Mode bringen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400F_D | - |
| STEUERN_START_LADEN | 0xADC0 | - | Ladestart anfordern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC0_R | - |
| STEUERN_STOP_LADEN | 0xADC1 | - | Ladestop anfordern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC1_R | - |
| REX_ON_OFF | 0xADC4 | - | Ein-/Ausschalten des Range Extender Verbrennungsmotor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC4_R | - |
| AE_EWP | 0xADC9 | - | Ansteuern und Auslesen der elektrischen Wasserpumpe (Ansteuerung nur möglich bei AE Temperatur unter Schwelle, house keeping nicht aktiv, EWP nicht abgeschaltet und manuelle Drehzahl deaktivert) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC9_R | RES_0xADC9_R |
| LAST_HISTOGRAMM_EMASCHINE | 0xADEB | - | Auslesen Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADEB_R | RES_0xADEB_R |
| LEISTUNGSMESSUNG_PHEV | 0xADED | - | Setzen/Beenden und Auslesen des Modus Leisungsmessung für PHEVs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADED_R | RES_0xADED_R |
| EME_ROTORLAGESENSOR_ANLERNEN | 0xADF0 | - | Anlernen Rotorlagesensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF0_R |
| EME_DCDC_WANDLER | 0xADF1 | - | Steuern oder Auslesen des Status vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF1_R | RES_0xADF1_R |
| EME_HV_SYSTEM_ON_OFF | 0xADF2 | - | HV-System hoch-/runterfahren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF2_R | RES_0xADF2_R |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4_R | RES_0xADF4_R |
| AE_DCDC_HISTOGRAMM | 0xADF9 | - | Lesen des angeforderten Histogramm des DCDC-Wandlers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF9_R | RES_0xADF9_R |
| WERKSMODUS_PHEV | 0xADFB | - | Aktivieren/Deaktivieren des Werksmodus PHEV sowie Auslesen Status Werksmodus PHEV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFB_R | RES_0xADFB_R |
| LADEHISTORIE_SATZ_LESEN | 0xADFC | - | Liest die Sätze der Ladehistorie aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFC_R | RES_0xADFC_R |
| KLASSIERUNG_ZUG_SCHUB | 0xADFE | - | Aktuelle Daten der Klassierung Zug/Schub-LW auslesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFE_R | RES_0xADFE_R |
| INVERTER_CZK_LIFETIME_HISTOGRAMM | 0xAE04 | - | Abtastung des effektiven Phasenstroms im 100ms-Raster. Bildung des 10s Maximalwertes (aus 100 Stromwerten). Einordnung in Stromklassen nach Häufigkeit. Zusätzliche Zuordnung der DC-Spannug und Kühlmitteltemperatur bei diesem Maximalstromwert. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE04_R | RES_0xAE04_R |
| LADEGERAET_HISTOGRAMM_LESEN | 0xAF42 | - | Histogramme des Ladegeräts auslesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAF42_R | RES_0xAF42_R |
| EME_DCDC_LV | 0xDDF6 | - | Spannung / Strom DCDC (12V Bordnetz) am B+ Bolzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF6_D |
| EME_HVPM_DCDC_ANSTEUERUNG | 0xDE00 | - | Rückgabewerte vom HVPM für DCDC Ansteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE00_D |
| EME_HVPM_HV_SYSTEM_ON_OFF | 0xDE02 | - | Hochvoltsystem An / Aus (HVPM 2013) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE02_D |
| EME_HVPM_ENERGIEBORDNETZ_2 | 0xDE04 | - | Anzahl der Herstellung von Fahrbereitschaft im SOC Bereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE04_D |
| EME_HVPM_PKOR | 0xDE06 | - | HVPM Leistungskoordinator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE06_D |
| EME_HVPM_INFOSPEICHER_MSA_LOESCHEN | 0xDE07 | - | Alle Infospeicher aus Diagnosejob STATUS_HVPM_MSA werden auf Null gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE07_D | - |
| EME_HVPM_INFOSPEICHER_PKOR_LOESCHEN | 0xDE08 | - | Alle Infospeicher des Diagnosejobs STATUS_HVPM_EKMV werden auf Null gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE08_D | - |
| EME_HVPM_INFOSPEICHER_STRZLR_LOESCHEN | 0xDE09 | - | Löschen des Infospeicher HSPM (STRZL) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE09_D | - |
| EME_HVPM_INFOSPEICHER_SPMON_LOESCHEN | 0xDE0A | - | Löschen des Infospeichers HVPMP (SPMON) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE0A_D | - |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | V_e_HvilError | High | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ELUP | 0xDE19 | - | Anzahl der Bremsbetätigungen, Laufzeit und Anläufe der ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE19_D | RES_0xDE19_D |
| EME_HVPM_DCDC_ALS | 0xDE1C | - | HVPM DCDC ALS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE1C_D |
| EME_SZE_ZSEBATTERIE | 0xDE1E | - | Ergebnisse der Speicherzustandserkennung der ZSE-Batterie auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE1E_D |
| EME_TAUSCH_ZSEBATT_REGISTRIEREN | 0xDE1F | - | Tausch der ZSE-Batterie registrieren: 0 = keine Anforderung; 1 = ZSE-Batterie Tausch registieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE1F_D | - |
| EME_ZSEBATT_SZEWERTE_LOESCHEN | 0xDE20 | - | Alle Histogramme, Zähler, etc. der ZSE-Batterie zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE20_D | - |
| EME_KAELTEMITTEL_ABSPERRVENTIL | 0xDE23 | - | Ansteuerung des Kältemittelabsperrventils | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE23_D | - |
| AE_CPLD_VERSION | 0xDE2D | STAT_CPLD_VERSION_WERT | CPLD-Version | - | V_e_CpldVersion | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_CHARGE_ENABLE | 0xDE71 | STAT_CHARGE_ENABLE_NR | Aussage über die Erteilung der Ladefreigabe | 0-n | ST_CHGNG_ENB | High | unsigned char | TAB_AE_CHARGE_ENABLE | - | - | - | - | 22 | - | - |
| AE_HV_SPANNUNG_LESEN | 0xDE75 | - | Werte aller Zwischenkreisspannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE75_D |
| AE_ROHSIG_EINGANG_SENS_ELUP_BUDS | 0xDE7E | - | Rohsignale Ausgangspins Sensoren ELUP, BUDS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7E_D |
| AE_ROHSIG_EINGANG_SENS_EM_INV | 0xDE7F | - | Rohsignale Sensoren/Eingänge für E-Maschine/Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7F_D |
| AE_ROHSIG_EINGANG_SENS_SG | 0xDE81 | - | Rohsignale Sensoren/Eingänge Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE81_D |
| AE_ROHSIG_EINGANG_SENS_SLE | 0xDE82 | - | Rohsignale Sensoren/Eingänge SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE82_D |
| AE_ROHSIG_EINGANG_SENS_DCDC | 0xDE83 | - | Rohsignale Sensoren/Eingänge DC/DC Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE83_D |
| AE_BETRIEBSZUSTAND_SLE | 0xDE84 | - | Betriebsarten SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE84_D |
| AE_SLE_LEISTUNG | 0xDE85 | - | Leistungswerte Zwischenkreis der SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE85_D |
| AE_SLE_SPANNUNG | 0xDE86 | - | AC und DC Spannungen SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE86_D |
| AE_SLE_STROM | 0xDE87 | STAT_STROM_TRAFO_WERT | kalibrierter SLE Trafostrom | A | V_I_SleLlcHvAmpFil | High | unsigned int | - | 0.01 | 1.0 | -100.0 | - | 22 | - | - |
| AE_SPANNUNG_KLEMME30B | 0xDE88 | STAT_SPANNUNG_KL30B_WERT | aktuelle Spannung an KL30B | V | V_U_Int12V | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| AE_STROM_DCDC | 0xDE89 | - | Ströme DC/DC Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE89_D |
| AE_TEMP_LE | 0xDE8C | - | Temperaturen Steuergerät Antriebselektronik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8C_D |
| AE_ZUSTAND_1_DCDC | 0xDE92 | - | Status DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE92_D |
| AE_ELUP | 0xDE93 | - | aktueller Zustand ELUP bzw. aktivieren/deaktivieren ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE93_D | RES_0xDE93_D |
| AE_ZUSTAND_DCDC_FEHLERBILD | 0xDE96 | - | Rückgabe aktiver/inaktiver Fehler DC/DC-Wandler | Bit | ST_ERR_DCDC_CNV | - | BITFIELD | RES_0xDE96_D | - | - | - | - | 22 | - | - |
| STATUS_CONNECTED_DRIVE | 0xDE9E | - | Informationen über Connected Drive | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE9E_D |
| LADEHISTORIE | 0xDEA1 | - | Lesen/Löschen der Ladehistorie | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEA1_D | RES_0xDEA1_D |
| AE_BUDS | 0xDEA5 | STAT_BUDS_WERT | Sensorwert des Bremsunterdrucks | hPa | AVL_LOWP_BRKFA | High | unsigned char | - | 4.0 | 1.0 | -1000.0 | - | 22 | - | - |
| AE_TEMP_EMASCHINE | 0xDEA6 | - | Wert der aktuellen Temperaturen der E-Maschine in Grad Celsius | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA6_D |
| AE_ELEKTRISCHE_MASCHINE | 0xDEA7 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA7_D |
| AE_ZUSTAND_2_DCDC | 0xDEA9 | - | Rückgabe verschiederer Status vom DCDC-Wandler | Bit | ST_DCDC_CNV_DIAG | - | BITFIELD | RES_0xDEA9_D | - | - | - | - | 22 | - | - |
| LADEHISTOGRAMM | 0xDEAE | - | Lesen/Löschen von Histogramm und Zähler aller Ladevorgänge (Elektrofahrzeug und Plug-In-Hybrid) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEAE_D | RES_0xDEAE_D |
| AE_ROTORLAGESENSOR | 0xDEB1 | - | Direktes Schreiben oder Auslesen des Resolveroffset Winkels | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB1_D | - |
| AE_DCDC_TEMPHISTOGRAMM_LESEN | 0xDEB2 | - | Auslesen Temperatur-Histogramme DCDC / Rücksetzen Temperatur-Histogramme (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB2_D | - |
| AE_DCDC_LEISTUNGSHISTOGRAMM | 0xDEB3 | - | Auslesen Leistungs-Histogramme DCDC-Wandler / Zurücksetzen Leistungs-Histogramme (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB3_D | - |
| AE_RESET_TEMP_MIN_MAX | 0xDEB4 | - | Rücksetzen der minimalen und maximalen Temperatur des DC/DC Wandlers (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB4_D | - |
| AE_CTRL_VERSION | 0xDEBC | STAT_CTRL_VERSION_WERT | Controllerbord-Version | - | V_e_CtrlVarIn | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SPANNUNG_DCDC | 0xDEBD | STAT_SPANNUNG_LV_WERT | DC/DC-Spannung Niedervoltseite | V | V_U_DcdcLv | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SPANNUNG_LE | 0xDEBE | - | Interne Spannungen der Leistungselektronik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEBE_D |
| AE_SYSSTATE | 0xDEBF | - | Interne Statuszustände des Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEBF_D |
| KAELTEMITTEL_ABSPERRVENTIL_ON_OFF_PWM | 0xDEC0 | STAT_AKAV_ON_WERT | Status des Kältemittelabsperrventils; 0% = Ventil geschlossen; 100% = Ventil offen | % | V_e_KMV_IR_tester_ducy | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_LSC_LADEN | 0xDEDE | - | Rückmeldung zum Ladeverfahrens | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEDE_D |
| UI_DERATING_EM1 | 0xDEDF | - | Auslesen oder Rücksetzen UI Derating Werte von E-Maschine 1 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEDF_D | RES_0xDEDF_D |
| UI_DERATING_EM2 | 0xDEE0 | - | Auslesen oder Rücksetzen UI Derating Werte von E-Maschine 2 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEE0_D | RES_0xDEE0_D |
| KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | 0xDEE4 | STAT_AKAV_EL_DIAGNOSE_NR | Ergebnis der elektrischen Diagnose vom Kältemittelabsperrventil | 0-n | V_e_KMV_IR_tester_diag_state | High | unsigned char | TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | - | - | - | - | 22 | - | - |
| KLASSIERUNG_ZUG_SCHUB_LOESCHEN | 0xDEE5 | - | Löschen der gesamten Zug/Schub-Lastwechselklassierung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEE5_D | - |
| HISTOGRAMM_ANTRIEB | 0xDEED | - | Historienwerte für Antrieb (EV, ACC, ENGY_PX, VFZG, BTZAEHLER) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEED_D |
| HISTOGRAMM_DEGRADATION | 0xDEEF | - | Historienwerte Degradation  (DEGRAD, EFAHR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEEF_D |
| INVERTER_HISTOGRAMM_2 | 0xDF1E | - | Ermittlung Häufigkeit in Klassen der Temperaturhübe von IGBTs, Dioden und Kühlmittel am AE Einfluss. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF1E_D |
| LADESTROM_EINSTELLUNG | 0xDF45 | - | Einstellung Stromgrenzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF45_D | - |
| HISTOGRAMM_LADEKOORDINATOR | 0xDF49 | - | Histogramme des Ladekoordinators | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF49_D |
| INVERTER_HISTOGRAMM | 0xDF4D | - | Auslesen der berechneten Lebenszeitdaten des Inverters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF4D_D |
| LADEMODUS_WERK | 0xDF50 | - | Setzen und Auslesen des Werkslademodus (Laden auf vorgegebenen SOC) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF50_D | RES_0xDF50_D |
| ELUP_DATEN_RESET | 0xDF51 | - | Zurücksetzen aller Statisikdaten der ELUP | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF51_D | - |
| ROTORLAGESENSOR_WINKELCODE_SCHREIBEN | 0xDF52 | - | Setzen des Resolveroffsetwinkels nach Entschlüsseln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF52_D | - |
| INVERTER_RBM_INFO | 0xDF58 | - | RBM Information für die nicht durchlaufende Umrichter Diagnose im I01 und I12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF58_D |
| DCDC_RBM_INFO | 0xDF59 | - | RBM Information für die nicht kontinuierliche DC/DC-Wandler Diagnose in I01 und I12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF59_D |
| LADEGERAET_RBM_INFO | 0xDF5A | - | RBM Information für die nicht kontinuierliche Ladegerät Diagnose bei I01 und I12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF5A_D |
| LIEFERANT_TRACE_NUMMER | 0xDF5B | STAT_TRACE_NUMMER_TEXT | 29 Byte SG-Hersteller Tracenummer | TEXT | - | High | string[29] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHWINGUNGSDAEMPFUNG_DEAKTIVIEREN | 0xDF5C | - | Deaktivierung der Schwingungsdämpfung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF5C_D | - |
| LAST_HISTOGRAMM_EMASCHINE_RESET | 0xDF5D | - | Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF5D_D | - |
| LADEGERAET_HISTOGRAMM_RESET | 0xDFB4 | - | Zurücksetzen der Histogramme vom Ladegerät | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFB4_D | - |
| LADEGERAET_TEMPERATUR_HISTOGRAMM | 0xDFB5 | - | Temperatur-Histogramme der innerhalb der Antriebselektronik (AE) vorhandenen Ladeelektronik (SLE) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB5_D |
| LADEGERAET_HV_UEBERSTROM | 0xDFB7 | STAT_ZAEHLER_HV_UEBERSTROM_WERT | Ladegerät Überstromzähler auf Basis HV DC-Stromsensorrohwert | - | V_cnt_IHV_Treshold | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LAST_HISTOGRAMM_EMASCHINE_LESEN | 0xDFD0 | - | Auslesen der Histogramme der Elektromaschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD0_D |
| TEMPERATUR_HISTOGRAMM_EMASCHINE | 0xDFD2 | - | Temperatur Histogramme der Elektromaschine für Magnet und Wickelkopf | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD2_D |
| NVRAM_LIEFERANT_1 | 0xDFD5 | - | Liest eine Speicherblock aus dem NVRAM eines Lieferanten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD5_D |
| NVRAM_LIEFERANT_1_LOESCHEN | 0xDFD6 | - | Löscht einen Speicherblock aus dem NVRAM eines Lieferanten; Steuergerät muss nach Ausführen des Jobs noch einschlafen bzw. Ausführung des Reset-Jobs | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFD6_D | - |
| LADEKOORDINATOR_INTERFACE | 0xE5FE | - | Schnittstellen von Ladekoordinator zu HVPM und Ladern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FE_D |
| DCDC_MESSGROESSEN_KOMPLETT | 0xE5FF | - | Status aller verfügbaren DCDC Messgrössen für beide PKR2 und nicht-PKR2 Software | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FF_D |
| NV_FLASH_PRUEFEN | 0xF000 | - | NV-Flash auf Lesefehler prüfen  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| AE_HWCAL_LESEN | 0xF010 | - | Auslesen der HWCALs anhand von Blocknummer und Prozessor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | RES_0xF010_R |
| AKS_DIAG_STATUS_SELECT | 0xF012 | - | Abfrage von AE-Statusbits zur Diagnose und Zuordnung von AKSen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF012_R | RES_0xF012_R |
| AE_FREILAUF_MODUS | 0xF050 | - | Freilauf Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF050_R |

### TAB_AC_I_LIMIT_HIGH

| WERT | TEXT |
| --- | --- |
| 0 | Maximal |
| 1 | Reduziert |

### TAB_AC_I_LIMIT_LOW

| WERT | TEXT |
| --- | --- |
| 0 | Maximal |
| 1 | Reduziert |
| 2 | Minimal |

### TAB_AE_CHARGE_ENABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | wahr |
| 0x02 | falsch |
| 0x03 | ungültig |

### TAB_AE_DCDC_HISTOGRAMM

| WERT | TEXT |
| --- | --- |
| 0x00 | PHistoF |
| 0x01 | PHistoL |
| 0x02 | T1HistoF |
| 0x03 | T1HistoL |
| 0x04 | T2HistoF |
| 0x05 | T2HistoL |
| 0x06 | T3HistoF |
| 0x07 | T3HistoL |
| 0x08 | T4HistoF |
| 0x09 | T4HistoL |
| 0x0A | rUtil |
| 0x0B | rUtilF |
| 0x0C | rTSL |
| 0x0D | rTSF |

### TAB_AE_ELEKTRISCHE_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentenregelung |
| 0x02 | Reserviert |
| 0x03 | EM-Spannungsregelung |
| 0x04 | Reserviert |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV Batterie Stromregelung |
| 0x07 | Anlernen Rotorlagesensor |
| 0x08 | Aktiver Kurzschluss (AKS) |
| 0x09 | Reserviert |
| 0x0A | Freilauf |
| 0x0B | Reserviert |
| 0x0C | Sicherer Zustand / Fehler |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0x0F | Signal ungültig |

### TAB_AE_ELUP_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion! |
| 0x01 | ELUP ansteuern |

### TAB_AE_EWP_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv (Grundzustand nach Initialisierung oder EWP ausgeschaltet) |
| 0x01 | Aktiv - OK |
| 0x02 | Aktiv - Trockenlauf |
| 0x03 | Aktiv - blockiert |
| 0x04 | Aktiv - Übertemperatur |
| 0x05 | Aktiv - minimale Drehzahl |
| 0x06 | Elektrischer Fehler oder Kommunikationsfehler am Leistungs - ASIC |
| 0x07 | Elektrischer Fehler Kurzschluss auf Masse |

### TAB_AE_LADESTECKER_LSC_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladekabel angesteckt |
| 0x01 | Ladekabel angesteckt |
| 0x02 | Fehler |

### TAB_AE_ROHSIGNAL_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

### TAB_AE_SLE_BETRIEBSMODE

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | HV-DC Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Fehler |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x09 | Ladeinitialisierung abgeschlossen |
| 0x0A | Standby mit HLC |
| 0x0F | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_AE_SLE_FEHLERZUSTAENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Derating |
| 0x01 | Ladeunterbrechung |
| 0x02 | Notlauf |
| 0x03 | Kommunikationsausfall |
| 0x04 | Reserviert |
| 0xFF | Signal ungültig |

### TAB_AE_SYSSTATE_MCS

| WERT | TEXT |
| --- | --- |
| 0x00 | eINITIALIZATION |
| 0x01 | ePREDRIVE |
| 0x02 | eREADY |
| 0x03 | eWAITSLEEPACKNOWLEDGE |
| 0x04 | eFUNCTIONPOSTDRIVE |

### TAB_AE_ZST_AKTIV_NAKTIV

| WERT | TEXT |
| --- | --- |
| 0x01 | Nicht aktiv |
| 0x02 | Aktiv |
| 0xFF | Wert ungültig |

### TAB_AKS_INFO_SATZ

| WERT | TEXT |
| --- | --- |
| 0 | 1.Satz |
| 1 | 2.Satz |
| 2 | 3.Satz |
| 3 | 4.Satz |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### TAB_EDME_REMOTE_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | RemoteLaden nicht aktiv |
| 0x01 | RemoteLaden on Hold |
| 0x02 | RemoteLaden aktiv |

### TAB_EDME_STATUS_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Laden |
| 0x01 | Ladestecker gesteckt - kein Laden |
| 0x02 | Laden aktiv |
| 0x03 | Laden beendet |
| 0x04 | Ladestörung |
| 0x05 | Ladefehler |

### TAB_EDME_TIMER_LADEN_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | TimerLaden nicht aktiv |
| 0x01 | TimerLaden on Hold |
| 0x02 | TimerLaden aktiv |

### TAB_EME_HVSTART_KOMM

| WERT | TEXT |
| --- | --- |
| 0x00 | HV aus |
| 0x01 | HV ein Anforderung |
| 0x02 | Freigabe HV |
| 0x03 | HV-Batterie Nullstromanforderung |
| 0x04 | HV Nachlauf 1 |
| 0x05 | HV Nachlauf 2 |
| 0x06 | Shutdown: Anforderung Schütze öffnen |
| 0x07 | Shutdown: Anforderung HV-Zwischenkreisentladung |
| 0x09 | Anforderung Batterieloser Betrieb |
| 0x0A | HV Batterieloser Betrieb: Anforderung Schütze öffnen |
| 0x0B | HV Batterieloser Betrieb aktiv |
| 0x0C | fehlerbedingter Shutdown: Rücknahme Freigabe HV |
| 0x0D | fehlerbedingter Shutdown: Anforderung Schütze öffnen |
| 0x0E | fehlerbedingter Shutdown: Anforderung HV-Zwischenkreisentladung |
| 0x0F | HV Störung |
| 0x10 | Initialisierung / ungültig |

### TAB_EME_I0ANF_HVB

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Anforderung |
| 0x01 | Anforderung Nullstrom ohne EV: HV-Batteriefehler der Kategorie 5 oder geringe Ladeleistung |
| 0x02 | Anforderung Nullstrom mit EV: Entladeschutzfunktion HV-Batterie |
| 0x03 | Anforderung Nullstrom mit EV: HV-Power-Down |
| 0x04 | Anforderung Nullstrom mit EV: Batterieloser Betrieb |

### TAB_EME_IST_BETRIEBSART_DCDC

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Buck |

### TAB_EME_KOMM_BETRIEBSART_DCDC

| WERT | TEXT |
| --- | --- |
| 0x00 | Anforderung Standby |
| 0x01 | Anforderung Buck |

### TAB_FAHRERLEBNIS_FILTER

| WERT | TEXT |
| --- | --- |
| 0 | Alle Modi erlaubt |
| 1 | Nur Basis erlaubt |
| 2 | Nur Basis, Race, Traction erlaubt |
| 3 | Nur Basis, Traction erlaubt |
| 4 | Traction, Sport+, Race nicht erlaubt |

### TAB_FAHRERLEBNIS_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung an den Modus |
| 0x01 | Modus Traction gefordert |
| 0x02 | Modus Komfort gefordert |
| 0x03 | Modus Basis gefordert |
| 0x04 | Modus Sport gefordert |
| 0x05 | Modus Sport+ gefordert |
| 0x06 | Modus Race gefordert |
| 0x07 | Modus ECO gefordert |
| 0x08 | Modus ECO+ gefordert |
| 0xFF | Signal ungueltig |

### TAB_FAKTOR_STROMBEGRENZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximales Laden mit vollem AC Ladestrom. |
| 0x01 | Reduziertes Laden mit reduziertem AC Ladestrom. |
| 0x02 | Minimales Laden mit minimalen AC Ladestrom. |
| 0xFF | Signal ungültig |

### TAB_HVPM_CHGNG_TYP_IMME

| WERT | TEXT |
| --- | --- |
| 0 | Kein Ladeverfahren |
| 1 | AC-Laden mit Typ 1 Stecker (Yazaki) |
| 2 | AC-Laden mit Typ 2 Stecker (Mennekes) |
| 3 | DC-Laden nach CHAdeMO-Protokoll |
| 4 | DC-Laden nach SAE-Protokoll |
| 5 | AC-Laden China |
| 253 | Signal nicht verfügbar |
| 254 | Fehler |
| 255 | Signal ungültig |

### TAB_HVPM_CTR_MEASMT_ISL

| WERT | TEXT |
| --- | --- |
| 0 | Isolationsmessung ausschalten |
| 1 | keine Anforderung |
| 2 | Isolationsmessung angefordert |
| 3 | Signal ungültig |

### TAB_HVPM_ST_CHGNG

| WERT | TEXT |
| --- | --- |
| 0 | Kein Laden |
| 1 | Initialisierung |
| 2 | Laden aktiv |
| 3 | Ladepause |
| 4 | Laden beendet |
| 5 | Ladefehler |
| 15 | Signal ungültig |

### TAB_HVPM_ST_CHGRDI

| WERT | TEXT |
| --- | --- |
| 0 | Ladebereitschaft nicht aktiv |
| 1 | Ladebereitschaft aktiv |
| 3 | Singal ungültig |

### TAB_IST_BETRIEBSART_SLE

| WERT | TEXT |
| --- | --- |
| 1 | Standby |
| 2 | DC-HV-Laden |
| 3 | Derating |
| 4 | Ladeunterbrechung |
| 5 | Fehler |
| 6 | Crash |
| 7 | Betriebsartwechsel |
| 8 | Ladeinitialisierung |
| 9 | Ladeinitialisierung abgeschlossen |
| 13 | Signal nicht verfügbar |
| 14 | Fehler |
| 15 | Signal unbefüllt |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ok. |
| 0x01 | Kurzschluss nach Masse. |
| 0x02 | Kurzschluss nach Plus. |
| 0x03 | Leitungsunterbrechung. |
| 0x0F | Signal ungültig. |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Job inaktiv |
| 0x01 | Job aktiv & Ventil öffnen |
| 0x02 | Job aktiv & Ventil schliessen |

### TAB_KUEHLMITTEL_TEMPERATUR_KLASSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Temperaturbereich Kühlmittel kleiner 10°C |
| 0x01 | Temperaturbereich Kühlmittel 10 bis 40°C |
| 0x02 | Temperaturbereich Kühlmittel 40 bis 70°C |
| 0x03 | Temperaturbereich Kühlmittel grösser 70°C |

### TAB_LADEFENSTER_1

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0x03 | Nicht gültig |

### TAB_LADEGERAET_HISTOGRAMM

| WERT | TEXT |
| --- | --- |
| 0x00 | V_T_SleHistoHS1S |
| 0x01 | V_T_SleHistoHS2S |
| 0x02 | V_T_SleHistoHS1D |
| 0x03 | V_P_LdkHisto_IntLe |
| 0x04 | V_T_LdkHisto_IntLe |
| 0x05 | V_P_LdkHisto_ExtLe |
| 0x06 | V_T_LdkHisto_ExtLe |

### TAB_LADEMODUS_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Anforderung Lademodus Werk |
| 0x02 | Anforderung Ende Lademodus Werk |

### TAB_LADEN_LADEART

| WERT | TEXT |
| --- | --- |
| 0x00 | AC-Laden mit In-Cable-Ladevorrichtung |
| 0x01 | AC-Laden mit Wallbox |
| 0x02 | DC-Laden |

### TAB_LADEN_URSACHE_LADEENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt / Diagnose nicht möglich |
| 0x01 | Ziel erreicht (Reichweite oder Ladezustand) |
| 0x02 | Beenden vom Fahrer angefordert |
| 0x03 | Ladestecker abgezogen |
| 0x04 | Netzausfall (auch Schuko gezogen) |
| 0x05 | Fehler des Hochvolt-Systems (Ladeelektronik, usw.) |
| 0x06 | Fehler der Ladestation |
| 0x07 | Parksperresignal ausgefallen (GWS) |
| 0x08 | keine Parksperre |

### TAB_LADESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Laden |
| 0x01 | Initialisierung |
| 0x02 | Laden aktiv |
| 0x03 | Ladepause |
| 0x04 | Laden beendet |
| 0x05 | Ladefehler |
| 0x0F | Signal ungültig |

### TAB_LADEVERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladeverfahren |
| 0x01 | AC-Laden mit Steckertyp 1 (Yazaki) |
| 0x02 | AC-Laden mit Steckertyp 2 (Mennekes) |
| 0x03 | DC-Laden mit CHAdeMo-Protokoll |
| 0x04 | DC-Laden mit SAE-Protokoll |
| 0x05 | AC-Laden China |
| 0xFD | Signal nicht verfügbar |
| 0xFE | Fehler |
| 0xFF | Signal ungültig |

### TAB_LAST_EMASCHINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehzahlbereich 0-1500 rpm |
| 0x01 | Drehzahlbereich 1500-3000 rpm |
| 0x02 | Drehzahlbereich 3000-4500 rpm |
| 0x03 | Drehzahlbereich 4500-6000 rpm |
| 0x04 | Drehzahlbereich >6000 rpm |

### TAB_LEISTUNGSMESSUNG_PHEV_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Beenden |
| 0x01 | Nur Verbrennungsmotor |
| 0x02 | Maximale elektrische Leistung |

### TAB_LEISTUNGSMESSUNG_PHEV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Beenden Leistungsmessung |
| 0x01 | Nur Verbrennungsmotor |
| 0x02 | Maximale elektrische Leistung |

### TAB_LSC_TRIGGER_INHALT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Trigger für TS-Dienst  Last State Call  |
| 0x01 | Laden ist aufgestartet (Ladeparameter liegen vor) |
| 0x02 | Toleranz für Abweicheung zwischen dem prognostizerten und dem Ist-Ladezustand des HV-Speichers überschritten |
| 0x03 | Temporäre Aufhebung des Teilnetzbetriebs |
| 0x04 | Aufladung des Hochvoltspeichers abgeschlossen (Ladeziel erreicht oder Kunde hat beendet) |
| 0x05 | Laden abgebrochen wegen Fehler ausserhalb Fahrzeug |
| 0x06 | Laden für Ladepause unterbrochen |
| 0x07 | Zyklisches Nachladen wegen Energiemangel nicht möglich |
| 0x08 | Zyklisches Nachladen nicht möglich |
| 0x09 | Laden abgebrochen wegen Fehler innerhalb Fahrzeug |
| 0x0A | Weiteres zyklisches Nachladen nicht möglich |
| 0x0B | Weiteres zyklisches Nachladen möglich |
| 0x0D | Funktionsschnittstelle ist nicht verfügbar, Sendefunktion in Betrieb, Werte nicht verfügbar |
| 0x0E | Funktion meldet Fehler, Sendefunktion in Betrieb, meldet Fehler |
| 0x0F | Signal unbefüllt, Sendefunktion nicht in Betrieb |

### TAB_LW_KLASSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Gang 1 Zug / 3 Klassen |
| 0x01 | Gang 1 Schub / 3 Klassen |
| 0x02 | Gang 2 Zug / 3 Klassen |
| 0x03 | Gang 2 Schub / 3 Klassen |

### TAB_PROZESSOR

| WERT | TEXT |
| --- | --- |
| 0x0 | undefiniert |
| 0x1 | mc0 |
| 0x2 | mc2 |

### TAB_PRUEF_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 1 | NUR_PRUEFEN |
| 2 | PRUEFEN_KORRIEGIEREN |

### TAB_RSTINFO_CAUSE

| WERT | TEXT |
| --- | --- |
| 0 | nicht definiert |
| 1 | Ex WD |
| 2 | Int WD |
| 3 | SW Reset |
| 4 | Exception |
| 5 | Unknown |
| 255 | nicht definiert |

### TAB_SENSOR_BLOCK

| WERT | TEXT |
| --- | --- |
| 0x0 | Seriennummer |
| 0x1 | CPU-Sensoren-Block1 |
| 0x2 | CPU-Sensoren-Block2 |
| 0xff | nicht definiert |

### TAB_SENSOR_BLOCK_SETHWCAL

| WERT | TEXT |
| --- | --- |
| 0x0 | nicht definiert |
| 0x1 | CPU-Sensoren-Block1 |
| 0x2 | CPU-Sensoren-Block2 |
| 0xff | nicht definiert |

### TAB_STAT_AKS_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein AKS |
| 0x01 | AKS |
| 0x02 | Fehler |

### TAB_STAT_HVIL_GESAMT_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Interlock nicht unterbrochen |
| 0x01 | Interlock unterbrochen |
| 0xFF | nicht definiert |

### TAB_STAT_HV_SYSTEM_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Anforderung |
| 0x01 | Anforderung HV ein |
| 0x02 | Anforderung HV aus |

### TAB_STAT_ROTORLAGESENSOR_STATUS_MODE_GEN3

| WERT | TEXT |
| --- | --- |
| 0x00 | RLS Abgleich noch nie angefordert |
| 0x01 | RLS Abgleich angefordert, aber nicht aktiv |
| 0x02 | RLS Abgleich aktiv |
| 0x03 | Fehlerhafter RLS Abgleich (Abbruch) |
| 0x04 | Eingelernter Winkeloffset aus erfolgreich beendetem RLS Abgleich liegt vor, kein Abgleich erforderlich |

### TAB_STAT_ST_DIAG_DCDC_GRENZEN

| WERT | TEXT |
| --- | --- |
| 0x01 | erfolgreich |
| 0x02 | nicht erfolgreich: mindestens eine geforderte Grenze verletzt eine Systemgrenze, stattdessen wird diese Systemgrenze verwendet. |

### TAB_STAT_ST_DIAG_DCDC_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Antwort ausstehend |
| 0x01 | Erfolg |
| 0x02 | Fehler |

### TAB_STROMBEGRENZUNG_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0x03 | Ungültig |

### TAB_ST_B_DIAG_DCDC

| WERT | TEXT |
| --- | --- |
| 0x02 | I_diag_dcdc_lv_out verwenden |
| 0x04 | I_diag_dcdc_hv_out verwenden |
| 0x08 | U_diag_dcdc_lv_out verwenden |
| 0x10 | U_diag_dcdc_hv_out verwenden |

### TAB_ST_DIAG_DCDC_ANF

| WERT | TEXT |
| --- | --- |
| 0x00 | Kontrolle an EME-SW |
| 0x01 | Anforderung Buck-Modus |
| 0x03 | Anforderung Standby-Modus |

### TAB_ST_DIAG_HV_ANF

| WERT | TEXT |
| --- | --- |
| 0x00 | Kontrolle an EME-SW |
| 0x01 | Hochfahren HV-System angefordert |
| 0x02 | Runterfahren HV-System angefordert |

### TAB_VERARBEITUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | NICHT_GESTARTET |
| 1 | LAUFENDE_VERARBEITUNG |
| 2 | NVFLASH_OK |
| 3 | NVFLASH_FEHLERHAFT |
| 0xFF | Wert ungültig |

### TAB_WERKSMODUS_PHEV

| WERT | TEXT |
| --- | --- |
| 0x01 | eFahren zur Ueberfuehrung |
| 0x02 | Fahrdynamische Pruefung |

### TAB_WERKSMODUS_PHEV_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Werksmodus aktiv |
| 0x01 | eFahren zur Überführung |
| 0x02 | Fahrdynamische Prüfung |

### TAB_0X2858

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |

### TAB_0X2859

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört) |
| 0x01 | Freigabe erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0x03 | DH-Abgleich |
| 0x11 | Direktschreiben des SecretKey und EWS5 |
| 0x12 | Direktschreiben des SecretKey und EWS5 und DH-Abgleich |
| 0x22 | Direktschreiben + EWS6 + DH-Abgleich |
| 0x23 | DH-Abgleich + EWS6 |
| 0xXY | unbekannt |

### DIAGADRTXT

| WERT | NAME |
| --- | --- |
| 0x12 | DME |
| 0x13 | DME2 |
| 0x18 | EGS |
| 0x1A | AE |
| 0x3A | EME20 |
| 0x3A | EME |
| 0x0A | REME |
| 0x1A | EMET |
| 0x0A | EMEZ |

### TAB_RESETINFO_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x00 | POWERUP_RST |
| 0x01 | EXT_WATCHDOG_RST |
| 0x02 | INT_WATCHDOG_RST |
| 0x03 | SOFTWARE_RST |
| 0x04 | EXCEPTION_RST |
| 0x05 | UNKNOWN_RST |
| 0xFF | ungueltiger Wert |

### TAB_RESETINFO_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | ungueltiger Wert |
| 0x01 | Single Reset |
| 0x02 | Permanent Reset |
| 0xFF | ungueltiger Wert |

### TAB_RESETINFO_SYSSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | eINITIALIZATION |
| 0x01 | ePREDRIVE |
| 0x02 | eREADY |
| 0x03 | eWAITSLEEPACKNOWLEDGE |
| 0x04 | eFUNCTIONPOSTDRIVE |
| 0x05 | eFINALIZE |
| 0x06 | eMAXSTATE |
| 0xFF | ungueltiger Wert |

### TAB_AE_FUNKSTAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht verfuegbarer Wert |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |

### TAB_AE_STAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montage-Modus ist inaktiv |
| 0x01 | Montage-Modus ist aktiv |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |
