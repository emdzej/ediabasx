# BFH_G11.prg

## General

|  |  |
| --- | --- |
| File | BFH_G11.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 134 |
| Origin | BMW EK-721 Stefan_Schorer |
| Revision | 9.001 |
| Author | CONTI-TEMIC EI-431 Kirschner |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sitzmodul Beifahrerseite hinten |  |  |
| ORIGIN | string | BMW EK-721 Stefan_Schorer |  |  |
| REVISION | string | 9.001 |  |  |
| AUTHOR | string | CONTI-TEMIC EI-431 Kirschner |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.984 |  |  |
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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

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

### STEUERN_INITIALISIERUNGSLAUF_FREI

Steuerung Initialisierungslauf (frei) JobHeaderFormat 0xD703 INITIALISIERUNGSLAUF_FREI

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Stop, Start |
| INIT_ABLAUF | string | Definition des Ablaufs bei der Initialisierung der Verstellachsen Ein Initialisierungsablauf setzt sich aus einzelnen Initialisierungsfahrten zusammen. Maximal darstellbare Initialisierungsfahrten in einem Initialisierungsablauf: - 16 Normfahrten - 2 Adaptionsfahrten (SLV in beide Richtungen) - 8 Rueckkehrfahrten (8 Motore) Definition der Initialisierungsfahrten (Byte 1 - 42): Norm-/Adaptionsfahrt (1 Byte): ..Byte1: Bits 4-7 = MotorID, Bits 0-3 = Aktion - Rueckkehrfahrt (3 Bytes): ..Byte 1: Bits 4-7 = MotorID, Bits 0-3 = POS_PLUS_PHYS bzw. POS_MINUS_PHYS ..Byte 2 und 3 = anzufahrende Position (Abstand vom gewuenschten Anschlag, 16 Bit Wert, Byte 2 MSB, Byte 3 LSB) |

### _WAIT_N_SECONDS

Wartet die angeforderte Anzahl von Sekunden -> fuer Testablaeufe mit Toolset

| Name | Type | Description |
| --- | --- | --- |
| NR_OF_SECONDS | unsigned char | Anzahl der Sekunden, die gewartet werden soll |

### SPEICHER_LESEN

SPEICHER_LESEN

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | unsigned long | 0x000000 - 0xFFFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SPEICHER_SCHREIBEN

SPEICHER_SCHREIBEN

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | unsigned long | 0x000000 - 0xFFFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

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

### ARG_0X4030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DBG_MSG_SELECT | 0-n | high | unsigned char | - | TAB_SM_DEV_DBG_SELECT | - | - | - | - | - | - |
| ARG_DGB_MSG_ENABLE | 0-n | high | unsigned char | - | TAB_SM_DEV_DBG_CONTROL | - | - | - | - | - | - |

### ARG_0XD708_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTOR | 0-n | high | unsigned char | - | TAB_SV_MOTOREN_FCT | - | - | - | - | - | Motor: siehe Tabelle TAB_SV_MOTOREN_FCT |
| AKTION | 0-n | high | unsigned char | - | TAB_MOTOR_AKTION | - | - | - | - | - | Aktion: STOP, PLUS, MINUS |
| PWM | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Taktverhältnis: 0...100% |

### ARG_0XD70C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_MEMORY | 0/1 | high | unsigned char | - | - | - | - | - | - | - | LED Memory Speicherbereitschaft: 0 = AUS, 1 = EIN |

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
| VERSORGUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Versorgung Sitzklima Lüfter: 0 = AUS, 1 = EIN |
| DREHZAHLSTUFE_KISSEN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Drehzahlstufe Kissen (nur Einzellüfter mit 2 Geschwindigkeiten und AUSGANG_DIREKT): 0 = LANGSAM, 1 = SCHNELL |
| DREHZAHLSTUFE_LEHNE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Drehzahlstufe Lehne (nur Einzellüfter mit 2 Geschwindigkeiten und AUSGANG_DIREKT): 0 = LANGSAM, 1 = SCHNELL |
| PWM_KISSEN | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Kissen (nur Einzellüfter PWM und Zentrallüfter PWM gesteuert/geregelt und AUSGANG_DIREKT): 0...100% |
| PWM_LEHNE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Lehne (nur Einzellüfter PWM und Zentrallüfter PWM gesteuert/geregelt und AUSGANG_DIREKT): 0...100% |
| CONFIG_KISSEN | 0-n | high | unsigned char | - | TAB_ARG_SITZKLIMA_CONFIG | - | - | - | - | - | Konfiguration Sitzbelüftung Kissen (nur für SW ab 18-07 benötigt, davor einfach Default-Wert benutzen) |
| CONFIG_LEHNE | 0-n | high | unsigned char | - | TAB_ARG_SITZKLIMA_CONFIG | - | - | - | - | - | Konfiguration Sitzbelüftung Lehne (nur für SW ab 18-07 benötigt, davor einfach Default-Wert benutzen) |
| DUMMY3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD719_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTOR | 0-n | high | unsigned char | - | TAB_HALLZAEHLER_RESET_MOTOR_CC | - | - | - | - | - | Steuert Rücksetzen der Hallzähler Gültig:  SLV, SHV, LNV, SNV, KHV/KK, STV, LBV/FNV, LKV/RSE, ALL |

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

### ARG_0XD723_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_SM_FUSI_DELETE | - | - | - | - | - | FuSi Eventlog löschen (siehe Tabelle) |

### ARG_0XD72C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MOTORMAPPING_ID | 0-n | high | unsigned char | - | TAB_SM_ARG_MOTORMAPPING | - | - | - | - | - | Auswahl Motormapping |

### ARG_0XD7F0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION_FAHRER | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_SITZKLIMA_AKTION | - | - | - | - | - | Aktion Nackenwaermer Fahrer (siehe Tabelle) |
| TEMP_HEIZELEMENT_FAHRER | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Temperatur Heizelement Fahrer (nur bei AUSGANG_DIREKT): 0 ... 100 °C |
| DREHZAHL_LUEFTER_FAHRER | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 5.0 | Drehzahl Luefter Fahrer (nur bei AUSGANG_DIREKT): 0 ... 100 % |
| DUMMY11 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY12 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| AKTION_BEIFAHRER | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_SITZKLIMA_AKTION | - | - | - | - | - | Aktion Nackenwaermer Beifahrer (siehe Tabelle) |
| TEMP_HEIZELEMENT_BEIFAHRER | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Temperatur Heizelement Beifahrer (nur bei AUSGANG_DIREKT): 0 ... 100 °C |
| DREHZAHL_LUEFTER_BEIFAHRER | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Drehzahl Luefter Beifahrer (nur bei AUSGANG_DIREKT): 0 ... 100 % |
| DUMMY21 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |
| DUMMY22 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorhalt für Erweiterungen |

### ARG_0XD7F2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_01_FA | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 1 Fahrer: 0 = AUS, 1 = EIN |
| LED_02_FA | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 2 Fahrer: 0 = AUS, 1 = EIN |
| LED_03_FA | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 3 Fahrer: 0 = AUS, 1 = EIN |
| LED_01_BF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 1 Beifahrer: 0 = AUS, 1 = EIN |
| LED_02_BF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 2 Beifahrer: 0 = AUS, 1 = EIN |
| LED_03_BF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bedienschalter Nackenwaermer LED 3 Beifahrer: 0 = AUS, 1 = EIN |

### ARG_0XDAFC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATEN | 0-n | high | unsigned char | - | TAB_DEFAULTWERTE_SITZ_DATEN | - | - | - | - | - | Daten im Sitzmodul, die auf Defaultwerte zurückgesetzt werden sollen |

### ARG_0XE46A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_NWR_AKTION_PARAMETER_ARG | - | - | - | - | - | Auswahl Nackenwaermer-SG (siehe Tabelle) |

### BF_ADAP_ERROR_G1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAP_ERROR_G1_PLUS | 0-n | high | unsigned char | 0x0F | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SLV + LNV_SR2 plus |
| STAT_ADAP_ERROR_G1_MINUS | 0-n | high | unsigned char | 0xF0 | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SLV + LNV_SR2 minus |

### BF_ADAP_ERROR_G2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAP_ERROR_G2_PLUS | 0-n | high | unsigned char | 0x0F | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf LNV + SLV_SR2 plus |
| STAT_ADAP_ERROR_G2_MINUS | 0-n | high | unsigned char | 0xF0 | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf LNV + SLV_SR2 minus |

### BF_ADAP_ERROR_G3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAP_ERROR_G3_PLUS | 0-n | high | unsigned char | 0x0F | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SNV + EE_SR2 plus |
| STAT_ADAP_ERROR_G3_MINUS | 0-n | high | unsigned char | 0xF0 | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SNV + EE_SR2 minus |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DEBUG_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | Disabled |
| 0x01 | Enabled |
| 0xFF | Invalid |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x026A00 | Energiesparmode aktiv | 0 | - |
| 0x026A08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x026A09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x026A0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x026A0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x026A0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x026A0D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF6A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x802F80 | Hallgeber SLV (FoldBench RR:LFE) (FBK2:LNV_SR2): Kurzschluss nach Minus | 0 | - |
| 0x802F81 | Hallgeber SLV (FoldBench RR:LFE) (FBK2:LNV_SR2): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F82 | Hallgeber SHV (RR:FSV) (FBK2:LNV_SR3): Kurzschluss nach Minus | 0 | - |
| 0x802F83 | Hallgeber SHV (RR:FSV) (FBK2:LNV_SR3): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F84 | Hallgeber LNV (FBK2:SLV_SR2): Kurzschluss nach Minus | 0 | - |
| 0x802F85 | Hallgeber LNV (FBK2:SLV_SR2): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F86 | Hallgeber SNV (FBK2:EE_SR2): Kurzschluss nach Minus | 0 | - |
| 0x802F87 | Hallgeber SNV (FBK2:EE_SR2): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F88 | Hallgeber KHV (FBK2:LFE_SR3): Kurzschluss nach Minus | 0 | - |
| 0x802F89 | Hallgeber KHV (FBK2:LFE_SR3): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F8C | Hallgeber STV (RR:CRFE): Kurzschluss nach Minus | 0 | - |
| 0x802F8D | Hallgeber STV (RR:CRFE): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F8E | Hallgeber LBV (RR:CRW): Kurzschluss nach Minus | 0 | - |
| 0x802F8F | Hallgeber LBV (RR:CRW): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F90 | Hallgeber LKV: Kurzschluss nach Minus | 0 | - |
| 0x802F91 | Hallgeber LKV: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802F92 | Motor SLV (FoldBench RR:LFE) (FBK2:LNV_SR2): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802F93 | Motor SLV (FoldBench RR:LFE) (FBK2:LNV_SR2): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802F94 | Motor SHV (RR:FSV) (FBK2:LNV_SR3): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802F95 | Motor SHV (RR:FSV) (FBK2:LNV_SR3): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802F96 | Motor LNV (FBK2:SLV_SR2): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802F97 | Motor LNV (FBK2:SLV_SR2): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802F98 | Motor SNV (FBK2:EE_SR2): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802F99 | Motor SNV (FBK2:EE_SR2): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802F9A | Motor KHV (FBK2:LFE_SR3): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802F9B | Motor KHV (FBK2:LFE_SR3): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802F9E | Motor STV (RR:CRFE): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802F9F | Motor STV (RR:CRFE): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802FA0 | Motor LBV (RR:CRW): Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802FA1 | Motor LBV (RR:CRW): Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802FA2 | Motor LKV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus | 0 | - |
| 0x802FA3 | Motor LKV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 | - |
| 0x802FA4 | Temperaturfühler Heizfeld Kissen: Kurzschluss nach Plus | 0 | - |
| 0x802FA5 | Temperaturfühler Heizfeld Kissen: Unterbrechung oder Kurzschluss nach Minus | 0 | - |
| 0x802FA6 | Temperaturfühler Heizfeld Kissen: Fühler defekt | 0 | - |
| 0x802FA7 | Temperaturfühler Heizfeld Lehne: Kurzschluss nach Plus | 0 | - |
| 0x802FA8 | Temperaturfühler Heizfeld Lehne: Unterbrechung oder Kurzschluss nach Minus | 0 | - |
| 0x802FA9 | Temperaturfühler Heizfeld Lehne: Fühler defekt | 0 | - |
| 0x802FAA | Heizfeld Kissen: Kurzschluss nach Plus oder Überlast | 0 | - |
| 0x802FAB | Heizfeld Kissen: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x802FAC | Heizfeld Lehne: Kurzschluss nach Plus oder Überlast | 0 | - |
| 0x802FAD | Heizfeld Lehne: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x802FAF | Versorgung Sitzklima: Kurzschluss nach Minus oder Überlast | 0 | - |
| 0x802FB0 | Versorgung Sitzklima: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802FB1 | Steuerung Sitzklima Kissen: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x802FB2 | Steuerung Sitzklima Kissen: Kurzschluss nach Plus | 0 | - |
| 0x802FB3 | Steuerung Sitzklima Kissen: Mindestens ein Lüfter in Alarmzustand | 0 | - |
| 0x802FB4 | Steuerung Sitzklima Lehne: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x802FB5 | Steuerung Sitzklima Lehne: Kurzschluss nach Plus | 0 | - |
| 0x802FB6 | Steuerung Sitzklima Lehne: Mindestens ein Lüfter in Alarmzustand | 0 | - |
| 0x802FBE | Schalter SVS: Kurzschluss nach Minus | 0 | - |
| 0x802FBF | Schalter SVS: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802FC0 | Schalter SVS: Schalter hängt | 0 | - |
| 0x802FC1 | Schalter Easy Entry: Schalter defekt | 0 | - |
| 0x802FC2 | Schalter Easy Entry: Schalter hängt | 0 | - |
| 0x802FC3 | Schalter LVK: Kurzschluss nach Minus | 0 | - |
| 0x802FC4 | Schalter LVK: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802FC5 | Schalter LVK: Schalter defekt | 0 | - |
| 0x802FC6 | Schalter LIN: Schalter hängt | 0 | - |
| 0x802FC7 | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung vor | 0 | - |
| 0x802FC8 | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung zurück | 0 | - |
| 0x802FC9 | Kennfeld 2./3. Sitzreihe FBKII: eingeschränkte Verstellung zweite/dritte Sitzreihe wegen fehlender Kalibrierung | 0 | - |
| 0x802FCA | Sitzpositionsübergabe Frau-Mann: Kein Versenden der Sitzposition wegen fehlender oder ungültiger Kalibrierung (SLV vorne) | 0 | - |
| 0x802FCB | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung der Funktion Easy Entry 2. Sitzreihe | 0 | - |
| 0x802FCC | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung der Funktion LNV | 0 | - |
| 0x802FCD | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung der Funktion LNV 3. Sitzreihe | 0 | - |
| 0x802FCE | Versorgungsspannung Relais (30s): Kurzschluss nach Minus oder Treiber defekt | 0 | - |
| 0x802FCF | Versorgungsspannung Relais (30s): Kurzschluss nach Plus | 0 | - |
| 0x802FD0 | Codierwert für Zieltemperatur der Sitzheizung falsch bedatet (Zielwert übersteigt Maximalwert) | 0 | - |
| 0x802FD1 | Überwachung Leiterplattentemperatur: Abschaltung Sitzverstellung/Sitzheizung/Sitzklima wegen Übertemperatur | 1 | - |
| 0x802FD2 | Keine Wiederaufnahme der Sitzverstellung wegen Timerablauf Motorstartbedingung | 1 | - |
| 0x802FD3 | Überspannung erkannt | 1 | - |
| 0x802FD4 | Unterspannung erkannt | 1 | - |
| 0x802FD5 | Schalter LIN: Fehler Überlastung PWM | 0 | - |
| 0x802FD6 | Schalter LIN: Fehler im EEPROM | 0 | - |
| 0x802FD7 | Kennfeld 1./2. Sitzreihe FBKII: eingeschränkte Verstellung zweite Sitzreihe wegen fehlender Kalibrierung in der ersten Sitzreihe | 0 | - |
| 0x802FD8 | Timeout beim Empfang der Botschaft 0x2C8 - Status_Sitzreihe_Fond | 0 | - |
| 0x802FD9 | Schalter LVK II: Kurzschluss nach Minus | 0 | - |
| 0x802FDA | Schalter LVK II: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802FDB | Schalter LVK II: Schalter defekt | 0 | - |
| 0x802FDC | Durchladekontakt 2. Sitzreihe: Kontakt defekt | 0 | - |
| 0x802FDD | Verstellweg der LBV (RR:CRW) nicht plausibel | 0 | - |
| 0x802FDE | Schalter SVS: Schalter defekt | 0 | - |
| 0x802FDF | Schalter Lehnenklappung 2. Sitzreihe: Kurzschluss nach Minus | 0 | - |
| 0x802FE0 | Schalter Lehnenklappung 2. Sitzreihe: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802FE1 | Schalter Lehnenklappung 2. Sitzreihe: Schalter defekt | 0 | - |
| 0x802FE2 | Schalter Lehnenklappung 2. Sitzreihe: Schalter hängt | 0 | - |
| 0x802FE3 | Schalter Tilting Boot im RR: Kurzschluss nach Minus | 0 | - |
| 0x802FE4 | Schalter Tilting Boot im RR: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x802FE5 | Schalter Tilting Boot im RR: Schalter defekt | 0 | - |
| 0x802FE6 | Schalter Tilting Boot im RR: Schalter hängt | 0 | - |
| 0x802FE7 | Schalter Easy Entry: Kurzschluss nach Minus | 0 | - |
| 0x802FE8 | FoldBench im RR, Schalterkombination LVK / Lehne geklappt: Schalterzustand unplausibel | 0 | - |
| 0x802FE9 | Verstellweg der SLV (FodBench RR:LFE) (FBK2:LNV_SR2) nicht plausibel | 0 | - |
| 0x802FF0 | Verstellweg der SHV (RR:FSV) (FBK2:LNV_SR3) nicht plausibel | 0 | - |
| 0x802FF1 | Verstellweg der SNV (FBK2:EE_SR2) nicht plausibel | 0 | - |
| 0x802FF2 | Verstellweg der KHV (FBK2:LFE_SR3) nicht plausibel | 0 | - |
| 0x802FF3 | Verstellweg der STV (RR:CRFE) nicht plausibel | 0 | - |
| 0x802FF4 | Verstellweg der LKV nicht plausibel | 0 | - |
| 0x803005 | ÜKB: Abschaltung ÜKB wegen fehlender Kalibrierung | 0 | - |
| 0x803006 | Kennfeld Sitzbelüftung: eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV hinten oder SNV oben) | 0 | - |
| 0x803007 | Schalter LIN: Falsche Variant ID | 0 | - |
| 0x803008 | PIA: Portierung eingeschränkt wegen fehlender Kalibrierung | 0 | - |
| 0x803012 | Überwachung Leiterplattentemperatur: Abschaltung Sitzverstellung wegen Übertemperatur | 1 | - |
| 0x803013 | Überwachung Leiterplattentemperatur: Abschaltung Sitzheizung wegen Übertemperatur | 1 | - |
| 0x803014 | Motormapping: Defaultmapping aktiviert wegen unplausibler Codierung | 0 | - |
| 0x803015 | Interner Steuergerätefehler: Versorgungsspannung  (U12s oder U12h) | 0 | - |
| 0x803016 | Interner Steuergerätefehler: Checksummenfehler im ÜKB Datenbereich | 0 | - |
| 0x803017 | Interner Steuergerätefehler: Unplausibler Wert bei der Strommessung für ÜKB | 0 | - |
| 0x803018 | Heizung: Abschaltung wegen Heizleistungsbegrenzung im Kissen | 1 | - |
| 0x803019 | Heizung: Abschaltung wegen Heizleistungsbegrenzung in der Lehne | 1 | - |
| 0x80301E | Keine Sitzverstellung wegen Motorstartbedingung | 1 | - |
| 0x803020 | Motor SLV (FoldBench RR:LFE) (FBK2:LNV_SR2): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803021 | Motor SHV (RR:FSV) (FBK2:LNV_SR3): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803022 | Motor LNV (FBK2:SLV_SR2): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803023 | Motor SNV (FBK2:EE_SR2): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803024 | Motor KHV (FBK2:LFE_SR3): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803026 | Motor STV (RR:CRFE): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803027 | Motor LBV (RR:CRW): Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803028 | Motor LKV: Abschaltung durch Verstellzeitbegrenzung | 1 | - |
| 0x803029 | Easy entry SR1: eingeschränkte Verstellung wegen fehlender Kalibrierung | 0 | - |
| 0x80302A | Kennfeld 4D: eingeschränkte Verstellung wegen fehlender Kalibrierung | 0 | - |
| 0x80302B | Konfiguration: Codierter Aktor oder Sensor von Hardwarevariante nicht unterstützt | 0 | - |
| 0x80302C | PreCrash: keine PreCrash Verstellung wegen fehlender Kalibrierung (LNV vorne bzw. LNV hinten beim Fondsitz) | 0 | - |
| 0x80302D | Ein-Ausstiegshilfe: keine automatische Verstellung SLV  wegen fehlender Kalibrierung (SLV hinten) | 0 | - |
| 0x80302E | Kennfeld Lehnenkopf: eingeschränkte Verstellung wegen fehlender Kalibrierung | 0 | - |
| 0x80302F | Captain Chair: eingeschränkte Verstellung wegen fehlender Kalibrierung | 0 | - |
| 0x803030 | Heizleistung reduziert wegen eingeschränkter Verfügbarkeit des Energiebordnetzes (FEPM) | 1 | - |
| 0x803031 | Motor Gruppe 1: Interner Fehler oder Kurzschluss nach Plus | 0 | - |
| 0x803032 | Motor Gruppe 2: Interner Fehler oder Kurzschluss nach Plus | 0 | - |
| 0x803033 | Statische Begrenzung Lehnenkopf: eingeschränkte Verstellung wegen fehlender Kalibrierung | 0 | - |
| 0x803034 | Folgebewegung SNV bei SLV-Verstellung nach vorne: keine SNV Folgebewegung wegen fehlender Kalibrierung | 0 | - |
| 0x803035 | Statische Begrenzung Kopfstütze: eingeschränkte Verstellung wegen fehlender Kalibrierung | 0 | - |
| 0x803036 | Funktion Fernbedienung Beifahrersitz wegen fehlender Kallibrierung (SLV, SHV, LNV, SNV, LKV) eingeschränkt verfügbar | 0 | - |
| 0x803037 | Schalter Fußstützenverstellung (FSV) im RR: Schalter hängt oder Kurzschluss nach Masse | 0 | - |
| 0x803038 | Taste Picknicktischverstellung (PTV) im RR: Taste hängt | 0 | - |
| 0x803039 | Taste Monitorneigungsverstellung (RSE) im RR: Taste hängt | 0 | - |
| 0x80303A | FoldBench im RR, Schalter KHV: Schalter hängt oder Kurzschluss nach Masse | 0 | - |
| 0x80303B | Schalter Calfrest (Wadenablage) im RR: Kurzschluss nach Minus | 0 | - |
| 0x80303C | Schalter Calfrest (Wadenablage) im RR: Schalter hängt | 0 | - |
| 0x80303D | Kennfeld Calfrest (Wadenablage) im RR: eingeschränkte Verstellung wegen fehlender Kalibrierung bei CRW/CRFE | 0 | - |
| 0x80303E | Funktion Monitorneigungsverstellung (RSE) im RR: mechanische Blockierung erkannt | 0 | - |
| 0x80303F | Funktion Picknicktischverstellung (PTV) im RR: mechanische Blockierung erkannt | 0 | - |
| 0x803040 | Nackenwärmer-SG Fahrer (LIN): Unterspannung erkannt | 0 | - |
| 0x803041 | Nackenwärmer-SG Fahrer (LIN): Überspannung erkannt | 0 | - |
| 0x803042 | Nackenwärmer-SG Fahrer (LIN): Übertemperatur Leiterplatte | 0 | - |
| 0x803043 | Nackenwärmer-SG Fahrer (LIN): interner Fehler (Hardware oder EEPROM) | 0 | - |
| 0x803044 | Nackenwärmer-SG Fahrer (LIN): Heizung defekt | 0 | - |
| 0x803045 | Nackenwärmer-SG Fahrer (LIN): Lüfter defekt | 0 | - |
| 0x803046 | Nackenwärmer-SG Fahrer (LIN): Parameterdaten nicht plausibel | 0 | - |
| 0x80304F | Nackenwärmer Funktion: Leistung reduziert wegen eingeschränkter Verfügbarkeit des Energiebordnetzes (fEPM) | 1 | - |
| 0x803050 | Nackenwärmer-SG Beifahrer (LIN): Unterspannung erkannt | 0 | - |
| 0x803051 | Nackenwärmer-SG Beifahrer (LIN): Überspannung erkannt | 0 | - |
| 0x803052 | Nackenwärmer-SG Beifahrer (LIN): Übertemperatur Leiterplatte | 0 | - |
| 0x803053 | Nackenwärmer-SG Beifahrer (LIN): interner Fehler (Hardware oder EEPROM) | 0 | - |
| 0x803054 | Nackenwärmer-SG Beifahrer (LIN): Heizung defekt | 0 | - |
| 0x803055 | Nackenwärmer-SG Beifahrer (LIN): Lüfter defekt | 0 | - |
| 0x803056 | Nackenwärmer-SG Beifahrer (LIN): Parameterdaten nicht plausibel | 0 | - |
| 0x80305E | Bedienschalter Nackenwärmer (LIN): interner Fehler (EEPROM) | 0 | - |
| 0x80305F | Bedienschalter Nackenwärmer (LIN): Taster links hängt | 0 | - |
| 0x803060 | Bedienschalter Nackenwärmer (LIN): Taster rechts hängt | 0 | - |
| 0x80306A | Taste Monitorneigungsverstellung (RSE) im RR: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80306B | Taste Monitorneigungsverstellung (RSE) im RR: Kurzschluss nach Masse | 0 | - |
| 0x80306C | Taste Picknicktischverstellung (PTV) im RR: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80306D | Taste Picknicktischverstellung (PTV) im RR: Kurzschluss nach Masse | 0 | - |
| 0x80306E | FoldBench im RR, Taster Lehnenklappung im Gepäckraum: Kurzschluss nach Masse | 0 | - |
| 0x80306F | FoldBench im RR, Taster Lehnenklappung Nachbarsitz: Kurzschluss nach Masse | 0 | - |
| 0x803072 | Verstellweg der LNV (FBK2:SLV_SR2) nicht plausibel | 0 | - |
| 0x803073 | FoldBench im RR: eingeschränkte Verstellung wegen fehlender Kalibrierung bei LNV | 0 | - |
| 0x803074 | FoldBench im RR, Taster Lehnenklappung lokaler Sitz: Taster hängt | 0 | - |
| 0x803075 | FoldBench im RR, Taster Lehnenklappung im Gepäckraum: Taster hängt | 0 | - |
| 0x803076 | FoldBench im RR, Taster Lehnenklappung Nachbarsitz: Taster hängt | 0 | - |
| 0x803077 | FoldBench im RR, Taster Lehnenklappung lokaler Sitz: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x803078 | FoldBench im RR, Taster Lehnenklappung im Gepäckraum: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x803079 | FoldBench im RR, Taster Lehnenklappung Nachbarsitz: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80307A | Kennfeld Sonnenblende: eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV hinten, LNV vorne, SHV unten) | 0 | - |
| 0x80307B | FoldBench im RR, Taster Lehnenklappung lokaler Sitz: Kurzschluss nach Masse | 0 | - |
| 0x80307C | FuSi: eingeschränkte Verstellung wegen unplausiblem Verbauort | 0 | - |
| 0x80307D | FuSi: eingeschränkte Verstellung wegen korrupter Daten (Kennfeld Rückzugsbereich Beine) | 0 | - |
| 0x80307E | FuSi: eingeschränkte Verstellung wegen Plausibilitätsverletzung | 0 | - |
| 0x80307F | FuSi: eingeschränkte Verstellung wegen forciertem sicheren Zustand | 0 | - |
| 0xE38468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xE38BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xE38C1E | LIN-Bus: Sitzverstellschalter antwortet nicht | 0 | - |
| 0xE38C20 | LIN-Bus: Bedienschalter Nackenwärmer antwortet nicht | 0 | - |
| 0xE38C21 | LIN-Bus: Kommunikationsfehler durch Bedienschalter Nackenwärmer erkannt | 0 | - |
| 0xE38C22 | LIN-Bus: Kommunikationsfehler durch Sitzverstellschalter erkannt | 0 | - |
| 0xE38C24 | LIN-Bus: Nackenwärmer-SG Fahrer antwortet nicht | 0 | - |
| 0xE38C25 | LIN-Bus: Kommunikationsfehler durch Nackenwärmer-SG Fahrer erkannt | 0 | - |
| 0xE38C26 | LIN-Bus: Nackenwärmer-SG Beifahrer antwortet nicht | 0 | - |
| 0xE38C27 | LIN-Bus: Kommunikationsfehler durch Nackenwärmer-SG Beifahrer erkannt | 0 | - |
| 0xE38C28 | LIN-Bus: Bedienschalter Nackenwärmer, unerwarteter LIN-Slave | 0 | - |
| 0xE38C29 | LIN-Bus: Nackenwärmer-SG Fahrer, unerwarteter LIN-Slave | 0 | - |
| 0xE38C2A | LIN-Bus: Nackenwärmer-SG Beifahrer, unerwarteter LIN-Slave | 0 | - |
| 0xE38D00 | LIN-Bus: Kommunikationsfehler durch Sitzmodul (LIN Master) erkannt | 0 | - |
| 0xE39401 | Botschaft (0xD8, Steuerung PreCrash): Ausfall | 1 | - |
| 0xE39402 | Botschaft (0x01A1, Geschwindigkeit Fahrzeug): Ausfall oder ungültiges Signal | 1 | - |
| 0xE3AC00 | Signal (0x23A) ungültig empfangen: Nummer_Schlüssel_Personalisierung_Aktuell | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x6A1000 | Hallpufferueberlauf | 0 | - |
| 0x6A1001 | CANNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x6A1002 | PWM_E_UNEXPECTED_IRQ | 0 | - |
| 0x6A1003 | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x6A1004 | EVENT_DemDTC_PIA_E_IO_ERROR | 0 | - |
| 0x6A1005 | EEP_E_COM_FAILURE | 0 | - |
| 0x6A1006 | FEE_E_INIT_TIMEOUT | 0 | - |
| 0x6A1007 | NVM_E_INIT_TIMEOUT | 0 | - |
| 0x6A1008 | IOHWAB_E_IO_SEQUENCE | 0 | - |
| 0x6A1009 | ECCHDL_E_CRITICAL_ERROR | 0 | - |
| 0x6A100A | ECCHDL_E_FLASH_ECC_FAIL_NORECOVERY | 0 | - |
| 0x6A100B | ECCHDL_E_RAM_ECC_FAIL_NORECOVERY | 0 | - |
| 0x6A100D | ADC_E_TIMEOUT | 0 | - |
| 0x6A1021 | EVENT_ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0x6A1022 | EVENT_EEP_E_COMPARE_FAILED | 0 | - |
| 0x6A1023 | EVENT_EEP_E_ERASE_FAILED | 0 | - |
| 0x6A1024 | EVENT_EEP_E_READ_FAILED | 0 | - |
| 0x6A1025 | EVENT_EEP_E_WRITE_FAILED | 0 | - |
| 0x6A1026 | EVENT_FLS_E_COMPARE_FAILED | 0 | - |
| 0x6A1027 | EVENT_FLS_E_ERASE_FAILED | 0 | - |
| 0x6A1028 | EVENT_FLS_E_READ_FAILED | 0 | - |
| 0x6A1029 | EVENT_FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x6A102A | EVENT_FLS_E_WRITE_FAILED | 0 | - |
| 0x6A102B | EVENT_FLSTST_E_FLSTST_FAILURE | 0 | - |
| 0x6A102C | EVENT_LIN_E_TIMEOUT | 0 | - |
| 0x6A102D | EVENT_MCU_E_CLOCK_FAILURE | 0 | - |
| 0x6A102E | EVENT_NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x6A102F | EVENT_NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x6A1030 | EVENT_NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x6A1031 | EVENT_NVM_E_REQ_FAILED | 0 | - |
| 0x6A1032 | EVENT_NVM_E_VERIFY_FAILED | 0 | - |
| 0x6A1033 | EVENT_NVM_E_WRITE_PROTECTED | 0 | - |
| 0x6A1034 | EVENT_NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x6A1035 | EVENT_RAMTST_E_RAM_FAILURE | 0 | - |
| 0x6A1037 | EVENT_CANIF_TT_E_JLE_SYNC | 0 | - |
| 0x6A103C | EVENT_CSM_E_INIT_FAILED | 0 | - |
| 0x6A103D | EVENT_E_OS_CORE | 0 | - |
| 0x6A103E | EVENT_E_OS_DISABLEDINT | 0 | - |
| 0x6A103F | EVENT_E_OS_ILLEGAL_ADDRESS | 0 | - |
| 0x6A1040 | EVENT_E_OS_INTERFERENCE_DEADLOCK | 0 | - |
| 0x6A1041 | EVENT_E_OS_MISSINGEND | 0 | - |
| 0x6A1042 | EVENT_E_OS_NESTING_DEADLOCK | 0 | - |
| 0x6A1043 | EVENT_E_OS_PROTECTION_ARRIVAL | 0 | - |
| 0x6A1044 | EVENT_E_OS_PROTECTION_EXCEPTION | 0 | - |
| 0x6A1045 | EVENT_E_OS_PROTECTION_LOCKED | 0 | - |
| 0x6A1046 | EVENT_E_OS_PROTECTION_MEMORY | 0 | - |
| 0x6A1047 | EVENT_E_OS_PROTECTION_TIME | 0 | - |
| 0x6A1048 | EVENT_E_OS_SERVICEID | 0 | - |
| 0x6A1049 | EVENT_E_OS_SPINLOCK | 0 | - |
| 0x6A104A | EVENT_E_OS_STACKFAULT | 0 | - |
| 0x6A104B | EVENT_ECUM_E_CONFIGURATION_DATA_INCONSISTENT | 0 | - |
| 0x6A104C | EVENT_ECUM_E_IMPROPER_CALLER | 0 | - |
| 0x6A104D | EVENT_LINIF_E_RESPONSE | 0 | - |
| 0x6A104E | EVENT_STBM_E_INTEGRITY_FAILED | 0 | - |
| 0x6A104F | EVENT_STBM_E_REQ_FAILED | 0 | - |
| 0x6A1050 | EVENT_WDG_E_DISABLE_REJECTED | 0 | - |
| 0x6A1051 | EVENT_WDG_E_MODE_FAILED | 0 | - |
| 0x6A1052 | EVENT_WDGM_E_IMPROPER_CALLER | 0 | - |
| 0x6A1053 | EVENT_WDGM_E_SET_MODE | 0 | - |
| 0x6A1054 | EVENT_XCP_E_INIT_FAILED | 0 | - |
| 0x6A1055 | EVENT_WDGM_E_MONITORING | 0 | - |
| 0x6A1056 | FoldBench: Codierwerte Timer zum Abklappen der LNV nicht plausibel | 0 | - |
| 0x6A1060 | FoldBench im RR: Codierwerte Timer zum Abklappen der LNV nicht plausibel | 0 | - |
| 0xE3ABFE | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_BOOT_INTERN_WERT_TEXT | TEXT | high | string[14] | - | - | 1.0 | 1.0 | 0.0 | Interner Versionsnummer Bootloader |
| STAT_VERSION_APPL_INTERN_WERT_TEXT | TEXT | high | string[14] | - | - | 1.0 | 1.0 | 0.0 | Interner Versionsnummer Applikation |

### RES_0X4030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DGB_MSG_1 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_2 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_3 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_4 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_5 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_6 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_7 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_8 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_9 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_10 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_11 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_12 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_13 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_14 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_15 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_16 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_17 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_18 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_19 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_20 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_21 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_22 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_23 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_24 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_25 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_26 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_27 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_28 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_29 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_30 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |
| STAT_DGB_MSG_31 | 0-n | high | unsigned char | - | DEBUG_CONTROL | - | - | - | - |

### RES_0XA703_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_SITZ | - | - | + | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status der Gesamtinitialisierung des Sitzes |
| STAT_INIT_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Status Initialisierungslauf: 0 = nicht aktiv, 1 = aktiv |
| STAT_INIT_ID_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Initialisierungsablauf ID (0...254, 255 = ungültig) |
| STAT_INIT_STEP_G1 | - | - | + | 0-n | high | unsigned char | - | TAB_INIT_STEP | - | - | - | Initialisierungsschritt Gruppe 1 |
| STAT_INIT_STEP_G2 | - | - | + | 0-n | high | unsigned char | - | TAB_INIT_STEP | - | - | - | Initialisierungsschritt Gruppe 2 |
| STAT_INIT_ERROR | - | - | + | 0-n | high | unsigned char | - | TAB_INIT_ERROR | - | - | - | Fehlercode Initialisierungslauf |
| STAT_ADAP_PLUS_ERROR | - | - | + | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SLV plus |
| STAT_ADAP_MINUS_ERROR | - | - | + | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SLV minus |
| - | - | - | + | Bit | high | BITFIELD | - | BF_ADAP_ERROR_G1 | - | - | - | Fehlercode Adaptionslauf SLV und LNV_SR2 |
| - | - | - | + | Bit | high | BITFIELD | - | BF_ADAP_ERROR_G2 | - | - | - | Fehlercode Adaptionslauf LNV und SLV_SR2 |
| - | - | - | + | Bit | high | BITFIELD | - | BF_ADAP_ERROR_G3 | - | - | - | Fehlercode Adaptionslauf SNV und EE_SR2 |

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
| STAT_SELBSTTEST_KHV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt KHV (CC:KK) plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_KHV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt KHV (CC:KK) minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_STV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt STV plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_STV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | 1.0 | 1.0 | 0.0 | Status Selbsttest Schritt STV minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LBV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt LBV (CC:FNV) plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LBV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt LBV (CC:FNV) minus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LKV_PLUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt LKV (CC:RSE) plus: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_LKV_MINUS | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt LKV (CC:RSE) minus: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_SELBSTTEST_SCHALTER_IND_FOLDBENCH_KHV | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt Schalter Foldbench individuelle KHV: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_CALFREST | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt Schalter Calfrest (Wadenablage): Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_FOLDBENCH | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt Schalter Foldbench Lehnenklappung: Interpretation siehe Tabelle |
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
| STAT_SELBSTTEST_SCHALTER_PTV | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt Schalter Picknicktischverstellung: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_RSE | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt Schalter Monitorneigungsverstellung RSE: Interpretation siehe Tabelle |
| STAT_SELBSTTEST_SCHALTER_FSV | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_SITZ_STEP | - | - | - | Status Selbsttest Schritt Schalter Fußstützenverstellung: Interpretation siehe Tabelle |

### RES_0XD700_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor SLV |
| STAT_MOTOR_SHV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor SHV |
| STAT_MOTOR_LNV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor LNV |
| STAT_MOTOR_SNV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor SNV |
| STAT_MOTOR_KHV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor KHV (KK beim Captain Chair) |
| STAT_MOTOR_STV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor STV |
| STAT_MOTOR_LBV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor LBV (FNV beim Captain Chair) |
| STAT_MOTOR_LKV | 0-n | high | unsigned char | - | TAB_CONFIG_HW_MOTOR | - | - | - | HW Konfiguration Motor LKV (RSE beim Captain Chair) |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Funktion/Schalter Lehnenklappung Foldbench: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_FB_KHV | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Funktion/Schalter KHV Foldbench: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_CALFREST | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Funktion/Schalter Calfrest (Wadenablage): 0 = nicht vorhanden, 1 = vorhanden |
| STAT_LORDOSE | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Lordosenansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_MASSAGE | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Massagenansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_AKTIVSITZ | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Aktivsitzansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SITZKLIMA | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Aktivsitzansteuerung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SITZHEIZUNG | 0-n | high | unsigned char | - | TAB_CONFIG_HW_SITZHEIZUNG | - | - | - | HW Konfiguration Sitzheizungsansteuerung |
| STAT_SCHALTER_SV_RCODED | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Auswertung widerstandscodierter Sitzverstellschalter: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_SV_LIN | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Auswertung LIN Sitzverstellschalter: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_EE | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Auswertung Easy Entry Schalter: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_LVK | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Auswertung Lehnenverriegelungskontakt: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_NACKENWAERMER | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Ansteuerung Nackenwärmer Steuergerät: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_CAPTAIN_CHAIR | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Captain Chair: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_FSV | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Funktion/Schalter individuelle Fußstützenverstellung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_PTV | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Funktion/Schalter individuelle Picknicktischverstellung: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_RSE | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Funktion/Schalter individuelle Monitorneigungsverstellung RSE: 0 = nicht vorhanden, 1 = vorhanden |

### RES_0XD701_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor SLV |
| STAT_MOTOR_SHV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor SHV |
| STAT_MOTOR_LNV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor LNV |
| STAT_MOTOR_SNV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor SNV |
| STAT_MOTOR_KHV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor KHV (KK beim Captain Chair) |
| STAT_MOTOR_STV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor STV |
| STAT_MOTOR_LBV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor LBV (FNV beim Captain Chair) |
| STAT_MOTOR_LKV | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_MOTOR | - | - | - | Codierte Konfiguration Motor LKV (RSE beim Captain Chair) |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Funktion/Schalter Lehnenklappung Foldbench: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_FB_KHV | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Funktion/Schalter KHV Foldbench: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_CALFREST | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Funktion/Schalter Calfrest (Wadenablage): 0 = nicht codiert, 1 = codiert |
| STAT_LORDOSE | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Lordose: 0 = nicht codiert, 1 = codiert |
| STAT_MASSAGE | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Massage: 0 = nicht codiert, 1 = codiert |
| STAT_AKTIVSITZ | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Aktivsitz: 0 = nicht codiert, 1 = codiert |
| STAT_SITZKLIMA | 0-n | high | unsigned char | - | TAB_CONF_CODIERT_SITZKLIMA | - | - | - | Codierte Konfiguration Sitzbelüftung |
| STAT_SITZHEIZUNG | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_SITZHEIZUNG | - | - | - | Codierte Konfiguration Sitzheizung |
| STAT_SCHALTER_SV_RCODED | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_SCHALTER_SV_RCODED | - | - | - | Codierte Konfiguration Auswertung widerstandscodierter Sitzverstellschalter |
| STAT_SCHALTER_SV_LIN | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung LIN Sitzverstellschalter: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_EE | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Easy Entry Schalter: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_LVK | 0-n | high | unsigned char | - | TAB_CONFIG_CODIERT_LVK | - | - | - | Codierte Konfiguration Auswertung Lehnenverriegelungskontakt |
| STAT_NACKENWAERMER | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Nackenwärmer: 0 = nicht codiert, 1 = codiert |
| STAT_CAPTAIN_CHAIR | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Captain Chair: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_FSV | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Funktion/Schalter individuelle Fußstützenverstellung: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_PTV | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Funktion/Schalter individuelle Picknicktischverstellung: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_RSE | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Auswertung Funktion/Schalter individuelle Monitorneigungsverstellung RSE: 0 = nicht codiert, 1 = codiert |

### RES_0XD702_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLZAEHLER_SLV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand SLV: 8192..57344 |
| STAT_HALLZAEHLER_SHV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand SHV: 8192..57344 |
| STAT_HALLZAEHLER_LNV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand LNV: 8192..57344 |
| STAT_HALLZAEHLER_SNV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand SNV: 8192..57344 |
| STAT_HALLZAEHLER_KHV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand KHV (CC:KK): 8192..57344 |
| STAT_HALLZAEHLER_STV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand STV: 8192..57344 |
| STAT_HALLZAEHLER_LBV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand LBV (CC:FNV): 8192..57344 |
| STAT_HALLZAEHLER_LKV_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hallzählerstand LKV (CC:RSE): 8192..57344 |
| STAT_DUMMY1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD703_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_SITZ | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Gesamtinitialisierung des Sitzes |
| STAT_INIT_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Status Initialisierungslauf: 0 = nicht aktiv, 1 = aktiv |
| STAT_INIT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Initialisierungsablauf ID (0...254, 255 = ungültig) |
| STAT_INIT_STEP_G1 | 0-n | high | unsigned char | - | TAB_INIT_STEP | - | - | - | Initialisierungsschritt Gruppe 1 |
| STAT_INIT_STEP_G2 | 0-n | high | unsigned char | - | TAB_INIT_STEP | - | - | - | Initialisierungsschritt Gruppe 2 |
| STAT_INIT_ERROR | 0-n | high | unsigned char | - | TAB_INIT_ERROR | - | - | - | Fehlercode Initialisierungslauf |
| STAT_ADAP_PLUS_ERROR | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SLV plus |
| STAT_ADAP_MINUS_ERROR | 0-n | high | unsigned char | - | TAB_ADAP_ERROR | - | - | - | Fehlercode Adaptionslauf SLV minus |
| - | Bit | high | BITFIELD | - | BF_ADAP_ERROR_G1 | - | - | - | Fehlercode Adaptionslauf SLV und LNV_SR2 |
| - | Bit | high | BITFIELD | - | BF_ADAP_ERROR_G2 | - | - | - | Fehlercode Adaptionslauf LNV und SLV_SR2 |
| - | Bit | high | BITFIELD | - | BF_ADAP_ERROR_G3 | - | - | - | Fehlercode Adaptionslauf SNV und EE_SR2 |

### RES_0XD704_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_SITZ | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Gesamtinitialisierung des Sitzes |
| STAT_NORM_SLV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung SLV plus |
| STAT_NORM_SLV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung SLV minus |
| STAT_ADAP_SLV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | - | - | - | Status Adaption SLV / LNV_SR2 plus |
| STAT_ADAP_SLV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | - | - | - | Status Adaption SLV / LNV_SR2 minus |
| STAT_VERSTELLWEG_SLV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg SLV plausibel |
| STAT_NORM_SHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung SHV plus |
| STAT_NORM_SHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung SHV minus |
| STAT_NORM_LNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung LNV plus |
| STAT_NORM_LNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung LNV minus |
| STAT_NORM_SNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung SNV plus |
| STAT_NORM_SNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung SNV minus |
| STAT_NORM_KHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung KHV (CC KK) plus |
| STAT_NORM_KHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung KHV (CC KK) minus |
| STAT_NORM_STV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung STV plus |
| STAT_NORM_STV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung STV minus |
| STAT_NORM_LBV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung LBV (CC FNV) plus |
| STAT_NORM_LBV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung LBV (CC FNV) minus |
| STAT_NORM_LKV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung LKV (CC RSE) plus |
| STAT_NORM_LKV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_NORM | - | - | - | Status Normierung LKV (CC RSE) minus |
| STAT_VERSTELLWEG_SHV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg SHV plausibel |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_ADAP_LNV_SLV_SR2_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | - | - | - | Status Adaption LNV / SLV_SR2 plus |
| STAT_ADAP_LNV_SLV_SR2_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | - | - | - | Status Adaption LNV / SLV_SR2 minus |
| STAT_ADAP_SNV_EE_SR2_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | - | - | - | Status Adaption EE_SR2 plus |
| STAT_ADAP_SNV_EE_SR2_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ADAP | - | - | - | Status Adaption EE_SR2 minus |
| STAT_ENTNORMIERURSACHE_SLV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache SLV plus |
| STAT_ENTNORMIERURSACHE_SLV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache SLV minus |
| STAT_ENTNORMIERURSACHE_SHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache SHV plus |
| STAT_ENTNORMIERURSACHE_SHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache SHV minus |
| STAT_ENTNORMIERURSACHE_LNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache LNV plus |
| STAT_ENTNORMIERURSACHE_LNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache LNV minus |
| STAT_ENTNORMIERURSACHE_SNV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache SNV plus |
| STAT_ENTNORMIERURSACHE_SNV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache SNV minus |
| STAT_ENTNORMIERURSACHE_KHV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache KHV (CC KK) plus |
| STAT_ENTNORMIERURSACHE_KHV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache KHV (CC KK) minus |
| STAT_ENTNORMIERURSACHE_STV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache STV plus |
| STAT_ENTNORMIERURSACHE_STV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache STV minus |
| STAT_ENTNORMIERURSACHE_LBV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache LBV (CC FNV) plus |
| STAT_ENTNORMIERURSACHE_LBV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache LBV (CC FNV) minus |
| STAT_ENTNORMIERURSACHE_LKV_PLUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache LKV (CC RSE) plus |
| STAT_ENTNORMIERURSACHE_LKV_MINUS | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_ENTNORMIERURSACHE | - | - | - | Entnormierursache LKV (CC RSE) minus |
| STAT_VERSTELLWEG_LNV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg LNV plausibel |
| STAT_VERSTELLWEG_SNV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg SNV plausibel |
| STAT_VERSTELLWEG_KHV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg KHV plausibel |
| STAT_VERSTELLWEG_STV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg STV plausibel |
| STAT_VERSTELLWEG_LKV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg LKV plausibel |
| STAT_VERSTELLWEG_LBV | 0-n | high | unsigned char | - | TAB_INITIALISIERUNG_SITZ_PLAUSI | - | - | - | Status Verstellweg LBV plausibel |
| STAT_NORMBLOCK_SLV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SLV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_SLV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SLV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_SHV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SHV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_SHV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SHV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_LNV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LNV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_LNV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LNV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_SNV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SNV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_SNV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock SNV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_KHV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock KHV (CC KK) plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_KHV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock KHV (CC KK) minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_STV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock STV plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_STV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock STV minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_LBV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LBV (CC FNV) plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_LBV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LBV (CC FNV) minus: 8192..57344, 0 = ungültig |
| STAT_NORMBLOCK_LKV_PLUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LKV (CC RSE) plus: 8192..57344, 65535 = ungültig |
| STAT_NORMBLOCK_LKV_MINUS_WERT | Ink | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Normblock LKV (CC RSE) minus: 8192..57344, 0 = ungültig |
| STAT_DUMMY13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_INIT_SITZ_2SR | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung FBK2 / Business Lounge 2. Sitzreihe |
| STAT_INIT_SITZ_3SR | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung FBK2 3. Sitzreihe |
| STAT_INIT_SITZ_KF_SSDV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld SLV, SHV, LNV |
| STAT_INIT_SITZ_PTV_RSE | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung statische Verriegelung PTV/RSE |
| STAT_INIT_SITZ_CALFREST | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld Wadenauflage |
| STAT_INIT_SITZ_FOLDBENCH | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld Lehnenklappung zweite Sitzreihe |
| STAT_INIT_SITZ_RSTPOS | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Resetposition anfahren |
| STAT_INIT_SITZ_ST_LIM_KHV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung statische Begrenzung KHV |
| STAT_INIT_SITZ_CDR | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Sitzpositionsübergabe für den Crashdatenrecorder |
| STAT_INIT_SITZ_KF_KHV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld 4D |
| STAT_INIT_SITZ_EE_SR1 | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Easy Entry SR1 |
| STAT_INIT_SITZ_KF_LKV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld LNV/LKV |
| STAT_INIT_FLLUP_SNV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Folgebewegung SNV bei SLV-Verstellung nach vorne |
| STAT_INIT_SITZ_KF_SB | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Kollisionskennfeld Sitzbelüftung |
| STAT_INIT_SITZ_PIA | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung PIA |
| STAT_INIT_SITZ_SITPOS_MF | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Sitzpositionsübergabe Mann/Frau |
| STAT_INIT_SITZ_UEKB | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung ÜKB |
| STAT_INIT_SITZ_ST_LIM_LKV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung statische Begrenzung LKV |
| STAT_INIT_SITZ_FES_LBV | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung FES LBV |
| STAT_INIT_SITZ_CC | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung Captain Chair |
| STAT_INIT_SITZ_PRCR | 0-n | high | unsigned char | - | TAB_INIT | - | - | - | Status Initialisierung PreCrash |

### RES_0XD708_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor SLV |
| STAT_MOTOR_SHV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor SHV |
| STAT_MOTOR_LNV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor LNV |
| STAT_MOTOR_SNV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor SNV |
| STAT_MOTOR_KHV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor KHV (KK im CC) |
| STAT_MOTOR_STV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor STV |
| STAT_MOTOR_LBV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor LBV (FNV im CC) |
| STAT_MOTOR_LKV | 0-n | high | unsigned char | - | TAB_STATUS_MOTOR | - | - | - | Status Motor LKV (RSE im CC) |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_LORDOSE_AUF | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Lordose auf: Interpretation siehe Tabelle |
| STAT_SCHALTER_LORDOSE_AB | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Lordose ab: Interpretation siehe Tabelle |
| STAT_SCHALTER_LORDOSE_VOR | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Lordose vor: Interpretation siehe Tabelle |
| STAT_SCHALTER_LORDOSE_ZURUECK | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Lordose zurück: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_MEMORY_1 | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Memory Position 1: Interpretation siehe Tabelle |
| STAT_SCHALTER_MEMORY_2 | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Memory Position 2: Interpretation siehe Tabelle |
| STAT_SCHALTER_MEMORY_MEM | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Memory Speichern: Interpretation siehe Tabelle |
| STAT_SCHALTER_MEMORY_RES | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Reset Position: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_GENT | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Gentleman-Funktion: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD70F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_LVK | 0-n | high | unsigned char | - | TAB_SCHALTER_LVK | - | - | - | Status Lehnenverriegelungskontakt |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD710_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SITZHEIZUNG | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Sitzheizung: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD711_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SITZKLIMA | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Sitzklima: Interpretation siehe Tabelle |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD712_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SV_SLV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SLV plus |
| STAT_SCHALTER_SV_SLV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SLV minus |
| STAT_SCHALTER_SV_SHV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SHV plus |
| STAT_SCHALTER_SV_SHV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SHV minus |
| STAT_SCHALTER_SV_LNV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LNV plus |
| STAT_SCHALTER_SV_LNV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LNV minus |
| STAT_SCHALTER_SV_SNV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SNV plus |
| STAT_SCHALTER_SV_SNV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SNV minus |
| STAT_SCHALTER_SV_KHV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste KHV (KK im CC) plus |
| STAT_SCHALTER_SV_KHV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste KHV (KK im CC) minus |
| STAT_SCHALTER_SV_STV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste STV plus |
| STAT_SCHALTER_SV_STV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste STV minus |
| STAT_SCHALTER_SV_LBV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LBV (FNV im CC) plus |
| STAT_SCHALTER_SV_LBV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LBV (FNV im CC) minus |
| STAT_SCHALTER_SV_LKV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LKV (RSE im CC) plus |
| STAT_SCHALTER_SV_LKV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LKV (RSE im CC) minus |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD713_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_FB | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Fernbedienung: Interpretation siehe Tabelle |
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
| STAT_SITZKLIMA | 0-n | high | unsigned char | - | TAB_CONF_CODIERT_SITZKLIMA | - | - | - | Codierte Konfiguration Sitzklima (nur für SW vor 18-07) |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzklima: 0...3, 255 = ungültig |
| STAT_VERSORGUNG | 0-n | high | unsigned char | - | TAB_SITZKLIMA_VERSORGUNG | - | - | - | Status Versorgung Sitzklima Lüfter |
| STAT_DREHZAHLSTUFE_KISSEN | 0-n | high | unsigned char | - | TAB_STATUS_LANGSAM_SCHNELL | - | - | - | Drehzahlstufe Kissen (nur Einzellüfter mit 2 Geschwindigkeiten) |
| STAT_DREHZAHLSTUFE_LEHNE | 0-n | high | unsigned char | - | TAB_STATUS_LANGSAM_SCHNELL | - | - | - | Drehzahlstufe Lehne (nur Einzellüfter mit 2 Geschwindigkeiten) |
| STAT_PWM_MAX_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Berechnetes maximal zulässiges PWM Verhaeltnis (Akustikmassnahme, nur Zentrallüfter geregelt): 0...100%, 255 = Wert steht nicht zur Verfügung |
| STAT_PWM_KISSEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Kissen (nur Einzellüfter PWM und Zentrallüfter PWM gesteuert/geregelt): 0...100%, 255 = ungültig |
| STAT_PWM_LEHNE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Lehne (nur Einzellüfter PWM und Zentrallüfter PWM gesteuert/geregelt): 0...100%, 255 = ungültig |
| STAT_STROM_LUEFTER_WERT | A | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Lüfterstrom (Summe aller Lüfter in Kissen und Lehne): 0...25 A |
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
| STAT_TEMP_SV_PWM_GRP1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Leiterplatte bei PWM-Treiber Sitzverstellung Gruppe 1: -40...127, -128 = ungültig |
| STAT_TEMP_SV_PWM_GRP2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Leiterplatte bei PWM-Treiber Sitzverstellung Gruppe 2: -40...127, -128 = ungültig |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD71E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_EE_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Easy Entry plus: Interpretation siehe Tabelle |
| STAT_SCHALTER_EE_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Easy Entry minus: Interpretation siehe Tabelle |
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

### RES_0XD723_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUSI_1_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_1_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_1_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_1_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_1_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_1_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_1_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_2_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_2_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_2_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_2_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_2_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_2_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_2_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_3_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_3_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_3_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_3_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_3_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_3_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_3_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_4_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_4_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_4_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_4_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_4_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_4_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_4_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_5_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_5_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_5_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_5_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_5_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_5_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_5_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_6_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_6_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_6_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_6_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_6_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_6_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_6_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_7_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_7_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_7_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_7_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_7_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_7_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_7_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_8_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_8_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_8_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_8_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_8_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_8_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_8_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_9_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_9_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_9_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_9_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_9_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_9_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_9_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_10_MODULE_ID | 0-n | high | unsigned int | - | TAB_SM_FUSI_MOD_ID | - | - | - | ID des FSM Moduls, das den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_10_API_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_FCTN_ID | - | - | - | ID der FSM Funktion, die den internen Fehler gemeldet hat (Interpretation siehe Tabelle) |
| STAT_FUSI_10_ERROR_ID | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ID | - | - | - | ID des internen Fehlers (Interpretation siehe Tabelle) |
| STAT_FUSI_10_SYSTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Meldung des internen Fehlers |
| STAT_FUSI_10_REGTIME_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel STM_CNT bei Meldung des internen Fehlers |
| STAT_FUSI_10_ERROR_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszäher für den internen Fehler |
| STAT_FUSI_10_ERROR_STATUS | 0-n | high | unsigned char | - | TAB_SM_FUSI_ERR_ST | - | - | - | Status des internen Fehlers |
| STAT_FUSI_RESET_CTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Resets seit letztem Power On |

### RES_0XD724_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_PTV | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste PTV |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XD725_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_MONITOR_RSE | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Monitorneigungsverstellung (RSE) |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XD72B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_FSV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter FSV plus |
| STAT_SCHALTER_FSV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter FSV minus |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XD72C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORMAPPING_ID | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | aktiviertes Motormapping |
| STAT_MOTOR_G1_P1_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 1 Position 1 (Standardbelegung SLV) |
| STAT_MOTOR_G1_P2_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 1 Position 2 (Standardbelegung SHV) |
| STAT_MOTOR_G1_P3_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 1 Position 3 (Standardbelegung LNV) |
| STAT_MOTOR_G1_P4_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 1 Position 4 (Standardbelegung SNV) |
| STAT_MOTOR_G2_P1_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 2 Position 1 (Standardbelegung KHV) |
| STAT_MOTOR_G2_P2_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 2 Position 2 (Standardbelegung STV) |
| STAT_MOTOR_G2_P3_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 2 Position 3 (Standardbelegung LBV) |
| STAT_MOTOR_G2_P4_FCT | 0-n | high | unsigned char | - | TAB_SM_MOTOREN_FCT | - | - | - | Funtion des Motorausgangs Gruppe 2 Position 4 (Standardbelegung LKV) |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | Reserve |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | Reserve |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | Reserve |

### RES_0XD72E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_CRW_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter CRW (Wadenablage Winkelstellung) plus |
| STAT_SCHALTER_CRW_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter CRW (Wadenablage Winkelstellung) minus |
| STAT_SCHALTER_CRFE_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter CRFE (Wadenablage Längeneinstellung) plus |
| STAT_SCHALTER_CRFE_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter CRFE (Wadenablage Längeneinstellung) minus |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XD79E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORMAPPING | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | aktiviertes Motormapping |
| STAT_SCHALTER_FB_KHV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter KHV plus |
| STAT_SCHALTER_FB_KHV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter KHV minus |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG_LOKAL_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung lokaler Sitz (LNV) plus |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG_LOKAL_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung lokaler Sitz (LNV) minus |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG_NACHBAR_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung für Nachbarsitz (LNV) plus |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG_NACHBAR_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung für Nachbarsitz (LNV) minus |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG_GEPAECKRAUM_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung aus Gepäckraum (LNV) plus |
| STAT_SCHALTER_FB_LEHNENKLAPPUNG_GEPAECKRAUM_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung aus Gepäckraum (LNV) minus |
| STAT_SCHALTER_LVK | 0-n | high | unsigned char | - | TAB_SCHALTER_LVK | - | - | - | Status Lehnenverriegelungskontakt |
| STAT_SCHALTER_TILTING_BOOT | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Tilting Boot |
| STAT_SCHALTER_LVK_LEHNENPOS_GEKLAPPT | 0-n | high | unsigned char | - | TAB_SCHALTER_LVK_LEHNE_GEKLAPPT | - | - | - | Status Schalter für die Erkennung der Lehnenendposition (Lehne komplett umgeklappt) |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XD7AF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZKLIMA_CONFIG_KISSEN | 0-n | high | unsigned char | - | TAB_CONF_CODIERT2_SITZKLIMA | - | - | - | Codierte Konfiguration Sitzbelüftung Kissen (ab 18-07) |
| STAT_SITZKLIMA_CONFIG_LEHNE | 0-n | high | unsigned char | - | TAB_CONF_CODIERT2_SITZKLIMA | - | - | - | Codierte Konfiguration Sitzbelüftung Lehne (ab 18-07) |
| STAT_SCHALTER_DURCHLADE | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Verriegelungskontakt Durchlade: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_LVK2 | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Lehnenverriegelungskontakt 2: 0 = nicht codiert, 1 = codiert |
| STAT_SCHALTER_TILTING_BOOT | 0/1 | high | unsigned char | - | - | - | - | - | Codierte Konfiguration Schalter Tilting Boot: 0 = nicht codiert, 1 = codiert |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD7F0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEREITSCHAFT_NACKENWAERMER_FAHRER | 0-n | high | unsigned char | - | TAB_NWR_STAT_BEREITSCHAFT | - | - | - | Bereitschaft Nackenwaermer Fahrer (siehe Tabelle) |
| STAT_STUFE_NWR_FAHRER | 0-n | high | unsigned char | - | TAB_NWR_STAT_STUFE | - | - | - | Stufe Nackenwaermer Fahrer (siehe Tabelle) |
| STAT_ANF_TEMP_HEIZELEMENT_NWR_FAHRER_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angeforderte Temperatur Heizelement Fahrer: 0 bis 100°C, Wert 255 = ungültig |
| STAT_AKT_TEMP_LEITERPLATTE_NWR_FAHRER_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Aktuelle Temperatur Leiterplatte Nackenwaermer Fahrer: 0 bis 125°C, Wert 127,5 = ungültig |
| STAT_ANF_DREHZAHL_LUEFTER_NWR_FAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angeforderte Drehzahl Luefter Fahrer: 0 bis 100%, Wert 255 = ungültig |
| STAT_AKT_DREHZAHL_LUEFTER1_NWR_FAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 1 Fahrer: 0 bis 100%, Wert 255 = ungültig |
| STAT_AKT_DREHZAHL_LUEFTER2_NWR_FAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 2 Fahrer: 0 bis 100%, Wert 255 = ungültig |
| STAT_AKT_DREHZAHL_UMIN_LUEFTER1_NWR_FAHRER_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 1 Fahrer berechnet: 0 bis 15000 U/min, Wert 65535 = ungültig |
| STAT_AKT_DREHZAHL_UMIN_LUEFTER2_NWR_FAHRER_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 2 Fahrer berechnet: 0 bis 15000 U/min, Wert 65535 = ungültig |
| STAT_DUMMY11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_BEREITSCHAFT_NACKENWAERMER_BEIFAHRER | 0-n | high | unsigned char | - | TAB_NWR_STAT_BEREITSCHAFT | - | - | - | Bereitschaft Nackenwaermer Beifahrer (siehe Tabelle) |
| STAT_STUFE_NWR_BEIFAHRER | 0-n | high | unsigned char | - | TAB_NWR_STAT_STUFE | - | - | - | Stufe Nackenwaermer Beifahrer (siehe Tabelle) |
| STAT_ANF_TEMP_HEIZELEMENT_NWR_BEIFAHRER_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angeforderte Temperatur Heizelement Beifahrer: 0 bis 100°C, Wert 255 = ungültig |
| STAT_AKT_TEMP_LEITERPLATTE_NWR_BEIFAHRER_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Aktuelle Temperatur Leiterplatte Nackenwaermer Beifahrer: 0 bis 125°C, Wert 127,5 = ungültig |
| STAT_ANF_DREHZAHL_LUEFTER_NWR_BEIFAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angeforderte Drehzahl Luefter Beifahrer: 0 bis 100%, Wert 255 = ungültig |
| STAT_AKT_DREHZAHL_LUEFTER1_NWR_BEIFAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 1 Beifahrer: 0 bis 100%, Wert 255 = ungültig |
| STAT_AKT_DREHZAHL_LUEFTER2_NWR_BEIFAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 2 Beifahrer: 0 bis 100%, Wert 255 = ungültig |
| STAT_AKT_DREHZAHL_UMIN_LUEFTER1_NWR_BEIFAHRER_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 1 Beifahrer berechnet: 0 bis 15000 U/min, Wert 65535 = ungültig |
| STAT_AKT_DREHZAHL_UMIN_LUEFTER2_NWR_BEIFAHRER_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl Luefter 2 Beifahrer berechnet: 0 bis 15000 U/min, Wert 65535 = ungültig |
| STAT_DUMMY21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XD7F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_FAHRER | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Bedienschalter Nackenwaermer Fahrer (siehe Tabelle) |
| STAT_TASTE_BEIFAHRER | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Bedienschalter Nackenwaermer Beifahrer (siehe Tabelle) |

### RES_0XDB4D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORMAPPING | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | aktiviertes Motormapping |
| STAT_SCHALTER_SV_SLV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SLV plus |
| STAT_SCHALTER_SV_SLV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste SLV minus |
| STAT_SCHALTER_SV_LNV_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LNV plus |
| STAT_SCHALTER_SV_LNV_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste LNV minus |
| STAT_SCHALTER_LEHNENKLAPPUNG_2SR_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung lokaler Sitz (2SR) plus |
| STAT_SCHALTER_LEHNENKLAPPUNG_2SR_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Lehnenklappung lokaler Sitz (2SR) minus |
| STAT_SCHALTER_EE_PLUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Easy Entry plus |
| STAT_SCHALTER_EE_MINUS | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste Easy Entry minus |
| STAT_SCHALTER_LVK | 0-n | high | unsigned char | - | TAB_SCHALTER_LVK | - | - | - | Status Lehnenverriegelungskontakt (für 60/40%-Lehne) |
| STAT_SCHALTER_LVK2 | 0-n | high | unsigned char | - | TAB_SCHALTER_LVK | - | - | - | Status Lehnenverriegelungskontakt 2 (falls vorhanden, für 60%-Lehne) |
| STAT_SCHALTER_DURCHLADE | 0-n | high | unsigned char | - | TAB_SCHALTER_DURCHLADE | - | - | - | Status Verriegelungskontakt Durchlade |
| STAT_SCHALTER_FA_TUER_VERSTELLUNG_2SR | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_FAT_2SR | - | - | - | Status ext. Schalter in der Fahrertür - Verstellung komplette 2. Sitzreihe |
| STAT_SCHALTER_POS_RESET | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Taste RESET Sitzposition |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XDB4E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORMAPPING | 0-n | high | unsigned char | - | TAB_SM_STAT_MOTORMAPPING | - | - | - | aktiviertes Motormapping |
| STAT_SCHALTER_MAX_COMFORT | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Max-Comfort |
| STAT_SCHALTER_MAX_SPACE | 0-n | high | unsigned char | - | TAB_STATUS_TASTE | - | - | - | Status Schalter Max-Space |
| STAT_SCHALTER_LEHNENKLAPPUNG_2SR_FAH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status Schalter Lehnenklappung - 2. Sitzreihe Fahrerseite |
| STAT_SCHALTER_LEHNENKLAPPUNG_2SR_BFH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status Schalter Lehnenklappung - 2. Sitzreihe Beifahrerseite |
| STAT_SCHALTER_LEHNENKLAPPUNG_3SR_FAH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status Schalter Lehnenklappung - 3. Sitzreihe Fahrerseite |
| STAT_SCHALTER_LEHNENKLAPPUNG_3SR_BFH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status Schalter Lehnenklappung - 3. Sitzreihe Beifahrerseite |
| STAT_SCHALTER_EXT_FA_SEITE_LEHNENKLAPPUNG_3SR_FAH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status ext. Schalter C-Säule FA-Seite - Lehnenklappung 3. Sitzreihe Fahrerseite |
| STAT_SCHALTER_EXT_FA_SEITE_LEHNENKLAPPUNG_3SR_BFH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status ext. Schalter C-Säule FA-Seite - Lehnenklappung 3. Sitzreihe Beifahrerseite |
| STAT_SCHALTER_EXT_BF_SEITE_LEHNENKLAPPUNG_3SR_FAH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status ext. Schalter C-Säule BF-Seite - Lehnenklappung 3. Sitzreihe Fahrerseite |
| STAT_SCHALTER_EXT_BF_SEITE_LEHNENKLAPPUNG_3SR_BFH | 0-n | high | unsigned char | - | TAB_SM_SCHALTER_LEHNENKLAPPUNG | - | - | - | Status ext. Schalter C-Säule BF-Seite - Lehnenklappung 3. Sitzreihe Beifahrerseite |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XE2EF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_SCHALTER_DURCHLADE | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Verriegelungskontakt Durchlade: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_LVK2 | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Lehnenverriegelungskontakt 2: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_SCHALTER_TILTING_BOOT | 0/1 | high | unsigned char | - | - | - | - | - | HW Konfiguration Schalter Tilting Boot: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_DUMMY4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### RES_0XE46A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARAMETERDATEN_NWR_FA | 0-n | high | unsigned char | - | TAB_NWR_STAT_PARAMETERDATEN | - | - | - | Status der Parameterdaten im Nackenwärmer-SG Fahrer |
| STAT_PARAMETERDATEN_NWR_BF | 0-n | high | unsigned char | - | TAB_NWR_STAT_PARAMETERDATEN | - | - | - | Status der Parameterdaten im Nackenwärmer-SG Beifahrer |
| STAT_CRC_PARAMETERDATEN_NWR_SM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CRC der Parameterdaten für Funktion Nackenwärmer im Sitzmodul (LIN-Master) |
| STAT_CRC_PARAMETERDATEN_NWR_FA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CRC der Parameterdaten im Nackenwärmer-SG Fahrer (LIN-Slave) |
| STAT_CRC_PARAMETERDATEN_NWR_BF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CRC der Parameterdaten im Nackenwärmer-SG Beifahrer (LIN-Slave) |
| STAT_DUMMY11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |
| STAT_DUMMY14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorhalt für Erweiterungen |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| DEVELOPMENT_INFO | 0x4010 | - | Statusabfrage interne Software Versionsnummern Applikation (SWFL) und Bootloader (BTLD) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| _DEBUG_MSG | 0x4030 | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4030_D | RES_0x4030_D |
| INITIALISIERUNGSLAUF_CODIERT | 0xA703 | - | Initialisierung der Verstellmotore mit einem im Steuergerät codierten Ablauf. Service = 0x31. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA703_R |
| SELBSTTEST_SITZ | 0xA704 | - | Testet alle Aktoren und intelligenten Sensoren im Sitz | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA704_R |
| CONFIG_HW | 0xD700 | - | Ausgabe der Hardwarekonfiguration des Steuergerätes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD700_D |
| CONFIG_CODIERT | 0xD701 | - | Ausgabe der codierten Konfiguration des Steuergerätes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD701_D |
| HALLZAEHLER | 0xD702 | - | Abfrage Hallzähler / Position der verschiedenen Achsen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD702_D |
| INITIALISIERUNGSLAUF_FREI | 0xD703 | - | Frei konfigurierbarer Initialisierungslauf | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD703_D |
| INITIALISIERUNG_SITZ | 0xD704 | - | Status der Initialisierung aller Verstellmotoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD704_D |
| MOTOR | 0xD708 | - | Ansteuerung und Statusabfrage der Verstellmotoren | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD708_D | RES_0xD708_D |
| SCHALTER_LORDOSE | 0xD70B | - | Statusabfrage Schalter Lordose | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70B_D |
| SCHALTER_MEMORY | 0xD70C | - | Statusabfrage Schalter Memory | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD70C_D | RES_0xD70C_D |
| SCHALTER_GENT | 0xD70E | - | Ausgabe des Status des Umschalters für die Gentlemanfunktion (Verstellung Beifahrersitz vom Fahrersitz aus). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70E_D |
| SCHALTER_LVK | 0xD70F | - | Abfrage Status des Lehnenverriegelungskontakts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD70F_D |
| SCHALTER_SITZHEIZUNG | 0xD710 | - | Statusabfrage Schalter Sitzheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD710_D |
| SCHALTER_SITZKLIMA | 0xD711 | - | Statusabfrage Schalter Sitzklima | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD711_D |
| SCHALTER_SV | 0xD712 | - | Statusabfrage Sitzverstellschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD712_D |
| SCHALTER_FERNB_BF | 0xD713 | - | Statusabfrage Schalter Fernbedienung (Verstellung Beifahrersitz durch den Beifahrer hinten) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD713_D |
| SITZHEIZUNG | 0xD714 | - | Ansteuerung und Statusabfrage der Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD714_D | RES_0xD714_D |
| SITZKLIMA | 0xD715 | - | Ansteuerung und Statusabfrage der Sitzklima | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD715_D | RES_0xD715_D |
| VERSTELLZAEHLER_SITZ | 0xD716 | - | Statusabfragen Anzahl Motorverstellungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD716_D |
| ENTW_TEMP_ECU | 0xD717 | - | Temperatur Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD717_D |
| HALLZAEHLER_RESET | 0xD719 | - | Reset Hallzähler durchführen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD719_D | - |
| SCHALTER_EE | 0xD71E | - | Ausgabe Status Taste Fondeinstiegshilfe Ansteuern der Leuchtdioden im Schalter Interpretation siehe Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD71E_D |
| STATISTIK_SITZ | 0xD722 | - | Sitz Statistikdaten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD722_D | RES_0xD722_D |
| FUSI_EVENTLOG_SITZ | 0xD723 | - | FuSi Event Log Sitz | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD723_D | RES_0xD723_D |
| SCHALTER_PTV | 0xD724 | - | Schalter für Picknicktischverstellung (PTV) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD724_D |
| SCHALTER_RSE | 0xD725 | - | Schalter für Monitorneigungsverstellung (RSE) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD725_D |
| SCHALTER_FSV | 0xD72B | - | Schalter für Fußstützenverstellung (FSV) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD72B_D |
| MOTORMAPPING | 0xD72C | - | Motormapping im Sitzmodul | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD72C_D | RES_0xD72C_D |
| SCHALTER_CALFREST | 0xD72E | - | Schalter für Calfrest (Wadenablage) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD72E_D |
| SCHALTER_FOLDBENCH | 0xD79E | - | Schalter für Foldbench | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD79E_D |
| CONFIG_CODIERT2 | 0xD7AF | - | Codierte Konfiguration des Steuergerätes (nur für SW ab 18-07) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7AF_D |
| NACKENWAERMER | 0xD7F0 | - | Nackenwaermer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7F0_D | RES_0xD7F0_D |
| BEDIENSCHALTER_NACKENWAERMER | 0xD7F2 | - | Bedienschalter Nackenwaermer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7F2_D | RES_0xD7F2_D |
| DEFAULTWERTE_SITZ | 0xDAFC | - | Defaultwerte im Sitzmodul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAFC_D | - |
| SCHALTER_FBK2_2SR_3SR | 0xDB4D | - | Schalter für FBK2-Sitzkonfiguration (2+3 Sitzreihe) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB4D_D |
| SCHALTER_LEHNENKLAPPUNG_GPR | 0xDB4E | - | Schalterblock Lehnenklappung (LIN) im Gepäckraum | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB4E_D |
| CONFIG_HW2 | 0xE2EF | - | HW Konfiguration des Steuergerätes (nur für SW ab 18-07) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2EF_D |
| NACKENWAERMER_PARAMETRIERUNG | 0xE46A | - | Parameterdaten für Nackenwärmer-SG (LIN) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE46A_D | RES_0xE46A_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

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
| 0x0E | Fehler beim Lesen der Adaptionslauf Fehlermeldungen aus dem EEPROM |
| 0x10 | Adaptionslauf aktiv |
| 0x20 | Adaptionslauf erfolgreich |
| 0x30 | Adaptionslauf nicht erfolgreich |
| 0x40 | Adaptionslauf nicht durchgeführt, da sich Motor nicht am Hardblock befindet |
| 0x50 | Adaptionslauf nicht erfolgreich wegen Adaptionsbereichsüberschreitung |
| 0x60 | Adaptionslauf nicht durchgeführt, da fuer angegebenen Motor nicht moeglich |
| 0xE0 | Fehler beim Lesen der Adaptionslauf Fehlermeldungen aus dem EEPROM |
| 0xFD | Adaptionslauffehler (siehe Ergebnisse STAT_ADAP_ERROR_G...) |
| 0xFE | Fehler beim Lesen der Adaptionslauf Fehlermeldungen aus dem EEPROM |
| 0xFF | Wert ungültig |

### TAB_ARG_SITZKLIMA_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | LEGACY |
| 0x01 | AS_CODED |
| 0x02 | SINGLE_FANS_2SPEED |
| 0x03 | SINGLE_FANS_PWM |
| 0x04 | CENTRAL_FAN_REGULATED |
| 0x05 | CENTRAL_FAN_CONTROLLED |

### TAB_CONFIG_CODIERT_LVK

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert |
| 0x01 | codiert (SR1 oder SR2 business lounge) |
| 0x02 | codiert (SR2 RRNM Foldbench) |
| 0x03 | codiert (SR2 FBK2 Notentriegelungskontakt) |
| 0xFF | Wert ungültig |

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

### TAB_CONF_CODIERT2_SITZKLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert - Sitzklima nicht vorhanden |
| 0x01 | codiert: Sitzklima im Diagnosemodus deaktiviert |
| 0x02 | codiert: Einzellüfter mit 2 Geschwindigkeiten |
| 0x03 | codiert: Einzellüfter PWM |
| 0x04 | codiert: Zentrallüfter PWM geregelt |
| 0x05 | codiert: Zentrallüfter PWM gesteuert |
| 0xFF | Wert ungültig |

### TAB_CONF_CODIERT_SITZKLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht codiert |
| 0x01 | codiert: gesteuert |
| 0x02 | codiert: geregelt |
| 0xFE | Konfiguration nur mit CONFIG_CODIERT2 ermittelbar |
| 0xFF | Wert ungültig |

### TAB_DEFAULTWERTE_SITZ_DATEN

| WERT | TEXT |
| --- | --- |
| 0x00 | PIA_SERVICES |
| 0x01 | POSITIONS |
| 0xFE | ALL_DATA |

### TAB_HALLZAEHLER_RESET_MOTOR_CC

| WERT | TEXT |
| --- | --- |
| 0x00 | SLV |
| 0x01 | SHV |
| 0x02 | LNV |
| 0x03 | SNV |
| 0x04 | KHV |
| 0x04 | KK |
| 0x05 | STV |
| 0x06 | LBV |
| 0x06 | FNV |
| 0x07 | LKV |
| 0x07 | RSE |
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
| 0x08 | POS_PLUS_HALL |
| 0x09 | POS_MINUS_HALL |
| 0x0A | WAIT |
| 0x0B | ADAP_POS_PLUS_PHYS |
| 0x0C | ADAP_POS_MINUS_PHYS |

### TAB_INITIALISIERUNG_SITZ_ADAP

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht adaptiert |
| 0x01 | adaptiert |
| 0x02 | Motor nicht vorhanden / nicht codiert oder Adaption nicht relevant |
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
| 0x07 | Anzahl Verstellungen größer SV_SCHWELLE_REKALIBRIEREN (Codierparameter) |
| 0x08 | Anzahl Verstellungen größer SV_SCHWELLE_BOTSCHAFT_OHNE_POSITION (Codierparameter) |
| 0x09 | Normieranschlag überfahren |
| 0x0A | Fehler beim Lesen der Entnormierursache aus dem EEPROM (Nur Info! Es erfolgt dabei keine Entnormierung) |
| 0x0B | Referenzblock für die Plausibilisierung eines mechanischen Anschlags ueber den gegenueberliegenden Normblock nicht in Ordnung (Nur Info! Es erfolgt dabei keine Entnormierung) |
| 0x0C | Normblock wurde herangezogen (Nur Info! Es erfolgt dabei keine Entnormierung) |
| 0xFF | Ungültig |

### TAB_INITIALISIERUNG_SITZ_NORM

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht normiert |
| 0x01 | normiert |
| 0x02 | Motor nicht vorhanden / nicht codiert oder Normierung nicht relevant |
| 0xFF | Ungültig |

### TAB_INITIALISIERUNG_SITZ_PLAUSI

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht plausibel |
| 0x01 | plausibel |
| 0x02 | Motor nicht vorhanden / nicht codiert oder nicht relevant |
| 0xFF | Ungültig |

### TAB_INIT_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Normierlauf durchgeführt |
| 0x01 | Normierlauf aktiv |
| 0x02 | Normierlauf durchgeführt  |
| 0x03 | Normierlauf nicht gestartet wegen Fahrzeuggeschwindigkeit >= 5km/h und Fertigungsmode = aus |
| 0x04 | Normierlauf nicht gestartet, da Steuergerät nicht codiert |
| 0x05 | Normierlauf nicht gestartet, da laut Codierung kein Initialisierungslauf vorgesehen |
| 0x10 | Normierlauf abgebrochen wegen Unter-/Überspannung |
| 0x11 | Normierlauf abgebrochen wegen Panikabbruch via Sitzverstellschalter |
| 0x12 | Normierlauf abgebrochen wegen Fahrzeuggeschwindigkeit >= 10km/h und Fertigungsmode = aus |
| 0x13 | Normierlauf abgebrochen wegen Timeout Statuspolling (3s) |
| 0x14 | Normierlauf abgebrochen durch Diagnose STOP oder wegen Job Timeout (240s) |
| 0x15 | Normierlauf abgebrochen wegen Spannungsausfall |
| 0x16 | Normierlauf abgebrochen wegen SG-Reset |
| 0x17 | Normierlauf abgebrochen wegen Motorfehler |
| 0x18 | Normierlauf abgebrochen, da Adaptionslauf nicht durchgeführt werden konnte (Details siehe STAT_ADAP_..._ERROR) |
| 0x19 | Normierlauf abgebrochen, da Positionierung nicht durchgeführt werden konnte (Steuergerät nicht codiert) |
| 0x1A | Normierlauf abgebrochen, da Positionierung nicht durchgeführt werden konnte (zu positionierender Motor nicht normiert) |
| 0x1B | Normierlauf abgebrochen, da Hardware zur Motoransteuerung oder Hallsensorauswertung nicht vorhanden |
| 0x1C | Normierlauf abgebrochen wegen Hallsensorfehler |
| 0x1D | Normierlauf abgebrochen wegen Angabe eines ungültigen Motors im Initialisierungsablauf |
| 0x1E | Normierlauf abgebrochen wegen Angabe einer ungültigen Aktion im Initialisierungsablauf |
| 0x1F | Normierlauf abgebrochen, da Positionierung nicht durchgeführt werden konnte (Positionsberechnung nicht möglich) |
| 0x20 | Normierlauf nicht gestartet, da Fertigungsmode = AUS |
| 0x21 | Normierlauf nicht gestartet, da Motormapping nicht gesetzt ist |
| 0xFE | Fehler beim Lesen der Initialisierungslauf-Fehlermeldungen aus dem EEPROM |
| 0xFF | Wert ungültig |

