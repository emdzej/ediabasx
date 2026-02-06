# fle02_l.prg

## General

|  |  |
| --- | --- |
| File | fle02_l.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 110 |
| Origin | BMW EK-532 Berwanger |
| Revision | 2.000 |
| Author | Automotive_Lighting ALRT/EEG-CA Martin_BRAUN |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Frontlichtelektronik links |  |  |
| ORIGIN | string | BMW EK-532 Berwanger |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | Automotive_Lighting ALRT/EEG-CA Martin_BRAUN |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.50 |  |  |
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
| 0x0000BE | Schaeffler Technologies |
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
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
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

### ARG_0X3000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 1 |
| STAT_LED_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 1 |
| STAT_LED_2_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 2 |
| STAT_LED_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 2 |
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
| STAT_LED_8_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 8 |
| STAT_LED_8_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 8 |
| STAT_LED_9_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 9 |
| STAT_LED_9_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 9 |
| STAT_LED_10_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1200.0 | Stromwert LED 10 |
| STAT_LED_10_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 10 |

### ARG_0XA540_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_LUEFTER_1 | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM für Lüfter 1 in Prozent |
| STAT_PWM_LUEFTER_2 | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM für Lüfter 2 in Prozent |

### ARG_0XA543_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_LED_LEUCHTMITTEL | - | - | - | - | - | Auswahl des LED Leuchtmittel |

### ARG_0XA545_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | + | - | ° | high | int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | Vorgabe Winkel, Wertebereich -25,0° ¿ 25,0 ° |
| GESCHWINDIGKEIT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | Wertebereich: 0...7 |

### ARG_0XA546_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | + | - | ° | high | int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | Vorgabe Winkel, Wertebereich -25,0° bis 25,0 ° |
| GESCHWINDIGKEIT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 31.0 | Wertebereich: 0...31 |

### ARG_0XD1FD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Loeschen JA/NEIN |

### ARG_0XD1FE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Loeschen JA/NEIN |

### ARG_0XD506_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1... Einlerndaten zurücksetzten 0...keine Aktion |

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

### ARG_0XD680_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1...Betriebsdauer zurücksetzen |

### ARG_0XDF0F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zähler löschen: 0 = keine Aktion 1 = Start |

### ARG_0XFD40_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERDATENBLOCK_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Scheinwerferdatenblock |

### ARG_0XFD58_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Werte löschen: 0 = Keine Aktion 1 = Start |

### BF_SCHEINWERFERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERHERSTELLER | 0-n | high | unsigned char | 0x0F | SCHEINWERFERHERSTELLER | - | - | - | Scheinwerferhersteller Bit 1-4 |
| STAT_SCHEINWERFERVARIANTE | 0-n | high | unsigned char | 0xF0 | SCHEINWERFERVARIANTE | - | - | - | Scheinwerfervariante Bit 5-8 |

