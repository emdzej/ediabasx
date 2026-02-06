# ctm_f33.prg

## General

|  |  |
| --- | --- |
| File | ctm_f33.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 103 |
| Origin | BMW EI61 RalfPompl |
| Revision | 5.000 |
| Author | HelbakoGmbH E-S GuidoGlissmann(gg), HelbakoGmbH E-S DariuszBili |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio Top Modul |  |  |
| ORIGIN | string | BMW EI61 RalfPompl |  |  |
| REVISION | string | 5.000 |  |  |
| AUTHOR | string | HelbakoGmbH E-S GuidoGlissmann(gg), HelbakoGmbH E-S DariuszBili |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.42 |  |  |
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
| 0x000001 | Reinshagen => Delphi |
| 0x000002 | Kostal |
| 0x000003 | Hella |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako |
| 0x000008 | Bosch |
| 0x000009 | Loewe => Lear |
| 0x000010 | VDO |
| 0x000011 | Valeo |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine |
| 0x000018 | Continental Teves |
| 0x000019 | Elektromatik Suedafrika |
| 0x000020 | Becker |
| 0x000021 | Preh |
| 0x000022 | Alps |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi PHI |
| 0x000028 | DODUCO => BERU |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer |
| 0x000033 | Jatco |
| 0x000034 | Fuba |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE |
| 0x000041 | Megamos |
| 0x000042 | TRW |
| 0x000043 | Wabco |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC (Hella Electronics Corporation) |
| 0x000046 | Gemel |
| 0x000047 | ZF |
| 0x000048 | GMPT |
| 0x000049 | Harman Kardon |
| 0x000050 | Remes |
| 0x000051 | ZF Lenksysteme |
| 0x000052 | Magneti Marelli |
| 0x000053 | Borg Instruments |
| 0x000054 | GETRAG |
| 0x000055 | BHTC (Behr Hella Thermocontrol) |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon |
| 0x000058 | Autoliv |
| 0x000059 | Haberl |
| 0x000060 | Magna Steyr |
| 0x000061 | Marquardt |
| 0x000062 | AB-Elektronik |
| 0x000063 | Siemens VDO Borg |
| 0x000064 | Hirschmann Electronics |
| 0x000065 | Hoerbiger Electronics |
| 0x000066 | Thyssen Krupp Automotive Mechatronics |
| 0x000067 | Gentex GmbH |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steering Europe |
| 0x000071 | NSI B.V |
| 0x000072 | AISIN AW CO.LTD |
| 0x000073 | Shorlock |
| 0x000074 | Schrader |
| 0x000075 | BERU Electronics GmbH |
| 0x000076 | CEL |
| 0x000077 | Audio Mobil |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | AKsys GmbH |
| 0x000086 | META System |
| 0x000087 | Hülsbeck & Fürst GmbH & Co KG |
| 0x000088 | Mann & Hummel Automotive GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.A. |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp. |
| 0x000094 | KÜSTER Automotive Control |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental Automotive |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls |
| 0x00009A | Takata- Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN-Driveline |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | PEIKER acustics GmbH |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | ADC Automotive Distance Control Systems GmbH |
| 0x0000A5 | Funkwerk Dabendorf GmbH |
| 0x0000A6 | Lame |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Wanyu |
| 0x0000A9 | Thyssen Krupp Presta |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA |
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive World Headquarters |
| 0x0000B6 | Hans Widmaier |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
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
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
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
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
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
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
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
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
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

### ARG_0X4201

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SENSOREN | 0-n | high | unsigned char | - | TAB_SENSOREN | 1.0 | 1.0 | 0.0 | - | - | AuswahlSensorversorgung siehe Tabelle TAB_SENSOREN |
| ARG_MODE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Steuern Sensorversorgung 0x00 aus 0x01 ein |

### ARG_0X4211

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSBEREICH | 0-n | - | unsigned char | - | TAB_MESSBEREICH | - | - | - | - | - | - |

### ARG_0XA1A4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_CV_ELEMENT | - | - | - | - | - | Auswahl des Verdeckelements oder Verdeckfunktion (siehe TAB_CV_ELEMENT) |
| ARG_RICHTUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |
| ARG_ZEIT | + | - | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in ms (0 bis 65534 ms) |

### ARG_0XD2A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### ARG_0XD2A7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Statistikzähler löschen |

### ARG_0XD2A8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen aller bisher gespeicherten Daten |

### ARG_0XD2A9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ELEMENT | 0-n | high | unsigned char | - | TAB_CV_SCA | - | - | - | - | - | Auswahl SCA-Element (siehe TAB_CV_SCA) |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_SCA_RICHTUNG | - | - | - | - | - | Verfahrrichtung der SCA (siehe TAB_CV_SCA_RICHTUNG) |

### ARG_0XD2AA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | 0-n | high | unsigned char | - | TAB_ANTENNENUMSCHALTUNG | - | - | - | - | - | Steuert die Aktivierung der Antennensysteme 0x00 Applikation (Kundenbetrieb) 0x01 Heckscheibenantenne 0x02 Brüstungsantenne |

### ARG_0XD2AB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen aller bisher gespeicherten Daten |

### ARG_0XD2AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RELAIS | 0-n | high | unsigned char | - | TAB_CV_RELAIS | - | - | - | - | - | Auswahl angesteuertes Relais (siehe TAB_CV_RELAIS) |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_RELAIS_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_RELAIS_RICHTUNG) |

### ARG_0XD2AE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANSTEUERUNG) |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |

### ARG_0XD2AF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | Übergabe der Ansteuerung an Diagnose (siehe TAB_CV_ANSTEUERUNG) |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_GELENK_BELADEHILFE_ANST | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_GELENK_BELADEHILFE_ANST) |

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
| 0x022400 | Energiesparmode aktiv | 0 |
| 0x022408 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02240A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02240B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02240C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF24 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805000 | Verdeck, Position Dachpaket/Verdeck aufgestellt, VSW 1.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x805001 | Verdeck, Position Dachpaket/Verdeck aufgestellt, VSW 1.1 : Signal ungültig | 0 |
| 0x805002 | Verdeck, Position Dachpaket/Verdeck abgelegt, VSW 1.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x805003 | Verdeck, Position Dachpaket/Verdeck abgelegt, VSW 1.2 : Signal ungültig | 0 |
| 0x805004 | Verdeck, Dämpfung Dachteil schließen, VSW 2.3 : Unterbrechung oder Kurzschluss | 0 |
| 0x805005 | Verdeck, Dämpfung Dachteil schließen, VSW 2.3 : Signal ungültig | 0 |
| 0x805006 | Verdeck, Dämpfung Dachteil öffnen, VSW 2.4 : Unterbrechung oder Kurzschluss | 0 |
| 0x805007 | Verdeck, Dämpfung Dachteil öffnen, VSW 2.4 : Signal ungültig | 0 |
| 0x805008 | Verdeck, Verriegelung Windlauf verriegelt, VSW 4.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x805009 | Verdeck, Verriegelung Windlauf verriegelt, VSW 4.1 : Signal ungültig | 0 |
| 0x80500A | Verdeck, Verriegelung Windlauf entriegelt, VSW 4.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x80500B | Verdeck, Verriegelung Windlauf entriegelt, VSW 4.2 : Signal ungültig | 0 |
| 0x80500C | Verdeck, Verdeckklappe geschlossen, VSW 5.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x80500D | Verdeck, Verdeckklappe geschlossen, VSW 5.1 : Signal ungültig | 0 |
| 0x80500E | Verdeck, Verdeckklappe/Beladehilfe offen, VSW 5.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x80500F | Verdeck, Verdeckklappe/Beladehilfe offen, VSW 5.2 : Signal ungültig | 0 |
| 0x805010 | Verdeck, gedämpftes Heckmodul, VSW 5.3 : Unterbrechung oder Kurzschluss | 0 |
| 0x805011 | Verdeck, gedämpftes Heckmodul, VSW 5.3 : Signal ungültig | 0 |
| 0x805012 | Verdeck, Koppelverschluß rechts geschlossen, VSW 6.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x805013 | Verdeck, Koppelverschluß rechts geschlossen, VSW 6.1 : Signal ungültig | 0 |
| 0x805014 | Verdeck, Koppelverschluß rechts geöffnet, VSW 6.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x805015 | Verdeck, Koppelverschluß rechts geöffnet, VSW 6.2 : Signal ungültig | 0 |
| 0x805016 | Verdeck, Koppelverschluß links geschlossen, VSW 6.3 : Unterbrechung oder Kurzschluss | 0 |
| 0x805017 | Verdeck, Koppelverschluß links geschlossen, VSW 6.3 : Signal ungültig | 0 |
| 0x805018 | Verdeck, Windlauf erreicht / Windlaufgrundplatte links, VSW 8 : Unterbrechung oder Kurzschluss | 0 |
| 0x805019 | Verdeck, Windlauf erreicht / Windlaufgrundplatte links, VSW 8 : Signal ungültig | 0 |
| 0x80501A | Verdeck, Gepäckraumabtrennung / Verdeckkastenboden unten, VSW 9 : Unterbrechung oder Kurzschluss | 0 |
| 0x80501B | Verdeck, Gepäckraumabtrennung / Verdeckkastenboden unten, VSW 9 : Signal ungültig | 0 |
| 0x80501C | Verdeck, Verschluss Beladehilfe links offen, BSW 10.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x80501D | Verdeck, Verschluss Beladehilfe links offen, BSW 10.1 : Signal ungültig | 0 |
| 0x80501E | Verdeck, Verschluss Beladehilfe links geschlossen, BSW 10.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x80501F | Verdeck, Verschluss Beladehilfe links geschlossen, BSW 10.2 : Signal ungültig | 0 |
| 0x805020 | Verdeck, Verschluss Beladehilfe rechts offen, BSW 10.3 : Unterbrechung oder Kurzschluss | 0 |
| 0x805021 | Verdeck, Verschluss Beladehilfe rechts offen, BSW 10.3 : Signal ungültig | 0 |
| 0x805022 | Verdeck, Verschluss Beladehilfe rechts geschlossen, BSW 10.4 : Unterbrechung oder Kurzschluss | 0 |
| 0x805023 | Verdeck, Verschluss Beladehilfe rechts geschlossen, BSW 10.4 : Signal ungültig | 0 |
| 0x805024 | Verdeck, Dach in Beladestellung, BSW 11 : Unterbrechung oder Kurzschluss | 0 |
| 0x805025 | Verdeck, Dach in Beladestellung, BSW 11 : Signal ungültig | 0 |
| 0x805026 | Verdeck, Position Dachpaket abgelegt links, VSW 1.4 : Unterbrechung oder Kurzschluss | 0 |
| 0x805027 | Verdeck, Position Dachpaket abgelegt links, VSW 1.4 : Signal ungültig | 0 |
| 0x80503C | Temperatursensor Hydraulikpumpe: Unterbrechung oder Kurzschluss | 0 |
| 0x80503F | Verdeckstecker nicht gesteckt | 0 |
| 0x805040 | Versorgungsspannung der Positionssensoren Verdeckstecker: Kurzschluss | 0 |
| 0x805041 | Versorgungsspannung der Positionssensoren Karosseriestecker: Kurzschluss | 0 |
| 0x805042 | Versorgungsspannung der Endlagensensoren Verdeckstecker: Kurzschluss | 0 |
| 0x805043 | Versorgungsspannung der Endlagensensoren Karosseriestecker: Kurzschluss | 0 |
| 0x805045 | Klemme 30 Spannung fehlerhaft | 1 |
| 0x805046 | Fußpunkt Endlagensensoren wegen KS +Ub eines Sensors zum Schutz der Messwiderstände abgeschaltet | 0 |
| 0x805047 | Fußpunkt Positionssensoren wegen KS +Ub eines Sensors zum Schutz der Messwiderstände abgeschaltet | 0 |
| 0x805048 | Verdeckschalter Zu: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x805049 | Verdeckschalter Zu: Kurzschluss nach Plus | 0 |
| 0x80504A | Verdeckschalter Auf: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x80504B | Verdeckschalter Auf: Kurzschluss nach Plus | 0 |
| 0x80504C | Schalter Verdeckkastenboden / Gepäckraumabtrennung: Signal unplausibel | 0 |
| 0x80504F | Masse-Schalter (Bedientaster, SCA-Kontakte, Verdeckkastenboden): Kurzschluss nach Plus | 0 |
| 0x805050 | Kontakte Softcloseautomatik links unplausibel | 0 |
| 0x805051 | Kontakte Softcloseautomatik rechts unplausibel | 0 |
| 0x805052 | Mikroschalter Umschaltung Beladehilfe links unplausibel | 0 |
| 0x805053 | Mikroschalter Umschaltung Beladehilfe rechts unplausibel | 0 |
| 0x805054 | Beladehilfstaster Zu: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x805055 | Beladehilfstaster Zu: Kurzschluss nach Plus | 0 |
| 0x805056 | Beladehilfstaster Zu: Signal ungültig | 0 |
| 0x805057 | Beladehilfstaster Auf: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x805058 | Beladehilfstaster Auf: Kurzschluss nach Plus | 0 |
| 0x805059 | Beladehilfstaster Auf: Signal ungültig | 0 |
| 0x805060 | Ventil V1: Unterbrechung oder Kurzschluss | 0 |
| 0x805061 | Ventil V2: Unterbrechung oder Kurzschluss | 0 |
| 0x805062 | Ventil V3: Unterbrechung oder Kurzschluss | 0 |
| 0x805063 | Ventil V4: Unterbrechung oder Kurzschluss | 0 |
| 0x805064 | Ventil V5: Unterbrechung oder Kurzschluss | 0 |
| 0x805065 | Ventil V6: Unterbrechung oder Kurzschluss | 0 |
| 0x805067 | Relais PM1: Unterbrechung oder Kurzschluss | 0 |
| 0x805068 | Relais PM2: Unterbrechung oder Kurzschluss | 0 |
| 0x80506F | Verriegelungsmotor Windlauf: Unterbrechung oder Kurzschluss | 0 |
| 0x805073 | Softcloseautomatik Heckklappe oder Umschaltung Beladehilfe: Kurzschluss | 0 |
| 0x805075 | Softcloseautomatik Heckklappe links: Unterbrechung | 0 |
| 0x805076 | Softcloseautomatik Heckklappe rechts: Unterbrechung | 0 |
| 0x805077 | Umschaltung Beladehilfe links: Unterbrechung | 0 |
| 0x805078 | Umschaltung Beladehilfe rechts: Unterbrechung | 0 |
| 0x805080 | Speicherfehler RAM | 0 |
| 0x805081 | Speicherfehler ROM | 0 |
| 0x805082 | Funktionseinschränkung: Motorstartautomatik aktiv | 1 |
| 0x805083 | Funktionseinschränkung: Standverbraucherabschaltung aktiv | 1 |
| 0x805084 | Geschwindigkeit in Zwischenposition zu hoch | 1 |
| 0x805085 | Funktionseinschränkung: Außentemperatur zu niedrig | 1 |
| 0x805086 | Funktionseinschränkung: Fensterheberposition unbekannt | 1 |
| 0x805087 | Funktionseinschränkung: Geschwindigkeit zu hoch | 1 |
| 0x805088 | Funktionseinschränkung: Heckklappe offen | 1 |
| 0x805089 | Funktionseinschränkung: Unbekannte Dachposition | 1 |
| 0x80508A | Funktionseinschränkung: ID-Geber hat Nahbereich verlassen | 1 |
| 0x80508B | Funktionseinschränkung: Verdeckkastenboden nicht abgesenkt | 1 |
| 0x80508C | Funktionseinschränkung: Wiederholsperre Hydraulikpumpe | 1 |
| 0x80508D | Funktionseinschränkung: Wiederholsperre Verriegelungsmotor/Faltdachantrieb | 1 |
| 0x80508E | Funktionseinschränkung: Überlastschutz Ventile | 1 |
| 0x80508F | Funktionseinschränkung: Zeitüberschreitung Freigabe SHD/CVM/CTM | 1 |
| 0x805090 | Funktionseinschränkung: Zeitüberschreitung beim Ablegen-Ausheben des Verdecks | 1 |
| 0x805091 | Funktionseinschränkung: Zeitüberschreitung beim Ent-Verriegeln | 1 |
| 0x805092 | Zeitüberschreitung beim Öffnen-Schliessen der Verdeckklappe | 1 |
| 0x805093 | Zeitüberschreitung beim Packen-Entpacken der Dachschalen | 1 |
| 0x805094 | Zeitüberschreitung beim Öffnen-Schliessen des Koppelverschlusses | 1 |
| 0x805095 | Funktionseinschränkung wegen Unterspannung | 1 |
| 0x805096 | Funktionseinschränkung wegen Überspannung | 1 |
| 0x805097 | Zeitüberschreitung beim Dämpfen des Heckmoduls | 1 |
| 0x805098 | Überspannung erkannt | 1 |
| 0x805099 | Unterspannung erkannt | 1 |
| 0x80509A | Funktionseinschränkung: Fehlbeladung Kofferraum | 1 |
| 0x80509B | Funktionseinschränkung: Querbeschleunigung zu hoch in Zwischenstellung | 1 |
| 0x80509D | Zeitüberschreitung beim Umschalten des Gelenks Beladehilfe | 1 |
| 0x80509E | Haltezeit Heckmodul abgelaufen | 1 |
| 0x80509F | Funktionseinschränkung: Fahrzeug verriegelt oder gesichert | 1 |
| 0x8050A2 | Funktionseinschränkung: Verdeckklappe/Verdeckkastendeckel unplausibel | 1 |
| 0x8050A3 | Funktionseinschränkung: Daschschalen unplausibel | 1 |
| 0x8050A4 | Funktionseinschränkung: Dachpaket/Hauptsäule unplausibel | 1 |
| 0x8050A5 | Funktionseinschränkung: Koppelverschluss unplausibel | 1 |
| 0x8050A6 | Funktionseinschränkung: Frontverschluss unplausibel | 1 |
| 0xD20468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD20BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD21400 | Ausfall Botschaft GESCHWINDIGKEIT | 1 |
| 0xD21401 | Ausfall Botschaft KLEMMEN | 1 |
| 0xD21402 | Ausfall Botschaft POWERMGMT_CTR_COS | 1 |
| 0xD21403 | Botschaft (Steuerung Fensterheber FAT, 0xFA) fehlt, Empfänger CTM, Sender FEM | 1 |
| 0xD21404 | Ausfall Botschaft CTR_FH_SHD_ZENTRALE | 1 |
| 0xD21405 | Ausfall Botschaft STAT_ZV_KLAPPEN | 1 |
| 0xD21406 | Ausfall Botschaft A_TEMP | 1 |
| 0xD21407 | Ausfall Botschaft DT_PT_2 | 1 |
| 0xD21408 | Ausfall Botschaft Fahrzeugzustand | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4600 | Aussentemperatur | °C | - | signed char | - | - | - | - |
| 0x4601 | Datum_Tag | - | - | unsigned char | - | - | - | - |
| 0x4602 | Datum_Monat | - | - | unsigned char | - | - | - | - |
| 0x4603 | Datum_Jahr | - | low | unsigned int | - | - | - | - |
| 0x4604 | Spannung_Kl30 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x4605 | Bedienquelle | 0-n | - | 0xff | TAB_CV_BEDIENANFORDERUNG | - | - | - |
| 0x4608 | Sensoren | 0-n | high | 0xffFF | TAB_FF_SENSOREN | - | - | - |
| 0x460b | Sensoren_Beladehilfe | 0-n | - | 0xFF | TAB_FF_SENSOREN_BELADEHILFE | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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
| 0x240000 | DEM_CAN_E_TIMEOUT | 0 |
| 0x240001 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x240002 | CANIF_INDIRECT_E_STOPPED | 0 |
| 0x240003 | CANIF_E_INVALID_DLC | 0 |
| 0x240004 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x240005 | CANNM_E_INIT_FAILED | 0 |
| 0x240006 | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x240007 | CANNM_E_TX_PATH_FAILED | 0 |
| 0x240008 | CANTP_E_COM | 0 |
| 0x240009 | CANTP_E_OPER_NOT_SUPPORTED | 0 |
| 0x24000A | CANTRCV_30_E_NO_TRCV_CNTRL | 0 |
| 0x24000B | CANSM_E_MODE_CHANGE_NETWORK_0 | 0 |
| 0x24000D | CANSM_E_SETTRSCVMODE_NETWORK_0 | 0 |
| 0x24000E | CSM_E_ERROR_EVENT | 0 |
| 0x24000F | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x240010 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x240011 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x240012 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x240013 | ECUM_E_RAM_CHECKED_FAILED | 0 |
| 0x240014 | FLS_E_COMPARE_FAILED | 0 |
| 0x240015 | FLS_E_ERASE_FAILED | 0 |
| 0x240016 | FLS_E_READ_FAILED | 0 |
| 0x240017 | FLS_E_WRITE_FAILED | 0 |
| 0x240018 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x240019 | MCU_E_CLOCK_FAILURE | 0 |
| 0x24001A | NVM_E_INTEGRITY_FAILED | 0 |
| 0x24001B | NVM_E_REQ_FAILED | 0 |
| 0x24001C | PDUR_E_INIT_FAILED | 0 |
| 0x24001D | PDUR_E_PDU_INSTANCE_LOST | 0 |
| 0x24001E | WDG_E_DISABLE_REJECTED | 0 |
| 0x24001F | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x240020 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x240021 | WDGM_E_SET_MODE | 0 |
| 0x240022 | FEE_FORMAT_FAILED | 0 |
| 0x240023 | FEE_E_STARTUP_FAILED | 0 |
| 0x240024 | MCU_E_WRITE_FAILURE | 0 |
| 0x240026 | MCU_E_POWER_DOWN_MODE_FAILURE | 0 |
| 0x240027 | PIA_E_IO_ERROR | 0 |
| 0x240028 | WDG_23_DRVA_E_MODE_SWITCH_FAILED | 0 |
| 0x240029 | WDG_23_DRVA_E_DISABLE_REJECTED | 0 |
| 0x24002A | FEE_E_WRITE_FAILED | 0 |
| 0x24002B | FEE_E_READ_FAILED | 0 |
| 0x240040 | CVC Sequenz error | 0 |
| 0x240041 | CVC Timeout | 0 |
| 0x240042 | Keine Timeoutüberwachung der CAS Freigabe | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4600 | Aussentemperatur | °C | - | signed char | - | - | - | - |
| 0x4601 | Datum_Tag | - | - | unsigned char | - | - | - | - |
| 0x4602 | Datum_Monat | - | - | unsigned char | - | - | - | - |
| 0x4603 | Datum_Jahr | - | low | unsigned int | - | - | - | - |
| 0x4604 | Spannung_Kl30 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x4605 | Bedienquelle | 0-n | - | 0xff | TAB_CV_BEDIENANFORDERUNG | - | - | - |
| 0x4608 | Sensoren | 0-n | high | 0xffff | TAB_FF_SENSOREN | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_VERDECK | 0-n | - | unsigned char | - | TAB_VERDECK_POSITION | - | - | - | - |
| STAT_TABELLENZUSTAND_WERT | HEX | - | unsigned char | - | - | - | - | - | - |
| STAT_BUTTON_OPEN | 0-n | - | unsigned char | - | TAB_BUTTON | - | - | - | - |
| STAT_BUTTON_CLOSE | 0-n | - | unsigned char | - | TAB_BUTTON | - | - | - | - |
| STAT_BUTTON_INSIDE | 0-n | - | unsigned char | - | TAB_STAT_BUTTON_INSIDE | - | - | - | - |
| STAT_TEMP_PUMPE | 0-n | - | unsigned char | - | TAB_CV_PUMPE_TEMPERATUR | - | - | - | - |
| STAT_SCA_LEFT | 0-n | - | unsigned char | - | TAB_STAT_SCA | - | - | - | - |
| STAT_SCA_RIGHT | 0-n | - | unsigned char | - | TAB_STAT_SCA | - | - | - | - |
| STAT_BLH_LEFT | 0-n | - | unsigned char | - | TAB_STAT_BLH | - | - | - | - |
| STAT_BLH_RIGHT | 0-n | - | unsigned char | - | TAB_STAT_BLH | - | - | - | - |
| STAT_VERRIEGELUNG | 0-n | - | unsigned char | - | TAB_STAT_VERRIEGELUNG | - | - | - | - |

