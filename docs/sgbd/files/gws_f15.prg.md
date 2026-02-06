# gws_f15.prg

## General

|  |  |
| --- | --- |
| File | gws_f15.prg |
| Type | PRG |
| Jobs | 51 |
| Tables | 56 |
| Origin | BMW EI-541 Helmar_Liess |
| Revision | 1.003 |
| Author | Marquardt_GmbH AP3D2 Robert_Masa, Marquardt_GmbH AP3D2 Jochen_H |
| ECU Comment | GWS [41] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Getriebe Wählhebel Steuergerät |  |  |
| ORIGIN | string | BMW EI-541 Helmar_Liess |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | Marquardt_GmbH AP3D2 Robert_Masa, Marquardt_GmbH AP3D2 Jochen_H |  |  |
| COMMENT | string | GWS [41] |  |  |
| PACKAGE | string | 1.34 |  |  |
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

_No arguments._

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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)]

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

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

### _LESEN_MARQUARDT_PRUEFBYTE

Lesen Marquardt Pruefbyte

_No arguments._

### _SCHREIBEN_MARQUARDT_PRUEFBYTE

Write Marquardt Pruefbyte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INDEX | int | Pruefbyte Index, 1 .. 6 |
| PRUEFBYTE | int | Pruefbyte to be written |

### _LESEN_MARQUARDT_SERIENNUMMER

Read Marquardt Serial Number

_No arguments._

### _SCHREIBEN_MARQUARDT_SERIENNUMMER

Write Marquardt Seriennummer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SERIENNUMMER_BYTE_0 | int | Seriennummer Byte 0 |
| SERIENNUMMER_BYTE_1 | int | Seriennummer Byte 1 |
| SERIENNUMMER_BYTE_2 | int | Seriennummer Byte 2 |
| SERIENNUMMER_BYTE_3 | int | Seriennummer Byte 3 |
| SERIENNUMMER_BYTE_4 | int | Seriennummer Byte 4 |
| SERIENNUMMER_BYTE_5 | int | Seriennummer Byte 5 |
| SERIENNUMMER_BYTE_6 | int | Seriennummer Byte 6 |
| SERIENNUMMER_BYTE_7 | int | Seriennummer Byte 7 |

### _SCHREIBEN_BMW_SERIENNUMMER

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATENBYTE_1 | int | Datenbyte 1 |
| DATENBYTE_2 | int | Datenbyte 2 |
| DATENBYTE_3 | int | Datenbyte 3 |
| DATENBYTE_4 | int | Datenbyte 4 |
| DATENBYTE_5 | int | Datenbyte 5 |
| DATENBYTE_6 | int | Datenbyte 6 |
| DATENBYTE_7 | int | Datenbyte 7 |
| DATENBYTE_8 | int | Datenbyte 8 |
| DATENBYTE_9 | int | Datenbyte 9 |
| DATENBYTE_10 | int | Datenbyte 10 |

### _Schreiben_MQ_HWAP_SGBM_ID

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CLASSIFICATION | int | Datenbyte 1 |
| LOGISTIC_ID_BYTE_1 | int | Logistic Identifier Byte 1 |
| LOGISTIC_ID_BYTE_2 | int | Logistic Identifier Byte 2 |
| LOGISTIC_ID_BYTE_3 | int | Logistic Identifier Byte 3 |
| LOGISTIC_ID_BYTE_4 | int | Logistic Identifier Byte 4 |
| SW_VERSION_BYTE_1 | int | SW Version Byte 1 |
| SW_VERSION_BYTE_2 | int | SW Version Byte 2 |
| SW_VERSION_BYTE_3 | int | SW Version Byte 3 |

### _SCHREIBEN_BMW_PROD_DATUM

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE_DD | int | Byte Tag |
| BYTE_MM | int | Byte Monat |
| BYTE_YY | int | Byte Jahr |

### _SCHREIBEN_MARQUARDT_PARAMETRIERUNG

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATENBYTE_1 | int | Datenbyte 1 |
| DATENBYTE_2 | int | Datenbyte 2 |
| DATENBYTE_3 | int | Datenbyte 3 |
| DATENBYTE_4 | int | Datenbyte 4 |
| DATENBYTE_5 | int | Datenbyte 5 |
| DATENBYTE_6 | int | Datenbyte 6 |
| DATENBYTE_7 | int | Datenbyte 7 |
| DATENBYTE_8 | int | Datenbyte 8 |
| DATENBYTE_9 | int | Datenbyte 9 |
| DATENBYTE_10 | int | Datenbyte 10 |
| DATENBYTE_11 | int | Datenbyte 11 |
| DATENBYTE_12 | int | Datenbyte 12 |
| DATENBYTE_13 | int | Datenbyte 13 |
| DATENBYTE_14 | int | Datenbyte 14 |
| DATENBYTE_15 | int | Datenbyte 15 |
| DATENBYTE_16 | int | Datenbyte 16 |
| DATENBYTE_17 | int | Datenbyte 17 |
| DATENBYTE_18 | int | Datenbyte 18 |
| DATENBYTE_19 | int | Datenbyte 19 |
| DATENBYTE_20 | int | Datenbyte 20 |
| DATENBYTE_21 | int | Datenbyte 21 |
| DATENBYTE_22 | int | Datenbyte 22 |
| DATENBYTE_23 | int | Datenbyte 23 |
| DATENBYTE_24 | int | Datenbyte 24 |
| DATENBYTE_25 | int | Datenbyte 25 |
| DATENBYTE_26 | int | Datenbyte 26 |
| DATENBYTE_27 | int | Datenbyte 27 |
| DATENBYTE_28 | int | Datenbyte 28 |
| DATENBYTE_29 | int | Datenbyte 29 |
| DATENBYTE_30 | int | Datenbyte 30 |
| DATENBYTE_31 | int | Datenbyte 31 |

