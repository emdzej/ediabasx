# asa_01.prg

## General

|  |  |
| --- | --- |
| File | asa_01.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 47 |
| Origin | BMW EF-440 Reithmeier |
| Revision | 2.017 |
| Author | GLIWA IT Zlatkovic |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktuator-Steuergerät Aktivlenkung |  |  |
| ORIGIN | string | BMW EF-440 Reithmeier |  |  |
| REVISION | string | 2.017 |  |  |
| AUTHOR | string | GLIWA IT Zlatkovic |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.14 |  |  |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Alle Systeme aktiviert |
| 0x01 | Spezieller Energiesparmode | AFS Regelsysteme deaktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021600 | Energiesparmode aktiv | 0 |
| 0x02FF16 | DM Test Application | 0 |
| 0x480200 | Hardwarefehler Steuergerät | 0 |
| 0x480201 | Überwachung | 0 |
| 0x480202 | Fahrgestellnummervergleich | 0 |
| 0x480203 | Unterspannung Klemme 15n oder 30 (< 9 V) | 1 |
| 0x480204 | Überspannung Klemme 15n oder 30 (> 15 V) | 1 |
| 0x480205 | Motorblockade | 0 |
| 0x480206 | Codierdatenfehler | 0 |
| 0x480207 | Motorpositionssensor | 0 |
| 0x480208 | Motorspannung, Motorstrom | 0 |
| 0x480209 | Motorposition | 0 |
| 0x48020A | Sperrenfehler | 0 |
| 0x48020B | Selbsthemmungsüberwachung | 0 |
| 0x48020C | Kombinierte Lage- und Drehzahlüberwachung | 0 |
| 0x48020D | Spurstangenlagesensor | 0 |
| 0x48020E | Diversitäres Rechnen | 0 |
| 0x48020F | Flashfehler | 0 |
| 0x480210 | Betriebsystem | 0 |
| 0x480211 | Klemme 30 | 1 |
| 0x480212 | Aufstartverzögerung | 0 |
| 0x480213 | Motorposition initialisieren | 0 |
| 0x480214 | Unterspannung Klemme 15n (< 9 V) | 1 |
| 0x480215 | Unterspannung Klemme 30 (< 9 V) | 1 |
| 0x480216 | Überspannung Klemme 15n (> 15 V) | 1 |
| 0x480217 | Überspannung Klemme 30 (> 15 V) | 1 |
| 0x480218 | Elmosfehler | 0 |
| 0x480219 | Softwarefehler | 0 |
| 0x48021a | Tasküberwachungsfehler | 0 |
| 0x48021b | Enstufenübertemperatur | 0 |
| 0x48021c | Zwischenkreisfehler | 0 |
| 0x48021d | Endstufenfehler | 0 |
| 0x48021e | AD-Wandlerfehler | 0 |
| 0x48021f | Sperrenanzugsspannung < 10V | 1 |
| 0xCE841F | Flexray physikalischer Busfehler | 0 |
| 0xCE8420 | Flexray Controllerfehler | 0 |
| 0xCE8BFF | DM Test Network | 1 |
| 0xCE9400 | Kommunikation Zeitüberschreitung | 1 |
| 0xCE9401 | Botschaft (Sollwinkel von ICM-QL) Fehler | 1 |
| 0xCE9402 | Botschaft (Klemmen von CAS) Fehler | 1 |
| 0xCE9403 | Botschaft (Fahrgestellnummer von CAS) Fehler | 1 |
| 0xCE9404 | Winkelfehler ICM | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x400d | Fehlercode (KFC) | 0-n | - | 0xff | TAB_KFC | - | - | - |
| 0x400a | Fehlerart (KFA) | 0-n | - | 0xff | TAB_KFA | - | - | - |
| 0x4000 | Systemstatus | 0-n | - | 0xff | TAB_STMSTATE | 1 | 1 | 0 |
| 0x4005 | Spannung Klemme 15n | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4008 | Temperatur | °C | - | signed char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x160000 | NVM_E_WRITE_FAILED | 0 |
| 0x160001 | NVM_E_READ_FAILED | 0 |
| 0x160002 | NVM_E_CONTROL_FAILED | 0 |
| 0x160003 | NVM_E_ERASE_FAILED | 0 |
| 0x160004 | NVM_E_READ_ALL_FAILED | 0 |
| 0x160005 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x160006 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x160007 | DEM_EVENT_KFC_DRIVER | 0 |
| 0x160008 | DEM_EVENT_ELMCSI | 0 |
| 0x160009 | DEM_EVENT_KFC_CODING_DATA_OUT_OF_BOUNDS_NEC | 0 |
| 0x16000a | DEM_EVENT_KFC_CODING_DATA_OUT_OF_BOUNDS_S12X | 0 |
| 0x16000b | DEM_EVENT_KFC_S12_AGB | 0 |
| 0x16000c | DEM_EVENT_KFC_IPC | 0 |
| 0x16000d | DEM_EVENT_KFC_S12_IPC | 0 |
| 0x16000e | DEM_EVENT_KFC_RAM | 0 |
| 0x16000f | DEM_EVENT_KFC_ROM | 0 |
| 0x160010 | DEM_EVENT_KFC_STM | 0 |
| 0x160011 | DEM_EVENT_KFC_S12_WATCHDOG | 0 |
| 0x160012 | DEM_EVENT_KFC_FLASH | 0 |
| 0x160013 | DEM_EVENT_KFC_S12_FLASH | 0 |
| 0x160014 | DEM_EVENT_KFC_S12_FR_REC | 1 |
| 0x160015 | DEM_EVENT_KFC_S12_FR_SEND | 0 |
| 0x160016 | DEM_EVENT_KFC_FR_SEND | 0 |
| 0x160017 | DEM_EVENT_KFC_OS_ERROR | 0 |
| 0x160018 | DEM_EVENT_KFC_WDG_1MS | 0 |
| 0x160019 | DEM_EVENT_KFC_WDG_INT | 0 |
| 0x16001a | DEM_EVENT_KFC_D3PDH_ILS | 0 |
| 0x16001b | DEM_EVENT_KFC_PHASE_UZK_SC | 0 |
| 0x16001c | DEM_EVENT_KFC_PHASE_GND_SC | 0 |
| 0x16001d | DEM_EVENT_KFC_LSSW_U_OC | 0 |
| 0x16001e | DEM_EVENT_KFC_LSSW_V_OC | 0 |
| 0x16001f | DEM_EVENT_KFC_LSSW_W_OC | 0 |
| 0x160020 | DEM_EVENT_KFC_HSSW_U_OC | 0 |
| 0x160021 | DEM_EVENT_KFC_HSSW_V_OC | 0 |
| 0x160022 | DEM_EVENT_KFC_HSSW_W_OC | 0 |
| 0x160023 | DEM_EVENT_KFC_PWM3PH_INIT | 0 |
| 0x160024 | DEM_EVENT_KFC_ELMOSH_BS_UNDERVOLTAGE | 0 |
| 0x160025 | DEM_EVENT_KFC_MOTOR_OC | 0 |
| 0x160026 | DEM_EVENT_KFC_TOFF | 0 |
| 0x160027 | DEM_EVENT_KFC_ANALOG_SIGNALS_NOT_VALID | 0 |
| 0x160028 | DEM_EVENT_KFC_OFFSET_CALIB_FAILED | 0 |
| 0x160029 | DEM_EVENT_KFC_ELMOSH_S_E_LINK | 0 |
| 0x16002a | DEM_EVENT_KFC_ELMOSH_S_E_SPIBUF_OVL | 0 |
| 0x16002b | DEM_EVENT_KFC_ELMOSH_S_E_TIMEOUT | 0 |
| 0x16002c | DEM_EVENT_KFC_ELMOSH_UNDERVOLTAGE | 1 |
| 0x16002d | DEM_EVENT_KFC_ELMOSH_OVERCURRENT | 0 |
| 0x16002e | DEM_EVENT_KFC_ELMOSH_FAULTPIN_LOW | 0 |
| 0x16002f | DEM_EVENT_KFC_5V0A_UNDERVOLTAGE | 0 |
| 0x160030 | DEM_EVENT_PRG_SW | 0 |
| 0x160031 | DEM_EVENT_KCF_CCU | 0 |
| 0x160032 | DEM_EVENT_KCF_SMVOLT | 0 |
| 0x160033 | DEM_EVENT_KFC_PWR_OUT | 0 |
| 0x160034 | DEM_EVENT_KFC_US | 0 |
| 0x160035 | DEM_EVENT_KFC_SMCURR | 0 |
| 0x160036 | DEM_EVENT_KFC_SMPOS | 0 |
| 0x160037 | DEM_EVENT_KFC_PROG | 0 |
| 0x160038 | DEM_EVENT_KFC_BRAKE | 0 |
| 0x160039 | DEM_EVENT_KFC_ADC | 0 |
| 0x16003a | DEM_EVENT_KFC_SMCOM | 0 |
| 0x16003b | DEM_EVENT_KFC_SELFLOCK | 0 |
| 0x16003c | DEM_EVENT_KFC_ACT_KLD | 0 |
| 0x16003d | DEM_EVENT_KFC_WRONG_KFC_FROM_ZFLS | 0 |
| 0x16003e | DEM_EVENT_KFC_ACT_BLOCK | 0 |
| 0x16003f | DEM_EVENT_KFC_WACKEL | 1 |
| 0x160040 | DEM_EVENT_KFC_SENS_SLGS | 0 |
| 0x160041 | DEM_EVENT_KFC_TAR_STEA_MSG | 1 |
| 0x160042 | DEM_EVENT_KFC_DISCHARGE | 0 |
| 0x160043 | DEM_EVENT_KFC_S12_OS | 0 |
| 0x160044 | DEM_EVENT_KFC_AGB | 0 |
| 0x160045 | DEM_EVENT_KFC_PWR_KL30 | 1 |
| 0x160046 | DEM_EVENT_KFC_S12_STM_ERROR | 0 |
| 0x160047 | DEM_EVENT_KFC_S12_TSACTRL | 0 |
| 0x160048 | DEM_EVENT_KFC_TEMP | 0 |
| 0x160049 | DEM_EVENT_KFC_TAR_STEA_TIMEOUT | 1 |
| 0x16004a | DEM_EVENT_KFC_TSA_BOUND | 0 |
| 0x16004b | DEM_EVENT_KFC_HSR_ERROR | 0 |
| 0x16004c | DEM_EVENT_KFC_KL30_UNDERVOLTAGE | 1 |
| 0x16004d | DEM_EVENT_KFC_KL30_OVERVOLTAGE | 1 |
| 0x16004e | DEM_EVENT_KFC_KL15_UNDERVOLTAGE | 1 |
| 0x16004f | DEM_EVENT_KFC_KL15_OVERVOLTAGE | 1 |
| 0x160050 | DEM_EVENT_KFC_SSW_MOSFET_OC | 0 |
| 0x160051 | DEM_EVENT_KFC_PCHARGE_OR_SSW_MOSFET_SC | 0 |
| 0x160052 | DEM_EVENT_KFC_PCHARGE_OC_OR_POWERSTAGE_SC | 0 |
| 0x160053 | DEM_EVENT_KFC_SAFETY_SWITCH_2_SC | 0 |
| 0x160054 | DEM_EVENT_KFC_SAFETY_SWITCH_1_SC | 0 |
| 0x160055 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x160056 | CODING_EVENT_WRONG_VEHICLE | 1 |
| 0x160057 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x160058 | CODING_EVENT_INVALID_DATA | 1 |
| 0x160059 | DEM_EVENT_KFC_VINCOMP | 0 |
| 0x16005a | DEM_EVENT_KFC_MAXAKTDIFF | 0 |
| 0x16005b | DEM_EVENT_KFC_3V3A_2_UNDERVOLTAGE | 0 |
| 0x16005c | DEM_EVENT_KFC_VERS_SLS | 0 |
| 0x16005d | DEM_EVENT_KFC_VERS_MLS | 0 |
| 0x16005e | DEM_EVENT_KFC_MOTORPHASE_OC | 0 |
| 0x16005f | DEM_EVENT_KFC_NOT_CONFIGURED_IN_TRESOS | 0 |
| 0x160060 | DEM_EVENT_KFC_FR_FLX | 1 |
| 0x160061 | DEM_EVENT_KFC_FR_CC | 0 |
| 0x160062 | DEM_EVENT_KFC_SET_MLW_INVALID | 1 |
| 0x160063 | DEM_EVENT_KFC_REQ_RESTART | 1 |
| 0x160064 | DEM_EVENT_KFC_S12_SMCOM | 0 |
| 0x160065 | DEM_EVENT_KFC_WR_MEM | 0 |
| 0x160066 | DEM_EVENT_KFC_RD_MEM | 0 |
| 0x160067 | DEM_EVENT_KFC_SLOTFIND | 0 |
| 0x160068 | DEM_EVENT_KFC_SAS_FAILS | 0 |
| 0x160069 | DEM_EVENT_KFC_WAIT_FOR_RLW_SET | 1 |
| 0x16006a | DEM_EVENT_KFC_FR_KLEMMEN | 1 |
| 0x16006b | DEM_EVENT_KFC_TAR_STEA_MAXTIMEOUTS | 1 |
| 0x16006c | DEM_EVENT_KFC_EEPROM | 0 |
| 0x16006d | DEM_EVENT_KFC_ELMOS_ON | 0 |
| 0x16006e | DM_Queue_DELETED | 0 |
| 0x16006f | DM_Queue_FULL | 0 |
| 0x160070 | DEM_EVENT_ZFLS_UNDERVOLTAGE | 1 |
| 0x160071 | DEM_EVENT_KFC_VINTIMEOUT | 1 |
| 0x160072 | DEM_EVENT_KFC_ZWK | 0 |
| 0x160073 | DEM_EVENT_KFC_SSW_OFF | 0 |
| 0x160074 | DEM_EVENT_KFC_ZFLS_INFO | 0 |
| 0x160075 | DEM_EVENT_KFC_PPROT | 0 |
| 0x160076 | DEM_EVENT_KFC_S12_AGB_LIMIT | 0 |
| 0x160077 | DEM_EVENT_KFC_FEE_TEST | 0 |
| 0x160078 | DEM_EVENT_KFC_FEE_CFBLK | 0 |
| 0x160079 | DEM_EVENT_KFC_FEE_CBLK | 0 |
| 0x16007a | DEM_EVENT_KFC_FEE_RFBLK | 0 |
| 0x16007b | DEM_EVENT_KFC_FEE_RBLK | 0 |
| 0x16007c | DEM_EVENT_KFC_SW_WARNING | 0 |
| 0x16007d | DEM_EVENT_KFC_INFO_ZWK_PL_UNDERVOLTAGE | 1 |
| 0x16007e | DEM_EVENT_KFC_INFO_ZWK_OVERVOLTAGE | 1 |
| 0x16007f | DEM_EVENT_KFC_INFO_ZWK_PL_OVERVOLTAGE | 1 |
| 0x160080 | DEM_EVENT_KFC_INFO_ZWK_LONG_PL | 0 |
| 0x160081 | DEM_EVENT_KFC_INFO_FRPHYS | 0 |
| 0x160082 | DEM_EVENT_KFC_FRPHYS | 0 |
| 0x160083 | DEM_EVENT_KFC_INFO_FRPHYS_STATUS_UP | 0 |
| 0x160084 | DEM_EVENT_KFC_FRPHYS_SPI | 0 |
| 0x160085 | DEM_EVENT_KFC_FRPHYS_INIT | 0 |
| 0x160086 | DEM_EVENT_KFC_INFO_FRPHYS_REINIT | 0 |
| 0x160087 | DEM_EVENT_KFC_NO_SERVICE_ICM | 1 |
| 0x160088 | DEM_EVENT_KFC_NO_SERVICE_KL | 1 |
| 0x160089 | DEM_EVENT_KFC_SLGS_NOSIGNAL_PWM | 0 |
| 0x16008a | DEM_EVENT_KFC_SLGS_NOSIGNAL_PWMK | 0 |
| 0x16008b | DEM_EVENT_KFC_SLGS_NOSIGNAL_PWM_TIMEOUT | 0 |
| 0x16008c | DEM_EVENT_KFC_SLGS_NOSIGNAL_PWMK_TIMEOUT | 0 |
| 0x16008d | DEM_EVENT_KFC_SLGS_STARTUP_PWM | 0 |
| 0x16008e | DEM_EVENT_KFC_SLGS_STARTUP_PWMK | 0 |
| 0x16008f | DEM_EVENT_KFC_SLGS_STARTUP_PWM_TIMEOUT | 0 |
| 0x160090 | DEM_EVENT_KFC_SLGS_STARTUP_PWMK_TIMEOUT | 0 |
| 0x160091 | DEM_EVENT_KFC_SLGS_FREQ | 0 |
| 0x160092 | DEM_EVENT_KFC_SLGS_DC | 0 |
| 0x160093 | DEM_EVENT_KFC_SLGS_DCM_OVERFLOW | 0 |
| 0x160094 | DEM_EVENT_KFC_S12X_TSA_PLAUS | 0 |
| 0x160095 | DEM_EVENT_KFC_PWR_OUT_INIT | 0 |
| 0x160096 | DEM_EVENT_KFC_TSENSOR | 0 |
| 0x160097 | DEM_EVENT_KFC_INFO_ZWK_UNDERVOLTAGE | 1 |
| 0x160098 | DEM_EVENT_KFC_DRLS | 0 |
| 0x160099 | DEM_EVENT_KFC_ACTIVE_DIAG | 0 |
| 0x16009a | DEM_EVENT_KFC_S12_RLS_COMPARE | 0 |
| 0x16009b | DEM_EVENT_KFC_KLD | 0 |
| 0x16009c | DEM_EVENT_KFC_S12_AGB_LOCK | 0 |
| 0x16009d | DEM_EVENT_KFC_S12_AGB_TSA | 0 |
| 0x16009e | DEM_EVENT_KFC_STM_LOW_VLTG4DRIVE | 0 |
| 0x16009f | DEM_EVENT_KFC_TORQUE | 0 |
| 0x160100 | DEM_EVENT_KFC_S12_PRG_SW_ACTSTM | 0 |
| 0x160101 | DEM_EVENT_KFC_BIST_INFO_RESTART | 0 |
| 0x167000 | VSM_EVENT_VEHICLESTATE | 1 |
| 0x168000 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 1 |
| 0xFFFFFF | Unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x400a | Fehlerart (KFA) | 0-n | - | 0xff | TAB_KFA | - | - | - |
| 0x4000 | Systemstatus | 0-n | - | 0xff | TAB_STMSTATE | - | - | - |
| 0x4003 | Systemstatus Counter | - | - | unsigned char | - | - | - | - |
| 0x400c | Z-Status | - | - | unsigned char | - | - | - | - |
| 0x4004 | Ersatzmassnahme | - | - | unsigned char | - | - | - | - |
| 0x4001 | Sollwinkel | ° | high | signed int | - | 1 | 100 | 0 |
| 0x4002 | Istwinkel | ° | high | signed int | - | 1 | 100 | 0 |
| 0x4005 | Spannung Klemme 15n | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4006 | Spannung Klemme 30 | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4007 | Spannung Zwischenkreis | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4008 | Temperatur | °C | - | signed char | - | - | - | - |
| 0x4009 | Uptime | ms | high | signed long | - | - | - | - |
| 0x400b | Local Condition | hex | - | signed long | - | - | - | - |
| 0x400e | Sperrenzustand | - | - | unsigned char | - | - | - | - |
| 0x400f | Sollwertqualifier ICM | - | - | unsigned char | - | - | - | - |
| 0x4010 | Klemmenstatus | - | - | unsigned char | - | - | - | - |
| 0x400d | Fehlercode (KFC) | 0-n | - | 0xff | TAB_KFC | - | - | - |
| 0x4011 | DET Sequenznummer | - | - | unsigned char | - | - | - | - |
| 0x4012 | Anzahl MLW-Verlust | - | - | unsigned char | - | - | - | - |
| 0x4013 | Anzahl Aktive Diagnose | - | - | unsigned char | - | - | - | - |
| 0x4014 | Filterung | - | - | unsigned char | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AFS_ALIVECOUNTER | 0xDB93 | - | Fehlerzähler und Alive Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB93 |
| AFS_MOTORSPANNUNGEN | 0xDBA2 | - | Motorspannung des AFS Motors.  Ausgabe der Spannung für alle 3 Phasen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA2 |
| AFS_MOTORSTROEME | 0xDBA1 | - | Motorstrom des AFS Motors.  Ausgabe des Stroms für alle 3 Phasen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA1 |
| AFS_SG_TEMPERATUR | 0xDB92 | STAT_ZWK_TEMPERATUR_WERT | AFS SG Temperatur | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_CAS_INFO | 0xDBA8 | - | Auslesen der vom CAS gesendeten Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA8 |
| ERSATZMASSNAHME | 0xDBAD | - | Aktuelle Ersatzmassnahme. Degradation im Fehlerfall. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAD |
| FLEXRAY_SIGNALE | 0xDBAB | - | Signale vom FlexRay | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAB |
| MOTORLAGEWINKEL_INITIALISIERUNG | 0xDB9C | STAT_GUELTIGKEIT_MLW_NR | Information ob AFS Motorlagewinkel bereits initialisiert wurde. | 0-n | - | - | unsigned char | TAB_MLWSTATE | - | - | - | - | 22 | - | - |
| MOTORLAGEWINKEL_RUECKSETZEN | 0xAB90 | - | Motorlagewinkel wird ungültig gesetzt | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MOTORLAGEWINKEL_VORDERACHSE | 0xDB97 | - | Motorlagewinkel des AFS Motor. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB97 |
| OPERATINGSYSTEM_AFS | 0xDB91 | - | Daten vom AFS OS (Betriebssystem) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB91 |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | V | - | - | int | - | - | 10 | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | V | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_ICM | 0xDBAE | - | ICM Signale auf A-FlexRay | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAE |
| STATUS_KLEMME_15N_EIN | 0xDAFF | STAT_STATUS_KLEMME_15N_EIN | Job liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_30_EIN | 0xDB05 | STAT_STATUS_KLEMME_30_EIN | Job liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| VERSORGUNG | 0xDBAA | - | Versorgungsspannungen des Steuergeräts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAA |
| ZFLS_SOFTWARE_NUMMER | 0xDB94 | - | Auslesen der ZFLS Software Nummer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB94 |
| CODIERDATEN_LESEN | 0x4100 | - | Auslesen der Codierdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100 |
| EEE_EXECUTE | 0x4103 | - | Ausführen von Kommados in NEC EEELib | - | - | - | - | - | - | - | - | - | 31 | ARG_0x4103 | RES_0x4103 |
| CODIERDATEN_LOESCHEN | 0x4105 | - | Löschen der Codierdaten. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FRAM_FORMATIEREN | 0x4106 | - | Formatiert FRAM. Alle Daten gehen verloren. | - | - | - | - | - | - | - | - | - | 31 | - | - |

