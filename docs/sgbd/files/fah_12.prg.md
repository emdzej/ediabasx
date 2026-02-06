# fah_12.prg

## General

|  |  |
| --- | --- |
| File | fah_12.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 101 |
| Origin | BMW EI-60 Meinhard_Moser |
| Revision | 3.000 |
| Author | Conti_Temic Komfort Gengsheng_Hu, Conti_Temic Komfort Markus_Re |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sitzmodul Fahrersitz hinten Cost-Down |  |  |
| ORIGIN | string | BMW EI-60 Meinhard_Moser |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | Conti_Temic Komfort Gengsheng_Hu, Conti_Temic Komfort Markus_Re |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.72 |  |  |
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

### STEUERN_INITIALISIERUNGSLAUF_FREI

Steuerung Initialisierungslauf (frei) JobHeaderFormat 0xD703 INITIALISIERUNGSLAUF_FREI

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Stop, Start |
| INIT_ABLAUF | string | Definition des Ablaufs bei der Initialisierung der Verstellachsen Ein Initialisierungsablauf setzt sich aus einzelnen Initialisierungsfahrten zusammen. Maximal darstellbare Initialisierungsfahrten in einem Initialisierungsablauf: - 16 Normfahrten - 2 Adaptionsfahrten (SLV in beide Richtungen) - 8 Rueckkehrfahrten (8 Motore) Definition der Initialisierungsfahrten (Byte 1 - 42): Norm-/Adaptionsfahrt (1 Byte): ..Byte1: Bits 4-7 = MotorID, Bits 0-3 = Aktion - Rueckkehrfahrt (3 Bytes): ..Byte 1: Bits 4-7 = MotorID, Bits 0-3 = POS_PLUS_PHYS bzw. POS_MINUS_PHYS ..Byte 2 und 3 = anzufahrende Position (Abstand vom gewuenschten Anschlag, 16 Bit Wert, Byte 2 MSB, Byte 3 LSB) |

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

### ARG_0XD708_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTOR | 0-n | high | unsigned char | - | TAB_SV_MOTOREN | - | - | - | - | - | Motor: SLV, SHV, LNV, SNV, KHV, LKV, LBV, STV, LBV |
| AKTION | 0-n | high | unsigned char | - | TAB_MOTOR_AKTION | - | - | - | - | - | Aktion: STOP, PLUS, MINUS |
| PWM | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Taktverhältnis: 0..100 |

### ARG_0XD709_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_AKTIVSITZ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Aktivsitz: 0 = AUS, 1 = EIN |

### ARG_0XD70C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_MEMORY | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Memory Speicherbereitschaft: 0 = AUS, 1 = EIN |

### ARG_0XD714_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_SITZKLIMA_AKTION | - | - | - | - | - | Aktion Sitzheizung: AUS, STUFE1, STUFE2, STUFE3, AUSGANG_DIREKT |
| PWM_KISSEN | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Kissen (nur bei AUSGANG_DIREKT): 0...100% |
| PWM_LEHNE | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Lehne (nur bei AUSGANG_DIREKT): 0...100% |
| NTC_AUSWERTUNG | 0/1 | - | unsigned char | - | - | - | - | - | - | - | NTC Auswertung (nur bei AUSGANG_DIREKT): 0 = AUS, 1 = EIN |
| DUMMY1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD715_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_SITZKLIMA_AKTION | - | - | - | - | - | Aktion Sitzklima: AUS, STUFE1, STUFE2, STUFE3, AUSGANG_DIREKT |
| VERSORGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Versorgung Sitzklima Lüfter: 0 = AUS, 1 = EIN |
| DREHZAHLSTUFE_KISSEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Drehzahlstufe Kissen (nur in Betriebsart gesteuert und AUSGANG_DIREKT): 0 = LANGSAM, 1 = SCHNELL |
| DREHZAHLSTUFE_LEHNE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Drehzahlstufe Lehne (nur in Betriebsart gesteuert und AUSGANG_DIREKT): 0 = LANGSAM, 1 = SCHNELL |
| PWM_KISSEN | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Kissen (nur in Betriebsart geregelt und AUSGANG_DIREKT): 0..100% |
| PWM_LEHNE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Lehne (nur in Betriebsart geregelt und AUSGANG_DIREKT): 0..100% |
| DUMMY1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD719_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTOR | 0-n | high | unsigned char | - | TAB_HALLZAEHLER_RESET_MOTOR | 1.0 | 1.0 | 0.0 | - | - | Steuert Rücksetzen der Hallzähler Gültig:  SLV, SHV, LNV, SNV, KHV, STV, LBV, LKV, ALL |