### BF_VERSIONSINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFER_VERSIONSNUMMER | 0-n | high | unsigned char | 0x1F | - | - | - | - | Scheinwerferversionsnummer Bit 1-5 |
| STAT_FAHRZEUG_LENKERVERSION | 0-n | high | unsigned char | 0x20 | LENKERVERSION | - | - | - | Linkslenker oder Rechtslenker des Fahrzeugs Bit 6  |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FAHRZEUGVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | F01-F04 (+LCI) |
| 0x01 | F07 (+LCI) |
| 0x02 | F10/F11/F18 (+LCI) |
| 0x03 | F12/F13 |
| 0x04 | F25 |
| 0x05 | RR4/RR5/RR6 |
| 0x86 | F20/F21 |
| 0x87 | F22/F23 |
| 0x88 | F30/F31/F35 |
| 0x89 | F32/F33/F36 |
| 0x0A | RR01 |
| 0x8B | F34 |
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
| 0x40 | G11/G12 |
| 0x41 | G30/G31 |
| 0x42 | G01/G02 |
| 0x43 | G32 |
| 0x44 | G38 |
| 0x45 | G08 |
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
| 0x024300 | Energiesparmode aktiv | 0 |
| 0x024308 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x024309 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02430A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02430B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02430C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF43 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805980 | Binning 5: Fehler | 0 |
| 0x805981 | NTC 5: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805982 | Abbiegelicht / Autobahnlicht: Kurzschluss nach Masse | 0 |
| 0x805983 | Abbiegelicht / Autobahnlicht: Kurzschluss nach Plus | 0 |
| 0x805984 | NTC 5: Kurzschluss Temperatursensor | 0 |
| 0x805985 | Abbiegelicht / Autobahnlicht: Strangspannung außerhalb Toleranz | 0 |
| 0x805986 | NTC 6: Kurzschluss Temperatursensor | 0 |
| 0x805987 | Abbiegelicht / Autobahnlicht: Strangstrom außerhalb Toleranz | 0 |
| 0x805988 | Abbiegelicht / Autobahnlicht: Strangunterbrechung | 0 |
| 0x805989 | Binning 1: Fehler | 0 |
| 0x80598A | NTC 6: Leitungsunterbrechung Temperatursensor | 0 |
| 0x80598B | Abblendlicht 1: Kurzschluss nach Masse | 0 |
| 0x80598C | Abblendlicht 1: Kurzschluss nach Plus | 0 |
| 0x80598D | NTC 1: Kurzschluss Temperatursensor | 0 |
| 0x80598E | NTC 4: Leitungsunterbrechung Temperatursensor | 0 |
| 0x80598F | NTC 1: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805990 | Abblendlicht 1: Strangspannung außerhalb Toleranz | 0 |
| 0x805991 | Binning 6: Fehler | 0 |
| 0x805992 | Abblendlicht 1: Strangstrom außerhalb Toleranz | 0 |
| 0x805993 | Abblendlicht 1: Strangunterbrechung | 0 |
| 0x805994 | Abblendlicht 1: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805995 | Binning 2: Fehler | 0 |
| 0x805996 | NTC 7: Kurzschluss Temperatursensor | 0 |
| 0x805997 | NTC 7: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805998 | Fahrtrichtungsanzeiger: Teilweiser Ausfall der Leuchtmittel | 0 |
| 0x805999 | NTC 2: Kurzschluss Temperatursensor | 0 |
| 0x80599B | NTC 2: Leitungsunterbrechung Temperatursensor | 0 |
| 0x80599D | NTC 4: Kurzschluss Temperatursensor | 0 |
| 0x8059A1 | Binning 3: Fehler | 0 |
| 0x8059A3 | Fernlicht: Kurzschluss nach Masse | 0 |
| 0x8059A4 | Fernlicht: Kurzschluss nach Plus | 0 |
| 0x8059A5 | NTC 3: Kurzschluss Temperatursensor | 0 |
| 0x8059A7 | NTC 3: Leitungsunterbrechung Temperatursensor | 0 |
| 0x8059A8 | Fernlicht: Strangspannung außerhalb Toleranz | 0 |
| 0x8059AA | Fernlicht: Strangstrom außerhalb Toleranz | 0 |
| 0x8059AB | Fernlicht: Strangunterbrechung | 0 |
| 0x8059AC | Fernlicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x8059AE | Lüfter 1: Kurzschluss | 0 |
| 0x8059AF | Lüfter 1: Leitungsunterbrechung | 0 |
| 0x8059B4 | Binning 10: Fehler | 0 |
| 0x8059B5 | Binning 9: Fehler | 0 |
| 0x8059B6 | Binning 8: Fehler | 0 |
| 0x8059B7 | Binning 7: Fehler | 0 |
| 0x8059B8 | Binning 4: Fehler | 0 |
| 0x8059B9 | Abblendlicht - Aktivierung wegen unplausibler Eingangssignale | 1 |
| 0x8059BA | Interner Steuergerätefehler | 0 |
| 0x8059BB | Steuergerät: Temperatursensor defekt | 0 |
| 0x8059BC | Verbauorterkennung unplausibel | 0 |
| 0x8059BD | Unterspannung erkannt | 1 |
| 0x8059BE | Überspannung erkannt | 1 |
| 0x8059BF | Abbiegelicht / Autobahnlicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x8059C0 | Abblendlicht: Funktion defekt | 0 |
| 0x8059C4 | Variable Lichtverteilung: Funktion defekt | 0 |
| 0x8059D4 | Stellmotor Leuchtweitenregulierung: Treiber defekt | 0 |
| 0x8059D8 | Fahrtrichtungsanzeiger: Funktion defekt | 0 |
| 0x8059D9 | AHL: Sensorflanke fehlt | 0 |
| 0x8059DA | Seitenmarkierungsleuchte: Funktion defekt | 0 |
| 0x8059EC | Lüfter 2: Kurzschluss | 0 |
| 0x8059ED | Lüfter 2: Leitungsunterbrechung | 0 |
| 0x805C80 | Fahrtrichtungsanzeiger: Strangspannung außerhalb Toleranz | 0 |
| 0x805C81 | Fahrtrichtungsanzeiger: Strangstrom außerhalb Toleranz | 0 |
| 0x805C83 | Akzentleuchte: Kurzschluss nach Masse | 0 |
| 0x805C84 | Akzentleuchte: Kurzschluss nach Plus | 0 |
| 0x805C8B | Akzentleuchte: Strangunterbrechung | 0 |
| 0x805C8C | Akzentleuchte: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805C93 | Fahrtrichtungsanzeiger: Kurzschluss nach Masse | 0 |
| 0x805C94 | Fahrtrichtungsanzeiger: Kurzschluss nach Plus | 0 |
| 0x805C9B | Fahrtrichtungsanzeiger: Strangunterbrechung | 0 |
| 0x805C9C | Fahrtrichtungsanzeiger: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805C9E | Fahrtrichtungsanzeiger: Ansteuerung unplausibel | 1 |
| 0x805CA3 | Seitenmarkierungsleuchte: Kurzschluss nach Masse | 0 |
| 0x805CA4 | Seitenmarkierungsleuchte: Kurzschluss nach Plus | 0 |
| 0x805CAB | Seitenmarkierungsleuchte: Strangunterbrechung | 0 |
| 0x805CAC | Seitenmarkierungsleuchte: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805CB2 | Tagfahrlicht: Funktion defekt | 0 |
| 0x805CB4 | Tagfahrlicht: Kurzschluss nach Masse | 0 |
| 0x805CB5 | Tagfahrlicht: Kurzschluss nach Plus | 0 |
| 0x805CBC | Tagfahrlicht: Strangunterbrechung | 0 |
| 0x805CBD | Tagfahrlicht: Übertemperatur 2 (Abschaltung) | 1 |
| 0x805CCA | Stellmotor Kurvenlicht: Kurzschluss oder Leitungsunterbrechung an Wicklung 1 | 0 |
| 0x805CD2 | Stellmotor Kurvenlicht: Übertemperatur (Abschaltung) | 1 |
| 0x805CD3 | Stellmotor Leuchtweitenregulierung: Kurzschluss oder Leitungsunterbrechung an Wicklung 1 | 0 |
| 0x805CDB | Stellmotor Leuchtweitenregulierung: Übertemperatur (Abschaltung) | 1 |
| 0x805CE1 | DWA Blinken: Funktion  defekt | 0 |
| 0x805CE2 | Abbiegelicht: Funktion defekt | 0 |
| 0x805CE3 | Fernlicht/Lichthupe: Funktion  defekt | 0 |
| 0x805CE4 | Fernlichtblinken: Funktion defekt | 0 |
| 0x805CE5 | Follow Me Home: Funktion  defekt | 0 |
| 0x805CE6 | Panik Blinken: Funktion  defekt | 0 |
| 0x805CE7 | Parklicht: Funktion defekt | 0 |
| 0x805CE9 | Remote Light: Funktion  defekt | 0 |
| 0x805CEB | Standlicht: Funktion defekt | 0 |
| 0x805CEC | Überfallalarm: Funktion defekt | 0 |
| 0x805CEE | Welcome Light: Funktion defekt | 0 |
| 0x805D05 | Akzentleuchte: Strangspannung außerhalb Toleranz | 0 |
| 0x805D06 | Akzentleuchte: Strangstrom außerhalb Toleranz | 0 |
| 0x805D07 | Seitenmarkierungsleuchte: Strangstrom außerhalb Toleranz | 0 |
| 0x805D08 | Seitenmarkierungsleuchte: Strangspannung außerhalb Toleranz | 0 |
| 0x805D09 | Tagfahrlicht: Strangstrom außerhalb Toleranz | 0 |
| 0x805D0A | Tagfahrlicht: Strangspannung außerhalb Toleranz | 0 |
| 0x805D0B | Stellmotor Kurvenlicht: Treiber defekt | 0 |
| 0xD9C45F | BODY-CAN Physikalischer Busfehler | 0 |
| 0xD9C468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD9C50B | B2-CAN Physikalischer Busfehler | 0 |
| 0xD9C514 | B2-CAN Control Module Bus OFF | 0 |
| 0xD9CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD9CC00 | LIN:Allgemeiner Fehler Signal-Timeout | 0 |
| 0xD9D400 | Botschaft (Blinken): Timeout | 1 |
| 0xD9D401 | Botschaft (Steuerung_Licht_außen 2): Timeout | 1 |
| 0xD9D402 | Botschaft (Steuerung_Licht_außen): Timeout | 1 |
| 0xD9EC00 | Signal (Status_Blinken): ungültig | 1 |
| 0xD9EC01 | Signal (Alive_Steuerung_Licht_Außen_2): ungültig | 1 |
| 0xD9EC02 | Signal (CRC_Steuerung_Licht_Außen_2): ungültig | 1 |
| 0xD9EC03 | Signal (Steuerung_Funktion_Abbiegelicht_links): ungültig | 1 |
| 0xD9EC04 | Signal (Steuerung_Funktion_Abblendlicht_links): ungültig | 1 |
| 0xD9EC05 | Signal (Steuerung_Lichtverteilung_Fahrlicht_links): ungültig | 1 |
| 0xD9EC06 | Signal (Steuerung_Modus_Funktion_Sonderblinken): ungültig | 1 |
| 0xD9EC07 | Signal (Steuerung_Phase_Funktion_Sonderblinken): ungültig | 1 |
| 0xD9EC08 | Signal (Steuerung_Funktion_Begrüßungslicht): ungültig | 1 |
| 0xD9EC09 | Signal (Steuerung_Funktion_Heimleuchten): ungültig | 1 |
| 0xD9EC0A | Signal (Steuerung_Funktion_Parklicht): ungültig | 1 |
| 0xD9EC0B | Signal (Steuerung_Funktion_Remote-Light): ungültig | 1 |
| 0xD9EC0C | Signal (Steuerung_Funktion_Standlicht): ungültig | 1 |
| 0xD9EC0D | Signal (Steuerung_Funktion_Tagfahrlicht): ungültig | 1 |
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
| 0x430101 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x430102 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x430106 | Steuergerät: Übertemperatur 1 | 0 |
| 0x430107 | LED Ausgang 5: Übertemperatur 1 (Degradation) | 1 |
| 0x430108 | LED Ausgang 1: Übertemperatur 1 (Degradation) | 1 |
| 0x430109 | LED Ausgang 2: Übertemperatur 1 (Degradation) | 1 |
| 0x43010A | LED Ausgang 3: Übertemperatur 1 (Degradation) | 1 |
| 0x43010B | Reset | 0 |
| 0x43010C | Watchdog hat Reset ausgelöst | 0 |
| 0x43010D | Stellmotor Leuchtweitenregulierung: Übertemperatur (Warnung) | 1 |
| 0x43010E | Stellmotor Leuchtweitenregulierung: Referenzierung wegen Unterspannung abgebrochen | 1 |
| 0x43010F | Stellmotor Leuchtweitenregulierung: Bewegung wegen Unterspannung abgebrochen | 1 |
| 0x430110 | Stellmotor Leuchtweitenregulierung: Bewegung wegen Überspannung abgebrochen | 1 |
| 0x430111 | Modus für Watchdog Manager kann nicht gesetzt werden | 0 |
| 0x430112 | Modus für CAN-Transceiver kann nicht gesetzt werden | 0 |
| 0x430113 | CAN State-Manager Zustandsübergänge fehlgeschlagen | 0 |
| 0x430114 | Unerwarteter NM-Timeout (außerhalb Ready Sleep State) | 0 |
| 0x430115 | NM Initialisierung fehlgeschlagen | 0 |
| 0x430116 | Transmit-Error im NM | 0 |
| 0x430117 | NVM-Zugriff fehlgeschlagen | 0 |
| 0x430118 | Korrupte NVM-Data erkannt | 0 |
| 0x430119 | Inkonsistente Mode-Einstellungen bei Watchdog Zustandswechsel erkannt | 0 |
| 0x43011A | CRC-Checksum Fehler | 0 |
| 0x43011B | Interner Fehler im CSM erkannt | 0 |
| 0x43011D | HardReset ausgeführt | 1 |
| 0x43011E | RAM-Hash-Fehler erkannt | 0 |
| 0x43011F | Fehler bei NVM-Lesezugriff erkannt | 0 |
| 0x430120 | Fehler bei NVM-Schreibzugriff erkannt | 0 |
| 0x430121 | Senden einer I-PDU fehlgeschlagen | 0 |
| 0x430122 | Fehlerhafter Quarz-Betrieb des Controllers | 0 |
| 0x430124 | Data Flash Format Fehler erkannt | 0 |
| 0x430125 | Fehler des Data Flash bei Startup erkannt | 0 |
| 0x430126 | Unerlaubter Schreibzugriff im MCU-Treiber | 0 |
| 0x430127 | Fehler bei Schreibzugriff im MCU-Treiber während der Shut-Down-Phase | 0 |
| 0x430128 | Unerlaubter Schreibzugriff auf Prozessorregister | 0 |
| 0x430129 | Überlauf SPI-Empfangspuffer | 0 |
| 0x43012A | LED Ausgang 7: Übertemperatur 1 (Degradation) | 1 |
| 0x43012B | LED Ausgang 6: Übertemperatur 1 (Degradation) | 1 |
| 0x43012C | LED Ausgang 4: Übertemperatur 1 (Degradation) | 1 |
| 0x43012D | ChargePump nicht abschaltbar | 0 |
| 0x43012E | Controller nicht abschaltbar | 0 |
| 0x43012F | Interner SG-Konfigurationsfehler | 0 |
| 0x430130 | Fehler im PWM-Treiber | 0 |
| 0x430131 | Interner CRC-Fehler der Datensicherung für sicherheitsrelevante Steuersignale | 0 |
| 0x430132 | LED Ausgang 8: Übertemperatur 1 (Degradation) | 1 |
| 0x430133 | LED Ausgang 9: Übertemperatur 1 (Degradation) | 1 |
| 0x430134 | LED Ausgang 10: Übertemperatur 1 (Degradation) | 1 |
| 0x430140 | Power-Down-Befehl 11 04 | 1 |
| 0x430143 | Booster defekt | 0 |
| 0x43016D | Stellmotor Kurvenlicht: Übertemperatur (Warnung) | 1 |
| 0x43016E | Stellmotor Kurvenlicht: Referenzierung wegen Unterspannung abgebrochen | 1 |
| 0x43016F | Stellmotor Kurvenlicht: Bewegung wegen Unterspannung abgebrochen | 1 |
| 0x430170 | Stellmotor Kurvenlicht: Bewegung wegen Überspannung abgebrochen | 1 |
| 0x4301F4 | LED Ausgang 1: Kurzschluss nach Masse | 0 |
| 0x4301F5 | LED Ausgang 1: Kurzschluss nach Plus | 0 |
| 0x4301F6 | LED Ausgang 1: Strangunterbrechung | 0 |
| 0x4301F7 | LED Ausgang 1: Strangspannung außerhalb Toleranz | 0 |
| 0x4301F8 | LED Ausgang 1: Strangsstrom außerhalb Toleranz | 0 |
| 0x4301F9 | LED Ausgang 1: Übertemperatur 2 (Abschaltung) | 1 |
| 0x4301FA | LED Ausgang 2: Kurzschluss nach Masse | 0 |
| 0x4301FB | LED Ausgang 2: Kurzschluss nach Plus | 0 |
| 0x4301FC | LED Ausgang 2: Strangunterbrechung | 0 |
| 0x4301FD | LED Ausgang 2: Strangspannung außerhalb Toleranz | 0 |
| 0x4301FE | LED Ausgang 2: Strangsstrom außerhalb Toleranz | 0 |
| 0x4301FF | LED Ausgang 2: Übertemperatur 2 (Abschaltung) | 1 |
| 0x430200 | LED Ausgang 3: Kurzschluss nach Masse | 0 |
| 0x430201 | LED Ausgang 3: Kurzschluss nach Plus | 0 |
| 0x430202 | LED Ausgang 3: Strangunterbrechung | 0 |
| 0x430203 | LED Ausgang 3: Strangspannung außerhalb Toleranz | 0 |
| 0x430204 | LED Ausgang 3: Strangsstrom außerhalb Toleranz | 0 |
| 0x430205 | LED Ausgang 3: Übertemperatur 2 (Abschaltung) | 1 |
| 0x430206 | LED Ausgang 4: Kurzschluss nach Masse | 0 |
| 0x430207 | LED Ausgang 4: Kurzschluss nach Plus | 0 |
| 0x430208 | LED Ausgang 4: Strangunterbrechung | 0 |
| 0x430209 | LED Ausgang 4: Strangspannung außerhalb Toleranz | 0 |
| 0x43020A | LED Ausgang 4: Strangsstrom außerhalb Toleranz | 0 |
| 0x43020B | LED Ausgang 4: Übertemperatur 2 (Abschaltung) | 1 |
| 0x43020C | LED Ausgang 5: Kurzschluss nach Masse | 0 |
| 0x43020D | LED Ausgang 5: Kurzschluss nach Plus | 0 |
| 0x43020E | LED Ausgang 5: Strangunterbrechung | 0 |
| 0x43020F | LED Ausgang 5: Strangspannung außerhalb Toleranz | 0 |
| 0x430210 | LED Ausgang 5: Strangsstrom außerhalb Toleranz | 0 |
| 0x430211 | LED Ausgang 5: Übertemperatur 2 (Abschaltung) | 1 |
| 0x430212 | LED Ausgang 6: Kurzschluss nach Masse | 0 |
| 0x430213 | LED Ausgang 6: Kurzschluss nach Plus | 0 |
| 0x430214 | LED Ausgang 6: Strangunterbrechung | 0 |
| 0x430215 | LED Ausgang 6: Strangspannung außerhalb Toleranz | 0 |
| 0x430216 | LED Ausgang 6: Strangsstrom außerhalb Toleranz | 0 |
| 0x430217 | LED Ausgang 6: Übertemperatur 2 (Abschaltung) | 1 |
| 0x430218 | LED Ausgang 7: Kurzschluss nach Masse | 0 |
| 0x430219 | LED Ausgang 7: Kurzschluss nach Plus | 0 |
| 0x43021A | LED Ausgang 7: Strangunterbrechung | 0 |
| 0x43021B | LED Ausgang 7: Strangspannung außerhalb Toleranz | 0 |
| 0x43021C | LED Ausgang 7: Strangsstrom außerhalb Toleranz | 0 |
| 0x43021D | LED Ausgang 7: Übertemperatur 2 (Abschaltung) | 1 |
| 0x43021E | LED Ausgang 8: Kurzschluss nach Masse | 0 |
| 0x43021F | LED Ausgang 8: Kurzschluss nach Plus | 0 |
| 0x430220 | LED Ausgang 8: Strangunterbrechung | 0 |
| 0x430221 | LED Ausgang 8: Strangspannung außerhalb Toleranz | 0 |
| 0x430222 | LED Ausgang 8: Strangsstrom außerhalb Toleranz | 0 |
| 0x430223 | LED Ausgang 8: Übertemperatur 2 (Abschaltung) | 1 |
| 0x430224 | LED Ausgang 9: Kurzschluss nach Masse | 0 |
| 0x430225 | LED Ausgang 9: Kurzschluss nach Plus | 0 |
| 0x430226 | LED Ausgang 9: Strangunterbrechung | 0 |
| 0x430227 | LED Ausgang 9: Strangspannung außerhalb Toleranz | 0 |
| 0x430228 | LED Ausgang 9: Strangsstrom außerhalb Toleranz | 0 |
| 0x430229 | LED Ausgang 9: Übertemperatur 2 (Abschaltung) | 1 |
| 0x43022A | LED Ausgang 10: Kurzschluss nach Masse | 0 |
| 0x43022B | LED Ausgang 10: Kurzschluss nach Plus | 0 |
| 0x43022C | LED Ausgang 10: Strangunterbrechung | 0 |
| 0x43022D | LED Ausgang 10: Strangspannung außerhalb Toleranz | 0 |
| 0x43022E | LED Ausgang 10: Strangsstrom außerhalb Toleranz | 0 |
| 0x43022F | LED Ausgang 10: Übertemperatur 2 (Abschaltung) | 1 |
| 0xD9D500 | Botschaft (Fahrgestellnummer): Timeout | 1 |
| 0xD9D501 | Botschaft (Klemmen): Timeout | 1 |
| 0xD9D502 | Botschaft (A_Temp): Timeout | 1 |
| 0xD9D503 | Botschaft (V_Veh): Timeout | 1 |
| 0xD9D504 | Botschaft (St_Op_Lp_Ex): Timeout | 1 |
| 0xD9D505 | Botschaft (KmStand): Timeout | 1 |
| 0xD9D506 | Botschaft (Ctr_Lp_Ex2_Info): Timeout | 1 |
| 0xD9D507 | Botschaft (Fahrzeugzustand): Timeout | 1 |
| 0xD9D508 | Botschaft (Relativzeit): Timeout | 1 |
| 0xD9ED00 | Signal (Nummer_Fahrgestell_1): ungültig | 1 |
| 0xD9ED01 | Signal (Nummer_Fahrgestell_2): ungültig | 1 |
| 0xD9ED02 | Signal (Nummer_Fahrgestell_3): ungültig | 1 |
| 0xD9ED03 | Signal (Nummer_Fahrgestell_4): ungültig | 1 |
| 0xD9ED04 | Signal (Nummer_Fahrgestell_5): ungültig | 1 |
| 0xD9ED05 | Signal (Nummer_Fahrgestell_6): ungültig | 1 |
| 0xD9ED06 | Signal (Nummer_Fahrgestell_7): ungültig | 1 |
| 0xD9ED07 | Signal (Temp_Ex): ungültig | 1 |
| 0xD9ED08 | Signal (V_Veh_Cog): ungültig | 1 |
| 0xD9ED09 | Signal (St_Lp_Sw): ungültig | 1 |
| 0xD9ED0A | Signal (St_Kl): ungültig | 1 |
| 0xD9ED0B | Signal (Crc_Kl, Alive_Kl): ungültig | 1 |
| 0xD9ED0C | Signal (Crc_V_Veh, Alive_V_Veh): ungültig | 1 |
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

### LENKERVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | Linkslenker |
| 0x20 | Rechtslenker |

### RES_0X3000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 1 |
| STAT_LED_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 1 |
| STAT_LED_2_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 2 |
| STAT_LED_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 2 |
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
| STAT_LED_8_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 8 |
| STAT_LED_8_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 8 |
| STAT_LED_9_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 9 |
| STAT_LED_9_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 9 |
| STAT_LED_10_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 10 |
| STAT_LED_10_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 10 |
| STAT_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Prozessstatus: 1...aktiv 0...nicht aktiv |

### RES_0XA538_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZLAUF_ERGEBNIS | - | - | + | 0-n | high | unsigned char | - | TAB_AHL_REFERENZLAUF | - | - | - | Ergebnisse TAB_AHL_REFERENZLAUF |

### RES_0XA540_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_1 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1...ein 0...aus |
| STAT_LUEFTER_2 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1...ein 0...aus |

### RES_0XA541_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZLAUF_ERGEBNIS | - | - | + | 0-n | high | unsigned char | - | TAB_LWR_REFERENZLAUF | - | - | - | Ergebnisse TAB_LWR_REFERENZLAUF |

### RES_0XA542_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKTIONSTEST_LED_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_4_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_5_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_6_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_7_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_8_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_9_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LED_10_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_TEMPERATURSENSOREN_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LUEFTER_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LUEFTER_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LR_ERKENNUNG_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_AHL_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |
| STAT_FUNKTIONSTEST_LWR_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ergebnis Systemtest: 0...mit Fehler beendet 1...ohne Fehler beendet 2...noch nicht beendet |

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

