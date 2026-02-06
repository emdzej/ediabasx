# EME_F30.prg

## General

|  |  |
| --- | --- |
| File | EME_F30.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 190 |
| Origin | BMW EA-441 Sternecker |
| Revision | 10.000 |
| Author | BMW EA-402 Castellnou, ROBERT-BOSCH-GMBH EA-441 Hensger |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotor-Elektronik |  |  |
| ORIGIN | string | BMW EA-441 Sternecker |  |  |
| REVISION | string | 10.000 |  |  |
| AUTHOR | string | BMW EA-402 Castellnou, ROBERT-BOSCH-GMBH EA-441 Hensger |  |  |
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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

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

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

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
| 0x0007 | Volvo Cars (Ford Group) |
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
| 0x005B | VOLVO Technology Schweden |
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
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
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

### ARG_0XADE5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_KUEHLMITTELTEMPERATUR_MITTELWERT | + | - | 0-n | high | unsigned char | - | TAB_HISTOGRAMM_KUEHLMITTELTEMPERATUR | - | - | - | - | - | Auswahl des Kühlmitteltemperatur-Mittelwert |

### ARG_0XADE6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_EM_DREHMOMENTMITTELWERT | + | - | 0-n | high | unsigned char | - | TAB_HISTOGRAMM_DREHMOMENT_HUB | - | - | - | - | - | Auswahl des Drehmomentmittelwerts |

### ARG_0XADE7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EM_DREHZAHLMITTELWERT | + | - | 0-n | high | unsigned char | - | TAB_HISTOGRAMM_EMASCHINE_DREHZAHL_HUB | - | - | - | - | - | Auswahl Drehzahlmittelwert |

### ARG_0XADEA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOC_REGELUNG_LEISTUNG | + | - | W | high | long | - | - | 1.0 | 1.0 | 0.0 | -32768.0 | 32768.0 | Leistung für SOC Regelung |
| SOC_REGELUNG_DREHZAHL_EM1 | + | - | 1/min | high | long | - | - | 1.0 | 1.0 | 0.0 | -32768.0 | 32767.0 | Drehzahl für Elektromaschine 1 |
| SOC_REGELUNG_VM_START | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Starten des Verbrennungsmotors: 0 = kein Start; 1 = Start |

### ARG_0XADEB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEREICH_DREHZAHL | + | - | 0-n | high | unsigned char | - | TAB_DREHZAHL_EM_STUETZ | - | - | - | - | - | Auswahl Drehzahlbereichen, in denen die Traktions-Elektromaschine (geordnet nach Drehmoment und Drehzahl) verweilt |

### ARG_0XADED_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_LEISTUNGSMESSUNG_PHEV | + | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_SETZEN | - | - | - | - | - | Auswahl Modus für Leistungsmessung PHEV |

### ARG_0XADF1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_DCDC_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_DCDC_ANF | 1.0 | 1.0 | 0.0 | - | - | Anforderung Betriebsart DCDC |
| ST_B_DIAG_DCDC | + | - | 0-n | high | unsigned char | - | TAB_ST_B_DIAG_DCDC | - | - | - | - | - | Auswahl der Systemgrenze |
| I_DIAG_DCDC_LV_OUT | + | - | A | high | int | - | - | 1.0 | 1.0 | 0.0 | -200.0 | 200.0 | LV Strom Systemgrenze |
| I_DIAG_DCDC_HV_OUT | + | - | A | high | int | - | - | 1.0 | 1.0 | 0.0 | -25.0 | 25.0 | HV Strom Systemgrenze |
| U_DIAG_DCDC_LV_OUT | + | - | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 33.0 | LV Spannung Systemgrenze |
| U_DIAG_DCDC_HV_OUT | + | - | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 300.0 | HV Spannung Systemgrenze |

### ARG_0XADF2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_HV_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_HV_ANF | - | - | - | - | - | Anforderung HV |

### ARG_0XADF4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XADFB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_WERKSMODUS_PHEV | + | - | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV | - | - | - | - | - | Werksmodus PHEV setzen |

### ARG_0XDE19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZAHL_BREMSBETAETIGUNG | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Bremsbetätigungen der ELUP |
| LAUFZEIT_ELUP | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Laufzeit der ELUP |
| ANLAEUFE_ELUP | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Anläufe der ELUP |

### ARG_0XDE1F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAUSCH_ZSEBATT_REGISTRIEREN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = Keine Anforderung; 1 = Tausch ZSE-Batterie registrieren |

### ARG_0XDE20_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZSEBATT_SZEWERTE_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = Keine Anforderung; 1 = Werte ZSE-Batterie zurücksetzen |

### ARG_0XDE23_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN | - | - | - | - | - | siehe Tabelle |

### ARG_0XDE93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_ELUP | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | - | - | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | - | - | Temperatur des ELUP-Treibers |

### ARG_0XDF18_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Änderung: 0 = Nicht löschen; 1 = NVRAM löschen |

### ARG_0XDF19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 1 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 2 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 3 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 4 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 5 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_6_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 6 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 7 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 8 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_9_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 9 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_10_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 10 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_11_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 11 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_12_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 12 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_13_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 13 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_14_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 14 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_15_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 15 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_16_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 16 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_17_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 17 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_18_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 18 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_19_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 19 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_20_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 20 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_21_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 21 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_22_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 22 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_23_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 23 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_24_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 24 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_25_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 25 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_26_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 26 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_27_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 27 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_28_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 28 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_29_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 29 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_30_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 30 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_31_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 31 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_32_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 32 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_33_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 33 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_34_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 34 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_35_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 35 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_36_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 36 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_37_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 37 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_38_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 38 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_39_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 39 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_40_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 40 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_41_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 41 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_42_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 42 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_43_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 43 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_44_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 44 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_45_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 45 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_46_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 46 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_47_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 47 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_48_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 48 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_49_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 49 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_50_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 50 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_51_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 51 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_52_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 52 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_53_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 53 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_54_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 54 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_55_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 55 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_56_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 56 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_57_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 57 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_58_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 58 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_59_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 59 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_60_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 60 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_61_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 61 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_62_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 62 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_63_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 63 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_64_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 64 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_65_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 65 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_66_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 66 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_67_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 67 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_68_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 68 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_69_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 69 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_70_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 70 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_71_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 71 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_72_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 72 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_73_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 73 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_74_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 74 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_75_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 75 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_76_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 76 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_77_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 77 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_78_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 78 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_79_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 79 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_80_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 80 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_81_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 81 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_82_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 82 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_83_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 83 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_84_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 84 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_85_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 85 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_86_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 86 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_87_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 87 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_88_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 88 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_89_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 89 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_90_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 90 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_91_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 91 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_92_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 92 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_93_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 93 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_94_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 94 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_95_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 95 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_96_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 96 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_97_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 97 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_98_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 98 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_99_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 99 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_100_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 100 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_101_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 101 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_102_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 102 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_103_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 103 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_104_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 104 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_105_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 105 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_106_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 106 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_107_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 107 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_108_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 108 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_109_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 109 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_110_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 110 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_111_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 111 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_112_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 112 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_113_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 113 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_114_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 114 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_115_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 115 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_116_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 116 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_117_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 117 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_118_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 118 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_119_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 119 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_120_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 120 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_121_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 121 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_122_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 122 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_123_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 123 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_124_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 124 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_125_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 125 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_126_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 126 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_127_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 127 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_128_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 128 aus Array des NVRAM-Spiegels |

### ARG_0XDF45_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SET_AC_I_LIMIT_LOW | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_LOW | - | - | - | - | - | Einstellung Stromgrenze AC_LOW |
| STAT_SET_AC_I_LIMIT_HIGH | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_HIGH | - | - | - | - | - | Einstellung Stromgrenze AC_HIGH |
| STAT_AC_I_LIMIT_ACTIVE_NR | 0-n | high | unsigned char | - | TAB_STAT_AC_I_LIMIT_ACTIVE | - | - | - | - | - | Auswahl ob Ladestrom verstellt werden soll |

### ARG_0XDF47_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDF4B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDF50_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BA_WERKLDMODUS | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | - | - | Auswahl des Lademodus Werk |
| STAT_SOC_ANF_WERKLADEMODUS | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Geforderter SOC Endwert HV-Batterie beim Lademodus Werk |

