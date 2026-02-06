# rdcuds.prg

## General

|  |  |
| --- | --- |
| File | rdcuds.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 71 |
| Origin | BMW EF-442 Julian_Strang |
| Revision | 3.001 |
| Author | Huf_Electronics_Bretten_GmbH ENTS4 Rapp |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Reifen Druck Control Low Cost BN2020 |  |  |
| ORIGIN | string | BMW EF-442 Julian_Strang |  |  |
| REVISION | string | 3.001 |  |  |
| AUTHOR | string | Huf_Electronics_Bretten_GmbH ENTS4 Rapp |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.39 |  |  |
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

### ARG_0XDCC0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RE_ID | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | ID der Radelektronik |
| RE_POS | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | - | - | Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts, 4 = Reserverad(nur RDC Gen2), 5, 6, 7, 8, 9 = Radposition nicht bekannt |

### ARG_0XDCC6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSNR | 0-n | - | unsigned char | - | TAB_RDC_STEUERFUNKTIONEN | - | - | - | - | - | 1 = BANDMODE - Bandmode; 2 = ER_FAHRT - Eigenraderkennung bei Fahrt; 3 = ER_STAND - Eigenraderkennung im Stand (Gen2); 4 = TEST_ER_FAHRT - Empfang der Eigenraeder bei Fahrt pruefen; 5 = TEST_ER_STAND - Empfang der Eigenraeder im Stand pruefen (Gen2); 6 = RDCBUS_DIAG - Stromdiagnose LIN-Teilnehmer (Gen2); 7 = SOLLDRUCK_SCHREIBEN - aktuelle Reifendruckwerte als Sollwert; 8 = CAL_REQUEST - Kalibrieranforderung; 9 = ER_FAHRT_OHNE_TRIGGER - Eigenraderkennung bei Fahrt ohne Auswertung Triggerbit (Gen3); 10 = TEST_ER_FAHRT_OHNE_TRIGGER = Empfang der Eigenraeder bei Fahrt pruefen ohne Auswertung Triggerbit (Gen3) |
| AKTIONSNR | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 - SET; 0 - RESET |

