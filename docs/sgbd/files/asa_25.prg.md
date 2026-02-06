# asa_25.prg

## General

|  |  |
| --- | --- |
| File | asa_25.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 50 |
| Origin | BMW EF-611 Hohmann |
| Revision | 0.005 |
| Author | BMW EF-620 Jurthe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktuator Steuergerät Aktivlenkung |  |  |
| ORIGIN | string | BMW EF-611 Hohmann |  |  |
| REVISION | string | 0.005 |  |  |
| AUTHOR | string | BMW EF-620 Jurthe |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.03 |  |  |
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
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0xXY | -- | unbekannter Diagnose-Mode |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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
| 0x021600 | Energiesparmode - aktiv [VSM_EVENT_OPMODE] (Energiesparmode) | 1 |
| 0x02FF16 | Diagnosemaster - Dummy Application DTC [DM_TEST_APPL] (Diagnosemaster) | 1 |
| 0x160000 | Secu - NVM_E_WRITE_FAILED (Secu) | 0 |
| 0x160001 | Secu - NVM_E_READ_FAILED (Secu) | 0 |
| 0x160002 | Secu - NVM_E_CONTROL_FAILED (Secu) | 0 |
| 0x160003 | Secu - NVM_E_ERASE_FAILED (Secu) | 0 |
| 0x160004 | Secu - NVM_E_READ_ALL_FAILED (Secu) | 0 |
| 0x160005 | Secu - NVM_E_WRITE_ALL_FAILED (Secu) | 0 |
| 0x160006 | Secu - NVM_E_WRONG_CONFIG_ID (Secu) | 0 |
| 0x160007 | Secu - DEM_EVENT_KFC_DRIVER (Secu) | 0 |
| 0x160008 | Secu - DEM_EVENT_ELMCSI (Secu) | 0 |
| 0x160009 | Secu - DEM_EVENT_KFC_CODING_DATA_OUT_OF_BOUNDS_NEC (Secu) | 0 |
| 0x16000A | Secu - DEM_EVENT_KFC_CODING_DATA_OUT_OF_BOUNDS_S12X (Secu) | 0 |
| 0x16000B | Secu - DEM_EVENT_KFC_S12_AGB_TSA (Secu) | 0 |
| 0x16000C | Secu - DEM_EVENT_KFC_IPC (Secu) | 0 |
| 0x16000D | Secu - DEM_EVENT_KFC_S12_IPC (Secu) | 0 |
| 0x16000E | Secu - DEM_EVENT_KFC_RAM (Secu) | 0 |
| 0x16000F | Secu - DEM_EVENT_KFC_ROM (Secu) | 0 |
| 0x160010 | Secu - DEM_EVENT_KFC_STM (Secu) | 0 |
| 0x160011 | Secu - DEM_EVENT_KFC_S12_WATCHDOG (Secu) | 0 |
| 0x160012 | Secu - DEM_EVENT_KFC_FLASH (Secu) | 0 |
| 0x160013 | Secu - DEM_EVENT_KFC_S12_FLASH (Secu) | 0 |
| 0x160014 | Secu - DEM_EVENT_KFC_S12_FR_REC (Secu) | 0 |
| 0x160015 | Secu - DEM_EVENT_KFC_S12_FR_SEND (Secu) | 0 |
| 0x160016 | Secu - DEM_EVENT_KFC_FR_SEND (Secu) | 0 |
| 0x160017 | Secu - DEM_EVENT_KFC_OS_ERROR (Secu) | 0 |
| 0x160018 | Secu - DEM_EVENT_KFC_WDG_1MS (Secu) | 0 |
| 0x160019 | Secu - DEM_EVENT_KFC_WDG_INT (Secu) | 0 |
| 0x16001A | Secu - DEM_EVENT_KFC_D3PDH_ILS (Secu) | 0 |
| 0x16001B | Secu - DEM_EVENT_KFC_PHASE_UZK_SC (Secu) | 0 |
| 0x16001C | Secu - DEM_EVENT_KFC_PHASE_GND_SC (Secu) | 0 |
| 0x16001D | Secu - DEM_EVENT_KFC_LSSW_U_OC (Secu) | 0 |
| 0x16001E | Secu - DEM_EVENT_KFC_LSSW_V_OC (Secu) | 0 |
| 0x16001F | Secu - DEM_EVENT_KFC_LSSW_W_OC (Secu) | 0 |
| 0x160020 | Secu - DEM_EVENT_KFC_HSSW_U_OC (Secu) | 0 |
| 0x160021 | Secu - DEM_EVENT_KFC_HSSW_V_OC (Secu) | 0 |
| 0x160022 | Secu - DEM_EVENT_KFC_HSSW_W_OC (Secu) | 0 |
| 0x160023 | Secu - DEM_EVENT_KFC_PWM3PH_INIT (Secu) | 0 |
| 0x160024 | Secu - DEM_EVENT_KFC_ELMOSH_BS_UNDERVOLTAGE (Secu) | 0 |
| 0x160025 | Secu - DEM_EVENT_KFC_MOTOR_OC (Secu) | 0 |
| 0x160026 | Secu - DEM_EVENT_KFC_TOFF (Secu) | 0 |
| 0x160027 | Secu - DEM_EVENT_KFC_ANALOG_SIGNALS_NOT_VALID (Secu) | 0 |
| 0x160028 | Secu - DEM_EVENT_KFC_OFFSET_CALIB_FAILED (Secu) | 0 |
| 0x160029 | Secu - DEM_EVENT_KFC_ELMOSH_S_E_LINK (Secu) | 0 |
| 0x16002A | Secu - DEM_EVENT_KFC_ELMOSH_S_E_SPIBUF_OVL (Secu) | 0 |
| 0x16002B | Secu - DEM_EVENT_KFC_ELMOSH_S_E_TIMEOUT (Secu) | 0 |
| 0x16002C | Secu - DEM_EVENT_KFC_ELMOSH_UNDERVOLTAGE (Secu) | 0 |
| 0x16002D | Secu - DEM_EVENT_KFC_ELMOSH_OVERCURRENT (Secu) | 0 |
| 0x16002E | Secu - DEM_EVENT_KFC_ELMOSH_FAULTPIN_LOW (Secu) | 0 |
| 0x16002F | Secu - DEM_EVENTKFC_5V0A_UNDERVOLTAGE (Secu) | 0 |
| 0x160030 | Secu - DEM_EVENT_PRG_SW (Secu) | 0 |
| 0x160031 | Secu - DEM_EVENT_KFC_DRLS (Secu) | 0 |
| 0x160033 | Secu - DEM_EVENT_KFC_S12_RLS_COMPARE (Secu) | 0 |
| 0x160034 | Secu - DEM_EVENT_KFC_US (Secu) | 0 |
| 0x160035 | Secu - DEM_EVENT_KFC_SMCURR (Secu) | 0 |
| 0x160036 | Secu - DEM_EVENT_KFC_SMPOS (Secu) | 0 |
| 0x160037 | Secu - DEM_EVENT_KFC_PROG (Secu) | 0 |
| 0x160038 | Secu - DEM_EVENT_KFC_BRAKE (Secu) | 0 |
| 0x160039 | Secu - DEM_EVENT_KFC_ADC (Secu) | 0 |
| 0x16003A | Secu - DEM_EVENT_KFC_SMCOM (Secu) | 0 |
| 0x16003B | Secu - DEM_EVENT_KFC_SELFLOCK (Secu) | 0 |
| 0x16003C | Secu - DEM_EVENT_KFC_MAF (Secu) | 0 |
| 0x16003E | Secu - DEM_EVENT_KFC_S12_AGB_LOCK (Secu) | 0 |
| 0x16003F | Secu - DEM_EVENT_KFC_WACKEL (Secu) | 0 |
| 0x160041 | Secu - DEM_EVENT_KFC_TAR_STEA_MSG (Secu) | 0 |
| 0x160042 | Secu - DEM_EVENT_KFC_DISCHARGE (Secu) | 0 |
| 0x160043 | Secu - DEM_EVENT_KFC_S12_OS (Secu) | 0 |
| 0x160045 | Secu - DEM_EVENT_KFC_PWR_KL30 (Secu) | 0 |
| 0x160046 | Secu - DEM_EVENT_KFC_S12_STM_ERROR (Secu) | 0 |
| 0x160047 | Secu - DEM_EVENT_KFC_S12_TSACTRL (Secu) | 0 |
| 0x160048 | Secu - DEM_EVENT_KFC_TEMP (Secu) | 0 |
| 0x160049 | Secu - DEM_EVENT_KFC_TAR_STEA_TIMEOUT (Secu) | 0 |
| 0x16004A | Secu - DEM_EVENT_KFC_TSA_BOUND (Secu) | 0 |
| 0x16004C | Secu - DEM_EVENT_KFC_KL30_UNDERVOLTAGE (Secu) | 0 |
| 0x16004D | Secu - DEM_EVENT_KFC_KL30_OVERVOLTAGE (Secu) | 0 |
| 0x16004E | Secu - DEM_EVENT_KFC_KL15_UNDERVOLTAGE (Secu) | 0 |
| 0x16004F | Secu - DEM_EVENT_KFC_KL15_OVERVOLTAGE (Secu) | 0 |
| 0x160050 | Secu - DEM_EVENT_KFC_SSW_MOSFET_OC (Secu) | 0 |
| 0x160051 | Secu - DEM_EVENT_KFC_PCHARGE_OR_SSW_MOSFET_SC (Secu) | 0 |
| 0x160052 | Secu - DEM_EVENT_KFC_PCHARGE_OC_OR_POWERSTAGE_SC (Secu) | 0 |
| 0x160053 | Secu - DEM_EVENT_KFC_SAFETY_SWITCH_2_SC (Secu) | 0 |
| 0x160054 | Secu - DEM_EVENT_KFC_SAFETY_SWITCH_1_SC (Secu) | 0 |
| 0x160055 | Secu - CODING_EVENT_SIGNATURE_ERROR (Secu) | 0 |
| 0x160056 | Secu - CODING_EVENT_WRONG_VEHICLE (Secu) | 0 |
| 0x160057 | Secu - CODING_EVENT_TRANSACTION_FAILED (Secu) | 0 |
| 0x160058 | Secu - CODING_EVENT_INVALID_DATA (Secu) | 0 |
| 0x160059 | Secu - DEM_EVENT_KFC_VINCOMP (Secu) | 0 |
| 0x16005A | Secu - DEM_EVENT_KFC_MAXAKTDIFF (Secu) | 0 |
| 0x16005B | Secu - DEM_EVENT_KFC_3V3A_2_UNDERVOLTAGE (Secu) | 0 |
| 0x16005C | Secu - DEM_EVENT_KFC_VERS_SLS (Secu) | 0 |
| 0x16005D | Secu - DEM_EVENT_KFC_VERS_MLS (Secu) | 0 |
| 0x16005E | Secu - DEM_EVENT_KFC_MOTORPHASE_OC (Secu) | 0 |
| 0x16005F | Secu - DEM_EVENT_KFC_NOT_CONFIGURED_IN_TRESOS (Secu) | 0 |
| 0x160060 | Secu - DEM_EVENT_KFC_FR_FLX (Secu) | 0 |
| 0x160061 | Secu - DEM_EVENT_KFC_FR_CC (Secu) | 0 |
| 0x160062 | Secu - DEM_EVENT_KFC_SET_MLW_INVALID (Secu) | 0 |
| 0x160063 | Secu - DEM_EVENT_KFC_REQ_RESTART (Secu) | 0 |
| 0x160064 | Secu - DEM_EVENT_KFC_S12_SMCOM (Secu) | 0 |
| 0x160065 | Secu - DEM_EVENT_KFC_WR_MEM (Secu) | 0 |
| 0x160066 | Secu - DEM_EVENT_KFC_RD_MEM (Secu) | 0 |
| 0x160067 | Secu - DEM_EVENT_KFC_SLOTFIND (Secu) | 0 |
| 0x160068 | Secu - DEM_EVENT_KFC_SAS_FAILS (Secu) | 0 |
| 0x160069 | Secu - DEM_EVENT_KFC_WAIT_FOR_RLW_SET (Secu) | 0 |
| 0x16006A | Secu - DEM_EVENT_KFC_FR_KLEMMEN (Secu) | 0 |
| 0x16006B | Secu - DEM_EVENT_KFC_TAR_STEA_MAXTIMEOUTS (Secu) | 0 |
| 0x16006C | Secu - DEM_EVENT_KFC_EEPROM (Secu) | 0 |
| 0x16006D | Secu - DEM_EVENT_KFC_ELMOS_ON (Secu) | 0 |
| 0x16006E | Secu - DM_Queue_DELETED (Secu) | 0 |
| 0x16006F | Secu - DM_Queue_FULL (Secu) | 0 |
| 0x160070 | Secu - DEM_EVENT_ZFLS_UNDERVOLTAGE (Secu) | 0 |
| 0x160071 | Secu - DEM_EVENT_KFC_VINTIMEOUT (Secu) | 0 |
| 0x160072 | Secu - DEM_EVENT_KFC_ZWK (Secu) | 0 |
| 0x160073 | Secu - DEM_EVENT_KFC_SSW_OFF (Secu) | 0 |
| 0x160075 | Secu - DEM_EVENT_KFC_PPROT (Secu) | 0 |
| 0x160076 | Secu - DEM_EVENT_KFC_S12_AGB_LIMIT (Secu) | 0 |
| 0x160077 | Secu - DEM_EVENT_KFC_FEE_TEST (Secu) | 0 |
| 0x160078 | Secu - DEM_EVENT_KFC_FEE_CFBLK (Secu) | 0 |
| 0x160079 | Secu - DEM_EVENT_KFC_FEE_CBLK (Secu) | 0 |
| 0x16007A | Secu - DEM_EVENT_KFC_FEE_RFBLK (Secu) | 0 |
| 0x16007B | Secu - DEM_EVENT_KFC_FEE_RBLK (Secu) | 0 |
| 0x16007C | Secu - DEM_EVENT_KFC_SW_WARNING (Secu) | 0 |
| 0x16007D | Secu - DM_EVENT_FAHRZEUGZUSTANDTIMEOUT (Secu) | 0 |
| 0x16007E | Secu - DM_EVENT_ZEITBOTSCHAFTTIMEOUT (Secu) | 0 |
| 0x16007F | Secu - DEM_EVENT_KFC_INFO_ZWK_OVERVOLTAGE (Secu) | 0 |
| 0x160080 | Secu - DEM_EVENT_KFC_INFO_ZWK_PL_OVERVOLTAGE (Secu) | 0 |
| 0x160081 | Secu - DEM_EVENT_KFC_INFO_ZWK_LONG_PL (Secu) | 0 |
| 0x160082 | Secu - DEM_EVENT_KFC_INFO_FRPHYS (Secu) | 0 |
| 0x160083 | Secu - DEM_EVENT_KFC_FRPHYS (Secu) | 0 |
| 0x160084 | Secu - DEM_EVENT_KFC_INFO_FRPHYS_STATUS_UP (Secu) | 0 |
| 0x160085 | Secu - DEM_EVENT_KFC_FRPHYS_SPI (Secu) | 0 |
| 0x160086 | Secu - DEM_EVENT_KFC_FRPHYS_INIT (Secu) | 0 |
| 0x160087 | Secu - DEM_EVENT_KFC_INFO_FRPHYS_REINIT (Secu) | 0 |
| 0x160088 | Secu - DEM_EVENT_KFC_NO_SERVICE_ICM (Secu) | 0 |
| 0x160089 | Secu - DEM_EVENT_KFC_NO_SERVICE_KL (Secu) | 0 |
| 0x16008A | Secu - DEM_EVENT_KFC_INFO_ZWK_UNDERVOLTAGE (Secu) | 0 |
| 0x16008B | Secu - DEM_EVENT_KFC_INFO_ZWK_PL_UNDERVOLTAGE (Secu) | 0 |
| 0x16008C | Secu - DEM_EVENT_KFC_TSENSOR (Secu) | 0 |
| 0x16008D | Secu - DEM_EVENT_KFC_S12X_TSA_PLAUS (Secu) | 0 |
| 0x16FFFF | Secu - DEM_EVENT_ERRHDL_MIN (Secu) | 0 |
| 0x480200 | Steuergerät intern - Steuergerätefehler, Endstufe oder Baustein defekt (Steuergerät intern) | 0 |
| 0x480201 | Steuergerät intern - Steuergerätefehler, Berechnungsabläufe fehlerhaft (Steuergerät intern) | 0 |
| 0x480202 | Allgemein - Fahrgestellnummernvergleich mit CAS (Allgemein) | 0 |
| 0x480203 | Spannungsversorgung ASA - Unterspannung (Spannungsversorgung ASA) | 0 |
| 0x480204 | Spannungsversorgung ASA - Überspannung (Spannungsversorgung ASA) | 0 |
| 0x480205 | Stellmotor - Blockade, Stellmotordynamik nicht in vollem Umfang verfügbar (Stellmotor) | 0 |
| 0x480206 | Allgemein - Codierdatenfehler (Allgemein) | 0 |
| 0x480207 | Stellmotor - Motorpositionssensor, Stellmotorpositionssensor fehlerhaft (Stellmotor) | 0 |
| 0x480208 | Stellmotor - Stellmotorstrom/Motorstrom (Stellmotor) | 0 |
| 0x480209 | Stellmotor - Stellmotorlage (Stellmotor) | 0 |
| 0x48020A | Stellmotor - Stellmotorsperre blockiert Stellmotor (Stellmotor) | 0 |
| 0x48020B | Allgemein - Selbsthemmungsüberwachung (Allgemein) | 0 |
| 0x48020C | Allgemein - Motor/Aktuator Funktionsüberwachung (Allgemein) | 0 |
| 0x48020D | Allgemein - Spurstangenlagesensor (Allgemein) | 0 |
| 0x48020E | Allgemein - Diversitäres Rechnen (Allgemein) | 0 |
| 0x48020F | Allgemein - Flashfehler (Allgemein) | 0 |
| 0x480210 | Steuergerät intern - Betriebssystem (Steuergerät intern) | 0 |
| 0x480211 | Allgemein - Abtrennung Klemme 30 (Allgemein) | 0 |
| 0x480213 | Stellmotor - Motorposition initialisieren (Stellmotor) | 0 |
| 0xCE841F | BUS - Flexray - Physikalischer Bus Fehler (BUS - Flexray) | 1 |
| 0xCE8420 | BUS - Flexray - Controller Fehler (BUS - Flexray) | 1 |
| 0xCE8BFF | Diagnosemaster - Dummy Network DTC [DM_TEST_COM] (Diagnosemaster - Dummy Network DTC [DM_TEST_COM]) | 1 |
| 0xCE9428 | Nachricht - Außentemperatur - Timeout | 1 |
| 0xCE942C | Nachricht - Außentemperatur - Ungültig | 1 |
| 0xCE944E | Nachricht - Fahrgestellnummer - Ungültig | 1 |
| 0xCE9482 | Nachricht - Fahrgestellnummer - Timeout | 1 |
| 0xCE94AC | Nachricht - Fahrzeugzustand - Timeout | 1 |
| 0xCE94B2 | Nachricht - Fahrzeugzustand - Ungültig | 1 |
| 0xCE94B3 | Nachricht - Fahrzeugzustand - Undefiniert | 1 |
| 0xCE94F2 | Nachricht - Kilometerstand/Reichweite - Timeout | 1 |
| 0xCE94F6 | Nachricht - Kilometerstand/Reichweite - Ungültig | 1 |
| 0xCE94F8 | Nachricht - Klemmen - Timeout | 1 |
| 0xCE94F9 | Nachricht - Klemmen - Checksumme | 1 |
| 0xCE94FA | Nachricht - Klemmen - Alive | 1 |
| 0xCE94FC | Nachricht - Klemmen - Ungültig | 1 |
| 0xCE94FD | Nachricht - Klemmen - Undefiniert | 1 |
| 0xCE958C | Nachricht - Relativzeit - Timeout | 1 |
| 0xCE9590 | Nachricht - Relativzeit - Ungültig | 1 |
| 0xCE9591 | Nachricht - Relativzeit - Undefiniert | 1 |
| 0xCE9744 | Nachricht - Daten Antriebsstrang 2 - Timeout | 1 |
| 0xCE9745 | Nachricht - Daten Antriebsstrang 2 - Checksumme | 1 |
| 0xCE9746 | Nachricht - Daten Antriebsstrang 2 - Alive | 1 |
| 0xCE988D | Nachricht - Soll Lenkwinkel Stellglied - Timeout | 1 |
| 0xCE988E | Nachricht - Soll Lenkwinkel Stellglied - Checksumme | 1 |
| 0xCE988F | Nachricht - Soll Lenkwinkel Stellglied - Alive | 1 |
| 0xCE9891 | Nachricht - Soll Lenkwinkel Stellglied - Ungültig | 1 |
| 0xCE9892 | Nachricht - Soll Lenkwinkel Stellglied - Undefiniert | 1 |
| 0xCE99AB | Nachricht - Daten Antriebsstrang 2 - Ungültig | 1 |
| 0xCEA400 | BUS - Flexray - Controller Fehler - Initialisierung fehlgeschlagen (BUS - Flexray) | 1 |
| 0xCEA401 | BUS - Flexray - Controller Fehler - Synchronisierung verloren (BUS - Flexray) | 1 |
| 0xCEA402 | BUS - Flexray - Controller Fehler - POC Status Halt (BUS - Flexray) | 1 |
| 0xCEAC05 | Nachricht - Außentemperatur - Undefiniert | 1 |
| 0xCEAC0D | Nachricht - Daten Antriebsstrang 2 - Undefiniert | 1 |
| 0xCEAC1A | Nachricht - Fahrgestellnummer - Undefiniert | 1 |
| 0xCEAC2A | Nachricht - Kilometerstand/Reichweite - Undefiniert | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | BETRIEBSSPANNUNG | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x400D | Fehlercode (KFC) | 0-n | - | 0xff | TAB_KFC | - | - | - |
| 0x400A | Fehlerart (KFA) | 0-n | - | 0xff | TAB_KFA | - | - | - |
| 0x4000 | Systemstatus | 0-n | - | 0xff | TAB_STMSTATE | 1 | 1 | 0 |
| 0x4005 | Spannung Klemme 15n | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4008 | Temperatur | °C | - | signed char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021600 | Energiesparmode - aktiv [VSM_EVENT_OPMODE] (Energiesparmode) | 1 |
| 0x02FF16 | Diagnosemaster - Dummy Application DTC [DM_TEST_APPL] (Diagnosemaster) | 1 |
| 0x160000 | Secu - NVM_E_WRITE_FAILED (Secu) | 0 |
| 0x160001 | Secu - NVM_E_READ_FAILED (Secu) | 0 |
| 0x160002 | Secu - NVM_E_CONTROL_FAILED (Secu) | 0 |
| 0x160003 | Secu - NVM_E_ERASE_FAILED (Secu) | 0 |
| 0x160004 | Secu - NVM_E_READ_ALL_FAILED (Secu) | 0 |
| 0x160005 | Secu - NVM_E_WRITE_ALL_FAILED (Secu) | 0 |
| 0x160006 | Secu - NVM_E_WRONG_CONFIG_ID (Secu) | 0 |
| 0x160007 | Secu - DEM_EVENT_KFC_DRIVER (Secu) | 0 |
| 0x160008 | Secu - DEM_EVENT_ELMCSI (Secu) | 0 |
| 0x160009 | Secu - DEM_EVENT_KFC_CODING_DATA_OUT_OF_BOUNDS_NEC (Secu) | 0 |
| 0x16000A | Secu - DEM_EVENT_KFC_CODING_DATA_OUT_OF_BOUNDS_S12X (Secu) | 0 |
| 0x16000B | Secu - DEM_EVENT_KFC_S12_AGB_TSA (Secu) | 0 |
| 0x16000C | Secu - DEM_EVENT_KFC_IPC (Secu) | 0 |
| 0x16000D | Secu - DEM_EVENT_KFC_S12_IPC (Secu) | 0 |
| 0x16000E | Secu - DEM_EVENT_KFC_RAM (Secu) | 0 |
| 0x16000F | Secu - DEM_EVENT_KFC_ROM (Secu) | 0 |
| 0x160010 | Secu - DEM_EVENT_KFC_STM (Secu) | 0 |
| 0x160011 | Secu - DEM_EVENT_KFC_S12_WATCHDOG (Secu) | 0 |
| 0x160012 | Secu - DEM_EVENT_KFC_FLASH (Secu) | 0 |
| 0x160013 | Secu - DEM_EVENT_KFC_S12_FLASH (Secu) | 0 |
| 0x160014 | Secu - DEM_EVENT_KFC_S12_FR_REC (Secu) | 0 |
| 0x160015 | Secu - DEM_EVENT_KFC_S12_FR_SEND (Secu) | 0 |
| 0x160016 | Secu - DEM_EVENT_KFC_FR_SEND (Secu) | 0 |
| 0x160017 | Secu - DEM_EVENT_KFC_OS_ERROR (Secu) | 0 |
| 0x160018 | Secu - DEM_EVENT_KFC_WDG_1MS (Secu) | 0 |
| 0x160019 | Secu - DEM_EVENT_KFC_WDG_INT (Secu) | 0 |
| 0x16001A | Secu - DEM_EVENT_KFC_D3PDH_ILS (Secu) | 0 |
| 0x16001B | Secu - DEM_EVENT_KFC_PHASE_UZK_SC (Secu) | 0 |
| 0x16001C | Secu - DEM_EVENT_KFC_PHASE_GND_SC (Secu) | 0 |
| 0x16001D | Secu - DEM_EVENT_KFC_LSSW_U_OC (Secu) | 0 |
| 0x16001E | Secu - DEM_EVENT_KFC_LSSW_V_OC (Secu) | 0 |
| 0x16001F | Secu - DEM_EVENT_KFC_LSSW_W_OC (Secu) | 0 |
| 0x160020 | Secu - DEM_EVENT_KFC_HSSW_U_OC (Secu) | 0 |
| 0x160021 | Secu - DEM_EVENT_KFC_HSSW_V_OC (Secu) | 0 |
| 0x160022 | Secu - DEM_EVENT_KFC_HSSW_W_OC (Secu) | 0 |
| 0x160023 | Secu - DEM_EVENT_KFC_PWM3PH_INIT (Secu) | 0 |
| 0x160024 | Secu - DEM_EVENT_KFC_ELMOSH_BS_UNDERVOLTAGE (Secu) | 0 |
| 0x160025 | Secu - DEM_EVENT_KFC_MOTOR_OC (Secu) | 0 |
| 0x160026 | Secu - DEM_EVENT_KFC_TOFF (Secu) | 0 |
| 0x160027 | Secu - DEM_EVENT_KFC_ANALOG_SIGNALS_NOT_VALID (Secu) | 0 |
| 0x160028 | Secu - DEM_EVENT_KFC_OFFSET_CALIB_FAILED (Secu) | 0 |
| 0x160029 | Secu - DEM_EVENT_KFC_ELMOSH_S_E_LINK (Secu) | 0 |
| 0x16002A | Secu - DEM_EVENT_KFC_ELMOSH_S_E_SPIBUF_OVL (Secu) | 0 |
| 0x16002B | Secu - DEM_EVENT_KFC_ELMOSH_S_E_TIMEOUT (Secu) | 0 |
| 0x16002C | Secu - DEM_EVENT_KFC_ELMOSH_UNDERVOLTAGE (Secu) | 0 |
| 0x16002D | Secu - DEM_EVENT_KFC_ELMOSH_OVERCURRENT (Secu) | 0 |
| 0x16002E | Secu - DEM_EVENT_KFC_ELMOSH_FAULTPIN_LOW (Secu) | 0 |
| 0x16002F | Secu - DEM_EVENTKFC_5V0A_UNDERVOLTAGE (Secu) | 0 |
| 0x160030 | Secu - DEM_EVENT_PRG_SW (Secu) | 0 |
| 0x160031 | Secu - DEM_EVENT_KFC_DRLS (Secu) | 0 |
| 0x160033 | Secu - DEM_EVENT_KFC_S12_RLS_COMPARE (Secu) | 0 |
| 0x160034 | Secu - DEM_EVENT_KFC_US (Secu) | 0 |
| 0x160035 | Secu - DEM_EVENT_KFC_SMCURR (Secu) | 0 |
| 0x160036 | Secu - DEM_EVENT_KFC_SMPOS (Secu) | 0 |
| 0x160037 | Secu - DEM_EVENT_KFC_PROG (Secu) | 0 |
| 0x160038 | Secu - DEM_EVENT_KFC_BRAKE (Secu) | 0 |
| 0x160039 | Secu - DEM_EVENT_KFC_ADC (Secu) | 0 |
| 0x16003A | Secu - DEM_EVENT_KFC_SMCOM (Secu) | 0 |
| 0x16003B | Secu - DEM_EVENT_KFC_SELFLOCK (Secu) | 0 |
| 0x16003C | Secu - DEM_EVENT_KFC_MAF (Secu) | 0 |
| 0x16003E | Secu - DEM_EVENT_KFC_S12_AGB_LOCK (Secu) | 0 |
| 0x16003F | Secu - DEM_EVENT_KFC_WACKEL (Secu) | 0 |
| 0x160041 | Secu - DEM_EVENT_KFC_TAR_STEA_MSG (Secu) | 0 |
| 0x160042 | Secu - DEM_EVENT_KFC_DISCHARGE (Secu) | 0 |
| 0x160043 | Secu - DEM_EVENT_KFC_S12_OS (Secu) | 0 |
| 0x160045 | Secu - DEM_EVENT_KFC_PWR_KL30 (Secu) | 0 |
| 0x160046 | Secu - DEM_EVENT_KFC_S12_STM_ERROR (Secu) | 0 |
| 0x160047 | Secu - DEM_EVENT_KFC_S12_TSACTRL (Secu) | 0 |
| 0x160048 | Secu - DEM_EVENT_KFC_TEMP (Secu) | 0 |
| 0x160049 | Secu - DEM_EVENT_KFC_TAR_STEA_TIMEOUT (Secu) | 0 |
| 0x16004A | Secu - DEM_EVENT_KFC_TSA_BOUND (Secu) | 0 |
| 0x16004C | Secu - DEM_EVENT_KFC_KL30_UNDERVOLTAGE (Secu) | 0 |
| 0x16004D | Secu - DEM_EVENT_KFC_KL30_OVERVOLTAGE (Secu) | 0 |
| 0x16004E | Secu - DEM_EVENT_KFC_KL15_UNDERVOLTAGE (Secu) | 0 |
| 0x16004F | Secu - DEM_EVENT_KFC_KL15_OVERVOLTAGE (Secu) | 0 |
| 0x160050 | Secu - DEM_EVENT_KFC_SSW_MOSFET_OC (Secu) | 0 |
| 0x160051 | Secu - DEM_EVENT_KFC_PCHARGE_OR_SSW_MOSFET_SC (Secu) | 0 |
| 0x160052 | Secu - DEM_EVENT_KFC_PCHARGE_OC_OR_POWERSTAGE_SC (Secu) | 0 |
| 0x160053 | Secu - DEM_EVENT_KFC_SAFETY_SWITCH_2_SC (Secu) | 0 |
| 0x160054 | Secu - DEM_EVENT_KFC_SAFETY_SWITCH_1_SC (Secu) | 0 |
| 0x160055 | Secu - CODING_EVENT_SIGNATURE_ERROR (Secu) | 0 |
| 0x160056 | Secu - CODING_EVENT_WRONG_VEHICLE (Secu) | 0 |
| 0x160057 | Secu - CODING_EVENT_TRANSACTION_FAILED (Secu) | 0 |
| 0x160058 | Secu - CODING_EVENT_INVALID_DATA (Secu) | 0 |
| 0x160059 | Secu - DEM_EVENT_KFC_VINCOMP (Secu) | 0 |
| 0x16005A | Secu - DEM_EVENT_KFC_MAXAKTDIFF (Secu) | 0 |
| 0x16005B | Secu - DEM_EVENT_KFC_3V3A_2_UNDERVOLTAGE (Secu) | 0 |
| 0x16005C | Secu - DEM_EVENT_KFC_VERS_SLS (Secu) | 0 |
| 0x16005D | Secu - DEM_EVENT_KFC_VERS_MLS (Secu) | 0 |
| 0x16005E | Secu - DEM_EVENT_KFC_MOTORPHASE_OC (Secu) | 0 |
| 0x16005F | Secu - DEM_EVENT_KFC_NOT_CONFIGURED_IN_TRESOS (Secu) | 0 |
| 0x160060 | Secu - DEM_EVENT_KFC_FR_FLX (Secu) | 0 |
| 0x160061 | Secu - DEM_EVENT_KFC_FR_CC (Secu) | 0 |
| 0x160062 | Secu - DEM_EVENT_KFC_SET_MLW_INVALID (Secu) | 0 |
| 0x160063 | Secu - DEM_EVENT_KFC_REQ_RESTART (Secu) | 0 |
| 0x160064 | Secu - DEM_EVENT_KFC_S12_SMCOM (Secu) | 0 |
| 0x160065 | Secu - DEM_EVENT_KFC_WR_MEM (Secu) | 0 |
| 0x160066 | Secu - DEM_EVENT_KFC_RD_MEM (Secu) | 0 |
| 0x160067 | Secu - DEM_EVENT_KFC_SLOTFIND (Secu) | 0 |
| 0x160068 | Secu - DEM_EVENT_KFC_SAS_FAILS (Secu) | 0 |
| 0x160069 | Secu - DEM_EVENT_KFC_WAIT_FOR_RLW_SET (Secu) | 0 |
| 0x16006A | Secu - DEM_EVENT_KFC_FR_KLEMMEN (Secu) | 0 |
| 0x16006B | Secu - DEM_EVENT_KFC_TAR_STEA_MAXTIMEOUTS (Secu) | 0 |
| 0x16006C | Secu - DEM_EVENT_KFC_EEPROM (Secu) | 0 |
| 0x16006D | Secu - DEM_EVENT_KFC_ELMOS_ON (Secu) | 0 |
| 0x16006E | Secu - DM_Queue_DELETED (Secu) | 0 |
| 0x16006F | Secu - DM_Queue_FULL (Secu) | 0 |
| 0x160070 | Secu - DEM_EVENT_ZFLS_UNDERVOLTAGE (Secu) | 0 |
| 0x160071 | Secu - DEM_EVENT_KFC_VINTIMEOUT (Secu) | 0 |
| 0x160072 | Secu - DEM_EVENT_KFC_ZWK (Secu) | 0 |
| 0x160073 | Secu - DEM_EVENT_KFC_SSW_OFF (Secu) | 0 |
| 0x160075 | Secu - DEM_EVENT_KFC_PPROT (Secu) | 0 |
| 0x160076 | Secu - DEM_EVENT_KFC_S12_AGB_LIMIT (Secu) | 0 |
| 0x160077 | Secu - DEM_EVENT_KFC_FEE_TEST (Secu) | 0 |
| 0x160078 | Secu - DEM_EVENT_KFC_FEE_CFBLK (Secu) | 0 |
| 0x160079 | Secu - DEM_EVENT_KFC_FEE_CBLK (Secu) | 0 |
| 0x16007A | Secu - DEM_EVENT_KFC_FEE_RFBLK (Secu) | 0 |
| 0x16007B | Secu - DEM_EVENT_KFC_FEE_RBLK (Secu) | 0 |
| 0x16007C | Secu - DEM_EVENT_KFC_SW_WARNING (Secu) | 0 |
| 0x16007D | Secu - DM_EVENT_FAHRZEUGZUSTANDTIMEOUT (Secu) | 0 |
| 0x16007E | Secu - DM_EVENT_ZEITBOTSCHAFTTIMEOUT (Secu) | 0 |
| 0x16007F | Secu - DEM_EVENT_KFC_INFO_ZWK_OVERVOLTAGE (Secu) | 0 |
| 0x160080 | Secu - DEM_EVENT_KFC_INFO_ZWK_PL_OVERVOLTAGE (Secu) | 0 |
| 0x160081 | Secu - DEM_EVENT_KFC_INFO_ZWK_LONG_PL (Secu) | 0 |
| 0x160082 | Secu - DEM_EVENT_KFC_INFO_FRPHYS (Secu) | 0 |
| 0x160083 | Secu - DEM_EVENT_KFC_FRPHYS (Secu) | 0 |
| 0x160084 | Secu - DEM_EVENT_KFC_INFO_FRPHYS_STATUS_UP (Secu) | 0 |
| 0x160085 | Secu - DEM_EVENT_KFC_FRPHYS_SPI (Secu) | 0 |
| 0x160086 | Secu - DEM_EVENT_KFC_FRPHYS_INIT (Secu) | 0 |
| 0x160087 | Secu - DEM_EVENT_KFC_INFO_FRPHYS_REINIT (Secu) | 0 |
| 0x160088 | Secu - DEM_EVENT_KFC_NO_SERVICE_ICM (Secu) | 0 |
| 0x160089 | Secu - DEM_EVENT_KFC_NO_SERVICE_KL (Secu) | 0 |
| 0x16008A | Secu - DEM_EVENT_KFC_INFO_ZWK_UNDERVOLTAGE (Secu) | 0 |
| 0x16008B | Secu - DEM_EVENT_KFC_INFO_ZWK_PL_UNDERVOLTAGE (Secu) | 0 |
| 0x16008C | Secu - DEM_EVENT_KFC_TSENSOR (Secu) | 0 |
| 0x16008D | Secu - DEM_EVENT_KFC_S12X_TSA_PLAUS (Secu) | 0 |
| 0x16FFFF | Secu - DEM_EVENT_ERRHDL_MIN (Secu) | 0 |
| 0x480200 | Steuergerät intern - Steuergerätefehler, Endstufe oder Baustein defekt (Steuergerät intern) | 0 |
| 0x480201 | Steuergerät intern - Steuergerätefehler, Berechnungsabläufe fehlerhaft (Steuergerät intern) | 0 |
| 0x480202 | Allgemein - Fahrgestellnummernvergleich mit CAS (Allgemein) | 0 |
| 0x480203 | Spannungsversorgung ASA - Unterspannung (Spannungsversorgung ASA) | 0 |
| 0x480204 | Spannungsversorgung ASA - Überspannung (Spannungsversorgung ASA) | 0 |
| 0x480205 | Stellmotor - Blockade, Stellmotordynamik nicht in vollem Umfang verfügbar (Stellmotor) | 0 |
| 0x480206 | Allgemein - Codierdatenfehler (Allgemein) | 0 |
| 0x480207 | Stellmotor - Motorpositionssensor, Stellmotorpositionssensor fehlerhaft (Stellmotor) | 0 |
| 0x480208 | Stellmotor - Stellmotorstrom/Motorstrom (Stellmotor) | 0 |
| 0x480209 | Stellmotor - Stellmotorlage (Stellmotor) | 0 |
| 0x48020A | Stellmotor - Stellmotorsperre blockiert Stellmotor (Stellmotor) | 0 |
| 0x48020B | Allgemein - Selbsthemmungsüberwachung (Allgemein) | 0 |
| 0x48020C | Allgemein - Motor/Aktuator Funktionsüberwachung (Allgemein) | 0 |
| 0x48020D | Allgemein - Spurstangenlagesensor (Allgemein) | 0 |
| 0x48020E | Allgemein - Diversitäres Rechnen (Allgemein) | 0 |
| 0x48020F | Allgemein - Flashfehler (Allgemein) | 0 |
| 0x480210 | Steuergerät intern - Betriebssystem (Steuergerät intern) | 0 |
| 0x480211 | Allgemein - Abtrennung Klemme 30 (Allgemein) | 0 |
| 0x480213 | Stellmotor - Motorposition initialisieren (Stellmotor) | 0 |
| 0xCE841F | BUS - Flexray - Physikalischer Bus Fehler (BUS - Flexray) | 1 |
| 0xCE8420 | BUS - Flexray - Controller Fehler (BUS - Flexray) | 1 |
| 0xCE8BFF | Diagnosemaster - Dummy Network DTC [DM_TEST_COM] (Diagnosemaster - Dummy Network DTC [DM_TEST_COM]) | 1 |
| 0xCE9428 | Nachricht - Außentemperatur - Timeout | 1 |
| 0xCE942C | Nachricht - Außentemperatur - Ungültig | 1 |
| 0xCE944E | Nachricht - Fahrgestellnummer - Ungültig | 1 |
| 0xCE9482 | Nachricht - Fahrgestellnummer - Timeout | 1 |
| 0xCE94AC | Nachricht - Fahrzeugzustand - Timeout | 1 |
| 0xCE94B2 | Nachricht - Fahrzeugzustand - Ungültig | 1 |
| 0xCE94B3 | Nachricht - Fahrzeugzustand - Undefiniert | 1 |
| 0xCE94F2 | Nachricht - Kilometerstand/Reichweite - Timeout | 1 |
| 0xCE94F6 | Nachricht - Kilometerstand/Reichweite - Ungültig | 1 |
| 0xCE94F8 | Nachricht - Klemmen - Timeout | 1 |
| 0xCE94F9 | Nachricht - Klemmen - Checksumme | 1 |
| 0xCE94FA | Nachricht - Klemmen - Alive | 1 |
| 0xCE94FC | Nachricht - Klemmen - Ungültig | 1 |
| 0xCE94FD | Nachricht - Klemmen - Undefiniert | 1 |
| 0xCE958C | Nachricht - Relativzeit - Timeout | 1 |
| 0xCE9590 | Nachricht - Relativzeit - Ungültig | 1 |
| 0xCE9591 | Nachricht - Relativzeit - Undefiniert | 1 |
| 0xCE9744 | Nachricht - Daten Antriebsstrang 2 - Timeout | 1 |
| 0xCE9745 | Nachricht - Daten Antriebsstrang 2 - Checksumme | 1 |
| 0xCE9746 | Nachricht - Daten Antriebsstrang 2 - Alive | 1 |
| 0xCE988D | Nachricht - Soll Lenkwinkel Stellglied - Timeout | 1 |
| 0xCE988E | Nachricht - Soll Lenkwinkel Stellglied - Checksumme | 1 |
| 0xCE988F | Nachricht - Soll Lenkwinkel Stellglied - Alive | 1 |
| 0xCE9891 | Nachricht - Soll Lenkwinkel Stellglied - Ungültig | 1 |
| 0xCE9892 | Nachricht - Soll Lenkwinkel Stellglied - Undefiniert | 1 |
| 0xCE99AB | Nachricht - Daten Antriebsstrang 2 - Ungültig | 1 |
| 0xCEA400 | BUS - Flexray - Controller Fehler - Initialisierung fehlgeschlagen (BUS - Flexray) | 1 |
| 0xCEA401 | BUS - Flexray - Controller Fehler - Synchronisierung verloren (BUS - Flexray) | 1 |
| 0xCEA402 | BUS - Flexray - Controller Fehler - POC Status Halt (BUS - Flexray) | 1 |
| 0xCEAC05 | Nachricht - Außentemperatur - Undefiniert | 1 |
| 0xCEAC0D | Nachricht - Daten Antriebsstrang 2 - Undefiniert | 1 |
| 0xCEAC1A | Nachricht - Fahrgestellnummer - Undefiniert | 1 |
| 0xCEAC2A | Nachricht - Kilometerstand/Reichweite - Undefiniert | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | BETRIEBSSPANNUNG | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x400A | Fehlerart (KFA) | 0-n | - | 0xff | TAB_KFA | - | - | - |
| 0x4000 | Systemstatus | 0-n | - | 0xff | TAB_STMSTATE | - | - | - |
| 0x4003 | Systemstatus Counter | - | - | unsigned char | - | - | - | - |
| 0x400C | Z-Status | - | - | unsigned char | - | - | - | - |
| 0x4004 | Ersatzmassnahme | - | - | unsigned char | - | - | - | - |
| 0x4001 | Sollwinkel | ° | high | signed int | - | 1 | 100 | 0 |
| 0x4002 | Istwinkel | ° | high | signed int | - | 1 | 100 | 0 |
| 0x4005 | Spannung Klemme 15n | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4006 | Spannung Klemme 30 | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4007 | Spannung Zwischenkreis | V | - | unsigned char | - | 128 | 1000 | 0 |
| 0x4008 | Temperatur | °C | - | signed char | - | - | - | - |
| 0x4009 | Uptime | ms | high | signed long | - | - | - | - |
| 0x400B | Local Condition | - | high | signed long | - | - | - | - |
| 0x400E | Sperrenzustand | - | - | unsigned char | - | - | - | - |
| 0x400F | Sollwertqualifier ICM | - | - | unsigned char | - | - | - | - |
| 0x4010 | Klemmenstatus | - | - | unsigned char | - | - | - | - |
| 0x400D | Fehlercode (KFC) | 0-n | - | 0xff | TAB_KFC | - | - | - |
| 0x4011 | DET Sequenznummer | - | - | unsigned char | - | - | - | - |
| 0x4012 | Anzahl MLW-Verlust | - | - | unsigned char | - | - | - | - |
| 0x4013 | Anzahl Aktive Diagnose | - | - | unsigned char | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BETRIEBSSPANNUNG | 0x170C | - | Auslesen der Betriebsspannung am SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x170C |
| SYSTEMZEIT | 0x1701 | - | Auslesen der Systemzeit im SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1701 |
| VIN | 0xF190 | - | Auslesen der Fahrgestellnummer im SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF190 |
| _STATUS_STEUERGERAET | 0x4001 | - | Auslesen des Betriebszustandes des SG (=Qualifier_Status_ECU bei Sendenachrichten) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001 |
| AFS_ALIVECOUNTER | 0xDB93 | - | Auslesen der AFS Alive Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB93 |
| AFS_MOTORSPANNUNGEN | 0xDBA2 | - | Auslesen der Spannungen des AFS Motors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA2 |
| AFS_MOTORSTROEME | 0xDBA1 | - | Auslesen der Ströme des AFS Motors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA1 |
| AFS_SG_TEMPERATUR | 0xDB92 | - | Auslesen der internen Temperatur des SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB92 |
| AFS_OPERATINGSYSTEM | 0xDB91 | - | Auslesen von Zuständen des Betriebssystems | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB91 |
| BUS_IN_CAS_INFO | 0xDBA8 | - | Auslesen der vom BUS empfangenen Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA8 |
| ERSATZMASSNAHME | 0xDBAD | - | Auslesen der aktuellen Ersatzmassnahme/Degradation im Fehlerfall | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAD |
| FLEXRAY_SIGNALE | 0xDBAB | - | Auslesen ausgewählter Bussignale | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAB |
| MOTORLAGEWINKEL_INITIALISIERUNG | 0xDB9C | - | Auslesen des Status der Initialisierung des Motorlagewinkels | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB9C |
| MOTORLAGEWINKEL_VORDERACHSE | 0xDB97 | - | Auslesen der Motorlagewinkel des AFS Motors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB97 |
| ROMCHECK | 0xDBAC | - | Auslesen der Ergebnisse des ROM Checks | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAC |
| STATUS_FACTORY_DATEN | 0xDB94 | - | Auslesen der Fertigungsdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB94 |
| VERSORGUNG | 0xDBAA | - | Auslesen der Versorgungsspannungen des SGs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBAA |
| _MOTORLAGEWINKEL_OFFSET | 0x4042 | - | Auslesen und Vorgeben des Motorlagewinkeloffsets | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4042 | RES_0x4042 |
| MOTORLAGEWINKEL_RUECKSETZEN | 0xAB90 | - | Starten der Motorlagerücksetzroutine | - | - | - | - | - | - | - | - | - | 31 | - | - |

