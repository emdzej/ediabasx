# gsaw01.prg

## General

|  |  |
| --- | --- |
| File | gsaw01.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 200 |
| Origin | BMW EA-515 Johannes_Plett |
| Revision | 6.200 |
| Author | AW_JAPAN SOFTWARE_DEVELOPMENT Kousuke_Kanamori, AW_JAPAN SOFTWA |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Automatikgetriebe 6/8-Gang Front/Quer |  |  |
| ORIGIN | string | BMW EA-515 Johannes_Plett |  |  |
| REVISION | string | 6.200 |  |  |
| AUTHOR | string | AW_JAPAN SOFTWARE_DEVELOPMENT Kousuke_Kanamori, AW_JAPAN SOFTWA |  |  |
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

### RBM_RATIOS_AUSLESEN

RBM Inhalt ausgeben UDS: $22 ReadDataByCommonIdentifier Modus  : Default

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

### EXTENDED_MODE

SG in bestimmten Extendedmode bringen UDS  : $10 StartExtendedSession Modus: einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Extended-Modus table Extended MODE MODE_TEXT Defaultwert: EXTENDED (ExtendedMode) |

### _FS_LOESCHEN_FUNKTIONAL

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | 0x??????: Angabe eines einzelnen Fehlers Default: 0xFFFFFF: alle Fehler |

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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_B1 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil B1 |

### ARG_0X400A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SOLENOID_S1 | 0-n | high | unsigned char | - | TAB_STEUERN_SOLENOID_S1 | - | - | - | - | - | Magnet S1 ansteuern |

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_C1 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil C1 |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_C2 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil 2 |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_C3 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil C3 |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_C4 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil C4 |

### ARG_0X400F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_SLT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil Hauptdruck |

### ARG_0X401A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_SLU | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 954.0 | Stromwert elektrisches Drucksteuerventil Wandlerkupplung (SLU) |

### ARG_0X4034_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_EOP_RELAY | 0-n | high | unsigned char | - | STEUERN_EOP_RELAY | - | - | - | - | - | EOP über das Relais Ein- oder Ausschalten |

### ARG_0X4035_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EOP_STATUS | 0-n | high | unsigned char | - | EOP_STATUS | - | - | - | - | - | EOP ansteuern |

### ARG_0X403B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TARGET_GEAR | 0-n | high | unsigned char | - | TARGET_GEAR | - | - | - | - | - | Gang vorgeben |

### ARG_0X403C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMOP_CONTROL | 0-n | high | unsigned char | - | TAB_EMOP_CONTROL | - | - | - | - | - | Short term adjust for EMOP |

### ARG_0X405E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SOLENOID_S2 | 0-n | high | unsigned char | - | TAB_STEUERN_SOLENOID_S2 | - | - | - | - | - | Magnet S2 ansteuern |

### ARG_0X405F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SHIFT_LOCK_SOLENOID | 0-n | high | unsigned char | - | TAB_STEUERN_SHIFT_LOCK_SOLENOID | - | - | - | - | - | Ansteuern Shift Lock Magnet |

### ARG_0XDA15_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LERNFKT | 0-n | - | unsigned char | - | TAB_STEUERN_LERNFKT_RUECKSETZEN | - | - | - | - | - | Lernfunktion, die zurück gesetzt werden soll. Siehe Tabelle TAB_STEUERN_LERNFKT_RUECKSETZEN |

### BF_CODING_3000_BYTE_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_0_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3000_BYTE_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_1_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3000_BYTE_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_2_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3000_BYTE_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_3_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3001_BYTE_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3001_BYTE_0_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3001_BYTE_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3001_BYTE_1_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_DISABLECAN_BYTE1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COASTING | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0x00: SV Segeln aus 0x01: SV Segeln an |
| STAT_SV_COASTING_ENTRY | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0x00: SV Segeln Eintrag aus 0x01: SV Segeln Eintrag an |
| STAT_SV2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0x00: SV 2 aus 0x01: SV 2 an |
| STAT_SV3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0x00: SV 3 aus 0x01: SV 3 an |
| STAT_SV4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0x00: SV 4 aus 0x01: SV 4 an |
| STAT_SV5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0x00: SV 5 aus 0x01: SV 5 an |
| STAT_SV6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0x00: SV 6 aus 0x01: SV 6 an |
| STAT_SIG_ERR | 0-n | high | unsigned char | 0xFF | TAB_COAST_ERR | - | - | - | Wird ein Fehlerwert zurückgegeben, sind die anderen Rückgabewerte dieses Ergebnisses als ungültig anzunehmen. |

### BF_DISABLEINFOAGS_BYTE5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSTIEG_GESCHWINDIGKEITSBEREICH | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_GANGEINSCHRAENKUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_VERZOEGERUNGSWUNSCH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_QUERBESCHLEUNIGUNG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_DSC_FEHLER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_GETRIEBETEMPERATUR | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_DIAGNOSESTEUERUNG | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: Wahr |

### BF_DISABLEINFOAGS_BYTE6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTIEG_GANGSTEUERUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_DREHZAHLSTEUERUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_MOMENTENSTEUERUNG | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_ANHAENGERERKENNUNG | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_BETRIEBSMODUS | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_ECO_TASTER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_FREIGABESTEUERUNG_AGS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_POSITION_WAEHLHEBEL | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: Wahr |

### BF_DISABLEINFOAGS_BYTE7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTIEG_GESCHWINDIGKEITSBEREICH | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_GANGEINSCHRAENKUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_VERZOEGERUNGSWUNSCH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_QUERBESCHLEUNIGUNG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_DSC_FEHLER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_GETRIEBETEMPERATUR | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_AUSSENTEMPERATUR | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: wahr |

### BF_DISABLEINFOAGS_BYTE8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABESTEUERUNG_SAS | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_FREIGABGSTEUERUNG_DME | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_INIT_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_INIT_STEIGUNG | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_INIT_LAUFENDER_SEGELAUSSTIEG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_ECO_TASTER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_FREIGABESTEUERUNG_AGS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: wahr |
| STAT_EINSTIEG_POSITION_WAEHLHEBEL | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: wahr |

### BF_DYNAMIC_INDEX_LESEN_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUICKSHIFT | 0-n | high | unsigned char | 0xC0 | - | - | - | - | 0: QS0; 64: QS1; 128: QS2, 192:QS3 (QS = Quickshift, Schaltzeiten) |
| STAT_OPEN_SHIFT | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 00b: Verboten; 01b: Erlaubt |
| STAT_POSITIVE_TORQUE_REQUEST_CD | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Positiver Momenteneingriff (z.B. beim ausrollen und runterschalten) 0: Verboten; 1: Erlaubt |
| STAT_POSITIVE_TORQUE_REQUEST_LUP | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 00b: Verboten; 01b: Angefordert |
| STAT_FIRST_GEAR_ENGINE_BRAKE | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Motorbremse im ersten Gang 0: Verboten; 1: Angefordert |

### BF_ELECTRIC_MACHINE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NO_ELECTIRC_MACHINE | 0/1 | high | unsigned char | 0xE0 | - | - | - | - | - |

### BF_EMERGENCY

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMERGENCY_5 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Notlaufprogramm 5: 0: AUS; 1: AN |
| STAT_EMERGENCY_4 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Notlaufprogramm 4: 0: AUS; 1: AN |
| STAT_EMERGENCY_3 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Notlaufprogramm 3: 0: AUS; 1: AN |
| STAT_EMERGENCY_2 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Notlaufprogramm 2: 0: AUS; 1: AN |
| STAT_EMERGENCY_1 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Notlaufprogramm 1: 0: AUS; 1: AN |

### BF_ENABLE_STATUS_MONITOR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MISFIRE_MONITORING1 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Überwachung deaktiviert für den Rest des Überwachungszyklus oder nicht Unterstützt; 1: Überwachung freigegeben für den aktuellen Überwachungszyklus |
| STAT_FUEL_SYSTEM_MONITORING1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Überwachung deaktiviert für den Rest des Überwachungszyklus oder nicht Unterstützt; 1: Überwachung freigegeben für den aktuellen Überwachungszyklus |
| STAT_COMPREHENSIVE_COMPONENT_MONITORING1 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Überwachung deaktiviert für den Rest des Überwachungszyklus oder nicht Unterstützt; 1: Überwachung freigegeben für den aktuellen Überwachungszyklus |
| STAT_RESERVED1 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Reserviert für ISO |
| STAT_MISFIRE_MONITORING2 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Überwachung abgeschlossen im aktuellen Überwachungszyklus oder nicht unterstützt; 1: Überwachung nicht abgeschlossen im akutellen Überwachungszyklus |
| STAT_FUEL_SYSTEM_MONITORING2 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Überwachung abgeschlossen im aktuellen Überwachungszyklus oder nicht unterstützt; 1: Überwachung nicht abgeschlossen im akutellen Überwachungszyklus |
| STAT_COMPREHENSIVE_COMPONENT_MONITORING2 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Überwachung abgeschlossen im aktuellen Überwachungszyklus oder nicht unterstützt; 1: Überwachung nicht abgeschlossen im akutellen Überwachungszyklus |
| STAT_RESERVED2 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Reserviert für ISO |

### BF_EOP_DRV_BF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EOP_DRV_STAT_BF | 0-n | high | unsigned char | 0x0F | EOP_DRV_STAT | - | - | - | Status EOP-Treiber |
| STAT_EOP_PWM_HI_TIMEOUT_ERR | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0b: Kein Fehler 1b: Fehler |
| STAT_EOP_PWM_LO_TIMEOUT_ERR | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0b: Kein Fehler 1b: Fehler |
| STAT_EOP_PWM_ILLEGAL_PERIOD | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0b: Kein Fehler 1b: Fehler |

### BF_FAULT_RELATED_INFORMATION_LESEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARM_UP_CYCLE_ACHIEVEMENT | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: OFF; 1:ON |
| STAT_DRIVING_CYCLE_ACHIEVEMENT | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: OFF; 1: ON |
| STAT_IUP_ERASING_PERMANET_FAULT_CODES | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: OFF; 1:ON |
| STAT_MIL_REQUEST | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: OFF; 1:ON |

### BF_INHIBIT1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_NO_SHIFT_LEARNING_CONTROL | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Keine adaptive Schaltregelung: 0: AUS; 1: AN |
| STAT_NO_GARAGE_SHIFT_LEARNING_CONTROL | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Keine Adaption der Schaltung zum einparken: 0: AUS; 1: AN |
| STAT_NO_NIC_LEARNING_CONTROL | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Keine adaptive NIC - Regelung: 0: AUS; 1: AN |
| STAT_NO_LOCK_UP_LEARNING_CONTROL | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Keine Adaption der Wandlerkupplung: 0: AUS; 1: AN |
| STAT_NO_LOCK_UP_CONTOL | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Keine Regelung der Wandlerkupplung: 0: AUS; 1: AN |
| STAT_NO_LOCK_UP_SLIP_CONTROL | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Keine Wandlerschlupfregelung: 0: AUS; 1:AN |
| STAT_NO_NIC_FUNCTION | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Keine NIC-Funktion: 0: AUS; 1:AN |

### BF_INHIBIT2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NO_AFU_FUNCTION | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Keine  AFU - Funktion: 0: AUS; 1: AN |
| STAT_NO_GARAGE_SHIFT_CONTROL | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Keine Schaltregelung zum einparken: 0: AUS; 1: AN |
| STAT_NO_REVERCE_CONTROL | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Keine Rückwärtsgangregelung: 0: AUS; 1: ON |
| STAT_NO_ENGINE_REVOLUTION_CONTROL | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Keine Motordrehzahlregelung: 0: AUS; 1: AN |
| STAT_NO_MSA_FUNCTION | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Keine MSA-Funktion: 0: AUS; 1: AN |
| STAT_NO_SAILING_FUNCTION | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Keine Segelfunktion: 0: AUS; 1: AN |
| STAT_EOP_RELAY_OFF | 0/1 | high | unsigned char | 0x02 | - | - | - | - | EOP Relay aus: 0: AUS; 1: AN |
| STAT_NO_MULTIPLEX_SHIFT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Keine Mehrfachschaltung: 0: AUS; 1: AN |

### BF_MANUAL_SHIFT_SWITCH

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MANUAL_SHIFT_SWITCH_ON | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Manuelle Gasse eingelegt: 1, Keine Manuelle Gasse eingelegt: 0 |
| STAT_MANUAL_SHIFT_SWITCH_PLUS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Manuelle Gasse Tip-Plus an: 1, Manuelle Gasse Tip-Plus aus: 0 |
| STAT_MANUAL_SHIFT_SWITCH_MINUS | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Manuelle Gasse Tip-Minus an: 1, Manuelle Gasse Tip-Minus aus: 0 |

### BF_MSA_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STOP_DISABLE | 0/1 | high | unsigned char | 0x01 | - | - | - | - | - |
| STAT_TEMPORARY_DEACTIVATION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | - |
| STAT_START_REQUEST | 0/1 | high | unsigned char | 0x04 | - | - | - | - | - |
| STAT_PERMANENT_DEACTIVATION | 0/1 | high | unsigned char | 0x08 | - | - | - | - | - |
| STAT_STOP_DELAY | 0/1 | high | unsigned char | 0x10 | - | - | - | - | - |
| STAT_SIGNAL | 0/1 | high | unsigned char | 0x20 | - | - | - | - | - |

### BF_PID_01_08

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_1 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_2 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_3 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_5 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_6 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_7 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_8 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |

### BF_PID_09_10

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_09 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_0A | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_0B | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_0C | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_0D | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_0E | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_0F | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_10 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_11_18

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_11 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_12 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_13 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_14 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_15 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_16 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_17 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_18 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_19_20

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_19 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_1A | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_1B | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_1C | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_1D | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_1E | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_1F | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_20 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_21_28

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_21 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_22 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_23 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_24 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_25 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_26 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_27 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |
| STAT_PID_28 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1 Unterstützt |

### BF_PID_29_30

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_29 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_2A | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_2B | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_2C | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_2D | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_2E | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_2F | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |
| STAT_PID_30 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht Unterstützt; 1: Unterstützt |

### BF_PID_31_38

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_31 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_32 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_33 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_34 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_35 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_36 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_37 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_38 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_39_40

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_39 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_3A | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_3B | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_3C | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_3D | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_3E | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_3F | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_40 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_41_48

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_41 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_42 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_43 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_44 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_45 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_46 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_47 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_48 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_49_50

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_49 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_4A | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_4B | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_4C | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_4D | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_4E | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_4F | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_50 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_51_58

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_51 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_52 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_53 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_54 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_55 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_56 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_57 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_58 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_PID_59_60

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PID_59 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_5A | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_5B | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_5C | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_5D | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_5E | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_5F | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |
| STAT_PID_60 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Nicht unterstützt; 1: Unterstützt |

### BF_RACE_START

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RACE_START_COUNT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Bit 2: AN -->  zähler > 100; Bit 2: AUS -->  zähler <= 100 |
| STAT_FAIL_CONDITION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Bit 1: AN --> Getriebe ist im Fehlermodus; Bit 1: AUS --> Getriebe hat kein Fehler |
| STAT_OIL_TEMPERATURE_CODITION | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Bit 0: AN --> Getriebeöltemperatur außerhalb des erlaubten Bereichs; Bit 0: AUS: Getriebeöltemperatur im normalen Bereich |

### BF_SEGELN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEGELN_DEAK_DAUERHAFT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Segeln deaktiviert ist nicht gesetzt; 1: Segeln deaktiviert ist gesetzt |
| STAT_CODING_FUNCTION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Segelfunktion in Kodierdaten aktiviert/deaktiviert: 0: Keine Kodierfunktion; 1: Kodierfunktion |
| STAT_ENABLED_OR_CODED | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Segelfunktion dauerhaft freigegeben oder über Kodierung:  0: Dauerhaft freigegeben; 1: Kodiert |

### BF_SHIFT_LOCK_CONDITION

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPEED_CONDITION | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Geschwindigkeitsbedingung: 0:  >= 5 km/h (Bedingung nicht erfüllt), 1:  < 5km/h (Bedingung erüllt) |
| STAT_BRAKE_CONDITION | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Bremsbedingung: 0: Bremse nicht getreten (Bedingung nicht erfüllt), 1: Bremse getreten (Bedingung erüllt) |
| STAT_REVOLUTION_CONDITION | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Drehzahlbedingungen: 0: >= 2500 [rpm] (Bedingung nicht erfüllt), 1: < 2500 [rpm] (Bedingung erüllt) |
| STAT_READY_DRIVE_CONDITION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Fahrbereitschaftbedingung: 0: Fahrbereitschaft aus (Bedingung nicht erfüllt), 1: Fahrbereitschaft an (Bedingung erüllt) |
| STAT_IGNITION_CONDITION | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Zündungbedingung: 0: Zündung aus (Bedingung nicht erfüllt), 1: Zündung an (Bedingung erüllt) |