### ARG_0XDF51_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSWAHL_AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

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
| STAT_RUECKSETZEN_HISTOGRAMM_LADEGERAET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl: 0 = Keine Aktion; 1 = Rücksetzen |

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
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023A00 | Energiesparmode aktiv | 0 |
| 0x023A08 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x023A09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x023A0A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x023A0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x023A0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x023A0D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF3A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030F85 | DC/DC-Wandler - HV Stromsensor - Kurzschluss nach Plus | 0 |
| 0x030F86 | DC/DC-Wandler - HV Stromsensor - Kurzschluss nach Masse | 0 |
| 0x030F87 | DC/DC-Wandler - HV Stromsensor - Oberer Schwellwert überschritten | 0 |
| 0x030F88 | DC/DC-Wandler - HV Stromsensor - Unterer Schwellwert unterschritten | 0 |
| 0x030F89 | DC/DC-Wandler - HV-Stromsensor - Plausibilitätsfehler | 0 |
| 0x030F8A | DC/DC-Wandler - LV Spannungssensor - Kurzschluss nach Plus | 0 |
| 0x030F8B | DC/DC-Wandler - LV Spannungssensor - Kurzschluss nach Masse | 0 |
| 0x030F8C | DC/DC-Wandler - LV Spannungssensor - Oberer Schwellwert überschritten | 0 |
| 0x030F8D | DC/DC-Wandler - LV Spannungssensor - Unterer Schwellwert unterschritten | 0 |
| 0x030F8E | DC/DC-Wandler - LV-Spannungssensor - Plausibilitätsfehler | 0 |
| 0x030F94 | DC/DC-Wandler - Temperatursensor - Kurzschluss nach Plus | 0 |
| 0x030F95 | DC/DC-Wandler - Temperatursensor - Kurzschluss nach Masse | 0 |
| 0x030F96 | DC/DC-Wandler - Temperatursensor - Oberer Schwellenwert überschritten | 0 |
| 0x030F97 | DC/DC-Wandler - Temperatursensor - Unterer Schwellenwert unterschritten | 0 |
| 0x030F98 | DC/DC-Wandler - Temperatursensor - Plausibilitätsfehler | 0 |
| 0x030F9A | DC/DC-Wandler - Masseband-Diagnose - Kurzschluss Messleitung nach Masse | 0 |
| 0x030F9B | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Kurzschluss nach Plus | 0 |
| 0x030F9D | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Oberer Schwellenwert überschritten | 0 |
| 0x030FA0 | DC/DC-Wandler - Masseband-Diagnose - starke Alterung festgestellt - Abschaltung | 0 |
| 0x030FA1 | DC/DC-Wandler - Masseband-Diagnose - Alterung festgestellt | 0 |
| 0x030FA2 | DC/DC-Wandler - Masseband-Diagnose - Alterung festgestellt - Leistung reduziert | 0 |
| 0x031040 | ELUP - Control - Förderleistung mech. Pumpe zu gering | 0 |
| 0x031041 | ELUP - Control - Rückschlagventil - Leckage erkannt | 0 |
| 0x031042 | ELUP - Control - max. Laufzeit überschritten | 0 |
| 0x031043 | ELUP - Control - Förderleistung zu gering | 0 |
| 0x031044 | ELUP - Control - Unterdruckniveau zu gering | 0 |
| 0x031045 | ELUP - Control - Vakuumsensor - außerhalb gülten Bereich | 0 |
| 0x03104A | ELUP - Aktuator - Kurzschluss nach Masse | 0 |
| 0x03104B | ELUP - Aktuator - Kurzschluss nach Plus | 0 |
| 0x03104C | ELUP - Aktuator - Pumpe blockiert | 0 |
| 0x031053 | ELUP - Aktuator - Steckerverbindung - offene Leitung | 0 |
| 0x031055 | ELUP - Ausgangsspannungssensor - Kurzschluss nach Masse | 0 |
| 0x031056 | ELUP - Ausgangsspannungssensor - Kurzschluss nach Plus | 0 |
| 0x031057 | ELUP - Ausgangsspannungssensor - Oberer Schwellenwert überschritten | 0 |
| 0x031058 | ELUP - Ausgangsspannungssensor - Spannung unplausibel | 0 |
| 0x031059 | ELUP - Ausgangsspannungssensor - Unterer Schwellenwert unterschritten | 0 |
| 0x03105B | ELUP - Eingangsspannungssensor - Kurzschluss nach Masse | 0 |
| 0x03105C | ELUP - Eingangsspannungssensor - Kurzschluss nach Plus | 0 |
| 0x03105D | ELUP - Eingangsspannungssensor - Oberer Schwellenwert überschritten | 0 |
| 0x03105E | ELUP - Eingangsspannungssensor - Spannung unplausibel | 0 |
| 0x03105F | ELUP - Eingangsspannungssensor - Unterer Schwellenwert unterschritten | 0 |
| 0x031063 | ELUP - Stromsensor 1 - Kurzschluss nach Masse | 0 |
| 0x031064 | ELUP - Stromsensor 1 - Kurzschluss nach Plus | 0 |
| 0x031065 | ELUP - Stromsensor 1 - Oberer Schwellenwert überschritten | 0 |
| 0x031066 | ELUP - Stromsensor 1 - unplausibel | 0 |
| 0x031067 | ELUP - Stromsensor 1 - Unterer Schwellenwert unterschritten | 0 |
| 0x03106F | ELUP - Temperatursensor defekt | 0 |
| 0x031078 | ELUP - Treiber - Schaltet nicht durch | 0 |
| 0x03107A | ELUP - Treiber - Strom zu hoch | 0 |
| 0x031100 | KV-IR - Kältemittelabsperrventil - Kurzschluss nach Masse | 0 |
| 0x031101 | KV-IR - Kältemittelabsperrventil - Kurzschluss nach Plus oder Übertemperatur | 0 |
| 0x031102 | KV-IR - Kältemittelabsperrventil - Leitungsunterbrechung | 0 |
| 0x031103 | KV-IR - Kältemittelabsperrventil - Plausibilitätsfehler | 0 |
| 0x031200 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase U | 0 |
| 0x031201 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase V | 0 |
| 0x031202 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase W | 0 |
| 0x031204 | EM 1 Verbrennernah - Kommunikation - Erkennung einer ungültig anforderten Betriebsart | 1 |
| 0x031205 | EM 1 Verbrennernah - Rotorlagesensor - Amplitudendifferenz unplausibel | 0 |
| 0x031206 | EM 1 Verbrennernah - Rotorlagesensor - Oberer Schwellenwert überschritten | 0 |
| 0x031208 | EM 1 Verbrennernah - Rotorlagesensor - Überdrehzahl | 0 |
| 0x031209 | EM 1 Verbrennernah - Rotorlagesensor - Unterer Schwellenwert unterschritten | 0 |
| 0x03120A | EM 1 Verbrennernah - Rotorlagesensor - Winkeloffset unplausibel oder nicht angelernt | 0 |
| 0x03120C | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Plus | 0 |
| 0x03120D | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Masse | 0 |
| 0x031210 | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Offene Leitung | 0 |
| 0x031212 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Kurzschluss nach Plus | 0 |
| 0x031213 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Kurzschluss nach Masse | 0 |
| 0x031214 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Oberer Schwellenwert überschritten | 0 |
| 0x031215 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Unterer Schwellenwert unterschritten | 0 |
| 0x031216 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Offene Leitung | 0 |
| 0x031217 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Signal unplausibel | 0 |
| 0x031218 | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Kurzschluss nach Plus | 0 |
| 0x031219 | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Kurzschluss nach Masse | 0 |
| 0x03121C | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Offene Leitung | 0 |
| 0x03121E | EM 1 Verbrennernah - Temperatursensor 1 - Kurzschluss nach Plus | 0 |
| 0x03121F | EM 1 Verbrennernah - Temperatursensor 1 - Kurzschluss nach Masse | 0 |
| 0x031220 | EM 1 Verbrennernah - Temperatursensor 1 - Oberer Schwellenwert überschritten | 0 |
| 0x031221 | EM 1 Verbrennernah - Temperatursensor 1 - Unterer Schwellenwert unterschritten | 0 |
| 0x031223 | EM 1 Verbrennernah - Temperatursensor 1 - Signal eingefroren (Stuck) | 0 |
| 0x031224 | EM 1 Verbrennernah - Temperatursensor 1 - Signal unplausibel nach Kaltstart | 0 |
| 0x031225 | EM 1 Verbrennernah - Temperatursensor 1 - Gradient unplausibel | 0 |
| 0x031226 | EM 1 Verbrennernah - Temperatursensor - Übertemperatur | 0 |
| 0x031229 | EM 1 Verbrennernah - Wirkungsgrad - unplausibel (motorisch oder generatorisch) | 0 |
| 0x031400 | Inverter 1 Verbrennernah - Spannung Gatetreiber - Oberer Schwellenwert überschritten | 0 |
| 0x031401 | Inverter 1 Verbrennernah - Spannung Gatetreiber - Unterer Schwellenwert unterschritten | 0 |
| 0x031404 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Oberer Schwellenwert überschritten | 0 |
| 0x031405 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 |
| 0x031407 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - HW Überspannung | 0 |
| 0x031408 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Signal unplausibel nach Redundanzüberwachung | 0 |
| 0x03140B | Inverter 1 Verbrennernah - Spannungssensor 2 - Zwischenkreis - Oberer Schwellenwert überschritten | 0 |
| 0x03140C | Inverter 1 Verbrennernah - Spannungssensor 2 - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 |
| 0x03140D | Inverter 1 Verbrennernah - Spannungssensor 2 - Zwischenkreis - Signal unplausibel nach Redundanzüberwachung | 0 |
| 0x03140E | Inverter 1 Verbrennernah - Stromsensoren - HW-Phasenüberstrom | 0 |
| 0x03140F | Inverter 1 Verbrennernah - Stromsensoren - Summenstrom der 3 Phasen unplausibel | 0 |
| 0x031410 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Kurzschluss nach Plus | 0 |
| 0x031411 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Kurzschluss nach Masse | 0 |
| 0x031412 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Oberer Schwellenwert überschritten | 0 |
| 0x031413 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Unterer Schwellenwert unterschritten | 0 |
| 0x031414 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offene Leitung | 0 |
| 0x031416 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offset unplausibel | 0 |
| 0x031417 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Amplitude unplausibel | 0 |
| 0x031418 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Kurzschluss nach Plus | 0 |
| 0x031419 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Kurzschluss nach Masse | 0 |
| 0x03141A | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Oberer Schwellenwert überschritten | 0 |
| 0x03141B | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Unterer Schwellenwert unterschritten | 0 |
| 0x03141C | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offene Leitung | 0 |
| 0x03141E | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offset unplausibel | 0 |
| 0x03141F | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Amplitude unplausibel | 0 |
| 0x031420 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Kurzschluss nach Plus | 0 |
| 0x031421 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Kurzschluss nach Masse | 0 |
| 0x031422 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Oberer Schwellenwert überschritten | 0 |
| 0x031423 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Unterer Schwellenwert unterschritten | 0 |
| 0x031424 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offene Leitung | 0 |
| 0x031426 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offset unplausibel | 0 |
| 0x031427 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Amplitude unplausibel | 0 |
| 0x03143A | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Oberer Schwellenwert überschritten | 0 |
| 0x03143B | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Unterer Schwellenwert unterschritten | 0 |
| 0x03143D | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Signal unplausibel nach Redundanzüberwachung | 0 |
| 0x031440 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Oberer Schwellenwert überschritten | 0 |
| 0x031441 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Unterer Schwellenwert unterschritten | 0 |
| 0x031443 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Signal unplausibel nach Redundanzüberwachung | 0 |
| 0x03144C | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Oberer Schwellenwert überschritten | 0 |
| 0x03144D | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Unterer Schwellenwert unterschritten | 0 |
| 0x03144F | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Signal unplausibel nach Redundanzüberwachung | 0 |
| 0x031450 | Inverter 1 Verbrennernah - Stromsensoren - SW-Phasenüberstrom | 0 |
| 0x031451 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offsetabgleich außerhalb Toleranz | 0 |
| 0x031452 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offsetabgleich außerhalb Toleranz | 0 |
| 0x031453 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offsetabgleich außerhalb Toleranz | 0 |
| 0x031682 | Notlaufmanager - Ersatzwertberechnung - DSC - Fahrzeuggeschwindigkeit | 0 |
| 0x031683 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl hinten links | 0 |
| 0x031684 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl hinten rechts | 0 |
| 0x031685 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl vorn links | 0 |
| 0x031686 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl vorn rechts | 0 |
| 0x031687 | Notlaufmanager - Ersatzwertberechnung - EGS - Gesamtübersetzung | 0 |
| 0x031688 | Notlaufmanager - Ersatzwertberechnung - EM 1 - Verlustleistung | 0 |
| 0x03168C | Notlaufmanager - Externe Signaldiagnose - EGS - Abtriebsdrehzahl | 0 |
| 0x03168D | Notlaufmanager - Externe Signaldiagnose - Gesamtübersetzung | 0 |
| 0x03168E | Notlaufmanager - Externe Signaldiagnose - Übersetzung Hinterachse | 0 |
| 0x03168F | Notlaufmanager - Externe Signaldiagnose - DME - Drehzahl Kurbelwelle | 0 |
| 0x031690 | Notlaufmanager - Externe Signaldiagnose - DME - Fahrbereitschaft | 0 |
| 0x031693 | Notlaufmanager - Externe Signaldiagnose - DME - Ist-Zustand Antrieb | 0 |
| 0x031694 | Notlaufmanager - Externe Signaldiagnose - DME - Maximales Moment VM | 0 |
| 0x031695 | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Betriebsart EM 1 | 0 |
| 0x031699 | Notlaufmanager - Externe Signaldiagnose - DME - Sollmoment EM 1 | 0 |
| 0x03169B | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Zustand Antrieb | 0 |
| 0x03169C | Notlaufmanager - Externe Signaldiagnose - DME - Startleistung VM | 0 |
| 0x03169D | Notlaufmanager - Externe Signaldiagnose - DME - Wunsch-Zustand Antrieb | 0 |
| 0x03169E | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Ladezustand | 0 |
| 0x0316A0 | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Strom | 0 |
| 0x0316A1 | Notlaufmanager - Externe Signaldiagnose - SME - Maximaler Ladestrom | 0 |
| 0x0316A2 | Notlaufmanager - Externe Signaldiagnose - SME - Maximaler oder minimaler Ladezustand | 0 |
| 0x0316A3 | Notlaufmanager - Externe Signaldiagnose - SME - Minimaler Entladestrom | 0 |
| 0x0316A5 | Notlaufmanager - Folgefehler - EGS - ENPG1FIX | 1 |
| 0x0316A6 | Notlaufmanager - Folgefehler - EGS - ENPG1FIX und Drehzahlunterschreitung | 1 |
| 0x0316A7 | Notlaufmanager - Folgefehler - EGS - mechanischer Notlauf | 1 |
| 0x0316A8 | Notlaufmanager - Folgefehler - ELUP - Ausgefallen | 1 |
| 0x0316AC | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Hardwarefehler | 1 |
| 0x0316AD | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Überspannung | 1 |
| 0x0316AE | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Übertemperatur | 1 |
| 0x0316AF | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - zu hohen Stroms | 1 |
| 0x0316B3 | Notlaufmanager - Folgefehler - DME - HV Verbraucher reduzieren | 0 |
| 0x0316B5 | Notlaufmanager - Folgefehler - DME - Momentenreduzierung EM 1 | 1 |
| 0x0316B7 | Notlaufmanager - Folgefehler - DME - NV Verbraucher reduzieren | 0 |
| 0x0316B8 | Notlaufmanager - Folgefehler - DME - SOC Hold Betrieb | 0 |
| 0x0316B9 | Notlaufmanager - Folgefehler - DME - Steuergerätausfall | 1 |
| 0x0316BA | Notlaufmanager - Folgefehler - EM 1 - Aktiver Kurzschluss | 1 |
| 0x0316BB | Notlaufmanager - Folgefehler - EM 1 - Aktiver Kurzschluss und Übertemperatur | 1 |
| 0x0316BE | Notlaufmanager - Folgefehler - EM 1 - Fehler Rotorlagesensor | 1 |
| 0x0316BF | Notlaufmanager - Folgefehler - EM 1 - Freilauf aktiv | 1 |
| 0x0316C0 | Notlaufmanager - Folgefehler - EM 1 - Hardware Fehler | 1 |
| 0x0316C1 | Notlaufmanager - Folgefehler - EM 1 - Null-Momentenanforderung | 1 |
| 0x0316C2 | Notlaufmanager - Folgefehler - EM 1 - Temperaturfehler China | 1 |
| 0x0316C3 | Notlaufmanager - Folgefehler - EM 1 - Temperaturfehler Inverter 1 | 1 |
| 0x0316C4 | Notlaufmanager - Folgefehler - EM 1 - Überschreitung max. Drehzahl | 0 |
| 0x0316C5 | Notlaufmanager - Folgefehler - EM 1 - Übertemperatur | 1 |
| 0x0316D0 | Notlaufmanager - Folgefehler - SME - Erkennung Service Disconnect AE | 1 |
| 0x0316D1 | Notlaufmanager - Folgefehler - SME - Kategorie 1 Fehler | 1 |
| 0x0316D3 | Notlaufmanager - Folgefehler - SME - Kategorie 3 Fehler | 1 |
| 0x0316D4 | Notlaufmanager - Folgefehler - SME - Kategorie 4 Fehler | 1 |
| 0x0316D5 | Notlaufmanager - Folgefehler - SME - Kategorie 5 Fehler | 1 |
| 0x0316D6 | Notlaufmanager - Folgefehler - SME - Kategorie 6 Fehler | 1 |
| 0x0316D7 | Notlaufmanager - Folgefehler - SME - Kategorie 7 Fehler | 1 |
| 0x0316D8 | Notlaufmanager - Folgefehler - SME - niedriger Ladezustand oder geringe Reichweite | 1 |
| 0x0316D9 | Notlaufmanager - Folgefehler - SME - Steuergerätausfall | 1 |
| 0x0316DA | Notlaufmanager - Folgefehler - SME - Thermisches Ereignis | 0 |
| 0x0316DB | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Betriebsart | 0 |
| 0x0316DC | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Drehzahl | 0 |
| 0x0316DD | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Moment | 0 |
| 0x0316E0 | Notlaufmanager - Interne Signaldiagnose - EM 1- Maximales generatorisches Moment | 0 |
| 0x0316E1 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximales motorisches Moment | 0 |
| 0x0316E2 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximale Verlustleistung generatorisch | 0 |
| 0x0316E3 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximale Verlustleistung motorisch | 0 |
| 0x0316EB | Notlaufmanager - Folgefehler - EM 1 - Stecker überhitzt | 0 |
| 0x0316EC | Notlaufmanager - Folgefehler - DME - Drehzahl reduzieren EM 1 | 0 |
| 0x0316ED | Notlaufmanager - Folgefehler - ELUP - Ausgefallen und Tank leer | 0 |
| 0x0317C2 | FuSi - HV - Crash Softwaresignal | 0 |
| 0x0317C3 | FuSi - HV - Fehler aktive Entladung | 0 |
| 0x0317C4 | FuSi - HV - Hochvoltkreis offen | 0 |
| 0x0317C5 | FuSi - HV - Crash Klemme 30C | 0 |
| 0x0317C6 | FuSi - HV - Maximale Spannung in Hochvoltsystem überschritten | 0 |
| 0x0317C9 | FuSi - LD - Abschaltung - AKS angefordert | 0 |
| 0x0317CA | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von DME (Drehmoment Kurbelwelle 1) | 1 |
| 0x0317CB | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von DME (Kurbelwelle Drehmoment Daten Hybrid) | 1 |
| 0x0317CC | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von EGS (Drehmoment Getriebe Hybrid) | 1 |
| 0x0317CD | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert wegen fehlerhafte DME kommunikation | 1 |
| 0x0317CE | FuSi - LD - Abschaltung - Freilauf angefordert | 0 |
| 0x0317CF | FuSi - LD - Abschaltung FWP - Sicherer Zustand angefordert von DME (Kurbelwelle Drehmoment Daten Hybrid) | 1 |
| 0x0317D0 | FuSi - LD - Abschaltung FWP - Sicherer Zustand angefordert von EGS (Drehmoment Getriebe Hybrid) | 1 |
| 0x0317D1 | FuSi - LD - BWP - Sicherer Zustand angefordert wegen Sammelfehler Momentengrenzen | 0 |
| 0x0317D2 | FuSi - LD - FWP - Sicherer Zustand angefordert wegen Sammelfehler Momentengrenzen | 0 |
| 0x0317D5 | FuSi - LD - Radblockiererkennung - Sicherer Zustand angefordert | 0 |
| 0x0317D6 | FuSi - HV - HVIL - Eingang kurzgeschlossen zu Masse oder Ausgang kurzgeschlossen zu Batterie | 0 |
| 0x0317D7 | FuSi - HV - HVIL - Eingang kurzgeschlossen zu Batterie oder Ausgang kurzgeschlossen zu Masse | 0 |
| 0x0317D9 | FuSi - HV - Ausfall Überlastschutz (Lader) | 0 |
| 0x0317DB | FuSi - HV - Inverter 1 - Überlast Kabelbaum - AC-Seite | 0 |
| 0x0317DE | FuSi - HV - Kurzschluss intern | 0 |
| 0x222245 | DC/DC-Wandler - Bauteilschutz - Überstrom HV-Seite | 0 |
| 0x222246 | DC/DC-Wandler - Bauteilschutz - 12V Bordnetz | 0 |
| 0x222248 | DC/DC-Wandler - Betriebsmodus Buck - unplausibel | 0 |
| 0x22224E | DC/DC-Wandler - Kein Betrieb | 0 |
| 0x222264 | DC/DC-Wandler - Bauteilschutz - Übertemperatur | 0 |
| 0x222265 | DC/DC-Wandler - HW Interrupt | 0 |
| 0x222361 | Umrichter Traktions-Elektromaschine: Hardware Shutdown der Leistungsstufen | 0 |
| 0x222362 | Umrichter, Kontrollleiterplatte: Elektronikbaustein CPLD Takt Fehler | 0 |
| 0x222363 | Umrichter: Falsche CPLD Version erkannt | 0 |
| 0x222364 | Umrichter Traktions-Elektromaschine: Sicherheitsfunktion / Schaltung aktiver Kurzschluss für elektrische Maschine nicht möglich | 0 |
| 0x222365 | Umrichter Traktions-Elektromaschine: Sicherheitsfunktion / Schaltung Freilauf für elektrische Maschine nicht möglich (1) | 0 |
| 0x222366 | Umrichter Traktions-Elektromaschine: Sicherheitsfunktion / Schaltung Freilauf für elektrische Maschine nicht möglich (2) | 0 |
| 0x222367 | Umrichter: Überspannung 12V erkannt | 0 |
| 0x222368 | Umrichter: Unterspannung 12V erkannt | 0 |
| 0x22237C | Umrichter, Hauptrelais: Unerwartetes Öffnen | 0 |
| 0x22237D | Umrichter, Hauptrelais: Unplausibles Öffnen erkannt | 0 |
| 0x22237E | Umrichter, HV Microprozessor, externe Referenzspannung: Oberer Schwellenwert überschritten | 0 |
| 0x22237F | Umrichter, HV Microprozessor, externe Referenzspannung: Unterer Schwellenwert unterschritten | 0 |
| 0x222383 | Umrichter Traktions-Elektromaschine: HV Microprozessor arbeitet nicht korrekt | 0 |
| 0x2223A5 | Umrichter, Highside Treiber: Controller des Gate Treibers außer Betrieb | 0 |
| 0x2223A6 | Umrichter, Lowside Treiber: Controller des Gate Treiber außer Betrieb | 0 |
| 0x2223A7 | Umrichter, Highside Treiber: Spannungsversorgung außerhalb Bereich oder Kommunikationsfehler | 0 |
| 0x2223A8 | Umrichter, Lowside Treiber: Spannungsversorgung außerhalb Bereich oder Kommunikationsfehler | 0 |
| 0x2223A9 | Umrichter, Gatetreiber: Kurzschluss auf Highside oder Unterbrechung auf Lowside | 0 |
| 0x2223AA | Umrichter, Gatetreiber: Kurzschluss auf Lowside oder Unterbrechung auf Highside | 0 |
| 0x2223B1 | Umrichter: Komponentenschutz, Übertemperatur | 0 |
| 0x2223B2 | Umrichter: Komponentenschutz, Stromlimits überschritten | 0 |
| 0x222610 | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Überspannung | 0 |
| 0x222611 | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Unterspannung | 0 |
| 0x22278A | Funktionssicherheit, Level 3, Watchdog Fehler: Fehlerzähler des externen Überwachungsmoduls entspricht nicht dem Gegenstück im Controller | 0 |
| 0x222800 | HVPM - Laden - Dauerbetätigung Entriegelungstaster bei Typ1-Stecker | 1 |
| 0x222805 | HVPM - Laden - Abstellen der Ladehardware z.B. Aufgrund von Netzstörungen | 1 |
| 0x222806 | HVPM - Laden - Signalausfall laderelevanter Signale seitens SME | 1 |
| 0x22280F | HVPM - Start - HV Batterie - Isolationsfehler | 1 |
| 0x222810 | HVPM - Laden - Charge-Enable-Leitung - elektrischer Fehler | 1 |
| 0x222812 | HVPM - Start - Crash: Zündpille aktiviert | 1 |
| 0x222813 | HVPM - Start - HV Erstfreigabe erfolgt | 1 |
| 0x222814 | HVPM - Start - HV Batterie, Isolationswarnung | 1 |
| 0x222815 | HVPM - Start - HV Zwischenkreis trotz Anforderung nicht spannungsfrei | 1 |
| 0x222816 | HVPM - Start - Interlock unterbrochen | 1 |
| 0x222817 | HVPM - Start - HV Batterie - einfacher Schuetzkleber | 1 |
| 0x222818 | HVPM - Start - HV-batterieloser Betrieb wird verhindert aufgrund Schützkleber | 1 |
| 0x222819 | HVPM - Laden - Unterversorgung 12V-Bordnetz | 1 |
| 0x22281A | HVPM - Start - Crash durch externen Crashsensor über CAN detektiert | 1 |
| 0x22281B | HVPM - Start - HV Batterie - doppelter Schuetzkleber | 1 |
| 0x22281C | HVPM - Start - Keine HV-Freigabe trotz Anforderung | 1 |
| 0x22281F | HVPM - Laden -  Klappe der Lade-Buchse offen | 1 |
| 0x222821 | HVPM - Laden - AC-Laden nicht möglich | 1 |
| 0x222826 | HVPM - Laden - Laden mit reduzierte Leistung | 1 |
| 0x222831 | HVPM - Start - Hochvoltsystem abgeschaltet | 1 |
| 0x222832 | HVPM - Laden - Ladekabel pruefen | 1 |
| 0x222833 | HVPM - Laden - Netzleistung zu gering | 1 |
| 0x222834 | HVPM - Laden - Laden nicht moeglich | 1 |
| 0x22283A | HVPM - Laden - Ladeziel nicht erreichbar bei gestelltem Wochentimer | 1 |
| 0x22283B | HVPM - Start - HV Power Down aufgrund niedrigem Ladezustand Hochvoltbatterie | 1 |
| 0x22283F | HVPM - Laden - AC Spannung fehlt nach Ladebeginn | 1 |
| 0x222841 | HVPM - Laden - Ladegerät in Failsafe | 1 |
| 0x222842 | HVPM - Laden - Ladefehler | 1 |
| 0x222843 | HVPM - Laden - Ladeziel nicht erreichbar Leistung des Ladegeräts zu gering | 1 |
| 0x222846 | HVPM - Laden - Ladestoerung | 1 |
| 0x222847 | HVPM - Laden - Pilotsignal ungueltig | 1 |
| 0x222848 | HVPM - Laden - Pilotsignal ungueltig ausserhalb Ladebereitschaft | 1 |
| 0x222849 | HVPM - Laden - Vorkonditionierung nicht moglich | 1 |
| 0x222870 | HVPM - Start - Wichtige Signale der Leistungselektronik ungültig oder nicht empfangen | 1 |
| 0x222871 | HVPM - Start - Wichtige Signale der HV-Batterie ungültig oder nicht empfangen | 1 |
| 0x222876 | HVPM - Laden - Kommunikation mit LIM oder Ladestation fehlerhaft | 1 |
| 0x22287E | HVPM - Laden - Netzspannung vorhanden obwohl keine Ladebereitschaft | 1 |
| 0x2228C1 | HVPM - Laden - Ladegerät Fehler Vorladung | 1 |
| 0x2228C6 | Werksmodus eFahren zur Überführung aktiv | 0 |
| 0x2228C7 | Werksmodus Fahrdynamische Prüfung aktiv | 0 |
| 0x2228C8 | Batteriesensor (IBS 2) - Zustart Batterie - Zusatzbatterie gealtert | 1 |
| 0x2228C9 | Batteriesensor (IBS 2) - Zustart Batterie - Zusatzbatterie defekt | 1 |
| 0x2228CB | Batteriesensor  (IBS 2) - Zustart Batterie - Strommessung unplausibel | 0 |
| 0x2228CC | Batteriesensor  (IBS 2) - Zustart Batterie - Falsche Sensorvariante verbaut | 0 |
| 0x2228CD | Batteriesensor  (IBS 2) - Zustart Batterie - Batteriestrom - oberer Schwellenwert überschritten | 0 |
| 0x2228CE | Batteriesensor  (IBS 2) - Zustart Batterie - Batteriestrom - unterer Schwellenwert unterschritten | 0 |
| 0x2228CF | Batteriesensor  (IBS 2) - Zustart Batterie - Batterietemperatur - oberer Schwellenwert überschritten | 0 |
| 0x2228D0 | Batteriesensor  (IBS 2) - Zustart Batterie - Batterietemperatur - unterer Schwellenwert unterschritten | 0 |
| 0x2228D1 | Batteriesensor  (IBS 2) - Zustart Batterie - Batteriespannung - oberer Schwellenwert überschritten | 0 |
| 0x2228D2 | Batteriesensor  (IBS 2) - Zustart Batterie - Batteriespannung - unterer Schwellenwert unterschritten | 0 |
| 0x2228D3 | Batteriesensor  (IBS 2) - Zustart Batterie - interner Systemfehler | 0 |
| 0x2228D4 | Batteriesensor  (IBS 2) - Zustart Batterie - Temperaturmessung außerhalb Bereich | 0 |
| 0x2228D5 | Batteriesensor  (IBS 2) - Zustart Batterie - Spannungsmessung unplausibel | 0 |
| 0x2228FE | HVPM - Laden - Heizen/Kühlen im Stand nicht möglich | 1 |
| 0x222B7B | DC/DC-Wandler - Versorgung Treiber 30V - Kurzschluss nach Plus | 0 |
| 0x222B7C | DC/DC-Wandler - Versorgung Treiber 30V - Kurzschluss nach Masse | 0 |
| 0x222BAB | interner Fehler, Messwerterfassung: Rotorlage nicht plausibel | 0 |
| 0x222BAC | interner Fehler, Überwachung: Überführung in den sicheren Zustand fehlerhaft | 0 |
| 0x222BAD | interner Fehler, Messwerterfassung: Phasenströme nicht plausibel | 0 |
| 0x222BAE | interner Fehler, Messwerterfassung: Betriebsart nicht plausibel | 0 |
| 0x222BB0 | interner Fehler, Messwerterfassung: Zwischenkreisspannung nicht plausibel | 0 |
| 0x222BB1 | interner Fehler, Messwerterfassung: Anforderung sicherer Zustand | 0 |
| 0x222BB3 | interner Fehler, Messwerterfassung: Gesendete FUSI Signale fehlerhaft versendet (Momemt und Drehzahl) | 0 |
| 0x222BB6 | EM 1 Verbrennernah - Rotorlagesensor - Auswerteverfahren instabil | 0 |
| 0x222C02 | EWS - Manipulationsschutz - erwartete Antwort unplausibel | 0 |
| 0x222C03 | EWS - Leitungselektronik durch EWS gesperrt | 0 |
| 0x222C08 | Montagemodus aktiv | 0 |
| 0x222D6B | Leistungselektronik, interner Fehler, Ebene 2: Alivecounter im Snapshot unplausibel | 0 |
| 0x222D6D | Leistungselektronik, interner Fehler, Ebene 2: Istmoment unplausibel | 0 |
| 0x222D6E | Leistungselektronik, interner Fehler, Ebene 2: Autorisiertes Momentenband verletzt | 0 |
| 0x222D6F | Leistungselektronik, interner Fehler, Ebene 2: Rotorwinkeloffset ausserhalb der Toleranz | 0 |
| 0x222D71 | Leistungselektronik, interner Fehler, Ebene 2: Rotorstromkomponenten unplausibel | 0 |
| 0x222D72 | Leistungselektronik, interner Fehler, Ebene 2: Phasenstromsumme unplausibel | 0 |
| 0x222D76 | Leistungselektronik, interner Fehler, Ebene 2: Drehzahl unplausibel | 0 |
| 0x222F06 | DOBD - SME - Plausibilität Kühlmittelsensor - Kühlmittelsensor liefert unplausible Werte zurück | 0 |
| 0x222F0F | Steuergerät intern - Interner Controllerfehler | 0 |
| 0x222F5B | Batteriesensor  (IBS 2) - Zustart Batterie - fehlerhafte erweiterte LIN Kommunikation | 0 |
| 0x222F7B | HVPM - Laden - Werksladen aktiv | 1 |
| 0x222FCF | DC/DC-Wandler - Kommunikation - Botschafts-Timeout-Sammelfehler | 0 |
| 0x222FD2 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Kurzschluss nach Masse | 0 |
| 0x222FD3 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Kurzschluss nach Masse | 0 |
| 0x222FD4 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Kurzschluss nach Plus | 0 |
| 0x222FD5 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Oberer Schwellenwert überschritten | 0 |
| 0x222FD6 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Plausibilitätsfehler - DC/DC aktiv | 0 |
| 0x222FD7 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Plausibilitätsfehler - DC/DC nicht aktiv | 0 |
| 0x222FD8 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Unterer Schwellenwert unterschritten | 0 |
| 0x222FD9 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Untere Schwelle | 0 |
| 0x222FDA | DC/DC-Wandler - Ungewollte Energieübertragung DC/DC aus | 0 |
| 0x223027 | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Unterer Schwellenwert überschritten | 0 |
| 0x223028 | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Signal unplausibel | 0 |
| 0x223029 | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Oberer Schwellenwert überschritten | 0 |
| 0x22302A | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Kurzschluss nach Plus | 0 |
| 0x22302B | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Kurzschluss nach Masse | 0 |
| 0x22302C | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Unterer Schwellenwert überschritten | 0 |
| 0x22302D | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Signal unplausibel | 0 |
| 0x22302E | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Oberer Schwellenwert überschritten | 0 |
| 0x22302F | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Kurzschluss nach Plus | 0 |
| 0x223030 | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Kurzschluss nach Masse | 0 |
| 0x223031 | Inverter 1 Verbrennernah - Stromsensoren - Versorgungspannung fehlerhaft | 0 |
| 0x223032 | Inverter 1 Verbrennernah - Stromsensoren - EEPROM Daten unplausibel | 0 |
| 0x223033 | Inverter 1 Verbrennernah - Softwareversion - ungültig | 0 |
| 0x223034 | Inverter 1 Verbrennernah - Seriennummer - ungültig | 0 |
| 0x223035 | Inverter 1 Verbrennernah - Gatetreiber - Status unplausibel | 0 |
| 0x223036 | Inverter 1 Verbrennernah - Gatetreiber - SPI Kommunikation fehlerhaft | 0 |
| 0x223037 | Inverter 1 Verbrennernah - Gatetreiber - Parity Fehler | 0 |
| 0x223038 | Inverter 1 Verbrennernah - Gatetreiber - Datenübertragung zu langsam | 0 |
| 0x223039 | Inverter 1 Verbrennernah - Gatetreiber - Botschaftsfehler | 0 |
| 0x22303A | Inverter 1 Verbrennernah - Gatetreiber - Aktivierungsleitung Kurzschluss zwischen High und Low | 0 |
| 0x22303B | Inverter 1 Verbrennernah - CPLD - Status unplausibel | 0 |
| 0x22303C | Inverter 1 Verbrennernah - CPLD - SPI Kommunikation fehlerhaft | 0 |
| 0x22303E | EM 1 Verbrennernah - Temperatursensor 1 - Unplausible Bereichsumschaltung | 0 |
| 0x223040 | Inverter 1 Verbrennernah - ZK-Entladung - Stufe 1 | 0 |
| 0x223041 | Inverter 1 Verbrennernah - ZK-Entladung - Stufe 2 | 0 |
| 0x223042 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Oberer Schwellenwert überschritten | 0 |
| 0x223043 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Unterer Schwellenwert überschritten | 0 |
| 0x223061 | Inverter 1 Verbrennernah - ZK-Entladung - Abschaltung 30V Step-up Converter nicht möglich | 0 |
| 0x223062 | Inverter 1 Verbrennernah - ZK-Entladung - HV-Spannung nach aktiver Entladung | 0 |
| 0x223064 | ELUP - Hauptschalter schaltet nicht | 0 |
| 0x223065 | ELUP - Hauptschalter durchkontaktiert | 0 |
| 0x223066 | ELUP - Anlaufstrombegrenzung - Schalter schaltet nicht durch | 0 |
| 0x223067 | ELUP - Anlaufstrombegrenzung - Strom durch Schalter zu hoch | 0 |
| 0x22306A | Batteriesensor IBS 2 - Zustart - Fehler Statusänderung | 0 |
| 0x223071 | FuSi - EEPROM Fehler - Phasenstrom | 0 |
| 0x223072 | FuSi - Plausifehler - Phasenstrom Offset | 0 |
| 0x223073 | FuSi - Plausifehler - Amplitude Strom | 0 |
| 0x223075 | DOBD - OBC - Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Masse | 0 |
| 0x223076 | DOBD - OBC - Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Plus | 0 |
| 0x223077 | DOBD - OBC - Ladeanschluss: Verriegelung des Ladesteckers, Leitungsunterbrechung | 0 |
| 0x223078 | DOBD - OBC - Ladeanschlussklappe: Verriegelung, Kurzschluss nach Masse | 0 |
| 0x223079 | DOBD - OBC - Ladeanschlussklappe: Verriegelung, Kurzschluss nach Plus | 0 |
| 0x22307A | DOBD - OBC - Ladeanschlussklappe: Verriegelung, Leitungsunterbrechung | 0 |
| 0x22307B | DOBD - OBC - Ladeelektonik, HV AC Spannungssensor: Out of range High | 0 |
| 0x22307C | DOBD - OBC - Ladeelektonik, HV AC Spannungssensor: Out of range Low | 0 |
| 0x22307D | DOBD - OBC - Ladeelektonik, HV AC Stromsensor: Out of range High | 0 |
| 0x22307E | DOBD - OBC - Ladeelektonik, HV AC Stromsensor: Out of range Low | 0 |
| 0x22307F | DOBD - OBC - Ladeelektonik, HV AC Stromsensor-2: Out of range High | 0 |
| 0x223080 | DOBD - OBC - Ladeelektonik, HV AC Stromsensor-2: Out of range Low | 0 |
| 0x223081 | DOBD - OBC - Ladeelektonik, HV DC Spannungssensor: Out of range High | 0 |
| 0x223082 | DOBD - OBC - Ladeelektonik, HV DC Spannungssensor: Out of range Low | 0 |
| 0x223083 | DOBD - OBC - Ladeelektonik, HV DC Spannungssensor-2: Out of range High | 0 |
| 0x223084 | DOBD - OBC - Ladeelektonik, HV DC Spannungssensor-2: Out of range Low | 0 |
| 0x223085 | DOBD - OBC - Ladeelektonik, HV DC Stromsensor: Out of range High | 0 |
| 0x223086 | DOBD - OBC - Ladeelektonik, HV DC Stromsensor: Out of range Low | 0 |
| 0x223087 | DOBD - OBC - Ladeelektonik, HV DC Stromsensor-2: Out of range High | 0 |
| 0x223088 | DOBD - OBC - Ladeelektonik, HV DC Stromsensor-2: Out of range Low | 0 |
| 0x223089 | DOBD - OBC - Ladeelektonik, HV PFC Spannungssensor: Out of range High | 0 |
| 0x22308A | DOBD - OBC - Ladeelektonik, HV PFC Spannungssensor: Out of range Low | 0 |
| 0x22308B | DOBD - OBC - Ladeelektonik, HV PFC Spannungssensor-2: Out of range High | 0 |
| 0x22308C | DOBD - OBC - Ladeelektonik, HV PFC Spannungssensor-2: Out of range Low | 0 |
| 0x22308D | DOBD - OBC - Ladeelektonik, Temperatursensor Back: Out of range High | 0 |
| 0x22308E | DOBD - OBC - Ladeelektonik, Temperatursensor Back: Out of range Low | 0 |
| 0x22308F | DOBD - OBC - Ladeelektonik, Temperatursensor Front: Out of range High | 0 |
| 0x223090 | DOBD - OBC - Ladeelektonik, Temperatursensor Front: Out of range Low | 0 |
| 0x223091 | DOBD - OBC - Ladeelektonik, Temperatursensor Trafo: Out of range High | 0 |
| 0x223092 | DOBD - OBC - Ladeelektonik, Temperatursensor Trafo: Out of range Low | 0 |
| 0x223093 | DOBD - OBC - Ladeelektronik, AC Eingang: Strom unplausibel (High) | 0 |
| 0x223094 | DOBD - OBC - Ladeelektronik, AC Eingang: Strom unplausibel (Low) | 0 |
| 0x223095 | DOBD - OBC - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Masse | 0 |
| 0x223096 | DOBD - OBC - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Plus | 0 |
| 0x223097 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Masse | 0 |
| 0x223098 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Plus | 0 |
| 0x223099 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Kurzschluss nach Masse | 0 |
| 0x22309A | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Kurzschluss nach Plus | 0 |
| 0x22309B | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Messwert unplausibel zu hoch | 0 |
| 0x22309C | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Messwert unplausibel zu niedrig | 0 |
| 0x22309D | DOBD - OBC - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu hoch | 0 |
| 0x22309E | DOBD - OBC - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu niedrig | 0 |
| 0x22309F | DOBD - OBC - Ladeelektronik, HV DC Spannung-2: Messwert unplausibel und zu hoch | 0 |
| 0x2230A0 | DOBD - OBC - Ladeelektronik, HV DC Spannung-2: Messwert unplausibel und zu niedrig | 0 |
| 0x2230A1 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Masse | 0 |
| 0x2230A2 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Plus | 0 |
| 0x2230A3 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor-2: Kurzschluss nach Masse | 0 |
| 0x2230A4 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor-2: Kurzschluss nach Plus | 0 |
| 0x2230A5 | DOBD - OBC - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Masse | 0 |
| 0x2230A6 | DOBD - OBC - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Plus | 0 |
| 0x2230A7 | DOBD - OBC - Ladeelektronik, HV DC Stromsensor-2: Kurzschluss nach Masse | 0 |
| 0x2230A8 | DOBD - OBC - Ladeelektronik, HV DC Stromsensor-2: Kurzschluss nach Plus | 0 |
| 0x2230A9 | DOBD - OBC - Ladeelektronik, HV PFC Spannung: Messwert unplausibel und zu hoch | 0 |
| 0x2230AA | DOBD - OBC - Ladeelektronik, HV PFC Spannung: Messwert unplausibel und zu niedrig | 0 |
| 0x2230AB | DOBD - OBC - Ladeelektronik, HV PFC Spannung-2: Messwert unplausibel und zu hoch | 0 |
| 0x2230AC | DOBD - OBC - Ladeelektronik, HV PFC Spannung-2: Messwert unplausibel und zu niedrig | 0 |
| 0x2230AD | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Kurzschluss nach Masse | 0 |
| 0x2230AE | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Kurzschluss nach Plus | 0 |
| 0x2230AF | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Messwert unplausibel | 0 |
| 0x2230B0 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Out of range High | 0 |
| 0x2230B1 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Out of range Low | 0 |
| 0x2230B2 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Kurzschluss nach Masse | 0 |
| 0x2230B3 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Kurzschluss nach Plus | 0 |
| 0x2230B4 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Messwert unplausibel | 0 |
| 0x2230B5 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Out of range High | 0 |
| 0x2230B6 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Out of range Low | 0 |
| 0x2230B7 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 5V primary DSP: Kurzschluss nach Masse | 0 |
| 0x2230B8 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 5V primary DSP: Kurzschluss nach Plus | 0 |
| 0x2230B9 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 5V primary DSP: Messwert unplausibel zu hoch | 0 |
| 0x2230BA | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 5V primary DSP: Messwert unplausibel zu niedrig | 0 |
| 0x2230BB | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 5V primary DSP: Out of range High | 0 |
| 0x2230BC | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 5V primary DSP: Out of range Low | 0 |
| 0x2230BD | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor: Kurzschluss nach Masse | 0 |
| 0x2230BE | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor: Kurzschluss nach Plus | 0 |
| 0x2230BF | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor-2: Kurzschluss nach Masse | 0 |
| 0x2230C0 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor-2: Kurzschluss nach Plus | 0 |
| 0x2230C1 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Kurzschluss nach Masse | 0 |
| 0x2230C2 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Kurzschluss nach Plus | 0 |
| 0x2230C3 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Messwert unplausibel | 0 |
| 0x2230C4 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Messwert unplausibel und zu hoch | 0 |
| 0x2230C5 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Messwert unplausibel und zu niedrig | 0 |
| 0x2230C6 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Kurzschluss nach Masse | 0 |
| 0x2230C7 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Kurzschluss nach Plus | 0 |
| 0x2230C8 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Messwert unplausibel | 0 |
| 0x2230C9 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Messwert unplausibel zu hoch | 0 |
| 0x2230CA | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Messwert unplausibel zu niedrig | 0 |
| 0x2230CB | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Out of range High | 0 |
| 0x2230CC | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Out of range Low | 0 |
| 0x2230CD | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Kurzschluss nach Masse | 0 |
| 0x2230CE | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Kurzschluss nach Plus | 0 |
| 0x2230CF | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Messwert unplausibel | 0 |
| 0x2230D0 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Messwert unplausibel und zu hoch | 0 |
| 0x2230D1 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Messwert unplausibel und zu niedrig | 0 |
| 0x2230D9 | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Kurzschluss nach Plus | 0 |
| 0x2230DA | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Messwert unplausibel | 0 |
| 0x2230DB | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Messwert unplausibel und zu hoch | 0 |
| 0x2230DC | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Messwert unplausibel und zu niedrig | 0 |
| 0x2230DD | DOBD - OBC - Ladeelektronik, TemperatursensorTrafo: Kurzschluss nach Masse | 0 |
| 0x2230DE | DOBD - OBC - Ladeelektronik: HV AC Spannung unplausibel | 0 |
| 0x2230DF | DOBD - OBC - Ladeelektronik: HV DC Stromsensor unplausibel und zu hoch | 0 |
| 0x2230E0 | DOBD - OBC - Ladeelektronik: HV DC Stromsensor unplausibel und zu niedrig | 0 |
| 0x2230E1 | DOBD - OBC - Ladeelektronik: HV DC Stromsensor-2 unplausibel und zu hoch | 0 |
| 0x2230E2 | DOBD - OBC - Ladeelektronik: HV DC Stromsensor-2 unplausibel und zu niedrig | 0 |
| 0x2230E3 | DOBD - OBC - Ladeelektronik: Wirkungsgrad außerhalb Bereich (High) | 0 |
| 0x2230E4 | DOBD - OBC - Ladeelektronik: Wirkungsgrad außerhalb Bereich (Low) | 0 |
| 0x2230E5 | DOBD - OBC - Message CHGNG_ST missing | 0 |
| 0x2230E6 | DOBD - OBC - Message DT_PT_2 (Daten Antriebsstrangr, 0x3F9) missing, receiver SLE, sender DME1 | 0 |
| 0x2230E8 | DOBD - OBC - Message SPEC_CF_CHGE missing | 0 |
| 0x2230E9 | DOBD - OBC - Message STAT_HVSTO_2 missing | 0 |
| 0x2230EA | DOBD - OBC - Message STAT_ZV_KLAPPEN (Status central locking sytem and flap, 0x2FC) missing, receiver SLE, sender BDC2015 | 0 |
| 0x2230EB | DOBD - OBC - Signal   TAR_OPMO_CF_CHGE (Target operating mode, 0x153) invalid receiver SLE, sender EME | 0 |
| 0x2230EC | DOBD - OBC - Signal   TAR_OPMO_CF_CHGE (Target operating mode, 0x153) undefined receiver SLE, sender EME | 0 |
| 0x2230ED | DOBD - OBC - Signal  AVL_U_HVSTO (Status HVSTO,  0x112) invalid receiver SLE, sender HVS | 0 |
| 0x2230EE | DOBD - OBC - Signal  AVL_U_HVSTO (Status HVSTO,  0x112) undefineid receiver SLE, sender HVS | 0 |
| 0x2230EF | DOBD - OBC - Signal  AVL_U_LINK (Actual voltage  HVSTO,  0x112) invalid receiver SLE, sender HVS | 0 |
| 0x2230F0 | DOBD - OBC - Signal  AVL_U_LINK (Actual voltage  HVSTO,  0x112) undefined receiver SLE, sender HVS | 0 |
| 0x223104 | DOBD - OBC - Signal  SPEC_I_MAX_ALTC_CF_CHGE (Current AC max, 0x153) invalid receiver SLE, sender EME | 0 |
| 0x223105 | DOBD - OBC - Signal  SPEC_I_MAX_DC_CF_CHGE (Current DC max, 0x153) invalid receiver SLE, sender EME | 0 |
| 0x223106 | DOBD - OBC - Signal  SPEC_U_MAX_CHG_CHGE (Voltage DC max, 0x153) invalid receiver SLE, sender EME | 0 |
| 0x223107 | DOBD - OBC - Signal  ST_CHGRDI (Status charge readiness,  0x3E9) invalid receiver SLE, sender EME | 0 |
| 0x223108 | DOBD - OBC - Signal  ST_CHGRDI (Status charge readiness,  0x3E9) undefined receiver SLE, sender EME | 0 |
| 0x223109 | DOBD - OBC - Signal  ST_CLSY (Status central locking station,  0x2FC) invalid receiver SLE, sender BDC2015 | 0 |
| 0x22310A | DOBD - OBC - Signal  ST_GRSEL_DRV (Status gear selection drive, 0x3F9) invalid receiver SLE, sender DME | 0 |
| 0x22310B | DOBD - OBC - Signal  ST_GRSEL_DRV (Status gear selection drive, 0x3F9) undefined receiver SLE, sender DME | 0 |
| 0x22310C | DOBD - OBC - Signal  TAR_PWR_CF_CHGNG (Target power, 0x153) invalid receiver SLE, sender EME | 0 |
| 0x22310D | DOBD - SME - Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 0 |
| 0x22310E | DOBD - SME - Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 0 |
| 0x22310F | DOBD - SME - Botschaft (Außentemperatur, 0x2CA) fehlt | 0 |
| 0x223110 | DOBD - SME - Botschaft (Freigabe Kühlung Hochvolt-Batterie, 0x37B) fehlt | 0 |
| 0x223111 | DOBD - SME - Botschaft (Klemmen, 0x12F) fehlt | 0 |
| 0x223113 | DOBD - SME - Botschaft (Trennschalter HVS, 0x10B) fehlt | 0 |
| 0x223114 | DOBD - SME - HV-Interlock: Kurzschluss in Schleife | 0 |
| 0x223115 | DOBD - SME - HV-Interlock: Kurzschluss nach Masse | 0 |
| 0x223116 | DOBD - SME - HV-Interlock: Kurzschluss nach Ubatt | 0 |
| 0x223117 | DOBD - SME - HV-Interlock: offene Leitung | 0 |
| 0x22311B | DOBD - SME - HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 |
| 0x22311C | DOBD - SME - HVS: CSC 1 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 |
| 0x22311D | DOBD - SME - HVS: CSC 1 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 |
| 0x22311E | DOBD - SME - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 |
| 0x22311F | DOBD - SME - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 |
| 0x223120 | DOBD - SME - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (High) | 0 |
| 0x223121 | DOBD - SME - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (Low) | 0 |
| 0x223122 | DOBD - SME - HVS: CSC 2 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 |
| 0x223123 | DOBD - SME - HVS: CSC 2 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 |
| 0x223124 | DOBD - SME - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 |
| 0x223125 | DOBD - SME - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 |
| 0x223126 | DOBD - SME - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (High) | 0 |
| 0x223127 | DOBD - SME - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (Low) | 0 |
| 0x223128 | DOBD - SME - HVS: CSC 3 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 |
| 0x223129 | DOBD - SME - HVS: CSC 3 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 |
| 0x22312A | DOBD - SME - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 |
| 0x22312B | DOBD - SME - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 |
| 0x22312C | DOBD - SME - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (High) | 0 |
| 0x22312D | DOBD - SME - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (Low) | 0 |
| 0x22312E | DOBD - SME - HVS: CSC 4 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 |
| 0x22312F | DOBD - SME - HVS: CSC 4 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 |
| 0x223130 | DOBD - SME - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 |
| 0x223131 | DOBD - SME - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 |
| 0x223132 | DOBD - SME - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (High) | 0 |
| 0x223133 | DOBD - SME - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (Low) | 0 |
| 0x223134 | DOBD - SME - HVS: CSC 5 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 |
| 0x223135 | DOBD - SME - HVS: CSC 5 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 |
| 0x223136 | DOBD - SME - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 |
| 0x223137 | DOBD - SME - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 |
| 0x223138 | DOBD - SME - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (High) | 0 |
| 0x223139 | DOBD - SME - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (Low) | 0 |
| 0x223140 | DOBD - SME - HVS: CSC CAN: CSC 1 fehlt | 0 |
| 0x223141 | DOBD - SME - HVS: CSC CAN: CSC 2 fehlt | 0 |
| 0x223142 | DOBD - SME - HVS: CSC CAN: CSC 3 fehlt | 0 |
| 0x223143 | DOBD - SME - HVS: CSC CAN: CSC 4 fehlt | 0 |
| 0x223144 | DOBD - SME - HVS: CSC CAN: CSC 5 fehlt | 0 |
| 0x223146 | DOBD - SME - HVS: CSC CAN: Steuerungsmodul BUS OFF | 0 |
| 0x223147 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 1 | 0 |
| 0x223148 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 2 | 0 |
| 0x223149 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 3 | 0 |
| 0x22314A | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 4 | 0 |
| 0x22314B | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 5 | 0 |
| 0x22314D | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 1 aufgetreten | 0 |
| 0x22314E | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 2 aufgetreten | 0 |
| 0x22314F | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 3 aufgetreten | 0 |
| 0x223150 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 4 aufgetreten | 0 |
| 0x223151 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 5 aufgetreten | 0 |
| 0x223153 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 1 | 0 |
| 0x223154 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 2 | 0 |
| 0x223155 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 3 | 0 |
| 0x223156 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 4 | 0 |
| 0x223157 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 5 | 0 |
| 0x223159 | DOBD - SME - HVS: CSC Treiberfehler | 0 |
| 0x22315B | DOBD - SME - HVS: Hauptschalter: neg. Schütz klebt | 0 |
| 0x22315C | DOBD - SME - HVS: Hauptschalter: neg. Schütz lässt sich nicht schließen | 0 |
| 0x22315D | DOBD - SME - HVS: Hauptschalter: pos. Schütz klebt | 0 |
| 0x22315E | DOBD - SME - HVS: Hauptschalter: pos. Schütz lässt sich nicht schließen | 0 |
| 0x22315F | DOBD - SME - HVS: HV-Interlock: kein Signal erzeugt | 0 |
| 0x223160 | DOBD - SME - HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, kein Ersatzwert vorhanden | 0 |
| 0x223161 | DOBD - SME - HVS: Plausibilität Zwischenkreisspannung -  Spannung fehlerhaft, kein Ersatzwert vorhanden | 0 |
| 0x223162 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 1 -  Spannung unplausibel | 0 |
| 0x223163 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 2 -  Spannung unplausibel | 0 |
| 0x223164 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 3 -  Spannung unplausibel | 0 |
| 0x223165 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 4 -  Spannung unplausibel | 0 |
| 0x223166 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 5 -  Spannung unplausibel | 0 |
| 0x223168 | DOBD - SME - HVS: SBOX -  CRC-Fehler erkannt auf SME | 0 |
| 0x223169 | DOBD - SME - HVS: SBOX -  Fehler Maincontroller | 0 |
| 0x22316A | DOBD - SME - HVS: SBOX -  Sensorfehler | 0 |
| 0x22316B | DOBD - SME - HVS: SBOX - BUS OFF | 0 |
| 0x22316C | DOBD - SME - HVS: Stromversorgung CSC- - Kurzschluss nach Masse | 0 |
| 0x22316D | DOBD - SME - HVS: Stromversorgung CSC- - Kurzschluss nach Ubatt | 0 |
| 0x22316E | DOBD - SME - HVS: Stromversorgung CSC- - offene Leitung | 0 |
| 0x22316F | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Masse | 0 |
| 0x223170 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Ubatt | 0 |
| 0x223171 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 |
| 0x223172 | DOBD - SME - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 0 |
| 0x223173 | DOBD - SME - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 0 |
| 0x223174 | DOBD - SME - HVS: Temp.-Sensor Kühlung: Kurzschluss nach Masse | 0 |
| 0x223175 | DOBD - SME - HVS: Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 |
| 0x223176 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 1 unplausibel | 0 |
| 0x223177 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 2 unplausibel | 0 |
| 0x223178 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 3 unplausibel | 0 |
| 0x223179 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 4 unplausibel | 0 |
| 0x22317A | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 5 unplausibel | 0 |
| 0x22317C | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 1 ausgefallen | 0 |
| 0x22317D | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 2 ausgefallen | 0 |
| 0x22317E | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 3 ausgefallen | 0 |
| 0x22317F | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 4 ausgefallen | 0 |
| 0x223180 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 5 ausgefallen | 0 |
| 0x223182 | DOBD - SME - HVS: Zelltemperaturen: CSC 1 Übertemperatur | 0 |
| 0x223183 | DOBD - SME - HVS: Zelltemperaturen: CSC 2 Übertemperatur | 0 |
| 0x223184 | DOBD - SME - HVS: Zelltemperaturen: CSC 3 Übertemperatur | 0 |
| 0x223185 | DOBD - SME - HVS: Zelltemperaturen: CSC 4 Übertemperatur | 0 |
| 0x223186 | DOBD - SME - HVS: Zelltemperaturen: CSC 5 Übertemperatur | 0 |
| 0x223188 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 1, Leistungsbegrenzung aktiv | 0 |
| 0x223189 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 2, Leistungsbegrenzung aktiv | 0 |
| 0x22318A | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 3, Leistungsbegrenzung aktiv | 0 |
| 0x22318B | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 4, Leistungsbegrenzung aktiv | 0 |
| 0x22318C | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 5, Leistungsbegrenzung aktiv | 0 |
| 0x22318E | DOBD - SME - HVS: Zelltemperaturen: Zu viele Sensoren unplausibel oder ausgefallen | 0 |
| 0x22318F | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 1 festgestellt | 0 |
| 0x223190 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 2 festgestellt | 0 |
| 0x223191 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 3 festgestellt | 0 |
| 0x223192 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 4 festgestellt | 0 |
| 0x223193 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 5 festgestellt | 0 |
| 0x223195 | DOBD - SME - Kühlventil: Kurzschluss nach Masse | 0 |
| 0x223196 | DOBD - SME - Kühlventil: Kurzschluss nach Ubatt | 0 |
| 0x223197 | DOBD - SME - Kühlventil: offene Leitung | 0 |
| 0x223198 | DOBD - SME - Kühlventil: Treiberfehler | 0 |
| 0x223199 | DOBD - SME - Kühlventil: Ventil lässt sich nicht öffnen | 0 |
| 0x22319A | DOBD - SME - Kühlventil: Ventil lässt sich nicht schließen | 0 |
| 0x22319B | DOBD - SME - Ladungszustand: kritische untere SoC-Grenze erreicht | 0 |
| 0x22319D | DOBD - SME - Plausibilität Stromwert -  Strom unplausibel. Kein Ersatzwert vorhanden | 0 |
| 0x22319E | DOBD - SME - SBOX: Messbereichsüberschreitung U_ZK (oben) | 0 |
| 0x22319F | DOBD - SME - SBOX: Messbereichsüberschreitung U_ZK (unten) | 0 |
| 0x2231A0 | DOBD - SME - Schnittstelle AE Vorgabe Trennschalter Hochvoltspeicher, 0x10B: Signal ungültig | 0 |
| 0x2231A1 | DOBD - SME - Service Disconnect: Auswertung unplausibel | 0 |
| 0x2231A2 | DOBD - SME - SME: Sicherheitskonzept -  Abschaltung durch Ebene2 | 0 |
| 0x2231A3 | DOBD - SME - SME: Werte der Echtzeituhr unplausibel | 0 |
| 0x2231A4 | DOBD - SME - Stromüberwachung: Leitungsschutzgrenze verletzt | 0 |
| 0x2231A5 | DOBD - SME - Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 0 |
| 0x2231A6 | DOBD - SME - Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 0 |
| 0x2231A7 | DOBD - SME - Stromüberwachung: Zellsicherheitsgrenze verletzt | 0 |
| 0x2231A8 | DOBD - SME - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 |
| 0x2231A9 | DOBD - SME - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 |
| 0x2231AA | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 |
| 0x2231AB | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 |
| 0x2231AC | DOBD - SME - Vorladung -  Kurzschluss im Zwischenkreis detektiert | 0 |
| 0x2231AD | DOBD - SME - Vorladung -  Zeit zu lang | 0 |
| 0x2231AE | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 1 | 0 |
| 0x2231AF | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 2 | 0 |
| 0x2231B0 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 3 | 0 |
| 0x2231B1 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 4 | 0 |
| 0x2231B2 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 5 | 0 |
| 0x2231B4 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 1 | 0 |
| 0x2231B5 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 2 | 0 |
| 0x2231B6 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 3 | 0 |
| 0x2231B7 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 4 | 0 |
| 0x2231B8 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 5 | 0 |
| 0x2231C3 | DOBD - IHKA - AC-LIN: eKMV antwortet nicht | 0 |
| 0x2231C4 | DOBD - IHKA - eKMV: Funktionsfehler oder defekt | 0 |
| 0x2231C5 | DOBD - IHKA - K-CAN Bus Kommunikationsfehler | 0 |
| 0x2231C6 | DOBD - IHKA: Temperatursensor Verdampfer - Kurzschluss nach Minus | 0 |
| 0x2231C7 | DOBD - IHKA: Temperatursensor Verdampfer - Kurzschluss nach Plus / Leitungsunterbrechung | 0 |
| 0x2231C8 | DOBD - IHKA: Temperatursensor Verdampfer - Leitungsunterbrechung | 0 |
| 0x2231C9 | DOBD - IHKA: Temperatursensor Verdampfer - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231CA | DOBD - IHKA: Temperatursensor Verdampfer - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231CB | DOBD - IHKA: Temperatursensor Verdampfer - Plausibilitätsfehler | 0 |
| 0x2231CC | DOBD - IHKA - BDC: Drucksensor Kältemittel - Plausibilitätsfehler | 0 |
| 0x2231CD | DOBD - IHKA - BDC: Drucksensor Kältemittel - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231CE | DOBD - IHKA - BDC: Drucksensor Kältemittel - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231CF | DOBD - IHKA - BDC: Drucksensor Kältemittel - Kurzschluss nach Minus | 0 |
| 0x2231D0 | DOBD - IHKA - BDC: Drucksensor Kältemittel - Kurzschluss nach Plus | 0 |
| 0x2231D1 | DOBD - IHKA - AC-LIN: EDH antwortet nicht | 0 |
| 0x2231D2 | DOBD - IHKA: RAM defekt | 0 |
| 0x2231D3 | DOBD - IHKA: ROM defekt | 0 |
| 0x2231D4 | DOBD - IHKA: EEPROM defekt | 0 |
| 0x2231D5 | DOBD - IHKA: Laufzeitfehler | 0 |
| 0x2231D6 | DOBD - IHKA: Software-Wachtdog Fehler | 0 |
| 0x2231D7 | DOBD - IHKA: Fehler in der Micro-Controller-Umgebung | 0 |
| 0x2231D8 | DOBD - IHKA - eKMV: Temperatursensor Platine 1 - Kurzschluss nach Minus | 0 |
| 0x2231D9 | DOBD - IHKA - eKMV: Temperatursensor Platine 1 - Kurzschluss nach Plus | 0 |
| 0x2231DA | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Kurzschluss nach Minus | 0 |
| 0x2231DB | DOBD - IHKA - eKMV: Temperatursensor Platine 1 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231DC | DOBD - IHKA - eKMV: Temperatursensor Platine 1 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231DD | DOBD - IHKA - eKMV: Temperatursensor Platine 1 - Plausibilitätsfehler | 0 |
| 0x2231DE | DOBD - IHKA - eKMV: Temperatursensor Platine 2 - Kurzschluss nach Minus | 0 |
| 0x2231DF | DOBD - IHKA - eKMV: Temperatursensor Platine 2 - Kurzschluss nach Plus | 0 |
| 0x2231E0 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Kurzschluss nach Plus | 0 |
| 0x2231E1 | DOBD - IHKA - eKMV: Temperatursensor Platine 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231E2 | DOBD - IHKA - eKMV: Temperatursensor Platine 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231E3 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231E4 | DOBD - IHKA - eKMV: HV-Spannungssensor - Kurzschluss nach Minus | 0 |
| 0x2231E5 | DOBD - IHKA - eKMV: HV-Spannungssensor - Kurzschluss nach Plus | 0 |
| 0x2231E6 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231E7 | DOBD - IHKA - eKMV: HV-Spannungssensor - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231E8 | DOBD - IHKA - eKMV: HV-Spannungssensor - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231E9 | DOBD - IHKA - eKMV: HV-Spannungssensor - Plausibilitätsfehler | 0 |
| 0x2231EA | DOBD - IHKA - eKMV: Spannungssensor am Motortreiber - Kurzschluss nach Minus | 0 |
| 0x2231EB | DOBD - IHKA - eKMV: Spannungssensor am Motortreiber - Kurzschluss nach Plus | 0 |
| 0x2231EC | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Plausibilitätsfehler | 0 |
| 0x2231ED | DOBD - IHKA - eKMV: Spannungssensor am Motortreiber - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231EE | DOBD - IHKA - eKMV: Spannungssensor am Motortreiber - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231EF | DOBD - IHKA - eKMV: HV-Stromsensor Phase 1 - Kurzschluss nach Minus | 0 |
| 0x2231F0 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 1 - Kurzschluss nach Plus | 0 |
| 0x2231F1 | DOBD - IHKA - eDH: Funktionsfehler oder defekt | 0 |
| 0x2231F2 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 1 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231F3 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 1 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231F4 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 1 - Plausibilitätsfehler | 0 |
| 0x2231F5 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 2 - Kurzschluss nach Minus | 0 |
| 0x2231F6 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 2 - Kurzschluss nach Plus | 0 |
| 0x2231F7 | DOBD - IHKA - eKMV Visteon Temperatursensor Platine 1 - Plausibilitätsfehler | 0 |
| 0x2231F8 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231F9 | DOBD - IHKA - eKMV: HV-Stromsensor Phase 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231FA | DOBD - IHKA - eKMV: HV-Stromsensor Phase 2 - Plausibilitätsfehler | 0 |
| 0x2231FB | DOBD - IHKA - eKMV: HV-Stromsensor Phase 3 - Kurzschluss nach Minus | 0 |
| 0x2231FC | DOBD - IHKA - eKMV: HV-Stromsensor Phase 3 - Kurzschluss nach Plus | 0 |
| 0x2231FD | DOBD - IHKA - eKMV: HV-Stromsensor Phase 3 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231FE | DOBD - IHKA - eKMV: HV-Stromsensor Phase 3 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2231FF | DOBD - IHKA - eKMV: HV-Stromsensor Phase 3 - Plausibilitätsfehler | 0 |
| 0x223200 | DOBD - IHKA - eKMV: RAM defekt | 0 |
| 0x223201 | DOBD - IHKA - eKMV: ROM defekt | 0 |
| 0x223202 | DOBD - IHKA - eKMV: EEPROM defekt | 0 |
| 0x223203 | DOBD - IHKA - eKMV: Laufzeitfehler | 0 |
| 0x223204 | DOBD - IHKA - eKMV: Software-Watchdog Fehler | 0 |
| 0x223205 | DOBD - IHKA - eKMV: Fehler in der Micro-Controller-Umgebung | 0 |
| 0x223206 | DOBD - IHKA - eDH: HV-Spannungssensor - Kurzschluss nach Minus | 0 |
| 0x223207 | DOBD - IHKA - eDH: HV-Spannungssensor - Kurzschluss nach Plus | 0 |
| 0x223208 | DOBD - IHKA - eDH: HV-Spannungssensor - Leitungsunterbrechung | 0 |
| 0x223209 | DOBD - IHKA - eDH: HV-Spannungssensor - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x22320A | DOBD - IHKA - eDH: HV-Spannungssensor - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x22320B | DOBD - IHKA - eDH: HV-Spannungssensor - Plausibilitätsfehler | 0 |
| 0x22320C | DOBD - IHKA - eDH: HV-Stromsensor 1 - Kurzschluss nach Minus | 0 |
| 0x22320D | DOBD - IHKA - eDH: HV-Stromsensor 1 - Kurzschluss nach Plus | 0 |
| 0x22320E | DOBD - IHKA - eDH: HV-Stromsensor 1 - Leitungsunterbrechung | 0 |
| 0x22320F | DOBD - IHKA - eDH: HV-Stromsensor 1 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223210 | DOBD - IHKA - eDH: HV-Stromsensor 1 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x223211 | DOBD - IHKA - eDH: HV-Stromsensor 1 - Plausibilitätsfehler | 0 |
| 0x223212 | DOBD - IHKA - eDH: Temperatursensor Platine - Kurzschluss nach Minus | 0 |
| 0x223213 | DOBD - IHKA - eDH: Temperatursensor Platine - Kurzschluss nach Plus | 0 |
| 0x223214 | DOBD - IHKA - eDH: Temperatursensor Platine - Leitungsunterbrechung | 0 |
| 0x223215 | DOBD - IHKA - eDH: Temperatursensor Platine - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223216 | DOBD - IHKA - eDH: Temperatursensor Platine - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x223217 | DOBD - IHKA - eDH: Temperatursensor Platine - Plausibilitätsfehler | 0 |
| 0x223218 | DOBD - IHKA - eDH: Temperatursensor Kühlmittel - Kurzschluss nach Minus | 0 |
| 0x223219 | DOBD - IHKA - eDH: Temperatursensor Kühlmittel - Kurzschluss nach Plus | 0 |
| 0x22321A | DOBD - IHKA - eDH: Temperatursensor Kühlmittel - Leitungsunterbrechung | 0 |
| 0x22321B | DOBD - IHKA - eDH: Temperatursensor Kühlmittel - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x22321C | DOBD - IHKA - eDH: Temperatursensor Kühlmittel - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x22321D | DOBD - IHKA - eDH: Temperatursensor Kühlmittel - Plausibilitätsfehler | 0 |
| 0x22321E | DOBD - IHKA - eDH: RAM defekt | 0 |
| 0x22321F | DOBD - IHKA - eDH: ROM defekt | 0 |
| 0x223220 | DOBD - IHKA - eDH: EEPROM defekt | 0 |
| 0x223221 | DOBD - IHKA - eDH: Laufzeitfehler | 0 |
| 0x223222 | DOBD - IHKA - eDH: Software-Wachtdog Fehler | 0 |
| 0x223223 | DOBD - IHKA - eDH: Fehler in der Micro-Controller-Umgebung | 0 |
| 0x223224 | DOBD - IHKA - Wärmepumpe Temperaturfühler 1: Kurzschluss nach Masse | 0 |
| 0x223225 | DOBD - IHKA - Wärmepumpe Temperaturfühler 1: Kurzschluss nach Plus | 0 |
| 0x223226 | DOBD - IHKA - Wärmepumpe Temperaturfühler 1: Unterbrechung | 0 |
| 0x223227 | DOBD - IHKA - Wärmepumpe Temperaturfühler 1: Oberhalb des gültigen Wertebereiches | 0 |
| 0x223228 | DOBD - IHKA - Wärmepumpe Temperaturfühler 1: Unterhalb des gültigen Wertebereiches | 0 |
| 0x223229 | DOBD - IHKA - Heat Pump: NTC1 Temperatursensor TRnWPKond - Plausibilitätsfehler | 0 |
| 0x22322A | DOBD - IHKA - Wärmepumpe Temperaturfühler 2: Kurzschluss nach Masse | 0 |
| 0x22322B | DOBD - IHKA - Wärmepumpe Temperaturfühler 2: Kurzschluss nach Plus | 0 |
| 0x22322C | DOBD - IHKA - Wärmepumpe Temperaturfühler 2: Unterbrechung | 0 |
| 0x22322D | DOBD - IHKA - Wärmepumpe Temperaturfühler 2: Oberhalb des gültigen Wertebereiches | 0 |
| 0x22322E | DOBD - IHKA - Wärmepumpe Temperaturfühler 2: Unterhalb des gültigen Wertebereiches | 0 |
| 0x22322F | DOBD - IHKA - Heat Pump: Temperatursensor  NTC2 TRnHVSVerd - Plausibilitätsfehler | 0 |
| 0x223230 | DOBD - IHKA - Wärmepumpe Temperaturfühler 3: Kurzschluss nach Masse | 0 |
| 0x223231 | DOBD - IHKA - Wärmepumpe Temperaturfühler 3: Kurzschluss nach Plus | 0 |
| 0x223232 | DOBD - IHKA - Wärmepumpe Temperaturfühler 3: Unterbrechung | 0 |
| 0x223233 | DOBD - IHKA - Wärmepumpe Temperaturfühler 3: Oberhalb des gültigen Wertebereiches | 0 |
| 0x223234 | DOBD - IHKA - Wärmepumpe Temperaturfühler 3: Unterhalb des gültigen Wertebereiches | 0 |
| 0x223235 | DOBD - IHKA - Heat Pump: Temperatursensor  TRnVerd- Plausibilitätsfehler | 0 |
| 0x223236 | DOBD - IHKA - Heat Pump: Temperatursensor TRvEKK - Kurzschluss nach Minus | 0 |
| 0x223237 | DOBD - IHKA - Heat Pump: Temperatursensor TRvEKK - Kurzschluss nach Plus | 0 |
| 0x223238 | DOBD - IHKA - Heat Pump: Temperatursensor   TRvEKK- Leitungsunterbrechung | 0 |
| 0x223239 | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 1: Temperatur oberhalb des gültigen Wertebereiches | 0 |
| 0x22323A | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 1: Temperatur unterhalb des gültigen Wertebereiches | 0 |
| 0x22323B | DOBD - IHKA - Heat Pump: Temperatursensor TRvEKK- Plausibilitätsfehler | 0 |
| 0x22323C | DOBD - IHKA - Heat Pump: Drucksensor pRvEKK - Kurzschluss nach Minus | 0 |
| 0x22323D | DOBD - IHKA - Heat Pump: Drucksensor   pRvEKK  - Kurzschluss nach Plus | 0 |
| 0x22323E | DOBD - IHKA - Heat Pump: Drucksensor   pRvEKK -Leitungsunterbrechung | 0 |
| 0x22323F | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 1: Druck oberhalb des gültigen Wertebereiches | 0 |
| 0x223240 | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 1: Druck unterhalb des gültigen Wertebereiches | 0 |
| 0x223241 | DOBD - IHKA - Heat Pump: Drucksensor pRvEKK - Plausibilitätsfehler | 0 |
| 0x223242 | DOBD - IHKA - Heat Pump: Temperatursensor TRnEKK- Kurzschluss nach Minus | 0 |
| 0x223243 | DOBD - IHKA - Heat Pump: Temperatursensor  TRnEKK - Kurzschluss nach Plus | 0 |
| 0x223244 | DOBD - IHKA - Heat Pump: Temperatursensor   TRnEKK - Leitungsunterbrechung | 0 |
| 0x223245 | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 2: Temperatur oberhalb des gültigen Wertebereiches | 0 |
| 0x223246 | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 2: Temperatur unterhalb des gültigen Wertebereiches | 0 |
| 0x223247 | DOBD - IHKA - Heat Pump: P/T2 Temperatursensor  TRnEKK - Plausibilitätsfehler | 0 |
| 0x223248 | DOBD - IHKA - Heat Pump: Drucksensor  pRnEKK- Kurzschluss nach Minus | 0 |
| 0x223249 | DOBD - IHKA - Heat Pump: Drucksensor  pRnEKK Kurzschluss nach Plus | 0 |
| 0x22324A | DOBD - IHKA - Heat Pump: Drucksensor pRnEKK - Leitungsunterbrechung | 0 |
| 0x22324B | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 2: Druck oberhalb des gültigen Wertebereiches | 0 |
| 0x22324C | DOBD - IHKA - Wärmepumpe Druck-Temperaturfühler 2: Druck unterhalb des gültigen Wertebereiches | 0 |
| 0x22324D | DOBD - IHKA - Heat Pump: P/T2 Drucksensor  pRnEKK - Plausibilitätsfehler | 0 |
| 0x22324E | DOBD - IHKA - Wärmepumpe Expansionsventil 1: Kurzschluss nach Masse | 0 |
| 0x22324F | DOBD - IHKA - Wärmepumpe Expansionsventil 1: Kurzschluss nach Plus | 0 |
| 0x223250 | DOBD - IHKA - Wärmepumpe Expansionsventil 1: Unterbrechung | 0 |
| 0x223251 | DOBD - IHKA - Heat Pump: Expansionsventil 1 - Funktionsfehler oder defekt | 0 |
| 0x223252 | DOBD - IHKA - Wärmepumpe Expansionsventil 2: Kurzschluss nach Masse | 0 |
| 0x223253 | DOBD - IHKA - Wärmepumpe Expansionsventil 2: Kurzschluss nach Plus | 0 |
| 0x223254 | DOBD - IHKA - Wärmepumpe Expansionsventil 2: Unterbrechung | 0 |
| 0x223255 | DOBD - IHKA - Heat Pump: Expansionsventil 2 - Funktionsfehler oder defekt | 0 |
| 0x223256 | DOBD - IHKA - Wärmepumpe Expansionsventil 3: Kurzschluss nach Masse | 0 |
| 0x223257 | DOBD - IHKA - Wärmepumpe Expansionsventil 3: Kurzschluss nach Plus | 0 |
| 0x223258 | DOBD - IHKA - Wärmepumpe Expansionsventil 3: Unterbrechung | 0 |
| 0x223259 | DOBD - IHKA - Heat Pump: Expansionsventil 3 - Funktionsfehler oder defekt | 0 |
| 0x22325A | DOBD - IHKA - Wärmepumpe Absperrventil 1: Kurzschluss nach Masse | 0 |
| 0x22325B | DOBD - IHKA - Wärmepumpe Absperrventil 1: Kurzschluss nach Plus | 0 |
| 0x22325C | DOBD - IHKA - Wärmepumpe Absperrventil 1: Unterbrechung | 0 |
| 0x22325D | DOBD - IHKA - Heat Pump: Abschaltventil 1 - Funktionsfehler oder defekt | 0 |
| 0x22325E | DOBD - IHKA - Wärmepumpe Absperrventil 2: Kurzschluss nach Masse | 0 |
| 0x22325F | DOBD - IHKA - Wärmepumpe Absperrventil 2: Kurzschluss nach Plus | 0 |
| 0x223260 | DOBD - IHKA - Wärmepumpe Absperrventil 2: Unterbrechung | 0 |
| 0x223261 | DOBD - IHKA - Heat Pump: Abschaltventil 2 - Funktionsfehler oder defekt | 0 |
| 0x223262 | DOBD - IHKA - Wärmepumpe Absperrventil 3: Kurzschluss nach Masse | 0 |
| 0x223263 | DOBD - IHKA - Wärmepumpe Absperrventil 3: Kurzschluss nach Plus | 0 |
| 0x223264 | DOBD - IHKA - Wärmepumpe Absperrventil 3: Unterbrechung | 0 |
| 0x223265 | DOBD - IHKA - Heat Pump: Abschaltventil 3 - Funktionsfehler oder defekt | 0 |
| 0x223266 | DOBD - IHKA - Wärmepumpe Absperrventil 4: Kurzschluss nach Masse | 0 |
| 0x223267 | DOBD - IHKA - Wärmepumpe Absperrventil 4: Kurzschluss nach Plus | 0 |
| 0x223268 | DOBD - IHKA - Wärmepumpe Absperrventil 4: Unterbrechung | 0 |
| 0x223269 | DOBD - IHKA - Heat Pump: Abschaltventil 4 - Funktionsfehler oder defekt | 0 |
| 0x22326A | DOBD - IHKA - Heat Pump: RAM defekt | 0 |
| 0x22326B | DOBD - IHKA - Heat Pump: ROM defekt | 0 |
| 0x22326C | DOBD - IHKA - Heat Pump: EEPROM defekt | 0 |
| 0x22326D | DOBD - IHKA - Heat Pump: Laufzeitfehler | 0 |
| 0x22326E | DOBD - IHKA - Heat Pump: Software-Wachtdog Fehler | 0 |
| 0x22326F | DOBD - IHKA - Heat Pump: Fehler in der Micro-Controller-Umgebung | 0 |
| 0x223270 | DOBD - IHKA - AC-LIN: LIN-Box Wärmepumpe antwortet nicht | 0 |
| 0x223271 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 1 - Kurzschluss nach Minus | 0 |
| 0x223272 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 1 - Kurzschluss nach Plus | 0 |
| 0x223273 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 1 - Leitungsunterbrechung | 0 |
| 0x223274 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 1 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223275 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 1 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x223276 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 1 - Plausibilitätsfehler | 0 |
| 0x223277 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 2 - Kurzschluss nach Minus | 0 |
| 0x223278 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 2 - Kurzschluss nach Plus | 0 |
| 0x223279 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 2 - Leitungsunterbrechung | 0 |
| 0x22327A | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x22327B | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x22327C | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 2 - Plausibilitätsfehler | 0 |
| 0x22327D | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 3 - Kurzschluss nach Minus | 0 |
| 0x22327E | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 3 - Kurzschluss nach Plus | 0 |
| 0x22327F | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 3 - Leitungsunterbrechung | 0 |
| 0x223280 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 3 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223281 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 3 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x223282 | DOBD - IHKA - eDH: Spannungssensor oberhalb Mosfets Kanal 3 - Plausibilitätsfehler | 0 |
| 0x223283 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Minus | 0 |
| 0x223284 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Plus | 0 |
| 0x223285 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 1 - Leitungsunterbrechung | 0 |
| 0x223286 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 1 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223287 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 1 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x223288 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 1 - Plausibilitätsfehler | 0 |
| 0x223289 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Minus | 0 |
| 0x22328A | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Plus | 0 |
| 0x22328B | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 2 - Leitungsunterbrechung | 0 |
| 0x22328C | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x22328D | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x22328E | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 2 - Plausibilitätsfehler | 0 |
| 0x22328F | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Minus | 0 |
| 0x223290 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Plus | 0 |
| 0x223291 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 3 - Leitungsunterbrechung | 0 |
| 0x223292 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 3 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223293 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 3 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x223294 | DOBD - IHKA - eDH: Spannungssensor zwischen Mosfets Kanal 3 - Plausibilitätsfehler | 0 |
| 0x223295 | DOBD - IHKA - eDH: HV-Stromsensor 2 - Kurzschluss nach Minus | 0 |
| 0x223296 | DOBD - IHKA - eDH: HV-Stromsensor 2 - Kurzschluss nach Plus | 0 |
| 0x223297 | DOBD - IHKA - eDH: HV-Stromsensor 2 - Leitungsunterbrechung | 0 |
| 0x223298 | DOBD - IHKA - eDH: HV-Stromsensor 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x223299 | DOBD - IHKA - eDH: HV-Stromsensor 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x22329A | DOBD - IHKA - eDH: HV-Stromsensor 2 - Plausibilitätsfehler | 0 |
| 0x22329B | DOBD - IHKA - eDH: HV-Stromsensor 3 - Kurzschluss nach Minus | 0 |
| 0x22329C | DOBD - IHKA - eDH: HV-Stromsensor 3 - Kurzschluss nach Plus | 0 |
| 0x22329D | DOBD - IHKA - eDH: HV-Stromsensor 3 - Leitungsunterbrechung | 0 |
| 0x22329E | DOBD - IHKA - eDH: HV-Stromsensor 3 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x22329F | DOBD - IHKA - eDH: HV-Stromsensor 3 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x2232A0 | DOBD - IHKA - eDH: HV-Stromsensor 3 - Plausibilitätsfehler | 0 |
| 0x2232A1 | 12V Spannungssensor 1 - Pin Pointing - Plausibilitätsfehler | 0 |
| 0x2232A2 | 12V Spannungssensor 2 - Pin Pointing - Plausibilitätsfehler | 0 |
| 0x2232A3 | E-Fuse - Spannungssensor - Plausibilitätsfehler | 0 |
| 0x2232A4 | Crash-Hardware-Leitung - Plausibilitätsfehler | 0 |
| 0x2232A5 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Kurzschluss nach Plus | 0 |
| 0x2232A6 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Obere Schwelle | 0 |
| 0x2232A7 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Ground switch | 0 |
| 0x2232A8 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Hardware Überspannung | 0 |
| 0x2232A9 | DC/DC-Wandler - LV-Spannung - Oberer Schwellenwert überschritten | 0 |
| 0x2232AA | DC/DC-Wandler - LV-Spannung - Unterer Schwellenwert unterschritten | 0 |
| 0x2232AB | DC/DC-Wandler - HV-Spannung - Oberer Schwellenwert überschritten | 0 |
| 0x2232AC | DC/DC-Wandler - HV-Spannung - Unterer Schwellenwert unterschritten | 0 |
| 0x2232AD | DC/DC-Wandler - Temperatursensor - Plausibilitätsfehler - Modell | 0 |
| 0x2232AE | DC/DC-Wandler - Abschaltpfadtest - Step2 | 0 |
| 0x2232AF | DC/DC-Wandler - Abschaltpfadtest - Step1 geschlossen | 0 |
| 0x2232B0 | DC/DC-Wandler - Abschaltpfadtest - Step1 offen | 0 |
| 0x2232B1 | DC/DC-Wandler - Keine Energieübertragung möglich | 0 |
| 0x2232B2 | DC/DC-Wandler - Versorgung Treiber 15V - Kurzschluss nach Plus | 0 |
| 0x2232B3 | DC/DC-Wandler - Versorgung Treiber 5V - Kurzschluss nach Plus | 0 |
| 0x2232B4 | DC/DC-Wandler - Versorgung Treiber 3.3V - Kurzschluss nach Plus | 0 |
| 0x2232B5 | DC/DC-Wandler - Versorgung Treiber 15V - Kurzschluss nach Masse | 0 |
| 0x2232B6 | DC/DC-Wandler - Versorgung Treiber 5V - Kurzschluss nach Masse | 0 |
| 0x2232B7 | DC/DC-Wandler - Versorgung Treiber 3.3V - Kurzschluss nach Masse | 0 |
| 0x2232D3 | DC/DC-Wandler - DC/DC interne Kommunikation - Sammelfehler | 0 |
| 0x2232D4 | DC/DC-Wandler - Kommunikation - FuSi-Sammelfehler | 0 |
| 0x2232D5 | FuSi - HV - Zwischenkreis - Spannungssensorik - Plausibilitätsfehler | 0 |
| 0x2232DC | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Plausibilitätsfehler | 0 |
| 0x2232DD | E-Fuse - Spannungssensor - Unterer Schwellenwert unterschritten | 0 |
| 0x2232DE | E-Fuse - Spannungssensor - Oberer Schwellenwert überschritten | 0 |
| 0x2232DF | E-Fuse - Stromsensor - Plausibilitätsfehler | 0 |
| 0x2232E0 | E-Fuse - Stromsensor - Oberer Schwellenwert überschritten | 0 |
| 0x2232E1 | E-Fuse - Stromsensor - Unterer Schwellenwert unterschritten | 0 |
| 0x2232E2 | E-Fuse - Schalter - Plausibilitätsfehler | 0 |
| 0x2232E4 | DOBD - DSC - Raddrehzahlsensor - Vorn Links - Sammelfehler | 0 |
| 0x2232E5 | DOBD - DSC - Raddrehzahlsensor - Vorn Links - Falscher Sensortyp | 0 |
| 0x2232E6 | DOBD - DSC - Raddrehzahlsensor - Vorn Links - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x2232E7 | DOBD - DSC - Raddrehzahlsensor - Vorn Links - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x2232E8 | DOBD - DSC - Raddrehzahlsensor - Vorn Rechts - Sammelfehler | 0 |
| 0x2232E9 | DOBD - DSC - Raddrehzahlsensor - Vorn Rechts - Falscher Sensortyp | 0 |
| 0x2232EA | DOBD - DSC - Raddrehzahlsensor - Vorn Rechts - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x2232EB | DOBD - DSC - Raddrehzahlsensor - Vorn Rechts - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x2232EC | DOBD - DSC - Raddrehzahlsensor - Hinten Links - Sammelfehler | 0 |
| 0x2232ED | DOBD - DSC - Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 0 |
| 0x2232EE | DOBD - DSC - Raddrehzahlsensor - Hinten Links - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x2232EF | DOBD - DSC - Raddrehzahlsensor - Hinten Links - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x2232F0 | DOBD - DSC - Raddrehzahlsensor - Hinten Rechts - Sammelfehler | 0 |
| 0x2232F1 | DOBD - DSC - Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 0 |
| 0x2232F2 | DOBD - DSC - Raddrehzahlsensor - Hinten Rechts - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x2232F3 | DOBD - DSC - Raddrehzahlsensor - Hinten Rechts - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x2232F4 | DOBD - DSC - Elektrohydraulischer Bremsaktuator  - Sammelfehler | 0 |
| 0x2232F5 | DOBD - DSC - Elektrohydraulischer Bremsaktuator  - Versorgungsspannung | 0 |
| 0x2232F6 | DOBD - DSC - Drucksensor - Hauptzylinder - Sammelfehler | 0 |
| 0x2232F7 | DOBD - DSC - Drucksensor - Hauptzylinder - Offsetfehler | 0 |
| 0x2232F8 | DOBD - DSC - Drucksensor - Interne Plausibilisierung fehlgeschlagen | 0 |
| 0x2232F9 | DOBD - DSC - Drucksensor - Plausibilisierung Temperatur intern | 0 |
| 0x2232FA | DOBD - DSC - Steuergerät intern - Busfehler - Fehler Memory Access | 0 |
| 0x2232FB | DOBD - DSC - Drucksensor - Interne Plausibilisierung fehlgeschlagen | 0 |
| 0x2232FC | DOBD - DSC - Steuergerät intern - Ventile Fehler | 0 |
| 0x2232FD | DOBD - DSC - Steuergerät intern - Unplausibler Ventilstrom | 0 |
| 0x2232FE | DOBD - DSC - Steuergerät intern - HW Fehler ASG intern | 0 |
| 0x2232FF | DOBD - DSC - Bremspedalwegsensor -  Nullstellung nicht initialisiert | 0 |
| 0x223300 | DOBD - DSC - Bremspedalwegsensor -  Plausibilisierung Signalleitung 1 Unterbrechung oder auf Masse unteres Fehlerband | 0 |
| 0x223301 | DOBD - DSC - Bremspedalwegsensor -  Plausibilisierung Signalleitung 1 Kurzschluss nach Plus | 0 |
| 0x223302 | DOBD - DSC - Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Masse | 0 |
| 0x223303 | DOBD - DSC - Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Plus | 0 |
| 0x223304 | DOBD - DSC - Bremspedalwegsensor -  Plausibilisierung Nullpunkt Offset zu groß | 0 |
| 0x223305 | DOBD - DSC - Bremspedalwegsensor -  Nullpunktabgleich Checksummenfehler | 0 |
| 0x223306 | DOBD - DSC - Bremspedalwegsensor -  Nullpunktabgleich Checksummenfehler | 0 |
| 0x223307 | DOBD - DSC - Drucksensor - nicht kalibriert | 0 |
| 0x223308 | DOBD - DSC - Steuergerät intern - Falsche Zuordnung von Hydraulikeinheit zu Anbausteuergerät | 0 |
| 0x223309 | DOBD - DSC - Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 0 |
| 0x22330A | DOBD - DSC - Steuergerät intern - Busfehler - Fehler Failsafe Schaltung | 0 |
| 0x22330B | DOBD - DSC - FLEXRAY Controller Error Bus Sammelfehler | 0 |
| 0x22330C | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Timeout | 0 |
| 0x22330D | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Sammelfehler Checksumme Alive CRC Ungültig | 0 |
| 0x22330E | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3, Daten Antriebsstrang 2, ID: DT_PT_2) - Sammelfehler | 0 |
| 0x22330F | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3, Daten Antriebsstrang 2, ID: DT_PT_2) - Sammelfehler Checksumme Alive CRC Ungültig | 0 |
| 0x223310 | DOBD - DSC - Botschaftsfehler Sammelfehler Timeout (Radmoment Antrieb 4, ID: WMOM_DRV_4, Radmoment Antrieb 4, ID: WMOM_DRV_5) | 0 |
| 0x223311 | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4, Radmoment Antrieb 4, ID: WMOM_DRV_5) - Sammelfehler Checksumme Alive CRC Ungültig | 0 |
| 0x223312 | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 0 |
| 0x223313 | DOBD - DSC - Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 0 |
| 0x223314 | DOBD - DSC - Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 0 |
| 0x223315 | DOBD - DSC - Steuergerät intern - ROM / Flash Fehler | 0 |
| 0x223316 | DOBD - DSC - Steuergerät intern - RAM Fehler | 0 |
| 0x223317 | DOBD - DSC - Steuergerät intern - Laufzeitfehler | 0 |
| 0x223318 | DOBD - DSC - Steuergerät intern - Main Treiber Fehler | 0 |
| 0x223319 | DOBD - DSC - Steuergerät intern - Hardware Fehler | 0 |
| 0x22331A | DOBD - IHKA - eKMV: Kommunikationsfehler - Alive-Counter oder Checksumme | 0 |
| 0x22331B | DOBD - IHKA - K-CAN Bus - Checksumme | 0 |
| 0x22331C | E-Fuse - Stromsensor - Kurzschluss nach Plus | 0 |
| 0x223326 | HVPM - Start - HV-Batterie - Isolationsfehler | 1 |
| 0x223336 | DOBD - SME - HVS: Erhöhter Ladungsverlust Zelle | 0 |
| 0x223337 | DOBD - SME - Codierung: Steuergerät ist nicht codiert | 0 |
| 0x223338 | DOBD - SME - Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x223339 | DOBD - SME - Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x22333A | DOBD - SME - Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x22333B | DOBD - SME - Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x22333C | DOBD - SME - Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x22333E | DOBD - SME - EEPROM, NV- Daten - Interner Fehler | 0 |
| 0x22333F | DOBD - SME - unerwarteter Reset festgestellt | 0 |
| 0x223340 | DOBD - SME - RAM Defekt in Initialisierungsphase | 0 |
| 0x223341 | DOBD - SME - RAM Defekt in Laufzeitphase | 0 |
| 0x223342 | DOBD - SME - ROM Defekt in Laufzeitphase | 0 |
| 0x223347 | DOBD - SME - Timeout der CAN-Botschaft, kein Botschaftsempfang innerhalb 10x Zykluszeit | 0 |
| 0x223349 | DOBD - SME - HVS: Hauptschalter: Vorlade Schütz klebt | 0 |
| 0x22334A | DOBD - SME - HVS: Hauptschalter: Vorlade Schütz lässt sich nicht schließen | 0 |
| 0x22335D | FuSi - Plausiblisierung COM Stack | 0 |
| 0x22335E | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Plausibilitätsfehler 2 | 0 |
| 0x223360 | Inverter 1 Verbrennernah - Temperatursensor - Phase 1 - Kurzschluss nach Plus | 0 |
| 0x223361 | Inverter 1 Verbrennernah - Temperatursensor - Phase 1 - Kurzschluss nach Masse | 0 |
| 0x223362 | Inverter 1 Verbrennernah - Temperatursensor - Phase 2 - Kurzschluss nach Plus | 0 |
| 0x223363 | Inverter 1 Verbrennernah - Temperatursensor - Phase 2 - Kurzschluss nach Masse | 0 |
| 0x223364 | Inverter 1 Verbrennernah - Temperatursensor - Phase 3 - Kurzschluss nach Masse | 0 |
| 0x223365 | Inverter 1 Verbrennernah - Temperatursensor - Phase 3 - Kurzschluss nach Plus | 0 |
| 0x223366 | Inverter 1 Verbrennernah - Gatetreiber - HighSide - Konfigurationsfehler | 0 |
| 0x223367 | Inverter 1 Verbrennernah - Gatetreiber - LowSide - Konfigurationsfehler | 0 |
| 0x223368 | Inverter 1 Verbrennernah - Gatetreiber - LowSide - Überstromabschaltung | 0 |
| 0x223369 | Inverter 1 Verbrennernah - Gatetreiber - HighSide - Überstromabschaltung | 0 |
| 0x223376 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Kurzschluss nach Plus | 0 |
| 0x223377 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Kurzschluss nach Masse | 0 |
| 0x22337E | HVPM - Start - Hochvoltsystem abgeschaltet | 1 |
| 0x223380 | DOBD - OBC - FA-CAN Control Module Bus OFF | 0 |
| 0x223381 | DOBD - OBC - LE-CAN Control Module Bus OFF | 0 |
| 0x223382 | DOBD - OBC - A-CAN Control Module Bus OFF | 0 |
| 0x223383 | DOBD - OBC - Ladeelektronik: ECU interner Kommunikationsfehler | 0 |
| 0x223384 | DOBD - OBC - Ladeelektronik: Software-Fehler | 0 |
| 0x223385 | Steuergerät intern - Inkorrekte Datenübertragung über RTE-Schnittstelle | 0 |
| 0x223386 | DC/DC-Wandler - Abschaltpfadtest - Timeout | 0 |
| 0x223387 | Steuergerät intern - NVRAM - Lesen | 0 |
| 0x223388 | Steuergerät intern - NVRAM - Schreiben | 0 |
| 0x22338A | Steuergerät intern - Mikrocontroller - SafeState - Ebene 3 | 0 |
| 0x22338B | Steuergerät intern - CHIP ID - Zulassung | 0 |
| 0x22338C | Steuergerät intern - Chip - Abgleich fehlgeschlagen | 0 |
| 0x22338D | ELUP - Treiber - Hardware - Überstromabschaltung | 0 |
| 0x223391 | DOBD - SME - A-CAN Control Module Bus OFF | 0 |
| 0x223392 | DOBD - IHKA - eDH: Kommunikationsfehler - Alive-Counter oder Checksumme | 0 |
| 0x223393 | DOBD - IHKA - Heat Pump: Kommunikationsfehler - Alive-Counter oder Checksumme | 0 |
| 0x223394 | ELUP - Eingangsspannungssensor - Oberer Schwellenwert überschritten - 16V | 0 |
| 0x223395 | ELUP - Eingangsspannungssensor - Unterer Schwellenwert unterschritten - 9V | 0 |
| 0x2233A4 | Werksmodus - Bandendefunktion - aktiv | 0 |
| 0x2233A6 | FUSI - HV - Inverter 1 - Überlast Kabelbaum - AC Seite - sicherer Zustand | 0 |
| 0x2233A7 | EWS - Ergebnis Programmcheck | 0 |
| 0x2233A8 | EWS - Ergebnis Datencheck | 0 |
| 0x2233A9 | FA-CAN - Leitungsunterbrechung | 0 |
| 0x2233AA | A-CAN - Leitungsunterbrechung | 0 |
| 0x2233AD | DC/DC-Wandler - HV - Stromsensor S9 - Kurzschluss nach Plus | 0 |
| 0x2233AE | DC/DC-Wandler - HV - Stromsensor S9 - Kurzschluss nach Masse | 0 |
| 0x2233AF | DC/DC-Wandler - HV- Stromsensor S9 - Oberer Schwellenwert überschritten | 0 |
| 0x2233B0 | DC/DC-Wandler - HV-Stromsensor S9 - Unterer Schwellenwert unterschritten | 0 |
| 0x2233B1 | DC/DC-Wandler - HV - Stromsensor S9 - Plausibilitätsfehler | 0 |
| 0x2233B2 | EM 1 Verbrennernah - Rotor - Übertemperatur | 0 |
| 0x2233B3 | FuSi - LD - Unerlaubter Freilauf | 0 |
| 0x2233B4 | FuSi - LD - Außerhalb gültigen Bereich | 0 |
| 0xD7840A | FA-CAN Control Module Bus OFF | 0 |
| 0xD7841F | FLEXRAY Physikalischer Busfehler | 0 |
| 0xD78420 | FLEXRAY controller error | 0 |
| 0xD78486 | A-CAN Control Module Bus OFF | 0 |
| 0xD78487 | FLEXRAY StartUpFailed | 0 |
| 0xD78BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD78C00 | Batteriesensor (IBS 2) - LIN BUS - Kommunikation fehlt | 0 |
| 0xD78C01 | LIN BUS - Kommunikationsfehler | 0 |
| 0xD79400 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) fehlt | 1 |
| 0xD79401 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) nicht aktuell | 1 |
| 0xD79402 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) Prüfsumme falsch | 1 |
| 0xD79403 | Signal (Absicherung Antriebsstrang, ID: SAFG_PT) ungültig | 1 |
| 0xD7940C | Botschaft (Anforderung Drehmoment Betriebsstrategie, ID: RQ_TORQ_OSTR) fehlt | 1 |
| 0xD7940F | Signal (Anforderung Drehmoment Betriebsstrategie, ID: RQ_TORQ_OSTR) ungültig | 1 |
| 0xD79410 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) fehlt | 1 |
| 0xD79413 | Signal (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) ungültig | 1 |
| 0xD7941C | Botschaft (Anforderung Klima Hybrid, ID: RQ_AIC_HYB) fehlt | 1 |
| 0xD7941F | Signal (Anforderung Klima Hybrid, ID: RQ_AIC_HYB) ungültig | 1 |
| 0xD79420 | Botschaft (Anforderung Klimaanlage, ID: RQ_AIC) fehlt | 1 |
| 0xD79423 | Signal (Anforderung Klimaanlage, ID: RQ_AIC) ungültig | 1 |
| 0xD79430 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) fehlt | 1 |
| 0xD79431 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) nicht aktuell | 1 |
| 0xD79432 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) Prüfsumme falsch | 1 |
| 0xD79433 | Signal (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) ungültig | 1 |
| 0xD79450 | Botschaft (Begrenzung Komfort Ladeelektronik, ID: LIM_KLE) fehlt | 1 |
| 0xD79453 | Signal (Begrenzung Komfort Ladeelektronik, ID: LIM_KLE) ungültig | 1 |
| 0xD79454 | Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, ID: LIM_CHG_DCHG_HVSTO) fehlt | 1 |
| 0xD79457 | Signal (Begrenzung Ladung Entladung Hochvoltspeicher, ID: LIM_CHG_DCHG_HVSTO) ungültig | 1 |
| 0xD79458 | Botschaft (Daten Antriebsstrang 1, ID: DT_PT_1) fehlt | 1 |
| 0xD7945B | Signal (Daten Antriebsstrang 1, ID: DT_PT_1) ungültig | 1 |
| 0xD7945C | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) fehlt | 1 |
| 0xD7945D | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) nicht aktuell | 1 |
| 0xD7945E | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) Prüfsumme falsch | 1 |
| 0xD7945F | Signal (Daten Antriebsstrang 2, ID: DT_PT_2) ungültig | 1 |
| 0xD79460 | Botschaft (Daten Antriebsstrang 3, ID: DT_PT_3) fehlt | 1 |
| 0xD79463 | Signal (Daten Antriebsstrang 3, ID: DT_PT_3) ungültig | 1 |
| 0xD79464 | Botschaft (Daten Anzeige Getriebestrang, ID: DT_DISP_GRDT) fehlt | 1 |
| 0xD79467 | Signal (Daten Anzeige Getriebestrang, ID: DT_DISP_GRDT) ungültig | 1 |
| 0xD79468 | Botschaft (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) fehlt | 1 |
| 0xD7946B | Signal (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) ungültig | 1 |
| 0xD7946C | Botschaft (Daten elektrischer Durchlauferhitzer, ID: DT_EL_GEY) fehlt | 1 |
| 0xD7946F | Signal (Daten elektrischer Durchlauferhitzer, ID: DT_EL_GEY) ungültig | 1 |
| 0xD79470 | Botschaft (Daten Getriebestrang, ID: DT_GRDT) fehlt | 1 |
| 0xD79471 | Botschaft (Daten Getriebestrang, ID: DT_GRDT) nicht aktuell | 1 |
| 0xD79472 | Botschaft (Daten Getriebestrang, ID: DT_GRDT) Prüfsumme falsch | 1 |
| 0xD79473 | Signal (Daten Getriebestrang, ID: DT_GRDT) ungültig | 1 |
| 0xD79474 | Botschaft (Daten Hochvoltspeicher 2, ID: DT_HVSTO_2) fehlt | 1 |
| 0xD79477 | Signal (Daten Hochvoltspeicher 2, ID: DT_HVSTO_2) ungültig | 1 |
| 0xD79478 | Botschaft (Daten Hochvoltspeicher, ID: DT_HVSTO) fehlt | 1 |
| 0xD7947B | Signal (Daten Hochvoltspeicher, ID: DT_HVSTO) ungültig | 1 |
| 0xD79488 | Botschaft (Diagnose OBD Motor, ID: DIAG_OBD_ENG) fehlt | 1 |
| 0xD7948B | Signal (Diagnose OBD Motor, ID: DIAG_OBD_ENG) ungültig | 1 |
| 0xD7948C | Botschaft (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) fehlt | 1 |
| 0xD7948D | Botschaft (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) nicht aktuell | 1 |
| 0xD7948E | Botschaft (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) Prüfsumme falsch | 1 |
| 0xD7948F | Signal (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) ungültig | 1 |
| 0xD79490 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 |
| 0xD79491 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) nicht aktuell | 1 |
| 0xD79492 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Prüfsumme falsch | 1 |
| 0xD79493 | Signal (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) ungültig | 1 |
| 0xD79494 | Botschaft (Drehzahl Wasserpumpe, ID: RPM_WAP) fehlt | 1 |
| 0xD79497 | Signal (Drehzahl Wasserpumpe, ID: RPM_WAP) ungültig | 1 |
| 0xD794BC | Botschaft (Energieverbrauch Fehlerstatus Komfort Ladeelektronik, ID: ENERG_COSP_ERR_ST_KLE) fehlt | 1 |
| 0xD794BF | Signal (Energieverbrauch Fehlerstatus Komfort Ladeelektronik, ID: ENERG_COSP_ERR_ST_KLE) ungültig | 1 |
| 0xD794CF | Signal (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) ungültig | 1 |
| 0xD794D0 | Botschaft (Fahrzeugzustand, ID: FZZSTD) fehlt | 1 |
| 0xD794D3 | Signal (Fahrzeugzustand, ID: FZZSTD) ungültig | 1 |
| 0xD794D4 | Botschaft (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) fehlt | 1 |
| 0xD794D7 | Signal (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) ungültig | 1 |
| 0xD794E0 | Botschaft (Hybrid Vorgabe, ID: HYB_SPEC) fehlt | 1 |
| 0xD794E1 | Botschaft (Hybrid Vorgabe, ID: HYB_SPEC) nicht aktuell | 1 |
| 0xD794E2 | Botschaft (Hybrid Vorgabe, ID: HYB_SPEC) Prüfsumme falsch | 1 |
| 0xD794E3 | Signal (Hybrid Vorgabe, ID: HYB_SPEC) ungültig | 1 |
| 0xD794E4 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 |
| 0xD794E7 | Signal (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) ungültig | 1 |
| 0xD794E8 | Botschaft (Ist Daten Komfort Ladeelektronik Langzeit, ID: AVL_DT_KLE_LT) fehlt | 1 |
| 0xD794EB | Signal (Ist Daten Komfort Ladeelektronik Langzeit, ID: AVL_DT_KLE_LT) ungültig | 1 |
| 0xD794EC | Botschaft (Ist Daten Komfort Ladeelektronik, ID: AVL_DT_KLE) fehlt | 1 |
| 0xD794EF | Signal (Ist Daten Komfort Ladeelektronik, ID: AVL_DT_KLE) ungültig | 1 |
| 0xD794F8 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 |
| 0xD794F9 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) nicht aktuell | 1 |
| 0xD794FA | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Prüfsumme falsch | 1 |
| 0xD794FB | Signal (Ist Drehzahl Rad, ID: AVL_RPM_WHL) ungültig | 1 |
| 0xD794FC | Botschaft (Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 |
| 0xD794FF | Signal (Kilometerstand/Reichweite, ID: KILOMETERSTAND) ungültig | 1 |
| 0xD79500 | Botschaft (Klemmen, ID: KLEMMEN) fehlt | 1 |
| 0xD79503 | Signal (Klemmen, ID: KLEMMEN) ungültig | 1 |
| 0xD79508 | Botschaft (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) fehlt | 1 |
| 0xD7950B | Signal (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) ungültig | 1 |
| 0xD7950C | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) fehlt | 1 |
| 0xD7950D | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) nicht aktuell | 1 |
| 0xD7950E | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) Prüfsumme falsch | 1 |
| 0xD7950F | Signal (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) ungültig | 1 |
| 0xD79514 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 |
| 0xD79515 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 |
| 0xD79516 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 |
| 0xD79517 | Signal (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) ungültig | 1 |
| 0xD79518 | Botschaft (Modus Spannungsgesteuert, ID: MOD_VC) fehlt | 1 |
| 0xD7951B | Signal (Modus Spannungsgesteuert, ID: MOD_VC) ungültig | 1 |
| 0xD7951C | Botschaft (Nachlaufzeit Stromversorgung BN2020, ID: FLLUPT_GPWSUP) fehlt | 1 |
| 0xD7951F | Signal (Nachlaufzeit Stromversorgung BN2020, ID: FLLUPT_GPWSUP) ungültig | 1 |
| 0xD79524 | Botschaft (Navigation System Information, ID: NAV_SYS_INF) fehlt | 1 |
| 0xD79527 | Signal (Navigation System Information, ID: NAV_SYS_INF) ungültig | 1 |
| 0xD79528 | Botschaft (Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 |
| 0xD79529 | Botschaft (Neigung Fahrbahn, ID: TLT_RW) nicht aktuell | 1 |
| 0xD7952A | Botschaft (Neigung Fahrbahn, ID: TLT_RW) Prüfsumme falsch | 1 |
| 0xD7952B | Signal (Neigung Fahrbahn, ID: TLT_RW) ungültig | 1 |
| 0xD79534 | Botschaft (OBD Anfrage Begrenzung Drehmoment, ID: OBD_INQY_LIM_TORQ) fehlt | 1 |
| 0xD79537 | Signal (OBD Anfrage Begrenzung Drehmoment, ID: OBD_INQY_LIM_TORQ) ungültig | 1 |
| 0xD79538 | Botschaft (Powermanagement Niederspannung, ID: PWMG_LV) fehlt | 1 |
| 0xD7953B | Signal (Powermanagement Niederspannung, ID: PWMG_LV) ungültig | 1 |
| 0xD7953C | Botschaft (Radmoment Antrieb 1, ID: WMOM_DRV_1) fehlt | 1 |
| 0xD7953D | Botschaft (Radmoment Antrieb 1, ID: WMOM_DRV_1) nicht aktuell | 1 |
| 0xD7953E | Botschaft (Radmoment Antrieb 1, ID: WMOM_DRV_1) Prüfsumme falsch | 1 |
| 0xD7953F | Signal (Radmoment Antrieb 1, ID: WMOM_DRV_1) ungültig | 1 |
| 0xD79540 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 |
| 0xD79541 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) nicht aktuell | 1 |
| 0xD79542 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) Prüfsumme falsch | 1 |
| 0xD79543 | Signal (Radmoment Antrieb 4, ID: WMOM_DRV_4) ungültig | 1 |
| 0xD79544 | Botschaft (Radmoment Antrieb 5, ID: WMOM_DRV_5) fehlt | 1 |
| 0xD79545 | Botschaft (Radmoment Antrieb 5, ID: WMOM_DRV_5) nicht aktuell | 1 |
| 0xD79546 | Botschaft (Radmoment Antrieb 5, ID: WMOM_DRV_5) Prüfsumme falsch | 1 |
| 0xD79547 | Signal (Radmoment Antrieb 5, ID: WMOM_DRV_5) ungültig | 1 |
| 0xD79550 | Botschaft (Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 |
| 0xD79553 | Signal (Relativzeit BN2020, ID: RELATIVZEIT) ungültig | 1 |
| 0xD79584 | Botschaft (Spannung Bordnetz, ID: U_BN) fehlt | 1 |
| 0xD79587 | Signal (Spannung Bordnetz, ID: U_BN) ungültig | 1 |
| 0xD7958C | Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) fehlt | 1 |
| 0xD7958D | Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) nicht aktuell | 1 |
| 0xD79590 | Botschaft (Status Diagnose OBD 2 Antriebsstrang:ST_DIAG_OBD_2_PT) fehlt | 1 |
| 0xD79591 | Botschaft (Status Diagnose OBD 2 Antriebsstrang:ST_DIAG_OBD_2_PT) nicht aktuell | 1 |
| 0xD79594 | Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) fehlt | 1 |
| 0xD79595 | Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) nicht aktuell | 1 |
| 0xD79598 | Botschaft (Status Diagnose OBD Slave 1, ID: ST_DIAG_OBD_SLV_1) fehlt | 1 |
| 0xD79599 | Botschaft (Status Diagnose OBD Slave 1, ID: ST_DIAG_OBD_SLV_1) nicht aktuell | 1 |
| 0xD7959C | Botschaft (Status Diagnose OBD Slave 2, ID: ST_DIAG_OBD_SLV_2) fehlt | 1 |
| 0xD7959D | Botschaft (Status Diagnose OBD Slave 2, ID: ST_DIAG_OBD_SLV_2) nicht aktuell | 1 |
| 0xD795A0 | Botschaft (Status Diagnose OBD Slave 3, ID :ST_DIAG_OBD_SLV_3) fehlt | 1 |
| 0xD795A1 | Botschaft (Status Diagnose OBD Slave 3, ID :ST_DIAG_OBD_SLV_3) nicht aktuell | 1 |
| 0xD795A4 | Botschaft (Status Energieerzeugung, ID: ST_ENERG_GEN) fehlt | 1 |
| 0xD795A7 | Signal (Status Energieerzeugung, ID: ST_ENERG_GEN) ungültig | 1 |
| 0xD795AC | Botschaft (Status Getriebe Hybrid, ID: ST_GRB_HYB) fehlt | 1 |
| 0xD795AD | Botschaft (Status Getriebe Hybrid, ID: ST_GRB_HYB) nicht aktuell | 1 |
| 0xD795AE | Botschaft (Status Getriebe Hybrid, ID: ST_GRB_HYB) Prüfsumme falsch | 1 |
| 0xD795AF | Signal (Status Getriebe Hybrid, ID: ST_GRB_HYB) ungültig | 1 |
| 0xD795B0 | Botschaft (Status Getriebesteuergerät, ID: ST_GRB_ECU) fehlt | 1 |
| 0xD795B3 | Signal (Status Getriebesteuergerät, ID: ST_GRB_ECU) ungültig | 1 |
| 0xD795B8 | Botschaft (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) fehlt | 1 |
| 0xD795BB | Signal (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) ungültig | 1 |
| 0xD795BC | Botschaft (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) fehlt | 1 |
| 0xD795BF | Signal (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) ungültig | 1 |
| 0xD795C0 | Botschaft (Status Hochvoltspeicher 2, ID: STAT_HVSTO_2) fehlt | 1 |
| 0xD795C3 | Signal (Status Hochvoltspeicher 2, ID: STAT_HVSTO_2) ungültig | 1 |
| 0xD795C8 | Botschaft (Status Hybrid 2, ID: ST_HYB_2) fehlt | 1 |
| 0xD795CB | Signal (Status Hybrid 2, ID: ST_HYB_2) ungültig | 1 |
| 0xD795D0 | Botschaft (Status Information Verbrennungsmotor, ID: ST_INFO_CENG) fehlt | 1 |
| 0xD795D3 | Signal (Status Information Verbrennungsmotor, ID: ST_INFO_CENG) ungültig | 1 |
| 0xD795D4 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) fehlt | 1 |
| 0xD795D5 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) nicht aktuell | 1 |
| 0xD795D6 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) Prüfsumme falsch | 1 |
| 0xD795D7 | Signal (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) ungültig | 1 |
| 0xD795D8 | Botschaft (Status Ladeschnittstelle, ID: ST_CHGINTF) fehlt | 1 |
| 0xD795DB | Signal (Status Ladeschnittstelle, ID: ST_CHGINTF) ungültig | 1 |
| 0xD795DC | Botschaft (Status Ladung Hochvoltspeicher 1, ID: ST_CHG_HVSTO_1) fehlt | 1 |
| 0xD795DF | Signal (Status Ladung Hochvoltspeicher 1, ID: ST_CHG_HVSTO_1) ungültig | 1 |
| 0xD795E0 | Botschaft (Status Ladung Hochvoltspeicher 2, ID: ST_CHG_HVSTO_2) fehlt | 1 |
| 0xD795E3 | Signal (Status Ladung Hochvoltspeicher 2, ID: ST_CHG_HVSTO_2) ungültig | 1 |
| 0xD795E4 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) fehlt | 1 |
| 0xD795E5 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) nicht aktuell | 1 |
| 0xD795E6 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) Prüfsumme falsch | 1 |
| 0xD795E7 | Signal (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) ungültig | 1 |
| 0xD795E8 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 |
| 0xD795E9 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 |
| 0xD795EA | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 |
| 0xD795EB | Signal (Status Stabilisierung DSC, ID: ST_STAB_DSC) ungültig | 1 |
| 0xD795EC | Botschaft (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) fehlt | 1 |
| 0xD795EF | Signal (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) ungültig | 1 |
| 0xD795FC | Botschaft (Steuerung Crash, ID: CTR_CR) fehlt | 1 |
| 0xD795FF | Signal (Steuerung Crash, ID: CTR_CR) ungültig | 1 |
| 0xD79600 | Botschaft (Teleservice Call Status, ID: TS_CALL_ST) fehlt | 1 |
| 0xD79603 | Signal (Teleservice Call Status, ID: TS_CALL_ST) ungültig | 1 |
| 0xD79604 | Botschaft (Uhrzeit/Datum, ID: UHRZEIT_DATUM) fehlt | 1 |
| 0xD79607 | Signal (Uhrzeit/Datum, ID: UHRZEIT_DATUM) ungültig | 1 |
| 0xD79614 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) fehlt | 1 |
| 0xD79615 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) nicht aktuell | 1 |
| 0xD79616 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) Prüfsumme falsch | 1 |
| 0xD79617 | Signal (Winkel Fahrpedal, ID: ANG_ACPD) ungültig | 1 |
| 0xD7963C | Botschaft (Außentemperatur, ID: A_TEMP) fehlt | 1 |
| 0xD7963F | Signal (Außentemperatur, ID: A_TEMP) ungültig | 1 |
| 0xD79648 | Botschaft (Geschwindigkeit Fahrzeug:V_VEH) fehlt | 1 |
| 0xD79649 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 |
| 0xD7964A | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 |
| 0xD7964B | Signal (Geschwindigkeit Fahrzeug, ID: V_VEH) ungültig | 1 |
| 0xD79660 | Botschaft (Nav-Graph 2 Aktuelle Segment, ID: NAVGRPH_2_PRES_SEG) fehlt | 1 |
| 0xD79663 | Signal (Nav-Graph 2 Aktuelle Segment, ID: NAVGRPH_2_PRES_SEG) ungültig | 1 |
| 0xD79677 | Signal (Nav-Graph 2 Route Beschreibung, ID: NAVGRPH_2_RT_DESCR) ungültig | 1 |
| 0xD79678 | Botschaft (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) fehlt | 1 |
| 0xD7967B | Signal (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS)  ungültig | 1 |
| 0xD796B4 | Botschaft (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) fehlt | 1 |
| 0xD796B7 | Signal (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) ungültig | 1 |
| 0xD796C0 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, ID: RQ_TORQ_CRSH_GRB) fehlt | 1 |
| 0xD796C1 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, ID: RQ_TORQ_CRSH_GRB) nicht aktuell | 1 |
| 0xD796C2 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, ID: RQ_TORQ_CRSH_GRB) Prüfsumme falsch | 1 |
| 0xD796C3 | Signal (Anforderung Drehmoment Kurbelwelle Getriebe, ID: RQ_TORQ_CRSH_GRB) ungültig | 1 |
| 0xD796C4 | Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, ID:RQ_WMOM_PT_SUM_DRSID) fehlt | 1 |
| 0xD796C7 | Signal (Anforderung Radmoment Antriebstrang Summe FAS, ID:RQ_WMOM_PT_SUM_DRSID) ungültig | 0 |
| 0xD796C8 | Botschaft (Bordnetz Spannungswert, ID: BN_UVL) fehlt | 1 |
| 0xD796CB | Signal (Bordnetz Spannungswert, ID: BN_UVL) ungültig | 1 |
| 0xD796CC | Botschaft (Daten_lesen_IBS_LIN, ID: DT_RD_IBS_LIN) fehlt | 1 |
| 0xD796D0 | Botschaft (Drehmoment Kurbelwelle 3, ID: TORQ_CRSH_3) fehlt | 1 |
| 0xD796D3 | Signal (Drehmoment Kurbelwelle 3, ID: TORQ_CRSH_3) ungültig | 1 |
| 0xD796D8 | Botschaft (Fehler_Status_IBS_LIN, ID: ERR_ST_IBS_LIN) fehlt | 1 |
| 0xD796DC | Botschaft (Ladezustand_Status_IBS_LIN, ID: CHGCOND_ST_IBS_LIN) fehlt | 1 |
| 0xD796FC | Botschaft (Sicherheit_Speicher_lesezugriff_IBS_LIN, ID: SFY_STOR_RSACC_IBS_LIN) fehlt | 1 |
| 0xD79700 | Botschaft (Soll Daten Getriebe E-Motor 1, ID: TAR_DT_GRB_MOT_1) fehlt | 1 |
| 0xD79701 | Botschaft (Soll Daten Getriebe E-Motor 1, ID: TAR_DT_GRB_MOT_1) nicht aktuell | 1 |
| 0xD79702 | Botschaft (Soll Daten Getriebe E-Motor 1, ID: TAR_DT_GRB_MOT_1) Prüfsumme falsch | 1 |
| 0xD79703 | Signal (Soll Daten Getriebe E-Motor 1, ID: TAR_DT_GRB_MOT_1) ungültig | 1 |
| 0xD79704 | Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) fehlt | 1 |
| 0xD79705 | Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) nicht aktuell | 1 |
| 0xD79710 | Botschaft (Steuerung Kühlung Antrieb Elektrisch, ID: CTR_COOL_DRV_EL) fehlt | 1 |
| 0xD79713 | Signal (Steuerung Kühlung Antrieb Elektrisch, ID: CTR_COOL_DRV_EL) ungültig | 1 |
| 0xD79718 | Botschaft (Werte_IBS_LIN, ID: VL_IBS_LIN) fehlt | 1 |
| 0xD7972C | Botschaft (Drehmoment Antriebsstrang Hybrid 1, ID:TORQ_PT_HYB_1) fehlt | 1 |
| 0xD7972F | Signal (Drehmoment Antriebsstrang Hybrid 1, ID:TORQ_PT_HYB_1) ungültig | 1 |
| 0xD7973C | Botschaft (Temperatur_Historie_LIN, ID: TEMP_HSTY_LIN) fehlt | 1 |
| 0xD79740 | Botschaft (GPS Rohdaten:, ID: GPS_RWDT) fehlt | 1 |
| 0xD79743 | Signal (GPS Rohdaten:, ID: GPS_RWDT) ungültig | 1 |
| 0xD79744 | Botschaft (Daten Hybrid, ID: DT_HYB) fehlt | 0 |
| 0xD79745 | Botschaft (Daten Hybrid, ID: DT_HYB) nicht aktuell | 0 |
| 0xD79746 | Botschaft (Daten Hybrid, ID: DT_HYB) Prüfsumme falsch | 0 |
| 0xD7974B | Signal (Nav-Graph 2 Ereignis Profil, ID: NAVGRAPH_2_EVT_PROFIL) ungültig | 1 |
| 0xD7974F | Signal (Nav-Graph 2 Profil, ID: NAVGRAPH_2_PROFIL) ungültig | 1 |
| 0xD79758 | Botschaft (FA-CAN - Diagnose OBD Motor, ID: DIAG_OBD_ENG) fehlt | 1 |
| 0xD7975F | Signal (FA-CAN - Diagnose OBD Motor, ID: DIAG_OBD_ENG) ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_ASWDCDC_ERROR | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SHOFFPAH_ERROR | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_UOVER_ERROR | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_CDDIHM_ERROR | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMRX_ERROR | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SBNETSHCIRC_ERROR | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | DCDC_GLOBAL_ENABLE_GRUND_PERMANENT_ERROR | 0/1 | High | 0x80 | - | - | - | - |
| 0x0008 | STERRMOT1_AKS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0009 | STERRMOT1_FREILAUF | 0/1 | High | 0x0002 | - | - | - | - |
| 0x000A | STERRMOT1_EM_UEBERTEMPERATUR | 0/1 | High | 0x0040 | - | - | - | - |
| 0x000B | STERRMOT1_RESOLVER_FEHLER | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000C | STERRMOT1_HW_FEHLER | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000D | STERRMOT1_INVERTER_UEBERTEMP | 0/1 | High | 0x4000 | - | - | - | - |
| 0x000E | EWS_4_6_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0x000F | MONTAGEMODUS_AKTIV | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0010 | STEUERN_RL_SENSOR_ANLERNEN_AKTIV | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0011 | STEUERN_AKS_EMK_START_AKTIV | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0012 | STEUERN_FREILAUFMODUS_AKTIV | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0013 | HVSM_SSREQ_BWP_AKTIV | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0014 | HVSM_SSREQ_FWP_AKTIV | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0015 | VORGABE_STANDBY | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0016 | VORGABE_AKTIVER_KURZSCHLUSS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0017 | VORGABE_FREILAUF | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0018 | DFC_RBE_CDDHVMCU_HVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0019 | DFC_RBE_CDDHVMCU_HVMCURXDSBC_AKTIV | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x001A | DFC_RBE_CDDHVMCU_LVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x001B | DFC_RBE_CDDHVMCU_LVMCURXTOUT_AKTIV | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x001C | DFC_RBE_CDDHVMCU_HVMCURXTOUT_AKTIV | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x001D | DFC_RBE_CDDHVMCU_HVMCURXBUFOVF_AKTIV | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x001E | DFC_RBE_CDDHVMCU_LVMCURXDMADESTADRERR_AKTIV | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x001F | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMADESTADRERR_AKTIV | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0020 | DFC_RBE_CDDHVMCU_LVMCURXDMASRCADRERR_AKTIV | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0021 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMASRCADRERR_AKTIV | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0022 | DFC_RBE_CDDHVMCU_LVMCURXDMAERR_AKTIV | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0023 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMAERR_AKTIV | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0024 | DFC_RBE_CDDHVMCU_LVMCURXDMABUSERR_AKTIV | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0025 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMABUSERR_AKTIV | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0026 | DFC_RBE_CDDHVMCU_HVMCUTSKNOTSYNCD_AKTIV | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0027 | DFC_RBE_CDDHVMCU_HVMCUTSKPERDERR_AKTIV | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0028 | DFC_RBE_CDDHVMCU_LVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0029 | DFC_RBE_CDDHVMCU_HVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x002A | DFC_RBE_CDDHVMCU_LVMCURXFIFOOVF_AKTIV | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x002B | DFC_RBE_CDDHVMCU_LVMCUTXFIFOOVF_AKTIV | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x002C | DFC_RBE_CDDHVMCU_STPSGATERMSM_AKTIV | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x6010 | UWB_DEM_EC_DID_HVPM_STATUS_HV_STARTFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6011 | UWB_DEM_EC_DID_HVPM_STATUS_HVSTART_KOMM | 0-n | High | 0xFF | TAB_HVSTART_KOMM | - | - | - |
| 0x6012 | UWB_DEM_EC_DID_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x6013 | UWB_DEM_EC_DID_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x6014 | UWB_DEM_EC_DID_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6015 | UWB_DEM_EC_DID_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6016 | UWB_DEM_EC_DID_HVPM_I_BATT_SME | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6017 | UWB_DEM_EC_DID_HVPM_ST_CRASH_MOD | 0-n | High | 0xFF | TAB_CRASH_MOD | - | - | - |
| 0x6018 | DEM_EC_DID_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x6019 | UWB_DEM_EC_DID_HVPM_ST_CRASH_SERVERTY | 0/1 | High | 0x01 | - | - | - | - |
| 0x601A | UWB_DEM_EC_DID_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601B | UWB_DEM_EC_DID_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601C | DEM_EC_DID_HVPM_IBATT_BN | A | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x601D | UWB_DEM_EC_DID_HVPM_UBATT_BN | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601E | DEM_EC_DID_HVPM_F_DCDC1_GEN | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601F | UWB_DEM_EC_DID_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6020 | UWB_DEM_EC_DID_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6021 | UWB_DEM_EC_DID_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6022 | UWB_DEM_EC_DID_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_BETRIEBSART_SLE | - | - | - |
| 0x6023 | UWB_DEM_EC_DID_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_CHGNG_TYP_IMME | - | - | - |
| 0x6024 | UWB_DEM_EC_DID_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_ST_CHGNG | - | - | - |
| 0x6025 | UWB_DEM_EC_DID_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_ST_CHGRDI | - | - | - |
| 0x6026 | UWB_DCDC_U_GND_DIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x6027 | UWB_DCDC_R_Masseband | mOhm | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6028 | UWB_DCDC_I_LV_MAX_MASSE | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6100 | AUSSENTEMP | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6101 | MOTORTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6102 | GESCHWINDIGKEIT | km/h | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x6103 | AKTIVZEIT | min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x6104 | VKL30 | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6105 | STATUS_KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6106 | ABSTELLZEIT | min | High | unsigned int | - | 4.0 | 1.0 | 0.0 |
| 0x6107 | 30V_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6108 | ASIC_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6109 | BETRIEBSART | 0-n | High | 0xFF | TAB_BETRIEBSART | - | - | - |
| 0x610A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610B | SOLLBETRIEBSART | 0-n | High | 0xFF | TAB_SOLLBETRIEBSART | - | - | - |
| 0x610C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610D | ISTDREHZAHL | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x610E | ISTMOMENT | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x610F | STATORTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x6110 | KUEHLMITTELTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6111 | KUEHLWASSERTEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6112 | HV_SPANNUNG | V | High | unsigned int | - | 1.0 | 32.0 | 0.0 |
| 0x6113 | HV_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6114 | STATORSTROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6115 | OP_MODE | 0-n | High | 0xFF | TAB_OP_MODE | - | - | - |
| 0x6116 | VKL30_DCDC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x6117 | IKL30_DCDC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6118 | HVI_DCDC | A | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x611D | DCDC_BA_TARGET | 0-n | High | 0xFF | - | - | - | - |
| 0x6124 | KL30_SPANNUNG_VOR_QUALIFIZIERUNG | 0-n | High | 0xFFFF | - | - | - | - |
| 0x6125 | 30V_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6126 | CY327_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6127 | ANFORDERUNG_ZWISCHENKREISENTLADUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x6129 | INVERTER_VERLUSTLEISTUNG | W | High | signed int | - | 1.0 | 4.0 | 0.0 |
| 0x612A | KUHLMITTELPUMPE_DREHZAHL | 1/min | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x612B | KUHLMITTEL_DURCHFLUSS | l/h | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x612C | IGBT_DIODENTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612D | IGBT_TEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612E | HV_SPANNUNG_BATTERIE | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x612F | STATORSTROM_EFFEKTIV_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6130 | PHASE_U_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6131 | PHASE_V_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6132 | PHASE_W_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6133 | PHASE_U_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6134 | PHASE_V_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6135 | PHASE_W_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6136 | RESETINFO_CTRST_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x6137 | RESETINFO_CTGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6138 | RESETINFO_XGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6139 | RESETINFO_XLD_COPY | HEX | High | unsigned int | - | - | - | - |
| 0x613A | RESETINFO_XUSERVALUE_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x613B | RESET_HIST_BUFFER_0 | HEX | High | unsigned int | - | - | - | - |
| 0x613C | RESET_HIST_BUFFER_1 | HEX | High | unsigned int | - | - | - | - |
| 0x613D | RESET_HIST_BUFFER_2 | HEX | High | unsigned int | - | - | - | - |
| 0x613E | RESET_HIST_BUFFER_3 | HEX | High | unsigned int | - | - | - | - |
| 0x613F | RESET_HIST_BUFFER_4 | HEX | High | unsigned int | - | - | - | - |
| 0x6140 | RESET_HIST_BUFFER_5 | HEX | High | unsigned int | - | - | - | - |
| 0x6141 | RESET_HIST_BUFFER_6 | HEX | High | unsigned int | - | - | - | - |
| 0x6142 | RESET_HIST_BUFFER_7 | HEX | High | unsigned int | - | - | - | - |
| 0x6143 | DCDC_GLOBAL_ENABLE | 0/1 | High | 0x01 | - | - | - | - |
| 0x6144 | MOTOR_ANTRIEB_LUFTDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x6145 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6146 | BITMASKE_SAMMELFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6147 | MONITORING_ERR_REACT_REQ | 0/1 | High | 0x01 | - | - | - | - |
| 0x6148 | MONITORING_NO_TRQ_ALLOWED | 0/1 | High | 0x01 | - | - | - | - |
| 0x614A | MONITORING_ST_MOD_ACT_INT | HEX | High | unsigned char | - | - | - | - |
| 0x614B | MONITORING_COM_CNTR_ERR_FC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614C | MONITORING_COM_CNTR_ERR_MM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614D | MONITORING_COMRX_UDCLNK_BMWRX | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614E | MONITORING_COMRX_UHV_CMFT_CHRGN_ELECTC_ACT | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614F | MONITORING_IPHA_IQAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6150 | MONITORING_IPHA_IDAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6151 | MONITORING_IPHA_FLGL_DETD | 0/1 | High | 0x01 | - | - | - | - |
| 0x6152 | MONITORING_IPHA_IAMP_VECTLFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6153 | MONITORING_PWMST_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x6154 | MONITORING_COMINT_AGRTRELECWOOFFS | ° | High | unsigned int | - | 1.0 | 182.044444 | 0.0 |
| 0x6155 | DIAG_ACTVSC_DSMAPIDTC | HEX | High | unsigned long | - | - | - | - |
| 0x6156 | DIAG_ACTVSC_REQEMTQLIMN | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6157 | DIAG_ACTVSC_FWD_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6158 | DIAG_ACTVSC_BACK_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6159 | DIAG_ACTVSC_FUSI_FWP_LDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615A | DIAG_ACTVSC_FUSILDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615B | CRASHSEV | 0-n | High | 0xFF | TAB_CRASHSEV | - | - | - |
| 0x615C | MONITORING_FLG_ERR_REAC_REQD | 0/1 | High | 0x01 | - | - | - | - |
| 0x615D | HVMCU_ST_MOD | 0-n | High | 0xFF | TAB_HVMCU_ST_MOD | - | - | - |
| 0x615E | 15V_L_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x615F | 15V_L_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6160 | HVMCU_I_DCHA_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6161 | HVMCU_I_DCHA_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6162 | PCB_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6163 | EFUSE_I_SENSR_LOWRES | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6164 | EFUSE_I_SENSR_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6165 | EFUSE_U_SPLY_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6166 | EFUSE_U_SPLY_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6167 | ST_GATEDRV | 0-n | High | 0xFF | TAB_ST_GATEDRV | - | - | - |
| 0x6168 | ST_HVBCNTCT | 0-n | High | 0xFF | TAB_ST_HVBCNTCT | - | - | - |
| 0x6169 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x616A | VKL30_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616B | 30V_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616C | ASIC_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616D | STATORSTROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x616E | KL30_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616F | 30V_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6170 | CY327_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6171 | HV_SPANNUNG_BATTERIE_LOWRES | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x6172 | STATORSTROM_EFFEKTIV_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6173 | PHASE_U_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6174 | PHASE_V_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6175 | PHASE_W_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6176 | PHASE_U_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6177 | PHASE_V_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6178 | PHASE_W_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6179 | IGBT_DIODENTEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617A | IGBT_TEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617B | RESETINFO_MONITORING_EMM_CORE0 | HEX | High | unsigned long | - | - | - | - |
| 0x617C | RESETINFO_MONITORING_EMM_CORE1 | HEX | High | unsigned long | - | - | - | - |
| 0x617D | RESETINFO_MONITORING_EMM_CORE2 | HEX | High | unsigned long | - | - | - | - |
| 0x617E | RBA_MEMDIAG_EXTD_NRLSTREADSGNERR | HEX | High | unsigned int | - | - | - | - |
| 0x617F | RBA_MEMDIAG_NRLSTREADERR | HEX | High | unsigned int | - | - | - | - |
| 0x6180 | RBA_MEMDIAG_NRLSTWRERR | HEX | High | unsigned int | - | - | - | - |
| 0x6181 | ELUP_STOVRCURR | 0/1 | High | 0x01 | - | - | - | - |
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
| 0x700E | UWB_ELUP_UNTERDRUCKMMESSWERT | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x700F | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
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
| 0x7023 | UWB_E_ANTRIEB_1_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7035 | UWB_HV_BATTERIE_SOC | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x7036 | UWB_HV_BATTERIE_STROM_DC | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x7038 | UWB_HVSTART_ERROR | HEX | High | unsigned long | - | - | - | - |
| 0x7048 | UWB_KMV_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7049 | UWB_KMV_STROM | A | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x704A | UWB_KMV_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704B | UWB_KMV_PWM_AUSGANGPEGEL_HIGH | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704C | UWB_KMV_PWM_AUSGANGPEGEL_LOW | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704F | UWB_FUSI_BACK_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_BACK_HVSM_STATUS_AKKU | - | - | - |
| 0x7050 | UWB_FUSI_FWD_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_FWD_HVSM_STATUS_AKKU | - | - | - |
| 0x7051 | UWB_FUSI_WBD_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_WBD_STATUS_AKKU | - | - | - |
| 0x7052 | UWB_FUSI_BACK_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_DCL_STATUS | - | - | - |
| 0x7053 | UWB_FUSI_FWD_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_DCL_STATUS | - | - | - |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x7055 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x7056 | UWB_FUSI_BACK_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_LD_STATUS | - | - | - |
| 0x7057 | UWB_FUSI_FWD_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_LD_STATUS | - | - | - |
| 0x7058 | UWB_FUSI_BOSCH_STATUS | 0-n | High | 0xFFFF | TAB_FUSI_BOSCH_STATUS | - | - | - |
| 0x7059 | UWB_FUSI_I_INV_DC | A | High | signed int | - | 1800.0 | 65536.0 | 0.0 |
| 0x705A | UWB_FUSI_OPMO_CHGE | 0-n | High | 0xFF | TAB_FUSI_OPMO_CHGE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x031047 | ELUP - Control - Unterdruckaufbau nicht möglich | 0 |
| 0x031077 | ELUP - Übertemperatur | 0 |
| 0x0316B0 | Notlaufmanager - Folgefehler - CCM Zyklus | 0 |
| 0x0317D8 | FuSi - LD - Radblockiererkennung - 0-Moment angefordert | 0 |
| 0x222222 | DTC zum mappen von Entwicklungs-DFCs (DTC wird zu Serie entfernt) | 0 |
| 0x222243 | DC/DC-Wandler - Kommunikation - Interner Kurzschluss durch HW erkannt | 0 |
| 0x22224C | DC/DC-Wandler - Kommunikation - CAN Timeout Botschaften von Inverter 1 | 0 |
| 0x22224D | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler von empfangenen Botschaften erkannt | 0 |
| 0x222803 | HVPM - Laden - Degradation von Ladehardware | 0 |
| 0x222804 | HVPM - Laden - Fehler Steckererkennung | 0 |
| 0x222808 | HVPM - Start - Ausfall/Fehlverhalten des DCDC-Wandlers | 0 |
| 0x222809 | HVPM - Start - Abschaltaufforderer Kategorie 1 | 0 |
| 0x22280A | HVPM - Start - Abschaltaufforderer Kategorie 2 | 0 |
| 0x22280B | HVPM - Start - Abschaltaufforderer Kategorie 4 | 0 |
| 0x222811 | HVPM - Start - Priorisierung LK Änderung | 0 |
| 0x222836 | HVPM - Start - Signalausfall | 0 |
| 0x222F10 | Platzhalter - DOBD DTCs | 0 |
| 0x222FD1 | DC/DC-Wandler - Kommunikation - Checksummen Fehler auf interner CAN Kommunikation | 0 |
| 0x222FDB | DC/DC-Wandler - Hardware und Software nicht kompatibel | 0 |
| 0x222FDC | DC/DC-Wandler - Inverter 1 und DC/DC-SW nicht kompatibel | 0 |
| 0x223044 | Inverter 1 Verbrennernah - Interne Versorgungsspannungserzeugung - Funktionaler Check | 0 |
| 0x223045 | Steuergerät intern - SG Reset - Traps Core 0 | 0 |
| 0x223046 | Steuergerät intern - SG Reset - Traps Core 1 | 0 |
| 0x223047 | Steuergerät intern - SG Reset - Traps Core 3 | 0 |
| 0x223048 | Steuergerät intern - SG Reset - Bus Fehler (XBAR) | 0 |
| 0x223049 | Steuergerät intern - SG Reset - CDDMONHW Reset | 0 |
| 0x22304A | Steuergerät intern - SG Reset - Calibration - SoftwareReset-ID | 0 |
| 0x22304B | Steuergerät intern - SG Reset - Calibration - SoftwareReset-ID | 0 |
| 0x22304C | Steuergerät intern - SG Reset - Calibration - SoftwareReset-Group-ID | 0 |
| 0x22304D | Inverter 1 Verbrennernah - Spannungssensor - Checksumme -HvMcu | 0 |
| 0x22304E | Inverter 1 Verbrennernah - Spannungssensor - Checksumme -LvMcu | 0 |
| 0x22304F | Inverter 1 Verbrennernah - Spannungssensor - Timeout - LvMcu | 0 |
| 0x223050 | Inverter 1 Verbrennernah - Spannungssensor - Timeout - HvMcu | 0 |
| 0x223051 | Inverter 1 Verbrennernah - Spannungssensor - Überlauf 1-bit-Buffers | 0 |
| 0x223052 | Inverter 1 Verbrennernah - Spannungssensor - Check - UART Interface | 0 |
| 0x223053 | Inverter 1 Verbrennernah - Spannungssensor - Zeitstempel PMW Tasks | 0 |
| 0x223054 | Inverter 1 Verbrennernah - Spannungssensor - Plausiüberwachung - PWM Task | 0 |
| 0x223055 | Inverter 1 Verbrennernah - Spannungssensor - DMA Bus Error UART | 0 |
| 0x223056 | Inverter 1 Verbrennernah - Spannungssensor - DMA Bus Error Rx | 0 |
| 0x223057 | Inverter 1 Verbrennernah - Spannungssensor - DMA Destination Adress Error UART | 0 |
| 0x223058 | Inverter 1 Verbrennernah - Spannungssensor - DMA Destination Adress Error UART | 0 |
| 0x223059 | Inverter 1 Verbrennernah - Spannungssensor - DMA Error UART | 0 |
| 0x22305A | Inverter 1 Verbrennernah - Spannungssensor - DMA Error Rx Timestamp | 0 |
| 0x22305B | Inverter 1 Verbrennernah - Spannungssensor - DMA Source adress error UART | 0 |
| 0x22305C | Inverter 1 Verbrennernah - Spannungssensor - DMA source adress error Rx | 0 |
| 0x22305D | Inverter 1 Verbrennernah - Spannungssensor - Message Counter check LvMcu | 0 |
| 0x22305E | Inverter 1 Verbrennernah - Spannungssensor - Message Counter check HvMcu | 0 |
| 0x22305F | Inverter 1 Verbrennernah - Spannungssensor - Überlauf FIFO Puffers Rx | 0 |
| 0x223060 | Inverter 1 Verbrennernah - Spannungssensor - Überlauf FIFO Puffers Tx | 0 |
| 0x22306C | Steuergerät intern - SG Reset - Core Mpu Violation | 0 |
| 0x22306D | Steuergerät intern - SG Reset - Xbar Mpu Violation | 0 |
| 0x22306E | Steuergerät intern - SG Reset - Interrupt Fehler | 0 |
| 0x22306F | Steuergerät intern - SG Reset - Sammelfehler | 0 |
| 0x223070 | Steuergerät intern - Diagnosejob AKS Grund | 0 |
| 0x2232B8 | DC/DC-Wandler - Kommunikation - Detection of private CAN BusOff | 0 |
| 0x2232B9 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdc10 | 0 |
| 0x2232BA | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdc10 | 0 |
| 0x2232BB | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdc11 | 0 |
| 0x2232BC | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdc10 | 0 |
| 0x2232BD | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdc11 | 0 |
| 0x2232BE | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdc11 | 0 |
| 0x2232BF | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdc11 | 0 |
| 0x2232C0 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdc11 | 0 |
| 0x2232C1 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcFailure | 0 |
| 0x2232C2 | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcFailure | 0 |
| 0x2232C3 | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcFailure | 0 |
| 0x2232C4 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcFailure | 0 |
| 0x2232C5 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcRaw | 0 |
| 0x2232C6 | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcRaw | 0 |
| 0x2232C7 | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcRaw | 0 |
| 0x2232C8 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcRaw | 0 |
| 0x2232C9 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcRaw2 | 0 |
| 0x2232CA | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcRaw2 | 0 |
| 0x2232CB | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcRaw2 | 0 |
| 0x2232CC | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcRaw2 | 0 |
| 0x2232CD | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcRaw3 | 0 |
| 0x2232CE | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcRaw3 | 0 |
| 0x2232CF | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcRaw3 | 0 |
| 0x2232D0 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcRaw3 | 0 |
| 0x2232D1 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcInfo | 0 |
| 0x2232D2 | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcInfo | 0 |
| 0x22332D | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x22332E | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x22332F | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x223330 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x223331 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x223332 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x22335F | Inverter 1 Verbrennernah - ZK-Entladung - Plausibilitätsfehler - Gatewiderstandsumschaltung | 0 |
| 0x22336A | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) CAL ID Timeout | 0 |
| 0x22336B | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) CAL ID Timeout | 0 |
| 0x22336C | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) CAL ID Timeout | 0 |
| 0x22336D | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) CAL ID Timeout | 0 |
| 0x22336E | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) CAL ID Timeout | 0 |
| 0x22336F | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) CAL ID Timeout | 0 |
| 0x223370 | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) CVN Timeout | 0 |
| 0x223371 | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) CVN Timeout | 0 |
| 0x223372 | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) CVN Timeout | 0 |
| 0x223373 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) CVN Timeout | 0 |
| 0x223374 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) CVN Timeout | 0 |
| 0x223375 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) CVN Timeout | 0 |
| 0x223389 | Steuergerät intern - NVRAM - Nicht redundante abgelegte Daten | 0 |
| 0x22338E | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) CAL ID Timeout | 0 |
| 0x22338F | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) CVN Timeout | 0 |
| 0x223390 | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 |
| 0x2233A5 | FUSI - HV - Inverter 1 - Überlast Kabelbaum - AC Seite - Warnung | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_ASWDCDC_ERROR | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SHOFFPAH_ERROR | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_UOVER_ERROR | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_CDDIHM_ERROR | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMRX_ERROR | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SBNETSHCIRC_ERROR | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | DCDC_GLOBAL_ENABLE_GRUND_PERMANENT_ERROR | 0/1 | High | 0x80 | - | - | - | - |
| 0x0008 | STERRMOT1_AKS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0009 | STERRMOT1_FREILAUF | 0/1 | High | 0x0002 | - | - | - | - |
| 0x000A | STERRMOT1_EM_UEBERTEMPERATUR | 0/1 | High | 0x0040 | - | - | - | - |
| 0x000B | STERRMOT1_RESOLVER_FEHLER | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000C | STERRMOT1_HW_FEHLER | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000D | STERRMOT1_INVERTER_UEBERTEMP | 0/1 | High | 0x4000 | - | - | - | - |
| 0x000E | EWS_4_6_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0x000F | MONTAGEMODUS_AKTIV | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0010 | STEUERN_RL_SENSOR_ANLERNEN_AKTIV | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0011 | STEUERN_AKS_EMK_START_AKTIV | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0012 | STEUERN_FREILAUFMODUS_AKTIV | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0013 | HVSM_SSREQ_BWP_AKTIV | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0014 | HVSM_SSREQ_FWP_AKTIV | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0015 | VORGABE_STANDBY | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0016 | VORGABE_AKTIVER_KURZSCHLUSS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0017 | VORGABE_FREILAUF | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0018 | DFC_RBE_CDDHVMCU_HVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0019 | DFC_RBE_CDDHVMCU_HVMCURXDSBC_AKTIV | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x001A | DFC_RBE_CDDHVMCU_LVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x001B | DFC_RBE_CDDHVMCU_LVMCURXTOUT_AKTIV | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x001C | DFC_RBE_CDDHVMCU_HVMCURXTOUT_AKTIV | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x001D | DFC_RBE_CDDHVMCU_HVMCURXBUFOVF_AKTIV | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x001E | DFC_RBE_CDDHVMCU_LVMCURXDMADESTADRERR_AKTIV | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x001F | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMADESTADRERR_AKTIV | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0020 | DFC_RBE_CDDHVMCU_LVMCURXDMASRCADRERR_AKTIV | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0021 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMASRCADRERR_AKTIV | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0022 | DFC_RBE_CDDHVMCU_LVMCURXDMAERR_AKTIV | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0023 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMAERR_AKTIV | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0024 | DFC_RBE_CDDHVMCU_LVMCURXDMABUSERR_AKTIV | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0025 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMABUSERR_AKTIV | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0026 | DFC_RBE_CDDHVMCU_HVMCUTSKNOTSYNCD_AKTIV | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0027 | DFC_RBE_CDDHVMCU_HVMCUTSKPERDERR_AKTIV | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0028 | DFC_RBE_CDDHVMCU_LVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0029 | DFC_RBE_CDDHVMCU_HVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x002A | DFC_RBE_CDDHVMCU_LVMCURXFIFOOVF_AKTIV | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x002B | DFC_RBE_CDDHVMCU_LVMCUTXFIFOOVF_AKTIV | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x002C | DFC_RBE_CDDHVMCU_STPSGATERMSM_AKTIV | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x6010 | UWB_DEM_EC_DID_HVPM_STATUS_HV_STARTFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6011 | UWB_DEM_EC_DID_HVPM_STATUS_HVSTART_KOMM | 0-n | High | 0xFF | TAB_HVSTART_KOMM | - | - | - |
| 0x6012 | UWB_DEM_EC_DID_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x6013 | UWB_DEM_EC_DID_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x6014 | UWB_DEM_EC_DID_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6015 | UWB_DEM_EC_DID_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6016 | UWB_DEM_EC_DID_HVPM_I_BATT_SME | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6017 | UWB_DEM_EC_DID_HVPM_ST_CRASH_MOD | 0-n | High | 0xFF | TAB_CRASH_MOD | - | - | - |
| 0x6018 | DEM_EC_DID_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x6019 | UWB_DEM_EC_DID_HVPM_ST_CRASH_SERVERTY | 0/1 | High | 0x01 | - | - | - | - |
| 0x601A | UWB_DEM_EC_DID_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601B | UWB_DEM_EC_DID_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601C | DEM_EC_DID_HVPM_IBATT_BN | A | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x601D | UWB_DEM_EC_DID_HVPM_UBATT_BN | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x601E | DEM_EC_DID_HVPM_F_DCDC1_GEN | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x601F | UWB_DEM_EC_DID_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6020 | UWB_DEM_EC_DID_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x6021 | UWB_DEM_EC_DID_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | unsigned char | - | 2.0 | 1.0 | -254.0 |
| 0x6022 | UWB_DEM_EC_DID_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_BETRIEBSART_SLE | - | - | - |
| 0x6023 | UWB_DEM_EC_DID_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_CHGNG_TYP_IMME | - | - | - |
| 0x6024 | UWB_DEM_EC_DID_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_ST_CHGNG | - | - | - |
| 0x6025 | UWB_DEM_EC_DID_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_ST_CHGRDI | - | - | - |
| 0x6026 | UWB_DCDC_U_GND_DIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x6027 | UWB_DCDC_R_Masseband | mOhm | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6028 | UWB_DCDC_I_LV_MAX_MASSE | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6100 | AUSSENTEMP | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6101 | MOTORTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6102 | GESCHWINDIGKEIT | km/h | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x6103 | AKTIVZEIT | min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x6104 | VKL30 | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6105 | STATUS_KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6106 | ABSTELLZEIT | min | High | unsigned int | - | 4.0 | 1.0 | 0.0 |
| 0x6107 | 30V_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6108 | ASIC_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6109 | BETRIEBSART | 0-n | High | 0xFF | TAB_BETRIEBSART | - | - | - |
| 0x610A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610B | SOLLBETRIEBSART | 0-n | High | 0xFF | TAB_SOLLBETRIEBSART | - | - | - |
| 0x610C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610D | ISTDREHZAHL | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x610E | ISTMOMENT | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x610F | STATORTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x6110 | KUEHLMITTELTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6111 | KUEHLWASSERTEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6112 | HV_SPANNUNG | V | High | unsigned int | - | 1.0 | 32.0 | 0.0 |
| 0x6113 | HV_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6114 | STATORSTROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6115 | OP_MODE | 0-n | High | 0xFF | TAB_OP_MODE | - | - | - |
| 0x6116 | VKL30_DCDC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x6117 | IKL30_DCDC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6118 | HVI_DCDC | A | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x611D | DCDC_BA_TARGET | 0-n | High | 0xFF | - | - | - | - |
| 0x6124 | KL30_SPANNUNG_VOR_QUALIFIZIERUNG | 0-n | High | 0xFFFF | - | - | - | - |
| 0x6125 | 30V_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6126 | CY327_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6127 | ANFORDERUNG_ZWISCHENKREISENTLADUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x6129 | INVERTER_VERLUSTLEISTUNG | W | High | signed int | - | 1.0 | 4.0 | 0.0 |
| 0x612A | KUHLMITTELPUMPE_DREHZAHL | 1/min | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x612B | KUHLMITTEL_DURCHFLUSS | l/h | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x612C | IGBT_DIODENTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612D | IGBT_TEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612E | HV_SPANNUNG_BATTERIE | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x612F | STATORSTROM_EFFEKTIV_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6130 | PHASE_U_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6131 | PHASE_V_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6132 | PHASE_W_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6133 | PHASE_U_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6134 | PHASE_V_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6135 | PHASE_W_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6136 | RESETINFO_CTRST_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x6137 | RESETINFO_CTGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6138 | RESETINFO_XGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6139 | RESETINFO_XLD_COPY | HEX | High | unsigned int | - | - | - | - |
| 0x613A | RESETINFO_XUSERVALUE_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x613B | RESET_HIST_BUFFER_0 | HEX | High | unsigned int | - | - | - | - |
| 0x613C | RESET_HIST_BUFFER_1 | HEX | High | unsigned int | - | - | - | - |
| 0x613D | RESET_HIST_BUFFER_2 | HEX | High | unsigned int | - | - | - | - |
| 0x613E | RESET_HIST_BUFFER_3 | HEX | High | unsigned int | - | - | - | - |
| 0x613F | RESET_HIST_BUFFER_4 | HEX | High | unsigned int | - | - | - | - |
| 0x6140 | RESET_HIST_BUFFER_5 | HEX | High | unsigned int | - | - | - | - |
| 0x6141 | RESET_HIST_BUFFER_6 | HEX | High | unsigned int | - | - | - | - |
| 0x6142 | RESET_HIST_BUFFER_7 | HEX | High | unsigned int | - | - | - | - |
| 0x6143 | DCDC_GLOBAL_ENABLE | 0/1 | High | 0x01 | - | - | - | - |
| 0x6144 | MOTOR_ANTRIEB_LUFTDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x6145 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6146 | BITMASKE_SAMMELFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6147 | MONITORING_ERR_REACT_REQ | 0/1 | High | 0x01 | - | - | - | - |
| 0x6148 | MONITORING_NO_TRQ_ALLOWED | 0/1 | High | 0x01 | - | - | - | - |
| 0x614A | MONITORING_ST_MOD_ACT_INT | HEX | High | unsigned char | - | - | - | - |
| 0x614B | MONITORING_COM_CNTR_ERR_FC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614C | MONITORING_COM_CNTR_ERR_MM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614D | MONITORING_COMRX_UDCLNK_BMWRX | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614E | MONITORING_COMRX_UHV_CMFT_CHRGN_ELECTC_ACT | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614F | MONITORING_IPHA_IQAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6150 | MONITORING_IPHA_IDAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6151 | MONITORING_IPHA_FLGL_DETD | 0/1 | High | 0x01 | - | - | - | - |
| 0x6152 | MONITORING_IPHA_IAMP_VECTLFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6153 | MONITORING_PWMST_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x6154 | MONITORING_COMINT_AGRTRELECWOOFFS | ° | High | unsigned int | - | 1.0 | 182.044444 | 0.0 |
| 0x6155 | DIAG_ACTVSC_DSMAPIDTC | HEX | High | unsigned long | - | - | - | - |
| 0x6156 | DIAG_ACTVSC_REQEMTQLIMN | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6157 | DIAG_ACTVSC_FWD_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6158 | DIAG_ACTVSC_BACK_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6159 | DIAG_ACTVSC_FUSI_FWP_LDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615A | DIAG_ACTVSC_FUSILDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615B | CRASHSEV | 0-n | High | 0xFF | TAB_CRASHSEV | - | - | - |
| 0x615C | MONITORING_FLG_ERR_REAC_REQD | 0/1 | High | 0x01 | - | - | - | - |
| 0x615D | HVMCU_ST_MOD | 0-n | High | 0xFF | TAB_HVMCU_ST_MOD | - | - | - |
| 0x615E | 15V_L_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x615F | 15V_L_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6160 | HVMCU_I_DCHA_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6161 | HVMCU_I_DCHA_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6162 | PCB_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6163 | EFUSE_I_SENSR_LOWRES | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6164 | EFUSE_I_SENSR_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6165 | EFUSE_U_SPLY_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6166 | EFUSE_U_SPLY_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6167 | ST_GATEDRV | 0-n | High | 0xFF | TAB_ST_GATEDRV | - | - | - |
| 0x6168 | ST_HVBCNTCT | 0-n | High | 0xFF | TAB_ST_HVBCNTCT | - | - | - |
| 0x6169 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x616A | VKL30_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616B | 30V_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616C | ASIC_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616D | STATORSTROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x616E | KL30_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616F | 30V_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6170 | CY327_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6171 | HV_SPANNUNG_BATTERIE_LOWRES | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x6172 | STATORSTROM_EFFEKTIV_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6173 | PHASE_U_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6174 | PHASE_V_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6175 | PHASE_W_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6176 | PHASE_U_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6177 | PHASE_V_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6178 | PHASE_W_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6179 | IGBT_DIODENTEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617A | IGBT_TEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617B | RESETINFO_MONITORING_EMM_CORE0 | HEX | High | unsigned long | - | - | - | - |
| 0x617C | RESETINFO_MONITORING_EMM_CORE1 | HEX | High | unsigned long | - | - | - | - |
| 0x617D | RESETINFO_MONITORING_EMM_CORE2 | HEX | High | unsigned long | - | - | - | - |
| 0x617E | RBA_MEMDIAG_EXTD_NRLSTREADSGNERR | HEX | High | unsigned int | - | - | - | - |
| 0x617F | RBA_MEMDIAG_NRLSTREADERR | HEX | High | unsigned int | - | - | - | - |
| 0x6180 | RBA_MEMDIAG_NRLSTWRERR | HEX | High | unsigned int | - | - | - | - |
| 0x6181 | ELUP_STOVRCURR | 0/1 | High | 0x01 | - | - | - | - |
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
| 0x700E | UWB_ELUP_UNTERDRUCKMMESSWERT | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x700F | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
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
| 0x7023 | UWB_E_ANTRIEB_1_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7035 | UWB_HV_BATTERIE_SOC | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x7036 | UWB_HV_BATTERIE_STROM_DC | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x7038 | UWB_HVSTART_ERROR | HEX | High | unsigned long | - | - | - | - |
| 0x7048 | UWB_KMV_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7049 | UWB_KMV_STROM | A | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x704A | UWB_KMV_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704B | UWB_KMV_PWM_AUSGANGPEGEL_HIGH | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704C | UWB_KMV_PWM_AUSGANGPEGEL_LOW | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704F | UWB_FUSI_BACK_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_BACK_HVSM_STATUS_AKKU | - | - | - |
| 0x7050 | UWB_FUSI_FWD_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_FWD_HVSM_STATUS_AKKU | - | - | - |
| 0x7051 | UWB_FUSI_WBD_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_WBD_STATUS_AKKU | - | - | - |
| 0x7052 | UWB_FUSI_BACK_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_DCL_STATUS | - | - | - |
| 0x7053 | UWB_FUSI_FWD_DCL_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_DCL_STATUS | - | - | - |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x7055 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x7056 | UWB_FUSI_BACK_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_LD_STATUS | - | - | - |
| 0x7057 | UWB_FUSI_FWD_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_LD_STATUS | - | - | - |
| 0x7058 | UWB_FUSI_BOSCH_STATUS | 0-n | High | 0xFFFF | TAB_FUSI_BOSCH_STATUS | - | - | - |
| 0x7059 | UWB_FUSI_I_INV_DC | A | High | signed int | - | 1800.0 | 65536.0 | 0.0 |
| 0x705A | UWB_FUSI_OPMO_CHGE | 0-n | High | 0xFF | TAB_FUSI_OPMO_CHGE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ISOSAEReserved_00 |
| 0x01 | defaultSession |
| 0x02 | programmingSession |
| 0x03 | extendedDiagnosticSession |
| 0x04 | safetySystemDiagnosticSession |
| 0x40 | vehicleManufacturerSpecific_40 |
| 0x41 | codingSession |
| 0x42 | SWTSession |
| 0x43 | HDDUpdateSession |
| 0xff | ungültig |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X1721_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_XHISTBUF_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[0] |
| STAT_RESET_XHISTBUF_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[1] |
| STAT_RESET_XHISTBUF_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[2] |
| STAT_RESET_XHISTBUF_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[3] |
| STAT_RESET_XHISTBUF_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[4] |
| STAT_RESET_XHISTBUF_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[5] |
| STAT_RESET_XHISTBUF_07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[6] |
| STAT_RESET_XHISTBUF_08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[7] |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SA1_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA1_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA1_HVSM_BWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Bwp  |
| STAT_SA1_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA1_FUSI_ARAD_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA1_AKS_REASON_IN_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA1_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA1_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA1_RPM_WERT | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA1_ULINK_WERT | V | high | int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA1_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA1_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA1_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA1_ST_ERR_MOT_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA1_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA2_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA2_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA2_HVSM_BWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Bwp  |
| STAT_SA2_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA2_FUSI_ARAD_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA2_AKS_REASON_IN_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA2_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA2_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA2_RPM_WERT | 1/s | high | int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA2_ULINK_WERT | V | high | int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA2_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT__SA2_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA2_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA2_ST_ERR_MOT_1_WERT | HEX | high | int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA2_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA3_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA3_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA3_HVSM_BWP_WERT | HEX | high | int | - | - | - | - | - | Statuswort HVSM Bwp |
| STAT_SA3_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA3_FUSI_ARAD_WERT | HEX | high | int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA3_AKS_REASON_IN_WERT | HEX | high | int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA3_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA3_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA3_RPM_WERT | 1/s | high | int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA3_ULINK_WERT | V | high | int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA3_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA3_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA3_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA3_ST_ERR_MOT_1_WERT | HEX | high | int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA3_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA4_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA4_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA4_HVSM_BWP_WERT | HEX | high | int | - | - | - | - | - | Statuswort HVSM Bwp  |
| STAT_SA4_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA4_FUSI_ARAD_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA4_AKS_REASON_IN_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA4_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA4_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA4_RPM_WERT | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA4_ULINK_WERT | V | high | int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA4_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA4_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA4_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA4_ST_ERR_MOT_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA4_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA1_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code |
| STAT_SA2_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code 2 |
| STAT_SA3_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code 3 |
| STAT_SA4_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code 4 |