### RES_0X1701

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMZEIT_WERT | - | - | + | s | high | unsigned long | - | - | 1 | 1 | 0 | zentrale Systemzeit |

### RES_0X170C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UBAT_WERT | - | - | + | mV | high | unsigned int | - | - | 1 | 1 | 0 | Betriebsspannung am Steuergerät |

### RES_0X1728

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUG_FZM | - | - | + | 0-n | high | unsigned char | - | E_STATUS_FZG | 1 | 1 | 0 | zentraler Fahrzeugzustand |

### RES_0X4001

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_STEUERGERAET | - | - | + | 0-n | high | unsigned char | - | E_STATUS_ECU | 1 | 1 | 0 | Betriebszustand des Steuergeräts |

### RES_0XF190

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_WERT | - | - | + |  | high | string[17] | - | - | 1 | 1 | 0 | Fahrgestellnummer |

### RES_0XDB91

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMZUSTAND_CPU1_NR | - | - | + | 0-n | high | unsigned char | - | E_GSTMSTATE | 1 | 1 | 0 | Stellt den Systemzustand der CPU 1 dar |
| STAT_SYSTEMZUSTAND_CPU2_NR | - | - | + | 0-n | high | unsigned char | - | E_GSTMSTATE | 1 | 1 | 0 | Stellt den Systemzustand der CPU 2 dar |
| STAT_SYSTEMZUSTAND_SOLL_CPU1_NR | - | - | + | 0-n | high | unsigned char | - | E_GSTMSTATE | 1 | 1 | 0 | Zeigt den Status an, der von CPU 1 als Befehl zur CPU 2 übertragen wird |

