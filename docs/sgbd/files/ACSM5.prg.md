# ACSM5.prg

## General

|  |  |
| --- | --- |
| File | ACSM5.prg |
| Type | PRG |
| Jobs | 50 |
| Tables | 152 |
| Origin | BMW EE-440 Stephan_Muhr |
| Revision | 4.000 |
| Author | BMW EI-510 Stephan_Muhr |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Airbag-Elektronik |  |  |
| ORIGIN | string | BMW EE-440 Stephan_Muhr |  |  |
| REVISION | string | 4.000 |  |  |
| AUTHOR | string | BMW EI-510 Stephan_Muhr |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.982 |  |  |
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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

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

### _STATUS_HS_LESEN

Historyspeicher lesen (alle Fehler / Ort und Art) UDS     : $22 ReadDataByIdentifier UDS     : $40 Historyspeicher lesen UDS     : $60 Modus   : Default

_No arguments._

### _STATUS_HS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $22 ReadDataByIdentifier UDS  : $40 dataIdentifier UDS  : $60 alle Info-Meldungen anschließend UDS  : $40 dataIdentifier UDS  : $6n Details zur Info-Meldung an der Position n Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 32 Es darf dann nicht argument F_CODE angegeben werden |

### _STATUS_FAS_EDR_SPEICHER_1_INHALT

FAS_EDR_SPEICHER_1_INHALT UDS : $22 ReadDataByIdentifier UDS : $4107 _STATUS_FAS_EDR_SPEICHER_1_INHALT Modus: Development Argumente nur manuell auswählbar. Argument-Assistent von EDIABAS nicht verwendbar

_No arguments._

### _STATUS_FAS_EDR_SPEICHER_2_INHALT

FAS_EDR_SPEICHER_2_INHALT UDS : $22 ReadDataByIdentifier UDS : $4108 _STATUS_FAS_EDR_SPEICHER_2_INHALT Modus: Development Argumente nur manuell auswählbar. Argument-Assistent von EDIABAS nicht verwendbar

_No arguments._

### _STATUS_EDR_READ_OEM_DATA_1

_STATUS_EDR_READ_OEM_DATA_1 UDS : $22 ReadDataByIdentifier UDS : $1013 EDR-OEM-DATA_LESEN_1 Modus: Development Argumente nur manuell auswählbar. Argument-Assistent von EDIABAS nicht verwendbar

_No arguments._

### _STATUS_EDR_READ_OEM_DATA_2

-STATUS_EDR_READ_OEM_DATA_2 UDS : $22 ReadDataByIdentifier UDS : $1014 EDR-OEM-DATA_LESEN_2 Modus: Development Argumente nur manuell auswählbar. Argument-Assistent von EDIABAS nicht verwendbar

_No arguments._

### _STATUS_EDR_READ_OEM_DATA_3

_STATUS_EDR_READ_OEM_DATA_3 UDS : $22 ReadDataByIdentifier UDS : $1015 EDR-OEM-DATA_LESEN_3 Modus: Development Argumente nur manuellauswählbar. Argument-Assistent von EDIABAS nicht verwendbar

_No arguments._

### _STATUS_EDR_READ_OEM_DATA_4

_STATUS_EDR_READ_OEM_DATA_4 UDS : $22 ReadDataByIdentifier UDS : $1016 EDR-OEM-DATA_LESEN_4 Modus: Development Argumente nur manuellauswählbar. Argument-Assistent von EDIABAS nicht verwendbar

_No arguments._

### _STATUS_EDR_READ_OEM_DATA_5

_STATUS_EDR_READ_OEM_DATA_5 UDS : $22 ReadDataByIdentifier UDS : $1017 EDR-OEM-DATA_LESEN_5 Argumente nur manuellauswählbar. Argument-Assistent von EDIABAS nicht verwendbar Modus: Development

_No arguments._

### STATUS_EDR_READ_PUBLIC_DATA_1

STATUS_EDR_READ_PUBLIC_DATA_1 UDS : $22 ReadDataByIdentifier UDS : $FA13 EDR-PUBLIC-DATA_LESEN_1 Modus: Standard

_No arguments._

### STATUS_EDR_READ_PUBLIC_DATA_2

STATUS_EDR_READ_PUBLIC_DATA_2 UDS : $22 ReadDataByIdentifier UDS : $FA14 EDR-PUBLIC-DATA_LESEN_2 Modus: Standard

_No arguments._

### STATUS_EDR_READ_PUBLIC_DATA_3

STATUS_EDR_READ_PUBLIC_DATA_3 UDS : $22 ReadDataByIdentifier UDS : $FA15 EDR-PUBLIC-DATA_LESEN_3 Modus: Standard

_No arguments._

### STATUS_EDR_READ_PUBLIC_DATA_4

STATUS_EDR_READ_PUBLIC_DATA_4 UDS : $22 ReadDataByIdentifier UDS : $FA16 EDR-PUBLIC-DATA_LESEN_4 Modus: Standard

_No arguments._

### STATUS_EDR_READ_PUBLIC_DATA_5

STATUS_EDR_READ_PUBLIC_DATA_5 UDS : $22 ReadDataByIdentifier UDS : $FA17 EDR-PUBLIC-DATA_LESEN_5 Modus: Standard

_No arguments._

### STATUS_CIS_INFO

STATUS_CIS_INFO UDS:     $31 STEUERN_ROUTINE STR & RRR $A0 $DC DATEN_INTERN CIS ab ACSM5

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
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
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

### ARG_0X4032_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_SICHERHEITSLAST_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 0.0 | '0' setzt ZAEHLER zurueck |

### ARG_0X4055_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _AACN_NACHRICHTENLAENGE | HEX | high | unsigned char | - | - | - | - | - | - | - | gibt die Laenge der Nachricht in dem nachfolgenen Bytefeld an |
| _AACN_SENDENACHRICHT | DATA | high | data[30] | - | - | 1.0 | 1.0 | 0.0 | - | - | Bytefeld enthaelt die max. 30 Byte, die ueber die K-Line gesendet werden soll Byte-Definition siehe Spezifikation AACN. Laenge der Nachricht wird im vorhergehenden Laengenfeld angegeben |

### ARG_0X4060_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _DUMMY | HEX | high | unsigned char | - | - | - | - | - | - | - | Wird zum Loeschen des HS-Speicher mit 0x00 befüllt |

### ARG_0X4100_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion 1 = EDR Datenspeicher vollständig löschen |

### ARG_0X4104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion 1 = Steuergerät als Entwicklungssteuergerät deklarieren |

### ARG_0X4105_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht zurücksetzen 1 = zurücksetzen |

### ARG_0X4106_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion 1 = FAS EDR Speicher löschen |

### ARG_0XA0D1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUENDKREIS | + | - | 0-n | high | unsigned char | - | TAB_ZUENDKREISE | - | - | - | - | - | Auswahl Zündkreis aus Tabelle TAB_ZUENDKREISE |

### ARG_0XA0D2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GURTKONTAKT | + | - | 0-n | high | unsigned char | - | TAB_GURTKONTAKTE | - | - | - | - | - | Gurtkontakt aus der Tabelle TAB_GURTKONTAKTE: GK_FA = Gurtkontakt Fahrer GK_BF = Gurtkontakt Beifahrer GK_HI_LI = Gurtkontakt hinten links GK_HI_MITTE = Gurtkontakt hinten Mitte GK_HI_RE = Gurtkontakt hinten rechts GK_DRITTE_SITZREIHE_LI = Gurtkontakt 3. Sitzreihe links GK_DRITTE_SITZREIHE_MITTE = Gurtkontakt 3. Sitzreihe Mitte GK_DRITTE_SITZREIHE_RE = Gurtkontakt 3. Sitzreihe rechts |

### ARG_0XA0D3_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIRBAG_SENSOR | + | - | 0-n | high | unsigned char | - | TAB_AIRBAG_SENSOR | - | - | - | - | - | Auswahl des zu prüfenden Sensors |

### ARG_0XA0D5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des unplausiblen Zündkreises (fortlaufende Nummer, Zuordnung zu TAB_ZUENDKREISE nicht möglich) |

### ARG_0XA0DA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAENDLER_ID_1 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | BMW-Händlernummer Byte #1 |
| HAENDLER_ID_2 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | BMW-Händlernummer Byte #2 |
| HAENDLER_ID_3 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | BMW-Händlernummer Byte #3 |
| HAENDLER_ID_4 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | BMW-Händlernummer Byte #4 |
| FREIGABEDATUM_1 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Freigabedatum Byte #1 (Tag) |
| FREIGABEDATUM_2 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Freigabedatum Byte #2 (Monat) |
| FREIGABEDATUM_3 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Freigabedatum Byte #3 (Jahr) |
| FREIGABEDATUM_4 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Freigabedatum Byte #4 |

### ARG_0XA0DD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CIS_LOGIN_0 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergabewert für Signal ACCE_SOCCU_BYTE_00_PS_ODS_LIN aus LIN-Nachricht ACCE_SOCCU_PS_ODS_LIN (Zugriff_Sitzbelegung_BF_ODS_LIN [1]) |
| CIS_LOGIN_1 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergabewert für Signal ACCE_SOCCU_BYTE_01_PS_ODS_LIN aus LIN-Nachricht ACCE_SOCCU_PS_ODS_LIN (Zugriff_Sitzbelegung_BF_ODS_LIN [1]) |

### ARG_0XA0DE_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADRESSE | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | Für das auslesen der CIS-Daten , wird die Startspeicheradresse übergeben. |
| STAT_LAENGE | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | Die Anzahl der Daten die ausgegeben weden sollen  ( max 252 Bytes). |

### ARG_0XA514_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_SITZ | + | - | 0-n | high | unsigned char | - | TAB_SITZPLATZ | - | - | - | - | - | Auswahl des einzelnen Sitzplatzes, der Sitzreihe oder aller Sitze |

### ARG_0XD479_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_POL | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Aus 1 - 100 = Prozentuale Ansteuerung 100 - 255 = 100% Ein |

### ARG_0XD47B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAMETER_BYTE_1 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument schützt vor unbeabsichtigter Ausführung. Zu übergebender Parameter: 0x2B |
| PARAMETER_BYTE_2 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument schützt vor unbeabsichtigter Ausführung. Zu übergebender Parameter: 0x4E |
| PARAMETER_BYTE_3 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument schützt vor unbeabsichtigter Ausführung. Zu übergebender Parameter: 0x80 |
| PARAMETER_BYTE_4 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument schützt vor unbeabsichtigter Ausführung. Zu übergebender Parameter: 0x6D |

### ARG_0XD482_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UEBERGABEPARAMETER | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = verriegeln 1 = freigeben nur in Level 5 möglich |

### ARG_0XD484_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAMETER_BYTE_1 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorbereitung Rollovertestauslösung Zu übergebender Parameter: 0x5A |
| PARAMETER_BYTE_2 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorbereitung Rollovertestauslösung Zu übergebender Parameter: 0x7C |
| PARAMETER_BYTE_3 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorbereitung Rollovertestauslösung Zu übergebender Parameter: 0x3A |
| PARAMETER_BYTE_4 | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorbereitung Rollovertestauslösung Zu übergebender Parameter: 0x91 |

### ARG_0XD48C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_POL_AKTIV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Aus 1 - 100 = Prozentuale Ansteuerung 100 - 255 = 100% Ein |

### ARG_0XD48D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _PARKSLAVE_AKTIVIEREN_DEAKTIVIEREN | HEX | high | unsigned int | - | - | - | - | - | - | - | Parkslaves Aktivierung/Deaktivierung  ---- ---0 ---- ----  PDC Deaktivierung ---- ---1 ---- ----  PDC Aktivierung ---- --0- ---- ----  TV Deaktivierung ---- --1- ---- ----  TV Aktivierung ---- -0-- ---- ----  RV Deaktivierung ---- -1-- ---- ----  RV Aktivierung ---- 0--- ---- ----  PMA Deaktivierung ---- 1--- ---- ----  PMA Aktivierung --0- ---- ---- ----  aPDC Deaktivierung --1- ---- ---- ----  aPDC Aktivierung 0--- ---- ---- ----  RCP Deaktivierung 1--- ---- ---- ----  RCP Aktivierung ---- ---- ---- --0-  CTA Deaktivierung ---- ---- ---- --1-  CTA Aktivierung ---- ---- ---- -0--  IL Deaktivierung ---- ---- ---- -1--  IL Aktivierung ---- ---- ---- 0---  AHA Deaktivierung ---- ---- ---- 1---  AHA Aktivierung ---- ---- ---0 ----  RFA Deaktivierung ---- ---- ---1 ----  RFA Aktivierung ---- ---- --0- ----  RV Kopplung Deaktivierung ---- ---- --1- ----  RV Kopplung Aktivierung 1111 1111 1111 1111  Signal ungültig |

### ARG_0XE210_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SELECTED_FUNCTION | + | + | 0-n | high | unsigned char | - | TAB_EDR_SELECTED_FUNCTION | - | - | - | - | - | Selected Function |
| STAT_EDR_ENTRY_TO_PROCESS | + | + | 0-n | high | unsigned char | - | TAB_EDR_ENTRY_SELECT | - | - | - | - | - | EDR-Entry To Process Siehe Tabelle TAB_EDR_ENTRY_TO_PROCESS |

### ARG_0XE211_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDR_DATA_SELECT | + | + | 0-n | high | unsigned char | - | TAB_EDR_DATA_SELECT | - | - | - | - | - | EDR Selected data  Siehe TAB_EDR_DATA_SELECT |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_SITZ | + | - | 0-n | high | unsigned char | - | TAB_AUSWAHL_SITZ | - | - | - | - | - | Auswahl des einzelnen Sitzplatzes, der Sitzreihe oder aller Sitze |
| _KENNLINIE_NR | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Auszulösende Kennlinie / Funktion. |
| _DAUER_AKT | + | - | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Aktivierung [100ms] |
| _DAUER_ABB | + | - | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer bis Abbruch [100ms] |

### ARG_0XF001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _KENNLINIE_NR | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Auszulösende Kennlinie / Funktion |
| _SITZ_PROFIL | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Steuerung PreCrash Sitz Profil |
| _CMD_FENSTER | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Steuerung PreCrash Fensterheber |
| _CMD_DACH | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Steuerung PreCrash Schiebe/Hebedach |
| _DAUER_AKT | + | - | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Aktivierung [100ms] |
| _DAUER_ABB | + | - | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer bis Abbruch [100ms] |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _ANZ_PCR_RST | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Setzt PreCrash Zaehler zurück |
| _ZS_PCR_RST | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Setzt PreCrash Zeitstempeln zurück |

### ARG_0XF004_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _DAC_DIAG_RESET | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ausführung von Algo Reset [1 = Algo Reset wird ausgeführt] |

### ARG_0XF005_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _DAC_DIAG_NVRAM | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | TestModus NvRAM wird aktiviert/deaktiviert [1 = TestModus NvRAM wird aktiviert; 0=TestModus NvRAM wird deaktiviert] |

### ARG_0XF006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DACDIAGCC | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Anzeige der CC-Meldung  Kaffeetasse  [1 = CC-Meldung aktivieren  ; 0 = CC-Meldung deaktivieren] |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VEH_DMG_COU | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Zähler |
| VEH_DMG_DT_0_LOC | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Daten 0 Localization |
| VEH_DMG_DT_1_MAXAX | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Daten 1 max a_x |
| VEH_DMG_DT_2_MAXAY | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Daten 2 max a_y |
| VEH_DMG_DT_3_MAXVYAW | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Daten 3 max vyaw |
| VEH_DMG_DT_4 | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Daten 4 |
| VEH_DMG_DT_5_CONF | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Daten 5 confidence |
| VEH_DMG_STG | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Schaden Stufe |
| VEH_VRS_ALGO | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Version Algorithmus |
| VEH_VRS_DMG_DT | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Fahrzeug Version Schaden Daten |

### ARG_0XF100_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _DTC | + | + | HEX | high | unsigned long | - | - | - | - | - | - | - | Enthaelt den zu ueberwachenden DTC-Code |
| _ADRESSE_A | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | Enthaelt die erste zu ueberwachende Adresse |
| _ADRESSE_B | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | Enthaelt die zweite zu ueberwachende Adresse |

### BF_ANZEIGE_UHR_GUELTIG_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGE_UHR_GUELTIG | 0-n | high | unsigned char | 0x01 | GUELTIG | - | - | - | ob Daten gültig |
| STAT_S_W_ZEIT | 0-n | high | unsigned char | 0x02 | S_W_ZEIT | - | - | - | Sommer oder Winterzeit |
| STAT_STELLEN_UHRZEIT | 0-n | high | unsigned char | 0x0C | UHRZEIT_STELLEN | - | - | - | wie wurde Uhrzeit gestellt |

### BF_DATUM_WOCHENTAG_MONAT_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WOCHENTAG | 0-n | high | unsigned char | 0x0F | WOCHENTAG_STRUC | - | - | - | Wochentag |
| STAT_MONAT | 0-n | high | unsigned char | 0xF0 | TAB_MONAT_STRUC | - | - | - | Monat |

### BF_EDR_DEVICES

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDR_DEVICES | 0-n | high | unsigned char | 0x3F | - | - | - | - | NumberOfEDRDevices |
| STAT_RESERVED | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Reserved |
| STAT_STORAGE_TYPE | 0/1 | high | unsigned char | 0x80 | - | - | - | - | StorageType 0 = central 1 = distributed |

### BF_SITZBELEGUNG_BF_GEFILTERT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZBELEGUNG_BF_GEFILTERT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Filter alktiv für Sitzbelegung |

### BF_ST_DISP_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISP_50 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status Anforderung ANZ-50 |
| STAT_DISP_51 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Status Anforderung ANZ-51 |
| STAT_DISP_52 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Status Anforderung ANZ-52 |
| STAT_DISP_53 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Status Anforderung ANZ-53 |
| STAT_DISP_54 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Status Anforderung ANZ-54 |

