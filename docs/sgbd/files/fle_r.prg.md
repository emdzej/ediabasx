# fle_r.prg

## General

|  |  |
| --- | --- |
| File | fle_r.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 76 |
| Origin | BMW EK-532 Berwanger |
| Revision | 1.400 |
| Author | Automotive_Lighting ALRT/EEG-CA Martin_BRAUN |
| ECU Comment | FLE_R - Front Licht Elektronik Rechts |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Frontlichtelektronik rechts |  |  |
| ORIGIN | string | BMW EK-532 Berwanger |  |  |
| REVISION | string | 1.400 |  |  |
| AUTHOR | string | Automotive_Lighting ALRT/EEG-CA Martin_BRAUN |  |  |
| COMMENT | string | FLE_R - Front Licht Elektronik Rechts |  |  |
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

### _SYSTEMSUPPLIER_DIAGNOSE_MODE

_SYSTEMSUPPLIER_DIAGNOSE_MODE

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

### ARG_0X3000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT_1_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert AL 1 |
| STAT_ABBLENDLICHT_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert AL 1 |
| STAT_ABBLENDLICHT_2_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert AL 2 |
| STAT_ABBLENDLICHT_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert AL 2 |
| STAT_LED_3_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 3 |
| STAT_LED_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 3 |
| STAT_LED_4_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 4 |
| STAT_LED_4_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 4 |
| STAT_LED_5_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 5 |
| STAT_LED_5_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 5 |
| STAT_LED_6_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 6 |
| STAT_LED_6_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 6 |
| STAT_LED_7_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 7 |
| STAT_LED_7_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 7 |

### ARG_0XA540_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_UEFTER | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM für Lüfter in Prozent |

### ARG_0XA543_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_LED_LEUCHTMITTEL | - | - | - | - | - | Auswahl des LED Leuchtmittel |

### ARG_0XA545_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | + | - | ° | high | int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | Vorgabe Winkel, Wertebereich -25,0° ¿ 25,0 ° |
| GESCHWINDIGKEIT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | Wertebereich: 0...7 |

### ARG_0XD633_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1...löschen des Statistikzählers 0...keine Aktion |

### ARG_0XD634_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1...löscht Betriebsstundenzähler 0...keine Aktion |
| LEUCHTMITTEL | 0-n | high | unsigned char | - | TAB_FLE_LEUCHTMITTEL | - | - | - | - | - | Auswahl des FLE Leuchtmittels |

### ARG_0XD63C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1...Zähler löschen |

### ARG_0XD63D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1...Betriebsdauer zurücksetzen |

### ARG_0XFD40_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERDATENBLOCK_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Scheinwerferdatenblock |

