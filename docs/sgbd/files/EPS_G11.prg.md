# EPS_G11.prg

## General

|  |  |
| --- | --- |
| File | EPS_G11.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 71 |
| Origin | BMW EF-414 Delpho |
| Revision | 6.000 |
| Author | ZF-LENKSYSTEME-GMBH EF-414 Schmid, ZF-FRIEDRICHSHAFEN-AG EF-414 |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Lenkung |  |  |
| ORIGIN | string | BMW EF-414 Delpho |  |  |
| REVISION | string | 6.000 |  |  |
| AUTHOR | string | ZF-LENKSYSTEME-GMBH EF-414 Schmid, ZF-FRIEDRICHSHAFEN-AG EF-414 |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.986 |  |  |
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
| 0x7C00 | elektrischer Durchlaufheizer Hochvoltspeicher | 1 |
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

### ARG_0XAB56_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | - | unsigned char | - | - | 16.0 | 1.0 | 0.0 | 1.0 | 5.0 | Frequenz Pendelbewegung |
| MAX_AMPLITUDE | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Maximale Amplitude Pendelbewegung |
| NUMBER_OF_CYCLES | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 50.0 | Anzahl Pendelbewegung |

### ARG_0XAB71_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | signed int | - | - | 100.0 | 1.0 | 0.0 | -100.0 | 100.0 | Sollwinkel Lenkrad (relativ oder absolut) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |
| ABSOLUT_EIN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Referenz Winkel (1 = absolutes Verfahren, 0 = relatives Verfahren) |

### ARG_0XAB72_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkel Lenkrad (beidseitig) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |

### ARG_0XDB5A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | signed int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

### ARG_0XDB6A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | Stufe | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 14.0 | Stufe Ansteuerung E-Lüfter (0 = aus) |

