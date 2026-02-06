# sas_i1.prg

## General

|  |  |
| --- | --- |
| File | sas_i1.prg |
| Type | PRG |
| Jobs | 37 |
| Tables | 42 |
| Origin | BMW EV-322 Wolfgang_Laengst |
| Revision | 2.000 |
| Author | BMW_AG EV_322 Philipp_Gutbier, TRW TEE Marek_Francki |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sonderausstattungssteuergerät EF |  |  |
| ORIGIN | string | BMW EV-322 Wolfgang_Laengst |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | BMW_AG EV_322 Philipp_Gutbier, TRW TEE Marek_Francki |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.62 |  |  |
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

### ARG_0XA200_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX_DATENSATZ | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | INDEX_DATENSATZ |

### ARG_0XA201

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KMAIN | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | KMAIN |
| KSUB | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | KSUB |

### ARG_0XABC7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VDC0_KANAL | + | - | 0-n | high | unsigned char | - | TAB_VDC0_FESTSTROM | - | - | - | - | - | Anzusteuerndes VDC Ventil |
| SOLLSTROM | + | - | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sollstrom wird für max. 20 Sek. eingestellt. |

### ARG_0XABC8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VDC0_MODUS | + | - | 0-n | high | unsigned char | - | TAB_VDC0_MODI | - | - | - | - | - | VDC0_MODI |

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
| 0x022200 | Energiesparmode aktiv | 0 |
| 0x022208 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022209 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02220A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02220B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02220C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF22 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030800 | FAS - Globale Sicherheitsabschaltung | 0 |
| 0x030801 | FAS - ACC/DCC - Sicherheitsabschaltung | 0 |
| 0x030802 | FAS - SpeedLimiter - Sicherheitsabschaltung | 0 |
| 0x030803 | FAS - Frontschutz - Automatische Deaktivierung Aktive Gefahrenbremsung | 0 |
| 0x030804 | FAS - Frontschutz - Sicherheitsabschaltung | 0 |
| 0x030806 | FAS - Parkfunktion Längsführung - Sicherheitsabschaltung | 0 |
| 0x030820 | FAS - Abschaltung - Unerwartete Reaktion eines Kommunikationspartners | 1 |
| 0x030852 | FAS - Systemgrenzen für Testbetrieb aufgeweitet | 0 |
| 0x482E82 | VDC - Ventilspule hinten links Kurzschluss Ventile | 0 |
| 0x482E83 | VDC - Ventilspule hinten links Kurzschluss KL30 | 0 |
| 0x482E84 | VDC - Ventilspule hinten links Kurzschluss KL31 | 0 |
| 0x482E85 | VDC - Ventilspule hinten links offene Leitung | 0 |
| 0x482E86 | VDC - Ventilspule hinten rechts Kurzschluss Ventile | 0 |
| 0x482E87 | VDC - Ventilspule hinten rechts Kurzschluss KL30 | 0 |
| 0x482E88 | VDC - Ventilspule hinten rechts Kurzschluss KL31 | 0 |
| 0x482E89 | VDC - Ventilspule hinten rechts offene Leitung | 0 |
| 0x482E8A | VDC - Ventilspule vorn links Kurzschluss Ventile | 0 |
| 0x482E8B | VDC - Ventilspule vorn links Kurzschluss KL30 | 0 |
| 0x482E8C | VDC - Ventilspule vorn links Kurzschluss KL31 | 0 |
| 0x482E8D | VDC - Ventilspule vorn links offene Leitung | 0 |
| 0x482E8E | VDC - Ventilspule vorn rechts Kurzschluss Ventile | 0 |
| 0x482E8F | VDC - Ventilspule vorn rechts Kurzschluss KL30 | 0 |
| 0x482E90 | VDC - Ventilspule vorn rechts Kurzschluss KL31 | 0 |
| 0x482E91 | VDC - Ventilspule vorn rechts offene Leitung | 0 |
| 0x482E92 | Spannungsversorgung - Lokale Überspannung | 0 |
| 0x482E93 | Spannungsversorgung - Lokale Unterspannung | 0 |
| 0x482E94 | Spannungsversorgung - Globale Überspannung intern | 1 |
| 0x482E95 | Spannungsversorgung - Globale Überspannung extern | 1 |
| 0x482E96 | Spannungsversorgung - Globale Unterspannung intern | 1 |
| 0x482E97 | Spannungsversorgung - Globale Unterspannung extern | 1 |
| 0x482E9B | Steuergerät intern Interner Basis-SW-Fehler | 0 |
| 0x482EC2 | Steuergerät intern - Watchdog - Fehler Task Aktivierung | 0 |
| 0x482ECD | Bus-Error on SF-CAN | 0 |
| 0x482EDD | Steuergerät intern - MCU - defekt | 0 |
| 0x482EDE | Steuergerät intern - Flash - defekt | 0 |
| 0x482EDF | Steuergerät intern - CAN - defekt | 0 |
| 0x482EE0 | Steuergerät intern - Analog Digitalwandler - defekt | 0 |
| 0x482EE1 | Steuergerät intern - Watchdog -defekt | 0 |
| 0x482EE2 | Steuergerät intern - STBM - Fehler | 0 |
| 0x482EE3 | Steuergerät intern - FlexRay - defekt | 0 |
| 0x482EE5 | Steuergerät intern - MCU - Störung | 0 |
| 0x482EE8 | Steuergerät intern - NVM - Störung | 0 |
| 0x482EF0 | Steuergerät intern - Power Supply ASIC - defekt | 0 |
| 0x482EF1 | Steuergerät intern - Interne Versorgungsspannung außerhalb des zulässigen Wertebereichs | 0 |
| 0x482F0A | Steuergerät intern - EngineeringTrimMode aktiv | 0 |
| 0x482F0B | Steuergerät intern - DMA Fehler | 0 |
| 0x482F0F | Steuergerät intern Tasks asynchron zu FlexRay | 0 |
| 0x482F69 | Steuergerät intern - Externer Watchdog Reset | 0 |
| 0x482F7F | Steuergerät intern - ECU - Lockstep Error | 0 |
| 0xD1841F | FLEXRAY Bus 1 | 0 |
| 0xD18420 | FLEXRAY Controller Error Bus 1 | 0 |
| 0xD18BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD19402 | Botschaftsfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) - Checksumme | 1 |
| 0xD19411 | Botschaftsfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Timeout | 1 |
| 0xD19412 | Botschaftsfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Checksumme | 1 |
| 0xD19413 | Botschaftsfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Alive | 1 |
| 0xD19418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Timeout | 1 |
| 0xD19419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Checksumme | 1 |
| 0xD1941A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Alive | 1 |
| 0xD19428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD1942C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD19441 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Timeout | 1 |
| 0xD19445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Checksumme | 1 |
| 0xD19450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 |
| 0xD19451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 |
| 0xD19476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Ungültig | 1 |
| 0xD19495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Checksumme | 1 |
| 0xD19496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Alive | 1 |
| 0xD1949B | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Qualifier | 1 |
| 0xD1949D | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Qualifier | 1 |
| 0xD1949E | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Qualifier | 1 |
| 0xD194A6 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Timeout | 1 |
| 0xD194A7 | Signalfehler  (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Ungültig | 1 |
| 0xD194AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD194B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xD194B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Undefiniert | 1 |
| 0xD194B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Ungültig | 1 |
| 0xD194B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD194B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD194BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD194BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD194BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xD194C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD194C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 |
| 0xD194C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xD194C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xD194D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Timeout | 1 |
| 0xD194D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Checksumme | 1 |
| 0xD194D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Alive | 1 |
| 0xD194DC | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Ungültig | 1 |
| 0xD194E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Checksumme | 1 |
| 0xD194E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xD194E9 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Checksumme | 1 |
| 0xD194EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Alive | 1 |
| 0xD194EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 |
| 0xD194F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD194F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD194F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD194F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Checksumme | 1 |
| 0xD194FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xD194FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xD194FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 |
| 0xD19508 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Ungültig | 1 |
| 0xD1950A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Timeout | 1 |
| 0xD1950B | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Checksumme | 1 |
| 0xD1950C | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Alive | 1 |
| 0xD19510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Ungültig | 1 |
| 0xD19511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Undefiniert | 1 |
| 0xD19513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Alive | 1 |
| 0xD1951C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xD19526 | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Ungültig | 1 |
| 0xD19528 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Timeout | 1 |
| 0xD19529 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Checksumme | 1 |
| 0xD1952A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Alive | 1 |
| 0xD1952E | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Ungültig | 1 |
| 0xD19538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Timeout | 1 |
| 0xD19539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Checksumme | 1 |
| 0xD1953A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Alive | 1 |
| 0xD1953E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) - Ungültig | 1 |
| 0xD19542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 |
| 0xD19543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 |
| 0xD19544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xD19548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xD19552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Ungültig | 1 |
| 0xD19557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Timeout | 1 |
| 0xD19558 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Timeout | 1 |
| 0xD19559 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Checksumme | 1 |
| 0xD1955A | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Alive | 1 |
| 0xD1955E | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Ungültig | 1 |
| 0xD1956C | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Ungültig | 1 |
| 0xD1956D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Timeout | 1 |
| 0xD19570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD19571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Checksumme | 1 |
| 0xD19572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Alive | 1 |
| 0xD19577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Qualifier | 1 |
| 0xD1957A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD19584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Ungültig | 1 |
| 0xD19586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Timeout | 1 |
| 0xD1958A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Ungültig | 1 |
| 0xD1958C | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD19590 | Signalfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xD195A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD195A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD195AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Timeout | 1 |
| 0xD195B0 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Ungültig | 1 |
| 0xD195B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Timeout | 1 |
| 0xD195B8 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Ungültig | 1 |
| 0xD195BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xD195BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Checksumme | 1 |
| 0xD195BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Alive | 1 |
| 0xD195C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xD195C4 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Timeout | 1 |
| 0xD195C8 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Ungültig | 1 |
| 0xD195DC | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Timeout | 1 |
| 0xD195DE | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Alive | 1 |
| 0xD1962D | Botschaftsfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Timeout | 1 |
| 0xD19634 | Botschaftsfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Timeout | 1 |
| 0xD19637 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Timeout | 1 |
| 0xD19640 | Signalfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Ungültig | 1 |
| 0xD19646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Timeout | 1 |
| 0xD19647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Checksumme | 1 |
| 0xD19648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Alive | 1 |
| 0xD1964C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Ungültig | 1 |
| 0xD19672 | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Qualifier | 1 |
| 0xD19677 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Qualifier | 1 |
| 0xD1967B | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Timeout | 1 |
| 0xD1967E | Botschaftsfehler (Fahrerlebnis Modus, ID: DXP_MOD) - Timeout | 1 |
| 0xD19682 | Botschaftsfehler (Kennzahl Umrechnung Geschwindigkeit, ID:CHNO_COV_V) - Timeout | 1 |
| 0xD19684 | Botschaftsfehler (Koordination Lenkmoment und Summenbremsmoment, ID: COOR_STMOM_DRS_SUM_BRTORQ) - Timeout | 1 |
| 0xD19697 | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Timeout | 1 |
| 0xD1969C | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Timeout | 1 |
| 0xD1969D | Botschaftsfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Timeout | 1 |
| 0xD196A7 | Botschaftsfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Timeout | 1 |
| 0xD196A9 | Botschaftsfehler (Status Spurverlassenswarnsystem, ID: ST_TLC) - Timeout | 1 |
| 0xD196AB | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Ungültig | 1 |
| 0xD196B4 | Botschaftsfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Timeout | 1 |
| 0xD196C0 | Botschaftsfehler (Koordination Lenkmoment und Summenbremsmoment, ID: COOR_STMOM_DRS_SUM_BRTORQ) - Checksumme | 1 |
| 0xD196D7 | Botschaftsfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Checksumme | 1 |
| 0xD196DA | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Checksumme | 1 |
| 0xD196DC | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Timeout | 1 |
| 0xD196DD | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Checksumme | 1 |
| 0xD196DE | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Alive | 1 |
| 0xD196E1 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Ungültig | 1 |
| 0xD196EF | Botschaftsfehler (Konfiguration Schalter Fahrdynamik 2, ID: SU_SW_DRDY_2) - Timeout | 1 |
| 0xD196F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Timeout | 1 |
| 0xD196F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Alive | 1 |
| 0xD196F7 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Checksumme | 1 |
| 0xD196F8 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) Checksumme | 1 |
| 0xD1970F | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Alive | 1 |
| 0xD19711 | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Ungültig | 1 |
| 0xD19714 | Signalfehler (Fahrerlebnis Modus, ID: DXP_MOD) - Ungültig | 1 |
| 0xD19718 | Signalfehler (Kennzahl Umrechnung Geschwindigkeit, ID:CHNO_COV_V) - Ungültig | 1 |
| 0xD1971A | Signalfehler (Koordination Lenkmoment und Summenbremsmoment, ID: COOR_STMOM_DRS_SUM_BRTORQ) - Ungültig | 1 |
| 0xD1972A | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Alive | 1 |
| 0xD19732 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Timeout | 1 |
| 0xD19733 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Checksumme | 1 |
| 0xD19734 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Alive | 1 |
| 0xD19736 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) - Ungültig | 1 |
| 0xD19737 | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Alive | 1 |
| 0xD1973F | Botschaftsfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Alive | 1 |
| 0xD19744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD19745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 |
| 0xD19746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xD19749 | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Timeout | 1 |
| 0xD1974A | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Checksumme | 1 |
| 0xD1974B | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Alive | 1 |
| 0xD1974D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Checksumme | 1 |
| 0xD1974E | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Alive | 1 |
| 0xD19751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Checksumme | 1 |
| 0xD19752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Alive | 1 |
| 0xD19753 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Alive | 1 |
| 0xD19754 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) Alive | 1 |
| 0xD19768 | Botschaftsfehler (Koordination Lenkmoment und Summenbremsmoment, ID: COOR_STMOM_DRS_SUM_BRTORQ) - Alive | 1 |
| 0xD1977A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Ungültig | 1 |
| 0xD1977C | Signalfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Ungültig | 1 |
| 0xD19782 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Timeout | 1 |
| 0xD19786 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Ungültig | 1 |
| 0xD19788 | Signalfehler (Status Spurverlassenswarnsystem, ID: ST_TLC) - Ungültig | 1 |
| 0xD1978B | Signalfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) - Ungültig | 1 |
| 0xD19797 | Signalfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Ungültig | 1 |
| 0xD1979A | Signalfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Ungültig | 1 |
| 0xD1979B | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Ungültig | 1 |
| 0xD197A8 | Signalfehler (Konfiguration Schalter Fahrdynamik 2, ID: SU_SW_DRDY_2) - Ungültig | 1 |
| 0xD197B2 | Signalfehler (Fahrerlebnis Modus, ID: DXP_MOD) - Qualifier | 1 |
| 0xD197B7 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Timeout | 1 |
| 0xD197B8 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Checksumme | 1 |
| 0xD197B9 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Alive | 1 |
| 0xD197BA | Signalfehler (Koordination Lenkmoment und Summenbremsmoment, ID: COOR_STMOM_DRS_SUM_BRTORQ) - Qualifier | 1 |
| 0xD197BB | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Ungültig | 1 |
| 0xD197C1 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Timeout | 1 |
| 0xD197C2 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Checksumme | 1 |
| 0xD197C3 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Alive | 1 |
| 0xD197C5 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Ungültig | 1 |
| 0xD197C6 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Undefiniert | 1 |
| 0xD197CB | Signalfehler (Status Spurverlassenswarnsystem, ID: ST_TLC) - Qualifier | 1 |
| 0xD197D5 | Signalfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) - Qualifier | 1 |
| 0xD197DF | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Qualifier | 1 |
| 0xD197E4 | Botschaftsfehler (Lampenzustand, ID: LAMPENZUSTAND) - Timeout | 1 |
| 0xD197E7 | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Qualifier | 1 |
| 0xD197EE | Signalfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Qualifier | 1 |
| 0xD197F1 | Signalfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Qualifier | 1 |
| 0xD197F2 | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Qualifier | 1 |
| 0xD197F3 | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Qualifier | 1 |
| 0xD197F5 | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Qualifier | 1 |
| 0xD197FB | Signalfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Qualifier | 1 |
| 0xD19800 | Signalfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) Qualifier | 1 |
| 0xD19803 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) Qualifier | 1 |
| 0xD19806 | Signalfehler (Konfiguration Schalter Fahrdynamik 2, ID: SU_SW_DRDY_2) - Qualifier | 1 |
| 0xD19808 | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) Qualifier | 1 |
| 0xD1980B | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Qualifier | 1 |
| 0xD1980C | Signalfehler (***Objektdaten KAFAS***, ID: ***OBJDT_KAFAS***) Qualifier | 1 |
| 0xD19811 | Botschaftsfehler (Navigation System Information, ID: NAV_SYS_INF) - Timeout | 1 |
| 0xD19815 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) - Ungültig | 1 |
| 0xD1981F | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) - Ungültig | 1 |
| 0xD1983F | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) - Ungültig | 1 |
| 0xD19872 | Signalfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Ungültig | 1 |
| 0xD19876 | Signalfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Ungültig | 1 |
| 0xD1987D | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Ungültig | 1 |
| 0xD19896 | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Undefiniert | 1 |
| 0xD198A6 | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) Qualifier | 1 |
| 0xD198A7 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) Qualifier | 1 |
| 0xD198A8 | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) Qualifier | 1 |
| 0xD198A9 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) Qualifier | 1 |
| 0xD198AA | Signalfehler (Blinken, ID: BLINKEN) Qualifier | 1 |
| 0xD198AB | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Qualifier | 1 |
| 0xD198AD | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Qualifier | 1 |
| 0xD198B2 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Qualifier | 1 |
| 0xD198B5 | Botschaftsfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Timeout | 1 |
| 0xD198B9 | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Ungültig | 1 |
| 0xD198D7 | Botschaftsfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Timeout | 1 |
| 0xD198D9 | Signalfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Ungültig | 1 |
| 0xD198DC | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Timeout | 1 |
| 0xD198DD | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Checksumme | 1 |
| 0xD198DE | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Alive | 1 |
| 0xD198E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Timeout | 1 |
| 0xD198E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Timeout | 1 |
| 0xD198F7 | Signalfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Qualifier | 1 |
| 0xD19901 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Timeout | 1 |
| 0xD19903 | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Ungültig | 1 |
| 0xD19914 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) - Ungültig | 1 |
| 0xD19922 | Botschaftsfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Timeout | 1 |
| 0xD19926 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Ungültig | 1 |
| 0xD19932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 |
| 0xD19936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 |
| 0xD19995 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Ungültig | 1 |
| 0xD19996 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Ungültig | 1 |
| 0xD199AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD199BF | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Timeout | 1 |
| 0xD199C0 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Checksumme | 1 |
| 0xD199C1 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Alive | 1 |
| 0xD199C3 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Ungültig | 1 |
| 0xD199E8 | Botschaftsfehler (Anforderung Warnbremskoordinator, ID: RQ_WBK) Timeout | 1 |
| 0xD199EA | Botschaftsfehler (Objektdaten Frontraumüberwachung Radar**, ID: OBJDT_HDWOBS_RADA_**) Timeout | 1 |
| 0xD19A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Timeout | 1 |
| 0xD19A09 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Checksumme | 1 |
| 0xD19A0A | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Alive | 1 |
| 0xD19A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Ungültig | 1 |
| 0xD19A18 | Botschaftsfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Alive | 1 |
| 0xD19A1A | Signalfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Ungültig | 1 |
| 0xD19A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 |
| 0xD19A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 |
| 0xD19A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Qualifier | 1 |
| 0xD19A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Qualifier | 1 |
| 0xD19A61 | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) - Qualifier | 1 |
| 0xD19A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Qualifier | 1 |
| 0xD19A6E | Botschaftsfehler (Anforderung Warnbremskoordinator, ID: RQ_WBK) Alive | 1 |
| 0xD19A91 | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Checksumme | 1 |
| 0xD19AA5 | Botschaftsfehler (Anforderung Warnbremskoordinator, ID: RQ_WBK) Checksumme | 1 |
| 0xD19AC7 | Signalfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) Qualifier | 1 |
| 0xD19AC8 | Signalfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Qualifier | 1 |
| 0xD19AC9 | Signalfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Qualifier | 1 |
| 0xD19ACA | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) - Qualifier | 1 |
| 0xD19ACB | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Qualifier | 1 |
| 0xD19ACC | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Qualifier | 1 |
| 0xD19ACD | Signalfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Qualifier | 1 |
| 0xD19ACE | Signalfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Qualifier | 1 |
| 0xD19AD6 | Signalfehler (Objektdaten Frontraumüberwachung Radar**, ID: OBJDT_HDWOBS_RADA_**) Qualifier | 1 |
| 0xD19AF6 | Signalfehler (Anforderung Warnbremskoordinator, ID: RQ_WBK) Ungültig | 1 |
| 0xD19AF9 | Signalfehler (Anforderung Warnbremskoordinator, ID: RQ_WBK) Qualifier | 1 |
| 0xD19AFC | Signalfehler (Objektdaten Frontraumüberwachung Radar**, ID: OBJDT_HDWOBS_RADA_**) Ungültig | 1 |
| 0xD19B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xD19B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Checksumme | 1 |
| 0xD19B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xD19B36 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Timeout | 1 |
| 0xD19B37 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Checksumme | 1 |
| 0xD19B38 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Alive | 1 |
| 0xD19B3A | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Timeout | 1 |
| 0xD19B3B | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Checksumme | 1 |
| 0xD19B3C | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Alive | 1 |
| 0xD19B3E | Signalfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Ungültig | 1 |
| 0xD19B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Timeout | 1 |
| 0xD19B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Checksumme | 1 |
| 0xD19B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 1 |
| 0xD19B57 | Botschaftsfehler (Status Hydraulikfunktion, ID: ST_HYDFN) - Timeout | 1 |
| 0xD19B5B | Signalfehler (Status Hydraulikfunktion, ID: ST_HYDFN) - Ungültig | 1 |
| 0xD19C00 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Timeout | 1 |
| 0xD19C01 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Checksumme | 1 |
| 0xD19C02 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Alive | 1 |
| 0xD19C03 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Timeout | 1 |
| 0xD19C04 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Checksumme | 1 |
| 0xD19C05 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Alive | 1 |
| 0xD19C18 | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Timeout | 1 |
| 0xD1A508 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Qualifier | 1 |
| 0xD1A512 | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Qualifier | 1 |
| 0xD1A518 | Botschaftsfehler (***Objektdaten KAFAS***, ID: ***OBJDT_KAFAS***) Timeout | 1 |
| 0xD1A51B | Signalfehler (***Objektdaten KAFAS***, ID: ***OBJDT_KAFAS***) Ungültig | 1 |
| 0xD1AC0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD1AC0F | Signalfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Ungültig | 1 |
| 0xD1AC11 | Signalfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Ungültig | 1 |
| 0xD1AC41 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Ungültig | 1 |
| 0xD1AC60 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Qualifier | 1 |
| 0xD1AC65 | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Qualifier | 1 |
| 0xD1AC67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Qualifier | 1 |
| 0xD1AC75 | Signalfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Ungültig | 1 |
| 0xD1AC77 | Signalfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Qualifier | 1 |
| 0xD1AC81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Ungültig | 1 |
| 0xD1AC8D | Signalfehler (Status Hydraulikfunktion, ID: ST_HYDFN) - Qualifier | 1 |
| 0xD1AC8F | Signalfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Qualifier | 1 |
| 0xD1AD01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Qualifier | 1 |
| 0xD1AD02 | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Qualifier | 1 |
| 0xD1AD06 | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Qualifier | 1 |
| 0xD1AD07 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Qualifier | 1 |
| 0xD1AD0E | Botschaftsfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Timeout | 1 |
| 0xD1AD11 | Signalfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Ungültig | 1 |
| 0xD1AD13 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Qualifier | 1 |
| 0xD1AD15 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Checksumme | 1 |
| 0xD1AD16 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Alive | 1 |
| 0xD1AD17 | Signalfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Ungültig | 1 |
| 0xD1AD1E | Signalfehler (Bedienung Tempomat, ID: OP_CCTR ) - Qualifier | 1 |
| 0xD1AD21 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Qualifier | 1 |
| 0xD1AD24 | Signalfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Qualifier | 1 |
| 0xD1AD25 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Timeout | 1 |
| 0xD1AD27 | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Alive | 1 |
| 0xD1AD2B | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Timeout | 1 |
| 0xD1AD2E | Signalfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Ungültig | 1 |
| 0xD1AD31 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Timeout | 1 |
| 0xD1AD32 | Signalfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Qualifier | 1 |
| 0xD1AD33 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Alive | 1 |
| 0xD1AD34 | Signalfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Ungültig | 1 |
| 0xD1AD36 | Signalfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Qualifier | 1 |
| 0xD1AD3A | Signalfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Ungültig | 1 |
| 0xD1AD54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Qualifier | 1 |
| 0xD1AD58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Qualifier | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1603 | SPANNUNG_VDD_3V3 | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1604 | SPANNUNG_VDD_5V | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1605 | SPANNUNG_BOOST_KL15N | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1606 | SPANNUNG_KL15N | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1607 | REGISTER_PSTAT1 | HEX | High | unsigned int | - | - | - | - |
| 0x1608 | REGISTER_PSTAT2 | HEX | High | unsigned int | - | - | - | - |
| 0x1609 | REGISTER_PMON | HEX | High | unsigned int | - | - | - | - |
| 0x160A | NVM_DYN_INTEGRITY_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x160B | EXCEPTION_SYMPTOM | 0-n | High | 0xFF | TAB_EXCEPTION_SYMPTOM | - | - | - |
| 0x160C | REGISTER_TJA1080 | HEX | High | unsigned int | - | - | - | - |
| 0x160D | REGISTER_FR_POCR | HEX | High | unsigned int | - | - | - | - |
| 0x160E | REGISTER_FR_GIFER | HEX | High | unsigned int | - | - | - | - |
| 0x160F | REGISTER_FR_PIFR0 | HEX | High | unsigned int | - | - | - | - |
| 0x1610 | REGISTER_FR_PIFR1 | HEX | High | unsigned int | - | - | - | - |
| 0x1611 | REGISTER_FR_CHIERFR | HEX | High | unsigned int | - | - | - | - |
| 0x1612 | REGISTER_FR_CASERCR | HEX | High | unsigned int | - | - | - | - |
| 0x1613 | REGISTER_FR_PSR0 | HEX | High | unsigned int | - | - | - | - |
| 0x1614 | REGISTER_FR_PRS1 | HEX | High | unsigned int | - | - | - | - |
| 0x1615 | REGISTER_FR_PSR2 | HEX | High | unsigned int | - | - | - | - |
| 0x1616 | REGISTER_FR_PSR3 | HEX | High | unsigned int | - | - | - | - |
| 0x1617 | TSM_ERROR_ID | HEX | High | unsigned char | - | - | - | - |
| 0x1618 | TSM_THREAD_ID | HEX | High | unsigned char | - | - | - | - |
| 0x1619 | TSM_TASK_ID | HEX | High | unsigned char | - | - | - | - |
| 0x161A | TSM_TOKEN | HEX | High | signed long | - | - | - | - |
| 0x161B | TSM_TIME | HEX | High | signed long | - | - | - | - |
| 0x161C | TSM_FLEXRAYCYCLE_BASE | HEX | High | unsigned char | - | - | - | - |
| 0x161D | URSAECHLICHE_SOFTWARE_ID_COMBINED_EVENT | 0-n | High | 0xFF | TAB_SOFTWARE_IDS_COMBINED_EVENTS | - | - | - |
| 0x1621 | EXCEPTION_DEBUG_DATA | Text | High | 24 | - | - | - | - |
| 0x1622 | VEHICLE_IDENTIFICATION_NUMBER | Text | High | 8 | - | - | - | - |
| 0x1625 | VDC_DETECTION_DATA | HEX | High | signed long | - | - | - | - |
| 0x1626 | TRW_DEV_EVENT_DATA | Text | High | 24 | - | - | - | - |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x285F | URSAECHLICHER_FEHLER | HEX | High | unsigned char | - | - | - | - |
| 0x2860 | USP_KALTSTART_VORHANDEN | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2861 | USP_MSA_START_VORHANDEN | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2862 | USP_MOTOR_LAEUFT | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2864 | USP_GLOBALE_BITS_VERFUEGBAR | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x2877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | High | unsigned char | - | 1.0 | 1.0 | 1.0 |
| 0x2878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 1.0 |
| 0x2879 | WUNSCH_BREMSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 1.0 |
| 0x287A | ERROR_ID_FASCFI | 0-n | High | 0xFF | TAB_ERRID_FASCFI | - | - | - |
| 0x287B | ERROR_DUMP_32BIT_FASCFI | HEX | High | signed long | - | - | - | - |
| 0x287C | ERROR_ID_FASCFO | 0-n | High | 0xFF | TAB_ERRID_FASCFO | - | - | - |
| 0x287D | ERROR_DUMP_32BIT_FASCFO | HEX | High | signed long | - | - | - | - |
| 0x287E | ERROR_ID_FASCEBC | 0-n | High | 0xFF | TAB_ERRID_FASCEBC | - | - | - |
| 0x287F | ERROR_DUMP_32BIT_FASCEBC | HEX | High | signed long | - | - | - | - |
| 0x2880 | ERROR_ID_FASSCG | 0-n | High | 0xFF | TAB_ERRID_FASSCG | - | - | - |
| 0x2881 | ERROR_DUMP_32BIT_FASSCG | HEX | High | signed long | - | - | - | - |
| 0x2882 | ERROR_ID_FASCBAS | 0-n | High | 0xFF | TAB_ERRID_FASCBAS | - | - | - |
| 0x2883 | ERROR_DUMP_32BIT_FASCBAS | HEX | High | signed long | - | - | - | - |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x4100 | KL30_SPANNUNG | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4200 | GESCHWINDIGKEIT | km/h | High | unsigned int | - | 2.0 | 1.0 | -50.0 |
| 0x4201 | LAENGSBESCHLEUNIGUNG | m/s² | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4202 | QUERBESCHLEUNIGUNG | m/s² | High | signed int | - | 1.0 | 2.0 | 0.0 |
| 0x4203 | GIERRATE | °/s | High | signed int | - | 1.3 | 1.0 | 0.0 |
| 0x4204 | RITZELWINKEL_VORDERACHSE | ° | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | LENKWINKEL_FAHRER | ° | High | signed long | - | 0.044 | 1.0 | 0.0 |
| 0x4401 | STD_AUSSENTEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4411 | FAHRZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5010 | STAT_ROHDATEN_WERT | HEX | High | signed long | - | - | - | - |
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
| 0x030807 | FAS - Funktionale Deaktivierung | 0 |
| 0x030808 | FAS - Antrieb - Betriebsbereitschaft | 1 |
| 0x030809 | FAS - Bremse - Betriebsbereitschaft | 1 |
| 0x03080C | FAS - Bedienfeld - HDC - fehlerhaft | 1 |
| 0x03080D | FAS - Inkorrekte Codierung Fahrfunktion | 1 |
| 0x03080E | FAS - KAFAS - Betriebsbereitschaft | 1 |
| 0x03080F | FAS - Abweichung VKombi gegen V-Ist zu groß | 1 |
| 0x030810 | FAS Anfahrbereitschaft nicht erfüllt | 1 |
| 0x030811 | FAS - Fahreranwesenheitssenorik fehlerhaft | 1 |
| 0x030812 | FAS - Fahrzeugsenorik Betriebsbereitschaft | 1 |
| 0x030813 | FAS - Frontschutz - Aktive Gefahrenbremsung ausgelöst | 1 |
| 0x030814 | FAS - pFGS - Verzögerungsanforderung | 0 |
| 0x030815 | FAS - CCM - Verzögerungsanforderung | 0 |
| 0x030816 | FAS - Antriebsaktuator - Betriebsbereitschaft | 1 |
| 0x030817 | FAS - Bremsaktuator - Betriebsbereitschaft | 1 |
| 0x030818 | FAS - Bedienung Lenkrad - Betriebsbereitschaft | 1 |
| 0x030819 | FAS - ACC Sensorik - Betriebsbereitschaft | 1 |
| 0x03081A | FAS - HDC - Betriebsbereitschaft | 1 |
| 0x03081B | FAS - Kombi - Betriebsbereitschaft | 0 |
| 0x03081C | FAS - Fehler Navigationsdaten | 0 |
| 0x03081D | FAS - Lenkung - Betriebsbereitschaft | 1 |
| 0x03081E | FAS Signalfehler - Undefinierter Inhalt oder unzureichende Qualität | 1 |
| 0x03081F | FAS - Frontschutz - Akutwarnung ausgelöst | 0 |
| 0x030850 | FAS - Frontschutz - Anbremsen Stufe 1 ausgelöst | 0 |
| 0x030851 | FAS - Frontschutz - Anbremsen Stufe 2 ausgelöst | 0 |
| 0x482E80 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x482E81 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x482E99 | Steuergerät intern - ADC Timeout | 0 |
| 0x482E9A | Steuergerät intern - PWM Module | 0 |
| 0x482E9C | FEE_E_WRITE_FAILED | 0 |
| 0x482E9D | FLS_E_UNEXPECTED_FLASH_ID | 0 |
| 0x482EA4 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x482EA6 | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x482EA7 | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x482EA9 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x482EAA | WDG_E_MISS_TRIGGER | 0 |
| 0x482EAB | CAN_E_TIMEOUT | 0 |
| 0x482EAC | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x482EAD | CANIF_E_STOPPED | 0 |
| 0x482EB0 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x482EB3 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x482EB4 | FLS_E_COMPARE_FAILED | 0 |
| 0x482EB5 | FLS_E_ERASE_FAILED | 0 |
| 0x482EB6 | FLS_E_READ_FAILED | 0 |
| 0x482EB7 | FLS_E_WRITE_FAILED | 0 |
| 0x482EB8 | FR_E_ACCESS | 0 |
| 0x482EB9 | FRIF_E_JLE_SYNC | 0 |
| 0x482EBA | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 |
| 0x482EBB | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x482EBC | MCU_E_CLOCK_FAILURE | 0 |
| 0x482EBD | MCU_E_LOCK_FAILURE | 0 |
| 0x482EBE | NVM_E_INTEGRITY_FAILED | 0 |
| 0x482EBF | NVM_E_REQ_FAILED | 0 |
| 0x482EC0 | WDG_E_DISABLE_REJECTED | 0 |
| 0x482EC1 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x482EC3 | WDGM_E_SET_MODE | 0 |
| 0x482EC5 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x482ECE | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x482EEB | Steuergerät intern - 3,3 V Versorgungsspannung außerhalb des zulässigen Wertebereichs | 0 |
| 0x482EEC | Steuergerät intern - 5V Versorgungsspannung außerhalb des zulässigen Wertebereichs | 0 |
| 0x482EEE | Steuergerät intern - 5V ADC Referenzspannung außerhalb des zulässigen Wertebereichs | 0 |
| 0x482EEF | Steuergerät intern - Power Supply ASIC Boosted Versorgungsspannung außerhalb des zulässigen Wertebereichs | 0 |
| 0x482EF2 | Steuergerät intern - SPI Timeout | 0 |
| 0x482F0C | Steuergerät intern - Task Monitoring Ausführungszeit Warnung | 0 |
| 0x482F11 | ERROR_MODE | 0 |
| 0x482F12 | EXT_WDOG_NOT_FUNCTIONAL | 0 |
| 0x482F13 | EXT_1V2_SUPPLY_NOT_AVAILABLE | 0 |
| 0x482F14 | FLS_E_TIMEOUT | 0 |
| 0x482F15 | FLS_E_HW_FAILED | 0 |
| 0x482F16 | VDC0 Codierfehler | 0 |
| 0x482F17 | Steuergerät intern - DMA Messfehler | 0 |
| 0x482F18 | Steuergerät intern - DMA mehrfacher Messfehler | 0 |
| 0x482F5C | Steuergerät intern - GBU Codierfehler | 0 |
| 0x482F5E | Steuergerät intern - DMA Schreiben verweigert | 0 |
| 0x482F68 | Steuergerät intern - TRW_Development_Event | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1603 | SPANNUNG_VDD_3V3 | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1604 | SPANNUNG_VDD_5V | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1605 | SPANNUNG_BOOST_KL15N | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1606 | SPANNUNG_KL15N | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1607 | REGISTER_PSTAT1 | HEX | High | unsigned int | - | - | - | - |
| 0x1608 | REGISTER_PSTAT2 | HEX | High | unsigned int | - | - | - | - |
| 0x1609 | REGISTER_PMON | HEX | High | unsigned int | - | - | - | - |
| 0x1617 | TSM_ERROR_ID | HEX | High | unsigned char | - | - | - | - |
| 0x1618 | TSM_THREAD_ID | HEX | High | unsigned char | - | - | - | - |
| 0x1619 | TSM_TASK_ID | HEX | High | unsigned char | - | - | - | - |
| 0x161A | TSM_TOKEN | HEX | High | signed long | - | - | - | - |
| 0x161B | TSM_TIME | HEX | High | signed long | - | - | - | - |
| 0x161C | TSM_FLEXRAYCYCLE_BASE | HEX | High | unsigned char | - | - | - | - |
| 0x1623 | ERROR_MODE_REASON | HEX | High | unsigned char | - | - | - | - |
| 0x1624 | CODING_PARAMETER_STATUS | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1626 | TRW_DEV_EVENT_DATA | Text | High | 51 | - | - | - | - |
| 0x2876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x2877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2879 | WUNSCH_BREMSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x287A | ERROR_ID_FASCFI | 0-n | High | 0xFF | TAB_ERRID_FASCFI | - | - | - |
| 0x287B | ERROR_DUMP_32BIT_FASCFI | HEX | High | signed long | - | - | - | - |
| 0x2886 | ERROR_ID_FASDSP | 0-n | High | 0xFF | TAB_ERRID_FASDSP | - | - | - |
| 0x2887 | ERROR_DUMP_32BIT_FASDSP | HEX | High | signed long | - | - | - | - |
| 0x2888 | ERROR_ID_FASOSEL | 0-n | High | 0xFF | TAB_ERRID_FASOSEL | - | - | - |
| 0x2889 | ERROR_DUMP_32BIT_FASOSEL | HEX | High | signed long | - | - | - | - |
| 0x4002 | CDD_MEAS_INFO | Text | High | 51 | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XA200_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWKW_VERSIONTYPE_KTYPE_KMAIN_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_SWKW_VERSIONTYPE_KTYPE_KMAIN |
| STAT_SWKW_VERSIONTYPE_KTYPE_KSUB_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SWKW_VERSIONTYPE_KTYPE_KSUB |
| STAT_SWKW_VERSIONTYPE_KTYPE_KCONFIG_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SWKW_VERSIONTYPE_KTYPE_KCONFIG |
| STAT_SWKW_VERSIONTYPE_KTYPE_KCCID_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_KTYPE_KCCID |
| STAT_SWKW_VERSIONTYPE_KTYPE_KEXT_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_KTYPE_Kext |
| STAT_SWKW_VERSIONTYPE_VTYPE_VMAIN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_VMAIN |
| STAT_SWKW_VERSIONTYPE_VTYPE_VSUB_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_Vsub |
| STAT_SWKW_VERSIONTYPE_VTYPE_VRELEASE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_VRELEASE |
| STAT_SWKW_VERSIONTYPE_VTYPE_VPATCH_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_VPATCH |

