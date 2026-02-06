# kafas01.prg

## General

|  |  |
| --- | --- |
| File | kafas01.prg |
| Type | PRG |
| Jobs | 45 |
| Tables | 65 |
| Origin | BMW EI-611 Christian_Discher |
| Revision | 3.013 |
| Author | Siemens_AG_Österreich PSE_PRO_SRT4 Armin_Kloiber, Siemens_VDO S |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kamerabasiertes_Fahrerassistenzsystem |  |  |
| ORIGIN | string | BMW EI-611 Christian_Discher |  |  |
| REVISION | string | 3.013 |  |  |
| AUTHOR | string | Siemens_AG_Österreich PSE_PRO_SRT4 Armin_Kloiber, Siemens_VDO S |  |  |
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

### _KAFAS_VIN_LESEN

read the Camera and ECU VIN, which is coded via E-SYS UDS  : $22   ReadDataByIdentifier UDS  : $F190 VIN

_No arguments._

### _TAC

TAC (target auto calibration) UDS:     $2E WriteDataByIdentifier .        $D3 .        $A3

| Name | Type | Description |
| --- | --- | --- |
| TARGET_POSITION | int | 0 = target left 1 = target right |
| ENTF_X | int | distance between front axle (vehicle) and gantry range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Y | int | distance between the vehicle's middle axle and the fictional middle axle between the 2 target positions a shift to the right means a positive value range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Z_O | int | distance between the ground and the middle of the upper target range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Z_U | int | distance between the ground and the middle of the lower target range: -32768 -> 32767 resolution: 1 mm |
| KAMERA_HOEHE | int | mounting height of the camera range: -32768 -> 32767 resolution: 1 mm |
| TARGET_POS_ENTF | int | distance between the outer left edge of the left target to the outer left edge of the right target range: -32768 -> 32767 resolution: 1 mm |
| QUADRAT_GROESSE | int | size of the checker's squares (Schachbrettmuster) of the targets range: -32768 -> 32767 resolution: 1 mm |

### _CALIBRATION_CAMERA_SCHREIBEN

writes the Camera Calibration Data all 25 digits must be entered, fill up with '0' otherwise numbers and capital letters allowed UDS  : $2E   WriteDataByIdentifier UDS  : $4032 Camera Calibration

| Name | Type | Description |
| --- | --- | --- |
| OFFLINE_YAW | int | 2 byte signed int, pixel, positive value corresponds to FOE in the right half of the image |
| OFFLINE_HORIZON | int | 2 byte signed int, pixel, positive values correspond to FOE in the upper half of the image |
| OFFLINE_ROLL_ANGLE | int | 2 byte signed int, 0.01 * degree, positive values correspond to a camera rotation to the right |
| ONLINE_YAW | int | 2 byte signed int, pixel, positive value corresponds to FOE in the right half of the image |
| ONLINE_HORIZON | int | 2 byte signed int, pixel, positive values correspond to FOE in the upper half of the image |
| ONLINE_ROLL_ANGLE | int | 2 byte signed int, 0.01 * degree, positive values correspond to a camera rotation to the right |
| CAMERA_HEIGHT | int | 2 byte unsigned int, mm, height of camera above ground |
| FOCAL_LENGTH | int | 2 byte unsigned int , pixel |
| GRABBING_SHIFT | int | 2 byte unsigned int , pixel |
| VIN | string | 7 byte ascii |

### _CONTROLACTUATOR_SCHREIBEN

writes the ControlActuator Data all 10 digits must be entered, fill up with '0' otherwise numbers and capital letters allowed UDS  : $2E   WriteDataByIdentifier UDS  : $A37E ControlAcuator

| Name | Type | Description |
| --- | --- | --- |
| TIME | int | 2 byte 100ms resolution, a value of 0 stops the actuator |
| START_UP_RAMP | int | 2 byte signed int, value range: 0,1,2 |
| SLOW_DOWN_RAMP | int | 2 byte signed int, value range: 0,1,2 |
| TARGET_VIBRATION_STRENGTH | int | value range: 0-14 |
| TARGET_FREQUENCY | int | value range: 0-14 |

### _CALIBRATION_CAMERA_LESEN

reads the Camera Calibration Data UDS  : $22   ReadDataByIdentifier UDS  : $4032 Camera Calibration

_No arguments._

### STEUERN_RESET_DEFAULT_PARAMETRISIERUNG

Resets the Calibration Data and Coding Data by this procedure: - 10s wait time from Kafas ECU start-up -> needed to allow DSP application to start - call the job:  STEUERN_RESET_DEFAULT_PARAMETRISIERUNG -> clears default_calib file on DSP - reset Kafas ECU - 10s  wait time - call the job again:  STEUERN_RESET_DEFAULT_PARAMETRISIERUNG -> clears also the back-up of the defaul_calib file - perfom coding of the Kafas ECU UDS: $2E $4033 (WriteDataByIdentifier_ResetDefaultCalib)

