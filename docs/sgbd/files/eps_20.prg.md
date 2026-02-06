# eps_20.prg

## General

|  |  |
| --- | --- |
| File | eps_20.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 81 |
| Origin | BMW EF-440 Xaver_Schillitz |
| Revision | 1.015 |
| Author | BMW EF-601 Stefan_Jurthe |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | - |  |  |
| ORIGIN | string | BMW EF-440 Xaver_Schillitz |  |  |
| REVISION | string | 1.015 |  |  |
| AUTHOR | string | BMW EF-601 Stefan_Jurthe |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.54 |  |  |
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

### _STEUERN_ROUTINE_WERK_INIT

Vorgeben eines Status UDS  : $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'STR'  = startRoutine 'STPR' = stopRoutine 'RRR'  = requestRoutineResults |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### GARAGE_DIAGNOSE_MODE

SG geht an GarageDignoseMode UDS  : $10 $61 Modus: einstellbar mit diesem Job

_No arguments._

### STATUS_LESEN_BEDATUNGSKENNLINIE

Auslesen aktuelle Kennlinie Lenkung UDS  : $22   ReadDataByIdentifier UDS  : $D7FF Aktuelle Kennlinie Modus: Default, Extended, Development, Garage Mode

_No arguments._

### PRUEFSTEMPEL_WECHSELN

Change test stamp UDS  : $22   ReadDataByIdentifier UDS  : $1000 TestStamp UDS  : $2E   WriteDataByIdentifier UDS  : $1000 TestStamp Modus: Default

_No arguments._

### HW_INDEX

HW_INDEX UDS  : $22   ReadDataByIdentifier UDS  : $F152 Sub-Parameter SGBD-Index Modus: Default

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

### ARG_0XAB56

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | - | unsigned char | - | - | 16.0 | 1.0 | 0.0 | 1.0 | 5.0 | Frequenz Pendelbewegung |
| MAX_AMPLITUDE | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Maximale Amplitude Pendelbewegung |
| NUMBER_OF_CYCLES | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 50.0 | Anzahl Pendelbewegung |

### ARG_0XAB71

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | int | - | - | 100.0 | 1.0 | 0.0 | -100.0 | 100.0 | Sollwinkel Lenkrad (relativ oder absolut) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |
| ABSOLUT_EIN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Referenz Winkel (1 = absolutes Verfahren, 0 = relatives Verfahren) |

### ARG_0XAB72

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkel Lenkrad (beidseitig) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |

### ARG_0XDB5A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

### ARG_0XDB6A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | Stufe | - | unsigned char | - | - | - | - | - | 0.0 | 14.0 | Stufe Ansteuerung E-Lüfter (0 = aus) |

