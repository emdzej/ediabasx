# fla_20.prg

## General

|  |  |
| --- | --- |
| File | fla_20.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 41 |
| Origin | BMW EI-611 Stefan_Weidhaas |
| Revision | 1.000 |
| Author | Gentex_GmbH EE Gundolf_Aichinger |
| ECU Comment | FLA [41] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Fernlicht-Assistent |  |  |
| ORIGIN | string | BMW EI-611 Stefan_Weidhaas |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | Gentex_GmbH EE Gundolf_Aichinger |  |  |
| COMMENT | string | FLA [41] |  |  |
| PACKAGE | string | 1.17 |  |  |
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
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x800609 | Horizontale Dejustage erkannt | 0 |
| 0xE0C468 | BODY-CAN Control Module Bus OFF | 0 |
| 0x800614 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x800615 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0xE0EC03 | Signal (0x1a1) ungültig empfangen: Fahrzustand Fahrzeug, Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xE0D404 | Botschaft (0x380 , Fahrgestellnummer): Ausfall | 1 |
| 0xE0EC06 | Signal (0x21A) ungültig empfangen: Status Abblendlicht | 1 |
| 0x80060B | Sensitivität verstellt | 1 |
| 0x800604 | Temperatur unterhalb des Arbeitsbereichs | 1 |
| 0xE0D409 | Botschaft (0x21a , Lampenzustand): Ausfall | 1 |
| 0x025F00 | Energiesparmode aktiv | 0 |
| 0x800608 | Sensorsichtfeld verdeckt | 1 |
| 0xE0D410 | Botschaft (0x96, Status_Stufenloser_Fernlichtassistent): Ausfall | 1 |
| 0x800613 | Codierung: Signatur für Daten ungültig | 0 |
| 0xE0EC05 | Signal (0x19f) ungültig empfangen: Giergeschwindigkeit Fahrzeug | 1 |
| 0x80060C | ALS-Sensor defekt | 0 |
| 0x800605 | Temperatur oberhalb des Arbeitsbereichs | 1 |
| 0xE0EC0F | Signal (0x2ca) ungültig empfangen: Temperatur Außen | 1 |
| 0x800611 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0xE0D401 | Botschaft (0x1ee , Bedienung Lenkstocktaster): Ausfall | 1 |
| 0x800603 | Interner Softwarefehler | 0 |
| 0xE0EC09 | Signal (0x12F) ungültig empfangen:Status Fahrzeug_Zustand, Status Klemme 15N | 1 |
| 0xE0D400 | Botschaft (0x2ca , Aussentemperatur): Ausfall | 1 |
| 0x800607 | Überspannung erkannt | 1 |
| 0xE0D40F | Botschaft (0x12F, Klemmen) Ausfall | 1 |
| 0xE0EC01 | Signal (0x3f9) ungültig empfangen: Status Gangwahl Antrieb | 1 |
| 0xE0D402 | Botschaft (0x3f9 , Daten Antriebsstrang 2): Ausfall | 1 |
| 0x800612 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x80060A | Vertikale Dejustage erkannt | 0 |
| 0xE0D407 | Botschaft (0x19f, Giergeschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE0D40E | Botschaft (0x3b0 , Status Gang Rückwärts): Ausfall | 1 |
| 0x800606 | Unterspannung erkannt | 1 |
| 0xE0EC0D | Signal (0x36A) ungültig empfangen: Anzeige Fernlicht Assistent, Anfortderung Bedienung Fernlicht Assistent | 1 |
| 0xE0D405 | Botschaft (0x3a0 , Fahrzeugzustand): Ausfall | 1 |
| 0x02FF5F | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xE0EC08 | Signal (0x3b0) ungültig empfangen: Status Gang Rückwärts | 1 |
| 0xE0EC02 | Signal (0x380) ungültig empfangen:  Fahrgestellnummer | 1 |
| 0xE0EC07 | Signal (0x330) ungültig empfangen:Wegstrecke Kilometer | 1 |
| 0xE0EC0E | Signal (0x96) ungültig empfangen: eines der Signale Position Hell-Dunkel-Grenze ungültig | 1 |
| 0x800600 | Interner Komponentenfehler Steuergerät | 0 |
| 0xE0EC0C | Signal (0x328) ungültig empfangen: Zeit Sekunde Zähler Relativ | 1 |
| 0xE0D406 | Botschaft (0x1a1 , Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE0EC00 | Signal (0x1ee) ungültig empfangen: Bedienung Lenkstocktaster | 1 |
| 0xE0D408 | Botschaft (0x330 , Kilometerstand Reichweite): Ausfall | 1 |
| 0xE0CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur fuer Testzwecke | 1 |
| 0x800601 | Interner Komponentenfehler Kamera | 0 |
| 0xE0D40C | Botschaft (0x328 , Relativzeit): Ausfall | 1 |
| 0xE0D40D | Botschaft (0x36A, Status Fernlichtassistent): Ausfall | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x5F0000 | Infospeicher: Onlinekalibrierung initial abgeschlossen | 0 |
| 0x80060F | Botschaft (328h, Relativzeit): Ausfall | 1 |
| 0x80060D | Puffer für aktive Fehlermeldungen voll. | 0 |
| 0x80060E | Versand aktiver Fehlermeldungen mehrfach erfolglos. Puffer wird gelöscht. | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABSCHALTGRUND_FERNLICHT | 0xD341 | - | Abschaltgründe für Fernlicht. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD341 |
| AUTOAIM_FLA_INIT | 0xD370 | - | Status AUTOAIM-Vorgang und aktuelle Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD370 |
| AIM_OFFSET | 0xD371 | - | Auslesen der horizontalen und vertikalen Offsetwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD371 |
| SENSORPARAMETER_FLA | 0xD372 | - | Auslesen diverser Imagerparameter. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD372 |
| DEMO_MODE_FLA | 0xD3A6 | - | Demo-Mode für Fernlichtassisten ein-/ausschalten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A6 | - |
| EMPFEHLUNG_FLA_STFLA | 0xD3AD | - | Empfehlung für 2-stufigen und stufenlosen Fernlichtassisten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3AD | RES_0xD3AD |
| OFFSET_AUTOAIM | 0xD3B7 | - | Setzt die Offset-AUTOAIM-Werte auf einen beliebigen Wert | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B7 | - |
| _OFFSET_WINDSCREEN | 0xD3B8 | - | Scheibenneigungswinkel | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B8 | - |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| AUSRICHTUNG_WERK_SCHREIBEN | 0xA375 | - | Die Ausrichtung der Kamera wird mit einem Target durchgeführt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA375 | RES_0xA375 |
| AUSRICHTUNG_WERK_LESEN | 0xA376 | - | Überprüfung der Ausrichtung mit Target | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA376 | RES_0xA376 |
| _FASTA_FLA_DATA | 0x4001 | - | _FASTA_FLA_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001 |
| _FASTA_FLA_LOESCHEN | 0x4006 | - | _FASTA_FLA_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006 | - |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### TAB_FLA_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | keine_Empfehlung |
| 0x03 | Zurück_zum_Normalmodus |

### RES_0XD341

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_ENTGEGENKOMMENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein entgegenkommendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_VORAUSFAHRENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein vorausfahrendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_GESCHWINDIGKEITSLIMIT | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob die Geschwindigkeit unterhalb der Grenze erkannt worden ist:  0 = Geschwindigkeit oberhalb der Schwelle, Fernlicht wird eingeschaltet,  1 = Geschwindigkeit unterhalb der Schwelle, Fernlicht wird abgeschaltet |
| STAT_FLA_UMGEBUNGSHELLIGKEIT | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob Umgebungshelligkeit (Tag) erkannt worden ist:  0 = kein Helligkeit (Nacht) erkannt,  1 = Helligkeit (Tag) erkannt |
| STAT_FLA_ORTSCHAFTSERKENNUNG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob eine ausreichende Beleuchtung erkannt worden ist:  0 = keine ausreichende Beleuchtung erkannt,  1 = ausreichende Beleuchtung erkannt |
| STAT_FLA_NEBELERKENNUNG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob Nebel erkannt worden ist:  0 = kein Nebel,  1 = Nebel erkannt |
| STAT_FLA_AUTOBAHNMODE | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob Autobahn erkannt worden ist:  0 = keine Autobahn,  1 = Autobahn erkannt |
| STAT_FLA_VERZOEGERUNGSZEIT | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob wegen einer Zeiterzögerung das Fernlicht nicht eingeschaltet wird:  0 = keine Zeitverzögerung,  1 = Zeitverzögerung |

### RES_0XD370

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOAIM | 0/1 | - | unsigned char | - | - | - | - | - | Status der initialen Kalibrierung im Kundenbetrieb 0=AUTOAIM nicht abgeschlossen, 1=AUTOAIM initial abgeschlossen |
| STAT_AUTOAIM_OFFSET_H_WERT | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur horizontal in Grad |
| STAT_AUTOAIM_OFFSET_V_WERT | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur vertikal in Grad |
| STAT_AUTOAIM_INITIAL_COMPLETION_DISTANCE_WERT | km | high | unsigned long | - | - | - | - | - | Gefahrenen Kilometer bis initiale Kalibrierung, Das Byte 1 wird mit 0 vorbelegt, sodaß der Distanze_Wert vom CAN-Bus übernommen werden kann. |

### RES_0XD371

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUPPLIER_OFFSET_H_WERT | Grad | - | char | - | - | - | 10.0 | - | Steuergeräte interner H-Offset (Anlieferzustand vom Zulieferer) in 0.1*Grad |
| STAT_SUPPLIER_OFFSET_V_WERT | Grad | - | char | - | - | - | 10.0 | - | Steuergeräte interner V-Offset (Anlieferzustand vom Zulieferer) in Grad |
| STAT_WINDSCREEN_OFFSET_V_WERT | Grad | - | char | - | - | - | 10.0 | - | Durch das Fahrzeug eingebrachte V-Offset in Grad |
| STAT_AUTOAIM_OFFSET_H_WERT | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur horizontal in Grad |
| STAT_AUTOAIM_OFFSET_V_WERT | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur vertikal in Grad |

### RES_0XD372

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | °C | - | char | - | - | - | - | - | Temperatur auf dem Imager-Die |
| STAT_IMAGER_MAX_PIXEL_WERT | % | - | unsigned char | - | - | - | - | - | Wert des hellsten Pixels |
| STAT_IMAGER_MIN_PIXEL_WERT | % | - | unsigned char | - | - | - | - | - | Wert des dunkelsten Pixels |
| STAT_IMAGER_AVG_PIXEL_WERT | % | - | unsigned char | - | - | - | - | - | Wert der durchschnittlichen Pixelhelligkeit |

### ARG_0XD3A6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = Demo-Mode einschalten,  0 = Demo-Mode ausschalten |

### RES_0XD3AD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTEMPFEHLUNG_FLA | 0-n | - | unsigned char | - | TAB_FLA_EMPFEHLUNG | - | - | - | Schaltempfehlung 2-stufiger FLA:  0 = Keine Emfehlung (Defekt erkannt, Sichtfeld verdreckt), 1 = Fernlicht AUS, 2 = Fernlicht EIN |
| STAT_GFA_OBJECT_RANGE_WERT | m | - | unsigned char | - | - | - | - | - | Entfernung zum Objekt |
| STAT_GFA_RIGHT_BOUNDARY_WERT | Grad | - | unsigned char | - | - | 1.0 | 10.0 | -15.0 | Rechte Grenze des blendfreien Bereiches |
| STAT_GFA_LEFT_BOUNDARY_WERT | Grad | - | unsigned char | - | - | 1.0 | 10.0 | -10.4 | Linke Grenze des blendfreien Bereiches |
| STAT_GFA_LOWER_BOUNDARY_WERT | Grad | - | unsigned char | - | - | 1.0 | 20.0 | -5.0 | Untere Grenze des blendfreien Bereichs |

### ARG_0XD3AD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTEMPFEHLUNG_FLA | 0-n | - | unsigned char | - | TAB_STFLA_CONTROL | - | - | - | - | - | Schaltempfehlung für FLA:  0 = Keine Empfehlung 1 = AUS 2 = EIN 3 = Zurück zum Normalbetrieb |
| GFA_OBJECT_RANGE | m | - | unsigned char | - | - | - | - | - | - | - | Auszugebende Entfernung zum Objekt |
| GFA_RIGHT_BOUNDARY | Grad | - | unsigned char | - | - | 10.0 | 1.0 | 150.0 | -15.0 | 10.4 | Auszugebende rechte Grenze in 0,1 Grad-Schritten des blendfreien Bereiches |
| GFA_LEFT_BOUNDARY | Grad | - | unsigned char | - | - | 10.0 | 1.0 | 104.0 | -10.4 | 15.0 | Auszugebende linke Grenze in 0,1 Grad-Schritten des blendfreien Bereiches |
| GFA_LOWER_BOUNDARY | Grad | - | unsigned char | - | - | 20.0 | 1.0 | 100.0 | -5.0 | 5.0 | Auszugebende untere Grenze in 0,05 Schritten des blendfreien Bereichs |

### TAB_STFLA_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Empfehlung |
| 0x01 | AUS |
| 0x02 | EIN |
| 0x03 | Zurück_zum_Normalbetrieb |

### TAB_FLA_EMPFEHLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Keine Empfehlung |
| 0x0001 | Fernlicht AUS |
| 0x0002 | Fernlicht EIN |
| 0xFFFF | Ungültig |

### ARG_0XD3B7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_AXIS | 0-n | - | unsigned char | - | TAB_FLA_AXIS | - | - | - | - | - | Angabe der Achse |
| OFFSET_ANGLE | Grad | - | char | - | - | 10.0 | - | - | -3.5 | 3.5 | Winkel mit 1 Nachkommastellen |

### TAB_FLA_AXIS

| WERT | TEXT |
| --- | --- |
| 0x01 | H |
| 0x02 | V |

### ARG_0XD3B8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_ANGLE_V | Grad | - | char | - | - | 10.0 | - | - | -3.5 | 3.5 | Winkel für Scheibenoffset mit 1 Nachkommastelle |

### RES_0XA375

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AIM_RESULT | - | - | + | 0-n | - | unsigned char | - | TAB_FLA_AIM_RESULT | - | - | - | Rückgabe des Status des Ausrichtungstests im Werk. |
| STAT_AUTOAIM_OFFSET_H_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur horizontal in Grad |
| STAT_AUTOAIM_OFFSET_V_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur vertikal in Grad |

### ARG_0XA375

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H_DEV | + | - | Grad | - | char | - | - | 10.0 | - | - | -12.8 | 12.7 | Horizontale Fehlpositionierung des Targets zur FLA-Mitte (= Fahrzeugmitte) in Grad |
| V_DEV | + | - | Grad | - | char | - | - | 10.0 | - | - | -12.8 | 12.7 | Vertikale Fehlpositionierung des Targets zur FLA-Mitte (= Fahrzeugmitte) in Grad |
| AIM_AXIS | + | - | 0-n | - | unsigned char | - | TAB_FLA_AXIS_HV | - | - | - | - | - | Zu berücksichtigende Achse (H,V,HV) |

### RES_0XA376

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AIM_RESULT | - | - | + | 0-n | - | unsigned char | - | TAB_FLA_AIM_RESULT | - | - | - | Rückgabe des Status des Ausrichtungstests im Werk. |
| STAT_AUTOAIM_OFFSET_H_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur horizontal in Grad |
| STAT_AUTOAIM_OFFSET_V_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Erfolgte Korrektur vertikal in Grad |
| STAT_SUPPLIER_OFFSET_H_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Steuergeräte interner H-Offset (Anlieferzustand vom Zulieferer) in 0.1*Grad |
| STAT_SUPPLIER_OFFSET_V_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Steuergeräte interner V-Offset (Anlieferzustand vom Zulieferer) in Grad |
| STAT_WINDSCREEN_OFFSET_V_WERT | - | - | + | Grad | - | char | - | - | - | 10.0 | - | Durch das Fahrzeug eingebrachte V-Offset in Grad |

### ARG_0XA376

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H_DEV | + | - | Grad | - | char | - | - | 10.0 | - | - | -12.8 | 12.7 | Horizontale Fehlpositionierung des Targets zur FLA-Mitte (= Fahrzeugmitte) in Grad |
| V_DEV | + | - | Grad | - | char | - | - | 10.0 | - | - | -12.8 | 12.7 | Vertikale Fehlpositionierung des Targets zur FLA-Mitte (= Fahrzeugmitte) in Grad |
| AIM_AXIS | + | - | 0-n | - | unsigned char | - | TAB_FLA_AXIS_HV | - | - | - | - | - | Zu berücksichtigende Achse (H,V,HV) |

### TAB_FLA_AIM_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Aiming OK |
| 0x01 | Aiming-Error: Target not found |
| 0x02 | Aiming-Error: Ambient to bright |
| 0x03 | Aiming-Error: Out off range |
| 0x04 | Aiming-Error: Too many light sources |
| 0x05 | Aiming-Error: Out off tolerance |

### TAB_FLA_AXIS_HV

| WERT | TEXT |
| --- | --- |
| 0x01 | H |
| 0x02 | V |
| 0x03 | HV |

### RES_0X4001

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_OP_TIME_WERT | s | high | unsigned long | - | - | - | - | - | Zeitdauer FLA durch Fahrer aktiviert [s] |
| STAT_DELTA_TIME_FLA_NIGHT_WERT | s | high | unsigned long | - | - | - | - | - | Zeitdauer in der Umgebungshelligkeit FLA Aktivierung erlaubt  [s] |
| STAT_DELTA_TIME_FLA_ACT_HB_WERT | s | high | unsigned long | - | - | - | - | - | Zeitdauer Einschaltempfehlung FLA  [s] |
| STAT_DELTA_TIME_FLA_ACT_LB_WERT | s | high | unsigned long | - | - | - | - | - | Zeitdauer Abschaltempfehlung [s] |
| STAT_FLA_COUNT_OVERRIDE_WERT | Counts | high | unsigned long | - | - | - | - | - | Anzahl Übersteuerung durch Fahrer |
| STAT_OPTIME_TOTAL_WERT | s | high | unsigned long | - | - | - | - | - | Absoluter Betriebszeitzähler [s] |

### ARG_0X4006

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_FLA_LOESCHEN | 0/1 | high | char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |
