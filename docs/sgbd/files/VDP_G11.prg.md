# VDP_G11.prg

## General

|  |  |
| --- | --- |
| File | VDP_G11.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 129 |
| Origin | BMW EF-630 Christian_Fischer |
| Revision | 9.000 |
| Author | Conti_Temic C_CHS_CE Marion_Anders |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Vertikal Dynamik Plattform |  |  |
| ORIGIN | string | BMW EF-630 Christian_Fischer |  |  |
| REVISION | string | 9.000 |  |  |
| AUTHOR | string | Conti_Temic C_CHS_CE Marion_Anders |  |  |
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

### _DUMMY

Zur Definition eines beliebigen Jobs Freie Auswahl eines Single Frames interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| JOB_LAENGE | char | soll: Anzahl der Parameter + 1 kann frei gewählt werden (0...21) |
| SG_ADRESSE | char | soll: Adresse des Ziel-SG (ICMV: 0x39) |
| TESTER_ADRESSE | char | soll: Adresse des Testers (normal: 0xF4 Ethernet) |
| JOB_NR | char | soll: Job nach UDS |
| PARAMETER_1 | char | Freie Wahl |
| PARAMETER_2 | char | Freie Wahl |
| PARAMETER_3 | char | Freie Wahl |
| PARAMETER_4 | char | Freie Wahl |
| PARAMETER_5 | char | Freie Wahl |
| PARAMETER_6 | char | Freie Wahl |
| PARAMETER_7 | char | Freie Wahl |
| PARAMETER_8 | char | Freie Wahl |
| PARAMETER_9 | char | Freie Wahl |
| PARAMETER_10 | char | Freie Wahl |
| PARAMETER_11 | char | Freie Wahl |
| PARAMETER_12 | char | Freie Wahl |
| PARAMETER_13 | char | Freie Wahl |
| PARAMETER_14 | char | Freie Wahl |
| PARAMETER_15 | char | Freie Wahl |
| PARAMETER_16 | char | Freie Wahl |
| PARAMETER_17 | char | Freie Wahl |
| PARAMETER_18 | char | Freie Wahl |
| PARAMETER_19 | char | Freie Wahl |
| PARAMETER_20 | char | Freie Wahl |

### _DUMMY_LONG

Zur Definition eines beliebigen Jobs interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Job-Länge (SID + Daten) Byte 1              : SG-Adresse Byte 2              : Tester-Adresse Byte 3              : SID Byte 4..Byte x      : Daten |

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

### ARG_0X4020_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EHC_VALVE_BALG_VR_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Balgventil vorn rechts |
| EHC_VALVE_BALG_VR_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Balgventil vorn rechts |
| EHC_VALVE_BALG_VR_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Balgventil vorn rechts in s (Genauigkeit in 0.1 s) |
| EHC_VALVE_BALG_VL_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Balgventil vorn links |
| EHC_VALVE_BALG_VL_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Balgventil vorn links |
| EHC_VALVE_BALG_VL_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Balgventil vorn links in s (Genauigkeit in 0.1 s) |
| EHC_VALVE_BALG_HR_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Balgventil hinten rechts |
| EHC_VALVE_BALG_HR_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Balgventil hinten rechts |
| EHC_VALVE_BALG_HR_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Balgventil hinten rechts in s (Genauigkeit in 0.1 s) |
| EHC_VALVE_BALG_HL_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Balgventil hinten links |
| EHC_VALVE_BALG_HL_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Balgventil hinten links |
| EHC_VALVE_BALG_HL_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Balgventil hinten links in s (Genauigkeit in 0.1 s) |
| EHC_VALVE_ABLASS_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Ablassventil |
| EHC_VALVE_ABLASS_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Ablassventil |
| EHC_VALVE_ABLASS_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Ablassventil  in s (Genauigkeit in 0.1 s) |
| EHC_VALVE_SPEICHER_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Speicherventil  |
| EHC_VALVE_SPEICHER_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Speicherventil |
| EHC_VALVE_SPEICHER_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Speicherventil in s (Genauigkeit in 0.1 s) |
| EHC_VALVE_RESERVE_PUSH | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pushstromvorgabe Reserveventil  |
| EHC_VALVE_RESERVE_HOLD | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Holdstromvorgabe Reserveventil |
| EHC_VALVE_RESERVE_PUSHZEIT | s | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Pushzeit Reserveventil in s (Genauigkeit in 0.1 s) |

### ARG_0XDB67_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOCAL_ID_WERT | 0-n | high | unsigned int | - | CTRL_BY_LOCAL_ID_2 | - | - | - | - | - | Local - ID / Bauteilauswahl - Table CTRL_BY_LOCAL_ID_2 |

### ARG_0XDB77_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMPONENTENANSTEUERUNG | 0-n | - | unsigned int | - | TAB_KOMPONENTENANSTEUERUNG | - | - | - | - | - | Komponentenansteuerung - 0- AUS, 1- EIN, 2- Entlüftung, 3- Füllen mit dem Kompressor, 4- Füllen mit dem Druckspeicher  |
| ADJUSTMENT_TIME_WERT | s | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung |
| LOCAL_ID_WERT | 0-n | - | unsigned int | - | CTRL_BY_LOCAL_ID | - | - | - | - | - | Local-ID/Bauteilauswahl siehe Tabelle CTRL_BY_LOCAL_ID |

### ARG_0XDC0F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROLOPTION_WERT | 0-n | - | unsigned char | - | TAB_EHC_REF | 1.0 | 1.0 | 0.0 | - | - | Steuern: Radentlastungsfunktion (REF) |

### ARG_0XDC11_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NIVEAU_WERT | 0-n | - | unsigned int | - | TAB_EHC_VEHICLE_HEIGHT | - | - | - | - | - | Werte gemäß Tabelle TAB_EHC_VEHICLE_HEIGHT 0x0002 = Tiefnevieau; 0x0008 = Standardniveau; 0x0010 = Hochniveau |

### ARG_0XDC2C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn links in mm. |

### ARG_0XDC2D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn rechts in mm. |

### ARG_0XDC2E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_HL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten links in mm. |

### ARG_0XDC2F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_HR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten rechts in mm. |

### ARG_0XDCA7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAEMPFER_VENTIL_VL_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom vorne links |
| DAEMPFER_VENTIL_VL_DRUCK_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom vorne links Druckwentil |
| DAEMPFER_VENTIL_VR_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom vorne rechts |
| DAEMPFER_VENTIL_VR_DRUCK_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom vorne rechts Druckwentil |
| DAEMPFER_VENTIL_HL_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom hinten links |
| DAEMPFER_VENTIL_HL_DRUCK_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom hinten links Druckwentil |
| DAEMPFER_VENTIL_HR_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom hinten rechts |
| DAEMPFER_VENTIL_HR_DRUCK_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2.0 | Ventilstrom hinten rechts Druckwentil |

### ARG_0XDCAB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAEMPFER_VENTIL_VL_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert vorne links |
| DAEMPFER_VENTIL_VL_DRUCK_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert vorne links Druckventil |
| DAEMPFER_VENTIL_VR_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert vorne rechts |
| DAEMPFER_VENTIL_VR_DRUCK_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert vorne rechts Druckventil |
| DAEMPFER_VENTIL_HL_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert hinten links |
| DAEMPFER_VENTIL_HL_DRUCK_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert hinten links Druckventil |
| DAEMPFER_VENTIL_HR_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert hinten rechts |
| DAEMPFER_VENTIL_HR_DRUCK_PWM | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert hinten rechts Druckventil |

### ARG_0XDD37_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOM_STAB_ANREGUNGSFORM_VA | 0-n | high | unsigned char | - | TAB_ANREGUNGSFORM | - | - | - | - | - | MOM_STAB_ANREGUNGSFORM_VA; Default: None |
| MOM_STAB_ANREGUNGSFORM_HA | 0-n | high | unsigned char | - | TAB_ANREGUNGSFORM | - | - | - | - | - | MOM_STAB_ANREGUNGSFORM_HA; Default: None |
| MOM_MOTOR_ANREGUNGSFORM_VA | 0-n | high | unsigned char | - | TAB_ANREGUNGSFORM | - | - | - | - | - | MOM_MOTOR_ANREGUNGSFORM_VA; Default: NONE |
| MOM_MOTOR_ANREGUNGSFORM_HA | 0-n | high | unsigned char | - | TAB_ANREGUNGSFORM | - | - | - | - | - | MOM_MOTOR_ANREGUNGSFORM_HA; Default: none |
| RPM_MOTOR_ANREGUNGSFORM_VA | 0-n | high | unsigned char | - | TAB_ANREGUNGSFORM | - | - | - | - | - | RPM_MOTOR_ANREGUNGSFORM_VA: Tabelle: none, SINUS Default: none |
| RPM_MOTOR_ANREGUNGSFORM_HA | 0-n | high | unsigned char | - | TAB_ANREGUNGSFORM | - | - | - | - | - | RPM_MOTOR_ANREGUNGSFORM_HA: Tabelle: none, SINUS Default: none |

### ARG_0XDD38_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACHSE | 0-n | high | unsigned char | - | TAB_ACHSE | - | - | - | - | - | Tabelle: 1: Vorderachse, 2: Hinterachse, 3: Vorderachse+Hinterachse |
| MOM_STAB_AMPLITUDE | Nm | high | signed char | - | - | 1.0 | 10.0 | 0.0 | -900.0 | 900.0 | MOM_STAB_AMPLITUDE; Default: 0Nm |
| MOM_STAB_PERIODENDAUER | ms | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10.0 | 100000.0 | MOM_STAB_PERIODENDAUER Default: 5000ms |
| MOM_STAB_OFFSET | Nm | high | signed char | - | - | 1.0 | 10.0 | 0.0 | -900.0 | 900.0 | MOM_STAB_OFFSET; Default: 0Nm |
| MOM_MOTOR_AMPLITUDE | Nm | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -10.0 | 10.0 | MOM_MOTOR_AMPLITUDE;Default: 0Nm |
| MOM_MOTOR_PERIODENDAUER | ms | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10.0 | 100000.0 | MOM_MOTOR_PERIODENDAUER, Default: 5000ms |
| MOM_MOTOR_OFFSET | Nm | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -10.0 | 10.0 | MOM_MOTOR_OFFSET; Default: 0Nm |
| RPM_MOTOR_AMPLITUDE | 1/min | high | signed int | - | - | 1.0 | 10.0 | 0.0 | -4000.0 | 4000.0 | RPM_MOTOR_AMPLITUDE; Default: 0/min |
| RPM_MOTOR_PERIODENDAUER | ms | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10.0 | 100000.0 | RPM_MOTOR_PERIODENDAUER, Default: 5000ms |

### ARG_0XF040_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEICHERORT | + | - | 0-n | high | unsigned char | - | TAB_VDP_SPEICHERORT | - | - | - | - | - | Speicherort |

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

### CTRL_BY_LOCAL_ID

| WERT | TEXT |
| --- | --- |
| 0x11 | Balgventil hinten links |
| 0x12 | Balgventil hinten rechts |
| 0x13 | Balgventil vorne links |
| 0x14 | Balgventil vorne rechts |
| 0x17 | Druckspeicherventil |
| 0x19 | Ablassventil |
| 0xC1 | Luftfeder hinten links |
| 0xC2 | Luftfeder hinten rechts |
| 0xC3 | Luftfeder hinten |
| 0xC4 | Luftfeder vorne links |
| 0xC5 | Luftfeder vorne rechts |
| 0xC6 | Luftfeder vorne |
| 0xC7 | Druckspeicher |
| 0xC8 | Umgebung |
| 0xFF | nicht definiert |

### CTRL_BY_LOCAL_ID_2

| WERT | TEXT |
| --- | --- |
| 0x11 | Balgventil hinten links |
| 0x12 | Balgventil hinten rechts |
| 0x13 | Balgventil vorne links |
| 0x14 | Balgventil vorne rechts |
| 0x15 | Kompressoransteuerung |
| 0x17 | Druckspeicherventil |
| 0x19 | Ablassventil |
| 0xC1 | Luftfeder hinten links |
| 0xC2 | Luftfeder hinten rechts |
| 0xC3 | Luftfeder hinten |
| 0xC4 | Luftfeder vorne links |
| 0xC5 | Luftfeder vorne rechts |
| 0xC6 | Luftfeder vorne |
| 0xC7 | Druckspeicher |
| 0xC8 | Umgebung |
| 0xFF | nicht definiert |

### FAHRZEUGMODI

| WERT | TEXT |
| --- | --- |
| 1 | Stand 1 |
| 2 | Stand 2 |
| 3 | Stand 3 |
| 4 | Fahrt |
| 5 | Hebebühne 0 |
| 6 | Hebebühne 1 |
| 7 | Hebebühne 2 |
| 8 | Service |
| 9 | Neuzustand |
| 10 | Transport |
| 11 | Wakeup |
| 12 | offen |
| 13 | offen |
| 14 | offen |
| 0xFF | Wert ungültig |

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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x027600 | Energiesparmode aktiv | 0 | - |
| 0x027608 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x027609 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02760A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02760B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02760D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF76 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030C42 | VDM-KBS - Radbeschleunigungssensor - vorn links Signalplausibilität | 0 | - |
| 0x030C43 | VDM-KBS - Radbeschleunigungssensor - vorn rechts Signalplausibilität | 0 | - |
| 0x030C44 | VDM-KBS - Radbeschleunigungssensor - hinten links Signalplausibilität | 0 | - |
| 0x030C45 | VDM-KBS - Radbeschleunigungssensor - hinten rechts Signalplausibilität | 0 | - |
| 0x030C46 | VDM-ARSFF: ARS Leistungsreduktion aufgrund externer Energiebegrenzung | 1 | - |
| 0x030C47 | VDM-ARSFF: ARS starke Leistungsreduktion aufgrund externer Energiebegrenzung | 1 | - |
| 0x030C4B | VDM-KBS - Kodierdaten fehlerhaft - ungültige Daten | 0 | - |
| 0x030C4C | VDM-EARSAS - ARS Aktor Hinterachse, keine oder falsche Reaktion auf Stellbefehl | 1 | - |
| 0x030C4D | VDM-EARSAS - ARS Aktor Vorderachse, keine oder falsche Reaktion auf Stellbefehl | 1 | - |
| 0x030C4E | VDM-ARSFF - ARS Aktoren - Momentenverteilung kritisch Fahrsicherheitsabschaltung | 0 | - |
| 0x030C4F | VDM-ARSFF - ARS Aktor Hinterachse - Moment zu hoch Fahrsicherheitsabschaltung | 0 | - |
| 0x030C54 | VDM-ARSFF - ARS Aktor Vorderachse - Moment zu gering Fahrsicherheitsabschaltung | 0 | - |
| 0x030C56 | VDM-EARSAS - ARS Aktor Hinterachse - Abweichung von Sollvorgabe zu groß | 0 | - |
| 0x030C57 | VDM-EARSAS - ARS Aktor Vorderachse - Abweichung von Sollvorgabe zu groß | 0 | - |
| 0x030C59 | VDM-ARSFF - ARS Aktuatoren Reduktion wegen Übertemperatur | 1 | - |
| 0x030C5A | VDM-KBS - Höhenstandssesnoren - vorn links Signalplausibilität | 0 | - |
| 0x030C5B | VDM-KBS - Höhenstandssensoren - vorn rechts Signalplausibilität | 0 | - |
| 0x030C5C | VDM-KBS - Höhenstandssensoren - hinten links Signalplausibilität | 0 | - |
| 0x030C5D | VDM-KBS - Höhenstandssensoren - hinten rechts Signalplausibilität | 0 | - |
| 0x030C5E | VDM-ARSFF - ARS Aktuatoren starke Reduktion wegen Übertemperatur | 1 | - |
| 0x030C63 | VDM-EARSAS - ARS Aktor Vorderachse, Abweichung von Sollvorgabe zu groß, mit Abschaltung | 0 | - |
| 0x030C66 | VDM-EARSAS - ARS Aktor Degradation aufgrund Unterspannung | 1 | - |
| 0x030C68 | VDM-EARSSBS - ARS Degradation aufgrund nicht abgeglichenem Querbeschleunigungssignal | 1 | - |
| 0x482883 | Digitaler Radbeschleunigungssensor - hinten links - Physical Layer Fehler | 0 | - |
| 0x482887 | Digitaler Radbeschleunigungssensor - hinten links - Sensorfehler | 0 | - |
| 0x482889 | Steuergerät intern - Software | 0 | - |
| 0x48288A | Steuergerät intern - Hardware | 0 | - |
| 0x48288E | Digitaler Radbeschleunigungssensor - hinten links - Kommunikationsfehler | 0 | - |
| 0x48288F | Digitaler Radbeschleunigungssensor - hinten rechts - Physical Layer Fehler | 0 | - |
| 0x482890 | Digitaler Radbeschleunigungssensor - hinten rechts - Sensorfehler | 0 | - |
| 0x482891 | Digitaler Radbeschleunigungssensor - hinten rechts - Kommunikationsfehler | 0 | - |
| 0x482892 | Digitaler Radbeschleunigungssensor - vorn links - Physical Layer Fehler | 0 | - |
| 0x482898 | Digitaler Radbeschleunigungssensor - vorn links - Sensorfehler | 0 | - |
| 0x482899 | Digitaler Radbeschleunigungssensor - vorn links - Kommunikationsfehler | 0 | - |
| 0x48289A | Digitaler Radbeschleunigungssensor - vorn rechts - Physical Layer Fehler | 0 | - |
| 0x48289B | Digitaler Radbeschleunigungssensor - vorn rechts - Sensorfehler | 0 | - |
| 0x48289C | Digitaler Radbeschleunigungssensor - vorn rechts - Kommunikationsfehler | 0 | - |
| 0x48289D | Steuergerät intern - Übertemperatur | 0 | - |
| 0x4828E1 | Ventilspule - Zugstufe - Vorn Rechts Stromreglerplausibilitätsfehler | 0 | - |
| 0x4828E3 | Ventilspule - Zugstufe - Vorn Rechts Strommessung nicht kalibriert | 0 | - |
| 0x4828E4 | Ventilspule - Zugstufe - Vorn Rechts Kurzschluss KL31 | 0 | - |
| 0x4828E5 | Ventilspule - Zugstufe - Vorn Rechts offene Leitung | 0 | - |
| 0x4828E6 | Ventilspule - Zugstufe - Vorn Rechts Kurzschluss KL15/KL30 | 0 | - |
| 0x4828E7 | Ventilspule - Zugstufe - Vorn Rechts keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x4828E9 | Ventilspule - Zugstufe - Vorn Links Stromreglerplausibilitätsfehler | 0 | - |
| 0x4828EB | Ventilspule - Zugstufe - Vorn Links Strommessung nicht kalibriert | 0 | - |
| 0x4828EC | Ventilspule - Zugstufe - Vorn Links offene Leitung | 0 | - |
| 0x4828ED | Ventilspule - Zugstufe - Vorn Rechts Kurzschluss Ventil | 0 | - |
| 0x4828EE | Ventilspule - Zugstufe - Vorn Links Kurzschluss Ventil | 0 | - |
| 0x4828EF | Ventilspule - Zugstufe - Vorn Links Kurzschluss KL31 | 0 | - |
| 0x4828F0 | Ventilspule - Zugstufe - Vorn Links Kurzschluss KL15/KL30 | 0 | - |
| 0x4828F1 | Ventilspule - Zugstufe - Vorn Links keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x4828F3 | Ventilspule - Zugstufe - Hinten Rechts Stromreglerplausibilitätsfehler | 0 | - |
| 0x4828F4 | Balgventil Hinten Rechts Stromreglerplausibilitätsfehler | 0 | - |
| 0x4828F5 | Ventilspule - Zugstufe - Hinten Rechts Strommessung nicht kalibriert | 0 | - |
| 0x4828F6 | Ventilspule - Zugstufe - Hinten Rechts offene Leitung | 0 | - |
| 0x4828F7 | Ventilspule - Zugstufe - Hinten Rechts Kurzschluss Ventil | 0 | - |
| 0x4828F8 | Ventilspule - Zugstufe - Hinten Rechts Kurzschluss KL31 | 0 | - |
| 0x4828F9 | Ventilspule - Zugstufe - Hinten Rechts Kurzschluss KL15/KL30 | 0 | - |
| 0x4828FA | Ventilspule - Zugstufe - Hinten Rechts keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x4828FC | Ventilspule - Zugstufe - Hinten Links Stromreglerplausibilitätsfehler | 0 | - |
| 0x4828FD | Balgventil Hinten Links Stromreglerplausibilitätsfehler | 0 | - |
| 0x4828FE | Ventilspule - Zugstufe - Hinten Links Strommessung nicht kalibriert | 0 | - |
| 0x4828FF | Ventilspule - Zugstufe - Hinten Links offene Leitung | 0 | - |
| 0x482900 | Ventilspule - Zugstufe - Hinten Links Kurzschluss Ventil | 0 | - |
| 0x482901 | Ventilspule - Zugstufe - Hinten Links Kurzschluss KL31 | 0 | - |
| 0x482902 | Ventilspule - Zugstufe - Hinten Links Kurzschluss KL15/KL30 | 0 | - |
| 0x482903 | Ventilspule - Zugstufe - Hinten Links keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x482905 | Ventilspule - Druckstufe - Vorn Rechts Stromreglerplausibilitätsfehler | 0 | - |
| 0x482907 | Ventilspule - Druckstufe - Vorn Rechts Strommessung nicht kalibriert | 0 | - |
| 0x482908 | Ventilspule - Druckstufe - Vorn Rechts offene Leitung | 0 | - |
| 0x482909 | Ventilspule - Druckstufe - Vorn Rechts Kurzschluss KL31 | 0 | - |
| 0x48290A | Ventilspule - Druckstufe - Vorn Rechts Kurzschluss KL15/KL30 | 0 | - |
| 0x48290B | Ventilspule - Druckstufe - Vorn Rechts keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x48290D | Ventilspule - Druckstufe - Vorn Links Stromreglerplausibilitätsfehler | 0 | - |
| 0x48290F | Ventilspule - Druckstufe - Vorn Links Strommessung nicht kalibriert | 0 | - |
| 0x482910 | Ventilspule - Druckstufe - Vorn Links offene Leitung | 0 | - |
| 0x482911 | Ventilspule - Druckstufe - Vorn Links Kurzschluss Ventil | 0 | - |
| 0x482912 | Ventilspule - Druckstufe - Vorn Rechts Kurzschluss Ventil | 0 | - |
| 0x482913 | Ventilspule - Druckstufe - Vorn Links Kurzschluss KL31 | 0 | - |
| 0x482914 | Ventilspule - Druckstufe - Vorn Links Kurzschluss KL15/KL30 | 0 | - |
| 0x482915 | Ventilspule - Druckstufe - Vorn Links keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x482917 | Ventilspule - Druckstufe - Hinten Rechts Stromreglerplausibilitätsfehler | 0 | - |
| 0x482919 | Ventilspule - Druckstufe - Hinten Rechts Strommessung nicht kalibriert | 0 | - |
| 0x48291A | Ventilspule - Druckstufe - Hinten Rechts offene Leitung | 0 | - |
| 0x48291B | Ventilspule - Druckstufe - Hinten Rechts Kurzschluss Ventil | 0 | - |
| 0x48291C | Ventilspule - Druckstufe - Hinten Rechts Kurzschluss KL31 | 0 | - |
| 0x48291D | Ventilspule - Druckstufe - Hinten Rechts Kurzschluss KL15/KL30 | 0 | - |
| 0x48291E | Ventilspule - Druckstufe - Hinten Rechts keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x482920 | Ventilspule - Druckstufe - Hinten Links Stromreglerplausibilitätsfehler | 0 | - |
| 0x482922 | Ventilspule - Druckstufe - Hinten Links Strommessung nicht kalibriert | 0 | - |
| 0x482923 | Ventilspule - Druckstufe - Hinten Links offene Leitung | 0 | - |
| 0x482924 | Ventilspule - Druckstufe - Hinten Links Kurzschluss Ventil | 0 | - |
| 0x482925 | Ventilspule - Druckstufe - Hinten Links Kurzschluss KL31 | 0 | - |
| 0x482926 | Ventilspule - Druckstufe - Hinten Links Kurzschluss KL15/KL30 | 0 | - |
| 0x482927 | Ventilspule - Druckstufe - Hinten Links keine Endstufenfreigabe über Watchdog | 0 | - |
| 0x482928 | Ablassventil Stromreglerplausibilitätsfehler | 0 | - |
| 0x482929 | Ablassventil Kurzschluss nach Plus | 0 | - |
| 0x48292A | Ablassventil Kurzschluss Spulenwindung | 0 | - |
| 0x48292B | Ablassventil Leitungsunterbrechung | 0 | - |
| 0x48292C | Ablassventil maximale Einschaltdauer überschritten | 1 | - |
| 0x48292D | EHC-Ventile: zentraler Kurzschluss nach Masse | 0 | - |
| 0x48292E | Balgventil Hinten Links Kurzschluss nach Plus | 0 | - |
| 0x48292F | Balgventil Hinten Links Kurzschluss Spulenwindung | 0 | - |
| 0x482930 | Balgventil Hinten Links Leitungsunterbrechung | 0 | - |
| 0x482931 | Balgventil Hinten Links maximale Einschaltdauer überschritten | 1 | - |
| 0x482932 | EHC-Ventile: zentraler Kurzschluss nach Plus | 0 | - |
| 0x482933 | Balgventil Hinten Rechts Kurzschluss nach Plus | 0 | - |
| 0x482934 | Balgventil Hinten Rechts Kurzschluss Spulenwindung | 0 | - |
| 0x482935 | Balgventil Hinten Rechts Leitungsunterbrechung | 0 | - |
| 0x482936 | Balgventil Hinten Rechts maximale Einschaltdauer überschritten | 1 | - |
| 0x482937 | Balgventil Vorn Links Stromreglerplausibilitätsfehler | 0 | - |
| 0x482938 | Balgventil Vorn Links Kurzschluss nach Plus | 0 | - |
| 0x482939 | Balgventil Vorn Links Kurzschluss Spulenwindung | 0 | - |
| 0x48293A | Balgventil Vorn Links Leitungsunterbrechung | 0 | - |
| 0x48293B | Balgventil Vorn Links maximale Einschaltdauer überschritten | 1 | - |
| 0x48293C | Balgventil Vorn Rechts Stromreglerplausibilitätsfehler | 0 | - |
| 0x48293D | Balgventil Vorn Rechts Kurzschluss nach Plus | 0 | - |
| 0x48293E | Balgventil Vorn Rechts Kurzschluss Spulenwindung | 0 | - |
| 0x48293F | Balgventil Vorn Rechts Leitungsunterbrechung | 0 | - |
| 0x482942 | Balgventil Vorn Rechts maximale Einschaltdauer überschritten | 1 | - |
| 0x482946 | Speicherventil Stromreglerplausibilitätsfehler | 0 | - |
| 0x48294A | Speicherventil Kurzschluss nach Plus | 0 | - |
| 0x48294E | Speicherventil Kurzschluss Spulenwindung | 0 | - |
| 0x482950 | Speicherventil Leitungsunterbrechung | 0 | - |
| 0x482953 | Speicherventil maximale Einschaltdauer überschritten | 1 | - |
| 0x482954 | Umschaltventil Stromreglerplausibilitätsfehler | 0 | - |
| 0x482957 | Umschaltventil Kurzschluss nach Plus | 0 | - |
| 0x482958 | Umschaltventil Kurzschluss Spulenwindung | 0 | - |
| 0x48295B | Umschaltventil Leitungsunterbrechung | 0 | - |
| 0x48295C | Umschaltventil maximale Einschaltdauer überschritten | 1 | - |
| 0x48295F | Kompressorrelais Kurzschluss nach Plus | 0 | - |
| 0x482962 | Kompressorrelais Kurzschluss nach Masse | 0 | - |
| 0x482963 | Niveauregelung - Kompressorrelais Maximale Einschaltdauer überschritten | 1 | - |
| 0x482966 | Niveauregelung - Kompressortemperatur Unplausibles Signal | 0 | - |
| 0x482967 | Kompressor - Temperatursensor - Kurzschluss nach Masse | 0 | - |
| 0x48296A | Kompressor - Temperatursensor - Kurzschluss nach Plus | 0 | - |
| 0x48296B | Kompressor - Temperatursensor - Unterbrechung | 0 | - |
| 0x48296E | Kompressor - Druckgeber - Versorgungsspannung | 0 | - |
| 0x48296F | Niveauregelung Druckgeber Unplausibles Signal | 0 | - |
| 0x482972 | Kompressor - Druckgeber - Signalspannung | 0 | - |
| 0x482974 | Niveauregelung - Fahrzeug-Niveau - nicht - einstellbar | 0 | - |
| 0x482975 | Niveauregelung - Fahrzeug-Niveau - nicht - plausibel | 0 | - |
| 0x482977 | Systembefüllung - unplausibel | 0 | - |
| 0x482978 | System Maximale Einschaltdauer überschritten | 1 | - |
| 0x482979 | Druckspeicherbefüllung - unplausibel | 0 | - |
| 0x48297A | Systementlüftung Unplausibel | 0 | - |
| 0x482980 | Anzahl Schaltvorgänge EHC-Relais überschritten | 1 | - |
| 0x482983 | Höhenstandssensor - vorn links - Wert - unplausibel | 0 | - |
| 0x482987 | Höhenstandssensor - vorn rechts - Wert - unplausibel | 0 | - |
| 0x48298B | Höhenstandssensor - hinten links - Wert - unplausibel | 0 | - |
| 0x48298F | Höhenstandssensor - hinten rechts - Wert - unplausibel | 0 | - |
| 0x4829A0 | Höhenstandssensor - vorn links - Versorgung - Überspannung | 0 | - |
| 0x4829A1 | Höhenstandssensor - vorn links - Versorgung - Unterspannung | 0 | - |
| 0x4829A2 | Höhenstandssensor - vorn links - Signalspannung - Unterspannung | 0 | - |
| 0x4829A3 | Höhenstandssensor - vorn links - Signalspannung - Überspannung | 0 | - |
| 0x4829A4 | Höhenstandssensor - vorn rechts - Versorgung - Überspannung | 0 | - |
| 0x4829A5 | Höhenstandssensor - vorn rechts - Versorgung - Unterspannung | 0 | - |
| 0x4829A6 | Höhenstandssensor - vorn rechts - Signalspannung - Unterspannung | 0 | - |
| 0x4829A7 | Höhenstandssensor - vorn rechts - Signalspannung - Überspannung | 0 | - |
| 0x4829A8 | Höhenstandssensor - hinten links - Versorgung - Überspannung | 0 | - |
| 0x4829A9 | Höhenstandssensor - hinten links - Versorgung - Unterspannung | 0 | - |
| 0x4829AA | Höhenstandssensor - hinten links - Signalspannung - Unterspannung | 0 | - |
| 0x4829AB | Höhenstandssensor - hinten links - Signalspannung - Überspannung | 0 | - |
| 0x4829AC | Höhenstandssensor - hinten rechts - Versorgung - Überspannung | 0 | - |
| 0x4829AD | Höhenstandssensor - hinten rechts - Versorgung - Unterspannung | 0 | - |
| 0x4829AE | Höhenstandssensor - hinten rechts - Signalspannung - Unterspannung | 0 | - |
| 0x4829AF | Höhenstandssensor - hinten rechts - Signalspannung - Überspannung | 0 | - |
| 0x482B23 | Lokale Spannungsversorgung - Unterspannung | 0 | - |
| 0x482B24 | Lokale Spannungsversorgung - Überspannung | 0 | - |
| 0x482B25 | Globale Spannungsversorgung - Unterspannung extern | 1 | - |
| 0x482B26 | Globale Spannungsversorgung - Überspannung extern | 1 | - |
| 0x482B27 | Globale Spannungsversorgung - Unterspannung intern | 1 | - |
| 0x482B28 | Globale Spannungsversorgung - Überspannung intern | 1 | - |
| 0x483100 | Niveauregelung - Fahrzeug hinten links extrem hoch | 0 | - |
| 0x483101 | Niveauregelung - Fahrzeug hinten links extrem tief | 0 | - |
| 0x483102 | Niveauregelung - Fahrzeug hinten rechts extrem hoch | 0 | - |
| 0x483103 | Niveauregelung - Fahrzeug hinten rechts extrem tief | 0 | - |
| 0x483104 | Niveauregelung - Fahrzeug vorn rechts extrem hoch | 0 | - |
| 0x483105 | Niveauregelung - Fahrzeug vorn rechts extrem tief | 0 | - |
| 0x483106 | Niveauregelung - Fahrzeug vorn links extrem hoch | 0 | - |
| 0x483107 | Niveauregelung - Fahrzeug vorn links extrem tief | 0 | - |
| 0x483108 | Niveauregelung - Extremniveau-Überwachung nicht möglich | 0 | - |
| 0x483109 | Niveauregelung - Kompressor Spannungsversorgung Überspannung | 0 | - |
| 0x48310A | Niveauregelung - Kompressor Spannungsversorgung Unterspannung | 0 | - |
| 0x48310E | Niveauregulierung - Komfortabsenken über ID-Geber nicht verfügbar | 1 | - |
| 0x483124 | Höhenstandssensor - hinten rechts - Abgleich unplausibel | 0 | - |
| 0x483125 | Höhenstandssensor - hinten links - Abgleich unplausibel | 0 | - |
| 0x483126 | Höhenstandssensor - vorn links - Abgleich unplausibel | 0 | - |
| 0x483127 | Höhenstandssensor - vorn rechts - Abgleich unplausibel | 0 | - |
| 0x483129 | Höhenstandssensor - Allgemein - Abgleich nicht durchgeführt | 0 | - |
| 0xE6841F | Flexray:  Physikalischer Busfehler | 0 | - |
| 0xE68420 | FLEXRAY controller error | 0 | - |
| 0xE68519 | VD-CAN  Physikalischer Busfehler | 0 | - |
| 0xE68520 | VD-CAN Control Module Bus OFF | 0 | - |
| 0xE68BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xE69416 | Botschaftsfehler (Status Cabrio Dach, ID: ST_CABRF) - Timeout | 1 | - |
| 0xE69417 | Botschaftsfehler (Status Cabrio Dach, ID: ST_CABRF) - Alive | 1 | - |
| 0xE69428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 | - |
| 0xE6942C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 | - |
| 0xE6943A | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Ungültig | 1 | - |
| 0xE69452 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Timeout | 1 | - |
| 0xE6947D | Botschaftsfehler (Anforderung Verteilung Wankmoment, ID: RQ_REPAT_MX) - Timeout | 1 | - |
| 0xE69480 | Botschaftsfehler (Anforderung Verteilung Wankmoment, ID: RQ_REPAT_MX) - Checksumme | 1 | - |
| 0xE69481 | Botschaftsfehler (Anforderung Verteilung Wankmoment, ID: RQ_REPAT_MX) - Alive | 1 | - |
| 0xE69486 | Signalfehler (Anforderung Verteilung Wankmoment, ID: RQ_REPAT_MX) - Ungültig | 1 | - |
| 0xE694A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) - Timeout | 1 | - |
| 0xE694AA | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) - Ungültig | 1 | - |
| 0xE694B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 | - |
| 0xE694B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 | - |
| 0xE694BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 | - |
| 0xE694BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 | - |
| 0xE694C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 | - |
| 0xE694C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 | - |
| 0xE694C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 | - |
| 0xE694C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 | - |
| 0xE694E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 | - |
| 0xE694EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 | - |
| 0xE694FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 | - |
| 0xE6951C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 | - |
| 0xE69528 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Timeout | 1 | - |
| 0xE69529 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Checksumme | 1 | - |
| 0xE6952A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Alive | 1 | - |
| 0xE6952E | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Ungültig | 1 | - |
| 0xE69538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Timeout | 1 | - |
| 0xE6953E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) - Ungültig | 1 | - |
| 0xE69542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 | - |
| 0xE69543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 | - |
| 0xE69544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 | - |
| 0xE69548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 | - |
| 0xE69565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 | - |
| 0xE69598 | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Timeout | 1 | - |
| 0xE69599 | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Checksumme | 1 | - |
| 0xE6959A | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Alive | 1 | - |
| 0xE6959C | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Ungültig | 1 | - |
| 0xE695A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 | - |
| 0xE695A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 | - |
| 0xE695A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Undefiniert | 1 | - |
| 0xE695BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 | - |
| 0xE695BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Checksumme | 1 | - |
| 0xE695BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Alive | 1 | - |
| 0xE695C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 | - |
| 0xE695DC | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Timeout | 1 | - |
| 0xE69600 | Botschaftsfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Timeout | 1 | - |
| 0xE69605 | Botschaftsfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Alive | 1 | - |
| 0xE69606 | Botschaftsfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Alive | 1 | - |
| 0xE6960C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 | - |
| 0xE69634 | Botschaftsfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Timeout | 1 | - |
| 0xE69637 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Timeout | 1 | - |
| 0xE69640 | Signalfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Ungültig | 1 | - |
| 0xE69645 | Signalfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Ungültig | 1 | - |
| 0xE69652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Timeout | 1 | - |
| 0xE69654 | Botschaftsfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Checksumme | 1 | - |
| 0xE69655 | Botschaftsfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Checksumme | 1 | - |
| 0xE69656 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Ungültig | 1 | - |
| 0xE6965E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 | - |
| 0xE6969C | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Timeout | 1 | - |
| 0xE696D4 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Timeout | 1 | - |
| 0xE696D5 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Alive | 1 | - |
| 0xE696D8 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Checksumme | 1 | - |
| 0xE696DA | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Checksumme | 1 | - |
| 0xE69737 | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Alive | 1 | - |
| 0xE69744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 | - |
| 0xE69745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 | - |
| 0xE69746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 | - |
| 0xE6977C | Signalfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Ungültig | 1 | - |
| 0xE697C1 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Timeout | 1 | - |
| 0xE697C2 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Checksumme | 1 | - |
| 0xE697C3 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Alive | 1 | - |
| 0xE697C5 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Ungültig | 1 | - |
| 0xE69866 | Botschaftsfehler (Sektor Gruppe ** Links Erkennung Bodenunebenheit, ID: SCT_GRP_**_LH_RCOG_GUE) Timeout | 1 | - |
| 0xE6987D | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Ungültig | 1 | - |
| 0xE69890 | Botschaftsfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Timeout | 1 | - |
| 0xE6989E | Botschaftsfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Timeout | 1 | - |
| 0xE69929 | Signalfehler (Sektor Gruppe ** Links Erkennung Bodenunebenheit, ID: SCT_GRP_**_LH_RCOG_GUE) Ungültig | 1 | - |
| 0xE6992C | Signalfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Ungültig | 1 | - |
| 0xE6992D | Signalfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Ungültig | 1 | - |
| 0xE6994D | Signalfehler (Status Erkennung Bodenunebenheit, ID: ST_RCOG_GUE) Ungültig | 1 | - |
| 0xE69957 | Signalfehler (Status Hinterachse ARS, ID: ST_BAX_ARS) Ungültig | 1 | - |
| 0xE69966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 | - |
| 0xE69967 | Signalfehler (Status Vorderachse ARS, ID: ST_FTAX_ARS) Ungültig | 1 | - |
| 0xE6998C | Botschaftsfehler (Status Hinterachse ARS, ID: ST_BAX_ARS) Alive | 1 | - |
| 0xE69995 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Ungültig | 1 | - |
| 0xE699A4 | Botschaftsfehler (Status Hinterachse ARS, ID: ST_BAX_ARS) Checksumme | 1 | - |
| 0xE699AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 | - |
| 0xE699B6 | Botschaftsfehler (Status Erkennung Bodenunebenheit, ID: ST_RCOG_GUE) Timeout | 1 | - |
| 0xE699C6 | Botschaftsfehler (Status Hinterachse ARS, ID: ST_BAX_ARS) Timeout | 1 | - |
| 0xE699CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 | - |
| 0xE699D6 | Botschaftsfehler (Status Vorderachse ARS, ID: ST_FTAX_ARS) Timeout | 1 | - |
| 0xE699DF | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 | - |
| 0xE69A4B | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Alive | 1 | - |
| 0xE69A4C | Botschaftsfehler (Status Vorderachse ARS, ID: ST_FTAX_ARS) Alive | 1 | - |
| 0xE69A58 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Alive | 1 | - |
| 0xE69A80 | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Checksumme | 1 | - |
| 0xE69A81 | Botschaftsfehler (Status Vorderachse ARS, ID: ST_FTAX_ARS) Checksumme | 1 | - |
| 0xE69A8C | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Checksumme | 1 | - |
| 0xE69AE9 | Signalfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Ungültig | 1 | - |
| 0xE69B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 | - |
| 0xE69B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Checksumme | 1 | - |
| 0xE69B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 | - |
| 0xE69C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) - Timeout | 1 | - |
| 0xE69C63 | Botschaftsfehler (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) Timeout | 1 | - |
| 0xE69C67 | Botschaftsfehler (Information Reifen, ID: INFO_TYR) Timeout | 1 | - |
| 0xE69C71 | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Timeout | 1 | - |
| 0xE69C80 | Botschaftsfehler (Erkennung Bodenunebenheit Delta, ID: RCOG_GUE_DELTA) Timeout | 1 | - |
| 0xE69C82 | Botschaftsfehler (Sektor Gruppe ** Rechts Erkennung Bodenunebenheit, ID: SCT_GRP_**_RH_RCOG_GUE) Timeout | 1 | - |
| 0xE69CA3 | Botschaftsfehler (Status Funktion Vorderachse ARS, ID: ST_FN_FTAX_ARS) Timeout | 1 | - |
| 0xE69CA4 | Botschaftsfehler (Odometrie Fahrzeug 3, ID: ODO_VEH_3) Timeout | 1 | - |
| 0xE69CB0 | Botschaftsfehler (Status Funktion Hinterachse ARS, ID: ST_FN_BAX_ARS) Timeout | 1 | - |
| 0xE69CC1 | Botschaftsfehler (Druck Luftfeder, ID: P_AISP) Timeout | 1 | - |
| 0xE69CC2 | Signalfehler (Druck Luftfeder, ID: P_AISP) Ungültig | 1 | - |
| 0xE69CC3 | Botschaftsfehler (Energie Vertikal Dynamik CHC, ID: ENERG_VE_DYNMC_CHC) Timeout | 1 | - |
| 0xE69CDD | Botschaftsfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Timeout | 1 | - |
| 0xE69CDF | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Timeout | 1 | - |
| 0xE69CE6 | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Alive | 1 | - |
| 0xE69D1D | Botschaftsfehler (Status Funktion Vorderachse ARS, ID: ST_FN_FTAX_ARS) Alive | 1 | - |
| 0xE69D2F | Botschaftsfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Alive | 1 | - |
| 0xE69D32 | Botschaftsfehler (Information Reifen, ID: INFO_TYR) Alive | 1 | - |
| 0xE69D36 | Botschaftsfehler (Status Funktion Hinterachse ARS, ID: ST_FN_BAX_ARS) Alive | 1 | - |
| 0xE69D4A | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Alive | 1 | - |
| 0xE69D9E | Signalfehler (Information Reifen, ID: INFO_TYR) Ungültig | 1 | - |
| 0xE69D9F | Signalfehler (Sektor Gruppe ** Rechts Erkennung Bodenunebenheit, ID: SCT_GRP_**_RH_RCOG_GUE) Ungültig | 1 | - |
| 0xE69DA9 | Signalfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Ungültig | 1 | - |
| 0xE69DB7 | Signalfehler (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) Ungültig | 1 | - |
| 0xE69DBE | Signalfehler (Erkennung Bodenunebenheit Delta, ID: RCOG_GUE_DELTA) Ungültig | 1 | - |
| 0xE69DD1 | Signalfehler (Bedienung Taster Niveauwechsel, ID:OP_PUBU_LVCH) Ungültig | 1 | - |
| 0xE69DD6 | Signalfehler (Odometrie Fahrzeug 3, ID: ODO_VEH_3) Ungültig | 1 | - |
| 0xE69DDC | Signalfehler (Status Funktion Vorderachse ARS, ID: ST_FN_FTAX_ARS) Ungültig | 1 | - |
| 0xE69DE3 | Signalfehler (Status Funktion Hinterachse ARS, ID: ST_FN_BAX_ARS) Ungültig | 1 | - |
| 0xE69DEB | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Ungültig | 1 | - |
| 0xE69E30 | Botschaftsfehler (Information Reifen, ID: INFO_TYR) Checksumme | 1 | - |
| 0xE69E4D | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Checksumme | 1 | - |
| 0xE69E6A | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Checksumme | 1 | - |
| 0xE69F0B | Signalfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Ungültig | 1 | - |
| 0xE69F19 | Signalfehler (Energie Vertikal Dynamik CHC, ID: ENERG_VE_DYNMC_CHC) Ungültig | 1 | - |
| 0xE69F76 | Botschaftsfehler (Status Funktion Vorderachse ARS, ID: ST_FN_FTAX_ARS) Checksumme | 1 | - |
| 0xE69F77 | Botschaftsfehler (Status Funktion Hinterachse ARS, ID: ST_FN_BAX_ARS) Checksumme | 1 | - |
| 0xE69F85 | Botschaftsfehler (Status Cabrio Dach, ID: ST_CABRF) Checksumme | 1 | - |
| 0xE69F91 | Botschaftsfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Checksumme | 1 | - |
| 0xE6AC44 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) - Ungültig | 1 | - |
| 0xE6AC7B | Signalfehler (Status Cabrio Dach, ID: ST_CABRF) - Ungültig | 1 | - |
| 0xE6AD43 | Botschaftsfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Timeout | 1 | - |
| 0xE6AD45 | Botschaftsfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Checksumme | 1 | - |
| 0xE6AD46 | Botschaftsfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Alive | 1 | - |
| 0xE6AD49 | Signalfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Kompressor Aktivierung | 0/1 | High | 0x01 | - | - | - | - |
| 0x0006 | Ablassventil Aktivierung | 0/1 | High | 0x02 | - | - | - | - |
| 0x0007 | Speicherventil Aktivierung | 0/1 | High | 0x04 | - | - | - | - |
| 0x0008 | Luftfederventil VL Aktivierung | 0/1 | High | 0x08 | - | - | - | - |
| 0x0009 | Luftfederventil VR Aktivierung | 0/1 | High | 0x10 | - | - | - | - |
| 0x000A | Luftfederventil HL Aktivierung | 0/1 | High | 0x20 | - | - | - | - |
| 0x000B | Luftfederventil HR Aktivierung | 0/1 | High | 0x40 | - | - | - | - |
| 0x000C | Komponentenschutz aktiviert | 0/1 | High | 0x01 | - | - | - | - |
| 0x000D | Energie Level | 0-n | High | 0x06 | RESTRIKTIONEN | - | - | - |
| 0x000E | Druckniveau Speicher | 0/1 | High | 0x08 | - | - | - | - |
| 0x000F | EHC Codierung nicht korrekt | 0/1 | High | 0x10 | - | - | - | - |
| 0x0010 | Hoehe VL außerhalb Toleranzband | 0/1 | High | 0x01 | - | - | - | - |
| 0x0011 | Hoehe VR außerhalb Toleranzband | 0/1 | High | 0x02 | - | - | - | - |
| 0x0012 | Hoehe HL außerhalb Toleranzband | 0/1 | High | 0x04 | - | - | - | - |
| 0x0013 | Hoehe HR außerhalb Toleranzband | 0/1 | High | 0x08 | - | - | - | - |
| 0x0014 | Neigungswinkel überschritten | 0/1 | High | 0x10 | - | - | - | - |
| 0x0015 | Tür  Kofferraum geöffnet | 0/1 | High | 0x20 | - | - | - | - |
| 0x0016 | Transportmodus aktiv | 0/1 | High | 0x40 | - | - | - | - |
| 0x0017 | Notlauf aktiv | 0/1 | High | 0x80 | - | - | - | - |
| 0x0018 | Schiefstand | 0/1 | High | 0x01 | - | - | - | - |
| 0x0019 | Verschränkung | 0/1 | High | 0x02 | - | - | - | - |
| 0x001A | Hangerkennung | 0/1 | High | 0x04 | - | - | - | - |
| 0x001B | Hebebühnen-/Wagenheber-Erkennung | 0/1 | High | 0x08 | - | - | - | - |
| 0x001C | Kurvenerkennung | 0/1 | High | 0x10 | - | - | - | - |
| 0x001D | Potentieller Beladungswechsel erkannt | 0/1 | High | 0x20 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | signed long | - | - | - | - |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x289C | AKTORTEMPERATUR_HA | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x289D | AKTORTEMPERATUR_VA | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x289E | EASRSAS_SOLL_AKTORMOMENT_HA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x289F | EASRSAS_IST_AKTORMOMENT_HA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28A0 | EASRSAS_SOLL_AKTORMOMENT_VA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28A1 | EASRSAS_IST_AKTORMOMENT_VA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28A2 | SOLL_WANKMOMENT_HA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A3 | IST_WANKMOMENT_HA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A4 | SOLL_WANKMOMENT_VA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A5 | IST_WANKMOMENT_VA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A6 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x28CF | KODIERCHECK_GRUPPE | HEX | High | unsigned int | - | - | - | - |
| 0x28D0 | KODIERCHECK_PARAMETER | HEX | High | unsigned int | - | - | - | - |
| 0x28D1 | EARSSBS_QUERBESCHLEUNIGUNG | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x28D2 | ARSFF_QUERBESCHLEUNIGUNG | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x28D3 | ARSFF_SOLL_AKTORMOMENT_HA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D4 | ARSFF_IST_AKTORMOMENT_HA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D5 | ARSFF_SOLL_AKTORMOMENT_VA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D6 | ARSFF_IST_AKTORMOMENT_VA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D7 | EARSAS_AKTORSTATUS_VA | 0-n | High | 0xFF | TAB_EARSAB_QU_FN_XAX_ARS | - | - | - |
| 0x28D8 | EARSAS_AKTORSTATUS_HA | 0-n | High | 0xFF | TAB_EARSAB_QU_FN_XAX_ARS | - | - | - |
| 0x28D9 | EARSAS_STROMVORGABE_LAST_VA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28DA | EARSAS_STROMVORGABE_REKU_VA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28DB | EARSAS_STROMVORGABE_LAST_HA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28DC | EARSAS_STROMVORGABE_REKU_HA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28DD | ARSFF_STROMVORGABE_LAST_VA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28DE | ARSFF_STROMVORGABE_REKU_VA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28DF | ARSFF_STROMVORGABE_LAST_HA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28E0 | ARSFF_STROMVORGABE_REKU_HA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28E1 | ARSFF_DEGRADATIONSSTUFE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28E2 | EARSAS_UEBERWACHUNGSSTATUS_VA | 0-n | High | 0xFFFF | TAB_EARSAS_STATUS_UEBERWACHUNG | - | - | - |
| 0x28E3 | EARSAS_UEBERWACHUNGSSTATUS_HA | 0-n | High | 0xFFFF | TAB_EARSAS_STATUS_UEBERWACHUNG | - | - | - |
| 0x28E4 | ARSFF_SICHERHEITSSTATUS_VA | 0-n | High | 0xFF | TAB_ARSFF_SICHERHEITSSTATUS | - | - | - |
| 0x28E5 | ARSFF_SICHERHEITSSTATUS_HA | 0-n | High | 0xFF | TAB_ARSFF_SICHERHEITSSTATUS | - | - | - |
| 0x28E6 | URSACHE_HOEHENSTAND_VL | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28E7 | URSACHE_HOEHENSTAND_VR | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28E8 | URSACHE_HOEHENSTAND_HL | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28E9 | URSACHE_HOEHENSTAND_HR | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28EA | URSACHE_RADBESCHL_VL | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28EB | URSACHE_RADBESCHL_VR | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28EC | URSACHE_RADBESCHL_HL | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x28ED | URSACHE_RADBESCHL_HR | 0-n | High | 0xFF | TAB_URSACHE_VDMKBS | - | - | - |
| 0x2948 | TEMPERATUR_BATTERIE_14V | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x2949 | MAX_I_LD_SPEC_ARS | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x294A | MAX_I_RECUP_SPEC_ARS | A | High | unsigned char | - | -1.0 | 1.0 | 0.0 |
| 0x294B | ENERGIE_VERFUEGBARKEIT_ARS | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x295F | EARSAS_UNTERSPANNUNGSSTATUS_VA | 0-n | High | 0xFF | TAB_EARSAS_STATUS_UNTERSPANNUNG_1BYTE | - | - | - |
| 0x2960 | EARSAS_UNTERSPANNUNGSSTATUS_HA | 0-n | High | 0xFF | TAB_EARSAS_STATUS_UNTERSPANNUNG_1BYTE | - | - | - |
| 0x6000 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x6001 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x6002 | Aktuatoransteuerung | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | Regelung | 0-n | High | 0xFF | REGELUNG | - | - | - |
| 0x6004 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x6005 | Niveauwechselgrund | 0-n | High | 0xFF | NIVEAUWECHSELGRUND | - | - | - |
| 0x6006 | HOEHENUEBERWACHUNG | 0-n | High | 0xFF | HOEHENUEBERWACHUNG | - | - | - |
| 0x6007 | Fahrzeugmodi | 0-n | High | 0xFF | FAHRZEUGMODI | - | - | - |
| 0x6008 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x6009 | Zielniveau | 0-n | High | 0xFF | ZIELNIVEAU | - | - | - |
| 0x6010 | Notlauf LvlCtrl | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6011 | Notlauf Actuators | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6012 | Pressure VL | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x6013 | Pressure VR | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x6014 | pressure HL | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x6015 | Pressure HR | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x6016 | Pressure Reservoir | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x6061 | ERROR_SW | 0-n | High | 0xFF | TAB_SOFTWARE_FEHLER | - | - | - |
| 0x6062 | ERROR_TRAPS | 0-n | High | 0xFF | TAB_TRAPS_FEHLER | - | - | - |
| 0x6063 | ERROR_CPU | 0-n | High | 0xFF | TAB_CPU | - | - | - |
| 0x6064 | ROH_DATEN | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x6065 | ERROR_HW | 0-n | High | 0xFF | TAB_HARDWARE_FEHLER | - | - | - |
| 0x6066 | SENSORVERSORGUNGSSPANNUNG_VA | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6070 | INTERNAL_ERROR_SENSOR_VL | 0-n | High | 0xFF | TAB_PSI5_INTERNAL_ERROR | - | - | - |
| 0x6072 | MAINSTATE_SENSOR_VL | 0-n | High | 0xFF | TAB_PSI5_MAINSTATE | - | - | - |
| 0x6073 | INITSTATE_SENSOR_VL | 0-n | High | 0xFF | TAB_PSI5_INITSTATE | - | - | - |
| 0x6074 | STATE_SENSOR_VL | 0-n | High | 0xFFFF | TAB_PSI5_STATE | - | - | - |
| 0x6075 | ERRORSTATE_SENSOR_VL | 0-n | High | 0xFFFF | TAB_PSI5_ERRORSTATE | - | - | - |
| 0x6076 | EVENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x607B | SENSORSIGNALSPANNUNG_VL | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x607C | SENSORSIGNALSPANNUNG_VR | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x607D | SENSORSIGNALSPANNUNG_HL | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x607E | SENSORSIGNALSPANNUNG_HR | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x607F | SENSORVERSORGUNGSSPANNUNG_HA | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6080 | ERROR_CPU_SW | 0-n | High | 0xFF | TAB_CPU | - | - | - |
| 0x6081 | ROH_DATEN_SW | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x6082 | INTERNAL_ERROR_SENSOR_VR | 0-n | High | 0xFF | TAB_PSI5_INTERNAL_ERROR | - | - | - |
| 0x6083 | INTERNAL_ERROR_SENSOR_HL | 0-n | High | 0xFF | TAB_PSI5_INTERNAL_ERROR | - | - | - |
| 0x6084 | INTERNAL_ERROR_SENSOR_HR | 0-n | High | 0xFF | TAB_PSI5_INTERNAL_ERROR | - | - | - |
| 0x6085 | MAINSTATE_SENSOR_VR | 0-n | High | 0xFF | TAB_PSI5_MAINSTATE | - | - | - |
| 0x6086 | MAINSTATE_SENSOR_HL | 0-n | High | 0xFF | TAB_PSI5_MAINSTATE | - | - | - |
| 0x6087 | MAINSTATE_SENSOR_HR | 0-n | High | 0xFF | TAB_PSI5_MAINSTATE | - | - | - |
| 0x6088 | INITSTATE_SENSOR_VR | 0-n | High | 0xFF | TAB_PSI5_INITSTATE | - | - | - |
| 0x6089 | INITSTATE_SENSOR_HL | 0-n | High | 0xFF | TAB_PSI5_INITSTATE | - | - | - |
| 0x608A | INITSTATE_SENSOR_HR | 0-n | High | 0xFF | TAB_PSI5_INITSTATE | - | - | - |
| 0x608B | STATE_SENSOR_VR | 0-n | High | 0xFFFF | TAB_PSI5_STATE | - | - | - |
| 0x608C | STATE_SENSOR_HL | 0-n | High | 0xFFFF | TAB_PSI5_STATE | - | - | - |
| 0x608D | STATE_SENSOR_HR | 0-n | High | 0xFFFF | TAB_PSI5_STATE | - | - | - |
| 0x608E | ERRORSTATE_SENSOR_VR | 0-n | High | 0xFFFF | TAB_PSI5_ERRORSTATE | - | - | - |
| 0x608F | ERRORSTATE_SENSOR_HL | 0-n | High | 0xFFFF | TAB_PSI5_ERRORSTATE | - | - | - |
| 0x6090 | ERRORSTATE_SENSOR_HR | 0-n | High | 0xFFFF | TAB_PSI5_ERRORSTATE | - | - | - |
| 0x6093 | VDC_DRUCK_VL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6094 | VDC_DRUCK_VR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6095 | VDC_DRUCK_HL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6096 | VDC_DRUCK_HR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6097 | VDC_ZUG_VL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6098 | VDC_ZUG_VR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6099 | VDC_ZUG_HL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609A | VDC_ZUG_HR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609B | VDC_DRUCK_VL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609C | VDC_DRUCK_VR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609D | VDC_DRUCK_HL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609E | VDC_DRUCK_HR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609F | VDC_ZUG_VL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A0 | VDC_ZUG_VR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A1 | VDC_ZUG_HL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A2 | VDC_ZUG_HR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A3 | VDC_DRUCK_VL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A4 | VDC_DRUCK_VR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A5 | VDC_DRUCK_HL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A6 | VDC_DRUCK_HR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A7 | VDC_ZUG_VL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A8 | VDC_ZUG_VR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A9 | VDC_ZUG_HL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60AA | VDC_ZUG_HR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60AB | VDC_DRUCK_VL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AC | VDC_DRUCK_VR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AD | VDC_DRUCK_HL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AE | VDC_DRUCK_HR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AF | VDC_ZUG_VL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B0 | VDC_ZUG_VR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B1 | VDC_ZUG_HL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B2 | VDC_ZUG_HR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B3 | VDC_DRUCK_VL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B4 | VDC_DRUCK_VR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B5 | VDC_DRUCK_HL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B6 | VDC_DRUCK_HR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B7 | VDC_ZUG_VL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B8 | VDC_ZUG_VR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B9 | VDC_ZUG_HL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60BA | VDC_ZUG_HR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60BB | VDC_VL_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60BC | VDC_VR_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60BD | VDC_HL_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60BE | VDC_HR_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60C3 | HOEHENSTAND_VL_ABSOLUT | mm | High | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x60C4 | HOEHENSTAND_VR_ABSOLUT | mm | High | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x60C5 | HOEHENSTAND_HL_ABSOLUT | mm | High | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x60C6 | HOEHENSTAND_HR_ABSOLUT | mm | High | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x60C7 | ANZAHL_NICHTVERFUEGBARKEIT_KA_UNSPEZIFISCH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60C8 | ANZAHL_NICHTVERFUEGBARKEIT_KA_DRUCK_RESERVOIR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60C9 | ANZAHL_NICHTVERFUEGBARKEIT_KA_ENERGIE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60CA | ANZAHL_VERFUEGBARKEIT_KA | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HOEHENUEBERWACHUNG

| WERT | TEXT |
| --- | --- |
| 0 | keine Warnung |
| 1 | Warnstufe 1 |
| 2 | Warnstufe 2 |
| 3 | offen |
| 0xFF | Wert ungültig |

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
| 0x030C48 | VDM-ARSFF: ARS leichte Leistungsreduktion aufgrund externer Energiebegrenzung | 1 | - |
| 0x030C49 | VDM-VDC: Falsches Dämpferkennfeld | 0 | - |
| 0x030C50 | INT-CCHDL Überlauf Checkcontrol Buffer | 0 | - |
| 0x030C51 | INT-CCHDL Undefinierte CC-ID angefordert | 0 | - |
| 0x030C52 | INT-CCHDL Info Buffer Füllgrad | 0 | - |
| 0x030C58 | INT-CCHDL Anforderung abgelehnt Task läuft bereits | 0 | - |
| 0x030C5F | VDM-ARSFF - ARS-Aktuatoren leichte Reduktion wegen Übertemperatur | 1 | - |
| 0x030C61 | VDM-ARSFF: ARS Aufstart während Kurvenfahrt, vorübergehende Degradation mit CC-Meldung | 1 | - |
| 0x030C64 | VDM-ARS - Gehäuft niedrige Spannung an ARS-Batterie | 1 | - |
| 0x030C65 | VDM-EARSAB: Fehler auf Signal eines Aktors | 1 | - |
| 0x48287F | Steuergerät intern - Security Diagnose Request in verriegeltem Zustand erhalten | 0 | - |
| 0x4828E0 | Ventilspule - Zugstufe - Vorn Rechts Ventilfehler bei Onlineprüfung | 0 | - |
| 0x4828E8 | Ventilspule - Zugstufe - Vorn Links Ventilfehler bei Onlineprüfung | 0 | - |
| 0x4828F2 | Ventilspule - Zugstufe - Hinten Rechts Ventilfehler bei Onlineprüfung | 0 | - |
| 0x4828FB | Ventilspule - Zugstufe - Hinten Links Ventilfehler bei Onlineprüfung | 0 | - |
| 0x482904 | Ventilspule - Druckstufe - Vorn Rechts Ventilfehler bei Onlineprüfung | 0 | - |
| 0x48290C | Ventilspule - Druckstufe - Vorn Links Ventilfehler bei Onlineprüfung | 0 | - |
| 0x482916 | Ventilspule - Druckstufe - Hinten Rechts Ventilfehler bei Onlineprüfung | 0 | - |
| 0x48291F | Ventilspule - Druckstufe - Hinten Links Ventilfehler bei Onlineprüfung | 0 | - |
| 0x48297B | Steuergerät intern Interner Basis-SW Fehler | 0 | - |
| 0x48297C | Steuergerät intern Übertemperatur | 0 | - |
| 0x48297D | Sammelfehler VD-CAN | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x288F | CC_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2890 | BUFFER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x2891 | BUFFER_SIZE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2892 | FILL_LEVEL_BUFFER_0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2893 | FILL_LEVEL_BUFFER_1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2894 | FILL_LEVEL_BUFFER_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2895 | FILL_LEVEL_BUFFER_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2896 | FILL_LEVEL_BUFFER_4 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2897 | FILL_LEVEL_BUFFER_5 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x289C | AKTORTEMPERATUR_HA | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x289D | AKTORTEMPERATUR_VA | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x28A2 | SOLL_WANKMOMENT_HA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A3 | IST_WANKMOMENT_HA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A4 | SOLL_WANKMOMENT_VA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28A5 | IST_WANKMOMENT_VA | Nm | High | signed char | - | 50.0 | 1.0 | 0.0 |
| 0x28C4 | FUNCTION_ID_ANFORDERER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C5 | STATUS_ANFORDERER | 0-n | High | 0xFF | TAB_STATUS_ANFORDERER | - | - | - |
| 0x28D1 | EARSSBS_QUERBESCHLEUNIGUNG | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x28D3 | ARSFF_SOLL_AKTORMOMENT_HA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D4 | ARSFF_IST_AKTORMOMENT_HA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D5 | ARSFF_SOLL_AKTORMOMENT_VA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D6 | ARSFF_IST_AKTORMOMENT_VA | Nm | High | signed char | - | 10.0 | 1.0 | 0.0 |
| 0x28D7 | EARSAS_AKTORSTATUS_VA | 0-n | High | 0xFF | TAB_EARSAB_QU_FN_XAX_ARS | - | - | - |
| 0x28D8 | EARSAS_AKTORSTATUS_HA | 0-n | High | 0xFF | TAB_EARSAB_QU_FN_XAX_ARS | - | - | - |
| 0x28D9 | EARSAS_STROMVORGABE_LAST_VA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28DA | EARSAS_STROMVORGABE_REKU_VA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28DB | EARSAS_STROMVORGABE_LAST_HA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28DC | EARSAS_STROMVORGABE_REKU_HA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28DD | ARSFF_STROMVORGABE_LAST_VA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28DE | ARSFF_STROMVORGABE_REKU_VA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28DF | ARSFF_STROMVORGABE_LAST_HA | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28E0 | ARSFF_STROMVORGABE_REKU_HA | A | High | unsigned char | - | 1.0 | 1.0 | -252.0 |
| 0x28E1 | ARSFF_DEGRADATIONSSTUFE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28E4 | ARSFF_SICHERHEITSSTATUS_VA | 0-n | High | 0xFF | TAB_ARSFF_SICHERHEITSSTATUS | - | - | - |
| 0x28E5 | ARSFF_SICHERHEITSSTATUS_HA | 0-n | High | 0xFF | TAB_ARSFF_SICHERHEITSSTATUS | - | - | - |
| 0x28F5 | ZEIT_VA_STARKE_UNTSPG_NORMTEMP | s | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28F6 | ZEIT_HA_STARKE_UNTSPG_NORMTEMP | s | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28F7 | STROM_MITTEL_STARKE_UNTSPG | A | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28F8 | ZEIT_VA_UNTSPG_DEG_QU | s | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28F9 | ZEIT_HA_UNTSPG_DEG_QU | s | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x2924 | KENNFELD_VA_FEHLERHAFT | 0-n | High | 0xFF | TAB_VDMVDC_KENNFELDFEHLER | - | - | - |
| 0x2925 | KENNFELD_HA_FEHLERHAFT | 0-n | High | 0xFF | TAB_VDMVDC_KENNFELDFEHLER | - | - | - |
| 0x293D | EARSAB_ST_FN_FTAX_ARS | 0-n | High | 0xFF | TAB_EARSAB_ST_FN_XAX_ARS | - | - | - |
| 0x293E | EARSAB_ST_FN_BAX_ARS | 0-n | High | 0xFF | TAB_EARSAB_ST_FN_XAX_ARS | - | - | - |
| 0x293F | EARSAB_QU_FN_FTAX_ARS | 0-n | High | 0xFF | TAB_EARSAB_QU_FN_XAX_ARS | - | - | - |
| 0x2940 | EARSAB_QU_FN_BAX_ARS | 0-n | High | 0xFF | TAB_EARSAB_QU_FN_XAX_ARS | - | - | - |
| 0x2941 | EARSAB_QU_AVL_TORQ_STAB_FTAX_ARS | 0-n | High | 0xFF | TAB_EARSAB_QU_AVL_TORQ_STAB_XAX_ARS | - | - | - |
| 0x2942 | EARSAB_QU_AVL_TORQ_STAB_BAX_ARS | 0-n | High | 0xFF | TAB_EARSAB_QU_AVL_TORQ_STAB_XAX_ARS | - | - | - |
| 0x2948 | TEMPERATUR_BATTERIE_14V | °C | High | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x2949 | MAX_I_LD_SPEC_ARS | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x294A | MAX_I_RECUP_SPEC_ARS | A | High | unsigned char | - | -1.0 | 1.0 | 0.0 |
| 0x294B | ENERGIE_VERFUEGBARKEIT_ARS | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x29FF | TESTER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x6077 | ERROR_SW_INFO | 0-n | High | 0xFF | TAB_SOFTWARE_FEHLER | - | - | - |
| 0x6078 | ERROR_TRAPS_INFO | 0-n | High | 0xFF | TAB_TRAPS_FEHLER | - | - | - |
| 0x6079 | ERROR_CPU_INFO | 0-n | High | 0xFF | TAB_CPU | - | - | - |
| 0x607A | ROH_DATEN_INFO | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x6091 | ERROR_UEBERTEMPERATUR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6092 | TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6093 | VDC_DRUCK_VL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6094 | VDC_DRUCK_VR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6095 | VDC_DRUCK_HL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6096 | VDC_DRUCK_HR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6097 | VDC_ZUG_VL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6098 | VDC_ZUG_VR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6099 | VDC_ZUG_HL_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609A | VDC_ZUG_HR_ISTSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609B | VDC_DRUCK_VL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609C | VDC_DRUCK_VR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609D | VDC_DRUCK_HL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609E | VDC_DRUCK_HR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x609F | VDC_ZUG_VL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A0 | VDC_ZUG_VR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A1 | VDC_ZUG_HL_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A2 | VDC_ZUG_HR_SOLLSTROM | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A3 | VDC_DRUCK_VL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A4 | VDC_DRUCK_VR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A5 | VDC_DRUCK_HL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A6 | VDC_DRUCK_HR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A7 | VDC_ZUG_VL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A8 | VDC_ZUG_VR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60A9 | VDC_ZUG_HL_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60AA | VDC_ZUG_HR_HS_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60AB | VDC_DRUCK_VL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AC | VDC_DRUCK_VR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AD | VDC_DRUCK_HL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AE | VDC_DRUCK_HR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60AF | VDC_ZUG_VL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B0 | VDC_ZUG_VR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B1 | VDC_ZUG_HL_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B2 | VDC_ZUG_HR_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B3 | VDC_DRUCK_VL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B4 | VDC_DRUCK_VR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B5 | VDC_DRUCK_HL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B6 | VDC_DRUCK_HR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B7 | VDC_ZUG_VL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B8 | VDC_ZUG_VR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60B9 | VDC_ZUG_HL_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60BA | VDC_ZUG_HR_QUALIFIER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60BB | VDC_VL_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60BC | VDC_VR_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60BD | VDC_HL_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60BE | VDC_HR_COMMON_HS | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x60C0 | CAN_ERROR_INFO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x60C1 | CAN_ROHDATEN | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x60C2 | DIAGNOSEJOB_ID | HEX | High | unsigned int | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### NIVEAUWECHSELGRUND