### _LESEN_MARQUARDT_PARAMETRIERUNG

Lesen Marquardt Parametrierung

_No arguments._

### _Lesen_MQ_HW_Info

Lesen Marquardt HW Info

_No arguments._

### _LESEN_MQ_PWM_TRIM

Lesen Marquardt PWM TRIM Werte

_No arguments._

### _SCHREIBEN_MQ_PWM_TRIM

Schreiben Marquardt PWM Trim Werte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TRIM_SUCH | int | Wert LEDs Suchbeleuchtung |
| TRIM_R | int | Wert LED R |
| TRIM_N | int | Wert LED N |
| TRIM_P | int | Wert LED P |
| TRIM_D | int | Wert LED D |
| TRIM_MS | int | Wert LED MS |

### _LESEN_MQ_DEBUG_DATEN

Lesen Marquardt Debug Daten

_No arguments._

### _LOESCHEN_MQ_DEBUG_DATEN

Loeschen Marquardt Debug Daten Modus  : Default

_No arguments._

### _BLOCK_WD_TRIGGER

Watchdog trigger blockieren Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MAGIC_BYTE_0 | int | Byte 0 Magic Word |
| MAGIC_BYTE_1 | int | Byte 1 Magic Word |

### _SCHREIBEN_MQ_MAGNET_DATEN_DEBUG

Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNCTION_ID | unsigned char | Function ID |
| DATENBYTE_1 | int | Datenbyte 1 |
| DATENBYTE_2 | int | Datenbyte 2 |
| DATENBYTE_3 | int | Datenbyte 3 |
| DATENBYTE_4 | int | Datenbyte 4 |
| DATENBYTE_5 | int | Datenbyte 5 |
| DATENBYTE_6 | int | Datenbyte 6 |
| DATENBYTE_7 | int | Datenbyte 7 |
| DATENBYTE_8 | int | Datenbyte 8 |
| DATENBYTE_9 | int | Datenbyte 9 |
| DATENBYTE_10 | int | Datenbyte 10 |
| DATENBYTE_11 | int | Datenbyte 11 |
| DATENBYTE_12 | int | Datenbyte 12 |
| DATENBYTE_13 | int | Datenbyte 13 |
| DATENBYTE_14 | int | Datenbyte 14 |
| DATENBYTE_15 | int | Datenbyte 15 |
| DATENBYTE_16 | int | Datenbyte 16 |
| DATENBYTE_17 | int | Datenbyte 17 |
| DATENBYTE_18 | int | Datenbyte 18 |
| DATENBYTE_19 | int | Datenbyte 19 |
| DATENBYTE_20 | int | Datenbyte 20 |
| DATENBYTE_21 | int | Datenbyte 21 |
| DATENBYTE_22 | int | Datenbyte 22 |
| DATENBYTE_23 | int | Datenbyte 23 |
| DATENBYTE_24 | int | Datenbyte 24 |
| DATENBYTE_25 | int | Datenbyte 25 |
| DATENBYTE_26 | int | Datenbyte 26 |
| DATENBYTE_27 | int | Datenbyte 27 |
| DATENBYTE_28 | int | Datenbyte 28 |
| DATENBYTE_29 | int | Datenbyte 29 |
| DATENBYTE_30 | int | Datenbyte 30 |
| DATENBYTE_31 | int | Datenbyte 31 |
| DATENBYTE_32 | int | Datenbyte 32 |
| DATENBYTE_33 | int | Datenbyte 33 |
| DATENBYTE_34 | int | Datenbyte 34 |
| DATENBYTE_35 | int | Datenbyte 35 |
| DATENBYTE_36 | int | Datenbyte 36 |
| DATENBYTE_37 | int | Datenbyte 37 |
| DATENBYTE_38 | int | Datenbyte 38 |
| DATENBYTE_39 | int | Datenbyte 39 |
| DATENBYTE_40 | int | Datenbyte 40 |
| DATENBYTE_41 | int | Datenbyte 41 |
| DATENBYTE_42 | int | Datenbyte 42 |
| DATENBYTE_43 | int | Datenbyte 43 |
| DATENBYTE_44 | int | Datenbyte 44 |
| DATENBYTE_45 | int | Datenbyte 45 |
| DATENBYTE_46 | int | Datenbyte 46 |
| DATENBYTE_47 | int | Datenbyte 47 |
| DATENBYTE_48 | int | Datenbyte 48 |
| DATENBYTE_49 | int | Datenbyte 49 |
| DATENBYTE_50 | int | Datenbyte 50 |
| DATENBYTE_51 | int | Datenbyte 51 |
| DATENBYTE_52 | int | Datenbyte 52 |
| DATENBYTE_53 | int | Datenbyte 53 |
| DATENBYTE_54 | int | Datenbyte 54 |
| DATENBYTE_55 | int | Datenbyte 55 |
| DATENBYTE_56 | int | Datenbyte 56 |
| DATENBYTE_57 | int | Datenbyte 57 |
| DATENBYTE_58 | int | Datenbyte 58 |
| DATENBYTE_59 | int | Datenbyte 59 |
| DATENBYTE_60 | int | Datenbyte 60 |
| DATENBYTE_61 | int | Datenbyte 61 |
| DATENBYTE_62 | int | Datenbyte 62 |
| DATENBYTE_63 | int | Datenbyte 63 |
| DATENBYTE_64 | int | Datenbyte 64 |
| DATENBYTE_65 | int | Datenbyte 65 |
| DATENBYTE_66 | int | Datenbyte 66 |
| DATENBYTE_67 | int | Datenbyte 67 |
| DATENBYTE_68 | int | Datenbyte 68 |
| DATENBYTE_69 | int | Datenbyte 69 |
| DATENBYTE_70 | int | Datenbyte 70 |
| DATENBYTE_71 | int | Datenbyte 71 |
| DATENBYTE_72 | int | Datenbyte 72 |
| DATENBYTE_73 | int | Datenbyte 73 |
| DATENBYTE_74 | int | Datenbyte 74 |
| DATENBYTE_75 | int | Datenbyte 75 |
| DATENBYTE_76 | int | Datenbyte 76 |
| DATENBYTE_77 | int | Datenbyte 77 |
| DATENBYTE_78 | int | Datenbyte 78 |
| DATENBYTE_79 | int | Datenbyte 79 |
| DATENBYTE_80 | int | Datenbyte 80 |

