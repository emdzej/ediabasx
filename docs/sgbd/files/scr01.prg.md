# scr01.prg

## General

|  |  |
| --- | --- |
| File | scr01.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 82 |
| Origin | BMW EK-532 Günther |
| Revision | 6.001 |
| Author | ITK-ENGINEERING-AG EK-722 Scholz, ITK-ENGINEERING-AG EK-722 Jae |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Selective Catalytic Reduction |  |  |
| ORIGIN | string | BMW EK-532 Günther |  |  |
| REVISION | string | 6.001 |  |  |
| AUTHOR | string | ITK-ENGINEERING-AG EK-722 Scholz, ITK-ENGINEERING-AG EK-722 Jae |  |  |
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

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

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
| 0x2300 | Aussenspiegel Beifahrer | - |
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
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
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
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
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
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
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
| 0x7700 | Booster | - |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
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
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
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
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
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
| 0x0065 | INTEVA Products, LLC |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X5E02_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | s | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | AVS: Zeitdauer Übertemperatur am Dosierventil (UDC_tiUDosVlvOvht): UDC_ tiUDosVlvOvh |

### ARG_0X5E03_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NEUER_BFP_LERNWERT | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Zum Schreiben wird der Job 2e 5e03 mit 2 Datenbytes mit einem Verhältnis von 100:1mm^3 übergeben. -- 0x0fa0 -- 4000 dez -- 40mm^3.  Bitte beachten, das erst das LowByte und dann das HighByte übergeben wird! |

### ARG_0X5E04_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 2 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E05_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 2 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E06_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 2 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E07_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 1 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E08_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 1 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E09_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 4 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E0A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERT | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 2 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E1B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAVITAETSPRUEFUNG_HEIZERSTROMLERNWERT | HEX | high | int | - | - | - | - | - | - | - | AVS: Kavitätsprüfung - Lernwert des Heizerstroms (UHC_iCavChk) |

### ARG_0X5E1C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUELLSTAND_PASSIVTANK | HEX | high | int | - | - | - | - | - | - | - | AVS: Aktueller Füllstand im Passiv-Tank (UDC_UPasTnkLvl) |

### ARG_0X5E20_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_DOSIERMENGE | g | high | long | - | - | 1000.0 | 1.0 | 0.0 | - | - | AVS: Langzeiterfassung der Dosiermenge (UDC_DosQnt) |

### ARG_0X5E21_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUELLSTAND_AKTIVTANK | 0-n | high | unsigned char | - | TAB_FUELLSTAND_AKTIVTANK | - | - | - | - | - | AVS: Aktueller Tankfüllstand (UDC_UTnkLvl) |

### ARG_0X5E22_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERTE | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 12 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5E23_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_UEBERGABEWERTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der Job benötigt 1 byte Dummy Daten damit dieser startet. Der Inhalt ist prinzipiell egal, es wird aber empfohlen 0 zu senden. |

### ARG_0X5F3E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4.0 | 4.0 | Dummy Wert wird vom SCR SG mit 0x04 erwartet |

### ARG_0X5F48_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4.0 | 4.0 | Dummy Wert wird vom SCR SG mit 0x04 erwartet |

### ARG_0X5F4B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4.0 | 4.0 | Dummy Wert wird vom SCR SG mit 0x04 erwartet |

### ARG_0X6030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_RUECKFOEDERPUMPE | HEX | high | int | - | - | - | - | - | - | - | Test der Rückförderpumpe, Festlegen der Pulsbreite in ms |

### ARG_0X6031_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_FOEDERPUMPE | HEX | high | int | - | - | - | - | - | - | - | Test der Förderpumpe |

### ARG_0X6032_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_UMPUMPE | HEX | high | int | - | - | - | - | - | - | - | Test zum Steuern der Umpumpe |

### ARG_0X6033_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERVENTIL | HEX | high | int | - | - | - | - | - | - | - | Test zum Steuern des Dosierventils, Vorgabe in % |

### ARG_0X6035_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERLEITUNGSHEIZUNG | HEX | high | int | - | - | - | - | - | - | - | Test zum Steuern der Dosierleitungsheizung |

### ARG_0X6036_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_AKTIVTANKHEIZUNG | HEX | high | int | - | - | - | - | - | - | - | Test zum Steuern der Aktivtankheizung |

### ARG_0XAE64_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOSIERMASSE | + | - | g | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 30.0 | Dosiermasse in g (Min 0g Max 30g) |
| MASSENSTROM | + | - | mg/s | high | int | - | - | 10.0 | 1.0 | 0.0 | - | - | Massenstrom in mg/s |

### ARG_0XAE68_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BITMASKE_PARAMETER | + | - | 0-n | high | unsigned char | - | AR_TESTAUSWAHL | - | - | - | - | - | Übergabeparameter für Inbetriebnahme Routine. |

### AR_TESTAUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x01 | Test Erstbefuellung |
| 0x02 | Test Trockentaktung |
| 0x04 | Test Druckaufbau |
| 0x08 | Test Leckage |
| 0x10 | Test Entleerung |
| 0x20 | Test Umpumpe |
| 0x15 | Tests Erstbefuellung, Druckaufbau, Entleerung |
| 0x17 | Tests Erstbefuellung, Trockentaktung, Druckaufbau, Entleerung |
| 0x3F | komplette Sequenz |

### BF_REQ_INIT_TESTS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REQ_ERSTBEFUELLUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Teilschritt Erstbefüllung angefordert. |
| STAT_REQ_TROCKENTAKTUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Teilschritt Trockentaktung angefordert. |
| STAT_REQ_DRUCKAUFBAU | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Teilschritt Druckaufbau angefordert. |
| STAT_REQ_LECKAGE | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Teilschritt Leckage angefordert. |
| STAT_REQ_ENTLEERUNG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Teilschritt Entleerung angefordert. |
| STAT_REQ_UMPUMPE | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Teilschritt Umpumpe angefordert. |

### BF_SCR_INIT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERSTBEFUELLUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Erstbefüllung beendet. |
| STAT_TROCKENTACKTUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Trockentaktung Dosierventil. |
| STAT_DRUCKAUFBAU | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Druckaufbau. |
| STAT_LECKAGE | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Leckagetest. |
| STAT_ENTLEERUNG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Entleerungstest. |
| STAT_UMPUMPE | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Test Umpumpeinheit |