### RES_0XDBAB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSAGE_KLEMMEN_NR | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Qualifier für die KLEMMEN Nachricht |
| STAT_MESSAGE_KILOMETERSTAND_NR | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Qualifier für Kilometerstand |
| STAT_MESSAGE_TAR_STEA_ACT_NR | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Qualifier für die TAR_STEA_ACT Nachricht  (Sollwertvorgabe - Winkel - von ICMQL) |
| STAT_MESSAGE_RELATIVZEIT_NR | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Qualifier : Zeit ab Zündung EIN (Kl.50) |
| STAT_MESSAGE_FAHRGESTELL_NR | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Qualifier für die VIN Nachricht |
| STAT_MESSAGE_FZZSTD_NR | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Qualifier für die Nachricht Fahrzeugzustand |

### RES_0XDBAD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERSATZMASSNAHME_NR | 0-n | - | unsigned char | - | TAB_STMCM | - | - | - | Vorgabe fuer die Statemachine |
| STAT_OUTOFF | 0/1 | - | unsigned char | - | - | - | - | - | Abschaltung Endstufe, 0: Normalbetrieb, 1: Endstufe ist abgeschaltet |
| STAT_DONOTDISC | 0/1 | - | unsigned char | - | - | - | - | - | Keine Entladung der Kondensatoren, 0: entladen, 1: nicht entladen |
| STAT_ROTINVALID | 0/1 | - | unsigned char | - | - | - | - | - | Rotorlagewinkel ungültig schreiben, 0: nicht verändern, 1: ungültig setzen |
| STAT_NUTSUCHEN | 0/1 | - | unsigned char | - | - | - | - | - | Nutsucher, 0: nicht durchführen, 1: Nut suchen |
| STAT_DRLSOFF | 0/1 | - | unsigned char | - | - | - | - | - | DRLS, 0: nichts ändern, 1: DRLS abschalten |
| STAT_RESTART | 0/1 | - | unsigned char | - | - | - | - | - | Verlange Neustart |
| STAT_REQMLWINVALID | 0/1 | - | unsigned char | - | - | - | - | - | Verlange das Ungültigsetzen des MLW |