### _LESEN_MQ_MAGNET_DATEN

Lesen Marquardt Magnet Daten

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUMBER | int | Zu lesender Block |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x025E00 | Energiesparmode aktiv | 0 |
| 0x02FF5E | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x802680 | Funktionsanzeige fehlerhaft | 0 |
| 0x802688 | Sperrsystem: Sperre Manuelle Gasse defekt | 0 |
| 0x802689 | Sperrsystem: Sperre Manuelle Gasse deaktiviert (thermische Überlast) | 0 |
| 0x80268A | Rückstellsystem: Hebel konnte nicht zurückgestellt werden | 0 |
| 0x80268C | Suchbeleuchtung fehlerhaft | 0 |
| 0x80268E | Parktaster klemmt | 0 |
| 0x80268F | Parktaster defekt | 0 |
| 0x802690 | Entriegelungstaster klemmt | 0 |
| 0x802691 | Entriegelungstaster defekt | 0 |
| 0x802692 | Hall-Sensoren Einfachfehler | 0 |
| 0x802694 | Hall-Sensoren Zweifachfehler | 0 |
| 0x802695 | Hebel ungültige Position | 0 |
| 0x802696 | Unterspannung erkannt | 1 |
| 0x802698 | Überspannung erkannt | 1 |
| 0x80269A | ROM Check CRC32 fehlt | 0 |
| 0xE0840A | FA-CAN Control Module Bus OFF | 0 |
| 0xE08486 | A-CAN Control Module Bus OFF | 0 |
| 0xE08BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE09400 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) fehlt, Empfänger GWS (FA-CAN), Sender EGS (FA-CAN) | 1 |
| 0xE09402 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) nicht aktuell, Empfänger GWS (FA-CAN), Sender EGS (FA-CAN) | 1 |
| 0xE09404 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) Prüfsumme falsch, Empfänger GWS (FA-CAN), Sender EGS (FA-CAN) | 1 |
| 0xE09408 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger GWS (FA-CAN), Sender CAS (FA-CAN) | 1 |
| 0xE0940A | Botschaft (Dimmung, 0x202) fehlt, Empfänger GWS (FA-CAN), Sender FRM (FA-CAN) | 1 |
| 0xE0940C | Botschaft (LCD Helligkeit Regelung, 0x393) fehlt, Empfänger GWS (FA-CAN), Sender KOMBI (FA-CAN) | 1 |
| 0xE0940E | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger GWS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xE09410 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) fehlt, Empfänger GWS (A-CAN), Sender EGS (A-CAN) | 1 |
| 0xE09412 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) nicht aktuell, Empfänger GWS (A-CAN), Sender EGS (A-CAN) | 1 |
| 0xE09414 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) Prüfsumme falsch, Empfänger GWS (A-CAN), Sender EGS (A-CAN) | 1 |
| 0xE09418 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger GWS (A-CAN), Sender CAS (A-CAN) | 1 |
| 0xE09420 | Botschaft (Relativzeit, 0x328) fehlt, Empfänger GWS (FA-CAN), Sender Kombi (FA-CAN) | 1 |
| 0xE09422 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Empfänger GWS (FA-CAN), Sender JBE (FA-CAN) | 1 |
| 0xE09424 | Botschaft (Daten Antriebsstrang 2, 0x3F9) fehlt, Empfänger GWS (FA-CAN), Sender (DME) | 1 |
| 0xE0AC00 | Schnittstelle EGS (Daten Anzeige Getriebestrang, FA-CAN): Signal ungültig | 1 |
| 0xE0AC04 | Schnittstelle CAS (Klemmen, FA-CAN): Signal ungültig | 1 |
| 0xE0AC06 | Schnittstelle FRM (Dimmung): Signal ungültig | 1 |
| 0xE0AC08 | Schnittstelle KOMBI (LCD Helligkeit Regelung): Signal ungültig | 1 |
| 0xE0AC0A | Schnittstelle ICM (Geschwindigkeit Fahrzeug): Signal ungültig | 1 |
| 0xE0AC20 | Schnittstelle EGS (Daten Anzeige Getriebestrang, A-CAN): Signal ungültig | 1 |
| 0xE0AC24 | Schnittstelle CAS (Klemmen, A-CAN): Signal ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | E08487 | E0848F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E0845F | E08468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E0841F | E0843E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E0847D | E08486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E08401 | E0840A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E0840B | E08414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E08501 | E0850A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E0843F | E08449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E0850B | E08514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E08415 | E0841E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E08473 | E0847C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | E08469 | E08472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | E08C00 | E093FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | E09400 | E0C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | E08BFF | E08BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | E09400 | E0C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 802680 | 8026FF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Temperatur Steuergerät | ° | high | signed char | - | 1.0 | 1.0 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x5E0001 | CANTP_E_COMM | 0 |
| 0x5E0002 | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 |
| 0x5E0003 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x5E0004 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x5E0005 | FRIF_E_JLE_SYNC | 0 |
| 0x5E0006 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x5E0007 | NVM_E_REQ_FAILED | 0 |
| 0x5E0008 | FLS_E_READ_FAILED | 0 |
| 0x5E0009 | CNM_E_TX_PATH_FAILED | 0 |
| 0x5E000A | NVM_E_INTEGRITY_FAILED | 0 |
| 0x5E000B | CANIF_E_INVALID_RXPDUID | 0 |
| 0x5E000C | CAN_E_TIMEOUT | 0 |
| 0x5E000D | CANIF_E_INVALID_TXPDUID | 0 |
| 0x5E000E | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x5E000F | MCU_E_CLOCK_FAILURE | 0 |
| 0x5E0010 | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x5E0011 | COMM_E_STOP_Tx_TIMEOUT_C1 | 0 |
| 0x5E0012 | FR_E_ACCESS | 0 |
| 0x5E0013 | MCU_E_LOCK_FAILURE | 0 |
| 0x5E0014 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x5E0015 | COMM_E_START_Tx_TIMEOUT_C1 | 0 |
| 0x5E0016 | WDGM_E_SET_MODE | 0 |
| 0x5E0017 | CANIF_E_STOPPED | 0 |
| 0x5E0018 | WDG_E_DISABLE_REJECTED | 0 |
| 0x5E0019 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x5E001A | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x5E001B | FLS_E_COMPARE_FAILED | 0 |
| 0x5E001C | COMM_E_NET_START_IND_CHANNEL_1 | 0 |
| 0x5E001D | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x5E001E | LINIF_E_RESPONSE | 0 |
| 0x5E001F | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x5E0020 | CANNM_E_INIT_FAILED | 0 |
| 0x5E0021 | FLS_E_WRITE_FAILED | 0 |
| 0x5E0022 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x5E0023 | FLS_E_ERASE_FAILED | 0 |
| 0x5E0024 | Puffer für ausgehende Fehlermeldungen ist voll | 0 |
| 0x5E0025 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 0 |
| 0x5E0026 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 0 |
| 0x5E0027 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 0 |
| 0x5E0028 | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x5E0029 | CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x5E002A | CANSM_E_BUSOFF_NETWORK_1 | 0 |
| 0x5E002B | MCU_E_QUARTZ_FAILURE | 0 |
| 0x5E002C | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x5E002D | WDG_E_MISS_TRIGGER | 0 |
| 0x5E002E | PWM_E_UNEXPECTED_IRQ | 0 |
| 0x5E002F | SPI_E_TIMEOUT | 0 |
| 0x5E0030 | ADC_E_TIMEOUT | 0 |
| 0x5E0031 | CANNM_E_CANIF_TRANSMIT_ERROR_1 | 0 |
| 0x5E0032 | CANNM_E_NETWORK_TIMEOUT_1 | 0 |
| 0x5E0033 | CODING_EVENT_NOT_CODED | 0 |
| 0x5E0034 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x5E0035 | PIA_E_IO_ERROR | 0 |
| 0x5E0036 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x5E0037 | CODING_EVENT_WRONG_VEHICLE | 0 |
| 0x5E0038 | CODING_EVENT_INVALID_DATA | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Temperatur Steuergerät | ° | high | signed char | - | 1.0 | 1.0 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWS_ANALYSEDATEN | 0xD52F | - | Versenden von Analysedaten des GWS ein- und ausschalten.Der Diagnosejob darf nur mit vorhergehender Genehmigung durch die entwicklungsseitige Fachabteilung ausgeführt werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD52F | - |
| STEUERN_SUCHBELEUCHTUNG | 0xD5AA | - | Suchbeleuchtung: Steuern | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5AA | - |
| STEUERN_FUNKTIONSANZEIGE | 0xD5AB | - | ein- oder auschalten Steuerung der Funktionsanzeige über Diagnose  ein = Steuerung über Diagnose einschalten aus = Steuerung über Diagnose ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5AB | - |
| HALLSENSORIK_WERT | 0xD5AC | STAT_HALLSENSORIK_WERT | Bitmuster der Hallsensorik. | HEX | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HEBELPOSITION_WERT | 0xD5AD | STAT_HEBELPOSITION | aktuelle Hebelposition. siehe Tabelle  TAB_GWS_POS | 0-n | - | - | unsigned int | TAB_GWS_POS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_GWS_PARKTASTER_1_UND_2 | 0xD5AE | - | Status Parktaster Kontakt 1 und 2; 0= nicht gedrückt 1= gedrückt 2= klemmt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5AE |
| STATUS_GWS_ENTR_TASTER_1_UND_2 | 0xD5AF | - | Status Entriegelungstaster Kontakt 1 und 2 0= nicht gedrückt 1= gedrückt 2= klemmt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5AF |
| STATUS_SPERRE_MG | 0xD5B0 | STAT_SPERRE_MG_NR | Status Sperre Manuelle Gasse; siehe TAB_SPERRE | 0-n | - | - | unsigned int | TAB_SPERRE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_SPERRE_MG | 0xD5B4 | - | Steuern der GWS-Sperre manuelle Gasse. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5B4 | - |
| STEUERN_RUECKSTELLSYSTEM | 0xD5B5 | - | Steuern des GWS Rueckstellsystems. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5B5 | - |
| STATUS_RUECKSTELLSYSTEM | 0xD5B6 | - | Ausgabe Status Rückstellsystem | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5B6 |
| VERSION_AUSLESEN | 0xD5B7 | - | Auslesen der GWS Version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5B7 |
| GWS_WAKE_UP_STATUS_A_CAN | 0xD5B8 | STAT_WL_A_CAN_HIGH | Status der Weckleitung A-CAN (vom SG gelesen)  0 = Pegel WL low 1 = Pegel WL high | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWS_WAKE_UP_STATUS_FA_CAN | 0xD5B9 | STAT_WL_FA_CAN_HIGH | Status der Weckleitung FA-CAN (vom SG gelesen) 0 = Pegel WL low 1 = Pegel WL high | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DRIVELOGIC_WIPPE | 0xD5DD | - | Auslesen Tasten Fahrdynamik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5DD |
| STATUS_SUCHBELEUCHTUNG | 0x4300 | STAT_SUCHBELEUCHTUNG_WERT | Helligkeit der Suchbeleuchtung 0 = Suchbeleuchtung min 100 = Suchbeleuchtung max | 0-100 | - | high | unsigned char | - | 1 | 1 | 0 | - | 22 | - | - |
| STATUS_FUNKTIONSANZEIGE | 0x4310 | - | Ausgabe Status Funktionsanzeige | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4310 |
| STATUS_VOLTAGE_V_SUP | 0x4100 | - | Ausgabe Status Versorgungsspannung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100 |
| STATUS_TEMPERATURE | 0x4110 | - | Ausgabe Status Temperatur | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4110 |
| STATUS_WAKE_UP_STATUS_WIRE | 0x4200 | STAT_WIRE_STATUS | Status der Weckleitung A-CAN (vom SG gelesen)  0 = Pegel WL low 1 = Pegel WL high | 0/1 | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STATUS_ABNUTZUNG | 0x4030 | - | Daten über Abnutzung des GWS über komplette Lebensdauer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4030 |
| STATUS_CAN_MSG | 0x4400 | - | Status aller Empfangsnachrichten des GWS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4400 |
| STEUERN_SCHALTPUNKT | 0x4600 | - | Einschalten Schaltpunktmodus ein = Schaltpunktmodus einschalten aus = Schaltpunktmodus ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4600 | - |
| STATUS_TEMP_VERTEILUNG | 0x4060 | - | Temperaturverteilung über Lebenszyklus des GWS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4060 |
| STATUS_BUTTONS | 0x4500 | - | Status und  ADC Werte Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4500 |
| STEUERN_RUN_IN_MODE | 0x4900 | - | Einschalten Run In Mode 1 = Run In Mode einschalten 0 = Run In Mode ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4900 | - |
| STATUS_HEBEL_DIAGNOSE | 0x4510 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4510 |
| STEUERN_BELEUCHTUNG_100 | 0x4610 | - | Helligkeit Suchbeleuchtung und Funktionsanzeige 100 % | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4610 | - |