### BF_SCR_STATUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Die aktuelle Geschwindigkeit VehV_v darf nicht die Schwelle SCRETC_vMax_C überschreiten. 0 = sbgfk1 = afg |
| STAT_MOTORDREHZAHL | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Die aktuelle Motordrehzahl Epm_nEng darf nicht die Schwelle SCRETC_nMax_C überschreiten |
| STAT_KATALYSATORTEMP | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Die aktuelle Katalysatortemperatur DnoxCtl_tUCatUs darf nicht die Schwelle SCRETC_tUCatUsMax_C überschreiten. |
| STAT_SYS_ENTLEERUNG | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Systementleerung ist erfolgreich durchgeführt, SCRETC_flgEmptySuc == TRUE. |
| STAT_SPUELFUNKTION | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Die Spülfunktion darf nicht aktiv sein, CoSCR_st != COSCR_PURGE. |
| STAT_TANKTEMPERATUR | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Die aktuelle Tanktemperatur darf nicht unter der Schwelle SCRETC_tUTnkTMax_C liegen. |
| STAT_DRUCKAUFBAU | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Druckaufbereitung war erfolgreich, SCRETC_flgPPrepnSuc == TRUE. |
| STAT_UBATT | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Die Batteriespannung BattU_u liegt über der Schwelle SCRETC_uBatMin_C. |
| STAT_ERSTBEFUELLUNG | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Erstbefuellung noch nicht durchgeführt. |
| STAT_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | - |
| STAT_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | - |
| STAT_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | - |
| STAT_ABBRUCH_ZEIT | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Test ist aufgrund der Zeitüberschreitung beim Druckaufbau abgebrochen. |
| STAT_ABBRUCH_DRUCKAUFBAU | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Test ist aufgrund fehlerhaftes Druckaufbau abgebrochen. |
| STAT_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | - |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x00D092 | Fördermodul, Rückförderpumpe, Heizleistung: zu gering (DFC_SCRPODUrSolPmpBkFlw) | 0 |
| 0x020B00 | Energiesparmode aktiv | 0 |
| 0x02FF0B | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805100 | Dosiermodul: überhitzt (DFC_SCRPODAdvUrDosVlvOvht) | 0 |
| 0x805180 | SCR-Steuergerät: interner Fehler (Berechnung Motorabstellzeit defekt) [DFC_EngDa_TiEngOff] | 0 |
| 0x805181 | SCR-Steuergerät: interner Fehler (5V Versorgungsspannung; Überspannung) [DFC_MonUMaxSupply1] | 0 |
| 0x805182 | SCR-Steuergerät: interner Fehler (5V Versorgungsspannung; Unterspannung) [DFC_MonUMinSupply1] | 0 |
| 0x805183 | Versorgung Sensorik/Aktorik 1: Fehler | 0 |
| 0x805184 | Versorgung Sensorik/Aktorik 2: Fehler | 0 |
| 0x805185 | Versorgung Sensorik/Aktorik 3: Fehler | 0 |
| 0x805186 | Aktivtank: leer (DFC_UDCRdcAgRmn) | 0 |
| 0x805187 | Passivtank, Füllstandssensor: Hochpegel-Leitungsfehler (SCB oder OL) erkannt. (DFC_UPasTnkCLSHiLine) | 0 |
| 0x805188 | Heizungsfreigabe durch Powermanagement: fehlt (DFC_UHCFailHtrRls) | 0 |
| 0x805189 | Dosierleitungsheizung: heizt ohne Anforderung (DFC_UHCPLExtShCirErr) | 0 |
| 0x80518A | Dosierleitungsheizung, Ansteuerung: Leitungsunterbrechung (DFC_UHCPLOLDurCtl, Pin6) | 0 |
| 0x80518B | Aktivtankheizung: heizt ohne Anforderung (DFC_UHCTnkExtShCirrErr) | 0 |
| 0x80518C | Aktivtankheizung, Leistung: zu gering (DFC_UHCTnkOLDurCtl) | 0 |
| 0x80518D | Fördermodul, Unterdruckfehler in Metering Control, obere Druckschwelle (DFC_SCRMonMetCtlUndrPresErrHi) | 0 |
| 0x80518E | SCR-Steuergerät, Versorgungsspannung: Überspannung (DFC_BattUSRCMax) | 0 |
| 0x80518F | SCR-Steuergerät, Versorgungsspannung: Unterspannung (DFC_BattUSRCMin) | 0 |
| 0x805190 | SCR-Steuergerät, Versorgungsspannung: Überspannung (DFC_DevLibBattUHi) | 0 |
| 0x805191 | SCR-Steuergerät, Versorgungsspannung: Unterspannung (DFC_DevLibBattULo) | 0 |
| 0x805192 | Fördermodul, Rückförderpumpe, Heizleistung: zu gering (DFC_SCRPODUrSolPmpBkFlw) | 0 |
| 0x805193 | Fördermodul, Förderpumpe, Heizleistung: zu gering (DFC_SCRPODUrSolnPmp) | 0 |
| 0x805194 | Dosiermodul, Ansteuerung: Unterbrechung (DFC_UDosVlvOL) | 0 |
| 0x805195 | SCR-Steuergerät: interner Fehler (Endstufe Dosierventil Übertemperatur, DFC_UDosVlvOvrTemp) | 0 |
| 0x805196 | Dosiermodul, Ansteuerung: Kurzschluss nach Plus (DFC_UDosVlvSCB, Pin8) | 0 |
| 0x805197 | Dosiermodul, Ansteuerung: Kurzschluss nach Plus (DFC_UDosVlvSCBHS, Pin74) | 0 |
| 0x805198 | Dosiermodul, Ansteuerung: Kurschluss nach Masse (DFC_UDosVlvSCG, Pin8) | 0 |
| 0x805199 | Dosiermodul, Ansteuerung: Kurzschluss nach Masse (DFC_UDosVlvSCGHS, Pin74) | 0 |
| 0x80519A | Passivtank Füllstandssensor, Signal: Kommunikationsfehler (DFC_UPasTnkCLSSensMon) | 0 |
| 0x80519B | Passivtank, Füllstandssensor: Stromausfall - Niedrigpegel-Leitungsfehler. (DFC_UPasTnkCLSLoLine) | 0 |
| 0x80519C | Fördermodul, Förderpumpe, Widerstand: unplausibel (DFC_SCRPODsplyPmpCoil) | 0 |
| 0x80519D | Aktivtank Füllstandssensor, Signal: Kommunikationsfehler (DFC_UTnkCLSSensMon) | 0 |
| 0x80519E | Fördermodul: abgezogener Stecker erkannt (DFC_SCRCtlTampDetnConn1) | 0 |
| 0x80519F | Aktivtank Heizung und Füllstandssensor: abgezogener Stecker erkannt (DFC_SCRCTLTampDetnConn2) | 0 |
| 0x8051A0 | Fördermodul, Rückförderpumpe, Ansteuerung: Unterbrechung (DFC_UrBackFlowPmpOL, Pin50) | 0 |
| 0x8051A1 | Dosiermodul: überhitzt (DFC_SCRPODAdvUrDosVlvOvht) | 0 |
| 0x8051A2 | Fördermodul, Rückförderpumpe, Ansteuerung: Kurzschluss nach Plus (DFC_UrBackFlowPmpSCB, Pin50) | 0 |
| 0x8051A3 | Fördermodul, Rückförderpumpe, Ansteuerung: Kurschluss nach Masse (DFC_UrBackFlowPmpSCG, Pin50) | 0 |
| 0x8051A4 | Transferpumpe, Ansteuerung: Unterbrechung (DFC_UrRefillPmpOL, Pin49) | 0 |
| 0x8051A5 | SCR-Steuergerät: interner Fehler (Endstufe Umpumpe Übertemperatur, DFC_UrRefillPmpOvrTemp) | 0 |
| 0x8051A6 | Transferpumpe, Ansteuerung: Kurschluss nach Plus (DFC_UrRefillPmpSCB, Pin49) | 0 |
| 0x8051A7 | Transferpumpe, Ansteuerung: Kurschluss nach Masse (DFC_UrRefillPmpSCG, Pin49) | 0 |
| 0x8051A8 | Fördermodul, Förderpumpe, Ansteuerung: Unterbrechung (DFC_UrSolnPmpOL, Pin29) | 0 |
| 0x8051A9 | SCR-Steuergerät: interner Fehler (Endstufe Förderpumpe Übertemperatur, DFC_UrSolnPmpOvrTemp) | 0 |
| 0x8051AA | Fördermodul, Förderpumpe, Ansteuerung: Kurzschluss nach Plus (DFC_UrSolnPmpSCB, Pin29) | 0 |
| 0x8051AB | Fördermodul, Förderpumpe, Ansteuerung: Kurzschluss nach Masse (DFC_UrSolnPmpSCG, Pin29) | 0 |
| 0x8051AC | Fördermodul, Systemdruck: Überdruckfehler (ohne Stateabhängigkeit, DFC_SCRMonOvrPresErr) | 0 |
| 0x8051AD | Fördermodul, Systemdruck: Druckaufbaufehler (DFC_SCRMonPresBuildUpErr) | 0 |
| 0x8051AE | Fördermodul, Unterdruckfehler in Metering Control, untere Druckschwelle (DFC_SCRMonMetCtlUndrPresErrLo) | 0 |
| 0x8051AF | Dosierleitungsheizung, Leistung: zu gering (DFC_UHCPLPTCOpCirErr) | 0 |
| 0x8051B0 | Dosierleitungsheizung, Leistung: zu hoch (DFC_UHCPLPTCShCirErr) | 0 |
| 0x8051B1 | Aktivtankheizung, Leistung: zu gering (DFC_UHCTnkPTCOpCirErr) | 0 |
| 0x8051B2 | Aktivtankheizung, Leistung: zu hoch (DFC_UHCTNKPTCShCirrErr) | 0 |
| 0x8051B3 | Fördermodul, Zustandsunabhängiger Überdruckfehler, obere Druckschwelle (DFC_SCRMonOvrPresErrHi) | 0 |
| 0x8051B4 | Fördermodul, Zustandsunabhängiger Überdruckfehler, untere Druckschwelle (DFC_SCRMonOvrPresErrLo) | 0 |
| 0x8051B5 | Rückförderpumpe, Angelerntes Volumen außerhalb des zulässigen Bereichs (DFC_SCRPODVolLrnBFP) | 0 |
| 0x8051B6 | Aktivtank, Kavität (Hohlraum an Pumpe) erkannt (DFC_UHCCavChkAck) | 0 |
| 0x8051B7 | SCR-Steuergerät: interner Fehler (Umgebungsdrucksensor nicht verbaut) [DFC_EnvTDef] | 0 |
| 0x8051B8 | Aktivtank, Füllstandssensor: Hochpegel-Leitungsfehler (SCB oder OL) erkannt. (DFC_UTnkCLSHiLine) | 0 |
| 0x8051B9 | Aktivtank, Füllstandssensor: Stromausfall - Niedrigpegel-Leitungsfehler. (DFC_UTnkCLSLoLine) | 0 |
| 0x8051C0 | Dosierleitungsheizung, Leitungsunterbrechung (DFC_UHtrPLOL, Pin6) | 0 |
| 0x8051C1 | SCR-Steuergerät: interner Fehler (Endstufe Dosierleitungsheizung Übertemperatur, DFC_UHtrPLOvrTemp) | 0 |
| 0x8051C4 | Dosierleitungsheizung, Ansteuerung: Kurzschluss nach Plus (DFC_UHtrPLSCB, Pin6) | 0 |
| 0x8051C5 | Dosierleitungsheizung, Ansteuerung: Kurschluss nach Masse (DFC_UHtrPLSCG, Pin6) | 0 |
| 0x8051C8 | Aktivtankheizung, Ansteuerung: Unterbrechung (DFC_UHtrTnkOL, Pin2) | 0 |
| 0x8051C9 | SCR-Steuergerät: interner Fehler (Endstufe Aktivtankheizung Übertemperatur, DFC_UHtrTnkOvrTemp) | 0 |
| 0x8051CC | Aktivtankheizung, Ansteuerung: Kurzschluss nach Plus (DFC_UHtrTnkSCB, Pin2) | 0 |
| 0x8051CD | Aktivtankheizung, Ansteuerung: Kurschluss nach Masse (DFC_UHtrTnkSCG, Pin2) | 0 |
| 0x8051D0 | Passivtank, Füllstandssensor, Signal: zu hoch (DFC_UPasTnkCLSLvlPhyRngHi) | 0 |
| 0x8051D1 | Passivtank Füllstandssensor, Signal: zu niedrig (DFC_UPasTnkCLSLvlPhyRngLo) | 0 |
| 0x8051D4 | Passivtank Temperatursensor, Signal: zu hoch (DFC_UPasTnkCLSTPhyRngHi) | 0 |
| 0x8051D5 | Passivtank, Temperatursensor, Signal: zu niedrig (DFC_UPasTnkCLSTPhyRngLo) | 0 |
| 0x8051D6 | Passivtank, Temperatursensor, Signal: zu hoch (DFC_UPasTnkCLSTSRCMax) | 0 |
| 0x8051D7 | Passivtank, Temperatursensor, Signal: zu niedrig (DFC_UPasTnkCLStSRCMin) | 0 |
| 0x8051D8 | Aktivtank, Füllstandssensor, Signal: zu hoch (DFC_UTnkCLSLvlPhyRngHi) | 0 |
| 0x8051D9 | Aktivtank, Füllstandssensor, Signal: zu niedrig (DFC_UTnkCLSLvlPhyRngLo) | 0 |
| 0x8051DC | Aktivtank, Temperatursensor, Signal: zu hoch (DFC_UTnkCLSTPhyRngHi) | 0 |
| 0x8051DD | Temperatursensor Aktivtank, untere Grenze unterschritten (DFC_UTnkCLSTPhyRngLo) | 0 |
| 0x8051DE | Temperatursensor Aktivtank, Signal Range Check Max (DFC_UTnkCLSTSRCMax) | 0 |
| 0x8051DF | Temperatursensor Aktivtank, Signal Range Check Min (DFC_UTnkCLSTSRCMin) | 0 |
| 0x8051E0 | Dosierventil blockiert (DFC_SCRPODPlausUDosVlv) | 0 |
| 0x8051E1 | Systemdruck, Überdruckfehler im Dosierbetrieb (DFC_SCRMonMetCtlOvrPresErr) | 0 |
| 0x8051E2 | Systemdruck Unterdruckfehler im Dosierbetrieb (DFC_SCRMonMetCtlUndrPresErr) | 0 |
| 0x8051E6 | Temperaturfühler Aktivtank, keine Signaländerung trotz heizen (DFC_SCRPODTnkTempResp) | 0 |
| 0x8051E7 | Dosierventil, Dosierventil überhitzt (DFC_UDosVlvOvht) | 0 |
| 0x8051E9 | SCR-Steuergerät: interner Fehler (EEP Löschfehler, DFC_EEPEraseErr) | 0 |
| 0x8051EA | SCR-Steuergerät: interner Fehler (EEP Lesefehler, DFC_EEPRdErr) | 0 |
| 0x8051EB | SCR-Steuergerät: interner Fehler (EEP Schreibfehler, DFC_EEPWrErr)) | 0 |
| 0x8051EC | Fehlerpfad für BMW nicht relevant und totbedatet (Frühes Öffnen des Hauptrelais; nur Daimler) (DFC_MRlyErlyOpng) | 0 |
| 0x8051ED | Fehlerpfad für BMW nicht relevant und totbedatet (Klebendes Hauptrelais; nur Daimler) (DFC_MRlyStk ) | 0 |
| 0x8051F0 | SCR-Steuergerät: interner Fehler (Plausibilisierung von Funktionsrechner und Überwachungsmodul, DFC_MoCComErrCnt) | 0 |
| 0x8051F1 | SCR-Steuergerät: interner Fehler (Störung in der SPI-Kommunikation, DFC_MoCComSPI) | 0 |
| 0x8051F2 | SCR-Steuergerät: interner Fehler (Datensatzvariantenbezeichner ungültig, DFC_SSwtSVarMngDatasetIdErr) | 0 |
| 0x8051F3 | SCR-Steuergerät: interner Fehler (Datensatzvariantenumschaltfehler, DFC_SSwtSVarMngDatasetSwtErr) | 0 |
| 0x8051F4 | SCR-Steuergerät: interner Fehler (EEPROM-Lesefehler des Codewortes, DFC_SSwtSVarMngEEPErr) | 0 |
| 0x8051F5 | Software Reset (Fehlerpfade mit Eigenschaft sichtbar für alle Tester; DFC_SWReset_0) | 0 |
| 0x8051F6 | SCR-Steuergerät: Software Reset (Fehlerpfade mit Eigenschaft unsichtbar für alle Tester; DFC_SWReset_1) | 0 |
| 0x8051F7 | Software Reset (Fehlerpfade mit Eigenschaft unterdrückt; DFC_SWReset_2) | 0 |
| 0x8051F9 | Plausibilität Aktivtank Levelsignal zu Temperatursignal (flüssig = gültiges Levelsignal, DFC_UTnkCLSTVDPlausChkWrm) | 0 |
| 0x8051FA | Plausibilität Förderpumpe, Druckerkennung nicht möglich (DFC_SCRPODPlausSplyPmp) | 0 |
| 0x8051FB | Passivtank Temperatursensor, Offsetfehler zu Referenztemperatur (DFC_UPasTnkCLSTVDPlausTMax) | 0 |
| 0x8051FC | Passivtank Temperatursensor, Offsetfehler zu Referenztemperatur (DFC_UPasTnkCLSTVDPlausTMin) | 0 |
| 0x8051FD | Aktivtank Temperatursensor, Offsetfehler zu Referenztemperatur (DFC_UTnkCLSTVDPlausTMax) | 0 |
| 0x8051FE | Aktivtank Temperatursensor, Offsetfehler zu Referenztemperatur (DFC_UTnkCLSTVDPlausTMin) | 0 |
| 0x8051FF | SCR-Steuergerät: interner Fehler (Endstufe Rückförderpumpe Übertemperatur, DFC_UrBackFlowPmpOT) | 0 |
| 0x805200 | Rückförderpumpe, Leitungsunterbrechung (DFC_SCRRlyBackFlowPmpOL, Pin55) | 0 |
| 0x805201 | SCR-Steuergerät: interner Fehler (Endstufe Rückförderpumpe Übertemperatur, DFC_SCRRlyBackFlowPmpOT) | 0 |
| 0x805202 | Rückförderpumpe, Kurschluss nach Plus (DFC_SCRRlyBackFlowPmpSCB, Pin55) | 0 |
| 0x805203 | Rückförderpumpe, Kurschluss nach Masse (DFC_SCRRlyBackFlowPmpSCG, Pin55) | 0 |
| 0x805204 | Sensorversorgung, Leitungsunterbrechung (DFC_SCRRlySnsrSplyOL) | 0 |
| 0x805205 | SCR-Steuergerät: interner Fehler (Endstufe Sensorversorgung Übertemperatur, DFC_SCRRlySnsrSplyOT) | 0 |
| 0x805206 | Sensorversorgung, Kurzschluss nach Plus (DFC_SCRRlySnsrSplySCB) | 0 |
| 0x805207 | Sensorversorgung, Kurzschluss nach Masse (DFC_SCRRlySnsrSplySCG) | 0 |
| 0x805208 | Förderpumpe, Leitungsunterbrechung (DFC_SCRRlySplyPmpOL, Pin51) | 0 |
| 0x805209 | SCR-Steuergerät: interner Fehler (Endstufe Förderpumpe Übertemperatur, DFC_SCRRlySplyPmpOT) | 0 |
| 0x80520A | Förderpumpe, Kurzschluss nach Plus (DFC_SCRRlySplyPmpSCB, Pin51) | 0 |
| 0x80520B | Förderpumpe, Kurschluss nach Masse (DFC_SCRRlySplyPmpSCG, Pin51) | 0 |
| 0x80520C | Transferpumpe, Leitungsunterbrechung (DFC_SCRRlyUrRefillPmpOL, Pin76) | 0 |
| 0x80520D | SCR-Steuergerät: interner Fehler (Endstufe Transferpumpe Übertemperatur, DFC_SCRRlyUrRefillPmpOT) | 0 |
| 0x80520E | Transferpumpe, Kurzschluss nach Plus (DFC_SCRRlyUrRefillPmpSCB, Pin76) | 0 |
| 0x80520F | Transferpumpe, Kurschluss nach Masse (DFC_SCRRlyUrRefillPmpSCG, Pin76) | 0 |
| 0x805210 | Dosierleitungsheizung, Physical Range Check high (DFC_UHtrPLPhysRngHiDiag) | 0 |
| 0x805211 | Dosierleitungsheizung, Physical Range Check low (DFC_UHtrPLPhysRngLoDiag) | 0 |
| 0x805212 | Dosierleitungsheizung, Signal Range Check high (DFC_UHtrPLSRCMaxDiag) | 0 |
| 0x805213 | Dosierleitungsheizung, Signal Range Check low (DFC_UHtrPLSRCMinDiag) | 0 |
| 0x805214 | Aktivtankheizung, Physical Range Check high (DFC_UHtrTnkPhyRngHiDiag) | 0 |
| 0x805215 | Aktivtankheizung, Physical Range Check low (DFC_UHtrTnkPhyRngLoDiag) | 0 |
| 0x805216 | Aktivtankheizung, Signal Range Check high (DFC_UHtrTnkSRCMaxDiag) | 0 |
| 0x805217 | Aktivtankheizung, Signal Range Check low (DFC_UHtrTnkSRCMinDiag) | 0 |
| 0x805218 | Levelsensor Passivtank, Signal Range Check max (DFC_UPasTnkCLSLvlSRCMax) | 0 |
| 0x805219 | Levelsensor Passivtank, Signal Range Check min (DFC_UPasTnkCLSLvlSRCMin) | 0 |
| 0x80521A | Levelsensor Aktivtank, Signal Range Check max (DFC_UTnkCLSLvlSRCMax) | 0 |
| 0x80521B | Levelsensor Aktivtank, Signal Range Check min (DFC_UTnkCLSLvlSRCMin) | 0 |
| 0x80521C | Plausibilität Tankinhalt Aktivtank, Füllstand zu hoch (DFC_SCRPODPlausUTnkLvlHi) | 0 |
| 0x80521D | Plausibilität Tankinhalt Aktivtank, Füllstand zu niedrig (DFC_SCRPODPlausUTnkLvlLo) | 0 |
| 0x80521E | Plausibilität Levelsensor Aktivtank, Schwapperkennung fehlerhaft (DFC_SCRPODUrTankLvlDynPlaus) | 0 |
| 0x80521F | Schlechte AdBlue Qualität, Adaptionsgrenze erreicht (DFC_RdcAgQlDetFail) | 0 |
| 0x805220 | Time to closed Loop Fehler, zu später Druckaufbau (DFC_SCRPODTiTilClsdLoop) | 0 |
| 0x805221 | Plausibilität Rückförderpumpe, Druckabbaufehler (DFC_SCRPODPRednErr) | 0 |
| 0x805222 | Plausibilität Förderpumpentemperatur, Offset zu Tanktemperatur zu groß | 0 |
| 0x805223 | Plausibilität Tanktemperatur Aktivtank, Gefrierpunktserkennung AdBlue (DFC_UTnkCLSTVDOffsetChk) | 0 |
| 0x805224 | SCR-Steuergerät: interner Fehler (CAN Anbindung defekt, DFC_BusDiagBusOffNodeA) | 0 |
| 0x805225 | SCR-Steuergerät: interner Fehler (CAN Hardware defekt, DFC_BusDiagHwCan) | 0 |
| 0x805229 | SCR-Steuergerät: falsche Software im Steuergerät (DFC_VehCtryTypChk) | 0 |
| 0x80522A | Plausibilität  Klemme 15WUP zu CAN Klemme 15 Signal (DFC_T15Npl, Pin44) | 0 |
| 0x80522B | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursenor Signal Range Check max, DFC_TECUSRCMax_0) | 0 |
| 0x80522C | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursenor Signal Range Check max, DFC_TECUSRCMax_1) | 0 |
| 0x80522D | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursenor Signal Range Check min, DFC_TECUSRCMin_0) | 0 |
| 0x80522E | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check min, DFC_TECUSRCMin_1) | 0 |
| 0x80522F | Transferpumpe, Physikal Range Check high (DFC_UrRefillPmpPhyRngHiDiag) | 0 |
| 0x805230 | Transferpumpe, Physikal Range Check low (DFC_UrRefillPmpPhyRngLoDiag) | 0 |
| 0x805231 | Transferpumpe, Signal Range Check max (DFC_UrRefillPmpSRCMaxDiag) | 0 |
| 0x805232 | Transferpumpe, Signal Range Check min (DFC_UrRefillPmpSRCMinDiag) | 0 |
| 0x805235 | SCR-Steuergerät: interner Fehler (ROE Sendebuffer voll, DFC_I14229_ROE_BufFull) | 0 |
| 0x805236 | SCR-Steuergerät: interner Fehler (ROE senden nicht erfolgreich, DFC_I14229_ROE_TxFailed) | 0 |
| 0x805237 | Umgebungstemperatursensor am SCR Steuergerät, Physikal Range Check high (DFC_EnvTPRCMax) | 0 |
| 0x805238 | Umgebungstemperatursensor am SCR Steuergerät, Physikal Range Check low (DFC_EnvTPRCMin) | 0 |
| 0x805239 | Plausibilität Dosierventil Spulentemperatur (DFC_SCRPODUrDosVlvTCoilPlaus) | 0 |
| 0x80523A | Sperrinformation für Restreichweitenberechnung von DME1 (DFC_FIdRdcAgMlgRmn) | 0 |
| 0x80523B | Sperrinformation für AdBlue-Verbrauchsabweichung von Motorsteuergerät (DFC_FIdSCRCtlDvtRgntCons) | 0 |
| 0x80523C | Sperrinformation für Aktivtankfüllstand von Motorsteuergerät (DFC_FIdSCRCtlEmptTnk) | 0 |
| 0x80523D | Sperrinformation für NOx_Emissionen von Motorsteuergerät (DFC_FIdSCRCtlHINOXEmi) | 0 |
| 0x80523E | Sperrinformation für Fehlerheilung Inducement von Motorsteuergerät (DFC_FIdSCRCtlHealRls) | 0 |
| 0x80523F | Sperrinformation für getestete FID Fehlerheilung Inducement von Motorsteuergerät (DFC_FIdSCRCtlHealRlsTst) | 0 |
| 0x805240 | Sperrinformation für Regeneration SCR-System von Motorsteuergerät (DFC_FIdSCRCtlIncorRgnt) | 0 |
| 0x805241 | Sperrinformation für Wirkungsgradberechnung von Motorsteuergerät (DFC_FIdSCRCtlRdcAgEffErr) | 0 |
| 0x805242 | Sperrinformation für Qualitätserkennung von Motorsteuergerät (DFC_FIdSCRCtlRdcAgQlDet) | 0 |
| 0x805243 | Sperrinformation für AdBlue-Qualität von Motorsteuergrät (DFC_FIdSCRCtlRdcAgQlDetFail) | 0 |
| 0x805244 | Sperrinformation für Reduktionsmittelqualität von Motorsteuergerät (DFC_FIdSCRCtlRdcAgQlErr) | 0 |
| 0x805247 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check max, DFC_TECUPhysRngHi_0) | 0 |
| 0x805248 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check max, DFC_TECUPhysRngHi_1) | 0 |
| 0x805249 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check min, DFC_TECUPhysRngLo_0) | 0 |
| 0x80524A | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check min, DFC_TECUPhysRngLo_1) | 0 |
| 0x80524B | Dosiermodul, Spulentemperatur: unplausibel (zu Referenztemperatur, DFC_SCRPODAdvDosVlvTMon) | 0 |
| 0x80524C | Passivtank: leer (DFC_UDCPasRdcAgRmn) | 0 |
| 0x80524D | Fördermodul, Rückförderpumpe: Volumen zu groß (DFC_SCRPODVolLrnOverMaxBFP) | 0 |
| 0x80524E | Fördermodul, Rückförderpumpe: Volumen zu klein (DFC_SCRPODVolLrnUndrMinBFP) | 0 |
| 0x80524F | Passivtank Füllstandssensor: Drahtbruch (DFC_UPasTnkCLSBrknWire) | 0 |
| 0x805250 | Passivtank Füllstandssensor: Schwingkreisfehler (DFC_UPasTnkCLSChrgPmp) | 0 |
| 0x805252 | Passivtank Füllstandssensor, Signal: Echofehler (DFC_UPasTnkCLSNoEcho) | 0 |
| 0x805256 | Aktivtank Füllstandssensor, Signal: Echofehler (DFC_UTnkCLSNoEcho) | 0 |
| 0x805257 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Kurzschluss nach Plus, DFC_TECUCPUSCB) | 0 |
| 0x805258 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Kurzschluss nach Masse, DFC_TECUCPUSCG) | 0 |
| 0x805259 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Fehler, DFC_TECUCPUSensErr) | 0 |
| 0x80525A | Fördermodul: Rücksaugkanal verstopft nach Auftauzyklus (DFC_SCRMonBackFlowCh) | 0 |
| 0x80525B | Dosiermengenabweichung, dosierte Menge zu gering (DFC_SCRPODCnsDeMonMax) | 0 |
| 0x80525C | Dosiermengenabweichung, dosierte Menge zu hoch (DFC_SCRPODCnsDeMonMin) | 0 |
| 0x80525D | Druckaufbaufehler nach Spülen (DFC_SCRMonPresBuildUpPurg) | 0 |
| 0x80525E | Fördermodul, Förderpumpe: Druckaufbaufehler nach Auftauzyklus, Ansaugstelle gefroren (DFC_SCRMonSplyPmpIntkChDfrst) | 0 |
| 0x80525F | Druckaufbau: nach Auftauzyklus zu schnell, Dosierleitung eingefroren (DFC_SCRMonSplyPmpPLineDfrst) | 0 |
| 0x805260 | SCR-Steuergerät: Montagemodus aktiv (DFC_BasSvrApplAsblyMode) | 0 |
| 0x805261 | SCR-Steuergerät: interner Fehler (Fehler während ROM-Speichertest, DFC_MoCROMErrXPg) | 0 |
| 0x805262 | Dosierleitung, Leckageerkennung: Systemdruck nach Dosierpause zu niedrig (DFC_SCRPODLeakDetn) | 0 |
| 0x805263 | Systemdruck, Adaptionswert Druckmodell zu groß (DFC_SCRPODMonPAdjmt) | 0 |
| 0x805264 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check max, DFC_TECUPhysRngHi_2) | 0 |
| 0x805265 | SCR-Steuergerät: interner Fehler (Steuergerätetemperatursensor Signal Range Check min, DFC_TECUPhysRngLo_2) | 0 |
| 0x805266 | Transferpumpe, Ansteuerung: Strom zu hoch (DFC_UrRefillPmpOverI) | 0 |
| 0x805267 | Dosiermodul, Dosierventil: klemmt geöffnet (DFC_SCRPODPlausUDosVlvOpenBlkd) | 0 |
| 0x805268 | Transferpumpe, Ansteuerung: unplausibel (DFC_SCRPODRefillPmp) | 0 |
| 0x80526B | DFC_UHtrPLPhyRngLoDiag - totbedatet | 0 |
| 0x80526C | DFC_SCRPODPSnsrPlausHi - totbedatet | 0 |
| 0x80526D | DFC_SCRPODPSnsrPlausLo - totbedatet | 0 |
| 0x80526F | DFC_UHCHydRls - totbedatet | 0 |
| 0xCBC468 | Transferpumpe, Ansteuerung: unplausibel (DFC_SCRPODRefillPmp) | 1 |
| 0xCBCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCBD400 | Botschaft (Längsbeschleunigung Schwerpunkt, 0x199, DFC_ComENGATO) fehlt Empfänger SCR, Sender ICM QL | 1 |
| 0xCBD401 | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A, DFC_ComENGBTO) fehlt Empfänger SCR, Sender ICM QL | 1 |
| 0xCBD402 | Botschaft (Neigung Fahrbahn, 0x163, DFC_ComENGCTO) fehlt Empfänger SCR, Sender ICM QL | 1 |
| 0xCBD403 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5, DFC_ComENGDTO) fehlt Empfänger SCR, Sender DME1 | 1 |
| 0xCBD404 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1, DFC_ComENGFTO) fehlt Empfänger SCR, Sender ICM QL | 1 |
| 0xCBD406 | Botschaft (Daten Antriebsstrang 2, 0x3F9, DFC_ComENGJTO) fehlt Empfänger SCR, Sender DME1 | 1 |
| 0xCBD407 | Botschaft (Daten Antriebsstrang 1, 0x3FB, DFC_ComENGKTO) fehlt Empfänger SCR, Sender DME1 | 1 |
| 0xCBD408 | Botschaft (Bereitstellung Daten SCR, 0x188, DFC_ComENGMTO) fehlt Empfänger SCR, Sender DME1 | 1 |
| 0xCBD409 | Botschaft (Anforderung Bereitstellung SCR-Additiv, 0x84, DFC_ComENGNTO) fehlt Empfänger SCR, Sender DME1 | 1 |
| 0xCBD40A | Botschaft (Außentemperatur, 0x2CA, DFC_ComENGOTO) fehlt Empfänger SCR, Sender Kombi | 1 |
| 0xCBD40B | Botschaft (Relativzeit BN2020, 0x328, DFC_ComENGPTO) feghlt Empfänger SCR, Sender Kombi | 1 |
| 0xCBD40D | Botschaft (Längsbeschleunigung Schwerpunkt, 0x199, DFC_ComENGADLC) Signal ungültig | 1 |
| 0xCBD40E | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A, DFC_ComENGBDLC) Signal ungültig | 1 |
| 0xCBD40F | Botschaft (Neigung Fahrbahn, 0x163, DFC_ComENGCDLC) Signal ungültig | 1 |
| 0xCBD410 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5, DFC_ComENGDDLC) Signal ungültig | 1 |
| 0xCBD411 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1, DFC_ComENGFDLC) Signal ungültig | 1 |
| 0xCBD413 | Botschaft (Daten Antriebsstrang 2, 0x3F9, DFC_ComENGJDLC) Signal ungültig | 1 |
| 0xCBD414 | Botschaft (Daten Antriebsstrang 1, 0x3FB, DFC_ComENGKDLC) Signal ungültig | 1 |
| 0xCBD415 | Botschaft (Bereitstellung Daten SCR, 0x188, DFC_ComENGMDLC) Signal ungültig | 1 |
| 0xCBD416 | Botschaft (Anforderung Bereitstellung SCR-Additiv, 0x84, DFC_ComENGNDLC) Signal ungültig | 1 |
| 0xCBD417 | Botschaft (Außentemperatur, 0x2CA, DFC_ComENGODLC) Signal ungültig | 1 |
| 0xCBD418 | Botschaft (Relativzeit BN2020, 0x328, DFC_ComENGPDLC) Signal ungültig | 1 |
| 0xCBD41A | Botschaft (Temperatur Daten Motor, 0x2CB, DFC_ComENGQTO) fehlt Empfänger SCR, Sender DME1 | 1 |
| 0xCBD41B | Botschaft (Temperatur Daten Motor, 0x2CB, DFC_ComENGQDLC) Signal ungültig | 1 |
| 0xCBD41C | Botschaft (Fahrzeugtyp, 0x388, DFC_ComENGRTO) fehlt Empfänger SCR, Sender CAS | 1 |
| 0xCBD41D | Botschaft (Klemmen, 0x12F, DFC_ComENGSTO) fehlt Empfänger SCR, Sender CAS | 1 |
| 0xCBD41E | Botschaft (Fahrzeugtyp, 0x388, DFC_ComENGRDLC) Signal fehlt | 1 |
| 0xCBD41F | Botschaft (Klemmen, 0x12F, DFC_ComENGSDLC) Signal fehlt | 1 |
| 0xCBD420 | Botschaft (Kilometerstand, 0x330, DFC_ComENGTTO) fehlt Empfänger SCR, Sender Kombi | 1 |
| 0xCBD421 | Botschaft (Kilometerstand, 0x330, DFC_ComENGTDLC) Signal ungültig | 1 |
| 0xCBD422 | Botschaft (Relativzeit, 0x328, DFC_ComCtrSecInt) fehlt Empfänger SCR, Sender Kombi | 1 |
| 0xCBD423 | Botschaft (Kraftstoff Einspritzmenge, 0x2C4, DFC_ComENGUTO) fehlt Empfänger SCR, Sender Motorsteuergerät | 1 |
| 0xCBD424 | Botschaft (Diagnose OBD Motor, 0x397, DFC_ComOBD1TO) fehlt Empfänger SCR, Sender Motorsteuergerät | 1 |
| 0xCBD425 | Botschaft (Status Verbrauch Kraftstoff Motor, 0x2C4, DFC_ComENGUDLC) Signal ungültig | 1 |
| 0xCBD426 | Botschaft (Diagnose OBD Motor, 0x397, DFC_ComOBD1DLC) Signal ungültig | 1 |
| 0xCBD427 | Botschaft (Fahrzeugzustand, 0x3A0, DFC_ComENGWTO) fehlt; Empfänger SCR, Sender FEM/CAS | 1 |
| 0xCBD428 | Botschaft (Fahrzeugzustand, 0x3A0, DFC_ComENGWDLC) Signal ungültig | 1 |
| 0xCBD429 | Botschaft (Istdrehzahl Rad ungesichert, 0x254, DFC_ComENGVTO) fehlt; Empfänger SCR, Sender DSC | 1 |
| 0xCBD430 | Botschaft (Istdrehzahl Rad ungesichert, 0x254, DFC_ComENGVDLC) Signal ungültig | 1 |
| 0xCBD431 | Botschaft (Ist Drehzahl Rad vorne links, 0x254, DFC_ComNFLWhl) Signal ungültig | 1 |
| 0xCBD432 | Botschaft (Ist Drehzahl Rad vorne rechts, 0x254, DFC_ComNFRWhl) Signal ungültig | 1 |
| 0xCBD433 | Botschaft (Ist Drehzahl Rad hinten links, 0x254, DFC_ComNRLWhl) Signal ungültig | 1 |
| 0xCBD434 | Botschaft (Ist Drehzahl Rad hinten rechts, 0x254, DFC_ComNRRWhl) Signal ungültig | 1 |
| 0xCBD435 | DFC_ComFzgzustandSig_FA - totbedatet | 1 |
| 0xCBEC00 | Signal (Luftdruck_Motor_Antrieb in Botschaft 0x3FB; DFC_EnvPSig) wird nicht empfangen | 1 |
| 0xCBEC01 | Signal (TEMP_EX in Botschaft 0x2CA; DFC_EnvTSig) wird nicht empfangen | 1 |
| 0xCBEC03 | Signalfehler Klemme 15 (DFC_T15Sig) | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E20 | LANGZEITERFASSUNG_DOSIERMENGE | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x5E21 | FUELLSTAND_AKTIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E22 | UMPUMPMENGE_BEENDIGUNG_UMPUMPVORGANG | TEXT | High | 24 | - | 1.0 | 1.0 | 0.0 |
| 0x5E23 | EEP_KAVITAETSPRUEFUNG_HEIZERSTROMLERNWERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E34 | MASSE_AKTIVTANK | g | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E35 | MASSE_PASSIVTANK | g | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E36 | LANGZEITDOSIERMENGE | g | High | signed long | - | 1.0 | 1000.0 | 0.0 |
| 0x5E37 | STROM_AKTIVTANK_HEIZUNG | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E39 | STROM_DOSIERLEITUNG_HEIZUNG | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E3A | LANGZEITUMPUMPMENGE | g | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E3B | TEMPERATUR_AKTIVTANK | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3C | TEMPERATUR_PASSIVTANK | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3D | TEMPERATUR_FOERDERPUMPE_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3E | TEMPERATUR_TRANSFERPUMPE_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3F | DRUCK_SYSTEM_MODELL | hPa | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E40 | ZUSTAND_SCR_STATEMACHINE | 0-n | High | 0xFF | TAB_ZUSTAND_SCR_STATEMACHINE | - | - | - |
| 0x5E41 | UNTERZUSTAND_SCR_STATEMACHINE | 0-n | High | 0xFF | TAB_UNTERZUSTAND_SCR_STATEMACHINE | - | - | - |
| 0x5E42 | TEMPERATUR_DOSIERVENTIL_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E43 | BATTU_U_S | mV | High | unsigned int | - | 20.0 | 1.0 | 0.0 |
| 0x5E44 | RESTREICHWEITE_DDE | km | High | signed long | - | 1.0 | 20.0 | 0.0 |
| 0x5E46 | ANSTEUERUNG_TRANSFERPUMPE | % | High | unsigned int | - | 1.0 | 81.92 | 0.0 |
| 0x5E47 | AKTIVTANKFUELLSTAND_UNGEFILTERT | % | High | unsigned int | - | 1.0 | 81.92 | 0.0 |
| 0x5E48 | PASIVTANKFUELLSTAND_UNGEFILTERT | % | High | unsigned int | - | 1.0 | 81.92 | 0.0 |
| 0x5E4B | UMGEBUNGSLUFTTEMPERATUR | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E4C | AKTIVTANKHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E4D | DOSIERLEITUNGSHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E4E | BETRIEBSZEIT_MOTOR | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E4F | ABSTELLZEIT_MOTOR | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E54 | SOLL_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E55 | IST_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E56 | STAT_AUFTAU_PRUEFBOTSCHAFT_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E57 | ZUSTAND_VERBRENNUNGSMOTOR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E58 | DPF_CAN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E59 | UMGEBUNGSDRUCK | hPa | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E5A | ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | 0-n | High | 0xFF | TAB_ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | - | - | - |
| 0x5E5B | ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | 0-n | High | 0xFF | TAB_ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | - | - | - |
| 0x5E5C | ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | 0-n | High | 0xFF | TAB_ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | - | - | - |
| 0x5E5E | KLEMME15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E5F | KLEMME15_PLAUSIBEL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E60 | BETANKUNG_AKTIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E61 | BETANKUNG_PASSIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E64 | STAT_UMPUMPEINHEIT_STATUS_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E65 | TASTVERHAELTNIS_TRANSFERPUMPE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E66 | TASTVERHAELTNIS_RUECKFOERDERPUMPE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E67 | TEMPERATUR_RUECKFOERDERPUMPE_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E6A | ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | 0-n | High | 0xFF | TAB_ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | - | - | - |
| 0x5E6B | ZUSTAND_TANKINHALTSBERECHNUNG_PASSIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E6C | AUFTAUSTATUS_DOSIERLEITUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x5E6D | AUFTAUSTATUS_FOERDERMODUL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E6E | AUFGETAUTES_REDUKTIONSMITTEL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E6F | AUFTAUSTATUS_AKTIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E70 | TEMPERATUR_SCR_KATALYSATOR | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E71 | TEMPERATUR_KUEHLMITTEL | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E72 | TEMPERATUR_KRAFTSTOFF | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E73 | ANZAHL_PUMPENHUEBE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E74 | ZEIT_MSP | ms | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x5E75 | STROM_MSP | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E76 | STAT_ACTIVTANK_HEIZUNG_STROM | mA | High | signed int | - | 1.0 | 10000.0 | 0.0 |
| 0x5E77 | ADC_ALTIVTANK_HEIZUNG | mV | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x5E78 | STAT_STROM_DOSIERLEITUNG_HEIZUNG_WERT | mA | High | signed int | - | 1.0 | 10000.0 | 0.0 |
| 0x5E79 | ADC_DOSIERLEITUNG_HEIZUNG | mV | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x5E7A | STROM_RUECKFOERDERPUMPE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E7B | VOLUMEN_RUECKFOERDERPUMPE | ml | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E7C | ZUSTAND_TRANSFERPUMPE | 0-n | High | 0xFF | TAB_ZUSTAND_TRANSFERPUMPE | - | - | - |
| 0x5E7D | BESCHLEUNIGUNG | m/s² | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E7F | STAT_NACHFUELLBARE_MENGE_AKTIVTANK_WERT | ml | High | signed int | - | 2.0 | 1.0 | 0.0 |
| 0x5E80 | STAT_NACHFUELLBARE_MENGE_PASSIVTANK_WERT | ml | High | unsigned int | - | 2.0 | 1.0 | 0.0 |
| 0x5E81 | STAT_GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_AKTIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E82 | STAT_GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_AKTIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E83 | STAT_GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_PASSIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E84 | STAT_GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_PASSIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E85 | ZEIT_ERKENNUNG_BMP | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5E86 | STROM_ERKENNUNG_BPM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E87 | SPULENWIDERSTAND_FOERDERPUMPE_ROHWERT | mOhm | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E88 | STAT_INTEGRIERTE_ANFORDERUNG_DOSIERMASSE_WERT | g | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E89 | STAT_FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8A | STAT_FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_PASSIVTANK_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8B | STAT_FREQUENZ_REFILL_PUMPE_WERT | Hz | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8C | STAT_SPULENWIDERSTAND_FOERDERPUMPE_KORRIGIERT | mOhm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8E | STAT_SPULENTEMPERATUR_FOERDERPUMPE_KORREKTORFAKTOR_WERT | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E8F | PUMPENHUEBE_DRUCKAUFBAU | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E90 | STAT_LEITWERT_AKTIVTANKHEIZUNG_WERT | 1/Ohm | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E91 | STAT_LEITWERT_DOSIERLEITUNGSHEIZUNG_WERT | 1/Ohm | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E92 | AKTIVTANK_GEFROREN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E93 | STAT_VOLUMEN_AKTIVTANK_SCHNELL_GEFILTERT_WERT | ml | High | unsigned int | - | 2.0 | 1.0 | 0.0 |
| 0x5E94 | STAT_VOLUMEN_PASSIVTANK_SCHNELL_GEFILTERT_WERT | ml | High | unsigned int | - | 2.0 | 1.0 | 0.0 |
| 0x5E95 | TANK_CONTINUOUS_LEVEL_1_SENSOR | mm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x5E96 | STAT_TANK_CONTINUOUS_LEVEL_2_SENSOR_WERT | mm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x5F3E | EEP_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5F4B | EEP_LANGZEITERFASSUNG_DOSIERMENGE | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6030 | RUECKFOERDERPUMPE_ACTUATOR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6031 | FOERDERPUMPE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6032 | TRANSFERPUMPE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6033 | DOSIERVENTIL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6035 | DRUCKLEITUNGSHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6036 | AKTIVTANKHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6130 | STAT_RUECKFOERDERPUMPE_TASTVERHAELTNIS_WERT | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6131 | STAT_FOERDERPUMPE_STATUS_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6132 | STAT_REFILL_PUMP_TASTVERHAELTNIS_WERT | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6133 | STAT_DOSIERVENTIL_TASTVERHAELTNIS_WERT | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6135 | STAT_HEIZUNG_DRUCKLEITUNG_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6136 | STAT_HEIZUNG_TANK_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E20 | LANGZEITERFASSUNG_DOSIERMENGE | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x5E21 | FUELLSTAND_AKTIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E22 | UMPUMPMENGE_BEENDIGUNG_UMPUMPVORGANG | TEXT | High | 24 | - | 1.0 | 1.0 | 0.0 |
| 0x5E23 | EEP_KAVITAETSPRUEFUNG_HEIZERSTROMLERNWERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E34 | MASSE_AKTIVTANK | g | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E35 | MASSE_PASSIVTANK | g | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E36 | LANGZEITDOSIERMENGE | g | High | signed long | - | 1.0 | 1000.0 | 0.0 |
| 0x5E37 | STROM_AKTIVTANK_HEIZUNG | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E39 | STROM_DOSIERLEITUNG_HEIZUNG | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E3A | LANGZEITUMPUMPMENGE | g | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E3B | TEMPERATUR_AKTIVTANK | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3C | TEMPERATUR_PASSIVTANK | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3D | TEMPERATUR_FOERDERPUMPE_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3E | TEMPERATUR_TRANSFERPUMPE_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E3F | DRUCK_SYSTEM_MODELL | hPa | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E40 | ZUSTAND_SCR_STATEMACHINE | 0-n | High | 0xFF | TAB_ZUSTAND_SCR_STATEMACHINE | - | - | - |
| 0x5E41 | UNTERZUSTAND_SCR_STATEMACHINE | 0-n | High | 0xFF | TAB_UNTERZUSTAND_SCR_STATEMACHINE | - | - | - |
| 0x5E42 | TEMPERATUR_DOSIERVENTIL_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E43 | BATTU_U_S | mV | High | unsigned int | - | 20.0 | 1.0 | 0.0 |
| 0x5E44 | RESTREICHWEITE_DDE | km | High | signed long | - | 1.0 | 20.0 | 0.0 |
| 0x5E46 | ANSTEUERUNG_TRANSFERPUMPE | % | High | unsigned int | - | 1.0 | 81.92 | 0.0 |
| 0x5E47 | AKTIVTANKFUELLSTAND_UNGEFILTERT | % | High | unsigned int | - | 1.0 | 81.92 | 0.0 |
| 0x5E48 | PASIVTANKFUELLSTAND_UNGEFILTERT | % | High | unsigned int | - | 1.0 | 81.92 | 0.0 |
| 0x5E4B | UMGEBUNGSLUFTTEMPERATUR | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E4C | AKTIVTANKHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E4D | DOSIERLEITUNGSHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E4E | BETRIEBSZEIT_MOTOR | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E4F | ABSTELLZEIT_MOTOR | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5E54 | SOLL_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E55 | IST_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E56 | STAT_AUFTAU_PRUEFBOTSCHAFT_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E57 | ZUSTAND_VERBRENNUNGSMOTOR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E58 | DPF_CAN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E59 | UMGEBUNGSDRUCK | hPa | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E5A | ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | 0-n | High | 0xFF | TAB_ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | - | - | - |
| 0x5E5B | ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | 0-n | High | 0xFF | TAB_ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | - | - | - |
| 0x5E5C | ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | 0-n | High | 0xFF | TAB_ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | - | - | - |
| 0x5E5E | KLEMME15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E5F | KLEMME15_PLAUSIBEL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E60 | BETANKUNG_AKTIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E61 | BETANKUNG_PASSIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E64 | STAT_UMPUMPEINHEIT_STATUS_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E65 | TASTVERHAELTNIS_TRANSFERPUMPE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E66 | TASTVERHAELTNIS_RUECKFOERDERPUMPE | % | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x5E67 | TEMPERATUR_RUECKFOERDERPUMPE_SPULE | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E6A | ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | 0-n | High | 0xFF | TAB_ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | - | - | - |
| 0x5E6B | ZUSTAND_TANKINHALTSBERECHNUNG_PASSIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E6C | AUFTAUSTATUS_DOSIERLEITUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x5E6D | AUFTAUSTATUS_FOERDERMODUL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E6E | AUFGETAUTES_REDUKTIONSMITTEL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E6F | AUFTAUSTATUS_AKTIVTANK | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E70 | TEMPERATUR_SCR_KATALYSATOR | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E71 | TEMPERATUR_KUEHLMITTEL | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E72 | TEMPERATUR_KRAFTSTOFF | °C | High | unsigned int | - | 1.0 | 10.0 | -273.14 |
| 0x5E73 | ANZAHL_PUMPENHUEBE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E74 | ZEIT_MSP | ms | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x5E75 | STROM_MSP | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E76 | STAT_ACTIVTANK_HEIZUNG_STROM | mA | High | signed int | - | 1.0 | 10000.0 | 0.0 |
| 0x5E77 | ADC_ALTIVTANK_HEIZUNG | mV | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x5E78 | STAT_STROM_DOSIERLEITUNG_HEIZUNG_WERT | mA | High | signed int | - | 1.0 | 10000.0 | 0.0 |
| 0x5E79 | ADC_DOSIERLEITUNG_HEIZUNG | mV | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x5E7A | STROM_RUECKFOERDERPUMPE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E7B | VOLUMEN_RUECKFOERDERPUMPE | ml | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E7C | ZUSTAND_TRANSFERPUMPE | 0-n | High | 0xFF | TAB_ZUSTAND_TRANSFERPUMPE | - | - | - |
| 0x5E7D | BESCHLEUNIGUNG | m/s² | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E7F | STAT_NACHFUELLBARE_MENGE_AKTIVTANK_WERT | ml | High | signed int | - | 2.0 | 1.0 | 0.0 |
| 0x5E80 | STAT_NACHFUELLBARE_MENGE_PASSIVTANK_WERT | ml | High | unsigned int | - | 2.0 | 1.0 | 0.0 |
| 0x5E81 | STAT_GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_AKTIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E82 | STAT_GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_AKTIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E83 | STAT_GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_PASSIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E84 | STAT_GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_PASSIVTANK_WERT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E85 | ZEIT_ERKENNUNG_BMP | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5E86 | STROM_ERKENNUNG_BPM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E87 | SPULENWIDERSTAND_FOERDERPUMPE_ROHWERT | mOhm | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E88 | STAT_INTEGRIERTE_ANFORDERUNG_DOSIERMASSE_WERT | g | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E89 | STAT_FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8A | STAT_FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_PASSIVTANK_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8B | STAT_FREQUENZ_REFILL_PUMPE_WERT | Hz | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8C | STAT_SPULENWIDERSTAND_FOERDERPUMPE_KORRIGIERT | mOhm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5E8E | STAT_SPULENTEMPERATUR_FOERDERPUMPE_KORREKTORFAKTOR_WERT | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E8F | PUMPENHUEBE_DRUCKAUFBAU | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5E90 | STAT_LEITWERT_AKTIVTANKHEIZUNG_WERT | 1/Ohm | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E91 | STAT_LEITWERT_DOSIERLEITUNGSHEIZUNG_WERT | 1/Ohm | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5E92 | AKTIVTANK_GEFROREN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5E93 | STAT_VOLUMEN_AKTIVTANK_SCHNELL_GEFILTERT_WERT | ml | High | unsigned int | - | 2.0 | 1.0 | 0.0 |
| 0x5E94 | STAT_VOLUMEN_PASSIVTANK_SCHNELL_GEFILTERT_WERT | ml | High | unsigned int | - | 2.0 | 1.0 | 0.0 |
| 0x5E95 | TANK_CONTINUOUS_LEVEL_1_SENSOR | mm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x5E96 | STAT_TANK_CONTINUOUS_LEVEL_2_SENSOR_WERT | mm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x5F3E | EEP_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5F4B | EEP_LANGZEITERFASSUNG_DOSIERMENGE | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6030 | RUECKFOERDERPUMPE_ACTUATOR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6031 | FOERDERPUMPE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6032 | TRANSFERPUMPE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6033 | DOSIERVENTIL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6035 | DRUCKLEITUNGSHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6036 | AKTIVTANKHEIZUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6130 | STAT_RUECKFOERDERPUMPE_TASTVERHAELTNIS_WERT | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6131 | STAT_FOERDERPUMPE_STATUS_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6132 | STAT_REFILL_PUMP_TASTVERHAELTNIS_WERT | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6133 | STAT_DOSIERVENTIL_TASTVERHAELTNIS_WERT | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6135 | STAT_HEIZUNG_DRUCKLEITUNG_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6136 | STAT_HEIZUNG_TANK_WERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X5E20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGZEITERFASSUNG_DOSIERMENGE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Langzeiterfassung der Dosiermenge (Avs_IdUDC_DosQnt) Extern Service Funktionen S.1013 |

