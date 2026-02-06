# ucx_i01.prg

## General

|  |  |
| --- | --- |
| File | ucx_i01.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 36 |
| Origin | MetaSystem R&D Cattaneo |
| Revision | 4.004 |
| Author | MetaSystem R&D Cattaneo |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Universal Charging Extension SGBD Index:      0x0F1EB0 |  |  |
| ORIGIN | string | MetaSystem R&D Cattaneo |  |  |
| REVISION | string | 4.004 |  |  |
| AUTHOR | string | MetaSystem R&D Cattaneo |  |  |
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

### BF_AUSLOESER_FAILSAFE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSLOESER_FAILSAFE_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | SPI Kommunikationsfehler: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | DC Unterspannung: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | DC Überspannung: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | DC Überstrom: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Untertemperatur: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Übertemperatur: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Resonanz Übertrom: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Reserviert |
| STAT_AUSLOESER_FAILSAFE_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Aktive Entladung im Leerlauf: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Fehlende Uhrzeit: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Uhr ausgefallen:  0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | PFC Spannung zu gering: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | PFC Spannung zu hoch: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Aktive Entladung wegen Kurzschluss: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Überstrom: 0 = inaktiv; 1 = aktiv |
| STAT_AUSLOESER_FAILSAFE_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Reserviert |

### BF_FEHLERZUSTAND_UCX

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLERZUSTAND_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Standby: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Laden: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Abbruch Laden: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Falsche Kalibrierung: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Charge Enable DSP: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Crash DSP: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Korrektur Leistungsfaktor: 0 = inaktiv; 1 = aktiv |
| STAT_FEHLERZUSTAND_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Reserviert |

### BF_URSACHE_DERATING

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_URSACHE_DERATING_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Übertemperatur NTC 1: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_DERATING_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Übertemperatur NTC2: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_DERATING_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Übertemperatur NTC3: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_DERATING_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Übertemperatur NTC4: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_DERATING_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Übertemperatur NTC5: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_DERATING_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Übertemperatur NTC6: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_DERATING_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Reserviert |
| STAT_URSACHE_DERATING_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Reserviert |

