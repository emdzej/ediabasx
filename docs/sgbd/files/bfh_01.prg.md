# bfh_01.prg

## General

|  |  |
| --- | --- |
| File | bfh_01.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 85 |
| Origin | BMW EI-60 Andreas_Huber |
| Revision | 2.019 |
| Author | Temic Komfort Richard_Kirschner, Temic Komfort Markus_Glotz, Te |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sitzsteuergeraet_Beifahrer_Heck |  |  |
| ORIGIN | string | BMW EI-60 Andreas_Huber |  |  |
| REVISION | string | 2.019 |  |  |
| AUTHOR | string | Temic Komfort Richard_Kirschner, Temic Komfort Markus_Glotz, Te |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.12 |  |  |
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

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $04 report activated events

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

### STEUERN_SV_NORMIERLAUF

Ansteuerung der Verstellmotoren über I/O-Control JobHeaderFormat 0xD77D STEUERN_SV_NORMIERLAUF

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | AUS, AN |
| MOTOR_1 | string | Motor-Bezeichnung: "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_1 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_2 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_2 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_3 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_3 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_4 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_4 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_5 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_5 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_6 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_6 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_7 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_7 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_8 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_8 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_9 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_9 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_10 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_10 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_11 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_11 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_12 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_12 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_13 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_13 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_14 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_14 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_15 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_15 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_16 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_16 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_17 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_17 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_18 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_18 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_19 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_19 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_20 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_20 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_21 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_21 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_22 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_22 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_23 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_23 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |
| MOTOR_24 | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV", "FEH", "STV", "LBV", "LKV" |
| AKTION_24 | string | Bewegungsrichtung bzw. Stop: "plus", "minus", "stop", "home" ,"adap_vor", "adap_zur" |

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
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
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
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
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
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
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
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
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
| 0x5780 | Fussgängerschutz Sensorband | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
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
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | AB Volvo |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic |
| 0x0061 | Flextronics / Sidler Automotive |
| 0x0062 | EAO Automotive |
| 0x0063 | helag-electronic |
| 0x0064 | Magna International |
| 0x0065 | ARVINMERITOR |
| 0x0067 | Defond Holding / BJAutomotive |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Sitzheizung, Lordose, Sitzklima und Aktivsitz deaktiviert |
| 0x01 | Spezieller Energiesparmode | Sitzheizung, Lordose, Sitzklima und Aktivsitz deaktiviert |
| 0x02 | Betriebsmode 2 | keine Funktion deaktiviert |
| 0x03 | MOST-Mode | Sitzheizung, Lordose, Sitzklima und Aktivsitz deaktiviert |
| 0x04 | Betriebsmode 4 | Sitzheizung, Lordose, Sitzklima und Aktivsitz deaktiviert |
| 0x05 | Betriebsmode 5 | Sitzheizung, Lordose, Sitzklima und Aktivsitz deaktiviert |
| 0x06 | Betriebsmode 6 | keine Funktion deaktiviert |
| 0x07 | Betriebsmode 7 | keine Funktion deaktiviert |
| 0x08 | Betriebsmode 8 | keine Funktion deaktiviert |
| 0x09 | Betriebsmode 9 | keine Funktion deaktiviert |
| 0x0A | Betriebsmode 10 | keine Funktion deaktiviert |
| 0x0B | Betriebsmode 11 | keine Funktion deaktiviert |
| 0x0C | Betriebsmode 12 | keine Funktion deaktiviert |
| 0x0D | Betriebsmode 13 | keine Funktion deaktiviert |
| 0x0E | Betriebsmode 14 | keine Funktion deaktiviert |
| 0x0F | Betriebsmode 15 | keine Funktion deaktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026A00 | Energiesparmode aktiv | 0 |
| 0x02FF6A | DM_TEST_APPL,  DTC für Absicherung Funktion Diagnosemaster (wird durch Telegramm gesetzt, nie durch Funktionssoftware) | 0 |
| 0x802F80 | Hallgeber SLV: Kurzschluss nach Minus | 0 |
| 0x802F81 | Hallgeber SLV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F82 | Hallgeber SHV: Kurzschluss nach Minus | 0 |
| 0x802F83 | Hallgeber SHV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F84 | Hallgeber LNV: Kurzschluss nach Minus | 0 |
| 0x802F85 | Hallgeber LNV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F86 | Hallgeber SNV: Kurzschluss nach Minus | 0 |
| 0x802F87 | Hallgeber SNV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F88 | Hallgeber KHV: Kurzschluss nach Minus | 0 |
| 0x802F89 | Hallgeber KHV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F8C | Hallgeber STV: Kurzschluss nach Minus | 0 |
| 0x802F8D | Hallgeber STV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F8E | Hallgeber LBV: Kurzschluss nach Minus | 0 |
| 0x802F8F | Hallgeber LBV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F90 | Hallgeber LKV: Kurzschluss nach Minus | 0 |
| 0x802F91 | Hallgeber LKV: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802F92 | Motor SLV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F93 | Motor SLV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802F94 | Motor SHV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F95 | Motor SHV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802F96 | Motor LNV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F97 | Motor LNV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802F98 | Motor SNV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F99 | Motor SNV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802F9A | Motor KHV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F9B | Motor KHV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802F9C | Motor FEH: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F9D | Motor FEH: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802F9E | Motor STV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802F9F | Motor STV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802FA0 | Motor LBV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802FA1 | Motor LBV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802FA2 | Motor LKV: Überlast oder Kurzschluss Motor oder Kurzschluss Low-Side nach Plus oder Kurzschluss High-Side nach Minus | 0 |
| 0x802FA3 | Motor LKV: Kurzschluss Low-Side nach Minus oder Unterbrechung | 0 |
| 0x802FA4 | Temperaturfühler Heizfeld Kissen: Kurzschluss nach Plus | 0 |
| 0x802FA5 | Temperaturfühler Heizfeld Kissen: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x802FA6 | Temperaturfühler Heizfeld Kissen: Fühler defekt | 0 |
| 0x802FA7 | Temperaturfühler Heizfeld Lehne: Kurzschluss nach Plus | 0 |
| 0x802FA8 | Temperaturfühler Heizfeld Lehne: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x802FA9 | Temperaturfühler Heizfeld Lehne: Fühler defekt | 0 |
| 0x802FAA | Heizfeld Kissen: Kurzschluss nach Plus oder Überlast | 0 |
| 0x802FAB | Heizfeld Kissen: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802FAC | Heizfeld Lehne: Kurzschluss nach Plus oder Überlast | 0 |
| 0x802FAD | Heizfeld Lehne: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802FAF | Versorgung Sitzklima: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802FB0 | Versorgung Sitzklima: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802FB1 | Steuerung Sitzklima Kissen: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802FB2 | Steuerung Sitzklima Kissen: Kurzschluss nach Plus | 0 |
| 0x802FB3 | Steuerung Sitzklima Kissen: Mindestens ein Lüfter in Alarmzustand | 0 |
| 0x802FB4 | Steuerung Sitzklima Lehne: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802FB5 | Steuerung Sitzklima Lehne: Kurzschluss nach Plus | 0 |
| 0x802FB6 | Steuerung Sitzklima Lehne: Mindestens ein Lüfter in Alarmzustand | 0 |
| 0x802FB7 | Motor Aktivsitz: Nockenmotor Kurzschluss oder Unterbrechung, Nockenschalter Kurzschluss oder Unterbrechung | 0 |
| 0x802FB8 | Magnet Aktivsitz: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802FB9 | Magnet Aktivsitz: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802FBA | Ventilblock Lordosenstütze: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802FBB | Ventilblock Lordosenstütze: Kurzschluss nach Plus oder Ventil nicht gesteckt | 0 |
| 0x802FBC | Pumpe Lordosenstütze: Kurzschluss nach Minus oder Überlast | 0 |
| 0x802FBD | Pumpe Lordosenstütze: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802FBE | Schalter SVS: Kurzschluss nach Minus | 0 |
| 0x802FBF | Schalter SVS: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802FC0 | Schalter SVS: Schalter hängt | 0 |
| 0x802FC1 | Schalter FEH: Beidseitiger Kurzschluss nach Minus | 0 |
| 0x802FC2 | Schalter FEH: Schalter hängt | 0 |
| 0x802FC3 | Schalter LVK: Kurzschluss nach Minus | 0 |
| 0x802FC4 | Schalter LVK: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x802FC5 | Schalter LVK: Schalter defekt | 0 |
| 0x802FC6 | Schalter LIN: Schalter hängt | 0 |
| 0x802FC7 | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung vor | 0 |
| 0x802FC8 | ÜKB: Adaptionsbereichsueberschreitung bei Verstellung zurück | 0 |
| 0x802FCA | Sitzpositionsübergabe Frau/Mann: Kein Versenden der Sitzposition wegen fehlender oder ungültiger Kalibrierung (SLV vorne) | 0 |
| 0x802FCE | Versorgungsspannung Relais (30s): Kurzschluss nach Minus oder Treiber defekt | 0 |
| 0x802FCF | Versorgungsspannung Relais (30s): Kurzschluss nach Plus | 0 |
| 0x802FD3 | Überspannung erkannt | 1 |
| 0x802FD4 | Unterspannung erkannt | 1 |
| 0x802FD5 | Schalter LIN: Fehler Überlastung PWM (Beleuchtung) | 0 |
| 0x802FD6 | Schalter LIN: Fehler im EEPROM | 0 |
| 0x803000 | Codierung: Steuergerät nicht codiert | 0 |
| 0x803001 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x803002 | Codierung: Signatur für Daten ungültig | 0 |
| 0x803003 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x803004 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x803005 | ÜKB: Abschaltung ÜKB wegen fehlender Kalibrierung (SLV hinten) | 0 |
| 0x803006 | Kennfeld Sitzbelüftung: eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV hinten und/oder SNV oben) | 0 |
| 0x803007 | Schalter LIN: Falsche Variant ID | 0 |
| 0x803008 | PIA: Portierung wegen fehlender Kalibrierung eingeschränkt | 0 |
| 0x803009 | Massage Druckverteiler: Kurzschluss nach Minus oder Überlast | 0 |
| 0x803010 | Massage Druckverteiler: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x803011 | Massage Druckverteiler: Pumpenanforderung ausgeblieben | 0 |
| 0x803012 | Überwachung Leiterplattentemperatur: Abschaltung Sitzverstellung wegen Übertemperatur | 1 |
| 0x803013 | Überwachung Leiterplattentemperatur: Abschaltung Sitzheizung wegen Übertemperatur | 1 |
| 0x803014 | Interner Steuergrätefehler: EEPROM defekt | 0 |
| 0x803015 | Interner Steuergerätefehler: Versorgungsspannung  (U12s oder U12h) | 0 |
| 0x803016 | Interner Steuergerätefehler: Checksummenfehler im ÜKB Datenbereich | 0 |
| 0x803017 | Interner Steuergerätefehler: Unplausibler Wert bei der Strommessung für ÜKB | 0 |
| 0x803018 | Heizung: Abschaltung wegen Heizleistungsbegrenzung im Kissen | 1 |
| 0x803019 | Heizung: Abschaltung wegen Heizleistungsbegrenzung in der Lehne | 1 |
| 0x80301A | Gepaeckraumschalter LIN: Schalter hängt | 0 |
| 0x80301B | Gepaeckraumschalter LIN: Fehler Überlastung PWM (Beleuchtung) | 0 |
| 0x80301C | Gepaeckraumschalter LIN: Fehler im EEPROM | 0 |
| 0x80301D | Gepaeckraumschalter LIN: Falsche Variant ID | 0 |
| 0x80301F | F07 Fondsitz Multifunktion : eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV vorne und/oder LNV hinten) | 0 |
| 0x803020 | Motor SLV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803021 | Motor SHV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803022 | Motor LNV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803023 | Motor SNV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803024 | Motor KHV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803025 | Motor FEH: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803026 | Motor STV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803027 | Motor LBV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803028 | Motor LKV: Abschaltung durch Motorverstellzeitbegrenzung | 0 |
| 0x803029 | Kennfeld Lehnenklappung: eingeschränkte Verstellung wegen fehlender Kalibrierung (SLV hinten und/oder SHV unten und/oder KHV unten) | 0 |
| 0x80302A | Kennfeld KHV: eingeschränkte Verstellung wegen fehlender Kalibrierung (SHV unten und/oder LNV vorne und/oder KHV unten) | 0 |
| 0xE3840B | K-CAN Bus: Defekt erkannt | 0 |
| 0xE38414 | K-CAN: Control Module Bus OFF | 0 |
| 0xE38BFF | DM_TEST_COM,  DTC für Absicherung Funktion Diagnosemaster (wird durch Telegramm gesetzt, nie durch Funktionssoftware) | 0 |
| 0xE38C1E | LIN-Bus: Sitzverstellschalter antwortet nicht | 0 |
| 0xE38C1F | LIN-Bus: Gepaeckraumschalter antwortet nicht | 0 |
| 0xE3AC00 | Signal (0x23A) ungültig empfangen: Nummer_Schlüssel_Personalisierung_Aktuell | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x6A0004 | PIA_E_IO_ERROR | 0 |
| 0x6A0005 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x6A0006 | NVM_E_READ_ALL_FAILED | 0 |
| 0x6A0007 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x6A0008 | NVM_E_ERASE_FAILED | 0 |
| 0x6A0009 | NVM_E_CONTROL_FAILED | 0 |
| 0x6A0010 | NVM_E_READ_FAILED | 0 |
| 0x6A0011 | NVM_E_WRITE_FAILED | 0 |
| 0x6A0012 | DM_Queue_FULL | 0 |
| 0x6A0013 | DM_Queue_DELETED | 0 |
| 0xE3ABFF | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0xE3ABFE | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0x6A0000 | Hallpufferueberlauf | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVSITZ | 0xD77A | - | Status des eingelesenen AD-Werts der Messeingänge  Sense 1/2 (Motor AS) und Magnet AS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD77A |
| KONFIGURATION_MOTOREN | 0xD734 | - | Ausgabe der Motorkonfiguration der Sitzverstellmotoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD734 |
| KONFIGURATION_SITZ | 0xD735 | - | Rückgabe der Konfiguration des verbauten Sitzes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD735 |
| LORDOSE | 0xD774 | - | Statusabfrage der eingelesenen Werte der  elektrischen Lordosestütze des Sitzes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD774 |
| MASSAGE | 0xD77F | - | Status des eingelesenen AD-Wert der Messeingänge  Sense 1/2 (Motor AS) und Magnet AS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD77F |
| NACHLAUFZEIT_KLEMME_30B | 0xDB2E | STAT_NACHLAUFZEIT_KLEMME_30B_WERT | Auslesen der von CAS über Bus versendeten Nachlaufzeit der Klemme 30B. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument NACHLAUFZEIT_KLEMME_30B. - Beim CAS-Steuergerät (Sender) wird der Wert des internen Timers im CAS ausgegeben und nicht der Wert der als CAN-Botschaft qualifiziert gesendet wird. | s | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_KISSEN | 0xD74F | - | Statusabfrage des Kissen der Sitzheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD74F |
| SITZHEIZUNG_LEHNE | 0xD76D | - | Statusabfrage der Lehne der Sitzheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD76D |
| SITZHEIZUNG_STUFE | 0xD74D | STAT_SHZ_STUFE_WERT | Statusabfrage der Sitzheizung. | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SITZKLIMA_GEREGELT | 0xD78D | - | Statusabfrage und Ansteuerung der Sitzbelüftung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD78D | RES_0xD78D |
| SITZSG_LEITERPLATTE_TEMP | 0xD736 | - | Sitz-Steuergerät: Statusabfrage intern gemessener  Leiterplattentemperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD736 |
| SITZ_INIT | 0xD743 | STAT_SITZ_INIT | Auslesen des Status der Initialisierung des Sitzmoduls. | 0-n | - | - | int | TAB_INIT | - | - | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_SITZKLIMA | 0xD772 | - | Statusabfrage der Belüftung des Sitzes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD772 |
| STEUERN_AKTIVSITZ | 0xD77B | - | Ansteuerung der Aktivsitz Aktuatoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD77B | - |
| STEUERN_LORDOSE | 0xD776 | - | Ansteuerung der Lordose Aktuatoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD776 | - |
| STEUERN_MASSAGE | 0xD77C | - | Ansteuerung der Aktivsitz Aktuatoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD77C | - |
| STEUERN_SITZHEIZUNG | 0xD7E1 | - | Ansteuerung der Sitzheizung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD7E1 | - |
| STEUERN_SITZKLIMA | 0xD773 | - | Ansteuerung der Sitzklima | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD773 | - |
| STEUERN_SV_HALLZAEHLER_RESET | 0xD752 | - | Reset der Hallzähler durchführen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD752 | - |
| STEUERN_SV_MOTOR | 0xD750 | - | Ansteuerung der Verstellmotoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD750 | - |
| STEUERN_SV_SCHALTER_LED | 0xD74E | - | Ein-/Ausschalten der Memory LED des direkt  angeschlossenen Sitzverstellschalters | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD74E | - |
| SV_ADAPTIONSLAUF | 0xD751 | - | Statusabfrage der Sitzverstellung, ob bereits ein Adaptionslauf durchgeführt  wurde. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD751 |
| SV_AD_LVK | 0xD7E0 | - | Messwert Sense Sitz-Lehne-Verriegelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7E0 |
| SV_HALL_FEH | 0xD769 | STAT_SV_COUNTER_FEH_WERT | Hall-Statusabfrage der Fond Einstiegshilfe | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_KHV | 0xD768 | STAT_SV_COUNTER_KHV_WERT | Hall-Statusabfrage der elektrischen Kopfstützen | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_LBV | 0xD76B | STAT_SV_COUNTER_LBV_WERT | Hall-Statusabfrage der elektrischen Lehnenbreitenverstellung | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_LKV | 0xD76C | STAT_SV_COUNTER_LKV_WERT | Hall-Statusabfrage des elektrischen Lehnenkopfs | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_LNV | 0xD766 | STAT_SV_COUNTER_LNV_WERT | Hall-Statusabfrage der elektrischen Lehnenneigung | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_SHV | 0xD765 | STAT_SV_COUNTER_SHV_WERT | Hall-Statusabfrage der elektrischen Sitzhöhenverstellung | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_SLV | 0xD764 | STAT_SV_COUNTER_SLV_WERT | Hall-Statusabfrage der elektrischen Sitzlängsverstellung | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_SNV | 0xD767 | STAT_SV_COUNTER_SNV_WERT | Hall-Statusabfrage der elektrischen Sitzneigungverstellung | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_HALL_STV | 0xD76A | STAT_SV_COUNTER_STV_WERT | Hall-Statusabfrage der elektrischen Sitztiefenverstellung | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_NORMIERLAUF_AKTIV | 0xD753 | STAT_SV_NORMIERLAUF_AKTIV | Statusabfrage der Sitzverstellung,  ob Normierlauf aktiv ist | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_NORMIERLAUF_FEH | 0xD759 | - | Statusabfrage der Normierung der elektrischen Fondeinstiegshilfeverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD759 |
| SV_NORMIERLAUF_KHV | 0xD758 | - | Statusabfrage der Normierung der elektischen Kopfstützen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD758 |
| SV_NORMIERLAUF_LBV | 0xD75B | - | Statusabfrage der Normierung der elektischen Lehnenbreitenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD75B |
| SV_NORMIERLAUF_LKV | 0xD75C | - | Statusabfrage der Normierung des elektischen Lehnenkopfes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD75C |
| SV_NORMIERLAUF_LNV | 0xD756 | - | Statusabfrage der Normierung der elektischen Lehnenneigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD756 |
| SV_NORMIERLAUF_SHV | 0xD755 | - | Statusabfrage der Normierung der elektischen Sitzhöhenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD755 |
| SV_NORMIERLAUF_SLV | 0xD754 | - | Statusabfrage der Normierung der elektischen Sitzlängsverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD754 |
| SV_NORMIERLAUF_SNV | 0xD757 | - | Statusabfrage der Normierung der elektischen Sitzneigungverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD757 |
| SV_NORMIERLAUF_STV | 0xD75A | - | Statusabfrage der Normierung der elektischen Sitztiefenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD75A |
| SV_SCHALTER_AKTIVSITZ | 0xD779 | STAT_SV_TASTE_AKTIVSITZ_EIN | Ausgabe des Status des Schalters des Aktivsitz vorne oder Massagesitzes hinten 1: Taste betätigt 0: Taste nicht betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_FEH | 0xD749 | - | Statusabfrage der Taste Fond Einstiegshilfe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD749 |
| SV_SCHALTER_GEPAECK_EBEN | 0xD790 | STAT_SV_TASTE_EBEN_EIN | Statusabfrage der Taste Ebener Ladeboden im Gepäckraum | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_GEPAECK_RES | 0xD78E | STAT_SV_TASTE_RESET_EIN | Statusabfrage der Taste Reset im Gepäckraum | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_GEPAECK_TRANSP | 0xD78F | STAT_SV_TASTE_GEPAECK_TRANSP_EIN | Statusabfrage der Taste Transport im Gepäckraum | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_KHV | 0xD748 | - | Statusabfrage der Taste der Kopfstütze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD748 |
| SV_SCHALTER_LBV | 0xD74B | - | Statusabfrage der Taste der Lehnenbreitenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD74B |
| SV_SCHALTER_LKV | 0xD74C | - | Statusabfrage der Taste der Lehnenkopfverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD74C |
| SV_SCHALTER_LNV | 0xD746 | - | Statusabfrage der Taste der Lehnenneigungverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD746 |
| SV_SCHALTER_MEM_1 | 0xD75D | STAT_SV_TASTE_MEM_1_EIN | Statusabfrage der Sitz-Taste für Memory-Position 1,  0: Taste nicht betätigt; 1: Taste betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_MEM_2 | 0xD75E | STAT_SV_TASTE_MEM_2_EIN | Statusabfrage der Sitz-Taste für Memory-Position 2 0: Taste nicht betätigt; 1: Taste betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_MEM_M | 0xD75F | STAT_SV_TASTE_MEM_M_EIN | Statusabfrage der Sitz-Memory-Taste 0: Taste nicht betätigt; 1: Taste betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_MEM_RES | 0xD78C | STAT_SV_TASTE_MEM_RES_EIN | Statusabfrage der Sitz-Memory-Taste Reset 0: Taste nicht betätigt; 1: Taste betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_SCHALTER_SHV | 0xD745 | - | Statusabfrage der Taste der Sitzhöhenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD745 |
| SV_SCHALTER_SLV | 0xD744 | - | Statusabfrage der Taste der Sitzlängsverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD744 |
| SV_SCHALTER_SNV | 0xD747 | - | Statusabfrage der Taste der Sitzneigungverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD747 |
| SV_SCHALTER_STV | 0xD74A | - | Statusabfrage der Taste der Sitztiefenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD74A |
| SV_TASTER_BFH_BF | 0xD7E4 | STAT_SV_TASTER_BFH_BF_EIN | Ausgabe des Status des Umschalters für die Beifahrerfernbedienung vom Fond. (Verstellung Beifahrersitz von Beifahrersitz hinten). | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SV_TASTER_FA_BF | 0xD7E2 | STAT_SV_TASTER_FA_BF_EIN | Ausgabe des Status des Umschalters für die Gentlemanfunktion (Verstellung Beifahrersitz vom Fahrersitz aus). | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| TASTER_LORDOSE_EIN | 0xD775 | - | Status der einzelnen Taster der elektrischen Lordosestütze des Sitzes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD775 |
| TASTER_SITZHEIZUNG | 0xD76E | STAT_SV_TASTE_SITZHEIZUNG_EIN | Statusabfrage der Taste der Sitzheizung | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| TASTER_SITZKLIMA | 0xD733 | STAT_SV_TASTE_SITZKLIMA_EIN | Ausgabe des Status des Schalters der Sitzlüftung. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| VERSTELLZAEHLER | 0xD77E | - | Ausgabe der Grenze der codierten Anzahl der Verstellungen, wann die CC-Meldung für den Normierlauf gesendet wird. Ausgabe der Anzahl der bereits erfolgten Verstellungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD77E |
| VERSTELLZAEHLER_LNV_MFSF | 0xD792 | STAT_ZAEHLER_LNV_NORM_HINTEN_WERT | Anzahl der bisher durchgeführten Verstellungen der LNV am Multifunktionssitz Fond (MFSF) seit letzter Normierung hinten. | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| ReadDeveleopmentInfo | 0x4010 | - | Liefert interne Versionsnummer der Applikation und des Bootloader | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010 |
| STATUS_SITZ_INIT_DETAIL | 0x4005 | - | Liefert die Stati der einzelnen Initialisierungsumfaenge im Sitzmodul. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005 |
| SV_NORMIERLAUF_DETAIL | 0x4006 | STAT_SV_NORMIERLAUF_DETAIL | Statusabfrage der Sitzverstellung, ob bereits ein Normierlauf durchgeführt wurde und mit welchem Ergebnis | 0-n | - | - | unsigned char | TAB_STAT_NL | - | - | - | - | 22 | - | - |
| STATUS_SITZ_INIT_DETAIL2 | 0x4007 | - | Liefert die Stati der einzelnen Initialisierungsumfaenge im Sitzmodul. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007 |