### ARG_0XDCEE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLDRUCK | bar | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 3.0 | 4.8 | Sollwert Raddruck für Radelektronik |
| RADPOS | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | - | - | Position Rad |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
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
| 0x022000 | Energiesparmode aktiv | 0 |
| 0x022008 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02200A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02200B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02200C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF20 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x481F80 | RDC-Steuergeraet im Bandmodus | 0 |
| 0x481F81 | Steuergeraet defekt - EEPROM-Fehler | 0 |
| 0x481F82 | Radelektronik nicht kompatibler Hersteller - Position unbekannt | 0 |
| 0x481F83 | Radelektronik falsche Generation - Position unbekannt | 0 |
| 0x481F84 | Raderkennung nicht moeglich | 0 |
| 0x481F8B | Radelektronik vorne links kein Empfang | 0 |
| 0x481F8C | Radelektronik vorne rechts kein Empfang | 0 |
| 0x481F8D | Radelektronik hinten links kein Empfang | 0 |
| 0x481F8E | Radelektronik hinten rechts kein Empfang | 0 |
| 0x481F8F | Radelektronik (Position unbekannt) kein Empfang | 0 |
| 0x481FA0 | Radelektronik vorne links defekt | 0 |
| 0x481FA1 | Radelektronik vorne rechts defekt | 0 |
| 0x481FA2 | Radelektronik hinten links defekt | 0 |
| 0x481FA3 | Radelektronik hinten rechts defekt | 0 |
| 0x481FA4 | Radelektronik Position unbekannt defekt | 0 |
| 0x481FA5 | Unterspannung KL30 | 1 |
| 0x481FA6 | Steuergeraet defekt Betriebsspannung | 0 |
| 0x481FA8 | Steuergeraet defekt ROM-Fehler | 0 |
| 0x481FA9 | Steuergeraet defekt - RAM-Fehler | 0 |
| 0x481FAA | Ueberspannung KL30 | 1 |
| 0x481FBE | Funkverbindung durch Fremdeinfluss gestoert | 1 |
| 0x481FC5 | HF-Empfaenger defekt | 0 |
| 0x481FC6 | Raderkennung nicht moeglich (zu viele RE) | 1 |
| 0xD1040B | K-CAN Physikalischer Busfehler | 0 |
| 0xD10414 | K-CAN Control Module Bus OFF | 0 |
| 0xD10BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD11400 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger RDC (K-CAN), Sender CAS (FlexRay) | 1 |
| 0xD11401 | Botschaft (Aussentemperatur, 0x2CA) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11402 | Botschaft (Kilometerstand, 0x330) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11403 | Botschaft (Daten Antriebsstrang, 0x3F9) fehlt, Empfänger RDC (K-CAN), Sender DME1 (FlexRay) | 1 |
| 0xD11404 | Botschaft (UhrzeitDatum, 0x2F8) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11405 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger RDC (K-CAN), Sender ICM_QL (FlexRay) | 1 |
| 0xD11406 | Botschaft (Einheiten, 0x2F7) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11407 | Botschaft (Status Gang Rückwärts, 0x3B0) fehlt, Empfänger RDC (K-CAN), Sender FRMFA (Body-CAN) | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0005 | SendeId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0x1703 | Temperatur | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x1704 | Geschwindigkeit | km/h | high | unsigned char | - | 2 | 1 | 0 |
| 0x1705 | EmpfangsId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

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
| 0x200001 | DM_Queue_Full | 1 |
| 0x200002 | DM_Queue_Deleted | 1 |
| 0x200003 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 1 |
| 0x200004 | Ausfall Botschaft Fahrzeugzustand | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0005 | SendeId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0x1703 | Temperatur | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x1704 | Geschwindigkeit | km/h | high | unsigned char | - | 2 | 1 | 0 |
| 0x1705 | EmpfangsId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TPMS_MARKET | 0-n | low | unsigned char | - | TAB_RDC_TPMS_MARKET | - | - | - | US oder EU-Markt: 0 = EU; 1 = US |
| STAT_DELAY_PREWARN_ENABLE | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert die Verzögerung der Vorwarnung auf Basis der Fahrzeuggeschwindigkeit: 0 = deaktiviert; 1 = aktiviert |
| STAT_PREWARN_ENABLE | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert / deaktiviert die Anzeige der Vorwarnung: 0 = deaktiviert; 1 = aktiviert |
| STAT_C_P_CHECK_DIPLAY | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert, deaktiviert die Fortschrittsanzeige im Initialisierungsprozess: 0 = deaktiviert; 1 = aktiviert |
| STAT_PREWARN_FUELSTOP | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert, deaktiviert die Vorwarnung beim Tanken: 0 = deaktiviert; 1 = aktiviert |
| STAT_PREWARN_IGNITION | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert, deaktiviert die Anzeige der Vorwarnung beim Klemmenwechsel: 0 = deaktiviert; 1 = aktiviert |
| STAT_PREC_RESET | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert, deaktviert die Solldruckvorgabe durch den Fahrer: 0 = deaktiviert; 1 = aktiviert |
| STAT_RDC_WARN_DELAY | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert, deaktiviert die Verzögerung einer Pannenwarnung: 0 = deaktiviert; 1 = aktiviert |
| STAT_PREC_RESET_OFFSET | 0-n | low | unsigned char | - | TAB_RDC_ENABLE_DISABLE | - | - | - | Aktiviert, deaktiviert  die Toleranz der Befüllbombe: 0 = deaktiviert; 1 = aktiviert |
| STAT_T_REF_SHIFT_WERT | - | low | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Temperaturkompensation: 1 = keine Kompensation; 0 = maximale Kompensation |
| STAT_UIA_TH_C_WERT | % | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturkompensierte Warnschwelle (15% - 20%): 255 = ungültiger Wert |
| STAT_UIW_TH_C_WERT | % | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturkompensierte Vorwarnschwelle (10% - 100%): 255 = ungültiger Wert |
| STAT_UIA_TH_NC_WERT | % | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unkompensierte Warnschwelle (15% - 50%): 255 = ungültiger Wert |
| STAT_UIW_TH_NC_WERT | % | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unkompensierte Vorwarnschwelle (10% - 100%): 255 = ungültiger Wert |
| STAT_P_DIST_PREWARN_MIN_WERT | kPa | low | unsigned char | - | - | 2.5 | 1.0 | 0.0 | Minimaler Abstand zwischen Vorwarnschwelle und Solldruck (0 kPa - 50 kPa): 255 = ungültiger Wert |
| STAT_MIN_RCP_FA_WERT | kPa | low | unsigned char | - | - | 2.5 | 1.0 | 0.0 | Mindestdruck für die Vorderachse (200 kPa - 350 kPa): 255 = ungültiger Wert |
| STAT_C_MIN_RCP_RA_WERT | kPa | low | unsigned char | - | - | 2.5 | 1.0 | 0.0 | Mindestdruck für die Hinterachse (200 kPa - 350 kPa): 255 = ungültiger Wert |
| STAT_DELTA_P_L_R_WERT | kPa | low | unsigned char | - | - | 2.5 | 1.0 | 0.0 | Maximale Druckdifferenz zwischen linker und rechter Seite (20 kPa - 100 kPa): 255 = ungültiger Wert |
| STAT_P_INIT_RANGE_MAX_WERT | kPa | low | unsigned char | - | - | 2.5 | 1.0 | 0.0 | Maximale Druckdifferenz der Vorder- und Hinterachse zum Tankklappendruck (20 kPa - 200 kPa): 255 = ungültiger Wert |
| STAT_TIMEOUT_PREWARN_WERT | min | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filterzeit zur Ausgabe einer Vorwarnung (2 min - 60 min): 255 = ungültiger Wert |
| STAT_STAT_DT_AMB_PREWARN_WERT | K | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturdifferenz Reifen zu Aussentemperatur bei der die Vorwarnung deaktiviert wird (0K - 254K): 255 = ungültiger Wert |
| STAT_C_DP_TOL_PMIN_WERT | kPa | low | unsigned char | - | - | 2.5 | 1.0 | 0.0 | Dieser Parameter definiert den Wert, um den ein vom Fahrer vorgegebener Solldruck maximal korrigiert werden darf, ohne dass vom System eine Meldung ausgegeben wird. |

