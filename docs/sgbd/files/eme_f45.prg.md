# eme_f45.prg

## General

|  |  |
| --- | --- |
| File | eme_f45.prg |
| Type | PRG |
| Jobs | 43 |
| Tables | 230 |
| Origin | BMW EA-441 Patrick_Modispacher |
| Revision | 11.004 |
| Author | MAGNA-TELEMOTIVE-GMBH EE-420 Sewerys |
| ECU Comment | Ausleitung F056-17-03-400 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotor-Elektronik |  |  |
| ORIGIN | string | BMW EA-441 Patrick_Modispacher |  |  |
| REVISION | string | 11.004 |  |  |
| AUTHOR | string | MAGNA-TELEMOTIVE-GMBH EE-420 Sewerys |  |  |
| COMMENT | string | Ausleitung F056-17-03-400 |  |  |
| PACKAGE | string | 1.995 |  |  |
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

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

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
| 0x0000CB | A123 Systems |
| 0x0000CC | ZADI |
| 0x0000CD | speedsignal GmbH |
| 0x0000CE | Eldor Corporation |
| 0x0000CF | Delta Electronics Inc. |
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

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_MAIN_RESET_ZAEHLER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen TEM Reset Zähler: 0 = Kein Rücksetzen, 1 = Rücksetzen |

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_MAIN_RESET_ZAEHLER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MAIN Reset Zähler: 0= kein Rücksetzen; 1 = Rücksetzen |

### ARG_0X400A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_RESET_CRASHZAEHLER | - | - | - | - | - | 0=keine Aktion 1=rücksetzen  1.Crashzähler 2=rücksetzen  2.Crashzähler 3=rücksetzen   1.Crashzähler und 2.Crashzähler |

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

### ARG_0XADC0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_START_LADEN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ladestart anfordern = 1; keine Anforderung = 0 |

### ARG_0XADC1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_STOP_LADEN | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ladestopp anfordern = 1; keine Anforderung = 0 |

### ARG_0XADCD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_AKS | + | - | 0-n | high | unsigned char | - | TAB_AKS_HV_SGR | - | - | - | - | - | Auswahl zum Aktivieren/Deaktivieren AKS |

### ARG_0XADED_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_LEISTUNGSMESSUNG_PHEV | + | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_SETZEN | - | - | - | - | - | Auswahl Modus für Leistungsmessung PHEV |

### ARG_0XADF1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_DCDC_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_DCDC_ANF | 1.0 | 1.0 | 0.0 | - | - | Anforderung Betriebsart DCDC |
| ST_B_DIAG_DCDC | + | - | 0-n | high | unsigned char | - | TAB_ST_B_DIAG_DCDC | - | - | - | - | - | Auswahl der Systemgrenze |
| I_DIAG_DCDC_LV_OUT | + | - | A | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -200.0 | 200.0 | LV Strom Systemgrenze |
| I_DIAG_DCDC_HV_OUT | + | - | A | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | HV Strom Systemgrenze |
| U_DIAG_DCDC_LV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 33.0 | LV Spannung Systemgrenze |
| U_DIAG_DCDC_HV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | HV Spannung Systemgrenze |

### ARG_0XADF2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_HV_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_HV_ANF | - | - | - | - | - | Anforderung HV |

### ARG_0XADF4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XADF8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MD_KLASSEN_GANG | + | - | 0-n | high | unsigned char | - | TAB_AE_MOMENTENKLASSE_GANG | - | - | - | - | - | Momentenklassen:  0 : Gang 1 (-250Nm bis +350Nm) |

### ARG_0XADFB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_WERKSMODUS_PHEV | + | - | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV | - | - | - | - | - | Werksmodus PHEV setzen |

### ARG_0XDE07_D

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

### ARG_0XDE23_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN_LU | - | - | - | - | - | siehe Tabelle |

### ARG_0XDE93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_ELUP | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | - | - | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Strom am ELUP-Ausgang |

### ARG_0XDEB2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen Rotorlagesensor: 0 = nicht rücksetzen; 1 = rücksetzen |

### ARG_0XDEB7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_CODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht loeschen 1 = loeschen |

### ARG_0XDF1D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZIEL_GANG | 0-n | high | unsigned char | - | TAB_KLAUENKUPPLUNG_GANG | - | - | - | - | - | Auswahl des Ganges |

### ARG_0XDF45_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SET_AC_I_LIMIT_LOW | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_LOW | - | - | - | - | - | Einstellung Stromgrenze AC_LOW |
| STAT_SET_AC_I_LIMIT_HIGH | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_HIGH | - | - | - | - | - | Einstellung Stromgrenze AC_HIGH |
| STAT_AC_I_LIMIT_ACTIVE_NR | 0-n | high | unsigned char | - | TAB_STAT_AC_I_LIMIT_ACTIVE | - | - | - | - | - | Auswahl ob Ladestrom verstellt werden soll |

### ARG_0XDF47_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LADEHISTOGRAMM_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen des Ladehistogramms (0: nicht löschen, 1: löschen) |

### ARG_0XDF50_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BA_WERKLDMODUS | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | - | - | Auswahl des Lademodus Werk |
| STAT_SOC_ANF_WERKLADEMODUS | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Geforderter SOC Endwert HV-Batterie beim Lademodus Werk |

### ARG_0XDF52_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | 3-Byte Chiffetext vom Resolver Offset Winkel |

### ARG_0XDF5C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Schwingungdämpfung: 0 = nicht deaktivieren; 1 = deaktivieren |

### ARG_0XDF5D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Aktion: 0 = nicht zurücksetzen; 1 = zurücksetzen |

### ARG_0XDFD3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen der DTC Historie: 0 = kein Rücksetzen, 1 = Rücksetzen |

### ARG_0XDFD4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen der DTC Historie: 0 = kein Rücksetzen, 1 = Rücksetzen |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | + | - | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | + | - | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0-62 = Nummer des Sensors 63 - 255  = nicht definiert |

### ARG_0XF781_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Security byte = 0x55 |
| CHECKSUM | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Checksum |

### ARG_0XF782_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Security byte (constant = 0xAA) |
| CHECKSUM | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Checksum |

### ARG_0XF783_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Set the TEM Inverter's HW AKS Control (0xBB to Activate) |
| CHECKSUM | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Checksum |

### ARG_0XF784_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Set the HVSGR Inverter's HW AKS Control  (0xCC to Activate) |
| CHECKSUM | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Checksum |

