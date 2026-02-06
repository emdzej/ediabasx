# eps_tk02.prg

## General

|  |  |
| --- | --- |
| File | eps_tk02.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 45 |
| Origin | BMW EF-413 Roland_Lohninger |
| Revision | 5.015 |
| Author | BMW EF-413 Roland_Lohninger, TKP EEF Thomas_Rogalski |
| ECU Comment | EPS [61] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Electrical Power - Assist - Steering |  |  |
| ORIGIN | string | BMW EF-413 Roland_Lohninger |  |  |
| REVISION | string | 5.015 |  |  |
| AUTHOR | string | BMW EF-413 Roland_Lohninger, TKP EEF Thomas_Rogalski |  |  |
| COMMENT | string | EPS [61] |  |  |
| PACKAGE | string | 1.40 |  |  |
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

### GARAGE_DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

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

### ARG_0XAB20

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND_SPURSTANGE | + | - | 0-n | high | unsigned char | - | TAB_VERBAUT | - | - | - | - | - | Spurstangen eingehaengt ja oder nein |

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

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | Invalid |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023000 | Energiesparmode aktiv | 0 |
| 0x023008 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x023009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02300A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02300B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02300C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF30 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x482284 | Steuergerät intern - TKP - Software - Fehler - OBD relevant | 0 |
| 0x482288 | Steuergerät intern - TKP - Hardware - Watchdog defekt | 0 |
| 0x482294 | Steuergerät intern - TKP - Hardware - RAM defekt | 0 |
| 0x482295 | Steuergerät intern - TKP - Hardware - FLASH defekt - OBD relevant | 0 |
| 0x4822A6 | Spannungsversorgung - Globale Unterspannung extern | 1 |
| 0x4822A7 | Spannungsversorgung - Globale Überspannung intern | 1 |
| 0x4822A8 | Spannungsversorgung - Globale Überspannung extern | 1 |
| 0x4822A9 | Spannungsversorgung - Globale Unterspannung intern | 1 |
| 0x4822B1 | Sensor - Lenkwinkel - Index - Kurzschluss nach Masse | 0 |
| 0x4822B2 | Sensor - Lenkwinkel - Index - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x4822B3 | Steuergerät intern - TKP - schwerer Ausnahmefehler - SW - OBD relevant | 0 |
| 0x4822B4 | Steuergerät intern - TKP - schwerer Ausnahmefehler - HW - OBD relevant | 0 |
| 0x4822B8 | Sensor - Rotorlage - Lenkwinkel - Spannungsversorgung - Bereichsverletzung nach oben | 0 |
| 0x4822B9 | Steuergerät intern - TKP - Hardware - Temperatursensor - Board - Kurzschluss nach Masse | 0 |
| 0x4822BB | Steuergerät intern - TKP - Hardware - Temperatursensor - Board - Plausibilität | 0 |
| 0x4822BC | Steuergerät intern - TKP - Hardware - Temperatursensor - Endstufe - Kurzschluss nach Masse | 0 |
| 0x4822C1 | Steuergerät intern - TKP - Hardware - Temperatursensor - MCU unplausibel | 0 |
| 0x4822C3 | Steuergerät intern - TKP - Hardware - Temperatursensor - Endstufe - Bereichsverletzung nach oben | 0 |
| 0x4822C4 | Steuergerät intern - Defekt - OBD relevant | 0 |
| 0x4822C7 | Sensor - Rotorlage - Lenkwinkel - Kommunikation gestört | 0 |
| 0x4822C8 | Steuergerät intern - TKP - Hardware - interne Spannungsversorgung defekt - OBD relevant | 0 |
| 0x4822D9 | Sensor - Lenkwinkel Index Riemensprung Lenkwinkel ungültig | 0 |
| 0x48238C | Steuergerät intern - Übertemperatur Abschaltung Lenkunterstützung | 1 |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 |
| 0x48238F | Spannungsversorgung - Lokale Überspannung Reduzierung Lenkunterstützung | 1 |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 1 |
| 0x482395 | Lenkgetriebe - Reibung zu hoch | 0 |
| 0x482397 | Steuergerät intern - Defekt | 0 |
| 0x482399 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 |
| 0x48239A | obsolete - soon to be removed | 0 |
| 0x48239C | Sensor - Lenkwinkel Index - Defekt | 0 |
| 0x48239D | Steuergerät intern - TKP - Software - Schwerer Ausnahmefehler | 0 |
| 0x48239E | Steuergerät intern - TKP - Software - Falsche Version | 0 |
| 0x4823A1 | Steuergerät intern - TKP - Hardware - Sternpunkt-Relais defekt | 0 |
| 0x4823A2 | Steuergerät intern - TKP - Hardware - FLASH defekt | 0 |
| 0x4823C0 | Steuergerät intern - TKP - Software Fehler | 0 |
| 0x4823C1 | Steuergerät intern - Minimale Reduzierung Lenkunterstützung aufgrund Unter-oder Übertemperatur | 1 |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 1 |
| 0x4823C3 | Steuergerät intern - TKP - Hardware - EEPROM defekt | 1 |
| 0x4823C5 | Sensor - Rotorlage - Lenkwinkel - Plausibilität - Hardware defekt | 0 |
| 0x4823C6 | Aktuator - Motor - Allgemeiner Fehler | 0 |
| 0x4823D2 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt | 0 |
| 0x4823E4 | Steuergerät intern - Spannungsversorgung Motortreiber Über- oder Unterspannung | 0 |
| 0x4823EC | Sensor - Drehmoment - Lenkmoment - Defekt | 0 |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 1 |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 |
| 0x4823FD | Spannungsversorgung - Lokale Unterspannung Abschaltung Lenkunterstützung | 1 |
| 0x482452 | Sensor - Lenkwinkel Index Riemensprung erkannt | 0 |
| 0xD5041F | FLEXRAY Bus 1 | 0 |
| 0xD50420 | FLEXRAY Controller Error Bus 1 | 0 |
| 0xD50BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD5144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xD51458 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Timeout | 1 |
| 0xD51459 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Checksumme | 1 |
| 0xD5145A | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Alive | 1 |
| 0xD5145B | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Ungültig | 1 |
| 0xD5145C | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Undefiniert | 1 |
| 0xD51482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xD514C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD514E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xD514F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD514F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD5150A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Timeout | 1 |
| 0xD51678 | Botschaftsfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Checksumme | 1 |
| 0xD516B3 | Botschaftsfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Timeout | 1 |
| 0xD51744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD51746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xD51793 | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Ungültig | 1 |
| 0xD5183A | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Undefiniert | 1 |
| 0xD5186E | Botschaftsfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Timeout | 1 |
| 0xD518FF | Signalfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Undefiniert | 1 |
| 0xD51934 | Signalfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Ungültig | 1 |
| 0xD51971 | Botschaftsfehler (Soll Endanschlag Virtuell Vorderachse, ID: TAR_ESTP_VIRT_FTAX) Alive | 1 |
| 0xD519AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Timeout | 1 |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Checksumme | 1 |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Alive | 1 |
| 0xD51C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) - Timeout | 1 |
| 0xD51C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) - Timeout | 1 |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Timeout | 1 |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Checksumme | 1 |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Alive | 1 |
| 0xD52C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD52C3D | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Ungültig | 1 |
| 0xD52C3E | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Undefiniert | 1 |
| 0xD52C3F | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Ungültig | 1 |
| 0xD52C40 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Undefiniert | 1 |
| 0xD52C44 | obsolete - soon to be removed | 1 |
| 0xD52C45 | obsolete - soon to be removed | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | KL15N Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4001 | Spannung Voltage level | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4002 | Engine Running | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4003 | Fahrzeuggeschwindigkeit Vehicle speed | km/h | high | unsigned char | - | 4 | 1 | 0 |
| 0x4004 | Entlastung generator status Generator load-relieving | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4005 | Klemmen Status STKL Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4006 | Application Manager State | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4007 | Fehler ID Error ID | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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
| 0x300200 | DEM_EVENT_ERQ_OVERFLOW | 0 |
| 0x300201 | DEM_EVENT_DRQ_OVERFLOW | 0 |
| 0x300202 | DEM_EVENT_FF_OVERFLOW | 0 |
| 0x300203 | DEM_EVENT_INVALID_ERROR_ID | 0 |
| 0x300204 | DEM_EVENT_INDICATORLAMP_MESSAGE_OVERFLOW | 0 |
| 0x300205 | DEM_EVENT_SCO_FLEXRAY_ERROR_DETECTED | 0 |
| 0x300206 | DEM_EVENT_SCO_GLOB_UNDERVOLTGE_INT | 0 |
| 0x300207 | DEM_EVENT_SCO_GLOB_UNDERVOLTAGE_EXT | 0 |
| 0x300208 | DEM_EVENT_SCO_GLOB_OVERVOLTGE_INT | 0 |
| 0x300209 | DEM_EVENT_SCO_GLOB_OVERVOLTAGE_EXT | 0 |
| 0x30020A | DEM_EVENT_SCO_NETWORK_UNDERVOLTAGE | 0 |
| 0x30020B | DEM_EVENT_SCO_NETWORK_OVERVOLTAGE | 0 |
| 0x30020C | DEM_EVENT_SCO_FLEXRAY_ERROR | 0 |
| 0x30020D | DEM_EVENT_SCO_FLEXRAY_CC_ERROR | 0 |
| 0x300210 | DEM_EVENT_TSU_COMM_ERROR | 0 |
| 0x300211 | DEM_EVENT_TSU_POWERSUPPLY_ERROR | 0 |
| 0x300220 | DEM_EVENT_ADC_D2004_CTUTRIGTEST | 0 |
| 0x300221 | DEM_EVENT_ADC_UNEXPECTED_DATA | 0 |
| 0x300222 | DEM_EVENT_ADC_UNEXPECTED_NUM_OF_DATA | 0 |
| 0x300223 | DEM_EVENT_ADC_D2005_CTU_OVERFLOW | 0 |
| 0x300224 | DEM_EVENT_ADC_D2004_CTU_HWSWTEST_TRIGGERNUM | 0 |
| 0x300225 | DEM_EVENT_D2004_CTU_HWSWTEST_ADCCOMMAND | 0 |
| 0x300226 | DEM_EVENT_ADC_D2004_ETIMER_TRIGGERTEST | 0 |
| 0x300227 | DEM_EVENT_ADC_D2003_SELFTEST | 0 |
| 0x300228 | DEM_EVENT_ADC_D2011_REF_VOLTAGE | 0 |
| 0x300229 | DEM_EVENT_ADC_D2020_MUX_ERROR | 0 |
| 0x300243 | DEM_EVENT_GDU_BOOTSTRAP_UNDERVOLTAGE | 0 |
| 0x300244 | DEM_EVENT_GDU_BOOTSTRAP_OVERVOLTAGE | 0 |
| 0x300246 | DEM_EVENT_GDU_D6003_BOOTSTRAP_TEST | 0 |
| 0x300251 | DEM_EVENT_AM_BATTERY_OVERVOLTAGE | 0 |
| 0x300252 | DEM_EVENT_AM_BATTERY_UNDERVOLTAGE | 0 |
| 0x300253 | DEM_EVENT_AM_GDU_ON_FAILED | 0 |
| 0x300254 | DEM_EVENT_AM_GDU_OFF_WDG_FAILED | 1 |
| 0x300255 | DEM_EVENT_AM_GDU_OFF_MCU_FAILED | 0 |
| 0x300256 | DEM_EVENT_AM_SR_ON_FAILED | 0 |
| 0x300258 | DEM_EVENT_AM_SR_OFF_MCU_FAILED | 1 |
| 0x300259 | DEM_EVENT_AM_GDU_WDG_SWITCH_TIMEOUT | 1 |
| 0x30025b | DEM_EVENT_AM_WDG_INIT_FAILED | 0 |
| 0x30025c | DEM_EVENT_AM_BATTERY_VOLTAGE_QUALIFIER | 0 |
| 0x30025d | DEM_EVENT_AM_GDU_STARTUP_FAILED | 0 |
| 0x300261 | DEM_EVENT_AM_GDU_BOOTSTRAP_QUALIFIER | 0 |
| 0x300262 | DEM_EVENT_AM_D6022_SR_IC_FAILED | 0 |
| 0x300263 | DEM_EVENT_AM_PHASECURRENT_QUALIF_FAILED | 0 |
| 0x300264 | DEM_EVENT_AM_D9013_DIO_PIN_WRITE_CHECK | 0 |
| 0x300265 | DEM_EVENT_AM_STARTUP_FAILED_HIGH_RPM | 0 |
| 0x300270 | DEM_EVENT_IEPP_INDEX_EDGE_INVALID | 0 |
| 0x300271 | DEM_EVENT_IEPP_INDEX_SIGNAL_FAILURE | 0 |
| 0x300273 | DEM_EVENT_IEPP_D2112_D4401_ABS_RACKPOS_SIGNAL_ERROR | 0 |
| 0x300274 | DEM_EVENT_IEPP_D4016_ICM_CALIBRATION_CORRECTED | 1 |
| 0x300275 | DEM_EVENT_IEPP_D4021_RTC_COUNTER_FAILURE | 1 |
| 0x300280 | DEM_EVENT_MOC_MOTORCURRENT_AGE | 0 |
| 0x300281 | DEM_EVENT_MOC_MAGNETTEMPERATURE_AGE | 1 |
| 0x300282 | DEM_EVENT_MOC_ROTORSPEED_AGE | 0 |
| 0x300283 | DEM_EVENT_MOC_DCVOLTAGE_AGE | 0 |
| 0x300284 | DEM_EVENT_MOC_BATTERYCURRENT_AGE | 0 |
| 0x300287 | DEM_EVENT_MOC_COMPENSATED_ELECTRICAL_ANGLE_QUALIFIER | 0 |
| 0x300289 | DEM_EVENT_MOC_D9904_REF_TRQ_NOT_CORRECT_AFTER_FIELD_WEAKENING | 0 |
| 0x300290 | DEM_EVENT_RPS_ANGLE_DIFF_INTOLERABLE | 0 |
| 0x300291 | DEM_EVENT_RPS_ANG_SPEED_DIFF_INTOLERABLE | 0 |
| 0x300292 | DEM_EVENT_RPS_ROTOR_QUADRANT_INPLAUSIBLE | 0 |
| 0x300293 | DEM_EVENT_RPS_POWER_SUPPLY_CHECK_FAILED | 0 |
| 0x30029A | DEM_EVENT_ADC_D8026_FAST_REGISTER_CHECK | 0 |
| 0x300300 | DEM_EVENT_RTC_NO_COUNT_COMPARE | 0 |
| 0x300301 | DEM_EVENT_RTC_CRC_CHECK_TIMEOUT | 0 |
| 0x300302 | DEM_EVENT_RTC_TEMPORARY_RTC_FAILURE | 0 |
| 0x300304 | DEM_EVENT_RTC_NOTIFY_POWERLOSS | 0 |
| 0x300305 | DEM_EVENT_RTC_NOTIFY_POWERLOSS_DIFFERENCE | 0 |
| 0x300306 | DEM_EVENT_RTC_POWER_SUPPLY_CHECK_FAILED | 0 |
| 0x300308 | DEM_EVENT_RTC_PIC_AND_MCU_MEASURED_VOLTAGES_DIFFERENT | 0 |
| 0x300309 | DEM_EVENT_RTC_NVM_ACCESS_FAILED | 0 |
| 0x30030A | DEM_EVENT_RTC_TOO_MANY_NONRELIABLE_ANGLES | 0 |
| 0x30030B | DEM_EVENT_RTC_QUIESCENT_CURRENT_TOO_HIGH | 0 |
| 0x30030D | DEM_EVENT_RTC_RAM_CORRUPTION | 0 |
| 0x30030E | DEM_EVENT_RTC_SENSOR_SIGNAL_FAILURE | 0 |
| 0x30030F | DEM_EVENT_RTC_SENSOR_SUPPLY_FAILURE | 0 |
| 0x300310 | DEM_EVENT_TPI_TEMP_DELTA_CORE_ERROR | 0 |
| 0x300311 | DEM_EVENT_TPI_CORE_OVERTEMP | 0 |
| 0x300312 | DEM_EVENT_TPI_MOTOR_OVERTEMP | 0 |
| 0x300313 | DEM_EVENT_TPI_POWERMODULE_OVERTEMP | 0 |
| 0x300315 | DEM_EVENT_TPI_DELTA_EST_MEAS_MODULE | 0 |
| 0x300316 | DEM_EVENT_TPI_TEMP_DELTA_CORE_ERROR_STATIC | 0 |
| 0x300318 | DEM_EVENT_TPI_DELTA_EST_MEAS_MODULE_STATIC | 0 |
| 0x300319 | DEM_EVENT_TPI_D2016_CAPACITOR_TEMP | 0 |
| 0x30031A | DEM_EVENT_TPI_D2025_BOARD_CORE_TEMP_PLAUSIBILITY | 0 |
| 0x300320 | DEM_EVENT_CPUG_PMU_SELFTEST_FAILED | 0 |
| 0x300321 | DEM_EVENT_CPUG_CONFIG_CRC_ERROR | 0 |
| 0x300322 | DEM_EVENT_CPUG_CORE_REDUNDANCY_ERROR | 0 |
| 0x300323 | DEM_EVENT_CPUG_STCU_INTEGRITY_ERROR | 0 |
| 0x300324 | DEM_EVENT_CPUG_CLOCK_OUT_OF_RANGE | 0 |
| 0x300325 | DEM_EVENT_CPUG_CRC_SELFTEST_FAILED | 0 |
| 0x300326 | DEM_EVENT_CPUG_FCCU_INIT_FAILED | 0 |
| 0x300327 | DEM_EVENT_CPUG_ECC_NONCORRECTABLE_ERROR | 0 |
| 0x300328 | DEM_EVENT_CPUG_FLASH_CRC_ERROR | 0 |
| 0x300329 | DEM_EVENT_CPUG_FLASH_ECC_SELFTEST_FAILED | 0 |
| 0x30032a | DEM_EVENT_CPUG_FLOATING_POINT_EXCEPTION | 1 |
| 0x30032c | DEM_EVENT_CPUG_D9842_INTERRUPT_PRIO_NOK | 0 |
| 0x30032d | DEM_EVENT_CPUG_INTERNAL_LOWVOLTAGE | 0 |
| 0x30032e | DEM_EVENT_CPUG_INTERNAL_HIGHVOLTAGE | 0 |
| 0x30032f | DEM_EVENT_CPUG_GENERAL_MCU_HW_RESET | 0 |
| 0x300330 | DEM_EVENT_CPUG_UNKNOWN_RESET_SOURCE | 0 |
| 0x300331 | DEM_EVENT_CPUG_FLASH_ECC_2BIT_SELFTEST_FAILED | 0 |
| 0x300332 | DEM_EVENT_CPUG_MEMORY_PROTECTION_ERROR | 0 |
| 0x300333 | DEM_EVENT_CPUG_CPU_EXCEPTION | 0 |
| 0x300334 | DEM_EVENT_CPUG_D9008_WRITE_TO_LOCKED_REGISTER | 0 |
| 0x300335 | DEM_EVENT_CPUG_KERNEL_ERROR | 0 |
| 0x300340 | DEM_EVENT_MRM_DEG_UNDERVOLTAGE | 0 |
| 0x300341 | DEM_EVENT_MRM_DEG_OVERVOLTAGE | 0 |
| 0x300342 | DEM_EVENT_MRM_DEG_OVERTEMP | 0 |
| 0x300350 | DEM_EVENT_SA_INTERFACE_ERROR | 0 |
| 0x300351 | DEM_EVENT_CTC_INTERFACE_ERROR | 0 |
| 0x300352 | DEM_EVENT_MTL_INTERFACE_ERROR | 0 |
| 0x300353 | DEM_EVENT_RPC_INTERFACE_ERROR | 0 |
| 0x300355 | DEM_EVENT_CPUG_KERNEL_ERROR | 0 |
| 0x300361 | DEM_EVENT_WDPD_WDP_POWERSUPPLY_VOLTAGE_ERROR | 0 |
| 0x300362 | DEM_EVENT_WDPD_D2101_MC_IO_OVERVOLTAGE_ERROR | 0 |
| 0x300363 | DEM_EVENT_WDPD_D2102_MC_IO_UNDERVOLTAGE_ERROR | 0 |
| 0x300364 | DEM_EVENT_WDPD_D2106_MC_CORE_OVERVOLTAGE_ERROR | 0 |
| 0x300365 | DEM_EVENT_WDPD_D2107_MC_CORE_UNDERVOLTAGE_ERROR | 0 |
| 0x300366 | DEM_EVENT_WDPD_D8005_SW_CRC_ERROR | 0 |
| 0x300367 | DEM_EVENT_WDPD_D8009_FCCU_IS_IN_ERRORSTATE | 0 |
| 0x300368 | DEM_EVENT_WDPD_D8010_FCCU_PROTOCOL_ERROR | 0 |
| 0x300369 | DEM_EVENT_WDPD_D8701_EXT_WATCHDOG | 0 |
| 0x30036a | DEM_EVENT_WDPD_D8013_INT_WATCHDOG | 0 |
| 0x30036b | DEM_EVENT_WDPD_VREF_CORRECTION_ERROR | 0 |
| 0x30036c | DEM_EVENT_WDPD_D8016_MCU_250US_TICK_FAILED | 0 |
| 0x30036D | DEM_EVENT_WDPD_D6007_WDP_RPM_CHECK_FAILED | 0 |
| 0x30036E | DEM_EVENT_WDPD_D8018_UNKNOWN_WD_RESET_REASON | 0 |
| 0x30036F | DEM_EVENT_WDPD_INCOMPATIBLE_WD_VERSION | 0 |
| 0x300370 | DEM_EVENT_WDPD_D8012_INVALID_DATA_FI_TEST | 0 |
| 0x300371 | DEM_EVENT_WDPD_D8702_HB_FI_TEST_FAIL | 0 |
| 0x300372 | DEM_EVENT_WDPD_D8015_COM_FROM_WDP | 0 |
| 0x300373 | DEM_EVENT_WDPD_D9005_KEEPALIVE_OMIT | 0 |
| 0x300374 | DEM_EVENT_WDPD_UNEXPECTED_INVOCATION | 0 |
| 0x300375 | DEM_EVENT_WDPD_D8011_COM_TO_WDP | 0 |
| 0x300376 | DEM_EVENT_WDPD_WD_RESET_REQUEST_FAILED | 0 |
| 0x300380 | DEM_EVENT_APP_RACK_RANGE_INVALID | 0 |
| 0x300381 | DEM_EVENT_APP_D2112_D4401_REL_RACKPOS_SIGNAL_ERROR | 0 |
| 0x300400 | DEM_EVENT_BVCC_BATT_VOLTAGE_CROSS_CHK_FAILED | 0 |
| 0x300420 | DEM_EVENT_DM_DEADLINE_VIOLATION | 0 |
| 0x300430 | DEM_EVENT_CFM_D8704_CONTROL_FLOW_FAILURE | 0 |
| 0x300450 | DEM_EVENT_PMA_INTERFACE_ERROR | 0 |
| 0x300460 | DEM_EVENT_FPWM_D6829_PWM_PATTERN_ERROR | 0 |
| 0x300461 | DEM_EVENT_FPWM_D8026_FAST_REGISTER_CHECK | 0 |
| 0x300470 | DEM_EVENT_SCO_OVERVOLTAGE | 0 |
| 0x300471 | DEM_EVENT_SCO_UNDERVOLTAGE | 0 |
| 0x300472 | DEM_EVENT_MSV_D5004_MOTOR_SHORTCIRCUIT | 0 |
| 0x300500 | DEM_EVENT_FPWM_GDU_OVERTEMP | 0 |
| 0x300501 | DEM_EVENT_FPWM_GDU_VOLTAGE | 0 |
| 0x300502 | DEM_EVENT_FPWM_GDU_SHORT | 0 |
| 0x300503 | DEM_EVENT_FPWM_FORBIDDEN_RUNNABLE_CALL | 0 |
| 0x300510 | DEM_EVENT_MSV_D9905_INV_ERROR | 0 |
| 0x300511 | DEM_EVENT_MSV_D2021_SSSPR_TEMP_PLAUSIBILITY_ERROR | 0 |
| 0x300512 | DEM_EVENT_MSV_D2017_SSSPR_OVERTEMP | 0 |
| 0x300513 | DEM_EVENT_MSV_D5004_MOTOR_SHORTCIRCUIT | 0 |
| 0x300514 | DEM_EVENT_MSV_D9013_DIO_PIN_WRITE_CHECK | 0 |
| 0x300520 | DEM_EVENT_NVDM_D8825_WRITE_ERROR | 0 |
| 0x300521 | DEM_EVENT_NVDM_D8020_READ_ERROR | 0 |
| 0x300530 | DEM_EVENT_SSSPRTM_D2022_EST_JUNCTION_OVERTEMP | 0 |
| 0x300540 | DEM_EVENT_AMS_GDU_DISABLE_ERROR | 0 |
| 0x300541 | DEM_EVENT_AMS_SPR_CLOSING_ERROR | 0 |
| 0x300542 | DEM_EVENT_AMS_STARTUP_ON_TOO_LONG | 0 |
| 0x300550 | DEM_EVENT_CTG_D9009_DEGRADATION_CHECKER | 0 |
| 0x300560 | DEM_EVENT_MTM_D9011_MAGNETTEMPERATURE_ERROR | 0 |
| 0x300570 | DEM_EVENT_POASUP_D9012_POA_ERROR | 0 |
| 0x300580 | DEM_EVENT_SDM_PHYSCAL_IGNITION_OFF | 0 |
| 0x300590 | DEM_EVENT_EMS_ERRORMANAGER_FAILURE_DETECTED | 0 |
| 0x300600 | DEM_EVENT_PUCSVC_INCOMPATIBLE_WD_VERSION | 0 |
| 0x300601 | DEM_EVENT_PUCSVC_INCOMPATIBLE_RTCSW_VERSION | 0 |
| 0x300610 | DEM_EVENT_UNDERVOLTAGE_DEGRADATION_DURING_MSA_START | 0 |
| 0x300620 | DEM_EVENT_CS_CONTROLFLOWERROR | 0 |
| 0x482286 | NVM_E_REQ_FAILED | 0 |
| 0x482289 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x48228C | MCU_E_LOCK_FAILURE | 0 |
| 0x48228E | FR_E_ACCESS | 1 |
| 0x482290 | MCU_E_CLOCK_FAILURE | 0 |
| 0x482291 | FRIF_E_JLE_SYNC | 1 |
| 0x482298 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x4822A1 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x4822A5 | VSM_EVENT_VEHICLESTATE | 1 |
| 0x482384 | Flash - Vergleich gescheitert | 0 |
| 0x482385 | Flash - Loeschen gescheitert | 0 |
| 0x482386 | Flash - Lesen gescheitert | 0 |
| 0x482387 | Flash - Schreiben gescheitert | 0 |
| 0x4823CE | Diagnosemaster - Warteschlange voll | 0 |
| 0x4823CF | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x482451 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 |
| 0x482453 | Sensor - Lenkwinkel Index Verdacht Riemensprung | 0 |
| 0x482454 | Lenkgetriebe - Reibung zu hoch | 0 |
| 0x482455 | DEM_EVENT_FRM_INTERFACE_ERROR | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | KL15N_STATUS | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4001 | Spannung Voltage level | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4002 | ENGINE_RUNNING | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4003 | VEHICLE_SPEED | km/h | high | unsigned char | - | 4 | 1 | 0 |
| 0x4004 | GENERATOR_LOAD | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4005 | STKL_STATUS | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4006 | Operation Mode Application ID OP_MODE_APPL_ID | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4007 | Fehler ID Error ID | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4008 | DEBUG_INFO_0 | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4009 | DEBUG_INFO_1 | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x400A | DEBUG_INFO_2 | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x400B | DEBUG_INFO_3 | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x400C | DEBUG_INFO_4 | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x400D | DEBUG_INFO_5 | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XAB20

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_ZUSTAND_SPURSTANGE | - | - | + | 0-n | high | unsigned char | - | TAB_VERBAUT | - | - | - | Spurstangen eingehaengt ja oder nein |
| STAT_REIBUNG_DURCHSCHNITT_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf der gesamten Zahnstange |
| STAT_REIBUNG_SEGMENT_1_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 1. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_2_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 2. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_3_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 3. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_4_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 4. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_5_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 5. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_6_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 6. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_7_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 7. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_8_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 8. Segment der Zahnstange |