### BF_SUPPORTED_CONTINUOUS_TESTS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MISFIRE_MONITORING1 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Rückgabe 0; Nicht Unterstützt |
| STAT_FUEL_SYSTEM_MONITORING1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Rückgabe 0; Nicht Unterstützt |
| STAT_COMPRHENSIVE_COMPONENT_MONITIORING1 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Überwachung nicht unterstützt; 1: Überwachung unterstützt |
| STAT_RESERVED1 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Reserviert für ISO |
| STAT_MISFIRE_MONITORING2 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Überwachung abgeschlossen oder nicht anwendbar; 1: Überwachung nicht abgeschlossen |
| STAT_FUEL_SYSTEM_MONITORING2 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Überwachung abgeschlossen oder nicht anwendbar; 1: Überwachung nicht abgeschlossen |
| STAT_COMPRHENSIVE_COMPONENT_MONITIORING2 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Überwachung abgeschlossen oder nicht anwendbar; 1: Überwachung nicht abgeschlossen |
| STAT_RESERVED2 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Reserviert für ISO |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### COUNTER_RESET_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset successfully |
| 0x01 | Reset failed |
| 0xFF | Wert ungültig |

### EMERGENCY_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Emergency Mode |
| 0x01 | Emergency Mode 1 |
| 0x02 | Emergency Mode 2 |
| 0x03 | Emergency Mode 3 |
| 0x04 | Emergency Mode 4 |
| 0x05 | Emergency Mode 5 |

### EOP_DRV_STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | E-O/P_DRV_AD_FAIL |
| 0x01 | E-O/P_DRV_OVER_HEAT |
| 0x02 | E-O/P_DRV_VOLT_NG |
| 0x03 | E-O/P_DRV_LOCKED |
| 0x04 | E-O/P_DRV_SIG_NG |
| 0x05 | E-O/P_DRV_MOT_OK |
| 0x06 | E-O/P_DRV_MOT_STOP |
| 0x07 | E-O/P_DRV_VOLT_LOW2 |
| 0x08 | E-O/P_DRV_VOLT_LOW1 |
| 0xFF | Wert ungültig |

### EOP_SPEED

| WERT | TEXT |
| --- | --- |
| 0x00 | EOP Aus |
| 0x01 | EOP An |
| 0xFF | Fehler |

### EOP_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | EOP: OFF |
| 0x01 | EOP: ON |