### ARG_0XDBD2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023000 | Energiesparmode - aktiv | 0 |
| 0x02FF30 | Diagnosemaster - Dummy Application DTC | 1 |
| 0x482280 | Lenkgetriebe - Einfriererkennung | 0 |
| 0x482281 | Steuergerät intern - Leistungsdichtebegrenzung aufgetreten | 0 |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 |
| 0x48238E | Spannungsversorgung - Globale Überspannung | 0 |
| 0x482391 | Energiebordnetz - Bordnetzhochohmigkeit | 0 |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 |
| 0x482395 | Lenkgetriebe - Reibung zu hoch | 0 |
| 0x482399 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 |
| 0x48239C | Sensor - Lenkwinkel Index - Defekt | 0 |
| 0x4823C1 | Steuergerät intern - Minimale Reduzierung Lenkunterstützung aufgrund Unter-oder Übertemperatur | 0 |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 0 |
| 0x4823C4 | Spannungsversorgung - Minimale Reduzierung Lenkunterstützung aufgrund Lokale Unterspannung | 0 |
| 0x4823C5 | Funktion Einheit Sollwert PMA nicht korrekt | 0 |
| 0x4823C8 | Codierung - Transaktion gescheitert | 0 |
| 0x4823C9 | Codierung - Signatur fehlerhaft | 0 |
| 0x4823CA | Codierung - ungueltige Daten | 0 |
| 0x4823CB | Codierung - Steuergeraet nicht codiert | 0 |
| 0x4823CC | Codierung - Falsches Fahrzeug | 0 |
| 0x4823D0 | Flexray Bus OFF | 0 |
| 0x4823D1 | Nichtflüchtiger Speicher - allgemeiner Fehler | 0 |
| 0x4823D2 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt | 0 |
| 0x4823D3 | Spannungsversorgung - Globale Unterspannung lokal detektiert | 0 |
| 0x4823D4 | Spannungsversorgung - Globale Unterspannung | 0 |
| 0x4823D5 | Spannungsversorgung - Steuergeräte Reset | 0 |
| 0x4823E0 | Lenkgetriebe - Minimale Reduzierung Lenkunterstützung aufgrund Rattern | 0 |
| 0x4823E1 | Steuergerät intern - ZFLS - Hardware - Defekt | 0 |
| 0x4823E2 | Steuergerät intern - ZFLS - Software - Fehler | 0 |
| 0x4823E3 | Steuergerät intern - Interne  Stromversorgung Defekt | 0 |
| 0x4823E6 | Steuergerät intern - Powerpack Defekt | 0 |
| 0x4823E8 | Ruhestrom Erhöhter Ruhestrom | 0 |
| 0x4823EB | Ruhestrom Geringfügig erhöhter Ruhestrom | 0 |
| 0x4823EC | Sensor - Drehmoment - Lenkmoment - Defekt | 0 |
| 0x4823EE | Steuergerät intern - ZFLS - Hardware - EEPROM defekt | 0 |
| 0x4823F8 | Lenkgetriebe - Rattern erkannt | 0 |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 0 |
| 0x4823FB | Sensor - Rotorlage - Lenkwinkel - Nicht eingelernt | 0 |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 |
| 0x4823FD | Spannungsversorgung - Lokale Unterspannung Abschaltung Lenkunterstützung | 1 |
| 0xD5041F | Busfehler (Flexray) - Physikalischer Bus Fehler | 0 |
| 0xD50420 | Busfehler (Flexray) - Controller Fehler | 0 |
| 0xD50BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD51414 | Botschaftsfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Timeout | 1 |
| 0xD51415 | Botschaftsfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Alive | 1 |
| 0xD51428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD5142C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD5144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Ungültig | 1 |
| 0xD51458 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Timeout | 1 |
| 0xD51459 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Checksumme | 1 |
| 0xD5145A | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Alive | 1 |
| 0xD5145B | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Ungültig | 1 |
| 0xD5145C | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Undefiniert | 1 |
| 0xD51482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
| 0xD514AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD514B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD514B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD514F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD514F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD514F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD514FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD514FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD514FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD5150A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Timeout | 1 |
| 0xD51510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Ungültig | 1 |
| 0xD51511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Undefiniert | 1 |
| 0xD5158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD51590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD51591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD51744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD51746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD519AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Timeout | 1 |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Checksumme | 1 |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Alive | 1 |
| 0xD51C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Timeout | 1 |
| 0xD51C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Timeout | 1 |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Timeout | 1 |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Checksumme | 1 |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Alive | 1 |
| 0xD52C05 | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD52C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Undefiniert | 1 |
| 0xD52C1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD52C2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD52C3D | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Ungültig | 1 |
| 0xD52C3E | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Undefiniert | 1 |
| 0xD52C3F | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Ungültig | 1 |
| 0xD52C40 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Undefiniert | 1 |
| 0xD52C44 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Ungültig | 1 |
| 0xD52C45 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Undefiniert | 1 |
| 0xD52C5C | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Ungültig | 1 |
| 0xD52C5D | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Undefiniert | 1 |
| 0xD52C78 | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Qualifier | 1 |
| 0xD52C79 | Signalfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Ungültig | 1 |
| 0xD52C7A | Signalfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Undefiniert | 1 |
| 0xD52C83 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Qualifier | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | ZFLS Zeitstempel | s | - | signed long | - | - | - | - |
| 0x1701 | ZFLS Kilometerstand | km | - | signed long | - | - | - | 0 |
| 0xB008 | ZFLS TEMP_LOGIK_FILT | °C | - | unsigned char | - | - | 1 | -70 |
| 0xb033 | ZFLS Systemstatus | 0-n | - | 0xff | ZFLS_SYS_STATES | 1 | 1 | 0 |
| 0xB035 | ZFLS MOTORSOLLMOMENT_BEGRENZT | Nm | - | signed int | - | - | 1024 | 0 |
| 0xB042 | ZFLS ROTORGESCHWINDIGKEIT | rpm | - | signed int | - | - | 50 | 0 |
| 0xB052 | ZFLS UBATT_FILT | V | - | unsigned int | - | - | 64 | 0 |
| 0xB0A0 | ZFLS SPANNUNGSVERSORGUNG_STABIL | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0A1 | ZFLS SPANNUNG_AD_0 | V | - | unsigned char | - | 0,01 | 1 | 0 |
| 0xB0A2 | ZFLS SPANNUNG_AD_1 | V | - | unsigned char | - | 0,01 | 1 | 0 |
| 0xB0A3 | ZFLS ECU_5V_SPANNUNG | V | - | unsigned int | - | 0,00488759 | 1 | 0 |
| 0xB0A4 | ZFLS UBATT_UNFILT | V | - | unsigned int | - | - | 64 | 0 |
| 0xB0A5 | ZFLS UBATT_GESCHALTET | V | - | unsigned int | - | 0,024926686 | 1 | 0 |
| 0xB0A6 | ZFLS ACT_EEE_Adresse | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0A7 | ZFLS ACT_EEE_ID | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0A8 | ZFLS ACT_EEE_Laenge | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0A9 | ZFLS ACT_EEE_Offset | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0AA | ZFLS ACT_EEE_COMMAND | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0AB | ZFLS ACT_EEE_ERROR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0AC | ZFLS MOTORSTROM_PHASE_U | A | - | signed int | - | 1 | 16 | 0 |
| 0xB0AD | ZFLS MOTORSTROM_PHASE_V | A | - | signed int | - | 1 | 16 | 0 |
| 0xB0AE | ZFLS HANDMOMENT | Nm | - | signed int | - | - | 1024 | 0 |
| 0xB0AF | ZFLS MOTOR_TYP | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B0 | ZFLS ROTOR_POSITION | ° | - | unsigned int | - | 360 | 4096 | 0 |
| 0xB0B1 | ZFLS UNUSED_NVS_ADDR | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0B2 | ZFLS RAM_ADDR | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0B3 | ZFLS RAMEAD | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0B4 | ZFLS RAMEDLR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B5 | ZFLS NVS_ERR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B6 | ZFLS NVS_CRCCHECK_FIN | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B7 | ZFLS MOMENT_SENS_SINUS | - | - | signed int | - | 100 | 1024 | 0 |
| 0xB0B8 | ZFLS MOMENT_SENS_TYP | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B9 | ZFLS MOMENT_SENS_RADIUS | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0BA | ZFLS LA_REG_WERT | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BB | ZFLS INIT_REG_WERT | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BC | ZFLS MOMENT_SENS_ERROR_TYPE | - | - | signed int | - | - | 1 | 0 |
| 0xB0BD | ZFLS MOMENT_SENS_SPANNUNGSSTATUS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BE | ZFLS MOMENT_SENS_STATUS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BF | ZFLS ERR_ID_LEVEL1 | - | - | unsigned int | - | - | 1 | 0 |
| 0xb0c0 | ZFLS Fehlercode | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c1 | ZFLS Fehlerart | dec | - | unsigned int | - | 1 | 1 | 0 |
| 0xb0c2 | ZFLS Statuswort | 0/1 | - | 0xffff | - | 1 | 1 | 0 |
| 0xb0c3 | ZFLS Fehlerhäufigkeit | text | - | 1 | - | 1 | 1 | 0 |
| 0xb0c4 | ZFLS Rückwärtszähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c5 | ZFLS Sequenzzähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xB0D0 | ZFLS POS_VAL_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D1 | ZFLS NEG_VAL_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D2 | ZFLS UPPER_LIM_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D3 | ZFLS LOWER_LIM_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D4 | ZFLS ERR_ID_LEVEL2 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D5 | ZFLS PWM_0 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D6 | ZFLS PWM_1 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D7 | ZFLS PWM_2 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D8 | ZFLS PWD_0 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D9 | ZFLS PWD_1 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0DA | ZFLS PWD_2 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0DB | ZFLS SPI_TRANS_IN_PROGRESS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0DC | ZFLS ROTOR_POS_SIN_MAIN | V | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0DD | ZFLS ROTOR_POS_COS_MAIN | V | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0DE | ZFLS ROTOR_POS_VOLT_HALL1 | V | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0DF | ZFLS ROTOR_POS_VOLT_HALL2 | V | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0E0 | ZFLS ROTOR_POS_HALL | ° | - | unsigned int | - | 0,08789063 | 1 | 0 |
| 0xB0E1 | ZFLSSTATUS_UNTERSPANNUNG_UEBERSPANNUNG | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xB0E2 | ZFLS ROMEAD | - | - | signed long | - | - | 1 | 0 |
| 0xB0E3 | ZFLS RETRY_COUNTER | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E4 | ZFLS TOTALRETRY_COUNTER | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0E5 | ZFLS OSMON_RESTART_REASON | - | - | unsigned long | - | - | 1 | 0 |
| 0xB0E6 | ZFLS ASCSENSI_SCSV | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E7 | ZFLS DUMMYILWS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E8 | ZFLS ASCSENSI_CRUNDERVOLT | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E9 | ZFLS ASCSENSI_ROTCNTERR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0EA | ZFLS ASCSENSI_ROTCNTSIN | - | - | signed int | - | - | 1 | 0 |
| 0xB0EB | ZFLS ASCSENSI_ROTCNTCOS | - | - | signed int | - | - | 1 | 0 |
| 0xb0ec | DEM_EC_DID_ZFLS_ASCWDI_ERRCNT | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0ed | DEM_EC_DID_ZFLS_ASCWDI_STWDCOM | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0ee | DEM_EC_DID_ZFLS_ASCWDI_SCNT | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0ef | DEM_EC_DID_ZFLS_ASCWDI_TERRCNT | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f0 | DEM_EC_DID_ZFLS_ASCWDTHR | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f1 | DEM_EC_DID_ZFLS_CHARGEPUMP | - | - | unsigned int | - | - | 64 | 0 |
| 0xb0f2 | DEM_EC_DID_ZFLS_GETOUTPUTSTATE | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f3 | DEM_EC_DID_ZFLS_GETREQULOF | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f4 | DEM_EC_DID_ZFLS_GETDIA1 | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f5 | DEM_EC_DID_ZFLS_GETDIA2 | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f6 | DEM_EC_DID_ZFLS_RACKPOS | - | - | signed int | - | - | 128 | 0 |
| 0xb0f7 | DEM_EC_DID_ZFLS_CONVERSION_FACT | - | - | signed int | - | - | 1 | 0 |
| 0xb0f8 | ZFLS Level2 Überwachungsfehler Lenkwinkel - fRackPo_Level2Error_xdu8 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0f9 | ZFLS Lenkwinkel berechnet aus Rotorwinkel | ° | - | signed int | - | 0,1 | 1 | 0 |
| 0xb0fa | ZFLS Wert des DIA1_REG - Status des Index Signals - sAscSensI_IndexDiagl | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fb | ZFLS Wert des Index Signal - sAscSensI_IndexSignal | 0/1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fc | ZFLS AscCtrlI_GetTEST1_Finish - Register | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fd | ZFLS AscCtrlI_GetDIA3_Finish - Register | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fe | ZFLS AscCtrlI_GetSASSTATE_REG - Register | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xc000 | ZFLS Statuswort: CARB confirmed | 0/1 | - | 0x0100 | - | 1 | 1 | 0 |
| 0xc001 | ZFLS Statuswort: CARB pending | 0/1 | - | 0x0080 | - | 1 | 1 | 0 |
| 0xc002 | ZFLS Statuswort: Schattenfehler | 0/1 | - | 0x0040 | - | 1 | 1 | 0 |
| 0xc003 | ZFLS Statuswort: sporadischer Fehler | 0/1 | - | 0x0020 | - | 1 | 1 | 0 |
| 0xc004 | ZFLS Statuswort: Ersatzfunktion aktiv | 0/1 | - | 0x0010 | - | 1 | 1 | 0 |
| 0xc005 | ZFLS Statuswort: Fehler aktiv | 0/1 | - | 0x0008 | - | 1 | 1 | 0 |
| 0xc006 | ZFLS Statuswort: im aktuellen Zyklus erkannt | 0/1 | - | 0x0004 | - | 1 | 1 | 0 |
| 0xc007 | ZFLS Statuswort: Störung vorhanden | 0/1 | - | 0x0002 | - | 1 | 1 | 0 |
| 0xc008 | ZFLS Statuswort: Prüfbedingung erreicht | 0/1 | - | 0x0001 | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x482380 | Nichtflüchtiger Speicher - Loeschen gescheitert | 0 |
| 0x482381 | Nichtflüchtiger Speicher - Schreiben gesamt gescheitert | 0 |
| 0x482382 | Nichtflüchtiger Speicher - Lesen gesamt gescheitert | 0 |
| 0x482383 | Nichtflüchtiger Speicher - Falsche Config-ID | 0 |
| 0x482384 | Flash - Vergleich gescheitert | 0 |
| 0x482385 | Flash - Loeschen gescheitert | 0 |
| 0x482386 | Flash - Lesen gescheitert | 0 |
| 0x482387 | Flash - Schreiben gescheitert | 0 |
| 0x482389 | Nichtflüchtiger Speicher - Schreiben gescheitert | 0 |
| 0x48238A | Nichtflüchtiger Speicher - Lesen gescheitert | 0 |
| 0x48238B | Nichtflüchtiger Speicher - Kontrolle gescheitert | 0 |
| 0x4823C8 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x4823C9 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x4823CA | CODING_EVENT_INVALID_DATA | 0 |
| 0x4823CB | Codierung - Steuergeraet nicht codiert | 0 |
| 0x4823CC | CODING_EVENT_WRONG_VEH | 0 |
| 0x4823CD | Diagnosemaster - Ausfall Relativzeit | 1 |
| 0x4823CE | Diagnosemaster - Warteschlange voll | 0 |
| 0x4823CF | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x482401 | Sensor - Drehmoment - Lenkmoment - Defekt: Lenkmomentensensor 1 | 0 |
| 0x482402 | Sensor - Drehmoment - Lenkmoment - Defekt: Lenkmomentensensor 2 | 0 |
| 0x482403 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: read job failed complete | 0 |
| 0x482404 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: write job failed complete | 0 |
| 0x482405 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: Flash not formatted with initial data | 0 |
| 0x482407 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: Flash Problem in DFALib | 0 |
| 0x482408 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: Action not possible | 0 |
| 0x482409 | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: Something was wrong while a write Process | 0 |
| 0x48240A | Steuergerät intern - ZFLS - Hardware - EEPROM defekt: Something was wrong while a write Process | 0 |
| 0x48240B | Spannungsversorgung - Lokale Überspannung Reduzierung Lenkunterstützung | 0 |
| 0x48240C | Steuergerät intern - ZFLS - Hardware - Defekt: Fehler des Endstufentreiberbausteins | 0 |
| 0x48240D | Steuergerät intern - ZFLS - Hardware - Defekt: Abschaltpfad defekt | 0 |
| 0x48240E | Steuergerät intern - ZFLS - Software - Fehler: Watch Dog | 0 |
| 0x48240F | Steuergerät intern - ZFLS - Software - Fehler: Vergleicher Level 1 | 0 |
| 0x482410 | Steuergerät intern - ZFLS - Software - Fehler: Vergleicher Level 2 | 0 |
| 0x482411 | Steuergerät intern - ZFLS - Hardware - Defekt: Fehler bei der Spannungsüberwachung (ex. Referenzüberwachung an ADC-Input) | 0 |
| 0x482412 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 0 |
| 0x482413 | Spannungsversorgung - Globale Unterspannung lokal detektiert | 0 |
| 0x482414 | Steuergerät intern - ZFLS - Hardware - Defekt: RAM | 0 |
| 0x482415 | Steuergerät intern - ZFLS - Hardware - Defekt: SPI Communikation timeout | 0 |
| 0x482416 | Steuergerät intern - ZFLS - Hardware - Defekt: SPI Communikation Sync Register | 0 |
| 0x482417 | Steuergerät intern - ZFLS - Hardware - Defekt: Fehler bei Pulsweitendemodualtion | 0 |
| 0x482418 | Steuergerät intern - ZFLS - Software - Fehler: Programmablaufüberwachung | 0 |
| 0x482419 | Sensor - Drehmoment - Lenkmoment - Defekt: Keine Daten vom DMS empfangen (Pre Drive) | 0 |
| 0x48241A | Sensor - Drehmoment - Lenkmoment - Defekt: Radiusfehler Momentensensor | 0 |
| 0x48241B | Faktorenschnittstelle Fehler erkannt | 0 |
| 0x48241C | Steuergerät intern - ZFLS - Software - Fehler: FOR Laufzeit zur Berechnung von neuen PWM Werte zu lang | 0 |
| 0x48241D | Steuergerät intern - ZFLS - Software - Fehler: Programmablauf falsche Teilantwort | 0 |
| 0x48241E | Steuergerät intern - ZFLS - Hardware - Defekt: Core self test (Library von NEC) | 0 |
| 0x48241F | Steuergerät intern - ZFLS - Hardware - Defekt: Registertest | 0 |
| 0x482420 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung: Endstufentemperatur zu hoch | 0 |
| 0x482421 | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 0 |
| 0x482422 | Lenkgetriebe - Rattern erkannt | 0 |
| 0x482423 | Steuergerät intern - ZFLS - Hardware - Defekt: ROM | 0 |
| 0x482424 | Steuergerät intern - ZFLS - Software - Fehler: Allgemeiner Programmfehler (default Zweig) | 0 |
| 0x482425 | Steuergerät intern - Powerpack Defekt: Phasenabrisserkennung | 0 |
| 0x482426 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt: Winkelfehler Rotorlage | 0 |
| 0x482427 | Steuergerät intern - Powerpack Defekt: Polradspannung Winkeldiagnose | 0 |
| 0x482428 | Steuergerät intern - Powerpack Defekt: Polradspannung Betragsdiagnose | 0 |
| 0x482429 | Flexray Bus OFF | 0 |
| 0x48242A | Fehler Parkassistent erkannt | 0 |
| 0x48242B | Abschaltung aufgrund von Überspannung | 0 |
| 0x48242C | Abschaltung aufgrund von Unterspannung | 0 |
| 0x48242E | Abschaltung aufgrund Überspannungsreduzierung | 0 |
| 0x482430 | Steuergerät intern - Leistungsdichtebegrenzung aufgetreten | 0 |
| 0x482431 | Interne Busfehlererkennung - Degradation wegen fehlender Botschaft V_VEH | 0 |
| 0x482432 | Plausibilisierung der KL15 über Flexray-Botschaft: Fehlerhaftes Wecken durch KL15 erfolgt | 0 |
| 0x482433 | EPS interner Fehler. UBS-Schalter fehlerhaft durchgeschaltet. Stark erhöhter Ruhestrombedarf. | 0 |
| 0x482434 | EPS interner Fehler. Ruhestromaufnahme ist geringfügig erhöht.“ | 0 |
| 0x482435 | Lenkgetriebe - Einfriererkennung | 0 |
| 0x482436 | Spannungsversorgung - Steuergeräte Reset: Klemme 30 Verlust, Unterspannung, SW Fehler | 0 |
| 0x482437 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt: RotorLage Sensor Radius Überwachung | 0 |
| 0x482438 | Steuergerät intern - Interne  Stromversorgung Defekt: Plausiblisierung KL30 12 V | 0 |
| 0x482439 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt: Abweichung AMR Winkel zu Hall Winkel zur groß (Redunante Winkelberechnung) | 0 |
| 0x48243A | Energiebordnetz - Bordnetzhochohmigkeit | 0 |
| 0x48243B | Überwachungsroutine für Betriebssystem hat Fehler erkannt | 0 |
| 0x48243C | SPI Bit im ASIC zeigt unerlaubten Wert | 0 |
| 0x48243D | Clock monitor hat einen nicht korrekten Systemtakt erkannt | 0 |
| 0x482448 | Stromoffset Plausibilisierung fehlgeschlagen | 0 |
| 0x482449 | Lenkwinkel Plausibilisierung fehlgeschlagen | 0 |
| 0x48244B | Reibungserkennung hat Fehler erkannt | 0 |
| 0x48244C | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 0 |
| 0x48244D | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert aufgrund Unterbrechung KL30 | 0 |
| 0x48244E | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert Index noch nicht gefunden | 0 |
| 0x48244F | Sensor - Lenkwinkel Index - Defekt Index Position unplausibel | 0 |
| 0x482450 | Sensor - Lenkwinkel Index - Defekt | 0 |
| 0x482454 | Lenkgetriebe - Reibung zu hoch | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | ZFLS Zeitstempel | s | - | signed long | - | - | - | - |
| 0x1701 | ZFLS Kilometerstand | km | - | signed long | - | - | - | 0 |
| 0x55FF | ZFLS Geschwindigkeit: | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x5600 | ZFLS HANDMOMENT 2: | Nm | - | signed char | - | 0,0859375 | 1 | 0 |
| 0xB008 | ZFLS TEMP_LOGIK_FILT | °C | - | unsigned char | - | - | 1 | -70 |
| 0xb033 | ZFLS Systemstatus | 0-n | - | 0xff | ZFLS_SYS_STATES | 1 | 1 | 0 |
| 0xB035 | ZFLS MOTORSOLLMOMENT_BEGRENZT | Nm | - | signed int | - | - | 1024 | 0 |
| 0xB042 | ZFLS ROTORGESCHWINDIGKEIT | rpm | - | signed int | - | - | 50 | 0 |
| 0xB052 | ZFLS UBATT_FILT | V | - | unsigned int | - | - | 64 | 0 |
| 0xB0A0 | ZFLS SPANNUNGSVERSORGUNG_STABIL | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0A1 | ZFLS SPANNUNG_AD_0 | V | - | unsigned char | - | 0,01 | 1 | 0 |
| 0xB0A2 | ZFLS SPANNUNG_AD_1 | V | - | unsigned char | - | 0,01 | 1 | 0 |
| 0xB0A3 | ZFLS ECU_5V_SPANNUNG | V | - | unsigned int | - | 0,00488759 | 1 | 0 |
| 0xB0A4 | ZFLS UBATT_UNFILT | V | - | unsigned int | - | - | 64 | 0 |
| 0xB0A5 | ZFLS UBATT_GESCHALTET | V | - | unsigned int | - | 0,024926686 | 1 | 0 |
| 0xB0A6 | ZFLS ACT_EEE_Adresse | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0A7 | ZFLS ACT_EEE_ID | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0A8 | ZFLS ACT_EEE_Laenge | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0A9 | ZFLS ACT_EEE_Offset | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0AA | ZFLS ACT_EEE_COMMAND | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0AB | ZFLS ACT_EEE_ERROR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0AC | ZFLS MOTORSTROM_PHASE_U | A | - | signed int | - | 0,00625 | 1 | 0 |
| 0xB0AD | ZFLS MOTORSTROM_PHASE_V | A | - | signed int | - | 0,00625 | 1 | 0 |
| 0xB0AE | ZFLS HANDMOMENT | Nm | - | signed int | - | 0,0009765625 | 1 | 0 |
| 0xB0AF | ZFLS MOTOR_TYP | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B0 | ZFLS ROTOR_POSITION | ° | - | unsigned int | - | 360 | 4096 | 0 |
| 0xB0B1 | ZFLS UNUSED_NVS_ADDR | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0B2 | ZFLS RAM_ADDR | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0B3 | ZFLS RAMEAD | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0B4 | ZFLS RAMEDLR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B5 | ZFLS NVS_ERR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B6 | ZFLS NVS_CRCCHECK_FIN | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B7 | ZFLS MOMENT_SENS_SINUS | - | - | signed int | - | 100 | 1024 | 0 |
| 0xB0B8 | ZFLS MOMENT_SENS_TYP | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0B9 | ZFLS MOMENT_SENS_RADIUS | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0BA | ZFLS LA_REG_WERT | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BB | ZFLS INIT_REG_WERT | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BC | ZFLS MOMENT_SENS_ERROR_TYPE | - | - | signed int | - | - | 1 | 0 |
| 0xB0BD | ZFLS MOMENT_SENS_SPANNUNGSSTATUS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BE | ZFLS MOMENT_SENS_STATUS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0BF | ZFLS ERR_ID_LEVEL1 | - | - | unsigned int | - | - | 1 | 0 |
| 0xb0c0 | ZFLS Fehlercode | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c1 | ZFLS Fehlerart | dec | - | unsigned int | - | 1 | 1 | 0 |
| 0xb0c2 | ZFLS Statuswort | 0/1 | - | 0xffff | - | 1 | 1 | 0 |
| 0xb0c3 | ZFLS Fehlerhäufigkeit | text | - | 1 | - | 1 | 1 | 0 |
| 0xb0c4 | ZFLS Rückwärtszähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c5 | ZFLS Sequenzzähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xB0D0 | ZFLS POS_VAL_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D1 | ZFLS NEG_VAL_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D2 | ZFLS UPPER_LIM_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D3 | ZFLS LOWER_LIM_LEVEL1 | - | - | signed int | - | - | 1 | 0 |
| 0xB0D4 | ZFLS ERR_ID_LEVEL2 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D5 | ZFLS PWM_0 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D6 | ZFLS PWM_1 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D7 | ZFLS PWM_2 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D8 | ZFLS PWD_0 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0D9 | ZFLS PWD_1 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0DA | ZFLS PWD_2 | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0DB | ZFLS SPI_TRANS_IN_PROGRESS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0DC | ZFLS ROTOR_POS_SIN_MAIN | ticks | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0DD | ZFLS ROTOR_POS_COS_MAIN | ticks | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0DE | ZFLS ROTOR_POS_VOLT_HALL1 | ticks | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0DF | ZFLS ROTOR_POS_VOLT_HALL2 | ticks | - | unsigned int | - | 3,3 | 1023 | 0 |
| 0xB0E0 | ZFLS ROTOR_POS_HALL | ° | - | unsigned int | - | 0,08789063 | 1 | 0 |
| 0xB0E1 | ZFLSSTATUS_UNTERSPANNUNG_UEBERSPANNUNG | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xB0E2 | ZFLS ROMEAD | - | - | signed long | - | - | 1 | 0 |
| 0xB0E3 | ZFLS RETRY_COUNTER | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E4 | ZFLS TOTALRETRY_COUNTER | - | - | unsigned int | - | - | 1 | 0 |
| 0xB0E5 | ZFLS OSMON_RESTART_REASON | - | - | unsigned long | - | - | 1 | 0 |
| 0xB0E6 | ZFLS ASCSENSI_SCSV | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E7 | ZFLS DUMMYILWS | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E8 | ZFLS ASCSENSI_CRUNDERVOLT | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0E9 | ZFLS ASCSENSI_ROTCNTERR | - | - | unsigned char | - | - | 1 | 0 |
| 0xB0EA | ZFLS ASCSENSI_ROTCNTSIN | - | - | signed int | - | - | 1 | 0 |
| 0xB0EB | ZFLS ASCSENSI_ROTCNTCOS | - | - | signed int | - | - | 1 | 0 |
| 0xb0ec | DEM_EC_DID_ZFLS_ASCWDI_ERRCNT | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0ed | DEM_EC_DID_ZFLS_ASCWDI_STWDCOM | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0ee | DEM_EC_DID_ZFLS_ASCWDI_SCNT | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0ef | DEM_EC_DID_ZFLS_ASCWDI_TERRCNT | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f0 | DEM_EC_DID_ZFLS_ASCWDTHR | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f1 | DEM_EC_DID_ZFLS_CHARGEPUMP | - | - | unsigned int | - | - | 64 | 0 |
| 0xb0f2 | DEM_EC_DID_ZFLS_GETOUTPUTSTATE | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f3 | DEM_EC_DID_ZFLS_GETREQULOF | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f4 | DEM_EC_DID_ZFLS_GETDIA1 | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f5 | DEM_EC_DID_ZFLS_GETDIA2 | - | - | unsigned char | - | - | 1 | 0 |
| 0xb0f6 | DEM_EC_DID_ZFLS_RACKPOS | - | - | signed int | - | - | 128 | 0 |
| 0xb0f7 | DEM_EC_DID_ZFLS_CONVERSION_FACT | - | - | signed int | - | - | 1 | 0 |
| 0xb0f8 | ZFLS Level2 Überwachungsfehler Lenkwinkel - fRackPo_Level2Error_xdu8 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0f9 | ZFLS Lenkwinkel berechnet aus Rotorwinkel | ° | - | signed int | - | 0,1 | 1 | 0 |
| 0xb0fa | ZFLS Wert des DIA1_REG - Status des Index Signals - sAscSensI_IndexDiagl | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fb | ZFLS Wert des Index Signal - sAscSensI_IndexSignal | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fc | ZFLS AscCtrlI_GetTEST1_Finish - Register | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fd | ZFLS AscCtrlI_GetDIA3_Finish - Register | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0fe | ZFLS AscCtrlI_GetSASSTATE_REG - Register | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xc000 | ZFLS Statuswort: CARB confirmed | 0/1 | - | 0x0100 | - | 1 | 1 | 0 |
| 0xc001 | ZFLS Statuswort: CARB pending | 0/1 | - | 0x0080 | - | 1 | 1 | 0 |
| 0xc002 | ZFLS Statuswort: Schattenfehler | 0/1 | - | 0x0040 | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### MOMENTENSENSOR_HERSTELLER