### RES_0XA546_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_WERT | - | - | + | ° | high | int | - | - | 1.0 | 10.0 | 0.0 | Position AHL in Grad |
| STAT_AHL_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_POS_AHL | - | - | - | Job Status |

### RES_0XD1FD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZLAUF_BEGONNEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der begonnenen Referenzläufe |
| STAT_REFERENZLAUF_ABGESCHLOSSEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der abgeschlossenen Referenzläufe |

### RES_0XD1FE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZLAUF_BEGONNEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der begonnenen Referenzläufe |
| STAT_REFERENZLAUF_ABGESCHLOSSEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der abgeschlossenen Referenzläufe |

### RES_0XD506_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPG_FIRST_REF_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Initialwert der Referenz-Spannung (wird nur beim Einlernen gespeichert) |
| STAT_SPG_REF_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktueller Wert der Referenz-Spannung |
| STAT_STROM_REF_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Referenz-Strom (wird nur beim Einlernen gespeichert) |
| STAT_TEMP_REF_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Referenz-Temperatur (wird nur beim Einlernen gespeichert) |
| STAT_EINLERN_STATUS | 0-n | high | unsigned char | - | TAB_EINLERNDATEN_STATUS | - | - | - | Einlern-Status der N-1-Ausfallerkennung (wird nur beim Einlernen gespeichert): 0 = nicht eingelernt, 1 = links eingelernt, 2 = rechts eingelernt  |
| STAT_NVM_STATUS | 0-n | high | unsigned char | - | TAB_EINLERNDATEN_NVM_STATUS | - | - | - | Status der Speicherung der Einlerndaten im Flash (NvM) im aktuellen Betriebszyklus. Dieser Wert selbst wird nicht im Einlerndatensatz mit gespeichert. Wenn NVM_REQ_PENDING oder NVM_REQ_DENIED ausgelesen wird, muß dieser DID so lange gelesen werden, bis ein anderer Status zurückgegeben wird. 0 = NVM_OK, 1 = NVM_NOT_OK, 2 = NVM_REQ_PENDING, 3 = NVM_REQ_DENIED, 4 = NVM_SHUTDOWNWRITE  |
| STAT_RESERVED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zukünftige Erweiterungen |
| STAT_RESERVED_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zukünftige Erweiterungen |
| STAT_RESERVED_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zukünftige Erweiterungen |
| STAT_RESERVED_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zukünftige Erweiterungen |
| STAT_RESERVED_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zukünftige Erweiterungen |
| STAT_RESERVED_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zukünftige Erweiterungen |

### RES_0XD529_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_SIGNAL_1 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_2 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_3 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_4 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_5 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_6 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_7 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_8 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_9 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_10 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_11 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_12 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_13 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_14 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |
| STAT_VERBAU_SIGNAL_15 | 0-n | high | unsigned char | - | TAB_LEUCHTEN_SENSOR | - | - | - | Verbau: Siehe Tabelle TAB_LEUCHTEN_SENSOR |

### RES_0XD630_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 1 |
| STAT_SENSOR_2_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 2 |
| STAT_SENSOR_3_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 3 |
| STAT_SENSOR_4_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 4 |
| STAT_SENSOR_5_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 5 |
| STAT_SENSOR_6_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 6 |
| STAT_SENSOR_7_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 7 |
| STAT_SENSOR_8_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp Sensor 8 |
| STAT_TEMP_LEUCHTMITTEL_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp LM 1 |
| STAT_TEMP_LEUCHTMITTEL_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temp LM 2 |
| STAT_TEMP_LEUCHTMITTEL_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |
| STAT_TEMP_LEUCHTMITTEL_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Status berechnete Leuchtmitteltemperatur |

### RES_0XD631_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 1 |
| STAT_LED_1_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 1 |
| STAT_LED_2_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 2 |
| STAT_LED_2_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 2 |
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
| STAT_LED_8_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 8 |
| STAT_LED_8_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 8 |
| STAT_LED_9_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 9 |
| STAT_LED_9_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 9 |
| STAT_LED_10_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Strom Wert LED 10 |
| STAT_LED_10_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 10 |

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
| STAT_SENSOR_7_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 7 T1 |
| STAT_SENSOR_7_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 7 T2 |
| STAT_SENSOR_7_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 7 T3 |
| STAT_SENSOR_7_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 7 T4 |
| STAT_SENSOR_7_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 7 T5 |
| STAT_SENSOR_7_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 7 T6 |
| STAT_SENSOR_8_TEMPKLASSE_1_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 8 T1 |
| STAT_SENSOR_8_TEMPKLASSE_2_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 8 T2 |
| STAT_SENSOR_8_TEMPKLASSE_3_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 8 T3 |
| STAT_SENSOR_8_TEMPKLASSE_4_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 8 T4 |
| STAT_SENSOR_8_TEMPKLASSE_5_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 8 T5 |
| STAT_SENSOR_8_TEMPKLASSE_6_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | S 8 T6 |

### RES_0XD634_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer AL |
| STAT_LED_2_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer AL |
| STAT_LED_3_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 3 |
| STAT_LED_4_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 4 |
| STAT_LED_5_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 5 |
| STAT_LED_6_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 6 |
| STAT_LED_7_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 7 |
| STAT_LED_8_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 8 |
| STAT_LED_9_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 9 |
| STAT_LED_10_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer LED 10 |
| STAT_LUEFTER_1_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer Lüfter 1 |
| STAT_LUEFTER_2_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Betriebsdauer Lüfter 2 |
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
| STAT_BINNING_8_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_8_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_9_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_9_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_10_WERT | kOhm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_BINNING_10_KLASSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |

### RES_0XD639_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_1_VERSORGUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannnung |
| STAT_LUEFTER_1_DIAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_LUEFTER_1_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert |
| STAT_LUEFTER_2_VERSORGUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannnung |
| STAT_LUEFTER_2_DIAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | * |
| STAT_LUEFTER_2_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert |

### RES_0XD63A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_1_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_2_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_3_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_4_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_5_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_6_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_7_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_8_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_9_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
| STAT_LED_10_VERBAU | 0-n | high | unsigned char | - | TAB_LEUCHTMITTEL | - | - | - | siehe TAB_LEUCHTMITTEL |
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
| STAT_AHL_MOTOR_VERBAU | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_LUEFTER_1_VERBAU | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |
| STAT_LUEFTER_2_VERBAU | 0-n | high | unsigned char | - | TAB_FUNKTION_FLE | - | - | - | 0...nicht verbaut 1...verbaut, aktiv 2...verbaut, nicht aktiv |

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
| STAT_FAHRZEUGTYP | 0-n | high | unsigned char | - | FAHRZEUGVARIANTE | - | - | - | Fahrzeugtyp aus Tabelle |
| - | Bit | high | BITFIELD | - | BF_SCHEINWERFERINFO | - | - | - | Variante |
| - | Bit | high | BITFIELD | - | BF_VERSIONSINFO | - | - | - | Auslesen der Scheinwerferversionsnummer |

### RES_0XD662_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIEFTEMPERATUR_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 1...aktiv 0...nicht aktiv |
| STAT_HOCHTEMPERATUR_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 1...aktiv 0...nicht aktiv |

### RES_0XD680_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALTESTROM_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | Lesen der Betriebsdauer des Haltestrom AHL Motor |
| STAT_VERSTELLSTROM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lesen der Betriebsdauer des Verstellstrom AHL Motor |
| STAT_VERSTELLUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Verstellungen LWR Motor |

### RES_0XDF0F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTVERLUST_BEREICH_1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 1 |
| STAT_SCHRITTVERLUST_BEREICH_2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 2 |
| STAT_SCHRITTVERLUST_BEREICH_3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 3 |
| STAT_SCHRITTVERLUST_BEREICH_4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 4 |
| STAT_SCHRITTVERLUST_BEREICH_5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 5 |
| STAT_SCHRITTVERLUST_BEREICH_6_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 6 |

### RES_0XFD40_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERDATENBLOCK_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Scheinwerferdatenblock |

### RES_0XFD41_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRAZ_STATUS_MESSUNG | 0-n | high | unsigned char | - | TAB_FRAZ_MESSUNG | - | - | - | Zustand der Auswertung der Messung |
| STAT_FRAZ_LEITUNGSZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Zustand der FRAZ-Leitung |
| STAT_FRAZ_SPG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FRAZ-Spannungswert während der letzen EIN-Phase des Blinkers |
| STAT_FRAZ_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | FRAZ-Stromwert während der letzten EIN-Phase des Blinkers |
| STAT_FRAZ_TEMP_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | FRAZ-Temperatur während der letzten EIN-Phase des Blinkers |
| STAT_SG_TEMP_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Steuergeräte-Temperatur während der letzten EIN-Phase des Blinkers |
| STAT_FRAZ_SPG_KOMP_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller kompensierter Spannungswert |
| STAT_FRAZ_SOLLSTROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Vorgegebener Stromwert |
| STAT_FRAZ_SOLLPWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorgegebener Duty Cycle |
| STAT_FRAZ_SPG_KOMP_AVG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlicher kompensierter Spannungswert |
| STAT_FRAZ_STATUS_MESSUNG_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interner Status der Messung |
| STAT_FRAZ_MESSUNG_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Messung inaktiv, 1 = Messung aktiv |

### RES_0XFD43_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_NR_IMPLAUSIBEL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Plausibilitätsprüfung in Block-Nr. x (bzgl. UDS-Block-Id 0x3000 + x) ist negativ (wobei Default 0xFF = 255 gilt). |
| STAT_GRUND_IMPLAUSIBEL | 0-n | high | unsigned char | - | TAB_GRUND_IMPLAUSIBEL | - | - | - | Grund der negativen Plausibilitätsprüfung (wobei Default 0 gilt) |

### RES_0XFD44_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_VBAT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 0: Versorgungsspannung |
| STAT_A_U_FAN_2_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 1: Spannung Lüfter 2 |
| STAT_LR_DETECT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 2: Links-Rechts-Verbauorterkennung |
| STAT_A_U_FAN_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 3: Spannung Lüfter 1 |
| STAT_TEMP_PCB_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 4: Temperatur der Platine |
| STAT_RBIN_NTC_1_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 5: Binning-/NTC-Eingang 1 |
| STAT_RBIN_NTC_2_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 6: Binning-/NTC-Eingang 2 |
| STAT_RBIN_NTC_3_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 7: Binning-/NTC-Eingang 3 |
| STAT_RBIN_NTC_4_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 8: Binning-/NTC-Eingang 4 |
| STAT_RBIN_NTC_5_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 9: Binning-/NTC-Eingang 5 |
| STAT_RBIN_NTC_6_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 10: Binning-/NTC-Eingang 6 |
| STAT_RBIN_NTC_7_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 11: Binning-/NTC-Eingang 7 |
| STAT_RBIN_NTC_8_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 12: Binning-/NTC-Eingang 8 |
| STAT_RBIN_NTC_9_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 13: Binning-/NTC-Eingang 9 |
| STAT_RBIN_NTC_10_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 14: Binning-/NTC-Eingang 10 |
| STAT_RBIN_NTC_11_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 15: Binning-/NTC-Eingang 11 |
| STAT_RBIN_NTC_12_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 16: Binning-/NTC-Eingang 12 |
| STAT_A_U_VPS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 17: Spannung VPS |
| STAT_DIAG_BLNK_U_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 18: Spannung Blinker |
| STAT_DIAG_BLNK_I_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ADC 19: Strom Blinker |

### RES_0XFD47_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LR_STATUS | 0-n | high | unsigned char | - | TAB_LR_STATUS | - | - | - | Status Leistungsreduzierung (LR) |
| STAT_LR_AKTIVE_LICHTFUNKTION | 0-n | high | unsigned char | - | TAB_LR_AKTIVE_LICHTFUNKTION | - | - | - | aktive Lichtfunktion |
| STAT_LR_LMVEKTOR_LM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM7_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM8_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM9_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_LMVEKTOR_LM12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM7_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM8_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM9_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_ANGEWANDTER_THERMOVEKTOR_LM12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Intensität |
| STAT_LR_CLA | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: CLA |
| STAT_LR_CL | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: CL |
| STAT_LR_RL | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: RL |
| STAT_LR_DRL | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: DRL |
| STAT_LR_TI | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: TI |
| STAT_LR_TT | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: TT |
| STAT_LR_NTC_FEHLER | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: NTC-Fehler |
| STAT_LR_LUEFTER_FEHLER | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: Lüfter-Fehler |
| STAT_LR_LEDTREIBER_TEMPWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | LR-Status: LED Treiber Temperaturwarnung |

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
| STAT_CODING_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Coding Mode |
| STAT_SYSTEM_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | System Mode |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_TX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_RX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_TX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_RX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_TX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_RX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_TX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_RX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_TX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0D (Bits 9...0) |
| STAT_CTRL_RX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0D (Bits 9...0) |
| STAT_VLED1ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1ON |
| STAT_VLED2ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2ON |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_BUCK1_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK1_TON_DUR |
| STAT_BUCK2_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK2_TON_DUR |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_HWR_VBOOST_OFF_COMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register HWR und VBOOST_OFF_COMP |
| STAT_REVID_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register REVID |

### RES_0XFD4B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Coding Mode |
| STAT_SYSTEM_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | System Mode |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_TX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_RX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_TX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_RX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_TX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_RX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_TX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_RX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_TX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0D (Bits 9...0) |
| STAT_CTRL_RX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0D (Bits 9...0) |
| STAT_VLED1ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1ON |
| STAT_VLED2ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2ON |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_BUCK1_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK1_TON_DUR |
| STAT_BUCK2_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK2_TON_DUR |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_HWR_VBOOST_OFF_COMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register HWR und VBOOST_OFF_COMP |
| STAT_REVID_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register REVID |