### RES_0XDCC8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_HARTE_WARNUNG_VL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler der harten Warnungen vorne links |
| STAT_ZAEHLER_HARTE_WARNUNG_VR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler der harten Warnungen vorne rechts |
| STAT_ZAEHLER_HARTE_WARNUNG_HL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler der harten Warnungen hinten links |
| STAT_ZAEHLER_HARTE_WARNUNG_HR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler der harten Warnungen hinten rechts |
| STAT_ZAEHLER_HARTE_WARNUNG_XX_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler der harten Warnungen waehrend ER Verlust |

### RES_0XDCD3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_WEICHE_WARNUNG_VL | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler weiche Warnung vorne links |
| STAT_ZAEHLER_WEICHE_WARNUNG_VR | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler weiche Warnung vorne rechts |
| STAT_ZAEHLER_WEICHE_WARNUNG_HL | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler weiche Warnung hinten links |
| STAT_ZAEHLER_WEICHE_WARNUNG_HR | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler weiche Warnung hinten rechts |
| STAT_ZAEHLER_WEICHE_WARNUNG_XX | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler weiche Warnung waehrend ER Verlust |

### RES_0XDCD4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EIGENRAEDER_BEKANNT | 0-n | - | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | 1.0 | 1.0 | 0.0 | Alle Eigenraeder sind bekannt: 0 = nicht bekannt; 1 = bekannt |
| STAT_RADPOS_ER_BEKANNT | 0-n | - | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | 1.0 | 1.0 | 0.0 | Radpositionen aller Eigenraeder sind bekannt: 0 = nicht bekannt; 1 = bekannt |
| STAT_RADPOS_UEBERPRUEFT_BESTAETIGT | 0-n | - | unsigned char | - | TAB_RDC_CONFIRMED | 1.0 | 1.0 | 0.0 | Alle Radpositionen sind ueberprueft und bestaetigt: 0 = nicht bestätigt; 1 = bestätigt |
| STAT_DTC_INACTIVE | 0-n | - | unsigned char | - | TAB_RDC_DTC_ACTIVE | 1.0 | 1.0 | 0.0 | Aktiver DTC Fehler mit Warnlampe im Fehlerspeicher vorhanden: 0 = DTC inaktiv; 1 = DTC aktiv |
| STAT_KAL_ANFORDERUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_CAL_ACTIVE | 1.0 | 1.0 | 0.0 | Kalibrieranforderung steht an: 0 = Kalibrieranforderung inaktiv; 1 = Kalibrieranforderung aktiv |
| STAT_RAD_ZUORDNUNG_TIMEOUT | 0-n | - | unsigned char | - | TAB_RDC_TIMEOUT | 1.0 | 1.0 | 0.0 | Radzuordnung konnte nicht abgeschlossen werden: 0 = kein Timeout; 1 = Timeout |
| STAT_BANDMODE_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_BANDMODE_ACTIVE | 1.0 | 1.0 | 0.0 | Abfrage ob Bandmode im RDC aktiviert ist: 0 = Bandmode inaktiv ; 1 = Bandmode aktiv |
| STAT_ER_ERKENNUNG_FAHRT | 0-n | - | unsigned char | - | TAB_RDC_STARTED | - | - | - | Eigenraderkennung waehrend der Fahrt wurde gestartet: 0 = nicht gestartet 1 = gestartet |
| STAT_TEST_EIGENRAD_FAHRT | 0-n | - | unsigned char | - | TAB_RDC_STARTED | 1.0 | 1.0 | 0.0 | Test-Eigenraderkennung in Fahrt wurde gestartet: 0 = nicht gestartet , 1 = gestartet |
| STAT_TEST_EIGENRAD_STAND | 0-n | - | unsigned char | - | TAB_RDC_STARTED | 1.0 | 1.0 | 0.0 | Test-Eigenraderkennung im Stand wurde gestartet: 0 = nicht gestartet, 1 = gestartet |
| STAT_ER_FAHRT_VTHRS_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Geschwindigkeitsschwelle fuer Eigenraderkennung bei Fahrt aktiviert : 0 = inaktiv , 1 = aktiv |
| STAT_BM_TIMEOUT_ACTIVE | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Bandmode Timeout laeuft : 0 = inaktiv , 1 = aktiv |
| STAT_HARTE_WARNUNG_UNSPEZIFISCH_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Harte Warnung unspezifisch, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_VL_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Harte Warnung vorne links, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_VR_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Harte Warnung vorne rechts, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_HL_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Harte Warnung hinten links, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_HR_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Harte Warnung hinten rechts, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_KL_15_EIN | 0-n | - | unsigned char | - | TAB_RDC_ON_OFF | 1.0 | 1.0 | 0.0 | Klemme 15 EIN : 0 = AUS, 1 = EIN |
| STAT_MOTOR_LAEUFT_EIN | 0-n | - | unsigned char | - | TAB_RDC_ON_OFF | 1.0 | 1.0 | 0.0 | Motor läuft : 0 = Aus ; 1 = EIN |
| STAT_FZG_FAEHRT | 0-n | - | unsigned char | - | TAB_RDC_VEHICLE_RUNNING | 1.0 | 1.0 | 0.0 | Signal Fahrzeug fährt : 0 = steht , 1 = fährt |
| STAT_ERKENNUNG_ALLE_RE | 0-n | - | unsigned char | - | TAB_RDC_DETECTED | 1.0 | 1.0 | 0.0 | Alle Radelektroniken erkannt : 0 = nicht erkannt 1 = erkannt |
| STAT_ERKENNUNG_ZUVIELE_RE | 0-n | - | unsigned char | - | TAB_RDC_DETECTED | 1.0 | 1.0 | 0.0 | Zu viele Radelektroniken erkannt : 0 = nicht erkannt , 1 = erkannt |
| STAT_STOERSENDER | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Funkstoerung vorhanden : 0 = inaktiv , 1 = aktiv |
| STAT_FREQUENZ_WERT | MHz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gibt die aktuelle RF-Frequenz zurück. Die Frequenz ist abhaengig von der Codierung. (315 oder 433). Angabe in MHz |