| WERT | TEXT |
| --- | --- |
| 0 | Bourns |
| 1 | Valeo |

### RES_0X5001

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UBAT_WERT | V | - | unsigned int | - | - | 1 | 64 | 0 | Versorgungsspannung |
| STAT_KLEMME_15N | 0-n | - | unsigned char | 0x01 | TAB_EPS_KLEMME_15N | - | - | - | Status Zündung |
| STAT_KLEMME_15N_FLX | 0-n | - | unsigned char | 0x0F | TAB_ST_KL_15N | - | - | - | Status Klemme 15N auf Flexray |
| STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1 | 1 | 0 | Fahrzeuggeschwindigkeit Wert |
| STAT_FAHRZEUGGESCHWINDIGKEIT_QUALIFIER | 0-n | - | unsigned char | 0x0F | TAB_QU_FAHRZEUGGESCHW | - | - | - | Fahrzeuggeschwindigkeit Qualifier |
| STAT_V_VEH_NSS | 0-n | - | unsigned char | 0x0F | TAB_V_VEH_NSS | - | - | - | Geschwindigkeit Fahrzeug stillstandsnah |
| STAT_ANTRIEB_FZG | 0-n | - | unsigned char | - | TAB_ST_DRV_VEH | - | - | - | Zustand des Verbrennungsmotors |
| STAT_SPANNUNG_IBS_WERT | V | - | unsigned int | - | - | 1 | 1000 | 0 | Vom IBS gemessene Bordnetzspannung gegen Masse |
| STAT_IST_STROM_GENERATOR_ANTRIEB_WERT | A | - | unsigned char | - | - | 1 | 1 | 0 | Vom Generator gelieferter Strom |
| STAT_STROM_IBS_WERT | A | - | unsigned int | - | - | 2 | 100 | -200 | Mit diesem Signal wird der Batteriestrom erfasst |
| STAT_VORGABE_LEISTUNG_WERT | kW | - | unsigned int | - | - | 1 | 10 | -12 | Stromreduktion über FlexRay |
| STAT_SOLL_PMA_WERT | mm | - | unsigned int | - | - | 9 | 1024 | -288 | Soll-Vorgabe für die EPS über FlexRay |
| STAT_SOLLWERT_PMA_EINHEIT | 0-n | - | unsigned char | 0x03 | TAB_UN_TARVL_PMA | - | - | - | Einheit zum Signal Sollwert_PMA |
| STAT_SOLLWERT_PMA_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_TARVL_PMA | - | - | - | Qualifier zum Signal Sollwert_PMA |
| STAT_SPERRE_FEHLERSPEICHER_FZM | 0-n | - | unsigned char | 0x03 | TAB_ST_ILK_ERRM_FZM | - | - | - | Status Sperre Fehlerspeicher FZM |
| STAT_ANFORDERUNG_KONFIGURATION_SCHALTER_FAHRDYNAMIK | 0-n | - | unsigned int | - | TAB_RQ_SU_SW_DRD | - | - | - | Fahrdynamikschalterkonfiguration |
| STAT_OFFSET_QUADRANT_EPS | 0-n | - | unsigned char | 0x0F | TAB_ST_OFFS_QUAD_EPS | - | - | - | Status des Offsetwerts von Aufsetzalgorithmus |
| STAT_OFFSET_QUADRANT_ROTOR_EPS_WERT | Umdrehungen | - | unsigned char | - | - | 1 | 1 | -127 | Mittels Aufsetzalgorithmus ermittelter Offset des aktuellen Nullpunktes der EPS-Position |
| STAT_IST_POSITION_INDEX_ICM_WERT | mm | - | unsigned int | - | - | 9 | 1024 | -288 | Rücksenden des von der EPS übertragenen Wertes von Ist_Position_Index_EPS, sofern mit Hilfe des Index-Signals aufgesetzt werden konnte |
| STAT_SOLLANTEIL_LENKMOMENT_FAHRER_WERT | Nm | - | unsigned int | - | - | 5 | 1000 | -10 | Offset-Handmoment des Lenkrades, das im Gegenuhrzeigersinn positiv gezählt wird |
| STAT_SOLLANTEIL_LENKMOMENT_FAHRER_QUALIFIER | 0-n | - | unsigned char | 0xF | TAB_QU_TAR_QTA_STMOM_DV | - | - | - | Qualifier zum Signal Soll_Anteil_Lenkmoment_Fahrer |
| STAT_FAKTOR_ZENTRIERUNG_LENKMOMENT_VORDERACHSE_WERT | Faktor | - | unsigned char | - | - | 1 | 256 | 0,0078125 | Dieser Faktor wird als Multiplikator für den Steuerung des Aktiven Rücklaufs benötigt |
| STAT_FAKTOR_DAEMPFUNG_LENKMOMENT_VORDERACHSE_WERT | Faktor | - | unsigned char | - | - | 1 | 256 | 0,0078125 | Dieser Faktor wird als Multiplikator für den Steuerung des Aktiven Rücklaufs benötigt |
| STAT_FAKTOR_UNTERSTUETZUNG_LENKMOMENT_VORDERACHSE_WERT | Faktor | - | unsigned char | - | - | 1 | 256 | 1 | Dieser Faktor wird als Multiplikator für den Steuerung der Lenkunterstützungsberechnung benötigt |
| STAT_SOLL_FAKTOR_LENKMOMENT_VORDERACHSE_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_TAR_FACT_STMOM_FTAX | - | - | - | Qualifier zu den Signalen Faktor_Unterstützung_Lenkmoment_Vorderachse, Faktor_Dämpfung_Lenkmoment_Vorderachse, Faktor_Zentrierung_Lenkmoment_Vorderachse |
| STAT_SOLL_LENKMOMENT_FAHRER_STELLGLIED_WERT | Nm | - | unsigned int | - | - | 6 | 1000 | -12 | Gestelltes Motormoment für den EPS Aktuator |
| STAT_SOLL_LENKMOMENT_FAHRER_STELLGLIED_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_TAR_STMOM_DV_ACT | - | - | - | Qualifier zum Signal Soll_Lenkmoment_Fahrer_Stellglied |
| STAT_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1 | 1 | 0 | Dieser Zähler zählt synchron zur System- / Borduhr die Sekunden |
| STAT_KM_STAND_WERT | km | - | unsigned long | - | - | 1 | 1 | 0 | Kilometerstand |