### RES_0XDBA8

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAS_FAHRGESTELLNUMMER_WERT | - | - | - | - | - | string[7] | - | - | - | - | - | Empfangene Fahrgestellnummer |
| STAT_GUELTIGKEIT_CAS_FAHRGESTELLNR_NR | - | - | - | 0-n | - | unsigned char | - | TAB_PDUSTATE | - | - | - | Gueltigkeit der empfangenen Fahrgestellnummer |

### RES_0XDBAE

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ICM_ALIVECOUNTER_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Aktueller Alivecounter ICM auf BUS (Empfänger ASA, DSC). Bei  Alive  ändert sich dieser Wert. |
| STAT_ICM_SOLL_MLW_WERT | - | - | - | - | - | unsigned int | - | - | - | - | - | Aktueller AFS Sollwinkel ohne Einheit (Rohformat auf BUS) |
| STAT_ICM_SOLL_MLW_QUAL_NR | - | - | - | 0-n | - | unsigned char | - | TAB_QUTARSTEA | - | - | - | Sollwinkel-Qualifier von ICM |
| STAT_ICM_STAT_NR | - | - | - | 0-n | - | unsigned char | - | TAB_STECUICM | - | - | - | Service Qualifier von ICM |

### ARG_0XAB90

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | int | - | - | - | - | - | - | - | - |

