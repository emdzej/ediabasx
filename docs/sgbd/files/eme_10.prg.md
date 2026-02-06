# eme_10.prg

## General

|  |  |
| --- | --- |
| File | eme_10.prg |
| Type | PRG |
| Jobs | 45 |
| Tables | 116 |
| Origin | BMW FZ-11 Halawi_Layya |
| Revision | 18.003 |
| Author | Altran_Technologies FZ-11 Layya_Halawi |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotor-Elektronik Generation 2.0 (Hybridfahrzeug) |  |  |
| ORIGIN | string | BMW FZ-11 Halawi_Layya |  |  |
| REVISION | string | 18.003 |  |  |
| AUTHOR | string | Altran_Technologies FZ-11 Layya_Halawi |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.37 |  |  |
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

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

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
| 0x0000B7 | SB LiMotive Germany GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
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
| 0x40 | unbekannte Fehlerart |
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

### ARG_0XADF1

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_DCDC_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_DCDC_ANF | 1.0 | 1.0 | 0.0 | - | - | Anforderung Betriebsart DCDC |
| ST_B_DIAG_DCDC | + | - | 0-n | high | unsigned char | - | TAB_ST_B_DIAG_DCDC | - | - | - | - | - | Auswahl der Systemgrenze |
| I_DIAG_DCDC_LV_OUT | + | - | A | high | int | - | - | 10.0 | 1.0 | 0.0 | -200.0 | 200.0 | LV Strom Systemgrenze |
| I_DIAG_DCDC_HV_OUT | + | - | A | high | int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | HV Strom Systemgrenze |
| U_DIAG_DCDC_LV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 33.0 | LV Spannung Systemgrenze |
| U_DIAG_DCDC_HV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | HV Spannung Systemgrenze |

### ARG_0XADF2

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_HV_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_HV_ANF | 1.0 | 1.0 | 0.0 | - | - | Anforderung HV |

### ARG_0XADF3

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | geforderte Drehzahl (0-100%) nur möglich, falls Temperatur des Jobs job STATUS_TEMP_EMASCHINE zwischen 15 und 45 °C |
| ZEIT_ANSTEUERUNG_WERT | + | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 500.0 | geforderte Ansteuerzeit (0-500s) |

### ARG_0XADF4

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XDDFD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DME_LLR | 0-n | high | unsigned char | - | TAB_ST_DME_LLR | 1.0 | 1.0 | 0.0 | - | - | Leerlaufregler der DME aktivieren |

### ARG_0XDDFE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_EME_ANTRIEBSART | 0-n | high | unsigned char | - | TAB_ST_EME_ANTRIEBSART | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung EME Antriebsart, keine EM Unterstuetzung |

### ARG_0XDDFF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_EM_GENERATOR | 0-n | high | unsigned char | - | TAB_ST_EM_GENERATOR | 1.0 | 1.0 | 0.0 | - | - | Beim Wert 1 arbeitet die E-Maschine nur motorisch, kein generatorischer Betrieb, negative Momentengrenzen auf Null |

### ARG_0XDE07

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE08

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE09

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE0A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE17

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE1F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_ZSEBATT_REG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Keine Anforderung , 1 - ZSE-Batterie-Tausch registrieren |

### ARG_0XDE20

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_SZE_WERTELOESCHEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Keine Anforderung , 1 - Werte ZSE-Batterie zurücksetzen |

### ARG_0XDE23

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN | - | - | - | - | - | Vorgabe: 0 - Job inaktiv; 1  - Job aktiv & Ventil öffnen; 2 - Job aktiv & Ventil schliessen |

### ARG_0XDE25

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_ZSE_RELAIS | 0-n | high | unsigned char | - | TAB_ST_ZSE_RELAIS | 1.0 | 1.0 | 0.0 | - | - | Relais öffnen oder schliessen |

### ARG_0XDE29

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOTENTL_ZAEHLER_RESET_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Notentladungszähler zurücksetzen (0 = kein Rücksetzen; 1 = Rücksetzen) |

### ARG_0XDE2B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_RESET | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - keine Funktion; 1 - Histogramm zurücksetzen |

