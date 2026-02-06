# ihx_i1.prg

## General

|  |  |
| --- | --- |
| File | ihx_i1.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 157 |
| Origin | BMW EI-511 Hümmer |
| Revision | 5.002 |
| Author | BMW EI-431 Zettl |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | IHKX Heiz-/Klimaanlagen für LU/LI |  |  |
| ORIGIN | string | BMW EI-511 Hümmer |  |  |
| REVISION | string | 5.002 |  |  |
| AUTHOR | string | BMW EI-431 Zettl |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.79 |  |  |
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

### ARG_0X4018_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY_VALEO | HEX | high | unsigned int | - | - | - | - | - | - | - | KEY_VALEO |

### ARG_0X4019_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HW_NUMBER | HEX | high | unsigned int | - | - | - | - | - | - | - | HW_NUMBER |

### ARG_0X401A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FACTORY_DATE_YY | HEX | high | unsigned int | - | - | - | - | - | - | - | Year |
| FACTORY_DATE_MM | HEX | high | unsigned int | - | - | - | - | - | - | - | Month |
| FACTORY_DATE_DD | HEX | high | unsigned int | - | - | - | - | - | - | - | Day |

### ARG_0X401B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_PART_NUMBER | HEX | high | unsigned long | - | - | - | - | - | - | - | VALEO_PART_NUMBER |

### ARG_0X401C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_PART_NUMBER_INDEX | HEX | high | unsigned char | - | - | - | - | - | - | - | Valeo part number index |

### ARG_0X401D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIAL_NUMBER | HEX | high | unsigned long | - | - | - | - | - | - | - | Serial number |

### ARG_0X401E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ICT_STEP_COUNTER | HEX | high | unsigned char | - | - | - | - | - | - | - | ICT STEP COUNTER |

### ARG_0X401F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HWAP_ID_BYTE0 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_ID_BYTE |
| HWAP_ID_BYTE1 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_ID_BYTE |
| HWAP_ID_BYTE2 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_ID_BYTE |
| HWAP_ID_BYTE3 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_ID_BYTE |

### ARG_0X4021_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEICHER_BLOCK | HEX | high | unsigned char | - | - | - | - | - | - | - | SPEICHER_BLOCK |
| STAT_SCHLUESSEL | HEX | high | unsigned long | - | - | - | - | - | - | - | STAT_SCHLUESSEL |
| STAT_SPEICHER_ANZAHL_DATEN | HEX | high | unsigned long | - | - | - | - | - | - | - | STAT_SPEICHER_ANZAHL_DATEN |
| DATA_1 | HEX | high | unsigned long | - | - | - | - | - | - | - | DATA_1 |
| DATA_N | HEX | high | unsigned long | - | - | - | - | - | - | - | DATA_N |

### ARG_0X4023_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HWAP_VERSION_BYTE4 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_VERSION_BYTE |
| HWAP_VERSION_BYTE5 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_VERSION_BYTE |
| HWAP_VERSION_BYTE6 | HEX | high | unsigned char | - | - | - | - | - | - | - | HWAP_VERSION_BYTE |

### ARG_0XA111_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIN_DEVICE_ADDRESS | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse LIN-Bus-Teilnehmer. default = 0x20 |

### ARG_0XD592_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | high | unsigned char | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Berührung simulieren |

### ARG_0XD593_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SGBD-Autor durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

### ARG_0XD598_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGNALMODE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | SIGNALMODE:  0 = NICHT BLOCKIERT = Signale werden verschickt,  1 = BLOCKIERT = Signale werden blockiert, keine Auswirkung auf andere Funktionen (Steuergeräte) |

### ARG_0XD5A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | high | unsigned char | - | TAB_SH_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD86E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPE | 0-n | high | unsigned char | - | TAB_KLAPPEN_VORN | - | - | - | - | - | Zu verwendende Text für die Tabelle zur Ansteuerung der Motoren: ENTFROSTUNG, BEL_LI_AUSSEN, BEL_LI_MITTE, BEL_LI, BELUEFTUNG, BEL_RE, BEL_RE_MITTE, BEL_RE_AUSSEN, FUSS_LI, FUSS_GES_LI, FUSS_GES_RE, FUSS_RE, FUSSRAUM, SCHICHT_LI, SCHICHT_RE, SCHICHTUNG, FL_STAU, UMLUFT, FUSS_FOND_LI, FUSS_FOND, FUSS_FOND_RE, SCHICHT_FOND_LI, SCHICHT_FOND_RE, SCHICHT_FOND, TEMP_LUFTMENGE_FOND, KNIE_LI, KNIE_RE, MISCH_LI, MISCH_RE. Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument KLAPPE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| KLAPPENOEFFNUNG | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, wie weit die Klappe geöffnet werden soll: 0 ... 100%,  0%=Geschlossen, 100%=Offen |

### ARG_0XD86F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_TASTEN_KLIMA | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: LV_RE, LV_LI, LV_MITTE, AUTO_RE, AUTO_LI, AUTO_MITTE, GBL_PLUS_RE, GBL_MINUS_RE, GBL_PLUS_LI, GBL_MINUS_LI, GBL_PLUS_MITTE, GBL_MINUS_MITTE, MAX_AC, KLIMA, UML_AUC, ALL, DEFROST, HHS, HFS; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD875_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ORT | 0-n | - | unsigned char | - | TAB_SOLLTEMP | 1.0 | 1.0 | 0.0 | - | - | STOP (Abbruch der Ansteuerung), TEMP_LINKS (Vorgabe Temperatur links), TEMP_RECHTS (Vorgabe Temperatur rechts), TEMP_MITTE (Vorgabe Temperatur mitte) |
| TEMPERATUR | °C | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 16.0 | 28.0 | Vorgabe der einzustellenden Temperatur in 0,5-er Schritten: Bereich 16 - 28 |

### ARG_0XD877_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### ARG_0XD89A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUSTER | 0-n | high | unsigned char | - | TAB_BITMUSTER | - | - | - | - | - | Gibt an, welches Bitmuster angesteuert werden soll: Siehe Tabelle TAB_BITMUSTER 0x00 = Alle Segmente aus und 0x01 = Alle Segmente ein sind Pflicht, andere Bitmuster können  frei definiert werden. |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bitmuster: 0 = AUS, 1 = EIN |

### ARG_0XD8A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUHEIZER | 0-n | - | unsigned char | - | TAB_ELEKTRISCHER_ZUHEIZER | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welcher elektrische Zuheizer angesteuert werden soll: EINZELNER (default); LINKS; RECHTS |
| SOLLWERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100% |

### ARG_0XD8B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_TASTEN_AUDIO | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: EIN_AUS, MODE, TP, EJECT, SUCHLAUF_LI, SUCHLAUF_RE; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

### ARG_0XD8C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | 0-n | - | unsigned char | - | TAB_KLIMA_LEDS_ANSTEUERUNG | - | - | - | - | - | Ansteuerung der LEDs |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=Normalbetrieb, 1=Ansteuerung aktivieren |

### ARG_0XD8C3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | - | - | Vorgabe der Drehzahl in Prozent. |

### ARG_0XD8C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reset Kältemittelverdichter: 0 = kein Reset 1 = Reset durchführen |

### ARG_0XD8C7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | 0-n | high | unsigned char | - | TAB_AKS_EKMV | 1.0 | 1.0 | 0.0 | - | - | Isolationprüfung: 0x00 = kein aktiver Kurzschluss 0x01 = aktiver Kurzschluss Low-Side 0x02 = aktiver Kurzschluss High-Side |

### ARG_0XD8CB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREILAUF_ANFORDERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Isolationprüfung: 0x00 = aktiven Freilauf beenden 0x01 = aktiver Freilauf starten |

### ARG_0XD918_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### ARG_0XD927_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### ARG_0XD96F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = Frontscheibenheizung aus 0x01 = Frontscheibenheizung ein |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 120.0 | Ansteuerzeit in Sekunden |

### ARG_0XD978_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_STEPPER_ADDRESS | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktuelle Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| NEW_STEPPER_ADDRESS | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neue Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| DIRECTION | 0-n | - | signed char | - | TAB_LAUFRICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Laufrichtung des zu programmierenden Klappenmotors. 0x00 = Laufrichtung im Uhrzeigersinn für steigenden Schrittzahlen, 0x01 = Laufrichtung gegen Uhrzeigersinn, 0xFF = Laufrichtung gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_ENABLE | 0-n | - | signed char | - | TAB_NOTLAUF | 1.0 | 1.0 | 0.0 | - | - | Notlaufaktivierung des zu programmierenden Klappenmotors. 0x00 = Notlauf aktiviert, 0x01 = Notlauf deaktiviert, 0xFF = Notlauf gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_DIRECTION | 0-n | - | signed char | - | TAB_NOTLAUF_ENDPOS | - | - | - | - | - | Notlaufendposition des zu programmierenden Klappenmotors. 0x00 = Zu niedrigen Schrittzahlen, 0x01 = Zu hohen Schrittzahlen, 0xFF = Notlaufendposition gemäß aktueller Programmierung. Default = 0xFF |

### ARG_0XD9A6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZENTRALANTRIEB | 0-n | - | unsigned char | - | TAB_ZENTRALANTRIEBE | - | - | - | - | - | Auswahl Zentralantrieb |
| SOLLPOSITION | ° | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 360.0 | Sollwert Kulissenstellung: 0..360 Grad |

### ARG_0XD9A7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Freigabe für Einlaufschutz: 0 = Keine Freigabe (gesperrt) = Einlaufroutine kann nicht automatisch gestartet werden. 1 = Freigabe nach Einschaltbedingungen |

### ARG_0XD9AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WP_ABSPERRVENTIL_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 1:  0x00 = Ventil nicht bestromen = offen 0x01 = Ventil bestromen = geschlossen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| WP_ABSPERRVENTIL_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 2:  0x00 = Ventil nicht bestromen = offen 0x01 = Ventil bestromen = geschlossen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| WP_ABSPERRVENTIL_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 3:  0x00 = Ventil nicht bestromen = offen 0x01 = Ventil bestromen = geschlossen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| WP_ABSPERRVENTIL_4 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 4:  0x00 = Ventil nicht bestromen = geschlossen 0x01 = Ventil bestromen = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| WP_EXP_VENTIL_1 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Expansionsventil 1:  0x00 = 0% = geschlossen 0x64 = 100% = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| WP_EXP_VENTIL_2 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Expansionsventil 2:  0x00 = 0% = geschlossen 0x64 = 100% = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| WP_EXP_VENTIL_3 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Expansionsventil 3:  0x00 = 0% = geschlossen 0x64 = 100% = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |

### ARG_0XD9DE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEISTUNG | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Leistung in % der Ansteuerung der Zusatzwasserpumpe. Wird nur übergeben, wenn Argument ANSTEUERUNG auf 0x01 gesetzt wird. |
| ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = Ansteuerung aus, Steuerung übernimmt SG-Funktion 0x01 = Ansteuerung ein, Steuerung übernimmt die Diagnose mit Wert aus Arg LEISTUNG |