### RES_0X5E21_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUELLSTAND_AKTIVTANK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Tankfuellstand Avs_IdUDC_UTnkLvl. Extern ServiceFunktionen S1095 |

### RES_0X5E6C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUFTAUSTATUS_DOSIERLEITUNG | 0/1 | high | unsigned char | - | - | - | - | - | Auftaustatus Dosierleitung; UHC_flgPLDfrstChk_s Mit UHC_flgPLDfrstChk == TRUE/1 wird die Dosierfreigabe signalisiert. |

### RES_0X5F4B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EEP_LANGZEITERFASSUNG_DOSIERMENGE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SCR: Langzeiterfassung der Dosiermenge (EEP_UDC_DOSQNT_UDC_MRDCAGDOSQNT) |

### RES_0XAE60_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results SCR Entleerungstest. |

### RES_0XAE61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results Test SCR Rückförderpumpe. |

### RES_0XAE62_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results Test SCR Leckageerkennung. |

### RES_0XAE63_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results Test Druckaufbau. |

### RES_0XAE64_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results Dosiermengentest. |

### RES_0XAE65_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results SCR Dosiermengentest statisch. |

### RES_0XAE66_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results SCR Dosiermengentest dynamisch. |

### RES_0XAE67_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Results SCR Spraytest. |