### BF_ST_DISP_STRUCT_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBR_ACT_COND | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Aktivierungszustand SBR |
| STAT_ST_DISP_50 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Status Anforderung ANZ-50 |
| STAT_ST_DISP_51 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Status Anforderung ANZ-51 |
| STAT_ST_DISP_52 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Status Anforderung ANZ-52 |
| STAT_ST_DISP_53 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Status Anforderung ANZ-53 |
| STAT_ST_DISP_54 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Status Anforderung ANZ-54 |
| STAT_ST_DISP_55 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Status Anforderung ANZ-55 |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020100 | Energiesparmode aktiv | 0 | - |
| 0x020108 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020109 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02010A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02010B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02010C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02010D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF01 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x481700 | Interner Steuergerätefehler REMA links | 0 | - |
| 0x481702 | Temporäre Funktionsstörung REMA links | 0 | - |
| 0x481716 | REMA links: Maximale Anzahl Straffungen erreicht | 0 | - |
| 0x481900 | Interner Steuergerätefehler REMA rechts | 0 | - |
| 0x481902 | Temporäre Funktionsstörung REMA rechts | 0 | - |
| 0x481916 | REMA rechts: Maximale Anzahl Straffungen erreicht | 0 | - |
| 0x803185 | Aktivierung Auto PDC nicht möglich wegen Kommunikationsfehler | 0 | - |
| 0x803186 | Aktivierung Parkfunktionen nicht möglich (Teilnetz nicht verfügbar) | 0 | - |
| 0x930901 | Airbag Fahrer 1. Stufe: Kurzschluss nach Minus | 0 | - |
| 0x930902 | Airbag Fahrer 1. Stufe: Kurzschluss nach Plus | 0 | - |
| 0x930903 | Airbag Fahrer 1. Stufe: Widerstand zu klein | 0 | - |
| 0x930904 | Airbag Fahrer 1. Stufe: Widerstand zu groß | 0 | - |
| 0x930905 | Airbag Fahrer 1. Stufe: Leitung verkoppelt | 0 | - |
| 0x930907 | Airbag Fahrer 2. Stufe: Kurzschluss nach Minus | 0 | - |
| 0x930908 | Airbag Fahrer 2. Stufe: Kurzschluss nach Plus | 0 | - |
| 0x930909 | Airbag Fahrer 2. Stufe: Widerstand zu klein | 0 | - |
| 0x93090A | Airbag Fahrer 2. Stufe: Widerstand zu groß | 0 | - |
| 0x93090B | Airbag Fahrer 2. Stufe: Leitung verkoppelt | 0 | - |
| 0x93090D | Airbag Fahrer Ventil: Kurzschluss nach Minus | 0 | - |
| 0x93090E | Airbag Fahrer Ventil: Kurzschluss nach Plus | 0 | - |
| 0x93090F | Airbag Fahrer Ventil: Widerstand zu klein | 0 | - |
| 0x930910 | Airbag Fahrer Ventil: Widerstand zu groß | 0 | - |
| 0x930911 | Airbag Fahrer Ventil: Leitung verkoppelt | 0 | - |
| 0x930913 | Airbag Beifahrer 1. Stufe: Kurzschluss nach Minus | 0 | - |
| 0x930914 | Airbag Beifahrer 1. Stufe: Kurzschluss nach Plus | 0 | - |
| 0x930915 | Airbag Beifahrer 1. Stufe: Widerstand zu klein | 0 | - |
| 0x930916 | Airbag Beifahrer 1. Stufe: Widerstand zu groß | 0 | - |
| 0x930917 | Airbag Beifahrer 1. Stufe: Leitung verkoppelt | 0 | - |
| 0x930919 | Airbag Beifahrer 2. Stufe: Kurzschluss nach Minus | 0 | - |
| 0x93091A | Airbag Beifahrer 2. Stufe: Kurzschluss nach Plus | 0 | - |
| 0x93091B | Airbag Beifahrer 2. Stufe: Widerstand zu klein | 0 | - |
| 0x93091C | Airbag Beifahrer 2. Stufe: Widerstand zu groß | 0 | - |
| 0x93091D | Airbag Beifahrer 2. Stufe: Leitung verkoppelt | 0 | - |
| 0x93091F | Airbag Beifahrer Ventil: Kurzschluss nach Minus | 0 | - |
| 0x930920 | Airbag Beifahrer Ventil: Kurzschluss nach Plus | 0 | - |
| 0x930921 | Airbag Beifahrer Ventil: Widerstand zu klein | 0 | - |
| 0x930922 | Airbag Beifahrer Ventil: Widerstand zu groß | 0 | - |
| 0x930923 | Airbag Beifahrer Ventil: Leitung verkoppelt | 0 | - |
| 0x930925 | Gurtstrammer Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x930926 | Gurtstrammer Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x930927 | Gurtstrammer Fahrer: Widerstand zu klein | 0 | - |
| 0x930928 | Gurtstrammer Fahrer: Widerstand zu groß | 0 | - |
| 0x930929 | Gurtstrammer Fahrer: Leitung verkoppelt | 0 | - |
| 0x93092B | Endbeschlagstrammer Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x93092C | Endbeschlagstrammer Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x93092D | Endbeschlagstrammer Fahrer: Widerstand zu klein | 0 | - |
| 0x93092E | Endbeschlagstrammer Fahrer: Widerstand zu groß | 0 | - |
| 0x93092F | Endbeschlagstrammer Fahrer: Leitung verkoppelt | 0 | - |
| 0x930931 | Gurtkraftbegrenzer Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x930932 | Gurtkraftbegrenzer Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x930933 | Gurtkraftbegrenzer Fahrer: Widerstand zu klein | 0 | - |
| 0x930934 | Gurtkraftbegrenzer Fahrer: Widerstand zu groß | 0 | - |
| 0x930935 | Gurtkraftbegrenzer Fahrer: Leitung verkoppelt | 0 | - |
| 0x930937 | Gurtstrammer Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930938 | Gurtstrammer Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930939 | Gurtstrammer Beifahrer: Widerstand zu klein | 0 | - |
| 0x93093A | Gurtstrammer Beifahrer: Widerstand zu groß | 0 | - |
| 0x93093B | Gurtstrammer Beifahrer: Leitung verkoppelt | 0 | - |
| 0x93093D | Endbeschlagstrammer Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x93093E | Endbeschlagstrammer Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x93093F | Endbeschlagstrammer Beifahrer: Widerstand zu klein | 0 | - |
| 0x930940 | Endbeschlagstrammer Beifahrer: Widerstand zu groß | 0 | - |
| 0x930941 | Endbeschlagstrammer Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930943 | Gurtkraftbegrenzer Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930944 | Gurtkraftbegrenzer Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930945 | Gurtkraftbegrenzer Beifahrer: Widerstand zu klein | 0 | - |
| 0x930946 | Gurtkraftbegrenzer Beifahrer: Widerstand zu groß | 0 | - |
| 0x930947 | Gurtkraftbegrenzer Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930949 | Knieairbag Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x93094A | Knieairbag Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x93094B | Knieairbag Fahrer: Widerstand zu klein | 0 | - |
| 0x93094C | Knieairbag Fahrer: Widerstand zu groß | 0 | - |
| 0x93094D | Knieairbag Fahrer: Leitung verkoppelt | 0 | - |
| 0x93094F | Knieairbag Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930950 | Knieairbag Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930951 | Knieairbag Beifahrer: Widerstand zu klein | 0 | - |
| 0x930952 | Knieairbag Beifahrer: Widerstand zu groß | 0 | - |
| 0x930953 | Knieairbag Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930955 | Aktive Kopfstuetze Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x930956 | Aktive Kopfstuetze Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x930957 | Aktive Kopfstuetze Fahrer: Widerstand zu klein | 0 | - |
| 0x930958 | Aktive Kopfstuetze Fahrer: Widerstand zu groß | 0 | - |
| 0x930959 | Aktive Kopfstuetze Fahrer: Leitung verkoppelt | 0 | - |
| 0x93095B | Aktive Kopfstuetze Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x93095C | Aktive Kopfstuetze Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x93095D | Aktive Kopfstuetze Beifahrer: Widerstand zu klein | 0 | - |
| 0x93095E | Aktive Kopfstuetze Beifahrer: Widerstand zu groß | 0 | - |
| 0x93095F | Aktive Kopfstuetze Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930961 | Gurtstrammer hinten links: Kurzschluss nach Minus | 0 | - |
| 0x930962 | Gurtstrammer hinten links: Kurzschluss nach Plus | 0 | - |
| 0x930963 | Gurtstrammer hinten links: Widerstand zu klein | 0 | - |
| 0x930964 | Gurtstrammer hinten links: Widerstand zu groß | 0 | - |
| 0x930965 | Gurtstrammer hinten links: Leitung verkoppelt | 0 | - |
| 0x930967 | Gurtstrammer hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x930968 | Gurtstrammer hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x930969 | Gurtstrammer hinten rechts: Widerstand zu klein | 0 | - |
| 0x93096A | Gurtstrammer hinten rechts: Widerstand zu groß | 0 | - |
| 0x93096B | Gurtstrammer hinten rechts: Leitung verkoppelt | 0 | - |
| 0x93096D | Seitenairbag Fahrer Ventil: Kurzschluss nach Minus | 0 | - |
| 0x93096E | Seitenairbag Fahrer Ventil: Kurzschluss nach Plus | 0 | - |
| 0x93096F | Seitenairbag Fahrer Ventil: Widerstand zu klein | 0 | - |
| 0x930970 | Seitenairbag Fahrer Ventil: Widerstand zu groß | 0 | - |
| 0x930971 | Seitenairbag Fahrer Ventil: Leitung verkoppelt | 0 | - |
| 0x930973 | Seitenairbag Beifahrer Ventil: Kurzschluss nach Minus | 0 | - |
| 0x930974 | Seitenairbag Beifahrer Ventil: Kurzschluss nach Plus | 0 | - |
| 0x930975 | Seitenairbag Beifahrer Ventil: Widerstand zu klein | 0 | - |
| 0x930976 | Seitenairbag Beifahrer Ventil: Widerstand zu groß | 0 | - |
| 0x930977 | Seitenairbag Beifahrer Ventil: Leitung verkoppelt | 0 | - |
| 0x930979 | Seitenairbag Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x93097A | Seitenairbag Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x93097B | Seitenairbag Fahrer: Widerstand zu klein | 0 | - |
| 0x93097C | Seitenairbag Fahrer: Widerstand zu groß | 0 | - |
| 0x93097D | Seitenairbag Fahrer: Leitung verkoppelt | 0 | - |
| 0x93097F | Seitenairbag Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930980 | Seitenairbag Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930981 | Seitenairbag Beifahrer: Widerstand zu klein | 0 | - |
| 0x930982 | Seitenairbag Beifahrer: Widerstand zu groß | 0 | - |
| 0x930983 | Seitenairbag Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930985 | Kopfairbag links: Kurzschluss nach Minus | 0 | - |
| 0x930986 | Kopfairbag links: Kurzschluss nach Plus | 0 | - |
| 0x930987 | Kopfairbag links: Widerstand zu klein | 0 | - |
| 0x930988 | Kopfairbag links: Widerstand zu groß | 0 | - |
| 0x930989 | Kopfairbag links: Leitung verkoppelt | 0 | - |
| 0x93098B | Kopfairbag rechts: Kurzschluss nach Minus | 0 | - |
| 0x93098C | Kopfairbag rechts: Kurzschluss nach Plus | 0 | - |
| 0x93098D | Kopfairbag rechts: Widerstand zu klein | 0 | - |
| 0x93098E | Kopfairbag rechts: Widerstand zu groß | 0 | - |
| 0x93098F | Kopfairbag rechts: Leitung verkoppelt | 0 | - |
| 0x930991 | Sicherheitsbatterieklemme: Kurzschluss nach Minus | 0 | - |
| 0x930992 | Sicherheitsbatterieklemme: Kurzschluss nach Plus | 0 | - |
| 0x930993 | Sicherheitsbatterieklemme: Widerstand zu klein | 0 | - |
| 0x930994 | Sicherheitsbatterieklemme: Widerstand zu groß | 0 | - |
| 0x930995 | Sicherheitsbatterieklemme: Leitung verkoppelt | 0 | - |
| 0x9309A9 | Fussgaengerschutzsystem vorn links: Kurzschluss nach Minus | 0 | - |
| 0x9309AA | Fussgaengerschutzsystem vorn links: Kurzschluss nach Plus | 0 | - |
| 0x9309AB | Fussgaengerschutzsystem vorn links: Widerstand zu klein | 0 | - |
| 0x9309AC | Fussgaengerschutzsystem vorn links: Widerstand zu groß | 0 | - |
| 0x9309AD | Fussgaengerschutzsystem vorn links: Leitung verkoppelt | 0 | - |
| 0x9309AF | Fussgaengerschutzsystem vorn rechts: Kurzschluss nach Minus | 0 | - |
| 0x9309B0 | Fussgaengerschutzsystem vorn rechts: Kurzschluss nach Plus | 0 | - |
| 0x9309B1 | Fussgaengerschutzsystem vorn rechts: Widerstand zu klein | 0 | - |
| 0x9309B2 | Fussgaengerschutzsystem vorn rechts: Widerstand zu groß | 0 | - |
| 0x9309B3 | Fussgaengerschutzsystem vorn rechts: Leitung verkoppelt | 0 | - |
| 0x9309B5 | Fussgaengerschutzsystem hinten links: Kurzschluss nach Minus | 0 | - |
| 0x9309B6 | Fussgaengerschutzsystem hinten links: Kurzschluss nach Plus | 0 | - |
| 0x9309B7 | Fussgaengerschutzsystem hinten links: Widerstand zu klein | 0 | - |
| 0x9309B8 | Fussgaengerschutzsystem hinten links: Widerstand zu groß | 0 | - |
| 0x9309B9 | Fussgaengerschutzsystem hinten links: Leitung verkoppelt | 0 | - |
| 0x9309BB | Fussgaengerschutzsystem hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x9309BC | Fussgaengerschutzsystem hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x9309BD | Fussgaengerschutzsystem hinten rechts: Widerstand zu klein | 0 | - |
| 0x9309BE | Fussgaengerschutzsystem hinten rechts: Widerstand zu groß | 0 | - |
| 0x9309BF | Fussgaengerschutzsystem hinten rechts: Leitung verkoppelt | 0 | - |
| 0x9309C0 | Gurtschlosskontakt Fahrer: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309C1 | Gurtschlosskontakt Fahrer: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309C2 | Gurtschlosskontakt Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x9309C3 | Gurtschlosskontakt Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x9309C4 | Gurtschlosskontakt Fahrer: Unterbrechung | 0 | - |
| 0x9309C5 | Gurtschlosskontakt Fahrer: Leitung verkoppelt | 0 | - |
| 0x9309C6 | Gurtschlosskontakt Beifahrer: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309C7 | Gurtschlosskontakt Beifahrer: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309C8 | Gurtschlosskontakt Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x9309C9 | Gurtschlosskontakt Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x9309CA | Gurtschlosskontakt Beifahrer: Unterbrechung | 0 | - |
| 0x9309CB | Gurtschlosskontakt Beifahrer: Leitung verkoppelt | 0 | - |
| 0x9309CC | Gurtschlosskontakt hinten links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309CD | Gurtschlosskontakt hinten links: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309CE | Gurtschlosskontakt hinten links: Kurzschluss nach Minus | 0 | - |
| 0x9309CF | Gurtschlosskontakt hinten links: Kurzschluss nach Plus | 0 | - |
| 0x9309D0 | Gurtschlosskontakt hinten links: Unterbrechung | 0 | - |
| 0x9309D1 | Gurtschlosskontakt hinten links: Leitung verkoppelt | 0 | - |
| 0x9309D2 | Gurtschlosskontakt hinten rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309D3 | Gurtschlosskontakt hinten rechts: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309D4 | Gurtschlosskontakt hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x9309D5 | Gurtschlosskontakt hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x9309D6 | Gurtschlosskontakt hinten rechts: Unterbrechung | 0 | - |
| 0x9309D7 | Gurtschlosskontakt hinten rechts: Leitung verkoppelt | 0 | - |
| 0x9309D8 | Gurtschlosskontakt hinten mitte: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309D9 | Gurtschlosskontakt hinten Mitte: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309DA | Gurtschlosskontakt hinten Mitte: Kurzschluss nach Minus | 0 | - |
| 0x9309DB | Gurtschlosskontakt hinten Mitte: Kurzschluss nach Plus | 0 | - |
| 0x9309DC | Gurtschlosskontakt hinten Mitte: Unterbrechung | 0 | - |
| 0x9309DD | Gurtschlosskontakt hinten Mitte: Leitung verkoppelt | 0 | - |
| 0x9309DE | POS: Schalter fuer Beifahrerairbag-Abschaltung: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309DF | POS: Schalter fuer Beifahrerairbag-Abschaltung: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309E0 | POS: Schalter fuer Beifahrerairbag-Abschaltung: Kurzschluss nach Minus | 0 | - |
| 0x9309E1 | POS: Schalter fuer Beifahrerairbag-Abschaltung: Kurzschluss nach Plus | 0 | - |
| 0x9309E2 | POS: Schalter fuer Beifahrerairbag-Abschaltung: Unterbrechung | 0 | - |
| 0x9309E3 | POS: Schalter fuer Beifahrerairbag-Abschaltung :Leitung verkoppelt | 0 | - |
| 0x9309E4 | Sitzpositionssensor Fahrer: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x9309E5 | Sitzpositionssensor Fahrer: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x9309E6 | Sitzpositionssensor Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x9309E7 | Sitzpositionssensor Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x9309E8 | Sitzpositionssensor Fahrer: Unterbrechung | 0 | - |
| 0x9309E9 | Sitzpositionssensor Fahrer: Leitung verkoppelt | 0 | - |
| 0x9309ED | ODS-System: Sitzbelegungsmatte Beifahrer: noch nicht freigegeben | 0 | - |
| 0x9309FB | Upfront Airbagfrontsensor links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A02 | Upfront Airbagfrontsensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A06 | ODS-System: Sitzbelegungsmatte Beifahrer: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A07 | ODS-System: Sitzbelegungsmatte Beifahrer: Signal ungueltig | 0 | - |
| 0x930A08 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler Sensor Kurzschluss | 0 | - |
| 0x930A09 | ODS-System: Sitzbelegungsmatte Beifahrer: Zugriff fehlgeschlagen | 0 | - |
| 0x930A0A | Airbagsensor B-Saeule rechts (x-y-Richtung): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A0B | Airbagsensor Tür vorn links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A11 | PTS Plausibilisierungssensor: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A13 | ODS-System: Sitzbelegungsmatte Beifahrer: Datenspeicher voll | 0 | - |
| 0x930A14 | ODS-System: Sitzbelegungsmatte Beifahrer: Kommunikationsstoerung | 0 | - |
| 0x930A15 | ODS-System: Sitzbelegungsmatte Beifahrer: Unerlaubter Mattenquertausch | 0 | - |
| 0x930A16 | ODS-System: Sitzbelegungsmatte Beifahrer: Ersatzteil: Codierung notwendig | 0 | - |
| 0x930A1B | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler Sensor Unterbrechung | 0 | - |
| 0x930A1C | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Sensorfehler wegen Feuchtigkeit | 0 | - |
| 0x930A1D | ODS-System: Sitzbelegungsmatte Beifahrer: sendet unplausible Messwerte | 0 | - |
| 0x930A1E | Airbagsensor B-Saeule links (x-y-Richtung): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A21 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler Masse Sitzpfanne | 0 | - |
| 0x930A22 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet unplausible Messwerte Heizdraht | 0 | - |
| 0x930A23 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler Freigabe fehlgeschlagen | 0 | - |
| 0x930A24 | UpFront: Airbagfrontsensor links: Sensortyp falsch | 0 | - |
| 0x930A26 | UpFront: Airbagfrontsensor links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A27 | UpFront: Airbagfrontsensor links: sendet Fehler | 0 | - |
| 0x930A28 | UpFront: Airbagfrontsensor links: Kommunikationsstoerung | 0 | - |
| 0x930A2A | UpFront: Airbagfrontsensor links: Kurzschluss nach Minus | 0 | - |
| 0x930A2E | UpFront: Airbagfrontsensor rechts: Sensortyp falsch | 0 | - |
| 0x930A30 | UpFront: Airbagfrontsensor rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A31 | UpFront: Airbagfrontsensor rechts: sendet Fehler | 0 | - |
| 0x930A32 | UpFront: Airbagfrontsensor rechts: Kommunikationsstoerung | 0 | - |
| 0x930A34 | UpFront: Airbagfrontsensor rechts: Kurzschluss nach Minus | 0 | - |
| 0x930A38 | Airbagsensor B-Saeule links (x-y-Richtung): Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A39 | Airbagsensor B-Saeule links (x-y-Richtung): Kommunikationsstoerung | 0 | - |
| 0x930A3B | Airbagsensor B-Saeule links (x-y-Richtung): Kurzschluss nach Minus | 0 | - |
| 0x930A3F | Airbagsensor B-Saeule links (x-Richtung): Sensortyp falsch | 0 | - |
| 0x930A41 | Airbagsensor B-Saeule links (x-Richtung): sendet Fehler | 0 | - |
| 0x930A42 | Airbagsensor B-Saeule links (y-Richtung): Sensortyp falsch | 0 | - |
| 0x930A44 | Airbagsensor B-Saeule links (y-Richtung): sendet Fehler | 0 | - |
| 0x930A45 | Airbagsensor B-Saeule rechts (x-y-Richtung): Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A46 | Airbagsensor B-Saeule rechts (x-y-Richtung): Kommunikationsstoerung | 0 | - |
| 0x930A48 | Airbagsensor B-Saeule rechts (x-y-Richtung): Kurzschluss nach Minus | 0 | - |
| 0x930A4C | Airbagsensor B-Saeule rechts (x-Richtung): Sensortyp falsch | 0 | - |
| 0x930A4E | Airbagsensor B-Saeule rechts (x-Richtung): sendet Fehler | 0 | - |
| 0x930A4F | Airbagsensor B-Saeule rechts (y-Richtung): Sensortyp falsch | 0 | - |
| 0x930A51 | Airbagsensor B-Saeule rechts (y-Richtung): sendet Fehler | 0 | - |
| 0x930A52 | Airbagsensor Tür vorn links: Sensortyp falsch | 0 | - |
| 0x930A53 | Airbagsensor Tür vorn links: Druckwert ueber Grenzwert | 0 | - |
| 0x930A54 | Airbagsensor Tür vorn links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A55 | Airbagsensor Tür vorn links: sendet Fehler | 0 | - |
| 0x930A56 | Airbagsensor Tür vorn links: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930A57 | Airbagsensor Tür vorn links: Kommunikationsstoerung | 0 | - |
| 0x930A59 | Airbagsensor Tür vorn links: Kurzschluss nach Minus | 0 | - |
| 0x930A5C | Airbagsensor Tür vorn rechts: Sensortyp falsch | 0 | - |
| 0x930A5D | Airbagsensor Tür vorn rechts: Druckwert ueber Grenzwert | 0 | - |
| 0x930A5E | Airbagsensor Tür vorn rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A5F | Airbagsensor Tür vorn rechts: sendet Fehler | 0 | - |
| 0x930A60 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler Sitz nass | 0 | - |
| 0x930A61 | Airbagsensor Tür vorn rechts: Kommunikationsstoerung | 0 | - |
| 0x930A63 | Airbagsensor Tür vorn rechts: Kurzschluss nach Minus | 0 | - |
| 0x930A64 | Airbagsensor Tür vorn rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A70 | Fussgaengerschutzsensor vorn links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A71 | Fussgaengerschutzsensor vorn links: Kommunikationsstoerung | 0 | - |
| 0x930A72 | Fussgaengerschutzsensor vorn links: Kurzschluss nach Minus | 0 | - |
| 0x930A73 | Fussgaengerschutzsensor vorn links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A74 | Fussgaengerschutzsensor vorn links: Leitung verkoppelt | 0 | - |
| 0x930A75 | Fussgaengerschutzsensor vorn links: sendet Fehler | 0 | - |
| 0x930A76 | Fussgaengerschutzsensor vorn links: Sensortyp falsch | 0 | - |
| 0x930A77 | Fussgaengerschutzsensor vorn links: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930A78 | Fussgaengerschutzsensor vorn Mitte: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A79 | Fussgaengerschutzsensor vorn Mitte: Kommunikationsstoerung | 0 | - |
| 0x930A7A | Fussgaengerschutzsensor vorn Mitte: Kurzschluss nach Minus | 0 | - |
| 0x930A7B | Fussgaengerschutzsensor vorn Mitte: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A7C | Fussgaengerschutzsensor vorn Mitte: Leitung verkoppelt | 0 | - |
| 0x930A7D | Fussgaengerschutzsensor vorn Mitte: sendet Fehler | 0 | - |
| 0x930A7E | Fussgaengerschutzsensor vorn Mitte: Sensortyp falsch | 0 | - |
| 0x930A7F | Fussgaengerschutzsensor vorn Mitte: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930A80 | Fussgaengerschutzsensor vorn rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A81 | Fussgaengerschutzsensor vorn rechts: Kommunikationsstoerung | 0 | - |
| 0x930A82 | Fussgaengerschutzsensor vorn rechts: Kurzschluss nach Minus | 0 | - |
| 0x930A83 | Fussgaengerschutzsensor vorn rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930A84 | Fussgaengerschutzsensor vorn rechts: Leitung verkoppelt | 0 | - |
| 0x930A85 | Fussgaengerschutzsensor vorn rechts: sendet Fehler | 0 | - |
| 0x930A86 | Fussgaengerschutzsensor vorn rechts: Sensortyp falsch | 0 | - |
| 0x930A87 | Fussgaengerschutzsensor vorn rechts: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930A8D | PTS Plausibilisierungssensor: Leitung verkoppelt | 0 | - |
| 0x930A8E | PTS Plausibilisierungssensor: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930A8F | PTS Plausibilisierungssensor: sendet Fehler | 0 | - |
| 0x930A90 | PTS Plausibilisierungssensor: Sensortyp falsch | 0 | - |
| 0x930A91 | PTS Plausibilisierungssensor: Kommunikationsstoerung | 0 | - |
| 0x930A93 | PTS Plausibilisierungssensor: Kurzschluss nach Minus | 0 | - |
| 0x930AA1 | Versorgungsspannung: Unterspannung | 1 | - |
| 0x930AA2 | Versorgungsspannung: Ueberspannung | 1 | - |
| 0x930AA3 | Versorgungsspannung: Unterspannung im Selbstest erkannt (PDC) | 1 | - |
| 0x930AA4 | Versorgungsspannung: Ueberspannung im Selbstest erkannt (PDC) | 1 | - |
| 0x930AA5 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet CIS-interner Elektronikfehler (EEPROM) | 0 | - |
| 0x930AA8 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet CIS-interner Elektronikfehler (COMP) | 0 | - |
| 0x930AAE | ODS-System: Sitzbelegungsmatte Beifahrer: sendet CIS-Speicherfehler Elektronik | 0 | - |
| 0x930AB1 | POL: Kontrollleuchte fuer Beifahrerairbag-Abschaltung: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930AB2 | POL: Kontrollleuchte fuer Beifahrerairbag-Abschaltung: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x930AB3 | POL: Kontrollleuchte fuer Beifahrerairbag-Abschaltung: Kurzschluss nach Plus | 0 | - |
| 0x930AB6 | Crash-Botschaft gespeichert | 0 | - |
| 0x930AB7 | Maximale Anzahl Crash-Botschaften gespeichert | 0 | - |
| 0x930AB9 | Recycling-Zuendung wurde ausgefuehrt | 0 | - |
| 0x930ABC | Steuergeraet nicht verriegelt | 0 | - |
| 0x930ABE | SW-Funktionsfehler | 0 | - |
| 0x930ABF | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler CIS-Codierdaten | 0 | - |
| 0x930AC0 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Algorithmusfehler | 0 | - |
| 0x930AC9 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet CIS-interner Elektronikfehler (externer Komparator) | 0 | - |
| 0x930ACA | ODS-System: Sitzbelegungsmatte Beifahrer: sendet CIS-interner Elektronikfehler (Kapazitaetsfehler) | 0 | - |
| 0x930ACB | Fussgaengerschutzsystem: Crash-Botschaft gespeichert | 0 | - |
| 0x930AD7 | ODS-System: Sitzbelegungsmatte Beifahrer: sendet Fehler CIS Spannungsversorgung | 0 | - |
| 0x930AD9 | Rollover Schutz links pyrotechnisch: Kurzschluss nach Minus | 0 | - |
| 0x930ADA | Rollover Schutz links pyrotechnisch: Kurzschluss nach Plus | 0 | - |
| 0x930ADB | Rollover Schutz links pyrotechnisch: Widerstand zu klein | 0 | - |
| 0x930ADC | Rollover Schutz links pyrotechnisch: Widerstand zu gross | 0 | - |
| 0x930ADD | Rollover Schutz links pyrotechnisch: Leitung verkoppelt | 0 | - |
| 0x930ADF | Rollover Schutz rechts pyrotechnisch: Kurzschluss nach Minus | 0 | - |
| 0x930AE0 | Rollover Schutz rechts pyrotechnisch: Kurzschluss nach Plus | 0 | - |
| 0x930AE1 | Rollover Schutz rechts pyrotechnisch: Widerstand zu klein | 0 | - |
| 0x930AE2 | Rollover Schutz rechts pyrotechnisch: Widerstand zu gross | 0 | - |
| 0x930AE3 | Rollover Schutz rechts pyrotechnisch: Leitung verkoppelt | 0 | - |
| 0x930AF5 | UpFront: Airbagfrontsensor links: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930AF6 | UpFront: Airbagfrontsensor rechts: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930AF7 | Airbagsensor B-Saeule links (x-Richtung): Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930AF8 | Airbagsensor B-Saeule links (y-Richtung): Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930AF9 | Airbagsensor B-Saeule rechts (x-Richtung): Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930AFA | Airbagsensor B-Saeule rechts (y-Richtung): Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930AFB | Airbagsensor Tür vorn rechts: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930B02 | PTS Plausibilisierungssensor: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930B05 | Automatenstrammer Fahrer: Kurzschluss nach Minus | 0 | - |
| 0x930B06 | Automatenstrammer Fahrer: Kurzschluss nach Plus | 0 | - |
| 0x930B07 | Automatenstrammer Fahrer: Widerstand zu klein | 0 | - |
| 0x930B08 | Automatenstrammer Fahrer: Widerstand zu groß | 0 | - |
| 0x930B09 | Automatenstrammer Fahrer: Leitung verkoppelt | 0 | - |
| 0x930B0B | Automatenstrammer Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930B0C | Automatenstrammer Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930B0D | Automatenstrammer Beifahrer: Widerstand zu klein | 0 | - |
| 0x930B0E | Automatenstrammer Beifahrer: Widerstand zu groß | 0 | - |
| 0x930B0F | Automatenstrammer Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930B1B | Sitzpositionssensor Beifahrer: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930B1C | Sitzpositionssensor Beifahrer: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x930B1D | Sitzpositionssensor Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930B1E | Sitzpositionssensor Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930B1F | Sitzpositionssensor Beifahrer: Unterbrechung | 0 | - |
| 0x930B20 | Sitzpositionssensor Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930B21 | Airbagsensor C-Saeule links (y-Richtung): Sensortyp falsch | 0 | - |
| 0x930B22 | Airbagsensor C-Saeule links (y-Richtung): Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930B23 | Airbagsensor C-Saeule links (y-Richtung): sendet Fehler | 0 | - |
| 0x930B24 | Airbagsensor C-Saeule links (y-Richtung): Kommunikationsstoerung | 0 | - |
| 0x930B25 | Airbagsensor C-Saeule links (y-Richtung): Kurzschluss nach Minus | 0 | - |
| 0x930B27 | Airbagsensor C-Saeule links (y-Richtung): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930B2A | Airbagsensor C-Saeule links (y-Richtung): Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930B2B | Airbagsensor C-Saeule rechts (y-Richtung): Sensortyp falsch | 0 | - |
| 0x930B2C | Airbagsensor C-Saeule rechts (y-Richtung): Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930B2D | Airbagsensor C-Saeule rechts (y-Richtung): sendet Fehler | 0 | - |
| 0x930B2E | Airbagsensor C-Saeule rechts (y-Richtung): Kommunikationsstoerung | 0 | - |
| 0x930B2F | Airbagsensor C-Saeule rechts (y-Richtung): Kurzschluss nach Minus | 0 | - |
| 0x930B31 | Airbagsensor C-Saeule rechts (y-Richtung): Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930B34 | Airbagsensor C-Saeule rechts (y-Richtung): Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930B50 | Rollover Schutz links magnetisch: Kurzschluss nach Minus | 0 | - |
| 0x930B51 | Rollover Schutz links magnetisch: Kurzschluss nach Plus | 0 | - |
| 0x930B52 | Rollover Schutz links magnetisch: Widerstand zu klein | 0 | - |
| 0x930B53 | Rollover Schutz links magnetisch: Widerstand zu gross | 0 | - |
| 0x930B54 | Rollover Schutz links magnetisch: Leitung verkoppelt | 0 | - |
| 0x930B56 | Rollover Schutz rechts magnetisch: Kurzschluss nach Minus | 0 | - |
| 0x930B57 | Rollover Schutz rechts magnetisch: Kurzschluss nach Plus | 0 | - |
| 0x930B58 | Rollover Schutz rechts magnetisch: Widerstand zu klein | 0 | - |
| 0x930B59 | Rollover Schutz rechts magnetisch: Widerstand zu gross | 0 | - |
| 0x930B5A | Rollover Schutz rechts magnetisch: Leitung verkoppelt | 0 | - |
| 0x930B8A | POS: Schalter fuer Beifahrerairbag-Abschaltung: Kurzschluss | 0 | - |
| 0x930B8B | SBR-Sensor: Sitzbelegungsmatte Beifahrer: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930B8C | SBR-Sensor: Sitzbelegungsmatte Beifahrer: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x930B8D | SBR-Sensor: Sitzbelegungsmatte Beifahrer: Kurzschluss nach Minus | 0 | - |
| 0x930B8E | SBR-Sensor: Sitzbelegungsmatte Beifahrer: Kurzschluss nach Plus | 0 | - |
| 0x930B8F | SBR-Sensor: Sitzbelegungsmatte Beifahrer: Unterbrechung | 0 | - |
| 0x930B9B | High Side Power Switch Sitzmatte: Kurzschluss nach Minus | 0 | - |
| 0x930B9C | High Side Power Switch Sitzmatte: Kurzschluss nach Plus | 0 | - |
| 0x930BA4 | Interner Steuergeraetefehler | 0 | - |
| 0x930BA6 | Airbagsensor B-Saeule links (x-y-Richtung): Leitung verkoppelt | 0 | - |
| 0x930BA7 | Airbagsensor B-Saeule rechts (x-y-Richtung): Leitung verkoppelt | 0 | - |
| 0x930BA8 | Airbagsensor Tür vorn links: Leitung verkoppelt | 0 | - |
| 0x930BA9 | Airbagsensor Tür vorn rechts: Leitung verkoppelt | 0 | - |
| 0x930BAF | UpFront: Airbagfrontsensor links: Leitung verkoppelt | 0 | - |
| 0x930BB1 | UpFront: Airbagfrontsensor rechts: Leitung verkoppelt | 0 | - |
| 0x930BB3 | Airbagsensor C-Saeule links (y-Richtung): Leitung verkoppelt | 0 | - |
| 0x930BB4 | Airbagsensor C-Saeule rechts (y-Richtung): Leitung verkoppelt | 0 | - |
| 0x930BB6 | Datenkonsistenzfehler: Codierdaten (Datenfehler) | 0 | - |
| 0x930BBA | Die Sequenz zum Ausloesen der Rollover-Buegel ist aktiv | 0 | - |
| 0x930BBC | SBR-Sensor: Sitzbelegungsmatte Beifahrer: Leitung verkoppelt | 0 | - |
| 0x930BC7 | Sensor PTS links: Sensortyp falsch | 0 | - |
| 0x930BC8 | Sensor PTS links: Druckwert ueber Grenzwert | 0 | - |
| 0x930BC9 | Sensor PTS links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930BCA | Sensor PTS links: sendet Fehler | 0 | - |
| 0x930BCB | Sensor PTS links: Sensorwerte liegen dauerhaft ueber Offset -Wert | 0 | - |
| 0x930BCC | Sensor PTS links: Kommunikationsstoerung | 0 | - |
| 0x930BCD | Sensor PTS links: Kurzschluss nach Minus | 0 | - |
| 0x930BCE | Sensor PTS links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930BD0 | Sensor PTS rechts: Sensortyp falsch | 0 | - |
| 0x930BD1 | Sensor PTS rechts: Druckwert ueber Grenzwert | 0 | - |
| 0x930BD2 | Sensor PTS rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930BD3 | Sensor PTS rechts: sendet Fehler | 0 | - |
| 0x930BD4 | Sensor PTS rechts: Sensorwerte liegen dauerhaft ueber Offset -Wert | 0 | - |
| 0x930BD5 | Sensor PTS rechts: Kommunikationsstoerung | 0 | - |
| 0x930BD6 | Sensor PTS rechts: Kurzschluss nach Minus | 0 | - |
| 0x930BD7 | Sensor PTS rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930BD9 | Sensor PTS links: Leitung verkoppelt | 0 | - |
| 0x930BDA | Sensor PTS rechts: Leitung verkoppelt | 0 | - |
| 0x930BE0 | ZK HV-Abschaltung 1: Kurzschluss nach Minus | 0 | - |
| 0x930BE1 | ZK HV-Abschaltung 1: Kurzschluss nach Plus | 0 | - |
| 0x930BE2 | ZK HV-Abschaltung 1: Widerstand zu klein | 0 | - |
| 0x930BE3 | ZK HV-Abschaltung 1: Widerstand zu groß | 0 | - |
| 0x930BE4 | ZK HV-Abschaltung 1: Leitung verkoppelt | 0 | - |
| 0x930BE5 | ZK HV-Abschaltung 2: Kurzschluss nach Minus | 0 | - |
| 0x930BE6 | ZK HV-Abschaltung 2: Kurzschluss nach Plus | 0 | - |
| 0x930BE7 | ZK HV-Abschaltung 2: Widerstand zu klein | 0 | - |
| 0x930BE8 | ZK HV-Abschaltung 2: Widerstand zu groß | 0 | - |
| 0x930BE9 | ZK HV-Abschaltung 2: Leitung verkoppelt | 0 | - |
| 0x930C18 | Hochvoltabschaltung: Crash-Botschaft gespeichert | 0 | - |
| 0x930C1D | PMA Funktion Abbruch wegen Kameraausfall | 1 | - |
| 0x930C1E | Interner Steuergerätefehler allgemeiner Sensorclusterfehler OBD relevant | 0 | - |
| 0x930C1F | Mindestens ein oder mehrere unerwartete Zündkreise erkannt | 0 | - |
| 0x930C20 | Interner Steuergerätefehler allgemeiner Sensorclusterfehler | 0 | - |
| 0x930C22 | Codierung: unplausible Ausstattung | 0 | - |
| 0x930C28 | Interner Steuergerätefehler Sensorclusterfehler Kommunikation | 0 | - |
| 0x930C29 | Interner Steuergerätefehler Sensorclusterfehler Spannungsversorgung | 0 | - |
| 0x930C2D | Interner Steuergerätefehler Sensorclusterfehler Temporärer Ausfall Rollratensensor | 0 | - |
| 0x930C30 | Windowbag: Kurzschluss nach Minus | 0 | - |
| 0x930C31 | Windowbag: Kurzschluss nach Plus | 0 | - |
| 0x930C32 | Windowbag: Widerstand zu klein | 0 | - |
| 0x930C33 | Windowbag: Widerstand zu groß | 0 | - |
| 0x930C34 | Windowbag: Leitung verkoppelt | 0 | - |
| 0x930C35 | Windowbag Rückholer 1: Kurzschluss nach Minus | 0 | - |
| 0x930C36 | Windowbag Rückholer 1: Kurzschluss nach Plus | 0 | - |
| 0x930C37 | Windowbag Rückholer 1: Widerstand zu klein | 0 | - |
| 0x930C38 | Windowbag Rückholer 1: Widerstand zu groß | 0 | - |
| 0x930C39 | Windowbag Rückholer 1: Leitung verkoppelt | 0 | - |
| 0x930C3A | Windowbag Ventil 2: Kurzschluss nach Minus | 0 | - |
| 0x930C3B | Windowbag Ventil 2: Kurzschluss nach Plus | 0 | - |
| 0x930C3C | Windowbag Ventil 2: Widerstand zu klein | 0 | - |
| 0x930C3D | Windowbag Ventil 2: Widerstand zu groß | 0 | - |
| 0x930C3E | Windowbag Ventil 2: Leitung verkoppelt | 0 | - |
| 0x930C3F | Windowbag Ventil: Kurzschluss nach Minus | 0 | - |
| 0x930C40 | Windowbag Ventil: Kurzschluss nach Plus | 0 | - |
| 0x930C41 | Windowbag Ventil: Widerstand zu klein | 0 | - |
| 0x930C42 | Windowbag Ventil: Widerstand zu groß | 0 | - |
| 0x930C43 | Windowbag Ventil: Leitung verkoppelt | 0 | - |
| 0x930C48 | Windowbag Rückholer 2: Kurzschluss nach Minus | 0 | - |
| 0x930C49 | Windowbag Rückholer 2: Kurzschluss nach Plus | 0 | - |
| 0x930C4A | Windowbag Rückholer 2: Leitung verkoppelt | 0 | - |
| 0x930C4B | Windowbag Rückholer 2: Widerstand zu groß | 0 | - |
| 0x930C4C | Windowbag Rückholer 2: Widerstand zu klein | 0 | - |
| 0x930C50 | Gurtschlosskontakt dritte Sitzreihe links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930C51 | Gurtschlosskontakt dritte Sitzreihe links: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x930C52 | Gurtschlosskontakt dritte Sitzreihe links: Kurzschluss nach Minus | 0 | - |
| 0x930C53 | Gurtschlosskontakt dritte Sitzreihe links: Kurzschluss nach Plus | 0 | - |
| 0x930C54 | Gurtschlosskontakt dritte Sitzreihe links: Unterbrechung | 0 | - |
| 0x930C55 | Gurtschlosskontakt dritte Sitzreihe links: Leitung verkoppelt | 0 | - |
| 0x930C56 | Gurtschlosskontakt dritte Sitzreihe rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930C57 | Gurtschlosskontakt dritte Sitzreihe rechts: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x930C58 | Gurtschlosskontakt dritte Sitzreihe rechts: Kurzschluss nach Minus | 0 | - |
| 0x930C59 | Gurtschlosskontakt dritte Sitzreihe rechts: Kurzschluss nach Plus | 0 | - |
| 0x930C5A | Gurtschlosskontakt dritte Sitzreihe rechts: Unterbrechung | 0 | - |
| 0x930C5B | Gurtschlosskontakt dritte Sitzreihe rechts: Leitung verkoppelt | 0 | - |
| 0x930C5C | Gurtschlosskontakt dritte Sitzreihe Mitte: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930C5D | Gurtschlosskontakt dritte Sitzreihe Mitte: Wert liegt außerhalb des definierten Bereiches | 0 | - |
| 0x930C5E | Gurtschlosskontakt dritte Sitzreihe Mitte: Kurzschluss nach Minus | 0 | - |
| 0x930C5F | Gurtschlosskontakt dritte Sitzreihe Mitte: Kurzschluss nach Plus | 0 | - |
| 0x930C60 | Gurtschlosskontakt dritte Sitzreihe Mitte: Unterbrechung | 0 | - |
| 0x930C61 | Gurtschlosskontakt dritte Sitzreihe Mitte: Leitung verkoppelt | 0 | - |
| 0x930C63 | Endbeschlagstrammer hinten links: Kurzschluss nach Minus | 0 | - |
| 0x930C64 | Endbeschlagstrammer hinten links: Kurzschluss nach Plus | 0 | - |
| 0x930C65 | Endbeschlagstrammer hinten links: Widerstand zu klein | 0 | - |
| 0x930C66 | Endbeschlagstrammer hinten links: Widerstand zu groß | 0 | - |
| 0x930C67 | Endbeschlagstrammer hinten links: Leitung verkoppelt | 0 | - |
| 0x930C69 | Endbeschlagstrammer hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x930C6A | Endbeschlagstrammer hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x930C6B | Endbeschlagstrammer hinten rechts: Widerstand zu klein | 0 | - |
| 0x930C6C | Endbeschlagstrammer hinten rechts: Widerstand zu groß | 0 | - |
| 0x930C6D | Endbeschlagstrammer hinten rechts: Leitung verkoppelt | 0 | - |
| 0x930C70 | POL: Kontrollleuchte fuer Beifahrerairbag-Aktivierung: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930C71 | POL: Kontrollleuchte fuer Beifahrerairbag-Aktivierung: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x930C72 | POL: Kontrollleuchte fuer Beifahrerairbag-Aktivierung: Kurzschluss nach Plus | 0 | - |
| 0x930C74 | Automatenstrammer hinten links: Kurzschluss nach Minus | 0 | - |
| 0x930C75 | Automatenstrammer hinten links: Kurzschluss nach Plus | 0 | - |
| 0x930C76 | Automatenstrammer hinten links: Widerstand zu klein | 0 | - |
| 0x930C77 | Automatenstrammer hinten links: Widerstand zu groß | 0 | - |
| 0x930C78 | Automatenstrammer hinten links: Leitung verkoppelt | 0 | - |
| 0x930C7A | Automatenstrammer hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x930C7B | Automatenstrammer hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x930C7C | Automatenstrammer hinten rechts: Widerstand zu klein | 0 | - |
| 0x930C7D | Automatenstrammer hinten rechts: Widerstand zu groß | 0 | - |
| 0x930C7E | Automatenstrammer hinten rechts: Leitung verkoppelt | 0 | - |
| 0x930C80 | Seitenairbag hinten links: Kurzschluss nach Minus | 0 | - |
| 0x930C81 | Seitenairbag hinten links: Kurzschluss nach Plus | 0 | - |
| 0x930C82 | Seitenairbag hinten links: Widerstand zu klein | 0 | - |
| 0x930C83 | Seitenairbag hinten links: Widerstand zu groß | 0 | - |
| 0x930C84 | Seitenairbag hinten links: Leitung verkoppelt | 0 | - |
| 0x930C85 | Seitenairbag hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x930C86 | Seitenairbag hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x930C87 | Seitenairbag hinten rechts: Widerstand zu klein | 0 | - |
| 0x930C88 | Seitenairbag hinten rechts: Widerstand zu groß | 0 | - |
| 0x930C89 | Seitenairbag hinten rechts: Leitung verkoppelt | 0 | - |
| 0x930C90 | Curtain hinten links: Kurzschluss nach Minus | 0 | - |
| 0x930C91 | Curtain hinten links: Kurzschluss nach Plus | 0 | - |
| 0x930C92 | Curtain hinten links: Widerstand zu klein | 0 | - |
| 0x930C93 | Curtain hinten links: Widerstand zu groß | 0 | - |
| 0x930C94 | Curtain hinten links: Leitung verkoppelt | 0 | - |
| 0x930C95 | Curtain hinten rechts: Kurzschluss nach Minus | 0 | - |
| 0x930C96 | Curtain hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x930C97 | Curtain hinten rechts: Widerstand zu klein | 0 | - |
| 0x930C98 | Curtain hinten rechts: Widerstand zu groß | 0 | - |
| 0x930C99 | Curtain hinten rechts: Leitung verkoppelt | 0 | - |
| 0x930CA2 | SBR-Sensor: Sitzbelegungsmatte hinten links: Kurzschluss nach Plus | 0 | - |
| 0x930CA3 | SBR-Sensor: Sitzbelegungsmatte hinten links: Unterbrechung | 0 | - |
| 0x930CA4 | SBR-Sensor: Sitzbelegungsmatte hinten links: Leitung verkoppelt | 0 | - |
| 0x930CA7 | SBR-Sensor: Sitzbelegungsmatte hinten mitte: Kurzschluss nach Plus | 0 | - |
| 0x930CA8 | SBR-Sensor: Sitzbelegungsmatte hinten mitte: Unterbrechung | 0 | - |
| 0x930CA9 | SBR-Sensor: Sitzbelegungsmatte hinten mitte: Leitung verkoppelt | 0 | - |
| 0x930CAC | SBR-Sensor: Sitzbelegungsmatte hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x930CAD | SBR-Sensor: Sitzbelegungsmatte hinten rechts: Unterbrechung | 0 | - |
| 0x930CAE | SBR-Sensor: Sitzbelegungsmatte hinten rechts: Leitung verkoppelt | 0 | - |
| 0x930CD0 | SBR-Sensor: Sitzbelegungsmatte hinten links: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930CD1 | SBR-Sensor: Sitzbelegungsmatte hinten mitte: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930CD2 | SBR-Sensor: Sitzbelegungsmatte hinten rechts: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930D50 | UpFront: Airbagfrontsensor Mitte: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x930D51 | UpFront: Airbagfrontsensor Mitte: Sensortyp falsch | 0 | - |
| 0x930D52 | UpFront: Airbagfrontsensor Mitte: Kodierdaten stimmen nicht mit Ausstattung ueberein | 0 | - |
| 0x930D53 | UpFront: Airbagfrontsensor Mitte: sendet Fehler | 0 | - |
| 0x930D54 | UpFront: Airbagfrontsensor Mitte: Kommunikationsstoerung | 0 | - |
| 0x930D55 | UpFront: Airbagfrontsensor Mitte: Kurzschluss nach Minus | 0 | - |
| 0x930D56 | UpFront: Airbagfrontsensor Mitte: Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 | - |
| 0x930D57 | UpFront: Airbagfrontsensor Mitte: Leitung verkoppelt | 0 | - |
| 0xC9441F | FLEXRAY Physikalischer Busfehler | 0 | - |
| 0xC94420 | FLEXRAY controller error | 0 | - |
| 0xC94487 | FLEXRAY StartUpFailed | 0 | - |
| 0xC94BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xC94D00 | SafetyCAN: physikalischer Busfehler | 0 | - |
| 0xC94D01 | REMA links: Kommunikationsstörung | 0 | - |
| 0xC94D02 | REMA rechts: Kommunikationsstörung | 0 | - |
| 0xC94D1F | LIN-Bus Sitzbelegungserkennung Beifahrerseite: Kommunikationsfehler | 0 | - |
| 0xC95400 | Aussentemperatur: Kommunikationsstörung | 1 | - |
| 0xC95401 | Ist Lenkwinkel Fahrer: TimeOut | 1 | - |
| 0xC95402 | Ist Drehzahl Rad: TimeOut | 1 | - |
| 0xC95403 | Wischergeschwindigkeit: TimeOut | 1 | - |
| 0xC95404 | LCD Leuchtdichte: Kommunikationsstörung | 1 | - |
| 0xC95405 | Status Fahrlicht: TimeOut | 1 | - |
| 0xC95406 | Relativzeit BN2020: TimeOut | 1 | - |
| 0xC95407 | Uhrzeit/Datum: TimeOut | 1 | - |
| 0xC95408 | Anzeige Parkassistent 2: TimeOut | 1 | - |
| 0xC95409 | Datenantriebsstrang2: Kommunikationsstörung | 1 | - |
| 0xC9540A | Wegstrecke Fahrzeug: TimeOut | 1 | - |
| 0xC9540B | Parken Längsführung: TimeOut | 1 | - |
| 0xC9540C | Status Qualifier Top-View Rear-View: TimeOut | 1 | - |
| 0xC9540D | Bedienung Taster Parken: TimeOut | 1 | - |
| 0xC9540E | Bedienung Taster Parken Dauer: TimeOut | 1 | - |
| 0xC9540F | Status Funktion ActivePDC: TimeOut | 1 | - |
| 0xC95410 | Lenkwinkel Vorderachse effektiv: Kommunikationsstörung | 1 | - |
| 0xC95411 | Status Funktion PDC: TimeOut | 1 | - |
| 0xC95412 | Status Parkassistent: TimeOut | 1 | - |
| 0xC95413 | Status Induktiv Laden: Kommunikationsstörung | 1 | - |
| 0xC95414 | Status Induktiv Laden: Timeout | 1 | - |
| 0xC95415 | Anfrage Aktivierung Parken 2: TimeOut | 1 | - |
| 0xC95416 | Konfiguration Stellhebel Fahrdynamik Fahrererlebnis: TimeOut | 1 | - |
| 0xC95417 | Status Stabilisierung DSC: TimeOut | 1 | - |
| 0xC95418 | Quer Längs  Beschleunigung Schwerpunkt: TimeOut | 1 | - |
| 0xC9541B | Drehmoment  Kurbelwelle1 Winkel Fahrpedal: Timeout | 1 | - |
| 0xC9541C | PreCrash Frontkamera: TimeOut | 1 | - |
| 0xC9541D | Precrash Frontradar: TimeOut | 1 | - |
| 0xC9541E | PreCrash Warnbremskoordinator: TimeOut | 1 | - |
| 0xC9541F | Giergeschwindigkeit Fahrzeug: TimeOut | 1 | - |
| 0xC95420 | ZV und Klappenzustand: TimeOut | 1 | - |
| 0xC95421 | Blinken: TimeOut | 1 | - |
| 0xC95422 | Aussentemperatur: TimeOut | 1 | - |
| 0xC95423 | Status Parametrisierung IBrake: Kommunikationsstörung | 1 | - |
| 0xC95424 | Status Parametrisierung IBrake IstBremsmoment Summe: TimeOut | 1 | - |
| 0xC95425 | Datenantriebsstrang2: Timeout | 1 | - |
| 0xC95426 | Daten Einspurrmodell Fahrdynamik: Kommunikationsstörung | 1 | - |
| 0xC95427 | Daten Einspurrmodell Fahrdynamik: Timeout | 1 | - |
| 0xC95428 | Drehmoment Kurbelwelle1: Kommunikationsstörung | 1 | - |
| 0xC95429 | FahrzeugDynamikDaten geschätzt: Timeout | 1 | - |
| 0xC9542A | Geschwindigkeit: Timeout | 1 | - |
| 0xC9542B | Klemmen Zustand Fahrzeug: Kommunikationsstörung | 1 | - |
| 0xC9542C | Klemmen Zustand Fahrzeug: Timeout | 1 | - |
| 0xC9542D | Neigung Fahrbahn Lenkwinkel Vorderachse effektiv: Timeout | 1 | - |
| 0xC95430 | Sitzmodul Fahrer, (Sitzlehnenverriegelung), Nachricht Status Sitzlehnenverriegelung: Signal ungueltig | 1 | - |
| 0xC95431 | Sitzmodul Beifahrer, (Sitzlehnenverriegelung), Nachricht Status Sitzlehnenverriegelung: Signal ungueltig | 1 | - |
| 0xC95432 | Sitzmodul Fahrer (Sitzmemory), Nachricht Status Sitzlehnenverriegelung: Normierung notwendig | 1 | - |
| 0xC95433 | Sitzmodul Beifahrer (Sitzmemory), Nachricht Status Sitzlehnenverriegelung: Normierung notwendig | 1 | - |
| 0xC95434 | Sitzmodul Fahrer (Sitzmemory), Nachricht Status Sitzlehnenverriegelung: Normierung empfohlen | 1 | - |
| 0xC95435 | Sitzmodul Beifahrer (Sitzmemory), Nachricht Status Sitzlehnenverriegelung: Normierung empfohlen | 1 | - |
| 0xC95436 | Precrash Heckradar: Kommunikationsstörung | 1 | - |
| 0xC95437 | Precrash Heckradar: Timeout | 1 | - |
| 0xC95438 | Anzeige CTA: Kommunikationsstörung | 1 | - |
| 0xC95439 | Anzeige CTA: Timeout | 1 | - |
| 0xC9543A | Status RCP: Kommunikationsstörung | 1 | - |
| 0xC9543B | Status RCP: Timeout | 1 | - |
| 0xC9543C | Status Anzeige Kombi: Kommunikationsstörung | 1 | - |
| 0xC9543D | Status Anzeige Kombi: Timeout | 1 | - |
| 0xC9543E | Kilometerstand Reichweite: Kommunikationsstörung | 1 | - |
| 0xC9543F | Kilometerstand Reichweite: Timeout | 1 | - |
| 0xC95440 | Diagnose OBD Motor:Kommunikationsstörung | 1 | - |
| 0xC95441 | Diagnose OBD Motor:Timeout | 1 | - |
| 0xC95442 | Sitzmodul Fahrer (Sitzposition, Sitzlehnenverriegelung): Timeout | 1 | - |
| 0xC95443 | Sitzmodul Beifahrer (Sitzposition, Sitzlehnenverriegelung): Timeout | 1 | - |
| 0xC95444 | Steuerung Diagnose OBD Fahrdynamik:Kommunikationsstörung | 1 | - |
| 0xC95445 | Steuerung Diagnose OBD Fahrdynamik:Timeout | 1 | - |
| 0xC95448 | LCD Leuchtdichte: TimeOut | 1 | - |
| 0xC95450 | Status Sitzreihe Fond: Kommunikationsstörung | 1 | - |
| 0xC95451 | Status Sitzreihe Fond: Timeout | 1 | - |
| 0xC95460 | FahrzeugDynamikDaten geschätzt: Kommunikationsstörung | 1 | - |
| 0xC95461 | Geschwindigkeit: Kommunikationsstörung | 1 | - |
| 0xC95462 | Sitzmodul Fahrer (Sitzposition, Sitzlehnenverriegelung): Kommunikationsstoerung | 1 | - |
| 0xC95463 | Sitzmodul Beifahrer (Sitzposition, Sitzlehnenverriegelung): Kommunikationsstoerung | 1 | - |
| 0xC95500 | Querbeschleunigung Schwerpunkt: Kommunikationsstörung | 1 | - |
| 0xC95501 | Längsbeschleunigung Schwerpunkt: Kommunikationsstörung | 1 | - |
| 0xC95502 | Ist Bremsmoment Summe: Kommunikationsstörung | 1 | - |
| 0xC95503 | Winkel Fahrpedal: Kommunikationsstörung | 1 | - |
| 0xC95504 | PreCrash Frontkamera: Kommunikationsstörung | 1 | - |
| 0xC95505 | Precrash Frontradar: Kommunikationsstörung | 1 | - |
| 0xC95506 | PreCrash Warnbremskoordinator: Kommunikationsstörung | 1 | - |
| 0xC95507 | Giergeschwindigkeit Fahrzeug: Kommunikationsstörung | 1 | - |
| 0xC95508 | Konfiguration Stellhebel Fahrdynamik Fahrererlebnis: Kommunikationsstörung | 1 | - |
| 0xC95509 | Status Stabilisierung DSC: Kommunikationsstörung | 1 | - |
| 0xC95510 | ZV und Klappenzustand: Kommunikationsstörung | 1 | - |
| 0xC95511 | Blinken: Kommunikationsstörung | 1 | - |
| 0xC95512 | Ist Lenkwinkel Fahrer: Kommunikationsstörung | 1 | - |
| 0xC95513 | Ist Drehzahl Rad: Kommunikationsstörung | 1 | - |
| 0xC95514 | Wischergeschwindigkeit: Kommunikationsstörung | 1 | - |
| 0xC95515 | Status Fahrlicht: Kommunikationsstörung | 1 | - |
| 0xC95516 | Relativzeit BN2020: Kommunikationsstörung | 1 | - |
| 0xC95517 | Uhrzeit/Datum: Kommunikationsstörung | 1 | - |
| 0xC95518 | Anzeige Parkassistent 2: Kommunikationsstörung | 1 | - |
| 0xC95519 | Wegstrecke Fahrzeug: Kommunikationsstörung | 1 | - |
| 0xC95520 | Parken Längsführung: Kommunikationsstörung | 1 | - |
| 0xC95521 | Bedienung Taster Parken: Kommunikationsstörung | 1 | - |
| 0xC95522 | Bedienung Taster Parken Dauer: Kommunikationsstörung | 1 | - |
| 0xC95523 | Status Funktion ActivePDC: Kommunikationsstörung | 1 | - |
| 0xC95524 | Status Funktion PDC: Kommunikationsstörung | 1 | - |
| 0xC95525 | Status Parkassistent: Kommunikationsstörung | 1 | - |
| 0xC95526 | Status Qualifier Rear-View: Kommunikationsstörung | 1 | - |
| 0xC95527 | Status Qualifier Top-View: Kommunikationsstörung | 1 | - |
| 0xC95529 | Anfrage Aktivierung Parken 2: Kommunikationsstörung | 1 | - |
| 0xC95540 | Soll Fahrvektor: Kommunikationsstörung | 1 | - |
| 0xC95541 | Soll Fahrvektor: Timeout | 1 | - |
| 0xC95600 | Masse Gewicht Fahrzeug: Kommunikationsstörung | 1 | - |
| 0xC95601 | Masse Gewicht Fahrzeug: Timeout | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | SYSTEMZUSTAND_PDC | 0-n | High | 0x0000000F | _SYSTEMZUSTAND_PDC | - | - | - |
| 0x0002 | SYSTEMZUSTAND_KLR | 0-n | High | 0x000000F0 | _SYSTEMZUSTAND_KLR | - | - | - |
| 0x0003 | SYSTEMZUSTAND_KL_R_W | 0-n | High | 0x00000F00 | _SYSTEMZUSTAND_KL_R_W | - | - | - |
| 0x0004 | SYSTEMZUSTAND_KL_15 | 0-n | High | 0x0000F000 | _SYSTEMZUSTAND_KL_15 | - | - | - |
| 0x0005 | SYSTEMZUSTAND_KL_15_W | 0-n | High | 0x000F0000 | _SYSTEMZUSTAND_KL_15_W | - | - | - |
| 0x0006 | SYSTEMZUSTAND_MOT | 0-n | High | 0x00F00000 | _SYSTEMZUSTAND_MOT | - | - | - |
| 0x0007 | SYSTEMZUSTAND_GESCHW | 0-n | High | 0x0F000000 | _SYSTEMZUSTAND_GESCHW | - | - | - |
| 0x4000 | BETRIEBSSTUNDENZAEHLER_BEGINN | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | BETRIEBSSTUNDENZAEHLER_ENDE | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | AUSSENTEMPERATUR | °C | High | unsigned int | - | 0.5 | 1.0 | -40.0 |
| 0x4003 | SG_INNENTEMPERATUR | °C | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4004 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4005 | ZEIT_NACH_PWRON | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | POWER_ON_ZAEHLER | count | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4007 | SG_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | Fehlercode REMA links | HEX | High | signed long | - | - | - | - |
| 0x4009 | Fehlercode REMA rechts | HEX | High | signed long | - | - | - | - |
| 0x400B | DATUM_UHRZEIT | HEX | High | unsigned long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GUELTIG