### ARG_0XD9DF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL | 0-n | high | unsigned char | - | TAB_WP_VENTILE | - | - | - | - | - | Angabe des Ventils, welches angesteuert werden soll. Siehe TAB_WP_VENTILE |
| ZUSTAND | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert, mit dem das Ventil angesteuert werden soll: Bei Absperrventil 1-3: 0x00 = Ventil offen, 0x01 = Ventil geschlossen Bei Absperrventil 4: 0x00 = Ventil geschlossen, 0x01 = Ventil offen Bei Expansionsventil: 0 - 100 % 0% = geschlossen, 100% = offen |

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
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027800 | Energiesparmode aktiv | 0 |
| 0x027808 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x027809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02780A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02780B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02780C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02780D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF78 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x801100 | BDC Drucksensor Kältemittel: Plausibilität | 0 |
| 0x801101 | BDC Drucksensor Kältemittel: Oberhalb des gültigen Wertebereiches | 0 |
| 0x801102 | BDC Drucksensor Kältemittel: Unterhalb des gültigen Wertebereiches | 0 |
| 0x801103 | BDC Drucksensor Kältemittel: Kurzschluss nach Masse | 0 |
| 0x801104 | BDC Drucksensor Kältemittel: Kurzschluss nach Plus | 0 |
| 0x801106 | OBD: Motorraum Heizkreislaufumschaltventil - klemmt | 0 |
| 0x801120 | Wärmepumpe Expansionsventil 1: Funktionsüberprüfung | 0 |
| 0x801121 | Wärmepumpe Expansionsventil 2: Funktionsüberprüfung | 0 |
| 0x801122 | Wärmepumpe Expansionsventil 3: Funktionsüberprüfung | 0 |
| 0x801123 | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Druck - Plausibilitätsfehler | 0 |
| 0x801124 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Temperatur - Kurzschluss nach Plus / Leitungsunterbrechung | 0 |
| 0x801125 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Temperatur - Kurzschluss nach Masse | 0 |
| 0x801126 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Temperatur - Unterbrechung | 0 |
| 0x801127 | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Temperatur - Plausibilitätsfehler | 0 |
| 0x801128 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Druck - Plausibilitätsfehler | 0 |
| 0x801129 | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Temperatur - Kurzschluss nach Plus / Leitungsunterbrechung | 0 |
| 0x80112A | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Temperatur - Kurzschluss nach Masse | 0 |
| 0x80112B | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor:: Temperatur - Unterbrechung | 0 |
| 0x80112C | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Temperatur -  Plausibilitätsfehler | 0 |
| 0x80112D | Wärmepumpe Temperaturfühler 1 / Kondensator : Plausibilisierung | 0 |
| 0x80112E | Wärmepumpe Temperaturfühler 3 / Verdampfer: Plausibilisierung | 0 |
| 0x80112F | Wärmepumpe Temperaturfühler 2 / Verdampfer Hochvoltbatterie : Plausibilisierung | 0 |
| 0x801130 | Wärmepumpe - Allgemeiner Funktionsfehler | 0 |
| 0x801131 | Unterfüllung AC-Kreislauf | 0 |
| 0x80113A | Wärmepumpe SG: RAM defekt | 0 |
| 0x80113B | Wärmepumpe SG: ROM defekt | 0 |
| 0x80113C | Wärmepumpe SG: EEPROM defekt | 0 |
| 0x80113D | Wärmepumpe SG: Laufzeitfehler | 0 |
| 0x80113E | Wärmepumpe SG:  Watchdog | 0 |
| 0x80113F | Wärmepumpe SG: Fehler im Mikrocontroller | 0 |
| 0x801160 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 |
| 0x801161 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Plus | 0 |
| 0x801162 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Leitungsunterbrechung | 0 |
| 0x801163 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x801164 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x801165 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Plausibilitätsfehler | 0 |
| 0x801166 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 |
| 0x801167 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Plus | 0 |
| 0x801168 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Leitungsunterbrechung | 0 |
| 0x801169 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x80116A | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x80116B | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Plausibilitätsfehler | 0 |
| 0x80116C | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 |
| 0x80116D | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Plus | 0 |
| 0x80116E | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Leitungsunterbrechung | 0 |
| 0x80116F | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x801170 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x801171 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Plausibilitätsfehler | 0 |
| 0x801180 | Motor Entfrostung oder Zentralantrieb: Intitialisierungsfehler | 0 |
| 0x801181 | Motor Entfrostung oder Zentralantrieb: interner Motorfehler | 0 |
| 0x801182 | Motor Entfrostung oder Zentralantrieb: Blockierung | 0 |
| 0x801186 | Motor Mischluft oder Mischluft links: Initialisierungsfehler | 0 |
| 0x801187 | Motor Mischluft oder Mischluft links: interner Motorfehler | 0 |
| 0x801188 | Motor Mischluft oder Mischluft links: Blockierung | 0 |
| 0x801189 | Motor Mischluft rechts: Intitialisierungsfehler | 0 |
| 0x80118A | Motor Mischluft rechts: interner Motorfehler | 0 |
| 0x80118B | Motor Mischluft rechts: Blockierung | 0 |
| 0x80118F | Motor Belüftung-Fussraum links oder Fussraum: Intitialisierungsfehler | 0 |
| 0x801190 | Motor Belüftung-Fussraum links oder Fussraum: interner Motorfehler | 0 |
| 0x801191 | Motor Belüftung-Fussraum links oder Fussraum: Blockierung | 0 |
| 0x801192 | Motor Belüftung-Fussraum rechts: Intitialisierungsfehler | 0 |
| 0x801193 | Motor Belüftung-Fussraum rechts: interner Motorfehler | 0 |
| 0x801194 | Motor Belüftung-Fussraum rechts: Blockierung | 0 |
| 0x801195 | Motor Belüftung: Intitialisierungsfehler | 0 |
| 0x801196 | Motor Belüftung: interner Motorfehler | 0 |
| 0x801197 | Motor Belüftung: Blockierung | 0 |
| 0x80119B | Motor Schichtung vorn links oder Schichtung vorn: Intitialisierungsfehler | 0 |
| 0x80119C | Motor Schichtung vorn links oder Schichtung vorn: interner Motorfehler | 0 |
| 0x80119D | Motor Schichtung vorn links oder Schichtung vorn: Blockierung | 0 |
| 0x80119E | Motor Schichtung vorn rechts: Intitialisierungsfehler | 0 |
| 0x80119F | Motor Schichtung vorn rechts: interner Motorfehler | 0 |
| 0x8011A0 | Motor Schichtung vorn rechts: Blockierung | 0 |
| 0x8011A1 | Motor Temperatur-Luftmenge hinten: Intitialisierungsfehler | 0 |
| 0x8011A2 | Motor Temperatur-Luftmenge hinten: interner Motorfehler | 0 |
| 0x8011A3 | Motor Temperatur-Luftmenge hinten: Blockierung | 0 |
| 0x8011AA | Motor Frischluft-Umluft: Intitialisierungsfehler | 0 |
| 0x8011AB | Motor Frischluft-Umluft: interner Motorfehler | 0 |
| 0x8011AC | Motor Frischluft-Umluft: Blockierung | 0 |
| 0x8011AF | Verdampfertemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B0 | Verdampfertemperatursensor: Kurzschluss nach Minus | 0 |
| 0x8011B1 | Fussraumtemperatursensor oder Fussraumtemperatursensor links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B2 | Fussraumtemperatursensor oder Fussraumtemperatursensor links: Kurzschluss nach Minus | 0 |
| 0x8011B3 | Fussraumtemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B4 | Fussraumtemperatursensor rechts: Kurzschluss nach Minus | 0 |
| 0x8011B5 | Belüftungstemperatursensor oder Belüftungstemperatursensor links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B6 | Belüftungstemperatursensor oder Belüftungstemperatursensor links: Kurzschluss nach Minus | 0 |
| 0x8011B7 | Belüftungstemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B8 | Belüftungstemperatursensor rechts: Kurzschluss nach Minus | 0 |
| 0x8011B9 | Schichtungspotentiometer: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011BA | Schichtungspotentiometer: Kurzschluss nach Minus | 0 |
| 0x8011C1 | Externes FBM- und Audiobedienfeld: Tastenklemmer erkannt | 0 |
| 0x8011C6 | Externes Klimabedienfeld: Tastenklemmer erkannt | 0 |
| 0x8011C9 | Externes Klimabedienfeld: Innentemperatursensor defekt | 0 |
| 0x8011CD | Externes Klimabedienfeld: Falsche Variante verbaut | 0 |
| 0x8011F6 | Elektrischer Zuheizer: Kurzschluss oder Unterbrechung im Heizstrang | 0 |
| 0x8011F7 | Elektrischer Zuheizer: Kommunikationsfehler | 0 |
| 0x8011F8 | Elektrischer Zuheizer: Übertemperatur | 1 |
| 0x8011F9 | Elektrischer Zuheizer: Reduzierung Heizleistung wegen Powermanagement | 1 |
| 0x8011FA | Elektrischer Zuheizer: Unter- oder Überspannung | 0 |
| 0x801203 | Gebläseendstufe: Interner Fehler | 0 |
| 0x801204 | Gebläseendstufe: Kurzschluss oder blockiert | 0 |
| 0x801205 | Gebläseendstufe: Übertemperaturbegrenzung aktiv | 1 |
| 0x801207 | Gebläseendstufe: Unterbrechung zum Motor | 0 |
| 0x801209 | Gebläseendstufe: Kommunikationsfehler | 1 |
| 0x80120A | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 |
| 0x80120C | Interner Steuergerätefehler | 0 |
| 0x80120D | Unterspannung erkannt | 1 |
| 0x80120E | Überspannung erkannt | 1 |
| 0x80120F | Keine Kommunikation über AC-LIN möglich | 0 |
| 0x801211 | Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Unterdruck | 0 |
| 0x801212 | Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Überdruck | 0 |
| 0x801215 | eKMV: Leistungsminderung oder Abschaltung während HV-Batteriekühlung aufgrund eKMV interner Betriebstrategie. | 0 |
| 0x801218 | eKMV: Abschaltung wegen Über- oder Unterspannung HV-Versorgung | 1 |
| 0x801219 | eKMV: Leistungsreduzierung wegen Übertemperatur Umrichter | 1 |
| 0x801222 | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 |
| 0x801223 | Kompressor: Abschaltung wegen funktionsbedingter Randbedingungen | 1 |
| 0x801224 | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 |
| 0x801225 | Kompressor: Abschaltung wegen  Unterdruck im Kältemittelkreislauf | 0 |
| 0x801228 | Powermanagement: Reduzierung Gebläseleistung | 1 |
| 0x80122D | Kulisse Zentralantrieb: Nockenerkennung unplausibel | 0 |
| 0x80122E | Mikroschalter Zentralantrieb: Schaltzustand unplausibel | 0 |
| 0x80122F | Falsche Audiobedienteilvariante verbaut | 0 |
| 0x801230 | Klimaregelungseingriff - Rekuperation | 1 |
| 0x801235 | Mischverbau Stepper | 0 |
| 0x801236 | Feuchtigkeitssensor Mikrofilter: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801237 | Heckscheibenheizung: Reduzierung Heizleistung wegen Powermanagement | 1 |
| 0x80124D | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Klima | 1 |
| 0x80124E | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Hochvoltspeicher | 1 |
| 0x801251 | eKMV: Abschaltung wegen Anlaufprobleme | 0 |
| 0x801252 | eKMV: interner Komponentenfehler | 0 |
| 0x801253 | eKMV: Leistungsreduzierung vom Kühl- oder Heizbetrieb durch Powermanagement | 1 |
| 0x801254 | eKMV: Leistungsreduzierung der Standklimatisierung durch Powermanagement | 1 |
| 0x801260 | Steuerleitung Frontscheibenheizung: Kurzschluss nach Plus | 0 |
| 0x801261 | Steuerleitung Frontscheibenheizung: Kurzschluss nach Masse | 0 |
| 0x801262 | Steuerleitung Frontscheibenheizung: Unterbrechung oder Kurzschluß nach Plus | 0 |
| 0x801263 | Frontscheibenheizung: Reduzierung der Heizleistung wegen Powermanagement | 1 |
| 0x801270 | Wärmepumpe Absperrventil 1: Unterbrechung | 0 |
| 0x801271 | Wärmepumpe Absperrventil 1: Kurzschluss nach Masse | 0 |
| 0x801272 | Wärmepumpe Absperrventil 1: Kurzschluss nach Plus | 0 |
| 0x801273 | Wärmepumpe Absperrventil 2: Unterbrechung | 0 |
| 0x801274 | Wärmepumpe Absperrventil 2: Kurzschluss nach Masse | 0 |
| 0x801275 | Wärmepumpe Absperrventil 2: Kurzschluss nach Plus | 0 |
| 0x801276 | Wärmepumpe Absperrventil 3: Unterbrechung | 0 |
| 0x801277 | Wärmepumpe Absperrventil 3: Kurzschluss nach Masse | 0 |
| 0x801278 | Wärmepumpe Absperrventil 3: Kurzschluss nach Plus | 0 |
| 0x801279 | Wärmepumpe Absperrventil 4: Unterbrechung | 0 |
| 0x80127A | Wärmepumpe Absperrventil 4: Kurzschluss nach Masse | 0 |
| 0x80127B | Wärmepumpe Absperrventil 4: Kurzschluss nach Plus | 0 |
| 0x80127C | Wärmepumpe Expansionsventil 1: Kurzschluss nach Masse | 0 |
| 0x80127D | Wärmepumpe Expansionsventil 1: Kurzschluss nach Plus | 0 |
| 0x80127F | Wärmepumpe Expansionsventil 2: Kurzschluss nach Masse | 0 |
| 0x801280 | Wärmepumpe Expansionsventil 2: Kurzschluss nach Plus | 0 |
| 0x801282 | Wärmepumpe Expansionsventil 3: Kurzschluss nach Masse | 0 |
| 0x801283 | Wärmepumpe Expansionsventil 3: Kurzschluss nach Plus | 0 |
| 0x801285 | Wärmepumpe Expansionsventil 1: Unterbrechung | 0 |
| 0x801286 | Wärmepumpe Expansionsventil 2: Unterbrechung | 0 |
| 0x801287 | Wärmepumpe Expansionsventil 3: Unterbrechung | 0 |
| 0x80128C | Wärmepumpe Absperrventil 1: Funktionsüberprüfung | 0 |
| 0x80128D | Wärmepumpe Absperrventil 2: Funktionsüberprüfung | 0 |
| 0x80128E | Wärmepumpe Absperrventil 3: Funktionsüberprüfung | 0 |
| 0x80128F | Wärmepumpe Absperrventil 4: Funktionsüberprüfung | 0 |
| 0x801290 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Druck - Unterbrechung | 0 |
| 0x801291 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Druck - Kurzschluss nach Plus | 0 |
| 0x801292 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Druck - Kurzschluss nach Masse / Leitungsunterbrechung | 0 |
| 0x801293 | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Druck - Unterbrechung | 0 |
| 0x801294 | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Druck - Kurzschluss nach Plus | 0 |
| 0x801295 | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Druck - Kurzschluss nach Masse / Leitungsunterbrechung | 0 |
| 0x801296 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Druck - oberhalb des gültigen Wertebereiches | 0 |
| 0x801297 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Druck - unterhalb des gültigen Wertebereiches | 0 |
| 0x801298 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Temperatur - oberhalb des gültigen Wertebereiches | 0 |
| 0x801299 | Wärmepumpe Druck-Temperaturfühler 1 vor Klimakompressor: Temperatur - unterhalb des gültigen Wertebereiches | 0 |
| 0x80129A | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Druck - oberhalb des gültigen Wertebereiches | 0 |
| 0x80129B | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Druck - unterhalb des gültigen Wertebereiches | 0 |
| 0x80129C | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Temperatur - oberhalb des gültigen Wertebereiches | 0 |
| 0x80129D | Wärmepumpe Druck-Temperaturfühler 2 nach Klimakompressor: Temperatur - unterhalb des gültigen Wertebereiches | 0 |
| 0x8012A0 | Wärmepumpe Zusatzwasserpumpe: Trockenlauf | 0 |
| 0x8012A1 | Wärmepumpe Zusatzwasserpumpe: Mindestdrehzahl unterschritten oder Pumpe blockiert | 0 |
| 0x8012A2 | Wärmepumpe Zusatzwasserpumpe: Pumpe überhitzt | 0 |
| 0x8012A3 | Wärmepumpe Zusatzwasserpumpe: Reduzierte Pumpendrehzahl | 0 |
| 0x8012A4 | Wärmepumpe Zusatzwasserpumpe PWM-Steuerleitung: Unterbrechung | 0 |
| 0x8012A5 | Zusatzwasserpumpe Stromversorgung am BDC: Unterbrechung | 0 |
| 0x8012AA | LIN-Box Wärmepumpe: Sensor- oder Pinfehler | 0 |
| 0x8012B0 | Wärmepumpe Temperaturfühler 1 / Kondensator: Kurzschluss nach Plus / Leitungsunterbrechung | 0 |
| 0x8012B1 | Wärmepumpe Temperaturfühler 1 / Kondensator: Kurzschluss nach Masse | 0 |
| 0x8012B2 | Wärmepumpe Temperaturfühler 1 / Kondensator: Unterbrechung | 0 |
| 0x8012B3 | Wärmepumpe Temperaturfühler 1 / Kondensator: Oberhalb des gültigen Wertebereiches | 0 |
| 0x8012B4 | Wärmepumpe Temperaturfühler 1 / Kondensator: Unterhalb des gültigen Wertebereiches | 0 |
| 0x8012B5 | Wärmepumpe Temperaturfühler 2 / Verdampfer Hochvoltbatterie: Kurzschluss nach Plus / Leitungsunterbrechung | 0 |
| 0x8012B6 | Wärmepumpe Temperaturfühler 2 / Verdampfer Hochvoltbatterie: Kurzschluss nach Masse | 0 |
| 0x8012B7 | Wärmepumpe Temperaturfühler 2 / Verdampfer Hochvoltbatterie: Unterbrechung | 0 |
| 0x8012B8 | Wärmepumpe Temperaturfühler 2 / Verdampfer Hochvoltbatterie: Oberhalb des gültigen Wertebereiches | 0 |
| 0x8012B9 | Wärmepumpe Temperaturfühler 2 / Verdampfer Hochvoltbatterie: Unterhalb des gültigen Wertebereiches | 0 |
| 0x8012BA | Wärmepumpe Temperaturfühler 3 / Verdampfer: Kurzschluss nach Plus / Leitungsunterbrechung | 0 |
| 0x8012BB | Wärmepumpe Temperaturfühler 3 / Verdampfer: Kurzschluss nach Masse | 0 |
| 0x8012BC | Wärmepumpe Temperaturfühler 3 / Verdampfer: Unterbrechung | 0 |
| 0x8012BD | Wärmepumpe Temperaturfühler 3 / Verdampfer: Oberhalb des gültigen Wertebereiches | 0 |
| 0x8012BE | Wärmepumpe Temperaturfühler 3 / Verdampfer: Unterhalb des gültigen Wertebereiches | 0 |
| 0x8012C0 | eKMV: HV-Spannungssensor 2 - Kurzschluss nach Minus | 0 |
| 0x8012C1 | eKMV: HV-Spannungssensor 2 - Kurzschluss nach Plus | 0 |
| 0x8012C3 | eKMV: HV-Spannungssensor 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x8012C4 | eKMV: HV-Spannungssensor 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x8012C5 | eKMV: HV-Spannungssensor 2 - Plausibilitätsfehler | 0 |
| 0x8012C6 | eKMV Visteon Temperatursensor Platine 1 - Plausibilitätsfehler | 0 |
| 0x8012C8 | eKMV: Hochvolt-Steckverbindung nicht gesteckt | 0 |
| 0x8012F1 | OBD: Kältekreislauf - HV-Batterie - Kühlleistung unplausibel | 0 |
| 0x801372 | eDH: OBD Speicherfehler RAM | 0 |
| 0x801373 | eDH: OBD Speicherfehler EEPROM | 0 |
| 0x801374 | eDH: OBD Softwarefehler Laufzeitüberwachung | 0 |
| 0x801375 | eDH: OBD Softwarefehler Watchdog | 0 |
| 0x801376 | eDH: OBD Fehler in der Micro-Controller-Peripherie | 0 |
| 0x801377 | eDH: Hochvolt-Steckverbindung nicht gesteckt | 0 |
| 0x801380 | EDH: interner EDH-Fehler | 0 |
| 0x801381 | EDH: LIN-Timeout | 1 |
| 0x801382 | EDH: OBD HV-Spannungssensor über Betriebsbereich | 1 |
| 0x801383 | EDH: OBD HV-Spannungssensor unter Betriebsbereich | 1 |
| 0x801384 | EDH: Systemfehler - Kühlmittelfluss | 0 |
| 0x801385 | EDH: OBD Temperaturfühler Platine über Betriebsbereich | 0 |
| 0x801386 | EDH: OBD Temperaturfühler Kühlmittel über Betriebsbereich | 0 |
| 0x801387 | EDH: Degradation | 0 |
| 0x801388 | EDH: OBD Temperaturfühler Platine Kurzschluss zu Masse / Leitung unterbrochen | 0 |
| 0x801389 | EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Masse | 0 |
| 0x80138A | EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Batterie / Leitung unterbrochen | 0 |
| 0x80138B | EDH: Verriegelung | 0 |
| 0x80138C | EDH: OBD Temperaturfühler Platine unter Betriebsbereich | 0 |
| 0x80138D | EDH: OBD Temperaturfühler Kühlmittel unter Betriebsbereich | 0 |
| 0x80138E | EDH: Niederspannungsfehler/unplausible Prozessorkommunikation | 0 |
| 0x80138F | EDH: Systemfehler - unzulässige Heizanforderung | 0 |
| 0x801390 | EDH: OBD Temperaturfühler Platine Kurzschluss zu Batterie | 0 |
| 0x801391 | eDH: OBD HV Spannungssensor Kurzschluss zu Masse / Leitung unterbrochen | 0 |
| 0x801392 | eDH: OBD HV Spannungssensor Kurzschluss zu Batterie | 0 |
| 0x801393 | eDH: OBD HV Spannungssensor offen | 0 |
| 0x801394 | eDH: OBD Stromsensor 2 Plausibilisierung | 0 |
| 0x801395 | eDH: OBD Stromsensor 2 offen | 0 |
| 0x801396 | eDH: OBD HV Spannungssensor Plausibilisierung | 0 |
| 0x801397 | eDH: OBD Stromsensor 1  Plausibilisierung | 0 |
| 0x801398 | eDH: OBD Stromsensor 1 offen | 0 |
| 0x801399 | eDH: OBD Stromsensor 1 unter Betriebsbereich | 0 |
| 0x80139A | eDH: OBD Stromsensor 1 über Betriebsbereich | 0 |
| 0x80139B | eDH: OBD Stromsensor 1  Kurzschluss zu Masse / Leitung unterbrochen | 0 |
| 0x80139C | eDH: OBD Stromsensor 1 Kurzschluss zu Batterie | 0 |
| 0x80139D | eDH: OBD Temperaturfühler Platine Plausibilisierung | 0 |
| 0x80139E | eDH: OBD Temperaturfühler Platine offen | 0 |
| 0x80139F | eDH: OBD Stromsensor 2 unter Betriebsbereich | 0 |
| 0x8013A0 | eDH: OBD Stromsensor 2 über Betriebsbereich | 0 |
| 0x8013A1 | eDH: OBD Stromsensor 2 Kurzschluss zu Masse / Leitung unterbrochen | 0 |
| 0x8013A3 | Funktionsfehler elektrischer Durchlauferhitzer | 0 |
| 0x8013A4 | eDH: OBD Stromsensor 2 Kurzschluss zu Batterie | 0 |
| 0x8013A5 | eDH: OBD Stromsensor 3 Kurzschluss zu Masse / Leitung unterbrochen | 0 |
| 0x8013A6 | eDH: OBD Stromsensor 3 Kurzschluss zu Batterie | 0 |
| 0x8013A7 | eDH: OBD Temperaturfühler Kühlmittel offen | 0 |
| 0x8013A8 | eDH: OBD Temperaturfühler Kühlmittel Plausibilisierung | 0 |
| 0x8013A9 | eDH: OBD Speicherfehler ROM | 0 |
| 0x8013AA | eDH: OBD Stromsensor 3 offen | 0 |
| 0x8013AB | eDH: OBD Stromsensor 3 über Betriebsbereich | 0 |
| 0x8013AC | eDH: OBD Stromsensor 3 unter Betriebsbereich | 0 |
| 0x8013AD | eDH: OBD Stromsensor 3 Plausibilisierung | 0 |
| 0x8013AE | eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Masse / Leitung unterbrochen | 0 |
| 0x8013AF | eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Batterie | 0 |
| 0x8013B0 | eDH: OBD Spannungssensor oberhalb Mosfets 1 - offen | 0 |
| 0x8013B1 | eDH: OBD Spannungssensor oberhalb Mosfets 1 - über Betriebsbereich | 0 |
| 0x8013B2 | eDH: OBD Spannungssensor oberhalb Mosfets 1 - unter Betriebsbereich | 0 |
| 0x8013B3 | eDH: OBD Spannungssensor oberhalb Mosfets 1 - Plausibilität | 0 |
| 0x8013B4 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Masse / Leitung unterbrochen | 0 |
| 0x8013B5 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Batterie | 0 |
| 0x8013B6 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - offen | 0 |
| 0x8013B7 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - unter Betriebsbereich | 0 |
| 0x8013B8 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - über Betriebsbereich | 0 |
| 0x8013B9 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - Plausibilität | 0 |
| 0x8013BA | eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Masse / Leitung unterbrochen | 0 |
| 0x8013BB | eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Batterie | 0 |
| 0x8013BC | eDH: OBD Spannungssensor oberhalb Mosfets 3 - offen | 0 |
| 0x8013BD | eDH: OBD Spannungssensor oberhalb Mosfets 3 - unter Betriebsbereich | 0 |
| 0x8013BE | eDH: OBD Spannungssensor oberhalb Mosfets 3 - über Betriebsbereich | 0 |
| 0x8013BF | eDH: OBD Spannungssensor oberhalb Mosfets 3 - Plausibilität | 0 |
| 0x8013C0 | eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Masse | 0 |
| 0x8013C1 | eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Batterie | 0 |
| 0x8013C3 | eKMV: OBD Temperatursensor Platine 1 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013C4 | eKMV: OBD Temperatursensor Platine 1 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013C5 | eKMV: OBD Temperatursensor Platine 1 Plausibilität | 0 |
| 0x8013C6 | eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Masse | 0 |
| 0x8013C7 | eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Batterie | 0 |
| 0x8013C9 | eKMV: OBD Temperatursensor Platine 2 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013CA | eKMV: OBD Temperatursensor Platine 2 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013CC | eKMV: OBD HV-Spannungssensor Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013CD | eKMV: OBD HV-Spannungssensor Kurzschluss zu Batterie | 0 |
| 0x8013CF | eKMV: OBD HV-Spannungssensor Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013D0 | eKMV: OBD HV-Spannungssensor Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013D1 | eKMV: OBD HV-Spannungssensor Plausibilität | 0 |
| 0x8013D2 | eKMV: OBD Spannung am Motortreiber Kurzschluss nach Masse / Leitungsunterbrechung | 0 |
| 0x8013D3 | eKMV: OBD Spannung am Motortreiber Kurzschluss nach Batterie | 0 |
| 0x8013D5 | eKMV: OBD Spannung am Motortreiber Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013D6 | eKMV: OBD Spannung am Motortreiber Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013D8 | eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013D9 | eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Batterie | 0 |
| 0x8013DB | eKMV: OBD Stromsensor Phase 1 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013DC | eKMV: OBD Stromsensor Phase 1 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013DD | eKMV: OBD Stromsensor Phase 1 Plausibilität | 0 |
| 0x8013DE | eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013DF | eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Batterie | 0 |
| 0x8013E1 | eKMV: OBD Stromsensor Phase 2 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013E2 | eKMV: OBD Stromsensor Phase 2 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013E3 | eKMV: OBD Stromsensor Phase 2 Plausibilität | 0 |
| 0x8013E4 | eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013E5 | eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Batterie | 0 |
| 0x8013E7 | eKMV: OBD Stromsensor Phase 3 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013E8 | eKMV: OBD Stromsensor Phase 3 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013E9 | eKMV: OBD Stromsensor Phase 3 Plausibilität | 0 |
| 0x8013EA | eKMV: OBD Speicherfehler RAM | 0 |
| 0x8013EB | eKMV: OBD Speicherfehler ROM | 0 |
| 0x8013EC | eKMV: OBD Speicherfehler EEPROM | 0 |
| 0x8013ED | eKMV: OBD Softwarefehler Laufzeitüberwachung | 0 |
| 0x8013EE | eKMV: OBD Softwarefehler Watchdog | 0 |
| 0x8013EF | eKMV: OBD Fehler Micro-Controller-Peripherie | 0 |
| 0x8013F6 | Funktionsprüfung eKMV (OBD) | 0 |
| 0x8013F7 | Verdampfertemperatursensor: Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013F8 | Verdampfertemperatursensor: Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013F9 | Verdampfertemperatursensor: Plausibilität | 0 |
| 0x8013FA | Micro-Controller Peripherie Fehler (IHKA) | 0 |
| 0x8013FB | RAM Speicher Fehler (IHKA) | 0 |
| 0x8013FC | ROM/Flash Speicher Fehler (IHKA) | 0 |
| 0x8013FD | EEPROM Speicher Fehler (IHKA) | 0 |
| 0x8013FE | Software Laufzeitfehler (IHKA) | 0 |
| 0x8013FF | Software Watchdogfehler (IHKA) | 0 |
| 0xE7041E | IuK-CAN Control Module Bus OFF | 0 |
| 0xE70468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xE70BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE70C1E | AC-LIN: Motor Entfrostung oder Zentralantrieb antwortet nicht | 0 |
| 0xE70C20 | AC-LIN: Motor Mischluft oder Mischluft links: antwortet nicht | 0 |
| 0xE70C21 | AC-LIN: Motor Mischluft rechts antwortet nicht | 0 |
| 0xE70C22 | AC-LIN: Motor Belüftung antwortet nicht | 0 |
| 0xE70C23 | AC-LIN: Motor Belüftung-Fussraum links oder Fussraum antwortet nicht | 0 |
| 0xE70C24 | AC-LIN: Motor Belüftung-Fussraum rechts antwortet nicht | 0 |
| 0xE70C27 | AC-LIN: Motor Schichtung vorn links oder Schichtung vorn antwortet nicht | 0 |
| 0xE70C28 | AC-LIN: Motor Schichtung vorn rechts antwortet nicht | 0 |
| 0xE70C29 | AC-LIN: Motor Temperatur-Luftmenge hinten antwortet nicht | 0 |
| 0xE70C2B | AC-LIN: Motor Frischluft-Umluft-Staudruck antwortet nicht | 0 |
| 0xE70C2C | AC-LIN: Motor Frischluft-Umluft antwortet nicht | 0 |
| 0xE70C2D | AC-LIN: Gebläseendstufe antwortet nicht | 0 |
| 0xE70C2E | AC-LIN: Elektrischer Zuheizer antwortet nicht | 0 |
| 0xE70C30 | AC-LIN: eKMV antwortet nicht | 0 |
| 0xE70C31 | AC-LIN: Elektrischer Zuheizer antwortet nicht | 0 |
| 0xE70C32 | K-LIN: Klimabedienteil antwortet nicht | 0 |
| 0xE70C33 | K-LIN: Audiobedienteil antwortet nicht | 0 |
| 0xE70C34 | K-LIN: Audiobedienteil LIN Bus Kommunikation gestört (CRC, KOM-Error) | 0 |
| 0xE70C35 | K-LIN: Klimabedienteill LIN Bus Kommunikation gestört (CRC, KOM-Error) | 0 |
| 0xE70C36 | AC-LIN Spannungsversorgung: Kurzschluss nach Masse | 0 |
| 0xE70C37 | AC-LIN Spannungsversorgung: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0xE70C39 | AC-LIN: LIN-Box Wärmepumpe antwortet nicht | 0 |
| 0xE70C3A | AC-LIN: EDH antwortet nicht | 0 |
| 0xE71401 | Botschaft (A_TEMP, 0x2CA, FA): TEMP_EX invalid signal | 1 |
| 0xE71402 | Botschaft (A_TEMP, 0x2CA, FA): TEMP_EX_UNFILT invalid signal | 1 |
| 0xE71403 | Botschaft (BEDIENUNG_KLIMA_SH, 0x1DA, FA):  OP_HTCL_RMAC invalid signal | 1 |
| 0xE71404 | Botschaft (BEDIENUNG_KLIMA_SH, 0x2A2, FA):  OP_IVNT invalid signal | 1 |
| 0xE71405 | Botschaft (BEDIENUNG_KLIMA_SH, 0x2A2, FA):  OP_PFN_AMOD invalid signal | 1 |
| 0xE71406 | Botschaft (DT_PT_2 , 0x3F9, FA): Timeout | 1 |
| 0xE71407 | Botschaft (DT_PT_2 , 0x3F9, FA): ST_DRV_VEH invalid signal | 1 |
| 0xE71408 | Botschaft (DT_PT_2 , 0x3F9, FA): TEMP_ENG_DRV invalid signal | 1 |
| 0xE7140C | Botschaft (DIMMUNG, 0x202, FA): Timeout | 1 |
| 0xE7140D | Botschaft (DIMMUNG, 0x202, FA), CTR_ILUM_SW invalid signal | 1 |
| 0xE7140E | Botschaft (TORQ_CRSH_1, 0xA5, FA): Timeout | 1 |
| 0xE71410 | Botschaft (TORQ_CRSH_1, 0xA5, FA): AVL_RPM_ENG_CRSH invalid value | 1 |
| 0xE71411 | Botschaft (EINHEITEN, 0x2F7, FA): Timeout | 1 |
| 0xE71412 | Botschaft (EINHEITEN, 0x2F7, FA): UN_TEMP invalid value | 1 |
| 0xE71414 | Botschaft (A_TEMP, 0x2CA, FA): Timeout | 1 |
| 0xE71415 | Botschaft (FAHRZEUGTYP, 0x388, FA): TYP_STE invalid value | 1 |
| 0xE71416 | Botschaft (FZZSTD, 0x3A0, FA): Timeout | 1 |
| 0xE71418 | Botschaft (FZZSTD, 0x3A0, FA): ST_ILK_ERRM_FZM invalid signal | 1 |
| 0xE71419 | Botschaft (V_VEH, 0x1A1, FA): Timeout | 1 |
| 0xE7141A | Botschaft (V_VEH, 0x1A1, FA): V_VEH_COG invalid signal | 1 |
| 0xE7141E | Botschaft (KLEMMEN, 0x12F, FA): Timeout | 1 |
| 0xE7141F | Botschaft (KLEMMEN, 0x12F, FA): ST_KL invalid signal | 1 |
| 0xE71420 | Botschaft (KLEMMEN, 0x12F, FA): ALIV_COU_KL invalid signal | 1 |
| 0xE71421 | Botschaft (LCD_BRIG_CLCTR, 0x393, FA): Timeout | 1 |
| 0xE71422 | Botschaft (LCD_BRIG_CLCTR, 0x393, FA): DSTN_LCD_LUM invalid signal | 1 |
| 0xE71423 | Botschaft (LCD_BRIG_CLCTR, 0x393, FA):  DMPNG_LCD_LUM invalid signal | 1 |
| 0xE7142B | Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): Timeout | 1 |
| 0xE7142C | Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): SLCTN_SPCOS invalid value | 1 |
| 0xE7142D | Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): CTR_PWR_SPCOS invalid value | 1 |
| 0xE7142E | Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): CTR_PWR_COS invalid value | 1 |
| 0xE7142F | Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): CTR_PCOS invalid value | 1 |
| 0xE71430 | Botschaft (STAT_FOG_UP_FRONT, 0x2D1, FA): Timeout | 1 |
| 0xE71431 | Botschaft (STAT_FOG_UP_FRONT, 0x2D1, FA): DT_FOG_WDW_FT invalid value | 1 |
| 0xE71432 | Botschaft (STAT_FOG_UP_FRONT, 0x2D1, FA): DT_TEMP_WDW_FT invalid value | 1 |
| 0xE71433 | Botschaft (STAT_BFS, 0x22A, FA): Timeout | 1 |
| 0xE71434 | Botschaft (STAT_BFS, 0x22A, FA): ST_SHTR_PS invalid signal | 1 |
| 0xE71435 | Botschaft (ST_CABRF, 0x342, FA): Timeout | 1 |
| 0xE71436 | Botschaft (ST_CABRF, 0x342, FA): ST_PO_CABRF invalid signal | 1 |
| 0xE71437 | Botschaft (ST_CABRF, 0x342, FA): ST_PO_CABRF_RETRF invalid signal | 1 |
| 0xE71438 | Botschaft (STAT_DRUCK_KAELTE, 0x2D2, FA): Timeout | 1 |
| 0xE71439 | Botschaft (STAT_DRUCK_KAELTE, 0x2D2, FA): DT_PSEN_RFCI invalid signal | 1 |
| 0xE7143A | Botschaft (STAT_FAS, 0x232, FA): Timeout | 1 |
| 0xE7143B | Botschaft (STAT_FAS, 0x232, FA): ST_SHTR_DR invalid signal | 1 |
| 0xE7143C | Botschaft (ST_HVSTO_1, 0x1FA, FA): Timeout | 1 |
| 0xE7143D | Botschaft (ST_HVSTO_1, 0x1FA, FA): RQ_COOL_HVSTO invalid signal | 1 |
| 0xE7143E | Botschaft (ST_HVSTO_1, 0x1FA, FA): ST_VA_COOL_HVSTO invalid signal | 1 |
| 0xE7143F | Botschaft (ST_HVSTO_1, 0x1FA, FA): ST_CSOV_HVSTO invalid signal | 1 |
| 0xE71440 | Botschaft (ST_HVSTO_1, 0x1FA, FA): AVL_TEMP_HVSTO invalid signal | 1 |
| 0xE71441 | Botschaft (ST_HVSTO_1, 0x1FA, FA): AVL_TEMP_HTEX_HVSTO invalid signal | 1 |
| 0xE71442 | Botschaft (STAT_ENG_STA_AUTO, 0x30B, FA): Timeout | 1 |
| 0xE71443 | Botschaft (STAT_ENG_STA_AUTO, 0x30B, FA): ST_FN_MSA invalid signal | 1 |
| 0xE71444 | Botschaft (STAT_SCHICHTUNG_FOND, 0x2D3, FA): Timeout | 1 |
| 0xE71445 | Botschaft (STAT_SCHICHTUNG_FOND, 0x2D3, FA): DT_STRA_RC_AIC invalid signal | 1 |
| 0xE71447 | Botschaft (STAT_SENSOR_AUC, 0x2D0, FA): Timeout | 1 |
| 0xE71448 | Botschaft (STAT_SENSOR_AUC, 0x2D0, FA): DT_SEN_AUC invalid signal | 1 |
| 0xE71449 | Botschaft (ST_SOLS, 0x3D3, FA): Timeout | 1 |
| 0xE7144A | Botschaft (ST_SOLS, 0x3D3, FA): ST_SOLS_DR invalid signal | 1 |
| 0xE7144B | Botschaft (ST_SOLS, 0x3D3, FA): ST_SOLS_PS invalid signal | 1 |
| 0xE7144C | Botschaft (ST_VA_HVBTC, 0x389, FA): Timeout | 1 |
| 0xE7144D | Botschaft (ST_VA_HVBTC, 0x389, FA): ST_CSOV_AIC signal invalid | 1 |
| 0xE7144E | Botschaft (STAT_Ventil_Klima, 0x2D6, FA): Timeout | 1 |
| 0xE7144F | Botschaft (STAT_Ventil_Klima, 0x2D6, FA): ST_AIC_CMPR_CLT invalid signal | 1 |
| 0xE71451 | Botschaft (DT_PT_1 ,  0x3FB, FA): Timeout | 1 |
| 0xE71452 | Botschaft (CTR_ACCM, 0x38C, FA): Timeout | 1 |
| 0xE71453 | Botschaft (CTR_ACCM, 0x38C, FA): RLS_ACCM invalid signal | 1 |
| 0xE71454 | Botschaft (CTR_ACCM, 0x38C, FA): PWR_ACCM_MAX invalid signal | 1 |
| 0xE71455 | Botschaft (DT_PT_1,  0x3FB, FA): ST_INFS_DRV invalid signal | 1 |
| 0xE71456 | Botschaft (CTR_SFYC_1,  0x280, FA): CTR_AL_SFYC invalid signal | 1 |
| 0xE71457 | Botschaft (CTR_SFYC_1,  0x280, FA): CTR_OP_AIC_SFYC invalid signal | 1 |
| 0xE71458 | Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): Timeout | 1 |
| 0xE71459 | Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): LIM_TORQ_CRSH_ACCM invalid signal | 1 |
| 0xE7145A | Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): RQ_HTFL_DME invalid signal | 1 |
| 0xE7145B | Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA): Timeout | 1 |
| 0xE7145C | Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA): ST_CLSY | 1 |
| 0xE71465 | Botschaft (SU_SW_DRDY_2,  0x3E6, FA): Timeout | 1 |
| 0xE71466 | Botschaft (SU_SW_DRDY_2,  0x3E6, FA): AVL_MOD_SW_DRDY_INTR invalid signal | 1 |
| 0xE71467 | Botschaft (FLLUPT_KLEMME_30G_F, 0x3AC, FA): Timeout | 1 |
| 0xE71468 | Botschaft (FLLUPT_KLEMME_30G_F, 0x3AC, FA): FLLUPT_KL_30_ERCTR invalid signal | 1 |
| 0xE71469 | Botschaft (FLLUPT_GPWSUP, 0x3BE, FA): Timeout | 1 |
| 0xE7146A | Botschaft (FLLUPT_KLEMME_30G_F, 0x3BE, FA): FLLUPT_GPWSUP invalid signal | 1 |
| 0xE7146F | Botschaft (STAT_FUNKSCHLUESSEL, 0x23A,FA): OP_KEY_BUT_SPFN invalid signal | 1 |
| 0xE71470 | Botschaft (ST_CHGINTF, 0x3B4, FA): Timeout | 1 |
| 0xE71471 | Botschaft (ST_CHGINTF, 0x3B4, FA): ST_CHGWR_PLGD invalid signal | 1 |
| 0xE71472 | Botschaft (CHGNG_ST, 0x3E9, FA): Timeout | 1 |
| 0xE71473 | Botschaft (CHGNG_ST, 0x3E9, FA): ST_CHGRDI invalid signal | 1 |
| 0xE71474 | Botschaft (ST_VA_HVBTC, 0x389, FA): ST_PO_CSOV_AIC invalid signal | 1 |
| 0xE71475 | Botschaft (DIAG_OBD_ENG, 0x397, FA): Timeout | 1 |
| 0xE71476 | Botschaft (DIAG_OBD_ENGMG_EL, 0x3E8, FA): Timeout | 1 |
| 0xE71477 | Botschaft (SVC[EME], 0x5BA, FA): Timeout | 1 |
| 0xE71478 | Botschaft (RELATIVZEIT, 0x328, FA): Timeout | 1 |
| 0xE71479 | Botschaft (STAT_HVSTO_2, 0x112, FA): Timeout | 1 |
| 0xE7147B | Botschaft (MOD_VC, 0x432, FA): Timeout | 1 |
| 0xE7147C | Botschaft (ST_EL_GEY, 0x3E5, FA): Timeout | 1 |
| 0xE7147D | Botschaft (V_VEH, 0x1A1, FA): Timeout | 1 |
| 0xE7147E | Botschaft (STAT_Ventil_Klima, 0x2D6, ZSG): Timeout | 1 |
| 0xE7147F | Botschaft (ST_eDH_LIN, 0x11, AC-LIN4): Timeout | 1 |
| 0xE71480 | Botschaft (ST_EKMV20_LIN, 0x1F, AC-LIN4): Timeout | 1 |
| 0xE71481 | Botschaft (ST_DIAG_SYS_E2_LIN, 0x21, AC-LIN4): Timeout | 1 |
| 0xE71482 | Botschaft (ST_DIAG_SYS_eDH_LIN, 0x13, AC-LIN4): Timeout | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | CPD_DIAGINFO_PATH | 0-n | High | 0xFF | HVS_COOLING_REQ_STATE | - | - | - |
| 0x0002 | HKLUSV_Klemmt | 0-n | High | 0x01 | HKLUSV_KLEMMT_IN | - | - | - |
| 0x0003 | HKLUSV_DIAG_PATH | 0-n | High | 0x0E | HKLUSV_DIAG_PATH_N | - | - | - |
| 0x4001 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4002 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4003 | HKLUSV_DIAG_RATIO | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x400A | CPD_Ratio | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6007 | EDH_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HKLUSV_DIAG_PATH_N