### TAB_LVK_WERT

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Masseschluss | Masseschluss |
| 0x01 | verriegelt | verriegelt |
| 0x02 | entriegelt | entriegelt |
| 0x03 | ungueltig | ungueltig |

### TAB_NORMIERSTATUS

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | nicht normiert | nicht_normiert |
| 0x01 | normiert | normiert |

### TAB_KONFIG_MOTOR

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | nicht verbaut | Motor nicht verbaut |
| 0x01 | Motor verbaut | Motor verbaut |
| 0x02 | Motor und Hallgeber verbaut | Motor und Hallgeber verbaut |

### TAB_LP_TEMP_WERT

| WERT | TEXT |
| --- | --- |
| 1 | -50 |
| 2 | -40 |
| 3 | -33 |
| 4 | -28 |
| 5 | -24 |
| 6 | -21 |
| 7 | -18 |
| 8 | -15 |
| 9 | -13 |
| 10 | -11 |
| 11 | -9 |
| 12 | -7 |
| 13 | -5 |
| 14 | -4 |
| 15 | -2 |
| 16 | -1 |
| 17 | 1 |
| 18 | 2 |
| 19 | 3 |
| 20 | 4 |
| 21 | 6 |
| 22 | 7 |
| 23 | 8 |
| 24 | 9 |
| 25 | 10 |
| 26 | 11 |
| 27 | 12 |
| 28 | 13 |
| 29 | 14 |
| 30 | 15 |
| 31 | 16 |
| 32 | 17 |
| 33 | 17 |
| 34 | 18 |
| 35 | 19 |
| 36 | 20 |
| 37 | 21 |
| 38 | 22 |
| 39 | 22 |
| 40 | 23 |
| 41 | 24 |
| 42 | 25 |
| 43 | 25 |
| 44 | 26 |
| 45 | 27 |
| 46 | 27 |
| 47 | 28 |
| 48 | 29 |
| 49 | 29 |
| 50 | 30 |
| 51 | 31 |
| 52 | 31 |
| 53 | 32 |
| 54 | 33 |
| 55 | 33 |
| 56 | 34 |
| 57 | 35 |
| 58 | 35 |
| 59 | 36 |
| 60 | 36 |
| 61 | 37 |
| 62 | 38 |
| 63 | 38 |
| 64 | 39 |
| 65 | 39 |
| 66 | 40 |
| 67 | 40 |
| 68 | 41 |
| 69 | 42 |
| 70 | 42 |
| 71 | 43 |
| 72 | 43 |
| 73 | 44 |
| 74 | 44 |
| 75 | 45 |
| 76 | 45 |
| 77 | 46 |
| 78 | 47 |
| 79 | 47 |
| 80 | 48 |
| 81 | 48 |
| 82 | 49 |
| 83 | 49 |
| 84 | 50 |
| 85 | 50 |
| 86 | 51 |
| 87 | 51 |
| 88 | 52 |
| 89 | 52 |
| 90 | 53 |
| 91 | 54 |
| 92 | 54 |
| 93 | 55 |
| 94 | 55 |
| 95 | 56 |
| 96 | 56 |
| 97 | 57 |
| 98 | 57 |
| 99 | 58 |
| 100 | 58 |
| 101 | 59 |
| 102 | 59 |
| 103 | 60 |
| 104 | 60 |
| 105 | 61 |
| 106 | 61 |
| 107 | 62 |
| 108 | 62 |
| 109 | 63 |
| 110 | 63 |
| 111 | 64 |
| 112 | 64 |
| 113 | 65 |
| 114 | 66 |
| 115 | 66 |
| 116 | 67 |
| 117 | 67 |
| 118 | 68 |
| 119 | 68 |
| 120 | 69 |
| 121 | 69 |
| 122 | 70 |
| 123 | 70 |
| 124 | 71 |
| 125 | 71 |
| 126 | 72 |
| 127 | 72 |
| 128 | 73 |
| 129 | 73 |
| 130 | 74 |
| 131 | 75 |
| 132 | 75 |
| 133 | 76 |
| 134 | 76 |
| 135 | 77 |
| 136 | 77 |
| 137 | 78 |
| 138 | 78 |
| 139 | 79 |
| 140 | 80 |
| 141 | 80 |
| 142 | 81 |
| 143 | 81 |
| 144 | 82 |
| 145 | 82 |
| 146 | 83 |
| 147 | 84 |
| 148 | 84 |
| 149 | 85 |
| 150 | 85 |
| 151 | 86 |
| 152 | 87 |
| 153 | 87 |
| 154 | 88 |
| 155 | 88 |
| 156 | 89 |
| 157 | 90 |
| 158 | 90 |
| 159 | 91 |
| 160 | 92 |
| 161 | 92 |
| 162 | 93 |
| 163 | 94 |
| 164 | 94 |
| 165 | 95 |
| 166 | 96 |
| 167 | 96 |
| 168 | 97 |
| 169 | 98 |
| 170 | 98 |
| 171 | 99 |
| 172 | 100 |
| 173 | 100 |
| 174 | 101 |
| 175 | 102 |
| 176 | 103 |
| 177 | 103 |
| 178 | 104 |
| 179 | 105 |
| 180 | 106 |
| 181 | 106 |
| 182 | 107 |
| 183 | 108 |
| 184 | 109 |
| 185 | 110 |
| 186 | 110 |
| 187 | 111 |
| 188 | 112 |
| 189 | 113 |
| 190 | 114 |
| 191 | 115 |
| 192 | 116 |
| 193 | 117 |
| 194 | 117 |
| 195 | 118 |
| 196 | 119 |
| 197 | 120 |
| 198 | 121 |
| 199 | 122 |
| 200 | 123 |
| 201 | 124 |
| 202 | 126 |
| 203 | 127 |
| 204 | 128 |
| 205 | 129 |
| 206 | 130 |
| 207 | 131 |
| 208 | 132 |
| 209 | 134 |
| 210 | 135 |
| 211 | 136 |
| 212 | 137 |
| 213 | 139 |
| 214 | 140 |
| 215 | 142 |
| 216 | 143 |
| 217 | 145 |
| 218 | 146 |
| 219 | 148 |
| 220 | 149 |
| 221 | 151 |
| 222 | 153 |
| 223 | 155 |
| 224 | 157 |
| 225 | 158 |
| 226 | 160 |
| 227 | 163 |
| 228 | 165 |
| 229 | 167 |
| 230 | 169 |
| 231 | 172 |
| 232 | 174 |
| 233 | 177 |
| 234 | 180 |
| 235 | 183 |
| 236 | 186 |
| 237 | 190 |
| 238 | 193 |
| 239 | 197 |
| 240 | 201 |
| 241 | 206 |
| 242 | 211 |
| 243 | 216 |
| 244 | 222 |
| 245 | 229 |
| 246 | 236 |
| 247 | 244 |
| 248 | 254 |
| 249 | 265 |
| 250 | 279 |
| 251 | 296 |
| 252 | 318 |
| 253 | 349 |
| 254 | 398 |
| 255 | 503 |