### AUSWERTUNG_NVSHARE_INIT

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler und CRC Check nicht abgeschlossen |
| 1 | kein Fehler und CRC Check abgeschlossen |
| 16 | Fehler und CRC Check nicht abgeschlossen |
| 17 | Fehler und CRC Check abgeschlossen |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | - | - | - | - | supplierInfo |

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
| 0x023000 | Energiesparmode aktiv | 0 | - |
| 0x023008 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02300A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02300B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02300C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF30 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482280 | Lenkgetriebe - Einfriererkennung | 0 | - |
| 0x482281 | Steuergerät intern - Leistungsdichtebegrenzung aufgetreten | 0 | - |
| 0x4822A6 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x4822A8 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x4822DF | Steuergerät intern - ROM fehlerhaft | 0 | - |
| 0x4822E0 | Steuergerät intern - NVRAM fehlerhaft | 0 | - |
| 0x4822E1 | Lenkgetriebe - Blockiererkennung | 0 | - |
| 0x4822E2 | Spannungsversorgung - Status Trennelement | 1 | - |
| 0x4822E3 | Steuergerät intern - RAM fehlerhaft | 0 | - |
| 0x4822E5 | Sensor - Rotorlage - Lenkwinkel - Lenkgetriebemitte nicht gefunden | 0 | - |
| 0x4822E7 | Steuergerät intern - Watchdog Ereignis | 0 | - |
| 0x4822E8 | Steuergerät intern - MCU Temperatur Sensor OOR | 0 | - |
| 0x4822E9 | Steuergerät intern - Softwarefehler - OBD | 0 | - |
| 0x4822EA | Steuergerät intern - ZFLS - Hardware - Defekt - OBD | 0 | - |
| 0x4822EB | Fehlerverriegelung - Lenkunterstützung dauerhaft eingeschränkt | 1 | - |
| 0x4822EC | Globales Powermanagement Reduzierung Lenkunterstützung | 1 | - |
| 0x4822EE | Steuergerät intern - Softwarefehler - Program-Flow Control | 0 | - |
| 0x4822EF | Flashen: Datenstand entspricht Anlieferzustand | 0 | - |
| 0x4822F0 | Sensor - Rotorlage - Lenkwinkel - Harware defekt_OOR | 0 | - |
| 0x4822F5 | Steuergerät intern - Geschwindigkeit - Reduzierung Lenkunterstützung | 0 | - |
| 0x4822FA | Sensor - Rotorlage - Lenkwinkel - Nachsynchronisation durchgeführt | 0 | - |
| 0x4822FB | Steuergerät intern - Abschaltung Momenten-Schnittstelle aufgrund Degradation Lenkunterstützung | 0 | - |
| 0x482305 | Oszillation erkannt | 0 | - |
| 0x482306 | Lenkgetriebe - Riemensprung erkannt | 0 | - |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 | - |
| 0x48238F | Spannungsversorgung - Lokale Überspannung Reduzierung Lenkunterstützung | 1 | - |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 1 | - |
| 0x482395 | Lenkgetriebe - Reibung zu hoch | 0 | - |
| 0x482399 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 | - |
| 0x48239C | Sensor - Lenkwinkel Index - Defekt | 0 | - |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 1 | - |
| 0x4823D2 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt | 0 | - |
| 0x4823D5 | Spannungsversorgung - Steuergeräte Reset | 1 | - |
| 0x4823E1 | Steuergerät intern - ZFLS - Hardware - Defekt | 0 | - |
| 0x4823E2 | Steuergerät intern - ZFLS - Software - Fehler | 0 | - |
| 0x4823E6 | Steuergerät intern - Powerpack Defekt | 0 | - |
| 0x4823EC | Sensor - Drehmoment - Lenkmoment - Defekt | 0 | - |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 1 | - |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 | - |
| 0x4823FD | Spannungsversorgung - Lokale Unterspannung Abschaltung Lenkunterstützung | 1 | - |
| 0xD5041F | Flexray:  Physikalischer Busfehler | 0 | - |
| 0xD50420 | FLEXRAY Controller Error | 0 | - |
| 0xD50BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD51458 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Timeout | 1 | - |
| 0xD51459 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Checksumme | 1 | - |
| 0xD5145A | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Alive | 1 | - |
| 0xD5145B | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Ungültig | 1 | - |
| 0xD5145C | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Undefiniert | 1 | - |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 | - |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 | - |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 | - |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 | - |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 | - |
| 0xD514C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 | - |
| 0xD514C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 | - |
| 0xD514C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 | - |
| 0xD514C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 | - |
| 0xD514FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 | - |
| 0xD51565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 | - |
| 0xD51587 | Signalfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Qualifier | 1 | - |
| 0xD51600 | Botschaftsfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Timeout | 1 | - |
| 0xD5160C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 | - |
| 0xD51634 | Botschaftsfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Timeout | 1 | - |
| 0xD51645 | Signalfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Ungültig | 1 | - |
| 0xD5165E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 | - |
| 0xD51678 | Botschaftsfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Checksumme | 1 | - |
| 0xD5169B | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Timeout | 1 | - |
| 0xD51793 | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Ungültig | 1 | - |
| 0xD51799 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Ungültig | 1 | - |
| 0xD517C1 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Timeout | 1 | - |
| 0xD517C2 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Checksumme | 1 | - |
| 0xD517C3 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Alive | 1 | - |
| 0xD517C5 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Ungültig | 1 | - |
| 0xD517C6 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Undefiniert | 1 | - |
| 0xD5183A | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Undefiniert | 1 | - |
| 0xD51845 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Undefiniert | 1 | - |
| 0xD51853 | Signalfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Undefiniert | 1 | - |
| 0xD51858 | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Undefiniert | 1 | - |
| 0xD5186E | Botschaftsfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Timeout | 1 | - |
| 0xD5187D | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Ungültig | 1 | - |
| 0xD51896 | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Undefiniert | 1 | - |
| 0xD518FF | Signalfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Undefiniert | 1 | - |
| 0xD51934 | Signalfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Ungültig | 1 | - |
| 0xD51966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 | - |
| 0xD51971 | Botschaftsfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Alive | 1 | - |
| 0xD519CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 | - |
| 0xD51A38 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Undefiniert | 1 | - |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 | - |
| 0xD51A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 | - |
| 0xD51A4B | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Alive | 1 | - |
| 0xD51A58 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Alive | 1 | - |
| 0xD51A8C | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Checksumme | 1 | - |
| 0xD51AD3 | Signalfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Undefiniert | 1 | - |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Timeout | 1 | - |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Checksumme | 1 | - |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Alive | 1 | - |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Timeout | 1 | - |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Checksumme | 1 | - |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Alive | 1 | - |
| 0xD52C3D | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Ungültig | 1 | - |
| 0xD52C3E | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Undefiniert | 1 | - |
| 0xD52C3F | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Ungültig | 1 | - |
| 0xD52C40 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Undefiniert | 1 | - |
| 0xD52C78 | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Qualifier | 1 | - |
| 0xD52C83 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Qualifier | 1 | - |
| 0xD52D05 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Qualifier | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x285F | URSAECHLICHER_FEHLER | HEX | High | unsigned int | - | - | - | - |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x5003 | SPANNUNG_KL_30 | V | High | unsigned char | - | 204.0 | 1000.0 | 0.0 |
| 0x5004 | ENDSTUFEN_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 80.0 |
| 0x5006 | SYSTEMZUSTAND | 0-n | High | 0xFF | TAB_SYSTEM_STATE | - | - | - |
| 0x5007 | UPTIME | ms | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5008 | FEHLERCODE | HEX | High | unsigned char | - | - | - | - |
| 0x5009 | Fehlerart | HEX | High | unsigned int | - | - | - | - |
| 0x5015 | STATUS_KLEMME_15N | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5016 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x5018 | EPS_ZAHNSTANGENHUB | mm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5019 | LENKWINKELGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x501A | HANDMOMENT | Nm | High | signed char | - | 1.0 | 5.0 | 0.0 |
| 0x501B | MOTORMOMENT | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5045 | Steuerung_Fehlerspeicher_Bordnetz_Spannung | 0-n | High | 0xFF | TAB_STEUERUNG_FEHLERSPEICHER_BORDNETZ_SPANNUNG | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x200001 | Sensor - Drehmoment - Lenkmoment - Defekt HW_STORQUE_0 | 0 | - |
| 0x200002 | Sensor - Drehmoment - Lenkmoment - Defekt HW_STORQUE_0_DRV | 0 | - |
| 0x200003 | Sensor - Drehmoment - Lenkmoment - Defekt HW_STORQUE_1 | 0 | - |
| 0x200004 | Sensor - Drehmoment - Lenkmoment - Defekt HW_STORQUE_1_DRV | 0 | - |
| 0x200005 | Sensor - Drehmoment - Lenkmoment - Defekt HW_STORQUE | 0 | - |
| 0x200006 | Sensor - Drehmoment - Lenkmoment - Defekt HW_STORQUE_DRV | 0 | - |
| 0x200007 | Sensor - Drehmoment - Lenkmoment - Defekt | 0 | - |
| 0x200008 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt - DATA_FLASH_READ | 0 | - |
| 0x200009 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt - DATA_FLASH_WRITE | 0 | - |
| 0x20000A | Steuergerät intern - ZFLS - Hardware - EEPROM defekt - DATA_FLASH_VERIFY | 0 | - |
| 0x20000B | NVM_E_WRONG_CONFIG_ID - DATA_FLASH_WRONG_LAYOUT | 0 | - |
| 0x20000C | NVM-Zugriff fehlgeschlagen - NV_SHARE | 0 | - |
| 0x20000D | Steuergerät intern - ZFLS - Hardware - Defekt - HW_COM | 0 | - |
| 0x20000E | Steuergerät intern - ZFLS - Software - Fehler - HW_WD_CHECK | 0 | - |
| 0x20000F | Steuergerät intern - ZFLS - Software - Fehler - HW_ASIC | 0 | - |
| 0x200010 | HW_LWS_ASIC | 0 | - |
| 0x200011 | Sensor - Lenkwinkel Index - Defekt - HW_INDEX | 0 | - |
| 0x200012 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_SPI_OUTPUT_STAGE_DRV | 0 | - |
| 0x200013 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_SHUT_DOWN | 0 | - |
| 0x200014 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_ADC_FREEZE | 0 | - |
| 0x200015 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_CURRENT | 0 | - |
| 0x200016 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_CURRENT_OFFSET | 0 | - |
| 0x200017 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_OUTPUT_STAGE_DRV | 0 | - |
| 0x200018 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_PWD | 0 | - |
| 0x200019 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_ROM | 0 | - |
| 0x20001A | Steuergerät intern - ZFLS - Hardware - Defekt - HW_RAM | 0 | - |
| 0x20001B | Sensor - Lenkwinkel Index - Defekt - RACKPOS_PLAUSI | 0 | - |
| 0x20001C | Reset | 0 | - |
| 0x20001D | Steuergerät intern - ZFLS - Software - Fehler - OS_MON | 0 | - |
| 0x20001E | Steuergerät intern - ZFLS - Software - Fehler - OS_MEM | 0 | - |
| 0x20001F | Steuergerät intern - Fehlerverriegelung - Lenkunterstützung dauerhaft eingeschränkt | 0 | - |
| 0x200020 | Steuergerät intern - ZFLS - Software - Fehler - RACKPOS_PLAUSI_FR | 0 | - |
| 0x200021 | Steuergerät intern - ZFLS - Software - IRED_BUS2LOW | 0 | - |
| 0x200022 | Steuergerät intern - ZFLS - Software - IRED_BUS | 0 | - |
| 0x200023 | Steuergerät intern - ZFLS - Software - Fehler - HW_FOR_TIMO | 0 | - |
| 0x200024 | Steuergerät intern - ZFLS - Software - Fehler - COMP_L1 | 0 | - |
| 0x200025 | Steuergerät intern - ZFLS - Software - Fehler - COMP_L2 | 0 | - |
| 0x200026 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung HW_CCU_RED | 0 | - |
| 0x200027 | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung UCU_RED | 0 | - |
| 0x200028 | Überspannung - HW_UCO_RED | 0 | - |
| 0x200029 | Lenkgetriebe - Rattern erkannt - CR_RED | 0 | - |
| 0x20002A | Steuergerät intern - Leistungsdichtebegrenzung aufgetreten - HW_PD_RED | 0 | - |
| 0x20002B | UUT_RED | 0 | - |
| 0x20002C | Lenkgetriebe - Reibung zu hoch - FRICTION | 0 | - |
| 0x20002D | Spannungsversorgung - Globale Überspannung - Ersatzfehler NWDTC | 0 | - |
| 0x20002E | Spannungsversorgung - Globale Unterspannung - Ersatzfehler NWDTC | 0 | - |
| 0x20002F | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung HL_UKL30_2H_OFF | 0 | - |
| 0x200030 | Spannungsversorgung - Lokale Unterspannung Abschaltung Lenkunterstützung - HL_UKL30_2L_OFF | 0 | - |
| 0x200031 | Spannungsversorgung: Wert unplausibel - HW_VOLT_PLAUSI | 0 | - |
| 0x200032 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_TEMP_OOR | 0 | - |
| 0x200033 | Steuergerät intern - ZFLS - Software - Fehler - SWGEN | 0 | - |
| 0x200034 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_BIST | 0 | - |
| 0x200035 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_ERROR_PIN | 0 | - |
| 0x200036 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_PBUS | 0 | - |
| 0x200037 | Steuergerät intern - ZFLS - Hardware - Defekt - HW_SGA | 0 | - |
| 0x200038 | Steuergerät intern - ZFLS - Software - Fehler - EH_MON | 0 | - |
| 0x200039 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt HW_RSRADIUS | 0 | - |
| 0x20003A | Sensor - Rotorlage - Lenkwinkel - Hardware defekt HW_RSDIFF | 0 | - |
| 0x20003B | Steuergerät intern - ZFLS - Software - Fehler - KFC_DATA_PROV | 0 | - |
| 0x20003C | Steuergerät intern - ZFLS - Software - Fehler - STORQUE_FR | 0 | - |
| 0x20003D | XCPFLASH | 0 | - |
| 0x20003E | Steuergerät intern - Powerpack Defekt HW_MOTOR_MON | 0 | - |
| 0x20003F | Status Trennelement | 0 | - |
| 0x200040 | SSW | 0 | - |
| 0x200041 | BLOCKED_STEERING | 0 | - |
| 0x200042 | RACKPOS_NOCALIB | 0 | - |
| 0x200043 | RACKPOS_NOINIT | 0 | - |
| 0x200044 | RACKPOS_PRECALIB | 0 | - |
| 0x200045 | RACKPOS | 0 | - |
| 0x200046 | DEBUG | 0 | - |
| 0x200047 | HW_LOW_VOLT_OFF | 0 | - |
| 0x200048 | HW_HIGH_VOLT_OFF | 0 | - |
| 0x200049 | HW_VOLT_NOSTART | 0 | - |
| 0x20004A | HW_FLOAT | 0 | - |
| 0x20004B | HW_SW_PLAUSI | 0 | - |
| 0x20004C | HW_FOC_PLAUSI | 0 | - |
| 0x20004D | HW_CURR_SENS_DEFECT | 0 | - |
| 0x20004E | HW_OUTPUT_STAGE_PHASE_SHORT_CIRCUIT | 0 | - |
| 0x20004F | HW_OUTPUT_STAGE_PHASE_OPEN | 0 | - |
| 0x200050 | HW_RPS_SENS1_DATA_ERR | 0 | - |
| 0x200051 | HW_RPS_SENS1_DEFECT | 0 | - |
| 0x200052 | HW_RPS_SENS2_DEFECT | 0 | - |
| 0x200053 | HW_ERREVT_PLAUSI | 0 | - |
| 0x200054 | HW_TEMP_DIFF | 0 | - |
| 0x200055 | HW_TLC | 0 | - |
| 0x200056 | HW_MP_RED | 0 | - |
| 0x200057 | KFC_RACKPOS_RESYNC | 0 | - |
| 0x200058 | KFC_RACKPOS_RESYNC_LIMIT | 0 | - |
| 0x200059 | RACKPOS_PLAUSI_GRAD | 0 | - |
| 0x20005A | KFC_HWL_RESET | 0 | - |
| 0x20005B | KFC_SLIPPING_BELT | 0 | - |
| 0x200094 | Steuergerät intern - Software - Info - DET | 0 | - |
| 0x2000A1 | FRSM_E_CLUSTER_STARTUP_0 | 0 | - |
| 0x2000A2 | PORT_E_WRITE_FAILURE | 0 | - |
| 0x2000A4 | PDUR_E_PDU_INSTANCE_LOST | 0 | - |
| 0x2000A6 | MCU_E_WRITE_FAILURE | 0 | - |
| 0x2000A7 | MCU_E_LVI_FAILURE | 0 | - |
| 0x2000A8 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x2000AA | FR_E_ACCESS | 0 | - |
| 0x2000AC | FRIF_E_JLE_SYNC_0 | 0 | - |
| 0x2000AD | FLS_E_WRITE_FAILED | 0 | - |
| 0x2000AE | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x2000AF | FLS_E_SET_FREQUENCY_FAILED | 0 | - |
| 0x2000B0 | FLS_E_READ_FAILED | 0 | - |
| 0x2000B1 | FLS_E_ERASE_FAILED | 0 | - |
| 0x2000B2 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x2000B3 | FEE_E_WRITE_FAILED | 0 | - |
| 0x2000B4 | FEE_E_STARTUP_FAILED | 0 | - |
| 0x2000B5 | FEE_E_READ_FAILED | 0 | - |
| 0x2000B6 | FEE_E_FORMAT_FAILED | 0 | - |
| 0x2000B7 | FrDemCtrlTestResultRef | 0 | - |
| 0x2000B8 | Diagnostic - Routine -Active | 0 | - |
| 0x2000B9 | Steuergerät intern - ZFLS - Software - Fehler - OS_MON_2 | 0 | - |
| 0x2000BA | RACKPOS_New_DTC | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5009 | Fehlerart | HEX | High | unsigned int | - | - | - | - |
| 0x6000 | mApplI_TorsionBarTorque | Nm | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0x6001 | yioDmsSin | % | High | signed int | - | 100.0 | 1024.0 | 0.0 |
| 0x6002 | yeeTorqueSensorType | HEX | High | unsigned char | - | - | - | - |
| 0x6003 | sstMdSensorState | 0-n | High | 0xFF | SSTMDSENSORSTATE_TABLE | - | - | - |
| 0x6004 | ystfTorqueRadFiltrd | % | High | unsigned int | - | 100.0 | 1024.0 | 0.0 |
| 0x6005 | AscCtrlI_GetLA_REG | HEX | High | unsigned char | - | - | - | - |
| 0x6006 | yioDmsErrorType | HEX | High | unsigned char | - | - | - | - |
| 0x6007 | sstSensorVoltageState | HEX | High | unsigned char | - | - | - | - |
| 0x6008 | yioReducedAmplitude | 0-n | High | 0xFF | REDUCEDAMPLITUED_TABLE | - | - | - |
| 0x6009 | uadVoltage1V2 | V | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x600A | uioUdNotFilt | V | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x600B | uApplI_SupplyVoltage | V | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x600C | yOsMon_RestartReason | HEX | High | unsigned long | - | - | - | - |
| 0x600D | MK_ERROR_INFO_SERVICE_ID | HEX | High | unsigned char | - | - | - | - |
| 0x600E | MK_ERROR_INFO_ERROR_ID | HEX | High | unsigned char | - | - | - | - |
| 0x600F | MK_ERROR_INFO_CULPRIT_ID | HEX | High | unsigned char | - | - | - | - |
| 0x6010 | MK_ERROR_INFO_CULPRIT_TYPE | HEX | High | unsigned char | - | - | - | - |
| 0x6011 | MK_ERROR_INFO_CULPRIT | HEX | High | unsigned char | - | - | - | - |
| 0x6012 | yOsMon_AktTask | HEX | High | unsigned char | - | - | - | - |
| 0x6013 | nApplI_RotorSpeedFilt_xds16 | rad/s | High | signed int | - | 1.0 | 50.0 | 0.0 |
| 0x6014 | mApplI_LimitedMotorTorque_xds16 | Nm | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0x6015 | icuCurrentPhaseU_IRQ | A | High | motorola float | - | 16.0 | 1.0 | 0.0 |
| 0x6016 | icuCurrentPhaseW_IRQ | A | High | motorola float | - | 16.0 | 1.0 | 0.0 |
| 0x6017 | mApplI_TorsionBarTorque_High | Nm | High | unsigned char | - | 256.0 | 1024.0 | 0.0 |
| 0x6018 | wrsCurrRotorPosIRQ_High | ° | High | unsigned char | - | 92160.0 | 4096.0 | 0.0 |
| 0x6019 | feeNvShareCrcErrorDetected_gdb \| feeIsNvShareCrcCheckFinished_gdb | 0-n | High | 0xFF | AUSWERTUNG_NVSHARE_INIT | - | - | - |
| 0x601A | yeeFirstUnusedNVShareAddr_gdu32 | HEX | High | unsigned int | - | - | - | - |
| 0x601B | ycrRomRamEccEIPC | HEX | High | unsigned long | - | - | - | - |
| 0x601C | ycrRomRamEccAddr | HEX | High | unsigned long | - | - | - | - |
| 0x601D | ycpErrorIdentLevel1 | HEX | High | unsigned int | - | - | - | - |
| 0x601E | ycpPosValueLevel1 | HEX | High | unsigned int | - | - | - | - |
| 0x601F | ycpNegValueLevel1 | HEX | High | unsigned int | - | - | - | - |
| 0x6020 | ycpUpperLimitLevel1 | HEX | High | unsigned int | - | - | - | - |
| 0x6021 | ycpLowerLimitLevel1 | HEX | High | unsigned int | - | - | - | - |
| 0x6022 | yodPWM_xau16(0) | % | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6023 | yodPWM_xau16(1) | % | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6024 | yodPWM_xau16(2) | % | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6025 | yodPWD_xau16(0) | % | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6026 | yodPWD_xau16(1) | % | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6027 | yodPWD_xau16(2) | % | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6028 | ioCSIE0TransferStatus | HEX | High | unsigned char | - | - | - | - |
| 0x6029 | zckCSIE0RetryCounter_xdu8 | HEX | High | unsigned char | - | - | - | - |
| 0x602A | zckCSIE0TotalRetryCounter_xdu32 | HEX | High | unsigned long | - | - | - | - |
| 0x602B | ioCSIE0CmdQueuePointer | HEX | High | unsigned char | - | - | - | - |
| 0x602C | ioCSIE0CmdQueueSize | HEX | High | unsigned char | - | - | - | - |
| 0x602D | ioCSIE0FirstCmdNotSend | HEX | High | unsigned int | - | - | - | - |
| 0x602E | uioRpSinMain | V | High | unsigned int | - | 1.0 | 4960.0 | 0.0 |
| 0x602F | uioRpCosMain | V | High | unsigned int | - | 1.0 | 4960.0 | 0.0 |
| 0x6030 | uioRpSin2Main | V | High | unsigned int | - | 1.0 | 4960.0 | 0.0 |
| 0x6031 | uioRpCos2Main | V | High | unsigned int | - | 1.0 | 4960.0 | 0.0 |
| 0x6032 | uadHall1 | V | High | signed char | - | 52.8 | 1023.0 | 0.0 |
| 0x6033 | uadHall2 | V | High | signed char | - | 52.8 | 1023.0 | 0.0 |
| 0x6034 | ursAsicSinOffset_xds16 | mV | High | unsigned char | - | 25.0 | 55.0 | 0.0 |
| 0x6035 | ursAsicCosOffset | mV | High | unsigned char | - | 25.0 | 55.0 | 0.0 |
| 0x6036 | xrsAsicSinAmp | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6037 | AscWdI_GetOutputState | HEX | High | unsigned char | - | - | - | - |
| 0x6038 | AscCtrlI_GetSyncFSM | HEX | High | unsigned char | - | - | - | - |
| 0x6039 | AscCtrlI_GetREQULOFinish | HEX | High | unsigned char | - | - | - | - |
| 0x603A | AscWdI_GetThreshold | HEX | High | unsigned char | - | - | - | - |
| 0x603B | AscCtrlI_GetSyncRDT_REG | HEX | High | unsigned char | - | - | - | - |
| 0x603C | AscCtrlI_GetSyncEHR_REG | HEX | High | unsigned char | - | - | - | - |
| 0x603D | AscCtrlI_GetDIA1_REG | HEX | High | unsigned char | - | - | - | - |
| 0x603E | AscCtrlI_GetDIA2_REG | HEX | High | unsigned char | - | - | - | - |
| 0x603F | AscCtrlI_GetDIA3_REG | HEX | High | unsigned char | - | - | - | - |
| 0x6040 | AscCtrlI_GetDIA4_REG | HEX | High | unsigned char | - | - | - | - |
| 0x6041 | AscCtrlI_GetDIA5_REG | HEX | High | unsigned char | - | - | - | - |
| 0x6042 | cApplI_DbcTempU_xds16 | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6043 | cApplI_DbcTempV_xds16 | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6044 | cApplI_DbcTempW_xds16 | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6045 | ycpErrorIdentLevel2_xdu16 | HEX | High | unsigned int | - | - | - | - |
| 0x6046 | ycpConversionFactor | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6047 | lApplI_RackPosition(14) | mm | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x6048 | fAscSensI_RotationsCounterStatusValid | HEX | High | unsigned char | - | - | - | - |
| 0x6049 | yeeValidCounterSave_xdu8 | HEX | High | unsigned char | - | - | - | - |
| 0x604A | fAscSensI_CriticalUnderVolt | HEX | High | unsigned char | - | - | - | - |
| 0x604B | fAscSensI_RotationCounterErr | HEX | High | unsigned char | - | - | - | - |
| 0x604C | zAscSensI_RotationCounterSin | HEX | High | unsigned int | - | - | - | - |
| 0x604D | zAscSensI_RotationCounterCos | HEX | High | unsigned int | - | - | - | - |
| 0x604E | MK_protectionInfo->culprit->regs->pc | HEX | High | unsigned long | - | - | - | - |
| 0x604F | VMADR | HEX | High | unsigned long | - | - | - | - |
| 0x6050 | MK_protectionInfo->memoryPartition | HEX | High | unsigned char | - | - | - | - |
| 0x6051 | MK_protectionInfo->objectType | HEX | High | unsigned char | - | - | - | - |
| 0x6052 | ASIC_iLWS_Errorflag | HEX | High | unsigned char | - | - | - | - |
| 0x6053 | mApplI_TorsionBarTorque(14) | Nm | High | signed int | - | 1.0 | 256.0 | 0.0 |
| 0x6054 | mAppli_LimitedMotorTorque 14 | Nm | High | signed int | - | 1.0 | 256.0 | 0.0 |
| 0x6055 | nApplI_RotorSpeedFilt(14) | rad/s | High | signed int | - | 4.0 | 1.0 | 0.0 |
| 0x6056 | BackgroundStatus | HEX | High | unsigned int | - | - | - | - |
| 0x6057 | OperationStatus | HEX | High | unsigned char | - | - | - | - |
| 0x6058 | AccessStatus | HEX | High | unsigned char | - | - | - | - |
| 0x6059 | BlockBitCoded | HEX | High | unsigned long | - | - | - | - |
| 0x6060 | Status | HEX | High | unsigned int | - | - | - | - |
| 0x6061 | DET_ENTRY_APIID | HEX | High | unsigned char | - | - | - | - |
| 0x6062 | DET_ENTRY_ERRORID | HEX | High | unsigned char | - | - | - | - |
| 0x6063 | DET_ENTRY_INSTANCEID | HEX | High | unsigned char | - | - | - | - |
| 0x6064 | DET_ENTRY_MODULEID | HEX | High | unsigned int | - | - | - | - |
| 0x61A8 | PANIC_REASON | HEX | High | unsigned char | - | - | - | - |
| 0x61A9 | ACTIVE_TASKS | HEX | High | unsigned int | - | - | - | - |
| 0x61AA | TASK_FLAGS | HEX | High | unsigned char | - | - | - | - |
| 0x61AB | EVENT_SET | HEX | High | unsigned long | - | - | - | - |
| 0x61AC | MK_ERR_PARA0 | HEX | High | unsigned long | - | - | - | - |
| 0x61AD | MK_ERR_PARA1 | HEX | High | unsigned long | - | - | - | - |
| 0x61AE | MK_ERR_PARA2 | HEX | High | unsigned long | - | - | - | - |
| 0x61AF | Tester ID | HEX | High | unsigned int | - | - | - | - |
| 0x61B0 | SYS_COUNTER | HEX | High | unsigned char | - | - | - | - |
| 0x61B1 | OS_COUNT | HEX | High | unsigned long | - | - | - | - |
| 0x61B2 | STEER_FLANK | HEX | High | unsigned char | - | - | - | - |
| 0x61B3 | wrsIntSteeringAngle | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
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