### RES_0X4048_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FIFO_POS_CNT_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_17_DATA | DATA | high | data[27] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_17_DATA | DATA | high | data[43] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[229] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[227] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[53] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_17_DATA | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[219] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[249] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XADE5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_KUEHLMITTELHUB_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM unterhalb der Stützstelle 1 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 1 und Stützstelle 2 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 2 und Stützstelle 3 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 3 und Stützstelle 4 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 4 und Stützstelle 5 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 5 und Stützstelle 6 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 6 und Stützstelle 7 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 7 und Stützstelle 8 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 8 und Stützstelle 9 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 9 und Stützstelle 10 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM oberhalb Stützstelle 10 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_01_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_02_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_03_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_04_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_05_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_06_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELHUB_ST_01_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_02_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_03_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_04_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_05_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_06_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_07_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_08_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_09_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_10_WERT | + | - | - | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Kühlmitteltemperatur-Hub |

### RES_0XADE6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHMOMENTHUB_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM unterhalb der Stützstelle 1 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 1 und Stützstelle 2 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 2 und Stützstelle 3 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 3 und Stützstelle 4 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 4 und Stützstelle 5 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 5 und Stützstelle 6 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 6 und Stützstelle 7 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 7 und Stützstelle 8 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 8 und Stützstelle 9 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 9 und Stützstelle 10 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM oberhalb Stützstelle 10 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTMITTELWERT_ST_01_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_02_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_03_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_04_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_05_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_06_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_07_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_08_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_09_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_10_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_11_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTHUB_ST_01_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_02_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_03_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_04_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_05_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_06_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_07_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_08_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_09_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_10_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Drehmomenthub |