### ARG_0XD71F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_LORDOSE_AKTION | - | - | - | - | - | Aktion Lordose: AUS, AUF, AB, VOR, ZURUECK, AUSGANG_DIREKT |
| PUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lordose Pumpe: 0 = AUS, 1 = EIN |
| VENTIL1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lordose Ventil 1: 0 = AUS, 1 = EIN |
| VENTIL2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lordose Ventil 2: 0 = AUS, 1 = EIN |
| VENTIL3 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lordose Ventil 3: 0 = AUS, 1 = EIN |
| VENTIL4 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lordose Ventil 4: 0 = AUS, 1 = EIN |
| LUFTZUFUHR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Luftzufuhr (Umschaltung zwischen Aktivsitz / Massage und Lordose): 0 = AUS (Aktivsitz/Massage), 1 = EIN (Lordose) |
| DUMMY1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD720_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_MASSAGE_SITZ_AKTION | - | - | - | - | - | Aktion Massage: AUS, STUFE1, STUFE2, ENTLEEREN, AUSGANG_DIREKT |
| VERSORGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Versorgung Massage Druckverteiler: 0 = AUS, 1 = EIN |
| LANGSAM_SCHNELL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Umschaltung zwischen langsamer und schneller Massage: 0 = LANGSAM, 1 = SCHNELL |
| DUMMY1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD721_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AKTIVSITZ_SITZ_AKTION | - | - | - | - | - | Aktion Aktivsitz: AUS, EIN, ENTLEEREN, AUSGANG_DIREKT |
| NOCKENMOTOR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktivsitz Nockenmotor: 0 = AUS, 1 = EIN |
| DUMMY1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD722_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAEUFIGKEITSZAEHLER_SLV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der bisher durchgeführten Verstellungen der SLV (65535 = ungültig, nicht vorhanden oder codiert) |
| HAEUFIGKEITSZAEHLER_SHV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der bisher durchgeführten Verstellungen der SHV (65535 = ungültig, nicht vorhanden oder codiert) |
| HAEUFIGKEITSZAEHLER_LNV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der bisher durchgeführten Verstellungen der LNV (65535 = ungültig, nicht vorhanden oder codiert) |
| HAEUFIGKEITSZAEHLER_SNV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der bisher durchgeführten Verstellungen der SNV (65535 = ungültig, nicht vorhanden oder codiert) |
| DUMMY1 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY2 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY3 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY4 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY5 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY6 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY7 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| SLV_POSITIONSBEREICH_0_33 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der Fahrtantritte, bei denen sich die Sitzlängsverstellung im Bereich 0% - 33% des Gesamtverstellwegs befand (Vorne) (65535 = ungültig) |
| SLV_POSITIONSBEREICH_34_66 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der Fahrtantritte, bei denen sich die Sitzlängsverstellung im Bereich 34% - 66% des Gesamtverstellwegs befand (Mitte) (65535 = ungültig) |
| SLV_POSITIONSBEREICH_67_100 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der Fahrtantritte, bei denen sich die Sitzlängsverstellung im Bereich 67% - 100% des Gesamtverstellwegs befand (Hinten) (65535 = ungültig) |
| BETRIEBSZAEHLER_SHZ_STUFE_1 | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 6.7108864E7 | Aufsummierte Betriebszeit der Sitzheizung in Stufe 1 (0xFFFFFFFF = ungültig, nicht vorhanden oder codiert) |
| BETRIEBSZAEHLER_SHZ_STUFE_2 | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 6.7108864E7 | Aufsummierte Betriebszeit der Sitzheizung in Stufe 2 (0xFFFFFFFF = ungültig, nicht vorhanden oder codiert) |
| BETRIEBSZAEHLER_SHZ_STUFE_3 | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 6.7108864E7 | Aufsummierte Betriebszeit der Sitzheizung in Stufe 3 (0xFFFFFFFF = ungültig, nicht vorhanden oder codiert) |
| DUMMY8 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY9 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY10 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY11 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY12 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY13 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY14 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY15 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY16 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY17 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY18 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY19 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD7F0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION_LINKS | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_SITZKLIMA_AKTION | - | - | - | - | - | Aktion Nackenwaermer links: AUS, STUFE1, STUFE2, STUFE3, AUSGANG_DIREKT |
| PWM_HEIZELEMENT_LINKS | % | high | unsigned char | - | - | - | - | - | 0.0 | 100.0 | PWM Heizelement links (nur bei AUSGANG_DIREKT): 0..100% |
| VERSORGUNG_LUEFTER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Versorgung Nackenwaemer Lüfter links: 0 = AUS, 1 = EIN |
| STEUERSPANNUNG_LUEFTER_LINKS | V | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 5.0 | Steuerspannung Luefter links (nur bei AUSGANG_DIREKT): 0..5V |
| DUMMY1 | - | high | unsigned char | - | - | - | - | - | - | - | Vorhalt für Erweiterungen |
| AKTION_RECHTS | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_SITZKLIMA_AKTION | - | - | - | - | - | Aktion Nackenwaermer rechts: AUS, STUFE1, STUFE2, STUFE3, AUSGANG_DIREKT |
| PWM_HEIZELEMENT_RECHTS | % | high | unsigned char | - | - | - | - | - | 0.0 | 100.0 | PWM Heizelement rechts (nur bei AUSGANG_DIREKT): 0..100% |
| VERSORGUNG_LUEFTER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Versorgung Nackenwaemer Lüfter rechts: 0 = AUS, 1 = EIN |
| STEUERSPANNUNG_LUEFTER_RECHTS | V | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 5.0 | Steuerspannung Luefter rechts (nur bei AUSGANG_DIREKT): 0..5V |
| DUMMY2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD7F2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_01_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 1 links: 0 = AUS, 1 = EIN |
| LED_02_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 2 links: 0 = AUS, 1 = EIN |
| LED_03_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 3 links: 0 = AUS, 1 = EIN |
| LED_01_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 1 rechts: 0 = AUS, 1 = EIN |
| LED_02_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 2 rechts: 0 = AUS, 1 = EIN |
| LED_03_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 3 rechts: 0 = AUS, 1 = EIN |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026900 | Energiesparmode aktiv | 0 |
| 0x02FF69 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x802D80 | Hallgeber SLV: Kurzschluss nach Minus | 0 |
| 0x802D81 | Hallgeber SLV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D82 | Hallgeber SHV: Kurzschluss nach Minus | 0 |
| 0x802D83 | Hallgeber SHV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D84 | Hallgeber LNV: Kurzschluss nach Minus | 0 |
| 0x802D85 | Hallgeber LNV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D86 | Hallgeber SNV: Kurzschluss nach Minus | 0 |
| 0x802D87 | Hallgeber SNV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D88 | Hallgeber KHV: Kurzschluss nach Minus | 0 |
| 0x802D89 | Hallgeber KHV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D8C | Hallgeber STV: Kurzschluss nach Minus | 0 |
| 0x802D8D | Hallgeber STV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D8E | Hallgeber LBV: Kurzschluss nach Minus | 0 |
| 0x802D8F | Hallgeber LBV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D90 | Hallgeber LKV: Kurzschluss nach Minus | 0 |
| 0x802D91 | Hallgeber LKV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802D92 | Motor SLV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802D93 | Motor SLV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802D94 | Motor SHV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802D95 | Motor SHV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802D96 | Motor LNV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802D97 | Motor LNV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802D98 | Motor SNV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802D99 | Motor SNV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802D9A | Motor KHV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802D9B | Motor KHV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802D9E | Motor STV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802D9F | Motor STV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802DA0 | Motor LBV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802DA1 | Motor LBV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802DA2 | Motor LKV: Überlast oder Kurzschluss Motor, Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802DA3 | Motor LKV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802DA4 | Temperaturfühler Heizfeld Kissen: Kurzschluss nach Plus | 0 |
| 0x802DA5 | Temperaturfühler Heizfeld Kissen: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x802DA6 | Temperaturfühler Heizfeld Kissen: Fühler defekt | 0 |
| 0x802DA7 | Temperaturfühler Heizfeld Lehne: Kurzschluss nach Plus | 0 |
| 0x802DA8 | Temperaturfühler Heizfeld Lehne: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x802DA9 | Temperaturfühler Heizfeld Lehne: Fühler defekt | 0 |
| 0x802DAA | Heizfeld Kissen: Kurzschluss nach Plus oder Überlast | 0 |
| 0x802DAB | Heizfeld Kissen: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802DAC | Heizfeld Lehne: Kurzschluss nach Plus oder Überlast | 0 |
| 0x802DAD | Heizfeld Lehne: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802DAF | Versorgung Sitzklima: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802DB0 | Versorgung Sitzklima: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802DB1 | Steuerung Sitzklima Kissen: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802DB2 | Steuerung Sitzklima Kissen: Kurzschluss nach Plus | 0 |
| 0x802DB3 | Steuerung Sitzklima Kissen: Mindestens ein Lüfter in Alarmzustand | 0 |
| 0x802DB4 | Steuerung Sitzklima Lehne: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802DB5 | Steuerung Sitzklima Lehne: Kurzschluss nach Plus | 0 |
| 0x802DB6 | Steuerung Sitzklima Lehne: Mindestens ein Lüfter in Alarmzustand | 0 |
| 0x802DB7 | Motor Aktivsitz: Nockenmotor Kurzschluss oder Unterbrechung, Nockenschalter Kurzschluss oder Unterbrechung | 0 |
| 0x802DB8 | Magnet Aktivsitz: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802DB9 | Magnet Aktivsitz: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802DBA | Ventilblock Lordosenstütze: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802DBB | Ventilblock Lordosenstütze: Kurzschluss nach Plus oder Ventil nicht gesteckt | 0 |
| 0x802DBC | Pumpe Lordosenstütze: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802DBD | Pumpe Lordosenstütze: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802DBE | Schalter SVS: Kurzschluss nach Minus | 0 |
| 0x802DBF | Schalter SVS: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802DC0 | Schalter SVS: Schalter hängt | 0 |
| 0x802DC1 | Schalter Easy Entry: Beidseitiger Kurzschluss nach Minus | 0 |
| 0x802DC2 | Schalter Easy Entry: Schalter hängt | 0 |
| 0x802DC3 | Schalter LVK: Kurzschluss nach Minus | 0 |
| 0x802DC4 | Schalter LVK: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802DC5 | Schalter LVK: Schalter defekt | 0 |
| 0x802DC6 | Schalter LIN: Schalter hängt | 0 |
| 0x802DC7 | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung vor | 0 |
| 0x802DC8 | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung zurück | 0 |
| 0x802DCA | Sitzpositionsübergabe Frau-Mann: Kein Versenden der Sitzposition wegen fehlender oder ungültiger Kalibrierung (SLV vorne) | 0 |
| 0x802DCE | Versorgungsspannung Relais (30s): Kurzschluss nach Minus oder Treiber defekt | 0 |
| 0x802DCF | Versorgungsspannung Relais (30s): Kurzschluss nach Plus | 0 |
| 0x802DD2 | Keine Wiederaufnahme der Sitzverstellung wegen Timerablauf Motorstartbedingung | 1 |
| 0x802DD3 | Überspannung erkannt | 1 |
| 0x802DD4 | Unterspannung erkannt | 1 |
| 0x802DD5 | Schalter LIN: Fehler Überlastung PWM | 0 |
| 0x802DD6 | Schalter LIN: Fehler im EEPROM | 0 |
| 0x802E00 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x802E01 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x802E02 | Codierung: Signatur für Daten ungültig | 0 |
| 0x802E03 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x802E04 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x802E05 | ÜKB: Abschaltung ÜKB wegen fehlender Kalibrierung (SLV hinten) | 0 |
| 0x802E06 | Kennfeld Sitzbelüftung: eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV hinten oder SNV oben) | 0 |
| 0x802E07 | Schalter LIN: Falsche Variant ID | 0 |
| 0x802E08 | PIA: Portierung eingeschränkt wegen fehlender Kalibrierung | 0 |
| 0x802E09 | Massage Druckverteiler: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802E10 | Massage Druckverteiler: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802E11 | Massage Druckverteiler: Pumpenanforderung ausgeblieben | 0 |
| 0x802E12 | Überwachung Leiterplattentemperatur: Abschaltung Sitzverstellung wegen Übertemperatur | 1 |
| 0x802E13 | Überwachung Leiterplattentemperatur: Abschaltung Sitzheizung wegen Übertemperatur | 1 |
| 0x802E15 | Interner Steuergerätefehler: Versorgungsspannung  (U12s oder U12h) | 0 |
| 0x802E16 | Interner Steuergerätefehler: Checksummenfehler im ÜKB Datenbereich | 0 |
| 0x802E17 | Interner Steuergerätefehler: Unplausibler Wert bei der Strommessung für ÜKB | 0 |
| 0x802E18 | Heizung: Abschaltung wegen Heizleistungsbegrenzung im Kissen | 1 |
| 0x802E19 | Heizung: Abschaltung wegen Heizleistungsbegrenzung in der Lehne | 1 |
| 0x802E1A | Gepäckraumschalter LIN: Schalter hängt | 0 |
| 0x802E1B | Gepäckraumschalter LIN: Fehler Überlastung PWM (Beleuchtung) | 0 |
| 0x802E1C | Gepäckraumschalter LIN: Fehler im EEPROM | 0 |
| 0x802E1D | Gepäckraumschalter LIN: Falsche Variant ID | 0 |
| 0x802E1E | Keine Sitzverstellung wegen Motorstartbedingung | 1 |
| 0x802E1F | F07 Fondsitz Multifunktion : eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV vorne oder LNV hinten) | 0 |
| 0x802E20 | Motor SLV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E21 | Motor SHV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E22 | Motor LNV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E23 | Motor SNV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E24 | Motor KHV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E26 | Motor STV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E27 | Motor LBV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E28 | Motor LKV: Abschaltung durch Verstellzeitbegrenzung | 1 |
| 0x802E29 | Kennfeld Lehnenklappung: eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV hinten oder SHV unten oder KHV unten) | 0 |
| 0x802E2A | Kennfeld KHV: eingeschränkte Verstellung wegen fehlender Kalibrierung (SHV unten oder LNV vorne oder KHV unten) | 0 |
| 0x802E2B | Konfiguration: Codierter Aktor oder Sensor von Hardwarevariante nicht unterstützt | 0 |
| 0x802E2C | PreCrash: keine PreCrash Verstellung wegen fehlender Kalibrierung (LNV vorne bzw. LNV hinten beim Fondsitz) | 0 |
| 0x802E2D | Ein-Ausstiegshilfe: keine automatische Verstellung SLV  wegen fehlender Kalibrierung (SLV hinten) | 0 |
| 0x802E2E | Kennfeld LNV (Lehne - Verdeckkasten): eingeschränkte Verstellung wegen fehlender Kalibrierung (LNV vorne, SLV hinten, SHV unten, SNV unten) | 0 |
| 0x802E40 | Nackenwärmer Steuergerät: Unterspannung erkannt | 0 |
| 0x802E41 | Nackenwärmer Steuergerät: Überspannung erkannt | 0 |
| 0x802E42 | Nackenwärmer Steuergerät: Übertemperatur Leiterplatte | 0 |
| 0x802E43 | Nackenwärmer Steuergerät: Fehler im EEPROM | 0 |
| 0x802E44 | Nackenwärmer Steuergerät: Timeout Empfang Broadcast-Nachricht | 1 |
| 0x802E45 | Nackenwärmer Steuergerät: Ungültiges Signal Geschwindigkeit | 1 |
| 0x802E46 | Nackenwärmer Steuergerät: Ungültiges Signal Ta | 1 |
| 0x802E47 | Nackenwärmer Steuergerät: Ungültiges Signal Ti | 1 |
| 0x802E48 | Nackenwärmer Steuergerät: Ungültiges Signal Dachstellung | 1 |
| 0x802E49 | Nackenwärmer Steuergerät: Ungültiges Signal Klemme | 1 |
| 0x802E4A | Nackenwärmer Steuergerät: Ungültiges Signal Parametersatz | 1 |
| 0x802E4B | Nackenwärmer Steuergerät: Versorgung links KL30A fehlt | 0 |
| 0x802E4C | Nackenwärmer Steuergerät: Heizung links Unterbrechung | 0 |
| 0x802E4D | Nackenwärmer Steuergerät: Heizung links Kurzschluß nach Minus oder Überlast | 0 |
| 0x802E4E | Nackenwärmer Steuergerät: Heizung links Kurzschluß nach Plus | 0 |
| 0x802E4F | Nackenwärmer Steuergerät: Heizung links Kurzschluß nach Plus (Sicherheitsrelais KL30A geschlossen) | 0 |
| 0x802E50 | Nackenwärmer Steuergerät: Heizung links Kurzschluß nach Plus (Sicherheitsrelais KL30A und KL30B geschlossen) | 0 |
| 0x802E51 | Nackenwärmer Steuergerät: Heizung Treiber Links Defekt | 0 |
| 0x802E52 | Nackenwärmer Steuergerät: Drehzahlsignal Lüfter links, Kurzschluss nach Minus | 0 |
| 0x802E53 | Nackenwärmer Steuergerät: Drehzahlsignal Lüfter links, Kurzschluß nach Plus oder Unterbrechung oder Spannungsversorgung des Lüfters defekt | 0 |
| 0x802E54 | Nackenwärmer Steuergerät: Drehzahlsignal Lüfter links ungültig | 0 |
| 0x802E55 | Nackenwärmer Steuergerät: Versorgung rechts Kl30B fehlt | 0 |
| 0x802E56 | Nackenwärmer Steuergerät: Heizung rechts Kurzschluss nach Minus oder Überlast | 0 |
| 0x802E57 | Nackenwärmer Steuergerät: Heizung rechts Unterbrechung | 0 |
| 0x802E58 | Nackenwärmer Steuergerät: Heizung rechts Kurzschluß nach Plus | 0 |
| 0x802E59 | Nackenwärmer Steuergerät: Heizung rechts Kurzschluß nach Plus (Sicherheitsrelais KL30B geschlossen) | 0 |
| 0x802E5A | Nackenwärmer Steuergerät: Heizung rechts Kurzschluß nach Plus (Sicherheitsrelais KL30A und KL30B geschlossen) | 0 |
| 0x802E5B | Nackenwärmer Steuergerät: Heizung Treiber rechts Defekt | 0 |
| 0x802E5C | Nackenwärmer Steuergerät: Drehzahlsignal Lüfter rechts, Kurzschluss nach Minus | 0 |
| 0x802E5D | Nackenwärmer Steuergerät: Drehzahlsignal Lüfter rechts, Kurzschluß nach Plus oder Unterbrechung oder Spannungsversorgung des Lüfters defekt | 0 |
| 0x802E5E | Nackenwärmer Steuergerät: Drehzahlsignal Lüfter rechts ungültig | 0 |
| 0x802E5F | Bedienschalter Nackenwärmer: Taster links hängt | 0 |
| 0x802E60 | Bedienschalter Nackenwärmer: Taster rechts hängt | 0 |
| 0x802E61 | Nackenwärmer Steuergerät: Signal Energiesparmodus (Steuerung_Energiesparmodus_LIN) ungültig oder nicht empfangen | 1 |
| 0x802E62 | Nackenwärmer Steuergerät: Signal Fahrerlebnisschalter (Ist_Modus_Fahrdynamik_Innen_LIN) ungültig oder nicht empfangen | 1 |
| 0x802E63 | Nackenwärmer Steuergerät: Signal Relativzeit (Zeit_Sekunde_Zähler_Relativ_X_NWR_LIN) ungültig oder nicht empfangen | 1 |
| 0x802E70 | Bedienschalter Nackenwärmer: Fehler im EEPROM | 0 |
| 0xE3440B | CAN-Bus Physikalischer Busfehler | 0 |
| 0xE34414 | CAN-Bus Control Module Bus OFF | 0 |
| 0xE34BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE34C1E | LIN-Bus: Sitzverstellschalter antwortet nicht | 0 |
| 0xE34C1F | LIN-Bus: Gepäckraumschalter antwortet nicht | 0 |
| 0xE34C20 | LIN-Bus: Bedienschalter Nackenwärmer antwortet nicht | 0 |
| 0xE34C21 | LIN-Bus: Nackenwärmer Steuergerät antwortet nicht | 0 |
| 0xE34C22 | LIN-Bus: Kommunikationsfehler durch Sitzverstellschalter erkannt | 0 |
| 0xE34C23 | LIN-Bus: Kommunikationsfehler durch Gepäckraumschalter erkannt | 0 |
| 0xE34C24 | LIN-Bus: Kommunikationsfehler durch Bedienschalter Nackenwärmer erkannt | 0 |
| 0xE34C25 | LIN-Bus: Kommunikationsfehler durch Nackenwärmer erkannt | 0 |
| 0xE34D00 | LIN-Bus: Kommunikationsfehler durch Sitzmodul (LIN Master) erkannt | 0 |
| 0xE35400 | Botschaft (0x097, Status Precrash Master): Ausfall | 1 |
| 0xE36C00 | Signal (0x23A) ungültig empfangen: Nummer_Schlüssel_Personalisierung_Aktuell | 1 |
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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x690000 | Hallpufferueberlauf | 0 |
| 0x690004 | PIA_E_IO_ERROR | 0 |
| 0x690012 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x690013 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0xE36BFE | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xE36BFF | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_BOOT_INTERN_WERT_TEXT | TEXT | high | string[14] | - | - | 1.0 | 1.0 | 0.0 | Interner Versionsnummer Bootloader |
| STAT_VERSION_APPL_INTERN_WERT_TEXT | TEXT | high | string[14] | - | - | 1.0 | 1.0 | 0.0 | Interner Versionsnummer Applikation |