| WERT | TEXT |
| --- | --- |
| 0x02 | Pfad_1 |
| 0x04 | Pfad_2 |
| 0x08 | Pfad_3 |
| 0x0e | Diagnose_Fehler |

### HKLUSV_KLEMMT_IN

| WERT | TEXT |
| --- | --- |
| 0 | Klemmt geschlossen |
| 1 | Klemmt offen |

### HVS_COOLING_REQ_STATE

| WERT | TEXT |
| --- | --- |
| 0 | ab |
| 1 | cd |
| 2 | ef |
| 3 | gh |

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
| 0x078000 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x078001 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x078002 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x078003 | NVM_E_REQ_FAILED | 0 |
| 0x078004 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x078005 | NVM_E_WRITE_FAILED | 0 |
| 0x078006 | NVM_E_READ_FAILED | 0 |
| 0x078007 | NVM_E_CONTROL_FAILED | 0 |
| 0x078008 | NVM_E_ERASE_FAILED | 0 |
| 0x078009 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x07800A | NVM_E_READ_ALL_FAILED | 0 |
| 0x07800B | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x07800C | CANIF_E_STOPPED | 0 |
| 0x07800D | CANNM_E_INIT_FAILED | 0 |
| 0x07800E | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x07800F | CANTP_E_COMM | 0 |
| 0x078010 | CNM_E_TX_PATH_FAILED | 0 |
| 0x078011 | EEP_E_ERASE_FAILED | 0 |
| 0x078012 | EEP_E_WRITE_FAILED | 0 |
| 0x078013 | EEP_E_READ_FAILED | 0 |
| 0x078014 | EEP_E_COMPARE_FAILED | 0 |
| 0x078015 | MCU_E_CLOCK_FAILURE | 0 |
| 0x078016 | MCU_E_LOCK_FAILURE | 0 |
| 0x078017 | WDG_E_DISABLE_REJECTED | 0 |
| 0x078018 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x078019 | WDGM_E_SET_MODE | 0 |
| 0x07801A | CAN_E_TIMEOUT | 0 |
| 0x07801E | FEE_E_WRITE_FAILED | 0 |
| 0x07801F | CANIF_E_INVALID_TXPDUID | 0 |
| 0x078020 | CANIF_E_INVALID_RXPDUID | 0 |
| 0x078022 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x078028 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x078029 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x07802A | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x07802B | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x07802C | PIA_E_IO_ERROR | 0 |
| 0x07802D | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x07802E | FR_E_ACCESS | 0 |
| 0x07802F | FRIF_E_JLE_SYNC | 0 |
| 0x078030 | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 |
| 0x078031 | DEM_EVENT_1 | 0 |
| 0x078032 | DEM_EVENT_2 | 0 |
| 0x078033 | DEM_EVENT_3 | 0 |
| 0x078034 | DEM_EVENT_4 | 0 |
| 0x078035 | DEM_EVENT_5 | 0 |
| 0x078036 | DEM_EVENT_6 | 0 |
| 0x078037 | DEM_EVENT_7 | 0 |
| 0x078038 | DEM_EVENT_8 | 0 |
| 0x078039 | FLS_E_WRITE_FAILED | 0 |
| 0x07803A | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x07803B | FLS_E_COMPARE_FAILED | 0 |
| 0x07803C | FLS_E_READ_FAILED | 0 |
| 0x07803D | FLS_E_ERASE_FAILED | 0 |
| 0x07803F | eKMV: Überstrom | 0 |
| 0x078042 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x078043 | LINIF_E_RESPONSE | 0 |
| 0x078044 | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x078045 | Reset | 0 |
| 0x078046 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x078047 | ADC_E_TIMEOUT | 0 |
| 0x078048 | SPI_E_TIMEOUT | 0 |
| 0x078049 | LIN_E_TIMEOUT | 0 |
| 0x07804A | LINSM_E_CONFIRMATION_TIMEOUT | 0 |
| 0x07804B | CANNM_E_TX_PATH_FAILED | 0 |
| 0x07804C | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x07804D | CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x07804E | MCU_E_QUARTZ_FAILURE | 0 |
| 0x07804F | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x078050 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x078051 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x078052 | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x078053 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x078054 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x078055 | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x078056 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x078057 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x078058 | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x078059 | WDG_E_MISS_TRIGGER | 0 |
| 0x07805A | MCU_E_RC_MEASURE | 0 |
| 0x07805B | FLS_E_UNEXPECTED_FLASH_ID | 0 |
| 0x07805C | COMM_E_NET_START_IND_CHANNEL_1 | 0 |
| 0x07805D | COMM_E_STOP_Tx_TIMEOUT_C1 | 0 |
| 0x07805E | COMM_E_START_Tx_TIMEOUT_C1 | 0 |
| 0x078100 | EKMV Alivecounter | 1 |
| 0x078101 | EKMV Invalid Index | 1 |
| 0x078102 | EKMV Missing Frame counter | 1 |
| 0x078103 | EKMV Invalid Bit Pattern | 1 |
| 0x078104 | EKMV Unknown Diag | 1 |
| 0x078105 | EKMV Timeout | 1 |
| 0x078106 | EDH Alivecounter | 1 |
| 0x078107 | EDH Invalid Index | 1 |
| 0x078108 | EDH Frame counter | 1 |
| 0x078109 | EDH Bit Pattern | 1 |
| 0x07810A | EDH Unknown Diag | 1 |
| 0x07810B | EDH Timeout | 1 |
| 0x07810C | HP Alivecounter | 1 |
| 0x07810D | HP Invalid Index | 1 |
| 0x07810E | HP Missing Frame counter | 1 |
| 0x07810F | HP Invalid Bit Pattern | 1 |
| 0x078110 | HP Unknown Diag | 1 |
| 0x078111 | HP Timeout | 1 |
| 0x100100 | Kontakt zu FZM Slave verloren | 1 |
| 0x100101 | Einschlafbestätigungen nicht vollständig | 1 |
| 0x100102 | Ungültige LocalSleepReadiness-Botschaft empfangen | 1 |
| 0x230004 | Kommunikation Einschlafkoordinator: Zeitüberschreitung | 1 |
| 0x230008 | Kommunikation Einschlafkoordinator: Nachricht unplausibel | 1 |
| 0x801206 | Gebläseendstufe: Unter- oder Überspannung erkannt | 1 |
| 0x801208 | Gebläseendstufe: Strombegrenzung aktiv | 1 |
| 0xE70C38 | eKMV: Abschaltung wegen LIN-Kommunikationsfehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADR | 0-n | low | unsigned char | 0xa7d8c0 | - | 1.0 | 1.0 | 0.0 | real status autoadresierung |
| STAT_AUTOADR_ERROR | 0-n | - | unsigned char | - | TAB_AUTOADR_ERROR | - | - | - | Error: 0:  no error  1:  by preparing the network for autoaddressing  2: by resetting the network after an autoaddressing  3: by setting the actuators in service mode  4: by setting the actuators in normal mode  5:  by addressing & programming the actuators.  6:  unknow error occured. |
| STAT_AUTOADR_MOTOR_0_1_2_3 | 0-n | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Motorenr: Motor 0 to Motor 3. (11111111 11111111) |
| STAT_AUTOADR_MOTOR_4_5_6_7 | 0-n | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Motorenr: Motor 4 to Motor 7. (01111111 11111111) |
| STAT_AUTOADR_MOTOR_8_9_10_11 | 0-n | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Motorenr: Motor 8 to Motor 11. (01111111 11111111) |
| STAT_AUTOADR_MOTOR_12_13_14 | 0-n | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Motorenr: Motor 8 to Motor 11. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_0_1_2_3 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_4_5_6_7 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_8_9_10_11 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_12_13_14 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_VERDAMPFER | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_ZWEITE_VERDAMPFER | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_BELUEFTUNG_LINKS | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_BELEUFTUNG_RECHTS | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_FUSSRAUM_LINKS | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_FUSSRAUM_RECHTS | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_SCHICHTUNG_POTI | 0-n | high | unsigned int | - | - | - | - | - | Temperaturfühler |
| STAT_ADC_KLEMME_30 | 0-n | high | unsigned int | - | - | - | - | - | Spannungswert am Steuergerät an Klemme 30 |
| STAT_EXT_SUPPLY_DIAG | 0-n | high | unsigned int | - | - | - | - | - | Stromswert  diagnose |
| STAT_ADC_LIN_DIAG_SPANNUNG | 0-n | high | unsigned int | - | - | - | - | - | Spannungswert  diagnose |
| STAT_ADC_LIN_DIAG_STROM | 0-n | high | unsigned int | - | - | - | - | - | Stromswert  diagnose |