### BF_SCHEINWERFERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERHERSTELLER | 0-n | high | unsigned char | 0x0F | SCHEINWERFERHERSTELLER | - | - | - | Scheinwerferhersteller Bit 1-4 |
| STAT_SCHEINWERFERVARIANTE | 0-n | high | unsigned char | 0xF0 | SCHEINWERFERVARIANTE | - | - | - | Scheinwerfervariante Bit 5-8 |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FARZEUGVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | F01-F04 (+LCI) |
| 0x01 | F07 (+LCI) |
| 0x02 | F10/F11/F18 (+LCI) |
| 0x03 | F12/F13 |
| 0x04 | F25 |
| 0x05 | RR4/RR5/RR6 |
| 0x06 | F20/F21 |
| 0x07 | F22/F23 |
| 0x08 | F30/F31/F35 |
| 0x09 | F32/F33/F36 |
| 0x0A | RR01 |
| 0x10 | I01 |
| 0x11 | I12 |
| 0x18 | F56 |
| 0x19 | F45/F46 |
| 0x1B | F47 |
| 0x1C | F48 |
| 0x1D | F54 |
| 0x1E | F55 |
| 0x1F | F57 |
| 0x20 | F15/F16 |
| 0x30 | F52 |
| 0x31 | F60 |
| 0x32 | F39 |
| 0x40 | G11/G12 |
| 0x41 | G30/G31 |
| 0x60 | M13 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | ja |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x024400 | Energiesparmode aktiv | 0 |
| 0x024408 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x024409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02440A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02440B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02440C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF44 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805B00 | Binning 5: Fehler | 0 |
| 0x805B01 | NTC 5: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805B02 | Abbiegelicht / Autobahnlicht: Kurzschluss nach Masse | 0 |
| 0x805B03 | Abbiegelicht / Autobahnlicht: Kurzschluss nach Plus | 0 |
| 0x805B04 | NTC 5: Kurzschluss Temperatursensor | 0 |
| 0x805B06 | Abbiegelicht / Autobahnlicht: Strangspannung außerhalb Toleranz | 0 |
| 0x805B08 | Abbiegelicht / Autobahnlicht: Strangstrom außerhalb Toleranz | 0 |
| 0x805B09 | Abbiegelicht / Autobahnlicht: Strangunterbrechung | 0 |
| 0x805B0A | Binning 1: Fehler | 0 |
| 0x805B0C | Abblendlicht 1: Kurzschluss nach Masse | 0 |
| 0x805B0D | Abblendlicht 1: Kurzschluss nach Plus | 0 |
| 0x805B0E | NTC 1: Kurzschluss Temperatursensor | 0 |
| 0x805B10 | NTC 1: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805B11 | Binning 4: Fehler | 0 |
| 0x805B12 | Abblendlicht 1: Strangspannung außerhalb Toleranz | 0 |
| 0x805B13 | Abblendlicht 1: Strangstrom außerhalb Toleranz | 0 |
| 0x805B14 | NTC 4: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805B15 | Abblendlicht 1: Strangunterbrechung | 0 |
| 0x805B16 | Abblendlicht 1: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805B17 | Binning 2: Fehler | 0 |
| 0x805B19 | Abblendlicht 2: Kurzschluss nach Masse | 0 |
| 0x805B1A | Abblendlicht 2: Kurzschluss nach Plus | 0 |
| 0x805B1B | NTC 2: Kurzschluss Temperatursensor | 0 |
| 0x805B1C | NTC 4: Kurzschluss Temperatursensor | 0 |
| 0x805B1D | NTC 2: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805B1E | Binning 7: Fehler | 0 |
| 0x805B1F | Abblendlicht 2: Strangspannung außerhalb Toleranz | 0 |
| 0x805B20 | Binning 6: Fehler | 0 |
| 0x805B21 | Abblendlicht 2: Strangstrom außerhalb Toleranz | 0 |
| 0x805B22 | Abblendlicht 2: Strangunterbrechung | 0 |
| 0x805B23 | Abblendlicht 2: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805B24 | Binning 3: Fehler | 0 |
| 0x805B25 | Zusatzfernlicht Laser: Kurzschluss nach Masse | 0 |
| 0x805B26 | Fernlicht: Kurzschluss nach Masse | 0 |
| 0x805B27 | Fernlicht: Kurzschluss nach Plus | 0 |
| 0x805B28 | NTC 3: Kurzschluss Temperatursensor | 0 |
| 0x805B29 | Abblendlicht - Aktivierung wegen unplausibler Eingangssignale | 1 |
| 0x805B2A | NTC 3: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805B2B | Fernlicht: Strangspannung außerhalb Toleranz | 0 |
| 0x805B2C | Zusatzfernlicht Laser: Strangstrom außerhalb Toleranz | 0 |
| 0x805B2D | Fernlicht: Strangstrom außerhalb Toleranz | 0 |
| 0x805B2E | Fernlicht: Strangunterbrechung | 0 |
| 0x805B2F | Fernlicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805B30 | Zusatzfernlicht Laser: Strangspannung außerhalb Toleranz | 0 |
| 0x805B31 | Lüfter: Kurzschluss | 0 |
| 0x805B32 | Lüfter: Leitungsunterbrechung | 0 |
| 0x805B34 | Interner Steuergerätefehler | 0 |
| 0x805B35 | Steuergerät: Temperatursensor defekt | 0 |
| 0x805B36 | Verbauorterkennung unplausibel | 0 |
| 0x805B37 | Unterspannung erkannt | 1 |
| 0x805B38 | Überspannung erkannt | 1 |
| 0x805B39 | Abbiegelicht / Autobahnlicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805B3A | Abblendlicht: Funktion defekt | 0 |
| 0x805B3E | Variable Lichtverteilung: Funktion defekt | 0 |
| 0x805B41 | Stellmotor Leuchtweitenregulierung: Treiber defekt | 0 |
| 0x805BA0 | Zusatzfernlicht Laser: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805BA1 | Zusatzfernlicht Laser: Strangunterbrechung | 0 |
| 0x805BA2 | Zusatzfernlicht Laser: Kurzschluss nach Plus | 0 |
| 0x805BA3 | ZFL-Sensor 2 ausgelöst oder defekt | 0 |
| 0x805BA4 | ZFL-Sensor 1 ausgelöst oder defekt | 0 |
| 0x805BA5 | Inszenierungslicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805BA6 | Inszenierungslicht: Strangunterbrechung | 0 |
| 0x805BA7 | Inszenierungslicht: Strangstrom außerhalb Toleranz | 0 |
| 0x805BA8 | Inszenierungslicht: Strangspannung außerhalb Toleranz | 0 |
| 0x805BA9 | Inszenierungslicht: Kurzschluss nach Plus | 0 |
| 0x805BAA | Inszenierungslicht: Kurzschluss nach Masse | 0 |
| 0x805E03 | Akzentleuchte: Kurzschluss nach Masse | 0 |
| 0x805E04 | Akzentleuchte: Kurzschluss nach Plus | 0 |
| 0x805E0B | Akzentleuchte: Strangunterbrechung | 0 |
| 0x805E0C | Akzentleuchte: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805E23 | Seitenmarkierungsleuchte: Kurzschluss nach Masse | 0 |
| 0x805E24 | Seitenmarkierungsleuchte: Kurzschluss nach Plus | 0 |
| 0x805E2B | Seitenmarkierungsleuchte: Strangunterbrechung | 0 |
| 0x805E2C | Seitenmarkierungsleuchte: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805E32 | Tagfahrlicht: Funktion defekt | 0 |
| 0x805E34 | Tagfahrlicht: Kurzschluss nach Masse | 0 |
| 0x805E35 | Tagfahrlicht: Kurzschluss nach Plus | 0 |
| 0x805E3C | Tagfahrlicht: Strangunterbrechung | 0 |
| 0x805E3D | Tagfahrlicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805E53 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 1 | 0 |
| 0x805E59 | Stellmotor Leuchtweitenregulierung: Leitungsunterbrechung an Wicklung 1 | 0 |
| 0x805E5B | Stellmotor Leuchtweitenregulierung: Übertemperatur (Abschaltung) | 1 |
| 0x805E5C | Akzentleuchte: Strangspannung außerhalb Toleranz | 0 |
| 0x805E5D | Akzentleuchte: Strangstrom außerhalb Toleranz | 0 |
| 0x805E5E | Seitenmarkierungsleuchte: Strangstrom außerhalb Toleranz | 0 |
| 0x805E5F | Seitenmarkierungsleuchte: Strangspannung außerhalb Toleranz | 0 |
| 0x805E60 | Tagfahrlicht: Strangspannung außerhalb Toleranz | 0 |
| 0x805E61 | DWA Blinken: Funktion  defekt | 0 |
| 0x805E62 | Abbiegelicht: Funktion defekt | 0 |
| 0x805E63 | Fernlicht/Lichthupe: Funktion  defekt | 0 |
| 0x805E64 | Fernlichtblinken: Funktion defekt | 0 |
| 0x805E65 | Follow Me Home: Funktion  defekt | 0 |
| 0x805E66 | Panik Blinken: Funktion  defekt | 0 |
| 0x805E67 | Parklicht: Funktion defekt | 0 |
| 0x805E69 | Remote Light: Funktion  defekt | 0 |
| 0x805E6B | Standlicht: Funktion defekt | 0 |
| 0x805E6C | Überfallalarm: Funktion defekt | 0 |
| 0x805E6E | Welcome Light: Funktion defekt | 0 |
| 0x805E6F | Tagfahrlicht: Strangstrom außerhalb Toleranz | 0 |
| 0xDA050B | B2-CAN Physikalischer Busfehler | 0 |
| 0xDA0514 | B2-CAN Control Module Bus OFF | 0 |
| 0xDA0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xDA0C00 | LIN:Allgemeiner Fehler Signal-Timeout | 0 |
| 0xDA1400 | Botschaft (Blinken): Timeout | 1 |
| 0xDA1401 | Botschaft (Steuerung_Licht_außen 2): Timeout | 1 |
| 0xDA1402 | Botschaft (Steuerung_Licht_außen): Timeout | 1 |
| 0xDA2C00 | Signal (Status_Blinken): ungültig | 1 |
| 0xDA2C01 | Signal (Alive_Steuerung_Licht_Außen_2): ungültig | 1 |
| 0xDA2C02 | Signal (CRC_Steuerung_Licht_Außen_2): ungültig | 1 |
| 0xDA2C03 | Signal (Steuerung_Funktion_Abbiegelicht_rechts): ungültig | 1 |
| 0xDA2C04 | Signal (Steuerung_Funktion_Abblendlicht_rechts): ungültig | 1 |
| 0xDA2C05 | Signal (Steuerung_Lichtverteilung_Fahrlicht_rechts): ungültig | 1 |
| 0xDA2C06 | Signal (Steuerung_Modus_Funktion_Sonderblinken): ungültig | 1 |
| 0xDA2C07 | Signal (Steuerung_Phase_Funktion_Sonderblinken): ungültig | 1 |
| 0xDA2C08 | Signal (Steuerung_Funktion_Begrüßungslicht): ungültig | 1 |
| 0xDA2C09 | Signal (Steuerung_Funktion_Heimleuchten): ungültig | 1 |
| 0xDA2C0A | Signal (Steuerung_Funktion_Parklicht): ungültig | 1 |
| 0xDA2C0B | Signal (Steuerung_Funktion_Remote-Light): ungültig | 1 |
| 0xDA2C0C | Signal (Steuerung_Funktion_Standlicht): ungültig | 1 |
| 0xDA2C0D | Signal (Steuerung_Funktion_Tagfahrlicht): ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | AUSSENTEMPARATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | SPANNUNG_KLEMME_30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | ja |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x440101 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x440102 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x440106 | Steuergerät: Übertemperatur 1 | 0 |
| 0x440107 | LED Ausgang 5: Übertemperatur 1 (Degradation) | 1 |
| 0x440108 | Abblendlicht 1: Übertemperatur 1 (Degradation) | 1 |
| 0x440109 | Abblendlicht 2: Übertemperatur 1 (Degradation) | 1 |
| 0x44010A | LED Ausgang 3: Übertemperatur 1 (Degradation) | 1 |
| 0x44010B | Reset | 0 |
| 0x44010C | Watchdog hat Reset ausgelöst | 0 |
| 0x44010D | Stellmotor Leuchtweitenregulierung: Übertemperatur (Warnung) | 1 |
| 0x44010E | Stellmotor Leuchtweitenregulierung: Referenzierung wegen Unterspannung abgebrochen | 1 |
| 0x44010F | Stellmotor Leuchtweitenregulierung: Bewegung wegen Unterspannung abgebrochen | 1 |
| 0x440110 | Stellmotor Leuchtweitenregulierung: Bewegung wegen Überspannung abgebrochen | 1 |
| 0x440111 | Modus für Watchdog Manager kann nicht gesetzt werden | 0 |
| 0x440112 | Modus für CAN-Transceiver kann nicht gesetzt werden | 0 |
| 0x440113 | CAN State-Manager Zustandsübergänge fehlgeschlagen | 0 |
| 0x440114 | Unerwarteter NM-Timeout (außerhalb Ready Sleep State) | 0 |
| 0x440115 | NM Initialisierung fehlgeschlagen | 0 |
| 0x440116 | Transmit-Error im NM | 0 |
| 0x440117 | NVM-Zugriff fehlgeschlagen | 0 |
| 0x440118 | Korrupte NVM-Data erkannt | 0 |
| 0x440119 | Inkonsistente Mode-Einstellungen bei Watchdog Zustandswechsel erkannt | 0 |
| 0x44011A | CRC-Checksum Fehler | 0 |
| 0x44011B | Interner Fehler im CSM erkannt | 0 |
| 0x44011D | HardReset ausgeführt | 1 |
| 0x44011E | RAM-Hash-Fehler erkannt | 0 |
| 0x44011F | Fehler bei NVM-Lesezugriff erkannt | 0 |
| 0x440120 | Fehler bei NVM-Schreibzugriff erkannt | 0 |
| 0x440121 | Senden einer I-PDU fehlgeschlagen | 0 |
| 0x440122 | Fehlerhafter Quarz-Betrieb des Controllers | 0 |
| 0x440124 | Data Flash Format Fehler erkannt | 0 |
| 0x440125 | Fehler des Data Flash bei Startup erkannt | 0 |
| 0x440126 | Unerlaubter Schreibzugriff im MCU-Treiber | 0 |
| 0x440127 | Fehler bei Schreibzugriff im MCU-Treiber während der Shut-Down-Phase | 0 |
| 0x440128 | Unerlaubter Schreibzugriff auf Prozessorregister | 0 |
| 0x440129 | Überlauf SPI-Empfangspuffer | 0 |
| 0x44012A | LED Ausgang 7: Übertemperatur 1 (Degradation) | 1 |
| 0x44012B | LED Ausgang 6: Übertemperatur 1 (Degradation) | 1 |
| 0x44012C | LED Ausgang 4: Übertemperatur 1 (Degradation) | 1 |
| 0x44012D | ChargePump nicht abschaltbar | 0 |
| 0x44012E | Controller nicht abschaltbar | 0 |
| 0x44012F | Interner SG-Konfigurationsfehler | 0 |
| 0x440130 | Fehler im PWM-Treiber | 0 |
| 0x440131 | Interner CRC-Fehler der Datensicherung für sicherheitsrelevante Steuersignale | 0 |
| 0x440140 | Power-Down-Befehl 11 04 | 1 |
| 0x440200 | LED Ausgang 3: Kurzschluss nach Masse | 0 |
| 0x440201 | LED Ausgang 3: Kurzschluss nach Plus | 0 |
| 0x440202 | LED Ausgang 3: Strangunterbrechung | 0 |
| 0x440203 | LED Ausgang 3: Strangspannung außerhalb Toleranz | 0 |
| 0x440204 | LED Ausgang 3: Strangsstrom außerhalb Toleranz | 0 |
| 0x440205 | LED Ausgang 3: Übertemperatur 2 (Abschaltung) | 1 |
| 0x440206 | LED Ausgang 4: Kurzschluss nach Masse | 0 |
| 0x440207 | LED Ausgang 4: Kurzschluss nach Plus | 0 |
| 0x440208 | LED Ausgang 4: Strangunterbrechung | 0 |
| 0x440209 | LED Ausgang 4: Strangspannung außerhalb Toleranz | 0 |
| 0x44020A | LED Ausgang 4: Strangsstrom außerhalb Toleranz | 0 |
| 0x44020B | LED Ausgang 4: Übertemperatur 2 (Abschaltung) | 1 |
| 0x44020C | LED Ausgang 5: Kurzschluss nach Masse | 0 |
| 0x44020D | LED Ausgang 5: Kurzschluss nach Plus | 0 |
| 0x44020E | LED Ausgang 5: Strangunterbrechung | 0 |
| 0x44020F | LED Ausgang 5: Strangspannung außerhalb Toleranz | 0 |
| 0x440210 | LED Ausgang 5: Strangsstrom außerhalb Toleranz | 0 |
| 0x440211 | LED Ausgang 5: Übertemperatur 2 (Abschaltung) | 1 |
| 0x440212 | LED Ausgang 6: Kurzschluss nach Masse | 0 |
| 0x440213 | LED Ausgang 6: Kurzschluss nach Plus | 0 |
| 0x440214 | LED Ausgang 6: Strangunterbrechung | 0 |
| 0x440215 | LED Ausgang 6: Strangspannung außerhalb Toleranz | 0 |
| 0x440216 | LED Ausgang 6: Strangsstrom außerhalb Toleranz | 0 |
| 0x440217 | LED Ausgang 6: Übertemperatur 2 (Abschaltung) | 1 |
| 0x440218 | LED Ausgang 7: Kurzschluss nach Masse | 0 |
| 0x440219 | LED Ausgang 7: Kurzschluss nach Plus | 0 |
| 0x44021A | LED Ausgang 7: Strangunterbrechung | 0 |
| 0x44021B | LED Ausgang 7: Strangspannung außerhalb Toleranz | 0 |
| 0x44021C | LED Ausgang 7: Strangsstrom außerhalb Toleranz | 0 |
| 0x44021D | LED Ausgang 7: Übertemperatur 2 (Abschaltung) | 1 |
| 0xDA1500 | Botschaft (Fahrgestellnummer): Timeout | 1 |
| 0xDA1501 | Botschaft (Klemmen): Timeout | 1 |
| 0xDA1502 | Botschaft (A_Temp): Timeout | 1 |
| 0xDA1503 | Botschaft (V_Veh): Timeout | 1 |
| 0xDA1504 | Botschaft (St_Op_Lp_Ex): Timeout | 1 |
| 0xDA1505 | Botschaft (KmStand): Timeout | 1 |
| 0xDA1506 | Botschaft (Ctr_Lp_Ex2_Info): Timeout | 1 |
| 0xDA1507 | Botschaft (Fahrzeugzustand): Timeout | 1 |
| 0xDA1508 | Botschaft (Relativzeit): Timeout | 1 |
| 0xDA2D00 | Signal (Nummer_Fahrgestell_1): ungültig | 1 |
| 0xDA2D01 | Signal (Nummer_Fahrgestell_2): ungültig | 1 |
| 0xDA2D02 | Signal (Nummer_Fahrgestell_3): ungültig | 1 |
| 0xDA2D03 | Signal (Nummer_Fahrgestell_4): ungültig | 1 |
| 0xDA2D04 | Signal (Nummer_Fahrgestell_5): ungültig | 1 |
| 0xDA2D05 | Signal (Nummer_Fahrgestell_6): ungültig | 1 |
| 0xDA2D06 | Signal (Nummer_Fahrgestell_7): ungültig | 1 |
| 0xDA2D07 | Signal (Temp_Ex): ungültig | 1 |
| 0xDA2D08 | Signal (V_Veh_Cog): ungültig | 1 |
| 0xDA2D09 | Signal (St_Lp_Sw): ungültig | 1 |
| 0xDA2D0A | Signal (St_Kl): ungültig | 1 |
| 0xDA2D0B | Signal (Crc_Kl, Alive_Kl): ungültig | 1 |
| 0xDA2D0C | Signal (Crc_V_Veh, Alive_V_Veh): ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | AUSSENTEMPARATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | SPANNUNG_KLEMME_30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X3000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT_1_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert AL 1 |
| STAT_ABBLENDLICHT_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert AL 1 |
| STAT_ABBLENDLICHT_2_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert AL 2 |
| STAT_ABBLENDLICHT_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert AL 2 |
| STAT_LED_3_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 3 |
| STAT_LED_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 3 |
| STAT_LED_4_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 4 |
| STAT_LED_4_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 4 |
| STAT_LED_5_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 5 |
| STAT_LED_5_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 5 |
| STAT_LED_6_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 6 |
| STAT_LED_6_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 6 |
| STAT_LED_7_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 7 |
| STAT_LED_7_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 7 |
| STAT_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Prozessstatus: 1...aktiv 0...nicht aktiv |