### RES_0XDB91

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMZUSTAND_CPU1_NR | 0-n | - | unsigned char | - | TAB_GSTMSTATE | - | - | - | Zeigt den Systemzustand der CPU 1. |
| STAT_SYSTEMZUSTAND_CPU2_NR | 0-n | - | unsigned char | - | TAB_GSTMSTATE | - | - | - | Zeigt den Systemzustand der CPU 2. |
| STAT_SYSTEMZUSTAND_SOLL_CPU1_NR | 0-n | - | unsigned char | - | TAB_GSTMSTATE | - | - | - | Zeigt den auf der CPU 2 berechneten Soll-Systemzustand der CPU 1. |

### RES_0XDBA2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHASENSPANNUNG_U_WERT | V | - | long | - | - | - | 1000 | - | Spannung der Phase U am Stator des Stellmotors |
| STAT_PHASENSPANNUNG_V_WERT | V | - | long | - | - | - | 1000 | - | Spannung der Phase V am Stator des Stellmotors |
| STAT_PHASENSPANNUNG_W_WERT | V | - | long | - | - | - | 1000 | - | Spannung der Phase W am Stator des Stellmotors |

### RES_0XDB97

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MLW_ISTWERT_CPU1_WERT | - | - | - | ° | - | signed long | - | - | - | 1000 | - | Motorlagewinkel Istwert in Grad von CPU1 |
| STAT_MLW_ISTWERT_GUELTIGKEIT_CPU1_NR | - | - | - | 0-n | - | unsigned char | - | TAB_MLWSTATE | - | - | - | Qualifier für den Istwert CPU1 |
| STAT_MLW_ISTWERT_CPU2_WERT | - | - | - | ° | - | signed long | - | - | - | 1000 | - | Motorlagewinkel Istwert in Grad, von CPU2 |
| STAT_MLW_ISTWERT_GUELTIGKEIT_CPU2_NR | - | - | - | 0-n | - | unsigned char | - | TAB_MLWSTATE | - | - | - | Qualifier für den Istwert CPU2 |
| STAT_MLW_SOLLWERT_CPU1_WERT | - | - | - | ° | - | signed long | - | - | - | 1000 | - | Motorlagewinkel Sollwert in Grad, von CPU1 |
| STAT_MLW_SOLLWERT_CPU2_WERT | - | - | - | ° | - | signed long | - | - | - | 1000 | - | Motorlagewinkel Sollwert in Grad, von CPU2 |
| STAT_MLW_OFFSET_WERT | - | - | - | ° | - | signed long | - | - | - | 1000 | - | Gespeicherter Motorlagewinkel Offset in Grad |
| STAT_MLW_RUNDENZAEHLER_WERT | - | - | - | - | - | signed long | - | - | - | - | - | Multiturnwert des Motors (Zähler für vollständige Umdrehung des Motors) |
| STAT_MLW_SELBSTINITIALISIERUNGSZAEHLER_WERT | - | - | - | - | - | signed long | - | - | - | - | - | Zähler für verlorene Motorlagwinkel (gültig--> ungültig) |

### RES_0XDB93

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SG_ALIVECOUNTER_WERT | - | - | unsigned char | - | - | - | - | - | Aktueller Alivecounter ASA auf BUS(Empfänger ICMQL, DSC) |
| STAT_SPI_ALIVECOUNTER_WERT | - | - | unsigned char | - | - | - | - | - | Aktueller Alivecounter ASA CPU1 und 2 auf SPI (Empfang zwischen CPU1 und 2) |
| STAT_ICM_ALIVECOUNTER_WERT | - | - | unsigned char | - | - | - | - | - | Aktueller Alivecounter ICM auf BUS (Empfänger ASA, DSC) |

### RES_0XDBAA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ZWISCHENKREIS_WERT | V | - | long | - | - | - | 1000 | - | Zwischenkreisspannung des Steuergerätes |
| STAT_SPANNUNGSUEBERWACHUNG_NR | 0-n | - | unsigned char | - | TAB_VLTGSTATE | - | - | - | Zustandsüberwachung der Spannungsversorgung:  OK = 0, Unterspannung = 1, Überspannung = 2 |

### RES_0XDB94

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFLS_SW_NR_CPU1_WERT | - | - | - | - | - | string | - | - | - | - | - | ZFLS Software Nummer auf CPU 1 |
| STAT_ZFLS_SW_NR_CPU2_WERT | - | - | - | - | - | string | - | - | - | - | - | ZFLS Software Nummer auf CPU 2 |