### REDUCEDAMPLITUED_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | Normale Amplitude |
| 1 | Reduzierte Amplitude |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

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

### RES_0XAB56_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_PENDELN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_LENKRADWINKEL_WERT | - | - | + | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Lenkradwinkel |
| STAT_SENSOR_ZUSTAND_NR | - | - | + | 0-n | - | signed char | - | TAB_EPS_WERT | 1.0 | 1.0 | 0.0 | Zustand Sensor Ritzelwinkelsensor |

### RES_0XAB71_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_VERFAHREN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB72_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XD6A6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Temperaturbereich  1, (< Abschaltschwelle - 10 °C), Zähltakt 60s |
| STAT_ZAEHLER_MIDDLE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Temperaturbereich 2, (>= Temp1 UND <Abschaltschwelle °C), Zähltakt 60s |
| STAT_ZAEHLER_HIGH_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Temperaturbereich 3, (>= Abschaltschwelle ), Zähltakt 60s |
| STAT_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Maximaler Temperaturwert, Messtakt 100ms |

### RES_0XD6A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_USP1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 1, (< 6V), Messtakt 1ms |
| STAT_ZAEHLER_USP2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 2, (>=6 V UND < 6,8V), Messtakt 1ms |
| STAT_ZAEHLER_USP3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 3, (>= 6,8V UND < 8V), Messtakt 1ms |
| STAT_ZAEHLER_USP4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 4, (>=8V), Messtakt 1ms |