### RES_0XA540_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1...ein 0...aus |

### RES_0XA541_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZLAUF_ERGEBNIS | - | - | + | 0-n | high | unsigned char | - | TAB_LWR_REFERENZLAUF | - | - | - | Ergebnisse TAB_LWR_REFERENZLAUF |

### RES_0XA542_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKTIONSTEST_LWR_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_ABBLENDLICHT_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_ABBLENDLICHT_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_4_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_5_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_6_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_7_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_TEMPERATURSENSOREN_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LUEFTER_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LR_ERKENNUNG_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |

### RES_0XA543_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEUCHTMITTEL_FLE | - | - | + | 0-n | high | unsigned char | - | TAB_LED_LEUCHTMITTEL | - | - | - | Resulttabelle LED Leuchtmittel |
| STAT_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1...aktiv 0...nicht aktiv |

### RES_0XA545_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_WERT | - | - | + | ° | high | int | - | - | 1.0 | 10.0 | 0.0 | Position LWR in Grad |
| STAT_LWR_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_POS_LWR | - | - | - | Job Status |

### RES_0XA5A7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKTIONSTEST_LASER_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |

### RES_0XD630_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 1 |
| STAT_SENSOR_2_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 2 |
| STAT_SENSOR_3_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 3 |
| STAT_SENSOR_4_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 4 |
| STAT_SENSOR_5_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 5 |
| STAT_SENSOR_6_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 6 |
| STAT_ABBLENDLICHT_1_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp AL 1 |
| STAT_ABBLENDLICHT_2_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp AL 2 |
| STAT_TEMP_LEUCHTMITTEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |

### RES_0XD631_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT_1_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert AL 1 |
| STAT_ABBLENDLICHT_1_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert AL 1 |
| STAT_ABBLENDLICHT_2_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert AL 2 |
| STAT_ABBLENDLICHT_2_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert AL 2 |
| STAT_LED_3_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 3 |
| STAT_LED_3_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 3 |
| STAT_LED_4_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 4 |
| STAT_LED_4_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 4 |
| STAT_LED_5_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 5 |
| STAT_LED_5_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 5 |
| STAT_LED_6_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 6 |
| STAT_LED_6_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 6 |
| STAT_LED_7_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 7 |
| STAT_LED_7_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 7 |

### RES_0XD632_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 1 T1 |
| STAT_SENSOR_1_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 1 T2 |
| STAT_SENSOR_1_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 1 T3 |
| STAT_SENSOR_1_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 1 T4 |
| STAT_SENSOR_1_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 1 T5 |
| STAT_SENSOR_1_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 1 T6 |
| STAT_SENSOR_2_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 2 T1 |
| STAT_SENSOR_2_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 2 T2 |
| STAT_SENSOR_2_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 2 T3 |
| STAT_SENSOR_2_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 2 T4 |
| STAT_SENSOR_2_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 2 T5 |
| STAT_SENSOR_2_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 2 T6 |
| STAT_SENSOR_3_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 3 T1 |
| STAT_SENSOR_3_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 3 T2 |
| STAT_SENSOR_3_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 3 T3 |
| STAT_SENSOR_3_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 3 T4 |
| STAT_SENSOR_3_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 3 T5 |
| STAT_SENSOR_3_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 3 T6 |
| STAT_SENSOR_4_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 4 T1 |
| STAT_SENSOR_4_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 4 T2 |
| STAT_SENSOR_4_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 4 T3 |
| STAT_SENSOR_4_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 4 T4 |
| STAT_SENSOR_4_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 4 T5 |
| STAT_SENSOR_4_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 4 T6 |
| STAT_SENSOR_5_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 5 T1 |
| STAT_SENSOR_5_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 5 T2 |
| STAT_SENSOR_5_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 5 T3 |
| STAT_SENSOR_5_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 5 T4 |
| STAT_SENSOR_5_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 5 T5 |
| STAT_SENSOR_5_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 5 T6 |
| STAT_SENSOR_6_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 6 T1 |
| STAT_SENSOR_6_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 6 T2 |
| STAT_SENSOR_6_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 6 T3 |
| STAT_SENSOR_6_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 6 T4 |
| STAT_SENSOR_6_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 6 T5 |
| STAT_SENSOR_6_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 6 T6 |

