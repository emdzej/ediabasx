# emf_10.prg

## General

|  |  |
| --- | --- |
| File | emf_10.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 50 |
| Origin | BMW Entwicklung_Fahrdynamik Martin_Berndaner |
| Revision | 5.002 |
| Author | BMW EF-513 Martin_Berndaner, TRW EPB Carina_Wetter, MBtech ECU_ |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromechanische Feststellbremse TRW |  |  |
| ORIGIN | string | BMW Entwicklung_Fahrdynamik Martin_Berndaner |  |  |
| REVISION | string | 5.002 |  |  |
| AUTHOR | string | BMW EF-513 Martin_Berndaner, TRW EPB Carina_Wetter, MBtech ECU_ |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.20 |  |  |
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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)]

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
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
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
| 0x04 | GWTB | Gateway-Tabelle |
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
| 0x022A00 | Energiesparmode - aktiv --- (Transportmodus aktiv) | 0 |
| 0x02FF2A | Diagnosemaster - Dummy Application DTC --- (Test Diagnosemaster: unbedeutender Fehler ) | 1 |
| 0x480500 | Taster - Leitung 1 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480501 | Taster - Leitung 1 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480502 | Taster - Leitung 1 - Unterbrechung | 0 |
| 0x480503 | Taster - Leitung 2 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480504 | Taster - Leitung 2 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480505 | Taster - Leitung 2 - Unterbrechung | 0 |
| 0x480506 | Taster - Leitung 3 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480507 | Taster - Leitung 3 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480508 | Taster - Leitung 3 - Unterbrechung | 0 |
| 0x480509 | Taster - Leitung 4 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x48050A | Taster - Leitung 4 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x48050B | Taster - Leitung 4 - Unterbrechung | 0 |
| 0x48050C | Taster - Leitung 5 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x48050D | Taster - Leitung 5 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x48050E | Taster - Leitung 5 - Unterbrechung | 0 |
| 0x480510 | Taster - Funktion - dauerhaft betätigt (Taster klemmt) | 0 |
| 0x480511 | Weckleitung - unplausibel Klemme15 | 0 |
| 0x480512 | Geschwindigkeit - DFA_EMF Frequenz über Limit | 1 |
| 0x480513 | Geschwindigkeit - DFA_EMF Frequenz unter Limit (kein Signal) | 1 |
| 0x480514 | Spannungsversorgung - Steuergerät - Überspannung | 1 |
| 0x480515 | Spannungsversorgung - Steuergerät - Unterspannung | 1 |
| 0x480524 | Taster - Funktionsbeleuchtung - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480525 | Taster - Funktionsbeleuchtung - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480526 | Taster - Funktionsbeleuchtung - Unterbrechung | 0 |
| 0x480529 | Taster - Funktion - Ziehen defekt | 0 |
| 0x48052A | Taster - Funktion - Drücken defekt | 0 |
| 0x48052F | Aktuator - max. Anzahl Nachstellvorgang erreicht | 0 |
| 0x480531 | Taster - Funktion - Taster weckt zu oft | 0 |
| 0x480532 | Schnittstelle DSC - Präventives Nachspannen durchgeführt | 0 |
| 0x480533 | Taster - Funktion - Missbrauch durch Fahrer erkannt | 0 |
| 0x480584 | Codierung - Transaktion gescheitert | 0 |
| 0x480585 | Codierung - Signatur fehlerhaft | 0 |
| 0x480586 | Codierung - Falsches Fahrzeug | 0 |
| 0x480587 | Codierung - ungueltige Daten | 0 |
| 0x480588 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x480589 | Steuergerät Intern - TRW - ECU - Störung | 0 |
| 0x48058A | Spannungsversorgung - Steuergerät - Unerwarteter  Shutdown | 1 |
| 0x48059B | Spannungsversorgung - Steuergerät - Dauerplus Logik fehlt | 0 |
| 0x48059C | Aktuator - Kombisattel - links - Versorgungsleitung - Kurzschluss nach Plus | 0 |
| 0x48059D | Aktuator - Kombisattel - rechts - Versorgungsleitung - Kurzschluss nach Plus | 0 |
| 0x48059E | Spannungsversorgung - Kombisattel - links - Kurzschluss nach Masse | 0 |
| 0x48059F | Spannungsversorgung - Kombisattel - rechts - Kurzschluss nach Masse | 0 |
| 0x4805A0 | Spannungsversorgung - Steuergerät - Leitungsunterbrechnung Last Links - Plus | 0 |
| 0x4805A1 | Spannungsversorgung - Steuergerät - Leitungsunterbrechung Last Rechts - Plus | 0 |
| 0x4805A2 | Spannungsversorgung - Steuergerät - Funktionseinschränkung Unterspannung | 0 |
| 0x4805A9 | Spannungsversorgung - Kombisattel - links - Signal oder Wert oberhalb Schwelle | 0 |
| 0x4805AA | Spannungsversorgung - Kombisattel - links - Leitungsunterbrechung | 0 |
| 0x4805AB | Spannungsversorgung - Kombisattel - links - Kein Signal oder Wert | 0 |
| 0x4805AC | Spannungsversorgung - Kombisattel - links - unplausibles Signal oder Wert | 0 |
| 0x4805AE | Spannungsversorgung - Kombisattel - rechts - Signal oder Wert oberhalb Schwelle | 0 |
| 0x4805AF | Spannungsversorgung - Kombisattel - rechts - Leitungsunterbrechung | 0 |
| 0x4805B0 | Spannungsversorgung - Kombisattel - rechts - Kein Signal oder Wert | 0 |
| 0x4805B1 | Spannungsversorgung - Kombisattel - rechts - unplausibles Signal oder Wert | 0 |
| 0x4805B2 | Spannungsversorgung - Kombisattel - links - FC_MOTOR_SC_SUPPLY_OC | 0 |
| 0x4805B3 | Spannungsversorgung - Kombisattel - links - FC_MOTOR_SUPPLY_OC | 0 |
| 0x4805B4 | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_SC_SUPPLY_OC_RR | 0 |
| 0x4805B5 | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_SUPPLY_OC_RR | 0 |
| 0x4805B7 | Aktuator - Kombisattel - links - Temperatursensor Kurzschluss nach Masse oder Leitungsunterbrechung oder Sensorfehler | 0 |
| 0x4805B9 | Aktuator - Kombisattel - rechts - Temperatursensor Kurzschluss nach Masse oder Leitungsunterbrechung oder Sensorfehler | 0 |
| 0x4805BA | Variantencodierung - ungueltiger Variantenwert | 0 |
| 0x4805BC | Aktuator - Kombisattel - links - Bremsscheibe hinten nicht erreicht | 0 |
| 0x4805BD | Aktuator - Kombisattel - links - mechanischer Fehler | 0 |
| 0x4805BE | Aktuator - Kombisattel - links - Spannkraft nicht erreicht | 0 |
| 0x4805BF | Aktuator - Kombisattel - links - mechanische Reibung zu gross | 0 |
| 0x4805C0 | Aktuator - Kombisattel - links - schwergängig | 0 |
| 0x4805C1 | Aktuator - Kombisattel - rechts - Bremsscheibe hinten nicht erreicht | 0 |
| 0x4805C2 | Aktuator - Kombisattel - rechts - mechanischer Fehler | 0 |
| 0x4805C3 | Aktuator - Kombisattel - rechts - Spannkraft nicht erreicht | 0 |
| 0x4805C4 | Aktuator - Kombisattel - rechts - mechanische Reibung zu gross | 0 |
| 0x4805C5 | Aktuator - Kombisattel - rechts - schwergängig | 0 |
| 0x4805C6 | Weckleitung - Kurzschluss nach Masse | 0 |
| 0x4805C8 | Taster - Tasterleitungen nicht verbunden | 0 |
| 0x4805D9 | Schnittstelle DSC - Rückmeldung dyn. Abbremsung unplausibel  | 1 |
| 0x4805DA | Schnittstelle DSC - Reserve 02 DSC | 1 |
| 0x4805DB | Schnittstelle DSC - Reserve 03 DSC | 1 |
| 0x4805DC | Schnittstelle DSC - Reserve 04 DSC | 1 |
| 0x4805E2 | Spannungsversorgung - Steuergerät - Funktionseinschrankung Überspannung | 1 |
| 0x4805E3 | Aktuator - Inkohärenter Bremszustand | 0 |
| 0x4805E4 | Schnittstelle Klemmensteuerung - Klemmenanforderungen nicht erfolgreich | 1 |
| 0x4805E8 | Reserve - Reserve | 0 |
| 0x4805E9 | Montagemodus ist aktiv | 0 |
| 0x4805F2 | Steuergerät Intern - TRW - IPC - Störung | 0 |
| 0x4805F3 | Steuergerät Intern - TRW - FSMC - Störung | 0 |
| 0x4805F4 | Steuergerät Intern - TRW - RAM_ROM - Störung | 0 |
| 0x4805F5 | Steuergerät Intern - TRW - Programmablauf - Störung | 0 |
| 0x4805F6 | Reserve - Reserve | 0 |
| 0x4805F7 | Steuergerät Intern - TRW - FSMC - Defekt | 0 |
| 0x4805F8 | Steuergerät Intern - TRW - ECU - EEPROM Defekt | 0 |
| 0x4805FA | Aktuator - Temperatursensoren - Abweichung zu groß | 0 |
| 0x4805FB | Aktuator - Fahrzeug rollt trotz Nachspannen | 0 |
| 0x4805FC | Taster - Unplausibles Signal | 0 |
| 0x4805FD | Reserve - Reserve | 0 |
| 0x4805FE | Reserve - Reserve | 0 |
| 0x4805FF | Reserve - Reserve | 0 |
| 0x480600 | Reserve - Reserve | 0 |
| 0x480601 | Reserve - Reserve | 0 |
| 0x480602 | Reserve - Reserve | 0 |
| 0x480603 | Reserve - Reserve | 0 |
| 0x480604 | Reserve - Reserve | 0 |
| 0x480605 | Reserve - Reserve | 0 |
| 0x480606 | Reserve - Reserve | 0 |
| 0x480607 | Reserve - Reserve | 0 |
| 0x480608 | Reserve - Reserve | 0 |
| 0x480609 | Reserve - Reserve | 0 |
| 0x48060A | Reserve - Reserve | 0 |
| 0x48060B | Reserve - Reserve | 0 |
| 0x48060C | Reserve - Reserve | 0 |
| 0x48060D | Reserve - Reserve | 0 |
| 0x48060E | Reserve - Reserve | 0 |
| 0x48060F | Reserve - Reserve | 0 |
| 0x480610 | Reserve - Reserve | 0 |
| 0xD38402 | Busfehler (FA-CAN) - Bus Performance | 1 |
| 0xD3840A | Busfehler (FA-CAN) - Bus OFF | 1 |
| 0xD3852A | Reserve - Reserve | 0 |
| 0xD38BFF | Diagnosemaster - Dummy Network DTC --- (Test Diagnosemaster) | 1 |
| 0xD39418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID:STAT_DS_VRFD) Sender: FRMFA - Timeout | 1 |
| 0xD39419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID:STAT_DS_VRFD) Sender: FRMFA - Checksumme | 1 |
| 0xD3941A | Botschaftsfehler (Status Türsensoren Abgesichert, ID:STAT_DS_VRFD) Sender: FRMFA - Alive | 1 |
| 0xD39428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3942C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD39445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Checksumme | 1 |
| 0xD3944E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Ungültig | 1 |
| 0xD39482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
| 0xD394AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD394B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD394B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD394B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Ungültig | 1 |
| 0xD394B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD394B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD394BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD394BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD394BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD394F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD394F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD394F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD394F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Checksumme | 1 |
| 0xD394FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD394FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD394FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD3951A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3951C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID:ACLNX_MASSCNTR) Sender: ICM_QL - Ungültig | 1 |
| 0xD3951D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID:ACLNX_MASSCNTR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD39528 | Reserve - Reserve | 0 |
| 0xD39529 | Reserve - Reserve | 0 |
| 0xD3952E | Reserve - Reserve | 0 |
| 0xD3952F | Reserve - Reserve | 0 |
| 0xD39538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Timeout | 1 |
| 0xD39539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Checksumme | 1 |
| 0xD3953A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Alive | 1 |
| 0xD3953E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Ungültig | 1 |
| 0xD3953F | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Undefiniert | 1 |
| 0xD39552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Ungültig | 1 |
| 0xD39553 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Undefiniert | 1 |
| 0xD39557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Timeout | 1 |
| 0xD39570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Timeout | 1 |
| 0xD39571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Checksumme | 1 |
| 0xD39572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Alive | 1 |
| 0xD39577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Qualifier | 1 |
| 0xD3957A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD3957B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD3958C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD39590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD39591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD395BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Timeout | 1 |
| 0xD395BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Checksumme | 1 |
| 0xD395BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Alive | 1 |
| 0xD395C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Ungültig | 1 |
| 0xD395C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD39646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Timeout | 1 |
| 0xD39647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Checksumme | 1 |
| 0xD39648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Alive | 1 |
| 0xD3964C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Ungültig | 1 |
| 0xD3964D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Undefiniert | 1 |
| 0xD39672 | Reserve - Reserve | 0 |
| 0xD396A6 | Botschaftsfehler (Nachlaufzeit Klemme 30 fehlergesteuert, ID: FLLUPT_KLEMME_30G_F) Sender: FEM, JBBF - Timeout | 1 |
| 0xD396AC | Botschaftsfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Timeout | 1 |
| 0xD396B0 | Signalfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Ungültig | 1 |
| 0xD396F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Timeout | 1 |
| 0xD396F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Alive | 1 |
| 0xD39744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD39745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Checksumme | 1 |
| 0xD39746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD39751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Checksumme | 1 |
| 0xD39752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Alive | 1 |
| 0xD397EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD399AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD39A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD39A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID:ACLNX_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD39A61 | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Qualifier | 1 |
| 0xD39B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID:ACLNX_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD39B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID:ACLNX_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD39B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID:ACLNX_MASSCNTR) Sender: ICM_QL - Alive | 1 |
| 0xD39B57 | Botschaftsfehler (Status Hydraulikfunktion, ID: ST_HYDFN) Sender: DSC_Modul - Timeout | 1 |
| 0xD39B58 | Botschaftsfehler (Status Hydraulikfunktion, ID: ST_HYDFN) Sender: DSC_Modul - Checksumme | 1 |
| 0xD39B59 | Botschaftsfehler (Status Hydraulikfunktion, ID: ST_HYDFN) Sender: DSC_Modul - Alive | 1 |
| 0xD39B5B | Signalfehler (Status Hydraulikfunktion, ID: ST_HYDFN) Sender: DSC_Modul - Ungültig | 1 |
| 0xD39B5C | Signalfehler (Status Hydraulikfunktion, ID: ST_HYDFN) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD39B68 | Botschaftsfehler (Temperatur_Bremse, ID: TEMP_BRK) Sender: DSC_Modul - Timeout | 1 |
| 0xD39B69 | Botschaftsfehler (Temperatur_Bremse, ID: TEMP_BRK) Sender: DSC_Modul - Checksumme | 1 |
| 0xD39B6A | Botschaftsfehler (Temperatur_Bremse, ID: TEMP_BRK) Sender: DSC_Modul - Alive | 1 |
| 0xD39B6C | Signalfehler (Temperatur_Bremse, ID: TEMP_BRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD39B6D | Signalfehler (Temperatur_Bremse, ID: TEMP_BRK) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD3AC05 | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD3AC0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Undefiniert | 1 |
| 0xD3AC1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD3AC2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD3AC2C | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD3AC2E | Signalfehler (Nachlaufzeit Klemme 30 fehlergesteuert, ID: FLLUPT_KLEMME_30G_F) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD3AC2F | Signalfehler (Nachlaufzeit Klemme 30 fehlergesteuert, ID: FLLUPT_KLEMME_30G_F) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD3AC30 | Signalfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD3AC81 | Signalfehler (Status Türsensoren Abgesichert, ID:STAT_DS_VRFD) Sender: FRMFA - Ungültig | 1 |
| 0xD3AC8D | Signalfehler (Status Hydraulikfunktion, ID: ST_HYDFN) Sender: DSC_Modul - Qualifier | 1 |
| 0xD3AD01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Qualifier | 1 |
| 0xD3AD58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Qualifier | 1 |
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
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4050 | SPANNUNG_ECU | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4051 | SPANNUNG_WECKLEITUNG | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4052 | GESCHWINDIGKEIT | km/h | high | unsigned int | - | 1 | 1 | 0 |
| 0x4053 | AKTUATOR_U_SYSTEM_STATUS | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x4054 | LETZTES_BREMSENEREIGNIS | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x4055 | SPANNUNG_MOTOR_L | V | high | signed int | - | 1 | 1000 | 0 |
| 0x4056 | SPANNUNG_MOTOR_R | V | high | signed int | - | 1 | 1000 | 0 |
| 0x4057 | STATUS_NM | 0-n | - | 0xFF | NM_Status | - | - | - |
| 0x4058 | DEGRADATION | 0/1 | - | 0xFF | - | - | - | - |
| 0x405A | STROM_MOTOR_L | A | high | unsigned char | - | 1 | 10 | 0 |
| 0x405B | STROM_MOTOR_R | A | high | unsigned char | - | 1 | 10 | 0 |
| 0x0001 | Aktuator_Status_links | 0-n | - | 0xF000 | Bremsenstatus_links | 1 | - | - |
| 0x0002 | Aktuator_Status rechts | 0-n | - | 0x0F00 | Bremsenstatus_rechts | 1 | - | - |
| 0x0003 | Schalter_Status | 0-n | - | 0x00F0 | Schalterstatus | - | - | - |
| 0x0004 | ModeController_Status | 0-n | - | 0x000F | ModeControllerstatus | - | - | - |
| 0x0005 | LetztesBremsenEvent links | 0-n | - | 0xFF00 | LetztesBremsenEvent_links | - | - | - |
| 0x0006 | LetztesBremsenEvent rechts | 0-n | - | 0x00FF | LetztesBremsenEvent_rechts | - | - | - |
| 0x0007 | Degradation | 0-n | - | 0x07 | Shutdownlevel | - | - | - |
| 0x0008 | MontageMode | 0-n | - | 0x20 | Mode | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x2a1001 | Diagnosemaster - DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x48050F | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_CYCLETIME_FAILURE | 0 |
| 0x48051B | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_RAM_FAILURE | 0 |
| 0x48051C | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_ROM_FAILURE | 0 |
| 0x48051E | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_VOLTAGE_FAILURE | 0 |
| 0x480520 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_INSTRUCTION_SET_FAILURE | 0 |
| 0x48052D | Steuergerät Intern - TRW - RAM_ROM - Störung - FC_STACK_CHECK_FAULT | 0 |
| 0x480532 | Schnittstelle DSC - Präventives Nachspannen durchgeführt | 0 |
| 0x480533 | Taster - Funktion - Missbrauch durch Fahrer erkannt | 0 |
| 0x480534 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_DEMAND_WRONG_STATE | 0 |
| 0x480535 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_DEMAND_WRONG_STATE_RR | 0 |
| 0x480536 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_CONDITION_WRONG_STATE | 0 |
| 0x480537 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_CONDITION_WRONG_STATE_RR | 0 |
| 0x480538 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_INTERNAL_FAULT | 0 |
| 0x480539 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_IPC_LENGTH_FAILURE | 0 |
| 0x48053A | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_IPC_CHECKSUM_FAILURE | 0 |
| 0x48053B | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_INTERRUPT_CHECK_FAILURE | 0 |
| 0x48053C | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_IPC_TIMEOUT | 0 |
| 0x48053D | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_WATCHDOG_TIMEOUT | 0 |
| 0x48053E | Steuergerät Intern - TRW - RAM_ROM - Störung - FC_RAM_DATA_ERROR | 0 |
| 0x48053F | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_IPC_COUNTER_FAILURE | 0 |
| 0x48055E | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_IPC_COM_ID_FAILURE | 0 |
| 0x48057B | Nichtflüchtiger Speicher - Schreiben gescheitert | 0 |
| 0x48057C | Nichtflüchtiger Speicher - Lesen gescheitert | 0 |
| 0x48057D | Nichtflüchtiger Speicher - Kontrolle gescheitert | 0 |
| 0x48057E | Steuergerät Intern - TRW - ECU - Störung - FC_WATCHDOG_RESET | 0 |
| 0x48057F | Nichtflüchtiger Speicher - Loeschen gescheitert | 0 |
| 0x480580 | Nichtflüchtiger Speicher - Schreiben gesamt gescheitert | 0 |
| 0x480581 | Nichtflüchtiger Speicher - Lesen gesamt gescheitert | 0 |
| 0x480582 | Nichtflüchtiger Speicher - Falsche Config-ID | 0 |
| 0x48058A | Spannungsversorgung - Steuergerät - Unerwarteter  Shutdown | 0 |
| 0x48058B | Diagnosemaster - Warteschlange voll | 0 |
| 0x48058C | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x48058D | Steuergerät Intern - TRW - ECU - Störung - FC_ZENON_MISSING_COMMS | 0 |
| 0x48058E | Steuergerät Intern - TRW - RAM_ROM - Störung - FC_RAM_ROM_FAULT | 0 |
| 0x48058F | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_FSMC_MISSING_COMMS | 0 |
| 0x480590 | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_FSMC_TIMEOUT_FAILURE | 0 |
| 0x480591 | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_CHECKSUM_FAILURE | 0 |
| 0x480592 | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_LENGTH_FAILURE | 0 |
| 0x480593 | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_COM_ID_FAILURE | 0 |
| 0x480594 | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_COUNTER_FAILURE | 0 |
| 0x480595 | Steuergerät Intern - TRW - IPC - Störung - FC_IPC_INSTRUCTION_SET_FAILURE | 0 |
| 0x480596 | Steuergerät Intern - TRW - Programmablauf - Störung - FC_PROGRAMFLOW_FAILURE | 0 |
| 0x480597 | Steuergerät Intern - TRW - FSMC - Störung - FC_ECU_DRV_ENABLE_NOT_SET | 0 |
| 0x480598 | Steuergerät Intern - TRW - ECU - EEPROM Defekt - FC_ECU_NEEDS_CALIBRATION | 0 |
| 0x480599 | Steuergerät Intern - TRW - Programmablauf - Störung - FC_STATE_MACHINE_INVALID_STATE | 0 |
| 0x48059A | Steuergerät Intern - TRW - Programmablauf - Störung - FC_WRONG_INTERRUPT_FAULT | 0 |
| 0x4805A3 | Steuergerät Intern - TRW - FSMC - Defekt - FC_DRV_ENABLE_ALWAYS_ON | 0 |
| 0x4805A4 | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_MAIN_MICRO_A2D_REFERENCE_FAILURE | 0 |
| 0x4805A7 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_SWITCH_FAILURE | 0 |
| 0x4805A8 | Steuergerät Intern - TRW - ECU - EEPROM Defekt - FC_MOTOR_CURRENT_CALIBRATION_ERROR | 0 |
| 0x4805AD | Steuergerät Intern - TRW - ECU - EEPROM Defekt - FC_MOTOR_CURRENT_CALIBRATION_ERROR_RR | 0 |
| 0x4805C7 | Steuergerät Intern - TRW - ECU - Störung - FC_EPB_SWITCH_MIS_MATCH | 0 |
| 0x4805C9 | Steuergerät Intern - TRW - ECU - Störung - V12S - permanent high - | 0 |
| 0x4805CA | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_IPC_WATCHDOG_TIMEOUT | 0 |
| 0x4805CB | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_STACK_FAILURE | 0 |
| 0x4805DD | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_SWITCH_WRONG_STATE_RR | 0 |
| 0x4805DE | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_SPEED_WRONG_STATE | 0 |
| 0x4805DF | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_SPEED_WRONG_STATE_RR | 0 |
| 0x4805E6 | Nachspannen aufgrund von Rollüberwachung durchgeführt | 0 |
| 0x4805EA | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_NO_ERD_CONTROL | 0 |
| 0x4805EB | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_FAULTY_ACTUATION | 0 |
| 0x4805EC | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_FAULTY_ACTUATION_RR | 0 |
| 0x4805ED | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_UNEXPECTED_ACTUATION | 0 |
| 0x4805EE | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_UNEXPECTED_ACTUATION_RR | 0 |
| 0x4805EF | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_EARLY_RELAY_DISABLE | 0 |
| 0x4805F0 | Steuergerät Intern - TRW - FSMC - Defekt - FC_FSMC_NO_WAKEUP_CONTROL | 0 |
| 0x4805F1 | Steuergerät Intern - TRW - FSMC - Störung - FC_FSMC_SWITCH_WRONG_STATE | 0 |
| 0xD394F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD394F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3AC2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0x4805E4 | Schnittstelle Klemmensteuerung - Klemmenanforderungen nicht erfolgreich | 1 |
| 0xD39482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
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
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4050 | SPANNUNG_ECU | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4051 | SPANNUNG_WECKLEITUNG | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4052 | GESCHWINDIGKEIT | km/h | high | unsigned int | - | 1 | 1 | 0 |
| 0x4053 | AKTUATOR_U_SYSTEM_STATUS | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x4054 | LETZTES_BREMSENEREIGNIS | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x4055 | SPANNUNG_MOTOR_L | V | high | signed int | - | 1 | 1000 | 0 |
| 0x4056 | SPANNUNG_MOTOR_R | V | high | signed int | - | 1 | 1000 | 0 |
| 0x4057 | STATUS_NM | 0-n | - | 0xFF | NM_Status | - | - | - |
| 0x4058 | DEGRADATION | 0/1 | - | 0xFF | - | - | - | - |
| 0x405A | STROM_MOTOR_L | A | high | unsigned char | - | 1 | 10 | 0 |
| 0x405B | STROM_MOTOR_R | A | high | unsigned char | - | 1 | 10 | 0 |
| 0x0001 | Aktuator_Status_links | 0-n | - | 0xF000 | Bremsenstatus_links | 1 | - | - |
| 0x0002 | Aktuator_Status rechts | 0-n | - | 0x0F00 | Bremsenstatus_rechts | 1 | - | - |
| 0x0003 | Schalter_Status | 0-n | - | 0x00F0 | Schalterstatus | - | - | - |
| 0x0004 | ModeController_Status | 0-n | - | 0x000F | ModeControllerstatus | - | - | - |
| 0x0005 | LetztesBremsenEvent links | 0-n | - | 0xFF00 | LetztesBremsenEvent_links | - | - | - |
| 0x0006 | LetztesBremsenEvent rechts | 0-n | - | 0x00FF | LetztesBremsenEvent_rechts | - | - | - |
| 0x0007 | Degradation | 0-n | - | 0x07 | Shutdownlevel | - | - | - |
| 0x0008 | MontageMode | 0-n | - | 0x20 | Mode | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMF_VERFAHREN | 0xA803 | - | Anfahren Position | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA803 | RES_0xA803 |
| EMF_MONTAGE_MODE | 0xD80F | - | Auslesen und Vorgeben Montagemodus (Sperrung Bedienung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD80F | RES_0xD80F |
| EMF_SW_VERSION_SLAVE | 0xD80E | STAT_SW_VERSION_SLAVE_WERT | Auslesen Softwareversion Slave | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| EMF_AKTUATOR_KOMBISATTEL | 0xD805 | - | Auslesen Daten Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD805 |
| DFAEMF | 0xD806 | - | Auslesen Bereich Geschwindigkeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD806 |
| EMF_FESTSTELLKRAFT_KOMBISATTEL | 0xD80B | - | Auslesen Feststellkraft | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80B |
| EMF_KLEMMEN_KOMBISATTEL | 0xD80C | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80C |
| EMF_TASTER | 0xD80D | - | Auslesen Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80D |
| EMF_LERNDATEN_TASTER | 0xD808 | - | Auslesen Lerndaten Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD808 |
| EMF_LERNDATEN_AKTUATOR | 0xD80A | - | Auslesen Lerndaten Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80A |
| EMF_LERNDATEN_STATISTIK | 0xD804 | - | Auslesen Lerndaten Statistik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD804 |

### TAB_0X4053

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |

### TAB_0X4054

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0005 | 0x0006 |

### TAB_0X4058

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0007 | 0x0008 |

### BREMSENSTATUS_LINKS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Angelegt |
| 0x1000 | beim Schließen |
| 0x2000 | Geschlossen |
| 0x3000 | Geöffnet |
| 0x4000 | beim Öffnen |
| 0x5000 | unbekannt / fehlerhaft |
| 0x7000 | in Montageposition |
| 0x8000 | beim Anfahren der Montageposition |
| 0x6000 | Initialisierung |

### BREMSENSTATUS_RECHTS

| WERT | UWTEXT |
| --- | --- |
| 0x000 | Angelegt |
| 0x100 | beim Schließen |
| 0x200 | Geschlossen |
| 0x300 | Geöffnet |
| 0x400 | beim Öffnen |
| 0x500 | unbekannt / fehlerhaft |
| 0x700 | in Montageposition |
| 0x800 | beim Anfahren der Montageposition |
| 0x600 | Initialisierung |

### SCHALTERSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | EPB_SWITCH_NEW_IDLE |
| 0x10 | EPB_SWITCH_IDLE |
| 0x20 | EPB_SWITCH_NEW_APPLY |
| 0x30 | EPB_SWITCH_APPLY |
| 0x40 | EPB_SWITCH_NEW_RELEASE |
| 0x50 | EPB_SWITCH_RELEASE |
| 0x70 | EPB_SWITCH_CHECK1 |
| 0x80 | EPB_SWITCH_CHECK2 |
| 0x60 | EPB_SWITCH_INVALID |

### MODECONTROLLERSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0 | MC_RELEASE_INHIBIT |
| 0x1 | MC_STATIC |
| 0x2 | MC_DYNAMIC |
| 0x3 | MC_LIMP_HOME |
| 0x4 | MC_CLIENT |

### LETZTESBREMSENEVENT_LINKS

| WERT | UWTEXT |
| --- | --- |
| 0x0200 | AUTOADJUST_APPLY_DEMAND |
| 0x0300 | AUTOADJUST_RELEASE_DEMAND |
| 0x0800 | DSD_APPLY_DEMAND |
| 0x0700 | DSD_REDUCED_CLAMP_APPLY_DEMAND |
| 0x0900 | DSD_RELEASE_DEMAND |
| 0x0A00 | DYNAMIC_SWITCH_RELEASE_DEMAND |
| 0x2000 | EXTERNAL_APPLY_DEMAND |
| 0x2100 | EXTERNAL_RECLAMP_DEMAND |
| 0x1F00 | EXTERNAL_RELEASE_DEMAND |
| 0x0C00 | HTR_DEMAND |
| 0x0D00 | HU_FUNCTION_APPLY_DEMAND |
| 0x0E00 | HU_FUNCTION_HOLD_DEMAND |
| 0x0F00 | HU_FUNCTION_RELEASE_DEMAND |
| 0x1000 | LIMP_HOME_SWITCH_RELEASE_DEMAND |
| 0x1100 | MCR_DEMAND |
| 0x1300 | RCD_APPLY_DEMAND |
| 0x1400 | RCD_RELEASE_DEMAND |
| 0x1200 | RECLAMP_DEMAND |
| 0x1600 | RWU_APPLY_DEMAND |
| 0x1700 | RWU_HOLD_DEMAND |
| 0x1800 | RWU_RELEASE_DEMAND |
| 0x1D00 | SAFESTATE_APPLY_DEMAND |
| 0x1E00 | SAFESTATE_RELEASE_DEMAND |
| 0x2300 | SEQU_REL_TO_SERVICE_POSITION_DEMAND |
| 0x1900 | STATIC_SWITCH_APPLY_DEMAND |
| 0x1A00 | STATIC_SWITCH_RELEASE_DEMAND |
| 0x0000 | NO_DEMAND_ACTIVE |

### LETZTESBREMSENEVENT_RECHTS

| WERT | UWTEXT |
| --- | --- |
| 0x02 | AUTOADJUST_APPLY_DEMAND |
| 0x03 | AUTOADJUST_RELEASE_DEMAND |
| 0x08 | DSD_APPLY_DEMAND |
| 0x07 | DSD_REDUCED_CLAMP_APPLY_DEMAND |
| 0x09 | DSD_RELEASE_DEMAND |
| 0x0A | DYNAMIC_SWITCH_RELEASE_DEMAND |
| 0x20 | EXTERNAL_APPLY_DEMAND |
| 0x21 | EXTERNAL_RECLAMP_DEMAND |
| 0x1F | EXTERNAL_RELEASE_DEMAND |
| 0x0C | HTR_DEMAND |
| 0x0D | HU_FUNCTION_APPLY_DEMAND |
| 0x0E | HU_FUNCTION_HOLD_DEMAND |
| 0x0F | HU_FUNCTION_RELEASE_DEMAND |
| 0x10 | LIMP_HOME_SWITCH_RELEASE_DEMAND |
| 0x11 | MCR_DEMAND |
| 0x13 | RCD_APPLY_DEMAND |
| 0x14 | RCD_RELEASE_DEMAND |
| 0x12 | RECLAMP_DEMAND |
| 0x16 | RWU_APPLY_DEMAND |
| 0x17 | RWU_HOLD_DEMAND |
| 0x18 | RWU_RELEASE_DEMAND |
| 0x1D | SAFESTATE_APPLY_DEMAND |
| 0x1E | SAFESTATE_RELEASE_DEMAND |
| 0x23 | SEQU_REL_TO_SERVICE_POSITION_DEMAND |
| 0x19 | STATIC_SWITCH_APPLY_DEMAND |
| 0x1A | STATIC_SWITCH_RELEASE_DEMAND |
| 0x00 | NO_DEMAND_ACTIVE |

### SHUTDOWNLEVEL

| WERT | UWTEXT |
| --- | --- |
| 0x0 | NO_SHUTDOWN |
| 0x1 | RESTRICTED_HYDRAULIC_MODE |
| 0x2 | ELECTROMECHANIC_MODE |
| 0x3 | COMPLETE_SHTUDOWN |

### MODE

| WERT | UWTEXT |
| --- | --- |
| 0 | nicht aktiv |
| 1 | aktiv |

### NM_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0 | NM_SLEEP |
| 0x1 | NM_PREPARE_BUS_SLEEP |
| 0x2 | NM_READY_FOR_SLEEP |
| 0x4 | NM_POWERON_REPEAT_REQUEST |
| 0x3 | NM_NORMAL_STAT |

### RES_0XD804

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_FESTELLEN_STEIGUNG20_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Feststellen Steigung > 20 % |
| STAT_ZAEHLER_NACHSPANNEN_ROLLUEBERWACHUNG_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachspannen wegen Rollen erkannt |
| STAT_ZAEHLER_NACHSPANNEN_TEMPERATUR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachspannen wegen Temperatur Bremsscheibe |
| STAT_ZAEHLER_AUTO_ADJUST_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl automatische Justage |
| STAT_ZAEHLER_NACHSPANNEN_PRAEVENTIV_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachspannen vorbeugend |
| STAT_RESERVE5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE6_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE7_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE8_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE9_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |

### RES_0XD805

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MOTOR_HL_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Motor hinten links |
| STAT_STROM_MOTOR_HL_WERT | A | - | int | - | - | 1.0 | 1000.0 | 0.0 | Strom Motor hinten links |
| STAT_TEMPERATUR_MOTOR_HL_WERT | °C | - | int | - | - | 1.0 | 10.0 | 0.0 | Temperatur Motor hinten links |
| STAT_SPANNUNG_MOTOR_HR_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Motor hinten rechts |
| STAT_STROM_MOTOR_HR_WERT | A | - | int | - | - | 1.0 | 1000.0 | 0.0 | Strom Motor hinten rechts |
| STAT_TEMPERATUR_MOTOR_HR_WERT | °C | - | int | - | - | 1.0 | 10.0 | 0.0 | Temperatur Motor hinten rechts |
| STAT_AKTUATOR_R | 0-n | - | unsigned char | - | TAB_EMF_POSITION | 1.0 | 1.0 | 0.0 | Position Bremsbacken hinten rechts |
| STAT_AKTUATOR_L | 0-n | - | unsigned char | - | TAB_EMF_POSITION | 1.0 | 1.0 | 0.0 | Position Bremsbacken hinten links |
| STAT_HU_MODE_STATUS | 0-n | - | unsigned char | - | TAB_EMF_HU_MODE | - | - | - | Status Modus Hauptuntersuchung |

### TAB_EMF_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Angelegt |
| 0x01 | beim Schließen |
| 0x02 | Geschlossen |
| 0x03 | Geöffnet |
| 0x04 | beim Öffnen |
| 0x05 | Initialisierung |
| 0x06 | unbekannt / fehlerhaft |
| 0x07 | Montageposition |
| 0x08 | beim Anfahren Montageposition |
| 0xFF | nicht definiert |

### TAB_EMF_HU_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | aktiv |
| 0x01 | Stufe 1 |
| 0x02 | Stufe 2 |
| 0x03 | Stufe 3 |
| 0x04 | Stufe 4 |
| 0xFF | nicht aktiv |

### RES_0XD806

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PERIODE_DFAEMF_WERT | s | - | unsigned long | - | - | 1.0 | 1000000.0 | 0.0 | Periodendauer |
| STAT_GESCHWINDIGKEIT_MIN_WERT | km/h | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Untergrenze Geschindigkeit |
| STAT_GESCHWINDIGKEIT_MAX_WERT | km/h | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Obergrenze Geschindigkeit |

### RES_0XD808

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_TASTER_FESTSTELLEN_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bedienung Feststellen |
| STAT_ZAEHLER_TASTER_LOESEN_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bedienungen Lösen |

### RES_0XD80A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_AKTUATOR_FESTSTELLEN_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Feststellen |
| STAT_ZAEHLER_AKTUATOR_NOTENTRIEGELN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Notentriegelung |
| STAT_ZAEHLER_AKTUATOR_BOOST_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachstellen |
| STAT_ZAEHLER_AKTUATOR_UEBERLAST_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Überlast |

### RES_0XD80B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FESTSTELLKRAFT_IST_HL_WERT | N | - | unsigned int | - | - | - | - | - | aktuelle Feststellkraft hinten links |
| STAT_FESTSTELLKRAFT_SOLL_HL_WERT | N | - | unsigned int | - | - | - | - | - | Feststellkraft Soll hinten links |
| STAT_FESTSTELLKRAFT_LETZTE_HL_WERT | N | - | unsigned int | - | - | - | - | - | letzte Feststellkraft hinten links |
| STAT_FESTSTELLKRAFT_IST_HR_WERT | N | - | unsigned int | - | - | - | - | - | aktuelle Feststellkraft hinten rechts |
| STAT_FESTSTELLKRAFT_SOLL_HR_WERT | N | - | unsigned int | - | - | - | - | - | Feststellkraft Soll hinten rechts |
| STAT_FESTSTELLKRAFT_LETZTE_HR_WERT | N | - | unsigned int | - | - | - | - | - | letzte Feststellkraft hinten rechts |

### RES_0XD80C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Steuergerät |
| STAT_SPANNUNG_AKUATOR_HL_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Aktuator hinten links |
| STAT_SPANNUNG_AKUATOR_HR_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Aktuator hinten rechts |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Weckleitung |

### RES_0XD80D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_EMF | 0-n | - | unsigned char | - | TAB_EMF_TASTER | - | - | - | Bedienzustand |
| STAT_TASTER_EMF_DIGITAL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | digitaler Status Taster |
| STAT_TASTER_EMF_1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 1 |
| STAT_TASTER_EMF_2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 2 |
| STAT_TASTER_EMF_3_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 3 |
| STAT_TASTER_EMF_4_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 4 |
| STAT_TASTER_EMF_5_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 5 |

### TAB_EMF_TASTER

| WERT | TEXT |
| --- | --- |
| 0 | neutral |
| 1 | gezogen |
| 2 | gedrueckt |
| 3 | Fehler |
| FF | undefinierter Zustand |

### RES_0XD80F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE | 0/1 | - | unsigned char | - | - | - | - | - | 1 = aktiv; 0 = nicht aktiv |

### ARG_0XD80F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv; 0 = nicht aktiv |

### RES_0XA803

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### ARG_0XA803

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | unsigned char | - | TAB_EMF_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | Gewählte Position |

### TAB_EMF_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 2 | Montage |

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