### RES_0XDBA1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHASENSTROM_U_WERT | A | - | long | - | - | - | 1000 | - | Phasenstrom Phase U am Stator des Stellmotors |
| STAT_PHASENSTROM_V_WERT | A | - | long | - | - | - | 1000 | - | Phasenstrom der Phase V am Stator des Stellmotors |
| STAT_PHASENSTROM_W_WERT | A | - | long | - | - | - | 1000 | - | Phasenstrom der Phase W am Stator des Stellmotors |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_B_AKT_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Aktivierung des Aktuators |
| STAT_SW_B_STELLMOTOR_VARIANTE | 0/1 | - | unsigned char | - | - | - | - | - | Rechts-Linkslenker Umschaltung |
| STAT_SW_B_DREHRICHTUNG_NUTSUCHE | 0/1 | - | unsigned char | - | - | - | - | - | Drehrichtung für die Nutsuche |
| STAT_SW_I_FESTUSCFG | 0-n | - | unsigned char | - | - | - | - | - | Aktivierung der Festusbotschaften |
| STAT_SW_I_ZM | 0-n | - | unsigned char | - | - | - | - | - | Übersetzung Ritzel-Motorschnecke |
| STAT_SW_I_ZD | 0-n | - | unsigned char | - | - | - | - | - | Übersetzung Eingangswelle-Ritzel |
| STAT_SW_I_KARDANGELENK | 0-n | - | unsigned char | - | - | - | - | - | Übersetzung Kardangelenk |
| STAT_SW_I_NUTSUCHE_ZAEHLER | 0-n | - | unsigned char | - | - | - | - | - | Häufigkeit der Durchführung der Nutsuche |
| STAT_SW_I_MLR | 0-n | - | unsigned char | - | - | - | - | - | Codierung Motorlageregler |

### TAB_STMSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | S_INIT_STARTUP | S_INIT_STARTUP |
| 1 | S_INIT_GOING_PRE_INIT | S_INIT_GOING_PRE_INIT |
| 2 | S_INIT_PRE_INIT | S_INIT_PRE_INIT |
| 3 | S_INIT_GOING_INIT | S_INIT_GOING_INIT |
| 4 | S_INIT_INIT | S_INIT_INIT |
| 5 | S_INIT_INIT_STDBY | S_INIT_INIT_STDBY |
| 6 | S_INIT_GOING_RDY_AINIT | S_INIT_GOING_RDY_AINIT |
| 7 | S_INIT_RDY_AINIT | S_INIT_RDY_AINIT |
| 8 | S_INIT_GOING_RDY_AINIT_STDBY | S_INIT_GOING_RDY_AINIT_STDBY |
| 9 | S_INIT_RDY_AINIT_STDBY | S_INIT_RDY_AINIT_STDBY |
| 10 | T_13_GOING_RDY4DRIVE | T_13_GOING_RDY4DRIVE |
| 11 | T_19_GOING_ANGLE_INIT | T_19_GOING_ANGLE_INIT |
| 12 | S_WAIT_FOR_RLW_SET | S_WAIT_FOR_RLW_SET |
| 13 | T_4_GOING_RDY4DRIVE | T_4_GOING_RDY4DRIVE |
| 14 | S_READY_FOR_DRIVE | S_READY_FOR_DRIVE |
| 15 | T_1_RDY4DRV_2_DRIVE | T_1_RDY4DRV_2_DRIVE |
| 18 | T_1_28_29_GOING_RDY4DRIVE_STDBY | T_1_28_29_GOING_RDY4DRIVE_STDBY |
| 19 | S_RDY4DRIVE_STDBY | S_RDY4DRIVE_STDBY |
| 20 | T_9_RDY4DRIVE_STDBY_2_DRVDOWN | T_9_RDY4DRIVE_STDBY_2_DRVDOWN |
| 21 | S_DRIVE | S_DRIVE |
| 22 | T_27_DRIVE_2_ACTIVEDIAG | T_27_DRIVE_2_ACTIVEDIAG |
| 23 | T_3_DRIVE_2_STANDBY | T_3_DRIVE_2_STANDBY |
| 25 | T_25_ACTIVEDIAG_2_STANDBY | T_25_ACTIVEDIAG_2_STANDBY |
| 26 | S_DRIVE_STANDBY | S_DRIVE_STANDBY |
| 30 | T_8_STANDBY_2_DRVDOWN | T_8_STANDBY_2_DRVDOWN |
| 32 | S_DRIVE_RAMP_ZERO | S_DRIVE_RAMP_ZERO |
| 33 | T_15_RAMPZERO_2_ERROR | T_15_RAMPZERO_2_ERROR |
| 34 | S_DRIVE_ACTIVEDIAG | S_DRIVE_ACTIVEDIAG |
| 35 | S_POSTRUN_DRVDOWN | S_POSTRUN_DRVDOWN |
| 36 | S_POSTRUN_GOING_POSTRUN | S_POSTRUN_GOING_POSTRUN |
| 37 | S_POSTRUN_POSTRUN | S_POSTRUN_POSTRUN |
| 38 | S_POSTRUN_FINISHED | S_POSTRUN_FINISHED |
| 39 | S_RESET | S_RESET |
| 40 | S_POWEROFF | S_POWEROFF |
| 42 | S_ERROR | S_ERROR |
| 43 | T_36_RDY4DRV_2_STANDBY_HOLD | T_36_RDY4DRV_2_STANDBY_HOLD |
| 44 | S_DRIVE_STANDBY_HOLD | S_DRIVE_STANDBY_HOLD |
| 45 | T_31_STANDBY_HOLD_2_STANDBY | T_31_STANDBY_HOLD_2_STANDBY |
| 46 | T_30_STANDBY_2_STANDBY_HOLD | T_30_STANDBY_2_STANDBY_HOLD |
| 47 | S_INIT_GOING_POSTRUN | S_INIT_GOING_POSTRUN |
| 0xXY | *** INVALID VALUE *** | *** INVALID VALUE *** |

### TAB_GSTMSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | Zustand Powerdown | Zustand Powerdown |
| 1 | Zustand Initialisierung | Zustand Initialisierung |
| 2 | Zustand Bereit / Regelung inaktiv | Zustand Bereit / Regelung inaktiv |
| 3 | Zustand Warte auf MLW | Zustand Warte auf MLW |
| 4 | Zustand Bereit / Regelung aktiv | Zustand Bereit / Regelung aktiv |
| 5 | Zustand Rückstellung auf Null | Zustand Rückstellung auf Null |
| 6 | Zustand Diagnose | Zustand Diagnose |
| 7 | Zustand Normalbetrieb | Zustand Normalbetrieb |
| 8 | Zustand Fehler | Zustand Fehler |
| 9 | Zustand Nachlauf | Zustand Nachlauf |
| 10 | Zustand Reset | Zustand Reset |
| 11 | Zustand Position halten | Zustand Position halten |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_MLWSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | Ungültig | Ungültig |
| 1 | Gültig | Gültig |
| 2 | Initialisierung | Initialisierung |
| 3 | Defekt | Defekt |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_PDUSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | i. O. | i. O. |
| 1 | Bus asynchron | Bus asynchron |
| 2 | Keine neuen Daten | Keine neuen Daten |
| 3 | Nicht empfangen | Nicht empfangen |
| 0xff | Hardwarefehler | Hardwarefehler |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_VLTGSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | i. O. | i. O. |
| 1 | Unterspannung | Unterspannung |
| 2 | Überspannung | Überspannung |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_STMCM

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | Keine | Keine |
| 1 | Reversible Abschaltung | Reversible Abschaltung |
| 2 | Rückstellen auf Null | Rückstellen auf Null |
| 3 | MLW Ungültig setzen | MLW Ungültig setzen |
| 4 | Bedingte Abschaltung | Bedingte Abschaltung |
| 5 | Irreversible Abschaltung | Irreversible Abschaltung |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_QUTARSTEA

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x80 | Initialisierung | Initialisierung |
| 0x20 | Sollwert umsetzen / set active | Sollwert umsetzen / set active |
| 0xe0 | Sollwert nicht umsetzen, Standby / set  no active  | Sollwert nicht umsetzen, Standby / set  no active  |
| 0xe1 | Sollwert nicht umsetzen, Standby / setze Rotorlagewinkel gültig | Sollwert nicht umsetzen, Standby / setze Rotorlagewinkel gültig |
| 0xe2 | Sollwert nicht umsetzen, Standby / setze Rotorlagewinkel ungültig | Sollwert nicht umsetzen, Standby / setze Rotorlagewinkel ungültig |
| 0x60 | Sollwert nicht umsetzen, Fehler | Sollwert nicht umsetzen, Fehler |
| 0x70 | Sollwert nicht vorhanden | Sollwert nicht vorhanden |
| 0xff | Signal ungültig | Signal ungültig |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_STECUICM

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x0 | Zustand Initialisierung | Zustand Initialisierung |
| 0x1 | Zustand Normalbetrieb | Zustand Normalbetrieb |
| 0x2 | Zustand Normalbetrieb/Überspannung sensiert | Zustand Normalbetrieb/Überspannung sensiert |
| 0x3 | Zustand Normalbetrieb/Unterspannung sensiert | Zustand Normalbetrieb/Unterspannung sensiert |
| 0x4 | Zustand Diagnose | Zustand Diagnose |
| 0x5 | Zustand Diagnose/Überspannung sensiert | Zustand Diagnose/Überspannung sensiert |
| 0x6 | Zustand Diagnose/Unterspannung sensiert | Zustand Diagnose/Unterspannung sensiert |
| 0x7 | Zustand Powerdown | Zustand Powerdown |
| 0x8 | Zustand PowerSave | Zustand PowerSave |
| 0x9 | Zustand Nicht verfügbar | Zustand Nicht verfügbar |
| 0xa | Zustand Reset | Zustand Reset |
| 0xb | Zustand Reserviert 11 | Zustand Reserviert 11 |
| 0xc | Zustand Reserviert 12 | Zustand Reserviert 12 |
| 0xd | Zustand Reserviert 13 | Zustand Reserviert 13 |
| 0xe | Zustand Reserviert 14 | Zustand Reserviert 14 |
| 0xf | Signal ungültig | Signal ungültig |
| 0xXY | *** Wert ungültig *** | *** Wert ungültig *** |