### RES_0XADE7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHZAHLHUB_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM unterhalb der Stützstelle 1 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 1 und Stützstelle 2 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 2 und Stützstelle 3 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 3 und Stützstelle 4 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 4 und Stützstelle 5 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 5 und Stützstelle 6 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 6 und Stützstelle7 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 7 und Stützstelle 8 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 8 und Stützstelle 9 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 9 und Stützstelle 10 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 10 und Stützstelle 11 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_12_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 11 und Stützstelle 12 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_13_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 12 und Stützstelle 13 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_14_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 13 und Stützstelle 14 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_15_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 14 und Stützstelle 15 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_16_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM oberhalb der Stützstelle 15 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLMITTELWERT_ST_01_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_02_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_03_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_04_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_05_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_06_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_07_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_08_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLHUB_ST_01_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_02_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_03_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_04_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_05_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_06_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_07_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_08_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_09_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_10_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_11_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_12_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 12 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_13_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 13 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_14_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 14 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_15_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 15 für Drehzahlhub |

### RES_0XADEA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_REGELUNG_VM_START | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand des Verbrennungsmotors bei SOC Regelung: 0 = Nicht gestartet, 1 = Gestartet |

### RES_0XADEB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHZAHL_DREHMOMENT_01_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine unterhalb der Drehmomentstützstelle 1 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_02_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 1 und Drehmomentstützstelle 2 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_03_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 2 und Drehmomentstützstelle 3 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_04_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 3 und Drehmomentstützstelle 4 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_05_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 4 und Drehmomentstützstelle 5 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_06_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 5 und Drehmomentstützstelle 6 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_07_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 6 und Drehmomentstützstelle 7 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_08_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 7 und Drehmomentstützstelle 8 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_09_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 8 und Drehmomentstützstelle 9 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_10_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 9 und Drehmomentstützstelle 10 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_11_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 10 und Drehmomentstützstelle 11 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_12_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 11 und Drehmomentstützstelle 12 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_13_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 12 und Drehmomentstützstelle 13 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_14_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 13 und Drehmomentstützstelle 14 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_15_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 14 und Drehmomentstützstelle 15 (Drehzahlbereich je nach Job-Argument) in 5Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_16_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 15 und Drehmomentstützstelle 16 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_17_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 16 und Drehmomentstützstelle 17 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_18_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 17 und Drehmomentstützstelle 18 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_19_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 18 und Drehmomentstützstelle 19 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_20_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 19 und Drehmomentstützstelle 20 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_21_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine oberhalb Drehmomentstützstelle 21 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_ST_01_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_02_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_03_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_04_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_05_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_06_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_07_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_08_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_09_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_10_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_11_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_12_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 12 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_13_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 13 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_14_WERT | + | - | - | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 14 Drehzahlachse |
| STAT_EM_DREHMOMENT_ST_01_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_02_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_03_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_04_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_05_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_06_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_07_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_08_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_09_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_10_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_11_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_12_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 12 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_13_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 13 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_14_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 14 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_15_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 15 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_16_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 16 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_17_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 17 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_18_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 18 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_19_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 19 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_20_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 20 der Drehmomentachse |
| STAT_TEM_MD_VZ_WECHSEL_HIST_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl an Vorzeichenwechsel des Drehmoments der Traktions-Elektromaschine |