### RES_0XDB92

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZWK_TEMPERATUR_WERT | - | - | + | °C | high | int | - | - | 1 | 1 | 0 | SG-Zwischenkreistemperatur  |

### RES_0XDB93

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SG_ALIVECOUNTER_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | Aktueller Alivecounter ASA auf BUS(Empfänger ICMQL, DSC) |
| STAT_SPI_ALIVECOUNTER_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | Aktueller Alivecounter ASA CPU1 und 2 auf dem SPI (Empfang zwischen CPU1 und 2) |
| STAT_ICM_ALIVECOUNTER_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | Aktueller Alivecounter ICM auf BUS (Empfänger ASA, DSC) |

### RES_0XDB94

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_NR_CPU1_WERT | - | - | + | - | high | string[1] | - | - | 1 | 1 | 0 | Auslesen der ZFLS Software Nummer. |
| STAT_SW_NR_CPU2_WERT | - | - | + | - | high | string[1] | - | - | 1 | 1 | 0 | Auslesen der ZFLS Software Nummer. |

### RES_0XDB97

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MLW_ISTWERT_CPU1_WERT | - | - | + | ° | high | long | - | - | 1 | 1000 | 0 | Motorlagewinkel Istwert in Grad von CPU1 |
| STAT_MLW_ISTWERT_GUELTIGKEIT_CPU1_NR | - | - | + | 0-n | high | unsigned char | - | E_MLWSTATE | 1 | 1 | 0 | Qualifier für den Istwert CPU1 |
| STAT_MLW_ISTWERT_CPU2_WERT | - | - | + | ° | high | long | - | - | 1 | 1000 | 0 | Motorlagewinkel Istwert in Grad, von CPU2 |
| STAT_MLW_ISTWERT_GUELTIGKEIT_CPU2_NR | - | - | + | 0-n | high | unsigned char | - | E_MLWSTATE | 1 | 1 | 0 | Qualifier für den Istwert CPU2 |
| STAT_MLW_SOLLWERT_CPU1_WERT | - | - | + | ° | high | long | - | - | 1 | 1000 | 0 | Motorlagewinkel Sollwert in Grad, von CPU1 |
| STAT_MLW_SOLLWERT_CPU2_WERT | - | - | + | ° | high | long | - | - | 1 | 1000 | 0 | Motorlagewinkel Sollwert in Grad, von CPU2 |
| STAT_MLW_OFFSET_WERT | - | - | + | ° | high | long | - | - | 1 | 1000 | 0 | Gespeicherter Motorlagewinkel Offset in Grad |
| STAT_MLW_RUNDENZAEHLER_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Multiturnwert des Motors (Zähler für vollständige Umdrehung des Motors) |
| STAT_MLW_SELBSTINITIALISIERUNGSZAEHLER_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Zähler für verlorene Motorlagwinkel (gültig--> ungültig) |