### RES_0X4110

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_STATUS | 0-n | - | unsigned char | - | TAB_TEMP_STATUS | 1 | 1 | 0 | Status Betriebstemperatur; siehe TAB_TEMP_STATUS |
| STAT_TEMP_WERT | Grad Celsius | - | char | - | - | 1 | 1 | 0 | Temperatur |

### TAB_FUNKTIONSANZEIGE

| WERT | TEXT |
| --- | --- |
| 6 | Keine |
| 5 | Alle |
| 4 | P |
| 3 | R |
| 2 | N |
| 1 | D |
| 0 | MS |

### ARG_0XD52F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERSENDEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet das Versenden der Analysedaten: 0 = AUS 1 = EIN |

### ARG_0XD5AA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Steuerung der Suchbeleuchtung über Diagnose ein- oder auschalten aus = Steuerung über Diagnose ausschalten ein = Steuerung über Diagnose einschalten |
| DIMMBELEUCHTUNGSWERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Beleuchtungswert: Bereich: 0 bis 253 -> Nachtbeleuchtung Bereich: 254 -> Tag (Lichtschalter aus) Bereich: 255 -> Signal fehlerhaft, Licht aus |

### ARG_0XD5AB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | ein- oder auschalten Steuerung der Funktionsanzeige über Diagnose  ein = Steuerung über Diagnose einschalten aus = Steuerung über Diagnose ausschalten |