### RES_0XD634_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT_1_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer AL |
| STAT_ABBLENDLICHT_2_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer AL |
| STAT_LED_3_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 3 |
| STAT_LED_4_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 4 |
| STAT_LED_5_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 5 |
| STAT_LED_6_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 6 |
| STAT_LED_7_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 7 |
| STAT_LUEFTER_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer Lüfter |
| STAT_FLE_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer FLE |

### RES_0XD635_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL_30_ISENSE_WERT | mA | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Stromwert Kl 30 |
| STAT_KL_30_USENSE_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung Kl 30 |

### RES_0XD636_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIEFTEMPERATUR_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 1...aktiv 0...nicht aktiv |
| STAT_HOCHTEMPERATUR_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 1...aktiv 0...nicht aktiv |

### RES_0XD638_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BINNING_1_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_1_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_2_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_2_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_3_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_3_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_4_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_4_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_5_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_5_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_6_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_6_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_7_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_7_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |

### RES_0XD639_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_VERSORGUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannnung |
| STAT_LUEFTER_DIAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ? |
| STAT_LUEFTER_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert |

### RES_0XD63A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_LED_2_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_LED_3_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_LED_4_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_LED_5_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_LED_6_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_LED_7_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | 0 nicht verbaut,  1 Abblendlicht1,  2 Abblendlicht2,  3 Fernlicht1,  4 Fernlicht2,  5 Fernlicht3,  6 Tagfahrlicht1,  7 Tagfahrlicht2,  8 Tagfahrlicht3,  9 Abbiegelicht1,  10 Abbiegelicht2,  11 Abbiegelicht3,  12 Seitenmarkierungsleuchte1,  13 Seitenmarkierungsleuchte2,  14 Seitenmarkierungsleuchte3,  15 Akzentleuchte1,  16 Akzentleuchte2,  17 Akzentleuchte3 |
| STAT_FUNKTION_ABBLENDLICHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_POSITIONSLICHT_STANDLICHT_PARKLICHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_FERNLICHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_TAGFAHRLICHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_ABBIEGELICHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_SONDERBLINKEN | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_REMOTELIGHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_WELCOMELIGHT | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_FOLLOWMEHOME | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_FUNKTION_BLINKEN | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_LWR_MOTOR_VERBAU | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_LUEFTER_VERBAU | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |

### RES_0XD63C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert Resetzähler 1 |
| STAT_RESET_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert Resetzähler 2 |

### RES_0XD63D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALTESTROM_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | Lesen der Betriebsdauer des Haltestrom LWR Motor |
| STAT_VERSTELLSTROM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lesen der Betriebsdauer des Verstellstrom LWR Motor |
| STAT_VERSTELLUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Verstellungen LWR Motor |

### RES_0XD63E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUGTYP | 0-n | high | unsigned char | - | FARZEUGVARIANTE | - | - | - | Fahrzeugtyp aus Tabelle |
| - | Bit | high | BITFIELD | - | BF_SCHEINWERFERINFO | - | - | - | Variante |
| STAT_SCHEINWERFER_VERSIONSNUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Scheinwerferversionsnummer |

### RES_0XDCA0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_VERSORGUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0...nicht aktiviert 1...aktiviert  |
| STAT_ZFL_SENSOR_1_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | ZFL Sensor 1 Wert |
| STAT_ZFL_SENSOR_2_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | ZFL Sensor 2 Wert |

### RES_0XFD40_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERDATENBLOCK_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Scheinwerferdatenblock |

### RES_0XFD43_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_NR_IMPLAUSIBEL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Plausibilitätsprüfung in Block-Nr. 'x' (bzgl. UDS-Block-Id 0x3000 + x) ist negativ (wobei Default 0xFF = 255 gilt). |
| STAT_GRUND_IMPLAUSIBEL | 0-n | high | unsigned char | - | TAB_GRUND_IMPLAUSIBEL | - | - | - | Grund der negativen Plausibilitätsprüfung (wobei Default 0 gilt) |

### RES_0XFD44_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_VBAT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 0: Versorgungsspannung |
| STAT_A_XX_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 1: n/a |
| STAT_LR_DETECT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 2: Links-Rechts-Verbauorterkennung |
| STAT_A_U_FAN_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 3: Spannung Lüfter 1 |
| STAT_TEMP_PCB_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 4: Temperatur der Platine |
| STAT_NTC_1_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 5: NTC-Eingang 1 |
| STAT_NTC_2_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 6: NTC-Eingang 2 |
| STAT_NTC_3_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 7: NTC-Eingang 3 |
| STAT_NTC_4_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 8: NTC-Eingang 4 |
| STAT_NTC_5_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 9: NTC-Eingang 5 |
| STAT_RBIN_1_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 10: Binning-Eingang 1 |
| STAT_RBIN_2_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 11: Binning-Eingang 2 |
| STAT_RBIN_3_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 12: Binning-Eingang 3 |
| STAT_RBIN_4_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 13: Binning-Eingang 4 |
| STAT_RBIN_5_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 14: Binning-Eingang 5 |
| STAT_RBIN_6_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 15: Binning-Eingang 6 |
| STAT_RBIN_7_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 16: Binning-Eingang 7 |
| STAT_PCB_ID_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 17: PCB ID |
| STAT_HW_ID_1_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 18: HW ID 1 |
| STAT_HW_ID_2_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 19: HW ID 2 |

### RES_0XFD48_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_1_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_1_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_2_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_2_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_2_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_3_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_3_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_3_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_4_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_4_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_4_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_5_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_5_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_5_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_6_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_6_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_6_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_7_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_7_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_7_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_8_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_8_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_8_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_9_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_9_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_9_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_10_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_10_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_10_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_11_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_11_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_11_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |
| STAT_LED_12_AKT_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strangspannung |
| STAT_LED_12_MIN_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Strangspannung gemäß Codierdaten |
| STAT_LED_12_MAX_STRANGSPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Strangspannung gemäß Codierdaten |

### RES_0XFD4A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x01 |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x01 |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x02 |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x02 |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x03 |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x03 |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x04 |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x04 |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x05 |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x05 |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x06 |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x06 |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x07 |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x07 |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x08 |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x08 |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP1 |
| STAT_VTEMP2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP2 |

### RES_0XFD4B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x01 |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x01 |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x02 |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x02 |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x03 |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x03 |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x04 |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x04 |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x05 |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x05 |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x06 |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x06 |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x07 |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x07 |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x08 |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x08 |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP1 |
| STAT_VTEMP2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP2 |

### RES_0XFD4C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x01 |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x01 |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x02 |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x02 |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x03 |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x03 |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x04 |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x04 |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x05 |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x05 |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x06 |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x06 |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x07 |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x07 |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x08 |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x08 |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP1 |
| STAT_VTEMP2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP2 |

### RES_0XFD4D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x01 |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x01 |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x02 |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x02 |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x03 |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x03 |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x04 |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x04 |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x05 |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x05 |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x06 |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x06 |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x07 |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x07 |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Tx-Register 0x08 |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned char | - | - | - | - | - | Control-Rx-Register 0x08 |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP1 |
| STAT_VTEMP2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP2 |

### RES_0XFD50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BITS_GLOBAL_INIT_ONCE_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | BitsGlobalInitOnce |
| STAT_ABITS_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aBits |
| STAT_ABITSMOD_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aBitsMod |
| STAT_AESTATE_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aeState |
| STAT_ASTPSTATE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aStpState |
| STAT_ASTPPOS_WERT | HEX | high | unsigned int | - | - | - | - | - | aStpPos |
| STAT_ASTPCTRL_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aStpCtrl |
| STAT_AEVENTBITS_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aEventBits |