### ARG_0XF50C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EM_BETRIEBSART | + | - | 0-n | high | unsigned char | - | TAB_EM_BETRIEBSART | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der Betriebsart der E-Maschine: 0 = Momentenvorgabe (Md_em1_soll_steuern); 1 = Drehzahlvorgabe (N_em1_soll_steuern) |
| MOMENTENVORGABE | + | - | Nm | high | int | - | - | 0.1 | 1.0 | 0.0 | - | - | Momentenvorgabe |
| DREHZAHLVORGABE | + | - | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Drehzahlvorgabe |

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
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023A00 | Energiesparmode: aktiv | 0 |
| 0x02FF3A | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x220000 | Elektromaschine, Resolver, elektrisch: Kurzschluss | 0 |
| 0x220001 | Elektromaschine, Resolver, Arbeitsbereich: Amplitude zu hoch | 0 |
| 0x220002 | Elektromaschine, Resolver, Arbeitsbereich: Amplitude zu niedrig | 0 |
| 0x220003 | Elektromaschine, Resolver, Plausibilität: Abweichung Signalpegel zu groß | 0 |
| 0x220004 | Elektromaschine, Resolver, Plausibilität: Abweichung Phasenwinkel zu groß | 0 |
| 0x220005 | Elektromaschine, Resolver, Plausibilität: Soll zu Ist-Position unplausibel | 0 |
| 0x220006 | Elektromaschine, Resolver: Überdrehzahl erkannt | 0 |
| 0x220020 | Elektromaschine, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220021 | Elektromaschine, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220022 | Elektromaschine, Temperatursensor, Arbeitsbereich: Temperatur zu hoch | 0 |
| 0x220023 | Elektromaschine, Temperatursensor, Arbeitsbereich: Temperatur zu niedrig | 0 |
| 0x220024 | EME, interner Fehler: Temperatursensor in der E-Maschine nicht plausibel | 0 |
| 0x220040 | Elektromaschine: Überdrehzahl erkannt | 0 |
| 0x220060 | Elektromaschine, Bauteilschutz: Abschaltung wegen Übertemperatur | 0 |
| 0x220080 | Elektromaschine, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x220081 | Elektromaschine Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x220082 | Elektromaschine Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x220083 | Hochvolt-Spannung, Plausibilität: Spannung unplausibel | 0 |
| 0x2200E0 | DC/DC-Wandler, Hochvolt-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2200E1 | DC/DC-Wandler, Hochvolt-Spannungssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2200E2 | DC/DC-Wandler, Hochvolt-Spannungssensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x2200E3 | DC/DC-Wandler, Hochvolt-Spannungssensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x2200E4 | DC/DC-Wandler, Hochvolt-Spannungssensor, Plausibilität: Spannung unplausibel | 0 |
| 0x220100 | DC/DC-Wandler, Hochvolt-Stromsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220101 | DC/DC-Wandler, Hochvolt-Stromsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220102 | DC/DC-Wandler, Hochvolt-Stromsensor Plausibilität: Strom unplausibel | 0 |
| 0x220103 | DC/DC-Wandler, Hochvolt-Strom, Plausibilität: Strom zu hoch | 0 |
| 0x220120 | DC/DC-Wandler, Niedervolt-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220121 | DC/DC-Wandler, Niedervolt-Spannungssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220122 | DC/DC-Wandler, Niedervolt-Spannungssensor, Plausibilität: Spannung unplausibel | 0 |
| 0x220123 | DC/DC-Wandler, Niedervolt-Spannungssensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x220124 | DC/DC-Wandler, Niedervolt-Spannungssensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x220140 | DC/DC-Wandler, Niedervolt-Stromsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220141 | DC/DC-Wandler, Niedervolt-Stromsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220142 | DC/DC-Wandler, Niedervolt-Stromsensor, Plausibilität: Strom unplausibel | 0 |
| 0x220143 | DC/DC-Wandler, Niedervolt-Strom, Plausibilität: Strom zu hoch | 0 |
| 0x220160 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220161 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220162 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x220163 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x220165 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, Plausibilität: Spannung unplausibel | 0 |
| 0x220170 | Hochvolt-Spannung, Nachlauf: Notentladung fehlerhaft | 0 |
| 0x220180 | DC/DC-Wandler, Zwischenkreis-Stromsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220181 | DC/DC-Wandler, Zwischenkreis-Stromsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220182 | DC/DC-Wandler, Zwischenkreis-Stromsensor, Plausibilität: Strom unplausibel | 0 |
| 0x2201A0 | DC/DC-Wandler, Steuerteil, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201A1 | DC/DC-Wandler, Steuerteil, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201A2 | DC/DC-Wandler, Steuerteil: Übertemperatur erkannt | 0 |
| 0x2201A3 | DC/DC-Wandler, Steuerteil, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x2201C0 | DC/DC-Wandler, Leistungsteil, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201C1 | DC/DC-Wandler, Leistungsteil, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201C2 | DC/DC-Wandler, Leistungsteil, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x2201C3 | DC/DC-Wandler, Leistungsteil: Übertemperatur erkannt | 0 |
| 0x2201E0 | DC/DC-Wandler, interne Diagnoseleitung 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201E1 | DC/DC-Wandler, interne Diagnoseleitung 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201E2 | DC/DC-Wandler, interne Diagnoseleitung 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201E3 | DC/DC-Wandler, interne Diagnoseleitung 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201E4 | DC/DC-Wandler: Wirkungsgrad unplausibel | 0 |
| 0x2201E5 | DC/DC-Wandler, Zwischenkreis-Spannung, Plausibilität: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201E6 | DC/DC-Wandler, Bauteilschutz: Abschaltung wegen zu schnellem Stromanstieg | 0 |
| 0x2201E7 | DC/DC-Wandler, Hochvolt-Strom: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201E8 | DC/DC-Wandler, Niedervolt-Strom: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201E9 | DC/DC-Wandler: falsche Verpolung auf Niedervolt-Seite erkannt | 0 |
| 0x2201EA | DC/DC-Wandler, Abschaltpfadtest: Fehlfunktion | 0 |
| 0x2201EB | DC/DC-Wandler, Sollwert-Vorgaben: Fehlfunktion | 0 |
| 0x2201EC | DC/DC-Wandler, Zwischenkreisentladung: Entladezeit 1 überschritten | 0 |
| 0x2201ED | DC/DC-Wandler, Arbeits-Modus: Fehlfunktion | 0 |
| 0x2201EE | DC/DC-Wandler, Zwischenkreisentladung: Entladezeit 2 überschritten | 0 |
| 0x2201EF | DC/DC-Wandler, Standby-Modus: Fehlfunktion | 0 |
| 0x2201F0 | DC/DC-Wandler, Eigendiagnose: Niedervolt-Spannung mehrfach zu hoch | 0 |
| 0x2201F1 | DC/DC-Wandler, Hochvolt-Spannung, Plausibilität: Sollwert unterhalb gültigem Bereich | 0 |
| 0x2201F2 | DC/DC-Wandler, Niedervolt-Spannung: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201F3 | DC/DC-Wandler, Versorgungsspannung: Fehlfunktion | 0 |
| 0x2201F4 | DC/DC-Wandler: maximale Resetversuche erreicht | 0 |
| 0x2201F5 | DC/DC-Wandler: Leistungsüberwachung fehlgeschlagen | 0 |
| 0x220240 | Inverter, Elektromaschine, Stromsensoren, Plausibilität: Stromsumme unplausibel | 0 |
| 0x220241 | Inverter, Elektromaschine, Stromsensor Phase U, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220242 | Inverter, Elektromaschine, Stromsensor Phase V, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220243 | Inverter, Elektromaschine, Stromsensor Phase W, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220244 | Inverter, Elektromaschine, Stromsensoren: Überstrom oder Sensordefekt | 0 |
| 0x220245 | Inverter, Elektromaschine, Stromsensor Phase U, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220246 | Inverter, Elektromaschine, Stromsensor Phase U, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220247 | Inverter, Elektromaschine, Stromsensor Phase V, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220248 | Inverter, Elektromaschine, Stromsensor Phase V, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220249 | Inverter, Elektromaschine, Stromsensor Phase W, elektrisch: Kurzschluss nach Plus | 0 |
| 0x22024A | Inverter, Elektromaschine, Stromsensor Phase W, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220260 | EME, Niedervolt-Spannungsversorgung, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220261 | Inverter, Elektromaschine, IGBT (Highside): Fehlfunktion | 0 |
| 0x220262 | Inverter, Elektromaschine, IGBT (Lowside): Fehlfunktion | 0 |
| 0x220263 | EME, Niedervolt-Spannungsversorgung, Plausibilität: Spannung zu hoch | 0 |
| 0x220265 | Inverter, Elektromaschine, Hochvolt-Bordnetz, Plausibilität: Spannung zu niedrig | 0 |
| 0x220266 | Inverter, Elektromaschine, Überspannungsschutz | 0 |
| 0x220267 | Inverter, Elektromaschine, Hochvolt-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220268 | Inverter, Elektromaschine, IGBT: Versorgungsspannung Fehlfunktion | 0 |
| 0x220269 | Inverter, Elektromaschine, Hochvolt-Bordnetz, Plausibilität: Spannung zu hoch | 0 |
| 0x22026A | Inverter, Elektromaschine, IGBT-Kurzschlussdiagnose aktiviert und resetiert | 0 |
| 0x220270 | Inverter, Elektromaschine, IGBT, Vorlauf oder Nachlauf: Versorgungsspannung Fehlfunktion | 0 |
| 0x220280 | Inverter, Elektromaschine, Phasen V,W, und U, Plausibilität: Temperaturen unplausibel zueinander | 0 |
| 0x220281 | Inverter, Elektromaschine, Phase U, Temperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x220282 | Inverter, Elektromaschine, Phase V, Temperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x220283 | Inverter, Elektromaschine, Phase W, Temperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x220284 | Inverter, Elektromaschine, Phase U, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220285 | Inverter, Elektromaschine, Phase U, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220286 | Inverter, Elektromaschine, Phase V, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220287 | Inverter, Elektromaschine, Phase V, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220288 | Inverter, Elektromaschine, Phase W, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220289 | Inverter, Elektromaschine, Phase W, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2202E0 | Bremsunterdruckpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x2202E1 | Bremsunterdruckpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x2202E2 | Bremsunterdruckpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x2202E3 | Bremskraftverstärkung: Unterdruck ungenügend | 0 |
| 0x2202E4 | Bremskraftverstärkung: Bremsunterdrucksignal ungültig | 1 |
| 0x2202E5 | Bremskraftverstärkung: Leckage erkannt | 0 |
| 0x2202E6 | Bremskraftverstärkung, Bauteilschutz: Abschaltung Bremsunterdruckpumpe wegen Dauerlauf | 0 |
| 0x2202E8 | Bremsunterdruckpumpe, Sicherung: defekt | 0 |
| 0x2202E9 | Bremskraftverstärkung: Bremsunterdruckpumpe blockiert, Zeit-Schwelle 3 überschritten.  Überstrom erkannt | 0 |
| 0x2202EA | Bremskraftverstärkung: Ritzelstart erkannt | 0 |
| 0x2202EB | Bremskraftverstärkung, Bauteilschutz: Abschaltung Bremsunterdruckpumpe wegen zu hoher Spannung | 0 |
| 0x2202EC | Bremskraftverstärkung: Bremsunterdruckpumpe blockiert, Zeit-Schwelle 1 überschritten | 0 |
| 0x2202ED | Bremskraftverstärkung: Bremsunterdruckpumpe blockiert, Zeit-Schwelle 2 überschritten | 0 |
| 0x2202EF | Elektrische Unterdruckpumpe, Ansteurung: Rückschlagventil schließt nicht mehr | 0 |
| 0x220341 | EME-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x220342 | EME-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x220343 | EME-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x220344 | EME-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x220345 | EME-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x220346 | EME-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überstrom | 0 |
| 0x220347 | EME-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x220348 | EME-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x2203A0 | Kältemittelabsperrventil, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2203A1 | Kältemittelabsperrventil, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2203A2 | Kältemittelabsperrventil, elektrisch: Leitungsunterbrechung | 0 |
| 0x220420 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220421 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Strom zu niedrig | 0 |
| 0x220422 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Temperatur zu hoch | 0 |
| 0x220423 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Temperatur zu niedrig | 0 |
| 0x220424 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x220425 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x220426 | Intelligenter Batteriesensor, 2. Batterie, Plausibilität: Strom unplausibel | 0 |
| 0x220427 | Intelligenter Batteriesensor, 2. Batterie, Kompatibilität: Version nicht plausibel | 0 |
| 0x220428 | Intelligenter Batteriesensor, 2. Batterie, Eigendiagnose: Systemfehler | 0 |
| 0x220429 | Intelligenter Batteriesensor, 2. Batterie, Plausibilität: Temperatur unplausibel | 0 |
| 0x22042A | Intelligenter Batteriesensor, 2. Batterie, Plausibilität: Spannung unplausibel | 0 |
| 0x220440 | Zustarteinrichtung, Batterie: gealtert | 0 |
| 0x220441 | Zustarteinrichtung, Batterie: defekt | 0 |
| 0x220460 | Zustarteinrichtung, Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x220461 | Zustarteinrichtung, Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x220462 | Zustarteinrichtung, Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x220463 | Zustarteinrichtung, Relais: klemmt geschlossen | 0 |
| 0x220464 | Zustarteinrichtung, Relais: klemmt offen | 0 |
| 0x220470 | Klemme 15, Datenempfang: Fehlfunktion | 0 |
| 0x2204B0 | EME, interner Fehler, Taktgeber: Signalfrequenz 1 außerhalb gültigen Bereich | 0 |
| 0x2204B1 | EME, interner Fehler, Taktgeber: Signalfrequenz 2 außerhalb gültigen Bereich | 0 |
| 0x2204B2 | EME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x2204B6 | Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x2204B7 | Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x2204B8 | Hybridsystem: Anforderung Abschaltung Elektromaschine unplausibel | 0 |
| 0x2204BD | EME, Niedervolt-Spannungsversorgung, Plausibilität: Spannung zu niedrig | 0 |
| 0x2204BE | EME, interner Fehler, Watchdog: Anforderung Abschaltung Elektromaschine | 0 |
| 0x2204BF | EME, interner Fehler, Auswertebaustein Resolver: Initialisierungsfehler  | 0 |
| 0x2204C0 | EME, interner Fehler, Auswertebaustein Resolver: Speichertest fehlgeschlagen | 0 |
| 0x2204C1 | EME, interner Fehler, Auswertebaustein Resolver: Konfigurationsfehler  | 0 |
| 0x2204C2 | EME, interner Fehler, Bremsunterdruckpumpe, Endstufe: Stromfluss im ausgeschalteten Zustand | 0 |
| 0x2204C3 | EME, interner Fehler, Bremsunterdruckpumpe, Endstufe: defekt | 0 |
| 0x2204C4 | EME, interner Fehler, Bremsunterdruckpumpe, Endstufe: Übertemperatur erkannt | 0 |
| 0x2204C6 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung: Überspannung erkannt | 0 |
| 0x2204C7 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung: Unterspannung erkannt | 0 |
| 0x2204CE | EME, interner Fehler, Programmablauf: Deratingvorgaben der Leistungselektronik seitens Regelung verletzt | 0 |
| 0x2204D0 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung 4: Überspannung im Baustein CY320 erkannt | 0 |
| 0x2204D1 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung 4: Unterspannung  im Baustein CY320 erkannt | 0 |
| 0x2204D2 | EME, interner Fehler, Überwachung 5V Spannungsregler: Überspannung erkannt | 0 |
| 0x2204D3 | EME, interner Fehler, Überwachung 5V Spannungsregler: Unterspannung erkannt | 0 |
| 0x220500 | Hochvolt-Powermanagement, Signalüberwachung: Signale Hochvolt-Komponenten ungültig oder nicht empfangen | 0 |
| 0x220501 | Hochvolt-Powermanagement, Signalüberwachung: Signale Hochvolt-Bordnetz ungültig oder nicht empfangen | 0 |
| 0x220502 | Hochvolt-Powermanagement, Signalüberwachung: Signale Hochvolt-Batterie ungültig oder nicht empfangen | 0 |
| 0x220503 | Hochvolt-Powermangement, elektrischer Kältemittelverdichter: Leistungsreduzierung | 1 |
| 0x220505 | Hochvolt-Powermanagement, Niedervolt-Bordnetz: Enlastung wegen Launch Control | 1 |
| 0x220506 | Hochvolt-Powermanagement, Hochvolt-Batterie, Bauteilschutz: Abschaltung wegen niedrigem Ladezustand | 1 |
| 0x220507 | Hochvolt-Powermanagement, Niedervolt-Bordnetz: Enlastung wegen Anforderung Notlaufmanager | 1 |
| 0x220508 | Hochvolt-Powermanagement, Standfunktionen: Deaktivierung wegen niedrigem Ladezustand Hochvolt-Batterie | 1 |
| 0x220509 | Hochvolt-Powermanagement, Abschaltung: schwerer Aufprall vom Aufprallsensor erkannt | 0 |
| 0x220510 | Hochvolt-Powermanagement, DC/DC-Wandler: Leistungsreduzierung | 1 |
| 0x220511 | Hochvolt-Powermanagement,  Kühlung Hochvolt-Batterie: Ausfall | 1 |
| 0x220512 | Hochvolt-Powermanagement, Isolationsüberwachung: Fehlfunktion | 1 |
| 0x220513 | Hochvolt-Powermanagement, Isolationsüberwachung: Warnung | 1 |
| 0x220514 | Hochvolt-Powermanagement: keine Hochvolt-Abschaltung trotz Anforderung | 1 |
| 0x220515 | Hochvolt-Powermanagement: keine Hochvolt-Freigabe trotz Anforderung | 1 |
| 0x220516 | Hochvolt-Powermanagement, Abschaltung: leichter Aufprall vom Aufprallsensor erkannt | 1 |
| 0x220517 | Hochvolt-Powermanagement, Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop): Fehlfunktion | 0 |
| 0x220518 | Hochvolt-Powermanagement, Niedervolt-Bordnetz: Unterversorgung | 1 |
| 0x220519 | Hochvolt-Powermanagement, Hochvoltbatterie, Schütze: ein Kontakt verklebt/festgebrannt | 1 |
| 0x220520 | Hochvolt-Powermanagement, Hochvoltbatterie, Schütze: zwei Kontakte verklebt/festgebrannt | 1 |
| 0x220521 | Hochvolt-Powermanagement, batterieloser Betrieb: verhindert da Schützkontakt verklebt/festgebrannt | 1 |
| 0x220560 | Notlaufmanager: Anforderung Abschaltung Elektromaschine aufgrund Fehler in DME, der als Ersatzreaktion einen AKS auf der EME anfordert. | 1 |
| 0x220561 | Notlaufmanager: Anforderung Generatorbetrieb Elektromaschine aufgrund Fehler in DME, der als Ersatzreaktion die Nullstromregelung (UCTL) auf der EME anfordert. | 1 |
| 0x220562 | Kommunikation: Signal (BA_MCTL_IST) ausgefallen oder ungültig; Betriebsart Elektromaschine unplausibel | 1 |
| 0x220563 | Check-Control-Meldung: Antrieb gestört. Achtung, ab SOP 7/12 Änderung auf: Check-Control-Meldung: Antrieb Gemäßigt fahren. | 0 |
| 0x220564 | Notlaufmanager: Anforderung EGS-Zwangshochschaltung (hoch) aufgrund Fehler in DME | 0 |
| 0x220565 | Notlaufmanager: Anforderung EGS-Zwangshochschaltung (niedrig) aufgrund Fehler in DME | 1 |
| 0x220567 | Notlaufmanager: Anforderung Leistungsreduzierung elektrischer Kältemittelverdichter aufgrund Fehler in DME | 1 |
| 0x220568 | Notlaufmanager, Hochvolt-Batterie: Serviceanforderung. Es liegt der Kategorie 3 Fehler (Batterie Service Request) auf der SME vor. | 1 |
| 0x220569 | Notlaufmanager, Hochvolt-Batterie: sofortige Schützöffung. Es liegt der Kategorie 7 Fehler (Batterie Switsch Open Immediately) auf der SME vor. | 1 |
| 0x22056A | Notlaufmanager, Hochvolt-Batterie: angeforderte Schützöffnung. Es liegt der Kategorie 6 Fehler (kommandierte Schützöffnung) auf der SME vor. | 1 |
| 0x22056B | Notlaufmanager, Hochvolt-Batterie: Batteriefehler. Es liegt der Kategorie 5 Fehler (Batterie Fehler) auf der SME vor. | 1 |
| 0x22056C | Kommunikation: Signal (I_BATT_SME) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112) ausgefallen oder ungültig | 1 |
| 0x22056D | Kommunikation: Signal (MD_BREMS_REIB_FW) in FA-CAN, Botschaft (Ist Bremsmoment Summe, 0xEF) ausgefallen oder ungültig | 1 |
| 0x22056E | Kommunikation: Signal (MD_EM1_IST) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x22056F | Kommunikation: Signal (MD_EM1_MAX_DYN) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x220570 | Kommunikation: Signal (MD_EM1_MIN_DYN) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x220571 | Kommunikation: Signal (MD_EM1_MXMN_XCTL_DME) in FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2) ausgefallen oder ungültig | 1 |
| 0x220572 | Kommunikation: Signal (MD_EM1_SOLL_DME) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x220573 | Kommunikation: Signal (MD_EM1_WUNSCH_SOCR) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x220574 | Kommunikation: Signal (MD_RAD_RSOLL) in FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4) oder (Radmoment Antrieb 5, 40.3.4) ausgefallen oder ungültig | 1 |
| 0x220575 | Kommunikation: Signal (MD_RADI_KSOLL) in A-CAN, Botschaft (Drehmoment Kurbelwelle 3, 0xA7) ausgefallen oder ungültig | 1 |
| 0x220576 | Kommunikation: Signal (MDK_IST_VM) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x220578 | Kommunikation: Signal (MDK_SOLL) in FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2) ausgefallen oder ungültig | 1 |
| 0x220579 | Kommunikation: Signal (MDK_WUNSCH_LADMX) in A-CAN, Botschaft (OBD Anfrage Begrenzung Drehmoment, 0x41D) ausgefallen oder ungültig | 1 |
| 0x22057A | Kommunikation: Signal (N_ABTRIEB) in A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA) oder A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) ausgefallen oder ungültig | 1 |
| 0x22057B | Kommunikation: Signal (N_EM1_IST) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x22057C | Kommunikation: Signal (N_EM1_SOLL_DME) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x22057D | Kommunikation: Signal (N_RAD_H) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1) ausgefallen oder ungültig | 1 |
| 0x22057E | Kommunikation: Signal (NKW) in A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5) ausgefallen oder ungültig | 1 |
| 0x220580 | Kommunikation: Signal (PWG_IST) in FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4) ausgefallen oder ungültig | 1 |
| 0x220581 | Notlaufmanager: Anforderung Öffnung Relais Zustarteinrichtung aufgrund Fehler in DME | 0 |
| 0x220582 | Hochvolt-Powermanagement: Anforderung Startergenerator-Notlauf von Notlaufmanager | 0 |
| 0x220583 | Kommunikation: Signal (SOC_HVB_IST) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112) ausgefallen oder ungültig | 1 |
| 0x220584 | Kommunikation: Signal (SOC_HVB_MXMN) in FA-CAN, Botschaft (Ist Bremsmoment Summe, 0xEF) ausgefallen oder ungültig | 1 |
| 0x220586 | Kommunikation: Signal (ST_ABLAUF_EGS) in A-CAN, Botschaft (Status Getriebe Hybrid, 0x409) ausgefallen oder ungültig | 1 |
| 0x220587 | Kommunikation: Signal (ST_ANF_NL_DME) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x220588 | Kommunikation: Signal (ST_ANTRIEB_FAHRZEUG) in FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2) ausgefallen oder ungültig | 1 |
| 0x220589 | Kommunikation: Signal (ST_BREMS) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2) ausgefallen oder ungültig | 1 |
| 0x22058A | Kommunikation: Signal (ST_ERR_EGS) in A-CAN, Botschaft (Status Getriebe Hybrid, 0x409) ausgefallen oder ungültig | 1 |
| 0x22058B | Kommunikation: Signal (ST_K0) in A-CAN, Botschaft (Status Getriebe Hybrid, 0x409) ausgefallen oder ungültig | 1 |
| 0x22058C | Kommunikation: Signal (ST_Q_PBREMSU) in FlexRay, Botschaft (Daten Bremssystem Motorsteuerung, 102.0.2) ausgefallen oder ungültig | 1 |
| 0x22058D | Kommunikation: Signal (ST_Q_V_FZG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) ausgefallen oder ungültig | 1 |
| 0x22058E | Kommunikation: Signal (U_BATT_SME) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112) ausgefallen oder ungültig | 1 |
| 0x22058F | Kommunikation: Signal (V_FZG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) ausgefallen oder ungültig | 1 |
| 0x220590 | Kommunikation: Signal (N_RAD_H) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1) ausgefallen oder ungültig ODER Raddrehzahlsensor hinten links defekt | 0 |
| 0x220591 | Kommunikation: Signal (N_RAD_H) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1) ausgefallen oder ungültig ODER Raddrehzahlsensor hinten rechts defekt | 0 |
| 0x220592 | Notlaufmanager: Anforderung aktiver Startergenerator-Notlauf aufgrund Ausfall Generatorbetrieb Elektromaschine | 0 |
| 0x220601 | Hybridsystem, Sicherheitsabschaltung: Anforderung Abschaltung Elektromaschine | 0 |
| 0x220602 | Hybridsystem, Sicherheitsabschaltung: Anforderung schnelle Abschaltung Elektromaschine | 0 |
| 0x220604 | EME, interner Fehler, Sicherheitsfunktion: Momentengrenzen Elektromaschine überschritten | 0 |
| 0x220606 | EME, interner Fehler, Sicherheitsfunktion: Prozessorfehler | 0 |
| 0x220607 | EME, interner Fehler, Sicherheitsfunktion: Stromsumme Stromsensoren unplausibel | 0 |
| 0x220608 | EME, interner Fehler, Sicherheitsfunktion: Tastgrad Elektromaschinenansteuerung unplausibel | 0 |
| 0x220609 | EME, interner Fehler, Sicherheitsfunktion: Speicherfehler | 0 |
| 0x22060A | EME, interner Fehler, Sicherheitsfunktion: Drehzahl Elektromaschine unplausibel | 0 |
| 0x22060B | EME, interner Fehler, Sicherheitsfunktion: berechnetes Ist-Moment Elektromaschine unplausibel | 0 |
| 0x22060C | EME, interner Fehler, Sicherheitsfunktion: Ist-Moment Elektromaschine unplausibel | 0 |
| 0x22060D | EME, interner Fehler, Sicherheitsfunktion: Eingangsspannung unplausibel | 0 |
| 0x22060E | EME, interner Fehler, Watchdog: Fehlerzähler Watchdog unplausibel gegenüber Fehlerzähler Controller | 0 |
| 0x22060F | EME, interner Fehler, Abschaltpfadtest: Fehlfunktion | 0 |
| 0x220610 | EME, interner Fehler, Abschaltpfadtest: Klemme 15 aus während Abschaltpfadtest | 0 |
| 0x220611 | EME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x220612 | EME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x220620 | EME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x220660 | CCM606 wird angezeit, Antrieb demnächst prüfen | 0 |
| 0x220700 | Montagemode: aktiv | 0 |
| 0x22070A | Berechung des RBM-Zyklus: nicht möglich (Meldung von DME)  | 0 |
| 0x220710 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Fehlfunktion | 0 |
| 0x220720 | Keine EWS4 Client- Freigabe trotz Drehmomentanforderung. | 0 |
| 0x220730 | Hybridsystem, Sicherheitsabschaltung: Aufprallsignal detektiert | 0 |
| 0x220740 | Resethistorie: Anforderung Reset von BMW | 0 |
| 0x220741 | Resethistorie: Anforderung Reset von Reset-Gruppe | 0 |
| 0x220742 | Resethistorie: Anforderung Reset von Reset-ID | 0 |
| 0x220743 | Resethistorie: Anforderung Reset von Reset-ID-Bereich | 0 |
| 0x220744 | Resethistorie: Anforderung Reset von BMW aufgrund Komplement Ausfall | 0 |
| 0x220745 | Resethistorie: Anforderung Reset von ZFS aufgrund Komplement Ausfall | 0 |
| 0x220746 | Resethistorie: Anforderung Reset von Überwachung MOCADC | 0 |
| 0x220747 | Resethistorie: Anforderung Reset von Überwachung MOCMEM | 0 |
| 0x220748 | Resethistorie: Anforderung Reset von Traps | 0 |
| 0x220749 | Resethistorie: Anforderung Reset von ZFS | 0 |
| 0x221000 | Hochvolt-Batterie, Schützaktivierung: Signal ungültig (gemeldet vom SME) | 1 |
| 0x221001 | Hochvolt-Batterie, Minuspol-Schütz, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221002 | Hochvolt-Batterie, Minuspol-Schütz, Ansteuerung: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221003 | Hochvolt-Batterie, Minuspol-Schütz, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221004 | Hochvolt-Batterie, Spannungs- und Stromsensor, Spannungsmesspfad 1: Messwert zu hoch (gemeldet vom SME) | 1 |
| 0x221005 | Hochvolt-Batterie, Spannungs- und Stromsensor, Spannungsmesspfad 1: Messwert zu niedrig (gemeldet vom SME) | 1 |
| 0x221006 | Hochvolt-Batterie, Spannungs- und Stromsensor, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221007 | Hochvolt-Batterie, Spannungs- und Stromsensor: interner Sensorfehler (gemeldet vom SME) | 1 |
| 0x221008 | Hochvolt-Batterie, Spannungsüberwachungskreis 1: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22100A | Hochvolt-Batterie, Spannungsüberwachungskreis 1: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22100B | Hochvolt-Batterie, Spannungsüberwachungskreis 2: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22100C | Hochvolt-Batterie, Spannungsüberwachungskreis 2: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22100D | Hochvolt-Batterie, Spannungsüberwachungskreis 3: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22100E | Hochvolt-Batterie, Spannungsüberwachungskreis 3: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22100F | Hochvolt-Batterie, Spannungsüberwachungskreis 4: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221010 | Hochvolt-Batterie, Spannungsüberwachungskreis 4: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221011 | Hochvolt-Batterie, Spannungsüberwachungskreis 5: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221012 | Hochvolt-Batterie, Spannungsüberwachungskreis 5: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221013 | Hochvolt-Batterie, Spannungsüberwachungskreis 6: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221014 | Hochvolt-Batterie, Spannungsüberwachungskreis 6: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221015 | Hochvolt-Batterie, Spannungsüberwachungskreis 7: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221016 | Hochvolt-Batterie, Spannungsüberwachungskreis 7: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221017 | Hochvolt-Batterie, Spannungsüberwachungskreis 8: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221018 | Hochvolt-Batterie, Spannungsüberwachungskreis 8: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221019 | Hochvolt-Batterie, Zellblock 1, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22101A | Hochvolt-Batterie, Zellblock 1, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22101B | Hochvolt-Batterie, Zellblock 2, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22101C | Hochvolt-Batterie, Zellblock 2, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22101D | Hochvolt-Batterie, Zellblock 3, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22101E | Hochvolt-Batterie, Zellblock 3, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22101F | Hochvolt-Batterie, Zellblock 4, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221020 | Hochvolt-Batterie, Zellblock 4, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221021 | Hochvolt-Batterie, Zellblock 5, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221022 | Hochvolt-Batterie, Zellblock 5, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221023 | Hochvolt-Batterie, Zellblock 6, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221024 | Hochvolt-Batterie, Zellblock 6, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221025 | Hochvolt-Batterie, Zellblock 7, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221026 | Hochvolt-Batterie, Zellblock 7, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221027 | Hochvolt-Batterie, Zellblock 8, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221028 | Hochvolt-Batterie, Zellblock 8, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221029 | Hochvolt-Batterie, Spannungsüberwachungskreise, Nachlaufdiagnose: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x22102A | Hochvoltsicherheitsschalter Service Disconnect - Auswertung unplausibel (gemeldet vom SME) | 1 |
| 0x22102B | Aufprallsensor: leichter Aufprall erkannt (gemeldet von SME) (gemeldet vom SME) | 1 |
| 0x22102C | Aufprallsensor: schwerer Aufprall erkannt  (gemeldet vom SME) | 1 |
| 0x22102D | Hochvolt-Batterie, Pluspol-Schütz, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x22102E | Hochvolt-Batterie, Pluspol-Schütz, Ansteuerung: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x22102F | Hochvolt-Batterie, Pluspol-Schütz, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221030 | Hochvolt-Batterie, Vorbelastungs-Schütz, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221031 | Bordnetz 14V: Unterspannung (gemeldet vom SME) | 1 |
| 0x221032 | Aufprallsensor: Unterspannung (gemeldet vom SME) | 1 |
| 0x221033 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil: klemmt offen (gemeldet vom SME) | 1 |
| 0x221034 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil: klemmt geschlossen (gemeldet vom SME) | 1 |
| 0x221035 | Hochvolt-Batterie, Spannungs- und Stromsensor, Messwerterfassung: fehlerhaft  (gemeldet vom SME) | 1 |
| 0x221036 | Hochvolt-Batterie, Minuspol-Schütz: Kontakt verklebt/festgebrannt im geschlossenen Zustand (gemeldet vom SME) | 1 |
| 0x221037 | Hochvolt-Batterie, Minuspol-Schütz: Kontakt verklebt/festgebrannt im offenen Zustand (gemeldet vom SME) | 1 |
| 0x221038 | Hochvolt-Batterie, Pluspol-Schütz: Kontakt verklebt/festgebrannt im geschlossenen Zustand (gemeldet vom SME) | 1 |
| 0x221039 | Hochvolt-Batterie, Pluspol-Schütz: Kontakt verklebt/festgebrannt im offenen Zustand (gemeldet vom SME) | 1 |
| 0x22103A | Hochvolt-Batterie, Entladestrom: zu hoch (gemeldet vom SME) | 1 |
| 0x22103B | Hochvolt-Batterie, Ladestrom: zu hoch (gemeldet vom SME) | 1 |
| 0x22103C | Hochvolt-Batteriezelle, Ladespannung: zu hoch (gemeldet vom SME) | 1 |
| 0x22103D | Hochvolt-Batteriezelle, Entladespannung: zu niedrig (gemeldet vom SME) | 1 |
| 0x22103E | Hochvolt-Batterie, Ladespannung: zu hoch (gemeldet vom SME) | 1 |
| 0x22103F | Hochvolt-Batterie, Entladespannung: zu niedrig (gemeldet vom SME) | 1 |
| 0x221040 | SME, interner Fehler: Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop) Signal wird nicht generiert (gemeldet vom SME) | 1 |
| 0x221041 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221042 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Kurzschluss der Leitungen zueinander (gemeldet vom SME) | 1 |
| 0x221043 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221044 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221045 | Hochvolt-Batterie, Vorladestrom: zu hoch (gemeldet vom SME) | 1 |
| 0x221046 | Hochvolt-Batterie, Vorladungszeit: zu lang (gemeldet vom SME) | 1 |
| 0x221048 | Hochvolt-Bordnetz, Vorladung, elektrisch: Kurzschluss der Leitungen zueinander (gemeldet vom SME) | 1 |
| 0x221049 | Hochvolt-Batterie. Strom: unplausibel (gemeldet vom SME) | 1 |
| 0x22104A | Hochvolt-Bordnetz: Spannung unplausibel, kein Ersatzwert (gemeldet vom SME) | 1 |
| 0x22104B | Hochvolt-Batterie, Auswerteelektronik für Zellblock: Ausfall Einzelzellspannung (gemeldet vom SME) | 1 |
| 0x22104C | Hochvolt-Batterie, Spannung: unplausibel, kein Ersatzwert (gemeldet vom SME) | 1 |
| 0x22104D | Hochvolt-Batterie, Temperatursensor 1: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x22104E | Hochvolt-Batterie, Temperatursensor 2: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x22104F | Hochvolt-Batterie, Temperatursensor 3: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221050 | Hochvolt-Batterie, Temperatursensor 4: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221051 | Hochvolt-Batterie, Temperatursensor 5: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221052 | Hochvolt-Batterie, Temperatursensor 6: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221053 | Hochvolt-Batterie, Temperatursensor 7: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221054 | Hochvolt-Batterie, Temperatursensor 8: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221055 | Hochvolt-Batterie, Temperatursensoren: Mehrfachausfall (gemeldet vom SME) | 1 |
| 0x221056 | Hochvolt-Batterie, Temperatursensor 1: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221057 | Hochvolt-Batterie, Temperatursensor 2: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221058 | Hochvolt-Batterie, Temperatursensor 3: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221059 | Hochvolt-Batterie, Vorbelastungs-Schütz, Ansteuerung: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x22105A | Hochvolt-Batterie, Vorbelastungs-Schütz, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x22105B | Hochvolt-Batterie, Minuspol-Schütz, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105C | Hochvolt-Batterie, Pluspol-Schütz, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105D | Hochvolt-Batterie, Temperatursensor 4: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105E | Hochvolt-Batterie, Temperatursensor 5: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105F | Hochvolt-Batterie, Temperatursensor 6: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221060 | Hochvolt-Batterie, Temperatursensor 7: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221061 | Hochvolt-Batterie, Temperatursensor 8: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221062 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 1 (gemeldet vom SME) | 1 |
| 0x221063 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 2 (gemeldet vom SME) | 1 |
| 0x221064 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 3 (gemeldet vom SME) | 1 |
| 0x221065 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 4 (gemeldet vom SME) | 1 |
| 0x221066 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 5 (gemeldet vom SME) | 1 |
| 0x221067 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 6 (gemeldet vom SME) | 1 |
| 0x221068 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 7 (gemeldet vom SME) | 1 |
| 0x221069 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 8 (gemeldet vom SME) | 1 |
| 0x22106A | Hochvolt-Batterie, Alterung: Austausch erforderlich (gemeldet vom SME) | 1 |
| 0x22106B | Hochvolt-Batterie, Ladezustand: hoch (gemeldet vom SME) | 1 |
| 0x22106C | Hochvolt-Batterie, Ladezustand: niedrig (gemeldet vom SME) | 1 |
| 0x22106D | Hochvolt-Batterie, Zellüberwachung: mindestens eine Einzelzelle defekt (gemeldet vom SME) | 1 |
| 0x22106E | Hochvolt-Batterie, Zellüberwachung: Tiefentladung (gemeldet vom SME) | 1 |
| 0x22106F | Hochvolt-Batterie: Übertemperatur erkannt, Leistungsbegrenzung  (gemeldet vom SME) | 1 |
| 0x221070 | Hochvolt-Batterie, Auswerteelektronik für Zellblock: Hardware defekt  (gemeldet vom SME) | 1 |
| 0x221071 | Hochvolt-Batterie, Schütze Lowside, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221072 | Sicherheitskonzept: Mehrfachfehler Ebene 2 (gemeldet vom SME) | 1 |
| 0x221074 | SME, A-Can: Kommunikationsfehler (gemeldet vom SME) | 1 |
| 0x221075 | Botschaft (Status Elektromotor) fehlt: Empfänger SME, Sender EME (gemeldet vom SME) | 1 |
| 0x221076 | Botschaft (Außentemperatur): fehlt (gemeldet vom SME) | 1 |
| 0x221077 | Botschaft (Freigabe Kühlung Hochvoltspeicher) fehlt: Empfänger SME, Sender IHKA (gemeldet vom SME) | 1 |
| 0x221078 | Botschaft (Fahrzeuggeschwindigkeit): fehlt (gemeldet vom SME) | 1 |
| 0x221079 | Botschaft (Klemmen): fehlt (gemeldet vom SME) | 1 |
| 0x22107A | SME, interner S-CAN: Kommunikationsfehler (gemeldet vom SME) | 1 |
| 0x22107B | Botschaft (Hochvolt-Batterie, Spannungs- und Stromsensor): interner Prüfsummenfehler (gemeldet vom SME) | 1 |
| 0x22107C | SME, interner Fehler: interner CSC-CAN, Kommunikation mit Auswerteelektronik für Zellblock fehlt (gemeldet vom SME) | 1 |
| 0x22107D | Hochvolt-Batterie, Vorbelastungs-Schütz, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22107E | SME, interner Fehler: 5 Volt Versorgungsspannung Unterspannung (gemeldet vom SME) | 1 |
| 0x22107F | Hochvolt-Batterie, Auswerteelektronik für Zellblock, elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221080 | Hochvolt-Batterie, Auswerteelektronik für Zellblock, elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221081 | Hochvolt-Batterie, Auswerteelektronik für Zellblock, elektrisch: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221082 | Hochvolt-Batterie, Auswerteelektronik für Zellblock, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221083 | Hochvolt-Batterie, Spannungs- und Stromsensor, elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221084 | Hochvolt-Batterie, Spannungs- und Stromsensor, elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221085 | Hochvolt-Batterie, Spannungs- und Stromsensor, elektrisch: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221086 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221087 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil: Ansteuerung nach Plus (gemeldet vom SME) | 1 |
| 0x221088 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221089 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22108A | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler: Temperatur zu hoch (gemeldet vom SME) | 1 |
| 0x22108B | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler: Temperatur zu niedrig (gemeldet vom SME) | 1 |
| 0x22108C | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler, elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x22108D | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler, elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x22108E | SME, interner Fehler: unerwarteter Reset festgestellt (gemeldet vom SME) | 1 |
| 0x22108F | SME, interner Fehler: RAM-Fehler im Betrieb aufgetreten (gemeldet vom SME) | 1 |
| 0x221090 | SME, interner Fehler: ROM-Fehler im Betrieb aufgetreten (gemeldet vom SME) | 1 |
| 0x221091 | Hochvolt-Batterie, Spannungs- und Stromsensor, Strommesspfad: Messwerte ungültig (gemeldet vom SME) | 1 |
| 0x221092 | Hochvolt-Batterie, Spannungs- und Stromsensor, Spannungsmesspfad 1: Messwerte ungültig (gemeldet vom SME) | 1 |
| 0x221093 | Hochvolt-Batterie, Spannungs- und Stromsensor, Strommesspfad: Messwert zu hoch (gemeldet vom SME) | 1 |
| 0x221094 | Hochvolt-Batterie, Spannungs- und Stromsensor, Strommesspfad: Messwert zu niedrig (gemeldet vom SME) | 1 |
| 0x221200 | DSC, interner Fehler: Hardware-Fehler (gemeldet vom DSC) | 1 |
| 0x221201 | Bremspedalwegsensor, elektrisch: Leitungsunterbrechung (gemeldet vom DSC) | 1 |
| 0x221202 | Bremspedalwegsensor: Unterspannung (gemeldet vom DSC) | 1 |
| 0x221203 | Bremspedalwegsensor - elektrischer Fehler oder Sensor defekt (gemeldet vom DSC) | 1 |
| 0x221204 | Bremspedalwegsensor: Überspannung (gemeldet vom DSC) | 1 |
| 0x221205 | Bremspedalwegsensor, elektrisch: Kurzschluss nach Masse (gemeldet vom DSC) | 1 |
| 0x221206 | Bremspedalwegsensor, elektrisch: Kurzschluss nach Plus (gemeldet vom DSC) | 1 |
| 0x221209 | Bremskraftverstärker Drucksensor: Unterspannung (gemeldet vom DSC) | 1 |
| 0x22120A | Bremskraftverstärker Drucksensor: Überspannung (gemeldet vom DSC) | 1 |
| 0x22120B | Bremssystem: Überwachung DSC (gemeldet vom DSC) | 1 |
| 0x22120C | DSC: Kommunikation mit Motorsteuergerät fehlt (gemeldet vom DSC) | 1 |
| 0x22120D | Bremspedalwegsensor, Plausibilität: Signal außerhalb Gültigkeitsbereich (gemeldet vom DSC) | 1 |
| 0x22120E | DSC Steuergerät ist nicht codiert | 1 |
| 0x221210 | Bremskraftverstärker Drucksensor, Plausibilität: Signal außerhalb Gültigkeitsbereich (gemeldet vom DSC) | 1 |
| 0x221211 | Bremskraftverstärker Drucksensor, Testpuls: zu hoch (gemeldet vom DSC) | 1 |
| 0x221212 | Bremskraftverstärker Drucksensor, Testpuls: zu niedrig (gemeldet vom DSC) | 1 |
| 0x221213 | Bremspedalwegsensor ist nicht kalibriert | 1 |
| 0x221214 | Raddrehzahlsensor - Vorne Rechts - Anfahrerkennung fehlerhaft | 1 |
| 0x221215 | Raddrehzahlsensor - Vorne Rechts - Plausifehler | 1 |
| 0x221216 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft | 1 |
| 0x221217 | Raddrehzahlsensor - Hinten Links - Plausifehler | 1 |
| 0x221218 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft | 1 |
| 0x221219 | Raddrehzahlsensor - Hinten Rechts - Plausifehler | 1 |
| 0x221220 | Raddrehzahlsensor - Vorne Links - Rauschüberwachung | 1 |
| 0x221221 | Raddrehzahlsensor - Vorne Rechts - Rauschüberwachung | 1 |
| 0x221222 | Raddrehzahlsensor - Hinten Links - Rauschüberwachung | 1 |
| 0x221223 | Raddrehzahlsensor - Hinten Rechts - Rauschüberwachung | 1 |
| 0x221224 | Drucksensor - Rauschüberwachung | 1 |
| 0x221225 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 1 |
| 0x221226 | Drucksensor - Plausibilisierung Temperatur intern | 1 |
| 0x221227 | Drucksensor - Interne Plausibilisierung fehlgeschlagen | 1 |
| 0x221228 | Drucksensor - Hauptzylinder - Leitungsfehler | 1 |
| 0x221229 | Drucksensor - Hauptzylinder - Leitungsfehler | 1 |
| 0x22122A | Drucksensor - Hauptzylinder - Fehler in Spannungsversorgung | 1 |
| 0x22122B | Drucksensor - nicht kalibriert | 1 |
| 0x22122C | Raddrehzahlsensor - Vorne Links - Falscher Sensortyp | 1 |
| 0x22122D | Raddrehzahlsensor - Vorne Rechts - Falscher Sensortyp | 1 |
| 0x22122E | Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 1 |
| 0x22122F | Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 1 |
| 0x221230 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221231 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221232 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221233 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221234 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221235 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221236 | DSC intern, Fehler im Flexray Controller | 1 |
| 0x221237 | Mischverbau, Allrad-Botschaften im 2WD-codierten Fahrzeug | 1 |
| 0x221238 | DSC interner Fehler | 1 |
| 0x221239 | DSC interner Fehler | 1 |
| 0x22123A | DSC interner Fehler | 1 |
| 0x22123B | DSC interner Fehler | 1 |
| 0x22123C | DSC interner Fehler, Ventilfehler | 1 |
| 0x22123D | DSC interner Fehler, Ventilfehler | 1 |
| 0x22123E | DSC interner Fehler, Ventilfehler | 1 |
| 0x22123F | DSC interner Fehler, Ventilfehler | 1 |
| 0x221240 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221241 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221242 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221243 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221244 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221245 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221246 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221247 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221248 | DSC interner Fehler, Pumpenfehler | 1 |
| 0x221249 | DSC interner Fehler, Pumpenfehler | 1 |
| 0x22124A | DSC-Hydraulikeinheit passt nicht zur DSC-Elektronikeinheit | 1 |
| 0x22124B | DSC-interner Flexray-Tranceiver meldet Error auf den Flexray-Busleitungen | 1 |
| 0x22125A | Raddrehzahlsensor - Vorne Links - Anfahrerkennung fehlerhaft | 1 |
| 0x22125B | Raddrehzahlsensor - Vorne Links - Plausifehler | 1 |
| 0x22125C | Nach einer applizierbaren Anzahl von Anfragen (Challenges) stimmt die Antwort (Response) nicht mit der Kontrollrechnung überein. | 0 |
| 0x221400 | Klimakompressor Funktionsprüfung fehlgeschlagen | 1 |
| 0x221401 | RAM-Fehler in IHKA | 1 |
| 0x221402 | EEPROM Fehler in IHKA | 1 |
| 0x221403 | ROM Fehler in IHKA | 1 |
| 0x221404 | Laufzeitfehler in IHKA | 1 |
| 0x221405 | interne IHKA Fehler | 1 |
| 0x221406 | interne IHKA Fehler | 1 |
| 0x221407 | elektrischer Klimakompressor Platinen-Temperaturfühler auf Masse | 1 |
| 0x221408 | elektrischer Klimakompressor Platinen-Temperaturfühler auf Batterie | 1 |
| 0x22140A | elektrischer Klimakompressor Platinen-Temperaturfühler Temperatur zu gering | 1 |
| 0x22140B | elektrischer Klimakompressor Platinen-Tempraturfühler Plausibilisierung fehlgeschlagen | 1 |
| 0x22140C | elektrischer Klimakompressor Spannungssensor auf Masse | 1 |
| 0x22140D | elektrischer Klimakompressor Spannungssensor auf Batterie | 1 |
| 0x22140E | elektrischer Klimakompressor Spannungssensor zu hoch | 1 |
| 0x22140F | elektrischer Klimakompressor Spannungssensor zu gering | 1 |
| 0x221411 | elektrischer Klimakompressor ECU Spannungssensor auf Masse | 1 |
| 0x221412 | elektrischer Klimakompressor ECU Spannungssensor auf Batterie | 1 |
| 0x221413 | elektrischer Klimakompressor ECU Spannungssensor zu hoch | 1 |
| 0x221414 | elektrischer Klimakompressor ECU Spannungssensor zu gering | 1 |
| 0x221415 | elektrischer Klimakompressor Phasenstromsensor U auf Masse | 1 |
| 0x221416 | elektrischer Klimakompressor Phasenstromsensor U auf Batterie | 1 |
| 0x221417 | elektrischer Klimakompressor Phasenstromsensor U Spannung zu hoch | 1 |
| 0x221418 | elektrischer Klimakompressor Phasenstromsensor U Spannung zu gering | 1 |
| 0x221419 | elektrischer Klimakompressor Phasenstromsensor U Spannung Plausibilisierung fehlgeschlagen | 1 |
| 0x22141A | elektrischer Klimakompressor Phasenstromsensor V Spannung zu gering | 1 |
| 0x22141B | elektrischer Klimakompressor Phasenstromsensor V Spannung zu hoch | 1 |
| 0x22141C | elektrischer Klimakompressor Phasenstromsensor V auf Batterie | 1 |
| 0x22141D | elektrischer Klimakompressor Phasenstromsensor V auf Masse | 1 |
| 0x22141E | elektrischer Klimakompressor Phasenstromsensor V Spannung Plausibilisierung fehlgeschlagen | 1 |
| 0x22141F | elektrischer Klimakompressor Phasenstromsensor W auf Masse | 1 |
| 0x221420 | elektrischer Klimakompressor Phasenstromsensor W auf Batterie | 1 |
| 0x221421 | elektrischer Klimakompressor Phasenstromsensor W Spannung zu hoch | 1 |
| 0x221422 | elektrischer Klimakompressor Phasenstromsensor W Spannung zu gering | 1 |
| 0x221423 | elektrischer Klimakompressor Phasenstromsensor W Spannung Plausibilisierung fehlgeschlagen | 1 |
| 0x221424 | elektrischer Klimakompressor interner RAM Fehler | 1 |
| 0x221425 | elektrischer Klimakompressor interner ROM Fehler | 1 |
| 0x221426 | elektrischer Klimakompressor interner EEPROM Fehler | 1 |
| 0x221427 | elektrischer Klimakompressor interner Fehler | 1 |
| 0x221428 | elektrischer Klimakompressor interner Fehler | 1 |
| 0x221429 | elektrischer Klimakompressor interner Fehler | 1 |
| 0x22142A | elektrischer Klimakompressor Spannungssensor 2 auf Masse | 1 |
| 0x22142B | elektrischer Klimakompressor HV Sensor 2 auf Masse | 1 |
| 0x22142C | elektrischer Klimakompressor Platinen-Temperaturfühler Temperatur zu hoch | 1 |
| 0x22142D | elektrischer Klimakompressor Platinen-Temperaturfühler 2 auf Masse | 1 |
| 0x22142E | elektrischer Klimakompressor Spannungssensor Plausibilisierung fehlgeschlagen | 1 |
| 0x221430 | elektrischer Klimakompressor Platinen-Temperaturfühler 2 auf Batterie | 1 |
| 0x221431 | elektrischer Klimakompressor Platinen-Temperaturfühler 2 Temperatur zu hoch | 1 |
| 0x221432 | elektrischer Klimakompressor Platinen-Temperaturfühler Temperatur zu gering | 1 |
| 0x221433 | Kältemitteldrucksensor auf Masse | 1 |
| 0x221434 | Kältemitteldrucksensor auf Batterie | 1 |
| 0x221435 | Kältemitteldrucksensor Druck zu hoch | 1 |
| 0x221436 | Kältemitteldrucksensor Druck zu gering | 1 |
| 0x221437 | Kältemitteldrucksensor Plausibilisierung fehlgeschlagen | 1 |
| 0x221438 | Fehler auf LIN | 1 |
| 0x221439 | elektrischer Klimakompressor LIN Kommunikationsfehler | 1 |
| 0x221440 | K-CAN Botschafts Fehler | 1 |
| 0x221441 | K-CAN Bus Fehler | 1 |
| 0xD78402 | CAN Hardware: defekt | 0 |
| 0xD78405 | FlexRay Hardware: defekt | 0 |
| 0xD7840A | FA-CAN: Kommunikationsfehler | 1 |
| 0xD78420 | FlexRay: Kommunikationsfehler | 1 |
| 0xD78486 | A-CAN: Kommunikationsfehler | 1 |
| 0xD78BFF | Netzwerkfehler: nur zum Test | 1 |
| 0xD78C01 | H-LIN 1: Kommunikationsfehler | 1 |
| 0xD78C02 | H-LIN 2: Kommunikationsfehler | 1 |
| 0xD78C03 | LIN: Konfigurationsfehler | 0 |
| 0xD79400 | FlexRay, Botschaft (Daten Bremssystem Motorsteuerung, 102.0.2): fehlt | 1 |
| 0xD79401 | FlexRay, Botschaft (ZV und Klappenzustand, 116.1.2): fehlt | 1 |
| 0xD79402 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): Aliveprüfung | 1 |
| 0xD79403 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): Prüfsumme falsch | 1 |
| 0xD79404 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): fehlt | 1 |
| 0xD79405 | FlexRay, Botschaft (Status Motor Start Auto, 230.1.2): Aliveprüfung | 1 |
| 0xD79406 | FlexRay, Botschaft (Status Motor Start Auto, 230.1.2): Prüfsumme falsch | 1 |
| 0xD79407 | FlexRay, Botschaft (Status Motor Start Auto, 230.1.2): fehlt | 1 |
| 0xD79408 | FlexRay, Botschaft (Status Energieerzeugung, 232.1.2): fehlt | 1 |
| 0xD79409 | FlexRay, Botschaft (Daten Antriebsstrang 3, 251.1.4): fehlt | 1 |
| 0xD7940A | FlexRay, Botschaft (Spannung Bordnetz, 251.2.4): fehlt | 1 |
| 0xD7940B | FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): Aliveprüfung | 1 |
| 0xD7940C | FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): fehlt | 1 |
| 0xD7940D | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik/Konfiguration Schalter Fahrdynamik 2, 272.4.8): fehlt | 1 |
| 0xD7940E | FlexRay, Botschaft (Relativzeit BN2020, 276.2.8): fehlt | 1 |
| 0xD7940F | FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4): Aliveprüfung | 1 |
| 0xD79410 | FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4): Prüfsumme falsch | 1 |
| 0xD79411 | FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4): fehlt | 1 |
| 0xD79412 | FlexRay, Botschaft (Radmoment Antrieb 5, 40.3.4): Aliveprüfung | 1 |
| 0xD79413 | FlexRay, Botschaft (Radmoment Antrieb 5, 40.3.4): Prüfsumme falsch | 1 |
| 0xD79414 | FlexRay, Botschaft (Radmoment Antrieb 5, 40.3.4): fehlt | 1 |
| 0xD79415 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): Aliveprüfung | 1 |
| 0xD79416 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): Prüfsumme falsch | 1 |
| 0xD79417 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): fehlt | 1 |
| 0xD79418 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): Aliveprüfung | 1 |
| 0xD79419 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): Prüfsumme falsch | 1 |
| 0xD7941A | FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): fehlt | 1 |
| 0xD7941B | FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): Aliveprüfung | 1 |
| 0xD7941C | FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): Prüfsumme falsch | 1 |
| 0xD7941D | FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): fehlt | 1 |
| 0xD7941E | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xD7941F | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xD79420 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xD79421 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xD79422 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xD79423 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xD79424 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xD79425 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xD79426 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xD79427 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xD79428 | FlexRay, Botschaft (Lenkwinkel Vorderachse Effektiv, 56.1.2): fehlt | 1 |
| 0xD79429 | FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2): Aliveprüfung | 1 |
| 0xD7942A | FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2): Prüfsumme falsch | 1 |
| 0xD7942B | FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2): fehlt | 1 |
| 0xD7942C | FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): fehlt | 1 |
| 0xD7942E | FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4): fehlt | 1 |
| 0xD7942F | Flexray, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 0 |
| 0xD79800 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xD79801 | FA-CAN, Botschaft (Steuerung Crashabschaltung EKP, 0x135): fehlt | 1 |
| 0xD79802 | FA-CAN, Botschaft (Bordnetz Spannungswert, 0x281): fehlt | 1 |
| 0xD79803 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xD79804 | FA-CAN, Botschaft (Anforderung Klima Hybrid, 0x299): fehlt | 1 |
| 0xD79805 | FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xD79806 | FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xD79807 | FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xD79808 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xD79809 | FA-CAN, Botschaft (Navigation System Information, 0x34E): fehlt | 1 |
| 0xD7980A | FA-CAN, Botschaft (Diagnose OBD Motor, 0x397): fehlt | 1 |
| 0xD7980B | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xD7980C | FA-CAN, Botschaft (Daten Antriebsstrang 1, 0x3FB): fehlt | 1 |
| 0xD7980D | FA-CAN, Botschaft (Dienste, 0x5F8): fehlt, Sender IHKA | 1 |
| 0xD7980E | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xD7980F | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xD79810 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xD79811 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xD79812 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xD79813 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xD79814 | FA-CAN, Botschaft (Ist Bremsmoment Summe, 0xEF): fehlt | 1 |
| 0xD79815 | FA-CAN, Botschaft (Status Diagnose OBD 1 Antriebsstrang, 0x300): Aliveprüfung | 1 |
| 0xD79816 | FA-CAN, Botschaft (Status Diagnose OBD 1 Antriebsstrang, 0x300): fehlt | 1 |
| 0xD79817 | FA-CAN, Botschaft (Status Diagnose OBD 1 Slave 1, 0x3DF): Aliveprüfung | 1 |
| 0xD79818 | FA-CAN, Botschaft (Status Diagnose OBD 1 Slave 1, 0x3DF): fehlt | 1 |
| 0xD79C00 | A-CAN, Kommunikation (DME): fehlt | 1 |
| 0xD79C01 | A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 1 |
| 0xD79C02 | A-CAN, Botschaft (Hybrid Vorgabe, 0x113): Aliveprüfung | 1 |
| 0xD79C03 | A-CAN, Botschaft (Hybrid Vorgabe, 0x113): Prüfsumme falsch | 1 |
| 0xD79C04 | A-CAN, Botschaft (Hybrid Vorgabe, 0x113): fehlt | 1 |
| 0xD79C05 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xD79C06 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xD79C07 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xD79C08 | A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA): fehlt | 1 |
| 0xD79C09 | A-CAN, Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, 0x2F5): fehlt | 1 |
| 0xD79C0A | A-CAN, Botschaft (Steuerung Kühlung Antrieb Elektrisch, 0x340): fehlt | 1 |
| 0xD79C0B | A-CAN, Botschaft (Identifikation Hochvoltspeicher, 0x363): fehlt | 1 |
| 0xD79C0C | A-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher,  0x37B): fehlt | 1 |
| 0xD79C0D | A-CAN, Botschaft (Diagnose OBD Motor, 0x397): fehlt | 1 |
| 0xD79C0E | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xD79C0F | A-CAN, Botschaft (Powermanagement Niederspannung, 0x3C9): fehlt | 1 |
| 0xD79C10 | A-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xD79C11 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xD79C12 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xD79C13 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xD79C14 | A-CAN, Botschaft (Status Ladung Hochvoltspeicher 1, 0x40D): fehlt | 1 |
| 0xD79C15 | A-CAN, Botschaft (Diagnose OBD Hybrid 2, 0x417): Aliveprüfung | 1 |
| 0xD79C16 | A-CAN, Botschaft (Diagnose OBD Hybrid 2, 0x417): fehlt | 1 |
| 0xD79C17 | A-CAN, Botschaft (Status Hybrid 2, 0x418): fehlt | 1 |
| 0xD79C18 | A-CAN, Botschaft (Status Betriebsart Hybrid 2, 0x41C): fehlt | 1 |
| 0xD79C19 | A-CAN, Botschaft (OBD Anfrage Begrenzung Drehmoment, 0x41D): fehlt | 1 |
| 0xD79C1A | A-CAN, Botschaft (Status Ladung Hochvoltspeicher 2, 0x430): fehlt | 1 |
| 0xD79C1B | A-CAN, Botschaft (Daten Hochvoltspeicher, 0x431): fehlt | 1 |
| 0xD79C1C | A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): fehlt | 1 |
| 0xD79C1D | A-CAN, Botschaft (Radmoment Antrieb 1, 0x8F): Aliveprüfung | 1 |
| 0xD79C1E | A-CAN, Botschaft (Radmoment Antrieb 1, 0x8F): Prüfsumme falsch | 1 |
| 0xD79C1F | A-CAN, Botschaft (Radmoment Antrieb 1, 0x8F): fehlt | 1 |
| 0xD79C20 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xD79C21 | A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5): Aliveprüfung | 1 |
| 0xD79C22 | A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5): Prüfsumme falsch | 1 |
| 0xD79C23 | A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5): fehlt | 1 |
| 0xD79C24 | A-CAN, Botschaft (Drehmoment Kurbelwelle 3, 0xA7): fehlt | 1 |
| 0xD7A402 | LIN, Kommunikation (EME-Kühlmittelpumpe): fehlt | 0 |
| 0xD7A800 | LIN, Kommunikation (intelligenter Batteriesensor, 2. Batterie): fehlt | 0 |
| 0xD7A801 | LIN, erweiterte Kommunikation, intelligenter Batteriesensor, 2. Batterie: Fehlfunktion | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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
| 0x023A00 | Energiesparmode: aktiv | 0 |
| 0x02FF3A | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x220000 | Elektromaschine, Resolver, elektrisch: Kurzschluss | 0 |
| 0x220001 | Elektromaschine, Resolver, Arbeitsbereich: Amplitude zu hoch | 0 |
| 0x220002 | Elektromaschine, Resolver, Arbeitsbereich: Amplitude zu niedrig | 0 |
| 0x220003 | Elektromaschine, Resolver, Plausibilität: Abweichung Signalpegel zu groß | 0 |
| 0x220004 | Elektromaschine, Resolver, Plausibilität: Abweichung Phasenwinkel zu groß | 0 |
| 0x220005 | Elektromaschine, Resolver, Plausibilität: Soll zu Ist-Position unplausibel | 0 |
| 0x220006 | Elektromaschine, Resolver: Überdrehzahl erkannt | 0 |
| 0x220020 | Elektromaschine, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220021 | Elektromaschine, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220022 | Elektromaschine, Temperatursensor, Arbeitsbereich: Temperatur zu hoch | 0 |
| 0x220023 | Elektromaschine, Temperatursensor, Arbeitsbereich: Temperatur zu niedrig | 0 |
| 0x220024 | EME, interner Fehler: Temperatursensor in der E-Maschine nicht plausibel | 0 |
| 0x220040 | Elektromaschine: Überdrehzahl erkannt | 0 |
| 0x220060 | Elektromaschine, Bauteilschutz: Abschaltung wegen Übertemperatur | 0 |
| 0x220080 | Elektromaschine, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x220081 | Elektromaschine Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x220082 | Elektromaschine Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x220083 | Hochvolt-Spannung, Plausibilität: Spannung unplausibel | 0 |
| 0x2200E0 | DC/DC-Wandler, Hochvolt-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2200E1 | DC/DC-Wandler, Hochvolt-Spannungssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2200E2 | DC/DC-Wandler, Hochvolt-Spannungssensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x2200E3 | DC/DC-Wandler, Hochvolt-Spannungssensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x2200E4 | DC/DC-Wandler, Hochvolt-Spannungssensor, Plausibilität: Spannung unplausibel | 0 |
| 0x220100 | DC/DC-Wandler, Hochvolt-Stromsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220101 | DC/DC-Wandler, Hochvolt-Stromsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220102 | DC/DC-Wandler, Hochvolt-Stromsensor Plausibilität: Strom unplausibel | 0 |
| 0x220103 | DC/DC-Wandler, Hochvolt-Strom, Plausibilität: Strom zu hoch | 0 |
| 0x220120 | DC/DC-Wandler, Niedervolt-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220121 | DC/DC-Wandler, Niedervolt-Spannungssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220122 | DC/DC-Wandler, Niedervolt-Spannungssensor, Plausibilität: Spannung unplausibel | 0 |
| 0x220123 | DC/DC-Wandler, Niedervolt-Spannungssensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x220124 | DC/DC-Wandler, Niedervolt-Spannungssensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x220140 | DC/DC-Wandler, Niedervolt-Stromsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220141 | DC/DC-Wandler, Niedervolt-Stromsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220142 | DC/DC-Wandler, Niedervolt-Stromsensor, Plausibilität: Strom unplausibel | 0 |
| 0x220143 | DC/DC-Wandler, Niedervolt-Strom, Plausibilität: Strom zu hoch | 0 |
| 0x220160 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220161 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220162 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x220163 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x220165 | DC/DC-Wandler, Zwischenkreis-Spannungssensor, Plausibilität: Spannung unplausibel | 0 |
| 0x220170 | Hochvolt-Spannung, Nachlauf: Notentladung fehlerhaft | 0 |
| 0x220180 | DC/DC-Wandler, Zwischenkreis-Stromsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220181 | DC/DC-Wandler, Zwischenkreis-Stromsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220182 | DC/DC-Wandler, Zwischenkreis-Stromsensor, Plausibilität: Strom unplausibel | 0 |
| 0x2201A0 | DC/DC-Wandler, Steuerteil, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201A1 | DC/DC-Wandler, Steuerteil, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201A2 | DC/DC-Wandler, Steuerteil: Übertemperatur erkannt | 0 |
| 0x2201A3 | DC/DC-Wandler, Steuerteil, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x2201C0 | DC/DC-Wandler, Leistungsteil, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201C1 | DC/DC-Wandler, Leistungsteil, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201C2 | DC/DC-Wandler, Leistungsteil, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x2201C3 | DC/DC-Wandler, Leistungsteil: Übertemperatur erkannt | 0 |
| 0x2201E0 | DC/DC-Wandler, interne Diagnoseleitung 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201E1 | DC/DC-Wandler, interne Diagnoseleitung 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201E2 | DC/DC-Wandler, interne Diagnoseleitung 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2201E3 | DC/DC-Wandler, interne Diagnoseleitung 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2201E4 | DC/DC-Wandler: Wirkungsgrad unplausibel | 0 |
| 0x2201E5 | DC/DC-Wandler, Zwischenkreis-Spannung, Plausibilität: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201E6 | DC/DC-Wandler, Bauteilschutz: Abschaltung wegen zu schnellem Stromanstieg | 0 |
| 0x2201E7 | DC/DC-Wandler, Hochvolt-Strom: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201E8 | DC/DC-Wandler, Niedervolt-Strom: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201E9 | DC/DC-Wandler: falsche Verpolung auf Niedervolt-Seite erkannt | 0 |
| 0x2201EA | DC/DC-Wandler, Abschaltpfadtest: Fehlfunktion | 0 |
| 0x2201EB | DC/DC-Wandler, Sollwert-Vorgaben: Fehlfunktion | 0 |
| 0x2201EC | DC/DC-Wandler, Zwischenkreisentladung: Entladezeit 1 überschritten | 0 |
| 0x2201ED | DC/DC-Wandler, Arbeits-Modus: Fehlfunktion | 0 |
| 0x2201EE | DC/DC-Wandler, Zwischenkreisentladung: Entladezeit 2 überschritten | 0 |
| 0x2201EF | DC/DC-Wandler, Standby-Modus: Fehlfunktion | 0 |
| 0x2201F0 | DC/DC-Wandler, Eigendiagnose: Niedervolt-Spannung mehrfach zu hoch | 0 |
| 0x2201F1 | DC/DC-Wandler, Hochvolt-Spannung, Plausibilität: Sollwert unterhalb gültigem Bereich | 0 |
| 0x2201F2 | DC/DC-Wandler, Niedervolt-Spannung: Sollwert außerhalb gültigem Bereich | 0 |
| 0x2201F3 | DC/DC-Wandler, Versorgungsspannung: Fehlfunktion | 0 |
| 0x2201F4 | DC/DC-Wandler: maximale Resetversuche erreicht | 0 |
| 0x2201F5 | DC/DC-Wandler: Leistungsüberwachung fehlgeschlagen | 0 |
| 0x220240 | Inverter, Elektromaschine, Stromsensoren, Plausibilität: Stromsumme unplausibel | 0 |
| 0x220241 | Inverter, Elektromaschine, Stromsensor Phase U, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220242 | Inverter, Elektromaschine, Stromsensor Phase V, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220243 | Inverter, Elektromaschine, Stromsensor Phase W, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220244 | Inverter, Elektromaschine, Stromsensoren: Überstrom oder Sensordefekt | 0 |
| 0x220245 | Inverter, Elektromaschine, Stromsensor Phase U, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220246 | Inverter, Elektromaschine, Stromsensor Phase U, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220247 | Inverter, Elektromaschine, Stromsensor Phase V, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220248 | Inverter, Elektromaschine, Stromsensor Phase V, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220249 | Inverter, Elektromaschine, Stromsensor Phase W, elektrisch: Kurzschluss nach Plus | 0 |
| 0x22024A | Inverter, Elektromaschine, Stromsensor Phase W, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220260 | EME, Niedervolt-Spannungsversorgung, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220261 | Inverter, Elektromaschine, IGBT (Highside): Fehlfunktion | 0 |
| 0x220262 | Inverter, Elektromaschine, IGBT (Lowside): Fehlfunktion | 0 |
| 0x220263 | EME, Niedervolt-Spannungsversorgung, Plausibilität: Spannung zu hoch | 0 |
| 0x220265 | Inverter, Elektromaschine, Hochvolt-Bordnetz, Plausibilität: Spannung zu niedrig | 0 |
| 0x220266 | Inverter, Elektromaschine, Überspannungsschutz | 0 |
| 0x220267 | Inverter, Elektromaschine, Hochvolt-Spannungssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220268 | Inverter, Elektromaschine, IGBT: Versorgungsspannung Fehlfunktion | 0 |
| 0x220269 | Inverter, Elektromaschine, Hochvolt-Bordnetz, Plausibilität: Spannung zu hoch | 0 |
| 0x22026A | Inverter, Elektromaschine, IGBT-Kurzschlussdiagnose aktiviert und resetiert | 0 |
| 0x220270 | Inverter, Elektromaschine, IGBT, Vorlauf oder Nachlauf: Versorgungsspannung Fehlfunktion | 0 |
| 0x220280 | Inverter, Elektromaschine, Phasen V,W, und U, Plausibilität: Temperaturen unplausibel zueinander | 0 |
| 0x220281 | Inverter, Elektromaschine, Phase U, Temperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x220282 | Inverter, Elektromaschine, Phase V, Temperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x220283 | Inverter, Elektromaschine, Phase W, Temperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x220284 | Inverter, Elektromaschine, Phase U, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220285 | Inverter, Elektromaschine, Phase U, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220286 | Inverter, Elektromaschine, Phase V, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220287 | Inverter, Elektromaschine, Phase V, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x220288 | Inverter, Elektromaschine, Phase W, Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x220289 | Inverter, Elektromaschine, Phase W, Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2202E0 | Bremsunterdruckpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x2202E1 | Bremsunterdruckpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x2202E2 | Bremsunterdruckpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x2202E3 | Bremskraftverstärkung: Unterdruck ungenügend | 0 |
| 0x2202E4 | Bremskraftverstärkung: Bremsunterdrucksignal ungültig | 1 |
| 0x2202E5 | Bremskraftverstärkung: Leckage erkannt | 0 |
| 0x2202E6 | Bremskraftverstärkung, Bauteilschutz: Abschaltung Bremsunterdruckpumpe wegen Dauerlauf | 0 |
| 0x2202E8 | Bremsunterdruckpumpe, Sicherung: defekt | 0 |
| 0x2202E9 | Bremskraftverstärkung: Bremsunterdruckpumpe blockiert, Zeit-Schwelle 3 überschritten.  Überstrom erkannt | 0 |
| 0x2202EA | Bremskraftverstärkung: Ritzelstart erkannt | 0 |
| 0x2202EB | Bremskraftverstärkung, Bauteilschutz: Abschaltung Bremsunterdruckpumpe wegen zu hoher Spannung | 0 |
| 0x2202EC | Bremskraftverstärkung: Bremsunterdruckpumpe blockiert, Zeit-Schwelle 1 überschritten | 0 |
| 0x2202ED | Bremskraftverstärkung: Bremsunterdruckpumpe blockiert, Zeit-Schwelle 2 überschritten | 0 |
| 0x2202EF | Elektrische Unterdruckpumpe, Ansteurung: Rückschlagventil schließt nicht mehr | 0 |
| 0x220341 | EME-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x220342 | EME-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x220343 | EME-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x220344 | EME-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x220345 | EME-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x220346 | EME-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überstrom | 0 |
| 0x220347 | EME-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x220348 | EME-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x2203A0 | Kältemittelabsperrventil, elektrisch: Kurzschluss nach Plus | 0 |
| 0x2203A1 | Kältemittelabsperrventil, elektrisch: Kurzschluss nach Masse | 0 |
| 0x2203A2 | Kältemittelabsperrventil, elektrisch: Leitungsunterbrechung | 0 |
| 0x220420 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Strom zu hoch | 0 |
| 0x220421 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Strom zu niedrig | 0 |
| 0x220422 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Temperatur zu hoch | 0 |
| 0x220423 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Temperatur zu niedrig | 0 |
| 0x220424 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x220425 | Intelligenter Batteriesensor, 2. Batterie, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x220426 | Intelligenter Batteriesensor, 2. Batterie, Plausibilität: Strom unplausibel | 0 |
| 0x220427 | Intelligenter Batteriesensor, 2. Batterie, Kompatibilität: Version nicht plausibel | 0 |
| 0x220428 | Intelligenter Batteriesensor, 2. Batterie, Eigendiagnose: Systemfehler | 0 |
| 0x220429 | Intelligenter Batteriesensor, 2. Batterie, Plausibilität: Temperatur unplausibel | 0 |
| 0x22042A | Intelligenter Batteriesensor, 2. Batterie, Plausibilität: Spannung unplausibel | 0 |
| 0x220440 | Zustarteinrichtung, Batterie: gealtert | 0 |
| 0x220441 | Zustarteinrichtung, Batterie: defekt | 0 |
| 0x220460 | Zustarteinrichtung, Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x220461 | Zustarteinrichtung, Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x220462 | Zustarteinrichtung, Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x220463 | Zustarteinrichtung, Relais: klemmt geschlossen | 0 |
| 0x220464 | Zustarteinrichtung, Relais: klemmt offen | 0 |
| 0x220470 | Klemme 15, Datenempfang: Fehlfunktion | 0 |
| 0x2204B0 | EME, interner Fehler, Taktgeber: Signalfrequenz 1 außerhalb gültigen Bereich | 0 |
| 0x2204B1 | EME, interner Fehler, Taktgeber: Signalfrequenz 2 außerhalb gültigen Bereich | 0 |
| 0x2204B2 | EME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x2204B6 | Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x2204B7 | Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x2204B8 | Hybridsystem: Anforderung Abschaltung Elektromaschine unplausibel | 0 |
| 0x2204BD | EME, Niedervolt-Spannungsversorgung, Plausibilität: Spannung zu niedrig | 0 |
| 0x2204BE | EME, interner Fehler, Watchdog: Anforderung Abschaltung Elektromaschine | 0 |
| 0x2204BF | EME, interner Fehler, Auswertebaustein Resolver: Initialisierungsfehler  | 0 |
| 0x2204C0 | EME, interner Fehler, Auswertebaustein Resolver: Speichertest fehlgeschlagen | 0 |
| 0x2204C1 | EME, interner Fehler, Auswertebaustein Resolver: Konfigurationsfehler  | 0 |
| 0x2204C2 | EME, interner Fehler, Bremsunterdruckpumpe, Endstufe: Stromfluss im ausgeschalteten Zustand | 0 |
| 0x2204C3 | EME, interner Fehler, Bremsunterdruckpumpe, Endstufe: defekt | 0 |
| 0x2204C4 | EME, interner Fehler, Bremsunterdruckpumpe, Endstufe: Übertemperatur erkannt | 0 |
| 0x2204C6 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung: Überspannung erkannt | 0 |
| 0x2204C7 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung: Unterspannung erkannt | 0 |
| 0x2204CE | EME, interner Fehler, Programmablauf: Deratingvorgaben der Leistungselektronik seitens Regelung verletzt | 0 |
| 0x2204D0 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung 4: Überspannung im Baustein CY320 erkannt | 0 |
| 0x2204D1 | EME, interner Fehler, Überwachung 5V Sensor-Versorgung 4: Unterspannung  im Baustein CY320 erkannt | 0 |
| 0x2204D2 | EME, interner Fehler, Überwachung 5V Spannungsregler: Überspannung erkannt | 0 |
| 0x2204D3 | EME, interner Fehler, Überwachung 5V Spannungsregler: Unterspannung erkannt | 0 |
| 0x220500 | Hochvolt-Powermanagement, Signalüberwachung: Signale Hochvolt-Komponenten ungültig oder nicht empfangen | 0 |
| 0x220501 | Hochvolt-Powermanagement, Signalüberwachung: Signale Hochvolt-Bordnetz ungültig oder nicht empfangen | 0 |
| 0x220502 | Hochvolt-Powermanagement, Signalüberwachung: Signale Hochvolt-Batterie ungültig oder nicht empfangen | 0 |
| 0x220503 | Hochvolt-Powermangement, elektrischer Kältemittelverdichter: Leistungsreduzierung | 1 |
| 0x220505 | Hochvolt-Powermanagement, Niedervolt-Bordnetz: Enlastung wegen Launch Control | 1 |
| 0x220506 | Hochvolt-Powermanagement, Hochvolt-Batterie, Bauteilschutz: Abschaltung wegen niedrigem Ladezustand | 1 |
| 0x220507 | Hochvolt-Powermanagement, Niedervolt-Bordnetz: Enlastung wegen Anforderung Notlaufmanager | 1 |
| 0x220508 | Hochvolt-Powermanagement, Standfunktionen: Deaktivierung wegen niedrigem Ladezustand Hochvolt-Batterie | 1 |
| 0x220509 | Hochvolt-Powermanagement, Abschaltung: schwerer Aufprall vom Aufprallsensor erkannt | 0 |
| 0x220510 | Hochvolt-Powermanagement, DC/DC-Wandler: Leistungsreduzierung | 1 |
| 0x220511 | Hochvolt-Powermanagement,  Kühlung Hochvolt-Batterie: Ausfall | 1 |
| 0x220512 | Hochvolt-Powermanagement, Isolationsüberwachung: Fehlfunktion | 1 |
| 0x220513 | Hochvolt-Powermanagement, Isolationsüberwachung: Warnung | 1 |
| 0x220514 | Hochvolt-Powermanagement: keine Hochvolt-Abschaltung trotz Anforderung | 1 |
| 0x220515 | Hochvolt-Powermanagement: keine Hochvolt-Freigabe trotz Anforderung | 1 |
| 0x220516 | Hochvolt-Powermanagement, Abschaltung: leichter Aufprall vom Aufprallsensor erkannt | 1 |
| 0x220517 | Hochvolt-Powermanagement, Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop): Fehlfunktion | 0 |
| 0x220518 | Hochvolt-Powermanagement, Niedervolt-Bordnetz: Unterversorgung | 1 |
| 0x220519 | Hochvolt-Powermanagement, Hochvoltbatterie, Schütze: ein Kontakt verklebt/festgebrannt | 1 |
| 0x220520 | Hochvolt-Powermanagement, Hochvoltbatterie, Schütze: zwei Kontakte verklebt/festgebrannt | 1 |
| 0x220521 | Hochvolt-Powermanagement, batterieloser Betrieb: verhindert da Schützkontakt verklebt/festgebrannt | 1 |
| 0x220560 | Notlaufmanager: Anforderung Abschaltung Elektromaschine aufgrund Fehler in DME, der als Ersatzreaktion einen AKS auf der EME anfordert. | 1 |
| 0x220561 | Notlaufmanager: Anforderung Generatorbetrieb Elektromaschine aufgrund Fehler in DME, der als Ersatzreaktion die Nullstromregelung (UCTL) auf der EME anfordert. | 1 |
| 0x220562 | Kommunikation: Signal (BA_MCTL_IST) ausgefallen oder ungültig; Betriebsart Elektromaschine unplausibel | 1 |
| 0x220563 | Check-Control-Meldung: Antrieb gestört. Achtung, ab SOP 7/12 Änderung auf: Check-Control-Meldung: Antrieb Gemäßigt fahren. | 0 |
| 0x220564 | Notlaufmanager: Anforderung EGS-Zwangshochschaltung (hoch) aufgrund Fehler in DME | 0 |
| 0x220565 | Notlaufmanager: Anforderung EGS-Zwangshochschaltung (niedrig) aufgrund Fehler in DME | 1 |
| 0x220567 | Notlaufmanager: Anforderung Leistungsreduzierung elektrischer Kältemittelverdichter aufgrund Fehler in DME | 1 |
| 0x220568 | Notlaufmanager, Hochvolt-Batterie: Serviceanforderung. Es liegt der Kategorie 3 Fehler (Batterie Service Request) auf der SME vor. | 1 |
| 0x220569 | Notlaufmanager, Hochvolt-Batterie: sofortige Schützöffung. Es liegt der Kategorie 7 Fehler (Batterie Switsch Open Immediately) auf der SME vor. | 1 |
| 0x22056A | Notlaufmanager, Hochvolt-Batterie: angeforderte Schützöffnung. Es liegt der Kategorie 6 Fehler (kommandierte Schützöffnung) auf der SME vor. | 1 |
| 0x22056B | Notlaufmanager, Hochvolt-Batterie: Batteriefehler. Es liegt der Kategorie 5 Fehler (Batterie Fehler) auf der SME vor. | 1 |
| 0x22056C | Kommunikation: Signal (I_BATT_SME) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112) ausgefallen oder ungültig | 1 |
| 0x22056D | Kommunikation: Signal (MD_BREMS_REIB_FW) in FA-CAN, Botschaft (Ist Bremsmoment Summe, 0xEF) ausgefallen oder ungültig | 1 |
| 0x22056E | Kommunikation: Signal (MD_EM1_IST) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x22056F | Kommunikation: Signal (MD_EM1_MAX_DYN) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x220570 | Kommunikation: Signal (MD_EM1_MIN_DYN) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x220571 | Kommunikation: Signal (MD_EM1_MXMN_XCTL_DME) in FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2) ausgefallen oder ungültig | 1 |
| 0x220572 | Kommunikation: Signal (MD_EM1_SOLL_DME) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x220573 | Kommunikation: Signal (MD_EM1_WUNSCH_SOCR) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x220574 | Kommunikation: Signal (MD_RAD_RSOLL) in FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4) oder (Radmoment Antrieb 5, 40.3.4) ausgefallen oder ungültig | 1 |
| 0x220575 | Kommunikation: Signal (MD_RADI_KSOLL) in A-CAN, Botschaft (Drehmoment Kurbelwelle 3, 0xA7) ausgefallen oder ungültig | 1 |
| 0x220576 | Kommunikation: Signal (MDK_IST_VM) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x220578 | Kommunikation: Signal (MDK_SOLL) in FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2) ausgefallen oder ungültig | 1 |
| 0x220579 | Kommunikation: Signal (MDK_WUNSCH_LADMX) in A-CAN, Botschaft (OBD Anfrage Begrenzung Drehmoment, 0x41D) ausgefallen oder ungültig | 1 |
| 0x22057A | Kommunikation: Signal (N_ABTRIEB) in A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA) oder A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) ausgefallen oder ungültig | 1 |
| 0x22057B | Kommunikation: Signal (N_EM1_IST) ausgefallen oder ungültig; Rotorlagesensorfehler oder Stromsensorfehler | 1 |
| 0x22057C | Kommunikation: Signal (N_EM1_SOLL_DME) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x22057D | Kommunikation: Signal (N_RAD_H) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1) ausgefallen oder ungültig | 1 |
| 0x22057E | Kommunikation: Signal (NKW) in A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5) ausgefallen oder ungültig | 1 |
| 0x220580 | Kommunikation: Signal (PWG_IST) in FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4) ausgefallen oder ungültig | 1 |
| 0x220581 | Notlaufmanager: Anforderung Öffnung Relais Zustarteinrichtung aufgrund Fehler in DME | 0 |
| 0x220582 | Hochvolt-Powermanagement: Anforderung Startergenerator-Notlauf von Notlaufmanager | 0 |
| 0x220583 | Kommunikation: Signal (SOC_HVB_IST) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112) ausgefallen oder ungültig | 1 |
| 0x220584 | Kommunikation: Signal (SOC_HVB_MXMN) in FA-CAN, Botschaft (Ist Bremsmoment Summe, 0xEF) ausgefallen oder ungültig | 1 |
| 0x220586 | Kommunikation: Signal (ST_ABLAUF_EGS) in A-CAN, Botschaft (Status Getriebe Hybrid, 0x409) ausgefallen oder ungültig | 1 |
| 0x220587 | Kommunikation: Signal (ST_ANF_NL_DME) in A-CAN, Botschaft (Hybrid Vorgabe, 0x113) ausgefallen oder ungültig | 1 |
| 0x220588 | Kommunikation: Signal (ST_ANTRIEB_FAHRZEUG) in FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2) ausgefallen oder ungültig | 1 |
| 0x220589 | Kommunikation: Signal (ST_BREMS) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2) ausgefallen oder ungültig | 1 |
| 0x22058A | Kommunikation: Signal (ST_ERR_EGS) in A-CAN, Botschaft (Status Getriebe Hybrid, 0x409) ausgefallen oder ungültig | 1 |
| 0x22058B | Kommunikation: Signal (ST_K0) in A-CAN, Botschaft (Status Getriebe Hybrid, 0x409) ausgefallen oder ungültig | 1 |
| 0x22058C | Kommunikation: Signal (ST_Q_PBREMSU) in FlexRay, Botschaft (Daten Bremssystem Motorsteuerung, 102.0.2) ausgefallen oder ungültig | 1 |
| 0x22058D | Kommunikation: Signal (ST_Q_V_FZG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) ausgefallen oder ungültig | 1 |
| 0x22058E | Kommunikation: Signal (U_BATT_SME) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112) ausgefallen oder ungültig | 1 |
| 0x22058F | Kommunikation: Signal (V_FZG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) ausgefallen oder ungültig | 1 |
| 0x220590 | Kommunikation: Signal (N_RAD_H) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1) ausgefallen oder ungültig ODER Raddrehzahlsensor hinten links defekt | 0 |
| 0x220591 | Kommunikation: Signal (N_RAD_H) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1) ausgefallen oder ungültig ODER Raddrehzahlsensor hinten rechts defekt | 0 |
| 0x220592 | Notlaufmanager: Anforderung aktiver Startergenerator-Notlauf aufgrund Ausfall Generatorbetrieb Elektromaschine | 0 |
| 0x220601 | Hybridsystem, Sicherheitsabschaltung: Anforderung Abschaltung Elektromaschine | 0 |
| 0x220602 | Hybridsystem, Sicherheitsabschaltung: Anforderung schnelle Abschaltung Elektromaschine | 0 |
| 0x220604 | EME, interner Fehler, Sicherheitsfunktion: Momentengrenzen Elektromaschine überschritten | 0 |
| 0x220606 | EME, interner Fehler, Sicherheitsfunktion: Prozessorfehler | 0 |
| 0x220607 | EME, interner Fehler, Sicherheitsfunktion: Stromsumme Stromsensoren unplausibel | 0 |
| 0x220608 | EME, interner Fehler, Sicherheitsfunktion: Tastgrad Elektromaschinenansteuerung unplausibel | 0 |
| 0x220609 | EME, interner Fehler, Sicherheitsfunktion: Speicherfehler | 0 |
| 0x22060A | EME, interner Fehler, Sicherheitsfunktion: Drehzahl Elektromaschine unplausibel | 0 |
| 0x22060B | EME, interner Fehler, Sicherheitsfunktion: berechnetes Ist-Moment Elektromaschine unplausibel | 0 |
| 0x22060C | EME, interner Fehler, Sicherheitsfunktion: Ist-Moment Elektromaschine unplausibel | 0 |
| 0x22060D | EME, interner Fehler, Sicherheitsfunktion: Eingangsspannung unplausibel | 0 |
| 0x22060E | EME, interner Fehler, Watchdog: Fehlerzähler Watchdog unplausibel gegenüber Fehlerzähler Controller | 0 |
| 0x22060F | EME, interner Fehler, Abschaltpfadtest: Fehlfunktion | 0 |
| 0x220610 | EME, interner Fehler, Abschaltpfadtest: Klemme 15 aus während Abschaltpfadtest | 0 |
| 0x220611 | EME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x220612 | EME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x220620 | EME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x220660 | CCM606 wird angezeit, Antrieb demnächst prüfen | 0 |
| 0x220700 | Montagemode: aktiv | 0 |
| 0x22070A | Berechung des RBM-Zyklus: nicht möglich (Meldung von DME)  | 0 |
| 0x220710 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Fehlfunktion | 0 |
| 0x220720 | Keine EWS4 Client- Freigabe trotz Drehmomentanforderung. | 0 |
| 0x220730 | Hybridsystem, Sicherheitsabschaltung: Aufprallsignal detektiert | 0 |
| 0x220740 | Resethistorie: Anforderung Reset von BMW | 0 |
| 0x220741 | Resethistorie: Anforderung Reset von Reset-Gruppe | 0 |
| 0x220742 | Resethistorie: Anforderung Reset von Reset-ID | 0 |
| 0x220743 | Resethistorie: Anforderung Reset von Reset-ID-Bereich | 0 |
| 0x220744 | Resethistorie: Anforderung Reset von BMW aufgrund Komplement Ausfall | 0 |
| 0x220745 | Resethistorie: Anforderung Reset von ZFS aufgrund Komplement Ausfall | 0 |
| 0x220746 | Resethistorie: Anforderung Reset von Überwachung MOCADC | 0 |
| 0x220747 | Resethistorie: Anforderung Reset von Überwachung MOCMEM | 0 |
| 0x220748 | Resethistorie: Anforderung Reset von Traps | 0 |
| 0x220749 | Resethistorie: Anforderung Reset von ZFS | 0 |
| 0x221000 | Hochvolt-Batterie, Schützaktivierung: Signal ungültig (gemeldet vom SME) | 1 |
| 0x221001 | Hochvolt-Batterie, Minuspol-Schütz, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221002 | Hochvolt-Batterie, Minuspol-Schütz, Ansteuerung: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221003 | Hochvolt-Batterie, Minuspol-Schütz, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221004 | Hochvolt-Batterie, Spannungs- und Stromsensor, Spannungsmesspfad 1: Messwert zu hoch (gemeldet vom SME) | 1 |
| 0x221005 | Hochvolt-Batterie, Spannungs- und Stromsensor, Spannungsmesspfad 1: Messwert zu niedrig (gemeldet vom SME) | 1 |
| 0x221006 | Hochvolt-Batterie, Spannungs- und Stromsensor, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221007 | Hochvolt-Batterie, Spannungs- und Stromsensor: interner Sensorfehler (gemeldet vom SME) | 1 |
| 0x221008 | Hochvolt-Batterie, Spannungsüberwachungskreis 1: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22100A | Hochvolt-Batterie, Spannungsüberwachungskreis 1: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22100B | Hochvolt-Batterie, Spannungsüberwachungskreis 2: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22100C | Hochvolt-Batterie, Spannungsüberwachungskreis 2: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22100D | Hochvolt-Batterie, Spannungsüberwachungskreis 3: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22100E | Hochvolt-Batterie, Spannungsüberwachungskreis 3: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22100F | Hochvolt-Batterie, Spannungsüberwachungskreis 4: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221010 | Hochvolt-Batterie, Spannungsüberwachungskreis 4: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221011 | Hochvolt-Batterie, Spannungsüberwachungskreis 5: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221012 | Hochvolt-Batterie, Spannungsüberwachungskreis 5: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221013 | Hochvolt-Batterie, Spannungsüberwachungskreis 6: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221014 | Hochvolt-Batterie, Spannungsüberwachungskreis 6: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221015 | Hochvolt-Batterie, Spannungsüberwachungskreis 7: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221016 | Hochvolt-Batterie, Spannungsüberwachungskreis 7: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221017 | Hochvolt-Batterie, Spannungsüberwachungskreis 8: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221018 | Hochvolt-Batterie, Spannungsüberwachungskreis 8: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221019 | Hochvolt-Batterie, Zellblock 1, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22101A | Hochvolt-Batterie, Zellblock 1, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22101B | Hochvolt-Batterie, Zellblock 2, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22101C | Hochvolt-Batterie, Zellblock 2, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22101D | Hochvolt-Batterie, Zellblock 3, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x22101E | Hochvolt-Batterie, Zellblock 3, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x22101F | Hochvolt-Batterie, Zellblock 4, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221020 | Hochvolt-Batterie, Zellblock 4, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221021 | Hochvolt-Batterie, Zellblock 5, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221022 | Hochvolt-Batterie, Zellblock 5, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221023 | Hochvolt-Batterie, Zellblock 6, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221024 | Hochvolt-Batterie, Zellblock 6, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221025 | Hochvolt-Batterie, Zellblock 7, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221026 | Hochvolt-Batterie, Zellblock 7, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221027 | Hochvolt-Batterie, Zellblock 8, Spannungsüberwachungskreis: Spannung zu hoch (gemeldet vom SME) | 1 |
| 0x221028 | Hochvolt-Batterie, Zellblock 8, Spannungsüberwachungskreis: Spannung zu niedrig (gemeldet vom SME) | 1 |
| 0x221029 | Hochvolt-Batterie, Spannungsüberwachungskreise, Nachlaufdiagnose: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x22102A | Hochvoltsicherheitsschalter Service Disconnect - Auswertung unplausibel (gemeldet vom SME) | 1 |
| 0x22102B | Aufprallsensor: leichter Aufprall erkannt (gemeldet von SME) (gemeldet vom SME) | 1 |
| 0x22102C | Aufprallsensor: schwerer Aufprall erkannt  (gemeldet vom SME) | 1 |
| 0x22102D | Hochvolt-Batterie, Pluspol-Schütz, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x22102E | Hochvolt-Batterie, Pluspol-Schütz, Ansteuerung: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x22102F | Hochvolt-Batterie, Pluspol-Schütz, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221030 | Hochvolt-Batterie, Vorbelastungs-Schütz, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221031 | Bordnetz 14V: Unterspannung (gemeldet vom SME) | 1 |
| 0x221032 | Aufprallsensor: Unterspannung (gemeldet vom SME) | 1 |
| 0x221033 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil: klemmt offen (gemeldet vom SME) | 1 |
| 0x221034 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil: klemmt geschlossen (gemeldet vom SME) | 1 |
| 0x221035 | Hochvolt-Batterie, Spannungs- und Stromsensor, Messwerterfassung: fehlerhaft  (gemeldet vom SME) | 1 |
| 0x221036 | Hochvolt-Batterie, Minuspol-Schütz: Kontakt verklebt/festgebrannt im geschlossenen Zustand (gemeldet vom SME) | 1 |
| 0x221037 | Hochvolt-Batterie, Minuspol-Schütz: Kontakt verklebt/festgebrannt im offenen Zustand (gemeldet vom SME) | 1 |
| 0x221038 | Hochvolt-Batterie, Pluspol-Schütz: Kontakt verklebt/festgebrannt im geschlossenen Zustand (gemeldet vom SME) | 1 |
| 0x221039 | Hochvolt-Batterie, Pluspol-Schütz: Kontakt verklebt/festgebrannt im offenen Zustand (gemeldet vom SME) | 1 |
| 0x22103A | Hochvolt-Batterie, Entladestrom: zu hoch (gemeldet vom SME) | 1 |
| 0x22103B | Hochvolt-Batterie, Ladestrom: zu hoch (gemeldet vom SME) | 1 |
| 0x22103C | Hochvolt-Batteriezelle, Ladespannung: zu hoch (gemeldet vom SME) | 1 |
| 0x22103D | Hochvolt-Batteriezelle, Entladespannung: zu niedrig (gemeldet vom SME) | 1 |
| 0x22103E | Hochvolt-Batterie, Ladespannung: zu hoch (gemeldet vom SME) | 1 |
| 0x22103F | Hochvolt-Batterie, Entladespannung: zu niedrig (gemeldet vom SME) | 1 |
| 0x221040 | SME, interner Fehler: Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop) Signal wird nicht generiert (gemeldet vom SME) | 1 |
| 0x221041 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221042 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Kurzschluss der Leitungen zueinander (gemeldet vom SME) | 1 |
| 0x221043 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221044 | Hochvolt-Kontaktüberwachung (High Voltage Interlock Loop), elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221045 | Hochvolt-Batterie, Vorladestrom: zu hoch (gemeldet vom SME) | 1 |
| 0x221046 | Hochvolt-Batterie, Vorladungszeit: zu lang (gemeldet vom SME) | 1 |
| 0x221048 | Hochvolt-Bordnetz, Vorladung, elektrisch: Kurzschluss der Leitungen zueinander (gemeldet vom SME) | 1 |
| 0x221049 | Hochvolt-Batterie. Strom: unplausibel (gemeldet vom SME) | 1 |
| 0x22104A | Hochvolt-Bordnetz: Spannung unplausibel, kein Ersatzwert (gemeldet vom SME) | 1 |
| 0x22104B | Hochvolt-Batterie, Auswerteelektronik für Zellblock: Ausfall Einzelzellspannung (gemeldet vom SME) | 1 |
| 0x22104C | Hochvolt-Batterie, Spannung: unplausibel, kein Ersatzwert (gemeldet vom SME) | 1 |
| 0x22104D | Hochvolt-Batterie, Temperatursensor 1: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x22104E | Hochvolt-Batterie, Temperatursensor 2: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x22104F | Hochvolt-Batterie, Temperatursensor 3: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221050 | Hochvolt-Batterie, Temperatursensor 4: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221051 | Hochvolt-Batterie, Temperatursensor 5: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221052 | Hochvolt-Batterie, Temperatursensor 6: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221053 | Hochvolt-Batterie, Temperatursensor 7: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221054 | Hochvolt-Batterie, Temperatursensor 8: Temperatur unplausibel (gemeldet vom SME) | 1 |
| 0x221055 | Hochvolt-Batterie, Temperatursensoren: Mehrfachausfall (gemeldet vom SME) | 1 |
| 0x221056 | Hochvolt-Batterie, Temperatursensor 1: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221057 | Hochvolt-Batterie, Temperatursensor 2: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221058 | Hochvolt-Batterie, Temperatursensor 3: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221059 | Hochvolt-Batterie, Vorbelastungs-Schütz, Ansteuerung: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x22105A | Hochvolt-Batterie, Vorbelastungs-Schütz, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x22105B | Hochvolt-Batterie, Minuspol-Schütz, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105C | Hochvolt-Batterie, Pluspol-Schütz, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105D | Hochvolt-Batterie, Temperatursensor 4: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105E | Hochvolt-Batterie, Temperatursensor 5: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22105F | Hochvolt-Batterie, Temperatursensor 6: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221060 | Hochvolt-Batterie, Temperatursensor 7: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221061 | Hochvolt-Batterie, Temperatursensor 8: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221062 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 1 (gemeldet vom SME) | 1 |
| 0x221063 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 2 (gemeldet vom SME) | 1 |
| 0x221064 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 3 (gemeldet vom SME) | 1 |
| 0x221065 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 4 (gemeldet vom SME) | 1 |
| 0x221066 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 5 (gemeldet vom SME) | 1 |
| 0x221067 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 6 (gemeldet vom SME) | 1 |
| 0x221068 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 7 (gemeldet vom SME) | 1 |
| 0x221069 | Hochvolt-Batterie: Übertemperatur erkannt durch Temperatursensor 8 (gemeldet vom SME) | 1 |
| 0x22106A | Hochvolt-Batterie, Alterung: Austausch erforderlich (gemeldet vom SME) | 1 |
| 0x22106B | Hochvolt-Batterie, Ladezustand: hoch (gemeldet vom SME) | 1 |
| 0x22106C | Hochvolt-Batterie, Ladezustand: niedrig (gemeldet vom SME) | 1 |
| 0x22106D | Hochvolt-Batterie, Zellüberwachung: mindestens eine Einzelzelle defekt (gemeldet vom SME) | 1 |
| 0x22106E | Hochvolt-Batterie, Zellüberwachung: Tiefentladung (gemeldet vom SME) | 1 |
| 0x22106F | Hochvolt-Batterie: Übertemperatur erkannt, Leistungsbegrenzung  (gemeldet vom SME) | 1 |
| 0x221070 | Hochvolt-Batterie, Auswerteelektronik für Zellblock: Hardware defekt  (gemeldet vom SME) | 1 |
| 0x221071 | Hochvolt-Batterie, Schütze Lowside, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221072 | Sicherheitskonzept: Mehrfachfehler Ebene 2 (gemeldet vom SME) | 1 |
| 0x221074 | SME, A-Can: Kommunikationsfehler (gemeldet vom SME) | 1 |
| 0x221075 | Botschaft (Status Elektromotor) fehlt: Empfänger SME, Sender EME (gemeldet vom SME) | 1 |
| 0x221076 | Botschaft (Außentemperatur): fehlt (gemeldet vom SME) | 1 |
| 0x221077 | Botschaft (Freigabe Kühlung Hochvoltspeicher) fehlt: Empfänger SME, Sender IHKA (gemeldet vom SME) | 1 |
| 0x221078 | Botschaft (Fahrzeuggeschwindigkeit): fehlt (gemeldet vom SME) | 1 |
| 0x221079 | Botschaft (Klemmen): fehlt (gemeldet vom SME) | 1 |
| 0x22107A | SME, interner S-CAN: Kommunikationsfehler (gemeldet vom SME) | 1 |
| 0x22107B | Botschaft (Hochvolt-Batterie, Spannungs- und Stromsensor): interner Prüfsummenfehler (gemeldet vom SME) | 1 |
| 0x22107C | SME, interner Fehler: interner CSC-CAN, Kommunikation mit Auswerteelektronik für Zellblock fehlt (gemeldet vom SME) | 1 |
| 0x22107D | Hochvolt-Batterie, Vorbelastungs-Schütz, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22107E | SME, interner Fehler: 5 Volt Versorgungsspannung Unterspannung (gemeldet vom SME) | 1 |
| 0x22107F | Hochvolt-Batterie, Auswerteelektronik für Zellblock, elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221080 | Hochvolt-Batterie, Auswerteelektronik für Zellblock, elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221081 | Hochvolt-Batterie, Auswerteelektronik für Zellblock, elektrisch: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221082 | Hochvolt-Batterie, Auswerteelektronik für Zellblock, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x221083 | Hochvolt-Batterie, Spannungs- und Stromsensor, elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221084 | Hochvolt-Batterie, Spannungs- und Stromsensor, elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x221085 | Hochvolt-Batterie, Spannungs- und Stromsensor, elektrisch: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221086 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil, Ansteuerung: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x221087 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil: Ansteuerung nach Plus (gemeldet vom SME) | 1 |
| 0x221088 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil, Ansteuerung: Leitungsunterbrechung (gemeldet vom SME) | 1 |
| 0x221089 | Hochvolt-Batterie, Kühlkreislauf Kühlmittel-Absperrventil, Treiber: Fehlfunktion (gemeldet vom SME) | 1 |
| 0x22108A | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler: Temperatur zu hoch (gemeldet vom SME) | 1 |
| 0x22108B | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler: Temperatur zu niedrig (gemeldet vom SME) | 1 |
| 0x22108C | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler, elektrisch: Kurzschluss nach Masse (gemeldet vom SME) | 1 |
| 0x22108D | Hochvolt-Batterie, Kühlkreislauf Temperaturfühler, elektrisch: Kurzschluss nach Plus (gemeldet vom SME) | 1 |
| 0x22108E | SME, interner Fehler: unerwarteter Reset festgestellt (gemeldet vom SME) | 1 |
| 0x22108F | SME, interner Fehler: RAM-Fehler im Betrieb aufgetreten (gemeldet vom SME) | 1 |
| 0x221090 | SME, interner Fehler: ROM-Fehler im Betrieb aufgetreten (gemeldet vom SME) | 1 |
| 0x221091 | Hochvolt-Batterie, Spannungs- und Stromsensor, Strommesspfad: Messwerte ungültig (gemeldet vom SME) | 1 |
| 0x221092 | Hochvolt-Batterie, Spannungs- und Stromsensor, Spannungsmesspfad 1: Messwerte ungültig (gemeldet vom SME) | 1 |
| 0x221093 | Hochvolt-Batterie, Spannungs- und Stromsensor, Strommesspfad: Messwert zu hoch (gemeldet vom SME) | 1 |
| 0x221094 | Hochvolt-Batterie, Spannungs- und Stromsensor, Strommesspfad: Messwert zu niedrig (gemeldet vom SME) | 1 |
| 0x221200 | DSC, interner Fehler: Hardware-Fehler (gemeldet vom DSC) | 1 |
| 0x221201 | Bremspedalwegsensor, elektrisch: Leitungsunterbrechung (gemeldet vom DSC) | 1 |
| 0x221202 | Bremspedalwegsensor: Unterspannung (gemeldet vom DSC) | 1 |
| 0x221203 | Bremspedalwegsensor - elektrischer Fehler oder Sensor defekt (gemeldet vom DSC) | 1 |
| 0x221204 | Bremspedalwegsensor: Überspannung (gemeldet vom DSC) | 1 |
| 0x221205 | Bremspedalwegsensor, elektrisch: Kurzschluss nach Masse (gemeldet vom DSC) | 1 |
| 0x221206 | Bremspedalwegsensor, elektrisch: Kurzschluss nach Plus (gemeldet vom DSC) | 1 |
| 0x221209 | Bremskraftverstärker Drucksensor: Unterspannung (gemeldet vom DSC) | 1 |
| 0x22120A | Bremskraftverstärker Drucksensor: Überspannung (gemeldet vom DSC) | 1 |
| 0x22120B | Bremssystem: Überwachung DSC (gemeldet vom DSC) | 1 |
| 0x22120C | DSC: Kommunikation mit Motorsteuergerät fehlt (gemeldet vom DSC) | 1 |
| 0x22120D | Bremspedalwegsensor, Plausibilität: Signal außerhalb Gültigkeitsbereich (gemeldet vom DSC) | 1 |
| 0x22120E | DSC Steuergerät ist nicht codiert | 1 |
| 0x221210 | Bremskraftverstärker Drucksensor, Plausibilität: Signal außerhalb Gültigkeitsbereich (gemeldet vom DSC) | 1 |
| 0x221211 | Bremskraftverstärker Drucksensor, Testpuls: zu hoch (gemeldet vom DSC) | 1 |
| 0x221212 | Bremskraftverstärker Drucksensor, Testpuls: zu niedrig (gemeldet vom DSC) | 1 |
| 0x221213 | Bremspedalwegsensor ist nicht kalibriert | 1 |
| 0x221214 | Raddrehzahlsensor - Vorne Rechts - Anfahrerkennung fehlerhaft | 1 |
| 0x221215 | Raddrehzahlsensor - Vorne Rechts - Plausifehler | 1 |
| 0x221216 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft | 1 |
| 0x221217 | Raddrehzahlsensor - Hinten Links - Plausifehler | 1 |
| 0x221218 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft | 1 |
| 0x221219 | Raddrehzahlsensor - Hinten Rechts - Plausifehler | 1 |
| 0x221220 | Raddrehzahlsensor - Vorne Links - Rauschüberwachung | 1 |
| 0x221221 | Raddrehzahlsensor - Vorne Rechts - Rauschüberwachung | 1 |
| 0x221222 | Raddrehzahlsensor - Hinten Links - Rauschüberwachung | 1 |
| 0x221223 | Raddrehzahlsensor - Hinten Rechts - Rauschüberwachung | 1 |
| 0x221224 | Drucksensor - Rauschüberwachung | 1 |
| 0x221225 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 1 |
| 0x221226 | Drucksensor - Plausibilisierung Temperatur intern | 1 |
| 0x221227 | Drucksensor - Interne Plausibilisierung fehlgeschlagen | 1 |
| 0x221228 | Drucksensor - Hauptzylinder - Leitungsfehler | 1 |
| 0x221229 | Drucksensor - Hauptzylinder - Leitungsfehler | 1 |
| 0x22122A | Drucksensor - Hauptzylinder - Fehler in Spannungsversorgung | 1 |
| 0x22122B | Drucksensor - nicht kalibriert | 1 |
| 0x22122C | Raddrehzahlsensor - Vorne Links - Falscher Sensortyp | 1 |
| 0x22122D | Raddrehzahlsensor - Vorne Rechts - Falscher Sensortyp | 1 |
| 0x22122E | Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 1 |
| 0x22122F | Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 1 |
| 0x221230 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221231 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221232 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221233 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221234 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221235 | Physikalischer Bus Fehler (Kurzschluss auf Bus-Leitungen) | 1 |
| 0x221236 | DSC intern, Fehler im Flexray Controller | 1 |
| 0x221237 | Mischverbau, Allrad-Botschaften im 2WD-codierten Fahrzeug | 1 |
| 0x221238 | DSC interner Fehler | 1 |
| 0x221239 | DSC interner Fehler | 1 |
| 0x22123A | DSC interner Fehler | 1 |
| 0x22123B | DSC interner Fehler | 1 |
| 0x22123C | DSC interner Fehler, Ventilfehler | 1 |
| 0x22123D | DSC interner Fehler, Ventilfehler | 1 |
| 0x22123E | DSC interner Fehler, Ventilfehler | 1 |
| 0x22123F | DSC interner Fehler, Ventilfehler | 1 |
| 0x221240 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221241 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221242 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221243 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221244 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221245 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221246 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221247 | DSC interner Fehler, Ventilfehler | 1 |
| 0x221248 | DSC interner Fehler, Pumpenfehler | 1 |
| 0x221249 | DSC interner Fehler, Pumpenfehler | 1 |
| 0x22124A | DSC-Hydraulikeinheit passt nicht zur DSC-Elektronikeinheit | 1 |
| 0x22124B | DSC-interner Flexray-Tranceiver meldet Error auf den Flexray-Busleitungen | 1 |
| 0x22125A | Raddrehzahlsensor - Vorne Links - Anfahrerkennung fehlerhaft | 1 |
| 0x22125B | Raddrehzahlsensor - Vorne Links - Plausifehler | 1 |
| 0x22125C | Nach einer applizierbaren Anzahl von Anfragen (Challenges) stimmt die Antwort (Response) nicht mit der Kontrollrechnung überein. | 0 |
| 0x221400 | Klimakompressor Funktionsprüfung fehlgeschlagen | 1 |
| 0x221401 | RAM-Fehler in IHKA | 1 |
| 0x221402 | EEPROM Fehler in IHKA | 1 |
| 0x221403 | ROM Fehler in IHKA | 1 |
| 0x221404 | Laufzeitfehler in IHKA | 1 |
| 0x221405 | interne IHKA Fehler | 1 |
| 0x221406 | interne IHKA Fehler | 1 |
| 0x221407 | elektrischer Klimakompressor Platinen-Temperaturfühler auf Masse | 1 |
| 0x221408 | elektrischer Klimakompressor Platinen-Temperaturfühler auf Batterie | 1 |
| 0x22140A | elektrischer Klimakompressor Platinen-Temperaturfühler Temperatur zu gering | 1 |
| 0x22140B | elektrischer Klimakompressor Platinen-Tempraturfühler Plausibilisierung fehlgeschlagen | 1 |
| 0x22140C | elektrischer Klimakompressor Spannungssensor auf Masse | 1 |
| 0x22140D | elektrischer Klimakompressor Spannungssensor auf Batterie | 1 |
| 0x22140E | elektrischer Klimakompressor Spannungssensor zu hoch | 1 |
| 0x22140F | elektrischer Klimakompressor Spannungssensor zu gering | 1 |
| 0x221411 | elektrischer Klimakompressor ECU Spannungssensor auf Masse | 1 |
| 0x221412 | elektrischer Klimakompressor ECU Spannungssensor auf Batterie | 1 |
| 0x221413 | elektrischer Klimakompressor ECU Spannungssensor zu hoch | 1 |
| 0x221414 | elektrischer Klimakompressor ECU Spannungssensor zu gering | 1 |
| 0x221415 | elektrischer Klimakompressor Phasenstromsensor U auf Masse | 1 |
| 0x221416 | elektrischer Klimakompressor Phasenstromsensor U auf Batterie | 1 |
| 0x221417 | elektrischer Klimakompressor Phasenstromsensor U Spannung zu hoch | 1 |
| 0x221418 | elektrischer Klimakompressor Phasenstromsensor U Spannung zu gering | 1 |
| 0x221419 | elektrischer Klimakompressor Phasenstromsensor U Spannung Plausibilisierung fehlgeschlagen | 1 |
| 0x22141A | elektrischer Klimakompressor Phasenstromsensor V Spannung zu gering | 1 |
| 0x22141B | elektrischer Klimakompressor Phasenstromsensor V Spannung zu hoch | 1 |
| 0x22141C | elektrischer Klimakompressor Phasenstromsensor V auf Batterie | 1 |
| 0x22141D | elektrischer Klimakompressor Phasenstromsensor V auf Masse | 1 |
| 0x22141E | elektrischer Klimakompressor Phasenstromsensor V Spannung Plausibilisierung fehlgeschlagen | 1 |
| 0x22141F | elektrischer Klimakompressor Phasenstromsensor W auf Masse | 1 |
| 0x221420 | elektrischer Klimakompressor Phasenstromsensor W auf Batterie | 1 |
| 0x221421 | elektrischer Klimakompressor Phasenstromsensor W Spannung zu hoch | 1 |
| 0x221422 | elektrischer Klimakompressor Phasenstromsensor W Spannung zu gering | 1 |
| 0x221423 | elektrischer Klimakompressor Phasenstromsensor W Spannung Plausibilisierung fehlgeschlagen | 1 |
| 0x221424 | elektrischer Klimakompressor interner RAM Fehler | 1 |
| 0x221425 | elektrischer Klimakompressor interner ROM Fehler | 1 |
| 0x221426 | elektrischer Klimakompressor interner EEPROM Fehler | 1 |
| 0x221427 | elektrischer Klimakompressor interner Fehler | 1 |
| 0x221428 | elektrischer Klimakompressor interner Fehler | 1 |
| 0x221429 | elektrischer Klimakompressor interner Fehler | 1 |
| 0x22142A | elektrischer Klimakompressor Spannungssensor 2 auf Masse | 1 |
| 0x22142B | elektrischer Klimakompressor HV Sensor 2 auf Masse | 1 |
| 0x22142C | elektrischer Klimakompressor Platinen-Temperaturfühler Temperatur zu hoch | 1 |
| 0x22142D | elektrischer Klimakompressor Platinen-Temperaturfühler 2 auf Masse | 1 |
| 0x22142E | elektrischer Klimakompressor Spannungssensor Plausibilisierung fehlgeschlagen | 1 |
| 0x221430 | elektrischer Klimakompressor Platinen-Temperaturfühler 2 auf Batterie | 1 |
| 0x221431 | elektrischer Klimakompressor Platinen-Temperaturfühler 2 Temperatur zu hoch | 1 |
| 0x221432 | elektrischer Klimakompressor Platinen-Temperaturfühler Temperatur zu gering | 1 |
| 0x221433 | Kältemitteldrucksensor auf Masse | 1 |
| 0x221434 | Kältemitteldrucksensor auf Batterie | 1 |
| 0x221435 | Kältemitteldrucksensor Druck zu hoch | 1 |
| 0x221436 | Kältemitteldrucksensor Druck zu gering | 1 |
| 0x221437 | Kältemitteldrucksensor Plausibilisierung fehlgeschlagen | 1 |
| 0x221438 | Fehler auf LIN | 1 |
| 0x221439 | elektrischer Klimakompressor LIN Kommunikationsfehler | 1 |
| 0x221440 | K-CAN Botschafts Fehler | 1 |
| 0x221441 | K-CAN Bus Fehler | 1 |
| 0xD78402 | CAN Hardware: defekt | 0 |
| 0xD78405 | FlexRay Hardware: defekt | 0 |
| 0xD7840A | FA-CAN: Kommunikationsfehler | 1 |
| 0xD78420 | FlexRay: Kommunikationsfehler | 1 |
| 0xD78486 | A-CAN: Kommunikationsfehler | 1 |
| 0xD78BFF | Netzwerkfehler: nur zum Test | 1 |
| 0xD78C01 | H-LIN 1: Kommunikationsfehler | 1 |
| 0xD78C02 | H-LIN 2: Kommunikationsfehler | 1 |
| 0xD78C03 | LIN: Konfigurationsfehler | 0 |
| 0xD79400 | FlexRay, Botschaft (Daten Bremssystem Motorsteuerung, 102.0.2): fehlt | 1 |
| 0xD79401 | FlexRay, Botschaft (ZV und Klappenzustand, 116.1.2): fehlt | 1 |
| 0xD79402 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): Aliveprüfung | 1 |
| 0xD79403 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): Prüfsumme falsch | 1 |
| 0xD79404 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): fehlt | 1 |
| 0xD79405 | FlexRay, Botschaft (Status Motor Start Auto, 230.1.2): Aliveprüfung | 1 |
| 0xD79406 | FlexRay, Botschaft (Status Motor Start Auto, 230.1.2): Prüfsumme falsch | 1 |
| 0xD79407 | FlexRay, Botschaft (Status Motor Start Auto, 230.1.2): fehlt | 1 |
| 0xD79408 | FlexRay, Botschaft (Status Energieerzeugung, 232.1.2): fehlt | 1 |
| 0xD79409 | FlexRay, Botschaft (Daten Antriebsstrang 3, 251.1.4): fehlt | 1 |
| 0xD7940A | FlexRay, Botschaft (Spannung Bordnetz, 251.2.4): fehlt | 1 |
| 0xD7940B | FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): Aliveprüfung | 1 |
| 0xD7940C | FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): fehlt | 1 |
| 0xD7940D | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik/Konfiguration Schalter Fahrdynamik 2, 272.4.8): fehlt | 1 |
| 0xD7940E | FlexRay, Botschaft (Relativzeit BN2020, 276.2.8): fehlt | 1 |
| 0xD7940F | FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4): Aliveprüfung | 1 |
| 0xD79410 | FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4): Prüfsumme falsch | 1 |
| 0xD79411 | FlexRay, Botschaft (Winkel Fahrpedal, 40.1.4): fehlt | 1 |
| 0xD79412 | FlexRay, Botschaft (Radmoment Antrieb 5, 40.3.4): Aliveprüfung | 1 |
| 0xD79413 | FlexRay, Botschaft (Radmoment Antrieb 5, 40.3.4): Prüfsumme falsch | 1 |
| 0xD79414 | FlexRay, Botschaft (Radmoment Antrieb 5, 40.3.4): fehlt | 1 |
| 0xD79415 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): Aliveprüfung | 1 |
| 0xD79416 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): Prüfsumme falsch | 1 |
| 0xD79417 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): fehlt | 1 |
| 0xD79418 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): Aliveprüfung | 1 |
| 0xD79419 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): Prüfsumme falsch | 1 |
| 0xD7941A | FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): fehlt | 1 |
| 0xD7941B | FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): Aliveprüfung | 1 |
| 0xD7941C | FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): Prüfsumme falsch | 1 |
| 0xD7941D | FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): fehlt | 1 |
| 0xD7941E | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xD7941F | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xD79420 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xD79421 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xD79422 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xD79423 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xD79424 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xD79425 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xD79426 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xD79427 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xD79428 | FlexRay, Botschaft (Lenkwinkel Vorderachse Effektiv, 56.1.2): fehlt | 1 |
| 0xD79429 | FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2): Aliveprüfung | 1 |
| 0xD7942A | FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2): Prüfsumme falsch | 1 |
| 0xD7942B | FlexRay, Botschaft (Kurbelwelle Drehmoment Daten Hybrid, 74.0.2): fehlt | 1 |
| 0xD7942C | FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): fehlt | 1 |
| 0xD7942E | FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4): fehlt | 1 |
| 0xD7942F | Flexray, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 0 |
| 0xD79800 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xD79801 | FA-CAN, Botschaft (Steuerung Crashabschaltung EKP, 0x135): fehlt | 1 |
| 0xD79802 | FA-CAN, Botschaft (Bordnetz Spannungswert, 0x281): fehlt | 1 |
| 0xD79803 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xD79804 | FA-CAN, Botschaft (Anforderung Klima Hybrid, 0x299): fehlt | 1 |
| 0xD79805 | FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xD79806 | FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xD79807 | FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xD79808 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xD79809 | FA-CAN, Botschaft (Navigation System Information, 0x34E): fehlt | 1 |
| 0xD7980A | FA-CAN, Botschaft (Diagnose OBD Motor, 0x397): fehlt | 1 |
| 0xD7980B | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xD7980C | FA-CAN, Botschaft (Daten Antriebsstrang 1, 0x3FB): fehlt | 1 |
| 0xD7980D | FA-CAN, Botschaft (Dienste, 0x5F8): fehlt, Sender IHKA | 1 |
| 0xD7980E | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xD7980F | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xD79810 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xD79811 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xD79812 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xD79813 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xD79814 | FA-CAN, Botschaft (Ist Bremsmoment Summe, 0xEF): fehlt | 1 |
| 0xD79815 | FA-CAN, Botschaft (Status Diagnose OBD 1 Antriebsstrang, 0x300): Aliveprüfung | 1 |
| 0xD79816 | FA-CAN, Botschaft (Status Diagnose OBD 1 Antriebsstrang, 0x300): fehlt | 1 |
| 0xD79817 | FA-CAN, Botschaft (Status Diagnose OBD 1 Slave 1, 0x3DF): Aliveprüfung | 1 |
| 0xD79818 | FA-CAN, Botschaft (Status Diagnose OBD 1 Slave 1, 0x3DF): fehlt | 1 |
| 0xD79C00 | A-CAN, Kommunikation (DME): fehlt | 1 |
| 0xD79C01 | A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 1 |
| 0xD79C02 | A-CAN, Botschaft (Hybrid Vorgabe, 0x113): Aliveprüfung | 1 |
| 0xD79C03 | A-CAN, Botschaft (Hybrid Vorgabe, 0x113): Prüfsumme falsch | 1 |
| 0xD79C04 | A-CAN, Botschaft (Hybrid Vorgabe, 0x113): fehlt | 1 |
| 0xD79C05 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xD79C06 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xD79C07 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xD79C08 | A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA): fehlt | 1 |
| 0xD79C09 | A-CAN, Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, 0x2F5): fehlt | 1 |
| 0xD79C0A | A-CAN, Botschaft (Steuerung Kühlung Antrieb Elektrisch, 0x340): fehlt | 1 |
| 0xD79C0B | A-CAN, Botschaft (Identifikation Hochvoltspeicher, 0x363): fehlt | 1 |
| 0xD79C0C | A-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher,  0x37B): fehlt | 1 |
| 0xD79C0D | A-CAN, Botschaft (Diagnose OBD Motor, 0x397): fehlt | 1 |
| 0xD79C0E | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xD79C0F | A-CAN, Botschaft (Powermanagement Niederspannung, 0x3C9): fehlt | 1 |
| 0xD79C10 | A-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xD79C11 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xD79C12 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xD79C13 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xD79C14 | A-CAN, Botschaft (Status Ladung Hochvoltspeicher 1, 0x40D): fehlt | 1 |
| 0xD79C15 | A-CAN, Botschaft (Diagnose OBD Hybrid 2, 0x417): Aliveprüfung | 1 |
| 0xD79C16 | A-CAN, Botschaft (Diagnose OBD Hybrid 2, 0x417): fehlt | 1 |
| 0xD79C17 | A-CAN, Botschaft (Status Hybrid 2, 0x418): fehlt | 1 |
| 0xD79C18 | A-CAN, Botschaft (Status Betriebsart Hybrid 2, 0x41C): fehlt | 1 |
| 0xD79C19 | A-CAN, Botschaft (OBD Anfrage Begrenzung Drehmoment, 0x41D): fehlt | 1 |
| 0xD79C1A | A-CAN, Botschaft (Status Ladung Hochvoltspeicher 2, 0x430): fehlt | 1 |
| 0xD79C1B | A-CAN, Botschaft (Daten Hochvoltspeicher, 0x431): fehlt | 1 |
| 0xD79C1C | A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): fehlt | 1 |
| 0xD79C1D | A-CAN, Botschaft (Radmoment Antrieb 1, 0x8F): Aliveprüfung | 1 |
| 0xD79C1E | A-CAN, Botschaft (Radmoment Antrieb 1, 0x8F): Prüfsumme falsch | 1 |
| 0xD79C1F | A-CAN, Botschaft (Radmoment Antrieb 1, 0x8F): fehlt | 1 |
| 0xD79C20 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xD79C21 | A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5): Aliveprüfung | 1 |
| 0xD79C22 | A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5): Prüfsumme falsch | 1 |
| 0xD79C23 | A-CAN, Botschaft (Drehmoment Kurbelwelle 1, 0xA5): fehlt | 1 |
| 0xD79C24 | A-CAN, Botschaft (Drehmoment Kurbelwelle 3, 0xA7): fehlt | 1 |
| 0xD7A402 | LIN, Kommunikation (EME-Kühlmittelpumpe): fehlt | 0 |
| 0xD7A800 | LIN, Kommunikation (intelligenter Batteriesensor, 2. Batterie): fehlt | 0 |
| 0xD7A801 | LIN, erweiterte Kommunikation, intelligenter Batteriesensor, 2. Batterie: Fehlfunktion | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X1721

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