### RES_0XA201

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWKW_VERSIONTYPE_KTYPE_KMAIN_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_SWKW_VERSIONTYPE_KTYPE_KMAIN |
| STAT_SWKW_VERSIONTYPE_KTYPE_KSUB_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SWKW_VERSIONTYPE_KTYPE_KSUB |
| STAT_SWKW_VERSIONTYPE_KTYPE_KCONFIG_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SWKW_VERSIONTYPE_KTYPE_KCONFIG |
| STAT_SWKW_VERSIONTYPE_KTYPE_KCCID_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_KTYPE_KCCID |
| STAT_SWKW_VERSIONTYPE_KTYPE_KEXT_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_KTYPE_Kext |
| STAT_SWKW_VERSIONTYPE_VTYPE_VMAIN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_VMAIN |
| STAT_SWKW_VERSIONTYPE_VTYPE_VSUB_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_Vsub |
| STAT_SWKW_VERSIONTYPE_VTYPE_VRELEASE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_VRELEASE |
| STAT_SWKW_VERSIONTYPE_VTYPE_VPATCH_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SWKW_VERSIONTYPE_VTYPE_VPATCH |

### RES_0XD817_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDC_SOLLSTROM_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom des VDC Kanals vorne links |
| STAT_VDC_SOLLSTROM_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom des VDC Kanals vorne rechts |
| STAT_VDC_SOLLSTROM_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom des VDC Kanals hinten links |
| STAT_VDC_SOLLSTROM_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom des VDC Kanals hinten rechts |
| STAT_VDC_ISTSTROM_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Iststrom des VDC Kanals vorne links |
| STAT_VDC_ISTSTROM_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Iststrom des VDC Kanals vorne rechts |
| STAT_VDC_ISTSTROM_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Iststrom des VDC Kanals hinten links |
| STAT_VDC_ISTSTROM_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Iststrom des VDC Kanals hinten rechts |
| STAT_VDC_STATUS_VL | 0-n | high | unsigned char | - | TAB_VDC_STATUS | - | - | - | Status des VDC Kanals vorne links |
| STAT_VDC_STATUS_VR | 0-n | high | unsigned char | - | TAB_VDC_STATUS | - | - | - | Status des VDC Kanals vorne rechts |
| STAT_VDC_STATUS_HL | 0-n | high | unsigned char | - | TAB_VDC_STATUS | - | - | - | Status des VDC Kanals hinten links |
| STAT_VDC_STATUS_HR | 0-n | high | unsigned char | - | TAB_VDC_STATUS | - | - | - | Status des VDC Kanals hinten rechts |
| STAT_KLEMMEN | 0-n | high | unsigned char | - | TAB_JA_NEIN | - | - | - | Interner Status der Klemme KL15 0 = KL15 AUS 1 = KL15 AN |
| STAT_WHL_SPD_VL_WERT | rad/s | high | unsigned int | - | - | 0.0156 | 1.0 | -511.984 | Radgeschwindigkeit vorne links (von FlexRay) |
| STAT_WHL_SPD_VR_WERT | rad/s | high | unsigned int | - | - | 0.0156 | 1.0 | -511.984 | Radgeschwindigkeit vorne rechts (von FlexRay) |
| STAT_WHL_SPD_HL_WERT | rad/s | high | unsigned int | - | - | 0.0156 | 1.0 | -511.984 | Radgeschwindigkeit hinten links (von FlexRay) |
| STAT_WHL_SPD_HR_WERT | rad/s | high | unsigned int | - | - | 0.0156 | 1.0 | -511.984 | Radgeschwindigkeit hinten rechts (von FlexRay) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SWC_VERSIONEN_LESEN_INDEX_DATENSATZ | 0xA200 | - | Ein Argument (Index_Datensatz: Index_x = 0 bis n-1)   Rückgabewerte: Datensatz mit entsprechendem Index als Binärstream aus Sektion section_SwKv, der über SGBD aufgelöst wird. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA200_R | RES_0xA200_R |
| SWC_VERSIONEN_LESEN_KMAIN_KSUB | 0xA201 | - | Zwei Argumente (KMain, KSub)  Rückgabewerte: Relevante Datensätze als Binärstream aus Sektion section_SwKv, der über SGBD aufgelöst wird.  Argument KSub: 0:           alle Datensätze zu KMain 1-m:     Datensatz zu KMain, KSub | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA201 | RES_0xA201 |
| VDC0_FESTSTROM | 0xABC7 | - | Ansteuern der VDC0-Ventile mit einem einstellbaren Feststrom. | - | VDC Kanal | - | - | - | - | - | - | - | 31 | ARG_0xABC7_R | - |
| VDC0_FESTSTROM | 0xABC7 | - | Ansteuern der VDC0-Ventile mit einem einstellbaren Feststrom. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xABC7_R | - |
| VDC0_MODUS | 0xABC8 | - | Einstellen der VDC0-Modi für maximal 20 Sek. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xABC8_R | - |
| LERNDATEN_RUECKSETZEN | 0xABC9 | - | Lerndaten (der Infrastruktur Lernen) werden auf Standardwerte zurückgesetzt. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| VDC0_LESEN | 0xD817 | - | Auslesen des aktuellen Status jedes VDC0-Ventils (Status, Ist-Strom, Soll-Strom) und Umgebungsdaten (Klemme, Radgeschwindigkeiten,¿). | - | Sollstrom VL | - | - | - | - | - | - | - | 22 | - | RES_0xD817_D |
| VDC0_LESEN | 0xD817 | - | Auslesen des aktuellen Status jedes VDC0-Ventils (Status, Ist-Strom, Soll-Strom) und Umgebungsdaten (Klemme, Radgeschwindigkeiten,¿). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD817_D |
| STATUS_SWC_VERSIONEN_LESEN_ANZAHL_DATENSAETZE | 0xDD33 | STAT_INDEX_DATENSATZ_WERT | - | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| READ_EXCEPTION_DATA | 0x4001 | STAT_EXCEPTION_DATA | Entwicklerdaten zur Analyse von Exceptions | DATA | - | high | data[50] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CLEAR_EXCEPTION_DATA | 0xF000 | - | Löschen der zusätzlichen Daten zur Unterstützung des Debuggens auftretender Exceptions | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_ENTLASTUNG_GENERATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Entlastungsfkt. Aktiv / Rücknahme |
| 0x01 | iGR-High |
| 0x02 | SULEV-Fkt |
| 0x03 | Entlastung nach Motorstart |
| 0x04 | Rennstart mit oder ohne AGM Batterie |
| 0x05 | ELMOTENTL Hitze |
| 0x06 | ELMOTENTL Kälte |
| 0x07 | Entlastung Anfahrschwäche wie P66,P85 |
| 0x08 | Übertemperatur Generator |
| 0x09 | Entlastung aus Sicherheitsgründen |
| 0x0A | Entlastung Begrenzung Lagerkräfte |
| 0x0B | Entlastung aus Komfortgründen |
| 0x0C | Entlastung aus funktionalen Gründen |
| 0x0D | Keine Entlastungsfkt. Aktiv / Rücknahme |
| 0x0E | Vorhalt |
| 0x0F | Signal ungültig |