### RES_0XD6A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPG_KLASSE_U1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | < 6,8V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 6,8V UND <9V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >=9V UND < 11V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 11V UND < 18V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 18V UND < 27V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 27V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannung unterster Wert, Messtakt: halbe Filterzeit ms |
| STAT_SPG_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannung oberster Wert, Messtakt: halbe Filterzeit ms |

### RES_0XD6A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_KLASSE_I1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | > 0,5*Imax UND <= 0,75*Imax, Messtakt: halbe Filterzeit ms |
| STAT_STROM_KLASSE_I2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | > 0,75*Imax UND <= Imax, Messtakt: halbe Filterzeit ms |
| STAT_STROM_KLASSE_I3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | > Imax, Messtakt: halbe Filterzeit ms |
| STAT_STROM_MIN_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | -100.0 | Strom unterster Wert (Rückspeisung), Messtakt: 10 ms |
| STAT_STROM_MAX_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strom oberster Wert, Messtakt: 10 ms |

### RES_0XD6AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LINKS_KURZ_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | links, kleiner als 100ms |
| STAT_ZAEHLER_LINKS_MITTEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | links, 101-1000ms |
| STAT_ZAEHLER_LINKS_LANG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | links, größer gleich 1 Sekunde |
| STAT_ZAEHLER_RECHTS_KURZ_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | rechts, kleiner als 100ms |
| STAT_ZAEHLER_RECHTS_MITTEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | rechts, 101-1000ms |
| STAT_ZAEHLER_RECHTS_LANG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | rechts, größer gleich 1 Sekunde |