### ARG_0XF785_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REQUEST | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Request (boolean 0/1) |
| CHECKSUM | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Checksum |
| COMMAND | - | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Request (boolean 0/1) |

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
| 0x030F01 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - Version 2 | 1 | - |
| 0x030F02 | HVPM - Start-Isolationsüberwachung - ISO-Warnung | 1 | - |
| 0x030F03 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - China - Version 2 | 1 | - |
| 0x030F80 | DC/DC-Wandler - HV Spannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x030F81 | DC/DC-Wandler - HV Spannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x030F82 | DC/DC-Wandler - HV Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x030F83 | DC/DC-Wandler - HV Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x030F84 | DC/DC-Wandler - HV Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x030F85 | DC/DC-Wandler - HV Stromsensor - Kurzschluss nach Plus | 0 | - |
| 0x030F87 | DC/DC-Wandler - HV Stromsensor - Oberer Schwellwert überschritten | 0 | - |
| 0x030F89 | DC/DC-Wandler - HV-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x030F8A | DC/DC-Wandler - LV Spannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x030F8B | DC/DC-Wandler - LV Spannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x030F8C | DC/DC-Wandler - LV Spannungssensor - Oberer Schwellwert überschritten | 0 | - |
| 0x030F8D | DC/DC-Wandler - LV Spannungssensor - Unterer Schwellwert unterschritten | 0 | - |
| 0x030F8E | DC/DC-Wandler - LV-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x030F8F | DC/DC-Wandler - LV Stromsensor - Kurzschluss nach Plus | 0 | - |
| 0x030F91 | DC/DC-Wandler - LV Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x030F94 | DC/DC-Wandler - Temperatursensor - Kurzschluss nach Plus | 0 | - |
| 0x030F95 | DC/DC-Wandler - Temperatursensor - Kurzschluss nach Masse | 0 | - |
| 0x030F96 | DC/DC-Wandler - Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x030F97 | DC/DC-Wandler - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x030F98 | DC/DC-Wandler - Temperatursensor - Plausibilitätsfehler | 0 | - |
| 0x030F9A | DC/DC-Wandler - Masseband-Diagnose - Kurzschluss Messleitung nach Masse | 0 | - |
| 0x030F9B | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Kurzschluss nach Plus | 0 | - |
| 0x030F9C | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Kurzschluss nach Masse | 0 | - |
| 0x030F9D | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Oberer Schwellenwert überschritten | 0 | - |
| 0x030FA0 | DC/DC-Wandler - Masseband-Diagnose - starke Alterung festgestellt - Abschaltung | 0 | - |
| 0x030FA1 | DC/DC-Wandler - Masseband-Diagnose - Alterung festgestellt | 0 | - |
| 0x030FA2 | DC/DC-Wandler - Masseband-Diagnose - Alterung festgestellt - Leistung reduziert | 0 | - |
| 0x031040 | ELUP - Control - Förderleistung mech. Pumpe zu gering | 0 | - |
| 0x031041 | ELUP - Control - Rückschlagventil - Leckage erkannt | 0 | - |
| 0x031042 | ELUP - Control - max. Laufzeit überschritten | 0 | - |
| 0x031043 | ELUP - Control - Förderleistung zu gering | 0 | - |
| 0x031044 | ELUP - Control - Unterdruckniveau zu gering | 0 | - |
| 0x031045 | ELUP - Control - Vakuumsensor - außerhalb gülten Bereich | 0 | - |
| 0x03104A | ELUP - Aktuator - Kurzschluss nach Masse | 0 | - |
| 0x03104B | ELUP - Aktuator - Kurzschluss nach Plus | 0 | - |
| 0x03104C | ELUP - Aktuator - Pumpe blockiert | 0 | - |
| 0x031053 | ELUP - Aktuator - Steckerverbindung - offene Leitung | 0 | - |
| 0x031055 | ELUP - Ausgangsspannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x031056 | ELUP - Ausgangsspannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x031057 | ELUP - Ausgangsspannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031058 | ELUP - Ausgangsspannungssensor - Spannung unplausibel | 0 | - |
| 0x031059 | ELUP - Ausgangsspannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031060 | ELUP - Spannungsversorgung zu gering | 0 | - |
| 0x031061 | ELUP - Spannungsversorgung zu hoch | 0 | - |
| 0x031063 | ELUP - Stromsensor 1 - Kurzschluss nach Masse | 0 | - |
| 0x031064 | ELUP - Stromsensor 1 - Kurzschluss nach Plus | 0 | - |
| 0x031065 | ELUP - Stromsensor 1 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031066 | ELUP - Stromsensor 1 - unplausibel | 0 | - |
| 0x031069 | ELUP - Stromsensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x03106A | ELUP - Stromsensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x03106B | ELUP - Stromsensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x03106C | ELUP - Stromsensor 2 - unplausibel | 0 | - |
| 0x031078 | ELUP - Treiber - Schaltet nicht durch | 0 | - |
| 0x031200 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase U | 0 | - |
| 0x031201 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase V | 0 | - |
| 0x031202 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase W | 0 | - |
| 0x031206 | EM 1 Verbrennernah - Rotorlagesensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031208 | EM 1 Verbrennernah - Rotorlagesensor - Überdrehzahl | 0 | - |
| 0x031209 | EM 1 Verbrennernah - Rotorlagesensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03120B | EM 1 Verbrennernah - Rotorlagesensor - Winkel unplausibel | 0 | - |
| 0x03120C | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Plus | 0 | - |
| 0x03120D | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Masse | 0 | - |
| 0x03120E | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Oberer Schwellenwert überschritten | 0 | - |
| 0x03120F | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031210 | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Offene Leitung | 0 | - |
| 0x031212 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Kurzschluss nach Plus | 0 | - |
| 0x031213 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Kurzschluss nach Masse | 0 | - |
| 0x031216 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Offene Leitung | 0 | - |
| 0x031218 | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Kurzschluss nach Plus | 0 | - |
| 0x031219 | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Kurzschluss nach Masse | 0 | - |
| 0x03121A | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Oberer Schwellenwert überschritten | 0 | - |
| 0x03121B | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03121C | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Offene Leitung | 0 | - |
| 0x03121E | EM 1 Verbrennernah - Temperatursensor 1 - Kurzschluss nach Plus | 0 | - |
| 0x03121F | EM 1 Verbrennernah - Temperatursensor 1 - Kurzschluss nach Masse | 0 | - |
| 0x031220 | EM 1 Verbrennernah - Temperatursensor 1 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031221 | EM 1 Verbrennernah - Temperatursensor 1 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031223 | EM 1 Verbrennernah - Temperatursensor 1 - Signal eingefroren (Stuck) | 0 | - |
| 0x031224 | EM 1 Verbrennernah - Temperatursensor 1 - Signal unplausibel nach Kaltstart | 0 | - |
| 0x031225 | EM 1 Verbrennernah - Temperatursensor 1 - Gradient unplausibel | 0 | - |
| 0x031226 | EM 1 Verbrennernah - Temperatursensor - Übertemperatur | 0 | - |
| 0x031229 | EM 1 Verbrennernah - Wirkungsgrad - unplausibel (motorisch oder generatorisch) | 0 | - |
| 0x03122A | EM 1 Verbrennernah - Rotorumdrehung nicht möglich | 0 | - |
| 0x031300 | EM 2 Verbrennerfern - Rotorlagesensor - Winkeloffset unplausibel oder nicht angelernt | 0 | - |
| 0x031301 | EM 2 Verbrennerfern - Rotorlagesensor - Überdrehzahl | 0 | - |
| 0x031302 | EM 2 Verbrennerfern - Rotorlagesensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031304 | EM 2 Verbrennerfern - Rotorlagesensor - Winkel unplausibel | 0 | - |
| 0x031305 | EM 2 Verbrennerfern - Rotorlagesensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031307 | EM 2 Verbrennerfern - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Plus | 0 | - |
| 0x031308 | EM 2 Verbrennerfern - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Masse | 0 | - |
| 0x031309 | EM 2 Verbrennerfern - Rotorlagesensor - Cosinusleitung - Oberer Schwellenwert überschritten | 0 | - |
| 0x03130A | EM 2 Verbrennerfern - Rotorlagesensor - Cosinusleitung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03130B | EM 2 Verbrennerfern - Rotorlagesensor - Cosinusleitung - Offene Leitung | 0 | - |
| 0x03130D | EM 2 Verbrennerfern - Rotorlagesensor - Erregerleitung - Kurzschluss nach Plus | 0 | - |
| 0x03130E | EM 2 Verbrennerfern - Rotorlagesensor - Erregerleitung - Kurzschluss nach Masse | 0 | - |
| 0x031311 | EM 2 Verbrennerfern - Rotorlagesensor - Erregerleitung - Offene Leitung | 0 | - |
| 0x031313 | EM 2 Verbrennerfern - Rotorlagesensor - Sinusleitung - Kurzschluss nach Plus | 0 | - |
| 0x031314 | EM 2 Verbrennerfern - Rotorlagesensor - Sinusleitung - Kurzschluss nach Masse | 0 | - |
| 0x031315 | EM 2 Verbrennerfern - Rotorlagesensor - Sinusleitung - Oberer Schwellenwert überschritten | 0 | - |
| 0x031316 | EM 2 Verbrennerfern - Rotorlagesensor - Sinusleitung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031317 | EM 2 Verbrennerfern - Rotorlagesensor - Sinusleitung - Offene Leitung | 0 | - |
| 0x031319 | EM 2 Verbrennerfern - Temperatursensor 1 - Kurzschluss nach Plus | 0 | - |
| 0x03131A | EM 2 Verbrennerfern - Temperatursensor 1 - Kurzschluss nach Masse | 0 | - |
| 0x03131B | EM 2 Verbrennerfern - Temperatursensor 1 - Oberer Schwellenwert überschritten | 0 | - |
| 0x03131C | EM 2 Verbrennerfern - Temperatursensor 1 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03131E | EM 2 Verbrennerfern - Temperatursensor 1 - Signal unplausibel nach Kaltstart | 0 | - |
| 0x03131F | EM 2 Verbrennerfern - Temperatursensor 1 - Signal eingefroren (Stuck) | 0 | - |
| 0x031320 | EM 2 Verbrennerfern - Temperatursensor 1 - Gradient unplausibel | 0 | - |
| 0x031321 | EM 2 Verbrennerfern - Temperatursensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x031322 | EM 2 Verbrennerfern - Temperatursensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x031323 | EM 2 Verbrennerfern - Temperatursensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031324 | EM 2 Verbrennerfern - Temperatursensor 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031326 | EM 2 Verbrennerfern - Temperatursensor 2 - Signal unplausibel nach Kaltstart | 0 | - |
| 0x031327 | EM 2 Verbrennerfern - Temperatursensor 2 - Signal eingefroren (Stuck) | 0 | - |
| 0x031328 | EM 2 Verbrennerfern - Temperatursensor 2 - Gradient unplausibel | 0 | - |
| 0x031329 | EM 2 Verbrennerfern - Wirkungsgrad - unplausibel (motorisch) | 0 | - |
| 0x03132A | EM 2 Verbrennerfern - Wirkungsgrad - unplausibel (generatorisch) | 0 | - |
| 0x03132C | EM 2 Verbrennerfern - Temperatursensor(en) - min. 2 Sensoren defekt | 0 | - |
| 0x03132D | EM 2 Verbrennerfern - Temperatursensor(en) - Übertemperatur | 0 | - |
| 0x031330 | EM 2 Verbrennerfern - Kommunikation - Erkennung einer ungültig anforderten Betriebsart | 1 | - |
| 0x031331 | EM 2 Verbrennerfern - Kommunikation - Signale DME ungültig oder ausgefallen | 0 | - |
| 0x031332 | EM 2 Verbrennerfern - Kommunikation - Signale HV-Speicher/SME ungültig oder ausgefallen | 0 | - |
| 0x03133C | EM 2 Verbrennerfern - Phasenleitungen - Offene Leitung Phase U | 0 | - |
| 0x03133D | EM 2 Verbrennerfern - Phasenleitungen - Offene Leitung Phase V | 0 | - |
| 0x03133E | EM 2 Verbrennerfern - Phasenleitungen - Offene Leitung Phase W | 0 | - |
| 0x031400 | Inverter 1 Verbrennernah - Spannung Gatetreiber - Oberer Schwellenwert überschritten | 0 | - |
| 0x031401 | Inverter 1 Verbrennernah - Spannung Gatetreiber - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031402 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Kurzschluss nach Plus | 0 | - |
| 0x031403 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Kurzschluss nach Masse | 0 | - |
| 0x031404 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | - |
| 0x031405 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031407 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - HW Überspannung | 0 | - |
| 0x03140F | Inverter 1 Verbrennernah - Stromsensoren - Summenstrom der 3 Phasen unplausibel | 0 | - |
| 0x031410 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Kurzschluss nach Plus | 0 | - |
| 0x031411 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Kurzschluss nach Masse | 0 | - |
| 0x031412 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Oberer Schwellenwert überschritten | 0 | - |
| 0x031413 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031416 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offset unplausibel | 0 | - |
| 0x031418 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Kurzschluss nach Plus | 0 | - |
| 0x031419 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Kurzschluss nach Masse | 0 | - |
| 0x03141A | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Oberer Schwellenwert überschritten | 0 | - |
| 0x03141B | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03141E | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offset unplausibel | 0 | - |
| 0x031420 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Kurzschluss nach Plus | 0 | - |
| 0x031421 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Kurzschluss nach Masse | 0 | - |
| 0x031422 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Oberer Schwellenwert überschritten | 0 | - |
| 0x031423 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031426 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offset unplausibel | 0 | - |
| 0x031428 | Inverter 1 Verbrennernah - Stromsensoren - Zwischenkreis - Kurzschluss nach Plus | 0 | - |
| 0x031429 | Inverter 1 Verbrennernah - Stromsensoren - Zwischenkreis - Kurzschluss nach Masse | 0 | - |
| 0x03142A | Inverter 1 Verbrennernah - Stromsensoren - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | - |
| 0x03142B | Inverter 1 Verbrennernah - Stromsensoren - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03142D | Inverter 1 Verbrennernah - Stromsensoren - Zwischenkreis - Signal unplausibel | 0 | - |
| 0x03142F | Inverter 1 Verbrennernah - Temperaturensensor(en) - min. 2 Sensoren defekt | 0 | - |
| 0x031438 | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Kurzschluss nach Plus | 0 | - |
| 0x031439 | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Kurzschluss nach Masse | 0 | - |
| 0x03143A | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Oberer Schwellenwert überschritten | 0 | - |
| 0x03143B | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03143D | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x03143E | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Kurzschluss nach Plus | 0 | - |
| 0x03143F | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Kurzschluss nach Masse | 0 | - |
| 0x031440 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Oberer Schwellenwert überschritten | 0 | - |
| 0x031441 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031443 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031444 | Inverter 1 Verbrennernah - Temperatursensor - Phase V 2 - Kurzschluss nach Plus | 0 | - |
| 0x031445 | Inverter 1 Verbrennernah - Temperatursensor - Phase V 2 - Kurzschluss nach Masse | 0 | - |
| 0x031446 | Inverter 1 Verbrennernah - Temperatursensor - Phase V 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031447 | Inverter 1 Verbrennernah - Temperatursensor - Phase V 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031449 | Inverter 1 Verbrennernah - Temperatursensor - Phase V 2 - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x03144A | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Kurzschluss nach Plus | 0 | - |
| 0x03144B | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Kurzschluss nach Masse | 0 | - |
| 0x03144C | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Oberer Schwellenwert überschritten | 0 | - |
| 0x03144D | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03144F | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031542 | Inverter 2 Verbrennerfern - Spannungssensor - Zwischenkreis - Kurzschluss nach Plus | 0 | - |
| 0x031543 | Inverter 2 Verbrennerfern - Spannungssensor - Zwischenkreis - Kurzschluss nach Masse | 0 | - |
| 0x031544 | Inverter 2 Verbrennerfern - Spannungssensor - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | - |
| 0x031545 | Inverter 2 Verbrennerfern - Spannungssensor - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031547 | Inverter 2 Verbrennerfern - Spannungssensor - Zwischenkreis - HW Überspannung | 0 | - |
| 0x031548 | Inverter 2 Verbrennerfern - Spannungssensor - Zwischenkreis - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031549 | Inverter 2 Verbrennerfern - Stromsensoren - Summenstrom der 3 Phasen unplausibel | 0 | - |
| 0x03154A | Inverter 2 Verbrennerfern - Stromsensoren - HW-Phasenüberstrom | 0 | - |
| 0x03154B | Inverter 2 Verbrennerfern - Stromsensoren - Phase U - Kurzschluss nach Plus | 0 | - |
| 0x03154C | Inverter 2 Verbrennerfern - Stromsensoren - Phase U - Kurzschluss nach Masse | 0 | - |
| 0x03154D | Inverter 2 Verbrennerfern - Stromsensoren - Phase U - Oberer Schwellenwert überschritten | 0 | - |
| 0x03154E | Inverter 2 Verbrennerfern - Stromsensoren - Phase U - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031550 | Inverter 2 Verbrennerfern - Stromsensoren - Phase U - Offset unplausibel | 0 | - |
| 0x031553 | Inverter 2 Verbrennerfern - Stromsensoren - Phase V - Kurzschluss nach Plus | 0 | - |
| 0x031554 | Inverter 2 Verbrennerfern - Stromsensoren - Phase V - Kurzschluss nach Masse | 0 | - |
| 0x031555 | Inverter 2 Verbrennerfern - Stromsensoren - Phase V - Oberer Schwellenwert überschritten | 0 | - |
| 0x031556 | Inverter 2 Verbrennerfern - Stromsensoren - Phase V - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031559 | Inverter 2 Verbrennerfern - Stromsensoren - Phase V - Offset unplausibel | 0 | - |
| 0x03155B | Inverter 2 Verbrennerfern - Stromsensoren - Phase W - Kurzschluss nach Plus | 0 | - |
| 0x03155C | Inverter 2 Verbrennerfern - Stromsensoren - Phase W - Kurzschluss nach Masse | 0 | - |
| 0x03155D | Inverter 2 Verbrennerfern - Stromsensoren - Phase W - Oberer Schwellenwert überschritten | 0 | - |
| 0x03155E | Inverter 2 Verbrennerfern - Stromsensoren - Phase W - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031560 | Inverter 2 Verbrennerfern - Stromsensoren - Phase W - Offset unplausibel | 0 | - |
| 0x031563 | Inverter 2 Verbrennerfern - Stromsensor - Zwischenkreis - Kurzschluss nach Plus | 0 | - |
| 0x031564 | Inverter 2 Verbrennerfern - Stromsensor - Zwischenkreis - Kurzschluss nach Masse | 0 | - |
| 0x031565 | Inverter 2 Verbrennerfern - Stromsensor - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | - |
| 0x031566 | Inverter 2 Verbrennerfern - Stromsensor - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031568 | Inverter 2 Verbrennerfern - Stromsensor - Zwischenkreis - Signal unplausibel | 0 | - |
| 0x031571 | Inverter 2 Verbrennerfern - Temperatursensor - Phase U - Kurzschluss nach Plus | 0 | - |
| 0x031572 | Inverter 2 Verbrennerfern - Temperatursensor - Phase U - Kurzschluss nach Masse | 0 | - |
| 0x031573 | Inverter 2 Verbrennerfern - Temperatursensor - Phase U - Oberer Schwellenwert überschritten | 0 | - |
| 0x031574 | Inverter 2 Verbrennerfern - Temperatursensor - Phase U - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031576 | Inverter 2 Verbrennerfern - Temperatursensor - Phase U - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031577 | Inverter 2 Verbrennerfern - Temperatursensor - Phase V - Kurzschluss nach Plus | 0 | - |
| 0x031578 | Inverter 2 Verbrennerfern - Temperatursensor - Phase V - Kurzschluss nach Masse | 0 | - |
| 0x031579 | Inverter 2 Verbrennerfern - Temperatursensor - Phase V - Oberer Schwellenwert überschritten | 0 | - |
| 0x03157A | Inverter 2 Verbrennerfern - Temperatursensor - Phase V - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03157C | Inverter 2 Verbrennerfern - Temperatursensor - Phase V - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x03157D | Inverter 2 Verbrennerfern - Temperatursensor - Phase V 2 - Kurzschluss nach Plus | 0 | - |
| 0x03157E | Inverter 2 Verbrennerfern - Temperatursensor - Phase V 2 - Kurzschluss nach Masse | 0 | - |
| 0x03157F | Inverter 2 Verbrennerfern - Temperatursensor - Phase V 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031580 | Inverter 2 Verbrennerfern - Temperatursensor - Phase V 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031582 | Inverter 2 Verbrennerfern - Temperatursensor - Phase V 2 - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031583 | Inverter 2 Verbrennerfern - Temperatursensor - Phase W - Kurzschluss nach Plus | 0 | - |
| 0x031584 | Inverter 2 Verbrennerfern - Temperatursensor - Phase W - Kurzschluss nach Masse | 0 | - |
| 0x031585 | Inverter 2 Verbrennerfern - Temperatursensor - Phase W - Oberer Schwellenwert überschritten | 0 | - |
| 0x031586 | Inverter 2 Verbrennerfern - Temperatursensor - Phase W - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031588 | Inverter 2 Verbrennerfern - Temperatursensor - Phase W - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031589 | Inverter 2 Verbrennerfern - Temperatursensor(en) - min. 2 Sensoren defekt | 0 | - |
| 0x031680 | Notlaufmanager - Folgefehler - EM 2 - Aktiver Kurzschluss zu lange aktiv | 1 | - |
| 0x031681 | Notlaufmanager - Folgefehler - EM 2 - Fehler und Klauenkupplung geschlossen | 1 | - |
| 0x031682 | Notlaufmanager - Ersatzwertberechnung - DSC - Fahrzeuggeschwindigkeit | 0 | - |
| 0x031683 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl hinten links | 0 | - |
| 0x031684 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl hinten rechts | 0 | - |
| 0x031685 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl vorn links | 0 | - |
| 0x031686 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl vorn rechts | 0 | - |
| 0x031687 | Notlaufmanager - Ersatzwertberechnung - EGS - Gesamtübersetzung | 0 | - |
| 0x031688 | Notlaufmanager - Ersatzwertberechnung - EM 1 - Verlustleistung | 0 | - |
| 0x031689 | Notlaufmanager - Ersatzwertberechnung - EM 2 - Istdrehrichtung | 0 | - |
| 0x03168A | Notlaufmanager - Ersatzwertberechnung - EM 2 - Verlustleistung | 0 | - |
| 0x03168B | Notlaufmanager - Externe Signaldiagnose - DSC - Status ABS | 0 | - |
| 0x03168C | Notlaufmanager - Externe Signaldiagnose - EGS - Abtriebsdrehzahl | 0 | - |
| 0x03168D | Notlaufmanager - Externe Signaldiagnose - Gesamtübersetzung | 0 | - |
| 0x03168E | Notlaufmanager - Externe Signaldiagnose - Übersetzung Hinterachse | 0 | - |
| 0x03168F | Notlaufmanager - Externe Signaldiagnose - DME - Drehzahl Kurbelwelle | 0 | - |
| 0x031690 | Notlaufmanager - Externe Signaldiagnose - DME - Fahrbereitschaft | 0 | - |
| 0x031691 | Notlaufmanager - Externe Signaldiagnose - DME - Fahrpedalwinkel | 0 | - |
| 0x031692 | Notlaufmanager - Externe Signaldiagnose - DME - Fahrpedalwinkel virtuell | 0 | - |
| 0x031693 | Notlaufmanager - Externe Signaldiagnose - DME - Ist-Zustand Antrieb | 0 | - |
| 0x031694 | Notlaufmanager - Externe Signaldiagnose - DME - Maximales Moment VM | 0 | - |
| 0x031695 | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Betriebsart EM 1 | 0 | - |
| 0x031696 | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Betriebsart EM 2 | 0 | - |
| 0x031697 | Notlaufmanager - Externe Signaldiagnose - DME - Solldrehrichtung EM 2 | 0 | - |
| 0x031698 | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Drehzahl EM 1 | 0 | - |
| 0x031699 | Notlaufmanager - Externe Signaldiagnose - DME - Sollmoment EM 1 | 0 | - |
| 0x03169A | Notlaufmanager - Externe Signaldiagnose - DME - Sollmoment EM 2 | 0 | - |
| 0x03169B | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Zustand Antrieb | 0 | - |
| 0x03169C | Notlaufmanager - Externe Signaldiagnose - DME - Startleistung VM | 0 | - |
| 0x03169D | Notlaufmanager - Externe Signaldiagnose - DME - Wunsch-Zustand Antrieb | 0 | - |
| 0x03169E | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Ladezustand | 0 | - |
| 0x03169F | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Spannung | 0 | - |
| 0x0316A0 | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Strom | 0 | - |
| 0x0316A1 | Notlaufmanager - Externe Signaldiagnose - SME - Maximaler Ladestrom | 0 | - |
| 0x0316A2 | Notlaufmanager - Externe Signaldiagnose - SME - Maximaler oder minimaler Ladezustand | 0 | - |
| 0x0316A3 | Notlaufmanager - Externe Signaldiagnose - SME - Minimaler Entladestrom | 0 | - |
| 0x0316A4 | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert | 0 | - |
| 0x0316A7 | Notlaufmanager - Folgefehler - EGS - mechanischer Notlauf | 1 | - |
| 0x0316A8 | Notlaufmanager - Folgefehler - ELUP - Ausgefallen | 1 | - |
| 0x0316A9 | Notlaufmanager - Folgefehler - Klauenkupplung - Fehler Ganghänger im 1. Gang | 1 | - |
| 0x0316AA | Notlaufmanager - Folgefehler - Klauenkupplung - Gang 1 nicht möglich | 0 | - |
| 0x0316AB | Notlaufmanager - Folgefehler - Klauenkupplung - Unbekannter Gang Getriebe | 1 | - |
| 0x0316AC | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Hardwarefehler | 1 | - |
| 0x0316AD | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Überspannung | 1 | - |
| 0x0316AE | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Übertemperatur | 1 | - |
| 0x0316AF | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - zu hohen Stroms | 1 | - |
| 0x0316B1 | Notlaufmanager - Folgefehler - DME - Drehzahl reduzieren EM 2 | 0 | - |
| 0x0316B2 | Notlaufmanager - Folgefehler - DME - HV Verbraucher deaktivieren | 1 | - |
| 0x0316B3 | Notlaufmanager - Folgefehler - DME - HV Verbraucher reduzieren | 0 | - |
| 0x0316B5 | Notlaufmanager - Folgefehler - DME - Momentenreduzierung EM 1 | 1 | - |
| 0x0316B6 | Notlaufmanager - Folgefehler - DME - Moment reduzieren EM 2 | 0 | - |
| 0x0316B7 | Notlaufmanager - Folgefehler - DME - NV Verbraucher reduzieren | 0 | - |
| 0x0316B8 | Notlaufmanager - Folgefehler - DME - SOC Hold Betrieb | 0 | - |
| 0x0316B9 | Notlaufmanager - Folgefehler - DME - Steuergerätausfall | 1 | - |
| 0x0316BA | Notlaufmanager - Folgefehler - EM 1 - Aktiver Kurzschluss | 1 | - |
| 0x0316BB | Notlaufmanager - Folgefehler - EM 1 - Aktiver Kurzschluss und Übertemperatur | 1 | - |
| 0x0316BC | Notlaufmanager - Folgefehler - EM 1 - EM defekt und VM an | 1 | - |
| 0x0316BD | Notlaufmanager - Folgefehler - EM 1 - EM defekt und VM aus | 1 | - |
| 0x0316BE | Notlaufmanager - Folgefehler - EM 1 - Fehler Rotorlagesensor | 1 | - |
| 0x0316BF | Notlaufmanager - Folgefehler - EM 1 - Freilauf aktiv | 1 | - |
| 0x0316C0 | Notlaufmanager - Folgefehler - EM 1 - Hardware Fehler | 1 | - |
| 0x0316C1 | Notlaufmanager - Folgefehler - EM 1 - Null-Momentenanforderung | 1 | - |
| 0x0316C2 | Notlaufmanager - Folgefehler - EM 1 - Temperaturfehler China | 1 | - |
| 0x0316C3 | Notlaufmanager - Folgefehler - EM 1 - Temperaturfehler Inverter 1 | 1 | - |
| 0x0316C4 | Notlaufmanager - Folgefehler - EM 1 - Überschreitung max. Drehzahl | 0 | - |
| 0x0316C5 | Notlaufmanager - Folgefehler - EM 1 - Übertemperatur | 1 | - |
| 0x0316C6 | Notlaufmanager - Folgefehler - EM 2 - Aktiver Kurzschluss | 1 | - |
| 0x0316C7 | Notlaufmanager - Folgefehler - EM 2 - Aktiver Kurzschluss und Übertemperatur | 1 | - |
| 0x0316C8 | Notlaufmanager - Folgefehler - EM 2 - Aktive Schwindungsdämpfung | 1 | - |
| 0x0316C9 | Notlaufmanager - Folgefehler - EM 2 - Fehler Rotorlagesensor | 1 | - |
| 0x0316CA | Notlaufmanager - Folgefehler - EM 2 - Freilauf aktiv | 1 | - |
| 0x0316CB | Notlaufmanager - Folgefehler - EM 2 - Hardware Fehler | 1 | - |
| 0x0316CC | Notlaufmanager - Folgefehler - EM 2 - Null-Momentenanforderung | 1 | - |
| 0x0316CD | Notlaufmanager - Folgefehler - EM 2 - Temperaturfehler Inverter 2 | 1 | - |
| 0x0316CE | Notlaufmanager - Folgefehler - EM 2 - Überschreitung max. Drehzahl | 1 | - |
| 0x0316CF | Notlaufmanager - Folgefehler - EM 2 - Übertemperatur | 1 | - |
| 0x0316D0 | Notlaufmanager - Folgefehler - SME - Erkennung Service Disconnect AE | 1 | - |
| 0x0316D1 | Notlaufmanager - Folgefehler - SME - Kategorie 1 Fehler | 1 | - |
| 0x0316D2 | Notlaufmanager - Folgefehler - SME - Kategorie 2 Fehler | 1 | - |
| 0x0316D3 | Notlaufmanager - Folgefehler - SME - Kategorie 3 Fehler | 1 | - |
| 0x0316D4 | Notlaufmanager - Folgefehler - SME - Kategorie 4 Fehler | 1 | - |
| 0x0316D5 | Notlaufmanager - Folgefehler - SME - Kategorie 5 Fehler | 1 | - |
| 0x0316D6 | Notlaufmanager - Folgefehler - SME - Kategorie 6 Fehler | 1 | - |
| 0x0316D7 | Notlaufmanager - Folgefehler - SME - Kategorie 7 Fehler | 1 | - |
| 0x0316D8 | Notlaufmanager - Folgefehler - SME - niedriger Ladezustand oder geringe Reichweite | 1 | - |
| 0x0316D9 | Notlaufmanager - Folgefehler - SME - Steuergerätausfall | 1 | - |
| 0x0316DA | Notlaufmanager - Folgefehler - SME - Thermisches Ereignis | 0 | - |
| 0x0316DB | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Betriebsart | 0 | - |
| 0x0316DC | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Drehzahl | 0 | - |
| 0x0316DD | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Moment | 0 | - |
| 0x0316DE | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Spannung | 0 | - |
| 0x0316DF | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Strom | 0 | - |
| 0x0316E0 | Notlaufmanager - Interne Signaldiagnose - EM 1- Maximales generatorisches Moment | 0 | - |
| 0x0316E1 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximales motorisches Moment | 0 | - |
| 0x0316E2 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximale Verlustleistung generatorisch | 0 | - |
| 0x0316E3 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximale Verlustleistung motorisch | 0 | - |
| 0x0316E4 | Notlaufmanager - Interne Signaldiagnose - EM 2 - Ist-Betriebsart | 0 | - |
| 0x0316E5 | Notlaufmanager - Interne Signaldiagnose - EM 2 - Ist-Drehzahl | 0 | - |
| 0x0316E6 | Notlaufmanager - Interne Signaldiagnose - EM 2 - Ist-Moment | 0 | - |
| 0x0316E7 | Notlaufmanager - Interne Signaldiagnose - EM 2 - Maximales generatorisches Moment | 0 | - |
| 0x0316E8 | Notlaufmanager - Interne Signaldiagnose - EM 2 - Maximales motorisches Moment | 0 | - |
| 0x0316E9 | Notlaufmanager - Interne Signaldiagnose - EM 2 - Maximale Verlustleistung generatorisch | 0 | - |
| 0x0316EA | Notlaufmanager - Interne Signaldiagnose - EM 2 - Maximale Verlustleistung motorisch | 0 | - |
| 0x0316EB | Notlaufmanager - Folgefehler - EM 1 - Stecker überhitzt | 0 | - |
| 0x0316EC | Notlaufmanager - Folgefehler - DME - Drehzahl reduzieren EM 1 | 0 | - |
| 0x0316ED | Notlaufmanager - Folgefehler - ELUP - Ausgefallen und kein VM Start möglich | 0 | - |
| 0x0317C0 | FuSi - HV - Abschaltpfadtest - Sammelfehler | 0 | - |
| 0x0317C2 | FuSi - HV - Crash Softwaresignal | 0 | - |
| 0x0317C3 | FuSi - HV - Fehler aktive Entladung | 0 | - |
| 0x0317C4 | FuSi - HV - Hochvoltkreis offen | 0 | - |
| 0x0317C5 | FuSi - HV - Crash Klemme 30C | 0 | - |
| 0x0317C6 | FuSi - HV - Maximale Spannung in Hochvoltsystem überschritten | 0 | - |
| 0x0317C7 | FuSi - HV - Kurzschluss DC-Seite | 0 | - |
| 0x0317C8 | FuSi - HV - Inverter 1 - Kurzschluss AC-Seite | 0 | - |
| 0x0317CA | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von DME (Drehmoment Kurbelwelle 1) | 1 | - |
| 0x0317CB | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von DME (Kurbelwelle Drehmoment Daten Hybrid) | 1 | - |
| 0x0317CC | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von EGS (Drehmoment Getriebe Hybrid) | 1 | - |
| 0x0317CD | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert wegen fehlerhafte DME kommunikation | 1 | - |
| 0x0317CF | FuSi - LD - Abschaltung FWP - Sicherer Zustand angefordert von DME (Kurbelwelle Drehmoment Daten Hybrid) | 1 | - |
| 0x0317D0 | FuSi - LD - Abschaltung FWP - Sicherer Zustand angefordert von EGS (Drehmoment Getriebe Hybrid) | 1 | - |
| 0x0317D1 | FuSi - LD - BWP - Sicherer Zustand angefordert wegen Sammelfehler Momentengrenzen | 0 | - |
| 0x0317D2 | FuSi - LD - FWP - Sicherer Zustand angefordert wegen Sammelfehler Momentengrenzen | 0 | - |
| 0x0317D3 | FuSi - LD - Klauenkupplung - BWP - Sicherer Zustand angefordert | 0 | - |
| 0x0317D4 | FuSi - LD - Klauenkupplung - FWP - Sicherer Zustand angefordert | 0 | - |
| 0x0317D5 | FuSi - LD - Radblockiererkennung - Sicherer Zustand angefordert | 0 | - |
| 0x0317D6 | FuSi - HV - HVIL - Eingang kurzgeschlossen zu Masse oder Ausgang kurzgeschlossen zu Batterie | 0 | - |
| 0x0317D7 | FuSi - HV - HVIL - Eingang kurzgeschlossen zu Batterie oder Ausgang kurzgeschlossen zu Masse | 0 | - |
| 0x0317D9 | FuSi - HV - Ausfall Überlastschutz (Lader) | 0 | - |
| 0x0317DA | FuSi - HV - Inverter 2 - Kurzschluss AC-Seite | 0 | - |
| 0x0317DB | FuSi - HV - Inverter 1 - Überlast Kabelbaum - AC-Seite | 0 | - |
| 0x0317DC | FuSi - HV - Inverter 2 - Überlast Kabelbaum - AC | 0 | - |
| 0x22232E | Inverter 2 Verbrennerfern - Stromsensoren - HW-Überstrom - Phase W | 0 | - |
| 0x22232F | Inverter 2 Verbrennerfern - Stromsensoren - HW-Überstrom - Phase V | 0 | - |
| 0x22233D | Inverter 2 Verbrennerfern - IGBT - Desaturierung & Unterspannung | 0 | - |
| 0x22233E | Inverter 2 Verbrennerfern - IGBT - mehrfache Entsättigung | 0 | - |
| 0x22233F | Inverter 2 Verbrennerfern - IGBT - Gatetreiber Unterspannung | 0 | - |
| 0x22234A | Inverter 2 Verbrennerfern - IGBT - untere Phase W - Entsättigung | 0 | - |
| 0x22234B | Inverter 2 Verbrennerfern - IGBT - obere Phase W - Entsättigung | 0 | - |
| 0x22234C | Inverter 2 Verbrennerfern - IGBT - untere Phase V - Entsättigung | 0 | - |
| 0x22234D | Inverter 2 Verbrennerfern - IGBT - obere Phase V - Entsättigung | 0 | - |
| 0x22234E | Inverter 2 Verbrennerfern - IGBT - untere Phase U - Entsättigung | 0 | - |
| 0x22234F | Inverter 2 Verbrennerfern - IGBT - obere Phase U - Entsättigung | 0 | - |
| 0x222387 | EM 1 Verbrennernah - Motor Control - Unplausibel | 0 | - |
| 0x222389 | Inverter 1 Verbrennernah - IGBT - Desaturierung & Unterspannung | 0 | - |
| 0x22238A | Inverter 1 Verbrennernah - IGBT - mehrfache Entsättigung | 0 | - |
| 0x22238B | Inverter 1 Verbrennernah - IGBT - Gatetreiber Unterspannung | 0 | - |
| 0x22238C | Inverter 1 Verbrennernah - IGBT - untere Phase W - Entsättigung | 0 | - |
| 0x22238D | Inverter 1 Verbrennernah - IGBT - obere Phase W - Entsättigung | 0 | - |
| 0x22238E | Inverter 1 Verbrennernah - IGBT - untere Phase V - Entsättigung | 0 | - |
| 0x22238F | Inverter 1 Verbrennernah - IGBT - obere Phase V - Entsättigung | 0 | - |
| 0x222390 | Inverter 1 Verbrennernah - IGBT - untere Phase U - Entsättigung | 0 | - |
| 0x222391 | Inverter 1 Verbrennernah - IGBT - obere Phase U - Entsättigung | 0 | - |
| 0x22239F | Inverter 1 Verbrennernah - Stromsensoren - Phase W - HW-Phasenüberstrom | 0 | - |
| 0x2223A0 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - HW-Phasenüberstrom | 0 | - |
| 0x2223A1 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - HW-Phasenüberstrom | 0 | - |
| 0x22260C | Spannungsversorgung - Sensor - Hochvolt - Überspannung | 1 | - |
| 0x22260D | Spannungsversorgung - Sensor - Hochvolt - Unterspannung | 1 | - |
| 0x222610 | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Überspannung | 0 | - |
| 0x222611 | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Unterspannung | 0 | - |
| 0x22276A | Steuergerät intern - RAM Error | 0 | - |
| 0x222777 | Main Dogclutch Safe-State Test Fail | 0 | - |
| 0x222778 | Main LD TEM Motor Safe-State Test Fail | 0 | - |
| 0x222800 | HVPM - Laden - Dauerbetätigung Entriegelungstaster bei Typ1-Stecker | 1 | - |
| 0x222805 | HVPM - Laden - Abstellen der Ladehardware z.B. Aufgrund von Netzstörungen | 1 | - |
| 0x222806 | HVPM - Laden - Signalausfall laderelevanter Signale seitens SME | 1 | - |
| 0x22280F | HVPM - Start - HV Batterie - Isolationsfehler | 1 | - |
| 0x222810 | HVPM - Laden - Charge-Enable-Leitung - elektrischer Fehler | 1 | - |
| 0x222812 | HVPM - Start - Crash: Zündpille aktiviert | 1 | - |
| 0x222813 | HVPM - Start - HV Erstfreigabe erfolgt | 1 | - |
| 0x222814 | HVPM - Start - HV Batterie, Isolationswarnung | 1 | - |
| 0x222815 | HVPM - Start - HV Zwischenkreis trotz Anforderung nicht spannungsfrei | 1 | - |
| 0x222816 | HVPM - Start - Interlock unterbrochen | 1 | - |
| 0x222817 | HVPM - Start - HV Batterie - einfacher Schuetzkleber | 1 | - |
| 0x222818 | HVPM - Start - HV-batterieloser Betrieb wird verhindert aufgrund Schützkleber | 1 | - |
| 0x222819 | HVPM - Laden - Unterversorgung 12V-Bordnetz | 1 | - |
| 0x22281A | HVPM - Start - Crash durch externen Crashsensor über CAN detektiert | 1 | - |
| 0x22281B | HVPM - Start - HV Batterie - doppelter Schuetzkleber | 1 | - |
| 0x22281C | HVPM - Start - Keine HV-Freigabe trotz Anforderung | 1 | - |
| 0x22281F | HVPM - Laden -  Klappe der Lade-Buchse offen | 1 | - |
| 0x222821 | HVPM - Laden - AC-Laden nicht möglich | 1 | - |
| 0x222826 | HVPM - Laden - Laden mit reduzierte Leistung | 1 | - |
| 0x222831 | HVPM - Start - Hochvoltsystem abgeschaltet | 1 | - |
| 0x222832 | HVPM - Laden - Ladekabel pruefen | 1 | - |
| 0x222833 | HVPM - Laden - Netzleistung zu gering | 1 | - |
| 0x222834 | HVPM - Laden - Laden nicht moeglich | 1 | - |
| 0x22283A | HVPM - Laden - Ladeziel nicht erreichbar bei gestelltem Wochentimer | 1 | - |
| 0x22283B | HVPM - Start - HV Power Down aufgrund niedrigem Ladezustand Hochvoltbatterie | 1 | - |
| 0x22283F | HVPM - Laden - AC Spannung fehlt nach Ladebeginn | 1 | - |
| 0x222841 | HVPM - Laden - Ladegerät in Failsafe | 1 | - |
| 0x222842 | HVPM - Laden - Ladefehler | 1 | - |
| 0x222843 | HVPM - Laden - Ladeziel nicht erreichbar Leistung des Ladegeräts zu gering | 1 | - |
| 0x222846 | HVPM - Laden - Ladestoerung | 1 | - |
| 0x222847 | HVPM - Laden - Pilotsignal ungueltig | 1 | - |
| 0x222848 | HVPM - Laden - Pilotsignal ungueltig ausserhalb Ladebereitschaft | 1 | - |
| 0x222849 | HVPM - Laden - Vorkonditionierung nicht moglich | 1 | - |
| 0x222870 | HVPM - Start - Wichtige Signale der Leistungselektronik ungültig oder nicht empfangen | 1 | - |
| 0x222871 | HVPM - Start - Wichtige Signale der HV-Batterie ungültig oder nicht empfangen | 1 | - |
| 0x222876 | HVPM - Laden - Kommunikation mit LIM oder Ladestation fehlerhaft | 1 | - |
| 0x22287E | HVPM - Laden - Netzspannung vorhanden obwohl keine Ladebereitschaft | 1 | - |
| 0x222884 | Notlaufmanager - Folgefehler - DME - HV Verbraucher reduzieren | 1 | - |
| 0x2228C1 | HVPM - Laden - Ladegerät Fehler Vorladung | 1 | - |
| 0x2228C6 | Werksmodus eFahren zur Überführung aktiv | 0 | - |
| 0x2228C7 | Werksmodus Fahrdynamische Prüfung aktiv | 0 | - |
| 0x2228FE | HVPM - Laden - Heizen/Kühlen im Stand nicht möglich | 1 | - |
| 0x222A08 | BUDS - Spannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x222A0A | BUDS - Spannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x222B4A | BUDS - Oberer Schwellenwert überschritten | 0 | - |
| 0x222B4B | BUDS - Unterer Schwellenwert unterschritten | 0 | - |
| 0x222B70 | KV-IR - Kältemittelabsperrventil - Kurzschluss nach Masse | 0 | - |
| 0x222B71 | KV-IR - Kältemittelabsperrventil - Leitungsunterbrechung | 0 | - |
| 0x222B72 | KV-IR - Kältemittelabsperrventil - Kurzschluss nach Plus oder Übertemperatur | 0 | - |
| 0x222BA6 | BUDS - Versorgungsleitung - Oberer Schwellenwert überschritten | 0 | - |
| 0x222BA7 | BUDS - Versorgungsleitung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x222BA8 | BUDS - Versorgungsleitung - Kurzschluss nach Plus | 0 | - |
| 0x222BA9 | BUDS - Versorgungsleitung - Kurzschluss nach Masse | 0 | - |
| 0x222BAA | BUDS - Masseleitung - Kurzschluss nach Plus | 0 | - |
| 0x222C02 | EWS - Manipulationsschutz - erwartete Antwort unplausibel | 0 | - |
| 0x222C03 | EWS - Leistungselektronik durch EWS gesperrt | 0 | - |
| 0x222C07 | Betriebsstrategie, interner Fehler, HVIL: Fehlerhaftes Signal | 0 | - |
| 0x222C08 | Montagemodus aktiv | 0 | - |
| 0x222DE0 | Klauenkupplung - Aktuator - Kurzschluss nach Masse | 0 | - |
| 0x222DE1 | Klauenkupplung - Aktuator - Kurzschluss nach Plus | 0 | - |
| 0x222DE2 | Klauenkupplung - Aktuator - Leitungsbruch | 0 | - |
| 0x222DE3 | Klauenkupplung - Aktuator - Stromsensor 1 - Strom außerhalb Grenzwert | 0 | - |
| 0x222DE4 | Klauenkupplung - Positionssensor - Positionssignal Kurzschluss nach Plus | 0 | - |
| 0x222DE5 | Klauenkupplung - Positionssensor - Positionssignal Kurzschluss nach Masse | 0 | - |
| 0x222DE6 | Klauenkupplung - Positionssensor - Positionssignal Leitungsbruch | 0 | - |
| 0x222DE7 | Klauenkupplung - Positionssensor - Positionssignal Frequenz/Periode außerhalb Grenzwert | 0 | - |
| 0x222DE8 | Klauenkupplung - Positionssensor - Spannungsversorgung über Maximum | 0 | - |
| 0x222DE9 | Klauenkupplung - Positionssensor - Spannungsversorgung unter Minimum | 0 | - |
| 0x222DEA | Klauenkupplung - Positionssensor - Spannungsversorgung negativer Pol: Kurzschluss zu B+ | 0 | - |
| 0x222DEB | Klauenkupplung - Treiber - Übertemperatur | 0 | - |
| 0x222F00 | DC/DC-Wandler - Temperatursensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x222F01 | DC/DC-Wandler - Temperatursensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x222F02 | DC/DC-Wandler - Temperatursensor 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x222F03 | DC/DC-Wandler - Temperatursensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x222F04 | DC/DC-Wandler - HV-Spannungssensor - Bauteilschutz | 0 | - |
| 0x222F05 | DC/DC-Wandler - HV-Stromsensor - Bauteilschutz | 0 | - |
| 0x222F11 | Klauenkupplung - Manager - Schließen nicht möglich | 0 | - |
| 0x222F12 | Klauenkupplung - Manager - Öffnen nicht möglich | 0 | - |
| 0x222F13 | Klauenkupplung - Manager - Ungewollt ausgelegt | 0 | - |
| 0x222F14 | Klauenkupplung - Manager - Ungewollt eingelegt | 0 | - |
| 0x222F15 | Klauenkupplung - Manager - Position und Drehzahldifferenz unplausibel | 0 | - |
| 0x222F16 | Klauenkupplung - Manager - PWM-Strom unplausibel | 0 | - |
| 0x222F17 | Klauenkupplung - Interner Sensorfehler | 0 | - |
| 0x222F18 | Klauenkupplung - Strom oberhalb Grenze | 0 | - |
| 0x222F19 | Klauenkupplung - Strom unterhalb Grenze | 0 | - |
| 0x222F75 | Klauenkupplung - Koordinator - Drehzahlüberwachung während Gangeinlegen | 0 | - |
| 0x222F76 | Klauenkupplung - Koordinator - Verstellgeschwindigkeit Drehzahl EM 2 zu gering | 0 | - |
| 0x222F77 | Klauenkupplung - Koordinator - Timeout Lastfreiheit | 1 | - |
| 0x222F78 | Klauenkupplung - Koordinator - Andrehen EM 2 im Stillstand nicht möglich | 0 | - |
| 0x222F79 | Klauenkupplung - Koordinator - ungültige Ganganforderung | 0 | - |
| 0x222F7B | HVPM - Laden - Werksladen aktiv | 1 | - |
| 0x222F8A | DC/DC-Wandler - HV-Stromsensor - Plausibilitätsfehler 2 | 0 | - |
| 0x222F8D | DC/DC-Wandler - Temperatursensor 2 - Plausibilitätsfehler | 0 | - |
| 0x222F95 | Steuergerät intern - Software - Sammelfehler | 0 | - |
| 0x222F96 | Steuergerät intern - Software - Watchdog | 0 | - |
| 0x222F97 | Steuergerät intern - ROM Error | 0 | - |
| 0x222F98 | Steuergerät intern - EEPROM Fehler | 0 | - |
| 0x222F99 | Steuergerät intern - Hardware - Power Supply | 0 | - |
| 0x222F9A | Steuergerät intern - Hardware - Interne Kommunikationsfehler | 0 | - |
| 0x222F9C | Steuergerät intern - Hardware - Sammelfehler | 0 | - |
| 0x222FCC | BUDS - Sensorsignal Steckerverbindung - offene Leitung | 0 | - |
| 0x222FCE | BUDS - Sensor - Fehler Gradientenprüfung | 0 | - |
| 0x2231BA | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Kurzschluss nach Masse | 0 | - |
| 0x2231BB | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Kurzschluss nach Plus | 0 | - |
| 0x2231BC | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Plausibilitätsfehler | 0 | - |
| 0x2231BD | Spannungsversorgung - Sensor - Hochvolt - Plausibilitätsfehler | 1 | - |
| 0x2231BE | Spannungsversorgung - Sensor - Hochvolt - Kurzschluss nach Masse | 1 | - |
| 0x2231BF | Spannungsversorgung - Sensor - Hochvolt - Kurzschluss nach Plus | 1 | - |
| 0x22331D | Klauenkupplung - Aktuator - Plausiblitätsfehler | 0 | - |
| 0x22331E | Klauenkupplung - Stromsensor 2 - Plausibilitätsfehler | 0 | - |
| 0x22331F | Klauenkupplung - Koordinator - Schaltung nicht möglich - BA EM2 ungültig | 0 | - |
| 0x223320 | Klauenkupplung - Koordinator - Schaltung nicht möglich - Raddrehzahlen ungültig | 1 | - |
| 0x223321 | Klauenkupplung - Koordinator - Schaltung nicht möglich - Status Lastfreiheit ungültig | 1 | - |
| 0x223322 | Klauenkupplung - Koordinator - Schaltung nicht möglich - Min/Max-Momentengrenzen ungültig | 1 | - |
| 0x223323 | Klauenkupplung - Koordinator - Schaltung nicht möglich - Drehzahl EM2 ungültig | 0 | - |
| 0x223324 | Klauenkupplung - Koordinator - Schaltung nicht möglich - Fzg.-Geschwindigkeit ungültig | 1 | - |
| 0x223325 | Klauenkupplung - Koordinator - Schaltung nicht möglich - Stromsignal ungültig | 0 | - |
| 0x223326 | HVPM - Start - HV-Batterie - Isolationsfehler | 1 | - |
| 0x22335C | FuSi - Inverter 1 - Abschaltung - AKS angefordert | 0 | - |
| 0x223378 | Steuergerät intern - Controller Board - Termperatur - Oberer Schwellwert überschritten | 0 | - |
| 0x223379 | Steuergerät intern - Controller Board - Termperatur - Unterer Schwellwert unterschritten | 0 | - |
| 0x22337A | Steuergerät intern - Controller Board - Termperatur - Kurzschluss nach Plus | 0 | - |
| 0x22337B | Steuergerät intern - Controller Board - Termperatur - Kurzschluss nach Masse | 0 | - |
| 0x22337C | Steuergerät intern - Controller Board - Termperatur - Unplausibel - Absolut Value Test | 0 | - |
| 0x22337D | Steuergerät intern - Controller Board - Termperatur - Unplausibel - Stuck check | 0 | - |
| 0x22337E | HVPM - Start - Hochvoltsystem abgeschaltet | 1 | - |
| 0x22339A | ELUP - Eingangsspannung unplausibel | 0 | - |
| 0x2233A3 | TEM Dog Clutch Safe State Test Fail | 0 | - |
| 0x2233B5 | Klauenkupplung - Aktuator - Stromsensor 2 - Strom außerhalb Grenzwert | 0 | - |
| 0x2233B6 | BUDS - Sensor - Fehler Biasprüfung | 0 | - |
| 0x2233B9 | Inverter 1 Verbrennernah - Niedertemperatur Kreislauf - Kühlleistung unplausibel | 1 | - |
| 0x2233BA | Inverter 2 Verbrennerfern- Niedertemperatur Kreislauf - Kühlleistung unplausibel | 1 | - |
| 0xD78401 | FA-CAN Physikalischer Busfehler | 0 | - |
| 0xD7840A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xD78425 | FLEXRAY Bus 4 | 0 | - |
| 0xD78426 | FLEXRAY Controller Error Bus 4 | 0 | - |
| 0xD7847D | A-CAN Physikalischer Busfehler | 0 | - |
| 0xD78486 | A-CAN Control Module Bus OFF | 0 | - |
| 0xD78BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD79400 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) fehlt | 1 | - |
| 0xD79401 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) nicht aktuell | 1 | - |
| 0xD79402 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) Prüfsumme falsch | 1 | - |
| 0xD79404 | Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, ID: RQ_2_WMOM_PT_SUM_DRS) fehlt | 1 | - |
| 0xD79405 | Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, ID: RQ_2_WMOM_PT_SUM_DRS) nicht aktuell | 1 | - |
| 0xD79406 | Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, ID: RQ_2_WMOM_PT_SUM_DRS) Prüfsumme falsch | 1 | - |
| 0xD7940C | Botschaft (Anforderung Drehmoment Betriebsstrategie, ID: RQ_TORQ_OSTR) fehlt | 1 | - |
| 0xD79410 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) fehlt | 1 | - |
| 0xD79411 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) nicht aktuell | 1 | - |
| 0xD79412 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) Prüfsumme falsch | 1 | - |
| 0xD7941C | Botschaft (Anforderung Klima Hybrid, ID: RQ_AIC_HYB) fehlt | 1 | - |
| 0xD79420 | Botschaft (Anforderung Klimaanlage, ID: RQ_AIC) fehlt | 1 | - |
| 0xD79424 | Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, ID: RQ_WMOM_DRV_1_ELD_AW) fehlt | 1 | - |
| 0xD79425 | Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, ID: RQ_WMOM_DRV_1_ELD_AW) nicht aktuell | 1 | - |
| 0xD79426 | Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, ID: RQ_WMOM_DRV_1_ELD_AW) Prüfsumme falsch | 1 | - |
| 0xD79428 | Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, ID: RQ_WMOM_DRV_ELD_AW_2) fehlt | 1 | - |
| 0xD79429 | Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, ID: RQ_WMOM_DRV_ELD_AW_2) nicht aktuell | 1 | - |
| 0xD7942A | Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, ID: RQ_WMOM_DRV_ELD_AW_2) Prüfsumme falsch | 1 | - |
| 0xD7942C | Botschaft (Anforderung Radmoment Antrieb Stabilisierung elektrifizierter Allrad, ID: RQ_WMOM_DRV_STAB_ELD_AW) fehlt | 1 | - |
| 0xD7942D | Botschaft (Anforderung Radmoment Antrieb Stabilisierung elektrifizierter Allrad, ID: RQ_WMOM_DRV_STAB_ELD_AW) nicht aktuell | 1 | - |
| 0xD7942E | Botschaft (Anforderung Radmoment Antrieb Stabilisierung elektrifizierter Allrad, ID: RQ_WMOM_DRV_STAB_ELD_AW) Prüfsumme falsch | 1 | - |
| 0xD79430 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) fehlt | 1 | - |
| 0xD79431 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) nicht aktuell | 1 | - |
| 0xD79432 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) Prüfsumme falsch | 1 | - |
| 0xD79434 | Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, ID: RQ_WMOM_PT_SUM_STAB) fehlt | 1 | - |
| 0xD79435 | Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, ID: RQ_WMOM_PT_SUM_STAB) nicht aktuell | 1 | - |
| 0xD79436 | Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, ID: RQ_WMOM_PT_SUM_STAB) Prüfsumme falsch | 1 | - |
| 0xD7943C | Botschaft (Anzeige Drehzahl Motor Dynamisierung, ID: DISP_RPM_ENG_DYNS) fehlt | 1 | - |
| 0xD79444 | Botschaft (Anzeige Leistung Antrieb, ID: DISP_PWR_DRV) fehlt | 1 | - |
| 0xD79450 | Botschaft (Begrenzung Komfort Ladeelektronik, ID: LIM_KLE) fehlt | 1 | - |
| 0xD79454 | Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, ID: LIM_CHG_DCHG_HVSTO) fehlt | 1 | - |
| 0xD79458 | Botschaft (Daten Antriebsstrang 1, ID: DT_PT_1) fehlt | 1 | - |
| 0xD7945C | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) fehlt | 1 | - |
| 0xD7945D | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) nicht aktuell | 1 | - |
| 0xD7945E | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) Prüfsumme falsch | 1 | - |
| 0xD79460 | Botschaft (Daten Antriebsstrang 3, ID: DT_PT_3) fehlt | 1 | - |
| 0xD79464 | Botschaft (Daten Anzeige Getriebestrang, ID: DT_DISP_GRDT) fehlt | 1 | - |
| 0xD7946C | Botschaft (Daten elektrischer Durchlauferhitzer, ID: DT_EL_GEY) fehlt | 1 | - |
| 0xD79470 | Botschaft (Daten Getriebestrang, ID: DT_GRDT) fehlt | 1 | - |
| 0xD79474 | Botschaft (Daten Hochvoltspeicher 2, ID: DT_HVSTO_2) fehlt | 1 | - |
| 0xD79478 | Botschaft (Daten Hochvoltspeicher, ID: DT_HVSTO) fehlt | 1 | - |
| 0xD79488 | Botschaft (Diagnose OBD Motor, ID: DIAG_OBD_ENG) fehlt | 1 | - |
| 0xD79490 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 | - |
| 0xD79491 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) nicht aktuell | 1 | - |
| 0xD79492 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Prüfsumme falsch | 1 | - |
| 0xD794BC | Botschaft (Energieverbrauch Fehlerstatus Komfort Ladeelektronik, ID: ENERG_COSP_ERR_ST_KLE) fehlt | 1 | - |
| 0xD794C4 | Botschaft (EWS Dienst EME, ID: EWS_SVC_EME) fehlt | 1 | - |
| 0xD794D0 | Botschaft (Fahrzeugzustand, ID: FZZSTD) fehlt | 1 | - |
| 0xD794D4 | Botschaft (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) fehlt | 1 | - |
| 0xD794E4 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 | - |
| 0xD794E5 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) nicht aktuell | 1 | - |
| 0xD794E6 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Prüfsumme falsch | 1 | - |
| 0xD794E8 | Botschaft (Ist Daten Komfort Ladeelektronik Langzeit, ID: AVL_DT_KLE_LT) fehlt | 1 | - |
| 0xD794EC | Botschaft (Ist Daten Komfort Ladeelektronik, ID: AVL_DT_KLE) fehlt | 1 | - |
| 0xD794F8 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 | - |
| 0xD794F9 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) nicht aktuell | 1 | - |
| 0xD794FA | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Prüfsumme falsch | 1 | - |
| 0xD794FC | Botschaft (Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | - |
| 0xD79500 | Botschaft (Klemmen, ID: KLEMMEN) fehlt | 1 | - |
| 0xD79501 | Botschaft (Klemmen, ID: KLEMMEN) nicht aktuell | 1 | - |
| 0xD79502 | Botschaft (Klemmen, ID: KLEMMEN) Prüfsumme falsch | 1 | - |
| 0xD79508 | Botschaft (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) fehlt | 1 | - |
| 0xD7950C | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) fehlt | 1 | - |
| 0xD7950D | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) nicht aktuell | 1 | - |
| 0xD7950E | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) Prüfsumme falsch | 1 | - |
| 0xD79514 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | - |
| 0xD79518 | Botschaft (Modus Spannungsgesteuert, ID: MOD_VC) fehlt | 1 | - |
| 0xD7951C | Botschaft (Nachlaufzeit Stromversorgung BN2020, ID: FLLUPT_GPWSUP) fehlt | 1 | - |
| 0xD79524 | Botschaft (Navigation System Information, ID: NAV_SYS_INF) fehlt | 1 | - |
| 0xD79528 | Botschaft (Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | - |
| 0xD79534 | Botschaft (OBD Anfrage Begrenzung Drehmoment, ID: OBD_INQY_LIM_TORQ) fehlt | 1 | - |
| 0xD79538 | Botschaft (Powermanagement Niederspannung, ID: PWMG_LV) fehlt | 1 | - |
| 0xD7953C | Botschaft (Radmoment Antrieb 1, ID: WMOM_DRV_1) fehlt | 1 | - |
| 0xD79540 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 | - |
| 0xD79541 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) nicht aktuell | 1 | - |
| 0xD79542 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) Prüfsumme falsch | 1 | - |
| 0xD79544 | Botschaft (Radmoment Antrieb 5, ID: WMOM_DRV_5) fehlt | 1 | - |
| 0xD79550 | Botschaft (Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | - |
| 0xD79584 | Botschaft (Spannung Bordnetz, ID: U_BN) fehlt | 1 | - |
| 0xD7958C | Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) fehlt | 1 | - |
| 0xD7958D | Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) nicht aktuell | 1 | - |
| 0xD79590 | Botschaft (Status Diagnose OBD 2 Antriebsstrang:ST_DIAG_OBD_2_PT) fehlt | 1 | - |
| 0xD79591 | Botschaft (Status Diagnose OBD 2 Antriebsstrang:ST_DIAG_OBD_2_PT) nicht aktuell | 1 | - |
| 0xD79594 | Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) fehlt | 1 | - |
| 0xD79595 | Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) nicht aktuell | 1 | - |
| 0xD79598 | Botschaft (Status Diagnose OBD Slave 1, ID: ST_DIAG_OBD_SLV_1) fehlt | 1 | - |
| 0xD79599 | Botschaft (Status Diagnose OBD Slave 1, ID: ST_DIAG_OBD_SLV_1) nicht aktuell | 1 | - |
| 0xD7959C | Botschaft (Status Diagnose OBD Slave 2, ID: ST_DIAG_OBD_SLV_2) fehlt | 1 | - |
| 0xD7959D | Botschaft (Status Diagnose OBD Slave 2, ID: ST_DIAG_OBD_SLV_2) nicht aktuell | 1 | - |
| 0xD795A0 | Botschaft (Status Diagnose OBD Slave 3, ID :ST_DIAG_OBD_SLV_3) fehlt | 1 | - |
| 0xD795A1 | Botschaft (Status Diagnose OBD Slave 3, ID :ST_DIAG_OBD_SLV_3) nicht aktuell | 1 | - |
| 0xD795B0 | Botschaft (Status Getriebesteuergerät, ID: ST_GRB_ECU) fehlt | 1 | - |
| 0xD795B4 | Botschaft (Status Getriebestrang, ID: ST_GRDT) fehlt | 1 | - |
| 0xD795B5 | Botschaft (Status Getriebestrang, ID: ST_GRDT) nicht aktuell | 1 | - |
| 0xD795B6 | Botschaft (Status Getriebestrang, ID: ST_GRDT) Prüfsumme falsch | 1 | - |
| 0xD795B8 | Botschaft (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) fehlt | 1 | - |
| 0xD795BC | Botschaft (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) fehlt | 1 | - |
| 0xD795C0 | Botschaft (Status Hochvoltspeicher 2, ID: STAT_HVSTO_2) fehlt | 1 | - |
| 0xD795C8 | Botschaft (Status Hybrid 2, ID: ST_HYB_2) fehlt | 1 | - |
| 0xD795D0 | Botschaft (Status Information Verbrennungsmotor, ID: ST_INFO_CENG) fehlt | 1 | - |
| 0xD795D4 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) fehlt | 1 | - |
| 0xD795D8 | Botschaft (Status Ladeschnittstelle, ID: ST_CHGINTF) fehlt | 1 | - |
| 0xD795DC | Botschaft (Status Ladung Hochvoltspeicher 1, ID: ST_CHG_HVSTO_1) fehlt | 1 | - |
| 0xD795E0 | Botschaft (Status Ladung Hochvoltspeicher 2, ID: ST_CHG_HVSTO_2) fehlt | 1 | - |
| 0xD795E4 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) fehlt | 1 | - |
| 0xD795E5 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) nicht aktuell | 1 | - |
| 0xD795E6 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) Prüfsumme falsch | 1 | - |
| 0xD795E8 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD795E9 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD795EA | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD795EC | Botschaft (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) fehlt | 1 | - |
| 0xD795F4 | Botschaft (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) fehlt | 1 | - |
| 0xD795FC | Botschaft (Steuerung Crash, ID: CTR_CR) fehlt | 1 | - |
| 0xD795FD | Botschaft (Steuerung Crash, ID: CTR_CR) nicht aktuell | 1 | - |
| 0xD795FE | Botschaft (Steuerung Crash, ID: CTR_CR) Prüfsumme falsch | 1 | - |
| 0xD79600 | Botschaft (Teleservice Call Status, ID: TS_CALL_ST) fehlt | 1 | - |
| 0xD79604 | Botschaft (Uhrzeit/Datum, ID: UHRZEIT_DATUM) fehlt | 1 | - |
| 0xD7960C | Botschaft (Vorgabe Betriebsbereich Range Extender, ID: SPEC_OPRNG_REX) fehlt | 1 | - |
| 0xD79610 | Botschaft (Vorgabe E-Motor Traktion, ID: SPEC_MOT_TRCT) fehlt | 1 | - |
| 0xD79611 | Botschaft (Vorgabe E-Motor Traktion, ID: SPEC_MOT_TRCT) nicht aktuell | 1 | - |
| 0xD79612 | Botschaft (Vorgabe E-Motor Traktion, ID: SPEC_MOT_TRCT) Prüfsumme falsch | 1 | - |
| 0xD79614 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) fehlt | 1 | - |
| 0xD79615 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) nicht aktuell | 1 | - |
| 0xD79616 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) Prüfsumme falsch | 1 | - |
| 0xD79618 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD7961C | Botschaft (0 Zieladresse Nav-Graph_2, ID: 0_DEST_ADRESS_NAVGRPH_2) fehlt | 1 | - |
| 0xD79620 | Botschaft (2 Kreuzung Nav-Graph_2, ID: 2_CROSS_NAVGRPH_2) fehlt | 1 | - |
| 0xD7963C | Botschaft (Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD79648 | Botschaft (Geschwindigkeit Fahrzeug:V_VEH) fehlt | 1 | - |
| 0xD79649 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | - |
| 0xD7964A | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | - |
| 0xD79660 | Botschaft (Nav-Graph 2 Aktuelle Segment, ID: NAVGRPH_2_PRES_SEG) fehlt | 1 | - |
| 0xD79678 | Botschaft (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) fehlt | 1 | - |
| 0xD79708 | Botschaft (Status Fahrzeugstillstand Parkbremse, ID: ST_VEHSS_PBRK) fehlt | 1 | - |
| 0xD79740 | Botschaft (GPS Rohdaten:, ID: GPS_RWDT) fehlt | 1 | - |
| 0xD797E4 | Botschaft (Flexray - Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_HVSM_CRASH1_L1_FAULT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | UWB_CRASH3_L1_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | UWB_CRASH2_L2 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | UWB_CRASH2_LEVEL2_LOCK | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0005 | UWB_HVIL_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0006 | UWB_HVDC_OOR_H_FAULT_L2 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | UWB_TEM_HVDC_OOR_H_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0008 | UWB_HVDC_OOR_L_FAULT_L2A | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0009 | UWB_TEM_HVDC_OOR_L_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000A | UWB_KL30B_OOR_H_FAULT_L2 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000B | TEM_KL30B_OOR_H_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000C | UWB_KL30B_OOR_L_FAULT_L2 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000D | UWB_TEM_KL30B_OOR_L_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000E | UWB_TEM_PHASE_OC_L2 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000F | HVSGR_PHASE_OC_L2 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0010 | UWB_HVDC_SC_L2 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0011 | UWB_HVSM_CRASH1_L1_FAULT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0012 | UWB_CRASH3_L1_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0013 | UWB_CRASH2_L2 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0014 | UWB_CRASH2_LEVEL2_LOCK | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0015 | UWB_HVIL_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0016 | UWB_HVDC_OOR_H_FAULT_L2 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0017 | UWB_TEM_HVDC_OOR_H_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0018 | UWB_HVDC_OOR_L_FAULT_L2A | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0019 | UWB_TEM_HVDC_OOR_L_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x001A | UWB_KL30B_OOR_H_FAULT_L2 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x001B | TEM_KL30B_OOR_H_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x001C | UWB_KL30B_OOR_L_FAULT_L2 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x001D | UWB_TEM_KL30B_OOR_L_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x001E | UWB_TEM_PHASE_OC_L2 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x001F | UWB_HVSGR_PHASE_OC_L2 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0020 | UWB_HVDC_SC_L2 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0021 | UWB_HVDC_ACTDIS_VOLTAGE_ENABLE | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0022 | UWB_HVDC_ACTDIS_VOLTAGE_SAFETY_LIMIT | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0023 | UWB_HVDC_ACTDIS_VOLTAGE_TURNOFF_LIMIT | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0024 | UWB_HVDC_ACTDIS_VOLTAGE_TURNOFF_LIMIT_REACHED | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0025 | UWB_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0026 | UWB_ACTDIS_TRIGGER1_REQUEST | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0027 | UWB_ACTDIS_TRIGGER2_REQUEST | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0028 | UWB_ACTDIS_TRIGGER_REQUEST | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0029 | UWB_ACTDIS_TRIGGER_REQUEST_PROCESSED | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x002A | UWB_ACTDIS_TRIGGER_CANCEL | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x002B | UWB_ACTDIS_TRIGGER_LATCH | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x002C | UWB_ACTDIS_PIC_COMMAND_MALF | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x002D | UWB_ACTDIS_PIC_COMMAND_FAULT | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x002E | UWB_ACTDIS_TRIGGER_WHEN_CONTACTOR_CLOSED_MALF | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x002F | UWB_ACTDIS_PASSIVE_FAULT | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0030 | UWB_ACTDIS_LF_STATUS | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0031 | UWB_ACTDIS_TIME_MALF | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0032 | UWB_ACTDIS_TIME_FAULT | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0033 | UWB_ACTDIS_DIAGJOB_ENABLE_STATUS | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0034 | UWB_ACTDIS_DIAGJOB_NOTACTIVE | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x0035 | UWB_ACTDIS_DIAGJOB_REQUEST | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x0036 | UWB_ACTDIS_THERMAL_REST_COMPLETE | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x0037 | UWB_HVDC_MAIN_ADJUSTED_VOLTS_DROPPING | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x0038 | UWB_ACTDIS_CONTACTOR_OPEN_SWITCH_CONTROL | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x0039 | UWB_ACTDIS_LATENT_FLT_LAST_CYCLE | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x003A | UWB_ACTDIS_TRIGGER_EMERGENCY_REQUEST_PROCESSED | 0/1 | High | 0x20000000 | - | - | - | - |
| 0x003B | UWB_ACTDIS_EMERGENCY_TRIGGER_LATCH | 0/1 | High | 0x40000000 | - | - | - | - |
| 0x003C | UWB_ACTDIS_EMERGENCY_DISCHARGE_LOCK | 0/1 | High | 0x80000000 | - | - | - | - |
| 0x003D | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_OOR_H_FAULT_L2A | 0/1 | High | 0x01 | - | - | - | - |
| 0x003E | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_PLAUSABILITY_FAULT_L2A | 0/1 | High | 0x10 | - | - | - | - |
| 0x003F | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2 | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0040 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_ENABLE_STATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0041 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_LEVEL2_LOCK | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0042 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_PLAUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0043 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_PLAUS_L2_ENABLE_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0044 | UWB_V_Q_FUSI_MC0_HVSM2_U8_CRASH2_L2_DI | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0045 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_DI | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0046 | UWB_V_Q_FUSI_MC0_HVSM2_U8_CRASH2_L2 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0047 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_LOCK_L2_ENABLE_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0048 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_I_S_CRASHENABLE_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0049 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_HWAKS_KL30C_ENABLE_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x004A | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_CRASH_L2: BIT 11 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x004B | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH_MESSAGE_QUALIFIED | 0/1 | High | 0x1000 | - | - | - | - |
| 0x004C | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH_SIGNAL_ACTIVE | 0/1 | High | 0x2000 | - | - | - | - |
| 0x004D | UWB_V_S_FUSI_MC0_HVSM2_U8_MESSAGE_PLAUS_MALF | 0/1 | High | 0x4000 | - | - | - | - |
| 0x004E | UWB_V_S_FUSI_MC0_HVSM2_U8_MESSAGE_PLAUS_FAULT | 0/1 | High | 0x8000 | - | - | - | - |
| 0x004F | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_KL30B_STP_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0050 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_STP_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0051 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_KL30B_COUNTS | 0/1 | High | 0x04 | - | - | - | - |
| 0x0052 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_STP_ENABLE_STATUS | 0/1 | High | 0x08 | - | - | - | - |
| 0x0053 | UWB_V_S_FUSI_MC2_IOHWAB_U8_KL30B_PLAUS_EXT_ENABLE_STATUS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0054 | UWB_V_S_FUSI_MC2_IOHWAB_U8_KL30B_PLAUS_INT_ENABLE_STATUS | 0/1 | High | 0x20 | - | - | - | - |
| 0x0055 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_OOR_H_ENABLE_STATUS | 0/1 | High | 0x40 | - | - | - | - |
| 0x0056 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_OOR_L_ENABLE_STATUS | 0/1 | High | 0x80 | - | - | - | - |
| 0x0057 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_HVDC_5VREF_STG_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0058 | UWB_V_S_FUSI_MC0_IOHWAB_U8_5VREF_STG_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0059 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_HVDC_5VREF_STP_MALF | 0/1 | High | 0x04 | - | - | - | - |
| 0x005A | UWB_V_S_FUSI_MC0_IOHWAB_U8_5VREF_STP_FAULT | 0/1 | High | 0x08 | - | - | - | - |
| 0x005B | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_L1_MALF_SW | 0/1 | High | 0x0001 | - | - | - | - |
| 0x005C | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_LEVEL1_INHIBIT_CONTROL | 0/1 | High | 0x0002 | - | - | - | - |
| 0x005D | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_L1_MALF | 0/1 | High | 0x0004 | - | - | - | - |
| 0x005E | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_L1_FAULT | 0/1 | High | 0x0008 | - | - | - | - |
| 0x005F | UWB_V_Q_QM_MC0_HVSM2_U8_CRASH1_L1_MALF_SW | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0060 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_INHIBIT_CONTROL | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0061 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_MALF | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0062 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0063 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_ENABLE_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0064 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_MALF_SW | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0065 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_INHIBIT_CONTROL | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0066 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_MALF | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0067 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_FAULT | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0068 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_ENABLE_STATUS | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0069 | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_1_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x006A | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_1_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x006B | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_2_MALF | 0/1 | High | 0x04 | - | - | - | - |
| 0x006C | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_2_FAULT | 0/1 | High | 0x08 | - | - | - | - |
| 0x006D | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_SOH_FAULT | 0/1 | High | 0x10 | - | - | - | - |
| 0x006E | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_FAULT_ENABLE_STATUS | 0/1 | High | 0x20 | - | - | - | - |
| 0x006F | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_DCDC_SOH_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0070 | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_DCDC_SOH_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0071 | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_DCDC_SOH_ENABLE_STATUS | 0/1 | High | 0x04 | - | - | - | - |
| 0x0072 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STG_FAULT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0073 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STP_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0074 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STG_ENABLE_STATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0075 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STP_ENABLE_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0076 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_HVDC_PSEN_COUNTS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0077 | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STG_FAULT | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0078 | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STP_FAULT | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0079 | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STG_ENABLE_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x007A | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STP_ENABLE_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x007B | UWB_V_Q_FUSI_MC0_IOHWAB_U8_HVDC_NSEN_COUNTS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x007C | UWB_V_S_FUSI_MC0_IOHWAB_U8_MAIN_STP_FAULT | 0/1 | High | 0x0400 | - | - | - | - |
| 0x007D | UWB_V_Q_FUSI_MC0_IOHWAB_U8_HVDC_MAIN_COUNTS | 0/1 | High | 0x0800 | - | - | - | - |
| 0x007E | UWB_V_S_FUSI_MC0_IOHWAB_U8_MAIN_STP_ENABLE_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x007F | UWB_ST_HVSGR_HVSMSTATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x0080 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PIC_VAILD_FREQUENCY | 0/1 | High | 0x02 | - | - | - | - |
| 0x0081 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_ACTDISCHARGE_PERIOD | 0/1 | High | 0x04 | - | - | - | - |
| 0x0082 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PIC_FREQ_OOR_FAULT | 0/1 | High | 0x08 | - | - | - | - |
| 0x0083 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PIC_FREQ_OOR_ENABLE_STATUS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0084 | UWB_1_V_S_FUSI_MC0_IOHWAB_U8_PIC_VAILD_FREQUENCY | 0/1 | High | 0x20 | - | - | - | - |
| 0x0085 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_KL30C_RANGE_MALF | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0086 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_RANGE_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0087 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_KL30C_COUNTS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0088 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_RANGE_ENABLE_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0089 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_KL30C_DI_ACTIVE_MALF | 0/1 | High | 0x0010 | - | - | - | - |
| 0x008A | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_DI_ACTIVE_FAULT | 0/1 | High | 0x0020 | - | - | - | - |
| 0x008B | UWB_V_Q_FUSI_MC0_IOHWAB_U8_KL30C_DI | 0/1 | High | 0x0040 | - | - | - | - |
| 0x008C | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_PLAUS_MALF | 0/1 | High | 0x0080 | - | - | - | - |
| 0x008D | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_PLAUS_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x008E | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_PLAUS_ENABLE_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x008F | UWB_LATENT_FAULT_TEST_AKS_ACTIVE | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0090 | UWB_LATENT_FAULT_TEST_HVDC_ACTIVE_1 | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0091 | UWB_LATENT_FAULT_TEST_3PH_ACTIVE_1 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0092 | UWB_TEM_ADC_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0093 | UWB_TEM_AKS_LF_INPROCESS_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0094 | UWB_TEM_AKS_LF_STATUS | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0095 | UWB_LATENT_FAULT_TEST_HVDC_ACTIVE_2 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0096 | UWB_LATENT_FAULT_TEST_HVDC_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0097 | UWB_LATENT_FAULT_TEST_3PH_ACTIVE_2 | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0098 | UWB_LATENT_FAULT_TEST_3PH_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0099 | UWB_HVSGR_ADC_STATUS_1 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x009A | UWB_HVSGR_AKS_LF_INPROCESS_STATUS_1 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x009B | UWB_HVSGR_AKS_LF_STATUS_1 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x009C | UWB_LATENT_FAULT_TEST_3PH_ACTIVE_3 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x009D | UWB_LATENT_FAULT_TEST_3PH_STATUS_1 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x009E | UWB_REACTION_TEM_HVSMSTATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x009F | UWB_REACTION_HVSGR_HVSMSTATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00A0 | UWB_REACTION_DCDC_HVSMSTATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00A1 | UWB_ACTDIS_TRIGGER_REQUEST | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00A2 | UWB_ACTDIS_TRIGGER_LATCH | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00A3 | UWB_ACTDIS_TRIGGER1_REQUEST | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00A4 | UWB_ACTDIS_TRIGGER2_REQUEST | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00A5 | UWB_ACTDIS_PASSIVE_FAULT | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00A6 | UWB_ACTDIS_TIME_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00A7 | UWB_ACTDIS_VOLTAGE_ENABLE | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00A8 | UWB_ACTDIS_VOLTAGE_SAFETY_LIMIT | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00A9 | UWB_ACTDIS_VOLTAGE_TURNOFF_LIMIT | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00AA | UWB_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x1000 | - | - | - | - |
| 0x00AB | UWB_ACTDIS_THERMAL_REST_COMPLETE | 0/1 | High | 0x2000 | - | - | - | - |
| 0x00AC | UWB_CCM585_ENABLE_STATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00AD | UWB_SLE_Fault_Status | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00AE | UWB_Crash2_Level_2_Latent_Fault_Test_Status | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00AF | UWB_Short_Circuit_Latent_Fault_Test_Status | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00B0 | UWB_HVDC_OV_L2A_Latent_Fault_Test_Status | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00B1 | UWB_HVDC_OV_L2B_Latent_Fault_Test_Status_1 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00B2 | UWB_HVDC_OV_L2C_Latent_Fault_Test_Status_2 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00B3 | UWB_Active_Discharge_Latent_Fault_Test_Status | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00B4 | UWB_TEM_AKS_Latent_Fault_Test_Status_1 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00B5 | UWB_TEM_HVSGR_Latent_Fault_Test_Status_2 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00B6 | UWB_TEM_3-PHASE_Over_Current_Latent_Fault_Test | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00B7 | UWB_HVSGR_3-PHASE_Over_Current_Latent_Fault_Test_1 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x00B8 | UWB_MAIN_Ucontroller_ADC_Latent_Fault_Test | 0/1 | High | 0x2000 | - | - | - | - |
| 0x00B9 | UWB_TEM_Ucontroller_ADC_Latent_Fault_Test_1 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x00BA | UWB_HVSGR_Ucontroller_ADC_Latent_Fault_Test_1 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x00BB | UWB_REACTION_TEM_HVSMSTATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00BC | UWB_REACTION_HVSGR_HVSMSTATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00BD | UWB_REACTION_DCDC_HVSMSTATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00BE | UWB_ACTDIS_TRIGGER_REQUEST | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00BF | UWB_ACTDIS_TRIGGER_LATCH | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00C0 | UWB_ACTDIS_TRIGGER1_REQUEST | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00C1 | UWB_ACTDIS_TRIGGER2_REQUEST | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00C2 | UWB_ACTDIS_PASSIVE_FAULT | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00C3 | UWB_ACTDIS_TIME_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00C4 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_SC_HVDC_UNFLT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00C5 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_MALF_UNFLT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00C6 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_FAULT_UNFLT | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00C7 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_SC_HVDC_FLT_SW | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00C8 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_MALF_FLT | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00C9 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_FAULT | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00CA | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_SC_L2_SW | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00CB | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_SC_L2 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00CC | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_OOR_H_FLT_ENABLE_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00CD | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_AKS_STATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00CE | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_KL30B_OOR_H_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00CF | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_KL30B_OOR_L_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00D0 | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_ADC_STATUS | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00D1 | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_AKS_LF_INPROCESS_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00D2 | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_AKS_LF_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00D3 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_AKS_STATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00D4 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_HVDC_OOR_H_STATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00D5 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_HVDC_OOR_L_STATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00D6 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_KL30B_OOR_H_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00D7 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_KL30B_OOR_L_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00D8 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_ADC_STATUS | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00D9 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_AKS_LF_INPROCESS_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00DA | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_AKS_LF_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00DB | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_HV_PLAUS_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00DC | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00DD | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_HVDC_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00DE | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_3PH_ACTIVE | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00DF | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_3PH_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x00E0 | UWB_V_S_FUSI_MC0_HVSM2_U8_HVSGR_AKS_REQUEST_DIAGJOB | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00E1 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVSGR_AKS_ACTIVE | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00E2 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00E3 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVSGR_3PH_ACTIVE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00E4 | UWB_V_S_FUSI_MC0_HVSM2_U8_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00E5 | UWB_V_S_FUSI_MC0_HVSM2_U8_TEM_AKS_REQUEST_DIAGJOB | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00E6 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_AKS_ACTIVE | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00E7 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00E8 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_3PH_ACTIVE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00E9 | UWB_V_S_FUSI_MC0_HVSM2_U8_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00EA | UWB_DCDC_CRASH_SEVERITY_1 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00EB | UWB_DCDC_CRASH_SEVERITY_2 | 0/1 | High | 0x02 | - | - | - | - |
| 0x00EC | UWB_DCDC_CRASH_TIMEOUT | 0/1 | High | 0x04 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x170C | VERSORGUNGSSPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4020 | Bremsunterdrucksignal | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4021 | Drehzahl | 1/min | High | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x4022 | Umgebungsdruck | mbar | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x4023 | Status Verbrennermotor | 0/1 | High | 0x01 | - | - | - | - |
| 0x4024 | Fahrzeuggeschwindigkeit | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4025 | Fahrzeuggeschwindigkeit Ende Bremsvorgang | 1/min | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4026 | Bremsunterdruck_Bremsbeginn | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4027 | Bremsunterdruck Bremsende | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | maimales vom Fahrer angefordertes Bremsmoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | UWB_DCL_GANG_GB2_IST | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6001 | UWB_DCL_GANG_GB2_SOLL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6002 | UWB_DCL_ST_ERR_GB2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | UWB_DCL_MGR_ST_GS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6004 | UWB_DCL_COORD_INPUT_STATUS | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6005 | UWB_DCL_COORD_FAULTMASK | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6006 | UWB_DCL_TEM_ACT_PWM_DC_COM | % | High | unsigned char | - | 0.625 | 1.0 | 0.0 |
| 0x6007 | UWB_DCL_TEM_SUP_VOL | V | High | signed int | - | 0.025 | 1.0 | 0.0 |
| 0x6008 | UWB_DCL_TEM_KL15_INFO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6009 | UWB_DCL_TEM_POS_SEN_VAL | % | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x600A | UWB_DCL_TEM_ACT_SOL_CUR | A | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x600B | UWB_DCL_TEM_EN_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6010 | UWB_DEM_EC_DID_HVPM_STATUS_HV_STARTFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6011 | UWB_DEM_EC_DID_HVPM_STATUS_HVSTART_KOMM | 0-n | High | 0xFF | TAB_HVSTART_KOMM | - | - | - |
| 0x6012 | UWB_DEM_EC_DID_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x6013 | UWB_DEM_EC_DID_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x6014 | UWB_DEM_EC_DID_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6015 | UWB_DEM_EC_DID_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6016 | UWB_DEM_EC_DID_HVPM_I_BATT_SME | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6017 | UWB_DEM_EC_DID_HVPM_ST_CRASH_MOD | 0-n | High | 0xFF | TAB_CRASH_MOD | - | - | - |
| 0x6018 | UWB_DEM_EC_DID_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x6019 | UWB_DEM_EC_DID_HVPM_ST_CRASH_SERVERTY | 0/1 | High | 0x01 | - | - | - | - |
| 0x601A | UWB_DEM_EC_DID_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601B | UWB_DEM_EC_DID_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601C | UWB_DEM_EC_DID_HVPM_IBATT_BN | A | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x601D | UWB_DEM_EC_DID_HVPM_UBATT_BN | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601E | UWB_DEM_EC_DID_HVPM_F_DCDC1_GEN | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601F | UWB_DEM_EC_DID_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6020 | UWB_DEM_EC_DID_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6021 | UWB_DEM_EC_DID_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6022 | UWB_DEM_EC_DID_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_BETRIEBSART_SLE | - | - | - |
| 0x6023 | UWB_DEM_EC_DID_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_CHGNG_TYP_IMME | - | - | - |
| 0x6024 | UWB_DEM_EC_DID_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_ST_CHGNG | - | - | - |
| 0x6025 | UWB_DEM_EC_DID_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_ST_CHGRDI | - | - | - |
| 0x6026 | UWB_DCDC_U_GND_DIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x6027 | UWB_DCDC_R_Masseband | mOhm | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6028 | UWB_DCDC_I_LV_MAX_MASSE | A | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6029 | UWB_ELUP_TEMPERATUR | ° | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6F00 | UWB_CTR_CSOV_EVA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F01 | UWB_ST_CSOV_AIC | 0-n | High | 0xFF | TAB_UWB_ST_CSOV_AIC | - | - | - |
| 0x6F02 | UWB_SCALED_VBATT_MAIN | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F03 | UWB_DCDC_MAX_P_OUT | W | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x6F04 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F05 | UWB_DCDC_COOLANT_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6F08 | UWB_HVSGR_CONTROL_MODE | 0-n | High | 0xFF | - | - | - | - |
| 0x6F09 | UWB_HVSGR_SYS_CONTROL_MODE | 0-n | High | 0xFF | - | - | - | - |
| 0x6F0B | UWB_HVSGR_IGNITIONV KL15 | V | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F0C | UWB_HVSGR_Power_Module_Temp3 | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x6F12 | UWB_HVSGR_COOLANT_FLOW | l/h | High | unsigned char | - | 12.0 | 1.0 | 0.0 |
| 0x6F14 | UWB_HVSGR_MOTOR_TORQUE_CMD | Nm | High | unsigned char | - | 0.5 | 1.0 | -62.0 |
| 0x6F16 | UWB_HVSGR_DESIRED_CURR | A | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x6F17 | UWB_HVSGR_DESIRED_VOLT | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x6F1A | UWB_HVSGR_IQS_SYNCH | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F1B | UWB_HVSGR_IDS_SYNCH | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F1C | UWB_HVSGR_VQS_SYNCH | V | High | unsigned char | - | 3.0 | 1.0 | -380.0 |
| 0x6F1D | UWB_HVSGR_VDS_SYNCH | V | High | unsigned char | - | 3.0 | 1.0 | -380.0 |
| 0x6F1E | UWB_HVSGR_PHASEI_A_COMP | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F1F | UWB_HVSGR_PHASEI_B_COMP | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F20 | UWB_HVSGR_PHASEI_C_COMP | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F21 | UWB_HVSGR_VMAG_OVM | - | High | unsigned char | - | 0.0075 | 1.0 | 1.0 |
| 0x6F22 | UWB_HVSGR_IDS_VMAG | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F23 | UWB_HVSGR_IDSV_REF | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F24 | UWB_HVSGR_IQS_CMD | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F25 | UWB_HVSGR_IDS_REF | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F26 | UWB_HVSGR_CLMP_FLG | 0/1 | High | 0x01 | - | - | - | - |
| 0x6F27 | UWB_HVSGR_MAX_ZERO_SEQ_SUM | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F2B | UWB_HVSGR_RDC_NO_TRACK_FLT_CNTR | - | High | unsigned char | - | 255.0 | 1.0 | 0.0 |
| 0x6F2C | UWB_HVSGR_RDC_OUT_RANGE_FLT_CNTR | - | High | unsigned char | - | 255.0 | 1.0 | 0.0 |
| 0x6F30 | UWB_FUSI_KL30B_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F31 | UWB_HVSM_HVDC_5VREF_FILTERED_VOLTS | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F32 | UWB_HVSM_HVDC_MAIN_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F33 | UWB_HVSM_HVDC_MAIN_ADJUSTED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F34 | UWB_HVSM_HVDC_PSEN_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F35 | UWB_HVSM_HVDC_NSEN_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | -630.0 |
| 0x6F36 | UWB_HVSM_KL30C_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F37 | UWB_HVSM_KL30C_DI_STATE | 0/1 | High | 0x01 | - | - | - | - |
| 0x6F38 | UWB_HVSM_TEM_EM_CURRENT | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F39 | UWB_HVSM_TEM_EM_CURRENT_VREF | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F3F | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x6F40 | UWB_HVSM_HVSGR_EM_CURRENT | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F41 | UWB_HVSM_HVSGR_EM_CURRENT_VREF | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F42 | UWB_HVSM_HVIL_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F43 | UWB_HVSM_PIC_COMMAND | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F44 | UWB_HVSM_PIC_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F45 | UWB_HVSM_THERMAL_REST_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F46 | UWB_HVSM_THERMAL_LOCK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F47 | UWB_HVSM_CONTACTOR_OPEN_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F48 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F49 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4D | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4E | UWB_THERMAL_COUNT_REMAIN | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F4F | UWB_EMERGENCY_DISCHARGE_COUNT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F50 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F51 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F52 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F53 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F54 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F55 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F56 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F57 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F58 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F59 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F5A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5D | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5E | UWB_ST_PIC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F60 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F61 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_TEM_3PH_SC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F62 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_TEM_3PH_OC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F63 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_HVSGR_3PH_SC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F64 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_HVSGR_3PH_OC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x7000 | UWB_DCDC_Target_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7001 | UWB_DCDC_Target_Voltage_HV_Min | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x7002 | UWB_DCDC_Maximum_Input_Power | W | High | unsigned char | - | 3100.0 | 255.0 | 0.0 |
| 0x7003 | UWB_DCDC_Target_BA | 0-n | High | 0xFF | TAB_DCDC_BA_TARGET | - | - | - |
| 0x7004 | UWB_DCDC_Actual_Current_HV | A | High | unsigned char | - | 2.0 | 10.0 | 0.0 |
| 0x7005 | UWB_DCDC_Actual_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7007 | UWB_DCDC_Temperature | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x7008 | UWB_DCDC_Actual_BA | 0-n | High | 0xFF | TAB_UWB_DCDC_ACTUAL_BA | - | - | - |
| 0x7009 | UWB_DCDC_Actual_Filtered_Current_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700A | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700B | UWB_ELUP_VERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700C | UWB_ELUP_STROM_CH1 | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700D | UWB_ELUP_STROM_CH2 | A | High | unsigned char | - | 1.0 | 3.75 | 0.0 |
| 0x700E | UWB_ELUP_UNTERDRUCKMMESSWERT | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x700F | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x7010 | UWB_BUDS_VERSORGUNG | V | High | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x7011 | UWB_BUDS_RUECKFUEHRSIGNAL | V | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x7012 | UWB_BUDS_MASSE | V | High | unsigned char | - | 1.0 | 20.0 | 0.0 |
| 0x7013 | UWB_EM1_TEMPERATUR_STATOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7014 | UWB_EM1_TEMPERATUR_ROTOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7015 | UWB_EM1_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | -30000.0 |
| 0x7016 | UWB_EM1_SOLL_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7017 | UWB_EM1_IST_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7018 | UWB_EM1_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7019 | UWB_INV1_TEMPERATUR_PHASE_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701A | UWB_INV1_TEMPERATUR_PHASE_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701B | UWB_INV1_TEMPERATUR_PHASE_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701C | UWB_INV1_TEMPERATUR_KUEHLMITTEL | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701D | UWB_INV1_SPANNUNG_DC | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x701E | UWB_INV1_DERATING_STATUS | HEX | High | unsigned char | - | - | - | - |
| 0x701F | UWB_E_ANTRIEB_1_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_IST_BETRIEBSART | - | - | - |
| 0x7020 | UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | - | - | - |
| 0x7021 | UWB_INV1_TEMPERATUR_IGBT_DIODE_MAX | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x7022 | UWB_E_ANTRIEB_1_ABSCHALT_GRUND | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_ABSCHALT_GRUND | - | - | - |
| 0x7023 | UWB_E_ANTRIEB_1_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7024 | UWB_EM2_TEMPERATUR_STATOR_1 | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7025 | UWB_EM2_TEMPERATUR_STATOR_2 | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7026 | UWB_EM2_TEMPERATUR_ROTOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7027 | UWB_EM2_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | -30000.0 |
| 0x7028 | UWB_EM2_SOLL_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7029 | UWB_EM2_IST_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x702A | UWB_EM2_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x702B | UWB_INV2_TEMPERATUR_PHASE_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702C | UWB_INV2_TEMPERATUR_PHASE_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702D | UWB_INV2_TEMPERATUR_PHASE_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702E | UWB_INV2_TEMPERATUR_KUEHLMITTEL | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702F | UWB_INV2_SPANNUNG_DC | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x7030 | UWB_INV2_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7031 | UWB_E_ANTRIEB_2_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_2_IST_BETRIEBSART | - | - | - |
| 0x7032 | UWB_E_ANTRIEB_2_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_2_SOLL_BETRIEBSART | - | - | - |
| 0x7033 | UWB_E_ANTRIEB_2_ABSCHALT_GRUND | HEX | High | unsigned int | - | - | - | - |
| 0x7034 | UWB_E_ANTRIEB_2_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7035 | UWB_HV_BATTERIE_SOC | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x7036 | UWB_HV_BATTERIE_STROM_DC | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x7038 | UWB_HVSTART_ERROR | HEX | High | unsigned long | - | - | - | - |
| 0x7048 | UWB_KMV_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7049 | UWB_KMV_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704A | UWB_KMV_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704B | UWB_KMV_PWM_AUSGANGPEGEL_HIGH | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704C | UWB_KMV_PWM_AUSGANGPEGEL_LOW | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704D | UWB_DCDC_Actual_Power_HV | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x704E | UWB_DCDC_Actual_Load | % | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x704F | UWB_FUSI_BACK_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_BACK_HVSM_STATUS_AKKU | - | - | - |
| 0x7050 | UWB_FUSI_FWD_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_FWD_HVSM_STATUS_AKKU | - | - | - |
| 0x7051 | UWB_FUSI_WBD_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_WBD_STATUS_AKKU | - | - | - |
| 0x7052 | UWB_FUSI_BACK_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_DCL_STATUS | - | - | - |
| 0x7053 | UWB_FUSI_FWD_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_DCL_STATUS | - | - | - |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x7055 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x7056 | UWB_FUSI_BACK_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_LD_STATUS | - | - | - |
| 0x7057 | UWB_FUSI_FWD_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_LD_STATUS | - | - | - |
| 0x7059 | UWB_FUSI_I_INV_DC | A | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x705A | UWB_FUSI_OPMO_CHGE | 0-n | High | 0xFF | TAB_FUSI_OPMO_CHGE | - | - | - |
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
| 0x020708 | DOBD - SME-05 - Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020709 | DOBD - SME-05 - Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02070A | DOBD - SME-05 - Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02070B | DOBD - SME-05 - Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02070C | DOBD - SME-05 - Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02070D | DOBD - SME-05 - Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x021408 | DOBD - SLE_B35 - Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x030EE5 | HVPM - Start-Isolationsüberwachung - ISO-Warnung | 1 | - |
| 0x030EF3 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - Info | 0 | - |
| 0x031047 | ELUP - Control - Unterdruckaufbau nicht möglich | 0 | - |
| 0x03132E | EM 2 Verbrennerfern - Unplausibles Drehmoment | 0 | - |
| 0x03132F | EM 2 Verbrennerfern - Unsachgemäße Verwendung des Antriebs | 0 | - |
| 0x031333 | EM 2 Verbrennerfern - Kommunikation - Signale DME ungültig oder ausgefallen - Kombination 1 | 0 | - |
| 0x031334 | EM 2 Verbrennerfern - Kommunikation - Signale DME ungültig oder ausgefallen - Kombination 2 | 0 | - |
| 0x031335 | EM 2 Verbrennerfern - Kommunikation - Signale DME ungültig oder ausgefallen - Kombination 3 | 0 | - |
| 0x031336 | EM 2 Verbrennerfern - Kommunikation - Signale DME ungültig oder ausgefallen - Kombination 4 | 0 | - |
| 0x031337 | EM 2 Verbrennerfern - Kommunikation - Signale HV-Speicher/SME ungültig oder ausgefallen - Kombination 1 | 0 | - |
| 0x031338 | EM 2 Verbrennerfern - Kommunikation - Signale HV-Speicher/SME ungültig oder ausgefallen - Kombination 2 | 0 | - |
| 0x031339 | EM 2 Verbrennerfern - Kommunikation - Signale HV-Speicher/SME ungültig oder ausgefallen - Kombination 3 | 0 | - |
| 0x03133A | EM 2 Verbrennerfern - Kommunikation - Signale HV-Speicher/SME ungültig oder ausgefallen - Kombination 4 | 0 | - |
| 0x03133B | EM 2 Verbrennerfern - Momentenpfad - Abweichung vom Sollmoment | 0 | - |
| 0x0316B0 | Notlaufmanager - Folgefehler - CCM Zyklus | 0 | - |
| 0x0317D8 | FuSi - LD - Radblockiererkennung - 0-Moment angefordert | 0 | - |
| 0x078100 | DOBD - IHKA - eKMV: Kommunikationsfehler - Alive-Counter oder Checksumme | 0 | - |
| 0x078106 | DOBD - IHKA - eDH: Kommunikationsfehler - Alive-Counter oder Checksumme | 0 | - |
| 0x21E602 | DOBD - SLE_B35 - Ladeelektronik: Selbstschutz Notaus | 0 | - |
| 0x21E606 | DOBD - SLE_B35 - Ladeelektronik: Hardwarefehler erkannt | 0 | - |
| 0x21E609 | DOBD - SLE_B35 - Zwischenstecker Pilot/Proxy nicht gesteckt | 0 | - |
| 0x21E615 | DOBD - SLE - Ladeelektronik: Überspannung am DC-Anschluss | 0 | - |
| 0x21E616 | DOBD - SLE - Ladeelektronik: Überspannung am AC-Anschluss | 0 | - |
| 0x21E617 | DOBD - SLE - Ladeelektronik: Unterspannung am DC-Anschluss | 0 | - |
| 0x21E618 | DOBD - SLE - Ladeelektronik: Unterspannung am AC-Anschluss | 0 | - |
| 0x21E61C | DOBD - SLE_B35 - Ladeelektronik:  HV AC Stromsensor oberen Schwellenwert überschritten | 0 | - |
| 0x21E61D | DOBD - SLE_B35 - Ladeelektronik: Unterspannung an 12V Spannungsversorgung | 0 | - |
| 0x21E61E | DOBD - SLE_B35 - Ladeelektronik: Überspannung an 12V Spannungsversorgung | 0 | - |
| 0x21E622 | DOBD - SLE_B35 - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E623 | DOBD - SLE_B35 - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E626 | DOBD - SLE_B35 - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E627 | DOBD - SLE_B35 - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E629 | DOBD - SLE_B35 - Weckleitung 15_WUP unplausibel | 0 | - |
| 0x21E640 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: AC Stromsensor, Kurzschluss nach Masse | 0 | - |
| 0x21E641 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Hochsetzsteller Spannungssensor, Kurzschluss nach Plus | 0 | - |
| 0x21E645 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Kühlmitteltemperatursensor, Kurzschluss nach Plus | 0 | - |
| 0x21E648 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Kühlmitteltemperatursensor, Kurzschluss nach Masse | 0 | - |
| 0x21E649 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Hochsetzsteller Spannungssensor, Messwert außerhalb Sollbereich (oben) | 0 | - |
| 0x21E64A | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Hochsetzsteller Spannungssensor, Messwert außerhalb Sollbereich (unten) | 0 | - |
| 0x21E64B | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: AC Stromsensor, Kurzschluss nach Plus | 0 | - |
| 0x21E64D | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: AC Stromsensor, Leitungsunterbrechung | 0 | - |
| 0x21E64E | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Umgebungstemperatursensor, Kurzschluss nach Plus | 0 | - |
| 0x21E64F | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Umgebungstemperatursensor, Kurzschluss nach Masse | 0 | - |
| 0x21E652 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Hochsetzsteller Spannungssensor, Kurzschluss nach Masse | 0 | - |
| 0x21E653 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: AC Stromsensor, Messwert außerhalb Sollbereich (unten) | 0 | - |
| 0x21E655 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Treiber Temperatursensor, Kurzschluss nach Masse | 0 | - |
| 0x21E658 | DOBD - SLE_B35 - Ladeelektronik, interner Fehler: Treiber Temperatursensor, Kurzschluss nach Plus | 0 | - |
| 0x21E65C | DOBD - SLE_B35 - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x21E65D | DOBD - SLE_B35 - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x21E660 | DOBD - SLE_B35 - Ladeelektronik, HV DC Stromsensor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x21E661 | DOBD - SLE_B35 - Ladeelektronik, HV DC Stromsensor: Oberer Schwellenwert überschritten | 0 | - |
| 0x21E66F | DOBD - SLE_B35 - Interface Sensor Charge Flap Ground Pin Out of range high | 0 | - |
| 0x21E679 | DOBD - SLE_B35 - Interface Sensor Charge Flap Ground Pin shorted low | 0 | - |
| 0x21E67A | DOBD - SLE_B35 - Interface Sensor Charge Flap Ground Pin shorted high | 0 | - |
| 0x21E67B | DOBD - SLE_B35 - Interface Sensor Charger Flap Supply Pin open circuit | 0 | - |
| 0x21E67D | DOBD - SLE_B35 - Ladeelektronik, Spannungsversorgung Sensoren: Unterer Schwellenwert unterschritten | 0 | - |
| 0x21E67E | DOBD - SLE_B35 - Ladeelektronik, Spannungsversorgung Sensoren: Oberer Schwellenwert überschritten | 0 | - |
| 0x21E67F | DOBD - SLE_B35 - Interface Sensor Charge Flap Supply Pin Out of range low | 0 | - |
| 0x21E680 | DOBD - SLE_B35 - Interface Sensor Charge Flap Supply Pin Out of range high | 0 | - |
| 0x21E682 | DOBD - SLE_B35 - Interface Actuator Plug Lock shorted low | 0 | - |
| 0x21E683 | DOBD - SLE_B35 - Interface Actuator Plug Lock shorted high | 0 | - |
| 0x21E684 | DOBD - SLE_B35 - Interface Actuator Plug Lock open circuit | 0 | - |
| 0x21E685 | DOBD - SLE_B35 - Ladeanschlussklappe: Verriegelung, Kurzschluss nach Masse | 0 | - |
| 0x21E686 | DOBD - SLE_B35 - Ladeanschlussklappe: Verriegelung, Kurzschluss nach Plus | 0 | - |
| 0x21E687 | DOBD - SLE_B35 - Ladeanschlussklappe: Verriegelung, Leitungsunterbrechung | 0 | - |
| 0x21E689 | DOBD - SLE_B35 - Interface Actuator Plug Lock Rationality | 0 | - |
| 0x21E691 | DOBD - SLE_B35 - Interface Sensor Charge Flap Rationality | 0 | - |
| 0x21E697 | DOBD - SLE_B35 - Interface Sensor Charge Flap Supply Pin shorted high | 0 | - |
| 0x21E69B | DOBD - SLE_B35 - Interface Sensor Charge Flap Supply Pin shorted low | 0 | - |
| 0x21E6AC | DOBD - SLE_B35 - Ladeelektronik, Umgebungstemperatur Sensor: Plausiblität | 0 | - |
| 0x21E6AD | DOBD - SLE_B35 - Ladeelektronik, Kühlmitteltemperatur Sensor: Plausibilität | 0 | - |
| 0x21E6AE | DOBD - SLE_B35 - Ladeelektronik, Wirkungsgrad: Plausibilität | 0 | - |
| 0x21E6AF | DOBD - SLE_B35 - Ladeelektronik, AC Spannungssensor: Plausibilität | 0 | - |
| 0x21E6B0 | DOBD - SLE_B35 - Ladeelektronik, AC Stromsensor: Plausibilität | 0 | - |
| 0x21E6B1 | DOBD - SLE_B35 - Ladeelektronik, HV DC Stromsensor: Plausibilität | 0 | - |
| 0x21E6B2 | DOBD - SLE_B35 - Ladeelektronik, HV DC Spannungssensor: Plausibilität | 0 | - |
| 0x21E6B3 | DOBD - SLE_B35 - Ladeelektronik, Ausgangsspannung Hochsetzsteller: Plausibilität | 0 | - |
| 0x21E6B4 | DOBD - SLE_B35 - Ladeelektronik, Leistungs-Feldeffekttransistor (FET), Temperatursensor: Plausibilität | 0 | - |
| 0x21E6B5 | DOBD - SLE_B35 - Ladeelektronik: Fehler bei internem Watchdog und Überwachung Programmablauf | 0 | - |
| 0x21E6B6 | DOBD - SLE_B35 - Ladeelektronik: Watchdog Power Down Test | 0 | - |
| 0x21E6B7 | DOBD - SLE_B35 - Ladeelektronik: SPI Bus Performance | 0 | - |
| 0x21E6FA | DOBD - SLE_B35 - Ladeelektronik: RAM, Prüfsummenfehler | 0 | - |
| 0x21E6FB | DOBD - SLE_B35 - Ladeelektronik, FLASH EEPROM: Prüfsummenfehler | 0 | - |
| 0x21E6FC | DOBD - SLE_B35 - Ladeelektronik: ROM, Prüfsummenfehler | 0 | - |
| 0x21E6FE | DOBD - SLE_B35 - Ladeelektronik: Programmablauf Fehler / Prozessorfehler | 0 | - |
| 0x21E701 | DOBD - SLE_B35 - Ladeelektronik, interne Spannungsversorgung, Kurzschluss nach Masse | 0 | - |
| 0x21E702 | DOBD - SLE_B35 - Ladeelektronik, interne Spannungsversorgung Kurzschluss nach Plus | 0 | - |
| 0x21E703 | DOBD - SLE_B35 - Ladeelektronik, Parameter Aktuator Ladeklappenverriegelung, geringe Glaubwürdigkeit | 0 | - |
| 0x21E704 | DOBD - SLE_B35 - Interface Sensor Charge Flap Rationality High | 0 | - |
| 0x21E705 | DOBD - SLE_B35 - Ladeelektronik, Sensor Umgebungstemperatur, hohe Glaubwürdigkeit | 0 | - |
| 0x21E706 | DOBD - SLE_B35 - Ladeelektronik, Parameter Sensor Temperatur Kühlmittel: hohe Glaubwürdigkeit | 0 | - |
| 0x21E707 | DOBD - SLE_B35 - Ladeelektronik, Leistungs Feldeffekttransistor (FET), Parameter Temperatursensor: hohe Glaubwürdigkeit | 0 | - |
| 0x21E708 | DOBD - SLE_B35 - Ladeelektronik, Kaltstart Plausibilitätscheck | 0 | - |
| 0x21E709 | DOBD - SLE_B35 - Ladeelektronik, Kaltstartprüfung Plausibilität zwischen Kühlmitteltemperatur und Umgebungstemperatur | 0 | - |
| 0x21E710 | DOBD - SLE_B35 - Ladeelektronik, Parameter Wirkungsgrad: hohe Glaubwürdigkeit | 0 | - |
| 0x21E711 | DOBD - SLE_B35 - Ladeelektronik, Parameter AC Stromsensor: hohe Glaubwürdigkeit | 0 | - |
| 0x21E712 | DOBD - SLE_B35 - Ladeelektronik, Parameter HV DC Stromsensor: hohe Glaubwürdigkeit | 0 | - |
| 0x21E713 | DOBD - SLE_B35 - Ladeelektronik, Parameter HV DC Spannungssensor: hohe Glaubwürdigkeit | 0 | - |
| 0x21E714 | DOBD - SLE_B35 - Ladeelektronik, Parameter Ausgangsspannung Hochsetzsteller: hohe Glaubwürdigkeit | 0 | - |
| 0x21E715 | DOBD - SLE_B35 - Ladeelektronik, RAM Testmust interner Fehler | 0 | - |
| 0x21E71B | DOBD - SLE_B35 - Charger Electronics; Software Error Stack overflow | 1 | - |
| 0x21E71C | DOBD - SLE_B35 - Charger Electronics:  Memory Protection Error | 0 | - |
| 0x21F007 | DOBD - SME-05 - HVS: Stromversorgung CSC- - Kurzschluss nach Masse | 0 | - |
| 0x21F008 | DOBD - SME-05 - HVS: Stromversorgung CSC- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F009 | DOBD - SME-05 - HVS: Stromversorgung CSC- - offene Leitung | 0 | - |
| 0x21F00A | DOBD - SME-05 - HVS: CSC Treiberfehler | 0 | - |
| 0x21F00B | DOBD - SME-05 - SME: Werte der Echtzeituhr unplausibel | 0 | - |
| 0x21F00D | DOBD - SME-05 - Kühlventil: Kurzschluss nach Masse | 1 | - |
| 0x21F00E | DOBD - SME-05 - Kühlventil: Kurzschluss nach Ubatt | 1 | - |
| 0x21F00F | DOBD - SME-05 - Kühlventil: offene Leitung | 1 | - |
| 0x21F010 | DOBD - SME-05 - Kühlventil: Treiberfehler | 1 | - |
| 0x21F011 | DOBD - SME-05 - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 0 | - |
| 0x21F012 | DOBD - SME-05 - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 0 | - |
| 0x21F013 | DOBD - SME-05 - HVS: Temp.-Sensor Kühlung: Kurzschluss nach Masse | 0 | - |
| 0x21F014 | DOBD - SME-05 - HVS: Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 | - |
| 0x21F015 | DOBD - SME-05 - SME: EEPROM, NV-Daten- - Interner Fehler | 0 | - |
| 0x21F016 | DOBD - SME-05 - SME: unerwarteter Reset festgestellt | 0 | - |
| 0x21F018 | DOBD - SME-05 - SME: RAM Defekt in Initialisierungsphase | 0 | - |
| 0x21F019 | DOBD - SME-05 - SME: RAM Defekt in Laufzeitphase | 0 | - |
| 0x21F01A | DOBD - SME-05 - SME: ROM Defekt in Laufzeitphase | 0 | - |
| 0x21F01E | DOBD - SME-05 - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 | - |
| 0x21F01F | DOBD - SME-05 - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 | - |
| 0x21F020 | DOBD - SME-05 - U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 | - |
| 0x21F021 | DOBD - SME-05 - U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 | - |
| 0x21F022 | DOBD - SME-05 - SBOX: Messbereichsüberschreitung U_ZK (oben) | 0 | - |
| 0x21F023 | DOBD - SME-05 - SBOX: Messbereichsüberschreitung U_ZK (unten) | 0 | - |
| 0x21F024 | DOBD - SME-05 - HVS: SBOX - BUS OFF | 0 | - |
| 0x21F025 | DOBD - SME-05 - HVS: SBOX -  CRC-Fehler erkannt auf SME | 0 | - |
| 0x21F029 | DOBD - SME-05 - HVS: SBOX -  Fehler Maincontroller | 0 | - |
| 0x21F02A | DOBD - SME-05 - HVS: SBOX -  Sensorfehler | 0 | - |
| 0x21F044 | DOBD - SME-05 - HVS: Wasserpumpe -  Event1 Trockenlauf | 0 | - |
| 0x21F045 | DOBD - SME-05 - HVS: Wasserpumpe -  offene Leitung | 0 | - |
| 0x21F046 | DOBD - SME-05 - HVS: Wasserpumpe -  Kurzschluss nach UBATT | 0 | - |
| 0x21F047 | DOBD - SME-05 - HVS: Wasserpumpe -  Event2 Blockierung oder Überstrom oder Unterschreitung der Minimaldrehzahl | 0 | - |
| 0x21F048 | DOBD - SME-05 - HVS: Wasserpumpe -  Event3 Übertemperatur erkannt | 0 | - |
| 0x21F04A | DOBD - SME-05 - HVS: Wasserpumpe -  Kurzschluss nach Masse | 0 | - |
| 0x21F04B | DOBD - SME-05 - HVS: CSC CAN: Steuerungsmodul BUS OFF | 0 | - |
| 0x21F04D | DOBD - SME-05 - HVS: CSC CAN: CSC 1 fehlt | 0 | - |
| 0x21F04E | DOBD - SME-05 - HVS: CSC CAN: CSC 2 fehlt | 0 | - |
| 0x21F04F | DOBD - SME-05 - HVS: CSC CAN: CSC 3 fehlt | 0 | - |
| 0x21F050 | DOBD - SME-05 - HVS: CSC CAN: CSC 4 fehlt | 0 | - |
| 0x21F051 | DOBD - SME-05 - HVS: CSC CAN: CSC 5 fehlt | 0 | - |
| 0x21F052 | DOBD - SME-05 - HVS: CSC CAN: CSC 6 fehlt | 0 | - |
| 0x21F053 | DOBD - SME-05 - HVS: CSC CAN: CSC 7 fehlt | 0 | - |
| 0x21F054 | DOBD - SME-05 - HVS: CSC CAN: CSC 8 fehlt | 0 | - |
| 0x21F055 | DOBD - SME-05 - HVS: CSC CAN: CSC 9 fehlt | 0 | - |
| 0x21F056 | DOBD - SME-05 - HVS: CSC CAN: CSC 10 fehlt | 0 | - |
| 0x21F057 | DOBD - SME-05 - HVS: CSC CAN: CSC 11 fehlt | 0 | - |
| 0x21F058 | DOBD - SME-05 - HVS: CSC CAN: CSC 12 fehlt | 0 | - |
| 0x21F061 | DOBD - SME-05 - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F062 | DOBD - SME-05 - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F063 | DOBD - SME-05 - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F064 | DOBD - SME-05 - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F065 | DOBD - SME-05 - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F066 | DOBD - SME-05 - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F067 | DOBD - SME-05 - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F068 | DOBD - SME-05 - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F069 | DOBD - SME-05 - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06A | DOBD - SME-05 - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06B | DOBD - SME-05 - HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06C | DOBD - SME-05 - HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06D | DOBD - SME-05 - HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06E | DOBD - SME-05 - HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06F | DOBD - SME-05 - HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F070 | DOBD - SME-05 - HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F071 | DOBD - SME-05 - HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F072 | DOBD - SME-05 - HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F073 | DOBD - SME-05 - HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F074 | DOBD - SME-05 - HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F075 | DOBD - SME-05 - HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F076 | DOBD - SME-05 - HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F077 | DOBD - SME-05 - HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F078 | DOBD - SME-05 - HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F0A1 | DOBD - SME-05 - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A2 | DOBD - SME-05 - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A3 | DOBD - SME-05 - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A4 | DOBD - SME-05 - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A5 | DOBD - SME-05 - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A6 | DOBD - SME-05 - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A7 | DOBD - SME-05 - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A8 | DOBD - SME-05 - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A9 | DOBD - SME-05 - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AA | DOBD - SME-05 - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AB | DOBD - SME-05 - HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AC | DOBD - SME-05 - HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AD | DOBD - SME-05 - HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AE | DOBD - SME-05 - HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AF | DOBD - SME-05 - HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B0 | DOBD - SME-05 - HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B1 | DOBD - SME-05 - HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B2 | DOBD - SME-05 - HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B3 | DOBD - SME-05 - HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B4 | DOBD - SME-05 - HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B5 | DOBD - SME-05 - HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B6 | DOBD - SME-05 - HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B7 | DOBD - SME-05 - HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B8 | DOBD - SME-05 - HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0C2 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 1 aufgetreten | 0 | - |
| 0x21F0C3 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 2 aufgetreten | 0 | - |
| 0x21F0C4 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 3 aufgetreten | 0 | - |
| 0x21F0C5 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 4 aufgetreten | 0 | - |
| 0x21F0C6 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 5 aufgetreten | 0 | - |
| 0x21F0C7 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 6 aufgetreten | 0 | - |
| 0x21F0C8 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 7 aufgetreten | 0 | - |
| 0x21F0C9 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 8 aufgetreten | 0 | - |
| 0x21F0CA | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 9 aufgetreten | 0 | - |
| 0x21F0CB | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 10 aufgetreten | 0 | - |
| 0x21F0CC | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 11 aufgetreten | 0 | - |
| 0x21F0CD | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 12 aufgetreten | 0 | - |
| 0x21F0E3 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F0E4 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F0E5 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F0E6 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F0E7 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F0E8 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F0E9 | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F0EA | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F0EB | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 9 | 0 | - |
| 0x21F0EC | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 10 | 0 | - |
| 0x21F0ED | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 11 | 0 | - |
| 0x21F0EE | DOBD - SME-05 - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 12 | 0 | - |
| 0x21F0F6 | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 1 | 0 | - |
| 0x21F0F7 | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 2 | 0 | - |
| 0x21F0F8 | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 3 | 0 | - |
| 0x21F0F9 | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 4 | 0 | - |
| 0x21F0FA | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 5 | 0 | - |
| 0x21F0FB | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 6 | 0 | - |
| 0x21F0FC | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 7 | 0 | - |
| 0x21F0FD | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 8 | 0 | - |
| 0x21F0FE | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 9 | 0 | - |
| 0x21F0FF | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 10 | 0 | - |
| 0x21F100 | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 11 | 0 | - |
| 0x21F101 | DOBD - SME-05 - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 12 | 0 | - |
| 0x21F10A | DOBD - SME-05 - Service Disconnect: Auswertung unplausibel | 0 | - |
| 0x21F110 | DOBD - SME-05 - Kühlventil: Ventil lässt sich nicht schließen | 1 | - |
| 0x21F111 | DOBD - SME-05 - Kühlventil: Ventil lässt sich nicht öffnen | 1 | - |
| 0x21F115 | DOBD - SME-05 - HVS: Hauptschalter: neg. Schütz klebt | 0 | - |
| 0x21F116 | DOBD - SME-05 - HVS: Hauptschalter: neg. Schütz lässt sich nicht schließen | 0 | - |
| 0x21F117 | DOBD - SME-05 - HVS: Hauptschalter: pos. Schütz klebt | 0 | - |
| 0x21F118 | DOBD - SME-05 - HVS: Hauptschalter: pos. Schütz lässt sich nicht schließen oder Sicherung ausgelöst | 0 | - |
| 0x21F119 | DOBD - SME-05 - HVS: Hauptschalter: Vorlade Schütz klebt | 0 | - |
| 0x21F11A | DOBD - SME-05 - HVS: Hauptschalter: Vorlade Schütz lässt sich nicht schließen | 0 | - |
| 0x21F11E | DOBD - SME-05 - Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 1 | - |
| 0x21F11F | DOBD - SME-05 - Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 0 | - |
| 0x21F122 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F123 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F124 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F125 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F126 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F127 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F128 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F129 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F12A | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 9 | 0 | - |
| 0x21F12B | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 10 | 0 | - |
| 0x21F12C | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 11 | 0 | - |
| 0x21F12D | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 12 | 0 | - |
| 0x21F133 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F134 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F135 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F136 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F137 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F138 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F139 | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F13A | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F13B | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 9 | 0 | - |
| 0x21F13C | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 10 | 0 | - |
| 0x21F13D | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 11 | 0 | - |
| 0x21F13E | DOBD - SME-05 - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 12 | 0 | - |
| 0x21F145 | DOBD - SME-05 - Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 1 | - |
| 0x21F146 | DOBD - SME-05 - Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 1 | - |
| 0x21F147 | DOBD - SME-05 - HVS: HV-Interlock: kein Signal erzeugt | 0 | - |
| 0x21F148 | DOBD - SME-05 - HV-Interlock: offene Leitung | 1 | - |
| 0x21F149 | DOBD - SME-05 - HV-Interlock: Kurzschluss in Schleife | 1 | - |
| 0x21F14A | DOBD - SME-05 - HV-Interlock: Kurzschluss nach Ubatt | 1 | - |
| 0x21F14B | DOBD - SME-05 - HV-Interlock: Kurzschluss nach Masse | 1 | - |
| 0x21F155 | DOBD - SME-05 - Vorladung -  Zeit zu lang | 1 | - |
| 0x21F157 | DOBD - SME-05 - Vorladung -  Kurzschluss im Zwischenkreis detektiert | 0 | - |
| 0x21F159 | DOBD - SME-05 - Plausibilität Stromwert -  Strom unplausibel. Kein Ersatzwert vorhanden | 0 | - |
| 0x21F15B | DOBD - SME-05 - HVS: Plausibilität Zwischenkreisspannung -  Spannung fehlerhaft, kein Ersatzwert vorhanden | 0 | - |
| 0x21F15E | DOBD - SME-05 - HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, kein Ersatzwert vorhanden | 0 | - |
| 0x21F161 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 1 -  Spannung unplausibel | 0 | - |
| 0x21F162 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 2 -  Spannung unplausibel | 0 | - |
| 0x21F163 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 3 -  Spannung unplausibel | 0 | - |
| 0x21F164 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 4 -  Spannung unplausibel | 0 | - |
| 0x21F165 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 5 -  Spannung unplausibel | 0 | - |
| 0x21F166 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 6 -  Spannung unplausibel | 0 | - |
| 0x21F167 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 7 -  Spannung unplausibel | 0 | - |
| 0x21F168 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 8 -  Spannung unplausibel | 0 | - |
| 0x21F169 | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 9 -  Spannung unplausibel | 0 | - |
| 0x21F16A | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 10 -  Spannung unplausibel | 0 | - |
| 0x21F16B | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 11 -  Spannung unplausibel | 0 | - |
| 0x21F16C | DOBD - SME-05 - HVS: Plausibillität Spannungssensorik CSC 12 -  Spannung unplausibel | 0 | - |
| 0x21F171 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 1 unplausibel | 0 | - |
| 0x21F172 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 2 unplausibel | 0 | - |
| 0x21F173 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 3 unplausibel | 0 | - |
| 0x21F174 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 4 unplausibel | 0 | - |
| 0x21F175 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 5 unplausibel | 0 | - |
| 0x21F176 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 6 unplausibel | 0 | - |
| 0x21F177 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 7 unplausibel | 0 | - |
| 0x21F178 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 8 unplausibel | 0 | - |
| 0x21F179 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 9 unplausibel | 0 | - |
| 0x21F17A | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 10 unplausibel | 0 | - |
| 0x21F17B | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 11 unplausibel | 0 | - |
| 0x21F17C | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperatur CSC 12 unplausibel | 0 | - |
| 0x21F183 | DOBD - SME-05 - HVS: Zelltemperaturen: Zu viele Sensoren unplausibel oder ausgefallen | 0 | - |
| 0x21F184 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 1 ausgefallen | 0 | - |
| 0x21F185 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 2 ausgefallen | 0 | - |
| 0x21F186 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 3 ausgefallen | 0 | - |
| 0x21F187 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 4 ausgefallen | 0 | - |
| 0x21F188 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 5 ausgefallen | 0 | - |
| 0x21F189 | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 6 ausgefallen | 0 | - |
| 0x21F18A | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 7 ausgefallen | 0 | - |
| 0x21F18B | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 8 ausgefallen | 0 | - |
| 0x21F18C | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 9 ausgefallen | 0 | - |
| 0x21F18D | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 10 ausgefallen | 0 | - |
| 0x21F18E | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 11 ausgefallen | 0 | - |
| 0x21F18F | DOBD - SME-05 - HVS: Zelltemperaturen -  Modultemperaturen CSC 12 ausgefallen | 0 | - |
| 0x21F197 | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 1, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F198 | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 2, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F199 | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 3, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19A | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 4, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19B | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 5, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19C | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 6, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19D | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 7, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19E | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 8, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19F | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 9, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A0 | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 10, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A1 | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 11, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A2 | DOBD - SME-05 - HVS: Zelltemperaturen: Hohe Temperatur in Modul 12, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A7 | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 1 Übertemperatur | 0 | - |
| 0x21F1A8 | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 2 Übertemperatur | 0 | - |
| 0x21F1A9 | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 3 Übertemperatur | 0 | - |
| 0x21F1AA | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 4 Übertemperatur | 0 | - |
| 0x21F1AB | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 5 Übertemperatur | 0 | - |
| 0x21F1AC | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 6 Übertemperatur | 0 | - |
| 0x21F1AD | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 7 Übertemperatur | 0 | - |
| 0x21F1AE | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 8 Übertemperatur | 0 | - |
| 0x21F1AF | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 9 Übertemperatur | 0 | - |
| 0x21F1B0 | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 10 Übertemperatur | 0 | - |
| 0x21F1B1 | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 11 Übertemperatur | 0 | - |
| 0x21F1B2 | DOBD - SME-05 - HVS: Zelltemperaturen: CSC 12 Übertemperatur | 0 | - |
| 0x21F1BA | DOBD - SME-05 - HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 | - |
| 0x21F1BD | DOBD - SME-05 - Ladungszustand: kritische untere SoC-Grenze erreicht | 0 | - |
| 0x21F1C3 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 1 festgestellt | 0 | - |
| 0x21F1C4 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 2 festgestellt | 0 | - |
| 0x21F1C5 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 3 festgestellt | 0 | - |
| 0x21F1C6 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 4 festgestellt | 0 | - |
| 0x21F1C7 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 5 festgestellt | 0 | - |
| 0x21F1C8 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 6 festgestellt | 0 | - |
| 0x21F1C9 | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 7 festgestellt | 0 | - |
| 0x21F1CA | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 8 festgestellt | 0 | - |
| 0x21F1CB | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 9 festgestellt | 0 | - |
| 0x21F1CC | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 10 festgestellt | 0 | - |
| 0x21F1CD | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 11 festgestellt | 0 | - |
| 0x21F1CE | DOBD - SME-05 - HVS: Zellüberwachung: Zelldefekt in Modul 12 festgestellt | 0 | - |
| 0x21F205 | DOBD - SME-05 - HVS: Sicherheitskonzept, Ebene 2: Strom zu niedrig/hoch | 1 | - |
| 0x21F20D | DOBD - SME-05 - SME: Sicherheitskonzept -  Abschaltung durch Ebene2 | 0 | - |
| 0x21F21D | DOBD - SME-05 - HVS: Sicherheitskonzept, Ebene 2: Strom außerhalb der Leitungsschutzgrenzen | 1 | - |
| 0x21F220 | DOBD - SME-05 - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Masse | 0 | - |
| 0x21F221 | DOBD - SME-05 - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F222 | DOBD - SME-05 - HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 | - |
| 0x21F227 | DOBD - SME-05 - Plausibilität Kühlmittelsensor - Kühlmittelsensor liefert unplausible Werte zurück | 0 | - |
| 0x21F277 | DOBD - SME-05 - HVS: SBOX Temperatursensorik NTC OOR high | 0 | - |
| 0x21F278 | DOBD - SME-05 - HVS: SBOX Temperatursensorik NTC OOR low | 0 | - |
| 0x21F279 | DOBD - SME-05 - HVS: SBOX Temperatursensorik Plausibilitätsfehler | 0 | - |
| 0x21F2C1 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 1 ausgefallen | 0 | - |
| 0x21F2C2 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 2 ausgefallen | 0 | - |
| 0x21F2C3 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 3 ausgefallen | 0 | - |
| 0x21F2C4 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 4 ausgefallen | 0 | - |
| 0x21F2C5 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 5 ausgefallen | 0 | - |
| 0x21F2C6 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 6 ausgefallen | 0 | - |
| 0x21F2C7 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 7 ausgefallen | 0 | - |
| 0x21F2C8 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 8 ausgefallen | 0 | - |
| 0x21F2C9 | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 9 ausgefallen | 0 | - |
| 0x21F2CA | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 10 ausgefallen | 0 | - |
| 0x21F2CB | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 11 ausgefallen | 0 | - |
| 0x21F2CC | DOBD - SME-05 - HVS: Symmetrierschaltung Modul 12 ausgefallen | 0 | - |
| 0x22223C | DC/DC-Wandler - Interner Kommunikationsfehler - Controller nach DC/DC fehlerhaft | 0 | - |
| 0x22223D | DC/DC-Wandler - Interner Kommunikationsfehler - DC/DC nach Controller fehlerhaft | 0 | - |
| 0x222762 | Steuergerät intern - Hauptprozessor - RAM - FUSI | 0 | - |
| 0x222763 | Steuergerät intern - Hauptprozessor - Flash | 0 | - |
| 0x222764 | Steuergerät intern - Hauptprozessor - RAM | 0 | - |
| 0x222765 | Steuergerät intern - Inverter 1 - FUSI RAM MMU Write Violation | 0 | - |
| 0x222766 | Steuergerät intern - Inverter 1 - ECC Flash Error | 0 | - |
| 0x222767 | Steuergerät intern - Inverter 1 - ECC RAM Error | 0 | - |
| 0x222768 | Steuergerät intern - Inverter 2 - FUSI RAM MMU Write Violation | 0 | - |
| 0x222769 | Steuergerät intern - Inverter 2 - ECC Flash Error | 0 | - |
| 0x22276D | Steuergerät intern - Inverter 2 - SPI SOH Heartbeat | 0 | - |
| 0x22276E | Steuergerät intern - Inverter 2 - SPI SOH Checksum | 0 | - |
| 0x22276F | Steuergerät intern - Inverter 1 - SPI SOH Heartbeat | 0 | - |
| 0x222770 | Steuergerät intern - Inverter 1 - SPI SOH Checksum | 0 | - |
| 0x222771 | Steuergerät intern - Hauptprozessor zu Inverter 2 - Heartbeat | 0 | - |
| 0x222772 | Steuergerät intern - Hauptprozessor zu Inverter 2 - Checksum | 0 | - |
| 0x222773 | Steuergerät intern - Kommunikation - Hauptprozessor zu Inverter 2 - FUSI SPI Heartbeat | 0 | - |
| 0x222774 | Steuergerät intern - Kommunikation - Hauptprozessor zu Inverter 2 - FUSI SPI Checksum | 0 | - |
| 0x222775 | Steuergerät intern - Hauptprozessor zu Inverter 1 - Heartbeat | 0 | - |
| 0x222776 | Steuergerät intern - Hauptprozessor zu Inverter 1 - Checksum | 0 | - |
| 0x222777 | Main Dogclutch Safe-State Test Fail | 0 | - |
| 0x222803 | HVPM - Laden - Degradation von Ladehardware | 0 | - |
| 0x222804 | HVPM - Laden - Fehler Steckererkennung | 0 | - |
| 0x222808 | HVPM - Start - Ausfall/Fehlverhalten des DCDC-Wandlers | 0 | - |
| 0x222809 | HVPM - Start - Abschaltaufforderer Kategorie 1 | 0 | - |
| 0x22280A | HVPM - Start - Abschaltaufforderer Kategorie 2 | 0 | - |
| 0x22280B | HVPM - Start - Abschaltaufforderer Kategorie 4 | 0 | - |
| 0x222811 | HVPM - Start - Priorisierung LK Änderung | 0 | - |
| 0x222836 | HVPM - Start - Signalausfall | 0 | - |
| 0x222F07 | Steuergerät intern - Inverter 2 - Non-FuSi-SPI SOH Heartbeat | 0 | - |
| 0x222F08 | Steuergerät intern - Inverter 2 - Non-FuSi-SPI SOH Checksum | 0 | - |
| 0x222F20 | Steuergerät intern - DC/DC-Wandler - Hardware - Sollwert unterschritten | 0 | - |
| 0x222F21 | Steuergerät intern - DC/DC-Wandler - Hardware - Sollwert überschritten | 0 | - |
| 0x222F91 | Steuergerät intern - DC/DC-Wandler - Memory Fault - Flash | 0 | - |
| 0x222F93 | Steuergerät intern - DC/DC-Wandler - Hardware - ADC Fehler | 0 | - |
| 0x222F94 | Steuergerät intern - DC/DC-Wandler - Hardware - Power Supply | 0 | - |
| 0x222FB5 | Steuergerät intern - Inverter 1 - Software - Interner Watchdog max. | 0 | - |
| 0x222FB7 | Steuergerät intern - Inverter 1 - Software - Externer Watchdog max. | 0 | - |
| 0x222FB9 | Steuergerät intern - Inverter 1 - Hardware - ADC Fehler | 0 | - |
| 0x222FBA | Steuergerät intern - Inverter 1 - Software - Stack Integrity | 0 | - |
| 0x222FBB | Steuergerät intern - Inverter 1 - Software - Program Flow Control | 0 | - |
| 0x222FBD | Steuergerät intern - Inverter 2 - Hardware - ADC Fehler | 0 | - |
| 0x222FBE | Steuergerät intern - Inverter 2 - Software - Externer Watchdog max. | 0 | - |
| 0x222FBF | Steuergerät intern - Inverter 2 - Software - Interner Watchdog max. | 0 | - |
| 0x222FC0 | Steuergerät intern - Inverter 2 - Software - Interner Watchdog min. | 0 | - |
| 0x222FC1 | Steuergerät intern - Inverter 2 - Software - Program Flow Control | 0 | - |
| 0x222FC2 | Steuergerät intern - Inverter 2 - Software - Stack Integrity | 0 | - |
| 0x222FC7 | Steuergerät intern - Hauptprozessor - Software - Interner Watchdog max. | 0 | - |
| 0x222FC8 | Steuergerät intern - Hauptprozessor - Software - Interner Watchdog min. | 0 | - |
| 0x222FC9 | Steuergerät intern - Hauptprozessor - Software - Program Flow Control | 0 | - |
| 0x222FCA | Steuergerät intern - Hauptprozessor - Software - Externer Watchdog max. | 0 | - |
| 0x222FCB | Steuergerät intern - Hauptprozessor - Software - Stack Integrity | 0 | - |
| 0x222FED | A-CAN - DIAG - Disable | 0 | - |
| 0x222FEE | A-CAN - DME1 - Offline | 0 | - |
| 0x222FEF | A-CAN - EGS - Offline | 0 | - |
| 0x222FF0 | A-CAN - SLE - Offline | 0 | - |
| 0x222FF1 | A-CAN - SME - Offline | 0 | - |
| 0x222FF2 | DC/DC-Wandler - Ground strap diagnosis - Input voltage - open circuit | 0 | - |
| 0x222FF3 | DC/DC-Wandler - Ground strap diagnosis - Monitor interface fault | 0 | - |
| 0x222FF4 | FA-CAN - DIAG - Disable | 0 | - |
| 0x222FF5 | FA-CAN - DME1 - Offline | 0 | - |
| 0x222FF6 | FA-CAN - EGS - Offline | 0 | - |
| 0x222FF7 | FA-CAN - ENTRYNAV - Offline | 0 | - |
| 0x222FF8 | FA-CAN - FBDC - Offline | 0 | - |
| 0x222FF9 | FA-CAN - IHKA - Offline | 0 | - |
| 0x222FFA | FA-CAN - KOMBI - Offline | 0 | - |
| 0x222FFB | FA-CAN - SLE - Offline | 0 | - |
| 0x222FFC | Flexray - ACSM - Offline | 0 | - |
| 0x222FFD | Flexray - DIAG - Disable | 0 | - |
| 0x222FFE | Flexray - DME1 - Offline | 0 | - |
| 0x222FFF | Flexray - DSC - Offline | 0 | - |
| 0x223000 | Flexray - ZGW - Offline | 0 | - |
| 0x223001 | FuSi - HV - Crash - DCDC Converter - CrashCommand - State of Health | 0 | - |
| 0x223002 | FuSi - HV - Crash - Detected by Crash Level 2 | 0 | - |
| 0x223003 | FuSi - HV - Crash - L2 Latent Fault Test Failed | 0 | - |
| 0x223004 | FuSi - HV - Crash - L2 Lock Active | 0 | - |
| 0x223005 | FuSi - HV - Crash - Message Plausibility | 0 | - |
| 0x223006 | FuSi - HV - Crash - Security 3 detected By Level 1 | 0 | - |
| 0x223007 | FuSi - HV - HVDC - Active discharge - PIC controller Command Status - State of Health | 0 | - |
| 0x223008 | FuSi - HV - HVDC - Active discharge - PIC Status Frequency OOR | 0 | - |
| 0x223009 | FuSi - HV - HVDC - Active discharge Determined - Contactor Not Open within Time Limit | 0 | - |
| 0x22300B | FuSi - HV - HVDC - HVSGR - AKS Latent Fault Test Failed | 0 | - |
| 0x22300C | FuSi - HV - HVDC - HVSGR - Level 2 Latent Fault Test Failed | 0 | - |
| 0x22300D | FuSi - HV - HVDC - NSENS - Analog Signal Stuck at low reference | 0 | - |
| 0x22300E | FuSi - HV - HVDC - PSENS - Analog Signal Stuck at low reference | 0 | - |
| 0x22300F | FuSi - HV - HVDC - Processed Analog Signal Stuck at high reference | 0 | - |
| 0x223010 | FuSi - HV - HVDC - PSENS - Analog Signal Stuck at high reference | 0 | - |
| 0x223011 | FuSi - HV - HVDC - NSENS - Analog Signal Stuck at high reference | 0 | - |
| 0x223014 | FuSi - HV - HVDC - Short Circuit Latent Fault Test Failed | 0 | - |
| 0x223015 | FuSi - HV - HVDC - TEM - AKS Latent Fault Test Failed | 0 | - |
| 0x223016 | FuSi - HVSGR - AKS Command | 0 | - |
| 0x223017 | FuSi - HV - HVSM - KL30B - Analog and Discrete Processing different Status | 0 | - |
| 0x223019 | FuSi - HV - HVSM - KL30B - Analog Signal shorted to power reference | 0 | - |
| 0x22301A | FuSi - HV - HVSM - Use of KL30B - KL30B OOR High | 0 | - |
| 0x22301B | FuSi - HV - HVSM - Use of KL30B - KL30B OOR Low | 0 | - |
| 0x22301D | FuSi - HV - Over Voltage Detection - Level 2A Latent Fault Test Failed | 0 | - |
| 0x22301E | FuSi - HV - Over Voltage Detection - Level 2A OOR High | 0 | - |
| 0x22301F | FuSi - HV - Over Voltage Detection - Level 2B Latent Fault Test Failed | 0 | - |
| 0x223023 | FuSi - HV - Plausibility - Level 2B - Check between PEU HV and SME HV | 0 | - |
| 0x223024 | FuSi - HV - TEM - AKS Command - State of Health | 0 | - |
| 0x223025 | MAIN - Cold Start - Time Exceeded | 0 | - |
| 0x2231C0 | Steuergerät intern - Hauptprozessor - Hardware - ADC Fehler | 0 | - |
| 0x2231C1 | FuSi - HV - HVIL - SME Plausibilitätsfehler | 0 | - |
| 0x2231C2 | FuSi - HV - Crash - Plausibilitätsfehler | 0 | - |
| 0x22332C | Steuergerät intern - ELUP - Hardware - ADC Fehler | 0 | - |
| 0x22332D | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22332E | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22332F | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223330 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223331 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223332 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223345 | FuSi- HV- AC Current- Latent Fault- MC2 | 0 | - |
| 0x223346 | FuSi- HV- AC Current- Latent Fault  MC4 | 0 | - |
| 0x223348 | FuSi - HV - SLE Fault | 0 | - |
| 0x223359 | FUSI- HV- Active Discharge Inhibited By Thermal Rest- MC0 | 0 | - |
| 0x22335A | FUSI- HV- HVSM2 Commands ICE OFF to Lower HVSGR Speed- MC0 | 0 | - |
| 0x22335B | FuSi - HVSGR - Torque Invalid | 0 | - |
| 0x22336A | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) CAL ID Timeout | 0 | - |
| 0x22336B | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) CAL ID Timeout | 0 | - |
| 0x22336C | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) CAL ID Timeout | 0 | - |
| 0x22336D | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) CAL ID Timeout | 0 | - |
| 0x22336E | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) CAL ID Timeout | 0 | - |
| 0x22336F | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) CAL ID Timeout | 0 | - |
| 0x223370 | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) CVN Timeout | 0 | - |
| 0x223371 | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) CVN Timeout | 0 | - |
| 0x223372 | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) CVN Timeout | 0 | - |
| 0x223373 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) CVN Timeout | 0 | - |
| 0x223374 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) CVN Timeout | 0 | - |
| 0x223375 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) CVN Timeout | 0 | - |
| 0x22337F | Steuergerät intern - Inverter 2 - Memory Fault - RAM | 0 | - |
| 0x22338E | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) CAL ID Timeout | 0 | - |
| 0x22338F | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) CVN Timeout | 0 | - |
| 0x223390 | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223398 | FuSi - HV - HVDC - TEM- Over-Current Detected By L2 | 0 | - |
| 0x223399 | FuSi - HV - HVDC - HVSGR- Over-Current Detected By L3 | 0 | - |
| 0x22339B | Steuergerät intern - Hauptprozessor - Datenbereich - CVN Fehler | 0 | - |
| 0x22339C | Steuergerät intern - Inverter 1 - Datenbereich - CVN Fehler | 0 | - |
| 0x22339D | Steuergerät intern - Inverter 2 - Datenbereich - CVN Fehler | 0 | - |
| 0x22339E | Inverter 2 Verbrennerfern - I2T Zeitfläche 95% überschritten | 0 | - |
| 0x2233A0 | Inverter 2 Verbrennerfern - Spannungsversorgung - KL30B ungültig | 0 | - |
| 0x2233A1 | Inverter 2 Verbrennerfern - Controler Board Temperatur ungültig | 0 | - |
| 0x2233A2 | Inverter 2 Verbrennerfern - Kühlwassertemperatur zu hoch | 0 | - |
| 0x2233AC | Steuergerät intern - Hauptprozessor - DEM Memory Fault | 0 | - |
| 0x2233B7 | Steuergerät intern - Inverter 2 - Resolver IC - NM invalid | 0 | - |
| 0x2233B8 | Steuergerät intern - Inverter 2 - Resolver IC - loss of NM and Noisy A and/or B channel signals | 0 | - |
| 0x801100 | DOBD - IHKA - BDC Drucksensor Kältemittel: Plausibilität | 0 | - |
| 0x801101 | DOBD - IHKA - BDC Drucksensor Kältemittel: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x801102 | DOBD - IHKA - BDC Drucksensor Kältemittel: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x801103 | DOBD - IHKA - BDC Drucksensor Kältemittel: Kurzschluss nach Masse | 0 | - |
| 0x801104 | DOBD - IHKA - BDC Drucksensor Kältemittel: Kurzschluss nach Plus | 0 | - |
| 0x801106 | DOBD - IHKA - OBD: Motorraum Heizkreislaufumschaltventil - klemmt | 0 | - |
| 0x801160 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 | - |
| 0x801161 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Plus | 0 | - |
| 0x801162 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Leitungsunterbrechung | 0 | - |
| 0x801163 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801164 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801165 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Plausibilitätsfehler | 0 | - |
| 0x801166 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 | - |
| 0x801167 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Plus | 0 | - |
| 0x801168 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Leitungsunterbrechung | 0 | - |
| 0x801169 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x80116A | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x80116B | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Plausibilitätsfehler | 0 | - |
| 0x80116C | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 | - |
| 0x80116D | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Plus | 0 | - |
| 0x80116E | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Leitungsunterbrechung | 0 | - |
| 0x80116F | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801170 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801171 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Plausibilitätsfehler | 0 | - |
| 0x8011AF | DOBD - IHKA - Verdampfertemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x8011B0 | DOBD - IHKA - Verdampfertemperatursensor: Kurzschluss nach Minus | 0 | - |
| 0x8011E8 | DOBD - IHKA - eKMV HV-Stromsensor Kurzschluss nach Masse | 0 | - |
| 0x8011E9 | DOBD - IHKA - eKMV HV-Stromsensor Kurzschluss nach Vbatt 5V | 0 | - |
| 0x8011EA | DOBD - IHKA - eKMV HV-Stromsensor Kommunikationsverlust zum Sensor | 0 | - |
| 0x8011EB | DOBD - IHKA - eKMV HV-Stromsensor oberhalb des sepezifizirten Betriebsbereich | 0 | - |
| 0x8011EC | DOBD - IHKA - eKMV HV-Stromsensor unterhalb des spezifizirten Betriebsbereich | 0 | - |
| 0x8011ED | DOBD - IHKA - eKMV HV-Stromsensor Plausibilitätsfehler / Sensor stuck | 0 | - |
| 0x80120D | DOBD - IHKA - Unterspannung erkannt | 1 | - |
| 0x80120E | DOBD - IHKA - Überspannung erkannt | 1 | - |
| 0x80120F | DOBD - IHKA - Keine Kommunikation über AC-LIN möglich | 0 | - |
| 0x801211 | DOBD - IHKA - Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Unterdruck | 0 | - |
| 0x801212 | DOBD - IHKA - Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Überdruck | 0 | - |
| 0x801215 | DOBD - IHKA - eKMV: Leistungsminderung oder Abschaltung während HV-Batteriekühlung aufgrund eKMV interner Betriebstrategie. | 0 | - |
| 0x8012C0 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Kurzschluss nach Minus | 0 | - |
| 0x8012C1 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x8012C3 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x8012C4 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x8012C5 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Plausibilitätsfehler | 0 | - |
| 0x8012C6 | DOBD - IHKA - eKMV Visteon Temperatursensor Platine 1 - Plausibilitätsfehler | 0 | - |
| 0x8012F1 | DOBD - IHKA - OBD: Kältekreislauf - HV-Batterie - Kühlleistung unplausibel | 0 | - |
| 0x801372 | DOBD - IHKA - eDH: OBD Speicherfehler RAM | 0 | - |
| 0x801373 | DOBD - IHKA - eDH: OBD Speicherfehler EEPROM | 0 | - |
| 0x801374 | DOBD - IHKA - eDH: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x801375 | DOBD - IHKA - eDH: OBD Softwarefehler Watchdog | 0 | - |
| 0x801376 | DOBD - IHKA - eDH: OBD Fehler in der Micro-Controller-Peripherie | 0 | - |
| 0x801382 | DOBD - IHKA - EDH: OBD HV-Spannungssensor über Betriebsbereich | 0 | - |
| 0x801383 | DOBD - IHKA - EDH: OBD HV-Spannungssensor unter Betriebsbereich | 0 | - |
| 0x801385 | DOBD - IHKA - EDH: OBD Temperaturfühler Platine über Betriebsbereich | 0 | - |
| 0x801386 | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel über Betriebsbereich | 0 | - |
| 0x801388 | DOBD - IHKA - EDH: OBD Temperaturfühler Platine Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x801389 | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Masse | 0 | - |
| 0x80138A | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Batterie / Leitung unterbrochen | 0 | - |
| 0x80138C | DOBD - IHKA - EDH: OBD Temperaturfühler Platine unter Betriebsbereich | 0 | - |
| 0x80138D | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel unter Betriebsbereich | 0 | - |
| 0x801390 | DOBD - IHKA - EDH: OBD Temperaturfühler Platine Kurzschluss zu Batterie | 0 | - |
| 0x801391 | DOBD - IHKA - eDH: OBD HV Spannungssensor Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x801392 | DOBD - IHKA - eDH: OBD HV Spannungssensor Kurzschluss zu Batterie | 0 | - |
| 0x801393 | DOBD - IHKA - eDH: OBD HV Spannungssensor offen | 0 | - |
| 0x801394 | DOBD - IHKA - eDH: OBD Stromsensor 2 Plausibilisierung | 0 | - |
| 0x801395 | DOBD - IHKA - eDH: OBD Stromsensor 2 offen | 0 | - |
| 0x801396 | DOBD - IHKA - eDH: OBD HV Spannungssensor Plausibilisierung | 0 | - |
| 0x801397 | DOBD - IHKA - eDH: OBD Stromsensor 1  Plausibilisierung | 0 | - |
| 0x801398 | DOBD - IHKA - eDH: OBD Stromsensor 1 offen | 0 | - |
| 0x801399 | DOBD - IHKA - eDH: OBD Stromsensor 1 unter Betriebsbereich | 0 | - |
| 0x80139A | DOBD - IHKA - eDH: OBD Stromsensor 1 über Betriebsbereich | 0 | - |
| 0x80139B | DOBD - IHKA - eDH: OBD Stromsensor 1  Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x80139C | DOBD - IHKA - eDH: OBD Stromsensor 1 Kurzschluss zu Batterie | 0 | - |
| 0x80139D | DOBD - IHKA - eDH: OBD Temperaturfühler Platine Plausibilisierung | 0 | - |
| 0x80139E | DOBD - IHKA - eDH: OBD Temperaturfühler Platine offen | 0 | - |
| 0x80139F | DOBD - IHKA - eDH: OBD Stromsensor 2 unter Betriebsbereich | 0 | - |
| 0x8013A0 | DOBD - IHKA - eDH: OBD Stromsensor 2 über Betriebsbereich | 0 | - |
| 0x8013A1 | DOBD - IHKA - eDH: OBD Stromsensor 2 Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x8013A3 | DOBD - IHKA - Funktionsfehler elektrischer Durchlauferhitzer | 0 | - |
| 0x8013A4 | DOBD - IHKA - eDH: OBD Stromsensor 2 Kurzschluss zu Batterie | 0 | - |
| 0x8013A5 | DOBD - IHKA - eDH: OBD Stromsensor 3 Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x8013A6 | DOBD - IHKA - eDH: OBD Stromsensor 3 Kurzschluss zu Batterie | 0 | - |
| 0x8013A7 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel offen | 0 | - |
| 0x8013A8 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel Plausibilisierung | 0 | - |
| 0x8013A9 | DOBD - IHKA - eDH: OBD Speicherfehler ROM | 0 | - |
| 0x8013AA | DOBD - IHKA - eDH: OBD Stromsensor 3 offen | 0 | - |
| 0x8013AB | DOBD - IHKA - eDH: OBD Stromsensor 3 über Betriebsbereich | 0 | - |
| 0x8013AC | DOBD - IHKA - eDH: OBD Stromsensor 3 unter Betriebsbereich | 0 | - |
| 0x8013AD | DOBD - IHKA - eDH: OBD Stromsensor 3 Plausibilisierung | 0 | - |
| 0x8013AE | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Masse / Leitung unterbrochen | 0 | - |
| 0x8013AF | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Batterie | 0 | - |
| 0x8013B0 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - offen | 0 | - |
| 0x8013B1 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - über Betriebsbereich | 0 | - |
| 0x8013B2 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - unter Betriebsbereich | 0 | - |
| 0x8013B3 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Plausibilität | 0 | - |
| 0x8013B4 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Masse / Leitung unterbrochen | 0 | - |
| 0x8013B5 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Batterie | 0 | - |
| 0x8013B6 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - offen | 0 | - |
| 0x8013B7 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - unter Betriebsbereich | 0 | - |
| 0x8013B8 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - über Betriebsbereich | 0 | - |
| 0x8013B9 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Plausibilität | 0 | - |
| 0x8013BA | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Masse / Leitung unterbrochen | 0 | - |
| 0x8013BB | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Batterie | 0 | - |
| 0x8013BC | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - offen | 0 | - |
| 0x8013BD | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - unter Betriebsbereich | 0 | - |
| 0x8013BE | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - über Betriebsbereich | 0 | - |
| 0x8013BF | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Plausibilität | 0 | - |
| 0x8013C0 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Masse | 0 | - |
| 0x8013C1 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Batterie | 0 | - |
| 0x8013C3 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013C4 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013C5 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Plausibilität | 0 | - |
| 0x8013C6 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Masse | 0 | - |
| 0x8013C7 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Batterie | 0 | - |
| 0x8013C9 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013CA | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013CC | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013CD | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Kurzschluss zu Batterie | 0 | - |
| 0x8013CF | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D0 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D1 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Plausibilität | 0 | - |
| 0x8013D2 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Kurzschluss nach Masse / Leitungsunterbrechung | 0 | - |
| 0x8013D3 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Kurzschluss nach Batterie | 0 | - |
| 0x8013D5 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D6 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D8 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013D9 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Batterie | 0 | - |
| 0x8013DB | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013DC | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013DD | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Plausibilität | 0 | - |
| 0x8013DE | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013DF | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Batterie | 0 | - |
| 0x8013E1 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E2 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E3 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Plausibilität | 0 | - |
| 0x8013E4 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013E5 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Batterie | 0 | - |
| 0x8013E7 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E8 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E9 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Plausibilität | 0 | - |
| 0x8013EA | DOBD - IHKA - eKMV: OBD Speicherfehler RAM | 0 | - |
| 0x8013EB | DOBD - IHKA - eKMV: OBD Speicherfehler ROM | 0 | - |
| 0x8013EC | DOBD - IHKA - eKMV: OBD Speicherfehler EEPROM | 0 | - |
| 0x8013ED | DOBD - IHKA - eKMV: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x8013EE | DOBD - IHKA - eKMV: OBD Softwarefehler Watchdog | 0 | - |
| 0x8013EF | DOBD - IHKA - eKMV: OBD Fehler Micro-Controller-Peripherie | 0 | - |
| 0x8013F6 | DOBD - IHKA - Funktionsprüfung eKMV (OBD) | 0 | - |
| 0x8013F7 | DOBD - IHKA - Verdampfertemperatursensor: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013F8 | DOBD - IHKA - Verdampfertemperatursensor: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013F9 | DOBD - IHKA - Verdampfertemperatursensor: Plausibilität | 0 | - |
| 0x8013FA | DOBD - IHKA - Micro-Controller Peripherie Fehler (IHKA) | 0 | - |
| 0x8013FB | DOBD - IHKA - RAM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FC | DOBD - IHKA - ROM/Flash Speicher Fehler (IHKA) | 0 | - |
| 0x8013FD | DOBD - IHKA - EEPROM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FE | DOBD - IHKA - Software Laufzeitfehler (IHKA) | 0 | - |
| 0x8013FF | DOBD - IHKA - Software Watchdogfehler (IHKA) | 0 | - |
| 0xCAC47C | DOBD - SME-05 - LE-CAN Control Module Bus OFF | 0 | - |
| 0xCAC486 | DOBD - SME-05 - A-CAN Control Module Bus OFF | 0 | - |
| 0xCAD401 | DOBD - SME-05 - Botschaft (Außentemperatur, 0x2CA) fehlt | 1 | - |
| 0xCAD403 | DOBD - SME-05 - Botschaft (Zustand Fahrzeug 0x3C) fehlt | 1 | - |
| 0xCAD409 | DOBD - SME-05 - Botschaft (Freigabe Kühlung Hochvolt-Batterie, 0x37B) fehlt | 1 | - |
| 0xCAD40C | DOBD - SME-05 - Botschaft (Klemmen, 0x12F) fehlt | 1 | - |
| 0xCAD415 | DOBD - SME-05 - Botschaft (Trennschalter HVS, 0x10B) fehlt | 1 | - |
| 0xCAD416 | DOBD - SME-05 - Schnittstelle AE Vorgabe Trennschalter Hochvoltspeicher, 0x10B: Signal ungültig | 1 | - |
| 0xCE040A | DOBD - SLE_B35 - FA-CAN Control Module Bus OFF | 0 | - |
| 0xCE0486 | DOBD - SLE_B35 - A-CAN Control Module Bus OFF | 0 | - |
| 0xCE1401 | DOBD - SLE_B35 - Undefined Signal(ST_GRSEL_DRV,0x3F9) Reciever SLE, trasmitter DME | 0 | - |
| 0xCE1404 | DOBD - SLE_B35 - Invalid_Signal(ST_GRSEL_DRV,0x3F9) Reciever SLE, trasmitter DME | 0 | - |
| 0xCE1405 | DOBD - SLE_B35 - FA-CAN, Botschaft (Klemmen, 0x12F) fehlt, Empfänger SLE, Sender BDC | 0 | - |
| 0xCE1409 | DOBD - SLE_B35 - FA-CAN, Botschaft (Zentralverriegelung und Klappenzustand, 0x2FC) fehlt, Empfänger SLE, Sender BDC | 0 | - |
| 0xCE140B | DOBD - SLE_B35 - FA-CAN, Botschaft (Steuerung Zentralverriegelung, 0x2A0) fehlt, Empfänger SLE, Sender BDC | 0 | - |
| 0xCE1410 | DOBD - SLE_B35 - FA-CAN, Botschaft (Ladestatus, 0x3E9) fehlt, Empfänger SLE, Sender AE | 0 | - |
| 0xCE1411 | DOBD - SLE_B35 - FA-CAN, Botschaft (Daten Antriebsstrang 2, 0x3F9) fehlt, Empfänger SLE, Sender DME | 0 | - |
| 0xCE1412 | DOBD - SLE_B35 - Signal (ST_KL, 0x12F) nicht defniert, Empfänger SLE, Sender BDC | 0 | - |
| 0xCE1413 | DOBD - SLE_B35 - Signal (ST_CHGRDI, 0x3E9) nicht definiert, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1414 | DOBD - SLE_B35 - Signal (ST_CHGRDI,0x3E9) nicht definiert, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1415 | DOBD - SLE_B35 - Signal (CTR_SWO_EKP_CR, 0x19B) ungültig, Empfänger SLE, Sender ACSM | 0 | - |
| 0xCE1416 | DOBD - SLE_B35 - Signal (CTR_SWO_EKP_CR, 0x19B) nicht definiert, Empfänger SLE, Sender ACSM | 0 | - |
| 0xCE1417 | DOBD - SLE_B35 - Signal (CTR_CLSY_DRD, 0x2A0) ungültig, Empfänger SLE, Sender BDC | 0 | - |
| 0xCE1418 | DOBD - SLE_B35 - Signal (ST_CLSY, 0x2FC) ungültig, Empfänger SLE, Sender BDC | 0 | - |
| 0xCE1419 | DOBD - SLE_B35 - Keine Meldung ( Steuerung Crash, 19B), Empfänger SLE, Sender DSC | 0 | - |
| 0xCE1501 | DOBD - SLE_B35 - Keine Meldung (CTR_PRNT, 0x09E), Empfänger SLE, Sender EME | 0 | - |
| 0xCE1502 | DOBD - SLE_B35 - Keine Meldung (ST_HVSTO_1, 0x1FA), Empfänger SLE, Sender KMU | 0 | - |
| 0xCE1506 | DOBD - SLE_B35 - Keine Meldung (SPEC_CF_CHGE, 0x153) SLE Empfänger, Sender EME | 0 | - |
| 0xCE1507 | DOBD - SLE_B35 - A-CAN, Botschaft (Status Hochvolt-Batterieeinheit 2, 0x112) fehlt, Empfänger SLE, Sender SME | 0 | - |
| 0xCE1509 | DOBD - SLE_B35 - A-CAN, Botschaft (Hochvolt-Batterie, 0x431) fehlt, Empfänger SLE, Sender SME | 0 | - |
| 0xCE150A | DOBD - SLE - Signal (ST_SER_DSCO_PLG, 0x431) ungültig, Empfänger SLE, Sender SME | 0 | - |
| 0xCE150B | DOBD - SLE - Signal (ST_SER_DSCO_PLG, 0x431) nicht definiert, Empfänger SLE, Sender SME | 0 | - |
| 0xCE150C | DOBD - SLE_B35 - Signal (ST_DCSW_HVSTO, 0x1FA) ungültig, Empfänger SLE, Sender SME | 0 | - |
| 0xCE150D | DOBD - SLE_B35 - Signal (AVL_U_HVS, 0x112) ungültig, Empfänger SLE, Sender SME | 0 | - |
| 0xCE150E | DOBD - SLE_B35 - Signal (AVL_U_HVS, 0x112) nicht defniniert, Empfänger SLE, Sender SME | 0 | - |
| 0xCE150F | DOBD - SLE_B35 - Signal (RQ_OPN_DCSW_HVSTO_ILY, 0x112) ungültig, Empfänger SLE, Sender SME | 0 | - |
| 0xCE1510 | DOBD - SLE_B35 - Signal (RQ_OPN_DCSW_HVSTO_FAST, 0x112) ungültig, Empfänger SLE, Sender SME | 0 | - |
| 0xCE1511 | DOBD - SLE_B35 - Signal (AVL_U_LINK, 0x112) ungültig, Empfänger SLE, Sender SME | 0 | - |
| 0xCE1512 | DOBD - SLE_B35 - Signal (AVL_U_LINK, 0x112) nicht definiert, Empfänger SLE, Sender SME | 0 | - |
| 0xCE1513 | DOBD - SLE_B35 - Signal (CTR_FKTN_PRTNT_DRV, 0x19E) ungültig, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1514 | DOBD - SLE_B35 - Signal (CTR_BS_PRTNT_DRV, 0x19E) ungültig, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1515 | DOBD - SLE_B35 - Signal (SPEC_U_MAX_CHG_CHGE, 0x153) undgültig, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1516 | DOBD - SLE_B35 - Signal (SPEC_U_MAX_CHG_CHGE, 0x153) nicht definiert, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1517 | DOBD - SLE_B35 - Signal (SPEC_I_MAX_ALTC_CF_CHGE, 0x153) ungültig, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1518 | DOBD - SLE_B35 - Signal (SPEC_I_MAX_DC_CF_CHGE, 0x153) ungültig, Empfänger SLE, Sender EME | 0 | - |
| 0xCE1519 | DOBD - SLE_B35 - Signal (TAR_OPMO_CF_CHGE, 0x153) ungültig, Empfänger SLE, Sender EME | 0 | - |
| 0xCE151A | DOBD - SLE_B35 - Signal (TAR_OPMO_CF_CHGE, 0x153) nicht definiert, Empfänger SLE, Sender EME | 0 | - |
| 0xCE151B | DOBD - SLE_B35 - Signal ( TAR_PWR_CF_CHGNG, 0x153) ungültig, Empfänger SLE,  Sender EME | 0 | - |
| 0xE7041E | DOBD - IHKA - IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE70C30 | DOBD - IHKA - AC-LIN: eKMV antwortet nicht | 0 | - |
| 0xE70C3A | DOBD - IHKA - AC-LIN: EDH antwortet nicht | 0 | - |
| 0xE71406 | DOBD - IHKA - Botschaft (DT_PT_2 , 0x3F9, FA): Timeout | 1 | - |
| 0xE71414 | DOBD - IHKA - Botschaft (A_TEMP, 0x2CA, FA): Timeout | 1 | - |
| 0xE7141E | DOBD - IHKA - Botschaft (KLEMMEN, 0x12F, FA): Timeout | 1 | - |
| 0xE71438 | DOBD - IHKA-VA02 - Botschaft (STAT_DRUCK_KAELTE, 0x2D2, FA): Timeout | 1 | - |
| 0xE7143C | DOBD - IHKA - Botschaft (ST_HVSTO_1, 0x1FA, FA): Timeout | 1 | - |
| 0xE7144C | DOBD - IHKA - Botschaft (ST_VA_HVBTC, 0x389, FA): Timeout | 1 | - |
| 0xE71452 | DOBD - IHKA - Botschaft (CTR_ACCM, 0x38C, FA): Timeout | 1 | - |
| 0xE71458 | DOBD - IHKA - Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): Timeout | 1 | - |
| 0xE71475 | DOBD - IHKA - Botschaft (DIAG_OBD_ENG, 0x397, FA): Timeout | 1 | - |
| 0xE71476 | DOBD - IHKA - Botschaft (DIAG_OBD_ENGMG_EL, 0x3E8, FA): Timeout | 1 | - |
| 0xE71477 | DOBD - IHKA - Botschaft (SVC[EME], 0x5BA, FA): Timeout | 1 | - |
| 0xE71478 | DOBD - IHKA - Botschaft (RELATIVZEIT, 0x328, FA): Timeout | 1 | - |
| 0xE71479 | DOBD - IHKA - Botschaft (STAT_HVSTO_2, 0x112, FA): Timeout | 1 | - |
| 0xE7147B | DOBD - IHKA - Botschaft (MOD_VC, 0x432, FA): Timeout | 1 | - |
| 0xE7147C | DOBD - IHKA - Botschaft (ST_EL_GEY, 0x3E5, FA): Timeout | 1 | - |
| 0xE7147D | DOBD - IHKA - Botschaft (V_VEH, 0x1A1, FA): Timeout | 1 | - |
| 0xE7147E | DOBD - IHKA - Botschaft (STAT_Ventil_Klima, 0x2D6, ZSG): Timeout | 1 | - |
| 0xE7147F | DOBD - IHKA - Botschaft (ST_eDH_LIN, 0x11, AC-LIN4): Timeout | 1 | - |
| 0xE71480 | DOBD - IHKA - Botschaft (ST_EKMV20_LIN, 0x1F, AC-LIN4): Timeout | 1 | - |
| 0xE71481 | DOBD - IHKA - Botschaft (ST_DIAG_SYS_E2_LIN, 0x21, AC-LIN4): Timeout | 1 | - |
| 0xE71482 | DOBD - IHKA - Botschaft (ST_DIAG_SYS_eDH_LIN, 0x13, AC-LIN4): Timeout | 1 | - |
| 0xE89400 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_HVSM_CRASH1_L1_FAULT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | UWB_CRASH3_L1_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | UWB_CRASH2_L2 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | UWB_CRASH2_LEVEL2_LOCK | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0005 | UWB_HVIL_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0006 | UWB_HVDC_OOR_H_FAULT_L2 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | UWB_TEM_HVDC_OOR_H_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0008 | UWB_HVDC_OOR_L_FAULT_L2A | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0009 | UWB_TEM_HVDC_OOR_L_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000A | UWB_KL30B_OOR_H_FAULT_L2 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000B | TEM_KL30B_OOR_H_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000C | UWB_KL30B_OOR_L_FAULT_L2 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000D | UWB_TEM_KL30B_OOR_L_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000E | UWB_TEM_PHASE_OC_L2 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000F | HVSGR_PHASE_OC_L2 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0010 | UWB_HVDC_SC_L2 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0011 | UWB_HVSM_CRASH1_L1_FAULT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0012 | UWB_CRASH3_L1_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0013 | UWB_CRASH2_L2 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0014 | UWB_CRASH2_LEVEL2_LOCK | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0015 | UWB_HVIL_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0016 | UWB_HVDC_OOR_H_FAULT_L2 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0017 | UWB_TEM_HVDC_OOR_H_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0018 | UWB_HVDC_OOR_L_FAULT_L2A | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0019 | UWB_TEM_HVDC_OOR_L_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x001A | UWB_KL30B_OOR_H_FAULT_L2 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x001B | TEM_KL30B_OOR_H_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x001C | UWB_KL30B_OOR_L_FAULT_L2 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x001D | UWB_TEM_KL30B_OOR_L_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x001E | UWB_TEM_PHASE_OC_L2 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x001F | UWB_HVSGR_PHASE_OC_L2 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0020 | UWB_HVDC_SC_L2 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0021 | UWB_HVDC_ACTDIS_VOLTAGE_ENABLE | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0022 | UWB_HVDC_ACTDIS_VOLTAGE_SAFETY_LIMIT | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0023 | UWB_HVDC_ACTDIS_VOLTAGE_TURNOFF_LIMIT | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0024 | UWB_HVDC_ACTDIS_VOLTAGE_TURNOFF_LIMIT_REACHED | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0025 | UWB_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0026 | UWB_ACTDIS_TRIGGER1_REQUEST | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0027 | UWB_ACTDIS_TRIGGER2_REQUEST | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0028 | UWB_ACTDIS_TRIGGER_REQUEST | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0029 | UWB_ACTDIS_TRIGGER_REQUEST_PROCESSED | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x002A | UWB_ACTDIS_TRIGGER_CANCEL | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x002B | UWB_ACTDIS_TRIGGER_LATCH | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x002C | UWB_ACTDIS_PIC_COMMAND_MALF | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x002D | UWB_ACTDIS_PIC_COMMAND_FAULT | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x002E | UWB_ACTDIS_TRIGGER_WHEN_CONTACTOR_CLOSED_MALF | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x002F | UWB_ACTDIS_PASSIVE_FAULT | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0030 | UWB_ACTDIS_LF_STATUS | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0031 | UWB_ACTDIS_TIME_MALF | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0032 | UWB_ACTDIS_TIME_FAULT | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0033 | UWB_ACTDIS_DIAGJOB_ENABLE_STATUS | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0034 | UWB_ACTDIS_DIAGJOB_NOTACTIVE | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x0035 | UWB_ACTDIS_DIAGJOB_REQUEST | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x0036 | UWB_ACTDIS_THERMAL_REST_COMPLETE | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x0037 | UWB_HVDC_MAIN_ADJUSTED_VOLTS_DROPPING | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x0038 | UWB_ACTDIS_CONTACTOR_OPEN_SWITCH_CONTROL | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x0039 | UWB_ACTDIS_LATENT_FLT_LAST_CYCLE | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x003A | UWB_ACTDIS_TRIGGER_EMERGENCY_REQUEST_PROCESSED | 0/1 | High | 0x20000000 | - | - | - | - |
| 0x003B | UWB_ACTDIS_EMERGENCY_TRIGGER_LATCH | 0/1 | High | 0x40000000 | - | - | - | - |
| 0x003C | UWB_ACTDIS_EMERGENCY_DISCHARGE_LOCK | 0/1 | High | 0x80000000 | - | - | - | - |
| 0x003D | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_OOR_H_FAULT_L2A | 0/1 | High | 0x01 | - | - | - | - |
| 0x003E | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_PLAUSABILITY_FAULT_L2A | 0/1 | High | 0x10 | - | - | - | - |
| 0x003F | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2 | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0040 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_ENABLE_STATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0041 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_LEVEL2_LOCK | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0042 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_PLAUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0043 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_PLAUS_L2_ENABLE_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0044 | UWB_V_Q_FUSI_MC0_HVSM2_U8_CRASH2_L2_DI | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0045 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_DI | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0046 | UWB_V_Q_FUSI_MC0_HVSM2_U8_CRASH2_L2 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0047 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_LOCK_L2_ENABLE_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0048 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_I_S_CRASHENABLE_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0049 | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH2_L2_HWAKS_KL30C_ENABLE_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x004A | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_CRASH_L2: BIT 11 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x004B | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH_MESSAGE_QUALIFIED | 0/1 | High | 0x1000 | - | - | - | - |
| 0x004C | UWB_V_S_FUSI_MC0_HVSM2_U8_CRASH_SIGNAL_ACTIVE | 0/1 | High | 0x2000 | - | - | - | - |
| 0x004D | UWB_V_S_FUSI_MC0_HVSM2_U8_MESSAGE_PLAUS_MALF | 0/1 | High | 0x4000 | - | - | - | - |
| 0x004E | UWB_V_S_FUSI_MC0_HVSM2_U8_MESSAGE_PLAUS_FAULT | 0/1 | High | 0x8000 | - | - | - | - |
| 0x004F | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_KL30B_STP_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0050 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_STP_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0051 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_KL30B_COUNTS | 0/1 | High | 0x04 | - | - | - | - |
| 0x0052 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_STP_ENABLE_STATUS | 0/1 | High | 0x08 | - | - | - | - |
| 0x0053 | UWB_V_S_FUSI_MC2_IOHWAB_U8_KL30B_PLAUS_EXT_ENABLE_STATUS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0054 | UWB_V_S_FUSI_MC2_IOHWAB_U8_KL30B_PLAUS_INT_ENABLE_STATUS | 0/1 | High | 0x20 | - | - | - | - |
| 0x0055 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_OOR_H_ENABLE_STATUS | 0/1 | High | 0x40 | - | - | - | - |
| 0x0056 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30B_OOR_L_ENABLE_STATUS | 0/1 | High | 0x80 | - | - | - | - |
| 0x0057 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_HVDC_5VREF_STG_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0058 | UWB_V_S_FUSI_MC0_IOHWAB_U8_5VREF_STG_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0059 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_HVDC_5VREF_STP_MALF | 0/1 | High | 0x04 | - | - | - | - |
| 0x005A | UWB_V_S_FUSI_MC0_IOHWAB_U8_5VREF_STP_FAULT | 0/1 | High | 0x08 | - | - | - | - |
| 0x005B | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_L1_MALF_SW | 0/1 | High | 0x0001 | - | - | - | - |
| 0x005C | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_LEVEL1_INHIBIT_CONTROL | 0/1 | High | 0x0002 | - | - | - | - |
| 0x005D | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_L1_MALF | 0/1 | High | 0x0004 | - | - | - | - |
| 0x005E | UWB_V_S_QM_MC0_HVSM2_U8_CRASH2_L1_FAULT | 0/1 | High | 0x0008 | - | - | - | - |
| 0x005F | UWB_V_Q_QM_MC0_HVSM2_U8_CRASH1_L1_MALF_SW | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0060 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_INHIBIT_CONTROL | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0061 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_MALF | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0062 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0063 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH1_L1_ENABLE_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0064 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_MALF_SW | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0065 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_INHIBIT_CONTROL | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0066 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_MALF | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0067 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_FAULT | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0068 | UWB_V_S_QM_MC0_HVSM2_U8_CRASH3_L1_ENABLE_STATUS | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0069 | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_1_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x006A | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_1_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x006B | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_2_MALF | 0/1 | High | 0x04 | - | - | - | - |
| 0x006C | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_2_FAULT | 0/1 | High | 0x08 | - | - | - | - |
| 0x006D | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_SOH_FAULT | 0/1 | High | 0x10 | - | - | - | - |
| 0x006E | UWB_V_S_FUSI_MC0_IOHWAB_U8_TEM_HVSMSTATUS_FAULT_ENABLE_STATUS | 0/1 | High | 0x20 | - | - | - | - |
| 0x006F | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_DCDC_SOH_MALF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0070 | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_DCDC_SOH_FAULT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0071 | UWB_V_S_FUSI_MCO_IOHWAB_U8_DIAG_DCDC_SOH_ENABLE_STATUS | 0/1 | High | 0x04 | - | - | - | - |
| 0x0072 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STG_FAULT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0073 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STP_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0074 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STG_ENABLE_STATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0075 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PSEN_STP_ENABLE_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0076 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_HVDC_PSEN_COUNTS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0077 | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STG_FAULT | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0078 | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STP_FAULT | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0079 | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STG_ENABLE_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x007A | UWB_V_S_FUSI_MC0_IOHWAB_U8_NSEN_STP_ENABLE_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x007B | UWB_V_Q_FUSI_MC0_IOHWAB_U8_HVDC_NSEN_COUNTS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x007C | UWB_V_S_FUSI_MC0_IOHWAB_U8_MAIN_STP_FAULT | 0/1 | High | 0x0400 | - | - | - | - |
| 0x007D | UWB_V_Q_FUSI_MC0_IOHWAB_U8_HVDC_MAIN_COUNTS | 0/1 | High | 0x0800 | - | - | - | - |
| 0x007E | UWB_V_S_FUSI_MC0_IOHWAB_U8_MAIN_STP_ENABLE_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x007F | UWB_ST_HVSGR_HVSMSTATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x0080 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PIC_VAILD_FREQUENCY | 0/1 | High | 0x02 | - | - | - | - |
| 0x0081 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_ACTDISCHARGE_PERIOD | 0/1 | High | 0x04 | - | - | - | - |
| 0x0082 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PIC_FREQ_OOR_FAULT | 0/1 | High | 0x08 | - | - | - | - |
| 0x0083 | UWB_V_S_FUSI_MC0_IOHWAB_U8_PIC_FREQ_OOR_ENABLE_STATUS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0084 | UWB_1_V_S_FUSI_MC0_IOHWAB_U8_PIC_VAILD_FREQUENCY | 0/1 | High | 0x20 | - | - | - | - |
| 0x0085 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_KL30C_RANGE_MALF | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0086 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_RANGE_FAULT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0087 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_KL30C_COUNTS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0088 | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_RANGE_ENABLE_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0089 | UWB_V_S_FUSI_MC0_IOHWAB_U8_DIAG_KL30C_DI_ACTIVE_MALF | 0/1 | High | 0x0010 | - | - | - | - |
| 0x008A | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_DI_ACTIVE_FAULT | 0/1 | High | 0x0020 | - | - | - | - |
| 0x008B | UWB_V_Q_FUSI_MC0_IOHWAB_U8_KL30C_DI | 0/1 | High | 0x0040 | - | - | - | - |
| 0x008C | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_PLAUS_MALF | 0/1 | High | 0x0080 | - | - | - | - |
| 0x008D | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_PLAUS_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x008E | UWB_V_S_FUSI_MC0_IOHWAB_U8_KL30C_PLAUS_ENABLE_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x008F | UWB_LATENT_FAULT_TEST_AKS_ACTIVE | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0090 | UWB_LATENT_FAULT_TEST_HVDC_ACTIVE_1 | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0091 | UWB_LATENT_FAULT_TEST_3PH_ACTIVE_1 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0092 | UWB_TEM_ADC_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0093 | UWB_TEM_AKS_LF_INPROCESS_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0094 | UWB_TEM_AKS_LF_STATUS | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0095 | UWB_LATENT_FAULT_TEST_HVDC_ACTIVE_2 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0096 | UWB_LATENT_FAULT_TEST_HVDC_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0097 | UWB_LATENT_FAULT_TEST_3PH_ACTIVE_2 | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0098 | UWB_LATENT_FAULT_TEST_3PH_STATUS | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0099 | UWB_HVSGR_ADC_STATUS_1 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x009A | UWB_HVSGR_AKS_LF_INPROCESS_STATUS_1 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x009B | UWB_HVSGR_AKS_LF_STATUS_1 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x009C | UWB_LATENT_FAULT_TEST_3PH_ACTIVE_3 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x009D | UWB_LATENT_FAULT_TEST_3PH_STATUS_1 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x009E | UWB_REACTION_TEM_HVSMSTATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x009F | UWB_REACTION_HVSGR_HVSMSTATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00A0 | UWB_REACTION_DCDC_HVSMSTATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00A1 | UWB_ACTDIS_TRIGGER_REQUEST | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00A2 | UWB_ACTDIS_TRIGGER_LATCH | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00A3 | UWB_ACTDIS_TRIGGER1_REQUEST | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00A4 | UWB_ACTDIS_TRIGGER2_REQUEST | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00A5 | UWB_ACTDIS_PASSIVE_FAULT | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00A6 | UWB_ACTDIS_TIME_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00A7 | UWB_ACTDIS_VOLTAGE_ENABLE | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00A8 | UWB_ACTDIS_VOLTAGE_SAFETY_LIMIT | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00A9 | UWB_ACTDIS_VOLTAGE_TURNOFF_LIMIT | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00AA | UWB_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x1000 | - | - | - | - |
| 0x00AB | UWB_ACTDIS_THERMAL_REST_COMPLETE | 0/1 | High | 0x2000 | - | - | - | - |
| 0x00AC | UWB_CCM585_ENABLE_STATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00AD | UWB_SLE_Fault_Status | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00AE | UWB_Crash2_Level_2_Latent_Fault_Test_Status | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00AF | UWB_Short_Circuit_Latent_Fault_Test_Status | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00B0 | UWB_HVDC_OV_L2A_Latent_Fault_Test_Status | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00B1 | UWB_HVDC_OV_L2B_Latent_Fault_Test_Status_1 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00B2 | UWB_HVDC_OV_L2C_Latent_Fault_Test_Status_2 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00B3 | UWB_Active_Discharge_Latent_Fault_Test_Status | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00B4 | UWB_TEM_AKS_Latent_Fault_Test_Status_1 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00B5 | UWB_TEM_HVSGR_Latent_Fault_Test_Status_2 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00B6 | UWB_TEM_3-PHASE_Over_Current_Latent_Fault_Test | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00B7 | UWB_HVSGR_3-PHASE_Over_Current_Latent_Fault_Test_1 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x00B8 | UWB_MAIN_Ucontroller_ADC_Latent_Fault_Test | 0/1 | High | 0x2000 | - | - | - | - |
| 0x00B9 | UWB_TEM_Ucontroller_ADC_Latent_Fault_Test_1 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x00BA | UWB_HVSGR_Ucontroller_ADC_Latent_Fault_Test_1 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x00BB | UWB_REACTION_TEM_HVSMSTATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00BC | UWB_REACTION_HVSGR_HVSMSTATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00BD | UWB_REACTION_DCDC_HVSMSTATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00BE | UWB_ACTDIS_TRIGGER_REQUEST | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00BF | UWB_ACTDIS_TRIGGER_LATCH | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00C0 | UWB_ACTDIS_TRIGGER1_REQUEST | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00C1 | UWB_ACTDIS_TRIGGER2_REQUEST | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00C2 | UWB_ACTDIS_PASSIVE_FAULT | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00C3 | UWB_ACTDIS_TIME_FAULT | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00C4 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_SC_HVDC_UNFLT | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00C5 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_MALF_UNFLT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00C6 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_FAULT_UNFLT | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00C7 | UWB_V_Q_FUSI_MC0_IOHWAB_U8_SC_HVDC_FLT_SW | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00C8 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_MALF_FLT | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00C9 | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_HVDC_NEG_TREND_FAULT | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00CA | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_SC_L2_SW | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00CB | UWB_V_S_FUSI_MC0_HVSM2_U8_HVDC_SC_L2 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00CC | UWB_V_S_FUSI_MC0_HVSM2_U8_SC_OOR_H_FLT_ENABLE_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00CD | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_AKS_STATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00CE | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_KL30B_OOR_H_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00CF | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_KL30B_OOR_L_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00D0 | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_ADC_STATUS | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00D1 | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_AKS_LF_INPROCESS_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00D2 | UWB_V_S_FUSI_MC4_HVSM2_U8_HVSGR_AKS_LF_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00D3 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_AKS_STATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00D4 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_HVDC_OOR_H_STATUS | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00D5 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_HVDC_OOR_L_STATUS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00D6 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_KL30B_OOR_H_STATUS | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00D7 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_KL30B_OOR_L_STATUS | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00D8 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_ADC_STATUS | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00D9 | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_AKS_LF_INPROCESS_STATUS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00DA | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_AKS_LF_STATUS | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00DB | UWB_V_S_FUSI_MC2_HVSM2_U8_TEM_HV_PLAUS_STATUS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00DC | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00DD | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_HVDC_STATUS | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00DE | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_3PH_ACTIVE | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00DF | UWB_V_S_FUSI_MC2_HVSM2_U8_LATENT_FAULT_TEST_3PH_STATUS | 0/1 | High | 0x1000 | - | - | - | - |
| 0x00E0 | UWB_V_S_FUSI_MC0_HVSM2_U8_HVSGR_AKS_REQUEST_DIAGJOB | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00E1 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVSGR_AKS_ACTIVE | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00E2 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00E3 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVSGR_3PH_ACTIVE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00E4 | UWB_V_S_FUSI_MC0_HVSM2_U8_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00E5 | UWB_V_S_FUSI_MC0_HVSM2_U8_TEM_AKS_REQUEST_DIAGJOB | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00E6 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_AKS_ACTIVE | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00E7 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00E8 | UWB_V_S_FUSI_MC0_HVSM2_U8_LATENT_FAULT_TEST_3PH_ACTIVE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00E9 | UWB_V_S_FUSI_MC0_HVSM2_U8_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00EA | UWB_DCDC_CRASH_SEVERITY_1 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00EB | UWB_DCDC_CRASH_SEVERITY_2 | 0/1 | High | 0x02 | - | - | - | - |
| 0x00EC | UWB_DCDC_CRASH_TIMEOUT | 0/1 | High | 0x04 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x170C | VERSORGUNGSSPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4020 | Bremsunterdrucksignal | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4021 | Drehzahl | 1/min | High | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x4022 | Umgebungsdruck | mbar | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x4023 | Status Verbrennermotor | 0/1 | High | 0x01 | - | - | - | - |
| 0x4024 | Fahrzeuggeschwindigkeit | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4025 | Fahrzeuggeschwindigkeit Ende Bremsvorgang | 1/min | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4026 | Bremsunterdruck_Bremsbeginn | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4027 | Bremsunterdruck Bremsende | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | maimales vom Fahrer angefordertes Bremsmoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | UWB_DCL_GANG_GB2_IST | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6001 | UWB_DCL_GANG_GB2_SOLL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6002 | UWB_DCL_ST_ERR_GB2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | UWB_DCL_MGR_ST_GS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6004 | UWB_DCL_COORD_INPUT_STATUS | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6005 | UWB_DCL_COORD_FAULTMASK | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6006 | UWB_DCL_TEM_ACT_PWM_DC_COM | % | High | unsigned char | - | 0.625 | 1.0 | 0.0 |
| 0x6007 | UWB_DCL_TEM_SUP_VOL | V | High | signed int | - | 0.025 | 1.0 | 0.0 |
| 0x6008 | UWB_DCL_TEM_KL15_INFO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6009 | UWB_DCL_TEM_POS_SEN_VAL | % | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x600A | UWB_DCL_TEM_ACT_SOL_CUR | A | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x600B | UWB_DCL_TEM_EN_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6010 | UWB_DEM_EC_DID_HVPM_STATUS_HV_STARTFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6011 | UWB_DEM_EC_DID_HVPM_STATUS_HVSTART_KOMM | 0-n | High | 0xFF | TAB_HVSTART_KOMM | - | - | - |
| 0x6012 | UWB_DEM_EC_DID_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x6013 | UWB_DEM_EC_DID_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x6014 | UWB_DEM_EC_DID_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6015 | UWB_DEM_EC_DID_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6016 | UWB_DEM_EC_DID_HVPM_I_BATT_SME | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6017 | UWB_DEM_EC_DID_HVPM_ST_CRASH_MOD | 0-n | High | 0xFF | TAB_CRASH_MOD | - | - | - |
| 0x6018 | UWB_DEM_EC_DID_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x6019 | UWB_DEM_EC_DID_HVPM_ST_CRASH_SERVERTY | 0/1 | High | 0x01 | - | - | - | - |
| 0x601A | UWB_DEM_EC_DID_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601B | UWB_DEM_EC_DID_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601C | UWB_DEM_EC_DID_HVPM_IBATT_BN | A | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x601D | UWB_DEM_EC_DID_HVPM_UBATT_BN | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601E | UWB_DEM_EC_DID_HVPM_F_DCDC1_GEN | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601F | UWB_DEM_EC_DID_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6020 | UWB_DEM_EC_DID_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6021 | UWB_DEM_EC_DID_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6022 | UWB_DEM_EC_DID_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_BETRIEBSART_SLE | - | - | - |
| 0x6023 | UWB_DEM_EC_DID_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_CHGNG_TYP_IMME | - | - | - |
| 0x6024 | UWB_DEM_EC_DID_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_ST_CHGNG | - | - | - |
| 0x6025 | UWB_DEM_EC_DID_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_ST_CHGRDI | - | - | - |
| 0x6026 | UWB_DCDC_U_GND_DIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x6027 | UWB_DCDC_R_Masseband | mOhm | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6028 | UWB_DCDC_I_LV_MAX_MASSE | A | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6029 | UWB_ELUP_TEMPERATUR | ° | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6F00 | UWB_CTR_CSOV_EVA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F01 | UWB_ST_CSOV_AIC | 0-n | High | 0xFF | TAB_UWB_ST_CSOV_AIC | - | - | - |
| 0x6F02 | UWB_SCALED_VBATT_MAIN | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F03 | UWB_DCDC_MAX_P_OUT | W | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x6F04 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F05 | UWB_DCDC_COOLANT_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6F08 | UWB_HVSGR_CONTROL_MODE | 0-n | High | 0xFF | - | - | - | - |
| 0x6F09 | UWB_HVSGR_SYS_CONTROL_MODE | 0-n | High | 0xFF | - | - | - | - |
| 0x6F0B | UWB_HVSGR_IGNITIONV KL15 | V | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F0C | UWB_HVSGR_Power_Module_Temp3 | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x6F12 | UWB_HVSGR_COOLANT_FLOW | l/h | High | unsigned char | - | 12.0 | 1.0 | 0.0 |
| 0x6F14 | UWB_HVSGR_MOTOR_TORQUE_CMD | Nm | High | unsigned char | - | 0.5 | 1.0 | -62.0 |
| 0x6F16 | UWB_HVSGR_DESIRED_CURR | A | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x6F17 | UWB_HVSGR_DESIRED_VOLT | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x6F1A | UWB_HVSGR_IQS_SYNCH | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F1B | UWB_HVSGR_IDS_SYNCH | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F1C | UWB_HVSGR_VQS_SYNCH | V | High | unsigned char | - | 3.0 | 1.0 | -380.0 |
| 0x6F1D | UWB_HVSGR_VDS_SYNCH | V | High | unsigned char | - | 3.0 | 1.0 | -380.0 |
| 0x6F1E | UWB_HVSGR_PHASEI_A_COMP | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F1F | UWB_HVSGR_PHASEI_B_COMP | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F20 | UWB_HVSGR_PHASEI_C_COMP | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F21 | UWB_HVSGR_VMAG_OVM | - | High | unsigned char | - | 0.0075 | 1.0 | 1.0 |
| 0x6F22 | UWB_HVSGR_IDS_VMAG | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F23 | UWB_HVSGR_IDSV_REF | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F24 | UWB_HVSGR_IQS_CMD | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F25 | UWB_HVSGR_IDS_REF | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F26 | UWB_HVSGR_CLMP_FLG | 0/1 | High | 0x01 | - | - | - | - |
| 0x6F27 | UWB_HVSGR_MAX_ZERO_SEQ_SUM | A | High | unsigned char | - | 2.0 | 1.0 | -250.0 |
| 0x6F2B | UWB_HVSGR_RDC_NO_TRACK_FLT_CNTR | - | High | unsigned char | - | 255.0 | 1.0 | 0.0 |
| 0x6F2C | UWB_HVSGR_RDC_OUT_RANGE_FLT_CNTR | - | High | unsigned char | - | 255.0 | 1.0 | 0.0 |
| 0x6F30 | UWB_FUSI_KL30B_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F31 | UWB_HVSM_HVDC_5VREF_FILTERED_VOLTS | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F32 | UWB_HVSM_HVDC_MAIN_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F33 | UWB_HVSM_HVDC_MAIN_ADJUSTED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F34 | UWB_HVSM_HVDC_PSEN_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F35 | UWB_HVSM_HVDC_NSEN_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | -630.0 |
| 0x6F36 | UWB_HVSM_KL30C_FILTERED_VOLTS | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F37 | UWB_HVSM_KL30C_DI_STATE | 0/1 | High | 0x01 | - | - | - | - |
| 0x6F38 | UWB_HVSM_TEM_EM_CURRENT | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F39 | UWB_HVSM_TEM_EM_CURRENT_VREF | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F3F | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x6F40 | UWB_HVSM_HVSGR_EM_CURRENT | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6F41 | UWB_HVSM_HVSGR_EM_CURRENT_VREF | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x6F42 | UWB_HVSM_HVIL_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F43 | UWB_HVSM_PIC_COMMAND | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F44 | UWB_HVSM_PIC_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F45 | UWB_HVSM_THERMAL_REST_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F46 | UWB_HVSM_THERMAL_LOCK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F47 | UWB_HVSM_CONTACTOR_OPEN_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F48 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F49 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4D | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F4E | UWB_THERMAL_COUNT_REMAIN | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F4F | UWB_EMERGENCY_DISCHARGE_COUNT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F50 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F51 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F52 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F53 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F54 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F55 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F56 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F57 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F58 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F59 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6F5A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5D | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F5E | UWB_ST_PIC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F60 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6F61 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_TEM_3PH_SC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F62 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_TEM_3PH_OC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F63 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_HVSGR_3PH_SC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6F64 | UWB_V_S_FUSI_MC0_HVSM2_U16_ST_HVSGR_3PH_OC | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x7000 | UWB_DCDC_Target_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7001 | UWB_DCDC_Target_Voltage_HV_Min | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x7002 | UWB_DCDC_Maximum_Input_Power | W | High | unsigned char | - | 3100.0 | 255.0 | 0.0 |
| 0x7003 | UWB_DCDC_Target_BA | 0-n | High | 0xFF | TAB_DCDC_BA_TARGET | - | - | - |
| 0x7004 | UWB_DCDC_Actual_Current_HV | A | High | unsigned char | - | 2.0 | 10.0 | 0.0 |
| 0x7005 | UWB_DCDC_Actual_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7007 | UWB_DCDC_Temperature | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x7008 | UWB_DCDC_Actual_BA | 0-n | High | 0xFF | TAB_UWB_DCDC_ACTUAL_BA | - | - | - |
| 0x7009 | UWB_DCDC_Actual_Filtered_Current_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700A | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700B | UWB_ELUP_VERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700C | UWB_ELUP_STROM_CH1 | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700D | UWB_ELUP_STROM_CH2 | A | High | unsigned char | - | 1.0 | 3.75 | 0.0 |
| 0x700E | UWB_ELUP_UNTERDRUCKMMESSWERT | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x700F | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x7010 | UWB_BUDS_VERSORGUNG | V | High | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x7011 | UWB_BUDS_RUECKFUEHRSIGNAL | V | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x7012 | UWB_BUDS_MASSE | V | High | unsigned char | - | 1.0 | 20.0 | 0.0 |
| 0x7013 | UWB_EM1_TEMPERATUR_STATOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7014 | UWB_EM1_TEMPERATUR_ROTOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7015 | UWB_EM1_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | -30000.0 |
| 0x7016 | UWB_EM1_SOLL_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7017 | UWB_EM1_IST_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7018 | UWB_EM1_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7019 | UWB_INV1_TEMPERATUR_PHASE_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701A | UWB_INV1_TEMPERATUR_PHASE_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701B | UWB_INV1_TEMPERATUR_PHASE_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701C | UWB_INV1_TEMPERATUR_KUEHLMITTEL | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701D | UWB_INV1_SPANNUNG_DC | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x701E | UWB_INV1_DERATING_STATUS | HEX | High | unsigned char | - | - | - | - |
| 0x701F | UWB_E_ANTRIEB_1_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_IST_BETRIEBSART | - | - | - |
| 0x7020 | UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | - | - | - |
| 0x7021 | UWB_INV1_TEMPERATUR_IGBT_DIODE_MAX | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x7022 | UWB_E_ANTRIEB_1_ABSCHALT_GRUND | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_ABSCHALT_GRUND | - | - | - |
| 0x7023 | UWB_E_ANTRIEB_1_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7024 | UWB_EM2_TEMPERATUR_STATOR_1 | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7025 | UWB_EM2_TEMPERATUR_STATOR_2 | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7026 | UWB_EM2_TEMPERATUR_ROTOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7027 | UWB_EM2_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | -30000.0 |
| 0x7028 | UWB_EM2_SOLL_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7029 | UWB_EM2_IST_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x702A | UWB_EM2_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x702B | UWB_INV2_TEMPERATUR_PHASE_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702C | UWB_INV2_TEMPERATUR_PHASE_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702D | UWB_INV2_TEMPERATUR_PHASE_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702E | UWB_INV2_TEMPERATUR_KUEHLMITTEL | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x702F | UWB_INV2_SPANNUNG_DC | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x7030 | UWB_INV2_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7031 | UWB_E_ANTRIEB_2_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_2_IST_BETRIEBSART | - | - | - |
| 0x7032 | UWB_E_ANTRIEB_2_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_2_SOLL_BETRIEBSART | - | - | - |
| 0x7033 | UWB_E_ANTRIEB_2_ABSCHALT_GRUND | HEX | High | unsigned int | - | - | - | - |
| 0x7034 | UWB_E_ANTRIEB_2_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7035 | UWB_HV_BATTERIE_SOC | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x7036 | UWB_HV_BATTERIE_STROM_DC | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x7038 | UWB_HVSTART_ERROR | HEX | High | unsigned long | - | - | - | - |
| 0x7048 | UWB_KMV_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7049 | UWB_KMV_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704A | UWB_KMV_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704B | UWB_KMV_PWM_AUSGANGPEGEL_HIGH | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704C | UWB_KMV_PWM_AUSGANGPEGEL_LOW | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704D | UWB_DCDC_Actual_Power_HV | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x704E | UWB_DCDC_Actual_Load | % | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x704F | UWB_FUSI_BACK_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_BACK_HVSM_STATUS_AKKU | - | - | - |
| 0x7050 | UWB_FUSI_FWD_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_FWD_HVSM_STATUS_AKKU | - | - | - |
| 0x7051 | UWB_FUSI_WBD_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_WBD_STATUS_AKKU | - | - | - |
| 0x7052 | UWB_FUSI_BACK_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_DCL_STATUS | - | - | - |
| 0x7053 | UWB_FUSI_FWD_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_DCL_STATUS | - | - | - |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x7055 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x7056 | UWB_FUSI_BACK_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_LD_STATUS | - | - | - |
| 0x7057 | UWB_FUSI_FWD_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_LD_STATUS | - | - | - |
| 0x7059 | UWB_FUSI_I_INV_DC | A | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x705A | UWB_FUSI_OPMO_CHGE | 0-n | High | 0xFF | TAB_FUSI_OPMO_CHGE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAIN_FUSI_RAM_ACCESS_VIOLATION_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Fusi RAM Zugriffsverletzung |
| STAT_MAIN_RAM_ECC_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor RAM ECC |
| STAT_MAIN_FLASH_ECC_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Flash ECC |
| STAT_MAIN_INT_WDG_MAX_TIMEOUT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor int wdg max timeout |
| STAT_MAIN_INT_WDG_MIN_TIMEOUT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor int wdg min timeout |
| STAT_MAIN_STACK_OVERFLOW_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor stack overflow |
| STAT_MAIN_PFC_FAULT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor PFC Fehler |
| STAT_MAIN_C2PS_TIMEOUT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor C2PS Timeout |
| STAT_MAIN_UNUSED1_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 1 |
| STAT_MAIN_UNUSED2_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 2 |
| STAT_MAIN_UNUSED3_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 3 |
| STAT_MAIN_UNUSED4_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 4 |
| STAT_MAIN_UNUSED5_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 5 |
| STAT_MAIN_UNUSED6_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 6 |
| STAT_MAIN_UNUSED7_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor Reserve 7 |
| STAT_MAIN_LAST_RESET_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Hauptprozessor letzter Reset |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEM_FUSI_RAM_ACCESS_VIOLATION_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Fusi RAM Zugriffsverletzung |
| STAT_TEM_RAM_ECC_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM RAM ECC |
| STAT_TEM_FLASH_ECC_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Flash ECC |
| STAT_TEM_INT_WDG_MAX_TIMEOUT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM int wdg max timeout |
| STAT_TEM_INT_WDG_MIN_TIMEOUT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM int wdg min timeout |
| STAT_TEM_STACK_OVERFLOW_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM stack overflow |
| STAT_TEM_PFC_FAULT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM PFC Fehler |
| STAT_TEM_C2PS_TIMEOUT_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM C2PS Timeout |
| STAT_TEM_UNUSED1_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 1 |
| STAT_TEM_UNUSED2_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 2 |
| STAT_TEM_UNUSED3_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 3 |
| STAT_TEM_UNUSED4_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 4 |
| STAT_TEM_UNUSED5_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 5 |
| STAT_TEM_UNUSED6_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 6 |
| STAT_TEM_UNUSED7_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM Reserve 7 |
| STAT_TEM_LAST_RESET_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler TEM letzter Reset |