### RES_0XAE68_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_INIT | - | - | - | Status Inbetriebnahmesquenz. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_REQ_INIT_TESTS | - | - | - | angeforderte Teilschritte |

### RES_0XAE69_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Result SCR Erstbefüllung. |

### RES_0XAE6A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Result SCR Trockentaktung Dosierventil. |

### RES_0XAE6B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_STATUS | - | - | - | Result SCR Funktionsprüfung Umpumpe. |

### RES_0XF043_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_MONTAGEMODUS_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FUNKTIONSSTATUS MONTAGEMODUS |
| STAT_ST_MONTAGE_MODUS_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Montage-Modus aktiv/inaktiv |

### SDF

| WERT | TEXT |
| --- | --- |
| 01 | 1 |
| 00 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KM_STAND | 0x1700 | STAT_KM_STAND_WERT | Mileage of Vehicle, Com_lSum_s  | - | Com_lSum_s | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| STEUERN_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | 0x5E02 | - | AVS: Zeitdauer Übertemperatur am Dosierventil (UDC_tiUDosVlvOvht): UDC_ tiUDosVlvOvh | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E02_D | - |
| STEUERN_RUECKSETZEN_LERNFUNKTION_RUECKFOERDERPUMPE_VOLUMEN | 0x5E03 | - | AVS: Rücksetzung der Lernfunktion für das Volumen der Rückförderpumpe (BFP_VolLrng) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E03_D | - |
| STEUERN_RUECKSETZEN_LERNWERT_DOSIERMODUL_FOERDERMODUL | 0x5E04 | - | AVS: Rücksetzung der Anlernwerte von Dosiermodul und Fördermodul in der Werkstatt (DnoxSA_pPMdlOffs) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E04_D | - |
| STEUERN_RUECKSETZE_LERNWERT_DOSIERMODUL | 0x5E05 | - | AVS: Rücksetzung der Anlernwerte von Dosiermodul in der Werkstatt (DnoxSA_pSysNomDM) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E05_D | - |
| STEUERN_RUECKSETZEN_LERNWERT_FOERDERMODUL | 0x5E06 | - | AVS: Rücksetzung der Anlernwerte von Fördermodul in der Werkstatt (DnoxSA_pSplyPmpOffs) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E06_D | - |
| STEUERN_UEBERSCHREIBEN_FUELLSTAND_DRUCKLEITUNG | 0x5E07 | - | AVS: Füllstand der Druckleitung durch einen Kalibration übermittelten Wert überschrieben (SCRMon_flgFirstFillgFinshd) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E07_D | - |
| STEUERN_RUECKSETZEN_EEPROMWERT_PID88 | 0x5E08 | - | AVS: Rücksetzung auf NULL der EEPROM-Werte des PID88 ( SCRCtl_NonErrPID) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E08_D | - |
| STEUERN_RUECKSETZEN_ADAPTIONSWERT_DOSIERVENTIL | 0x5E09 | - | AVS: Rücksetzung der EEPROM gelernte Werte für die Adaptation der Dosierventil (UDosvlv_ClTAdap) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E09_D | - |
| STEUERN_RUECKSETZEN_ADAPTIONSWERT_FOERDERPUMPENOFFSET | 0x5E0A | - | AVS: Rücksetzung der EEPROM gelernte Werte für die Förderpumpe Offset (UrSolnPmp_OffsClb) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E0A_D | - |
| STEUERN_KAVITAETSPRFUNG_HEIZERSTROMLERNWERT | 0x5E1B | - | AVS: Kavitätsprüfung - Lernwert des Heizerstroms (UHC_CavChk): UHC_i- CavChkLrnThresAvrg_mp | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E1B_D | - |
| STEUERN_FUELLSTAND_PASSIVTANK | 0x5E1C | - | AVS: Aktueller Füllstand im Passiv-Tank (UDC_UPasTnkLvl): UDC_stUPas- TnkLvl | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E1C_D | - |
| STEUERN_LANGZEITERFASSUNG_DOSIERMENGE | 0x5E20 | - | AVS: Langzeiterfassung der Dosiermenge (UDC_DosQnt): UDC_mRdcAg- DosQnt | - | Avs_IdUDC_DosQnt | - | - | - | - | - | - | - | 2E;22 | ARG_0x5E20_D | RES_0x5E20_D |
| STEUERN_FUELLSTAND_AKTIVTANK | 0x5E21 | - | AVS: Aktueller Tankfüllstand (UDC_UTnkLvl): UDC_stUTnkLvl | - | Avs_IdUDC_UTnkLvl | - | - | - | - | - | - | - | 2E;22 | ARG_0x5E21_D | RES_0x5E21_D |
| STEUERN_UMPUMPMENGE | 0x5E22 | - | AVS: Größen bei Beendigung des letzten Umpumpvorgangs (RFC_PmpDReFlCtl) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E22_D | - |
| STEUERN_RUECKSETZEN_BANDENDETEST_CHECK_STATUS | 0x5E23 | - | AVS: RFC_AvsSetEOLChkSuc Rücksetzung der EOL Check Success Status | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5E23_D | - |
| MASSE_AKTIVTANK | 0x5E34 | STAT_MASSE_AKTIVTANK_WERT | AdBlue-Masse im Aktivtank; UDC_mRdcAgRmn_s | g | UDC_mRdcAgRmn_s | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| MASSE_PASSIVTANK | 0x5E35 | STAT_MASSE_PASSIVTANK_WERT | AdBlue-Masse im Passivtank; UDC_mPasRdcAgRmn_s | g | UDC_mPasRdcAgRmn_s | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| LANGZEITDOSIERMENGE | 0x5E36 | STAT_LANGZEITDOSIERMENGE_WERT | Langzeiterfassung der Dosiermenge; UDC_mRdcAgDosQnt_s | g | UDC_mRdcAgDosQnt_s | High | unsigned long | - | 1.0 | 1000.0 | 0.0 | - | 22;2C | - | - |
| STROM_AKTIVTANK_HEIZUNG | 0x5E37 | STAT_STROM_AKTIVTANK_HEIZUNG_WERT | Strom Aktivtank-Heizung (Rohwert); SCRDev_iDiagCirc1_s | mA | SCRDev_iDiagCirc1_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STROM_DOSIERLEITUNG_HEIZUNG | 0x5E39 | STAT_STROM_DOSIERLEITUNG_HEIZUNG_WERT | Strom Dosierleitung-Heizung (Rohwert); SCRDev_iDiagCirc2_s | mA | SCRDev_iDiagCirc2_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| LANGZEITUMPUMPMENGE | 0x5E3A | STAT_LANGZEITUMPUMPMENGE_WERT | Langzeitumpumpmenge; RFC_mRdcAgReFlQnt_s | g | RFC_mRdcAgReFlQnt_s | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| TEMPERATUR_AKTIVTANK | 0x5E3B | STAT_TEMPERATUR_AKTIVTANK_WERT | Temperatur Aktivtank; SCRDev_tUTnk_s | °C | SCRDev_tUTnk_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| TEMPERATUR_PASSIVTANK | 0x5E3C | STAT_TEMPERATUR_PASSIVTANK_WERT | Temperatur Passivtank; UPasTnkCLS_t_s | °C | UPasTnkCLS_t_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| TEMPERATUR_FOERDERPUMPE_SPULE | 0x5E3D | STAT_TEMPERATUR_FOERDERPUMPE_SPULE_WERT | Spulentemperatur Förderpumpe; UrSolnPmp_tClT_s | °C | UrSolnPmp_tClT_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| TEMPERATUR_TRANSFERPUMPE_SPULE | 0x5E3E | STAT_TEMPERATUR_TRANSFERPUMPE_SPULE_WERT | Spulentemperatur Transferpumpe; UrRefillPmp_tCoil_s | °C | UrRefillPmp_tCoil_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| DRUCK_SYSTEM_MODELL | 0x5E3F | STAT_DRUCK_SYSTEM_MODELL_WERT | Systemdruck aus Druckmodell; SCRDev_pUPmp_s | hPa | SCRDev_pUPmp_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ZUSTAND_SCR_STATEMACHINE | 0x5E40 | STAT_ZUSTAND_SCR_STATEMACHINE | Zustand SCR Statemachine; CoSCR_st_s | 0-n | CoSCR_st_s | High | unsigned char | TAB_ZUSTAND_SCR_STATEMACHINE | - | - | - | - | 22;2C | - | - |
| UNTERZUSTAND_SCR_STATEMACHINE | 0x5E41 | STAT_UNTERZUSTAND_SCR_STATEMACHINE | Unterzustand SCR Statemachine; CoSCR_stSub_s | 0-n | CoSCR_stSub_s | High | unsigned char | TAB_UNTERZUSTAND_SCR_STATEMACHINE | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| TEMPERATUR_DOSIERVENTIL_SPULE | 0x5E42 | STAT_TEMPERATUR_DOSIERVENTIL_SPULE_WERT | Spulentemperatur Dosierventil; UDosVlv_tClT_s | °C | UDosVlv_tClT_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| BATTERIESPANNUNG | 0x5E43 | STAT_BATTU_U_S_WERT | Batteriespannung gemessen vom SCR Steuergerät; BattU_u_s | mV | BattU_u_s | High | unsigned int | - | 20.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| RESTREICHWEITE_DDE | 0x5E44 | STAT_RESTREICHWEITE_DDE_WERT | Restreichweite berechnet von DDE, verbleibende Laufstrecke mit Reduktionsmittel; SCRCtl_lRdcAgMlgRmn_s | km | SCRCtl_lRdcAgMlgRmn_s | High | unsigned long | - | 1.0 | 20.0 | 0.0 | - | 22;2C | - | - |
| ANSTEUERUNG_TRANSFERPUMPE | 0x5E46 | STAT_ANSTEUERUNG_TRANSFERPUMPE_WERT | Ansteuerung Transferpumpe; RFC_ratLimDtyCyc_s | % | RFC_ratLimDtyCyc_s | High | unsigned int | - | 1.0 | 81.92 | 0.0 | - | 22;2C | - | - |
| AKTIVTANKFUELLSTAND_UNGEFILTERT | 0x5E47 | STAT_AKTIVTANKFUELLSTAND_UNGEFILTERT_WERT | Aktivtankfüllstand ungefiltert; SCRDev_ratLvl_s | % | SCRDev_ratLvl_s | High | unsigned int | - | 1.0 | 81.92 | 0.0 | - | 22;2C | - | - |
| PASIVTANKFUELLSTAND_UNGEFILTERT | 0x5E48 | STAT_PASIVTANKFUELLSTAND_UNGEFILTERT_WERT | Passivtankfüllstand ungefiltert; UPasTnkCLS_rat_s | % | UPasTnkCLS_rat_s | High | unsigned int | - | 1.0 | 81.92 | 0.0 | - | 22;2C | - | - |
| UMGEBUNGSLUFTTEMPERATUR | 0x5E4B | STAT_UMGEBUNGSLUFTTEMPERATUR_WERT | Umgebungslufttemperatur; EnvT_t_s | °C | EnvT_t_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| AKTIVTANKHEIZUNG | 0x5E4C | STAT_AKTIVTANKHEIZUNG_WERT | Status der Endstufe Aktivtankheizung; UHtrTnk_stPs_s | - | UHtrTnk_stPs_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| DOSIERLEITUNGSHEIZUNG | 0x5E4D | STAT_DOSIERLEITUNGSHEIZUNG_WERT | Status der Endstufe Dosierleitungsheizung; UHtrPL_stPs_s | - | UHtrPL_stPs_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| BETRIEBSZEIT_MOTOR | 0x5E4E | STAT_BETRIEBSZEIT_MOTOR_WERT | Aktuelle Motor Betriebszeit; EngDa_tiEngOn_s | s | EngDa_tiEngOn_s | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ABSTELLZEIT_MOTOR | 0x5E4F | STAT_ABSTELLZEIT_MOTOR_WERT | Aktuelle Motor Abstellzeit; EngDa_tiEngOff_s | s | EngDa_tiEngOff_s | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| SOLL_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE | 0x5E54 | STAT_SOLL_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE_WERT | Sollwert für Tastverhältnis der Dosierventilendstufe; UDosVlv_rDyc_s | % | UDosVlv_rDyc_s | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22;2C | - | - |
| IST_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE | 0x5E55 | STAT_IST_TASTVERHAELTNIS_DOSIERVENTILENDSTUFE_WERT | Istwert für Tastverhältnis der Dosierventilendstufe; UDosVlv_rPs_s | % | UDosVlv_rPs_s | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22;2C | - | - |
| AUFTAU_PRUEFBOTSCHAFT | 0x5E56 | STAT_AUFTAU_PRUEFBOTSCHAFT_WERT | Auftauprüfungsbotschaft UHC_stCtl | - | UHC_stCtl | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZUSTAND_VERBRENNUNGSMOTOR | 0x5E57 | STAT_ZUSTAND_VERBRENNUNGSMOTOR_WERT | Motorzustand; CoEng_st_s | - | CoEng_st_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| DPF_CAN | 0x5E58 | STAT_DPF_CAN_WERT | tatsächlicher Status des Dieselpartikelfilters über CAN; Com_stOpModeAct_s | - | Com_stOpModeAct_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UMGEBUNGSDRUCK | 0x5E59 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck; EnvP_p_s | hPa | EnvP_p_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | 0x5E5A | STAT_ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | Zustand des C1-Heizer-Zustandsautomaten; UHC_stC1_s | 0-n | UHC_stC1_s | High | unsigned char | TAB_ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT | - | - | - | - | 22;2C | - | - |
| ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | 0x5E5B | STAT_ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | Zustand des C2-Heizer-Zustandsautomaten; UHC_stC2_s | 0-n | UHC_stC2_s | High | unsigned char | TAB_ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT | - | - | - | - | 22;2C | - | - |
| ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | 0x5E5C | STAT_ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | Zustand des C3-Heizer-Zustandsautomaten; UHC_stC3_s | 0-n | UHC_stC3_s | High | unsigned char | TAB_ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT | - | - | - | - | 22;2C | - | - |
| DOSIERVENTIL_DOSIERRATE | 0x5E5D | STAT__WERT | Dosierrate in mg | - | - | High | unsigned long | - | 0.001 | 1.0 | 27.0 | - | 22 | - | - |
| KLEMME15 | 0x5E5E | STAT_KLEMME15_WERT | Status Klemme 15; Com_stT15_s | - | Com_stT15_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| KLEMME15_PLAUSIBEL | 0x5E5F | STAT_KLEMME15_PLAUSIBEL_WERT | Status Klemme 15 nach Plausibilisierung; T15_st_s | - | T15_st_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| BETANKUNG_AKTIVTANK | 0x5E60 | STAT_BETANKUNG_AKTIVTANK_WERT | Statusbotschaft nach einer Betankung mit Reduktionsmittel Aktivtank; UDC_stReFill_s | - | UDC_stReFill_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| BETANKUNG_PASSIVTANK | 0x5E61 | STAT_BETANKUNG_PASSIVTANK_WERT | Statusbotschaft nach einer Betankung mit Reduktionsmittel Passivtank; UDC_stPasTankDetReFill_s | - | UDC_stPasTankDetReFill_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| UMPUMPEINHEIT_STATUS | 0x5E64 | STAT_UMPUMPEINHEIT_STATUS_WERT | Angeforderter Status der Umpumpeinheit RFC_stUPmpReFl | - | RFC_stUPmpReFl | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTVERHAELTNIS_TRANSFERPUMPE | 0x5E65 | STAT_TASTVERHAELTNIS_TRANSFERPUMPE_WERT | Ausgangstastverhältnis zur Ansteuerung der Endstufe der Transferpumpe; UrRefillPmp_ratPs_s | % | UrRefillPmp_ratPs_s | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22;2C | - | - |
| TASTVERHAELTNIS_RUECKFOERDERPUMPE | 0x5E66 | STAT_TASTVERHAELTNIS_RUECKFOERDERPUMPE_WERT | Ausgangstastverhältnis der Ansteuerung der Endstufe der Rückförderpumpe; UrBackFlowPmp_ratPs_s | % | UrBackFlowPmp_ratPs_s | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22;2C | - | - |
| TEMPERATUR_RUECKFOERDERPUMPE_SPULE | 0x5E67 | STAT_TEMPERATUR_RUECKFOERDERPUMPE_SPULE_WERT | modellierte Spulentemperatur der Rückförderpumpe; UrSplyModlT_tBFPMdl_s | °C | UrSplyModlT_tBFPMdl_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | 0x5E6A | STAT_ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | Zustandsautomat der Tankinhaltsberechnung Aktivtank; UDC_stUTnkLvlSt_s | 0-n | UDC_stUTnkLvlSt_s | High | unsigned char | TAB_ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK | - | - | - | - | 22;2C | - | - |
| ZUSTAND_TANKINHALTSBERECHNUNG_PASSIVTANK | 0x5E6B | STAT_ZUSTAND_TANKINHALTSBERECHNUNG_PASSIVTANK_WERT | Zustandsautomat der Tankinhaltsberechnung Passivtank; UDC_stUPasTnkLvlSt_s | - | UDC_stUPasTnkLvlSt_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| AUFTAUSTATUS_DOSIERLEITUNG | 0x5E6C | - | Auftaustatus Dosierleitung; UHC_flgPLDfrstChk_s Mit UHC_flgPLDfrstChk == TRUE/1 wird die Dosierfreigabe signalisiert. | Bit | UHC_flgPLDfrstChk_s | High | BITFIELD | RES_0x5E6C_D | - | - | - | - | 22;2C | - | - |
| AUFTAUSTATUS_FOERDERMODUL | 0x5E6D | STAT_AUFTAUSTATUS_FOERDERMODUL_WERT | Auftaustatus Fördermodul; UHC_flgSMDfrstChk_s | - | UHC_flgSMDfrstChk_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| AUFGETAUTES_REDUKTIONSMITTEL | 0x5E6E | STAT_AUFGETAUTES_REDUKTIONSMITTEL_WERT | Status Verfügbarkeit aufgetautes Reduktionsmittel; UHC_flgEnghAvlUr_s | - | UHC_flgEnghAvlUr_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| AUFTAUSTATUS_AKTIVTANK | 0x5E6F | STAT_AUFTAUSTATUS_AKTIVTANK_WERT | Auftaustatus Aktivtank; UHC_flgTnkDfrstChk_s | - | UHC_flgTnkDfrstChk_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| TEMPERATUR_SCR_KATALYSATOR | 0x5E70 | STAT_TEMPERATUR_SCR_KATALYSATOR_WERT | Temperatur vor Harstoffkatalysator; SCR_tUCatUsT_s | °C | SCR_tUCatUsT_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| TEMPERATUR_KUEHLMITTEL | 0x5E71 | STAT_TEMPERATUR_KUEHLMITTEL_WERT | Temperatur der Kühlflüssigkeit am Motor; CEngDsT_t_s | °C | CEngDsT_t_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| TEMPERATUR_KRAFTSTOFF | 0x5E72 | STAT_TEMPERATUR_KRAFTSTOFF_WERT | Kraftstofftemperatur; Com_tFuelT_s | °C | Com_tFuelT_s | High | unsigned int | - | 1.0 | 10.0 | -273.14 | - | 22;2C | - | - |
| ANZAHL_PUMPENHUEBE | 0x5E73 | STAT_ANZAHL_PUMPENHUEBE_WERT | Anzahl der ausgeführten Pumpenhübe; UrSolnPmp_nrLftExe_s | - | UrSolnPmp_nrLftExe_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ZEIT_MSP | 0x5E74 | STAT_ZEIT_MSP_WERT | Zeitpunkt der MSP-Erkennung; UrSolnPmp_tiMSP_s | ms | UrSolnPmp_tiMSP_s | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22;2C | - | - |
| STROM_MSP | 0x5E75 | STAT_STROM_MSP_WERT | Strom zum Zeitpunkt des MSP; UrSolnPmp_iMSP_s | mA | UrSolnPmp_iMSP_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| AKTIVTANK_HEIZUNG_STROM | 0x5E76 | STAT_STROM_AKTIVTANK_HEIZUNG_WERT | Aktivtank-Heizung Strom (Rohwert); UHtrTnkDia_iSenDiag_s | mA | UHtrTnkDia_iSenDiag_s | High | int | - | 1.0 | 10000.0 | 0.0 | - | 22 | - | - |
| ADC_ALTIVTANK_HEIZUNG | 0x5E77 | STAT_ADC_ALTIVTANK_HEIZUNG_WERT | Aktivtank-Heizung ADC-Wert Strom; UHtrTnkDia_uRawDiag_s | mV | UHtrTnkDia_uRawDiag_s | High | unsigned int | - | 1.0 | 5.0 | 0.0 | - | 22;2C | - | - |
| DOSIERLEITUNG_HEIZUNG_STROM | 0x5E78 | STAT_STROM_DOSIERLEITUNG_HEIZUNG_WERT | Dosierleitung-Heizung Strom (Rohwert); UHtrPLDia_iSenDiag_s | mA | UHtrPLDia_iSenDiag_s | High | int | - | 1.0 | 10000.0 | 0.0 | - | 22 | - | - |
| ADC_DOSIERLEITUNG_HEIZUNG | 0x5E79 | STAT_ADC_DOSIERLEITUNG_HEIZUNG_WERT | Dosierleitung-Heizung ADC-Wert Strom; UHtrPLDia_uRawDiag_s | mV | UHtrPLDia_uRawDiag_s | High | unsigned int | - | 1.0 | 5.0 | 0.0 | - | 22;2C | - | - |
| STROM_RUECKFOERDERPUMPE | 0x5E7A | STAT_STROM_RUECKFOERDERPUMPE_WERT | Strom der Rückförderpumpe; BFP_iCoil_s | mA | BFP_iCoil_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| VOLUMEN_RUECKFOERDERPUMPE | 0x5E7B | STAT_VOLUMEN_RUECKFOERDERPUMPE_WERT | gelerntes Volumen der Rückförderpumpe; BFP_volLftLrng_s | mm³ | BFP_volLftLrng_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ZUSTAND_TRANSFERPUMPE | 0x5E7C | STAT_ZUSTAND_TRANSFERPUMPE | Statemachine Transferpumpe; RFC_stReFl_s | 0-n | RFC_stReFl_s | High | unsigned char | TAB_ZUSTAND_TRANSFERPUMPE | - | - | - | - | 22;2C | - | - |
| BESCHLEUNIGUNG | 0x5E7D | STAT_BESCHLEUNIGUNG_WERT | Beschleunigung; UDC_aLvlAccl_s | m/s² | UDC_aLvlAccl_s | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22;2C | - | - |
| STEUERUNG_REFILL_PUMPE | 0x5E7F | STAT_NACHFUELLBARE_MENGE_AKTIVTANK_WERT | Nachfüllbare Menge im Aktivtank, UDC_volRdcAgFree_s | - | UDC_volRdcAgFree_s | High | unsigned int | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| NACHFUELLBARE_MENGE_PASSIVTANK | 0x5E80 | STAT_NACHFUELLBARE_MENGE_PASSIVTANK_WERT | Nachfüllbare Menge im Passivtank, UDC_volPasTankRdcAgFree_s | - | UDC_volPasTankRdcAgFree_s | High | unsigned int | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_AKTIVTANK | 0x5E81 | STAT_GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_AKTIVTANK_WERT | Güte des Ultraschallsignals 1. Messung Aktivtank, UTnkCLS_stSensLvl1_s | - | UTnkCLS_stSensLvl1_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_AKTIVTANK | 0x5E82 | STAT_GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_AKTIVTANK_WERT | Güte des Ultraschallsignals 2. Messung Aktivtank, UTnkCLS_stSensLvl2_s | - | UTnkCLS_stSensLvl2_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_PASSIVTANK | 0x5E83 | STAT_GUETE_ULTRASCHALLSIGNAL_1_MESSUNG_PASSIVTANK_WERT | Güte des Ultraschallsignals 1. Messung Passivtank, UPasTnkCLS_stSensLvl1_s | - | UPasTnkCLS_stSensLvl1_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_PASSIVTANK | 0x5E84 | STAT_GUETE_ULTRASCHALLSIGNAL_2_MESSUNG_PASSIVTANK_WERT | Güte des Ultraschallsignals 2. Messung Passivtank, UPasTnkCLS_stSensLvl2_s | - | UPasTnkCLS_stSensLvl2_s | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_ERKENNUNG_BMP | 0x5E85 | STAT_ZEIT_ERKENNUNG_BMP_WERT | Zeitpunkt der Erkennung des BMP, UrSolnPmp_tiBMP_s | - | UrSolnPmp_tiBMP_s | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| STROM_ERKENNUNG_BMP | 0x5E86 | STAT_STROM_ERKENNUNG_BMP_WERT | Strom zum Zeitpunkt des BMP, UrSolnPmp_iBMP_s | - | UrSolnPmp_iBMP_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPULENWIDERSTAND_FOERDERPUMPE_ROHWERT | 0x5E87 | STAT_SPULENWIDERSTAND_FOERDERPUMPE_ROHWERT_WERT | Rohwert des Spulenwiderstands der Förderpumpe, UrSolnPmp_resClRaw_s | - | UrSolnPmp_resClRaw_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INTEGRIERTE_ANFORDERUNG_DOSIERMASSE | 0x5E88 | STAT_INTEGRIERTE_ANFORDERUNG_DOSIERMASSE_WERT | Integrierte Dosiermassenanforderung in Gramm, UDC_mSet_s | g | UDC_mSet_s | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG | 0x5E89 | STAT_FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_AKTIVTANK_WERT | Bitkodierter Status der einzelnen Freigabebedingungen der Fuellstandsauswertung Aktivtank, UDC_stLvlFltActRls_s | - | UDC_stLvlFltActRls_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_PASSIVTANK | 0x5E8A | STAT_FREIGABEBEDINGUNGEN_FUELLSTANDSAUSWERTUNG_PASSIVTANK_WERT | Bitkodierter Status der einzelnen Freigabebedingungen der Fuellstandsauswertung Passivtank, UDC_stPasLvlFltActRls_s | - | UDC_stPasLvlFltActRls_s | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FREQUENZ_REFILL_PUMPE | 0x5E8B | STAT_FREQUENZ_REFILL_PUMPE_WERT | Tatsaechliche Frequenz der Nachbetankungspumpe, UrRefillPmp_frqPs_s | - | UrRefillPmp_frqPs_s | High | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPULENWIDERSTAND_FOERDERPUMPE_KORRIGIERT | 0x5E8C | STAT_SPULENWIDERSTAND_FOERDERPUMPE_KORRIGIERT_WERT | Korrigierter Spulenwiderstand der Förderpumpe, UrSolnPmp_resCl_s | - | UrSolnPmp_resCl_s | High | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPULENTEMPERATUR_FOERDERPUMPE_KORREKTORFAKTOR | 0x5E8E | STAT_SPULENTEMPERATUR_FOERDERPUMPE_KORREKTURFAKTOR_WERT | Korrekturfaktor zur Bestimmung der Spulentemperatur Förderpumpe, UrSolnPmp_facOffs_s | - | UrSolnPmp_facOffs_s | High | int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| PUMPENHUEBE_DRUCKAUFBAU | 0x5E8F | STAT_PUMPENHUEBE_DRUCKAUFBAU_WERT | Anzahl der Pumpenhübe beim Druckaufbau, SCRMon_nrLftSumMsg_s | - | SCRMon_nrLftSumMsg_s | High | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEITWERT_AKTIVTANKHEIZUNG | 0x5E90 | STAT_LEITWERT_AKTIVTANKHEIZUNG_WERT | Leitwert der Tankheizung, UHC_cndUHtrTnkWp_s | 1/Ohm | UHC_cndUHtrTnkWp_s | High | int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| LEITWERT_DOSIERLEITUNGSHEIZUNG | 0x5E91 | STAT_LEITWERT_DOSIERLEITUNGSHEIZUNG_WERT | Leitwert der Dosierleitungsheizung, UHC_cndUHtrPLWp_s | - | UHC_cndUHtrPLWp_s | High | int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| AKTIVTANK_GEFROREN | 0x5E92 | STAT_AKTIVTANK_GEFROREN_WERT | Status of urea tank as frozen UHC_stUtnkFrznWarn | - | UHC_stUtnkFrznWarn | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VOLUMEN_AKTIVTANK_SCHNELL_GEFILTERT | 0x5E93 | STAT_VOLUMEN_AKTIVTANK_SCHNELL_GEFILTERT_WERT | Aktuelles Tankvolumen Aktivtank, schnell gefiltert, UDC_volLvlCLSFlt_s | ml | UDC_volLvlCLSFlt_s | High | unsigned int | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| VOLUMEN_PASSIVTANK_SCHNELL_GEFILTERT | 0x5E94 | STAT_VOLUMEN_PASSIVTANK_SCHNELL_GEFILTERT_WERT | Aktuelles Tankvolumen Passivtank, schnell gefiltert, UDC_volPasLvlCLSFlt_s | - | UDC_volPasLvlCLSFlt_s | High | int | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| TANK_CONTINUOUS_LEVEL_1_SENSOR | 0x5E95 | STAT_UTNKCLS_LENSENSLVL1_WERT | Urea Tank continuous level1 sesnor UTnkCLS_lenSensLvl1 | mm | UTnkCLS_lenSensLvl1 | High | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| TANK_CONTINUOUS_LEVEL_2_SENSOR | 0x5E96 | STAT_TANK_CONTINUOUS_LEVEL_2_SENSOR_WERT | Urea Tank continuous level2 sesnor UTnkCLS_lenSensLvl2 | mm | UTnkCLS_lenSensLvl2 | High | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| STEUERN_EEP_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | 0x5F3E | - | EEP: SCR: Zeitdauer Übertemperatur am Dosierventil (SCR) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F3E_D | - |
| STEUERN_EEP_KAVITAETSPRUEFUNG_HEIZERSTROMLERNWERT | 0x5F48 | - | EEP: SCR: Kavitätsprüfung - Lernwert des Heizerstroms | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F48_D | - |
| STEUERN_EEP_LANGZEITERFASSUNG_DOSIERMENGE | 0x5F4B | - | EEP: SCR: Langzeiterfassung der Dosiermenge | - | EEP_UDC_DOSQNT_UDC_MRDCAGDOSQNT | - | - | - | - | - | - | - | 2E;22 | ARG_0x5F4B_D | RES_0x5F4B_D |
| STEUERN_RUECKFOERDERPUMPE | 0x6030 | - | Aktuatortest der Rückförderpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6030_D | - |
| STEUERN_FOERDERPUMPE | 0x6031 | - | Test zum Steuern der Förderpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6031_D | - |
| STEUERN_UMPUMPE | 0x6032 | - | Test zum Steuern der Umpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6032_D | - |
| STEUERN_DOSIERVENTIL | 0x6033 | - | Test zum Steuern des Dosierventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6033_D | - |
| STEUERN_DRUCKLEITUNGSHEIZUNG | 0x6035 | - | Test zum Steuern der Druckleitungsheizung | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6035_D | - |
| STEUERN_AKTIVTANKHEIZUNG | 0x6036 | - | Test zum Steuern der Aktivtankheizung | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6036_D | - |
| RUECKFOERDERPUMPE_TASTVERHAELTNIS | 0x6130 | STAT_RUECKFOERDERPUMPE_TASTVERHAELTNIS_WERT | Ausgangstastverhältnis zur Ansteuerung der Endstufe. UrBackFlowPmp_ratPs | - | UrBackFlowPmp_ratPs | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_STATUS | 0x6131 | STAT_FOERDERPUMPE_STATUS_WERT | AdBlue Förderpumpe (Aktivtank): UrSolnPmp_flgPs | - | UrSolnPmp_flgPs | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REFILL_PUMP_TASTVERHAELTNIS | 0x6132 | STAT_REFILL_PUMP_TASTVERHAELTNIS_WERT | Ausgangstastverhältniswert UrRefillPmp_ratPs Erzeugtes Ist Tastverhältnis wird als Ausgangssignal an die Endstufe gesendet. | - | UrRefillPmp_ratPs | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_TASTVERHAELTNIS | 0x6133 | STAT_DOSIERVENTIL_WERT | Dosierventil: UDosVlv_rPs | - | UDosVlv_rPs | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HEIZUNG_DRUCKLEITUNG_STAT | 0x6135 | STAT_HEIZUNG_DRUCKLEITUNG_WERT | Heizer - Druckleitung: UHtrPL_stPs | - | UHtrPL_stPs | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HEIZUNG_TANK_STATUS | 0x6136 | STAT_HEIZUNG_TANK_WERT | Heizer - Tank: UHtrTnk_stPs | - | UHtrTnk_stPs | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCR_ENTLEERUNGSTEST | 0xAE60 | - | SCR_EMPTY | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE60_R |
| SCR_TEST_RUECKFOERDERPUMPE | 0xAE61 | - | Rückförderpumpentest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE61_R |
| SCR_LECKAGEERKENNUNG | 0xAE62 | - | SCR_LECKAGEERKENNUNGSTEST | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE62_R |
| SCR_DRUCKAUFBAU | 0xAE63 | - | SCRETC_PPREPN | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE63_R |
| SCR_TEST_DOSIERMENGE | 0xAE64 | - | Dosiermengentest mit Mengenvorgabe über die Testerschnittstelle. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE64_R | RES_0xAE64_R |
| SCR_TEST_DOSIERMENGE_STATISCH | 0xAE65 | - | Statischer Dosiermengentest mit Mengenvorgabe (kleine Menge) über Applikation | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE65_R |
| SCR_TEST_DOSIERMENGE_DYNAMISCH | 0xAE66 | - | Dynamischer Dosiermengentest für Prüfung der dynamischen Menge vom Dosierventil mit Mengenvorgabe (große Menge) über Applikation | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE66_R |
| SCR_SPRAYTEST | 0xAE67 | - | Spraytest SCR | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE67_R |
| SCR_SYSTEMCHECK_INIT | 0xAE68 | - | SCRETC_INIT_SYSTEMCHECK | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE68_R | RES_0xAE68_R |
| SCR_ERSTBEFUELLUNG | 0xAE69 | - | Spülen und Plausibilisierung durch Drucküberprüfung. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE69_R |
| SCR_TROCKENTAKTUNG | 0xAE6A | - | Funktionstest Dosierventil. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6A_R |
| SCR_UMPUMPE | 0xAE6B | - | Funktionstest Umpumpe. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6B_R |
| MONTAGEMODUS | 0xF043 | - | Ansteuern Montage-Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF043_R |
| RESET_EEPROM | 0xF050 | - | Mit diesem Diagnosejob kann das EEPROM zurückgesetzt werden. Es wird ein Merker gesetzt, der die EEPROMBlöcke auf die Erstinitialisierungswerte zurücksetzt. Der FactoryData Block bleibt dabei erhalten. Wird der Job in einem Serien-SG aufgerufen (BasUtil_stECUMode ist 1), wird die negative Response  RequestOutOfRange  zurückgegeben. | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_FUELLSTAND_AKTIVTANK