### RES_0XAB21

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_MOMENTENSENSOR_OFFSET_WERT | - | - | + | Nm | high | int | - | - | - | 128.0 | - | gelernter Offset nach dem lernen des neuen Offset des Lenkmomentensensors |

### RES_0XAB22

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_OFFSET_ZAHNSTANGENMITTE_NEU_WERT | - | - | + | rad | high | int | - | - | - | 256.0 | - | Neuer Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_OFFSET_ZAHNSTANGENMITTE_ALT_WERT | - | - | + | rad | high | int | - | - | - | 256.0 | - | Alter Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_ZAHNSTANGENLAENGE_WERT | - | - | + | mm | high | unsigned int | - | - | - | 256.0 | - | ermittelte Länge der Zahnstange |
| STAT_MOTORMOMENT_ANSCHLAG_LINKS_WERT | - | - | + | Nm | high | int | - | - | - | 256.0 | - | gestelltes Motormoment im linken Anschlag |
| STAT_MOTORMOMENT_ANSCHLAG_RECHTS_WERT | - | - | + | Nm | high | int | - | - | - | 256.0 | - | gestelltes Motormoment im rechten Anschlag |

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

### RES_0XDB57

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XDB5A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

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

### RES_0XFD05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTUAL_BELT_JUMP_ERROR_WERT | mm | high | int | - | - | 1 | 256 | 0 | Actual belt jump error. |
| STAT_CUMULATED_BELT_JUMP_ERROR_WERT | mm | high | int | - | - | 1 | 256 | 0 | Cumulated belt jump error. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EPS_EIGENDIAGNOSE_REIBUNG | 0xAB20 | - | Prüft durch Verfahren der Lenkung die Reibung im Lenkungsstrang. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB20 | RES_0xAB20 |
| LENKMOMENTENSENSOR_OFFSET_LERNEN | 0xAB21 | - | Lernt durch Verfahren der Lenkung ein eventuell vorhandenes Offset des Lenkmomentensensors. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB21 |
| EPS_INDEXSENSOR_KALIBRIERUNG | 0xAB22 | - | Lernt durch Verfahren der Lenkung die genaue Lage der Indexflanken auf der Lenksäule. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB22 |
| EPS_PENDELN | 0xAB56 | - | Start und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56 | RES_0xAB56 |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Start Reset Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71 | RES_0xAB71 |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72 | RES_0xAB72 |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57 |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen und Vorgeben Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB5A | RES_0xDB5A |
| EPS_STROEME | 0xDB8B | - | Auslesen Strom EPS Motor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB8B |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99 |
| READ_SC_VERSION | 0x1720 | STAT_SC_VERSION_WERT | - | - | - | - | long | - | - | - | - | - | 22 | - | - |
| READ_VIN | 0xF190 | STAT_VIN_DATA | VIN number | DATA | - | - | data[17] | - | - | - | - | - | 22 | - | - |
| READ_BELT_JUMP_ERROR | 0xFD05 | - | This job shall read out the actual and the cumulated belt jump error. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD05 |