| WERT | TEXT |
| --- | --- |
| 0 | kein Niveauwechsel |
| 1 | Nachregelung |
| 2 | manueller Niveauwechsel |
| 3 | Niveauwechsel über Geschwindigkeit |
| 4 | Niveauwechsel durch Notlauf |
| 0xFF | Wert ungültig |

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

### REGELUNG

| WERT | TEXT |
| --- | --- |
| 0 | keine Regelung |
| 1 | Achsregelung aktiv |
| 2 | Cornerregelung aktiv |
| 3 | Schiefstandsregelung aktiv |
| 4 | Druckausgleichsregelung aktiv |
| 5 | Hebebühnen-Druckluftausgleich aktiv |
| 6 | Easy Loading |
| 7 | Wakeup-Control |
| 0xFF | Wert ungültig |

### RESTRIKTIONEN

| WERT | TEXT |
| --- | --- |
| 0 | keine Energie |
| 1 | unteres Energieniveau |
| 2 | mittleres Energieniveau |
| 3 | beres Energieniveau bzw. Energieniveaus werden ignoriert (zB Service Mode) |
| 0xFF | Wert ungültig |

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

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAINSTATE_SENSOR_VL | 0-n | high | unsigned char | - | TAB_PSI5_MAINSTATE | - | - | - | Mainstate PSI5-Sensor vorn links |
| STAT_INITSTATE_SENSOR_VL | 0-n | high | unsigned char | - | TAB_PSI5_INITSTATE | - | - | - | Initstate PSI5-Sensor vorn links |
| STAT_STATE_SENSOR_VL | 0-n | high | unsigned int | - | TAB_PSI5_STATE | - | - | - | State PSI5-Sensor vorn links |
| STAT_ERRORSTATE_SENSOR_VL | 0-n | high | unsigned int | - | TAB_PSI5_ERRORSTATE | - | - | - | Errorstate PSI5-Sensor vorn links |
| STAT_MANUFACTURER_SENSOR_VL_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Hersteller PSI5-Sensor vorn links |
| STAT_SENSORTYPE_SENSOR_VL_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Sensortype PSI5-Sensor vorn links |
| STAT_SERIESNUMBER_SENSOR_VL_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer PSI5-Sensor vorn links |
| STAT_INTERNAL_ERROR_SENSOR_VL | 0-n | high | unsigned char | - | TAB_PSI5_INTERNAL_ERROR | - | - | - | Internal Error PSI5-Sensor vorn links |
| STAT_MAINSTATE_SENSOR_VR | 0-n | high | unsigned char | - | TAB_PSI5_MAINSTATE | - | - | - | Mainstate PSI5-Sensor vorn rechts |
| STAT_INITSTATE_SENSOR_VR | 0-n | high | unsigned char | - | TAB_PSI5_INITSTATE | - | - | - | Initstate PSI5-Sensor vorn rechts |
| STAT_STATE_SENSOR_VR | 0-n | high | unsigned int | - | TAB_PSI5_STATE | - | - | - | State PSI5-Sensor vorn rechts |
| STAT_ERRORSTATE_SENSOR_VR | 0-n | high | unsigned int | - | TAB_PSI5_ERRORSTATE | - | - | - | Errorstate PSI5-Sensor vorn rechts |
| STAT_MANUFACTURER_SENSOR_VR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Hersteller PSI5-Sensor vorn rechts |
| STAT_SENSORTYPE_SENSOR_VR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Sensortype PSI5-Sensor vorn rechts |
| STAT_SERIESNUMBER_SENSOR_VR_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer PSI5-Sensor vorn rechts |
| STAT_INTERNAL_ERROR_SENSOR_VR | 0-n | high | unsigned char | - | TAB_PSI5_INTERNAL_ERROR | - | - | - | Internal Error PSI5-Sensor vorn rechts |
| STAT_MAINSTATE_SENSOR_HL | 0-n | high | unsigned char | - | TAB_PSI5_MAINSTATE | - | - | - | Mainstate PSI5-Sensor hinten links |
| STAT_INITSTATE_SENSOR_HL | 0-n | high | unsigned char | - | TAB_PSI5_INITSTATE | - | - | - | Initstate PSI5-Sensor hinten links |
| STAT_STATE_SENSOR_HL | 0-n | high | unsigned int | - | TAB_PSI5_STATE | - | - | - | State PSI5-Sensor hinten links |
| STAT_ERRORSTATE_SENSOR_HL | 0-n | high | unsigned int | - | TAB_PSI5_ERRORSTATE | - | - | - | Errorstate PSI5-Sensor hinten links |
| STAT_MANUFACTURER_SENSOR_HL_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Hersteller PSI5-Sensor hinten links |
| STAT_SENSORTYPE_SENSOR_HL_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Sensortype PSI5-Sensor hinten links |
| STAT_SERIESNUMBER_SENSOR_HL_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer PSI5-Sensor hinten links |
| STAT_INTERNAL_ERROR_SENSOR_HL | 0-n | high | unsigned char | - | TAB_PSI5_INTERNAL_ERROR | - | - | - | Internal Error PSI5-Sensor hinten links |
| STAT_MAINSTATE_SENSOR_HR | 0-n | high | unsigned char | - | TAB_PSI5_MAINSTATE | - | - | - | Mainstate PSI5-Sensor hinten rechts |
| STAT_INITSTATE_SENSOR_HR | 0-n | high | unsigned char | - | TAB_PSI5_INITSTATE | - | - | - | Initstate PSI5-Sensor hinten rechts |
| STAT_STATE_SENSOR_HR | 0-n | high | unsigned int | - | TAB_PSI5_STATE | - | - | - | State PSI5-Sensor hinten rechts |
| STAT_ERRORSTATE_SENSOR_HR | 0-n | high | unsigned int | - | TAB_PSI5_ERRORSTATE | - | - | - | Errorstate PSI5-Sensor hinten rechts |
| STAT_MANUFACTURER_SENSOR_HR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Hersteller PSI5-Sensor hinten rechts |
| STAT_SENSORTYPE_SENSOR_HR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Sensortype PSI5-Sensor hinten rechts |
| STAT_SERIESNUMBER_SENSOR_HR_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer PSI5-Sensor hinten rechts |
| STAT_INTERNAL_ERROR_SENSOR_HR | 0-n | high | unsigned char | - | TAB_PSI5_INTERNAL_ERROR | - | - | - | Internal Error PSI5-Sensor hinten rechts |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_C_U_KL30_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Kl30 |
| STAT_C_U_1V3_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Prozessorspannung 1,3 V |
| STAT_C_U_VPPE_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung VPPE |
| STAT_C_U_CSYNC_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert CSync Spannung PSI5 |
| STAT_C_U_PWR_SENCOR56_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Versorgung Sensoren 56 |
| STAT_C_U_PWR_SENCOR78_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Versorgung Sensoren 78 |
| STAT_C_U_PWR_DRUCKTEMP_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Versorgung Druck- und Temperatursensor |
| STAT_C_U_COMPRESSOR_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Kompressor |
| STAT_C_U_PTC_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung am PTC |
| STAT_VIO_0_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung IO_0 |
| STAT_TEMP_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Temperatur PowerSBC in mV |
| STAT_VSENSE_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung SENSE |
| STAT_VIO_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung IO_1 |
| STAT_VREF_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung REF |
| STAT_ABLASSVENTIL_WIDERSTAND_WERT | Ohm | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Interne Widerstandsmessung Ablassventil |
| STAT_ABLASSVENTIL_LS_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC-Wert Ablassventil LS |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_C_I_COMMON_HS_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom common HS VL |
| STAT_C_U_COMMON_HS_VL_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Common HS VL |
| STAT_C_I_COMMON_HS_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom common HS VR |
| STAT_C_U_COMMON_HS_VR_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Common HS VR |
| STAT_C_I_COMMON_HS_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom common HS HL |
| STAT_C_U_COMMON_HS_HL_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Common HS HL |
| STAT_C_I_COMMON_HS_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom common HS HR |
| STAT_C_U_COMMON_HS_HR_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Common HS HR |
| STAT_VENTIL_VL_ZUG_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne links Zugstufe Strom |
| STAT_VENTIL_VL_ZUG_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne links Zugstufe HS-Spannung |
| STAT_VENTIL_VL_DRUCK_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne links Druckstufe Strom |
| STAT_VENTIL_VL_DRUCK_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne links Druckstufe HS-Spannung |
| STAT_VENTIL_VR_ZUG_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne rechts Zugstufe Strom |
| STAT_VENTIL_VR_ZUG_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne rechts Zugstufe HS-Spannung |
| STAT_VENTIL_VR_DRUCK_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne rechts Druckstufe Strom |
| STAT_VENTIL_VR_DRUCK_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil vorne rechts Druckstufe HS-Spannung |
| STAT_VENTIL_HL_ZUG_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten links Zugstufe Strom |
| STAT_VENTIL_HL_ZUG_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten links Zugstufe HS-Spannung |
| STAT_VENTIL_HL_DRUCK_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten links Druckstufe Strom |
| STAT_VENTIL_HL_DRUCK_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten links Druckstufe HS-Spannung |
| STAT_VENTIL_HR_ZUG_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten rechts Zugstufe Strom |
| STAT_VENTIL_HR_ZUG_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten rechts Zugstufe HS-Spannung |
| STAT_VENTIL_HR_DRUCK_I_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten rechts Druckstufe Strom |
| STAT_VENTIL_HR_DRUCK_HS_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Ventil hinten rechts Druckstufe HS-Spannung |
| STAT_KS_FLAG_LS_VL_ZUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag VL Zugstufe |
| STAT_KS_FLAG_LS_VL_DRUCK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag VL Druckstufe |
| STAT_KS_FLAG_LS_VR_ZUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag VR Zugstufe |
| STAT_KS_FLAG_LS_VR_DRUCK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag VR Druckstufe |
| STAT_KS_FLAG_LS_HL_ZUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag HL Zugstufe |
| STAT_KS_FLAG_LS_HL_DRUCK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag HL Druckstufe |
| STAT_KS_FLAG_LS_HR_ZUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag HR Zugstufe |
| STAT_KS_FLAG_LS_HR_DRUCK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status LS-Kurzschluss-Flag HR Druckstufe |

### RES_0X4015_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR1_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor1 |
| STAT_SENSOR1_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor1 |
| STAT_SENSOR2_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor2 |
| STAT_SENSOR2_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor2 |
| STAT_SENSOR3_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor3 |
| STAT_SENSOR3_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor3 |
| STAT_SENSOR4_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor4 |
| STAT_SENSOR4_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor4 |
| STAT_SENSOR5_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor5 |
| STAT_SENSOR5_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor5 |
| STAT_SENSOR6_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor6 |
| STAT_SENSOR6_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor6 |
| STAT_SENSOR7_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor7 |
| STAT_SENSOR7_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor7 |
| STAT_SENSOR8_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Sensor8 |
| STAT_SENSOR8_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Sensor8 |
| STAT_SENSOR1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor1 |
| STAT_SENSOR2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor2 |
| STAT_SENSOR3_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor3 |
| STAT_SENSOR4_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor4 |
| STAT_SENSOR5_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor5 |
| STAT_SENSOR6_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor6 |
| STAT_SENSOR7_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor7 |
| STAT_SENSOR8_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Sensor8 |
| STAT_SUPPLY_SENSOR_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Versorgung Sensoren |

### RES_0X401D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BALGVENTIL_VL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Balgventil Vorn Links |
| STAT_BALGVENTIL_VR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Balgventil Vorn Rechts |
| STAT_BALGVENTIL_HL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Balgventil Hinten Links |
| STAT_BALGVENTIL_HR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Balgventil Hinten Rechts |
| STAT_UMSCHALTVENTIL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Umschaltventil |
| STAT_ABLASSVENTIL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Ablassventil |
| STAT_SPEICHERVENTIL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Speicherventil |
| STAT_RESERVE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dutycycle Reserve |

### RES_0X4183_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPT_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion |
| STAT_UNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patchversion |

### RES_0X4184_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDP_CORE0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 0 |
| STAT_VDP_CORE1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 1  |
| STAT_VDP_CORE2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 2 |
| STAT_VDP_LAUFZEIT_TASK_1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 1 |
| STAT_VDP_LAUFZEIT_TASK_2_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 2 |
| STAT_VDP_LAUFZEIT_TASK_3_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 3 |
| STAT_VDP_LAUFZEIT_TASK_4_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 4 |
| STAT_VDP_LAUFZEIT_TASK_5_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 5 |
| STAT_VDP_LAUFZEIT_TASK_6_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 6 |
| STAT_VDP_LAUFZEIT_TASK_7_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 7 |
| STAT_VDP_LAUFZEIT_TASK_8_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 8 |
| STAT_VDP_LAUFZEIT_TASK_9_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 9 |
| STAT_VDP_LAUFZEIT_TASK_10_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 10 |
| STAT_VDP_LAUFZEIT_TASK_11_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 11 |
| STAT_VDP_LAUFZEIT_TASK_12_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 12 |
| STAT_VDP_LAUFZEIT_TASK_13_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 13 |
| STAT_VDP_LAUFZEIT_TASK_14_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 14 |
| STAT_VDP_LAUFZEIT_TASK_15_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 15 |
| STAT_VDP_LAUFZEIT_TASK_16_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 16 |
| STAT_VDP_LAUFZEIT_TASK_17_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 17 |
| STAT_VDP_LAUFZEIT_TASK_18_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 18 |
| STAT_VDP_LAUFZEIT_TASK_19_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 19 |
| STAT_VDP_LAUFZEIT_TASK_20_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 20 |
| STAT_VDP_LAUFZEIT_TASK_21_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 21 |
| STAT_VDP_LAUFZEIT_TASK_22_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 22 |
| STAT_VDP_LAUFZEIT_TASK_23_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 23 |
| STAT_VDP_LAUFZEIT_TASK_24_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 24 |
| STAT_VDP_LAUFZEIT_TASK_25_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 25 |
| STAT_VDP_LAUFZEIT_TASK_26_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 26 |
| STAT_VDP_LAUFZEIT_TASK_27_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 27 |
| STAT_VDP_LAUFZEIT_TASK_28_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 28 |
| STAT_VDP_LAUFZEIT_TASK_29_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 29 |
| STAT_VDP_LAUFZEIT_TASK_30_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 30 |
| STAT_VDP_LAUFZEIT_TASK_31_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 31 |
| STAT_VDP_LAUFZEIT_TASK_32_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Task 32 |