### RES_0XD6AF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAHLER_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler untere Lenkleistung (0  -  600W) (P1, t5) |
| STAT_ZAHLER_MIDDLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler mittlere Lenkleistung (601  -  900W) (P2, t5) |
| STAT_ZAHLER_EXTENDED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler gehobene Lenkleistung (901W - 1150W)   (P3,  t5) |
| STAT_ZAHLER_UPPER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler obere Lenkleistung (1151W - 1400W) (P4, t5) |
| STAT_ZAHLER_HIGH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler max Lenkleistung (mehr als 1401W) (P5, t5) |

### RES_0XD6B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler untere Lenkgeschwindigkeitsschwelle (0 - 300°/s)  |
| STAT_ZAEHLER_MIDDLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler mittlere Lenkgeschwindigkeitsschwelle (301 - 600°/s)  |
| STAT_ZAEHLER_HIGH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler obere Lenkgeschwindigkeitsschwelle (mehr als 601 °/s) |

### RES_0XDB57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_WERT | 1.0 | 1.0 | 0.0 | Zustand Sensor Ritzelwinkelsensor |

### RES_0XDB59_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDANSCHLAG_LINKS_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAG_RECHTS_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAEGE_GELERNT_NR | 0-n | - | unsigned char | - | TAB_EPS_ENDANSCHLAEGE_GELERNT | 1.0 | 1.0 | 0.0 | Status Endanschlaege und Offset |

### RES_0XDB5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

### RES_0XDB6E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUB_ZAHNSTANGE_WERT | mm | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Zahnstangenhub |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_WERT | 1.0 | 1.0 | 0.0 | Zustand Sensor |
| STAT_GESCHWINDIGKEIT_ZAHNSTANGE_WERT | m/s | - | signed int | - | - | 1.0 | 10000.0 | 0.0 | Zahnstangengeschwindigkeit |
| STAT_HUB_ZAHNSTANGE_GESAMT_WERT | mm | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gesamtzahnstangenhub |

### RES_0XDB99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_WERT | Nm | - | signed int | - | - | 1.0 | 128.0 | 0.0 | Aktuelles Moment |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Sensor Lenkmoment |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| EPS_PENDELN | 0xAB56 | - | Start und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56_R | RES_0xAB56_R |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Start Reset Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C_R |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71_R | RES_0xAB71_R |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72_R | RES_0xAB72_R |
| STATUS_TEMPERATUR_MW | 0xD6A6 | - | Statistikwerte der Steuergeräte Temperatur (Endstufe/Leistungsteil) (Abschaltschwelle EPS: 105, HSR: 95°, ASA: 85°) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A6_D |
| STATUS_USP_MSA_MW | 0xD6A7 | - | Unterspannung während MSA-Start MSA-Minimalspannung: Counter darf nur bei aktivem MSA-Start zählen; Es ist nur ein Zählvorgang für jeden MSA-Start zulässig, der niedrigste Wert wird gezählt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A7_D |
| STATUS_SPANNUNG_MW | 0xD6A8 | - | Statistikzähler Spannung Eingangsgröße: gefiltete Spannung (100 ms Filterzeit um Kurzzeitpeaks herauszufiltern) außerhalb Motorstart (Kalt- und Warmstart) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A8_D |
| STATUS_STROM_MW | 0xD6A9 | - | Statistikzähler Strom | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A9_D |
| STATUS_MLW_INIT_MW | 0xD6AA | STAT_ZAEHLER_MLW_INIT_WERT | Zähler der Initialisierungsläufe im Kundenbetrieb (keine Werks/HO-Inbetriebnahme) | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ZAEHLER_LENKANSCHLAG_MW | 0xD6AE | - | Zähler Lenkungs-Endanschläge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6AE_D |
| STATUS_ZAEHLER_LENKLEISTUNG_MW | 0xD6AF | - | Lenkleistungsbedarf (jeweils Mittelwert über 100ms) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6AF_D |
| EPS_FEHLERVERRIEGELUNG_FEHLERZAEHLER | 0xD6B1 | STAT_ANZAHL_FEHLERVERRIEGELUNGEN_WERT | Liefert die Anzahl der Fehlerverriegelungen zurück | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ZAEHLER_LENKGESCHWINDIGKEIT_MW | 0xD6B2 | - | Zahnstangenhub pro Zeit Zähltakt 60s | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6B2_D |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57_D |
| EPS_INIT | 0xDB58 | STAT_EPS_INIT_NR | Status EPS Initialisierung | 0-n | - | - | signed char | TAB_INIT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EPS_ENDANSCHLAEGE_WINKEL | 0xDB59 | - | Auslesen Daten EPS Endanschlaege winkelbezogen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB59_D |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen und Vorgeben Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB5A_D | RES_0xDB5A_D |
| _EPS_E_LUEFTER | 0xDB6A | - | Auslesen und Vorgabe Stufe E-Lüfter | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB6A_D | - |
| EPS_ZAHNSTANGENHUB | 0xDB6E | - | Auslesen Daten EPS Zahnstangenhub | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6E_D |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99_D |
| EPS_GESAMTRITZELWINKEL | 0xDB9A | STAT_GESAMTRITZELWINKEL_WERT | Gesamtritzelwinkel | ° | - | - | unsigned int | - | 1.0 | 32.0 | 0.0 | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### SSTMDSENSORSTATE_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 10 | Notlauf mit S1, S2 defekt |
| 11 | Notlauf mit S2, S1 defekt |
| 3 | Fehler |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

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