### RES_0X4010

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DACH_AUFGESTELLT | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 34 |
| STAT_DACH_ABGELEGT_RECHTS | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 35 |
| STAT_DACHSCHALEN_GESCHLOSSEN | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 36 |
| STAT_DACHSCHALEN_GEPACKT | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 37 |
| STAT_WINDLAUF_ENTRIEGELT | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 38 |
| STAT_HECKMODUL_GESCHLOSSEN | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 39 |
| STAT_HECKMODUL_OFFEN | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 40 |
| STAT_HECKMODUL_DAEMPFUNG | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 41 |
| STAT_WINDLAUF_VERRIEGELT | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 1 |
| STAT_KOPPELVERSCHLUSS_RECHTS_GESCHLOSSEN | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 2 |
| STAT_SENSOR_A11 | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 3 |
| STAT_DACHFUNKTION_LINKS | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 4 |
| STAT_DACHFUNKTION_RECHTS | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 5 |
| STAT_BELADEFUNKTION_LINKS | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 6 |
| STAT_BELADEFUNKTION_RECHTS | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 7 |
| STAT_SENSOR_A16 | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 8 |
| STAT_KOPPELVERSCHLUSS_RECHTS_OFFEN | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Verdeckstecker Pin 9 |
| STAT_KOPPELVERSCHLUSS_LINKS_GESCHLOSSEN | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 34 |
| STAT_WINDLAUF_ERREICHT | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 35 |
| STAT_GEPAECKRAUMTRENNUNG | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 36 |
| STAT_BELADEPOSITION_ERREICHT | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 37 |
| STAT_DACH_ABGELEGT_LINKS | 0-n | - | unsigned char | 0x07 | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 38 |
| STAT_SCA_ZUGEZOGEN_LINKS | 0-n | - | unsigned char | - | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 17 |
| STAT_SCA_ZUGEZOGEN_RECHTS | 0-n | - | unsigned char | - | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 18 |
| STAT_SCA_OFFEN_LINKS | 0-n | - | unsigned char | - | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 19 |
| STAT_SCA_OFFEN_RECHTS | 0-n | - | unsigned char | - | TAB_CVM_SENSOREN | - | - | - | Karosseriestecker Pin 20 |
| STAT_TASTER_VERDECK_OEFFNEN | 0-n | - | unsigned char | - | TAB_BUTTON | - | - | - | Karosseriestecker Pin 13 |
| STAT_TASTER_VERDECK_SCHLIESSEN | 0-n | - | unsigned char | - | TAB_BUTTON | - | - | - | Karosseriestecker Pin 14 |
| STAT_TASTER_BELADEPOSITION_ANFAHREN | 0-n | - | unsigned char | - | TAB_BUTTON | - | - | - | Karosseriestecker Pin 10 |
| STAT_TASTER_BELADEPOSITION_VERLASSEN | 0-n | - | unsigned char | - | TAB_BUTTON | - | - | - | Karosseriestecker Pin 11 |