| Name | Type | Description |
| --- | --- | --- |
| UNLOCK_PASSWORD | int | accepted value 0x0B |

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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Allgemeiner Fertigungs- und Energiesparmode |
| 0x01 | Spezieller Energiesparmode | TLC-CAM, VZE-CAM, FLA-CAM deaktiviert |
| 0x02 | ECOS-Mode | nichts deaktiviert |
| 0x03 | MOST-Mode | TLC-CAM, VZE-CAM, FLA-CAM deaktiviert |
| 0x04 | Betriebsmode 4 | nichts deaktiviert |
| 0x05 | Betriebsmode 5 | nichts deaktiviert |
| 0x06 | Rollenmode | nichts deaktiviert |
| 0x07 | Betriebsmode 7 | nichts deaktiviert |
| 0x08 | Betriebsmode 8 | nichts deaktiviert |
| 0x09 | Betriebsmode 9 | nichts deaktiviert |
| 0x0A | Betriebsmode 10 | nichts deaktiviert |
| 0x0B | Betriebsmode 11 | nichts deaktiviert |
| 0x0C | Betriebsmode 12 | nichts deaktiviert |
| 0x0D | Betriebsmode 13 | nichts deaktiviert |
| 0x0E | Betriebsmode 14 | nichts deaktiviert |
| 0x0F | Betriebsmode 15 | nichts deaktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x002711 | ECU: VIN_INCORRECT | 1 |
| 0x02FF5D | DM_TEST_APPL | 0 |
| 0x800A00 | Kamera Strommessung ausserhalb Bereich | 0 |
| 0x800A01 | Kamera EEPROM Kommunikationsfehler | 0 |
| 0x800A02 | Steuergerät interne Spannungsmessung ausserhalb Bereich | 0 |
| 0x800A03 | Kamera Sensor defekt | 0 |
| 0x800A04 | LVDS Kommunikationsfehler Kamera - Steuergerät | 0 |
| 0x800A05 | Kamera nicht kalibriert | 0 |
| 0x800A06 | Kamera Spannungsmessung ausserhalb Bereich | 0 |
| 0x800A07 | Aktuator Lenkrad defekt | 1 |
| 0x800A08 | Steuergerät Checksummenfehler | 0 |
| 0x800A09 | Kamera EEPROM Checksummenfehler | 0 |
| 0x800A10 | Steuergerät Spannungsversorgung ausserhalb Bereich | 1 |
| 0x800A11 | Kamera Gierwinkelfehler | 0 |
| 0x800A12 | Kamera Nickwinkelfehler | 0 |
| 0x800A13 | Kamera Rollwinkelfehler | 0 |
| 0x800A20 | Kamera Empfindlichkeitsänderung | 1 |
| 0x800A21 | CAM: SPC failed | 1 |
| 0x800A22 | Steuergerät interner Fehler | 0 |
| 0x800A23 | ECU: VIN_INCORRECT | 1 |
| 0x800AB1 | coding_event_not_coded | 1 |
| 0x800AB2 | coding_event_transaction_failed | 1 |
| 0x800AB3 | coding_event_signature_error | 1 |
| 0x800AB4 | coding_event_wrong_vehicle | 1 |
| 0x800AB5 | coding_event_invalid_data | 1 |
| 0x800AB6 | Energiesparmode aktiv | 0 |
| 0xE0440A | FA-CAN BUS OFF | 0 |
| 0xE04BFF | DM_TEST_COM | 0 |
| 0xE06C00 | Signal(173h) ungültig empfangen: Status_Bremsung_Fahrer | 1 |
| 0xE06C01 | Signal(19Fh) ungültig empfangen: Giergeschwindigkeit_Fahrzeug | 1 |
| 0xE06C02 | Signal(1A1h) ungültig empfangen: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xE06C03 | Signal(1EEh) ungültig empfangen: Bedienung_Lenkstocktaster | 1 |
| 0xE06C04 | Signal(2A6h) ungültig empfangen: Bedienung_Wischertaster, Bedienung_Wischerpotentiometer | 1 |
| 0xE06C05 | Signal(2CAh) ungültig empfangen: Temperatur_Außen | 1 |
| 0xE06C06 | Signal(278h) ungültig empfangen: Index_Segment_Nav-Graph, Index_Vater-Segment_Nav-Graph, Begrenzung_Geschwindigkeit_Nav-Graph | 1 |
| 0xE06C07 | Signal(301h) ungültig empfangen: Ist_Lenkwinkel_Fahrer | 1 |
| 0xE06C08 | Signal(330h) ungültig empfangen: Wegstrecke_Kilometer | 1 |
| 0xE06C09 | Signal(348h) ungültig empfangen: Status_Übereinstimmung_Position_Relativ, Status_Übereinstimmung_Index_Segment, Status_Übereinstimmung_Qualität | 1 |
| 0xE06C0A | Signal(34Ch) ungültig empfangen: Status_Qualität_Position | 1 |
| 0xE06C0B | Signal(34Eh) ungültig empfangen: Status_Version_Protokoll_Navigation, Status_Version_Karte_Navigation, Status_Ländercodierung_Navigation | 1 |
| 0xE06C0C | Signal(EFh) ungültig empfangen: Ist_Bremsmoment_Summe | 1 |
| 0xE06C0D | Signal(2E4h) ungültig empfangen: Status_Anhänger | 1 |
| 0xE06C0E | Signal(2F8h) ungültig empfangen: Anzeige_Stunde, Anzeige_Minute, Anzeige_Datum_Tag, Anzeige_Datum_Wochentag, Anzeige_Datum_Jahr, Status_Anzeige_Uhrzeit_Datum | 1 |
| 0xE06C0F | Signal(36Ah) ungültig empfangen Anzeige_Fernlicht_Assistent | 1 |
| 0xE06C11 | Signal(3CCh) ungültig empfangen: Index_Segment_Nav-Graph_Geschwindigkeit, Verkehrszeichen_Geschwindigkeit_Variabel, Begrenzung_Geschwindigkeit_Bedingt, Bedingung_Begrenzung_Geschwindigkeit, Gültigkeit_Zeit_Start, Gültigkeit_Zeit_Ende | 1 |
| 0xE06C12 | Signal(27Ah) ungültig empfangen: Status_Anzahl_Pakete, Zähler_Nav-Graph_Sync, Index_Segment_Löschen_Nav-Graph, Steuerung_Löschen_Nav-Graph | 1 |
| 0xE06C13 | Signal(3F7h) ungültig empfangen: Index_Segment_Nav-Graph_Fahrspur, Anzahl_Fahrspuren_Erweitert, Information_Erweitert_Fahrspuren_1, Information_Erweitert_Fahrspuren_2 | 1 |
| 0xE06C14 | Signal(1F6h) ungültig empfangen: Status Blinken | 1 |
| 0xE06C15 | Signal(380h) ungültig empfangen: Fahrgestellnummer | 1 |
| 0xE06C16 | Signal (252h):ungültig empfangen: Position_Wischerblatt  | 1 |
| 0xE06C17 | Signal(2C5h) ungültig empfangen: Ist_Geschwindigkeit_Tacho | 1 |
| 0xE06C18 | Signal(328h) ungültig empfangen: Zeit_Sekunde_Zähler_Relativ | 1 |
| 0xE06C19 | Signal(3A0h) ungültig empfangen: Status_Energie_FZM, Status_Sperre_Fehlerspeicher_FZM | 1 |
| 0xE06C1A | Signal (343h) Status_Taster_Warnung_Fahrspurverlassen Steuerung_Funktionsbeleuchtung_TLC | 1 |
| 0xE06C1B | Signal(347h) ungültig empfangen: Status Koordination Vibration Lenkrad | 1 |
| 0xE06C2A | Signal (2F7h) ungültig empfangen:  Einheiten | 1 |
| 0xE07C00 | Botschaft(19Fh, Giergeschwindigkeit Fahrzeug):Ausfall | 1 |
| 0xE07C01 | Botschaft(1A1h, Geschwindigkeit Fahrzeug):Ausfall | 1 |
| 0xE07C02 | Botschaft(2C5h, Status Anzeige Fahrdynamik):Ausfall | 1 |
| 0xE07C03 | Botschaft(1EEh, Bedienung Lenkstock):Ausfall | 1 |
| 0xE07C04 | Botschaft(2A6h, Bedienung Wischertaster):Ausfall | 1 |
| 0xE07C05 | Botschaft(2CAh, Außentemperatur):Ausfall | 1 |
| 0xE07C06 | Botschaft(2F8h, Uhrzeit/Datum):Ausfall | 1 |
| 0xE07C07 | Botschaft(301h, Ist Lenkwinkel Fahrer):Ausfall | 1 |
| 0xE07C08 | Botschaft(330h, Kilometerstand/Reichweite):Ausfall | 1 |
| 0xE07C09 | Botschaft(34Ch, Navigation GPS 2):Ausfall | 1 |
| 0xE07C0A | Botschaft(34Eh, Navigation System Information):Ausfall | 1 |
| 0xE07C0B | Botschaft(EFh, Ist Bremsmoment Summe):Ausfall | 1 |
| 0xE07C0C | Botschaft(1F6h, Blinken):Ausfall | 1 |
| 0xE07C0D | Botschaft(2F7h, Einheiten):Ausfall | 1 |
| 0xE07C0E | Botschaft(173h, Status Stabilisierung DSC):Ausfall | 1 |
| 0xE07C0F | Botschaft(21Ah, Lampenzustand):Ausfall | 1 |
| 0xE07C10 | Botschaft(36Ah, Status Fernlicht Assistent):Ausfall | 1 |
| 0xE07C11 | Botschaft(328h, Relativzeit):Ausfall | 1 |
| 0xE07C12 | Botschaft(3A0h, Fahrzeugzustand):Ausfall | 1 |
| 0xE07C13 | Botschaft(348h, Übereinstimmung Navigationsgraph):Ausfall | 1 |
| 0xE07C14 | Botschaft(27Ah NAV_GRAPH_SYNC (including Kill-all):Ausfall | 1 |
| 0xE07C15 | Botschaft(347h, Status Koordination Vibration Lenkrad):Ausfall | 1 |
| 0xE0D400 | Botschaft(19Fh, Giergeschwindigkeit Fahrzeug):Ausfall | 1 |
| 0xE0D401 | Botschaft(1A1h, Geschwindigkeit Fahrzeug):Ausfall | 1 |
| 0xE0D402 | Botschaft(2C5h, Status Anzeige Fahrdynamik):Ausfall | 1 |
| 0xE0D403 | Botschaft(1EEh, Bedienung Lenkstock):Ausfall | 1 |
| 0xE0D405 | Botschaft(2A6h, Bedienung Wischertaster):Ausfall | 1 |
| 0xE0D406 | Botschaft(2CAh, Außentemperatur):Ausfall | 1 |
| 0xE0D407 | Botschaft(2F8h, Uhrzeit/Datum):Ausfall | 1 |
| 0xE0D408 | Botschaft(301h, Ist Lenkwinkel Fahrer):Ausfall | 1 |
| 0xE0D40A | Botschaft(330h, Kilometerstand/Reichweite):Ausfall | 1 |
| 0xE0D40C | Botschaft(34Ch, Navigation GPS 2):Ausfall | 1 |
| 0xE0D40D | Botschaft(34Eh, Navigation System Information):Ausfall | 1 |
| 0xE0D40E | Botschaft(EFh, Ist Bremsmoment Summe):Ausfall | 1 |
| 0xE0D40F | Botschaft(1F6h, Blinken):Ausfall | 1 |
| 0xE0D410 | Botschaft(2E4h, Status Anhänger):Ausfall | 1 |
| 0xE0D412 | Botschaft(173h, Status Stabilisierung DSC):Ausfall | 1 |
| 0xE0D413 | Botschaft(21Ah, Bedienung Lampenzustand):Ausfall | 1 |
| 0xE0D414 | Botschaft(2F7h, Einheiten):Ausfall | 1 |
| 0xE0D415 | Botschaft(328h, Relativzeit):Ausfall | 1 |
| 0xE0D416 | Botschaft(3A0h, Fahrzeugzustand):Ausfall | 1 |
| 0xE0D417 | Botschaft(348h, Übereinstimmung Navigationsgraph):Ausfall | 1 |
| 0xE0D418 | Botschaft(27Ah NAV_GRAPH_SYNC (including Kill-all):Ausfall | 1 |
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

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4080 | Aussentemperatur | °C | - | signed char | - | - | - | - |
| 0x4081 | Batteriespannung | mV | - | signed int | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x5D0001 | dm_event_zeitbotschafttimeout | 1 |
| 0x5D0002 | nvm_e_write_failed | 0 |
| 0x5D0003 | nvm_e_read_failed | 0 |
| 0x5D0004 | nvm_e_control_failed | 0 |
| 0x5D0005 | nvm_e_erase_failed | 0 |
| 0x5D0006 | nvm_e_write_all_failed | 0 |
| 0x5D0007 | nvm_e_read_all_failed | 0 |
| 0x5D0008 | nvm_e_wrong_config_id | 0 |
| 0x5D0009 | pia_e_io_error | 1 |
| 0x5D000A | dm_queue_full | 0 |
| 0x5D000B | fls_e_erase_failed | 1 |
| 0x5D000C | fls_e_write_failed | 1 |
| 0x5D000D | fls_e_read_failed | 1 |
| 0x5D000E | fls_e_compare_failed | 1 |
| 0x5D000F | CBT Failure | 0 |
| 0x5D0010 | SPC Initialization Failure | 0 |
| 0x5D0011 | SPC Runtime Failure | 0 |
| 0x5D0012 | EyeQ internal Error | 0 |
| 0x5D0013 | TLC Actuator ueberhitzt | 0 |
| 0x5D0014 | Kamerasensor ueberhitzt | 0 |
| 0x5D0015 | EyeQ Verlust der Kommunikation | 0 |
| 0xC90402 | dm_queue_deleted | 0 |
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
| 0x4080 | Aussentemperatur | °C | - | signed char | - | 0,5 | - | -40 |
| 0x4081 | Batteriespannung | mV | - | signed int | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KALIBRIERUNG_KAFAS_MONTAGE | 0xA303 | - | Startet die automatische Kalibrierung der KAFAS-Kamera in den Werken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA303 | RES_0xA303 |
| KAFAS_KAM_SN_LESEN | 0xD3A2 | STAT_KAFAS_KAM_SN_WERT | Ausgabe der Seriennummer aus der Kamera. | - | - | - | string[8] | - | - | - | - | - | 22 | - | - |
| KONFIGURATION_KAFAS | 0xD374 | - | Ausgabe der Ausstattung von KAFAS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD374 |
| KALIBRIERUNG_KAFAS_SERVICE | 0xA304 | - | Startet die manuelle Kalibrierung der Kamera im Service. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA304 |
| FLA_SCHALTSTATUS_FERNLICHT | 0xD342 | STAT_FLA_FERNLICHT_SCHALTEN | Gibt aus, ob die Funktion Fernlichtassistent das Fernlicht ein- oder ausschaltet. | 0-n | - | - | int | TAB_FLA_EMPFEHLUNG | - | - | - | - | 22 | - | - |
| STEUERN_DEMO_MODE_FLA | 0xD3A6 | - | Demo-Mode für Fernlichtassisten ein-/ausschalten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A6 | - |
| FLA_GRUND_FL_ABSCHALTUNG | 0xD341 | - | Ausgabe der Parameter zur Funktion FLA, die ein Einschalten des Fernlichts verhindern oder das Fernlicht ausschalten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD341 |
| KAMERAVERSORGUNG_LESEN | 0xD38F | - | Ausgabe der aktuellen Werte der Kamera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD38F |
| STEUERN_ANZEIGE_KOMBI_TLC | 0xA37C | - | Ansteuerung der Anzeige im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xA37C | - |
| ERGEBNIS_SLI | 0xD3AA | - | Ausgabe des Ergebnis der Verkehrzeichenerkennung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3AA |
| LVDS_LESEN | 0xD390 | STAT_KAFAS_LVDS_DATENSTROM_NR | Status des LVDS-Datenstroms | 0-n | - | - | int | TAB_KAFAS_STAT_LVDS | - | - | - | - | 22 | - | - |
| KAMERAVERBINDUNG_LESEN | 0xD391 | STAT_KAFAS_VERBINDUNG_KAM_NR | Kann ermitteln, ob eine Kamera am TLC-Steuergerät angeschlossen ist | 0-n | - | - | int | TAB_KAM_VERB | - | - | - | - | 22 | - | - |
| TLC_AKTUATOR | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD399 | - |
| KAFAS_VINS_LESEN | 0xD393 | - | Auslesen der Fahrgestellnummer aus der Kamera und dem Steuergerät. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD393 |
| BUS_OUT_FLA_FERNLICHT | 0xD3A5 | - | Ansteuerung zum Senden einer ausgehenden Botschaft mit vorgegebenen Werten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A5 | - |
| STEUERN_ANZEIGE_KOMBI_SLI | 0xD3A9 | - | Ansteuerung der Anzeige für Verkehrzeichenerkennung im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A9 | - |
| KALIBRIERDATEN_KAFAS | 0xD396 | - | Ausgabe der Kalibrierdaten der KAFAS-Kamera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD396 |
| STEUERN_METHODE_SLI | 0xD3AB | - | Gibt vor, welche Methode bei der Speed-Limit-Info abgewendet werden soll. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AB | - |
| KALIBRIERUNG_KAFAS_INIT | 0xD38D | STAT_KALIBRIERUNG_KAFAS_INIT | Ausgabe des aktuellen Zustands der Initialisierung (Kalibrierung) der Kamera: | 0-n | - | - | int | TAB_INIT | - | - | - | - | 22 | - | - |
| SPANNUNGEN_KAFAS | 0xD394 | - | Auslesen der verschiedenen Spannungen und Stati des Netzteils in der ECU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD394 |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| Control Diagnostic Messages | 0xF001 | - | This service controls the output of the dignostic messages which come form the MuC and are only sent by the ST10 if the StartRoutine command is sent. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| Steuern_Test_Functional_TLC | 0xF000 | - | This control enables TLC performance tests in the BMW production facilities. During these tests the vehicle is placed in front of a LCD monitor that supplies the input for the camera. Speed and yaw signals from the vehicle CAN are replaced by values form the diagnostic command. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000 | RES_0xF000 |

### TAB_ART_UEBHOL_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |
| 0x07 | 7 |

### TAB_TLC_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | test not started (yaw and speed values from vehicle CAN) |
| 0x01 | test started (yaw and speed values from diagnostic job) |

### RES_0XF000

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_TEST | - | - | + | 0-n | - | char | - | TAB_TLC_TEST | - | - | - | Status of the test:  0: test not started (yaw and speed values from vehicle CAN)    1: test started (yaw and speed values from diagnostic job) |

### ARG_0XF000

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED | + | - | km/h | - | int | - | SPEED | - | - | - | 0 | 350 | 16 bit unsigned integer Range: 0 .. 350km/h |
| YAW | + | - | °/s | - | int | - | YAW | 100 | - | - | -163,84 | 163,83 | 16 bit unsigned integer,  Range:-163.84 ... 163.83 °/s |

### RES_0XA303

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIB_KAFAS_MONTAGE_NR | - | - | + | 0-n | - | int | - | TAB_KAFAS_STAT_KALIB | - | - | - | Ausgabe des Status der Kalibierung: 0x00 Kalibrierung laeuft gerade,  0x01 Kalibrierung erfolgreich abgeschlossen,  0x02 Erfolg - fortfahren mit der Kalibrierung,  0x03 Unzureichende Bildqualität,  0x04 kein Target gefunden,  0x05 Targets befinden sich außerhalb des Bereichs,  0x06 Inkonsistenz zwischen linkem und rechtem Target  z.B. falscher Nickwinkel,  0x07 empfangene Parameter außerhalb der Limits, 0x08 fehlerhafter Target Aufbau, 0x09 ermittelte Kalibrierwerte außerhalb der Limits |

### ARG_0XA303

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TARGET_POSITION | + | - | 0-n | - | int | - | TAB_KAFAS_POS_TARGET | - | - | - | - | - | Gibt an, welche Seite mit dem Target kalibriert werden soll:  0x01 = LINKS,  0x02 = RECHTS |
| ENTFERNUNG_X | + | - | mm | - | int | - | - | - | - | - | - | - | Angabe der Entfernung zwischen Vorderachse des Fahrzeugs und Gerüst. |
| ENTFERNUNG_Y | + | - | mm | - | int | - | - | - | - | - | - | - | Angabe der Entfernung in y-Richtung von der Fahrzeugmitte zur gedachten Mittellinie zwischen den beiden Targetpositionen, wobei eine Verschiebung nach links in Fahrtrichtung einem positiven Wert entspricht. |
| HOEHE_TARGET_OBEN | + | - | mm | - | int | - | - | - | - | - | - | - | Angabe der Höhe vom Boden bis zur Mitte des oberen Targets. |
| HOEHE_TARGET_UNTEN | + | - | mm | - | int | - | - | - | - | - | - | - | Angabe der Höhe vom Boden bis zur Mitte des unteren Targets. |
| HOEHE_KAMERA | + | - | mm | - | int | - | - | - | - | - | - | - | Angabe der tatsächlichen, am Kalibrierstand gemessenen Verbauhöhe der Kamera. |
| ENTFERNUNG_TARGETS | + | - | mm | - | int | - | - | - | - | - | - | - | Gibt an, wie weit die einzelnen Targetpositionen auseinander liegen. Gemessen wird von der linken Außenkante des Targets in der linken Position bis zur linken Außenkante des Targets in der rechten Position. |
| QUADRAT_GROESSE | + | - | mm | - | int | - | - | - | - | - | - | - | Angabe der Größe der Quadrate des Schachbrettmusters der Targets. Diese Parameter sind notwendig, um TLC auch an geänderten Kalibrierständen kalibrieren zu können. Alle Parameter sind als 2Byte Signed Integer mit einen Auflösung von 1 mm definiert |

### TAB_KAFAS_POS_TARGET

| WERT | TEXT |
| --- | --- |
| 0x01 | Links |
| 0x02 | Rechts |
| 0xFF | Ungültig |

### TAB_KAFAS_STAT_KALIB

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung laeuft gerade |
| 0x01 | Kalibrierung erfolgreich abgeschlossen |
| 0x02 | Erfolg - fortfahren mit der Kalibrierung |
| 0x03 | Unzureichende Bildqualität |
| 0x04 | kein Target gefunden |
| 0x05 | Targets befinden sich außerhalb des Bereichs |
| 0x06 | Inkonsistenz zwischen linkem und rechtem Target  z.B. falscher Nickwinkel |
| 0x07 | empfangene Parameter außerhalb der Limits |
| 0x08 | fehlerhafter Target Aufbau |
| 0x09 | ermittelte Kalibrierwerte außerhalb der Limits |
| 0xFF | nicht definierter Fehler |

### RES_0XD374

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_TLC | 0/1 | - | int | - | - | - | - | - | Gibt an, ob die Funktion Time-to-Line Crossing vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_FLA | 0/1 | - | int | - | - | - | - | - | Gibt an, ob die Funktion Fernlichtassistent vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_SLI | 0/1 | - | int | - | - | - | - | - | Gibt an, ob die Funktion Speed-Limit-Info vorhanden ist: 0= nicht vorhanden; 1= vorhanden |

### RES_0XA304

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIB_KAFAS_SERVICE_NR | - | - | + | 0-n | - | int | - | TAB_BLOCKAGETEST | - | - | - | 0x00 Blockagetest nicht gestartet, SPC (Service Point Calibration) nicht gestartet,  0x01 Blockagetest aktiv, SPC nicht gestartet,  0x02 Blockagetest erfolgreich beendet, SPC aktiv,  0x03 Blockagetest erfolgreich beendet, SPC erfolgreich abgeschlossen |

### TAB_BLOCKAGETEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Blockagetest nicht gestartet, SPC (Service Point Calibration) nicht gestartet |
| 0x01 | Blockagetest aktiv, SPC nicht gestartet |
| 0x02 | Blockagetest erfolgreich beendet, SPC aktiv |
| 0x03 | Blockagetest erfolgreich beendet, SPC erfolgreich abgeschlossen |
| 0xFF | Ungültig |

### TAB_FLA_EMPFEHLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Keine Empfehlung |
| 0x0001 | Fernlicht AUS |
| 0x0002 | Fernlicht EIN |
| 0xFFFF | Ungültig |

### ARG_0XD3A6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 1 = Demo-Mode einschalten,  0 = Demo-Mode ausschalten |

### RES_0XD341

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_AUSREICHENDE_BELEUCHTUNG | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob eine ausreichende Beleuchtung erkannt worden ist:  0 = keine ausreichende Beleuchtung erkannt,  1 = ausreichende Beleuchtung erkannt |
| STAT_FLA_VORAUSFAHRENDES_FAHRZEUG | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob ein vorausfahrendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_ENTGEGENKOMMENDES_FAHRZEUG | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob ein entgegenkommendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_TAGERKENNUNG | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob Umgebungshelligkeit (Tag) erkannt worden ist:  0 = kein Helligkeit (Nacht) erkannt,  1 = Helligkeit (Tag) erkannt |
| STAT_FLA_GESCHWINDIGKEIT | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob die Geschwindigkeit unterhalb der Grenze erkannt worden ist:  0 = Geschwindigkeit überhalb der Grenze,  1 = Geschwindigkeit unterhalb der Grenze |
| STAT_FLA_VERZOEGERUNG | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob wegen einer Zeiterzögerung das Fernlicht nicht eingeschaltet wird:  0 = keine Zeitverzögerung,  1 = Zeitverzögerung |
| STAT_FLA_SENSORTEMPERATUR | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob Temperatur des Sensors das Einschalten des Fernlicht verhindert:  0 = Temperatur außerhalb des Arbeitsbereiches,  1 = Temperatur zulässig |
| STAT_FLA_NEBELERKENNUNG | 0/1 | - | int | - | - | - | - | - | Gibt aus, ob Nebel erkannt worden ist:  0 = kein Nebel,  1 = Nebel erkannt |

### RES_0XD38F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAFAS_SPANNUNG_KAM_WERT | mV | - | int | - | - | - | - | - | Spannungswert an der Kamera |
| STAT_KAFAS_STROM_KAM_WERT | mA | - | int | - | - | - | - | - | Stromaufnahme der Kamera |
| STAT_KAFAS_SPANNUNG_KAM_NR | 0-n | - | int | - | TAB_LIMIT | - | - | - | Siehe TAB_LIMIT |
| STAT_KAFAS_STROM_KAM_NR | 0-n | - | int | - | TAB_LIMIT | - | - | - | Siehe TAB_LIMIT |

### TAB_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | unterhalb Limit |
| 0x02 | normal Zustand |
| 0x03 | oberhalb Limit |
| 0xFF | ungültiger Wert |

### ARG_0XA37C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_KAFAS_KOMBI_ANZEIGE | - | - | - | - | - | 00h  alle Anzeigen im Kombi ausgeschaltet 01h  set ST_TLC aktiv,  02h  Balken rechts anzeigen,  04h  Balken links anzeigen,  07h  Balken rechts und links anzeigen;  08h  Aktivierungsanzeige = Verfügbarkeitsschwelle anzeigen; 10h  Verfügbarkeit rechts; 20h  Verfügbarkeit links;  FFh  Ungültig |

### TAB_KAFAS_KOMBI_ANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Anzeige im Kombi ausgeschaltet |
| 0x01 | set ST_TLC aktiv |
| 0x02 | Balken rechts anzeigen |
| 0x04 | Balken links anzeigen |
| 0x07 | Balken rechts und links anzeigen |
| 0x08 | Aktivierungsanzeige = Verfügbarkeitsschwelle anzeigen |
| 0x10 | Verfügbarkeit rechts |
| 0x20 | Verfügbarkeit links |
| 0xFF | Ungültig |

### RES_0XD3AA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAMERA_ZEICHEN_NR | 0-n | - | int | - | TAB_ZEICHEN_KAMERA | - | - | - | Gibt aus, welches Zeichen von der Kamera erkannt wurde:  Results siehe TAB_ZEICHEN_KAMERA |
| STAT_KAMERA_GESCHWINDIGKEIT_WERT | km/h oder mph | - | int | - | - | - | - | - | Gibt aus, welche Geschwindigkeit in den Zeichen erkannt wurde: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| STAT_KARTE_ZEICHEN_NR | 0-n | - | int | - | TAB_ZEICHEN_KARTE | - | - | - | Gibt aus, welches Zeichen aus der Karte gelesen wurde:  Results siehe TAB_ZEICHEN_KARTE |
| STAT_KARTE_GESCHWINDIGKEIT_WERT | km/h oder mph | - | int | - | - | - | - | - | Gibt aus, welche Geschwindigkeit aus der Karte gelesen wurde: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| STAT_FUSIONIERT_ZEICHEN_NR | 0-n | - | int | - | TAB_ZEICHEN_FUSIONIERT | - | - | - | Gibt aus, welches Zeichen aus den fusioniertem Erkennungsergebnis ausgegeben wird: Results siehe TAB_ZEICHEN_FUSIONIERT |
| STAT_FUSIONIERT_GESCHWINDIGKEIT_WERT | km/h oder mph | - | int | - | - | - | - | - | Gibt aus, welche Geschwindigkeit aus dem fusionierten Erkennungsergebnis ausgegeben wird: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten |
| STAT_GUETE_KAM_SLI_GESCHW_WERT | % | - | int | - | - | - | - | - | Gibt aus, mit welcher Güte das Beschränkungs- und Aufhebungszeichen für Geschwindigkeiten mit der Kamera erkannt wurde: 0 - 100 |

### TAB_ZEICHEN_KAMERA

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Zeichen erkannt |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | Ungültige Kamerainformation |
| 0xFF | Ungültig |

### TAB_ZEICHEN_KARTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zeichen vorhanden |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | Ungültige Karteninformation |
| 0xFF | Ungültig |

### TAB_ZEICHEN_FUSIONIERT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ergebnis |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | ungültiges Ergebnis |
| 0xFF | Ungültig |

### TAB_KAFAS_STAT_LVDS

| WERT | TEXT |
| --- | --- |
| 0x01 | Datenstrom OK |
| 0x02 | Datenstrom fehlerhaft |
| 0xFF | Ungültig |

### TAB_KAM_VERB

| WERT | TEXT |
| --- | --- |
| 0x00 | Kamera nicht angeschlossen |
| 0x01 | Kamera angeschlossen |
| 0xFF | nicht definiert |

### ARG_0XD399

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | - | int | - | - | - | - | - | 0 | 25 | Ansteuerdauer in Sekunden  1 - 25 Sekunden  0 = Ansteuerung AUS |
| ANLAUFRAMPE | - | - | int | - | - | - | - | - | 0 | 2 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| STOPRAMPE | - | - | int | - | - | - | - | - | 0 | 2 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| AMPLITUDE | - | - | int | - | - | - | - | - | 0 | 14 | Vibrationsstärke; es sind Amplituden von 0-14 (dezimal) möglich. |
| FREQUENZ | - | - | int | - | - | - | - | - | 0 | 14 | Frequenz der Vibration, Frequenzstufen von 0-14 (dezimal) sind möglich. |

### RES_0XD393

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAFAS_KAM_VIN_WERT | - | - | string[7] | - | - | - | - | - | Ausgabe der 7-stelligen Fahrgestellnummer aus der Kamera. |
| STAT_KAFAS_ECU_VIN_WERT | - | - | string[7] | - | - | - | - | - | Ausgabe der 7-stelligen Fahrgestellnummer aus dem Steuergerät. |
| STAT_KAFAS_VIN_STATUS_NR | 0-n | - | int | - | TAB_KAFAS_STAT_VIN | - | - | - | Gibt aus, ob die Zuordnung Kamera zu Steuergerät übereinstimmt:  0x00: KEINE UEBEREINSTIMMUNG,  0x01 UEBEREINSTIMMUNG |

### TAB_KAFAS_STAT_VIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Übereinstimmung |
| 0x01 | Übereinstimmung |
| 0xFF | Ungültig |

### ARG_0XD3A5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_FLA_CONTROL | - | - | - | - | - | Gibt an, ob das Fernlicht über BUS aus- oder eingeschaltet werden soll:  0 = AUS,  1 = EIN,  2 = Keine Empfehlung 3 = Zurück zum Normalmodus |

### TAB_FLA_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | keine_Empfehlung |
| 0x03 | Zurück_zum_Normalmodus |

### ARG_0XD3A9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTUELLES_SEGMENT_ZEICHEN | 0-n | - | int | - | TAB_ART_ZEICHEN | - | - | - | - | - | Gibt an, welches Zeichen angezeigt werden soll: Argumente siehe TAB_ART_ZEICHEN |
| AKTUELLES_SEGMENT_GESCHWINDIGKEIT | km/h oder mph | - | int | - | - | - | - | - | - | - | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebungszeichen alles, 5 bis 150 in 5-er Schritten. |
| KOMMENDES_SEGMENT_ZEICHEN | 0-n | - | int | - | TAB_ART_ZEICHEN | - | - | - | - | - | Gibt an, welches Zeichen angezeigt werden soll: Argument siehe TAB_ART_ZEICHEN |
| KOMMENDES_SEGMENT_GESCHWINDIGKEIT | km/h oder mph | - | int | - | - | - | - | - | - | - | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| ANZEIGE_UEBERHOLVERBOTSZEICHEN | 0-n | - | int | - | TAB_ART_UEBERHOL_ZEICHEN | - | - | - | - | - | Gibt an, welches Überholverbotszeichen angezeigt werden soll: Argumente siehe TAB_ART_UEBERHOL_ZEICHEN |
| LAENDERKODIERUNG_VERKEHRSZEICHEN | 0-n | - | int | - | TAB_ART_LAENDERKODIERUNG | - | - | - | - | - | Angabe der Länderkodierung der Verkehrszeichen, Argumente siehe TAB_ART_LAENDERKODIERUNG |
| ANZEIGE_TEXT_MELDUNG | 0-n | - | int | - | TAB_ART_TEXT_MELDUNG | - | - | - | - | - | Gibt an, welche Textmeldung angezeigt werden soll: Argumente siehe TAB_ART_MELDUNG |

### TAB_ART_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zeichen verfügbar |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0xFF | Ungültig |

### TAB_ART_UEBERHOL_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Überholverbot |
| 0x01 | Überholverbot PKW |
| 0x02 | Aufhebung Überholverbot PKW |
| 0x03 | Überholverbot PKW mit Anhänger |
| 0x04 | Aufhebung Überholverbot mit Anhänger |
| 0x05 | Überholverbot LKW |
| 0x06 | Aufhebung Überholverbot LKW |
| 0x07 | andere Überholverbote |
| 0xFF | Ungültig |

### TAB_ART_LAENDERKODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ECE white |
| 0x01 | ECE yellow |
| 0x02 | US white |
| 0x03 | US yellow |
| 0x04 | generic |
| 0x05 | reserved |
| 0x06 | reserved |
| 0x07 | reserved |
| 0x08 | reserved |
| 0x09 | reserved |
| 0x0A | reserved |
| 0x0B | reserved |
| 0x0C | reserved |
| 0x0D | reserved |
| 0x0E | signal invalid |

### TAB_ART_TEXT_MELDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | none |
| 0x01 |  available only with navigation DVD  |
| 0x02 |  not available in this country  |
| 0x03 |  navigation data not available  |
| 0x04 |  reserved  |
| 0x05 |  reserved  |
| 0x06 |  reserved  |
| 0x07 | signal invalid |

### RES_0XD396

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFLINE_YAW_WERT | Pixel | - | int | - | - | - | - | - | Offline Yaw-Winkel |
| STAT_OFFLINE_HORIZON_WERT | Pixel | - | int | - | - | - | - | - | Offline Horizon-Winkel |
| STAT_OFFLINE_ROLL_WERT | Grad | - | int | - | - | - | 100 | - | Offline Roll-Winkel |
| STAT_ONLINE_YAW_WERT | Pixel | - | int | - | - | - | - | - | Online Yaw-Winkel |
| STAT_ONLINE_HORIZON_WERT | Pixel | - | int | - | - | - | - | - | Online Horizon-Winkel |
| STAT_ONLINE_ROLL_WERT | Grad | - | int | - | - | - | 100 | - | Online Roll-Winkel |
| STAT_KAM_HOEHE_WERT | mm | - | unsigned int | - | - | - | - | - | Kamera-Verbauhöhe |
| STAT_BRENNWEITE_WERT | Pixel | - | unsigned int | - | - | - | - | - | Brennweite |
| STAT_GRABBING_SHIFT_WERT | Pixel | - | unsigned int | - | - | - | - | - | Grabbing-Shift |
| STAT_FAHRGESTELLNR_WERT | - | - | string[7] | - | - | - | - | - | Fahrgestellnummer in der Kamera |

### ARG_0XD3AB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| METHODE | 0-n | - | int | - | TAB_METHODE_SLI | - | - | - | - | - | Argumente siehe TAB_METHODE_SLI |

### TAB_METHODE_SLI

| WERT | TEXT |
| --- | --- |
| 0x00 | Nur kamerabasierte Erkennung der Verkehrszeichen aktivieren |
| 0x01 | Nur kartenbasierte Erkennung der Verkehrszeichen aktivieren |
| 0x02 | Fusionierte Erkennung aktivieren |
| 0xFF | Auf Standard zurücksetzen |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### RES_0XD394

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAFAS_ECU_SPG_1_8V_WERT | mV | - | int | - | - | - | - | - | Spannungen des Netzteils in der ECU Netzteil (1,8V) |
| STAT_KAFAS_ECU_SPG_1_8V_NR | 0-n | - | int | - | TAB_KAFAS_LIMIT | - | - | - | 0x01: unterhalb des Limits;  0x02: normal;  0x03: überhalb des Limits;  0x04: ungültig; 0xFF: ungültig |
| STAT_KAFAS_ECU_SPG_3_3V_WERT | mV | - | int | - | - | - | - | - | Spannungen des Netzteils in der ECU Netzteil (3,3V) |
| STAT_KAFAS_ECU_SPG_3_3V_NR | 0-n | - | int | - | TAB_KAFAS_LIMIT | - | - | - | 0x01: unterhalb des Limits;  0x02: normal;  0x03: überhalb des Limits;  0x04: ungültig; 0xFF: ungültig |
| STAT_KAFAS_ECU_SPG_5V_WERT | mV | - | int | - | - | - | - | - | Spannungen des Netzteils in der ECU Netzteil (5V) |
| STAT_KAFAS_ECU_SPG_5V_NR | 0-n | - | int | - | TAB_KAFAS_LIMIT | - | - | - | 0x01: unterhalb des Limits;  0x02: normal;  0x03: überhalb des Limits;  0x04: ungültig; 0xFF: ungültig |
| STAT_KAFAS_ECU_SPG_BORDNETZ_WERT | mV | - | int | - | - | - | - | - | Spannungen des Bordnetzes |
| STAT_KAFAS_ECU_SPG_BORDNETZ_NR | 0-n | - | int | - | TAB_KAFAS_LIMIT | - | - | - | 0x01: unterhalb des Limits;  0x02: normal;  0x03: überhalb des Limits;  0x04: ungültig; 0xFF: ungültig |

### TAB_KAFAS_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x01 | unterhalb des Limits |
| 0x02 | normal |
| 0x03 | überhalb des Limits |
| 0x04 | ungültig |
| 0xFF | Ungültig |

### TAC_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | TAC in progress |
| 0x01 | calibration successfully completed |
| 0x02 | Success -> continue calibration |
| 0x03 | insufficient image quality |
| 0x04 | no target located |
| 0x05 | targets out of range |
| 0x06 | inconsistency between left and right target (for instance wrong pitch angle) |
| 0x07 | TAC parameters out of range |
| 0x08 | calibration values out of range (Note: limits are codable in EEPROM) |
| 0x09 | TAC undefined error |
| xy | invalid |