### BF_URSACHE_LADEUNTERBRECHUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Effizienz Sensor unterer Schwellenwert unterschritten: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Effizienz Sensor oberer Schwellenwert überschritten: 0 = inaktiv; 1 = aktiv |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | reserviert |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | reserviert |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | reserviert |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | reserviert |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | reserviert |
| STAT_URSACHE_LADEUNTERBRECHUNG_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | reserviert |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021500 | Energiesparmode aktiv | 0 |
| 0x02FF15 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x21E605 | Ladeelektronik: Überspannung an 12V Spannungsversorgung | 0 |
| 0x21E606 | Ladeelektronik: Unterspannung an 12V Spannungsversorgung | 0 |
| 0x21E60A | Lade-Elektronik: digitaler Signalprozessor, aktive Entladung, Leitungsunterbrechung | 0 |
| 0x21E60B | Ladeelektronik: Software-Fehler | 0 |
| 0x21E60C | Ladeelektronik: ECU interner Kommunikationsfehler | 0 |
| 0x21E60D | Ladeelektronik: Unterspannung am AC-Anschluss | 0 |
| 0x21E60E | Ladeelektronik: Überspannung am AC-Anschluss | 0 |
| 0x21E60F | Ladeelektronik: Unterspannung am DC-Anschluss | 0 |
| 0x21E610 | Ladeelektronik: Überspannung am DC-Anschluss | 0 |
| 0x21E611 | Ladeelektronik: DC Überstrom | 0 |
| 0x21E612 | Ladeunterbrechung - Temperaturunterschreitung | 1 |
| 0x21E613 | Ladeunterbrechung - Temperaturüberschreitung | 1 |
| 0x21E614 | Service Disconnect: Zustand unplausibel | 1 |
| 0x21E615 | Lade-Elektronik: Wirkungsgrad außerhalb Sollbereich (unten) | 0 |
| 0x21E616 | Lade-Elektronik: Wirkungsgrad außerhalb Sollbereich (oben) | 0 |
| 0x21E61C | Ladeelektronik: AC Überstrom | 0 |
| 0x21E61D | Montagemodus aktiv | 0 |
| 0x21E620 | Lade-Elektronik: digitaler Signalprozessor, Aktive Entladung, Kurzschluss nach Masse oder Plus | 0 |
| 0x21E621 | Lade-Elektronik: digitaler Signalprozessor, Uhr fehlt | 0 |
| 0x21E622 | Lade-Elektronik: Hochvolt DC Spannungssensor, Kurzschluss nach Masse | 0 |
| 0x21E623 | Lade-Elektronik: Hochvolt DC Spannungssensor, Kurzschluss nach Plus | 0 |
| 0x21E624 | Lade-Elektronik: Hochvolt DC Spannung außerhalb sollbreich (unten) | 0 |
| 0x21E625 | Lade-Elektronik: Hochvolt DC Spannung außerhalb sollbreich (oben) | 0 |
| 0x21E626 | Lade-Elektronik: Hochvolt AC Spannungssensor, Kurzschluss nach Masse | 0 |
| 0x21E627 | Lade-Elektronik: Hochvolt AC Spannungssensor, Kurzschluss nach Plus | 0 |
| 0x21E628 | Lade-Elektronik: Hochvolt AC Spannung außerhalb Sollbereich (unten) | 0 |
| 0x21E629 | Lade-Elektronik: Hochvolt AC Spannung unplausibel | 0 |
| 0x21E62A | Lade-Elektronik: Crash-Sensor, Kurzschluss nach Masse | 0 |
| 0x21E62B | Lade-Elektronik: Crash-Sensor, Kurzschluss nach Plus | 0 |
| 0x21E62C | Lade-Elektronik: Crash-Sensor, Signal außerhalb Sollbereich (unten) | 1 |
| 0x21E62D | Lade-Elektronik: Crash-Sensor, Signal außerhalb Sollbereich (oben) | 1 |
| 0x21E62E | Lade-Elektronik: Ladebereitschaft Leitung, Kurzschluss nach Masse | 0 |
| 0x21E62F | Lade-Elektronik: Ladebereitschaft Leitung, Kurzschluss nach Plus | 0 |
| 0x21E630 | Lade-Elektronik: Ladebereitschaft, Signal außerhalb Sollbereich (unten) | 1 |
| 0x21E631 | Lade-Elektronik: Ladebereitschaft, Signal außerhalb Sollbereich (oben) | 1 |
| 0x21E632 | Lade-Elektronik: Ladebereitschaft, Signal unplausibel | 0 |
| 0x21E633 | Lade-Elektronik: Versorgungsspannung Sensor, Kurzschluss nach Masse | 0 |
| 0x21E634 | Lade-Elektronik: Versorgungsspannung Sensor, Kurzschluss nach Plus | 0 |
| 0x21E635 | Lade-Elektronik: Versorgungsspannung Sensor, Wert unplausibel | 0 |
| 0x21E636 | Lade-Elektronik: Hochvolt DC Spannungssensor, Kalibrierung, Checksumme falsch | 1 |
| 0x21E637 | Lade-Elektronik: Temperatursensor 1, Kurzschluss nach Masse | 0 |
| 0x21E638 | Lade-Elektronik: Temperatursensor 1, Kurzschluss nach Plus | 0 |
| 0x21E639 | Lade-Elektronik: Temperatursensor 1, Wert außerhalb Sollbreich (oben) | 0 |
| 0x21E63A | Lade-Elektronik: Temperatursensor 1, Wert außerhalb Sollbreich (unten) | 0 |
| 0x21E63B | Lade-Elektronik: Temperatursensor 1, Wert unplausibel | 0 |
| 0x21E63C | Lade-Elektronik: Temperatursensor 2, Kurzschluss nach Masse | 0 |
| 0x21E63D | Lade-Elektronik: Temperatursensor 2, Kurzschluss nach Plus | 0 |
| 0x21E63E | Lade-Elektronik: Temperatursensor 2, Wert außerhalb Sollbreich (oben) | 0 |
| 0x21E63F | Lade-Elektronik: Temperatursensor 2, Wert außerhalb Sollbreich (unten) | 0 |
| 0x21E641 | Lade-Elektronik: Temperatursensor 3, Kurzschluss nach Masse | 0 |
| 0x21E642 | Lade-Elektronik: Temperatursensor 3, Kurzschluss nach Plus | 0 |
| 0x21E643 | Lade-Elektronik: Temperatursensor 3, Wert außerhalb Sollbreich (oben) | 0 |
| 0x21E644 | Lade-Elektronik: Temperatursensor 3, Wert außerhalb Sollbreich (unten) | 0 |
| 0x21E645 | Lade-Elektronik: Temperatursensor 3, Wert unplausibel | 0 |
| 0x21E646 | Lade-Elektronik: Hochvolt AC Stromsensor, Kurzschluss nach Masse | 0 |
| 0x21E647 | Lade-Elektronik: Hochvolt AC Stromsensor, Kurzschluss nach Plus | 0 |
| 0x21E648 | Lade-Elektronik: Hochvolt AC Strom, wert außerhalb Sollbreich (unten) | 0 |
| 0x21E649 | Lade-Elektronik: Hochvolt AC Strom, wert außerhalb Sollbreich (oben) | 0 |
| 0x21E64A | Lade-Elektronik: digitaler Signalprozessor, Fehler der Uhr | 0 |
| 0x21E64B | Lade-Elektronik: digitaler Signalprozessor, Crash-Sensor unplausibel | 0 |
| 0x21E64C | Lade-Elektronik: Hochvolt DC Stromsensor, Kurzschluss nach Masse | 0 |
| 0x21E64D | Lade-Elektronik: Hochvolt DC Stromsensor, Kurzschluss nach Plus | 0 |
| 0x21E64E | Lade-Elektronik: Hochvolt DC Stromsensor, Wert außerhalb Sollbereich (unten) | 0 |
| 0x21E64F | Lade-Elektronik: Hochvolt DC Stromsensor, Wert außerhalb Sollbereich (oben) | 0 |
| 0x21E650 | Lade-Elektronik: PFC Spannunssensor, Kurzschluss nach Masse | 0 |
| 0x21E651 | Lade-Elektronik: PFC Spannunssensor, Kurzschluss nach Plus | 0 |
| 0x21E652 | Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (unten) bei aktivem Laden | 0 |
| 0x21E653 | Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei aktivem Laden | 0 |
| 0x21E654 | Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei Vorladen | 0 |
| 0x21E655 | Lade-Elektronik: Hochvolt DC Spannung unplausibel | 0 |
| 0x21E656 | Lade-Elektronik: Ausgangleistung unplausibel | 0 |
| 0x21E659 | Lade-Elektronik: Temperatursensor 3, Start unplausibel | 0 |
| 0x21E65A | Lade-Elektronik: Temperatursensor 4, Wert außerhalb Sollbreich (oben) | 0 |
| 0x21E65B | Lade-Elektronik: Temperatursensor 4, Wert außerhalb Sollbreich (unten) | 0 |
| 0x21E687 | Klemme 30C - Crash erkannt | 1 |
| 0x21E68C | Ladeelektronik: Timeout Zustandswechsel Precharge zu Charge | 1 |
| 0x21E68F | Lade-Elektronik: Hochvolt DC Strom unplausibel | 0 |
| 0x21E690 | Lade-Elektronik: Temperatursensor 4, Kurzschluss nach Masse | 0 |
| 0x21E691 | Lade-Elektronik: Temperatursensor 4, Kurzschluss nach Plus | 0 |
| 0x21E692 | Lade-Elektronik: Temperatursensor 4, Wert unplausibel | 0 |
| 0x21E69C | Lade-Elektronik: Resonanzspule, Strom außerhalb Sollbereich | 0 |
| 0x21E69D | Lade-Elektronik: Resonanzspule, Stromsensor, Kurzschluss nach Masse | 0 |
| 0x21E69E | Lade-Elektronik: Resonanzspule, Stromsensor, Kurzschluss nach Plus | 0 |
| 0x21E6F0 | Lade-Elektronik: Überspannung am DC-Anschluss | 1 |
| 0x21E6F1 | Lade-Elektronik: DC Überstrom | 0 |
| 0x21E6F2 | Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (unten) bei aktivem Laden | 0 |
| 0x21E6F3 | Lade-Elektronik: PFC Spannung, Wert außerhalb Sollbereich (oben) bei aktivem Laden | 0 |
| 0x21E6F4 | Lade-Elektronik: Unterspannung am AC-Anschluss | 1 |
| 0x21E6F5 | Lade-Elektronik: Überspannung am AC-Anschluss | 1 |
| 0x21E6F6 | Lade-Elektronik: AC Überstrom | 0 |
| 0x21E6F7 | Lade-Elektronik: Unterspannung am DC-Anschluss | 1 |
| 0x21E6F9 | Ladeelektronik: Ladeunterbrechung während Laden aktiv | 1 |
| 0x21E6FC | Lade-Elektronik: DC Überstrom 1 | 0 |
| 0xCE4486 | A-CAN Control Module Bus OFF | 0 |
| 0xCE4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCE5400 | Botschaft (Vorgabe Komfort Ladeelektronik, 0x153) fehlt, Empfänger UCX, Sender AE | 1 |
| 0xCE5401 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger UCX, Sender BDC | 1 |
| 0xCE5402 | Botschaft (Status Hochvoltspeicher 2, 0x112) fehlt, Empfänger UCX, Sender SME | 1 |
| 0xCE5403 | Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, 0x2F5) fehlt, Empfänger UCX, Sender SME | 1 |
| 0xCE5404 | Botschaft (Steuerung Teilnetze, 0x19E) fehlt, Empfänger UCX, Sender eDME | 1 |
| 0xCE5405 | Botschaft (Status Betriebsart E-Motor Traktion, 0x2E8) fehlt, Empfänger UCX, Sender AE | 1 |
| 0xCE5406 | Botschaft (Daten Hochvoltspeicher, 0x431) fehlt, Empfänger UCX, Sender SME | 1 |
| 0xCE540A | Signal (U_MAX_CHG_HVSTO) ungültig, Sender SME | 1 |
| 0xCE540B | Signal( U_MAX_CHG_HVSTO) undefiniert, Sender SME | 1 |
| 0xCE540C | Signal (RQ_DCHG_LINK) ungültig, Sender AE | 1 |
| 0xCE540D | Signal (RQ_DCHG_LINK) undefiniert, Sender AE | 1 |
| 0xCE540E | Signal (AVL_U_HVSTO) ungültig, Sender SME | 1 |
| 0xCE540F | Signal (AVL_U_HVSTO) undefiniert, Sender SME | 1 |
| 0xCE5410 | Signal (TAR_OPMO_CF_CHGE) ungültig, Sender AE | 1 |
| 0xCE5411 | Signal (TAR_OPMO_CF_CHGE) undefiniert, Sender AE | 1 |
| 0xCE5412 | Signal (SPEC_I_MAX_DC_CF_CHGE) ungültig, Sender AE | 1 |
| 0xCE5413 | Signal (SPEC_I_MAX_DC_CF_CHGE) undefiniert, Sender AE | 1 |
| 0xCE5414 | Signal (TAR_PWR_CF_CHGNG) ungültig, Sender AE | 1 |
| 0xCE5415 | Signal (TAR_PWR_CF_CHGNG) undefiniert, Sender AE | 1 |
| 0xCE5416 | Signal (ST_SER_DSCO_PLG) ungültig, Sender SME | 1 |
| 0xCE5417 | Signal (ST_SER_DSCO_PLG) undeifniert, Sender SME | 1 |
| 0xCE5418 | Signal (CTR_FKTN_PRTNT_DRV) ungültig, Sender eDME | 1 |
| 0xCE5419 | Signal (CTR_FKTN_PRTNT_DRV) undefiniert, Sender eDME | 1 |
| 0xCE541A | Signal (AVL_U_LINK) ungültig, Sender SME | 1 |
| 0xCE541B | Signal (AVL_U_LINK) undefiniert, Sender SME | 1 |
| 0xCE541C | Signal (SPEC_I_MAX_ALTC_CF_CHGE) ungültig, Sender AE | 1 |
| 0xCE541D | Signal (SPEC_I_MAX_ALTC_CF_CHGE) undefiniert, Sender AE | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x001001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x21E670 | not available | 0 |
| 0x21E671 | not available | 0 |
| 0x21E672 | not available | 0 |
| 0x21E673 | not available | 0 |
| 0x21E674 | not available | 0 |
| 0x21E675 | not available | 0 |
| 0x21E676 | not available | 0 |
| 0x21E680 | Nvram write fail | 0 |
| 0x21E681 | Nvram read failed | 0 |
| 0x21E682 | Nvram control failed | 0 |
| 0x21E683 | Nvram control failed | 0 |
| 0x21E684 | Nvram write all fail | 0 |
| 0x21E685 | Nvram read all failed | 0 |
| 0x21E686 | Nvram wrong config-ID | 0 |
| 0x21E688 | Partial Network Operation | 1 |
| 0x21E689 | Error | 0 |
| 0x21E6D0 | SPI comm err: unknown request ID | 0 |
| 0x21E6D1 | SPI comm err: unknown SPI id | 0 |
| 0x21E6D2 | SPI comm err: request not completed timeout | 0 |
| 0x21E6D3 | SPI comm err: DSP response timeout | 0 |
| 0x21E6D4 | SPI comm err: DSP response has wrong ID | 0 |
| 0x21E6D5 | SPI comm err: DSP response has a wrong checksum | 0 |
| 0x21E6D6 | SPI comm err: DSP negative response REF | 0 |
| 0x21E6D7 | SPI comm err: DSP negative response KO | 0 |
| 0x21E6D8 | SPI comm err: DSP protocol error 1 | 0 |
| 0x21E6D9 | SPI comm err: unknown event | 0 |
| 0x21E6DA | SPI comm err: unknown status | 0 |
| 0x21E6DB | SPI comm err: DSP timeout | 0 |
| 0x21E6DC | SPI comm err: DSP unknown ack | 0 |
| 0x21E6DD | SPI comm err: DSP protocol error 2 | 0 |
| 0x21E6DE | SPI comm err: DSP protocol error 3 | 0 |
| 0x21E6DF | SPI comm err: DSP protocol error 4 | 0 |
| 0x21E6E0 | SPI comm err: DSP protocol error 5 | 0 |
| 0x21E6E1 | SPI comm err: DSP protocol error 6 | 0 |
| 0x21E6E2 | SPI comm err: DSP protocol error 7 | 0 |
| 0x21E6E3 | SPI comm err: unknown error code | 0 |
| 0x21E6E4 | SPI comm err: DSP SW error | 0 |
| 0x21E6E5 | KL15WUP wake-up pulse too short | 1 |
| 0x21E6E6 | Network Management not started | 1 |
| 0x21E6E8 | Timeout during DSP re-programming | 0 |
| 0x21E6EB | KL30B voltage too low, DSP emergency stop | 1 |
| 0x21E6EC | SPI comm err: detected by DSP | 0 |
| 0x21E6ED | not available | 0 |
| 0x21E6EE | Derating transition for overtemperature | 1 |
| 0x21E6F8 | not available | 0 |
| 0x21E6FA | not available | 0 |
| 0x21E6FB | not available | 0 |
| 0xC90401 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0xC90402 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XDE84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NETZFREQUENZ_PHASE_1_WERT | Hz | high | unsigned char | - | - | 1.0 | 4.0 | 0.0 | Aktuelle Netzfrequenz Phase 1 |
| - | Bit | high | BITFIELD | - | BF_URSACHE_DERATING | - | - | - | Grund für Derating |
| STAT_LEISTUNG_DERATING_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Derating Leistung |
| STAT_DERATING_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Derating |
| - | Bit | high | BITFIELD | - | BF_FEHLERZUSTAND_UCX | - | - | - | SLE Fehlerzustände |
| - | Bit | high | BITFIELD | - | BF_AUSLOESER_FAILSAFE | - | - | - | Auslöser Failsafe |
| - | Bit | high | BITFIELD | - | BF_URSACHE_LADEUNTERBRECHUNG | - | - | - | Ursache Ladeunterbrechung |
| STAT_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_LADEGERAET_BETRIEBSART | - | - | - | Betriebsart |