### RES_0XDB9C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GUELTIGKEIT_MLW_NR | - | - | + | 0-n | high | unsigned char | - | E_MLWSTATE | 1 | 1 | 0 | Qualifier für den Motorlagewinkel AFS.Aktueller Zustand des Motorlagewinkels - Ausgabe - Table GueRotor: 0= nicht gültig; 1= gültig, 2 = nicht definiert |

### RES_0XDBA1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHASENSTROM_U_WERT | - | - | + | A | high | long | - | - | 1 | 1000 | 0 | Phasenstrom der Phase U am Stator des Stellmotors |
| STAT_PHASENSTROM_V_WERT | - | - | + | A | high | long | - | - | 1 | 1000 | 0 | Phasenstrom der Phase V am Stator des Stellmotors |
| STAT_PHASENSTROM_W_WERT | - | - | + | A | high | long | - | - | 1 | 1000 | 0 | Phasenstrom der Phase W am Stator des Stellmotors |

### RES_0XDBA2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHASENSPANNUNG_U_WERT | - | - | + | V | high | long | - | - | 1 | 1000 | 0 | Spannung der Phase U am Stator des Stellmotors |
| STAT_PHASENSPANNUNG_V_WERT | - | - | + | V | high | long | - | - | 1 | 1000 | 0 | Spannung der Phase V am Stator des Stellmotors |
| STAT_PHASENSPANNUNG_W_WERT | - | - | + | V | high | long | - | - | 1 | 1000 | 0 | Spannung der Phase W am Stator des Stellmotors |