### RES_0X5002

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTERSTUFE_WERT | Stufe | - | unsigned char | - | - | 1 | 1 | 0 | Lüfterstufe |
| STAT_FEHLERLAMPE | 0-n | - | unsigned char | 0x1 | TAB_FEHLERLAMPE | - | - | - | Zustand Fehlerlampe |
| STAT_MOTOR_SOLLMOMENT_WERT | Nm | - | signed int | - | - | 1 | 1024 | 0 | Aufsummiertes und geregeltes Motormoment |
| STAT_MOTOR_SOLLMOMENT_RED_WERT | Nm | - | signed int | - | - | 1 | 1024 | 0 | Begrenztes Motormoment durch Momentenkoordinator |
| STAT_REDUKTIONSFAKTOR_WERT | Faktor | - | unsigned int | - | - | 100 | 32768 | 0 | Faktor zur Begrenzung des Motormoments |
| STAT_IST_LENKMOMENT_FAHRER_STELLGLIED_WERT | Nm | - | unsigned int | - | - | 5 | 1000 | -10 | Das Signal Ist_Lenkmoment_Fahrer stellt das Fahrerlenkmoment im Gegenuhrzeigersinn positiv dar |
| STAT_IST_LENKMOMENT_FAHRER_STELLGLIED_QUALIFIER | 0-n | - | unsigned char | 0x0F | TAB_QU_AVL_STMOM_DV_ACT | - | - | - | Erweiterter Status Qualifier zum Signal Ist_Lenkmoment_Fahrer_Stellglied |
| STAT_RITZELWINKELSCHNITTSTELLE_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_SER_PINA_EST_FTAX | - | - | - | Service-Qualifier zum Stellen des Ritzelwinkels für den Parkassistent |
| STAT_FAHRDYNAMIKSCHNITTSTELLE_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_SER_STMOM_DV_ACT | - | - | - | Service Qualifier für die Fahrdynamikschnittstelle |
| STAT_IST_POSITION_EPS_WERT | mm | - | unsigned int | - | - | 9 | 1024 | -288 | Relative Position, berechnet aus dem aufintegrierten EPS-Rotorlagewinkel, bezogen auf den aktuellen Nullpunkt der EPS |
| STAT_IST_POSITION_EPS_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_AVL_PO_EPS | - | - | - | Qualifier zum Signal Ist_Position_EPS |
| STAT_IST_KRAFT_ZAHNSTANGE_WERT | kN | - | unsigned int | - | - | 84 | 10000 | -17 | Zahnstangenkraft; aus dem Zustandsbeobachter geschätzte Größe |
| STAT_IST_LEISTUNG_ELEKTRISCH_EPS_WERT | kW | - | unsigned char | - | - | 1 | 10 | -12 | aufgenommene elektr.Leistung EPS Koordinator |
| STAT_IST_KRAFT_ZAHNSTANGE_QUALIFIER | 0-n | - | unsigned char | - | TAB_QU_AVL_FORC_GRD | - | - | - | Erweiterter Qualifier zum Signal Ist_Kraft_Zahnstange |
| STAT_GESAMT_LENKUEBERSETZUNG_EPS_WERT | - | - | unsigned int | - | - | 12213 | 1000000 | 0 | Gesamt Lenkübersetzung EPS - Zahnstangenhub |