### RES_0XFD52_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_CREG_00_WERT | HEX | high | unsigned char | - | - | - | - | - | CtrlTx.aucCReg0 |
| STAT_CTRL_TX_CREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg1 |
| STAT_CTRL_TX_CREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg2 |
| STAT_CTRL_RX_CREG_00_WERT | HEX | high | unsigned char | - | - | - | - | - | CtrlRx.aucCReg0 |
| STAT_CTRL_RX_CREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg1 |
| STAT_CTRL_RX_CREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg2 |
| STAT_STAT_RX_SREG_00_WERT | HEX | high | unsigned char | - | - | - | - | - | StatRx.aucSReg0 |
| STAT_STAT_RX_SREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg1 |
| STAT_STAT_RX_SREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg2 |
| STAT_STAT_RX_SREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg3 |
| STAT_STATV_RX_SREG_00_WERT | HEX | high | unsigned char | - | - | - | - | - | StatvRx.aucSReg0 |
| STAT_STATV_RX_SREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg1 |
| STAT_STATV_RX_SREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg2 |
| STAT_STATV_RX_SREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg3 |

### RES_0XFD55_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAN_1_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Momentante Frequenz Lüfter 1 |
| STAT_FAN_1_MIN_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimale Frequenz Lüfter 1 gemäß Codierdaten |
| STAT_FAN_1_MAX_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximale Frequenz Lüfter 1 gemäß Codierdaten |

### SCHEINWERFERHERSTELLER

| WERT | TEXT |
| --- | --- |
| 0x01 | AL |
| 0x03 | Hella |
| 0x04 | ZKW |
| 0x05 | Valeo |

### SCHEINWERFERVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | AHL/ECE |
| 0x10 | AHL/SAE |
| 0x20 | Bixenon/ECE |
| 0x30 | Bixenon/SAE |
| 0x40 | Halogen/ECE |
| 0x50 | Halogen/SAE |
| 0x60 | LED/ECE |
| 0x70 | LED/SAE |
| 0x80 | LED_LSR/ECE |
| 0x90 | LED_LSR/SAE |
| 0xA0 | LED_AHL/ECE |
| 0xB0 | LED_AHL/SAE |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSSENLICHT_LUEFTER | 0xA540 | - | Routine Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA540_R | RES_0xA540_R |
| LWR_REFERENZLAUF | 0xA541 | - | Refernzlauf der Leuchtweitenregulierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA541_R |
| FUNKTIONSTEST_LED_SCHEINWERFER | 0xA542 | - | Routine für Systemtest FLE | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA542_R |
| LEUCHTEN_FUNKTION_LED | 0xA543 | - | Ansteuerung der LED Leuchtmittel | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA543_R | RES_0xA543_R |
| POSITION_LWR | 0xA545 | - | LWR Positionsvorgabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA545_R | RES_0xA545_R |
| FUNKTIONSTEST_LASER_LEUCHTMITTEL | 0xA5A7 | - | Funktionstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA5A7_R |
| LEUCHTEN_AUSSENLICHT_TEMPERATUR | 0xD630 | - | gibt die Rohwerte der Temperatursensoren, die berechneten Werte für die Leuchten und die Derating-Status aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD630_D |
| LEUCHTEN_LED_KANAL | 0xD631 | - | gibt den aktuellen Strom und die aktuellen PWM-Werte zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD631_D |
| LEUCHTEN_TEMP_HISTOGRAMM | 0xD632 | - | Ausgabe der Temperatur Histogramme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD632_D |
| STATISTIKZAEHLER | 0xD633 | - | Statistikzähler | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD633_D | - |
| BETRIEBSDAUER_KANAELE | 0xD634 | - | Löscht den Betriebsstundenzähler des entsprechenden Kanals | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD634_D | RES_0xD634_D |
| LEUCHTEN_SENSE | 0xD635 | - | gibt die Gesamtstromaufnahme und die gemessene BN-Spannung zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD635_D |
| LWR_TEMPERATURMODUS | 0xD636 | - | Temperaturmodus LWR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD636_D |
| SCHEINWERFERDATEN | 0xD637 | STAT_SCHEINWERFERDATEN_DATA | Scheinwerferspezifische Daten | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_BINNING | 0xD638 | - | Gibt die ausgewählte Binningklasse und den entsprecheden Rohwert zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD638_D |
| SCHEINWERFER_LUEFTER | 0xD639 | - | Gibt den Betriebszustand und die Betriebsparameter des Lüfters zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD639_D |
| AUSSTATTUNG_FLE | 0xD63A | - | Gibt die verbaute Konfiguration aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD63A_D |
| POSITION_LEUCHTWEITENREGULIERUNG | 0xD63B | STAT_POSITION_LWR_WERT | Lesen der LWR Position | ° | - | high | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| RESETZAEHLER | 0xD63C | - | Erfassung der Resetvorgänge | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD63C_D | RES_0xD63C_D |
| BETRIEBSSTUNDENZAEHLER_LWR | 0xD63D | - | Erfassung der Betriebsstunden LWR | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD63D_D | RES_0xD63D_D |
| STATUS_SCHEINWERFER_VARIANTE | 0xD63E | - | Lesen der codierbaren Variantenkennung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD63E_D |
| ZFL_SENSOR | 0xDCA0 | - | gibt die ZFL-Sensorsignale als Rohwerte zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA0_D |
| _LEUCHTEN_AUSSENLICHT_KANAL | 0x3000 | - | Ansteuern der einzelnen LED Kanäle | - | - | - | - | - | - | - | - | - | 31 | ARG_0x3000_R | RES_0x3000_R |
| _SCHEINWERFERDATENBLOCK | 0xFD40 | - | Bei der Scheinwerferfertigung können die Daten im Steuergerät abgelegt werden. Dies referenziert auf DID SCHEINWERFERDATEN. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD40_D | RES_0xFD40_D |
| _SG_ECUVARCFG | 0xFD42 | STAT_ECUVARCFG_DATA | Datenblock 'EcuVarCfg' | DATA | - | high | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CODING_PLAUSIBILITAETSCHECK | 0xFD43 | - | Informationen zum Plausibilitätscheck der Codierung (als flüchtige RAM-Daten) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD43_D |
| _ADC_ROHWERTE | 0xFD44 | - | Liefert die Rohwerte der 20 Analog-/Digital-Converter-Kanäle zurück (Betriebsspannung, Lüfter, Links-/Rechts-Erkennung, Temperatur, Binning-/NTC-Eingänge etc.). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD44_D |
| _SG_EFTCALIBBLOCK_1 | 0xFD45 | STAT_EFTCALIBBLOCK_1_DATA | Datenblock 'EftCalibBlock' Teil 1 | DATA | - | high | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SG_EFTCALIBBLOCK_2 | 0xFD46 | STAT_EFTCALIBBLOCK_2_DATA | Datenblock 'EftCalibBlock' Teil 2 | DATA | - | high | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LED_STRANGSPANNUNG | 0xFD48 | - | Liest für alle LED-Kanäle die Strangspannung sowie die zugehörigen Minimal- und Maximal-Strangspannungen aus den Codierdaten. Die höheren Kanal-Nummer liefern je nach Steuergerät und Bestückung ggf. Dummy-Werte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD48_D |
| _CDDLED_TREIBER_1_SPI_REG | 0xFD4A | - | Liest die SPI-Register des Treiber-Bausteins 1 (für die LED-Kanäle 1 und 2) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4A_D |
| _CDDLED_TREIBER_2_SPI_REG | 0xFD4B | - | Liest die SPI-Register des Treiber-Bausteins 2 (für die LED-Kanäle 3 und 4) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4B_D |
| _CDDLED_TREIBER_3_SPI_REG | 0xFD4C | - | Liest die SPI-Register des Treiber-Bausteins 3 (für die LED-Kanäle 5 und 6) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4C_D |
| _CDDLED_TREIBER_4_SPI_REG | 0xFD4D | - | Liest die SPI-Register des Treiber-Bausteins 4 (für die LED-Kanäle 7 und 8) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4D_D |
| _CDDSTP_LWR_TREIBER_STATUS | 0xFD50 | - | Liest die internen Zustände der CddStp-LWR-Treiber-Status-Maschine aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD50_D |
| _CDDSTP_LWR_TREIBER_SPI_REG | 0xFD52 | - | Liest die SPI-Register des LWR-Treiber-Bausteins aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD52_D |
| _LUEFTER_1_FREQUENZ | 0xFD55 | - | Liest die momentane Frequenz des Lüfters 1 sowie die minimale und maximale Frequenz aus den Codierdaten aus. Sonderwerte für die  momentane Frequenz:  0 = Lüfter aus; 0xFFFF = Lüfter nicht verbaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD55_D |
| _WECKEREIGNIS | 0xFD57 | STAT_WECKEREIGNIS | Ursache für das letzte Weckereignis | 0-n | - | high | unsigned int | TAB_WECKEREIGNIS | - | - | - | - | 22 | - | - |