### TAB_INIT_STEP

| WERT | TEXT |
| --- | --- |
| 0x00 | SLV stop |
| 0x01 | SLV Normierfahrt vor |
| 0x02 | SLV Normierfahrt zurück |
| 0x03 | SLV Positionierung auf Hallzähler 0x8000 |
| 0x04 | SLV (LNV_SR2) Adaptionsfahrt vor |
| 0x05 | SLV (LNV_SR2) Adaptionsfahrt zurück |
| 0x06 | SLV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x07 | SLV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x10 | SHV stop |
| 0x11 | SHV Normierfahrt auf |
| 0x12 | SHV Normierfahrt ab |
| 0x13 | SHV Positionierung auf Hallzähler 0x8000 |
| 0x14 | SHV (LNV_SR3) Adaptionsfahrt vor |
| 0x15 | SHV (LNV_SR3) Adaptionsfahrt zurück |
| 0x16 | SHV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x17 | SHV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x20 | LNV stop |
| 0x21 | LNV Normierfahrt vor |
| 0x22 | LNV Normierfahrt zurück |
| 0x23 | LNV Positionierung auf Hallzähler 0x8000 |
| 0x24 | LNV (SLV_SR2) / SNV (EasyEntry_SR2) Adaptionsfahrt vor |
| 0x25 | LNV (SLV_SR2) / SNV (EasyEntry_SR2) Adaptionsfahrt zurück |
| 0x26 | LNV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x27 | LNV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x30 | SNV stop |
| 0x31 | SNV Normierfahrt auf |
| 0x32 | SNV Normierfahrt ab |
| 0x33 | SNV Positionierung auf Hallzähler 0x8000 |
| 0x36 | SNV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x37 | SNV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x40 | KHV (CC: KK) stop |
| 0x41 | KHV (CC: KK) Normierfahrt auf |
| 0x42 | KHV (CC: KK) Normierfahrt ab |
| 0x43 | KHV (CC: KK) Positionierung auf Hallzähler 0x8000 |
| 0x46 | KHV (CC: KK) Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x47 | KHV (CC: KK) Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x50 | STV stop |
| 0x51 | STV Normierfahrt vor |
| 0x52 | STV Normierfahrt zurück |
| 0x53 | STV Positionierung auf Hallzähler 0x8000 |
| 0x56 | STV Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x57 | STV Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x60 | LBV (CC: FNV) stop |
| 0x61 | LBV (CC: FNV) Normierfahrt breit (CC: ausklappen) |
| 0x62 | LBV (CC: FNV) Normierfahrt schmal (CC: einklappen) |
| 0x63 | LBV (CC: FNV) Positionierung auf Hallzähler 0x8000 |
| 0x66 | LBV (CC: FNV) Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x67 | LBV (CC: FNV) Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0x70 | LKV (CC: RSE) stop |
| 0x71 | LKV (CC: RSE) Normierfahrt vor |
| 0x72 | LKV (CC: RSE) Normierfahrt zurück |
| 0x73 | LKV (CC: RSE) Positionierung auf Hallzähler 0x8000 |
| 0x76 | LKV (CC: RSE) Positionierung auf angegebenen Abstand (physikalisch) vom positiven Anschlag |
| 0x77 | LKV (CC: RSE) Positionierung auf angegebenen Abstand (physikalisch) vom negativen Anschlag |
| 0xF0 | Kein Motor aktiv |
| 0xFF | Wert ungültig |

### TAB_MOTOR_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | PLUS |
| 0x02 | MINUS |

### TAB_NWR_AKTION_PARAMETER_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | KEINE_AKTION |
| 0x01 | START_PAR_NWR_FA |
| 0x02 | START_PAR_NWR_BF |
| 0x03 | START_PAR_NWR_FA_BF |

### TAB_NWR_STAT_BEREITSCHAFT

| WERT | TEXT |
| --- | --- |
| 0x00 | funktionsbereit |
| 0x01 | nicht funktionsbereit |
| 0xFF | Wert ungültig |

### TAB_NWR_STAT_PARAMETERDATEN

| WERT | TEXT |
| --- | --- |
| 0x00 | aktuelle Parameterdaten noch nicht übertragen |
| 0x01 | aktuelle Parameterdaten wurden übertragen |
| 0x02 | Funktion nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

### TAB_NWR_STAT_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Stufe 0 - ausgeschaltet |
| 0x01 | Stufe 1 |
| 0x02 | Stufe 2 |
| 0x03 | Stufe 3 |
| 0xFF | Wert ungültig |

### TAB_SCHALTER_DURCHLADE

| WERT | TEXT |
| --- | --- |
| 0x00 | defekt |
| 0x01 | Durchlade verriegelt |
| 0x02 | Durchlade entriegelt |
| 0x03 | nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

### TAB_SCHALTER_LVK

| WERT | TEXT |
| --- | --- |
| 0x00 | defekt |
| 0x01 | Lehne verriegelt |
| 0x02 | Lehne entriegelt |
| 0x03 | nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

### TAB_SCHALTER_LVK_LEHNE_GEKLAPPT

| WERT | TEXT |
| --- | --- |
| 0x00 | defekt |
| 0x01 | Lehne vollständig umgeklappt |
| 0x02 | Lehne nicht vollständig umgeklappt |
| 0x03 | nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

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
| 0x16 | Selbsttest abgebrochen wegen SG-Reset |
| 0xFE | Fehler beim Lesen der Selbsttest Fehlermeldungen aus dem EEPROM |
| 0xFFFF | Wert ungültig |

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

### TAB_SM_ARG_MOTORMAPPING

| WERT | TEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | SITZ_VL |
| 0x02 | SITZ_VR |
| 0x03 | SITZ_CC_VL |
| 0x04 | SITZ_CC_VR |
| 0x05 | SITZ_RRNM_VL |
| 0x06 | SITZ_RRNM_VR |
| 0x11 | SITZ_KOMF_HL |
| 0x12 | SITZ_KOMF_HR |
| 0x13 | SITZ_FBK2_HL |
| 0x14 | SITZ_FBK2_HR |
| 0x15 | SITZ_FOLDBENCH_HL |
| 0x16 | SITZ_FOLDBENCH_HR |
| 0x17 | SITZ_SLEEP_RRNM_HL |
| 0x18 | SITZ_SLEEP_RRNM_HR |

### TAB_SM_DEV_ARG_MOTORMAPPING

| WERT | TEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | SITZ_VL |
| 0x02 | SITZ_VR |
| 0x03 | SITZ_CC_VL |
| 0x04 | SITZ_CC_VR |
| 0x05 | SITZ_RRNM_VL |
| 0x06 | SITZ_RRNM_VR |
| 0x11 | SITZ_KOMF_HL |
| 0x12 | SITZ_KOMF_HR |
| 0x13 | SITZ_FBK2_HL |
| 0x14 | SITZ_FBK2_HR |
| 0x15 | SITZ_FOLDBENCH_HL |
| 0x16 | SITZ_FOLDBENCH_HR |

### TAB_SM_DEV_DBG_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | Disable_Message |
| 0x01 | Enable_Message |
| 0xFF | Invalid |

### TAB_SM_DEV_DBG_SELECT

| WERT | TEXT |
| --- | --- |
| 0x00 | Disable_All_Debug_Messages |
| 0x01 | Control_Debugmessage_1 |
| 0x02 | Control_Debugmessage_2 |
| 0x03 | Control_Debugmessage_3 |
| 0x04 | Control_Debugmessage_4 |
| 0x05 | Control_Debugmessage_5 |
| 0x06 | Control_Debugmessage_6 |
| 0x07 | Control_Debugmessage_7 |
| 0x08 | Control_Debugmessage_8 |
| 0x09 | Control_Debugmessage_9 |
| 0x0A | Control_Debugmessage_10 |
| 0x0B | Control_Debugmessage_11 |
| 0x0C | Control_Debugmessage_12 |
| 0x0D | Control_Debugmessage_13 |
| 0x0E | Control_Debugmessage_14 |
| 0x0F | Control_Debugmessage_15 |
| 0x10 | Control_Debugmessage_16 |
| 0x11 | Control_Debugmessage_17 |
| 0x12 | Control_Debugmessage_18 |
| 0x13 | Control_Debugmessage_19 |
| 0x14 | Control_Debugmessage_20 |
| 0x15 | Control_Debugmessage_21 |
| 0x16 | Control_Debugmessage_22 |
| 0x17 | Control_Debugmessage_23 |
| 0x18 | Control_Debugmessage_24 |
| 0x19 | Control_Debugmessage_25 |
| 0x1A | Control_Debugmessage_26 |
| 0x1B | Control_Debugmessage_27 |
| 0x1C | Control_Debugmessage_28 |
| 0x1D | Control_Debugmessage_29 |
| 0x1E | Control_Debugmessage_30 |
| 0x1F | Control_Debugmessage_31 |
| 0xFE | Enable_All_Debug_Messages |
| 0xFF | Invalid |

### TAB_SM_DEV_STAT_MOTORMAPPING

| WERT | TEXT |
| --- | --- |
| 0x00 | Default (Codierwert) |
| 0x01 | Sitz VL |
| 0x02 | Sitz VR |
| 0x03 | Sitz CC VL |
| 0x04 | Sitz CC VR |
| 0x05 | Sitz RRNM VL |
| 0x06 | Sitz RRNM VR |
| 0x11 | Komfort/Schlafsitz HL |
| 0x12 | Komfort/Schlafsitz HR |
| 0x13 | Sitz FBK2 HL |
| 0x14 | Sitz FBK2 HR |
| 0x15 | Sitz Foldbench HL |
| 0x16 | Sitz Foldbench HR |
| 0xFF | Wert ungültig |

### TAB_SM_FUSI_DELETE

| WERT | TEXT |
| --- | --- |
| 0x00 | Eventlog komplett loeschen |
| 0x01 | Reserve 1 |
| 0x02 | Reserve 2 |
| 0x03 | Reserve 3 |
| 0x04 | Reserve 4 |
| 0x05 | Reserve 5 |
| 0x06 | Reserve 6 |
| 0x07 | Reserve 7 |
| 0x08 | Reserve 8 |
| 0x09 | Reserve 9 |
| 0x0A | Reserve 10 |

### TAB_SM_FUSI_ERR_ID