### RES_0X63A4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NLM_DEAK_MSA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswort MSA Deaktivierer durch Notlaufmanager |
| STAT_ANF_NL_EME_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswort zum Ansteuern von Ersatzreaktionen: 1. VM-Drehzahlbegrezung und 2. EGS-AKS/EWP-Reaktion |

### RES_0XADF0

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ROTORLAGESENSOR_STATUS_MODE | - | - | - | aktueller Status und Modus |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | ° | high | int | - | - | 5493.1641 | 1000000.0 | 0.0 | EPS Offset Wert |

### RES_0XADF1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_DIAG_DCDC_MODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ST_DIAG_DCDC_MODUS | 1.0 | 1.0 | 0.0 | Rückmeldung Betriebsart DCDC |
| STAT_ST_DIAG_DCDC_GRENZEN | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ST_DIAG_DCDC_GRENZEN | 1.0 | 1.0 | 0.0 | Rückmeldung Grenzen |

### RES_0XADF2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_SYSTEM_ON_OFF | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_HV_SYSTEM_ON_OFF | 1.0 | 1.0 | 0.0 | Auswahl für Ein-/Ausschalten des HV-Systems |

### RES_0XADF3

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANSTEUERUNG_ERFOLGREICH_EIN | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung  der LIN Wasserpumpe EME (0 - Job inaktiv; 1 - Job aktiv) |