### EXHAUST_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Exhaust pattern is working and 15min past. Please move Shift to P and stop E/G. |
| 0x01 | Exhaust pattern is working. Please keep pressing brake pedal and shift position in 'D' |
| 0x02 | Please move Shift position to 'D' and keep 'D' at least more than one second. |
| 0x03 | Please stop Routine control and check DTC. After that please move Shift to P and stop E/G. |
| 0x04 | Please press brake pedal and move Shift position to 'P' |
| 0x05 | The reception of the request finished. |
| 0xFF | Wert ungültig |

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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x021800 | Energiesparmode aktiv | 0 | - |
| 0x021808 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02180A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02180B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02180C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF18 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x420002 | Elektrisches Drucksteuerventil Hauptdruck: Kurzschluss nach Plus | 0 | - |
| 0x420006 | Elektrisches Drucksteuerventil Hauptdruck: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420007 | Elektrisches Drucksteuerventil Hauptdruck: Rückstrom fehlerhaft | 0 | - |
| 0x420012 | Elektrisches Drucksteuerventil C2: Kurzschluss nach Plus | 0 | - |
| 0x420013 | Elektrisches Drucksteuerventil C2: Rückstrom fehlerhaft | 0 | - |
| 0x420016 | Elektrisches Drucksteuerventil C2: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420032 | Elektrisches Drucksteuerventil C3: Kurzschluss nach Plus | 0 | - |
| 0x420033 | Elektrisches Drucksteuerventil C3: Rückstrom fehlerhaft | 0 | - |
| 0x420036 | Elektrisches Drucksteuerventil C3: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420042 | Elektrisches Drucksteuerventil C1: Kurzschluss nach Plus | 0 | - |
| 0x420046 | Elektrisches Drucksteuerventil C1: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420047 | Elektrisches Drucksteuerventil C1: Rückstrom fehlerhaft | 0 | - |
| 0x420052 | Elektrisches Drucksteuerventil Wandlerkupplung: Kurzschluss nach Plus | 0 | - |
| 0x420053 | Elektrisches Drucksteuerventil Wandlerkupplung: Rückstrom fehlerhaft | 0 | - |
| 0x420056 | Elektrisches Drucksteuerventil Wandlerkupplung: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420071 | Magnetventil S2: Kurzschluss nach Masse | 0 | - |
| 0x420072 | Magnetventil S2: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x4200F1 | Magnetventil S1: Kurzschluss nach Masse | 0 | - |
| 0x4200F2 | Magnetventil S1: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420101 | Magnetventil Wählhebelsperre: Kurzschluss nach Masse | 0 | - |
| 0x420102 | Magnetventil Wählhebelsperre: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420106 | Shiftlock-Magnet: Wählhebel fehlerhaft nicht gesperrt in P | 0 | - |
| 0x420109 | Parksperre: P eingelegt bei Geschwindigkeit über Schwellenwert | 0 | - |
| 0x420112 | Elektrisches Drucksteuerventil B1: Kurzschluss nach Plus | 0 | - |
| 0x420113 | Elektrisches Drucksteuerventil B1: Rückstrom fehlerhaft | 0 | - |
| 0x420116 | Elektrisches Drucksteuerventil B1: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420122 | Elektrisches Drucksteuerventil C4: Kurzschluss nach Plus | 0 | - |
| 0x420123 | Elektrisches Drucksteuerventil C4: Rückstrom fehlerhaft | 0 | - |
| 0x420126 | Elektrisches Drucksteuerventil C4: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420201 | Wandlerüberbrückungskupplung: Hängt in Stellung Offen | 0 | - |
| 0x420211 | Wandlerüberbrückungskupplung: Hängt in Stellung Geschlossen | 0 | - |
| 0x4202E1 | Übersetzungsüberwachung Gang 8: Kupplung C2 oder B1 fehlerhaft offen | 0 | - |
| 0x420391 | Übersetzungsüberwachung Gang 1: Kupplung B2 fehlerhaft offen | 0 | - |
| 0x4203A1 | Übersetzungsüberwachung Gang 2: Kupplung C1 oder B1 fehlerhaft offen | 0 | - |
| 0x4203B1 | Übersetzungsüberwachung Gang 3: Kupplung C1 oder C3 fehlerhaft offen | 0 | - |
| 0x4203C1 | Übersetzungsüberwachung Gang 4: 6-Gang-Getriebe: Kupplung C1 oder C2 fehlerhaft offen; 8-Gang-Getriebe: Kupplung C1 oder C4 fehlerhaft offen | 0 | - |
| 0x4203D1 | Übersetzungsüberwachung Gang 5: 6-Gang-Getriebe: Kupplung C2 oder C3 fehlerhaft offen; 8-Gang-Getriebe: Kupplung C1 oder C2 fehlerhaft offen | 0 | - |
| 0x4203E1 | Übersetzungsüberwachung Gang 6: 6-Gang-Getriebe: Kupplung C2 oder B1 fehlerhaft offen; 8-Gang-Getriebe: Kupplung C2 oder C4 fehlerhaft offen | 0 | - |
| 0x4204F1 | Übersetzungsüberwachung Gang 7: Kupplung C2 oder C3 fehlerhaft offen | 0 | - |
| 0x420511 | Versorgungsspannung: Unterspannung | 1 | - |
| 0x420521 | Versorgungsspannung: Überspannung | 1 | - |
| 0x420602 | Abtriebsdrehzahlsensor: Kurzschluss nach Plus | 0 | - |
| 0x420604 | Abtriebsdrehzahlsensor: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420606 | Abtriebsdrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420609 | Abtriebsdrehzahlsensor: Keine Drehzahl | 0 | - |
| 0x420622 | Getriebeeingangsdrehzahlsensor: Kurzschluss nach Plus | 0 | - |
| 0x420624 | Getriebeeingangsdrehzahlsensor: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420626 | Getriebeeingangsdrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420671 | Funktionale Sicherheit: Hydraulikventil klemmt mechanisch | 0 | - |
| 0x420701 | Getriebeöltemperatursensor 1: Kurzschluss nach Masse | 0 | - |
| 0x420704 | Getriebeöltemperatursensor 1: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420705 | Getriebeöltemperatursensor 1 oder 2: hängendes Signal | 0 | - |
| 0x420706 | Getriebeöltemperatursensor 1: Hängt | 0 | - |
| 0x420709 | Getriebeöltemperatursensor 1: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x42070A | Getriebeöltemperatursensor 1: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420711 | Temperatursensor 1 Steuergerät: Kurzschluss nach Masse | 0 | - |
| 0x420713 | Temperatursensor 1 Steuergerät: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420714 | Temperatursensor 1 Steuergerät: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420715 | Temperatursensor 1 oder 2 Steuergerät: hängendes Signal | 0 | - |
| 0x42071A | Temperatursensor 1 Steuergerät: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420731 | Temperatursensor 2 Steuergerät: Kurzschluss nach Masse | 0 | - |
| 0x420733 | Temperatursensor 2 Steuergerät: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420734 | Temperatursensor 2 Steuergerät: Überschreitung oberer Schwellenwert | 0 | - |
| 0x42073A | Temperatursensor 2 Steuergerät: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420743 | Drehzahlsensorik: Unplausibilität Getriebeeingangsdrehzahl und Motordrehzahl in R | 0 | - |
| 0x420753 | Drehzahlsensorik: Unplausibilität Getriebeeingangsdrehzahl und Motordrehzahl in D (Kupplung C1 fehlerhaft geöffnet) | 0 | - |
| 0x420852 | Steuergerät: RAM Speicherfehler | 0 | - |
| 0x420872 | Steuergerät: ROM Spreicherfehler | 0 | - |
| 0x420892 | Steuergerät: Prozessorfehler | 0 | - |
| 0x4208C2 | Steuergerät:  Programmablauf fehlerhaft | 0 | - |
| 0x4208E2 | Funktionale Sicherheit: Fehler Rückwärtsgangsperre | 1 | - |
| 0x4208F2 | Funktionale Sicherheit: Fehlerhafte negative Drehmomentenanforderung | 1 | - |
| 0x420911 | Steuergerät: ROM Prüfsummenfehler | 0 | - |
| 0x420921 | Steuergerät: EEPROM Fehlerhafter Zugriff | 0 | - |
| 0x4209E8 | Motordrehmoment DME/DDE: Motordrehmoment folgt angefordertes Moment vom Getriebe nicht | 1 | - |
| 0x421021 | Steuergerät: RAM Fehlerhafter Zugriff | 0 | - |
| 0x421191 | Steuergerät: Kommunikationsfehler zwischen Prozessor und Treiber elektrisches Drucksteuerventil | 0 | - |
| 0x421251 | Elektromagnetische Ölpumpe: Kurzschluss nach Masse | 0 | - |
| 0x421254 | Elektromagnetische Ölpumpe: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421256 | Elektromagnetische Ölpumpe: Ventil hängt in Stellung Offen | 0 | - |
| 0x421257 | Elektromagnetische Ölpumpe: Überspannung | 0 | - |
| 0x421258 | Elektromagnetische Ölpumpe: Unterspannung | 0 | - |
| 0x421271 | Abtriebsdrehzahlsensor: Kein Signal | 0 | - |
| 0x421278 | Abtriebsdrehzahlsensor: Plausibilitätsfehler | 0 | - |
| 0x421421 | Getriebepositionssensor: Hängendes Signal | 0 | - |
| 0x421423 | Getriebepositionssensor: Kurzschluss nach Plus | 0 | - |
| 0x421429 | Getriebepositionssensor: Kurzschluss nach Masse | 0 | - |
| 0x421433 | Wählhebel: Signal für manuelle Gasse Kurzschluss nach Plus - Entfallen ab I-410 | 0 | - |
| 0x421437 | Wählhebel: Signal für manuelle Gasse oder Signal Tipp-Position Plus oder Tipp-Position Minus fehlerhaft | 1 | - |
| 0x421461 | Getriebeeingangsdrehzahlsensor: Kein Signal | 0 | - |
| 0x421468 | Getriebeeingangsdrehzahlsensor: Plausibilitätsfehler | 0 | - |
| 0x421473 | Plausibilisierung in D: Eingangsdrehzahl Getriebe zu Motordrehzahl (Kupplung C1 und C2 fehlerhaft geöffnet) | 0 | - |
| 0x421502 | Steuergerät: CAN Fehler | 0 | - |
| 0x421711 | Getriebepositionssensor: Neutralstellung nicht angelernt | 0 | - |
| 0x421741 | Übersetzungsüberwachung Gang 1 im Schub: 6-Gang-Getriebe: Kupplung B1 oder C2 klemmt; 8-Gang-Getriebe: Kupplung B1 oder C2 oder C3 klemmt | 0 | - |
| 0x421742 | Übersetzungsüberwachung Gang 1 im Schub: 6-Gang-Getriebe: Kupplung C3 klemmt; 8-Gang-Getriebe: Kupplung C4 klemmt | 0 | - |
| 0x421751 | Übersetzungsüberwachung Gang 1: 6-Gang-Getriebe: Kupplung B1 oder C2 oder C3 klemmt; 8-Gang-Getriebe: Kupplung B1 oder C2 oder C4 klemmt | 0 | - |
| 0x421761 | Übersetzungsüberwachung Gang 2: 6-Gang-Getriebe: Kupplung C2 oder C3 klemmt; 8-Gang-Getriebe: Kupplung C2 oder C3 oder C4 klemmt | 0 | - |
| 0x421771 | Übersetzungsüberwachung Gang 3: 6-Gang-Getriebe: Kupplung B1 oder C2 klemmt; 8-Gang-Getriebe: Kupplung B1 oder C2 oder C4 klemmt | 0 | - |
| 0x421781 | Übersetzungsüberwachung Gang 4: 6-Gang-Getriebe: Kupplung B1 oder C3 klemmt; 8-Gang-Getriebe: Kupplung B1 oder C2 oder C3 klemmt | 0 | - |
| 0x421791 | Übersetzungsüberwachung Gang 5: 6-Gang-Getriebe: Kupplung B1 oder C1 klemmt; 8-Gang-Getriebe: Kupplung B1 oder C4 oder C3 klemmt | 0 | - |
| 0x4217A1 | Übersetzungsüberwachung Gang 6: Kupplung C1 oder C3 klemmt | 0 | - |
| 0x4217B1 | Übersetzungsüberwachung Gang 7: Kupplung B1 oder C1 oder C4 klemmt | 0 | - |
| 0x4217C1 | Übersetzungsüberwachung Gang 8: Kupplung C1 oder C3 oder C4 klemmt | 0 | - |
| 0x421801 | Elektrisches Drucksteuerventil C1: Maximaler Druck | 0 | - |
| 0x421811 | Elektrisches Drucksteuerventil C2: Maximaler Druck | 0 | - |
| 0x421821 | Elektrisches Drucksteuerventil C3: Maximaler Druck | 0 | - |
| 0x421831 | Elektrisches Drucksteuerventil B1: Maximaler Druck | 0 | - |
| 0x421841 | Elektrisches Drucksteuerventil C4: Maximaler Druck | 0 | - |
| 0x421851 | Funktionale Sicherheit: Hydraulikventil fehlerhaft angesteuert | 0 | - |
| 0x421861 | Funktionale Sicherheit: Fehlerhafte Positionsanzeige | 0 | - |
| 0x421871 | Funktionale Sicherheit: Fehlerhafte Gangwahl | 0 | - |
| 0x421891 | Funktionale Sicherheit: Fehlerhafte positive Drehmomentenanforderung | 0 | - |
| 0x4218A1 | Funktionale Sicherheit: Sicherer Zustand (Neutral) nicht möglich | 0 | - |
| 0x4218B1 | Funktionale Sicherheit: Verwendung Ersatzwert | 0 | - |
| 0x4218C1 | Hohe Getriebeöl- oder Getriebesteuergerätetemperatur | 0 | - |
| 0x4218D2 | Funktionale Sicherheit: Fehler Fahrtrichtung | 0 | - |
| 0x4218E2 | Funktionale Sicherheit: Ungewollter Kraftschluss | 0 | - |
| 0x4218F2 | Funktionale Sicherheit: Anforderung Neutral über CAN-Signal | 1 | - |
| 0x421901 | Getriebeöltemperatursensor 2: Kurzschluss nach Masse | 0 | - |
| 0x421904 | Getriebeöltemperatursensor 2: Überschreitung oberer Schwellenwert | 0 | - |
| 0x421906 | Getriebeöltemperatursensor 2: Hängt | 0 | - |
| 0x421909 | Getriebeöltemperatursensor 2: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x42190A | Getriebeöltemperatursensor 2: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x421910 | Getriebeöltemperatursensor 1: Vergleich Motorkühlwassertemperatur unplausibel zueinander | 0 | - |
| 0x421911 | Öldruckschalter 1: Kurzschluss nach Masse | 0 | - |
| 0x421912 | Öldruckschalter 1: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421921 | Öldruckschalter 2: Kurzschluss nach Masse | 0 | - |
| 0x421922 | Öldruckschalter 2: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421931 | Öldruckschalter 3: Kurzschluss nach Masse | 0 | - |
| 0x421932 | Öldruckschalter 3: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421941 | Öldruckschalter 4: Kurzschluss nach Masse | 0 | - |
| 0x421942 | Öldruckschalter 4: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421951 | Öldruckschalter 5: Kurzschluss nach Masse | 0 | - |
| 0x421952 | Öldruckschalter 5: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421964 | Elektrische Ölpumpe: Überspannung | 0 | - |
| 0x421965 | Elektrische Ölpumpe: Unterspannung | 0 | - |
| 0x42196A | Elektrische Ölpumpe: Pumpendrehzahl zu gering | 1 | - |
| 0x421971 | Elektrische Ölpumpe Treiber: Statussignal Kurzschluss nach Masse | 0 | - |
| 0x421973 | Elektrische Ölpumpe Treiber: Statussignal Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x421975 | Elektrische Ölpumpe Treiber: Unterspannung | 0 | - |
| 0x42197A | Elektrische Ölpumpe Treiber: Statussignal Plausibilitätsfehler | 0 | - |
| 0x42197B | Elektrische Ölpumpe Treiber:  A/D-Wandler fehlerhaft | 0 | - |
| 0x42197C | Elektrische Ölpumpe Treiber: Motor blockiert oder Überdrehzahl | 0 | - |
| 0x42197D | Elektrische Ölpumpe Treiber: Treibersignal PWM falsch | 0 | - |
| 0x42197E | Elektrische Ölpumpe Treiber: Unterpannung oder Überspannung | 0 | - |
| 0x42197F | Elektrische Ölpumpe Treiber: Übertemperatur | 0 | - |
| 0x421992 | Elektrische Ölpumpe Relais: Kurzschluss nach Plus | 0 | - |
| 0x422001 | Funktionale Sicherheit: Unberechtigte Motorstartfreigabe | 0 | - |
| 0x422021 | Software: Entwicklungssoftware aktiv | 0 | - |
| 0x422048 | Motorzustart DME/DDE: Angeforderter Zustart nicht erfolgt, Rücknahme Fahrbereitschaft aufgrund von Bauteilschutz | 1 | - |
| 0x422102 | Funktionale Sicherheit: Abtriebsdrehzahl Signal fehlerhaft | 0 | - |
| 0x422112 | Funktionale Sicherheit: Getriebeeingangsdrehzahl Signal fehlerhaft | 0 | - |
| 0x422122 | Funktionale Sicherheit: Positionsanzeige Signal fehlerhaft | 0 | - |
| 0x422132 | Funktionale Sicherheit: Istgang Signal fehlerhaft | 0 | - |
| 0x422142 | Funktionale Sicherheit: Kraftschluss Signal fehlerhaft | 0 | - |
| 0x422158 | Plausibilitätsfehler: Hybridmode aktiv obwohl kein Kraftschluss hergestellt | 0 | - |
| 0x422168 | Plausibilitätsfehler: Kein Kraftschluss hergestellt | 0 | - |
| 0x422172 | Funktionale Sicherheit: Verstärkung Antriebsstrang unplausibel | 0 | - |
| 0xCF040A | FA-CAN Control Module Bus OFF | 1 | - |
| 0xCF0486 | A-CAN Control Module Bus OFF | 1 | - |
| 0xCF0BFF | Nicht relevant / Keine Diagnosemassnahme! (Schnittstelle: Test Diagnosemaster) | 1 | - |
| 0xCF1401 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1402 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1403 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1411 | Botschaft (Drehmoment Kurbelwelle 2, 0xA6) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1412 | Botschaft (Drehmoment Kurbelwelle 2, 0xA6) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1413 | Botschaft (Drehmoment Kurbelwelle 2, 0xA6) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1421 | Botschaft (Drehmoment Kurbelwelle 3, 0xA7) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1422 | Botschaft (Drehmoment Kurbelwelle 3, 0xA7) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1423 | Botschaft (Drehmoment Kurbelwelle 3, 0xA7) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1431 | Botschaft (Antriebsstrang 1, 0x3FB) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1441 | Botschaft (Antriebsstrang 2, 0x3F9) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1442 | Botschaft (Antriebsstrang 2, 0x3F9) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1443 | Botschaft (Antriebsstrang 2, 0x3F9) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1451 | Botschaft (Winkel Fahrpedal, 0xD9) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1452 | Botschaft (Winkel Fahrpedal, 0xD9) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1453 | Botschaft (Winkel Fahrpedal, 0xD9) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1461 | Botschaft (OBD-Status, 0x397) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1481 | Botschaft (Radmoment 3, 0x145) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1482 | Botschaft (Radmoment 3, 0x145) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1483 | Botschaft (Radmoment 3, 0x145) Prüfsumme falsch,Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14A1 | Botschaft (Absicherung Antriebsstrang, 0x1D0) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14A2 | Botschaft (Absicherung Antriebsstrang, 0x1D0) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14A3 | Botschaft (Absicherung Antriebsstrang, 0x1D0) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14B1 | Botschaft (Radmoment 1, 0x8F) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14B2 | Botschaft (Radmoment 1, 0x8F) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14B3 | Botschaft (Radmoment 1, 0x8F): Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14C1 | Botschaft (Status MSA, 0x30B) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14C2 | Botschaft (Status MSA, 0x30B) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14C3 | Botschaft (Status MSA, 0x30B) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14E1 | Botschaft (Daten Antriebsstrang 4, 0x1FC) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1551 | Botschaft (Drehmoment Kurbelwelle 4, 0xC2) fehlt  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1552 | Botschaft (Drehmoment Kurbelwelle 4, 0xC2) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1553 | Botschaft (Drehmoment Kurbelwelle 4, 0xC2) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1561 | Botschaft (Status Hybrid, 0x418) fehlt  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1571 | Botschaft (Daten Voraussage Betriebsstrategie, 0xFE) fehlt  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1601 | Botschaft (Raddrehzahl, 0x254) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1611 | Botschaft (Stabilisierung DSC, 0x173) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1612 | Botschaft (Stabilisierung DSC, 0x173) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1613 | Botschaft (Stabilisierung DSC, 0x173) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1621 | Botschaft (Ist Bremsmoment Summe, 0xEF) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1622 | Botschaft (Ist Bremsmoment Summe, 0xEF) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1623 | Botschaft (Ist Bremsmoment Summe, 0xEF) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1631 | Botschaft (Status Fahrzeugstillstand, 0x2ED) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1632 | Botschaft (Status Fahrzeugstillstand, 0x2ED) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1633 | Botschaft (Status Fahrzeugstillstand, 0x2ED) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1701 | Botschaft (Status Gangwahlschalter, 0x197) fehlt, Empfänger EGS, Sender GWS | 1 | - |
| 0xCF1702 | Botschaft (Status Gangwahlschalter, 0x197) nicht aktuell, Empfänger EGS, Sender GWS | 1 | - |
| 0xCF1703 | Botschaft (Status Gangwahlschalter, 0x197) Prüfsumme falsch, Empfänger EGS, Sender GWS | 1 | - |
| 0xCF1811 | Botschaft (Fahrbahnneigung, 0x163) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1812 | Botschaft (Fahrbahnneigung, 0x163) nicht aktuell, Empfänger EGS, Sender  DSC | 1 | - |
| 0xCF1813 | Botschaft (Fahrbahnneigung, 0x163) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1821 | Botschaft (Längsbeschleunigung, 0x199) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1822 | Botschaft (Längsbeschleunigung, 0x199) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1823 | Botschaft (Längsbeschleunigung, 0x199) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1831 | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1832 | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1833 | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1841 | Botschaft (Konfiguration Schalter Fahrdynamik, 0x3A7) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1842 | Botschaft (Konfiguration Schalter Fahrdynamik, 0x3A7) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1843 | Botschaft (Konfiguration Schalter Fahrdynamik, 0x3A7) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1851 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1852 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1853 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1861 | Botschaft (Giergeschwindigkeit Fahrzeug, 0x19F) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1862 | Botschaft (Giergeschwindigkeit Fahrzeug, 0x19F) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1863 | Botschaft (Giergeschwindigkeit Fahrzeug, 0x19F) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1871 | Botschaft (Masse/Gewicht Fahrzeug, 0x2E0) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1872 | Botschaft (Masse/Gewicht Fahrzeug, 0x2E0) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1873 | Botschaft (Masse/Gewicht Fahrzeug, 0x2E0) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1881 | Botschaft (Lenkwinkel Vorderachse, 0x302) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1882 | Botschaft (Lenkwinkel Vorderachse, 0x302) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1883 | Botschaft (Lenkwinkel Vorderachse, 0x302) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1901 | Botschaft (Relativzeit, 0x328) fehlt, Empfänger EGS, Sender KOMBI | 1 | - |
| 0xCF1911 | Botschaft (Außentemperatur, 0x2CA) fehlt, Empfänger EGS, Sender KOMBI | 1 | - |
| 0xCF1931 | Botschaft (Kilometerstand/Reichweite, 0x330) fehlt, Empfänger EGS, Sender KOMBI | 1 | - |
| 0xCF2001 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2002 | Botschaft (Klemmen, 0x12F) nicht aktuell, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2003 | Botschaft (Klemmen, 0x12F) Prüfsumme falsch, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2011 | Botschaft (Status Türsensoren Abgesichert , 0x1E1) fehlt, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2012 | Botschaft (Status Türsensoren Abgesichert , 0x1E1) nicht aktuell, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2013 | Botschaft (Status Türsensoren Abgesichert , 0x1E1) Prüfsumme falsch, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2021 | Botschaft (Status Fahrzeug, 0x3A0) fehlt, Sender ZGW; Empfänger EGS | 1 | - |
| 0xCF2051 | Botschaft (Status Kontakt Handbremse, 0x34F) fehlt, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF20D1 | Botschaft (Blinken, 0x1F6) fehlt Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2101 | Botschaft (Schaltwippe, 0x207) fehlt, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2102 | Botschaft (Schaltwippe , 0x207) nicht aktuell, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2103 | Botschaft (Schaltwippe , 0x207) Prüfsumme falsch, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2301 | Botschaft (Kontakt Sicherheitsgurt, 0x297) fehlt, Empfänger EGS, Sender ACSM | 1 | - |
| 0xCF2302 | Botschaft (Kontakt Sicherheitsgurt, 0x297) nicht aktuell, Empfänger EGS, Sender ACSM | 1 | - |
| 0xCF2303 | Botschaft (Kontakt Sicherheitsgurt, 0x297) Prüfsumme falsch, Empfänger EGS, Sender ACSM | 1 | - |
| 0xCF2401 | Botschaft (Parkbremse, 0x260) fehlt, Empfänger EGS, Sender EMF | 1 | - |
| 0xCF2411 | Botschaft (Status Fahrzeugstillstand Parkbremse , 0x2DC): fehlt, Empfänger EGS, Sender EMF | 1 | - |
| 0xCF2501 | Botschaft (Status Anhängerbetrieb, 0x2E4) fehlt, Empfänger EGS, Sender AAG | 1 | - |
| 0xCF27A1 | Botschaft (Navigation System Information, 0x34E) fehlt Empfänger EGS, Sender NBT - Entfällt ab I-410 | 1 | - |
| 0xCF2901 | Botschaft (Daten Position Getriebestrang, 0x212) fehlt, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2902 | Botschaft (Daten Position Getriebestrang, 0x212) nicht aktuell, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2903 | Botschaft (Daten Position Getriebestrang, 0x212) Prüfsumme falsch, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2A01 | Botschaft (Vorgabe Hochvolt-Batterie, 0x433) fehlt, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2A11 | Botschaft (Status E-Motor Traktion Langzeit, 0x192) fehlt, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2A12 | Botschaft (Status E-Motor Traktion Langzeit, 0x192) nicht aktuell, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2A13 | Botschaft (Status E-Motor Traktion Langzeit, 0x192) Prüfsumme falsch, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2A21 | Botschaft (Status Start Leistung Antrieb, 0x2B3) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2B01 | Botschaft (Status Hochvoltspeicher, 0x112) fehlt, Empfänger EGS, Sender SME | 1 | - |
| 0xCF2B51 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse , 0xE9) fehlt Empfänger EGS, Sender LMV_FQ | 1 | - |
| 0xCF2B52 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse , 0xE9) nicht aktuell, Empfänger EGS, Sender LMV_FQ | 1 | - |
| 0xCF2B53 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse , 0xE9) Prüfsumme falsch, Empfänger EGS, Sender LMV_FQ | 1 | - |
| 0xCF2BA1 | Botschaft (Daten Ansteuerung Antriebsstrang,  0x28D, A-CAN) fehlt Empfänger EGS, Sender AE | 1 | - |
| 0xCF2BA2 | Botschaft (Daten Ansteuerung Antriebsstrang,  0x28D, A-CAN) nicht aktuell, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2BA3 | Botschaft (Daten Ansteuerung Antriebsstrang,  0x28D, A-CAN) Prüfsumme falsch, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2BB1 | Botschaft (Daten Ansteuerung Antriebsstrang,  0x28D, FA-CAN) fehlt Empfänger EGS, Sender AE | 1 | - |
| 0xCF2BB2 | Botschaft (Daten Ansteuerung Antriebsstrang,  0x28D, FA-CAN) nicht aktuell, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2BB3 | Botschaft (Daten Ansteuerung Antriebsstrang,  0x28D, FA-CAN) Prüfsumme falsch, Empfänger EGS, Sender AE | 1 | - |
| 0xCF2BC1 | Botschaft (Möglichkeit Motorstart Motorstop, 0x3EC) fehlt Empfänger EGS, Sender EMETZ | 1 | - |
| 0xCF2BC2 | Botschaft (Möglichkeit Motorstart Motorstop, 0x3EC) nicht aktuell Empfänger EGS, Sender EMETZ | 1 | - |
| 0xCF2BC3 | Botschaft (Möglichkeit Motorstart Motorstop, 0x3EC) Prüfsumme Empfänger EGS, Sender EMETZ | 1 | - |
| 0xCF2BD1 | Botschaft (Abgesichert Ist Daten Kurzzeit E-Motor 1,  0x0CD, A-CAN): fehlt, Sender: EMETZ | 1 | - |
| 0xCF2BE1 | Botschaft (Ist Daten E-Motor Traktion,  0x100, FA-CAN for SL;A-CAN for C): fehlt, Sender: EMETZ | 1 | - |
| 0xCF2BF1 | Botschaft (Status Betriebsart E-Motor Traktion,  0x2E8, A-CAN): fehlt, Sender: EMETZ | 1 | - |
| 0xCF2C11 | Signal(Kurbelwellenmoment Motorsteuerung/Getriebesteuerung, 0xA5) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2C14 | Signal (Ist-Moment Kurbelwelle Fahrerwunsch, 0xA7), ungültig | 1 | - |
| 0xCF2C21 | Signal (Kurbelwellendrehzahl, 0xA5) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2C44 | Signal (Drehmoment Kurbelwelle 2, 0xA6) ungültig | 1 | - |
| 0xCF2CA1 | Signal (Operating mode, 0xA7): Signal invalid | 1 | - |
| 0xCF2CE1 | Signal (Winkel Fahrpedal, 0xD9) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2D01 | Signal (OBD-Status Diagnosezyklus, 0x397) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2D11 | Signal (OBD_Modellwert_Last_Motor, 0x397): ungültig | 1 | - |
| 0xCF2D21 | Signal (OBD_Position_Drosselklappe_Motor, 0x397): ungültig | 1 | - |
| 0xCF2D54 | Signal (Leelauf Solldrehzahl, 0x3FB) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2DC4 | Signal (Status Antrieb Fahrzeug, 0x3F9) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF2DD1 | Signal (Anforderung Neutral, 0x1D0) ungültig, Empfänger EGS, Sender DME | 1 | - |
| 0xCF2DE1 | Signal (Daten Antriebsstrang 2, 0x3F9): ungültig | 1 | - |
| 0xCF2E01 | Signal (Ist Bremsmoment, 0xEF): ungültig | 1 | - |
| 0xCF2E31 | Signal (Bremsmoment Fahrerwunsch, 0xEF): ungültig | 1 | - |
| 0xCF2EC2 | Signal (Radgeschwindigkeit hinten links, 0x254) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF2ED2 | Signal (Radgeschwindigkeit hinten rechts, 0x254) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF2EE2 | Signal (Radgeschwindigkeit vorne links, 0x254) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF2EF2 | Signal (Radgeschwindigkeit vorne rechts, 0x254) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF2F41 | Signal (Außentemperatur, 0x2CA) ungültig, Empfänger EGS, Sender Kombi | 1 | - |
| 0xCF2F81 | Signal (Klemmenstatus, 0x12F) ungültig, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2FC2 | Signal (Fahrbahnneigung , 0x163) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF3104 | Signal (Bedienung Wählhebel, 0x197) ungültig | 1 | - |
| 0xCF3181 | Signal (Status_Stellglied_Parkbremse, 0x260) ungültig | 1 | - |
| 0xCF3251 | Signal (Schaltwippe, 0x207) ungültig, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF3501 | Signal (Status Bremsung Fahrer, 0x173) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF3511 | Signal (Anforderung Neutral, 0x2ED) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF3621 | Signal (Anforderung Neutral, 0x192) ungültig, Empfänger EGS, Sender AE | 1 | - |
| 0xCF3631 | Signal (Soll Position Getriebe, 0x212) ungültig, Empfänger EGS, Sender AE | 1 | - |
| 0xCF3641 | Signal (Möglichkeit Motorstart Motorstop, 0x3EC): ungültig | 1 | - |
| 0xCF3661 | Signal (Näherungsweise hochgerechnete Kurbelwellendrehzahl, 0xC2) ungültig, Empfänger EGS, Sender DME | 1 | - |
| 0xCF36A1 | Signal (Signale vom BDC an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF36C1 | Signal (Signale von der SME an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF3704 | Signal (Sollstatus Antrieb, 0x2B3) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF3852 | Signal (MSA, 0x30B) ungültig, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF3A51 | Signal (Signale von der DME/DDE an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF3B01 | Signal (Signale von der AHM an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF3B21 | Signal (Signale vom LMV_FQ an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF3B31 | Signal (Ist Verteilung Längsmoment Vorderachse Hinterachse, 0xE9) ungültig | 1 | - |
| 0xCF3B61 | Signal (Signale vom DSC an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF3C01 | Signal (Signale von der AE (I12) / EMETZ (UKL-H) an das AGS-Steuergerät): ungültig | 1 | - |
| 0xCF3C61 | Signal (Status_Schubabschaltung_Antrieb, 0x3FB) ungültig | 1 | - |
| 0xCF3D51 | Signal (Status_Fahrzeugstillstand, 0x2ED) ungültig | 1 | - |
| 0xCF3D57 | Signal (Relativzeit BN2020, 0x328) ungültig Zeit Sekunde Zähler Relativ | 1 | - |
| 0xCF3D61 | Signal (Status Fahrzeugstillstand Parkbremse, 0x2DC) ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4004 | Bordnetzspannung | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4005 | Stromwert elektrisches Drucksteuerventil B1 | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4009 | Getriebeausgangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x400A | Magnetventil S1 | 0-n | High | 0xFF | TAB_SHIFT_SOLENOID_S1 | - | - | - |
| 0x400B | Stromwert elektrisches Drucksteuerventil C1 | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400C | Stromwert elektrisches Drucksteuerventil C2 | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400D | Stromwert elektrisches Drucksteuerventil C3 | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400E | Stromwert elektrisches Drucksteuerventil C4 | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400F | Stromwert elektrisches Drucksteuerventil Hauptdruck (SLT) | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4012 | Motordrehmoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | Pedalstellung | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4019 | Wählhebelposition | 0-n | High | 0xFF | SHIFT_LEVER_POSITION | - | - | - |
| 0x401A | Stromwert elektrisches Drucksteuerventil Wandlerkupplung (SLU) | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x401C | Getriebeeingangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x401D | Wählhebelstellung in der manuellen Gasse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x401F | Fahrzeuggeschwindigkeit | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4024 | Eingelegte Fahrstufe | 0-n | High | 0xFF | STATUS_ACTUAL_GEAR | - | - | - |
| 0x4029 | Motordrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x402A | Radgeschwindigkeit vorne links | km/h | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x402B | Radgeschwindigkeit vorne rechts | km/h | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x402C | Radgeschwindigkeit hinten links | km/h | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x402D | Radgeschwindigkeit hinten rechts | km/h | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x402E | Status CAN-Signal, ASC, DSC, GWS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x402F | Status CAN-Signal, ECM  (Motorsteuerung) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x403A | Status CAN-Signal, FEM, CAS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x403D | Getriebeöltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4045 | Digitaler Wert der Weckleitung (AD-Wandler) | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4048 | Status der Parksperre | 0-n | High | 0xFF | STATUS_PLOCK | - | - | - |
| 0x405E | Magnetventil S2 | 0-n | High | 0xFF | TAB_SHIFT_SOLENOID_S2 | - | - | - |
| 0x405F | Shiftlock Magnet | 0-n | High | 0xFF | TAB_SHIFT_LOCK_SOLENOID | - | - | - |
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
| 0x420107 | Magnetventil Wählhebelsperre: Klemmt verriegelt in Position P | 0 | - |
| 0x420108 | Shiftlock-Magnet: Wählhebel ungewollt gesperrt | 0 | - |
| 0x4209E8 | Motordrehmoment DME/DDE: Motordrehmoment folgt angefordertes Moment vom Getriebe nicht | 1 | - |
| 0x421671 | Infozähler: Gangstufe R, N, D nicht möglich | 0 | - |
| 0x421681 | Infozähler: Gangstufe N, Tür offen | 0 | - |
| 0x421691 | Infozähler: Gang konnte ohne Betätigung des Bremspedals eingelegt werden | 0 | - |
| 0x421701 | Infozähler: Fahrzeug gegen Wegrollen sichern | 0 | - |
| 0x4218C1 | Infozähler: Hohe Getriebeöl- oder Wandlertemperatur | 0 | - |
| 0x422018 | Kein Antriebsmoment trotz Momentenanforderung im elektrischen fahren | 0 | - |
| 0x8BAC04 | CAN_E_TIMEOUT | 0 | - |
| 0x8BAC05 | CANIF_E_FULL_TX_BUFFER | 0 | - |
| 0x8BAC06 | CAN_TRANSPORT_LAYER_TRANSMIT_COMMUNICATION | 0 | - |
| 0x8BAC07 | CAN_TRANSPORT_LAYER_RECEIVE_COMMUNICATION | 0 | - |
| 0x8BAC08 | CANIF_E_STOPPED | 0 | - |
| 0x8BAC09 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 | - |
| 0x8BAC10 | CANNM_E_INIT_FAILED | 0 | - |
| 0x8BAC11 | CANTP_E_COMM | 0 | - |
| 0x8BAC24 | COMM_E_NET_START_IND_CHANNEL_0 | 0 | - |
| 0x8BAC25 | COMM_E_NET_START_IND_CHANNEL_1 | 0 | - |
| 0x8BAC27 | COMM_E_START_Tx_TIMEOUT_C1 | 0 | - |
| 0x8BAC29 | COMM_E_STOP_Tx_TIMEOUT_C1 | 0 | - |
| 0x8BAC43 | Diagnose Master: Error message nicht gesendet nach mehrmaligem Versuch. Ausgang wird gelöscht | 0 | - |
| 0x8BAC45 | Diagnose Master: Ausgangspuffer für aktive error message voll | 0 | - |
| 0x8BAC50 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x8BAC53 | Flash compare failed | 0 | - |
| 0x8BAC57 | FLS_E_READ_FAILED | 0 | - |
| 0x8BAC63 | IPDUM_E_TRANSMIT_FAILED | 0 | - |
| 0x8BAC65 | CAN State Manager: BUS-OFF ohne erfolgreiche Besserung_1 | 0 | - |
| 0x8BAC70 | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x8BAC73 | NVM_E_REQ_FAILED | 0 | - |
| 0x8BAC82 | Vehcile state Management: Botschaft Fahrzeugzustand fehlt (0x3A0) | 0 | - |
| 0x8BAC88 | Routine environment: Integer literal | 0 | - |
| 0x8BAC89 | CANTP_E_OPER_NOT_SUPPORTED | 0 | - |
| 0x8BAC90 | CNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x8BAC91 | CAN State Manager: BUS-OFF ohne erfolgreiche Besserung | 0 | - |
| 0x8BAC9A | ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0xCF27A1 | Botschaft (Navigation System Information, 0x34E) fehlt Empfänger EGS, Sender NBT | 1 | - |
| 0xCFFFFF | CAN Schnittstelle: Ungültiger DLC | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4004 | Bordnetzspannung | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | Getriebeausgangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x4012 | Motordrehmoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | Pedalstellung | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4019 | Wählhebelposition | 0-n | High | 0xFF | SHIFT_LEVER_POSITION | - | - | - |
| 0x401C | Getriebeeingangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x401D | Wählhebelstellung in der manuellen Gasse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x401F | Fahrzeuggeschwindigkeit | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4024 | Eingelegte Fahrstufe | 0-n | High | 0xFF | STATUS_ACTUAL_GEAR | - | - | - |
| 0x4029 | Motordrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x402E | Status CAN-Signal, ASC, DSC, GWS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x402F | Status CAN-Signal, ECM  (Motorsteuerung) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x403A | Status CAN-Signal, FEM, CAS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x403D | Getriebeöltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4045 | Digitaler Wert der Weckleitung (AD-Wandler) | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4048 | Status der Parksperre | 0-n | High | 0xFF | STATUS_PLOCK | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### P_LOCK_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | NORMAL |
| 0x02 | UNRELIABLE |
| 0x03 | UNSTABLE |
| 0x04 | DECISION |
| 0xFF | Wert ungültig |

### RESET_RESULT_OF_NPOS_LEARNING

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset Erfolgreich |
| 0x01 | Reset fehlgeschlagen: Wählhebel ist nicht in Position P oder N |
| 0x02 | Reset fehlgeschlagen: Wählhebelfehler |
| 0x03 | Reset fehlgeschlagen: Fahrzeuggeschwindigkeit is nicht gleich 0 |
| 0x04 | Reset fehlgeschlagen: Fahrzeuggeschwindigkeitssensor Fehler |
| 0x05 | Reset fehlgeschlagen: Motordrehzahl ist nicht gleich 0 |
| 0x06 | Reset fehlgeschlagen: EEPROM Fehler |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_B1_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil B1 |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHIFT_SOLENOID_S1 | 0-n | high | unsigned char | - | TAB_SHIFT_SOLENOID_S1 | - | - | - | Status Magnet S1 |

### RES_0X400B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_C1_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil C1 |

### RES_0X400C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_C2_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil C2 |

### RES_0X400D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_C3_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil C3 |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_C4_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil C4 |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_SLT_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil Hauptdruck |

### RES_0X401A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_SLU_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert elektrisches Drucksteuerventil SLU |

### RES_0X4034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EOP_RELAY | 0-n | high | unsigned char | - | STATUS_EOP_RELAY | - | - | - | Status Relais Elektrische-Ölpumpe |

### RES_0X4035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EOP_SPEED | 0-n | high | unsigned char | - | EOP_SPEED | - | - | - | EOP Status |

### RES_0X403B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEAR_DISPLAY | 0-n | high | unsigned char | - | STAT_GEAR_DISPLAY | - | - | - | Status Gang |

### RES_0X403C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMOP_STATE | 0-n | high | unsigned char | - | TAB_EMOP_STATUS | - | - | - | Report EMOP STATUS |

### RES_0X404A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_PID_01_08 | - | - | - | PID 1 bis PID 8 |
| - | Bit | high | BITFIELD | - | BF_PID_09_10 | - | - | - | PID 1 bis PID 10 |
| - | Bit | high | BITFIELD | - | BF_PID_11_18 | - | - | - | PID 11 bis PID 18 |
| - | Bit | high | BITFIELD | - | BF_PID_19_20 | - | - | - | PID 19 bis PID 20 |

### RES_0X404B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MONITOR_SINCE_DTC_CLEARED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit0 bis Bit 6: Anzahl der gespeicherten DTCs in der EGS; Bit7: 0: MIL AUS; 1: MIL AN |
| - | Bit | high | BITFIELD | - | BF_SUPPORTED_CONTINUOUS_TESTS | - | - | - | Unterstützte kontinuierliche Überwachung |
| STAT_SUPPORTED_TESTS_RUN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nicht unterstützt |
| STAT_STATUS_OF_TESTS_RUN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nicht unterstützt |

### RES_0X404F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_PID_21_28 | - | - | - | PID 21 bis PID 28 |
| - | Bit | high | BITFIELD | - | BF_PID_29_30 | - | - | - | PID 29 bis PID 30 |
| - | Bit | high | BITFIELD | - | BF_PID_31_38 | - | - | - | PID 31 bis PID 38 |
| - | Bit | high | BITFIELD | - | BF_PID_39_40 | - | - | - | PID 39 bis PID 40 |

### RES_0X4054_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_DATA_ITEMS_WERT | HEX | high | unsigned char | - | - | - | - | - | Dateninformationen |
| STAT_CALID_TEXT | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | CAL ID |

### RES_0X4055_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_DATA_ITEMS_WERT | HEX | high | unsigned char | - | - | - | - | - | Infodaten |
| STAT_CVN_WERT | HEX | high | unsigned long | - | - | - | - | - | CVN |

### RES_0X405A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_PID_41_48 | - | - | - | PID 41 bis PID 48 |
| - | Bit | high | BITFIELD | - | BF_PID_49_50 | - | - | - | PID 49 bis PID 50 |
| - | Bit | high | BITFIELD | - | BF_PID_51_58 | - | - | - | PID 51 bis PID 58 |
| - | Bit | high | BITFIELD | - | BF_PID_59_60 | - | - | - | PID 59 bis PID 60 |

### RES_0X405B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUPPORTED_TESTS_RUN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nicht unterstützt |
| - | Bit | high | BITFIELD | - | BF_ENABLE_STATUS_MONITOR | - | - | - | Freigegebene Überwachung im akutellen Überwachungszyklus |
| STAT_ENABLE_STATUS_NON_CONTI_MONITOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nicht unterstützt |
| STAT_COMPLETION_STATUS_NON_CONTI_MONITOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nicht unterstützt |

### RES_0X405E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHIFT_SOLENOID_S2 | 0-n | high | unsigned char | - | TAB_SHIFT_SOLENOID_S2 | - | - | - | Status Magnet S2 |

### RES_0X405F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHIFT_LOCK_SOLENOID | 0-n | high | unsigned char | - | TAB_SHIFT_LOCK_SOLENOID | - | - | - | Status Shift Lock Magnet |

### RES_0X406A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_0 | - | - | - | Coding 3000 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_1 | - | - | - | Coding 3000 Byte 1 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_2 | - | - | - | Coding 3000 Byte 2 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_3 | - | - | - | Coding 3000 Byte 3 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_0 | - | - | - | Coding 3001 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_1 | - | - | - | Coding 3001 Byte 1 |

### RES_0X406C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVED_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert |
| STAT_RESERVED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert |
| STAT_RESERVED_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert |
| - | Bit | high | BITFIELD | - | BF_RACE_START | - | - | - | Race Start |

### RES_0X406D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_0 | - | - | - | Coding 3000 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_1 | - | - | - | Coding 3000 Byte 1 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_2 | - | - | - | Coding 3000 Byte 2 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_3 | - | - | - | Coding 3000 Byte 3 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_0 | - | - | - | Coding 3001 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_1 | - | - | - | Coding 3001 Byte 1 |

### RES_0X4076_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCU_RESET_COUNT_CPU_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (CPU Core Fehler) |
| STAT_TCU_RESET_COUNT_ROM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (ROM Fehler) |
| STAT_TCU_RESET_COUNT_RAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (RAM Fehler) |
| STAT_TCU_RESET_COUNT_COMMUNICATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (Kummunikations Fehler) |
| STAT_TCU_RESET_COUNT_FLOW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (Flow Fehler) |

### RES_0X4080_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit kleiner 6V |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit zwischen 6V und 9V |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit zwischen 9V und 12,5V |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit zwischen 12,5V und 16V |
| STAT_MINUTE5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit größer 16V |

### RES_0X4081_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit in Fahrstufe D |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit in Fahrstufe M |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit in Fahrstufe Sport |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zeit in Fahrstufe M +/- (Tip) |

### RES_0X4082_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur kleiner 0°C (Temperatur < 0°C) |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 0°C und 40°C (0°C <= Temperatur < 40°C) |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 40°C und 90°C  (40 <= Temperatur < 90°C) |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 90°C und 105°C  (90 <= Temperatur < 105°C) |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 105°C und 120°C  (105 <= Temperatur < 120°C) |
| STAT_MINUTE5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 120°C und 130°C  (120 <= Temperatur < 130°C) |
| STAT_MINUTE6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 130°C und 135°C  (130 <= Temperatur < 135°C) |
| STAT_MINUTE7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 135°C und 140°C  (135 <= Temperatur < 140°C) |
| STAT_MINUTE8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 140°C und 145°C  (140 <= Temperatur < 145°C) |
| STAT_MINUTE9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 145°C und 150°C  (145 <= Temperatur < 150°C) |
| STAT_MINUTE10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 150°C und 155°C  (150 <= Temperatur < 155°C) |
| STAT_MINUTE11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur größer 155°C (Temperatur > 155°C) |

### RES_0X4083_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur kleiner 40°C (Temperatur < 40°C) |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 40°C und 80°C (40°C <= Temperatur < 80°C) |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 80°C und 90°C  (80 <= Temperatur < 90°C) |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 90°C und 95°C  (90 <= Temperatur < 95°C) |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 95°C und 100°C  (95 <= Temperatur < 100°C) |
| STAT_MINUTE5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 100°C und 105°C  (100 <= Temperatur < 105°C) |
| STAT_MINUTE6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 105°C und 110°C  (105 <= Temperatur < 110°C) |
| STAT_MINUTE7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 110°C und 115°C  (110 <= Temperatur < 115°C) |
| STAT_MINUTE8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 115°C und 120°C  (115 <= Temperatur < 120°C) |
| STAT_MINUTE9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 120°C und 130°C  (120 <= Temperatur < 130°C) |
| STAT_MINUTE10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 130°C und 140°C  (130 <= Temperatur < 140°C) |
| STAT_MINUTE11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur größer 140°C (Temperatur > 140°C) |

### RES_0X4084_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_EMERGENCY | - | - | - | Notlaufprogramm lesen |
| - | Bit | high | BITFIELD | - | BF_INHIBIT1 | - | - | - | Fehlerersatzmaßnahmen lesen |
| - | Bit | high | BITFIELD | - | BF_INHIBIT2 | - | - | - | Fehlerersatzmaßnahmen lesen |
| STAT_RESERVED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert |

### RES_0X4085_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARNDATA_INIT_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_LEARNDATA_SQ_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_TIMESERVO_A_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_TIMESERVO_A_LRN_COLD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_SERVO2_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_SERVO2_LRN_COLD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S2TIE_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S_GUARD_A_LRN_1_2_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S_GUARD_A_LRN_2_3_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S_GUARD_A_LRN_3_4_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S_GUARD_A_LRN_4_5_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S_GUARD_A_LRN_5_6_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S1_LTIME_REACT_RED_1_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S1_LTIME_REACT_RED_2_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S1_LTIME_REACT_RED_3_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S1_LTIME_REACT_RED_4_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_S1_LTIME_REACT_RED_5_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_UPAUTO_CNTRU_TSA_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_UPAUTO_CNTRU_PS2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_UPAUTO_CNTRU_SGA_L_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_UPAUTO_CNTRU_SGA_H_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_APDC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_TIMESERVO_A_CST_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_SERVO2_CST_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_COAST_REL_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_2_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_3_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_3_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_4_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_4_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_5_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_5_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_6_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_6_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_PSLINIT_LRN_6_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_TIMESERVO_A_POFFDW_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_2_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_3_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_4_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_5_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_6_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_SERVO2_POFFDW_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_G_PBASE_LRN_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_G_TSERVO_LRN_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_G_CNTRU_NRS_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_G_CNTRU_NRB_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_REL_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_1 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy1 |
| STAT_BASE_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_APP_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_NCTIMELAGFUFF_C_1_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_NCTIMELAGFUFF_C_2_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_NCTIMELAGFUFF_C_3_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_2 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy2 |
| STAT_XBUFF_C_1_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_XBUFF_C_2_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_XBUFF_C_3_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_BASE_PNC_LRN_FLG_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_DPLAST_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_BKPRS_NCONLRN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_3 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy3 |
| STAT_SLOPENCONOFF_MEM_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SLCNV_STATE_UP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_GOOD_FREQ_UP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SLCNV_STATE_CD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_GOOD_FREQ_CD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SLCNV_STATE_MD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_GOOD_FREQ_MD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_NONAME1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 1 |
| STAT_LPEPAP1_NC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_NONAME2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 2 |
| STAT_NONAME3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 3 |
| STAT_NONAME4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 4 |
| STAT_LTIMESERVOA_AFU_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_NONAME5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 5 |
| STAT_NONAME6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | No name data 6 |
| STAT_NONAME7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | No name data 7 |
| STAT_NONAME8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | No name data 8 |
| STAT_NONAME9_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | No name data 9 |
| STAT_TIMESERVO_A_CST_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_SERVO2_CST_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_TIMESERVO_A_POFFDW_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_P_SERVO2_POFFDW_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_BASE_PNC_LRN_C1APP_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_LTIMESERVOA_NC_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_LPEPAP1_NC_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_BASE_PNC_LRN_NCL_C1APP_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_REL_PNC_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_G_PBASE_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_G_TSERVO_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_GOOD_COUNT_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_C1CD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_C1POFFDW_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_ND_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_NCONREL_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_NCONBASE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_COMPNC_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_SL_COUNT_OT_NCLOWBASE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_7 | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Dummy7 |
| DUMMY_8 | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Dummy8 |
| STAT_LRNWAITPRESS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_LRNRELAYTIME_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_ACC_LEARNFF_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_ACC_LEARNFF_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_ACC_LEARNFF_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_CST_LEARNFF_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_LRNMINCNT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_9 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| STAT_LRNMIN_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_10 | DATA | high | data[177] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |

### RES_0X4086_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_SEGELN | - | - | - | Status Segelfunktion |
| STAT_DISABLECAN_BYTE1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0--- ---0   SV Segeln Aus 0--- ---1   SV Segeln An 0--- --0-   SV Segeln Einstieg Aus 0--- --1-   SV Segeln Einstieg An 0--- -0--   SV 2 Aus 0--- -1--   SV 2 An 0--- 0---   SV 3 Aus 0--- 1---   SV 3 An 0--0 ----   SV 4 Aus 0--1 ----   SV 4 An 0-0- ----   SV 5 Aus 0-1- ----   SV 5 An 00-- ----   SV 6 Aus 01-- ----   SV 6 An 1111 1101   Funktionsschnittstelle_ist_nicht_verfuegbar 1111 1110   Funktion_meldet_Fehler 1111 1111   Signal_unbefuellt |
| STAT_MODESAS | 0-n | high | unsigned char | - | STATUS_MODESAS | - | - | - | Segeln freigeben über Software SAS/AGS |
| STAT_REQAGS | 0-n | high | unsigned char | - | STATUS_REQAGS | - | - | - | Segelanforderung AGS |
| STAT_MODEGRB | 0-n | high | unsigned char | - | STATUS_MODE_GRB | - | - | - | Status Segeln |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE5 | - | - | - | Segelbedingungen |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE6 | - | - | - | Segelbedingungen |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE7 | - | - | - | Segelbedingungen |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE8 | - | - | - | Segelbedingungen |

### RES_0X4087_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOCKUP_CLUTCH_TEMPERATURE_COUNT_LOW_AREA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wandlerkupplungtemperaturzähler: Unterer Temperaturbereich |
| STAT_LOCKUP_CLUTCH_TEMPERATURE_COUNT_HIGH_AREA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wandlerkupplungtemperaturzähler: Oberer Temperaturbereich |

### RES_0X4088_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_Q_MONITOR1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |
| STAT_Q_MONITOR2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |
| STAT_Q_MONITOR3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |
| STAT_Q_MONITOR4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |
| STAT_Q_MONITOR5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |
| STAT_Q_MONITOR6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |
| STAT_Q_MONITOR7_DATA | DATA | high | data[50] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data in TCU |

### RES_0X4089_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARNDATA_INIT_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LEARNDATA_SQ_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_LRN_COLD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_LRN_COLD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S2TIE_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_1_2_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_2_3_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_3_4_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_4_5_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_5_6_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_6_7_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_7_8_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_1_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_2_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_3_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_4_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_5_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_6_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S1_LTIME_REACT_RED_7_8_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_TSA_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_PS2_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_SGA_L_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_SGA_H_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APDC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_CST_LRN_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_CST_LRN_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_COAST_REL_LRN_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_2_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_3_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_4_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_5_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_3_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_4_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_5_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_8_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_4_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_5_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_7_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_5_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_6_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_6_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_7_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_8_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_7_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_8_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PSLINIT_LRN_8_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_POFFDW_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_2_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_3_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_4_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_5_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_6_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_7_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_8_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_POFFDW_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_PBASE_LRN_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_TSERVO_LRN_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_CNTRU_NRS_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_CNTRU_NRB_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_REL_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APP_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NCTIMELAGFUFF_C_1_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NCTIMELAGFUFF_C_2_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NCTIMELAGFUFF_C_3_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| DUMMY_1 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy1 |
| STAT_XBUFF_C_1_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_C_2_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_C_3_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_FLG_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_DPLAST_LRN_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BKPRS_NCONLRN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| DUMMY_2 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy2 |
| STAT_SLOPENCONOFF_MEM_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_UP_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_UP_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_CD_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_CD_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_MD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_MD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NONAME1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 1 |
| STAT_LPEPAP1_NC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NONAME2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 2 |
| STAT_NONAME3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 3 |
| STAT_NONAME4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 4 |
| STAT_LTIMESERVOA_AFU_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NONAME5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | No name data 5 |
| STAT_NONAME6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | No name data 6 |
| STAT_NONAME7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | No name data 7 |
| STAT_NONAME8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | No name data 8 |
| DUMMY_5 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy5 |
| STAT_NONAME9_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | No name data 9 |
| STAT_TIMESERVO_A_CST_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_CST_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_POFFDW_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_POFFDW_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_C1APP_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LTIMESERVOA_NC_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LPEPAP1_NC_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_NCL_C1APP_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_REL_PNC_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_PBASE_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_TSERVO_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_COUNT_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_C1CD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_C1POFFDW_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_ND_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_NCONREL_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_NCONBASE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_COMPNC_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_NCLOWBASE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| DUMMY_6 | DATA | high | data[147] | - | - | 1.0 | 1.0 | 0.0 | Dummy6 |
| DUMMY_7 | DATA | high | data[147] | - | - | 1.0 | 1.0 | 0.0 | Dummy7 |
| STAT_LRNWAITPRESS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNRELAYTIME_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_ACC_LEARNFF_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_ACC_LEARNFF_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_ACC_LEARNFF_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CST_LEARNFF_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNMINCNT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |
| DUMMY_8 | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Dummy8 |
| STAT_LRNMIN_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| DUMMY_9 | DATA | high | data[177] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 6sp project |

### RES_0X408C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EGSTARTREQ_OLD | 0-n | high | unsigned char | - | STATUS_EGSTART_REQ | - | - | - | Vorletzter Einschaltaufforderer |
| STAT_EGSTARTREQ_NEW | 0-n | high | unsigned char | - | STATUS_EGSTART_REQ | - | - | - | Letzter Einschaltaufforderer |

### RES_0X408E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIST_NO_LUBRICATION_IN_D_WERT | km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Gefahrene Kilometer in Getriebeposition D ohne Schmierung |
| STAT_DIST_NO_LUBRICATION_IN_R_WERT | km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Gefahrene Kilometer in Getriebeposition R ohne Schmierung |

### RES_0X4090_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCUTEMP_SENSOR1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperature of TCU sensor 1 |
| STAT_TCUTEMP_SENSOR2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperature of TCU sensor 2 |

### RES_0X4092_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OIL_TEMPERATURE_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperature of AFT sensor 1 |
| STAT_OIL_TEMPERATURE_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperature of AFT sensor 2 |

### RES_0X4093_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OWC_SLIP_CNT01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the first temperature area (Less than -25 degrees Celsius) |
| STAT_OWC_SLIP_CNT02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the second temperature area (higher than -25 degrees Celsius and lower than -20) |
| STAT_OWC_SLIP_CNT03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the third temperature area (higher than -20 degrees Celsius and lower than -15) |
| STAT_OWC_SLIP_CNT04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the fourth temperature area (higher than -15 degrees Celsius and lower than -10) |
| STAT_OWC_SLIP_CNT05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the fifth temperature area (higher than -10 degrees Celsius) |

### RES_0X4095_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STALL_CNT01_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the first temperature area (low than -25 degrees Celsius) |
| STAT_STALL_CNT02_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the second temperature area (higher thatn -25 degree Celsiius and low than -20 degrees Celsius) |
| STAT_STALL_CNT03_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the third temperature area (higher thatn -20 degree Celsiius and low than -15 degrees Celsius) |
| STAT_STALL_CNT04_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the fourth temperature area (higher thatn -15 degree Celsiius and low than -10 degrees Celsius) |
| STAT_STALL_CNT05_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the fifth temperature area (higer than -10 degrees Celsius) |

### RES_0X4097_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CLUTCH_PATTERN_0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 0 |
| STAT_CLUTCH_PATTERN_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 1 |
| STAT_CLUTCH_PATTERN_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 2 |
| STAT_CLUTCH_PATTERN_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 3 |
| STAT_CLUTCH_PATTERN_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 4 |
| STAT_CLUTCH_PATTERN_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 5 |
| STAT_CLUTCH_PATTERN_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 6 |
| STAT_CLUTCH_PATTERN_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 7 |
| STAT_CLUTCH_PATTERN_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 8 |
| STAT_CLUTCH_PATTERN_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read Clutch pattern 9 |
| STAT_TRANSTYPE_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Read TransType 0 |
| STAT_TRANSTYPE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Read TransType 1 |
| STAT_TRANSTYPE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Read TransType 2 |
| STAT_TRANSTYPE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Read TransType 3 |
| STAT_TRANSTYPE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Read TransType 4 |
| STAT_REIN_GRDT_WERT | 1/m | high | unsigned int | - | - | 1.0 | 8.0 | 0.0 | Read REIN_GRDT |
| STAT_SF17_THRESHOLD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Read SF17 threshold |
| STAT_TAGETGEAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read targetgear |
| STAT_CURRENTGEAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read currentgear |
| STAT_ESTGEAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read estgear |
| STAT_SHIFT_STS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read shift_sts |
| STAT_SFT_KIND_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read sft_kind |
| STAT_MAXGEAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read maxgear |
| STAT_ACTGEAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read actgear |
| STAT_TARGETGEAR_LV1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read targetgear_lv1 |

### RES_0X4098_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_SPEED_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Max speed when move to P range |
| STAT_ESTIMATED_DAMAGE_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Estimated damage |
| STAT_COUNTER_LOW_SPEED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CC message output counter (speed less than 50kph) |
| STAT_COUNTER_HIGH_SPEED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CC message output counter (speed higher than or equal to 50kph) |

### RES_0X4099_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_ECU_MANAGER | 0-n | high | unsigned char | - | STATUS_ECU_MANAGER | - | - | - | This byte is used to read ECU manager |
| STAT_STATUS_COM_MANAGER_A_CAN | 0-n | high | unsigned char | - | STATUS_COM_MANAGER_A_CAN | - | - | - | This byte is used to read COM Manager A-CAN |
| STAT_STATUS_COM_MANAGER_FA_CAN | 0-n | high | unsigned char | - | STATUS_COM_MANAGER_FA_CAN | - | - | - | This byte is used to read COM Manager FA-CAN |
| STAT_STATUS_CAN_NETWORK_MANAGER_A_CAN | 0-n | high | unsigned char | - | STATUS_NETWORK_MANAGER_A_CAN | - | - | - | This byte is used to read Can Network Manager A-CAN |
| STAT_STATUS_CAN_NETWORK_MANAGER_FA_CAN | 0-n | high | unsigned char | - | STATUS_NETWORK_MANAGER_FA_CAN | - | - | - | This byte is used to read Can Network Manager FA CAN |
| STAT_NETWORK_TIMEOUT_TIME_A_CAN_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | This byte is used to read Network Timeout Time A-CAN |
| STAT_NETWORK_TIMEOUT_TIME_FA_CAN_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | This byte is used to read Network Timeout Time FA-CAN |
| STAT_NETWORK_BUS_SLEEP_TIME_A_CAN_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | This byte is used to read Network Bus Sleep Time A-CAN |
| STAT_NETWORK_BUS_SLEEP_TIME_FA_CAN_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | This byte is used to read Network Bus Sleep Time FA-CAN |
| STAT_STATUS_SYSTEM_STATE | 0-n | high | unsigned char | - | STATUS_SYSTEM_STATE | - | - | - | This byte is used to read System State |
| STAT_STATUS_SYSTEM_SUB_STATE | 0-n | high | unsigned char | - | STATUS_SUB_STATE | - | - | - | This byte is used to read System SubState |
| STAT_STATUS_E2_STATE | 0-n | high | unsigned char | - | STATUS_E2_STATE | - | - | - | This byte is used to read E2 state |
| STAT_STATUS_IG_STATUS | 0-n | high | unsigned char | - | STATUS_IG_STATUS | - | - | - | This byte is used to read IG status |
| STAT_STATUS_ENERG_BN_RDI_DRVG | 0-n | high | unsigned char | - | STATUS_ENERG_BN_RDI_DRVG | - | - | - | This byte is used to read ENERG BN RDI DRVG |
| STAT_STATUS_ST_DRV_VEH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | This byte is used to read ST_DRV_VEH  |
| STAT_STATUS_ST_BRG_DV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | This byte is used to read ST_BRG_DV |
| STAT_STATUS_ST_PLK | 0-n | high | unsigned char | - | ST_PLK | - | - | - | This byte is used to read ST_PLK |
| STAT_STATUS_ST_KL | 0-n | high | unsigned char | - | ST_KL | - | - | - | This byte is used to read ST_KL |
| STAT_STATUS_SHIFT_LEVER_INFORMATION | 0-n | high | unsigned char | - | SHIFT_LEVER_INFORMATION | - | - | - | This byte is used to read Shift Lever Information |
| STAT_STATUS_WAKE_SIGNAL | 0-n | high | unsigned char | - | WAKE_SIGNAL | - | - | - | This byte is used to read Wake Signal |
| STAT_STATUS_SHIFT_LOCK_STATE | 0-n | high | unsigned char | - | SHIFT_LOCK_STATE | - | - | - | This byte is used to read Shift Lock State |
| STAT_STATUS_SHIFT_LOCK_OUTPUT | 0-n | high | unsigned char | - | SHIFT_LOCK_OUTPUT | - | - | - | This byte is used to read Shift Lock Output |
| STAT_STATUS_SHIFT_LOCK_INPUT | 0-n | high | unsigned char | - | SHIFT_LOCK_INPUT | - | - | - | This byte is used to read Shift Lock Input |
| STAT_STATUS_P_LOCK_STATUS | 0-n | high | unsigned char | - | P_LOCK_STATUS | - | - | - | This byte is used to read P Lock Status |
| STAT_BATTERY_VOLTAGE_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | This byte is used to read Battery Voltage |
| STAT_ENGINE_SPEED_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | This byte is used to read Engine Speed |
| STAT_VEHICLE_SPEED_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | This byte is used to read Vehicle Speed |
| STAT_SYSTEM_CLOCK_WERT | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | This byte is used to read System Clock |

### RES_0XD9D0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANGSDREHZAHL_MOTOR_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Eingangsdrehzahl Motor |
| STAT_AUSGANGSDREHZAHL_GETRIEBE_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Ausgangsdrehzahl Getriebe |
| STAT_OEL_TEMP1_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Öltemperatursensor 1 |
| STAT_OEL_TEMP2_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Öltemperatursensor 2 |
| STAT_OELDRUCK_SCHALTER1_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Öldruckschalter 1: 0x00 = aus 0x01 = ein |
| STAT_OELDRUCK_SCHALTER2_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Öldruckschalter 2: 0x00 = aus 0x01 = ein |
| STAT_OELDRUCK_SCHALTER3_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Öldruckschalter 3: 0x00 = aus 0x01 = ein |
| STAT_OELDRUCK_SCHALTER4_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Öldruckschalter 4: 0x00 = aus 0x01 = ein |
| STAT_OELDRUCK_SCHALTER5_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Öldruckschalter 5: 0x00 = aus 0x01 = ein |

### RES_0XD9D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAGNETSPULE_SHIFTLOCK_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Shiftlock-Magnetspule: 0x00 = aus 0x01 = ein |
| STAT_SCHALTMAGNETSPULE_S1 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schaltmagnetspule S1: 0x00 = aus 0x01 = ein |
| STAT_SCHALTMAGNETSPULE_S2 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schaltmagnetspule S2: 0x00 = aus 0x01 = ein |
| STAT_LOCK_UP_MAGNETSPULE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Lock-up Magnetspule |
| STAT_LINE_PRESSURE_MAGNETSPULE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Line-pressure Magnetspule |
| STAT_DRUCKVENTIL_B1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Druckventil B1 |
| STAT_DRUCKVENTIL_C1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Druckventil C1 |
| STAT_DRUCKVENTIL_C2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Druckventil C2 |
| STAT_DRUCKVENTIL_C3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Druckventil C3 |
| STAT_DRUCKVENTIL_C4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Druckventil C4 |
| STAT_OELPUMPE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ölpumpe |

### RES_0XD9D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBEVARIANTE | 0-n | high | unsigned char | - | TAB_GETRIEBE_VARIANTE | - | - | - | Getriebevariante Siehe Tabelle TAB_GETRIEBE_VARIANTE |
| STAT_OIL_PUMP_TYPE | 0-n | high | unsigned char | - | TAB_EGS_OELPUMPE | - | - | - | Typ der Ölpumpe Siehe TAB_EGS_OELPUMPE |
| STAT_MANUAL_SHIFT_CONCEPT | 0/1 | high | unsigned char | - | - | - | - | - | Schnittstelle manuelle Gasse: 0x00 = Signal über CAN 0x01 = elektrische Komponenten an EGS |
| STAT_VERBAU_PSW4 | 0/1 | high | unsigned char | - | - | - | - | - | Verbau Öldruckschalter PSW4: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_VERBAU_SL4 | 0/1 | high | unsigned char | - | - | - | - | - | Verbau Magnetventil SL4 (C4): 0x00 = nicht verbaut 0x01 = verbaut |

### RES_0XDA20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GANGANZEIGE | 0-n | high | unsigned char | - | TAB_GANGANZEIGE | - | - | - | Ganganzeige im Kombi als Text Siehe table TAB_GANGANZEIGE |
| STAT_FAHRSTUFE | 0-n | high | unsigned char | - | TAB_WAEHLHEBELANZEIGE | - | - | - | Status der aktuellen Fahrstufe P, R, N, D, ungültig Siehe Tabelle TAB_WAEHLHEBELANZEIGE |

### RES_0XDA37_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_D_ZAEHLER_WERT | sec | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Zeit, die der Fahrer in Position D gefahren ist |
| STAT_S_ZAEHLER_WERT | sec | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Zeit, die der Fahrer in Position S gefahren ist |
| STAT_M_ZAEHLER_WERT | sec | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Zeit, die der Fahrer im Manuellen Modus gefahren ist |

### RES_0XDA39_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_BUS_IN_MOTORDREHZAHL_WERT | U/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die über A-CAN von der Motorsteuerung empfangenen Motordrehzahl (Ist_Drehzahl_Motor_Kurbelwelle). Bereich von 0 [U/min] bis 12000 [U/min] |
| STAT_BUS_IN_MOTORTEMPERATUR_WERT | Grad C | - | signed int | - | - | 1.0 | 1.0 | -48.0 | Motortemperatur Bereich von -48 [Grad C] bis 205 C [Grad C] |
| STAT_BUS_IN_MOTOROELTEMPERATUR_WERT | Grad C | - | signed int | - | - | 1.0 | 1.0 | -48.0 | Motoroeltemperatur Bereich von -48 [Grad C] bis 205 [Grad C] |
| STAT_BUS_IN_FAHRPEDAL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrpedalwert Bereich von 0 [%] bis 100 [%] |
| STAT_BUS_IN_KICK_DOWN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Kick-Down Schalter: 0x00 = aus 0x01 = ein |
| STAT_BUS_IN_BREMSLICHTSCHALTER_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0x00 = Bremslichtschalter nicht betätigt 0x01 = Bremslichtschalter betätigt |
| STAT_BUS_IN_BREMSLICHTTESTSCHALTER_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0x00 = Bremslichttestschalter nicht betätigt 0x01 = Bremslichttestschalter betätigt |
| STAT_BUS_IN_HANDBREMSE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Handbremse: 0x00 = AUS 0x01=EIN |
| STAT_BUS_IN_ANLASSERFREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Motorstartfreigabe an CAS: 0x00 = keine Freigabe 0x01 = Motorstart zulassen |
| STAT_BUS_IN_LENKRAD_SCHALTPADDLE_NR | 0-n | - | unsigned char | - | TAB_SCHALTWIPPE | - | - | - | Status Schaltpaddles: Siehe Tabelle TAB_SCHALTWIPPE |
| STAT_BUS_IN_ANHAENGERBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Anhaengerbetrieb erkannt 0= Anhaengerbetrieb inaktiv 1 = Anhaengerbetrieb aktiv |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NPOS_LEARNED | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1: Eingelernt, 0: Nicht eingelernt |
| STAT_VPOS1_WERT | - | - | + | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | N-Positionseinstellwert 1 |
| STAT_VPOS2_WERT | - | - | + | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | N-Positionseinstellwert 2 |
| STAT_RESET_RESULT | - | + | - | 0-n | high | unsigned char | - | RESET_RESULT_OF_NPOS_LEARNING | - | - | - | Reset Ergebnis: Erfolgreich/Fehlgeschlagen |

### RES_0XF005_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_RESULT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | result of reset damage information |

### RES_0XF006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_RESULT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Result of reset P stuck Information |

### RES_0XF007_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_RESULT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Result of reset SF17 Information |

### RES_0XF008_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EXHAUST_MODE | + | + | + | 0-n | high | unsigned char | - | EXHAUST_MODE | - | - | - | - |

### RES_0XF01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OWC_SLIP_CNT_RESET | + | - | - | 0-n | high | unsigned char | - | COUNTER_RESET_STATUS | - | - | - | Status of owc slip and engine stall counter reset. 0: reset successfully; 1: reset failed; |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| ADAPTIONSWERTE_ZURUECKSETZEN | 0xAE31 | - | Adaptionswerte zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EGS_SENSOREN | 0xD9D0 | - | Sensorwerte vom Getriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9D0_D |
| EGS_AKTUATOREN | 0xD9D1 | - | Aktuatoren vom Getriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9D1_D |
| GETRIEBE_VARIANTE | 0xD9D3 | - | Getriebevariante auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9D3_D |
| STEUERN_LERNFKT_RUECKSETZEN | 0xDA15 | - | Rücksetzen der Lernfunktion | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA15_D | - |
| GANGANZEIGE | 0xDA20 | - | Ganganzeige in Kombiinstrument | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA20_D |
| WANDLERKUPPLUNG | 0xDA22 | STAT_WANDLERKUPPLUNG | Status der Wandlerkupplung  Siehe Tabelle TAB_WANDLERKUPPLUNG | 0-n | - | high | unsigned char | TAB_WANDLERKUPPLUNG | - | - | - | - | 22 | - | - |
| WAEHLHEBEL_STELLUNG | 0xDA27 | STAT_WAEHLHEBELSTELLUNG | Waehlhebelstellung:P,R,N,D,M,+,-,n.def. als Wert, siehe table TAB_WAEHLHEBELSTELLUNG | 0-n | - | high | signed int | TAB_WAEHLHEBELSTELLUNG | - | - | - | - | 22 | - | - |
| ISTGANG | 0xDA2E | STAT_ISTGANG | Eingelegter Gang im Getriebe: 0-8, N, R, P Gangzuweisung siehe Tabelle TAB_ISTGANG | 0-n | - | high | unsigned char | TAB_ISTGANG | - | - | - | - | 22 | - | - |
| D_S_M_ZAEHLER | 0xDA37 | - | Die Zeit, die der Fahrer in Getriebeposition D, in S und in Manuellem Modus gefahren ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA37_D |
| BUS_IN_SIGNAL | 0xDA39 | - | BUS-Signale | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA39_D |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Spannungswert am Steuergerät an Klemme 30 (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_LINER_SOLENOID_B1_CURRENT | 0x4005 | - | Stromwert elektrisches Drucksteuerventil B1 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4005_D | RES_0x4005_D |
| STATUS_TM_OUTPUT_REVOLUTION_LESEN | 0x4009 | STAT_TM_OUTPUT_REVOLUTION_WERT | Ausgangsdrehzahl Getriebe lesen | 1/min | - | high | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| SHIFT_SOLENOID_S1 | 0x400A | - | Magnet S1 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x400A_D | RES_0x400A_D |
| STATUS_LINER_SOLENOID_C1_CURRENT | 0x400B | - | Stromwert elektrisches Drucksteuerventil C1 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x400B_D | RES_0x400B_D |
| STATUS_LINER_SOLENOID_C2_CURRENT | 0x400C | - | Stromwert elektrisches Drucksteuerventil C2 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x400C_D | RES_0x400C_D |
| STATUS_LINER_SOLENOID_C3_CURRENT | 0x400D | - | Stromwert elektrisches Drucksteuerventil C3 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x400D_D | RES_0x400D_D |
| STATUS_LINER_SOLENOID_C4_CURRENT | 0x400E | - | Stromwert elektrisches Drucksteuerventil C4 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x400E_D | RES_0x400E_D |
| STATUS_LINER_SOLENOID_SLT_CURRENT | 0x400F | - | Stromwert elektrisches Drucksteuerventil Hauptdruck | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x400F_D | RES_0x400F_D |
| STATUS_ENGINE_TORQUE_LESEN | 0x4012 | STAT_NEWTON_METRE_WERT | Motor-Drehmoment lesen | Nm | - | high | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DRIVER_REQUESTED_TORQUE_LESEN | 0x4013 | STAT_NEWTON_METRE_WERT | Vom Fahrer angefordertes Drehmoment | Nm | - | high | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ACCELERATOR_PEDAL_ACTUAL_LESEN | 0x4014 | STAT_ACCELERATOR_PEDAL_ACTUAL_WERT | Pedalstellung | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ACCELERATOR_PEDAL_VIRTUAL_LESEN | 0x4015 | STAT_CALCULATED_PEDAL_POSITION_WERT | Berechnete Pedalstellung | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TORQUE_CONTROL_REQUEST_LESEN | 0x4016 | STAT_TORQUE_CONTROL_REQUEST_LESEN | Status vom Regler angefordertes Drehmoment | 0-n | - | high | unsigned char | TORQUE_CONTROL_REQUEST_LESEN | - | - | - | - | 22 | - | - |
| STATUS_TORQUE_LIMITATION_REQUEST_LESEN | 0x4017 | STAT_NEWTON_METRE_WERT | Vom Regler limitiertes Drehmoment | Nm | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TORQUE_INCREASE_REQUEST_LESEN | 0x4018 | STAT_NEWTON_METRE_WERT | Vom Regler angefordertes steigendes Drehmoment lesen | Nm | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SHIFT_LEVER_POSITION_LESEN | 0x4019 | STAT_SHIFT_LEVER_POSITION | Position der Wählstufe | 0-n | - | high | unsigned char | SHIFT_LEVER_POSITION | - | - | - | - | 22 | - | - |
| STATUS_LINER_SOLENOID_SLU_CURRENT | 0x401A | - | Stromwert elektrisches Drucksteuerventil Wanndlerkupplung (SLU) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x401A_D | RES_0x401A_D |
| STATUS_ELECTROMAGNETIC_OIL_PUMP_LESEN | 0x401B | STAT_ELECTROMAGNETIC_OIL_PUMP_PERCENTAGE_LESEN_WERT | PWM - Modulationsgrad. 0% --> Nicht angesteuert; 100% --> Voll angesteuert | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TM_INPUT_REVOLUTION_LESEN | 0x401C | STAT_TM_INPUT_REVOLUTION_LESEN_WERT | Getriebeeingangsdrezahl | 1/min | - | high | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| STATUS_MANUAL_SHIFT_SWITCH_LESEN | 0x401D | - | Statusinformation über die manuelle Schaltgasse | Bit | - | high | BITFIELD | BF_MANUAL_SHIFT_SWITCH | - | - | - | - | 22 | - | - |
| WARM_UP_CYCLE_COUNTER | 0x401E | STAT_WARM_UP_CYCLE_COUNTER_WERT | Warm-up-Zyklus Zähler | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VEHICLE_SPEED | 0x401F | STAT_VEHICLE_SPEED_WERT | Fahrzeuggeschwindigkeit | km/h | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FAULT_RELATED_INFORMATION_LESEN | 0x4022 | - | Fehlerbezogene Informationen lesen | Bit | - | high | BITFIELD | BF_FAULT_RELATED_INFORMATION_LESEN | - | - | - | - | 22 | - | - |
| STATUS_TORQUE_CONVERTER_LOCKUP_CLUTCH_STATUS_LESEN | 0x4023 | STAT_TORQUE_CONVERTER_LOCKUP_CLUTCH | Status Wanderlkupplung | 0-n | - | high | unsigned char | STATUS_TORQUE_CONVERTER_LOCKUP_CLUTCH | - | - | - | - | 22 | - | - |
| STATUS_ACTUAL_GEAR_LESEN | 0x4024 | STAT_ACTUAL_GEAR | Fahrstufe | 0-n | - | high | unsigned char | STATUS_ACTUAL_GEAR | - | - | - | - | 22 | - | - |
| STATUS_SHIFT_LOGIC_INFORMATION_LESEN | 0x4025 | STAT_SHIFT_LOGIC_INFORMATION | Schaltlogik informationen lesen | 0-n | - | high | unsigned char | SHIFT_LOGIC_INFORMATION | - | - | - | - | 22 | - | - |
| STATUS_EMERGENCY_MODE_LESEN | 0x4026 | STAT_EMERGENCY_MODE | Status Notlaufprogramm | 0-n | - | high | unsigned char | EMERGENCY_MODE | - | - | - | - | 22 | - | - |
| STATUS_TIMESTAMP_LESEN | 0x4027 | STAT_SECOND_WERT | Zeitstempel lesen | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_MILEAGE_LESEN | 0x4028 | STAT_MILEAGE_WERT | Kilometerstand | km | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ENGINE_RPM | 0x4029 | STAT_ENGINE_RPM_WERT | Motordrehzahl | 1/min | - | high | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| STATUS_NIC_STATUS_LESEN | 0x4030 | STAT_NIC | Status NIC lesen | 0-n | - | high | unsigned char | STATUS_NIC | - | - | - | - | 22 | - | - |
| STATUS_BRAKE_SIGNAL_LESEN | 0x4031 | STAT_BRAKE_SIGNAL | Status des Bremssignals | 0-n | - | high | unsigned char | STATUS_BRAKE_SIGNAL | - | - | - | - | 22 | - | - |
| STATUS_SHIFT_ACTIVE_LESEN | 0x4032 | STAT_SHIFT_ACTIVE | Status ob Schaltvorgang aktiv ist | 0-n | - | high | unsigned char | STATUS_SHIFT_ACTIVE | - | - | - | - | 22 | - | - |
| STATUS_MSA_STATUS_LESEN | 0x4033 | - | Status von Motor-Start/Stop (MSA) | Bit | - | high | BITFIELD | BF_MSA_STRUCT | - | - | - | - | 22 | - | - |
| EOP_RELAY_LESEN | 0x4034 | - | Status Relais Elektrische-Ölpumpe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4034_D | RES_0x4034_D |
| EOP_SPEED_PHYSICAL | 0x4035 | - | EOP ansteuern / EOP Status | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4035_D | RES_0x4035_D |
| STATUS_TCU_TEMPERATURE_LESEN | 0x4036 | STAT_TCU_TEMPERATURE_WERT | EGS Temperatur lesen | °C | - | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| STATUS_AD_TM_INPUT_REVOLUTION_LESEN | 0x4037 | STAT_AD_TM_INPUT_REVOLUTION_WERT | Digitaler Wert von der Getriebeeingangsdrehzahl. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_TM_OUTPUT_REVOLUTION_LESEN | 0x4038 | STAT_AD_TM_OUTPUT_REVOLUTION_WERT | Digitaler Wert von der Getriebeausgangsdrehzahl. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_OIL_TEMPERATURE_1_LESEN | 0x4039 | STAT_AD_OIL_TEMPERATURE_1_WERT | Digitaler Wert von der Getriebeöltemperatur. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GEAR_DISPLAY | 0x403B | - | Gang | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x403B_D | RES_0x403B_D |
| EMOP_STATE | 0x403C | - | EMOP Status | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x403C_D | RES_0x403C_D |
| OIL_TEMPERATURE_LESEN | 0x403D | STAT_OIL_TEMPERATURE_WERT | Öltemperatur | °C | - | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| STATUS_DISTANCE_TRAVELED_MIL_ACTIVE | 0x403E | STAT_DISTANCE_TRAVELED_MIL_ACTIVE_WERT | Distance Traveled while MIL is Activated | km | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_OIL_TEMPERATURE_2_LESEN | 0x4040 | STAT_AD_OIL_TEMPERATURE_2_WERT | Digitaler Wert von der Getriebeöltemperatur. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_TCU_TEMPERATURE_1_LESEN | 0x4041 | STAT_AD_TCU_TEMPERATURE_1_WERT | Digitaler Wert von der EGS-Temperatur. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_TCU_TEMPERATURE_2_LESEN | 0x4042 | STAT_AD_TCU_TEMPERATURE_2_WERT | Digitaler Wert von der EGS-Temperatur. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_POSITION_1_LESEN | 0x4043 | STAT_AD_POSITION_1_WERT | Digitaler Wert vom Positionssenor 1. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_POSITION_2_LESEN | 0x4044 | STAT_AD_POSITION_2_WERT | Digitaler Wert vom Positionssenor 2. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_IGNITION_INPUT_LESEN | 0x4045 | STAT_AD_IGNITION_INPUT_WERT | Information der Weckleitung | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AD_BATTERY_VOLT_LESEN | 0x4046 | STAT_AD_BATTERY_VOLT_WERT | Digitaler Wert von der Batteriespannung. Ausgang vom A/D-Converter | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_PLOCK_STATUS_LESEN | 0x4048 | STAT_PLOCK | Information Parksperre lesen | 0-n | - | high | unsigned char | STATUS_PLOCK | - | - | - | - | 22 | - | - |
| STATUS_EG_START_LESEN | 0x4049 | STAT_EG_START | Motorstartfreigabe | 0-n | - | high | unsigned char | STATUS_EG_START | - | - | - | - | 22 | - | - |
| STATUS_SUPPORTED_01_20 | 0x404A | - | PID 01 bis PID 20 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404A_D |
| STATUS_MONITOR_SINCE_DTC_CLEARED | 0x404B | - | Anzahl gespeicherter DTCs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404B_D |
| STATUS_CALCULATED_LOAD_VALUE | 0x404C | STAT_CLACULATED_LOAD_VALUE_WERT | Berechnetes Motormoment | % | - | high | unsigned char | - | 100.0 | 255.0 | 0.0 | - | 22 | - | - |
| STATUS_ENGINE_COOLANT_TEMPERATURE_LESEN | 0x404D | STAT_ENGINE_COOLANT_TEMPERATURE_WERT | Motor-Kühlmitteltemperatur | °C | - | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| STATUS_BUILDPHASE | 0x404E | STAT_BUILDPHASE_TEXT | Bauphase | TEXT | - | high | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SUPPORTED_PIDS_21_40_LESEN | 0x404F | - | PID 21 bis PID 40 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404F_D |
| STATUS_SHIFTLOCK_CONDITION_LESEN | 0x4050 | - | Shift-Lock Bedingungen | Bit | - | high | BITFIELD | BF_SHIFT_LOCK_CONDITION | - | - | - | - | 22 | - | - |
| STATUS_EOP_DRIVER_LESEN | 0x4051 | - | Status des elektrischen Ölpumpentreibers lesen | Bit | - | high | BITFIELD | BF_EOP_DRV_BF | - | - | - | - | 22 | - | - |
| STATUS_TARGET_GEAR_LESEN | 0x4052 | STAT_TARGET_GEAR | Zielgang lesen | 0-n | - | high | unsigned char | TAB_TARGET_GEAR | - | - | - | - | 22 | - | - |
| STATUS_DYNAMIC_INDEX_LESEN | 0x4053 | - | Dynamik index | Bit | - | high | BITFIELD | BF_DYNAMIC_INDEX_LESEN_STRUCT | - | - | - | - | 22 | - | - |
| STATUS_CALID_LESEN | 0x4054 | - | OBD-Job | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4054_D |
| STATUS_CVN_LESEN | 0x4055 | - | OBD-Job | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4055_D |
| STATUS_TARGET_SLIP_LESEN | 0x4056 | STAT_TARGET_SLIP_WERT | Zielschlupf zwischen Getriebeeingangs- und ausgangsdrehzahl [rpm] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ACTUAL_SLIP_LESEN | 0x4057 | STAT_TARGET_SLIP_WERT | Ist-Schlupf zwischen Getriebeeingangs- und ausgangsdrehzahl [rpm] | - | - | high | unsigned int | - | 1.0 | 1.0 | -10000.0 | - | 22 | - | - |
| STATUS_PRESSURE_SW_1_LESEN | 0x4058 | STAT_PRESSURE_SW_1 | Status Öldruckschalter 1 | 0-n | - | high | unsigned char | STATUS_PRESSURE_SW_1 | - | - | - | - | 22 | - | - |
| STATUS_PRESSURE_SW_2_LESEN | 0x4059 | STAT_PRESSURE_SW_2 | Status Öldruckschalter 2 | 0-n | - | high | unsigned char | STATUS_PRESSURE_SW_2 | - | - | - | - | 22 | - | - |
| STATUS_SUPPORTED_PIDS_41_60_LESEN | 0x405A | - | PID 41 bis PID 60 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405A_D |
| STATUS_MONITOR_STATUS_THIS_DRIVING_CYCLE_LESEN | 0x405B | - | Status Überwachung im akutellen Fahrzyklus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405B_D |
| STATUS_CONTROL_MODUL_VOLTAGE | 0x405C | STAT_CONTROL_MODUL_VOLTAGE_WERT | EGS Versorgungsspannung | - | - | high | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| SHIFT_SOLENOID_S2 | 0x405E | - | Magnet S2 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x405E_D | RES_0x405E_D |
| SHIFT_LOCK_SOLENOID | 0x405F | - | Shift Lock Magnet | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x405F_D | RES_0x405F_D |
| STATUS_PRESSURE_SW_3_LESEN | 0x4060 | STAT_PRESSURE_SW_3 | Status Öldruckschalter 3 | 0-n | - | high | unsigned char | STATUS_PRESSURE_SW_3 | - | - | - | - | 22 | - | - |
| STATUS_PRESSURE_SW_4_LESEN | 0x4061 | STAT_PRESSURE_SW_4 | Status Öldruckschalter 4 | 0-n | - | high | unsigned char | STATUS_PRESSURE_SW_4 | - | - | - | - | 22 | - | - |
| STATUS_PRESSURE_SW_5_LESEN | 0x4062 | STAT_PRESSURE_SW_5 | Status Öldruckschalter 5 | 0-n | - | high | unsigned char | STATUS_PRESSURE_SW_5 | - | - | - | - | 22 | - | - |
| STATUS_SAILING_STATUS_LESEN | 0x4063 | STAT_SAILING | Status segeln | 0-n | - | high | unsigned char | STATUS_SAILING | - | - | - | - | 22 | - | - |
| STATUS_LINEAR_PRESSURE_SLU_LESEN | 0x4064 | STAT_PRESSURE_SLU_WERT | Ventildruck Wandlerüberbrückungskupplung (SLU) gf/cm^2 | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LINEAR_PRESSURE_SLT_LESEN | 0x4065 | STAT_PRESSURE_WERT | Systemdruck [gf/cm^2] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LINEAR_PRESSURE_C1_LESEN | 0x4066 | STAT_PRESSURE_C1_WERT | Druck Kupplung C1 (SL1) [gf/cm^2] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LINEAR_PRESSURE_C2_LESEN | 0x4067 | STAT_PRESSURE_C2_WERT | Druck Kupplung C2 (SL2) [gf/cm^2] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LINEAR_PRESSURE_C3_LESEN | 0x4068 | STAT_PRESSURE_C3_WERT | Druck Kupplung C3 (SL3) [gf/cm^2] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LINEAR_PRESSURE_C4_LESEN | 0x4069 | STAT_PRESSURE_C4_WERT | Druck Kupplung C4 (SL4) [gf/cm^2] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CODING | 0x406A | - | Codierstatus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406A_D |
| STATUS_UPSHIFT_COUNTER_QS3 | 0x406B | STAT_UPSHIFT_COUNTER_QS3_WERT | Hochschaltzähler QS3 | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_RACE_START | 0x406C | - | Race Start | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406C_D |
| CODING_IN_FUNCTION | 0x406D | - | Current activated coding status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406D_D |
| STATUS_LINEAR_PRESSURE_B1_LESEN | 0x4070 | STAT_PRESSURE_B1_WERT | Druck Bremse B1 (SL5) [gf/cm^2] | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_EOP_SPEED_COMMAND_LESEN | 0x4074 | STAT_EOP_SPEED_COMMAND_WERT | Vorgabedrehzahl vom elektrischen Ölpumpentreiber [mA] | mA | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TCU_RESET_COUNT_LESEN | 0x4076 | - | Zähler für Steuergeräteresets | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4076_D |
| STATUS_SAILING_COUNT_LESEN | 0x4077 | STAT_SAILING_COUNT_WERT | Zähler für Segelbetrieb | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_NIC_COUNT_LESEN | 0x4078 | STAT_NIC_COUNT_WERT | Zähler für NIC (Automatische Kraftschlussunterbrechung im Stillstand bei Motor an und Bremse getreten) | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_MSA_COUNT_LESEN | 0x4079 | STAT_MSA_COUNT_WERT | Zähler für MSA (Automatischer Motor-Start/Stop bei Stillstand und Bremse getreten) | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_BATTERY_TIME_LESEN | 0x4080 | - | Zeit, wie lange die Batterie in welchen Spannungsbereichen ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4080_D |
| STATUS_DRIVE_TIME_LESEN | 0x4081 | - | Zeit, wie lange welche Fahrstufe eingelegt ist (D M S M+/-) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4081_D |
| STATUS_TCU_TEMPERATURE_TIME_LESEN | 0x4082 | - | Zeit, wie lange das Steuergerät in welchen Temperaturbereichen ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4082_D |
| STATUS_ATF_TEMPERATURE_TIME_LESEN | 0x4083 | - | Zeit, wie lange die Getriebeöltemperatur in welchen Zeitbereichen ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4083_D |
| STATUS_FAILSAFE_LESEN | 0x4084 | - | Sicherheitsmaßnahmen im Fehlerfall | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4084_D |
| STATUS_LEARNDATA_6SP_LESEN | 0x4085 | - | Lese adaptive Lerndaten 6-Gang-Getriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4085_D |
| STATUS_SEGELN_LESEN | 0x4086 | - | Status Segelfunktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4086_D |
| STATUS_LOCKUP_CLUTCH_TEMPERATURE_COUNT_LESEN | 0x4087 | - | Temperaturzähler Wandlerkupplung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4087_D |
| STATUS_QMONITOR_LESEN | 0x4088 | - | Read Q monitor data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4088_D |
| STATUS_LEARNDATA_8SP_LESEN | 0x4089 | - | Read adaptive data for 8sp project | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4089_D |
| EGSTARTREQ_MONITOR | 0x408C | - | Engine start request monitor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x408C_D |
| DISTANCE_NO_LUBRICATION | 0x408E | - | Vehicle running distance without lubrication | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x408E_D |
| STATUS_TCUTEMP_SENSORS_LESEN | 0x4090 | - | Report TCU temperatures for TCU temperature sensor 1 and sensor 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4090_D |
| STATUS_TCU_TEMP_CAN_LESEN | 0x4091 | STAT_CU_TEMP_CAN_LESEN_WERT | TCU ambient temperature | °C | - | high | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| STATUS_OIL_TEMPERATURE_LESEN | 0x4092 | - | ATF temperature of ATF sensor 1 and sensor 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4092_D |
| OWC_SLIP_COUNTER | 0x4093 | - | Counter for OWC Slip | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4093_D |
| STALL_CONNTER_AFTER_OWC_SLIP | 0x4095 | - | stall counters due to owc slip | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4095_D |
| STATUS_SF17_INFORMATION | 0x4097 | - | SF17_INFORMATION | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4097_D |
| UNEXPECTED_P_DAMAGE | 0x4098 | - | Damage information for shifting to P during running. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4098_D |
| PSTUCK_INFORMATION | 0x4099 | - | This DID is used to read infromation Pstuck | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4099_D |
| NEUTRAL_POSITION_ADJUSTMENT | 0xF000 | - | Anlernen Getriebepositionssensor nach Steuergeräte-Tausch | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF000_R |
| RESET_ADAPTATION_VALUES | 0xF001 | - | Rücksetzen der Adaptionen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_CLUTCH_ADAPTATION_VALUES | 0xF002 | - | Rücksetzen der allgemeinen Kupplungsadaptionen (ohne Wandlerkupplung) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_LOCKUP_ADAPTATION_VALUES | 0xF003 | - | Rücksetzen der Wandlerkupplungsadaption (ohne die allgemeinen Kupplungsadaptionen) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EEPROM_SCHREIBEN | 0xF004 | - | EEPROM schreiben | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_DAMAGE_INFORMATION | 0xF005 | - | Reset damage information | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF005_R |
| RESET_PSTUCK_INFORMATION | 0xF006 | - | This RID is used to reset information of Pstuck. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF006_R |
| RESET_SF17_INFORMATION | 0xF007 | - | Result of reset SF17 Information | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF007_R |
| EXHAUST_MODE | 0xF008 | - | TCU starts Exhaust Mode by SubFunction$01. TCU stops Exhaust Mode by SubFunction$02. TCU reports current ExhaustMode status by SubFunction$03. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF008_R |
| STEUERN_SEGELN_DEAK_DAUERHAFT | 0xF013 | - | Dauerhaftes Deaktivieren der Segelfunktion | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_TCU_RESET_COUNT | 0xF014 | - | Lösche TCU-Resetzähler | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_SAILING_COUNT | 0xF015 | - | Zähler Segeln zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_NIC_COUNT | 0xF016 | - | NIC-Zähler zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_MSA_COUNT | 0xF017 | - | MSA-Zähler zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_BATTERY_TIME | 0xF018 | - | Löschen Batteriezeit | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_TEMPERATURE_TIME | 0xF019 | - | Löschen EGS Temperaturzeit und Öltemperaturzeit | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_LOCKUP_CLUTCH_TEMPERATURE_COUNT | 0xF01A | - | Temperaturzähler Wandlerkupplung löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_EGSTART_REQUEST | 0xF01B | - | Reset engine start requests | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_OWC_SLIP_COUNTER | 0xF01C | - | Reset all owc slip counters | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01C_R |

### SHIFT_LEVER_INFORMATION

| WERT | TEXT |
| --- | --- |
| 0x00 | P |
| 0x01 | Intermediation of P and R |
| 0x02 | R |
| 0x03 | Intermediation of R and N |
| 0x04 | N |
| 0x05 | Intermediation of N and D |
| 0x06 | D |
| 0xFF | Wert ungültig |

### SHIFT_LEVER_POSITION

| WERT | TEXT |
| --- | --- |
| 00 | Stufe P |
| 01 | Stufe R |
| 02 | Stufe N |
| 03 | Stufe D |
| FF | Fehler |

### SHIFT_LOCK_INPUT

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON |
| 0xFF | Wert ungültig |

### SHIFT_LOCK_OUTPUT

| WERT | TEXT |
| --- | --- |
| 0x00 | LOCKED |
| 0xFF | UNLOCKED |

### SHIFT_LOCK_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | LOCK |
| 0x02 | UNLOCK |
| 0xFF | Wert ungültig |

### SHIFT_LOGIC_INFORMATION

| WERT | TEXT |
| --- | --- |
| 0x00 | DS2_XE |
| 0x01 | DS2_E |
| 0x02 | DS2_S |
| 0x03 | DS2_XS |
| 0x04 | DS2_A1 |
| 0x05 | DS2_A2 |
| 0x06 | DS2_A3 |
| 0x07 | DS2_A4 |
| 0x08 | DS2_STEPTR |
| 0x09 | DS2_SO |
| 0x10 | DS2_B0 |
| 0x11 | DS2_LM |
| 0x12 | DS2_HM |
| 0x13 | DS2_WL |
| 0x14 | DS2_LD |
| 0x15 | DS2_ACC |
| 0x16 | DS2_A5 |
| 0x17 | DS2_TMS |

### STATUS_ACTUAL_GEAR

| WERT | TEXT |
| --- | --- |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 (Nur bei 8-Gang-Getriebe) |
| 0x08 | Gang 8 (Nur bei 8-Gang-Getriebe) |
| 0x0F | Ungültig |

### STATUS_BRAKE_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON |
| 0x3F | Ungültig |

### STATUS_COM_MANAGER_A_CAN

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_COMMUNICATION |
| 0x01 | SILENT_COMMUNICATION |
| 0x02 | FULL_COMMUNICATION |
| 0xFF | Wert ungültig |

### STATUS_COM_MANAGER_FA_CAN

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_COMMUNICATION |
| 0x01 | SILENT_COMMUNICATION |
| 0x02 | FULL_COMMUNICATION |
| 0xFF | Wert ungültig |

### STATUS_E2_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | INIT |
| 0x02 | INITREAD |
| 0x03 | EXEC |
| 0x04 | ENDWRITE |
| 0x05 | WRITESTOP |
| 0x06 | RESTART |
| 0x07 | TERMINATE |
| 0x08 | IGOFF_FAILDETECT |
| 0x09 | FAILDETECT_WRITESTOP |
| 0xFF | Wert ungültig |

### STATUS_ECU_MANAGER

| WERT | TEXT |
| --- | --- |
| 0x10 | STARTUP |
| 0x11 | STARTUP ONE |
| 0x12 | STARTUP TWO |
| 0x20 | WAKEUP |
| 0x21 | WAKEUP ONE |
| 0x22 | WAKEUP VALIDATION |
| 0x23 | WAKEUP REACTION |
| 0x24 | WAKEUP TWO |
| 0x25 | WAKEUP WAKESLEEP |
| 0x26 | WAKEUP TTII |
| 0x30 | RUN |
| 0x32 | APP RUN |
| 0x33 | APP POST RUN |
| 0x40 | SHUTDOWN |
| 0x44 | PREP SHUTDOWN |
| 0x49 | GO SLEEP |
| 0x4D | GO OFF ONE |
| 0x4E | GO OFF TWO |
| 0x50 | SLEEP |
| 0x80 | OFF |
| 0x90 | RESET |
| 0xFF | Wert ungültig |

### STATUS_EGSTART_REQ

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | MSA Deaktivierung aufgrund Gangwahl (nicht relevant für I12) |
| 0x02 | Getriebefehler; siehe Fehlerspeicher |
| 0x04 | Geschwindigkeitsgrenzen für E-Fahren überschritten |
| 0x08 | Getriebeöltemperaturgrenzen für E-Fahren überschritten |
| 0x10 | Ölstandsüberwachung; Wandlerfüllung aufgrund Fahrzeugstandzeit zu gering |
| 0x20 | Beschleunigungsüberwachung Bauteilschutz C1 |
| 0x40 | Bauteilschutz EOP; Ölvorlauftemperatur außerhalb Grenzen |
| 0x80 | Spannungsüberwachung DC/DC-Bordnetzstabilisierung; Spannung zu gering |

### STATUS_EG_START

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Motorstart |
| 0x01 | Motorstart freigegeben (Position N) |
| 0x02 | Motorstart/Motorstop freigegeben (Position P) |
| 0x03 | Signal ungültig |

### STATUS_ENERG_BN_RDI_DRVG

| WERT | TEXT |
| --- | --- |
| 0x00 | No HV release |
| 0x01 | HV release and no charging plug inserted |
| 0x02 | HV release and charging plug inserted |
| 0x03 | HV release and charging plug unknown |
| 0x04 | No HV release and charging plug inserted |
| 0x05 | No HV release and charging plug unknown |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### STATUS_EOP_RELAY

| WERT | TEXT |
| --- | --- |
| 0x00 | EOP ausgeschaltet über das Relais |
| 0x01 | EOP eingeschaltet über das Relais |

### STATUS_IG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | INIT |
| 0x02 | LOW |
| 0x03 | ON |
| 0x04 | OFF |
| 0xFF | Wert ungültig |

### STATUS_MODESAS

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln nicht freigegeben bei SAS |
| 0x01 | Segeln freigegeben bei SAS |
| 0x02 | Wecheln zu Segeln (Anforderung von AGS) |
| 0x03 | Segeln aktiv |
| 0x04 | Wechseln zu Segeln inaktiv (Anforderung AGS) |

### STATUS_MODE_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln deaktiviert |
| 0x01 | Segeln freigegeben aber nicht aktiv |
| 0x02 | Wecheln zu Segeln |
| 0x03 | Segeln aktiv |
| 0x04 | Wechseln zu Segeln inaktiv |
| 0x0D | Segeln nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |

### STATUS_NETWORK_MANAGER_A_CAN

| WERT | TEXT |
| --- | --- |
| 0x01 | BUS_SLEEP |
| 0x02 | PREPARE_BUS_SLEEP |
| 0x80 | READY_SLEEP |
| 0x90 | NORMAL_OPERATION |
| 0xA0 | REPEAT_MESSAGE |
| 0xFF | Wert ungültig |

### STATUS_NETWORK_MANAGER_FA_CAN

| WERT | TEXT |
| --- | --- |
| 0x01 | BUS_SLEEP |
| 0x02 | PREPARE_BUS_SLEEP |
| 0x80 | READY_SLEEP |
| 0x90 | NORMAL_OPERATION |
| 0xA0 | REPEAT_MESSAGE |
| 0xFF | Wert ungültig |

### STATUS_NIC

| WERT | TEXT |
| --- | --- |
| 0x00 | NIC off, AFU off |
| 0x01 | NIC off, AFU on |
| 0x02 | NIC on, AFU off |
| 0x07 | Ungültig |

### STATUS_PLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht Verfügbar |
| 0x01 | Wählhebel gesperrt |
| 0x02 | Wählhebel freigegeben |
| 0x03 | Ungültig |

### STATUS_PRESSURE_SW_1

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter AUS |
| 0x01 | Öldruckschalter AN |

### STATUS_PRESSURE_SW_2

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter 2 AUS |
| 0x01 | Öldruckschalter 2 AN |

### STATUS_PRESSURE_SW_3

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter 3 AUS |
| 0x01 | Öldruckschalter 3 AN |

### STATUS_PRESSURE_SW_4

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter AUS |
| 0x01 | Öldruckschalter AN |

### STATUS_PRESSURE_SW_5

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter AUS |
| 0x01 | Öldruckschalter AN |

### STATUS_REQAGS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Segel-Anforderung der AGS |
| 0x01 | Segel-Anforderung der AGS |

### STATUS_SAILING

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln gesperrt |
| 0x01 | Segeln freigegeben aber nicht aktiv |
| 0x02 | Wechsel in Segelmodus |
| 0x03 | Fahrzeug segelt |
| 0x04 | Wechsel zu segeln nicht aktiv |
| 0x0D | Segeln nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Ungültig |

### STATUS_SHIFT_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Schaltvorgang |
| 0x01 | Schaltvorgang aktiv |
| 0x03 | Ungültig |

### STATUS_SUB_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | TERMINATE |
| 0x02 | OFF_JUDGE |
| 0x03 | IG_OFF |
| 0x04 | IG_WAIT |
| 0x05 | IG_ON |
| 0x06 | IG_HOLD |
| 0xFF | Wert ungültig |

### STATUS_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | INIT |
| 0x02 | WAIT |
| 0x03 | RUNNING |
| 0x04 | SHUTDOWN |
| 0x05 | RESTART |
| 0x06 | TERMINATE |
| 0xFF | Wert ungültig |

### STATUS_TORQUE_CONVERTER_LOCKUP_CLUTCH

| WERT | TEXT |
| --- | --- |
| 0x00 | LOCKUP_OPEN |
| 0x01 | SLIP_CONTROL_LOW |
| 0x03 | LOCKUP_CLOSE_LOW |
| 0x04 | LOCKUP_CLOSE_HIGH |
| 0x08 | CHANGE TO OPEN00 |
| 0x09 | CHANGE TO SLIP CONTORL LOW |
| 0x0B | CHANGE TO CLOSED LOW |
| 0x0C | CHANGE TO CLOSED HIGH |
| 0x0F | Invalid |

### STAT_GEAR_DISPLAY

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anzeige |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 (Nur für 8-Gang Getriebe) |
| 0x08 | Gang 8 (Nur für 8-Gang Getriebe) |

### STEUERN_EOP_RELAY

| WERT | TEXT |
| --- | --- |
| 0x00 | EOP Relais ausschalten |
| 0x01 | EOP Relais einschalten |

### ST_KL

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F Change |
| 0x04 | KL30F On |
| 0x05 | KL30B Change |
| 0x06 | KL30B On |
| 0x07 | KLR change |
| 0x08 | KLR On |
| 0x09 | KL15 Change |
| 0x0A | KL15 On |
| 0x0B | KL50 delay |
| 0x0C | KL50 change |
| 0x0D | KL50 On |
| 0x0E | Error |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### ST_PLK

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | LOCK |
| 0x02 | UNLOCK |
| 0x03 | INVALID |
| 0xFF | Wert ungültig |

### TAB_COAST_ERR

| WERT | TEXT |
| --- | --- |
| 0xFD | Funtionsschnittstelle nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Wert ungültig |

### TAB_EGS_OELPUMPE

| WERT | TEXT |
| --- | --- |
| 0x01 | Elektromagnetische Ölpumpe |
| 0x02 | Elektromotor Ölpumpe |
| 0xFF | Ungültig |

### TAB_EMOP_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | EMOP: OFF |
| 0x01 | EMOP: ON |

### TAB_EMOP_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | EMOP STOP |
| 0x01 | EMOP RUNNING |
| 0xff | EMOP FAILED |

### TAB_GANGANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung, P, R, N, D |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |
| 0x07 | 7 |
| 0x08 | 8 |
| 0xFF | Signal ungültig |

### TAB_GETRIEBE_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x01 | 6-Gang |
| 0x02 | 8-Gang |
| 0xFF | Ungültig |

### TAB_ISTGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Neutral |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 |
| 0x08 | Gang 8 |
| 0x0A | Rückwärtsgang |
| 0x0B | Parken |
| 0xFF | ungültiger Wert |

### TAB_SCHALTWIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schaltpaddles nicht betätigt |
| 0x01 | Schaltwippe Tip minus betätigt |
| 0x02 | Schaltwippe Tip plus betätigt |
| 0x03 | Fehler Schaltpaddle |
| 0x05 | Schaltwippe Tip minus betätigt und entprellt |
| 0x06 | Schaltwippe Tip plus betätigt und entprellt |
| 0xFF | Signal ungültig |

### TAB_SHIFT_LOCK_SOLENOID

| WERT | TEXT |
| --- | --- |
| 0x00 | Shiftlock Magnet AUS |
| 0x01 | Shiftlock Magnet AN |

### TAB_SHIFT_SOLENOID_S1

| WERT | TEXT |
| --- | --- |
| 0x00 | Magnetventil S1 AUS |
| 0x01 | Magnetventil S1 AN |

### TAB_SHIFT_SOLENOID_S2

| WERT | TEXT |
| --- | --- |
| 0x00 | Magnet S2 AUS |
| 0x01 | Magnet S2 AN |

### TAB_STATUS_ST_BRG_DV

| WERT | TEXT |
| --- | --- |
| 0x00 | - |
| 0xFF | Wert ungültig |

### TAB_STATUS_ST_DRV_VEH

| WERT | TEXT |
| --- | --- |
| 0x1F | Combustion Engine Active |
| 0xE0 | Electric Machine Active |
| 0xFF | Signal Init Invalid |

### TAB_STEUERN_LERNFKT_RUECKSETZEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Hinter- oder Vorderachse  zurücksetzen |
| 0x02 | Gelernte  CAN Botschaften  zurücksetzen |
| 0x03 | Hinter- oder Vorderachse und gelernte CAN Botschaften zurücksetzen |

### TAB_STEUERN_SHIFT_LOCK_SOLENOID

| WERT | TEXT |
| --- | --- |
| 0x00 | Shift Lock Magnet AUS |
| 0x01 | Shift Lock Magnet AN |

### TAB_STEUERN_SOLENOID_S1

| WERT | TEXT |
| --- | --- |
| 0x00 | Magnet S1 AUS |
| 0x01 | Magnet S1 AN |

### TAB_STEUERN_SOLENOID_S2

| WERT | TEXT |
| --- | --- |
| 0x00 | Magnet S2 AUS |
| 0x01 | Magnet S2 AN |

### TAB_TARGET_GEAR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Gang |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 |
| 0x08 | Gang 8 |

### TAB_WAEHLHEBELANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung |
| 0x01 | P |
| 0x02 | R |
| 0x03 | N |
| 0x04 | D |
| 0xFF | Signal ungültig |

### TAB_WAEHLHEBELSTELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | P |
| 0x01 | R |
| 0x02 | N |
| 0x03 | D |
| 0x04 | M- |
| 0x05 | M+ |
| 0x06 | M/S |
| 0x07 | M |
| 0x0A | V |
| 0x0B | VV |
| 0x0C | H |
| 0x0E | HH |
| 0xFF | Signal ungültig |

### TAB_WANDLERKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Wandlerkupplung geöffnet |
| 0x01 | Wandlerkupplung geregelt low |
| 0x02 | Wandlerkupplung geregelt high |
| 0x03 | Wandlerkupplung geschlossen low |
| 0x04 | Wandlerkupplung geschlossen high |
| 0x08 | Wandlerkupplung Übergang nach auf |
| 0x09 | Wandlerkupplung Übergang nach geregelt low |
| 0x0A | Wandlerkupplung Übergang nach geregelt high |
| 0x0B | Wandlerkupplung Übergang nach zu low |
| 0x0C | Wandlerkupplung Übergang nach zu high |
| 0xFF | Signal ungültig |

### TARGET_GEAR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anzeige |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 (Nur für 8-Gang Getriebe) |
| 0x08 | Gang 8 (Nur für 8-Gang Getriebe) |

### TORQUE_CONTROL_REQUEST_LESEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Ansteigendes Drehmoment |
| 0x02 | Reduziertes/Limitiertes Drehmoment |

### WAKE_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON |
| 0xFF | Wert ungültig |