### RES_0X5003

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_ECU_EPS_WERT | °C | - | unsigned char | - | - | 1 | 1 | -70 | Gefilterte Temperatur Leiterplatte |
| STAT_TEMP_PCU_EPS_WERT | °C | - | unsigned char | - | - | 1 | 1 | -70 | Gefilterte Temperatur Endstufe |
| STAT_SYSTEM_STATE | 0-n | - | unsigned char | - | TAB_SYSTEM_STATE | - | - | - | Zustand der EPS state machine |
| STAT_BASIS_LENKMOMENT_WERT | Nm | - | signed int | - | - | 1 | 1024 | 0 | gemessenes Lenkmoment |
| STAT_V_VEH_INTERN_WERT | km/h | - | unsigned char | - | - | 1 | 1 | 0 | interne Fahrzeuggeschwindigkeit |
| STAT_REIBMOMENT_WERT | Nm | - | unsigned int | - | - | 1 | 1024 | 0 | Reibungsmoment |
| STAT_WIDERSTAND_ZULEITUNG_WERT | Ohm | - | unsigned int | - | - | 1 | 1 | 0 | Zuleitungswiderstand |
| STAT_SPORTSCHALTER | 0-n | - | unsigned char | - | TAB_SPORTSCHALTER | - | - | - | Status Sportschalter |
| STAT_PRODUKTIONSSCHALTER | 0-n | - | unsigned char | 0x1 | TAB_PRODUKTIONSSCHALTER | - | - | - | Status Produktionsschalter |
| STAT_ZFLS_SW_KENNUNG_BASIS | 0-n | - | unsigned long | - | TAB_ZFLS_SW_KENNUNG_BASIS | - | - | - | ZFLS Softwarebezeichnung Basis |
| STAT_ZFLS_SW_KENNUNG_VARIANTE | 0-n | - | unsigned long | - | TAB_ZFLS_SW_KENNUNG_VARIANTE | - | - | - | ZFLS Softwarebezeichnung Variante |
| STAT_ZFLS_SW_KENNUNG_SAMPLE | 0-n | - | unsigned char | - | TAB_ZFLS_SW_KENNUNG_SAMPLE | - | - | - | ZFLS Softwarebezeichnung Sample |
| STAT_ZFLS_SW_KENNUNG_SW_VERSION | 0-n | - | unsigned long | - | TAB_ZFLS_SW_KENNUNG_VERSION | - | - | - | ZFLS Softwarebezeichnung Version |
| STAT_ZFLS_SW_KENNUNG_MAJOR | 0-n | - | unsigned int | - | TAB_ZFLS_SW_KENNUNG_MAJOR | - | - | - | ZFLS Softwarebezeichnung Major |
| STAT_ZFLS_SW_KENNUNG_MINOR | 0-n | - | unsigned long | - | TAB_ZFLS_SW_KENNUNG_MINOR | - | - | - | ZFLS Softwarebezeichnung Minor |