### RES_0XADF4

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_ANFORDERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADF5

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_NV_DELETE | - | - | + | 0-n | high | unsigned char | - | TAB_EME_EEP_RECALL_DEFAULT | 1.0 | 1.0 | 0.0 | Zustand des Vorgangs Löschen des RAM |

### RES_0XADF7

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IGBT_FREILAUF_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_EME_FREILAUF_IGBTS | 1.0 | 1.0 | 0.0 | aktueller Status über das Ausführen des Jobs |

### RES_0XDDF0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_E_MOTOR_WERT | °C | high | int | - | - | 1.5625 | 100.0 | 0.0 | E-Motor Temperatur |
| STAT_TEMP_LE_UVW_MAX_WERT | °C | high | int | - | - | 0.1 | 1.0 | 0.0 | Maximaltemperatur Inverter (Modelliert aus T_le_u, T_le_v, T_le_w) |
| STAT_TEMP_LE_U_WERT | °C | high | int | - | - | 1.5625 | 100.0 | 0.0 | Invertertemperatur Phase U |
| STAT_TEMP_LE_V_WERT | °C | high | int | - | - | 1.5625 | 100.0 | 0.0 | Invertertemperatur Phase V |
| STAT_TEMP_LE_W_WERT | °C | high | int | - | - | 1.5625 | 100.0 | 0.0 | Invertertemperatur Phase W |