### RES_0X4012_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STADHEIZING_AUSGANG | 0-n | high | unsigned char | - | TAB2_STANDHEIZUNG_AUSGANG | - | - | - | STADHEIZING_AUSGANG |
| STAT_AC_LIN_SPANNUNG_CMD_AUSGANG | 0-n | high | unsigned char | - | TAB2_AC_LIN_SPANNUNG_CMD_AUSGANG | - | - | - | AC_LIN_SPANNUNG_CMD_AUSGANG |
| STAT_AC_LIN_SPANNUNG_DEN_AUSGANG | 0-n | high | unsigned char | - | TAB2_AC_LIN_SPANNUNG_DEN_AUSGANG | - | - | - | AC_LIN_SPANNUNG_DEN_AUSGANG |

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_NUMBER_WERT | HEX | high | unsigned int | - | - | - | - | - | HW_NUMBER |

### RES_0X401A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FACTORY_DATE_YY_WERT | HEX | high | unsigned char | - | - | - | - | - | Year |
| STAT_FACTORY_DATE_MM_WERT | HEX | high | unsigned char | - | - | - | - | - | Month |
| STAT_FACTORY_DATE_DD_WERT | HEX | high | unsigned char | - | - | - | - | - | Day |

### RES_0X401B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_PART_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | VALEO_PART_NUMBER |