### TAB_FLE_LEUCHTMITTEL

| WERT | TEXT |
| --- | --- |
| 0x01 | Abblendlicht 1 |
| 0x02 | Abblendlicht 2 |
| 0x03 | LED 3 |
| 0x04 | LED 4 |
| 0x05 | LED 5 |
| 0x06 | LED 6 |
| 0x07 | LED 7 |

### TAB_FUNKTION_FLE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbaut |
| 0x01 | verbaut und aktiv |
| 0x02 | verbaut und nicht aktiv |

### TAB_GRUND_IMPLAUSIBEL

| WERT | TEXT |
| --- | --- |
| 0 | (Default) |
| 1 | Codierdaten unplausibel bzw. ungeeignet |
| 2 | Codierdaten inkompatibel zu Steuergeräte-Hardware |

### TAB_LED_LEUCHTMITTEL

| WERT | TEXT |
| --- | --- |
| 0x01 | Abblendlicht 1 |
| 0x02 | Abblendlicht 2 |
| 0x03 | LED 3 |
| 0x04 | LED 4 |
| 0x05 | LED 5 |
| 0x06 | LED 6 |
| 0x07 | LED 7 |
| 0xFF | alle Leuchtmittel |

### TAB_LEUCHTMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbaut |
| 0x01 | Abblendlicht 1 |
| 0x02 | Abblendlicht 2 |
| 0x03 | Fernlicht 1 |
| 0x04 | Fernlicht 2 |
| 0x05 | Fernlicht 3 |
| 0x06 | Tagfahrlicht 1 |
| 0x07 | Tagfahrlicht 2 |
| 0x08 | Tagfahrlicht 3 |
| 0x09 | Abbiegelicht 1 |
| 0x0A | Abbiegelicht 2 |
| 0x0B | Abbiegelicht 3 |
| 0x0C | Seitenmarkierungsleuchte 1 |
| 0x0D | Seitenmarkierungsleuchte 2 |
| 0x0E | Seitenmarkierungsleuchte 3 |
| 0x0F | Akzentleuchte 1 |
| 0x10 | Akzentleuchte 2 |
| 0x11 | Akzentleuchte 3 |
| 0x12 | Zusatzfernlicht-Laser 1 |
| 0x13 | Inszenierungslicht 1 |
| 0xFF | Wert ungültig |

### TAB_LWR_REFERENZLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Referenzlauf nicht gestartet |
| 0x01 | Referenzlauf aktiv |
| 0x02 | Referenzlauf ohne Fehler abgeschlossen |
| 0x03 | Referenzlauf mit Fehler abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_POS_LWR

| WERT | TEXT |
| --- | --- |
| 0x00 | Job aktiv |
| 0x01 | Job nicht aktiv |
| 0x02 | Job erfolgreich abgeschlossen |
| 0xFF | Fehler |

### TAB_WECKEREIGNIS

| WERT | TEXT |
| --- | --- |
| 0 | (Default) |
| 1 | Klemme-30-Wakeup (Power-On) |
| 4 | Software-Reset |
| 8 | Watchdog-Reset |
| 32 | CAN-Wakeup |
| 64 | PLL-Unlock |
| 256 | Blinker |