### RES_0XDBA8

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAS_FAHRGESTELLNUMMER_WERT | - | - | + | - | high | string[7] | - | - | 1 | 1 | 0 | Empfangene Fahrgestellnummer  |
| STAT_GUELTIGKEIT_CAS_FAHRGESTELLNR_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Gueltigkeit der Fahrgestellnummer CAN Botschaft vom CAS ueber PT-CAN:0x00 = Botschaft i.o.; 0x02 = Botschaft wurde nie empfangen; 0x04 = Mehrere Botschaften pro Abtastzyklus; 0x08 = Timeout - Botschaft faellt fuer 1 Abtastzyklus Zyklus aus; 0x10 = Fehlerwert laut Nachrichtenkatalog; 0x20 = Alive-Fehler; 0x40 = Checksummen-Fehler; 0x80 = Fehler von CRC Alive Fehlerwert Botschaft nie empfangen |

### RES_0XDBAA

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ZWISCHENKREIS_WERT | - | - | + | V | high | long | - | - | 1 | 1000 | 0 | Zwischenkreisspannung des Steuergerätes |
| STAT_SPANNUNGSUEBERWACHUNG_NR | - | - | + | 0-n | high | unsigned char | - | E_VLTGSTATE | 1 | 1 | 0 | Zustandsüberwachung der Spannungsversorgung |