### RES_0XADED_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNGSMESSUNG_PHEV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_STATUS | - | - | - | Aktueller Mode der Leistungsmessung PHEV |

### RES_0XADF0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ROTORLAGESENSOR_STATUS_MODE_GEN3 | - | - | - | aktueller Status und Modus |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | ° | high | int | - | - | 5493164.0625 | 1.0E9 | 0.0 | EPS Offset Wert |
| STAT_ROTORLAGESENSOR_ABBRUCHGRUND | - | - | + | 0-n | high | unsigned int | - | TAB_ROTORLAGE_SENSOR_ABBRUCHGRUND | - | - | - | Abbruchgrund bei nicht erfolgreichem Anlernversuch |

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

### RES_0XADFB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSMODUS_PHEV_NR | - | + | + | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV_ERGEBNIS | - | - | - | Status Werksmodus PHEV |

### RES_0XDE00_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HVB_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Ladezustand HV Batterie |
| STAT_SOC_HVB_MIN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Startfähigkeitsgrenze Ladezustand HV Batterie |
| STAT_LADEGERAET | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladegerät erkannt (1 = erkannt / 0 = nicht erkannt) |
| STAT_FREMDLADUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fremdladung (1 = erkannt / 0 = nicht erkannt) |
| STAT_FAHRB | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrbereitschaft (1 = aktiv / 0 = nicht aktiv) |
| STAT_BA_DCDC_KOMM_NR | 0-n | high | unsigned char | - | TAB_EME_KOMM_BETRIEBSART_DCDC | 1.0 | 1.0 | 0.0 | Kommandierte Betriebsart DC/DC Wandler |
| STAT_I_DCDC_HV_OUT_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze HV-Seite |
| STAT_U_DCDC_HV_OUT_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannungsgrenze HV-Seite |
| STAT_I_DCDC_LV_OUT_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze NV-Seite |
| STAT_U_DCDC_LV_OUT_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannungsgrenze NV-Seite |
| STAT_BA_DCDC_IST_NR | 0-n | high | unsigned char | - | TAB_EME_IST_BETRIEBSART_DCDC | 1.0 | 1.0 | 0.0 | IST-Betriebsart DCDC-Wandler |
| STAT_ALS_DCDC_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Auslastung DC/DC-Wandler |
| STAT_I_DCDC_HV_WERT | A | high | int | - | - | 1.0 | 512.0 | 0.0 | Strom HV-Seite |
| STAT_U_DCDC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 32.0 | 0.0 | Spannung HV-Seite |
| STAT_I_DCDC_LV_WERT | A | high | int | - | - | 1.0 | 16.0 | 0.0 | Strom NV-Seite |
| STAT_U_DCDC_LV_WERT | V | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Spannung NV-Seite |