### RES_0X401C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_PART_NUMBER_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Valeo part number index |

### RES_0X401D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Serial Number |

### RES_0X401E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ICT_STEP_COUNTER_WERT | HEX | high | unsigned char | - | - | - | - | - | ICT STEP COUNTER |

### RES_0XA111_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENCE_WERT | + | - | - | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Referenznummer Klappenmotors |
| STAT_SUPPLIER_WERT | + | - | - | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Lieferantennummer Klappenmotors |
| STAT_ASIC_WERT | + | - | - | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle ASIC-Nummer Klappenmotors |

### RES_0XA11B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDH_VERRIEGELUNG_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Verriegelung (aktiv = 1/nicht aktiv = 0. |
| STAT_EDH_VERRIEGELUNG_ZAEHLER_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der bisher aufgetretenen Schutzverriegelungen an. |

### RES_0XA11C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WP_BEFUELLUNG | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Diagnosejob läuft nicht; 0x01 Daignosejob gestartet |

### RES_0XA11D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Status der Kalibrierung: 0x00 = Kalibrierung nicht aktiv 0x01 = Kalibrierung aktiv |

### RES_0XD15F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_NR | 0-n | - | unsigned char | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD160_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_NR | 0-n | - | unsigned char | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD592_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_2_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_3_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_4_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_5_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_6_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_7_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_8_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |

### RES_0XD593_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_3_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_4_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_5_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_6_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_7_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_8_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |

### RES_0XD866_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_ZUSATZWASSERPUMPE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_KLIMA_DISPLAY_EINHEIT_NR | 0-n | - | unsigned char | - | TAB_TEMP_EINHEIT | 1.0 | 1.0 | 0.0 | 0 = Celsius,  1 = Fahrenheit |
| STAT_KLIMA_VARIANTE_NR | 0-n | high | unsigned char | - | TAB_KLIMAVARIANTE | - | - | - | Klimavariante:  Werte siehe Tabelle TAB_KLIMAVARIANTE |
| STAT_VORHANDEN_EMOTORWASSERPUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_PTC_VORN | 0/1 | high | unsigned char | - | - | - | - | - | PTC-Modul: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_UMWAELZPUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD86F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_VORN_UMLUFT_AUC_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_HHS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_KLIMA_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_MAX_AC_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_ALL_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_REST_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_AUTO_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_AUTO_LI_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_AUTO_RE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_PLUS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_MINUS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_PLUS_LI_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_MINUS_LI_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_PLUS_RE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_MINUS_RE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_TOGGLE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_TOGGLE_LINKS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_TOGGLE_RECHTS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_BELUEFTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_FUSSRAUM_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_BF_BELUEFTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_BF_FUSSRAUM_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_HFS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_RESERVIERT2_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT3_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT4_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT5_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT6_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | Reserviertes Result |

### RES_0XD88E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTMOTOR_BLOCKIERUNG_WERT | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Blockierung Schrittmotor |
| STAT_SCHRITTMOTOR_ANTWORT_FEHLT_WERT | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Antwort Schrittmotor |
| STAT_SCHRITTMOTOR_INTERNER_FEHLER_WERT | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler interner Motorfehler |
| STAT_SCHRITTMOTOR_INITIALISIERUNG_FEHLER_WERT | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Initialisierungsfehler |

### RES_0XD8B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_ON_OFF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status ON/OFF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_MODE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status MODE-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_EJECT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status EJECT-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_TP_AM_FM_TRF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status TP/AM/FM/TRF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste links: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste rechts: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |

### RES_0XD8C1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_LED_UMLUFT_AUC_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_HHS_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_KLIMA_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_MAX_AC_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_ALL_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_REST_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_AUTO_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_AUTO_LI_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_AUTO_RE_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_LV_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_LV_BELUEFTUNG_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_LV_FUSSRAUM_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_UMLUFT_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_HFS_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_OFF_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_RESERVIERT4_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_RESERVIERT5_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |

### RES_0XD8C3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EKMV_DREHZAHL_SOLL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Soll-Drehzahl in % |
| STAT_EKMV_DREHZAHL_IST_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ist-Drehzahl in % |

### RES_0XD8C4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der Ist-Drehzahl |
| STAT_LEISTUNG_WERT | kW | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Ausgabe der Leistung in KW auf 2 Nachkommastellen genau. Vom SG wird der Wert mit Faktor 25 geliefert und in der SGBD durch 25 dividiert. |
| STAT_STROM_DC_WERT | A | high | unsigned char | - | - | 1.0 | 4.0 | 0.0 | Ausgabe des Stroms der Hochspannung. |
| STAT_HOCHSPANNUNG_WERT | V | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Ausgabe der Hochspannung in Volt. Ungültigkeitswert = 510 Volt |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Ausgabe der Temperatur in Grad Celsius. Das Steuergerät liefert den Wert mit Offset 50. SGBD subtrahiert 50. |
| STAT_STROM_AC_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Stroms. |

### RES_0XD8C5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATUR_EIN | 0/1 | high | unsigned int | 0x0001 | - | 1.0 | 1.0 | 0.0 | Begrenzung wegen Übertemperatur, 1 = aktiv |
| STAT_UEBERSTROM_EIN | 0/1 | high | unsigned int | 0x0002 | - | 1.0 | 1.0 | 0.0 | Begrenzung wegen Überstrom, 1 = aktiv |
| STAT_UNTER_UEBERSPANNUNG_EIN | 0/1 | high | unsigned int | 0x0004 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Über-/Unterspannung, 1 = aktiv |
| STAT_ABSCHALTUNG_UEBERTEMP_EIN | 0/1 | high | unsigned int | 0x0008 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen kritischer Übertemperatur, 1 = aktiv |
| STAT_ABSCHALTUNG_DREHMOMENT_EIN | 0/1 | high | unsigned int | 0x0010 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Drehmomentüberschreitung, 1 = aktiv |
| STAT_ABSCHALTUNG_KOMMFEHLER_EIN | 0/1 | high | unsigned int | 0x0020 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen LIN-Kommuniaktionsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_VERSORGUNGSFEHLER_EIN | 0/1 | high | unsigned int | 0x0040 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen externem Versorgungsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_INVFEHLER_EIN | 0/1 | high | unsigned int | 0x0080 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Fehler Inverterversorgung, 1 = aktiv |
| STAT_ABSCHALTUNG_SENSORIK_EIN | 0/1 | high | unsigned int | 0x0100 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Fehler in Sensorik: Temperatur- oder Phasenstromsensor defekt, 1 = aktiv |
| STAT_ABSCHALTUNG_KURZSCHLUSS_EIN | 0/1 | high | unsigned int | 0x0200 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Kurzschluss, 1 = aktiv |
| STAT_ABSCHALTUNG_ANLAUFFEHLER_EIN | 0/1 | high | unsigned int | 0x0400 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Anlauffehler, 1 = aktiv |
| STAT_BETRIEB_NR | 0-n | high | unsigned int | 0x3800 | TAB_BETRIEBSSTATUS_EKMVGEN20 | - | - | - | Status zum Betrieb |
| STAT_KOMMUNIKATION | 0/1 | high | unsigned int | 0x4000 | - | 1.0 | 1.0 | 0.0 | Status der Kommunikation, 0 = kein Fehler, 1 = Fehler aktiv |
| STAT_KOMMUNIKATION_2 | 0/1 | high | unsigned int | 0x8000 | - | 1.0 | 1.0 | 0.0 | Status der Kommunikation 2, 0 = kein Fehler, 1 = Fehler aktiv |

### RES_0XD8C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_EKMV | 0-n | high | unsigned char | - | TAB_AKS_EKMV | 1.0 | 1.0 | 0.0 | Ergebnis der Isolationsprüfung: 0 = kein aktiver Kurzschluss 1 = aktiver Kurzschluss Low-Side 2 = aktiver Kurzschluss High-Side |