### RES_0XDCD5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | 1.0 | 1.0 | 0.0 | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | - | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |

### RES_0XDCD6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | 1.0 | 1.0 | 0.0 | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | - | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |

### RES_0XDCD7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | 1.0 | 1.0 | 0.0 | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | - | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |

### RES_0XDCD8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | int | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | 1.0 | 1.0 | 0.0 | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | 1.0 | 1.0 | 0.0 | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | - | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |

### RES_0XDCD9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_RE0_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE0 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE0 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE1_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE1 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE1 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE1 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE2_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE2 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE2 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE3_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE3 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE3 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE4_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE4 |
| STAT_REIFENDRUCK_RE4_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE4 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE4_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE4 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE4 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE5_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE5 |
| STAT_REIFENDRUCK_RE5_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE5 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE5_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE5 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE5 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE6_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE6 |
| STAT_REIFENDRUCK_RE6_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE6 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE6_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE6 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE6 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE7_WERT | HEX | high | unsigned long | - | - | - | - | - | Identifier Radelektronik RE7 |
| STAT_REIFENDRUCK_RE7_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE7 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE7_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE7 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE7 (255 => ungueltig) |

### RES_0XDCDA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemflags |
| STAT_REIFENDRUCK_PANNENRAD_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert des Pannenauslösenden Rades (-9.999 bar => ungueltig) |
| STAT_REIFENTEMPERATUR_PANNENRAD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperaturwert des Pannenauslösenden Rades (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition des Pannenauslösenden Rades |
| STAT_BEFUELLDRUCK_PANNENRAD_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert des Pannenauslösenden Rades (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_PANNENRAD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert des Pannenauslösenden Rades (-99 °C => ungueltig) |

### RES_0XDCDB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemflags |
| STAT_REIFENDRUCK_PANNENRAD_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert des Pannenauslösenden Rades (-9.999 bar => ungueltig) |
| STAT_REIFENTEMPERATUR_PANNENRAD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperaturwert des Pannenauslösenden Rades (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition des Pannenauslösenden Rades |
| STAT_BEFUELLDRUCK_PANNENRAD_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert des Pannenauslösenden Rades (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_PANNENRAD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert des Pannenauslösenden Rades (-99 °C => ungueltig) |

### RES_0XDCDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemflags |
| STAT_REIFENDRUCK_PANNENRAD_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert des Pannenauslösenden Rades (-9.999 bar => ungueltig) |
| STAT_REIFENTEMPERATUR_PANNENRAD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperaturwert des Pannenauslösenden Rades (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition des Pannenauslösenden Rades |
| STAT_BEFUELLDRUCK_PANNENRAD_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert des Pannenauslösenden Rades (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_PANNENRAD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert des Pannenauslösenden Rades (-99 °C => ungueltig) |

### RES_0XDCDE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemflags |
| STAT_RADPOSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE0 (-99 °C => ungueltig) |
| STAT_RADPOSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE1 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE1 (-99 °C => ungueltig) |
| STAT_RADPOSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE2 (-99 °C => ungueltig) |
| STAT_RADPOSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE3 (-99 °C => ungueltig) |

### RES_0XDCDF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemflags |
| STAT_INTERNER_FEHLERCODE_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SG-interner Fehlercode |

### RES_0XDD4C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_WERT | d | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_WERT | h | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |

### RES_0XDD4E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_WERT | d | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_WERT | h | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |

### RES_0XDD50

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_WERT | d | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_WERT | h | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |

### RES_0XDD51

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_WERT | d | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_WERT | h | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |

### RES_0XDD52

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_WERT | d | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_WERT | h | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |

### RES_0XDD53

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_WERT | d | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis_Ruecknahme. 99.99.99 => ungültig |
| STAT_UHRZEIT_WERT | h | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis_Ruecknahme. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemflags |
| STAT_RADPOSITION_RE0 | 0-n | high | unsigned char | - | TAB_RE_RADPOSITION | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE0 (-99 °C => ungueltig) |
| STAT_RADPOSITION_RE1 | 0-n | high | unsigned char | - | TAB_RE_RADPOSITION | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE1(-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE1 (-99 °C => ungueltig) |
| STAT_RADPOSITION_RE2 | 0-n | high | unsigned char | - | TAB_RE_RADPOSITION | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE2 (-99 °C => ungueltig) |
| STAT_RADPOSITION_RE3 | 0-n | high | unsigned char | - | TAB_RE_RADPOSITION | 1.0 | 1.0 | 0.0 | Radposition Radelektronik RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE3 (-99 °C => ungueltig) |

### RES_0XDD56

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | 1.0 | 1.0 | 0.0 | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RE_SENDEMODE | 1.0 | 1.0 | 0.0 | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | high | unsigned char | - | TAB_RE_ROLLSWITCH | 1.0 | 1.0 | 0.0 | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | 1.0 | 1.0 | 0.0 | Telegrammtyp |

### RES_0XDD57

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | 1.0 | 1.0 | 0.0 | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RE_SENDEMODE | 1.0 | 1.0 | 0.0 | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | high | unsigned char | - | TAB_RE_ROLLSWITCH | 1.0 | 1.0 | 0.0 | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | 1.0 | 1.0 | 0.0 | Telegrammtyp |

### RES_0XDD58

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | 1.0 | 1.0 | 0.0 | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RE_SENDEMODE | 1.0 | 1.0 | 0.0 | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | high | unsigned char | - | TAB_RE_ROLLSWITCH | 1.0 | 1.0 | 0.0 | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | 1.0 | 1.0 | 0.0 | Telegrammtyp |

### RES_0XDD59

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | 1.0 | 1.0 | 0.0 | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RE_SENDEMODE | 1.0 | 1.0 | 0.0 | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | high | unsigned char | - | TAB_RE_ROLLSWITCH | 1.0 | 1.0 | 0.0 | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | 1.0 | 1.0 | 0.0 | Telegrammtyp |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_CODIERDATEN_LESEN | 0x4000 | - | Auslesen der vorhandenen Codierdaten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000 |
| STEUERN_RADELEKTRONIK_VORGEBEN | 0xDCC0 | - | Radelektronik vorgeben. Der Job weist der Radelektronik die durch das 1.Argument angewählt wurde, ihre Position am Fahrzeug zu (z.B. vorn rechts). Die Radelektronik kennt sonst ihre Position im Fahrzeug nicht. Sie kennt nur ihre ID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC0 | - |
| STEUERN_DIGITAL_RDC | 0xDCC6 | - | Setzen diverser Bandmodi Achtung: Busdiagnose und Tests im Stand nur mit RDC Generation2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC6 | - |
| STATUS_HS_WARNUNGSZAEHLER_LESEN | 0xDCC8 | - | Auslesen der Warnungszaehler des Historienspeichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC8 |
| STATUS_HS_ZAEHLER_WEICHE_WARNUNG_LESEN | 0xDCD3 | - | Auslesen der Zaehler aus dem Historienspeicher, welche die Auftretenshaeufigkeit der weichen Warnung wiedergeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD3 |
| STATUS_RDC_GEN3_LESEN | 0xDCD4 | - | Status Abfrage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD4 |
| STATUS_MESSDATENBLOCK_GEN3_1 | 0xDCD5 | - | Mit dem Job STATUS_MESSDATENBLOCK_GEN3_1 werden die Daten aus dem Messdatenblock 1 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD5 |
| STATUS_MESSDATENBLOCK_GEN3_2 | 0xDCD6 | - | Mit dem Job STATUS_MESSDATENBLOCK_GEN3_2 werden die Daten aus dem Messdatenblock 2 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD6 |
| STATUS_MESSDATENBLOCK_GEN3_3 | 0xDCD7 | - | Mit dem Job STATUS_MESSDATENBLOCK_GEN3_3 werden die Daten aus dem Messdatenblock 3 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD7 |
| STATUS_MESSDATENBLOCK_GEN3_4 | 0xDCD8 | - | Mit dem Job STATUS_MESSDATENBLOCK_GEN3_4 werden die Daten aus dem Messdatenblock 4 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD8 |
| STATUS_RE_LESEN_DRUCKCODIERUNG | 0xDCD9 | - | Auslesen Druckcodierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD9 |
| STATUS_HS_WARNEREIGNIS_GEN3_1 | 0xDCDA | - | Auslesen eines Warnereignisses des Historienspeichers. Warnereignis 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDA |
| STATUS_HS_WARNEREIGNIS_GEN3_2 | 0xDCDB | - | Auslesen eines Warnereignisses des Historienspeichers. Warnereignis 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDB |
| STATUS_HS_WARNEREIGNIS_GEN3_3 | 0xDCDC | - | Auslesen eines Warnereignisses des Historienspeichers. Warnereignis 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDC |
| STATUS_HS_KALIBRIEREREIGNIS_GEN3 | 0xDCDE | - | Auslesen eines Kalibrierereignisses des Historienspeichers. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDE |
| STATUS_HS_INAKTIVEREIGNIS_GEN3 | 0xDCDF | - | Auslesen eines Inaktivereignisses des Historienspeichers. Inaktivereignis 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDF |
| STEUERN_SOLLDRUCK_VORGEBEN | 0xDCEE | - | Vorgabe Sollwert Reifendruck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCEE | - |
| STATUS_HS_INAKTIVEREIGNIS_GEN3_DATUM | 0xDD4C | - | Ergaenzung zum Datum inaktives Ereignis | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD4C |
| STATUS_HS_INAKTIV_ZAEHLER_LESEN | 0xDD4D | STAT_ZAEHLER_INAKTIV | Zähler für Inaktiv-Ereignisse | 0-n | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HS_KALIBRIEREREIGNIS_GEN3_DATUM | 0xDD4E | - | Datum fuer Kalibrierereignisse | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD4E |
| STATUS_HS_KALIBRIER_ZAEHLER_LESEN | 0xDD4F | STAT_ZAEHLER_KALIBRIERUNG | Zähler für Kalibrierereignisse | 0-n | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HS_WARNEREIGNIS_GEN3_1_DATUM | 0xDD50 | - | Datum fuer Warnereignis 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD50 |
| STATUS_HS_WARNEREIGNIS_GEN3_2_DATUM | 0xDD51 | - | Datum fuer Warnereignis 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD51 |
| STATUS_HS_WARNEREIGNIS_GEN3_3_DATUM | 0xDD52 | - | Datum fuer Warnereignis 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD52 |
| STATUS_HS_WARNEREIGNIS_RUECKNAHME | 0xDD53 | - | Rücknahme Warnung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD53 |
| STATUS_HS_WARN_RUECKNAHME_ZAEHLER_LESEN | 0xDD54 | STAT_ZAEHLER_WARN_RUECKNAHME | Zähler für Warnungsrücknahmen durch Luftnachfüllen oder Radtausch. | 0-n | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_APPLBOTSCHAFT_AKTIV | 0xDD55 | STAT_APPLBOTSCHAFT | Applikationsbotschaft 7D4 ein/ausgeschaltet | 0-n | - | high | unsigned char | TAB_RE_APPLBOTSCHAFT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_MESSDATENBLOCK_AK_1 | 0xDD56 | - | Ergaenzung fuer Messdatenblock 1 wegen AK Protokoll | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD56 |
| STATUS_MESSDATENBLOCK_AK_2 | 0xDD57 | - | Ergaenzung fuer Messdatenblock 2 wegen AK Protokoll | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD57 |
| STATUS_MESSDATENBLOCK_AK_3 | 0xDD58 | - | Ergaenzung fuer Messdatenblock 3 wegen AK Protokoll | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD58 |
| STATUS_MESSDATENBLOCK_AK_4 | 0xDD59 | - | Ergaenzung fuer Messdatenblock 4 wegen AK Protokoll | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD59 |

### TAB_RDC_AKTIV_INAKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv |
| 0x02 | Tankstop |
| 0x03 | Gateway oder Antennenfehler |
| 0x04 | Weiche Warnung aktiv |
| 0xFF | Signal unbekannt |

### TAB_RDC_BANDMODE_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Bandmode inaktiv |
| 1 | Bandmode aktiv |
| 255 | nicht definiert |

### TAB_RDC_BEKANNT_NICHT_BEKANNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht bekannt |
| 1 | bekannt |
| 255 | nicht definiert |

### TAB_RDC_CAL_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrieranforderung inaktiv |
| 1 | Kalibrieranforderung aktiv |
| 2 | Kalibrierung abgewiesen |
| 255 | nicht definiert |

### TAB_RDC_CHANGED

| WERT | TEXT |
| --- | --- |
| 0 | nicht geändert |
| 1 | geändert |
| 255 | Signal unbekannt |

### TAB_RDC_CONFIRMED

| WERT | TEXT |
| --- | --- |
| 0 | nicht bestätigt |
| 1 | bestätigt |
| 255 | nicht definiert |

### TAB_RDC_DETECTED

| WERT | TEXT |
| --- | --- |
| 0 | nicht erkannt |
| 1 | erkannt |
| 255 | nicht definiert |

### TAB_RDC_DTC_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | DTC inaktiv |
| 1 | DTC aktiv |
| 255 | nicht definiert |

### TAB_RDC_ENABLE_DISABLE

| WERT | TEXT |
| --- | --- |
| 0 | deaktiviert |
| 1 | aktiviert |
| 255 | nicht definiert |

### TAB_RDC_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 9 | nicht bedient |
| 255 | nicht definiert |

### TAB_RDC_RAD_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0 | Stillstand |
| 1 | rechts |
| 2 | links |
| 3 | unbekannt |
| 255 | nicht definiert |

### TAB_RDC_RAD_POSITION_NR

| WERT | TEXT |
| --- | --- |
| 0 | vorne links |
| 1 | vorne rechts |
| 2 | hinten links |
| 3 | hinten rechts |
| 5 | unbekannt 1 |
| 4 | Reserverad (nur RDC Gen2) |
| 6 | unbekannt 2 |
| 7 | unbekannt 3 |
| 8 | unbekannt 4 |
| 9 | unbekannt 5 (nur RDC Gen2) |

### TAB_RDC_STARTED

| WERT | TEXT |
| --- | --- |
| 0 | nicht gestartet |
| 1 | gestartet |
| 255 | nicht definiert |

### TAB_RDC_STEUERFUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 1 | BANDMODE |
| 2 | ER_FAHRT |
| 3 | ER_STAND |
| 4 | TEST_ER_FAHRT |
| 5 | TEST_ER_STAND |
| 6 | RDCBUS_DIAG |
| 7 | SOLLDRUCK_SCHREIBEN |
| 8 | CAL_REQUEST |
| 9 | ER_FAHRT_OHNE_TRIGGER |
| 10 | TEST_ER_FAHRT_OHNE_TRIGGER |
| 11 | EINSCHALTEN_APPLIKATIONSBOTSCHAFT |

### TAB_RDC_TIMEOUT

| WERT | TEXT |
| --- | --- |
| 0 | kein Timeout |
| 1 | Timeout |
| 255 | nicht definiert |

### TAB_RDC_TPMS_MARKET

| WERT | TEXT |
| --- | --- |
| 0 | EU |
| 1 | US |
| 255 | nicht definiert |

### TAB_RDC_VEHICLE_RUNNING

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt |
| 255 | nicht definiert |

### TAB_RE_APPLBOTSCHAFT

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 255 | Signal unbekannt |

### TAB_RE_HERSTELLER

| WERT | TEXT |
| --- | --- |
| 0 | nicht bedient |
| 1 | Autonet |
| 2 | BERU |
| 3 | Conti |
| 4 | TRW |
| 5 | Schrader |
| 15 | Hersteller unbekannt |

### TAB_RE_RADPOSITION

| WERT | TEXT |
| --- | --- |
| 0 | vorne links |
| 1 | vorne rechts |
| 2 | hinten links |
| 3 | hinten rechts |
| 4 | unbekannt 1 |
| 5 | Reserverad (nur RDC Gen2) |
| 6 | unbekannt 2 |
| 7 | unbekannt 3 |
| 8 | unbekannt 4 |
| 9 | unbekannt 5 (nur RDC Gen2) |

### TAB_RE_ROLLSWITCH

| WERT | TEXT |
| --- | --- |
| 0 | Rollswitch nicht gesetzt |
| 1 | Rollswitch gesetzt |
| 16 | Rollswitch Toggle |

### TAB_RE_SENDEMODE

| WERT | TEXT |
| --- | --- |
| 0 | Mode 0a/0b |
| 1 | Mode 1a/b/c/d |
| 2 | Mode 2 |
| 3 | Mode 3 |
| 4 | Mode 4 |
| 8 | Mode 0a/0b  LF triggered telegram |
| 9 | Mode 1a/b/c/d  LF triggered telegram |
| 10 | Mode 2  LF triggered telegram |
| 11 | Mode 3  LF triggered telegram |
| 12 | Mode 4  LF triggered telegram |

### TAB_RE_TELEGRAMMTYP

| WERT | TEXT |
| --- | --- |
| 0 | AK35 default |
| 130 | BERU G3 only |
| 136 | AK35 BERU long |
| 160 | AK35 BERU medium |
| 193 | AK35 BERU short |
| 255 | nicht definiert |