### RES_0X4020

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_A01_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A02_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A03_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A04_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A05_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A06_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A07_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A08_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A09_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A10_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A11_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A12_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A13_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A14_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A15_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A16_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_A17_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_C01_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_C02_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_C03_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_C04_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_C05_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SENSOR_D01_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_BEDIEN_C05_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SCHALT_C01 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_SCHALT_C02 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_SCHALT_C03 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_SCHALT_C04 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_BEDIEN_C01 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_BEDIEN_C02 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_BEDIEN_C03 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_BEDIEN_C04 | 0/1 | - | unsigned char | - | - | - | - | - | - |

### RES_0X4050

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_U_LAS_C1_1_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_C1_1 |
| STAT_SPANNUNG_U_LAS_C1_2_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_C1_2 |
| STAT_SPANNUNG_U_LAS_C1_3_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_C1_2 |
| STAT_SPANNUNG_U_LAS_A2_1_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_A2_1 |
| STAT_SPANNUNG_U_LAS_A2_2_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_A2_2 |
| STAT_SPANNUNG_U_LAS_A2_3_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_A2_3 |
| STAT_SPANNUNG_I_LAS_12_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Stromspiegel Ausgänge C1 und A2 |
| STAT_SPANNUNG_U_LAS_A3_1_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_A3_1 |
| STAT_SPANNUNG_U_LAS_A3_2_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ausgang LAS_A3_2 |
| STAT_SPANNUNG_I_LAS_3_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Stromspiegel Ausgänge A3 |

### RES_0X4060

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_MOTOR_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | virtuelle Laufzeit des Verriegelungsmotors |
| STAT_STATUS_MOTOR_SPERRE | 0-n | high | unsigned char | - | TAB_CV_STATUS_WIEDERHOLSPERRE | - | - | - | Status Wiederholsperre Verriegelungsmotor |
| STAT_ZEIT_MOTOR_SPERRE_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | Zeit Sperre Verriegelungsmotor |
| STAT_ZEIT_MOTOR_FREIGABE_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | Zeit Freigabe Verriegelungsmotor |
| STAT_ZEIT_PUMPE_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | virtuelle Laufzeit des Hydraulikpumpe |
| STAT_STATUS_PUMPE_SPERRE | 0-n | high | unsigned char | - | TAB_CV_STATUS_WIEDERHOLSPERRE | - | - | - | Status Wiederholsperre  Hydraulikpumpe |
| STAT_ZEIT_PUMPE_SPERRE_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | Zeit Sperre Hydraulikpumpe |
| STAT_ZEIT_PUMPE_FREIGABE_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | Zeit Freigabe Hydraulikpumpe |
| STAT_ZEIT_VENTILE_WERT | s | high | unsigned int | - | - | 1 | 10 | 0 | virtuelle Laufzeit der Ventile |
| STAT_STATUS_VENTILE_SPERRE | 0-n | high | unsigned char | - | TAB_CV_STATUS_WIEDERHOLSPERRE | - | - | - | Status Wiederholsperre  Ventile |
| STAT_ZEIT_VENTILE_SPERRE_WERT | s | high | unsigned int | - | - | 1 | 1 | 0 | Zeit Sperre Ventile |
| STAT_ZEIT_VENTILE_FREIGABE_WERT | s | high | unsigned int | - | - | 1 | 1 | 0 | Zeit Freigabe Ventile |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWFL_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_BTLD_WERT | HEX | - | unsigned int | - | - | - | - | - | - |

### RES_0XA1A4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XD2A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_GESTEUERTE_HECKSCHEIBE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: gesteuerte Heckscheibe nicht vorhanden 0x01: gesteuerte Heckscheibe vorhanden |
| STAT_VORHANDEN_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_BELADEHILFE_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_NAHBEREICHSERKENNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Nahbereichserkennung vorhanden 0x01: Nahbereichserkennung vorhanden |
| STAT_VORHANDEN_BELADEHILFSFUNKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Beladehilfsfunktion vorhanden 0x01:  Beladehilfsfunktion vorhanden |
| STAT_VORHANDEN_SHD | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Schiebedach nicht vorhanden 0x01: elektrisches Schiebedach vorhanden |
| STAT_VORHANDEN_ESH | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrischer Schiebehimmel nicht vorhanden 0x01: elektrischer Schiebehimmel vorhanden |
| STAT_VORHANDEN_WINDSCHOTT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Windschott nicht vorhanden 0x01: elektrisches Windschott vorhanden |