### TAB_KFC

| WERT | UWTEXT |
| --- | --- |
| 0 | ERRHDL_NO_KFC |
| 1 | KFC_PRG_SW |
| 2 | KFC_US_INIT |
| 3 | KFC_DRLS_INIT |
| 4 | KFC_DRLS |
| 5 | KFC_US |
| 6 | KFC_SMCURR |
| 7 | KFC_SMPOS |
| 8 | KFC_PROG |
| 9 | KFC_BRAKE |
| 10 | KFC_ZFLS_ZWK_UNDERVOLT |
| 11 | KFC_ZFLS_UNDERVOLT |
| 12 | KFC_ADC |
| 13 | KFC_SMCOM |
| 14 | KFC_WR_MEM |
| 15 | KFC_RD_MEM |
| 16 | KFC_KLD |
| 17 | KFC_DRIVER |
| 18 | KFC_ELMCSI |
| 19 | KFC_SELFLOCK |
| 20 | KFC_SAS_FAILS |
| 21 | KFC_SLOTFIND |
| 22 | KFC_ZFLS_INFO |
| 23 | KFC_BRAKEINIT |
| 24 | KFC_DATAEXCHANGE |
| 25 | KFC_SMCOM_INIT |
| 26 | KFC_STM_PLAUS |
| 27 | KFC_ROTPOS |
| 33 | KFC_WRONG_KFC_FROM_ZFLS |
| 34 | KFC_S12_AGB_LOCK |
| 35 | KFC_WAIT_FOR_RLW_SET |
| 36 | KFC_SENS_SLGS |
| 37 | KFC_TAR_STEA_MSG |
| 38 | KFC_FR_FLX |
| 39 | KFC_FR_CC |
| 40 | KFC_FR_KLEMMEN |
| 41 | KFC_TAR_STEA_MAXTIMEOUTSPOR |
| 42 | KFC_MAXAKTDIFF |
| 43 | KFC_CODING_DATA_OUT_OF_BOUNDS_NEC |
| 44 | KFC_CODING_DATA_OUT_OF_BOUNDS_S12X |
| 45 | KFC_S12X_TSA_PLAUS |
| 46 | KFC_PWR_KL30 |
| 47 | KFC_S12_STM_ERROR |
| 48 | KFC_S12_TSACTRL |
| 49 | KFC_S12_AGB_TSA |
| 50 | KFC_IPC |
| 51 | KFC_S12_IPC |
| 52 | KFC_EEPROM |
| 53 | KFC_S12_RAM |
| 54 | KFC_S12_ROM |
| 55 | KFC_STM |
| 56 | KFC_S12_WATCHDOG |
| 57 | KFC_SET_MLW_INVALID |
| 58 | KFC_REQ_RESTART |
| 59 | KFC_FLASH |
| 60 | KFC_S12_FLASH |
| 61 | KFC_S12_FR_REC |
| 62 | KFC_S12_FR_SEND |
| 63 | KFC_FR_SEND |
| 64 | KFC_TEMP |
| 65 | KFC_PWR_OUT_INIT |
| 66 | KFC_VINCOMP |
| 67 | KFC_OS_ERROR |
| 68 | KFC_WDG_1MS |
| 69 | KFC_WDG_INT |
| 70 | KFC_TAR_STEA_TIMEOUT |
| 71 | KFC_TSA_BOUND |
| 72 | KFC_HSR_ERROR |
| 73 | KFC_ENGINE_START |
| 74 | KFC_D3PDH_ILS |
| 75 | KFC_PCHARGE_OR_SSW_MOSFET_SC |
| 76 | KFC_PCHARGE_OC_OR_POWERSTAGE_SC |
| 77 | KFC_SAFETY_SWITCH_2_SC |
| 78 | KFC_SAFETY_SWITCH_1_SC |
| 79 | KFC_SSW_MOSFET_OC |
| 80 | KFC_PHASE_UZK_SC |
| 81 | KFC_PHASE_GND_SC |
| 82 | KFC_LSSW_U_OC |
| 83 | KFC_LSSW_V_OC |
| 84 | KFC_LSSW_W_OC |
| 85 | KFC_HSSW_U_OC |
| 86 | KFC_HSSW_V_OC |
| 87 | KFC_HSSW_W_OC |
| 88 | KFC_PWM3PH_INIT |
| 89 | KFC_ELMOSH_BS_UNDERVOLTAGE |
| 90 | KFC_MOTOR_OC |
| 91 | KFC_TOFF |
| 92 | KFC_KL30_UNDERVOLTAGE |
| 93 | KFC_KL30_OVERVOLTAGE |
| 94 | KFC_KL15_UNDERVOLTAGE |
| 95 | KFC_KL15_OVERVOLTAGE |
| 96 | KFC_ANALOG_SIGNALS_NOT_VALID |
| 97 | KFC_OFFSET_CALIB_FAILED |
| 98 | KFC_ELMOSH_S_E_LINK |
| 99 | KFC_ELMOSH_S_E_SPIBUF_OVL |
| 100 | KFC_ELMOSH_S_E_TIMEOUT |
| 101 | KFC_ELMOSH_UNDERVOLTAGE |
| 102 | KFC_ELMOSH_OVERCURRENT |
| 103 | KFC_ELMOSH_FAULTPIN_LOW |
| 104 | KFC_5V0A_UNDERVOLTAGE |
| 105 | KFC_3V3A_2_UNDERVOLTAGE |
| 106 | KFC_VERS_SLS |
| 107 | KFC_VERS_MLS |
| 108 | KFC_MOTORPHASE_OC |
| 109 | KFC_RLS_SIN |
| 110 | KFC_RLS_COS |
| 111 | KFC_S12_RLS_SIN |
| 112 | KFC_S12_RLS_COS |
| 113 | KFC_RLS_ABS |
| 114 | KFC_RLS_ABS_SLOW |
| 115 | KFC_RAM |
| 116 | KFC_ROM |
| 117 | KFC_S12_OS |
| 118 | KFC_DISCHARGE |
| 119 | KFC_WACKEL |
| 120 | KFC_TAR_STEA_MAXTIMEOUTSTBY |
| 121 | KFC_ELMOS_ON |
| 122 | KFC_VINTIMEOUT |
| 123 | KFC_ZWK |
| 124 | KFC_SSW_OFF |
| 125 | KFC_PPROT |
| 126 | KFC_S12_AGB_LIMIT |
| 127 | KFC_ACTIVE_DIAG |
| 128 | KFC_RLS_OFFSET_ADAPT |
| 129 | KFC_S12_RLS_OFFSET_ADAPT |
| 130 | KFC_S12_RLS_COMPARE |
| 131 | KFC_TSENSOR |
| 132 | KFC_DM_TEST_COM |
| 133 | KFC_DM_EVENT_ZEITBOTSCHAFTTIMEOUT |
| 134 | KFC_DM_TEST_APPL |
| 135 | KFC_CODING_EVENT_NOT_CODED |
| 136 | KFC_VSM_EVENT_OPMODE |
| 137 | KFC_CODING_EVENT_SIGNATURE_ERROR |
| 138 | KFC_CODING_EVENT_WRONG_VEHICLE |
| 139 | KFC_CODING_EVENT_TRANSACTION_FAILED |
| 140 | KFC_CODING_EVENT_INVALID_DATA |
| 141 | KFC_DM_Queue_DELETED |
| 142 | KFC_DM_Queue_FULL |
| 143 | KFC_NVM_E_WRITE_FAILED |
| 144 | KFC_NVM_E_READ_FAILED |
| 145 | KFC_NVM_E_CONTROL_FAILED |
| 146 | KFC_NVM_E_ERASE_FAILED |
| 147 | KFC_NVM_E_READ_ALL_FAILED |
| 148 | KFC_NVM_E_WRITE_ALL_FAILED |
| 149 | KFC_NVM_E_WRONG_CONFIG_ID |
| 150 | KFC_SW_WARNING |
| 151 | KFC_INFO_ZWK_UNDERVOLTAGE |
| 152 | KFC_INFO_ZWK_PL_UNDERVOLTAGE |
| 153 | KFC_INFO_ZWK_OVERVOLTAGE |
| 154 | KFC_INFO_ZWK_PL_OVERVOLTAGE |
| 155 | KFC_INFO_ZWK_LONG_PL |
| 156 | KFC_INFO_FRPHYS |
| 157 | KFC_FRPHYS |
| 158 | KFC_INFO_FRPHYS_STATUS_UP |
| 159 | KFC_FRPHYS_SPI |
| 160 | KFC_FRPHYS_INIT |
| 161 | KFC_INFO_FRPHYS_REINIT |
| 162 | KFC_NO_SERVICE_ICM |
| 163 | KFC_NO_SERVICE_KL |
| 164 | KFC_TORQUE |
| 165 | KFC_SLGS_NOSIGNAL_PWM |
| 166 | KFC_SLGS_NOSIGNAL_PWMK |
| 167 | KFC_SLGS_NOSIGNAL_PWM_TIMEOUT |
| 168 | KFC_SLGS_NOSIGNAL_PWMK_TIMEOUT |
| 169 | KFC_SLGS_STARTUP_PWM |
| 170 | KFC_SLGS_STARTUP_PWMK |
| 171 | KFC_SLGS_STARTUP_PWM_TIMEOUT |
| 172 | KFC_SLGS_STARTUP_PWMK_TIMEOUT |
| 173 | KFC_SLGS_FREQ |
| 174 | KFC_SLGS_DC |
| 175 | KFC_SLGS_DCM_OVERFLOW |
| 176 | KFC_STM_LOW_VLTG4DRIVE |
| 177 | KFC_TSA_MAX |
| 178 | KFC_VERS_SLS_KL15 |
| 186 | KFC_KL15N_POSTRUN |
| 187 | KFC_KL15_OFF |
| 188 | KFC_PRG_SW_ACTSTM |
| 189 | KFC_S12_SCHED_IRQ_OVL_PIT1 |
| 190 | KFC_S12_SCHED_IRQ_OVL_SWT7 |
| 191 | KFC_S12_SCHED_NOMSG_IPC123 |
| 192 | KFC_S12_SCHED_IPC_SEND |
| 198 | KFC_INFO_ZWK_EON |
| 199 | KFC_VSM_EVENT_VEHICLESTATE |
| 200 | KFC_S12_PRG_SW_ACTSTM |
| 208 | KFC_BIST_INFO_RESTART |
| 209 | KFC_HWOPT |
| 210 | KFC_S12_HWOPT |
| 211 | KFC_VIN_NOT_CODED |
| 0xXY | *** INVALID VALUE *** |

### TAB_KFA

| WERT | UWTEXT |
| --- | --- |
| 0 | KFA_GEN |
| 1 | KFA_SCP |
| 2 | KFA_SCM |
| 3 | KFA_OC |
| 4 | KFA_SCPOC |
| 5 | KFA_SCMOC |
| 6 | KFA_THI |
| 7 | KFA_TLOW |
| 8 | KFA_NCHA |
| 9 | KFA_TMCHA |
| 10 | KFA_WREL |
| 11 | KFA_PLAUS |
| 24 | KFA_STTOHI |
| 25 | KFA_STTOLO |
| 27 | KFA_OFFSET |
| 28 | KFA_COMM_ERR |
| 29 | KFA_PROG |
| 30 | KFA_SHU_OV_CURR |
| 31 | KFA_TRA_OV_CURR |
| 32 | KFA_BOOT_UN_VOLT |
| 33 | KFA_RESET_FLAG |
| 34 | KFA_ROT_SENS_VAL |
| 35 | KFA_ANGLE_CORR |
| 36 | KFA_SLOT_FINDER |
| 37 | KFA_RED_ROT_SENS_VAL |
| 38 | KFA_BRAKE_TLOW |
| 39 | KFA_DISCHARGE_ELMOS |
| 40 | KFA_DISCHARGE |
| 41 | KFA_BRAKE_HS |
| 42 | KFA_BRAKE_LS |
| 43 | KFA_BRAKE_OPEN |
| 44 | KFA_SLOTFINDER |
| 45 | KFA_BRAKE_ELCTRICAL_TEST |
| 46 | KFA_ELMOS_DRV |
| 47 | KFA_CURR_OFFSET |
| 48 | KFA_BRAKE_HOLD |
| 49 | KFA_STM |
| 50 | KFA_ELMOS_RELAIS |
| 51 | KFA_BRAKE_RELAIS |
| 52 | KFA_THI_OFF |
| 53 | KFA_STTOHI_OFF |
| 54 | KFA_STM_PLAUS |
| 55 | KFA_OVERVOLT |
| 56 | KFA_LOCK_VLT |
| 70 | KFA_ASYNC |
| 71 | KFA_TIMEOUT |
| 72 | KFA_SIG_QU_AVL_STEA |
| 73 | KFA_SIG_AVL_STEA |
| 74 | KFA_SIG_QU_SER_CTR_STE |
| 75 | KFA_SIG_ST_ECU_ST_STE |
| 76 | KFA_SIG_QU_TAR_STEA_ACT |
| 77 | KFA_INVALID_INTERRUPT |
| 80 | KFA_CODING_DATA_STELLMOTOR_VARIANTE |
| 81 | KFA_CODING_DATA_ZM |
| 82 | KFA_CODING_DATA_ZD |
| 83 | KFA_CODING_DATA_CHANGED |
| 84 | KFA_CODING_DATA_SW_I_MAX_LW_HA |
| 85 | KFA_CODING_DATA_TRANS_POS |
| 87 | KFA_MAX_DIFF_STE_ANGLE |
| 88 | KFA_TARSTEAMAXTIMEOUTS |
| 89 | KFA_NO_ENGINE_RUN |
| 90 | KFA_VSM_STM_STATE_INVALID |
| 92 | KFA_NO_DATA |
| 94 | KFA_DATA_NOT_VALID |
| 95 | KFA_ORDER |
| 96 | KFA_PARITY |
| 99 | KFA_COS_OVERFLOW |
| 100 | KFA_SIN_OVERFLOW |
| 101 | KFA_COS_UNDERFLOW |
| 102 | KFA_SIN_UNDERFLOW |
| 103 | KFA_PROM |
| 104 | KFA_RAM |
| 105 | KFA_PROM_ORDER |
| 106 | KFA_TOO_SOON |
| 107 | KFA_CRC |
| 108 | KFA_HWM |
| 109 | KFA_ALV |
| 110 | KFA_NO_MSG |
| 111 | KFA_KL_CRC |
| 112 | KFA_KL_ALV |
| 113 | KFA_MLW_INV_FROM_ICM |
| 114 | KFA_MLW_INV_FROM_DIAG |
| 115 | KFA_SIG_PDUSTSTENEC2S12X_OLD |
| 116 | KFA_SIG_PDUSTS12X2NEC_OLD |
| 120 | KFA_ERRQUEUE_WAIT4S12X |
| 125 | KFA_SW_ERRHDL_SUSPENDED_TWICE |
| 126 | KFA_SW_ERRHDL_INVALID_DEM_EVENT |
| 127 | KFA_SW_ERRHDL_QUEUE_SUSPENDED |
| 128 | KFA_SW_STM_APPL_C |
| 129 | KFA_SW_ERRHDL_MATRIX_C |
| 130 | KFA_SW_STM_ABSTRACTION_C |
| 131 | KFA_UNKNOWN_DID |
| 132 | KFA_SW_ERRHDL_IPC_C |
| 133 | KFA_SW_ERRHDL_C |
| 134 | KFA_UNSUPPORTED_S12X_KFC |
| 135 | KFA_SW_IPC_CONFIG |
| 136 | KFA_REC_IPC1_ALV |
| 137 | KFA_REC_IPC2_ALV |
| 138 | KFA_REC_IPC3_ALV |
| 139 | KFA_ALIVE_TAR_STEA_INV |
| 140 | KFA_TAR_STEA_ACT_INV |
| 141 | KFA_QUAL_TAR_STEA_INV |
| 142 | KFA_FIL_TIME_CONST_INV |
| 143 | KFA_SW_TSACTRL_C |
| 144 | KFA_1MS |
| 145 | KFA_KLD5MS |
| 146 | KFA_WPAT |
| 147 | KFA_STAB |
| 148 | KFA_PAT |
| 149 | KFA_ECC |
| 150 | KFA_CRC_1 |
| 151 | KFA_CRC_2 |
| 152 | KFA_STACK_OVL |
| 153 | KFA_STKCK_CFG |
| 154 | KFA_STKCK_NOINIT |
| 155 | KFA_MON |
| 156 | KFA_BIST |
| 157 | KFA_FAST |
| 158 | KFA_SLOW |
| 159 | KFA_INTEGRAL |
| 160 | KFA_ZWK |
| 161 | KFA_PRELOAD_TIMEOUT |
| 162 | KFA_OS_ABNORMAL_SHUTDOWN |
| 163 | KFA_OS_TT_ERROR_HOOK |
| 164 | KFA_LOW_VLTG |
| 165 | KFA_MLW_INVALID |
| 166 | KFA_INITIATE_SHUTDOWN |
| 167 | KFA_ZKH |
| 168 | KFA_10MS |
| 169 | KFA_50MS |
| 170 | KFA_KLD_SPD_UPPER |
| 171 | KFA_KLD_SPD_LOWER |
| 172 | KFA_KLD_POS_UPPER |
| 173 | KFA_KLD_POS_LOWER |
| 174 | KFA_KLD_MINI_5MS |
| 175 | KFA_KLD_MINI_50MS |
| 185 | KFA_STD_CORE |
| 187 | KFA_ERRORVALUE |
| 188 | KFA_SIGNALERROR |
| 189 | KFA_ZWK2 |
| 190 | KFA_ZWK3 |
| 191 | KFA_FRPHYS |
| 192 | KFA_NOINIT |
| 193 | KFA_BD_STATUS_UP |
| 194 | KFA_BD_STATUS_ERR |
| 195 | KFA_SPI1 |
| 196 | KFA_SPI2 |
| 197 | KFA_FAILED |
| 198 | KFA_DELAYED |
| 199 | KFA_SPI3 |
| 200 | KFA_SPI4 |
| 201 | KFA_SIG_LO |
| 202 | KFA_SIG_HI |
| 203 | KFA_DC_LOW |
| 204 | KFA_DC_HIGH |
| 205 | KFA_DC_SOFT_ERR |
| 206 | KFA_FREQ_LO |
| 207 | KFA_FREQ_HI |
| 208 | KFA_FREQ_INVALID |
| 209 | KFA_LWSPWM |
| 210 | KFA_MAX_BUS |
| 211 | KFA_MAX_TSACTRL |
| 212 | KFA_TASK_10MS / KFA_SKE_LL |
| 213 | KFA_SKE_HL |
| 214 | KFA_IPC1 |
| 215 | KFA_IPC2 |
| 216 | KFA_IPC30 |
| 217 | KFA_IPC31 |
| 218 | KFA_HWEL_INVALID |
| 219 | KFA_HWEL_UNKNOWN |
| 220 | KFA_HWEL_INV_UNKNOWN |
| 221 | KFA_AGB |
| 222 | KFA_TORQUE |
| 246 | KFA_UNKNOWN_KFA |
| 247 | KFA_ERFLAG |
| 248 | KFA_ADFROZEN |
| 249 | KFA_DXSERVER |
| 250 | KFA_VERIFY |
| 251 | KFA_POS_ERR |
| 252 | KFA_SPEED_ERR |
| 253 | KFA_GEN2 |
| 254 | KFA_NO_ERROR |
| 255 | KFA_MAX |
| 0xXY | *** INVALID VALUE *** |

