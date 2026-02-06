# rdc_03.prg

## General

|  |  |
| --- | --- |
| File | rdc_03.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 61 |
| Origin | BMW EF-331 Florian_Koerner |
| Revision | 1.000 |
| Author | Vector PSF2 Vl, Beru BES2 Rapp |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | RDC-SGBD |  |  |
| ORIGIN | string | BMW EF-331 Florian_Koerner |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | Vector PSF2 Vl, Beru BES2 Rapp |  |  |
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

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### SLEEP_MODE

SG in Sleep-Mode versetzen UDS  : $11 ECUReset UDS  : $04 EnableRapidPowerShutDown Modus: Default

_No arguments._

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
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022000 | Energiesparmode aktiv | 1 |
| 0x02FF20 | DM_TEST_APPL | 1 |
| 0x481F80 | RDC-Steuergeraet im Bandmodus | 0 |
| 0x481F81 | Steuergeraet defekt (EEPROM-Fehler) | 0 |
| 0x481F84 | Raderkennung nicht moeglich | 0 |
| 0x481F86 | RDC-Sender vorne links Datenuebertragung gestoert | 0 |
| 0x481F87 | RDC-Sender vorne rechts Datenuebertragung gestoert | 0 |
| 0x481F88 | RDC-Sender hinten links Datenuebertragung gestoert | 0 |
| 0x481F89 | RDC-Sender hinten rechts Datenuebertragung gestoert | 0 |
| 0x481F8A | RDC-Antenne Datenuebertragung gestoert | 0 |
| 0x481F8B | Radelektronik vorne links kein Empfang | 0 |
| 0x481F8C | Radelektronik vorne rechts kein Empfang | 0 |
| 0x481F8D | Radelektronik hinten links kein Empfang | 0 |
| 0x481F8E | Radelektronik hinten rechts kein Empfang | 0 |
| 0x481F94 | RDC-Antenne defekt (RAM-Fehler) | 0 |
| 0x481F99 | RDC-Antenne defekt (ROM-Fehler) | 0 |
| 0x481F9E | RDC-Antenne falsches Bauteil | 0 |
| 0x481F9F | RDC-Antenne falsches Bauteil (CRC) | 0 |
| 0x481FA0 | Radelektronik vorne links defekt | 0 |
| 0x481FA1 | Radelektronik vorne rechts defekt | 0 |
| 0x481FA2 | Radelektronik hinten links defekt | 0 |
| 0x481FA3 | Radelektronik hinten rechts defekt | 0 |
| 0x481FA4 | Radelektronik (Position unbekannt) defekt | 0 |
| 0x481FA5 | Unterspannung KL30 | 1 |
| 0x481FA6 | Steuergeraet defekt (Betriebsspannung) | 0 |
| 0x481FA7 | Ueberspannung KL30 (Schutzschaltung ausgeloest) | 1 |
| 0x481FA8 | Steuergeraet defekt (ROM-Fehler) | 0 |
| 0x481FA9 | Steuergeraet defekt (RAM-Fehler) | 0 |
| 0x481FAA | Ueberspannung KL30 | 1 |
| 0x481FB0 | RDC-Sender vorne links Leitungsunterbrechung | 0 |
| 0x481FB1 | RDC-Sender vorne rechts Leitungsunterbrechung | 0 |
| 0x481FB2 | RDC-Sender hinten links Leitungsunterbrechung | 0 |
| 0x481FB3 | RDC-Sender hinten rechts Leitungsunterbrechung | 0 |
| 0x481FB4 | RDC-Antenne Leitungsunterbrechung | 0 |
| 0x481FB5 | RDC-Sender vorne links Kurzschluss | 0 |
| 0x481FB6 | RDC-Sender vorne rechts Kurzschluss | 0 |
| 0x481FB7 | RDC-Sender hinten links Kurzschluss | 0 |
| 0x481FB8 | RDC-Sender hinten rechts Kurzschluss | 0 |
| 0x481FB9 | RDC-Antenne Kurzschluss | 0 |
| 0x481FBA | RDC-Sender vorne links defekt (LF-Triggerspule) | 0 |
| 0x481FBB | RDC-Sender vorne rechts defekt (LF-Triggerspule) | 0 |
| 0x481FBC | RDC-Sender hinten links defekt (LF-Triggerspule) | 0 |
| 0x481FBD | RDC-Sender hinten rechts defekt (LF-Triggerspule) | 0 |
| 0x481FBE | Funkverbindung durch Fremdeinfluss gestoert | 1 |
| 0x481FC0 | Signatur über Nettocodierdaten ist ungueltig | 0 |
| 0x481FC1 | Steuergeraet ist nicht für das Fahrzeug codiert, in welchem es verbaut ist | 0 |
| 0x481FC2 | Steuergerät ist nicht codiert | 0 |
| 0x481FC3 | Fehler während der Codierdaten Transaktion aufgetreten | 0 |
| 0x481FC4 | Die waehrend einer Codierdaten Transaktion gesendeten Daten sind unplausibel | 0 |
| 0xD1040B | K-CAN Bus | 1 |
| 0xD10414 | K-CAN Control Module Bus OFF | 1 |
| 0xD10BFF | DM_TEST_COM | 1 |
| 0xD11400 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger RDC (K-CAN), Sender CAS (FlexRay) | 1 |
| 0xD11401 | Botschaft (Aussentemperatur, 0x2CA) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11402 | Botschaft (Kilometerstand, 0x330) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11403 | Botschaft (Daten Antriebsstrang, 0x3F9) fehlt, Empfänger RDC (K-CAN), Sender DME1 (FlexRay) | 1 |
| 0xD11404 | Botschaft (Uhrzeit/Datum, 0x2F8) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD11405 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger RDC (K-CAN), Sender ICM_QL (FlexRay) | 1 |
| 0xD11406 | Botschaft (Einheiten, 0x2F7) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) | 1 |
| 0xD14302 | CAN Zeitueberschreitung | 1 |
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
| 0x1700 | Kilometerstand | km | high | unsigned int | - | 8 | 1 | 0 |
| 0x1701 | Systemzeit | sec | high | unsigned int | - | 1 | 1 | 0 |
| 0x1704 | Geschwindigkeit | km/h | high | unsigned int | - | 1 | 1 | 0 |
| 0x1703 | Temperatur | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x1705 | EmpfangsId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0x0005 | SendeId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x200001 | DM_Queue_Full | 1 |
| 0x200002 | DM_Queue_Deleted | 1 |
| 0x200003 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 1 |
| 0x200004 | Ausfall Botschaft Fahrzeugzustand | 1 |
| 0x200010 | EEPROM-Fehler (Wrong Config ID) | 0 |
| 0x200011 | EEPROM-Fehler (Write Failed) | 0 |
| 0x200012 | EEPROM-Fehler (Read Failed) | 0 |
| 0x200013 | EEPROM-Fehler (Control Failed) | 0 |
| 0x200014 | EEPROM-Fehler (Erase Failed) | 0 |
| 0x200015 | EEPROM-Fehler (Write All Failed) | 0 |
| 0x200016 | EEPROM-Fehler (Read All Failed) | 0 |
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
| 0x1700 | Kilometerstand | km | high | unsigned int | - | 8 | 1 | 0 |
| 0x1701 | Systemzeit | sec | high | unsigned int | - | 1 | 1 | 0 |
| 0x1704 | Geschwindigkeit | km/h | high | unsigned int | - | 1 | 1 | 0 |
| 0x1703 | Temperatur | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x1705 | EmpfangsId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0x0005 | SendeId | dez | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_HS_INAKTIVEREIGNIS1_LESEN | 0xDCCF | - | Auslesen eines Inaktiveignisses des Historienspeichers. Inaktivereignis 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCCF |
| STATUS_HS_INAKTIVEREIGNIS2_LESEN | 0xDCD0 | - | Auslesen eines Inaktiveignisses des Historienspeichers. Inaktivereignis 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD0 |
| STATUS_HS_INAKTIVEREIGNIS3_LESEN | 0xDCD1 | - | Auslesen eines Inaktiveignisses des Historienspeichers. Inaktivereignis 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD1 |
| STATUS_HS_KALIBRIEREREIGNIS1_LESEN | 0xDCCC | - | Auslesen eines Kalibriereignisses des Historienspeichers. Kalibrierereignis 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCCC |
| STATUS_HS_KALIBRIEREREIGNIS2_LESEN | 0xDCCD | - | Auslesen eines Kalibriereignisses des Historienspeichers. Kalibrierereignis 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCCD |
| STATUS_HS_KALIBRIEREREIGNIS3_LESEN | 0xDCCE | - | Auslesen eines Kalibriereignisses des Historienspeichers. Kalibrierereignis 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCCE |
| STATUS_HS_WARNEREIGNIS1_LESEN | 0xDCC9 | - | Auslesen eines Warneignisses des Historienspeichers. Warnereignis 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC9 |
| STATUS_HS_WARNEREIGNIS2_LESEN | 0xDCCA | - | Auslesen eines Warneignisses des Historienspeichers. Warnereignis 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCCA |
| STATUS_HS_WARNEREIGNIS3_LESEN | 0xDCCB | - | Auslesen eines Warneignisses des Historienspeichers. Warnereignis 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCCB |
| STATUS_HS_WARNUNGSZAEHLER_LESEN | 0xDCC8 | - | Auslesen der Warnungszaehler des Historienspeichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC8 |
| STATUS_HS_ZAEHLER_WEICHE_WARNUNG_LESEN | 0xDCD3 | - | Auslesen der Zaehler aus dem Historienspeicher, welche die Auftretenshaeufigkeit der weichen Warnung wiedergeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD3 |
| STATUS_IO_RDC_LESEN | 0xDCC5 | - | Status Abfrage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC5 |
| STATUS_MESSDATENBLOCK1_LESEN | 0xDCC1 | - | Mit dem Job STATUS_MESSDATENBLOCK1_LESEN werden die Daten aus den Messdatenblock 1 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC1 |
| STATUS_MESSDATENBLOCK2_LESEN | 0xDCC2 | - | Mit dem Job STATUS_MESSDATENBLOCK2_LESEN werden die Daten aus den Messdatenblock 2 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC2 |
| STATUS_MESSDATENBLOCK3_LESEN | 0xDCC3 | - | Mit dem Job STATUS_MESSDATENBLOCK3_LESEN werden die Daten aus den Messdatenblock 3 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC3 |
| STATUS_MESSDATENBLOCK4_LESEN | 0xDCC4 | - | Mit dem Job STATUS_MESSDATENBLOCK4_LESEN werden die Daten aus den Messdatenblock 4 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC4 |
| STATUS_MESSDATENBLOCK5_LESEN | 0xDCC7 | - | Mit dem Job STATUS_MESSDATENBLOCK5_LESEN werden die Daten aus den Messdatenblock 5 gelesen. Die Zuordnung der Blöcke zu den Radpositionen variiert und wird vom SG zugewiesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCC7 |
| STATUS_WEICHE_WARNUNG_LESEN | 0xDCD2 | - | Mit dem Job STATUS_WEICHE_WARNUNG_LESEN wird der aktuelle Status der weichen Warnung ausgelesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD2 |
| STEUERN_DIGITAL_RDC | 0xDCC6 | - | Setzen diverser Bandmodi  Achtung: Busdiagnose und Tests im Stand nur mit RDC Generation2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC6 | - |
| STEUERN_RADELEKTRONIK_VORGEBEN | 0xDCC0 | - | Radelektronik vorgeben. Der Job weist der Radelektronik die durch das 1.Argument angewählt wurde, ihre Position am Fahrzeug zu (z.B. vorn rechts). Die Radelektronik kennt sonst ihre Position im Fahrzeug nicht. Sie kennt nur ihre ID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC0 | - |
| TIME_2MS | 0x0E50 | - | - | - | - | - | - | - | - | - | - | 32 | 22 | - | RES_0x0E50 |
| TIME_10MS | 0x0E51 | - | - | - | - | - | - | - | - | - | - | 32 | 22 | - | RES_0x0E51 |
| TIME_20MS | 0x0E52 | - | - | - | - | - | - | - | - | - | - | 32 | 22 | - | RES_0x0E52 |