### RES_0XD8CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREILAUF_EKMV | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis der Isolationsprüfung: 0 = kein aktiver Freilauf 1 = aktiver Freilauf |

### RES_0XD8CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WASSERAUSTRITT_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Temperatur des Heizwassers am Wasseraustritt des elektrischen Durchlauferhitzers. |
| STAT_STROM_WERT | A | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | Stromaufnahme (hochvoltseitig) des elektrischen Durchlauferhitzers. |
| STAT_HOCHVOLTSPANNUNG_WERT | V | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | Hochvoltspannung gemessen am elektrischen Durchlauferhitzers. Ungültigkeitswert = 510 Volt. |
| STAT_ZAEHLER_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verriegelungszähler des elektrischen Durchlauferhitzers. |

### RES_0XD8D2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_KLIMAKOMPRESSOR | 0/1 | high | unsigned char | - | - | - | - | - | HV-Freigabe für eKMV: 0x00 = keine Freigabe 0x01 = Freigabe |
| STAT_LEISTUNG_KLIMAKOMPRESSOR_MAXIMAL_WERT | kW | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximal vom HV-PM für den eKMV bereitgestellte Leistung. |

### RES_0XD8D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_EDH | 0/1 | high | unsigned char | - | - | - | - | - | HV-Freigabe für EDH: 0x00 = keine Freigabe 0x01 = Freigabe |
| STAT_LEISTUNG_EDH_MAXIMAL_WERT | kW | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximal vom HV-PM für den EDH bereitgestellte Leistung. |

### RES_0XD905_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMER_EINLAUFSCHUTZ_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Restzeit des Einlaufschutzes in Sekunden |
| STAT_TIMER_START_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Startwert vom Timer für Einlaufschutz |

### RES_0XD918_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Einlaufschutz: 0 = Einlaufschutz abgeschlossen 1 = Einlaufschutz noch gesetzt |
| STAT_EINLAUF_AKTIV_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Ausgabe Status Einlaufschutz: 0 = Einlauf nicht aktiv 1 = Einlauf aktiv |

### RES_0XD91A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_LUFTVERTEILUNG_LINKS_NR | 0-n | - | unsigned char | - | TAB_LUFTVERTEILUNG | - | - | - | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 4=OBEN; 5=OBEN_UNTEN (Nur Fahrer); 6=OBEN_MITTE; 7=OBEN_MITTE_UNTEN; 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); |
| STAT_KLIMA_VORN_LUFTVERTEILUNG_RECHTS_NR | 0-n | - | unsigned char | - | TAB_LUFTVERTEILUNG | - | - | - | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 4=OBEN; 5=OBEN_UNTEN (Nur Fahrer); 6=OBEN_MITTE; 7=OBEN_MITTE_UNTEN; 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); |

### RES_0XD941_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_DEFROST_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_DEFROST_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD942_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0..100% (127 = gelesener Wert ungültig, 255=Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0 ... 100 % |

### RES_0XD947_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSSRAUM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSSRAUM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD949_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_LI_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_LI_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_RE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_RE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_UMLUFT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_UMLUFT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD950_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_TEMP_LUFT_FOND_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_TEMP_LUFT_FOND_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD953_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERLAUF_NR | 0-n | - | unsigned char | - | TAB_STATUS_KALIBRIERLAUF | 1.0 | 1.0 | 0.0 | 0 = in diesem Klemmenzyklus noch nicht gestartet, 1 = Kalibrierlauf läuft gerade, 2 = Kalibrierlauf abgeschlossen |
| STAT_KALIBRIERLAUF_ERGEBNIS | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Kalibrierlauf abgeschlossen NIO, 1 = Kalibierlauf abgeschlossen IO und Daten gespeichert; Das Ergebnis bezieht sich auf den zuletzt durchgeführten Kalibrierlauf. Das Ergebnis darf nur im Anschluss eines vollständig durchlaufenen Kalibrierlaufs abgespeichert werden. |
| STAT_MOTOR_1_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_2_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_3_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_4_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_5_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_6_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_7_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_8_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_9_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_10_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_11_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_12_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_13_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_14_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_15_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_16_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_17_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_18_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_19_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_20_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |

### RES_0XD95A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_WASSERVENTIL_MONO | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_WASSERVENTIL_DUO | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD962_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_SOLARSENSOR_LINKS_WERT | W/m² | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Solarsensor |
| STAT_BUS_IN_SOLARSENSOR_RECHTS_WERT | W/m² | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Solarsensor |

### RES_0XD96F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTSCHEIBENHEIZUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Frontscheibenheizung: 0 = AUS, 1 = EIN |

### RES_0XD977_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORNE_SOLLTEMP_LINKS_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der eingestellten Sollwert-Temperatur links. |
| STAT_KLIMA_VORNE_SOLLTEMP_RECHTS_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der eingestellten Sollwert-Temperatur rechts. |

### RES_0XD97B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 16 |
| STAT_MOT_0X3F_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XD980_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSTELLBEREICH_KLAPPE1_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE2_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE3_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE4_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE5_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE6_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE7_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE8_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE9_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE10_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE11_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE12_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE13_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE14_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE15_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE16_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE17_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE18_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE19_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE20_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |

### RES_0XD98A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100: 0 = Kalt 100 = Warm |

### RES_0XD98B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_ISTPOS_ZENTRALANTRIEB_WERT | ° | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Istwert Kulissenstellung: 0...360 Grad IHKA: 0 = 100% Defrost 120 = 100% Belüftung 242 = 100% Fussraum  IHKA-VA02 IHKS: pos_ist = Position laut Schrittmotortreiber pos_function = Position laut Brettaufbau, KFL  - falls pos_ist kleiner oder gleich 100: pos_function = 100 - pos_ist - sonst: pos_function = 460 - pos_ist |
| STAT_MOT_SOLLPOS_ZENTRALANTRIEB_WERT | ° | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Kulissenstellung: 0...360 Grad IHKA: 0 = 100% Defrost 120 = 100% Belüftung 242 = 100% Fussraum   IHKA-VA02 IHKS: pos_ist = Position laut Schrittmotortreiber pos_function = Position laut Brettaufbau, KFL  - falls pos_ist kleiner oder gleich 100: pos_function = 100 - pos_ist - sonst: pos_function = 460 - pos_ist |

### RES_0XD98C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_LINKS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_LINKS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 0 = Kalt 100 = Warm |

### RES_0XD98E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_RECHTS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_RECHTS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 0 = Kalt 100 = Warm |

### RES_0XD99C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_ISTPOS_BEL_FUSS_LINKS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Zentralantrieb Belüftung Fussraum: 0...100 % |
| STAT_MOT_ISTPOS_BEL_FUSS_RECHTS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Zentralantrieb Belüftung Fussraum: 0...100 % |
| STAT_MOT_SOLLPOS_BEL_FUSS_LINKS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Zentralantrieb Belüftung Fussraum: 0...100 % |
| STAT_MOT_SOLLPOS_BEL_FUSS_RECHTS_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Zentralantrieb Belüftung Fussraum: 0...100 % |

### RES_0XD9A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | Freigabe für Einlaufschutz: 0 = Keine Freigabe (gesperrt) = Einlaufroutine kann nicht automatisch gestartet werden. 1 = Freigabe nach Einschaltbedingungen |

### RES_0XD9AC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WP_TEMPERATURFUEHLER_1_WERT | °C | high | unsigned int | - | - | 0.2 | 1.0 | -20.0 | Wärmepumpe Temperaturfühler 1 |
| STAT_WP_TEMPERATURFUEHLER_2_WERT | °C | high | unsigned int | - | - | 0.2 | 1.0 | -20.0 | Wärmepumpe Temperaturfühler 2 |
| STAT_WP_TEMPERATURFUEHLER_3_WERT | °C | high | unsigned int | - | - | 0.2 | 1.0 | -20.0 | Wärmepumpe Temperaturfühler 3 |
| STAT_WP_PT_FUEHLER_1_DRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Wärmepumpe: Druck vom Druck-Temperaturfühler 1 |
| STAT_WP_PT_FUEHLER_1_TEMP_WERT | °C | high | unsigned int | - | - | 0.2 | 1.0 | -20.0 | Wärmepumpe: Temperatur vom Druck-Temperaturfühler 1 |
| STAT_WP_PT_FUEHLER_2_DRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Wärmepumpe: Druck vom Druck-Temperaturfühler 2 |
| STAT_WP_PT_FUEHLER_2_TEMP_WERT | °C | high | unsigned int | - | - | 0.2 | 1.0 | -20.0 | Wärmepumpe: Temperatur vom Druck-Temperaturfühler 2 |

### RES_0XD9AD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WP_ABSPERRVENTIL_1 | 0/1 | high | unsigned char | - | - | - | - | - | Absperrventil 1:  0x00 = Ventil nicht bestromt = offen 0x01 = Ventil bestromt = geschlossen |
| STAT_WP_ABSPERRVENTIL_2 | 0/1 | high | unsigned char | - | - | - | - | - | Absperrventil 2:  0x00 = Ventil nicht bestromt = offen 0x01 = Ventil bestromt = geschlossen |
| STAT_WP_ABSPERRVENTIL_3 | 0/1 | high | unsigned char | - | - | - | - | - | Absperrventil 3:  0x00 = Ventil nicht bestromt = offen 0x01 = Ventil bestromt = geschlossen |
| STAT_WP_ABSPERRVENTIL_4 | 0/1 | high | unsigned char | - | - | - | - | - | Absperrventil 4:  0x00 = Ventil nicht bestromt = geschlossen 0x01 = Ventil bestromt = offen |
| STAT_WP_EXP_VENTIL_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Expansionsventil 1:  0% = geschlossen 100% = offen |
| STAT_WP_EXP_VENTIL_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Expansionsventil 2:  0% = geschlossen 100% = offen |
| STAT_WP_EXP_VENTIL_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Expansionsventil 3:  0% = geschlossen 100% = offen |