| WERT | TEXT |
| --- | --- |
| 0 | Daten nicht gültig |
| 1 | Daten gültig |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IMU_QUAL

| WERT | TEXT |
| --- | --- |
| 2 | signal valid |
| 4 | signal substituted |
| 6 | signal invalid |
| 7 | sensor missing |
| 8 | Init |
| 15 | Invalid |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x010000 | COMBO2x_RSC - Info - Combo RateRangeFailure | 0 | - |
| 0x010001 | COMBO2x_RSC - Info - Combo AccRangeFailure | 0 | - |
| 0x010002 | COMBO2x_RSC - Info - Sensor CSDP_SELFTEST_FAILED (Initialization failed) | 0 | - |
| 0x010003 | COMBO2z_ISC - Info -Signal RateRangeFailure | 0 | - |
| 0x010004 | COMBO2z_ISC - Info - Signal AccXRangeFailure | 0 | - |
| 0x010005 | COMBO2z_ISC - Info -Signal AccYRangeFailure | 0 | - |
| 0x010006 | COMBO2y_PSC - Info - Sensor CSDP_SELFTEST_FAILED (Initialization failed) | 0 | - |
| 0x010007 | COMBO2z_RISC - Info -Signal Temperature Failure | 0 | - |
| 0x010008 | COMBO2z_RISC - Info -Sensor Component Failure (driver uninit, Combo error, uninted. Reset) | 0 | - |
| 0x010009 | COMBO2y_PSC - Info - Sensor Component Failure (driver uninit, Combo error, uninted. Reset) | 0 | - |
| 0x01000A | COMBO2x_RSC - Info - Sensor Component Error (driver uninit, Combo error, uninted. Reset) | 0 | - |
| 0x01000D | COMBO2z_RISC - Info - Sensor CSDP_SELFTEST_FAILED(Initialization failed) | 0 | - |
| 0x01000F | LIN - Info - LINIF_E_RESPONSE | 0 | - |
| 0x010010 | LIN - Info - LINIF_E_NC_NO_RESPONSE | 0 | - |
| 0x010011 | LIN - Info - LIN_E_TIMEOUT | 0 | - |
| 0x010012 | Diagnosemaster - Info - Fehlerspeicher gesperrt | 0 | - |
| 0x010013 | PIA_E_IO_ERROR | 0 | - |
| 0x010014 | Parkmaster - Info - SW-Komponente fehlerhaft beendet | 0 | - |
| 0x010015 | Precrash - Info - SW-Komponente fehlerhaft beendet | 0 | - |
| 0x010016 | Seat Belt Reminder - Info - SW-Komponente fehlerhaft beendet | 0 | - |
| 0x010017 | Driver Awareness Condition - Info - SW-Komponente fehlerhaft beendet | 0 | - |
| 0x010018 | BAC - Info - SW-Komponente fehlerhaft beendet | 0 | - |
| 0x010019 | FGS/HV gSat - Info - Safing Sensor Arming fehlt | 0 | - |
| 0x01001A | FGS/HV - Info - Safing Pfad gesperrt | 0 | - |
| 0x01001B | FGS/HV - Info - Near Deploy Outside Velocity Window | 0 | - |
| 0x01001C | PTS-Algo - Info - Fahrzeuggeschwindigkeit Timeout bei Alert | 0 | - |
| 0x01001D | FGS/HV - Info - Temperatur-Information nicht verfügbar | 0 | - |
| 0x01001E | COMBO2z_ISC - Info - Combo RateRangeFailure | 0 | - |
| 0x01001F | COMBO2z_ISC - Info - Combo AccRangeFailure | 0 | - |
| 0x010020 | Geschwindigkeit - Signal fehlerhaft | 1 | - |
| 0x010021 | COMBO2z_ISC - Info - Sensor Voltage failure | 0 | - |
| 0x010022 | COMBO2y_PSC - Info - Signal RateRangeFailure | 0 | - |
| 0x010023 | COMBO2z_RISC - Info - Signal RateRangeFailure | 0 | - |
| 0x010024 | COMBO2z_RISC - Info -Signal AccYRangeFailure | 0 | - |
| 0x010025 | COMBO2y_PSC - Info - Signal Temperature Failure | 0 | - |
| 0x010026 | COMBO2x_RSC - Info - Signal RateRange Failure | 0 | - |
| 0x010027 | COMBO2x_RSC - Info - Signal AccZRangeFailure | 0 | - |
| 0x010028 | COMBO2x_RSC - Info - Signal Temperature Failure | 0 | - |
| 0x010029 | Crashalgorithmus- Info - AlertSchwelle | 0 | - |
| 0x01002A | PTS-Algorithmus (Druckschlauchsystem) - Info - AlertSchwelle | 0 | - |
| 0x01002B | Front/Heck-Algo - Info - Fahrzeuggeschwindigkeit Timeout bei Alert | 0 | - |
| 0x01002C | COMBO2z_ISC - Info - Sensor Component Failure (driver uninit, Combo error, unintend. Reset) | 0 | - |
| 0x01002D | COMBO2z_ISC - Info - Sensor CSDP_SELFTEST_FAILED (Initialization failed) | 0 | - |
| 0x01002E | COMBO2z_ISC - Info -Signal TemperatureFailure | 0 | - |
| 0x01002F | COMBO2z_RISC - Info - Combo AccRangeFailure | 0 | - |
| 0x010030 | COMBO2z_RISC - Info - Combo RateRangeFailure | 0 | - |
| 0x010031 | COMBO2y_PSC - Info - COMBO RateRangeFailure | 0 | - |
| 0x010032 | Parkmaster - Info - SW-Komponente fehlerhaft beendet | 0 | - |
| 0x010033 | Trigger Rollover E-Call | 0 | - |
| 0x010034 | Near Deploy Rollover E-Call | 0 | - |
| 0x010036 | EKP Deaktivation Signal | 0 | - |
| 0x010037 | Software - Info - DMA Activity Check failed - Core0 | 0 | - |
| 0x010038 | Software - Info - DMA Activity Check failed - Core1 | 0 | - |
| 0x011002 | Flexray - Info - TranceiverError | 0 | - |
| 0x011004 | Microcontroller - Software - ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x011009 | EEPROM - NVM - NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x01100A | EEPROM - NVM - NVM_E_WRITE_PROTECTED | 0 | - |
| 0x01100B | EEPROM - NVM - NVM_E_REQ_FAILED | 0 | - |
| 0x01100C | EEPROM - NVM - NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x01100D | EEPROM - NVM - NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x01100E | EEPROM - NVM - NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x01100F | EEPROM - NVM - NVM_E_VERIFY_FAILED | 0 | - |
| 0x011011 | Microcontroller - Software - MCU_E_CLOCK_FAILURE | 0 | - |
| 0x011012 | Microcontroller - Software - MCU_E_TIMEOUT_TRANSITION | 0 | - |
| 0x011013 | Microcontroller - Software - MCU_E_QUARTZ_FAILURE | 0 | - |
| 0x011014 | Microcontroller - Software - MCU_E_LOCK_FAILURE | 0 | - |
| 0x011019 | Microcontroller - Software - Exception | 0 | - |
| 0x01101B | Microcontroller - Software - Reset | 0 | - |
| 0x01101C | Microcontroller - ROM - ECC Failure | 0 | - |
| 0x01101D | Microcontroller - RAM - ECC Failure | 0 | - |
| 0x01101E | Microcontroller - ROM - CRC Failure | 0 | - |
| 0x01101F | Microcontroller - RAM - CRC Failure | 0 | - |
| 0x011022 | ATIC155 - Power Supply - Internal Voltage Fault | 0 | - |
| 0x011023 | ATIC155 - Firing Loops - Reference Squib Fault | 0 | - |
| 0x011024 | ATIC155 - Power Supply - VZ Voltage too low | 0 | - |
| 0x011025 | ATIC129_1 -Power Supply -Internal Voltage Fault | 0 | - |
| 0x011026 | ATIC129_1 - Firing Loops - Reference Squib Fault | 0 | - |
| 0x011027 | ATIC129_1 -Power Supply -VZ Voltage too low | 0 | - |
| 0x011028 | ATIC129_2 -Power Supply - Internal Voltage Fault | 0 | - |
| 0x011029 | ATIC129_2 - Firing Loops -Reference Squib Fault | 0 | - |
| 0x01102A | ATIC129_2 -Power Supply -VZ Voltage too low | 0 | - |
| 0x01102B | ATIC129_3 - Power Supply - Internal Voltage Fault | 0 | - |
| 0x01102C | ATIC129_3 -Firing Loops -Reference Squib Fault | 0 | - |
| 0x01102D | ATIC129_3 - Power Supply - VZ Voltage too low | 0 | - |
| 0x01102E | Microcontroller - VCORE | 0 | - |
| 0x01102F | Energy Reserve - Capacitor - Capacity Measurement Fault | 0 | - |
| 0x011030 | Energy Reserve - Autarky - Autonomous Operation Time Fault | 0 | - |
| 0x011031 | EEPROM - NvM - CRC Failure | 0 | - |
| 0x011032 | EEPROM - NvM - CFG Limits CRC Failure | 0 | - |
| 0x011036 | IASG - ST- SWI_REF_FAULT_SYC | 0 | - |
| 0x011037 | IASG - ST - HAL_IASG_MUX_FAULT | 0 | - |
| 0x011039 | COMBO2x_RSC - Rollrate - SAFING ERROR | 0 | - |
| 0x01103B | COMBO2x_RSC - Sensor - Configuration Fault (wrong: ID, sensor, operationmode) | 0 | - |
| 0x01103C | COMBO2x_RSC - Sensor - SPI fault (CRC & OPCODE Error) | 0 | - |
| 0x01103D | COMBO2x_RSC - Sensor - Component fault | 0 | - |
| 0x01103E | COMBO2x (Roll) - Signal - Integrity Fault, Roll Rate | 0 | - |
| 0x01103F | COMBO2x (Roll) - Signal - Integrity Fault, low-g-z (Vehicle Z) | 0 | - |
| 0x011040 | COMBO2x (Roll) - Signal - Integrity Fault, low-g-y (Vehicle Y) | 0 | - |
| 0x011041 | COMBO2z_ISC - Signal - Integrity Fault, low-g-x(Vehicle Y; Custom1) | 0 | - |
| 0x011042 | Microcontroller - Software - PERM_ABORT_DL | 0 | - |
| 0x011043 | ASG42 - Sensor - Config error | 0 | - |
| 0x011044 | ASG42 - Signal -Integrity fault,Channel X | 0 | - |
| 0x011045 | ASG42 - Signal -Integrity fault,Channel Y | 0 | - |
| 0x011046 | ASG42 - Sensor - Configuration mismatch | 0 | - |
| 0x011047 | ASG42 - Sensor - INIT fault | 0 | - |
| 0x011048 | ASG42 - Sensor - COMM fault | 0 | - |
| 0x01104A | ASG42 - Sensor -CHANNEL0 test fault | 0 | - |
| 0x01104B | ASG42 - Sensor - CHANNEL1 test fault | 0 | - |
| 0x01104C | ASG42 - Sensor -Safing path | 0 | - |
| 0x01104F | ATIC155 - Firing Loops - Squib Configuration Fault | 0 | - |
| 0x011050 | ATIC129_1 - Firing Loops - Squib Configuration Fault | 0 | - |
| 0x011051 | ATIC129_2 - Firing Loops -Squib Configuration Fault | 0 | - |
| 0x011052 | ATIC129_3 - Firing Loops - Squib Configuration Fault | 0 | - |
| 0x011053 | ATIC155 - Safing - VSGC Fault | 0 | - |
| 0x011054 | ATIC155 - Safing - VZ3 Sink Fault | 0 | - |
| 0x011055 | ST - Safing - Safing Transistor Fault | 0 | - |
| 0x011056 | ST - Safing - ARMQ_SAT_FAULT | 0 | - |
| 0x011057 | ATIC155 - Safing - HSENx Fault | 0 | - |
| 0x011058 | Microcontroller - Safing - LSENQ Fault | 0 | - |
| 0x011059 | Microcontroller - Safing - ARMX_Fault | 0 | - |
| 0x01105A | ATIC155 - Safing - TESTMQ Fault | 0 | - |
| 0x01105B | Microcontroller - Ports - Crosscoupling Ports | 0 | - |
| 0x01105C | NvM - NvM - NvM Failure | 0 | - |
| 0x012000 | COMBO2z_ISC - Sensor - Component fault | 0 | - |
| 0x012001 | COMBO2z_ISC - Sensor -Configuration Fault(wrong: ID, sensor, operationmode) | 0 | - |
| 0x012002 | COMBO2z_ISC - Sensor -SPI fault (CRC & OPCODE Error) | 0 | - |
| 0x012007 | COMBO2z_ISC - Sensor - Voltage fault | 0 | - |
| 0x012009 | COMBO2y_PSC - Sensor - Configuration Fault (wrong: ID, sensor, operationmode) | 0 | - |
| 0x01200A | COMBO2y_PSC - Sensor - SPI fault (CRC & OPCODE Error) | 0 | - |
| 0x01200B | COMBO2y_PSC - Sensor - Component fault | 0 | - |
| 0x01200E | COMBO2z_RISC - Sensor -Component fault | 0 | - |
| 0x01200F | COMBO2z_RISC - Sensor -Configuration Fault (wrong: ID, sensor, operationmode) | 0 | - |
| 0x012010 | COMBO2z_RISC - Sensor -SPI fault (CRC & OPCODE Error) | 0 | - |
| 0x031C00 | Schadensalgo-Info : Ereignis erkannt | 0 | - |
| 0x481703 | REMA Sitzreihe 1 links : Hardware in Degradation | 0 | - |
| 0x481704 | REMA Sitzreihe 1 links : Software in Degradation | 0 | - |
| 0x481705 | REMA Sitzreihe 1 links : Funktion in Degradation | 0 | - |
| 0x481706 | REMA Sitzreihe 1 links : Ueberspannung | 0 | - |
| 0x481707 | REMA Sitzreihe 1 links : Unterspannung | 0 | - |
| 0x481708 | REMA Sitzreihe 1 links : Uebertemperatur | 0 | - |
| 0x481903 | REMA Sitzreihe 1 rechts : Hardware in Degradation | 0 | - |
| 0x481904 | REMA Sitzreihe 1 rechts : Software in Degradation | 0 | - |
| 0x481905 | REMA Sitzreihe 1 rechts : Funktion in Degradation | 0 | - |
| 0x481906 | REMA Sitzreihe 1 rechts : Ueberspannung | 0 | - |
| 0x481907 | REMA Sitzreihe 1 rechts : Unterspannung | 0 | - |
| 0x481908 | REMA Sitzreihe 1 rechts : Uebertemperatur | 0 | - |
| 0x803180 | CTA nicht aktivierbar | 0 | - |
| 0x803181 | CTA aktiv ohne Aktivierung | 0 | - |
| 0x803182 | RCP nicht aktivierbar | 0 | - |
| 0x803280 | PDC nicht aktivierbar | 0 | - |
| 0x803281 | TVC nicht aktivierbar | 0 | - |
| 0x803282 | RVC nicht aktivierbar | 0 | - |
| 0x803283 | PMA nicht aktivierbar | 0 | - |
| 0x803284 | Parktaster meldet Fehler | 0 | - |
| 0x803285 | aPDC nicht aktivierbar | 0 | - |
| 0x803294 | PDC aktiv ohne Aktivierung | 0 | - |
| 0x803295 | TVC aktiv ohne Aktivierung | 0 | - |
| 0x803296 | RVC aktiv ohne Aktivierung | 0 | - |
| 0x803297 | PMA aktiv ohne Aktivierung | 0 | - |
| 0x803298 | HMI Keine gültige Parktafelinformation erhalten | 0 | - |
| 0x803299 | aPDC aktiv ohne Aktivierung | 0 | - |
| 0xC94D03 | REMA Sitzreihe 1 links Kommunikationsstoerung Alive | 0 | - |
| 0xC94D04 | REMA Sitzreihe 1 links Kommunikationsstoerung Timeout /  RTE Error | 0 | - |
| 0xC94D05 | REMA Sitzreihe 1 rechts Kommunikationsstoerung Alive | 0 | - |
| 0xC94D06 | REMA Sitzreihe 1 rechts Kommunikationsstoerung Timeout /  RTE Error | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | SYSTEMZUSTAND_PDC | 0-n | High | 0x0000000F | _SYSTEMZUSTAND_PDC | - | - | - |
| 0x0002 | SYSTEMZUSTAND_KLR | 0-n | High | 0x000000F0 | _SYSTEMZUSTAND_KLR | - | - | - |
| 0x0003 | SYSTEMZUSTAND_KL_R_W | 0-n | High | 0x00000F00 | _SYSTEMZUSTAND_KL_R_W | - | - | - |
| 0x0004 | SYSTEMZUSTAND_KL_15 | 0-n | High | 0x0000F000 | _SYSTEMZUSTAND_KL_15 | - | - | - |
| 0x0005 | SYSTEMZUSTAND_KL_15_W | 0-n | High | 0x000F0000 | _SYSTEMZUSTAND_KL_15_W | - | - | - |
| 0x0006 | SYSTEMZUSTAND_MOT | 0-n | High | 0x00F00000 | _SYSTEMZUSTAND_MOT | - | - | - |
| 0x0007 | SYSTEMZUSTAND_GESCHW | 0-n | High | 0x0F000000 | _SYSTEMZUSTAND_GESCHW | - | - | - |
| 0x4000 | BETRIEBSSTUNDENZAEHLER_BEGINN | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | BETRIEBSSTUNDENZAEHLER_ENDE | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | AUSSENTEMPERATUR | °C | High | unsigned int | - | 0.5 | 1.0 | -40.0 |
| 0x4003 | SG_INNENTEMPERATUR | °C | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x4004 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4005 | ZEIT_NACH_PWRON | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | POWER_ON_ZAEHLER | count | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4007 | SG_SPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | Fehlercode REMA links | HEX | High | signed long | - | - | - | - |
| 0x4009 | Fehlercode REMA rechts | HEX | High | signed long | - | - | - | - |
| 0x400B | DATUM_UHRZEIT | HEX | High | unsigned long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 01 | ERROR |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |
| 79 | developmentSession |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### RES_0X1011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDR_VERSION_PUBLIC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EDID List Version public |
| STAT_EDR_VERSION_OEM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EDID List Version OEM |
| STAT_EDR_CONFIG_LIST_USED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Used EDID Config List |
| STAT_EDR_CONFIG_LIST_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | EDID Config List Version |
| STAT_ECU_IDENTIFICATION | 0-n | high | unsigned char | - | TAB_OEM_IDENTIFICATION | - | - | - | ECUIdentification |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_1_WERT | HEX | high | unsigned long | - | - | - | - | - | DTC-Code des erste gesetzten DTCs |
| STAT_ADRESSE_A_1_WERT | HEX | high | unsigned long | - | - | - | - | - | gibt die gesetzte Adresse  A des ersten Eintrages wieder |
| STAT_ADRESSE_B_1_WERT | HEX | high | unsigned long | - | - | - | - | - | gibt die gesetzte Adresse B des ersten Eintrages wieder |
| STAT_DTC_2_WERT | HEX | high | unsigned long | - | - | - | - | - | DTC-Code des zweiten gesetzten DTCs |
| STAT_ADRESSE_A_2_WERT | HEX | high | unsigned long | - | - | - | - | - | gibt die gesetzte Adresse  A des zweiten Eintrages wieder |
| STAT_ADRESSE_B_2_WERT | HEX | high | unsigned long | - | - | - | - | - | gibt die gesetzte Adresse B des zweiten Eintrages wieder |
| STAT_DTC_3_WERT | HEX | high | unsigned long | - | - | - | - | - | DTC-Code des dritten gesetzten DTCs |
| STAT_ADRESSE_A_3_WERT | HEX | high | unsigned long | - | - | - | - | - | gibt die gesetzte Adresse  A des dritten Eintrages wieder |
| STAT_ADRESSE_B_3_WERT | HEX | high | unsigned long | - | - | - | - | - | gibt die gesetzte Adresse B des dritten Eintrages wieder |