### RES_0X0E50

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_AVG_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | liest die durchschnittliche Zykluszeit der 2ms Task aus | durchschnittliche Zykluszeit der 2ms Task |
| STAT_TIME_MIN_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | liest die Minimale Zykluszeit der 2ms Task aus | minimale Zykluszeit der 2ms Task |
| STAT_TIME_MAX_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | liest die maximale Zykluszeit der 2ms Task aus | maximale Zykluszeit der 2ms Task |

### RES_0X0E51

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_AVG_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | Liest die durchschnittliche Zykluszeit der 10ms Task aus | durchschnittliche Zykluszeit der 10ms Task |
| STAT_TIME_MIN_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | Liest die minimale Zykluszeit der 10ms Task aus | minimale Zykluszeit der 10ms Task |
| STAT_TIME_MAX_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | Liest die maximale Zykluszeit der 10ms Task aus | maximale Zykluszeit der 10ms Task |

### RES_0X0E52

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_AVG_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | Liest die durchschnittliche Zykluszeit der 10ms Task aus | durchschnittliche Zykluszeit der 20ms Task |
| STAT_TIME_MIN_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | Liest die minimale Zykluszeit der 10ms Task aus | minimale Zykluszeit der 20ms Task |
| STAT_TIME_MAX_WERT | ms | high | unsigned int | - | - | 0.00125 | - | - | Liest die maximale Zykluszeit der 10ms Task aus | maximale Zykluszeit der 20ms Task |

