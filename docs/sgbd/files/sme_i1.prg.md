# sme_i1.prg

## General

|  |  |
| --- | --- |
| File | sme_i1.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 250 |
| Origin | BMW TA-462 Mellersh |
| Revision | 6.010 |
| Author | BMW EA-412 Komposch |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Speicher Management Elektronik |  |  |
| ORIGIN | string | BMW TA-462 Mellersh |  |  |
| REVISION | string | 6.010 |  |  |
| AUTHOR | string | BMW EA-412 Komposch |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.987 |  |  |
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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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
| 0x4610 | Nackenwärmer Fahrer | 1 |
| 0x4620 | Nackenwärmer Beifahrer | 1 |
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
| 0x5B50 | AR (augmented reality) Kamera | 1 |
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
| 0x5E90 | Stromverteiler vorne | 1 |
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
| 0x002D | PSA Peugeot Citroen |
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
| 0x00D0 | Dometic |
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
| 0x013A | ISSI Integrated Silicon Solution Inc |
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

### ALTERUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | kein Zelldefekt |
| 1 | Zelle defekt |

### ARG_0X6500_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6501_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6502_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6503_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6504_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6506_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SCHUETZE_STEUERN | - | - | - | - | - | 0 = Schuetze nicht ansteuern, 1 = Schuetze schliessen, 2 = Schuetze oeffnen |

### ARG_0X6507_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SCHUETZE_STEUERN | - | - | - | - | - | 0 = Schuetze nicht ansteuern, 1 = Schuetze schliessen, 2 = Schuetze oeffnen |

### ARG_0X6508_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SCHUETZE_STEUERN | - | - | - | - | - | 0 = Schuetze nicht ansteuern, 1 = Schuetze schliessen, 2 = Schuetze oeffnen |

### ARG_0X650B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6511_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SYM_MODUS | - | - | - | - | - | 0=Normalmodus, 1=Spannungsgesteuerter Modus, 3=Zeitgesteuertes Balancing, 4=keine Symmetrierung, 5=Entscheidung durch SW, keinen Einfluss durch Steuern-Job |

### ARG_0X6512_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=nicht senden, 1=senden |

### ARG_0X6519_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=kein Standby, 1=Standby |

### ARG_0X651B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=geregelt/keine Anforderung, 1=Schütze schließen |

### ARG_0X651C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=Betriebsgrenzen und ISO-Wächter auf dem Originalwert zurückstellen, 1=Betriebsgrenzen bis auf Sicherheitsgrenzen öffnen und ISO-Wächter deaktivieren |

### ARG_0X651F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort für NV-Daten der SME auf Initialzustand zurücksetzen |
| AKTION | 0-n | high | unsigned char | - | TAB_NV_DATA_RESET | - | - | - | - | - | 0 = nichts rücksetzen 1 = alle NV-Größen rücksetzen |

### ARG_0X6525_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Übernahme vom Ergebnis eines Kapazitätstests in den SoH_C-Schätzer |
| AKTION | 0-n | high | unsigned char | - | TAB_KAPATEST | - | - | - | - | - | Ergebnisübertragung des Kapazitätstests in SoH_C-Schätzer (0: keine Übernahme, 1: Übernahme) |

### ARG_0X6527_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zum Ändern des Adressbereiches |
| ADRESSBEREICH_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | Adressbereichs-Nummer |

### ARG_0X6528_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort für Ausführung des Jobs |
| AKTION | 0-n | high | unsigned char | - | TAB_DEM_TEST | - | - | - | - | - | Aktivieren/Deaktivieren |

### ARG_0X6529_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEHLER_ID | HEX | high | unsigned long | - | - | - | - | - | - | - | ID des Fehlerspeichereintrags |
| FEHLERSTATUS | 0-n | high | unsigned char | - | TAB_FEHLERSTATUS_TEST | - | - | - | - | - | Fehlerstatus. Passed, Failed |

### ARG_0XAD6C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen der Unplausibilität des Modul x |

### ARG_0XAD6D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen der entsprechende Modultemperatur |

### ARG_0XAD6E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_ZELLE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zelle desen Spannung ermittelt werden soll |

### ARG_0XAD6F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen des Temperaturhistogramms von Modul x |

### ARG_0XAD70_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen des Spannungsfehlergrenzehistogramms von Modul x |

### ARG_0XAD71_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen des Spannungshistogramms von Modul x |

### ARG_0XAD74_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_ZELLE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zelle dessen aufsummierte Delta SOC ermittelt werden soll >> Dieser Job wird nicht mehr unterstützt und ist NULL-bedatet. |

### ARG_0XAD75_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZIEL_SPANNUNG | + | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe Zielspannung |

### ARG_0XAD76_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_CSC | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer von CSC dessen DMC ermittelt werden soll |

### ARG_0XAD77_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Modul dessen Alterung in Prozent bezogen auf die Restkapazität ermittelt werden soll |

### ARG_0XAD78_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Modul dessen Alterung in Prozent bezogen auf die Innenwiederstandsquote ermittelt werden soll |

### ARG_0XAD79_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Modul dessen Alterungsstatus ermittelt werden soll |

### ARG_0XAD7A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INKREMENT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zahleneingabe um den Zähler um Eins (1) zu inkremtieren. Info: Wird der Zähler inkrementiert, wird das Kurzschluss-Histogramm zurückgesetzt, welches durch STATUS_KURZSCHLUESSE ausgelesen wird. |

### ARG_0XAD7C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen des Spannungshistogramms von Modul x |

### ARG_0XAD7D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Auslesen des DataMatrixCode von Modul x. |

### ARG_0XDD61_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht freigegeben; 1 = freigegeben |

### ARG_0XDD6E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zur Schuetzschaltung |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_ANST_SCHUETZ | 1.0 | 1.0 | 0.0 | - | - | Achtung!Dieser Job muss in allen Folgetools mit Security Abfrage gesichert sein. Nicht möglich während der Fahrt. Auch bei hoher Ladung (90% SOC) noch möglich. |

### ARG_0XDD6F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLERKREISLAUF_VENTIL | 1.0 | 1.0 | 0.0 | - | - | Steuern des Kühlmittel-Ventils: Geschlossen oder offen |

### ARG_0XDD78_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktivieren der SOC Rekalbieriung (0 = nicht aktiv; 1 = aktiv) >> Job darf nur bei GEÖFFNETEN Schützen durchgeführt werden! |

### ARG_0XDD79_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zur Schuetzschaltung |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_ANST_SCHUETZ | 1.0 | 1.0 | 0.0 | - | - | Achtung!Dieser Job muss in allen Folgetools mit Security Abfrage gesichert sein. Nicht möglich während der Fahrt. |

### ARG_0XDDB7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAPAZITAET_JUSTIERUNG | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Justierung Kapazität Batterie |

### ARG_0XDDC4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort für Veränderung des SOC Werts |
| SOC_VORGABE | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | SOC-Wert vorgeben ( 0 - 100%) |

### ARG_0XDDCC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= kein Reset; 1= Reset durchführen |

### ARG_0XDDCD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktivieren / Deaktivierung des Sendens von CC-Meldung (0 = Senden nicht aktiv; 1 = Senden aktiv) |

### ARG_0XDDEA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zum Zurücksetzen des Zählers |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDDED_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CSC_IDX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index/Verbauposition der CSC mit folgenedem DMC |
| CSC_DMC | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | - | - | DMC String einer CSC (28-stellig) |

### ARG_0XDDEE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CSC_IDX_UEBERNEHMEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Indizes uebernehmen |

### ARG_0XDF78_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Temperaturhistogramms von Modul x |

### ARG_0XDF79_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Spannungsfehlergrenzenhistogramms von Modul x |

### ARG_0XDF7A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Spannungshistogramms von Modul x |

### ARG_0XDF7B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Servicejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0XDF7C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0XDF7D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen der Zellkapazitäten von Modul x |

### ARG_0XDF7E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen der Zell-DeltaSOCs von Modul x |

### ARG_0XDF7F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Modul dessen Kapazität auf einem Wert gesetzt werden soll. xx = Modulnummer 88 = gesamter Speicher (99 = SoH_low) nur LI |
| KAPA_NEU | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neuer Kapazitätswert |

### ARG_0XDF80_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| SERIENNUMMER | HEX | high | unsigned long | - | - | - | - | - | - | - | Einzutragende Seriennummer |

### ARG_0XDF84_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht puffern, 1= puffern |

### ARG_0XDF87_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZELLPACK_IDX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index/Verbauposition des Zellpack/Modul mit folgenedem DMC |
| ZELLPACK_DMC | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | - | - | DMC String eines Zellpacks/Moduls (28-stellig) |

### ARG_0XDF88_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZELLPACK_IDX_UEBERNEHMEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Indizes uebernehmen |

### ARG_0XDF93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Resetjob ist nicht mehr relevant. Innenwiderstand wird bei Modultausch automatisch angepasst. |

### ARG_0XDF94_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF95_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF96_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF97_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF98_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF99_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDF9F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDFAF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XDFC9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zum Setzen des neuen HVS-Eigenschutz-Stromintegralwerts |
| SET_LD_INTEGRAL | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert des neuen HVS-Eigenschutz-Stromintegrals |

### ARG_0XE5EC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOH_OFFSET_NEU | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neuer SoH-Offset in Prozent.  Info: Der Wert 111 übernimmt den aktuellen SoH-Offset-Wert mit der neuen Degradationsdauer (DEGRAD_NEU) |
| DEGRAD_NEU | mth | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neue Degradationsdauer des SoH-Offset-Werts in Monaten |

### ARG_0XE5EF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zum Zurücksetzen des Zählers |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht zurücksetzen 1 = zurücksetzen |

### ARG_0XE5F0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort zur Inkrementierung des Zählers |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Änderung, 1 = Zähler inkrementieren |

### ARG_0XF190_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FGNR17 | TEXT | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | 17-stellige Fahrgestellnummer. Zum Zurücksetzen im Steuergerät wird das Argument '00000000000000000' verwendet. Hinweis: Der Argumentwert '00000000000000000' wird SGBD-intern in 0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF gewandelt, bevor er an das CAS gesendet wird. |