### TAB_ERRID_FASCBAS

| WERT | TEXT |
| --- | --- |
| 0 | FasCbas_0 |
| 1 | FasCbas_1_SIB_ANTRIEBSFREIGABE |
| 2 | FasCbas_2_SIB_BREMSENFREIGABE |
| 3 | FasCbas_3_SIB_GESCHWINDIGKEITSABBAU |
| 4 | FasCbas_4_SIB_SIK_KOORDINATION |
| 5 | FasCbas_5 |
| 6 | FasCbas_6 |
| 7 | FasCbas_7 |
| 8 | FasCbas_8 |
| 9 | FasCbas_9 |
| 10 | FasCbas_10 |
| 11 | FasCbas_11 |
| 12 | FasCbas_12 |
| 13 | FasCbas_13 |
| 14 | FasCbas_14 |
| 15 | FasCbas_15 |

### TAB_ERRID_FASCEBC

| WERT | TEXT |
| --- | --- |
| 0 | FasCebc_0 |
| 1 | FasCebc_1_SIP_AUSGABE |
| 2 | FasCebc_2_SIP_BREMSVERFUEGBARKEIT_APDC |
| 3 | FasCebc_3_SIP_GESCHWINDIGKEIT |
| 4 | FasCebc_4_SIP_GESCHWINDIGKEIT_APDC |
| 5 | FasCebc_5_SIP_SIK_KOORDINATION |
| 6 | FasCebc_6_USI_ABBAU_BREMSMOMENT |
| 7 | FasCebc_7_USI_ANFAHREN_FAHRERAUSSTIEG |
| 8 | FasCebc_8_USI_ANTRIEBSFREIGABE |
| 9 | FasCebc_9_USI_BREMSENFREIGABE |
| 10 | FasCebc_10_USI_PRIO_BESCHLEUNIGUNGSWUNSCH |
| 11 | FasCebc_11_USI_SIK_KOORDINATION |
| 12 | FasCebc_12_USI_UEBERNAHME_SSM |
| 13 | FasCebc_13 |
| 14 | FasCebc_14 |
| 15 | FasCebc_15 |
| 16 | FasCebc_16 |
| 17 | FasCebc_17 |
| 18 | FasCebc_18 |
| 19 | FasCebc_19 |
| 20 | FasCebc_20 |
| 21 | FasCebc_21 |
| 22 | FasCebc_22 |
| 23 | FasCebc_23 |
| 24 | FasCebc_24 |
| 25 | FasCebc_25 |

