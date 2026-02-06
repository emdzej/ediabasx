# rema_fa.prg

## General

|  |  |
| --- | --- |
| File | rema_fa.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 49 |
| Origin | BMW EI-62 E.Schuster |
| Revision | 0.006 |
| Author | Autoliv AEE_D Knoerle |
| ECU Comment | EMA_LI [19] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotorischer Aufroller Links |  |  |
| ORIGIN | string | BMW EI-62 E.Schuster |  |  |
| REVISION | string | 0.006 |  |  |
| AUTHOR | string | Autoliv AEE_D Knoerle |  |  |
| COMMENT | string | EMA_LI [19] |  |  |
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
| 0x024D00 | Energiesparmode aktiv | 1 |
| 0x02FF4D | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x481702 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x481704 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x481705 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x481706 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x481707 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x481708 | Codierung: Signatur für Daten ungültig | 0 |
| 0x481714 | Maximale Anzahl Aktivierungen Pre-Crash erreicht | 0 |
| 0x481715 | Maximale Anzahl Aktivierungen Gurtlose-entfernen erreicht | 0 |
| 0xDC440A | FA-CAN Control Module Bus OFF | 0 |
| 0xDC4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xDC5400 | Botschaft (0x104, PreCrash Erkennung): Ausfall | 1 |
| 0xDC5401 | Botschaft (0x104, PreCrash Erkennung): Prüfsummenfehler | 1 |
| 0xDC5402 | Signal (0x104) ungültig empfangen: Alive_PreCrash_Erkennung | 1 |
| 0xDC5403 | Botschaft (0x,104, PreCrash Erkennung): Alive-Zähler-Fehler | 1 |
| 0xDC5404 | Signal (0x104) ungültig empfangen: Ist_Verzögerung_I_Brake | 1 |
| 0xDC5405 | Signal (0x104) ungültig empfangen: Qualifier_Funktion_PreCrash_Erkennung | 1 |
| 0xDC5406 | Signal (0x104) ungültig empfangen: Zeit_Kollision_Voraussage | 1 |
| 0xDC5407 | Signal (0x104) ungültig empfangen: Annäherungsgeschwindigkeit_PreCrash | 1 |
| 0xDC5410 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDC5411 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Prüfsummenfehler | 1 |
| 0xDC5412 | Signal (0x19F) ungültig empfangen:Alive_Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDC5413 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Alive-Zähler-Fehler | 1 |
| 0xDC5414 | Signal (0x19F) ungültig empfangen: Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDC5416 | Signal (0x19F) ungültig empfangen: Qualifier_Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDC5420 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDC5421 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Prüfsummenfehler | 1 |
| 0xDC5422 | Signal (0x199) ungültig empfangen: Alive_Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDC5423 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Alive-Zähler-Fehler | 1 |
| 0xDC5424 | Signal (0x199) ungültig empfangen: Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDC5426 | Signal (0x199) ungültig empfangen: Qualifier_Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDC5430 | Botschaft (0x19A, Querbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDC5431 | Botschaft (0x19A, Querbeschleunigung Schwerpunkt): Prüfsummenfehler | 1 |
| 0xDC5432 | Signal (0x19A) ungültig empfangen: Alive_Querbeschleunigung_Schwerpunkt | 1 |
| 0xDC5433 | Botschaft (0x19A, Querbeschleunigung Schwerpunkt): Alive-Zähler-Fehler | 1 |
| 0xDC5434 | Signal (0x19A) ungültig empfangen: Querbeschleunigung_Schwerpunkt | 1 |
| 0xDC5436 | Signal (0x19A) ungültig empfangen: Qualifier_Querbeschleunigung_Schwerpunkt | 1 |
| 0xDC5440 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDC5441 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Prüfsummenfehler | 1 |
| 0xDC5442 | Signal (0x1A1) ungültig empfangen: Alive_Geschwindigkeit_Fahrzeug | 1 |
| 0xDC5443 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Alive-Zähler-Fehler | 1 |
| 0xDC5445 | Signal (0x1A1) ungültig empfangen: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xDC5446 | Signal (0x1A1) ungültig empfangen: Qualifier_Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xDC5447 | Signal (0x1A1) ungültig empfangen: Fahrzustand_Fahrzeug | 1 |
| 0xDC5450 | Botschaft (0x302, Lenkwinkel Vorderachse Effektiv): Ausfall | 1 |
| 0xDC5451 | Botschaft (0x302, Lenkwinkel Vorderachse Effektiv): Prüfsummenfehler | 1 |
| 0xDC5452 | Signal (0x302) ungültig empfangen: Alive_Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xDC5453 | Botschaft (0x302, Lenkwinkel Vorderachse Effektiv): Alive-Zähler-Fehler | 1 |
| 0xDC5454 | Signal (0x302) ungültig empfangen: Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xDC5455 | Signal (0x302) ungültig empfangen: Qualifier_Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xDC5460 | Botschaft (0xEF, Ist Bremsmoment Summe): Ausfall | 1 |
| 0xDC5461 | Botschaft (0xEF, Ist Bremsmoment Summe): Prüfsummenfehler | 1 |
| 0xDC5462 | Signal (0xEF) ungültig empfangen: Alive_Ist_Bremsmoment_Summe | 1 |
| 0xDC5463 | Botschaft (0xEF, Ist Bremsmoment Summe): Alive-Zähler-Fehler | 1 |
| 0xDC5464 | Signal (0xEF) ungültig empfangen: Ist_Bremsmoment_Summe | 1 |
| 0xDC5465 | Signal (0xEF) ungültig empfangen: Qualifier_Ist_Bremsmoment_Summe | 1 |
| 0xDC5468 | Signal (0xEF) ungültig empfangen: Ist_Bremsmoment_Summe_Fahrerwunsch | 1 |
| 0xDC5469 | Signal (0xEF) ungültig empfangen: Qualifier_Ist_Bremsmoment_Summe_Fahrerwunsch | 1 |
| 0xDC5470 | Botschaft (0xD9, Winkel Fahrpedal): Ausfall | 1 |
| 0xDC5471 | Botschaft (0xD9, Winkel Fahrpedal): Prüfsummenfehler | 1 |
| 0xDC5472 | Signal (0xD9) ungültig empfangen: Alive_Winkel_Fahrpedal | 1 |
| 0xDC5473 | Botschaft (0xD9, Winkel Fahrpedal): Alive-Zähler-Fehler | 1 |
| 0xDC5475 | Signal (0xD9) ungültig empfangen: Ist_Winkel_Fahrpedal | 1 |
| 0xDC5476 | Signal (0xD9) ungültig empfangen: Qualifier_Ist_Winkel_Fahrpedal | 1 |
| 0xDC5477 | Signal (0xD9) ungültig empfangen: Ist_Winkel_Fahrpedal_Virtuell | 1 |
| 0xDC5478 | Signal (0xD9) ungültig empfangen: Gradient_Ist_Winkel_Fahrpedal | 1 |
| 0xDC5480 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xDC5481 | Botschaft (0x12F, Klemmen): Prüfsummenfehler | 1 |
| 0xDC5482 | Signal (0x12F) ungültig empfangen: Alive_Zähler_Klemme | 1 |
| 0xDC5483 | Botschaft (0x12F, Klemmen): Alive-Zähler-Fehler | 1 |
| 0xDC5484 | Signal (0x12F) ungültig empfangen: Status_Fahrzeug_Zustand | 1 |
| 0xDC5485 | Signal (0x12F) ungültig empfangen: Status_Klemme | 1 |
| 0xDC5486 | Signal (0x12F) ungültig empfangen: Steuerung_Motor_Stop | 1 |
| 0xDC5487 | Signal (0x12F) ungültig empfangen: Status_Startbedingung_Kraftschluss | 1 |
| 0xDC5488 | Signal (0x12F) ungültig empfangen: Status_Start-Stop-Taster | 1 |
| 0xDC5490 | Botschaft (0x297, Status Gurt Kontakt Sitzbelegung): Ausfall | 1 |
| 0xDC5491 | Signal (0x297) ungültig empfangen: Status_Gurtschloß_Schalter_FA | 1 |
| 0xDC5492 | Signal (0x297) ungültig empfangen: Status_Gurtschloß_Schalter_BF | 1 |
| 0xDC54A0 | Botschaft (0x380, Fahrgestellnummer): Ausfall | 1 |
| 0xDC54A1 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_1 | 1 |
| 0xDC54A2 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_2 | 1 |
| 0xDC54A3 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_3 | 1 |
| 0xDC54A4 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_4 | 1 |
| 0xDC54A5 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_5 | 1 |
| 0xDC54A6 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_6 | 1 |
| 0xDC54A7 | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell_7 | 1 |
| 0xDC54B0 | Botschaft (0x1FE, Crash): Ausfall | 1 |
| 0xDC54B1 | Signal (0x1FE) ungültig empfangen: Status_Überschreitung_Schwellwert_Beschleunigung | 1 |
| 0xDC54B2 | Signal (0x1FE) ungültig empfangen: Anzahl_Ausgelöste_Zündpillen | 1 |
| 0xDC54C0 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xDC54C2 | Signal (0x3A0) ungültig empfangen: Status_Energie_FZM | 1 |
| 0xDC54C3 | Signal (0x3A0) ungültig empfangen: Status_Sperre_Fehlerspeicher_FZM | 1 |
| 0xDC54D0 | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0xDC54D1 | Signal (0x328) ungültig empfangen: Zeit_Sekunde_Zähler_Relativ | 1 |
| 0xDC54E0 | Botschaft (0x18D, Fahrzeug Dynamik Daten Geschätzt): Ausfall | 1 |
| 0xDC54E1 | Signal (0x18D) ungültig empfangen: Schwimmwinkel geschätzt | 1 |
| 0xDC54E2 | Signal (0x18D) ungültig empfangen: Qualifier_Fahrzeug_Dynamik_Daten_Geschätzt | 1 |
| 0xDC54E3 | Signal (0x18D) ungültig empfangen: Schwimmwinkel_Geschätzt_Fehler_Amplitude | 1 |
| 0xDC54E4 | Signal (0x18D) ungültig empfangen: Schwimmwinkelgeschwindigkeit_Geschätzt | 1 |
| 0xDC54E5 | Signal (0x18D) ungültig empfangen: Quergeschwindigkeit_Geschätzt_Fehler_Amplitude | 1 |
| 0xDC54E6 | Signal (0x18D) ungültig empfangen: Schwimmwinkelgeschwindigkeit_Geschätzt_Fehler_Amplitude | 1 |
| 0xDC54E7 | Signal (0x18D) ungültig empfangen: Quergeschwindigkeit_Geschätzt | 1 |
| 0xDC54F0 | Botschaft (0x330, KilometerstandReichweite): Ausfall | 1 |
| 0xDC54F1 | Signal (0x330) ungültig empfangen: Wegstrecke_Kilometer | 1 |
| 0xDC5500 | Botschaft (0x2CA,  Außentemperatur): Ausfall | 1 |
| 0xDC5501 | Signal (0x2CA) ungültig empfangen: Temperatur_Außen | 1 |
| 0xDC5510 | Botschaft (0x173, Status Stabilisierung DSC): Ausfall | 1 |
| 0xDC5511 | Botschaft (0x173, Status Stabilisierung DSC): Prüfsummenfehler | 1 |
| 0xDC5513 | Botschaft (0x173, Status Stabilisierung DSC): Alive-Zähler-Fehler | 1 |
| 0xDC5514 | Signal (0x173) ungültig empfangen: Qualifier_Funktion_FDR | 1 |
| 0xDC5515 | Signal (0x173) ungültig empfangen: Qualifier_Funktion_ABS | 1 |
| 0xDC5516 | Signal (0x173) ungültig empfangen: Qualifier_Funktion_ASC | 1 |
| 0xDC5520 | Botschaft (0x163, Neigung Fahrbahn): Ausfall | 1 |
| 0xDC5521 | Signal (0x163) ungültig empfangen: Alive_Neigung_Fahrbahn | 1 |
| 0xDC5522 | Botschaft (0x163, Neigung Fahrbahn): Alive-Zähler-Fehler | 1 |
| 0xDC5523 | Signal (0x163) ungültig empfangen: Ist_Längsneigung_Fahrbahn | 1 |
| 0xDC5524 | Signal (0x163) ungültig empfangen: Qualifier_Ist_Längsneigung_Fahrbahn | 1 |
| 0xDC5525 | Signal (0x163) ungültig empfangen: Ist_Querneigung_Fahrbahn | 1 |
| 0xDC5526 | Signal (0x163) ungültig empfangen: Qualifier_Ist_Querneigung_Fahrbahn | 1 |
| 0xDC5530 | Botschaft (0x97, Status Precrash Master): Ausfall | 1 |
| 0xDC5531 | Botschaft (0x97, Status Precrash Master): Prüfsummenfehler | 1 |
| 0xDC5532 | Signal (0x97) ungültig empfangen: Alive_Status_PreCrash_Master | 1 |
| 0xDC5533 | Botschaft (0x97, Status Precrash Master): Alive-Zähler-Fehler | 1 |
| 0xDC5534 | Signal (0x97) ungültig empfangen: Status_Objekt_Typ_PreCrash_Master | 1 |
| 0xDC5535 | Signal (0x97) ungültig empfangen: Status_Position_Objekt_PreCrash_Master | 1 |
| 0xDC5536 | Signal (0x97) ungültig empfangen: Status_Winkel_Objekt_PreCrash_Master | 1 |
| 0xDC5537 | Signal (0x97) ungültig empfangen: Status_Annäherungsgeschwindigkeit_Objekt_PreCrash_Master | 1 |
| 0xDC5538 | Signal (0x97) ungültig empfangen: Steuerung_Funktion_PreCrash | 1 |
| 0xDC5539 | Signal (0x97) ungültig empfangen: Vorgabe_Kraft_Kennlinie_Gurt_PreCrash | 1 |
| 0xDC5540 | Botschaft (0x98,  Status Precrash Sensor): Ausfall | 1 |
| 0xDC5541 | Botschaft (0x98, Status Precrash Sensor): Prüfsummenfehler | 1 |
| 0xDC5542 | Signal (0x98) ungültig empfangen: ALIV_ST_PCSH_SEN | 1 |
| 0xDC5543 | Botschaft (0x98, Status Precrash Sensor): Alive-Zähler-Fehler | 1 |
| 0xDC5544 | Signal (0x98) ungültig empfangen: Status_Objekt_Typ_PreCrash_Sensor | 1 |
| 0xDC5545 | Signal (0x98) ungültig empfangen: Status_Position_Objekt_PreCrash_Sensor | 1 |
| 0xDC5546 | Signal (0x98) ungültig empfangen: Status_Winkel_Objekt_PreCrash_Sensor | 1 |
| 0xDC5547 | Signal (0x98) ungültig empfangen: Status Annäherungsgeschwindigkeit_Objekt_PreCrash_Sensor | 1 |
| 0xDC5548 | Signal (0x98) ungültig empfangen: Status_Aufprallzeit_Objekt_PreCrash_Sensor | 1 |
| 0xDC5549 | Signal (0x98) ungültig empfangen: Qualifier_Funktion_PreCrash | 1 |
| 0xDC5550 | Botschaft (0x19B, Steuerung Crash): Ausfall | 1 |
| 0xDC5551 | Botschaft (0x19B, Steuerung Crash): Prüfsummenfehler | 1 |
| 0xDC5552 | Signal (0x19B) ungültig empfangen: Alive_Steuerung_Crash | 1 |
| 0xDC5553 | Botschaft (0x19B, Steuerung Crash): Alive-Zähler-Fehler | 1 |
| 0xDC5554 | Signal (0x19B) ungültig empfangen: Status_Überschreitung_Beschleunigung_Schwellwert | 1 |
| 0xDC5555 | Signal (0x19B) ungültig empfangen: Steuerung_PreCrash_Master | 1 |
| 0xDC5560 | Botschaft (0x2FC, ZV und Klappenzustand): Ausfall | 1 |
| 0xDC5564 | Signal (0x2FC) ungültig empfangen: Status_Türkontakt_FAT | 1 |
| 0xDC5565 | Signal (0x2FC) ungültig empfangen: Status_Türkontakt_BFT | 1 |
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
| 0x4009 | Temperatur extern | °C | - | unsigned char | - | 0.5 | - | -40.0 |
| 0x4006 | Spannung Klemme 30b | mV | - | unsigned char | - | 100.0 | - | - |
| 0x1700 | Kilometerstand | km | High | data | - | 1.0 | 1.0 | 0.0 |
| 0x1701 | Systemzeit | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x401D | Interne Systemzeit | ms | High | data | - | 10.0 | - | - |
| 0x4007 | Spannung Klemme 30 | mV | High | unsigned char | - | 100.0 | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x4D1710 | ADC_FAULT | 0 |
| 0x4D1711 | BELT_SENSOR_ERROR | 0 |
| 0x4D1716 | Interner Takt: Fehler | 0 |
| 0x4D1717 | Interne Temperaturmessung: nicht verfügbar | 0 |
| 0x4D1718 | POWER_STAGE_ENABLE | 0 |
| 0x4D1719 | POWER_STAGE_OC | 0 |
| 0x4D171A | POWER_STAGE_SC | 0 |
| 0x4D171B | POWER_STAGE_SELF_PROTECTION | 0 |
| 0x4D171C | PWM_FAULTY | 0 |
| 0x4D171D | Systemtemperatur: Grenzwert erreicht | 0 |
| 0x4D1720 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x4D1721 | EEPROM: nicht konfiguriert | 0 |
| 0x4D1722 | FEE_E_WRITE_FAILED | 0 |
| 0x4D1723 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x4D1724 | NVM_E_REQ_FAILED | 0 |
| 0x4D1726 | Flash Speicher: beschädigt | 0 |
| 0x4D1727 | FLS_E_COMPARE_FAILED | 0 |
| 0x4D1728 | FLS_E_ERASE_FAILED | 0 |
| 0x4D1729 | FLS_E_READ_FAILED | 0 |
| 0x4D172A | FLS_E_UNEXPECTED_FLASH_ID | 0 |
| 0x4D172B | FLS_E_WRITE_FAILED | 0 |
| 0x4D172D | RAM Speicher: beschädigt | 0 |
| 0x4D1730 | ECU_OEM_CODING_DEFECTIVE | 0 |
| 0x4D1731 | Steuergeräte Codierung: fehlerhaft (Autoliv Daten) | 0 |
| 0x4D1740 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x4D1741 | SPI_SYNCH_TRANSMIT_FAILED | 0 |
| 0x4D1750 | CAN_E_TIMEOUT | 0 |
| 0x4D1751 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x4D1754 | CANIF_E_STOPPED | 0 |
| 0x4D1755 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x4D1756 | CANNM_E_INIT_FAILED | 0 |
| 0x4D1757 | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x4D1758 | CANNM_E_TX_PATH_FAILED | 0 |
| 0x4D175A | CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x4D175B | CANTP_E_COMM | 0 |
| 0x4D175C | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x4D175D | CNM_E_TX_PATH_FAILED | 0 |
| 0x4D1760 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x4D1761 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x4D1762 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x4D1770 | MCU_E_CLOCK_FAILURE | 0 |
| 0x4D1771 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x4D1772 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x4D1773 | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x4D1774 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x4D1775 | MCU_E_LOCK_FAILURE | 0 |
| 0x4D1776 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x4D1777 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x4D1778 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x4D1779 | MCU_E_RC_MEASURE | 0 |
| 0x4D177A | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x4D177B | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x4D177C | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x4D177D | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x4D1780 | WDG_E_DISABLE_REJECTED | 0 |
| 0x4D1781 | WDG_E_MISS_TRIGGER | 0 |
| 0x4D1782 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x4D1783 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x4D1784 | WDGM_E_SET_MODE | 0 |
| 0x4D1786 | Externer Watchdog: Fehler (Task Überlauf) | 0 |
| 0x4D1787 | Externer Watchdog Test: fehlerhaft | 0 |
| 0x4D1788 | Interner Watchdog: Fehler (Task läuft nicht vollständig) | 0 |
| 0x4D1789 | Reset: durch ungültigen Interrupt | 0 |
| 0x4D17A0 | Batterie-Spannungsmessung nicht plausibel | 0 |
| 0x4D17A1 | ECU_UNDER_VOLTAGE | 0 |
| 0x4D17A2 | ECU_OVER_VOLTAGE | 0 |
| 0x4D17A7 | MOTOR_BLOCKED | 0 |
| 0x4D17A8 | MOTOR_CURRENT_FAULT | 0 |
| 0x4D17A9 | MOTOR_DISCONNECTED | 0 |
| 0x4D17AA | MOTOR_SC | 0 |
| 0x4D17C0 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x4D17C1 | DM_Queue_FULL | 1 |
| 0x4D17D0 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
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
| 0x401D | Interne Systemzeit | ms | High | data | - | 10.0 | - | - |
| 0x1701 | Systemzeit | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | Temperatur extern | °C | - | unsigned char | - | 0.5 | - | -40.0 |
| 0x4007 | Spannung Klemme 30 | mV | High | unsigned char | - | 100.0 | - | - |
| 0x1700 | Kilometerstand | km | High | data | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | Spannung Klemme 30b | mV | - | unsigned char | - | 100.0 | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GURTKONTAKTE | 0xD52A | - | Gurtkontakte Fahrer Beifahrer | bit | - | - | BITFIELD | RES_0xD52A | - | - | - | - | 22 | - | - |
| GURTLOSE_AKTIVIEREN | 0xA510 | - | Gurtlose, PreCrash-Straffung | - | STEUERN_PRECRASH | - | - | - | - | - | - | - | 31 | ARG_0xA510 | RES_0xA510 |

### PRE_CSH_FUNCTION_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Disabled |
| 0x01 | Startup |
| 0x02 | Idle |
| 0x03 | Internal activation |
| 0x04 | CAN external activation |
| 0x05 | DIAG external activation |
| 0x06 | Deficiency |
| 0x07 | Problem |
| 0x08 | Trouble |
| 0x09 | Error |

### STATUS_BSR_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Disabled |
| 0x01 | Startup |
| 0x02 | Belt Slack not reduced |
| 0x03 | Interne Aktivierung |
| 0x04 | CAN Externe Aktivierung |
| 0x05 | DIAG Externe Aktivierung |
| 0x06 | Reduziert |
| 0x07 | BSR Abwehr |
| 0x08 | Abwehr |
| 0x09 | Problem |
| 0x0A | Trouble |
| 0x0B | Error |

### STATE_OF_FUNCTION_PCSH_ALGO

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht codiert |
| 0x01 | nicht aktiv |
| 0x02 | Aktiv |
| 0x03 | Reserviert |
| 0x04 | Error |
| 0x05 | Reserviert |
| 0x06 | Reserviert |
| 0x07 | Reserviert |

### RES_0X401B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BSR_INTERNAL_ACTIVATION_WERT | Counts | high | unsigned int | - | - | - | - | - | Interner Belt Slack Activation Counter |
| STAT_BSR_EXTERNAL_ACTIVATION_WERT | Counts | high | unsigned int | - | - | - | - | - | External Activation counter |
| STAT_PRE_CRASH_ACTIVATION_WERT | Counts | high | unsigned int | - | - | - | - | - | Pre-Crash Activation Counter |

### ARG_0X401B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BSR_INTERNAL_ACTIVATION_WERT_1 | Counts | high | unsigned int | - | - | - | - | - | - | - | Interner Belt Slack Activation Counter |
| STAT_BSR_EXTERNAL_ACTIVATION_WERT_1 | Counts | high | unsigned int | - | - | - | - | - | - | - | External Activation counter |
| STAT_BSR_ACTIVATION_WERT_1 | Counts | high | unsigned int | - | - | - | - | - | - | - | Belt Slack Reduction Activation Counter |

### RES_0X401C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYS_TIME_INT_ACT_1_WERT | s | high | unsigned long | - | - | - | - | - | System Zeit der internen Aktivierung Eintrag #1 |
| STAT_SYS_TIME_INT_ACT_OFFSET_1_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | System Zeit interne Aktivierung Offset Eintrag #1 |
| STAT_SYS_TIME_EXT_ACT_1_WERT | s | high | unsigned long | - | - | - | - | - | System Zeit der externen Aktivierung Eintrag #1 |
| STAT_SYS_TIME_EXT_ACT_OFFSET_1_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | System Zeit externe Aktivierung Offsset Eintrag #1 |
| STAT_SYS_TIME_CRASH_1_WERT | s | high | unsigned long | - | - | - | - | - | System Zeit CRASH Eintrag #1 |
| STAT_SYS_TIME_CRASH_OFFSET_1_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | System Zeit CRASH Offsset Eintrag #1 |
| STAT_SYS_TIME_INT_ACT_2_WERT | s | high | unsigned long | - | - | - | - | - | System Zeit der internen Aktivierung Eintrag #2 |
| STAT_SYS_TIME_INT_ACT_OFFSET_2_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | System Zeit interne Aktivierung Offsset Eintrag #2 |
| STAT_SYS_TIME_EXT_ACT_2_WERT | s | high | unsigned long | - | - | - | - | - | System Zeit der externen Aktivierung Eintrag #2 |
| STAT_SYS_TIME_EXT_ACT_OFFSET_2_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | System Zeit externe Aktivierung Offsset Eintrag #2 |
| STAT_SYS_TIME_CRASH_2_WERT | s | high | unsigned long | - | - | - | - | - | System Zeit CRASH Eintrag #2 |
| STAT_SYS_TIME_CRASH_OFFSET_2_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | System Zeit CRASH Offsset Eintrag #2 |

### RES_0X401E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POWER_ON_RESET_COUNTER_WERT | Counts | high | unsigned long | - | - | - | - | - | Powe-on Reset counter |

### ARG_0X401E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POWER_ON_RESET_COUNTER_WERT_1 | Counts | high | unsigned long | - | - | - | - | - | - | - | Powe-on Reset counter Byte 1 = MSB Byte 3 = LSB |

### BOBBIN_SENSOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | -tbd Error absent |
| 0x01 | -tbd Error present |

### BOBBIN_SENSOR_DIRECTION

| WERT | TEXT |
| --- | --- |
| 0x55 | Tensioning direction |
| 0xA4 | Releasing direction |

### RES_0X4024

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEM_TIME_WERT | s | high | unsigned long | - | - | - | - | - | Systemzeit in Sekunden |
| STAT_SYSTEM_TIME_OFFSET_WERT | ms | high | unsigned char | - | - | 10.0 | - | - | Systemzeit Offset in 10ms, Wertebereich total 0...990ms |

### ARG_0X4024

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEM_TIME_WERT_1 | s | high | unsigned long | - | - | - | - | - | - | - | Systemzeit in Sekunden |
| STAT_SYSTEM_TIME_OFFSET_WERT_1 | ms | high | unsigned char | - | - | - | 10.0 | - | 0.0 | 990.0 | Systemzeit Offset in 10ms, Wertebereich total 0...990ms |

### MOTOR_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop |
| 0x01 | Tensioning |
| 0x02 | Releasing |

### MOTOR_ERROR_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | - tbc- Error absent |
| 0x01 | -tbc- Error present |

### RES_0X4028

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_STATE_MANAGER_NR | 0-n | high | unsigned char | 0x0F | MOTOR_STATE_MANAGER_FUNCTION | - | - | - | Motor State Manager Function Status |

### MOTOR_STATE_MANAGER_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Check |
| 0x01 | Startup release |
| 0x02 | Idle |
| 0x03 | PCH tensioning |
| 0x04 | PCH releasing |
| 0x05 | BSR tensioning |
| 0x06 | BSR releasing |
| 0x07 | BSR deficiency |
| 0x08 | Deficiency |
| 0x09 | Problem |
| 0x0A | Trouble |
| 0x0B | Error |
| 0x0C | reserved |
| 0x0D | reserved |
| 0x0E | reserved |
| 0x0F | reserved |

### ECU_ENERGY_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unterspannung |
| 0x01 | Normalspannung |
| 0x02 | Überspannung |

### STATUS_KL30

| WERT | TEXT |
| --- | --- |
| 0x00 | Unterspannung |
| 0x01 | Normalspannung |
| 0x02 | Überspannung |

### STATUS_KL30B

| WERT | TEXT |
| --- | --- |
| 0x00 | Unterspannung |
| 0x01 | Normalspannung |
| 0x02 | Überspannung |

### BUCKLE_DRIVER

| WERT | TEXT |
| --- | --- |
| 0x00 | GK-FA nicht gesteckt |
| 0x01 | GK-FA gesteckt |
| 0x02 | GK-FA nicht installiertt |
| 0x03 | GK-FA Signal ungültig |

### BUCKLE_PASSENGER

| WERT | TEXT |
| --- | --- |
| 0x00 | GK_BF nicht gesteckt |
| 0x01 | GK_BF gesteckt |
| 0x02 | GK_BF nicht installiert |
| 0x03 | GK_BF Signal ungültig |

### RESULT_PRE_CSH_EXT_ACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Finished NOK |
| 0x01 | Finished OK |
| 0x02 | Aborted by user |
| 0x03 | Running |

### RESULT_EXT_ACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Finished NOK |
| 0x01 | Finished OK |
| 0x02 | Aborted by user |
| 0x03 | Running |

### STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Additional Entry is empty |
| 0x01 | Additional entry contain data |

### RES_0XD52A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GURTKONTAKT_FA_GESTECKT | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Gurtkontakt Fahrerseite: Status 0 = nicht gesteckt,  1 = gesteckt |
| STAT_GURTKONTAKT_FA_VERBAUT | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Gurtkontakt Fahrerseite: Status 0 = verbaut, 1 = nicht verbaut |
| STAT_GURTKONTAKT_FA_UNGUELTIG | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Gurtkontakt Fahrerseite: Status 0 = gültig, 1 = nicht gültig |
| STAT_GURTKONTAKT_BF_GESTECKT | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Gurtkontakt Beifahrerseite: Status 0 = nicht gesteckt,  1 = gesteckt |
| STAT_GURTKONTAKT_BF_VERBAUT | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Gurtkontakt Beifahrerseite: Status 0 = verbaut, 1 = nicht verbaut |
| STAT_GURTKONTAKT_BF_UNGUELTIG | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Gurtkontakt Beifahrerseite: Status 0 = gültig, 1 = nicht gültig |

### RES_0XA510

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRECRASH | - | - | + | 0-n | - | unsigned char | - | TAB_PRECRASH_GURTLOSE | - | - | - | PreCrash-Straffung: Status  Tabelle: TAB_PRECRASH_GURTLOSE 0 = Beendet, n.i.O. 1 = Beendet, i.O. 2 = durch Benutzer abgebrochen 3 = läuft Ansteuerbedingung: Gurt muss gesteckt sein |

### ARG_0XA510

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSZEIT | + | - | ms | - | unsigned int | - | - | 10.0 | - | - | - | 1000.0 | Dauer der Aktivierung 500 entspricht 5s (typischer Wert) Vorbedingung: Gurt muss gesteckt sein |

### TAB_PRECRASH_GURTLOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Beendet n.i.O. |
| 0x01 | Beendet i.O. |
| 0x02 | Durch Benutzer abgebrochen |
| 0x03 | Vorgang läuft |
| 0xFFFF | nicht definiert |