### RES_0X4103

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR | + | - | + | 0-n | - | unsigned char | - | TAB_EEEERR | - | - | - | tEEE_REQUEST.error |

### ARG_0X4103

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_COMMAND | + | - | - | - | unsigned char | - | - | - | - | - | - | - | tEEE_REQUEST.command |
| ARG_ADDRESS | + | - | - | - | unsigned long | - | - | - | - | - | - | - | tEEE_REQUEST.address |
| ARG_ID | + | - | - | - | unsigned int | - | - | - | - | - | - | - | tEEE_REQUEST.identifier |
| ARG_LENGTH | + | - | - | - | unsigned int | - | - | - | - | - | - | - | tEEE_REQUEST.length |
| ARG_OFFSET | + | - | - | - | unsigned int | - | - | - | - | - | - | - | tEEE_REQUEST.offset |

### TAB_EEEERR

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0 | EEE_OK | EEE_OK |
| 1 | EEE_ERR_PARAMETER | EEE_ERR_PARAMETER |
| 2 | EEE_DRIVER_BUSY | EEE_DRIVER_BUSY |
| 3 | EEE_ERR_SECTION_FULL | EEE_ERR_SECTION_FULL |
| 4 | EEE_ERR_POOL_FULL | EEE_ERR_POOL_FULL |
| 5 | EEE_ERR_COMMAND_UNKNOWN | EEE_ERR_COMMAND_UNKNOWN |
| 6 | EEE_ERR_FLASH_ERROR | EEE_ERR_FLASH_ERROR |
| 7 | EEE_ERR_USER_ABORT | EEE_ERR_USER_ABORT |
| 8 | EEE_ERR_READ_UNKNOWNID | EEE_ERR_READ_UNKNOWNID |
| 9 | EEE_ERR_READ_OBSOLETE | EEE_ERR_READ_OBSOLETE |
| 10 | EE_ERR_NOACTIVESECTION | EE_ERR_NOACTIVESECTION |
| 11 | EEE_ERR_FLOW | EEE_ERR_FLOW |
| 12 | EEE_ERR_OPERATION_REJECTED | EEE_ERR_OPERATION_REJECTED |
| 0xXY | *** INVALID VALUE *** | *** INVALID VALUE *** |