### RES_0XDE02_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_DC_HV_LE_WERT | V | high | int | - | - | 1.0 | 32.0 | 0.0 | HV-Zwischenkreisspannung |
| STAT_HV_READY | 0/1 | high | unsigned char | - | - | - | - | - | Freigabe HV: 0 = HV Ready nicht erteilt; 1 = HV Ready erteilt |
| STAT_HDCAC_EREQ | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Schließen Schütze HV-Batterie: 0 = Nicht angefordert; 1 = Angefordert |
| STAT_I0ANF_HVB | 0-n | high | unsigned char | - | TAB_EME_I0ANF_HVB | - | - | - | Status Nullstromanforderung |
| STAT_ANF_ENTL_ZK | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Entladung HV-Zwischenkreis durch DCDC-Wandler: 0 = Keine Anforderung; 1 = Anforderung |
| STAT_HVSTART_KOMM | 0-n | high | unsigned char | - | TAB_EME_HVSTART_KOMM | - | - | - | Ausgabe des Stateflow-Status des HVPM Startsystems |
| STAT_ANF_ENTL_EME | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Notentladung ZK: 0 = nicht aktiv; 1 = aktiv |

### RES_0XDE19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BREMSBTG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsbetätigungen |
| STAT_LAUFZEIT_ELUP_S_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Elup |
| STAT_ANLAUFE_ELUP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anläufe Elup |