### RES_0XDCCF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_INTERNER_FEHLERCODE | 0-n | - | unsigned int | - | - | - | - | - | SG-interner Fehlercode |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |

### RES_0XDCCA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
| STAT_RE_IDENTIFIER_RE0 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE0 |
| STAT_REIFENDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE0 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE0 |
| STAT_RAD_POSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE0 |
| STAT_SOLLDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE0 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE1 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE1 |
| STAT_REIFENDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE1 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE1 |
| STAT_RAD_POSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE1 |
| STAT_SOLLDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE1 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE2 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE2 |
| STAT_REIFENDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE2 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE2 |
| STAT_RAD_POSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE2 |
| STAT_SOLLDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE2 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE3 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE3 |
| STAT_REIFENDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE3 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE3 |
| STAT_RAD_POSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE3 |
| STAT_SOLLDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE3 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |

### RES_0XDCD1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_INTERNER_FEHLERCODE | 0-n | - | unsigned int | - | - | - | - | - | SG-interner Fehlercode |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |

### RES_0XDCD2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WEICHE_WARNUNG_UNSPEZIFISCH_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Reifenfuelldruck auf allen Radpositionen pruefen, 0 = inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_WEICHE_WARNUNG_VL_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Reifenfuelldruck vorne links pruefen, 0 = inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_WEICHE_WARNUNG_VR_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Reifenfuelldruck vorne rechts pruefen, 0 = inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_WEICHE_WARNUNG_HR_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Reifenfuelldruck hinten rechts pruefen, 0 = inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_WEICHE_WARNUNG_HL_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Reifenfuelldruck hinten links pruefen, 0 = inaktiv, 1 = aktiv, FF = Signal unbekannt |