### TAB_MOTOREN

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | SLV | MOTOR-SLV |
| 0x01 | SHV | MOTOR-SHV |
| 0x02 | LNV | MOTOR-LNV |
| 0x03 | SNV | MOTOR-SNV |
| 0x04 | KHV | MOTOR-KHV |
| 0x05 | FEH | MOTOR-FEH |
| 0x06 | STV | MOTOR-STV |
| 0x07 | LBV | MOTOR-LBV |
| 0x08 | LKV | MOTOR-LKV |

### TAB_RICHTUNG

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 1 | VOR | VOR;HOCH;BREIT |
| 2 | ZUR | ZUR;TIEF;SCHMAL |
| 0 | STOP | STOP |

### TAB_AKTIONEN

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0 | STOP | STOP |
| 1 | START | START |

### TAB_SV_MOTOREN

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | SLV | MOTOR-SLV |
| 0x01 | SHV | MOTOR-SHV |
| 0x02 | LNV | MOTOR-LNV |
| 0x03 | SNV | MOTOR-SNV |
| 0x04 | KHV | MOTOR-KHV |
| 0x05 | FEH | MOTOR-FEH |
| 0x06 | STV | MOTOR-STV |
| 0x07 | LBV | MOTOR-LBV |
| 0x08 | LKV | MOTOR-LKV |