### ARG_0XD5B4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | ein- oder ausschalten Sperre  ein = Sperre einschalten aus = Sperre freigeben |

### ARG_0XD5B5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### RES_0XD5AE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARKTASTER_1_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | 1.0 | 1.0 | 0.0 | Status Parktaster Kontakt 1; siehe TAB_ENTR_TASTER |
| STAT_PARKTASTER_2_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | 1.0 | 1.0 | 0.0 | Status Parktaster Kontakt 2; siehe TAB_ENTR_TASTER |

### RES_0XD5AF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTR_TASTER_1_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | 1.0 | 1.0 | 0.0 | Status Entriegelungstaster Kontakt 1; siehe TAB_ENTR_TASTER |
| STAT_ENTR_TASTER_2_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | 1.0 | 1.0 | 0.0 | Status Entriegelungstaster Kontakt 2; siehe TAB_ENTR_TASTER |

### RES_0XD5B6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_DEFEKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Positionssensor 0 = kein Fehler 1 = defekt |
| STAT_TREIBER_DEFEKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Motortreiber 0 = kein Fehler 1 = defekt |

### RES_0XD5B7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODULBEZ_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | GWS Modulbezeichnung |
| STAT_SW_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | GWS Software Version |
| STAT_HW_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | GWS Hardware-Version. |
| STAT_SBC_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | GWS SBC Version |