### RES_0XDBAB

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSAGE_KLEMMEN_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Qualifier für die KLEMMEN Nachricht |
| STAT_MESSAGE_KILOMETERSTAND_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Qualifier für Kilometerstand |
| STAT_MESSAGE_TAR_STEA_ACT_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Qualifier für die TAR_STEA_ACT Nachricht (Sollwertvorgabe - Winkel - von ICMQL) |
| STAT_MESSAGE_RELATIVZEIT_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Qualifier : Zeit ab Zündung EIN (Kl.50) |
| STAT_MESSAGE_FAHRGESTELL_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Qualifier für die VIN Nachricht |
| STAT_MESSAGE_FZZSTD_NR | - | - | + | 0-n | high | unsigned char | - | E_PDUSTATE | 1 | 1 | 0 | Qualifier für die Nachricht Fahrzeugzustand |

### RES_0XDBAC

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROMCHECK_AKTUELLER_SECTOR_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Wert gibt an auf welchem Sector der ROM Check gerade läuft. |
| STAT_ANZAHL_FEHLER1_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Gefundene Fehler des Romcheck 1 |
| STAT_ANZAHL_FEHLER2_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Gefundene Fehler des Romcheck 2 |
| STAT_ROMCHECK_AKTUELLE_SECTOR_STARTADRESSE_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Adresse des aktuellen Sektors |
| STAT_ROMCHECK_AKTUELLE_SECTOR_ENDEADRESSE_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Adresse des aktuellen Sektors |
| STAT_ADRESSE_LETZTER_FEHLER1_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Adresse des letzten gefundenen Fehlers des Romcheck 1 |
| STAT_ADRESSE_LETZTER_FEHLER2_WERT | - | - | + | - | high | unsigned long | - | - | 1 | 1 | 0 | Adresse des letzten gefundenen Fehlers des Romcheck 2 |