### RES_0XFD4C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Coding Mode |
| STAT_SYSTEM_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | System Mode |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_TX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_RX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_TX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_RX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_TX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_RX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_TX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_RX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_TX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0D (Bits 9...0) |
| STAT_CTRL_RX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0D (Bits 9...0) |
| STAT_VLED1ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1ON |
| STAT_VLED2ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2ON |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_BUCK1_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK1_TON_DUR |
| STAT_BUCK2_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK2_TON_DUR |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_HWR_VBOOST_OFF_COMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register HWR und VBOOST_OFF_COMP |
| STAT_REVID_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register REVID |

### RES_0XFD4D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Coding Mode |
| STAT_SYSTEM_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | System Mode |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_TX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_RX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_TX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_RX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_TX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_RX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_TX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_RX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_TX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0D (Bits 9...0) |
| STAT_CTRL_RX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0D (Bits 9...0) |
| STAT_VLED1ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1ON |
| STAT_VLED2ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2ON |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_BUCK1_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK1_TON_DUR |
| STAT_BUCK2_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK2_TON_DUR |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_HWR_VBOOST_OFF_COMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register HWR und VBOOST_OFF_COMP |
| STAT_REVID_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register REVID |

### RES_0XFD4E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Coding Mode |
| STAT_SYSTEM_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | System Mode |
| STAT_CTRL_TX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_RX_REG_01_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x01 (Bits 9...0) |
| STAT_CTRL_TX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_RX_REG_02_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x02 (Bits 9...0) |
| STAT_CTRL_TX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_RX_REG_03_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x03 (Bits 9...0) |
| STAT_CTRL_TX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_RX_REG_04_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x04 (Bits 9...0) |
| STAT_CTRL_TX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_RX_REG_05_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x05 (Bits 9...0) |
| STAT_CTRL_TX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_RX_REG_06_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x06 (Bits 9...0) |
| STAT_CTRL_TX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_RX_REG_07_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x07 (Bits 9...0) |
| STAT_CTRL_TX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_RX_REG_08_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x08 (Bits 9...0) |
| STAT_CTRL_TX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_RX_REG_09_PWM1_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x09 - PWM Duty 1 (Bits 9...0) |
| STAT_CTRL_TX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_RX_REG_0A_PWM2_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0A - PWM Duty 2 (Bits 9...0) |
| STAT_CTRL_TX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_RX_REG_0B_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0B (Bits 9...0) |
| STAT_CTRL_TX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_RX_REG_0C_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0C (Bits 9...0) |
| STAT_CTRL_TX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Tx-Register 0x0D (Bits 9...0) |
| STAT_CTRL_RX_REG_0D_WERT | HEX | high | unsigned int | - | - | - | - | - | Control-Rx-Register 0x0D (Bits 9...0) |
| STAT_VLED1ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1ON |
| STAT_VLED2ON_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2ON |
| STAT_VLED1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED1 |
| STAT_VLED2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VLED2 |
| STAT_VTEMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VTEMP |
| STAT_VBOOST_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBOOST |
| STAT_VBAT_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register VBAT |
| STAT_BUCK1_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK1_TON_DUR |
| STAT_BUCK2_TON_DUR_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register BUCK2_TON_DUR |
| STAT_STATUS1_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS1 |
| STAT_STATUS2_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register STATUS2 |
| STAT_HWR_VBOOST_OFF_COMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register HWR und VBOOST_OFF_COMP |
| STAT_REVID_WERT | HEX | high | unsigned char | - | - | - | - | - | Status-Register REVID |

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
| STAT_APSENS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aPsens |
| STAT_ALLASTDEVIATION_WERT | HEX | high | unsigned long | - | - | - | - | - | alLastDeviation |

### RES_0XFD51_D

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
| STAT_APSENS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aPsens |
| STAT_ALLASTDEVIATION_WERT | HEX | high | unsigned long | - | - | - | - | - | alLastDeviation |

### RES_0XFD52_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_CREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg1 |
| STAT_CTRL_TX_CREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg2 |
| STAT_CTRL_TX_CREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg3 |
| STAT_CTRL_TX_CREG_04_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg4 |
| STAT_CTRL_TX_CREG_4A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg4A |
| STAT_CTRL_TX_CREG_05_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg5 |
| STAT_CTRL_TX_CREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg6 |
| STAT_CTRL_TX_CREG_07_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg7 |
| STAT_CTRL_TX_CREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg7A |
| STAT_CTRL_RX_CREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg1 |
| STAT_CTRL_RX_CREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg2 |
| STAT_CTRL_RX_CREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg3 |
| STAT_CTRL_RX_CREG_04_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg4 |
| STAT_CTRL_RX_CREG_4A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg4A |
| STAT_CTRL_RX_CREG_05_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg5 |
| STAT_CTRL_RX_CREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg6 |
| STAT_CTRL_RX_CREG_07_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg7 |
| STAT_CTRL_RX_CREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg7A |
| STAT_STAT_RX_SREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg1 |
| STAT_STAT_RX_SREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg2 |
| STAT_STAT_RX_SREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg3 |
| STAT_STAT_RX_SREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg6 |
| STAT_STAT_RX_SREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg7A |
| STAT_STAT_RX_SREG_8A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg8A |
| STAT_STATV_RX_SREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg1 |
| STAT_STATV_RX_SREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg2 |
| STAT_STATV_RX_SREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg3 |
| STAT_STATV_RX_SREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg6 |
| STAT_STATV_RX_SREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg7A |
| STAT_STATV_RX_SREG_8A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg8A |

### RES_0XFD53_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTRL_TX_CREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg1 |
| STAT_CTRL_TX_CREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg2 |
| STAT_CTRL_TX_CREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg3 |
| STAT_CTRL_TX_CREG_04_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg4 |
| STAT_CTRL_TX_CREG_4A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg4A |
| STAT_CTRL_TX_CREG_05_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg5 |
| STAT_CTRL_TX_CREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg6 |
| STAT_CTRL_TX_CREG_07_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg7 |
| STAT_CTRL_TX_CREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlTx.aucCReg7A |
| STAT_CTRL_RX_CREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg1 |
| STAT_CTRL_RX_CREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg2 |
| STAT_CTRL_RX_CREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg3 |
| STAT_CTRL_RX_CREG_04_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg4 |
| STAT_CTRL_RX_CREG_4A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg4A |
| STAT_CTRL_RX_CREG_05_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg5 |
| STAT_CTRL_RX_CREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg6 |
| STAT_CTRL_RX_CREG_07_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg7 |
| STAT_CTRL_RX_CREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CtrlRx.aucCReg7A |
| STAT_STAT_RX_SREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg1 |
| STAT_STAT_RX_SREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg2 |
| STAT_STAT_RX_SREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg3 |
| STAT_STAT_RX_SREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg6 |
| STAT_STAT_RX_SREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg7A |
| STAT_STAT_RX_SREG_8A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatRx.aucSReg8A |
| STAT_STATV_RX_SREG_01_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg1 |
| STAT_STATV_RX_SREG_02_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg2 |
| STAT_STATV_RX_SREG_03_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg3 |
| STAT_STATV_RX_SREG_06_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg6 |
| STAT_STATV_RX_SREG_7A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg7A |
| STAT_STATV_RX_SREG_8A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatvRx.aucSReg8A |

### RES_0XFD54_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BITSINT_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BitsInt |
| STAT_SPI_TX_0_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPI_TX[0] |
| STAT_SPI_TX_1_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPI_TX[1] |
| STAT_SPI_TX_2_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPI_TX[2] |
| STAT_SPI_TX_3_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPI_TX[3] |
| STAT_SPIRRX_0_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPIrRX[0] |
| STAT_SPIRRX_1_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPIrRX[1] |
| STAT_SPIRRX_2_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPIrRX[2] |
| STAT_SPIRRX_3_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aunSPIrRX[3] |
| STAT_STAT_TX_REG_00_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatTx.unReg0.unRaw |
| STAT_STAT_TX_REG_01_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatTx.unReg1.unRaw |
| STAT_STAT_TX_REG_02_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatTx.unReg2.unRaw |
| STAT_STAT_TX_REG_03_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatTx.unReg3.unRaw |
| STAT_STAT_RX_REG_00_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatRx.unReg0.unRaw |
| STAT_STAT_RX_REG_01_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatRx.unReg1.unRaw |
| STAT_STAT_RX_REG_02_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatRx.unReg2.unRaw |
| STAT_STAT_RX_REG_03_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatRx.unReg3.unRaw |

### RES_0XFD55_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAN_1_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Momentante Frequenz Lüfter 1 |
| STAT_FAN_1_MIN_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimale Frequenz Lüfter 1 gemäß Codierdaten |
| STAT_FAN_1_MAX_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximale Frequenz Lüfter 1 gemäß Codierdaten |