### RES_0X4029_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunden in h >250  Ungültigkeitsbez |
| STAT_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute in min >250 Ungültigkeitsbezeichner |
| STAT_SEKUNDE_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sekunden in s >250 Ungültigkeitsbez |
| STAT_DATUM_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag im Monat |
| - | Bit | high | BITFIELD | - | BF_DATUM_WOCHENTAG_MONAT_STRUCT | - | - | - | Wochentag, Monat |
| STAT_DATUM_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | JAHR |
| - | Bit | high | BITFIELD | - | BF_ANZEIGE_UHR_GUELTIG_STRUCT | - | - | - | Status der Anzeige Uhrzeit/Datum |

### RES_0X402A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunden in h  >250  Ungültigkeitsbez |
| STAT_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute in min  >250 Ungültigkeitsbezeichner |
| STAT_SEKUNDE_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sekunden in s  >250 Ungültigkeitsbez |
| STAT_DATUM_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag im Monat |
| - | Bit | high | BITFIELD | - | BF_DATUM_WOCHENTAG_MONAT_STRUCT | - | - | - | Wochentag |
| STAT_DATUM_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | JAHR |
| - | Bit | high | BITFIELD | - | BF_ANZEIGE_UHR_GUELTIG_STRUCT | - | - | - | Status der Anzeige Uhrzeit/Datum |