### TAB_ERRID_FASCFI

| WERT | TEXT |
| --- | --- |
| 0 | FasCfi_0 |
| 1 | FasCfi_1_Net_AbstndHindnsFhrschlauchHntn |
| 2 | FasCfi_2_Net_AbstndHindnsFhrschlauchVorn |
| 3 | FasCfi_3_Net_AbstndSensSeiteVornLi |
| 4 | FasCfi_4_Net_AbstndSensSeiteVornRe |
| 5 | FasCfi_5_Net_BdngTastrParkn |
| 6 | FasCfi_6_Net_FMM_Taster_STA |
| 7 | FasCfi_7_Net_FMM_Taster_RES |
| 8 | FasCfi_8_Net_FMM_Taster_IO |
| 9 | FasCfi_9_Net_FMM_Taster_Wippe_V |
| 10 | FasCfi_10_Net_BremsasistWngFrntraumuebwachg |
| 11 | FasCfi_11_Net_FhrspurrandLi |
| 12 | FasCfi_12_Net_FhrspurrandRe |
| 13 | FasCfi_13_Net_FhrzstndFzg |
| 14 | FasCfi_14_Net_GschwFzgLngs |
| 15 | FasCfi_15_Net_GschwRadKompHL |
| 16 | FasCfi_16_Net_GschwRadKompHR |
| 17 | FasCfi_17_Net_GschwRadKompVL |
| 18 | FasCfi_18_Net_GschwRadKompVR |
| 19 | FasCfi_19_Net_IstBremsmomSum |
| 20 | FasCfi_20_Net_IstLenkmomFhrrStellgld |
| 21 | FasCfi_21_Net_IstRadmomAntrbstrngSum |
| 22 | FasCfi_22_Net_IstRadmomAntrbstrngSumSchlepmomOb |
| 23 | FasCfi_23_Net_IstRadmomAntrbstrngSumTrghtverlust |
| 24 | FasCfi_24_Net_IstWnklFhrpedal |
| 25 | FasCfi_25_Net_LngsbschlGschztFzggschw |
| 26 | FasCfi_26_Net_QuFktAktvgParkbrems |
| 27 | FasCfi_27_Net_QuFktFDR |
| 28 | FasCfi_28_Net_QuFktKoordSollbremsmomEcba |
| 29 | FasCfi_29_Net_QuFktUmgebDetktParkn |
| 30 | FasCfi_30_Net_QuServAnzgFas |
| 31 | FasCfi_31_Net_QuServBdngTempmat |
| 32 | FasCfi_32_Net_QuServECBA |
| 33 | FasCfi_33_Net_QuServLenkmomKoord |
| 34 | FasCfi_34_Net_SollRadmomAntrbstrngSumKoord |
| 35 | FasCfi_35_Net_SollVrzrgBremsBremsasistFrntraumuebwachg |
| 36 | FasCfi_36_Net_StAntrbFzg |
| 37 | FasCfi_37_Net_StBlink |
| 38 | FasCfi_38_Net_StBremsgFhrr |
| 39 | FasCfi_39_Net_StFhrtrichtngFhrrwnsch |
| 40 | FasCfi_40_Net_StGangwahlAntrb |
| 41 | FasCfi_41_Net_StGurtschlosSchltrFA |
| 42 | FasCfi_42_Net_StKlem |
| 43 | FasCfi_43_Net_StKraftschlusAntrbstrng |
| 44 | FasCfi_44_Net_StSchntstFhrrasistsys |
| 45 | FasCfi_45_Net_StTuerkontkFATAbgsichr |
| 46 | FasCfi_46_Net_StVideoBestaetngBremseigrifObj |
| 47 | FasCfi_47 |
| 48 | FasCfi_48 |
| 49 | FasCfi_49 |
| 50 | FasCfi_50 |
| 51 | FasCfi_51 |
| 52 | FasCfi_52 |
| 53 | FasCfi_53 |
| 54 | FasCfi_54 |
| 55 | FasCfi_55_Fun_Aktive_Gefahrenbremsung_Ausgelöst |
| 56 | FasCfi_56_Fun_Aktive_Gefahrenbremsung_Max_Anzahl_Ueberschritten |
| 57 | FasCfi_57_Fun_Anfahrbereitschaft |
| 58 | FasCfi_58_Fun_Angezeigte_Geschwindigkeit |
| 59 | FasCfi_59_Fun_Betriebsmodus_Motorelektronik |
| 60 | FasCfi_60_Fun_Codierung |
| 61 | FasCfi_61_Fun_Fahrpedal_getreten |
| 62 | FasCfi_62_Fun_Fahrtrichtung_1 |
| 63 | FasCfi_63_Fun_Fahrtrichtung_2 |
| 64 | FasCfi_64_Fun_Funktionale_Deaktivierung_XCC |
| 65 | FasCfi_65_Fun_Kombi_Schnittstelle_XCC |
| 66 | FasCfi_66_Fun_PMALQ_Getriebe_Freigabe |
| 67 | FasCfi_67_Fun_PMALQ_Getriebe_Gangwahl |
| 68 | FasCfi_68_Fun_PMALQ_Getriebe_Getriebefehler |
| 69 | FasCfi_69_Fun_PMALQ_QF_Aktivierung |
| 70 | FasCfi_70_Fun_PMALQ_QF_Plausibilisierung_Seitenwahl |
| 71 | FasCfi_71_Fun_PMALQ_QF_Schaltaufforderung |
| 72 | FasCfi_72_Fun_PMALQ_QF_Unerlaubte_Deaktivierung |
| 73 | FasCfi_73_Fun_Segelabbruch |
| 74 | FasCfi_74_Fun_Uebernahme_SSM |
| 75 | FasCfi_75_Fun_Verzoegerungsanforderung_FCW_CCM |
| 76 | FasCfi_76_Fun_Verzögerungsanforderung_pFGS |
| 77 | FasCfi_77_Fun_KAFAS_Kalibrierung |
| 78 | FasCfi_78_Fun_Frontschutz_Akutwarnung_ausgeloest |
| 79 | FasCfi_79_Fun_Frontschutz_Anbremsen_Stufe_1_ausgeloest |
| 80 | FasCfi_80_Fun_Frontschutz_Anbremsen_Stufe_2_ausgeloest |
| 81 | FasCfi_81 |
| 82 | FasCfi_82 |
| 83 | FasCfi_83 |
| 84 | FasCfi_84_Net_AbstndSensSeiteVornLi_BBS_Sensorik_PMA_Links |
| 85 | FasCfi_85_Net_AbstndSensSeiteVornRe_BBS_Sensorik_PMA_Rechts |
| 86 | FasCfi_86_Net_BdngTastrParkn_BBS_Bedienelement_Parken |
| 87 | FasCfi_87_Net_GiergschwFzg_Qu |
| 88 | FasCfi_88_Net_GschwFzgLngs_Qu |
| 89 | FasCfi_89_Net_GschwRadKompHL_Qu |
| 90 | FasCfi_90_Net_GschwRadKompHR_Qu |
| 91 | FasCfi_91_Net_GschwRadKompVL_Qu |
| 92 | FasCfi_92_Net_GschwRadKompVR_Qu |
| 93 | FasCfi_93_Net_IstBremsmomSum_Qu |
| 94 | FasCfi_94_Net_IstGschwTacho_Qu |
| 95 | FasCfi_95_Net_IstLenkmomFhrrStellgld_Qu |
| 96 | FasCfi_96_Net_IstLenkwnklFhrr_Qu |
| 97 | FasCfi_97_Net_IstLngsneigFhrbahn_Qu |
| 98 | FasCfi_98_Net_IstQuerneigFhrbahn_Qu |
| 99 | FasCfi_99_Net_IstRadmomAntrbstrngSum_Qu |
| 100 | FasCfi_100_Net_IstWnklFhrpedal_Qu |
| 101 | FasCfi_101_Net_LenkwnklVachsRad_Qu |
| 102 | FasCfi_102_Net_LngsbschlGschztFzggschw_Qu |
| 103 | FasCfi_103 |
| 104 | FasCfi_104_Net_MassGwchtFzg_Qu |
| 105 | FasCfi_105_Net_ParknStParkluckMessg_BBS_Parkfunktion_Parklueckenvermessung |
| 106 | FasCfi_106_Net_QuAnfrdVrzrgHydfkt_BBS_Parkbremse |
| 107 | FasCfi_107 |
| 108 | FasCfi_108_Net_QuFktABS_BBS_Bremsaktuator_Funktion_ABS |
| 109 | FasCfi_109_Net_QuFktAktvgParkbrems_BBS_Parkbremse |
| 110 | FasCfi_110_Net_QuFktASC_BBS_Bremsaktuator_Funktion_ASC |
| 111 | FasCfi_111_Net_QuFktCCM_BBS_Sensorik_KAFAS_Funktion_FCW-CCM |
| 112 | FasCfi_112_Net_QuFktFDR_BBS_Bremsaktuator_Funktion_FDR |
| 113 | FasCfi_113_Net_QuFktFGS_BBS_Sensorik_KAFAS_Funktion_pFGS |
| 114 | FasCfi_114_Net_QuFktParknQuerfuhrgZstnd_BBS_Parkfunktion_Querfuehrung |
| 115 | FasCfi_115_Net_QuFktUmgebDetktParkn_BBS_Parkfunktion_Umfelderfassung |
| 116 | FasCfi_116_Net_QuHandOffErkngSens_BBS_Sensorik_Lenkrad_Hands_Off_Erkennung |
| 117 | FasCfi_117_Net_QuServAnzgFas_BBS_Kombiinstrument |
| 118 | FasCfi_118_Net_QuServBdngTempmat_BBS_Bedienelement_Tempomat |
| 119 | FasCfi_119_Net_QuServECBA_BBS_Bremsaktuator_ECBA_Schnittstelle |
| 120 | FasCfi_120_Net_QuServECBA_BBS_Bremsaktuator_Stillstandsmanagement |
| 121 | FasCfi_121 |
| 122 | FasCfi_122_Net_QuServFahrspurerkng_BBS_Sensorik_KAFAS_Fahrspurerkennung |
| 123 | FasCfi_123_Net_QuServFrntraumuebwachg_BBS_Sensorik_FRR |
| 124 | FasCfi_124 |
| 125 | FasCfi_125_Net_QuServLenkmomKoord_BBS_Koordinator_Lenkmoment |
| 126 | FasCfi_126_Net_QuServObjdtKafas_BBS_Sensorik_KAFAS |
| 127 | FasCfi_127_Net_QuServParamgDBC_BBS_Bremsaktuator_Funktion_DBC |
| 128 | FasCfi_128_Net_QuServRadmomAntrbstrngSumFAS_BBS_Antriebsaktuator |
| 129 | FasCfi_129_Net_QuServVorbefulgBrems_BBS_Bremsaktuator_Funktion_Vorbefuellung |
| 130 | FasCfi_130_Net_QuServWngBremsasist_BBS_Kombiinstrument_Auffahrwarnung |
| 131 | FasCfi_131_Net_SollRadlenkwnklVachsParkasist_Qu |
| 132 | FasCfi_132_Net_StFktbleuchtgHDC_BBS_Bedienelement_HDC_Funktionsbeleuchtung |
| 133 | FasCfi_133_Net_StFktBremsasistFrntraumuebwachg_BBS_Sensorik_FRR_Funktion_Anbremsen |
| 134 | FasCfi_134_Net_StFktBremsasistFrntraumuebwachg_BBS_Sensorik_FRR_Funktion_Bremsenkonditionierung |
| 135 | FasCfi_135_Net_StFktBremsasistFrntraumuebwachg_BBS_Sensorik_FRR_Warnung |
| 136 | FasCfi_136_Net_StGurtschlosSchltrFA_BBS_Gurtschloss_Fahrer |
| 137 | FasCfi_137_Net_StKraftschlusAntrbstrng_BBS_Antriebsaktuator_Kraftschluss |
| 138 | FasCfi_138_Net_StTastrHDC_BBS_Bedienelement_HDC_Taster |
| 139 | FasCfi_139_Net_QuFktKoordSollbremsmomEcba_BBS_Koordinator_Bremsmoment |
| 140 | FasCfi_140 |
| 141 | FasCfi_141 |
| 142 | FasCfi_142 |
| 143 | FasCfi_143_Net_FMM_Taster_LIM |
| 144 | FasCfi_144_Net_FMM_Taster_SET |
| 145 | FasCfi_145_Net_FMM_Taster_ABST1 |
| 146 | FasCfi_146_Net_FMM_Taster_ABST2 |
| 147 | FasCfi_147_Net_AbschltgGrndSysParkasist |
| 148 | FasCfi_148_Net_AbsenkgSchwlwertBremsasistAuffhrwngFrnt |
| 149 | FasCfi_149_Net_AbsenkgSchwlwertBremsasistFGS |
| 150 | FasCfi_150_Net_AbsenkgSchwlwertBremsasistFrntraumuebwachg |
| 151 | FasCfi_151 |
| 152 | FasCfi_152_Net_AbstndObjMin |
| 153 | FasCfi_153_Net_AbstndRadBrdstnHntn |
| 154 | FasCfi_154_Net_AbstndRadBrdstnVorn |
| 155 | FasCfi_155_Net_AnfrgZstndFktParkn2 |
| 156 | FasCfi_156_Net_AnzgStund |
| 157 | FasCfi_157_Net_AuffhrwngFrntSollAbsenkgLuftspielSchwlwertBremsasist |
| 158 | FasCfi_158 |
| 159 | FasCfi_159 |
| 160 | FasCfi_160_Net_BestaetngAnzgDisclmr |
| 161 | FasCfi_161_Net_Detektion_Modus_KAFAS |
| 162 | FasCfi_162_Net_FgsSollAbsenkgLuftspielSchwlwertBremsAsist |
| 163 | FasCfi_163_Net_FhlrFhrrAufmerksUebwachg |
| 164 | FasCfi_164_Net_FhrspurrandErweitLi |
| 165 | FasCfi_165_Net_FhrspurrandErweitRe |
| 166 | FasCfi_166_Net_GiergschwFzg |
| 167 | FasCfi_167_Net_GradtIstWnklFhrpedal |
| 168 | FasCfi_168_Net_IstAntrbElektFzg |
| 169 | FasCfi_169_Net_IstGschwTacho |
| 170 | FasCfi_170_Net_IstKrumgFhrspur |
| 171 | FasCfi_171_Net_IstLenkwnklFhrr |
| 172 | FasCfi_172_Net_IstLngsneigFhrbahn |
| 173 | FasCfi_173_Net_IstModSchltrFhrdyn |
| 174 | FasCfi_174_Net_IstQuerneigFhrbahn |
| 175 | FasCfi_175_Net_IstRadmomAntrbstrngSumMax |
| 176 | FasCfi_176_Net_IstRadmomAntrbstrngSumSchlepmomUnten |
| 177 | FasCfi_177_Net_IstWnklKursFzgFhrspur |
| 178 | FasCfi_178_Net_KennzhlGschwFzgSchwpkt |
| 179 | FasCfi_179_Net_LenkwnklVachseffkt |
| 180 | FasCfi_180_Net_LenkwnklVachsRad |
| 181 | FasCfi_181 |
| 182 | FasCfi_182_Net_MassGwchtFzg |
| 183 | FasCfi_183_Net_ParamsgDbcTrigrNiviSchwlwert |
| 184 | FasCfi_184_Net_ParknAnfrdSeiteWahl |
| 185 | FasCfi_185_Net_ParknAuswahlSeite |
| 186 | FasCfi_186_Net_ParknHandlghinwStrtPos |
| 187 | FasCfi_187_Net_ParknQuerfuhrgAbschltgGrund |
| 188 | FasCfi_188_Net_ParknQuerfuhrgAbstndFhrtrichtngAendg |
| 189 | FasCfi_189_Net_ParknQuerfuhrgAnfrdFhrtrichtngAendg |
| 190 | FasCfi_190_Net_ParknQuerfuhrgMod |
| 191 | FasCfi_191_Net_ParknStParkluckMessg |
| 192 | FasCfi_192_Net_ParknStStrt |
| 193 | FasCfi_193_Net_QuAnfrdVrzrgHydfkt |
| 194 | FasCfi_194 |
| 195 | FasCfi_195_Net_QuFktABS |
| 196 | FasCfi_196_Net_QuFktASC |
| 197 | FasCfi_197_Net_QuFktCCM |
| 198 | FasCfi_198_Net_QuFktFGS |
| 199 | FasCfi_199_Net_QuFktHDC |
| 200 | FasCfi_200_Net_QuFktParknQuerfuhrgZstnd |
| 201 | FasCfi_201_Net_QuFktPma |
| 202 | FasCfi_202_Net_QuHandOffErkngSens |
| 203 | FasCfi_203_Net_QuServFahrspurerkng |
| 204 | FasCfi_204_Net_QuServFrntraumuebwachg |
| 205 | FasCfi_205 |
| 206 | FasCfi_206_Net_QuServObjdtKafas |
| 207 | FasCfi_207_Net_QuServParamgDBC |
| 208 | FasCfi_208_Net_QuServRadmomAntrbstrngSumFAS |
| 209 | FasCfi_209_Net_QuServVorbefulgBrems |
| 210 | FasCfi_210_Net_QuServWngBremsasist |
| 211 | FasCfi_211_Net_SollAbsenkgLuftspielBremsanlageFrntraumuebwachg |
| 212 | FasCfi_212_Net_SollAnzgWnschgschwHDC |
| 213 | FasCfi_213_Net_SollRadlenkwnklVachsParkasist |
| 214 | FasCfi_214_Net_SollVrzrgCCM |
| 215 | FasCfi_215_Net_SollVrzrgFGS |
| 216 | FasCfi_216_Net_StAktvgFktParkn2 |
| 217 | FasCfi_217_Net_StAkutwngNivi |
| 218 | FasCfi_218_Net_StAnhngr |
| 219 | FasCfi_219_Net_StAnzgAbstndInfo |
| 220 | FasCfi_220_Net_StAnzgEffntdyncs |
| 221 | FasCfi_221 |
| 222 | FasCfi_222_Net_StAnzgUhrzeitDat |
| 223 | FasCfi_223_Net_StBlinkSymNivi |
| 224 | FasCfi_224_Net_StFhrlichtGrund |
| 225 | FasCfi_225_Net_StFktbleuchtgHDC |
| 226 | FasCfi_226_Net_StFktBremsasistFrntraumuebwachg |
| 227 | FasCfi_227_Net_StNebelschlusleucht |
| 228 | FasCfi_228_Net_StObjEinfEigschfNivi2 |
| 229 | FasCfi_229_Net_StObjEinfTypNivi2 |
| 230 | FasCfi_230_Net_StObjFernberchMittEigschfNivi2 |
| 231 | FasCfi_231_Net_StObjFernberchMittTypNivi2 |
| 232 | FasCfi_232_Net_StObjNahberchMittEigschfNivi2 |
| 233 | FasCfi_233_Net_StObjNahberchMittTypNivi2 |
| 234 | FasCfi_234_Net_StObjQuerLiEigschfNivi2 |
| 235 | FasCfi_235_Net_StObjQuerLiTypNivi2 |
| 236 | FasCfi_236_Net_StObjQuerReEigschfNivi2 |
| 237 | FasCfi_237_Net_StObjQuerReTypNivi2 |
| 238 | FasCfi_238_Net_StPFgs |
| 239 | FasCfi_239_Net_StrgIbrake |
| 240 | FasCfi_240_Net_StSglnAntrb2 |
| 241 | FasCfi_241_Net_StTastrHDC |
| 242 | FasCfi_242_Net_StUebwachgFreiraum |
| 243 | FasCfi_243_Net_StVerfgbkEigrifAntrbstrngFAS |
| 244 | FasCfi_244_Net_StVerkhrsinKafas |
| 245 | FasCfi_245 |
| 246 | FasCfi_246_Net_UmweltbdinggFhrspurerkng |
| 247 | FasCfi_247_Net_Verkhrsin |
| 248 | FasCfi_248_Net_VerkhrstauWahrsch |
| 249 | FasCfi_249_Net_VerlustZielobjKafas |
| 250 | FasCfi_250_Net_VorbefulgNiviBrems |
| 251 | FasCfi_251_Net_VrzrgKolisverhdrgBremsasistFrntraumuebwachg |
| 252 | FasCfi_252_Net |
| 253 | FasCfi_253_Net_WngFrntraumuebwachgAuffhrwngFrnt |
| 254 | FasCfi_254_Net_WngFrntraumuebwachgFGS |
| 255 | FasCfi_255 |