### RES_0XD2A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KL30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert Lastkreis (KL30) |
| STAT_SPANNUNG_KL30 | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Spannung Lastkreis (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SPANNUNG_KL15_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert Logikkreis (KL15) |
| STAT_SPANNUNG_KL15 | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Spannung Logikkreis (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENSOR_SUPPLY_A_PERMANENT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | TBD |
| STAT_SENSOR_SUPPLY_A_PERMANENT | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | TBD (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENSOR_SUPPLY_A_TEMPORAER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | TBD |
| STAT_SENSOR_SUPPLY_A_TEMPORAER | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | TBD (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENSOR_SUPPLY_C_PERMANENT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | TBD |
| STAT_SENSOR_SUPPLY_C_PERMANENT | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | TBD (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENSOR_SUPPLY_C_TEMPORAER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | TBD |
| STAT_SENSOR_SUPPLY_C_TEMPORAER | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | TBD (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_FUSSPUNKT_SENSOR_PERMANENT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | TBD |
| STAT_FUSSPUNKT_SENSOR_TEMPORAER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | TBD |
| STAT_SUPPLY_C_SCHALTER_ANALOG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | TBD |

### RES_0XD2A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL_V1_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 1 0 = AUS 1 = EIN |
| STAT_VENTIL_V2_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 2 0 = AUS 1 = EIN |
| STAT_VENTIL_V3_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 3 0 = AUS 1 = EIN |
| STAT_VENTIL_V4_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 4 0 = AUS 1 = EIN |
| STAT_VENTIL_V5_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 5 0 = AUS 1 = EIN |
| STAT_VENTIL_RES_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil Reserve 0 = AUS 1 = EIN |
| STAT_RELAIS_SCA1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung Relais SCA 1  0 = AUS 1 = EIN |
| STAT_RELAIS_SCA1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais SCA 1 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_SCA2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais SCA2 0 = AUS 1 = EIN |
| STAT_RELAIS_SCA2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais SCA2 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_SCA3_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais SCA 3 0 = AUS 1 = EIN |
| STAT_RELAIS_SCA3_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais SCA3 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_WLV1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais WLV 1 0 = AUS 1 = EIN |
| STAT_RELAIS_WLV1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais WLV1 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_WLV2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais WLV 2 0 = AUS 1 = EIN |
| STAT_RELAIS_WLV2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais WLV2 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_BELHI1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Beladehilfe 1 0 = AUS 1 = EIN |
| STAT_RELAIS_BELHI1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Beladehilfe 1 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_BELHI2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Beladehilfe 2 0 = AUS 1 = EIN |
| STAT_RELAIS_BELHI2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Beladehilfe 2 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_BELHI3_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Beladehilfe 3 0 = AUS 1 = EIN |
| STAT_RELAIS_BELHI3_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Beladehilfe 3 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_BELHI4_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Beladehilfe 4 0 = AUS 1 = EIN |
| STAT_RELAIS_BELHI4_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Beladehilfe 4 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_PUMPE1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Pumpe 1 0 = AUS 1 = EIN |
| STAT_RELAIS_PUMPE2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Pumpe 2 0 = AUS 1 = EIN |
| STAT_RELAIS_RES1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Reserve 1 0 = AUS 1 = EIN |
| STAT_RELAIS_RES1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Reserve  1 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_RES2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais Reserve 2 0 = AUS 1 = EIN |
| STAT_RELAIS_RES2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Reserve 2 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_MOTOR_WINDLAUF_NR | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_WINDLAUF | 1.0 | 1.0 | 0.0 | Interpretation siehe Tabelle TAB_CVM_MOTOR_WINDLAUF |
| STAT_MOTOR_BELADEHILFE_NR | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_BELADEHILFE | 1.0 | 1.0 | 0.0 | Interpretation siehe Tabelle TAB_CVM_MOTOR_BELADEHILFE |
| STAT_MOTOR_SCA_NR | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_SCA | 1.0 | 1.0 | 0.0 | Interpretation siehe Tabelle TAB_CVM_MOTOR_SCA |

### RES_0XD2A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CV_NR | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_VERDECK | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_CV_BEDIENTASTER_VERDECK |
| STAT_TASTER_BELADEHILFE_NR | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_BELADEHILFE | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_CV_BEDIENTASTER_BELADEHILFE |

### RES_0XD2A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### RES_0XD2A6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_POS_DP_ABGEL_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_POS_DP_ABGEL_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_POS_DP_AUFGEST | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_DAEMPF_DACH_OEFF | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_DAEMPF_DACH_SCHLIE | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_WINDL_VERRIEG | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_WINDL_ENTRIEG | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_VKL_GESCHL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_VKL_BELHI_OFF | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_HECKMOD_GEDAEMPFT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_KOPPVER_RE_GESCHL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_KOPPVER_LI_GESCHL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_KOPPVER_RE_GEOEFF | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_WINDL_GRUPLA_LI_ERREICHT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_DACH_IN_BELADESTELL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_BELHI_VERSCHL_LI_OFF | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_BELHI_VERSCHL_RE_OFF | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_BELHI_VERSCHL_LI_GESCHL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_BELHI_VERSCHL_RE_GESCHL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |

### RES_0XD2A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORGANG_VERDECK_OEFFNEN_10_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Oeffnen Verdeck im Bereich ab 0-10 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_SCHLIESSEN_10_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich ab 0-10 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_OEFFNEN_30_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen Verdeck im Bereich ab 10-30 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_SCHLIESSEN_30_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich ab 10-30 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_OEFFNEN_50_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen Verdeck im Bereich ab 30-50 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_SCHLIESSEN_50_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich ab 30-50 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_OEFFNEN_300_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen Verdeck im Bereich >50 km/h |
| STAT_VORGANG_VERDECK_SCHLIESSEN_300_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich >50 km/h |
| STAT_BETAETIGUNG_VERDECK_BEI_KLEINER_0_GRAD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betätigungen bei kleiner 0 Grad Verdeck |
| STAT_BETAETIGUNG_BEI_MINUS_10_GRAD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis wird nicht benutzt |
| STAT_BEDIENUNG_FBD_SCHLIESSZYLINDER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Betätigung Verdeck über FBD oder Schließzylinder Bedienstelle |
| STAT_VORGANG_BELADEHILFE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Betätigung Beladehilfe |

### RES_0XD2A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_LETZT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzte maximale Geschwindigkeitsüberschreitung |
| STAT_DATUM_LETZT_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_LETZT_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_LETZT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der letzten Geschwindigkeitsüberschreitung |
| STAT_ATEMP_LETZT_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur der letzten Geschwindigkeitsüberschreitung |
| STAT_SENSOR_POS_DP_ABGEL_RECHTS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_ABGEL_LINKS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_AUFGEST_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket aufgestellt  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_OEFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil öffnen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_SCHLIE_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil schließen  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_VERRIEG_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf verriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_ENTRIEG_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf entriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_BELHI_OFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe Beladehilfe offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_HECKMOD_GEDAEMPFT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gedämpftes Heckmodul Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_LI_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GEOEFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geöffnet Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_GRUPLA_LI_ERREICHT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf Grundplatte links erreicht Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gepäckraumabtrennung in Position Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DACH_IN_BELADESTELL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_OFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_OFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss rechts offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_RESERVE1_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_GESCHWINDIGKEIT_MAX_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzte maximale Geschwindigkeitsüberschreitung |
| STAT_DATUM_MAX_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_MAX_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der maximalen Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_MAX_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der maximalen Geschwindigkeitsüberschreitung |
| STAT_ATEMP_MAX_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur der maximalen Geschwindigkeitsüberschreitung |
| STAT_SENSOR_POS_DP_ABGEL_RECHTS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_ABGEL_LINKS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_AUFGEST_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket aufgestellt  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_OEFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil öffnen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_SCHLIE_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil schließen  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_VERRIEG_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf verriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_ENTRIEG_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf entriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_BELHI_OFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe Beladehilfe offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_HECKMOD_GEDAEMPFT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gedämpftes Heckmodul Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_LI_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GEOEFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geöffnet Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_GRUPLA_LI_ERREICHT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf Grundplatte links erreicht Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gepäckraumabtrennung in Position Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DACH_IN_BELADESTELL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_OFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_OFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss rechts offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss rechts geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_RESERVE1_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Schaltzustand 0x00: Aus 0x01: Ein |

### RES_0XD2A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCA1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SCA  0x00: offen  0x01: zugezogen |
| STAT_SCA2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SCA  0x00: offen  0x01: zugezogen |

### RES_0XD2AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | 0-n | high | unsigned char | - | TAB_ANTENNENUMSCHALTUNG | - | - | - | Gibt an welches Antennensytem aktiv ist 0x00 Applikation 0x01 Heckscheibenantenne 0x02 Brüstungsantenne |

### RES_0XD2AB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_LETZT_WERT | m/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Letzte maximale überschreitung Querbeschleunigung |
| STAT_DATUM_LETZT_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_LETZTER_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_LETZT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometer der letzten Geschwindigkeitsüberschreitung |
| STAT_ATEMP_LETZT_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussen tempuratur der letzten Geschwindigkeitsüberschreitung |
| STAT_SENSOR_POS_DP_ABGEL_RECHTS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_ABGEL_LINKS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_AUFGEST_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket aufgestellt  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_OEFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil öffnen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_SCHLIE_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil schließen  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_VERRIEG_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf verriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_ENTRIEG_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf entriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_BELHI_OFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe Beladehilfe offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_HECKMOD_GEDAEMPFT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gedämpftes Heckmodul Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_LI_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GEOEFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geöffnet Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_GRUPLA_LI_ERREICHT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf Grundplatte links erreicht Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gepäckraumabtrennung in Position Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DACH_IN_BELADESTELL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_OFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_OFF_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss rechts offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_GESCHL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_RESERVE1_LETZTER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_QUERBESCHLEUNIGUNG_MAX_WERT | m/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Letzte maximale Geschwindigkeitsüberschreitung |
| STAT_DATUM_MAX_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum Max der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_MAX_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_MAX_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilomete der Max Geschwindigkeitsüberschreitung |
| STAT_ATEMP_MAX_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussen tempuratur der letzten Geschwindigkeitsüberschreitung |
| STAT_SENSOR_POS_DP_ABGEL_RECHTS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_ABGEL_LINKS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_DP_AUFGEST_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Dachpaket aufgestellt  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_OEFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil öffnen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DAEMPF_DACH_SCHLIE_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dämpfung Dachteil schließen  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_VERRIEG_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf verriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_ENTRIEG_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf entriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_BELHI_OFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe Beladehilfe offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_HECKMOD_GEDAEMPFT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gedämpftes Heckmodul Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_LI_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_KOPPVER_RE_GEOEFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Koppelverschluss rechts geöffnet Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_GRUPLA_LI_ERREICHT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf Grundplatte links erreicht Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Gepäckraumabtrennung in Position Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_DACH_IN_BELADESTELL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_OFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_OFF_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss rechts offen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_LI_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss links geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_BELHI_VERSCHL_RE_GESCHL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Beladehilfe Verschluss rechts geschlossen Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_RESERVE1_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Schaltzustand 0x00: Aus 0x01: Ein |

### RES_0XD2AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNG | 0-n | high | unsigned char | - | TAB_CV_VERRIEGELUNG | - | - | - | Status der Verriegelung (siehe TAB_CV_VERRIEGELUNG) |
| STAT_HALLZAEHLER_POS_VERRIEGELUNG_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Zählerstand Hallinkremente Verriegelung (kein Hallzähler vorhanden, wenn Wert -30000 ausgegeben wird) |

### RES_0XD2AF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GELENK_BELADEHILFE_LINKS | 0-n | high | unsigned char | - | TAB_CV_GELENK_BELADEHILFE | - | - | - | Status der Gelenk-Umschaltung für Beladehilfe links (siehe TAB_CV_GELENK_BELADEHILFE) |
| STAT_GELENK_BELADEHILFE_RECHTS | 0-n | high | unsigned char | - | TAB_CV_GELENK_BELADEHILFE | - | - | - | Status der Gelenk-Umschaltung für Beladehilfe rechts (siehe TAB_CV_GELENK_BELADEHILFE) |

### RES_0XD2B0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_SENSOR_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert des Temperatursensors (NTC) |
| STAT_TEMPERATUR_PUMPE | 0-n | high | unsigned char | - | TAB_CV_PUMPE_TEMPERATUR | - | - | - | Status Einschränkung des Pumpenbetriebs wegen Temperatur (siehe TAB_CV_PUMPE_TEMPERATUR) |
| STAT_SPANNUNG_GRENZWERT_PREALARM_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Grenzwert für Prealarm-Zustand |
| STAT_SPANNUNG_GRENZWERT_ALARM_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Grenzwert für Alarm-Zustand |

### RES_0XDDD5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_SCHALTZUSTAND_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gepäckraumabtrennung in Position Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_VERSORGUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Gepäckraumabtrennung in Position Versorgung 0 = Aus 1 = Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_FEHLERZUSTAND_NR | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Gepäckraumabtrennung in Position siehe Tabelle TAB_CV_SENSORIK_FEHLERZUSTAND |
| STAT_SCHALTER_RES1 | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XDDDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über BUS |
| STAT_TEMPERATUR_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Außentemperatur über BUS |
| STAT_HECKKLAPPE | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_HECKKLAPPE | 1.0 | 1.0 | 0.0 | Zustand Heckklappe Interpretation siehe Tabelle |
| STAT_FENSTER_FAT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_FATH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFTH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_POS_FENSTER_FAT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_FATH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFTH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_KOMFORT_FUNKTION | 0-n | high | unsigned char | - | TAB_CVM_KOMFORT_FUNKTION | 1.0 | 1.0 | 0.0 | Status Komfort Funktion Interpretation siehe Tabelle |
| STAT_MSA | 0-n | high | unsigned char | - | TAB_CVM_STAT_MSA | 1.0 | 1.0 | 0.0 | Status Motor Start Automatik |
| STAT_KLEMMEN | 0-n | high | unsigned char | - | TAB_CVM_KLEMMEN_STATUS | 1.0 | 1.0 | 0.0 | Status Zustand Klemmen Interpretation siehe Tabelle |
| STAT_VERBRAUCHERSTEUERUNG | 0-n | high | unsigned char | - | TAB_VERBRAUCHERSTEUERUNG | 1.0 | 1.0 | 0.0 | Status Verbrauchersteuerung Interpretation siehe Tabelle |
| STAT_FREIGABE_VERDECK | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | 1.0 | 1.0 | 0.0 | Status Freigabe Verdeck Interpretation siehe Tabelle |
| STAT_FREIGABE_FENSTER | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | 1.0 | 1.0 | 0.0 | Status Freigabe Fenster Interpretation siehe Tabelle |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Kilometerstand |
| STAT_RELATIVZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Relativzeit Fahrzeug |
| STAT_ZENTRALVERRIEGELUNG | 0-n | high | unsigned char | - | TAB_STAT_ZENTRALVERRIEGELUNG | - | - | - | Status Zentralverriegelung Fahrzeug Interpretation siehe Tabelle |

### RES_0XDDE1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERR_UNTERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_UEBERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_SENSORVERSORGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_VERDECKKASTENBODEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_BELADEHILFE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_KODIERDATEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_TIMEOUT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_POSITION_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SENSORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AKTORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_MOTOR_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_HYDRAULIKPUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_VENTILE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AUSSENTEMPERATUR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_HECKKLAPPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_STANDVERBRAUCHER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_MOTORSTART | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_NEIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_BESCHLEUNIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_GESCHWINDIGKEIT_FAHRT | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Sperrbedingung nicht relevant |
| STAT_SPERR_WIEDERHOLSPERRE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_FREIGABE_CV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_POSITION_VERDECK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SCHEIBEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |

### RES_0XDDE1_D_430

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERR_UNTERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_UEBERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_SENSORVERSORGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_VERDECKKASTENBODEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_BELADEHILFE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_KODIERDATEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_TIMEOUT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_POSITION_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SENSORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AKTORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_MOTOR_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_HYDRAULIKPUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_VENTILE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AUSSENTEMPERATUR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_HECKKLAPPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_STANDVERBRAUCHER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_MOTORSTART | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_NEIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_BESCHLEUNIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_WIEDERHOLSPERRE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_FREIGABE_CV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_POSITION_VERDECK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SCHEIBEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CV_STEUERN_TASTEN | 0xA1A4 | - | Verdeckansteuerung durch Simulation Tastenbedienung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A4_R | RES_0xA1A4_R |
| CV_AUSSTATTUNG | 0xD2A0 | - | Cabrioverdeck Ausstattung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A0_D |
| CV_SPANNUNGSVERSORGUNG | 0xD2A1 | - | Status Spannungsversorgung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A1_D |
| CV_AKTORIK_F33 | 0xD2A3 | - | Cabrioverdeck Aktorik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A3_D |
| CV_BEDIENTASTER | 0xD2A4 | - | Cabrioverdeck Bedientaster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A4_D |
| CV_FREIGABE | 0xD2A5 | - | Cabrioverdeck Freigabe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A5_D | RES_0xD2A5_D |
| CV_SENSORIK_F33 | 0xD2A6 | - | Cabrioverdeck Sensorik F33 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A6_D |
| CV_STATISTIKZAEHLER | 0xD2A7 | - | Cabrioverdeck Statistikzähler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A7_D | RES_0xD2A7_D |
| CV_ZUSATZINFO_GESCHWINDIGKEIT_VHT_F33 | 0xD2A8 | - | Variables Hard Top Zustatzinfo bei zu hoher Geschwindigkeit (F33) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD2A8_D | RES_0xD2A8_D |
| CV_SCA | 0xD2A9 | - | Status SCA offen oder geschlossen  Umsetzung CVD | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A9_D | RES_0xD2A9_D |
| CV_ANTENNEN_UMSCHALTUNG | 0xD2AA | - | Simuliert für das Antennensystem die Positionen des Daches (wird benutzt um die Heckscheiben oder Brüstungsantennen zu aktivieren) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD2AA_D | RES_0xD2AA_D |
| CV_ZUSATZINFO_QUERBESCHLEUNIGUNG_VHT_F33 | 0xD2AB | - | Variables Hardtop Zusatzinfo bei zu hoher Querbeschleunigung (F33). | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD2AB_D | RES_0xD2AB_D |
| CV_RELAIS | 0xD2AD | - | Relais Cabrioverdeck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD2AD_D | - |
| CV_VERRIEGELUNG | 0xD2AE | - | Windlaufverriegelung Cabrioverdeck | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2AE_D | RES_0xD2AE_D |
| CV_UMSCHALTUNG_BELADEHILFE | 0xD2AF | - | Umschaltung Gelenk Beladehilfe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD2AF_D | RES_0xD2AF_D |
| CV_TEMPERATURSENSOR | 0xD2B0 | - | Status Temperatursensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2B0_D |
| CV_POSITION_VERDECK | 0xDDD0 | STAT_VERDECK_POSITION | Status Verdeckposition Interpretation siehe Tabelle | 0-n | - | high | unsigned char | TAB_VERDECK_POSITION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CV_SCHALTER | 0xDDD5 | - | Cabrioverdeck Schalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD5_D |
| CV_BUS_IN_DATEN | 0xDDDF | - | Status Fahrzeug und Bordnetz | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDDF_D |
| CV_SPERRBEDINGUNGEN | 0xDDE1 | - | Cabrioverdeck Sperrbedingungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE1_D |
| CV_SPERRBEDINGUNGEN_430 | 0xDDE1 | - | Cabrioverdeck Sperrbedingungen Bugfix für I430 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE1_D_430 |
| _CV_STATUS_INTERN | 0x4000 | - | Auslesen ineterner Zustände | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4000 |
| _CV_SENSOREN | 0x4010 | - | Auslesen der aktuellen Sensorzustände | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4010 |
| _CV_ROHDATEN_SENSOREN | 0x4020 | - | Auslesen der Rohdaten der Anlogsensoren | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4020 |
| _CV_MOTORAUSGAENGE | 0x4050 | - | AD-Werte der Motorausgänge | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4050 |
| _CV_WIEDERHOLSPERREN | 0x4060 | - | Status der Wiederholsperre | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4060 |
| _CV_HELBAKO_SW_VERSION | 0x4100 | - | Auslesen CVI/CVL Sw-Version | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4100 |
| _CV_SENSORVERSORGUNG | 0x4201 | - | Aktivierung der Sensorversorgung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4201 | - |
| _CV_MESSBEREICH | 0x4211 | - | Strommessbereich der Motorausgänge LAS_C1_x ... LAS_A2_x | - | - | - | - | - | - | - | - | 0x24 | 2E | ARG_0x4211 | - |

### TAB_ANTENNENUMSCHALTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Heckscheibenantenne |
| 0x02 | Brüstungsantenne |

### TAB_BUTTON

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster betätigt |
| 0x03 | Kurzschluss nach Minus |
| 0x07 | Initialisierung |

### TAB_CVM_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht freigegeben |
| 0x01 | Freigegeben |
| 0xFF | Signal ungültig |

### TAB_CVM_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F Änderung |
| 0x04 | KL30F EIN |
| 0x05 | KL30B Änderung |
| 0x06 | KL30B EIN |
| 0x07 | KLR Änderung |
| 0x08 | KLR EIN |
| 0x09 | KL15 Änderung |
| 0x0A | KL15 EIN |
| 0x0B | KL50 Verzögerung |
| 0x0C | KL50 Änderung |
| 0x0D | KL50 EIN |
| 0x0E | Fehler |
| 0xFF | Signal ungültig |

### TAB_CVM_KOMFORT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Komfortöffnen |
| 0x02 | Komfortschließen |
| 0x05 | Komfortöffnen Schließzylinder |
| 0x06 | Komfortschließen Schließzylinder |
| 0x09 | Komfortöffnen Funkschlüssel |
| 0x0A | Komfortschließen Funkschlüssel |
| 0x0D | Komfortöffnen ID-Geber im Nahbereich |
| 0x0E | Komfortschließen ID-Geber im Nahbereich |
| 0x0B | Beladeposition anfahren |
| 0x08 | Beladeposition ablegen |
| 0xFF | Signal ungültig |

### TAB_CVM_MOTOR_BELADEHILFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Beladehilfe öffnet |
| 0x02 | Beladehilfe schließt |
| 0xFF | Status unbekannt |

### TAB_CVM_MOTOR_SCA

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | SCA öffnet |
| 0x02 | SCA schließt |
| 0xFF | Status unbekannt |

### TAB_CVM_MOTOR_WINDLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Windlauf öffnet |
| 0x02 | Windlauf schließt |
| 0xFF | Status unbekannt |

### TAB_CVM_SENSOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor nicht aktiv |
| 0x01 | Sensor aktiv |
| 0x02 | Signal ungültig |
| 0x03 | Kurzschluss nach Gnd |
| 0x04 | Strom zu gross |
| 0x05 | Kurzschluss nach +Ub |
| 0x06 | Versorgung abgeschaltet |
| 0x07 | Sensor nicht verbaut oder nicht initialisiert |

### TAB_CVM_STAT_MSA

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbrennungsmotor steht durch Fahrerwunsch |
| 0x08 | Verbrennungsmotor steht durch MSA-Anforderung |
| 0x04 | Startankündigung des Verbrennungsmotors durch Fahrerwunschq |
| 0x0C | Startankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x01 | Verbrennungsmotor startet durch Fahrerwunsch |
| 0x05 | Verbrennungsmotor startet durch MSA-Anforderung |
| 0x02 | Verbrennungsmotor läuft |
| 0x06 | Stopankündigung des Verbrennungsmotors durch Fahrerwunsch |
| 0x0E | Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x12 | Verbrennungsmotor im Auslauf durch Fahrerwunsch |
| 0x19 | Verbrennungsmotor im Auslauf durch MSA-Anforderung |
| 0x1E | Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung |
| 0xFF | Signal ungültig |

### TAB_CVM_ZUSTAENDE_FENSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Geoeffnet |
| 0xFF | Ungueltig |

### TAB_CVM_ZUSTAENDE_HECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Geöffnet |
| 0xFF | Ungültig |

### TAB_CV_ANSTEUERRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### TAB_CV_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Diagnose |

### TAB_CV_BEDIENANFORDERUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Bedienanforderung |
| 0x01 | Bedientaster Öffnen |
| 0x02 | Bedientaster Schließen |
| 0x05 | Komfortöffnen Türschloss |
| 0x06 | Komfortschließen Türschloss |
| 0x09 | Komfortöffnen ID-Geber |
| 0x0A | Komfortschließen ID-Geber |
| 0x11 | Komforöffnen Funkschlüssel |
| 0x12 | Komfortschließen Funkschlüssel |
| 0xFF | Bedienanforderung ungültig |

### TAB_CV_BEDIENTASTER_BELADEHILFE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Richtung öffnen betätigt |
| 0x02 | Richtung schließen betätigt |
| 0xFF | ungültig |

### TAB_CV_BEDIENTASTER_VERDECK

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Richtung öffnen betätigt |
| 0x02 | Richtung schließen betätigt |
| 0xFF | ungültig |

### TAB_CV_ELEMENT

| WERT | TEXT |
| --- | --- |
| 0x01 | Verdeck |
| 0x02 | Beladehilfe |
| 0x03 | Heckscheibe |

### TAB_CV_GELENK_BELADEHILFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Umschaltung Gelenk Beladehilfe steht |
| 0x01 | fährt in Position Beladefunktion |
| 0x02 | fährt in Position Dachfunktion |
| 0x04 | Umschaltung Gelank Fehler |
| 0xFF | Signal ungültig |

### TAB_CV_GELENK_BELADEHILFE_ANST

| WERT | TEXT |
| --- | --- |
| 0x00 | Umschaltung Gelenk Beladehilfe stopp |
| 0x01 | Position Beladefunktion anfahren |
| 0x02 | Position Dachfunktion anfahren |

### TAB_CV_PUMPE_TEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Einschränkung der Dachbewegung |
| 0x01 | Eingeschränkte Dachbewegung erlaubt |
| 0x02 | Dacbewegung gesperrt |
| 0xFF | Signal ungültig |

### TAB_CV_RELAIS

| WERT | TEXT |
| --- | --- |
| 0x01 | SCA 1 |
| 0x02 | SCA 2 |
| 0x03 | SCA 3 |
| 0x04 | Beladehilfe 1 |
| 0x05 | Beladehilfe 2 |
| 0x06 | Beladehilfe 3 |
| 0x07 | Windlaufverriegelung 1 |
| 0x08 | Windlaufverriegelung 2 |
| 0x09 | Relais 9 |
| 0x0A | Relais 10 |

### TAB_CV_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang auf Ubatt |
| 0x01 | Ausgang auf Masse |

### TAB_CV_SCA

| WERT | TEXT |
| --- | --- |
| 0x00 | SCA1 und SCA2 |
| 0x01 | SCA1 |
| 0x02 | SCA2 |

### TAB_CV_SCA_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | entriegeln |
| 0x01 | verriegeln |

### TAB_CV_SENSORIK_FEHLERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kurzschluss nach Masse oder Leitungsunterbrechung |
| 0x02 | Kurzschluss nach Ubatt |
| 0x03 | Signal ungültig |

### TAB_CV_SENSORIK_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor inaktiv |
| 0x01 | Sensor aktiv |
| 0x02 | Sensorsignal ungültig |
| 0x03 | Kurzschluss nach KL31 |
| 0x04 | Weicher Kurzschluss nach KL30 |
| 0x05 | Harter Kurzschluss nach KL30 |
| 0x06 | Versorgungsspannung ist abgeschaltet oder fehlerhaft |
| 0x07 | Sensor auscodiert oder noch nicht vorhanden |

### TAB_CV_STATUS_WIEDERHOLSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Änderung |
| 0x01 | Wiederholsperre nicht aktiv |
| 0x02 | Wiederholsperre aktiv |
| 0xff | Status ungültig |

### TAB_CV_STAT_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angekommen, Verfahren noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültig |

### TAB_CV_STAT_SPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Spannung ausgeschaltet |
| 0x01 | Normalspannung |
| 0x02 | Unterspannung |
| 0x03 | Überspannung |
| 0x04 | Spannung fehlerhaft |
| 0x05 | Spannung abgeschaltet, wegen Fehler |
| 0x07 | Positive Flanke an Spannung |
| 0x06 | Spannungsfilter Neustart |
| 0x0f | Initialisierung |

### TAB_CV_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verriegelung geschlossen |
| 0x01 | Verriegelung in Zwischenstellung |
| 0x02 | Verriegelung offen |
| 0x03 | Verriegelung nicht initialisiert |
| 0x04 | Blockfahrt |
| 0xFF | Signal ungültig |

### TAB_FF_SENSOREN

| WERT | TEXT |
| --- | --- |
| 0x0001 | Verdeck aufgestellt |
| 0x0002 | Verdeck abgelegt rechts |
| 0x0004 | Dämpfung Dachschalen schließen |
| 0x0008 | Dämpfung Dachschalen packen |
| 0x0010 | Verriegelung geschlossen |
| 0x0020 | Verriegelung offen |
| 0x0040 | Heckmodul geschlossen |
| 0x0080 | Heckmodul offen |
| 0x0100 | Heckmodul Dämpfung |
| 0x0140 | Heckmodul Dämpfung und Heckmodul geschlossen |
| 0x0200 | Koppelverschluss rechts geschlossen |
| 0x0400 | Koppelverschluss rechts offen |
| 0x0800 | Koppelverschluss links geschlossen |
| 0x0A00 | Koppelverschluss rechts und links geschlossen |
| 0x0C00 | Koppelverschluss rechts offen und Koppelverschluss links geschlossen |
| 0x1000 | Winlauf erreicht |
| 0x1004 | Dämpfung Dachschalen schließen und Winlauf erreicht |
| 0x2000 | Dach in Beladeposition |
| 0x4000 | Verdeck abgelegt links |
| 0x4002 | Verdeck abgelegt rechts und links |
| 0xFFFF | ungültiger Sensor |

### TAB_FF_SENSOREN_BELADEHILFE

| WERT | TEXT |
| --- | --- |
| 0x01 | Funktion Dachbewegung links |
| 0x02 | Funktion Dachbewegung rechts |
| 0x03 | Funktion Dachbewegung links und rechts |
| 0x04 | Funktion Beladeposition links |
| 0x08 | Funktion Beladeposition rechts |
| 0x0C | Funktion Beladeposition links und rechts |
| 0xFF | ungültiger Sensor |

### TAB_MESSBEREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | LOW_CURRENT |
| 0x01 | HIGH_CURRENT |
| 0x03 | DIAGNOSE_OFF |

### TAB_SENSOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | POS_DP_ABGEL_RE |
| 0x01 | POS_DP_AUFGEST |
| 0x02 | DAEMPF_DACH_OEFF |
| 0x03 | DAEMPF_DACH_SCHLIE |
| 0x04 | WINDL_VERRIEG |
| 0x05 | WINDL_ENTRIEG |
| 0x06 | VKL_GESCHL |
| 0x07 | VKL_BELHI_OFF |
| 0x08 | HECKMOD_GEDAEMPFT |
| 0x09 | KOPPVER_RE_GESCHL |
| 0x0A | KOPPVER_LI_GESCHL |
| 0x0B | KOPPVER_RE_GEOEFF |
| 0x0C | WINDL_GRUPLA_LI_ERREICHT |
| 0x0D | GEPAECK_ABTRENN_UNTEN |
| 0x0E | DACH_IN_BELADESTELL |
| 0x0F | BELHI_VERSCHL_LI_OFF |
| 0x10 | BELHI_VERSCHL_RE_OFF |
| 0x11 | BELHI_VERSCHL_LI_GESCHL |
| 0x12 | BELHI_VERSCHL_RE_GESCHL |
| 0x13 | POS_DP_ABGEL_LI |
| 0x14 | Reserve |

### TAB_STAT_BLH

| WERT | TEXT |
| --- | --- |
| 0x02 | Umschaltung Gelenk Heckmodul in Position Beladehilfsfunktion |
| 0x01 | Umschaltung Gelenk Heckmodul in Zwischenstellung |
| 0x00 | Umschaltung Gelenk Heckmodul in Position Dachfunktion |
| 0xFF | Signal ungültig |

### TAB_STAT_BUTTON_INSIDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Anforderung Verdeck öffnen |
| 0x02 | Anforderung Verdeck schließen |

### TAB_STAT_SCA

| WERT | TEXT |
| --- | --- |
| 0x00 | Softclose-Automatik zugezogen |
| 0x01 | Softclose-Automatik in Zwischenstellung |
| 0x02 | Softclose-Automatik offen zur Aufnahme |
| 0xFF | Signal ungültig |

### TAB_STAT_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 00 | Verriegelung geschlossen |
| 01 | Verriegelung in Zwischenstellung |
| 02 | Verriegellung offen |
| FF | Signal ungültig |

### TAB_STAT_ZENTRALVERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status empfangen |
| 0x01 | Mindestens eine Tür entriegelt |
| 0x02 | Mindestens eine Tür verriegelt |
| 0x03 | Mindestens eine Tür entriegelt / mind eine Tür verriegelt |
| 0x04 | interner ZV-Master gesichert |
| 0x05 | interner ZV-Master gesichert |
| 0x06 | interner ZV-Master gesichert |
| 0x07 | interner ZV-Master gesichert |
| 0x0f | Signal ungültig |

### TAB_VERBRAUCHERSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Spezielle Standverbraucher dürfen sich einschalten |
| 0x02 | Standverbraucher müssen sich abschalten |
| 0xFF | Signal ungültig |

### TAB_VERDECK_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Komplett geschlossen und verriegelt |
| 0x01 | Zwischenstellung |
| 0x02 | Komplett geöffnet und verriegelt |
| 0x03 | Beladeposition |
| 0x04 | Hardtop aufgesetzt |
| 0x05 | Komplett geschlossen |
| 0x06 | Komplett geöffnet |
| 0x08 | Notverriegelung durchgeführt |
| 0x09 | Beladehilfe in Zwischenstellung |
| 0xFF | Ungültig |