### RES_0XD5DD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRIVELOGIC_WIPPE_PLUS_NR | 0-n | high | unsigned char | - | TAB_TASTER_PLUS_MINUS | 1.0 | 1.0 | 0.0 | Betätigungszustand Drivelogic Taster in Richtung  + |
| STAT_DRIVELOGIC_WIPPE_MINUS_NR | 0-n | high | unsigned char | - | TAB_TASTER_PLUS_MINUS | 1.0 | 1.0 | 0.0 | Betätigungszustand Drivelogic Taster in Richtung  - |

### TAB_GWS_POS

| WERT | TEXT |
| --- | --- |
| 1 | NA - Ruhelage Automatikgasse |
| 2 | M/S - Ruhelage Sportgasse |
| 3 | V - Vorne tippen |
| 4 | VV - Vorne überdrückt |
| 5 | H - Hinten tippen |
| 6 | HH - Hinten überdrückt |
| 7 | M+ Manuell plus |
| 8 | M- Manuell minus |
| 9 | ZP - Zwischenposition |
| 10 | INIT - Initialsierung nicht abgeschlossen |
| 15 | UNGÜLTIG - Keine gültige Position erkannt |
| 17 | NA - Ruhelage Automatikgasse |
| 18 | R - Rückwärtsgang |
| 19 | N - Neutral |
| 20 | M- Manuell minus |
| 21 | M+ Manuell plus |
| 22 | D/S - Manuelle Gasse |
| 23 | INIT - Initialisierung nicht abgeschlossen |
| 31 | UNGÜLTIG - Keine gültige Position erkannt |
| 65535 | Ungültiger Wert |

### TAB_ENTR_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrueckt |
| 0x01 | gedrueckt |
| 0x02 | klemmt |
| 0xFF | unbekannnter Fehlerort |

### TAB_TASTER_PLUS_MINUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht gedrückt |
| 0x01 | Taster gedrückt |
| 0x02 | Taster ungültig |