### RES_0XDDF3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_DC_HV_WERT_DCDC_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | Strom DCDC Wandler (in der EME) |
| STAT_STROM_AC_HV_RMS_WERT | A | high | int | - | - | 0.0625 | 1.0 | 0.0 | RMS Zuleitungsstrom für alle drei Phasen gemittelt |

### RES_0XDDF6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DCDC Wandler: IST-Spannung LV-Seite am B+ Bolzen |
| STAT_STROM_DCDC_LV_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | DCDC Wandler: IST-Strom LV-Seite am B+ Bolzen |

### RES_0XDDF7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | int | - | - | 0.5 | 1.0 | 0.0 | Drehzah der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | int | - | - | 37.3535 | 1000.0 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | int | - | - | 37.3535 | 1000.0 | 0.0 | SOLL Moment der E-Maschine |

### RES_0XDDF8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_LADEMODUS_NR | 0-n | high | unsigned char | - | TAB_STAT_DCDC_LADEMODUS_NR | 1.0 | 1.0 | 0.0 | Betriebsmodus DCDC Wandler |
| STAT_LADUNG_HV_BATTERIE_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Istwert Ladezustand Batterie |

### RES_0XDDFE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EME_ANTRIEBSART_NR | 0-n | high | unsigned char | - | TAB_STAT_EME_ANTRIEBSART_NR | 1.0 | 1.0 | 0.0 | Rückmeldung der aktuell anliegenden Antriebsart. z.B. Rekuperation, Boost etc. |