### RES_0XFD56_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAN_2_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Momentante Frequenz Lüfter 2 |
| STAT_FAN_2_MIN_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Minimale Frequenz Lüfter 2 gemäß Codierdaten |
| STAT_FAN_2_MAX_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximale Frequenz Lüfter 2 gemäß Codierdaten |

### RES_0XFD58_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ULEDMIN_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Messung Minimaler Spannungswert: Spannungswert |
| STAT_ULEDMIN_I_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Messung Minimaler Spannungswert: Stromwert |
| STAT_ULEDMIN_T_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Messung Minimaler Spannungswert: Temperaturwert |
| STAT_ULEDMAX_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Messung Maximaler Spannungswert: Spannungswert |
| STAT_ULEDMAX_I_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Messung Maximaler Spannungswert: Stromwert |
| STAT_ULEDMAX_T_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Messung Maximaler Spannungswert: Temperaturwert |
| STAT_ILEDMIN_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Messung Minimaler Stromwert: Spannungswert |
| STAT_ILEDMIN_I_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Messung Minimaler Stromwert: Stromwert |
| STAT_ILEDMIN_T_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Messung Minimaler Stromwert: Temperaturwert |
| STAT_ILEDMAX_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Messung Maximaler Stromwert: Spannungswert |
| STAT_ILEDMAX_I_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Messung Maximaler Stromwert: Stromwert |
| STAT_ILEDMAX_T_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Messung Maximaler Stromwert: Temperaturwert |
| STAT_TLEDMIN_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Messung Minimaler Temperaturwert: Spannungswert |
| STAT_TLEDMIN_I_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Messung Minimaler Temperaturwert: Stromwert |
| STAT_TLEDMIN_T_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Messung Minimaler Temperaturwert: Temperaturwert |
| STAT_TLEDMAX_U_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Messung Maximaler Temperaturwert: Spannungswert |
| STAT_TLEDMAX_I_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Messung Maximaler Temperaturwert: Stromwert |
| STAT_TLEDMAX_T_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Messung Maximaler Temperaturwert: Temperaturwert |
| STAT_ULEDAVG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlicher Spannungswert |
| STAT_ILEDAVG_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Durchschnittlicher Stromwert |
| STAT_TEMPAVG_WERT | °C | high | int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittliche Temperatur |
| STAT_UCOMP_DIFFAVG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durchschnittliche Abweichung des kompensierten Spannungswertes |
| STAT_BLK_COUNTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der fehlerfreien N-1 Blinkphasenmessungen |
| STAT_ERR_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal aufgetretener N-1 Fehlerzählerwert |

### RES_0XFD5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELATIVZEIT_EINLERNEN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit zum Einlernzeitpunkt |
| STAT_RELATIVZEIT_LETZTER_DRIFT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit beim letzten Drift der N-1 Referenzspannung |
| STAT_FRAZ_SYNC_HIGH_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | High-Zeit der FRAZ_SYNC-Leitung in Sekunden |
| STAT_ERR_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller N-1 Fehlerzähler-Wert |

### RES_0XFD5B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VBAT_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Steuergeräte-Versorgungsspannung |
| STAT_SOLLSTROM_LM1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM1 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM1-LED |
| STAT_SOLLSTROM_LM2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM2 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM2-LED |
| STAT_SOLLSTROM_LM3_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM3 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM3-LED |
| STAT_SOLLSTROM_LM4_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM4 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM4-LED |
| STAT_SOLLSTROM_LM5_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM5 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM5-LED |
| STAT_SOLLSTROM_LM6_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM6 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM6-LED |
| STAT_SOLLSTROM_LM7_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM7 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM7-LED |
| STAT_SOLLSTROM_LM8_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM8 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM8-LED |
| STAT_SOLLSTROM_LM9_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM9 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM9-LED |
| STAT_SOLLSTROM_LM10_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM10 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM10-LED |
| STAT_SOLLSTROM_LM11_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM11 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM11_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM11-LED |
| STAT_SOLLSTROM_LM12_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollstrom für LM12 (aus Codierdaten, anhängig von der Binningklasse) |
| STAT_REDUZIERUNGSFAKTOR_LM12_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | spannungsbedingter Stromreduzierungsfaktor der LM12-LED |

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
| AHL_REFERENZLAUF | 0xA538 | - | Referenzlauf Kurvenlicht | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA538_R |
| AUSSENLICHT_LUEFTER | 0xA540 | - | Routine Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA540_R | RES_0xA540_R |
| LWR_REFERENZLAUF | 0xA541 | - | Referenzlauf der Leuchtweitenregulierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA541_R |
| FUNKTIONSTEST_LED_SCHEINWERFER | 0xA542 | - | Routine für Systemtest FLE | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA542_R |
| LEUCHTEN_FUNKTION_LED | 0xA543 | - | Ansteuerung der LED Leuchtmittel | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA543_R | RES_0xA543_R |
| POSITION_LWR | 0xA545 | - | LWR Positionsvorgabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA545_R | RES_0xA545_R |
| POSITION_AHL | 0xA546 | - | Position AHL | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA546_R | RES_0xA546_R |
| REFERENZLAUFZAEHLER_LWR | 0xD1FD | - | Anzahl der begonnenen und abgeschlossenen Referenzläufe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD1FD_D | RES_0xD1FD_D |
| REFERENZLAUFZAEHLER_AHL | 0xD1FE | - | Anzahl der begonnenen und abgeschlossenen Referenzläufe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD1FE_D | RES_0xD1FE_D |
| FRAZ_LED_AUSFALL_EINLERNDATEN | 0xD506 | - | Ausfallerkennung für FRAZ  | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD506_D | RES_0xD506_D |
| LEUCHTEN_SENSOR_AUSSTATTUNG | 0xD529 | - | Bei FLE2 und FLM werden die Eingangskanäle variantenabhängig für NTC-/Binning-Verwendung konfiguriert / codiert. Mit diesem Job kann die Zuordnung zu den Eingangskanälen am Steuergerät ausgelesen werden, um  DTC-Einträge oder Daten aus anderen Diagnosejobs (bzgl. Verwendung in codierter Scheinwerfervariante) zuzuordnen.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD529_D |
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
| RESETZAEHLER | 0xD63C | - | Erfassung der Resetvorgänge | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD63C_D | RES_0xD63C_D |
| BETRIEBSSTUNDENZAEHLER_LWR | 0xD63D | - | Erfassung der Betriebsstunden LWR | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD63D_D | RES_0xD63D_D |
| STATUS_SCHEINWERFER_VARIANTE | 0xD63E | - | Lesen der codierbaren Variantenkennung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD63E_D |
| AHL_TEMPERATURMODUS | 0xD662 | - | Temperaturmodus AHL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD662_D |
| POSITION_KURVENLICHT | 0xD663 | STAT_POSITION_AHL_WERT | Lesen der AHL Position | ° | - | high | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDENZAEHLER_AHL | 0xD680 | - | Betriebsstunden AHL | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD680_D | RES_0xD680_D |
| AHL_SCHRITTVERLUSTE | 0xDF0F | - | Zähler der Kurvenlicht Schrittverlust | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF0F_D | RES_0xDF0F_D |
| _LEUCHTEN_AUSSENLICHT_KANAL | 0x3000 | - | Ansteuern der einzelnen LED Kanäle | - | - | - | - | - | - | - | - | - | 31 | ARG_0x3000_R | RES_0x3000_R |
| _SCHEINWERFERDATENBLOCK | 0xFD40 | - | Bei der Scheinwerferfertigung können die Daten im Steuergerät abgelegt werden. Dies referenziert auf DID SCHEINWERFERDATEN. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD40_D | RES_0xFD40_D |
| _FRAZ_ZUSTAND | 0xFD41 | - | Informationen zum aktuellen Zustand der FRAZ-Leitung und dem Blinker-Stromwert während der letzten EIN-Phase. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD41_D |
| _SG_ECUVARCFG | 0xFD42 | STAT_ECUVARCFG_DATA | Datenblock EcuVarCfg | DATA | - | high | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CODING_PLAUSIBILITAETSCHECK | 0xFD43 | - | Informationen zum Plausibilitätscheck der Codierung (als flüchtige RAM-Daten) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD43_D |
| _ADC_ROHWERTE | 0xFD44 | - | Liefert die Rohwerte der 20 Analog-/Digital-Converter-Kanäle zurück (Betriebsspannung, Lüfter, Links-/Rechts-Erkennung, Temperatur, Binning-/NTC-Eingänge etc.). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD44_D |
| _SG_EFTCALIBBLOCK_1 | 0xFD45 | STAT_EFTCALIBBLOCK_1_DATA | Datenblock EftCalibBlock Teil 1 | DATA | - | high | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SG_EFTCALIBBLOCK_2 | 0xFD46 | STAT_EFTCALIBBLOCK_2_DATA | Datenblock EftCalibBlock Teil 2 | DATA | - | high | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LEISTUNGSREDUZIERUNG | 0xFD47 | - | Informationen zum aktuellen Derating-Zustand des Thermomodells | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD47_D |
| _LED_STRANGSPANNUNG | 0xFD48 | - | Liest für alle LED-Kanäle die Strangspannung sowie die zugehörigen Minimal- und Maximal-Strangspannungen aus den Codierdaten. Die höheren Kanal-Nummer liefern je nach Steuergerät und Bestückung ggf. Dummy-Werte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD48_D |
| _CDDLED_TREIBER_1_SPI_REG | 0xFD4A | - | Liest die SPI-Register des Treiber-Bausteins 1 (für die LED-Kanäle 1 und 2) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4A_D |
| _CDDLED_TREIBER_2_SPI_REG | 0xFD4B | - | Liest die SPI-Register des Treiber-Bausteins 2 (für die LED-Kanäle 3 und 4) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4B_D |
| _CDDLED_TREIBER_3_SPI_REG | 0xFD4C | - | Liest die SPI-Register des Treiber-Bausteins 3 (für die LED-Kanäle 5 und 6) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4C_D |
| _CDDLED_TREIBER_4_SPI_REG | 0xFD4D | - | Liest die SPI-Register des Treiber-Bausteins 4 (für die LED-Kanäle 7 und 8) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4D_D |
| _CDDLED_TREIBER_5_SPI_REG | 0xFD4E | - | Liest die SPI-Register des Treiber-Bausteins 5 (für die LED-Kanäle 9 und 10) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD4E_D |
| _CDDSTP_LWR_TREIBER_STATUS | 0xFD50 | - | Liest die internen Zustände der CddStp-LWR-Treiber-Status-Maschine aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD50_D |
| _CDDSTP_AHL_TREIBER_STATUS | 0xFD51 | - | Liest die internen Zustände der CddStp-AHL-Treiber-Status-Maschine aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD51_D |
| _CDDSTP_LWR_TREIBER_SPI_REG | 0xFD52 | - | Liest die SPI-Register des LWR-Treiber-Bausteins aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD52_D |
| _CDDSTP_AHL_TREIBER_SPI_REG | 0xFD53 | - | Liest die SPI-Register des AHL-Treiber-Bausteins aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD53_D |
| _CDDSBC_TREIBER_SPI_REG | 0xFD54 | - | Liest die SPI-Register des SBC aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD54_D |
| _LUEFTER_1_FREQUENZ | 0xFD55 | - | Liest die momentane Frequenz des Lüfters 1 sowie die minimale und maximale Frequenz aus den Codierdaten aus. Sonderwerte für die  momentane Frequenz:  0 = Lüfter aus; 0xFFFF = Lüfter nicht verbaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD55_D |
| _LUEFTER_2_FREQUENZ | 0xFD56 | - | Liest die momentane Frequenz des Lüfters 2 sowie die minimale und maximale Frequenz aus den Codierdaten aus. Sonderwerte für die  momentane Frequenz:  0 = Lüfter aus; 0xFFFF = Lüfter nicht verbaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD56_D |
| _WECKEREIGNIS | 0xFD57 | STAT_WECKEREIGNIS | Ursache für das letzte Weckereignis | 0-n | - | high | unsigned int | TAB_WECKEREIGNIS | - | - | - | - | 22 | - | - |
| FRAZ_N_MINUS_1_STATISTIK_1 | 0xFD58 | - | Liest bzw. löscht die Statistikdaten der N-minus-1-Ausfallerkennung des Fahrtrichtungsanzeigers. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD58_D | RES_0xFD58_D |
| FRAZ_N_MINUS_1_ERWEITERTE_DATEN | 0xFD5A | - | Liest die erweiterten Daten der N-minus-1-Ausfallerkennung des Fahrtrichtungsanzeigers. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD5A_D |
| _LED_STROMABREGELUNG | 0xFD5B | - | Informationen zur aktuellen spannungsbedingten LED-Stromabregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD5B_D |