### TAB_ERRID_FASCFO

| WERT | TEXT |
| --- | --- |
| 0 | FasCfo_0 |
| 1 | FasCfo_1_SIK_ANZEIGENSTEUERUNG |
| 2 | FasCfo_2_SIK_MOMENTE |
| 3 | FasCfo_3_SIK_PLAUSIBILITAET |
| 4 | FasCfo_4 |
| 5 | FasCfo_5 |
| 6 | FasCfo_6 |
| 7 | FasCfo_7 |
| 8 | FasCfo_8 |
| 9 | FasCfo_9 |
| 10 | FasCfo_10 |
| 11 | FasCfo_11 |
| 12 | FasCfo_12 |
| 13 | FasCfo_13 |
| 14 | FasCfo_14 |
| 15 | FasCfo_15 |

### TAB_ERRID_FASDSP

| WERT | TEXT |
| --- | --- |
| 0 | FasDsp_0 |
| 1 | FasDsp_1_Net_Anzahl_Fahrspuren_Erweitert |
| 2 | FasDsp_2_Net_AnzhlFhrspurnNavGrph |
| 3 | FasDsp_3_Net_Bedingung_Begrenzung_Geschwindigkeit |
| 4 | FasDsp_4_Net_Begrenzung_Geschwindigkeit_Bedingt |
| 5 | FasDsp_5_Net_Begrenzung_Geschwindigkeit_Nav-Graph |
| 6 | FasDsp_6_Net_Eigenschaft_Karte_Nav-Graph |
| 7 | FasDsp_7_Net_Gradient_Nav-Graph |
| 8 | FasDsp_8_Net_Gültigkeit_Zeit_Ende |
| 9 | FasDsp_9_Net_Gültigkeit_Zeit_Start |
| 10 | FasDsp_10_Net_Index_Segment_Löschen_Nav-Graph |
| 11 | FasDsp_11_Net_Index_Segment_Nav-Graph |
| 12 | FasDsp_12_Net_Index_Segment_Nav-Graph_Fahrspur |
| 13 | FasDsp_13_Net_Index_Segment_Nav-Graph_Geschwindigkeit |
| 14 | FasDsp_14_Net_Index_Segment_Nav-Graph_Karte_Daten |
| 15 | FasDsp_15_Net_Index_Vater-Segment_Nav-Graph |
| 16 | FasDsp_16_Net_Information_Erweitert_Fahrspuren_1 |
| 17 | FasDsp_17_Net_Länge_Segment_Nav-Graph |
| 18 | FasDsp_18_Net_Radius_Segment_Nav-Graph |
| 19 | FasDsp_19_Net_Radius_Segment_Nav-Graph_Geschwindigkeit |
| 20 | FasDsp_20_Net_Status_Anzahl_Pakete |
| 21 | FasDsp_21_Net_Status_Übereinstimmung_Index_Segment |
| 22 | FasDsp_22_Net_Status_Übereinstimmung_Position_Relativ |
| 23 | FasDsp_23_Net_Status_Version_Protokoll_Navigation |
| 24 | FasDsp_24_Net_Steuerung_Löschen_Nav-Graph |
| 25 | FasDsp_25_Net_StLandcodrgNav |
| 26 | FasDsp_26_Net_Typ_Straße_Nav-Graph |
| 27 | FasDsp_27_Net_Zähler_Nav-Graph_Sync |
| 28 | FasDsp_28_Net_Zusatzinformation_Nav-Graph_Sync |
| 29 | FasDsp_29_Net_Zusatzinformation_Segment_Nav-Graph |
| 30 | FasDsp_30 |
| 31 | FasDsp_31 |
| 32 | FasDsp_32 |
| 33 | FasDsp_33 |
| 34 | FasDsp_34 |
| 35 | FasDsp_35 |
| 36 | FasDsp_36 |
| 37 | FasDsp_37 |
| 38 | FasDsp_38 |
| 39 | FasDsp_39 |
| 40 | FasDsp_40_Fun_Navigationsdaten_Baumstruktur |
| 41 | FasDsp_41 |
| 42 | FasDsp_42 |
| 43 | FasDsp_43 |
| 44 | FasDsp_44 |
| 45 | FasDsp_45 |
| 46 | FasDsp_46 |
| 47 | FasDsp_47 |
| 48 | FasDsp_48 |
| 49 | FasDsp_49 |
| 50 | FasDsp_50 |