### RES_0X402B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunden in h >250  Ungültigkeitsbez |
| STAT_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute in min >250 Ungültigkeitsbezeichner |
| STAT_SEKUNDE_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sekunden in s >250 Ungültigkeitsbez |
| STAT_DATUM_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag im Monat |
| - | Bit | high | BITFIELD | - | BF_DATUM_WOCHENTAG_MONAT_STRUCT | - | - | - | Wochentag |
| STAT_DATUM_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | JAHR |
| - | Bit | high | BITFIELD | - | BF_ANZEIGE_UHR_GUELTIG_STRUCT | - | - | - | Status der Anzeige Uhrzeit/Datum |

### RES_0X4032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_1_SICHERHEITSLAST_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehler fuer den Trigger der Sicherheitslast 1 |
| STAT_ZAEHLER_2_SICHERHEITSLAST_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehler fuer den Trigger der Sicherheitslast 2 |
| STAT_ZAEHLER_3_SICHERHEITSLAST_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehler fuer den Trigger der Sicherheitslast 3 |

### RES_0X4034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_FZ_UF_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor links |
| STAT_SENSOR_FZ_UF_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor rechts |
| STAT_SENSOR_FZ_BS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer B-Saeulensensor links |
| STAT_SENSOR_FZ_BS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer B-Saeulensensor rechts |
| STAT_SENSOR_FZ_TD_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Tuer-Druck-Sensor links |
| STAT_SENSOR_FZ_TD_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Tuer-Druck-Sensor rechts |
| STAT_SENSOR_FZ_FGS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-Sensor links |
| STAT_SENSOR_FZ_FGS_M_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-Sensor mitte |
| STAT_SENSOR_FZ_FGS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-Sensor rechts |
| STAT_SENSOR_FZ_CS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer C-Säulen Sensor links |
| STAT_SENSOR_FZ_CS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer C-Säulen Sensor rechts |

### RES_0X4035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_FZ_UF_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor links |
| STAT_SENSOR_FZ_UF_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor rechts |
| STAT_SENSOR_FZ_BS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer B-Saeulensensor links |
| STAT_SENSOR_FZ_BS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer B-Saeulensensor rechts |
| STAT_SENSOR_FZ_TD_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Tuer-Druck-Sensor links |
| STAT_SENSOR_FZ_TD_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Tuer-Druck-Sensor rechts |
| STAT_SENSOR_FZ_FGS_PTS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-PTS-Sensor links |
| STAT_SENSOR_FZ_FGS_ZUS_M_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-Sensor/Up-Frontsensor mitte |
| STAT_SENSOR_FZ_FGS_PTS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-PTS-Sensor rechts |
| STAT_SENSOR_FZ_CS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer C-Säulen Sensor links |
| STAT_SENSOR_FZ_CS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer C-Säulen Sensor rechts |
| STAT_SENSOR_FZ_FGS_ZUS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS Zusatzsensor Beschleunigung links |
| STAT_SENSOR_FZ_FGS_ZUS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS Zusatzsensor Beschleunigung rechts |

### RES_0X4036_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_OPERATION_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | Nachfolgende Werte sind für den ECU Operation State zu berücksichtigen: * Energiesparmode       $01 * PDC                            $02 * Normal                        $03 * Lieferanten Spez.       $04 |
| STAT_ENERGY_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | Nachfolgende Werte sind für den Energy State zu berücksichtigen: * Autarkie                      $01 * Unterspannung           $02 * Normalspannung         $03 * Überspannung            $04 |

### RES_0X4037_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_FZ_UF_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor links |
| STAT_SENSOR_FZ_UF_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor rechts |
| STAT_SENSOR_FZ_BS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer B-Saeulensensor links |
| STAT_SENSOR_FZ_BS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer B-Saeulensensor rechts |
| STAT_SENSOR_FZ_TD_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Tuer-Druck-Sensor links |
| STAT_SENSOR_FZ_TD_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Tuer-Druck-Sensor rechts |
| STAT_SENSOR_FZ_FGS_PTS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-PTS-Sensor links |
| STAT_SENSOR_FZ_FGS_M_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-Sensor mitte |
| STAT_SENSOR_FZ_FGS_PTS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS-PTS-Sensor rechts |
| STAT_SENSOR_FZ_CS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer C-Säulen Sensor links |
| STAT_SENSOR_FZ_CS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer C-Säulen Sensor rechts |
| STAT_SENSOR_FZ_FGS_ZUS_L_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS Zusatzsensor Beschleunigung links |
| STAT_SENSOR_FZ_FGS_ZUS_R_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer FGS Zusatzsensor Beschleunigung rechts |
| STAT_SENSOR_FZ_UF_M_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerzahler fuer Up-Frontsensor mitte |

### RES_0X4044_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_VERSION_0_WERT | HEX | high | unsigned long | - | - | - | - | - | 4 Byte  Byte1  ID des SW-Moduls Byte2 Hauptversion des SW-Moduls Byte3 Unterversion des SW-Moduls Byte4 Patchversion des SW-Moduls |
| STAT_ID_VERSION_1_WERT | HEX | high | unsigned long | - | - | - | - | - | 4 Byte  Byte1  ID des SW-Moduls Byte2 Hauptversion des SW-Moduls Byte3 Unterversion des SW-Moduls Byte4 Patchversion des SW-Moduls |
| STAT_ID_VERSION_2_WERT | HEX | high | unsigned long | - | - | - | - | - | 4 Byte  Byte1  ID des SW-Moduls Byte2 Hauptversion des SW-Moduls Byte3 Unterversion des SW-Moduls Byte4 Patchversion des SW-Moduls |
| STAT_ID_VERSION_3_WERT | HEX | high | unsigned long | - | - | - | - | - | 4 Byte  Byte1  ID des SW-Moduls Byte2 Hauptversion des SW-Moduls Byte3 Unterversion des SW-Moduls Byte4 Patchversion des SW-Moduls |
| STAT_ID_VERSION_4_WERT | HEX | high | unsigned long | - | - | - | - | - | 4 Byte  Byte1  ID des SW-Moduls Byte2 Hauptversion des SW-Moduls Byte3 Unterversion des SW-Moduls Byte4 Patchversion des SW-Moduls |
| STAT_ID_VERSION_5_WERT | HEX | high | unsigned long | - | - | - | - | - | 4 Byte  Byte1  ID des SW-Moduls Byte2 Hauptversion des SW-Moduls Byte3 Unterversion des SW-Moduls Byte4 Patchversion des SW-Moduls |

### RES_0X4047_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IW_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | aktueller Zustand der Funktion Initialwarnung |
| STAT_SBR_STATE_PAS_WERT | HEX | high | unsigned char | - | - | - | - | - | aktueller Zustand SBR Beifahrer |
| STAT_SBR_STATE_DRIV_WERT | HEX | high | unsigned char | - | - | - | - | - | aktueller Zustand SBR Fahrer |
| STAT_MON_COUNTER_PAS_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monitoring Zähler SBR Beifahrer |
| STAT_MON_COUNTER_DRIV_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monitoring Zähler SBR Fahrer |
| STAT_ST_BELT_PAS | 0-n | high | unsigned char | - | _GURTZUSTAND | - | - | - | Gurtschlosszustand Beifahrer |
| STAT_ERR_ST_BELT_PAS_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Gurtkontakt BF |
| STAT_ST_BELT_DRIV | 0-n | high | unsigned char | - | _GURTZUSTAND | - | - | - | Gurtschlosszustand Fahrer |
| STAT_ERR_ST_BELT_DRIV_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Gurtkontakt FA |
| STAT_SEAT_OCC_PAS | 0-n | high | unsigned char | - | _SITZBELEGUNG_2 | - | - | - | Status Sitzbelegung Beifahrer (SBR-Info) |
| STAT_ERR_ST_SEAT_OCC_PAS_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Sitzbelegung BF |
| - | Bit | high | BITFIELD | - | BF_SITZBELEGUNG_BF_GEFILTERT | - | - | - | Status Sitzbelegung Befahrer entprellt |
| STAT_SBR_ACT_COND_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktivierungszustand SBR (Klemmen oder PWF) |
| STAT_SBR_DIST_WERT | m | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | aktuelle SBR-Wegstrecke |
| - | Bit | high | BITFIELD | - | BF_ST_DISP_STRUCT | - | - | - | Status der Anzeige |
| STAT_DVCO_VEH_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzustand Fahrzeug (u.a. Richtungsinformation) |
| STAT_ERR_DVCO_VEH_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Fahrzustand Fahrzeug |
| STAT_V_VEH_COG_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Fahrzeuggeschwindigkeit |
| STAT_ERR_V_VEH_COG_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Fahrzeuggeschwindigkeit |
| STAT_ST_DRV_VEH_WERT | HEX | high | unsigned char | - | - | - | - | - | Status Antrieb Fahrzeug |
| STAT_ERR_ST_DRV_VEH_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Zustand Antrieb Fahrzeug |
| STAT_ST_GRSEL_DRV_WERT | HEX | high | unsigned char | - | - | - | - | - | Status Gangwahl Anrtrieb Wert Definiert in Nachrichtenkatalog |
| STAT_ERR_ST_GRSEL_DRV_WERT | HEX | high | unsigned char | - | - | - | - | - | Errorstatus Zustand Gangwahl Antrieb |

### RES_0X4048_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IW_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Initialwarnung |
| STAT_PREDRIVE_DISP_RBS_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand PreDrive-Anzeige Fondgurtstatus |
| STAT_SBR_STATE_DRIV_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Fahrer |
| STAT_SBR_STATE_PAS_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Beifahrer |
| STAT_SBR_STATE_TR2L_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Sitzreihe 2 Links |
| STAT_SBR_STATE_TR2M_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Sitzreihe 2 Mitte |
| STAT_SBR_STATE_TR2R_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Sitzreihe 2 Rechts |
| STAT_SBR_STATE_TR3L_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Sitzreihe 3 Links |
| STAT_SBR_STATE_TR3R_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand SBR Sitzreihe 3 Rechts |
| STAT_SEAT_OCCU_STATE_DRIV_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Fahrer |
| STAT_SEAT_OCCU_STATE_PAS_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Beifahrer |
| STAT_SEAT_OCCU_STATE_TR2L_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Sitzreihe 2 Links |
| STAT_SEAT_OCCU_STATE_TR2M_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Sitzreihe 2 Mitte |
| STAT_SEAT_OCCU_STATE_TR2R_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Sitzreihe 2 Rechts |
| STAT_SEAT_OCCU_STATE_TR3L_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Sitzreihe 3 Links |
| STAT_SEAT_OCCU_STATE_TR3R_WERT | HEX | high | unsigned char | - | - | - | - | - | Aktueller Zustand Sitzbelegung Sitzreihe 3 Rechts |
| STAT_SBR_DIST_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle SBR Wegstrecke |
| - | Bit | high | BITFIELD | - | BF_ST_DISP_STRUCT_3 | - | - | - | Status der Anzeige |

### RES_0X4050_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_ZK_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt die Anzahl der ZK zurück, die ausgegeben werden |
| STAT_WID_ZK_0_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 0 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_1_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 1 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_2_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 2  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_3_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 3  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_4_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 4 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_5_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 5  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_6_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 6  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_7_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 7  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_8_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 8 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_9_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 9 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_10_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 10  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_11_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 11  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_12_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 12 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_13_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 13  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_14_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 14  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_15_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 15  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_16_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 16 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_17_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 17  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_18_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 18  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_19_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 19 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_20_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 20  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_21_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 21  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_22_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 22  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_23_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 23 zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_24_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 24  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_25_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 25  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_26_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 26  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_27_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 27  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_28_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 28  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_29_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 29  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_30_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 30  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_31_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 31  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_32_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 32  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_33_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 33  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_34_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 34  zurück  in Ohm 0xFF = ZK nicht vorhanden |
| STAT_WID_ZK_35_WERT | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | gibt Wert von ZK 35 zurück  in Ohm 0xFF = ZK nicht vorhanden |

### RES_0X4053_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GKFA_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt Fahrer in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKBF_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt Beifahrer  in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKHL2_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt hinten links 2. Sitzreihe  in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKHM2_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt hinten mitte 2. Sitzreihe  in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKHR2_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt hinten rechts 2. Sitzreihe  in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKHL3_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt hinten links 3. Sitzreihe   in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKHM3_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt hinten mitte 3. Sitzreihe   in mA 0xFF = Eingang nicht vorhanden |
| STAT_GKHR3_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Gurtkontakt hinten rechts 3. Sitzreihe   in mA 0xFF = Eingang nicht vorhanden |
| STAT_POS_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Passenger Off Schalter  in mA 0xFF = Eingang nicht vorhanden |
| STAT_SPSFA_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Sitzpositionssensor Fahrer  in mA 0xFF = Eingang nicht vorhanden |
| STAT_SPSBF_WERT | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromwert Sitzpositionssensor Beifahrer  in mA 0xFF = Eingang nicht vorhanden |