### RES_0XD9DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WP_ZWP_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zusatzwasserpumpe der Wärmepumpe: 0% = Wasserpumpe aus 100% = Wasserpumpe volle Leistung |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPENMOTOR_IDENT | 0xA111 | - | Auslesen der herstellerspezifischen Daten eines  Klappenmotors. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA111_R | RES_0xA111_R |
| EDH_VERRIEGELUNG | 0xA11B | - | Steuern der Schutzverriegelung des eDH. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA11B_R |
| WP_BEFUELLUNG | 0xA11C | - | Schaltung der Ventile zur Befüllung Wärmepumpenkreislauf | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA11C_R |
| WP_EXP_VENTIL_KALIBRIEREN | 0xA11D | - | Kalibrierung der Expansionsventile durchführen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA11D_R |
| SITZHEIZUNG_VORNE_TASTER_LINKS | 0xD15D | STAT_TASTER_SITZHEIZUNG_VORNE_LINKS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_RECHTS | 0xD15E | STAT_TASTER_SITZHEIZUNG_VORNE_RECHTS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_LED_RECHTS | 0xD15F | - | Status LED-Anzeige Sitzheizung vorne rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD15F_D |
| SITZHEIZUNG_VORNE_LED_LINKS | 0xD160 | - | Status LED-Anzeige Sitzheizung vorne links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD160_D |
| FBM_SENS_TASTEN | 0xD592 | - | FBM-Sensorik | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD592_D | RES_0xD592_D |
| FBM_TASTEN | 0xD593 | - | FBM-Tasten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD593_D | RES_0xD593_D |
| STEUERN_SIGNALMODE | 0xD598 | - | Stellt ein, ob bei Betätigung der Bedienelemente die Signale auf den CAN nach außen verschickt werden (unterdrückt = Arg 1). Wird bei Klemmenwechsel automatisch deaktiviert (oder bei Arg. 0) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD598_D | - |
| FBM_TASTEN_VORHANDEN_WERT | 0xD599 | STAT_FBM_TASTEN_VORHANDEN_WERT | Gibt aus, wieviele FBM-Tasten verbaut sind: 0 = keine FBM-Tasten verbaut, 1 = 1 Taste verbaut, 2 = 2 Tasten verbaut, N = n Tasten verbaut, 255 = Anzahl unbekannt | Tasten | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0_D | - |
| TEMP_FUSSRAUM_LINKS_WERT | 0xD859 | STAT_TEMP_FUSSRAUM_LINKS_WERT | Temperaturfühler | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_FUSSRAUM_RECHTS_WERT | 0xD85A | STAT_TEMP_FUSSRAUM_RECHTS_WERT | Temperaturfühler | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_INNEN_UNBELUEFTET | 0xD85C | STAT_TEMP_INNEN_WERT | Errechnete Innentemperatur | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_POTI_SCHICHTUNG_FOND_WERT | 0xD860 | STAT_BUS_IN_POTI_SCHICHTUNG_FOND_WERT | Potentiometer Schichtung Fond:  0 ... 100% | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KONFIGURATION_KLIMA_VORN | 0xD866 | - | Konfiguration der Klimaanlage vorn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD866_D |
| KAELTEMITTEL_MEDIUM | 0xD868 | STAT_KAELTEMITTEL_MEDIUM_NR | Kühlmedium: 0 = R134a, 1 = CO2 | 0-n | - | - | unsigned char | TAB_KAELTEMITTEL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_KLAPPENMOTOR_VORN | 0xD86E | - | Aufruf für Ansteuerung der einzelnen Schrittmotore auf beliebige Öffnung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86E_D | - |
| KLIMA_TASTEN_VORN | 0xD86F | - | Tasten Klimabedienfeld | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD86F_D | RES_0xD86F_D |
| STEUERN_BEDIENUNG_TEMP | 0xD875 | - | Simuliert die Einstellung der Temperatur am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD875_D | - |
| STEUERN_GEBLAESE | 0xD877 | - | Ansteuern der Gebläseendstufe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD877_D | - |
| STEUERN_MOTOREN_KALIBRIERLAUF | 0xD88D | - | Kalibrierung der Schrittmotore. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| SCHRITTMOTOR_FEHLER | 0xD88E | - | Abfrage der Schrittmotor-Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD88E_D |
| STEUERN_SELBSTTEST_SCHRITTMOTOREN | 0xD88F | - | Aufruf startet den Selbsttest der Schrittmotoren. Alle Motore werden auf 50% angefahren und anschließend geprüft, ob die Position ereicht worden ist. Das Ergebnis kann mit dem Service SELBSTTEST_SCHRITTMOTOREN abgefragt werden. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_DISPLAY_TESTEN | 0xD89A | - | Steuert das Display mit Bitmustern an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD89A_D | - |
| ELEKTRISCHER_ZUHEIZER_FRONT | 0xD8A0 | - | Job zur Aktivierung des elektrischen Zuheizers ohne die erforderlichen Randbedingungen, wie z.B. Energiemanagement, Energieverteilungsalgoritmus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8A0_D | - |
| VORHANDEN_FONDSCHICHTUNG | 0xD8AA | STAT_VORHANDEN_FONDSCHICHTUNGSPOTI | 0=Fondschichtungspotentiometer nicht vorhanden 1=Fondschichtungspotentiometer vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | Solarsensor: 0 = nicht vorhanden / codiert; 1 = vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor: 0 = nicht vorhanden; 1 = vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTEN | 0xD8B5 | - | Tasten Audiobedienfeld | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8B5_D | RES_0xD8B5_D |
| LEDS_KLIMA_VORN | 0xD8C1 | - | LEDs Klimabedienfeld | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8C1_D | RES_0xD8C1_D |
| EKK_DREHZAHLERHOEHUNG | 0xD8C2 | STAT_EKK_DREHZAHLERHOEHUNG_EIN | Drehzahlerhöhung EKK 0=AUS, 1=EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EKMV_DREHZAHL_GEN20 | 0xD8C3 | - | Drehzahl Kältemitteldichter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8C3_D | RES_0xD8C3_D |
| EKMV_ANALOGWERTE_GEN20 | 0xD8C4 | - | Analogwertewerte von Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8C4_D |
| EKMV_BETRIEBSZUSTAND_GEN20 | 0xD8C5 | - | Betriebszustände von Kältemittelverdichter Gen. 2.0 | Bit | - | - | BITFIELD | RES_0xD8C5_D | - | - | - | - | 22 | - | - |
| EKMV_RESET_GEN20 | 0xD8C6 | - | Reset Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8C6_D | - |
| EKMV_AKS_GEN20 | 0xD8C7 | - | Isolationsprüfung eKMV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8C7_D | RES_0xD8C7_D |
| EKMV_FREILAUF | 0xD8CB | - | Freilauf eKMV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8CB_D | RES_0xD8CB_D |
| EDH_STATUS | 0xD8CD | - | Statuswerte elektrischer Durchlauferhitzer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8CD_D |
| KONFIGURATION_KLIMA_PRODUKTLINIE | 0xD8CE | STAT_KLIMA_PRODUKTLINIE | Gibt die im Steuergerät codierte Produktlinie aus. Siehe Tabelle TAB_KLIMA_PRODUKTLINIE | 0-n | - | High | unsigned char | TAB_KLIMA_PRODUKTLINIE | - | - | - | - | 22 | - | - |
| BUS_IN_HV_POWERMANAGEMENT | 0xD8D2 | - | Die maximal vom HV-PM für die Klima bereitgestellten Leistungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D2_D |
| BUS_IN_HV_PM_EDH | 0xD8D3 | - | Die maximal vom HV-PM für den EDH bereitgestellte Leistung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D3_D |
| BUS_IN_KUEHLMITTELTEMPERATUR | 0xD8D4 | STAT_BUS_IN_KUEHLMITTEL_MOTOR_TEMP_WERT | Kühlmitteltemperatur Motor | °C | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLLWERT_ELEKTRISCHER_ZUHEIZER_VORN | 0xD902 | STAT_SOLLWERT_ELEKTRISCHER_ZUHEIZER_WERT | Elektrischer Zuheizer (PTC oder EDH) Sollwert in Prozent 0 - 100 % | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_ZUSATZWASSERPUMPE_EIN | 0xD904 | STAT_BUS_OUT_ZUSATZWASSERPUMPE_EIN | Zusatzwasserpumpenstatus: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TIMER_EINLAUFSCHUTZ | 0xD905 | - | Ermittlung der verbleibenden Restzeit beim Einlaufschutz. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD905_D |
| SITZHEIZUNG_VORNE_TASTER_VORHANDEN | 0xD90E | STAT_VORHANDEN_SITZHEIZUNG_TASTER_VORNE | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_KOMPRESSORKUPPLUNG | 0xD916 | STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0=Kompressorkupplung nicht vorhanden 1=Kompressorkupplung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder schreiben des neuen Status. Erst nach vollständigem Einlauf wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918_D | RES_0xD918_D |
| KLIMA_VORN_LUFTVERTEILUNG_LI_RE | 0xD91A | - | Ausgabe des Status der Luftverteilung vorne. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD91A_D |
| BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | 0xD91D | STAT_BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | Signal für die Anforderung der Kompressorleistung in PWM | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927_D | - |
| KLIMA_VORN_KLAPPEN_PRG_MITTE | 0xD928 | STAT_KLIMA_VORN_KLAPPEN_PRG_MITTE | Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_GEBLAESESTUFE_ANZ | 0xD92B | STAT_KLIMA_VORN_GEBLAESESTUFE_ANZ_WERT | Gibt die Anzeige der aktuellen Gebläsestufe aus. | Stufe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_OFF_EIN | 0xD92C | STAT_KLIMA_VORN_OFF_EIN | Funktionsstatus Klima OFF: 0 = AUS = Klima ist eingeschaltet, LED ist aus 1 = EIN = Klima ist ausgeschaltet, LED ist an | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_DEFROST_EIN | 0xD92D | STAT_KLIMA_VORN_PRG_DEFROST_EIN | Defrost-Programm: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_MAX_AC_EIN | 0xD92E | STAT_KLIMA_VORN_PRG_MAX_AC_EIN | Programm maximal Kühlen: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_AUC_EIN | 0xD930 | STAT_KLIMA_VORN_PRG_AUC_EIN | Automatische Umluft Control: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_UMLUFT_EIN | 0xD931 | STAT_KLIMA_VORN_PRG_UMLUFT_EIN | Programm Umluft: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_HHS_EIN | 0xD932 | STAT_KLIMA_VORN_PRG_HHS_EIN | Heckscheibenheizung: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_AC_EIN | 0xD934 | STAT_KLIMA_VORN_PRG_AC_EIN | Klimaprogramm: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_KLIMASTIL_MITTE | 0xD936 | STAT_KLIMA_VORN_PRG_KLIMASTIL_MITTE_WERT | Ausgabe der Soft-Intense-Einstellung Mitte in Stufen: 1 - 7 | Stufe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0xD939 | STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | Programm Standlüften: 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_GEBLAESELEISTUNG_WERT | 0xD93F | STAT_KLIMA_VORN_GEBLAESELEISTUNG_WERT | Gebläseleistung der Gebläseendstufe IHKA in %. | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLP_POS_DEFROST_WERT | 0xD941 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD941_D |
| KLP_POS_BELUEFTUNG_WERT | 0xD942 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD942_D |
| KLP_POS_FUSSRAUM_WERT | 0xD947 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD947_D |
| KLP_POS_SCHICHTUNG_WERT | 0xD949 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD949_D |
| KLP_POS_SCHICHTUNG_LI_WERT | 0xD94A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94A_D |
| KLP_POS_SCHICHTUNG_RE_WERT | 0xD94B | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94B_D |
| KLP_POS_UMLUFT_WERT | 0xD94D | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94D_D |
| KLP_POS_TEMP_LUFT_FOND_WERT | 0xD950 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD950_D |
| MOTOR_KALIBRIERLAUF | 0xD953 | - | Abfrage des aktuellen Status des Kalibrierlaufs der Klappenmotoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD953_D |
| SELBSTTEST_SCHRITTMOTORE | 0xD954 | STAT_SELBSTTEST_SCHRITTMOTORE_NR | Status Schrittmotorenselbsttests: 0 = nicht gestartet/nicht angefordert, 1 = Test läuft gerade, 2 = Test erfolgreich abgeschlossen, 3 = Test nicht erfolgreich abgeschlossen | 0-n | - | - | unsigned char | TAB_STATUS_SELBSTTEST | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_BELUEFTUNG_LINKS_WERT | 0xD957 | STAT_TEMP_BELUEFTUNG_LINKS_WERT | Temperatur Belüftungsklappe links Bei defektem oder abgesteckten Sensor wird der Wert 127 zurück geliefert | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_BELUEFTUNG_RECHTS_WERT | 0xD958 | STAT_TEMP_BELUEFTUNG_RECHTS_WERT | Temperatur Belüftungsklappe rechts Bei defektem oder abgesteckten Sensor wird der Wert 127 zurück geliefert | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | Gibt aus, ob ein Drucksensor für R134A verbaut ist: 0 = nicht vorhanden, 1 = vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | Wasserventil vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A_D |
| TEMP_VERDAMPFER_WERT | 0xD95C | STAT_TEMP_VERDAMPFER_WERT | Temperaturfühler Verdampfer Bei defektem oder abgesteckten Sensor wird der Wert 127 zurück geliefert | °C | - | High | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_KOMPRESSORFREIGABE | 0xD960 | STAT_BUS_IN_KOMPRESSORFREIGABE_EIN | Klimakompressorfreigabe von der Motorelektronik: 0 = nicht freigegeben, 1 = Freigabe erteilt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_SOLARSENSOR_WERT | 0xD962 | - | BUS-Signal Solarsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD962_D |
| BUS_IN_AUC_SENSOR_WERT | 0xD964 | STAT_BUS_IN_AUC_SENSOR_WERT | Belastungsstufe vom AUC-Sensor | Stufe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_BESCHLAGSENSOR_WERT | 0xD966 | STAT_BUS_IN_BESCHLAGSENSOR_WERT | PMW-Signal Beschlagssensor | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_KAELTEMITTELDRUCK_WERT | 0xD968 | STAT_BUS_IN_R134A_DRUCK_WERT | Kältemitteldruck für R134A | bar | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | signed int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 0: Beschlagsensor nicht vorhanden / codiert   1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FRONTSCHEIBENHEIZUNG | 0xD96F | - | Frontscheibenheizung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD96F_D | RES_0xD96F_D |
| KLIMA_TEMPERATUR_SOLLWERT | 0xD977 | - | Ausgabe der eingestellten Sollwert-Temperatur (links und rechts) der Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD977_D |
| STEUERN_EINZELADRESSIERUNG | 0xD978 | - | Adressvergabe an einzelnen Motor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD978_D | - |
| KLIMA_LIN_1_ADRESSEN | 0xD97B | - | Lesen aller ansprechbaren LIN-Adressen des LIN-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD97B_D |
| STEUERN_RESET_LIN | 0xD97C | - | Rücksetzen des LIN-Bus mit Wegschalten der LIN-Versorgungsspannung. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| KLAPPEN_VERSTELLBEREICH | 0xD980 | - | Auslesen des Verstellbereichs der einzelnen Klappen als Inkremente, die über den Eichlauf ermittelt werden konnten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD980_D |
| STEUERN_AUTOADR_KLAPPENMOTOREN | 0xD981 | - | Startet die Autoadressierung zur Vergabe der Motoradressen im System anhand der Reihenfolge der Anschlüsse am Kabelbaum. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| KLIMA_TEMPERATUR_MITTE_SOLLWERT | 0xD988 | STAT_KLIMA_SOLLTEMP_MITTE_WERT | Ausgabe der eingestellten Sollwert-Temperatur | °C | - | - | unsigned char | - | 1.0 | 2.0 | 0.0 | - | 22 | - | - |
| KLP_POS_MISCHLUFT_WERT | 0xD98A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98A_D |
| KLP_POS_ZENTRALANTRIEB_WERT | 0xD98B | - | Auslesen des Soll- und Ist-Werts des Motors für den Zentralantrieb mit Kulissenscheibe. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98B_D |
| KLP_POS_MISCHLUFT_LINKS_WERT | 0xD98C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98C_D |
| KLP_POS_MISCHLUFT_RECHTS_WERT | 0xD98E | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98E_D |
| MIKROSCHALTER_ZENTRALANTRIEB | 0xD98F | STAT_MIKROSCHALTER_ZENTRALANTRIEB_EIN | Ausgabe des Status des Mikroschalters am Zentralantrieb:  0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_BELUEFTUNG_WERT | 0xD990 | STAT_TEMP_BELUEFTUNG_WERT | Temperaturfühler Belüftung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_FUSSRAUM_WERT | 0xD991 | STAT_TEMP_FUSSRAUM_WERT | Temperaturfühler Fussraum | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_AUDIOBEDIENTEIL | 0xD995 | STAT_VORHANDEN_AUDIOBEDIENTEIL | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| POTI_SCHICHTUNG_MITTE_WERT | 0xD998 | STAT_POTI_SCHICHTUNG_MITTE_WERT | Potentiometer Schichtung Belüftung: 0 ... 100% | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MOT_POS_BEL_FUSS_LI_RE_WERT | 0xD99C | - | Auslesen der Soll- und Ist-Werte für den Zentralantrieb für Belüftung und Fussraum. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD99C_D |
| VARIANTE_AUDIOBEDIENTEIL | 0xD9A0 | STAT_VARIANTE_AUDIOBEDIENTEIL | Variante Audiobedienteil siehe Tabelle TAB_VARIANTE_AUDIOBEDIENTEIL | 0-n | - | - | unsigned char | TAB_VARIANTE_AUDIOBEDIENTEIL | - | - | - | - | 22 | - | - |
| BUS_OUT_KOMPRESSORKUPPLUNG_EIN | 0xD9A1 | STAT_BUS_OUT_KOMPRESSORKUPPLUNG_EIN | Signal für die Anforderung an die Kompressorkupplung 0 = Kupplung offen 1 = Kupplung geschlossen | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_EKMV | 0xD9A4 | STAT_VORHANDEN_EKMV | Elektrischer Kältemittelverdichter: siehe Tabelle TAB_KMV_HYBRID_GENERATION | 0-n | - | High | unsigned char | TAB_KMV_HYBRID_GENERATION | - | - | - | - | 22 | - | - |
| STEUERN_ZENTRALANTRIEB | 0xD9A6 | - | Ansteuerung von Zentralantrieben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD9A6_D | - |
| FREIGABE_KOMPRESSOREINLAUF | 0xD9A7 | - | Freigabe für Kompressoreinlauf | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD9A7_D | RES_0xD9A7_D |
| KLIMA_VORN_PRG_HFS | 0xD9A8 | STAT_KLIMA_VORN_PRG_HFS | Funktionszustand Frontscheibenheizung: 0 = AUS 1 = EIN | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| WAERMEPUMPE_SENSOREN | 0xD9AC | - | Sensoren der Wärmepumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9AC_D |
| WAERMEPUMPE_VENTILE | 0xD9AD | - | Ventile der Wärmepumpe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD9AD_D | RES_0xD9AD_D |
| VORHANDEN_EDH | 0xD9AE | STAT_VORHANDEN_EDH | 0x00 = eDH nicht vorhanden 0x01 = eDH vorhanden | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_WAERMEPUMPE | 0xD9AF | STAT_VORHANDEN_WAERMEPUMPE | 0x00 = Wärmepumpe nicht vorhanden 0x01 = Wärmepumpe vorhanden | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_FSH | 0xD9B1 | STAT_VORHANDEN_FSH | 0x00 = Frontscheibenheizung nicht vorhanden 0x01 = Frontscheibenheizung vorhanden | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| WAERMEPUMPE_ZWP | 0xD9DE | - | Zusatzwasserpumpe der Wärmepumpe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD9DE_D | RES_0xD9DE_D |
| WAERMEPUMPE_EINZELNE_VENTILE | 0xD9DF | - | Ansteuerung einzelner Ventile der Wärmepumpe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD9DF_D | - |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Spannungswert am Steuergerät an Klemme 30 (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Status Klemme R im Steuergerät: 0=AUS, 1=EIN | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Status Klemme 15 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_30B_EIN | 0xDB06 | STAT_STATUS_KLEMME_30B_EIN | Status Klemme 30B im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Status Klemme 50 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| HV_EDH_STECKVERBINDUNG | 0xDFC0 | STAT_HV_STECKER_EDH | Status Hochvolt-Steckverbindung: Siehe Tabelle TAB_HV_STECKVERBINDUNG | 0-n | - | High | unsigned char | TAB_HV_STECKVERBINDUNG | - | - | - | - | 22 | - | - |
| HV_EKMV_STECKVERBINDUNG | 0xDFC1 | STAT_HV_STECKER_EKMV | Status Hochvolt-Steckverbindung: Siehe Tabelle TAB_HV_STECKVERBINDUNG | 0-n | - | High | unsigned char | TAB_HV_STECKVERBINDUNG | - | - | - | - | 22 | - | - |
| UWB_CPD_DIAGINFO | 0x4001 | - | Umweltbedingungen zum HV-Batterie Kühlperformance | - | - | - | - | - | - | - | - | - | 2F | - | - |
| UWB_HKLUSV_DIAGINFO | 0x4002 | - | Diagnosezustand der Heizkreislaufumschaltventil. Unterscheidung klemmt offen / zu. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002_D |
| _ADC_EINGAENGE_WERT | 0x4010 | - | Return value of ADC converter for all analogue input: STAT_ADC_VERDAMPFER_WERT  for TEMP_SENS_VERD | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| _STAT_STANDHEIZUNG_WERT | 0x4011 | STAT_STANDHEIZUNG_WERT | Return the value of the parking-heater ECU input:  WAKESH | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _STANDHEIZUNG_AUSGANG | 0x4012 | - | Command the ECU output OUTPUT_SH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4012_D |
| _VALEO_ENABLE | 0x4018 | - | Enable all Valeo Diag Write jobs: _STEUERN_xx until reset | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4018_D | - |
| _VALEO_PCB_HW_NUMBER | 0x4019 | - | PCB / Electronic nomenclature index: industrial folder revision | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4019_D | RES_0x4019_D |
| _VALEO_PCB_PRODUCTION_DATA | 0x401A | - | Production date | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401A_D | RES_0x401A_D |
| _VALEO_PART_NUMBER | 0x401B | - | Valeo part number | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401B_D | RES_0x401B_D |
| _VALEO_PART_NUMBER_INDEX | 0x401C | - | Valeo part number index | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401C_D | RES_0x401C_D |
| _VALEO_SERIAL_NUMBER | 0x401D | - | serial number of the PCB to be set at 0at beginning of each day | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401D_D | RES_0x401D_D |
| _ICT_STEP_COUNTER | 0x401E | - | indicates if product passed ICT (In Circuit Tester) and functional tests successfully or not. At end of ICT, when product is successfully tested, write 0x01 in the step counter address. At end of Final Tester, when product is successfully tested, write 0x03 in the step counter address | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401E_D | RES_0x401E_D |
| _HWAP_ID | 0x401F | - | 1st Byte of HWAP ID | - | - | - | - | - | - | - | - | - | 2E | ARG_0x401F_D | - |
| _VALEO_LESEN_SPEICHER | 0x4020 | STAT_SPEICHER_BLOCK | SPEICHER BLOCK | 0-n | - | High | unsigned char | TAB_SPEICHER_BLOCK_TEST | - | - | - | - | 22 | - | - |
| _VALEO_LESEN_SCHREIBEN | 0x4021 | - | Write EERPOM values at block number | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4021_D | - |
| _HWAP_VERSION | 0x4023 | - | HWAP VERSION | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4023_D | - |

### TAB2_AC_LIN_SPANNUNG_CMD_AUSGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang aus |
| 0x01 | Ausgang ein |
| 0xFF | Wert ungültig |

### TAB2_AC_LIN_SPANNUNG_DEN_AUSGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang aus |
| 0x01 | Ausgang ein |

### TAB2_STANDHEIZUNG_AUSGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang aus |
| 0x01 | Ausgang ein |

### TAB_AKS_EKMV

| WERT | TEXT |
| --- | --- |
| 0x00 | kein aktiver Kurzschluss |
| 0x01 | aktiver Kurzschluss Low-Side |
| 0x02 | aktiver Kurzschluss High-Side |

### TAB_AUTOADR_ERROR

| WERT | TEXT |
| --- | --- |
| 0x01 | no error |
| 0x02 | by preparing the network for autoaddressing |
| 0x04 | by reseting the network after an autoadressing |
| 0x08 | by setting the actuators in service mode |
| 0x10 | by setting the actuators in normal mode |
| 0x20 | by addressing and programming the actuators |
| 0x40 | not used |
| 0x80 | unknown error occured |

### TAB_BETRIEBSSTATUS_EKMVGEN20

| WERT | TEXT |
| --- | --- |
| 0x0000 | eKMV aus |
| 0x0800 | eKMV ein |
| 0x1000 | eKMV in Degradation |
| 0x1800 | eKMV Stopp |
| 0x2000 | eKMV Shutdown |
| 0x2800 | eKMV im Aufstart |
| 0x3000 | eKMV Reset nicht möglich |
| 0x3800 | ungültig |

### TAB_BITMUSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | BITMUSTER_1 |
| 0x01 | BITMUSTER_2 |
| 0x02 | BITMUSTER_3 |
| 0x03 | BITMUSTER_4 |
| 0x04 | BITMUSTER_5 |
| 0x05 | BITMUSTER_6 |
| 0x06 | BITMUSTER_7 |
| 0x07 | BITMUSTER_8 |

### TAB_ELEKTRISCHER_ZUHEIZER

| WERT | TEXT |
| --- | --- |
| 0 | EINZELNER |
| 1 | LINKS |
| 2 | RECHTS |

### TAB_FBM_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_TASTEN |
| 0x01 | FBM_1 |
| 0x02 | FBM_2 |
| 0x03 | FBM_3 |
| 0x04 | FBM_4 |
| 0x05 | FBM_5 |
| 0x06 | FBM_6 |
| 0x07 | FBM_7 |
| 0x08 | FBM_8 |

### TAB_HV_STECKVERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | HV-Stecker nicht gesteckt |
| 0x01 | HV-Stecker gesteckt |
| 0x02 | HV-Stecker nicht verbaut |
| 0xFF | Ungültiger Wert |

### TAB_KAELTEMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | R134A |
| 0x01 | CO2 |

### TAB_KALIB_ERG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung NIO |
| 0x01 | Kalibrierung IO |
| 0x02 | Klappe nicht verbaut |

### TAB_KLAPPEN_VORN

| WERT | TEXT |
| --- | --- |
| 0x00 | ENTFROSTUNG |
| 0x01 | BEL_LI_AUSSEN |
| 0x02 | BEL_LI_MITTE |
| 0x03 | BEL_RE_MITTE |
| 0x04 | BEL_RE_AUSSEN |
| 0x05 | FUSS_LI |
| 0x06 | FUSS_RE |
| 0x07 | SCHICHT_LI |
| 0x08 | SCHICHT_RE |
| 0x09 | FL_STAU |
| 0x0A | UMLUFT |
| 0x0B | FUSS_FOND_LI |
| 0x0C | FUSS_FOND_RE |
| 0x0D | SCHICHT_FOND_LI |
| 0x0E | SCHICHT_FOND_RE |
| 0x05 | FUSS_GES_LI |
| 0x0E | SCHICHT_FOND |
| 0x08 | SCHICHTUNG |
| 0x05 | FUSSRAUM |
| 0x04 | BEL_RE |
| 0x04 | BELUEFTUNG |
| 0x01 | BEL_LI |
| 0x0E | TEMP_LUFTMENGE_FOND |
| 0x06 | FUSS_GES_RE |
| 0x10 | MISCH_LI |
| 0x11 | MISCH_RE |
| 0x10 | MISCHLUFT |

### TAB_KLIMAVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | 2-zonig |
| 0x01 | 2,5-zonig |
| 0x02 | 4-zonig |
| 0x03 | 1-zonig |
| 0x04 | 1-zonig IHKR |
| 0x05 | 1-zonig IHKA |
| 0x06 | 1-zonige IHKS |
| 0x07 | 1-zonige IHS ohne Kompressor |
| 0xFF | ungültig |

### TAB_KLIMA_LEDS_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_LEDS_AUS |
| 0x01 | ALLE_LEDS_AN |

### TAB_KLIMA_PRODUKTLINIE

| WERT | TEXT |
| --- | --- |
| 0x00 | LK |
| 0x01 | LI-MCV |
| 0x02 | LI-VED |
| 0x03 | LU-MINI |
| 0x04 | LU-BMW |
| 0xFF | Ungültiger Wert |

### TAB_KMV_HYBRID_GENERATION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | Kältemittelverdichter Gen1.5 vorhanden |
| 0x02 | Kältemittelverdichter Gen2.0 vorhanden |
| 0x03 | Kältemittelverdichter Gen3.0 vorhanden |
| 0xFF | Ungültiger Wert |

### TAB_LAUFRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | UHRZEIGERSINN |
| 0x01 | GEGEN_UHRZEIGERSINN |
| 0xFF | DEFAULT |

### TAB_LEDSTATUS_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | LED aus |
| 0x01 | LED an |
| 0x02 | LED nicht verbaut |
| 0xFF | Ungültig |

### TAB_LUFTVERTEILUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Null |
| 0x01 | Unten |
| 0x02 | Mitte |
| 0x03 | Mitte und Unten |
| 0x04 | Oben |
| 0x05 | Oben und Unten (nur Fahrer) |
| 0x06 | Mitte und Oben |
| 0x07 | Oben und Mitte und Unten |
| 0x08 | Automatik |
| 0x20 | Individual |
| 0x28 | Sonderprogramm |
| 0x29 | Max. AC |
| 0x2A | Entfrostung |
| 0x2B | Aus |
| 0x3F | Ungültig (Basis) |

### TAB_NOTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | AKTIVIERT |
| 0x01 | DEAKTIVIERT |
| 0xFF | DEFAULT |

### TAB_NOTLAUF_ENDPOS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZU_NIEDRIGEN_SCHRITTZAHLEN |
| 0x01 | ZU_HOHEN_SCHRITTZAHLEN |
| 0xFF | DEFAULT |

### TAB_SH_SL_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED an |
| 0x01 | Eine LED an |
| 0x02 | Zwei LEDs an |
| 0x03 | Drei LEDs an |
| 0xFF | Keine LEDs angeschlossen |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | SH_L_VORN |
| 0x02 | SH_R_VORN |

### TAB_SOLLTEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | TEMP_LINKS |
| 0x02 | TEMP_RECHTS |
| 0x03 | TEMP_MITTE |

### TAB_SPEICHER_BLOCK_TEST

| WERT | TEXT |
| --- | --- |
| 0 | test 0 |
| 1 | test 1 |
| 0xFF | Wert ungültig |

### TAB_STATUS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | in diesem Klemmenzyklus noch nicht gestartet |
| 0x01 | Kalibrierlauf läuft gerade |
| 0x02 | Kalibrierlauf abgeschlossen |

### TAB_STATUS_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gestartet/nicht angefordert |
| 0x01 | Test läuft gerade |
| 0x02 | Test erfolgreich abgeschlossen |
| 0x03 | Test nicht erfolgreich abgeschlossen |

### TAB_TASTENSTATUS_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |
| 0x02 | nicht verbaut |
| 0xFF | Ungültig |

### TAB_TASTEN_AUDIO

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_TASTEN |
| 0x01 | MODE |
| 0x02 | EJECT |
| 0x03 | SUCHLAUF_LI |
| 0x04 | SUCHLAUF_RE |
| 0x05 | EIN_AUS |
| 0x06 | TP |

### TAB_TASTEN_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | NORMALBETRIEB |
| 0x01 | AUC_UMLUFT |
| 0x02 | HHS |
| 0x03 | ENTFROSTUNG |
| 0x04 | KLIMA |
| 0x05 | MAX_AC |
| 0x06 | ALL |
| 0x07 | KLIMA_OFF |
| 0x08 | REST |
| 0x09 | AUTO |
| 0x0A | AUTO_LI |
| 0x0B | AUTO_RE |
| 0x0C | WIPPE_PLUS |
| 0x0D | WIPPE_MINUS |
| 0x0E | WIPPE_PLUS_LI |
| 0x0F | WIPPE_PLUS_RE |
| 0x10 | WIPPE_MINUS_LI |
| 0x11 | WIPPE_MINUS_RE |
| 0x12 | LV_TOGGLE_MITTE |
| 0x13 | LV_TOGGLE_LINKS |
| 0x14 | LV_TOGGLE_RECHTS |
| 0x15 | LV_ENTFROSTUNG |
| 0x16 | LV_BELUEFTUNG |
| 0x17 | LV_FUSSRAUM |
| 0x18 | LV_BF_BELUEFTUNG |
| 0x19 | LV_BF_FUSSRAUM |
| 0x1A | HFS |
| 0x1B | DUMMY |
| 0x1C | DUMMY |
| 0xFF | Ungueltig |

### TAB_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Celsius |
| 0x01 | Fahrenheit |

### TAB_VARIANTE_AUDIOBEDIENTEIL

| WERT | TEXT |
| --- | --- |
| 0x00 | ohne FBM, TP |
| 0x01 | mit FBM, TP |
| 0x02 | ohne FBM, FM/AM |
| 0x03 | mit FBM, FM/AM |
| 0x06 | mit FBM, TP nur LU BMW |
| 0x07 | mit FBM, FM/AM nur LU BMW |
| 0xFF | ungültiger Wert |

### TAB_WP_VENTILE

| WERT | TEXT |
| --- | --- |
| 0x01 | ABSPERRVENTIL_1 |
| 0x02 | ABSPERRVENTIL_2 |
| 0x03 | ABSPERRVENTIL_3 |
| 0x04 | ABSPERRVENTIL_4 |
| 0x05 | EXPANSIONSVENTIL_1 |
| 0x06 | EXPANSIONSVENTIL_2 |
| 0x07 | EXPANSIONSVENTIL_3 |

### TAB_ZENTRALANTRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | ZENTRALANTRIEB |
| 0x01 | BEL_FUSS_LINKS |
| 0x02 | BEL_FUSS_RECHTS |

### TAB_0X4001

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_0X4002

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0002 | 0x0003 |