### RES_0XDE00

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
| STAT_I_DCDC_HV_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | Strom HV-Seite |
| STAT_U_DCDC_HV_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannung HV-Seite |
| STAT_I_DCDC_LV_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | Strom NV-Seite |
| STAT_U_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannung NV-Seite |

### RES_0XDE01

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_P_EM1_GEN_MAX_WERT | W | high | int | - | - | 2.0 | 1.0 | 0.0 | maximal verfügbare generatorische Leistung E-Maschine |
| STAT_P_HVB_MOT_1S_WERT | W | high | unsigned int | - | - | 2.0 | 1.0 | -131068.0 | maximal verfügbare Entladeleistung Batterie |
| STAT_P_WUNSCH_SOCR_WERT | W | high | int | - | - | 8.0 | 1.0 | 0.0 | Wunschleistung SOC-Regler |
| STAT_P_BN_WERT | W | high | long | - | - | 1.0 | 1.0 | 0.0 | Leistung Bordnetz |
| STAT_ANF_ANTRIEB_NR | 0-n | high | unsigned char | - | TAB_EME_ANF_ANTRIEB | 1.0 | 1.0 | 0.0 | Angeforderter Antrieb |
| STAT_ANF_ANTRIEB_FUNK_NR | 0-n | high | unsigned char | - | TAB_EME_ANF_ANTRIEB_FUNK | 1.0 | 1.0 | 0.0 | angeforderte Leistung aufgrund Antriebsfunktion |
| STAT_ANF_DCDC_ENTL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung Entlastung DCDC-Wandler |
| STAT_ANF_DCDC_AUS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung Abschalten DCDC-Wandler |
| STAT_ANF_EKMV_AUS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung Abschalten eKMV-Wandler |

### RES_0XDE02

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_DC_HV_LE_WERT | V | high | int | - | - | 0.3125 | 10.0 | 0.0 | HV-Zwischenkreisspannung |
| STAT_HV_READY | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe HV |
| STAT_HDCAC_EREQ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung Schließen Schütze HV-Batterie |
| STAT_I0ANF_HVB | 0-n | high | unsigned char | - | TAB_EME_I0ANF_HVB | 1.0 | 1.0 | 0.0 | Status Nullstromanforderung |
| STAT_ANF_ENTL_DCDC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung Entladung HV-Zwischenkreis durch DCDC-Wandler |
| STAT_HVSTART_KOMM | 0-n | high | unsigned char | - | TAB_EME_HVSTART_KOMM | 1.0 | 1.0 | 0.0 | Ausgabe des Stateflow-Status des HVPM Startsystems |
| STAT_ANF_ENTL_EME | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anforderung Notentladung ZK: 0 = nicht aktiv; 1 = aktiv |

### RES_0XDE03

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_MSA_DCDC_WERT | Ah | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge DC/DC MSA |
| STAT_NV_MSA_EKK_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge EKK MSA |
| STAT_NV_ENTL_EKK_STD_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge EKK Standkühlung |
| STAT_NV_ENTL_EKK15_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge EKK Kl15 |
| STAT_NV_ENTL_DCDC15_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge DC/DC Kl15 |
| STAT_NV_ENTL_EM1_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge EM1 |
| STAT_NV_ENTL_EKK_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge EKK |
| STAT_NV_ENTL_DCDC_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge DC/DC |
| STAT_NV_MSA_EM1_WERT | Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Zähler Ladungsmenge EM1 MSA |
| STAT_NV_UHVB_SB_NULL_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB0 |
| STAT_NV_UHVB_SB_1_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB1 |
| STAT_NV_UHVB_SB_2_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB2 |
| STAT_NV_UHVB_SB_3_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB3 |
| STAT_NV_UHVB_SB_4_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB4 |
| STAT_NV_UHVB_SB_5_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB5 |
| STAT_NV_UHVB_SB_6_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB6 |
| STAT_NV_UHVB_SB_7_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB7 |
| STAT_NV_UHVB_SB_8_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB8 |
| STAT_NV_UHVB_SB_9_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB9 |
| STAT_NV_UHVB_SB_10_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB10 |
| STAT_NV_UHVB_SB_11_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB11 |
| STAT_NV_UHVB_SB_12_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB12 |
| STAT_NV_UHVB_SB_13_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB13 |
| STAT_NV_UHVB_SB_14_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB14 |
| STAT_NV_UHVB_SB_15_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB15 |
| STAT_NV_UHVB_SB_16_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB16 |
| STAT_NV_UHVB_SB_17_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB17 |
| STAT_NV_UHVB_SB_18_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB18 |
| STAT_NV_UHVB_SB_19_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB19 |
| STAT_NV_UHVB_SB_20_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB20 |
| STAT_NV_UHVB_SB_21_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB21 |
| STAT_NV_UHVB_SB_22_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB22 |
| STAT_NV_UHVB_SB_23_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB23 |
| STAT_NV_UHVB_SB_24_WERT | s | high | long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittliche Zellenspannung in SB24 |

### RES_0XDE04

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HVB_SOC_FAHRB_0_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_20_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_25_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_30_33_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_33_36_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_36_39_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_39_42_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_42_45_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_45_48_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_48_51_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_51_56_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_56_65_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_65_80_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |
| STAT_NV_HVB_SOC_FAHRB_80_100_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand HV-Batterie bei Herstellung Fahrbereitschaft |

### RES_0XDE05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_KM_SOC_LOW_MSAAV_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AV zuletzt deaktiviert vor km |
| STAT_NV_ANZ_SOC_LOW_MSAAV_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |
| STAT_NV_KM_SOC_LOW_MSAAV_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AV zuletzt aktiviert vor km |
| STAT_NV_KM_SOC_HIGH_MSAAV_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AV zuletzt deaktiviert vor km |
| STAT_NV_ANZ_SOC_HIGH_MSAAV_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |
| STAT_NV_KM_SOC_HIGH_MSAAV_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AV zuletzt aktiviert vor km |
| STAT_NV_T_MSA_STOP_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit im MSA Stop |
| STAT_NV_ANZ_MSA_STOP_KL5S_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA Stops kleiner 5s |
| STAT_NV_ANZ_MSA_STOP_GR5S_KL20S_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA Stops zwischen 5s und 20s |
| STAT_NV_ANZ_MSA_STOP_GR20S_KL60S_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA Stops zwischen 20s und 60s |
| STAT_NV_ANZ_MSA_STOP_GR60S_KL180S_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA Stops zwischen 60s und 180s |
| STAT_NV_ANZ_MSA_STOP_GR180S_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA Stops größer 180s |
| STAT_NV_PRZ_EA_SOC_LOW_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_SOC_LOW_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_SOC_HIGH_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_SOC_HIGH_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_PWRLOW_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_PWRLOW_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_TEMP_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_EA_TEMP_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil EA aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_SOC_LOW_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_SOC_LOW_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_SOC_HIGH_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_SOC_HIGH_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_PWRLOW_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_PWRLOW_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_TEMP_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_PRZ_AV_TEMP_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anteil AV aktiv während Fahrzeugstopp (<3km/h für 400ms bis >3 km/h) |
| STAT_NV_T_FZG_STOP_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer aller Fahrzeugstopps in Fahrbereitschaft (unabhängig vom Status VM). Stopphase: Stop beginnt bei <3 km/h für min. 400ms. Endet bei >3 km/h.  (Reset mit Registrierung eines Batterietausches) |
| STAT_NV_ANZ_FZG_STOP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtanzahl aller Fahrzeugstopps in Fahrbereitschaft (unabhängig vom Status VM). Stopphase: Stop beginnt bei <3 km/h für 400ms. Endet bei >3 km/h.  (Reset mit Registrierung eines Batterietausches) |
| STAT_NV_KM_PWR_LOW_MSAEA_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EA zuletzt aktiviert vor km |
| STAT_NV_KM_PWR_LOW_MSAEA_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EA zuletzt deaktiviert vor km |
| STAT_NV_ANZ_PWR_LOW_MSAEA_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |
| STAT_NV_KM_PWR_LOW_MSAAV_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AV zuletzt aktiviert vor km |
| STAT_NV_KM_PWR_LOW_MSAAV_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EA zuletzt deaktiviert vor km |
| STAT_NV_ANZ_PWR_LOW_MSAAV_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |
| STAT_NV_KM_TEMP_HVB_MSAEA_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EA zuletzt aktiviert vor km |
| STAT_NV_KM_TEMP_HVB_MSAEA_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EA zuletzt deaktiviert vor km |
| STAT_NV_ANZ_TEMP_HVB_MSAEA_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |

### RES_0XDE06

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_KM_DEG_EKMV_VM_AN_A_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei Beginn der Reduzierung EKMV bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EKMV_VM_AN_A_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EKMV bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_BUCK_VM_AN_A_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung Buckmode bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_BUCK_VM_AN_A_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen Buckmode bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EKMV_VM_AUS_A_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung EKMV bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EKMV_VM_AUS_A_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EKMV bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_BUCK_VM_AUS_A_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung Buckmode bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_BUCK_VM_AUS_A_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen Buckmode bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EKMV_VM_AN_B_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung EKMV bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EKMV_VM_AN_B_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EKMV bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_BUCK_VM_AN_B_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung Buckmode bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_BUCK_VM_AN_B_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen Buckmode bei VM an. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EKMV_VM_AUS_B_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei Beginn der Reduzierung EKMV bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EKMV_VM_AUS_B_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EKMV bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_BUCK_VM_AUS_B_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung Buckmode bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_BUCK_VM_AUS_B_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen Buckmode bei VM aus. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EM1_LL_A_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung EM im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EM1_LL_A_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EM im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EM1_LL_B_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung EM im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EM1_LL_B_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EM nicht im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EM1_NOTLL_A_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung EM nicht im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EM1_NOTLL_A_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EM nicht im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_KM_DEG_EM1_NOTLL_B_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Kilometerstand bei beginn der Reduzierung EM nicht im Leerlauf. Änderung nur bei Reduzierungen > 1min. |
| STAT_NV_T_DEG_EM1_NOTLL_B_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer der Reduzierungen EM nicht im Leerlauf. Änderung nur bei Reduzierungen > 1min. |

### RES_0XDE0D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL50L_NR | 0-n | high | unsigned char | - | TAB_STAT_KL50L_NR | 1.0 | 1.0 | 0.0 | Status Klemme 50 (Hi/Lo) |
| STAT_SPANNUNG_UBAT_WERT | V | high | unsigned int | - | - | 0.0015 | 1.0 | 0.0 | Spannung 12V Bordnetz (von der DME gemessene LV-Bordnetzspannung) |
| STAT_STROM_UBAT_WERT | A | high | int | - | - | 0.08 | 1.0 | 0.0 | Strom 12V Bordnetz |

### RES_0XDE10

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_TAUSCH_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | KM des letzten Batterietausch 1 |
| STAT_KM_TAUSCH_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | KM des letzten Batterietausch 2 |

### RES_0XDE14

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_NL_EME_KM_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 1 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 2 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 3 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_4_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 4 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_5_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 5 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_6_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 6 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_7_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 7 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_8_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 8 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_9_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 9 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_10_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 10 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_11_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 11 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_12_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 12 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_13_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 13 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_14_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 14 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_15_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 15 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_KM_16_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 16 des Kilometerstandes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 1 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 2 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 3 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 4 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 5 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 6 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 7 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 8 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 9 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 10 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 11 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 12 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 13 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 14 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 15 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_WERT_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 16 des Anforderungswertes bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 1 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 2 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 3 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 4 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 5 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 6 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 7 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 8 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 9 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 10 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 11 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 12 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 13 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 14 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 15 der Zeit bei Notlaufanforderung von der EME an DME |
| STAT_ANF_NL_EME_ZEIT_16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 16 der Zeit bei Notlaufanforderung von der EME an DME |

### RES_0XDE15

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NLM_DEAK_MSA_KM_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 1 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 2 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 3 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_4_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 4 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_5_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 5 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_6_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 6 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_7_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 7 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_8_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 8 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_9_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 9 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_10_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 10 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_11_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 11 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_12_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 12 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_13_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 13 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_14_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 14 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_15_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 15 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_KM_16_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 16 des Kilometerstandes bei MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 1 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 2 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 3 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 4 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 5 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 6 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 7 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 8 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 9 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 10 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 11 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 12 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 13 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 14 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 15 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_WERT_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 16 des Anforderungswertes bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 1 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 2 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 3 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 4 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 5 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 6 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 7 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 8 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 9 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 10 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 11 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 12 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 13 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 14 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 15 der Zeit bei  MSA-Ersatzreaktionen |
| STAT_NLM_DEAK_MSA_ZEIT_16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabeindex 16 der Zeit bei  MSA-Ersatzreaktionen |

### RES_0XDE18

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_START_CCM_636_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang) |
| STAT_ZEIT_STOP_CCM_636_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang) |
| STAT_KM_START_CCM_636_0_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang) |
| STAT_ABBRUCHBEDINGUNG_0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschalte t(letzter Vorgang) |
| STAT_ZEIT_START_CCM_636_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -1) |
| STAT_ZEIT_STOP_CCM_636_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -1) |
| STAT_KM_START_CCM_636_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -1) |
| STAT_ABBRUCHBEDINGUNG_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -1) |
| STAT_ZEIT_START_CCM_636_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -2) |
| STAT_ZEIT_STOP_CCM_636_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -2) |
| STAT_KM_START_CCM_636_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -2) |
| STAT_ABBRUCHBEDINGUNG_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -2) |
| STAT_ZEIT_START_CCM_636_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -3) |
| STAT_ZEIT_STOP_CCM_636_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -3) |
| STAT_KM_START_CCM_636_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -3) |
| STAT_ABBRUCHBEDINGUNG_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -3) |
| STAT_ZEIT_START_CCM_636_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -4) |
| STAT_ZEIT_STOP_CCM_636_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -4) |
| STAT_KM_START_CCM_636_4_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -4) |
| STAT_ABBRUCHBEDINGUNG_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -4) |
| STAT_ZEIT_START_CCM_636_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -5) |
| STAT_ZEIT_STOP_CCM_636_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -5) |
| STAT_KM_START_CCM_636_5_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -5) |
| STAT_ABBRUCHBEDINGUNG_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -5) |
| STAT_ZEIT_START_CCM_636_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -6) |
| STAT_ZEIT_STOP_CCM_636_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -6) |
| STAT_KM_START_CCM_636_6_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -6) |
| STAT_ABBRUCHBEDINGUNG_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -6) |
| STAT_ZEIT_START_CCM_636_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -7) |
| STAT_ZEIT_STOP_CCM_636_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -7) |
| STAT_KM_START_CCM_636_7_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -7) |
| STAT_ABBRUCHBEDINGUNG_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -7) |
| STAT_ZEIT_START_CCM_636_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -8) |
| STAT_ZEIT_STOP_CCM_636_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -8) |
| STAT_KM_START_CCM_636_8_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -8) |
| STAT_ABBRUCHBEDINGUNG_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -8) |
| STAT_ZEIT_START_CCM_636_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Startzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -9) |
| STAT_ZEIT_STOP_CCM_636_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stopzeit der CC-Meldung HV-System abgeschaltet (letzter Vorgang -9) |
| STAT_KM_START_CCM_636_9_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Aktivieren der CC-Meldung HV-System abgeschaltet (letzter Vorgang -9) |
| STAT_ABBRUCHBEDINGUNG_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Abbruchbedingung CC-Meldung HV-System abgeschaltet (letzter Vorgang -9) |

### RES_0XDE19

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BREMSBTG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsbetätigungen |
| STAT_LAUFZEIT_ELUP_S_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Elup |
| STAT_ANLAUFE_ELUP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anläufe Elup |

### RES_0XDE1B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_ANZ_TEMP_LOW_HVB_MSAAV_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Auftreten MSA Abschaltverhinderer aufgrund niedriger HV-Batterietemperatur |
| STAT_NV_KM_TEMP_LOW_HVB_MSAAV_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | km seit letztem Aktivieren MSA Abschaltverhinderer aufgrund niedriger HV-Batterietemperatur |
| STAT_NV_KM_TEMP_LOW_HVB_MSAAV_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | km seit letztem Deaktivieren MSA Abschaltverhinderer aufgrund niedriger HV-Batterietemperatur |
| STAT_NV_ANZ_TEMP_LOW_HVB_MSAEA_AKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Auftreten MSA Einschaltaufforderer aufgrund niedriger HV-Batterietemperatur |
| STAT_NV_KM_TEMP_LOW_HVB_MSAEA_AKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | km seit letztem Aktivieren MSA Einschaltaufforderer aufgrund niedriger HV-Batterietemperatur |
| STAT_NV_KM_TEMP_LOW_HVB_MSAEA_DEAKT_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | km seit letztem Deaktivieren MSA Einschaltaufforderer aufgrund niedriger HV-Batterietemperatur |
| STAT_NV_PRZ_AV_TEMP_LOW_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gleitender Durchschnitt der letzten 2 Minuten des Verhältnisses zwischen Fahrzeugstopzeit mit MSA Abschaltverhinderer aufgrund niedriger HV-Batterietemperatur und der Fahrzeugstopzeit insgesamt |
| STAT_NV_PRZ_AV_TEMP_LOW_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gleitender Durchschnitt der letzten Stunde des Verhältnisses zwischen Fahrzeugstopzeit mit MSA Abschaltverhinderer aufgrund niedriger HV-Batterietemperatur und der Fahrzeugstopzeit insgesamt |
| STAT_NV_PRZ_EA_TEMP_LOW_KURZ_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gleitender Durchschnitt der letzten 2 Minuten des Verhältnisses zwischen Fahrzeugstopzeit mit MSA Einschaltaufforderer aufgrund niedriger HV-Batterietemperatur und der Fahrzeugstopzeit insgesamt |
| STAT_NV_PRZ_EA_TEMP_LOW_LANG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gleitender Durchschnitt der letzten Stunde des Verhältnisses zwischen Fahrzeugstopzeit mit MSA Einschaltaufforderer aufgrund niedriger HV-Batterietemperatur und der Fahrzeugstopzeit insgesamt |

### RES_0XDE1C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DCDC_ALS_HIST_BEREICH_NULL_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 0 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_1_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 1 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_2_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 2 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_3_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 3 |

### RES_0XDE1E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZE_KMSTAND_BATTTAUSCH_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei letztem ZSE-Batterie-Tausch |
| STAT_SZE_KMSTAND_BATTTAUSCH_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei vorletztem ZSE-Batterie-Tausch |
| STAT_SZE_KMSTAND_BATTTAUSCH_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | km-Stand bei vorvorletztem ZSE-Batterie-Tausch |
| STAT_SZE_WASSERVERLUST_WERT | g/Ah | high | long | - | - | 0.0010 | 1.0 | 0.0 | Wasserverlust der ZSE-Batterie |
| STAT_SZE_HIST_OCV_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 1 |
| STAT_SZE_HIST_OCV_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 2 |
| STAT_SZE_HIST_OCV_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 3 |
| STAT_SZE_HIST_OCV_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 4 |
| STAT_SZE_HIST_OCV_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 5 |
| STAT_SZE_HIST_OCV_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 6 |
| STAT_SZE_HIST_OCV_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Histogramm Ruhespannung der ZSE-Batterie; Bereich 7 |
| STAT_SZE_SOC_WERT | % | high | long | - | - | 0.1 | 1.0 | 0.0 | SOC der ZSE-Batterie |
| STAT_SZE_SOH_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOH der ZSE-Batterie |
| STAT_SZE_SOH_H2O_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wasserverlusts-SOH der ZSE-Batterie |
| STAT_SZE_SOH_OCV_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ruhespannungs-SOH der ZSE-Batterie |
| STAT_SZE_SOH_T_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | T-Histogramm-SOH der ZSE-Batterie |
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

### RES_0XDE25

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TE_ZSE_NR | 0-n | high | unsigned char | - | TAB_EME_STAT_TE_ZSE | - | - | - | Aktueller Zustand des ZSE-Trennelements auslesen |

### RES_0XDE26

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BIT_0 | 0/1 | high | unsigned long | 0x00000001 | - | 1.0 | 1.0 | 0.0 | HV aus durch Diagnose Steuern-Job angefordert, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_1 | 0/1 | high | unsigned long | 0x00000002 | - | 1.0 | 1.0 | 0.0 | Flash-Modus, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_2 | 0/1 | high | unsigned long | 0x00000004 | - | 1.0 | 1.0 | 0.0 | Interlockfehler, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_3 | 0/1 | high | unsigned long | 0x00000008 | - | 1.0 | 1.0 | 0.0 | Kategorie 6 Batteriefehler, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_4 | 0/1 | high | unsigned long | 0x00000010 | - | 1.0 | 1.0 | 0.0 | HV aus durch Entladeschutzfunktion HEV angefordert, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_5 | 0/1 | high | unsigned long | 0x00000020 | - | 1.0 | 1.0 | 0.0 | Notaus, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_6 | 0/1 | high | unsigned long | 0x00000040 | - | 1.0 | 1.0 | 0.0 | schwerer Crash, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_7 | 0/1 | high | unsigned long | 0x00000080 | - | 1.0 | 1.0 | 0.0 | Crash, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_8 | 0/1 | high | unsigned long | 0x00000100 | - | 1.0 | 1.0 | 0.0 | Kategorie 7 Batteriefehler, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_9 | 0/1 | high | unsigned long | 0x00000200 | - | 1.0 | 1.0 | 0.0 | einfacher Schützkleber, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_10 | 0/1 | high | unsigned long | 0x00000400 | - | 1.0 | 1.0 | 0.0 | doppelter Schützkleber, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_11 | 0/1 | high | unsigned long | 0x00000800 | - | 1.0 | 1.0 | 0.0 | Schützkleber verhindert HV-batterielosen Betrieb, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_12 | 0/1 | high | unsigned long | 0x00001000 | - | 1.0 | 1.0 | 0.0 | Signale von SME ungültig oder ausgefallen, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_13 | 0/1 | high | unsigned long | 0x00002000 | - | 1.0 | 1.0 | 0.0 | Signale von LE ungültig oder ausgefallen, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_14 | 0/1 | high | unsigned long | 0x00004000 | - | 1.0 | 1.0 | 0.0 | HV aus durch Power Down, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_15 | 0/1 | high | unsigned long | 0x00008000 | - | 1.0 | 1.0 | 0.0 | HV aus Nachlaufzeit Klemme 30b abgelaufen, 1 = aktiv, 0 = inaktiv |
| STAT_BIT_16 | 0/1 | high | unsigned long | 0x00010000 | - | 1.0 | 1.0 | 0.0 | HV aus durch Entladeschutzfunktion BEV angefordert, 1 = aktiv, 0 = inaktiv |

### RES_0XDE27

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_TEMP_HIST_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeiteinheiten, welche die EM im Temperaturbereich 1 verbringt. |
| STAT_EM_TEMP_HIST_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeiteinheiten, welche die EM im Temperaturbereich 2 verbringt. |
| STAT_EM_TEMP_HIST_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeiteinheiten, welche die EM im Temperaturbereich 3 verbringt. |
| STAT_EM_TEMP_HIST_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeiteinheiten, welche die EM im Temperaturbereich 4 verbringt. |
| STAT_EM_TEMP_HIST_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeiteinheiten, welche die EM im Temperaturbereich 5 verbringt. |
| STAT_EM_TEMP_HIST_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeiteinheiten, welche die EM im Temperaturbereich 6 verbringt. |

### RES_0XDE28

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BSZ_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszaehler |
| STAT_BSZFAHRB_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszaehler Fahrbereit |
| STAT_STRCK_E_FAHR_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Gesamtstrecke E-Fahren |
| STAT_STRCK_E_FAHR_ANTR_WERT | m | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Gesamtstrecke E-Fahren Antrieb |
| STAT_STRCK_E_FAHR_GESCHW_BER_01_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 1 |
| STAT_STRCK_E_FAHR_GESCHW_BER_02_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 2 |
| STAT_STRCK_E_FAHR_GESCHW_BER_03_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 3 |
| STAT_STRCK_E_FAHR_GESCHW_BER_04_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 4 |
| STAT_STRCK_E_FAHR_GESCHW_BER_05_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 5 |
| STAT_STRCK_E_FAHR_GESCHW_BER_06_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 6 |
| STAT_STRCK_E_FAHR_GESCHW_BER_07_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Kilometer E-Fahren Geschwindigkeitsbereich 7 |
| STAT_STRECKE_VM_AUS_BER_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahren mit VM aus Streckenbereich 1 |
| STAT_STRECKE_VM_AUS_BER_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahren mit VM aus Streckenbereich 2 |
| STAT_STRECKE_VM_AUS_BER_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahren mit VM aus Streckenbereich 3 |
| STAT_STRECKE_VM_AUS_BER_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahren mit VM aus Streckenbereich 4 |
| STAT_STRECKE_VM_AUS_BER_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahren mit VM aus Streckenbereich 5 |
| STAT_STRECKE_VM_AUS_BER_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahren mit VM aus Streckenbereich 6 |
| STAT_ZEIT_DRIVE_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Gear Mode Drive |
| STAT_ZEIT_E_FAHR_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Gesamtzeit E-Fahren |
| STAT_ZEIT_E_FAHR_ANTR_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Gesamtzeit E-Fahren Antrieb |
| STAT_ZEIT_ECO_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Gear Mode ECO |
| STAT_ZEIT_LEERLAUF_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Gear Mode Neutral |
| STAT_ZEIT_REVERSE_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Gear Mode Reverse |
| STAT_ZEIT_SPORT_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Gear Mode Sport |
| STAT_STRCK_GESAMT_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Gesamtkilometer |
| STAT_ZEIT_E_FAHR_GESCHW_BER_01_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 1 |
| STAT_ZEIT_E_FAHR_GESCHW_BER_02_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 2 |
| STAT_ZEIT_E_FAHR_GESCHW_BER_03_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 3 |
| STAT_ZEIT_E_FAHR_GESCHW_BER_04_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 4 |
| STAT_ZEIT_E_FAHR_GESCHW_BER_05_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 5 |
| STAT_ZEIT_E_FAHR_GESCHW_BER_06_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 6 |
| STAT_ZEIT_E_FAHR_GESCHW_BER_07_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Geschwindigkeitsbereich 7 |