### RES_0XDBAD

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERSATZMASSNAHME_NR | - | - | + | 0-n | high | unsigned char | - | E_STMCM | 1 | 1 | 0 | Aktuelle Ersatzmassnahme. Degradationszustand im Fehlerfall. |
| STAT_OUTOFF  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | Abschaltung Endstufe, 0: Normalbetrieb, 1: Endstufe ist abgeschaltet |
| STAT_DONOTDISC  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | Keine Entladung der Kondensatoren, 0: entladen, 1: nicht entladen |
| STAT_ROTINVALID  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | Rotorlagewinkel ungültig schreiben, 0: nicht verändern, 1: ungültig setzen |
| STAT_NUTSUCHEN  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | Nutsucher, 0: nicht durchführen, 1: Nut suchen |
| STAT_DRLSOFF  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | DRLS, 0: nichts ändern, 1: DRLS abschalten |
| STAT_RESTART  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | Request restart of state machine |
| STAT_REQMLWINVALID  | - | - | + | 0/1 | high | unsigned char | - | - | 1 | 1 | 0 | Request invalidation of rotor position |

### E_STATUS_ECU

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | Initialisierung | Initialisierung |
| 0x01 | Normalbetrieb | Normalbetrieb |
| 0x02 | Normalbetrieb/Überspannung | Normalbetrieb/Überspannung |
| 0x03 | Normalbetrieb/Unterspannung | Normalbetrieb/Unterspannung |
| 0x04 | Diagnose | Diagnose |
| 0x05 | Diagnose/Überspannung | Diagnose/Überspannung |
| 0x06 | Diagnose/Unterspannung | Diagnose/Unterspannung |
| 0x07 | PowerDown | PowerDown |
| 0x08 | PowerSave | PowerSave |
| 0x09 | Nicht verfügbar | Nicht verfügbar |
| 0x0A | Reset | Reset |
| 0x0B | Reserviert 11 | Reserviert 11 |
| 0x0C | Reserviert 12 | Reserviert 12 |
| 0x0D | Reserviert 13 | Reserviert 13 |
| 0x0E | Reserviert 14 | Reserviert 14 |
| 0x0F | ungültig | ungültig |