| WERT | TEXT |
| --- | --- |
| 0 | Empty |
| 1 | Restriction |
| 2 | Warning |
| 3 | OK |
| 4 | Full |
| 7 | Notvalid |

### TAB_STATE_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfüllt |
| 5 | Funktion läuft |
| 7 | Funktion abgebrochen (kein Zyklusflag/ Readiness gesetzt) |
| 8 | Funktion vollständig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollständig durchlaufen und Fehler erkannt. |

### TAB_UNTERZUSTAND_SCR_STATEMACHINE

| WERT | TEXT |
| --- | --- |
| 0x0D | PRESSUREBUILDUP |
| 0x0E | VENTILATION |
| 0x0F | METERINGCONTROL |
| 0x05 | LEARN_PRESSURECOMPENSATION |
| 0x06 | LEARN_PRESSUREBUILDUP |
| 0x04 | LEARN_PRESSUREREDUCTION |
| 0x07 | LEARN_EMPTYING |
| 0x08 | AFTERRUN_TEMPWAIT |
| 0x09 | AFTERRUN_EMPTYING |
| 0x0B | WAITING_FOR_SHUTOFF |
| 0x11 | PURGE_INIT |
| 0x12 | PURGE_PRESSUREREDUCTION |
| 0x13 | PURGE_VOLUMEBASED |
| 0x15 | PURGE_FIRSTFILL |
| 0x14 | PURGE_PRESSURECHECK |
| 0x16 | PURGE_FILL |