### RES_0X6F3F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVDC_ACTDIS_VOLTAGE_ENABLE | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | - |
| STAT_HVDC_ACTDIS_VOLTAGE_SAFETY_LIMIT | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | - |
| STAT_HVDC_ACTDIS_VOLTAGE_TURNOFF_LIMIT | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | - |
| STAT_HVDC_ACTDIS_VOLTAGE_TURNOFF_LIMIT_REACHED | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | - |
| STAT_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER1_REQUEST | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER2_REQUEST | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_REQUEST | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_REQUEST_PROCESSED | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | - |
| STAT_UWB_ACTDIS_TRIGGER_CANCEL | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_LATCH | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | - |
| STAT_ACTDIS_PIC_COMMAND_MALF | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | - |
| STAT_ACTDIS_PIC_COMMAND_FAULT | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_WHEN_CONTACTOR_CLOSED_MALF | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | - |
| STAT_ACTDIS_PASSIVE_FAULT | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | - |
| STAT_ACTDIS_LF_STATUS | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | - |
| STAT_ACTDIS_TIME_MALF | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | - |
| STAT_ACTDIS_TIME_FAULT | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | - |
| STAT_ACTDIS_DIAGJOB_ENABLE_STATUS | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | - |
| STAT_ACTDIS_DIAGJOB_NOTACTIVE | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | - |
| STAT_ACTDIS_DIAGJOB_REQUEST | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | - |
| STAT_ACTDIS_THERMAL_REST_COMPLETE | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | - |
| STAT_HVDC_MAIN_ADJUSTED_VOLTS_DROPPING | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | - |
| STAT_ACTDIS_CONTACTOR_OPEN_SWITCH_CONTROL | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | - |
| STAT_ACTDIS_LATENT_FLT_LAST_CYCLE | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_EMERGENCY_REQUEST_PROCESSED | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | - |
| STAT_ACTDIS_EMERGENCY_TRIGGER_LATCH | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | - |
| STAT_ACTDIS_EMERGENCY_DISCHARGE_LOCK | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | - |

### RES_0X6F48_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVSM_CRASH1_L1_FAULT | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_CRASH3_L1_FAULT | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_CRASH2_L2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_CRASH2_LEVEL2_LOCK | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_HVIL_STATUS | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_HVDC_OOR_H_FAULT_L2 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_TEM_HVDC_OOR_H_STATUS | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_UWB_HVDC_OOR_L_FAULT_L2A | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_TEM_HVDC_OOR_L_STATUS | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_KL30B_OOR_H_FAULT_L2 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_TEM_KL30B_OOR_H_STATUS | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | - |
| STAT_KL30B_OOR_L_FAULT_L2 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | - |
| STAT_TEM_KL30B_OOR_L_STATUS | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | - |
| STAT_TEM_PHASE_OC_L2 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | - |
| STAT_HVSGR_PHASE_OC_L2 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | - |
| STAT_HVDC_SC_L2 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | - |

### RES_0X6F49_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVSM_CRASH1_L1_FAULT | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_CRASH3_L1_FAULT | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_CRASH2_L2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_CRASH2_LEVEL2_LOCK | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_HVIL_STATUS | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_HVDC_OOR_H_FAULT_L2 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_TEM_HVDC_OOR_H_STATUS | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_UWB_HVDC_OOR_L_FAULT_L2A | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_TEM_HVDC_OOR_L_STATUS | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_KL30B_OOR_H_FAULT_L2 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_TEM_KL30B_OOR_H_STATUS | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | - |
| STAT_KL30B_OOR_L_FAULT_L2 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | - |
| STAT_TEM_KL30B_OOR_L_STATUS | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | - |
| STAT_TEM_PHASE_OC_L2 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | - |
| STAT_HVSGR_PHASE_OC_L2 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | - |
| STAT_HVDC_SC_L2 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | - |

### RES_0X6F4A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REACTION_TEM_HVSMSTATUS | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_REACTION_HVSGR_HVSMSTATUS | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_REACTION_DCDC_HVSMSTATUS | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_REQUEST | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_LATCH | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER1_REQUEST | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER2_REQUEST | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_ACTDIS_PASSIVE_FAULT | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_ACTDIS_TIME_FAULT | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_ACTDIS_VOLTAGE_ENABLE | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_ACTDIS_VOLTAGE_SAFETY_LIMIT | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | - |
| STAT_ACTDIS_VOLTAGE_TURNOFF_LIMIT | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | - |
| STAT_ACTDIS_VOLTAGE_CONTACTOR_OPEN | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | - |
| STAT_ACTDIS_THERMAL_REST_COMPLETE | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | - |

### RES_0X6F4B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REACTION_TEM_HVSMSTATUS | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_REACTION_HVSGR_HVSMSTATUS | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_REACTION_DCDC_HVSMSTATUS | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_REQUEST | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER_LATCH | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER1_REQUEST | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_ACTDIS_TRIGGER2_REQUEST | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_ACTDIS_PASSIVE_FAULT | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_ACTDIS_TIME_FAULT | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | - |

### RES_0X6F4C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CCM585_REPORTING_STATUS | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_SLE_FAULT_STATUS | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_LATENT_FAULT_STATUS | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_LATENT_FAULT_ACTIVE_DISCHARGE | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEM_AKS | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_LATENT_FAULT_HVSGR_AKS | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_LATENT_FAULT_CRASH | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_LATENT_FAULT_HVDC_SC | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_LATENT_FAULT_MC0_HVDC_OOR_H | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_LATENT_FAULT_MC2_HVDC_OOR_H | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | - |
| STAT_LATENT_FAULT_HVDC_CURRENT_TEM | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | - |
| STAT_LATENT_FAULT_HVDC_CURRENT_HVSGR | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEM_I2T | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | - |
| STAT_LATENT_FAULT_HVSGR_I2T | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | - |
| STAT_LATENT_FAULT_CCM585_ACTIVE | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | - |

### RES_0X6F4D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LATENT_FAULT_TEST_AKS_ACTIVE | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_HVDC_ACTIVE | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_3PH_ACTIVE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_TEM_ADC_STATUS | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_TEM_AKS_LF_INPROCESS_STATUS | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_TEM_AKS_LF_STATUS | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_HVDC_ACTIVE_1 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_HVDC_STATUS | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_3PH_ACTIVE_1 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_3PH_STATUS | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_HVSGR_ADC_STATUS | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | - |
| STAT_HVSGR_AKS_LF_INPROCESS_STATUS | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | - |
| STAT_HVSGR_AKS_LF_STATUS | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_3PH_ACTIVE_2 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | - |
| STAT_LATENT_FAULT_TEST_3PH_STATUS_1 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | - |

### RES_0XADCD_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_HV_SGR_NR | - | - | + | 0-n | high | unsigned char | - | TAB_ZUSTAND_AKS | - | - | - | Aussage zum AKS des HV-SGR |

### RES_0XADCE_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_FREILAUF | - | - | + | 0-n | high | unsigned char | - | TAB_ZUSTAND_FREILAUF | - | - | - | Zustand Freilauf |

### RES_0XADED_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNGSMESSUNG_PHEV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_STATUS | - | - | - | Aktueller Mode der Leistungsmessung PHEV |

### RES_0XADF1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_DIAG_DCDC_MODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ST_DIAG_DCDC_MODUS | 1.0 | 1.0 | 0.0 | Rückmeldung Betriebsart DCDC |
| STAT_ST_DIAG_DCDC_GRENZEN | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ST_DIAG_DCDC_GRENZEN | 1.0 | 1.0 | 0.0 | Rückmeldung Grenzen |

### RES_0XADF2_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_SYSTEM_ON_OFF | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_HV_SYSTEM_ON_OFF | - | - | - | Auswahl für Ein-/Ausschalten des HV-Systems |