### RES_0X4186_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDP_TEMPERATURBEREICH_KLEINER_MINUS_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich kleiner Minus 40 Grad |
| STAT_VDP_TEMPERATURBEREICH_MINUS_30_BIS_MINUS_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von Minus 30 bis Minus 40 Grad |
| STAT_VDP_TEMPERATURBEREICH_MINUS_20_BIS_MINUS_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von Minus 20 bis Minus 30 Grad |
| STAT_VDP_TEMPERATURBEREICH_MINUS_10_BIS_MINUS_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von Minus 10 bis Minus 20 Grad |
| STAT_VDP_TEMPERATURBEREICH_0_BIS_MINUS_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 0 bis Minus 10 Grad |
| STAT_VDP_TEMPERATURBEREICH_0_BIS_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 0 bis 10 Grad |
| STAT_VDP_TEMPERATURBEREICH_10_BIS_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 10 bis 20 Grad |
| STAT_VDP_TEMPERATURBEREICH_20_BIS_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 20 bis 30 Grad |
| STAT_VDP_TEMPERATURBEREICH_30_BIS_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 30 bis 40 Grad |
| STAT_VDP_TEMPERATURBEREICH_40_BIS_50_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 40 bis 50 Grad |
| STAT_VDP_TEMPERATURBEREICH_50_BIS_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 50 bis 60 Grad |
| STAT_VDP_TEMPERATURBEREICH_60_BIS_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 60 bis 70 Grad |
| STAT_VDP_TEMPERATURBEREICH_70_BIS_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 70 bis 80 Grad |
| STAT_VDP_TEMPERATURBEREICH_80_BIS_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 80 bis 90 Grad |
| STAT_VDP_TEMPERATURBEREICH_90_BIS_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 90 bis 100 Grad |
| STAT_VDP_TEMPERATURBEREICH_100_BIS_110_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 100 bis 110 Grad |
| STAT_VDP_TEMPERATURBEREICH_110_BIS_120_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 110 bis 120 Grad |
| STAT_VDP_TEMPERATURBEREICH_GROESSER_120_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich groesser 120 Grad |

### RES_0X4187_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDP_TEMPERATURBEREICH_KLEINER_MINUS_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich kleiner Minus 40 Grad |
| STAT_VDP_TEMPERATURBEREICH_MINUS_30_BIS_MINUS_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von Minus 30 bis Minus 40 Grad |
| STAT_VDP_TEMPERATURBEREICH_MINUS_20_BIS_MINUS_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von Minus 20 bis Minus 30 Grad |
| STAT_VDP_TEMPERATURBEREICH_MINUS_10_BIS_MINUS_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von Minus 10 bis Minus 20 Grad |
| STAT_VDP_TEMPERATURBEREICH_0_BIS_MINUS_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 0 bis Minus 10 Grad |
| STAT_VDP_TEMPERATURBEREICH_0_BIS_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 0 bis 10 Grad |
| STAT_VDP_TEMPERATURBEREICH_10_BIS_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 10 bis 20 Grad |
| STAT_VDP_TEMPERATURBEREICH_20_BIS_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 20 bis 30 Grad |
| STAT_VDP_TEMPERATURBEREICH_30_BIS_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 30 bis 40 Grad |
| STAT_VDP_TEMPERATURBEREICH_40_BIS_50_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 40 bis 50 Grad |
| STAT_VDP_TEMPERATURBEREICH_50_BIS_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 50 bis 60 Grad |
| STAT_VDP_TEMPERATURBEREICH_60_BIS_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 60 bis 70 Grad |
| STAT_VDP_TEMPERATURBEREICH_70_BIS_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 70 bis 80 Grad |
| STAT_VDP_TEMPERATURBEREICH_80_BIS_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 80 bis 90 Grad |
| STAT_VDP_TEMPERATURBEREICH_90_BIS_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 90 bis 100 Grad |
| STAT_VDP_TEMPERATURBEREICH_100_BIS_110_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 100 bis 110 Grad |
| STAT_VDP_TEMPERATURBEREICH_110_BIS_120_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich von 110 bis 120 Grad |
| STAT_VDP_TEMPERATURBEREICH_GROESSER_120_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturbereich groesser 120 Grad |

### RES_0XAB68_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FL_LEAK_WERT | + | - | + | mm | - | signed int | - | - | 1.0 | 8.0 | 0.0 | Leckage Wert vorne links |
| STAT_FR_LEAK_WERT | + | - | + | mm | - | signed int | - | - | 1.0 | 8.0 | 0.0 | Leckage Wert vorne rechts |
| STAT_RL_LEAK_WERT | + | - | + | mm | - | signed int | - | - | 1.0 | 8.0 | 0.0 | Leckage Wert hinten links |
| STAT_RR_LEAK_WERT | + | - | + | mm | - | signed int | - | - | 1.0 | 8.0 | 0.0 | Leckage Wert hinten rechts |

### RES_0XD665_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADBESCHLEUNIGUNG_SENSOR_VL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Radbeschleunigung, Sensor vorn links |
| STAT_RADBESCHLEUNIGUNG_SENSOR_VR_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Radbeschleunigung, Sensor vorn rechts |
| STAT_RADBESCHLEUNIGUNG_SENSOR_HL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Radbeschleunigung, Sensor hinten links |
| STAT_RADBESCHLEUNIGUNG_SENSOR_HR_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Radbeschleunigung, Sensor hinten rechts |

### RES_0XD666_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADBESCHLEUNIGUNG_SENSOR_VL_NR | 0-n | high | signed int | - | TAB_RADBESCHLEUNIGUNG_SENSOR | - | - | - | Zustandsabfrage Radbeschleunigung, Sensor vorn links |
| STAT_RADBESCHLEUNIGUNG_SENSOR_VR_NR | 0-n | high | signed int | - | TAB_RADBESCHLEUNIGUNG_SENSOR | - | - | - | Zustandsabfrage Radbeschleunigung, Sensor vorn rechts |
| STAT_RADBESCHLEUNIGUNG_SENSOR_HL_NR | 0-n | high | signed int | - | TAB_RADBESCHLEUNIGUNG_SENSOR | - | - | - | Zustandsabfrage Radbeschleunigung, Sensor hinten links |
| STAT_RADBESCHLEUNIGUNG_SENSOR_HR_NR | 0-n | high | signed int | - | TAB_RADBESCHLEUNIGUNG_SENSOR | - | - | - | Zustandsabfrage Radbeschleunigung, Sensor hinten rechts |
| STAT_RADBESCHLEUNIGUNG_SPANNUNG_SENSOR_VL_WERT | V | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Radbeschleunigung, Sensor vorn links |
| STAT_RADBESCHLEUNIGUNG_SPANNUNG_SENSOR_VR_WERT | V | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Radbeschleunigung, Sensor vorne rechts |
| STAT_RADBESCHLEUNIGUNG_SPANNUNG_SENSOR_HL_WERT | V | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Radbeschleunigung, Sensor hinten links |
| STAT_RADBESCHLEUNIGUNG_SPANNUNG_SENSOR_HR_WERT | V | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Radbeschleunigung, Sensor hinten rechts |
| STAT_RADBESCHLEUNIGUNG_GRUNDSTROM_SENSOR_VL_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Grundstrom des Radbeschleunigung, Sensor vorn links |
| STAT_RADBESCHLEUNIGUNG_GRUNDSTROM_SENSOR_VR_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Grundstrom des Radbeschleunigung, Sensor vorn rechts |
| STAT_RADBESCHLEUNIGUNG_GRUNDSTROM_SENSOR_HL_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Grundstrom des Radbeschleunigung, Sensor hinten links |
| STAT_RADBESCHLEUNIGUNG_GRUNDSTROM_SENSOR_HR_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Grundstrom des Radbeschleunigung, Sensor hinten rechts |

### RES_0XD7A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_C_U_MV_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Spannung Magnetventil Highside |
| STAT_MV_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Hinten Links |
| STAT_MV_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Hinten Rechts |
| STAT_MV_PILEX_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Ablassventil |
| STAT_MV_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Vorn Links |
| STAT_MV_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Vorn Rechts |
| STAT_MV_RES_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Speicherventil |
| STAT_MV_SO_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Strom Magnetventil Umschaltventil |

### RES_0XD7A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Drucksensor |
| STAT_V_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Drucksensor |
| STAT_TEMP_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Temperatursensor |
| STAT_TEMP_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Temperatursensor |
| STAT_COMPRESSOR_HS_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Kompressor HighSide Sensor |
| STAT_COMPRESSOR_HS_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Kompressor HighSide Sensor |
| STAT_COMPRESSOR_LS_MAX_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Kompressor LowSide Sensor |
| STAT_COMPRESSOR_LS_MIN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Kompressor LowSide Sensor |
| STAT_DRUCK_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Drucksensor |
| STAT_TEMP_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Temperatursensor |
| STAT_COMPRESSOR_HS_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Kompressor HighSide Sensor |
| STAT_COMPRESSOR_LS_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Kompressor LowSide Sensor |
| STAT_DRUCK_BAR_WERT | bar | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Wert Druck in bar |
| STAT_TEMP_GRAD_C_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Temperatur in Grad Celsius |

### RES_0XD9DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_VA_SCHWACHE_UNTSPG_NORMTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Vorderachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im normalen Temperaturbereich eine schwache Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_VA_MITTLERE_UNTSPG_NORMTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Vorderachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im normalen Temperaturbereich eine mittlere Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_VA_STARKE_UNTSPG_NORMTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Vorderachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im normalen Temperaturbereic eine stake Unterspannung (kleiner ca. 9V) gemessen wurde und dadurch am Aktor mit einer Funktionsunterbrechung zu rechnen ist. |
| STAT_ZEIT_HA_SCHWACHE_UNTSPG_NORMTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Hinterachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im normalen Temperaturbereich eine schwache Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_HA_MITTLERE_UNTSPG_NORMTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Hinterachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im normalen Temperaturbereich eine mittlere Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_HA_STARKE_UNTSPG_NORMTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Hinterachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im normalen Temperaturbereic eine stake Unterspannung (kleiner ca. 9V) gemessen wurde und dadurch am Aktor mit einer Funktionsunterbrechung zu rechnen ist. |
| STAT_ZEIT_VA_SCHWACHE_UNTSPG_TIEFTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Vorderachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im tiefen Temperaturbereich eine schwache Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_VA_MITTLERE_UNTSPG_TIEFTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Vorderachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im tiefen Temperaturbereich eine mittlere Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_VA_STARKE_UNTSPG_TIEFTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Vorderachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im tiefen Temperaturbereic eine stake Unterspannung (kleiner ca. 9V) gemessen wurde und dadurch am Aktor mit einer Funktionsunterbrechung zu rechnen ist. |
| STAT_ZEIT_HA_SCHWACHE_UNTSPG_TIEFTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Hinterachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im tiefen Temperaturbereich eine schwache Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_HA_MITTLERE_UNTSPG_TIEFTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Hinterachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im tiefen Temperaturbereich eine mittlere Unterspannung gemessen wurde. Die genaue Spannungs- und Temperaturschwelle ist variabel bedatbar und daher hier nicht dokumentiert. |
| STAT_ZEIT_HA_STARKE_UNTSPG_TIEFTEMP_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der am Hinterachs-ARS-Aktor im Fahrbetrieb bei Geschwindigkeit > 5 km/h im tiefen Temperaturbereic eine stake Unterspannung (kleiner ca. 9V) gemessen wurde und dadurch am Aktor mit einer Funktionsunterbrechung zu rechnen ist. |
| STAT_STROM_MITTEL_SCHWACHE_UNTSPG_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Stromstärke bei schwacher Unterspannung,  Summe von Vorder- und Hinterachse. |
| STAT_STROM_MITTEL_MITTLERE_UNTSPG_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Stromstärke bei mittlerer Unterspannung,  Summe von Vorder- und Hinterachse. |
| STAT_STROM_MITTEL_STARKE_UNTSPG_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Stromstärke bei starker Unterspannung,  Summe von Vorder- und Hinterachse. |
| STAT_ZEIT_VA_UNTSPG_DEG_QU_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der vom Vorderachs-ARS-Aktor ein degradierter Funktionsqualifier aufgrund Unterspannung gesendet wird. |
| STAT_ZEIT_HA_UNTSPG_DEG_QU_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der vom Hinterachs-ARS-Aktor ein degradierter Funktionsqualifier aufgrund Unterspannung gesendet wird. |
| STAT_ZEIT_VA_UEBERSPG_DEG_QU_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der vom Vorderachs-ARS-Aktor ein degradierter Funktionsqualifier aufgrund Überspannung gesendet wird. |
| STAT_ZEIT_HA_UEBERSPG_DEG_QU_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit, bei der vom Hinterachs-ARS-Aktor ein degradierter Funktionsqualifier aufgrund Überspannung gesendet wird. |
| STAT_KM_STAND_LETZTES_EVENT_WERT | km | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der letzten Erhöhung eines Zählers. |
| STAT_SYSTEMZEIT_LETZTES_EVENT_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Systemzeit bei der letzten Erhöhung eines Zählers. |
| STAT_ZEIT_BETRIEB_GESAMT_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer seit dem letzten Zurücksetzen aller Zähler. |
| STAT_ZEIT_BETRIEB_SEIT_LETZTEM_EVENT_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer seit der letzten Erhöhung eines Zählers. |
| STAT_ZEIT_BELASTUNG_SEIT_LETZTEM_EVENT_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Summierte Zeit in denen die ARS Aktoren hohen Strombedarf hatten ohne in Unterstannung zu geraten. |

### RES_0XDB67_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANSTEUERUNG_AKTIV | 0-n | high | unsigned int | - | TAB_KOMPONENTENANSTEUERUNG | - | - | - | Liefert die Information über den Ansteuerungszustand des Bauteils - 0- AUS, 1- EIN, 2- Entlüftung, 3- Füllen mit dem Kompressor, 4- Füllen mit dem Druckspeicher |

### RES_0XDB71_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ORGFASTFILTER_RL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des linken hinteren Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_RR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des rechten hinteren Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_FL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des linken vorderen Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_FR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des rechten vorderen Sensors werden angezeigt. |
| STAT_FASTFILTER_RL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des linken hinteren Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_RR_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des rechten hinteren Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_FL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des linken vorderen Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_FR_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des rechten vorderen Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_SLOWFILTER_RL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des linken hinteren Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_RR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des rechten hinteren Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_FL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des linken vorderen Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_FR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des rechten vorderen Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |

### RES_0XDC05_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_WERT | mm | high | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes vorn links in mm. |
| STAT_HOEHENSTAND_VR_WERT | mm | high | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes vorn rechts in mm. |
| STAT_HOEHENSTAND_HL_WERT | mm | high | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes hinten links in mm. |
| STAT_HOEHENSTAND_HR_WERT | mm | high | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes hinten rechts in mm. |

### RES_0XDC06_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_SENSOR_VL_NR | 0-n | - | signed int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn links. |
| STAT_HOEHENSTAND_SENSOR_VR_NR | 0-n | - | signed int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn rechts. |
| STAT_HOEHENSTAND_SENSOR_HL_NR | 0-n | - | signed int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten links. |
| STAT_HOEHENSTAND_SENSOR_HR_NR | 0-n | - | signed int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten rechts. |

### RES_0XDC07_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_ROHWERT_VL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand vorn links |
| STAT_HOEHENSTAND_ROHWERT_VR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand vorn rechts |
| STAT_HOEHENSTAND_ROHWERT_HL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand hinten links |
| STAT_HOEHENSTAND_ROHWERT_HR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand hinten rechts |

### RES_0XDC08_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VERSORGUNG_VL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn links in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_VR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn rechts in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten links in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten rechts in mV. |

### RES_0XDC0A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom vorne links |
| STAT_DAEMPFER_VENTIL_VL_DRUCK_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom vorne links Druckventil |
| STAT_DAEMPFER_VENTIL_VR_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom vorne rechts |
| STAT_DAEMPFER_VENTIL_VR_DRUCK_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom vorne recht Druckventil |
| STAT_DAEMPFER_VENTIL_HL_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom hinten links |
| STAT_DAEMPFER_VENTIL_HL_DRUCK_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom hinten links Druckventil |
| STAT_DAEMPFER_VENTIL_HR_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_DRUCK_STROM_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ventilstrom hinten rechts Druckventil |

### RES_0XDC0B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VL_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 vorne links (mV/mm) |
| STAT_GRADIENT_C0_VR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 vorne rechts (mV/mm) |
| STAT_GRADIENT_C0_HL_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 hinten links (mV/mm) |
| STAT_GRADIENT_C0_HR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 hinten rechts (mV/mm) |
| STAT_GRADIENT_C1_VL_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 vorne links (mV/mm) |
| STAT_GRADIENT_C1_VR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 vorne rechts (mV/mm) |
| STAT_GRADIENT_C1_HL_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 hinten links (mV/mm) |
| STAT_GRADIENT_C1_HR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 hinten rechts (mV/mm) |
| STAT_OFFSET_S0_VL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne links (mm) |
| STAT_OFFSET_S0_VR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne rechts (mm) |
| STAT_OFFSET_S0_HL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten links (mm) |
| STAT_OFFSET_S0_HR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten rechts (mm) |
| STAT_OFFSET_S1_VL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 vorne links (mm) |
| STAT_OFFSET_S1_VR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 vorne rechts (mm) |
| STAT_OFFSET_S1_HL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 hinten links (mm) |
| STAT_OFFSET_S1_HR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 hinten rechts (mm) |

### RES_0XDC0F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REF_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status: Radentlastungsfunktion |

### RES_0XDC31_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_VR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_HL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_HR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |

### RES_0XDC50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_STATUS | 0-n | high | unsigned int | - | TAB_VDC_VENTILE_STATUS | - | - | - | Ventil Status vorne links |
| STAT_DAEMPFER_VENTIL_VL_DRUCK_STATUS | 0-n | high | unsigned int | - | TAB_VDC_VENTILE_STATUS | - | - | - | Ventil Status vorne links Druckventil |
| STAT_DAEMPFER_VENTIL_VR_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status vorne rechts |
| STAT_DAEMPFER_VENTIL_VR_DRUCK_STATUS | 0-n | high | unsigned int | - | TAB_VDC_VENTILE_STATUS | - | - | - | Ventil Status vorne rechts Druckventil |
| STAT_DAEMPFER_VENTIL_HL_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status hinten links |
| STAT_DAEMPFER_VENTIL_HL_DRUCK_STATUS | 0-n | high | unsigned int | - | TAB_VDC_VENTILE_STATUS | - | - | - | Ventil Status hinten links Druckventil |
| STAT_DAEMPFER_VENTIL_HR_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_DRUCK_STATUS | 0-n | high | unsigned int | - | TAB_VDC_VENTILE_STATUS | - | - | - | Ventil Status hinten rechts Druckventil |

### RES_0XDC75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VL_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VL_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VL_DRUCK_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil vorne links Druckventil |
| STAT_DAEMPFER_VENTIL_VL_DRUCK_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil vorne links Druckventil |
| STAT_DAEMPFER_VENTIL_VL_DRUCK_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil vorne links Druckventil |
| STAT_DAEMPFER_VENTIL_VR_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_VR_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_VR_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil vorne rechts |
| STAT_DAEMPFER_VENTIL_VR_DRUCK_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil vorne rechts Druckventil |
| STAT_DAEMPFER_VENTIL_VR_DRUCK_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil vorne rechts Druckventil |
| STAT_DAEMPFER_VENTIL_VR_DRUCK_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil vorne rechts Druckventil |
| STAT_DAEMPFER_VENTIL_HL_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HL_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HL_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HL_DRUCK_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil hinten links Druckventil |
| STAT_DAEMPFER_VENTIL_HL_DRUCK_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil hinten links Druckventil |
| STAT_DAEMPFER_VENTIL_HL_DRUCK_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil hinten links Druckventil |
| STAT_DAEMPFER_VENTIL_HR_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_DRUCK_IIST_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Ist Ventil hinten rechts Druckventil |
| STAT_DAEMPFER_VENTIL_HR_DRUCK_ISOLL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Soll Ventil hinten rechts Druckventil |
| STAT_DAEMPFER_VENTIL_HR_DRUCK_PWMSOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil hinten rechts Druckventil |
| STAT_DAEMPFER_VENTIL_VL_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1.0 | 1.0 | 0.0 | Vorgabe Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VR_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1.0 | 1.0 | 0.0 | Vorgabe Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_HL_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1.0 | 1.0 | 0.0 | Vorgabe Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HR_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1.0 | 1.0 | 0.0 | Vorgabe Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_VL_DRUCK_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil vorne links Druckventil |
| STAT_DAEMPFER_VENTIL_VR_DRUCK_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil vorne rechts Druckventil |
| STAT_DAEMPFER_VENTIL_HL_DRUCK_VORGABE | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil hinten links Druckventil |
| STAT_DAEMPFER_VENTIL_HR_DRUCK_VORGABE_3 | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil hinten rechts Druckventil |