### TAB_SPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | frei |
| 0x01 | gesperrt |
| 0x03 | defekt |
| 0xFF | unbekannter Fehlerort |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_SUP_STATUS | 0-n | - | unsigned char | - | TAB_ENV_VSUP_STATUS | 1.0 | 1.0 | 0.0 | Status der Versorgungsspannung;siehe TAB_ENV_VSUP_STATUS |
| STAT_V_SUP_WERT | 0-253 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannung V / 10 |

### TAB_ENV_VSUP_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Unterspannung |
| 0x02 | Normal |
| 0x03 | Überspannung |
| 0xFF | unbekannnter Fehlerort |

### RES_0X4310

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNK_ANZ_PWM_LED_WERT | 0-100 | high | unsigned char | - | - | 1 | 1 | 0 | Helligkeit der Funktionsanzeigen 0 = Helligkeit min 100 = Helligkeit max |
| STAT_FUNK_ANZ_STATUS_LED | 0-n | high | unsigned char | - | TAB_Funktionsanzeige | 1 | 1 | 0 | Aktive LED;siehe TAB_Funktionsanzeige |
| STAT_FUNK_ANZ_AD_D_WERT | HEX | - | unsigned int | - | - | 1 | 1 | 0 | ADC Wert LED D |
| STAT_FUNK_ANZ_AD_MS_WERT | HEX | - | unsigned int | - | - | 1 | 1 | 0 | ADC Wert LED MS |
| STAT_FUNK_ANZ_AD_N_WERT | HEX | - | unsigned int | - | - | 1 | 1 | 0 | ADC Wert LED N |
| STAT_FUNK_ANZ_AD_P_WERT | HEX | - | unsigned int | - | - | 1 | 1 | 0 | ADC Wert LED P |
| STAT_FUNK_ANZ_AD_R_WERT | HEX | - | unsigned int | - | - | 1 | 1 | 0 | ADC Wert LED R |

### RES_0X4030

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_V | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege V |
| STAT_ANZAHL_VV | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege VV |
| STAT_ANZAHL_H | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege H |
| STAT_ANZAHL_HH | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege HH |
| STAT_ANZAHL_MS | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege MS |
| STAT_ANZAHL_MM | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege MM |
| STAT_ANZAHL_MP | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Wege MP |
| STAT_ANZAHL_PARK1 | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Tastendrücke P1 |
| STAT_ANZAHL_PARK2 | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Tastendrücke P2 |
| STAT_ANZAHL_UNLOCK1 | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Tastendrücke Unlock1 |
| STAT_ANZAHL_UNLOCK2 | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Tastendrücke Unlock2 |
| STAT_ANZAHL_MAGNET | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Magnet Aktivierungen |
| STAT_ANZAHL_STARTUP | 0-n | - | unsigned long | - | - | - | - | - | Anzahl Systemstarts |
| STAT_BETRIEBSSTUNDEN_GWS_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden Gesamtsystem |
| STAT_BETRIEBSSTUNDEN_MAGNET_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden Magnet |
| STAT_ANZAHL_RUECKSTELL | 0-n | - | unsigned long | - | - | - | - | - | Anzahl automatische Rückstellungen |

### RES_0X4400

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RX_FA_LCD_BRIG_CLCTR | BIT | - | BITFIELD | - | BF_FA_LCD_BRIG_CLCTR | - | - | - | Fehlerstatus CAN_RX_FA_LCD_BRIG_CLCTR |
| STAT_RX_FA_DIMMUNG | BIT | - | BITFIELD | - | BF_FA_RX_DIMMUNG | - | - | - | Fehlerstatus CAN_RX_FA_DIMMUNG |
| STAT_RX_FA_DT_DISP_GRDT | BIT | - | BITFIELD | - | BF_FA_RX_DISP_GRDT | - | - | - | Fehlerstatus CAN_RX_FA_DT_DISP_GRDT |
| STAT_RX_FA_KLEMMEN | BIT | - | BITFIELD | - | BF_FA_RX_KLEMMEN | - | - | - | Fehlerstatus CAN_RX_FA_KLEMMEN |
| STAT_RX_A_DT_DISP_GRDT | BIT | - | BITFIELD | - | BF_A_RX_DISP_GRDT | - | - | - | Fehlerstatus CAN_RX_A_DT_DISP_GRDT |
| STAT_RX_A_KLEMMEN | BIT | - | BITFIELD | - | BF_A_RX_KLEMMEN | - | - | - | Fehlerstatus CAN_RX_A_KLEMMEN |

### BF_FA_LCD_BRIG_CLCTR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_LCD_BRIG_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_FA_LCD_BRIG_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | - |

### BF_FA_RX_DIMMUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_DIMMUNG_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_FA_DIMMUNG_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | - |

### BF_FA_RX_DISP_GRDT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_DISP_PO_GRB_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_FA_DISP_PO_GRB_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_FA_CRC_GRDT_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_FA_CRC_GRDT_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_FA_DISP_IDC_GRB_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_FA_DISP_IDC_GRB_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_FA_DISP_ALIV_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_FA_DISP_ALIV_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_FA_DISP_ALIV_SAME | 0/1 | - | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_FA_DISP_PRG_GRB_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_FA_DISP_PRG_GRB_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0400 | - | - | - | - | - |

