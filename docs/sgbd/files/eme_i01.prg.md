# eme_i01.prg

## General

|  |  |
| --- | --- |
| File | eme_i01.prg |
| Type | PRG |
| Jobs | 48 |
| Tables | 282 |
| Origin | BMW EA-441 Stefan_Blaskovic |
| Revision | 19.005 |
| Author | MAGNA-TELEMOTIVE-GMBH EA-402 Flossbach-Nguyen |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotor-Elektronik I01 |  |  |
| ORIGIN | string | BMW EA-441 Stefan_Blaskovic |  |  |
| REVISION | string | 19.005 |  |  |
| AUTHOR | string | MAGNA-TELEMOTIVE-GMBH EA-402 Flossbach-Nguyen |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.990 |  |  |
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

### _STATUS_BUILD_ID

Gibt die Software-Id zurück (EntwicklerJob)

_No arguments._

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME, EME20, AE, REME, EMET, EMEZ ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### _STATUS_RESETINFO_LESEN

Auslesen der aktuellen bzw. abgespeicherten ResetInformationen

| Name | Type | Description |
| --- | --- | --- |
| CONTROLLER | int | 0 ==> MC0 1 ==> MC2 |
| SLOTNR | int | gewuenschter ResetInformation 0 ==> aktuell 255 ==> letzter abgespeicherter Datensatz 1..64 ==> Datensatz 1..64 Defaultwert: DEFAULT (DefaultMode) |

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

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
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

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
| 0x7D01 | Ultraschallsensor vorne Seite links | 1 |
| 0x7D02 | Ultraschallsensor vorne Aussen links | 1 |
| 0x7D03 | Ultraschallsensor vorne Mitte links | 1 |
| 0x7D04 | Ultraschallsensor vorne Mitte rechts | 1 |
| 0x7D05 | Ultraschallsensor vorne Aussen rechts | 1 |
| 0x7D06 | Ultraschallsensor vorne Seite rechts | 1 |
| 0x7D07 | Ultraschallsensor hinten Seite rechts | 1 |
| 0x7D08 | Ultraschallsensor hinten Aussen rechts | 1 |
| 0x7D09 | Ultraschallsensor hinten Mitte rechts | 1 |
| 0x7D0A | Ultraschallsensor hinten Mitte links | 1 |
| 0x7D0B | Ultraschallsensor hinten Aussen links | 1 |
| 0x7D0C | Ultraschallsensor hinten Seite links | 1 |
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

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIENNUMMER | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | Seriennummer (10 Zeichen) |
| JAHR | HEX | high | unsigned char | - | - | - | - | - | - | - | JAHR in HEX-Format  Bsp.: 15.12.2011 JAHR=0x11 |
| MONAT | HEX | high | unsigned char | - | - | - | - | - | - | - | MONAT in HEX-Format  Bsp.: 15.12.2011 MONAT=0x12 |
| TAG | HEX | high | unsigned char | - | - | - | - | - | - | - | TAG in HEX-Format  Bsp.: 15.12.2011 TAG=0x15 |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = nicht definiert 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | HEX | high | unsigned char | - | - | - | - | - | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0-62 = Nummer des Sensors 63 - 255  = nicht definiert |
| GAIN | HEX | high | unsigned long | - | - | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| OFFSET | HEX | high | unsigned long | - | - | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |
| EXPONENT | - | high | unsigned long | - | - | 100000.0 | 1.0 | 0.0 | - | - | Zusätzliche Skalierung |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor |
| SENSOR_BLOCK | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK | - | - | - | - | - | Sensor-Block, der geschrieben werden soll 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |

### ARG_0X400F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Hardwarekalibrationsmode setzen (0/1): 0 = keine Aktion 1 = Hardwarekalibrationsmode |

### ARG_0XADC0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_START_LADEN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ladestart anfordern = 1; keine Anforderung = 0 |

### ARG_0XADC1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_STOP_LADEN | + | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ladestopp anfordern = 1; keine Anforderung = 0 |

### ARG_0XADC4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REX_SOLL_LEISTUNG | + | - | W | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 4000.0 | 28000.0 | Sollleistung, die der Motor liefern soll |
| REX_SOLL_DREHZAHL | + | - | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2200.0 | 4300.0 | Solldrehzahl, die der Motor fahren soll. |

### ARG_0XADEB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEREICH_DREHZAHL | + | - | 0-n | high | unsigned char | - | TAB_LAST_EMASCHINE | - | - | - | - | - | Auswahl Drehzahl Bereich |

### ARG_0XADF1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_DCDC_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_DCDC_ANF | 1.0 | 1.0 | 0.0 | - | - | Anforderung Betriebsart DCDC |
| ST_B_DIAG_DCDC | + | - | 0-n | high | unsigned char | - | TAB_ST_B_DIAG_DCDC | - | - | - | - | - | Auswahl der Systemgrenze |
| I_DIAG_DCDC_LV_OUT | + | - | A | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -200.0 | 200.0 | LV Strom Systemgrenze |
| I_DIAG_DCDC_HV_OUT | + | - | A | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | HV Strom Systemgrenze |
| U_DIAG_DCDC_LV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 33.0 | LV Spannung Systemgrenze |
| U_DIAG_DCDC_HV_OUT | + | - | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | HV Spannung Systemgrenze |

### ARG_0XADF2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_HV_ANF | + | - | 0-n | high | unsigned char | - | TAB_ST_DIAG_HV_ANF | - | - | - | - | - | Anforderung HV |

### ARG_0XADF4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XADF6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | high | unsigned char | - | TAB_AE_ROTORLAGESENSOR_ANLEREN_AKTION | - | - | - | - | - | 0x00 = Auto RLS-Anlernen 0x01 = Hochdrehen/Freilauf |

### ARG_0XADF8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MD_KLASSEN_GANG | + | - | 0-n | high | unsigned char | - | TAB_AE_MOMENTENKLASSE_GANG | - | - | - | - | - | Momentenklassen Gang1 / Gang2 |

### ARG_0XADF9_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HISTOGRAMM_NR | + | - | 0-n | high | unsigned char | - | TAB_AE_DCDC_HISTOGRAMM | - | - | - | - | - | Histogramm das angefordert wird: 0 = PHistoF 1 = PHistoL 2 = T1HistoF 3 = T1HistoL 4 = T2HistoF 5 = T2HistoL 6 = T3HistoF 7 = T3HistoL 8 = T4HistoF 9 = T4HistoL 10 = rUtil 11 = rUtilF |

### ARG_0XADFC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SATZ | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des auszulesenden Satzes der Ladehistorie. |

### ARG_0XADFE_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LW_KLASSEN_GANG | + | - | 0-n | high | unsigned char | - | TAB_LW_KLASSEN | - | - | - | - | - | LW Klassen vom Gang |

### ARG_0XAF42_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HISTOGRAMM_SLE_NR | + | - | 0-n | high | unsigned char | - | TAB_LADEGERAET_HISTOGRAMM | - | - | - | - | - | Auswahl des Histogrammtyps |

### ARG_0XDE08_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE09_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE0A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XDE19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZAHL_BREMSBETAETIGUNG | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Bremsbetätigungen der ELUP |
| LAUFZEIT_ELUP | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Laufzeit der ELUP |
| ANLAEUFE_ELUP | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Anläufe der ELUP |

### ARG_0XDE3E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONF_LADEEINSTELLUNG | 0-n | high | unsigned char | - | TAB_STAT_KONF_LADEEINSTELLUNG | - | - | - | - | - | Konfuguration Scharge oder Günstig-Laden als gültige Schnittstelle |

### ARG_0XDE69_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_AE_PARKSPERRE_VARIANTE | 0-n | high | unsigned char | - | TAB_VARIANTE_PARKSPERRE | - | - | - | - | - | Konfiguration Parksperrenvariante |

### ARG_0XDE77_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE | - | - | - | - | - | Ändern des Zustandes der Parksperre ( 0 = kein Einlegen; 1 = Einlegen der Parksperre ) |

### ARG_0XDE78_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_EINLERNEN_STEUERN | - | - | - | - | - | Vorgabe Anlernen ( 0 = kein Anlernen; 1 = Anlernen der Parksperre) |

### ARG_0XDE7A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_POSITION_EINGELEGT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000.0 | Position der Parksperre eingelegt |
| STAT_PS_POSITION_OFFEN | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000.0 | Position der Parksperre offen |

### ARG_0XDE93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |

### ARG_0XDE95_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_NVRAM_LOESCHEN | - | - | - | - | - | Mögliche Ausführung des Löschens vom NV-RAM der Parksperre ( 0 = kein Löschen; 1 = Löschen ) |

### ARG_0XDEA1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy Eintrag, da kein Argument benötigt |

### ARG_0XDEAE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy Eintrag, da kein Argument benötigt |

### ARG_0XDEB1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | high | unsigned int | - | - | 65535.0 | 360.0 | 0.0 | 0.0 | 360.0 | Resolver Offset Winkel |

### ARG_0XDEB2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen Rotorlagesensor: 0 = nicht rücksetzen; 1 = rücksetzen |

### ARG_0XDEB7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_CODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht loeschen 1 = loeschen |

### ARG_0XDED1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LERNEN_REX_RESONANZ | 0-n | high | unsigned char | - | TAB_EINLERNEN_REX_RESONANZ | - | - | - | - | - | Auswahl für Einlernvorgang der Resonanz |

### ARG_0XDEDF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B_DERATING_HISTO_RESET_EM1 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Durchführen Rücksetzen UI Histogramm EM1 (0 = nicht rücksetzen; 1 = rücksetzen) |

### ARG_0XDEE0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B_DERATING_HISTO_RESET_EM2 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Durchführen Rücksetzen UI Histogramm EM2 (0 = nicht rücksetzen; 1 = rücksetzen) |

### ARG_0XDEE5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_CODE_LW | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Nicht löschen / 1 = Löschen |

### ARG_0XDEEE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl, ob Reset oder nicht: 0 = Keine Aktion; 1 = Reset |

### ARG_0XDF1F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZURECKSETZEN_UCX_VERBAUZUSTAND | 0-n | high | unsigned char | - | TAB_RUECKSETZEN_UCX_VERBAUINFO | - | - | - | - | - | Zurücksetzen der Verbauinformation über die UCX |

### ARG_0XDF45_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SET_AC_I_LIMIT_LOW | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_LOW | - | - | - | - | - | Einstellung Stromgrenze AC_LOW |
| STAT_SET_AC_I_LIMIT_HIGH | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_HIGH | - | - | - | - | - | Einstellung Stromgrenze AC_HIGH |

### ARG_0XDF50_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BA_WERKLDMODUS | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | - | - | Auswahl des Lademodus Werk |
| STAT_SOC_ANF_WERKLADEMODUS | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Geforderter SOC Endwert HV-Batterie beim Lademodus Werk |

### ARG_0XDF51_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

### ARG_0XDF52_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | 3-Byte Chiffetext vom Resolver Offset Winkel |

### ARG_0XDF5D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Aktion: 0 = nicht zurücksetzen; 1 = zurücksetzen |

### ARG_0XDFB3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONFIG_SLE | 0-n | high | unsigned char | - | TAB_LADEGERAET_KONFIGURATION | - | - | - | - | - | Auswahl Einstellung UCX Version |

### ARG_0XDFB4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_HIST_SLE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen der Histogramme: 0 = Keine Aktion; 1 = Reset |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEF_VERFAHREN | + | - | 0-n | high | unsigned char | - | TAB_PRUEF_VERFAHREN | - | - | - | - | - | Verfahren zur Absicherung des nicht-flüchtigen Speichers |

### ARG_0XF001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RATIO_IDENT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ratio Identifier |
| RATIO_TEST_PROCEDURE | + | - | 0-n | high | unsigned char | - | RATIO_TEST_PROC_TAB | - | - | - | - | - | Auswahl der Testfunktion |
| RATIO_DENOMINATOR | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Rate Based Monitoring Denominator |
| RATIO_NUMERATOR | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Rate Based Monitoring Numerator |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | + | - | 0-n | high | unsigned char | - | TAB_PROZESSOR | - | - | - | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | + | - | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0-62 = Nummer des Sensors 63 - 255  = nicht definiert |

### ARG_0XF012_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_SATZ | + | - | 0-n | high | unsigned char | - | TAB_AKS_INFO_SATZ | - | - | - | - | - | Selektiere den entsprechenden Eintrag aus dem Ringpuffer: 0= 1.Satz 1= 2.Satz 2= 3.Satz 3= 4. Satz |

### BF_AE_ROTORLAGESENSOR_ERROR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Status Code: Bit 0: Resolver anlernen erfolgreich beendet  0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Status Code: Bit 1: Hochfahren erfolgreich beendet 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Status Code: Bit 2: Diagnosejob durch Fehler abgebrochen 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Status Code: Bit 3: Schreiben des Resolver Offsets mittels Statemachine aktiv 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Error Code: Bit 4: Speedup aktiv (ist auch mit aktivem Bit0  Hochfahren erfolgreich beendet  aktiv) 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Error Code: Bit 5: Resolver anlernen aktiv 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Error Code: Bit 6: Auslauf der elektrischen Maschine aktiv 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Error Code: Bit 7: Fehler beim Speedup (auch bei Bit0  Hochfahren erfolgreich beendet ) 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Status Code: Bit 8: Anlernen des Offsets mit oldROC benötigt zu lange 0 = nicht aktiv 1 = aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Status Code: Bit 9: Angelernter Offset ausserhalb des Toleranzbandes 0 = nicht aktiv 1 = aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Status Code: Bit 10: Offset-Berechnung weicht zu stark vom Referenz-Offset ab 0 = nicht aktiv 1 = aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Status Code: Bit 11: Zu starke Abweichung zwischen letzter und vorletzter Berechnung 0 = nicht aktiv 1 = aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Status Code: Bit 12: Fehler - FuSi (MC0 oder MC2) hat anderen Offset berechnet 0 = nicht aktiv 1 = aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Status Code: Bit 13: Fehler - Keine Anwort von FuSi 0 = nicht aktiv 1 = aktiv |

### BF_LADEUNTERBRECHUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEUNTERBRECHUNG_2 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | AC_Spannung_fehlt_oder_Netzverbindung_instabil 0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_3 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Ueberstrom_AC 0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_5 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Ueberspannung_DC  0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_4 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Unterspannung_DC 0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_8 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Kommunikation_unterbrochen 0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_7 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Lebendes_Objekt_erkannt_LOD 0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_1 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Thermische_Ueberlastung 0= nicht aktiv 1= aktiv |
| STAT_LADEUNTERBRECHUNG_6 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Ueberstrom_DC 0= nicht aktiv 1= aktiv |

### BF_STATUS_LSC_AUSWAHL_LADEN_MODUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0 = Laden auf Abfahrtszeit aktiv; 1 = Immer_Sofort_Laden |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0 = Intelligent Laden inaktiv; 1 = Intelligent Laden aktiv, wenn Lademodus_auf_Abfahrtszeit aktiv; andernfalls in HMI nur vorausgewählt |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0 = Günstig Laden inaktiv; 1 = Günstig Laden aktiv (wenn Laden_auf_Abfahrtszeit aktiv; andernfalls in HMI nur vorausgewählt) |

### BF_STAT_ST_ERR_MOT_TRCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_ERR_MOT_TRCT_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Fehlerbedingter AKS |
| STAT_ST_ERR_MOT_TRCT_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Fehlerbedingter Freilauf |
| STAT_ST_ERR_MOT_TRCT_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Limitiertes Drehmoment (0% - 25% or 50% Md_max) |
| STAT_ST_ERR_MOT_TRCT_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Limitiertes Drehmoment (25% Md_max) |
| STAT_ST_ERR_MOT_TRCT_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Limitiertes Drehmoment (50% Md_max) |
| STAT_ST_ERR_MOT_TRCT_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Drehmomentabweichung EM |
| STAT_ST_ERR_MOT_TRCT_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Temperaturfehler EM |
| STAT_ST_ERR_MOT_TRCT_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Interlock/Crashklemme/Notaus |
| STAT_ST_ERR_MOT_TRCT_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | AC-Strom Fehler |
| STAT_ST_ERR_MOT_TRCT_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Resolverfehler |
| STAT_ST_ERR_MOT_TRCT_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Signalausfall CAN |
| STAT_ST_ERR_MOT_TRCT_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Signalausfall interne Messgrößen |
| STAT_ST_ERR_MOT_TRCT_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | EWS Fehler |
| STAT_ST_ERR_MOT_TRCT_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | HW-naher Fehler LE |
| STAT_ST_ERR_MOT_TRCT_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Temperaturfehler LE |

### BF_STAT_ST_INFO_DER_INVE_TRCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_INFO_DER_INVE_TRCT_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Derating wegen Übertemperatur IGBT/Diode |
| STAT_ST_INFO_DER_INVE_TRCT_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Derating  wegen Temperaturspreizung NTC zu IGBT/Diode |
| STAT_ST_INFO_DER_INVE_TRCT_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Derating  wegen Übertemperatur NTC |
| STAT_ST_INFO_DER_INVE_TRCT_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Derating  wegen Übertemperatur Kühlmittel |
| STAT_ST_INFO_DER_INVE_TRCT_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Derating  wegen Schaltüberspannung wg. U_DC Niveau |
| STAT_ST_INFO_DER_INVE_TRCT_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Derating  wegen Drehzahlbereich |
| STAT_ST_INFO_DER_INVE_TRCT_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Derating wegen zu niedrigem Kühlmittelvolumenstrom |
| STAT_ST_INFO_DER_INVE_TRCT_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Derating wegen zu hoher Gate-Treiber-Temperatur |
| STAT_ST_INFO_DER_INVE_TRCT_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Info: Kurzschluss UVW Highside |
| STAT_ST_INFO_DER_INVE_TRCT_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Info: Kurzschluss UVW Lowside |
| STAT_ST_INFO_DER_INVE_TRCT_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - |  Info: UVW-Schalter offen |
| STAT_ST_INFO_DER_INVE_TRCT_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Info: Regler aktiv |
| STAT_ST_INFO_DER_INVE_TRCT_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Info: Id-Regler in Anti-Windup |
| STAT_ST_INFO_DER_INVE_TRCT_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Info: Iq-Regler in Anti-Windup |
| STAT_ST_INFO_DER_INVE_TRCT_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserviert |

### BF_STAT_ST_INFO_DER_MOT_TRCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_INFO_DER_MOT_TRCT_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Derating Drehmoment wegen HV-DC Spannungs Grenze (motorischer Betrieb) |
| STAT_ST_INFO_DER_MOT_TRCT_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Derating Drehmoment wegen HV-DC Spannungs Grenze (generatorischer Betrieb) |
| STAT_ST_INFO_DER_MOT_TRCT_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Derating Drehmoment wegen Geschwindigkeit (motorischer Betrieb) |
| STAT_ST_INFO_DER_MOT_TRCT_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Derating Drehmoment wegen Geschwindigkeit (generatorischer Betrieb) |
| STAT_ST_INFO_DER_MOT_TRCT_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Derating Drehmoment wegen HV-DC Strom Grenze (motorischer Betrieb) |
| STAT_ST_INFO_DER_MOT_TRCT_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Derating Drehmoment wegen HV-DC-Strom Grenze (generatorischer Betrieb) |
| STAT_ST_INFO_DER_MOT_TRCT_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Derating Drehmoment wegen Temperatur EM |
| STAT_ST_INFO_DER_MOT_TRCT_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Info: Motorische AC-Strom Grenze erreicht |
| STAT_ST_INFO_DER_MOT_TRCT_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Info: Generatorische AC-Strom Grenze erreicht |
| STAT_ST_INFO_DER_MOT_TRCT_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Info: Resolver offset nicht eingelernt |
| STAT_ST_INFO_DER_MOT_TRCT_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Info: Feldkontrolle active |
| STAT_ST_INFO_DER_MOT_TRCT_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Info: Kritische Temperatur am Windungsende |
| STAT_ST_INFO_DER_MOT_TRCT_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Info: Kritische Temperatur Rotor |
| STAT_ST_INFO_DER_MOT_TRCT_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | reserviert |
| STAT_ST_INFO_DER_MOT_TRCT_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserviert |

### BF_STAT_V_E_EM2POMERROR50US

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_E_EM2POMERROR50US_BIT0 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Verletzung Max Phasenstrom |
| STAT_V_E_EM2POMERROR50US_BIT1 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Summenstromfehler AC |
| STAT_V_E_EM2POMERROR50US_BIT2 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Verletzung Max Idc |
| STAT_V_E_EM2POMERROR50US_BIT3 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Verletzung Kriterium positiver Id-Strom |
| STAT_V_E_EM2POMERROR50US_BIT4 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Fehler in Plausibilisierung des Resolver- Winkel |
| STAT_V_E_EM2POMERROR50US_BIT5 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Winkelbeobachter Grenzwertverletzung Winkelzeitfehler |
| STAT_V_E_EM2POMERROR50US_BIT6 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | Winkelbeobachter Winkelfehler Absolutdifferenzüberwachung |

### BF_STAT_V_E_FUSILDUWB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_E_FUSILDUWB_BIT0 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | MGU: Statische Brems-Drehmoment Grenze |
| STAT_V_E_FUSILDUWB_BIT1 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | MGU: Drehmoment Richtung |
| STAT_V_E_FUSILDUWB_BIT2 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | MGU: Obere Drehmoment Grenze |
| STAT_V_E_FUSILDUWB_BIT3 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | MGU: Untere Drehmoment Grenze |
| STAT_V_E_FUSILDUWB_BIT4 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | MGU: Ungültiger Quadrant |
| STAT_V_E_FUSILDUWB_BIT5 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | MGU: Verletzung sicherer Zustand |
| STAT_V_E_FUSILDUWB_BIT6 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | PGU: Winkel Fehler (Resolver vs. Low-level) |
| STAT_V_E_FUSILDUWB_BIT7 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | PGU: Winkel Fehler (low-level Signal) |
| STAT_V_E_FUSILDUWB_BIT8 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | PGU: Geschwindigkeitsfehler (resolver vs. MC2) |
| STAT_V_E_FUSILDUWB_BIT9 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | PGU: Geschwindigkeitsfehler (MC2 vs low-level) |
| STAT_V_E_FUSILDUWB_BIT10 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | PGU: Dynamischer Geschwindigkeitsfehler |
| STAT_V_E_FUSILDUWB_BIT11 | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | CPL: Fehler Strom (aktueller Wert MC0 vs. MC2) |
| STAT_V_E_FUSILDUWB_BIT12 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | CPL: Fehler Strom (Werte MC2 nominal vs. aktuell) |
| STAT_V_E_FUSILDUWB_BIT13 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | MCU: Fehler Referenz Stromberechnung (abs.) |
| STAT_V_E_FUSILDUWB_BIT14 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | MCU: Fehler Referenz Stromberechnung (sign) |
| STAT_V_E_FUSILDUWB_BIT15 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | PMB: Verletzung Drehmoment Grenze |
| STAT_V_E_FUSILDUWB_BIT16 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | Sammelqualifier |
| STAT_V_E_FUSILDUWB_BIT17 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Resolverkommunikation gestört (DIO) |
| STAT_V_E_FUSILDUWB_BIT18 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | interne Kommunikation gestört |
| STAT_V_E_FUSILDUWB_BIT19 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | interne Kommunikation gestört |
| STAT_V_E_FUSILDUWB_BIT20 | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | Kommunikation gestört (CAN/Flexray) |
| STAT_V_E_FUSILDUWB_BIT21 | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | interne Kommunikation gestört |
| STAT_V_E_FUSILDUWB_BIT22 | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | sonstige Kommunikationsfehler |
| STAT_V_E_FUSILDUWB_BIT23 | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | sonstige Kommunikationsfehler |

### BF_STAT_V_E_FUSILDUWB_MC2_UE2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_E_FUSILDUWB_MC2_UE2_BIT0 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | reserviert |
| STAT_V_E_FUSILDUWB_MC2_UE2_BIT1 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Fehler Sollstromberechnung EM-Regelung |
| STAT_V_E_FUSILDUWB_MC2_UE2_BIT2 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Fehler Stromsensor |
| STAT_V_E_FUSILDUWB_MC2_UE2_BIT3 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Sammelfehler Qualifier |
| STAT_V_E_FUSILDUWB_MC2_UE2_BIT4 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Einzelfehler Qualifier |

### BF_STAT_V_ST_RLS_FUSI_MC0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_ST_RLS_FUSI_MC0_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Resolver nicht OK |

### BF_SYSSTATE_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_KL15WUP_1 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Klemmenzustand (bitcodiert): Bit1 = Kl15WUP |
| STAT_SYSSTATE_KL30B_2 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Klemmenzustand (bitcodiert): Bit2 = KL30B |
| STAT_SYSSTATE_KL30C_3 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Klemmenzustand (bitcodiert): Bit3 = KL30C |

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
| 0x021A00 | Energiesparmode aktiv | 0 | - |
| 0x02FF1A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030F01 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - Version 2 | 1 | - |
| 0x030F02 | HVPM - Start-Isolationsüberwachung - ISO-Warnung | 1 | - |
| 0x030F03 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - China - Version 2 | 1 | - |
| 0x030FAD | DC/DC-Wandler - Hardware - defekt | 0 | - |
| 0x0316DA | Notlaufmanager - Folgefehler - SME - Thermisches Ereignis | 0 | - |
| 0x0316EE | Notlaufmanager - Degradation - Antriebsleistung eingeschränkt | 1 | - |
| 0x0316EF | Notlaufmanager - Degradation - Antriebsleistung eingeschränkt - Ladezustand | 1 | - |
| 0x0316F0 | Notlaufmanager - Ladezustand HVS - Range Extender | 1 | - |
| 0x21EB37 | Qualfierueberwachung, Signalausfall Resolver | 0 | - |
| 0x222008 | Sensorfehler, Messwerterfassung, Winkelgeber/Drehzahlgeber defekt | 0 | - |
| 0x222009 | Winkelbeobachter, Grenzwertverletzung Winkelzeitfehler | 0 | - |
| 0x22200A | Winkelbeobachter, Winkelfehler Absolutdifferenzüberwachung | 0 | - |
| 0x22200B | Messwerterfassung, Hardwarekalibrationswerte, eine bzw. mehrere Werte fehlen auf dem MC0 | 0 | - |
| 0x22200C | Messwerterfassung, Hardwarekalibrationswerte, eine bzw. mehrere Werte fehlen auf dem MC2 | 0 | - |
| 0x22200D | Qualfierueberwachung, Signalausfall CAN von eDME | 0 | - |
| 0x22200E | Qualfierueberwachung, Signalausfall CAN von SME | 0 | - |
| 0x22200F | Qualfierueberwachung, Signalausfall Intern | 0 | - |
| 0x222011 | E-Maschine Resolverabgleich nicht durchgeführt oder Rotorlagesensor-Offset nicht im Toleranzband. | 0 | - |
| 0x222012 | Messwerterfassung, Hardwarekalibrationswerte, CRC Fehler MC0 | 0 | - |
| 0x222013 | Messwerterfassung, Hardwarekalibrationswerte, CRC Fehler MC2 | 0 | - |
| 0x222014 | Sensorfehler, Messwerterfassung, Resolver Winkel | 0 | - |
| 0x222015 | Sensorfehler, Messwerterfassung, Resolver Drehzahl | 0 | - |
| 0x222016 | Resolver, Fehler Plausibilisierung Winkel | 0 | - |
| 0x222017 | EME, Stromplausibilisierung der drei Phasen: Summe der Phasenströme außerhalb des erlaubten Bereichs | 0 | - |
| 0x222018 | Plausibilität Diagnose E-machine Temp sensor1 MBD obere Schwelle überschritten | 0 | - |
| 0x222019 | Plausibilität Diagnose E-machine Temp sensor1 MBD untere Schwelle unterschritten | 0 | - |
| 0x22201A | Plausibilität Diagnose E-machine Temp sensor2_MBD obere Schwelle überschritten | 0 | - |
| 0x22201B | Plausibilität Diagnose E-machine Temp sensor2_MBD untere Schwelle unterschritten | 0 | - |
| 0x22201C | Plausibilität Diagnose CCD E-machine Temp sensor1 | 0 | - |
| 0x22201D | Plausibilität Diagnose CCD E-machine Temp sensor2 | 0 | - |
| 0x22201E | Externer Temperatursensor E-Maschine Signal Wertebereichsverletzung : Untere Schwelle | 0 | - |
| 0x22201F | Externer Temperatursensor E-Maschine Signal Wertebereichsverletzung: Obere Schwelle | 0 | - |
| 0x222020 | Fehler Rotorlagesensor , Parity Bit aktiv | 0 | - |
| 0x222021 | Fehler Rotorlagesensor , Phasendifferenz zwischen Sin und Cos Eingang überschreitet Schwelle | 0 | - |
| 0x222022 | Fehler Rotolagesensor , Drehzahl überschreitet Schwelle | 0 | - |
| 0x222023 | Fehler Rotolagesensor , Tracking Error überschreitet LOT Schwelle | 0 | - |
| 0x222024 | EME, E-Maschinenregelung, E-Maschine: Temperatur über 2. Schwelle | 0 | - |
| 0x222025 | EME, E-Maschinenregelung, E-Maschine: Überdrehzahl erkannt | 0 | - |
| 0x222026 | Externer Temperatursensor2 E-Maschine Signal Wertebereichsverletzung : Untere Schwelle | 0 | - |
| 0x222027 | Externer Temperatursensor2 E-Maschine Signal Wertebereichsverletzung: Obere Schwelle | 0 | - |
| 0x222028 | EME, E-Maschinenregelung, E-Maschine: Temperatursensor2 über 2. Schwelle | 0 | - |
| 0x222029 | Fehler Rotolagesensor , Amplituden-Differenz zwischen Sin und Cos Eingang überschreitet DOS Mismatch Schwelle | 0 | - |
| 0x22202A | Fehler Rotolagesensor , Sin und/oder Cos Amplituden überschreiten  DOS Schwelle | 0 | - |
| 0x22202B | Fehler Rotolagesensor , Sin und/oder Cos Amplituden unterschreiten LOS Schwelle | 0 | - |
| 0x22202C | Fehler Rotolagesensor , Kurzschluss von Sin und/oder Cos Eingang nach Masse oder Ubat | 0 | - |
| 0x22202D | Unsachgemäßer Gebrauch des Fahrzeugs | 0 | - |
| 0x22202E | mindestens zwei der drei EM temperatursensoren sind fehlerhaft | 0 | - |
| 0x22202F | Erkennung der ungültigen Anforderung der Betriebsart der EM. | 1 | - |
| 0x222050 | 2-GG Aktuatorstrom > Stromlimit | 0 | - |
| 0x222051 | 2-GG interner Sensorfehler Positionserfassung | 0 | - |
| 0x222052 | 2-GG Plausibilität Sensor1/2 fehlerhaft | 0 | - |
| 0x222053 | 2-GG EOL-Werte einlernen fehlgeschlagen | 0 | - |
| 0x222054 | 2-GG Open Circuit Aktuator | 0 | - |
| 0x222055 | 2-GG Short Circuit Aktuator | 0 | - |
| 0x222056 | 2-GG Auslegen GangN nicht möglich | 0 | - |
| 0x222202 | DCDC, Hardware, Bauteilschutz, Überschreitung max. LV-Strom | 0 | - |
| 0x222203 | DCDC, Bauteilschutz, Überstrom I_LV redundante Messung | 0 | - |
| 0x222204 | DCDC, Hardware, Bauteilschutz, Unplausibler Resonanzstrom | 0 | - |
| 0x222205 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom im Resonanzkreis | 0 | - |
| 0x222206 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom in Tiefsetzsteller Phase 1 | 0 | - |
| 0x222207 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom in Tiefsetzsteller Phase 2 | 0 | - |
| 0x222208 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp GR1 | 0 | - |
| 0x222209 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GR2 | 0 | - |
| 0x22220A | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW HS1 | 0 | - |
| 0x22220B | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW HS2 | 0 | - |
| 0x22220C | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW LS1 | 0 | - |
| 0x22220D | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW LS2 | 0 | - |
| 0x22220E | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Diode TS1 | 0 | - |
| 0x22220F | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter TS1 | 0 | - |
| 0x222210 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Diode TS2 | 0 | - |
| 0x222211 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter TS2 | 0 | - |
| 0x222212 | DCDC, Hardware, Bauteilschutz, Überschreitung der max. Board-Temperatur | 0 | - |
| 0x222213 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Gleichrichters | 0 | - |
| 0x222214 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Gegentaktwandlers | 0 | - |
| 0x222215 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Tiefsetzstellers | 0 | - |
| 0x222217 | DCDC, Hardware, Bauteilschutz, GateTreiberVersorgung | 0 | - |
| 0x222218 | DCDC, Hardware, Bauteilschutz, Überschreitung max. LV-Spannung | 0 | - |
| 0x222219 | DCDC, Bauteilschutz, Überspannung U_LV redundante Messung | 0 | - |
| 0x22221A | DCDC, Hardware, Bauteilschutz, Überschreitung max. Grenzspannung am Tiefsetzstellerausgang | 0 | - |
| 0x22221B | DCDC, Hardware, Bauteilschutz, Unplausibler Wirkungsgrad | 0 | - |
| 0x22221C | DCDC, Überwachung, Fehler Masseanbindung_Notlauf | 0 | - |
| 0x222224 | DCDC, Messwertüberprüfung, Fehler in Messwerterfassung_Notlauf möglich | 0 | - |
| 0x222225 | DCDC, Unzulässige MC6 Software Version | 0 | - |
| 0x222226 | interner Sensor DCDC; Trafo-Strom unplausibel zu hoch | 0 | - |
| 0x222227 | interner Sensor DCDC; Trafostrom unplausibel zu niedrig | 0 | - |
| 0x222228 | interner Sensor DCDC; Gefilterter Trafostrom unplausibel zu niedrig | 0 | - |
| 0x222229 | interner Sensor DCDC; Tiefsetzsteller-Strom 1 unplausibel zu hoch | 0 | - |
| 0x22222A | interner Sensor DCDC; Tiefsetzsteller-Strom 1 unplausibel zu niedrig | 0 | - |
| 0x22222B | interner Sensor DCDC; Tiefsetzsteller-Strom 2 unplausibel zu hoch | 0 | - |
| 0x22222C | interner Sensor DCDC; Tiefsetzsteller-Strom 2 unplausibel zu niedrig | 0 | - |
| 0x22222D | interner Sensor DCDC; Gleichrichter Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22222E | interner Sensor DCDC; Gleichrichter  Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22222F | interner Sensor DCDC; Gleichrichter  Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222230 | interner Sensor DCDC; Gegentaktwandler Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222231 | interner Sensor DCDC; Gegentaktwandler Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222232 | interner Sensor DCDC; Gegentaktwandler Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222233 | interner Sensor DCDC; PCB Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222234 | interner Sensor DCDC; PCB Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222235 | interner Sensor DCDC; PCB  Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222236 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222237 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222238 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222239 | interner Sensor DCDC; Tiefsetzsteller Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22223A | interner Sensor DCDC; LV - Spannungssensor unplausibel zu hoch | 0 | - |
| 0x22223B | interner Sensor DCDC; LV - Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x22223C | DCDC, SPI Kommunikation, Controller- nach DCDC-Board fehlerhaft | 0 | - |
| 0x22223D | DCDC, SPI Kommunikation, DCDC- nach Controller-Board fehlerhaft | 0 | - |
| 0x22223F | DCDC, Hardware, Bauteilschutz, Überschreitung max. Trafostrom, Hardware-Intterupt | 0 | - |
| 0x222240 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Tiefsetzsteller-Strom1, Hardware-Interrupt | 0 | - |
| 0x222241 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Tiefsetzsteller-Strom2, Hardware-Interrupt | 0 | - |
| 0x222275 | DCDC, Überwachung, Alterung Masseband Anbindung | 0 | - |
| 0x222276 | DCDC, Überwachung, Alterung Masseband Anbindung und starke Derating des DCDC-Stroms | 0 | - |
| 0x222277 | DCDC, Überwachung, Massefehler, Kurzschluss nach Masse | 0 | - |
| 0x222279 | DCDC, Hardware, Bauteilschutz, Überschreitung max. HV-Strom | 0 | - |
| 0x22227A | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Hochspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x22227B | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Hochspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x22227C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Hochspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x22227D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Hochspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x22227E | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom auf der Hochvoltseite fehlerhaft | 0 | - |
| 0x22227F | interner Sensor DCDC; HV - Stromsensor unplausibel | 0 | - |
| 0x222280 | interner Sensor DCDC; GT - Spannungssensor unplausibel | 0 | - |
| 0x222281 | interner Sensor DCDC; LV - Stromsensor unplausibel | 0 | - |
| 0x222282 | DCDC, Hardware, Bauteilschutz, Unterschreitung min. GateTreiberspannung | 0 | - |
| 0x222283 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, Kurzschluss nach Masse,Plausible test | 0 | - |
| 0x222284 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Transformer, Kurzschluss nach MassePlausible test | 0 | - |
| 0x222285 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Hochspannungsseite, Kurzschluss nach MassePlausible test | 0 | - |
| 0x222300 | Plausibilität Diagnose RRD inverter temperatur phase U untere Limit unterschritten | 0 | - |
| 0x222301 | Plausibilität Diagnose RRD inverter temperatur phase U obere Limit überschritten | 0 | - |
| 0x222302 | Plausibilität Diagnose RRD inverter temperatur phase V untere Limit unterschritten | 0 | - |
| 0x222303 | Plausibilität Diagnose RRD inverter temperatur phase V obere Limit überschritten | 0 | - |
| 0x222304 | Plausibilität Diagnose RRD inverter temperatur phase W untere Limit unterschritten | 0 | - |
| 0x222305 | Plausibilität Diagnose RRD inverter temperatur phase W obere Limit überschritten | 0 | - |
| 0x222306 | Plausibilität Diagnose GSC inverter gatedriver Temperatur obere Limit überschritten | 0 | - |
| 0x222307 | Plausibilität Diagnose GSC inverter gatedriver Temperatur untere Limit unterschritten | 0 | - |
| 0x222308 | Plausibilität Diagnose CCD inverter gatedriver Temperatur untere Limit unterschritten | 0 | - |
| 0x222309 | Plausibilität Diagnose CCD inverter gatedriver Temperatur obere Limit überschritten | 0 | - |
| 0x22230A | Temperatur der Inverterphasen U oder V nicht plausibel | 0 | - |
| 0x22230B | Temperatur der Inverterphasen V oder W nicht plausibel | 0 | - |
| 0x22230C | Temperatur der Inverterphasen U oder W nicht plausibel | 0 | - |
| 0x22230D | mindestens zwei der drei Invertertemperatursensoren sind fehlerhaft | 0 | - |
| 0x22230E | EME, Plausibilisierung der Reglerspannungen | 0 | - |
| 0x22230F | EME, interner Fehler, Momentenpfad: Abweichung Sollmoment Fehler | 0 | - |
| 0x222310 | Inverter, Temperatur ungültig, nicht kompensierbar | 0 | - |
| 0x222311 | Inverter, Temperatur ungültig, kompensierbar | 0 | - |
| 0x222312 | Inverter, Dauerhafte Übertemperatur IGBT/Diode | 0 | - |
| 0x222313 | Inverter, Erhöhte Temperaturspreizung Platine zu IGBT/Diode | 0 | - |
| 0x222314 | Inverter, Dauerhafte Übertemperatur NTC | 0 | - |
| 0x222315 | Inverter, Dauerhafte Übertemperatur Kühlmittel | 0 | - |
| 0x222316 | Inverter, Fehlerhafter positiver Id-Strom erkannt | 0 | - |
| 0x222317 | Inverter, DC Überstrom erkannt | 0 | - |
| 0x222318 | Inverter, Dauerhafte Übertemperatur am Gatetrieber | 0 | - |
| 0x222319 | Inverter, Übertragener Kühlmittelvolumenstrom unterhalb zulässiger Schwelle | 0 | - |
| 0x22231A | Plausibilität Diagnose Zwischenkreisspannung SRD obere Schwelle überschritten | 0 | - |
| 0x22231B | Plausibilität Diagnose Zwischenkreisspannung SRD untere Schwelle unterschritten | 0 | - |
| 0x22231C | Plausibilität Diagnose MBD DC-Strom sensor obere Schwelle überschritten | 0 | - |
| 0x22231D | Plausibilität Diagnose CCD DC-Strom sensor untere Schwelle unterschritten | 0 | - |
| 0x22231E | Wirkungsgradüberwachung MBD DC-Current sensor obere Schwelle überschritten | 0 | - |
| 0x22231F | Wirkungsgradüberwachung MBD DC-Current sensor untere Schwelle unterschritten | 0 | - |
| 0x222320 | Interne EME-Temperatur Leistungselektronik Pulswechselrichter: Obere Temperaturschwelle überschritten | 0 | - |
| 0x222321 | EME, Stromsensor Phase U: Überstrom oder Sensor defekt | 0 | - |
| 0x222322 | EME, Stromsemnsor Phase V: Überstrom oder Sensor defekt | 0 | - |
| 0x222323 | EME, Stromsemnsor Phase W: Überstrom oder Sensor defekt | 0 | - |
| 0x2223AE | Plausibilität Diagnose CCD GDRV Temperature untere- oder obere Schwelle verletzt. | 0 | - |
| 0x2223B3 | Inverter, E-Maschine Rotolagesensor , Kurzschluss der Sinus- oder der Cosinus Spule/Leitung nach Masse | 0 | - |
| 0x2223B4 | Inverter, E-Maschine Rotolagesensor , Kurzschluss der Sinus- oder der Cosinus Spule/Leitung nach Plus | 0 | - |
| 0x2223B5 | Inverter, E-Maschine Rotolagesensor , Kurzschluss der Erreger Spule/Leitung nach Masse oder Plus | 0 | - |
| 0x2223B6 | Inverter, E-Maschine Rotolagesensor ,Offene Leitung oder Kabelbruch der Sinus, Cosinus oder Erreger Spule/Leitung | 0 | - |
| 0x222500 | interne Ladeelektronik; Charge_Enable Signal nicht vorhanden. | 0 | - |
| 0x222501 | interne Ladeelektronik; AC-Spannung wird nicht gemessen. (Sensordefekt oder Kabelschaden) | 0 | - |
| 0x222502 | interne Ladeelektronik; HV-Spannung zu gering. (Sensordefekt oder Verbindungsschaden) | 0 | - |
| 0x222505 | interne Ladeelektronik;Laden nicht möglich; | 0 | - |
| 0x222506 | SLE, SPI Kommunikation, Lader- nach Controller-Board fehlerhaft | 0 | - |
| 0x222507 | SLE, SPI Kommunikation, Controller- nach Lader-Board fehlerhaft | 0 | - |
| 0x22250D | SLE, Übertemperaturerkennung LLC Trafonsformator, max. Wert überschritten | 0 | - |
| 0x22250F | SLE, Unterspannungserkennung AC Spannung, von Bauteilschutz | 0 | - |
| 0x222510 | interne Ladeelektronik; AC-Spannungssensor unplausibel zu hoch | 0 | - |
| 0x222511 | interne Ladeelektronik; AC-Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x222512 | interne Ladeelektronik; DC (HV)-Spannungssensor unplausibel zu hoch | 0 | - |
| 0x222513 | interne Ladeelektronik; DC (HV)-Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x222514 | interne Ladeelektronik; PFC-Kondensator-Spannungssensor unplausibel zu hoch | 0 | - |
| 0x222515 | interne Ladeelektronik; PFC-Kondensator-Spannungssensor unplausibel zu niedrig | 0 | - |
| 0x222518 | interne Ladeelektronik; DC (HV)-Stromsensor unplausibel zu hoch | 0 | - |
| 0x222519 | interne Ladeelektronik; DC (HV)-Stromsensor unplausibel zu niedrig | 0 | - |
| 0x22251A | interne Ladeelektronik; PFC1 Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22251B | interne Ladeelektronik; PFC1 Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22251C | interne Ladeelektronik; PFC1 Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22251D | interne Ladeelektronik; PFC2Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22251E | interne Ladeelektronik; PFC2Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22251F | interne Ladeelektronik; PFC2Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222520 | interne Ladeelektronik; PFC3Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222521 | interne Ladeelektronik; PFC3Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222522 | interne Ladeelektronik; PFC3Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222523 | interne Ladeelektronik; TransistorTemperatursensor unplausibel zu hoch | 0 | - |
| 0x222524 | interne Ladeelektronik; TransistorTemperatursensor unplausibel zu niedrig | 0 | - |
| 0x222525 | interne Ladeelektronik; TransistorTemperatursensor unplausibel zu niedrig | 0 | - |
| 0x222526 | interne Ladeelektronik; HV (Drossel)Temperatursensor unplausibel zu hoch | 0 | - |
| 0x222527 | interne Ladeelektronik; HV (Drossel)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222528 | interne Ladeelektronik; HV (Drossel)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x222529 | interne Ladeelektronik; HV (Zwischenkreis)Temperatursensor unplausibel zu hoch | 0 | - |
| 0x22252A | interne Ladeelektronik; HV (Zwischenkreis)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22252B | interne Ladeelektronik; HV (Zwischenkreis)Temperatursensor unplausibel zu niedrig | 0 | - |
| 0x22252C | interne Ladeelektronik; Leistungsreduktion (Lader kann nicht mehr die Solleistung liefern) | 0 | - |
| 0x22252D | interne Ladeelektronik; Kein Laden möglich | 0 | - |
| 0x222532 | interne Ladeelektronik; Frequenz nicht zulässig | 0 | - |
| 0x222533 | interne Ladeelektronik; Iststrom ist kleiner als Sollstrom | 0 | - |
| 0x222534 | interne Ladeelektronik; Iststrom ist größer als Sollstrom | 0 | - |
| 0x222535 | interne Ladeelektronik; Istspannung ist kleiner als Sollspannung | 0 | - |
| 0x222536 | interne Ladeelektronik; Istspannung ist größer als Sollspannung | 0 | - |
| 0x222537 | SLE, Hardware, Bauteilschutz, Sammelfehler | 0 | - |
| 0x22253A | HV-Powermanagement, Unplausibler Spannungsausfall | 0 | - |
| 0x22260C | interner Fehler, AEPH, Zwischenkreisspannung oberen Grenzwert überschritten | 0 | - |
| 0x22260D | interner Fehler, AEPH, Zwischenkreisspannung unteren Grenzwert unterschritten | 0 | - |
| 0x22260E | interner Fehler, AEPH, Gatetreiber Zwischenkreisspannung oberen Grenzwert überschritten | 0 | - |
| 0x22260F | interner Fehler, AEPH, Gatetreiber Zwischenkreisspannung unteren Grenzwert unterschritten | 0 | - |
| 0x222624 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC2 oberen Grenzwert überschritten | 0 | - |
| 0x222625 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC2 unteren Grenzwert unterschritten | 0 | - |
| 0x222626 | HW-AKS aktiv, Systemrückmeldung/Folgefehler | 1 | - |
| 0x222627 | HW-Freilauf aktiv, Systemrückmeldung/Folgefehler | 1 | - |
| 0x22262A | Über HVSM ausgelöster AKS ausgelesen über Rückleseleitung von CPLD | 0 | - |
| 0x22262B | Über Komperatur ermittelte Überspannung. Ermittelt über Rückleseleitung des CPLD | 0 | - |
| 0x22262C | Crash. Ermittelt über Rückleseleitung des CPLD | 1 | - |
| 0x22262D | Über HVSM ausgelöster AKS ausgelesen über Rückleseleitung von CPLD | 0 | - |
| 0x22262E | Inverterübertemperatur, Hardwareschaltung. Ermittelt über CPLD Rückleseleitung | 0 | - |
| 0x22262F | 12 V Ausfall des MC2, Hardwareschaltung. Ermittelt über CPLD Rückleseleitung | 0 | - |
| 0x222630 | Phasenüberstrom ermittelt durch Hardwareschaltung. Auslese Rückleseleitung | 0 | - |
| 0x222631 | Von FRM ausgelöster AKS. Ermittelt über CPLD Rückleseleitung.  Ereignis | 1 | - |
| 0x222632 | Sperrzeitüberwachung überschritten, Brückenkurzschluss | 0 | - |
| 0x222633 | AKS Anforderung über CY320-0 | 0 | - |
| 0x222634 | AKS Anforderung über CY320-2 | 0 | - |
| 0x222636 | HV SicherheitsManager, unerwartete aktive Entladung MC0 | 0 | - |
| 0x222701 | interner Fehler, Ebene3, ROM-Fehler mc0 | 0 | - |
| 0x222702 | interner Fehler, Ebene3, RAM-Fehler mc0 | 0 | - |
| 0x222703 | interner Fehler, Ebene3, Stack-Fehler mc0 | 0 | - |
| 0x222704 | interner Fehler, Ebene3, Doppelablage-Fehler mc0 | 0 | - |
| 0x222705 | interner Fehler, Ebene3, Interner ADC-Fehler mc0 | 0 | - |
| 0x222706 | interner Fehler, Ebene3, Programablauf-Fehler mc0 | 0 | - |
| 0x222707 | interner Fehler, Ebene3, Konfigregister-Fehler mc0 | 0 | - |
| 0x222708 | interner Fehler, Ebene3, Ebene2Prime-Fehler mc0 | 0 | - |
| 0x222709 | interner Fehler, Ebene3, Externer Watchdog-Fehler mc0 | 0 | - |
| 0x22270A | FUSI, Längsdynamik: Quadrantenplausibilisierung | 0 | - |
| 0x22270B | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Klemme 30C | 0 | - |
| 0x22270C | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: CY320 MC0 | 0 | - |
| 0x22270D | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: CY320 MC2 | 0 | - |
| 0x22270E | interner Fehler, Ebene3, ROM-Fehler mc2 | 0 | - |
| 0x22270F | interner Fehler, Ebene3, RAM-Fehler mc2 | 0 | - |
| 0x222710 | interner Fehler, Ebene3, Stack-Fehler mc2 | 0 | - |
| 0x222711 | interner Fehler, Ebene3, Doppelablage-Fehler mc2 | 0 | - |
| 0x222712 | interner Fehler, Ebene3, Interner ADC-Fehler mc2 | 0 | - |
| 0x222713 | interner Fehler, Ebene3, Programablauf-Fehler mc2 | 0 | - |
| 0x222714 | interner Fehler, Ebene3, Konfigregister-Fehler mc2 | 0 | - |
| 0x222715 | interner Fehler, Ebene3, Ebene2Prime-Fehler mc2 | 0 | - |
| 0x222716 | interner Fehler, Ebene3, Externer Watchdog-Fehler mc2 | 0 | - |
| 0x222717 | interner Fehler, FUSI, Abschaltpfadtest-Fehler mc2 | 0 | - |
| 0x222718 | interner Fehler, FUSI, aktive Entladung-Fehler | 0 | - |
| 0x222719 | FUSI, Radblockiererkennung: Anforderung AKS aktiv | 0 | - |
| 0x22271A | FUSI, Nullmomentenplausibilisierung aktiv | 0 | - |
| 0x22271B | interner Fehler, HVSM, Zwischenkreisspannung oberen Grenzwert überschritten | 0 | - |
| 0x22271C | interner Fehler, HVSM, Zwischenkreisspannung unteren Grenzwert unterschritten | 0 | - |
| 0x22271D | Funktionssicherheitsmanager, DCDC Gleichrichterabschaltung, Rückmeldung unplausibel | 0 | - |
| 0x22271E | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Hardwarepin | 0 | - |
| 0x22271F | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Airbag SG MRS5 | 0 | - |
| 0x222720 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Dual Port RAM defekt | 0 | - |
| 0x222721 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: eDME | 0 | - |
| 0x222722 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: FUSI Längsdynamik | 0 | - |
| 0x222723 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Phasenüberstrom | 0 | - |
| 0x222724 | Längsdynamik Ebene 2: Sammelfehler Momentgrenzen | 0 | - |
| 0x222725 | Längsdynamik Ebene 2:  Resolverfehler | 0 | - |
| 0x222726 | Längsdynamik Ebene 2: Stromsensorfehler | 0 | - |
| 0x222727 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: FUSI Längsdynamik | 0 | - |
| 0x222728 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Dual Port RAM defekt | 0 | - |
| 0x222729 | Längsdynamik Ebene 2: Sammelfehler MC2 | 0 | - |
| 0x22272A | Längsdynamik Ebene 2: Stromsensorik MC2 | 0 | - |
| 0x22272C | NULL-Zeiger erkannt | 0 | - |
| 0x22272D | NULL-Zeiger erkannt | 0 | - |
| 0x22272E | Laengsdynamik Ebene 2: Rotorlage Übertragungsfehler | 0 | - |
| 0x22272F | interner Fehler, Ebene3, CSFR-Fehler Startup, MC0 | 0 | - |
| 0x222730 | interner Fehler, Ebene3, CSFR-Fehler Zyklic, MC0 | 0 | - |
| 0x222731 | interner Fehler, Ebene3, SFR-Fehler Startup, MC0 | 0 | - |
| 0x222732 | interner Fehler, Ebene3, SFR-Fehler Zyklic, MC0 | 0 | - |
| 0x222733 | interner Fehler, Ebene3, RAM-Fehler Startup, MC0 | 0 | - |
| 0x222734 | interner Fehler, Ebene3, RAM-Fehler Zyklic, MC0 | 0 | - |
| 0x222735 | interner Fehler, Ebene3, RAM-CMEM-Fehler Startup, MC0 | 0 | - |
| 0x222736 | interner Fehler, Ebene3, RAM-CMEM-Fehler Zyklic, MC0 | 0 | - |
| 0x222737 | interner Fehler, Ebene3, ROM-Fehler Startup, MC0 | 0 | - |
| 0x222738 | interner Fehler, Ebene3, ROM-Fehler Zyklic, MC0 | 0 | - |
| 0x222739 | interner Fehler, Ebene3, SBST-Fehler Startup, MC0 | 0 | - |
| 0x22273A | interner Fehler, Ebene3, SBST-Fehler Zyklic, MC0 | 0 | - |
| 0x22273B | interner Fehler, Ebene3, ECC-Fehler Startup, MC0 | 0 | - |
| 0x22273C | interner Fehler, Ebene3, ECC-Fehler Zyklic, MC0 | 0 | - |
| 0x22273D | interner Fehler, Ebene3, PCP-Fehler Startup, MC0 | 0 | - |
| 0x22273E | interner Fehler, Ebene3, PCP-Fehler Zyklic, MC0 | 0 | - |
| 0x22273F | interner Fehler, Ebene3, CSFR-Fehler Startup, MC2 | 0 | - |
| 0x222740 | interner Fehler, Ebene3, CSFR-Fehler Zyklic, MC2 | 0 | - |
| 0x222741 | interner Fehler, Ebene3, SFR-Fehler Startup, MC2 | 0 | - |
| 0x222742 | interner Fehler, Ebene3, SFR-Fehler Zyklic, MC2 | 0 | - |
| 0x222743 | interner Fehler, Ebene3, RAM-Fehler Startup, MC2 | 0 | - |
| 0x222744 | interner Fehler, Ebene3, RAM-Fehler Zyklic, MC2 | 0 | - |
| 0x222745 | interner Fehler, Ebene3, RAM-CMEM-Fehler Startup, MC2 | 0 | - |
| 0x222746 | interner Fehler, Ebene3, RAM-CMEM-Fehler Zyklic, MC2 | 0 | - |
| 0x222747 | interner Fehler, Ebene3, ROM-Fehler Startup, MC2 | 0 | - |
| 0x222748 | interner Fehler, Ebene3, ROM-Fehler Zyklic, MC2 | 0 | - |
| 0x222749 | interner Fehler, Ebene3, SBST-Fehler Startup, MC2 | 0 | - |
| 0x22274A | interner Fehler, Ebene3, SBST-Fehler Zyklic, MC2 | 0 | - |
| 0x22274B | interner Fehler, Ebene3, ECC-Fehler Startup, MC2 | 0 | - |
| 0x22274C | interner Fehler, Ebene3, ECC-Fehler Zyklic, MC2 | 0 | - |
| 0x22274D | interner Fehler, Ebene3, PCP-Fehler Startup, MC2 | 0 | - |
| 0x22274E | interner Fehler, Ebene3, PCP-Fehler Zyklic, MC2 | 0 | - |
| 0x22274F | interner Fehler, Ebene3, MPU-Fehler, MC2 | 0 | - |
| 0x222758 | Internal Failure : Dualstore Error mc0 | 0 | - |
| 0x222759 | Internal Failure : Dualstore Error mc2 | 0 | - |
| 0x22275A | FuSi: Internal Failure : Program Flow Control Error mc0 | 0 | - |
| 0x22275B | FuSi: Internal Failure : Program Flow Control Error mc2 | 0 | - |
| 0x22275E | FUSI MSO AKS Fehler | 0 | - |
| 0x22275F | FUSI MSO RST Fehler | 0 | - |
| 0x222760 | NV Data Corruption on MC0 | 0 | - |
| 0x222761 | NV Data Corruption on MC2 | 0 | - |
| 0x22277A | FuSi Level 2: AKS/FW wegen Überstrom im Kabel AE<->EESS | 0 | - |
| 0x22277B | FuSi Level 2: Inverterstromsensorproblem hinderet Stromüberwachung | 0 | - |
| 0x22277D | ADA, FuSi: ADA Limitation | 1 | - |
| 0x222800 | Lademanagement: Dauerbetätigung Entriegelungstaster bei Typ1-Stecker | 0 | - |
| 0x222805 | Lademanagement: Abstellen der Ladehardware (z.B. Aufgrund von Netzstörungen) | 0 | - |
| 0x222806 | Lademanagement: Signalausfall laderelevanter Singale seitens SME | 0 | - |
| 0x222807 | Lademanagement: HV Ausschaltaufforderer durch Laden gesetzt | 0 | - |
| 0x22280F | HV-Powermanagement: HV Batterie, Isolationsfehler | 1 | - |
| 0x222810 | Lademanagement: Charge Enable elektrischer Fehler | 1 | - |
| 0x222811 | HV-Powermanagement: Bei SOC (HV-Batterie) nahe am SOC_min der HV-Batterie werden im Leistungskoordinator andere Prioritäten gesetzt | 0 | - |
| 0x222812 | HV-Powermanagement: Crash, Zündpille aktiviert | 1 | - |
| 0x222813 | HV-Powermanagement: HV Erstfreigabe erfolgt | 0 | - |
| 0x222814 | HV-Powermanagement:  HV Batterie, Isolationswarnung | 0 | - |
| 0x222815 | HV-Powermanagement: HV Zwischenkreisentladung, HV Zwischenkreis nicht spannungsfrei trotz Anforderung | 1 | - |
| 0x222816 | HV-Powermanagement: Interlock unterbrochen | 0 | - |
| 0x222817 | HV-Powermanagement: HV Batterie, einfacher Schuetzkleber | 0 | - |
| 0x222818 | HV-Powermanagement: HV-batterieloser Betrieb wird verhindert aufgrund Schützkleber | 0 | - |
| 0x222819 | HV-Powermanagement: Unterversorgung 12V-Bordnetz (Ladekontrollleuchte aktiv) | 1 | - |
| 0x22281A | HV-Powermanagement: Externer Crashsensor über CAN, Crash detektiert (wird von BMW-Funktion HVPM eingetragen) | 1 | - |
| 0x22281B | HV-Powermanagement: HV Batterie, doppelter Schuetzkleber | 1 | - |
| 0x22281C | HV-Powermanagement: keine HV-Freigabe trotz Anforderung | 1 | - |
| 0x22281D | HV-Powermanagement: Systembedingte Degradation des DCDC-Wandlers | 1 | - |
| 0x22281F | Lademanagement: CC-Meldung 875, Klappe der Lade-Buchse offen | 0 | - |
| 0x222820 | Lademanagement: CC-Meldung 874, Schnellladen nicht möglich | 0 | - |
| 0x222821 | Lademanagement: CC-Meldung 873, Standardladen nicht möglich | 0 | - |
| 0x222822 | Lademanagement: CC-Meldung 859, Ladestation defekt | 0 | - |
| 0x222824 | HV-Powermanagement: CC-Meldung 794, Antrieb! Demnaechst pruefen | 0 | - |
| 0x222825 | Lademanagement: CC-Meldung 884, Schnellladen aktiv | 0 | - |
| 0x222826 | Lademanagement: CC-Meldung 885, Laden mit redurzierte Leistung | 0 | - |
| 0x22282F | Unplausibilität zwischen Parksperrenposition und Fahrzeuggeschwindigkeit. | 0 | - |
| 0x222831 | HV-Powermanagement: CC-Meldung 636, Hochvoltsystem abgeschaltet | 1 | - |
| 0x222832 | Lademanagement: CC-Meldung 802, Ladekabel pruefen | 1 | - |
| 0x222833 | Lademanagement: CC-Meldung 803, Netzleistung zu gering | 1 | - |
| 0x222834 | Lademanagement: CC-Meldung 804, Laden nicht moeglich | 1 | - |
| 0x222836 | HV-Powermanagement: Signal mind. eines HV-Komp. ausgefallen | 1 | - |
| 0x222839 | Lademanagement: COMBO-Ladeabbruch wegen wechsel Pilotstatus | 0 | - |
| 0x22283A | Lademanagement: Ladeziel nicht erreichbar bei gestelltem Wochentimer | 0 | - |
| 0x22283B | HV-Powermanagement: HV Power Down aufgrund niedrigem Ladezustand HV Batterie | 0 | - |
| 0x22283C | HV-Powermanagement: Hochvoltbatterie - Temperatur kritischer Wert | 0 | - |
| 0x22283D | HV-Powermanagement: Hochvoltbatterie - Temperatur verlässt Normalbereich | 0 | - |
| 0x22283E | HV-Powermanagement: Hochvoltbatterie - Temperatur wieder im Normalbereich | 0 | - |
| 0x22283F | Lademanagement: AC Spannung fehlt nach Ladebeginn | 0 | - |
| 0x222841 | Lademanagement: SLE/KLE in Failsafe | 0 | - |
| 0x222842 | Lademanagement: Ladefehler | 0 | - |
| 0x222843 | Lademanagement: Ladeziel nicht erreichbar (SLE Leistung zu gering) | 0 | - |
| 0x222846 | Lademanagement: Ladestoerung | 0 | - |
| 0x222847 | Lademanagement: Pilotsignal ungueltig | 0 | - |
| 0x222848 | Lademanagement: Pilotsignal ungueltig ausserhalb Ladebereitschaft | 0 | - |
| 0x222849 | Lademanagement: Vorkonditionierung nicht moglich | 0 | - |
| 0x22284A | AE, ELUP, Unterdrucksystem, Förderleistung mechanische Pumpe zu gering, oder Rückschlagventil defekt | 0 | - |
| 0x22284B | Ganghaenger in N Getriebe der elektrische Achse | 1 | - |
| 0x22284C | Ganghaenger im 1. Gang Getriebe der elektrische Achse | 1 | - |
| 0x22284D | Ganghaenger im 2. Gang Getriebe der elektrische Achse | 1 | - |
| 0x22284E | Gang Getriebe der elektrische Achse unbekannt | 1 | - |
| 0x22284F | FIS EWP Zustand unbekannt | 1 | - |
| 0x222850 | Notlaufmanager Folgefehler Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Em meldet AKS und Temperatur oberhalb Temperaturschwelle FIS_BMW_EM1_AKS_TEMP | 1 | - |
| 0x222851 | Interne Getriebeüberwachung -Parkposition aktuell nicht detektierbar | 0 | - |
| 0x222852 | Interne Getriebeüberwachung -Parkposition aktuell eingelegt, aktuell kein Fahrerwunsch Parken vorhanden | 0 | - |
| 0x222853 | Interne Getriebeüberwachung -Parkposition aktuell nicht eingelegt, aktuell Fahrerwunsch Parken vorhanden | 0 | - |
| 0x222854 | Notlaufmanager: Fehler bei der Dignose des Bremspedals BUS Signal:ST_BRG_DV ; internes Signal: St_brg_dv | 1 | - |
| 0x222855 | Notlaufmanager: CCM 848 (China); Fehler aufgrund zu hoher Temperatur der Antriebs-E-Maschine FIS_BMW_CCM848 | 1 | - |
| 0x222856 | Notlaufmanager: Folgefehler; Komponente meldet Fehler DCDC Wanlder DCDC deaktiviert aufgrund zu hohen Stroms FIS_BMW_DCDC_CURT_OFF | 1 | - |
| 0x222857 | Notlaufmanager:Folgefehler; Komponente meldet Fehler DCDC Wandler DCDC deaktiviert aufgrund Hardwarefehler FIS_BMW_DCDC_HWF_OFF | 1 | - |
| 0x222858 | Notlaufmanager: Folgefehler; Komponente meldet Fehler DCDC Wanlder DCDC deaktiviert aufgrund zu hoher Temperatur FIS_BMW_DCDC_OVERTEMP_OFF | 1 | - |
| 0x222859 | Notlaufmanager:Folgefehler; Komponente meldet Fehler DCDC Wanlder DCDC deaktiviert aufgrund Überspannung FIS_BMW_DCDC_VOLT_OFF | 1 | - |
| 0x22285A | Leistungsreduzierung Antrieb Stufe 1 | 1 | - |
| 0x22285B | Leistungsreduzierung Antrieb Stufe 2 | 1 | - |
| 0x22285C | Notlaufmanager: Fehler Antriebs-E-Maschine; Maximale Drehzahl überschritten Die Traktions E-Maschine hat die maximale Drehzahl überschritten FIS_BMW_EM2_NMAX_MECH | 1 | - |
| 0x22285D | Notlaufmanager:Folgefehler; Komponente meldet Fehler Hochvolt Batterie Batterie Service Request FIS_BMW_SME_KAT3 | 1 | - |
| 0x22285E | Notlaufmanager: Folgefehler; Komponente meldet Fehler Hochvolt Batterie 0-Stromanforderung FIS_BMW_SME_KAT5 | 1 | - |
| 0x22285F | Notlaufmanager: Folgefehler;  Komponente meldet Fehler  HV-Batterie : Langsames Öffnen der Schütze FIS_BMW_SME_KAT6 | 1 | - |
| 0x222860 | Notlaufmanager:Folgefehler; Komponente meldet Fehler Hochvolt Batterie: Schnelles Öffnen der Schütze FIS_BMW_SME_KAT7 | 1 | - |
| 0x222861 | Fehler im Kühlsystem der Hochvoltbatterie | 1 | - |
| 0x222862 | Notlaufmanager:Folgefehler; Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Aktiver Kurzschluss, verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_AKS | 1 | - |
| 0x222863 | Notlaufmanager:Folgefehler; Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Freilauf, verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_FREILAUF | 1 | - |
| 0x222864 | Notlaufmanager:Folgefehler; Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) 0-Momentenanforderung, verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_0MDREG | 1 | - |
| 0x222865 | Notlaufmanager: Folgefehler; Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Temperaturfehler, verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_TEMP_EM | 1 | - |
| 0x222866 | Notlaufmanager:Folgefehler;Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Fehler Rotolagesensor, verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_RLS | 1 | - |
| 0x222867 | Notlaufmanager: Folgefehler; Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Hardwarefehler ,  verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_HW_INV | 1 | - |
| 0x222868 | Notlaufmanager:Folgefehler;Komponente meldet Fehler Hochvolt Emaschine der verbrennungsmotorischen Achse (HVSGR) Temperaturfehler Inverter, verbrennungsmotornahe HV E-Maschine FIS_BMW_EM1_TEMP_INV | 1 | - |
| 0x222869 | Notlaufmanager: Folgefehler; Aktiver Kurzschluss , verbrennungsmotorferne/ Traktions- HV E-Maschine  FIS_BMW_EM2_AKS | 1 | - |
| 0x22286A | Notlaufmanager:Folgefehler;Freilaufverbrennungsmotorferne/ Traktions- HV E-MaschineFIS_BMW_EM2_FREILAUF | 1 | - |
| 0x22286B | Notlaufmanager: Folgefehler; 0-Momentenanforderung ,  verbrennungsmotorferne/ Traktions- HV E-Maschine FIS_BMW_EM2_0MDREG | 1 | - |
| 0x22286C | Notlaufmanager: Folgefehler; Temperaturfehler , verbrennungsmotorferne/ Traktions- HV E-Maschine FIS_BMW_EM2_TEMP_EM | 1 | - |
| 0x22286D | Notlaufmanager:Folgefehler;Fehler Rotolagesensor , verbrennungsmotorferne/ Traktions- HV E-Maschine FIS_BMW_EM2_RLS | 1 | - |
| 0x22286E | Notlaufmanager:Folgefehler;Hardwarefehler , verbrennungsmotorferne/ Traktions- HV E-Maschine FIS_BMW_EM2_HW_INV | 1 | - |
| 0x22286F | Notlaufmanager: Folgefehler; Temperaturfehler Inverter  ,  verbrennungsmotorferne/ Traktions- HV E-Maschine FIS_BMW_EM2_TEMP_INV | 1 | - |
| 0x222870 | HV-Powermanagement: wichtige Signale der Antriebselektronik ungültig oder nicht empfangen | 0 | - |
| 0x222871 | HV-Powermanagement: wichtige Signale der HV-Batterie ungültig oder nicht empfangen | 0 | - |
| 0x222872 | Lademanagement, DC-Laden: Ladestation hat einen Fehler im Ladevorgang detektiert | 1 | - |
| 0x222873 | Lademanagement, DC-Laden: Ladestation meldet Ladestation und Fahrzeug nicht kompatibel | 1 | - |
| 0x222874 | Lademanagement, DC-Laden: Fehler der Ladestation gemeldet | 1 | - |
| 0x222875 | Lademanagement, DC-Laden: Keine Verriegelung des Ladesteckers durch die Ladestation | 1 | - |
| 0x222876 | Lademanagement: Kommunikation mit LIM oder Ladestation fehlerhaft | 0 | - |
| 0x222877 | Lademanagement, DC-Laden: Falscher Ladestatus von der Ladestation versendet | 1 | - |
| 0x222878 | Lademanagement, DC-Laden: Keine Rücknahme des Ladestatus durch die Ladestation | 1 | - |
| 0x22287A | Lademanagement, DC-Laden: Signal der Ansteuerungsleitung von der Ladestation unplausibel | 0 | - |
| 0x22287B | Lademanagement, DC-Laden: Abweichung des Ladestroms | 1 | - |
| 0x22287C | Lademanagement, DC-Laden: Spannungsdifferenz zwischen Ladevorrichtung und Hochvolt-Batterie zu groß | 1 | - |
| 0x22287D | Lademanagement, DC-Laden: DC-Ladebox, Schaltschütze unerwartet geöffnet oder nicht angesteuert | 1 | - |
| 0x22287E | Lademanagement, AC-Laden: Netszpannung vorhanden obwohl keine Ladebereitschaft | 1 | - |
| 0x222881 | Lademanagement, DC-Laden: Isolationswächter der Hochvolt-Batterieeinheit nicht richtig angesteuert | 1 | - |
| 0x222882 | Verbrennergebundene E-Maschine defekt und Verbrennungsmotor ist an (Folgefehler) | 1 | - |
| 0x222883 | Verbrennergebundene E-Maschine defekt und Verbrennungsmotor ist aus (Folgefehler) | 1 | - |
| 0x222884 | Notlaufmanager: Folgefehler; Anforderung von der DME:Leistung des elektrischen Kältemittelverdichters reduzieren FIS_BMW_EKK_RED | 1 | - |
| 0x222885 | Notlaufmanager Folgefehler Anforderung von der DME:Kältemittelverdichters deaktivieren FIS_BMW_EKK_DEAK | 1 | - |
| 0x222886 | Anforderung von der DME: Niedrige Drehzahlbegrenzung Automatikgetriebe (Zwangshochschaltung - Folgefehler) | 1 | - |
| 0x222887 | Anforderung von der DME: Hohe Drehzahlbegrenzung Automatikgetriebe (Zwangshochschaltung - Folgefehler) | 1 | - |
| 0x222888 | Notlaufmanager : Signalausfall interner Signalqualifier zeigt Signalausfall an BUS Signal : AVL_OPMO_MOT_TRCT FIS_BMW_BA_EM2_IST_SIGNAL | 0 | - |
| 0x222889 | Notlaufmanager : Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an internes Signal FIS_BMW_MD_EM2_IST_SIGNAL | 0 | - |
| 0x22288A | Notlaufmanager : Fehlerwert Signal interner Signalqualifier zeigt Fehlerwert an internes Signal FIS_BMW_MD_EM2_MOT_MAX_SIGNAL | 1 | - |
| 0x22288B | Signalausfall E-Maschine, der el. Achse | 0 | - |
| 0x22288C | Notlaufmanager:Fehlerwert Signal interner Signalqualifier zeigt Fehlerwert an internes Signal FIS_BMW_MD_EM2_GEN_MAX_SIGNAL | 0 | - |
| 0x22288D | Signalausfall E-Maschine, der el. Achse | 1 | - |
| 0x22288E | Signalausfall E-Maschine, der el. Achse | 0 | - |
| 0x22288F | Signalausfall E-Maschine, der el. Achse | 0 | - |
| 0x222890 | Notlaufmanager : Fehlerwert Signal interner Signalqualifier zeigt Fehlerwert an internes Signal FIS_BMW_N_EM2_IST_SIGNAL | 1 | - |
| 0x222891 | Signalausfall E-Maschine, der el. Achse | 0 | - |
| 0x222892 | Signalausfall E-Maschine, der el. Achse | 0 | - |
| 0x222893 | Signalausfall E-Maschine, der el. Achse | 1 | - |
| 0x222894 | Signalausfall verbrennergebundene E-Maschine | 0 | - |
| 0x222895 | Notlaufmanager:Signalausfall/ Fehlerwertinterner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal :TORQ_AVL_MOT_1 FIS_BMW_MD_EM1_IST_SIGNAL | 0 | - |
| 0x222896 | Notlaufmanager:Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : TORQ_MAX_DRV_MOT_1_AVLB FIS_BMW_MD_EM1_MOT_MAX_SIGNAL | 1 | - |
| 0x222897 | Signalausfall verbrennergebundene E-Maschine | 0 | - |
| 0x222898 | Notlaufmanager:Signalausfall/ Fehlerwertinterner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : TORQ_MAX_RECUP_MOT_1_AVLB FIS_BMW_MD_EM1_GEN_MAX_SIGNAL | 0 | - |
| 0x222899 | Signalausfall verbrennergebundene E-Maschine | 1 | - |
| 0x22289A | Signalausfall verbrennergebundene E-Maschine | 0 | - |
| 0x22289B | Signalausfall verbrennergebundene E-Maschine | 0 | - |
| 0x22289C | Notlaufmanager : Signalausfall/ Fehlerwertinterner Signalqualifier zeigt Signalausfall/ Fehlerwert an   BUS Signal :RPM_AVL_MOT_1, FIS_BMW_N_EM1_IST_SIGNAL | 1 | - |
| 0x22289D | Notlaufmanager : Signalausfall interner Signalqualifier zeigt Signalausfall an BUS Signal : ST_ERR_MOT_1 FIS_BMW_ST_ERR_EM1_SIGNAL | 0 | - |
| 0x22289E | Signalausfall Signal DME zur AE/ EME | 0 | - |
| 0x22289F | Notlaufmanager:Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : AVL_RPM_ENG_CRSH FIS_BMW_NKW_SIGNAL | 1 | - |
| 0x2228A0 | Signalausfall Signal DME zur AE/ EME | 0 | - |
| 0x2228A1 | Signalausfall Signal DME zur AE/ EME | 0 | - |
| 0x2228A2 | Signalausfall Signal DME zur AE/ EME | 1 | - |
| 0x2228A3 | Notlaufmanager : Signalausfall interner Signalqualifier zeigt Signalausfall an BUS Signal : RPM_TAR_EM_2 Signalausfall Signal DME zur AE/ EME FIS_BMW_N_EM1_SOLL_DME_SIGNAL | 0 | - |
| 0x2228A4 | Notlaufmanager:Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : AVL_ANG_ACPD Signalausfall Signal DMEzur AE/ EME FIS_BMW_PWG_IST_SIGNAL | 0 | - |
| 0x2228A5 | Signalausfall Signal DME zur AE/ EME | 1 | - |
| 0x2228A6 | Notlaufmanager:Signalausfall interner Signalqualifier zeigt Signalausfall an BUS Signal : RQ_EMMOD_HYB_DME_2 Signalausfall Signal DME zur AE/ EME FIS_BMW_ST_ANF_NL_DME_2_SIGNAL | 0 | - |
| 0x2228A7 | Signalausfall Signal DME zur AE/ EME | 0 | - |
| 0x2228A8 | Notlaufmanager:Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : CHGCOND_HVSTO Signalausfall Signal SME zur AE/ EME FIS_BMW_SOC_HVB_IST_SIGNAL | 1 | - |
| 0x2228A9 | Notlaufmanager : Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : RQ_CHGCOND_HVSTO_MAX oder RQ_CHGCOND_HVSTO_MIN Signalausfall Signal SME zur AE/ EME FIS_BMW_SOC_HVB_MXMN_SIGNAL | 0 | - |
| 0x2228AA | Notlaufmanager : Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : AVL_I_HVSTO Signalausfall Signal SME zur AE/ EME FIS_BMW_I_BATT_SME_SIGNAL | 0 | - |
| 0x2228AB | Notlaufmanager : Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : AVL_U_HVSTO Signalausfall Signal SME zur AE/ EMEFIS_BMW_U_BATT_SME_SIGNAL | 1 | - |
| 0x2228AC | Notlaufmanager:Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal : V_VEH_COG Signalausfall Signal Fahrzeuggeschwindigkeit DSC zur AE/ EMEFIS_BMW_V_FZG_SIGNAL | 0 | - |
| 0x2228AD | Signalausfall Signal EGS zur AE/ EME | 0 | - |
| 0x2228AE | Notlaufmanager : Signalausfall interner Signalqualifier zeigt Signalausfall an   BUS Signal: RPM_GRDT_NEGL Signalausfall Signal DSC zur AE/ EME FIS_BMW_N_AB_M_SIGNAL | 1 | - |
| 0x2228AF | Notlaufmanager : Signalausfal/ Fehlerwertl interner Signalqualifier zeigt Signalausfall/ Fehlerwert an   BUS Signal : AVL_RPM_WHL_RLH Signalausfall Signal DSC zur AE/ EME  FIS_BMW_N_RAD_HL_SIGNAL | 1 | - |
| 0x2228B0 | Notlaufmanager:Signalausfall/ Fehlerwert interner Signalqualifier zeigt Signalausfall/ Fehlerwert an BUS Signal: AVL_RPM_WHL_RRH Signalausfall Signal DSC zur AE/ EME FIS_BMW_N_RAD_HR_SIGNAL | 1 | - |
| 0x2228B1 | Signalausfall Signal DSC zur AE/ EME | 1 | - |
| 0x2228B2 | Notlaufmanager:Folgefehler; SME meldet Kat 2 Fehler FIS_BMW_SME_KAT2 | 1 | - |
| 0x2228B3 | Notlaufmanager: Folgefehler; SME meldet Kat 4 Fehler FIS_BMW_SME_KAT4 | 1 | - |
| 0x2228B4 | Notlaufmanager Folgefehler Fehler Getriebe  2 (elektrische Achse) Schalten in 2. Gang nicht möglich FIS_BMW_GB2_NO_GEAR_1 | 1 | - |
| 0x2228B5 | Fehler Getriebe 2 (elektrische Achse) Schalten in 1. Gang nicht möglich | 1 | - |
| 0x2228B6 | verbrennergebunden EM ist im Standby/sicheren Zustand | 1 | - |
| 0x2228B7 | Getriebeschaltung in N aufrgung Fehler Funktionssicherheit | 1 | - |
| 0x2228B8 | Notlaufmanager: Folgefehler , DME meldet Fehler Fahrer betätigt SST und bekommt keine Fahrbereitschaft FIS_BMW_NO_DRV_RDY_DRVR_WISH | 1 | - |
| 0x2228B9 | SbW: PMA - Geschwindigkeitsschwelle überschritten D <--> R | 1 | - |
| 0x2228BA | SbW: PMA - Geschwindigkeitsschwelle überschritten P | 1 | - |
| 0x2228BB | Notlaufmanager: Folgefehler; Aktiver Kurzschluss und Übertemperatur der Hochvolt E-Maschine der rein elektrisch angetriebenen Achse FIS_BMW_EM2_AKS_TEMP | 1 | - |
| 0x2228BC | SbW-Lev2: Falsche Soll-Position erkannt | 0 | - |
| 0x2228BD | SbW-Lev2: Falsche Anzeigeposition erkannt | 0 | - |
| 0x2228BE | SbW-Lev2: Anweisung P-Einlegen fehlerhaft erkannt | 0 | - |
| 0x2228BF | SbW-Lev2: Anweisung P-Auslegen fehlerhaft erkannt | 0 | - |
| 0x2228C0 | SbW-Lev2: Nichtschalten von P erkannt | 0 | - |
| 0x2228C1 | HV-Powermanagement: SLE Fehler Vorladung | 1 | - |
| 0x2228C2 | HV-Powermanagement: Vorladung Comboladen konnte nicht abgeschlossen werden | 1 | - |
| 0x2228C3 | Notlaufmanager erkennt Ausfall DME  DME/ eDME sendet mehrere, wichtige Botschaften nicht mehr an AE  FIS_BMW_DME_OFF | 1 | - |
| 0x2228C4 | Notlaufmanager erkennt Ausfall REME ,REME sendet mehrere, wichtige Botschaften nicht mehr an AE FIS_BMW_REME_OFF | 1 | - |
| 0x2228C5 | Notlaufmanager erkennt Ausfall SME SME sendet mehrere, wichtige Botschaften nicht mehr an AE FIS_BMW_SME_OFF | 1 | - |
| 0x2228DA | SbW-Lev2: Ungültige Geschwindigkeit verhindert schalten nach P oder R | 0 | - |
| 0x2228DB | Notlaufmanager: Niedrige Restreichweite Reichweite kleiner Schwelle und Fahrer stellt das Fahrzeug ab FIS_BMW_SOCMIN_KL15 | 1 | - |
| 0x2228DC | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Verlustleistung Leistungselektronik  BUS Signal AVL_PWR_LSS_MOT_1  FIS_BMW_PV_EM1_LE1_SIGNAL | 1 | - |
| 0x2228DE | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Dynamische Stromgrenze bei Entladung BUS Signal:  I_DYN_MAX_DCHG_HVSTO ,FIS_BMW_I_ENTL_MIN_SME_SIGNAL | 1 | - |
| 0x2228E0 | Notlaufmanager : Signalausfall/ Fehlerwert Eingangssignal  AE HYM/ EME;  Signal Übersetzung Hinterachsgetriebe BUS Signal : TRNRAO_BAX,FIS_BMW_I_HA_SIGNAL | 1 | - |
| 0x2228E1 | Notlaufmanager : Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Dynamische Stromgrenze bei Ladung BUS Signal: I_DYN_MAX_CHG_HVSTO, FIS_BMW_I_LAD_MAX_SME_SIGNAL | 1 | - |
| 0x2228E2 | Notlaufmanager : Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Momentaner Strom des Range Extenders, BUS Signal : AVL_I_MOT_1, FIS_BMW_I_REX_IST_SIGNAL | 1 | - |
| 0x2228E3 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Maximales Drehmoment Verbrennungsmotor BUS Signal: TORQ_MAX_CENG ,FIS_BMW_MD_VM_MAX_SIGNAL | 1 | - |
| 0x2228E4 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME;Signal Leistungsvorhalt VM Start BUS Signal:  ST_CENG_STA_PWR_DRV ,FIS_BMW_PE_VM_STRT_SIGNAL | 1 | - |
| 0x2228E5 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signalausfall Eingangssignal AE HYM/ EME; Signal Status Antrieb BUS Signal: ST_DRV_AV ,FIS_BMW_ST_ANTRIEB_IST_SIGNAL | 1 | - |
| 0x2228E6 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Status Antrieb BUS Signal: ST_DRV_TAR,FIS_BMW_ST_ANTRIEB_SOLL_SIGNAL | 1 | - |
| 0x2228E7 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Status Antrieb BUS Signal: ST_DRV_DSTN ,FIS_BMW_ST_ANTRIEB_WUNSCH_SIGNAL | 1 | - |
| 0x2228E8 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME;Status Fahrbereitschaft BUS Signal: ST_RDI_DRVG ,FIS_BMW_ST_FAHRBEREIT_SIGNAL | 1 | - |
| 0x2228E9 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Spannung HVSGR BUS Signal: AVL_U_DC_LINK_MOT_1 ,FIS_BMW_U_REX_IST_SIGNAL | 1 | - |
| 0x2228EA | Notlaufmanager: Fehlerwert Signal Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste verbrennergebundene Hochvolt E-maschine motorisch FIS_BMW_PV_EM1_MDMOTMAX_SIGNAL | 1 | - |
| 0x2228EB | Notlaufmanager:Fehlerwert Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste verbrennergebundene Hochvolt E-maschine generatorisch internes Signal (keine BUS Signal) FIS_BMW_PV_EM1_MDGENMAX_SIGNAL | 1 | - |
| 0x2228EC | Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste Traktions - Hochvolt E-maschine motorischBUS SIgnal:AVL_RPM_WHL_FLHFIS_BMW_N_RAD_VL_SIGNAL | 1 | - |
| 0x2228ED | Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste Traktions - Hochvolt E-maschine generatorischBUS SignalAVL_RPM_WHL_FRH,FIS_BMW_N_RAD_VR_SIGNAL | 1 | - |
| 0x2228EE | Notlaufmanager : Signalausfall oder Fehlerwert Eingangssignal AE HYM/ EME; Signal Sollmoment Traktions- E-Maschine BUS Signal TAR_TORQ_MOT_TRCTFIS_BMW_MD_EM1_SOLL_DME_SIGNAL | 1 | - |
| 0x2228EF | Notlaufmanager : Signalausfall oder Fehlerwert Eingangssignal AE HYM/ EME; Signal Virtuelles Fahrpedal BUS Signal  AVL_ANG_ACPD_VIRT, FIS_BMW_PWG_IST_VIRT_SIGNAL | 1 | - |
| 0x2228F0 | Notlaufmanager : Signalausfall/Fehlerwert Eingangssignal AE HYM/ EME; Signal Status Usecase SOC BUS Signal :ST_MOD_SOC, FIS_BMW_ST_USECASE_SOC_SIGNAL | 1 | - |
| 0x2228F1 | Notlaufmanager : Signalausfall Eingangssignal AE HYM/ EME; Signal Status ABS | 1 | - |
| 0x2228F2 | Notlaufmanager : Folgefehler; Anforderung eDME: Momentenreduzierung verbrennungsmotorgebundene Hochvolt E-Mascchine FIS_BMW_MD_EM1_RED | 1 | - |
| 0x2228F3 | Notlaufmanager : Folgefehler; Erkennung Service Disconnect AE | 1 | - |
| 0x2228F4 | HV-Powermanagement : SME mehrere Werte fehlen auf dem MC0 Fehler in der Erkennung des State of Charge SoC | 0 | - |
| 0x2228F5 | Notlaufmanager: Fehlerwert Signal internes Signal AE HYM/ EME; Signal Drehrichtung Traktions-E-Maschine FIS_BMW_DREHRICHT_EM2_IST_SIGNAL | 1 | - |
| 0x2228F6 | Notlaufmanager: Fehlerwert Signal Eingangssignal AE HYM/ EME; Signal Verlustleistung Leistungselektronik FIS_BMW_PV_EM2_LE2_SIGNAL | 1 | - |
| 0x2228F7 | Notlaufmanager: Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Solldrehrichtung Traktions-E-Maschine  BUS Signal: TAR_DIRRT_MOT_TRCT FIS_BMW_DREHRICHT_EM2_SOLL_SIGNAL | 1 | - |
| 0x2228F8 | Notlaufmanager: Fehlerwert Signal Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste Traktions - Hochvolt E-maschine motorisch FIS_BMW_PV_EM2_MDMOTMAX_SIGNAL | 1 | - |
| 0x2228F9 | Notlaufmanager: Fehlerwert Signal Eingangssignal AE HYM/ EME; Signal Aktuelle Verluste Traktions - Hochvolt E-maschine generatorisch FIS_BMW_PV_EM2_MDGENMAX_SIGNAL | 1 | - |
| 0x2228FA | Notlaufmanager : Signalausfall/ Fehlerwert Eingangssignal AE HYM/ EME; Signal Sollmoment Traktions- E-Maschine BUS Signal:P2_TAR_TORQ_MOT_1_ENGMG FIS_BMW_MD_EM2_SOLL_DME_SIGNAL | 1 | - |
| 0x2228FC | Folgefehler; Anforderung eDME: Momentenreduzierung der Hochvolt E-Maschineder el. angetriebene Achse | 1 | - |
| 0x2228FD | Folgefehler; Anforderung eDME: Drehzahleduzierung der Hochvolt E-Maschineder el. angetriebene Achse | 1 | - |
| 0x2228FE | FIS_HVPM_CCM 880 (Heizen Kühlen im Stand nicht möglich) | 1 | - |
| 0x222900 | Backupladen wurde angefordert | 0 | - |
| 0x222901 | Backupladen wurde mit Fehler abgebrochen | 0 | - |
| 0x222930 | Lademanagement: Werksladen aktiv | 0 | - |
| 0x222931 | Diagnosejob - EME_HVPM_KONFIGURATION_LADEEINSTELLUNG - nicht ausgeführt | 0 | - |
| 0x222A00 | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 1 Kurzschluss zu GND | 0 | - |
| 0x222A02 | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 1 Kurzschluss zu UBAT | 0 | - |
| 0x222A04 | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 2 Kurzschluss zu GND | 0 | - |
| 0x222A06 | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 2 Kurzschluss zu UBAT | 0 | - |
| 0x222A08 | Sensorfehler, Messwerterfassung, Sensor: Bremsunterdrucksensorsignal Kurzschluss zu GND | 0 | - |
| 0x222A0A | Sensorfehler, Messwerterfassung, Sensor: Bremsunterdrucksensorsignal Kurzschluss zu UBAT | 0 | - |
| 0x222A0C | Interner Fehler, Messwerterfassung, interner Sensor defekt MC0 | 0 | - |
| 0x222A0E | Interner Fehler, Messwerterfassung, interner Sensor defekt MC2 | 0 | - |
| 0x222A10 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 1, Kurzschluss nach Ubat | 0 | - |
| 0x222A11 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 1, Kurzschluss nach Masse | 0 | - |
| 0x222A12 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 1, obere Schwelle überschritten | 0 | - |
| 0x222A13 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 1, untere Schwelle unterschritten | 0 | - |
| 0x222A14 | Interner Fehler, Messwerterfassung, Sensor: Bremsunterdrucksensorsignal fehlerhaft | 0 | - |
| 0x222A15 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 2, Kurzschluss nach Ubat | 0 | - |
| 0x222A17 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 2, Kurzschluss nach Masse | 0 | - |
| 0x222A19 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 2, obere Schwelle überschritten | 0 | - |
| 0x222A1B | Interner Fehler, Messwerterfassung, Sensor: Parksperren Rückkopplungsspannung von Halbbrücke 2 exceeded lowertreshold | 0 | - |
| 0x222A1D | Interner Fehler, Messwerterfassung, Sensor: Strom Rückmessung vom Parksperren Aktuator, Kurzschluss nach Ubat | 0 | - |
| 0x222A1F | Interner Fehler, Messwerterfassung, Sensor: Strom Rückmessung vom Parksperren Aktuator, Kurzschluss nach Masse | 0 | - |
| 0x222A21 | Interner Fehler, Messwerterfassung, Sensor: Strom Rückmessung vom Parksperren Aktuator, obere Schwelle überschritten | 0 | - |
| 0x222A23 | Interner Fehler, Messwerterfassung, Sensor: Strom Rückmessung vom Parksperren Aktuator, untere Schwelle unterschritten | 0 | - |
| 0x222A25 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Aktuatorstrom von der Notentriegelung, Kurzschluss nach Ubat | 0 | - |
| 0x222A27 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Aktuatorstrom von der Notentriegelung, Kurzschluss nach Masse | 0 | - |
| 0x222A29 | Interner Fehler, Messwerterfassung, Sensor: Parksperren Aktuatorstrom von der Notentriegelung, obere Schwelle überschritten | 0 | - |
| 0x222A2B | Interner Fehler, Messwerterfassung, Sensor: Parksperren Aktuatorstrom von der Notentriegelung, untere Schwelle unterschritten | 0 | - |
| 0x222A2D | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 1, Kurzschluss nach Ubat | 0 | - |
| 0x222A2F | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 1, Kurzschluss nach Masse | 0 | - |
| 0x222A31 | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 1, obere Schwelle überschritten | 0 | - |
| 0x222A33 | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 1, untere Schwelle unterschritten | 0 | - |
| 0x222A35 | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 2, Kurzschluss nach Ubat | 0 | - |
| 0x222A37 | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 2, Kurzschluss nach Masse | 0 | - |
| 0x222A39 | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 2, obere Schwelle überschritten | 0 | - |
| 0x222A3B | Interner Fehler, Messwerterfassung, Sensor: Spannungsrückmeldung des 2-Gang Getriebes der Halbbrücke 2, untere Schwelle unterschritten | 0 | - |
| 0x222A3D | Interner Fehler, Messwerterfassung, Sensor: Aktuator Strom des 2-Gang Getriebes, Kurzschluss nach Ubat | 0 | - |
| 0x222A3F | Interner Fehler, Messwerterfassung, Sensor: Aktuator Strom des 2-Gang Getriebes, Kurzschluss nach Masse | 0 | - |
| 0x222A41 | Interner Fehler, Messwerterfassung, Sensor: Aktuator Strom des 2-Gang Getriebes, obere Schwelle überschritten | 0 | - |
| 0x222A43 | Interner Fehler, Messwerterfassung, Sensor: Aktuator Strom des 2-Gang Getriebes, untere Schwelle unterschritten | 0 | - |
| 0x222A45 | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , Kurzschluss nach Ubat | 0 | - |
| 0x222A47 | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , Kurzschluss nach Masse | 0 | - |
| 0x222A49 | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , obere Schwelle überschritten | 0 | - |
| 0x222A4B | Interner Fehler, Messwerterfassung, Sensor:  Strom der Elektrischen Vakuum Pumpe , untere Schwelle unterschritten | 0 | - |
| 0x222A4D | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), Kurzschluss nach Ubat | 0 | - |
| 0x222A4F | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), Kurzschluss nach Masse | 0 | - |
| 0x222A51 | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), obere Schwelle überschritten | 0 | - |
| 0x222A53 | Interner Fehler, Messwerterfassung, Sensor: Spannung Vakuum Pumpe(für Diagnose), untere Schwelle unterschritten | 0 | - |
| 0x222A55 | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, Kurzschluss nach Ubat | 0 | - |
| 0x222A57 | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, Kurzschluss nach Masse | 0 | - |
| 0x222A59 | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, obere Schwelle überschritten | 0 | - |
| 0x222A5B | Interner Fehler, Messwerterfassung, Sensor: ELUP_LE Temperatur, untere Schwelle unterschritten | 0 | - |
| 0x222A5D | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, Kurzschluss nach Ubat | 0 | - |
| 0x222A5F | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, Kurzschluss nach Masse | 0 | - |
| 0x222A61 | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, obere Schwelle überschritten | 0 | - |
| 0x222A63 | Interner Fehler, Messwerterfassung, Sensor: Interne 12V Spannung, analoges Signal, untere Schwelle unterschritten | 0 | - |
| 0x222A65 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, Kurzschluss nach Ubat | 0 | - |
| 0x222A67 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, Kurzschluss nach Masse | 0 | - |
| 0x222A69 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, obere Schwelle überschritten | 0 | - |
| 0x222A6B | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC0, untere Schwelle unterschritten | 0 | - |
| 0x222A6D | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, Kurzschluss nach Ubat | 0 | - |
| 0x222A6F | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, Kurzschluss nach Masse | 0 | - |
| 0x222A71 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, obere Schwelle überschritten | 0 | - |
| 0x222A73 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC0, untere Schwelle unterschritten | 0 | - |
| 0x222A75 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, Kurzschluss nach Ubat | 0 | - |
| 0x222A77 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, Kurzschluss nach Masse | 0 | - |
| 0x222A79 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, obere Schwelle überschritten | 0 | - |
| 0x222A7B | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC0, untere Schwelle unterschritten | 0 | - |
| 0x222A7D | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, Kurzschluss nach Ubat | 0 | - |
| 0x222A7F | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, Kurzschluss nach Masse | 0 | - |
| 0x222A81 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, obere Schwelle überschritten | 0 | - |
| 0x222A83 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 1, untere Schwelle unterschritten | 0 | - |
| 0x222A85 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2, Kurzschluss nach Ubat | 0 | - |
| 0x222A86 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2, Kurzschluss nach Masse | 0 | - |
| 0x222A88 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2, obere Schwelle überschritten | 0 | - |
| 0x222A8A | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 2 exceeded lowertreshold | 0 | - |
| 0x222A8C | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, Kurzschluss nach Ubat | 0 | - |
| 0x222A8E | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, Kurzschluss nach Masse | 0 | - |
| 0x222A90 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, obere Schwelle überschritten | 0 | - |
| 0x222A92 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Spannungsversorgung 3, untere Schwelle unterschritten | 0 | - |
| 0x222A94 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, Kurzschluss nach Ubat | 0 | - |
| 0x222A96 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, Kurzschluss nach Masse | 0 | - |
| 0x222A98 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, obere Schwelle überschritten | 0 | - |
| 0x222A9A | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 5V of CY320_MC2, untere Schwelle unterschritten | 0 | - |
| 0x222A9C | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, Kurzschluss nach Ubat | 0 | - |
| 0x222A9E | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, Kurzschluss nach Masse | 0 | - |
| 0x222AA0 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, obere Schwelle überschritten | 0 | - |
| 0x222AA2 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 3V3 of CY320_MC2, untere Schwelle unterschritten | 0 | - |
| 0x222AA4 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, Kurzschluss nach Ubat | 0 | - |
| 0x222AA6 | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus) hast shortcut to ground | 0 | - |
| 0x222AA8 | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus) hat Kurzschluss nach Batterie | 0 | - |
| 0x222AAA | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), Kurzschluss nach Masse | 0 | - |
| 0x222AAC | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), Kurzschluss nach Ubat | 0 | - |
| 0x222AAE | EM Temperatur Spulenende, Kurzschluss nach Masse | 0 | - |
| 0x222AB0 | EM Temperatur Spulenende, Kurzschluss nach Ubat | 0 | - |
| 0x222AB2 | EM Temperatur Stator, Kurzschluss nach Masse | 0 | - |
| 0x222AB4 | EM Temperatur Stator, Kurzschluss nach Ubat | 0 | - |
| 0x222AB6 | INV DC Strom vom/zum Inverter, Kurzschluss nach Masse | 0 | - |
| 0x222AB8 | INV DC Strom vom/zum Inverter, Kurzschluss nach Ubat | 0 | - |
| 0x222AB9 | INV Temperatur heissester Gate Treiber (phase W), Kurzschluss nach Masse | 0 | - |
| 0x222ABA | INV Temperatur heissester Gate Treiber (phase W), Kurzschluss nach Ubat | 0 | - |
| 0x222ABB | INV Temperatur IGBT U, Kurzschluss nach Masse | 0 | - |
| 0x222ABC | INV Temperatur IGBT U, Kurzschluss nach Ubat | 0 | - |
| 0x222ABD | INV Temperatur IGBT V, Kurzschluss nach Masse | 0 | - |
| 0x222ABE | INV Temperatur IGBT V, Kurzschluss nach Ubat | 0 | - |
| 0x222ABF | INV Temperatur IGBT W, Kurzschluss nach Masse | 0 | - |
| 0x222AC0 | INV Temperatur IGBT W, Kurzschluss nach Ubat | 0 | - |
| 0x222AC1 | INV Strom Phase U, Kurzschluss nach Masse | 0 | - |
| 0x222AC2 | INV Strom Phase U, Kurzschluss nach Ubat | 0 | - |
| 0x222AC3 | INV Strom Phase V, Kurzschluss nach Masse | 0 | - |
| 0x222AC4 | INV Strom Phase V, Kurzschluss nach Ubat | 0 | - |
| 0x222AC5 | INV Strom Phase W, Kurzschluss nach Masse | 0 | - |
| 0x222AC6 | INV Strom Phase W, Kurzschluss nach Ubat | 0 | - |
| 0x222AC7 | INV ZK-Spannung(=Spannung HV-Batterie), Kurzschluss nach Masse | 0 | - |
| 0x222AC8 | INV ZK-Spannung(=Spannung HV-Batterie), Kurzschluss nach Ubat | 0 | - |
| 0x222AC9 | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus), obere Schwelle überschritten | 0 | - |
| 0x222ACA | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (sinus), untere Schwelle unterschritten | 0 | - |
| 0x222ACB | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), obere Schwelle überschritten | 0 | - |
| 0x222ACC | EM Vom Resolver generiertes Rückgabesignal - sekundär Signal (cosinus), untere Schwelle unterschritten | 0 | - |
| 0x222ACD | EM Temperatur Spulenende, obere Schwelle überschritten | 0 | - |
| 0x222ACE | EM Temperatur Spulenende, untere Schwelle unterschritten | 0 | - |
| 0x222ACF | EM Temperatur Stator, obere Schwelle überschritten | 0 | - |
| 0x222AD0 | EM Temperatur Stator, untere Schwelle unterschritten | 0 | - |
| 0x222AD1 | INV DC Strom vom/zum Inverter, obere Schwelle überschritten | 0 | - |
| 0x222AD2 | INV DC Strom vom/zum Inverter, untere Schwelle unterschritten | 0 | - |
| 0x222AD3 | INV Temperatur heissester Gate Treiber (phase W), obere Schwelle überschritten | 0 | - |
| 0x222AD4 | INV Temperatur heissester Gate Treiber (phase W), untere Schwelle unterschritten | 0 | - |
| 0x222AD5 | INV Temperatur IGBT U, obere Schwelle überschritten | 0 | - |
| 0x222AD6 | INV Temperatur IGBT U, untere Schwelle unterschritten | 0 | - |
| 0x222AD7 | INV Temperatur IGBT V, obere Schwelle überschritten | 0 | - |
| 0x222AD8 | INV Temperatur IGBT V, untere Schwelle unterschritten | 0 | - |
| 0x222AD9 | INV Temperatur IGBT W, obere Schwelle überschritten | 0 | - |
| 0x222ADA | INV Temperatur IGBT W, untere Schwelle unterschritten | 0 | - |
| 0x222ADB | INV inverter Strom Phase U, obere Schwelle überschritten | 0 | - |
| 0x222ADC | INV Strom IGBT Phase U, untere Schwelle unterschritten | 0 | - |
| 0x222ADD | INV Strom Phase V, obere Schwelle überschritten | 0 | - |
| 0x222ADE | INV Strom Phase V, untere Schwelle unterschritten | 0 | - |
| 0x222ADF | INV Strom Phase W, obere Schwelle überschritten | 0 | - |
| 0x222AE0 | INV Strom Phase W, untere Schwelle unterschritten | 0 | - |
| 0x222AE1 | INV ZK-Spannung(=Spannung HV-Batterie), obere Schwelle überschritten | 0 | - |
| 0x222AE2 | INV ZK-Spannung(=Spannung HV-Batterie), untere Schwelle unterschritten | 0 | - |
| 0x222AE3 | SLE AC-Spannung Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AE5 | SLE  PFC-Spannung Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AE7 | SLE  Zwischenkreis-Spannung Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEB | SLE HV Strom Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEE | SLE LLC-Temperatursensor  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF0 | SLE Transformator Temperatursensor Sensor  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF2 | SLE Drossel (HV) Temperatur  obere Schwelle  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF4 | SLE PFC_T_Sensor_1  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF6 | SLE PFC_T_Sensor_2  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF8 | SLE PFC_T_Sensor_3  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AF9 | SLE AC-Spannung hat obere Schwelle überschritten | 0 | - |
| 0x222AFB | SLE  PFC-Spannung hat obere Schwelle überschritten | 0 | - |
| 0x222AFD | SLE  Zwischenkreis-Spannung hat obere Schwelle überschritten | 0 | - |
| 0x222B01 | SLE HV Strom hat obere Schwelle überschritten | 0 | - |
| 0x222B03 | SLE LLC-Temperatursensor hat obere Schwelle überschritten | 0 | - |
| 0x222B05 | SLE Transformator Temperatursensor hat obere Schwelle überschritten | 0 | - |
| 0x222B07 | SLE Drossel (HV)  Temperatur hat obere Schwelle überschritten | 0 | - |
| 0x222B09 | SLE PFC_T_Sensor_1 hat obere Schwelle überschritten | 0 | - |
| 0x222B0B | SLE PFC_T_Sensor_2 hat obere Schwelle überschritten | 0 | - |
| 0x222B0D | SLE PFC_T_Sensor_3 hat obere Schwelle überschritten | 0 | - |
| 0x222B0F | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, Kurzschluss nach Masse | 0 | - |
| 0x222B10 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, obere Schwelle überschritten | 0 | - |
| 0x222B11 | Interner Fehler, Messwerterfassung, Sensor: Interne Spannungsüberwachung 1V5 of CY320_MC2, untere Schwelle unterschritten | 0 | - |
| 0x222B12 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, Kurzschluss nach Ubat | 0 | - |
| 0x222B13 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, Kurzschluss nach Masse | 0 | - |
| 0x222B14 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, obere Schwelle überschritten | 0 | - |
| 0x222B15 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 1, untere Schwelle unterschritten | 0 | - |
| 0x222B16 | Interner Fehler, Messwerterfassung, Sensor:CY320 MC2 Spannungsversorgung 2, Kurzschluss nach Ubat | 0 | - |
| 0x222B17 | Interner Fehler, Messwerterfassung, Sensor:CY320 MC2 Spannungsversorgung 2, Kurzschluss nach Masse | 0 | - |
| 0x222B18 | Interner Fehler, Messwerterfassung, Sensor:CY320 MC2 Spannungsversorgung 2 exceeded upper voltage | 0 | - |
| 0x222B19 | Interner Fehler, Messwerterfassung, Sensor:CY320 MC2 Spannungsversorgung 2 exceeded lower voltage | 0 | - |
| 0x222B1A | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 3, Kurzschluss nach Ubat | 0 | - |
| 0x222B1B | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 3, Kurzschluss nach Masse | 0 | - |
| 0x222B1C | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 3, obere Schwelle überschritten | 0 | - |
| 0x222B1D | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Spannungsversorgung 3, untere Schwelle unterschritten | 0 | - |
| 0x222B1E | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, Kurzschluss nach Ubat | 0 | - |
| 0x222B1F | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, Kurzschluss nach Masse | 0 | - |
| 0x222B20 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, obere Schwelle überschritten | 0 | - |
| 0x222B21 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interen Spannung32 V, untere Schwelle unterschritten | 0 | - |
| 0x222B22 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, Kurzschluss nach Ubat | 0 | - |
| 0x222B23 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, Kurzschluss nach Masse | 0 | - |
| 0x222B24 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, obere Schwelle überschritten | 0 | - |
| 0x222B25 | Interner Fehler, Messwerterfassung, Sensor: Temperatur des Phasenstromsensors, untere Schwelle unterschritten | 0 | - |
| 0x222B26 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, Kurzschluss nach Ubat | 0 | - |
| 0x222B27 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, Kurzschluss nach Masse | 0 | - |
| 0x222B28 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, obere Schwelle überschritten | 0 | - |
| 0x222B29 | Interner Fehler, Messwerterfassung, Sensor: Massefehler bei Diagnoseeingangsspannung, untere Schwelle unterschritten | 0 | - |
| 0x222B2A | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, Kurzschluss nach Ubat | 0 | - |
| 0x222B2B | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, Kurzschluss nach Masse | 0 | - |
| 0x222B2C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, obere Schwelle überschritten | 0 | - |
| 0x222B2D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 1, untere Schwelle unterschritten | 0 | - |
| 0x222B2E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, Kurzschluss nach Ubat | 0 | - |
| 0x222B2F | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, Kurzschluss nach Masse | 0 | - |
| 0x222B30 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, obere Schwelle überschritten | 0 | - |
| 0x222B31 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzstellerstrom 2, untere Schwelle unterschritten | 0 | - |
| 0x222B32 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, Kurzschluss nach Ubat | 0 | - |
| 0x222B33 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, Kurzschluss nach Masse | 0 | - |
| 0x222B34 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, obere Schwelle überschritten | 0 | - |
| 0x222B35 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktumrichter, untere Schwelle unterschritten | 0 | - |
| 0x222B36 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, Kurzschluss nach Ubat | 0 | - |
| 0x222B37 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, Kurzschluss nach Masse | 0 | - |
| 0x222B38 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, obere Schwelle überschritten | 0 | - |
| 0x222B39 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller, untere Schwelle unterschritten | 0 | - |
| 0x222B3A | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, Kurzschluss nach Ubat | 0 | - |
| 0x222B3B | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, Kurzschluss nach Masse | 0 | - |
| 0x222B3C | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, obere Schwelle überschritten | 0 | - |
| 0x222B3D | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter, untere Schwelle unterschritten | 0 | - |
| 0x222B3E | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B3F | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B40 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, obere Schwelle überschritten | 0 | - |
| 0x222B41 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B42 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B43 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B44 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B45 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Spannung Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B46 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B47 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B48 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B49 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B4A | ELUP, Sensor: Unterdrucksensor Wert zu groß | 0 | - |
| 0x222B4B | ELUP, Sensor: Unterdrucksensor Wert zu klein | 0 | - |
| 0x222B4C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B4D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B4E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B4F | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B50 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, Kurzschluss nach Ubat | 0 | - |
| 0x222B51 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, Kurzschluss nach Masse | 0 | - |
| 0x222B52 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, obere Schwelle überschritten | 0 | - |
| 0x222B53 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Strom 2 Niederspannungsseite, untere Schwelle unterschritten | 0 | - |
| 0x222B54 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, Kurzschluss nach Ubat | 0 | - |
| 0x222B55 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, Kurzschluss nach Masse | 0 | - |
| 0x222B56 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, obere Schwelle überschritten | 0 | - |
| 0x222B57 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Umformer, untere Schwelle unterschritten | 0 | - |
| 0x222B58 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, Kurzschluss nach Ubat | 0 | - |
| 0x222B59 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, Kurzschluss nach Masse | 0 | - |
| 0x222B5A | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, obere Schwelle überschritten | 0 | - |
| 0x222B5B | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Umformer, untere Schwelle unterschritten | 0 | - |
| 0x222B5C | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, Kurzschluss nach Ubat | 0 | - |
| 0x222B5D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, Kurzschluss nach Masse | 0 | - |
| 0x222B5E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, obere Schwelle überschritten | 0 | - |
| 0x222B5F | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gate Treiber Spannung, untere Schwelle unterschritten | 0 | - |
| 0x222B60 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B61 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B62 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, obere Schwelle überschritten | 0 | - |
| 0x222B63 | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungs Eingang DCDC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B64 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B65 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B66 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, obere Schwelle überschritten | 0 | - |
| 0x222B67 | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungs Eingang DCDC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B68 | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, Kurzschluss nach Ubat | 0 | - |
| 0x222B69 | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, Kurzschluss nach Masse | 0 | - |
| 0x222B6A | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, obere Schwelle überschritten | 0 | - |
| 0x222B6B | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungs Eingang DCDC Board, untere Schwelle unterschritten | 0 | - |
| 0x222B6C | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, Kurzschluss nach Ubat | 0 | - |
| 0x222B6D | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, Kurzschluss nach Masse | 0 | - |
| 0x222B6E | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, obere Schwelle überschritten | 0 | - |
| 0x222B6F | Interner Fehler, Messwerterfassung, Sensor: Gefilterter DCDC Umrichter Strom, untere Schwelle unterschritten | 0 | - |
| 0x222C01 | interner Fehler, FZM: Systemzustand unplausibel | 0 | - |
| 0x222C02 | EWS Manipulationsschutz: erwartete Antwort unplausibel | 0 | - |
| 0x222C03 | EME durch EWS gesperrt | 0 | - |
| 0x222C04 | Interner Fehler, HVIL, KS Eingang gegen Masse oder KS Ausgang gegen B+ | 0 | - |
| 0x222C05 | Interner Fehler, HVIL, KS Eingang gegen B+ oder KS Ausgang gegen Masse | 0 | - |
| 0x222C06 | Interner Fehler, HVIL, Kurzschluss Eingang gegen Ausgang oder Leitung offen | 0 | - |
| 0x222C07 | Interner Fehler, HVIL, fehlerhaftes Signal | 0 | - |
| 0x222C08 | Interner Fehler, Montagemodus aktiv | 0 | - |
| 0x222C09 | Interner Fehler, Freilauf Modus aktiv | 0 | - |
| 0x222C0A | Interner Fehler, Freilauf Modus und 6km/h überschritten | 0 | - |
| 0x222C0B | Interner Fehler, Reset auf MC0 | 0 | - |
| 0x222C0C | Interner Fehler, Reset auf MC2 | 0 | - |
| 0x222D00 | ELUP: Betriebsbedingungen der Elup nicht erfüllt. Mögliche Ursache ist Spannung außerhalb von 9 - 16 V | 0 | - |
| 0x222D02 | ELUP, Aktuator: keine Gegeninduktion | 0 | - |
| 0x222D03 | ELUP, Aktuator: Kurzschluss nach Plus | 0 | - |
| 0x222D04 | ELUP, Aktuator: Kurzschluss nach Masse | 0 | - |
| 0x222D05 | ELUP, Aktuator: Unterbrechung oder nicht angesteckt | 0 | - |
| 0x222D06 | ELUP, Treiber: Strom zu hoch | 0 | - |
| 0x222D07 | ELUP, Treiber: Schaltet nicht durch | 0 | - |
| 0x222D08 | ELUP, Treiber: Temperatur zu hoch | 0 | - |
| 0x222D09 | ELUP, Sensor: Temperatur Sensor defekt | 0 | - |
| 0x222D0A | AE, ELUP, Unterdrucksystem, Lekage erkannt | 0 | - |
| 0x222D0B | AE, ELUP, Unterdrucksystem, Elektrische Unterdruckpumpe maximale Laufzeit überschritten (Dauerlauf) | 0 | - |
| 0x222D0C | AE, ELUP, Unterdrucksystem, Elektrische Unterdruckpumpe Förderleistung zu gering | 0 | - |
| 0x222D0D | AE, ELUP, Unterdrucksystem, Unterdruckniveau zu gering | 0 | - |
| 0x222D0E | AE, ELUP, Unterdrucksystem, Unterdrucksensor Messwert außerhalb gültigem Bereich | 0 | - |
| 0x222D0F | ELUP, Aktuator: Maximale Laufzeit ELUP überschritten | 0 | - |
| 0x222D1D | Parksperre, Sensor: Signal 1 Kurzschluss nach Masse | 0 | - |
| 0x222D1E | Parksperre, Sensor: Signal 1 Kurzschluss nach Plus | 0 | - |
| 0x222D1F | Parksperre, Sensor: Signal 2 Kurzschluss nach Masse | 0 | - |
| 0x222D20 | Parksperre, Sensor: Signal 2 Kurzschluss nach Plus | 0 | - |
| 0x222D21 | Parksperre, Sensor: Sensoren inkonsistent | 0 | - |
| 0x222D22 | Parksprerre, HB-Spannung: nicht im zulässigen Bereich | 0 | - |
| 0x222D23 | Parksprerre, Aktuator: Maximalstromüberwachung | 0 | - |
| 0x222D24 | Parksperre, Aktuator: PS-Position in der zulässigen Zeit nicht erreicht | 0 | - |
| 0x222D25 | Parksperre, Aktuator: keine Änderung der PS-Position | 0 | - |
| 0x222D26 | Parksperre, Aktuator: angeforderte Position konnte nicht erreicht werden | 0 | - |
| 0x222D27 | Parksperre, Init: Keine Daten für PS offen/geschlossen im NV-Ram vorhanden | 0 | - |
| 0x222D28 | Parksperre, EWS: Abgleich nicht erfolgreich | 0 | - |
| 0x222D29 | Parksperre, FUSI: Ebene1/Ebene2 Fehler | 0 | - |
| 0x222D2A | Parksperre, Strommittelwert Kabel PS-Aktuator zu hoch | 0 | - |
| 0x222D80 | Abschaltung der Elup wegen zu hoher Eingangsspannung | 1 | - |
| 0x222D81 | Abschaltung der Elup wegen zu geringer Eingangsspannung | 1 | - |
| 0x2233B9 | Inverter 1 Verbrennernah - Niedertemperatur Kreislauf - Kühlleistung unplausibel | 1 | - |
| 0x2233BA | Inverter 2 Verbrennerfern- Niedertemperatur Kreislauf - Kühlleistung unplausibel | 1 | - |
| 0x2233BB | FUSI - Längsdynamik: Überwachung der Raddrehzahl | 0 | - |
| 0xCF840A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xCF8486 | A-CAN Control Module Bus OFF | 0 | - |
| 0xCF8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCF9400 | FA-CAN, Botschaft ausgefallen, A_TEMP | 1 | - |
| 0xCF9401 | FA-CAN, Botschaft ausgefallen, DT_EL_GEY | 1 | - |
| 0xCF9402 | A-CAN, Botschaft ausgefallen, DT_HVSTO | 1 | - |
| 0xCF9403 | FA-CAN, Botschaft ausgefallen FLLUPT_GPWSUP | 1 | - |
| 0xCF9404 | FA-CAN, Botschaft ausgefallen, FZZSTD | 1 | - |
| 0xCF9405 | FA-CAN, Botschaft ausgefallen KLEMMEN | 1 | - |
| 0xCF9406 | A-CAN, Botschaft ausgefallen LIM_CHG_DCHG_HVSTO | 1 | - |
| 0xCF9407 | A-CAN, Botschaft ausgefallen, MOD_VC | 1 | - |
| 0xCF9408 | A-CAN, Botschaft ausgefallen OBD_INQY_LIM_TORQ | 1 | - |
| 0xCF9409 | A-CAN, Botschaft ausgefallen PWMG_LV | 1 | - |
| 0xCF940A | FA-CAN, Botschaft ausgefallen, RQ_AIC | 1 | - |
| 0xCF940B | A-CAN, CAN_Signal ungültig RQ_ELUP, Botschaft ELUP_SPEC | 1 | - |
| 0xCF940C | A-CAN, Botschaft ausgefallen, SAFG_PT | 1 | - |
| 0xCF940D | A-CAN, Botschaft ausgefallen ST_CHG_HVSTO_2 | 1 | - |
| 0xCF940E | A-CAN, Botschaft ausgefallen, ST_CHG_HVSTO_3 | 1 | - |
| 0xCF940F | FA-CAN, Botschaft ausgefallen, ST_CHGINTF | 1 | - |
| 0xCF9410 | FA-CAN, Botschaft ausgefallen, ST_CHGINTF_2 | 1 | - |
| 0xCF9411 | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_1_PT | 1 | - |
| 0xCF9412 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_1_PT | 1 | - |
| 0xCF9413 | A-CAN, Botschaft ausgefallen, ST_DIAG_OBD_2_PT | 1 | - |
| 0xCF9414 | A-CAN, Alive-Counter Fehler ST_DIAG_OBD_2_PT | 1 | - |
| 0xCF9415 | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_3_PT | 1 | - |
| 0xCF9416 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_3_PT | 1 | - |
| 0xCF941D | A-CAN, Botschaft ausgefallen, ST_HVSTO_1 | 1 | - |
| 0xCF941E | A-CAN, Botschaft ausgefallen ST_HYB_2 | 1 | - |
| 0xCF941F | A-CAN, Botschaft ausgefallen STAT_HVSTO_2 | 1 | - |
| 0xCF9420 | FA-CAN, Botschaft ausgefallen UHRZEIT_DATUM | 1 | - |
| 0xCF9421 | A-CAN, Botschaft ausgefallen, FRC_OPRNG_MOT_1 | 1 | - |
| 0xCF9422 | A-CAN, Botschaft ausgefallen, INFO_MOT_1 | 1 | - |
| 0xCF9423 | Flexray, Alive-Counter Fehler, KLEMMEN | 1 | - |
| 0xCF9424 | FA-CAN, CRC-Fehler KLEMMEN | 1 | - |
| 0xCF9425 | FA-CAN, Botschaft ausgefallen, RELATIVZEIT | 1 | - |
| 0xCF9426 | FA-CAN, Botschaft ausgefallen, RLS_COOL_HVSTO | 1 | - |
| 0xCF9427 | A-CAN, Alive-Counter Fehler SAFG_PT | 1 | - |
| 0xCF9428 | A-CAN, CRC-Fehler SAFG_PT | 1 | - |
| 0xCF9429 | A-CAN, Botschaft ausgefallen ST_DIAG_OBD_4_PT | 1 | - |
| 0xCF942A | A-CAN, Alive-Counter Fehler  ST_DIAG_OBD_4_PT | 1 | - |
| 0xCF942B | FA-CAN, Botschaft ausgefallen, ST_GWS | 1 | - |
| 0xCF942C | FA-CAN, Alive-Counter Fehler, ST_GWS | 1 | - |
| 0xCF942D | FA-CAN, CRC-Fehler ST_GWS | 1 | - |
| 0xCF942E | A-CAN, Botschaft ausgefallen, ST_HT_HVSTO | 1 | - |
| 0xCF942F | A-CAN, Botschaft ausgefallen, ST_INFO_CENG | 1 | - |
| 0xCF9430 | FA-CAN, Botschaft ausgefallen STAT_DS_VRFD | 1 | - |
| 0xCF9431 | FA-CAN, Alive-Counter Fehler STAT_DS_VRFD | 1 | - |
| 0xCF9432 | FA-CAN, CRC-Fehler STAT_DS_VRFD | 1 | - |
| 0xCF9434 | FA-CAN, Botschaft ausgefallen, AVL_BRTORQ_SUM | 1 | - |
| 0xCF9435 | A-CAN, Botschaft ausgefallen, AVL_DT_KLE | 1 | - |
| 0xCF9436 | A-CAN, Botschaft ausgefallen, AVL_DT_KLE_LT | 1 | - |
| 0xCF9437 | FA-CAN, Botschaft ausgefallen, CTR_CR | 1 | - |
| 0xCF9438 | FA-CAN, Botschaft ausgefallen, DIAG_OBD_ENG | 1 | - |
| 0xCF943A | A-CAN, Botschaft ausgefallen IDENT_HVSTO | 1 | - |
| 0xCF943B | A-CAN, Botschaft ausgefallen, LIM_KLE | 1 | - |
| 0xCF943C | FA-CAN, Botschaft ausgefallen, ST_BLT_CT_SOCCU | 1 | - |
| 0xCF943D | A-CAN, Botschaft ausgefallen TORQ_CRSH_1 | 1 | - |
| 0xCF9443 | A-CAN, Botschaft ausgefallen KILOMETERSTAND | 1 | - |
| 0xCF9449 | A-CAN, Botschaft ausgefallen, DT_HVSTO_2 | 1 | - |
| 0xCF944B | FA-CAN, Botschaft ausgefallen RQ_2_WMOM_PT_SUM_DRS | 1 | - |
| 0xCF944D | FA-CAN, Botschaft ausgefallen, FAHRGESTELLNUMMER | 1 | - |
| 0xCF9454 | FA-CAN, CRC Fehler ST_VHSS | 1 | - |
| 0xCF9455 | FA-CAN, CRC-Fehler AVL_BRTORQ_SUM_1R | 1 | - |
| 0xCF9456 | FA-CAN, Alive-Counter Fehler, AVL_BRTORQ_SUM_1R | 1 | - |
| 0xCF9463 | FA-CAN, CRC-Fehler V_VEH | 1 | - |
| 0xCF9465 | FA-CAN, Botschaft ausgefallen, TS_CALL_ST | 1 | - |
| 0xCF9469 | FA-CAN, Alive-Counter Fehler  ST_DIAG_OBD_6_PT | 1 | - |
| 0xCF946A | A-CAN, Botschaft ausgefallen ENERG_COSP_ERR_ST_KLE | 1 | - |
| 0xCF946B | A-CAN, Botschaft ausgefallen DT_PT_1 | 1 | - |
| 0xCF946C | FA-CAN, Botschaft ausgefallen, CRSH_TORQ_DT_HYB_CAN | 1 | - |
| 0xCF946D | FA-CAN, CRC-Fehler RQ_2_WMOM_PT_SUM_DRS | 1 | - |
| 0xCF946E | A-CAN, Botschaft ausgefallen KILOMETERSTAND | 1 | - |
| 0xCF946F | FA-CAN, CRC Fehler RQ_WMOM_PT_SUM_STAB | 1 | - |
| 0xCF9471 | FA-CAN, Botschaft ausgefallen RQ_WMOM_PT_SUM_STAB | 1 | - |
| 0xCF9472 | FA-CAN, Alive-Counter Fehler RQ_2_WMOM_PT_SUM_DRS_1R | 1 | - |
| 0xCF9473 | A-CAN, Botschaft ausgefallen CTR_PRTNT | 1 | - |
| 0xCF9474 | A-CAN, Botschaft ausgefallen SPEC_MOT_TRCT | 1 | - |
| 0xCF9475 | A-CAN, Botschaft ausgefallen DT_PT_3 | 1 | - |
| 0xCF9476 | FA-CAN, Botschaft ausgefallen RQ_2_WMOM_PT_SUM_DRS | 1 | - |
| 0xCF9477 | A-CAN, Botschaft ausgefallen RQ_TORQ_OSTR | 1 | - |
| 0xCF9478 | FA-CAN, Alive-Counter Fehler RQ_WMOM_PT_SUM_STAB | 1 | - |
| 0xCF947A | FA-CAN, Botschaft ausgefallen ST_STAB_DSC | 1 | - |
| 0xCF947B | A-CAN, Alive-Counter Fehler  ST_DIAG_OBD_5_PT | 1 | - |
| 0xCF947C | FA-CAN, CRC-Fehler ST_STAB_DSC | 1 | - |
| 0xCF947D | FA-CAN, Botschaft ausgefallen ST_VHSS | 1 | - |
| 0xCF947E | FA-CAN, Alive-Counter Fehler ST_VHSS | 1 | - |
| 0xCF947F | FA-CAN, CRC Fehler ST_VHSS | 1 | - |
| 0xCF9480 | FA-CAN, CRC-Fehler AVL_BRTORQ_SUM | 1 | - |
| 0xCF9481 | FA-CAN, Alive-Counter Fehler, AVL_BRTORQ_SUM | 1 | - |
| 0xCF9483 | A-CAN, Alive-Counter Fehler SPEC-MOT_TRCT | 1 | - |
| 0xCF9484 | A-CAN, Botschaft ausgefallen SU_SW_DRDY | 1 | - |
| 0xCF9485 | A-CAN, Botschaft ausgefallen ST_STA_PWR_DRV | 1 | - |
| 0xCF9486 | FA-CAN, Botschaft ausgefallen, TLT_RW | 1 | - |
| 0xCF9487 | FA-CAN, CRC-Fehler ANG_ACPD | 1 | - |
| 0xCF9488 | FA-CAN, Alive-Counter Fehler ANG_ACPD | 1 | - |
| 0xCF9489 | FA-CAN, Botschaft ausgefallen ANG_ACPD | 1 | - |
| 0xCF948B | FA-CAN, Botschaft ausgefallen U_BN | 1 | - |
| 0xCF948C | FA-CAN, Botschaft ausgefallen, V_VEH | 1 | - |
| 0xCF948D | FA-CAN, Alive-Counter Fehler V_VEH | 1 | - |
| 0xCF948E | FA-CAN, CRC-Fehler V_VEH | 1 | - |
| 0xCF948F | FA-CAN, Botschaft ausgefallen WMOM_DRV_5 | 1 | - |
| 0xCF9490 | FA-CAN, Botschaft ausgefallen STAT_ENG_STA_AUTO | 1 | - |
| 0xCF9491 | FA-CAN, Botschaft ausgefallen ST_CDC_CHGNG_3 | 1 | - |
| 0xCF9492 | FA-CAN, Botschaft ausgefallen ACLNX_MASSCNTR | 1 | - |
| 0xCF9494 | FA-CAN, Botschaft ausgefallen AVL_RPM_WHL_UPRT | 1 | - |
| 0xCF9495 | FA-CAN, Alive-Counter Fehler ST_BLT_CT_SOCCU | 1 | - |
| 0xCF9496 | FA-CAN, CRC Fehler ST_BLT_CT_SOCCU | 1 | - |
| 0xCF9497 | FA-CAN, Botschaft ausgefallen AVL_RPM_WHL_QU | 1 | - |
| 0xCF9498 | A-CAN, Botschaft ausgefallen AVL_DT_SRT_MOT_1 | 1 | - |
| 0xCF9499 | FA-CAN, Alive-Counter Fehler  ST_STAB_DSC | 1 | - |
| 0xCF949A | FA-CAN, Botschaft ausgefallen ST_CDC_CHGNG_2 | 1 | - |
| 0xCF949B | FA-CAN, Alive-Counter Fehler ST_CHGINTF_2 | 1 | - |
| 0xCF949C | FA-CAN, CRC-Fehler  ST_CHGINTF_2 | 1 | - |
| 0xCF949D | A-CAN, Botschaft ausgefallen, ST_DIAG_OBD_5_PT | 1 | - |
| 0xCF949E | FA-CAN, Botschaft ausgefallen, ST_DIAG_OBD_6_PT | 1 | - |
| 0xCF949F | A-CAN, CRC Fehler, SPEC_MOT_TRCT | 1 | - |
| 0xCF94A0 | A-CAN, Botschaft ausgefallen ST_DT_MOT_1 | 1 | - |
| 0xCF94A1 | FA-CAN, Botschaft ausgefallen AVL_DT_LT_CENG_REX | 1 | - |
| 0xCF94A2 | FA-CAN, Botschaft ausgefallen ST_CDC_CHGNG_1 | 1 | - |
| 0xCF94CE | Flexray, CRC-Fehler, SPEC_MOT_TRCT | 1 | - |
| 0xCF94CF | A-CAN, Botschaft ausgefallen SPEC_OPRNG_REX_0R | 1 | - |
| 0xCF94D2 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_SLV_3 | 1 | - |
| 0xCF94DB | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_SLV_2 | 1 | - |
| 0xCF94EC | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_SLV_3 | 1 | - |
| 0xCF94EE | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_SLV_2 | 1 | - |
| 0xCF94F4 | FA-CAN, Botschaft ausgefallen ST_DIAG_OBD_SLV_1 | 1 | - |
| 0xCF94F5 | FA-CAN, Alive-Counter Fehler ST_DIAG_OBD_SLV_1 | 1 | - |
| 0xCF94FC | A-CAN, Botschaft ausgefallen, ENERG_COSP_ERR_ST_KLE_0R | 1 | - |
| 0xCF9521 | A-CAN, Botschaft ausgefallen, DT_CELL_HVSTO | 1 | - |
| 0xCF9522 | A-CAN, CRC-Fehler, DT_CELL_HVSTO | 1 | - |
| 0xCF9523 | A-CAN, Alive-Counter Fehler, DT_CELL_HVSTO | 1 | - |
| 0xCF9524 | A-CAN, Botschaft ausgefallen,  DT_PT_2_0R | 1 | - |
| 0xCF9527 | A-CAN, Botschaft ausgefallen, ST_DIAG_HV_1_0R | 1 | - |
| 0xCF9528 | A-CAN, CRC-Fehler,  ST_DIAG_HV_1_0R | 1 | - |
| 0xCF9529 | A-CAN, Alive-Counter Fehler,  ST_DIAG_HV_1_0R | 1 | - |
| 0xCF952A | A-CAN, CRC-Fehler, ST_DT_MOT_1_0R | 1 | - |
| 0xCF952B | A-CAN, Alive-Counter Fehler ST_DT_MOT_1_0R | 1 | - |
| 0xCF952E | A-CAN, Botschaft ausgefallen VRFD_AVL_DT_SRT_MOT_1 | 1 | - |
| 0xCF9536 | A-CAN, Botschaft ausgefallen, ST_DIAG_HV_4_0R | 1 | - |
| 0xCF9537 | A-CAN, CRC-Fehler, ST_DIAG_HV_4_0R | 1 | - |
| 0xCF9538 | A-CAN, Alive-Counter ST_DIAG_HV_4_0R | 1 | - |
| 0xCF9539 | FA-CAN, Botschaft ausgefallen,  ST_COSP_FU_ENG_1R | 1 | - |
| 0xCF9559 | FA-CAN, Botschaft ausgefallen, RQ_RPM_BAX_1R | 1 | - |
| 0xCF955A | FA-CAN, Alive-Counter Fehler, RQ_RPM_BAX_1R | 1 | - |
| 0xCF955B | FA-CAN, CRC-Fehler, RQ_RPM_BAX_1R | 1 | - |
| 0xCF955C | FA-CAN, Botschaft ausgefallen, RQ_RPM_FTAX_1R | 1 | - |
| 0xCF955D | FA-CAN, Alive-Counter Fehler, RQ_RPM_FTAX_1R | 1 | - |
| 0xCF955E | FA-CAN, CRC-Fehler, RQ_RPM_FTAX_1R | 1 | - |
| 0xCF955F | A-CAN, Botschaft ausgefallen, STAT_HVSTO_VRFD | 1 | - |
| 0xCF9560 | A-CAN, CRC-Fehler, STAT_HVSTO_VRFD | 1 | - |
| 0xCF9561 | A-CAN, Alive-Fehler, STAT_HVSTO_VRFD | 1 | - |
| 0xCF9562 | FA-CAN, Botschaft ausgefallen OP_SU_SOC_HLD | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | HKLUSV_Klemmt | 0-n | High | 0x01 | HKLUSV_KLEMMT_IN | - | - | - |
| 0x0002 | HKLUSV_DIAG_PATH | 0-n | High | 0x0E | HKLUSV_DIAG_PATH_N | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x170C | UBAT | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2001 | ChargeReadiness | 0-n | Low | 0xFF | ST_CHGRDY_VALUE | - | - | - |
| 0x2002 | ChargeStatus | 0-n | Low | 0xFF | ST_CHGNHG_VALUES | - | - | - |
| 0x4002 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4011 | UWB_U_AC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | UWB_I_AC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | UWB_U_DC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | UWB_I_DC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | UWB_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4016 | UWB_LLC_TRAFO_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4017 | UWB_SLE_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4018 | UWB_BTS_STATUS_PIC | HEX | High | unsigned int | - | - | - | - |
| 0x4019 | UWB_P_SOLL_HVPM_LADEN | W | High | unsigned int | - | 30.0 | 1.0 | 0.0 |
| 0x401A | UWB_I_MAX_ALTC_SLE | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x401B | UWB_I_MAX_DC_SLE | A | High | unsigned char | - | 0.8 | 1.0 | 0.0 |
| 0x401C | UWB_CHA_ENB | 0/1 | High | 0x01 | - | - | - | - |
| 0x401D | UWB_CTRL_STATUS_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401E | UWB_RUNLEVEL_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401F | UWB_CHA_DUR_SLE | s | High | unsigned char | - | 150.0 | 1.0 | 0.0 |
| 0x4020 | UWB_HVPM_CHGCOND_HVSTO | % | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4021 | UWB_HVPM_AVL_U_HV_LINK_MOT_TRCT | V | High | unsigned int | - | 0.2 | 1.0 | 0.0 |
| 0x4022 | UWB_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_HVPM_ST_CHGRDI | - | - | - |
| 0x4023 | UWB_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_HVPM_ST_CHGNG | - | - | - |
| 0x4024 | UWB_HVPM_ST_DCSW_DC_CHGNG | HEX | High | unsigned char | - | - | - | - |
| 0x4025 | UWB_HVPM_ST_CTR_DC_CHGNG | HEX | High | unsigned char | - | - | - | - |
| 0x4026 | UWB_HVPM_U_DC_CHGNG_IN | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4027 | UWB_HVPM_CTR_PRTL_NO_CHGNG_UNIT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | UWB_HVPM_VEH_MAX_U_LIM | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4029 | UWB_HVPM_AVLB_OUT_U | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x402A | UWB_HVPM_CHGNG_DC_LOKG_CHGP | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_LOKG_CHGP | - | - | - |
| 0x402B | UWB_HVPM_CHGNG_DC_ST | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_ST | - | - | - |
| 0x402C | UWB_HVPM_CHGNG_DC_MAL | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_MAL | - | - | - |
| 0x402D | UWB_HVPM_CHGNG_DC_STOP_CTR | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_STOP_CTR | - | - | - |
| 0x402E | UWS_HVPM_PRES_I_CHGNG_UNIT | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x402F | UWB_HVPM_RSTI_CHGNG | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4030 | UWB_HVPM_TAR_I_DC_CHGNG | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4031 | UWB_HVPM_AVL_I_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4032 | UWB_HWPM_AVL_I_EKK | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x4033 | UWB_HVPM_PRES_U_CHGNG_UNIT | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4034 | UWB_HVPM_AVL_U_HVSTO | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4035 | UWB_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4036 | UWB_HVPM_CTR_MEASMT_ISL | 0-n | High | 0xFF | TAB_HVPM_CTR_MEASMT_ISL | - | - | - |
| 0x4037 | UWB_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_HVPM_CHGNG_TYP_IMME | - | - | - |
| 0x4038 | UWB_HVPM_STATUS_HV_STARTFEHLER | HEX | High | signed long | - | - | - | - |
| 0x4039 | UWB_HVPM_STATUS_HVSTART_KOMM | HEX | High | unsigned char | - | - | - | - |
| 0x403A | UWB_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x403B | UWB_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x403C | UWB_HVPM_STATUS_HYBRIDSYSTEM | HEX | High | unsigned char | - | - | - | - |
| 0x403D | UWB_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x403E | UWB_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x403F | UWB_HVPM_I_BATT_SME | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4040 | UWB_HVPM_ST_CRASH_MOD | HEX | High | unsigned char | - | - | - | - |
| 0x4041 | UWB_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x4042 | UWB_HVPM_ST_CRASH_SERVERTY | HEX | High | unsigned char | - | - | - | - |
| 0x4043 | UWB_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4044 | UWB_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4045 | UWB_HVPM_IBATT_BN | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4046 | UWB_HVPM_UBATT_BN | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4047 | UWB_HVPM_F_DCDC1_gen | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x4048 | UWB_OBD_CALC_LOAD_VAL | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x4049 | UWB_OBD_VEH_SPEED | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x404A | UWB_OBD_ENG_COOL_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x404B | UWB_OBD_THROT_POS | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x404C | UWB_OBD_CHG_COND_HVSTO | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x404D | UWB_EWP_DUTYCYCLE | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x404E | UWB_EWP_DIAGSTATUS | HEX | High | unsigned char | - | - | - | - |
| 0x404F | UWB_EWP_AE_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4050 | UWB_EWP_TEMP_ENTRY | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4051 | UWB_EWP_TEMP_EXIT | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4052 | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4053 | UWB_ELUP_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | UWB_ELUP_UNTERDRUCK | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x4055 | UWB_BA_SOLL_HVPM_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4056 | UWB_REASON_FAILSAFE | HEX | High | unsigned int | - | - | - | - |
| 0x4057 | UWB_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x4058 | UWB_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x4059 | UWB_ST_BACKUP_ERROR_ENDE | HEX | High | unsigned int | - | - | - | - |
| 0x405A | UWB_ST_BACKUP_EV | HEX | High | unsigned int | - | - | - | - |
| 0x405B | UWB_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x405C | UWB_OBD_MOTORDREHZAHL | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x405E | UWB_RSTINFO_EXCADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x405F | UWB_RSTINFO_FUSIFLAGS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4060 | UWB_RSTINFO_DSADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4061 | UWB_RSTINFO_CAUSE_MC0 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x4062 | UWB_RSTINFO_EXCCLASS_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4063 | UWB_RSTINFO_EXCTIN_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4064 | UWB_RSTINFO_WDERRCTR_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4065 | UWB_RSTINFO_EXTWDINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4066 | UWB_RSTINFO_EXTWDTREASON_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4067 | UWB_RSTINFO_OWNVSMSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4068 | UWB_RSTINFO_SWSOURCE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4069 | UWB_RSTINFO_SWINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x406A | UWB_RSTINFO_EXCADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406B | UWB_RSTINFO_FUSIFLAGS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406C | UWB_RSTINFO_DSADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406D | UWB_RSTINFO_CAUSE_MC2 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x406E | UWB_RSTINFO_EXCCLASS_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x406F | UWB_RSTINFO_EXCTIN_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4070 | UWB_RSTINFO_WDERRCTR_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4071 | UWB_RSTINFO_EXTWDINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4072 | UWB_RSTINFO_EXTWDTREASON_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4073 | UWB_RSTINFO_OWNVSMSTATE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4074 | UWB_RSTINFO_SWSOURCE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4075 | UWB_RSTINFO_SWINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4076 | UWB_BUDS_VERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4077 | UWB_EME_CPU_TIME_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4078 | UWB_EME_CPU_TIME_1 | HEX | High | unsigned long | - | - | - | - |
| 0x407B | UWB_CPLD_SS_ENTRY_0 | HEX | High | unsigned int | - | - | - | - |
| 0x407C | UWB_CPLD_SS_ENTRY_1 | HEX | High | unsigned int | - | - | - | - |
| 0x407F | UWB_RSTINFO_INTWDTREASON | HEX | High | unsigned char | - | - | - | - |
| 0x4081 | UWB_T_DIE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4085 | UWB_V_U_ZK | HEX | High | unsigned long | - | - | - | - |
| 0x4086 | UWB_EME_CPU_TIME_0_REC | HEX | High | unsigned long | - | - | - | - |
| 0x4087 | UWB_EME_CPU_TIME_1_REC | HEX | High | unsigned long | - | - | - | - |
| 0x408A | UWB_CPLD_SS_ENTRY_0_REC | HEX | High | unsigned int | - | - | - | - |
| 0x408B | UWB_CPLD_SS_ENTRY_1_REC | HEX | High | unsigned int | - | - | - | - |
| 0x4090 | UWB_DCDC_I_LAST | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4091 | UWB_DCDC_I_TRAFIL | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4092 | UWB_DCDC_I_TRA | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4093 | UWB_DCDC_I_TIEFSETZER_PH1 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4094 | UWB_DCDC_I_TIEFSETZER_PH2 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4095 | UWB_DCDC_I_BATTERY | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4096 | UWB_DCDC_T_BOARD | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4097 | UWB_DCDC_T_GLEICHRICHTER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4098 | UWB_DCDC_T_GEGENTAKTWANDLER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4099 | UWB_DCDC_T_TIEFSETZER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x409A | UWB_DCDC_U_HV_BATTERY | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x409B | UWB_DCDC_U_LV_AUSGANG | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x409C | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH1 | HEX | High | unsigned int | - | - | - | - |
| 0x409D | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH2 | HEX | High | unsigned int | - | - | - | - |
| 0x409E | UWB_DCDC_SPI_ERROR_STATUS_MC0 | HEX | High | unsigned int | - | - | - | - |
| 0x409F | UWB_DCDC_SPI_ERROR_STATUS_MC6 | HEX | High | unsigned int | - | - | - | - |
| 0x40A0 | UWB_DCDC_U_GNDDIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x40A1 | UWB_DCDC_BA_SOLL | 0-n | High | 0xFF | TAB_DCDC_BA_SOLL | - | - | - |
| 0x40A2 | UWB_DCDC_U_LV_SOLL | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x40A3 | UWB_DCDC_I_LV_SOLL | A | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x40A4 | UWB_DCDC_P_HV_MX | W | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40A5 | UWB_DCDC_BA_IST | 0-n | High | 0xFF | TAB_DCDC_BA_IST | - | - | - |
| 0x40A6 | UWB_DCDC_I_HV | A | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x40A7 | UWB_DCDC_BAUTIELSCHUTZ_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40A8 | UWB_DCDC_CONTROL_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40A9 | UWB_DCDC_ZKET_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x40AA | UWB_DCDC_SPT_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x40AB | UWB_DCDC_U_GATETRIEBE | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x40AC | UWB_DCDC_I_LIMITIERUNG_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40AD | UWB_DCDC_ERROR_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40FC | UWB_PS_SEN1_STAT | 0/1 | High | 0x01 | - | - | - | - |
| 0x40FD | UWB_PS_SEN2_STAT | 0/1 | High | 0x01 | - | - | - | - |
| 0x40FE | UWB_PS_FUSI_ERRCODE | HEX | High | unsigned int | - | - | - | - |
| 0x40FF | UWB_PS_HBRIDGE_VOLTAGE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4100 | UWB_AE_EM_DREHZAL | 1/min | High | unsigned int | - | 0.5 | 1.0 | -12000.0 |
| 0x4101 | UWB_PS_AKTUELLER_BEFEHL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | UWB_PS_STROM_HBRUECKE | mA | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | UWB_PS_POS_SENS1 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | UWB_PS_POS_SENS2 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4105 | UWB_PS_SPG_SENS1 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4106 | UWB_PS_SPG_SENS2 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4107 | UWB_AE_EM_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4108 | UWB_AE_INV_TEMP_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4109 | UWB_AE_INV_TEMP_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410A | UWB_AE_INV_TEMP_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410B | UWB_AE_EM_MD_SOLL | Nm | High | unsigned int | - | 0.5 | 1.0 | -1023.5 |
| 0x410C | UWB_SPI_RDC_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x410D | UWB_STAT_RESOLVER | HEX | High | unsigned char | - | - | - | - |
| 0x410E | UWB_FUSI_LD_MC0 | HEX | High | signed long | - | - | - | - |
| 0x410F | UWB_FUSI_OVERSPEED | HEX | High | unsigned long | - | - | - | - |
| 0x4110 | UWB_FUSI_LD_Q | HEX | High | unsigned char | - | - | - | - |
| 0x4111 | UWB_VEH_SPEED | km/h | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4112 | UWB_FUSI_LD_MC2 | HEX | High | unsigned int | - | - | - | - |
| 0x4113 | UWB_ECU_SYSSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4114 | UWB_PS_QUALIFIER | HEX | High | unsigned int | - | - | - | - |
| 0x4115 | UWB_PS_LAST_CMD | 0-n | High | 0xFF | TAB_PS_LAST_CMD | - | - | - |
| 0x4116 | UWB_SME_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4120 | UWB_PRND_QUALIFIER | HEX | High | signed long | - | - | - | - |
| 0x4121 | UWB_PRND_ACT_CMD | 0-n | High | 0xFF | TAB_PRND_ACT_CMD | - | - | - |
| 0x4122 | UWB_PRND_ACT_POS | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4123 | UWB_PRND_DRIVESTATE | HEX | High | unsigned char | - | - | - | - |
| 0x4124 | UWB_PRND_HBRIDGE_DIR | 0-n | High | 0xFF | TAB_PRND_HBRIDGE_DIR | - | - | - |
| 0x4125 | UWB_PRND_HBRIDGE_PWM | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4126 | UWB_PRND_FUSI_ERRCODE | HEX | High | unsigned int | - | - | - | - |
| 0x4127 | UWB_PRND_HBRIDGE_DIR_E1 | 0-n | High | 0xFF | TAB_PRND_HBRIDGE_DIR | - | - | - |
| 0x4128 | UWB_AE_PRND_E2SEN1_ANG | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4129 | UWB_AE_PRND_E2SEN2_ANG | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4130 | UWB_FUSI_SSD_STATUS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4131 | UWB_FUSI_CPLD_INFO | HEX | High | unsigned char | - | - | - | - |
| 0x4132 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x4133 | UWB_FUSI_UZK | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4134 | UWB_FUSI_DCRG_STATUS_MC0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4135 | UWB_FUSI_I_INV_DC | mA | High | unsigned int | - | 40.0 | 1.0 | -1000000.0 |
| 0x4136 | UWB_FUSI_BA_EM_SOLL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4137 | UWB_FUSI_T_PWR_UP | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4138 | UWB_FUSI_T_KL15_AN | s | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4139 | UWB_FUSI_SPT_TEST_STEP | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413A | UWB_FUSI_OPMO_CHGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413B | UWB_FUSI_DCRG_STATUS_MC2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413C | UWB_FUSI_OPMO_DCDC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413D | UWB_FUSI_I_DCDC_LV | mA | High | unsigned char | - | 200.0 | 1.0 | 0.0 |
| 0x413E | UWB_FUSI_SME_SUTZ_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413F | UWB_FUSI_DCDC_CTRL_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4140 | UWB_FUSI_INV_LSS_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x4141 | UWB_FUSI_PFC_ENUM_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4142 | UWB_FUSI_PFC_SIGNATURE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4143 | UWB_FUSI_PFC_MAXDIFF_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4144 | UWB_FUSI_PFC_MAXDIFF_10MS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4145 | UWB_FUSI_PFC_ENUM_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4146 | UWB_FUSI_PFC_SIGNATURE_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4147 | UWB_FUSI_PFC_MAXDIFF_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4148 | UWB_FUSI_PFC_MAXDIFF_10MS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4149 | UWB_FUSI_SPT_MIX_STATUS_1 | HEX | High | unsigned long | - | - | - | - |
| 0x414A | UWB_FUSI_SPT_MIX_STATUS_2 | HEX | High | unsigned int | - | - | - | - |
| 0x414B | UWB_FUSI_SPT_MIX_STATUS_3 | HEX | High | unsigned long | - | - | - | - |
| 0x414C | UWB_FUSI_HVSM0_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0x414D | UWB_AKS_HVSM_I2T | HEX | High | unsigned int | - | - | - | - |
| 0x4150 | UWB_ESM_STATE_LAST | HEX | High | unsigned char | - | - | - | - |
| 0x4151 | UWB_OSEK_OS_TASK_STATUS | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x4159 | UWB_STATUS_WORD_PFC_FLOW_ERR_MC0 | HEX | High | unsigned int | - | - | - | - |
| 0x415A | UWB_STATUS_WORD_PFC_FLOW_ERR_MC2 | HEX | High | unsigned int | - | - | - | - |
| 0x4160 | UWB_V_CNT_T1_RTM_TASK_OVERFLOW | HEX | High | unsigned char | - | - | - | - |
| 0x4161 | UWB_V_D_MPM0_WDT_ERROR_CNT_UE2 | HEX | High | unsigned char | - | - | - | - |
| 0x4162 | UWB_FUSI_WHEEL_SPEED_RRH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4163 | UWB_FUSI_WHEEL_SPEED_RLH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4164 | UWB_FUSI_WHEEL_SPEED_FRH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4165 | UWB_FUSI_WHEEL_SPEED_FLH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4166 | UWB_FUSI_MARB_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4167 | UWB_FUSI_MAX_SPEED_BAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0x4168 | UWB_FUSI_MAX_SPEED_FTAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0x4169 | UWB_FUSI_MIN_SPEED_BAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0x416A | UWB_FUSI_MIN_SPEED_FTAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
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
| 0x001001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 | - |
| 0x002001 | NVM_E_WRITE_FAILED | 0 | - |
| 0x002002 | NVM_E_READ_FAILED | 0 | - |
| 0x002003 | NVM_E_CONTROL_FAILED | 0 | - |
| 0x002004 | NVM_E_ERASE_FAILED | 0 | - |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 | - |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 | - |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 | - |
| 0x031806 | DOBD - UCX - AC-Laden - Modul 2 - Kommunikationsfehler - Timeout | 0 | - |
| 0x031807 | DOBD - UCX - AC-Laden - Modul 2 - Digitaler Signalprozesser - Interner Fehler | 0 | - |
| 0x031808 | DOBD - UCX - AC-Laden - AC-Spannungssensor 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031809 | DOBD - UCX - AC-Laden - AC-Spannungssensor 2 - Plausibilitätsfehler | 0 | - |
| 0x03180B | DOBD - UCX - AC-Laden - AC-Spannungssensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x03180C | DOBD - UCX - AC-Laden - AC-Spannungssensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x03180D | DOBD - UCX - AC-Laden - AC-Spannungssensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x03180E | DOBD - UCX - AC Charger Module 1 - Internal Memory - Plausibility check | 0 | - |
| 0x031828 | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031829 | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Plausibilitätsfehler 2 | 0 | - |
| 0x03182A | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Plausibilitätsfehler | 0 | - |
| 0x03182B | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x03182C | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x03182D | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x03182F | DOBD - UCX - AC-Laden - DC-Spannungssensor 2 - Kalibrierung fehlerhaft | 0 | - |
| 0x031838 | DOBD - UCX - AC-Laden - PFC-Spannungssensor 2 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031839 | DOBD - UCX - AC-Laden - PFC-Spannungssensor 2 - Plausibilitätsfehler | 0 | - |
| 0x03183B | DOBD - UCX - AC-Laden - PFC-Spannungssensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x03183C | DOBD - UCX - AC-Laden - PFC-Spannungssensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x03183D | DOBD - UCX - AC-Laden - PFC-Spannungssensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x03184E | DOBD - UCX - AC-Laden - AC-Stromsensor 2 - Plausibilitätsfehler 2 | 0 | - |
| 0x03184F | DOBD - UCX - AC-Laden - AC-Stromsensor 2 - Plausibilitätsfehler | 0 | - |
| 0x031850 | DOBD - UCX - AC-Laden - AC-Stromsensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031851 | DOBD - UCX - AC-Laden - AC-Stromsensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x031852 | DOBD - UCX - AC-Laden - AC-Stromsensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x03185E | DOBD - UCX - AC-Laden - DC-Stromsensor 2 - Plausibilitätsfehler 2 | 0 | - |
| 0x03185F | DOBD - UCX - AC-Laden - DC-Stromsensor 2 - Plausibilitätsfehler | 0 | - |
| 0x031860 | DOBD - UCX - AC-Laden - DC-Stromsensor 2 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031861 | DOBD - UCX - AC-Laden - DC-Stromsensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x031862 | DOBD - UCX - AC-Laden - DC-Stromsensor 2 - Kurzschluss nach Masse | 0 | - |
| 0x031863 | DOBD - UCX - AC-Laden - Modul 2 - Kein Ausgangsstrom | 0 | - |
| 0x031881 | DOBD - UCX - LLC Resonant converter Module 1 - Temperature sensor (Transformer temperature sensor) - Cold start check | 0 | - |
| 0x03188A | DOBD - UCX - LLC Resonant converter Module 1 - Temperature sensor (resonant inductor temperature sensor) - Cold start check | 0 | - |
| 0x03188B | DOBD - UCX - AC-Laden - Temperatursensor 5 - Kurzschluss nach Masse | 0 | - |
| 0x03188C | DOBD - UCX - AC-Laden - Temperatursensor 5 - Kurzschluss nach Plus | 0 | - |
| 0x03188D | DOBD - UCX - AC-Laden - Temperatursensor 5 - Oberer Schwellenwert überschritten | 0 | - |
| 0x03188E | DOBD - UCX - AC-Laden - Temperatursensor 5 - Plausiblitätsfehler | 0 | - |
| 0x03188F | DOBD - UCX - AC-Laden - Temperatursensor 5 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031894 | DOBD - UCX - AC-Laden - Temperatursensor 6 - Kurzschluss nach Masse | 0 | - |
| 0x031895 | DOBD - UCX - AC-Laden - Temperatursensor 6 - Kurzschluss nach Plus | 0 | - |
| 0x031896 | DOBD - UCX - AC-Laden - Temperatursensor 6 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031897 | DOBD - UCX - AC-Laden - Temperatursensor 6 - Plausiblitätsfehler | 0 | - |
| 0x031898 | DOBD - UCX - AC-Laden - Temperatursensor 6 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03189A | DOBD - UCX - LLC Resonant converter Module 2 - Temperature sensor (Transformer temperature sensor) - Cold start check | 0 | - |
| 0x03189C | DOBD - UCX - PFC Converter Module 2 - Temperature Sensor (PFC temperature sensor) - Cold start check | 0 | - |
| 0x03189D | DOBD - UCX - AC-Laden - Temperatursensor 7 - Kurzschluss nach Masse | 0 | - |
| 0x03189E | DOBD - UCX - AC-Laden - Temperatursensor 7 - Kurzschluss nach Plus | 0 | - |
| 0x03189F | DOBD - UCX - AC-Laden - Temperatursensor 7 - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318A0 | DOBD - UCX - AC-Laden - Temperatursensor 7 - Plausiblitätsfehler | 0 | - |
| 0x0318A1 | DOBD - UCX - AC-Laden - Temperatursensor 7 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318A4 | DOBD - UCX - AC-Laden - Temperatursensor 8 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318A5 | DOBD - UCX - AC-Laden - Temperatursensor 8 - Plausiblitätsfehler | 0 | - |
| 0x0318A6 | DOBD - UCX - AC-Laden - Temperatursensor 8 - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318A7 | DOBD - UCX - AC-Laden - Temperatursensor 8 - Kurzschluss nach Plus | 0 | - |
| 0x0318A8 | DOBD - UCX - AC-Laden - Temperatursensor 8 - Kurzschluss nach Masse | 0 | - |
| 0x0318AD | DOBD - UCX - AC-Laden - Temperatursensor 9 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318AE | DOBD - UCX - AC-Laden - Temperatursensor 9 - Plausiblitätsfehler | 0 | - |
| 0x0318AF | DOBD - UCX - AC-Laden - Temperatursensor 9 - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318B0 | DOBD - UCX - AC-Laden - Temperatursensor 9 - Kurzschluss nach Plus | 0 | - |
| 0x0318B1 | DOBD - UCX - AC-Laden - Temperatursensor 9 - Kurzschluss nach Masse | 0 | - |
| 0x0318B2 | DOBD - UCX - LLC Resonant converter Module 2 - Temperature sensor (resonant inductor temperature sensor) - Cold start check | 0 | - |
| 0x0318B5 | DOBD - UCX - AC-Laden - Modul 2 - Ausgangsleistung unplausibel | 0 | - |
| 0x0318B6 | DOBD - UCX - AC-Laden - Modul 2 - Digitaler Signalprozessor - Fehler der Uhr | 0 | - |
| 0x0318B7 | DOBD - UCX - AC-Laden - Modul 2 - Crash-Sensor unplausibel | 0 | - |
| 0x0318C0 | DOBD - UCX - AC-Laden - DC-Stromsensor 3 - Kurzschluss nach Masse | 0 | - |
| 0x0318C1 | DOBD - UCX - AC-Laden - DC-Stromsensor 3 - Kurzschluss nach Plus | 0 | - |
| 0x0318C2 | DOBD - UCX - AC-Laden - DC-Stromsensor 3 - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318C8 | DOBD - UCX - Internal Charge Coordinator - Temperature sensor (Board temperature sensor) - Cold start check | 0 | - |
| 0x0318C9 | DOBD - UCX - Internal Charge Coordinator - Temperature sensor - Short Circuit to Battery (NTC) | 0 | - |
| 0x0318CA | DOBD - UCX - AC-Laden - Temperatursensor 10 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318CB | DOBD - UCX - AC-Laden - Temperatursensor 10 - Plausiblitätsfehler | 0 | - |
| 0x0318CC | DOBD - UCX - Internal Charge Coordinator - Temperature sensor (Board temperature sensor) - Short Circuit to Ground  (NTC) | 0 | - |
| 0x0318CD | DOBD - UCX - AC-Laden - Temperatursensor 10 - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318D5 | DOBD - UCX - AC-Laden - Modul 2 - Kommunikationsfehler - Ungültig | 0 | - |
| 0x0318D6 | DOBD - UCX - AC-Laden - Modul 1 - Kommunikationsfehler - Timeout | 0 | - |
| 0x0318D7 | DOBD - UCX - AC-Laden - Modul 1 - Kommunikationsfehler - Ungültig | 0 | - |
| 0x0318D9 | DOBD - UCX - AC-Laden - Modul 2 - Kommunikationsfehler - Bus off | 0 | - |
| 0x21DD00 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Signal abgeschnitten | 0 | - |
| 0x21DD01 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Signal zu hoch | 0 | - |
| 0x21DD02 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Signal zu niedrig | 0 | - |
| 0x21DD03 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Amplitude nicht plausibel | 0 | - |
| 0x21DD04 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Phasenlage nicht plausibel | 0 | - |
| 0x21DD05 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Signalerfassung ausserhalb Toleranzbereich | 0 | - |
| 0x21DD06 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Winkelgeschwindigkeit zu hoch | 0 | - |
| 0x21DD07 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Konfiguration | 0 | - |
| 0x21DD0A | DOBD - REME - Elektrische Maschine Temperatursensor, elektrisch: Überschreitung 2. Schwelle Temperatur | 0 | - |
| 0x21DD0B | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Konfiguration nicht plausibel | 0 | - |
| 0x21DD0C | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Interne Überwachungsfunktion nicht plausibel | 0 | - |
| 0x21DD0D | DOBD - REME - Elektrische Maschine Phasenstrom, elektrisch: Überwachung des Phasenstroms | 0 | - |
| 0x21DD11 | DOBD - REME - Elektrische Maschine magnetische Erregung, elektrisch: Überwachung der Erregung des magnetischen Feldes | 0 | - |
| 0x21DD12 | DOBD - REME - Elektrische Maschine Maschinentemperatur, elektrisch: Vergleich zwischen thermischem Modell & NTC | 0 | - |
| 0x21DD15 | DOBD - REME - Signal (IST_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion, 0x100): Wert ungültig | 0 | - |
| 0x21DD16 | DOBD - REME - Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 | - |
| 0x21DD17 | DOBD - REME - Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 | - |
| 0x21DD18 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Cosinus-Leitung unterbrochen | 0 | - |
| 0x21DD19 | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Cosinus-Leitung Kurzschluss nach Batterie | 0 | - |
| 0x21DD1A | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Cosinus-Leitung Kurzschluss nach Masse | 0 | - |
| 0x21DD1B | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Erregerleitung unterbrochen | 0 | - |
| 0x21DD1C | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-Leitung unterbrochen | 0 | - |
| 0x21DD1D | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-Leitung Kurzschluss nach Batterie | 0 | - |
| 0x21DD1E | DOBD - REME - Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-Leitung Kurzschluss nach Masse | 0 | - |
| 0x21DD1F | DOBD - REME - Ungültige Hardware Typteilenummer (HWEL) | 0 | - |
| 0x21DD20 | DOBD - REME - REME Traktionsnetz Spannung, elektrisch: zu hoch | 0 | - |
| 0x21DD21 | DOBD - REME - REME Traktionsnetz Spannung, elektrisch: Vergleichsfehler | 0 | - |
| 0x21DD30 | DOBD - REME - REME Phasenstrom Phase U, elektrisch: Vergleichsfehler | 0 | - |
| 0x21DD31 | DOBD - REME - REME Phasenstrom Phase U, elektrisch: Strom zu hoch | 0 | - |
| 0x21DD32 | DOBD - REME - REME Phasenstrom Phase U, elektrisch: Strom zu niedrig | 0 | - |
| 0x21DD33 | DOBD - REME - REME Phasenstrom Phase U, elektrisch: Abweichung Nulllage zu hoch | 0 | - |
| 0x21DD34 | DOBD - REME - REME Phasenstrom Phase V, elektrisch: Vergleichsfehler | 0 | - |
| 0x21DD35 | DOBD - REME - REME Phasenstrom Phase V, elektrisch: Strom zu hoch | 0 | - |
| 0x21DD36 | DOBD - REME - REME Phasenstrom Phase V, elektrisch: Strom zu niedrig | 0 | - |
| 0x21DD37 | DOBD - REME - REME Phasenstrom Phase V, elektrisch: Abweichung Nulllage zu hoch | 0 | - |
| 0x21DD38 | DOBD - REME - REME Phasenstrom Phase W, elektrisch: Vergleichsfehler | 0 | - |
| 0x21DD39 | DOBD - REME - REME Phasenstrom Phase W, elektrisch: Strom zu hoch | 0 | - |
| 0x21DD3A | DOBD - REME - REME Phasenstrom Phase W, elektrisch: Strom zu niedrig | 0 | - |
| 0x21DD3B | DOBD - REME - REME Phasenstrom Phase W, elektrisch: Abweichung Nulllage zu hoch | 0 | - |
| 0x21DD3C | DOBD - REME - REME Phasenstrom Klemme U ,V, W: Summenfehler | 0 | - |
| 0x21DD50 | DOBD - REME - REME Interne Versorgungsspannung fuer Sensor: Überspannung | 0 | - |
| 0x21DD51 | DOBD - REME - REME Interne Versorgungsspannung fuer Sensor: Unterspannung | 0 | - |
| 0x21DD54 | DOBD - REME - REME Interne Versorgung fuer Treiber Ansteuerung IGBT: Überspannung | 0 | - |
| 0x21DD55 | DOBD - REME - REME Interne Versorgung fuer Treiber Ansteuerung IGBT: Unterspannung | 0 | - |
| 0x21DD57 | DOBD - REME - REME Interne Versorgungsspannung fuer Sensor: Kurzschluss gegen Plus | 0 | - |
| 0x21DD58 | DOBD - REME - REME Interne Versorgungsspannung fuer Sensor: Kurzschluss gegen Masse | 0 | - |
| 0x21DD5F | DOBD - REME - REME interner Baustein für Fehler: nicht plausibles Signal | 0 | - |
| 0x21DD60 | DOBD - REME - REME Phasenstrom Phase U,V,W elektrisch: Überschreitung Messbereich | 0 | - |
| 0x21DD61 | DOBD - REME - REME Traktionsnetzspannung. Elektrisch: HW-Abschaltung oberer Schwellenwert Spannung | 0 | - |
| 0x21DD62 | DOBD - REME - REME Interne Versorgung Treiber Ansteuerung IGBT, elektrisch: Fehler | 0 | - |
| 0x21DD63 | DOBD - REME - REME Interne Versorgungsspannung fuer Sensor: Spannung zu hoch | 0 | - |
| 0x21DD70 | DOBD - REME - REME Umrichter Endstufe IGBT (oben), elektrisch: Fehlfunktion | 0 | - |
| 0x21DD71 | DOBD - REME - REME Umrichter Endstufe IGBT (unten), elektrisch: Fehlfunktion | 0 | - |
| 0x21DD73 | DOBD - REME - REME Betriebsart Anforderung: Fehlerhaft | 0 | - |
| 0x21DD7E | DOBD - REME - REME Niedervolt Spannungsversorgung: Plausibilitätsfehler | 0 | - |
| 0x21DD81 | DOBD - REME - REME Niedervolt Spannungsversorgung, Plausibilität: Spannung zu hoch | 0 | - |
| 0x21DD93 | DOBD - REME - REME interner Fehler: Überwachung serielle Datenschnittstelle SPI | 0 | - |
| 0x21DD94 | DOBD - REME - REME, interner Fehler, Watchdog: Aktivierung erkannt | 0 | - |
| 0x21DDA0 | DOBD - REME - REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 | - |
| 0x21DDA1 | DOBD - REME - REME, Kontrollleiterplatte: Elektronikbaustein CPLD Takt Fehler | 0 | - |
| 0x21DDA2 | DOBD - REME - REME Controllerplatine: Zusammenbau unplausibel | 0 | - |
| 0x21DDA3 | DOBD - REME - REME Controllerplatine: fehlerhaft | 0 | - |
| 0x21DDB0 | DOBD - REME - REME, interner Fehler, CAN-Controller: Speichertest fehlgeschlagen | 0 | - |
| 0x21DDB1 | DOBD - REME - REME, Sicherheitsabschaltung: schwerer Aufprall vom Aufprallsensor erkannt | 0 | - |
| 0x21DDB5 | DOBD - REME - REME, Ebene 3, Watchdog-Fehler: Fehlerzähler des externen Überwachungsmoduls entspricht nicht dem Gegenstück im Controller | 0 | - |
| 0x21DDB7 | DOBD - REME - REME Umrichter: Sicherheitsfunktion/ Schaltung aktiver Kurzschluss für elektrische Maschine nicht möglich | 0 | - |
| 0x21DDB8 | DOBD - REME - REME Umrichter: Sicherheitsfunktion/ Schaltung Freilauf für elektrische Maschine nicht möglich | 0 | - |
| 0x21DDBA | DOBD - REME - REME Elektrische Maschine Drehzahl, elektrisch: Drehzahl zu hoch | 0 | - |
| 0x21DDC0 | DOBD - REME - REME Umrichter Endstufe IGBT Phase U, Temperatur: Überschreitung Schwellenwert | 0 | - |
| 0x21DDC1 | DOBD - REME - REME Umrichter Endstufe IGBT Phase U, Temperatur: Unterschreitung Schwellenwert | 0 | - |
| 0x21DDC2 | DOBD - REME - REME Umrichter Endstufe IGBT Phase V, Temperatur: Überschreitung Schwellenwert | 0 | - |
| 0x21DDC3 | DOBD - REME - REME Umrichter Endstufe IGBT Phase V, Temperatur: Unterschreitung Schwellenwert | 0 | - |
| 0x21DDC4 | DOBD - REME - REME Umrichter Endstufe IGBT Phase W, Temperatur: Überschreitung Schwellenwert | 0 | - |
| 0x21DDC5 | DOBD - REME - REME Umrichter Endstufe IGBT Phase W, Temperatur: Unterschreitung Schwellenwert | 0 | - |
| 0x21DDC6 | DOBD - REME - REME Umrichter Endstufe IGBT Phase U, Temperatur: nicht plausibel | 0 | - |
| 0x21DDC7 | DOBD - REME - REME Umrichter Endstufe IGBT Phase V, Temperatur: nicht plausibel | 0 | - |
| 0x21DDC8 | DOBD - REME - REME Umrichter Endstufe IGBT Phase W, Temperatur: nicht plausibel | 0 | - |
| 0x21DDD1 | DOBD - REME - Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 | - |
| 0x21DDD2 | DOBD - REME - Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 | - |
| 0x21DE07 | DOBD - REME - Unterspannung erkannt | 0 | - |
| 0x21DE08 | DOBD - REME - REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 | - |
| 0x21DE09 | DOBD - REME - REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 | - |
| 0x21DE0B | DOBD - REME - REME Umrichter Endstufe IGBT Phasen U Temperature: nicht plausibel | 0 | - |
| 0x21DE0C | DOBD - REME - REME Umrichter Endstufe IGBT Phasen V Temperature: nicht plausibel | 0 | - |
| 0x21DE0D | DOBD - REME - REME Umrichter Endstufe IGBT Phasen W Temperature: nicht plausibel | 0 | - |
| 0x21DE16 | DOBD - REME - REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 | - |
| 0x21DE17 | DOBD - REME - REME, Klemme 15, Datenempfang: Fehlfunktion | 0 | - |
| 0x21DE30 | DOBD - REME - REME, Monitoring, Rotorlage:  nicht plausibel | 0 | - |
| 0x21DE31 | DOBD - REME - REME, Monitoring, Überführung in sicheren Zustand: fehlerhaft | 0 | - |
| 0x21DE32 | DOBD - REME - REME, Monitoring, Rotordrehzahl: nicht plausibel | 0 | - |
| 0x21DE33 | DOBD - REME - REME, Monitoring, Phasenströme: nicht plausibel | 0 | - |
| 0x21DE34 | DOBD - REME - REME, Monitoring, Betriebsart: nicht plausibel | 0 | - |
| 0x21DE35 | DOBD - REME - REME, Monitoring, Zwischenkreisspannung: nicht plausibel | 0 | - |
| 0x21DF01 | DOBD - REME - Signal (Ist_Strom_Hochvoltspeicher, 0x112): Wert ungültig | 0 | - |
| 0x21DF02 | DOBD - REME - Signal (Ist_Spannung_Hochvoltspeicher, 0x112): Wert ungültig | 0 | - |
| 0x21DF03 | DOBD - REME - Signal (Strom_Maximal_Antrieb_E-Motor, 0x2E2): Wert ungültig | 0 | - |
| 0x21DF04 | DOBD - REME - Signal (Strom_Maximal_Generator_E-Motor_1, 0x2E2): Wert ungültig | 0 | - |
| 0x21DF07 | DOBD - REME - Signal (Drehzahl_Soll_E-Motor_1, 0xAA): Wert ungültig | 0 | - |
| 0x21DF08 | DOBD - REME - Signal (Status_Daten_Regelung_E-Motor_1, 0xAA): Wert ungültig | 0 | - |
| 0x21DF0A | DOBD - REME - Signal (Soll_Betriebsart_E-Motor_1, 0xAA): Wert ungültig | 0 | - |
| 0x21DF0B | DOBD - REME - Signal (Soll_Drehmoment_E-Motor_1, 0xAA): Wert ungültig | 0 | - |
| 0x21DF0D | DOBD - REME - Signal (Drehmoment_Maximal_E-Motor_1, 0xAA): Wert ungültig | 0 | - |
| 0x21DF0E | DOBD - REME - Signal (Drehmoment_Minimal_E-Motor_1, 0xAA): Wert ungültig | 0 | - |
| 0x21DF0F | DOBD - REME - Signal (Spannung_Gleichstrom_Hochspannung_Maximal_E-Motor_1, 0x2E2): Wert ungültig | 0 | - |
| 0x21DF10 | DOBD - REME - Signal (Spannung_Gleichstrom_Hochspannung_Minimal_E-Motor_1, 0x2E2): Wert ungültig | 0 | - |
| 0x21DF1E | DOBD - REME - Signal (Anforderung_Entladung_Zwischenkreis [2], 0x2E8): Wert ungültig | 0 | - |
| 0x21DF27 | DOBD - REME - Signal (Status_Klemme [5], 0x12F): Wert ungültig | 0 | - |
| 0x21DF2A | DOBD - REME - Signal (Status_Trennschalter_Hochvoltspeicher [1], 0x1FA): Wert ungültig | 0 | - |
| 0x21E605 | DOBD - UCX - Ladeelektronik: Überspannung an 12V Spannungsversorgung | 0 | - |
| 0x21E606 | DOBD - UCX - Ladeelektronik: Unterspannung an 12V Spannungsversorgung | 0 | - |
| 0x21E60B | DOBD - UCX - Ladeelektronik: Software-Fehler | 0 | - |
| 0x21E60C | DOBD - UCX - Charger internal bus off  Module 1 | 0 | - |
| 0x21E60D | DOBD - UCX - Ladeelektronik: Unterspannung am AC-Anschluss | 0 | - |
| 0x21E60E | DOBD - UCX - Ladeelektronik: Überspannung am AC-Anschluss | 0 | - |
| 0x21E60F | DOBD - UCX - Ladeelektronik: Unterspannung am DC-Anschluss | 0 | - |
| 0x21E610 | DOBD - UCX - Ladeelektronik: Überspannung am DC-Anschluss | 0 | - |
| 0x21E611 | DOBD - UCX - Ladeelektronik: DC Überstrom | 0 | - |
| 0x21E614 | DOBD - UCX - Ladeelektronik: Zustand Service Disconnect zu KL30C unplausibel | 0 | - |
| 0x21E615 | DOBD - UCX - Ladeelektronik: Wirkungsgrad außerhalb Bereich (Low) | 0 | - |
| 0x21E616 | DOBD - UCX - Ladeelektronik: Wirkungsgrad außerhalb Bereich (High) | 0 | - |
| 0x21E61C | DOBD - UCX - Ladeelektronik: AC Überstrom | 0 | - |
| 0x21E622 | DOBD - UCX - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E623 | DOBD - UCX - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E624 | DOBD - UCX - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E625 | DOBD - UCX - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E626 | DOBD - UCX - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E627 | DOBD - UCX - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E628 | DOBD - UCX - Ladeelektronik: HV AC Spannung unplausibel zu niedrig | 0 | - |
| 0x21E629 | DOBD - UCX - Ladeelektronik: HV AC Spannung unplausibel | 0 | - |
| 0x21E62A | DOBD - UCX - Ladeelektronik, Spannungssensor KL30C: Kurzschluß nach Masse | 0 | - |
| 0x21E62B | DOBD - UCX - Ladeelektronik, Spannungssensor KL30C: Kurzschluss nach Plus | 0 | - |
| 0x21E62C | DOBD - UCX - Ladeelektronik: Unterspannung KL30C | 0 | - |
| 0x21E62D | DOBD - UCX - Ladeelektronik: Überspannung KL30C | 0 | - |
| 0x21E62E | DOBD - UCX - Lade-Elektronik: Ladebereitschaft Leitung, Kurzschluss nach Masse | 0 | - |
| 0x21E62F | DOBD - UCX - Lade-Elektronik: Ladebereitschaft Leitung, Kurzschluss nach Plus | 0 | - |
| 0x21E630 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft, Signal außerhalb Sollbereich (unten) | 0 | - |
| 0x21E631 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft, Signal außerhalb Sollbereich (oben) | 0 | - |
| 0x21E632 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft, Signal unplausibel | 0 | - |
| 0x21E633 | DOBD - UCX - Ladeelektronik, Sensor Versorgungsspannung: Kurzschluss nach Masse | 0 | - |
| 0x21E634 | DOBD - UCX - Ladeelektronik, Sensor Versorgungsspannung: Kurzschluss nach Plus | 0 | - |
| 0x21E635 | DOBD - UCX - Ladeelektronik, Sensor Versorgungsspannung: Unplausibel im Vergleich zu KL30C | 0 | - |
| 0x21E636 | DOBD - UCX - Lade-Elektronik: Hochvolt DC Spannungssensor, Kalibrierung, Checksumme falsch | 0 | - |
| 0x21E637 | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Kurzschluss nach Masse | 0 | - |
| 0x21E638 | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Kurzschluss nach Plus | 0 | - |
| 0x21E639 | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x21E63A | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x21E63B | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Wert unplausibel | 0 | - |
| 0x21E63C | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Kurzschluss nach Masse | 0 | - |
| 0x21E63D | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Kurzschluss nach Plus | 0 | - |
| 0x21E63E | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x21E63F | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x21E641 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Kurzschluss nach Masse | 0 | - |
| 0x21E642 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Kurzschluss nach Plus | 0 | - |
| 0x21E643 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x21E644 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x21E645 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Wert unplausibel | 0 | - |
| 0x21E646 | DOBD - UCX - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x21E647 | DOBD - UCX - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x21E648 | DOBD - UCX - Ladeelektronik, AC Eingang: Strom unplausibel (Low) | 0 | - |
| 0x21E649 | DOBD - UCX - Ladeelektronik, AC Eingang: Strom unplausibel (High) | 0 | - |
| 0x21E64A | DOBD - UCX - Lade-Elektronik: digitaler Signalprozessor, Fehler der Uhr | 0 | - |
| 0x21E64B | DOBD - UCX - Lade-Elektronik: digitaler Signalprozessor, Crash-Sensor unplausibel | 0 | - |
| 0x21E64C | DOBD - UCX - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x21E64D | DOBD - UCX - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x21E64E | DOBD - UCX - Ladeelektronik: HV DC Stromsensor unplausibel und zu niedrig | 0 | - |
| 0x21E64F | DOBD - UCX - Ladeelektronik: HV DC Stromsensor unplausibel und zu hoch | 0 | - |
| 0x21E650 | DOBD - UCX - Lade-Elektronik: PFC Spannunssensor, Kurzschluss nach Masse | 0 | - |
| 0x21E651 | DOBD - UCX - Lade-Elektronik: PFC Spannunssensor, Kurzschluss nach Plus | 0 | - |
| 0x21E652 | DOBD - UCX - Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (unten) bei aktivem Laden | 0 | - |
| 0x21E653 | DOBD - UCX - Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei aktivem Laden | 0 | - |
| 0x21E654 | DOBD - UCX - Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei Vorladen | 0 | - |
| 0x21E655 | DOBD - UCX - Ladeelektronik: HV DC Spannung unplausibel | 0 | - |
| 0x21E656 | DOBD - UCX - Lade-Elektronik: Ausgangleistung unplausibel | 0 | - |
| 0x21E659 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Start unplausibel | 0 | - |
| 0x21E65A | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x21E65B | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x21E68F | DOBD - UCX - Ladeelektronik: Kein HV DC Strom trotz Ladeanforderung | 0 | - |
| 0x21E690 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Kurzschluss nach Masse | 0 | - |
| 0x21E691 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Kurzschluss nach Plus | 0 | - |
| 0x21E692 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Wert unplausibel | 0 | - |
| 0x21E69C | DOBD - UCX - Lade-Elektronik: Resonanzspule, Strom außerhalb Sollbereich | 0 | - |
| 0x21E69D | DOBD - UCX - Lade-Elektronik: Resonanzspule, Stromsensor, Kurzschluss nach Masse | 0 | - |
| 0x21E69E | DOBD - UCX - Lade-Elektronik: Resonanzspule, Stromsensor, Kurzschluss nach Plus | 0 | - |
| 0x21F000 | DOBD - SME - HVS: Hauptschalter (K2): Kurzschluss nach Masse | 0 | - |
| 0x21F001 | DOBD - SME - HVS: Hauptschalter (K2): Kurzschluss nach Ubatt | 0 | - |
| 0x21F002 | DOBD - SME - HVS: Hauptschalter (K2): offene Leitung | 0 | - |
| 0x21F003 | DOBD - SME - HVS: Hauptschalter (K1): Kurzschluss nach Masse | 0 | - |
| 0x21F004 | DOBD - SME - HVS: Hauptschalter (K1): Kurzschluss nach Ubatt | 0 | - |
| 0x21F005 | DOBD - SME - HVS: Hauptschalter (K1): offene Leitung | 0 | - |
| 0x21F006 | DOBD - SME - HVS: Hauptschalter (K3): Kurzschluss nach Masse | 0 | - |
| 0x21F007 | DOBD - SME - HVS: Hauptschalter (K3): Kurzschluss nach Ubatt | 0 | - |
| 0x21F008 | DOBD - SME - HVS: Hauptschalter (K3): offene Leitung | 0 | - |
| 0x21F009 | DOBD - SME - HVS: Hauptschalter (K2): Treiberfehler | 0 | - |
| 0x21F00A | DOBD - SME - HVS: Hauptschalter (K1): Treiberfehler | 0 | - |
| 0x21F00B | DOBD - SME - HVS: Hauptschalter (K3): Treiberfehler | 0 | - |
| 0x21F00E | DOBD - SME - SME: Spannungsversorgung intern- - 5V Spannung zu niedrig | 0 | - |
| 0x21F00F | DOBD - SME - HVS: Stromversorgung CSC- - Kurzschluss nach Masse | 0 | - |
| 0x21F010 | DOBD - SME - HVS: Stromversorgung CSC- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F011 | DOBD - SME - HVS: Stromversorgung CSC- - offene Leitung | 0 | - |
| 0x21F012 | DOBD - SME - HVS: CSC Treiberfehler | 0 | - |
| 0x21F013 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Masse | 0 | - |
| 0x21F014 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F015 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 | - |
| 0x21F016 | DOBD - SME - SME: Werte der Echtzeituhr unplausibel | 0 | - |
| 0x21F018 | DOBD - SME - Kühlventil: Kurzschluss nach Masse | 0 | - |
| 0x21F019 | DOBD - SME - Kühlventil: Kurzschluss nach Ubatt | 0 | - |
| 0x21F01A | DOBD - SME - Kühlventil: offene Leitung | 0 | - |
| 0x21F01B | DOBD - SME - Kühlventil: Treiberfehler | 0 | - |
| 0x21F01C | DOBD - SME - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 0 | - |
| 0x21F01D | DOBD - SME - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 0 | - |
| 0x21F01E | DOBD - SME - HVS: Temp.-Sensor Kühlung: Kurzschluss nach Masse | 0 | - |
| 0x21F01F | DOBD - SME - HVS: Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 | - |
| 0x21F02E | DOBD - SME - U/i-Sensor: Überlauf Strommessung | 0 | - |
| 0x21F02F | DOBD - SME - U/i-Sensor: Überlauf Messung Ubatt | 0 | - |
| 0x21F030 | DOBD - SME - U/i-Sensor: Überlauf Messung Uk2 | 0 | - |
| 0x21F031 | DOBD - SME - U/i-Sensor: Überlauf Messung Uq | 0 | - |
| 0x21F032 | DOBD - SME - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 | - |
| 0x21F033 | DOBD - SME - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 | - |
| 0x21F034 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 | - |
| 0x21F035 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 | - |
| 0x21F036 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Uk2 (oben) | 0 | - |
| 0x21F037 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Uk2 (unten) | 0 | - |
| 0x21F038 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Uq (oben) | 0 | - |
| 0x21F039 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Uq (unten) | 0 | - |
| 0x21F03A | DOBD - SME - HVS: U/i-Sensor - Steuerungsmodul BUS OFF | 0 | - |
| 0x21F03B | DOBD - SME - HVS: U/i-Sensor-Layer -  CRC-Fehler erkannt auf SME | 0 | - |
| 0x21F03D | DOBD - SME - HVS: U/i-Sensor -  Treiberfehler | 0 | - |
| 0x21F03E | DOBD - SME - HVS: U/i-Sensor -  interner U/i-Sensorfehler | 0 | - |
| 0x21F046 | DOBD - SME - HVS Heizung: Kurzschluss Heizelement | 0 | - |
| 0x21F047 | DOBD - SME - HVS Heizung: Unterbrechung Heizelement | 0 | - |
| 0x21F048 | DOBD - SME - HVS Heizung: Mosfet Leistungsschalter allgemeiner Defekt | 0 | - |
| 0x21F049 | DOBD - SME - HVS Heizung: Mosfet Leistungsschalter Defekt durchgeschaltet | 0 | - |
| 0x21F04A | DOBD - SME - HVS Heizung: Mosfet Leistungsschalter Überhitzung | 0 | - |
| 0x21F04B | DOBD - SME - HVS Heizung: Kurzschluss ZK+ nach HV+ | 0 | - |
| 0x21F04E | DOBD - SME - HVS Heizung: Strommessung Überlast | 0 | - |
| 0x21F04F | DOBD - SME - HVS Heizung: Spannungsmessung Batterie Unterspannung | 0 | - |
| 0x21F050 | DOBD - SME - HVS Heizung: Spannungsmessung Batterie Überspannung | 0 | - |
| 0x21F051 | DOBD - SME - HVS Heizung: Strommessung Plausibilisierung fehlerhaft | 0 | - |
| 0x21F054 | DOBD - SME - HVS: CSC CAN: Steuerungsmodul BUS OFF | 0 | - |
| 0x21F056 | DOBD - SME - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F057 | DOBD - SME - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F058 | DOBD - SME - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F059 | DOBD - SME - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F05A | DOBD - SME - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F05B | DOBD - SME - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F05C | DOBD - SME - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F05D | DOBD - SME - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F05E | DOBD - SME - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F05F | DOBD - SME - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F060 | DOBD - SME - HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F061 | DOBD - SME - HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F062 | DOBD - SME - HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F063 | DOBD - SME - HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F064 | DOBD - SME - HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F065 | DOBD - SME - HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F096 | DOBD - SME - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F097 | DOBD - SME - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F098 | DOBD - SME - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F099 | DOBD - SME - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F09A | DOBD - SME - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F09B | DOBD - SME - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F09C | DOBD - SME - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F09D | DOBD - SME - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F09E | DOBD - SME - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F09F | DOBD - SME - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A0 | DOBD - SME - HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A1 | DOBD - SME - HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A2 | DOBD - SME - HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A3 | DOBD - SME - HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A4 | DOBD - SME - HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A5 | DOBD - SME - HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0C9 | DOBD - SME - Service Disconnect: Auswertung unplausibel | 0 | - |
| 0x21F0CA | DOBD - SME - Crash: Crash I (ACAN, reversibel) festgestellt | 0 | - |
| 0x21F0CB | DOBD - SME - Crash: Crash II (ACAN und KL30C, irreversibel) festgestellt | 0 | - |
| 0x21F0CF | DOBD - SME - Kühlventil: Ventil lässt sich nicht schließen | 0 | - |
| 0x21F0D0 | DOBD - SME - Kühlventil: Ventil lässt sich nicht öffnen | 0 | - |
| 0x21F0D2 | DOBD - SME - HVS: Hauptschalter: neg. Schütze kleben | 0 | - |
| 0x21F0D3 | DOBD - SME - HVS: Hauptschalter: neg. Schütze lassen sich nicht schließen | 0 | - |
| 0x21F0D4 | DOBD - SME - HVS: Hauptschalter: pos. Schütze kleben | 0 | - |
| 0x21F0D5 | DOBD - SME - HVS: Hauptschalter: pos. Schütze lassen sich nicht schließen oder Sicherung ausgelöst | 0 | - |
| 0x21F0D7 | DOBD - SME - Stromüberwachung: Leitungsschutzgrenze verletzt | 0 | - |
| 0x21F0D8 | DOBD - SME - Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 0 | - |
| 0x21F0D9 | DOBD - SME - Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 0 | - |
| 0x21F0DC | DOBD - SME - Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 0 | - |
| 0x21F0DD | DOBD - SME - Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 0 | - |
| 0x21F0DE | DOBD - SME - HVS: HV-Interlock: kein Signal erzeugt | 0 | - |
| 0x21F0DF | DOBD - SME - HV-Interlock: offene Leitung | 0 | - |
| 0x21F0E0 | DOBD - SME - HV-Interlock: Kurzschluss in Schleife | 0 | - |
| 0x21F0E1 | DOBD - SME - HV-Interlock: Kurzschluss nach Ubatt | 0 | - |
| 0x21F0E2 | DOBD - SME - HV-Interlock: Kurzschluss nach Masse | 0 | - |
| 0x21F0E8 | DOBD - SME - Vorladung -  Strom zu hoch | 0 | - |
| 0x21F0E9 | DOBD - SME - Vorladung -  Nicht erfolgreich. Erhöhter Leckstrom im HV-System | 0 | - |
| 0x21F0EB | DOBD - SME - Vorladung -  Kurzschluss im Zwischenkreis detektiert | 0 | - |
| 0x21F0EC | DOBD - SME - Plausibilität Stromwert -  Strom unplausibel. Kein Ersatzwert vorhanden | 0 | - |
| 0x21F0ED | DOBD - SME - HVS: Plausibilität Zwischenkreisspannung -  Spannung fehlerhaft, kein Ersatzwert vorhanden | 0 | - |
| 0x21F0F0 | DOBD - SME - HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, kein Ersatzwert vorhanden | 0 | - |
| 0x21F0F3 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 1 -  Spannung unplausibel | 0 | - |
| 0x21F0F4 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 2 -  Spannung unplausibel | 0 | - |
| 0x21F0F5 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 3 -  Spannung unplausibel | 0 | - |
| 0x21F0F6 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 4 -  Spannung unplausibel | 0 | - |
| 0x21F0F7 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 5 -  Spannung unplausibel | 0 | - |
| 0x21F0F8 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 6 -  Spannung unplausibel | 0 | - |
| 0x21F0F9 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 7 -  Spannung unplausibel | 0 | - |
| 0x21F0FA | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 8 -  Spannung unplausibel | 0 | - |
| 0x21F103 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 1 unplausibel | 0 | - |
| 0x21F104 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 2 unplausibel | 0 | - |
| 0x21F105 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 3 unplausibel | 0 | - |
| 0x21F106 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 4 unplausibel | 0 | - |
| 0x21F107 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 5 unplausibel | 0 | - |
| 0x21F108 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 6 unplausibel | 0 | - |
| 0x21F109 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 7 unplausibel | 0 | - |
| 0x21F10A | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 8 unplausibel | 0 | - |
| 0x21F113 | DOBD - SME - HVS: Zelltemperaturen: Sammelfehler - Zu viele Sensoren unplausibel oder ausgefallen | 0 | - |
| 0x21F114 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 1 ausgefallen | 0 | - |
| 0x21F115 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 2 ausgefallen | 0 | - |
| 0x21F116 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 3 ausgefallen | 0 | - |
| 0x21F117 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 4 ausgefallen | 0 | - |
| 0x21F118 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 5 ausgefallen | 0 | - |
| 0x21F119 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 6 ausgefallen | 0 | - |
| 0x21F11A | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 7 ausgefallen | 0 | - |
| 0x21F11B | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 8 ausgefallen | 0 | - |
| 0x21F125 | DOBD - SME - HVS: Zelltemperaturen: CSC 1 Übertemperatur | 0 | - |
| 0x21F126 | DOBD - SME - HVS: Zelltemperaturen: CSC 2 Übertemperatur | 0 | - |
| 0x21F127 | DOBD - SME - HVS: Zelltemperaturen: CSC 3 Übertemperatur | 0 | - |
| 0x21F128 | DOBD - SME - HVS: Zelltemperaturen: CSC 4 Übertemperatur | 0 | - |
| 0x21F129 | DOBD - SME - HVS: Zelltemperaturen: CSC 5 Übertemperatur | 0 | - |
| 0x21F12A | DOBD - SME - HVS: Zelltemperaturen: CSC 6 Übertemperatur | 0 | - |
| 0x21F12B | DOBD - SME - HVS: Zelltemperaturen: CSC 7 Übertemperatur | 0 | - |
| 0x21F12C | DOBD - SME - HVS: Zelltemperaturen: CSC 8 Übertemperatur | 0 | - |
| 0x21F135 | DOBD - SME - HVS: Widerstand der Heizung nicht im erwarteten Bereich | 0 | - |
| 0x21F136 | DOBD - SME - HVS: Fehlerhafte Wärmeleitung zum Hochvoltspeicher | 0 | - |
| 0x21F139 | DOBD - SME - Ladungszustand: kritische untere SoC-Grenze erreicht | 0 | - |
| 0x21F15C | DOBD - SME - SME: Sicherheitskonzept -  Abschaltung durch Ebene2 | 0 | - |
| 0x21F15D | DOBD - SME - SME: Sicherheitskonzept - Speicher-ECC-Fehler | 0 | - |
| 0x21F17E | DOBD - SME - HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 | - |
| 0x21F1C1 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 1 festgestellt | 0 | - |
| 0x21F1C2 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 2 festgestellt | 0 | - |
| 0x21F1C3 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 3 festgestellt | 0 | - |
| 0x21F1C4 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 4 festgestellt | 0 | - |
| 0x21F1C5 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 5 festgestellt | 0 | - |
| 0x21F1C6 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 6 festgestellt | 0 | - |
| 0x21F1C7 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 7 festgestellt | 0 | - |
| 0x21F1C8 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 8 festgestellt | 0 | - |
| 0x21F1F7 | DOBD - SME - Stromsensor Heizung: außerhalb Bereich (oben) | 0 | - |
| 0x21F1FB | DOBD - SME - HVS: CSC CAN: CSC 1 fehlt | 0 | - |
| 0x21F1FC | DOBD - SME - HVS: CSC CAN: CSC 2 fehlt | 0 | - |
| 0x21F1FD | DOBD - SME - HVS: CSC CAN: CSC 3 fehlt | 0 | - |
| 0x21F1FE | DOBD - SME - HVS: CSC CAN: CSC 4 fehlt | 0 | - |
| 0x21F1FF | DOBD - SME - HVS: CSC CAN: CSC 5 fehlt | 0 | - |
| 0x21F200 | DOBD - SME - HVS: CSC CAN: CSC 6 fehlt | 0 | - |
| 0x21F201 | DOBD - SME - HVS: CSC CAN: CSC 7 fehlt | 0 | - |
| 0x21F202 | DOBD - SME - HVS: CSC CAN: CSC 8 fehlt | 0 | - |
| 0x21F20A | DOBD - SME - Plausibilität Kühlmittelsensor - Kühlmittelsensor liefert unplausible Werte zurück | 0 | - |
| 0x21F20B | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 1 aufgetreten | 0 | - |
| 0x21F20C | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 2 aufgetreten | 0 | - |
| 0x21F20D | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 3 aufgetreten | 0 | - |
| 0x21F20E | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 4 aufgetreten | 0 | - |
| 0x21F20F | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 5 aufgetreten | 0 | - |
| 0x21F210 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 6 aufgetreten | 0 | - |
| 0x21F211 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 7 aufgetreten | 0 | - |
| 0x21F212 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 8 aufgetreten | 0 | - |
| 0x21F21D | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 1 | 0 | - |
| 0x21F21E | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 2 | 0 | - |
| 0x21F21F | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 3 | 0 | - |
| 0x21F220 | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 4 | 0 | - |
| 0x21F221 | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 5 | 0 | - |
| 0x21F222 | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 6 | 0 | - |
| 0x21F223 | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 7 | 0 | - |
| 0x21F224 | DOBD - SME - HVS: CSC Funktion: kritischer Hardwaredefekt in Modul 8 | 0 | - |
| 0x21F231 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F232 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F233 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F234 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F235 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F236 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F237 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F238 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F241 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F242 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F243 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F244 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F245 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F246 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F247 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F248 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F252 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 1, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F253 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 2, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F254 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 3, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F255 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 4, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F256 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 5, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F257 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 6, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F258 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 7, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F259 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 8, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F28A | DOBD - SME - HVS: Echtzeituhr - Abgleich mit Relativzeit unplausibel | 0 | - |
| 0x21F295 | DOBD - SME - Stromüberwachung: Zellsicherheitsgrenze verletzt | 0 | - |
| 0x21F296 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F297 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F298 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F299 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F29A | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F29B | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F29C | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F29D | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F2C1 | DOBD - SME - HVS: Symmetrierschaltung Modul 1 ausgefallen | 0 | - |
| 0x21F2C2 | DOBD - SME - HVS: Symmetrierschaltung Modul 2 ausgefallen | 0 | - |
| 0x21F2C3 | DOBD - SME - HVS: Symmetrierschaltung Modul 3 ausgefallen | 0 | - |
| 0x21F2C4 | DOBD - SME - HVS: Symmetrierschaltung Modul 4 ausgefallen | 0 | - |
| 0x21F2C5 | DOBD - SME - HVS: Symmetrierschaltung Modul 5 ausgefallen | 0 | - |
| 0x21F2C6 | DOBD - SME - HVS: Symmetrierschaltung Modul 6 ausgefallen | 0 | - |
| 0x21F2C7 | DOBD - SME - HVS: Symmetrierschaltung Modul 7 ausgefallen | 0 | - |
| 0x21F2C8 | DOBD - SME - HVS: Symmetrierschaltung Modul 8 ausgefallen | 0 | - |
| 0x222000 | Qualifierueberwachung, CAN von eDME, Signalausfall 1 | 0 | - |
| 0x222001 | Qualifierueberwachung, CAN von eDME, Signalausfall 2 | 0 | - |
| 0x222002 | Qualifierueberwachung, CAN von eDME, Signalausfall 3 | 0 | - |
| 0x222003 | Qualifierueberwachung, CAN von eDME, Signalausfall 4 | 0 | - |
| 0x222004 | Qualifierueberwachung, CAN von SME, Signalausfall 1 | 0 | - |
| 0x222005 | Qualifierueberwachung, CAN von SME, Signalausfall 2 | 0 | - |
| 0x222006 | Qualifierueberwachung, CAN von SME, Signalausfall 3 | 0 | - |
| 0x222007 | Qualifierueberwachung, CAN von SME, Signalausfall 4 | 0 | - |
| 0x222072 | EME, E-Maschinenregelung, E-Maschine: Überschreiten der  vorgelagerten Drehzahlschwelle | 0 | - |
| 0x222371 | Versorgungsspannungen Inverter-Gate-Driver außerhalb erlaubtem Bereich | 0 | - |
| 0x222503 | interne Ladeelektronik; Charge_Enable Signal nicht vorhanden. | 0 | - |
| 0x222504 | interne Ladeelektronik; AC-Spannung wird nicht gemessen. (Sensordefekt oder Kabelschaden) | 0 | - |
| 0x222508 | SLE, Überstromerkennung DC-Strom, max. Wert überschritten | 0 | - |
| 0x222509 | SLE, Überspannungserkennung PFC-Zwischenkreiskondensator, max. Wert überschritten | 0 | - |
| 0x22250A | SLE, Überspannungserkennung PFC-Zwischenkreis, max. Wert überschritten | 0 | - |
| 0x22250B | SLE, Unterspannungserkennung LLCHV Zwischenkreis, min. Wert unterschritten | 0 | - |
| 0x22250C | SLE, Übertemperaturerkennung PFC-Stufe, max. Wert überschritten | 0 | - |
| 0x22250E | SLE, Überspannungserkennung Eingangswechselspannung, max. Wert überschritten | 0 | - |
| 0x222635 | AEPH, AKS | 0 | - |
| 0x222700 | FUSI, Radblockiererkennung: Anforderung 0 Nm aktiv | 0 | - |
| 0x222750 | DME, FuSi: Safe State Request von der DME | 1 | - |
| 0x222751 | DME, FuSi: Safe State Request Signalausfall von der DME | 1 | - |
| 0x222752 | EGS, FuSi: Safe State Request von der DME | 1 | - |
| 0x222753 | EGS, FuSi: Safe State Request Signalausfall von dem EGS | 1 | - |
| 0x222754 | DME, FuSi: Safe State der DME via Level 1 not possible | 1 | - |
| 0x222755 | DME, FuSi: Safe State wegen Signalausfall der DME via Level 1 not possible | 0 | - |
| 0x222756 | EGS, FuSi: Safe State vom EGS via Level 1 not possible | 1 | - |
| 0x222757 | EGS, FuSi: Safe State wegen Signalausfall des EGS via Level 1 not possible | 1 | - |
| 0x222783 | FUSI SPT Keine HV Fehler | 0 | - |
| 0x22278D | safe state request rootcause monitoring | 0 | - |
| 0x22278E | safe state requeste record monitoring | 0 | - |
| 0x222801 | Einfacher UCX-Schützkleber | 0 | - |
| 0x222802 | Doppelter UCX-Schützkleber | 0 | - |
| 0x222803 | Degradation von Ladehardware | 0 | - |
| 0x222804 | Fehler Steckererkennung | 0 | - |
| 0x222808 | HV-Powermanagement: Ausfall / Fehlverhalten des DCDC-Wandlers | 0 | - |
| 0x222809 | HV-Powermanagement: Abschaltaufforderer Kat 1 | 0 | - |
| 0x22280A | HV-Powermanagement: Abschaltaufforderer Kat 2 | 0 | - |
| 0x22280B | HV-Powermanagement: Abschaltaufforderer Kat 4 | 0 | - |
| 0x22280C | HV-Powermanagement: eKMV degradiert bei Fahrbereitschaft | 1 | - |
| 0x22280D | HV-Powermanagement: Verhindern Standfunktionen aufgrund niedrigem Ladezustand HV-Batterie | 1 | - |
| 0x22280E | HV-Batterie: Ausfall Batteriekühlung | 1 | - |
| 0x22281E | Checkcontrol 790: Notentriegelung betätigt - Nur zum Rangieren | 0 | - |
| 0x222823 | FIS zum Auslösen der CCM 791 | 0 | - |
| 0x222827 | Checkcontrol 174: Getriebe-Position P nur im Stillstand! | 0 | - |
| 0x222828 | Checkcontrol 175: Getriebe-Position P gestört! | 0 | - |
| 0x222829 | Checkcontrol 203: Getriebe in Position N! | 0 | - |
| 0x22282A | Checkcontrol 244: Zum Gang einlegen Bremse treten! | 0 | - |
| 0x22282B | Checkcontrol 250: Gang ohne Bremse einlegbar! | 0 | - |
| 0x22282C | Checkcontrol 252: Gong | 0 | - |
| 0x22282D | Checkcontrol 394: Eventuell Wahlhebel gestört! | 0 | - |
| 0x22282E | Checkcontrol 557: Fahrzeug gegen Wegrollen sichern! | 0 | - |
| 0x222830 | Checkcontrol 251: Getriebe-Position P wird eingelegt! | 0 | - |
| 0x222837 | Anforderung EMF-Hilferuf oder Hill-Hold-Rückfallebene in Getriebeposition N | 0 | - |
| 0x222838 | Anforderung EMF-Hilferuf oder Hill-Hold-Rückfallebene in Getriebeposition D oder R | 0 | - |
| 0x2228FF | Fahrstufe N wurde eingelegt. Dauergong! | 0 | - |
| 0x222904 | Getriebeposition P kann nicht ausgelegt werden! | 0 | - |
| 0x222A01 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, Kurzschluss nach Ubat | 0 | - |
| 0x222A03 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, Kurzschluss nach Masse | 0 | - |
| 0x222A05 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, obere Schwelle überschritten | 0 | - |
| 0x222A07 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Umrichter Referenzspannung, untere Schwelle unterschritten | 0 | - |
| 0x222A16 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase U fehlerhaft | 0 | - |
| 0x222A18 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase V fehlerhaft | 0 | - |
| 0x222A1A | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase W fehlerhaft | 0 | - |
| 0x222A1C | Interner Fehler, Messwerterfassung, Sensor: DC Strom Inverter fehlerhaft | 0 | - |
| 0x222A1E | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase U fehlerhaft | 0 | - |
| 0x222A20 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase V fehlerhaft | 0 | - |
| 0x222A22 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase W fehlerhaft | 0 | - |
| 0x222A24 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 12V Klemme 30B fehlerhaft | 0 | - |
| 0x222A26 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 5V CY320_MC0 fehlerhaft | 0 | - |
| 0x222A28 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 3.3V CY320_MC0 fehlerhaft | 0 | - |
| 0x222A2A | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 1.5V CY320_MC0 fehlerhaft | 0 | - |
| 0x222A2C | Interner Fehler, Messwerterfassung, Sensor: Zwischenkreisspannung fehlerhaft | 0 | - |
| 0x222A2E | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase U (redundant) fehlerhaft | 0 | - |
| 0x222A30 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase V (redundant) fehlerhaft | 0 | - |
| 0x222A32 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase W (redundant) fehlerhaft | 0 | - |
| 0x222A34 | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Inverter fehlerhaft | 0 | - |
| 0x222A36 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzsteller-Strom 1 fehlerhaft | 0 | - |
| 0x222A38 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzsteller-Strom 2 fehlerhaft | 0 | - |
| 0x222A3C | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktwandler fehlerhaft | 0 | - |
| 0x222A3E | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller fehlerhaft | 0 | - |
| 0x222A40 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter fehlerhaft | 0 | - |
| 0x222A42 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board fehlerhaft | 0 | - |
| 0x222A44 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Spannung Niedervoltseite fehlerhaft | 0 | - |
| 0x222A46 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom auf der Niedervoltseite fehlerhaft | 0 | - |
| 0x222A48 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gatetreiber Spannung fehlerhaft | 0 | - |
| 0x222A4A | Interner Fehler, Messwerterfassung, Sensor: analoger Messeingang SIN-Resolversignal fehlerhaft | 0 | - |
| 0x222A4C | Interner Fehler, Messwerterfassung, Sensor: analoger Messeingang COS-Resolversignal | 0 | - |
| 0x222A4E | Interner Fehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 1 fehlerhaft | 0 | - |
| 0x222A50 | Interner Fehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 2 fehlerhaft | 0 | - |
| 0x222A52 | Interner Fehler, Messwerterfassung, Sensor: Strommessung Parksperre Halbbrücke 1 fehlerhaft | 0 | - |
| 0x222A54 | Interner Fehler, Messwerterfassung, Sensor: Strommessung Parksperre Halbbrücke 2 fehlerhaft | 0 | - |
| 0x222A56 | Interner Fehler, Messwerterfassung, Sensor: Stromrückmessung Parksperrenaktuator Ansteuerung fehlerhaft | 0 | - |
| 0x222A58 | Interner Fehler, Messwerterfassung, Sensor: Stromsignal der elektrischen Unterdruckpumpe fehlerhaft | 0 | - |
| 0x222A5A | Interner Fehler, Messwerterfassung, Sensor: analoges Messsignal Überwachung ELUP-Spannung fehlerhaft | 0 | - |
| 0x222A5C | Interner Fehler, Messwerterfassung, Sensor: Temperatur ELUP Endstufe fehlerhaft | 0 | - |
| 0x222A5E | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 5V CY320_MC2 fehlerhaft | 0 | - |
| 0x222A60 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 3.3V CY320_MC2 fehlerhaft | 0 | - |
| 0x222A62 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 1.5V CY320_MC2 fehlerhaft | 0 | - |
| 0x222A64 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interne 32V fehlerhaft | 0 | - |
| 0x222A66 | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Controllerboard fehlerhaft | 0 | - |
| 0x222A68 | Interner Fehler, Messwerterfassung, Sensor: CPLD Version fehlerhaft | 0 | - |
| 0x222A6A | Interner Fehler, Messwerterfassung, Sensor: SLE Eingangsspannung fehlerhaft | 0 | - |
| 0x222A6C | Interner Fehler, Messwerterfassung, Sensor: Spannung Ausgang  PFC Stufe fehlerhaft | 0 | - |
| 0x222A6E | Interner Fehler, Messwerterfassung, Sensor: Steuer-/Ladeelektronik Pic nicht verbunden | 0 | - |
| 0x222A70 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Pic nicht verbunden | 0 | - |
| 0x222A72 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Trafo fehlerhaft | 0 | - |
| 0x222A74 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Trafo fehlerhaft | 0 | - |
| 0x222A76 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Spannung2 Niedervoltseite fehlerhaft | 0 | - |
| 0x222A78 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom2 auf der Niedervoltseite fehlerhaft | 0 | - |
| 0x222A7C | Interner Fehler, Messwerterfassung, Sensor: SLE LLC HV Ausgangsspannung fehlerhaft | 0 | - |
| 0x222A7E | Interner Fehler, Messwerterfassung, Sensor: Messsignal Motortemperatur Drahtspuelenende fehlerhaft | 0 | - |
| 0x222A80 | Interner Fehler, Messwerterfassung, Sensor: Messsignal Motortemperatur Stator fehlerhaft | 0 | - |
| 0x222A82 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Gatedriver fehlerhaft | 0 | - |
| 0x222A84 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Phasenstromsensoren fehlerhaft | 0 | - |
| 0x222A87 | Interner Fehler, Messwerterfassung, Sensor: Zweiganggetriebe Feedback H-Brücke 1 fehlerhaft | 0 | - |
| 0x222A89 | Interner Fehler, Messwerterfassung, Sensor: Zweiganggetriebe Feedback H-Brücke 2 fehlerhaft | 0 | - |
| 0x222A8B | Interner Fehler, Messwerterfassung, Sensor: Zweiganggetriebe Aktuatorstrom fehlerhaft | 0 | - |
| 0x222A8D | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Versorgungsspannung 1 fehlerhaft | 0 | - |
| 0x222A8F | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Versorgungsspannung 2 fehlerhaft | 0 | - |
| 0x222A91 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC2 Versorgungsspannung 3 fehlerhaft | 0 | - |
| 0x222A93 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Versorgungsspannung 1 fehlerhaft | 0 | - |
| 0x222A95 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Versorgungsspannung 2 fehlerhaft | 0 | - |
| 0x222A97 | Interner Fehler, Messwerterfassung, Sensor: CY320 MC0 Versorgungsspannung 3 fehlerhaft | 0 | - |
| 0x222A99 | Interner Fehler, Messwerterfassung, Sensor: Feedback Signal für Parksperrenaktuator Notfallentriegelung fehlerhaft | 0 | - |
| 0x222A9B | Interner Fehler, Messwerterfassung, Sensor: Diagnoseeingang für Massefehler fehlerhaft | 0 | - |
| 0x222A9D | Interner Fehler, Messwerterfassung, Sensor: 2.5V Spannungseingang Dcdc Board fehlerhaft | 0 | - |
| 0x222A9F | Interner Fehler, Messwerterfassung, Sensor: 3.3V Spannungseingang Dcdc Board fehlerhaft | 0 | - |
| 0x222AA1 | Interner Fehler, Messwerterfassung, Sensor: 5V Spannungseingang Dcdc Board fehlerhaft | 0 | - |
| 0x222AA3 | Interner Fehler, Messwerterfassung, Sensor: gefilterter Dcdc Trafostrom fehlerhaft | 0 | - |
| 0x222AA5 | Interner Fehler, Messwerterfassung, Sensor: gefilterter SLE LLC Strom fehlerhaft | 0 | - |
| 0x222AA7 | Interner Fehler, Messwerterfassung, Sensor: gefilterter Effektivwert von SLE PFC Strom fehlerhaft | 0 | - |
| 0x222AA9 | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Board Temperatur 1 fehlerhaft | 0 | - |
| 0x222AAB | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE Hochvolttemperatur fehlerhaft | 0 | - |
| 0x222AAD | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE LLC Transformator Temperatur fehlerhaft | 0 | - |
| 0x222AAF | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Zwischenkreis Temperatur fehlerhaft | 0 | - |
| 0x222AB1 | Interner Fehler, Messwerterfassung, Sensor: SLE 3V A/D Konverter Referenzspannung fehlerhaft | 0 | - |
| 0x222AB3 | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Board Temperatur 2 fehlerhaft | 0 | - |
| 0x222AB5 | Interner Fehler, Messwerterfassung, Sensor: gefilterte SLE PFC Board Temperatur 3 fehlerhaft | 0 | - |
| 0x222AE4 | SLE  AC-Spannung Sensor Kurzschluß zu Masse | 0 | - |
| 0x222AE6 | SLE  PFC-Spannung  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AE8 | SLE  Zwischenkreis-Spannung  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AE9 | SLE AC Strom Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEA | SLE AC Strom  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AEC | SLE  HV Strom  Sensor  Kurzschluß zu Masse | 0 | - |
| 0x222AED | SLE LLC-Temperatursensor Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AEF | SLE Transformator Temperatursensor Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF1 | SLE Drossel (HV)  Temperatur Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF3 | SLE PFC_T_Sensor_1 Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF5 | SLE PFC_T_Sensor_2 Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AF7 | SLE PFC_T_Sensor_3 Sensor  Kurzschluß zu Batterie | 0 | - |
| 0x222AFA | SLE  AC-Spannung hat untere Schwelle unterschritten | 0 | - |
| 0x222AFC | SLE  PFC-Spannung hat untere Schwelle unterschritten | 0 | - |
| 0x222AFE | SLE  Zwischenkreis-Spannung hat untere Schwelle unterschritten | 0 | - |
| 0x222AFF | SLE AC Strom hat obere Schwelle überschritten | 0 | - |
| 0x222B00 | SLE AC Strom hat untere Schwelle unterschritten | 0 | - |
| 0x222B02 | SLE  HV Strom hat untere Schwelle unterschritten | 0 | - |
| 0x222B04 | SLE LLC-Temperatursensor hat untere Schwelle unterschritten | 0 | - |
| 0x222B06 | SLE Transformator Temperatursensor Sensor hat untere Schwelle unterschritten | 0 | - |
| 0x222B08 | SLE Drossel (HV) Temperatur hat obere Schwelle hat untere Schwelle unterschritten | 0 | - |
| 0x222B0A | SLE PFC_T_Sensor_1 hat untere Schwelle unterschritten | 0 | - |
| 0x222B0C | SLE PFC_T_Sensor_2 hat untere Schwelle unterschritten | 0 | - |
| 0x222B0E | SLE PFC_T_Sensor_3 hat untere Schwelle unterschritten | 0 | - |
| 0x222B7A | DC-Überstrom Inverter | 0 | - |
| 0x222BB2 | AE, Interner Fehler, Messwerterfassung, Sensor: Stromsignal der elektrischen Unterdruckpumpe fehlerhaft | 0 | - |
| 0x222C00 | Diagnose, AKS via Diagnosejob angefordert | 0 | - |
| 0x222D10 | Ebene2 Fehler PS, Command-Auswertung E1/E2 unterschiedlich | 0 | - |
| 0x222D11 | Ebene2 Fehler PS, EWS-Auswertung E1/E2 unterschiedlich | 0 | - |
| 0x222D12 | Ebene2 Fehler PS, Sensor-Auswertung E1/E2 unterschiedlich | 0 | - |
| 0x222D13 | Ebene2 Fehler PS, Strom Aktuator in Ruhe zu hoch | 0 | - |
| 0x222D14 | Ebene2 Fehler PS, 10ms-Task E1 nicht aktiv | 0 | - |
| 0x222D15 | Ebene2 Fehler PS, Timeout Positionsverstellung | 0 | - |
| 0x222D16 | Ebene2 Fehler PS, Timeout Init 10ms-Task E1 | 0 | - |
| 0x222D17 | Ebene2 Fehler PS, Drehrichtung PS schliessen falsch | 0 | - |
| 0x222D18 | Ebene2 Fehler PS, Unbekannter Zustand Regler beim PS schliessen | 0 | - |
| 0x222D19 | Ebene2 Fehler PS, Drehrichtung PS oeffnen falsch | 0 | - |
| 0x222D1A | Ebene2 Fehler PS, Unbekannter Zustand Regler beim PS oeffnen | 0 | - |
| 0x222D1B | Ebene2 Fehler PS, PWM im Ruhezustand > 0 | 0 | - |
| 0x222D1C | Ebene2 Fehler PS, PS-Positionsänderung ohne gültiges PS-Kommando | 0 | - |
| 0x22332D | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22332E | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22332F | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223330 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223331 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223332 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x2233BC | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_4_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x2233BD | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_5_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223800 | SME, DTC_ACAN_BUS_BUS_OFF, 0xCAC486 | 0 | - |
| 0x223801 | SME, DTC_ACAN_MSG_A_TEMP_RX_FAIL, 0xCAD401 | 0 | - |
| 0x223802 | SME, DTC_ACAN_MSG_RLS_COOL_RX_FAIL, 0xCAD409 | 0 | - |
| 0x223803 | SME, DTC_ACAN_MSG_V_VEH_RX_FAIL, 0xCAD40A | 0 | - |
| 0x223804 | SME, DTC_ACAN_MSG_KLEMMEN_RX_FAIL, 0xCAD40C | 0 | - |
| 0x223805 | SME, DTC_ACAN_MSG_SPEC_DCSW_RX_FAIL, 0xCAD415 | 0 | - |
| 0x223806 | SME, DTC_ACAN_RQ_CLO_DCSW_INVALID, 0xCAD416 | 0 | - |
| 0x223807 | SME, DTC_MAINSW_K2_SHORT_GND, 0x21F000 | 0 | - |
| 0x223808 | SME, DTC_MAINSW_K2_SHORT_BAT, 0x21F001 | 0 | - |
| 0x223809 | SME, DTC_MAINSW_K2_OPEN_CABLE, 0x21F002 | 0 | - |
| 0x22380A | SME, DTC_MAINSW_K1_SHORT_GND, 0x21F003 | 0 | - |
| 0x22380B | SME, DTC_MAINSW_K1_SHORT_BAT, 0x21F004 | 0 | - |
| 0x22380C | SME, DTC_MAINSW_K1_OPEN_CABLE, 0x21F005 | 0 | - |
| 0x22380D | SME, DTC_MAINSW_K3_SHORT_GND, 0x21F006 | 0 | - |
| 0x22380E | SME, DTC_MAINSW_K3_SHORT_BAT, 0x21F007 | 0 | - |
| 0x22380F | SME, DTC_MAINSW_K3_OPEN_CABLE, 0x21F008 | 0 | - |
| 0x223810 | SME, FIS_DTC_MAINSW_K2_DRIVER_ERROR, 0x21F009 | 0 | - |
| 0x223811 | SME, FIS_DTC_MAINSW_K1_DRIVER_ERROR, 0x21F00A | 0 | - |
| 0x223812 | SME, FIS_DTC_MAINSW_K3_DRIVER_ERROR, 0x21F00B | 0 | - |
| 0x223813 | SME, FIS_DTC_SUPPLY_VOLT_5_LOW, 0x21F00E | 0 | - |
| 0x223814 | SME, FIS_DTC_CSC_POWER_SUP_SHORT_GND, 0x21F00F | 0 | - |
| 0x223815 | SME, FIS_DTC_CSC_POWER_SUP_SHORT_BAT, 0x21F010 | 0 | - |
| 0x223816 | SME, FIS_DTC_CSC_POWER_SUP_OPN_CBL, 0x21F011 | 0 | - |
| 0x223817 | SME, FIS_DTC_CSC_POWER_SUP_DRIVER_ERROR, 0x21F012 | 0 | - |
| 0x223818 | SME, FIS_DTC_ISENS_SUP_SHORT_GND, 0x21F013 | 0 | - |
| 0x223819 | SME, FIS_DTC_ISENS_SUP_SHORT_BAT, 0x21F014 | 0 | - |
| 0x22381A | SME, FIS_DTC_ISENS_SUP_OPN_CBL, 0x21F015 | 0 | - |
| 0x22381B | SME, FIS_DTC_COOL_VLV_SHORT_GND, 0x21F018 | 0 | - |
| 0x22381C | SME, FIS_DTC_COOL_VLV_SHORT_BAT, 0x21F019 | 0 | - |
| 0x22381D | SME, FIS_DTC_COOL_VLV_OPN_CBL, 0x21F01A | 0 | - |
| 0x22381E | SME, FIS_DTC_COOL_VLV_DRIVER_ERROR, 0x21F01B | 0 | - |
| 0x22381F | SME, FIS_DTC_COOLSYS_TEMP_RANGE_HI, 0x21F01C | 0 | - |
| 0x223820 | SME, FIS_DTC_COOLSYS_TEMP_RANGE_LO, 0x21F01D | 0 | - |
| 0x223821 | SME, FIS_DTC_COOLSYS_TSENS_SHORT_GND, 0x21F01E | 0 | - |
| 0x223822 | SME, FIS_DTC_COOLSYS_TSENS_SHORT_BAT, 0x21F01F | 0 | - |
| 0x223823 | SME, FIS_DTC_ECU_UNEXPECTED_SHUTDOWN, 0x21F022 | 0 | - |
| 0x223824 | SME, FIS_DTC_ECU_RAM_DEFECT_INIT, 0x21F023 | 0 | - |
| 0x223825 | SME, FIS_DTC_ECU_RAM_DEFECT_RUN, 0x21F024 | 0 | - |
| 0x223826 | SME, FIS_DTC_ECU_ROM_DEFECT_RUN, 0x21F025 | 0 | - |
| 0x223827 | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_CURRENT, 0x21F02E | 0 | - |
| 0x223828 | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_UBAT, 0x21F02F | 0 | - |
| 0x223829 | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_UK2, 0x21F030 | 0 | - |
| 0x22382A | SME, FIS_DTC_ISENS_OVERFLOW_MEAS_UQ, 0x21F031 | 0 | - |
| 0x22382B | SME, FIS_DTC_ISENS_I_OUTOFRANGE_HI, 0x21F032 | 0 | - |
| 0x22382C | SME, FIS_DTC_ISENS_I_OUTOFRANGE_LO, 0x21F033 | 0 | - |
| 0x22382D | SME, FIS_DTC_ISENS_UBAT_OUTOFRANGE_HI, 0x21F034 | 0 | - |
| 0x22382E | SME, FIS_DTC_ISENS_UBAT_OUTOFRANGE_LO, 0x21F035 | 0 | - |
| 0x22382F | SME, FIS_DTC_ISENS_UK2_OUTOFRANGE_HI, 0x21F036 | 0 | - |
| 0x223830 | SME, FIS_DTC_ISENS_UK2_OUTOFRANGE_LO, 0x21F037 | 0 | - |
| 0x223831 | SME, FIS_DTC_ISENS_UQ_OUTOFRANGE_HI, 0x21F038 | 0 | - |
| 0x223832 | SME, FIS_DTC_ISENS_UQ_OUTOFRANGE_LO, 0x21F039 | 0 | - |
| 0x223833 | SME, FIS_DTC_ISENS_CAN_BUS_OFF, 0x21F03A | 0 | - |
| 0x223834 | SME, FIS_DTC_ISENS_INFO_CRC_ERROR, 0x21F03B | 0 | - |
| 0x223835 | SME, FIS_DTC_ISENS_DRIVER_ERROR, 0x21F03D | 0 | - |
| 0x223836 | SME, FIS_DTC_ISENS_INTERNAL_ERROR, 0x21F03E | 0 | - |
| 0x223837 | SME, FIS_DTC_HEAT_SHORT_ELMNT, 0x21F046 | 0 | - |
| 0x223838 | SME, FIS_DTC_HEAT_OPEN_LOAD, 0x21F047 | 0 | - |
| 0x223839 | SME, FIS_DTC_HEAT_MOSFET_DEFECT, 0x21F048 | 0 | - |
| 0x22383A | SME, FIS_DTC_HEAT_MOSFET_ERR_ACTIVE, 0x21F049 | 0 | - |
| 0x22383B | SME, FIS_DTC_HEAT_MOSFET_OVERTEMP, 0x21F04A | 0 | - |
| 0x22383C | SME, FIS_DTC_HEAT_SHORT_LINK_HV_PLUS, 0x21F04B | 0 | - |
| 0x22383D | SME, FIS_DTC_HEAT_SHORT_LINK_HV_MINUS, 0x21F04C | 0 | - |
| 0x22383E | SME, FIS_DTC_HEAT_FUSE_F2_BLOWN, 0x21F04D | 0 | - |
| 0x22383F | SME, FIS_DTC_HEAT_ISENS_OVERLOAD, 0x21F04E | 0 | - |
| 0x223840 | SME, FIS_DTC_HEAT_USENS_UNDERVOLTAGE, 0x21F04F | 0 | - |
| 0x223841 | SME, FIS_DTC_HEAT_USENS_OVERVOLTAGE, 0x21F050 | 0 | - |
| 0x223842 | SME, FIS_DTC_HEAT_ISENS_PLAUSI_ERROR, 0x21F051 | 0 | - |
| 0x223843 | SME, FIS_DTC_HT_ISENS_RANGE_HI, 0x21F1F7 | 0 | - |
| 0x223844 | SME, FIS_DTC_HT_TSENS_RANGE_LO, 0x21F1F8 | 0 | - |
| 0x223845 | SME, FIS_DTC_CSC_CAN_BUS_BUS_OFF, 0x21F054 | 0 | - |
| 0x223846 | SME, FIS_DTC_CSC_MISSING, 0x21F055 | 0 | - |
| 0x223847 | SME, FIS_DTC_CSC_1_MISSING, 0x21F1FB | 0 | - |
| 0x223848 | SME, FIS_DTC_CSC_2_MISSING, 0x21F1FC | 0 | - |
| 0x223849 | SME, FIS_DTC_CSC_3_MISSING, 0x21F1FD | 0 | - |
| 0x22384A | SME, FIS_DTC_CSC_4_MISSING, 0x21F1FE | 0 | - |
| 0x22384B | SME, FIS_DTC_CSC_5_MISSING, 0x21F1FF | 0 | - |
| 0x22384C | SME, FIS_DTC_CSC_6_MISSING, 0x21F200 | 0 | - |
| 0x22384D | SME, FIS_DTC_CSC_7_MISSING, 0x21F201 | 0 | - |
| 0x22384E | SME, FIS_DTC_CSC_8_MISSING, 0x21F202 | 0 | - |
| 0x22384F | SME, FIS_DTC_CSC_9_MISSING, 0x21F203 | 0 | - |
| 0x223850 | SME, FIS_DTC_CSC_10_MISSING, 0x21F204 | 0 | - |
| 0x223851 | SME, FIS_DTC_CSC_11_MISSING, 0x21F205 | 0 | - |
| 0x223852 | SME, FIS_DTC_CSC_12_MISSING, 0x21F206 | 0 | - |
| 0x223853 | SME, FIS_DTC_MOD_1_CELV_OUTOFRANGE_HI, 0x21F056 | 0 | - |
| 0x223854 | SME, FIS_DTC_MOD_1_CELV_OUTOFRANGE_LO, 0x21F057 | 0 | - |
| 0x223855 | SME, FIS_DTC_MOD_2_CELV_OUTOFRANGE_HI, 0x21F058 | 0 | - |
| 0x223856 | SME, FIS_DTC_MOD_2_CELV_OUTOFRANGE_LO, 0x21F059 | 0 | - |
| 0x223857 | SME, FIS_DTC_MOD_3_CELV_OUTOFRANGE_HI, 0x21F05A | 0 | - |
| 0x223858 | SME, FIS_DTC_MOD_3_CELV_OUTOFRANGE_LO, 0x21F05B | 0 | - |
| 0x223859 | SME, FIS_DTC_MOD_4_CELV_OUTOFRANGE_HI, 0x21F05C | 0 | - |
| 0x22385A | SME, FIS_DTC_MOD_4_CELV_OUTOFRANGE_LO, 0x21F05D | 0 | - |
| 0x22385B | SME, FIS_DTC_MOD_5_CELV_OUTOFRANGE_HI, 0x21F05E | 0 | - |
| 0x22385C | SME, FIS_DTC_MOD_5_CELV_OUTOFRANGE_LO, 0x21F05F | 0 | - |
| 0x22385D | SME, FIS_DTC_MOD_6_CELV_OUTOFRANGE_HI, 0x21F060 | 0 | - |
| 0x22385E | SME, FIS_DTC_MOD_6_CELV_OUTOFRANGE_LO, 0x21F061 | 0 | - |
| 0x22385F | SME, FIS_DTC_MOD_7_CELV_OUTOFRANGE_HI, 0x21F062 | 0 | - |
| 0x223860 | SME, FIS_DTC_MOD_7_CELV_OUTOFRANGE_LO, 0x21F063 | 0 | - |
| 0x223861 | SME, FIS_DTC_MOD_8_CELV_OUTOFRANGE_HI, 0x21F064 | 0 | - |
| 0x223862 | SME, FIS_DTC_MOD_8_CELV_OUTOFRANGE_LO, 0x21F065 | 0 | - |
| 0x223863 | SME, FIS_DTC_MOD_9_CELV_OUTOFRANGE_HI, 0x21F066 | 0 | - |
| 0x223864 | SME, FIS_DTC_MOD_9_CELV_OUTOFRANGE_LO, 0x21F067 | 0 | - |
| 0x223865 | SME, FIS_DTC_MOD_10_CELV_OUTOFRANGE_HI, 0x21F068 | 0 | - |
| 0x223866 | SME, FIS_DTC_MOD_10_CELV_OUTOFRANGE_LO, 0x21F069 | 0 | - |
| 0x223867 | SME, FIS_DTC_MOD_11_CELV_OUTOFRANGE_HI, 0x21F06A | 0 | - |
| 0x223868 | SME, FIS_DTC_MOD_11_CELV_OUTOFRANGE_LO, 0x21F06B | 0 | - |
| 0x223869 | SME, FIS_DTC_MOD_12_CELV_OUTOFRANGE_HI, 0x21F06C | 0 | - |
| 0x22386A | SME, FIS_DTC_MOD_12_CELV_OUTOFRANGE_LO, 0x21F06D | 0 | - |
| 0x22386B | SME, FIS_DTC_MOD_1_TEMP_OUTOFRANGE_HI, 0x21F076 | 0 | - |
| 0x22386C | SME, FIS_DTC_MOD_1_TEMP_OUTOFRANGE_LO, 0x21F077 | 0 | - |
| 0x22386D | SME, FIS_DTC_MOD_2_TEMP_OUTOFRANGE_HI, 0x21F078 | 0 | - |
| 0x22386E | SME, FIS_DTC_MOD_2_TEMP_OUTOFRANGE_LO, 0x21F079 | 0 | - |
| 0x22386F | SME, FIS_DTC_MOD_3_TEMP_OUTOFRANGE_HI, 0x21F07A | 0 | - |
| 0x223870 | SME, FIS_DTC_MOD_3_TEMP_OUTOFRANGE_LO, 0x21F07B | 0 | - |
| 0x223871 | SME, FIS_DTC_MOD_4_TEMP_OUTOFRANGE_HI, 0x21F07C | 0 | - |
| 0x223872 | SME, FIS_DTC_MOD_4_TEMP_OUTOFRANGE_LO, 0x21F07D | 0 | - |
| 0x223873 | SME, FIS_DTC_MOD_5_TEMP_OUTOFRANGE_HI, 0x21F07E | 0 | - |
| 0x223874 | SME, FIS_DTC_MOD_5_TEMP_OUTOFRANGE_LO, 0x21F07F | 0 | - |
| 0x223875 | SME, FIS_DTC_MOD_6_TEMP_OUTOFRANGE_HI, 0x21F080 | 0 | - |
| 0x223876 | SME, FIS_DTC_MOD_6_TEMP_OUTOFRANGE_LO, 0x21F081 | 0 | - |
| 0x223877 | SME, FIS_DTC_MOD_7_TEMP_OUTOFRANGE_HI, 0x21F082 | 0 | - |
| 0x223878 | SME, FIS_DTC_MOD_7_TEMP_OUTOFRANGE_LO, 0x21F083 | 0 | - |
| 0x223879 | SME, FIS_DTC_MOD_8_TEMP_OUTOFRANGE_HI, 0x21F084 | 0 | - |
| 0x22387A | SME, FIS_DTC_MOD_8_TEMP_OUTOFRANGE_LO, 0x21F085 | 0 | - |
| 0x22387B | SME, FIS_DTC_MOD_9_TEMP_OUTOFRANGE_HI, 0x21F086 | 0 | - |
| 0x22387C | SME, FIS_DTC_MOD_9_TEMP_OUTOFRANGE_LO, 0x21F087 | 0 | - |
| 0x22387D | SME, FIS_DTC_MOD_10_TEMP_OUTOFRANGE_HI, 0x21F088 | 0 | - |
| 0x22387E | SME, FIS_DTC_MOD_10_TEMP_OUTOFRANGE_LO, 0x21F089 | 0 | - |
| 0x22387F | SME, FIS_DTC_MOD_11_TEMP_OUTOFRANGE_HI, 0x21F08A | 0 | - |
| 0x223880 | SME, FIS_DTC_MOD_11_TEMP_OUTOFRANGE_LO, 0x21F08B | 0 | - |
| 0x223881 | SME, FIS_DTC_MOD_12_TEMP_OUTOFRANGE_HI, 0x21F08C | 0 | - |
| 0x223882 | SME, FIS_DTC_MOD_12_TEMP_OUTOFRANGE_LO, 0x21F08D | 0 | - |
| 0x223883 | SME, FIS_DTC_MOD_1_ERR_UMODRANGE_HI, 0x21F096 | 0 | - |
| 0x223884 | SME, FIS_DTC_MOD_1_ERR_UMODRANGE_LO, 0x21F097 | 0 | - |
| 0x223885 | SME, FIS_DTC_MOD_2_ERR_UMODRANGE_HI, 0x21F098 | 0 | - |
| 0x223886 | SME, FIS_DTC_MOD_2_ERR_UMODRANGE_LO, 0x21F099 | 0 | - |
| 0x223887 | SME, FIS_DTC_MOD_3_ERR_UMODRANGE_HI, 0x21F09A | 0 | - |
| 0x223888 | SME, FIS_DTC_MOD_3_ERR_UMODRANGE_LO, 0x21F09B | 0 | - |
| 0x223889 | SME, FIS_DTC_MOD_4_ERR_UMODRANGE_HI, 0x21F09C | 0 | - |
| 0x22388A | SME, FIS_DTC_MOD_4_ERR_UMODRANGE_LO, 0x21F09D | 0 | - |
| 0x22388B | SME, FIS_DTC_MOD_5_ERR_UMODRANGE_HI, 0x21F09E | 0 | - |
| 0x22388C | SME, FIS_DTC_MOD_5_ERR_UMODRANGE_LO, 0x21F09F | 0 | - |
| 0x22388D | SME, FIS_DTC_MOD_6_ERR_UMODRANGE_HI, 0x21F0A0 | 0 | - |
| 0x22388E | SME, FIS_DTC_MOD_6_ERR_UMODRANGE_LO, 0x21F0A1 | 0 | - |
| 0x22388F | SME, FIS_DTC_MOD_7_ERR_UMODRANGE_HI, 0x21F0A2 | 0 | - |
| 0x223890 | SME, FIS_DTC_MOD_7_ERR_UMODRANGE_LO, 0x21F0A3 | 0 | - |
| 0x223891 | SME, FIS_DTC_MOD_8_ERR_UMODRANGE_HI, 0x21F0A4 | 0 | - |
| 0x223892 | SME, FIS_DTC_MOD_8_ERR_UMODRANGE_LO, 0x21F0A5 | 0 | - |
| 0x223893 | SME, FIS_DTC_MOD_9_ERR_UMODRANGE_HI, 0x21F0A6 | 0 | - |
| 0x223894 | SME, FIS_DTC_MOD_9_ERR_UMODRANGE_LO, 0x21F0A7 | 0 | - |
| 0x223895 | SME, FIS_DTC_MOD_10_ERR_UMODRANGE_HI, 0x21F0A8 | 0 | - |
| 0x223896 | SME, FIS_DTC_MOD_10_ERR_UMODRANGE_LO, 0x21F0A9 | 0 | - |
| 0x223897 | SME, FIS_DTC_MOD_11_ERR_UMODRANGE_HI, 0x21F0AA | 0 | - |
| 0x223898 | SME, FIS_DTC_MOD_11_ERR_UMODRANGE_LO, 0x21F0AB | 0 | - |
| 0x223899 | SME, FIS_DTC_MOD_12_ERR_UMODRANGE_HI, 0x21F0AC | 0 | - |
| 0x22389A | SME, FIS_DTC_MOD_12_ERR_UMODRANGE_LO, 0x21F0AD | 0 | - |
| 0x22389B | SME, FIS_DTC_CSC_ERR_OPN_WIRE, 0x21F0B6 | 0 | - |
| 0x22389C | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_1, 0x21F20B | 0 | - |
| 0x22389D | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_2, 0x21F20C | 0 | - |
| 0x22389E | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_3, 0x21F20D | 0 | - |
| 0x22389F | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_4, 0x21F20E | 0 | - |
| 0x2238A0 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_5, 0x21F20F | 0 | - |
| 0x2238A1 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_6, 0x21F210 | 0 | - |
| 0x2238A2 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_7, 0x21F211 | 0 | - |
| 0x2238A3 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_8, 0x21F212 | 0 | - |
| 0x2238A4 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_9, 0x21F213 | 0 | - |
| 0x2238A5 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_10, 0x21F214 | 0 | - |
| 0x2238A6 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_11, 0x21F215 | 0 | - |
| 0x2238A7 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_MOD_12, 0x21F216 | 0 | - |
| 0x2238A8 | SME, FIS_DTC_CSC_ERR_OPN_WIRE_T, 0x21F0C4 | 0 | - |
| 0x2238A9 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL, 0x21F0C7 | 0 | - |
| 0x2238AA | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_1, 0x21F21D | 0 | - |
| 0x2238AB | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_2, 0x21F21E | 0 | - |
| 0x2238AC | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_3, 0x21F21F | 0 | - |
| 0x2238AD | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_4, 0x21F220 | 0 | - |
| 0x2238AE | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_5, 0x21F221 | 0 | - |
| 0x2238AF | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_6, 0x21F222 | 0 | - |
| 0x2238B0 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_7, 0x21F223 | 0 | - |
| 0x2238B1 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_8, 0x21F224 | 0 | - |
| 0x2238B2 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_9, 0x21F225 | 0 | - |
| 0x2238B3 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_10, 0x21F226 | 0 | - |
| 0x2238B4 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_11, 0x21F227 | 0 | - |
| 0x2238B5 | SME, FIS_DTC_CSC_ERR_HW_CRIT_FAIL_MOD_12, 0x21F228 | 0 | - |
| 0x2238B6 | SME, FIS_DTC_SERVICE_DISCONNECT_IMPLAUS, 0x21F0C9 | 0 | - |
| 0x2238B7 | SME, FIS_DTC_CRASH_ACAN_CRASH_REV, 0x21F0CA | 0 | - |
| 0x2238B8 | SME, FIS_DTC_CRASH_KL30C_CRASH_IRR, 0x21F0CB | 0 | - |
| 0x2238B9 | SME, FIS_DTC_SUPPLY_VOLT_KL30F_LOW, 0x21F0CC | 0 | - |
| 0x2238BA | SME, FIS_DTC_SUPPLY_VOLT_KL30C_LOW, 0x21F0CE | 0 | - |
| 0x2238BB | SME, FIS_DTC_COOL_VLV_STUCKOPEN, 0x21F0CF | 0 | - |
| 0x2238BC | SME, FIS_DTC_COOL_VLV_STUCKCLOSED, 0x21F0D0 | 0 | - |
| 0x2238BD | SME, FIS_DTC_MAIN_SW_HEALTH_VERY_LOW, 0x21F0D1 | 0 | - |
| 0x2238BE | SME, FIS_DTC_MAIN_SW_NEG_STUCKDOWN, 0x21F0D2 | 0 | - |
| 0x2238BF | SME, FIS_DTC_MAIN_SW_NEG_STUCKUP, 0x21F0D3 | 0 | - |
| 0x2238C0 | SME, FIS_DTC_MAIN_SW_POS_STUCKDOWN, 0x21F0D4 | 0 | - |
| 0x2238C1 | SME, FIS_DTC_MAIN_SW_POS_STUCKUP, 0x21F0D5 | 0 | - |
| 0x2238C2 | SME, FIS_DTC_OVERCURRENT_DISCHARGE, 0x21F0D8 | 0 | - |
| 0x2238C3 | SME, FIS_DTC_OVERCURRENT_CHARGE, 0x21F0D9 | 0 | - |
| 0x2238C4 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH, 0x21F0DA | 0 | - |
| 0x2238C5 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_1, 0x21F231 | 0 | - |
| 0x2238C6 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_2, 0x21F232 | 0 | - |
| 0x2238C7 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_3, 0x21F233 | 0 | - |
| 0x2238C8 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_4, 0x21F234 | 0 | - |
| 0x2238C9 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_5, 0x21F235 | 0 | - |
| 0x2238CA | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_6, 0x21F236 | 0 | - |
| 0x2238CB | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_7, 0x21F237 | 0 | - |
| 0x2238CC | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_8, 0x21F238 | 0 | - |
| 0x2238CD | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_9, 0x21F239 | 0 | - |
| 0x2238CE | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_10, 0x21F23A | 0 | - |
| 0x2238CF | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_11, 0x21F23B | 0 | - |
| 0x2238D0 | SME, FIS_DTC_CSC_CELL_VOLT_HIGH_MOD_12, 0x21F23C | 0 | - |
| 0x2238D1 | SME, FIS_DTC_CSC_CELL_VOLT_LOW, 0x21F0DB | 0 | - |
| 0x2238D2 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_1, 0x21F241 | 0 | - |
| 0x2238D3 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_2, 0x21F242 | 0 | - |
| 0x2238D4 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_3, 0x21F243 | 0 | - |
| 0x2238D5 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_4, 0x21F244 | 0 | - |
| 0x2238D6 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_5, 0x21F245 | 0 | - |
| 0x2238D7 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_6, 0x21F246 | 0 | - |
| 0x2238D8 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_7, 0x21F247 | 0 | - |
| 0x2238D9 | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_8, 0x21F248 | 0 | - |
| 0x2238DA | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_9, 0x21F249 | 0 | - |
| 0x2238DB | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_10, 0x21F24A | 0 | - |
| 0x2238DC | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_11, 0x21F24B | 0 | - |
| 0x2238DD | SME, FIS_DTC_CSC_CELL_VOLT_LOW_MOD_12, 0x21F24C | 0 | - |
| 0x2238DE | SME, FIS_DTC_BAT_VOLT_HIGH, 0x21F0DC | 0 | - |
| 0x2238DF | SME, FIS_DTC_BAT_VOLT_LOW, 0x21F0DD | 0 | - |
| 0x2238E0 | SME, FIS_DTC_HVIL_NO_SIGNAL_GEN, 0x21F0DE | 0 | - |
| 0x2238E1 | SME, FIS_DTC_HVIL_OPEN, 0x21F0DF | 0 | - |
| 0x2238E2 | SME, FIS_DTC_HVIL_SHORT, 0x21F0E0 | 0 | - |
| 0x2238E3 | SME, FIS_DTC_HVIL_SHORT_HIGH, 0x21F0E1 | 0 | - |
| 0x2238E4 | SME, FIS_DTC_HVIL_SHORT_LOW, 0x21F0E2 | 0 | - |
| 0x2238E5 | SME, FIS_DTC_PRECHARGE_CURR_HIGH, 0x21F0E8 | 0 | - |
| 0x2238E6 | SME, FIS_DTC_PRECHARGE_TIMEOUT, 0x21F0E9 | 0 | - |
| 0x2238E7 | SME, FIS_DTC_PRECHARGE_TIME_SHORT, 0x21F0EA | 0 | - |
| 0x2238E8 | SME, FIS_DTC_PRECHARGE_SHORTCIRCUIT, 0x21F0EB | 0 | - |
| 0x2238E9 | SME, FIS_DTC_HV_CURR_PLAUS_ERR, 0x21F0EC | 0 | - |
| 0x2238EA | SME, FIS_DTC_HV_VOLT_ERROR, 0x21F0ED | 0 | - |
| 0x2238EB | SME, FIS_DTC_CELL_VOLT_MEAS_INV, 0x21F0EE | 0 | - |
| 0x2238EC | SME, FIS_DTC_BAT_VOLT_PLAUS_NO_SUBST, 0x21F0F0 | 0 | - |
| 0x2238ED | SME, FIS_DTC_MOD_1_TEMP_IMPLAUSIBLE, 0x21F103 | 0 | - |
| 0x2238EE | SME, FIS_DTC_MOD_2_TEMP_IMPLAUSIBLE, 0x21F104 | 0 | - |
| 0x2238EF | SME, FIS_DTC_MOD_3_TEMP_IMPLAUSIBLE, 0x21F105 | 0 | - |
| 0x2238F0 | SME, FIS_DTC_MOD_4_TEMP_IMPLAUSIBLE, 0x21F106 | 0 | - |
| 0x2238F1 | SME, FIS_DTC_MOD_5_TEMP_IMPLAUSIBLE, 0x21F107 | 0 | - |
| 0x2238F2 | SME, FIS_DTC_MOD_6_TEMP_IMPLAUSIBLE, 0x21F108 | 0 | - |
| 0x2238F3 | SME, FIS_DTC_MOD_7_TEMP_IMPLAUSIBLE, 0x21F109 | 0 | - |
| 0x2238F4 | SME, FIS_DTC_MOD_8_TEMP_IMPLAUSIBLE, 0x21F10A | 0 | - |
| 0x2238F5 | SME, FIS_DTC_MOD_9_TEMP_IMPLAUSIBLE, 0x21F10B | 0 | - |
| 0x2238F6 | SME, FIS_DTC_MOD_10_TEMP_IMPLAUSIBLE, 0x21F10C | 0 | - |
| 0x2238F7 | SME, FIS_DTC_MOD_11_TEMP_IMPLAUSIBLE, 0x21F10D | 0 | - |
| 0x2238F8 | SME, FIS_DTC_MOD_12_TEMP_IMPLAUSIBLE, 0x21F10E | 0 | - |
| 0x2238F9 | SME, FIS_DTC_RTC_RELATIVZEIT_IMPLAUSIBLE, 0x21F28A | 0 | - |
| 0x2238FA | SME, FIS_DTC_MOD_TEMP_FAIL, 0x21F113 | 0 | - |
| 0x2238FB | SME, FIS_DTC_MOD_1_TEMP_FAIL, 0x21F114 | 0 | - |
| 0x2238FC | SME, FIS_DTC_MOD_2_TEMP_FAIL, 0x21F115 | 0 | - |
| 0x2238FD | SME, FIS_DTC_MOD_3_TEMP_FAIL, 0x21F116 | 0 | - |
| 0x2238FE | SME, FIS_DTC_MOD_4_TEMP_FAIL, 0x21F117 | 0 | - |
| 0x2238FF | SME, FIS_DTC_MOD_5_TEMP_FAIL, 0x21F118 | 0 | - |
| 0x223900 | SME, FIS_DTC_MOD_6_TEMP_FAIL, 0x21F119 | 0 | - |
| 0x223901 | SME, FIS_DTC_MOD_7_TEMP_FAIL, 0x21F11A | 0 | - |
| 0x223902 | SME, FIS_DTC_MOD_8_TEMP_FAIL, 0x21F11B | 0 | - |
| 0x223903 | SME, FIS_DTC_MOD_9_TEMP_FAIL, 0x21F11C | 0 | - |
| 0x223904 | SME, FIS_DTC_MOD_10_TEMP_FAIL, 0x21F11D | 0 | - |
| 0x223905 | SME, FIS_DTC_MOD_11_TEMP_FAIL, 0x21F11E | 0 | - |
| 0x223906 | SME, FIS_DTC_MOD_12_TEMP_FAIL, 0x21F11F | 0 | - |
| 0x223907 | SME, FIS_DTC_MOD_TEMP_HIGH, 0x21F124 | 0 | - |
| 0x223908 | SME, FIS_DTC_MOD_TEMP_HIGH_1, 0x21F252 | 0 | - |
| 0x223909 | SME, FIS_DTC_MOD_TEMP_HIGH_2, 0x21F253 | 0 | - |
| 0x22390A | SME, FIS_DTC_MOD_TEMP_HIGH_3, 0x21F254 | 0 | - |
| 0x22390B | SME, FIS_DTC_MOD_TEMP_HIGH_4, 0x21F255 | 0 | - |
| 0x22390C | SME, FIS_DTC_MOD_TEMP_HIGH_5, 0x21F256 | 0 | - |
| 0x22390D | SME, FIS_DTC_MOD_TEMP_HIGH_6, 0x21F257 | 0 | - |
| 0x22390E | SME, FIS_DTC_MOD_TEMP_HIGH_7, 0x21F258 | 0 | - |
| 0x22390F | SME, FIS_DTC_MOD_TEMP_HIGH_8, 0x21F259 | 0 | - |
| 0x223910 | SME, FIS_DTC_MOD_TEMP_HIGH_9, 0x21F25A | 0 | - |
| 0x223911 | SME, FIS_DTC_MOD_TEMP_HIGH_10, 0x21F25B | 0 | - |
| 0x223912 | SME, FIS_DTC_MOD_TEMP_HIGH_11, 0x21F25C | 0 | - |
| 0x223913 | SME, FIS_DTC_MOD_TEMP_HIGH_12, 0x21F25D | 0 | - |
| 0x223914 | SME, FIS_DTC_MOD_1_OVERTEMP, 0x21F125 | 0 | - |
| 0x223915 | SME, FIS_DTC_MOD_2_OVERTEMP, 0x21F126 | 0 | - |
| 0x223916 | SME, FIS_DTC_MOD_3_OVERTEMP, 0x21F127 | 0 | - |
| 0x223917 | SME, FIS_DTC_MOD_4_OVERTEMP, 0x21F128 | 0 | - |
| 0x223918 | SME, FIS_DTC_MOD_5_OVERTEMP, 0x21F129 | 0 | - |
| 0x223919 | SME, FIS_DTC_MOD_6_OVERTEMP, 0x21F12A | 0 | - |
| 0x22391A | SME, FIS_DTC_MOD_7_OVERTEMP, 0x21F12B | 0 | - |
| 0x22391B | SME, FIS_DTC_MOD_8_OVERTEMP, 0x21F12C | 0 | - |
| 0x22391C | SME, FIS_DTC_MOD_9_OVERTEMP, 0x21F12D | 0 | - |
| 0x22391D | SME, FIS_DTC_MOD_10_OVERTEMP, 0x21F12E | 0 | - |
| 0x22391E | SME, FIS_DTC_MOD_11_OVERTEMP, 0x21F12F | 0 | - |
| 0x22391F | SME, FIS_DTC_MOD_12_OVERTEMP, 0x21F130 | 0 | - |
| 0x223920 | SME, FIS_DTC_HEATRES_ERROR, 0x21F135 | 0 | - |
| 0x223921 | SME, FIS_DTC_HEAT_TEMP_ERROR, 0x21F136 | 0 | - |
| 0x223922 | SME, FIS_DTC_BAT_HEALTH_LOW_ERR, 0x21F17E | 0 | - |
| 0x223923 | SME, FIS_DTC_BAT_SOC_HIGH, 0x21F138 | 0 | - |
| 0x223924 | SME, FIS_DTC_BAT_SOC_LOW, 0x21F139 | 0 | - |
| 0x223925 | SME, FIS_DTC_CELL_DEFECT, 0x21F13B | 0 | - |
| 0x223926 | SME, FIS_DTC_CELL_DEFECT_MOD_1, 0x21F1C1 | 0 | - |
| 0x223927 | SME, FIS_DTC_CELL_DEFECT_MOD_2, 0x21F1C2 | 0 | - |
| 0x223928 | SME, FIS_DTC_CELL_DEFECT_MOD_3, 0x21F1C3 | 0 | - |
| 0x223929 | SME, FIS_DTC_CELL_DEFECT_MOD_4, 0x21F1C4 | 0 | - |
| 0x22392A | SME, FIS_DTC_CELL_DEFECT_MOD_5, 0x21F1C5 | 0 | - |
| 0x22392B | SME, FIS_DTC_CELL_DEFECT_MOD_6, 0x21F1C6 | 0 | - |
| 0x22392C | SME, FIS_DTC_CELL_DEFECT_MOD_7, 0x21F1C7 | 0 | - |
| 0x22392D | SME, FIS_DTC_CELL_DEFECT_MOD_8, 0x21F1C8 | 0 | - |
| 0x22392E | SME, FIS_DTC_CELL_DEFECT_MOD_9, 0x21F1C9 | 0 | - |
| 0x22392F | SME, FIS_DTC_CELL_DEFECT_MOD_10, 0x21F1CA | 0 | - |
| 0x223930 | SME, FIS_DTC_CELL_DEFECT_MOD_11, 0x21F1CB | 0 | - |
| 0x223931 | SME, FIS_DTC_CELL_DEFECT_MOD_12, 0x21F1CC | 0 | - |
| 0x223932 | SME, FIS_DTC_CELL_DEEP_DISCHARGED, 0x21F13C | 0 | - |
| 0x223933 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_1, 0x21F1D1 | 0 | - |
| 0x223934 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_2, 0x21F1D2 | 0 | - |
| 0x223935 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_3, 0x21F1D3 | 0 | - |
| 0x223936 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_4, 0x21F1D4 | 0 | - |
| 0x223937 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_5, 0x21F1D5 | 0 | - |
| 0x223938 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_6, 0x21F1D6 | 0 | - |
| 0x223939 | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_7, 0x21F1D7 | 0 | - |
| 0x22393A | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_8, 0x21F1D8 | 0 | - |
| 0x22393B | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_9, 0x21F1D9 | 0 | - |
| 0x22393C | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_10, 0x21F1DA | 0 | - |
| 0x22393D | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_11, 0x21F1DB | 0 | - |
| 0x22393E | SME, FIS_DTC_CELL_DEEP_DISCHARGED_MOD_12, 0x21F1DC | 0 | - |
| 0x22393F | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_1, 0x21F1E1 | 0 | - |
| 0x223940 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_2, 0x21F1E2 | 0 | - |
| 0x223941 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_3, 0x21F1E3 | 0 | - |
| 0x223942 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_4, 0x21F1E4 | 0 | - |
| 0x223943 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_5, 0x21F1E5 | 0 | - |
| 0x223944 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_6, 0x21F1E6 | 0 | - |
| 0x223945 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_7, 0x21F1E7 | 0 | - |
| 0x223946 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_8, 0x21F1E8 | 0 | - |
| 0x223947 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_9, 0x21F1E9 | 0 | - |
| 0x223948 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_10, 0x21F1EA | 0 | - |
| 0x223949 | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_11, 0x21F1EB | 0 | - |
| 0x22394A | SME, FIS_DTC_CELL_SELF_DISCHARGE_MOD_12, 0x21F1EC | 0 | - |
| 0x22394B | SME, FIS_DTC_LAYER2_SHUT_OFF, 0x21F15C | 0 | - |
| 0x22394C | SME, FIS_DTC_LAYER3_SHUT_OFF, 0x21F15D | 0 | - |
| 0x22394D | SME, FIS_DTC_RTC_CLOCK_ERR, 0x21F016 | 0 | - |
| 0x22394E | SME, FIS_DTC_CURRENT_OVERCURRENT, 0x21F0D7 | 0 | - |
| 0x22394F | REME, FIS_DTC_RslvrAmpOutd, 0x21DD03 | 0 | - |
| 0x223950 | REME, FIS_DTC_RslvrLostSig, 0x21DD02 | 0 | - |
| 0x223951 | REME, FIS_DTC_RslvrHiRng, 0x21DD01 | 0 | - |
| 0x223952 | REME, FIS_DTC_RslvrLostTrck, 0x21DD05 | 0 | - |
| 0x223953 | REME, FIS_DTC_RslvrOvrSpd, 0x21DD06 | 0 | - |
| 0x223954 | REME, FIS_DTC_RslvrCfgMsm, 0x21DD0B | 0 | - |
| 0x223955 | REME, FIS_DTC_RslvrIntDiagDfct, 0x21DD0C | 0 | - |
| 0x223956 | REME, FIS_DTC_RslvrPar, 0x21DD07 | 0 | - |
| 0x223957 | REME, FIS_DTC_RslvrPhaOutdRng, 0x21DD04 | 0 | - |
| 0x22395B | REME, FIS_DTC_TSttrLoRng, 0x21DDD2 | 0 | - |
| 0x22395C | REME, FIS_DTC_TSttrHiRng, 0x21DDD1 | 0 | - |
| 0x22395E | REME, FIS_DTC_IPhaULoRng, 0x21DD32 | 0 | - |
| 0x22395F | REME, FIS_DTC_IPhaUHiRng, 0x21DD31 | 0 | - |
| 0x223960 | REME, FIS_DTC_IPhaHiHw, 0x21DD60 | 0 | - |
| 0x223961 | REME, FIS_DTC_IPhaURaty, 0x21DD33 | 0 | - |
| 0x223962 | REME, FIS_DTC_IPhaUAmpRaty, 0x21DD30 | 0 | - |
| 0x223963 | REME, FIS_DTC_IPhaVLoRng, 0x21DD36 | 0 | - |
| 0x223964 | REME, FIS_DTC_IPhaVHiRng, 0x21DD35 | 0 | - |
| 0x223965 | REME, FIS_DTC_IPhaVRaty, 0x21DD37 | 0 | - |
| 0x223966 | REME, FIS_DTC_IPhaVAmpRaty, 0x21DD34 | 0 | - |
| 0x223967 | REME, FIS_DTC_IPhaWLoRng, 0x21DD3A | 0 | - |
| 0x223968 | REME, FIS_DTC_IPhaWHiRng, 0x21DD39 | 0 | - |
| 0x223969 | REME, FIS_DTC_IPhaWRaty, 0x21DD3B | 0 | - |
| 0x22396A | REME, FIS_DTC_IPhaWAmpRaty, 0x21DD38 | 0 | - |
| 0x22396B | REME, FIS_DTC_IPhaUVWSumRaty, 0x21DD3C | 0 | - |
| 0x22396C | REME, FIS_DTC_TIGBTULoRng, 0x21DDC1 | 0 | - |
| 0x22396D | REME, FIS_DTC_TIGBTUHiRng, 0x21DDC0 | 0 | - |
| 0x22396E | REME, FIS_DTC_TIGBTURaty, 0x21DE0B | 0 | - |
| 0x22396F | REME, FIS_DTC_TIGBTVRaty, 0x21DE0C | 0 | - |
| 0x223970 | REME, FIS_DTC_TIGBTWRaty, 0x21DE0D | 0 | - |
| 0x223971 | REME, FIS_DTC_TIGBTUOffs, 0x21DDC6 | 0 | - |
| 0x223972 | REME, FIS_DTC_TIGBTVLoRng, 0x21DDC3 | 0 | - |
| 0x223973 | REME, FIS_DTC_TIGBTVHiRng, 0x21DDC2 | 0 | - |
| 0x223974 | REME, FIS_DTC_TIGBTVOffs, 0x21DDC7 | 0 | - |
| 0x223975 | REME, FIS_DTC_TIGBTWLoRng, 0x21DDC5 | 0 | - |
| 0x223976 | REME, FIS_DTC_TIGBTWHiRng, 0x21DDC4 | 0 | - |
| 0x223977 | REME, FIS_DTC_TIGBTWOffs, 0x21DDC8 | 0 | - |
| 0x223978 | REME, FIS_DTC_GateSplyHw, 0x21DD62 | 0 | - |
| 0x223979 | REME, FIS_DTC_UAftRlyLoRng, 0x21DE07 | 0 | - |
| 0x22397A | REME, FIS_DTC_Terminal30LoRng, 0x21DD84 | 0 | - |
| 0x22397B | REME, FIS_DTC_Vdd30LoRng, 0x21DD55 | 0 | - |
| 0x22397C | REME, FIS_DTC_UAftRlyHiRng, 0x21DE06 | 0 | - |
| 0x22397D | REME, FIS_DTC_Terminal30HiRng, 0x21DD81 | 0 | - |
| 0x22397E | REME, FIS_DTC_Vdd30HiRng, 0x21DD54 | 0 | - |
| 0x22397F | REME, FIS_DTC_UAftRlyRaty, 0x21DD7E | 0 | - |
| 0x223980 | REME, FIS_DTC_UTnetHiRng, 0x21DD20 | 0 | - |
| 0x223981 | REME, FIS_DTC_UTnetHiHw, 0x21DD61 | 0 | - |
| 0x223982 | REME, FIS_DTC_UTnetRaty, 0x21DD21 | 0 | - |
| 0x223983 | REME, DTC_SSpMon1UV, 0x21DD58 | 0 | - |
| 0x223984 | REME, DTC_SSpMon1OV, 0x21DD57 | 0 | - |
| 0x223986 | REME, FIS_DTC_Vdd5G1LoRng, 0x21DD50 | 0 | - |
| 0x223987 | REME, FIS_DTC_Vdd5G1HiRng, 0x21DD51 | 0 | - |
| 0x223988 | REME, FIS_DTC_Vdd5SplyHiHw, 0x21DDC8 | 0 | - |
| 0x223989 | REME, FIS_DTC_LoSideIGBTHw, 0x21DD71 | 0 | - |
| 0x22398A | REME, FIS_DTC_HiSideIGBTHw, 0x21DD70 | 0 | - |
| 0x22398B | REME, FIS_DTC_SumFflpHw, 0x21DD5F | 0 | - |
| 0x22398C | REME, FIS_DTC_EEPRdErr, 0x21DD91 | 0 | - |
| 0x22398D | REME, FIS_DTC_EEPWrErr, 0x21DD92 | 0 | - |
| 0x22398E | REME, FIS_DTC_Cy320SpiCom, 0x21DD93 | 0 | - |
| 0x22398F | REME, FIS_DTC_Wdg, 0x21DD94 | 0 | - |
| 0x223990 | REME, FIS_DTC_ClkDfwHw, 0x21DDA0 | 0 | - |
| 0x223991 | REME, FIS_DTC_ClkPldHw, 0x21DDA1 | 0 | - |
| 0x223992 | REME, FIS_DTC_PsTypUkwn, 0x21DDA2 | 0 | - |
| 0x223993 | REME, FIS_DTC_PsTypPhd, 0x21DDA3 | 0 | - |
| 0x223994 | REME, FIS_DTC_BusDiagHwCan, 0x21DDB0 | 0 | - |
| 0x223995 | REME, FIS_DTC_HwTnetDcha, 0x21DDB3 | 0 | - |
| 0x223996 | REME, FIS_DTC_HwTnetActDcha, 0x21DDB6 | 0 | - |
| 0x223997 | REME, FIS_DTC_MoCCom_WDERR, 0x21DDB5 | 0 | - |
| 0x223998 | REME, FIS_DTC_ActvShoNotPsnl, 0x21DDB7 | 0 | - |
| 0x223999 | REME, FIS_DTC_BusDiagBusOffACAN, 0xCB8486 | 0 | - |
| 0x22399A | REME, FIS_DTC_CrashHw, 0x21DDB1 | 0 | - |
| 0x22399B | REME, FIS_DTC_FwNotPsbl, 0x21DDB8 | 0 | - |
| 0x22399C | REME, DTC_FwOperOutdRng, 0x21DDB9 | 0 | - |
| 0x22399D | REME, FIS_DTC_FrmStatHvsto2_A_TO, 0xCB9415 | 0 | - |
| 0x22399E | REME, FIS_DTC_COM_AvlUHvsto, 0x21DF02 | 0 | - |
| 0x22399F | REME, FIS_DTC_COM_AvlIHvsto, 0x21DF01 | 0 | - |
| 0x2239A0 | REME, FIS_DTC_FrmSpecLimMot1_A_TO, 0xCB9400 | 0 | - |
| 0x2239A2 | REME, FIS_DTC_COM_IMaxDrvMot1, 0x21DF03 | 0 | - |
| 0x2239A3 | REME, FIS_DTC_COM_IMaxGenMot1, 0x21DF04 | 0 | - |
| 0x2239A4 | REME, FIS_DTC_COM_UDcHvMaxMot1, 0x21DF0F | 0 | - |
| 0x2239A5 | REME, FIS_DTC_COM_UDcHvMinMot1, 0x21DF10 | 0 | - |
| 0x2239A6 | REME, FIS_DTC_COM_TorqMaxMot1, 0x21DF0D | 0 | - |
| 0x2239A7 | REME, FIS_DTC_COM_TorqMinMot1, 0x21DF0E | 0 | - |
| 0x2239A8 | REME, FIS_DTC_COM_TarTorqMot1, 0x21DF0B | 0 | - |
| 0x2239A9 | REME, DTC_COM_StDtClctrMot1, 0x21DF08 | 0 | - |
| 0x2239AA | REME, FIS_DTC_COM_TarOpmoMot1, 0x21DF0A | 0 | - |
| 0x2239AB | REME, FIS_DTC_COM_RpmTarMot1, 0x21DF07 | 0 | - |
| 0x2239AC | REME, FIS_DTC_FrmLimChgDchgHvsto_A_TO, 0xCB9435 | 0 | - |
| 0x2239AD | REME, FIS_DTC_COM_IDynMaxDchgHvsto, 0x21DF22 | 0 | - |
| 0x2239AE | REME, FIS_DTC_COM_UMinDchgHvsto, 0x21DF21 | 0 | - |
| 0x2239AF | REME, FIS_DTC_COM_IDynMaxChgHvsto, 0x21DF20 | 0 | - |
| 0x2239B0 | REME, FIS_DTC_COM_UMaxChgHvsto, 0x21DF1F | 0 | - |
| 0x2239B1 | IHKA, FIS_DFC_DOBD_IHKA_1_1, 0xE70C30 | 0 | - |
| 0x2239B2 | IHKA, FIS_DFC_DOBD_IHKA_1_2, Prüfen | 0 | - |
| 0x2239B3 | IHKA, FIS_DFC_DOBD_IHKA_1_3, 0x8013F6 | 0 | - |
| 0x2239B4 | IHKA, FIS_DFC_DOBD_IHKA_1_4, 0xE7041E | 0 | - |
| 0x2239B5 | IHKA, FIS_DFC_DOBD_IHKA_1_5, Prüfen | 0 | - |
| 0x2239B6 | IHKA, FIS_DFC_DOBD_IHKA_1_6, 0x8011B0 | 0 | - |
| 0x2239B7 | IHKA, FIS_DFC_DOBD_IHKA_1_7, 0x8011AF | 0 | - |
| 0x2239B8 | IHKA, FIS_DFC_DOBD_IHKA_1_8, in 0x8011AF enthalten | 0 | - |
| 0x2239B9 | IHKA, FIS_DFC_DOBD_IHKA_2_1, 0x8013F6 | 0 | - |
| 0x2239BA | IHKA, FIS_DFC_DOBD_IHKA_2_2, 0x8013F7 | 0 | - |
| 0x2239BB | IHKA, FIS_DFC_DOBD_IHKA_2_3, 0x8013F8 | 0 | - |
| 0x2239BC | BDC, FIS_DFC_DOBD_IHKA_2_4, 0x801100 | 0 | - |
| 0x2239BD | BDC, FIS_DFC_DOBD_IHKA_2_5, 0x801101 | 0 | - |
| 0x2239BE | BDC, FIS_DFC_DOBD_IHKA_2_6, 0x801102 | 0 | - |
| 0x2239BF | BDC, FIS_DFC_DOBD_IHKA_2_7, 0x801103 | 0 | - |
| 0x2239C0 | BDC, FIS_DFC_DOBD_IHKA_2_8, 0x801104 | 0 | - |
| 0x2239C1 | eDH, FIS_DFC_DOBD_IHKA_3_1, 0xE70C3A | 0 | - |
| 0x2239C2 | IHKA, FIS_DFC_DOBD_IHKA_3_2, 0x8013FB | 0 | - |
| 0x2239C3 | IHKA, FIS_DFC_DOBD_IHKA_3_3, 0x8013FC | 0 | - |
| 0x2239C4 | IHKA, FIS_DFC_DOBD_IHKA_3_4, 0x8013FD | 0 | - |
| 0x2239C5 | IHKA, FIS_DFC_DOBD_IHKA_3_5, 0x8013FE | 0 | - |
| 0x2239C6 | IHKA, FIS_DFC_DOBD_IHKA_3_6, 0x8013FF | 0 | - |
| 0x2239C7 | IHKA, FIS_DFC_DOBD_IHKA_3_7, 0x8013FA | 0 | - |
| 0x2239C8 | eKMV, FIS_DFC_DOBD_IHKA_3_8, 0x8013C0 | 0 | - |
| 0x2239C9 | eKMV, FIS_DFC_DOBD_IHKA_4_1, 0x8013C1 | 0 | - |
| 0x2239CB | eKMV, FIS_DFC_DOBD_IHKA_4_3, 0x8013C3 | 0 | - |
| 0x2239CC | eKMV, FIS_DFC_DOBD_IHKA_4_4, 0x8013C4 | 0 | - |
| 0x2239CE | eKMV, FIS_DFC_DOBD_IHKA_5_4, 0x8013CC | 0 | - |
| 0x2239CF | eKMV, FIS_DFC_DOBD_IHKA_5_5, 0x8013CD | 0 | - |
| 0x2239D1 | eKMV, FIS_DFC_DOBD_IHKA_5_7, 0x8013CF | 0 | - |
| 0x2239D2 | eKMV, FIS_DFC_DOBD_IHKA_5_8, 0x8013D0 | 0 | - |
| 0x2239D3 | eKMV, FIS_DFC_DOBD_IHKA_6_1, 0x8013D1 | 0 | - |
| 0x2239D4 | eKMV, FIS_DFC_DOBD_IHKA_6_2, 0x8013D2 | 0 | - |
| 0x2239D5 | eKMV, FIS_DFC_DOBD_IHKA_6_3, 0x8013D3 | 0 | - |
| 0x2239D7 | eKMV, FIS_DFC_DOBD_IHKA_6_5, 0x8013D5 | 0 | - |
| 0x2239D8 | eKMV, FIS_DFC_DOBD_IHKA_6_6, 0x8013D6 | 0 | - |
| 0x2239D9 | eKMV, FIS_DFC_DOBD_IHKA_6_7, 0x8013D7 | 0 | - |
| 0x2239DA | eKMV, FIS_DFC_DOBD_IHKA_6_8, 0x8013D8 | 0 | - |
| 0x2239DB | eKMV, FIS_DFC_DOBD_IHKA_7_1, 0x8013D9 | 0 | - |
| 0x2239DC | eDH, FIS_DFC_DOBD_IHKA_7_2, 0x8013A3 | 0 | - |
| 0x2239DD | eKMV, FIS_DFC_DOBD_IHKA_7_3, 0x8013DB | 0 | - |
| 0x2239DE | eKMV, FIS_DFC_DOBD_IHKA_7_4, 0x8013DC | 0 | - |
| 0x2239DF | eKMV, FIS_DFC_DOBD_IHKA_7_5, 0x8013DD | 0 | - |
| 0x2239E0 | eKMV, FIS_DFC_DOBD_IHKA_7_6, 0x8013DE | 0 | - |
| 0x2239E1 | eKMV, FIS_DFC_DOBD_IHKA_7_7, 0x8013DF | 0 | - |
| 0x2239E2 | eKMV, FIS_DFC_DOBD_IHKA_7_8, 0x8012C6 | 0 | - |
| 0x2239E3 | eKMV, FIS_DFC_DOBD_IHKA_8_1, 0x8013E1 | 0 | - |
| 0x2239E4 | eKMV, FIS_DFC_DOBD_IHKA_8_2, 0x8013E2 | 0 | - |
| 0x2239E5 | eKMV, FIS_DFC_DOBD_IHKA_8_3, 0x8013E3 | 0 | - |
| 0x2239E6 | eKMV, FIS_DFC_DOBD_IHKA_9_2, 0x8013EA | 0 | - |
| 0x2239E7 | eKMV, FIS_DFC_DOBD_IHKA_9_3, 0x8013EB | 0 | - |
| 0x2239E8 | eKMV, FIS_DFC_DOBD_IHKA_9_4, 0x8013EC | 0 | - |
| 0x2239E9 | eKMV, FIS_DFC_DOBD_IHKA_9_5, 0x8013ED | 0 | - |
| 0x2239EA | eKMV, FIS_DFC_DOBD_IHKA_9_6, 0x8013EE | 0 | - |
| 0x2239EB | eKMV, FIS_DFC_DOBD_IHKA_9_7, 0x8013EF | 0 | - |
| 0x2239EC | eDH, FIS_DFC_DOBD_IHKA_9_8, 0x801391 | 0 | - |
| 0x2239ED | eDH, FIS_DFC_DOBD_IHKA_10_1, 0x801392 | 0 | - |
| 0x2239EE | eDH, FIS_DFC_DOBD_IHKA_10_2, 0x801393 | 0 | - |
| 0x2239EF | eDH, FIS_DFC_DOBD_IHKA_10_3, 0x801382 | 0 | - |
| 0x2239F0 | eDH, FIS_DFC_DOBD_IHKA_10_4, 0x801383 | 0 | - |
| 0x2239F1 | eDH, FIS_DFC_DOBD_IHKA_10_5, 0x801396 | 0 | - |
| 0x2239F2 | eDH, FIS_DFC_DOBD_IHKA_10_6, 0x80139B | 0 | - |
| 0x2239F3 | eDH, FIS_DFC_DOBD_IHKA_10_7, 0x80139C | 0 | - |
| 0x2239F4 | eDH, FIS_DFC_DOBD_IHKA_10_8, 0x801398 | 0 | - |
| 0x2239F5 | eDH, FIS_DFC_DOBD_IHKA_11_1, 0x80139A | 0 | - |
| 0x2239F6 | eDH, FIS_DFC_DOBD_IHKA_11_2, 0x801399 | 0 | - |
| 0x2239F7 | eDH, FIS_DFC_DOBD_IHKA_11_3, 0x801397 | 0 | - |
| 0x2239F8 | eDH, FIS_DFC_DOBD_IHKA_11_4, 0x801388 | 0 | - |
| 0x2239F9 | eDH, FIS_DFC_DOBD_IHKA_11_5, 0x801390 | 0 | - |
| 0x2239FA | eDH, FIS_DFC_DOBD_IHKA_11_6, 0x80139E | 0 | - |
| 0x2239FB | eDH, FIS_DFC_DOBD_IHKA_11_7, 0x801385 | 0 | - |
| 0x2239FC | eDH, FIS_DFC_DOBD_IHKA_11_8, 0x80138C | 0 | - |
| 0x2239FD | eDH, FIS_DFC_DOBD_IHKA_12_1, 0x80139D | 0 | - |
| 0x2239FE | eDH, FIS_DFC_DOBD_IHKA_12_2, 0x801389 | 0 | - |
| 0x2239FF | eDH, FIS_DFC_DOBD_IHKA_12_3, 0x80138A | 0 | - |
| 0x223A00 | eDH, FIS_DFC_DOBD_IHKA_12_4, 0x8013A7 | 0 | - |
| 0x223A01 | eDH, FIS_DFC_DOBD_IHKA_12_5, 0x801386 | 0 | - |
| 0x223A02 | eDH, FIS_DFC_DOBD_IHKA_12_6, 0x80138D | 0 | - |
| 0x223A03 | eDH, FIS_DFC_DOBD_IHKA_12_7, 0x8013A8 | 0 | - |
| 0x223A04 | eDH, FIS_DFC_DOBD_IHKA_12_8, 0x801372 | 0 | - |
| 0x223A05 | eDH, FIS_DFC_DOBD_IHKA_13_1, 0x8013A9 | 0 | - |
| 0x223A06 | eDH, FIS_DFC_DOBD_IHKA_13_2, 0x801373 | 0 | - |
| 0x223A07 | eDH, FIS_DFC_DOBD_IHKA_13_3, 0x801374 | 0 | - |
| 0x223A08 | eDH, FIS_DFC_DOBD_IHKA_13_4, 0x801375 | 0 | - |
| 0x223A09 | eDH, FIS_DFC_DOBD_IHKA_13_5, 0x801376 | 0 | - |
| 0x223A0A | Heat Pump, FIS_DFC_DOBD_IHKA_13_6, 0x8012B1 | 0 | - |
| 0x223A0B | Heat Pump, FIS_DFC_DOBD_IHKA_13_7, 0x8012B0 | 0 | - |
| 0x223A0C | Heat Pump, FIS_DFC_DOBD_IHKA_13_8, 0x8012B2 | 0 | - |
| 0x223A0D | Heat Pump, FIS_DFC_DOBD_IHKA_14_1, 0x8012B3 | 0 | - |
| 0x223A0E | Heat Pump, FIS_DFC_DOBD_IHKA_14_2, 0x8012B4 | 0 | - |
| 0x223A0F | Heat Pump, FIS_DFC_DOBD_IHKA_14_3, 0x80112D | 0 | - |
| 0x223A10 | Heat Pump, FIS_DFC_DOBD_IHKA_14_4, 0x8012B6 | 0 | - |
| 0x223A11 | Heat Pump, FIS_DFC_DOBD_IHKA_14_5, 0x8012B5 | 0 | - |
| 0x223A12 | Heat Pump, FIS_DFC_DOBD_IHKA_14_6, 0x8012B7 | 0 | - |
| 0x223A13 | Heat Pump, FIS_DFC_DOBD_IHKA_14_7, 0x8012B8 | 0 | - |
| 0x223A14 | Heat Pump, FIS_DFC_DOBD_IHKA_14_8, 0x8012B9 | 0 | - |
| 0x223A15 | Heat Pump, FIS_DFC_DOBD_IHKA_15_1, 0x80112F | 0 | - |
| 0x223A16 | Heat Pump, FIS_DFC_DOBD_IHKA_15_2, 0x8012BB | 0 | - |
| 0x223A17 | Heat Pump, FIS_DFC_DOBD_IHKA_15_3, 0x8012BA | 0 | - |
| 0x223A18 | Heat Pump, FIS_DFC_DOBD_IHKA_15_4, 0x8012BC | 0 | - |
| 0x223A19 | Heat Pump, FIS_DFC_DOBD_IHKA_15_5, 0x8012BD | 0 | - |
| 0x223A1A | Heat Pump, FIS_DFC_DOBD_IHKA_15_6, 0x8012BE | 0 | - |
| 0x223A1B | Heat Pump, FIS_DFC_DOBD_IHKA_15_7, 0x80112E | 0 | - |
| 0x223A1C | Heat Pump, FIS_DFC_DOBD_IHKA_15_8, 0x801125 | 0 | - |
| 0x223A1D | Heat Pump, FIS_DFC_DOBD_IHKA_16_1, 0x801124 | 0 | - |
| 0x223A1E | Heat Pump, FIS_DFC_DOBD_IHKA_16_2, 0x801126 | 0 | - |
| 0x223A1F | Heat Pump, FIS_DFC_DOBD_IHKA_16_3, 0x801298 | 0 | - |
| 0x223A20 | Heat Pump, FIS_DFC_DOBD_IHKA_16_4, 0x801299 | 0 | - |
| 0x223A21 | Heat Pump, FIS_DFC_DOBD_IHKA_16_5, 0x80112C | 0 | - |
| 0x223A22 | Heat Pump, FIS_DFC_DOBD_IHKA_16_6, 0x801292 | 0 | - |
| 0x223A23 | Heat Pump, FIS_DFC_DOBD_IHKA_16_7, 0x801291 | 0 | - |
| 0x223A24 | Heat Pump, FIS_DFC_DOBD_IHKA_16_8, 0x801290 | 0 | - |
| 0x223A25 | Heat Pump, FIS_DFC_DOBD_IHKA_17_1, 0x801296 | 0 | - |
| 0x223A26 | Heat Pump, FIS_DFC_DOBD_IHKA_17_2, 0x801297 | 0 | - |
| 0x223A27 | Heat Pump, FIS_DFC_DOBD_IHKA_17_3, 0x801128 | 0 | - |
| 0x223A28 | Heat Pump, FIS_DFC_DOBD_IHKA_17_4, 0x80112A | 0 | - |
| 0x223A29 | Heat Pump, FIS_DFC_DOBD_IHKA_17_5, 0x801129 | 0 | - |
| 0x223A2A | Heat Pump, FIS_DFC_DOBD_IHKA_17_6, 0x80112B | 0 | - |
| 0x223A2B | Heat Pump, FIS_DFC_DOBD_IHKA_17_7, 0x80129C | 0 | - |
| 0x223A2C | Heat Pump, FIS_DFC_DOBD_IHKA_17_8, 0x80129D | 0 | - |
| 0x223A2D | Heat Pump, FIS_DFC_DOBD_IHKA_18_1, 0x801127 | 0 | - |
| 0x223A2E | Heat Pump, FIS_DFC_DOBD_IHKA_18_2, 0x801295 | 0 | - |
| 0x223A2F | Heat Pump, FIS_DFC_DOBD_IHKA_18_3, 0x801294 | 0 | - |
| 0x223A30 | Heat Pump, FIS_DFC_DOBD_IHKA_18_4, 0x801293 | 0 | - |
| 0x223A31 | Heat Pump, FIS_DFC_DOBD_IHKA_18_5, 0x80129A | 0 | - |
| 0x223A32 | Heat Pump, FIS_DFC_DOBD_IHKA_18_6, 0x80129B | 0 | - |
| 0x223A33 | Heat Pump, FIS_DFC_DOBD_IHKA_18_7, 0x801123 | 0 | - |
| 0x223A34 | Heat Pump, FIS_DFC_DOBD_IHKA_18_8, 0x80127C | 0 | - |
| 0x223A35 | Heat Pump, FIS_DFC_DOBD_IHKA_19_1, 0x80127D | 0 | - |
| 0x223A36 | Heat Pump, FIS_DFC_DOBD_IHKA_19_2, 0x801285 | 0 | - |
| 0x223A37 | Heat Pump, FIS_DFC_DOBD_IHKA_19_3, 0x801120 | 0 | - |
| 0x223A38 | Heat Pump, FIS_DFC_DOBD_IHKA_19_4, 0x80127F | 0 | - |
| 0x223A39 | Heat Pump, FIS_DFC_DOBD_IHKA_19_5, 0x801280 | 0 | - |
| 0x223A3A | Heat Pump, FIS_DFC_DOBD_IHKA_19_6, 0x801286 | 0 | - |
| 0x223A3B | Heat Pump, FIS_DFC_DOBD_IHKA_19_7, 0x801121 | 0 | - |
| 0x223A3C | Heat Pump, FIS_DFC_DOBD_IHKA_19_8, 0x801282 | 0 | - |
| 0x223A3D | Heat Pump, FIS_DFC_DOBD_IHKA_20_1, 0x801283 | 0 | - |
| 0x223A3E | Heat Pump, FIS_DFC_DOBD_IHKA_20_2, 0x801287 | 0 | - |
| 0x223A3F | Heat Pump, FIS_DFC_DOBD_IHKA_20_3, 0x801122 | 0 | - |
| 0x223A40 | Heat Pump, FIS_DFC_DOBD_IHKA_20_4, 0x801271 | 0 | - |
| 0x223A41 | Heat Pump, FIS_DFC_DOBD_IHKA_20_5, 0x801272 | 0 | - |
| 0x223A42 | Heat Pump, FIS_DFC_DOBD_IHKA_20_6, 0x801270 | 0 | - |
| 0x223A43 | Heat Pump, FIS_DFC_DOBD_IHKA_20_7, 0x80128C | 0 | - |
| 0x223A44 | Heat Pump, FIS_DFC_DOBD_IHKA_20_8, 0x801274 | 0 | - |
| 0x223A45 | Heat Pump, FIS_DFC_DOBD_IHKA_21_1, 0x801275 | 0 | - |
| 0x223A46 | Heat Pump, FIS_DFC_DOBD_IHKA_21_2, 0x801273 | 0 | - |
| 0x223A47 | Heat Pump, FIS_DFC_DOBD_IHKA_21_3, 0x80128D | 0 | - |
| 0x223A48 | Heat Pump, FIS_DFC_DOBD_IHKA_21_4, 0x801277 | 0 | - |
| 0x223A49 | Heat Pump, FIS_DFC_DOBD_IHKA_21_5, 0x801278 | 0 | - |
| 0x223A4A | Heat Pump, FIS_DFC_DOBD_IHKA_21_6, 0x801276 | 0 | - |
| 0x223A4B | Heat Pump, FIS_DFC_DOBD_IHKA_21_7, 0x80128E | 0 | - |
| 0x223A4C | Heat Pump, FIS_DFC_DOBD_IHKA_21_8, 0x80127A | 0 | - |
| 0x223A4D | Heat Pump, FIS_DFC_DOBD_IHKA_22_1, 0x80127B | 0 | - |
| 0x223A4E | Heat Pump, FIS_DFC_DOBD_IHKA_22_2, 0x801279 | 0 | - |
| 0x223A4F | Heat Pump, FIS_DFC_DOBD_IHKA_22_3, 0x80128F | 0 | - |
| 0x223A50 | Heat Pump, FIS_DFC_DOBD_IHKA_22_4, 0x80113A | 0 | - |
| 0x223A51 | Heat Pump, FIS_DFC_DOBD_IHKA_22_5, 0x80113B | 0 | - |
| 0x223A52 | Heat Pump, FIS_DFC_DOBD_IHKA_22_6, 0x80113C | 0 | - |
| 0x223A53 | Heat Pump, FIS_DFC_DOBD_IHKA_22_7, 0x80113D | 0 | - |
| 0x223A54 | Heat Pump, FIS_DFC_DOBD_IHKA_22_8, 0x80113E | 0 | - |
| 0x223A55 | Heat Pump, FIS_DFC_DOBD_IHKA_23_1, 0x80113F | 0 | - |
| 0x223A65 | eDH, FIS_DFC_DOBD_IHKA_25_1, 0x8013AE | 0 | - |
| 0x223A66 | eDH, FIS_DFC_DOBD_IHKA_25_2, 0x8013AF | 0 | - |
| 0x223A67 | eDH, FIS_DFC_DOBD_IHKA_25_3, 0x8013B0 | 0 | - |
| 0x223A68 | eDH, FIS_DFC_DOBD_IHKA_25_4, 0x8013B1 | 0 | - |
| 0x223A69 | eDH, FIS_DFC_DOBD_IHKA_25_5, 0x8013B2 | 0 | - |
| 0x223A6A | eDH, FIS_DFC_DOBD_IHKA_25_6, 0x8013B3 | 0 | - |
| 0x223A6B | eDH, FIS_DFC_DOBD_IHKA_25_7, 0x8013B4 | 0 | - |
| 0x223A6C | eDH, FIS_DFC_DOBD_IHKA_25_8, 0x8013B5 | 0 | - |
| 0x223A6D | eDH, FIS_DFC_DOBD_IHKA_26_1, 0x8013B6 | 0 | - |
| 0x223A6E | eDH, FIS_DFC_DOBD_IHKA_26_2, 0x8013B8 | 0 | - |
| 0x223A6F | eDH, FIS_DFC_DOBD_IHKA_26_3, 0x8013B7 | 0 | - |
| 0x223A70 | eDH, FIS_DFC_DOBD_IHKA_26_4, 0x8013B9 | 0 | - |
| 0x223A71 | eDH, FIS_DFC_DOBD_IHKA_26_5, 0x8013BA | 0 | - |
| 0x223A72 | eDH, FIS_DFC_DOBD_IHKA_26_6, 0x8013BB | 0 | - |
| 0x223A73 | eDH, FIS_DFC_DOBD_IHKA_26_7, 0x8013BC | 0 | - |
| 0x223A74 | eDH, FIS_DFC_DOBD_IHKA_26_8, 0x8013BE | 0 | - |
| 0x223A75 | eDH, FIS_DFC_DOBD_IHKA_27_1, 0x8013BD | 0 | - |
| 0x223A76 | eDH, FIS_DFC_DOBD_IHKA_27_2, 0x8013BF | 0 | - |
| 0x223A77 | eDH, FIS_DFC_DOBD_IHKA_27_3, 0x801160 | 0 | - |
| 0x223A78 | eDH, FIS_DFC_DOBD_IHKA_27_4, 0x801161 | 0 | - |
| 0x223A79 | eDH, FIS_DFC_DOBD_IHKA_27_5, 0x801162 | 0 | - |
| 0x223A7A | eDH, FIS_DFC_DOBD_IHKA_27_6, 0x801163 | 0 | - |
| 0x223A7B | eDH, FIS_DFC_DOBD_IHKA_27_7, 0x801164 | 0 | - |
| 0x223A7C | eDH, FIS_DFC_DOBD_IHKA_27_8, 0x801165 | 0 | - |
| 0x223A7D | eDH, FIS_DFC_DOBD_IHKA_28_1, 0x801166 | 0 | - |
| 0x223A7E | eDH, FIS_DFC_DOBD_IHKA_28_2, 0x801167 | 0 | - |
| 0x223A7F | eDH, FIS_DFC_DOBD_IHKA_28_3, 0x801168 | 0 | - |
| 0x223A80 | eDH, FIS_DFC_DOBD_IHKA_28_4, 0x801169 | 0 | - |
| 0x223A81 | eDH, FIS_DFC_DOBD_IHKA_28_5, 0x80116A | 0 | - |
| 0x223A82 | eDH, FIS_DFC_DOBD_IHKA_28_6, 0x80116B | 0 | - |
| 0x223A83 | eDH, FIS_DFC_DOBD_IHKA_28_7, 0x80116C | 0 | - |
| 0x223A84 | eDH, FIS_DFC_DOBD_IHKA_28_8, 0x80116D | 0 | - |
| 0x223A85 | eDH, FIS_DFC_DOBD_IHKA_29_1, 0x80116E | 0 | - |
| 0x223A86 | eDH, FIS_DFC_DOBD_IHKA_29_2, 0x80116F | 0 | - |
| 0x223A87 | eDH, FIS_DFC_DOBD_IHKA_29_3, 0x801170 | 0 | - |
| 0x223A88 | eDH, FIS_DFC_DOBD_IHKA_29_4, 0x801171 | 0 | - |
| 0x223A89 | eDH, FIS_DFC_DOBD_IHKA_29_5, 0x8013A1 | 0 | - |
| 0x223A8A | eDH, FIS_DFC_DOBD_IHKA_29_6, 0x8013A4 | 0 | - |
| 0x223A8B | eDH, FIS_DFC_DOBD_IHKA_29_7, 0x801395 | 0 | - |
| 0x223A8C | eDH, FIS_DFC_DOBD_IHKA_29_8, 0x8013A0 | 0 | - |
| 0x223A8D | eDH, FIS_DFC_DOBD_IHKA_30_1, 0x80139F | 0 | - |
| 0x223A8E | eDH, FIS_DFC_DOBD_IHKA_30_2, 0x801394 | 0 | - |
| 0x223A8F | eDH, FIS_DFC_DOBD_IHKA_30_3, 0x8013A5 | 0 | - |
| 0x223A90 | eDH, FIS_DFC_DOBD_IHKA_30_4, 0x8013A6 | 0 | - |
| 0x223A91 | eDH, FIS_DFC_DOBD_IHKA_30_5, 0x8013AA | 0 | - |
| 0x223A92 | eDH, FIS_DFC_DOBD_IHKA_30_6, 0x8013AB | 0 | - |
| 0x223A93 | eDH, FIS_DFC_DOBD_IHKA_30_7, 0x8013AC | 0 | - |
| 0x223A94 | eDH, FIS_DFC_DOBD_IHKA_30_8, 0x8013AD | 0 | - |
| 0x223A95 | UCX, FIS_21E622, 0x21E622 | 0 | - |
| 0x223A96 | UCX, FIS_21E623, 0x21E623 | 0 | - |
| 0x223A97 | UCX, FIS_21E60F, 0x21E60F | 0 | - |
| 0x223A98 | UCX, FIS_21E610, 0x21E610 | 0 | - |
| 0x223A99 | UCX, FIS_21E624, 0x21E624 | 0 | - |
| 0x223A9A | UCX, FIS_21E625, 0x21E625 | 0 | - |
| 0x223A9B | UCX, FIS_21E626, 0x21E626 | 0 | - |
| 0x223A9C | UCX,  FIS_21E627,  0x21E627 | 0 | - |
| 0x223A9D | UCX, FIS_21E60D, 0x21E60D | 0 | - |
| 0x223A9E | UCX, FIS_21E60E, 0x21E60E | 0 | - |
| 0x223A9F | UCX, FIS_21E628, 0x21E628 | 0 | - |
| 0x223AA0 | UCX, FIS_21E629, 0x21E629 | 0 | - |
| 0x223AA1 | UCX, FIS_21E62A, 0x21E62A | 0 | - |
| 0x223AA2 | UCX, FIS_21E62B, 0x21E62B | 0 | - |
| 0x223AA3 | UCX, FIS_21E62C, 0x21E62C | 0 | - |
| 0x223AA4 | UCX, FIS_21E62D, 0x21E62D | 0 | - |
| 0x223AA5 | UCX,  FIS_21E614,  0x21E614 | 0 | - |
| 0x223AA6 | UCX, FIS_21E62E, 0x21E62E | 0 | - |
| 0x223AA7 | UCX, FIS_21E62F, 0x21E62F | 0 | - |
| 0x223AA8 | UCX, FIS_21E630, 0x21E630 | 0 | - |
| 0x223AA9 | UCX, FIS_21E631, 0x21E631 | 0 | - |
| 0x223AAA | UCX, FIS_21E632, 0x21E632 | 0 | - |
| 0x223AAB | UCX, FIS_21E633, 0x21E633 | 0 | - |
| 0x223AAC | UCX, FIS_21E634, 0x21E634 | 0 | - |
| 0x223AAD | UCX, FIS_21E606, 0x21E606 | 0 | - |
| 0x223AAE | UCX, FIS_21E605, 0x21E605 | 0 | - |
| 0x223AAF | UCX, FIS_21E635, 0x21E635 | 0 | - |
| 0x223AB0 | UCX, FIS_CE4486, 0xCE4486 | 0 | - |
| 0x223AB1 | UCX, FIS_21E615, 0x21E615 | 0 | - |
| 0x223AB2 | UCX, FIS_21E616, 0x21E616 | 0 | - |
| 0x223AB3 | DOBD - UCX - Charging Voltage Limit Setpoint, Sender SME | 0 | - |
| 0x223AB4 | DOBD - UCX - Charging Voltage Limit Setpoint, Sender SME | 0 | - |
| 0x223AB5 | DOBD - UCX - Charging Voltage Limit Setpoint, Sender SME | 0 | - |
| 0x223AB6 | DOBD - UCX - Active Discharge Request, Sender AE | 0 | - |
| 0x223AB7 | DOBD - UCX - Active Discharge Request, Sender AE | 0 | - |
| 0x223AB8 | DOBD - UCX - Active Discharge Request, Sender AE | 0 | - |
| 0x223AB9 | DOBD - UCX - HVDC Voltage Fine Measurement, Sender SME | 0 | - |
| 0x223ABA | DOBD - UCX - HVDC Voltage Fine Measurement, Sender SME | 0 | - |
| 0x223ABB | UCX, FIS_CE5402, 0xCE5402 | 0 | - |
| 0x223ABC | UCX, FIS_CE5410, 0xCE5410 | 0 | - |
| 0x223ABD | UCX, FIS_CE5411, 0xCE5411 | 0 | - |
| 0x223ABE | UCX, FIS_CE5412, 0xCE5412 | 0 | - |
| 0x223ABF | DOBD - UCX - Charging Current Limit, Sender AE | 0 | - |
| 0x223AC0 | UCX,  FIS_CE5414,  0xCE5414 | 0 | - |
| 0x223AC1 | DOBD - UCX - Target Charging Power, Sender AE | 0 | - |
| 0x223AC2 | UCX, FIS_21E636, 0x21E636 | 0 | - |
| 0x223AC3 | UCX, FIS_21E637, 0x21E637 | 0 | - |
| 0x223AC4 | UCX, FIS_21E638, 0x21E638 | 0 | - |
| 0x223AC5 | UCX, FIS_21E639, 0x21E639 | 0 | - |
| 0x223AC6 | UCX, FIS_21E63A, 0x21E63A | 0 | - |
| 0x223AC7 | UCX, FIS_21E63B, 0x21E63B | 0 | - |
| 0x223AC8 | UCX, FIS_21E63C, 0x21E63C | 0 | - |
| 0x223AC9 | UCX, FIS_21E63D, 0x21E63D | 0 | - |
| 0x223ACA | UCX, FIS_21E63E, 0x21E63E | 0 | - |
| 0x223ACB | UCX, FIS_21E63F, 0x21E63F | 0 | - |
| 0x223ACD | UCX, FIS_21E641, 0x21E641 | 0 | - |
| 0x223ACE | UCX, FIS_21E642, 0x21E642 | 0 | - |
| 0x223ACF | UCX, FIS_21E643, 0x21E643 | 0 | - |
| 0x223AD0 | UCX, FIS_21E644, 0x21E644 | 0 | - |
| 0x223AD1 | UCX, FIS_21E645, 0x21E645 | 0 | - |
| 0x223AD2 | UCX, FIS_21E646, 0x21E646 | 0 | - |
| 0x223AD3 | UCX, FIS_21E647, 0x21E647 | 0 | - |
| 0x223AD4 | UCX, FIS_21E61C, 0x21E61C | 0 | - |
| 0x223AD5 | UCX, FIS_21E648, 0x21E648 | 0 | - |
| 0x223AD6 | UCX, FIS_21E649, 0x21E649 | 0 | - |
| 0x223AD7 | UCX, FIS_21E60C, 0x21E60C | 0 | - |
| 0x223AD8 | UCX, FIS_21E60B, 0x21E60B | 0 | - |
| 0x223ADF | UCX, FIS_CE5416, 0xCE5416 | 0 | - |
| 0x223AE0 | UCX, FIS_CE5417, 0xCE5417 | 0 | - |
| 0x223AE1 | UCX, FIS_CE5406, 0xCE5406 | 0 | - |
| 0x223AE2 | UCX, FIS_CE5418, 0xCE5418 | 0 | - |
| 0x223AE3 | UCX, FIS_CE5419, 0xCE5419 | 0 | - |
| 0x223AE4 | UCX, FIS_CE5404, 0xCE5404 | 0 | - |
| 0x223AE5 | DOBD - UCX - Digital Signal Processor (DSP1) | 0 | - |
| 0x223AE6 | UCX, FIS_21E64A, 0x21E64A | 0 | - |
| 0x223AE7 | UCX, FIS_21E64B, 0x21E64B | 0 | - |
| 0x223AE8 | UCX, FIS_21E64C, 0x21E64C | 0 | - |
| 0x223AE9 | UCX, FIS_21E64D, 0x21E64D | 0 | - |
| 0x223AEA | UCX, FIS_21E611, 0x21E611 | 0 | - |
| 0x223AEB | UCX, FIS_21E64E, 0x21E64E | 0 | - |
| 0x223AEC | UCX, FIS_21E64F, 0x21E64F | 0 | - |
| 0x223AED | UCX, FIS_21E650, 0x21E650 | 0 | - |
| 0x223AEE | UCX, FIS_21E651, 0x21E651 | 0 | - |
| 0x223AEF | UCX,  FIS_21E652,  0x21E652 | 0 | - |
| 0x223AF0 | UCX, FIS_21E653, 0x21E653 | 0 | - |
| 0x223AF1 | UCX, FIS_21E654, 0x21E654 | 0 | - |
| 0x223AF2 | UCX, FIS_CE541A, 0xCE541A | 0 | - |
| 0x223AF3 | UCX, FIS_CE541B, 0xCE541B | 0 | - |
| 0x223AF4 | UCX, FIS_CE541C, 0xCE541C | 0 | - |
| 0x223AF5 | UCX, FIS_CE541D, 0xCE541D | 0 | - |
| 0x223AF6 | UCX, FIS_CE5400, 0xCE5400 | 0 | - |
| 0x223AF7 | UCX, FIS_21e655, 0x21e655 | 0 | - |
| 0x223AF8 | UCX, FIS_21e68f, 0x21e68f | 0 | - |
| 0x223AF9 | UCX, FIS_21e656, 0x21e656 | 0 | - |
| 0x223AFC | UCX, FIS_21e659, 0x21e659 | 0 | - |
| 0x223AFD | UCX, FIS_21e65a, 0x21e65a | 0 | - |
| 0x223AFE | UCX, FIS_21e65b, 0x21e65b | 0 | - |
| 0x223AFF | UCX, FIS_21e690, 0x21e690 | 0 | - |
| 0x223B00 | UCX, FIS_21e691, 0x21e691 | 0 | - |
| 0x223B01 | UCX, FIS_21e692, 0x21e692 | 0 | - |
| 0x223B0F | UCX, FIS_21e69c, 0x21e69c | 0 | - |
| 0x223B10 | UCX, FIS_21e69d, 0x21e69d | 0 | - |
| 0x223B11 | UCX, FIS_21e69e, 0x21e69e | 0 | - |
| 0x223B12 | DOBD - UCX - Digital Signal Processor (DSP1) | 0 | - |
| 0x223B13 | LIM, PWM_SIGNAL_SHORT_TO_UBAT, 0x805531 | 0 | - |
| 0x223B15 | LIM, CHARGE_ENABLE_LINE_SHORT_GND, 0x805507 | 0 | - |
| 0x223B16 | LIM, CHARGE_ENABLE_LINE_SHORT_PLUS, 0x805508 | 0 | - |
| 0x223B17 | LIM, CHARGE_ENABLE_LINE_LINE_BREAK, 0x805506 | 0 | - |
| 0x223B18 | LIM, CHARGE_PLUG_LOCK_SHORT_GND, 0x805504 | 0 | - |
| 0x223B19 | LIM, CHARGE_PLUG_LOCK_SHORT_PLUS, 0x805505 | 0 | - |
| 0x223B1A | LIM, CHARGE_PLUG_LOCK_LINE_BREAK, 0x805503 | 0 | - |
| 0x223B1C | LIM, CABLE_LOCK_SENSOR_SHORT_TO_GND, 0x805536 | 0 | - |
| 0x223B1D | LIM, CABLE_LOCK_SENSOR_SHORT_TO_UBAT, 0x805537 | 0 | - |
| 0x223B1E | LIM, DC_VOLTAGE_MEASUREMENT_SHORT_GND_OR_OPEN_LOAD, 0x805525 | 0 | - |
| 0x223B1F | LIM, DC_VOLTAGE_MEASUREMENT_SHORT_PLUS, 0x805526 | 0 | - |
| 0x223B20 | LIM, DC_VOLTAGE_MEASUREMENT_IMPLAUSIBLE, 0x805527 | 0 | - |
| 0x223B21 | LIM, DC_VOLTAGE_RATIONALITY_ERROR, 0x805538 | 0 | - |
| 0x223B22 | LIM, DC_POSITIVE_CONTROL_CONTACTOR_SHORT_TO_GND, 0x805521 | 0 | - |
| 0x223B23 | LIM, DC_POSITIVE_CONTROL_CONTACTOR_SHORT_TO_PLUS, 0x805522 | 0 | - |
| 0x223B24 | LIM, DC_POSITIVE_CONTROL_CONTACTOR_LINE_INTERRUPTION, 0x805520 | 0 | - |
| 0x223B25 | LIM, DC_POSITIVE_LINE_CONTACTOR_STUCK, 0x805524 | 0 | - |
| 0x223B26 | LIM, DC_NEGATIVE_CONTROL_CONTACTOR_SHORT_TO_GND, 0x80551E | 0 | - |
| 0x223B27 | LIM, DC_NEGATIVE_CONTROL_CONTACTOR_SHORT_TO_PLUS, 0x80551F | 0 | - |
| 0x223B28 | LIM, DC_NEGATIVE_CONTROL_CONTACTOR_LINE_INTERRUPTION, 0x80551D | 0 | - |
| 0x223B29 | LIM, DC_NEGATIVE_LINE_CONTACTOR_STUCK, 0x805523 | 0 | - |
| 0x223B2A | LIM, DC_CONTACTOR_OPEN, 0x805539 | 0 | - |
| 0x223B2B | LIM, PILOT_FUNCTIONAL_CHECK, 0x80553A | 0 | - |
| 0x223B2C | LIM, CABLE_LOCK_SENSOR_LINE_BREAK, 0x80553B | 0 | - |
| 0x223B2F | REME, DFC_COM_StDFClctrMot1, 0x21DF08 | 0 | - |
| 0x223B34 | REME, DFC_CrashCircTest, 0x21DE0F | 0 | - |
| 0x223B35 | REME, DTC_MOFIPH, 0x21DE33 | 0 | - |
| 0x223B36 | REME, DTC_MOFUDC, 0x21DE35 | 0 | - |
| 0x223B39 | REME, DTC_ActvShoNotPsbl, 0x21DDB7 | 0 | - |
| 0x223B3B | LIM PROXIMITY_SHORT_TO_UBAT 0x80553C | 0 | - |
| 0x223B3C | SME, DTC_HT_ISENS_RANGE_LO, 0x21F1F8 | 0 | - |
| 0x223B3D | SME DTC_CURRENT_OVERCURRENT_CELL 0x21F295 | 0 | - |
| 0x223B3E | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_1, 0x21F296 | 0 | - |
| 0x223B3F | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_2, 0x21F297 | 0 | - |
| 0x223B40 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_3, 0x21F298 | 0 | - |
| 0x223B41 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_4, 0x21F299 | 0 | - |
| 0x223B42 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_5, 0x21F29A | 0 | - |
| 0x223B43 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_6, 0x21F29B | 0 | - |
| 0x223B44 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_7, 0x21F29C | 0 | - |
| 0x223B45 | SME, DTC_CSC_ERR_OPN_WIRE_T_MOD_8, 0x21F29D | 0 | - |
| 0x223B46 | SME, DTC_CELL_MODUL1_VOLT_PLAUS_ERR, 0x21F0F3 | 0 | - |
| 0x223B47 | SME, DTC_CELL_MODUL2_VOLT_PLAUS_ERR, 0x21F0F4 | 0 | - |
| 0x223B48 | SME, DTC_CELL_MODUL3_VOLT_PLAUS_ERR, 0x21F0F5 | 0 | - |
| 0x223B49 | SME, DTC_CELL_MODUL4_VOLT_PLAUS_ERR, 0x21F0F6 | 0 | - |
| 0x223B4A | SME, DTC_CELL_MODUL5_VOLT_PLAUS_ERR, 0x21F0F7 | 0 | - |
| 0x223B4B | SME, DTC_CELL_MODUL6_VOLT_PLAUS_ERR, 0x21F0F8 | 0 | - |
| 0x223B4C | SME, DTC_CELL_MODUL7_VOLT_PLAUS_ERR, 0x21F0F9 | 0 | - |
| 0x223B4D | SME, DTC_CELL_MODUL8_VOLT_PLAUS_ERR, 0x21F0FA | 0 | - |
| 0x223B4E | REME, DTC_VALEO_NTCTempMismatch, 0x21DD12 | 0 | - |
| 0x223B4F | REME, DTC_VALEO_OvertempThreshold2, 0x21DD0A | 0 | - |
| 0x223B50 | REME, DTC_VALEO_StaticEnergization, 0x21DD11 | 0 | - |
| 0x223B51 | REME, DTC_FrmAvlDtMotTrct_A_TO, 0xCB9490 | 0 | - |
| 0x223B52 | REME, DTC_FrmAvlDtMotTrct_A_CRC, 0xCB949F | 0 | - |
| 0x223B53 | REME, DTC_FrmAvlDtMotTrct_A_ALIV, 0xCB949E | 0 | - |
| 0x223B54 | REME, DTC_TSttrScb, 0x21DD16 | 0 | - |
| 0x223B55 | REME, DTC_TSttrScg, 0x21DD17 | 0 | - |
| 0x223B56 | DOBD - REME -  DTC_HwTnetDchaCirc, 0x21DDB3  Antriebsmotor 2 Zwischenkreis - Entladezeit zu lang | 0 | - |
| 0x223B63 | REME, DTC_COM_StDcswHvsto, 0x21DF2A | 0 | - |
| 0x223B64 | REME, DTC_ClkDfwFullInin, 0x21DE08 | 0 | - |
| 0x223B65 | REME, DTC_ClkDfwHalfInin, 0x21DE09 | 0 | - |
| 0x223B66 | REME, DTC_FrmSpecOprngRex_A_TO, 0xCB940A | 0 | - |
| 0x223B67 | REME, DTC_FrmStHvsto1_A_TO, 0xCB9465 | 0 | - |
| 0x223B68 | REME, DTC_GateSplyOffDfwOn, 0x21DE16 | 0 | - |
| 0x223B69 | REME, DTC_MOFEPOS, 0x21DE30 | 0 | - |
| 0x223B6A | REME, DTC_MOFERRMODE, 0x21DE31 | 0 | - |
| 0x223B6B | REME, DTC_MOFESPD, 0x21DE32 | 0 | - |
| 0x223B6C | REME, DTC_MOFMODE, 0x21DE34 | 0 | - |
| 0x223B6D | REME, DTC_RslvrClp, 0x21DD00 | 0 | - |
| 0x223B6E | REME, DTC_VALEO_I_ac_rms, 0x21DD0D | 0 | - |
| 0x223B78 | REME, DTC_COM_RqDchgLink , 0x21DF1E | 0 | - |
| 0x223B79 | REME, DTC_COM_StKl, 0x21DF27 | 0 | - |
| 0x223B7A | REME, DTC_ReqdModOutdRng, 0x21DD73 | 0 | - |
| 0x223B7B | REME, DTC_InvrActvTerminal15OffHw, 0x21DE17 | 0 | - |
| 0x223B7C | REME, DTC_COM_AvlUHvLinkMotTrct, 0x21DD1 | 0 | - |
| 0x223B7D | REME, DTC_NOutdRng, 0x21DDBA | 0 | - |
| 0x223C24 | UCX, FIS_03188F, 0x03188F | 0 | - |
| 0x223C25 | UCX, FIS_03188D, 0x03188D | 0 | - |
| 0x223C26 | UCX, FIS_03188B, 0x03188B | 0 | - |
| 0x223C27 | UCX, FIS_03188C, 0x03188C | 0 | - |
| 0x223C28 | UCX, FIS_03182d, 0x03182D | 0 | - |
| 0x223C29 | UCX, FIS_03182c, 0x03182C | 0 | - |
| 0x223C2A | UCX, FIS_031828, 0x031828 | 0 | - |
| 0x223C2B | UCX, FIS_03182B, 0x03182B | 0 | - |
| 0x223C2C | UCX, FIS_031829, 0x031829 | 0 | - |
| 0x223C2D | UCX, FIS_03182a, 0x03182A | 0 | - |
| 0x223C2E | UCX, FIS_03180D, 0x03180D | 0 | - |
| 0x223C2F | UCX, FIS_03180C, 0x03180C | 0 | - |
| 0x223C30 | UCX, FIS_03180B, 0x03180B | 0 | - |
| 0x223C31 | UCX, FIS_031808, 0x031808 | 0 | - |
| 0x223C32 | UCX, FIS_031809, 0x031809 | 0 | - |
| 0x223C33 | UCX, FIS_03180A, 0x03180A | 0 | - |
| 0x223C34 | UCX, FIS_031897, 0x031897 | 0 | - |
| 0x223C35 | UCX, FIS_031894, 0x031894 | 0 | - |
| 0x223C36 | UCX, FIS_031895, 0x031895 | 0 | - |
| 0x223C37 | UCX, FIS_031898, 0x031898 | 0 | - |
| 0x223C38 | UCX, FIS_031896, 0x031896 | 0 | - |
| 0x223C39 | UCX, FIS_03189D, 0x03189D | 0 | - |
| 0x223C3A | UCX, FIS_03189E, 0x03189E | 0 | - |
| 0x223C3B | UCX, FIS_0318A1, 0x0318A1 | 0 | - |
| 0x223C3C | UCX, FIS_03189F, 0x03189F | 0 | - |
| 0x223C3D | UCX, FIS_0318A0, 0x0318A0 | 0 | - |
| 0x223C3E | UCX, FIS_031852, 0x031852 | 0 | - |
| 0x223C3F | UCX, FIS_031851, 0x031851 | 0 | - |
| 0x223C40 | UCX, FIS_031850, 0x031850 | 0 | - |
| 0x223C41 | UCX, FIS_03184E, 0x03184E | 0 | - |
| 0x223C42 | UCX, FIS_03184F, 0x03184F | 0 | - |
| 0x223C43 | UCX, FIS_0318B6, 0x0318B6 | 0 | - |
| 0x223C44 | UCX, FIS_0318B7, 0x0318B7 | 0 | - |
| 0x223C45 | UCX, FIS_031862, 0x031862 | 0 | - |
| 0x223C46 | UCX, FIS_031861, 0x031861 | 0 | - |
| 0x223C47 | UCX, FIS_031860, 0x031860 | 0 | - |
| 0x223C48 | UCX, FIS_03185E, 0x03185E | 0 | - |
| 0x223C49 | UCX, FIS_03185F, 0x03185F | 0 | - |
| 0x223C4A | UCX, FIS_03183D, 0x03183D | 0 | - |
| 0x223C4B | UCX, FIS_03183C, 0x03183C | 0 | - |
| 0x223C4C | UCX, FIS_031838, 0x031838 | 0 | - |
| 0x223C4D | UCX, FIS_03183B, 0x03183B | 0 | - |
| 0x223C4E | UCX, FIS_031839, 0x031839 | 0 | - |
| 0x223C4F | UCX, FIS_0318B5, 0x0318B5 | 0 | - |
| 0x223C50 | UCX, FIS_0318A4, 0x0318A4 | 0 | - |
| 0x223C51 | UCX, FIS_0318A6, 0x0318A6 | 0 | - |
| 0x223C52 | UCX, FIS_0318A8, 0x0318A8 | 0 | - |
| 0x223C53 | UCX, FIS_0318A7, 0x0318A7 | 0 | - |
| 0x223C54 | UCX, FIS_0318A5, 0x0318A5 | 0 | - |
| 0x223C55 | UCX, FIS_0318AD, 0x0318AD | 0 | - |
| 0x223C56 | UCX, FIS_0318AF, 0x0318AF | 0 | - |
| 0x223C57 | UCX, FIS_0318B1, 0x0318B1 | 0 | - |
| 0x223C58 | UCX, FIS_0318B0, 0x0318B0 | 0 | - |
| 0x223C59 | UCX, FIS_03186F, 0x03186F | 0 | - |
| 0x223C5A | UCX, FIS_031863, 0x031863 | 0 | - |
| 0x223C5B | UCX, FIS_UCX2_26_4 | 0 | - |
| 0x223C5C | UCX, FIS_0318C0, 0x0318C0 | 0 | - |
| 0x223C5D | UCX, FIS_0318C1, 0x0318C1 | 0 | - |
| 0x223C5E | UCX, FIS_UCX2_26_7 | 0 | - |
| 0x223C5F | UCX, FIS_03188E, 0x03188E | 0 | - |
| 0x223C60 | UCX, FIS_UCX2_27_1 | 0 | - |
| 0x223C61 | UCX, FIS_UCX2_27_2 | 0 | - |
| 0x223C62 | UCX, FIS_UCX2_27_3 | 0 | - |
| 0x223C63 | UCX, FIS_0318AE, 0x0318AE | 0 | - |
| 0x223C64 | UCX, FIS_UCX2_27_5 | 0 | - |
| 0x223C65 | UCX, FIS_UCX2_27_6 | 0 | - |
| 0x223C66 | UCX, FIS_UCX2_27_7 | 0 | - |
| 0x223C67 | UCX, FIS_UCX2_27_8 | 0 | - |
| 0x223C68 | UCX, FIS_UCX2_28_1 | 0 | - |
| 0x223C69 | UCX, FIS_UCX2_28_2 | 0 | - |
| 0x223C6A | UCX, FIS_UCX2_28_3 | 0 | - |
| 0x223C6B | UCX, FIS_03182F, 0x03182F | 0 | - |
| 0x223C6C | UCX, FIS_UCX2_29_2 | 0 | - |
| 0x223C6D | UCX, FIS_UCX2_29_3 | 0 | - |
| 0x223C6E | UCX, FIS_UCX2_29_4 | 0 | - |
| 0x223C6F | REME, DFC_RslvrExctErrElec, 0x21DD1B | 0 | - |
| 0x223C70 | REME, DFC_RslvrCosOpenCirc, 0x21DD18 | 0 | - |
| 0x223C71 | REME, DFC_RslvrCosScb, 0x21DD19 | 0 | - |
| 0x223C72 | REME, DFC_RslvrCosScg, 0x21DD1A | 0 | - |
| 0x223C73 | REME, DFC_RslvrSinOpenCirc, 0x21DD1C | 0 | - |
| 0x223C74 | REME, DFC_RslvrSinScb, 0x21DD1D | 0 | - |
| 0x223C75 | REME, DFC_RslvrSinScg, 0x21DD1E | 0 | - |
| 0x223C76 | REME, DFC_HwIdInvld, 0x21DD1F | 0 | - |
| 0x223C77 | SME, DTC_COOLSENS_PLAUS_ERROR, 0x21F027 | 0 | - |
| 0x223C7F | UCX,FIS_12_5 | 0 | - |
| 0x223C80 | UCX,FIS_12_6 | 0 | - |
| 0x223C81 | UCX,FIS_12_7 | 0 | - |
| 0x223C82 | UCX,FIS_12_8 | 0 | - |
| 0x223C83 | UCX,FIS_13_1 | 0 | - |
| 0x223C84 | UCX,FIS_13_2 | 0 | - |
| 0x223C85 | UCX,FIS_15_8 | 0 | - |
| 0x223C86 | UCX,FIS_16_7 | 0 | - |
| 0x223C87 | UCX,FIS_16_8 | 0 | - |
| 0x223C88 | UCX,FIS_17_1 | 0 | - |
| 0x223C89 | UCX,FIS_18_3 | 0 | - |
| 0x223C8A | UCX,FIS_18_4 | 0 | - |
| 0x223C8B | UCX,FIS_18_5 | 0 | - |
| 0x223C8C | UCX,FIS_18_6 | 0 | - |
| 0x223C8D | UCX,FIS_18_7 | 0 | - |
| 0x223C8E | UCX,FIS_18_8 | 0 | - |
| 0x223C8F | UCX,FIS_19_1 | 0 | - |
| 0x223C95 | DOBD - UCX - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x223C96 | DOBD - UCX - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x223C97 | DOBD - UCX - Ladeelektronik: Unterspannung am DC-Anschluss | 0 | - |
| 0x223C98 | DOBD - UCX - Ladeelektronik: Überspannung am DC-Anschluss | 0 | - |
| 0x223C99 | DOBD - UCX - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu niedrig | 0 | - |
| 0x223C9A | DOBD - UCX - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu hoch | 0 | - |
| 0x223C9B | DOBD - UCX - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x223C9C | DOBD - UCX - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x223C9D | DOBD - UCX - Ladeelektronik: Unterspannung am AC-Anschluss | 0 | - |
| 0x223C9E | DOBD - UCX - Ladeelektronik: Überspannung am AC-Anschluss | 0 | - |
| 0x223C9F | DOBD - UCX - Ladeelektronik: HV AC Spannung unplausibel zu niedrig | 0 | - |
| 0x223CA0 | DOBD - UCX - Ladeelektronik: HV AC Spannung unplausibel | 0 | - |
| 0x223CA1 | DOBD - UCX - Ladeelektronik: Unterspannung KL30C | 0 | - |
| 0x223CA2 | DOBD - UCX - Ladeelektronik: Überspannung KL30C | 0 | - |
| 0x223CA3 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft Leitung, Kurzschluss nach Masse | 0 | - |
| 0x223CA4 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft Leitung, Kurzschluss nach Plus | 0 | - |
| 0x223CA5 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft, Signal außerhalb Sollbereich (unten) | 0 | - |
| 0x223CA6 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft, Signal außerhalb Sollbereich (oben) | 0 | - |
| 0x223CA7 | DOBD - UCX - Lade-Elektronik: Ladebereitschaft, Signal unplausibel | 0 | - |
| 0x223CA8 | DOBD - UCX - Ladeelektronik, Sensor Versorgungsspannung: Kurzschluss nach Masse | 0 | - |
| 0x223CA9 | DOBD - UCX - Ladeelektronik, Sensor Versorgungsspannung: Kurzschluss nach Plus | 0 | - |
| 0x223CAA | DOBD - UCX - Ladeelektronik: Unterspannung an 12V Spannungsversorgung | 0 | - |
| 0x223CAB | DOBD - UCX - Ladeelektronik: Überspannung an 12V Spannungsversorgung | 0 | - |
| 0x223CAC | DOBD - UCX - Ladeelektronik, Sensor Versorgungsspannung: Unplausibel im Vergleich zu KL30C | 0 | - |
| 0x223CAD | DOBD - UCX - Ladeelektronik: Wirkungsgrad außerhalb Bereich (Low) | 0 | - |
| 0x223CAE | DOBD - UCX - Ladeelektronik: Wirkungsgrad außerhalb Bereich (High) | 0 | - |
| 0x223CAF | DOBD - UCX - Lade-Elektronik: Hochvolt DC Spannungssensor, Kalibrierung, Checksumme falsch | 0 | - |
| 0x223CB0 | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x223CB1 | DOBD - UCX - Lade-Elektronik: Temperatursensor 1, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x223CB2 | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Kurzschluss nach Masse | 0 | - |
| 0x223CB3 | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Kurzschluss nach Plus | 0 | - |
| 0x223CB4 | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x223CB5 | DOBD - UCX - Lade-Elektronik: Temperatursensor 2, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x223CB6 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Kurzschluss nach Masse | 0 | - |
| 0x223CB7 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Kurzschluss nach Plus | 0 | - |
| 0x223CB8 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x223CB9 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x223CBA | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Wert unplausibel | 0 | - |
| 0x223CBB | DOBD - UCX - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x223CBC | DOBD - UCX - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x223CBD | DOBD - UCX - Ladeelektronik: AC Überstrom | 0 | - |
| 0x223CBE | DOBD - UCX - Ladeelektronik, AC Eingang: Strom unplausibel (Low) | 0 | - |
| 0x223CBF | DOBD - UCX - Ladeelektronik, AC Eingang: Strom unplausibel (High) | 0 | - |
| 0x223CC0 | DOBD - UCX - Charger internal bus off  Module 1 | 0 | - |
| 0x223CC1 | DOBD - UCX - Lade-Elektronik: digitaler Signalprozessor, Fehler der Uhr | 0 | - |
| 0x223CC2 | DOBD - UCX - Lade-Elektronik: digitaler Signalprozessor, Crash-Sensor unplausibel | 0 | - |
| 0x223CC3 | DOBD - UCX - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x223CC4 | DOBD - UCX - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x223CC5 | DOBD - UCX - Ladeelektronik: DC Überstrom | 0 | - |
| 0x223CC6 | DOBD - UCX - Ladeelektronik: HV DC Stromsensor unplausibel und zu niedrig | 0 | - |
| 0x223CC7 | DOBD - UCX - Ladeelektronik: HV DC Stromsensor unplausibel und zu hoch | 0 | - |
| 0x223CC8 | DOBD - UCX - Lade-Elektronik: PFC Spannunssensor, Kurzschluss nach Masse | 0 | - |
| 0x223CC9 | DOBD - UCX - Lade-Elektronik: PFC Spannunssensor, Kurzschluss nach Plus | 0 | - |
| 0x223CCA | DOBD - UCX - Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (unten) bei aktivem Laden | 0 | - |
| 0x223CCB | DOBD - UCX - Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei aktivem Laden | 0 | - |
| 0x223CCC | DOBD - UCX - Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei Vorladen | 0 | - |
| 0x223CCD | DOBD - UCX - Ladeelektronik: HV DC Spannung unplausibel | 0 | - |
| 0x223CCE | DOBD - UCX - Ladeelektronik: Kein HV DC Strom trotz Ladeanforderung | 0 | - |
| 0x223CCF | DOBD - UCX - Lade-Elektronik: Ausgangleistung unplausibel | 0 | - |
| 0x223CD0 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Wert außerhalb Sollbreich (oben) | 0 | - |
| 0x223CD1 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Wert außerhalb Sollbreich (unten) | 0 | - |
| 0x223CD2 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Kurzschluss nach Masse | 0 | - |
| 0x223CD3 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Kurzschluss nach Plus | 0 | - |
| 0x223CD4 | DOBD - UCX - Lade-Elektronik: Temperatursensor 4, Wert unplausibel | 0 | - |
| 0x223CD5 | DOBD - UCX - Lade-Elektronik: Resonanzspule, Strom außerhalb Sollbereich | 0 | - |
| 0x223CD6 | DOBD - UCX - Lade-Elektronik: Resonanzspule, Stromsensor, Kurzschluss nach Masse | 0 | - |
| 0x223CD7 | DOBD - UCX - Lade-Elektronik: Resonanzspule, Stromsensor, Kurzschluss nach Plus | 0 | - |
| 0x223CD8 | DOBD - UCX - Lade-Elektronik: Temperatursensor 3, Start unplausibel | 0 | - |
| 0x801100 | DOBD - IHKA - BDC Drucksensor Kältemittel: Plausibilität | 0 | - |
| 0x801101 | DOBD - IHKA - BDC Drucksensor Kältemittel: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x801102 | DOBD - IHKA - BDC Drucksensor Kältemittel: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x801103 | DOBD - IHKA - BDC Drucksensor Kältemittel: Kurzschluss nach Masse | 0 | - |
| 0x801104 | DOBD - IHKA - BDC Drucksensor Kältemittel: Kurzschluss nach Plus | 0 | - |
| 0x801106 | DOBD - IHKA - OBD: Motorraum Heizkreislaufumschaltventil - klemmt | 0 | - |
| 0x801160 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 | - |
| 0x801161 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Plus | 0 | - |
| 0x801162 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Leitungsunterbrechung | 0 | - |
| 0x801163 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801164 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801165 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Plausibilitätsfehler | 0 | - |
| 0x801166 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 | - |
| 0x801167 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Plus | 0 | - |
| 0x801168 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Leitungsunterbrechung | 0 | - |
| 0x801169 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x80116A | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x80116B | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Plausibilitätsfehler | 0 | - |
| 0x80116C | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Minus / Leitungsunterbrechung | 0 | - |
| 0x80116D | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Plus | 0 | - |
| 0x80116E | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Leitungsunterbrechung | 0 | - |
| 0x80116F | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801170 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x801171 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Plausibilitätsfehler | 0 | - |
| 0x8011AF | DOBD - IHKA - Verdampfertemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x8011B0 | DOBD - IHKA - Verdampfertemperatursensor: Kurzschluss nach Minus | 0 | - |
| 0x80120B | DOBD - IHKA-VA02 - IHKA: 12V Spannungssensor Kurzschluss nach Masse oder Leitungsunterbrechung. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x80120D | DOBD - IHKA - Unterspannung erkannt | 1 | - |
| 0x80120E | DOBD - IHKA - Überspannung erkannt | 1 | - |
| 0x80120F | DOBD - IHKA - Keine Kommunikation über AC-LIN möglich | 0 | - |
| 0x801210 | DOBD - IHKA-VA02 - IHKA: 12V Spannungssensor Plausibilität. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x801211 | DOBD - IHKA - Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Unterdruck | 0 | - |
| 0x801212 | DOBD - IHKA - Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Überdruck | 0 | - |
| 0x801215 | DOBD - IHKA - eKMV: Leistungsminderung oder Abschaltung während HV-Batteriekühlung aufgrund eKMV interner Betriebstrategie. | 0 | - |
| 0x8012C0 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Kurzschluss nach Minus | 0 | - |
| 0x8012C1 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Kurzschluss nach Plus | 0 | - |
| 0x8012C3 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - oberhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x8012C4 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - unterhalb des spezifizierten Betriebsbereich | 0 | - |
| 0x8012C5 | DOBD - IHKA - eKMV: HV-Spannungssensor 2 - Plausibilitätsfehler | 0 | - |
| 0x8012C6 | DOBD - IHKA - eKMV Visteon Temperatursensor Platine 1 - Plausibilitätsfehler | 0 | - |
| 0x8012F1 | DOBD - IHKA - OBD: Kältekreislauf - HV-Batterie - Kühlleistung unplausibel | 0 | - |
| 0x801372 | DOBD - IHKA - eDH: OBD Speicherfehler RAM | 0 | - |
| 0x801373 | DOBD - IHKA - eDH: OBD Speicherfehler EEPROM | 0 | - |
| 0x801374 | DOBD - IHKA - eDH: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x801375 | DOBD - IHKA - eDH: OBD Softwarefehler Watchdog | 0 | - |
| 0x801376 | DOBD - IHKA - eDH: OBD Fehler in der Micro-Controller-Peripherie | 0 | - |
| 0x801382 | DOBD - IHKA - EDH: OBD HV-Spannungssensor über Betriebsbereich | 0 | - |
| 0x801383 | DOBD - IHKA - EDH: OBD HV-Spannungssensor unter Betriebsbereich | 0 | - |
| 0x801385 | DOBD - IHKA - EDH: OBD Temperaturfühler Platine über Betriebsbereich | 0 | - |
| 0x801386 | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel über Betriebsbereich | 0 | - |
| 0x801388 | DOBD - IHKA - EDH: OBD Temperaturfühler Platine Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x801389 | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Masse | 0 | - |
| 0x80138A | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Batterie / Leitung unterbrochen | 0 | - |
| 0x80138C | DOBD - IHKA - EDH: OBD Temperaturfühler Platine unter Betriebsbereich | 0 | - |
| 0x80138D | DOBD - IHKA - EDH: OBD Temperaturfühler Kühlmittel unter Betriebsbereich | 0 | - |
| 0x801390 | DOBD - IHKA - EDH: OBD Temperaturfühler Platine Kurzschluss zu Batterie | 0 | - |
| 0x801391 | DOBD - IHKA - eDH: OBD HV Spannungssensor Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x801392 | DOBD - IHKA - eDH: OBD HV Spannungssensor Kurzschluss zu Batterie | 0 | - |
| 0x801393 | DOBD - IHKA - eDH: OBD HV Spannungssensor offen | 0 | - |
| 0x801394 | DOBD - IHKA - eDH: OBD Stromsensor 2 Plausibilisierung | 0 | - |
| 0x801395 | DOBD - IHKA - eDH: OBD Stromsensor 2 offen | 0 | - |
| 0x801396 | DOBD - IHKA - eDH: OBD HV Spannungssensor Plausibilisierung | 0 | - |
| 0x801397 | DOBD - IHKA - eDH: OBD Stromsensor 1  Plausibilisierung | 0 | - |
| 0x801398 | DOBD - IHKA - eDH: OBD Stromsensor 1 offen | 0 | - |
| 0x801399 | DOBD - IHKA - eDH: OBD Stromsensor 1 unter Betriebsbereich | 0 | - |
| 0x80139A | DOBD - IHKA - eDH: OBD Stromsensor 1 über Betriebsbereich | 0 | - |
| 0x80139B | DOBD - IHKA - eDH: OBD Stromsensor 1  Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x80139C | DOBD - IHKA - eDH: OBD Stromsensor 1 Kurzschluss zu Batterie | 0 | - |
| 0x80139D | DOBD - IHKA - eDH: OBD Temperaturfühler Platine Plausibilisierung | 0 | - |
| 0x80139E | DOBD - IHKA - eDH: OBD Temperaturfühler Platine offen | 0 | - |
| 0x80139F | DOBD - IHKA - eDH: OBD Stromsensor 2 unter Betriebsbereich | 0 | - |
| 0x8013A0 | DOBD - IHKA - eDH: OBD Stromsensor 2 über Betriebsbereich | 0 | - |
| 0x8013A1 | DOBD - IHKA - eDH: OBD Stromsensor 2 Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x8013A3 | DOBD - IHKA - Funktionsfehler elektrischer Durchlauferhitzer | 0 | - |
| 0x8013A4 | DOBD - IHKA - eDH: OBD Stromsensor 2 Kurzschluss zu Batterie | 0 | - |
| 0x8013A5 | DOBD - IHKA - eDH: OBD Stromsensor 3 Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x8013A6 | DOBD - IHKA - eDH: OBD Stromsensor 3 Kurzschluss zu Batterie | 0 | - |
| 0x8013A7 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel offen | 0 | - |
| 0x8013A8 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel Plausibilisierung | 0 | - |
| 0x8013A9 | DOBD - IHKA - eDH: OBD Speicherfehler ROM | 0 | - |
| 0x8013AA | DOBD - IHKA - eDH: OBD Stromsensor 3 offen | 0 | - |
| 0x8013AB | DOBD - IHKA - eDH: OBD Stromsensor 3 über Betriebsbereich | 0 | - |
| 0x8013AC | DOBD - IHKA - eDH: OBD Stromsensor 3 unter Betriebsbereich | 0 | - |
| 0x8013AD | DOBD - IHKA - eDH: OBD Stromsensor 3 Plausibilisierung | 0 | - |
| 0x8013AE | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Masse / Leitung unterbrochen | 0 | - |
| 0x8013AF | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Batterie | 0 | - |
| 0x8013B0 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - offen | 0 | - |
| 0x8013B1 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - über Betriebsbereich | 0 | - |
| 0x8013B2 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - unter Betriebsbereich | 0 | - |
| 0x8013B3 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Plausibilität | 0 | - |
| 0x8013B4 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Masse / Leitung unterbrochen | 0 | - |
| 0x8013B5 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Batterie | 0 | - |
| 0x8013B6 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - offen | 0 | - |
| 0x8013B7 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - unter Betriebsbereich | 0 | - |
| 0x8013B8 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - über Betriebsbereich | 0 | - |
| 0x8013B9 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Plausibilität | 0 | - |
| 0x8013BA | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Masse / Leitung unterbrochen | 0 | - |
| 0x8013BB | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Batterie | 0 | - |
| 0x8013BC | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - offen | 0 | - |
| 0x8013BD | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - unter Betriebsbereich | 0 | - |
| 0x8013BE | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - über Betriebsbereich | 0 | - |
| 0x8013BF | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Plausibilität | 0 | - |
| 0x8013C0 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Masse | 0 | - |
| 0x8013C1 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Batterie | 0 | - |
| 0x8013C3 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013C4 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013C5 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Plausibilität | 0 | - |
| 0x8013C6 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Masse | 0 | - |
| 0x8013C7 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Batterie | 0 | - |
| 0x8013C9 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013CA | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 2 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013CC | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013CD | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Kurzschluss zu Batterie | 0 | - |
| 0x8013CF | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D0 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D1 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Plausibilität | 0 | - |
| 0x8013D2 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Kurzschluss nach Masse / Leitungsunterbrechung | 0 | - |
| 0x8013D3 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Kurzschluss nach Batterie | 0 | - |
| 0x8013D5 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D6 | DOBD - IHKA - eKMV: OBD Spannung am Motortreiber Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013D8 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013D9 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Batterie | 0 | - |
| 0x8013DB | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013DC | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013DD | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Plausibilität | 0 | - |
| 0x8013DE | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013DF | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Batterie | 0 | - |
| 0x8013E1 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E2 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E3 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Plausibilität | 0 | - |
| 0x8013E4 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Masse / Leitungsunterbrechung | 0 | - |
| 0x8013E5 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Batterie | 0 | - |
| 0x8013E7 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E8 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013E9 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 3 Plausibilität | 0 | - |
| 0x8013EA | DOBD - IHKA - eKMV: OBD Speicherfehler RAM | 0 | - |
| 0x8013EB | DOBD - IHKA - eKMV: OBD Speicherfehler ROM | 0 | - |
| 0x8013EC | DOBD - IHKA - eKMV: OBD Speicherfehler EEPROM | 0 | - |
| 0x8013ED | DOBD - IHKA - eKMV: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x8013EE | DOBD - IHKA - eKMV: OBD Softwarefehler Watchdog | 0 | - |
| 0x8013EF | DOBD - IHKA - eKMV: OBD Fehler Micro-Controller-Peripherie | 0 | - |
| 0x8013F6 | DOBD - IHKA - Funktionsprüfung eKMV (OBD) | 0 | - |
| 0x8013F7 | DOBD - IHKA - Verdampfertemperatursensor: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8013F8 | DOBD - IHKA - Verdampfertemperatursensor: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8013F9 | DOBD - IHKA - Verdampfertemperatursensor: Plausibilität | 0 | - |
| 0x8013FA | DOBD - IHKA - Micro-Controller Peripherie Fehler (IHKA) | 0 | - |
| 0x8013FB | DOBD - IHKA - RAM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FC | DOBD - IHKA - ROM/Flash Speicher Fehler (IHKA) | 0 | - |
| 0x8013FD | DOBD - IHKA - EEPROM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FE | DOBD - IHKA - Software Laufzeitfehler (IHKA) | 0 | - |
| 0x8013FF | DOBD - IHKA - Software Watchdogfehler (IHKA) | 0 | - |
| 0x805503 | DOBD - LIM-01 - Ladeanschluss: Verriegelung des Ladesteckers, Leitungsunterbrechung | 0 | - |
| 0x805504 | DOBD - LIM-01 - Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Masse | 0 | - |
| 0x805505 | DOBD - LIM-01 - Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Plus | 0 | - |
| 0x805506 | DOBD - LIM-01 - Signalleitung Ladebereitschaft, Leitungsunterbrechung | 0 | - |
| 0x805507 | DOBD - LIM-01 - Signalleitung Ladebereitschaft, Kurzschluss nach Masse | 0 | - |
| 0x805508 | DOBD - LIM-01 - Signalleitung Ladebereitschaft, Kurzschluss nach Plus | 0 | - |
| 0x805514 | DOBD - LIM-01 - AC-Laden, Ladeanschluss an Steuergerät nicht angeschlossen | 0 | - |
| 0x80551D | DOBD - LIM-01 - DC-Laden, Relaisbox: Ansteuerung Schaltschütz Minuspol, Leitungsunterbechung | 0 | - |
| 0x80551E | DOBD - LIM-01 - DC-Laden, Relaisbox: Ansteuerung Schaltschütz Minuspol, Kurzschluss nach Masse | 0 | - |
| 0x80551F | DOBD - LIM-01 - DC-Laden, Relaisbox: Ansteuerung Schaltschütz Minuspol, Kurzschluss nach Plus | 0 | - |
| 0x805520 | DOBD - LIM-01 - DC-Laden, Relaisbox: Ansteuerung Schaltschütz Pluspol, Leitungsunterbechung | 0 | - |
| 0x805521 | DOBD - LIM-01 - DC-Laden, Relaisbox: Ansteuerung Schaltschütz Pluspol, Kurzschluss nach Masse | 0 | - |
| 0x805522 | DOBD - LIM-01 - DC-Laden, Relaisbox: Ansteuerung Schaltschütz Pluspol, Kurzschluss nach Plus | 0 | - |
| 0x805523 | DOBD - LIM-01 - DC-Laden, Relaisbox: Minuspol, Schaltschütz klebt | 0 | - |
| 0x805524 | DOBD - LIM-01 - DC-Laden, Relaisbox: Pluspol, Schaltschütz klebt | 0 | - |
| 0x805525 | DOBD - LIM-01 - DC-Laden, Relaisbox: Spannungsmessung, Kurzschluss nach Masse oder Leitungsunterbrechung | 0 | - |
| 0x805526 | DOBD - LIM-01 - DC-Laden, Relaisbox: Spannungsmessung, Kurzschluss nach Plus | 0 | - |
| 0x805527 | DOBD - LIM-01 - DC-Laden, Relaisbox: Spannungsmessung unplausibel | 0 | - |
| 0x805530 | DOBD - LIM-01 - LIM: Steuergeräte interner Fehler | 0 | - |
| 0x805531 | DOBD - LIM-01 - AC-Laden: PWM-Signal, Kurzschluss nach Plus | 0 | - |
| 0x805536 | DOBD - LIM-01 - Ladeanschluss: Sensor der Ladesteckerverriegelung, Kurzschluss nach Masse | 0 | - |
| 0x805537 | DOBD - LIM-01 - Ladeanschluss: Sensor der Ladesteckerverriegelung, Kurzschluss nach Plus | 0 | - |
| 0x805538 | DOBD - LIM-01 - DC-Laden: Ladespannung unplausibel | 0 | - |
| 0x805539 | DOBD - LIM-01 - DC-Laden: Keine Ladespannung obwohl Ansteuerung zum Schliessen der Schaltschütze aktiv | 0 | - |
| 0x80553A | DOBD - LIM-01 - AC-Laden: PWM-Signal unplausibel | 0 | - |
| 0x80553B | DOBD - LIM-01 - Ladeanschluss: Sensor der Ladesteckerverriegelung, Leitungsunterbrechung | 0 | - |
| 0x80553C | DOBD - LIM-01 - AC-Laden: Ladesteckererkennung, Kurzschluss nach Plus | 0 | - |
| 0xC90401 | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0xC90402 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0xCAC486 | DOBD - SME - A-CAN: Steuerungsmodul BUS OFF | 0 | - |
| 0xCAD401 | DOBD - SME - Botschaft Außentemperatur, 0x2CA) fehlt | 0 | - |
| 0xCAD409 | DOBD - SME - Botschaft (Freigabe Kühlung Hochvolt-Batterie, 0x37B) fehlt | 0 | - |
| 0xCAD40C | DOBD - SME - Botschaft (Klemmen, 0x12F) fehlt | 0 | - |
| 0xCAD415 | DOBD - SME - Botschaft (Trennschalter HVS, 0x10B) fehlt | 0 | - |
| 0xCAD416 | DOBD - SME - Schnittstelle AE (Vorgabe Trennschalter Hochvoltspeicher, 0x10B): Signal ungültig | 0 | - |
| 0xCB8486 | DOBD - REME - A-CAN Control Module Bus OFF | 0 | - |
| 0xCB9400 | DOBD - REME - A-CAN, Botschaft (Vorgabe Begrenzung E-Motor 1, 0x2E2): fehlt | 0 | - |
| 0xCB940A | DOBD - REME - A-CAN, Botschaft (Vorgabe Betriebsbereich Range Extender, 0x0AA): fehlt | 0 | - |
| 0xCB9415 | DOBD - REME - A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 0 | - |
| 0xCB9465 | DOBD - REME - A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA): fehlt | 0 | - |
| 0xCB9490 | DOBD - REME - A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): fehlt | 0 | - |
| 0xCB949E | DOBD - REME - A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): Alive Fehler | 0 | - |
| 0xCB949F | DOBD - REME - A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): Prüfsumme falsch | 0 | - |
| 0xCE1404 | DOBD - LIM-01 - Botschaft (Status Hochvolt-Batterieeinheit 2, 0x112) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xCE1405 | DOBD - LIM-01 - Botschaft (Klemmen, 0x12F) fehlt, Empfänger LIM, Sender BDC | 1 | - |
| 0xCE1407 | DOBD - LIM-01 - Botschaft (Ladestatus 3, 0x2F1) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE1408 | DOBD - LIM-01 - Botschaft (Begrenzung Ladung Entladung Hochvolt-Batterie, 0x2F5) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xCE1409 | DOBD - LIM-01 - Botschaft (Zentralverriegelung und Klappenzustand, 0x2FC) fehlt, Empfänger LIM, Sender BDC | 1 | - |
| 0xCE140C | DOBD - LIM-01 - Botschaft (Ladestatus 2, 0x2FA) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE1410 | DOBD - LIM-01 - Botschaft (Ladestatus, 0x3E9) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE1413 | DOBD - LIM-01 - Botschaft (Hochvolt-Batterie, 0x431) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xCE4486 | DOBD - UCX - A-CAN Control Module Bus OFF | 0 | - |
| 0xCE5400 | DOBD - UCX - Botschaft (Vorgabe Komfort Ladeelektronik, 0x153) fehlt, Empfänger UCX, Sender AE | 0 | - |
| 0xCE5402 | DOBD - UCX - Botschaft (Status Hochvoltspeicher 2, 0x112) fehlt | 0 | - |
| 0xCE5404 | DOBD - UCX - Botschaft (Steuerung Teilnetze, 0x19E) fehlt, Empfänger UCX, Sender eDME | 0 | - |
| 0xCE5406 | DOBD - UCX - Botschaft (Daten Hochvoltspeicher, 0x431) fehlt, Empfänger UCX, Sender SME | 0 | - |
| 0xCE5410 | DOBD - UCX - Signal (TAR_OPMO_CF_CHGE) ungültig, Sender AE | 0 | - |
| 0xCE5411 | DOBD - UCX - Botschaft (TAR_OPMO_CF_CHGE) undefiniert | 0 | - |
| 0xCE5412 | DOBD - UCX - Botschaft (SPEC_I_MAX_DC_CF_CHGE) ungültig | 0 | - |
| 0xCE5414 | DOBD - UCX - Botschaft (TAR_PWR_CF_CHGNG) ungültig | 0 | - |
| 0xCE5416 | DOBD - UCX - Signal (ST_SER_DSCO_PLG) ungültig, Sender SME | 0 | - |
| 0xCE5417 | DOBD - UCX - Botschaft (ST_SER_DSCO_PLG) undeifniert | 0 | - |
| 0xCE5418 | DOBD - UCX - Signal (CTR_FKTN_PRTNT_DRV) ungültig, Sender eDME | 0 | - |
| 0xCE5419 | DOBD - UCX - Botschaft (CTR_FKTN_PRTNT_DRV) undefiniert | 0 | - |
| 0xCE541A | DOBD - UCX - Botschaft (AVL_U_LINK) ungültig | 0 | - |
| 0xCE541B | DOBD - UCX - Botschaft (AVL_U_LINK) undefiniert | 0 | - |
| 0xCE541C | DOBD - UCX - Botschaft (SPEC_I_MAX_ALTC_CF_CHGE) ungültig | 0 | - |
| 0xCE541D | DOBD - UCX - Botschaft (SPEC_U_MAX_CHG_CHGE) ungültig | 0 | - |
| 0xE7041E | DOBD - IHKA - IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE70C30 | DOBD - IHKA - AC-LIN: eKMV antwortet nicht | 0 | - |
| 0xE70C3A | DOBD - IHKA - AC-LIN: EDH antwortet nicht | 0 | - |
| 0xE71406 | DOBD - IHKA - Botschaft (DT_PT_2 , 0x3F9, FA): Timeout | 1 | - |
| 0xE71414 | DOBD - IHKA - Botschaft (A_TEMP, 0x2CA, FA): Timeout | 1 | - |
| 0xE7141E | DOBD - IHKA - Botschaft (KLEMMEN, 0x12F, FA): Timeout | 1 | - |
| 0xE71438 | DOBD - IHKA - Botschaft (STAT_DRUCK_KAELTE, 0x2D2, FA): Timeout | 1 | - |
| 0xE7143C | DOBD - IHKA - Botschaft (ST_HVSTO_1, 0x1FA, FA): Timeout | 1 | - |
| 0xE7144C | DOBD - IHKA - Botschaft (ST_VA_HVBTC, 0x389, FA): Timeout | 1 | - |
| 0xE71452 | DOBD - IHKA - Botschaft (CTR_ACCM, 0x38C, FA): Timeout | 1 | - |
| 0xE71458 | DOBD - IHKA - Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): Timeout | 1 | - |
| 0xE71475 | DOBD - IHKA - Botschaft (DIAG_OBD_ENG, 0x397, FA): Timeout | 1 | - |
| 0xE71476 | DOBD - IHKA - Botschaft (DIAG_OBD_ENGMG_EL, 0x3E8, FA): Timeout | 1 | - |
| 0xE71477 | DOBD - IHKA - Botschaft (SVC[EME], 0x5BA, FA): Timeout | 1 | - |
| 0xE71478 | DOBD - IHKA - Botschaft (RELATIVZEIT, 0x328, FA): Timeout | 1 | - |
| 0xE71479 | DOBD - IHKA - Botschaft (STAT_HVSTO_2, 0x112, FA): Timeout | 1 | - |
| 0xE7147B | DOBD - IHKA-VA02 - Botschaft (MOD_VC, 0x432, FA): Timeout | 1 | - |
| 0xE7147C | DOBD - IHKA-VA02 - Botschaft (ST_EL_GEY, 0x3E5, FA): Timeout | 1 | - |
| 0xE7147D | DOBD - IHKA-VA02 - Botschaft (V_VEH, 0x1A1, FA): Timeout | 1 | - |
| 0xE7147E | DOBD - IHKA-VA02 - Botschaft (STAT_Ventil_Klima, 0x2D6, ZSG): Timeout | 1 | - |
| 0xE7147F | DOBD - IHKA-VA02 - Botschaft (ST_eDH_LIN, 0x11, AC-LIN4): Timeout | 1 | - |
| 0xE71480 | DOBD - IHKA-VA02 - Botschaft (ST_EKMV20_LIN, 0x1F, AC-LIN4): Timeout | 1 | - |
| 0xE71481 | DOBD - IHKA-VA02 - Botschaft (ST_DIAG_SYS_E2_LIN, 0x15, AC-LIN4): Timeout | 1 | - |
| 0xE71482 | DOBD - IHKA-VA02 - Botschaft (ST_DIAG_SYS_eDH_LIN, 0xD, AC-LIN4): Timeout | 1 | - |
| 0xE89400 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | HKLUSV_Klemmt | 0-n | High | 0x01 | HKLUSV_KLEMMT_IN | - | - | - |
| 0x0002 | HKLUSV_DIAG_PATH | 0-n | High | 0x0E | HKLUSV_DIAG_PATH_N | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x170C | UBAT | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2001 | ChargeReadiness | 0-n | Low | 0xFF | ST_CHGRDY_VALUE | - | - | - |
| 0x2002 | ChargeStatus | 0-n | Low | 0xFF | ST_CHGNHG_VALUES | - | - | - |
| 0x4002 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4011 | UWB_U_AC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | UWB_I_AC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | UWB_U_DC_SLE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | UWB_I_DC_SLE | mA | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | UWB_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4016 | UWB_LLC_TRAFO_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4017 | UWB_SLE_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4018 | UWB_BTS_STATUS_PIC | HEX | High | unsigned int | - | - | - | - |
| 0x4019 | UWB_P_SOLL_HVPM_LADEN | W | High | unsigned int | - | 30.0 | 1.0 | 0.0 |
| 0x401A | UWB_I_MAX_ALTC_SLE | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x401B | UWB_I_MAX_DC_SLE | A | High | unsigned char | - | 0.8 | 1.0 | 0.0 |
| 0x401C | UWB_CHA_ENB | 0/1 | High | 0x01 | - | - | - | - |
| 0x401D | UWB_CTRL_STATUS_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401E | UWB_RUNLEVEL_SLE | HEX | High | unsigned int | - | - | - | - |
| 0x401F | UWB_CHA_DUR_SLE | s | High | unsigned char | - | 150.0 | 1.0 | 0.0 |
| 0x4020 | UWB_HVPM_CHGCOND_HVSTO | % | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4021 | UWB_HVPM_AVL_U_HV_LINK_MOT_TRCT | V | High | unsigned int | - | 0.2 | 1.0 | 0.0 |
| 0x4022 | UWB_HVPM_ST_CHGRDI | 0-n | High | 0xFF | TAB_HVPM_ST_CHGRDI | - | - | - |
| 0x4023 | UWB_HVPM_ST_CHGNG | 0-n | High | 0xFF | TAB_HVPM_ST_CHGNG | - | - | - |
| 0x4024 | UWB_HVPM_ST_DCSW_DC_CHGNG | HEX | High | unsigned char | - | - | - | - |
| 0x4025 | UWB_HVPM_ST_CTR_DC_CHGNG | HEX | High | unsigned char | - | - | - | - |
| 0x4026 | UWB_HVPM_U_DC_CHGNG_IN | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4027 | UWB_HVPM_CTR_PRTL_NO_CHGNG_UNIT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | UWB_HVPM_VEH_MAX_U_LIM | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4029 | UWB_HVPM_AVLB_OUT_U | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x402A | UWB_HVPM_CHGNG_DC_LOKG_CHGP | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_LOKG_CHGP | - | - | - |
| 0x402B | UWB_HVPM_CHGNG_DC_ST | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_ST | - | - | - |
| 0x402C | UWB_HVPM_CHGNG_DC_MAL | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_MAL | - | - | - |
| 0x402D | UWB_HVPM_CHGNG_DC_STOP_CTR | 0-n | High | 0xFF | TAB_HVPM_CHGNG_DC_STOP_CTR | - | - | - |
| 0x402E | UWS_HVPM_PRES_I_CHGNG_UNIT | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x402F | UWB_HVPM_RSTI_CHGNG | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4030 | UWB_HVPM_TAR_I_DC_CHGNG | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4031 | UWB_HVPM_AVL_I_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4032 | UWB_HWPM_AVL_I_EKK | A | High | unsigned char | - | 0.2 | 1.0 | 0.0 |
| 0x4033 | UWB_HVPM_PRES_U_CHGNG_UNIT | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4034 | UWB_HVPM_AVL_U_HVSTO | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4035 | UWB_HVPM_I_DYN_MAX_CHG_HVSTO | A | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x4036 | UWB_HVPM_CTR_MEASMT_ISL | 0-n | High | 0xFF | TAB_HVPM_CTR_MEASMT_ISL | - | - | - |
| 0x4037 | UWB_HVPM_CHGNG_TYP_IMME | 0-n | High | 0xFF | TAB_HVPM_CHGNG_TYP_IMME | - | - | - |
| 0x4038 | UWB_HVPM_STATUS_HV_STARTFEHLER | HEX | High | signed long | - | - | - | - |
| 0x4039 | UWB_HVPM_STATUS_HVSTART_KOMM | HEX | High | unsigned char | - | - | - | - |
| 0x403A | UWB_HVPM_STATUS_I0ANF_HVB | HEX | High | unsigned char | - | - | - | - |
| 0x403B | UWB_HVPM_STATUS_ANF_ENTL_ZK | 0/1 | High | 0x01 | - | - | - | - |
| 0x403C | UWB_HVPM_STATUS_HYBRIDSYSTEM | HEX | High | unsigned char | - | - | - | - |
| 0x403D | UWB_HVPM_U_DC_HV_LE_IST | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x403E | UWB_HVPM_SOC_HVB_IST | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x403F | UWB_HVPM_I_BATT_SME | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4040 | UWB_HVPM_ST_CRASH_MOD | HEX | High | unsigned char | - | - | - | - |
| 0x4041 | UWB_HVPM_B_KL30C | 0/1 | High | 0x01 | - | - | - | - |
| 0x4042 | UWB_HVPM_ST_CRASH_SERVERTY | HEX | High | unsigned char | - | - | - | - |
| 0x4043 | UWB_HVPM_U_DCDC1_LV | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4044 | UWB_HVPM_I_DCDC1_LV | A | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4045 | UWB_HVPM_IBATT_BN | A | High | unsigned char | - | 4.0 | 1.0 | -128.0 |
| 0x4046 | UWB_HVPM_UBATT_BN | V | High | unsigned char | - | 0.25 | 1.0 | 0.0 |
| 0x4047 | UWB_HVPM_F_DCDC1_gen | % | High | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x4048 | UWB_OBD_CALC_LOAD_VAL | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x4049 | UWB_OBD_VEH_SPEED | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x404A | UWB_OBD_ENG_COOL_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x404B | UWB_OBD_THROT_POS | % | High | unsigned char | - | 100.0 | 254.0 | 0.0 |
| 0x404C | UWB_OBD_CHG_COND_HVSTO | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x404D | UWB_EWP_DUTYCYCLE | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x404E | UWB_EWP_DIAGSTATUS | HEX | High | unsigned char | - | - | - | - |
| 0x404F | UWB_EWP_AE_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4050 | UWB_EWP_TEMP_ENTRY | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4051 | UWB_EWP_TEMP_EXIT | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4052 | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4053 | UWB_ELUP_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | UWB_ELUP_UNTERDRUCK | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x4055 | UWB_BA_SOLL_HVPM_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x4056 | UWB_REASON_FAILSAFE | HEX | High | unsigned int | - | - | - | - |
| 0x4057 | UWB_HVPM_ST_LADE_MGR_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x4058 | UWB_HVPM_ST_LADE_TRANS_DEBUG | HEX | High | unsigned long | - | - | - | - |
| 0x4059 | UWB_ST_BACKUP_ERROR_ENDE | HEX | High | unsigned int | - | - | - | - |
| 0x405A | UWB_ST_BACKUP_EV | HEX | High | unsigned int | - | - | - | - |
| 0x405B | UWB_HVPM_IST_BETRIEBSART_SLE | 0-n | High | 0xFF | TAB_IST_BETRIEBSART_SLE | - | - | - |
| 0x405C | UWB_OBD_MOTORDREHZAHL | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x405E | UWB_RSTINFO_EXCADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x405F | UWB_RSTINFO_FUSIFLAGS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4060 | UWB_RSTINFO_DSADDR_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4061 | UWB_RSTINFO_CAUSE_MC0 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x4062 | UWB_RSTINFO_EXCCLASS_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4063 | UWB_RSTINFO_EXCTIN_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4064 | UWB_RSTINFO_WDERRCTR_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4065 | UWB_RSTINFO_EXTWDINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4066 | UWB_RSTINFO_EXTWDTREASON_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4067 | UWB_RSTINFO_OWNVSMSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4068 | UWB_RSTINFO_SWSOURCE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4069 | UWB_RSTINFO_SWINFO_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x406A | UWB_RSTINFO_EXCADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406B | UWB_RSTINFO_FUSIFLAGS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406C | UWB_RSTINFO_DSADDR_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x406D | UWB_RSTINFO_CAUSE_MC2 | 0-n | High | 0xFF | TAB_RSTINFO_CAUSE | - | - | - |
| 0x406E | UWB_RSTINFO_EXCCLASS_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x406F | UWB_RSTINFO_EXCTIN_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4070 | UWB_RSTINFO_WDERRCTR_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4071 | UWB_RSTINFO_EXTWDINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4072 | UWB_RSTINFO_EXTWDTREASON_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4073 | UWB_RSTINFO_OWNVSMSTATE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4074 | UWB_RSTINFO_SWSOURCE_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4075 | UWB_RSTINFO_SWINFO_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4076 | UWB_BUDS_VERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4077 | UWB_EME_CPU_TIME_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4078 | UWB_EME_CPU_TIME_1 | HEX | High | unsigned long | - | - | - | - |
| 0x407B | UWB_CPLD_SS_ENTRY_0 | HEX | High | unsigned int | - | - | - | - |
| 0x407C | UWB_CPLD_SS_ENTRY_1 | HEX | High | unsigned int | - | - | - | - |
| 0x407F | UWB_RSTINFO_INTWDTREASON | HEX | High | unsigned char | - | - | - | - |
| 0x4081 | UWB_T_DIE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4085 | UWB_V_U_ZK | HEX | High | unsigned long | - | - | - | - |
| 0x4086 | UWB_EME_CPU_TIME_0_REC | HEX | High | unsigned long | - | - | - | - |
| 0x4087 | UWB_EME_CPU_TIME_1_REC | HEX | High | unsigned long | - | - | - | - |
| 0x408A | UWB_CPLD_SS_ENTRY_0_REC | HEX | High | unsigned int | - | - | - | - |
| 0x408B | UWB_CPLD_SS_ENTRY_1_REC | HEX | High | unsigned int | - | - | - | - |
| 0x4090 | UWB_DCDC_I_LAST | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4091 | UWB_DCDC_I_TRAFIL | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4092 | UWB_DCDC_I_TRA | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4093 | UWB_DCDC_I_TIEFSETZER_PH1 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4094 | UWB_DCDC_I_TIEFSETZER_PH2 | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4095 | UWB_DCDC_I_BATTERY | A | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x4096 | UWB_DCDC_T_BOARD | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4097 | UWB_DCDC_T_GLEICHRICHTER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4098 | UWB_DCDC_T_GEGENTAKTWANDLER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x4099 | UWB_DCDC_T_TIEFSETZER | °C | High | unsigned char | - | 1.0 | 1.0 | -45.0 |
| 0x409A | UWB_DCDC_U_HV_BATTERY | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x409B | UWB_DCDC_U_LV_AUSGANG | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x409C | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH1 | HEX | High | unsigned int | - | - | - | - |
| 0x409D | UWB_DCDC_DUTY_RATIO_TIEFSETZER_PH2 | HEX | High | unsigned int | - | - | - | - |
| 0x409E | UWB_DCDC_SPI_ERROR_STATUS_MC0 | HEX | High | unsigned int | - | - | - | - |
| 0x409F | UWB_DCDC_SPI_ERROR_STATUS_MC6 | HEX | High | unsigned int | - | - | - | - |
| 0x40A0 | UWB_DCDC_U_GNDDIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x40A1 | UWB_DCDC_BA_SOLL | 0-n | High | 0xFF | TAB_DCDC_BA_SOLL | - | - | - |
| 0x40A2 | UWB_DCDC_U_LV_SOLL | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x40A3 | UWB_DCDC_I_LV_SOLL | A | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x40A4 | UWB_DCDC_P_HV_MX | W | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40A5 | UWB_DCDC_BA_IST | 0-n | High | 0xFF | TAB_DCDC_BA_IST | - | - | - |
| 0x40A6 | UWB_DCDC_I_HV | A | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x40A7 | UWB_DCDC_BAUTIELSCHUTZ_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40A8 | UWB_DCDC_CONTROL_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40A9 | UWB_DCDC_ZKET_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x40AA | UWB_DCDC_SPT_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x40AB | UWB_DCDC_U_GATETRIEBE | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x40AC | UWB_DCDC_I_LIMITIERUNG_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40AD | UWB_DCDC_ERROR_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x40FC | UWB_PS_SEN1_STAT | 0/1 | High | 0x01 | - | - | - | - |
| 0x40FD | UWB_PS_SEN2_STAT | 0/1 | High | 0x01 | - | - | - | - |
| 0x40FE | UWB_PS_FUSI_ERRCODE | HEX | High | unsigned int | - | - | - | - |
| 0x40FF | UWB_PS_HBRIDGE_VOLTAGE | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4100 | UWB_AE_EM_DREHZAL | 1/min | High | unsigned int | - | 0.5 | 1.0 | -12000.0 |
| 0x4101 | UWB_PS_AKTUELLER_BEFEHL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | UWB_PS_STROM_HBRUECKE | mA | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | UWB_PS_POS_SENS1 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | UWB_PS_POS_SENS2 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4105 | UWB_PS_SPG_SENS1 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4106 | UWB_PS_SPG_SENS2 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4107 | UWB_AE_EM_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x4108 | UWB_AE_INV_TEMP_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4109 | UWB_AE_INV_TEMP_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410A | UWB_AE_INV_TEMP_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410B | UWB_AE_EM_MD_SOLL | Nm | High | unsigned int | - | 0.5 | 1.0 | -1023.5 |
| 0x410C | UWB_SPI_RDC_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x410D | UWB_STAT_RESOLVER | HEX | High | unsigned char | - | - | - | - |
| 0x410E | UWB_FUSI_LD_MC0 | HEX | High | signed long | - | - | - | - |
| 0x410F | UWB_FUSI_OVERSPEED | HEX | High | unsigned long | - | - | - | - |
| 0x4110 | UWB_FUSI_LD_Q | HEX | High | unsigned char | - | - | - | - |
| 0x4111 | UWB_VEH_SPEED | km/h | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4112 | UWB_FUSI_LD_MC2 | HEX | High | unsigned int | - | - | - | - |
| 0x4113 | UWB_ECU_SYSSTATE_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4114 | UWB_PS_QUALIFIER | HEX | High | unsigned int | - | - | - | - |
| 0x4115 | UWB_PS_LAST_CMD | 0-n | High | 0xFF | TAB_PS_LAST_CMD | - | - | - |
| 0x4116 | UWB_SME_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4120 | UWB_PRND_QUALIFIER | HEX | High | signed long | - | - | - | - |
| 0x4121 | UWB_PRND_ACT_CMD | 0-n | High | 0xFF | TAB_PRND_ACT_CMD | - | - | - |
| 0x4122 | UWB_PRND_ACT_POS | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4123 | UWB_PRND_DRIVESTATE | HEX | High | unsigned char | - | - | - | - |
| 0x4124 | UWB_PRND_HBRIDGE_DIR | 0-n | High | 0xFF | TAB_PRND_HBRIDGE_DIR | - | - | - |
| 0x4125 | UWB_PRND_HBRIDGE_PWM | % | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4126 | UWB_PRND_FUSI_ERRCODE | HEX | High | unsigned int | - | - | - | - |
| 0x4127 | UWB_PRND_HBRIDGE_DIR_E1 | 0-n | High | 0xFF | TAB_PRND_HBRIDGE_DIR | - | - | - |
| 0x4128 | UWB_AE_PRND_E2SEN1_ANG | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4129 | UWB_AE_PRND_E2SEN2_ANG | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4130 | UWB_FUSI_SSD_STATUS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4131 | UWB_FUSI_CPLD_INFO | HEX | High | unsigned char | - | - | - | - |
| 0x4132 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x4133 | UWB_FUSI_UZK | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4134 | UWB_FUSI_DCRG_STATUS_MC0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4135 | UWB_FUSI_I_INV_DC | mA | High | unsigned int | - | 40.0 | 1.0 | -1000000.0 |
| 0x4136 | UWB_FUSI_BA_EM_SOLL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4137 | UWB_FUSI_T_PWR_UP | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4138 | UWB_FUSI_T_KL15_AN | s | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4139 | UWB_FUSI_SPT_TEST_STEP | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413A | UWB_FUSI_OPMO_CHGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413B | UWB_FUSI_DCRG_STATUS_MC2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413C | UWB_FUSI_OPMO_DCDC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413D | UWB_FUSI_I_DCDC_LV | mA | High | unsigned char | - | 200.0 | 1.0 | 0.0 |
| 0x413E | UWB_FUSI_SME_SUTZ_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x413F | UWB_FUSI_DCDC_CTRL_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4140 | UWB_FUSI_INV_LSS_STATUS | 0/1 | High | 0x01 | - | - | - | - |
| 0x4141 | UWB_FUSI_PFC_ENUM_MC0 | HEX | High | unsigned char | - | - | - | - |
| 0x4142 | UWB_FUSI_PFC_SIGNATURE_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4143 | UWB_FUSI_PFC_MAXDIFF_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4144 | UWB_FUSI_PFC_MAXDIFF_10MS_MC0 | HEX | High | unsigned long | - | - | - | - |
| 0x4145 | UWB_FUSI_PFC_ENUM_MC2 | HEX | High | unsigned char | - | - | - | - |
| 0x4146 | UWB_FUSI_PFC_SIGNATURE_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4147 | UWB_FUSI_PFC_MAXDIFF_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4148 | UWB_FUSI_PFC_MAXDIFF_10MS_MC2 | HEX | High | unsigned long | - | - | - | - |
| 0x4149 | UWB_FUSI_SPT_MIX_STATUS_1 | HEX | High | unsigned long | - | - | - | - |
| 0x414A | UWB_FUSI_SPT_MIX_STATUS_2 | HEX | High | unsigned int | - | - | - | - |
| 0x414B | UWB_FUSI_SPT_MIX_STATUS_3 | HEX | High | unsigned long | - | - | - | - |
| 0x414C | UWB_FUSI_HVSM0_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0x414D | UWB_AKS_HVSM_I2T | HEX | High | unsigned int | - | - | - | - |
| 0x4150 | UWB_ESM_STATE_LAST | HEX | High | unsigned char | - | - | - | - |
| 0x4151 | UWB_OSEK_OS_TASK_STATUS | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x4159 | UWB_STATUS_WORD_PFC_FLOW_ERR_MC0 | HEX | High | unsigned int | - | - | - | - |
| 0x415A | UWB_STATUS_WORD_PFC_FLOW_ERR_MC2 | HEX | High | unsigned int | - | - | - | - |
| 0x4160 | UWB_V_CNT_T1_RTM_TASK_OVERFLOW | HEX | High | unsigned char | - | - | - | - |
| 0x4161 | UWB_V_D_MPM0_WDT_ERROR_CNT_UE2 | HEX | High | unsigned char | - | - | - | - |
| 0x4162 | UWB_FUSI_WHEEL_SPEED_RRH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4163 | UWB_FUSI_WHEEL_SPEED_RLH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4164 | UWB_FUSI_WHEEL_SPEED_FRH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4165 | UWB_FUSI_WHEEL_SPEED_FLH | rad/s | High | unsigned char | - | 1.5686 | 1.0 | -100.0 |
| 0x4166 | UWB_FUSI_MARB_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4167 | UWB_FUSI_MAX_SPEED_BAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0x4168 | UWB_FUSI_MAX_SPEED_FTAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0x4169 | UWB_FUSI_MIN_SPEED_BAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0x416A | UWB_FUSI_MIN_SPEED_FTAX | rad/s | High | unsigned char | - | 1.5686 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RATIO_TEST_PROC_TAB

| WERT | TEXT |
| --- | --- |
| 0 | Daten zum vorgegebenen Ratio Lesen |
| 1 | Vorgegebenen Ratio auf Vorgabewert setzen |
| 254 | RBM Software neu initialisieren |
| 255 | Alle Ratios auf 0 zurücksetzen |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BAM_STATUS_WERT | HEX | high | unsigned char | - | - | - | - | - | Status Betriebsartenmanager |
| STAT_FRM_ISR_WERT | HEX | high | unsigned long | - | - | - | - | - | Protectionmanager: Status der ISR |
| STAT_POM_1MS_WERT | HEX | high | unsigned int | - | - | - | - | - | Protectionmanager: Status der 1ms |
| STAT_POM_10MS_WERT | HEX | high | unsigned int | - | - | - | - | - | Protectionmanager: Status der 10ms |
| STAT_ERR_MOT_TRCT_WERT | HEX | high | unsigned int | - | - | - | - | - | St Error Statuswort der E-Maschine |
| STAT_HVSM_MC0_WERT | HEX | high | unsigned long | - | - | - | - | - | HVSM: Status Mc0 |
| STAT_HVSM_AKKUM_MC0_WERT | HEX | high | unsigned long | - | - | - | - | - | HVSM: Akkum. Status MC0 |
| STAT_HVSM_MC2_WERT | HEX | high | unsigned long | - | - | - | - | - | HVSM: Status Mc2 |
| STAT_HVSM_AKKUM_MC2_WERT | HEX | high | unsigned long | - | - | - | - | - | HVSM: Akkum. Status MC2 |
| STAT_CPLD_INFO_WERT | HEX | high | unsigned char | - | - | - | - | - | CPLD: Info |
| STAT_FUSI_MC2_WERT | HEX | high | unsigned long | - | - | - | - | - | FUSI: UWB MC2 |
| STAT_FUSI_MC0_WERT | HEX | high | unsigned long | - | - | - | - | - | FUSI: UWB MC0 |
| STAT_SSD_MC0_WERT | HEX | high | unsigned long | - | - | - | - | - | SSD: Status |
| STAT_ERR_UPDATE_IN_PROGRESS_WERT | HEX | high | unsigned char | - | - | - | - | - | Laufzeit: Update-In-Progress Fehler |
| STAT_FRM_WHY_WERT | HEX | high | unsigned long | - | - | - | - | - | FRM: Why-Wort Achtung: Wert kann nur m Zusammenhang mit dem zugehörigen Softwarestand interpretiert werden! |
| STAT_FRM_EM2_WERT | HEX | high | unsigned long | - | - | - | - | - | FRM: Statusbits |

### RES_0XADEB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEREICH_DREHMOMENT_0_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | -100 Nm bis -75 Nm |
| STAT_BEREICH_DREHMOMENT_1_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | -75 Nm bis -25 Nm |
| STAT_BEREICH_DREHMOMENT_2_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | -25 Nm bis 0 Nm |
| STAT_BEREICH_DREHMOMENT_3_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 0 Nm bis 25 Nm |
| STAT_BEREICH_DREHMOMENT_4_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 25 Nm bis 75 Nm |
| STAT_BEREICH_DREHMOMENT_5_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 75 Nm bis 100 Nm |
| STAT_BEREICH_DREHMOMENT_6_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 100 Nm bis 150 Nm |
| STAT_BEREICH_DREHMOMENT_7_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 150 Nm bis 175 Nm |
| STAT_BEREICH_DREHMOMENT_8_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 175 Nm bis 200 Nm |
| STAT_BEREICH_DREHMOMENT_9_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 200 Nm bis 220 Nm |
| STAT_BEREICH_DREHMOMENT_10_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 220 Nm bis 240 Nm |
| STAT_BEREICH_DREHMOMENT_11_WERT | + | - | - | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | 240 Nm bis 260 Nm |

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
| STAT_AKS_ANFORDERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADF6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | + | Bit | high | BITFIELD | - | BF_AE_ROTORLAGESENSOR_ERROR | - | - | - | Infos zum Status des Rotorlagesensor Anlernens und zum Fehler |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | ° | high | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | EPS Offset |
| STAT_UDSPANNUNG_WERT | - | - | + | V | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rücklesen der Ud Spannung |
| STAT_UQSPANNUNG_WERT | - | - | + | V | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rücklesen der Uq Spannung |
| STAT_DREHZAHL_WERT | - | - | + | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Rücklesen der Drehzahl |

### RES_0XADF8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMSTAND_START_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Start der Klassierung |
| STAT_KMSTAND_AKUTELL_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der Klassierung (aktuell) |
| STAT_KMGEFAHREN_NGANG_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometer gefahren im N Gang |
| STAT_KLASSIERTAKT_WERT | + | - | - | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Klassiertakt |
| STAT_LW_KLASS_2GG_KL_1_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 1 (Bereich -250Nm  bis  -240Nm) |
| STAT_LW_KLASS_2GG_KL_2_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 2 (Bereich -240Nm  bis  -230Nm) |
| STAT_LW_KLASS_2GG_KL_3_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 3 (Bereich -230Nm  bis  -220Nm) |
| STAT_LW_KLASS_2GG_KL_4_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 4 (Bereich -220Nm  bis  -210Nm) |
| STAT_LW_KLASS_2GG_KL_5_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 5 (Bereich -210Nm  bis  -200Nm) |
| STAT_LW_KLASS_2GG_KL_6_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 6 (Bereich -200Nm  bis  -190Nm) |
| STAT_LW_KLASS_2GG_KL_7_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 7 (Bereich -190Nm  bis  -180Nm) |
| STAT_LW_KLASS_2GG_KL_8_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 8 (Bereich -180Nm  bis  -170Nm) |
| STAT_LW_KLASS_2GG_KL_9_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 9 (Bereich -170Nm  bis  -160Nm) |
| STAT_LW_KLASS_2GG_KL_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 10 (Bereich -160Nm  bis  -150Nm) |
| STAT_LW_KLASS_2GG_KL_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 11 (Bereich -150Nm  bis  -140Nm) |
| STAT_LW_KLASS_2GG_KL_12_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 12 (Bereich -140Nm  bis  -130Nm) |
| STAT_LW_KLASS_2GG_KL_13_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 13 (Bereich -130Nm  bis  -120Nm) |
| STAT_LW_KLASS_2GG_KL_14_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 14 (Bereich -120Nm  bis  -110Nm) |
| STAT_LW_KLASS_2GG_KL_15_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 10 (Bereich -110Nm  bis  -100Nm) |
| STAT_LW_KLASS_2GG_KL_16_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 16 (Bereich -100Nm  bis  -90Nm) |
| STAT_LW_KLASS_2GG_KL_17_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 17 (Bereich -90Nm  bis  -80Nm) |
| STAT_LW_KLASS_2GG_KL_18_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 18 (Bereich -80Nm  bis  -70Nm) |
| STAT_LW_KLASS_2GG_KL_19_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 10 (Bereich -70Nm  bis  -60Nm) |
| STAT_LW_KLASS_2GG_KL_20_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 20 (Bereich -60Nm  bis  -50Nm) |
| STAT_LW_KLASS_2GG_KL_21_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 21 (Bereich -50Nm  bis  -40Nm) |
| STAT_LW_KLASS_2GG_KL_22_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 22 (Bereich -40Nm  bis  -30Nm) |
| STAT_LW_KLASS_2GG_KL_23_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 23 (Bereich -30Nm  bis  -20Nm) |
| STAT_LW_KLASS_2GG_KL_24_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 24 (Bereich -20Nm  bis  -10Nm) |
| STAT_LW_KLASS_2GG_KL_25_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 25 (Bereich -10Nm  bis  0Nm) |
| STAT_LW_KLASS_2GG_KL_26_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 26 (Bereich 0Nm  bis  10Nm) |
| STAT_LW_KLASS_2GG_KL_27_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 27 (Bereich 10Nm  bis  20Nm) |
| STAT_LW_KLASS_2GG_KL_28_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 28 (Bereich 20Nm  bis  30Nm) |
| STAT_LW_KLASS_2GG_KL_29_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 29 (Bereich 30Nm  bis  40Nm) |
| STAT_LW_KLASS_2GG_KL_30_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 30 (Bereich 40Nm  bis  50Nm) |
| STAT_LW_KLASS_2GG_KL_31_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 31 (Bereich 50Nm  bis  60Nm) |
| STAT_LW_KLASS_2GG_KL_32_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 32 (Bereich 60Nm  bis  70Nm) |
| STAT_LW_KLASS_2GG_KL_33_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 33 (Bereich 70Nm  bis  80Nm) |
| STAT_LW_KLASS_2GG_KL_34_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 34 (Bereich 80Nm  bis  90Nm) |
| STAT_LW_KLASS_2GG_KL_35_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 35 (Bereich 90Nm  bis  100Nm) |
| STAT_LW_KLASS_2GG_KL_36_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 36 (Bereich 100Nm  bis  110Nm) |
| STAT_LW_KLASS_2GG_KL_37_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 37 (Bereich 110Nm  bis  120Nm) |
| STAT_LW_KLASS_2GG_KL_38_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 38 (Bereich 120Nm  bis  130Nm) |
| STAT_LW_KLASS_2GG_KL_39_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 39 (Bereich 130Nm  bis  140Nm) |
| STAT_LW_KLASS_2GG_KL_40_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 40 (Bereich 140Nm  bis  150Nm) |
| STAT_LW_KLASS_2GG_KL_41_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 41 (Bereich 150Nm  bis  160Nm) |
| STAT_LW_KLASS_2GG_KL_42_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 42 (Bereich 160Nm  bis  170Nm) |
| STAT_LW_KLASS_2GG_KL_43_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 43 (Bereich 170Nm  bis  180Nm) |
| STAT_LW_KLASS_2GG_KL_44_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 44 (Bereich 180Nm  bis  190Nm) |
| STAT_LW_KLASS_2GG_KL_45_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 45 (Bereich 190Nm  bis  200Nm) |
| STAT_LW_KLASS_2GG_KL_46_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 46 (Bereich 200Nm  bis  210Nm) |
| STAT_LW_KLASS_2GG_KL_47_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 47 (Bereich 210Nm  bis  220Nm) |
| STAT_LW_KLASS_2GG_KL_48_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 48 (Bereich 220Nm  bis  230Nm) |
| STAT_LW_KLASS_2GG_KL_49_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 49 (Bereich 230Nm  bis  240Nm) |
| STAT_LW_KLASS_2GG_KL_50_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 50 (Bereich 240Nm  bis  250Nm) |
| STAT_LW_KLASS_2GG_KL_51_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 51 (Bereich 250Nm  bis  260Nm) |
| STAT_LW_KLASS_2GG_KL_52_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 52 (Bereich 260Nm  bis  270Nm) |
| STAT_LW_KLASS_2GG_KL_53_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 53 (Bereich 270Nm  bis  280Nm) |
| STAT_LW_KLASS_2GG_KL_54_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 54 (Bereich 280Nm  bis  290Nm) |
| STAT_LW_KLASS_2GG_KL_55_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 55 (Bereich 290Nm  bis  300Nm) |
| STAT_LW_KLASS_2GG_KL_56_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 56 (Bereich 300Nm  bis  310Nm) |
| STAT_LW_KLASS_2GG_KL_57_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 57 (Bereich 310Nm  bis  320Nm) |
| STAT_LW_KLASS_2GG_KL_58_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 58 (Bereich 320Nm  bis  330Nm) |
| STAT_LW_KLASS_2GG_KL_59_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 59 (Bereich 330Nm  bis  340Nm) |
| STAT_LW_KLASS_2GG_KL_60_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Lastwechselklassierung 2-GG Klasse 60 (Bereich 340Nm  bis  350Nm) |

### RES_0XADF9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTVAL_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1. Wert des angeforderten Histogramm |
| STAT_HISTVAL_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2. Wert des angeforderten Histogramm |
| STAT_HISTVAL_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3. Wert des angeforderten Histogramm |
| STAT_HISTVAL_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 4. Wert des angeforderten Histogramm |
| STAT_HISTVAL_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 5. Wert des angeforderten Histogramm |
| STAT_HISTVAL_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 6. Wert des angeforderten Histogramm |
| STAT_HISTVAL_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 7. Wert des angeforderten Histogramm |
| STAT_HISTVAL_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 8. Wert des angeforderten Histogramm |
| STAT_HISTVAL_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 9. Wert des angeforderten Histogramm |
| STAT_HISTVAL_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 10. Wert des angeforderten Histogramm |

### RES_0XADFC_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SAETZE_GESAMT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gespeicherten Datensätze der Ladehistorie. |
| STAT_SATZNUMMER_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nummer des ausgelesenen Satzes der Ladehistorie. |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_WERT | + | - | - | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 0,2A |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_WERT | + | - | - | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 0,2A |
| STAT_SYSTEMZEIT_EINSTECKEN_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) |
| STAT_KM_STAND_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag |
| STAT_HVB_SOC_EINSTECKEN_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - Auflösung 0,5% |
| STAT_LADEART | + | - | - | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Oma/AC Wallbox/DC) |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (Standklima/Heizung) ausgewählt (0 = nein / 1 = ja) |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden wurde eingestellt (0 = nein / 1 = ja) |
| STAT_REMOTE_AENDERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Jedliche Änderungen per Remote-Funktion durchgeführt (0 = nein / 1 = ja) |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden (0 = nein / 1 = ja) |
| STAT_EINSTELLUNG_LADESTROMFAKTOR_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeestromfaktor (ABK) |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladeende (Zeit in min rel. zu Ladestart (stecken)) |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (mit Fahrzeug Vorkonditionierung) |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_WERT | + | - | - | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bei Start dem Fahrer prognostizierte Ladedauer (ohne Fahrzeug Vorkonditionierung) |
| STAT_SYSTEMZEIT_LADEENDE_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei der Ladeende |
| STAT_LADEDAUER_WERT | + | - | - | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktive Ladedauer (ohne evtl. Fahrzeug-Vorkonditionnierung aber mit Speicher-Vorkonditionnierung). |
| STAT_HVB_SOC_LADEENDE_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers (bei Ladeende) - Auflösung 0,5% |
| STAT_NETZ_ENTNOMMENE_ENERGIE_WERT | + | - | - | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Entnommene Netzenergie bis Ladeende (ohne Fahrzeug Vorkonditionierung) - Auflösung 0,2 kWh |
| STAT_NETZ_SPITZENLEISTUNG_WERT | + | - | - | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spitzenlast (Maximalwert der aufgen. Netzleistung) - Auflösung 0,5 kW |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_WERT | + | - | - | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzspannung zum Zeitpunkt des MAX-Wertes der Spitznetzleistung |
| STAT_HVB_VORKONDITIONNIERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung wurde durchgeführt (0= nein / 1 = ja) |
| STAT_VORKONDITIONNIERUNG_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug Vorkonditionierung (wie eingestellt) wurde durchgeführt (0 = nein / 1 = ja) |
| STAT_NETZ_AUSSETZER_EIN | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten ( 0 = nein / 1 = ja) |
| STAT_NETZ_AUSSETZER_ANZAHL_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t>1s) |
| STAT_LADEENDE_URSACHE | + | - | - | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende |

### RES_0XADFE_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMSTAND_START_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Start der Klassierung |
| STAT_KMSTAND_AKUTELL_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der Klassierung (aktuell) |
| STAT_KLASSIERTAKT_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Klassiertakt |
| STAT_ZUG_SCHUB_KLASS_KL1_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zug/Schub Wechsel Klassierung Zug : 0 bis 60 Nm Schub : 0 bis -60 Nm |
| STAT_ZUG_SCHUB_KLASS_KL2_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zug/Schub Wechsel Klassierung Zug : 60 bis 150 Nm Schub : -60 bis -150 Nm |
| STAT_ZUG_SCHUB_KLASS_KL3_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zug/Schub Wechsel Klassierung Zug : < 150 Nm Schub : < -150 Nm |

### RES_0XAF42_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTVAL_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1.Wert des angeforderten Histogramms |
| STAT_HISTVAL_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2.Wert des angeforderten Histogramms |
| STAT_HISTVAL_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3.Wert des angeforderten Histogramms |
| STAT_HISTVAL_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 4.Wert des angeforderten Histogramms |
| STAT_HISTVAL_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 5.Wert des angeforderten Histogramms |
| STAT_HISTVAL_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 6.Wert des angeforderten Histogramms |

### RES_0XDDF6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DCDC Wandler: IST-Spannung LV-Seite am B+ Bolzen |
| STAT_STROM_DCDC_LV_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | DCDC Wandler: IST-Strom LV-Seite am B+ Bolzen |

### RES_0XDE00_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HVB_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Ladezustand HV Batterie |
| STAT_SOC_HVB_MIN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Startfähigkeitsgrenze Ladezustand HV Batterie |
| STAT_LADEGERAET | 0/1 | high | unsigned char | - | - | - | - | - | Ladegerät erkannt (1 = erkannt / 0 = nicht erkannt) |
| STAT_FREMDLADUNG | 0/1 | high | unsigned char | - | - | - | - | - | Fremdladung (1 = erkannt / 0 = nicht erkannt) |
| STAT_FAHRB | 0/1 | high | unsigned char | - | - | - | - | - | Fahrbereitschaft (1 = aktiv / 0 = nicht aktiv) |
| STAT_BA_DCDC_KOMM_NR | 0-n | high | unsigned char | - | TAB_EME_KOMM_BETRIEBSART_DCDC | - | - | - | Kommandierte Betriebsart DC/DC Wandler |
| STAT_I_DCDC_HV_OUT_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze HV-Seite |
| STAT_U_DCDC_HV_OUT_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannungsgrenze HV-Seite |
| STAT_I_DCDC_LV_OUT_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Stromgrenze NV-Seite |
| STAT_U_DCDC_LV_OUT_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannungsgrenze NV-Seite |
| STAT_BA_DCDC_IST_NR | 0-n | high | unsigned char | - | TAB_EME_IST_BETRIEBSART_DCDC | - | - | - | IST-Betriebsart DCDC-Wandler |
| STAT_ALS_DCDC_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Auslastung DC/DC-Wandler |
| STAT_I_DCDC_HV_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Strom HV-Seite |
| STAT_U_DCDC_HV_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannung HV-Seite |
| STAT_I_DCDC_LV_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Strom NV-Seite |
| STAT_U_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Spannung NV-Seite |

### RES_0XDE02_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_DC_HV_LE_WERT | V | high | signed int | - | - | 0.0313 | 1.0 | 0.0 | HV-Zwischenkreisspannung |
| STAT_HV_READY | 0/1 | high | unsigned char | - | - | - | - | - | Freigabe HV |
| STAT_HDCAC_EREQ | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Schließen Schütze HV-Batterie |
| STAT_I0ANF_HVB | 0-n | high | unsigned char | - | TAB_EME_I0ANF_HVB | - | - | - | Status Nullstromanforderung |
| STAT_ANF_ENTL_ZK | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Entladung HV-Zwischenkreis durch DCDC-Wandler |
| STAT_HVSTART_KOMM | 0-n | high | unsigned char | - | TAB_EME_HVSTART_KOMM | - | - | - | Ausgabe des Stateflow-Status des HVPM Startsystems |
| STAT_ANF_ENTL_EME | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Notentladung ZK: 0 = nicht aktiv; 1 = aktiv |

### RES_0XDE04_D

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

### RES_0XDE06_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T_P_WUNSCH_ID_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heat Up - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Heizen - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cool-Down - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Kühlen - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Beschlag - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Defrost - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung dringend - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterieheizung - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC/DC-Wandler - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 1 - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_11_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 2 - Zeit, während der Funktion angefordert war. |
| STAT_T_P_WUNSCH_ID_12_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 3 - Zeit, während der Funktion angefordert war. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heat Up - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Heizen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cool-Down - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Kühlen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Beschlag - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Defrost - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung dringend - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterieheizung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC/DC-Wandler - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 1 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_11_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 2 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE1_ID_12_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 3 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 1. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heat Up - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Heizen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cool-Down - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | E-Kühlen - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Beschlag - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Defrost - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Kühlung dringend - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterieheizung - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC/DC-Wandler - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 1 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_11_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 2 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_T_P_SOLL_WUNSCH_RANGE2_ID_12_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antrieb 3 - Zeit, während der Funktion nicht vollständig freigegeben war, SOC-Bereich 2. |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_0_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 1.- 3. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 4. - 6. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 7. - 9. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 10. - 12. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 13. - 15. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 16. - 18. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 19. - 21. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 22. - 24. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 25. - 27. Minute |
| STAT_P_HVPM_DCDC_MITTEL_30MIN_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere DCDC-Leistung 28. - 30. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_0_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 1. - 3. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 4. - 6. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 7. - 9. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 10. - 12. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 13. - 15. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 16. - 18. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 19. - 21. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 22. - 24. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 25. - 27. Minute |
| STAT_P_HVPM_KOMFORT_MITTEL_30MIN_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlere Leistung Komfortverbraucher 28. - 30. Minute |

### RES_0XDE19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BREMSBTG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsbetätigungen |
| STAT_LAUFZEIT_ELUP_S_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Elup |
| STAT_ANLAUFE_ELUP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anläufe Elup |

### RES_0XDE1C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DCDC_ALS_HIST_BEREICH_NULL_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 0 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_1_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 1 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_2_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 2 |
| STAT_NV_DCDC_ALS_HIST_BEREICH_3_WERT | s | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Zeit durchschnittlicher DCDC Strom im Buckmode LV-seitig in Bereich 3 |

### RES_0XDE39_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_STAT_ST_ERR_MOT_TRCT | - | - | - | Fehler Status EM |
| STAT_AVL_TEMP_MOT_TRCT_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -48.0 | NTC Temperatur EM gerechnet |
| STAT_T_EM2TMODROT_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Rotor Temperatur gerechnet |
| STAT_AVL_COL_TEMP_ENGMG_EL_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -48.0 | Kühlmittel Temperatur Eingang gerechnet |
| STAT_TMOD_V_T_LE2_COOLANT_EXIT_EST_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Kühlmittel Temperatur Ausgang gerechnet |
| STAT_AVL_TEMP_INVE_IGBT_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Diode |
| - | Bit | high | BITFIELD | - | BF_STAT_ST_INFO_DER_MOT_TRCT | - | - | - | Informationen Status EM |
| - | Bit | high | BITFIELD | - | BF_STAT_ST_INFO_DER_INVE_TRCT | - | - | - | Informationen Status Inverter |
| - | Bit | high | BITFIELD | - | BF_STAT_V_E_EM2POMERROR50US | - | - | - | Status POM |
| - | Bit | high | BITFIELD | - | BF_STAT_V_E_FUSILDUWB_MC2_UE2 | - | - | - | FuSi Umweltwort MC2 |
| - | Bit | high | BITFIELD | - | BF_STAT_V_E_FUSILDUWB | - | - | - | FuSi Umweltwort MC0 |
| STAT_V_E_EMOPMO_IST | 0-n | high | unsigned char | - | TAB_STAT_V_e_EmOpmo_ist | - | - | - | Aktuelle Betriebsart |
| STAT_V_E_BAMSTATUS | 0-n | high | unsigned char | - | TAB_STAT_V_e_BamStatus | - | - | - | Interne Betriebsart |
| STAT_V_LIM_TQP_MD_EM2_GEN_MAX_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximales generatorisches Moment, welches das System aus LE + EM für die naechste Sekunde stellen koennte |
| STAT_V_LIM_TQP_MD_EM2_MOT_MAX_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximales motorisches Moment, welches das System aus LE + EM für die naechste Sekunde stellen koennte |
| STAT_V_U_INVEM2_UQ_WERT | V | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Q Spannung |
| STAT_V_U_INVEM2_UD_WERT | V | high | signed int | - | - | 1.0 | 1.0 | 0.0 | D Spannung |
| STAT_V_I_INVEM2_IQ_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Q Strom |
| STAT_V_I_INVEM2_ID_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | D Strom |
| STAT_V_N_RSLV_STATUS | 0-n | high | unsigned char | - | TAB_STAT_V_n_Rslv_status | - | - | - | Statuswort Resolver Signal Drehzahl |
| STAT_V_PHI_RSLV_STATUS | 0-n | high | unsigned char | - | TAB_STAT_V_phi_Rslv_status | - | - | - | Satuswort Resolver Signal Winkel |
| STAT_TAR_TORQ_MOT_TRCT_ASD_WERT | Nm | high | signed int | - | - | 0.1 | 1.0 | 0.0 | ADA Moment |
| STAT_TAR_TORQ_MOT_TRCT_WERT | Nm | high | unsigned int | - | - | 0.5 | 1.0 | -1023.5 | Drehmoment FuSi |
| STAT_V_N_EMMECHSLOW_UE2_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Drehzahl Fusi |
| STAT_V_E_RLSFUSI_ACVREQ | 0-n | high | unsigned char | - | TAB_STAT_V_E_RLSFUSI_ACVREQ | - | - | - | Resolveroffset Fusi |
| - | Bit | high | BITFIELD | - | BF_STAT_V_ST_RLS_FUSI_MC0 | - | - | - | Status Resolverdiag für Fusi |
| STAT_V_I_INV1_U_RMS_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | RMS Phasenstrom U |
| STAT_V_I_INV1_V_RMS_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | RMS Phasenstrom V |
| STAT_V_I_INV1_W_RMS_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | RMS Phasenstrom W |

### RES_0XDE3E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONF_LADEEINSTELLUNG_RES | 0-n | high | unsigned char | - | TAB_STAT_KONF_LADEEINSTELLUNG_RES | - | - | - | Konfuguration Laden oder Günstig-Laden als gültige Schnittstelle |

### RES_0XDE69_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AE_PARKSPERRE_VARIANTE | 0-n | high | unsigned char | - | TAB_VARIANTE_PARKSPERRE | - | - | - | Variante Parksperre |

### RES_0XDE6E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEMODUS | 0-n | high | unsigned char | - | TAB_LADEMODUS | - | - | - | Auswahl Konduktiv / Induktiv |
| STAT_POSITIONIERUNG | 0-n | high | unsigned char | - | TAB_POSITIONIERUNG | - | - | - | Postionierungsstatus |
| - | Bit | high | BITFIELD | - | BF_LADEUNTERBRECHUNG | - | - | - | Grund Ladeunterbrechung |
| STAT_HVB_SOC_DISP_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Display-SOC der HV-Batterie |
| - | Bit | high | BITFIELD | - | BF_STATUS_LSC_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden Abfahrtszeit |
| STAT_LSC_PROGNOSEMODE | 0-n | high | unsigned char | - | TAB_LSC_PROGNOSEMODE | - | - | - | aktueller Prognosemodus LSC |
| STAT_LSC_VERSION | 0-n | high | unsigned char | - | TAB_LSC_VERSION | - | - | - | aktuelle LSC version |
| STAT_AKT_PHASE_COUNT_AC_CHARGING | 0-n | high | unsigned char | - | TAB_AKT_PHASE_COUNT_AC_CHARGING | - | - | - | Phasigkeit des Ladens |
| STAT_HV_BATTERY_SIZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Speichergröße |
| STAT_ENERGIEDELTA_VOLL_WERT | kWh | high | unsigned int | - | - | 0.02 | 1.0 | 0.0 | Zum Volladen benötigte Energie |
| STAT_LADEENDE_URSACHE | 0-n | high | unsigned char | - | TAB_LADEENDE_URSACHE | - | - | - | Ursache Ladeende (Ladehistorie) |
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
| STAT_HV_SOC_IST_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Aktueller SOC der HV-Batterie |
| STAT_LADEN_PROGNOSE_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezeitprognose |
| STAT_LADEN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladespannung (nur bei AC Laden) |
| STAT_LADEN_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladestrom (nur bei AC Laden) |
| STAT_ENERGIEINHALT_IST_WERT | Ws | high | unsigned long | - | - | 3600.0 | 1.0 | 0.0 | Prognostizierte Energieinhalt in Abhängigkeit des Ladezustands und des Bordnetzverbrauches |
| STAT_LSC_TRIGGER_INHALT_NR | 0-n | high | unsigned char | - | TAB_LSC_TRIGGER_INHALT | - | - | - | Status des LSC-Triggers |
| STAT_ENERGIEINHALT_MAX_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher Energieinhalt des Hochvoltspeichers |
| STAT_LADEN_PROGNOSE_REST_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Prognostizierte Restladedauer: 0-65531 = Wertebereich; 65533 = Nicht verfügbar; 65532 = Initialisierung; 65534  = Fehler; 65535 = Signal ugültig |
| STAT_LADESTECKER_NR | 0-n | high | unsigned char | - | TAB_AE_LADESTECKER_LSC_LADEN | - | - | - | Zustand Ladestecker |
| STAT_LSC_AUSWAHL_LADEN_SOFORT_MODUS | 0-n | high | unsigned char | - | TAB_LSC_AUSWAHL_LADEN_SOFORT_MODUS | - | - | - | Einstellung einmalig sofort Laden |

### RES_0XDE74_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_SENSOREN | - | - | - | Status Sensor 1 |
| STAT_SENSOR_2_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_SENSOREN | - | - | - | Status Sensor 2 |

### RES_0XDE75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_HV_SLE_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV DC Spannung in der SLE |
| STAT_SPANNUNG_HV_SLE_PFC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | SLE Power Factor Corrector Spannung |
| STAT_SPANNUNG_HV_SLE_AC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | SLE AC Eingangsspannung |
| STAT_SPANNUNG_HV_DCDC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_SPANNUNG_HV_UMRICHTER_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung im Umrichter |

### RES_0XDE78_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARKSPERRE_EINLERNEN | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_EINLERNEN_STATUS | - | - | - | Einlernzustand Parksperre |
| STAT_PARKSPERRE_DIAG_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_ZUSTAND | - | - | - | Rückmeldung bzgl. Einlernvorgang |
| STAT_PARKSPERRE_TEACHIN_QUALIFIER_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_EINLERNEN_FEHLER | - | - | - | Auslesen eines Fehlers, der beim Einlernen des Parksperrenaktors aufgetreten ist. |

### RES_0XDE7A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_POSITION_EINGELEGT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position der Parksperre eingelegt |
| STAT_PS_POSITION_OFFEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Position der Parksperre offen |

### RES_0XDE7C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_SPG_HBRUECKE_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannung der H-Brücke |
| STAT_PS_POSITION_OFFEN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannung der Sensierung |

### RES_0XDE7D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_ANSTEURUNG_PARKSPERRE1_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Ansteuerung Parksperre (Duty Cycle H-Bruecke). |
| STAT_ROHSIGNAL_ANSTEURUNG_PARKSPERRE2 | 0/1 | high | unsigned char | - | - | - | - | - | Rohsignal Ansteuerung Parksperre (Richtung). |
| STAT_ROHSIGNAL_ANSTEURUNG_PARKSPERRE_NOTENTRIEGELUNG | 0/1 | high | unsigned char | - | - | - | - | - | Rohsignal Ansteuerung Parksperre Notentrieglungsmagnet ( 0 = nicht angesteuert; 1 = angesteuert ) |
| STAT_ROHSIGNAL_ANSTEURUNG_ELUP_NR | 0-n | high | unsigned char | - | TAB_AE_ELUP_ROHSIGNALE | - | - | - | Rohsignal Ansteuerung ELUP. |

### RES_0XDE7E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_TEMP_ENDSTUFE_ELUP_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperaturmessung Endstufe für ELUP. |
| STAT_ROHSIGNAL_BUDS_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal BUDS. |

### RES_0XDE7F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_TEMP_EMASCHINE_STATOR_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor E-Maschine Stator |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_U_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase U. |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_V_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase V. |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_W_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase W. |
| STAT_ROHSIGNAL_SPANNUNG_HVDC_UMRICHTER_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal HV DC Spannung Umrichter |
| STAT_ROHSIGNAL_STROM_HVDC_UMRICHTER_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal HV DC Strom Umrichter. |
| STAT_ROHSIGNAL_STROM_U_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase U. |
| STAT_ROHSIGNAL_STROM_V_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase V. |
| STAT_ROHSIGNAL_STROM_W_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Stromsensor Phase W. |
| STAT_ROHSIGNAL_ROTORLAGESENSOR_WERT | rad | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Rotorlagesensor korrigierte elektrische Winkelposition (Radian) |

### RES_0XDE80_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_STROM_PARKSPERRE_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung Parksperre. |
| STAT_ROHSIGNAL_POSITION_PARKSPERRE3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rohsignal 3 Positionsmessung Parksperre ( 0-1000=0-100%; 2000=ungueltig) |
| STAT_ROHSIGNAL_POSITION_PARKSPERRE4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rohsignal 4 Positionsmessung Parksperre (0-1000=0-100%; 2000=ungueltig) |

### RES_0XDE81_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_KL30B_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Spannungsmessung Klemme30b |
| STAT_ROHSIGNAL_KL15WUO_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal  Klemme 15WUO (0 = nicht aktiv, 1 = aktiv) |
| STAT_ROHSIGNAL_CRASHSIGNAL_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal Crasheingang Crashsignal elektrisch ( 0 = nicht aktiv; 1 = aktiv ) |

### RES_0XDE82_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_SPANNUNG_AC_NETZ_L1_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Spannungsmessung Phase L1 im AC Netz; Auflösung, Quantisierung, Range etc. wie in SG-interner Funktion verwendet wird. |
| STAT_ROHSIGNAL_STROM_PFC_EFF_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Strommessung Phase L1 im AC Netz; Auflösung, Quantisierung, Range etc. wie in SG-interner Funktion verwendet wird. |
| STAT_ROHSIGNAL_E_S_CHARGE_EN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Charge Enable Leitung; Auflösung, Quantisierung, Range etc. wie in SG-interner Funktion verwendet wird. |

### RES_0XDE83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_SPANNUNG_LV_DCDC_WERT | V | high | unsigned long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Spannungsmessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_LV_DCDC_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_HV_DCDC_WERT | A | high | signed long | - | - | 0.001 | 1.0 | 0.0 | Rohsignal Strommessung HV DCDC Wandler. |

### RES_0XDE84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NETZFREQUENZ_PHASE_1_WERT | - | high | unsigned int | - | - | 0.25 | 1.0 | 0.0 | Aktuelle Netzfrequenz Phase 1 |
| STAT_LADEDAUER_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der im aktuellen Ladezyklus verstrichenen Ladezeit |
| STAT_FEHLERZUSTAND_NR | 0-n | high | unsigned char | - | TAB_AE_SLE_FEHLERZUSTAENDE | - | - | - | SLE Fehlerzustände: 0=Derating 1=Ladeunterbrechung 2=Notlauf 3=Kommunikationsausfall 4=Reserviert 255 Signal ungültig |
| STAT_SLE_DERATING_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert, um den die DC-HV-Ausgangsleistung reduziert ist. 0-254% |
| STAT_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_AE_SLE_BETRIEBSMODE | - | - | - | Betriebsart |
| STAT_WIRKUNGSGRAD_LADEZYKLUS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Ladezyklus |

### RES_0XDE85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLE_DC_HV_LEISTUNG_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Abgegebende Momentanleistung in den Zwischenkreis |
| STAT_SLE_DC_HV_LEISTUNG_MAX_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Maximal abgebbare Leistung in den Zwischenkreis |
| STAT_SLE_AC_WIRKLEISTUNG_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Entnommene Momentanwirkleistung aus dem Netz |

### RES_0XDE86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_RMS_AC_PHASE_1_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Effektivwerte der AC Leiterspannungen (Phase1) |
| STAT_SPANNUNG_SLE_DC_HV_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | SLE DC HV Spannung |
| STAT_SPANNUNG_SLE_DC_HV_OBERGRENZE_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | SLE DC HV Spannungsobergrenze |

### RES_0XDE89_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_DCDC_WANDLER_HV_WERT | A | high | unsigned int | - | - | 0.05 | 1.0 | -100.0 | Strom des DCDC-Wandlers auf der HV-Seite |
| STAT_STROM_DCDC_WANDLER_12V_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | -1000.0 | Strom des DCDC-Wandlers auf der 12V-Seite |
| STAT_STROM_DCDC_TS1_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Tiefsetzsteller-Strom 1 |
| STAT_STROM_DCDC_TS2_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Tiefsetzsteller-Strom 2 |
| STAT_STROM_DCDC_TRAFO1_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Trafostrom 1 |

### RES_0XDE8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_EFF_W_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Effektiver Zuleitungsstrom Phase W |
| STAT_STROM_AC_EFF_V_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Effektiver Zuleitungsstrom Phase V |
| STAT_STROM_AC_EFF_U_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Effektiver Zuleitungsstrom Phase U |
| STAT_ERREGERSTROM_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Aktueller Erregerstrom |
| STAT_STROM_DC_HV_UMRICHTER_EM_WERT | A | high | signed int | - | - | 0.1 | 1.0 | 0.0 | HV-DC Strom des Umrichters für den EM-Stator |

### RES_0XDE8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_UMRICHTER_PHASE_U_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase U |
| STAT_TEMP_UMRICHTER_PHASE_V_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase V |
| STAT_TEMP_UMRICHTER_PHASE_W_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase W |
| STAT_TEMP_UMRICHTER_GT_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Inverter Gatedriver |
| STAT_TEMP_DCDC_BO_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des DCDC Boards |
| STAT_TEMP_DCDC_GTW_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur DC/DC-Gegentaktwandler |
| STAT_TEMP_DCDC_TS_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur DC/DC-Tiefsetzer |
| STAT_TEMP_DCDC_GR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des DCDC Boards |
| STAT_TEMP_SLE_PFC_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-PowerFactorCorrection |
| STAT_TEMP_SLE_GR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-Gleichrichter |
| STAT_TEMP_SLE_GTW_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-Gegentaktwandler |
| STAT_TEMP_SLE_BO_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des SLE Boards |
| STAT_TEMP_ELUP_LE_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur auf dem Powerbord - Messstelle ELUP Leistungsendstufe |
| STAT_TEMP_PROZESSOR_MC0_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor MC0 |
| STAT_TEMP_PROZESSOR_MC2_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor MC2 |

### RES_0XDE92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_AE_ZST_AKTIV_NAKTIV | - | - | - | Ist-Betriebsart des DCDC-Wandlers |
| STAT_SPANNUNG_LV_IST_WERT | V | high | unsigned int | - | - | 0.05 | 1.0 | 0.0 | Bordnetzspannung |
| STAT_AUSLASTUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung des DCDC-Wandlers |

### RES_0XDE93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur des ELUP-Treibers |

### RES_0XDE96_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLER_BIT0_EIN | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 0: Shutdown Undervoltage 0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT1_EIN | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 1: Shutdown Overvoltage  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT2_EIN | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 2: Shutdown Overtemperature  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT3_EIN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 3: Shutdown Overcurrent  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT4_EIN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 4: Interlock Fault  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT5_EIN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 5: Not in commanded mode  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT6_EIN | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 6: Genereller HW-Fehler (Err_State)  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT7_EIN | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 7: -Vorhalt- Verfeinerung HW-Fehler 1  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT8_EIN | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 8: -Vorhalt- Verfeinerung HW-Fehler 2  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT9_EIN | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit9: -Vorhalt- Verfeinerung HW-Fehler 3  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT10_EIN | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit10: -Vorhalt- Verfeinerung HW-Fehler 4  0=nicht aktiv 1=aktiv |

### RES_0XDE9E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_NR | 0-n | high | unsigned char | - | TAB_EDME_STATUS_LADEN | - | - | - | Information über den aktuellen Status des Ladens (siehe TAB_EDME_STATUS_LADEN) |
| STAT_REMOTE_LADEN_NR | 0-n | high | unsigned char | - | TAB_EDME_REMOTE_LADEN | - | - | - | Bit0: RemoteLaden nicht aktiv Bit1: RemoteLaden on Hold Bit2: RemoteLaden aktiv |
| STAT_TIMER_LADEN_NR | 0-n | high | unsigned char | - | TAB_EDME_TIMER_LADEN_NR | - | - | - | Bit0: TimerLaden nicht aktiv Bit1: TimerLaden on Hold Bit2: TimerLaden aktiv |
| STAT_HV_SOC_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Anzeige Ladezustand HV-Batterie |
| STAT_ZEIT_LADEENDE_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_MAX_LADESTROM_LADEGERAET_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximaler AC-Ladestrom Ladegerät |
| STAT_IST_AC_SPANNUNG_LADEGERAET_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-AC-Spannung Ladegerät |
| STAT_REICHWEITE_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reichweite |
| STAT_HVB_TEMP_WERT | ° | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Temperatur der HV-Batterie |
| STAT_TRIGGER_SEGMENTSPEICHER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösebedingung für das Lesen des Segmentspeichers |

### RES_0XDEA1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_AKTUELL_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_AKTUELL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - aktueller Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_AKTUELL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - aktueller Vorgang |
| STAT_KM_STAND_AKTUELL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - aktueller Vorgang |
| STAT_HVB_SOC_EINSTECKEN_AKTUELL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - aktueller Vorgang |
| STAT_LADEART_NR_AKTUELL | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - aktueller Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_AKTUELL | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_1_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - letzter Vorgang |
| STAT_KM_STAND_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_1_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - letzter Vorgang |
| STAT_LADEART_NR_1 | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - letzter Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_1 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_2_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - vorletzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - vorletzter Vorgang |
| STAT_KM_STAND_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - vorletzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_2_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - vorletzter Vorgang |
| STAT_LADEART_NR_2 | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - vorletzter Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_2 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in min nach Mitternacht) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in min nach Mitternacht) - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_NETZ_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Hausnetz (Leistungsbegrenzung) - Auflösung 2A - 3.letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_KABEL_3_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Eingestellte AC-Strombegrenzung Kabel (Leistungsbegrenzung) - Auflösung 2A - 3.letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel beim Einstecken des Ladesteckers (Erkennung Proximity, Wecken über Pilot oder START-Taste beim DC-Laden) - 3.letzter Vorgang |
| STAT_KM_STAND_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Eintrag - 3.letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_3_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ladezustand des HV-Speichers (beim Einstecken) - 3.letzter Vorgang |
| STAT_LADEART_NR_3 | 0-n | high | unsigned char | - | TAB_LADEN_LADEART | - | - | - | Gewähltes Ladeverfahren (AC Low/AC Wallbox/DC) - 3.letzter Vorgang |
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
| STAT_LADEENDE_URSACHE_NR_3 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE | - | - | - | Ursache für Ladeende - 3.letzter Vorgang |

### RES_0XDEA6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP1_E_MOTOR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | E-Motor Temperatur 1 |
| STAT_TEMP2_E_MOTOR_WERT | °C | high | signed int | - | - | 0.0156 | 1.0 | 0.0 | E-Motor Temperatur 2 |

### RES_0XDEA7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 0.5 | 1.0 | -5000.0 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | signed int | - | - | 0.5 | 1.0 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | signed int | - | - | 0.5 | 1.0 | 0.0 | SOLL Moment der E-Maschine |
| STAT_ELEKTRISCHE_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_AE_ELEKTRISCHE_BETRIEBSART | - | - | - | aktuelle Betriebsart der E-Maschine |

### RES_0XDEA9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Limitierung durch die kommandierte Leistungsgrenze: 0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Limitierung der Ausgangsleistung wegen Spannungskriterium: 0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Limitierung durch kommandierte Minimalspannung auf HV-Seite:  0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Limitierung wegen Temperaturkriterium: 0=nicht aktiv 1=aktiv |

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
| STAT_HFK_LADEENDE_URSACHE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Ladestecker abgezogen |
| STAT_HFK_LADEENDE_URSACHE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Netzausfall (auch Schuko-Stecker abgezogen) |
| STAT_HFK_LADEENDE_URSACHE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Fehler im HV-System |
| STAT_HFK_LADEENDE_URSACHE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Fehler der Ladestation |
| STAT_HFK_LADEENDE_URSACHE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = Parksperrensignal ausgefallen |
| STAT_HFK_LADEENDE_URSACHE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeende Ursache = keine Parksperre |

### RES_0XDEB0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_VERSION_MAIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Main-Version Parksperren-SW |
| STAT_PS_VERSION_SUB_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Revision Parksperren-SW |

### RES_0XDEB1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_MC0_WERT | ° | high | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Resolver Offset Winkel (0° ... +359°) |
| STAT_OFFSET_MC2_WERT | ° | high | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Resolver Offset Winkel (0° ... +359°) |

### RES_0XDEBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_CY0_5V0_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 5V von CY320_MC0 |
| STAT_SPANNUNG_CY2_5V0_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 5V von CY320_MC2 |
| STAT_SPANNUNG_CY0_3V3_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY320_MC0 |
| STAT_SPANNUNG_CY2_3V3_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY320_MC2 |
| STAT_SPANNUNG_CY0_1V5_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 1,5V von CY320_MC0 |
| STAT_SPANNUNG_CY2_1V5_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Spannungsüberwachung der internen 1,5V von CY320_MC2 |
| STAT_SPANNUNG_32V_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | Rückmessung der internen 32 V |

### RES_0XDEBF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_DPR | 0/1 | high | unsigned char | - | - | - | - | - | Dualported RAM aktiv 0 = nicht aktiv 1 = aktiv |
| STAT_SYSSTATE_MC0_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des MC0 |
| STAT_SYSSTATE_MC2_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des MC2 |
| - | Bit | high | BITFIELD | - | BF_SYSSTATE_KLEMMEN | - | - | - | Klemmenzustand |

### RES_0XDED1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESONANZ_1_START_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anfang des ersten Resonanz Intervalls |
| STAT_RESONANZ_1_STOP_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ende des ersten Resonanz Intervalls |
| STAT_RESONANZ_2_START_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anfang des zweiten Resonanz Intervalls |
| STAT_RESONANZ_2_STOP_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ende des zweiten Resonanz Intervalls |
| STAT_RESONANZ_GELERNT | 0/1 | high | unsigned char | - | - | - | - | - | Resonanz bereits gelernt (0 = nein; 1 = ja) |
| STAT_RESONANZ_LERNZYKLEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl an erfolgten Resonanz Lernzyklen |
| STAT_RESONANZ_LETZTER_LERNVORGANG_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vergangene Zeit seit letztem Lernvorgang der Resonanz |

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
| STAT_HV_SOC_IST_WERT | % | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Aktueller SOC der HV-Batterie |
| STAT_LADEN_PROGNOSE_WERT | min | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Ladezeitprognose |
| STAT_LADEN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladespannung (nur bei AC Laden) |
| STAT_LADEN_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC-Ladestrom (nur bei AC Laden) |
| STAT_ENERGIEINHALT_IST_WERT | Ws | high | unsigned long | - | - | 3600.0 | 1.0 | 0.0 | Prognostizierte Energieinhalt in Abhängigkeit des Ladezustands und des Bordnetzverbrauches |
| STAT_LSC_TRIGGER_INHALT_NR | 0-n | high | unsigned char | - | TAB_LSC_TRIGGER_INHALT | - | - | - | Status des LSC-Triggers |
| STAT_ENERGIEINHALT_MAX_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher Energieinhalt des Hochvoltspeichers |
| STAT_LADEN_PROGNOSE_REST_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Prognostizierte Restladedauer: 0-65531 = Wertebereich; 65533 = Nicht verfügbar; 65532 = Initialisierung; 65534  = Fehler; 65535 = Signal ugültig |
| STAT_LADESTECKER_NR | 0-n | high | unsigned char | - | TAB_AE_LADESTECKER_LSC_LADEN | - | - | - | Zustand Ladestecker |

### RES_0XDEDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM1 im Derating im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in oberer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in unterer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM1_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Entladestrom Grenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM1_DIAG_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM1 in Ladestromgrenze im SOC Bereich 6 |

### RES_0XDEE0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_VERWEILDAUER_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 5.0 | 1.0 | 0.0 | Verweildauer der EM2 im Derating im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERULIMIT_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in oberer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERULIMIT_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in unterer Spannungsgrenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_UPPERILIMIT_EM2_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Entladestrom Grenze im SOC Bereich 6 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_1_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 1 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_2_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 2 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_3_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 3 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_4_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 4 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_5_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 5 |
| STAT_HIST_UI_DERATING_LOWERILIMIT_EM2_DIAG_SOC_BEREICH_6_WERT | s | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Verweildauer der EM2 in Ladestromgrenze im SOC Bereich 6 |

### RES_0XDEED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTR_HIST_010_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_010 |
| STAT_ANTR_HIST_011_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_011 |
| STAT_ANTR_HIST_012_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_012 |
| STAT_ANTR_HIST_013_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_013 |
| STAT_ANTR_HIST_014_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_014 |
| STAT_ANTR_HIST_015_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_015 |
| STAT_ANTR_HIST_016_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_016 |
| STAT_ANTR_HIST_017_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_017 |
| STAT_ANTR_HIST_018_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_018 |
| STAT_ANTR_HIST_019_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_019 |
| STAT_ANTR_HIST_020_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_020 |
| STAT_ANTR_HIST_021_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_021 |
| STAT_ANTR_HIST_022_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_022 |
| STAT_ANTR_HIST_023_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_023 |
| STAT_ANTR_HIST_024_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_024 |
| STAT_ANTR_HIST_025_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_025 |
| STAT_ANTR_HIST_026_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_026 |
| STAT_ANTR_HIST_027_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_027 |
| STAT_ANTR_HIST_1601_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1601 |
| STAT_ANTR_HIST_1602_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1602 |
| STAT_ANTR_HIST_1603_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1603 |
| STAT_ANTR_HIST_1604_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1604 |
| STAT_ANTR_HIST_1605_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1605 |
| STAT_ANTR_HIST_1606_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1606 |
| STAT_ANTR_HIST_3214_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3214 |
| STAT_ANTR_HIST_3215_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3215 |
| STAT_ANTR_HIST_3216_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3216 |
| STAT_ANTR_HIST_3217_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3217 |
| STAT_ANTR_HIST_3218_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3218 |
| STAT_ANTR_HIST_3219_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3219 |
| STAT_ANTR_HIST_3220_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3220 |
| STAT_ANTR_HIST_3221_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3221 |
| STAT_ANTR_HIST_3278_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3278 |
| STAT_ANTR_HIST_3279_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3279 |
| STAT_ANTR_HIST_3280_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3280 |
| STAT_ANTR_HIST_3281_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3281 |
| STAT_ANTR_HIST_3282_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3282 |
| STAT_ANTR_HIST_3283_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3283 |
| STAT_ANTR_HIST_3284_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3284 |
| STAT_ANTR_HIST_3285_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3285 |
| STAT_ANTR_HIST_3286_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3286 |
| STAT_ANTR_HIST_3287_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3287 |
| STAT_ANTR_HIST_3288_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3288 |
| STAT_ANTR_HIST_3289_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3289 |
| STAT_ANTR_HIST_3290_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3290 |

### RES_0XDEEE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STRECKE_REX_OFF_CHARGE_DEPLETING_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | SOC-Schwelle zum Zustart nicht erreicht, charge depleting ohne aktiven Verbrenner |
| STAT_STRECKE_REX_OFF_CHARGE_SUSTAINING_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke: SOC-Schwelle zum Zustart erreicht/unterschritten, charge sustaining ohne aktiven Verbrenner |
| STAT_STRECKE_REX_ON_CHARGE_SUSTAINING_WERT | km | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Strecke: SOC-Schwelle zum Zustart erreicht/unterschritten, charge sustaining mit aktivem Verbrenner |
| STAT_ZEIT_REX_OFF_CHARGE_DEPLETING_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit: SOC-Schwelle zum Zustart nicht erreicht, charge depleting ohne aktiven Verbrenner |
| STAT_ZEIT_REX_OFF_CHARGE_SUSTAINING_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeit: SOC-Schwelle zum Zustart erreicht/unterschritten, charge sustaining ohne aktiven Verbrenner |
| STAT_ZEIT_REX_ON_CHARGE_SUSTAINING_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | SOC-Schwelle zum Zustart erreicht/unterschritten, charge sustaining mit aktivem Verbrenner |
| STAT_ANZAHL_CHARGE_DEPLETING_ON_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Anzahl Einstiege in Charge Depleting Modus |
| STAT_ANZAHL_CHARGE_DEPLETING_OFF_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Anzahl Ausstiege in Charge Depleting Modus |
| STAT_ANZAHL_REX_START_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Anzahl Motorstarts |
| STAT_ZEIT_REX_ON_MSA_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteile: REX läuft unter MSA-Geschwindigkeits-Mindestschwelle |
| STAT_ZEIT_REX_ON_AKUSTIK_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Zeitanteile: REX läuft Akustiklimits verletzt |

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

### RES_0XDEFB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNT_AUTOP_LVEH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Auto-P bei Fahrzeug verlassen |
| STAT_COUNT_AUTOP_EMF_N_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Auto-P durch EMF-Hilferuf in N |
| STAT_COUNT_AUTOP_EMF_DR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Auto-P durch EMF-Hilferuf in D oder R |
| STAT_COUNT_AUTOP_FB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Auto-P bei Fahrbereitschaftsverlust |
| STAT_COUNT_AUTOP_KL15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Auto-P bei Klemme15 Abschaltung |
| STAT_COUNT_AUTOP_CHRGWIRE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Auto-P bei gestecktem Ladekabel |
| STAT_SW_VERSION_SBW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | SW-Version Shift-by-Wire |

### RES_0XDEFF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_WECHSEL_P_NACH_R_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von P nach R |
| STAT_ZAEHLER_WECHSEL_P_NACH_N_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von P nach N |
| STAT_ZAEHLER_WECHSEL_P_NACH_D_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von P nach D |
| STAT_ZAEHLER_WECHSEL_R_NACH_P_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von R nach P |
| STAT_ZAEHLER_WECHSEL_R_NACH_N_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von R nach N |
| STAT_ZAEHLER_WECHSEL_R_NACH_D_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von R nach D |
| STAT_ZAEHLER_WECHSEL_N_NACH_P_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von N nach P |
| STAT_ZAEHLER_WECHSEL_N_NACH_R_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von N nach R |
| STAT_ZAEHLER_WECHSEL_N_NACH_D_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von N nach D |
| STAT_ZAEHLER_WECHSEL_D_NACH_P_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von D nach P |
| STAT_ZAEHLER_WECHSEL_D_NACH_R_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von D nach R |
| STAT_ZAEHLER_WECHSEL_D_NACH_N_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fahrstufenwechsel von D nach N |

### RES_0XDF1F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UCX_VERBAUT_NR | 0-n | high | unsigned char | - | TAB_UCX_VERBAU_INFO | - | - | - | Information über verbaute UCX |

### RES_0XDF49_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNG_HIST_INT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 1 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 2 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 3 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 4 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 5 vom internen Ladegerät |
| STAT_LEISTUNG_HIST_INT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 6 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 1 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 2 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 3 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 4 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 5 vom internen Ladegerät |
| STAT_TEMP_HIST_INT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 6 vom internen Ladegerät |
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

### RES_0XDF4D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INVERTER_IGBT_LEBENSZEIT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch IGBT |
| STAT_INVERTER_IGBT_LEBENSZEIT_KONST_KUEHLUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch IGBT für konstante Kühlmitteltemperatur von 70°C |
| STAT_INVERTER_DIODE_LEBENSZEIT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch Diode |
| STAT_INVERTER_DIODE_LEBENSZEIT_KONST_KUEHLUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -10.0 | Summierter Lebensdauerverbrauch Diode für konstante Kühlmitteltemperatur von 70°C |
| STAT_INVERTER_RESET_LEBENSZEIT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der aufgetretenen Überläufe des Residuums |

### RES_0XDF50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_WERKLDMODUS_NR | 0-n | high | unsigned char | - | TAB_LADEMODUS_WERK | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_SOC_LADEMODUS_WERK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### RES_0XDF52_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_MC0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3-Byte Chiffetext vom Resolver Offset Winkel MC0 |
| STAT_OFFSET_MC2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3-Byte Chiffetext vom Resolver Offset Winkel MC2 |

### RES_0XDF58_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAE_DTC1_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 1 |
| STAT_SAE_DTC_NUM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 1 |
| STAT_SAE_DTC_DEN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 1 |
| STAT_SAE_DTC2_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 2 |
| STAT_SAE_DTC_NUM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 2 |
| STAT_SAE_DTC_DEN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 2 |
| STAT_SAE_DTC3_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 3 |
| STAT_SAE_DTC_NUM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 3 |
| STAT_SAE_DTC_DEN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 3 |
| STAT_SAE_DTC4_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 4 |
| STAT_SAE_DTC_NUM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 4 |
| STAT_SAE_DTC_DEN4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 4 |
| STAT_SAE_DTC5_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 5 |
| STAT_SAE_DTC_NUM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 5 |
| STAT_SAE_DTC_DEN5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 5 |
| STAT_SAE_DTC6_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 6 |
| STAT_SAE_DTC_NUM6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 6 |
| STAT_SAE_DTC_DEN6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 6 |

### RES_0XDF59_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAE_DTC1_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 1 |
| STAT_SAE_DTC_NUM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 1 |
| STAT_SAE_DTC_DEN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 1 |
| STAT_SAE_DTC2_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 2 |
| STAT_SAE_DTC_NUM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 2 |
| STAT_SAE_DTC_DEN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 2 |
| STAT_SAE_DTC3_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 3 |
| STAT_SAE_DTC_NUM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 3 |
| STAT_SAE_DTC_DEN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 3 |
| STAT_SAE_DTC4_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 4 |
| STAT_SAE_DTC_NUM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 4 |
| STAT_SAE_DTC_DEN4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 4 |
| STAT_SAE_DTC5_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 5 |
| STAT_SAE_DTC_NUM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 5 |
| STAT_SAE_DTC_DEN5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 5 |
| STAT_SAE_DTC6_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 6 |
| STAT_SAE_DTC_NUM6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 6 |
| STAT_SAE_DTC_DEN6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 6 |
| STAT_SAE_DTC7_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 7 |
| STAT_SAE_DTC_NUM7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 7 |
| STAT_SAE_DTC_DEN7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 7 |
| STAT_SAE_DTC8_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 8 |
| STAT_SAE_DTC_NUM8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 8 |
| STAT_SAE_DTC_DEN8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 8 |

### RES_0XDF5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAE_DTC1_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 1 |
| STAT_SAE_DTC_NUM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 1 |
| STAT_SAE_DTC_DEN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 1 |
| STAT_SAE_DTC2_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 2 |
| STAT_SAE_DTC_NUM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 2 |
| STAT_SAE_DTC_DEN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 2 |
| STAT_SAE_DTC3_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 3 |
| STAT_SAE_DTC_NUM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 3 |
| STAT_SAE_DTC_DEN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 3 |
| STAT_SAE_DTC4_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 4 |
| STAT_SAE_DTC_NUM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 4 |
| STAT_SAE_DTC_DEN4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 4 |
| STAT_SAE_DTC5_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 5 |
| STAT_SAE_DTC_NUM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 5 |
| STAT_SAE_DTC_DEN5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 5 |
| STAT_SAE_DTC6_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 6 |
| STAT_SAE_DTC_NUM6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 6 |
| STAT_SAE_DTC_DEN6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 6 |
| STAT_SAE_DTC7_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 7 |
| STAT_SAE_DTC_NUM7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 7 |
| STAT_SAE_DTC_DEN7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 7 |
| STAT_SAE_DTC8_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 8 |
| STAT_SAE_DTC_NUM8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 8 |
| STAT_SAE_DTC_DEN8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 8 |
| STAT_SAE_DTC9_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 9 |
| STAT_SAE_DTC_NUM9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 9 |
| STAT_SAE_DTC_DEN9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 9 |
| STAT_SAE_DTC10_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 10 |
| STAT_SAE_DTC_NUM10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 10 |
| STAT_SAE_DTC_DEN10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 10 |
| STAT_SAE_DTC11_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 11 |
| STAT_SAE_DTC_NUM11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 11 |
| STAT_SAE_DTC_DEN11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 11 |
| STAT_SAE_DTC12_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 12 |
| STAT_SAE_DTC_NUM12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 12 |
| STAT_SAE_DTC_DEN12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 12 |
| STAT_SAE_DTC13_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 13 |
| STAT_SAE_DTC_NUM13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 13 |
| STAT_SAE_DTC_DEN13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 13 |
| STAT_SAE_DTC14_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 14 |
| STAT_SAE_DTC_NUM14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 14 |
| STAT_SAE_DTC_DEN14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 14 |
| STAT_SAE_DTC15_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 15 |
| STAT_SAE_DTC_NUM15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 15 |
| STAT_SAE_DTC_DEN15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 15 |
| STAT_SAE_DTC16_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 16 |
| STAT_SAE_DTC_NUM16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 16 |
| STAT_SAE_DTC_DEN16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 16 |
| STAT_SAE_DTC17_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 17 |
| STAT_SAE_DTC_NUM17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 17 |
| STAT_SAE_DTC_DEN17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 17 |
| STAT_SAE_DTC18_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 18 |
| STAT_SAE_DTC_NUM18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 18 |
| STAT_SAE_DTC_DEN18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 18 |
| STAT_SAE_DTC19_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 19 |
| STAT_SAE_DTC_NUM19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 19 |
| STAT_SAE_DTC_DEN19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 19 |
| STAT_SAE_DTC20_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 20 |
| STAT_SAE_DTC_NUM20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 20 |
| STAT_SAE_DTC_DEN20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 20 |
| STAT_SAE_DTC21_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 21 |
| STAT_SAE_DTC_NUM21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 21 |
| STAT_SAE_DTC_DEN21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 21 |
| STAT_SAE_DTC22_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 22 |
| STAT_SAE_DTC_NUM22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 22 |
| STAT_SAE_DTC_DEN22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 22 |
| STAT_SAE_DTC23_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 23 |
| STAT_SAE_DTC_NUM23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 23 |
| STAT_SAE_DTC_DEN23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 23 |
| STAT_SAE_DTC24_WERT | HEX | high | unsigned long | - | - | - | - | - | SAE DTC 24 |
| STAT_SAE_DTC_NUM24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für den SAE DTC 24 |
| STAT_SAE_DTC_DEN24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nenner für den SAE DTC 24 |

### RES_0XDFB3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONFIG_LADEGERAETE | 0-n | high | unsigned int | - | TAB_LADEGERAET_KONFIGURATION_AUSLESEN | - | - | - | Konfiguration des (der) Ladegerättyps (typen) |

### RES_0XDFB5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_LLCHVFIL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 1 |
| STAT_TEMP_LLCHVFIL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 2 |
| STAT_TEMP_LLCHVFIL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 3 |
| STAT_TEMP_LLCHVFIL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 4 |
| STAT_TEMP_LLCHVFIL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 5 |
| STAT_TEMP_LLCHVFIL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCHVFIL-Sensor Wert 6 |
| STAT_TEMP_LLCTRAFIL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 1 |
| STAT_TEMP_LLCTRAFIL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 2 |
| STAT_TEMP_LLCTRAFIL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 3 |
| STAT_TEMP_LLCTRAFIL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 4 |
| STAT_TEMP_LLCTRAFIL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 5 |
| STAT_TEMP_LLCTRAFIL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCTRAFIL-Sensor Wert 6 |
| STAT_TEMP_LLCZKFIL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 1 |
| STAT_TEMP_LLCZKFIL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 2 |
| STAT_TEMP_LLCZKFIL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 3 |
| STAT_TEMP_LLCZKFIL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 4 |
| STAT_TEMP_LLCZKFIL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 5 |
| STAT_TEMP_LLCZKFIL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm von LLCZKFIL-Sensor Wert 6 |

### RES_0XDFCE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_BEREICH_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Absolutzeit im kritischen E-Maschinen Drehzahl Bereich 1 (Sekunden) |
| STAT_DREHZAHL_BEREICH_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Absolutzeit im kritischen E-Maschinen Drehzahl Bereich 2 (Sekunden) |

### RES_0XDFD0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_1_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 1 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_2_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 2 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_3_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 3 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_4_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 4 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_5_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 5 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_6_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 6 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_7_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 7 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_8_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 8 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_9_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 9 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_10_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 10 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_11_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 11 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_12_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 12 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_13_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 13 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_14_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 14 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_15_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 15 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_16_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 16 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_17_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 17 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_18_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 18 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_19_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 19 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_20_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 20 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_21_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 21 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_22_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 22 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_23_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 23 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_24_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 24 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_25_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 25 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_26_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 26 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_27_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 27 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_28_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 28 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_29_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 29 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_30_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 30 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_31_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 31 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_32_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 32 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_33_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 33 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_34_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 34 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_35_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 35 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_36_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 36 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_37_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 37 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_38_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 38 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_39_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 39 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_40_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 40 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_41_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 41 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_42_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 42 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_43_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 43 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_44_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 44 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_45_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 45 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_46_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 46 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_47_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 47 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_48_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 48 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_49_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 49 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_50_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 50 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_51_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 51 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_52_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 52 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_53_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 53 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_54_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 54 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_55_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 55 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_56_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 56 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_57_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 57 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_58_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 58 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_59_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 59 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_60_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 60 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_61_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 61 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_62_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 62 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_63_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 63 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_64_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 64 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_65_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 65 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_66_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 66 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_67_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 67 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_68_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 68 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_69_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 69 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_70_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 70 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_71_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 71 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_72_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 72 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_73_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 73 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_74_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 74 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_75_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 75 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_76_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 76 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_77_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 77 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_78_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 78 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_79_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 79 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_80_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 80 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_81_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 81 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_82_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 82 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_83_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 83 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_84_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 84 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_85_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 85 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_86_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 86 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_87_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 87 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_88_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 88 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_89_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 89 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_90_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 90 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_91_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 91 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_92_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 92 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_93_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 93 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_94_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 94 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_95_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 95 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_96_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 96 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_97_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 97 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_98_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 98 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_99_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 99 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_100_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 100 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_101_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 101 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_102_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 102 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_103_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 103 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_104_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 104 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_105_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 105 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_106_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 106 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_107_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 107 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_108_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 108 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_109_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 109 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_110_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 110 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_111_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 111 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_112_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 112 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_113_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 113 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_114_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 114 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_115_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 115 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_116_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 116 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_117_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 117 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_118_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 118 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_119_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 119 |
| STAT_DREHZAHL_DREHMOMENT_BEREICH_120_WERT | % | high | unsigned int | - | - | 0.002 | 1.0 | 0.0 | Drehzahl Drehmoment Bereich 120 |

### RES_0XE52F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_1_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 1 |
| STAT_DTC_1_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 1 |
| STAT_DTC_1_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 1 |
| STAT_DTC_2_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 2 |
| STAT_DTC_2_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 2 |
| STAT_DTC_2_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 2 |
| STAT_DTC_3_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 3 |
| STAT_DTC_3_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 3 |
| STAT_DTC_3_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 3 |
| STAT_DTC_4_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 4 |
| STAT_DTC_4_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 4 |
| STAT_DTC_4_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 4 |
| STAT_DTC_5_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 5 |
| STAT_DTC_5_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 5 |
| STAT_DTC_5_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 5 |
| STAT_DTC_6_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 6 |
| STAT_DTC_6_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 6 |
| STAT_DTC_6_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 6 |
| STAT_DTC_7_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 7 |
| STAT_DTC_7_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 7 |
| STAT_DTC_7_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 7 |
| STAT_DTC_8_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 8 |
| STAT_DTC_8_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 8 |
| STAT_DTC_8_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 8 |
| STAT_DTC_9_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 9 |
| STAT_DTC_9_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 9 |
| STAT_DTC_9_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 9 |
| STAT_DTC_10_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 10 |
| STAT_DTC_10_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 10 |
| STAT_DTC_10_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 10 |
| STAT_DTC_11_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 11 |
| STAT_DTC_11_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 11 |
| STAT_DTC_11_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 11 |
| STAT_DTC_12_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 12 |
| STAT_DTC_12_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 12 |
| STAT_DTC_12_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 12 |
| STAT_DTC_13_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 13 |
| STAT_DTC_13_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 13 |
| STAT_DTC_13_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 13 |
| STAT_DTC_14_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 14 |
| STAT_DTC_14_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 14 |
| STAT_DTC_14_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 14 |
| STAT_DTC_15_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 15 |
| STAT_DTC_15_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 15 |
| STAT_DTC_15_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 15 |
| STAT_DTC_16_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 16 |
| STAT_DTC_16_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 16 |
| STAT_DTC_16_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 16 |
| STAT_DTC_17_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 17 |
| STAT_DTC_17_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 17 |
| STAT_DTC_17_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 17 |
| STAT_DTC_18_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 18 |
| STAT_DTC_18_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 18 |
| STAT_DTC_18_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 18 |
| STAT_DTC_19_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 19 |
| STAT_DTC_19_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 19 |
| STAT_DTC_19_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 19 |
| STAT_DTC_20_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 20 |
| STAT_DTC_20_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 20 |
| STAT_DTC_20_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 20 |
| STAT_DTC_21_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 21 |
| STAT_DTC_21_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 21 |
| STAT_DTC_21_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 21 |
| STAT_DTC_22_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 22 |
| STAT_DTC_22_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 22 |
| STAT_DTC_22_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 22 |
| STAT_DTC_23_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 23 |
| STAT_DTC_23_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 23 |
| STAT_DTC_23_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 23 |
| STAT_DTC_24_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 24 |
| STAT_DTC_24_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 24 |
| STAT_DTC_24_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 24 |
| STAT_DTC_25_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 25 |
| STAT_DTC_25_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 25 |
| STAT_DTC_25_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 25 |
| STAT_DTC_26_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 26 |
| STAT_DTC_26_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 26 |
| STAT_DTC_26_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 26 |
| STAT_DTC_27_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 27 |
| STAT_DTC_27_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 27 |
| STAT_DTC_27_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 27 |
| STAT_DTC_28_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 28 |
| STAT_DTC_28_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 28 |
| STAT_DTC_28_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 28 |
| STAT_DTC_29_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 29 |
| STAT_DTC_29_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 29 |
| STAT_DTC_29_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 29 |
| STAT_DTC_30_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 30 |
| STAT_DTC_30_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 30 |
| STAT_DTC_30_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 30 |
| STAT_DTC_31_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 31 |
| STAT_DTC_31_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 31 |
| STAT_DTC_31_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 31 |
| STAT_DTC_32_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 32 |
| STAT_DTC_32_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 32 |
| STAT_DTC_32_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 32 |
| STAT_DTC_33_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 33 |
| STAT_DTC_33_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 33 |
| STAT_DTC_33_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 33 |
| STAT_DTC_34_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 34 |
| STAT_DTC_34_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 34 |
| STAT_DTC_34_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 34 |
| STAT_DTC_35_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 35 |
| STAT_DTC_35_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 35 |
| STAT_DTC_35_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 35 |
| STAT_DTC_36_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 36 |
| STAT_DTC_36_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 36 |
| STAT_DTC_36_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 36 |
| STAT_DTC_37_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 37 |
| STAT_DTC_37_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 37 |
| STAT_DTC_37_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 37 |
| STAT_DTC_38_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 38 |
| STAT_DTC_38_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 38 |
| STAT_DTC_38_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 38 |
| STAT_DTC_39_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 39 |
| STAT_DTC_39_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 39 |
| STAT_DTC_39_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 39 |
| STAT_DTC_40_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 40 |
| STAT_DTC_40_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 40 |
| STAT_DTC_40_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 40 |
| STAT_DTC_41_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 41 |
| STAT_DTC_41_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 41 |
| STAT_DTC_41_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 41 |
| STAT_DTC_42_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 42 |
| STAT_DTC_42_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 42 |
| STAT_DTC_42_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 42 |
| STAT_DTC_43_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 43 |
| STAT_DTC_43_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 43 |
| STAT_DTC_43_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 43 |
| STAT_DTC_44_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 44 |
| STAT_DTC_44_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 44 |
| STAT_DTC_44_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 44 |
| STAT_DTC_45_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 45 |
| STAT_DTC_45_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 45 |
| STAT_DTC_45_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 45 |
| STAT_DTC_46_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 46 |
| STAT_DTC_46_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 46 |
| STAT_DTC_46_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 46 |
| STAT_DTC_47_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 47 |
| STAT_DTC_47_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 47 |
| STAT_DTC_47_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 47 |
| STAT_DTC_48_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 48 |
| STAT_DTC_48_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 48 |
| STAT_DTC_48_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 48 |
| STAT_DTC_49_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 49 |
| STAT_DTC_49_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 49 |
| STAT_DTC_49_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 49 |
| STAT_DTC_50_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 50 |
| STAT_DTC_50_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 50 |
| STAT_DTC_50_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 50 |
| STAT_DTC_51_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 51 |
| STAT_DTC_51_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 51 |
| STAT_DTC_51_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 51 |
| STAT_DTC_52_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 52 |
| STAT_DTC_52_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 52 |
| STAT_DTC_52_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 52 |
| STAT_DTC_53_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 53 |
| STAT_DTC_53_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 53 |
| STAT_DTC_53_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 53 |
| STAT_DTC_54_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 54 |
| STAT_DTC_54_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 54 |
| STAT_DTC_54_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 54 |
| STAT_DTC_55_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 55 |
| STAT_DTC_55_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 55 |
| STAT_DTC_55_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 55 |
| STAT_DTC_56_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 56 |
| STAT_DTC_56_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 56 |
| STAT_DTC_56_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 56 |
| STAT_DTC_57_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 57 |
| STAT_DTC_57_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 57 |
| STAT_DTC_57_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 57 |
| STAT_DTC_58_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 58 |
| STAT_DTC_58_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 58 |
| STAT_DTC_58_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 58 |
| STAT_DTC_59_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 59 |
| STAT_DTC_59_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 59 |
| STAT_DTC_59_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 59 |
| STAT_DTC_60_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 60 |
| STAT_DTC_60_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 60 |
| STAT_DTC_60_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 60 |
| STAT_DTC_61_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 61 |
| STAT_DTC_61_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 61 |
| STAT_DTC_61_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 61 |
| STAT_DTC_62_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 62 |
| STAT_DTC_62_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 62 |
| STAT_DTC_62_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 62 |
| STAT_DTC_63_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 63 |
| STAT_DTC_63_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 63 |
| STAT_DTC_63_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 63 |
| STAT_DTC_64_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 64 |
| STAT_DTC_64_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 64 |
| STAT_DTC_64_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 64 |
| STAT_DTC_65_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 65 |
| STAT_DTC_65_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 65 |
| STAT_DTC_65_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 65 |
| STAT_DTC_66_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 66 |
| STAT_DTC_66_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 66 |
| STAT_DTC_66_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 66 |
| STAT_DTC_67_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 67 |
| STAT_DTC_67_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 67 |
| STAT_DTC_67_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 67 |
| STAT_DTC_68_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 68 |
| STAT_DTC_68_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 68 |
| STAT_DTC_68_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 68 |
| STAT_DTC_69_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 69 |
| STAT_DTC_69_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 69 |
| STAT_DTC_69_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 69 |
| STAT_DTC_70_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 70 |
| STAT_DTC_70_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 70 |
| STAT_DTC_70_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 70 |
| STAT_DTC_71_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 71 |
| STAT_DTC_71_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 71 |
| STAT_DTC_71_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 71 |
| STAT_DTC_72_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 72 |
| STAT_DTC_72_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 72 |
| STAT_DTC_72_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 72 |
| STAT_DTC_73_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 73 |
| STAT_DTC_73_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 73 |
| STAT_DTC_73_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 73 |
| STAT_DTC_74_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 74 |
| STAT_DTC_74_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 74 |
| STAT_DTC_74_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 74 |
| STAT_DTC_75_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 75 |
| STAT_DTC_75_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 75 |
| STAT_DTC_75_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 75 |
| STAT_DTC_76_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 76 |
| STAT_DTC_76_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 76 |
| STAT_DTC_76_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 76 |
| STAT_DTC_77_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 77 |
| STAT_DTC_77_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 77 |
| STAT_DTC_77_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 77 |
| STAT_DTC_78_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 78  |
| STAT_DTC_78_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 78 |
| STAT_DTC_78_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 78 |
| STAT_DTC_79_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 79 |
| STAT_DTC_79_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 79 |
| STAT_DTC_79_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 79 |
| STAT_DTC_80_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 80 |
| STAT_DTC_80_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 80 |
| STAT_DTC_80_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 80 |
| STAT_DTC_81_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 81 |
| STAT_DTC_81_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 81 |
| STAT_DTC_81_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 81 |
| STAT_DTC_82_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 82 |
| STAT_DTC_82_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 82 |
| STAT_DTC_82_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 82 |
| STAT_DTC_83_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 83 |
| STAT_DTC_83_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 83 |
| STAT_DTC_83_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 83 |
| STAT_DTC_84_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 84 |
| STAT_DTC_84_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 84 |
| STAT_DTC_84_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 84 |
| STAT_DTC_85_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 85 |
| STAT_DTC_85_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 85 |
| STAT_DTC_85_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 85 |
| STAT_DTC_86_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 86 |
| STAT_DTC_86_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 86 |
| STAT_DTC_86_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 86 |
| STAT_DTC_87_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 87 |
| STAT_DTC_87_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 87 |
| STAT_DTC_87_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 87 |
| STAT_DTC_88_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 88  |
| STAT_DTC_88_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 88 |
| STAT_DTC_88_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 88 |
| STAT_DTC_89_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 89 |
| STAT_DTC_89_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 89 |
| STAT_DTC_89_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 89 |
| STAT_DTC_90_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 90 |
| STAT_DTC_90_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 90 |
| STAT_DTC_90_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 90 |
| STAT_DTC_91_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 91 |
| STAT_DTC_91_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 91 |
| STAT_DTC_91_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 91 |
| STAT_DTC_92_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 92 |
| STAT_DTC_92_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 92 |
| STAT_DTC_92_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 92 |
| STAT_DTC_93_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 93 |
| STAT_DTC_93_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 93 |
| STAT_DTC_93_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 93 |
| STAT_DTC_94_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 94 |
| STAT_DTC_94_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 94 |
| STAT_DTC_94_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 94 |
| STAT_DTC_95_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 95 |
| STAT_DTC_95_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 95 |
| STAT_DTC_95_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 95 |
| STAT_DTC_96_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 96 |
| STAT_DTC_96_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 96 |
| STAT_DTC_96_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 96 |
| STAT_DTC_97_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 97 |
| STAT_DTC_97_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 97 |
| STAT_DTC_97_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 97 |
| STAT_DTC_98_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 98  |
| STAT_DTC_98_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 98 |
| STAT_DTC_98_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 98 |
| STAT_DTC_99_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 99 |
| STAT_DTC_99_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 99 |
| STAT_DTC_99_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 99 |
| STAT_DTC_100_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 100 |
| STAT_DTC_100_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 100 |
| STAT_DTC_100_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 100 |
| STAT_DTC_101_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 101 |
| STAT_DTC_101_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 101 |
| STAT_DTC_101_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 101 |
| STAT_DTC_102_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 102 |
| STAT_DTC_102_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 102 |
| STAT_DTC_102_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 102 |
| STAT_DTC_103_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 103 |
| STAT_DTC_103_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 103 |
| STAT_DTC_103_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 103 |
| STAT_DTC_104_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 104 |
| STAT_DTC_104_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 104 |
| STAT_DTC_104_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 104 |
| STAT_DTC_105_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 105 |
| STAT_DTC_105_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 105 |
| STAT_DTC_105_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 105 |
| STAT_DTC_106_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 106 |
| STAT_DTC_106_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 106 |
| STAT_DTC_106_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 106 |
| STAT_DTC_107_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 107 |
| STAT_DTC_107_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 107 |
| STAT_DTC_107_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 107 |
| STAT_DTC_108_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 108  |
| STAT_DTC_108_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 108 |
| STAT_DTC_108_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 108 |
| STAT_DTC_109_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 109 |
| STAT_DTC_109_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 109 |
| STAT_DTC_109_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 109 |
| STAT_DTC_110_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 110 |
| STAT_DTC_110_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 110 |
| STAT_DTC_110_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 110 |
| STAT_DTC_111_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 111 |
| STAT_DTC_111_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 111 |
| STAT_DTC_111_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 111 |
| STAT_DTC_112_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 112 |
| STAT_DTC_112_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 112 |
| STAT_DTC_112_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 112 |
| STAT_DTC_113_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 113 |
| STAT_DTC_113_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 113 |
| STAT_DTC_113_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 113 |
| STAT_DTC_114_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 114 |
| STAT_DTC_114_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 114 |
| STAT_DTC_114_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 114 |
| STAT_DTC_115_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 115 |
| STAT_DTC_115_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 115 |
| STAT_DTC_115_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 115 |
| STAT_DTC_116_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 116 |
| STAT_DTC_116_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 116 |
| STAT_DTC_116_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 116 |
| STAT_DTC_117_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 117 |
| STAT_DTC_117_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 117 |
| STAT_DTC_117_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 117 |
| STAT_DTC_118_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 118 |
| STAT_DTC_118_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 118 |
| STAT_DTC_118_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 118 |
| STAT_DTC_119_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 119 |
| STAT_DTC_119_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 119 |
| STAT_DTC_119_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 119 |
| STAT_DTC_120_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 120 |
| STAT_DTC_120_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 120 |
| STAT_DTC_120_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 120 |
| STAT_DTC_121_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 121 |
| STAT_DTC_121_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 121 |
| STAT_DTC_121_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 121 |
| STAT_DTC_122_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 122 |
| STAT_DTC_122_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 122 |
| STAT_DTC_122_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 122 |
| STAT_DTC_123_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 123 |
| STAT_DTC_123_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 123 |
| STAT_DTC_123_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 123 |
| STAT_DTC_124_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 124 |
| STAT_DTC_124_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 124 |
| STAT_DTC_124_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 124 |
| STAT_DTC_125_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 125 |
| STAT_DTC_125_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 125 |
| STAT_DTC_125_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 125 |
| STAT_DTC_126_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 126 |
| STAT_DTC_126_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 126 |
| STAT_DTC_126_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 126 |
| STAT_DTC_127_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 127 |
| STAT_DTC_127_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 127 |
| STAT_DTC_127_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 127 |
| STAT_DTC_128_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 128 |
| STAT_DTC_128_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 128 |
| STAT_DTC_128_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 128 |
| STAT_DTC_129_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 129 |
| STAT_DTC_129_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 129 |
| STAT_DTC_129_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 129 |
| STAT_DTC_130_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 130 |
| STAT_DTC_130_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 130 |
| STAT_DTC_130_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 130 |
| STAT_DTC_131_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 131 |
| STAT_DTC_131_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 131 |
| STAT_DTC_131_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 131 |
| STAT_DTC_132_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 132 |
| STAT_DTC_132_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 132 |
| STAT_DTC_132_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 132 |
| STAT_DTC_133_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 133 |
| STAT_DTC_133_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 133 |
| STAT_DTC_133_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 133 |
| STAT_DTC_134_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 134 |
| STAT_DTC_134_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 134 |
| STAT_DTC_134_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 134 |
| STAT_DTC_135_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 135 |
| STAT_DTC_135_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 135 |
| STAT_DTC_135_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 135 |
| STAT_DTC_136_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 136 |
| STAT_DTC_136_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 136 |
| STAT_DTC_136_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 136 |
| STAT_DTC_137_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 137 |
| STAT_DTC_137_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 137 |
| STAT_DTC_137_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 137 |
| STAT_DTC_138_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 138 |
| STAT_DTC_138_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 138 |
| STAT_DTC_138_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 138 |
| STAT_DTC_139_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 139 |
| STAT_DTC_139_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 139 |
| STAT_DTC_139_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 139 |
| STAT_DTC_140_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 140 |
| STAT_DTC_140_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 140 |
| STAT_DTC_140_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 140 |
| STAT_DTC_141_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 141 |
| STAT_DTC_141_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 141 |
| STAT_DTC_141_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 141 |
| STAT_DTC_142_HEXCODE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | HexCode von DTC 142 |
| STAT_DTC_142_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 142 |
| STAT_DTC_142_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 142 |

### RES_0XE5FE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAR_OPMO_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll Betriebsart von HVPM an Ladekoordinator |
| STAT_AVL_OPMOCHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist Betriebsart von LDK an HVPM |
| STAT_TAR_OPMO_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll Betriebsart von LDK an internen Lader |
| STAT_AVL_OPMO_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist Betriebsart von internem Lader an LDK |
| STAT_TAR_OPMO_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll Betriebsart von LDK an externen Lader |
| STAT_AVL_OPMO_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist Betriebsart von externem Lader an LDK |
| STAT_TAR_CHG_MOD_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Lademodus des externer Laders (1- oder mehrphasig) |
| STAT_AVL_CHG_MOD_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Lademodus der Komfort Ladeelektronik (1- oder mehrphasig) |
| STAT_TAR_PWR_CHGNG_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sollleistung von HVPM an LDK |
| STAT_AVL_PWR_CHGNG_WERT | W | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Istleistung von LDK an HVPM |
| STAT_TAR_PWR_INTLE_WERT | W | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Sollleistung von LDK an interen Lader |
| STAT_AVL_PWR_INTLE_WERT | W | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ist-HV-Leistung des internen Laders |
| STAT_TAR_PWR_CF_CHGE_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollleistung von LDK an exteren Lader |
| STAT_AVL_PWR_CF_CHGE_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist-HV-leistung von externem Lader |
| STAT_SPEC_I_MAX_ALTC_CHGE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | HVPM-Vorgabe des maximal zulässigen AC-Leiterstromes (Effektivwert) für alle verfügbaren Netzphasen |
| STAT_SPEC_I_MAX_ALTC_CF_CHGE_WERT | A | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Vorgabe des maximal zulässigen AC-Leiterstromes (Effektivwert) für alle verfügbaren Netzphasen - Externer Lader. |
| STAT_SPEC_I_MAX_DC_CHGE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | HVPM-Vorgabe der maximal zulässigen DC-HV-Stromobergrenze |
| STAT_AVL_I_CHGE_WERT | A | high | signed int | - | - | 0.1 | 1.0 | -204.7 | Information über den aktuell von der LDK abgegebenen DC-HV-Strom |
| STAT_SPEC_I_MAX_DC_INTLE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Stromobergrenze - Interner Lader. |
| STAT_AVL_I_INTLE_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Information über den aktuell von der KLE abgegebenen DC-HV-Strom - Interner Lader |
| STAT_SPEC_I_MAX_DC_CF_CHGE_WERT | A | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Stromobergrenze - Externer Lader. |
| STAT_AVL_I_CF_CHGE_WERT | A | high | signed int | - | - | 0.1 | 1.0 | -204.7 | Information über den aktuell von der KLE abgegebenen DC-HV-Strom - Externer Lader |
| STAT_SPEC_U_MAX_CHG_CHGE_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | HVPM-Vorgabe der maximal zulässigen DC-HV-Spannungsobergrenze der Ladeelektronik. |
| STAT_AVL_U_CHGE_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | von Ladegeraeten gemessene HV-Spannung (Max aus internem und externem Lader) |
| STAT_SPEC_U_MAX_INTLE_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Spannungsgrenze - Interner Lader. |
| STAT_AVL_U_INTLE_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ist-HV-Spannung von internem Lader |
| STAT_SPEC_U_MAX_CF_CHGE_WERT | V | high | signed int | - | - | 0.25 | 1.0 | 0.0 | Vorgabe der maximal zulässigen DC-HV-Spannungsgrenze - Externer Lader. |
| STAT_AVL_U_CF_CHGE_WERT | V | high | signed int | - | - | 0.1 | 1.0 | 0.0 | Ist-HV-Spannung von externem Lader |
| STAT_AVL_U_CHGE_ALTC_WR_1_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geglätteter und gefilterter AC-Spannungseffektiv-Istwert zwischen Leiter 1 und Nullleiter (Internes Ladegeraet) |
| STAT_AVL_U_1_CF_CHGE_ALTC_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geglätteter und gefilterter AC-Spannungseffektiv-Istwert zwischen Leiter 1 und Nullleiter (externes Ladegeraet) |
| STAT_AVL_U_2_CF_CHGE_ALTC_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geglätteter und gefilterter AC-Spannungseffektiv-Istwert zwischen Leiter 2 und Nullleiter (externes Ladegeraet) |
| STAT_AVL_TEMP_CHGE_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | -48.0 | Aktuelle Temperatur der Ladeelektronik. |
| STAT_AVL_TEMP_INTLE_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Temperatur des internen Laders. |
| STAT_AVL_TEMP_CF_CHGE_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | -48.0 | Aktuelle Temperatur des externenLaders. |
| STAT_PWR_HV_STAT_AVLB_DER_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Derating-Leistung der Ladeelektronik |
| STAT_PWR_HV_STAT_AVLB_INTLE_DER_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Derating-Leistung des internen Laders |
| STAT_PWR_HV_STAT_AVLB_CF_CHGE_DER_WERT | W | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Aktuelle Derating-Leistungsobergrenze der ExtLe. |
| STAT_REAS_FAILSAFE_CHGNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Information über den Auslöser für den Zustand Failsafe |
| STAT_REAS_FAILSAFE_INTLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Information über den Auslöser für den Zustand Failsafe des internen Laders |
| STAT_REAS_CON_VRFD_CF_CHGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Information über den Auslöser für den Zustand Failsafe im externen Lader. |
| STAT_REAS_DER_CHGNG_WERT | - | high | unsigned char | - | - | - | - | - | Information über die Deratingursache der Ladeelektronik |
| STAT_REAS_DER_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über die Deratingursache des internen Laders |
| STAT_REAS_DER_CF_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über die Deratingursache des externen Laders |
| STAT_ST_ERR_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über Fehlerzustände der Ladeelektronik |
| STAT_ST_ERR_INTLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über Fehlerzustände des internen Laders |
| STAT_ST_ERR_CF_CHGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über Fehlerzustände des externer Laders |
| STAT_FREQWR_CHGNG_WERT | Hz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequenz AC-Netz der Ladeelektronik |
| STAT_FREQWR_INTLE_WERT | Hz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequenz AC-Netz des internen Laders |
| STAT_FREQWR_1_CF_CHGE_ALTC_WERT | Hz | high | unsigned long | - | - | 0.25 | 1.0 | 0.0 | Geglättete und gefilterte AC-Netzfrequenz zwischen Leiter 1 und Nulleiter des externen Laders. |
| STAT_FREQWR_2_CF_CHGE_ALTC_WERT | Hz | high | unsigned long | - | - | 0.25 | 1.0 | 0.0 | Geglättete und gefilterte AC-Netzfrequenz zwischen Leiter 2 und Nulleiter des externen Laders. |
| STAT_AVL_EFFY_CHGNG_CYC_WERT | % | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Effizienz der Ladeelektronik |
| STAT_AVL_EFFY_INTLE_CYC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Effizienz des internen Laders |
| STAT_AVL_EFFY_CF_CHGNG_CYC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Effizienz des externen Laders |
| STAT_TAR_CHGNG_TYP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorgabe-Ladetyp durch HVPM (konduktiv, induktiv) |
| STAT_AVL_CHGNG_TYP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Ladetyp Rückmeldung durch LDK (konduktiv, induktiv) |

### RES_0XE5FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVL_CUTIL_DCDC_CNV_WERT | % | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslastung DCDC |
| STAT_AVL_I_HV_DCDC_WERT | A | high | signed long | - | - | 0.1 | 1.0 | 0.0 | Momentaner HV-Strom des DC/DC-Wandlers |
| STAT_AVL_I_LV_DCDC_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC Wandler: IST-Strom LV-Seite am B+ Bolzen |
| STAT_AVL_OPMO_DCDC_CNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Betriebsart des DCDC-Wandlers |
| STAT_AVL_U_DCDC_CNV_HV_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_AVL_U_LV_DCDC_CNV_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | DCDC Wandler: IST-Spannung LV-Seite am B+ Bolzen |
| STAT_SPEC_PWR_DCDC_CNV_MAX_WERT | W | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kommandierte maximale HV-Leistung |
| STAT_ST_DCDC_CNV_DIAG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Status welche Stromgrenze/welches Derating des DCDC-Wandlers aktiv ist |
| STAT_ST_ERR_DCDC_CNV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktiven/inaktiven Fehler des DC/DC Wandlers - bitcodiert |
| STAT_TAR_OPMO_DCDC_CNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Betriebsart des DC/DC-Wandlers: 1: Standby 2: Buck 5: AC-Notladen |
| STAT_TAR_U_LV_DCDC_CNV_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Soll-LV-Spannung des DCDC-Wandlers im Buck-Betrieb (Maximaler Wert) |
| STAT_U_DCDC_CNV_HV_MIN_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimal zulässige HV-Spannungsgrenze |
| STAT_V_B_DCDC_HI_ENABLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DCDC-enabled-Signal (HW-Signal zum aktivieren der DCDC-HW) |
| STAT_V_E_DCDC_BTS_STATUS_MC6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status der Bauteilschutzdiagnosen auf dem MC6 (PIC) - bitcodiert |
| STAT_V_E_DCDC_CTRL_STATUS_MC6_PKR2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status des DC/DC-Controllers (von PIC) - bitcodiert (nur PKR2!) |
| STAT_V_E_DCDC_HI_ST_OUT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Ursache für die Begrenzungsgrößen des DC/DC-Wandlers. |
| STAT_V_E_DCDC_MC0_CTRL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Status und Steuerungsbits für den DCDC: Bit 0:   Freigabesignal (bei 1) für den Frequenzmodulation-Betrieb im DCDC Bit 1:   KL15-Status Bit 2: Status ELUP Anlauf (1: aktiv) (Bit 2 - nur für PKR2!) |
| STAT_V_H_SPI_DCDC_0_SPI_DATA_E_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status SPI-Kommunikation aus Sicht von MC0 |
| STAT_V_H_SPI_DCDC_6_SPI_DATA_E_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status SPI-Kommunikation aus Sicht von MC6 |
| STAT_V_I_DCDC_HV_MC6_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | HV-Strom |
| STAT_V_I_DCDC_TRA1_MC6_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Transformator Strom |
| STAT_V_I_DCDC_TRA_FIL_WERT | A | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Gefilterter Transformator Strom |
| STAT_V_S_DCDC_PWM_HTS1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einschaltdauer Tiefsetzsteller 1 (nur für non-PKR2 Software!)  Gegentaktwandler Phasenverschiebung zwischen HSS1 und HSS2 (nur PKR2!) |
| STAT_V_S_DCDC_PWM_HTS2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einschaltzeit Tiefsetzsteller 2 (nur für non-PKR2 Software!)  Einschaltzeit Gleichrichter (nur PKR2!) |
| STAT_V_S_DCDC_SW_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DCDC SW-Version |
| STAT_V_T_DCDC_BO_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperatur DCDC Board |
| STAT_V_T_DCDC_GR_MC6_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperatur Gleichrichter |
| STAT_V_T_DCDC_GTW_MC6_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperatur Gegentaktwandler |
| STAT_V_U_DCDC_GT_MC6_PKR2_WERT | V | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gatetreiber-Versorgungsspannung (nur PKR2!) |
| STAT_V_U_DCDC_LV_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | LV Ist-Spannung |
| STAT_V_U_DCDC_LV_CAL_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Rohsignal LV Spannungsmessung DCDC Wandler |
| STAT_V_U_DCDC_LV_SOLL_WERT | V | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | LV-Soll-Spannung-Vorgabe |
| STAT_V_I_DCDC_TS1_MC6_RUKO_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Tiefsetzsteller Phase1 Strom (nur für non-PKR2 Software!) |
| STAT_V_I_DCDC_TS2_MC6_RUKO_WERT | A | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Tiefsetzsteller Phase 2 Strom (nur für non-PKR2 Software!) |
| STAT_V_T_DCDC_TS_MC6_RUKO_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Tiefsetzsteller Temperatur (nur für non-PKR2 Software!) |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERARBEITUNGSSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_VERARBEITUNGSSTATUS | - | - | - | Aktueller Zustand der Verarbeitung |
| STAT_ZAEHLER_EBF_MC0_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC0, Anzahl der detektierte Einzel-Bit-Fehler |
| STAT__ZAEHLER_DBF_MC0_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC0, Anzahl der detektierte Doppel-Bit-Fehler |
| STAT_ZAEHLER_EBF_MC2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC2, Anzahl der detektierte Einzel-Bit-Fehler |
| STAT_ZAEHLER_DBF_MC2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MC2, Anzahl der detektierte Doppel-Bit-Fehler |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RATIO_IDENT_WERT | + | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kennzeichnet den RBM Ratio, der bearbeitet wurde |
| STAT_DENOMINATOR_CLASSES_WERT | + | - | + | HEX | high | unsigned char | - | - | - | - | - | Denomimator Klassifikation des Ratio |
| STAT_DTC_UDS_WERT | + | - | + | HEX | high | unsigned long | - | - | - | - | - | UDS Fehlercode |
| STAT_COMMON_CYCLES_WERT | + | - | + | HEX | high | unsigned char | - | - | - | - | - | Aktueller interner Zustand der RBM Cycles |
| STAT_CURRENT_RATIO_TEST_PROC | + | - | + | 0-n | high | unsigned char | - | RATIO_TEST_PROC_TAB | - | - | - | Aktuell ausgeführte Testfunktion |
| STAT_RATIO_STATUS_WERT | + | - | + | HEX | high | unsigned char | - | - | - | - | - | Interner Verarbeitungszustand des RBM ratio. |
| STAT_NUMERATOR_WERT | + | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rate Based Monitoring Numerator, laufender Wert |
| STAT_DENOMINATOR_WERT | + | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rate Based Monitoring Denominator, laufender Wert |

### RES_0XF010_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GAIN_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_OFFSET_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_EXPONENT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 100000.0 | 0.0 | Zusätzliche Skalierung |

### RES_0XF012_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRM_ISR_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Protectionmanager: Status der ISR |
| STAT_HVSM_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Status Mc0 |
| STAT_HVSM_AKKUM_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Akkum. Status MC0 |
| STAT_HVSM_MC2_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Status Mc2 |
| STAT_HVSM_AKKUM_MC2_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | HVSM: Akkum. Status MC2 |
| STAT_FUSI_MC2_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | FUSI: UWB MC2 |
| STAT_FUSI_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | FUSI: UWB MC0 |
| STAT_SSD_MC0_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | SSD: Status vom mc0 |
| STAT_ZEIT_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Zeitstempel in hex |
| STAT_KILOMETERSTAND_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_FRM_WHY_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | FRM: Why-Wort (welcher DTC war verantwortlich für den AKS) |
| STAT_FRM_EM2_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | FRM: Statusbits (Fehler prio) |
| STAT_POM_1MS_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Protectionmanager: Status der 1ms |
| STAT_POM_10MS_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Protectionmanager: Status der 10ms |
| STAT_ERR_MOT_TRCT_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | St Error Statuswort der E-Maschine |
| STAT_BAM_STATUS_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Status Betriebsartenmanager |
| STAT_CPLD_INFO_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | CPLD: Info |
| STAT_ERR_UPDATE_IN_PROGRESS_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Laufzeit: Update-In-Progress Fehler |

### RES_0XF050_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS | - | - | + | 0-n | high | signed char | - | TAB_AKTIV | - | - | - | Status Freilauf: 0=inaktiv; 1=aktiv |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| AKS_DIAG_STATUS_INFO | 0x4009 | - | Abfrage von AE-Statusbits zur Diagnose und Zuordnung von AKSen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4009_D |
| AE_SN_SETZEN | 0x400C | - | Seriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| AE_HWCAL_SETZEN | 0x400D | - | Hardware Kalibrierungsdaten der AE setzen Es kann nicht die Seriennummer gesetz werden (eigener Job _steuern_sn_setzen)!!! | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D_D | - |
| AE_HWCAL_FLASHEN | 0x400E | - | Schreibt die HWCALs eines bestimmten Blocks ins Flash | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400E_D | - |
| AE_HWCAL_MODE | 0x400F | - | SG in den HWCAL Flash-Mode bringen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400F_D | - |
| STEUERN_START_LADEN | 0xADC0 | - | Ladestart anfordern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC0_R | - |
| STEUERN_STOP_LADEN | 0xADC1 | - | Ladestop anfordern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC1_R | - |
| REX_ON_OFF | 0xADC4 | - | Ein-/Ausschalten des Range Extender Verbrennungsmotor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADC4_R | - |
| LAST_HISTOGRAMM_EMASCHINE | 0xADEB | - | Auslesen Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADEB_R | RES_0xADEB_R |
| EME_DCDC_WANDLER | 0xADF1 | - | Steuern oder Auslesen des Status vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF1_R | RES_0xADF1_R |
| EME_HV_SYSTEM_ON_OFF | 0xADF2 | - | HV-System hoch-/runterfahren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF2_R | RES_0xADF2_R |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4_R | RES_0xADF4_R |
| AE_ROTORLAGESENSOR_ANLERNEN | 0xADF6 | - | Anlernen Rotorlagesensor (TA-EOL STEUERN) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF6_R | RES_0xADF6_R |
| AE_KLASSIERUNG | 0xADF8 | - | Auslesen der  Drehzahl/Drehmoment-Klassierungsdaten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF8_R | RES_0xADF8_R |
| AE_DCDC_HISTOGRAMM | 0xADF9 | - | Lesen des angeforderten Histogramm des DCDC-Wandlers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF9_R | RES_0xADF9_R |
| LADEHISTORIE_SATZ_LESEN | 0xADFC | - | Liest die Sätze der Ladehistorie aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFC_R | RES_0xADFC_R |
| KLASSIERUNG_ZUG_SCHUB | 0xADFE | - | Aktuelle Daten der Klassierung Zug/Schub-LW auslesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFE_R | RES_0xADFE_R |
| LADEGERAET_HISTOGRAMM_LESEN | 0xAF42 | - | Histogramme des Ladegeräts auslesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAF42_R | RES_0xAF42_R |
| EME_DCDC_LV | 0xDDF6 | - | Spannung / Strom DCDC (12V Bordnetz) am B+ Bolzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF6_D |
| EME_HVPM_DCDC_ANSTEUERUNG | 0xDE00 | - | Rückgabewerte vom HVPM für DCDC Ansteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE00_D |
| EME_HVPM_HV_SYSTEM_ON_OFF | 0xDE02 | - | Hochvoltsystem An / Aus (HVPM 2013) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE02_D |
| EME_HVPM_ENERGIEBORDNETZ_2 | 0xDE04 | - | Anzahl der Herstellung von Fahrbereitschaft im SOC Bereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE04_D |
| EME_HVPM_PKOR | 0xDE06 | - | HVPM Leistungskoordinator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE06_D |
| EME_HVPM_INFOSPEICHER_PKOR_LOESCHEN | 0xDE08 | - | Alle Infospeicher des Diagnosejobs STATUS_HVPM_PKOR werden auf Null gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE08_D | - |
| EME_HVPM_INFOSPEICHER_STRZLR_LOESCHEN | 0xDE09 | - | Löschen des Infospeichers:  HVPM_DCDC_ALS | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE09_D | - |
| EME_HVPM_INFOSPEICHER_SPMON_LOESCHEN | 0xDE0A | - | Löschen des Infospeichers HVPMP (SPMON) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE0A_D | - |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | - | High | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ANSTEUERUNG_ELUP | 0xDE0E | STAT_ANST_ELUP_ON | Aktueller Schaltzustand ELUP (0 - Aus; 1 - Ein) | 0/1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ELUP | 0xDE19 | - | Anzahl der Bremsbetätigungen, Laufzeit und Anläufe der ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE19_D | RES_0xDE19_D |
| EME_HVPM_DCDC_ALS | 0xDE1C | - | HVPM DCDC ALS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE1C_D |
| AE_CPLD_VERSION | 0xDE2D | STAT_CPLD_VERSION_WERT | CPLD-Version | - | V_e_CpldVersion | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SYSTEMLEISTUNG_INV_EM | 0xDE39 | - | Bewertung der Systemleistung des Verbundes INV&EM. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE39_D |
| EME_HVPM_KONFIGURATION_LADEEINSTELLUNG | 0xDE3E | - | Konfuguration Laden oder Günstig-Laden als gültige Schnittstelle | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE3E_D | RES_0xDE3E_D |
| AE_PARKSPERRE_VARIANTE | 0xDE69 | - | Variante Parksperre | - | LayerOutDura_DIAGVal | - | - | - | - | - | - | - | 22;2E | ARG_0xDE69_D | RES_0xDE69_D |
| AE_LSC_LADEN_2 | 0xDE6E | - | Last State Call Laden (Erweitert) Rückmeldung zum Ladeverfahren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE6E_D |
| AE_CHARGE_ENABLE | 0xDE71 | STAT_CHARGE_ENABLE_NR | Aussage über die Erteilung der Ladefreigabe | 0-n | ST_CHGNG_ENB | High | unsigned char | TAB_AE_CHARGE_ENABLE | - | - | - | - | 22 | - | - |
| AE_PARKSPERRE_SENSOREN | 0xDE74 | - | Status Sensoren der Parksperre | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE74_D |
| AE_HV_SPANNUNG_LESEN | 0xDE75 | - | Werte aller Zwischenkreisspannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE75_D |
| AE_PARKSPERRE_SW | 0xDE76 | STAT_PS_SW_NR | Status Parksperren Software | 0-n | VaPS_Quallifier_CanTx | High | unsigned char | TAB_AE_PARKSPERREN_SW | - | - | - | - | 22 | - | - |
| AE_PARKSPERRE | 0xDE77 | - | Zustand Parksperre / Einlegen Parksperre | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE77_D | - |
| AE_PARKSPERRE_EINLERNEN | 0xDE78 | - | Parksperre / Einlernen Parksperre | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE78_D | RES_0xDE78_D |
| AE_PARKSPERRE_POSITION | 0xDE79 | STAT_POSITION_PARKSPERRE_NR | Aktuelle Position der Parksperre | 0-n | - | High | unsigned int | TAB_AE_PARKSPERRE_POSTION | - | - | - | - | 22 | - | - |
| AE_PARKSPERRE_POSITIONEN | 0xDE7A | - | Schreiben der Parksperrenpositionen oder Rückgabe der angelernten Parksperrenpositionen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE7A_D | RES_0xDE7A_D |
| AE_PARKSPERRE_STROM | 0xDE7B | STAT_STROM_PARKSPERRE_WERT | Aktueller Strom Parksperrenaktuator | A | V_I_Psa | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_PARKSPERRE_SPANNUNGEN | 0xDE7C | - | Spannungen der Parksperre | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7C_D |
| AE_ROHSIG_AUSGANG | 0xDE7D | - | Rohsignale Ausgangspins | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7D_D |
| AE_ROHSIG_EINGANG_SENS_ELUP_BUDS | 0xDE7E | - | Rohsignale Ausgangspins Sensoren ELUP, BUDS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7E_D |
| AE_ROHSIG_EINGANG_SENS_EM_INV | 0xDE7F | - | Rohsignale Sensoren/Eingänge für E-Maschine/Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE7F_D |
| AE_ROHSIG_EINGANG_SENS_PARKSPERRE | 0xDE80 | - | Rohsignale Sensoren/Eingänge Parksperre | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE80_D |
| AE_ROHSIG_EINGANG_SENS_SG | 0xDE81 | - | Rohsignale Sensoren/Eingänge Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE81_D |
| AE_ROHSIG_EINGANG_SENS_SLE | 0xDE82 | - | Rohsignale Sensoren/Eingänge SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE82_D |
| AE_ROHSIG_EINGANG_SENS_DCDC | 0xDE83 | - | Rohsignale Sensoren/Eingänge DC/DC Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE83_D |
| AE_BETRIEBSZUSTAND_SLE | 0xDE84 | - | Betriebsarten SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE84_D |
| AE_SLE_LEISTUNG | 0xDE85 | - | Leistungswerte Zwischenkreis der SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE85_D |
| AE_SLE_SPANNUNG | 0xDE86 | - | AC und DC Spannungen SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE86_D |
| AE_SLE_STROM | 0xDE87 | STAT_STROM_TRAFO_WERT | kalibrierter SLE Trafostrom | A | V_I_SleLlcHvAmpFil | High | unsigned int | - | 0.01 | 1.0 | -100.0 | - | 22 | - | - |
| AE_SPANNUNG_KLEMME30B | 0xDE88 | STAT_SPANNUNG_KL30B_WERT | aktuelle Spannung an KL30B | V | V_U_Int12V | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| AE_STROM_DCDC | 0xDE89 | - | Ströme DC/DC Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE89_D |
| AE_STROM_EMASCHINE | 0xDE8A | - | Ströme E-Maschine / Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8A_D |
| AE_TEMP_LE | 0xDE8C | - | Temperaturen Steuergerät Antriebselektronik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8C_D |
| AE_ZUSTAND_1_DCDC | 0xDE92 | - | Status DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE92_D |
| AE_ELUP | 0xDE93 | - | aktueller Zustand ELUP bzw. aktivieren/deaktivieren ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE93_D | RES_0xDE93_D |
| AE_PARKSPERRE_NVRAM_LOESCHEN | 0xDE95 | - | Löscht NV-RAM Daten der Parksperre | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE95_D | - |
| AE_ZUSTAND_DCDC_FEHLERBILD | 0xDE96 | - | Rückgabe aktiver/inaktiver Fehler DC/DC-Wandler | Bit | V_e_DcdcHl_ErSt_out | - | BITFIELD | RES_0xDE96_D | - | - | - | - | 22 | - | - |
| STATUS_CONNECTED_DRIVE | 0xDE9E | - | Informationen über Connected Drive | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE9E_D |
| LADEHISTORIE | 0xDEA1 | - | Lesen/Löschen der Ladehistorie | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEA1_D | RES_0xDEA1_D |
| AE_BUDS | 0xDEA5 | STAT_BUDS_WERT | Sensorwert des Bremsunterdrucks | hPa | AVL_LOWP_BRKFA | High | unsigned char | - | 4.0 | 1.0 | -1000.0 | - | 22 | - | - |
| AE_TEMP_EMASCHINE | 0xDEA6 | - | Wert der aktuellen Temperaturen der E-Maschine in Grad Celsius | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA6_D |
| AE_ELEKTRISCHE_MASCHINE | 0xDEA7 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA7_D |
| AE_ZUSTAND_2_DCDC | 0xDEA9 | - | Rückgabe verschiederer Status vom DCDC-Wandler | Bit | V_e_DcdcHl_St_out | - | BITFIELD | RES_0xDEA9_D | - | - | - | - | 22 | - | - |
| LADEHISTOGRAMM | 0xDEAE | - | Lesen/Löschen von Histogramm und Zähler aller Ladevorgänge (Elektrofahrzeug und Plug-In-Hybrid) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEAE_D | RES_0xDEAE_D |
| AE_PARKSPERRE_VERSION | 0xDEB0 | - | Rückgabe der aktuellen Version der Parksperren-SW | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEB0_D |
| AE_ROTORLAGESENSOR | 0xDEB1 | - | Direktes Schreiben oder Auslesen des Resolveroffset Winkels | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEB1_D | RES_0xDEB1_D |
| AE_DCDC_TEMPHISTOGRAMM_LESEN | 0xDEB2 | - | Auslesen Temperatur-Histogramme DCDC / Rücksetzen Temperatur-Histogramme (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB2_D | - |
| AE_DCDC_LEISTUNGSHISTOGRAMM | 0xDEB3 | - | Auslesen Leistungs-Histogramme DCDC-Wandler / Zurücksetzen Leistungs-Histogramme (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB3_D | - |
| AE_RESET_TEMP_MIN_MAX | 0xDEB4 | - | Rücksetzen der minimalen und maximalen Temperatur des DC/DC Wandlers (0 = kein Reset; 1 = Reset) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB4_D | - |
| AE_ROTORLAGESENSOR_RESET | 0xDEB6 | - | Zurücksetzen des Resolveroffsetwinkels | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB6_D | - |
| AE_KLASSIERUNG_LOESCHEN | 0xDEB7 | - | Loeschen der gesamten Klassierungsdaten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB7_D | - |
| AE_CTRL_VERSION | 0xDEBC | STAT_CTRL_VERSION_WERT | Controllerbord-Version | - | V_e_CtrlVarIn | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SPANNUNG_DCDC | 0xDEBD | STAT_SPANNUNG_LV_WERT | DC/DC-Spannung Niedervoltseite | V | V_U_DcdcLv | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SPANNUNG_LE | 0xDEBE | - | Interne Spannungen der Leistungselektronik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEBE_D |
| AE_SYSSTATE | 0xDEBF | - | Interne Statuszustände des Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEBF_D |
| SPANNUNG_ELUP | 0xDEC2 | STAT_U_ELUP_WERT | Spannungspegel am ELUP - Ausgang der EME | V | HWE_UElupPin | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| STROM_ELUP | 0xDEC3 | STAT_I_ELUP_WERT | Spannungspegel am ELUP - Ausgang der EME | A | HWE_IElupShunt | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| REX_RESONANZ | 0xDED1 | - | Auslesen der gelernten Resonanzbereiche / Einlernen der Resonanzbereiche | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDED1_D | RES_0xDED1_D |
| AE_FAHRSTUFE | 0xDEDD | STAT_POS_PRND_NR | aktuelle Ist-Position des Antriebsstrangs (PRND) | 0-n | Hym_Vetrgr_e_achvdtrnspos | High | unsigned char | TAB_AE_FAHRSTUFE | - | - | - | - | 22 | - | - |
| AE_LSC_LADEN | 0xDEDE | - | Rückmeldung zum Ladeverfahrens | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEDE_D |
| UI_DERATING_EM1 | 0xDEDF | - | Auslesen oder Rücksetzen UI Derating Werte von E-Maschine 1 | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEDF_D | RES_0xDEDF_D |
| UI_DERATING_EM2 | 0xDEE0 | - | Auslesen oder Rücksetzen UI Derating Werte von E-Maschine 2 | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEE0_D | RES_0xDEE0_D |
| KLASSIERUNG_ZUG_SCHUB_LOESCHEN | 0xDEE5 | - | Löschen der gesamten Zug/Schub-Lastwechselklassierung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEE5_D | - |
| HISTOGRAMM_ANTRIEB | 0xDEED | - | Historienwerte für Antrieb | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEED_D |
| REX_HISTOGRAMM | 0xDEEE | - | Auslesen oder Rücksetzen des Histogramms vom Range Extender | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDEEE_D | RES_0xDEEE_D |
| HISTOGRAMM_DEGRADATION | 0xDEEF | - | Historienwerte Degradation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEEF_D |
| AUTOP_SBW | 0xDEFB | - | Häufigkeitszähler für die Gründe von Auto-P und SW Version Shift-by-Wire | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEFB_D |
| FAHRSTUFEN_ZAEHLER_SBW | 0xDEFF | - | Häufigkeitszähler von Fahrstufenwechsel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEFF_D |
| VERBAUKENNUNG_UCX_RUECKSETZEN | 0xDF1F | - | Rücksetzen der Verbauerkennung des AC-UCX Steuergerätes (Jobdauer 1s; Status persistent, nur über steuergeraete_reset oder Einschlafen) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF1F_D | RES_0xDF1F_D |
| LADESTROM_EINSTELLUNG | 0xDF45 | - | Einstellung Stromgrenzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF45_D | - |
| HISTOGRAMM_LADEKOORDINATOR | 0xDF49 | - | Histogramme des Ladekoordinators | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF49_D |
| INVERTER_HISTOGRAMM | 0xDF4D | - | Auslesen der berechneten Lebenszeitdaten des Inverters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF4D_D |
| LADEMODUS_WERK | 0xDF50 | - | Setzen und Auslesen des Werkslademodus (Laden auf vorgegebenen SOC) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF50_D | RES_0xDF50_D |
| ELUP_DATEN_RESET | 0xDF51 | - | Zurücksetzen aller Statisikdaten der ELUP | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF51_D | - |
| ROTORLAGESENSOR_WINKELCODE | 0xDF52 | - | Setzen und Auslesen des Resolveroffsetwinkels nach Entschlüsseln | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF52_D | RES_0xDF52_D |
| INVERTER_RBM_INFO | 0xDF58 | - | RBM Information für die nicht durchlaufende Umrichter Diagnose im I01 und I12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF58_D |
| DCDC_RBM_INFO | 0xDF59 | - | RBM Information für die nicht kontinuierliche DC/DC-Wandler Diagnose in I01 und I12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF59_D |
| LADEGERAET_RBM_INFO | 0xDF5A | - | RBM Information für die nicht kontinuierliche Ladegerät Diagnose bei I01 und I12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF5A_D |
| LIEFERANT_TRACE_NUMMER | 0xDF5B | STAT_TRACE_NUMMER_TEXT | 29 Byte SG-Hersteller Tracenummer | TEXT | - | High | string[29] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LAST_HISTOGRAMM_EMASCHINE_RESET | 0xDF5D | - | Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF5D_D | - |
| LADEGERAET_KONFIGURATION | 0xDFB3 | - | Konfiguration verbauter (verbauten) Ladegerättyp(en) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFB3_D | RES_0xDFB3_D |
| LADEGERAET_HISTOGRAMM_RESET | 0xDFB4 | - | Zurücksetzen der Histogramme vom Ladegerät | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFB4_D | - |
| LADEGERAET_TEMPERATUR_HISTOGRAMM | 0xDFB5 | - | Temperatur-Histogramme der innerhalb der Antriebselektronik (AE) vorhandenen Ladeelektronik (SLE) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB5_D |
| LADEGERAET_HV_UEBERSTROM | 0xDFB7 | STAT_ZAEHLER_HV_UEBERSTROM_WERT | Ladegerät Überstromzähler auf Basis HV DC-Stromsensorrohwert | - | V_cnt_IHV_Treshold | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EMASCHINE_MAX_DREHZAHL | 0xDFCE | - | Auslesen der Absolutzeit im kritischen E-Maschinen Drehzahl Bereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFCE_D |
| LAST_HISTOGRAMM_EMASCHINE_LESEN | 0xDFD0 | - | Auslesen der Histogramme der Elektromaschine (Drehzahl, Drehmoment, Vorzeichenwechsel Drehmoment) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD0_D |
| RATE_BASED_MONITORING | 0xE52F | - | RBM Daten zu nicht kontinuierlichen Diagnosen inkl. Dependant Secondaries. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE52F_D |
| LADEKOORDINATOR_INTERFACE | 0xE5FE | - | Schnittstellen von Ladekoordinator zu HVPM und Ladern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FE_D |
| DCDC_MESSGROESSEN_KOMPLETT | 0xE5FF | - | Status aller verfügbaren DCDC Messgrössen für beide PKR2 und nicht-PKR2 Software | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5FF_D |
| NV_FLASH_PRUEFEN | 0xF000 | - | NV-Flash auf Lesefehler prüfen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| RBM_TEST | 0xF001 | - | Start des Tests von Rate Based Monitoring | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001_R | RES_0xF001_R |
| AE_HWCAL_LESEN | 0xF010 | - | Auslesen der HWCALs anhand von Blocknummer und Prozessor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | RES_0xF010_R |
| AE_RESETINFO_LESEN | 0xF011 | - | Auslesen der Resetinfo aus dem Flash | - | - | - | - | - | - | - | - | - | 31 | - | - |
| AKS_DIAG_STATUS_SELECT | 0xF012 | - | Abfrage von AE-Statusbits zur Diagnose und Zuordnung von AKSen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF012_R | RES_0xF012_R |
| AE_FREILAUF_MODUS | 0xF050 | - | Freilauf Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF050_R |

### ST_CHGNHG_VALUES

| WERT | TEXT |
| --- | --- |
| 0 | No Charging |
| 1 | Initialization |
| 2 | Charging |
| 3 | Charge Pause |
| 4 | Charge Completed |
| 5 | Error |

### ST_CHGRDY_VALUE

| WERT | TEXT |
| --- | --- |
| 0 | Inactive |
| 1 | Active |
| 3 | Invalid |

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

### TAB_AE_CHARGE_ENABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | wahr |
| 0x02 | falsch |
| 0x03 | ungültig |

### TAB_AE_DCDC_HISTOGRAMM

| WERT | TEXT |
| --- | --- |
| 0x00 | PHistoF |
| 0x01 | PHistoL |
| 0x02 | T1HistoF |
| 0x03 | T1HistoL |
| 0x04 | T2HistoF |
| 0x05 | T2HistoL |
| 0x06 | T3HistoF |
| 0x07 | T3HistoL |
| 0x08 | T4HistoF |
| 0x09 | T4HistoL |
| 0x0A | rUtil |
| 0x0B | rUtilF |
| 0x0C | rTSL |
| 0x0D | rTSF |

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

### TAB_AE_ELUP_ROHSIGNALE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht definiert |
| 0x01 | Ausschalten |
| 0x02 | Einschalten |

### TAB_AE_ELUP_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion! |
| 0x01 | ELUP ansteuern |

### TAB_AE_FAHRSTUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | ungültig |
| 0x02 | ungültig |
| 0x03 | ungültig |
| 0x04 | ungültig |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | P |
| 0x0F | ungültig |

### TAB_AE_LADESTECKER_LSC_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladekabel angesteckt |
| 0x01 | Ladekabel angesteckt |
| 0x02 | Fehler |

### TAB_AE_MOMENTENKLASSE_GANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Gang 1: -250 Nm bis + 350 Nm |
| 0x01 | Gang 2: - 250 Nm bis + 350 Nm |

### TAB_AE_PARKSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Einlegen der Parksperre |
| 0x02 | Auslegen der Parksperre |

### TAB_AE_PARKSPERREN_SW

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Fehler |
| 0x01 | Fehler steht an! |

### TAB_AE_PARKSPERRE_EINLERNEN_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler, Einlernen erfolgreich beendet |
| 0x01 | Fahrzeuggeschwindigkeit zu hoch |
| 0x02 | Einlernbereich OEFFNEN verlassen |
| 0x03 | Einlernbereich SCHLIESSEN verlassen |
| 0x04 | PWM ist zu hoch (> 80%) |
| 0x05 | Falsche Drehrichtung erkannt |
| 0x06 | Blockade beim Anfahren der 2. Einlernposition |
| 0x07 | Zielbereich PARKSPERRE GESCHLOSSEN nicht im Einlernbereich |
| 0x08 | Einlernen mit Timeout abgebrochen |
| 0x09 | Regler aktiv oder anderer Diagnosejob laueft |
| 0x0A | H-Brückenspannungs-Fehler beim Start |
| 0x0B | Startpositon nicht im Einlernbereich OEFFNEN |
| 0xFE | Unspezifzierter Abbruch |
| 0xFF | Diagnosejob Einlernen ist aktiv |

### TAB_AE_PARKSPERRE_EINLERNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Parksperre eingelernt |
| 0x01 | Parksperre nicht eingelernt |

### TAB_AE_PARKSPERRE_EINLERNEN_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Anlernen |
| 0x01 | Anlernen der Parksperre |

### TAB_AE_PARKSPERRE_NVRAM_LOESCHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Löschen |
| 0x01 | Löschen des NV-Ram (Parksperre) |

### TAB_AE_PARKSPERRE_POSTION

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | nicht definiert |

### TAB_AE_PARKSPERRE_SENSOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x02 | In Bewegung |
| 0x03 | Ungültig |

### TAB_AE_PARKSPERRE_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Einlernvorgang abgeschlossen und OK |
| 0x01 | Einlernvorgang abgeschlossen und NOK |
| 0x02 | Einlernvorgang aktiv |
| 0x03 | Einlernvorgang nicht gestartet, Startbedingungen nicht erfüllt |

### TAB_AE_ROHSIGNAL_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

### TAB_AE_ROTORLAGESENSOR_ANLEREN_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Auto RLS-Anlernen |
| 0x01 | Hochdrehen/Freilauf |

### TAB_AE_SLE_BETRIEBSMODE

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | HV-DC Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Fehler |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x09 | Ladeinitialisierung abgeschlossen |
| 0x0A | Standby mit HLC |
| 0x0F | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_AE_SLE_FEHLERZUSTAENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Derating |
| 0x01 | Ladeunterbrechung |
| 0x02 | Notlauf |
| 0x03 | Kommunikationsausfall |
| 0x04 | Reserviert |
| 0xFF | Signal ungültig |

### TAB_AE_SYSSTATE_MCS

| WERT | TEXT |
| --- | --- |
| 0x00 | eINITIALIZATION |
| 0x01 | ePREDRIVE |
| 0x02 | eREADY |
| 0x03 | eWAITSLEEPACKNOWLEDGE |
| 0x04 | eFUNCTIONPOSTDRIVE |

### TAB_AE_ZST_AKTIV_NAKTIV

| WERT | TEXT |
| --- | --- |
| 0x01 | Nicht aktiv |
| 0x02 | Aktiv |
| 0xFF | Wert ungültig |

### TAB_AKS_INFO_SATZ

| WERT | TEXT |
| --- | --- |
| 0 | 1.Satz |
| 1 | 2.Satz |
| 2 | 3.Satz |
| 3 | 4.Satz |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### TAB_AKT_PHASE_COUNT_AC_CHARGING

| WERT | TEXT |
| --- | --- |
| 0 | Kein Laden |
| 1 | 1-phasiges Laden |
| 2 | 2-phasiges Laden |
| 3 | 3-phasiges Laden |
| 0xFF | Wert ungültig |

### TAB_DCDC_BA_IST

| WERT | TEXT |
| --- | --- |
| 0 | INIT |
| 1 | STANDBY |
| 2 | BUCK |
| 3 | ERROR |
| 4 | CRASH |
| 5 | EMERG_HV2LV |
| 0xFF | Wert ungültig |

### TAB_DCDC_BA_SOLL

| WERT | TEXT |
| --- | --- |
| 0 | UNGÜLTIG |
| 1 | STANDBY |
| 2 | BUCK |
| 3 | UNGÜLTIG |
| 4 | UNGÜLTIG |
| 5 | UNGÜLTIG |
| 0xFF | Wert ungültig |

### TAB_EDME_REMOTE_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | RemoteLaden nicht aktiv |
| 0x01 | RemoteLaden on Hold |
| 0x02 | RemoteLaden aktiv |

### TAB_EDME_STATUS_LADEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Laden |
| 0x01 | Ladestecker gesteckt - kein Laden |
| 0x02 | Laden aktiv |
| 0x03 | Laden beendet |
| 0x04 | Ladestörung |
| 0x05 | Ladefehler |

### TAB_EDME_TIMER_LADEN_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | TimerLaden nicht aktiv |
| 0x01 | TimerLaden on Hold |
| 0x02 | TimerLaden aktiv |

### TAB_EINLERNEN_REX_RESONANZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Einlernen abbrechen |
| 0x01 | Einlernen: Kurzprogramm |
| 0x02 | Einlernen: Langprogramm |
| 0x03 | Einlernen: Adaption löschen |

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

### TAB_FAKTOR_STROMBEGRENZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximales Laden mit vollem AC Ladestrom. |
| 0x01 | Reduziertes Laden mit reduziertem AC Ladestrom. |
| 0x02 | Minimales Laden mit minimalen AC Ladestrom. |
| 0xFF | Signal ungültig |

### TAB_HVPM_CHGNG_DC_LOKG_CHGP

| WERT | TEXT |
| --- | --- |
| 0 | geöffnet |
| 1 | verriegelt |
| 3 | Signal ungültig |

### TAB_HVPM_CHGNG_DC_MAL

| WERT | TEXT |
| --- | --- |
| 0 | normal |
| 1 | Fehlfunktion |
| 3 | Signal ungültig |

### TAB_HVPM_CHGNG_DC_ST

| WERT | TEXT |
| --- | --- |
| 0 | Standby |
| 1 | Laden |
| 3 | Signal ungültig |

### TAB_HVPM_CHGNG_DC_STOP_CTR

| WERT | TEXT |
| --- | --- |
| 0 | Tracking-Modus |
| 1 | Unterdrückungsmodus |
| 3 | Signal ungültig |

### TAB_HVPM_CHGNG_TYP_IMME

| WERT | TEXT |
| --- | --- |
| 0 | Kein Ladeverfahren |
| 1 | AC-Laden mit Typ 1 Stecker (Yazaki) |
| 2 | AC-Laden mit Typ 2 Stecker (Mennekes) |
| 3 | DC-Laden nach CHAdeMO-Protokoll |
| 4 | DC-Laden nach SAE-Protokoll |
| 5 | AC-Laden China |
| 253 | Signal nicht verfügbar |
| 254 | Fehler |
| 255 | Signal ungültig |

### TAB_HVPM_CTR_MEASMT_ISL

| WERT | TEXT |
| --- | --- |
| 0 | Isolationsmessung ausschalten |
| 1 | keine Anforderung |
| 2 | Isolationsmessung angefordert |
| 3 | Signal ungültig |

### TAB_HVPM_ST_CHGNG

| WERT | TEXT |
| --- | --- |
| 0 | Kein Laden |
| 1 | Initialisierung |
| 2 | Laden aktiv |
| 3 | Ladepause |
| 4 | Laden beendet |
| 5 | Ladefehler |
| 15 | Signal ungültig |

### TAB_HVPM_ST_CHGRDI

| WERT | TEXT |
| --- | --- |
| 0 | Ladebereitschaft nicht aktiv |
| 1 | Ladebereitschaft aktiv |
| 3 | Singal ungültig |

### TAB_IST_BETRIEBSART_SLE

| WERT | TEXT |
| --- | --- |
| 1 | Standby |
| 2 | DC-HV-Laden |
| 3 | Derating |
| 4 | Ladeunterbrechung |
| 5 | Fehler |
| 6 | Crash |
| 7 | Betriebsartwechsel |
| 8 | Ladeinitialisierung |
| 9 | Ladeinitialisierung abgeschlossen |
| 13 | Signal nicht verfügbar |
| 14 | Fehler |
| 15 | Signal unbefüllt |

### TAB_LADEENDE_URSACHE

| WERT | TEXT |
| --- | --- |
| 0 |  Unbekannt/ Diagnose nicht möglich |
| 1 | SOC-Ziel erreicht |
| 2 | Ladestop vom Kunden angefordert |
| 3 | Ladestecker abgezogen (wird nicht bedient) |
| 4 | Netzausfall |
| 5 | Fehler im Ladesystem |
| 6 | Fehler außerhalb des Fahrzeugs (Induktivladen FOD/LOD) |
| 0xFF | Wert ungültig |

### TAB_LADEFENSTER_1

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0x03 | Nicht gültig |

### TAB_LADEGERAET_HISTOGRAMM

| WERT | TEXT |
| --- | --- |
| 0x00 | V_T_SleHistoHS1S |
| 0x01 | V_T_SleHistoHS2S |
| 0x02 | V_T_SleHistoHS1D |
| 0x03 | V_P_LdkHisto_IntLe |
| 0x04 | V_T_LdkHisto_IntLe |
| 0x05 | V_P_LdkHisto_ExtLe |
| 0x06 | V_T_LdkHisto_ExtLe |

### TAB_LADEGERAET_KONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x00 | DC-UCX oder keine UCX verbaut |
| 0x01 | AC- oder AC/DC UCX verbaut |
| 0x02 | SA Mehrphasiges AC Laden verbaut |

### TAB_LADEGERAET_KONFIGURATION_AUSLESEN

| WERT | TEXT |
| --- | --- |
| 0x00 | DC-UCX  oder keine UCX verbaut |
| 0x01 | AC- oder AC/DC UCX verbaut |
| 0x02 | Sonderausstattung Mehrphasiges Laden verbaut |
| 0xFFFF | Wert ungültig |

### TAB_LADEMODUS

| WERT | TEXT |
| --- | --- |
| 1 | Konduktives Laden |
| 2 | Induktives Laden |
| 0xFF | Wert ungültig |

### TAB_LADEMODUS_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Anforderung Lademodus Werk |
| 0x02 | Anforderung Ende Lademodus Werk |

### TAB_LADEN_LADEART

| WERT | TEXT |
| --- | --- |
| 0x00 | AC-Laden mit In-Cable-Ladevorrichtung |
| 0x01 | AC-Laden mit Wallbox |
| 0x02 | DC-Laden |

### TAB_LADEN_URSACHE_LADEENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt / Diagnose nicht möglich |
| 0x01 | Ziel erreicht (Reichweite oder Ladezustand) |
| 0x02 | Beenden vom Fahrer angefordert |
| 0x03 | Ladestecker abgezogen |
| 0x04 | Netzausfall (auch Schuko gezogen) |
| 0x05 | Fehler des Hochvolt-Systems (Ladeelektronik, usw.) |
| 0x06 | Fehler der Ladestation |
| 0x07 | Parksperresignal ausgefallen (GWS) |
| 0x08 | keine Parksperre |

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
| 0x0A | DC-Laden China |
| 0xFD | Signal nicht verfügbar |
| 0xFE | Fehler |
| 0xFF | Signal ungültig |

### TAB_LAST_EMASCHINE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 U/min bis 840 U/min |
| 0x01 | 840 U/min bis 1680 U/min |
| 0x02 | 1680 U/min bis 2520 U/min |
| 0x03 | 2520 U/min bis 3359 U/min |
| 0x04 | 3359 U/min bis 4199 U/min |
| 0x05 | 4199 U/min bis 5039 U/min |
| 0x06 | 5039 U/min bis 6718 U/min |
| 0x07 | 6718 U/min bis 8397 U/min |
| 0x08 | 8397 U/min bis 10077 U/min |
| 0x09 | 10077 U/min bis 13436 U/min |

### TAB_LSC_AUSWAHL_LADEN_SOFORT_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Einmaliges Sofortladen nicht aktiv |
| 1 | Einmaliges Sofortladen aktiv |
| 3 | Signal leer |
| 0xFF | Wert ungültig |

### TAB_LSC_PROGNOSEMODE

| WERT | TEXT |
| --- | --- |
| 0 | Normal Mode (LSC wird über Toleranzabweichung ausgelöst) |
| 1 | Step-Mode (LSC wird alle x% SOC ausgelöst) |
| 2 | PLC-Mode (LSC wegen PLC Verbindung ausgeschalten) |
| 0xFF | Wert ungültig |

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
| 0x0A | Weiteres zyklisches Nachladen nicht möglich |
| 0x0B | Weiteres zyklisches Nachladen möglich |
| 0x0D | Funktionsschnittstelle ist nicht verfügbar, Sendefunktion in Betrieb, Werte nicht verfügbar |
| 0x0E | Funktion meldet Fehler, Sendefunktion in Betrieb, meldet Fehler |
| 0x0F | Signal unbefüllt, Sendefunktion nicht in Betrieb |
| 0xFF | Wert ungültig |

### TAB_LSC_VERSION

| WERT | TEXT |
| --- | --- |
| 0 | LSC basierend auf Ist-SOC (auch ohne Versionsnummer (z.B. LI) |
| 1 | LSC basierend auf ABK SOC.  |
| 0xFF | Wert ungültig |

### TAB_LW_KLASSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Gang 1 Zug / 3 Klassen |
| 0x01 | Gang 1 Schub / 3 Klassen |
| 0x02 | Gang 2 Zug / 3 Klassen |
| 0x03 | Gang 2 Schub / 3 Klassen |

### TAB_POSITIONIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Nicht positioniert |
| 1 | Teilpositioniert |
| 2 | Positioniert |
| 0xFF | Wert ungültig |

### TAB_PRND_ACT_CMD

| WERT | TEXT |
| --- | --- |
| 0 | initial |
| 1 | ungültig |
| 2 | ungültig |
| 3 | ungültig |
| 4 | kein Kommando |
| 5 | Vorwärtsgang einlegen |
| 6 | Neutral einlegen |
| 7 | Rückwärtsgang einlegen |
| 8 | Parkposition einlegen |
| 15 | ungültig |

### TAB_PRND_HBRIDGE_DIR

| WERT | TEXT |
| --- | --- |
| 0 | Bewegung in Richtung D |
| 1 | Bewegung in Richtung P |

### TAB_PROZESSOR

| WERT | TEXT |
| --- | --- |
| 0x0 | undefiniert |
| 0x1 | mc0 |
| 0x2 | mc2 |

### TAB_PRUEF_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 1 | NUR_PRUEFEN |
| 2 | PRUEFEN_KORRIEGIEREN |

### TAB_PS_LAST_CMD

| WERT | TEXT |
| --- | --- |
| 0 | SbW: Zustand halten |
| 1 | SbW: Parksperre öffnen |
| 2 | SbW: Parksperre schließen |
| 3 | SbW: Kommandofehler |
| 127 | unbekannt |
| 128 | Diagnosejob Einlernen |
| 129 | Diagnosejob PS einlegen |
| 130 | Diagnsoejob PS auslegen |
| 255 | unbekannt |

### TAB_RSTINFO_CAUSE

| WERT | TEXT |
| --- | --- |
| 0 | nicht definiert |
| 1 | Ex WD |
| 2 | Int WD |
| 3 | SW Reset |
| 4 | Exception |
| 5 | Unknown |
| 255 | nicht definiert |

### TAB_RUECKSETZEN_UCX_VERBAUINFO

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zurücksetzen |
| 0x01 | Verbauerkennung zurücksetzen |

### TAB_SENSOR_BLOCK

| WERT | TEXT |
| --- | --- |
| 0x0 | Seriennummer |
| 0x1 | CPU-Sensoren-Block1 |
| 0x2 | CPU-Sensoren-Block2 |
| 0xff | nicht definiert |

### TAB_SENSOR_BLOCK_SETHWCAL

| WERT | TEXT |
| --- | --- |
| 0x0 | nicht definiert |
| 0x1 | CPU-Sensoren-Block1 |
| 0x2 | CPU-Sensoren-Block2 |
| 0xff | nicht definiert |

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

### TAB_STAT_KONF_LADEEINSTELLUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | Schnittstelle Günstig Laden aktiv (CHGNG_TYPE_SLCTN_1&2) |
| 0x02 | Schnittstelle Smart Charging aktiv (ST_SCHRG_DFT_CHRGS) |

### TAB_STAT_KONF_LADEEINSTELLUNG_RES

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialeinstellung Smart Charging aktiv; Diagnosejob nicht durchgeführt |
| 0x01 | Schnittstelle Günstig Laden aktiv (CHGNG_TYPE_SLCTN_1&2) |
| 0x02 | Schnittstelle Smart Charging aktiv (ST_SCHRG_DFT_CHRGS) |
| 0xFF | Wert ungültig |

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

### TAB_STAT_V_E_RLSFUSI_ACVREQ

| WERT | TEXT |
| --- | --- |
| 0x01 | Aktivierter RLS Monitor Routine auf MC0 und MC2 |
| 0xFF | Wert ungültig |

### TAB_STAT_V_E_BAMSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby Status |
| 0x01 | Drehmomentregelung |
| 0x0A | Fehler BAM SW AKS |
| 0x0C | Fehler BAM SW AKS |
| 0x0D | BAM Initialisierung |
| 0x15 | Drehmoment runter |
| 0x16 | AKS Lowside |
| 0x19 | Anlernen RLS |
| 0x1A | FL Service |
| 0x1B | Set LE2FL2 |
| 0x1E | Reset Entprellung |
| 0x20 | Nullmoment Regelung |
| 0x28 | Fehler SSD Request |
| 0x29 | Anlernen AC Offset |
| 0x2A | Fehler Prio1 AKS |
| 0x2B | Fehler Prio1 FL |
| 0x2C | TQD Complete |
| 0x2F | PLED |
| 0xFF | Signal ungültig |

### TAB_STAT_V_E_EMOPMO_IST

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby (Lowside AKS) |
| 0x01 | Drehmomtenregelung |
| 0x0A | Fehler Freilauf |
| 0x0C | Fehlerbedinger AKS TQD_Lowside |
| 0x0D | Initialisierung (physikalischer AKS) |
| 0x15 | Schnelles Drehmomentherunterfahren |
| 0x16 | AKS Lowside |
| 0x19 | Anlernen Resolveroffset |
| 0x1A | Set LE2FL/FL Service |
| 0x1B | Set LE2FL |
| 0x20 | Nullmomentenregelung |
| 0x29 | AC Anlernen |
| 0x2A | Fehlerbedingter AKS NOTQD_Lowside |

### TAB_STAT_V_N_RSLV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Wartezeit für erste spi Position in 10 ms tasks |
| 0x01 | Wartezeit für erstes spie Position in Inverter ISR |
| 0x02 | Wartezeit für Nordmarkierung |
| 0x03 | Fehler LOT (Pin) |
| 0x04 | Fehler DOS (Pin) |
| 0x05 | Fehler LOS (Pin) |
| 0x06 | Fehler Konfiguration Parität (RDC Register) |
| 0x07 | Phasenfehler übersteigt Phasenverriegelungs-Range (RDC Register) |
| 0x08 | Geschwindigkeit übersteigt maximale Tracking Rate (RDC Register) |
| 0x09 | Tracking Fehler übersteigt LOT Schwelle (RDC Register) |
| 0x0A | Sinus/cosinus Input übersteigt DOS mismatch Schwelle (RDC Register) |
| 0x0B | Sinus/cosinus Input übersteigt DOS  Übersteuerungsbereichs-Schwelle (RDC Register) |
| 0x0C | Sinus/cosinus Input unter LOS Schwelle (RDC Register) |
| 0x0D | Sinus/cosinus Input abgehackt (Rdc Register) |
| 0x0E | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x0F | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x10 | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x11 | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x12 | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x13 | Marker verliert/gewinnt Zahn |
| 0x14 | RDC Ausgangsstufe (RDC Fehler) |
| 0x15 | Division mit Null (gleicher Sample Zeitstempel) |
| 0x16 | Überfluss in Frequenzberechnung |
| 0x17 | reserviert |
| 0x18 | reserviert |
| 0x19 | reserviert |
| 0x1A | reserviert |
| 0x1B | reserviert |
| 0x1C | reserviert |
| 0x1D | reserviert |
| 0x1E | reserviert |
| 0x1F | reserviert |
| 0xFF | Signal ungültig |

### TAB_STAT_V_PHI_RSLV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Wartezeit für erste spi Position in 10 ms tasks |
| 0x01 | Wartezeit für erstes spie Position in Inverter ISR |
| 0x02 | Wartezeit für Nordmarkierung |
| 0x03 | Fehler LOT (Pin) |
| 0x04 | Fehler DOS (Pin) |
| 0x05 | Fehler LOS (Pin) |
| 0x06 | Fehler Konfiguration Parität (RDC Register) |
| 0x07 | Phasenfehler übersteigt Phasenverriegelungs-Range (RDC Register) |
| 0x08 | Geschwindigkeit übersteigt maximale Tracking Rate (RDC Register) |
| 0x09 | Tracking Fehler übersteigt LOT Schwelle (RDC Register) |
| 0x0A | Sinus/cosinus Input übersteigt DOS mismatch Schwelle (RDC Register) |
| 0x0B | Sinus/cosinus Input übersteigt DOS  Übersteuerungsbereichs-Schwelle (RDC Register) |
| 0x0C | Sinus/cosinus Input unter LOS Schwelle (RDC Register) |
| 0x0D | Sinus/cosinus Input abgehackt (Rdc Register) |
| 0x0E | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x0F | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x10 | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x11 | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x12 | Status von RDC spi driver (see V_e_RenSpiDrvError) |
| 0x13 | Marker verliert/gewinnt Zahn |
| 0x14 | RDC Ausgangsstufe (RDC Fehler) |
| 0x15 | reserviert |
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
| 0xFF | Signal ungültig |

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

### TAB_UCX_VERBAU_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine AC UCX verbaut |
| 0x01 | AC UCX verbaut |

### TAB_VARIANTE_PARKSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Parksperrenvariante nicht konfiguriert |
| 0x01 | Parksperre mit Rastkontur |
| 0x02 | Parksperre ohne Rastkontur |
| 0xFF | Ungültiger Wert |

### TAB_VERARBEITUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | NICHT_GESTARTET |
| 1 | LAUFENDE_VERARBEITUNG |
| 2 | NVFLASH_OK |
| 3 | NVFLASH_FEHLERHAFT |
| 0xFF | Wert ungültig |

### TAB_0X4002

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0001 | 0x0002 |

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

### TAB_RESETINFO_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x00 | POWERUP_RST |
| 0x01 | EXT_WATCHDOG_RST |
| 0x02 | INT_WATCHDOG_RST |
| 0x03 | SOFTWARE_RST |
| 0x04 | EXCEPTION_RST |
| 0x05 | UNKNOWN_RST |
| 0xFF | ungueltiger Wert |

### TAB_RESETINFO_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | ungueltiger Wert |
| 0x01 | Single Reset |
| 0x02 | Permanent Reset |
| 0xFF | ungueltiger Wert |

### TAB_RESETINFO_SYSSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | eINITIALIZATION |
| 0x01 | ePREDRIVE |
| 0x02 | eREADY |
| 0x03 | eWAITSLEEPACKNOWLEDGE |
| 0x04 | eFUNCTIONPOSTDRIVE |
| 0x05 | eFINALIZE |
| 0x06 | eMAXSTATE |
| 0xFF | ungueltiger Wert |

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