### RES_0XDD19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_SENSOR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aktuelle Temperatur am Temperatursensor |
| STAT_TEMPERATUR_PSBC_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aktuelle Temperatur am PowerSBC Sensor |

### RES_0XDD35_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOM_STAB_AMPLITUDE_VA_WERT | Nm | high | signed char | - | - | 10.0 | 1.0 | 0.0 | Amplitude Stabilisatormoment Vorderachse |
| STAT_MOM_STAB_PERIODENDAUER_VA_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Periodendauer Stabilisatormoment  Vorderachse |
| STAT_MOM_STAB_OFFSET_VA_WERT | Nm | high | signed char | - | - | 10.0 | 1.0 | 0.0 | Offset Stabilisatormoment Vorderachse |
| STAT_MOM_MOTOR_AMPLITUDE_VA_WERT | Nm | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Amplitude Motormoment Vorderachse |
| STAT_MOM_MOTOR_PERIODENDAUER_VA_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Periodendauer Motormoment Vorderachse |
| STAT_MOM_MOTOR_OFFSET_VA_WERT | Nm | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Offset Motormoment Vorderachse |
| STAT_RPM_MOTOR_AMPLITUDE_VA_WERT | 1/min | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Drehzahl Motor Amplitude Vorderachse |
| STAT_RPM_MOTOR_PERIODENDAUER_VA_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | RPM_MOTOR_PERIODENDAUER_VA |
| STAT_MOM_STAB_AMPLITUDE_HA_WERT | Nm | high | signed char | - | - | 10.0 | 1.0 | 0.0 | Amplitude Stabilisatormoment Hinterachse |
| STAT_MOM_STAB_PERIODENDAUER_HA_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Periodendauer Stabilisatormoment Hinterachse |
| STAT_MOM_STAB_OFFSET_HA_WERT | Nm | high | signed char | - | - | 10.0 | 1.0 | 0.0 | Offset Stabilisatormoment Hinterachse |
| STAT_MOM_MOTOR_AMPLITUDE_HA_WERT | Nm | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Amplitude Stabilisatormoment Hinterachse |
| STAT_MOM_MOTOR_PERIODENDAUER_HA_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Periodendauer Motormoment Hinterachse |
| STAT_MOM_MOTOR_OFFSET_HA_WERT | Nm | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Offset Motormoment Hinterachse |
| STAT_RPM_MOTOR_AMPLITUDE_HA_WERT | 1/min | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Drehzahl Motor Amplitude Hinterachse  |
| STAT_RPM_MOTOR_PERIODENDAUER_HA_WERT | ms | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Drehzahl Motor Periodendauer Hinterachse |

### RES_0XDD3A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EARSSBSSIG_QUERBSCHLSCHWPKT_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Querbeschleunigung des Fahrzeuges (Messwert aus der SBS) |
| STAT_FZGGSCHWFILTARS_WERT | km/h | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gefilterte Geschwindigkeit des Fahrzeugschwerpunktes |
| STAT_SOLL_LENKWINKEL_VA_STR_GTEILWERT_VDM_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkel der Vorderräder |
| STAT_EARSSBSSIG_SOLLLENKWNKLHACHSSTRGTEILWERT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Soll-Lenkwinkel der hinteren Räder (Hinterachslenkung) |
| STAT_FES_ARSVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Fahrerlebnisschalter |
| STAT_EARSSBSSIG_QUQUERBSCHLSCHWPKT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus vom FR-Signal: Querbeschleunigung Schwerpunkt (Messert aus SBS) |
| STAT_STSIGFZGGSCHWFILTARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status zur gefilterten Geschwindigkeit des Fahrzeugschwerpunktes |
| STAT_QUSOLLLENKWNKLVASTRGTEILWERTVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus vom FR-Signal: Soll-Lenkwinkel Vorderräder |
| STAT_EARSSBSSIG_STSIGSOLLLENKWNKLHACHSSTRGTEILWERT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal zum FR-Signal des Soll-Lenkwinkels der hinteren Räder (Hinterachslenkung) |

### RES_0XDD3B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISTMOMSTABIVDMVA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gemessenes Stabilisatormoment an der VA |
| STAT_STABIISTMOMARSVDMVAERRFF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gehaltenes Fehlerflag zum Signal: Gemessenes Stabilisatormoment an der VA |
| STAT_ISTDREHZHLEMOTVAARSVDM_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motordrehzahl in rad/s (~10 U/min) des VA-Aktuators (übersetzt mit Planetengetriebe 1/155 zum Stabilisatorwinkel). |
| STAT_ISTHOEHENSTNDVL_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Höhenstand des Rades Vorne Links (VL). Ausfedern ist positiv (entgegengesetzt dem FR-Signal) |
| STAT_QUISTHOEHENSTNDVL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus zum FR-Signal: Höhenstand des Rades Vorne Links (VL) |
| STAT_ISTHOEHENSTNDVR_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Höhenstand des Rades Vorne Rechts (VR). Ausfedern ist positiv (entgegengesetzt dem FR-Signal) |
| STAT_QUISTHOEHENSTNDVR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus zum FR-Signal: Höhenstand des Rades Vorne Rechts (VR) |
| STAT_RELVGSCHWDMPFRVDMVL_WERT | m/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Relativgeschwindigkeit des Dämpfers Vorne Links (Ausfedern ist positiv, entgegen FR-Signal) |
| STAT_RESERVE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RELVGSCHWDMPFRVDMVR_WERT | m/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Relativgeschwindigkeit des Dämpfers Vorne Rechts (Ausfedern ist positiv, entgegen FR-Signal) |
| STAT_RESERVE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_ISTBSCHLRADPLAUSIVL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Absolutwert der Radbeschleunigung Vorne Links (nach oben positiv, im Stand ca. -9,81m/ss) |
| STAT_STSIGISTBSCHLRADPLAUSIVL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal zum Absolutwert der Radbeschleunigung Vorne Links (nach oben positiv, im Stand ca. -9,81m/ss) |
| STAT_ISTBSCHLRADPLAUSIVR_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Absolutwert der Radbeschleunigung Vorne Rechts (nach oben positiv, im Stand ca. -9,81m/ss) |
| STAT_STSIGISTBSCHLRADPLAUSIVR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal zum Absolutwert der Radbeschleunigung Vorne Rechts (nach oben positiv, im Stand ca. -9,81m/ss) |
| STAT_EARSABFAK_FACRAD2STABIVL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Rad und Stabilisatorgrössen Vorne Links (z.B. Radhub zu Verdrehwinkel) |
| STAT_EARSABFAK_FACRAD2STABIVR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Rad und Stabilisatorgrössen Vorne Rechts (z.B. Radhub zu Verdrehwinkel) |
| STAT_RESERVE3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_ISTSTROMARSVAFILT_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Stromwert den der VA-Aktuator der Batterie entnimmt (negativer Wert bedeutet Rekuperation). Der Stromwert ist der gefilterte Wert des Aktorstromes. |
| STAT_QUISTSTROMARSVAFILT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier zum Stromwert den der VA-Aktuator der Batterie entnimmt (negativer Wert bedeutet Rekuperation). Der Stromwert ist der gefilterte Wert des Aktorstromes |
| STAT_ISTMOMSTABIVDMHA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gemessenes Stabilisatormoment an der HA |
| STAT_STABIISTMOMARSVDMHAERRFF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gehaltenes Fehlerflag zum Signal: Gemessenes Stabilisatormoment an der HA |
| STAT_ISTDREHZHLEMOTHAARSVDM_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motordrehzahl in rad/s (~10 U/min) des HA-Aktuators (übersetzt mit Planetengetriebe 1/155 zum Stabilisatorwinkel). |
| STAT_ISTHOEHENSTNDHL_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Höhenstand des Rades Hinten Links (HL). Ausfedern ist positiv (entgegengesetzt dem FR-Signal) |
| STAT_QUISTHOEHENSTNDHL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus zum FR-Signal: Höhenstand des Rades Hinten Links (HL) |
| STAT_ISTHOEHENSTNDHR_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Höhenstand des Rades Hinten Rechts (HR). Ausfedern ist positiv (entgegengesetzt dem FR-Signal) |
| STAT_QUISTHOEHENSTNDHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus zum FR-Signal: Höhenstand des Rades Hinten Rechts (HR) |
| STAT_RELVGSCHWDMPFRVDMHL_WERT | m/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Relativgeschwindigkeit des Dämpfers Hinten Links (Ausfedern ist positiv, entgegen FR-Signal) |
| STAT_RESERVE4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RELVGSCHWDMPFRVDMHR_WERT | m/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Relativgeschwindigkeit des Dämpfers Hinten Rechts (Ausfedern ist positiv, entgegen FR-Signal) |
| STAT_RESERVE5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_ISTBSCHLRADPLAUSIHL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Absolutwert Radbeschleunigung Hinten Links (nach oben positiv, im Stand ca. -9,81m/ss)) |
| STAT_STSIGISTBSCHLRADPLAUSIHL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier zum FR-Signal: Absolutwert Radbeschleunigung Hinten Links (nach oben positiv, im Stand ca. -9,81m/ss)) |
| STAT_ISTBSCHLRADPLAUSIHR_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Absolutwert Radbeschleunigung Hinten Rechts (nach oben positiv, im Stand ca. -9,81m/ss)) |
| STAT_STSIGISTBSCHLRADPLAUSIHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier zum FR-Signal: Absolutwert Radbeschleunigung Hinten Rechts (nach oben positiv, im Stand ca. -9,81m/ss)) |
| STAT_EARSABFAK_FACRAD2STABIHL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Rad und Stabilisatorgrössen Hinten Links (z.B. Radhub zu Verdrehwinkel) |
| STAT_EARSABFAK_FACRAD2STABIHR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Rad und Stabilisatorgrössen Hinten Rechts (z.B. Radhub zu Verdrehwinkel) |
| STAT_RESERVE6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_ISTSTROMARSHAFILT_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Stromwert den der HA-Aktuator der Batterie entnimmt (negativer Wert bedeutet Rekuperation). Der Stromwert ist der gefilterte Wert der Aktorstromes. |
| STAT_QUISTSTROMARSHAFILT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier zum Stromwert den der HA-Aktuator der Batterie entnimmt (negativer Wert bedeutet Rekuperation). Der Stromwert ist der gefilterte Wert der Aktorstromes. |

### RES_0XDD3C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLMOMSTABIARSVA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Stabilisator-Sollmoment für den emARS-Aktor an der Vorderachse (vom Fahrzeugregler) |
| STAT_VORSTRGMOTDREHZHLARSVA_WERT | 1/min | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorsteuervorgabe für die Motordrehzahl des emARS-Aktuators an der Vorderachse (aus Störung und Führung) |
| STAT_VORSTRGDREHMOMEMOTVAARS_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorsteuervorgabe für das Motormoment des emARS-Aktuators an der Vorderachse (aus Störung und Führung) |
| STAT_BGRZNGMAXIMMOTDREHZHLARSVA_WERT | 1/min | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorgabe der maximalen Motordrehzahl des emARS-Aktuators der Vorderachse |
| STAT_BGRZNGMAXIMMOTMOMARSVA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorgabe des maximalen Motormomentes des emARS-Aktuators der Vorderachse |
| STAT_MAXBATTSTROMSTELLGLDARSVA_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Batteriestrom, der vom emARS-Aktuator der Vorderachse in das Bordnetz rückgespeist/rekuperiert werden darf |
| STAT_OBRGRNZSTROMEMOTVAARS_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Batteriestrom, der vom emARS-Aktuator der Vorderachse aus dem Bordnetz gezogen werden darf |
| STAT_SOLLMOMSTABIARSHA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Stabilisator-Sollmoment für den emARS-Aktor an der Hinterachse (vom Fahrzeugregler) |
| STAT_VORSTRGMOTDREHZHLARSHA_WERT | 1/min | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorsteuervorgabe für die Motordrehzahl des emARS-Aktuators an der Hinterachse (aus Störung und Führung) |
| STAT_VORSTRGDREHMOMEMOTHAARS_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorsteuervorgabe für das Motormoment des emARS-Aktuators an der Hinterachse (aus Störung und Führung) |
| STAT_BGRZNGMAXIMMOTDREHZHLARSHA_WERT | 1/min | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorgabe der maximalen Motordrehzahl des emARS-Aktuators der Hinterachse |
| STAT_BGRZNGMAXIMMOTMOMARSHA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Vorgabe des maximalen Motormomentes des emARS-Aktuators der Hinterachse |
| STAT_MAXBATTSTROMSTELLGLDARSHA_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Batteriestrom, der vom emARS-Aktuator der Hinterachse in das Bordnetz rückgespeist/rekuperiert werden darf |
| STAT_OBRGRNZSTROMEMOTHAARS_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Batteriestrom, der vom emARS-Aktuator der Hinterachse aus dem Bordnetz gezogen werden darf |
| STAT_EARSASUEW_DIAGUSPANGSTATUSFEHLERVA | 0-n | high | unsigned int | - | TAB_EARSAS_STATUS_UNTERSPANNUNG | - | - | - | Bitcodierter Fehlerstatus zur Unterspannungssituation des Vorderachs-Aktors. Interner Signalname. Bit0(1): Unterspannugn liegt an Bit1(2): Unterspannung liegt >0% der Entprellzeit an Bit2(4): Unterspannung liegt >25% der Entprellzeit an Bit3(8): Unterspannung liegt >50% der Entprellzeit an Bit4(16): Unterspannung liegt >75% der Entprellzeit an Bit5(32): Unterspannung liegt > Entprellzeit an Bit6(64): Unterspannung mit Entprellung und Nachlauf Bit7(128): Unterspannung mit Momentenfehler (hier Unterspannungs-Ersatzfehler als DTC) |
| STAT_EARSASUEW_DIAGUSPANGSTATUSFEHLERHA | 0-n | high | unsigned int | - | TAB_EARSAS_STATUS_UNTERSPANNUNG | - | - | - | Bitcodierter Fehlerstatus zur Unterspannungssituation des Hinterachs-Aktors. Interner Signalname. Bit0(1): Unterspannugn liegt an Bit1(2): Unterspannung liegt >0% der Entprellzeit an Bit2(4): Unterspannung liegt >25% der Entprellzeit an Bit3(8): Unterspannung liegt >50% der Entprellzeit an Bit4(16): Unterspannung liegt >75% der Entprellzeit an Bit5(32): Unterspannung liegt > Entprellzeit an Bit6(64): Unterspannung mit Entprellung und Nachlauf Bit7(128): Unterspannung mit Momentenfehler (hier Unterspannungs-Ersatzfehler als DTC) |
| STAT_SPERMOMFHLRFHRSICHRH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperre aller Momentenfehler wegen anliegender Unterspannung. Bei momentenfehler wird Unterspannungs-Ersatzfehler als DTC eingetragen) |
| STAT_STMOMFHLRFHRSICHRH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FUSI-Momentenfehler liegt vor (ggf. Unterspannungs-Ersatzfehler als DTC) |