| WERT | TEXT |
| --- | --- |
| 0x01 | E2E CRC Fehler |
| 0x02 | E2E Alive Zähler fehler |
| 0x04 | Timeout Geschwindigkeit |
| 0x05 | Wert V_VEH_COG zeigt Signal ist ungültig |
| 0x06 | Wert QU_V_VEH zeigt Signal ist ungültig |
| 0x07 | Erkannter Verbauort entspricht nicht den codiertem Wert |
| 0x08 | reserviert |
| 0x09 | reserviert |
| 0x0A | reserviert |
| 0x0B | reserviert |
| 0x0C | reserviert |
| 0x0D | reserviert |
| 0x0E | reserviert |
| 0x0F | reserviert |
| 0x10 | Verfälschung der Variable zur Speicherung von Anforderungen des R-kodierten Schalters |
| 0x11 | Verfälschung einer SSM-Variablen im INIT-RAM Block |
| 0x12 | Verfälschung einer SSM-Variablen im NON-INIT-RAM Block |
| 0x13 | Verfälschung einer Variablen im IO Block |
| 0x14 | Verfälschung von SLV/FNV Kennfelddaten (Captain Chair) |
| 0x15 | Ungültige Kombination von Codierung und Motormapping bzw. verfälschte Werte |
| 0x16 | reserviert |
| 0x17 | reserviert |
| 0x18 | reserviert |
| 0x19 | reserviert |
| 0x1A | reserviert |
| 0x1B | reserviert |
| 0x1C | reserviert |
| 0x1D | reserviert |
| 0x1E | reserviert |
| 0x1F | reserviert |
| 0x20 | Ungerechtfertigte Aktivierung FAS Motoren (SLV und LNV) aufgrund SW Fehler |
| 0x21 | Aktive FAS SLV Verstellgeschwindigkeit überschreitet 20mm/s bei Fahrzeuggeschwindigkeit ungültig oder größer/gleich 5km/h |
| 0x22 | Aktivierung der FAS Sitzverstellung länger als 2s bei Geschwindigkeit größer/gleich 5 km/h durch SW Fehler |
| 0x23 | Überschreitung von 4 sek Dauer der UEKB-Reversierbewegung bei einer Fahrzeuggeschwindigkeit von mehr als 5km/h |
| 0x24 | Ungerechtfertigte Aktivierung BFS Motoren (SLV, LNV oder FNV) aufgrund SW Fehler |
| 0x25 | Ungerechtfertigte Aktivierung Fold bench Motor (LNV) aufgrund SW Fehler |
| 0x26 | Ungerechtfertigte Aktivierung von Motoren in 2 Sitzreihe (LNV, SLV oder EE_SR2) aufgrund SW Fehler |
| 0x27 | reserviert |
| 0x28 | reserviert |
| 0x29 | reserviert |
| 0x2A | reserviert |
| 0x2B | reserviert |
| 0x2C | reserviert |
| 0x2D | reserviert |
| 0x2E | reserviert |
| 0x2F | reserviert |
| 0x30 | HW Überwachung: Persistent ungerechtfertigter Aktivierung Motorgruppe 1 nach Ausfall-Flag gesetzt ist |
| 0x31 | HW Überwachung: Ungerechtfertigte Aktivierung Motorgruppe 1 aufgrund Halle Zahlerkennung |
| 0x32 | HW Überwachung: Motor Gruppe 1 Stromoffsetmessung übersteigt absolute Schwelle (131 bei 10bit) |
| 0x33 | HW Überwachung: Motor Gruppe 1 aktuelle Delta-Offset übersteigt limit_block Schwelle |
| 0x34 | HW Überwachung: Motor Gruppe 1 aktuelle Delta-Offset übersteigt limit_min Schwelle |
| 0x35 | HW Überwachung: Persistent ungerechtfertigter Aktivierung Motorgruppe 2 nach Ausfall-Flag gesetzt ist |
| 0x36 | HW Überwachung: Motor Gruppe 2 LNV Spannungsüberwachung überschreitet Schwelle |
| 0x37 | HW Überwachung: Motor Gruppe 2 LNV Deadlock Zähler überschreitet Schwelle |
| 0x38 | ÜKB: Fehler im Algo für Überschusskraftbegrenzung erkannt |
| 0x39 | ÜKB: Fehler im Algo für Überschusskraftbegrenzung erkannt |
| 0x3A | HW Überwachung: Motor Gruppe 1 SLV Spannungsüberwachung überschreitet Schwelle |
| 0x3B | HW Überwachung: Motor Gruppe 1 SLV Deadlock Zähler überschreitet Schwelle |
| 0x3C | HW Überwachung: Strommessung in Motor Gruppe 1 unplausibel |
| 0x3D | HW Überwachung: Strommessung in Motor Gruppe 2 unplausibel |
| 0x3E | HW Überwachung: Ungültige Werte im ADC register für Motorstrommessung (Aktualisierung der Werte fehlgeschlagen) |
| 0x3F | reserviert |
| 0x40 | reserviert |
| 0x41 | Unerlaubte Verstellung der BFS Fußstütze |
| 0x42 | Detektierte Diskrepanz in alternativer Analyse der R-kodierten Schaltersignale |
| 0x43 | BFS unerlaubte Position der Fußstütze |
| 0x44 | Kennfeld Daten Verfälschung |
| 0x45 | reserviert |
| 0x46 | reserviert |
| 0x47 | reserviert |
| 0x48 | reserviert |
| 0x49 | reserviert |
| 0x4A | reserviert |
| 0x4B | reserviert |
| 0x4C | reserviert |
| 0x4D | reserviert |
| 0x4E | reserviert |
| 0x4F | reserviert |
| 0x50 | reserviert |
| 0x51 | Reset Anforderung nicht ausgeführt |
| 0x52 | Anzahl der ECU Resets überschritten Schwellenzählwert innerhalb von 5 Sekunden Zeitfenster |
| 0x53 | Verstellzeitbegrenzung durch FUSI wegen entnormierter Achsen oder defekten Hall Sensoren |
| 0x54 | Verstellzeitbegrenzung durch FUSI wegen nicht vorhandener UEKB |
| 0x55 | reserviert |
| 0x56 | reserviert |
| 0x57 | reserviert |
| 0x58 | reserviert |
| 0x59 | reserviert |
| 0x5A | reserviert |
| 0x5B | reserviert |
| 0x5C | reserviert |
| 0x5D | reserviert |
| 0x5E | reserviert |
| 0x5F | reserviert |
| 0x60 | reserviert |
| 0x61 | reserviert |
| 0x62 | reserviert |
| 0x63 | reserviert |
| 0x64 | reserviert |
| 0x65 | reserviert |
| 0x66 | reserviert |
| 0x67 | reserviert |
| 0x68 | reserviert |
| 0x69 | reserviert |
| 0x6A | reserviert |
| 0x6B | reserviert |
| 0x6C | reserviert |
| 0x6D | reserviert |
| 0x6E | reserviert |
| 0x6F | reserviert |
| 0x70 | reserviert |
| 0x71 | reserviert |
| 0x72 | Reset ausgelöst durch den System Fehler Manager |
| 0x73 | Reset ausgelöst durch ECC Fehler (nicht D-Flash) |
| 0x74 | Reset ausgelöst durch ROM Fehler |
| 0x75 | Reset ausgelöst durch EEP Löschvorgang |
| 0x76 | Reset ausgelöst durch Watchdog |
| 0x77 | Reset ausgelöst durch Registerüberprüfung |
| 0x78 | Reset ausgelöst durch NVM Blocküberprüfungsfehler |
| 0x79 | Reset ausgelöst durch Assertion der Anwender-SW |
| 0x7A | Reset ausgelöst durch Stack-Überlauf |
| 0x7B | Reset ausgelöst durch internen Watchdog |
| 0x7C | ECC Fehler im internen Dataflash aufgetreten |
| 0x7D | Reset ausgelöst durch Übergabe einer ungültigen Adresse an einen OS Service |
| 0x7E | Reset ausgelöst durch terminierte Tasks, die nicht durch einen Aufruf von TerminateTask() oder ChainTask() beendet wurden |
| 0x7F | Reset ausgelöst durch einen OS service, der bei deaktivierten Interrupts aufgerufen wurde |
| 0x80 | Reset ausgelöst durch einen ungültigen Speicherzugriff |
| 0x81 | Reset ausgelöst durch Auslösung einer trap |
| 0x82 | Reset ausgelöst durch kritischen OS Fehler |
| 0x91 | Hall Überwachung: Zwischen zwei Aufrufen hat sich der Hallzählerwert der SLV Achse um mehr als MAX_PLAUSIBLE_HALL_COUNTS (= 5 Hall Flanken) verändert |
| 0x92 | Hall Überwachung: Zwischen zwei Aufrufen hat sich der Hallzählerwert der LNV Achse um mehr als MAX_PLAUSIBLE_HALL_COUNTS )= 5 Hall Flanken) verändert |
| 0x93 | Hall Überwachung: Zwischen zwei Aufrufen hat sich der Hallzählerwert der SNV Achse um mehr als MAX_PLAUSIBLE_HALL_COUNTS (= 5 Hall Flanken) verändert |
| 0x94 | Hall Überwachung: Mehr als zwei ÜKB Achsen hatten eine gleichzeitige Hallzähleränderung |
| 0xFF | Wert ungültig |

### TAB_SM_FUSI_ERR_ST

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler liegt aktuell vor |
| 0x02 | Fehler lag vor Reset vor |
| 0x03 | Ungültiger Fehlerstatus |
| 0xFF | Wert ungültig |

### TAB_SM_FUSI_FCTN_ID

| WERT | TEXT |
| --- | --- |
| 0x03 | API_HWMON_TEST_FAILURE_FLAG |
| 0x04 | API_HWMON_TEST_HALL_CNT_SLV |
| 0x05 | API_HWMON_TEST_OFFSET_SLV |
| 0x06 | API_HWMON_TEST_CYCLIC_SLV |
| 0x07 | API_HWMON_TEST_CYCLIC_LNV |
| 0x08 | API_HWMON_POST_TEST_SLV |
| 0x09 | API_HWMON_POST_TEST_LNV |
| 0x0B | fsF_plausibilityFn_2 |
| 0x0C | fsF_plausibilityFn_3 |
| 0x0D | fsF_plausibilityFn_4 |
| 0x0F | fsF_plausibilityFn_6 |
| 0x10 | fsF_plausibilityFn_7 |
| 0x11 | fsF_plausibilityFn_8 |
| 0x12 | fsF_plausibilityFn_9 |
| 0x13 | fsF_VEH_speed_monitoring |
| 0x14 | fsF_plausibilityFn_10 |
| 0x15 | fsF_plausibilityFn_13 |
| 0x16 | API_ASSERT |
| 0x17 | BSW_NVM_BC_CHECKERROR |
| 0x18 | BSW_REGMON_NOTIFYERROR |
| 0x19 | BSW_SWP_EEP_MASSERASE |
| 0x1A | BSW_ECUM_SHUTDOWN |
| 0x1B | BSW_ECCHDLR_FETCHECCHANDLING |
| 0x1D | BSW_SYSERRMAN_REPORTERROR |
| 0x1E | BSW_ROMTST_MAINFUNCTION_BGND |
| 0x1F | BSW_INTERNAL_WDG_NOTIFY |
| 0x20 | fsF_plausibilityFn_11 |
| 0x21 | fsF_plausibilityFn_15 |
| 0x22 | fsF_plausibilityFn_12 |
| 0x23 | fsF_plausibilityFn_16 |
| 0x24 | API_ANTIPINCH_ALGO_MONITORING |
| 0xFF | Wert ungültig |

### TAB_SM_FUSI_MOD_ID

| WERT | TEXT |
| --- | --- |
| 0x200 | FS_Basic |
| 0x201 | FS_HW_Monitoring |
| 0x202 | FS_SW_Monitoring |
| 0x203 | FS_Footrest_Monitoring |
| 0x204 | FS_SSM |
| 0x205 | FS_Adjustment_Handling |
| 0x206 | FS_Reset_Handling |
| 0x208 | FS_SwitchIn |
| 0x20A | FS_E2E_wrapper |
| 0x20D | FS_Internal_Errorlog |
| 0x20E | SW Modul-Kennung für alle Reset-Anforderungen |
| 0x20F | FS_Antipinch_Monitoring |
| 0x210 | FS_Hall_Monitoring |
| 0xFFFF | Wert ungültig |

### TAB_SM_MOTOREN_FCT

| WERT | TEXT |
| --- | --- |
| 0x00 | Sitzlängsverstellung (SLV) |
| 0x20 | Lehnenfernentriegelung 2.SR im RRNM (LFE_SR2) |
| 0x50 | Lehnenneigungsverstellung 2.SR (LNV_SR2) |
| 0x01 | Sitzhöhenverstellung (SHV) |
| 0x21 | Fußstützenverstellung im RRNM (FSV) |
| 0x31 | Tilting Boot im RRNM (TB) |
| 0x71 | Lehnenneigungsverstellung 3.SR (LNV_SR3) |
| 0x02 | Lehnenneigungsverstellung (LNV) |
| 0x52 | Sitzlängsverstellung 2.SR (SLV_SR2) |
| 0x03 | Sitzneigungsverstellung (SNV) |
| 0x53 | Fondeinstiegshilfe 2.SR (EE_SR2) |
| 0x04 | Kopfstützenhöhenverstellung (KHV) |
| 0x14 | Kopfstützenklappung CC (KK) |
| 0x74 | Lehnenfernentriegelung 3.SR (LFE_SR3) |
| 0x05 | Sitztiefenverstellung (STV) |
| 0x25 | Wadenablage Längeneinstellung im RRNM (CRFE) |
| 0x06 | Lehnenbreitenverstellung (LBV) |
| 0x16 | Fußstützenneigungsverstellung CC (FNV) |
| 0x26 | Picknicktischverstellung im RRNM (PTV) |
| 0x36 | Wadenablage Winkelstellung im RRNM (CRW) |
| 0x07 | Lehnenkopfverstellung (LKV) |
| 0x17 | Monitorneigungsverstellung CC/RRNM (RSE) |
| 0xFE | nicht codiert / keine Funktion |
| 0xFF | Wert ungültig |

### TAB_SM_SCHALTER_FAT_2SR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | Sitzreihe nach vorne |
| 0x02 | Sitzreihe nach hinten |
| 0x03 | nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

### TAB_SM_SCHALTER_LEHNENKLAPPUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | Lehne umklappen |
| 0x02 | Lehne aufstellen |
| 0x03 | nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

### TAB_SM_STAT_MOTORMAPPING

| WERT | TEXT |
| --- | --- |
| 0x00 | Default (Codierwert) |
| 0x01 | Sitz VL (SITZ_VL) |
| 0x02 | Sitz VR (SITZ_VR) |
| 0x03 | Sitz CC VL (SITZ_CC_VL) |
| 0x04 | Sitz CC VR (SITZ_CC_VR) |
| 0x05 | Sitz RRNM VL (SITZ_RRNM_VL) |
| 0x06 | Sitz RRNM VR (SITZ_RRNM_VR) |
| 0x11 | Komfortsitz HL (SITZ_KOMF_HL) |
| 0x12 | Komfortsitz HR (SITZ_KOMF_HR) |
| 0x13 | Sitz FBK2 HL (SITZ_FBK2_HL) |
| 0x14 | Sitz FBK2 HR (SITZ_FBK2_HR) |
| 0x15 | Sitz Foldbench HL (SITZ_FOLDBENCH_HL) |
| 0x16 | Sitz Foldbench HR (SITZ_FOLDBENCH_HR) |
| 0x17 | Schlafsitz RRNM HL (SITZ_SLEEP_RRNM_HL) |
| 0x18 | Schlafsitz RRNM HR (SITZ_SLEEP_RRNM_HR) |
| 0xFF | Wert ungültig |

### TAB_STATUS_LANGSAM_SCHNELL

| WERT | TEXT |
| --- | --- |
| 0x00 | Langsam |
| 0x01 | Schnell |
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
| 0x00 | nicht betätigt |
| 0x01 | betätigt |
| 0x02 | nicht vorhanden / nicht codiert |
| 0xFF | Wert ungültig |

### TAB_SV_MOTOREN_FCT

| WERT | TEXT |
| --- | --- |
| 0x00 | SLV |
| 0x20 | LFE_SR2 |
| 0x50 | LNV_SR2 |
| 0x01 | SHV |
| 0x21 | FSV |
| 0x31 | TB |
| 0x71 | LNV_SR3 |
| 0x02 | LNV |
| 0x52 | SLV_SR2 |
| 0x03 | SNV |
| 0x53 | EE_SR2 |
| 0x04 | KHV |
| 0x14 | KK |
| 0x74 | LFE_SR3 |
| 0x05 | STV |
| 0x25 | CRFE |
| 0x06 | LBV |
| 0x16 | FNV |
| 0x26 | PTV |
| 0x36 | CRW |
| 0x07 | LKV |
| 0x17 | RSE |