### RES_0XDE29

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NOTENTL_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Notentladungen |

### RES_0XDE2A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FELDDATEN_1_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 1 |
| STAT_FELDDATEN_2_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 2 |
| STAT_FELDDATEN_3_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 3 |
| STAT_FELDDATEN_4_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 4 |
| STAT_FELDDATEN_5_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 5 |
| STAT_FELDDATEN_6_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 6 |
| STAT_FELDDATEN_7_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 7 |
| STAT_FELDDATEN_8_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 8 |
| STAT_FELDDATEN_9_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 9 |
| STAT_FELDDATEN_10_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 10 |
| STAT_FELDDATEN_11_DATA | DATA | high | data[92] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 11 |

### RES_0XDE2C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSASTART_GESCHW_BER_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA-Start Geschwindigkeitsbereich 1 |
| STAT_MSASTART_GESCHW_BER_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA-Start Geschwindigkeitsbereich 2 |
| STAT_MSASTART_GESCHW_BER_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA-Start Geschwindigkeitsbereich 3 |
| STAT_MSASTART_GESCHW_BER_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA-Start Geschwindigkeitsbereich 4 |
| STAT_MSASTART_GESCHW_BER_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA-Start Geschwindigkeitsbereich 5 |
| STAT_MSASTART_GESCHW_BER_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl MSA-Start Geschwindigkeitsbereich 6 |
| STAT_ENGY_SCHUBREKU_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Schubrekuperation |
| STAT_ENGY_BREMSREKU_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Bremsrekuperation |
| STAT_ENGY_EFAHREN_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil e-Fahren |
| STAT_ENGY_SCHUBREKU_VM_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Schubreku im VM-Betrieb |
| STAT_ENGY_BOOST_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Boost |
| STAT_ENGY_OVERBOOST_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Overboost |
| STAT_ENGY_LADEN_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Laden |
| STAT_ENGY_ASSIST_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Assist |
| STAT_ENGY_ERRUCTL_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil ErrUCTL |
| STAT_ENGY_NEUTRAL_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieanteil Neutral |
| STAT_ENGY_GESAMT_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtenergie |
| STAT_ZEIT_SCHUBREKU_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Schubrekuperation |
| STAT_ZEIT_BREMSREKU_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Bremsrekuperation |
| STAT_ZEIT_EFAHREN_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil e-Fahren |
| STAT_ZEIT_SCHUBREKU_VM_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Schubreku VM-Betrieb |
| STAT_ZEIT_BOOST_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Boost |
| STAT_ZEIT_OVERBOOST_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Overboost |
| STAT_ZEIT_LADEN_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Laden |
| STAT_ZEIT_ASSIST_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Assist |
| STAT_ZEIT_ERRUCTL_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil ErrUCTL |
| STAT_ZEIT_NEUTRAL_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteil Neutral |
| STAT_ZEIT_GESAMT_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Gesamtzeit Betriebsarten |
| STAT_STRCK_GEFVORB_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Vorausschau Vorbereitung Gefälle |
| STAT_STRCK_LFZVORB_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Vorausschau Vorbereitung Langsamfahrzone |
| STAT_STRCK_LFZ_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Vorausschau Langsamfahrzone |
| STAT_STRCK_ZZ_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Vorausschau Zielzone |
| STAT_STRCK_ZZVORB_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Vorausschau Vorbereitung Zielzone |
| STAT_STRCK_GEF_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Vorausschau Gefaelle |
| STAT_ENGY_EKK_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energie elektrischer Klimakompressor |
| STAT_ENGY_BN_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energie Bordnetz |
| STAT_STRCK_GESCHW_BER_01_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 1 |
| STAT_STRCK_GESCHW_BER_02_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 2 |
| STAT_STRCK_GESCHW_BER_03_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 3 |
| STAT_STRCK_GESCHW_BER_04_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 4 |
| STAT_STRCK_GESCHW_BER_05_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 5 |
| STAT_STRCK_GESCHW_BER_06_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 6 |
| STAT_STRCK_GESCHW_BER_07_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 7 |
| STAT_STRCK_GESCHW_BER_08_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke Geschwindigkeitsbereich 8 |
| STAT_ZEIT_GESCHW_BER_01_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 1 |
| STAT_ZEIT_GESCHW_BER_02_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 2 |
| STAT_ZEIT_GESCHW_BER_03_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 3 |
| STAT_ZEIT_GESCHW_BER_04_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 4 |
| STAT_ZEIT_GESCHW_BER_05_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 5 |
| STAT_ZEIT_GESCHW_BER_06_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 6 |
| STAT_ZEIT_GESCHW_BER_07_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 7 |
| STAT_ZEIT_GESCHW_BER_08_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Geschwindigkeitsbereich 8 |
| STAT_ZEIT_ZUSTART_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit Zustart |
| STAT_ENGY_ZUSTART_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energie Zustart |
| STAT_ZEIT_EFAHR_STAND_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit E-Fahren Stand |
| STAT_ENGY_EFAHR_STAND_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energie E-Fahren Stand |

### RES_0XDE2E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |
| STAT_SACHNUMMER_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Sachnummer des Steuergeräts |
| STAT_RESERVE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Reserve (keine Änderung des Werts) |
| STAT_AENDERUNGSINDEX_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Änderungsindex des Steuergeräts |

### RES_0XDECF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RECORD_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | IUMPR Aufnahmezähler: Nummer der konfigurierten IUMPR Aufnahmen |
| STAT_KILOMETERSTAND_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand: Auflösung 10km |
| STAT_KLEMMENWECHSEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler von Klemmenwechsel |
| STAT_ALLGEMEINER_NENNER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Allgemeiner Nenner |
| STAT_POSITION_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 1 (65535 = nicht belegt) |
| STAT_DTC_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 1 (65535 = nicht belegt) |
| STAT_ZAEHLER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 1 (65535 = nicht belegt) |
| STAT_NENNER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 1 (65535 = nicht belegt) |
| STAT_POSITION_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 2 (65535 = nicht belegt) |
| STAT_DTC_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 2 (65535 = nicht belegt) |
| STAT_ZAEHLER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 2 (65535 = nicht belegt) |
| STAT_NENNER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 2 (65535 = nicht belegt) |
| STAT_POSITION_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 3 (65535 = nicht belegt) |
| STAT_DTC_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 3 (65535 = nicht belegt) |
| STAT_ZAEHLER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 3 (65535 = nicht belegt) |
| STAT_NENNER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 3 (65535 = nicht belegt) |
| STAT_POSITION_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 4 (65535 = nicht belegt) |
| STAT_DTC_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 4 (65535 = nicht belegt) |
| STAT_ZAEHLER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 4 (65535 = nicht belegt) |
| STAT_NENNER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 4 (65535 = nicht belegt) |
| STAT_POSITION_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 5 (65535 = nicht belegt) |
| STAT_DTC_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 5 (65535 = nicht belegt) |
| STAT_ZAEHLER_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 5 (65535 = nicht belegt) |
| STAT_NENNER_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 5 (65535 = nicht belegt) |
| STAT_POSITION_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 6 (65535 = nicht belegt) |
| STAT_DTC_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 6 (65535 = nicht belegt) |
| STAT_ZAEHLER_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 6 (65535 = nicht belegt) |
| STAT_NENNER_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 6 (65535 = nicht belegt) |
| STAT_POSITION_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 7 (65535 = nicht belegt) |
| STAT_DTC_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 7 (65535 = nicht belegt) |
| STAT_ZAEHLER_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 7 (65535 = nicht belegt) |
| STAT_NENNER_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 7 (65535 = nicht belegt) |
| STAT_POSITION_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 8 (65535 = nicht belegt) |
| STAT_DTC_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 8 (65535 = nicht belegt) |
| STAT_ZAEHLER_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 8 (65535 = nicht belegt) |
| STAT_NENNER_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 8 (65535 = nicht belegt) |
| STAT_POSITION_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 9 (65535 = nicht belegt) |
| STAT_DTC_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 9 (65535 = nicht belegt) |
| STAT_ZAEHLER_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 9 (65535 = nicht belegt) |
| STAT_NENNER_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 9 (65535 = nicht belegt) |
| STAT_POSITION_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 10 (65535 = nicht belegt) |
| STAT_DTC_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 10 (65535 = nicht belegt) |
| STAT_ZAEHLER_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 10 (65535 = nicht belegt) |
| STAT_NENNER_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 10 (65535 = nicht belegt) |
| STAT_POSITION_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 11 (65535 = nicht belegt) |
| STAT_DTC_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 1 (65535 = nicht belegt) |
| STAT_ZAEHLER_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 11 (65535 = nicht belegt) |
| STAT_NENNER_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 11 (65535 = nicht belegt) |
| STAT_POSITION_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 12 (65535 = nicht belegt) |
| STAT_DTC_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 12 (65535 = nicht belegt) |
| STAT_ZAEHLER_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 12 (65535 = nicht belegt) |
| STAT_NENNER_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 12 (65535 = nicht belegt) |
| STAT_POSITION_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 13 (65535 = nicht belegt) |
| STAT_DTC_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 13 (65535 = nicht belegt) |
| STAT_ZAEHLER_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 13 (65535 = nicht belegt) |
| STAT_NENNER_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 13 (65535 = nicht belegt) |
| STAT_POSITION_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 14 (65535 = nicht belegt) |
| STAT_DTC_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 14 (65535 = nicht belegt) |
| STAT_ZAEHLER_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 14 (65535 = nicht belegt) |
| STAT_NENNER_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 14 (65535 = nicht belegt) |
| STAT_POSITION_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 15 (65535 = nicht belegt) |
| STAT_DTC_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 15 (65535 = nicht belegt) |
| STAT_ZAEHLER_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 15 (65535 = nicht belegt) |
| STAT_NENNER_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 15 (65535 = nicht belegt) |
| STAT_POSITION_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 16 (65535 = nicht belegt) |
| STAT_DTC_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 16 (65535 = nicht belegt) |
| STAT_ZAEHLER_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 16 (65535 = nicht belegt) |
| STAT_NENNER_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 16 (65535 = nicht belegt) |
| STAT_POSITION_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 17 (65535 = nicht belegt) |
| STAT_DTC_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 17 (65535 = nicht belegt) |
| STAT_ZAEHLER_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 17 (65535 = nicht belegt) |
| STAT_NENNER_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 17 (65535 = nicht belegt) |
| STAT_POSITION_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 18 (65535 = nicht belegt) |
| STAT_DTC_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 18 (65535 = nicht belegt) |
| STAT_ZAEHLER_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 18 (65535 = nicht belegt) |
| STAT_NENNER_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 18 (65535 = nicht belegt) |
| STAT_POSITION_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 19 (65535 = nicht belegt) |
| STAT_DTC_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 19 (65535 = nicht belegt) |
| STAT_ZAEHLER_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 19 (65535 = nicht belegt) |
| STAT_NENNER_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 19 (65535 = nicht belegt) |
| STAT_POSITION_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position in aufgenommen IUMPR Check CA vom konfiguriertem Element 20 (65535 = nicht belegt) |
| STAT_DTC_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerspeicher vom konfiguriertem Element 20 (65535 = nicht belegt) |
| STAT_ZAEHLER_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler vom konfiguriertem Element 20 (65535 = nicht belegt) |
| STAT_NENNER_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner vom konfiguriertem Element 20 (65535 = nicht belegt) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_REASON | 0x1721 | - | Werte fuer den Reset Grund. Die Werte sind vom Zulieferer festzulegen. DefaultWert: 0xFF. Hinweis: Dieser DID ist optional, muss aber beim Reset dann zumindest mit 0xFF befuellt werden. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1721 |
| EME_ROTORLAGESENSOR_ANLERNEN | 0xADF0 | - | Anlernen Rotorlagesensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF0 |
| EME_DCDC_WANDLER | 0xADF1 | - | Steuern oder Auslesen des Status vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF1 | RES_0xADF1 |
| EME_HV_SYSTEM_ON_OFF | 0xADF2 | - | HV-System hoch-/runterfahren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF2 | RES_0xADF2 |
| EME_EWAP | 0xADF3 | - | Ansteuerung der LIN Wasserpumpe EME mit Vorgabe der Drehzahl und Ansteuerzeit | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF3 | RES_0xADF3 |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4 | RES_0xADF4 |
| EME_EEP_RECALL_DEFAULT | 0xADF5 | - | NV-Speicher des HYM in der EME zurücksetzen, Zurücksetzen stoppen oder Status der Löschvorgänge auslesen 0 - Löschen NV-RAM nicht angefordert; 1 - Löschen NV-RAM angefordert | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF5 |
| EME_IGBT_FREILAUF | 0xADF7 | - | Öffnen der IGBTS, um die E-Maschine AC-seitig hochohmig wegzuschalten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF7 |
| EME_TEMP_EMASCHINE | 0xDDF0 | - | Wert der aktuellen Temperatur der E-Maschine in Grad Celsius lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF0 |
| EME_SPANNUNG_DC_HV | 0xDDF1 | STAT_SPANNUNG_DC_HV_WERT | DC Spannung der E-Maschine nach Gleichrichtung durch die EME (HV-Batterieseitig nach intern) | V | - | high | int | - | 0.3125 | 10.0 | 0.0 | - | 22 | - | - |
| EME_SPANNUNG_DC_HV_DCDC | 0xDDF2 | STAT_SPANNUNG_DC_HV_DCDC_WERT | Spannung Hochvolt Bordnetz gemessen durch DcDc Wandler (in der EME) | V | - | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| EME_STROM_EMASCHINE_AC | 0xDDF3 | - | HV-Strom des DCDC Wandlers und dem gemitteltem Effektivstrom der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF3 |
| EME_STROM_EMASCHINE_DC | 0xDDF4 | STAT_EMK_STROM_DC_WERT | DC Strom (auf der HV Seite) verursacht durch die EMK | A | - | high | int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| EME_POSITIONSGEBER | 0xDDF5 | STAT_POSITIONSGEBER_WERT | Winkelstellung der E-Maschinen in Grad | ° | - | high | unsigned int | - | 5493.1641 | 1000000.0 | 0.0 | - | 22 | - | - |
| EME_DCDC_LV | 0xDDF6 | - | Spannung / Strom DCDC (12V Bordnetz) am B+ Bolzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF6 |
| EME_ELEKTRISCHE_MASCHINE | 0xDDF7 | - | Auslesen von Drehzahl und Drehmoment der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF7 |
| EME_DCDC_LADEMODUS | 0xDDF8 | - | Abfrage des DC/DC-Wandlers nach Betriebsmodus und Ladezustand der Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF8 |
| EME_EPSOFFSET | 0xDDF9 | STAT_EPSOFF_WERT | EPS Offset (-180,00° .. +180,00°) | ° | - | high | int | - | 5493.1641 | 1000000.0 | 0.0 | - | 22 | - | - |
| EME_INFO_EMK | 0xDDFC | STAT_INFO_EMK_WERT | Bitkodierte Deratinginformation  der E-Maschinenregelung | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_DME_LEERLAUFREGELUNG_AKTIVIEREN | 0xDDFD | - | Aktivierung / Deaktivierung der Leerlaufregelung auf der DME | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDFD | - |
| EME_ANTRIEBSART | 0xDDFE | - | aktuelle Hybrid-Betriebsart und Ansteuerung EME Betriebsart | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDDFE | RES_0xDDFE |
| EME_ELEKTRISCHE_MASCHINE_GENERATORBETRIEB | 0xDDFF | - | Einstellen generatorischer Betrieb der E-Maschine oder Regelung durch EME SW | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDFF | - |
| EME_HVPM_DCDC_ANSTEUERUNG | 0xDE00 | - | Rückgabewerte vom HVPM für DCDC Ansteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE00 |
| EME_HVPM_VERBRAUCHERREDUZIERUNG | 0xDE01 | - | Rückgabewerte für HVPM Verbraucherreduzierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE01 |
| EME_HVPM_HV_SYSTEM_ON_OFF | 0xDE02 | - | Hochvoltsystem An / Aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE02 |
| EME_HVPM_ENERGIEBORDNETZ | 0xDE03 | - | Rückgabewerte des HVPM über HV-Energie und Zellspannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE03 |
| EME_HVPM_ENERGIEBORDNETZ_2 | 0xDE04 | - | Anzahl der Herstellung von Fahrbereitschaft im SOC Bereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE04 |
| EME_HVPM_MSA | 0xDE05 | - | HVPM Motor Start-Stopp-Automatik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE05 |
| EME_HVPM_PKOR | 0xDE06 | - | HVPM Leistungskoordinator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE06 |
| EME_HVPM_INFOSPEICHER_MSA_LOESCHEN | 0xDE07 | - | Alle Infospeicher aus Diagnosejob STATUS_HVPM_MSA werden auf Null gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE07 | - |
| EME_HVPM_INFOSPEICHER_PKOR_LOESCHEN | 0xDE08 | - | Alle Infospeicher des Diagnosejobs STATUS_HVPM_EKMV werden auf Null gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE08 | - |
| EME_HVPM_INFOSPEICHER_STRZLR_LOESCHEN | 0xDE09 | - | Löschen des Infospeicher HSPM (STRZL) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE09 | - |
| EME_HVPM_INFOSPEICHER_SPMON_LOESCHEN | 0xDE0A | - | Löschen des Infospeichers HVPMP (SPMON) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE0A | - |
| EME_HV_ISOLATION | 0xDE0B | STAT_HV_ISOLATION_NR | externer Isolationsfehler SME | 0-n | - | high | unsigned char | TAB_STAT_HV_ISOLATION_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | - | high | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_LV_BAT | 0xDE0D | - | Status der LV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE0D |
| EME_ANSTEUERUNG_ELUP | 0xDE0E | STAT_ANST_ELUP_ON | Aktueller Schaltzustand ELUP (0 - Aus; 1 - Ein) | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_KL30C_SPANNUNG | 0xDE0F | STAT_KL30C_STATUS_EIN | 0=Crash nicht erkannt, 1=Crash erkannt | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_HVB_TAUSCH_LESEN | 0xDE10 | - | Kilometerstand (km) des letzten Batterietausches | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE10 |
| EME_PUMPEN | 0xDE12 | STAT_EME_PUMPE_DREHZAHL_WERT | Ist-Drehzahl der Kühlmittelpumpe | 1/min | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_BETRIEBSART_HYBRID | 0xDE13 | STAT_BA_HYBRID_WERT | Betriebsart Hybrid (Ba_hybrid) wird ausgegeben | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ANF_NL | 0xDE14 | - | Historienspeicher von St_anf_nl_eme auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE14 |
| EME_NLM_DEAK | 0xDE15 | - | Historienspeicher von St_nlm_deakt_msa auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE15 |
| EME_NLM_INFO_ERS_LOESCHEN | 0xDE17 | - | Historienspeicher NLM Infos Ersatzreaktionen Null setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE17 | - |
| EME_HVPM_SPANNUNGSFREIHEIT | 0xDE18 | - | Infospeicher zur Spannungsfreiheit des Hochvoltsystems (durch HVPM überwacht) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE18 |
| EME_ELUP | 0xDE19 | - | Anzahl der Bremsbetätigungen, Laufzeit und Anläufe der ELUP | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE19 |
| EME_12VBATT_ENTL_STANDKL | 0xDE1A | STAT_NV_ENTL_12VBATT_STD_WERT | Ladungsmenge | Ah | - | high | unsigned int | - | 0.2 | 1.0 | 0.0 | - | 22 | - | - |
| EME_HVPM_MSA_2 | 0xDE1B | - | HVPM MSA2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE1B |
| EME_HVPM_DCDC_ALS | 0xDE1C | - | HVPM DCDC ALS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE1C |
| EME_SZE_ZSEBATTERIE | 0xDE1E | - | Ergebnisse der Speicherzustandserkennung der ZSE-Batterie auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE1E |
| EME_TAUSCH_ZSEBATT_REGISTRIEREN | 0xDE1F | - | Tausch der ZSE-Batterie registrieren: 0 = keine Anforderung; 1 = ZSE-Batterie Tausch registieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE1F | - |
| EME_ZSEBATT_SZEWERTE_LOESCHEN | 0xDE20 | - | Alle Histogramme, Zähler, etc. der ZSE-Batterie zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE20 | - |
| EME_TEMP_DCDC | 0xDE21 | STAT_TEMP_SG_WERT_DCDC_TRAFO_WERT | Aktueller Temperaturwert des Trafos des DcDc Wandlers | °C | - | high | int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| EME_KAELTEMITTEL_ABSPERRVENTIL_ON_OFF | 0xDE22 | STAT_AKAV_ON | Status des Kältemittelabsperrventils; 0 = Ventil geschlossen; 1 = Ventil offen | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_KAELTEMITTEL_ABSPERRVENTIL | 0xDE23 | - | Ansteuerung des Kältemittelabsperrventils | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE23 | - |
| EME_SCHALTSPIELE_ZSE_RELAIS | 0xDE24 | STAT_SCHALTSPIELANZAHL_ZSE_RELAIS_WERT | Anzahl der Relaisschaltspiele des ZSE-Zweiges | - | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ZSE_RELAIS | 0xDE25 | - | Activate the ZSE relay manually | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDE25 | RES_0xDE25 |
| EME_HVSTART_FEHLER | 0xDE26 | - | Angabe des Fehlers beim Hochfahren des HV-Systems | bit | - | - | BITFIELD | RES_0xDE26 | - | - | - | - | 22 | - | - |
| EME_EM_TEMP_HIST | 0xDE27 | - | Auslesen Temperaturhistogramm E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE27 |
| EME_EBS_1 | 0xDE28 | - | Teleservice Daten auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE28 |
| EME_NOTENTL_ZAEHLER | 0xDE29 | - | Notentladungszähler: Status des Zählers / Rücksetzen des Zähler (0 = kein Rücksetzen; 1 = Rücksetzen) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE29 | RES_0xDE29 |
| EME_FELDDATEN_LESEN | 0xDE2A | - | Felddaten der EME auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2A |
| EME_RESET_EM_TEMPHIST | 0xDE2B | - | Zurücksetzen des Temperaturhistogramms der EMM | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE2B | - |
| EME_EBS_2 | 0xDE2C | - | Auslesen Teleservice Daten 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2C |
| EME_SERIENNUMMERN_BOSCH | 0xDE2E | - | Serien-, Sach- und Änderungsnummer des Steuergeräts (Bosch) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2E |
| EME_SOH_LESEN | 0xDE2F | STAT_SOH_WERT | SOH der EME über Laufzeit | % | - | high | int | - | 39.0625 | 10000.0 | 0.0 | - | 22 | - | - |
| KAELTEMITTEL_ABSPERRVENTIL_ON_OFF_PWM | 0xDEC0 | STAT_AKAV_ON_WERT | Status des Kältemittelabsperrventils; 0% = Ventil geschlossen; 100% = Ventil offen | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_ELUP | 0xDEC2 | STAT_U_ELUP_WERT | Spannungspegel am ELUP - Ausgang der EME | V | - | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| STROM_ELUP | 0xDEC3 | STAT_I_ELUP_WERT | Spannungspegel am ELUP - Ausgang der EME | A | - | high | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| EME_IUMPR | 0xDECF | - | Auslesen Informationen zu den im Steuergerät abgelegten IUMPR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDECF |
| EME_NLK_ER_ANF | 0x63A4 | - | EME_NLK_ER_ANF | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x63A4 |
| EME_HYM_ID | 0x63FF | STAT_HYM_ID_TEXT | Version der BMW Library auslesen | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_EM_ANSTEUERUNG | 0xF50C | - | EME_EM_ANSTEUERUNG | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF50C | - |

### TAB_EME_ANF_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0x00 |  keine Leistungsanforderung |
| 0x01 | Anforderung motorische Leistung im motorischen Betrieb |
| 0x02 | Anforderung motorische Leistung im generatorischen Betrieb |

### TAB_EME_ANF_ANTRIEB_FUNK

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Leistungsanforderung |
| 0x01 | Anforderung Leistung wegen Motorstart |
| 0x02 | Anforderung Leistung wegen Antriebsboost |
| 0x03 | Anforderung Leistung wegen Rennstart |
| 0x04 | Anforderung Leistung wegen Ladung HVB |

### TAB_EME_EEP_RECALL_DEFAULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet! |
| 0x05 | Funktion läuft. |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag / Readiness gesetzt) und kein Fehler erkannt. |

### TAB_EME_FREILAUF_IGBTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet! |
| 0x01 | Start-/Ansteuerbedingung nicht erfüllt! |
| 0x03 | Funktion wartet auf Freigabe! |
| 0x05 | Funktion läuft! |
| 0x06 | Funktion beendet. |
| 0x07 | Funktion abgebrochen! |
| 0xFF | Ungültiger Wert |

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
| 0x02 | Anforderung Nullstrom mit EV: Entladeschutzfunktion HV-Batterie |
| 0x03 | Anforderung Nullstrom mit EV: HV-Power-Down |
| 0x04 | Anforderung Nullstrom mit EV: Batterieloser Betrieb |

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

### TAB_EME_STAT_TE_ZSE

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | Wechsel/Vorconditionierung |

### TAB_EM_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Momentenvorgabe |
| 0x01 | Drehzahlvorgabe |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Job inaktiv |
| 0x01 | Job aktiv & Ventil öffnen |
| 0x02 | Job aktiv & Ventil schliessen |

### TAB_STAT_AKS_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein AKS |
| 0x01 | AKS |
| 0x02 | Fehler |