### RES_0XDCCB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
| STAT_RE_IDENTIFIER_RE0 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE0 |
| STAT_REIFENDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE0 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE0 |
| STAT_RAD_POSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE0 |
| STAT_SOLLDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE0 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE1 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE1 |
| STAT_REIFENDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE1 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE1 |
| STAT_RAD_POSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE1 |
| STAT_SOLLDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE1 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE2 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE2 |
| STAT_REIFENDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE2 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE2 |
| STAT_RAD_POSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE2 |
| STAT_SOLLDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE2 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE3 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE3 |
| STAT_REIFENDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE3 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE3 |
| STAT_RAD_POSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE3 |
| STAT_SOLLDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE3 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |

### RES_0XDCCE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
| STAT_RE_IDENTIFIER_RE0 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE0 |
| STAT_RADELEKTRONIK_STATUS_RE0 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE0 |
| STAT_RAD_POSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE0 |
| STAT_SOLLDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE0 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE1 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE1 |
| STAT_RADELEKTRONIK_STATUS_RE1 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE1 |
| STAT_RAD_POSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE1 |
| STAT_SOLLDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE1 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE2 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE2 |
| STAT_RADELEKTRONIK_STATUS_RE2 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE2 |
| STAT_RAD_POSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE2 |
| STAT_SOLLDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE2 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE3 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE3 |
| STAT_RADELEKTRONIK_STATUS_RE3 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE3 |
| STAT_RAD_POSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE3 |
| STAT_SOLLDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE3 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |

### RES_0XDCC4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | - | 1000 | - | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | - | - | - | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | - | 1000 | - | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent. |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | unsigned int | - | - | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | - | - | - | Status Meldung der Radelektronik des angewählten Rads ACHTUNG: Rückgabe in STAT_RADELEKTRONIK_ID_TEXT!! |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad , 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |

### RES_0XDCCC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
| STAT_RE_IDENTIFIER_RE0 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE0 |
| STAT_RADELEKTRONIK_STATUS_RE0 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE0 |
| STAT_RAD_POSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE0 |
| STAT_SOLLDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE0 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE1 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE1 |
| STAT_RADELEKTRONIK_STATUS_RE1 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE1 |
| STAT_RAD_POSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE1 |
| STAT_SOLLDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE1 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE2 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE2 |
| STAT_RADELEKTRONIK_STATUS_RE2 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE2 |
| STAT_RAD_POSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE2 |
| STAT_SOLLDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE2 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE3 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE3 |
| STAT_RADELEKTRONIK_STATUS_RE3 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE3 |
| STAT_RAD_POSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE3 |
| STAT_SOLLDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE3 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |

### RES_0XDCC2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen., Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | - | 1000 | - | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | - | - | - | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | - | 1000 | - | Vorgegebener Solldruck des ausgewählten Rad |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | unsigned int | - | - | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | - | - | - | Status Meldung der Radelektronik des angewählten Rad |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad , 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |

### RES_0XDCC8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_HARTE_WARNUNG_VL | 0-n | - | unsigned char | - | - | - | - | - | Zaehler der harten Warnungen vorne links |
| STAT_ZAEHLER_HARTE_WARNUNG_VR | 0-n | - | unsigned char | - | - | - | - | - | Zaehler der harten Warnungen vorne rechts |
| STAT_ZAEHLER_HARTE_WARNUNG_HL | 0-n | - | unsigned char | - | - | - | - | - | Zaehler der harten Warnungen hinten links |
| STAT_ZAEHLER_HARTE_WARNUNG_HR | 0-n | - | unsigned char | - | - | - | - | - | Zaehler der harten Warnungen hinten rechts |
| STAT_ZAEHLER_HARTE_WARNUNG_XX | 0-n | - | unsigned char | - | - | - | - | - | Zaehler der harten Warnungen waehrend ER Verlust |

### ARG_0XDCC0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RE_ID | - | - | unsigned long | - | - | - | - | - | - | - | ID der Radelektronik |
| RE_POS | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | 0 | 9 | Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts, 4 = Reserverad(nur RDC Gen2), 5, 6, 7, 8, 9 = Radposition nicht bekannt |

### RES_0XDCC1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | - | 1000 | - | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | - | - | - | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | - | 1000 | - | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | int | - | - | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |

### RES_0XDCC3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | - | 1000 | - | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | - | - | - | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | - | 1000 | - | Vorgegebener Solldruck des ausgewählten Rad |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | unsigned int | - | - | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | - | - | - | Status Meldung der Radelektronik des angewählten Rads |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad , 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |

### RES_0XDCCD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
| STAT_RE_IDENTIFIER_RE0 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE0 |
| STAT_RADELEKTRONIK_STATUS_RE0 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE0 |
| STAT_RAD_POSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE0 |
| STAT_SOLLDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE0 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE1 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE1 |
| STAT_RADELEKTRONIK_STATUS_RE1 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE1 |
| STAT_RAD_POSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE1 |
| STAT_SOLLDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE1 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE2 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE2 |
| STAT_RADELEKTRONIK_STATUS_RE2 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE2 |
| STAT_RAD_POSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE2 |
| STAT_SOLLDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE2 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE3 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE3 |
| STAT_RADELEKTRONIK_STATUS_RE3 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE3 |
| STAT_RAD_POSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE3 |
| STAT_SOLLDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE3 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |

### ARG_0XDCC6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSNR | 0-n | - | unsigned char | - | TAB_RDC_STEUERFUNKTIONEN | - | - | - | - | - | 1 =  BANDMODE  -  Bandmode; 2 =  ER_FAHRT  - Eigenraderkennung bei Fahrt; 3 =  ER_STAND  - Eigenraderkennung im Stand (Gen2); 4 -  TEST_ER_FAHRT  - Empfang der Eigenraeder bei Fahrt pruefen; 5 -   TEST_ER_STAND  - Empfang der Eigenraeder im Stand pruefen (Gen2); 6 -  RDCBUS_DIAG - Stromdiagnose LIN-Teilnehmer (Gen2); 7 -  SOLLDRUCK_SCHREIBEN  - aktuelle Reifendruckwerte als Sollwert; 8 -  CAL_REQUEST  - Kalibrieranforderung; 9 -  ER_FAHRT_OHNE_TRIGGER  - Eigenraderkennung bei Fahrt ohne Auswertung Triggerbit (Gen3); 10 -  TEST_ER_FAHRT_OHNE_TRIGGER  - Empfang der Eigenraeder bei Fahrt pruefen ohne Auswertung Triggerbit (Gen3) |
| AKTIONSNR | 0-n | - | unsigned char | - | TAB_RDC_SET_RESET | - | - | - | - | - | 1 - SET; 0 - RESET |

### TAB_RDC_STEUERFUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 1 | BANDMODE |
| 2 | ER_FAHRT |
| 3 | ER_STAND (nur RDC Gen2) |
| 4 | TEST_ER_FAHRT |
| 5 | TEST_ER_STAND (nur RDC Gen2) |
| 6 | RDCBUS_DIAG (nur RDC Gen2) |
| 7 | SOLLDRUCK_SCHREIBEN |
| 8 | CAL_REQUEST |
| 9 | ER_FAHRT_OHNE_TRIGGER (nur RDC Gen3) |
| 10 | TEST_ER_FAHRT_OHNE_TRIGGER (nur RDC Gen3) |