### TAB_ARG_RICHTUNG

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 1 | PLUS | VOR;HOCH;BREIT |
| 2 | MINUS | ZUR;TIEF;SCHMAL |
| 0 | STOP | STOP |
| 3 | HOME | HOME |
| 4 | ADAP_VOR | ADAP_VOR |
| 5 | ADAP_ZUR | ADAP_ZUR |

### TAB_ARG_MOTOREN

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | SLV | MOTOR-SLV |
| 0x01 | SHV | MOTOR-SHV |
| 0x02 | LNV | MOTOR-LNV |
| 0x03 | SNV | MOTOR-SNV |
| 0x04 | KHV | MOTOR-KHV |
| 0x05 | FEH | MOTOR-FEH |
| 0x06 | STV | MOTOR-STV |
| 0x07 | LBV | MOTOR-LBV |
| 0x08 | LKV | MOTOR-LKV |

### TAB_ARG_STUFEN_SHSL

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0 | STUFE_0 | STUFE_0 |
| 1 | STUFE_1 | STUFE_1 |
| 2 | STUFE_2 | STUFE_2 |
| 3 | STUFE_3 | STUFE_3 |
| 254 | STUFENLOS_MIT_NTC | STUFENLOS_MIT_NTC |
| 255 | STUFENLOS_OHNE_NTC | STUFENLOS_OHNE_NTC |