### TAB_EPS_ENDANSCHLAEGE_GELERNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht gelernt |
| 1 | gelernt |
| 2 | gelernt in Fahrt |
| 0xFF | ungültig |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK |

### TAB_EPS_WERT

| WERT | TEXT |
| --- | --- |
| 0x00 | Geradeauslauf-Offset nicht geschrieben und Index Position bzw Zahnstangenmitte nicht gefunden |
| 0x01 | Geradeauslauf-Offset nicht geschrieben und Index Position bzw Zahnstangenmitte gefunden |
| 0x02 | Geradeauslauf-Offset geschrieben und Index Position bzw Zahnstangenmitte nicht gefunden |
| 0x03 | Geradeauslauf-Offset geschrieben und Index Position bzw Zahnstangenmitte gefunden und gespeichert und Ist_Position_EPS gültig |
| 0xFF | ungültig |

### TAB_FAHRZEUG_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Initial |
| 0x01 | Standby, Fahrer abwesend |
| 0x02 | Basisbetrieb, Fahrer anwesend |
| 0x03 | Basisbetrieb, Fahrzeug rollt |
| 0x04 | Motornachlauf |
| 0x05 | Zündung ein |
| 0x06 | Zündung ein, Fahrzeug rollt |
| 0x07 | Motor an, Fahrzeug steht |
| 0x08 | Fahrt |
| 0x09 | Bevorstehender Motorstart |
| 0x0A | Bevorstehender Motorstart, Fahrzeug rollt |
| 0x0B | Motorstart |
| 0x0C | Motorstart, Fahrzeug rollt |
| 0x0D | Waschstrassenbetrieb |
| 0x0E | Fehler |
| 0x0F | Signal ungültig / nicht vorhanden |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_MLW_RESET_DURCH