### E_GSTMSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | Zustand Powerdown | Zustand Powerdown |
| 0x01 | Zustand Initialisierung | Zustand Initialisierung |
| 0x02 | Zustand Bereit / Regelung inaktiv | Zustand Bereit / Regelung inaktiv |
| 0x03 | Zustand Warte auf MLW | Zustand Warte auf MLW |
| 0x04 | Zustand Bereit / Regelung aktiv | Zustand Bereit / Regelung aktiv |
| 0x05 | Zustand Rückstellung auf Null | Zustand Rückstellung auf Null |
| 0x06 | Zustand Diagnose | Zustand Diagnose |
| 0x07 | Zustand Normalbetrieb | Zustand Normalbetrieb |
| 0x08 | Zustand Fehler | Zustand Fehler |
| 0x09 | Zustand Nachlauf | Zustand Nachlauf |
| 0x0A | Zustand Reset | Zustand Reset |
| 0xXY | ungültig | ungültig |

### E_PDUSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | i. O. | i. O. |
| 0x01 | Bus asynchron | Bus asynchron |
| 0x02 | Keine neuen Daten | Keine neuen Daten |
| 0x03 | Nicht empfangen | Nicht empfangen |
| 0xFF | Hardwarefehler | Hardwarefehler |
| 0xXY | ungültig | ungültig |

### E_STMCM

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | Keine | Keine |
| 0x01 | Reversible Abschaltung | Reversible Abschaltung |
| 0x02 | Rückstellen auf Null | Rückstellen auf Null |
| 0x03 | MLW Ungültig setzen | MLW Ungültig setzen |
| 0x04 | Bedingte Abschaltung | Bedingte Abschaltung |
| 0x05 | Irreversible Abschaltung | Irreversible Abschaltung |
| 0xXY | ungültig | ungültig |

### E_MLWSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | Ungültig | Ungültig |
| 0x01 | Gültig | Gültig |
| 0x02 | Initialisierung | Initialisierung |
| 0x03 | Defekt | Defekt |
| 0xXY | ungültig | ungültig |

### E_VLTGSTATE

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | i. O. | i. O. |
| 0x01 | Unterspannung | Unterspannung |
| 0x02 | Überspannung | Überspannung |
| 0xXY | ungültig | ungültig |

### ARG_0X4042

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | + | - | - | high | int | - | - | 1 | 1 | 0 | - | - |  |

### RES_0X4042

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_WERT | - | - | + | - | high | int | - | - | 1 | 1 | 0 |  |

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
| 70 | KFA_ASYNC |
| 71 | KFA_TIMEOUT |
| 72 | KFA_SIG_QU_AVL_STEA |
| 73 | KFA_SIG_AVL_STEA |
| 74 | KFA_SIG_QU_SER_CTR_STE |
| 75 | KFA_SIG_ST_ECU_ST_STE |
| 76 | KFA_SIG_QU_TAR_STEA_ACT |
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
| 193 | KFA_TJA1080_STATUS_UP |
| 194 | KFA_TJA1080_STATUS_ERR |
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
| 177 | KFC_MAX_TSA |
| 178 | KFC_VERS_SLS_KL15 |
| 186 | KFC_KL15N_POSTRUN |
| 187 | KFC_KL15_OFF |
| 0xXY | *** INVALID VALUE *** |