### TAB_DREHZAHLEN

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0 | DREHZAHL_NIEDRIG | DREHZAHL_NIEDRIG |
| 1 | DREHZAHL_HOCH | DREHZAHL_HOCH |

### TAB_AKTIVSITZ

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0 | MAGNET | MAGNET |
| 1 | NOCKENMOTOR | NOCKENMOTOR |
| 2 | ZYKLUS | ZYKLUS |

### TAB_LORDOSE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0 | VENTIL1 | VENTIL1 |
| 1 | VENTIL2 | VENTIL2 |
| 2 | VENTIL3 | VENTIL3 |
| 3 | VENTIL4 | VENTIL4 |
| 4 | PUMPE | PUMPE |

### RES_0X4010

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_BOOT_INTERN_WERT | - | - | - | - | - | string[14] | - | - | - | - | - | interne Versionsnummer des Bootloaders |
| STAT_VERSION_APPL_INTERN_WERT | - | - | - | - | - | string[14] | - | - | - | - | - | interne Versionsnummer der Applikation |

### TAB_NORMIERLAUF

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | AUS | NORMIERLAUF_AUS |
| 0x01 | AN | NORMIERLAUF_AN |

### RES_0XD749

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_FEH_FRONT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Fondeinstiegshilfe nach vorn, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_FEH_BACK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Fondeinstiegshilfe zurück, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD734

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SLV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_SHV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_FEH | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_LNV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_SNV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_KHV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_LKV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_STV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |
| STAT_MOTOR_LBV | 0-n | - | unsigned char | - | TAB_KONFIG_MOTOR | - | - | - | Ausgabe der Konfiguration des Motors: 0 = nicht verbaut, 1 = Motor verbaut, 2 = Motor und Hallgeber verbaut |