### TAB_ZUSTAND_C1_HEIZER_ZUSTANDSAUTOMAT

| WERT | TEXT |
| --- | --- |
| 0x06 | UHC_CHECKING |
| 0x04 | UHC_COOLING |
| 0x03 | UHC_DEFROSTING |
| 0x00 | UHC_DELAY |
| 0x05 | UHC_HEATING |

### TAB_ZUSTAND_C2_HEIZER_ZUSTANDSAUTOMAT

| WERT | TEXT |
| --- | --- |
| 0x06 | UHC_CHECKING |
| 0x03 | UHC_DEFROSTING |
| 0x00 | UHC_DELAY |
| 0x05 | UHC_HEATING |

### TAB_ZUSTAND_C3_HEIZER_ZUSTANDSAUTOMAT

| WERT | TEXT |
| --- | --- |
| 0x06 | UHC_CHECKING |
| 0x03 | UHC_DEFROSTING |
| 0x00 | UHC_DELAY |
| 0x05 | UHC_HEATING |
| 0x08 | UHC_HEATING_NOTALLWD |

### TAB_ZUSTAND_SCR_STATEMACHINE

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | STANDBY |
| 0x02 | NOPRESSURECONTROL |
| 0x04 | PRESSURECONTROL |
| 0x05 | PRESSUREREDUCTION |
| 0x06 | AFTERRUN |
| 0x07 | LEARN |
| 0x08 | PURGE |
| 0x09 | DIAG |

### TAB_ZUSTAND_TANKINHALTSBERECHNUNG_AKTIVTANK

| WERT | TEXT |
| --- | --- |
| 0x00 | UDC_REFLCHK |
| 0x01 | UDC_DRV |
| 0x02 | UDC_HALT |
| 0x03 | UDC_PTO |
| 0x04 | UDC_REFLDET |
| 0x05 | UDC_SUBS |

### TAB_ZUSTAND_TRANSFERPUMPE

| WERT | TEXT |
| --- | --- |
| 0x01 | RFC_ABORT |
| 0x02 | RFC_ENHANCED |
| 0x03 | RFC_FORCED |
| 0x04 | RFC_NORMAL |
| 0x00 | RFC_OFF |