### TAB_EPS_DETAIL_EIGENDIAGNOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg - kein Problem erkannt |
| 0x03 | Erfolg - Problem behoben |
| 0x04 | Fehler - Problem nicht behoben, bitte Wiederholen |
| 0x0A | Routine in aktueller Session nicht ausführbar, GARAGE_MODE starten |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Abbruch - Lenkradeingriff erfolgt |
| 0x0D | Abbruch - Sicherheitsabschaltung |
| 0x0E | Fehler - Indexsensor |
| 0x0F | Fehler - Kalibrierfehler |
| 0x10 | Abbruch - Lenkrad nicht in Mittenstellung |
| 0x11 | Abbruch - Vorderräder haben hohe Reibung |
| 0x13 | Abbruch - Vorderräder nicht frei beweglich |
| 0x14 | Fehler - Spannungsversorgung oder Temperatur |
| 0x15 | Fehler - Zahnriemen rutscht oder gerissen |
| 0x20 | Fehler - Reibung etwas erhöht |
| 0x21 | Fehler - Reibung stark erhöht |
| 0x80 | Erfolg |
| 0xFF | ungültig |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | NOK |

### TAB_EPS_WERT

| WERT | TEXT |
| --- | --- |
| 0 | Index Position nicht gefunden |
| 1 | Index Position gefunden |
| 2 | Geradeauslauf-Offset geschrieben und Index Position nicht gefunden |
| 3 | Geradeauslauf-Offset geschrieben und Index Position gefunden und gespeichert |
| FF | ungültig |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### TAB_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

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

### TAB_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0 | nicht verbaut |
| 1 | verbaut |