### RES_0XDD3D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ARSFFZSAU_QUFNARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktionsqualifier vom gesamten ARS, der auf dem FR an andere Steuergeräte kommuniziert wird |
| STAT_STRGFKTHAARSVORGBFZGREGLR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerstatus an den HA-Aktor, zur Umsetzung der Sollmomente oder Abschaltung |
| STAT_STRGFKTVAARSVORGBFZGREGLR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerstatus an den VA-Aktor, zur Umsetzung der Sollmomente oder Abschaltung |
| STAT_STANZGARS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status der CC-Meldungsvorgabe vom Fahrzeugregler |
| STAT_ISTMOMSTABIVDMHA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Istmoment Aktor Hinterachse (FR: AVL_TORQ_STAB_BAX_ARS) |
| STAT_ISTMOMSTABIVDMVA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Istmoment Aktor Vorderachse (FR: AVL_TORQ_STAB_FTAX_ARS) |
| STAT_QUISTMOMSTABIVDMHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier Istmoment Aktor Hinterachse (FR: QU_AVL_TORQ_STAB_BAX_ARS) |
| STAT_QUISTMOMSTABIVDMVA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier Istmoment Aktor Vorderachse (FR: QU_AVL_TORQ_STAB_FTAX_ARS) |
| STAT_STAKTORARSVDMHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier von der Hardware Aktor Hinterachse (FR: QU_FN_FTAX_ARS) |
| STAT_STAKTORARSVDMVA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier von der Hardware Aktor Vorderachse (FR: QU_FN_FTAX_ARS) |
| STAT_STUEBRWCHNGAKTORARSHA | 0-n | high | unsigned int | - | TAB_EARSAS_STATUS_UEBERWACHUNG | - | - | - | Status der Aktorüberwachung Hinterachse |
| STAT_STUEBRWCHNGAKTORARSVA | 0-n | high | unsigned int | - | TAB_EARSAS_STATUS_UEBERWACHUNG | - | - | - | Status der Aktorüberwachung Vorderachse |
| STAT_STGERADFHRTARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status, ob gerade eine Geradeuasfahrt erkannt wird |
| STAT_QUERBSCHLVOREINDARS_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Querbeschleunigung (voreilend), auf die geregelt wird |
| STAT_QUQUERBSCHLVOREINDARS | 0-n | high | unsigned char | - | TAB_ARSFF_QUQUERBSCHLVOREINDARS | - | - | - | Qualifier Querbeschleunigung (voreilend), auf die geregelt wird |
| STAT_QUERBSCHLACKERARS_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Querbeschleunigung vom Ackermannmodell |
| STAT_STSIGQUERBSCHLACKERARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Querbeschleunigung vom Ackermannmodell |
| STAT_FZGGSCHWFILTARS_WERT | km/h | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit mit leichter Filterung |
| STAT_STSIGFZGGSCHWFILTARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Fahrzeuggeschwindigkeit mit leichter Filterung |
| STAT_STDIAGARSHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status ob Diagnosebetrieb am Aktor Hinterachse aktiv |
| STAT_STDIAGARSVA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status ob Diagnosebetrieb am Aktor Vorderachse aktiv |
| STAT_SOLLLENKWNKLVASTRGTEILWERTVA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkelsignal (Sollwert Radebene aus ZFM) (FR: QU_TAR_STEA_FTAX_CTR_PVL) |
| STAT_STSIGSOLLLENKWNKLVASTRGTEILWERTVA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status zum Lenkwinkelsignal (Sollwert Radebene aus ZFM) (FR: QU_TAR_STEA_FTAX_CTR_PVL) |
| STAT_STRADGROSNHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtstatus zu den Radgrössensignalen der Hinterachse (Radbeschleunigung und Höhenstand) |
| STAT_STRADGROSNVA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtstatus zu den Radgrössensignalen der Vorderachse (Radbeschleunigung und Höhenstand) |
| STAT_STROLLMODVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtstatus zum Rollenmodus (FR: ST_DYNOMOD und ST_EOLMOD) |
| STAT_QUFKTFDRVDM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Funktionsqualifier FDR vom DSC (FR: QU_FN_FDR) |
| STAT_STFKTHAARSVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal vom Aktorregler Hinterachse (FR: ST_FN_FTAX_ARS) |
| STAT_STFKTVAARSVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal vom Aktorregler Vorderachse (FR: ST_FN_FTAX_ARS) |
| STAT_STINKNSTNZDATNSTZCODRG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal zur Codierkonsistenz |
| STAT_ISTSPANGSTELLGLDHAARS_WERT | V | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Versogungsspannung am Aktor HA (FR: AVL_U_ACT_BAX_ARS) |
| STAT_ISTSPANGSTELLGLDVAARS_WERT | V | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Versogungsspannung am Aktor VA (FR: AVL_U_ACT_FTAX_ARS) |
| STAT_STSIGISTSPANGSTELLGLDHAARSVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Versogungsspannung am Aktor HA (FR: AVL_U_ACT_FTAX_ARS) |
| STAT_STSIGISTSPANGSTELLGLDVAARSVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Versogungsspannung am Aktor VA (FR: AVL_U_ACT_FTAX_ARS) |
| STAT_KONFCLUSTVERTIKALDYNFHRERLEB_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status vom Fahrdynamikschalter (FR: SU_CLU_VE_DYNMC_DXP) |
| STAT_ANFRDAENDGVRTLGWANKMOM_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anforderung CSB Momentenverschiebung (HA zu VA) vom ZFM (FR: RQ_CHNG_REPAT_MX) |
| STAT_QUANFRDAENDGVRTLGWANKMOM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier zur Anforderung CSB Momentenverschiebung (HA zu VA) vom ZFM (FR: QU_RQ_CHNG_REPAT_MX) |
| STAT_ENERGVERFGBRKTARS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Quote der Energieverfügbarkeit von ELMA, 1=100% (FR: ENERG_AVAI_ARS) |
| STAT_QUENERGVERFGBRKTARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Quote der Energieverfügbarkeit von ELMA, 1=100% (FR: ENERG_AVAI_ARS) |
| STAT_MAXSTROMLASTVORGBARSVDM_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Laststrom von ELMA, den beide Aktoren in Summe von der abverlangen dürfen |
| STAT_STSIGMAXSTROMLASTVORGBARSVDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Maximaler Laststrom von ELMA, den beide Aktoren in Summe von der abverlangen dürfen |
| STAT_MAXSTROMREKUPVORGBARS_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Rekuperationsstrom von ELMA, den beide Aktoren in Summe zurückspeisen dürfen |
| STAT_QUMAXSTROMREKUPVORGBARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Maximaler Rekuperationsstrom von ELMA, den beide Aktoren in Summe zurückspeisen dürfen |
| STAT_STATUSCONDITIONVEHICLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal Status Condition Vehicle (4: Fahrbereitschaft aktiv) |
| STAT_VEHICLEMODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal Vehicle Mode (4: Fahren) |
| STAT_VSMMODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Energiesparmode (0: kein Energiesparmode) |
| STAT_ARSFFINIT_FACFZGZUSTABIVA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Wankstabilisierungsgrössen von Fahrzeugebene auf Stabilisatorebene der VA |
| STAT_ARSFFINIT_FACSTABIZUFZGVA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Wankstabilisierungsgrössen von Stabilisatorebene der VA auf Fahrzeugebene |
| STAT_ARSFFINIT_FACRADZUSTABIVA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Rad und Stabilisatorgrössen der VA (z.B. Radhub zu Verdrehwinkel VA) |
| STAT_ARSFFINIT_FACFZGZUSTABIHA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Wankstabilisierungsgrössen von Fahrzeugebene auf Stabilisatorebene der HA |
| STAT_ARSFFINIT_FACSTABIZUFZGHA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Wankstabilisierungsgrössen von Stabilisatorebene der HA auf Fahrzeugebene |
| STAT_ARSFFINIT_FACRADZUSTABIHA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Umrechnungsfaktor zwischen Rad und Stabilisatorgrössen der HA (z.B. Radhub zu Verdrehwinkel HA) |
| STAT_ANTEILWANKMOMSTABLGVACHSMAX_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximale Momentenverteilung bezogen auf die Fahrzeugebene und VA, die möglich ist |
| STAT_ANTEILWANKMOMSTABLGVACHSMIN_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Minimale Momentenverteilung bezogen auf die Fahrzeugebene und VA, die möglich ist |
| STAT_ARSFFDEG_ADAPFAKSGA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Faktor mit dem die Störgrössenregelung aus Degradationsgründen skaliert wird (1: volle Störgrössenregelung) |
| STAT_ARSFFDEG_ADAPMOMFAK_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Faktor um den die Momentenverteilung VA aus Degradationsgründen verschoben wird (0: keine Verschiebung) |
| STAT_ARSFFDEG_ADAPMOMWANK_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Faktor mit dem das Wankmoment aus Degradationsgründen skaliert wird (1: volle Wankstabilisierung) |
| STAT_ARSFFDEG_DEGCCUNDDSCAKTIVIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzeige der temporären CC-Meldung (ID 204) wegen gesteuerter Degradation |
| STAT_ARSFFDEG_DEGSCHLEUDER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzeige des Schleudersymbols (ID 707) wegen gesteuerter Degradation |
| STAT_ARSFFDEG_DEGSTUFE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Degradationsstufe, die auf Grund von externen Einschränkungen gerade anliegt (0: keine Degradation, 1-8: Degradation, 9: Nullpositionsregelung, 10: Abschaltung) |
| STAT_ARSFFDEG_STDEGRADATIONARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zusammengefasster Degradationsstatus (Bit codiert, 1: CC-Meldung, 4: Nullpositionsregelung, 8: Abschaltung) |
| STAT_ARSFFERRKO_STFEHLERARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtstatus für Systemfehler ohne gesteuerter Degradation |
| STAT_ARSFFERRKO_STSYSTEMARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtstatus für Systemfehler mit gesteuerter Degradation |
| STAT_ARSFFERRKO_BCCDAUER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung der CC-Meldung ID12 -10, Fahrwerk gestört |
| STAT_ARSFFERRKO_BCCSCHLEUDER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung des Schleudersymbols ID707 |
| STAT_ARSFFERRKO_BCCTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung der CC-Meldung ID204, Fahrwerk temporär gestört |
| STAT_ARSFFSIG_AUSWSPORT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statussignal für den Sportmodus |
| STAT_ARSFFSWG_MOMSTABISOLLHA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Sollmoment für den Aktor HA (FR: TAR_TORQ_STAB_BAX_ARS) |
| STAT_ARSFFSWG_MOMSTABISOLLVA_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Sollmoment für den Aktor VA (FR: TAR_TORQ_STAB_FTAX_ARS) |
| STAT_ARSFFUEWZSTND_BEHLERINAKTIVKURVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status für Zustand System noch inaktiv wegen Kurvenfahrt |
| STAT_ARSFFUEWZSTND_ERRAY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus für Querbeschleunigung (voreilend), auf die geregelt wird (0: Fehler, 1: IO) |
| STAT_ARSFFUEWZSTND_ERRDATEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus zur Codierkonsistenz (0: Fehler, 1: IO) |
| STAT_ARSFFUEWZSTND_ERRGESCHWFZG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus zur Fahrzeuggeschwindigkeit (0: Fehler, 1: IO) |
| STAT_ARSFFUEWZSTND_ERRQUALQUERBDAUER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus zur Querbeschleunigung, bei dauerhaften Fehlern (0: Fehler, 1: IO) |
| STAT_ARSFFUEWZSTND_ERRQUALQUERBTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus zur Querbeschleunigung, bei temporären Fehlern (0: Fehler, 1: IO) |
| STAT_ARSFFUEWZSTND_ERRRADGROSNHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus zu den Radgrössensignalen der HA (Radbeschleunigung und Höhenstand) - (0: Fehler, 1: IO) |
| STAT_ARSFFUEWZSTND_ERRRADGROSNVA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus zu den Radgrössensignalen der VA (Radbeschleunigung und Höhenstand) - (0: Fehler, 1: IO) |
| STAT_DGRADFAKTRSTOERGROSNREGLGARSHA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Faktor mit dem die Störgrössenregelung aus Degradationsgründen an der HA skaliert wird (1: volle Störgrössenregelung) |
| STAT_DGRADFAKTRSTOERGROSNREGLGARSVA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Faktor mit dem die Störgrössenregelung aus Degradationsgründen an der VA skaliert wird (1: volle Störgrössenregelung) |
| STAT_MAXBATTSTROMSTELLGLDVORGBLASTARSHA_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler (auf die Achse aufgeteilter) Laststrom, den der HA Aktor von der Batterie abverlangen darf |
| STAT_MAXBATTSTROMSTELLGLDVORGBLASTARSVA_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler (auf die Achse aufgeteilter) Laststrom, den der VA Aktor von der Batterie abverlangen darf |
| STAT_MAXBATTSTROMSTELLGLDVORGBREKUARSHA_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler (auf die Achse aufgeteilter) Rekuperationsstrom, den der HA Aktor in die Batterie rückspeisen darf |
| STAT_MAXBATTSTROMSTELLGLDVORGBREKUARSVA_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler (auf die Achse aufgeteilter) Rekuperationsstrom, den der VA Aktor in die Batterie rückspeisen darf |
| STAT_QUFKTARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktionsqualifier des Gesamtsystems ARS (Tabelle aus BNE) |
| STAT_SOLLANTEILWANKMOMSTABILGVACHS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Momentenverteilung bezogen auf die Fahrzeugebene und VA |
| STAT_VDMARSFFZSAUSTFUNKTION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interner Funktionsstatus vom ARS-System |

### RES_0XF040_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |

### RES_0XF041_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |

### RES_0XF043_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | STAT_DMCS_DATA | Auslesend der DMCS Debugwerte. | DATA | - | high | data[98] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| ARS_BATTERIE_STATISTIK_RESET | 0xA152 | - | Reset Batteriestatistik Unterspannungsituationen ARS | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_EHC_STATISTIKDATEN | 0xA2A3 | - | Rücksetzen aller EHC-Statistikdaten. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_EHC_RELAISSCHALTZAEHLER | 0xA2A4 | - | Rücksetzen des Relais-Schaltvorgangzählers  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_EHC_VALUE_LEAK | 0xAB68 | - | Steuern/Status: Leckage Werte | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB68_R |
| STEUERN_HOEHENSTAENDE_OFFSET_RESET | 0xAB78 | - | Starten Reset Höhenstand Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_LOWTOL_MODE | 0xAB79 | - | Schreiben/Setzen des Low Tol Modus. (temp. Verkleinerung des Regelbandes - z.B. für Scheinwerfereinstellung (0 Höhe) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_RADBESCHLEUNIGUNG_LESEN | 0xD665 | - | Auslesen  Radbeschleunigungssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD665_D |
| STATUS_RADBESCHLEUNIGUNG_SENSOREN | 0xD666 | - | Zustand  Radbeschleunigungssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD666_D |
| INTERNAL_EHC_LESEN | 0xD7A3 | - | Lesen der ADC-Werte für EHC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7A3_D |
| EHC_SENSOR_WERTE_LESEN | 0xD7A4 | - | Lesen der EHC Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7A4_D |
| STATUS_EHC_VEHICLE_HEIGHT | 0xD8EC | STAT_NIVEAU | Aktuelles Fahrzeugniveau | 0-n | - | high | unsigned int | TAB_EHC_VEHICLE_HEIGHT | - | - | - | - | 22 | - | - |
| STATUS_EHC_STATISTIKDATEN | 0xD8ED | STAT_EHC_STATISTIKDATEN_DATA | Statistik-Datenblock EHC | DATA | - | high | data[255] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ARS_BATTERIE_STATISTIK | 0xD9DA | - | Auslesen Batteriestatistik Unterspannungsituationen ARS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9DA_D |
| SPANNUNG_KLEMME_30F | 0xDAD3 | STAT_SPANNUNG_KLEMME_30F_WERT | Spannungswert am Steuergerät an Klemme 30F (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Spannungswert am Steuergerät an Klemme 30 (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_SIGNALE_NUMERISCH | 0xDB67 | - | Abfrage wie das Bauteil angesteuert ist. Komponentenansteuerung - 0- AUS, 1- EIN, 2- Entlüftung, 3- Füllen mit dem Kompressor, 4- Füllen mit dem Druckspeicher | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB67_D | RES_0xDB67_D |
| STATUS_FILTERWERTE | 0xDB71 | - | Gibt die gefilterten Werte der angeschlossenen Sensorik(EHC Höhensensor) aus. Diese Werte werden der Regelung zur Verfügung gestellt werden. Der Filter dient der Signalaufbereitung für die Regelung Fahrdynamische Prozesse. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB71_D |
| STEUERN_DIGITALSIGNALE | 0xDB77 | - | Das durch LOCAL_ID spezifizierte Bauteil wird für die Zeit ADJUSTMENT_TIME auf den Wert DIGITALWERT gesetzt. Mit diesem Job können die einzelnen Komponenten des EHC angesteuert werden. Es werden 3 Results benötigt(die Komponente,die Ansteuergröße (0/1) und die Dauer der Ansteuerung in s) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB77_D | - |
| STATUS_HOEHENSTAENDE_LESEN | 0xDC05 | - | Auslesen Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC05_D |
| STATUS_HOEHENSTAENDE_SENSOREN | 0xDC06 | - | Auswertung / Zustandserkennung der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC06_D |
| STATUS_HOEHENSTAENDE_ROHWERTE_LESEN | 0xDC07 | - | Ausgabe Rohwert Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC07_D |
| STATUS_HOEHENSTAENDE_VERSORGUNG_LESEN | 0xDC08 | - | Auslesen Versorgungsspannung Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC08_D |
| VDC_2_VENTILE_STROM | 0xDC0A | - | Auslesen und Vorgeben Stromwerte Dämpfer Ventile | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC0A_D |
| STATUS_HOEHENSTAENDE_KALIBRIERUNG_LESEN | 0xDC0B | - | AusLesen Nullpunkt Hoehenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC0B_D |
| STEUERN_STATUS_EHC_REF | 0xDC0F | - | Steuern/Status: Radentlastungsfunktion | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC0F_D | RES_0xDC0F_D |
| STEUERN_EHC_VEHICLE_HEIGHT | 0xDC11 | - | Steuern: Fahrzeughöhe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC11_D | - |
| STEUERN_HOEHENSTAENDE_OFFSET_VL | 0xDC2C | - | Vorgabe Nullpunkt Hoehenstandssensor vorne links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2C_D | - |
| STEUERN_HOEHENSTAENDE_OFFSET_VR | 0xDC2D | - | Vorgabe Nullpunkt Hoehenstandssensor vorne rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2D_D | - |
| STEUERN_HOEHENSTAENDE_OFFSET_HL | 0xDC2E | - | Vorgabe Nullpunkt Hoehenstandssensor hinten links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2E_D | - |
| STEUERN_HOEHENSTAENDE_OFFSET_HR | 0xDC2F | - | Vorgabe Nullpunkt Hoehenstandssensor hinten rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2F_D | - |
| STATUS_HOEHENSTAENDE_OFFSET_ZUSTAND | 0xDC31 | - | Auslesen Zustand Nullpunkt Hoehenstandssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC31_D |
| VDC_2_VENTILE_STATUS | 0xDC50 | - | Auslesen Ventil Status allgemein Druckventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC50_D |
| VDC_2_VENTILE_WERTE | 0xDC75 | - | Auslesen Ventil Werte allgemein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC75_D |
| VDP_VENTILE_STROM | 0xDCA7 | - | Vorgeben Stromwerte Dämpfer Ventile | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCA7_D | - |
| VDP_VENTILE_PWM | 0xDCAB | - | Vorgeben PWM-Werte Dämpfer Ventile | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCAB_D | - |
| VDM_TEMPERATURSENSOREN | 0xDD19 | - | Auslesen der aktuellen Temperatur an den Temperatursensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD19_D |
| STATUS_ARS_AKTUATORTEST_PARMETER | 0xDD35 | - | Auslesen der Parameter für Aktuatortest Wankstabilisierung  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD35_D |
| ARS_AKTUATORTEST_START | 0xDD37 | - | Start Aktuatortest Wankstabilisierung  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD37_D | - |
| STEUERN_ARS_AKTUATORTEST_PARAMETER | 0xDD38 | - | Vorgabe Parameter für Aktuatortest Wankstabilisierung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD38_D | - |
| ARS_BASISSIGNALE_VDMEARSSBS | 0xDD3A | - | Auslesen der Basissignale des Funktionsbausteins VdmEarsSbs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD3A_D |
| ARS_BASISSIGNALE_VDMEARSAB | 0xDD3B | - | Auslesen Basissignale Funktionsbaustein VdmEarsAb | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD3B_D |
| ARS_BASISSIGNALE_VDMEARSAS | 0xDD3C | - | Auslesen Basissignale Funktionsbaustein VdmEarsAs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD3C_D |
| ARS_BASISSIGNALE_VDMARSFF | 0xDD3D | - | Auslesen Basissignale Funktionsbaustein VdmEarsFf | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD3D_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| PSI5_STATUSWORT | 0x4000 | - | PSI5 Statuswort | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |
| _STATUS_INTERNAL_VOLTAGES_READ | 0x400E | - | Lesen der ADC-Werte allgemein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| _STATUS_INTERNAL_VDC_READ | 0x400F | - | Lesen ADC-Werte VDC-Anteil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| _READ_VDC_SENSOR_VALUES | 0x4015 | - | Lesen der VDC-Sensorwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4015_D |
| READ_EHC_DUTY_CYCLE | 0x401D | - | Lesen des EHC dutycycle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401D_D |
| READ_PROCESSOR_ID | 0x401E | STAT_PROCESSOR_ID_DATA | Prozessor ID | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EHC_VALVE_BEFUELLUNG_WERK | 0x4020 | - | Ansteuerung der EHC Ventile zur Befüllung des EHC-Systems im Werk | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4020_D | - |
| _EHC_VERSION_HLSW | 0x4182 | STAT_VERSION_WERT | HL-SW Version | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _VDP_VERSION_LLSW | 0x4183 | - | Auslesen LowLevel Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4183_D |
| VDP_TASK_ZEITEN | 0x4184 | - | Auslesen Zeiten Task | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4184_D |
| VDP_TEMPERATURBEREICH | 0x4186 | - | Auslesen Temperaturbereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4186_D |
| _VDP_TEMPERATURBEREICH_SENSOR | 0x4187 | - | Auslesen des Temperatursensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4187_D |
| _VDP_RESET_TASK_ZEITEN | 0xF040 | - | Starten und Status Rücksetzen Task Zeiten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF040_R | RES_0xF040_R |
| _VDP_RESET_TEMPERATURBEREICH | 0xF041 | - |  Starten und Status Rücksetzen Temperaturbereich | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF041_R |
| _VDP_RESET_TEMPERATURBEREICH_SENSOR | 0xF043 | - | Starten und Status Rücksetzen Temperaturbereich Temperatursensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF043_R |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_0X28A6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |

### TAB_0X6000

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B |

### TAB_0X6001

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x000C | 0x000D | 0x000E | 0x000F |

### TAB_0X6004

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 |

### TAB_0X6008

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D |

### TAB_ACHSE

| WERT | TEXT |
| --- | --- |
| 1 | Vorderachse |
| 2 | Hinterachse |
| 3 | Vorderachse und Hinterachse |

### TAB_ANREGUNGSFORM

| WERT | TEXT |
| --- | --- |
| 0 | none |
| 1 | Sinus |
| 2 | Rampe |

### TAB_ARSFF_QUQUERBSCHLVOREINDARS

| WERT | TEXT |
| --- | --- |
| 1 | normaler Beobachter |
| 2 | normaler Beobachter, temporaerer Offset im Querbeschleunigungssignal |
| 3 | normaler Beobachter, Querbeschleunigung nicht abgesichert |
| 6 | Beobachterwert nicht berechenbar (Querbeschleunigung und Lenkwinkel oder Geschwindigkeit nicht vorhanden) |
| 9 | Beobachter ohne Lenkwinkel, Querbeschleunigung IO |
| 10 | Beobachter ohne Lenkwinkel, Querbeschleunigung mit temporaerem Offset |
| 11 | Beobachter ohne lenkwinkel, Querbeschleunigung nicht abgesichert |
| 12 | Beobachter ohne Querbeschleunigung (nur Lenkwinkel und Geschwindigkeit) |
| 0xFF | Wert ungültig |

### TAB_ARSFF_SICHERHEITSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | ARS-Stabilisierungsmoment okay |
| 2 | ARS-Stabilisierungsmoment zu gross |
| 4 | ARS-Stabilisierungsmoment zu gering |
| 8 | ARS-Stabilisierungsmoment in falscher Richtung |
| 255 | Signal unbefüllt oder unbekannter Zustand |

### TAB_CPU

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler festgestellt |
| 0x01 | CPU1 |
| 0x02 | CPU2 |
| 0x03 | CPU3 |
| 0xFF | manuell auswerten |

### TAB_EARSAB_QU_AVL_TORQ_STAB_XAX_ARS

| WERT | TEXT |
| --- | --- |
| 1 | Wert gültig, höchste Qualität |
| 2 | Wert gültig, einfache Qualität |
| 3 | Wert eingeschränkt gültig, dauerhaft |
| 4 | Fehler temporär |
| 6 | Fehler |
| 9 | Wert gültig, mittlere Signalqualität |
| 11 | Wert eingeschränkt gültig, temporär |
| 14 | Wert nicht verfügbar |
| 15 | Signal unbefüllt |

### TAB_EARSAB_QU_FN_XAX_ARS

| WERT | TEXT |
| --- | --- |
| 16 | Funktion Bereit - Normal |
| 17 | Funktion Bereit - Temperaturstufe 1 |
| 18 | Funktion Bereit - Temperaturstufe 2 |
| 19 | Funktion Bereit - Temperaturstufe 3 |
| 20 | Funktion Bereit - Temperaturstufe 4 |
| 48 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 49 | Funktion Bereit - Degradation mit Restregelung - Unterspannung Stufe 1 |
| 50 | Funktion Bereit - Degradation mit Restregelung - Unterspannung Stufe 2 |
| 51 | Funktion Bereit - Degradation mit Restregelung - Unterspannung Stufe 3 |
| 52 | Funktion Bereit - Degradation mit Restregelung - Unterspannung Stufe 4 |
| 53 | Funktion Bereit - Degradation mit Restregelung - Überspannung Stufe 1 |
| 54 | Funktion Bereit - Degradation mit Restregelung - Überspannung Stufe 2 |
| 55 | Funktion Bereit - Degradation mit Restregelung - Überspannung Stufe 3 |
| 56 | Funktion Bereit - Degradation mit Restregelung - Überspannung Stufe 4 |
| 57 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 58 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 60 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 61 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 62 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 63 | Funktion Bereit - Degradation mit Restregelung - Reserve |
| 96 | interner Fehler, Motor nicht ansteuerbar, Fehler 1 |
| 97 | interner Fehler, Motor nicht ansteuerbar, Fehler 2 |
| 98 | interner Fehler, Motor nicht ansteuerbar, Fehler 3 |
| 99 | interner Fehler, Motor nicht ansteuerbar, Fehler 4 |
| 100 | interner Fehler, Motor nicht ansteuerbar, Fehler 5 |
| 101 | interner Fehler, Motor nicht ansteuerbar, Fehler 6 |
| 102 | interner Fehler, Motor nicht ansteuerbar, Fehler 7 |
| 103 | interner Fehler, Motor nicht ansteuerbar, Fehler 8 |
| 104 | interner Fehler, Motor ansteuerbar, Fehler 9 |
| 105 | interner Fehler, Motor ansteuerbar, Fehler 10 |
| 106 | interner Fehler, Motor ansteuerbar, Fehler 11 |
| 107 | interner Fehler, Motor ansteuerbar, Fehler 12 |
| 108 | interner Fehler, Motor ansteuerbar, Fehler 13 |
| 109 | interner Fehler, Motor ansteuerbar, Fehler 14 |
| 110 | interner Fehler, Motor ansteuerbar, Fehler 15 |
| 111 | interner Fehler, Motor ansteuerbar, Fehler 16 |
| 144 | Funktion Aktiv - Normal |
| 145 | Funktion Aktiv - Temperaturstufe 1 |
| 146 | Funktion Aktiv - Temperaturstufe 2 |
| 147 | Funktion Aktiv - Temperaturstufe 3 |
| 148 | Funktion Aktiv - Temperaturstufe 4 |
| 176 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 177 | Funktion Aktiv - Degradation mit Restregelung - Unterspannung Stufe 1 |
| 178 | Funktion Aktiv - Degradation mit Restregelung - Unterspannung Stufe 2 |
| 179 | Funktion Aktiv - Degradation mit Restregelung - Unterspannung Stufe 3 |
| 180 | Funktion Aktiv - Degradation mit Restregelung - Unterspannung Stufe 4 |
| 181 | Funktion Aktiv - Degradation mit Restregelung - Überspannung Stufe 1 |
| 182 | Funktion Aktiv - Degradation mit Restregelung - Überspannung Stufe 2 |
| 183 | Funktion Aktiv - Degradation mit Restregelung - Überspannung Stufe 3 |
| 184 | Funktion Aktiv - Degradation mit Restregelung - Überspannung Stufe 4 |
| 185 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 186 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 187 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 188 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 189 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 190 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 191 | Funktion Aktiv - Degradation mit Restregelung - Reserve |
| 224 | Funktion temporär nicht verfügbar - Init |
| 225 | Funktion temporär nicht verfügbar - Codierdaten ungültig |
| 226 | Funktion temporär nicht verfügbar - Diagnosemodus |
| 227 | Funktion temporär nicht verfügbar - Energiesparmodus aktiv |
| 228 | Funktion temporär nicht verfügbar - Reserve |
| 229 | Funktion temporär nicht verfügbar - Reserve |
| 230 | Funktion temporär nicht verfügbar - Reserve |
| 231 | Funktion temporär nicht verfügbar - Reserve |
| 232 | Funktion temporär nicht verfügbar - Voll-Degradation aufgrund Überspannung |
| 233 | Funktion temporär nicht verfügbar - Voll-Degradation aufgrund Unterspannung |
| 234 | Funktion temporär nicht verfügbar - Voll-Degradation aufgrund Temperatur |
| 235 | Funktion temporär nicht verfügbar - Voll-Degradation aufgrund Stromgrenzen |
| 236 | Funktion temporär nicht verfügbar - Reserve |
| 237 | Funktion temporär nicht verfügbar - Reserve |
| 238 | Funktion temporär nicht verfügbar - Reserve |
| 239 | Funktion temporär nicht verfügbar - Reserve |
| 255 | Signal unbefüllt |

### TAB_EARSAB_ST_FN_XAX_ARS

| WERT | TEXT |
| --- | --- |
| 16 | Regelung bereit / alles IO, Regelung nicht angefordert |
| 32 | Regelung ohne Vorsteuerung ¿ bereit / Signale für Vorsteuerung fehlerhaft, sonst IO, passiv |
| 48 | Nullpositionsregelung - bereit / nur noch NPR möglich, aber nicht angefordert |
| 96 | Fehler / Keine Regelung möglich |
| 144 | Regelung aktiv / alles IO, Regelung angefordert |
| 160 | Regelung ohne Vorsteuerung ¿ aktiv / Signale für Vorsteuerung fehlerhaft, sonst IO, aktiv |
| 176 | Nullpositionsregelung - aktiv / Reserviert |
| 177 | Nullpositionsregelung - aktiv - Fehler Aktor / NPR eigenständig wegen Fehler |
| 178 | Nullpositionsregelung - aktiv - Vorgabe VDP / NPR wegen Anforderung |
| 179 | Nullpositionsregelung - aktiv - Fehler und Vorgabe / NPR eigenständig wegen Fehler und Anforderung |
| 255 | Signal_unbefuellt / Sendefunktion nicht in Betrieb |

### TAB_EARSAS_STATUS_UEBERWACHUNG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Ist-Moment zu klein |
| 2 | Ist-Moment zu groß |
| 4 | Ist-Moment schwere Abweichung |
| 8 | Kommunikationsfehler bei Aktor-Signalen |
| 16 | Aktor Fehler - Motor ansteuerbar |
| 32 | Keine Reaktion Aktor |
| 64 | Aktor Fehler - Motor nicht ansteuerbar |
| 128 | Aktor temporäre Volldegradation - Motor nicht ansteuerbar |
| 256 | Aktor eingeschränkter Regler  - Vorsteuersignale fehlen |
| 512 | Aktor degradiert zur Nullpositionregelung |
| 1024 | Aktor Regler Abschaltung aufgrund Signalfehler |
| 2048 | Aktor Regler unplausible Reaktion auf  Befehl  Umsetzen |
| 4096 | Aktor Regler unplausible Reaktion auf Befehl  Nullpositionsregelung |
| 8192 | Aktor Momentensignal außerhalb Toleranz |
| 16384 | Aktor Momentensignal temporär ungültig |
| 32768 | Aktor Momentensignal dauerhaft ungültig |
| 65535 | Mehrere Fehlerbits gesetzt |

### TAB_EARSAS_STATUS_UNTERSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0 | Unterspannung inaktiv |
| 1 | Unterspannung aktiv |
| 2 | Unterspannung inaktiv, Entprellzeit >0% |
| 3 | Unterspannung aktiv; Entprellzeit >0% |
| 4 | Entprellzeit >25% |
| 6 | Unterspannung inaktiv, Entprellzeit >25% |
| 7 | Unterspannung aktiv, Entprellzeit >25% |
| 8 | Entprellzeit >50% |
| 14 | Unterspannung inaktiv, Entprellzeit >50% |
| 15 | Unterspannung inaktiv, Entprellzeit >50% |
| 16 | Entprellzeit >75% |
| 30 | Unterspannung inaktiv, Entprellzeit >75% |
| 31 | Unterspannung aktiv, Entprellzeit >75% |
| 32 | Entprellzeit >=100% |
| 62 | Unterspannung inaktiv, Entprellzeit >=100% |
| 63 | Unterspannung aktiv, Entprellzeit >=100% |
| 64 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit =0% |
| 67 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >0% |
| 70 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >25% |
| 71 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >25% |
| 78 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 79 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 94 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >75% |
| 95 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >75% |
| 126 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >=100% |
| 127 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >=100% |
| 128 | Ummapping Momenten-DTC auf Uspang-DTC |
| 130 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >0% |
| 131 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv; Entprellzeit >0% |
| 134 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >25% |
| 135 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv, Entprellzeit >25% |
| 142 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >50% |
| 143 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >50% |
| 158 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >75% |
| 159 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv, Entprellzeit >75% |
| 190 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >=100% |
| 191 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv, Entprellzeit >=100% |
| 192 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit =0% |
| 195 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >0% |
| 198 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >25% |
| 199 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >25% |
| 206 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 207 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 222 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >75% |
| 223 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >75% |
| 254 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >=100% |
| 255 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >=100% |
| 0xFFFF | Wert ungültig |

### TAB_EARSAS_STATUS_UNTERSPANNUNG_1BYTE

| WERT | TEXT |
| --- | --- |
| 0 | Unterspannung inaktiv |
| 1 | Unterspannung aktiv |
| 2 | Unterspannung inaktiv, Entprellzeit >0% |
| 3 | Unterspannung aktiv; Entprellzeit >0% |
| 4 | Entprellzeit >25% |
| 6 | Unterspannung inaktiv, Entprellzeit >25% |
| 7 | Unterspannung aktiv, Entprellzeit >25% |
| 8 | Entprellzeit >50% |
| 14 | Unterspannung inaktiv, Entprellzeit >50% |
| 15 | Unterspannung inaktiv, Entprellzeit >50% |
| 16 | Entprellzeit >75% |
| 30 | Unterspannung inaktiv, Entprellzeit >75% |
| 31 | Unterspannung aktiv, Entprellzeit >75% |
| 32 | Entprellzeit >=100% |
| 62 | Unterspannung inaktiv, Entprellzeit >=100% |
| 63 | Unterspannung aktiv, Entprellzeit >=100% |
| 64 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit =0% |
| 67 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >0% |
| 70 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >25% |
| 71 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >25% |
| 78 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 79 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 94 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >75% |
| 95 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >75% |
| 126 | Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >=100% |
| 127 | Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >=100% |
| 128 | Ummapping Momenten-DTC auf Uspang-DTC |
| 130 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >0% |
| 131 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv; Entprellzeit >0% |
| 134 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >25% |
| 135 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv, Entprellzeit >25% |
| 142 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >50% |
| 143 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >50% |
| 158 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >75% |
| 159 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv, Entprellzeit >75% |
| 190 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung inaktiv, Entprellzeit >=100% |
| 191 | Ummapping Momenten-DTC auf Uspang-DTC; Unterspannung aktiv, Entprellzeit >=100% |
| 192 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit =0% |
| 195 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >0% |
| 198 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >25% |
| 199 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >25% |
| 206 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 207 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >50% |
| 222 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >75% |
| 223 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv, Entprellzeit >75% |
| 254 | Ummapping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung inaktiv, Entprellzeit >=100% |
| 255 | (Ummaping Momenten-DTC auf Uspang-DTC; Nachlauf aktiv; Unterspannung aktiv; Entprellzeit größer oder =100%) ODER (Wert unbekannt) |

### TAB_EHC_REF

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktivierung REF |
| 0x01 | Aktivierung REF Platten HR |
| 0x02 | Aktivierung REF Platten HL |
| 0x03 | Aktivierung REF Platten VR |
| 0x04 | Aktivierung REF Platten VL |

### TAB_EHC_VEHICLE_HEIGHT

| WERT | TEXT |
| --- | --- |
| 0x0002 | Tiefniveau |
| 0x0008 | Standardniveau |
| 0x0010 | Hochniveau |

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

### TAB_HARDWARE_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | Verpolschutz defekt |
| 0x02 | Watchdog |
| 0x03 | CAN |
| 0x10 | LMU |
| 0x11 | PMU |
| 0x12 | SRI |
| 0x13 | MPU |
| 0x14 | SPB |
| 0x15 | Core |
| 0x16 | SCU |
| 0x17 | SMU |
| 0x18 | LBIST |
| 0x19 | MBIST |
| 0x1A | PFLASH |
| 0x1B | SRAM |
| 0x1C | IR |
| 0x1D | DMA |
| 0x1E | IOM |
| 0x1F | SFF |
| 0x30 | PLL |
| 0x31 | ADC |
| 0x32 | STM |
| 0x33 | FCE |
| 0x34 | EVR |
| 0x40 | 1.25V |
| 0x41 | 3.3V |
| 0x42 | 5V |
| 0x43 | 6.5V |
| 0x50 | Flexray |
| 0x51 | Ethernet |
| 0x60 | ATIC158 |
| 0x61 | ATIC160_1 |
| 0x62 | ATIC160_2 |
| 0x63 | HSFET EHC |
| 0x64 | HSFET VDC |
| 0x65 | Endstufen VDC |
| 0x70 | PowerSBC |
| 0x80 | ECU Übertemperatur größer 80h |
| 0xFF | manuell auswerten |

### TAB_HOEHENSTAND_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierung Offset nicht erfolgreich |
| 1 | Kalibrierung Offset erfolgreich |
| 2 | Sensor ausstattungsbedingt (Codierung) nicht verbaut |
| 255 | unbekannter Zustand |

### TAB_HOHENSTAND_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor in Ordnung |
| 1 | Sensor fehlerhaft |
| 255 | Sensor fehlerhaft |

### TAB_KOMPONENTENANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Switch valve OFF |
| 0x01 | Switch valve ON |
| 0x02 | Deflate component(s) |
| 0x03 | Fill component(s) with compressor |
| 0x04 | Fill component(s) with reservoir |

### TAB_PSI5_ERRORSTATE

| WERT | TEXT |
| --- | --- |
| 0xFE10 | Slow Offset Compensation Error |
| 0xFE11 | Fast Offset Compensation Error |
| 0xFE12 | Self Test Failure: Pos. Test |
| 0xFE13 | Self Test Failure: Neg. Test |
| 0xFE14 | PROM Parity Bit P1 Error |
| 0xFE15 | PROM Parity Bit P2 Error |
| 0xFE16 | PROM Parity Bit P3 Error |
| 0xFE17 | Lock bit Failure |
| 0xFE18 | PROM P00-P02 CRC Bits Error |
| 0xFFFF | Ungültiger Wert |

### TAB_PSI5_INITSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensordaten noch nicht gelesen/nicht fertig |
| 0x01 | Sensordaten werden gelesen |
| 0x02 | Sensordaten lesen abgeschlossen und OK |
| 0x03 | Sensordaten lesen abgeschlossen und nicht OK |
| 0xFF | Ungültiger Wert |

### TAB_PSI5_INTERNAL_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | No Error |
| 0x0A | Channel over current |
| 0x0B | Leakage to GND |
| 0x0C | Leakage to VBAT (soft short) / open load |
| 0x0D | Reverse current detected |
| 0x0E | More as one error |
| 0x14 | Manchester Decoder parity/CRC error |
| 0x15 | Manchester Decoder frame error |
| 0x16 | Manchester Decoder no frame received |
| 0x17 | Manchester Decoder unexpected frame received |
| 0x18 | More as one error |
| 0x19 | Parity error from software check |
| 0x1E | General sensor defect response (retval = 500) |
| 0x1F | Group error codes (Error collection of 9 errors) |
| 0x20 | Unknown Sensor Error |
| 0x21 | DWS protocol error |
| 0xFF | Ungültiger Wert |

### TAB_PSI5_MAINSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor OK |
| 0x01 | Sensor Warnung |
| 0x03 | Sensor Fehler |
| 0xFF | Ungültiger Wert |

### TAB_PSI5_STATE

| WERT | TEXT |
| --- | --- |
| 0x01F4 | Sensor defekt |
| 0x01E7 | Sensor in Ordnung |
| 0x01E6 | Sensor in Ordnung, ungelockt (lock bits L0-2 set) |
| 0x01E5 | Sensor in Ordnung, ungelockt (lock bit L0-1 set) |
| 0xFFFF | Ungültiger Wert |

### TAB_RADBESCHLEUNIGUNG_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor in Ordnung |
| 0x01 | Sensor fehlerhaft |
| 0xFF | Ungültiger Wert |

### TAB_SOFTWARE_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | Taskaufruf |
| 0x02 | Stack |
| 0x03 | Flash Emulation |
| 0x04 | Tasklaufzeit |
| 0x10 | Klemme 30 inkonsistent |
| 0x11 | Reset unbekannt intern |
| 0x12 | Reset unbekannt extern |
| 0x13 | Loss of Lock |
| 0x14 | Loss of Clock |
| 0x15 | Bus nicht synchron |
| 0x16 | OS nicht synchron |
| 0x17 | Taskchain |
| 0x18 | CPU-Laufzeit |
| 0x19 | CPU-Register |
| 0x20 | EHC alive |
| 0x21 | SMU |
| 0x22 | Timeout BMW-Runables |
| 0x23 | OS Errorhook |
| 0x24 | Codierdaten inkompatibel zur HW |
| 0x25 | PowerSBC Register Check |
| 0x26 | CDCL30 |
| 0xFF | manuell auswerten |

### TAB_STATUS_ANFORDERER

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen |
| 2 | reservier |
| 3 | ungültig |

### TAB_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

### TAB_TRAPS_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | VAF - Virtual Address Fill |
| 0x02 | VAP - Virtual Address Protection |
| 0x03 | PRIV - Privileged Instruction |
| 0x04 | MPR - Memory Protection Read |
| 0x05 | MPW - Memory Protection Write |
| 0x06 | MPX - Memory Protection Execution |
| 0x07 | MPP - Memory Protection Peripheral Access |
| 0x08 | MPN - Memory Protection Null Address |
| 0x09 | GRWP - Global Register Write Protection |
| 0x0A | IOPC - Illegal Opcode |
| 0x0B | UOPC - Unimplemented Opcode |
| 0x0C | OPD - Invalid Oparand specification |
| 0x0D | ALN - Data Address Alignment |
| 0x0E | MEM - Invalid Local Memory Address |
| 0x0F | FDC - Free Context List Depletion (FCX = LCX) |
| 0x10 | CDO - Call Depth Overflow |
| 0x11 | CDU - Call Depth Underflow |
| 0x12 | FCU - Free Context List Underflow (FCX = 0) |
| 0x13 | CSU - Call Stack Underflow (PCX = 0) |
| 0x14 | CTYP - Context Type (PCXI.UL wrong) |
| 0x15 | NEST - Nesting Error: RFE with non-zero calldepth |
| 0x16 | PSE - Program Fetch Synchronous Error |
| 0x17 | DSE - Data Access Synchronous Error |
| 0x18 | DAE - Data Access Asynchronous Error |
| 0x19 | CAE - Coprocessor Trap Asynchronous Error.TriCore 1.6 |
| 0x1A | PIE - Program Memory Integrity Err |
| 0x1B | DIE - Data Memory Integrity Error. TriCore 1.6 |
| 0x1C | TAE - Temporal Asynchronous Error |
| 0x1D | OVF - Arithmetic Overflow |
| 0x1E | SOVF - Sticky Arithmetic Overflow |
| 0x1F | SYS - System Call |
| 0x20 | NMI - Non-Maskable Interrupt |
| 0x30 | FS - Some Exception |
| 0x31 | FI - Invalid Operation |
| 0x32 | FV - Overflow |
| 0x33 | FZ - Divide by Zero |
| 0x34 | FU - Underflow |
| 0x35 | FX - Inexac |
| 0x40 | OS - Internes Limit überschritten |
| 0x41 | OS - Aufruf nicht möglich |
| 0x42 | OS - Kein Gültiger Status für Aufruf |
| 0xFF | manuell auswerten |

### TAB_URSACHE_VDMKBS

| WERT | TEXT |
| --- | --- |
| 0 | Unbekannt |
| 1 | Offsetfehler |
| 2 | Signalsprung / Gradient |
| 3 | Signal konstant bei v > 20 km/h |
| 4 | Ursache 4 |
| 5 | Ursache 5 |

### TAB_VDC_VENTILE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Ventil Kurzschluss nach KL30 |
| 0x0002 | Ventil Kurzschluss nach KL31 |
| 0x0004 | Ventil offene Leitung |
| 0x0008 | Ventil Kurzschluss |
| 0x0010 | reserviert |
| 0x0020 | Ventilstrommessung nicht kalibriert |
| 0x0040 | keine Endstufenfreigabe über Watchdog |
| 0x0080 | Signal unplausibel |
| 0x0100 | allgemeiner Ventilfehler bei Onlinepruefung |
| 0x0200 | Hochlaufpruefung nicht durchgefuehrt |
| 0x0400 | Stromplausibilitaetsfehler |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_VDC_VENTILE_VORGABE_ENDSTUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Zustand Regeln soll verlassen werden |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Verwende Sollstrom |
| 0x08 | Verwende Soll-PWM |
| 0x10 | Endstufe abschalten |
| 0x20 | Hochlaufprüfung starten |
| 0x40 | reserviert |
| 0x80 | Vorgaben invalid |
| 0xFF | nicht definiert |

### TAB_VDMVDC_KENNFELDFEHLER

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Fehler Aktorkennfeld |
| 2 | Fehler Gausskennfeld |
| 3 | Fehler Kennfeld Baukastendämpfer |
| 4 | Fehlerursache 4 |
| 5 | Fehlerursache 5 |
| 0xFF | Wert ungültig |

### TAB_VDP_SPEICHERORT

| WERT | TEXT |
| --- | --- |
| 0x00 | alle |
| 0x01 | RAM |
| 0x02 | EEPROM |
| 0xFF | ungültiger Wert |

### ZIELNIVEAU

| WERT | TEXT |
| --- | --- |
| 0 | Basisniveau |
| 1 | Hochniveau 1 |
| 2 | Hochniveau 2 |
| 3 | Hochniveau 3 |
| 9 | Tiefniveau 1 |
| 10 | Tiefniveau 2 |
| 11 | Tiefniveau 3 |
| 0xFF | Wert ungültig |