### RES_0XADF4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_ANFORDERUNG | - | + | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADF8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMSTAND_START_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Start der Klassierung |
| STAT_KMSTAND_AKTUELL_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der Klassierung (aktuell) |
| STAT_KMGEFAHREN_NGANG_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometer gefahren im N Gang |
| STAT_KLASSIERTAKT_WERT | + | - | - | Hz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Klassiertakt |
| STAT_LW_KLASS_DCL_KL_1_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 1  (Bereich -250Nm bis -240Nm) |
| STAT_LW_KLASS_DCL_KL_2_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 2  (Bereich -240Nm bis -230Nm) |
| STAT_LW_KLASS_DCL_KL_3_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 3 (Bereich -230Nm bis -220Nm) |
| STAT_LW_KLASS_DCL_KL_4_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 4 (Bereich -220Nm bis -210Nm) |
| STAT_LW_KLASS_DCL_KL_5_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 5 (Bereich -210Nm bis -200Nm) |
| STAT_LW_KLASS_DCL_KL_6_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 6 (Bereich -200Nm bis -190Nm) |
| STAT_LW_KLASS_DCL_KL_7_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 7 (Bereich -190Nm bis -180Nm) |
| STAT_LW_KLASS_DCL_KL_8_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 8 (Bereich -180Nm bis -170Nm) |
| STAT_LW_KLASS_DCL_KL_9_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 9 (Bereich -170Nm bis -160Nm) |
| STAT_LW_KLASS_DCL_KL_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 10 (Bereich -160Nm bis -150Nm) |
| STAT_LW_KLASS_DCL_KL_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 11 (Bereich -150Nm bis -140Nm) |
| STAT_LW_KLASS_DCL_KL_12_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 12 (Bereich -140Nm bis -130Nm) |
| STAT_LW_KLASS_DCL_KL_13_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 13 (Bereich -130Nm bis -120Nm) |
| STAT_LW_KLASS_DCL_KL_14_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 14 (Bereich -120Nm bis -110Nm) |
| STAT_LW_KLASS_DCL_KL_15_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 15 (Bereich -110Nm bis -100Nm) |
| STAT_LW_KLASS_DCL_KL_16_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 16 (Bereich -100Nm bis -90Nm) |
| STAT_LW_KLASS_DCL_KL_17_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 17 (Bereich -90Nm bis -80Nm) |
| STAT_LW_KLASS_DCL_KL_18_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 18 (Bereich -80Nm bis -70Nm) |
| STAT_LW_KLASS_DCL_KL_19_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 19 (Bereich -70Nm bis -60Nm) |
| STAT_LW_KLASS_DCL_KL_20_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 20 (Bereich -60Nm bis -50Nm) |
| STAT_LW_KLASS_DCL_KL_21_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 21 (Bereich -50Nm bis -40Nm) |
| STAT_LW_KLASS_DCL_KL_22_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 22 (Bereich -40Nm bis -30Nm) |
| STAT_LW_KLASS_DCL_KL_23_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 23 (Bereich -30Nm bis -20Nm) |
| STAT_LW_KLASS_DCL_KL_24_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 24 (Bereich -20Nm bis -10Nm) |
| STAT_LW_KLASS_DCL_KL_25_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 25 (Bereich -10Nm bis 0Nm) |
| STAT_LW_KLASS_DCL_KL_26_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 26 (Bereich 0Nm bis 10Nm) |
| STAT_LW_KLASS_DCL_KL_27_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 27 (Bereich 10Nm bis 20Nm) |
| STAT_LW_KLASS_DCL_KL_28_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 28 (Bereich 20Nm bis 30Nm) |
| STAT_LW_KLASS_DCL_KL_29_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 29 (Bereich 30Nm bis 40Nm) |
| STAT_LW_KLASS_DCL_KL_30_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 30 (Bereich 40Nm bis 50Nm) |
| STAT_LW_KLASS_DCL_KL_31_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 31 (Bereich 50Nm bis 60Nm) |
| STAT_LW_KLASS_DCL_KL_32_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 32 (Bereich 60Nm bis 70Nm) |
| STAT_LW_KLASS_DCL_KL_33_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 33 (Bereich 70Nm bis 80Nm) |
| STAT_LW_KLASS_DCL_KL_34_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 34 (Bereich 80Nm bis 90Nm) |
| STAT_LW_KLASS_DCL_KL_35_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 35 (Bereich 90Nm bis 100Nm) |
| STAT_LW_KLASS_DCL_KL_36_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 36 (Bereich 100Nm bis 110Nm) |
| STAT_LW_KLASS_DCL_KL_37_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 37 (Bereich 110Nm bis 120Nm) |
| STAT_LW_KLASS_DCL_KL_38_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 38 (Bereich 120Nm bis 130Nm) |
| STAT_LW_KLASS_DCL_KL_39_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 39 (Bereich 130Nm bis 140Nm) |
| STAT_LW_KLASS_DCL_KL_40_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 40 (Bereich 140Nm bis 150Nm) |
| STAT_LW_KLASS_DCL_KL_41_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 41 (Bereich 150Nm bis 160Nm) |
| STAT_LW_KLASS_DCL_KL_42_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 42 (Bereich 160Nm bis 170Nm) |
| STAT_LW_KLASS_DCL_KL_43_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 43 (Bereich 170Nm bis 180Nm) |
| STAT_LW_KLASS_DCL_KL_44_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 44 (Bereich 180Nm bis 190Nm) |
| STAT_LW_KLASS_DCL_KL_45_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 45 (Bereich 190Nm bis 200Nm) |
| STAT_LW_KLASS_DCL_KL_46_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 46 (Bereich 200Nm bis 210Nm) |
| STAT_LW_KLASS_DCL_KL_47_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 47 (Bereich 210Nm bis 220Nm) |
| STAT_LW_KLASS_DCL_KL_48_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 48 (Bereich 220Nm bis 230Nm) |
| STAT_LW_KLASS_DCL_KL_49_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 49 (Bereich 230Nm bis 240Nm) |
| STAT_LW_KLASS_DCL_KL_50_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 50 (Bereich 240Nm bis 250Nm) |
| STAT_LW_KLASS_DCL_KL_51_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 51 (Bereich 250Nm bis 260Nm) |
| STAT_LW_KLASS_DCL_KL_52_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 52 (Bereich 260Nm bis 270Nm) |
| STAT_LW_KLASS_DCL_KL_53_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 53 (Bereich 270Nm bis 280Nm) |
| STAT_LW_KLASS_DCL_KL_54_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 54 (Bereich 280Nm bis 290Nm) |
| STAT_LW_KLASS_DCL_KL_55_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 55 (Bereich 290Nm bis 300Nm) |
| STAT_LW_KLASS_DCL_KL_56_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 56 (Bereich 300Nm bis 310Nm) |
| STAT_LW_KLASS_DCL_KL_57_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 57 (Bereich 310Nm bis 320Nm) |
| STAT_LW_KLASS_DCL_KL_58_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 58 (Bereich 320Nm bis 330Nm) |
| STAT_LW_KLASS_DCL_KL_59_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 59 (Bereich 330Nm bis 340Nm) |
| STAT_LW_KLASS_DCL_KL_60_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 60 (Bereich 340Nm bis 350Nm) |
| STAT_LW_KLASS_DCL_KL_61_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 61 (Fehlerrandklasse) |
| STAT_LW_KLASS_DCL_KL_62_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung Dogclutch Klasse 62 (Gesamtstrecke) |

### RES_0XADFB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSMODUS_PHEV_NR | - | + | + | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV_ERGEBNIS | - | - | - | Status Werksmodus PHEV |

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
| STAT_LADEGERAET | 0/1 | high | unsigned char | - | - | - | - | - | Ladegerät erkannt (1 = erkannt / 0 = nicht erkannt) |
| STAT_FREMDLADUNG | 0/1 | high | unsigned char | - | - | - | - | - | Fremdladung (1 = erkannt / 0 = nicht erkannt) |
| STAT_FAHRB | 0/1 | high | unsigned char | - | - | - | - | - | Fahrbereitschaft (1 = aktiv / 0 = nicht aktiv) |
| STAT_BA_DCDC_KOMM_NR | 0-n | high | unsigned char | - | TAB_EME_KOMM_BETRIEBSART_DCDC | - | - | - | Kommandierte Betriebsart DC/DC Wandler |
| STAT_I_DCDC_HV_OUT_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze HV-Seite |
| STAT_U_DCDC_HV_OUT_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannungsgrenze HV-Seite |
| STAT_I_DCDC_LV_OUT_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze NV-Seite |
| STAT_U_DCDC_LV_OUT_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannungsgrenze NV-Seite |
| STAT_BA_DCDC_IST_NR | 0-n | high | unsigned char | - | TAB_EME_IST_BETRIEBSART_DCDC | - | - | - | IST-Betriebsart DCDC-Wandler |
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

### RES_0XDE19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BREMSBTG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsbetätigungen |
| STAT_LAUFZEIT_ELUP_S_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Elup |
| STAT_ANLAUFE_ELUP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anläufe Elup |

### RES_0XDE26_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BIT_0 | 0/1 | high | unsigned long | - | - | - | - | - | HV aus durch Diagnose Steuern-Job angefordert, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_1 | 0/1 | high | unsigned long | - | - | - | - | - | Flash-Modus, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_2 | 0/1 | high | unsigned long | - | - | - | - | - | Interlockfehler, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_3 | 0/1 | high | unsigned long | - | - | - | - | - | Kategorie 6 Batteriefehler, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_4 | 0/1 | high | unsigned long | - | - | - | - | - | HV aus durch Entladeschutzfunktion HEV angefordert, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_5 | 0/1 | high | unsigned long | - | - | - | - | - | Notaus, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_6 | 0/1 | high | unsigned long | - | - | - | - | - | schwerer Crash, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_7 | 0/1 | high | unsigned long | - | - | - | - | - | Crash, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_8 | 0/1 | high | unsigned long | - | - | - | - | - | Kategorie 7 Batteriefehler, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_9 | 0/1 | high | unsigned long | - | - | - | - | - | einfacher Schützkleber, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_10 | 0/1 | high | unsigned long | - | - | - | - | - | doppelter Schützkleber, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_11 | 0/1 | high | unsigned long | - | - | - | - | - | Schützkleber verhindert HV-batterielosen Betrieb, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_12 | 0/1 | high | unsigned long | - | - | - | - | - | Signale von SME ungültig oder ausgefallen, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_13 | 0/1 | high | unsigned long | - | - | - | - | - | Signale von LE ungültig oder ausgefallen, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_14 | 0/1 | high | unsigned long | - | - | - | - | - | HV aus durch Power Down, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_15 | 0/1 | high | unsigned long | - | - | - | - | - | HV aus Nachlaufzeit Klemme 30b abgelaufen, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_16 | 0/1 | high | unsigned long | - | - | - | - | - | HV aus durch Entladeschutzfunktion BEV angefordert, 1 = aktiv, 0 = inaktiv |

### RES_0XDE75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
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
| STAT_ROHSIGNAL_STROM_HVDC_UMRICHTER_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal HV DC Strom Umrichter. |
| STAT_ROHSIGNAL_STROM_U_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase U. |
| STAT_ROHSIGNAL_STROM_V_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase V. |
| STAT_ROHSIGNAL_STROM_W_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase W. |
| STAT_ROHSIGNAL_ROTORLAGESENSOR_WERT | rad | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Rotorlagesensor korrigierte elektrische Winkelposition (Radian) |
| STAT_ROHSIGNAL_TEMP_HVSGR_EMASCHINE_STATOR_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | -48.0 | Hochvolt Startergenerator: Rohsignal Temperatursensor vom Stator der elektrischen Maschine |
| STAT_ROHSIGNAL_HVSGR_ROTORLAGESENSOR_WERT | rad | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Hochvolt Startergenerator: Korrigierte elektrische Winkelposition (in rad) für den Rotorlagesensor |

### RES_0XDE81_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_KL30B_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Spannungsmessung Klemme30b |
| STAT_ROHSIGNAL_KL15WUO_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal  Klemme 15WUO (0 = nicht aktiv, 1 = aktiv) |
| STAT_ROHSIGNAL_CRASHSIGNAL_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal Crasheingang Crashsignal elektrisch ( 0 = nicht aktiv; 1 = aktiv ) |

### RES_0XDE83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_SPANNUNG_LV_DCDC_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Spannungsmessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_LV_DCDC_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_HV_DCDC_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung HV DCDC Wandler. |

### RES_0XDE8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEM_STROM_AC_EFF_W_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Effektiver Zuleitungsstrom Phase W der Traktions-Elektromaschine |
| STAT_TEM_STROM_AC_EFF_V_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Effektiver Zuleitungsstrom Phase V der Traktions-Elektromaschine |
| STAT_TEM_STROM_AC_EFF_U_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Effektiver Zuleitungsstrom Phase U der Traktions-Elektromaschine |
| STAT_HV_DC_STROM_UMRICHTER_TEM_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | HV-DC Strom des Umrichters für den Stator der Traktions-Elektromaschine |
| STAT_HV_DC_STROM_UMRICHTER_HVSGR_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | HV-DC Strom des Umrichters für den Stator des Hochvolt Startergenerators |

### RES_0XDE8B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_DC_STROM_UMRICHTER_MOTOR_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler betragsmäßiger HV DC Strom Traktions-Elektromaschine |
| STAT_HV_DC_STROM_UMRICHTER_GENERATOR_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler betragsmäßiger HV DC Strom Hochvolt Startergenerator |
| STAT_STROM_EKMV_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler Strom zum eKMV |

### RES_0XDE8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_TEM_UMRICHTER_PHASE_U_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Traktions-Elektromaschine Phase U |
| STAT_TEMP_TEM_UMRICHTER_PHASE_V_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Traktions-Elektromaschine Phase V |
| STAT_TEMP_TEM_UMRICHTER_PHASE_W_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Traktions-Elektromaschine Phase W |
| STAT_TEMP_UMRICHTER_GT_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Inverter Gatedriver |
| STAT_TEMP_MAIN_PROZESSOR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Hauptprozessor |
| STAT_TEMP_TEM_PROZESSOR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor Traktions-Elektromaschine |
| STAT_TEMP_HVSGR_PROZESSOR_WERT | ° | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor Hochvolt Startergenerator |
| STAT_TEMP_HVSGR_UMRICHTER_PHASE_U_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Hochvolt Startergenerator Phase U |
| STAT_TEMP_HVSGR_UMRICHTER_PHASE_V_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Hochvolt Startergenerator Phase V |
| STAT_TEMP_HVSGR_UMRICHTER_PHASE_W_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Hochvolt Startergenerator Phase W |
| STAT_TEMP_DCDC_KUEHLMITTEL_WERT | ° | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Kühlmittel DCDC Wandler |

### RES_0XDE8F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTZUSTAND_UMRICHTER_TEM | 0-n | high | unsigned char | - | TAB_UMRICHTER_SCHALTZUSTAND_2 | - | - | - | Schaltzustand der Leistungshalbleiter im Umrichter der Traktions-Elektromaschine (bit-codierter Wert) |
| STAT_SCHALTZUSTAND_UMRICHTER_HVSGR | 0-n | high | unsigned char | - | TAB_UMRICHTER_SCHALTZUSTAND_2 | - | - | - | Schaltzustand der Leistungshalbleiter im Umrichter des Hochvolt Startergenerator (bit-codierter Wert) |

### RES_0XDE92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_AE_ZST_AKTIV_NAKTIV | - | - | - | Ist-Betriebsart des DCDC-Wandlers |
| STAT_SPANNUNG_LV_IST_WERT | V | high | unsigned int | - | - | 0.05 | 1.0 | 0.0 | Bordnetzspannung |
| STAT_AUSLASTUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung des DCDC-Wandlers |

### RES_0XDE93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_ELUP | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strom am ELUP-Ausgang |

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
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - aktueller Vorgang |
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
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - letzter Vorgang |
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
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - vorletzter Vorgang |
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
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - 3.letzter Vorgang |
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

### RES_0XDEB1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_MC0_WERT | ° | high | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Resolver Offset Winkel (0° ... +359°) |
| STAT_OFFSET_MC2_WERT | ° | high | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Resolver Offset Winkel (0° ... +359°) |

### RES_0XDEB2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_TEMPERATUR_HISTOGRAMM_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Temperaturbereich kleiner -20°C |
| STAT_DCDC_TEMPERATUR_HISTOGRAMM_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Temperaturbereich von -20°C bis 0°C |
| STAT_DCDC_TEMPERATUR_HISTOGRAMM_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Temperaturbereich von 0°C bis 50°C |
| STAT_DCDC_TEMPERATUR_HISTOGRAMM_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Temperaturbereich von 50°C bis 70°C |
| STAT_DCDC_TEMPERATUR_HISTOGRAMM_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Temperaturbereich grösser 70°C |

### RES_0XDEB3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_LEISTUNGSHISTOGRAMM_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Leistungsbereich kleiner 800 W |
| STAT_DCDC_LEISTUNGSHISTOGRAMM_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Leistungsbereich von 800 W bis 1600 W |
| STAT_DCDC_LEISTUNGSHISTOGRAMM_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Leistungsbereich von 1600 W bis 2400 W |
| STAT_DCDC_LEISTUNGSHISTOGRAMM_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Leistungsbereich von 2400 W bis 2800 W |
| STAT_DCDC_LEISTUNGSHISTOGRAMM_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Leistungsbereich grösser 2800 W |

### RES_0XDEBF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_HAUPT_PROZESSOR_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des Hauptprozessors |
| STAT_SYSSTATE_TEM_PROZESSOR_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des Prozessors für Traktions-Elektromaschine |
| STAT_SYSSTATE_HVSGR_PROZESSOR_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des Prozessors für Hochvolt Startergenerator |
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

### RES_0XDF1C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLAUENKUPPLUNG_GANG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller Gang Klauenkupplung |
| STAT_KLAUENKUPPLUNG_POSITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position der Klauenkupplung |

### RES_0XDF49_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

### RES_0XDF50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_WERKLDMODUS_NR | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_SOC_LADEMODUS_WERK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### RES_0XDF52_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_MC0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3-Byte Chiffetext vom Resolver Offset Winkel MC0 |
| STAT_OFFSET_MC2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3-Byte Chiffetext vom Resolver Offset Winkel MC2 |

### RES_0XDFD0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_1_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_2_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_3_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_4_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_5_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_6_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_7_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_8_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_9_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_10_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_11_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_12_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 0 U/min bis 840 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_13_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_14_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_15_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_16_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_17_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_18_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_19_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_20_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_21_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_22_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_23_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_24_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 840 U/min bis 1680 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_25_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_26_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_27_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_28_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_29_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_30_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_31_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_32_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_33_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_34_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_35_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_36_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 1680 U/min bis 2520 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_37_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_38_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_39_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_40_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_41_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_42_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_43_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_44_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_45_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_46_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_47_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_48_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 2520 U/min bis 3359 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_49_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_50_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_51_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_52_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_53_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_54_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_55_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_56_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_57_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_58_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_59_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_60_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 3359 U/min bis 4199 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_61_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_62_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_63_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_64_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_65_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_66_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_67_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_68_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_69_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_70_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_71_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_72_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 4199 U/min bis 5039 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_73_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_74_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_75_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_76_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_77_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_78_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_79_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_80_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_81_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_82_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_83_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_84_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 5039 U/min bis 6718 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_85_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_86_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_87_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_88_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_89_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_90_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_91_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_92_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_93_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_94_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_95_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_96_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 6718 U/min bis 8397 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_97_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_98_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_99_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_100_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_101_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_102_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_103_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_104_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_105_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_106_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_107_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_108_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 8397 U/min bis 10077 U/min und 240 Nm bis 260 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_109_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und -100 Nm bis -75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_110_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und -75 Nm bis -25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_111_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und -25 Nm bis 0 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_112_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 0 Nm bis 25 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_113_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 25 Nm bis 75 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_114_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 75 Nm bis 100 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_115_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 100 Nm bis 150 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_116_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 150 Nm bis 175 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_117_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 175 Nm bis 200 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_118_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 200 Nm bis 220 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_119_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 220 Nm bis 240 Nm |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_120_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Bereich 10077 U/min bis 13436 U/min und 240 Nm bis 260 Nm |
| STAT_GESAMTZEIT_LASTHISTROGRAMM_AKTIV_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit Lasthistogramm aktiv |

### RES_0XDFD1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_1_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 1 |
| STAT_DTC_1_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 1 |
| STAT_DTC_1_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 1 |
| STAT_DTC_2_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 2 |
| STAT_DTC_2_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 2 |
| STAT_DTC_2_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 2 |
| STAT_DTC_3_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 3 |
| STAT_DTC_3_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 3 |
| STAT_DTC_3_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 3 |
| STAT_DTC_4_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 4 |
| STAT_DTC_4_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 4 |
| STAT_DTC_4_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 4 |
| STAT_DTC_5_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 5 |
| STAT_DTC_5_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 5 |
| STAT_DTC_5_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 5 |
| STAT_DTC_6_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 6 |
| STAT_DTC_6_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 6 |
| STAT_DTC_6_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 6 |
| STAT_DTC_7_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 7 |
| STAT_DTC_7_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 7 |
| STAT_DTC_7_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 7 |
| STAT_DTC_8_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 8 |
| STAT_DTC_8_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 8 |
| STAT_DTC_8_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 8 |
| STAT_DTC_9_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 9 |
| STAT_DTC_9_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 9 |
| STAT_DTC_9_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 9 |
| STAT_DTC_10_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 10 |
| STAT_DTC_10_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 10 |
| STAT_DTC_10_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 10 |
| STAT_DTC_11_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 11 |
| STAT_DTC_11_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 11 |
| STAT_DTC_11_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 11 |
| STAT_DTC_12_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 12 |
| STAT_DTC_12_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 12 |
| STAT_DTC_12_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 12 |
| STAT_DTC_13_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 13 |
| STAT_DTC_13_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 13 |
| STAT_DTC_13_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 13 |
| STAT_DTC_14_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 14 |
| STAT_DTC_14_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 14 |
| STAT_DTC_14_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 14 |
| STAT_DTC_15_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 15 |
| STAT_DTC_15_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 15 |
| STAT_DTC_15_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 15 |
| STAT_DTC_16_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 16 |
| STAT_DTC_16_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 16 |
| STAT_DTC_16_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 16 |
| STAT_DTC_17_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 17 |
| STAT_DTC_17_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 17 |
| STAT_DTC_17_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 17 |
| STAT_DTC_18_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 18 |
| STAT_DTC_18_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 18 |
| STAT_DTC_18_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 18 |
| STAT_DTC_19_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 19 |
| STAT_DTC_19_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 19 |
| STAT_DTC_19_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 19 |
| STAT_DTC_20_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 20 |
| STAT_DTC_20_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 20 |
| STAT_DTC_20_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 20 |
| STAT_DTC_21_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 21 |
| STAT_DTC_21_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 21 |
| STAT_DTC_21_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 21 |
| STAT_DTC_22_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 22 |
| STAT_DTC_22_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 22 |
| STAT_DTC_22_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 22 |
| STAT_DTC_23_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 23 |
| STAT_DTC_23_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 23 |
| STAT_DTC_23_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 23 |
| STAT_DTC_24_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 24 |
| STAT_DTC_24_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 24 |
| STAT_DTC_24_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 24 |
| STAT_DTC_25_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 25 |
| STAT_DTC_25_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 25 |
| STAT_DTC_25_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 25 |
| STAT_DTC_26_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 26 |
| STAT_DTC_26_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 26 |
| STAT_DTC_26_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 26 |
| STAT_DTC_27_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 27 |
| STAT_DTC_27_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 27 |
| STAT_DTC_27_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 27 |
| STAT_DTC_28_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 28 |
| STAT_DTC_28_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 28 |
| STAT_DTC_28_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 28 |
| STAT_DTC_29_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 29 |
| STAT_DTC_29_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 29 |
| STAT_DTC_29_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 29 |
| STAT_DTC_30_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 30 |
| STAT_DTC_30_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 30 |
| STAT_DTC_30_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 30 |
| STAT_DTC_31_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 31 |
| STAT_DTC_31_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 31 |
| STAT_DTC_31_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 31 |
| STAT_DTC_32_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 32 |
| STAT_DTC_32_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 32 |
| STAT_DTC_32_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 32 |
| STAT_DTC_33_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 33 |
| STAT_DTC_33_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 33 |
| STAT_DTC_33_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 33 |
| STAT_DTC_34_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 34 |
| STAT_DTC_34_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 34 |
| STAT_DTC_34_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 34 |
| STAT_DTC_35_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 35 |
| STAT_DTC_35_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 35 |
| STAT_DTC_35_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 35 |
| STAT_DTC_36_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 36 |
| STAT_DTC_36_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 36 |
| STAT_DTC_36_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 36 |
| STAT_DTC_37_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 37 |
| STAT_DTC_37_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 37 |
| STAT_DTC_37_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 37 |
| STAT_DTC_38_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 38 |
| STAT_DTC_38_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 38 |
| STAT_DTC_38_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 38 |
| STAT_DTC_39_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 39 |
| STAT_DTC_39_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 39 |
| STAT_DTC_39_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 39 |
| STAT_DTC_40_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 40 |
| STAT_DTC_40_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 40 |
| STAT_DTC_40_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 40 |
| STAT_DTC_41_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 41 |
| STAT_DTC_41_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 41 |
| STAT_DTC_41_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 41 |
| STAT_DTC_42_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 42 |
| STAT_DTC_42_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 42 |
| STAT_DTC_42_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 42 |
| STAT_DTC_43_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 43 |
| STAT_DTC_43_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 43 |
| STAT_DTC_43_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 43 |
| STAT_DTC_44_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 44 |
| STAT_DTC_44_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 44 |
| STAT_DTC_44_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 44 |
| STAT_DTC_45_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 45 |
| STAT_DTC_45_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 45 |
| STAT_DTC_45_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 45 |
| STAT_DTC_46_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 46 |
| STAT_DTC_46_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 46 |
| STAT_DTC_46_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 46 |
| STAT_DTC_47_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 47 |
| STAT_DTC_47_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 47 |
| STAT_DTC_47_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 47 |
| STAT_DTC_48_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 48 |
| STAT_DTC_48_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 48 |
| STAT_DTC_48_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 48 |
| STAT_DTC_49_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 49 |
| STAT_DTC_49_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 49 |
| STAT_DTC_49_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 49 |
| STAT_DTC_50_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 50 |
| STAT_DTC_50_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 50 |
| STAT_DTC_50_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 50 |
| STAT_DTC_51_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 51 |
| STAT_DTC_51_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 51 |
| STAT_DTC_51_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 51 |
| STAT_DTC_52_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 52 |
| STAT_DTC_52_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 52 |
| STAT_DTC_52_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 52 |
| STAT_DTC_53_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 53 |
| STAT_DTC_53_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 53 |
| STAT_DTC_53_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 53 |
| STAT_DTC_54_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 54 |
| STAT_DTC_54_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 54 |
| STAT_DTC_54_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 54 |
| STAT_DTC_55_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 55 |
| STAT_DTC_55_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 55 |
| STAT_DTC_55_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 55 |
| STAT_DTC_56_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 56 |
| STAT_DTC_56_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 56 |
| STAT_DTC_56_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 56 |
| STAT_DTC_57_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 57 |
| STAT_DTC_57_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 57 |
| STAT_DTC_57_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 57 |
| STAT_DTC_58_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 58 |
| STAT_DTC_58_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 58 |
| STAT_DTC_58_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 58 |
| STAT_DTC_59_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 59 |
| STAT_DTC_59_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 59 |
| STAT_DTC_59_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 59 |
| STAT_DTC_60_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 60 |
| STAT_DTC_60_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 60 |
| STAT_DTC_60_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 60 |
| STAT_DTC_61_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 61 |
| STAT_DTC_61_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 61 |
| STAT_DTC_61_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 61 |
| STAT_DTC_62_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 62 |
| STAT_DTC_62_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 62 |
| STAT_DTC_62_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 62 |
| STAT_DTC_63_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 63 |
| STAT_DTC_63_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 63 |
| STAT_DTC_63_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 63 |
| STAT_DTC_64_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 64 |
| STAT_DTC_64_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 64 |
| STAT_DTC_64_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 64 |
| STAT_DTC_65_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 65 |
| STAT_DTC_65_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 65 |
| STAT_DTC_65_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 65 |
| STAT_DTC_66_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 66 |
| STAT_DTC_66_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 66 |
| STAT_DTC_66_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 66 |
| STAT_DTC_67_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 67 |
| STAT_DTC_67_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 67 |
| STAT_DTC_67_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 67 |
| STAT_DTC_68_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 68 |
| STAT_DTC_68_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 68 |
| STAT_DTC_68_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 68 |
| STAT_DTC_69_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 69 |
| STAT_DTC_69_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 69 |
| STAT_DTC_69_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 69 |
| STAT_DTC_70_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 70 |
| STAT_DTC_70_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 70 |
| STAT_DTC_70_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 70 |
| STAT_DTC_71_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 71 |
| STAT_DTC_71_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 71 |
| STAT_DTC_71_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 71 |
| STAT_DTC_72_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 72 |
| STAT_DTC_72_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 72 |
| STAT_DTC_72_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 72 |
| STAT_DTC_73_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 73 |
| STAT_DTC_73_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 73 |
| STAT_DTC_73_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 73 |
| STAT_DTC_74_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 74 |
| STAT_DTC_74_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 74 |
| STAT_DTC_74_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 74 |
| STAT_DTC_75_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 75 |
| STAT_DTC_75_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 75 |
| STAT_DTC_75_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 75 |
| STAT_DTC_76_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 76 |
| STAT_DTC_76_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 76 |
| STAT_DTC_76_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 76 |
| STAT_DTC_77_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 77 |
| STAT_DTC_77_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 77 |
| STAT_DTC_77_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 77 |
| STAT_DTC_78_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 78 |
| STAT_DTC_78_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 78 |
| STAT_DTC_78_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 78 |
| STAT_DTC_79_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 79 |
| STAT_DTC_79_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 79 |
| STAT_DTC_79_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 79 |
| STAT_DTC_80_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 80 |
| STAT_DTC_80_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 80 |
| STAT_DTC_80_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 80 |
| STAT_DTC_81_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 81 |
| STAT_DTC_81_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 81 |
| STAT_DTC_81_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 81 |
| STAT_DTC_82_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 82 |
| STAT_DTC_82_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 82 |
| STAT_DTC_82_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 82 |
| STAT_DTC_83_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 83 |
| STAT_DTC_83_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 83 |
| STAT_DTC_83_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 83 |
| STAT_DTC_84_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 84 |
| STAT_DTC_84_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 84 |
| STAT_DTC_84_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 84 |
| STAT_DTC_85_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 85 |
| STAT_DTC_85_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 85 |
| STAT_DTC_85_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 85 |
| STAT_DTC_86_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 86 |
| STAT_DTC_86_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 86 |
| STAT_DTC_86_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 86 |
| STAT_DTC_87_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 87 |
| STAT_DTC_87_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 87 |
| STAT_DTC_87_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 87 |
| STAT_DTC_88_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 88 |
| STAT_DTC_88_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 88 |
| STAT_DTC_88_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 88 |
| STAT_DTC_89_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 89 |
| STAT_DTC_89_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 89 |
| STAT_DTC_89_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 89 |
| STAT_DTC_90_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 90 |
| STAT_DTC_90_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 90 |
| STAT_DTC_90_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 90 |
| STAT_DTC_91_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 91 |
| STAT_DTC_91_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 91 |
| STAT_DTC_91_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 91 |
| STAT_DTC_92_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 92 |
| STAT_DTC_92_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 92 |
| STAT_DTC_92_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 92 |
| STAT_DTC_93_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 93 |
| STAT_DTC_93_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 93 |
| STAT_DTC_93_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 93 |
| STAT_DTC_94_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 94 |
| STAT_DTC_94_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 94 |
| STAT_DTC_94_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 94 |
| STAT_DTC_95_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 95 |
| STAT_DTC_95_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 95 |
| STAT_DTC_95_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 95 |
| STAT_DTC_96_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 96 |
| STAT_DTC_96_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 96 |
| STAT_DTC_96_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 96 |
| STAT_DTC_97_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 97 |
| STAT_DTC_97_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 97 |
| STAT_DTC_97_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 97 |
| STAT_DTC_98_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 98 |
| STAT_DTC_98_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 98 |
| STAT_DTC_98_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 98 |
| STAT_DTC_99_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 99 |
| STAT_DTC_99_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 99 |
| STAT_DTC_99_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 99 |
| STAT_DTC_100_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 100 |
| STAT_DTC_100_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 100 |
| STAT_DTC_100_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 100 |
| STAT_DTC_101_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 101 |
| STAT_DTC_101_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 101 |
| STAT_DTC_101_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 101 |
| STAT_DTC_102_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 102 |
| STAT_DTC_102_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 102 |
| STAT_DTC_102_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 102 |
| STAT_DTC_103_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 103 |
| STAT_DTC_103_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 103 |
| STAT_DTC_103_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 103 |
| STAT_DTC_104_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 104 |
| STAT_DTC_104_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 104 |
| STAT_DTC_104_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 104 |
| STAT_DTC_105_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 105 |
| STAT_DTC_105_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 105 |
| STAT_DTC_105_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 105 |
| STAT_DTC_106_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 106 |
| STAT_DTC_106_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 106 |
| STAT_DTC_106_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 106 |
| STAT_DTC_107_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 107 |
| STAT_DTC_107_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 107 |
| STAT_DTC_107_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 107 |
| STAT_DTC_108_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 108 |
| STAT_DTC_108_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 108 |
| STAT_DTC_108_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 108 |
| STAT_DTC_109_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 109 |
| STAT_DTC_109_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 109 |
| STAT_DTC_109_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 109 |
| STAT_DTC_110_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 110 |
| STAT_DTC_110_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 110 |
| STAT_DTC_110_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 110 |
| STAT_DTC_111_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 111 |
| STAT_DTC_111_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 111 |
| STAT_DTC_111_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 111 |

### RES_0XDFD3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_CAPACITY_UTIL_HIST_DCDC_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Kapazitätsbereich kleiner 20% |
| STAT_DCDC_CAPACITY_UTIL_HIST_DCDC_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Kapazitätsbereich von 20% bis 40% |
| STAT_DCDC_CAPACITY_UTIL_HIST_DCDC_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Kapazitätsbereich von 40% bis 60% |
| STAT_DCDC_CAPACITY_UTIL_HIST_DCDC_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Kapazitätsbereich von 60% bis 80% |
| STAT_DCDC_CAPACITY_UTIL_HIST_DCDC_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im Kapazitätsbereich grösser 80% |

### RES_0XDFD4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_HISTORIE_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Teil 1 der Historie über die letzten 500 DTCs vom DC/DC-Wandler |
| STAT_DTC_HISTORIE_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Teil 2 der Historie über die letzten 500 DTCs vom DC/DC-Wandler |

### RES_0XF010_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GAIN_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_OFFSET_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_EXPONENT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 100000.0 | 0.0 | Zusätzliche Skalierung |

### RES_0XF050_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS | - | - | + | 0-n | high | signed char | - | TAB_AKTIV | - | - | - | Status Freilauf: 0=inaktiv; 1=aktiv |

### RES_0XF781_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALIFIER_WERT | + | + | - | HEX | high | unsigned char | - | - | - | - | - | Qualifier (0=qualified, 2=qualified) |

### RES_0XF782_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALIFIER_WERT | + | + | - | HEX | high | unsigned char | - | - | - | - | - | Qualifier  (0=qualified, 2=qualified) |

### RES_0XF783_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALIFIER_WERT | + | + | - | HEX | high | unsigned char | - | - | - | - | - | Qualifier  (0=qualified, 2=qualified) |

### RES_0XF784_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALIFIER_WERT | + | + | - | HEX | high | unsigned char | - | - | - | - | - | Qualifier  (0=qualified, 2=qualified) |