### ARG_0XD77B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSGANG | 0-n | - | unsigned char | - | TAB_AKTIVSITZ | - | - | - | - | - | Bezeichnung des anzusteuernden Ausgangs  MAGNET ,  NOCKENMOTOR ,  ENTLEEREN  |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = AUS, 1 = EIN |

### RES_0XD744

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_SLV_FRONT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Sitz nach vorn, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_SLV_BACK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Sitz zurück, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD74C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_LKV_FRONT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Lehnenkopf vor, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_LKV_BACK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Lehnenkopf zurück, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD772

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKL_AD_DREHZAHL_KISSEN_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener AD-Wert von Messeingang Drehzahlsteuerung Kissen |
| STAT_SKL_AD_DREHZAHL_LEHNE_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener AD-Wert von Messeingang Drehzahlsteuerung Lehne |
| STAT_SKL_VERSORGUNG_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener Wert von Statusabfrage des Treibers der Versorgung der Klimalüfter |

### RES_0XD754

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_SLV_VORNE_WERT | - | - | unsigned int | - | - | - | - | - | Normblock SLV vorne (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_SLV_HINTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock SLV hinten (0..65535) |
| STAT_SV_NORMIERSTATUS_SLV_VORNE | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung SLV vorne, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_SLV_HINTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung SLV hinten, 0: nicht normiert; 1: normiert |
| STAT_SV_SCHIENENLAENGE_SLV_PLAUSIBEL | 0/1 | - | unsigned char | - | - | - | - | - | Statusabfrage, ob die Schienenlänge der elektrischen Sitzlängsverstellung plausibel ist: 0 = Schienenlänge SLV nicht plausibel 1 = Schienenlänge SLV plausibel |

### ARG_0XD776

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSGANG | 0-n | - | unsigned char | - | TAB_LORDOSE | - | - | - | - | - | Bezeichnung des anzusteuernden Ausgangs  VENTIL1 ,  VENTIL2 ,  VENTIL3 ,  VENTIL4 ,  PUMPE  |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = AUS, 1 = EIN |

### RES_0XD755

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_SHV_OBEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock SHV oben (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_SHV_UNTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock SHV unten (0..65535) |
| STAT_SV_NORMIERSTATUS_SHV_OBEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung SHV oben, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_SHV_UNTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung SHV unten, 0: nicht normiert; 1: normiert |

### RES_0XD756

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_LNV_VORNE_WERT | - | - | unsigned int | - | - | - | - | - | Normblock LNV vorne (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_LNV_HINTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock LNV unten (0..65535) |
| STAT_SV_NORMIERSTATUS_LNV_VORNE | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung LNV vorne, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_LNV_HINTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung LNV hinten, 0: nicht normiert; 1: normiert |

### RES_0XD746

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_LNV_FRONT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Lehne kippen nach vorn, 0: Taste nicht betätigt ;1: Taste betätigt |
| STAT_SV_TASTE_LNV_BACK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Lehne kippen zurück, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD745

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_SHV_UP_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Sitz aufwärts, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_SHV_DOWN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Sitz abwärts, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD7E0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_AD_LVK_WERT | - | - | unsigned char | - | - | - | - | - | Messwert Sense Sitz-Lehne-Verriegelung (0...255) |
| STAT_SV_LVK_NR | 0-n | - | unsigned char | - | TAB_LVK_WERT | - | - | - | Zustand der Sitz-Lehne-Verriegelung,  0: Masseschluss; 1: verriegelt; 2: entriegelt; 3: ungueltig |

### RES_0XD747

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_SNV_UP_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Sitz kippen hinauf, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_SNV_DOWN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Sitz kippen hinab, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD758

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_KHV_OBEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock KHV oben (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_KHV_UNTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock KHV unten (0..65535) |
| STAT_SV_NORMIERSTATUS_KHV_OBEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung KHV oben, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_KHV_UNTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung KHV unten, 0: nicht normiert; 1: normiert |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### RES_0XD757

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_SNV_OBEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock SNV oben (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_SNV_UNTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock SNV unten (0..65535) |
| STAT_SV_NORMIERSTATUS_SNV_OBEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung SNV oben, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_SNV_UNTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung SNV unten, 0: nicht normiert; 1: normiert |

### ARG_0XD750

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTOR | 0-n | - | unsigned char | - | TAB_MOTOREN | - | - | - | - | - | Motorbezeichnung  SLV  - Sitzlängsverstellung  SHV  - Sitzhöhenverstellung  FEH  - Fondeinstieghilfe  LNV  - Lehnenneigungsverstellung  SNV  - Sitzneigungsverstellung  KHV  - Kopfstützenhöhenverstellung  LKV  - Lehnenkopfverstellung  LBV  - Lehnenbreitenverstellung  STV  - Sitztiefenverstellung  LBV  - Lehnenbreitenverstellung |
| AKTION | 0-n | - | unsigned char | - | TAB_RICHTUNG | - | - | - | - | - | Bewegungsrichtung bzw. Stop  hoch ,  vor ,  breit ,  tief ,  zur ,  schmal ,  stop  |
| TAKT | % | - | unsigned char | - | - | - | - | - | - | - | Taktverhältnis von 0 bis 100 (%) oder Wert 200 für Normierlauf |

### RES_0XD736

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_SITZSG_LP_TEMP | 0-n | - | unsigned char | - | TAB_LP_TEMP_WERT | - | - | - | Sitz-SG: Statusabfrage der intern gemessenen Leiterplattentemperatur relevant fuer Sitzverstellung (bei Basissitzen auch relevant fuer Sitzheizung) |
| STAT_SHZ_SITZSG_LP_TEMP | 0-n | - | unsigned char | - | TAB_LP_TEMP_WERT | - | - | - | Sitz-SG: Statusabfrage der intern gemessenen Leiterplattentemperatur relevant fuer Sitzheizung (nur bei Multifunktionssitzen) |

### ARG_0XD752

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTOR | 0-n | - | unsigned char | - | TAB_SV_MOTOREN | - | - | - | - | - | Motor-Bezeichnung  SLV ,  SHV ,  LNV ,  SNV ,  KHV ,  FEH ,  STV ,  LBV ,  LKV  |

### ARG_0XD77C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSGANG | 0-n | - | unsigned char | - | TAB_MASSAGESITZ | - | - | - | - | - | Bezeichnung des anzusteuernden Ausgangs: VERSORGUNG_MASSAGE, MASSAGE_LORDOSE, MASSAGE_STUFE12, MASSAGE_ENTLEEREN |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = AUS, 1 = EIN |

### TAB_MASSAGESITZ

| WERT | TEXT |
| --- | --- |
| 0 | VERSORGUNG_MASSAGE |
| 1 | MASSAGE_LORDOSE |
| 2 | MASSAGE_STUFE12 |
| 3 | MASSAGE_STUFE1 |
| 4 | MASSAGE_STUFE2 |

### RES_0XD75B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_LBV_BREIT_WERT | - | - | unsigned int | - | - | - | - | - | Normblock LBV breit (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_LBV_SCHMAL_WERT | - | - | unsigned int | - | - | - | - | - | Normblock LBV schmal (0..65535) |
| STAT_SV_NORMIERSTATUS_LBV_BREIT | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung LBV breit, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_LBV_SCHMAL | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung LBV schmal, 0: nicht normiert; 1: normiert |

### RES_0XD759

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_FEH_OBEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock oben FEH (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_FEH_UNTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock FEH unten (0..65535) |
| STAT_SV_NORMIERSTATUS_FEH_OBEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung FEH oben, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_FEH_UNTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung FEH unten, 0: nicht normiert; 1: normiert |

### ARG_0XD74E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = AUS, 1 = EIN |

### RES_0XD735

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_MOTOREN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob elektrische Verstellmotoren im Sitz verbaut sind: 0 = keine Motoren verbaut, 1 = Motoren verbaut |
| STAT_VORHANDEN_MEMORY | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob im Sitz die Funktion Memory verbaut ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_VORHANDEN_HEIZUNG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob im Sitz die Funktion Sitzheizung verbaut ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_VORHANDEN_KLIMA | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob im Sitz die Funktion Sitzklima verbaut ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_VORHANDEN_AKTIVSITZ | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob im Sitz die Funktion Aktivsitz verbaut ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_VORHANDEN_LORDOSE | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob im Sitz die Funktion Lordosenstütze verbaut ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_VORHANDEN_MASSAGE | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob im Sitz die Funktion Massage verbaut ist: 0 = nicht vorhanden, 1 = vorhanden |

### RES_0XD775

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LORDOSE_UP_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1: Taste betätigt; 0: Taste nicht betätigt |
| STAT_TASTER_LORDOSE_DOWN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1: Taste betätigt; 0: Taste nicht betätigt |
| STAT_TASTER_LORDOSE_FORWARD_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1: Taste betätigt; 0: Taste nicht betätigt |
| STAT_TASTER_LORDOSE_BACKWARD_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1: Taste betätigt; 0: Taste nicht betätigt |

### RES_0XD74A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_STV_FRONT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Schenkelauflage nach vorn, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_STV_BACK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Schenkelauflage zurück, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD74B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_LBV_OPEN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Lehnen-Breite öffnen, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_LBV_CLOSE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Lehnen-Breite schließen, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD77F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MS_DRUCKVERTEILER_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener Wert von Statusabfrage des Treibers des Massage Druckverteilers |
| STAT_MS_PUMP_ANF_WERT | - | - | unsigned char | - | - | - | - | - | Statusabfrage der Massage Pumpenanforderung |

### RES_0XD75C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_LKV_VORNE_WERT | - | - | unsigned int | - | - | - | - | - | Normblock LKV vorne (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_LKV_HINTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock LKV hinten (0..65535) |
| STAT_SV_NORMIERSTATUS_LKV_VORNE | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung LKV vorne, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_LKV_HINTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung LKV hinten, 0: nicht normiert; 1: normiert |

### RES_0XD774

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LD_PUMPE_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener Wert von Statusabfrage des Treibers der Lordosen Pumpe |
| STAT_LD_VENTIL_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener Wert von Statusabfrage des Treibers der Lordosen Ventile |

### RES_0XD77E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_SLV_NORM_VORNE_CC_SCHWELLE_WERT | - | - | unsigned int | - | - | - | - | - | Codierte maximale Anzahl von Verstellungen, bis CC-Meldung für Normierlauf FA/BF kommt (Sitzpositionsuebergabe Frau/Mann). |
| STAT_ZAEHLER_SLV_NORM_VORNE_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl der bisher durchgeführten Verstellungen der LNV seit letzter Normierung vorne (Sitzpositionsuebergabe für den Crashdatenrecorder). |
| STAT_ZAEHLER_SLV_NORM_HINTEN_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl der bisher durchgeführten Verstellungen der SLV seit letzter Normierung hinten (Sitzpositionsuebergabe fuer den Crashdatenrecorder, Kollisionsfeld Sitzklima). |
| STAT_ZAEHLER_LNV_NORM_VORNE_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl der bisher durchgeführten Verstellungen der LNV seit letzter Normierung vorne (Sitzpositionsuebergabe fuer den Crashdatenrecorder). |
| STAT_ZAEHLER_SNV_NORM_OBEN_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl der bisher durchgeführten Verstellungen der SNV seit letzter Normierung vorne (Sitzpositionsuebergabe für den Crashdatenrecorder). |

### ARG_0XD773

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = AUS, 1 = EIN |
| DREHZAHL_KISSEN | 0-n | - | unsigned char | - | TAB_DREHZAHLEN | - | - | - | - | - | Drehzahlstufe Kissen  DREHZAHL_NIEDRIG ,  DREHZAHL_HOCH  |
| DREHZAHL_LEHNE | 0-n | - | unsigned char | - | TAB_DREHZAHLEN | - | - | - | - | - | Drehzahlstufe Lehne  DREHZAHL_NIEDRIG ,  DREHZAHL_HOCH  |

### RES_0XD77A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AS_MAGNET_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener Wert von Statusabfrage des Treibers des Umschalt-Magnetventils Aktivsitz/Lordose |
| STAT_AS_NOCKENMOTOR_WERT | - | - | unsigned char | - | - | - | - | - | eingelesener Wert von Statusabfrage des Treibers des Aktivsitz Nockenmotors |
| STAT_AS_NOCKENSCHALTER_WERT | - | - | unsigned char | - | - | - | - | - | Statusabfrage des Aktivitz Nockenschalters |

### RES_0XD748

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TASTE_KHV_UP_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Kopfstütze hinauf, 0: Taste nicht betätigt; 1: Taste betätigt |
| STAT_SV_TASTE_KHV_DOWN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Taste Kopfstütze hinab, 0: Taste nicht betätigt; 1: Taste betätigt |

### RES_0XD75A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_COUNTER_NORMBLOCK_STV_VORNE_WERT | - | - | unsigned int | - | - | - | - | - | Normblock STV vorne (0..65535) |
| STAT_SV_COUNTER_NORMBLOCK_STV_HINTEN_WERT | - | - | unsigned int | - | - | - | - | - | Normblock STV hinten (0..65535) |
| STAT_SV_NORMIERSTATUS_STV_VORNE | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung STV vorne, 0: nicht normiert; 1: normiert |
| STAT_SV_NORMIERSTATUS_STV_HINTEN | 0-n | - | unsigned char | - | TAB_NORMIERSTATUS | - | - | - | Status Normierung STV hinten, 0: nicht normiert; 1: normiert |

### RES_0X4005

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZ_INIT_UEKB | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Ueberschusskraftbegrenzung: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_PIA | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus PIA: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_KF_SB | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Kollisionskennfeld Sitzklima: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_KF_LKV | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus LKV Kollisionskennfeld: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_CDR | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Sitzpositionsuebergabe fuer den Crashdatenrecorder: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_SITPOS_MANN_FRAU | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Sitzpositionsuebergabe Mann/Frau: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_KF_RW | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Antikollisionskennfeld Rueckwand Fond: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_VERSTELLBEREICH_LNV | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Verstellbereich LNV Fond: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |

### RES_0XD78D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKL_PWM_AKUSTIK_MAX_WERT | % | - | unsigned char | - | - | - | - | - | Berechnetes maximal zulässiges PWM Verhaeltnis (Akustikmassnahme), 0 ... 100%, 255: Wert steht nicht zur Verfügung (wird momentan nicht benötigt / berechnet z.B. weil SKL nicht aktiv) |
| STAT_SKL_PWM_KISSEN_WERT | % | - | unsigned char | - | - | - | - | - | PWM Verhältnis Kissen |
| STAT_SKL_PWM_LEHNE_WERT | % | - | unsigned char | - | - | - | - | - | PWM Verhältnis Lehne |

### ARG_0XD78D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = AUS, 1 = EIN |
| TAKT_KISSEN | % | - | unsigned char | - | - | - | - | - | - | - | Taktverhältnis Kissen 0 ... 100 % |
| TAKT_LEHNE | % | - | unsigned char | - | - | - | - | - | - | - | Taktverhältnis Lehne 0 ... 100 % |

### RES_0XD74F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZ_AD_SENSE_KISSEN_WERT | - | - | unsigned char | - | - | - | - | - | Messwert Sense Heizungstreiber Kissen AD-Wert, 8bit unsigned char |
| STAT_SHZ_TEMP_KISSEN_WERT | °C | - | char | - | - | - | - | - | intern gemessene Temperatur Kissen |
| STAT_SHZ_PWM_KISSEN_WERT | % | - | unsigned char | - | - | - | - | - | PWM Verhaeltnis Kissen |

### RES_0XD76D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZ_AD_SENSE_LEHNE_WERT | - | - | unsigned char | - | - | - | - | - | Messwert Sense Heizungstreiber Lehne AD-Wert, 8bit unsigned char |
| STAT_SHZ_TEMP_LEHNE_WERT | °C | - | char | - | - | - | - | - | intern gemessene Temperatur Lehne 1 |
| STAT_SHZ_PWM_LEHNE_WERT | % | - | unsigned char | - | - | - | - | - | PWM Verhaeltnis Lehne |

### ARG_0XD7E1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_ARG_STUFEN_SHSL | - | - | - | - | - | STUFE_0, STUFE_1, STUFE_2, STUFE_3, STUFENLOS_MIT_NTC, STUFENLOS_OHNE_NTC |
| TAKT_KISSEN | % | - | unsigned char | - | - | - | - | - | - | - | Taktverhältnis Kissen von 0 bis 100 (%), bei Argument STUFE = Stufenlos |
| TAKT_LEHNE | % | - | unsigned char | - | - | - | - | - | - | - | Taktverhältnis Lehne von 0 bis 100 (%), bei Argument STUFE = Stufenlos |

### RES_0XD751

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_ADAPTIONSLAUF_SLV_VOR | 0-n | - | unsigned char | - | TAB_ADAPTIONSSTATUS | - | - | - | Statusabfrage der Sitzverstellung, ob bereits ein Adaptionslauf SLV vor durchgeführt wurde: 0 = Kein Adaptionslauf durchgeführt  1 = Adaptionslauf erfolgreich  2 = Adaptionslauf nicht erfolgreich 3 = Adaptionslauf nicht durchgeführt, da sich Motor nicht am hinteren Hardblock befindet 4 = Adaptionslauf nicht erfolgreich wegen Adaptionsbereichsüberschreitung |
| STAT_SV_ADAPTIONSLAUF_SLV_ZURUECK | 0-n | - | unsigned char | - | TAB_ADAPTIONSSTATUS | - | - | - | Statusabfrage der Sitzverstellung, ob bereits ein Adaptionslauf SLV zurück durchgeführt wurde: 0 = Kein Adaptionslauf durchgeführt  1 = Adaptionslauf erfolgreich  2 = Adaptionslauf nicht erfolgreich 3 = Adaptionslauf nicht durchgeführt, da sich Motor nicht am hinteren Hardblock befindet 4 = Adaptionslauf nicht erfolgreich wegen Adaptionsbereichsüberschreitung |

### TAB_ADAPTIONSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Adaptionslauf durchgeführt |
| 0x01 | Adaptionslauf erfolgreich |
| 0x02 | Adaptionslauf nicht erfolgreich |
| 0x03 | Adaptionslauf nicht durchgeführt, da sich Motor nicht am hinteren Hardblock befindet |
| 0x04 | Adaptionslauf nicht erfolgreich wegen Adaptionsbereichsüberschreitung |

### TAB_STAT_NL

| WERT | TEXT |
| --- | --- |
| 0 | Kein Normierlauf durchgeführt |
| 1 | Normierlauf aktiv |
| 2 | Normierlauf durchgeführt |
| 3 | Normierlauf nicht gestartet wegen Fahrzeuggeschwindigkeit > 0km/h |
| 4 | Normierlauf abgebrochen wegen Unter-/Überspannung |
| 5 | Normierlauf abgebrochen wegen Panikabbruch |
| 6 | Normierlauf abgebrochen wegen Fahrzeuggeschwindigkeit > 0km/h und Fertigungsmode = aus |
| 7 | Normierlauf abgebrochen wegen Fahrzeuggeschwindigkeit >= 10km/h |
| 8 | Normierlauf abgebrochen wegen Timeout STAT_SV_NORMIERLAUF_AKTIV (Timeout = 3s) |
| 9 | Normierlauf abgebrochen durch STEUERN_NORMIERLAUF AUS oder wegen Timeout (240s) |
| 10 | Normierlauf abgebrochen wegen Spannungsausfall |
| 11 | Normierlauf abgebrochen wegen Baugruppen Reset |

### RES_0X4007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZ_INIT_KF_LEHNENKLAPPUNG | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Kollisionskennfeld Lehnenklappung: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_KF_KHV | 0-n | - | int | - | TAB_INIT | - | - | - | Liefert den Initialisierungsstatus Kollisionskennfeld KHV: 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_SITZ_INIT_DUMMY1 | 0-n | - | int | - | TAB_INIT | - | - | - | - |
| STAT_SITZ_INIT_DUMMY2 | 0-n | - | int | - | TAB_INIT | - | - | - | - |