### ARG_0XF500_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | + | - | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |

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
| 0x020700 | Energiesparmode aktiv | 0 | - |
| 0x020708 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020709 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02070A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02070B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02070C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF07 | Dummy-Fehlerspeichereintrag im Komponentenbereich nur für Testzwecke | 0 | - |
| 0x21F000 | HVS: Hauptschalter (K2): Kurzschluss nach Masse | 0 | - |
| 0x21F001 | HVS: Hauptschalter (K2): Kurzschluss nach Ubatt | 0 | - |
| 0x21F002 | HVS: Hauptschalter (K2): offene Leitung | 0 | - |
| 0x21F003 | HVS: Hauptschalter (K1): Kurzschluss nach Masse | 0 | - |
| 0x21F004 | HVS: Hauptschalter (K1): Kurzschluss nach Ubatt | 0 | - |
| 0x21F005 | HVS: Hauptschalter (K1): offene Leitung | 0 | - |
| 0x21F006 | HVS: Hauptschalter (K3): Kurzschluss nach Masse | 0 | - |
| 0x21F007 | HVS: Hauptschalter (K3): Kurzschluss nach Ubatt | 0 | - |
| 0x21F008 | HVS: Hauptschalter (K3): offene Leitung | 0 | - |
| 0x21F009 | HVS: Hauptschalter (K2): Treiberfehler | 0 | - |
| 0x21F00A | HVS: Hauptschalter (K1): Treiberfehler | 0 | - |
| 0x21F00B | HVS: Hauptschalter (K3): Treiberfehler | 0 | - |
| 0x21F00C | DTC ENTFALLEN HVS: Erhöhter Ladungsverlust Zelle | 0 | - |
| 0x21F00D | SME: EEPROM NV-Daten stehen auf Initialwerten | 0 | - |
| 0x21F00E | SME: Spannungsversorgung intern- - 5V Spannung zu niedrig | 0 | - |
| 0x21F00F | HVS: Stromversorgung CSC- - Kurzschluss nach Masse | 0 | - |
| 0x21F010 | HVS: Stromversorgung CSC- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F011 | HVS: Stromversorgung CSC- - offene Leitung | 0 | - |
| 0x21F012 | HVS: CSC Treiberfehler | 0 | - |
| 0x21F013 | HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Masse | 0 | - |
| 0x21F014 | HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F015 | HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 | - |
| 0x21F016 | SME: Werte der Echtzeituhr unplausibel | 0 | - |
| 0x21F017 | SME: Wakeup der Echtzeituhr fehlerhaft | 0 | - |
| 0x21F018 | Kühlventil: Kurzschluss nach Masse | 1 | - |
| 0x21F019 | Kühlventil: Kurzschluss nach Ubatt | 1 | - |
| 0x21F01A | Kühlventil: offene Leitung | 1 | - |
| 0x21F01B | Kühlventil: Treiberfehler | 0 | - |
| 0x21F01C | HVS: Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 0 | - |
| 0x21F01D | HVS: Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 0 | - |
| 0x21F01E | HVS: Temp.-Sensor Kühlung: Kurzschluss nach Masse | 0 | - |
| 0x21F01F | HVS: Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 | - |
| 0x21F020 | SME: EEPROM, NV-Daten- - Lesefehler | 0 | - |
| 0x21F021 | SME: EEPROM, NV-Daten- - Schreibfehler | 0 | - |
| 0x21F022 | SME: unerwarteter Reset festgestellt | 0 | - |
| 0x21F023 | SME: RAM Defekt in Initialisierungsphase | 0 | - |
| 0x21F024 | SME: RAM Defekt in Laufzeitphase | 0 | - |
| 0x21F025 | SME: ROM Defekt in Laufzeitphase | 0 | - |
| 0x21F026 | HVS: U/i-Sensor -  CRC-Fehler bei Empfang auf Sensor | 0 | - |
| 0x21F027 | HVS: Stationärspeicher-Modus aktiv | 0 | - |
| 0x21F028 | A-CAN: Sendebetrieb aufgrund Errorframes eingestellt | 0 | - |
| 0x21F02E | U/i-Sensor: Überlauf Strommessung | 0 | - |
| 0x21F02F | U/i-Sensor: Überlauf Messung Ubatt | 0 | - |
| 0x21F030 | U/i-Sensor: Überlauf Messung Uk2 | 0 | - |
| 0x21F031 | U/i-Sensor: Überlauf Messung Uq | 0 | - |
| 0x21F032 | U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 | - |
| 0x21F033 | U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 | - |
| 0x21F034 | U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 | - |
| 0x21F035 | U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 | - |
| 0x21F036 | U/i-Sensor: Messbereichsüberschreitung Uk2 (oben) | 0 | - |
| 0x21F037 | U/i-Sensor: Messbereichsüberschreitung Uk2 (unten) | 0 | - |
| 0x21F038 | U/i-Sensor: Messbereichsüberschreitung Uq (oben) | 0 | - |
| 0x21F039 | U/i-Sensor: Messbereichsüberschreitung Uq (unten) | 0 | - |
| 0x21F03A | HVS: U/i-Sensor - Steuerungsmodul BUS OFF | 0 | - |
| 0x21F03B | HVS: U/i-Sensor-Layer -  CRC-Fehler erkannt auf SME | 0 | - |
| 0x21F03C | Reduzierte Ladeleistung durch Fahrladen | 0 | - |
| 0x21F03D | HVS: U/i-Sensor -  Treiberfehler | 0 | - |
| 0x21F03E | HVS: U/i-Sensor -  interner U/i-Sensorfehler | 0 | - |
| 0x21F03F | Crashsensor (Kl. 30C): Wert außerhalb Bereich oben | 0 | - |
| 0x21F040 | Klemme30F: Wert außerhalb Bereich oben | 0 | - |
| 0x21F041 | Klemme 15: Wert außerhalb Bereich oben | 0 | - |
| 0x21F042 | HVS: Ruhestromabschaltung HW-Peripherie -  nicht funktionsfähig | 0 | - |
| 0x21F043 | HVS: Ruhestromabschaltung SME -  Timeout für Nachlaufdiagnosen | 0 | - |
| 0x21F044 | HVS: Ruhestromabschaltung SME -  Timeout im Nachlauf | 0 | - |
| 0x21F045 | HVS Heizung: Kommunikationsfehler | 0 | - |
| 0x21F046 | HVS Heizung: Kurzschluss Heizelement | 0 | - |
| 0x21F047 | HVS Heizung: Unterbrechung Heizelement | 0 | - |
| 0x21F048 | HVS Heizung: Mosfet Leistungsschalter allgemeiner Defekt | 0 | - |
| 0x21F049 | HVS Heizung: Mosfet Leistungsschalter Defekt durchgeschaltet | 0 | - |
| 0x21F04A | HVS Heizung: Mosfet Leistungsschalter Überhitzung | 0 | - |
| 0x21F04B | HVS Heizung: Kurzschluss ZK+ nach HV+ | 0 | - |
| 0x21F04C | HVS Heizung: Kurzschluss ZK+ nach HV- | 0 | - |
| 0x21F04D | HVS Heizung: Sicherung F2 ausgelöst | 0 | - |
| 0x21F04E | HVS Heizung: Strommessung Überlast | 0 | - |
| 0x21F04F | HVS Heizung: Spannungsmessung Batterie Unterspannung | 0 | - |
| 0x21F050 | HVS Heizung: Spannungsmessung Batterie Überspannung | 0 | - |
| 0x21F051 | HVS Heizung: Strommessung Plausibilisierung fehlerhaft | 0 | - |
| 0x21F053 | DTC ENTFALLEN: HVS SBOX -  Heizleistung ungueltig | 0 | - |
| 0x21F054 | HVS: CSC CAN: Steuerungsmodul BUS OFF | 0 | - |
| 0x21F055 | HVS: CSC CAN: CSC fehlt | 0 | - |
| 0x21F056 | HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F057 | HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F058 | HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F059 | HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F05A | HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F05B | HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F05C | HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F05D | HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F05E | HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F05F | HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F060 | HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F061 | HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F062 | HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F063 | HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F064 | HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F065 | HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F066 | HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F067 | HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F068 | HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F069 | HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06A | HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06B | HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06C | HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06D | HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06E | HVS: CSC 13 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06F | HVS: CSC 13 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F070 | HVS: CSC 14 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F071 | HVS: CSC 14 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F072 | HVS: CSC 15 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F073 | HVS: CSC 15 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F074 | HVS: CSC 16 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F075 | HVS: CSC 16 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F076 | HVS: CSC 1 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F077 | HVS: CSC 1 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F078 | HVS: CSC 2 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F079 | HVS: CSC 2 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F07A | HVS: CSC 3 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F07B | HVS: CSC 3 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F07C | HVS: CSC 4 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F07D | HVS: CSC 4 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F07E | HVS: CSC 5 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F07F | HVS: CSC 5 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F080 | HVS: CSC 6 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F081 | HVS: CSC 6 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F082 | HVS: CSC 7 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F083 | HVS: CSC 7 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F084 | HVS: CSC 8 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F085 | HVS: CSC 8 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F086 | HVS: CSC 9 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F087 | HVS: CSC 9 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F088 | HVS: CSC 10 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F089 | HVS: CSC 10 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F08A | HVS: CSC 11 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F08B | HVS: CSC 11 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F08C | HVS: CSC 12 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F08D | HVS: CSC 12 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F08E | HVS: CSC 13 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F08F | HVS: CSC 13 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F090 | HVS: CSC 14 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F091 | HVS: CSC 14 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F092 | HVS: CSC 15 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F093 | HVS: CSC 15 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F094 | HVS: CSC 16 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F095 | HVS: CSC 16 Funktion: mind. ein T-Sensor im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F096 | HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F097 | HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F098 | HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F099 | HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F09A | HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F09B | HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F09C | HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F09D | HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F09E | HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F09F | HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A0 | HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A1 | HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A2 | HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A3 | HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A4 | HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A5 | HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A6 | HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A7 | HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A8 | HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A9 | HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AA | HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AB | HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AC | HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AD | HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AE | HVS: CSC 13 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AF | HVS: CSC 13 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B0 | HVS: CSC 14 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B1 | HVS: CSC 14 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B2 | HVS: CSC 15 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B3 | HVS: CSC 15 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B4 | HVS: CSC 16 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B5 | HVS: CSC 16 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B6 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung aufgetreten | 0 | - |
| 0x21F0B7 | HVS: CSC Funktion: Symmetriereinheit defekt | 0 | - |
| 0x21F0B8 | HVS: CSC Funktion: thermisches Abschalten aufgetreten | 0 | - |
| 0x21F0B9 | HVS: CSC Funktion: Ungültige Anfrage empfangen | 0 | - |
| 0x21F0BA | HVS: CSC Funktion: Symmetrierung nicht möglich, niedrigste Symmetrierspannung erreicht | 0 | - |
| 0x21F0BB | HVS: CSC Funktion: CSC Wake-Up defekt | 0 | - |
| 0x21F0BC | HVS: CSC Funktion: Kommunikation Frontend/CSC fehlgeschlagen | 0 | - |
| 0x21F0BD | HVS: CSC Funktion: ungültige CAN DB | 0 | - |
| 0x21F0BE | HVS: CSC Funktion: CAN Kommunikationsausfall detektiert | 0 | - |
| 0x21F0BF | HVS: CSC Funktion: ADC-Test 1 LTC6802 nicht bestanden | 0 | - |
| 0x21F0C0 | HVS: CSC Funktion: ADC-Test 2 LTC6802 nicht bestanden | 0 | - |
| 0x21F0C1 | HVS: CSC Funktion: LTC6801 Selbsttest nicht bestanden | 0 | - |
| 0x21F0C2 | HVS: CSC Funktion: RAM Selbsttest nicht bestanden | 0 | - |
| 0x21F0C3 | HVS: CSC Funktion: ROM Selbsttest nicht bestanden | 0 | - |
| 0x21F0C4 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten | 0 | - |
| 0x21F0C5 | HVS: CSC Funktion: Plausibilitätsfehler Zellspannung | 0 | - |
| 0x21F0C6 | HVS: CSC Funktion: Plausibilitätsfehler Zelltemperatur | 0 | - |
| 0x21F0C7 | HVS: CSC Funktion: kritischer Hardwaredefekt | 0 | - |
| 0x21F0C8 | Service Disconnect: steckt nicht | 1 | - |
| 0x21F0C9 | Service Disconnect: Auswertung unplausibel | 0 | - |
| 0x21F0CA | Crash: Crash I (ACAN, reversibel) festgestellt | 1 | - |
| 0x21F0CB | Crash: Crash II (ACAN und KL30C, irreversibel) festgestellt | 1 | - |
| 0x21F0CC | 12 V Versorgung (KL 30 F): Unterspannung | 1 | - |
| 0x21F0CD | 12 V Versorgung (KL 30 F): Überspannung | 1 | - |
| 0x21F0CE | Crashüberwachung (KL 30 C): Unterspannung | 1 | - |
| 0x21F0CF | Kühlventil: Ventil lässt sich nicht schließen | 1 | - |
| 0x21F0D0 | Kühlventil: Ventil lässt sich nicht öffnen | 1 | - |
| 0x21F0D1 | HVS: Hauptschalter: Lebensdauerende erreicht | 0 | - |
| 0x21F0D2 | HVS: Hauptschalter: neg. Schütze kleben | 0 | - |
| 0x21F0D3 | HVS: Hauptschalter: neg. Schütze lassen sich nicht schließen | 0 | - |
| 0x21F0D4 | HVS: Hauptschalter: pos. Schütze kleben | 0 | - |
| 0x21F0D5 | HVS: Hauptschalter: pos. Schütze lassen sich nicht schließen oder Sicherung ausgelöst | 0 | - |
| 0x21F0D6 | Hauptschalter: Abschaltung unter Last festgestellt | 0 | - |
| 0x21F0D7 | Stromüberwachung: Leitungsschutzgrenze verletzt | 1 | - |
| 0x21F0D8 | Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 1 | - |
| 0x21F0D9 | Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 1 | - |
| 0x21F0DA | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung | 1 | - |
| 0x21F0DB | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung | 1 | - |
| 0x21F0DC | Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 1 | - |
| 0x21F0DD | Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 1 | - |
| 0x21F0DE | HVS: HV-Interlock: kein Signal erzeugt | 0 | - |
| 0x21F0DF | HV-Interlock: offene Leitung | 1 | - |
| 0x21F0E0 | HV-Interlock: Kurzschluss in Schleife | 1 | - |
| 0x21F0E1 | HV-Interlock: Kurzschluss nach Ubatt | 1 | - |
| 0x21F0E2 | HV-Interlock: Kurzschluss nach Masse | 1 | - |
| 0x21F0E3 | Isolationsüberwachung -  Isolationsfehler im Gesamtsystem (geschlossene Schütze) | 0 | - |
| 0x21F0E4 | Isolationsüberwachung -  Isolationswarnung im Gesamtsystem (geschlossene Schütze) | 0 | - |
| 0x21F0E5 | HVS: Isolationsüberwachung -  interner Isolationsfehler (offene Schütze) | 0 | - |
| 0x21F0E6 | HVS: Isolationsüberwachung -  Isolationsüberwachung deaktiviert | 0 | - |
| 0x21F0E7 | HVS: Isolationsüberwachung -  interne Isolationwarnung (offene Schütze) | 0 | - |
| 0x21F0E8 | Vorladung -  Strom zu hoch | 1 | - |
| 0x21F0E9 | Vorladung -  Nicht erfolgreich. Erhöhter Leckstrom im HV-System | 1 | - |
| 0x21F0EA | Vorladung -  Zeit zu kurz | 1 | - |
| 0x21F0EB | Vorladung -  Kurzschluss im Zwischenkreis detektiert | 1 | - |
| 0x21F0EC | Plausibilität Stromwert -  Strom unplausibel. Kein Ersatzwert vorhanden | 0 | - |
| 0x21F0ED | HVS: Plausibilität Zwischenkreisspannung -  Spannung fehlerhaft, kein Ersatzwert vorhanden | 0 | - |
| 0x21F0EE | HVS: Zellspannungsmessung -  eine oder mehrere Zellspannungen ausgefallen | 0 | - |
| 0x21F0EF | HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, Ersatzwert im Einsatz | 0 | - |
| 0x21F0F0 | HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, kein Ersatzwert vorhanden | 0 | - |
| 0x21F0F1 | HVS: Plausibilität Batteriespannung -  Modulsummenspannung unplausibel | 0 | - |
| 0x21F0F2 | HVS: Plausibilität Batteriespannung -  Zellsummenspannung unplausibel | 0 | - |
| 0x21F0F3 | HVS: Plausibillität Spannungssensorik CSC 1 -  Spannung unplausibel | 0 | - |
| 0x21F0F4 | HVS: Plausibillität Spannungssensorik CSC 2 -  Spannung unplausibel | 0 | - |
| 0x21F0F5 | HVS: Plausibillität Spannungssensorik CSC 3 -  Spannung unplausibel | 0 | - |
| 0x21F0F6 | HVS: Plausibillität Spannungssensorik CSC 4 -  Spannung unplausibel | 0 | - |
| 0x21F0F7 | HVS: Plausibillität Spannungssensorik CSC 5 -  Spannung unplausibel | 0 | - |
| 0x21F0F8 | HVS: Plausibillität Spannungssensorik CSC 6 -  Spannung unplausibel | 0 | - |
| 0x21F0F9 | HVS: Plausibillität Spannungssensorik CSC 7 -  Spannung unplausibel | 0 | - |
| 0x21F0FA | HVS: Plausibillität Spannungssensorik CSC 8 -  Spannung unplausibel | 0 | - |
| 0x21F0FB | HVS: Plausibillität Spannungssensorik CSC 9 -  Spannung unplausibel | 0 | - |
| 0x21F0FC | HVS: Plausibillität Spannungssensorik CSC 10 -  Spannung unplausibel | 0 | - |
| 0x21F0FD | HVS: Plausibillität Spannungssensorik CSC 11 -  Spannung unplausibel | 0 | - |
| 0x21F0FE | HVS: Plausibillität Spannungssensorik CSC 12 -  Spannung unplausibel | 0 | - |
| 0x21F0FF | HVS: Plausibillität Spannungssensorik CSC 13 -  Spannung unplausibel | 0 | - |
| 0x21F100 | HVS: Plausibillität Spannungssensorik CSC 14 -  Spannung unplausibel | 0 | - |
| 0x21F101 | HVS: Plausibillität Spannungssensorik CSC 15 -  Spannung unplausibel | 0 | - |
| 0x21F102 | HVS: Plausibillität Spannungssensorik CSC 16 -  Spannung unplausibel | 0 | - |
| 0x21F103 | HVS: Zelltemperaturen -  Modultemperatur CSC 1 unplausibel | 0 | - |
| 0x21F104 | HVS: Zelltemperaturen -  Modultemperatur CSC 2 unplausibel | 0 | - |
| 0x21F105 | HVS: Zelltemperaturen -  Modultemperatur CSC 3 unplausibel | 0 | - |
| 0x21F106 | HVS: Zelltemperaturen -  Modultemperatur CSC 4 unplausibel | 0 | - |
| 0x21F107 | HVS: Zelltemperaturen -  Modultemperatur CSC 5 unplausibel | 0 | - |
| 0x21F108 | HVS: Zelltemperaturen -  Modultemperatur CSC 6 unplausibel | 0 | - |
| 0x21F109 | HVS: Zelltemperaturen -  Modultemperatur CSC 7 unplausibel | 0 | - |
| 0x21F10A | HVS: Zelltemperaturen -  Modultemperatur CSC 8 unplausibel | 0 | - |
| 0x21F10B | HVS: Zelltemperaturen -  Modultemperatur CSC 9 unplausibel | 0 | - |
| 0x21F10C | HVS: Zelltemperaturen -  Modultemperatur CSC 10 unplausibel | 0 | - |
| 0x21F10D | HVS: Zelltemperaturen -  Modultemperatur CSC 11 unplausibel | 0 | - |
| 0x21F10E | HVS: Zelltemperaturen -  Modultemperatur CSC 12 unplausibel | 0 | - |
| 0x21F10F | HVS: Zelltemperaturen -  Modultemperatur CSC 13 unplausibel | 0 | - |
| 0x21F110 | HVS: Zelltemperaturen -  Modultemperatur CSC 14 unplausibel | 0 | - |
| 0x21F111 | HVS: Zelltemperaturen -  Modultemperatur CSC 15 unplausibel | 0 | - |
| 0x21F112 | HVS: Zelltemperaturen -  Modultemperatur CSC 16 unplausibel | 0 | - |
| 0x21F113 | HVS: Zelltemperaturen: Sammelfehler - Zu viele Sensoren unplausibel oder ausgefallen | 0 | - |
| 0x21F114 | HVS: Zelltemperaturen -  Modultemperaturen CSC 1 ausgefallen | 0 | - |
| 0x21F115 | HVS: Zelltemperaturen -  Modultemperaturen CSC 2 ausgefallen | 0 | - |
| 0x21F116 | HVS: Zelltemperaturen -  Modultemperaturen CSC 3 ausgefallen | 0 | - |
| 0x21F117 | HVS: Zelltemperaturen -  Modultemperaturen CSC 4 ausgefallen | 0 | - |
| 0x21F118 | HVS: Zelltemperaturen -  Modultemperaturen CSC 5 ausgefallen | 0 | - |
| 0x21F119 | HVS: Zelltemperaturen -  Modultemperaturen CSC 6 ausgefallen | 0 | - |
| 0x21F11A | HVS: Zelltemperaturen -  Modultemperaturen CSC 7 ausgefallen | 0 | - |
| 0x21F11B | HVS: Zelltemperaturen -  Modultemperaturen CSC 8 ausgefallen | 0 | - |
| 0x21F11C | HVS: Zelltemperaturen -  Modultemperaturen CSC 9 ausgefallen | 0 | - |
| 0x21F11D | HVS: Zelltemperaturen -  Modultemperaturen CSC 10 ausgefallen | 0 | - |
| 0x21F11E | HVS: Zelltemperaturen -  Modultemperaturen CSC 11 ausgefallen | 0 | - |
| 0x21F11F | HVS: Zelltemperaturen -  Modultemperaturen CSC 12 ausgefallen | 0 | - |
| 0x21F120 | HVS: Zelltemperaturen -  Modultemperaturen CSC 13 ausgefallen | 0 | - |
| 0x21F121 | HVS: Zelltemperaturen -  Modultemperaturen CSC 14 ausgefallen | 0 | - |
| 0x21F122 | HVS: Zelltemperaturen -  Modultemperaturen CSC 15 ausgefallen | 0 | - |
| 0x21F123 | HVS: Zelltemperaturen -  Modultemperaturen CSC 16 ausgefallen | 0 | - |
| 0x21F124 | HVS: Zelltemperaturen: Hohe Temperatur, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F125 | HVS: Zelltemperaturen: CSC 1 Übertemperatur | 0 | - |
| 0x21F126 | HVS: Zelltemperaturen: CSC 2 Übertemperatur | 0 | - |
| 0x21F127 | HVS: Zelltemperaturen: CSC 3 Übertemperatur | 0 | - |
| 0x21F128 | HVS: Zelltemperaturen: CSC 4 Übertemperatur | 0 | - |
| 0x21F129 | HVS: Zelltemperaturen: CSC 5 Übertemperatur | 0 | - |
| 0x21F12A | HVS: Zelltemperaturen: CSC 6 Übertemperatur | 0 | - |
| 0x21F12B | HVS: Zelltemperaturen: CSC 7 Übertemperatur | 0 | - |
| 0x21F12C | HVS: Zelltemperaturen: CSC 8 Übertemperatur | 0 | - |
| 0x21F12D | HVS: Zelltemperaturen: CSC 9 Übertemperatur | 0 | - |
| 0x21F12E | HVS: Zelltemperaturen: CSC 10 Übertemperatur | 0 | - |
| 0x21F12F | HVS: Zelltemperaturen: CSC 11 Übertemperatur | 0 | - |
| 0x21F130 | HVS: Zelltemperaturen: CSC 12 Übertemperatur | 0 | - |
| 0x21F131 | HVS: Zelltemperaturen: CSC 13 Übertemperatur | 0 | - |
| 0x21F132 | HVS: Zelltemperaturen: CSC 14 Übertemperatur | 0 | - |
| 0x21F133 | HVS: Zelltemperaturen: CSC 15 Übertemperatur | 0 | - |
| 0x21F134 | HVS: Zelltemperaturen: CSC 16 Übertemperatur | 0 | - |
| 0x21F135 | HVS: Widerstand der Heizung nicht im erwarteten Bereich | 0 | - |
| 0x21F136 | HVS: Fehlerhafte Wärmeleitung zum Hochvoltspeicher | 0 | - |
| 0x21F138 | Ladungszustand: kritische obere SoC-Grenze erreicht | 0 | - |
| 0x21F139 | Ladungszustand: kritische untere SoC-Grenze erreicht | 0 | - |
| 0x21F13A | HVS: Zellüberwachung: Zellen sind stark unsymmetriert | 0 | - |
| 0x21F13B | HVS: Zellüberwachung: Zelldefekt festgestellt | 0 | - |
| 0x21F13C | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung festgestellt | 0 | - |
| 0x21F13D | Deaktivierung Hauptschalter nach Fehler | 0 | - |
| 0x21F13E | Zuschaltung verhindert -  Überhitzungsschutz | 0 | - |
| 0x21F13F | Zuschaltung verhindert -  Maximale Anzahl Fehlversuche überschritten. | 0 | - |
| 0x21F140 | Zuschaltung verhindert -  Zwischenkreisspannung außerhalb des zulässigen Bereichs | 1 | - |
| 0x21F141 | Zuschaltung verhindert -  Sicherheitsmerkmale nicht erfüllt | 0 | - |
| 0x21F142 | HVS: Zuschaltung verhindert -  Transport-Bit gesetzt | 0 | - |
| 0x21F144 | HVS: Zuschaltung verhindert -  NM nicht aktiv | 1 | - |
| 0x21F145 | HVS: Abschaltung der Hauptschütze -  Flashmode aktiv | 0 | - |
| 0x21F146 | HVS: Zuschaltung nicht möglich, Verdacht auf Kontaktunterbrechung durch Schmelzsicherung. Überstrom erkannt. | 0 | - |
| 0x21F147 | HVS: Sicherheitskonzept, Ebene 2: Temperatur zu hoch oder unbekannt | 0 | - |
| 0x21F148 | HVS: Sicherheitskonzept, Ebene 2: Spannung zu niedrig/hoch oder unbekannt | 1 | - |
| 0x21F149 | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest Kurzschluss nach Ubatt | 1 | - |
| 0x21F14A | HVS: Sicherheitskonzept, Ebene 2: Strom zu niedrig/hoch | 1 | - |
| 0x21F14B | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest Reissleine KL30C bis zu Diagnoseausgang RL_CL30C_DIAG | 0 | - |
| 0x21F14C | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest Sicherheitsrechner Schützsteuerung | 0 | - |
| 0x21F14D | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest Hauptrechner Schützsteuerung | 0 | - |
| 0x21F14E | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest fehlgeschlagen | 0 | - |
| 0x21F150 | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest Reissleine KL30C bis zu Hauptschalter | 0 | - |
| 0x21F151 | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest NVM Zugriff | 0 | - |
| 0x21F152 | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest Hauptrechner Schützsteuerung während Laufzeit | 0 | - |
| 0x21F153 | HVS: Sicherheitskonzept, Ebene2: Abschalten detektiert | 0 | - |
| 0x21F154 | HVS: Sicherheitskonzept, Ebene2:  Abschaltpfadtest wegen Kl 30C Unterspannung nicht möglich | 0 | - |
| 0x21F156 | SME: Sicherheitskonzept - Fehler in Laufzeitüberwachung | 0 | - |
| 0x21F157 | SME: Sicherheitskonzept - Prozessor-Test fehlgeschlagen | 0 | - |
| 0x21F158 | SME: Sicherheitskonzept, Ebene 3: Reset des Sicherheitsrechners | 0 | - |
| 0x21F159 | SME: Sicherheitskonzept - Reset durch Hauptrechner | 0 | - |
| 0x21F15A | SME: Sicherheitskonzept - inkonsistentes RAM erkannt | 0 | - |
| 0x21F15C | SME: Sicherheitskonzept -  Abschaltung durch Ebene2 | 0 | - |
| 0x21F15D | SME: Sicherheitskonzept - Speicher-ECC-Fehler | 0 | - |
| 0x21F15E | SME: Sicherheitskonzept - Unbekannter Reset-Grund | 0 | - |
| 0x21F15F | SME: Sicherheitskonzept - Reset durch Sicherheitsrechner | 0 | - |
| 0x21F160 | HVS: Sicherheitskonzept, Ebene 2: Abschaltpfadtest maximale Anzahl Versuche überschritten | 0 | - |
| 0x21F161 | CSC Version ungültig | 0 | - |
| 0x21F168 | HVS: U/i-Sensor -  Sensortemperatur außerhalb Bereich | 0 | - |
| 0x21F17E | HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 | - |
| 0x21F1BE | CAN_E_TIMEOUT | 0 | - |
| 0x21F1C1 | HVS: Zellüberwachung: Zelldefekt in Modul 1 festgestellt | 0 | - |
| 0x21F1C2 | HVS: Zellüberwachung: Zelldefekt in Modul 2 festgestellt | 0 | - |
| 0x21F1C3 | HVS: Zellüberwachung: Zelldefekt in Modul 3 festgestellt | 0 | - |
| 0x21F1C4 | HVS: Zellüberwachung: Zelldefekt in Modul 4 festgestellt | 0 | - |
| 0x21F1C5 | HVS: Zellüberwachung: Zelldefekt in Modul 5 festgestellt | 0 | - |
| 0x21F1C6 | HVS: Zellüberwachung: Zelldefekt in Modul 6 festgestellt | 0 | - |
| 0x21F1C7 | HVS: Zellüberwachung: Zelldefekt in Modul 7 festgestellt | 0 | - |
| 0x21F1C8 | HVS: Zellüberwachung: Zelldefekt in Modul 8 festgestellt | 0 | - |
| 0x21F1C9 | HVS: Zellüberwachung: Zelldefekt in Modul 9 festgestellt | 0 | - |
| 0x21F1CA | HVS: Zellüberwachung: Zelldefekt in Modul 10 festgestellt | 0 | - |
| 0x21F1CB | HVS: Zellüberwachung: Zelldefekt in Modul 11 festgestellt | 0 | - |
| 0x21F1CC | HVS: Zellüberwachung: Zelldefekt in Modul 12 festgestellt | 0 | - |
| 0x21F1CD | HVS: Zellüberwachung: Zelldefekt in Modul 13 festgestellt | 0 | - |
| 0x21F1CE | HVS: Zellüberwachung: Zelldefekt in Modul 14 festgestellt | 0 | - |
| 0x21F1CF | HVS: Zellüberwachung: Zelldefekt in Modul 15 festgestellt | 0 | - |
| 0x21F1D0 | HVS: Zellüberwachung: Zelldefekt in Modul 16 festgestellt | 0 | - |
| 0x21F1D1 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 1 festgestellt | 0 | - |
| 0x21F1D2 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 2 festgestellt | 0 | - |
| 0x21F1D3 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 3 festgestellt | 0 | - |
| 0x21F1D4 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 4 festgestellt | 0 | - |
| 0x21F1D5 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 5 festgestellt | 0 | - |
| 0x21F1D6 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 6 festgestellt | 0 | - |
| 0x21F1D7 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 7 festgestellt | 0 | - |
| 0x21F1D8 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 8 festgestellt | 0 | - |
| 0x21F1D9 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 9 festgestellt | 0 | - |
| 0x21F1DA | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 10 festgestellt | 0 | - |
| 0x21F1DB | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 11 festgestellt | 0 | - |
| 0x21F1DC | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 12 festgestellt | 0 | - |
| 0x21F1DD | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 13 festgestellt | 0 | - |
| 0x21F1DE | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 14 festgestellt | 0 | - |
| 0x21F1DF | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 15 festgestellt | 0 | - |
| 0x21F1E0 | DTC ENTFALLEN HVS: Zellüberwachung: Tiefentladung in Modul 16 festgestellt | 0 | - |
| 0x21F1F7 | Stromsensor Heizung: außerhalb Bereich (oben) | 0 | - |
| 0x21F1F8 | Stromsensor Heizung: außerhalb Bereich (unten) | 0 | - |
| 0x21F1F9 | CSC Indizierung verloren, korrekte Modulzuordnung nicht mehr gewährleistet | 0 | - |
| 0x21F1FA | CSC Indizierungsprüfung fehlgeschlagen | 0 | - |
| 0x21F1FB | HVS: CSC CAN: CSC 1 fehlt | 0 | - |
| 0x21F1FC | HVS: CSC CAN: CSC 2 fehlt | 0 | - |
| 0x21F1FD | HVS: CSC CAN: CSC 3 fehlt | 0 | - |
| 0x21F1FE | HVS: CSC CAN: CSC 4 fehlt | 0 | - |
| 0x21F1FF | HVS: CSC CAN: CSC 5 fehlt | 0 | - |
| 0x21F200 | HVS: CSC CAN: CSC 6 fehlt | 0 | - |
| 0x21F201 | HVS: CSC CAN: CSC 7 fehlt | 0 | - |
| 0x21F202 | HVS: CSC CAN: CSC 8 fehlt | 0 | - |
| 0x21F203 | HVS: CSC CAN: CSC 9 fehlt | 0 | - |
| 0x21F204 | HVS: CSC CAN: CSC 10 fehlt | 0 | - |
| 0x21F205 | HVS: CSC CAN: CSC 11 fehlt | 0 | - |
| 0x21F206 | HVS: CSC CAN: CSC 12 fehlt | 0 | - |
| 0x21F207 | HVS: CSC CAN: CSC 13 fehlt | 0 | - |
| 0x21F208 | HVS: CSC CAN: CSC 14 fehlt | 0 | - |
| 0x21F209 | HVS: CSC CAN: CSC 15 fehlt | 0 | - |
| 0x21F20A | Plausibilität Kühlmittelsensor - Kühlmittelsensor liefert unplausible Werte zurück | 0 | - |
| 0x21F20B | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 1 aufgetreten | 0 | - |
| 0x21F20C | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 2 aufgetreten | 0 | - |
| 0x21F20D | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 3 aufgetreten | 0 | - |
| 0x21F20E | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 4 aufgetreten | 0 | - |
| 0x21F20F | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 5 aufgetreten | 0 | - |
| 0x21F210 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 6 aufgetreten | 0 | - |
| 0x21F211 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 7 aufgetreten | 0 | - |
| 0x21F212 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 8 aufgetreten | 0 | - |
| 0x21F213 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 9 aufgetreten | 0 | - |
| 0x21F214 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 10 aufgetreten | 0 | - |
| 0x21F215 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 11 aufgetreten | 0 | - |
| 0x21F216 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 12 aufgetreten | 0 | - |
| 0x21F217 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 13 aufgetreten | 0 | - |
| 0x21F218 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 14 aufgetreten | 0 | - |
| 0x21F219 | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 15 aufgetreten | 0 | - |
| 0x21F21A | HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 16 aufgetreten | 0 | - |
| 0x21F21B | HVS: CSC Funktion: NTC_HW1/2 (MON) offene Leitung | 0 | - |
| 0x21F21C | HVS: CSC Funktion: Referenzspannung LTC6802 (BAT) ausserhalb Bereich | 0 | - |
| 0x21F21D | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 1 | 0 | - |
| 0x21F21E | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 2 | 0 | - |
| 0x21F21F | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 3 | 0 | - |
| 0x21F220 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 4 | 0 | - |
| 0x21F221 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 5 | 0 | - |
| 0x21F222 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 6 | 0 | - |
| 0x21F223 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 7 | 0 | - |
| 0x21F224 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 8 | 0 | - |
| 0x21F225 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 9 | 0 | - |
| 0x21F226 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 10 | 0 | - |
| 0x21F227 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 11 | 0 | - |
| 0x21F228 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 12 | 0 | - |
| 0x21F229 | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 13 | 0 | - |
| 0x21F22A | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 14 | 0 | - |
| 0x21F22B | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 15 | 0 | - |
| 0x21F22C | HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 16 | 0 | - |
| 0x21F22D | HVS: CSC Funktion: Test auf offene Leitung nicht durchgefuehrt | 0 | - |
| 0x21F22E | HVS: CSC Funktion: Reissleine fehlerhaft gezogen, PWM OK | 0 | - |
| 0x21F22F | HVS: CSC Funktion: Reissleine fehlerhaft nicht gezogen, PWM nicht OK | 0 | - |
| 0x21F230 | HVS: Hauptschalter: Abschaltung aufgrund KL30C Unterspannung | 1 | - |
| 0x21F231 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 1 | 1 | - |
| 0x21F232 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 2 | 1 | - |
| 0x21F233 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 3 | 1 | - |
| 0x21F234 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 4 | 1 | - |
| 0x21F235 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 5 | 1 | - |
| 0x21F236 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 6 | 1 | - |
| 0x21F237 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 7 | 1 | - |
| 0x21F238 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 8 | 1 | - |
| 0x21F239 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 9 | 1 | - |
| 0x21F23A | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 10 | 1 | - |
| 0x21F23B | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 11 | 1 | - |
| 0x21F23C | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 12 | 1 | - |
| 0x21F23D | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 13 | 1 | - |
| 0x21F23E | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 14 | 1 | - |
| 0x21F23F | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 15 | 1 | - |
| 0x21F240 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 16 | 1 | - |
| 0x21F241 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 1 | 1 | - |
| 0x21F242 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 2 | 1 | - |
| 0x21F243 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 3 | 1 | - |
| 0x21F244 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 4 | 1 | - |
| 0x21F245 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 5 | 1 | - |
| 0x21F246 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 6 | 1 | - |
| 0x21F247 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 7 | 1 | - |
| 0x21F248 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 8 | 1 | - |
| 0x21F249 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 9 | 1 | - |
| 0x21F24A | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 10 | 1 | - |
| 0x21F24B | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 11 | 1 | - |
| 0x21F24C | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 12 | 1 | - |
| 0x21F24D | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 13 | 1 | - |
| 0x21F24E | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 14 | 1 | - |
| 0x21F24F | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 15 | 1 | - |
| 0x21F250 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 16 | 1 | - |
| 0x21F251 | HVS: Zelltemperaturen - Hohe Temperatur, Laden unterbrochen | 1 | - |
| 0x21F252 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 1, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F253 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 2, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F254 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 3, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F255 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 4, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F256 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 5, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F257 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 6, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F258 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 7, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F259 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 8, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F25A | HVS: Zelltemperaturen: Hohe Temperatur in Modul 9, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F25B | HVS: Zelltemperaturen: Hohe Temperatur in Modul 10, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F25C | HVS: Zelltemperaturen: Hohe Temperatur in Modul 11, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F25D | HVS: Zelltemperaturen: Hohe Temperatur in Modul 12, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F25E | HVS: Zelltemperaturen: Hohe Temperatur in Modul 13, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F25F | HVS: Zelltemperaturen: Hohe Temperatur in Modul 14, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F260 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 15, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F261 | HVS: Zelltemperaturen: Hohe Temperatur in Modul 16, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F262 | HVS: Sicherheitskonzept Ebene 2: Empfangener Strom Qualifier ungültig | 0 | - |
| 0x21F263 | HVS: Sicherheitskonzept Ebene 2: Stromüberwachung Empfangener CRC oder ALIVE entspricht nicht dem Erwartungswert | 0 | - |
| 0x21F264 | HVS: Sicherheitskonzept Ebene 2: Spannungserfassung empfangener Wert ungleich Erwartungswert | 0 | - |
| 0x21F265 | HVS: Sicherheitskonzept Ebene 2: Spannungserfassung Diagnose ist nicht verfügbar | 0 | - |
| 0x21F266 | HVS: Isolationsüberwachung Isolationsfehler im Gesamtsystem (geschlossene Schütze) | 0 | - |
| 0x21F267 | HVS: Isolationsüberwachung Isolationswarnung im Gesamtsystem (geschlossene Schütze) | 0 | - |
| 0x21F26E | Fehlerspeicher Test aktiv | 0 | - |
| 0x21F270 | HVS: CSC Funktion: ADC-Test Frontend nicht bestanden | 0 | - |
| 0x21F271 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 1 | 0 | - |
| 0x21F272 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 2 | 0 | - |
| 0x21F273 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 3 | 0 | - |
| 0x21F274 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 4 | 0 | - |
| 0x21F275 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 5 | 0 | - |
| 0x21F276 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 6 | 0 | - |
| 0x21F277 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 7 | 0 | - |
| 0x21F278 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 8 | 0 | - |
| 0x21F279 | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 9 | 0 | - |
| 0x21F27A | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 10 | 0 | - |
| 0x21F27B | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 11 | 0 | - |
| 0x21F27C | HVS: CSC Funktion: NTC_HW1/2 (MON) Kurzschluss Module 12 | 0 | - |
| 0x21F27D | HVS: CSC Funktion: Referenzspannung Sensorik  ausserhalb Bereich oben | 0 | - |
| 0x21F27E | HVS: CSC Funktion: Problem in Fault Line Path | 0 | - |
| 0x21F283 | HVS: Sicherheitskonzept Ebene 3: Schützabschaltung nach Flash-Timeout erzwungen | 0 | - |
| 0x21F284 | Reissleine durch CSC gezogen | 0 | - |
| 0x21F285 | Reissleinen-Test fehlgeschlagen: CSC antwortet nicht auf Trigger | 0 | - |
| 0x21F286 | Reissleinen-Test fehlgeschlagen: CSC-Feedback (Toggeln der Reissleine) fehlt | 0 | - |
| 0x21F287 | Reissleine fehlerhaft durch CSC gezogen | 0 | - |
| 0x21F288 | Reissleine fehlerhaft NICHT durch CSC gezogen | 0 | - |
| 0x21F289 | HVS: CSC Funktion: Referenzspannung LTC6801 (MON) ausserhalb Bereich | 0 | - |
| 0x21F28A | HVS: Echtzeituhr - Abgleich mit Relativzeit unplausibel | 0 | - |
| 0x21F28C | SME: Sicherheitskonzept - Reset-Ursache ECC-Fehler | 0 | - |
| 0x21F28D | SME: Sicherheitskonzept - Reset-Ursache Unimplemented Interrupt | 0 | - |
| 0x21F28E | SME: Sicherheitskonzept - Reset-Ursache Watchdog-Reset | 0 | - |
| 0x21F28F | HVS: Zelltemperaturen - Zellkerntemperatur ungültig | 0 | - |
| 0x21F292 | HVS: Pruefstandsmodus aktiv | 0 | - |
| 0x21F294 | SME: EEPROM, NV-Daten- - Interner Fehler | 0 | - |
| 0x21F295 | Stromüberwachung: Zellsicherheitsgrenze verletzt | 1 | - |
| 0x21F296 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F297 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F298 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F299 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F29A | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F29B | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F29C | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F29D | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F29E | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 9 | 0 | - |
| 0x21F29F | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 10 | 0 | - |
| 0x21F2A0 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 11 | 0 | - |
| 0x21F2A1 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 12 | 0 | - |
| 0x21F2A2 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 13 | 0 | - |
| 0x21F2A3 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 14 | 0 | - |
| 0x21F2A4 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 15 | 0 | - |
| 0x21F2A5 | HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 16 | 0 | - |
| 0x21F2A6 | INFO: Kuehlmittelpumpe nicht freigegeben | 0 | - |
| 0x21F2A9 | SME: Sicherheitskonzept, Ebene 2:Timeout Anforderung Schützöffnung über ACAN | 0 | - |
| 0x21F2B0 | HVS: U/i-Sensor -  Kommunikationsausfall | 0 | - |
| 0x21F2B1 | HVS: Erhöhter Ladungsverlust Zelle Modul 1 | 0 | - |
| 0x21F2B2 | HVS: Erhöhter Ladungsverlust Zelle Modul 2 | 0 | - |
| 0x21F2B3 | HVS: Erhöhter Ladungsverlust Zelle Modul 3 | 0 | - |
| 0x21F2B4 | HVS: Erhöhter Ladungsverlust Zelle Modul 4 | 0 | - |
| 0x21F2B5 | HVS: Erhöhter Ladungsverlust Zelle Modul 5 | 0 | - |
| 0x21F2B6 | HVS: Erhöhter Ladungsverlust Zelle Modul 6 | 0 | - |
| 0x21F2B7 | HVS: Erhöhter Ladungsverlust Zelle Modu 7 | 0 | - |
| 0x21F2B8 | HVS: Erhöhter Ladungsverlust Zelle Modul 8 | 0 | - |
| 0x21F2B9 | HVS: Erhöhter Ladungsverlust Zelle Modul 9 | 0 | - |
| 0x21F2BA | HVS: Erhöhter Ladungsverlust Zelle Modul 10 | 0 | - |
| 0x21F2BB | HVS: Erhöhter Ladungsverlust Zelle Modul 11 | 0 | - |
| 0x21F2BC | HVS: Erhöhter Ladungsverlust Zelle Modul 12 | 0 | - |
| 0x21F2C1 | HVS: Symmetrierschaltung Modul 1 ausgefallen | 0 | - |
| 0x21F2C2 | HVS: Symmetrierschaltung Modul 2 ausgefallen | 0 | - |
| 0x21F2C3 | HVS: Symmetrierschaltung Modul 3 ausgefallen | 0 | - |
| 0x21F2C4 | HVS: Symmetrierschaltung Modul 4 ausgefallen | 0 | - |
| 0x21F2C5 | HVS: Symmetrierschaltung Modul 5 ausgefallen | 0 | - |
| 0x21F2C6 | HVS: Symmetrierschaltung Modul 6 ausgefallen | 0 | - |
| 0x21F2C7 | HVS: Symmetrierschaltung Modul 7 ausgefallen | 0 | - |
| 0x21F2C8 | HVS: Symmetrierschaltung Modul 8 ausgefallen | 0 | - |
| 0x21F2C9 | HVS: Symmetrierschaltung Modul 9 ausgefallen | 0 | - |
| 0x21F2CA | HVS: Symmetrierschaltung Modul 10 ausgefallen | 0 | - |
| 0x21F2CB | HVS: Symmetrierschaltung Modul 11 ausgefallen | 0 | - |
| 0x21F2CC | HVS: Symmetrierschaltung Modul 12 ausgefallen | 0 | - |
| 0x21F2CD | HVS: Sicherheitskonzept, Ebene 2: Strom außerhalb der Leitungsschutzgrenzen | 0 | - |
| 0x21F2CE | DTC ENTFALLEN HVS: Speicher Dauerstrombelastung in kritischen Bereich, temporäre Reduzierung Dauerstromgrenze | 0 | - |
| 0x21F2CF | HVS: Warnung: Thermisches Ereignis | 0 | - |
| 0x21F2D1 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F2D2 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F2D3 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F2D4 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F2D5 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F2D6 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F2D7 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F2D8 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F2D9 | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 9 | 0 | - |
| 0x21F2DA | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 10 | 0 | - |
| 0x21F2DB | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 11 | 0 | - |
| 0x21F2DC | HVS: CSC Funktion: Kurzschluss nach Masse einer T-Messung aufgetreten in Modul 12 | 0 | - |
| 0xCAC486 | A-CAN: Steuerungsmodul BUS OFF | 1 | - |
| 0xCACBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehler nur für Testzwecke | 0 | - |
| 0xCAD400 | Botschaft (Status E-Motor 1, 0x10F) fehlt | 1 | - |
| 0xCAD401 | Botschaft Außentemperatur, 0x2CA) fehlt | 1 | - |
| 0xCAD405 | Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8) fehlt | 1 | - |
| 0xCAD407 | Botschaft (Fahrgestellnummer, 0x380) fehlt | 1 | - |
| 0xCAD408 | Botschaft (Fahrgzustand, 0x3A0) fehlt | 1 | - |
| 0xCAD409 | Botschaft (Freigabe Kühlung Hochvolt-Batterie, 0x37B) fehlt | 1 | - |
| 0xCAD40A | Botschaft (Geschwindigkeit, 0x1A1) fehlt | 1 | - |
| 0xCAD40B | Botschaft (Kilometerstand/Reichweite, 0x330) fehlt | 1 | - |
| 0xCAD40C | Botschaft (Klemmen, 0x12F) fehlt | 1 | - |
| 0xCAD40F | Botschaft (Status DCDC, 0x429) fehlt | 1 | - |
| 0xCAD410 | Botschaft (Status Hybrid 2, 0x418) fehlt | 1 | - |
| 0xCAD411 | Botschaft (Steuerung Crash, 0x19B) fehlt | 1 | - |
| 0xCAD413 | Botschaft (Vorgabe Hochvoltspeicher, 0x433) fehlt | 1 | - |
| 0xCAD414 | Botschaft (ZV und Klappenzustand, 0x2FC) fehlt | 1 | - |
| 0xCAD415 | Botschaft (Trennschalter HVS, 0x10B) fehlt | 1 | - |
| 0xCAD416 | Schnittstelle AE (Vorgabe Trennschalter Hochvoltspeicher, 0x10B): Signal ungültig | 1 | - |
| 0xCAD420 | Botschaft (Daten Komfort Ladeelektronik, 0x150) fehlt | 1 | - |
| 0xCAD421 | Botschaft (Daten Ladeelektronik, 0x108) fehlt | 1 | - |
| 0xCAD422 | Botschaft (Daten E-Motor Traktion, 0x100) fehlt | 1 | - |
| 0xCAD423 | Botschaft (Status Daten E-Motor, 0x29D) fehlt | 1 | - |
| 0xCAD424 | Botschaft (Kurzzeit E-Motor, 0xA8) fehlt | 1 | - |
| 0xCAD425 | Botschaft (Betriebsart E-Motor Traktion, 0x2E8) fehlt | 1 | - |
| 0xCAD426 | Botschaft (Ladestatus, 0x3E9) fehlt | 1 | - |
| 0xCAD427 | CAN-Botschaft ungültig DT_EL_GEY | 1 | - |
| 0xCAD428 | Botschaft (Steuerung Teilnetze, 0x19E) fehlt | 1 | - |
| 0xCAD429 | Botschaft (Prognose Fahrt Info, 0x3CA) fehlt | 1 | - |
| 0xCAD42A | Botschaft (Gleichstrom Laden, 0x2B2) fehlt | 1 | - |
| 0xCAD42B | Botschaft (Schalter Fahrdynamik, 0x3A7) fehlt | 1 | - |
| 0xCAD42C | Botschaft (Wärmemanagement Motorsteuerung, 0x1B9) fehlt | 1 | - |
| 0xCAF400 | Botschaft Relativzeit (0x328): Ausfall | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x65E0 | Spannung Kl. 30F | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x65E1 | Spannung Kl. 30C | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x65E2 | Spannung HV | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E3 | Spannung HV_LINK | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65E4 | Strom HV | A | High | unsigned int | - | 1.0 | 10.0 | -819.2 |
| 0x65E5 | Batterietemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E6 | Kühlertemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E7 | SOC (State of Charge) | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E8 | Status Statemachine | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65E9 | Status Laden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65EA | Isolationswiderstand DC | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EB | Isolationswiderstand intern | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EC | Teilnetz laden aktiv | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65ED | minimale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65EE | maximale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65EF | minimaler delta-SOC | % | High | unsigned char | - | 4.0 | 10.0 | -50.0 |
| 0x65F0 | maximaler delta-SOC | % | High | unsigned char | - | 4.0 | 10.0 | -50.0 |
| 0x65F1 | minimaler Innenwiderstandsfaktor | - | High | unsigned char | - | 1.0 | 20.0 | 0.0 |
| 0x65F2 | maximaler Innenwiderstandsfaktor | - | High | unsigned char | - | 1.0 | 20.0 | 0.0 |
| 0x65F3 | minimale Modultemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F4 | maximale Modultemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F7 | maximale T-Spreizung eines Moduls | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65F8 | Spannung HV Zellsummenspannung | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65F9 | Spannung HV Modulsummenspannung | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65FA | RTC Absolutzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x65FB | aktuelle Gesamtkapazitätt | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65FE | CSC Bitindex zu NTC_HW1/2 (MON) Fehlerbit 9 | HEX | High | unsigned int | - | - | - | - |
| 0x65FF | CSC Bitindex zu Referenzspannung LTC6802 (BAT) ausserhalb Bereich Fehlerbit 10 | HEX | High | unsigned int | - | - | - | - |
| 0x6600 | CSC Bitindex zu thermisches Abschalten aufgetreten Fehlerbit 11 | HEX | High | unsigned int | - | - | - | - |
| 0x6602 | CSC Bitindex zu CSC Wake-Up defekt Fehlerbit 14 | HEX | High | unsigned int | - | - | - | - |
| 0x6603 | CSC Bitindex zu Kommunikation Frontend/CSC fehlgeschlagen Fehlerbit 15 | HEX | High | unsigned int | - | - | - | - |
| 0x6604 | CSC Bitindex zu Referenzspannung LTC6801 (MON) ausserhalb Bereich Fehlerbit 16 | HEX | High | unsigned int | - | - | - | - |
| 0x6605 | CSC Bitindex zu ADC-Test 1 LTC6802 nicht bestanden Fehlerbit 18 | HEX | High | unsigned int | - | - | - | - |
| 0x6606 | CSC Bitindex zu ADC-Test 1 LTC6802 nicht bestanden Fehlerbit 18 | HEX | High | unsigned int | - | - | - | - |
| 0x6607 | CSC Bitindex zu LTC6801 Selbsttest nicht bestanden Fehlerbit 20 | HEX | High | unsigned int | - | - | - | - |
| 0x6608 | CSC Bitindex zu RAM Selbsttest nicht bestanden Fehlerbit 21 | HEX | High | unsigned int | - | - | - | - |
| 0x6609 | CSC Bitindex zu ROM Selbsttest nicht bestanden Fehlerbit 22 | HEX | High | unsigned int | - | - | - | - |
| 0x660A | CSC Bitindex zu Plausibilitätsfehler Zellspannung Fehlerbit 25 | HEX | High | unsigned int | - | - | - | - |
| 0x660B | CSC Bitindex zu Plausibilitätsfehler Zelltemperatur Fehlerbit 26 | HEX | High | unsigned int | - | - | - | - |
| 0x660C | CSC Bitindex zu Test auf offene Leitung nicht durchgefuehrt Fehlerbit 28 | HEX | High | unsigned int | - | - | - | - |
| 0x660D | CSC Bitindex zu Reissleine fehlerhaft gezogen, PWM OK Fehlerbit 29 | HEX | High | unsigned int | - | - | - | - |
| 0x660E | CSC Bitindex zu Reissleine fehlerhaft nicht gezogen, PWM nicht OK Fehlerbit 30 | HEX | High | unsigned int | - | - | - | - |
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
| 0x070000 | DM_ZEITBOTSCHAFTTIMEOUT | 0 | - |
| 0x070001 | DM_QUEUE_DELETED | 0 | - |
| 0x070002 | DM_QUEUE_FULL | 0 | - |
| 0x070003 | NVM_E_WRITE_FAILED | 0 | - |
| 0x070004 | NVM_E_READ_FAILED | 0 | - |
| 0x070005 | NVM_E_CONTROL_FAILED | 0 | - |
| 0x070006 | NVM_E_ERASE_FAILED | 0 | - |
| 0x070007 | NVM_E_WRITE_ALL_FAILED | 0 | - |
| 0x070008 | NVM_E_WRONG_CONFIG_ID | 0 | - |
| 0x070009 | NVM_E_READ_ALL_FAILED | 0 | - |
| 0x07000A | VSM_EVENT_VEHICLESTATE | 0 | - |
| 0x07000B | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x07000C | NVM_E_REQ_FAILED | 0 | - |
| 0x21F029 | HVS: U/i-Sensor -  Fehler Spannungsversorgung Frontend Baustein | 0 | - |
| 0x21F02A | HVS: CPI - Speicherkühlung nicht ausreichend | 0 | - |
| 0x21F02B | HVS: U/i-Sensor -  Fehler Kalibrierungsdaten Frontendbaustein | 0 | - |
| 0x21F02C | HVS: U/i-Sensor -  Leitungsbruch Strompfad | 0 | - |
| 0x21F02D | U/i-Sensor:  Fehler in der Konfiguration des Frontendbausteins | 0 | - |
| 0x21F052 | HVS SBOX -  Temperaturmesswert ungueltig | 0 | - |
| 0x21F137 | HVS: Batteriealterung: SOH niedrig (Warnschwelle) | 0 | - |
| 0x21F143 | HVS: Entladeschutz aktiv, CSC im Standby | 0 | - |
| 0x21F162 | SME: unerwarteter Powerdown festgestellt | 0 | - |
| 0x21F163 | SME: Temperatur zu hoch | 0 | - |
| 0x21F164 | HVS: Isolationsüberwachung -  Fehler des Iso Messkontakts | 0 | - |
| 0x21F165 | HVS: Isolationüberwachung -  Isolationsfehler im Gesamtsystem (geschlossene Schütze)  ungültig | 0 | - |
| 0x21F166 | HVS: Isolationsüberwachung -  Offsetspannung ungültig | 0 | - |
| 0x21F167 | HVS: Isolationsüberwachung -  HV Batteriespannung (Referenz) außerhalb Bereich | 0 | - |
| 0x21F169 | HVS: U/i-Sensor - Referenztest ungültig | 0 | - |
| 0x21F16A | HVS: U/i-Sensor - Abschaltpfadtest CY nicht erfolgreich | 0 | - |
| 0x21F16B | HVS: U/i-Sensor - Mehr als 10 ungültige Strommessungen | 0 | - |
| 0x21F16C | HVS: U/i-Sensor - Sensortemperatur außerhalb Bereich | 0 | - |
| 0x21F16D | HVS: U/i-Sensor -  unerwarteter Reset | 0 | - |
| 0x21F16E | HVS: U/i-Sensor -  Diagnose Timeout | 0 | - |
| 0x21F16F | HVS: U/i-Sensor -  falscher Messmodus eingestellt | 0 | - |
| 0x21F170 | HVS: CSC CAN: unvollstaendige CAN Daten Modultemperaturen | 0 | - |
| 0x21F171 | HVS: CSC CAN: unvollstaendige CAN Daten Einzelzellspannungen | 0 | - |
| 0x21F172 | HVS: CSC CAN: unvollstaendige CAN Daten Modulspannungen | 0 | - |
| 0x21F173 | HVS: CSC Funktion: Opmode-Befehl nicht akzeptiert | 0 | - |
| 0x21F174 | HVS: Hauptschalter: Warnung Schützalterung | 0 | - |
| 0x21F175 | Stromüberwachung: Gewährleistungsüberschreitung Strombegrenzung Laden | 0 | - |
| 0x21F176 | Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung (Gewährleistung) | 0 | - |
| 0x21F177 | Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung (Gewährleistung) | 0 | - |
| 0x21F178 | Isolationsüberwachung -  Isolationsmessung im Gesamtsystem unplausibel (geschlossene Schütze) | 0 | - |
| 0x21F179 | HVS: Isolationsüberwachung -  interne Isolationsmessung unplausibel | 0 | - |
| 0x21F17A | Vorladung -  falsche Stromrichtung | 1 | - |
| 0x21F17B | Klemme 15: unplausibel / Fehler | 1 | - |
| 0x21F17C | Plausibilität Stromwert -  Prüfung nicht möglich | 0 | - |
| 0x21F17F | Ladungszustand:SoC unplausibel | 0 | - |
| 0x21F180 | HVS: Zellüberwachung: Zellspannungen stark unterschiedlich | 0 | - |
| 0x21F181 | HVS: Zellüberwachung: Zellwiderstände stark unterschiedlich | 0 | - |
| 0x21F182 | Drosselung -  Herabsetzung der Entladungsstromgrenze wegen Temperatur / SOC-Grenze | 0 | - |
| 0x21F183 | Drosselung -  Herabsetzung der Ladungsstromgrenze wegen Temperatur / SOC-Grenze | 0 | - |
| 0x21F184 | HVS: Aufstartdauer zu lang | 0 | - |
| 0x21F185 | ADC_E_TIMEOUT | 0 | - |
| 0x21F186 | COMM_E_NET_START_IND_CHANNEL_0 | 0 | - |
| 0x21F187 | COMM_E_START_Tx_TIMEOUT_C0 | 0 | - |
| 0x21F188 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 | - |
| 0x21F189 | DEM_EVENT_1 | 0 | - |
| 0x21F18A | DEM_EVENT_2 | 0 | - |
| 0x21F18B | DEM_EVENT_3 | 0 | - |
| 0x21F18C | DEM_EVENT_4 | 0 | - |
| 0x21F18D | DEM_EVENT_5 | 0 | - |
| 0x21F18E | DEM_EVENT_6 | 0 | - |
| 0x21F18F | DEM_EVENT_7 | 0 | - |
| 0x21F190 | DEM_EVENT_8 | 0 | - |
| 0x21F191 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x21F192 | FEE_E_CACHE_READ | 0 | - |
| 0x21F193 | FEE_E_GC_ERASE | 0 | - |
| 0x21F194 | FEE_E_GC_READ | 0 | - |
| 0x21F195 | FEE_E_GC_WRITE | 0 | - |
| 0x21F196 | FEE_E_INIT | 0 | - |
| 0x21F197 | FEE_E_INVALIDATE | 0 | - |
| 0x21F198 | FEE_E_READ | 0 | - |
| 0x21F199 | FEE_E_WRITE | 0 | - |
| 0x21F19A | FEE_E_WRITE_CYCLES_EXHAUSTED | 0 | - |
| 0x21F19B | FEE_E_WRITE_FAILED | 0 | - |
| 0x21F19C | FILL_EVENT_1 | 0 | - |
| 0x21F19D | FRIF_E_JLE_SYNC | 0 | - |
| 0x21F19E | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 | - |
| 0x21F19F | FR_E_ACCESS | 0 | - |
| 0x21F1A0 | IPDUM_E_TRANSMIT_FAILED | 0 | - |
| 0x21F1A1 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x21F1A2 | MCU_E_HCLOCK_0_FAILURE | 0 | - |
| 0x21F1A3 | MCU_E_HCLOCK_1_FAILURE | 0 | - |
| 0x21F1A4 | MCU_E_LCLOCK_0_FAILURE | 0 | - |
| 0x21F1A5 | MCU_E_LCLOCK_1_FAILURE | 0 | - |
| 0x21F1A6 | MCU_E_LOCK_0_FAILURE | 0 | - |
| 0x21F1A7 | MCU_E_LOCK_1_FAILURE | 0 | - |
| 0x21F1A8 | MCU_E_LOCK_FAILURE | 0 | - |
| 0x21F1A9 | MCU_E_QUARTZ_FAILURE | 0 | - |
| 0x21F1AA | MCU_E_RCCLOCK_0_FAILURE | 0 | - |
| 0x21F1AB | MCU_E_RCCLOCK_1_FAILURE | 0 | - |
| 0x21F1AC | MCU_E_RC_MEASURE | 0 | - |
| 0x21F1AD | MCU_E_TIMEOUT_OSC_STABILITY | 0 | - |
| 0x21F1AE | MCU_E_TIMEOUT_TRANSITION | 0 | - |
| 0x21F1AF | PWM_E_UNEXPECTED_IRQ | 0 | - |
| 0x21F1B0 | SPI_E_TIMEOUT | 0 | - |
| 0x21F1B1 | DUMMY_01 | 0 | - |
| 0x21F1B2 | WDGM_E_ALIVE_SUPERVISION | 0 | - |
| 0x21F1B3 | WDGM_E_SET_MODE | 0 | - |
| 0x21F1B4 | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x21F1B5 | WDG_E_MISS_TRIGGER | 0 | - |
| 0x21F1B6 | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x21F1B7 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 | - |
| 0x21F1B8 | CANNM_E_INIT_FAILED | 0 | - |
| 0x21F1B9 | CANNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x21F1BA | CANNM_E_TX_PATH_FAILED | 0 | - |
| 0x21F1BB | CANSM_E_BUSOFF_NETWORK_0 | 0 | - |
| 0x21F1BC | CANTP_E_COMM | 0 | - |
| 0x21F1BD | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 16 festgestellt | 0 | - |
| 0x21F1BF | CNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x21F1C0 | CNM_E_TX_PATH_FAILED | 0 | - |
| 0x21F1E1 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 1 festgestellt | 0 | - |
| 0x21F1E2 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 2 festgestellt | 0 | - |
| 0x21F1E3 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 3 festgestellt | 0 | - |
| 0x21F1E4 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 4 festgestellt | 0 | - |
| 0x21F1E5 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 5 festgestellt | 0 | - |
| 0x21F1E6 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 6 festgestellt | 0 | - |
| 0x21F1E7 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 7 festgestellt | 0 | - |
| 0x21F1E8 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 8 festgestellt | 0 | - |
| 0x21F1E9 | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 9 festgestellt | 0 | - |
| 0x21F1EA | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 10 festgestellt | 0 | - |
| 0x21F1EB | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 11 festgestellt | 0 | - |
| 0x21F1EC | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 12 festgestellt | 0 | - |
| 0x21F1ED | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 13 festgestellt | 0 | - |
| 0x21F1EE | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 14 festgestellt | 0 | - |
| 0x21F1EF | HVS: Zellüberwachung: Zu starke Selbstentladung in Modul 15 festgestellt | 0 | - |
| 0x21F1F0 | FLS_E_ERASE_FAILED | 0 | - |
| 0x21F1F1 | FLS_E_WRITE_FAILED | 0 | - |
| 0x21F1F2 | FLS_E_READ_FAILED | 0 | - |
| 0x21F1F3 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x21F1F4 | FLS_E_OPER | 0 | - |
| 0x21F1F5 | FLS_E_PROTECTION_FAILED | 0 | - |
| 0x21F1F6 | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x21F282 | HVS: Batteriealterung: Online-Kapazitätsbestimmung veraltet | 0 | - |
| 0x21F28B | HVS: Zelltemperaturen - Hohe Temperaturspreizung erkannt | 0 | - |
| 0x21F290 | HVS: U/i-Sensor - CAN Receive Pufferüberlauf | 0 | - |
| 0x21F291 | HVS: SBOX: Hohe Temperatur, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F293 | MPU: Speicherzugriffsfehler | 0 | - |
| 0x21F2A7 | FLS_E_HW_FAILED | 0 | - |
| 0x21F2A8 | FLS_E_TIMEOUT | 0 | - |
| 0x21F2C0 | HVS: Speicher Dauerstrombelastung in kritischen Bereich, temporäre Reduzierung Dauerstromgrenze | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x65E0 | Spannung Kl. 30F | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x65E1 | Spannung Kl. 30C | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x65E2 | Spannung HV | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E3 | Spannung HV_LINK | V | High | unsigned int | - | 1.0 | 5.0 | 0.0 |
| 0x65E4 | Strom HV | A | High | unsigned int | - | 1.0 | 10.0 | -819.2 |
| 0x65E5 | Batterietemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E6 | Kühlertemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65E7 | SOC (State of Charge) | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x65E8 | Status Statemachine | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65E9 | Status Laden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65EA | Isolationswiderstand DC | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EB | Isolationswiderstand intern | kOhm | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x65EC | Teilnetz laden aktiv | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65ED | minimale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65EE | maximale Zellspannung | V | High | unsigned int | - | 1.0 | 500.0 | 0.0 |
| 0x65EF | minimaler delta-SOC | % | High | unsigned char | - | 4.0 | 10.0 | -50.0 |
| 0x65F0 | maximaler delta-SOC | % | High | unsigned char | - | 4.0 | 10.0 | -50.0 |
| 0x65F3 | minimale Modultemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F4 | maximale Modultemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65F7 | maximale T-Spreizung eines Moduls | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x65FA | RTC Absolutzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x65FB | aktuelle Gesamtkapazitätt | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x660B | CSC Bitindex zu Plausibilitätsfehler Zelltemperatur Fehlerbit 26 | HEX | High | unsigned int | - | - | - | - |
| 0x6620 | Verlustenergie pro Observezeit in [Ws/min] | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6621 | Gemessener Temperaturgradient CPI in [K/min] | - | High | unsigned int | - | 1.0 | 100.0 | -10.0 |
| 0x6623 | Status Klimaanlage | 0-n | High | 0xFF | TAB_FRT_AC_STATUS | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### KL30C

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | aktiv |
| 0x03 | ungültig |