### RES_0XAB56

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_PENDELN_AKTIV_NR | - | - | + | 0-n | - | char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |

### RES_0XAB6C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |
| STAT_LENKRADWINKEL_WERT | - | - | + | ° | - | int | - | - | 1.0 | 1.0 | 0.0 | Lenkradwinkel |
| STAT_SENSOR_ZUSTAND_NR | - | - | + | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XAB71

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_VERFAHREN_AKTIV_NR | - | - | + | 0-n | - | char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |

### RES_0XAB72

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |

### RES_0XDB56

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_SENSOR1_WERT | ° | - | int | - | - | 1.0 | 128.0 | 0.0 | Motorlagewinkel Sensor 1 |
| STAT_MOTORLAGEWINKEL_SENSOR2_WERT | ° | - | int | - | - | 1.0 | 128.0 | 0.0 | Motorlagewinkel Sensor 2 |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Motorlagewinkelsensor |

### RES_0XDB57

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XDB59

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDANSCHLAG_LINKS_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAG_RECHTS_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAEGE_GELERNT_NR | 0-n | - | unsigned char | - | TAB_EPS_ENDANSCHLAEGE_GELERNT | - | - | - | Status Endanschlaege und Offset |

### RES_0XDB5A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

### RES_0XDB6E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUB_ZAHNSTANGE_WERT | mm | - | int | - | - | 1.0 | 10.0 | 0.0 | Zahnstangenhub |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor |
| STAT_GESCHWINDIGKEIT_ZAHNSTANGE_WERT | m/s | - | int | - | - | 1.0 | 10000.0 | 0.0 | Zahnstangengeschwindigkeit |
| STAT_HUB_ZAHNSTANGE_GESAMT_WERT | mm | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gesamtzahnstangenhub |

### RES_0XDB8B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORSTROM_1_WERT | A | - | int | - | - | 1.0 | 128.0 | 0.0 | Strom Phase 1 EPS Motor |
| STAT_MOTORSTROM_2_WERT | A | - | int | - | - | 1.0 | 128.0 | 0.0 | Strom Phase 2 EPS Motor |
| STAT_MOTORSTROM_3_WERT | A | - | int | - | - | 1.0 | 128.0 | 0.0 | Strom Phase 3 EPS Motor |

### RES_0XDB99

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_WERT | Nm | - | int | - | - | 1.0 | 128.0 | 0.0 | Aktuelles Moment |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Sensor Lenkmoment |

### RES_0XDBC4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUB_ENDANSCHLAG_LINKS_WERT | mm | - | int | - | - | 1.0 | 10.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_HUB_ENDANSCHLAG_RECHTS_WERT | mm | - | int | - | - | 1.0 | 10.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAEGE_GELERNT_NR | 0-n | - | unsigned char | - | TAB_EPS_ENDANSCHLAEGE_GELERNT | - | - | - | Status Endanschlaege und Offset (0 - nicht gelernt; 1 - gelernt) |