### RES_0X4054_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABFA1_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Fahrer Stufe 1; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ABFA2_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Fahrer Stufe 2; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_VAFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Fahrer Vent; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ABBF1_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Beifahrer Stufe 1; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ABBF2_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Beifahrer Stufe 2; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_VABF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Beifahrer Vent; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_SIAFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Sitzairbag Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_SIABF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Sitzairbag Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_SIAFAV_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Sitzairbag Fahrer Ventil; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_SIABFV_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Sitzairbag Beifahrer Ventil; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_KNAFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Knieairbag Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_KNABF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Knieairbag Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_AUSFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Automatenstrammer Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_AUSBF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Automatenstrammer Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_AUSHL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Automatenstrammer hinten links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_AUSHR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Automatenstrammer hinten rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_GSSFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Gurtschlossstrammer  Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_GSSBF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Gurtsschlosstrammer Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_EBSFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Endbeschlagsstrammer Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_EBSBF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Endbeschlagsstrammer Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_GKBFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Gurtkraftbegrenzer Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_GKBBF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Gurtkraftbegrenzer Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_GSSHL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Gurtschlossstrammer hinten links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_GSSHR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Gurtschlossstrammer hinten rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_EBSHL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Endbeschlagstrammer hinten links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_EBSHR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Endbeschlagstrammer hinten rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_KOSFA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Crash Aktive Kopfstütze Fahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_KOSBF_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Crash Aktive Kopfstütze Beifahrer; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_CUL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Curtain links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_CUR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Curtain rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ROSPL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Pyrotechnischer Rolloverschutz links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ROSPR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Pyrotechnischer Rolloverschutz rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ROLML_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Magnetischer Rolloveraktuator links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_ROSMR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Magnetischer Rolloveraktuator rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_FGSVL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Fußgängerschutz vorne links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_FGSVR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Fußgängerschutz vorne rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_FGSHL_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Fußgängerschutz hinten links; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_FGSHR_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Fußgängerschutz hinten rechts; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_PPA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Airbag Windowbag; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_RPPA1_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Windowbag Retractor1; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_RPPA2_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Windowbag Retractor2; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_VPPA_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Windowbag Vent; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_VPPA2_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Windowbag Vent2; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_SBK_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | SBK - Sicherheitsbatterieklemme; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_HV1_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Crash_HV1 - SBK2; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_HV2_FREIGABE_WERT | HEX | - | unsigned char | - | - | - | - | - | Crash_HV2 - SBK3; 0x10 = gesperrt,  0x01 = freigegeben,  0x00 = nicht vorhanden |
| STAT_CUHL_FREIGABE_WERT | HEX | high | unsigned char | - | - | - | - | - | Curtain hinten links; 0x10 = gesperrt, 0x01 = freigegeben, 0x00 = nicht vorhanden |
| STAT_CUHR_FREIGABE_WERT | HEX | high | unsigned char | - | - | - | - | - | Curtain hinten rechts; 0x10 = gesperrt, 0x01 = freigegeben, 0x00 = nicht vorhanden |
| STAT_SIAHL_FREIGABE_WERT | HEX | high | unsigned char | - | - | - | - | - | Seitenairbag hinten links; 0x10 = gesperrt, 0x01 = freigegeben, 0x00 = nicht vorhanden |
| STAT_SIAHR_FREIGABE_WERT | HEX | high | unsigned char | - | - | - | - | - | Seitenairbag hinten rechts; 0x10 = gesperrt, 0x01 = freigegeben, 0x00 = nicht vorhanden |

### RES_0X4055_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AACN_NACHRICHTENLAENGE_WERT | HEX | high | unsigned char | - | - | - | - | - | gibt die Laenge der Nachricht in dem nachfolgenen Bytefeld an |
| STAT_AACN_SENDENACHRICHT_DATA | DATA | high | data[30] | - | - | 1.0 | 1.0 | 0.0 | Bytefeld enthaelt die max. 30 Byte, die ueber die K-Line gesendet werden soll Byte-Definition siehe Spezifikation AACN. Laenge der Nachricht wird im vorhergehenden Laengenfeld angegeben |

### RES_0X4056_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBR_HINTEN_LINKS_WIDERSTANDSWERTE_WERT | Ohm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Widerstandswerte der SBR-Matte hinten links in 0,1 Ohm  0xFFFF ungültig |
| STAT_SBR_HINTEN_MITTE_WIDERSTANDSWERTE_WERT | Ohm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Widerstandswerte der SBR-Matte hinten mitte in 0,1 Ohm  0xFFFF ungültig |
| STAT_SBR_HINTEN_RECHTS_WIDERSTANDSWERTE_WERT | Ohm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Widerstandswerte der SBR-Matte hinten rechts in 0,1 Ohm  0xFFFF ungültig |

### RES_0X407A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Hauptversion des SW-Moduls  SBR . |
| STAT_UNTERVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Unterversion des SW-Moduls  SBR . |
| STAT_PATCHVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Patchversion des SW-Moduls  SBR . |

### RES_0X407C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Hauptversion des SW-Moduls  DAC . |
| STAT_UNTERVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Unterversion des SW-Moduls  DAC . |
| STAT_PATCHVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Patchversion des SW-Moduls  DAC . |

### RES_0X407D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Hauptversion des SW-Moduls  PARKMASTER . |
| STAT_UNTERVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Unterversion des SW-Moduls  PARKMASTER . |
| STAT_PATCHVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Patchversion des SW-Moduls  PARKMASTER . |

### RES_0X407E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Hauptversion des SW-Moduls IUSM |
| STAT_UNTERVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Subversion des SW-Moduls IUSM |
| STAT_PATCHVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Patchversion des SW-Moduls IUSM |

### RES_0X407F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_CNT_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Event Zähler Level 1 |
| STAT_EVENT_CNT_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Event Zähler Level 2 |
| STAT_EVENT_CNT_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Event Zähler Level 3 |
| STAT_EVENT_CNT_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Event Zähler Level 4 |

### RES_0X4080_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZS_VEH_DMG_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Event (Eintrag 1) |
| STAT_VEH_DMG_COU_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Zähler (Eintrag 1) |
| STAT_VEH_DMG_DT_0_LOC_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 0 Localization (Eintrag 1) |
| STAT_VEH_DMG_DT_1_MAXAX_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 1 max a_x (Eintrag 1) |
| STAT_VEH_DMG_DT_2_MAXAY_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 2 max a_y (Eintrag 1) |
| STAT_VEH_DMG_DT_3_MAXVYAW_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 3 max vyaw (Eintrag 1) |
| STAT_VEH_DMG_DT_4_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 4 (Eintrag 1) |
| STAT_VEH_DMG_DT_5_CONF_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 5 confidence (Eintrag 1) |
| STAT_VEH_DMG_STG_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Stufe (Eintrag 1) |
| STAT_VEH_VRS_ALGO_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Version Algorithmus (Eintrag 1) |
| STAT_VEH_VRS_DMG_DT_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Version Schaden Daten (Eintrag 1) |
| STAT_ZS_VEH_DMG_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Event (Eintrag 2) |
| STAT_VEH_DMG_COU_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Zähler (Eintrag 2) |
| STAT_VEH_DMG_DT_0_LOC_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 0 Localization (Eintrag 2) |
| STAT_VEH_DMG_DT_1_MAXAX_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 1 max a_x (Eintrag 2) |
| STAT_VEH_DMG_DT_2_MAXAY_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 2 max a_y (Eintrag 2) |
| STAT_VEH_DMG_DT_3_MAXVYAW_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 3 max vyaw (Eintrag 2) |
| STAT_VEH_DMG_DT_4_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 4 (Eintrag 2) |
| STAT_VEH_DMG_DT_5_CONF_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 5 confidence (Eintrag 2) |
| STAT_VEH_DMG_STG_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Stufe (Eintrag 2) |
| STAT_VEH_VRS_ALGO_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Version Algorithmus (Eintrag 2) |
| STAT_VEH_VRS_DMG_DT_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Version Schaden Daten (Eintrag 2) |
| STAT_ZS_VEH_DMG_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Event (Eintrag 3) |
| STAT_VEH_DMG_COU_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Zähler (Eintrag 3) |
| STAT_VEH_DMG_DT_0_LOC_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 0 Localization (Eintrag 3) |
| STAT_VEH_DMG_DT_1_MAXAX_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 1 max a_x (Eintrag 3) |
| STAT_VEH_DMG_DT_2_MAXAY_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 2 max a_y (Eintrag 3) |
| STAT_VEH_DMG_DT_3_MAXVYAW_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 3 max vyaw (Eintrag 3) |
| STAT_VEH_DMG_DT_4_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 4 (Eintrag 3) |
| STAT_VEH_DMG_DT_5_CONF_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Daten 5 confidence (Eintrag 3) |
| STAT_VEH_DMG_STG_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Schaden Stufe (Eintrag 3) |
| STAT_VEH_VRS_ALGO_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Version Algorithmus (Eintrag 3) |
| STAT_VEH_VRS_DMG_DT_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Fahrzeug Version Schaden Daten (Eintrag 3) |

### RES_0X4081_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEV_DATA_FORMAT_VERS_WERT | HEX | high | unsigned char | - | - | - | - | - | Development Data Format Version |
| STAT_ZS_VEH_DMG_MESSAGE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Schadensmeldung |
| STAT_ZD_STORED_DATA_1_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitunterschied der einzelnen gespeicherten Daten |
| STAT_DD_DEV_DATA_1_1_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Development Data Message 1 Part 1 |
| STAT_DD_DEV_DATA_1_2_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Development Data Message 1 Part 2 |
| STAT_ZS_VEH_DMG_MESSAGE_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Schadensmeldung |
| STAT_ZD_STORED_DATA_2_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitunterschied der einzelnen gespeicherten Daten |
| STAT_DD_DEV_DATA_2_1_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Development Data Message 2 Part 1 |
| STAT_DD_DEV_DATA_2_2_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Development Data Message 2 Part 2 |
| STAT_ZS_VEH_DMG_MESSAGE_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel Schadensmeldung |
| STAT_ZD_STORED_DATA_3_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitunterschied der einzelnen gespeicherten Daten |
| STAT_DD_DEV_DATA_3_1_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Development Data Message 3 Part 1 |
| STAT_DD_DEV_DATA_3_2_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Development Data Message 3 Part 2 |

### RES_0X4098_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_01_WERT | HEX | high | unsigned char | - | - | - | - | - | Ergebnis ohne Info |
| STAT_ANZ_RRA_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch Heckradar |
| STAT_RESERVE_02_WERT | HEX | high | unsigned char | - | - | - | - | - | Ergebnis ohne Info |
| STAT_ANZ_FPA_EB_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch Notbremsung |
| STAT_ANZ_FPA_OS_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch Uebersteuern |
| STAT_ANZ_FPA_US_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch Untersteuern |
| STAT_ANZ_FPA_USTD_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch Untersteuern TD |
| STAT_ANZ_AUTON_BRK_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch autonome Bremsung |
| STAT_ANZ_DBC_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl Aktivierungen durch Bremsassistent |
| STAT_ZS_CRASH_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Crash (Eintrag 1) |
| STAT_RESERVE_10_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info  |
| STAT_ZS_RRA_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Heckradar (Eintrag 1) |
| STAT_RESERVE_11_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_EB_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Notbremsung (Eintrag 1) |
| STAT_ZS_OS_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Uebersteuern (Eintrag 1) |
| STAT_ZS_US_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern (Eintrag 1) |
| STAT_ZS_USTD_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern TD (Eintrag 1) |
| STAT_ZS_AUTON_BRK_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel autonome Bremsung (Eintrag 1) |
| STAT_ZS_DBC_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Bremsassistent (Eintrag 1) |
| STAT_ZS_GA_T1L_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Links (Eintrag 1) |
| STAT_ZS_GA_T1R_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Rechts (Eintrag 1) |
| STAT_ZS_FENSTER_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Fenster (Eintrag 1) |
| STAT_ZS_SITZ_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Sitz (Eintrag 1) |
| STAT_ZS_SHD_1_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Schiebe / Hebe - Dach (Eintrag 1) |
| STAT_ZS_ERR_V_VEH_COG_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error V_VEH_COG (Eintrag 1) |
| STAT_RESERVE_12_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_13_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_REAR_RADAR_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Heckradar (Eintrag 1) |
| STAT_ZS_ERR_STATUS_REAR_RADAR_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Status Heckradar (Eintrag 1) |
| STAT_RESERVE_14_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_15_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_VYAW_VEH_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error VYAW_VEH (Eintrag 1) |
| STAT_ZS_ERR_ACLNX_COG_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNX_COG (Eintrag 1) |
| STAT_ZS_ERR_ACLNY_COG_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNY_COG (Eintrag 1) |
| STAT_ZS_ERR_BRTORQ_SUM_DVCH_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error BRTORQ_SUM_DVCH (Eintrag 1) |
| STAT_ZS_ERR_STEA_FTAX_EFFV_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error STEA_FTAX_EFFV (Eintrag 1) |
| STAT_ZS_ERR_AVL_ANG_ACPD_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error AVL_ANG_ACPD (Eintrag 1) |
| STAT_ZS_ERR_GRAD_AVL_ANG_ACPD_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error GRAD_AVL_ANG_ACPD (Eintrag 1) |
| STAT_ZS_ERR_ATTA_ESTI_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTA_ESTI (Eintrag 1) |
| STAT_ZS_ERR_ATTAV_ESTI_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTAV_ESTI (Eintrag 1) |
| STAT_ZS_ERR_DCRN_AUTON_BRK_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_AUTON_BRK (Eintrag 1) |
| STAT_ZS_ERR_DCRN_MAX_DBC_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_MAX_DBC (Eintrag 1) |
| STAT_ZS_ERR_ST_CR_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_CR (Eintrag 1) |
| STAT_ZS_ERR_ST_DRIV_DIR_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_DRIV_DIR (Eintrag 1) |
| STAT_ZS_ERR_ST_THR_INCR_DRDY_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_THR_INCR_DRDY (Eintrag 1) |
| STAT_ZS_ERR_QU_SER_PRMSN_DBC_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error QU_SER_PRMSN_DBC (Eintrag 1) |
| STAT_ZS_ERR_THRV_TRIG_PRMSN_DBC_1_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error THRV_TRIG_PRMSN_DBC (Eintrag 1) |
| STAT_GESCHWINDIGKEIT_1_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit Snapshot (Eintrag 1) |
| STAT_REQ_SRC_WBK_DBC_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Anforderung WBK (bit 0-3) / DBC (bit 4-7) (Eintrag 1) |
| STAT_AKT_PCS_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Ausgeloeste PreCrashSchweren (bitkodiert) (Eintrag 1) |
| STAT_ZS_CRASH_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Crash (Eintrag 2) |
| STAT_RESERVE_20_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_RRA_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Heckradar (Eintrag 2) |
| STAT_RESERVE_21_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_EB_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Notbremsung (Eintrag 2) |
| STAT_ZS_OS_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Uebersteuern (Eintrag 2) |
| STAT_ZS_US_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern (Eintrag 2) |
| STAT_ZS_USTD_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern TD (Eintrag 2) |
| STAT_ZS_AUTON_BRK_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel autonome Bremsung (Eintrag 2) |
| STAT_ZS_DBC_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Bremsassistent (Eintrag 2) |
| STAT_ZS_GA_T1L_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Links (Eintrag 2) |
| STAT_ZS_GA_T1R_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Rechts (Eintrag 2) |
| STAT_ZS_FENSTER_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Fenster (Eintrag 2) |
| STAT_ZS_SITZ_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Sitz (Eintrag 2) |
| STAT_ZS_SHD_2_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Schiebe / Hebe - Dach (Eintrag 2) |
| STAT_ZS_ERR_V_VEH_COG_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error V_VEH_COG (Eintrag 2) |
| STAT_RESERVE_22_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_23_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_REAR_RADAR_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Heckradar (Eintrag 2) |
| STAT_ZS_ERR_STATUS_REAR_RADAR_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Status Heckradar (Eintrag 2) |
| STAT_RESERVE_24_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_25_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_VYAW_VEH_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error VYAW_VEH (Eintrag 2) |
| STAT_ZS_ERR_ACLNX_COG_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNX_COG (Eintrag 2) |
| STAT_ZS_ERR_ACLNY_COG_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNY_COG (Eintrag 2) |
| STAT_ZS_ERR_BRTORQ_SUM_DVCH_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error BRTORQ_SUM_DVCH (Eintrag 2) |
| STAT_ZS_ERR_STEA_FTAX_EFFV_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error STEA_FTAX_EFFV (Eintrag 2) |
| STAT_ZS_ERR_AVL_ANG_ACPD_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error AVL_ANG_ACPD (Eintrag 2) |
| STAT_ZS_ERR_GRAD_AVL_ANG_ACPD_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error GRAD_AVL_ANG_ACPD (Eintrag 2) |
| STAT_ZS_ERR_ATTA_ESTI_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTA_ESTI (Eintrag 2) |
| STAT_ZS_ERR_ATTAV_ESTI_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTAV_ESTI (Eintrag 2) |
| STAT_ZS_ERR_DCRN_AUTON_BRK_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_AUTON_BRK (Eintrag 2) |
| STAT_ZS_ERR_DCRN_MAX_DBC_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_MAX_DBC (Eintrag 2) |
| STAT_ZS_ERR_ST_CR_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_CR (Eintrag 2) |
| STAT_ZS_ERR_ST_DRIV_DIR_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_DRIV_DIR (Eintrag 2) |
| STAT_ZS_ERR_ST_THR_INCR_DRDY_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_THR_INCR_DRDY (Eintrag 2) |
| STAT_ZS_ERR_QU_SER_PRMSN_DBC_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error QU_SER_PRMSN_DBC (Eintrag 2) |
| STAT_ZS_ERR_THRV_TRIG_PRMSN_DBC_2_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error THRV_TRIG_PRMSN_DBC (Eintrag 2) |
| STAT_GESCHWINDIGKEIT_2_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit Snapshot (Eintrag 2) |
| STAT_REQ_SRC_WBK_DBC_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Anforderung WBK (bit 0-3) / DBC (bit 4-7) (Eintrag 2) |
| STAT_AKT_PCS_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Ausgeloeste PreCrashSchweren (bitkodiert) (Eintrag 2) |
| STAT_ZS_CRASH_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Crash (Eintrag 3) |
| STAT_RESERVE_30_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_RRA_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Heckradar (Eintrag 3) |
| STAT_RESERVE_31_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_EB_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Notbremsung (Eintrag 3) |
| STAT_ZS_OS_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Uebersteuern (Eintrag 3) |
| STAT_ZS_US_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern (Eintrag 3) |
| STAT_ZS_USTD_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern TD (Eintrag 3) |
| STAT_ZS_AUTON_BRK_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel autonome Bremsung (Eintrag 3) |
| STAT_ZS_DBC_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Bremsassistent (Eintrag 3) |
| STAT_ZS_GA_T1L_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Links (Eintrag 3) |
| STAT_ZS_GA_T1R_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Rechts (Eintrag 3) |
| STAT_ZS_FENSTER_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Fenster (Eintrag 3) |
| STAT_ZS_SITZ_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Sitz (Eintrag 3) |
| STAT_ZS_SHD_3_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Schiebe / Hebe - Dach (Eintrag 3) |
| STAT_ZS_ERR_V_VEH_COG_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error V_VEH_COG (Eintrag 3) |
| STAT_RESERVE_32_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_33_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_REAR_RADAR_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Heckradar (Eintrag 3) |
| STAT_ZS_ERR_STATUS_REAR_RADAR_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Status Heckradar (Eintrag 3) |
| STAT_RESERVE_34_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_35_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_VYAW_VEH_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error VYAW_VEH (Eintrag 3) |
| STAT_ZS_ERR_ACLNX_COG_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNX_COG (Eintrag 3) |
| STAT_ZS_ERR_ACLNY_COG_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNY_COG (Eintrag 3) |
| STAT_ZS_ERR_BRTORQ_SUM_DVCH_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error BRTORQ_SUM_DVCH (Eintrag 3) |
| STAT_ZS_ERR_STEA_FTAX_EFFV_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error STEA_FTAX_EFFV (Eintrag 3) |
| STAT_ZS_ERR_AVL_ANG_ACPD_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error AVL_ANG_ACPD (Eintrag 3) |
| STAT_ZS_ERR_GRAD_AVL_ANG_ACPD_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error GRAD_AVL_ANG_ACPD (Eintrag 3) |
| STAT_ZS_ERR_ATTA_ESTI_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTA_ESTI (Eintrag 3) |
| STAT_ZS_ERR_ATTAV_ESTI_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTAV_ESTI (Eintrag 3) |
| STAT_ZS_ERR_DCRN_AUTON_BRK_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_AUTON_BRK (Eintrag 3) |
| STAT_ZS_ERR_DCRN_MAX_DBC_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_MAX_DBC (Eintrag 3) |
| STAT_ZS_ERR_ST_CR_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_CR (Eintrag 3) |
| STAT_ZS_ERR_ST_DRIV_DIR_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_DRIV_DIR (Eintrag 3) |
| STAT_ZS_ERR_ST_THR_INCR_DRDY_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_THR_INCR_DRDY (Eintrag 3) |
| STAT_ZS_ERR_QU_SER_PRMSN_DBC_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error QU_SER_PRMSN_DBC (Eintrag 3) |
| STAT_ZS_ERR_THRV_TRIG_PRMSN_DBC_3_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error THRV_TRIG_PRMSN_DBC (Eintrag 3) |
| STAT_GESCHWINDIGKEIT_3_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit Snapshot (Eintrag 3) |
| STAT_REQ_SRC_WBK_DBC_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Anforderung WBK (bit 0-3) / DBC (bit 4-7) (Eintrag 3) |
| STAT_AKT_PCS_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Ausgeloeste PreCrashSchweren (bitkodiert) (Eintrag 3) |
| STAT_ZS_CRASH_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Crash (Eintrag 4) |
| STAT_RESERVE_40_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_RRA_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Heckradar (Eintrag 4) |
| STAT_RESERVE_41_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_EB_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Notbremsung (Eintrag 4) |
| STAT_ZS_OS_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Uebersteuern (Eintrag 4) |
| STAT_ZS_US_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern (Eintrag 4) |
| STAT_ZS_USTD_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Untersteuern TD (Eintrag 4) |
| STAT_ZS_AUTON_BRK_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel autonome Bremsung (Eintrag 4) |
| STAT_ZS_DBC_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Bremsassistent (Eintrag 4) |
| STAT_ZS_GA_T1L_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Links (Eintrag 4) |
| STAT_ZS_GA_T1R_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Gurtaktuator 1 Rechts (Eintrag 4) |
| STAT_ZS_FENSTER_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Fenster (Eintrag 4) |
| STAT_ZS_SITZ_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Sitz (Eintrag 4) |
| STAT_ZS_SHD_4_WERT | s | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Schiebe / Hebe - Dach (Eintrag 4) |
| STAT_ZS_ERR_V_VEH_COG_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error V_VEH_COG (Eintrag 4) |
| STAT_RESERVE_42_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_43_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_REAR_RADAR_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Heckradar (Eintrag 4) |
| STAT_ZS_ERR_STATUS_REAR_RADAR_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error Status Heckradar (Eintrag 4) |
| STAT_RESERVE_44_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_RESERVE_45_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Ergebnis ohne Info |
| STAT_ZS_ERR_VYAW_VEH_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error VYAW_VEH (Eintrag 4) |
| STAT_ZS_ERR_ACLNX_COG_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNX_COG (Eintrag 4) |
| STAT_ZS_ERR_ACLNY_COG_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ACLNY_COG (Eintrag 4) |
| STAT_ZS_ERR_BRTORQ_SUM_DVCH_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error BRTORQ_SUM_DVCH (Eintrag 4) |
| STAT_ZS_ERR_STEA_FTAX_EFFV_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error STEA_FTAX_EFFV (Eintrag 4) |
| STAT_ZS_ERR_AVL_ANG_ACPD_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error AVL_ANG_ACPD (Eintrag 4) |
| STAT_ZS_ERR_GRAD_AVL_ANG_ACPD_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error GRAD_AVL_ANG_ACPD (Eintrag 4) |
| STAT_ZS_ERR_ATTA_ESTI_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTA_ESTI (Eintrag 4) |
| STAT_ZS_ERR_ATTAV_ESTI_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ATTAV_ESTI (Eintrag 4) |
| STAT_ZS_ERR_DCRN_AUTON_BRK_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_AUTON_BRK (Eintrag 4) |
| STAT_ZS_ERR_DCRN_MAX_DBC_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error DCRN_MAX_DBC (Eintrag 4) |
| STAT_ZS_ERR_ST_CR_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_CR (Eintrag 4) |
| STAT_ZS_ERR_ST_DRIV_DIR_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_DRIV_DIR (Eintrag 4) |
| STAT_ZS_ERR_ST_THR_INCR_DRDY_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error ST_THR_INCR_DRDY (Eintrag 4) |
| STAT_ZS_ERR_QU_SER_PRMSN_DBC_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error QU_SER_PRMSN_DBC (Eintrag 4) |
| STAT_ZS_ERR_THRV_TRIG_PRMSN_DBC_4_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Zeitstempel Error THRV_TRIG_PRMSN_DBC (Eintrag 4) |
| STAT_GESCHWINDIGKEIT_4_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit Snapshot (Eintrag 4) |
| STAT_REQ_SRC_WBK_DBC_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Anforderung WBK (bit 0-3) / DBC (bit 4-7) (Eintrag 4) |
| STAT_AKT_PCS_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Ausgeloeste PreCrashSchweren (bitkodiert) (Eintrag 4) |