### RES_0X651D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVERLOAD_K1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Schütz K1 |
| STAT_OVERLOAD_K2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Schütz K2 |
| STAT_OVERLOAD_K3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Schütz K3 |
| STAT_OVERLOAD_COOLING_VALVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Kühlventil |
| STAT_OVERLOAD_CSC_SUPPLY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler CSC Versorgung |
| STAT_OVERLOAD_ISENS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Stromsensor |
| STAT_OVERLOAD_COOLING_PUMP_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Kühlmittelpumpe |
| STAT_OVERLOAD_HEATING_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Überlastzähler Heizung |

### RES_0XAD5E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMMUNIKATION_AVL_ISRE | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Aktueller Sendestatus AVL_ISRE (0 = Signal wird nicht gesendet, 1 = Signal wird auf Fahrzeugbus gesendet) |

### RES_0XAD61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSUNG_ERFOLGREICH | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ERFOLGREICH | 1.0 | 1.0 | 0.0 | aktueller Zustand Isolationsmessung |
| STAT_MESSUNG_ISOLATIONSFEHLER | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ISOLATIONSFEHLER | 1.0 | 1.0 | 0.0 | aktueller Zustand des Isolationsfehlers |

### RES_0XAD66_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPAZITAET_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kapazitätsschätzwert in % (Wertebereich 0-100%) bezogen auf Nennkapazität |
| STAT_AKTUELLER_ZUSTAND_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SME_ERMITTLUNG | - | - | - | Rückgabe Ermittlung läuft, erfolgreich oder mit Fehler beendet |

### RES_0XAD6A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZUNG_AKTIV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_HVS_HEIZUNG_ZUSTAND | - | - | - | Zustand der Heizung |

### RES_0XAD6B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM | - | - | + | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_ERGEBNISSE | - | - | - | Status der Symmetrierung |

### RES_0XAD6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODULSPANNUNG_UNPLAUSIBEL_EIN | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Spannungswert in Modul x als plausibel / unplausibel (0 = kein Fehler / 1 = Fehler) detektiert |

### RES_0XAD6D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODULTEMPERATUR_WERT | - | - | + | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gemessene Modultemperatur des Moduls x |

### RES_0XAD6E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | aktuell gemessener Spannungswert der Zelle x |

### RES_0XAD6F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVON_MOD_MIN_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MOD_MIN_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MOD_MIN_3_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MOD_MIN_4_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MOD_MIN_5_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MOD_MIN_6_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MOD_MIN_7_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der niedrigsten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse:  TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_3_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_4_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_5_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_6_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MOD_MAX_7_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der größten gemessenen Zelltemperatur des Modul x  bei geschlossen Schützen in der Klasse:  TmodMax > 80°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse:  TmodMean <= -20°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_3_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_4_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_5_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_6_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_7_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_8_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_9_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_10_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_11_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_NO_OP_MOD_MEAN_12_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der berechneten durchschnittlichen Zelltemperatur des Modul x  bei offenen Schützen in der Klasse: TmodMean > 80°C |

### RES_0XAD70_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVER_VOLT_INT_LIM_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_over] Fehlerschwellwert des ÜBERspannungsintegrals (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) |
| STAT_UNDER_VOLT_INT_LIM_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_under] Fehlerschwellwert des UNTERspannungsintegrals (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) |
| STAT_HIS_ERR_LIM_SPANNUNG_UNDER_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Laden in der  Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_UNDER_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Laden in der  Klasse: UerrInt_under > UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_OVER_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Laden in der  Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_OVER_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Laden in der  Klasse: UerrInt_over > UerrIntLim_over |