| WERT | TEXT |
| --- | --- |
| 1 | MLW-Reset durch Tester/Diag |
| 2 | MLW-Reset durch ICM/Sollwertqualifier |
| 3 | MLW-Reset durch ASA/Sensorfehler |
| 4 | MLW-Reset durch ASA/Rekonstruktion |

### TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Energiemangel im Hochvoltspeicher |
| 0x02 | Abbruch wegen HV-Fehler |
| 0x04 | Abbruch wegen DCDC-Ausfall |
| 0x08 | Zyklisches Nachladen beendet durch Laden |
| 0x20 | nächster zyklischer Ladevorgang möglich |
| 0x30 | nächster zyklischer Ladevorgang nicht mehr möglich |
| 0xFF | Wert ungültig |

### TAB_STATUS_ROUTINE_EPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index nicht gefunden |
| 0xFF | Ungültig |

### TAB_STATUS_SPANNUNGSEINBRUCH

| WERT | TEXT |
| --- | --- |
| 0 | Kein Spannungseinbruch |
| 1 | Startspannungseinbruch bis maximal Spannungsschwelle 1 |
| 2 | Startspannungseinbruch bis maximal Spannungsschwelle 2 |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
| 14 | Reserviert |
| 15 | Signal unbefuellt |
| 0xFF | Wert ungültig |

### TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor startet |
| 2 | Motor läuft |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
| 14 | Reserviert |
| 15 | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_STEUERUNG_FEHLERSPEICHER_BORDNETZ_SPANNUNG

| WERT | TEXT |
| --- | --- |
| 0 | Keine Unterspannung Normalbetrieb |
| 1 | Unterspannung Normalbetrieb |
| 2 | Keine Unterspannung MSA-Start |
| 3 | Unterspannung MSA-Start |
| 4 | Keine Überspannung |
| 5 | Überspannung |
| 6 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 7 | Funktion_meldet_Fehler |
| 0xFF | Wert ungültig |

### TAB_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Invalid |
| 0x01 | NMWait |
| 0x02 | OldKl30Wait |
| 0x03 | PreDrive |
| 0x04 | DriveDown |
| 0x05 | DriveUp |
| 0x06 | PostRun |
| 0x07 | Off |
| 0x08 | Error |
| 0x09 | Flash |
| 0x10 | LowVolt |
| 0x11 | LimpHome |
| 0xFF | Wert ungültig |