### TAB_AHL_REFERENZLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Referenzlauf nicht gestartet |
| 0x01 | Referenzlauf aktiv |
| 0x02 | Referenzlauf ohne Fehler abgeschlossen |
| 0x03 | Refernezlauf mit Fehler abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_EINLERNDATEN_NVM_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | NVM_OK |
| 1 | NVM_NOT_OK |
| 2 | NVM_REQ_PENDING |
| 3 | NVM_REQ_DENIED |
| 4 | NVM_SHUTDOWNWRITE |

### TAB_EINLERNDATEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | nicht eingelernt |
| 1 | links eingelernt |
| 2 | rechts eingelernt |

### TAB_FLE_LEUCHTMITTEL

| WERT | TEXT |
| --- | --- |
| 0x01 | LED 1 |
| 0x02 | LED 2 |
| 0x03 | LED 3 |
| 0x04 | LED 4 |
| 0x05 | LED 5 |
| 0x06 | LED 6 |
| 0x07 | LED 7 |
| 0x08 | LED 8 |
| 0x09 | LED 9 |
| 0x0A | LED 10 |

### TAB_FRAZ_MESSUNG

| WERT | TEXT |
| --- | --- |
| 0 | noch keine Messung erfolgt |
| 1 | Messung bereits ausgelesen |
| 2 | Messung erfolgt, noch nicht ausgelesen |

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
| 0x01 | LED 1 |
| 0x02 | LED 2 |
| 0x03 | LED 3 |
| 0x04 | LED 4 |
| 0x05 | LED 5 |
| 0x06 | LED 6 |
| 0x07 | LED 7 |
| 0x08 | LED 8 |
| 0x09 | LED 9 |
| 0x0A | LED 10 |
| 0xFF | alle Leuchtmittel |

### TAB_LEUCHTEN_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbaut |
| 0x01 | NTC1 |
| 0x02 | NTC2 |
| 0x03 | NTC3 |
| 0x04 | NTC4 |
| 0x05 | NTC5 |
| 0x06 | NTC6 |
| 0x07 | NTC7 |
| 0x08 | Binning 1 |
| 0x09 | Binning 2 |
| 0x0A | Binning 3 |
| 0x0B | Binning 4 |
| 0x0C | Binning 5 |
| 0x0D | Binning 6 |
| 0x0E | Binning 7 |
| 0x0F | Binning 8 |
| 0x10 | Binning 9 |
| 0x11 | Binning 10 |
| 0x12 | Binning 11 |
| 0x13 | Binning 12 |

### TAB_LEUCHTMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbaut |
| 0x01 | Abblendlicht 1 |
| 0x02 | Abblendlicht 2 |
| 0x03 | Abblendlicht 3 |
| 0x04 | Fernlicht 1 |
| 0x05 | Fernlicht 2 |
| 0x06 | Fernlicht 3 |
| 0x07 | Tagfahrlicht 1 |
| 0x08 | Tagfahrlicht 2 |
| 0x09 | Tagfahrlicht 3 |
| 0x0A | Abbiegelicht 1 |
| 0x0B | Abbiegelicht 2 |
| 0x0C | Abbiegelicht 3 |
| 0x0D | Seitenmarkierungsleuchte 1 |
| 0x0E | Seitenmarkierungsleuchte 2 |
| 0x0F | Seitenmarkierungsleuchte 3 |
| 0x10 | Fahrtrichtungsanzeiger 1 |
| 0x11 | Akzentleuchte 1 |
| 0x12 | Akzentleuchte 2 |
| 0x13 | Akzentleuchte 3 |

### TAB_LR_AKTIVE_LICHTFUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | CE |
| 1 | VTW |
| 2 | R |
| 0xFF | keine |

### TAB_LR_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb |
| 1 | LR 1 |
| 2 | LR 2 |
| 3 | LR 3 |

### TAB_LWR_REFERENZLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Referenzlauf nicht gestartet |
| 0x01 | Referenzlauf aktiv |
| 0x02 | Referenzlauf ohne Fehler abgeschlossen |
| 0x03 | Referenzlauf mit Fehler abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_POS_AHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Job aktiv |
| 0x01 | Job nicht aktiv |
| 0x02 | Job erfolgreich abgeschlossen |
| 0xFF | Fehler |

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