### RES_0X4101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_X_ACC_SCAL_WERT | m/s² | high | unsigned long | - | - | 0.02 | 1.0 | -41.0 | acceleration longitudinal scaled value |
| STAT_X_ACC_SCAL_QUAL | 0-n | high | unsigned char | - | IMU_QUAL | 1.0 | 1.0 | 0.0 | qualifier acceleration longitudinal scaled value |
| STAT_Y_ACC_SCAL_WERT | m/s² | high | unsigned long | - | - | 0.02 | 1.0 | -41.0 | acceleration lateral scaled value |
| STAT_Y_ACC_SCAL_QUAL | 0-n | high | unsigned char | - | IMU_QUAL | 1.0 | 1.0 | 0.0 | qualifier acceleration lateral scaled value |
| STAT_Z_ACC_SCAL_WERT | m/s² | high | unsigned long | - | - | 0.02 | 1.0 | -20.92 | acceleration vertical scaled value |
| STAT_Z_ACC_SCAL_QUAL | 0-n | high | unsigned char | - | IMU_QUAL | 1.0 | 1.0 | 0.0 | qualifier acceleration vertical scaled value |
| STAT_X_RATE_SCAL_WERT | °/s | high | unsigned long | - | - | 0.01 | 1.0 | -328.0 | roll angular velocity scaled value |
| STAT_X_RATE_SCAL_QUAL | 0-n | high | unsigned char | - | IMU_QUAL | 1.0 | 1.0 | 0.0 | qualifier roll angular velocity scaled value |
| STAT_Y_RATE_SCAL_WERT | °/s | high | unsigned long | - | - | 0.05 | 1.0 | -102.5 | pitch angular velocity scaled value |
| STAT_Y_RATE_SCAL_QUAL | 0-n | high | unsigned char | - | IMU_QUAL | 1.0 | 1.0 | 0.0 | qualifier pitch angular velocity scaled value |
| STAT_Z_RATE_SCAL_WERT | °/s | high | unsigned long | - | - | 0.005 | 1.0 | -163.84 | yaw angular velocity scaled value |
| STAT_Z_RATE_SCAL_QUAL | 0-n | high | unsigned char | - | IMU_QUAL | 1.0 | 1.0 | 0.0 | qualifier yaw angular velocity scaled value |

### RES_0X4102_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_X_ACC_SCAL_RED_WERT | m/s² | high | unsigned long | - | - | 0.02 | 1.0 | -41.0 | acceleration longitudinal scaled value redundant |
| STAT_X_ACC_SCAL_QUAL_RED | 0-n | high | unsigned char | - | IMU_QUAL | - | - | - | qualifier acceleration longitudinal scaled value  redundant |
| STAT_Y_ACC_SCAL_RED_WERT | m/s² | high | unsigned long | - | - | 0.02 | 1.0 | -41.0 | acceleration lateral scaled value  redundant |
| STAT_Y_ACC_SCAL_QUAL_RED | 0-n | high | unsigned char | - | IMU_QUAL | - | - | - | qualifier acceleration lateral scaled value  redundant |
| STAT_Z_RATE_SCAL_RED_WERT | °/s | high | unsigned long | - | - | 0.005 | 1.0 | -163.84 | yaw angular velocity scaled value redundant |
| STAT_Z_RATE_SCAL_QUAL_RED | 0-n | high | unsigned char | - | IMU_QUAL | - | - | - | qualifier yaw angular velocity scaled value redundant |

### RES_0X4104_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STEUERGERAET_TYP | 0-n | high | unsigned char | - | TAB_STEUERGERAET_TYP | - | - | - | Typ des Steuergeräts |

### RES_0XA0D1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZK_ZUSTAND | + | - | - | 0-n | high | unsigned char | - | TAB_ZUENDKREIS_ZUSTAND | - | - | - | Ausgabe der Konfiguration vom Zündkreis nach Tabelle TAB_ZUENDKREIS_ZUSTAND |
| STAT_ZK_WIDERSTAND_SOLL_MAX_WERT | + | - | - | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Im Airbag-Steuergerät hinterlegte Sollwert-Obergrenze vom Zündkreis. |
| STAT_ZK_WIDERSTAND_SOLL_MIN_WERT | + | - | - | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Im Airbag-Steuergerät hinterlegte Sollwert-Untergrenze vom Zündkreis. |
| STAT_ZK_WIDERSTAND_IST_WERT | + | - | - | Ohm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Widerstandswert vom Zündkreis auf eine Nachkommastelle genau. |

### RES_0XA0D2_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GK_ZUSTAND | + | - | - | 0-n | high | unsigned char | - | TAB_GK_ZUSTAND | - | - | - | Zustand vom Gurtkontakt siehe TAB_GK_ZUSTAND: Siehe TAB_GK_ZUSTAND. |

### RES_0XA0D3_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_ZUSTAND | + | - | - | 0-n | high | unsigned char | - | TAB_SENSOR_ZUSTAND | - | - | - | Zustand des gewählten Airbagsensors Siehe TAB_SENSOR_ZUSTAND |

### RES_0XA0D5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUENDKREIS_NR_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nummer vom Zündkreis |
| STAT_ZEUNDKREIS_PIN1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erste PIN-Nummer vom abgefragten Zündkreis |
| STAT_ZEUNDKREIS_PIN2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zweite PIN-Nummer vom abgefragten Zündkreis |
| STAT_ZUENDKREIS_STECKER_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stecker-Nummer (Kammer), an der der unerwartete Zündkreis angeschlossen ist. |

### RES_0XA0DA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_CIS | + | - | + | 0-n | high | unsigned char | - | TAB_ZUSTAND_CIS_FREIGABE | - | - | - | Status des Freigabeablaufs der CIS-Matte |

### RES_0XA0DC_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OPERATION_STATE | + | - | + | 0-n | high | unsigned char | - | TAB_OPERATION_STATE | - | - | - | Gibt den Operation_State aus. |
| STAT_CIS_DATEN_INTERN_1_DATA | - | - | + | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Gibt die  aktuellen CIS-Daten  der Nachricht  Status_Sitz_Belegung_BF_ODS_LIN   aus. |
| STAT_CIS_INFO_TELEGRAMM_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SBR/CLASS/ERROR Information |
| STAT_I_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | interner I-Wert der CIS3 |
| STAT_Q_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | interner Q-Wert der CIS3 |
| STAT_CIS_INFO_TELEGRAMM_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Klassenentscheidung, Messfrequenz |
| STAT_CIS_TEMP_WERT | - | - | + | °C | high | signed char | - | - | 1.0 | 1.0 | -60.0 | Temperatur der CIS3 in Grad Celsius |
| STAT_U_CIS_WERT | - | - | + | V | high | unsigned char | - | - | 0.103 | 1.0 | 0.0 | Betriebsspannung der CIS3 |

### RES_0XA0DE_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OPERATION_STATE | + | - | + | 0-n | high | unsigned char | - | TAB_OPERATION_STATE | - | - | - | Gibt den OPERATION_STATE aus. |
| STAT_CIS_DATEN_DATA | - | - | + | DATA | high | data[252] | - | - | 1.0 | 1.0 | 0.0 | Gibt die internen Speicherdaten der CIS aus. |

### RES_0XD402_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUPP_NO_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Lieferanten-Nummer T1L |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 1 |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 2 |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 3 |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 4 |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_5_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 5 |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_6_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 6 |
| STAT_SN_BLT_TIR_1_LH_PSCAN_BYTE_7_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1L byte 7 |
| STAT_HW_VRS_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned int | - | - | - | - | - | Hardware Version T1L |
| STAT_SFTW_VRS_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned int | - | - | - | - | - | Software Version T1L |
| STAT_BLT_TIR_1_LH_PRMTR_VRS_PSCAN_WERT | HEX | high | unsigned int | - | - | - | - | - | Parameter Version T1L |
| STAT_SUPP_NO_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Lieferanten-Nummer T1R |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 1 |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 2 |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 3 |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 4 |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_5_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 5 |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_6_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 6 |
| STAT_SN_BLT_TIR_1_RH_PSCAN_BYTE_7_WERT | HEX | high | unsigned char | - | - | - | - | - | Seriennummer des REMA-Aktuators T1R byte 7 |
| STAT_HW_VRS_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned int | - | - | - | - | - | Hardware Version T1R |
| STAT_SFTW_VRS_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned int | - | - | - | - | - | Software Version T1R |
| STAT_BLT_TIR_1_RH_PRMTR_VRS_PSCAN_WERT | HEX | high | unsigned int | - | - | - | - | - | Parameter Version T1R |

### RES_0XD41D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALIV_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Überprüfen ob, Alive = OK / NOK ist T1L |
| STAT_ST_FN_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Funktionsstatus T1L |
| STAT_ST_HW_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Hardwarestatus T1L |
| STAT_ST_SFTW_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Softwarestatus T1L |
| STAT_ST_MOT_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Motorstatus T1L |
| STAT_ST_TEMP_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Temperaturstatus T1L |
| STAT_ST_USUP_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Spannungsstatus T1L |
| STAT_ST_DA_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Status Abschaltung T1L |
| STAT_ERC_BLT_TIR_1_LH_PSCAN_WERT | HEX | high | unsigned long | - | - | - | - | - | Fehlercode T1L |
| STAT_ALIV_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Überprüfen ob, Alive = OK / NOK ist T1R |
| STAT_ST_FN_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Funktionsstatus T1R |
| STAT_ST_HW_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Hardwarestatus T1R |
| STAT_ST_SFTW_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Softwarestatus T1R |
| STAT_ST_MOT_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Motorstatus T1R |
| STAT_ST_TEMP_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Temperaturstatus T1R |
| STAT_ST_USUP_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Spannungsstatus T1R |
| STAT_ST_DA_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Status Abschaltung T1R |
| STAT_ERC_BLT_TIR_1_RH_PSCAN_WERT | HEX | high | unsigned long | - | - | - | - | - | Fehlercode T1R |

### RES_0XD425_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Hauptversion des SW-Moduls  PRECRASH . |
| STAT_UNTERVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Unterversion des SW-Moduls  PRECRASH . |
| STAT_PATCHVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Patchversion des SW-Moduls  PRECRASH . |

### RES_0XD482_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNG_LESEN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = verriegelt 1 = nicht verriegelt |

### RES_0XD486_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZBELEGUNG_FA | 0-n | high | unsigned char | - | TAB_SITZBELEGUNG_ZUSTAND | - | - | - | Fahrersitz: Person erkannt / nicht erkannt |
| STAT_SITZBELEGUNG_BF | 0-n | high | unsigned char | - | TAB_SITZBELEGUNG_ZUSTAND | - | - | - | Beifahrersitz: Person erkannt / nicht erkannt |
| STAT_SITZBELEGUNG_HI_LI | 0-n | high | unsigned char | - | TAB_SITZBELEGUNG_ZUSTAND | - | - | - | Sitz hinten links: Person erkannt / nicht erkannt |
| STAT_SITZBELEGUNG_HI_RE | 0-n | high | unsigned char | - | TAB_SITZBELEGUNG_ZUSTAND | - | - | - | Sitz hinten rechts: Person erkannt / nicht erkannt |

### RES_0XD487_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZLEHNENVERRIEGELUNG_FA | 0-n | high | unsigned char | - | TAB_SITZLEHNENVERRIEGELUNG_ZUSTAND | - | - | - | Sitzlehne Fahrer (Cabrio): verriegelt / nicht verriegelt |
| STAT_SITZLEHNENVERRIEGELUNG_BF | 0-n | high | unsigned char | - | TAB_SITZLEHNENVERRIEGELUNG_ZUSTAND | - | - | - | Sitzlehne Beifahrer (Cabrio): verriegelt / nicht verriegelt |

### RES_0XD488_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZPOS_SENSOR_ZUSTAND_FA | 0-n | high | unsigned char | - | TAB_SITZPOS_SENSOR_ZUSTAND | - | - | - | Zustand vom Sitzpositionssensor Fahrer. Siehe TAB_SITZPOS_SENSOR_ZUSTAND |
| STAT_SITZPOS_SENSOR_ZUSTAND_BF | 0-n | high | unsigned char | - | TAB_SITZPOS_SENSOR_ZUSTAND | - | - | - | Zustand vom Sitzpositionssensor Beifahrer. Siehe TAB_SITZPOS_SENSOR_ZUSTAND |

### RES_0XD489_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZPOS_SM_ZUSTAND_FA | 0-n | high | unsigned char | - | TAB_SITZPOS_SM_ZUSTAND | - | - | - | Sitzposition Fahrer aus Sitzmodul (Bus-Nachricht) Siehe TAB_SITZPOS_SM_ZUSTAND |
| STAT_SITZPOS_SM_ZUSTAND_BF | 0-n | high | unsigned char | - | TAB_SITZPOS_SM_ZUSTAND | - | - | - | Sitzposition Beifahrer aus Sitzmodul (Bus-Nachricht) Siehe TAB_SITZPOS_SM_ZUSTAND |

### RES_0XE210_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OPERATION_STATE | + | + | + | 0-n | high | unsigned char | - | TAB_EDR_OPERATION_STATE | - | - | - | State Of Operation |

### RES_0XE211_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDR_DATA_SELECT_1 | + | + | + | 0-n | high | unsigned char | - | TAB_EDR_DATA_SELECT | - | - | - | EDR Selected data  Siehe TAB_EDR_DATA_SELECT |
| STAT_OPERATION_STATE | - | - | + | 0-n | high | unsigned char | - | TAB_EDR_OPERATION_STATE | - | - | - | State Of Operation |

### RES_0XF100_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_1_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | übergibt die erste DTC-Nr.  |
| STAT_AKTUELLER_QUALIFIKATIOS_ZAEHLER_DTC_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt den aktuellen Stand de Qulifikationszaehlers wieder |
| STAT_MAX_QUALIFIKATIOS_ZAEHLER_DTC_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt den maximalen Stand des Qulifikationszaehlers wieder |
| STAT_ANZ_TEST_FEHLER_DTC_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt die Anzahl der Test mit Fehler wieder |
| STAT_ADRESSE_A_INHALT_DTC_1_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | gibt den Inhalt der Adresse A wieder |
| STAT_ADRESSE_B_INHALT_DTC_1_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | gibt den Inhalt der Adresse B wieder |
| STAT_DTC_2_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | übergibt die zweite DTC-Nr. |
| STAT_AKTUELLER_QUALIFIKATIOS_ZAEHLER_DTC_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt den aktuellen Stand de Qulifikationszaehlers wieder |
| STAT_MAX_QUALIFIKATIOS_ZAEHLER_DTC_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt den maximalen Stand des Qulifikationszaehlers wieder |
| STAT_ANZ_TEST_FEHLER_DTC_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt die Anzahl der Test mit Fehler wieder |
| STAT_ADRESSE_A_INHALT_DTC_2_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | gibt den Inhalt der Adresse A wieder |
| STAT_ADRESSE_B_INHALT_DTC_2_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | gibt den Inhalt der Adresse B wieder |
| STAT_DTC_3_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | übergibt die dritte DTC-Nr. |
| STAT_AKTUELLER_QUALIFIKATIOS_ZAEHLER_DTC_3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt den aktuellen Stand de Qulifikationszaehlers wieder |
| STAT_MAX_QUALIFIKATIOS_ZAEHLER_DTC_3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt den maximalen Stand des Qulifikationszaehlers wieder |
| STAT_ANZ_TEST_FEHLER_DTC_3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt die Anzahl der Test mit Fehler wieder |
| STAT_ADRESSE_A_INHALT_DTC_3_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | gibt den Inhalt der Adresse A wieder |
| STAT_ADRESSE_B_INHALT_DTC_3_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | gibt den Inhalt der Adresse B wieder |

### RES_0XFA11_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEM_IDENTIFICATION | 0-n | high | unsigned char | - | TAB_OEM_IDENTIFICATION | - | - | - | OEMIdentification |
| STAT_EDR_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EDRVersion |