### RES_0XAD71_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_LIM_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für minimale Spannung in Volt (projektspezifischer UminLim) |
| STAT_SPANNUNG_MAX_LIM_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für maximale Spannung in Volt (projektspezifischer UmaxLim) |
| STAT_HIS_SPANNUNG_MOD_1_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse UminLim <= U <= 3.57 (I12) bzw. UminLim <= U <= 3.82 (I01) (SBL) |
| STAT_HIS_SPANNUNG_MOD_2_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse  3.57 < U <= 3.77 (I12) bzw. 3.82 < U <= 3.91 (I01) (SBL) |
| STAT_HIS_SPANNUNG_MOD_3_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse  3.77 < U <= 3.93 (I12) bzw. 3.91 < U <= 4.03 (I01) (SBL) |
| STAT_HIS_SPANNUNG_MOD_4_WERT | - | - | + | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim (I12) bzw. 4.03 < U <= UmaxLim (I01) (SBL) |

### RES_0XAD73_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZUNG_FUNKTION_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SME_HEIZUNG_FUNKTION | - | - | - | Ergebniss der funktionalen Heizungsdiagnose |

### RES_0XAD74_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLINDIVIDUELLE_DELTA_SOCS_WERT | - | - | + | % | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Zelle desen Delta SOC ermittelt werden soll >> Dieser Job wird nicht mehr unterstützt und ist NULL-bedatet. |
| STAT_ANZAHL_FAHRZYKLEN_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der kalibrierbaren Fahrzyklen >> Dieser Job wird nicht mehr unterstützt und ist NULL-bedatet. |

### RES_0XAD75_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM | - | - | + | 0-n | high | unsigned char | - | TAB_SYM | - | - | - | Status der Symmetrierung |

### RES_0XAD76_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DMC_CSCX_TEXT | - | - | + | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | Der DMC vom CSC x (x= Modulnummer) |

### RES_0XAD77_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_KAPAZITAET_MOD_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von Modul x |

### RES_0XAD78_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_INNENWIEDERSTANDSFAKTOR_MOD_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler Widerstandsfaktor (0-5) von Modul x |

### RES_0XAD79_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_SOH | - | - | + | 0-n | high | unsigned char | - | ALTERUNGSSTATUS | - | - | - | Alterungsstatus des Modul x |

### RES_0XAD7A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SBOX_TAUSCH_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der geschehenen SBOX Tauschs |

### RES_0XAD7C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_LIM_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für minimale Spannung in Volt (projektspezifischer UminLim) |
| STAT_SPANNUNG_MAX_LIM_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für maximale Spannung in Volt (projektspezifischer UmaxLim) |
| STAT_HIS_SPANNUNG_NOP_MOD_1_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in 100ms in der Klasse U < UminLim (SBL) |
| STAT_HIS_SPANNUNG_NOP_MOD_2_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in 100ms in der Klasse UminLim <= U <= 3.57 (I12) bzw. UminLim <= U <= 3.82 (I01) (SBL) |
| STAT_HIS_SPANNUNG_NOP_MOD_3_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in 100ms in der Klasse 3.57 < U <= 3.93 (I12) bzw.  3.82 < U <= 3.91 (I01) (SBL) |
| STAT_HIS_SPANNUNG_NOP_MOD_4_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in 100ms in der Klasse 3.93 < U <= UmaxLim (I12) bzw. 3.91 < U <= UmaxLim (I01) (SBL) |

### RES_0XAD7D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLPACK_DMC_TEXT | - | - | + | TEXT | high | string[28] | - | - | 1.0 | 1.0 | 0.0 | DMC von Zellpack/Modul x (28-stellig) |

### RES_0XD4C5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRUND_REKAL_1 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-1 |
| STAT_ZEITPUNKT_REKAL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-1 |
| STAT_HVOFFTIME_REKAL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-1 |
| STAT_TEMP_MESS_MEAN_VOR_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-1 |
| STAT_TEMP_MESS_MEAN_NACH_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-1 |
| STAT_UCEL_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-1 |
| STAT_UCEL_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-1 |
| STAT_UCEL_MEAN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-1 |
| STAT_SOC_MIN_NENN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-1 |
| STAT_SOC_MAX_NENN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-1 |
| STAT_SOC_MEAN_NENN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-1 |
| STAT_SOC_MIN_NENN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-1 |
| STAT_SOC_MAX_NENN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-1 |
| STAT_SOC_MEAN_NENN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-1 |
| STAT_SOC_MIN_AKT_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-1 |
| STAT_SOC_MAX_AKT_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-1 |
| STAT_SOC_MEAN_AKT_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-1 |
| STAT_SOC_MIN_AKT_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-1 |
| STAT_SOC_MAX_AKT_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-1 |
| STAT_SOC_MEAN_AKT_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-1 |
| STAT_SOH_MIN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-1 |
| STAT_SOH_MAX_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-1 |
| STAT_SOH_MEAN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-1 |
| STAT_SOC_BAND_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-1 |
| STAT_SOC_BAND_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-1 |
| STAT_GRUND_REKAL_2 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-2 |
| STAT_ZEITPUNKT_REKAL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-2 |
| STAT_HVOFFTIME_REKAL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-2 |
| STAT_TEMP_MESS_MEAN_VOR_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-2 |
| STAT_TEMP_MESS_MEAN_NACH_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-2 |
| STAT_UCEL_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-2 |
| STAT_UCEL_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-2 |
| STAT_UCEL_MEAN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-2 |
| STAT_SOC_MIN_NENN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-2 |
| STAT_SOC_MAX_NENN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-2 |
| STAT_SOC_MEAN_NENN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-2 |
| STAT_SOC_MIN_NENN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-2 |
| STAT_SOC_MAX_NENN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-2 |
| STAT_SOC_MEAN_NENN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-2 |
| STAT_SOC_MIN_AKT_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-2 |
| STAT_SOC_MAX_AKT_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-2 |
| STAT_SOC_MEAN_AKT_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-2 |
| STAT_SOC_MIN_AKT_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-2 |
| STAT_SOC_MAX_AKT_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-2 |
| STAT_SOC_MEAN_AKT_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-2 |
| STAT_SOH_MIN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-2 |
| STAT_SOH_MAX_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-2 |
| STAT_SOH_MEAN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-2 |
| STAT_SOC_BAND_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-2 |
| STAT_SOC_BAND_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-2 |
| STAT_GRUND_REKAL_3 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-3 |
| STAT_ZEITPUNKT_REKAL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-3 |
| STAT_HVOFFTIME_REKAL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-3 |
| STAT_TEMP_MESS_MEAN_VOR_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-3 |
| STAT_TEMP_MESS_MEAN_NACH_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-3 |
| STAT_UCEL_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-3 |
| STAT_UCEL_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-3 |
| STAT_UCEL_MEAN_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-3 |
| STAT_SOC_MIN_NENN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-3 |
| STAT_SOC_MAX_NENN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-3 |
| STAT_SOC_MEAN_NENN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-3 |
| STAT_SOC_MIN_NENN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-3 |
| STAT_SOC_MAX_NENN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-3 |
| STAT_SOC_MEAN_NENN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-3 |
| STAT_SOC_MIN_AKT_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-3 |
| STAT_SOC_MAX_AKT_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-3 |
| STAT_SOC_MEAN_AKT_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-3 |
| STAT_SOC_MIN_AKT_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-3 |
| STAT_SOC_MAX_AKT_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-3 |
| STAT_SOC_MEAN_AKT_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-3 |
| STAT_SOH_MIN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-3 |
| STAT_SOH_MAX_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-3 |
| STAT_SOH_MEAN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-3 |
| STAT_SOC_BAND_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-3 |
| STAT_SOC_BAND_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-3 |
| STAT_GRUND_REKAL_4 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-4 |
| STAT_ZEITPUNKT_REKAL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-4 |
| STAT_HVOFFTIME_REKAL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-4 |
| STAT_TEMP_MESS_MEAN_VOR_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-4 |
| STAT_TEMP_MESS_MEAN_NACH_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-4 |
| STAT_UCEL_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-4 |
| STAT_UCEL_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-4 |
| STAT_UCEL_MEAN_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-4 |
| STAT_SOC_MIN_NENN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-4 |
| STAT_SOC_MAX_NENN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-4 |
| STAT_SOC_MEAN_NENN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-4 |
| STAT_SOC_MIN_NENN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-4 |
| STAT_SOC_MAX_NENN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-4 |
| STAT_SOC_MEAN_NENN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-4 |
| STAT_SOC_MIN_AKT_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-4 |
| STAT_SOC_MAX_AKT_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-4 |
| STAT_SOC_MEAN_AKT_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-4 |
| STAT_SOC_MIN_AKT_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-4 |
| STAT_SOC_MAX_AKT_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-4 |
| STAT_SOC_MEAN_AKT_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-4 |
| STAT_SOH_MIN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-4 |
| STAT_SOH_MAX_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-4 |
| STAT_SOH_MEAN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-4 |
| STAT_SOC_BAND_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-4 |
| STAT_SOC_BAND_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-4 |
| STAT_GRUND_REKAL_5 | 0-n | high | unsigned char | - | TAB_GR_REKAL | - | - | - | Grund der SOC Rekaibrierung-5 |
| STAT_ZEITPUNKT_REKAL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der Rekalibrierung-5 |
| STAT_HVOFFTIME_REKAL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer, während die Schütze letzmalig geöffnet waren-5 |
| STAT_TEMP_MESS_MEAN_VOR_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene VOR Rekalibrierung-5 |
| STAT_TEMP_MESS_MEAN_NACH_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene NACH Rekalibrierung-5 |
| STAT_UCEL_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-5 |
| STAT_UCEL_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-5 |
| STAT_UCEL_MEAN_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Zellspannung. Wenn  OCV reached  == U_init SONST == Uakt-5 |
| STAT_SOC_MIN_NENN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC VOR Rekalibrierung-5 |
| STAT_SOC_MAX_NENN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC VOR Rekalibrierung-5 |
| STAT_SOC_MEAN_NENN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC VOR Rekalibrierung-5 |
| STAT_SOC_MIN_NENN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC NACH Rekalibrierung-5 |
| STAT_SOC_MAX_NENN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler NennSOC NACH Rekalibrierung-5 |
| STAT_SOC_MEAN_NENN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer NennSOC NACH Rekalibrierung-5 |
| STAT_SOC_MIN_AKT_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC VOR Rekalibrierung-5 |
| STAT_SOC_MAX_AKT_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC VOR Rekalibrierung-5 |
| STAT_SOC_MEAN_AKT_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC VOR Rekalibrierung-5 |
| STAT_SOC_MIN_AKT_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler AktSOC NACH Rekalibrierung-5 |
| STAT_SOC_MAX_AKT_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC NACH Rekalibrierung-5 |
| STAT_SOC_MEAN_AKT_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer AktSOC NACH Rekalibrierung-5 |
| STAT_SOH_MIN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH zum Zeitpunkt der Rekalibrierung-5 |
| STAT_SOH_MAX_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH zum Zeitpunkt der Rekalibrierung-5 |
| STAT_SOH_MEAN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH zum Zeitpunkt der Rekalibrierung-5 |
| STAT_SOC_BAND_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite VOR Rekalibrierung-5 |
| STAT_SOC_BAND_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC Bandbreite NACH Rekalibrierung-5 |

### RES_0XD4C6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AH_CUMULATIVE_ENT_LADUNG_1_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_1_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN1_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN2_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_1_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_1_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_1_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_2_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_2_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_2_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_2_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_2_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_3_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_3_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_3_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_3_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_3_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_4_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_4_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_4_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_4_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_4_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ENT_LADUNG_5_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_AH_CUMULATIVE_ADAPTION_5_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_WH_CUMULATIVE_ENT_LADUNG_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_ZELLE1_VOR_NACH_ADAPT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_VOR_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_TEMP_MESS_MEAN_NACH_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_ZEITPUNKT_ADAP_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP1_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_HVOFFTIME_ADAP2_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MIN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MAX_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_UCEL_MEAN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC1_CELL_5_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_OVC2_CELL_5_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_5_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MIN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MAX_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |
| STAT_SOH_MEAN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') |

### RES_0XD4C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_SOC_GUETE_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes in der Klasse: 0 <= GW < 3 |
| STAT_HIS_SOC_GUETE_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes in der Klasse: 3 <= GW < 7 |
| STAT_HIS_SOC_GUETE_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes in der Klasse: 7 <= GW < 20 |
| STAT_HIS_SOC_GUETE_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes in der Klasse: 20 <= GW < 30 |
| STAT_HIS_SOC_GUETE_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufenthaltsdauer des SOC Gütewertes in der Klasse:  GW > 30 |

### RES_0XD4CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MIN_NENN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-1 |
| STAT_SOC_MIN_NENN_WENN_VOLL_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-1 |
| STAT_SOC_MAX_AKT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-1 |
| STAT_SOC_MAX_AKT_WENN_VOLL_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-1 |
| STAT_TEMP_LADEBEGINN_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-1 |
| STAT_TEMP_LADEENDE_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-1 |
| STAT_SOC_MIN_NENN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-2 |
| STAT_SOC_MIN_NENN_WENN_VOLL_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-2 |
| STAT_SOC_MAX_AKT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-2 |
| STAT_SOC_MAX_AKT_WENN_VOLL_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-2 |
| STAT_TEMP_LADEBEGINN_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-2 |
| STAT_TEMP_LADEENDE_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-2 |
| STAT_SOC_MIN_NENN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-3 |
| STAT_SOC_MIN_NENN_WENN_VOLL_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-3 |
| STAT_SOC_MAX_AKT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-3 |
| STAT_SOC_MAX_AKT_WENN_VOLL_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-3 |
| STAT_TEMP_LADEBEGINN_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-3 |
| STAT_TEMP_LADEENDE_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-3 |
| STAT_SOC_MIN_NENN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-4 |
| STAT_SOC_MIN_NENN_WENN_VOLL_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-4 |
| STAT_SOC_MAX_AKT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-4 |
| STAT_SOC_MAX_AKT_WENN_VOLL_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-4 |
| STAT_TEMP_LADEBEGINN_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-4 |
| STAT_TEMP_LADEENDE_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-4 |
| STAT_SOC_MIN_NENN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler NennSOC nach U/I Vollladeende-5 |
| STAT_SOC_MIN_NENN_WENN_VOLL_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des minimalen NennSOC nach U/I Vollladeende-5 |
| STAT_SOC_MAX_AKT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler AktSOC nach U/I Vollladeende-5 |
| STAT_SOC_MAX_AKT_WENN_VOLL_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Prognosewert des maximalen AktSOC nach U/I Vollladeende-5 |
| STAT_TEMP_LADEBEGINN_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladebeginn-5 |
| STAT_TEMP_LADEENDE_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Messtemperatur auf HVS-Ebene zu Ladeende-5 |

### RES_0XD4CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLDAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Kühldauer [tmax] (projektspezifisch) |
| STAT_KUEHLDAUER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: 0 < t <= tmax*0.25 |
| STAT_KUEHLDAUER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: 0.25*tmax < t <= tmax*0.5 |
| STAT_KUEHLDAUER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: 0.5*tmax < t <= tmax |
| STAT_KUEHLDAUER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse: t > tmax |

### RES_0XD67F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MIN_NENN_01_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_01_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_02_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_02_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_03_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_03_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_04_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_04_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_SOC_MIN_NENN_05_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimaler Ladezustand aller Zellen bezogen auf Nennkapazität |
| STAT_DIFF_SOC_05_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Differenz zwischen dem mittleren und minimalen Ladezsustand aller Zellen bezogen auf Nennkapazität |
| STAT_ID_ZELLE_SOC_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID der Zelle mit kleinstem SoC_min_nenn |
| STAT_COUNTER_RG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler, wie oft der Ringspeicher seit dem letzten Reset beschrieben wurde |

### RES_0XD681_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_KAPA_MOD_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 01 |
| STAT_MIN_KAPA_MOD_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 02 |
| STAT_MIN_KAPA_MOD_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 03 |
| STAT_MIN_KAPA_MOD_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 04 |
| STAT_MIN_KAPA_MOD_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 05 |
| STAT_MIN_KAPA_MOD_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 06 |
| STAT_MIN_KAPA_MOD_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 07 |
| STAT_MIN_KAPA_MOD_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 08 |
| STAT_MIN_KAPA_MOD_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 09 |
| STAT_MIN_KAPA_MOD_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 10 |
| STAT_MIN_KAPA_MOD_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 11 |
| STAT_MIN_KAPA_MOD_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale Kapazität in Prozent von MODUL 12 |

### RES_0XD6C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_R_ISO_TRG_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 01 |
| STAT_R_ISO_QAL_TRG_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 01 |
| STAT_R_ISO_TRG_02_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 02 |
| STAT_R_ISO_QAL_TRG_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 02 |
| STAT_R_ISO_TRG_03_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 03 |
| STAT_R_ISO_QAL_TRG_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 03 |
| STAT_R_ISO_TRG_04_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 04 |
| STAT_R_ISO_QAL_TRG_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 04 |
| STAT_R_ISO_TRG_05_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges [kOhm] WERT 05 |
| STAT_R_ISO_QAL_TRG_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_ges QUAL 05 |

### RES_0XD6C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STD_KM_ISO_01_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 01 |
| STAT_STD_R_ISO_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 01 |
| STAT_STD_R_ISO_QAL_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 01 |
| STAT_STD_KM_ISO_02_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 02 |
| STAT_STD_R_ISO_02_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 02 |
| STAT_STD_R_ISO_QAL_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 02 |
| STAT_STD_KM_ISO_03_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 03 |
| STAT_STD_R_ISO_03_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 03 |
| STAT_STD_R_ISO_QAL_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 03 |
| STAT_STD_KM_ISO_04_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 04 |
| STAT_STD_R_ISO_04_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 04 |
| STAT_STD_R_ISO_QAL_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 04 |
| STAT_STD_KM_ISO_05_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 05 |
| STAT_STD_R_ISO_05_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 05 |
| STAT_STD_R_ISO_QAL_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 05 |
| STAT_STD_KM_ISO_06_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 06 |
| STAT_STD_R_ISO_06_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 06 |
| STAT_STD_R_ISO_QAL_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 06 |
| STAT_STD_KM_ISO_07_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 07 |
| STAT_STD_R_ISO_07_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 07 |
| STAT_STD_R_ISO_QAL_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 07 |
| STAT_STD_KM_ISO_08_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 08 |
| STAT_STD_R_ISO_08_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 08 |
| STAT_STD_R_ISO_QAL_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 08 |
| STAT_STD_KM_ISO_09_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 09 |
| STAT_STD_R_ISO_09_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 09 |
| STAT_STD_R_ISO_QAL_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 09 |
| STAT_STD_KM_ISO_10_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [km] 10 |
| STAT_STD_R_ISO_10_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [kOhm] 10 |
| STAT_STD_R_ISO_QAL_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Standardmessung [-] 10 |

### RES_0XD6C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRG_KM_ISO_01_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 01 |
| STAT_TRG_R_ISO_01_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 01 |
| STAT_TRG_R_ISO_QAL_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 01 |
| STAT_TRG_KM_ISO_02_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 02 |
| STAT_TRG_R_ISO_02_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 02 |
| STAT_TRG_R_ISO_QAL_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 02 |
| STAT_TRG_KM_ISO_03_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 03 |
| STAT_TRG_R_ISO_03_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 03 |
| STAT_TRG_R_ISO_QAL_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 03 |
| STAT_TRG_KM_ISO_04_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 04 |
| STAT_TRG_R_ISO_04_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 04 |
| STAT_TRG_R_ISO_QAL_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 04 |
| STAT_TRG_KM_ISO_05_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 05 |
| STAT_TRG_R_ISO_05_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 05 |
| STAT_TRG_R_ISO_QAL_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 05 |
| STAT_TRG_KM_ISO_06_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 06 |
| STAT_TRG_R_ISO_06_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 06 |
| STAT_TRG_R_ISO_QAL_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 06 |
| STAT_TRG_KM_ISO_07_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 07 |
| STAT_TRG_R_ISO_07_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 07 |
| STAT_TRG_R_ISO_QAL_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 07 |
| STAT_TRG_KM_ISO_08_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 08 |
| STAT_TRG_R_ISO_08_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 08 |
| STAT_TRG_R_ISO_QAL_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 08 |
| STAT_TRG_KM_ISO_09_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 09 |
| STAT_TRG_R_ISO_09_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 09 |
| STAT_TRG_R_ISO_QAL_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 09 |
| STAT_TRG_KM_ISO_10_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [km] 10 |
| STAT_TRG_R_ISO_10_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | R_iso_Wert bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [kOhm] 10 |
| STAT_TRG_R_ISO_QAL_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | R_iso_Qual bei Fehlerschwellenunter-/-überschreitung der R_iso Nachlaufmessung [-] 10 |

### RES_0XD6CA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INPUT_ISO_01_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: Ubat01 [V] |
| STAT_INPUT_ISO_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: Ubat01_QUAL |
| STAT_INPUT_ISO_03_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: Ubat02 [V] |
| STAT_INPUT_ISO_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: Ubat02_QUAL |
| STAT_INPUT_ISO_05_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: Uiso01 [V] |
| STAT_INPUT_ISO_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: Uiso01_QUAL |
| STAT_INPUT_ISO_07_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: Uiso02 [V] |
| STAT_INPUT_ISO_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: Uiso02_QUAL |
| STAT_INPUT_ISO_09_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: Uoffset [V] |
| STAT_INPUT_ISO_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: Uoffset_QUAL |

### RES_0XD6CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLERZAEHLER_STD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LI: Zähler aller aufgetretenen Fehler der Standardmessung |
| STAT_INPUT_ISO_STD_FZ1_01_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat01 [V] |
| STAT_INPUT_ISO_STD_FZ1_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat01_QUAL |
| STAT_INPUT_ISO_STD_FZ1_03_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat02 [V] |
| STAT_INPUT_ISO_STD_FZ1_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat02_QUAL |
| STAT_INPUT_ISO_STD_FZ1_05_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso01 [V] |
| STAT_INPUT_ISO_STD_FZ1_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso01_QUAL |
| STAT_INPUT_ISO_STD_FZ1_07_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso02 [V] |
| STAT_INPUT_ISO_STD_FZ1_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso02_QUAL |
| STAT_INPUT_ISO_STD_FZ1_09_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uoffset [V] |
| STAT_INPUT_ISO_STD_FZ1_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uoffset_QUAL |
| STAT_INPUT_ISO_STD_FZ1_11_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_INPUT_ISO_STD_FZ1_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_gesQUAL |
| STAT_INPUT_ISO_STD_FZ1_13_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_plus [kOhm] |
| STAT_INPUT_ISO_STD_FZ1_14_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_plus_QUAL |
| STAT_INPUT_ISO_STD_FZ1_15_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_minus [kOhm] |
| STAT_INPUT_ISO_STD_FZ1_16_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_minus_QUAL |
| STAT_INPUT_ISO_STD_FZ2_01_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat01 [V] |
| STAT_INPUT_ISO_STD_FZ2_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat01_QUAL |
| STAT_INPUT_ISO_STD_FZ2_03_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat02 [V] |
| STAT_INPUT_ISO_STD_FZ2_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat02_QUAL |
| STAT_INPUT_ISO_STD_FZ2_05_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso01 [V] |
| STAT_INPUT_ISO_STD_FZ2_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso01_QUAL |
| STAT_INPUT_ISO_STD_FZ2_07_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso02 [V] |
| STAT_INPUT_ISO_STD_FZ2_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso02_QUAL |
| STAT_INPUT_ISO_STD_FZ2_09_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uoffset [V] |
| STAT_INPUT_ISO_STD_FZ2_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uoffset_QUAL |
| STAT_INPUT_ISO_STD_FZ2_11_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_INPUT_ISO_STD_FZ2_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_gesQUAL |
| STAT_INPUT_ISO_STD_FZ2_13_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_plus [kOhm] |
| STAT_INPUT_ISO_STD_FZ2_14_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_plus_QUAL |
| STAT_INPUT_ISO_STD_FZ2_15_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_minus [kOhm] |
| STAT_INPUT_ISO_STD_FZ2_16_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_minus_QUAL |

### RES_0XD6CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_C_MIN_ERG_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C (auf Speicherebene) als Ergebnis des ersten Kapazitätstests  |
| STAT_SOH_C_MIN_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C VOR erstem Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SoH_C VOR erstem Kapazitätstest |
| STAT_SOH_C_AVG_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SoH_C VOR erstem Kapazitätstest |
| STAT_TEMP_VOR_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere gemessene Temperatur auf HVS-Ebene VOR erstem Kapazitätstest |
| STAT_MAX_DELTA_U_CELL_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximales Spannungsdelta der Zellen VOR erstem Kapazitätstest  Ab den I-Stufen I15/SP15: 18-03-i420; I01/SE09: 17-11-i400; F56/SE14: 19-11-i310 gilt: Asymmetrie-Potential als Spannungsdifferenz der während des ersten Kapazitätstests am tiefsten entladenen Zelle zu Ucel_max im Volllademoment |
| STAT_MAX_DELTA_SOC_NENN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximales SoC-Delta der Zellen VOR erstem Kapazitätstest Ab den I-Stufen I15/SP15: 18-03-i420; I01/SE09: 17-11-i400; F56/SE14: 19-11-i310 gilt: Asymmetrie-Potential als SoC_Nenn-Prozent-Wert, der während des ersten Kapazitätstests ermittelt wurde. |
| STAT_ZEITPUNKT_TEST_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) am Ende des ersten Kapazitätstests |
| STAT_SOH_C_MIN_ERG_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C (auf Speicherebene) als Ergebnis des zweiten Kapazitätstests  |
| STAT_SOH_C_MIN_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C VOR zweitem Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SoH_C VOR zweitem Kapazitätstest |
| STAT_SOH_C_AVG_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SoH_C VOR zweitem Kapazitätstest |
| STAT_TEMP_VOR_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere gemessene Temperatur auf HVS-Ebene VOR zweitem Kapazitätstest |
| STAT_MAX_DELTA_U_CELL_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximales Spannungsdelta der Zellen VOR zweitem Kapazitätstest  Ab den I-Stufen I15/SP15: 18-03-i420; I01/SE09: 17-11-i400; F56/SE14: 19-11-i310 gilt: Asymmetrie-Potential als Spannungsdifferenz der während des zweiten Kapazitätstests am tiefsten entladenen Zelle zu Ucel_max im Volllademoment |
| STAT_MAX_DELTA_SOC_NENN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximales SoC-Delta der Zellen VOR zweitem Kapazitätstest Ab den I-Stufen I15/SP15: 18-03-i420; I01/SE09: 17-11-i400; F56/SE14: 19-11-i310 gilt: Asymmetrie-Potential als SoC_Nenn-Prozent-Wert, der während des zweiten Kapazitätstests ermittelt wurde. |
| STAT_ZEITPUNKT_TEST_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) am Ende des zweiten Kapazitätstests |
| STAT_SOH_C_MIN_ERG_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C (auf Speicherebene) als Ergebnis des dritten Kapazitätstests  |
| STAT_SOH_C_MIN_VOR_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SoH_C VOR drittem Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SoH_C VOR drittem Kapazitätstest |
| STAT_SOH_C_AVG_VOR_TEST_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SoH_C VOR drittem Kapazitätstest |
| STAT_TEMP_VOR_TEST_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere gemessene Temperatur auf HVS-Ebene VOR drittem Kapazitätstest |
| STAT_MAX_DELTA_U_CELL_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximales Spannungsdelta der Zellen VOR drittem Kapazitätstest  Ab den I-Stufen I15/SP15: 18-03-i420; I01/SE09: 17-11-i400; F56/SE14: 19-11-i310 gilt: Asymmetrie-Potential als Spannungsdifferenz der während des dritten Kapazitätstests am tiefsten entladenen Zelle zu Ucel_max im Volllademoment |
| STAT_MAX_DELTA_SOC_NENN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximales SoC-Delta der Zellen VOR drittem Kapazitätstest Ab den I-Stufen I15/SP15: 18-03-i420; I01/SE09: 17-11-i400; F56/SE14: 19-11-i310 gilt: Asymmetrie-Potential als SoC_Nenn-Prozent-Wert, der während des dritten Kapazitätstests ermittelt wurde. |
| STAT_ZEITPUNKT_TEST_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) am Ende des dritten Kapazitätstests |