### RES_0XDBD2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_WERT | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EPS_PENDELN | 0xAB56 | - | Start und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56 | RES_0xAB56 |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Start Reset Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71 | RES_0xAB71 |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72 | RES_0xAB72 |
| STEUERN_HOCHOHMIGKEIT_UEBERWACHUNG_RESET | 0xAB76 | - | Rücksetzen Hochohmigkeitsüberwachung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_LENKWINKEL_OFFSET_RESET | 0xAB77 | - | Starten Reset Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_STATUS_HW | 0xDB4F | STAT_MOMENTENSENSOR_HERSTELLER | - | 0-n | - | high | unsigned int | MOMENTENSENSOR_HERSTELLER | - | - | - | - | 22 | - | - |
| EPS_MOTORLAGEWINKELSENSOR | 0xDB56 | - | Auslesen Daten Sensor EPS Motorlagewinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB56 |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57 |
| EPS_ENDANSCHLAEGE_WINKEL | 0xDB59 | - | Auslesen Daten EPS Endanschlaege winkelbezogen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB59 |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen und Vorgeben Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB5A | RES_0xDB5A |
| _EPS_E_LUEFTER | 0xDB6A | - | Auslesen und Vorgabe Stufe E-Lüfter | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB6A | - |
| EPS_ZAHNSTANGENHUB | 0xDB6E | - | Auslesen Daten EPS Zahnstangenhub | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6E |
| EPS_STROEME | 0xDB8B | - | Auslesen Strom EPS Motor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB8B |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99 |
| EPS_GESAMTRITZELWINKEL | 0xDB9A | STAT_GESAMTRITZELWINKEL_WERT | Auslesen Daten EPS Gesamtritzelwinkel | ° | - | - | unsigned int | - | 1.0 | 32.0 | 0.0 | - | 22 | - | - |
| EPS_ENDANSCHLAEGE_HUB | 0xDBC4 | - | Auslesen Daten EPS Endanschlaege hubbezogen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBC4 |
| EPS_LENKWINKEL_OFFSET | 0xDBD2 | - | Auslesen und Vorgeben Lenkwinkel Offset (Geradeauslauf - Lenkradmittenstellung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBD2 | RES_0xDBD2 |
| EPS_STATUS_INPUT_SIGNALE | 0x5001 | - | Ausgabe einiger Input Signale | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5001 |
| EPS_STATUS_OUTPUT_SIGNALE | 0x5002 | - | Ausgabe einiger Output Signale | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5002 |
| EPS_STATUS_INTERNE_STATI | 0x5003 | - | Ausgabe von internen Stati des SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5003 |

### TAB_EPS_ENDANSCHLAEGE_GELERNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht gelernt |
| 1 | gelernt |
| 2 | gelernt in Fahrt |
| 0xFF | ungültig |

### TAB_EPS_INIT

| WERT | TEXT |
| --- | --- |
| 0 | EPS Initialisierungs Routine nicht aktiv |
| 1 | EPS Initialisierungs Routine aktiv |
| 255 | unbekannter Zustand |

### TAB_EPS_KLEMME_15N

| WERT | TEXT |
| --- | --- |
| 0 | Zündung aus |
| 1 | Zündung ein |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | NOK |

### TAB_EPS_RITZELWINKEL

| WERT | TEXT |
| --- | --- |
| 0 | relativer Winkel |
| 1 | absoluter Winkel |
| 2 | NOK |

### TAB_EPS_WERT

| WERT | TEXT |
| --- | --- |
| 0 | Index Position nicht gefunden |
| 1 | Index Position gefunden |
| 2 | Geradeauslauf-Offset geschrieben und Index Position nicht gefunden |
| 3 | Geradeauslauf-Offset geschrieben und Index Position gefunden und gespeichert |
| FF | ungültig |

### TAB_FEHLERLAMPE

| WERT | TEXT |
| --- | --- |
| 0 | Lampe aus |
| 1 | Lampe ein |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### TAB_PRODUKTIONSSCHALTER

| WERT | TEXT |
| --- | --- |
| 0 | Delivered |
| 1 | Production |

### TAB_QU_AVL_FORC_GRD

| WERT | TEXT |
| --- | --- |
| 0x2 | Signalwert ist gültig |
| 0x8 | Initialisierung |
| 0xE | Signalwert ist ungültig, Zustand/Status temporär |
| 0xF | Signal ungültig |

### TAB_QU_AVL_PO_EPS

| WERT | TEXT |
| --- | --- |
| 0x1 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x2 | Signalwert ist gültig |
| 0x4 | Ersatzwert ist im Nutzsignal gesetzt |
| 0x8 | Initialisierung |
| 0xC | Abgleichwert ist im Nutzsignal gesetzt,  Zustand/Status temporär |
| 0xE | Signalwert ist ungültig, Zustand/Status temporär |
| 0xF | Signal ungültig |

### TAB_QU_AVL_STMOM_DV_ACT

| WERT | TEXT |
| --- | --- |
| 0x1 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x6 | Signalwert ist ungültig |
| 0x8 | Initialisierung |
| 0xE | Signalwert ist ungültig, Zustand/Status temporär |
| 0xF | Signal ungültig |

### TAB_QU_FAHRZEUGGESCHW

| WERT | TEXT |
| --- | --- |
| 0 | Signal ungültig |
| 1 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 2 | Reserved |
| 3 | Reserved |
| 4 | Reserved |
| 5 | Signal ungültig |
| 6 | Reserved |
| 7 | Reserved |
| 8 | Initialisierung |
| 9 | Reserved |
| 10 | Signalwert ist gültig, Zustand/Status temporär |
| 11 | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 12 | Reserved |
| 13 | Signal ungültig |
| 14 | Signalwert ist ungültig, Zustand/Status temporär |
| 15 | Signal ungültig |

### TAB_QU_SER_PINA_EST_FTAX

| WERT | TEXT |
| --- | --- |
| 0x20 | Schnittstelle verfügbar / funktionsbereit |
| 0x21 | Schnittstelle aktiv |
| 0x60 | Service nicht verfügbar - Fehler |
| 0x80 | Schnittstelle wird initialisiert |
| 0xE0 | Funktion in Rückfallebene - V_Fzg. != 0 |
| 0xE1 | Funktion in Rückfallebene - Momentenschnittstelle |
| 0xE2 | Funktion in Rückfallebene - Hands-On |
| 0xE3 | Funktion in Rückfallebene - EPS Status |
| 0xE4 | Funktion in Rückfallebene - V_Fzg. > 10km/h |
| 0xE5 | Funktion in Rückfallebene - Startlenkwinkel |
| 0xE6 | Funktion in Rückfallebene - Regelabweichung |
| 0xFF | Signal ungültig |

### TAB_QU_SER_STMOM_DV_ACT

| WERT | TEXT |
| --- | --- |
| 0x20 | Schnittstelle verfügbar / funktionsbereit |
| 0x21 | Schnittstelle aktiv |
| 0x60 | Service nicht verfügbar - Fehler |
| 0x80 | Schnittstelle wird initialisiert |
| 0xE0 | Service nicht verfügbar - Standby - PMA |
| 0xE1 | Service nicht verfügbar - Standby - EPS Status |
| 0xFF | Signal ungültig |

### TAB_QU_TARVL_PMA

| WERT | TEXT |
| --- | --- |
| 0x2 | Sollwerte umsetzen |
| 0x6 | Fehler: Sollwerte nicht umsetzen |
| 0x7 | Sollwerte nicht vorhanden |
| 0x8 | Initialisierung |
| 0xE | Standby: Sollwerte nicht umsetzen |
| 0xF | Signal ungültig |

### TAB_QU_TAR_FACT_STMOM_FTAX

| WERT | TEXT |
| --- | --- |
| 0x2 | Sollwerte umsetzen |
| 0x7 | Sollwerte nicht vorhanden |
| 0xE | Standby: Sollwerte nicht umsetzen |
| 0xF | Signal ungültig |

### TAB_QU_TAR_QTA_STMOM_DV

| WERT | TEXT |
| --- | --- |
| 0x2 | Sollwerte umsetzen |
| 0x7 | Sollwerte nicht vorhanden |
| 0xE | Sollwerte nicht umsetzen - Standby |
| 0xF | Signal ungültig |

### TAB_QU_TAR_STMOM_DV_ACT

| WERT | TEXT |
| --- | --- |
| 0x2 | Sollwerte umsetzen |
| 0x7 | Sollwerte nicht vorhanden |
| 0xE | Standby: Sollwerte nicht umsetzen |
| 0xF | Signal ungültig |

### TAB_RQ_SU_SW_DRD

| WERT | TEXT |
| --- | --- |
| 0x0000 | Tabelle nicht umgesetzt |
| 0x8000 | Tabelle nicht umgesetzt |
| 0xFFFF | Tabelle nicht umgesetzt |

### TAB_SPORTSCHALTER

| WERT | TEXT |
| --- | --- |
| 1 | Basis |
| 2 | Sport |

### TAB_STATUS_ROUTINE_EPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index nicht gefunden |
| 0xFF | Ungültig |

### TAB_ST_DRV_VEH

| WERT | TEXT |
| --- | --- |
| 0x83 | Initialisierung |
| 0xFF | Signal ungültig |
| 0x00 | E-Maschine verfügbar; Verbrennungsmotor steht durch Fahrerwunsch. |
| 0x01 | E-Maschine verfügbar; Verbrennungsmotor startet durch Fahrerwunsch. |
| 0x02 | E-Maschine verfügbar; Verbrennungsmotor läuft |
| 0x04 | E-Maschine verfügbar; Startankündigung des Verbrennungsmotors durch Fahrerwunsch. |
| 0x06 | E-Maschine verfügbar; Stopankündigung des Verbrennungsmotors durch Fahrerwunsch. |
| 0x08 | E-Maschine verfügbar; Verbrennungsmotor steht durch MSA-Anforderung |
| 0x09 | E-Maschine verfügbar; Verbrennungsmotor startet durch MSA-Anforderung. |
| 0x0C | E-Maschine verfügbar; Startankündigung des Verbrennungsmotors durch MSA-Anforderung. |
| 0x0E | E-Maschine verfügbar; Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x12 | E-Maschine verfügbar; Verbrennungsmotor im Auslauf durch Fahrerwunsch |
| 0x1A | E-Maschine verfügbar; Verbrennungsmotor im Auslauf durch MSA-Anforderung. |
| 0x1E | E-Maschine verfügbar; Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung. |
| 0x80 | E-Maschine nicht verfügbar; Verbrennungsmotor steht durch Fahrerwunsch. |
| 0x81 | E-Maschine nicht verfügbar; Verbrennungsmotor startet durch Fahrerwunsch. |
| 0x82 | E-Maschine nicht verfügbar; Verbrennungsmotor läuft |
| 0x84 | E-Maschine nicht verfügbar; Startankündigung des Verbrennungsmotors durch Fahrerwunsch. |
| 0x86 | E-Maschine nicht verfügbar; Stopankündigung des Verbrennungsmotors durch Fahrerwunsch. |
| 0x88 | E-Maschine nicht verfügbar; Verbrennungsmotor steht durch MSA-Anforderung |
| 0x89 | E-Maschine nicht verfügbar; Verbrennungsmotor startet durch MSA-Anforderung. |
| 0x8C | E-Maschine nicht verfügbar; Startankündigung des Verbrennungsmotors durch MSA-Anforderung. |
| 0x8E | E-Maschine nicht verfügbar; Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x92 | E-Maschine nicht verfügbar; Verbrennungsmotor im Auslauf durch Fahrerwunsch |
| 0x9A | E-Maschine nicht verfügbar; Verbrennungsmotor im Auslauf durch MSA-Anforderung. |
| 0x9E | E-Maschine nicht verfügbar; Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung. |

### TAB_ST_ILK_ERRM_FZM

| WERT | TEXT |
| --- | --- |
| 0x0 | Fehlerspeicherfreigabe |
| 0x1 | Fehlerspeichersperre |
| 0x2 | Reserve |
| 0x3 | Signal ungültig |

### TAB_ST_KL_15N

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | KL15N-Aus |
| 2 | Nachlauf größer 0s und  kleinergleich 1000ms |
| 3 | Nachlauf größer 1000ms und kleinergleich 2000ms |
| 4 | Nachlauf größer 2000ms und kleinergleich 3000ms |
| 5 | Nachlauf größer 3000ms und kleinergleich 4000ms |
| 6 | Nachlauf größer 4000ms undkleinergleich 5000ms |
| 7 | Reserviert |
| 8 | Reserviert |
| 9 | Reserviert |
| 0xA | Reserviert |
| 0xB | Nachlauf kleiner 1 min |
| 0xC | Nachlauf Fahrt/Motorlauf |
| 0xD | KL15N-Dauer-Ein |
| 0xE | Fehler |
| 0xF | Signal ungültig |

### TAB_ST_OFFS_QUAD_EPS

| WERT | TEXT |
| --- | --- |
| 0x0 | Algorithmus (Funktion) im Sleep-Modus |
| 0x1 | Offset  wird ermittelt |
| 0x2 | Offset übernehmen, Aufsetzen über Index |
| 0x3 | Offset übernehmen, Aufsetzen über Modelvergleich |
| 0x4 | Offset übernehmen, Aufsetzen über Anschlag-Anschlag |
| 0x5 | Offset übernehmen, Aufsetzen über Summenlenkwinkel (im AFS-Fall) |
| 0x6 | Offset in Prüfung |
| 0x7 | Offset korrigieren |
| 0xF | Signal ungültig |

### TAB_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 1 | NMWait |
| 2 | KL30Wait |
| 3 | PreDrive |
| 4 | DriveDown |
| 5 | DriveUp |
| 6 | PostRun |
| 7 | Off |
| 8 | Error |
| 9 | Flash |

### TAB_UN_TARVL_PMA

| WERT | TEXT |
| --- | --- |
| 0 | Ritzelschnittstelle |
| 1 | Zahnstangenhubschnittstelle |
| 3 | ungültig |

### TAB_V_VEH_NSS

| WERT | TEXT |
| --- | --- |
| 0x0 | Signal ungültig |
| 0xC | Geschwindigkeit unter 10 kn/h |
| 0xD | Geschwindigkeit über 10 km/h |
| 0xF | Signal ungültig |

### TAB_ZFLS_SW_KENNUNG_BASIS

| WERT | TEXT |
| --- | --- |
| 0x3232385F | 228 |

### TAB_ZFLS_SW_KENNUNG_MAJOR

| WERT | TEXT |
| --- | --- |
| 0x3031 | 01 |
| 0x3032 | 02 |
| 0x3033 | 03 |
| 0x3034 | 04 |
| 0x3035 | 05 |
| 0x3036 | 06 |
| 0x3037 | 07 |
| 0x3038 | 08 |
| 0x3039 | 09 |

### TAB_ZFLS_SW_KENNUNG_MINOR

| WERT | TEXT |
| --- | --- |
| 0x5F000000 | - |
| 0x00000000 | - |
| 0x5F543031 | T01 |
| 0x5F543032 | T02 |
| 0x5F543033 | T03 |
| 0x5F543034 | T04 |
| 0x5F543035 | T05 |
| 0x5F543036 | T06 |

### TAB_ZFLS_SW_KENNUNG_SAMPLE

| WERT | TEXT |
| --- | --- |
| 0x42 | B |
| 0x43 | C |
| 0x44 | D |

### TAB_ZFLS_SW_KENNUNG_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x3232315F | 221 (release) |
| 0x3232325F | 222 (calib) |
| 0x3A3A3A5F | unknown |

### TAB_ZFLS_SW_KENNUNG_VERSION

| WERT | TEXT |
| --- | --- |
| 0x5F30315F | 01 |
| 0x5F30325F | 02 |
| 0x5F30335F | 03 |
| 0x5F30345F | 04 |
| 0x5F30355F | 05 |
| 0x5F30365F | 06 |
| 0x5F30375F | 07 |
| 0x5F30385F | 08 |
| 0x5F30395F | 09 |
| 0x5F31305F | 10 |
| 0x5F31315F | 11 |
| 0x5F31325F | 12 |
| 0x5F31335F | 13 |
| 0x5F31345F | 14 |
| 0x5F31355F | 15 |

### ZFLS_SYS_STATES

| WERT | UWTEXT |
| --- | --- |
| 0x01 | NMWAIT |
| 0x02 | KL30WAIT |
| 0x03 | PREDRIVE |
| 0x04 | DRIVEDOWN |
| 0x05 | DRIVEUP |
| 0x06 | POSTRUN |
| 0x07 | OFF |
| 0x08 | ERROR |
| 0x09 | FLASH |
| 0x0f | unschbeschiefied |

### CHARACTERISTICNAMES

| INDEX | NAME |
| --- | --- |
| 0x00 | Basis - (F20 / F21 / F22) |
| 0x01 | Basis - (F23) |
| 0x02 | Basis - (F30 / F31 / F35) |
| 0x03 | Basis - (F30 / F31 / F35) + VDC |
| 0x04 | Basis - (F32 / F36) |
| 0x05 | Basis - (F32 / F36) + VDC |
| 0x06 | Basis - (F20 / F21 / F22) + VDC |
| 0x07 | Basis - (F23) + VDC |
| 0x08 | Basis - (F34) |
| 0x09 | Basis - (F34) + VDC |
| 0x0a | Basis - LCI (F20 / F21 / F22) |
| 0x0b | Basis - LCI (F23) |
| 0x0c | Basis - LCI (F30/F31/F35) |
| 0x0d | Basis - LCI (F30 / F31 / F35) + VDC |
| 0x0e | Basis - LCI F32 / F36) |
| 0x0f | Basis - LCI (F32 / F36) + VDC |
| 0x10 | Basis - LCI (F20 / F21 / F22) + VDC |
| 0x11 | Basis - LCI (F23) + VDC |
| 0x12 | Basis - LCI (F34) |
| 0x13 | Basis - LCI (F34) + VDC |
| 0x14 | Kennlinie 21 (Basis 21) |
| 0x15 | Kennlinie 22 (Basis 22) |
| 0x16 | Standard - (F20 / F21 / F22) |
| 0x17 | Sport - (F20 / F21 / F22) |
| 0x18 | Standard - (F23) |
| 0x19 | Sport - (F23) |
| 0x1a | Standard - (F30 / F31 / F35) |
| 0x1b | Sport - (F30 / F31 / F35) |
| 0x1c | Standard - (F30 / F31 / F35) + VDC |
| 0x1d | Sport - (F30 / F31 / F35) + VDC |
| 0x1e | Standard - (F32 / F36) |
| 0x1f | Sport - (F32 / F36) |
| 0x20 | Standard - (F32 / F36) + VDC |
| 0x21 | Sport - (F32 / F36) + VDC |
| 0x22 | Standard - (F20 / F21 / F22) + VDC |
| 0x23 | Sport - (F20 / F21 / F22) + VDC |
| 0x24 | Standard - (F23) + VDC |
| 0x25 | Sport - (F23) + VDC |
| 0x26 | Standard - (F34) |
| 0x27 | Sport - (F34) |
| 0x28 | Standard - (F34) + VDC |
| 0x29 | Sport - (F34) + VDC |
| 0x2a | Standard - LCI (F20 / F21 / F22) |
| 0x2b | Sport - LCI (F20 / F21 / F22) |
| 0x2c | Standard - LCI (F23) |
| 0x2d | Sport - LCI (F23) |
| 0x2e | Standard - LCI (F30 / F31 / F35) |
| 0x2f | Sport - LCI (F30 / F31 / F35) |
| 0x30 | Standard - LCI (F30 / F31 / F35) + VDC |
| 0x31 | Sport - LCI (F30 / F31 / F35) + VDC |
| 0x32 | Standard - LCI (F32 / F36) |
| 0x33 | Sport - LCI (F32 / F36) |
| 0x34 | Standard - LCI (F32 / F36) + VDC |
| 0x35 | Sport - LCI (F32 / F36) + VDC |
| 0x36 | Standard - LCI (F20 / F21 / F22) + VDC |
| 0x37 | Sport - LCI (F20 / F21 / F22) + VDC |
| 0x38 | Standard - LCI (F23) + VDC |
| 0x39 | Sport - LCI (F23) + VDC |
| 0x3a | Standard - LCI (F34) |
| 0x3b | Sport - LCI (F34) |
| 0x3c | Standard - LCI (F34) + VDC |
| 0x3d | Sport - LCI (F34) + VDC |
| 0x3e | Kennlinie 63 (Standard 21) |
| 0x3f | Kennlinie 64 (Sport 21) |
| 0x40 | Kennlinie 65 (Standard 22) |
| 0x41 | Kennlinie 66 (Sport 22) |
| 0x42 | Kennlinie 67 |
| 0x43 | Kennlinie 68 |
| 0x44 | Kennlinie 69 |
| 0x45 | F22 M235i Racing |