### RES_0XDE85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIRKUNGSGRAD_LADEZYKLUS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Ladezyklus |
| STAT_WIRKUNGSGRAD_DC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad DC |
| STAT_SLE_DC_HV_LEISTUNG_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abgegebende Momentanleistung in den Zwischenkreis |

### RES_0XDE86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_RMS_AC_PHASE_1_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Effektivwerte der AC Leiterspannungen (Phase1) |
| STAT_SPANNUNG_DC_HV_OBERGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HV DC Spannungsobergrenze |
| STAT_SPANNUNG_DC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HV DC Spannung |
| STAT_SPANNUNG_KL30_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | KL30 Spannung |
| STAT_SPANNUNG_KL30C_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | KL30C Spannung |

### RES_0XDE87_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Strom |
| STAT_STROM_AC_MAX_GESPEICHERT_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximal gespeicherter AC Strom |
| STAT_STROM_HV_DC_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | HV DC Strom |
| STAT_STROM_HV_DC_MAX_LIMIT_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximal erlaubter HV DC Strom |
| STAT_STROM_HV_DC_MAX_GESPEICHERT_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Maximal gespeicherter DC Strom |

### RES_0XDFB0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDEN_GLOBAL_LADE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ladezeit in Sekunden |
| STAT_SEKUNDEN_LADEZYKLUS_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezeit in Sekunden |