### TAB_ERRID_FASOSEL

| WERT | TEXT |
| --- | --- |
| 0x00 | FasOsel_0 |
| 0x01 | FasOsel_1_Net_Objektdaten_FRR |
| 0x02 | FasOsel_1_Net_Objektdaten_FRR |
| 0x03 | FasOsel_2_Net_Objektdaten_KAFAS |
| 0x04 | FasOsel_4_Net_AbstndHindnsPdc_Vorne |
| 0x05 | FasOsel_5 |
| 0x06 | FasOsel_6 |
| 0x07 | FasOsel_7 |
| 0x08 | FasOsel_8 |
| 0x09 | FasOsel_9 |
| 0x10 | FasOsel_10 |
| 0x11 | FasOsel_11 |
| 0x12 | FasOsel_12 |
| 0x13 | FasOsel_13 |
| 0x14 | FasOsel_14 |
| 0x15 | FasOsel_15 |

### TAB_ERRID_FASSCG

| WERT | TEXT |
| --- | --- |
| 0 | FasScg_0 |
| 1 | FasScg_1_SIS_ANTRIEBSFREIGABE |
| 2 | FasScg_2_SIS_BREMSENFREIGABE |
| 3 | FasScg_3_SIS_FLUCHTFUNKTION |
| 4 | FasScg_4_SIS_SIK_KOORDINATION |
| 5 | FasScg_5 |
| 6 | FasScg_6 |
| 7 | FasScg_7 |
| 8 | FasScg_8 |
| 9 | FasScg_9 |
| 10 | FasScg_10 |
| 11 | FasScg_11 |
| 12 | FasScg_12 |
| 13 | FasScg_13 |
| 14 | FasScg_14 |
| 15 | FasScg_15 |