### TAB_RDC_SET_RESET

| WERT | TEXT |
| --- | --- |
| 0 | Zurücksetzen |
| 1 | Setzen |

### RES_0XDCD3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_WEICHE_WARNUNG_VL | 0-n | - | unsigned char | - | - | - | - | - | Zaehler weiche Warnung vorne links |
| STAT_ZAEHLER_WEICHE_WARNUNG_VR | 0-n | - | unsigned char | - | - | - | - | - | Zaehler weiche Warnung vorne rechts |
| STAT_ZAEHLER_WEICHE_WARNUNG_HL | 0-n | - | unsigned char | - | - | - | - | - | Zaehler weiche Warnung hinten links |
| STAT_ZAEHLER_WEICHE_WARNUNG_HR | 0-n | - | unsigned char | - | - | - | - | - | Zaehler weiche Warnung hinten rechts |
| STAT_ZAEHLER_WEICHE_WARNUNG_XX | 0-n | - | unsigned char | - | - | - | - | - | Zaehler weiche Warnung waehrend ER Verlust |

### RES_0XDCC5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EIGENRAEDER_BEKANNT | 0-n | - | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | - | - | - | Alle Eigenraeder sind bekannt: 0 = nicht bekannt; 1 = bekannt |
| STAT_RADPOS_ER_BEKANNT | 0-n | - | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | - | - | - | Radpositionen aller Eigenraeder sind bekannt: 0 = nicht bekannt; 1 = bekannt |
| STAT_RADPOS_UEBERPRUEFT_BESTAETIGT | 0-n | - | unsigned char | - | TAB_RDC_CONFIRMED | - | - | - | Alle Radpositionen sind ueberprueft und bestaetigt: 0 = nicht bestätigt; 1 = bestätigt |
| STAT_DTC_INACTIVE | 0-n | - | unsigned char | - | TAB_RDC_DTC_ACTIVE | - | - | - | Aktiver DTC Fehler mit Warnlampe im Fehlerspeicher vorhanden: 0 = DTC inaktiv; 1 = DTC aktiv |
| STAT_KAL_ANFORDERUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_CAL_ACTIVE | - | - | - | Kalibrieranforderung steht an: 0 = Kalibrieranforderung inaktiv; 1 = Kalibrieranforderung aktiv |
| STAT_LIN_ON | 0-n | - | unsigned char | - | TAB_RDC_LIN_STATUS | - | - | - | Status LIN Bus: 0 = LIN aus; 1 = LIN an |
| STAT_RAD_ZUORDNUNG_TIMEOUT | 0-n | - | unsigned char | - | TAB_RDC_TIMEOUT | - | - | - | Radzuordnung konnte nicht abgeschlossen werden: 0 = kein Timeout; 1 = Timeout |
| STAT_BANDMODE_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_BANDMODE_ACTIVE | - | - | - | Abfrage ob Bandmode im RDC aktiviert ist: 0 = Bandmode inaktiv ; 1 = Bandmode aktiv |
| STAT_ER_ERKENNUNG_STAND | 0-n | - | unsigned char | - | TAB_RDC_STARTED | - | - | - | Eigenraderkennung im Stand wurde gestartet: 0 = nicht gestartet , 1 = gestartet |
| STAT_ER_ERKENNUNG_FAHRT | 0-n | - | unsigned char | - | TAB_RDC_STARTED | - | - | - | Eigenraderkennung waehrend der Fahrt wurde gestartet: 0 = nicht gestartet 1 = gestartet |
| STAT_TEST_EIGENRAD_FAHRT | 0-n | - | unsigned char | - | TAB_RDC_STARTED | - | - | - | Test-Eigenraderkennung in Fahrt wurde gestartet: 0 = nicht gestartet , 1 = gestartet |
| STAT_TEST_EIGENRAD_STAND | 0-n | - | unsigned char | - | TAB_RDC_STARTED | - | - | - | Test-Eigenraderkennung im Stand wurde gestartet: 0 = nicht gestartet, 1 = gestartet |
| STAT_BUS_DIAGNOSE_EIN | 0-n | - | unsigned char | - | TAB_RDC_STARTED | - | - | - | Komponenten Bus Diagnose wurde gestartet : 0 = Bus Diagnose nicht gestartet ; 1 = Bus Diagnose gestartet |
| STAT_ER_FAHRT_VTHRS_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Geschwindigkeitsschwelle fuer Eigenraderkennung bei Fahrt aktiviert : 0 = inaktiv , 1 = aktiv |
| STAT_BM_TIMEOUT_ACTIVE | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Bandmode Timeout laeuft : 0 = inaktiv , 1 = aktiv |
| STAT_HARTE_WARNUNG_UNSPEZIFISCH_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung unspezifisch, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_VL_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung vorne links, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_VR_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung vorne rechts, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_HL_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung hinten links, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_HR_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung hinten rechts, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_KL_15_EIN | 0-n | - | unsigned char | - | TAB_RDC_ON_OFF | - | - | - | Klemme 15 EIN : 0 = AUS, 1 = EIN |
| STAT_MOTOR_LAEUFT_EIN | 0-n | - | unsigned char | - | TAB_RDC_ON_OFF | - | - | - | Motor läuft : 0 = Aus ; 1 = EIN |
| STAT_FZG_FAEHRT | 0-n | - | unsigned char | - | TAB_RDC_VEHICLE_RUNNING | - | - | - | Signal Fahrzeug fährt : 0 = steht , 1 = fährt |
| STAT_ERKENNUNG_ALLE_RE | 0-n | - | unsigned char | - | TAB_RDC_DETECTED | - | - | - | Alle Radelektroniken erkannt : 0 = nicht erkannt 1 = erkannt |
| STAT_ERKENNUNG_ZUVIELE_RE | 0-n | - | unsigned char | - | TAB_RDC_DETECTED | - | - | - | Zu viele Radelektroniken erkannt : 0 = nicht erkannt , 1 = erkannt |
| STAT_STOERSENDER_SCI_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Funkstoerung vorhanden : 0 = inaktiv , 1 = aktiv |
| STAT_STOERSENDER_FF_SCI_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Funkstoerung hat zu mehrfachen Telegrammausfaellen gefuehrt : 0 = inaktiv , 1 = aktiv |
| STAT_STOERSENDER_ZEIT_SCI_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Funkstoerung ist laenger vorhanden als die erlaubte Totzeit: 0 = inaktiv , 1 = aktiv |
| STAT_RESET_KEY_STATE | 0-n | - | unsigned char | - | TAB_RDC_KEY_PRESSED | - | - | - | Zustand des Initialisierungstasters  (0: Taster nicht betaetigt - 1: Taster betaetigt |
| STAT_ANT_UEBER_STROM_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Ueberstrom an Empfangsantenne erkannt: 0 = inaktiv , 1 = aktiv |
| STAT_ANT_UEBER_SPANNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Ueberspannung an Empfangsantenne erkannt : 0 = inaktiv , 1 = aktiv |
| STAT_FREQUENZ_WERT | MHz | - | unsigned int | - | - | - | - | - | Gibt die aktuelle RF-Frequenz zurück. Die Frequenz ist abhaengig von der Codierung. (315 oder 433). Angabe in MHz |

### TAB_RDC_BEKANNT_NICHT_BEKANNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht bekannt |
| 1 | bekannt |
| 255 | nicht definiert |

### TAB_RDC_CONFIRMED

| WERT | TEXT |
| --- | --- |
| 0 | nicht bestätigt |
| 1 | bestätigt |
| 255 | nicht definiert |

### TAB_RDC_DTC_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | DTC inaktiv |
| 1 | DTC aktiv |
| 255 | nicht definiert |

### TAB_RDC_CAL_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrieranforderung inaktiv |
| 1 | Kalibrieranforderung aktiv |
| 255 | nicht definiert |

### TAB_RDC_LIN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | LIN aus |
| 1 | LIN ein |
| 255 | nicht definiert |

### TAB_RDC_TIMEOUT

| WERT | TEXT |
| --- | --- |
| 0 | kein Timeout |
| 1 | Timeout |
| 255 | nicht definiert |

### TAB_RDC_BANDMODE_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Bandmode inaktiv |
| 1 | Bandmode aktiv |
| 255 | nicht definiert |

### TAB_RDC_STARTED

| WERT | TEXT |
| --- | --- |
| 0 | nicht gestartet |
| 1 | gestartet |
| 255 | nciht definiert |

### TAB_RDC_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 255 | nicht definiert |

### TAB_RDC_VEHICLE_RUNNING

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt |
| 255 | nicht definiert |

### TAB_RDC_DETECTED

| WERT | TEXT |
| --- | --- |
| 0 | nicht erkannt |
| 1 | erkannt |
| 255 | nicht definiert |

### TAB_RDC_KEY_PRESSED

| WERT | TEXT |
| --- | --- |
| 0 | Taster nicht betätigt |
| 1 | Taster betätigt |
| 255 | nicht definiert |

### RES_0XDCC9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
| STAT_RE_IDENTIFIER_RE0 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE0 |
| STAT_REIFENDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE0 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE0 |
| STAT_RAD_POSITION_RE0 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE0 |
| STAT_SOLLDRUCKWERT_RE0_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE0 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE0_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE0 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE0 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE1 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE1 |
| STAT_REIFENDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE1 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE1 |
| STAT_RAD_POSITION_RE1 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE1 |
| STAT_SOLLDRUCKWERT_RE1_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE1 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE1_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE1 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE1 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE2 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE2 |
| STAT_REIFENDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE2 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE2 |
| STAT_RAD_POSITION_RE2 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE2 |
| STAT_SOLLDRUCKWERT_RE2_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE2 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE2_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE2 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE2 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |
| STAT_RE_IDENTIFIER_RE3 | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik-Identifier der RE3 |
| STAT_REIFENDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Reifendruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_REIFENTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Reifentemperaturwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RADELEKTRONIK_STATUS_RE3 | 0-n | - | unsigned char | - | - | - | - | - | Radelektronik-Status der RE3 |
| STAT_RAD_POSITION_RE3 | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition der RE3 |
| STAT_SOLLDRUCKWERT_RE3_WERT | bar | - | int | - | - | - | 1000 | - | Solldruckwert der RE3 Bereich: 0 bis 6,35 bar absolut (-9,999 bar absolut => ungueltig) |
| STAT_SOLLTEMPERATURWERT_RE3_WERT | °C | - | char | - | - | - | - | - | Bezugstemperatur fuer Solldruckwert der RE3 Bereich: -40 bis 120 Grad C (-99 °C => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3 | 0-n | - | int | - | - | - | - | - | Restlebensdauer der Radelektronik RE3 in Monaten Bereich: 0 bis 120 Monate (-999 Monate => ungueltig) |

### RES_0XDCC7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | - | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | - | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen., Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | - | int | - | - | - | 1000 | - | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | - | char | - | - | - | - | - | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | - | int | - | - | - | 1000 | - | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | - | unsigned int | - | - | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | - | unsigned char | - | - | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | - | int | - | - | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | - | unsigned int | - | - | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | - | unsigned char | - | - | - | - | - | Status Meldung der Radelektronik des angewählten Rads |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | - | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | - | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |

### TAB_RDC_RAD_POSITION_NR

| WERT | TEXT |
| --- | --- |
| 0 | vorne links |
| 1 | vorne rechts |
| 2 | hinten links |
| 3 | hinten rechts |
| 4 | Reserverad (nur RDC Gen2) |
| 5 | unbekannt 1 |
| 6 | unbekannt 2 |
| 7 | unbekannt 3 |
| 8 | unbekannt 4 |
| 9 | unbekannt 5 (nur RDC Gen2) |

### TAB_RDC_CHANGED

| WERT | TEXT |
| --- | --- |
| 0 | nicht geändert |
| 1 | geändert |
| 255 | Signal unbekannt |

### TAB_RDC_AKTIV_INAKTIV

| WERT | TEXT |
| --- | --- |
| 0 | inaktiv |
| 1 | aktiv |
| 255 | Signal unbekannt |

### RES_0XDCD0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_WERT | km | - | long | - | - | - | - | - | Kilometerstand Bereich: 0 km bis 524272 km (-999999 km => ungueltig) |
| STAT_DATUM_WERT | - | - | string | - | - | - | - | - | Datum (99.99.99 => ungueltig) Achtung: Rückgabe als _TEXT!! |
| STAT_SYSTEMZEIT_WERT | s | - | unsigned long | - | - | - | - | - | Zeit in Sekunden seit Start der Systemzeit. Wertebereich: 0 - 4294967294.  Wert 0xffffffff => ungültig |
| STAT_WARNSTATUS1 | 0-n | - | unsigned int | - | - | - | - | - | Warnstatus 1 |
| STAT_BETRIEBSZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Betriebszustand |
| STAT_FAHRZEUGZUSTAND | 0-n | - | unsigned int | - | - | - | - | - | Fahrzeugzustand |
| STAT_ZUSTANDSKENNUNG | 0-n | - | unsigned int | - | - | - | - | - | Zustandskennung |
| STAT_INTERNER_FEHLERCODE | 0-n | - | unsigned int | - | - | - | - | - | SG-interner Fehlercode |
| STAT_AUSSENTEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Aussentemperatur Bereich: -40 bis 127 Grad C (-99 °C => ungueltig) |