### RES_0XDFB1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NTC1_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 1) |
| STAT_NTC2_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 2) |
| STAT_NTC3_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 3) |
| STAT_NTC4_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 4) |
| STAT_NTC5_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 5) |
| STAT_NTC6_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 6) |
| STAT_NTC7_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -75.0 | interne Temperatur (Temperatursensor 7) erst ab HWEL 001_024_001 |

### RES_0XDFB2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DSP_MAIN_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion Firmware Digital Signal Prozessor |
| STAT_DSP_SUB_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion Firmware Digital Signal Prozessor |
| STAT_DSP_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patchversion Firmware Digital Signal Prozessor |
| STAT_MC_MAIN_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion Firmware Mikroprozessor |
| STAT_MC_SUB_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion Firmware Mikroprozessor |
| STAT_MC_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patchversion Firmware Mikroprozessor |

### RES_0XDFB6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDEN_TEMPERATUR_BEREICH_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Temperatur unter 0 °C |
| STAT_SEKUNDEN_TEMPERATUR_BEREICH_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Temperatur zwischen 0 °C und 45 °C |
| STAT_SEKUNDEN_TEMPERATUR_BEREICH_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Temperatur zwischen 46 °C und 60 °C |
| STAT_SEKUNDEN_TEMPERATUR_BEREICH_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Temperatur zwischen 61 °C und 70 °C |
| STAT_SEKUNDEN_TEMPERATUR_BEREICH_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Temperatur zwischen 71 °C und 85 °C |
| STAT_SEKUNDEN_TEMPERATUR_BEREICH_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Temperatur über 85 °C |
| STAT_SEKUNDEN_LEISTUNG_BEREICH_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Leistung unter 1000 W |
| STAT_SEKUNDEN_LEISTUNG_BEREICH_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Leistung zwischen 1001 W und 2000 W |
| STAT_SEKUNDEN_LEISTUNG_BEREICH_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Leistung zwischen 2001 W und 3000 W |
| STAT_SEKUNDEN_LEISTUNG_BEREICH_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekunden bei Leistung über 3000 W |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AE_BETRIEBSZUSTAND_SLE | 0xDE84 | - | Betriebsarten SLE | - | V_f_SLE_AC_L1_IST_LK | - | - | - | - | - | - | - | 22 | - | RES_0xDE84_D |
| AE_SLE_LEISTUNG | 0xDE85 | - | Leistungswerte Zwischenkreis der SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE85_D |
| AE_SLE_SPANNUNG | 0xDE86 | - | AC und DC Spannungen SLE | - | V_U_SleAc | - | - | - | - | - | - | - | 22 | - | RES_0xDE86_D |
| AE_SLE_STROM | 0xDE87 | - | AC und DC Ströme SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE87_D |
| LADEGERAET_LADEDAUER | 0xDFB0 | - | Information zur Ladedauer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB0_D |
| LADEGERAET_TEMPERATUREN | 0xDFB1 | - | Auslesen Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB1_D |
| LADEGERAET_FW_VERSION | 0xDFB2 | - | Firmware Version vom Ladegerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB2_D |
| LADEGERAET_LADE_HISTOGRAMM | 0xDFB6 | - | Ladehistogramm bezüglich Temperatur und Leistung | - | data byte 0,1,2,3 | - | - | - | - | - | - | - | 22 | - | RES_0xDFB6_D |

### TAB_LADEGERAET_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | HV DC Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Fehler |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x0F | Signal ungültig |

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