### RES_0XFA12_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADDRESS_FORMAT | 0-n | high | unsigned char | - | TAB_EDR_ADDRESS_FORMAT | - | - | - | Address format |
| STAT_REQUEST_ADDRESS_1_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | REQUEST_ADDRESS_1_DATA |
| STAT_RESPONSE_ADDRESS_1_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | RESPONSE_ADDRESS_1_DATA |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EDR_OEM_IDENTIFICATION | 0x1011 | - | EDR_OEM_IDENTIFICATION | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1011_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| ZUENDKREIS | 0xA0D1 | - | Abfrage der Zündkreisinformationen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0D1_R | RES_0xA0D1_R |
| GURTKONTAKT | 0xA0D2 | - | Gurtkontakt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0D2_R | RES_0xA0D2_R |
| AIRBAG_SENSOR | 0xA0D3 | - | Abfrage der Sensordaten (Airbag-System) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0D3_R | RES_0xA0D3_R |
| AUSGABE_UNPLAUSIBLE_ZUENDKREIS_PINS | 0xA0D5 | - | Ausgabe der PIN-Information zu unplausiblen Zündkreisen (unerwartete Belegung) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0D5_R | RES_0xA0D5_R |
| FREIGABE_CIS_STEMPEL | 0xA0DA | - | Freigabe der kapazitiven Sitzbelegungserkennung mit Übergabe von Händlernummer und Freigabedatum | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0DA_R | RES_0xA0DA_R |
| DATEN_CIS_INTERN | 0xA0DC | - | Auslesen der internen Daten der CIS3 | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0DC_R |
| CIS_CODIERUNG_MANUELL | 0xA0DD | - | Routine zum Anstossen der manuellen Codierung der CIS-Elektronik (ACSM bereits gültig codiert) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0DD_R | - |
| STEUERN_CIS_SPEICHER_LESEN | 0xA0DE | - | liest den CIS-Speicher aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0DE_R | RES_0xA0DE_R |
| GURTLOSE_ENTFERNEN_REMA2 | 0xA514 | - | Routine zur selektiven Ansteuerungen der REMA2-Aktuatoren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA514_R | - |
| PC_READ_ID_REMA | 0xD402 | - | Identifikation des REMA-Aktuators  Rechts und Links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD402_D |
| PC_READ_ST_REMA | 0xD41D | - | Status REMA-Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD41D_D |
| SW_MODUL_VERSION_PRECRASH | 0xD425 | - | gibt die entsprechende Version des integrierten SW-Moduls  PRECRASH  wieder | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD425_D |
| STEUERN_POL | 0xD479 | - | Steuern Passengerairbag Off Kontrollleuchte | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD479_D | - |
| STEUERN_RO_TEST_FIRE | 0xD47B | - | Steuern magnetische Rolloverschutzaktuatoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD47B_D | - |
| VERRIEGELUNG_SG | 0xD482 | - | Verriegelungszustandes Airbag-Steuergerät Sind Airbags scharfgeschaltet? | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD482_D | RES_0xD482_D |
| STEUERN_RO_TEST_INIT | 0xD484 | - | Vorbereiten Testauslösung Rolloverbügel | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD484_D | - |
| PASSENGER_AIRBAG_OFF_SWITCH | 0xD485 | STAT_POS_ZUSTAND | Schalterstellung Beifahrer Airbag aus Schalter Siehe TAB_POS_ZUSTAND | 0-n | - | high | unsigned char | TAB_POS_ZUSTAND | - | - | - | - | 22 | - | - |
| SITZBELEGUNG | 0xD486 | - | Insassenerkennung ACSM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD486_D |
| SITZLEHNENVERRIEGELUNG | 0xD487 | - | Status der Sitzlehnen-Verriegelung (Cabrio-Fahrzeuge) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD487_D |
| SITZPOSITIONSSENSOR | 0xD488 | - | Sitzpositionssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD488_D |
| SITZPOSITION_SITZMEMORY | 0xD489 | - | Sitzposition aus Sitzmodul (Bus-Nachricht) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD489_D |
| ANZAHL_UNERWARTETER_ZUENDKREISE | 0xD48B | STAT_ANZAHL_UNERWARTETER_ZUENDKREISE_WERT | Anzahl unerwarteter Zündkreise (Plausifehler PIN-basiert) | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_POL_AKTIV | 0xD48C | - | Ansteuerung der POL 2 (Beifahrerairbag AKTIV) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD48C_D | - |
| PARKSLAVES_ACSM | 0xD48D | - | Aktivierung der PMA-Sensorik (ab ACSM5) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD48D_D | - |
| EDR_CALCULATE_SIGNATURE | 0xE210 | - | CalculateSignatureOrCRC | - | - | - | - | - | - | - | - | - | 31 | ARG_0xE210_R | RES_0xE210_R |
| EDR_DATARECORDER_DATA_FORMAT | 0xE211 | - | Format der Ausgabe der EDR Daten vorgeben | - | - | - | - | - | - | - | - | - | 31 | ARG_0xE211_R | RES_0xE211_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| EDR_NUMBER_OF_DEVICES | 0xFA10 | - | Bei zentraler Speicherung (Bit 7 ==0) in einem externen zentralen Speicher gibt Bit 5..0 den Wert 0x02 aus. Bei dezentraler Speicherung (Bit 7 ==1) gibt Bit 5..0 die Anzahl der Speicher aus. | Bit | - | high | BITFIELD | BF_EDR_DEVICES | - | - | - | - | 22 | - | - |
| EDR_IDENTIFICATION | 0xFA11 | - | EDRIdentification | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFA11_D |
| EDR_ADDRESS_INFORMATION | 0xFA12 | - | AddressInformation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFA12_D |
| SG_INNENTEMPERATUR | 0x4003 | STAT_SG_INNENTEMPERATUR_WERT | Steuergeräte-Innen-Temperatur in 0,1°C 0xFFFF = Wert nicht vorhanden | °C | - | high | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SG_SPANNUNG | 0x4007 | STAT_SG_SPANNUNG_WERT | Spannung am Steuergerät in mV 0xFFFF = kein Wert vorhande | mV | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _DTCDEBUGINFO_KONFIG | 0x4011 | - | gibt die Konfiguration der DTC DEBUG INFO Funktion wieder | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| _BETRIEBSSTUNDENZAEHLER_AKTUELL | 0x4020 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | aktuelle Betriebstunden in s FF FF FF FF Ungültigkeitsbez | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _BETRIEBSSTUNDENZAEHLER_PWRON | 0x4021 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebstunden in s FF FF FF FF Ungültigkeitsbez | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _BETRIEBSSTUNDENZAEHLER_FSP_LOESCHEN | 0x4022 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebstunden in s FF FF FF FF Ungültigkeitsbez | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SYSTEMZEIT_AKTUELL | 0x4025 | STAT_SYSTEMZEIT_WERT | Systemzeit in s FF FF FF FF Ungültigkeitsbez | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SYSTEMZEIT_PWRON | 0x4026 | STAT_SYSTEMZEIT_WERT | Systemzeit in s FF FF FF FF Ungültigkeitsbez | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SYSTEMZEIT_FSP_LOESCHEN | 0x4027 | STAT_SYSTEMZEIT_WERT | Systemzeit in s FF FF FF FF Ungültigkeitsbez | s | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _BORDZEIT_AKTUELL | 0x4029 | - | gibt die Uhrzeit/Datum vom Systembus zum Auslesezeitpunkt an | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4029_D |
| _BORDZEIT_PWRON | 0x402A | - | Uhrzeit Datum zum Zeitpunkt letzter Power-On | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402A_D |
| _BORDZEIT_FSP_LOESCHEN | 0x402B | - | Uhrzeit Datum zum Zeitpunkt letztes Löschen Fehlerspeicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402B_D |
| _POWER_ON_ZAHLER_AKTUELL | 0x402E | STAT_PWR_ON_WERT | Power-ON Zähler | count | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _POWER_ON_ZAEHLER_FSP_LOESCHEN | 0x402F | STAT_PWR_ON_WERT | Power-ON Zähler | count | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SICHERHEITSLASTZAEHLER | 0x4032 | - | gibt die Anzahl der pro Einschaltzyklus  uebergebenen Trigger des Sicherheitspfades (Safing) fuer den Frontairbag an | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4032_D | RES_0x4032_D |
| _SENSORFEHLER_ZAEHLER | 0x4034 | - | Enthaelt die einzelnen Fehlerzahler fuer die externen Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4034_D |
| _SENSORFEHLER_ZAEHLER_2 | 0x4035 | - | Enthaelt die einzelnen Fehlerzahler fuer die externen Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4035_D |
| _INTERNER_SG_STATUS | 0x4036 | - | gibt einige STAUTS wieder, wie Operation- und Energie-Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4036_D |
| _SENSORFEHLER_ZAEHLER_3 | 0x4037 | - | Enthaelt die einzelnen Fehlerzahler fuer die externen Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4037_D |
| _BMW_SACHNUMMER | 0x4040 | STAT_BMW_SACHNUMMER_WERT | 7 stellige Sachnummer zum Produktionszeitpunkt  BCD codiert,  führendes Nibbel immer 0 | HEX | - | high | unsigned long | - | - | - | - | - | 22 | - | - |
| _SW_MODUL_VERSION | 0x4044 | - | gibt die ID und die entsprechende Version der integrierten SW-Module wieder | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4044_D |
| _SEATBELTMIND_2 | 0x4047 | - | Interne Zustandsvariablen der Seatbeltreminderfunktion, 2. Generation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4047_D |
| _STATUS_SEATBELTMIND_3 | 0x4048 | - | Interne Zustandsvariablen der Seatbeltreminderfunktion, 3. Generation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4048_D |
| _ZK_WIDERSTANDSWERTE | 0x4050 | - | Widerstandswerte für die einzelnen Zündkreise | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4050_D |
| _SBR_WIDERSTANDSWERTE | 0x4052 | STAT_SBR_WIDERSTANDSWERTE_WERT | Widerstandswerte der SBR-Matte in 0,1 Ohm  0xFFFF ungültig | Ohm | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _HALL_FIX_STROMWERT | 0x4053 | - | gibt die Stromwerte der fest vorgegebenen Hall-Eingänge zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4053_D |
| _STATUS_FREIGABE_ZUENDKREISE | 0x4054 | - | gibt den Freigabestatus der Zündkreise aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4054_D |
| _AACN | 0x4055 | - | dient zum Ausloesen des AACN Notrufes auf der K-Lin für TCU-Test | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4055_D | RES_0x4055_D |
| _SBR_FOND_WIDERSTANDSWERTE | 0x4056 | - | Ausgabe der Widerstandswerte der Sitzmatten im Fond | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4056_D |
| _HISTORY_SPEICHER | 0x4060 | - | History-Speicher Hier werden Fehlerspeichereinträge kopiert, die gelöscht wurden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4060_D | - |
| _SW_MODUL_VERSION_SBR | 0x407A | - | gibt die entsprechende Version des integrierten SW-Moduls  SBR  wieder | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407A_D |
| _SW_MODUL_VERSION_DAC | 0x407C | - | gibt die entsprechende Version des integrierten SW-Moduls   dacDiagAlgoIdent  wieder. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407C_D |
| _SW_MODUL_VERSION_PARKMASTER | 0x407D | - | gibt die entsprechende Version des integrierten SW-Moduls  PARKMASTER  wieder | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407D_D |
| _SW_MODUL_VERSION_DMGDET | 0x407E | - | Version Unfall Schadens Management | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407E_D |
| _DD_STATUS_EVENT_CNT | 0x407F | - | Liest Status der Event Zähler DmgDet aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407F_D |
| _DD_READ_SCHADENSMELDUNG | 0x4080 | - | Liest die letzten 3 Schadensmeldungen aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4080_D |
| _DD_READ_DEV_DATA | 0x4081 | - | Liest Entwicklungsdaten der DmgDet aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4081_D |
| _DAC_DIAG_PARAM_IDENT | 0x4085 | STAT__DAC_PARAM_IDENT_WERT | Parameter-Ident | HEX | - | high | unsigned int | - | - | - | - | - | 22 | - | - |
| _PC_READ_PCR | 0x4098 | - | Lesen PreCrashRecorder | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4098_D |
| _STEUERN_EDR_DELETE_DATA_ALL | 0x4100 | - | Löscht alle Datenrecordereinträge | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4100_D | - |
| _IMU_WERTE | 0x4101 | - | Werte von den IMU Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4101_D |
| _IMU_WERTE_ERWEITERT | 0x4102 | - | Werte von den redundanten IMU Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4102_D |
| _STATUS_STEUERGERAET_TYP | 0x4104 | - | Steuergerät als Entwicklungssteuergerät deklarieren | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4104_D | RES_0x4104_D |
| _STATUS_RUECKSETZEN_SCRAPPING | 0x4105 | - | Abfrage Rücksetzen Scrapping | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4105_D | - |
| FAS_EDR_SPEICHER_LOESCHEN | 0x4106 | - | FAS_EDR_SPEICHER_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4106_D | - |
| _STEUERN_REMA_AKTUATOR | 0xF000 | - | Steuern REMA-Aktuator | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | - |
| _STEUERN_PRECRASH_AKTUATOREN | 0xF001 | - | Steuern PreCrash Aktuatoren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001_R | - |
| _STEUERN_PRECRASHRECORDER_ZURUECKSETZEN | 0xF002 | - | Setzt PreCrashRecorder zurück. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | - |
| _DAC_DIAG_RESET | 0xF004 | - | Algo Reset wird ausgeführt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF004_R | - |
| _DAC_DIAG_NVRAM | 0xF005 | - | TestModus NvRAM wird aktiviert/deaktiviert  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF005_R | - |
| _DAC_DIAG_AUSLOESEN | 0xF006 | - | Anzeige der CC-Meldung  Kaffeetasse  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF006_R | - |
| _STEUERN_SCHADENSMELDUNG | 0xF010 | - | Steuern Schadensmeldung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | - |
| _DD_RESET_EVENT_CNT | 0xF011 | - | Setzt den Status der Event Zähler DmgDet zurück | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _DTCDEBUGINFO | 0xF100 | - | Debug-Speicher für Fehler (DTC) Qualifizierung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF100_R | RES_0xF100_R |

### S_W_ZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Winterzeit |
| 0x02 | Sommerzeit |

### TAB_0X4004

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 |

### TAB_AIRBAG_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | B-Säule links |
| 0x01 | B-Säule rechts |
| 0x02 | Upfront links |
| 0x03 | Upfront rechts |
| 0x04 | Türdrucksensor links |
| 0x05 | Türdrucksensor rechts |
| 0x06 | PTS-Sensor links |
| 0x07 | PTS-Sensor rechts |
| 0x08 | PTS-Plausibilisierungssensor |
| 0x09 | C-Säule links |
| 0x0A | C-Säule rechts |
| 0x0B | FGS-Beschleunigungssensor links |
| 0x0C | FGS-Beschleunigungssensor Mitte |
| 0x0D | FGS-Beschleunigungssensor rechts |
| 0x0C | Upfront Mitte |
| 0x0E | FGS-Beschleunigungssensor Mitte mit Upfront Mitte |

### TAB_AUSWAHL_SITZ

| WERT | TEXT |
| --- | --- |
| 0 | Sitzreihe 1, links |
| 1 | Sitzreihe 1, Mitte |
| 2 | Sitzreihe 1, rechts |
| 3 | Sitzreihe 1, alle Sitze |
| 4 | Sitzreihe 2, links |
| 5 | Sitzreihe 2, Mitte |
| 6 | Sitzreihe 2, rechts |
| 7 | Sitzreihe 2, alle Sitze |
| 8 | Sitzreihe 3, links |
| 9 | Sitzreihe 3, Mitte |
| 10 | Sitzreihe 3, rechts |
| 11 | Sitzreihe 3, alle Sitze |
| 20 | alle Sitze |

### TAB_EDR_ADDRESS_FORMAT

| WERT | TEXT |
| --- | --- |
| 0x01 | 11bit normal addressing |
| 0x02 | 11bit extended addressing |
| 0x03 | 11bit mixed addressing |
| 0x04 | 29bit normal fixed addressing |
| 0x05 | 29bit mixed addressing |
| 0x06 | 29bit unique addressing |
| 0xFF | Ungültiger Wert |

### TAB_EDR_DATA_SELECT

| WERT | TEXT |
| --- | --- |
| 0x00 | all data |
| 0x01 | Static data (part I) |
| 0x02 | Dynamic data (part II) |
| 0x10 | All data (raw format) |
| 0x11 | Static data (raw format, part I) |
| 0x12 | Dynamic data (raw format, part II) |

### TAB_EDR_ENTRY_SELECT

| WERT | TEXT |
| --- | --- |
| 0x01 | EDR-Entry #1 (most recent entry) |
| 0x02 | EDR-Entry #2 |
| 0x03 | EDR-Entry #3 |
| 0x04 | EDR-Entry #4 |
| 0x05 | EDR-Entry #5 |
| 0x06 | EDR-Entry #6 |

### TAB_EDR_OPERATION_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | idle |
| 0x01 | running |
| 0x80 | completed successfully |
| 0x81 | aborted by client |
| 0x82 | aborted by detected failure |
| 0xFF | Ungültiger Wert |

### TAB_EDR_SELECTED_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserved |
| 0x01 | Calculate Signature |
| 0x02 | Calculate CRC |

### TAB_GK_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | ungegurtet (codiert + verbaut) |
| 0x01 | gegurtet (codiert + verbaut) |
| 0xFB | GK Fehler (codiert aber nicht verbaut oder Defekt) |
| 0xFC | GK Verbaufehler (nicht codiert+verbaut) |
| 0xFD | GK nicht verbaut (nicht verbaut+nicht codiert) |
| 0xFF | ungültig |

### TAB_GURTKONTAKTE

| WERT | TEXT |
| --- | --- |
| 0x01 | GK_FA |
| 0x02 | GK_BF |
| 0x03 | GK_HI_LI |
| 0x04 | GK_HI_MITTE |
| 0x05 | GK_HI_RE |
| 0x06 | GK_DRITTE_SITZREIHE_LI |
| 0x07 | GK_DRITTE_SITZREIHE_MITTE |
| 0x08 | GK_DRITTE_SITZREIHE_RE |

### TAB_MONAT_STRUC

| WERT | TEXT |
| --- | --- |
| 0x10 | Jan |
| 0x20 | Feb |
| 0x30 | Mär |
| 0x40 | Apr |
| 0x50 | Mai |
| 0x60 | Jun |
| 0x70 | Jul |
| 0x80 | Aug |
| 0x90 | Sep |
| 0xA0 | Okt |
| 0xB0 | Nov |
| 0xC0 | Dez |
| 0xF0 | ungueltig |

### TAB_OEM_IDENTIFICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserved |
| 0x01 | Reserved |
| 0x02 | Reserved |
| 0x03 | Reserved |
| 0x04 | BMW |
| 0x05 | Reserved |
| 0x06 | Reserved |
| 0x07 | Reserved |
| 0x08 | Reserved |
| 0x09 | Reserved |
| 0xFF | Ungültiger Wert |

### TAB_OPERATION_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | idle |
| 0x01 | angestossen |
| 0x80 | erfolgreich |
| 0x82 | Fehler |
| 0xFF | Ungültiger Wert |

### TAB_POS_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Stellung Airbag Off  (codiert + verbaut) |
| 0x01 | Stellung Airbag ON (codiert + verbaut) |
| 0xFB | Fehler (codiert aber nicht gesteckt oder Defekt) |
| 0xFC | Verbaufehler (nicht codiert+verbaut) |
| 0xFD | nicht verbaut (nicht verbaut+nicht codiert) |
| 0xFF | ungültig |

### TAB_SENSOR_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | in Ordnung (codiert + verbaut) |
| 0xFB | Fehler (codiert aber nicht empfangen/gesteckt oder Signal ungültig/Defekt) |
| 0xFC | Verbaufehler (nicht codiert+verbaut) |
| 0xFD | nicht verbaut (nicht verbaut+nicht codiert) |
| 0xFF | ungültig |

### TAB_SITZBELEGUNG_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht belegt (codiert + verbaut) |
| 0x01 | belegt (codiert + verbaut) |
| 0xFB | Fehler (codiert aber nicht empfangen/gesteckt oder Signal ungültig/Defekt) |
| 0xFC | Verbaufehler (nicht codiert+verbaut) |
| 0xFD | nicht verbaut (nicht verbaut+nicht codiert) |
| 0xFF | ungültig |

### TAB_SITZLEHNENVERRIEGELUNG_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Lehne nicht verriegelt (codiert + verbaut) |
| 0x01 | Lehne verriegelt (codiert + verbaut) |
| 0xFB | Fehler (codiert aber nicht empfangen oder Signal ungültig) |
| 0xFC | n/a |
| 0xFD | nicht verwendet (nicht codiert) |
| 0xFF | ungültig |

### TAB_SITZPLATZ

| WERT | TEXT |
| --- | --- |
| 0 | Sitzreihe 1, links |
| 1 | Sitzreihe 1, Mitte |
| 2 | Sitzreihe 1, rechts |
| 3 | Sitzreihe 1, alle Sitze |
| 4 | Sitzreihe 2, links |
| 5 | Sitzreihe 2, Mitte |
| 6 | Sitzreihe 2, rechts |
| 7 | Sitzreihe 2, alle Sitze |
| 8 | Sitzreihe 3, links |
| 9 | Sitzreihe 3, Mitte |
| 10 | Sitzreihe 3, rechts |
| 11 | Sitzreihe 3, alle Sitze |
| 20 | alle Sitze |

### TAB_SITZPOS_SENSOR_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sitzposition vorne (codiert + verbaut) |
| 0x01 | Sitzposition hinten (codiert + verbaut) |
| 0xFB | Fehler (codiert aber nicht gesteckt oder Defekt) |
| 0xFC | Verbaufehler (nicht codiert+verbaut) |
| 0xFD | nicht verbaut (nicht verbaut+nicht codiert) |
| 0xFF | ungültig |

### TAB_SITZPOS_SM_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sitzposition vorne (codiert + verbaut) |
| 0x01 | Sitzposition hinten (codiert + verbaut) |
| 0xFB | Fehler (codiert aber nicht empfangen oder Signal ungültig) |
| 0xFC | n/a |
| 0xFD | nicht verwendet (nicht codiert) |
| 0xFF | Ungültig |

### TAB_STEUERGERAET_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Seriensteuergeraet |
| 0x01 | Entwicklungssteuergeraet |

### TAB_ZUENDKREISE

| WERT | TEXT |
| --- | --- |
| 0x01 | Airbag Fahrer Stufe 1 |
| 0x02 | Airbag Fahrer Stufe 2 |
| 0x03 | Airbag Fahrer Vent |
| 0x04 | Airbag Beifahrer Stufe 1 |
| 0x05 | Airbag Beifahrer Stufe 2 |
| 0x06 | Airbag Beifahrer Vent |
| 0x07 | reserviert |
| 0x08 | reserviert |
| 0x09 | reserviert |
| 0x0A | Sitzairbag Fahrer |
| 0x0B | Sitzairbag Beifahrer |
| 0x0C | Sitzairbag Fahrer Ventil |
| 0x0D | Sitzairbag Beifahrer Ventil |
| 0x0E | Seitenairbag hinten links |
| 0x0F | Seitenairbag hinten rechts |
| 0x10 | Knieairbag Fahrer |
| 0x11 | Knieairbag Beifahrer |
| 0x12 | reserviert |
| 0x13 | reserviert |
| 0x14 | Automatenstrammer Fahrer |
| 0x15 | Automatenstrammer Beifahrer |
| 0x16 | Automatenstrammer hinten links |
| 0x17 | Automatenstrammer hinten rechts |
| 0x18 | Gurtschlossstrammer Fahrer |
| 0x19 | Gurtschlossstrammer Beifahrer |
| 0x1A | Endbeschlagsstrammer Fahrer |
| 0x1B | Endbeschlagsstrammer Beifahrer |
| 0x1C | Gurtkraftbegrenzer Fahrer |
| 0x1D | Gurtkraftbegrenzer Beifahrer |
| 0x1E | Gurtschlossstrammer hinten links |
| 0x1F | Gurtschlossstrammer hinten rechts |
| 0x20 | Endbeschlagstrammer hinten links |
| 0x21 | Endbeschlagstrammer hinten rechts |
| 0x22 | Aktive Kopfstütze Fahrer |
| 0x23 | Aktive Kopfstütze Beifahrer |
| 0x24 | reserviert |
| 0x25 | reserviert |
| 0x26 | Curtain links |
| 0x27 | Curtain rechts |
| 0x28 | Rolloverschutz links |
| 0x29 | Rolloverschutz rechts |
| 0x2A | Magnetischer Rolloveraktuator links |
| 0x2B | Magnetischer Rolloveraktuator rechts |
| 0x2C | Curtain hinten links |
| 0x2D | Curtain hinten rechts |
| 0x2E | Fussgängerschutz vorne links |
| 0x2F | Fussgängerschutz vorne rechts |
| 0x30 | Fussgängerschutz hinten links |
| 0x31 | Fussgängerschutz hinten rechts |
| 0x32 | reserviert |
| 0x33 | reserviert |
| 0x34 | reserviert |
| 0x35 | Windlaufairbag |
| 0x36 | Windlaufairbag Rückholer 1 |
| 0x37 | Windlaufairbag Ventil |
| 0x38 | Windlaufairbag Rückholer 2 |
| 0x39 | Windlaufairbag Ventil 2 |
| 0x3A | Hochvoltabschaltung Kanal 1 |
| 0x3B | Hochvoltabschaltung Kanal 2 |
| 0x3C | reserviert |
| 0x3D | Sicherheitsbatterieklemme |
| 0x3E | reserviert |
| 0x3F | reserviert |
| 0x40 | reserviert |
| 0x41 | reserviert |
| 0x42 | reserviert |
| 0x43 | reserviert |
| 0x44 | reserviert |
| 0x45 | reserviert |

### TAB_ZUENDKREIS_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | ZK in Ordnung (codiert+verbaut) |
| 0xFB | ZK Fehler (codiert aber nicht gesteckt oder Defekt) |
| 0xFC | ZK Verbaufehler (nicht codiert+verbaut) |
| 0xFD | ZK nicht verbaut (nicht verbaut+nicht codiert) |
| 0xFF | Ungültig |

### TAB_ZUSTAND_CIS_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | idle |
| 0x01 | angestossen |
| 0x80 | erfolgreich |
| 0x82 | Fehler |
| 0xFF | ungültig |

### UHRZEIT_STELLEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Uhrzeit durch GPS gestellt |
| 0x04 | Uhrzeit manuell gestellt |

### WOCHENTAG_STRUC

| WERT | TEXT |
| --- | --- |
| 1 | Montag |
| 2 | Dienstag |
| 3 | Mittwoch |
| 4 | Donnerstag |
| 5 | Freitag |
| 6 | Samstag |
| 7 | Sonntag |
| 15 | ungueltig |

### _GURTZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | nicht_gesteckt |
| 1 | gesteckt |
| 2 | nicht_verbaut |
| 3 | ungueltig |

### _SITZBELEGUNG_2

| WERT | TEXT |
| --- | --- |
| 0 | nicht_belegt |
| 1 | Sitz_mit_Kindersitz_belegt |
| 2 | na |
| 3 | Sitz_belegt |
| 4 | Erkennungssystem_nicht_vorhanden |
| 5 | na |
| 6 | Wert_Initialisierung |
| 7 | Signal_ungueltig |

### _SYSTEMZUSTAND_GESCHW

| WERT | TEXT |
| --- | --- |
| 0x00000000 | < 10 km/h |
| 0x01000000 | > 10km/h |
| 0x0F000000 | ungültig |

### _SYSTEMZUSTAND_KLR

| WERT | TEXT |
| --- | --- |
| 0x00000000 | KL R aus |
| 0x00000010 | KL R ein |
| 0x000000F0 | ungueltig |

### _SYSTEMZUSTAND_KL_15

| WERT | TEXT |
| --- | --- |
| 0x00000000 | KL 15 aus |
| 0x00001000 | KL 15 ein |
| 0x0000F000 | ungueltig |

### _SYSTEMZUSTAND_KL_15_W

| WERT | TEXT |
| --- | --- |
| 0x00000000 | KL 15 kein Wechsel |
| 0x00010000 | KL 15 Wechsel erfolgt |
| 0x000F0000 | ungueltig |

### _SYSTEMZUSTAND_KL_R_W

| WERT | TEXT |
| --- | --- |
| 0x00000000 | kein Wechsel |
| 0x00000100 | Wechsel erfolgt |
| 0x000000F00 | ungueltig |

### _SYSTEMZUSTAND_MOT

| WERT | TEXT |
| --- | --- |
| 0x00000000 | kein Motorstart |
| 0x00100000 | Motorstart erfolgt |
| 0x00F00000 | ungueltig |

### _SYSTEMZUSTAND_PDC

| WERT | TEXT |
| --- | --- |
| 0x00000000 | PDC laeuft nicht |
| 0x00000001 | PDC laeuft |
| 0x00000000F | ungueltig |