### TAB_EXCEPTION_SYMPTOM

| WERT | TEXT |
| --- | --- |
| 0x00 | No Exception |
| 0x01 | ECC Exception |
| 0x02 | Illegal Instruction |
| 0x03 | Stack Overflow |
| 0x05 | Unimplemented Operation |
| 0x06 | Read While Write Exception |
| 0x07 | MPU Exception |
| 0x08 | Safe Mode Exception |
| 0x09 | FPU Exception |
| 0xFE | Unknown Exception |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_SOFTWARE_IDS_COMBINED_EVENTS

| WERT | TEXT |
| --- | --- |
| 0 | TRW |
| 1 | Spannungsschwellenclient |
| 2 | ECU Statemachine |
| 3 | VDC0 |
| 4 | FAS-Default |
| 5 | FAS-SLD |
| 6 | FAS-VZA |
| 7 | FAS-pFGS |
| 8 | FAS-CCM |
| 9 | FAS-STA |
| 10 | FAS-PMA |
| 11 | FAS-FCW |
| 12 | FAS-ACC/DCC |

### TAB_VDC0_FESTSTROM

| WERT | TEXT |
| --- | --- |
| 0x00 | VDC0-Ventils VL |
| 0x01 | VDC0-Ventils VR |
| 0x02 | VDC0-Ventils HL |
| 0x03 | VDC0-Ventils HR |

### TAB_VDC0_MODI

| WERT | TEXT |
| --- | --- |
| 0 | SPORT |
| 1 | KOMFORT |
| 2 | PUSH-STROM |

### TAB_VDC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbestromt |
| 0x01 | Bestromt |
| 0x02 | Push-Strom |