### RES_0XA703_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_SITZ | - | - | + | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status der Gesamtinitialisierung des Sitzes: Interpretation siehe Tabelle |
| STAT_INIT_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Initialisierungslauf: 0 = nicht aktiv, 1 = aktiv |
| STAT_INIT_ID_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Initialisierungsablauf ID 0..254, 255 = ungültig |
| STAT_INIT_STEP_G1 | - | - | + | 0-n | high | unsigned char | - | TAB_INIT_STEP | 1.0 | 1.0 | 0.0 | Initialisierungsschritt Gruppe 1: Interpretation siehe Tabelle |
| STAT_INIT_STEP_G2 | - | - | + | 0-n | high | unsigned char | - | TAB_INIT_STEP | 1.0 | 1.0 | 0.0 | Initialisierungsschritt Gruppe 2: Interpretation siehe Tabelle |
| STAT_INIT_ERROR | - | - | + | 0-n | high | unsigned char | - | TAB_INIT_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Initialisierungslauf: Interpretation siehe Tabelle |
| STAT_ADAP_PLUS_ERROR | - | - | + | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Adaptionslauf plus: Interpretation siehe Tabelle |
| STAT_ADAP_MINUS_ERROR | - | - | + | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Adaptionslauf minus: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XA704_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ | 1.0 | 1.0 | 0.0 | Status Selbsttest Sitz  Interpretation siehe Tabelle |
| STAT_SELBSTTEST_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Selbsttest: 0 = nicht aktiv, 1 = aktiv |
| STAT_SELBSTTEST_ERROR | - | - | + | 0-n | high | unsigned int | - | TAB_SELBSTTEST_SITZ_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Selbsttest: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SLV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SLV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SLV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SLV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SHV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SHV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SHV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SHV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LNV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LNV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LNV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LNV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SNV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SNV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SNV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SNV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_KHV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt KHV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_KHV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt KHV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_STV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt STV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_STV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt STV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LBV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LBV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LBV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LBV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LKV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LKV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LKV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LKV minus: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY4_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_SELBSTTEST_TAKTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt Taktung: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LORDOSE | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt Lordose: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SHZ | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SHZ: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SKL | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt SKL: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_AKTIV_SITZ | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt Aktivsitz: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_MASSAGE | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt Massage: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_SV_RCODED | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt widerstandscodierter Sitzverstellschalter: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_SV_LIN | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt LIN Sitzverstellschalter: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_EE | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt Easy Entry Schalter: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_LVK | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt Schalter Lehnenverriegelungskontakt: Interpretation siehe Tabelle |
| STAT_DUMMY7_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY8_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY9_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD700_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor SLV: Interpretation siehe Tabelle |
| STAT_MOTOR_SHV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor SHV: Interpretation siehe Tabelle |
| STAT_MOTOR_LNV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor LNV: Interpretation siehe Tabelle |
| STAT_MOTOR_SNV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor SNV: Interpretation siehe Tabelle |
| STAT_MOTOR_KHV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor KHV: Interpretation siehe Tabelle |
| STAT_MOTOR_STV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor STV: Interpretation siehe Tabelle |
| STAT_MOTOR_LBV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor LBV: Interpretation siehe Tabelle |
| STAT_MOTOR_LKV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | 1.0 | 1.0 | 0.0 | HW Konfiguration Motor LKV: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_LORDOSE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Lordosenansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_MASSAGE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Massagenansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_AKTIVSITZ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Aktivsitzansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SITZKLIMA | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Aktivsitzansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SITZHEIZUNG | 0-n | high | unsigned char | - | TAB_CONFIG_HW_SITZHEIZUNG | 1.0 | 1.0 | 0.0 | HW Konfiguration Sitzheizungsansteuerung: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_RCODED | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Auswertung widerstandscodierter Sitzverstellschalter: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_SV_LIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Auswertung LIN Sitzverstellschalter: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_EE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Auswertung Easy Entry Schalter: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_LVK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Konfiguration Auswertung Lehnenverriegelungskontakt: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_NACKENWAERMER | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Ansteuerung Nackenwärmer Steuergerät: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD701_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor SLV:  Interpretation siehe Tabelle |
| STAT_MOTOR_SHV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor SHV:  Interpretation siehe Tabelle |
| STAT_MOTOR_LNV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor LNV:  Interpretation siehe Tabelle |
| STAT_MOTOR_SNV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor SNV:  Interpretation siehe Tabelle |
| STAT_MOTOR_KHV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor KHV:  Interpretation siehe Tabelle |
| STAT_MOTOR_STV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor STV:  Interpretation siehe Tabelle |
| STAT_MOTOR_LBV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor LBV:  Interpretation siehe Tabelle |
| STAT_MOTOR_LKV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Motor LKV:  Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_LORDOSE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Lordose: 0 = nicht codiert, 1 = codiert |
| STAT_MASSAGE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Massage: 0 = nicht codiert, 1 = codiert |
| STAT_AKTIVSITZ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Aktivsitz: 0 = nicht codiert, 1 = codiert |
| STAT_SITZKLIMA | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_SITZKLIMA | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Sitzbelüftung: Interpretation siehe Tabelle |
| STAT_SITZHEIZUNG | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_SITZHEIZUNG | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Sitzheizung: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_RCODED | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_SCHALTER_SV_RCODED | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Auswertung widerstandscodierter Sitzverstellschalter: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Auswertung LIN Sitzverstellschalter: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_EE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Auswertung Easy Entry Schalter: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_LVK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Auswertung Lehnenverriegelungskontakt: 0 = nicht codiert, 1 = codiert |
| STAT_NACKENWAERMER | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Nackenwärmer: 0 = nicht codiert, 1 = codiert |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD702_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLZAEHLER_SLV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand SLV: 8192..57344 |
| STAT_HALLZAEHLER_SHV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand SHV: 8192..57344 |
| STAT_HALLZAEHLER_LNV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand LNV: 8192..57344 |
| STAT_HALLZAEHLER_SNV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand SNV: 8192..57344 |
| STAT_HALLZAEHLER_KHV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand KHV: 8192..57344 |
| STAT_HALLZAEHLER_STV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand STV: 8192..57344 |
| STAT_HALLZAEHLER_LBV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand LBV: 8192..57344 |
| STAT_HALLZAEHLER_LKV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand LKV: 8192..57344 |
| STAT_DUMMY1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD703_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_SITZ | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Gesamtinitialisierung des Sitzes: Interpretation siehe Tabelle |
| STAT_INIT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Initialisierungslauf: 0 = nicht aktiv, 1 = aktiv |
| STAT_INIT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Initialisierungsablauf ID 0..254, 255 = ungültig |
| STAT_INIT_STEP_G1 | 0-n | high | unsigned char | - | TAB_INIT_STEP | 1.0 | 1.0 | 0.0 | Initialisierungsschritt Gruppe 1: Interpretation siehe Tabelle |
| STAT_INIT_STEP_G2 | 0-n | high | unsigned char | - | TAB_INIT_STEP | 1.0 | 1.0 | 0.0 | Initialisierungsschritt Gruppe 2: Interpretation siehe Tabelle |
| STAT_INIT_ERROR | 0-n | high | unsigned char | - | TAB_INIT_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Initialisierungslauf: Interpretation siehe Tabelle |
| STAT_ADAP_PLUS_ERROR | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Adaptionslauf plus:  Interpretation siehe Tabelle |
| STAT_ADAP_MINUS_ERROR | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | 1.0 | 1.0 | 0.0 | Fehlercode Adaptionslauf minus:  Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD704_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_SITZ | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Gesamtinitialisierung des Sitzes: Interpretation siehe Tabelle |
| STAT_NORM_SLV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung SLV plus: Interpretation siehe Tabelle |
| STAT_NORM_SLV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung SLV minus: Interpretation siehe Tabelle |
| STAT_ADAP_SLV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | 1.0 | 1.0 | 0.0 | Status Adaption SLV plus: Interpretation siehe Tabelle |
| STAT_ADAP_SLV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | 1.0 | 1.0 | 0.0 | Status Adaption SLV minus: Interpretation siehe Tabelle |
| STAT_VERSTELLWEG_SLV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | 1.0 | 1.0 | 0.0 | Status Verstellweg SLV plausibel: Interpretation siehe Tabelle |
| STAT_NORM_SHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung SHV plus: Interpretation siehe Tabelle |
| STAT_NORM_SHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung SHV minus: Interpretation siehe Tabelle |
| STAT_NORM_LNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung LNV plus: Interpretation siehe Tabelle |
| STAT_NORM_LNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung LNV minus: Interpretation siehe Tabelle |
| STAT_NORM_SNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung SNV plus: Interpretation siehe Tabelle |
| STAT_NORM_SNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung SNV minus: Interpretation siehe Tabelle |
| STAT_NORM_KHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung KHV plus: Interpretation siehe Tabelle |
| STAT_NORM_KHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung KHV minus: Interpretation siehe Tabelle |
| STAT_NORM_STV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung STV plus: Interpretation siehe Tabelle |
| STAT_NORM_STV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung STV minus: Interpretation siehe Tabelle |
| STAT_NORM_LBV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung LBV plus: Interpretation siehe Tabelle |
| STAT_NORM_LBV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung LBV minus: Interpretation siehe Tabelle |
| STAT_NORM_LKV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung LKV plus: Interpretation siehe Tabelle |
| STAT_NORM_LKV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | 1.0 | 1.0 | 0.0 | Status Normierung LKV minus: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_ENTNORMIERURSACHE_SLV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache SLV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_SLV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache SLV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_SHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache SHV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_SHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache SHV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_LNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache LNV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_LNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache LNV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_SNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache SNV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_SNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache SNV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_KHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache KHV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_KHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache KHV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_STV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache STV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_STV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache STV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_LBV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache LBV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_LBV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache LBV minus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_LKV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache LKV plus: Interpretation siehe Tabelle |
| STAT_ENTNORMIERURSACHE_LKV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | 1.0 | 1.0 | 0.0 | Entnormierursache LKV minus: Interpretation siehe Tabelle |
| STAT_DUMMY7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_NORMBLOCK_SLV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SLV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_SLV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SLV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_SHV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SHV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_SHV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SHV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_LNV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LNV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_LNV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LNV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_SNV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SNV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_SNV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SNV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_KHV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock KHV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_KHV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock KHV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_STV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock STV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_STV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock STV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_LBV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LBV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_LBV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LBV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_LKV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LKV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_LKV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LKV minus: 8192..57344, 0 = ungültig |
| STAT_DUMMY13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_INIT_SITZ_CDR | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Sitzpositionsübergabe für den Crashdatenrecorder: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_KF_KHV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld KHV: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_KF_LK | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Kennfeld Lehnenklappung: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_KF_LKV | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Kollisionskennfeld LNV/LKV: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_KF_RW | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Kollisionskennfeld Rückwand F07: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_KF_SB | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Kollisionskennfeld Sitzbelüftung: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_PIA | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung PIA: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_SITPOS_MF | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Sitzpositionsübergabe Mann/Frau: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_UEKB | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung ÜKB: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_VB_LNV | 0-n | high | unsigned char | - | TAB_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierung Verstellbereich LNV F07: Interpretation siehe Tabelle |
| STAT_INIT_SITZ_KF_LNV_FTC | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld Lehne - Verdeckkasten: Interpretation siehe Tabelle |
| STAT_DUMMY20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD708_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor SLV: Interpretation siehe Tabelle |
| STAT_MOTOR_SHV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor SHV: Interpretation siehe Tabelle |
| STAT_MOTOR_LNV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor LNV: Interpretation siehe Tabelle |
| STAT_MOTOR_SNV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor SNV: Interpretation siehe Tabelle |
| STAT_MOTOR_KHV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor KHV: Interpretation siehe Tabelle |
| STAT_MOTOR_STV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor STV: Interpretation siehe Tabelle |
| STAT_MOTOR_LBV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor LBV: Interpretation siehe Tabelle |
| STAT_MOTOR_LKV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | 1.0 | 1.0 | 0.0 | Status Motor LKV: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD709_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_AKTIVSITZ | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Aktivsitz/Massage: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_EBEN | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste ebener Ladeboden: Interpretation siehe Tabelle |
| STAT_SCHALTER_TRANSPORT | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Transport: Interpretation siehe Tabelle |
| STAT_SCHALTER_RESET | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Reset: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_LORDOSE_AUF | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Lordose auf: Interpretation siehe Tabelle |
| STAT_SCHALTER_LORDOSE_AB | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Lordose ab: Interpretation siehe Tabelle |
| STAT_SCHALTER_LORDOSE_VOR | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Lordose vor: Interpretation siehe Tabelle |
| STAT_SCHALTER_LORDOSE_ZURUECK | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Lordose zurück: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_MEMORY_1 | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Memory Position 1: Interpretation siehe Tabelle |
| STAT_SCHALTER_MEMORY_2 | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Memory Position 2: Interpretation siehe Tabelle |
| STAT_SCHALTER_MEMORY_MEM | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Memory Speichern: Interpretation siehe Tabelle |
| STAT_SCHALTER_MEMORY_RES | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Memory Reset Position: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_GENT | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Gentleman: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_LVK | 0-n | high | unsigned char | - | TAB_SCHALTER_LVK | 1.0 | 1.0 | 0.0 | Status Lehnenverriegelungskontakt: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD710_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SITZHEIZUNG | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Sitzheizung: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD711_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SITZKLIMA | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Sitzklima: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD712_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SV_SLV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste SLV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_SLV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste SLV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_SHV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste SHV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_SHV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste SHV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LNV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste LNV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LNV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste LNV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_SNV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste SNV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_SNV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste SNV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_KHV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste KHV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_KHV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste KHV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_STV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste STV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_STV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste STV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LBV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste LBV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LBV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste LBV minus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LKV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste LKV plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_SV_LKV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste LKV minus: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD713_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_FB | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Fernbedienung: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD714_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0...3, 255 = ungültig |
| STAT_TEMP_KISSEN_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Kissen: -40...127, -128 = ungültig |
| STAT_PWM_KISSEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Kissen: 0...100, 255 = ungültig |
| STAT_TEMP_LEHNE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Lehne: -40...127, -128 = ungültig |
| STAT_PWM_LEHNE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Lehne: 0...100, 255 = ungültig |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD715_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZKLIMA | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_SITZKLIMA | 1.0 | 1.0 | 0.0 | Codierte Konfiguration Sitzklima: Interpretation siehe Tabelle |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzklima: 0..3, 255 = ungültig |
| STAT_VERSORGUNG | 0-n | high | unsigned char | - | TAB_SITZKLIMA_VERSORGUNG | 1.0 | 1.0 | 0.0 | Status Versorgung Sitzklima Lüfter: Interpretation siehe Tabelle |
| STAT_DREHZAHLSTUFE_KISSEN | 0-n | high | unsigned char | - | TAB_STATUS_LANGSAM_SCHNELL | 1.0 | 1.0 | 0.0 | Drehzahlstufe Kissen(nur in Betriebsart gesteuert): Interpretation siehe Tabelle |
| STAT_DREHZAHLSTUFE_LEHNE | 0-n | high | unsigned char | - | TAB_STATUS_LANGSAM_SCHNELL | 1.0 | 1.0 | 0.0 | Drehzahlstufe Lehne(nur in Betriebsart gesteuert): Interpretation siehe Tabelle |
| STAT_PWM_MAX_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Berechnetes maximal zulässiges PWM Verhaeltnis (Akustikmassnahme, nur in Betiebsart geregelt): 0..100%, 255 = Wert steht nicht zur Verfügung |
| STAT_PWM_KISSEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Kissen (nur in Betriebsart geregelt): 0..100%, 255 = ungültig |
| STAT_PWM_LEHNE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Lehne (nur in Betriebsart geregelt): 0..100%, 255 = ungültig |
| STAT_DUMMY1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD716_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_SLV_NORM_PLUS_CC_SCHWELLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Codierte maximale Anzahl von Verstellungen (SV_SCHWELLE_REKALIBRIEREN), bis CC-Meldung für Normierlauf Fahrer/Beifahrer kommt |
| STAT_ZAEHLER_SLV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung SLV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_SLV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung SLV minus  (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_SHV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung SHV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_SHV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung SHV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_LNV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung LNV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_LNV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung LNV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_SNV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung SNV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_SNV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung SNV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_KHV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung KHV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_KHV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung KHV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_STV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung STV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_STV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung STV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_LBV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung LBV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_LBV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung LBV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_LKV_NORM_PLUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung LKV plus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_ZAEHLER_LKV_NORM_MINUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen seit  letzter Normierung LKV minus (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_DUMMY1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD717_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_SV_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Leiterplatte bei Motortreiber Sitzverstellung: -40..127, -128 = ungültig |
| STAT_TEMP_SHZ_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Leiterplatte bei Treiber Sitzheizung: -40..127, -128 = ungültig |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD71E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_EE_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Easy Entry plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_EE_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status Taste Easy Entry minus: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD71F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND | 0-n | high | unsigned char | - | TAB_LORDOSE_SITZ_ZUSTAND | 1.0 | 1.0 | 0.0 | Status Lordose Zustand: Interpretation siehe Tabelle |
| STAT_PUMPE | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Lordose Pumpe: Interpretation siehe Tabelle |
| STAT_VENTIL1 | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Lordose Ventil 1: Interpretation siehe Tabelle |
| STAT_VENTIL2 | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Lordose Ventil 2: Interpretation siehe Tabelle |
| STAT_VENTIL3 | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Lordose Ventil 3: Interpretation siehe Tabelle |
| STAT_VENTIL4 | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Lordose Ventil 4: Interpretation siehe Tabelle |
| STAT_LUFTZUFUHR | 0-n | high | unsigned char | - | TAB_STATUS_LUFTZUFUHR | 1.0 | 1.0 | 0.0 | Status Luftzufuhr(Umschaltung zwischen Aktivsitz/Massage und Lordose): Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD720_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND | 0-n | high | unsigned char | - | TAB_MASSAGE_SITZ_ZUSTAND | 1.0 | 1.0 | 0.0 | Status Massage Zustand: Interpretation siehe Tabelle |
| STAT_VERSORGUNG | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Versorgung Massage Druckverteiler: Interpretation siehe Tabelle |
| STAT_LANGSAM_SCHNELL | 0-n | high | unsigned char | - | TAB_STATUS_LANGSAM_SCHNELL | 1.0 | 1.0 | 0.0 | Status Umschaltung zwischen langsamer und  schneller Massage: Interpretation siehe Tabelle |
| STAT_PUMPENANFORDERUNG | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Massage Punmpenanforderung: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD721_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND | 0-n | high | unsigned char | - | TAB_AKTIVSITZ_SITZ_ZUSTAND | 1.0 | 1.0 | 0.0 | Status Aktivsitz Zustand: Interpretation siehe Tabelle |
| STAT_NOCKENMOTOR | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Aktivsitz Nockenmotor: Interpretation siehe Tabelle |
| STAT_NOCKENSCHALTER | 0-n | high | unsigned char | - | TAB_STATUS_AUS_EIN | 1.0 | 1.0 | 0.0 | Status Aktivsitz Nockenschalter: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD722_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAEUFIGKEITSZAEHLER_SLV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen der SLV (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_HAEUFIGKEITSZAEHLER_SHV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen der SHV (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_HAEUFIGKEITSZAEHLER_LNV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen der LNV (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_HAEUFIGKEITSZAEHLER_SNV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisher durchgeführten Verstellungen der SNV (65535 = ungültig, nicht vorhanden oder codiert) |
| STAT_DUMMY1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_SLV_POSITIONSBEREICH_0_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrtantritte, bei denen sich die Sitzlängsverstellung im Bereich 0% - 33% des Gesamtverstellwegs befand (Vorne) (65535 = ungültig) |
| STAT_SLV_POSITIONSBEREICH_34_66_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrtantritte, bei denen sich die Sitzlängsverstellung im Bereich 34% - 66% des Gesamtverstellwegs befand (Mitte) (65535 = ungültig) |
| STAT_SLV_POSITIONSBEREICH_67_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrtantritte, bei denen sich die Sitzlängsverstellung im Bereich 67% - 100% des Gesamtverstellwegs befand (Hinten) (65535 = ungültig) |
| STAT_BETRIEBSZAEHLER_SHZ_STUFE_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufsummierte Betriebszeit der Sitzheizung in Stufe 1 (0xFFFFFFFF = ungültig, nicht vorhanden oder codiert) |
| STAT_BETRIEBSZAEHLER_SHZ_STUFE_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufsummierte Betriebszeit der Sitzheizung in Stufe 2 (0xFFFFFFFF = ungültig, nicht vorhanden oder codiert) |
| STAT_BETRIEBSZAEHLER_SHZ_STUFE_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufsummierte Betriebszeit der Sitzheizung in Stufe 3 (0xFFFFFFFF = ungültig, nicht vorhanden oder codiert) |
| STAT_DUMMY8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD7F0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUFE_LINKS_WERT | Stufe | high | unsigned char | - | - | - | - | - | Stufe Nackenwaermer links: 0..3, 255 = ungültig |
| STAT_VERSORGUNG_LINKS_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Spannungsversorgung Nackenwaermer links (KL30A) |
| STAT_PWM_HEIZELEMENT_LINKS_WERT | % | high | unsigned char | - | - | - | - | - | PWM Heizelement links: 0..100, 255 = ungültig |
| STAT_STEUERSPANNUNG_LUEFTER_LINKS_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Steuerspannung Luefter links: 0..5V, 255 = ungültig |
| STAT_VERSORGUNG_LUEFTER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - |  Status Versorgung Luefter links: 0 = Versorgung nicht eingeschaltet 1 = Versorgung eingeschaltet |
| STAT_LUEFTER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - |  Status Luefter links: 0 = dreht nicht, 1 = dreht |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | - | - | - | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_STUFE_RECHTS_WERT | Stufe | high | unsigned char | - | - | - | - | - | Stufe Nackenwaermer rects: 0..3, 255 = ungültig |
| STAT_VERSORGUNG_RECHTS_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Spannungsversorgung Nackenwaermer rechts (KL30B) |
| STAT_PWM_HEIZELEMENT_RECHTS_WERT | % | high | unsigned char | - | - | - | - | - | PWM Heizelement rechts: 0..100, 255 = ungültig |
| STAT_STEUERSPANNUNG_LUEFTER_RECHTS_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Steuerspannung Luefter rechts: 0..5V, 255 = ungültig |
| STAT_VERSORGUNG_LUEFTER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - |  Status Versorgung Luefter rechts: 0 = Versorgung nicht eingeschaltet 1 = Versorgung eingeschaltet |
| STAT_LUEFTER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - |  Status Luefter rechts: 0 = dreht nicht, 1 = dreht |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD7F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_LINKS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Bedienschalter Nackenwaermer Taste links: Interpretation siehe Tabelle |
| STAT_TASTE_RECHTS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Bedienschalter Nackenwaermer Taste rechts: Interpretation siehe Tabelle |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INITIALISIERUNGSLAUF_CODIERT | 0xA703 | - | Initialisierung der Verstellmotore mit einem im Steuergerät codierten Ablauf. Service = 0x31. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA703_R |
| SELBSTTEST_SITZ | 0xA704 | - | Testet alle Aktoren und intelligenten Sensoren im Sitz | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA704_R |
| CONFIG_HW | 0xD700 | - | Ausgabe der Hardwarekonfiguration des Steuergerätes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD700_D |
| CONFIG_CODIERT | 0xD701 | - | Ausgabe der codierten Konfiguration des Steuergerätes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD701_D |
| HALLZAEHLER | 0xD702 | - | Abfrage Hallzähler / Position der verschiedenen Achsen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD702_D |
| INITIALISIERUNGSLAUF_FREI | 0xD703 | - | Frei konfigurierbarer Initialisierungslauf | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD703_D |
| INITIALISIERUNG_SITZ | 0xD704 | - | Status der Initialisierung aller Verstellmotoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD704_D |
| MOTOR | 0xD708 | - | Ansteuerung und Statusabfrage der Verstellmotoren | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD708_D | RES_0xD708_D |
| SCHALTER_AKTIVSITZ_MASSAGE | 0xD709 | - | Statusabfrage Schalter Aktivsitz/Massage | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD709_D | RES_0xD709_D |
| SCHALTER_GEPAECK | 0xD70A | - | Ausgabe des Status des Gepäckraumschalters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70A_D |
| SCHALTER_LORDOSE | 0xD70B | - | Statusabfrage Schalter Lordose | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70B_D |
| SCHALTER_MEMORY | 0xD70C | - | Statusabfrage Schalter Memory | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD70C_D | RES_0xD70C_D |
| SCHALTER_GENT | 0xD70E | - | Ausgabe des Status des Umschalters für die Gentlemanfunktion (Verstellung Beifahrersitz vom Fahrersitz aus). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70E_D |
| SCHALTER_LVK | 0xD70F | - | Abfrage Status des Lehnenverriegelungskontakts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70F_D |
| SCHALTER_SITZHEIZUNG | 0xD710 | - | Statusabfrage Schalter Sitzheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD710_D |
| SCHALTER_SITZKLIMA | 0xD711 | - | Statusabfrage Schalter Sitzklima | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD711_D |
| SCHALTER_SV | 0xD712 | - | Statusabfrage Sitzverstellschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD712_D |
| SCHALTER_FERNB_BF | 0xD713 | - | Statusabfrage Schalter Fernbedienung (Verstellung Beifahrersitz durch den Beifahrer hinten) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD713_D |
| SITZHEIZUNG | 0xD714 | - | Ansteuerung und Statusabfrage der Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD714_D | RES_0xD714_D |
| SITZKLIMA | 0xD715 | - | Ansteuerung und Statusabfrage der Sitzklima | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD715_D | RES_0xD715_D |
| VERSTELLZAEHLER_SITZ | 0xD716 | - | Statusabfragen Anzahl Motorverstellungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD716_D |
| ENTW_TEMP_ECU | 0xD717 | - | Temperatur Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD717_D |
| HALLZAEHLER_RESET | 0xD719 | - | Reset Hallzähler durchführen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD719_D | - |
| SCHALTER_EE | 0xD71E | - | Ausgabe Status Taste Fondeinstiegshilfe Ansteuern der Leuchtdioden im Schalter Interpretation siehe Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD71E_D |
| LORDOSE_SITZ | 0xD71F | - | Ansteuerung und Statusabfrage der Lordose Aktuatoren | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD71F_D | RES_0xD71F_D |
| MASSAGE_SITZ | 0xD720 | - | Ansteuerung und Statusabfrage der Massage Aktuatoren | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD720_D | RES_0xD720_D |
| AKTIVSITZ_SITZ | 0xD721 | - | Ansteuerung und Statusabfrage der Aktivsitz Aktuatoren | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD721_D | RES_0xD721_D |
| STATISTIK_SITZ | 0xD722 | - | Sitz Statistikdaten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD722_D | RES_0xD722_D |
| NACKENWAERMER | 0xD7F0 | - | Nackenwaermer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7F0_D | RES_0xD7F0_D |
| BEDIENSCHALTER_NACKENWAERMER | 0xD7F2 | - | Bedienschalter Nackenwaermer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7F2_D | RES_0xD7F2_D |
| DEVELOPMENT_INFO | 0x4010 | - | Interne Software Versionsnummern Applikation (SWFL) und Bootloader (BTLD) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |

### TAB_ADAP_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Adaptionslauf durchgeführt |
| 0x01 | Adaptionslauf aktiv |
| 0x02 | Adaptionslauf erfolgreich |
| 0x03 | Adaptionslauf nicht erfolgreich |
| 0x04 | Adaptionslauf nicht durchgeführt, da sich Motor nicht am Hardblock befindet |
| 0x05 | Adaptionslauf nicht erfolgreich wegen Adaptionsbereichsüberschreitung |
| 0x06 | Adaptionslauf nicht durchgeführt, da fuer angegebenen Motor nicht moeglich |
| 0xFE | Fehler beim Lesen der Adaptionslauf Fehlermeldungen aus dem EEPROM |

### TAB_AKTIVSITZ_SITZ_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x04 | ENTLEEREN |
| 0xFE | AUSGANG_DIREKT |

### TAB_AKTIVSITZ_SITZ_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | aus: entleert |
| 0x01 | aus: nicht entleert |
| 0x03 | ein: Zyklus |
| 0x04 | ein: Entleerlauf |

### TAB_CONFIG_CODIERT_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert |
| 0x01 | codiert: Motor |
| 0x02 | codiert: Motor und Hallsensor |
| 0xFF | Ungültig |

### TAB_CONFIG_CODIERT_SCHALTER_SV_RCODED

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert |
| 0x01 | codiert: 3-Kanal |
| 0x02 | codiert: 4-Kanal mit Memory |
| 0x03 | codiert: 4-Kanal mit Lordose |
| 0xFF | Ungültig |

### TAB_CONFIG_CODIERT_SITZHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert |
| 0x01 | codiert: 1-Kreis-Heizung |
| 0x02 | codiert: 2-Kreis-Heizung |
| 0xFF | Ungültig |

### TAB_CONFIG_CODIERT_SITZKLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert |
| 0x01 | codiert: gesteuert |
| 0x02 | codiert: geregelt |
| 0xFF | Ungültig |

### TAB_CONFIG_HW_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden: Motoransteuerung |
| 0x02 | vorhanden: Motoransteuerung und Hallsensorauswertung |
| 0xFF | Ungültig |

### TAB_CONFIG_HW_SITZHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden: 1-Kreis-Heizung |
| 0x02 | vorhanden: 2-Kreis-Heizung |
| 0xFF | Ungültig |

### TAB_HALLZAEHLER_RESET_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | SLV |
| 0x01 | SHV |
| 0x02 | LNV |
| 0x03 | SNV |
| 0x04 | KHV |
| 0x05 | STV |
| 0x06 | LBV |
| 0x07 | LKV |
| 0xFE | ALL |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### TAB_INITIALISIERUNGSLAUF_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | NORM_PLUS |
| 0x02 | NORM_MINUS |
| 0x03 | HOME |
| 0x04 | ADAP_PLUS |
| 0x05 | ADAP_MINUS |
| 0x06 | POS_PLUS_PHYS |
| 0x07 | POS_MINUS_PHYS |
| 0x0A | WAIT |

### TAB_INITIALISIERUNG_SITZ_ADAP

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht adaptiert |
| 0x01 | adaptiert |
| 0x02 | Motor nicht vorhanden oder codiert oder Adaption nicht relevant |
| 0xFF | Ungültig |

### TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung fehlgeschlagen |
| 0x01 | Plausibilitätscheck fehlgeschlagen |
| 0x02 | Hallzähler ausserhalb des gültigen Bereiches |
| 0x03 | Positionsverlust |
| 0x04 | Hallsensor defekt |
| 0x05 | Hallzähler zurückgesetzt |
| 0x06 | Normierlauf |
| 0x07 | Anzahl Verstellungen > SV_SCHWELLE_REKALIBRIEREN(Codierparameter) |
| 0x08 | Anzahl Verstellungen > SV_SCHWELLE_BOTSCHAFT_OHNE_POSITION (Codierparameter) |
| 0x09 | Normieranschlag überfahren |
| 0x0A | Fehler beim Lesen der Entnormierursache aus dem EEPROM (Nur Info! Es erfolgt dabei keine Entnormierung!) |
| 0x0B | Referenzblock für die Plausibilisierung eines mechanischen Anschlags ueber den gegenueberliegenden Normblock nicht in Ordnung (Nur Info! Es erfolgt dabei keine Entnormierung!) |
| 0x0C | Normblock wurde herangezogen (Nur Info! Es erfolgt dabei keine Entnormierung!) |
| 0xFF | Ungültig |

### TAB_INITIALISIERUNG_SITZ_NORM

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht normiert |
| 0x01 | normiert |
| 0x02 | Motor nicht vorhanden oder codiert oder Normierung nicht relevant |
| 0xFF | Ungültig |

### TAB_INITIALISIERUNG_SITZ_PLAUSI

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht plausibel |
| 0x01 | plausibel |
| 0x02 | Motor nicht vorhanden oder codiert oder nicht relevant |
| 0xFF | Ungültig |

### TAB_INIT_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Normierlauf durchgeführt |
| 0x01 | Normierlauf aktiv |
| 0x02 | Normierlauf durchgeführt  |
| 0x03 | Normierlauf nicht gestartet wegen Fahrzeuggeschwindigkeit >= 5km/h und Fertigungsmode = aus |
| 0x10 | Normierlauf abgebrochen wegen Unter-/Überspannung |
| 0x11 | Normierlauf abgebrochen wegen Panikabbruch via Sitzverstellschalter |
| 0x12 | Normierlauf abgebrochen wegen Fahrzeuggeschwindigkeit >= 10km/h und Fertigungsmode = aus |
| 0x13 | Normierlauf abgebrochen wegen Timeout Statuspolling (3s) |
| 0x14 | Normierlauf abgebrochen durch Diagnose STOP oder wegen Job Timeout (240s) |
| 0x15 | Normierlauf abgebrochen wegen Spannungsausfall |
| 0x16 | Normierlauf abgebrochen wegen Baugruppen Reset |
| 0x17 | Normierlauf abgebrochen wegen Motorfehler |
| 0x04 | Normierlauf nicht gestartet, da Steuergerät nicht codiert |
| 0x05 | Normierlauf nicht gestartet, da laut Codierung kein Initialisierungslauf vorgesehen |
| 0x18 | Normierlauf abgebrochen, da Adaptionslauf nicht durchgeführt werden konnte (Details siehe STAT_ADAP_..._ERROR) |
| 0x19 | Normierlauf abgebrochen, da Positionierung nicht durchgeführt werden konnte (Steuergerät nicht codiert) |
| 0x1A | Normierlauf abgebrochen, da Positionierung nicht durchgeführt werden konnte (zu positionierender Motor nicht normiert) |
| 0x1B | Normierlauf abgebrochen, da Hardware zur Motoransteuerung oder Hallsensorauswertung nicht vorhanden |
| 0x1C | Normierlauf abgebrochen wegen Hallsensorfehler |
| 0x1D | Normierlauf abgebrochen wegen Angabe eines ungültigen Motors im Initialisierungsablauf |
| 0x1E | Normierlauf abgebrochen wegen Angabe einer ungültigen Aktion im Initialisierungsablauf |
| 0x1F | Normierlauf abgebrochen, da Positionierung nicht durchgeführt werden konnte (Positionsberechnung nicht möglich) |
| 0xFE | Fehler beim Lesen der Initialisierungslauf-Fehlermeldungen aus dem EEPROM |

### TAB_INIT_STEP

| WERT | TEXT |
| --- | --- |
| 0x00 | SLV stop |
| 0x01 | SLV Normierfahrt vor |
| 0x02 | SLV Normierfahrt zurück |
| 0x03 | SLV Positionierung auf Hallzähler 0x8000 |
| 0x04 | SLV Adaptionsfahrt vor |
| 0x05 | SLV Adaptionsfahrt zurück |
| 0x06 | SLV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x07 | SLV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x10 | SHV stop |
| 0x11 | SHV Normierfahrt auf |
| 0x12 | SHV Normierfahrt ab |
| 0x13 | SHV Positionierung auf Hallzähler 0x8000 |
| 0x16 | SHV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x17 | SHV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x20 | LNV stop |
| 0x21 | LNV Normierfahrt vor |
| 0x22 | LNV Normierfahrt zurück |
| 0x23 | LNV Positionierung auf Hallzähler 0x8000 |
| 0x26 | LNV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x27 | LNV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x30 | SNV stop |
| 0x31 | SNV Normierfahrt auf |
| 0x32 | SNV Normierfahrt ab |
| 0x33 | SNV Positionierung auf Hallzähler 0x8000 |
| 0x36 | SNV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x37 | SNV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x40 | KHV stop |
| 0x41 | KHV Normierfahrt auf |
| 0x42 | KHV Normierfahrt ab |
| 0x43 | KHV Positionierung auf Hallzähler 0x8000 |
| 0x46 | KHV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x47 | KHV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x50 | STV stop |
| 0x51 | STV Normierfahrt vor |
| 0x52 | STV Normierfahrt zurück |
| 0x53 | STV Positionierung auf Hallzähler 0x8000 |
| 0x56 | STV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x57 | STV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x60 | LBV stop |
| 0x61 | LBV Normierfahrt breit |
| 0x62 | LBV Normierfahrt schmal |
| 0x63 | LBV Positionierung auf Hallzähler 0x8000 |
| 0x66 | LBV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x67 | LBV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x70 | LKV stop |
| 0x71 | LKV Normierfahrt vor |
| 0x72 | LKV Normierfahrt zurück |
| 0x73 | LKV Positionierung auf Hallzähler 0x8000 |
| 0x76 | LKV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x77 | LKV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0xF0 | Kein Motor aktiv |

### TAB_LORDOSE_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | AUF |
| 0x02 | AB |
| 0x04 | VOR |
| 0x08 | ZURUECK |
| 0xFE | AUSGANG_DIREKT |

### TAB_LORDOSE_SITZ_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x0 | aus |
| 0x1 | auf |
| 0x2 | ab |
| 0x4 | vor |
| 0x8 | zurück |
| 0xFF | ungültig |

### TAB_MASSAGE_SITZ_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | STUFE1 |
| 0x02 | STUFE2 |
| 0x04 | ENTLEEREN |
| 0xFE | AUSGANG_DIREKT |

### TAB_MASSAGE_SITZ_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x0 | aus: entleert |
| 0x1 | aus: nicht entleert |
| 0x2 | ein: Stufe 1 (langsam) |
| 0x3 | ein: Stufe 2 (schnell) |
| 0x4 | ein: Entleerlauf |

### TAB_MOTOR_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | PLUS |
| 0x02 | MINUS |

### TAB_SCHALTER_LVK

| WERT | TEXT |
| --- | --- |
| 0x00 | Masseschluss |
| 0x01 | Lehne verriegelt |
| 0x02 | Lehne entriegelt |
| 0x03 | Signal ungültig |
| 0x04 | nicht vorhanden oder codiert |
| 0xFF | Ungültig |

### TAB_SELBSTTEST_SITZ

| WERT | TEXT |
| --- | --- |
| 0 | nicht getestet |
| 1 | erfolgreich getestet |
| 0xFF | nicht erfolgreich getestet |

### TAB_SELBSTTEST_SITZ_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Selbsttest durchgeführt |
| 0x01 | Selbsttest aktiv |
| 0x02 | Selbsttest durchgeführt |
| 0x03 | Selbsttest nicht gestartet wegen Fahrzeuggeschw. >= 5km/h und FM = aus |
| 0x04 | Selbsttest nicht gestartet, da Steuergerät nicht codiert |
| 0x10 | Selbsttest abgebrochen wegen Unter- / Überspannung |
| 0x11 | Selbsttest abgebrochen wegen Panikabbruch am SVS |
| 0x12 | Selbsttest abgebrochen wegen Fahrzeuggeschw. >= 10km/h und FM = aus |
| 0x13 | Selbsttest abgebrochen wegen Timeout Statuspolling (3s) |
| 0x14 | Selbsttest abgebrochen durch Diagnose oder wegen Timeout (240s) |
| 0x15 | Selbsttest abgebrochen wegen Spannungsausfall |
| 0x16 | Selbsttest abgebrochen wegen Baugruppen Reset |
| 0xFE | Fehler beim Lesen der Selbsttest Fehlermeldungen aus dem EEPROM |

### TAB_SELBSTTEST_SITZ_STEP

| WERT | TEXT |
| --- | --- |
| 0x00 | Selbsttest Schritt nicht durchgeführt |
| 0x01 | Selbsttest Schritt aktiv |
| 0x02 | Selbsttest Schritt durchgeführt: erfolgreich |
| 0x03 | Selbsttest Schritt durchgeführt: nicht erfolgreich |
| 0x04 | Selbsttest Schritt nicht gestartet, da Funktion codiert aber Hardware nicht vorhanden |
| 0x05 | Selbsttest Schritt nicht gestartet, da Funktion nicht codiert |

### TAB_SITZHEIZUNG_SITZKLIMA_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | STUFE1 |
| 2 | STUFE2 |
| 3 | STUFE3 |
| 254 | AUSGANG_DIREKT |

### TAB_SITZKLIMA_VERSORGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0x02 | Nicht vorhanden oder codiert |
| 0xFF | ungültig |

### TAB_STATUS_AUS_EIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0x02 | Nicht vorhanden oder codiert |
| 0xFF | Ungültig |

### TAB_STATUS_LANGSAM_SCHNELL

| WERT | TEXT |
| --- | --- |
| 0x00 | Langsam |
| 0x01 | Schnell |
| 0x02 | Nicht vorhanden oder codiert |
| 0xFF | Ungültig |

### TAB_STATUS_LUFTZUFUHR

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktivsitz / Massage |
| 0x01 | Lordose |
| 0x02 | Nicht vorhanden oder codiert |
| 0xFF | Ungültig |

### TAB_STATUS_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Plus, vor, auf, breit |
| 0x02 | Minus, zurück, ab, schmal |
| 0x03 | Nicht vorhanden oder codiert |
| 0x04 | Ungültig |

### TAB_STATUS_TASTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Taste nicht betätigt |
| 0x01 | Taste betätigt |
| 0x02 | nicht vorhanden oder codiert |
| 0xFF | Ungültig |

### TAB_SV_MOTOREN

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | SLV | Sitzlängsverstellung |
| 0x01 | SHV | Sitzhöhenverstellung |
| 0x02 | LNV | Lehnenneigungsverstellung |
| 0x03 | SNV | Sitzneigungsverstellung |
| 0x04 | KHV | Kopfhöhenverstellung |
| 0x05 | STV | Sitztiefenverstellung |
| 0x06 | LBV | Lehnenbreitenverstellung |
| 0x07 | LKV | Lehnenkopfverstellung |