### RES_0XDE1E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZE_KMSTAND_BATTTAUSCH_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei letztem ZSE-Batterie-Tausch |
| STAT_SZE_KMSTAND_BATTTAUSCH_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei vorletztem ZSE-Batterie-Tausch |
| STAT_SZE_KMSTAND_BATTTAUSCH_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei vorvorletztem ZSE-Batterie-Tausch |
| STAT_SZE_WASSERVERLUST_WERT | g/Ah | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Wasserverlust der ZSE-Batterie |
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
| STAT_SZE_SOH_THIGH_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | THIGH-Histogramm-SOH der ZSE-Batterie |
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

### RES_0XDE1F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAUSCH_ZSEBATT_REGISTRIEREN | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Keine Anforderung; 1 = Tausch ZSE-Batterie registrieren |

### RES_0XDE20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZSEBATT_SZEWERTE_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Keine Anforderung; 1 = Werte ZSE-Batterie zurücksetzen |

### RES_0XDE23_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN | - | - | - | siehe Tabelle |

### RES_0XDE2E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |
| STAT_SACHNUMMER_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Sachnummer des Steuergeräts |
| STAT_RESERVE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Reserve (keine Änderung des Werts) |
| STAT_AENDERUNGSINDEX_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Änderungsindex des Steuergeräts |

### RES_0XDE75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_HV_DCDC_WERT | V | high | unsigned int | - | - | 1.0 | 32.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_SPANNUNG_HV_UMRICHTER_WERT | V | high | unsigned int | - | - | 1.0 | 32.0 | 0.0 | HV Spannung im Umrichter |

### RES_0XDE8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_U_WERT | A | high | int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase U |
| STAT_STROM_AC_V_WERT | A | high | int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase V |
| STAT_STROM_AC_W_WERT | A | high | int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase W |

### RES_0XDE8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_UMRICHTER_WERT | °C | high | int | - | - | 1.0 | 64.0 | 0.0 | Temperatur Umrichter |
| STAT_TEMP_EMASCHINE_STATOR_WERT | °C | high | int | - | - | 1.0 | 64.0 | 0.0 | Temperatur Stator Emaschine |
| STAT_TEMP_EMASCHINE_ROTOR_WERT | °C | high | int | - | - | 1.0 | 64.0 | 0.0 | Temperatur Rotor Emaschine |
| STAT_TEMP_KUEHLMITTEL_MODELLIERT_WERT | °C | high | int | - | - | 1.0 | 64.0 | 0.0 | Modellierte Temperatur Kühlmittel |

### RES_0XDE92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_AE_ZST_AKTIV_NAKTIV | - | - | - | Ist-Betriebsart des DCDC-Wandlers |
| STAT_SPANNUNG_LV_IST_WERT | V | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Bordnetzspannung |
| STAT_AUSLASTUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung des DCDC-Wandlers |

### RES_0XDE93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_ELUP | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur des ELUP-Treibers |

### RES_0XDEA1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - aktueller Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_AKTUELL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - aktueller Vorgang |
| STAT_KM_STAND_AKTUELL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - aktueller Vorgang |
| STAT_HVB_SOC_EINSTECKEN_AKTUELL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - aktueller Vorgang |
| STAT_LADEART_NR_AKTUELL | 0-n | high | unsigned char | - | - | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - aktueller Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_AKTUELL | 0-n | high | unsigned char | - | - | - | - | - | Ursache für Ladeende - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - letzter Vorgang |
| STAT_KM_STAND_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - letzter Vorgang |
| STAT_LADEART_NR_1 | 0-n | high | unsigned char | - | - | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - letzter Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_1 | 0-n | high | unsigned char | - | - | - | - | - | Ursache für Ladeende - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - vorletzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - vorletzter Vorgang |
| STAT_KM_STAND_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - vorletzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - vorletzter Vorgang |
| STAT_LADEART_NR_2 | 0-n | high | unsigned char | - | - | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - vorletzter Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_2 | 0-n | high | unsigned char | - | - | - | - | - | Ursache für Ladeende - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A - 3.letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - 3.letzter Vorgang |
| STAT_KM_STAND_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - 3.letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - 3.letzter Vorgang |
| STAT_LADEART_NR_3 | 0-n | high | unsigned char | - | - | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - 3.letzter Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_3 | 0-n | high | unsigned char | - | - | - | - | - | Ursache für Ladeende - 3.letzter Vorgang |

### RES_0XDEA6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP1_E_MOTOR_WERT | °C | high | int | - | - | 1.0 | 64.0 | 0.0 | E-Motor Temperatur 1 |
| STAT_TEMP2_E_MOTOR_WERT | °C | high | int | - | - | 1.0 | 64.0 | 0.0 | E-Motor Temperatur 2 |

### RES_0XDEA7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 2.0 | 0.0 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | int | - | - | 1.0 | 26.77 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | int | - | - | 1.0 | 10.0 | 0.0 | SOLL Moment der E-Maschine |
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
| STAT_HFK_LADEENDE_URSACHE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Ladestecker abgezogen |
| STAT_HFK_LADEENDE_URSACHE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Netzausfall (auch 230V/110V-Stecker abgezogen) |
| STAT_HFK_LADEENDE_URSACHE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Fehler im HV-System |
| STAT_HFK_LADEENDE_URSACHE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Fehler der Ladestation |
| STAT_HFK_LADEENDE_URSACHE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Parksperrensignal ausgefallen |

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
| STAT_FAKTOR_STROMBEGRENZUNG_NR | 0-n | high | unsigned char | - | TAB_FAKTOR_STROMBEGRENZUNG | - | - | - | Nur bei AC-Laden: Rückmeldung der Strombegrenzung |
| STAT_STROMBEGRENZUNG_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_STROMBEGRENZUNG_AUSWAHL | - | - | - | Rückmeldung der AC- Strombegrenzungauswahl: Nur bei AC-Laden |
| STAT_POLY_TIM_1_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des ersten Stützpunktes |
| STAT_POLY_SOC_1_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: SOC des ersten Stützpunktes |
| STAT_POLY_TIM_2_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des zweiten Stützpunktes |
| STAT_POLY_SOC_2_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: SOC des zweiten Stützpunktes |
| STAT_POLY_TIM_3_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des dritten Stützpunktes |
| STAT_POLY_SOC_3_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: SOC des dritten Stützpunktes |
| STAT_POLY_TIM_4_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des vierten Stützpunktes |
| STAT_POLY_SOC_4_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: SOC des fünften Stützpunktes |
| STAT_POLY_TIM_5_WERT | - | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: Zeit(normiert) des fünften Stützpunktes |
| STAT_POLY_SOC_5_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Rückmeldung der SOC Unterstützpunkte: SOC des fünften Stützpunktes |
| STAT_HV_SOC_IST_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Aktueller SOC der HV-Batterie |
| STAT_LADEN_PROGNOSE_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Ladezeitprognose |
| STAT_LADEN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladespannung (nur bei AC Laden) |
| STAT_LADEN_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladestrom (nur bei AC Laden) |
| STAT_ENERGIEINHALT_IST_WERT | Ws | high | unsigned long | - | - | 3600.0 | 1.0 | 0.0 | Prognostizierte Energieinhalt in Abhängigkeit des Ladezustands und des Bordnetzverbrauches |
| STAT_LSC_TRIGGER_INHALT_NR | 0-n | high | unsigned char | - | TAB_LSC_TRIGGER_INHALT | - | - | - | Status des LSC-Triggers |
| STAT_ENERGIEINHALT_MAX_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher Energieinhalt des Hochvoltspeichers |
| STAT_LADEN_PROGNOSE_REST_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Prognostizierte Restladedauer: 0-65531 = Wertebereich; 65533 = Nicht verfügbar; 65532 = Initialisierung; 65534  = Fehler; 65535 = Signal ugültig |
| STAT_LADESTECKER_NR | 0-n | high | unsigned char | - | TAB_AE_LADESTECKER_LSC_LADEN | - | - | - | Zustand Ladestecker |

### RES_0XDEED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTR_HIST_3214_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3214 |
| STAT_ANTR_HIST_3215_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3215 |
| STAT_ANTR_HIST_3216_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3216 |
| STAT_ANTR_HIST_3217_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3217 |
| STAT_ANTR_HIST_3218_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3218 |
| STAT_ANTR_HIST_3219_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3219 |
| STAT_ANTR_HIST_3220_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3220 |
| STAT_ANTR_HIST_3221_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3221 |
| STAT_ANTR_HIST_1601_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1601 |
| STAT_ANTR_HIST_1602_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1602 |
| STAT_ANTR_HIST_1603_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1603 |
| STAT_ANTR_HIST_1604_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1604 |
| STAT_ANTR_HIST_1605_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1605 |
| STAT_ANTR_HIST_1606_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1606 |
| STAT_ANTR_HIST_32113_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32113 |
| STAT_ANTR_HIST_32114_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32114 |
| STAT_ANTR_HIST_32115_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32115 |
| STAT_ANTR_HIST_32116_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32116 |
| STAT_ANTR_HIST_32117_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32117 |
| STAT_ANTR_HIST_32118_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32118 |
| STAT_ANTR_HIST_32119_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32119 |
| STAT_ANTR_HIST_32120_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32120 |
| STAT_ANTR_HIST_32121_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32121 |
| STAT_ANTR_HIST_32122_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32122 |
| STAT_ANTR_HIST_3290_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3290 |
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
| STAT_ANTR_HIST_1613_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1613 |
| STAT_ANTR_HIST_1614_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1614 |
| STAT_ANTR_HIST_1615_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1615 |
| STAT_ANTR_HIST_1616_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1616 |
| STAT_ANTR_HIST_1617_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1617 |
| STAT_ANTR_HIST_0028_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0028 |
| STAT_ANTR_HIST_0029_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0029 |
| STAT_ANTR_HIST_0030_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0030 |
| STAT_ANTR_HIST_0031_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0031 |
| STAT_ANTR_HIST_0032_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0032 |
| STAT_ANTR_HIST_0033_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0033 |
| STAT_ANTR_HIST_0034_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0034 |
| STAT_ANTR_HIST_0035_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0035 |
| STAT_ANTR_HIST_3296_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3296 |
| STAT_ANTR_HIST_3297_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3297 |
| STAT_ANTR_HIST_3298_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3298 |
| STAT_ANTR_HIST_3299_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3299 |
| STAT_ANTR_HIST_32100_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32100 |
| STAT_ANTR_HIST_32101_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32101 |
| STAT_ANTR_HIST_32102_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32102 |
| STAT_ANTR_HIST_0036_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0036 |
| STAT_ANTR_HIST_0037_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0037 |
| STAT_ANTR_HIST_0038_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0038 |

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
| STAT_ANTR_HIST_32123_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32123; Status Vorausschau Betriebsstrategie: Aktiv |
| STAT_ANTR_HIST_32124_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32124; Status Vorausschau Betriebsstrategie: Gefälle |
| STAT_ANTR_HIST_32125_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32125; Status Vorausschau Betriebsstrategie: Langsamfahrzone |
| STAT_ANTR_HIST_32126_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32126; Status Vorausschau Betriebsstrategie: eFahr-Zone |
| STAT_ANTR_HIST_32127_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32127; Status Vorausschau Betriebsstrategie: Stau |
| STAT_ANTR_HIST_32128_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32128; Status Vorausschau Betriebsstrategie: Zielzone |
| STAT_ANTR_HIST_32129_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32129; Status Vorausschau Betriebsstrategie: Fehler |
| STAT_ANTR_HIST_32130_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32130; Status Batterieheizen 0 |
| STAT_ANTR_HIST_32131_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32131; Em Soll Betriebsart 6 |

### RES_0XDF18_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | kein Result, nur für AUTOSAR4 notwendig |

### RES_0XDF19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 1 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 2 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 3 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 4 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 5 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_6_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 6 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 7 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 8 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_9_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 9 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_10_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 10 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_11_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 11 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_12_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 12 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_13_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 13 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_14_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 14 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_15_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 15 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_16_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 16 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_17_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 17 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_18_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 18 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_19_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 19 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_20_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 20 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_21_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 21 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_22_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 22 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_23_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 23 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_24_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 24 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_25_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 25 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_26_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 26 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_27_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 27 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_28_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 28 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_29_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 29 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_30_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 30 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_31_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 31 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_32_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 32 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_33_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 33 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_34_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 34 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_35_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 35 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_36_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 36 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_37_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 37 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_38_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 38 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_39_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 39 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_40_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 40 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_41_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 41 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_42_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 42 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_43_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 43 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_44_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 44 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_45_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 45 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_46_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 46 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_47_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 47 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_48_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 48 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_49_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 49 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_50_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 50 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_51_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 51 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_52_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 52 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_53_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 53 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_54_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 54 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_55_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 55 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_56_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 56 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_57_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 57 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_58_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 58 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_59_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 59 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_60_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 60 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_61_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 61 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_62_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 62 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_63_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 63 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_64_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 64 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_65_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 65 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_66_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 66 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_67_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 67 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_68_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 68 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_69_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 69 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_70_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 70 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_71_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 71 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_72_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 72 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_73_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 73 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_74_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 74 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_75_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 75 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_76_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 76 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_77_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 77 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_78_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 78 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_79_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 79 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_80_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 80 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_81_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 81 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_82_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 82 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_83_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 83 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_84_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 84 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_85_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 85 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_86_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 86 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_87_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 87 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_88_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 88 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_89_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 89 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_90_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 90 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_91_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 91 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_92_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 92 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_93_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 93 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_94_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 94 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_95_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 95 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_96_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 96 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_97_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 97 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_98_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 98 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_99_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 99 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_100_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 100 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_101_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 101 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_102_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 102 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_103_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 103 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_104_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 104 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_105_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 105 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_106_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 106 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_107_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 107 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_108_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 108 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_109_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 109 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_110_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 110 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_111_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 111 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_112_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 112 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_113_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 113 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_114_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 114 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_115_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 115 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_116_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 116 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_117_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 117 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_118_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 118 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_119_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 119 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_120_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 120 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_121_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 121 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_122_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 122 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_123_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 123 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_124_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 124 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_125_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 125 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_126_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 126 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_127_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 127 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_128_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 128 aus Array des NVRAM-Spiegels |

### RES_0XDF42_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZSE_ENTLADUNGSZAEHLER_WERT | Ah | high | unsigned int | - | - | 0.0182 | 1.0 | 0.0 | Entladezähler IBS |
| STAT_ZSE_LADUNGSZAEHLER_WERT | Ah | high | unsigned int | - | - | 0.0182 | 1.0 | 0.0 | Ladezähler IBS |

### RES_0XDF45_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SET_AC_I_LIMIT_LOW | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_LOW | - | - | - | Einstellung Stromgrenze AC_LOW |
| STAT_SET_AC_I_LIMIT_HIGH | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_HIGH | - | - | - | Einstellung Stromgrenze AC_HIGH |
| STAT_AC_I_LIMIT_ACTIVE | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_ACTIVE | - | - | - | Zugehöriges Result des Status_Lesen Jobs zum Steuern Job wegen Autosar 4 - Dummy Bedatung |

### RES_0XDF47_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | wegen Kompatibilität zu ToolSet32 |

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

### RES_0XDF4B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | wegen Kompatibilität zu ToolSet32 |

### RES_0XDF50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_WERKLDMODUS_NR | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_SOC_LADEMODUS_WERK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### RES_0XDF51_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSWAHL_AKTION | 0/1 | high | unsigned char | - | - | - | - | - | Auswahl: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

### RES_0XDF5C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHWINGUNGSDAEMPFUNG | 0/1 | high | unsigned char | - | - | - | - | - | Auswahl Schwingungdämpfung: 0 = nicht deaktivieren; 1 = deaktivieren |

### RES_0XDF5D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_RESET | 0/1 | high | unsigned char | - | - | - | - | - | Status zum Zurücksetzen der gespeicherten Histogramme der Traktions-Elektromaschine: 0 = Zurücksetzen nicht angefordert; 1 = Zurücksetzen angefordert |

### RES_0XDFB4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKSETZEN_HISTOGRAMM_LADEGERAET | 0/1 | high | unsigned char | - | - | - | - | - | Auswahl: 0 = Keine Aktion; 1 = Rücksetzen |

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
| STAT_EM_DAUER_MAGNET_TEMP_ST_01_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_02_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_03_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_04_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_05_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_06_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_07_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_08_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_09_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Magnettemperaturen |
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
| STAT_EM_DAUER_TEMP_WK_ST_01_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_02_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_03_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_04_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_05_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_06_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_07_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_08_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_09_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_10_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Wickelkopf Temperaturen |
| STAT_EM_VERBAND_BLECH_GEHAUSE_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator |
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
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_01_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_02_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_03_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_04_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_05_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_06_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_07_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_08_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_09_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_10_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_11_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_12_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |

### RES_0XDFDA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DAUER_TEMP_COOLANT_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen unterhalb von Stützstelle 1 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen oberhalb von Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_ST_01_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_02_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_03_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_04_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_05_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_06_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_07_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_08_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_09_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Kühlmitteltemperaturen |
| STAT_EM_LEISTUNGSGRADIENT_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine unterhalb Stützstelle 1 |
| STAT_EM_LEISTUNGSGRADIENT_02_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 1 und Stützstelle 2 |
| STAT_EM_LEISTUNGSGRADIENT_03_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 2 und Stützstelle 3 |
| STAT_EM_LEISTUNGSGRADIENT_04_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 3 und Stützstelle 4 |
| STAT_EM_LEISTUNGSGRADIENT_05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 4 und Stützstelle 5 |
| STAT_EM_LEISTUNGSGRADIENT_06_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 5 und Stützstelle 6 |
| STAT_EM_LEISTUNGSGRADIENT_07_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 6 und Stützstelle 7 |
| STAT_EM_LEISTUNGSGRADIENT_08_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 7 und Stützstelle 8 |
| STAT_EM_LEISTUNGSGRADIENT_09_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 8 und Stützstelle 9 |
| STAT_EM_LEISTUNGSGRADIENT_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 9 und Stützstelle 10 |
| STAT_EM_LEISTUNGSGRADIENT_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 10 und Stützstelle 11 |
| STAT_EM_LEISTUNGSGRADIENT_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 11 und Stützstelle 12 |
| STAT_EM_LEISTUNGSGRADIENT_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 12 und Stützstelle 13 |
| STAT_EM_LEISTUNGSGRADIENT_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 13 und Stützstelle 14 |
| STAT_EM_LEISTUNGSGRADIENT_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 14 und Stützstelle 15 |
| STAT_EM_LEISTUNGSGRADIENT_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 15 und Stützstelle 16 |
| STAT_EM_LEISTUNGSGRADIENT_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 16 und Stützstelle 17 |
| STAT_EM_LEISTUNGSGRADIENT_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 17 und Stützstelle 18 |
| STAT_EM_LEISTUNGSGRADIENT_19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 18 und Stützstelle 19 |
| STAT_EM_LEISTUNGSGRADIENT_20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 19 und Stützstelle 20 |
| STAT_EM_LEISTUNGSGRADIENT_21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine oberhalb Stützstelle 20 |
| STAT_EM_LEISTUNGSGRADIENT_ST_01_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 1 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_02_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 2 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_03_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 3 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_04_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 4 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_05_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 5 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_06_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 6 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_07_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 7 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_08_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 8 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_09_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 9 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_10_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 10 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_11_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 11 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_12_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 12 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_13_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 13 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_14_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 14 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_15_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 15 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_16_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 16 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_17_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 17 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_18_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 18 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_19_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 19 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_20_WERT | - | high | int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 20 für Leistungsgradient (in W/s) |

### RES_0XF050_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS | - | - | + | 0-n | high | char | - | TAB_AKTIV | - | - | - | Status Freilauf: 0=inaktiv; 1=aktiv |

### RES_0XF098_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREISCHALTUNG_AKTIV_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des aktuellen Status der Freischaltung (0 = inaktiv; 1 = aktiv) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| RESET_REASON | 0x1721 | - | Werte fuer den Reset Grund. Die Werte sind vom Zulieferer festzulegen. DefaultWert: 0xFF. Hinweis: Dieser DID ist optional, muss aber beim Reset dann zumindest mit 0xFF befuellt werden. | - | Reset_xHistBuf_[0] | - | - | - | - | - | - | - | 22 | - | RES_0x1721_D |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| AKS_DIAG_STATUS_INFO | 0x4009 | - | Abfrage von AE-Statusbits zur Diagnose und Zuordnung von AKSen | - | FLyIn_V_e_FuSi_Fwp_LDUWB | - | - | - | - | - | - | - | 22 | - | RES_0x4009_D |
| STATUS_TYPCHECKNR | 0x4047 | STAT_TYPCHECKNR_WERT | Typprüfnummer (notwendig für Mode$9 / Infotyp 4) | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HISTORIE_ZYKLISCHE_SIGNATURPRUEFUNG | 0x4048 | - | - | - | FIFO_pos_cnt | - | - | - | - | - | - | - | 22 | - | RES_0x4048_D |
| XCP_SWITCHOVER2_READING_KALTSTARTS | 0x4895 | STAT__WERT | - | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _STATUS_BOSCH_FELDDATEN_BLOCK0 | 0x6000 | - | BOSCH_FELDDATEN_BLOCK0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6000_D |
| _STATUS_BOSCH_FELDDATEN_BLOCK1 | 0x6001 | - | BOSCH_FELDDATEN_BLOCK1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6001_D |
| _BOSCH_FELDDATEN_BLOCK2 | 0x6002 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6002_D |
| _BOSCH_FELDDATEN_BLOCK3 | 0x6003 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6003_D |
| _BOSCH_FELDDATEN_BLOCK4 | 0x6004 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6004_D |
| _BOSCH_FELDDATEN_BLOCK5 | 0x6005 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6005_D |
| _BOSCH_FELDDATEN_BLOCK6 | 0x6006 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6006_D |
| _BOSCH_FELDDATEN_BLOCK7 | 0x6007 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6007_D |
| HISTOGRAMM_EMASCHINE_TEMPERATUR_KUEHLMITTEL_HUB | 0xADE5 | - | Häufigkeit von Kühlmitteltemperaturhüben der Traktions E-Maschine, geordnet nach Kühlmitteltemperaturhub und Kühlmitteltemperaturmittelwert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE5_R | RES_0xADE5_R |
| HISTOGRAMM_EMASCHINE_DREHMOMENT_HUB | 0xADE6 | - | Abstastung der Drehmoment im 10ms-Raster Bestimmung des Drehmomenthubs und des Mittelwertes des Hubes | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE6_R | RES_0xADE6_R |
| HISTOGRAMM_EMASCHINE_DREHZAHL_HUB | 0xADE7 | - | Abstastung der Drehzahl im 10ms-Raster Bestimmung des Drehzahlhubs und des Mittelwertes des Hubes | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE7_R | RES_0xADE7_R |
| SOC_REGELUNG | 0xADEA | - | Vorgeben und Auslesen SOC Regelung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADEA_R | RES_0xADEA_R |
| LAST_HISTOGRAMM_EMASCHINE | 0xADEB | - | Auslesen Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine und Auslesen Anzahl an Vorzeichenwechsel des Drehmoments der Traktions E-Maschine zur Abschätzung der Lager-Alterung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADEB_R | RES_0xADEB_R |
| LEISTUNGSMESSUNG_PHEV | 0xADED | - | Setzen/Beenden und Auslesen des Modus Leisungsmessung für PHEVs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADED_R | RES_0xADED_R |
| EME_ROTORLAGESENSOR_ANLERNEN | 0xADF0 | - | Anlernen Rotorlagesensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF0_R |
| EME_DCDC_WANDLER | 0xADF1 | - | Steuern oder Auslesen des Status vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF1_R | RES_0xADF1_R |
| EME_HV_SYSTEM_ON_OFF | 0xADF2 | - | HV-System hoch-/runterfahren (HVPM 2013) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF2_R | RES_0xADF2_R |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4_R | RES_0xADF4_R |
| WERKSMODUS_PHEV | 0xADFB | - | Aktivieren/Deaktivieren des Werksmodus PHEV sowie Auslesen Status Werksmodus PHEV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFB_R | RES_0xADFB_R |
| EME_HVPM_DCDC_ANSTEUERUNG | 0xDE00 | - | Rückgabewerte vom HVPM für DCDC Ansteuerung (HVPM 2013) | - | CHGCOND_HVSTO | - | - | - | - | - | - | - | 22 | - | RES_0xDE00_D |
| EME_HVPM_HV_SYSTEM_ON_OFF | 0xDE02 | - | Zustand Hochvoltsystem (HVPM 2013) | - | AVL_U_HV_LINK_MOT_TRCT | - | - | - | - | - | - | - | 22 | - | RES_0xDE02_D |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | - | High | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_KL30C_SPANNUNG | 0xDE0F | STAT_KL30C_STATUS_EIN | 0=Crash nicht erkannt, 1=Crash erkannt | 0/1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ELUP | 0xDE19 | - | Anzahl der Bremsbetätigungen, Laufzeit und Anläufe der ELUP | - | Anzahl_brems_bttg_schreiben | - | - | - | - | - | - | - | 22;2E | ARG_0xDE19_D | RES_0xDE19_D |
| EME_SZE_ZSEBATTERIE | 0xDE1E | - | Ergebnisse der Speicherzustandserkennung der ZSE-Batterie auslesen | - | RTE_Km_batttausch_zse_1 | - | - | - | - | - | - | - | 22 | - | RES_0xDE1E_D |
| EME_TAUSCH_ZSEBATT_REGISTRIEREN | 0xDE1F | - | Tausch der ZSE-Batterie registrieren: 0 = keine Anforderung; 1 = ZSE-Batterie Tausch registieren | - | RTE_B_zse_batttausch | - | - | - | - | - | - | - | 22;2E | ARG_0xDE1F_D | RES_0xDE1F_D |
| EME_ZSEBATT_SZEWERTE_LOESCHEN | 0xDE20 | - | Alle Histogramme, Zähler, etc. der ZSE-Batterie zurücksetzen | - | RTE_B_zse_tabsp_loeschen | - | - | - | - | - | - | - | 22;2E | ARG_0xDE20_D | RES_0xDE20_D |
| EME_KAELTEMITTEL_ABSPERRVENTIL | 0xDE23 | - | Ansteuerung des Kältemittelabsperrventils | - | St_ctr_vent_ven_steuern | - | - | - | - | - | - | - | 22;2E | ARG_0xDE23_D | RES_0xDE23_D |
| EME_SERIENNUMMERN_BOSCH | 0xDE2E | - | Serien-, Sach- und Änderungsnummer des Steuergeräts (Bosch) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2E_D |
| AE_HV_SPANNUNG_LESEN | 0xDE75 | - | Werte aller Zwischenkreisspannungen | - | AVL_U_DCDC_CNV_HV | - | - | - | - | - | - | - | 22 | - | RES_0xDE75_D |
| AE_SPANNUNG_KLEMME30B | 0xDE88 | STAT_SPANNUNG_KL30B_WERT | aktuelle Spannung an KL30B | V | V_U_Int12V | High | unsigned int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| AE_STROM_EMASCHINE | 0xDE8A | - | Ströme E-Maschine / Umrichter | - | i_EmPhaU_sw | - | - | - | - | - | - | - | 22 | - | RES_0xDE8A_D |
| AE_TEMP_LE | 0xDE8C | - | Temperaturen Steuergerät Antriebselektronik | - | V_T_InvU | - | - | - | - | - | - | - | 22 | - | RES_0xDE8C_D |
| AE_ZUSTAND_1_DCDC | 0xDE92 | - | Status DC/DC-Wandler | - | AVL_OPMO_DCDC_CNV | - | - | - | - | - | - | - | 22 | - | RES_0xDE92_D |
| AE_ELUP | 0xDE93 | - | aktueller Zustand ELUP bzw. aktivieren/deaktivieren ELUP | - | V_e_DcmCtrlJobAct[ST_ELUP] | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE93_D | RES_0xDE93_D |
| LADEHISTORIE_LESEN | 0xDEA1 | - | Auslesen der Ladehistorie | - | Hym_Stat_Einstellungen_Ladefenster_Beginn_0 | - | - | - | - | - | - | - | 22 | - | RES_0xDEA1_D |
| AE_BUDS | 0xDEA5 | STAT_BUDS_WERT | Sensorwert des Bremsunterdrucks | hPa | AVL_LOWP_BRKFA | High | unsigned char | - | 4.0 | 1.0 | -1000.0 | - | 22 | - | - |
| AE_TEMP_EMASCHINE | 0xDEA6 | - | Wert der aktuellen Temperaturen der E-Maschine in Grad Celsius | - | V_T_EmCe | - | - | - | - | - | - | - | 22 | - | RES_0xDEA6_D |
| AE_ELEKTRISCHE_MASCHINE | 0xDEA7 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | AVL_RPM_MOT_TRCT | - | - | - | - | - | - | - | 22 | - | RES_0xDEA7_D |
| LADEHISTOGRAMM | 0xDEAE | - | Lesen von Histogramm und Zähler aller Ladevorgänge (Elektrofahrzeug und Plug-In-Hybrid) | - | Hym_Stat_Hfk_Ladestecker_Eingesteckt | - | - | - | - | - | - | - | 22 | - | RES_0xDEAE_D |
| KAELTEMITTEL_ABSPERRVENTIL_ON_OFF_PWM | 0xDEC0 | STAT_AKAV_ON_WERT | Status des Kältemittelabsperrventils; 0% = Ventil geschlossen; 100% = Ventil offen | % | Ctr_pwm_vent_ven | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_LSC_LADEN | 0xDEDE | - | Rückmeldung zum Ladeverfahrens | - | St_ladeverfahren_diag | - | - | - | - | - | - | - | 22 | - | RES_0xDEDE_D |
| KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | 0xDEE4 | STAT_AKAV_EL_DIAGNOSE_NR | Ergebnis der elektrischen Diagnose vom Kältemittelabsperrventil | 0-n | V_e_KMV_IR_tester_diag_state | High | unsigned char | TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | - | - | - | - | 22 | - | - |
| HISTOGRAMM_ANTRIEB | 0xDEED | - | Historienwerte für Antrieb | - | ly_Antr_hist_3214 | - | - | - | - | - | - | - | 22 | - | RES_0xDEED_D |
| HISTOGRAMM_DEGRADATION | 0xDEEF | - | Historienwerte Degradation | - | ly_Antr_hist_3238 | - | - | - | - | - | - | - | 22 | - | RES_0xDEEF_D |
| SUPPLIER01_NV_RAM_RESET | 0xDF18 | - | Rücksetzen von Daten aus einem definierten Bereich des NVRAM-Spiegels auf Wert 0x00 | - | Array rba_NvmZfsData_au8[n] 0 ¿ n ¿ 127 | - | - | - | - | - | - | - | 22;2E | ARG_0xDF18_D | RES_0xDF18_D |
| SUPPLIER01_NV_RAM | 0xDF19 | - | Auslesen/Schreiben auf einen definierten Bereich eines NVRAM-Spiegels eines Lieferanten | - | Array rba_NvmZfsData_au8[0] | - | - | - | - | - | - | - | 22;2E | ARG_0xDF19_D | RES_0xDF19_D |
| MASSEBAND_DIAGNOSE | 0xDF22 | STAT_WIDERSTAND_WERT | Aktueller Widerstandswert der Masseanbindung DCDC-Wandler | mOhm | RTE_BMWgnldg_r_ActGnd_ub | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| ZSE_LADUNGSZAEHLER | 0xDF42 | - | Entladungszähler/Ladungszähler Zustartbatterie | - | Qelad_ibsl | - | - | - | - | - | - | - | 22 | - | RES_0xDF42_D |
| LADESTROM_EINSTELLUNG | 0xDF45 | - | Einstellung Stromgrenzen für den Ladestrom | - | V_St_set_i_mmi_beg_low | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF45_D | RES_0xDF45_D |
| LADEHISTOGRAMM_LOESCHEN | 0xDF47 | - | Löschen des Ladehistogramms | - | Hym_St_ladehistogramm_loeschen | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF47_D | RES_0xDF47_D |
| HISTOGRAMM_LADEKOORDINATOR | 0xDF49 | - | Histogramme des Ladekoordinators | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF49_D |
| LADEHISTORIE_LOESCHEN | 0xDF4B | - | Löschen der Ladehistorie | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF4B_D | RES_0xDF4B_D |
| LADEMODUS_WERK | 0xDF50 | - | Setzen und Auslesen des Werkslademodus (Laden auf vorgegebenen SOC - HVPM2013) | - | V_e_ba_werkslademodus | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF50_D | RES_0xDF50_D |
| ELUP_DATEN_RESET | 0xDF51 | - | Zurücksetzen aller Statisikdaten der ELUP | - | V_e_ElupDatenReset | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF51_D | RES_0xDF51_D |
| SCHWINGUNGSDAEMPFUNG_DEAKTIVIEREN | 0xDF5C | - | Deaktivierung der Schwingungsdämpfung | - | Tqc_Diag_ada_disable | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF5C_D | RES_0xDF5C_D |
| LAST_HISTOGRAMM_EMASCHINE_RESET | 0xDF5D | - | Zurücksetzen der gespeicherten Lasthistogramm-Daten der Elektromaschine oder Auslesen des Zustandes vom Zurücksetzen | - | RESET_TSR_DATEN | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF5D_D | RES_0xDF5D_D |
| LADEGERAET_HISTOGRAMM_RESET | 0xDFB4 | - | Zurücksetzen der Histogramme vom Ladegerät | - | V_e_SleDiag_Histo_T_rst | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFB4_D | RES_0xDFB4_D |
| RBM_INFO | 0xDFD1 | - | RBM Informationen für die nicht kontinuierliche Diagnose | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD1_D |
| HISTOGRAMM_EMASCHINE_TEMPERATUR | 0xDFD2 | - | Temperatur Histogramme der Elektromaschine für Magnet, Wickelkopf und Pressverband | - | hist_EM_TEMP_MAGNET_RTE[0] | - | - | - | - | - | - | - | 22 | - | RES_0xDFD2_D |
| HISTOGRAMM_EMASCHINE_KUEHLMITTEL_TEMPERATUR_LEISTUNGSGRADIENT | 0xDFDA | - | Histogramm der Traktions-Elektromaschine für Kühlmitteltemperatur und Leistungsgradient: - Aufzeichnung der Kühlmittel-Temperatur der Traktions E-Maschine im 1s-Raster und Zuordnung in entsprechende Klassen nach Zeit [s]. - Abstastung von Drehzahl und Drehmoment im 10 ms-Raster Bestimmung der Leistung, Ableitung dieser und Zuordnung zu den Klassen. | - | hist_EM_TEMP_COOLANT_RTE[0] | - | - | - | - | - | - | - | 22 | - | RES_0xDFDA_D |
| AE_FREILAUF_MODUS | 0xF050 | - | Freilauf Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF050_R |
| FREI_MESSUNG_XCP | 0xF098 | - | Temporäres Freischalten Messung über XCP und Auslesen Status temporäres Freischalten Messung über XCP | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF098_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_AC_I_LIMIT_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnosejob STEUERN_LADESTROM_EINSTELLUNG inaktiv |
| 0x01 | Diagnosejob STEUERN_LADESTROM_EINSTELLUNG aktiv |
| 0xFF | Wert ungültig |

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

### TAB_AE_ZST_AKTIV_NAKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### TAB_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | NotActive |
| 0x01 | Drvinit |
| 0x02 | SensCalFW |
| 0x03 | Standby |
| 0x04 | alOffsetCalFW |
| 0x05 | alOffsetCalAcc |
| 0x06 | nCtl1 |
| 0x07 | nCtl2 |
| 0x08 | TrqCtl |
| 0x09 | UdcCtlBat |
| 0x0A | UdcCtl |
| 0x0B | nCtl3 |
| 0x0C | IsCtl |
| 0x0D | Failure |
| 0x0E | DisCharge |
| 0x0F | MoCSOP |
| 0x10 | FwCtrl |
| 0x11 | TestPulse |
| 0x12 | agOffsCalStrt |
| 0x13 | agOffsCalFinshd |
| 0x14 | psiExctCal |
| 0x15 | Prec |
| 0xFF | Wert ungültig |

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

### TAB_CRASHSEV

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Crash |
| 0x01 | Crash Schwere 1 |
| 0x02 | Crash Schwere 2 |
| 0x03 | CAN Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_CRASH_MOD

| WERT | TEXT |
| --- | --- |
| 0x05 | keine Crashabschaltung EKP |
| 0x0A | Crashabschaltung EKO |
| 0xFF | Wert ungültig |

### TAB_DCDC_BA_TARGET

| WERT | TEXT |
| --- | --- |
| 1 | Standby |
| 2 | Buck |
| 0xFF | Wert ungültig |

### TAB_DREHZAHL_EM_STUETZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Unterhalb Drehzahlstützstelle 1 |
| 0x01 | Zwischen Drehzahlstützstelle 1 und Drehzahlstützstelle 2 |
| 0x02 | Zwischen Drehzahlstützstelle 2 und Drehzahlstützstelle 3 |
| 0x03 | Zwischen Drehzahlstützstelle 3 und Drehzahlstützstelle 4 |
| 0x04 | Zwischen Drehzahlstützstelle 4 und Drehzahlstützstelle 5 |
| 0x05 | Zwischen Drehzahlstützstelle 5 und Drehzahlstützstelle 6 |
| 0x06 | Zwischen Drehzahlstützstelle 6 und Drehzahlstützstelle 7 |
| 0x07 | Zwischen Drehzahlstützstelle 7 und Drehzahlstützstelle 8 |
| 0x08 | Zwischen Drehzahlstützstelle 8 und Drehzahlstützstelle 9 |
| 0x09 | Zwischen Drehzahlstützstelle 9 und Drehzahlstützstelle 10 |
| 0x0A | Zwischen Drehzahlstützstelle 10 und Drehzahlstützstelle 11 |
| 0x0B | Zwischen Drehzahlstützstelle 11 und Drehzahlstützstelle 12 |
| 0x0C | Zwischen Drehzahlstützstelle 12 und Drehzahlstützstelle 13 |
| 0x0D | Zwischen Drehzahlstützstelle 13 und Drehzahlstützstelle 14 |
| 0x0E | Oberhalb Drehzahlstützstelle 14 |

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
| 0x08 | Nicht definiert |
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
| 0x02 | Anforderung Nullstrom ohne EV: Entladeschutzfunktion HV-Batterie |
| 0x03 | Anforderung Nullstrom ohne EV: HV-Power-Down |
| 0x04 | Anforderung Nullstrom ohne EV: Batterieloser Betrieb |

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

### TAB_FUSI_BOSCH_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | EWS 4/6 |
| 0x01 | Tester STEUERN_MONTAGEMODUS (RC 0xF043) |
| 0x02 | Tester STEUERN_ROTORLAGESENSOR_ANLERNEN (RC 0xADF0) |
| 0x03 | Tester STEUERN_AKS_EMK_START (RC 0xADF4) |
| 0x04 | Tester STEUERN_FREILAUFMODUS (RC 0xF050) |
| 0x05 | HVSM safe state req backward path |
| 0x06 | HVSM safe state req forward path |
| 0x07 | Standby |
| 0x08 | SIC (speed controller/nureg) AKS |
| 0x09 | SIC (speed controller/nureg) Freewheeling |
| 0x0A | ZF freewheeling request |
| 0x0B | ZF shut down request |
| 0xFFFF | Wert ungültig |

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

### TAB_HISTOGRAMM_DREHMOMENT_HUB

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehmomentbereich zwischen 1 und 2 Stützstelle des Drehmomentmittelwertes |
| 0x01 | Drehmomentbereich zwischen 2 und 3 Stützstelle des Drehmomentmittelwertes |
| 0x02 | Drehmomentbereich zwischen 3 und 4 Stützstelle des Drehmomentmittelwertes |
| 0x03 | Drehmomentbereich zwischen 4 und 5 Stützstelle des Drehmomentmittelwertes |
| 0x04 | Drehmomentbereich zwischen 5 und 6 Stützstelle des Drehmomentmittelwertes |
| 0x05 | Drehmomentbereich zwischen 6 und 7 Stützstelle des Drehmomentmittelwertes |
| 0x06 | Drehmomentbereich zwischen 7 und 8 Stützstelle des Drehmomentmittelwertes |
| 0x07 | Drehmomentbereich zwischen 8 und 9 Stützstelle des Drehmomentmittelwertes |
| 0x08 | Drehmomentbereich zwischen 9 und 10 Stützstelle des Drehmomentmittelwertes |
| 0x09 | Drehmomentbereich zwischen 10 und 11 Stützstelle des Drehmomentmittelwertes |

### TAB_HISTOGRAMM_EMASCHINE_DREHZAHL_HUB

| WERT | TEXT |
| --- | --- |
| 0x00 | Zwischen 1 und 2 Stützstelle des Drehzahlmittelwertes |
| 0x01 | Zwischen 2 und 3 Stützstelle des Drehzahlmittelwertes |
| 0x02 | Zwischen 3 und 4 Stützstelle des Drehzahlmittelwertes |
| 0x03 | Zwischen 4 und 5 Stützstelle des Drehzahlmittelwertes |
| 0x04 | Zwischen 5 und 6 Stützstelle des Drehzahlmittelwertes |
| 0x05 | Zwischen 6 und 7 Stützstelle des Drehzahlmittelwertes |
| 0x06 | Zwischen 7 und 8 Stützstelle des Drehzahlmittelwertes |
| 0x07 | Oberhalb der 8 Stützstelle des Drehzahlmittelwertes |

### TAB_HISTOGRAMM_KUEHLMITTELTEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kühlmitteltemperaturbereich unterhalb 1 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x01 | Kühlmitteltemperaturbereich zwischen 1 und 2 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x02 | Kühlmitteltemperaturbereich zwischen 2 und 3 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x03 | Kühlmitteltemperaturbereich zwischen 3 und 4 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x04 | Kühlmitteltemperaturbereich zwischen 4 und 5 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x05 | Kühlmitteltemperaturbereich zwischen 5 und 6 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x06 | Kühlmitteltemperaturbereich oberhalb 6 Stützstelle des Kühlmitteltemperaturmittelwertes |

### TAB_HVMCU_ST_MOD

| WERT | TEXT |
| --- | --- |
| 0x00 | NormMod |
| 0x01 | OffsCal |
| 0x02 | ActvDcha |
| 0x03 | ActvDchaDfwRvs |
| 0xFF | Wert ungültig |

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

### TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Job inaktiv |
| 0x01 | Job aktiv & Ventil öffnen |
| 0x02 | Job aktiv & Ventil schliessen |

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
| 0x01 | Lademodus Werk aktivieren |
| 0x02 | Lademodus Werk deaktivieren / Reguläres Laden |

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
| 0x04 | DC-Laden über Typ1-Combo-Ladedose |
| 0x05 | AC-Laden China |
| 0x06 | AC-Laden über Typ1-Combo-Ladedose |
| 0x07 | AC-Laden über Typ2-Combo-Ladedose |
| 0x08 | DC-Laden mit Kernpins über Typ2-Combo-Ladedose |
| 0x09 | DC-Laden mit DC-pins über Typ2-Combo-Ladedose |
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
| 0x02 | Toleranz für Abweichung zwischen dem prognostizerten und dem Ist-Ladezustand des HV-Speichers überschritten |
| 0x03 | Temporäre Aufhebung des Teilnetzbetriebs |
| 0x04 | Aufladung des Hochvoltspeichers abgeschlossen (Ladeziel erreicht oder Kunde hat beendet) |
| 0x05 | Laden abgebrochen wegen Fehler ausserhalb Fahrzeug |
| 0x06 | Laden für Ladepause unterbrochen |
| 0x07 | Zyklisches Nachladen wegen Energiemangel nicht möglich |
| 0x08 | Zyklisches Nachladen nicht möglich |
| 0x09 | Laden abgebrochen wegen Fehler innerhalb Fahrzeug |
| 0x0E | Funktion meldet Fehler, Sendefunktion in Betrieb, meldet Fehler |
| 0x0F | Signal unbefüllt, Sendefunktion nicht in Betrieb |
| 0xFF | Wert ungültig |

### TAB_OP_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Standby |
| 0x02 | BUCK |
| 0x03 | Error |
| 0xFF | Wert ungültig |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_ROTORLAGE_SENSOR_ABBRUCHGRUND

| WERT | TEXT |
| --- | --- |
| 0x0000 | Anlernroutine erfolgreich |
| 0x0001 | Abbruch wegen ungültigem Istmode |
| 0x0002 | Abbruch wegen Drehzahlbandverletzung |
| 0x0004 | Abbruch wegen Rücknahme Abgleichanforderung |
| 0x0008 | Abbruch wegen Stromsensorfehler |
| 0x0010 | Abbruch wegen Rotorlagesensorfehler |
| 0x0020 | Abbruch wegen ungültigem ermittelten Winkel (Wert außerhalb des zulässigen Bereichs) |
| 0x0040 | Abbruch wegen Fehler in Temperatur |
| 0x0080 | Abbruch wegen Überschreitung Anzahl Wiederholversuche |
| 0x0100 | Abbruch wegen Gatedriver nicht im AKS |
| 0x0200 | Abbruch wegen Überschreitung maximale Abgleichzeit (TiMaxOfCal) |
| 0xFFFF | Wert ungültig |

### TAB_SOLLBETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | TrqCtl |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0xFF | Wert ungültig |

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

### TAB_ST_GATEDRV

| WERT | TEXT |
| --- | --- |
| 0x00 | ShortCircuitBot |
| 0x01 | FreeWheel |
| 0x02 | PWMrun |
| 0x03 | Discharge |
| 0x04 | ShortCircuitTop |
| 0xFF | Wert ungültig |

### TAB_ST_HVBCNTCT

| WERT | TEXT |
| --- | --- |
| 0x00 | open |
| 0x01 | PreClsd |
| 0x02 | MaiClsd |
| 0x03 | Failr |
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

### TAB_0X610A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 |

### TAB_0X610C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D |

### TAB_0X6145

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 |

### TAB_0X6169

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C |

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