### RES_0XF785_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESPONSE_WERT | + | + | - | HEX | high | unsigned char | - | - | - | - | - | Response |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| RESET_ZAEHLER_TEM_RUECKSETZEN | 0x4005 | - | Rücksetzen des RESET Zählers der TEM (0 = kein Rücksetzen; 1 = Rücksetzen) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4005_D | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| RESET_ZAEHLER_MAIN_ZURUECKSETZEN | 0x4006 | - | Zurücksetzen des Reset Zählers vom Hauptprozessor (0 = kein Rücksetzen; 1 = Rücksetzen). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006_D | - |
| RESET_ZAEHLER_MAIN | 0x4007 | - | Auslesen Informationen wegen Resets vom Hauptprozessor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007_D |
| RESET_ZAEHLER_TEM | 0x4008 | - | Auslesen Reset und AKS Information für Traktions-Elektromaschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008_D |
| AE_RESET_CRASHZAEHLER | 0x400A | - | Rücksetzen der beiden Crashzähler | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400A_D | - |
| AE_HWCAL_SETZEN | 0x400D | - | Hardware Kalibrierungsdaten der AE setzen Es kann nicht die Seriennummer gesetz werden (eigener Job _steuern_sn_setzen)!!! | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D_D | - |
| AE_HWCAL_FLASHEN | 0x400E | - | Schreibt die HWCALs eines bestimmten Blocks ins Flash | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400E_D | - |
| _HVSM_KL30B_FILTERED_VOLTS | 0x6F30 | STAT_FUSI_KL30B_FILTERED_VOLTS_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_KL30B_FILTERED_VOLTS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVDC_5VREF_FILTERED_VOLTS | 0x6F31 | STAT_HVSM_HVDC_5VREF_FILTERED_VOLTS_WERT | - | V | - | High | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVDC_MAIN_FILTERED_VOLTS | 0x6F32 | STAT_HVSM_HVDC_MAIN_FILTERED_VOLTS_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_HVDC_MAIN_FILTERED_VOLTS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVDC_MAIN_ADJUSTED_VOLTS | 0x6F33 | STAT_HVSM_HVDC_MAIN_ADJUSTED_VOLTS_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_HVDC_MAIN_ADJUSTED_VOLTS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVDC_PSEN_FILTERED_VOLTS | 0x6F34 | STAT_HVSM_HVDC_PSEN_FILTERED_VOLTS_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_HVDC_PSEN_FILTERED_VOLTS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVDC_NSEN_FILTERED_VOLTS | 0x6F35 | STAT_HVSM_HVDC_NSEN_FILTERED_VOLTS_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_HVDC_NSEN_FILTERED_VOLTS | High | unsigned int | - | 0.1 | 1.0 | -630.0 | - | 22;2C | - | - |
| _HVSM_KL30C_FILTERED_VOLTS | 0x6F36 | STAT_HVSM_KL30C_FILTERED_VOLTS_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_KL30C_FILTERED_VOLTS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_KL30C_DI_STATE | 0x6F37 | STAT_HVSM_KL30C_DI_STATE | - | 0/1 | V_S_FUSI_MC0_IOHWAB_U8_KL30C_DI_STATE | High | unsigned char | - | - | - | - | - | 22;2C | - | - |
| _HVSM_TEM_EM_CURRENT | 0x6F38 | STAT_HVSM_TEM_EM_CURRENT_WERT | - | A | V_S_FUSI_MC0_IOHWAB_F32_TEM_EM_CURRENT_AMPS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_TEM_EM_CURRENT_VREF | 0x6F39 | STAT_HVSM_TEM_EM_CURRENT_VREF_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_TEM_EM_VREF_VOLTS | High | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_ST_ACTDIS | 0x6F3F | - | Active Discharge status | Bit | - | - | BITFIELD | RES_0x6F3F_D | - | - | - | - | 22 | - | - |
| _HVSM_HVSGR_EM_CURRENT | 0x6F40 | STAT_HVSM_HVSGR_EM_CURRENT_WERT | - | A | V_S_FUSI_MC0_IOHWAB_F32_HVSGR_EM_CURRENT_AMPS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVSGR_EM_CURRENT_VREF | 0x6F41 | STAT_HVSM_HVSGR_EM_CURRENT_VREF_WERT | - | V | V_S_FUSI_MC0_IOHWAB_F32_HVSGR_EM_VREF_VOLTS | High | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_HVIL_STATUS | 0x6F42 | STAT_HVSM_HVIL_STATUS_WERT | - | - | V_S_QM_MC0_HVSM2_U8_HVIL_STATUS | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_PIC_COMMAND | 0x6F43 | STAT_HVSM_PIC_COMMAND_WERT | - | - | V_S_FUSI_MC0_IOHWAB_U8_PIC_COMMAND_STATE_SW | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_PIC_STATE | 0x6F44 | STAT_HVSM_PIC_STATE_WERT | - | - | V_S_FUSI_MC0_IOHWAB_U8_PIC_STATE | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_THERMAL_REST_STATUS | 0x6F45 | STAT_HVSM_THERMAL_REST_STATUS_WERT | - | - | V_S_FUSI_MC0_HVSM2_U8_ACTDIS_THERMAL_REST_COMPLETE | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_THERMAL_LOCK | 0x6F46 | STAT_HVSM_THERMAL_LOCK_WERT | - | - | V_S_FUSI_MC0_HVSM2_U8_ACTDIS_EMERGENCY_DISCHARGE_LOCK | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_CONTACTOR_OPEN_STATUS | 0x6F47 | STAT_HVSM_CONTACTOR_OPEN_STATUS_WERT | - | - | V_S_FUSI_MC0_HVSM2_U8_ACTDIS_VOLTAGE_CONTACTOR_OPEN | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _ST_HVSM2_MAIN_MONITORING_STATUS | 0x6F48 | - | MAIN Ueberwachung Status | Bit | - | - | BITFIELD | RES_0x6F48_D | - | - | - | - | 22 | - | - |
| _ST_HVSM2_MAIN_MONITORING_LATCH | 0x6F49 | - | MAIN Ueberwachung Status gespeichert | Bit | - | - | BITFIELD | RES_0x6F49_D | - | - | - | - | 22 | - | - |
| _ST_HVSM2_MAIN_REACTION | 0x6F4A | - | MAIN Reaktionsstatus | Bit | - | - | BITFIELD | RES_0x6F4A_D | - | - | - | - | 22 | - | - |
| _ST_HVSM2_MAIN_REACTION_LATCH | 0x6F4B | - | MAIN Reaktion gespeichert | Bit | - | - | BITFIELD | RES_0x6F4B_D | - | - | - | - | 22 | - | - |
| _HVSM_CCM_STATUS | 0x6F4C | - | CCM Status | Bit | - | - | BITFIELD | RES_0x6F4C_D | - | - | - | - | 22 | - | - |
| _HVSM_ST_TEST | 0x6F4D | - | Status Test | Bit | - | - | BITFIELD | RES_0x6F4D_D | - | - | - | - | 22 | - | - |
| _HVSM_THERMAL_COUNT_REMAIN | 0x6F4E | STAT_THERMAL_COUNT_REMAIN_WERT | - | - | V_S_FUSI_MC0_HVSM2_ACTDIS_U16_THERMAL_COUNT_REMAIN | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| _HVSM_EMERGENCY_DISCHARGE_COUNT | 0x6F4F | STAT_EMERGENCY_DISCHARGE_COUNT_WERT | - | - | V_S_FUSI_MC0_HVSM2_U16_ACTDIS_EMERGENCY_DISCHARGE_COUNT | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STEUERN_START_LADEN | 0xADC0 | - | Ladestart anfordern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC0_R | - |
| STEUERN_STOP_LADEN | 0xADC1 | - | Ladestop anfordern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC1_R | - |
| AKS_HV_SGR | 0xADCD | - | Setzen/Rücksetzen des Aktiven Kurzschlusses für Hochvolt-Startergenerator und Auslesen des Betriebszustandes vom Hochvolt-Startergenerator | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADCD_R | RES_0xADCD_R |
| FREILAUF_HV_SGR | 0xADCE | - | Aktivieren/Deaktivieren Freilauf des Hochvolt Startergenerators | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADCE_R |
| LEISTUNGSMESSUNG_PHEV | 0xADED | - | Setzen/Beenden und Auslesen des Modus Leisungsmessung für PHEVs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADED_R | RES_0xADED_R |
| EME_DCDC_WANDLER | 0xADF1 | - | Steuern oder Auslesen des Status vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF1_R | RES_0xADF1_R |
| EME_HV_SYSTEM_ON_OFF | 0xADF2 | - | HV-System hoch-/runterfahren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF2_R | RES_0xADF2_R |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4_R | RES_0xADF4_R |
| AE_KLASSIERUNG | 0xADF8 | - | Auslesen der  Drehzahl/Drehmoment-Klassierungsdaten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF8_R | RES_0xADF8_R |
| WERKSMODUS_PHEV | 0xADFB | - | Aktivieren/Deaktivieren des Werksmodus PHEV sowie Auslesen Status Werksmodus PHEV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFB_R | RES_0xADFB_R |
| EME_DCDC_LV | 0xDDF6 | - | Spannung / Strom DCDC (12V Bordnetz) am B+ Bolzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF6_D |
| EME_HVPM_DCDC_ANSTEUERUNG | 0xDE00 | - | Rückgabewerte vom HVPM für DCDC Ansteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE00_D |
| EME_HVPM_HV_SYSTEM_ON_OFF | 0xDE02 | - | Hochvoltsystem An / Aus (HVPM 2013) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE02_D |
| EME_HVPM_INFOSPEICHER_MSA_LOESCHEN | 0xDE07 | - | Alle Infospeicher aus Diagnosejob STATUS_HVPM_MSA werden auf Null gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE07_D | - |
| EME_HVPM_INFOSPEICHER_SPMON_LOESCHEN | 0xDE0A | - | Löschen des Infospeichers HVPMP (SPMON) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE0A_D | - |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | V_e_HvilError | High | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ELUP | 0xDE19 | - | Anzahl der Bremsbetätigungen, Laufzeit und Anläufe der ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE19_D | RES_0xDE19_D |
| EME_KAELTEMITTEL_ABSPERRVENTIL | 0xDE23 | - | Ansteuerung des Kältemittelabsperrventils | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE23_D | - |
| EME_HVSTART_FEHLER | 0xDE26 | - | Angabe des Fehlers beim Hochfahren des HV-Systems | - | Hym_St_hvstart_fehler | - | - | - | - | - | - | - | 22 | - | RES_0xDE26_D |
| AE_HV_SPANNUNG_LESEN | 0xDE75 | - | Werte aller Zwischenkreisspannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE75_D |
| AE_ROHSIG_AUSGANG | 0xDE7D | STAT_ROHSIGNAL_ANSTEURUNG_ELUP_NR | Rohsignal Ansteuerung ELUP. | 0-n | RQ_ELUP | High | unsigned char | TAB_AE_ELUP_ROHSIGNALE | - | - | - | - | 22 | - | - |
| AE_ROHSIG_EINGANG_SENS_ELUP_BUDS | 0xDE7E | - | Rohsignale Ausgangspins Sensoren ELUP, BUDS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7E_D |
| AE_ROHSIG_EINGANG_SENS_EM_INV | 0xDE7F | - | Rohsignale Sensoren/Eingänge für E-Maschine/Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7F_D |
| AE_ROHSIG_EINGANG_SENS_SG | 0xDE81 | - | Rohsignale Sensoren/Eingänge Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE81_D |
| AE_ROHSIG_EINGANG_SENS_DCDC | 0xDE83 | - | Rohsignale Sensoren/Eingänge DC/DC Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE83_D |
| AE_SPANNUNG_KLEMME30B | 0xDE88 | STAT_SPANNUNG_KL30B_WERT | aktuelle Spannung an KL30B | V | V_U_Int12V | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| AE_STROM_EMASCHINE | 0xDE8A | - | Ströme E-Maschine / Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8A_D |
| AE_STROM_MAX | 0xDE8B | - | maximal gemessene Ströme seit letztem Rücksetzen oder Rücksetzen der Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8B_D |
| AE_TEMP_LE | 0xDE8C | - | Temperaturen Steuergerät Antriebselektronik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8C_D |
| AE_UMRICHTER_SCHALTZUSTAND | 0xDE8F | - | Schaltzustand Leistunghalbleiter Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8F_D |
| AE_ZUSTAND_1_DCDC | 0xDE92 | - | Status DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE92_D |
| AE_ELUP | 0xDE93 | - | aktueller Zustand ELUP bzw. aktivieren/deaktivieren ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE93_D | RES_0xDE93_D |
| AE_ZUSTAND_DCDC_FEHLERBILD | 0xDE96 | - | Rückgabe aktiver/inaktiver Fehler DC/DC-Wandler | Bit | - | - | BITFIELD | RES_0xDE96_D | - | - | - | - | 22 | - | - |
| STATUS_CONNECTED_DRIVE | 0xDE9E | - | Informationen über Connected Drive | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE9E_D |
| LADEHISTORIE | 0xDEA1 | - | Lesen/Löschen der Ladehistorie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA1_D |
| AE_BUDS | 0xDEA5 | STAT_BUDS_WERT | Sensorwert des Bremsunterdrucks | hPa | AVL_LOWP_BRKFA | High | unsigned char | - | 4.0 | 1.0 | -1000.0 | - | 22 | - | - |
| AE_TEMP_EMASCHINE | 0xDEA6 | - | Wert der aktuellen Temperaturen der E-Maschine in Grad Celsius | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA6_D |
| AE_ELEKTRISCHE_MASCHINE | 0xDEA7 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA7_D |
| AE_SPANNUNG_12V_POWERBOARD | 0xDEA8 | STAT_SPANNUNG_12V_POWERBOARD_WERT | aktuelle 12V Spannung Powerboard | V | V_U_pb_12V_out | High | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| LADEHISTOGRAMM | 0xDEAE | - | Lesen/Löschen von Histogramm und Zähler aller Ladevorgänge (Elektrofahrzeug und Plug-In-Hybrid) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEAE_D |
| AE_ROTORLAGESENSOR | 0xDEB1 | - | Direktes Schreiben oder Auslesen des Resolveroffset Winkels | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEB1_D |
| AE_DCDC_TEMPHISTOGRAMM_LESEN | 0xDEB2 | - | Auslesen Temperatur-Histogramme DCDC / Rücksetzen Temperatur-Histogramme (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEB2_D | RES_0xDEB2_D |
| AE_DCDC_LEISTUNGSHISTOGRAMM | 0xDEB3 | - | Auslesen Leistungs-Histogramme DCDC-Wandler / Zurücksetzen Leistungs-Histogramme (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEB3_D | RES_0xDEB3_D |
| AE_ROTORLAGESENSOR_RESET | 0xDEB6 | - | Zurücksetzen des Resolveroffsetwinkels | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB6_D | - |
| AE_KLASSIERUNG_LOESCHEN | 0xDEB7 | - | Loeschen der gesamten Klassierungsdaten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB7_D | - |
| AE_CTRL_VERSION | 0xDEBC | STAT_CTRL_VERSION_WERT | Controllerbord-Version | - | V_e_CtrlVarIn | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SYSSTATE | 0xDEBF | - | Interne Statuszustände des Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEBF_D |
| KAELTEMITTEL_ABSPERRVENTIL_ON_OFF_PWM | 0xDEC0 | STAT_AKAV_ON_WERT | Status des Kältemittelabsperrventils; 0% = Ventil offen; 100% = geschlossen | % | Ctr_pwm_vent_ven | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_LSC_LADEN | 0xDEDE | - | Rückmeldung zum Ladeverfahrens | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEDE_D |
| KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | 0xDEE4 | STAT_AKAV_EL_DIAGNOSE_NR | Ergebnis der elektrischen Diagnose vom Kältemittelabsperrventil | 0-n | V_e_KMV_IR_tester_diag_state | High | unsigned char | TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | - | - | - | - | 22 | - | - |
| KLAUENKUPPLUNG_POSITION | 0xDF1C | - | Auslesen Position der Klauenkupplung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF1C_D |
| KLAUENKUPPLUNG_SCHALTEN | 0xDF1D | - | Klauenkupplung verfahren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF1D_D | - |
| MASSEBAND_DIAGNOSE | 0xDF22 | STAT_WIDERSTAND_WERT | Aktueller Widerstandswert der Masseanbindung DCDC-Wandler | mOhm | RTE_BMWgnldg_r_ActGnd_ub | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| LADESTROM_EINSTELLUNG | 0xDF45 | - | Einstellung Stromgrenzen für den Ladestrom | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF45_D | - |
| LADEHISTOGRAMM_LOESCHEN | 0xDF47 | - | Löschen des Ladehistogramms | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF47_D | - |
| HISTOGRAMM_LADEKOORDINATOR | 0xDF49 | - | Histogramme des Ladekoordinators | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF49_D |
| BETRIEBSZUSTAND_HV_SGR | 0xDF4C | STAT_BETRIEBSZUSTAND_HV_SGR_NR | Betriebszustand HV-Startergenerator | 0-n | - | High | unsigned char | TAB_BETRIEBSZUSTAND_HV_SGR | - | - | - | - | 22 | - | - |
| LADEMODUS_WERK | 0xDF50 | - | Setzen und Auslesen des Werkslademodus (Laden auf vorgegebenen SOC) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF50_D | RES_0xDF50_D |
| ROTORLAGESENSOR_WINKELCODE | 0xDF52 | - | Setzen und Auslesen des Resolveroffsetwinkels nach Entschlüsseln | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF52_D | RES_0xDF52_D |
| SCHWINGUNGSDAEMPFUNG_DEAKTIVIEREN | 0xDF5C | - | Deaktivierung der Schwingungsdämpfung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF5C_D | - |
| LAST_HISTOGRAMM_EMASCHINE_RESET | 0xDF5D | - | Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF5D_D | - |
| LAST_HISTOGRAMM_EMASCHINE_LESEN | 0xDFD0 | - | Auslesen der Histogramme der Elektromaschine (Drehzahl, Drehmoment, Vorzeichenwechsel Drehmoment) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD0_D |
| RBM_INFO | 0xDFD1 | - | RBM Informationen für die nicht kontinuierliche Diagnose | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD1_D |
| DCDC_KAPAZITAET_AUSNUTZUNG_HISTOGRAMM | 0xDFD3 | - | Auslesen und Löschen Histogramme mit Bereichen der Kapazitätsausnutzung des DC/DC-Wandlers | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFD3_D | RES_0xDFD3_D |
| DCDC_DTC_HISTORIE | 0xDFD4 | - | Auslesen und Löschen der DTC Historie vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFD4_D | RES_0xDFD4_D |
| AE_HWCAL_LESEN | 0xF010 | - | Auslesen der HWCALs anhand von Blocknummer und Prozessor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | RES_0xF010_R |
| AE_FREILAUF_MODUS | 0xF050 | - | Freilauf Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF050_R |
| _D_P_M_TOOL | 0xF781 | - | Tool Connected For FUSI Integrity | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF781_R | RES_0xF781_R |
| _D_P_M_ACTIVE_DISCHARGE | 0xF782 | - | Active Discharge | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF782_R | RES_0xF782_R |
| _D_P_M_HVSM2_AKS_TEM | 0xF783 | - | TEM Inverter's HW AKS | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF783_R | RES_0xF783_R |
| _D_P_M_HVSM2_AKS_HVSGR | 0xF784 | - | HVSGR Inverter's HW AKS | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF784_R | RES_0xF784_R |
| _D_S_M_HVSM2_ST_MAIN_LATCH_CLEAR | 0xF785 | - | Clear the latches: ST_HVSM2_MAIN_MONITORING_LATCH and ST_HVSM2_MAIN_REACTION_LATCH | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF785_R | RES_0xF785_R |
| _D_S_M_APPCAN | 0xF786 | - | Start/Stop Application Can | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

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

### TAB_AE_ELUP_ROHSIGNALE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht definiert |
| 0x01 | Ausschalten |
| 0x02 | Einschalten |

### TAB_AE_ELUP_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion! |
| 0x01 | ELUP ansteuern |

### TAB_AE_LADESTECKER_LSC_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladekabel angesteckt |
| 0x01 | Ladekabel angesteckt |
| 0x02 | Fehler |

### TAB_AE_MOMENTENKLASSE_GANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Gang 1: -250 Nm bis + 350 Nm |

### TAB_AE_RESET_CRASHZAEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | rücksetzen  1.Crashzähler |
| 0x02 | rücksetzen  2.Crashzähler |
| 0x03 | rücksetzen  1.Crashzählers und 2.Crashzählers |
| 0xFE | nicht definiert |
| 0xFF | ungültiger Wert |

### TAB_AE_ROHSIGNAL_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

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
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

### TAB_AKS_HV_SGR

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktivieren AKS |
| 0x01 | Aktivieren AKS |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### TAB_BETRIEBSART_SLE

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | DC-HV-Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Error |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x09 | Ladeinitialisierung abgeschlossen |
| 0x0D | Signal nicht verfügbar |
| 0x0E | Fehler |
| 0xFF | Wert ungültig |

### TAB_BETRIEBSZUSTAND_HV_SGR

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentenregelung |
| 0x02 | Reserviert |
| 0x03 | EM Spannungsregelung |
| 0x04 | Reserviert |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV Batterie Stromregelung |
| 0x07 | Anlernen Rotorlagesensor |
| 0x08 | Aktiver Kurzschluss (AKS) |
| 0x09 | Reserviert |
| 0x0A | Freilauf |
| 0x0B | Reserviert |
| 0x0C | Sicherer Zustand |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0x0F | Signal ungültig |

### TAB_CHGNG_TYP_IMME

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladeverfahren |
| 0x01 | AC-Laden mit Typ1-Stecker |
| 0x02 | AC-Laden mit Typ2-Stecker |
| 0x03 | DC-Laden nach CHAdeMO-Protokoll |
| 0x04 | DC-Laden mit DC-Pins über Typ1-Combo-Dose |
| 0x05 | AC-Laden-CN |
| 0x06 | AC-Laden über Typ1-Combo-Dose |
| 0x07 | AC-Laden über Typ2-Combo (Kern)-Ladedose |
| 0x08 | DC-Laden mit Kernpins über Typ2-Combo (Kern)-Ladedose |
| 0x09 | DC-Laden mit DC-Pins über Typ2-Combo (Kern)-Ladedose |
| 0xFD | Schnittstelle ist nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Wert ungültig |

### TAB_CRASH_MOD

| WERT | TEXT |
| --- | --- |
| 0x05 | Keine Crashabschaltung EKP |
| 0x0A | Crashabschaltung EKP |
| 0xFF | Wert ungültig |

### TAB_DCDC_BA_TARGET

| WERT | TEXT |
| --- | --- |
| 1 | Standby |
| 2 | Buck |
| 0xFF | Wert ungültig |

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

### TAB_FAKTOR_STROMBEGRENZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximales Laden mit vollem AC Ladestrom. |
| 0x01 | Reduziertes Laden mit reduziertem AC Ladestrom. |
| 0x02 | Minimales Laden mit minimalen AC Ladestrom. |
| 0xFF | Signal ungültig |

### TAB_FUSI_BACK_DCL_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Safe State Request aktiv |
| 0x01 | Geschwindigkeit Qualifier ungültig |
| 0x02 | Geschwindigkeit Qualifier ungültig (mit Delay V-abhängig)  |
| 0x03 | Geschwindigkeit grösser als Oberlimit |
| 0x04 | Strom Qualifier ungültig |
| 0x05 | Strom grösser als die Grenze (Open to Close) (z.B. > 0,2 A) |
| 0xFF | Wert ungültig |

### TAB_FUSI_BACK_HVSM_STATUS_AKKU

| WERT | TEXT |
| --- | --- |
| 0x00 | AE internal wheel block detection. |
| 0x01 | Longitudinal dynamic Fusi safe state. |
| 0x02 | DME requests low torque. Issue during drive. |
| 0x03 | DME communication bad. |
| 0x04 | DME requests safe state. |
| 0x05 | DME communication bad. |
| 0x06 | Fusi torque limitation function which requests safe state if limitation is exceeded. |
| 0x08 | EGS requests safe state. |
| 0x09 | EGS communication bad und torque is lower than -38 Nm. |
| 0x0A | DME communication bad. |
| 0x0B | Supplier triggers safe state. |
| 0x0C | If HVSM forward path requests safe state HVSM backward path does it as well and the other way round. |
| 0x0D | Internal qualifier from FWP. |
| 0xFFFF | Wert ungültig |

### TAB_FUSI_BACK_LD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | static braking torque limit (SM2B) |
| 0x01 | MSR torque request limit (SM27A) |
| 0x02 | invalid quadrant (SM14) |
| 0x03 | overspeed error on Main micro (SM10A) |
| 0x04 | CPL (current plausi) |
| 0x05 | Qualifier issue |
| 0x06 | resolver offset error |
| 0xFF | Wert ungültig |

### TAB_FUSI_FWD_DCL_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Safe State Request aktiv |
| 0x01 | Geschwindigkeit Qualifier ungültig |
| 0x02 | Geschwindigkeit Qualifier ungültig (mit Delay V-abhängig)  |
| 0x03 | Geschwindigkeit grösser als Oberlimit |
| 0x04 | Strom Qualifier ungültig |
| 0x05 | Strom grösser als die Grenze (Open to Close) (z.B. > 0,2 A) |
| 0x06 | Position Qualifier ungültig |
| 0xFF | Wert ungültig |

### TAB_FUSI_FWD_HVSM_STATUS_AKKU

| WERT | TEXT |
| --- | --- |
| 0x01 | Classical longitudinal dynamic Fusi safe state. |
| 0x04 | DME requests safe state. |
| 0x05 | DME communication bad. |
| 0x06 | New Fusi torque limitation function which requests safe state if limitation is exceeded. |
| 0x08 | EGS requests safe state.  |
| 0x09 | EGS communication bad und torque is lower than -38 Nm. |
| 0x0B | Supplier requests safe state. |
| 0x0C | If HVSM backward path requests safe state HVSM forward path does it as well and the other way round. |
| 0x0D | Internal qualifier from BWP. |
| 0x0E | Qualifier of supplier request bad. |
| 0xFFFF | Wert ungültig |

### TAB_FUSI_FWD_LD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | static braking torque limit (SM2B).  |
| 0x03 | overspeed error on Main micro (SM10A) |
| 0x04 | CPL (current plausi) |
| 0x06 | Resolver offset error |
| 0xFF | Wert ungültig |

### TAB_FUSI_OPMO_CHGE

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | DC-HV-Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Error |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x09 | Ladeinitialisierung abgeschlossen |
| 0x0D | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x0E | Funktion_meldet_Fehler |
| 0x0F | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_FUSI_WBD_STATUS_AKKU

| WERT | TEXT |
| --- | --- |
| 0x00 | Standard static slip detection |
| 0x01 | Wheel speed signal failure (AVL_RPM_WHL) or vehicle speed signal failure (V_VEH) |
| 0x02 | Wheel speed plausibility check failure with gearbox output speed |
| 0x03 | DSC slip condition in case of driver braking (not yet implemented) |
| 0x04 | Dynamic slip detection |
| 0x05 | Slip error integral |
| 0x06 | Summarized rear axle slip activation conditions |
| 0x07 | Current EM torque exceeded determined torque threshold (negative only) |
| 0x08 | Zero-Torque Request to level 1 torque limit function (HYM) = Bit 6 AND Bit 7 set and debounced. |
| 0xFFFF | Wert ungültig |

### TAB_HVSTART_KOMM

| WERT | TEXT |
| --- | --- |
| 0x00 | HVaus |
| 0x01 | HV ein Anforderung |
| 0x02 | HV verfügbar |
| 0x03 | I0_Anforderung |
| 0x04 | HV_Nachlauf_1 |
| 0x05 | HV_Nachlauf_2 |
| 0x06 | Shutdown: Anforderung Schütze öffnen |
| 0x07 | Shutdown: Anforderung HV-Zwischenkreisentladung |
| 0x08 | Nicht definiert (8) |
| 0x09 | Anforderung Batterieloser Betrieb |
| 0x0A | Anforderung Batterieloser Betrieb UCTRL |
| 0x0B | HV Batterieloser Betrieb: Anforderung Schütze öffnen |
| 0x0C | HV Batterieloser Betrieb aktiv |
| 0x0D | fehlerbedingter Shutdown: Rücknahme Freigabe HV |
| 0x0E | fehlerbedingter Shutdown: Anforderung Schütze öffnen |
| 0x0F | fehlerbedingter Shutdown: Anforderung HV-Zwischenkreisentladung |
| 0x10 | HV Störung |
| 0x11 | nicht definiert (17) |
| 0x12 | ZKVorladen |
| 0x13 | UCTRL_DCDC_Stdby |
| 0x14 | UCTRL_DCDC_Buck |
| 0xFF | Wert ungültig |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ok. |
| 0x01 | Kurzschluss nach Masse. |
| 0x02 | Kurzschluss nach Plus. |
| 0x03 | Leitungsunterbrechung. |
| 0x0F | Signal ungültig. |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN_LU

| WERT | TEXT |
| --- | --- |
| 0x00 | Job inaktiv |
| 0x01 | Job aktiv & Ventil schliessen |
| 0x02 | Job aktiv & Ventil öffnen |

### TAB_KLAUENKUPPLUNG_GANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Gangvorgabe |
| 0x01 | Klauenkupplung schliessen |
| 0x02 | Klauenkupplung öffnen |

### TAB_LADEFENSTER_1

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0x03 | Nicht gültig |

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

### TAB_PROZESSOR

| WERT | TEXT |
| --- | --- |
| 0x0 | undefiniert |
| 0x1 | mc0 |
| 0x2 | mc2 |

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

### TAB_STAT_AC_I_LIMIT_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnosejob STEUERN_LADESTROM_EINSTELLUNG nicht aktivieren |
| 0x01 | Diagnosejob STEUERN_LADESTROM_EINSTELLUNG aktivieren |

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

### TAB_ST_CHGNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Laden |
| 0x01 | Initialisierung |
| 0x02 | Laden aktiv |
| 0x03 | Ladepause |
| 0x04 | Laden beendet |
| 0x05 | Ladefehler |
| 0xFF | Wert ungültig |

### TAB_ST_CHGRDI

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ladebereitschaft |
| 0x01 | Ladebereitschaft |
| 0xFF | Wert ungültig |

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

### TAB_UMRICHTER_SCHALTZUSTAND_2

| WERT | TEXT |
| --- | --- |
| 0x01 | Freilauf |
| 0x02 | AKS aufgrund HW |
| 0x04 | AKS aufgrund SW |
| 0x08 | PWM / Normal |
| 0xFF | Wert ungültig |

### TAB_UWB_DCDC_ACTUAL_BA

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Standby |
| 2 | Buck |
| 3 | Error |
| 4 | Crash |
| 0xFF | Wert ungültig |

### TAB_UWB_E_ANTRIEB_1_ABSCHALT_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehlermodus |
| 0x01 | keine Momentenregelung aufgrund Systemfehler |
| 0x02 | Systemfehler aufgrund HVIL oder Crash |
| 0x03 | Systemfehler: Fehler SPI Kommunikation |
| 0x04 | Hardware ISC aufgrund Systemfehler |
| 0x05 | Keine Ansteuerung aufgrund Systemfehler |
| 0x08 | Software Schutz, AKS |
| 0x09 | Fehlerbedingter Leerlauf aufgrund Systemfehler |
| 0x0A | Fehlerbedingter ISC Modus aufgrund Gerätefehlers |
| 0x0B | Fehlerbedingter Abschalt-Modus aufgrund Systemfehlers |
| 0x0C | 12 V Batterie unterhalb der Schwelle |
| 0xFF | Wert ungültig |

### TAB_UWB_E_ANTRIEB_1_IST_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentregelung |
| 0x03 | EM-Spannungsregelung |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung |
| 0x07 | Position Sensor Offset Learning mode |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0x0C | Sicherer Zustand Fehlerbedingt |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0xFF | Wert ungültig |

### TAB_UWB_E_ANTRIEB_1_SOLL_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentregelung |
| 0x03 | DC-Spannungsregelung |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0x0D | Reserviert |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_UWB_E_ANTRIEB_2_IST_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentregelung |
| 0x03 | EM-Spannungsregelung |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung |
| 0x07 | Position Sensor Offset Learning Mode |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0x0C | Sicher Zustand / Fehler |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0xFF | Wert ungültig |

### TAB_UWB_E_ANTRIEB_2_SOLL_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Momentenregelung |
| 0x03 | EM-Spannungsregelung |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0x0D | Reserviert |
| 0x0E | Reserviert |
| 0xFF | Wert ungültig |

### TAB_UWB_ST_CSOV_AIC

| WERT | TEXT |
| --- | --- |
| 0 | In Ordnung |
| 1 | Kurzschluss nach Masse |
| 2 | Kurzschluss nach Battery |
| 3 | Leitungsbruch |
| 0x0F | Wert ungültig |
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

### TAB_ZUSTAND_AKS

| WERT | TEXT |
| --- | --- |
| 0x00 | AKS nicht aktiv |
| 0x01 | AKS aktiv |
| 0x02 | Undefiniert |

### TAB_ZUSTAND_FREILAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Freilauf inaktiv |
| 0x01 | Freilauf aktiv |
| 0x0F | Undefiniert |

### TAB_0X6F04

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x00EA | 0x00EB | 0x00EC |

### TAB_0X6F3F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 28 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C |

### TAB_0X6F48

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### TAB_0X6F49

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X6F4A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | 0x009E | 0x009F | 0x00A0 | 0x00A1 | 0x00A2 | 0x00A3 | 0x00A4 | 0x00A5 | 0x00A6 | 0x00A7 | 0x00A8 | 0x00A9 | 0x00AA | 0x00AB |

### TAB_0X6F4B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00BB | 0x00BC | 0x00BD | 0x00BE | 0x00BF | 0x00C0 | 0x00C1 | 0x00C2 | 0x00C3 |

### TAB_0X6F4C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 15 | 0x00AC | 0x00AD | 0x00AE | 0x00AF | 0x00B0 | 0x00B1 | 0x00B2 | 0x00B3 | 0x00B4 | 0x00B5 | 0x00B6 | 0x00B7 | 0x00B8 | 0x00B9 | 0x00BA |

### TAB_0X6F4D

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 15 | 0x008F | 0x0090 | 0x0091 | 0x0092 | 0x0093 | 0x0094 | 0x0095 | 0x0096 | 0x0097 | 0x0098 | 0x0099 | 0x009A | 0x009B | 0x009C | 0x009D |

### TAB_0X6F50

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x0085 | 0x0086 | 0x0087 | 0x0088 | 0x0089 | 0x008A | 0x008B | 0x008C | 0x008D | 0x008E |

### TAB_0X6F51

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x006F | 0x0070 | 0x0071 |

### TAB_0X6F52

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0069 | 0x006A | 0x006B | 0x006C | 0x006D | 0x006E |

### TAB_0X6F53

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x007F | 0x0080 | 0x0081 | 0x0082 | 0x0083 | 0x0084 |

### TAB_0X6F54

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x0072 | 0x0073 | 0x0074 | 0x0075 | 0x0076 | 0x0077 | 0x0078 | 0x0079 | 0x007A | 0x007B | 0x007C | 0x007D | 0x007E |

### TAB_0X6F55

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x004F | 0x0050 | 0x0051 | 0x0052 | 0x0053 | 0x0054 | 0x0055 | 0x0056 |

### TAB_0X6F56

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x003F | 0x0040 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 | 0x0048 | 0x0049 | 0x004A | 0x004B | 0x004C | 0x004D | 0x004E |

### TAB_0X6F57

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | 0x005B | 0x005C | 0x005D | 0x005E | 0x005F | 0x0060 | 0x0061 | 0x0062 | 0x0063 | 0x0064 | 0x0065 | 0x0066 | 0x0067 | 0x0068 |

### TAB_0X6F58

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0057 | 0x0058 | 0x0059 | 0x005A |

### TAB_0X6F59

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x003D | 0x003E |

### TAB_0X6F5A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x00D3 | 0x00D4 | 0x00D5 | 0x00D6 | 0x00D7 | 0x00D8 | 0x00D9 | 0x00DA | 0x00DB | 0x00DC | 0x00DD | 0x00DE | 0x00DF |

### TAB_0X6F5B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x00CD | 0x00CE | 0x00CF | 0x00D0 | 0x00D1 | 0x00D2 |

### TAB_0X6F5C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x00E5 | 0x00E6 | 0x00E7 | 0x00E8 | 0x00E9 |

### TAB_0X6F5D

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x00E0 | 0x00E1 | 0x00E2 | 0x00E3 | 0x00E4 |

### TAB_0X6F60

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00C4 | 0x00C5 | 0x00C6 | 0x00C7 | 0x00C8 | 0x00C9 | 0x00CA | 0x00CB | 0x00CC |

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