### RES_0XD6CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_REKU_VOLT_LIFT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der Anzahl, in der erhöhte Rekuperationsleistung zur Verfügung gestellt wird bei fast vollem HVS |
| STAT_DAUER_REKU_VOLT_LIFT_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Rückgabe der Dauer, in der erhöhte Rekuperationsleistung zur Verfügung gestellt wird bei fast vollem HVS |

### RES_0XD6CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_ADAPT_COUNT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 1. Adaption |
| STAT_GRUND_ADAPTION_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 1. Adaption |
| STAT_AH_CUM_ABS_1_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_1_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 1. Adaption geöffnet war |
| STAT_TEMP_MEAN1_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 1. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 1. Adaption |
| STAT_UCEL_MIN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_UCEL_MAX_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_UCEL_MEAN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 1. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 1. Adaption |
| STAT_OVC1_ZELLE1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 1. Adaption |
| STAT_OVC2_ZELLE1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 1. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_1_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die erste Adaption |
| STAT_SOH_MIN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 1. Adaption |
| STAT_SOH_MAX_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 1. Adaption |
| STAT_SOH_MEAN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 1. Adaption |
| STAT_SOH_ADAPT_COUNT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 2. Adaption |
| STAT_GRUND_ADAPTION_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 2. Adaption |
| STAT_AH_CUM_ABS_2_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_2_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 2. Adaption geöffnet war |
| STAT_TEMP_MEAN1_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 2. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 2. Adaption |
| STAT_UCEL_MIN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_UCEL_MAX_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_UCEL_MEAN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 2. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 2. Adaption |
| STAT_OVC1_ZELLE1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 2. Adaption |
| STAT_OVC2_ZELLE1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 2. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_2_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die zweite Adaption |
| STAT_SOH_MIN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 2. Adaption |
| STAT_SOH_MAX_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 2. Adaption |
| STAT_SOH_MEAN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 2. Adaption |
| STAT_SOH_ADAPT_COUNT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 3. Adaption |
| STAT_GRUND_ADAPTION_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 3. Adaption |
| STAT_AH_CUM_ABS_3_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_3_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 3. Adaption geöffnet war |
| STAT_TEMP_MEAN1_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 3. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 3. Adaption |
| STAT_UCEL_MIN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_UCEL_MAX_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_UCEL_MEAN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 3. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 3. Adaption |
| STAT_OVC1_ZELLE1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 3. Adaption |
| STAT_OVC2_ZELLE1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 3. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_3_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die dritte Adaption |
| STAT_SOH_MIN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 3. Adaption |
| STAT_SOH_MAX_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 3. Adaption |
| STAT_SOH_MEAN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 3. Adaption |
| STAT_SOH_ADAPT_COUNT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 4. Adaption |
| STAT_GRUND_ADAPTION_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 4. Adaption |
| STAT_AH_CUM_ABS_4_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_4_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 4. Adaption geöffnet war |
| STAT_TEMP_MEAN1_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 4. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 4. Adaption |
| STAT_UCEL_MIN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_UCEL_MAX_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_UCEL_MEAN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 4. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 4. Adaption |
| STAT_OVC1_ZELLE1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 4. Adaption |
| STAT_OVC2_ZELLE1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 4. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_4_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die vierte Adaption |
| STAT_SOH_MIN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 4. Adaption |
| STAT_SOH_MAX_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 4. Adaption |
| STAT_SOH_MEAN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 4. Adaption |
| STAT_SOH_ADAPT_COUNT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 5. Adaption |
| STAT_GRUND_ADAPTION_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 5. Adaption |
| STAT_AH_CUM_ABS_5_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_5_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 5. Adaption geöffnet war |
| STAT_TEMP_MEAN1_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 5. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 5. Adaption |
| STAT_UCEL_MIN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_UCEL_MAX_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_UCEL_MEAN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 5. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 5. Adaption |
| STAT_OVC1_ZELLE1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 5. Adaption |
| STAT_OVC2_ZELLE1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 5. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_5_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die fünfte Adaption |
| STAT_SOH_MIN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 5. Adaption |
| STAT_SOH_MAX_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 5. Adaption |
| STAT_SOH_MEAN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 5. Adaption |
| STAT_SOH_MIN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH VOR der ältesten Adaption |
| STAT_SOH_MAX_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH VOR der ältesten Adaption |
| STAT_SOH_MEAN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH VOR der ältesten Adaption |

### RES_0XD6CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSTEMP_CSC1_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 1 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC1_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 1 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC2_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 2 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC2_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 2 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC3_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 3 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC3_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 3 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC4_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 4 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC4_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 4 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC5_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 5 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC5_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 5 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC6_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 6 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC6_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 6 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC7_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 7 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC7_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 7 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC8_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 8 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC8_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 8 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC9_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 9 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC9_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 9 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC10_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 10 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC10_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 10 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC11_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 11 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC11_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 11 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC12_SENS1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 1 CSC 12 // 127 = Qual ungültig |
| STAT_MESSTEMP_CSC12_SENS2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktueller Temperaturmesswert Sensor 2 CSC 12 // 127 = Qual ungültig |

### RES_0XD6D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLERZAEHLER_TRG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LI: Zähler aller aufgetretenen Fehler der Nachlaufmessung |
| STAT_INPUT_ISO_TRG_FZ1_01_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat01 [V] |
| STAT_INPUT_ISO_TRG_FZ1_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat01_QUAL |
| STAT_INPUT_ISO_TRG_FZ1_03_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat02 [V] |
| STAT_INPUT_ISO_TRG_FZ1_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Ubat02_QUAL |
| STAT_INPUT_ISO_TRG_FZ1_05_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso01 [V] |
| STAT_INPUT_ISO_TRG_FZ1_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso01_QUAL |
| STAT_INPUT_ISO_TRG_FZ1_07_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso02 [V] |
| STAT_INPUT_ISO_TRG_FZ1_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uiso02_QUAL |
| STAT_INPUT_ISO_TRG_FZ1_09_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uoffset [V] |
| STAT_INPUT_ISO_TRG_FZ1_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt Uoffset_QUAL |
| STAT_INPUT_ISO_TRG_FZ1_11_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_INPUT_ISO_TRG_FZ1_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_gesQUAL |
| STAT_INPUT_ISO_TRG_FZ1_13_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_plus [kOhm] |
| STAT_INPUT_ISO_TRG_FZ1_14_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_plus_QUAL |
| STAT_INPUT_ISO_TRG_FZ1_15_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_minus [kOhm] |
| STAT_INPUT_ISO_TRG_FZ1_16_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: erstmaliger Fehlerzeitpunkt R_iso_minus_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_01_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat01 [V] |
| STAT_INPUT_ISO_TRG_FZ2_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat01_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_03_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat02 [V] |
| STAT_INPUT_ISO_TRG_FZ2_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Ubat02_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_05_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso01 [V] |
| STAT_INPUT_ISO_TRG_FZ2_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso01_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_07_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso02 [V] |
| STAT_INPUT_ISO_TRG_FZ2_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uiso02_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_09_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uoffset [V] |
| STAT_INPUT_ISO_TRG_FZ2_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt Uoffset_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_11_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_ges [kOhm] |
| STAT_INPUT_ISO_TRG_FZ2_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_gesQUAL |
| STAT_INPUT_ISO_TRG_FZ2_13_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_plus [kOhm] |
| STAT_INPUT_ISO_TRG_FZ2_14_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_plus_QUAL |
| STAT_INPUT_ISO_TRG_FZ2_15_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_minus [kOhm] |
| STAT_INPUT_ISO_TRG_FZ2_16_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | LI: letztmaliger Fehlerzeitpunkt R_iso_minus_QUAL |

### RES_0XDD61_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_FREIGABE | 0-n | high | unsigned char | - | TAB_SCHUETZ_FREIGABE | 1.0 | 1.0 | 0.0 | Liest das Bit zur Freigabe oder Sperrung der Schützschalter |

### RES_0XDD63_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SCHALTUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schaltungen der Schützschalter ohne Last |
| STAT_ANZAHL_SCHALTUNGEN_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schaltungen der Schützschalter unter Last |

### RES_0XDD6A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISOWIDERSTAND_EXT_TRG_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Nachlauf (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_EXT_STD_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Betrieb (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_INT_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter interner Isowiderstand (offene Schütze); wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |
| STAT_ISOWIDERSTAND_EXT_TRG_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Nachlauf: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_EXT_STD_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Betrieb: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_INT_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Intern: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel; wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |

### RES_0XDD6F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE | - | - | - | Status Kühlmittel-Ventil: Geschlossen oder offen |

### RES_0XDD7C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNG_MAX_WERT | W | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | Vordefinierter maximaler Leistungswert in Watt (projektspezifisch, auf Gesamtspeicherebene) |
| STAT_ZEIT_POWER_DCHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  0 < P <= Pmax*0.16 |
| STAT_ZEIT_POWER_DCHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.16 < P <= Pmax*0.33 |
| STAT_ZEIT_POWER_DCHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.33 < P <= Pmax*0.5 |
| STAT_ZEIT_POWER_DCHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.5 < P <= Pmax*0.66 |
| STAT_ZEIT_POWER_DCHG_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.66 < P <= Pmax*0.80 |
| STAT_ZEIT_POWER_DCHG_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.80 < P <= Pmax |
| STAT_ZEIT_POWER_DCHG_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  P > Pmax |
| STAT_ZEIT_POWER_CHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  0 < P <= Pmax*0.16 |
| STAT_ZEIT_POWER_CHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.16 < P <= Pmax*0.33 |
| STAT_ZEIT_POWER_CHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.33 < P <= Pmax*0.5 |
| STAT_ZEIT_POWER_CHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.5 < P <= Pmax*0.66 |
| STAT_ZEIT_POWER_CHG_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.66 < P <= Pmax*0.80 |
| STAT_ZEIT_POWER_CHG_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.80 < P <= Pmax |
| STAT_ZEIT_POWER_CHG_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  P > Pmax |
| STAT_UCELLMAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | GW-Grenzverletzung der max. Einzelzellspannung eingetreten (1 = ja / 0 = nein). |
| STAT_UCELLMIN_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GW-Grenzverletzung der min. Einzelzellspannung eingetreten (1 = ja / 0 = nein). |
| STAT_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_IMAX_DCHG_WERT | A | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | maximal gemessener Entladestrom über Lebenszeit |
| STAT_IMAX_CHG_WERT | A | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | maximal gemessener Ladestrom über Lebenszeit |
| STAT_IMAX_LAD_ERROR_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GW-Grenzverletzung des maximal erlaubten Ladestroms überschritten (1 = ja / 0 = nein) |
| STAT_TMAX_ERROR_OP_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximal erlaubte Temperatur während Betrieb überschritten (1 = ja, 0 = nein) |
| STAT_TMAX_ERROR_NO_OP_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximal erlaubte Temperatur ohne Betrieb überschritten (1 = ja, 0 = nein) |
| STAT_TMIN_ERROR_OP_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | minimal erlaubte Temperatur während Betrieb unterschritten (1 = ja, 0 = nein) |
| STAT_TMIN_ERROR_NO_OP_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | minimal erlaubte Temperatur ohne Betrieb unterschritten (1 = ja, 0 = nein) |
| STAT_CUMULATIVE_ENERGIE_LADUNG_WERT | Ws | high | unsigned long | - | - | 36.0 | 1.0 | 0.0 | Wert der kumulierten Energie für Ladevorgänge |
| STAT_CUMULATIVE_ENERGIE_ENTLADUNG_WERT | Ws | high | unsigned long | - | - | 36.0 | 1.0 | 0.0 | Wert der kumulierten Energie für Entladevorgänge |

### RES_0XDD7D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Ladestrom |
| STAT_ENTLADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Entladesstrom |

### RES_0XDD7E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | maximal erlaubte Ladespannung |
| STAT_ENTLADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | maximal erlaubte Entladespannung |

### RES_0XDD8E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUM_OF_SOC_CHARGE_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_CHARGE_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_LADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_SUM_OF_SOC_DISCHARGE_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | veraltet, Ersatz: STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB und STATUS_CUMULATIVE_ENTLADUNG. |
| STAT_STROM_MAX_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Vorderfinierter maximaler Stromwert in Ampere (projektspezifisch) |
| STAT_STROM_MIN_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Vorderfinierter minimaler Stromwert in Ampere (projektspezifisch) |
| STAT_I_HISTO_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse I < =Imin |
| STAT_I_HISTO_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imin < I <= Imin*0.5 |
| STAT_I_HISTO_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imin*0.5 < I <= Imin*0.03 |
| STAT_I_HISTO_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse in Imin*0.03 < I <= 0 |
| STAT_I_HISTO_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse 0 < I <= Imax*0.01 |
| STAT_I_HISTO_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imax*0.01 < I <= Imax*0.16 |
| STAT_I_HISTO_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse Imax*0.16 < I <= Imax*0.32 |
| STAT_I_HISTO_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer Stromklasse I > =Imax*0.32 |

### RES_0XDD90_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_TEMP_TOTAL_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T<=-25°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse -25°C<T<=-10°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse -10°C<T<=0°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 0°C<T<=10°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 10°C<T<=20°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 20°C<T<=25°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 25°C<T<=30°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 30°C<T<=35°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 35°C<T<=40°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 40°C<T<=45°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 45°C<T<=50°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 50°C<T<=55°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 55°C<T<=60°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_TOTAL_14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T>60°C bei wachem und schlafenden Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T<-25°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse -25°C<T<=-10°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse -10°C<T<=0°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 0°C<T<=10°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 10°C<T<=20°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 20°C kleiner T kleiner gleich 25°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 25°C kleiner T kleiner gleich 30°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 30°C kleiner T kleiner gleich 35°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 35°C kleiner T kleiner gleich 40°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 40°C kleiner T kleiner gleich 45°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 45°C<T<=50°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 50°C<T<=55°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_13_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse 55°C<T<=60°C bei schlafendem Steuergerät |
| STAT_ZEIT_TEMP_NO_OP_14_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Temperaturklasse T>60°C bei schlafendem Steuergerät |

### RES_0XDD91_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_SOC_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 1: %0 < SOC <= %10 |
| STAT_ZEIT_SOC_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 2: %10 < SOC <= %20 |
| STAT_ZEIT_SOC_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 3: %20 < SOC <= %30 |
| STAT_ZEIT_SOC_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 4: %30 < SOC <= %40 |
| STAT_ZEIT_SOC_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 5: %40 < SOC <= %50 |
| STAT_ZEIT_SOC_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 6: %50 < SOC <= %60 |
| STAT_ZEIT_SOC_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 7: %60 < SOC <= %70 |
| STAT_ZEIT_SOC_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 8: %70 < SOC <= %80 |
| STAT_ZEIT_SOC_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 9: %80 < SOC <= %85 |
| STAT_ZEIT_SOC_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 10: %85 < SOC <= %90 |
| STAT_ZEIT_SOC_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 11: %90 < SOC <= %95 |
| STAT_ZEIT_SOC_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 12: SOC > %95 |

### RES_0XDD94_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. Strom kleiner als -2.5xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. -0,5xC A kleiner als Strom kleiner als -0,0xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. Temperatur kleiner als 0 °C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. Temperatur kleiner als 0 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. Temperatur kleiner als 0 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. Temperatur kleiner als 0 °C.  1,5xC A kleiner als Strom |

### RES_0XDD95_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10 % kleiner als SoC kleiner als 30 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30 % kleiner als SoC kleiner als 50 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50 % kleiner als SoC kleiner als 70 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |

### RES_0XDD96_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |

### RES_0XDD97_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |

### RES_0XDD98_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A. |
| STAT_HV_BATT_HIST_SOC1_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |

### RES_0XDD99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |

### RES_0XDD9A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC1_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei SoC kleiner als 10%. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC2_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC2_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 10% kleiner als SoC kleiner als 30%. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC3_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC3_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 30% kleiner als SoC kleiner als 50%. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC4_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC4_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 50% kleiner als SoC kleiner als 70%. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |

### RES_0XDDB7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_KAPAZITAET_GEFILTERT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Restkapazität des Speichers, prozentualer Wert: ( C_akt/C_nenn(neu) ) * 100, 0 = Lebensdauerende erreicht, 100 = Neuzustand >> Dieser Job wird nicht mehr unterstützt und ist NULL-bedatet. |

### RES_0XDDBC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktueller Anzeige Soc |
| STAT_MAXIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | obere Grenze des Anzeige Soc |
| STAT_MINIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | untere Grenze des Anzeige Soc |