### TAB_STAT_DCDC_LADEMODUS_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Tiefsetzbetrieb |
| 0x02 | Hochsetzbetrieb |
| 0x03 | Signal nicht verfügbar |

### TAB_STAT_EME_ANTRIEBSART_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | MSA |
| 0x01 | Boost |
| 0x02 | Boost |
| 0x03 | Rekuperation |
| 0x04 | HV Batterie Entladen |
| 0x05 | HV Batterie Laden |

### TAB_STAT_HVIL_GESAMT_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Interlock nicht unterbrochen |
| 0x01 | Interlock unterbrochen |
| 0xFF | nicht definiert |

### TAB_STAT_HV_ISOLATION_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht möglich |
| 0x01 | ok |
| 0x02 | nicht ok |
| 0xFF | nicht definiert |

### TAB_STAT_HV_SYSTEM_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Anforderung |
| 0x01 | Anforderung HV ein |
| 0x02 | Anforderung HV aus |

### TAB_STAT_KL50L_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |

### TAB_STAT_ROTORLAGESENSOR_STATUS_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Die Routine Rotorlagesensor Anlernen ist nicht angefordert. |
| 0x01 | Die Routine Rotorlagesensor Anlernen ist angefordert und aktiv, aber es findet gerade kein aktiver Abgleich statt. |
| 0x02 | Die Routine Rotorlagesensor Anlernen ist angefordert und aktiv. |
| 0x03 | Die Routine Rotorlagesensor Anlernen wurde fehlerhaft beendet. |
| 0x04 | Die Routine Rotorlagesensor Anlernen wurde erfolgreich beendet. |

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

### TAB_ST_B_DIAG_DCDC

| WERT | TEXT |
| --- | --- |
| 0x02 | I_diag_dcdc_lv_out verwenden |
| 0x04 | I_diag_dcdc_hv_out verwenden |
| 0x08 | U_diag_dcdc_lv_out verwenden |
| 0x10 | U_diag_dcdc_hv_out verwenden |

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

### TAB_ST_DME_LLR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kontrolle an EME-SW |
| 0x01 | LLR auf DME aktivieren |

### TAB_ST_EME_ANTRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kontrolle an EME-SW |
| 0x01 | Keine EM-Unterstuetzung |

### TAB_ST_EM_GENERATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kontrolle an EME-SW |
| 0x01 | EM Generatorbetrieb |

### TAB_ST_ZSE_RELAIS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Anforderung |
| 0x01 | Relais öffnen |
| 0x02 | Relais schliessen |

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
| 0xXY | unbekannt |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM-Stand   (3 Bytes 1Bit=1km) | km | - | 0xFFFFFFFF | - | - | - | - |
| 0x1701 | Systemzeit (1Bit=1sec) | sec | - | 0xFFFFFFFF | - | - | - | - |
| 0x1702 | SAE-Code   (3 Bytes) | - | - | unsigned int | - | - | - | - |
| 0x1731 | Fehlerklasse_DTC | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xF402 | PID2_OBD_DTC | - | - | unsigned int | - | - | - | - |
| 0x4001 | Aktuell aufgenommene Leistung des Klimakompressors | kW | - | unsigned char | - | 0.040000000 | - | 0.000000000 |
| 0x4011 | Signal um aktive Entladung des HV-Zwischenkreises durch PTC zu triggern |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4000 | Klemme 15 Status |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4013 | Soll-Betriebsart DCDC-Wandler |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4014 | Ist Betriebsart des DCDC Wandlers | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4232 | Betriebsart der E-Maschine |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4015 | Aktuelle Betriebsart E-Maschine. | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4017 | Strom, der der 90Ah-Batterie entnommen oder mit dem die Batterie geladen wird | A | - | signed int | - | 0.080000000 | - | 0.000000000 |
| 0x4018 | Strom der ZSE-Batterie (40Ah) | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4019 | DCDC Stromgrenze HV-Seite, Absolutwert gilt für beide Richtungen | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4002 | Strom  HV-Seite DCDC Ist | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4003 | Strom  LV-Seite DCDC Ist | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4203 | Ist-Moment der EM1 | Nm | - | signed int | - | 0.037353516 | - | 0.000000000 |
| 0x4004 | Dynamisches motorisches Moment der EM1 unter Berücksichtigung der HV-Batterie- und EM-Grenzen | Nm | - | signed int | - | 0.037353516 | - | 0.000000000 |
| 0x4216 | Istdrehzahl EM1 | rpm | - | signed int | - | 0.500000000 | - | 0.000000000 |
| 0x4218 | Kurbelwellendrehzahl (DME) | 1/min | - | unsigned int | - | 0.250000000 | - | 0.000000000 |
| 0x4021 | Maximale freigegebene HV-Leistung des EKK | kW | - | unsigned char | - | 0.040000000 | - | 0.000000000 |
| 0x4022 | Verfügbare elektrische Abgabeleistung des HV-Speichers für eine Sekunde | W | - | unsigned int | - | 2.000000000 | - | -32767.000000000 |
| 0x4023 | Prio von Wunschentlastungsspannung HVPM |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4005 | Minimal benötigte Leistung des Klimakompressors | kW | - | unsigned char | - | 0.040000000 | - | 0.000000000 |
| 0x4024 | Aktueller Ladezustand des HV Speichers bezogen auf die Ist-Kapazität | % | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4025 | Minimal erlaubte SoC-Grenze des HV-Speichers | % | - | unsigned char | - | 0.500000000 | - | 0.000000000 |
| 0x4006 | Status Getriebe Phasenerkennung | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4026 | Status DC/DC-Wandler für DME |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4007 | Fehlerstatus EGS (Trennkupplung, K0, EM, Getriebe) | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4027 | Variable St_hvstart_fehler (Bitcodiert) | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4028 | Variable St_hvstart_komm (Bitcodiert) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4029 | Variable St_hybsys (Bitcodiert) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4030 | Variable St_i0anf_hvb (Bitcodiert) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4031 | Variable St_sig_hvpm_nok (Bitcodiert) | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4032 | Schaltzustand des von der EME20 angesteuerten ZSE-Relais |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4033 | Temperatur der HV-Batterie, als Mittelwert aller aktuell berechneter Zellkerne | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4034 | Temperatur der ZSE-Batterie (40Ah) | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4035 | Temperatur des Getriebeöls | °C | - | signed int | - | 1.000000000 | - | 0.000000000 |
| 0x4036 | Temperatur des Motoröls von der DME | °C | - | signed int | - | 1.000000000 | - | 0.000000000 |
| 0x4037 | Spannung 12V Batterie (herkömmliches LV-BN) | V | - | unsigned int | - | 0.001000000 | - | 0.000000000 |
| 0x4009 | Spannung der ZSE-Batterie (40Ah) | V | - | unsigned int | - | 0.001000000 | - | 0.000000000 |
| 0x4010 | LV-Bordnetzspannung (von der DME gemessen) | V | - | unsigned int | - | 0.001500000 | - | 0.000000000 |
| 0x4038 | Wunschentlastungsspannung HVPM | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4039 | DC Spannung der EMR (HV-Batterieseitig, nach intern) | V | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4040 | Sollspannung HV-Seite DCDC (Boost-Modus), Minimalspannung HV-Seite DCDC (Buck-Modus) | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4041 | Sollspannung LV-Seite DCDC (Buck-Modus), Minimalspannung LV-Seite DCDC (Boost-Modus) | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4042 | Istspannung HV-Seite | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4043 | Istspannung LV-Seite | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4044 | Sollspannung LV-Seite DCDC bestimmt durch AEP / Spannungskoordinator | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4045 | Fahrzeuggeschwindigkeit | km/h | - | unsigned int | - | 0.015625000 | - | 0.000000000 |
| 0x4046 | Prognostizierter Energieinhalt in Abhängigkeit des Ladezustands und des Bordnetzverbrauch | Wh | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4047 | Benötigte Energie für die Standkühlung | Wh | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4048 | Aufrufzähler der 10ms BMW-Run-Funktion |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4049 | Diagnose-Status DCDC wandler |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4050 | SOH der ZSE-Batterie Gesamt | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4051 | SOH der ZSE-Batterie T | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4052 | SOH der ZSE-Batterie U | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4053 | SOH der ZSE-Batterie UT | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4054 | SOH der ZSE-Batterie OCV | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4055 | SOH der ZSE-Batterie H2O | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4056 | SOH der ZSE-Batterie Zelldefekt | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4057 | SOH der ZSE-Batterie Tiefendtladung | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4058 | SOH der ZSE-Batterie Zustart | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4059 | Ladezustand der ZSE Batterie | % | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4060 | Maximal verfügbare generatorische Leistung der E-Maschine ohne Beruecksichtigung der HV-Batteriegrenzen | W | - | signed int | - | 2.000000000 | - | 0.000000000 |
| 0x4061 | Plausi_VHA_VFZG |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4062 | Summe aller Statusworte fuer bitmaskierte Fehler der UEWK zur Auswahl fuer Fehlerpfade |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4063 | Ba_mctl_ist mit Q-Signal verknuepft |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4064 | Fehlerbedingung Errormanager SiKo Ebene2 [0] | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4065 | Fehlerbedingung Errormanager SiKo Ebene2 [1] | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4066 | Aktueller Unterdruck am Drucksensor der ELUP  | hPa | - | signed int | - | 4.000000000 | - | 0.000000000 |
| 0x4067 | Versorgungsspannung der EME | mV | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4068 | EME-ELUP eingangsspannung (ELUP-Spezifischer Eingang der EME von der ELUP-Sicherung) | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4069 | ELUP-Spannung (Ausgang der EME zur ELUP) | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4070 | Adresse der fehlerverursachenden Variable, Ebene2 Doppelablage | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4071 | Adresse der fehlerverursachenden Variable, Ebene2 Layerkonsistenz | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4072 | Adresse der fehlerverursachenden Variable, Ebene2 Layerbereichsprüfung | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4073 | Soll-Betriebsart EM1 |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4074 | Fusi-Ebene2 Fehlerpfad der Resetanforderung |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4075 | Fusi-Ebene2 Fehlerreaktionen |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x5904 | LayerIN Signal: IBS Status- oder Fehlerbyte | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x5905 | LayerIN Signal: IBS Status- oder Fehlerbyte | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4076 | Anforderung ZK-Entladung über DCDC |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4077 | Anforderung Powerboost |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4078 | Lv-Stromgrenze | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4079 | DCDC Powerstage Temperatur | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4080 | DCDC Steuerleiterkartentemperatur | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4081 | DCDC Zwischenkreisstrom | A | - | signed int | - | 0.001953125 | - | 0.000000000 |
| 0x4082 | DCDC Zwischenkreisspannung | V | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4083 | Aktueller Auslastungsgrad des DCDC | % | - | unsigned int | - | 0.062500000 | - | 0.000000000 |
| 0x4084 | Vorgabe Motorstartvariante | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4085 | Reset Information | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4086 | Reset Information |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4087 | Reset Information |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4088 | Reset Information |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4089 | Reset Information | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4090 | Gibt den Zustand an, in dem der Fehler erkannt wurde |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4091 | Gibt den Zustand an, in dem der Fehler erkannt wurde |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4092 | Eingänge Fehlerlogik |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4093 | Fehlerzähler externer Momentenvergleich |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4094 | Status Endstufe |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4095 | Fehlerursache |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4096 | Status RDYUVW-Signal |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4097 | Entprellzähler RDYUVW-Signal |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4098 | Entprellzähler Diagnoseinformation |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4099 | Aktueller Status der Antriebsregelung | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4100 | Raster-Zähler für 10ms Drive-Task |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4101 | Raster-Zähler für 10ms PostDrive-Task |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4102 | Raster-Zähler für 10ms PreDrive-Task | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4103 | Bitstatus der PLD-Fehlersignale | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4104 | Bitstatus der HW-Fehlersignale (16Bit) | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4105 | CAN Kl15 |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4106 | HW Kl15 | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4107 | Maximale Systemlast während des aktuellen Fahrzyklus | % | - | unsigned int | - | 0.001525879 | - | 0.000000000 |
| 0x4108 | Maximale Auslastung der Context Save Area (CSA) | % | - | unsigned int | - | 0.001525879 | - | 0.000000000 |
| 0x4109 | Aktuell gemessene HV-Batterie-Spannung. | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4110 | Istwert Phasenstrom L1 | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4111 | Istwert Phasenstrom L2 | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4112 | Istwert Phasenstrom L3 | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4113 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4114 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4115 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4116 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4117 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4118 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4119 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4120 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4121 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4122 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4123 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4124 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4125 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4126 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4127 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4128 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4129 | Abstellzeit SG auf Basis Systemzeit | s | - | unsigned long | - | 1.000000000 | - | 0.000000000 |
| 0x4130 | Zähler für SG Resets seit Aufwachen | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4131 | Betriebszähler SG seit aufwachen | s | - | unsigned long | - | 1.000000000 | - | 0.000000000 |
| 0x4132 | Gefilterter Phasenstrom | V | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4133 | Gefilterte DBC-Temperatur der Phase U | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4134 | Gefilterte DBC-Temperatur der Phase V | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4135 | Gefilterte DBC-Temperatur der Phase W | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4136 | Geschätzte Kühlwassertemperatur | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4137 | Geschätzte Diodentemperatur im Leistungsmodul | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4138 | Geschätzte IGBT-Temperatur im Leistungsmodul | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4139 | NM-Status A-CAN | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4140 | NM-Status FA-CAN | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4141 | NM-Status FlexRay | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4142 | Istdrehzahl EWP | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4143 | Signal dient zum Ein-/Ausschalten der Elektrischen Luft Unterdruck Pumpe (ELUP) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4144 | Elup-Strom am Shunt gemessen. | A | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4145 | Anzahl erkannter IGBT-Kurzschlussereignisse im Zeitfenster | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4146 | Aktueller Wert des Zeitfensters für Heilungsversuche bei erkanntem IGBT-Kurzschlussereignis | s | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4147 | Zeit zwischen zwei Heilungsversuchen bei erkanntem IGBT-Kurzschlussereignis | s | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4148 | LayerIN Signal: Temperatur EM1 | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4149 | LayerIN Signal: interne Temperatur des DC/DC-Wandlers | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4150 | LayerIN Signal: Temperatur LE-Steuergeraet (nach intern); Maximalwert aller verfuegbarer Messgroessen (--> worst case) | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM-Stand   (3 Bytes 1Bit=1km) | km | - | 0xFFFFFFFF | - | - | - | - |
| 0x1701 | Systemzeit (1Bit=1sec) | sec | - | 0xFFFFFFFF | - | - | - | - |
| 0x1702 | SAE-Code   (3 Bytes) | - | - | unsigned int | - | - | - | - |
| 0x1731 | Fehlerklasse_DTC | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xF402 | PID2_OBD_DTC | - | - | unsigned int | - | - | - | - |
| 0x4001 | Aktuell aufgenommene Leistung des Klimakompressors | kW | - | unsigned char | - | 0.040000000 | - | 0.000000000 |
| 0x4011 | Signal um aktive Entladung des HV-Zwischenkreises durch PTC zu triggern |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4000 | Klemme 15 Status |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4013 | Soll-Betriebsart DCDC-Wandler |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4014 | Ist Betriebsart des DCDC Wandlers | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4232 | Betriebsart der E-Maschine |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4015 | Aktuelle Betriebsart E-Maschine. | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4017 | Strom, der der 90Ah-Batterie entnommen oder mit dem die Batterie geladen wird | A | - | signed int | - | 0.080000000 | - | 0.000000000 |
| 0x4018 | Strom der ZSE-Batterie (40Ah) | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4019 | DCDC Stromgrenze HV-Seite, Absolutwert gilt für beide Richtungen | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4002 | Strom  HV-Seite DCDC Ist | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4003 | Strom  LV-Seite DCDC Ist | A | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4203 | Ist-Moment der EM1 | Nm | - | signed int | - | 0.037353516 | - | 0.000000000 |
| 0x4004 | Dynamisches motorisches Moment der EM1 unter Berücksichtigung der HV-Batterie- und EM-Grenzen | Nm | - | signed int | - | 0.037353516 | - | 0.000000000 |
| 0x4216 | Istdrehzahl EM1 | rpm | - | signed int | - | 0.500000000 | - | 0.000000000 |
| 0x4218 | Kurbelwellendrehzahl (DME) | 1/min | - | unsigned int | - | 0.250000000 | - | 0.000000000 |
| 0x4021 | Maximale freigegebene HV-Leistung des EKK | kW | - | unsigned char | - | 0.040000000 | - | 0.000000000 |
| 0x4022 | Verfügbare elektrische Abgabeleistung des HV-Speichers für eine Sekunde | W | - | unsigned int | - | 2.000000000 | - | -32767.000000000 |
| 0x4023 | Prio von Wunschentlastungsspannung HVPM |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4005 | Minimal benötigte Leistung des Klimakompressors | kW | - | unsigned char | - | 0.040000000 | - | 0.000000000 |
| 0x4024 | Aktueller Ladezustand des HV Speichers bezogen auf die Ist-Kapazität | % | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4025 | Minimal erlaubte SoC-Grenze des HV-Speichers | % | - | unsigned char | - | 0.500000000 | - | 0.000000000 |
| 0x4006 | Status Getriebe Phasenerkennung | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4026 | Status DC/DC-Wandler für DME |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4007 | Fehlerstatus EGS (Trennkupplung, K0, EM, Getriebe) | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4027 | Variable St_hvstart_fehler (Bitcodiert) | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4028 | Variable St_hvstart_komm (Bitcodiert) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4029 | Variable St_hybsys (Bitcodiert) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4030 | Variable St_i0anf_hvb (Bitcodiert) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4031 | Variable St_sig_hvpm_nok (Bitcodiert) | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4032 | Schaltzustand des von der EME20 angesteuerten ZSE-Relais |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4033 | Temperatur der HV-Batterie, als Mittelwert aller aktuell berechneter Zellkerne | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4034 | Temperatur der ZSE-Batterie (40Ah) | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4035 | Temperatur des Getriebeöls | °C | - | signed int | - | 1.000000000 | - | 0.000000000 |
| 0x4036 | Temperatur des Motoröls von der DME | °C | - | signed int | - | 1.000000000 | - | 0.000000000 |
| 0x4037 | Spannung 12V Batterie (herkömmliches LV-BN) | V | - | unsigned int | - | 0.001000000 | - | 0.000000000 |
| 0x4009 | Spannung der ZSE-Batterie (40Ah) | V | - | unsigned int | - | 0.001000000 | - | 0.000000000 |
| 0x4010 | LV-Bordnetzspannung (von der DME gemessen) | V | - | unsigned int | - | 0.001500000 | - | 0.000000000 |
| 0x4038 | Wunschentlastungsspannung HVPM | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4039 | DC Spannung der EMR (HV-Batterieseitig, nach intern) | V | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4040 | Sollspannung HV-Seite DCDC (Boost-Modus), Minimalspannung HV-Seite DCDC (Buck-Modus) | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4041 | Sollspannung LV-Seite DCDC (Buck-Modus), Minimalspannung LV-Seite DCDC (Boost-Modus) | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4042 | Istspannung HV-Seite | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4043 | Istspannung LV-Seite | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4044 | Sollspannung LV-Seite DCDC bestimmt durch AEP / Spannungskoordinator | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4045 | Fahrzeuggeschwindigkeit | km/h | - | unsigned int | - | 0.015625000 | - | 0.000000000 |
| 0x4046 | Prognostizierter Energieinhalt in Abhängigkeit des Ladezustands und des Bordnetzverbrauch | Wh | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4047 | Benötigte Energie für die Standkühlung | Wh | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4048 | Aufrufzähler der 10ms BMW-Run-Funktion |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4049 | Diagnose-Status DCDC wandler |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4050 | SOH der ZSE-Batterie Gesamt | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4051 | SOH der ZSE-Batterie T | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4052 | SOH der ZSE-Batterie U | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4053 | SOH der ZSE-Batterie UT | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4054 | SOH der ZSE-Batterie OCV | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4055 | SOH der ZSE-Batterie H2O | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4056 | SOH der ZSE-Batterie Zelldefekt | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4057 | SOH der ZSE-Batterie Tiefendtladung | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4058 | SOH der ZSE-Batterie Zustart | % | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4059 | Ladezustand der ZSE Batterie | % | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4060 | Maximal verfügbare generatorische Leistung der E-Maschine ohne Beruecksichtigung der HV-Batteriegrenzen | W | - | signed int | - | 2.000000000 | - | 0.000000000 |
| 0x4061 | Plausi_VHA_VFZG |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4062 | Summe aller Statusworte fuer bitmaskierte Fehler der UEWK zur Auswahl fuer Fehlerpfade |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4063 | Ba_mctl_ist mit Q-Signal verknuepft |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4064 | Fehlerbedingung Errormanager SiKo Ebene2 [0] | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4065 | Fehlerbedingung Errormanager SiKo Ebene2 [1] | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4066 | Aktueller Unterdruck am Drucksensor der ELUP  | hPa | - | signed int | - | 4.000000000 | - | 0.000000000 |
| 0x4067 | Versorgungsspannung der EME | mV | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4068 | EME-ELUP eingangsspannung (ELUP-Spezifischer Eingang der EME von der ELUP-Sicherung) | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4069 | ELUP-Spannung (Ausgang der EME zur ELUP) | V | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4070 | Adresse der fehlerverursachenden Variable, Ebene2 Doppelablage | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4071 | Adresse der fehlerverursachenden Variable, Ebene2 Layerkonsistenz | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4072 | Adresse der fehlerverursachenden Variable, Ebene2 Layerbereichsprüfung | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4073 | Soll-Betriebsart EM1 |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4074 | Fusi-Ebene2 Fehlerpfad der Resetanforderung |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4075 | Fusi-Ebene2 Fehlerreaktionen |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x5904 | LayerIN Signal: IBS Status- oder Fehlerbyte | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x5905 | LayerIN Signal: IBS Status- oder Fehlerbyte | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4076 | Anforderung ZK-Entladung über DCDC |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4077 | Anforderung Powerboost |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4078 | Lv-Stromgrenze | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4079 | DCDC Powerstage Temperatur | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4080 | DCDC Steuerleiterkartentemperatur | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4081 | DCDC Zwischenkreisstrom | A | - | signed int | - | 0.001953125 | - | 0.000000000 |
| 0x4082 | DCDC Zwischenkreisspannung | V | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4083 | Aktueller Auslastungsgrad des DCDC | % | - | unsigned int | - | 0.062500000 | - | 0.000000000 |
| 0x4084 | Vorgabe Motorstartvariante | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4085 | Reset Information | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4086 | Reset Information |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4087 | Reset Information |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4088 | Reset Information |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4089 | Reset Information | Hex | - | signed long | - | 1.000000000 | - | 0.000000000 |
| 0x4090 | Gibt den Zustand an, in dem der Fehler erkannt wurde |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4091 | Gibt den Zustand an, in dem der Fehler erkannt wurde |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4092 | Eingänge Fehlerlogik |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4093 | Fehlerzähler externer Momentenvergleich |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4094 | Status Endstufe |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4095 | Fehlerursache |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4096 | Status RDYUVW-Signal |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4097 | Entprellzähler RDYUVW-Signal |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4098 | Entprellzähler Diagnoseinformation |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4099 | Aktueller Status der Antriebsregelung | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4100 | Raster-Zähler für 10ms Drive-Task |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4101 | Raster-Zähler für 10ms PostDrive-Task |  | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4102 | Raster-Zähler für 10ms PreDrive-Task | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4103 | Bitstatus der PLD-Fehlersignale | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4104 | Bitstatus der HW-Fehlersignale (16Bit) | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4105 | CAN Kl15 |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4106 | HW Kl15 | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4107 | Maximale Systemlast während des aktuellen Fahrzyklus | % | - | unsigned int | - | 0.001525879 | - | 0.000000000 |
| 0x4108 | Maximale Auslastung der Context Save Area (CSA) | % | - | unsigned int | - | 0.001525879 | - | 0.000000000 |
| 0x4109 | Aktuell gemessene HV-Batterie-Spannung. | V | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4110 | Istwert Phasenstrom L1 | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4111 | Istwert Phasenstrom L2 | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4112 | Istwert Phasenstrom L3 | A | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4113 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4114 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4115 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4116 | Buffer für Flash Margin Read Errors | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4117 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4118 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4119 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4120 | Buffer für ErrorInterrupts und Traps | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4121 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4122 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4123 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4124 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4125 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4126 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4127 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4128 | Reset-ID Vorgeschichte | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4129 | Abstellzeit SG auf Basis Systemzeit | s | - | unsigned long | - | 1.000000000 | - | 0.000000000 |
| 0x4130 | Zähler für SG Resets seit Aufwachen | - | - | unsigned int | - | 1.000000000 | - | 0.000000000 |
| 0x4131 | Betriebszähler SG seit aufwachen | s | - | unsigned long | - | 1.000000000 | - | 0.000000000 |
| 0x4132 | Gefilterter Phasenstrom | V | - | signed int | - | 0.031250000 | - | 0.000000000 |
| 0x4133 | Gefilterte DBC-Temperatur der Phase U | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4134 | Gefilterte DBC-Temperatur der Phase V | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4135 | Gefilterte DBC-Temperatur der Phase W | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4136 | Geschätzte Kühlwassertemperatur | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4137 | Geschätzte Diodentemperatur im Leistungsmodul | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4138 | Geschätzte IGBT-Temperatur im Leistungsmodul | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4139 | NM-Status A-CAN | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4140 | NM-Status FA-CAN | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4141 | NM-Status FlexRay | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4142 | Istdrehzahl EWP | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4143 | Signal dient zum Ein-/Ausschalten der Elektrischen Luft Unterdruck Pumpe (ELUP) |  | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4144 | Elup-Strom am Shunt gemessen. | A | - | unsigned int | - | 0.100000000 | - | 0.000000000 |
| 0x4145 | Anzahl erkannter IGBT-Kurzschlussereignisse im Zeitfenster | - | - | unsigned char | - | 1.000000000 | - | 0.000000000 |
| 0x4146 | Aktueller Wert des Zeitfensters für Heilungsversuche bei erkanntem IGBT-Kurzschlussereignis | s | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4147 | Zeit zwischen zwei Heilungsversuchen bei erkanntem IGBT-Kurzschlussereignis | s | - | unsigned int | - | 0.010000000 | - | 0.000000000 |
| 0x4148 | LayerIN Signal: Temperatur EM1 | °C | - | signed int | - | 0.015625000 | - | 0.000000000 |
| 0x4149 | LayerIN Signal: interne Temperatur des DC/DC-Wandlers | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
| 0x4150 | LayerIN Signal: Temperatur LE-Steuergeraet (nach intern); Maximalwert aller verfuegbarer Messgroessen (--> worst case) | °C | - | signed int | - | 0.100000000 | - | 0.000000000 |