### BF_FA_RX_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_KLEMMEN_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_FA_KLEMMEN_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | - |

### BF_A_RX_DISP_GRDT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_A_DISP_PO_GRB_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_A_DISP_PO_GRB_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | - |
| STAT_A_CRC_GRDT_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0004 | - | - | - | - | - |
| STAT_A_CRC_GRDT_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0008 | - | - | - | - | - |
| STAT_A_DISP_IDC_GRB_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0010 | - | - | - | - | - |
| STAT_A_DISP_IDC_GRB_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0020 | - | - | - | - | - |
| STAT_A_DISP_ALIV_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0040 | - | - | - | - | - |
| STAT_A_DISP_ALIV_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0080 | - | - | - | - | - |
| STAT_A_DISP_ALIV_SAME | 0/1 | - | unsigned int | 0x0100 | - | - | - | - | - |
| STAT_A_DISP_PRG_GRB_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0200 | - | - | - | - | - |
| STAT_A_DISP_PRG_GRB_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0400 | - | - | - | - | - |

### BF_A_RX_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_A_KLEMMEN_TIMEOUT_AKTIV | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | - |
| STAT_A_KLEMMEN_SIGNALFEHLER | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | - |

### RES_0X4060

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_M40_M30_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei -40 °C bis -30 °C |
| STAT_TEMP_M29_M20_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei -29 °C bis -20 °C |
| STAT_TEMP_M19_M10_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei -19 °C bis -10 °C |
| STAT_TEMP_M9_0_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei -9 °C bis 0 °C |
| STAT_TEMP_P1_P10_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 1 °C bis 10 °C |
| STAT_TEMP_P11_P20_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 11 °C bis 20 °C |
| STAT_TEMP_P21_P30_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 21 °C bis 30 °C |
| STAT_TEMP_P31_P40_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 31 °C bis 40 °C |
| STAT_TEMP_P41_P50_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 41 °C bis 50 °C |
| STAT_TEMP_P51_P60_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 51 °C bis 60 °C |
| STAT_TEMP_P61_P70_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 61 °C bis 70 °C |
| STAT_TEMP_P71_P80_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 71 °C bis 80 °C |
| STAT_TEMP_P81_P90_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 81 °C bis 90 °C |
| STAT_TEMP_P91_P100_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 91 °C bis 100 °C |
| STAT_TEMP_P101_P105_WERT | h | - | unsigned long | - | - | - | 12 | - | Betriebsstunden bei 101 °C bis 105 °C |

### RES_0X4500

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_PARK1_WERT | HEX | - | unsigned int | - | - | - | - | - | ADC Wert P1 |
| STAT_ADC_PARK2_WERT | HEX | - | unsigned int | - | - | - | - | - | ADC Wert P2 |
| STAT_ADC_UNLOCK1_WERT | HEX | - | unsigned int | - | - | - | - | - | ADC Wert Unlock1 |
| STAT_ADC_UNLOCK2_WERT | HEX | - | unsigned int | - | - | - | - | - | ADC Wert Unlock2 |
| STAT_PARKTASTER_1_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | - | - | - | Status Parktaster Kontakt 1; siehe TAB_ENTR_TASTER |
| STAT_PARKTASTER_2_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | - | - | - | Status Parktaster Kontakt 2; siehe TAB_ENTR_TASTER |
| STAT_ENTR_TASTER_1_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | - | - | - | Status Entriegelungstaster Kontakt 1; siehe TAB_ENTR_TASTER |
| STAT_ENTR_TASTER_2_NR | 0-n | - | unsigned int | - | TAB_ENTR_TASTER | - | - | - | Status Entriegelungstaster Kontakt 2; siehe TAB_ENTR_TASTER |

### TAB_TEMP_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Temperatur im normalen Bereich : 0°C bis 80°C |
| 0x01 | Temperatur zu hoch : 81°C bis 105°C |
| 0x02 | Temperatur zu niedrig : -40°C bis -1°C |
| 0xFF | ungültig |

### ARG_0X4600

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | string | - | - | - | - | - | - | - | ein- oder auschalten Steuerung Schaltpunkt Modus  ein = Schaltpunktmodus einschalten aus = Schaltpunktmodus ausschalten |

### ARG_0X4900

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | unsigned char | - | - | 1 | 1 | 0 | - | - | 1 = Run In Mode einschalten 0 = Run In Mode ausschalten |
| PARAMETER | - | - | unsigned char | - | - | 1 | 1 | 0 | - | - | Minuten |

### RES_0X4510

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAW_1_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_2_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_3_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_4_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_5_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_6_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_7_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_8_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_9_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_10_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_11_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_12_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_13_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_14_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_15_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_16_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_17_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_18_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_19_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_20_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_21_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_22_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_23_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_24_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_25_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_26_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_27_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_28_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_29_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_30_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_31_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_RAW_32_WERT | HEX | - | unsigned int | - | - | - | - | - | - |

### ARG_0X4610

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | 0 | 1 | 1 = Beleuchtung 100 % 0 = Beleuchtung Normalbetrieb |