### RES_0XDDBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_VORLADUNG_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | zuletzt benötigte Vorladezeit |
| STAT_ZEIT_VORLADUNG_1_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (1 Vorgang zuvor) |
| STAT_ZEIT_VORLADUNG_2_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (2 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_3_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (3 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_4_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (4 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (letzte Vorladung) |
| STAT_MAX_STROM_VORLADUNG_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (1 Vorgang zuvor) |
| STAT_MAX_STROM_VORLADUNG_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (2 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_3_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (3 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_4_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (4 Vorgänge zuvor) |

### RES_0XDDBF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UCELL_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | minimale Einzelzellspannung aller Einzelzellen |
| STAT_UCELL_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | maximale Einzelzellspannung aller Einzelzellen |

### RES_0XDDC0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCORE_MIN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten minimalen Zellkerntemperaturen |
| STAT_TCORE_MAX_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten maximalen Zellkerntemperaturen |
| STAT_TCORE_MEAN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten durchschnittlichen Zellkerntemperaturen |

### RES_0XDDC2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTOR_RS_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Korrekturfaktor des seriellen ohmschen Wiederstands (1,5 = Erhöhung des Wiederstands um 50%) |
| STAT_FAKTOR_RP_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Korrekturfaktor des paralellen ohmschen Wiederstands (1,5 = Erhöhung des Wiederstands um 50%) |
| STAT_FAKTOR_CP_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Korrekturfaktor der parallelen Kapazität (1,5 = Erhöhung der Kapazität um 50%) |

### RES_0XDDC4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC der HV-Batterie |
| STAT_SOC_PLAUSIBILITAET_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gültigkeit des gelesenen SOC Werts: 0 = Wert unplausibel (Fehler), 1 = Wert OK auch bei Qualifier Warnung |

### RES_0XDDC6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM_DAUER_MAX_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Symmetrierdauer in Minuten (projektspezifisch) |
| STAT_HISTO_SYM_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  0 < t <= tmax*0.04 |
| STAT_HISTO_SYM_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.04 < t <= tmax*0.2 |
| STAT_HISTO_SYM_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  0.2*tmax < t <= tmax*0.36 |
| STAT_HISTO_SYM_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.36 < t <= tmax*0.52 |
| STAT_HISTO_SYM_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.52 < t <= tmax*0.68 |
| STAT_HISTO_SYM_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.68 < t <= tmax*0.86 |
| STAT_HISTO_SYM_DAUER_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  tmax*0.86 < t <= tmax |
| STAT_HISTO_SYM_DAUER_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse :  t > tmax |

### RES_0XDDC7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTO_SYM_ZELLANZAHL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = 0 |
| STAT_HISTO_SYM_ZELLANZAHL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = 1 |
| STAT_HISTO_SYM_ZELLANZAHL_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen:  1 < n <= NrCellsProModul |
| STAT_HISTO_SYM_ZELLANZAHL_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsProModul < n <= NrCellsTotal/2 |
| STAT_HISTO_SYM_ZELLANZAHL_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HISTO_SYM_ZELLANZAHL_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsTotal-NrCellsProModul < n <= NrCellsTotal-2 |
| STAT_HISTO_SYM_ZELLANZAHL_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n <= NrCellsTotal-1 |
| STAT_HISTO_SYM_ZELLANZAHL_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = NrCellsTotal |

### RES_0XDDC8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM_DELTASOC_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | aktueller dSOC (zuletzt bestimmt) |
| STAT_SYM_DELTASOC_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor einer Fahrt |
| STAT_SYM_DELTASOC_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor 2 Fahrten |
| STAT_SYM_DELTASOC_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor 3 Fahrten |
| STAT_SYM_DELTASOC_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | dSOC vor 4 Fahrten |

### RES_0XDDC9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_SYM_DAUER_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des letzten Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 1 |
| STAT_BAL_COMPL_1_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 1 Fahrt |
| STAT_MAX_SYM_ZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 2 |
| STAT_BAL_COMPL_2_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 2 Fahrt |
| STAT_MAX_SYM_ZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 3 |
| STAT_BAL_COMPL_3_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 3 Fahrt |
| STAT_MAX_SYM_ZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 4 |
| STAT_BAL_COMPL_4_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |
| STAT_MAX_SYM_DAUER_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Symmetrierdauer des Symmetriervorgangs vor 4 Fahrten |
| STAT_MAX_SYM_ZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Beginn Symmetriervorgang zu 5 |
| STAT_BAL_COMPL_5_NR | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Status Symmetrierung |

### RES_0XDDCB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SOC_GRENZE_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige minimale SOC Grenze |
| STAT_MAX_SOC_GRENZE_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige maximale SOC Grenze |

### RES_0XDDCC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_K1_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K1 |
| STAT_SCHUETZ_K2_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K2 |
| STAT_SCHUETZ_K3_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K3 |

### RES_0XDDE8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DEGRADATION_GESAMT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der alterungsbedingten Spannungsdegradationen der Hochvolt-Speicher über Gesamtzeit >> Dieser Job wird nicht mehr unterstützt und ist NULL-bedatet. |
| STAT_ANZAHL_DEGRADATION_LAUFENDES_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der alterungsbedingten Spannungsdegradationen der Hochvolt-Speicher im Mittel über letztes und laufendes Jahr >> Dieser Job wird nicht mehr unterstützt und ist NULL-bedatet. |

### RES_0XDDE9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HFK_GESAMT_SOC_HUB_50_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bis 14-03: Häufigkeit bei SoC-Hub zwischen 50% und 65%, Summe letztes Jahr und laufendes Jahr Ab 14-07: Häufigkeit bei SoC-Hub zwischen 70% und 74%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_GESAMT_SOC_HUB_65_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bis 14-03: Häufigkeit bei SoC-Hub zwischen 65% und 80%, Summe letztes Jahr und laufendes Jahr Ab 14-07: Häufigkeit bei SoC-Hub zwischen 74% und 80%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_GESAMT_SOC_HUB_80_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 80% und 85%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_GESAMT_SOC_HUB_85_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 85% und 90%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_GESAMT_SOC_HUB_90_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 90% und 95%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_GESAMT_SOC_HUB_95_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 95% und 100%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_50_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 50% und 65%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_65_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 65% und 80%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_80_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 80% und 85%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_85_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 85% und 90%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_90_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 90% und 95%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_JAHR_SOC_HUB_95_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 95% und 100%, Summe letztes Jahr und laufendes Jahr |
| STAT_HFK_LAUFENDES_MONAT_SOC_HUB_50_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 50% und 65%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDES_MONAT_SOC_HUB_65_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 65% und 80%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDES_MONAT_SOC_HUB_80_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 80% und 85%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDES_MONAT_SOC_HUB_85_90_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 85% und 90%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDES_MONAT_SOC_HUB_90_95_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 90% und 95%, Summe letzter und laufender Monat |
| STAT_HFK_LAUFENDES_MONAT_SOC_HUB_95_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit bei SoC-Hub zwischen 95% und 100%, Summe letzter und laufender Monat |
| STAT_ZEITSTEMPEL_SOC_HUB_50_65_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 50% und 65% |
| STAT_ZEITSTEMPEL_SOC_HUB_65_80_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 65% und 80% |
| STAT_ZEITSTEMPEL_SOC_HUB_80_85_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 80% und 85% |
| STAT_ZEITSTEMPEL_SOC_HUB_85_90_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 85% und 90% |
| STAT_ZEITSTEMPEL_SOC_HUB_90_95_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 90% und 95% |
| STAT_ZEITSTEMPEL_SOC_HUB_95_100_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stempel d. Fzg.-Zeit bei letztem Auftreten des SoC-Hub zwischen 95% und 100% |

### RES_0XDDEB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_START_SOC_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-1 (255 = unplausibel) |
| STAT_START_SOC_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-2 (255 = unplausibel) |
| STAT_START_SOC_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-3 (255 = unplausibel) |
| STAT_START_SOC_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-4 (255 = unplausibel) |
| STAT_START_SOC_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des Start SOC nach Abschluss des Ladervorgang-5 (255 = unplausibel) |
| STAT_VERF_P_LADEN_1_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-1 (255 = unplausibel). Die ausgegebene 'verfügbare Ladeleistung' muss mit 5 dividiert werden um realen Wert zu erhalten. |
| STAT_VERF_P_LADEN_2_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-2 (255 = unplausibel). Die ausgegebene 'verfügbare Ladeleistung' muss mit 5 dividiert werden um realen Wert zu erhalten. |
| STAT_VERF_P_LADEN_3_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-3 (255 = unplausibel). Die ausgegebene 'verfügbare Ladeleistung' muss mit 5 dividiert werden um realen Wert zu erhalten. |
| STAT_VERF_P_LADEN_4_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-4 (255 = unplausibel). Die ausgegebene 'verfügbare Ladeleistung' muss mit 5 dividiert werden um realen Wert zu erhalten. |
| STAT_VERF_P_LADEN_5_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert (aus HVPM) der verfügbaren Ladeleistung zu Ladebeginn-5 (255 = unplausibel). Die ausgegebene 'verfügbare Ladeleistung' muss mit 5 dividiert werden um realen Wert zu erhalten. |
| STAT_REAL_END_SOC_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen  SOC nach Abschluss des Ladervorgang-1 (255 = unplausibel) |
| STAT_REAL_END_SOC_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen  SOC nach Abschluss des Ladervorgang-2 (255 = unplausibel) |
| STAT_REAL_END_SOC_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen  SOC nach Abschluss des Ladervorgang-3 (255 = unplausibel) |
| STAT_REAL_END_SOC_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen  SOC nach Abschluss des Ladervorgang-4 (255 = unplausibel) |
| STAT_REAL_END_SOC_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert des tatsächlichen  SOC nach Abschluss des Ladervorgang-5 (255 = unplausibel) |
| STAT_GRUND_LADEENDE_WERT_1 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-1 |
| STAT_GRUND_LADEENDE_WERT_2 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-2 |
| STAT_GRUND_LADEENDE_WERT_3 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-3 |
| STAT_GRUND_LADEENDE_WERT_4 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-4 |
| STAT_GRUND_LADEENDE_WERT_5 | 0-n | high | unsigned char | - | TAB_RINGPUFFER_LADEVORGAENGE | - | - | - | Grund des Ladeendes nach Abschluss des Ladervorgang-5 |
| STAT_START_TEMP_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der Start Temperatur nach Abschluss des Ladervorgang-1 (127 = unplausibel) |
| STAT_START_TEMP_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der Start Temperatur nach Abschluss des Ladervorgang-2 (127 = unplausibel) |
| STAT_START_TEMP_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der Start Temperatur nach Abschluss des Ladervorgang-3 (127 = unplausibel) |
| STAT_START_TEMP_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der Start Temperatur nach Abschluss des Ladervorgang-4 (127 = unplausibel) |
| STAT_START_TEMP_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der Start Temperatur nach Abschluss des Ladervorgang-5 (127 = unplausibel) |
| STAT_END_TEMP_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der End Temperatur nach Abschluss des Ladervorgang-1 (127 = unplausibel) |
| STAT_END_TEMP_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der End Temperatur nach Abschluss des Ladervorgang-2  (127 = unplausibel) |
| STAT_END_TEMP_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der End Temperatur nach Abschluss des Ladervorgang-3  (127 = unplausibel) |
| STAT_END_TEMP_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der End Temperatur nach Abschluss des Ladervorgang-4 (127 = unplausibel) |
| STAT_END_TEMP_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert der End Temperatur nach Abschluss des Ladervorgang-5 (127 = unplausibel) |
| STAT_BEGINN_PROG_LADEZEIT_1_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-1 |
| STAT_BEGINN_PROG_LADEZEIT_2_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-2 |
| STAT_BEGINN_PROG_LADEZEIT_3_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-3 |
| STAT_BEGINN_PROG_LADEZEIT_4_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-4 |
| STAT_BEGINN_PROG_LADEZEIT_5_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zu Beginn prognostizierte Ladezeit nach Abschluss des Ladevorgang-5 |
| STAT_REAL_LADEZEIT_1_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-1 |
| STAT_REAL_LADEZEIT_2_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-2 |
| STAT_REAL_LADEZEIT_3_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-3 |
| STAT_REAL_LADEZEIT_4_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-4 |
| STAT_REAL_LADEZEIT_5_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Die tatsächliche Ladezeit nach Abschluss des Ladevorgang-5 |
| STAT_RELATIVZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-1 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-2 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-3 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-4 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |
| STAT_RELATIVZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zu Beginn des Ladevorgang-5 (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) |

### RES_0XDDEC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_PROG_LADEZEIT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-1: fact <= -%25 |
| STAT_HIS_PROG_LADEZEIT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-2: %-25 < fact <= -%15 |
| STAT_HIS_PROG_LADEZEIT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-3: %-15 < fact <= -%5 |
| STAT_HIS_PROG_LADEZEIT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-4:  %-5 < fact <= %5 |
| STAT_HIS_PROG_LADEZEIT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-5: %5 < fact <= %15 |
| STAT_HIS_PROG_LADEZEIT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-6: %15 < fact <= %25 |
| STAT_HIS_PROG_LADEZEIT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl in der Abweichungsklasse-7: fact > %25 |

### RES_0XDF60_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_HV_ON_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Gesamtzeit bei geschlossenen Hauptschaltern |
| STAT_TIME_TOTAL_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die gesamte Batterielebensdauer (Gesamtzeit bei geschlossenen und geöffneten Hauptschaltern) |

### RES_0XDF64_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLDAUER_MAX_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Kühldauer (projektspezifisch) |
| STAT_KUEHLDAUER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse:  0 < t < = tmax*0.25 |
| STAT_KUEHLDAUER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse:  0.25* tmax < t < = tmax*0.5 |
| STAT_KUEHLDAUER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse:  0.5* tmax < t < = tmax |
| STAT_KUEHLDAUER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Dauerklasse:  t > tmax |

### RES_0XDF65_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_SPREIZUNG_MAX_WERT | °C | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Vorderfinierter maximaler Temperaturspreizungswert in Celcius  (projektspezifisch) |
| STAT_TEMP_SPREIZUNG_SYS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 1: 0 < dT <= dTmax*0.2 |
| STAT_TEMP_SPREIZUNG_SYS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 2: dTmax*0.2 < dT <= dTmax*0.4 |
| STAT_TEMP_SPREIZUNG_SYS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 3: dTmax*0.4 < dT <= dTmax*0.6 |
| STAT_TEMP_SPREIZUNG_SYS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 4: dTmax*0.6 < dT <= dTmax*0.8 |
| STAT_TEMP_SPREIZUNG_SYS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 5: dTmax*0.8 < dT <= dTmax |
| STAT_TEMP_SPREIZUNG_SYS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 6: dT > dTmax |

### RES_0XDF66_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_KUEHLMITTEL_MAX_WERT | °C | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Vordefinierte maximale Kühlmittelstemperatur (projektspezifisch) |
| STAT_TEMP_KUEHLMITTEL_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  T < =0 |
| STAT_TEMP_KUEHLMITTEL_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  0 < T < = Tmax*0.25 |
| STAT_TEMP_KUEHLMITTEL_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  Tmax* 0.25 < T < = Tmax*0.5 |
| STAT_TEMP_KUEHLMITTEL_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  Tmax* 0.5 < T < = Tmax*0.75 |
| STAT_TEMP_KUEHLMITTEL_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  Tmax* 0.75 < T < = Tmax |
| STAT_TEMP_KUEHLMITTEL_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Temperaturklasse:  T > Tmax |

### RES_0XDF67_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADUNG_KUEHLUNG_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ladungsmenge bei eingeschalteter Kühlung |
| STAT_ENTLADUNG_KUEHLUNG_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Entladungsmenge bei eingeschalteter Kühlung |

### RES_0XDF68_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. Temperatur kleiner als 0 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. Temperatur kleiner als 0 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T1_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T1_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. Temperatur kleiner als 0 °C.  1,5xC A kleiner als Strom |

### RES_0XDF69_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T4_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T4_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 20°C kleiner als Temperatur kleiner als 27,5°C. 1,5xC A kleiner als Strom |

### RES_0XDF6A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T3_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T3_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 10°C kleiner als Temperatur kleiner als 20°C. 1,5xC A kleiner als Strom |

### RES_0XDF6B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T5_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T5_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 27,5°C kleiner als Temperatur kleiner als 32,5°C. 1,5xC A kleiner als Strom |

### RES_0XDF6C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70 % kleiner als SoC kleiner als 90 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90 % kleiner als SoC kleiner als 95 %. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T2_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T2_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95 % kleiner als SoC. 0°C kleiner als Temperatur kleiner als 10 °C.  1,5xC A kleiner als Strom |

### RES_0XDF6D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T7_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T7_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 40°C kleiner als Temperatur. 1,5xC A kleiner als Strom |

### RES_0XDF6E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC5_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 70% kleiner als SoC kleiner als 90%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC6_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC6_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 90% kleiner als SoC kleiner als 95%. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |
| STAT_HV_BATT_HIST_SOC7_T6_I1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. Strom kleiner als -2,5xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,5xC A kleiner als Strom kleiner als -2,0xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. -2,0xC A kleiner als Strom kleiner als -1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,5xC A kleiner als Strom kleiner als -1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I5_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. -1,0xC A kleiner als Strom kleiner als -0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I6_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. -0,5xC A kleiner als Strom kleiner als 0,0xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I7_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,0xC A kleiner als Strom kleiner als 0,5xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I8_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. 0,5xC A kleiner als Strom kleiner als 1,0xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I9_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,0xC A kleiner als Strom kleiner als 1,5xC A |
| STAT_HV_BATT_HIST_SOC7_T6_I10_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Dauer bei 95% kleiner als SoC. 32,5°C kleiner als Temperatur kleiner als 40°C. 1,5xC A kleiner als Strom |

### RES_0XDF6F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Schwellwert  des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Schwellwert  des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Entladen in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten beim  Entladen in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF70_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_WERT | A | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] |
| STAT_CHA_EFF_CURR_LIM_3_PERC_WERT | A | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] |
| STAT_ABS_EFF_CURR_LIM_100_PERC_WERT | A | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] |
| STAT_ABS_EFF_CURR_LIM_3_PERC_WERT | A | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_cha(%3)] |
| STAT_HIS_EFF_CURR_CHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden in der Klasse: 0 <= Irms < 0,7 * Irms_cha(%100) |
| STAT_HIS_EFF_CURR_CHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden in der Klasse: 0,7 * Irms_cha(%100) <= Irms <  Irms_cha(%100) |
| STAT_HIS_EFF_CURR_CHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden in der Klasse: Irms_cha(%100) <= Irms < Irms_cha(%3) |
| STAT_HIS_EFF_CURR_CHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden in der Klasse: Irms_cha(%3) < Irms |
| STAT_HIS_EFF_CURR_ABS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden und Entladen in der Klasse: 0 <= Irms < 0,7 * Irms_abs(%100) |
| STAT_HIS_EFF_CURR_ABS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden und Entladen in der Klasse: 0,7 * Irms_abs(%100) <= Irms <  Irms_abs(%100) |
| STAT_HIS_EFF_CURR_ABS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden und Entladen in der Klasse: Irms_abs(%100) <= Irms < Irms_abs(%3) |
| STAT_HIS_EFF_CURR_ABS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten des Effektivwerts des Stroms beim Laden und Entladen in der Klasse: Irms_abs(%3) < Irms |

### RES_0XDF71_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_ZELLEN_INSGESAMT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zellen des HV-Speichers |
| STAT_ANZAHL_ZELLEN_PRO_MODUL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zellen pro Modul |
| STAT_ANZAHL_MODULE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Module des HV-Speichers |
| STAT_ANZAHL_TEMPERATURSENSOREN_PRO_MODUL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Temperatursensoren pro Modul |

### RES_0XDF74_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOKO_HEIZ_DAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Vorkonditionierungs-Heizdauer in Minuten (projektspezifisch) |
| STAT_VOKO_HEIZ_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: 0 < t <= tmax*0.1 |
| STAT_VOKO_HEIZ_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.1 < t <= tmax*0.2 |
| STAT_VOKO_HEIZ_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.2 < t <= tmax*0.3 |
| STAT_VOKO_HEIZ_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.3 < t <= tmax*0.4 |
| STAT_VOKO_HEIZ_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.4 < t <= tmax*0.6 |
| STAT_VOKO_HEIZ_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: t > tmax*0.6 |

### RES_0XDF75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADE_KOND_HEIZ_DAUER_MAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Ladekonditionierungs-Kuehldauer in Minuten (projektspezifisch) |
| STAT_LADE_KOND_HEIZ_DAUER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: 0 < t <= tmax*0.1 |
| STAT_LADE_KOND_HEIZ_DAUER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.1 < t <= tmax*0.2 |
| STAT_LADE_KOND_HEIZ_DAUER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.2 < t <= tmax*0.3 |
| STAT_LADE_KOND_HEIZ_DAUER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.3 < t <= tmax*0.4 |
| STAT_LADE_KOND_HEIZ_DAUER_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.4 < t <= tmax*0.6 |
| STAT_LADE_KOND_HEIZ_DAUER_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse:  t > tmax*0.6 |

### RES_0XDF76_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOKO_KUEHL_DAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Vorkonditionierungs-Kuehldauer in Minuten (projektspezifisch) |
| STAT_VOKO_KUEHL_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: 0 < t <= tmax*0.1 |
| STAT_VOKO_KUEHL_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.1 < t <= tmax*0.2 |
| STAT_VOKO_KUEHL_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.2 < t <= tmax*0.3 |
| STAT_VOKO_KUEHL_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.3 < t <= tmax*0.4 |
| STAT_VOKO_KUEHL_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.4 < t <= tmax*0.6 |
| STAT_VOKO_KUEHL_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: t > tmax*0.6 |

### RES_0XDF77_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADE_DAUER_MAX_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Ladezeit in Stunden (projektspezifisch) |
| STAT_LADEDAUER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: 0 < t <= tmax*0.05 |
| STAT_LADEDAUER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.05 < t <= tmax*0.1 |
| STAT_LADEDAUER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.1 < t <= tmax*0.35 |
| STAT_LADEDAUER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.35 < t <= tmax*0.5 |
| STAT_LADEDAUER_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: tmax*0.5 < t <= tmax |
| STAT_LADEDAUER_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ladedauerklasse: t > tmax |

### RES_0XDF81_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_LOW_I_ZERO_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte untere SOC-Warngrenze-1 (projektspezifisch) |
| STAT_SOC_LOW_WARN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte untere SOC-Warngrenze-2 (projektspezifisch) |
| STAT_SOC_HIGH_I_ZERO_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte obere SOC-Warngrenze-1 (projektspezifisch) |
| STAT_SOC_HIGH_WARN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vordefinierte obere SOC-Warngrenze-2 (projektspezifisch) |
| STAT_HIS_SOC_WARN_GRENZEN_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC<=SOC_LOW_I_ZERO |
| STAT_HIS_SOC_WARN_GRENZEN_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC_LOW_I_ZERO<SOC<=SOC_LOW_WARN |
| STAT_HIS_SOC_WARN_GRENZEN_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC_LOW_WARN<SOC<=SOC_HIGH_WARN |
| STAT_HIS_SOC_WARN_GRENZEN_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC_HIGH_WARN<SOC<=SOC_HIGH_I_ZERO |
| STAT_HIS_SOC_WARN_GRENZEN_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: SOC >SOC_HIGH_I_ZERO |

### RES_0XDF83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_SER_NR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufende Nummer hexadezimal codiert |
| STAT_ID_MV_HW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HW Version, laufende Nummer hexadezimal codiert |
| STAT_ID_MV_SW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Hauptversion, laufende Nummer hexadezimal codiert |
| STAT_ID_SV_SW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unterversion, laufende Nummer hexadezimal codiert |
| STAT_ID_VAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Variantenkennung SBOX 00000b: BK2.0 |

### RES_0XDF86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_DAY_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des ersten Tages der Woche |
| STAT_SOC_DAY_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des zweiten Tages der Woche |
| STAT_SOC_DAY_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des dritten Tages der Woche |
| STAT_SOC_DAY_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des vierten Tages der Woche |
| STAT_SOC_DAY_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des fünften Tages der Woche |
| STAT_SOC_DAY_6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des sechsten Tages der Woche |
| STAT_SOC_DAY_7_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert am Ende des siebten Tages der Woche |
| STAT_SOC_WEEK_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert vor zwei Wochen |
| STAT_SOC_WEEK_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert vor drei Wochen |
| STAT_SOC_WEEK_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Wert vor vier Wochen |
| STAT_LAST_HV_ON_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit in Stunden seit das letzte Mal HV on war HVofftime_last |
| STAT_SOC_LAST_DRIVE_CYCLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC beim letzten Fahrtende |
| STAT_TIME_STAMP_LAST_CHG_END_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeit in Stunden wann das letzte Mal Laden beendet/abgebrochen wurde |

### RES_0XDF8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_TMIN_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_TMIN_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_TMIN_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_TMIN_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 |
| STAT_HIS_EFF_CURR_CHG_4_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 |
| STAT_HIS_EFF_CURR_ABS_4_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T < -10: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 < Irel_abs |

### RES_0XDF8B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_TLOW_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_TLOW_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_TLOW_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_TLOW_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T< 5: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 |
| STAT_HIS_EFF_CURR_CHG_4_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 |
| STAT_HIS_EFF_CURR_ABS_4_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 <= T < 5: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 < Irel_abs |

### RES_0XDF8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_TMID_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25 (40 SP01): Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_TMID_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25 (40 SP01): Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_TMID_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25 (40 SP01): Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_TMID_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T< 25 (40 SP01): Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 |
| STAT_HIS_EFF_CURR_CHG_4_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 |
| STAT_HIS_EFF_CURR_ABS_4_TMID_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 <= T < 25 (40 SP01): Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 < Irel_abs |

### RES_0XDF8D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_THIGH_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_THIGH_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_THIGH_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_THIGH_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T< 40: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 |
| STAT_HIS_EFF_CURR_CHG_4_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 |
| STAT_HIS_EFF_CURR_ABS_4_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUR SE03!!! Bei 25 <= T < 40: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 < Irel_abs |

### RES_0XDF8E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_EFF_CURR_LIM_100_PERC_TMAX_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden auf 100% Leben [Irms_cha(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_CHA_EFF_CURR_LIM_3_PERC_TMAX_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden auf 3% Leben [Irms_cha(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_100_PERC_TMAX_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 100% Leben [Irms_abs(%100)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_ABS_EFF_CURR_LIM_3_PERC_TMAX_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Effektivwert der Stromgrenze beim Laden und Entladen (Absolut) auf 3% Leben [Irms_abs(%3)] >> Dieses Statusausgabe wird nicht mehr benötigt und ist mit Null bedatet. |
| STAT_HIS_EFF_CURR_CHG_1_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 0 <= Irel_cha <= 70 |
| STAT_HIS_EFF_CURR_CHG_2_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 70 < Irel_cha <= 100 |
| STAT_HIS_EFF_CURR_CHG_3_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 100 < Irel_cha <= 140 |
| STAT_HIS_EFF_CURR_CHG_4_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_cha/Irms_cha_lim beim Laden in der Klasse: 140 < Irel_cha |
| STAT_HIS_EFF_CURR_ABS_1_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 0 <= Irel_abs <= 70 |
| STAT_HIS_EFF_CURR_ABS_2_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 70 < Irel_abs <= 100 |
| STAT_HIS_EFF_CURR_ABS_3_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 100 < Irel_abs <= 140 |
| STAT_HIS_EFF_CURR_ABS_4_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 40 <= T: Dauer in Minuten des Relativwerts von Irms_abs/Irms_dch_lim beim Laden und Entladen in der Klasse: 140 < Irel_abs |

### RES_0XDF8F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_TMIN_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei T <= -10: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_TMIN_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei T <= -10: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_TMIN_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei T <= -10: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF90_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_TLOW_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei -10 < T <= 5: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_TLOW_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei -10 < T <= 5: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_TLOW_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei -10 < T <= 5: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF91_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_THIGH_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 5 < T <= 25: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_THIGH_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 5 < T <= 25: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_THIGH_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 5 < T <= 25: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHA_CURR_ERR_INT_LIM_TMAX_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 25 < T: Schwellwert des Fehlerintegrals des Stroms beim Laden [IerrIntLim_cha] |
| STAT_DCH_CURR_ERR_INT_LIM_TMAX_WERT | As | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Bei 25 < T: Schwellwert des Fehlerintegrals des Stroms beim Entladen [IerrIntLim_dch] |
| STAT_HIS_CHG_ERR_LIM_STROM_1_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_cha < IerrIntLim_cha |
| STAT_HIS_CHG_ERR_LIM_STROM_2_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_cha > IerrIntLim_cha |
| STAT_HIS_DCH_ERR_LIM_STROM_1_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: 0 <= IerrInt_dch < IerrIntLim_dch |
| STAT_HIS_DCH_ERR_LIM_STROM_2_TMAX_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bei 25 < T: Dauer in Minuten beim  Laden in der  Klasse: IerrInt_dch > IerrIntLim_dch |

### RES_0XDF9C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWR_STUETZP_P1_WERT | W | high | unsigned char | - | - | 200.0 | 1.0 | 0.0 | Zur Verfügung stehende Ladeleistung, Stützpunkt P1 |
| STAT_PWR_STUETZP_P2_WERT | W | high | unsigned char | - | - | 200.0 | 1.0 | 0.0 | Zur Verfügung stehende Ladeleistung, Stützpunkt P2 |
| STAT_TEMP_STUETZP_T1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T1 |
| STAT_TEMP_STUETZP_T2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T2 |
| STAT_TEMP_STUETZP_T3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T3 |
| STAT_TEMP_STUETZP_T4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T4 |
| STAT_SOC_STUETZP_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC1 |
| STAT_SOC_STUETZP_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC2 |
| STAT_SOC_STUETZP_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC3 |
| STAT_SOC_STUETZP_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC4 |
| STAT_SOC_STUETZP_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC5 |
| STAT_FAKT_P1_T1_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC1 |
| STAT_FAKT_P1_T1_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC2 |
| STAT_FAKT_P1_T1_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC3 |
| STAT_FAKT_P1_T1_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC4 |
| STAT_FAKT_P1_T1_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC5 |
| STAT_FAKT_P1_T2_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC1 |
| STAT_FAKT_P1_T2_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC2 |
| STAT_FAKT_P1_T2_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC3 |
| STAT_FAKT_P1_T2_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC4 |
| STAT_FAKT_P1_T2_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC5 |
| STAT_FAKT_P1_T3_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC1 |
| STAT_FAKT_P1_T3_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC2 |
| STAT_FAKT_P1_T3_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC3 |
| STAT_FAKT_P1_T3_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC4 |
| STAT_FAKT_P1_T3_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC5 |
| STAT_FAKT_P1_T4_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC1 |
| STAT_FAKT_P1_T4_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC2 |
| STAT_FAKT_P1_T4_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC3 |
| STAT_FAKT_P1_T4_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC4 |
| STAT_FAKT_P1_T4_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC5 |
| STAT_FAKT_P2_T1_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC1 |
| STAT_FAKT_P2_T1_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC2 |
| STAT_FAKT_P2_T1_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC3 |
| STAT_FAKT_P2_T1_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC4 |
| STAT_FAKT_P2_T1_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC5 |
| STAT_FAKT_P2_T2_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC1 |
| STAT_FAKT_P2_T2_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC2 |
| STAT_FAKT_P2_T2_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC3 |
| STAT_FAKT_P2_T2_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC4 |
| STAT_FAKT_P2_T2_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC5 |
| STAT_FAKT_P2_T3_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC1 |
| STAT_FAKT_P2_T3_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC2 |
| STAT_FAKT_P2_T3_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC3 |
| STAT_FAKT_P2_T3_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC4 |
| STAT_FAKT_P2_T3_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC5 |
| STAT_FAKT_P2_T4_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC1 |
| STAT_FAKT_P2_T4_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC2 |
| STAT_FAKT_P2_T4_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC3 |
| STAT_FAKT_P2_T4_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC4 |
| STAT_FAKT_P2_T4_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC5 |

### RES_0XDFA0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLKAPAZITAET_MIN_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen minimalen gemessenen Zellkapazität aller Zellen in Ah |
| STAT_ZELLKAPAZITAET_MAX_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen maximalen gemessenen Zellkapazität aller Zellen in Ah |
| STAT_ZELLKAPAZITAET_MEAN_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen mittleren gemessenen Zellkapazität gemittelt über alle Zellen in Ah |
| STAT_ZELLSPANNUNG_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen minimalen gemessenen Zellspannung aller Zellen in V |
| STAT_ZELLSPANNUNG_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen maximalen gemessenen Zellspannung aller Zellen in V |
| STAT_ZELLSPANNUNG_MEAN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen mittleren gemessenen Zellspannung aller Zellen in V |
| STAT_ZELLTEMPERATUR_MIN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen minimalen gemessenen Zelltemperatur aller Zellen in °C |
| STAT_ZELLTEMPERATUR_MAX_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen maximalen gemessenen Zelltemperatur aller Zellen in °C |
| STAT_ZELLTEMPERATUR_MEAN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der aktuellen mittleren gemessenen Zelltemperatur aller Zellen in °C |
| STAT_ZELLWIDERSTANDSFAKTOR_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe des aktuellen minimalen gemessenen Widerstandsfaktors aller Zellen |
| STAT_ZELLWIDERSTANDSFAKTOR_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe des aktuellen maximalen gemessenen Widerstandsfaktors aller Zellen |
| STAT_ZELLWIDERSTANDSFAKTOR_MEAN_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe des aktuellen mittleren gemessenen Widerstandsfaktors aller Zellen |
| STAT_ZELLSOC_MIN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des aktuellen minimalen gemessenen SoC aller Zellen in % |
| STAT_ZELLSOC_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des aktuellen maximalen gemessenen SoC aller Zellen in % |
| STAT_ZELLSOC_MEAN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des aktuellen mittleren gemessenen SoC aller Zellen in % |
| STAT_ZELLOCV_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen minimalen im letzten Ruhezustand gemessenen OCV aller Zellen in V |
| STAT_ZELLOCV_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen maximalen im letzten Ruhezustand gemessenen OCV aller Zellen in V |
| STAT_ZELLOCV_MEAN_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Ausgabe der aktuellen mittleren im letzten Ruhezustand gemessenen OCV aller Zellen in V |
| STAT_IMPEDANCE_ESTIMATION_ALPHA_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Aktueller Alterungsfaktor des seriellen und parallelen ohmschen Wider aktuellenstands sowie der parallelen Kapazität (1,5 = Eröhung des aktuellen Wider aktuellenstands um 50%) |

### RES_0XDFA1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVER_VOLT_INT_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_over] Fehlerschwellwert des ÜBERspannungsintegrals (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.)  |
| STAT_UNDER_VOLT_INT_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_under] Fehlerschwellwert des UNTERspannungsintegrals (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_UNDER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_UNDER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: UerrInt_under > UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_OVER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_OVER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: UerrInt_over > UerrIntLim_over |

### RES_0XDFAE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MIN_NENN_MAX_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des maximalen MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. |
| STAT_SOC_MIN_NENN_MIN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des minimalen MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. |

### RES_0XDFC9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_LD_LIM_WERT_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | projektspez. Ladestromschwelle, ab der die Intergration läuft |
| STAT_LD_INT_LIM_START_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | projektspez. untere Integralschwelle, ab der der HVS-Eigenschutz beginnt zu wirken |
| STAT_LD_INT_LIM_END_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | projektspez. obere Integralschwelle, ab der der HVS-Eigenschutz maximal wirkt |
| STAT_LPA_HVS_LD_INT_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller HVS-Eigenschutz-Stromintegralwert |

### RES_0XDFE1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SP_ID_00 | 0-n | high | unsigned int | - | TAB_SP_TYP | - | - | - | ID_00 Speicher-Typ [Ungültigkeitswert = FFFF] |
| STAT_SP_ID_01_WERT | HEX | high | unsigned int | - | - | - | - | - | ID_01 Speicher-Nummer [Ungültigkeitswert = FFFF] |

### RES_0XDFE2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_LAST_BALANCING_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SoC bei dem zuletzt erfolgreich Symmetriert wurde |
| STAT_TIME_LAST_BALANCING_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolute Zeit bei der zuletzt erfolgreich symmetriert wurde |
| STAT_DIFFERENCE_VOLTAGE_LAST_BALANCING_WERT | mV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannungsdifferenz beim letzten erfolgreichen Symmetriervorgang |
| STAT_LAST_PARKING_SOC_1_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Letzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_2_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Zweitletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_3_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Drittletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_4_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Viertletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |
| STAT_LAST_PARKING_SOC_5_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Fünftletzter SoC bei dem das Fahrzeug Ruhespannung erreicht hat |

### RES_0XE540_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COOL_VALVE_PRESENT_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparameter: Kühlventil aktiv |
| STAT_COUNTRY_CODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparameter: Ländercode |
| STAT_COD_FUNKTION_SWITCH_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparameter: Funktion Switch |
| STAT_COD_STATSP_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierparameter: Stationärspeicher |

### RES_0XE5EC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_OFFSET_AKT_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktueller SoH-Offset-Wert in Prozent |
| STAT_SOH_OFFSET_DEGRAD_AKT_WERT | mth | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Aktuelle (restliche) Degradationsdauer des SoH-Offset-Werts in Monaten |

### RES_0XE5F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVOFF_VOLTAGES_COUNTER_RB1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der geschriebenen Datensätze |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB1_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB1_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB1_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB1_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_1 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_2 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_3 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB1_4 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_1 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_2 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_3 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB1_4 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen (n) |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB1_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_COUNTER_RB2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der geschriebenen Datensätze |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MIN_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Minimale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MIN_RB2_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MEAN_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Durchschnittliche Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_MAX_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Maximale Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_IDX_UCEL_MAX_RB2_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der maximalen Zellspannung |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_3_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_UCEL_1_RB2_4_WERT | V | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Spannung der Zelle mit dem niedrigsten Index (erste Zelle) |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_SME_LIFETIME_RB2_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SME Lebensdauer zum Zeitpunkt der Spannungsmessung |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_1 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_2 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_3 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_STAT_SYM_RB2_4 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Zellsymmetrierung: 0 = inaktiv; 1 = aktiv |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_1 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_2 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_3 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| STAT_HVOFF_VOLTAGES_INFO_SYM_RB2_4 | 0-n | high | unsigned char | - | TAB_INFO_SYM_RB | - | - | - | Info über die Anzahl in Symmetrierung befindlicher Zellen |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_T_CORE_AVG_RB2_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Speichertemperatur |
| STAT_HVOFF_VOLTAGES_COUNTER_SCORE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler zur Bewertung des Spannungsabfalls über die Lebenszeit |

### RES_0XE5F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_MEAN_DCH_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Entladeende des ersten Kapazitätstests |
| STAT_TEMP_MIN_DCH_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Entladeende des ersten Kapazitätstests |
| STAT_TEMP_MAX_DCH_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Entladeende des ersten Kapazitätstests |
| STAT_TEMP_MEAN_CHA_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Ladeende des ersten Kapazitätstests |
| STAT_TEMP_MIN_CHA_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Ladeende des ersten Kapazitätstests |
| STAT_TEMP_MAX_CHA_END_TEST_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Ladeende des ersten Kapazitätstests |
| STAT_FRC_PWR_CHG_TEST_1_WERT | kW | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ladeleistung (aus Prognose) bei erstem Kapazitätstest |
| STAT_I_DCH_END_FILT_TEST_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Entladeabbruch-Strom (gefiltert) bei erstem Kapazitätstest |
| STAT_U_CELL_MIN_IDX_DCH_END_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung bei Entladeende des ersen Kapazitätstests |
| STAT_TEMP_MEAN_DCH_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MIN_DCH_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MAX_DCH_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MEAN_CHA_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Ladeende des zweiten Kapazitätstests |
| STAT_TEMP_MIN_CHA_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Ladeende des zweiten Kapazitätstests |
| STAT_TEMP_MAX_CHA_END_TEST_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Ladeende des zweiten Kapazitätstests |
| STAT_FRC_PWR_CHG_TEST_2_WERT | kW | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ladeleistung (aus Prognose) bei zweitem Kapazitätstest |
| STAT_I_DCH_END_FILT_TEST_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Entladeabbruch-Strom (gefiltert) bei zweitem Kapazitätstest |
| STAT_U_CELL_MIN_IDX_DCH_END_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung bei Entladeende des zweiten Kapazitätstests |
| STAT_TEMP_MEAN_DCH_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Entladeende des dritten Kapazitätstests |
| STAT_TEMP_MIN_DCH_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Entladeende des dritten Kapazitätstests |
| STAT_TEMP_MAX_DCH_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Entladeende des dritten Kapazitätstests |
| STAT_TEMP_MEAN_CHA_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mittlere simulierte Temperatur auf HVS-Ebene bei Ladeende des dritten Kapazitätstests |
| STAT_TEMP_MIN_CHA_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimale simulierte Temperatur auf HVS-Ebene bei Ladeende des dritten Kapazitätstests |
| STAT_TEMP_MAX_CHA_END_TEST_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale simulierte Temperatur auf HVS-Ebene bei Ladeende des dritten Kapazitätstests |
| STAT_FRC_PWR_CHG_TEST_3_WERT | kW | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ladeleistung (aus Prognose) bei drittem Kapazitätstest |
| STAT_I_DCH_END_FILT_TEST_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Entladeabbruch-Strom (gefiltert) bei drittem Kapazitätstest |
| STAT_U_CELL_MIN_IDX_DCH_END_TEST_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index der Zelle mit der minimalen Zellspannung bei Entladeende des dritten Kapazitätstests |

### RES_0XE5F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPI_REL_TEMP_WERT | % | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Relative Abweichung des berechneten Temperaturgradienten vom Schwellenwert |
| STAT_CPI_TEMP_GRAD_WERT | - | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | Berechneter Temperaturgradient der CPI-Diagnose (Einheit K/min) |
| STAT_CPI_E_LOSS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Berechnete Verlustenergie der CPI-Diagnose (Einheit: Ws/min) |
| STAT_CPI_DIAGNOSE | 0-n | high | unsigned char | - | TAB_CPI_DIAGNOSE_STATUS | - | - | - | Ergebnis CPI Diagnose |
| STAT_CPI_TEMP_UMGEBUNG_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Umgebungstemperatatur während der CPI-Diagnose |
| STAT_CPI_FRT_AC | 0-n | high | unsigned char | - | TAB_AC_STATUS | - | - | - | Status der Innenraum-Klimatisierung während der CPI-Diagnose |
| STAT_CPI_LIFE_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel am Ende der CPI-Diagnose |
| STAT_ANZAHL_CPI_OK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen seit dem letzten Reset mit Ergebnis Diag OK |
| STAT_ANZAHL_CPI_FAILED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der CPI-Diagnosen seit dem letzten Reset mit Ergebnis Diag Failed |
| STAT_ANZAHL_CPI_ABGEBROCHEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der vorzeitig abgebrochenen CPI-Diagnosen seit dem letzten Reset |

### RES_0XE5FA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPATEST_ASYM_ZELLE_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zell-Index der Zelle, die während des Kapazitäts-Test am tiefsten entladen wurde. |
| STAT_KAPATEST_ASYM_MOD_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Modul-Index der Zelle, die während Kapazitätstest am tiefsten entladen wurde. |
| STAT_KAPATEST_ASYM_POT_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kapazitätsbereich, der potenziell durch eine Symmetrierung nutzbar gemacht werden kann. |

### RES_0XF190_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FGNR17_TEXT | TEXT | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | 17-Stellige Fahrgestellnummer '00000000000000000' wenn keine Fahrgestellnummer vorhanden (jungfräuliches Steuergerät). Hinweis: Der Resultwert '00000000000000000' wird zurückgeliefert, falls das CAS 0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF im Antworttelegramm liefert. |

### RES_0XF500_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZUNG | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG | - | - | - | Ergebnis der Prüfung der Heizung |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALTERUNG_INNENWIDERSTAND_TS | 0x6334 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | Alterung des Innenwiderstands in Prozent: Innenwiderstand des Speichers im Neuzustand auf den aktuellen Wert des Innenwiderstands bezogen  (R_neu /R_akt) *100   (100% = Neuzustand, sinkt mit Alterung) | % | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ALTERUNG_KAPAZITAET_TS | 0x6335 | STAT_ALTERUNG_KAPAZITAET_WERT | Restkapazitaet des Speichers | % | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SOC_GRENZEN | 0x6500 | - | State of Charge Grenzwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6500_D | - |
| _ISOLATION | 0x6501 | - | Isolationsüberwachung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6501_D | - |
| _UEBERLAST_SCHWELLE | 0x6502 | - | Lade- und Entladestromgrenzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6502_D | - |
| _KURZSCHLUSS_STROMGRENZE | 0x6503 | - | Kurzschluss Stromgrenze | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6503_D | - |
| _LADE_SPANNUNGSGRENZE | 0x6504 | - | Lade Spannungsgrenze | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6504_D | - |
| _SCHUETZ_K1 | 0x6506 | - | K1 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6506_D | - |
| _SCHUETZ_K2 | 0x6507 | - | K2 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6507_D | - |
| _SCHUETZ_K3 | 0x6508 | - | K3 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6508_D | - |
| _ENTLADE_SPANNUNGSGRENZE | 0x650B | - | Entlade-Spannungsgrenze | - | - | - | - | - | - | - | - | - | 2E | ARG_0x650B_D | - |
| _SYM_MODUS | 0x6511 | - | Symmetriemodus der SEM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6511_D | - |
| _MESSBOTSCHAFTEN | 0x6512 | - | Messbotschaften ein/ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6512_D | - |
| _ST_SYM_MODUS | 0x6516 | STAT_SYM_MODUS | Status der Symmetrierung | 0-n | - | High | unsigned char | TAB_SYM_MODUS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CSC_STANDBY | 0x6519 | - | CSCs in Standby-Mode setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6519_D | - |
| _ANFORDERUNG_SCHUETZE_SCHLIESSEN | 0x651B | - | Schütze schließen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651B_D | - |
| _STEUERN_PRUEFSTANDSMODUS | 0x651C | - | Betriebsgrenzen von SOC, Strom, Spannung und Temperatur bis auf die Sicherheitsgrenzen öffnen und ISO-Wächter deaktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651C_D | - |
| _UEBERLAST_ZAHELER | 0x651D | - | Diagnosejob zum Auslesen der aufgetretenen Überlastausfälle für Gewährleistungs-Rückläufer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x651D_D |
| _NV_DATA_RESET | 0x651F | - | NV-Daten der SME auf Initialzustand zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651F_D | - |
| _STEUERN_UEBERNAHME_KAPATEST_NV | 0x6525 | - | Diagnoseschalter um Übernahme vom Ergebnis eines Kapazitätstests in den SoH_C-Schätzer zu steuern | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6525_D | - |
| _STATUS_UEBERNAHME_KAPATEST_NV | 0x6526 | STAT_UEBERNAHME_KAPATEST_NV | Aktuelle Einstellung der Ergebnisübertragung eines Kapazitätstests in den SoH_C-Schätzer (0: keine Übernahme, 1: Übernahme (standard)) | 0-n | - | High | unsigned char | TAB_KAPATEST | - | - | - | - | 22 | - | - |
| _ADRESSBEREICH | 0x6527 | - | 'Mit diesem Steuernjob kann eine Umschaltung der SME auf einen von 16 vordefinierten CAN-Adressbereichen in Verbindung mit einer von 16 vordefinierten Diagnoseadressen aktiviert werden, die von den standardmäßigen SME-Adressen abweichen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6527_D | - |
| _DEM_TEST | 0x6528 | - | Fehlerspeicher Test aktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6528_D | - |
| _DEM_TEST_EINTRAG | 0x6529 | - | Fehlerspeichereintrag im Test Modus setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6529_D | - |
| ISOLATIONSWIDERSTAND_KOMMUNIKATION | 0xAD5E | - | JOB ENTFALLEN  Aktivieren des BN-Signal AVL_ISRE auf dem Fahrzeugbus. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD5E_R |
| ISOLATION | 0xAD61 | - | Ergebnis Isolationstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD61_R |
| KAPAZITAET_BESTIMMUNG | 0xAD66 | - | Bestimmung der Kapazität | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD66_R |
| HEIZUNG | 0xAD6A | - | Aktivieren und Auslesen der Heizung in HV-Batterie | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD6A_R |
| SYMMETRIERUNG | 0xAD6B | - | Symmetrierung ansteueren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD6B_R |
| ZELLSPANNUNG_UNPLAUSIBEL_LESEN | 0xAD6C | - | Liefert die Modulnummer der CSCs zurück, in der ein unplausibler Spannungswert detektiert wurde (verknüpft mit DTC). Rückgabewert ist ein Komponentenvektor Länge 8) mit der Belegung 0 = kein Fehler, 1 = Fehler erkannt. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD6C_R | RES_0xAD6C_R |
| MODULTEMPERATUREN_LESEN | 0xAD6D | - | Aktuell gemessene Temperatur vom ausgewählten Modul | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD6D_R | RES_0xAD6D_R |
| ZELLSPANNUNG_LESEN | 0xAD6E | - | Zelle deren Spannung ermittelt werden soll | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD6E_R | RES_0xAD6E_R |
| HIS_TEMP_MOD_LESEN | 0xAD6F | - | Zeit (Minuten bei HVON und 100ms bei NO_OP) in verschiedenen Temperaturklassen der maximalen und minimalen Zelltemperatur von einzelnen Modulen (Speicher in Betrieb) und der mittleren Zelltemperatur der einzelnen Module (Speicher außer Betrieb). ACHTUNG: Die korrekte Einheit des Ausgangwerts STAT_HIS_TEMP_NO_OP_MOD_MEAN_X_WERT ist [100ms] und nicht [min] wie im Kasten EINHEIT eingetragen ist.  Der Counter kann ab ca. 13,2 Jahre von Logging-Anfgang aufgrund von Integer-overflow wieder von null anfangen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD6F_R | RES_0xAD6F_R |
| HIS_ERR_LIM_SPANNUNG_MOD_LESEN | 0xAD70 | - | Ausgabe der Verweildauer in Spannungsfehlergrenzklassen von einzelnen Modulen. Bei Temperaturen < -10°C verändert sich die Spannungsfehlergrenze temperaturabhängig. (Samsung) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD70_R | RES_0xAD70_R |
| HIS_SPANNUNG_MOD_LESEN | 0xAD71 | - | Zeit in Minuten in verschiedenen Spannungsklassen von einzelnen Modulen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD71_R | RES_0xAD71_R |
| HEIZUNG_FUNKTION | 0xAD73 | - | Ausführen der funktionale Diagnose Heizung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD73_R |
| HIS_ZELL_DSOCS_LESEN | 0xAD74 | - | Auslesen der aufsummierten Delta_SOC-Werte alle Einzelzellen über X_end Fahrzyklen(X_end=30, kalibrierbar). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD74_R | RES_0xAD74_R |
| SYMMETRIERUNG_FIXSPG | 0xAD75 | - | Anstoßen der spannungsgesteuerte Symmetrierung per Zielspannungsvorgabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD75_R | RES_0xAD75_R |
| CSC_IDS_LESEN | 0xAD76 | - | Eingabe der CSC-Nummer zum Auslesen des DMC  von CSC x | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD76_R | RES_0xAD76_R |
| STEUERN_MIN_KAPAZITAET_MOD_LESEN | 0xAD77 | - | Auslesen der aktuellen minimalen Kapazität des Modul x, bezogen auf Kapazitätsquotient (Kapazitätsquotient  = (C_akt /C_nenn(neu)) *100   (100% = entspricht Nennkapazitaet; Kapazitaetsquotient > 100%  entspricht Zellkapazitaet > Nennkapazitaet, Kapazitaetsquotient < 100%  entspricht Zellkapazitaet < Nennkapazitaet). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD77_R | RES_0xAD77_R |
| MAX_INNENWIDERSTANDSFAKTOR_MOD_LESEN | 0xAD78 | - | Auslesen des aktuellen maximalen Innenwiderstandsfaktors des Modul x, (Faktor= 0-5 mit zwei Nachkommastellen; Faktor < 1 entspricht reduziertem Zellinnenwiderstand gegenüber den Durschnitt, Faktor >1  entspricht einem erhöhten Zellwiderstand gegenüber dem Durchschnitt ) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD78_R | RES_0xAD78_R |
| ZELLPACK_STATUS_LESEN | 0xAD79 | - | Auslesen des Alterungsstatus (z.B Defekt usw.) des Modul x | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD79_R | RES_0xAD79_R |
| SBOX_ANZAHL_TAUSCH_LESEN | 0xAD7A | - | Inkrementieren und Auslesen des SBOX -Tausch Zählers. Der Zähler wird bei jedem Tausch der SBOX per Diagnosejob inkrementiert werden. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD7A_R | RES_0xAD7A_R |
| HIS_SPANNUNG_NOP_MOD_LESEN | 0xAD7C | - | Zeit in 100ms in verschiedenen Spannungsklassen von einzelnen Modulen während Speicher nicht im Betrieb ACHTUNG: Die korrekte Einheit des Ausgangwerts STAT_HIS_SPANNUNG_NOP_MOD_X_WERT ist [100ms] und nicht [min] wie im Kasten EINHEIT eingetragen ist. Der Counter kann ab ca. 13,2 Jahre von Logging-Anfgang aufgrund von Integer-overflow wieder von null anfangen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD7C_R | RES_0xAD7C_R |
| ZELLPACK_DMC_LESEN | 0xAD7D | - | Dieser Job liest den DMC von Zellpack x aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD7D_R | RES_0xAD7D_R |
| RB_SOC_REKALIBRIERUNG | 0xD4C5 | - | Auslesen des Betteriezustandes VOR und NACH der letzten 5 SOC Rekalibrierungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C5_D |
| RB_SOH_ADAPTION | 0xD4C6 | - | Dieser Job ist nicht mehr angefordert und wird nicht mehr unterstützt (Alle Rückgaben liefern '0') | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C6_D |
| SOC_GUETE | 0xD4C7 | STAT_SOC_GUETE_WERT | Auslesen des aktuellen SOC Gütewertes auf Basis der SOC Schätzung (1 == beste Güte,  >30 == schlechteste Güte ) | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HIS_SOC_GUETE | 0xD4C8 | - | Auslesen der Aufenthaltsdauer in 5 Klassen des SOC Gütewertes auf Basis der SOC Schätzung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4C8_D |
| ANZAHL_OCV_SOC_REKAL | 0xD4C9 | STAT_ANZAHL_OCV_SOC_REKAL_WERT | Anzahl der OCV-SOC Rekalibrierungen | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ANZAHL_LADEENDE_REKAL | 0xD4CA | STAT_ANZAHL_LADEENDE_REKAL_WERT | Anzahl der SoC Rekalibrierungen am Ladeende | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RB_SOC_VOLLADEENDE | 0xD4CB | - | Auslesen verschiedener SOCs der letzten 5 Vollladevorgänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CB_D |
| KUEHLDAUER_HVB | 0xD4CC | - | Job ist nicht für SME_03 relevant // Ersatz ist STATUS_KUEHLDAUER  Kühldauer der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CC_D |
| LADUNGSVERLUST_ZELLE | 0xD67F | - | Ringspeicher zum Ladungsverlust der Zellen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD67F_D |
| STATUS_MIN_KAPAZITAET_MOD | 0xD681 | - | Auslesen der aktuellen minimalen Kapazität ALLER Module, bezogen auf Kapazitätsquotient. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD681_D |
| RB_ISO_MESS_TRG | 0xD6C7 | - | Rückgabe der R_iso incl. Qual. der letzten 5 Nachlaufmessungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C7_D |
| RB_ISO_MESS_STD_IO_NIO | 0xD6C8 | - | Rückgabe der letzten 10 Ereignisse der R_iso Standard Messung bei Fehlerschwellenunter-/-überschreitung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C8_D |
| RB_ISO_MESS_TRG_IO_NIO | 0xD6C9 | - | Rückgabe der letzten 10 Ereignisse der getriggerten Nachlauf-ISO-Messung bei Fehlerschwellenunter-/-überschreitung  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C9_D |
| ISODIAG_INPUT_ISTWERTE | 0xD6CA | - | Rückgabe von Inputsignalen der R_ISO Berechnungsformel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CA_D |
| ISO_ERR_STD_FZ1_2 | 0xD6CB | - | Rückgabe von Inputsignalen und Ergebniswerten der Standard-ISO-Messung zu Fehlerzeitpunkt 1 und 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CB_D |
| RB_SOH_KAPATEST | 0xD6CC | - | Rückgabe der Ergebnisse der letzten 3 HVS-Offboard-Kapatests (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CC_D |
| REKU_VOLTAGE_LIFT | 0xD6CD | - | Rückgabe der Dauer und Häufigkeit, in der erhöhte Rekuperationsleistung zur Verfügung gestellt wird bei fast vollem HVS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CD_D |
| RB_ALTERUNG_KAPA | 0xD6CE | - | Rückgabe der Ergebnisse der letzten 5 SoH_C-Adaptionen incl. Kapatests  (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CE_D |
| CSC_TEMPERATUREN | 0xD6CF | - | Rückgabe der aktuellen Temperaturmesswerte aller CSC-Sensoren (max 3*12, ohne HW-RL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6CF_D |
| ISO_ERR_TRG_FZ1_2 | 0xD6D1 | - | Rückgabe von Inputsignalen und Ergebniswerten der getriggerte Nachlauf-ISO-Messung zu Fehlerzeitpunkt 1 und 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6D1_D |
| SCHUETZ_SCHALTER | 0xDD60 | STAT_SCHUETZ_SCHALTER | Status der Schützschalter: geschlossen, offen, verschweißte Kontakte oder nicht definiert. Ergebnisse siehe Tabelle TAB_SCHUETZ_SCHALTER | 0-n | - | High | unsigned char | TAB_SCHUETZ_SCHALTER | - | - | - | - | 22 | - | - |
| SCHUETZ_FREIGABE | 0xDD61 | - | Schreibt bzw. liest das Bit zur Freigabe oder Sperrung der Schützschalter. Job ist Klemmensicher | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD61_D | RES_0xDD61_D |
| SCHUETZSCHALTUNGEN_ANZAHL | 0xDD63 | - | Anzahl der Schaltungen der Schützschalter (stromlos und unter Last) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD63_D |
| HVIL | 0xDD64 | STAT_GUELTIG | Ergebnis HVIL-Prüfung | 0-n | - | High | unsigned char | TAB_STATUS_HVIL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG | 0xDD66 | STAT_HV_SPANNUNG_WERT | Zwischenkreisspannung zum HV-Anschlussstecker, abhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ANZAHL_KUEHLANFORDERUNG_DRINGEND | 0xDD67 | STAT_ANZAHL_KUEHLANFORDERUNG_DRINGEND_WERT | Anzahl aufeinanderfolgenender Wachzyklen mit dringender Kühlanforderung (Lebensdauer-Max.wert) | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_BERECHNET | 0xDD68 | STAT_HV_SPANNUNG_BERECHNET_WERT | Batteriespannung hinter den Schützen, unabhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HV_STROM | 0xDD69 | STAT_HV_STROM_WERT | HV-Strom in A | A | - | High | signed long | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ISOLATIONSWIDERSTAND | 0xDD6A | - | Auslesen des aktuell anliegenden Isolationswiderstands | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD6A_D |
| KUEHLKREISLAUF_TEMP | 0xDD6C | STAT_TEMP_KUEHLKREISLAUF_WERT | Temperatur des Kühlmediums in °C (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SCHUETZE_MAX_SOC_SICHERHEITABFRAGE | 0xDD6E | - | JOB ENTFALLEN Hauptschütze schalten bei SOC grösser 90 %. Achtung!Dieser Job muss in allen Folgetools mit Security Abfrage gesichert sein. -- Dieser Job wird NICHT mehr untersützt!! | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD6E_D | - |
| KUEHLKREISLAUF_VENTIL | 0xDD6F | - | Status / Steuern Kühlmittel-Ventil: Geschlossen oder offen / schliessen oder öffnen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD6F_D | RES_0xDD6F_D |
| AUFSTART_VERHINDERER | 0xDD72 | STAT_AUFSTART_VERHINDERER | Grund für nicht Aufstarten des HV-Systems | 0-n | - | High | unsigned char | TAB_AUFSTART_VERHINDERER | - | - | - | - | 22 | - | - |
| CUMULATIVE_LADUNG | 0xDD73 | STAT_LADUNG_AMP_STUNDEN_WERT | Die kumulierte Ladung für Ladevorgänge in Ah | Ah | - | Low | unsigned long | - | 1.0 | 3600.0 | 0.0 | - | 22 | - | - |
| CUMULATIVE_ENTLADUNG | 0xDD74 | STAT_ENTLADUNG_AMP_STUNDEN_WERT | Die kumulierte Ladung für Entladevorgänge in Ah | Ah | - | Low | unsigned long | - | 1.0 | 3600.0 | 0.0 | - | 22 | - | - |
| STATUS_KL30C_SPANNUNG | 0xDD76 | STAT_KL30C_SPANNUNG_WERT | Spannung Klemme 30C in V | V | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SOC_REKALIBRIERUNG | 0xDD78 | - | Rekalibrierung des SoC Schätzers, um nach langer Lagerzeit den aktuellen SoC zu erhalten. ## Job darf nur bei GEÖFFNETEN Schützen durchgeführt werden! ACHTUNG bei SE07: Durch den Job wird bei BEV-Fahrzeugen zudem ein erkanntes Fahrtende (komplett entladene/defekte Zelle) zurückgesetzt! | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD78_D | - |
| SCHUETZE_MIN_SOC_SICHERHEITABFRAGE | 0xDD79 | - | JOB ENTFALLEN Hauptschütze schalten bei min SOC (kleiner 5% SOC). Achtung!Dieser Job muss in allen Folgetools mit Security Abfrage gesichert sein. Ausführen nicht möglich während Fahrt. -- Dieser Job wird NICHT mehr untersützt!! | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD79_D | - |
| ALTERUNG_KAPAZITAET | 0xDD7B | STAT_KAPAZITAET_WERT | Auslesen der Justierung Kapazität Batterie | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GW_INFO | 0xDD7C | - | Gewährleistungsdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7C_D |
| STROMGRENZEN | 0xDD7D | - | Stromgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7D_D |
| SPANNUNGSGRENZEN | 0xDD7E | - | Spannungsgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7E_D |
| HVB_HISTORIE_ZYKLEN | 0xDD8E | - | Ausgabe der Strombelastung (Stromhistogramm) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD8E_D |
| ZEIT_TEMP_HISTOGRAMM | 0xDD90 | - | Zeit in verschiedenen Temperaturklassen und Steuergerätezuständen (SG wach, SG schläft) der gemittelten berechneten Temperatur über alle Zellkerne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD90_D |
| ZEIT_SOC_KLASSE | 0xDD91 | - | Liefert die Aufenthaltsdauer des SoC in SoC-Klassen über Lebensdauer - SE03 ab 11/13 Gesamtdauer (schlafen + wach) - bis 11/13 nur Betriebsdauer (wach) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD91_D |
| HV_BATT_HIST_SOC_T1_1 | 0xDD94 | - | Dauer bei Temperatur kleiner als 0°C und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD94_D |
| HV_BATT_HIST_SOC_T2_1 | 0xDD95 | - | Dauer bei 0°C kleiner als Temperatur kleiner als 10 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD95_D |
| HV_BATT_HIST_SOC_T3_1 | 0xDD96 | - | Dauer bei 10°C kleiner als Temperatur kleiner als 20 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD96_D |
| HV_BATT_HIST_SOC_T4_1 | 0xDD97 | - | Dauer bei 20°C kleiner als Temperatur kleiner als 27,5 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD97_D |
| HV_BATT_HIST_SOC_T5_1 | 0xDD98 | - | Dauer bei 27,5°C kleiner als Temperatur kleiner als 32,5 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD98_D |
| HV_BATT_HIST_SOC_T6_1 | 0xDD99 | - | Dauer bei 32,5°C kleiner als Temperatur kleiner als 40 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD99_D |
| HV_BATT_HIST_SOC_T7_1 | 0xDD9A | - | Dauer bei 40 °C kleiner als Temperatur und bei unterschiedlichen Werten von Strom und SOC - Teil 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD9A_D |
| LADEZIELSPANNUNG_TAUSCH | 0xDDAB | STAT_LADEZIELSPANNUNG_WERT | Ausgabe der Ladezielspannung für Modultausch vor Einbau des Moduls ins Fahrzeug | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_BATTERIE | 0xDDB4 | STAT_HV_SPANNUNG_BATT_WERT | Batteriespannung hinter den Schützen, unabhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ALTERUNG_INNENWIDERSTAND | 0xDDB6 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | Alterung des Innenwiderstands in Prozent: Innenwiderstand des Speichers im Neuzustand auf den aktuellen Wert des Innenwiderstands bezogen  (R_neu /R_akt) *100   (100% = Neuzustand, sinkt mit Alterung) | % | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| REFERENZ_KAPAZITAET | 0xDDB7 | - | Restkapazität des Speichers, prozentualer Wert: ( C_akt/C_nenn(neu) ) * 100, 100 = Neuzustand. Roh-Schätzwert des Onboard-Kapazitätsschätzers des Gesamtspeichers | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDB7_D | RES_0xDDB7_D |
| ANZEIGE_SOC | 0xDDBC | - | aktueller Anzeige Soc | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBC_D |
| SERVICE_DISCONNECT | 0xDDBD | STAT_SERVICE_DISCONNECT | Status Service Disconnect (0 = offen, 1 = geschlossen) | 0/1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORLADUNG | 0xDDBE | - | Info über Zeit, Strom und Temperaturen bei Vorladung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBE_D |
| ZELLSPANNUNGEN_MIN_MAX | 0xDDBF | - | minimale und maximale Einzelzellspannungen werden ausgegeben | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBF_D |
| TEMPERATUREN | 0xDDC0 | - | Ausgabe der berechneten Zellkerntemperaturen (minimale, maximale und durchschnittliche) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC0_D |
| ALTERUNG_PARAMETER | 0xDDC2 | - | Korrekturfaktor des seriellen und parallelen ohmschen Widerstands sowie der parallelen Kapazität (1,5 = Eröhung des Widerstands um 50%) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC2_D |
| SOC | 0xDDC4 | - | Auslesen SOC Wert (in %) und Plausibilität oder Vorgabe des SOC Werts (0-100%) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDC4_D | RES_0xDDC4_D |
| HISTO_SYM_DAUER | 0xDDC6 | - | Auslesen der Anzahl von Symmetriervorgängen in den jeweiligen Zeitklassen (Ist-Zeit in der die Symmetrierwiderstände aktiv waren) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC6_D |
| HISTO_SYM_ZELLANZAHL | 0xDDC7 | - | Häufigkeit über Lebensdauer der Zellenanzahl, die zur Symmetrierung angewiesen wurden. Inkrementieren falls Symmertrierbedarf bei Einschlafen nach ERSTEM zyklischen Aufwachen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC7_D |
| SYM_DELTASOC | 0xDDC8 | - | Maximale SoC-Differenz in % über den gesamten HVS. Ringspeicher der letzten 5 Fahrten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC8_D |
| MAX_SYM_DAUER | 0xDDC9 | - | Maximale Symmetriedauer des letzten Symmetriervorgangs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC9_D |
| SERIENNUMMER_ECU | 0xDDCA | STAT_SERIENNUMMER_ECU_TEXT | Seriennummer des SME Steuergeräts | TEXT | - | High | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOC_GRENZEN | 0xDDCB | - | Auslesen und Ändern der SOC Grenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDCB_D |
| SCHUETZ_RESTZAEHLER | 0xDDCC | - | Auslesen oder Rücksetzen (0 = kein Reset; 1 = Reset) des Zählers für die noch möglichen Schaltungen der Schütze K1, K2, K3 | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDCC_D | RES_0xDDCC_D |
| CC_MELDUNG | 0xDDCD | - | Aktivieren / Deaktivierung des Sendens von CC-Meldung (0 = Senden nicht aktiv; 1 = Senden aktiv) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDCD_D | - |
| DIFFERENZ_SPANNUNGEN | 0xDDCF | STAT_DIFF_SPANNUNG_STATISCH_WERT | Differenzspannung: Gesamtspannung HV-Batterie - Summenzellspannung (statische Ermittlung) | V | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ALTERUNG_KAPAZITAET_DEGRADATION | 0xDDE8 | - | Anzahl der alterungsbedingten Spannungsdegradationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE8_D |
| ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB | 0xDDE9 | - | Histogramm mit Häufigkeit einzelner aufgetretener SoC-Hübe im Betriebszeitraum | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE9_D |
| RESET_SBOX_ANZAHL_TAUSCH | 0xDDEA | - | Zurücksetzen des SBOX Tausch-Zählers | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDEA_D | - |
| RINGPUFFER_LADEVORGAENGE | 0xDDEB | - | Rückgabe von Messgrößen der letzten 5 abgeschlossenen Ladevorgänge: - Start-SOC - Verfügbare Ladeleistung - Tatsächlicher End-SOC - Grund Ladeende (Kein Ladeende detektiert 0, Ziel-SOC erreicht 1, U/I-Volladeerkennung 2, Abbruch extern 3, Fehler SME 4) - Start Temperatur  - End-Temperatur  - Zu Beginn prognostizierte Ladezeit in min  - Tatsächliche Ladezeit in min - Relativzeit (fortlaufende Kombi-System-Zeit v. ACAN mit Start im Werk) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDEB_D |
| HIS_PROG_LADEZEIT | 0xDDEC | - | Darstellung der Häufigkeit einer relative Abweichung der Ladezeitprognose vom realen Wert (fact = (t_prog-t_ist) / t_ist * 100%). t_prog =  zu Beginn der Ladephase prognostizierte Wert. t_ist =  tatsächlich bis zum Erreichen des Ladeziels benötigte Zeit. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDEC_D |
| CSC_IDS_ZUORDNEN | 0xDDED | - | Indizes/Verbauposition der einzelnen CSCs vergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDED_D | - |
| CSC_IDS_UEBERNEHMEN | 0xDDEE | - | Indizes/Verbauposition der einzelnen CSCs in SME übernehmen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDEE_D | - |
| HV_SPANNUNG_QUER | 0xDDEF | STAT_HV_SPANNUNG_QUER_WERT | SBox, Hochvolt-Spannung Quer (gleich Batteriespannung wenn K1 oder K3 geschlossen ist) | V | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ALPHA_INITIAL_ALTERUNG | 0xDE37 | STAT_ALPHA_INIT_ALTERUNG_WERT | Initialwert der SOH_R-Berechnung | - | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN | 0xDF60 | - | Zeit für geschlossene Hauptschalter und gesamte Batterielebensdauer (geschlossene und geöffnete Zeit der Hauptschalter) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF60_D |
| COOL_DOWN | 0xDF62 | STAT_ANZAHL_KUEHLVORGAENGE_WERT | Anzahl der CoolDown Szenarios (Abfahrt mit heißem HV-Speicher) | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLEMMENZYKLEN | 0xDF63 | STAT_ANZAHL_KLEMMENZYKLEN_WERT | Anzahl der Klemmenzyklen | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KUEHLDAUER | 0xDF64 | - | Kühldauer der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF64_D |
| TEMP_SPREIZUNG_SYSTEM | 0xDF65 | - | Zeit in verschiedenen dT-Klassen bei aktiver Kühlung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF65_D |
| TEMP_KUEHLMITTEL | 0xDF66 | - | Zeit in verschiedenen Temperaturklassen des Kühlmittels | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF66_D |
| LADUNG_KUEHLUNG | 0xDF67 | - | Ladungs- und Entladungsmenge bei eingeschalteter Kühlung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF67_D |
| HV_BATT_HIST_SOC_T1_2 | 0xDF68 | - | Dauer bei Temperatur kleiner als 0°C und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF68_D |
| HV_BATT_HIST_SOC_T4_2 | 0xDF69 | - | Dauer bei 20°C kleiner als Temperatur kleiner als 27,5 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF69_D |
| HV_BATT_HIST_SOC_T3_2 | 0xDF6A | - | Dauer bei 10°C kleiner als Temperatur kleiner als 20 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF6A_D |
| HV_BATT_HIST_SOC_T5_2 | 0xDF6B | - | Dauer bei 27,5°C kleiner als Temperatur kleiner als 32,5 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF6B_D |
| HV_BATT_HIST_SOC_T2_2 | 0xDF6C | - | Dauer bei 0°C kleiner als Temperatur kleiner als 10 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF6C_D |
| HV_BATT_HIST_SOC_T7_2 | 0xDF6D | - | Dauer bei 40 °C kleiner als Temperatur und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF6D_D |
| HV_BATT_HIST_SOC_T6_2 | 0xDF6E | - | Dauer bei 32,5°C kleiner als Temperatur kleiner als 40 °C und bei unterschiedlichen Werten von Strom und SOC - Teil 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF6E_D |
| HIS_ERR_LIM_STROM | 0xDF6F | - | Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen über alle Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF6F_D |
| HIS_EFF_STROM | 0xDF70 | - | Zeit in Minuten in verschiedenen effektiven Stromwertklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF70_D |
| PROJEKT_PARAMETER | 0xDF71 | - | Auslesen der projektspezifischen Parametern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF71_D |
| KURZSCHLUESSE | 0xDF72 | STAT_ANZAHL_KURZSCHLUESSE_WERT | Anzahl der vorgekommenen Kurschlüsse | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HEIZUNG_VERBAUT | 0xDF73 | STAT_HEIZUNG_VERBAUT | Status Heizung verbaut (0=nein/ 1=ja) | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| VOKO_HEIZ_DAUER | 0xDF74 | - | Anzahl der Vorkonditionierungs-Heizdauervorgängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF74_D |
| LADE_KOND_HEIZ_DAUER | 0xDF75 | - | Anzahl der Heizkonditionierungsvorgängen beim Laden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF75_D |
| VOKO_KUEHL_DAUER | 0xDF76 | - | Anzahl der Vorkonditionierungs-Kühldauervorgängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF76_D |
| LADE_DAUER | 0xDF77 | - | Anzahl der Ladevorgänge in Ladedauerklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF77_D |
| RESET_HIS_TEMP_MOD | 0xDF78 | - | Zurücksetzen des Temperaturhistogramms von den ausgewählten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF78_D | - |
| RESET_HIS_ERR_LIM_SPANNUNG_MOD | 0xDF79 | - | Zurücksetzen des Spannungsfehlergrenzenhistogramms von den ausgewählten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF79_D | - |
| RESET_HIS_SPANNUNG_MOD | 0xDF7A | - | Zurücksetzen des Spannungshistogramms von den ausgewählten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7A_D | - |
| RESET_ISOLATIONSMESSWERTE | 0xDF7B | - | Zurücksetzen der Isolationswiderstandsmesswerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7B_D | - |
| ENTLADESPANNUNGSGRENZE_UNTEN | 0xDF7C | - | Entladespannungsgrenze runter setzen um bei Zellunterspannungen Zuschaltung zu ermöglichen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7C_D | - |
| RESET_ZELLKAPAZITAETEN | 0xDF7D | - | Zurücksetzen der gespeicherten Einzelzellkapazitäten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7D_D | - |
| RESET_ZELL_DSOCS | 0xDF7E | - | Job ist für SME_03 seit I001_14-03-490 nicht angefordert und wurde ersetzt durch STEUERN_SOC_REKALIBRIERUNG  Zurücksetzen der gespeicherten Delta SOCs | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7E_D | - |
| ZELLKAPAZITAETEN | 0xDF7F | - | Setzen der Kapazität von Modul x bzw. aller Module auf einem bestimmten Wert | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7F_D | - |
| SERIENNUMMER_SCHREIBEN | 0xDF80 | - | Schreiben der HV-Speicher Seriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF80_D | - |
| HIS_SOC_WARN_GRENZEN | 0xDF81 | - | Betriebszeit in Minuten in unteren und oberen SOC-Warngrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF81_D |
| ID_SBOX | 0xDF83 | - | Auslesen Identifiationsparameter der SBOX | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF83_D |
| PUFFER_ZELLSPANNUNGEN | 0xDF84 | - | Festhalten der Zellspannugen für einen Zeitschritt | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF84_D | - |
| SOC_HISTORIE | 0xDF86 | - | Auslesen der SOC-Historie Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF86_D |
| ZELLPACK_IDS_ZUORDNEN | 0xDF87 | - | Indizes/Verbauposition der einzelnen Zellpacks vergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF87_D | - |
| ZELLPACK_IDS_UEBERNEHMEN | 0xDF88 | - | Indizes/Verbauposition der einzelnen Zellpacks in SME übernehmen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF88_D | - |
| KL30C | 0xDF89 | STAT_KL30C | Auslesen des logischen Status der KL30C > nicht für I01 und I12, hier STATUS_KL30C_SPANNUNG verwenden | 0-n | - | High | unsigned char | KL30C | - | - | - | - | 22 | - | - |
| HIS_EFF_STROM_TMIN | 0xDF8A | - | Bei T < -10: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8A_D |
| HIS_EFF_STROM_TLOW | 0xDF8B | - | Bei -10 <= T < 5: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8B_D |
| HIS_EFF_STROM_TMID | 0xDF8C | - | Bei 5 <= T < 25 (40 SP01): Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8C_D |
| HIS_EFF_STROM_THIGH | 0xDF8D | - | NUR SE03!!! Bei 25 <= T < 40: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8D_D |
| HIS_EFF_STROM_TMAX | 0xDF8E | - | Bei 40 <= T: Zeit in Minuten in verschiedenen Prozentwertklassen für das Verhältnis effektiver Strom zu Stromgrenze getrennt für Laden und Entladen (SBL) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8E_D |
| HIS_ERR_LIM_STROM_TMIN | 0xDF8F | - | Bei T <= -10: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF8F_D |
| HIS_ERR_LIM_STROM_TLOW | 0xDF90 | - | Bei -10 < T <= 5: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF90_D |
| HIS_ERR_LIM_STROM_THIGH | 0xDF91 | - | Bei 5 < T <= 25: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF91_D |
| HIS_ERR_LIM_STROM_TMAX | 0xDF92 | - | Bei 25 < T: Zeit in Minuten in verschiedenen Stromfehlergrenzenklassen getrennt für Laden und Entladen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF92_D |
| RESET_ALTERUNG_INNENWIDERSTAND | 0xDF93 | - | Resetjob ist nicht mehr relevant. Innenwiderstand wird bei Modultausch automatisch angepasst. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF93_D | - |
| RESET_ALTERUNG_KAPAZITAET_HIST_SOC_HUB | 0xDF94 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job:  STATUS_ALTERUNG_KAPAZITAET_HISTOGRAMM_SOC_HUB >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF94_D | - |
| RESET_BETRIEBSSTUNDEN_HVS | 0xDF95 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job:  STATUS_BETRIEBSSTUNDEN_SME (I01) STATUS_BETRIEBSSTUNDEN_HVS (zukünftige Projekte) >> Achtung: für alle SME-Funktionen erscheint der gesamte HVS mit diesem Zurücksetzen als absolut NEU. Zurücksetzen ist also nur zu empfehlen bei Tausch von vielen bis allen Modulen! | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF95_D | - |
| RESET_ANZAHL_KUEHLANFORDERUNG_DRINGEND | 0xDF96 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_ANZAHL_KUEHLANFORDERUNG_DRINGEND >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF96_D | - |
| RESET_CUMULATIVE_ENT_LADUNG | 0xDF97 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_CUMULATIVE_ENTLADUNG STATUS_CUMULATIVE_LADUNG >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF97_D | - |
| RESET_HIS_EFF_ERR_LIM_STROM_ALL | 0xDF98 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Jobs: STATUS_HIS_EFF_STROM_Txxxx STATUS_HIS_ERR_LIM_STROM_Txxxx >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF98_D | - |
| RESET_HIS_SOC_WARN_GRENZEN | 0xDF99 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_HIS_SOC_WARN_GRENZEN >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF99_D | - |
| RESET_ZEIT_SOC_KLASSE | 0xDF9A | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_ZEIT_SOC_KLASSE >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9A_D | - |
| RESET_ZEIT_TEMP_HISTOGRAMM | 0xDF9B | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_ZEIT_TEMP_HISTOGRAMM >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9B_D | - |
| LADEZEIT_ADAPT_KENNFELD_LESEN | 0xDF9C | - | Auslesen des Kennfeldes von Lernfaktoren zur Korrektur des Ladezeitprognose-Rohwerts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF9C_D |
| RESET_LADEZEIT_ADAPT_KENNFELD | 0xDF9D | - | Zurücksetzen auf den Initialwert des Kennfelds von Lernfaktoren zur Korrektur des Ladezeitprognose-Rohwerts. >> auszuführen bei Modultausch Info: Auslesen der Reset-Initialwerte durch anschließendes Ausführen von LADEZEIT_ADAPT_KENNFELD_LESEN möglich. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9D_D | - |
| VERH_VOLLADE_LADEVORG_LESEN | 0xDF9E | STAT_VERH_VOLLADE_LADEVORG_WERT | Prozentualer Wert vom Verhältnis der Volladevorgänge zu den gesamten Ladevorgängen | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RESET_VERH_VOLLADE_LADEVORG | 0xDF9F | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_VERH_VOLLADE_LADEVORG >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF9F_D | - |
| ZUSTAND_SPEICHER | 0xDFA0 | - | Ausgabe von zentralen Speicherzudstandsgrößen als Max.-, Min.- und Mittelwert | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA0_D |
| HIS_ERR_LIM_SPANNUNG | 0xDFA1 | - | Ausgabe der maximalen Verweildauer in Spannungsfehlergrenzenklassen über alle Module in Minuten. Bei Temperaturen < -10°C verändert sich die Spannungsfehlergrenze temperaturabhängig. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA1_D |
| HIS_SOC_MAX_MIN | 0xDFAE | - | Job ist für SME_03 seit I001_14-03-490 nicht angefordert und somit fortan nicht implementiert.   Ausgabe des minimalen und maximalen MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFAE_D |
| RESET_HIS_SOC_MAX_MIN | 0xDFAF | - | Job ist für SME_03 seit I001_14-03-490 nicht angefordert und somit fortan nicht implementiert.   Zurücksetzen auf Initialwert des minimalen (=255) und maximalen (=0) MIN-Nenn-SoC, der über Fahrzeuglebensdauer auftritt. Auswirkung auf Rückgabe von STATUS_HIS_SOC_MAX_MIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFAF_D | - |
| LPA_HVS_LD_INT | 0xDFC9 | - | Setzen des neuen HVS-Eigenschutz-Stromintegralwertes / Lesen des aktuellen HVS-Eigenschutz-Stromintegralwertes und Rückgabe der projekspezifischen Strom- und Stromintegralgrenzen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFC9_D | RES_0xDFC9_D |
| STATUS_HV_SPEICHER_ID | 0xDFE1 | - | Auslesen der Speicheridentifikationsnummer des HV-Speichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFE1_D |
| SYMMETRIERBAND | 0xDFE2 | - | Informationen zum letzten erfolgreichen Symmetriervorgang und den letzten Ruhespannungs-SoCs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFE2_D |
| CODIERVARIABLEN_HV_SPEICHER | 0xE540 | - | Liest alle Codiervariablen mit Manipulationspotential aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE540_D |
| SOH_OFFSET | 0xE5EC | - | Korrekturgrößen, mit denen die Funktionen zur Kapazitätsalterung im Betrieb  korrgiert werden. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE5EC_D | RES_0xE5EC_D |
| ANZAHL_DEFEKTE_SICHERUNG_RESET | 0xE5EF | - | Setzt die Anzahl der defekten Sicherungen seit dem letzten Tausch aller Module zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5EF_D | - |
| ANZAHL_DEFEKTE_SICHERUNG_INKREMENT | 0xE5F0 | - | Inkrementiert die Anzahl der defekten Sicherungen seit dem letzten Tausch aller Module | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5F0_D | - |
| ANZAHL_DEFEKTE_SICHERUNG | 0xE5F1 | STAT_ANZAHL_DEFEKTE_SICHERUNG_WERT | Anzahl der defekten Sicherungen seit dem letzten Tausch aller Module | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HVOFF_VOLTAGES | 0xE5F2 | - | Statusjob zur Analyse der Spannungsabsenkung nach Abstellen des Fahrzeugs. Diese ermöglicht im Zusammenhang mit den Zellindizes und Statussignalen des Symmetrierbedarfs eine Indizsammlung für defekte bzw. besonders schwache Zellen im Modulverbund. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F2_D |
| RB_SOH_KAPATEST_ERW | 0xE5F3 | - | Erweiterung der Rückgabe der Ergebnisse der letzten 3 HVS-Offboard-Kapatests (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F3_D |
| CPI_ANALYSE | 0xE5F4 | - | Gibt ein Datenpaket mit der kritischsten relativen Temperaturabweichung seit dem letzten Reset zurück (Schleppzeiger). Ein Datenpaket enthält für die Bedatung der CPI-Diagnose relevante Messwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5F4_D |
| KAPAZITAETSTEST_ASYMMETRIE_POTENTIAL | 0xE5FA | - | Rückgabe von Größen zum Asymmetrie-Potenzial des Speichers, die im Rahmen einer Kapazitätsbestimmung (Offboard Kapatest) ermittelt wurden. Ausgegeben werden Zell- und Modul-Index der Zelle, die potenziell die geringste Kapazität besitzt, sowie der zusätzliche Kapazitätsbereich dieser Zelle (in Prozent), der potenziell durch eine Symmetrierung des Speichers nutzbar gemacht werden kann. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FA_D |
| VIN | 0xF190 | - | Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xF190_D | RES_0xF190_D |
| _HEIZUNG | 0xF500 | - | Heizung einschalten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF500_R | RES_0xF500_R |

### TAB_AC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AC OFF |
| 0x01 | AC ON |
| 0x03 | AC INV |
| 0xFF | Wert ungültig |

### TAB_ANST_SCHUETZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |

### TAB_AUFSTART_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | interner Fehler |
| 0x02 | nicht interner Fehler |
| 0xFF | nicht definiert |

### TAB_CPI_DIAGNOSE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnose fehlgeschlagen |
| 0x01 | Diagnose okay |
| 0x02 | Warten nach Kühlanforderung |
| 0x03 | Messung läuft |
| 0xFF | Wert ungültig |

### TAB_DEM_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivieren |
| 1 | Aktivieren |

### TAB_FEHLERSTATUS_TEST

| WERT | TEXT |
| --- | --- |
| 0 | PASSED |
| 1 | FAILED |

### TAB_FRT_AC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AC Taste AUS |
| 0x01 | AC Taste EIN |
| 0x03 | Signal unbefuellt |
| 0xFF | Wert ungültig |

### TAB_GR_REKAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Ucel_Qal reached |
| 0x01 | U/I fully charged |
| 0x02 | 12V Reset Ucel_Qal n.i.O. |
| 0x03 | 12V Reset Ucel_Qal i.O. |
| 0x04 | NVs Reset Ucel_Qal n.i.O. |
| 0x05 | NVs Reset Ucel_Qal i.O. |
| 0xFF | ungültiger Wert |

### TAB_HEIZUNG

| WERT | TEXT |
| --- | --- |
| 0 | Heizung nicht angesteuert |
| 1 | keine Heizung verbaut |
| 2 | Heizung angefordert, keine Freigabe |
| 3 | Heizung eingeschaltet und intakt |
| 4 | Heizung oder Ansteuereinrichtung defekt |
| 5 | Heizung angefordert, keine Freigabe wegen Übertemperatur |

### TAB_HVS_HEIZUNG_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung nicht angesteuert |
| 0x01 | keine Heizung verbaut |
| 0x02 | Heizung nicht eingeschaltet, keine Freigabe |
| 0x03 | Heizung eingeschaltet und intakt |
| 0x04 | Heizung oder Ansteuereinrichtung defekt |
| 0x05 | Heizung angefordert, keine Freigabe wegen Übertemperatur |

### TAB_INFO_SYM_RB

| WERT | TEXT |
| --- | --- |
| 0x00 | n=0 |
| 0x01 | n=1 |
| 0x02 | 1 kleiner n kleiner gleich NrCellsProModul |
| 0x03 | NrCellsProModul kleiner n kleiner gleich NrCellsTotal/2 |
| 0x04 | NrCellsTotal/2 kleiner n kleiner gleich NrCellsTotal-NrCellsProModul |
| 0x05 | NrCellsTotal-NrCellsProModul kleiner n kleiner gleich NrCellsTotal -2 |
| 0x06 | n = NrCellsTotal -1 |
| 0xFF | Wert ungültig |

### TAB_ISOLATION_ERFOLGREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Isolationsmessung nicht erfolgreich |
| 0x01 | Isolationsmessung erfolgreich |
| 0x02 | Isolationsmessung läuft! |
| 0xFF | nicht definiert |

### TAB_ISOLATION_ISOLATIONSFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Isolationswarnung liegt vor |
| 0x02 | Isolationsfehler liegt vor |
| 0xFF | nicht definiert |

### TAB_KAPATEST

| WERT | TEXT |
| --- | --- |
| 0 | keine Übernahme |
| 1 | Übernahme |

### TAB_KUEHLERKREISLAUF_VENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | geregelt |
| 0xFF | nicht definiert |

### TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | Fehler |
| 0xFF | ungültiger Wert |

### TAB_NV_DATA_RESET

| WERT | TEXT |
| --- | --- |
| 0 | nichts rücksetzen |
| 1 | alle NV-Größen rücksetzen |

### TAB_RINGPUFFER_LADEVORGAENGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladeende detektiert |
| 0x01 | Ziel SOC-erreicht |
| 0x02 | U/I U/I Volladeerkennung |
| 0x03 | Abbruch extern |
| 0x04 | Fehler SME |
| 0xFF | Wert ungültig |

### TAB_SCHUETZE_STEUERN

| WERT | TEXT |
| --- | --- |
| 0 | NICHT_ANSTEUERN |
| 1 | ANSTEUERN_SCHLIESSEN |
| 2 | ANSTEUERN_OEFFNEN |

### TAB_SCHUETZ_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht freigegeben |
| 0x01 | freigegeben |
| 0xFF | nicht definiert |

### TAB_SCHUETZ_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | nicht definiert |

### TAB_SME_ERMITTLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ermittlung läuft nicht |
| 0x01 | Ermittlung läuft: Schnelle Entladungsphase |
| 0x02 | Ermittlung läuft: Langsame Entladungsphase bis SoC min |
| 0x03 | Ermittlung läuft: Ladungsphase bis SoC max |
| 0x04 | Ermittlung erfolgreich beendet |
| 0x05 | Ermittlung mit Fehler beendet |

### TAB_SME_HEIZUNG_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktionstest läuft |
| 0x01 | Funktionstest erfolgreich |
| 0x02 | Aufheizverlauf zu langsam, Anbindung Heizwendel an Speicher defekt |
| 0x03 | Aufheizverlauf zu schnell, Elektrische Prüfung Heizung druchführen |
| 0x04 | Keine Heizung verbaut |
| 0x05 | Kein Test möglich wegen Übertemperatur |
| 0x06 | Funktionstest läuft nicht |

### TAB_SME_SYMMETRIERUNG_ERGEBNISSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Symmetrierung nicht aktiv, kein Symmetrierbedarf |
| 0x01 | Symmetrierung aktiv |
| 0x02 | Symmetrierung nicht aktiv, Zellen nicht in Ruhepause. 10 min warten. |
| 0x03 | Symmetrierung nicht aktiv, Symmetrierverhinderer aktiv |

### TAB_SME_SYMMETRIERUNG_FERTIG

| WERT | TEXT |
| --- | --- |
| 0x00 | abgeschlossen |
| 0x01 | nicht abgeschlossen |

### TAB_SP_TYP

| WERT | TEXT |
| --- | --- |
| 0x0001 | SH |
| 0x0002 | SE |
| 0x0003 | SP |
| 0xFFFF | Wert ungültig |

### TAB_STATUS_HVIL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht ok |
| 0x01 | ok |
| 0xFF | nicht definiert |

### TAB_SYM

| WERT | TEXT |
| --- | --- |
| 0x00 | Symmetrierung nicht aktiv, kein Symmetrierbedarf |
| 0x01 | Symmetrierung aktiv |
| 0x02 | Symmetrierung nicht aktiv, Zellen nicht in Ruhephase.10 min warten |
| 0x03 | Symmetrierung nicht aktiv. Symmetrierverhinderer aktiv |

### TAB_SYM_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalmodus |
| 1 | Spannungsgesteuerter Modus |
| 2 | Bitbalancing (Auswertung Cell-SOCs) |
| 3 | Zeitgesteuertes Balancing |
| 4 | Keine Symmetrierung |
| 5 | Entscheidung durch SW, keinen Einfluss durch Steuern-Job |
