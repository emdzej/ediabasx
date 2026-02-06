# emf_01.prg

## General

|  |  |
| --- | --- |
| File | emf_01.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 84 |
| Origin | BMW EF-623 Thomas_Hoedl |
| Revision | 2.001 |
| Author | BMW EF-620 Stefan_Jurthe, Continental_Automotive_GmbH SV_C_SC_A |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromechanische Feststellbremse |  |  |
| ORIGIN | string | BMW EF-623 Thomas_Hoedl |  |  |
| REVISION | string | 2.001 |  |  |
| AUTHOR | string | BMW EF-620 Stefan_Jurthe, Continental_Automotive_GmbH SV_C_SC_A |  |  |
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

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes UDS  : $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME WERT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

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
| 0x022A00 | Energiesparmode - aktiv --- (Transportmode aktiv) | 0 |
| 0x02FF2A | Diagnosemaster - Dummy Application DTC --- (Test Diagnosemaster; unbedeutender Fehler ) | 1 |
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
| 0x480512 | Geschwindigkeit - DFA_EMF Frequenz über Limit | 0 |
| 0x480513 | Geschwindigkeit - DFA_EMF Frequenz unter Limit (kein Signal) | 0 |
| 0x480514 | Spannungsversorgung - Steuergerät - Überspannung | 0 |
| 0x480515 | Spannungsversorgung - Steuergerät - Unterspannung | 0 |
| 0x480516 | Spannungsversorgung - Kabelpuller - Überspannung | 0 |
| 0x480517 | Spannungsversorgung - Kabelpuller - Unterspannung | 0 |
| 0x480518 | Steuergerät Intern - Siemens - Allgemeiner Fehler | 0 |
| 0x480519 | Aktuator - Übertemperatur | 0 |
| 0x48051A | Aktuator - Kabelpuller - Notentriegelung oder Seilriss | 0 |
| 0x48051D | Aktuator - Kabelpuller - Timeout Feststellen | 0 |
| 0x48051F | Aktuator - Kabelpuller - Nachstellvorgang ausgeführt | 0 |
| 0x480521 | Aktuator - Kabelpuller - Timeout Montageposition | 0 |
| 0x480522 | Aktuator - Kabelpuller - Timeout Lösen | 0 |
| 0x480523 | Geschwindigkeit - Fahrzeug und Hinterachse unplausibel | 0 |
| 0x480524 | Taster - Funktionsbeleuchtung - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480525 | Taster - Funktionsbeleuchtung - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480526 | Taster - Funktionsbeleuchtung - Unterbrechung | 0 |
| 0x480527 | Weckleitung - unplausibel Rücklesen Extern | 0 |
| 0x480528 | Weckleitung - unplausibel Rücklesen Intern | 0 |
| 0x480529 | Taster - Funktion - Drücken defekt | 0 |
| 0x48052A | Taster - Funktion - Ziehen defekt | 0 |
| 0x48052B | Spannungsversorgung - Kabelpuller - Unterbrechung | 0 |
| 0x48052C | Aktuator - Kabelpuller - Seilriss | 0 |
| 0x48052E | Schnittstelle DSC - Unplausible Anforderung | 0 |
| 0x48052F | Aktuator - max. Anzahl Nachstellvorgang erreicht | 0 |
| 0x480530 | Schnittstelle DSC - nicht initialisiert | 0 |
| 0x480541 | Steuergerät Intern - Siemens - Reserve | 0 |
| 0x480542 | Steuergerät Intern - Siemens - Reserve | 0 |
| 0x480543 | Steuergerät Intern - Siemens - Reserve | 0 |
| 0x480588 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x4805CC | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_01 | 0 |
| 0x4805CD | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_02 | 0 |
| 0x4805CE | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_03 | 0 |
| 0x4805CF | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_04 | 0 |
| 0x4805D0 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_05 | 0 |
| 0x4805D1 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_06 | 0 |
| 0x4805D2 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_07 | 0 |
| 0x4805D3 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_08 | 0 |
| 0x4805D4 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_09 | 0 |
| 0x4805D5 | Steuergerät Intern - Siemens - Allgemeiner Fehler Hardware | 0 |
| 0xD3840A | Busfehler (FA-CAN) - Bus OFF | 1 |
| 0xD38BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD39428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3942C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3944E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Ungültig | 1 |
| 0xD39482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
| 0xD39485 | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Länge | 1 |
| 0xD394AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD394AF | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Länge | 1 |
| 0xD394B0 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD394B1 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD394B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD394B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD394B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD394B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD394BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD394BB | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Länge | 1 |
| 0xD394BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD394BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD394F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD394F5 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Länge | 1 |
| 0xD394F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD394F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD394F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Checksumme | 1 |
| 0xD394FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD394FB | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Länge | 1 |
| 0xD394FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD394FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD39512 | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3951A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD39570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Timeout | 1 |
| 0xD39571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Checksumme | 1 |
| 0xD39572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Alive | 1 |
| 0xD39573 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Länge | 1 |
| 0xD39577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Qualifier | 1 |
| 0xD39578 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD39579 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD3957A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD3957B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD3958C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3958F | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Länge | 1 |
| 0xD39590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD39591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD395BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Timeout | 1 |
| 0xD395BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Checksumme | 1 |
| 0xD395BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Alive | 1 |
| 0xD395BF | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Länge | 1 |
| 0xD395C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Ungültig | 1 |
| 0xD395C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD39646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Timeout | 1 |
| 0xD39647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Checksumme | 1 |
| 0xD39648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Alive | 1 |
| 0xD39649 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Länge | 1 |
| 0xD3964C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Ungültig | 1 |
| 0xD3964D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Undefiniert | 1 |
| 0xD39660 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Timeout | 1 |
| 0xD39661 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Checksumme | 1 |
| 0xD39662 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Alive | 1 |
| 0xD39663 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Länge | 1 |
| 0xD39666 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD39667 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Qualifier | 1 |
| 0xD39668 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD39669 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD396A6 | Botschaftsfehler (Nachlaufzeit Klemme 30 fehlergesteuert, ID: FLLUPT_KLEMME_30G_F) Sender: FEM, JBBF - Timeout | 1 |
| 0xD396AC | Botschaftsfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Timeout | 1 |
| 0xD396B0 | Signalfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Ungültig | 1 |
| 0xD39744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD39745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Checksumme | 1 |
| 0xD39746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD39747 | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Länge | 1 |
| 0xD397EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD397ED | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Länge | 1 |
| 0xD399AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD39A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
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
| 0xD3AC67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Qualifier | 1 |
| 0xD3AD01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Qualifier | 1 |
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
| 0x8100 | DEV_INFO_1 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8101 | DEV_INFO_2 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8102 | DEV_INFO_3 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8103 | DEV_INFO_4 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8104 | DEV_INFO_5 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8105 | DEV_INFO_6 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8106 | DEV_INFO_7 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8110 | UNUSED_1 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8111 | UNUSED_2 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8112 | UNUSED_3 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8113 | UNUSED_4 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8114 | UNUSED_5 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8115 | UNUSED_6 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8116 | UNUSED_7 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8117 | UNUSED_8 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8801 | ACT_CTRL_STATE | 0/1 | - | 0xFF | - | - | - | - |
| 0x9010 | UW_ACT_CTRL_STATE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9011 | UW_ACT_STATE | 0-n | - | 0x0F | UW_ACT_STATE | - | - | - |
| 0x9012 | UW_CTRL_STATE | 0-n | - | 0xF0 | UW_CTRL_STATE | - | - | - |
| 0x8802 | ADDR_OF_CELL | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8803 | ADDR_OF_CELL_BANK | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8804 | APPLY_CNT | times applied | high | unsigned int | - | 10 | 1 | 0 |
| 0x8805 | APPLY_MOVE_PERMISSON | 0/1 | - | 0xFF | - | - | - | - |
| 0x9050 | UW_APPLY_MOVE_PERMISSION | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9051 | UW_APPLY_PERMISSION | 0-n | - | 0x01 | UW_APPLY_PERMISSION | - | - | - |
| 0x9052 | UW_MOVE_PERMISSION | 0-n | - | 0x06 | UW_MOVE_PERMISSION | - | - | - |
| 0x8806 | APPLY_TIME | ms | high | unsigned int | - | 1 | 1 | 0 |
| 0x8807 | BOOSTSTEP_1_CNT | times | high | unsigned int | - | 1 | 1 | 0 |
| 0x8808 | BOOSTSTEP_N_CNT | times | - | unsigned char | - | 1 | 1 | 0 |
| 0x8809 | BT_SW_INFO | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8810 | BT_SW_SIG_FILT | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8811 | BT_SW_SIG_RAW | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8812 | BT_SW_V_S1 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8813 | BT_SW_V_S2 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8814 | BT_SW_V_S3 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8815 | BT_SW_V_S4 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8816 | CHKSUM | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8817 | CHKSUM_INFO | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8818 | DI_TO_DF | mA/N | high | unsigned int | - | 1 | 1 | 0 |
| 0x8819 | QU_DSC_AND_KL | 0/1 | - | 0xFF | - | - | - | - |
| 0x9190 | UW_QU_DSC_AND_KL | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9191 | UW_QU_DSC | 0-n | - | 0x0F | UW_QU_DSC | - | - | - |
| 0x9192 | UW_SIG_KL | 0-n | - | 0xF0 | UW_SIG_KL | - | - | - |
| 0x8820 | ECU_QUALIFIER | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x9200 | UW_ECU_QUALIFIER | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x9201 | UW_QU_DME | 0-n | high | 0x000F | UW_QU_DME | - | - | - |
| 0x9202 | UW_QU_ICM_QL | 0-n | high | 0x00F0 | UW_QU_ICM_QL | - | - | - |
| 0x9203 | UW_QU_CAS | 0-n | high | 0x0F00 | UW_QU_CAS | - | - | - |
| 0x9204 | UW_QU_DSC | 0-n | high | 0xF000 | UW_QU_DSC | - | - | - |
| 0x8821 | EE_BLOCK_ID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8822 | SCS_LINE_AND_EPB_MODE_AND_V_VALID_BITS | 0/1 | - | 0xFF | - | - | - | - |
| 0x9220 | UW_SCS_LINE_AND_EPB_MODE_AND_V_VALID_BITS | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9221 | UW_EPB_MODE | 0-n | - | 0x0F | UW_EPB_MODE | - | - | - |
| 0x9222 | UW_SCS_LINE | 0-n | - | 0x10 | UW_SCS_LINE | - | - | - |
| 0x9223 | UW_V_VALID_BITS | 0-n | - | 0xE0 | UW_V_VALID_BITS | - | - | - |
| 0x8823 | EPB_MODE_AND_ACT_STATE | 0/1 | - | 0xFF | - | - | - | - |
| 0x9230 | UW_EPB_MODE_AND_ACT_STATE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9231 | UW_EPB_MODE | 0-n | - | 0x0F | UW_EPB_MODE | - | - | - |
| 0x9232 | UW_ACT_STATE | 0-n | - | 0xF0 | UW_ACT_STATE | - | - | - |
| 0x8824 | FORCE_MO | N | - | signed char | - | 20 | 1 | 0 |
| 0x8825 | FORCE_GRADIENT | N/s | - | unsigned char | - | 100 | 1 | 0 |
| 0x8826 | ACT_STATE_AND_GLITCH | 0/1 | - | 0xFF | - | - | - | - |
| 0x9260 | UW_ACT_STATE_AND_GLITCH | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9261 | UW_ACT_STATE | 0-n | - | 0x0F | UW_ACT_STATE | - | - | - |
| 0x9262 | UW_GLITCH | 0-n | - | 0xF0 | UW_GLITCH | - | - | - |
| 0x8827 | KL15_PLAUS | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8828 | KL15_PLAUS_INFO | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8829 | LAST_APPLY_FORCE | N | - | unsigned char | - | 10 | 1 | 0 |
| 0x8830 | MASTER_DFA | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8831 | MASTER_V_BAX | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8832 | MASTER_V_VEH | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8833 | MOTOR_CURRENT | 0.1A | high | unsigned int | - | 1 | 1 | 0 |
| 0x8835 | PW_ON_TESTCASE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8836 | REASON_OF_DENIAL | 0-n | - | 0xFF | UW_REASON_OF_DENIAL | - | - | - |
| 0x8837 | RSP_TO_ACTION_AND_SV_RUB_DEBUG | 0/1 | - | 0xFF | - | - | - | - |
| 0x9370 | UW_RSP_TO_ACTION_AND_SV_RUB_DEBUG | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9371 | UW_RSP_TO_ACTION | 0-n | - | 0x0F | UW_RSP_TO_ACTION | - | - | - |
| 0x9372 | UW_SV_RUB_DEBUG | 0-n | - | 0xF0 | UW_SV_RUB_DEBUG | - | - | - |
| 0x8838 | SLAVE_V_USED_AND_DFA | 0/1 | - | 0xFF | - | - | - | - |
| 0x9380 | UW_SLAVE_V_USED_AND_DFA | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9381 | UW_SLAVE_V_USED | 0-n | - | 0x0F | UW_SLAVE_V_USED | - | - | - |
| 0x9382 | UW_SLAVE_DFA | 0-n | - | 0xF0 | UW_SLAVE_DFA | - | - | - |
| 0x8839 | V_VALID_BITS_AND_SV_RUB_DEBUG | 0/1 | - | 0xFF | - | - | - | - |
| 0x9390 | UW_V_VALID_BITS_AND_SV_RUB_DEBUG | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9391 | UW_V_VALID_BITS | 0-n | - | 0x0F | UW_V_VALID_BITS | - | - | - |
| 0x9392 | UW_SV_RUB_DEBUG | 0-n | - | 0xF0 | UW_SV_RUB_DEBUG | - | - | - |
| 0x8840 | SLAVE_V_BAX | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8841 | SLAVE_V_VEH | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8842 | SLAVE_VER_XX | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8843 | SLAVE_VER_YY | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8844 | SLAVE_VER_ZZ | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8845 | SPI_CMD_OR_ACK | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8846 | SPI_ERR_INFO | 0-n | - | 0xFF | UW_SPI_ERR_INFO | - | - | - |
| 0x8847 | SPI_MSG_ID | 0-n | - | 0xFF | UW_SPI_MSG_ID | - | - | - |
| 0x8848 | STELL_ANF_DSC | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8849 | TASK_INFO_MASTER | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8850 | TASK_INFO_SLAVE | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8851 | TEMP_MO | °C | - | signed char | - | 1 | 1 | 0 |
| 0x8852 | V_FORCE_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8853 | V_KL15_CL | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8854 | V_KL30E_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8855 | V_KL30E_PR | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8856 | V_KL30P_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8857 | V_KL30P_PR | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8858 | V_MON_MOT | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8859 | V_TEMP_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8860 | SPI_ERR_DETAIL | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x170C | BETRIEBSSPANNUNG | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | _STATUS_STEUERGERAET | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x4029 | _TEMPERATUR_STEUERGERAET | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x8870 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x8861 | BT_LMP_RDBACK_LINE | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8862 | BT_LMP_INFO | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8863 | SLAVE_IND_STATE | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8864 | SLAVE_IND_DEBUG | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8865 | HYDRAULIC_HOLD | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8866 | FORCE_ACTUAL | N | - | signed char | - | 20 | 1 | 0 |
| 0x8867 | ACT_STATE_AND_EPB_MODE_ACTUAL | 0/1 | - | 0xFF | - | - | - | - |
| 0x9670 | UW_ACT_STATE_AND_EPB_MODE_ACTUAL | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9671 | UW_ACT_STATE_ACTUAL | 0-n | - | 0xF0 | UW_ACT_STATE | - | - | - |
| 0x9672 | UW_EPB_MODE_ACTUAL | 0-n | - | 0x0F | UW_EPB_MODE | - | - | - |
| 0x8868 | FORCE_STORED_MO | N | - | signed char | - | 20 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022A00 | Energiesparmode - aktiv --- (Transportmode aktiv) | 1 |
| 0x02FF2A | Diagnosemaster - Dummy Application DTC --- (Test Diagnosemaster; unbedeutender Fehler ) | 1 |
| 0x480500 | Taster - Leitung 1 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480501 | Taster - Leitung 1 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480502 | Taster - Leitung 1 - Unterbrechnung | 0 |
| 0x480503 | Taster - Leitung 2 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480504 | Taster - Leitung 2 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480505 | Taster - Leitung 2 - Unterbrechnung | 0 |
| 0x480506 | Taster - Leitung 3 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480507 | Taster - Leitung 3 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480508 | Taster - Leitung 3 - Unterbrechnung | 0 |
| 0x480509 | Taster - Leitung 4 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x48050A | Taster - Leitung 4 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x48050B | Taster - Leitung 4 - Unterbrechnung | 0 |
| 0x48050C | Taster - Leitung 5 - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x48050D | Taster - Leitung 5 - Kurzschluß Masse (Klemme 31) | 0 |
| 0x48050E | Taster - Leitung 5 - Unterbrechnung | 0 |
| 0x48050F | Steuergerät Intern - TRW - FC_FSMC_CYCLETIME_FAILURE | 0 |
| 0x480510 | Taster - Funktion - dauerhaft betätigt (Taster klemmt) | 0 |
| 0x480511 | Weckleitung - unplausibel Klemme15 | 0 |
| 0x480512 | Geschwindigkeit - DFA_EMF Frequenz über Limit | 0 |
| 0x480513 | Geschwindigkeit - DFA_EMF Frequenz unter Limit (kein Signal) | 0 |
| 0x480514 | Spannungsversorgung - Steuergerät - Überspannung | 0 |
| 0x480515 | Spannungsversorgung - Steuergerät - Unterspannung | 0 |
| 0x480516 | Spannungsversorgung - Kabelpuller - Überspannung | 0 |
| 0x480517 | Spannungsversorgung - Kabelpuller - Unterspannung | 0 |
| 0x480518 | Steuergerät Intern - Siemens - Allgemeiner Fehler | 0 |
| 0x480519 | Aktuator - Übertemperatur | 0 |
| 0x48051A | Aktuator - Kabelpuller - Notentriegelung oder Seilriss | 0 |
| 0x48051B | Steuergerät Intern - TRW - FC_FSMC_RAM_FAILURE | 0 |
| 0x48051C | Steuergerät Intern - TRW - FC_FSMC_ROM_FAILURE | 0 |
| 0x48051D | Aktuator - Kabelpuller - Timeout Feststellen | 0 |
| 0x48051E | Steuergerät Intern - TRW - FC_FSMC_VOLTAGE_FAILURE | 0 |
| 0x48051F | Aktuator - Kabelpuller - Nachstellvorgang ausgeführt | 0 |
| 0x480520 | Steuergerät Intern - TRW - FC_FSMC_INSTRUCTION_SET_FAILURE | 0 |
| 0x480521 | Aktuator - Kabelpuller - Timeout Montageposition | 0 |
| 0x480522 | Aktuator - Kabelpuller - Timeout Lösen | 0 |
| 0x480523 | Geschwindigkeit - Fahrzeug und Hinterachse unplausibel | 0 |
| 0x480524 | Taster - Funktionsbeleuchtung - Kurzschluß Versorgung (Klemme 30) | 0 |
| 0x480525 | Taster - Funktionsbeleuchtung - Kurzschluß Masse (Klemme 31) | 0 |
| 0x480526 | Taster - Funktionsbeleuchtung - Unterbrechnung | 0 |
| 0x480527 | Weckleitung - unplausibel Rücklesen Extern | 0 |
| 0x480528 | Weckleitung - unplausibel Rücklesen Intern | 0 |
| 0x480529 | Taster - Funktion - Drücken defekt | 0 |
| 0x48052A | Taster - Funktion - Ziehen defekt | 0 |
| 0x48052B | Spannungsversorgung - Kabelpuller - Unterbrechung | 0 |
| 0x48052C | Aktuator - Kabelpuller - Seilriss | 0 |
| 0x48052E | Schnittstelle DSC - Unplausible Anforderung | 0 |
| 0x48052F | Aktuator - max. Anzahl Nachstellvorgang erreicht | 0 |
| 0x480530 | Schnittstelle DSC - nicht initialisiert | 0 |
| 0x480539 | Steuergerät Intern - TRW - FC_FSMC_IPC_LENGTH_FAILURE | 0 |
| 0x48053A | Steuergerät Intern - TRW - FC_FSMC_IPC_CHECKSUM_FAILURE | 0 |
| 0x48053F | Steuergerät Intern - TRW - FC_FSMC_IPC_COUNTER_FAILURE | 0 |
| 0x480540 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MECH_FORCE_DROP | 0 |
| 0x480541 | Steuergerät Intern - Siemens - Reserve | 0 |
| 0x480542 | Steuergerät Intern - Siemens - Reserve | 0 |
| 0x480543 | Steuergerät Intern - Siemens - Reserve | 0 |
| 0x480549 | Steuergerät Intern - Siemens - Allgemeiner Fehler Hardware  - ECU_INT_POWER_ON_TEST_1 | 0 |
| 0x48054A | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_POWER_ON_TEST_2 | 0 |
| 0x48054B | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_POWER_ON_TEST_3 | 0 |
| 0x48054C | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_POWER_ON_TEST_4 | 0 |
| 0x48054D | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SCS_STATIC_TEST | 0 |
| 0x48054E | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SCS_DYNAMIC_TEST | 0 |
| 0x48054F | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SCS_IMPLAUSIBLE | 0 |
| 0x480550 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MOTOR_IDLE_CURRENT | 0 |
| 0x480551 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MOTOR_MAX_CURRENT | 0 |
| 0x480552 | Steuergerät Intern - Siemens - Allgemeiner Fehler Hardware  - ECU_INT_MOTOR_DISCONNECTED | 0 |
| 0x480553 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_FORCE_SHORT_TO_VCC | 0 |
| 0x480554 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_FORCE_SHORT_TO_GND | 0 |
| 0x480555 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MASTER_RAM_ROM_TEST | 0 |
| 0x480556 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MASTER_STACK_PC_TRAP | 0 |
| 0x480557 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MASTER_PFM_IST | 0 |
| 0x480558 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MASTER_SHUTDOWN_OSSTACK | 0 |
| 0x480559 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SLAVE_INDICATION | 0 |
| 0x48055A | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SLAVE_RAM_ROM_TEST | 0 |
| 0x48055B | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SLAVE_STACK_PC | 0 |
| 0x48055C | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SLAVE_PFM_IST | 0 |
| 0x48055D | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SLAVE_FLASH_ERROR | 0 |
| 0x48055E | Steuergerät Intern - TRW - FC_FSMC_IPC_COM_ID_FAILURE | 0 |
| 0x48055F | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MASTER_SLAVE_VERSION | 0 |
| 0x480561 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SPI_DRIVER | 0 |
| 0x480562 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SPI_PROTOCOL | 0 |
| 0x480563 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_SPI_DATA | 0 |
| 0x480564 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_TEMP_SHORT_TO_VCC | 0 |
| 0x480565 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_TEMP_SHORT_TO_GND | 0 |
| 0x480566 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MECH_FORCE_SIGNAL | 0 |
| 0x480567 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MECH_FORCE_IMPLAUSIBLE | 0 |
| 0x480568 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_MECH_FORCE_CALIBRATION | 0 |
| 0x48056C | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_CODING_PARAMETER | 0 |
| 0x480572 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_WRONG_REQUEST_PROTOKOLL | 0 |
| 0x480573 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_WRONG_REQUEST_TIMEOUT | 0 |
| 0x480574 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_WRONG_REQUEST_CONDITION | 0 |
| 0x48057A | Steuergerät Intern - Siemens - Allgemeiner Fehler - DEVELOPMENT | 0 |
| 0x48057B | Nichtflüchtiger Speicher - Schreiben gescheitert | 0 |
| 0x48057C | Nichtflüchtiger Speicher - Lesen gescheitert | 0 |
| 0x48057D | Nichtflüchtiger Speicher - Kontrolle gescheitert | 0 |
| 0x48057E | Steuergerät Intern - TRW - FC_FSMC_IPC_VERSION_FAILURE | 0 |
| 0x48057F | Nichtflüchtiger Speicher - Loeschen gescheitert | 0 |
| 0x480580 | Nichtflüchtiger Speicher - Schreiben gesamt gescheitert | 0 |
| 0x480581 | Nichtflüchtiger Speicher - Lesen gesamt gescheitert | 0 |
| 0x480582 | Nichtflüchtiger Speicher - Falsche Config-ID | 0 |
| 0x480583 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x480584 | Codierung - Transaktion gescheitert | 0 |
| 0x480585 | Codierung - Signatur fehlerhaft | 0 |
| 0x480586 | Codierung - Falsches Fahrzeug | 0 |
| 0x480587 | Codierung - ungueltige Daten | 0 |
| 0x480588 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x48058B | Diagnosemaster - Warteschlange voll | 0 |
| 0x48058C | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x48058D | Steuergerät Intern - TRW - FC_ZENON_MISSING_COMMS | 0 |
| 0x48058E | Steuergerät Intern - TRW - FC_RAM_ROM_FAULT | 0 |
| 0x48058F | Steuergerät Intern - TRW - FC_IPC_FSMC_MISSING_COMMS | 0 |
| 0x480590 | Steuergerät Intern - TRW - FC_IPC_FSMC_TIMEOUT_FAILURE | 0 |
| 0x480591 | Steuergerät Intern - TRW - FC_IPC_CHECKSUM_FAILURE | 0 |
| 0x480592 | Steuergerät Intern - TRW - FC_IPC_LENGTH_FAILURE | 0 |
| 0x480593 | Steuergerät Intern - TRW - FC_IPC_COM_ID_FAILURE | 0 |
| 0x480594 | Steuergerät Intern - TRW - FC_IPC_COUNTER_FAILURE | 0 |
| 0x480595 | Steuergerät Intern - TRW - FC_IPC_INSTRUCTION_SET_FAILURE | 0 |
| 0x480596 | Steuergerät Intern - TRW - FC_PROGRAMFLOW_FAILURE | 0 |
| 0x480597 | Steuergerät Intern - TRW - FC_ECU_DRV_ENABLE_NOT_SET | 0 |
| 0x480598 | Steuergerät Intern - TRW - FC_ECU_NEEDS_CALIBRATION | 0 |
| 0x480599 | Steuergerät Intern - TRW - FC_STATE_MACHINE_INVALID_STATE | 0 |
| 0x48059A | Steuergerät Intern - TRW - FC_WRONG_INTERRUPT_FAULT | 0 |
| 0x48059B | Steuergerät Intern - TRW - Reserve | 0 |
| 0x48059C | Steuergerät Intern - TRW - FC_MOTOR_SHORT_TO_B_PLUS | 0 |
| 0x48059D | Steuergerät Intern - TRW - FC_MOTOR_SHORT_TO_B_PLUS_RR | 0 |
| 0x48059E | Steuergerät Intern - TRW - FC_MOTOR_SHORT_TO_GND | 0 |
| 0x48059F | Steuergerät Intern - TRW - FC_MOTOR_SHORT_TO_GND_RR | 0 |
| 0x4805A0 | Steuergerät Intern - TRW - FC_MOTOR_OPEN_SUPPLY_LINE | 0 |
| 0x4805A1 | Steuergerät Intern - TRW - FC_MOTOR_OPEN_SUPPLY_LINE_RR | 0 |
| 0x4805A2 | Steuergerät Intern - TRW - Reserve | 0 |
| 0x4805A3 | Steuergerät Intern - TRW - FC_DRV_ENABLE_ALWAYS_ON | 0 |
| 0x4805A4 | Steuergerät Intern - TRW - FC_FSMC_MAIN_MICRO_A2D_REFERENCE_FAILURE | 0 |
| 0x4805A5 | Steuergerät Intern - TRW -  FC_FSMC_MOTOR_FAILURE | 0 |
| 0x4805A6 | Steuergerät Intern - TRW - FC_FSMC_MOTOR_FAILURE_RR | 0 |
| 0x4805A7 | Steuergerät Intern - TRW - FC_FSMC_SWITCH_FAILURE | 0 |
| 0x4805A8 | Steuergerät Intern - TRW - FC_MOTOR_CURRENT_CALIBRATION_ERROR | 0 |
| 0x4805A9 | Spannungsversorgung - Kombisattel - links - FC_MOTOR_SC_HIGH_CURRENT | 0 |
| 0x4805AA | Spannungsversorgung - Kombisattel - links - FC_MOTOR_OC | 0 |
| 0x4805AB | Spannungsversorgung - Kombisattel - links - FC_MOTOR_OC_LOW_CURRENT | 0 |
| 0x4805AC | Spannungsversorgung - Kombisattel - links - FC_MOTOR_SC_FET_OC | 0 |
| 0x4805AD | Steuergerät Intern - TRW - FC_MOTOR_CURRENT_CALIBRATION_ERROR_RR | 0 |
| 0x4805AE | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_SC_HIGH_CURRENT_RR | 0 |
| 0x4805AF | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_OC_RR | 0 |
| 0x4805B0 | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_OC_LOW_CURRENT_RR | 0 |
| 0x4805B1 | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_SC_FET_OC_RR | 0 |
| 0x4805B2 | Spannungsversorgung - Kombisattel - links - FC_MOTOR_SC_SUPPLY_OC | 0 |
| 0x4805B3 | Spannungsversorgung - Kombisattel - links - FC_MOTOR_SUPPLY_OC | 0 |
| 0x4805B4 | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_SC_SUPPLY_OC_RR | 0 |
| 0x4805B5 | Spannungsversorgung - Kombisattel - rechts - FC_MOTOR_SUPPLY_OC_RR | 0 |
| 0x4805B6 | Aktuator - Kombisattel - links - FC_TEMPSENSOR_MOTOR_LEFT_SC_GND | 0 |
| 0x4805B7 | Aktuator - Kombisattel - links - FC_TEMPSENSOR_MOTOR_LEFT_OC_OR_SENSOR_FAULT | 0 |
| 0x4805B8 | Aktuator - Kombisattel - rechts - FC_TEMPSENSOR_MOTOR_RIGHT_SC_GND | 0 |
| 0x4805B9 | Aktuator - Kombisattel - rechts - FC_TEMPSENSOR_MOTOR_RIGHT_OC_OR_SENSOR_FAULT | 0 |
| 0x4805BA | Steuergerät Intern - TRW - FC_NOT_EOL_CALIBRATED | 0 |
| 0x4805BB | Steuergerät Intern - TRW - FC_WAKEUP_LINE_HIGH | 0 |
| 0x4805BC | Aktuator - Kombisattel - links - FC_ACTUATOR_BROKEN_NO_DISC | 0 |
| 0x4805BD | Aktuator - Kombisattel - links - FC_ACTUATOR_BROKEN | 0 |
| 0x4805BE | Aktuator - Kombisattel - links - FC_CANT_ACHIEVE_CLAMP | 0 |
| 0x4805BF | Aktuator - Kombisattel - links - FC_HIGH_MECHANICAL_FORCE | 0 |
| 0x4805C0 | Aktuator - Kombisattel - links - FC_HIGH_MOTOR_FREE_RUN_CURRENT | 0 |
| 0x4805C1 | Aktuator - Kombisattel - rechts - FC_ACTUATOR_BROKEN_NO_DISC_RR | 0 |
| 0x4805C2 | Aktuator - Kombisattel - rechts - FC_ACTUATOR_BROKEN_RR | 0 |
| 0x4805C3 | Aktuator - Kombisattel - rechts - FC_CANT_ACHIEVE_CLAMP_R | 0 |
| 0x4805C4 | Aktuator - Kombisattel - rechts - FC_HIGH_MECHANICAL_FORCE_R | 0 |
| 0x4805C5 | Aktuator - Kombisattel - rechts - FC_HIGH_MOTOR_FREE_RUN_CURRENT_R | 0 |
| 0x4805C6 | Steuergerät Intern - TRW - FC_WAKEUP_LINE_LOW | 0 |
| 0x4805C7 | Steuergerät Intern - TRW - FC_EPB_SWITCH_MIS_MATCH | 0 |
| 0x4805C8 | Steuergerät Intern - TRW - FC_EPB_SWITCH_DISCONNECTED_FAULT | 0 |
| 0x4805C9 | Steuergerät Intern - TRW - Reserve | 0 |
| 0x4805CA | Steuergerät Intern - TRW - Reserve | 0 |
| 0x4805CB | Steuergerät Intern - TRW - Reserve | 0 |
| 0x4805CC | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_01 | 0 |
| 0x4805CD | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_02 | 0 |
| 0x4805CE | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_03 | 0 |
| 0x4805CF | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_04 | 0 |
| 0x4805D0 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_05 | 0 |
| 0x4805D1 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_06 | 0 |
| 0x4805D2 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_07 | 0 |
| 0x4805D3 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_08 | 0 |
| 0x4805D4 | Steuergerät Intern - Siemens - Allgemeiner Fehler - ECU_INT_RESERVED_09 | 0 |
| 0x4805D5 | Steuergerät Intern - Siemens - Allgemeiner Fehler Hardware | 0 |
| 0xD38402 | Busfehler (FA-CAN) - Bus Performance | 1 |
| 0xD3840A | Busfehler (FA-CAN) - Bus OFF | 1 |
| 0xD38BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD39428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3942C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3944E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Ungültig | 1 |
| 0xD39482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
| 0xD39485 | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Länge | 1 |
| 0xD394AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD394AF | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Länge | 1 |
| 0xD394B0 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD394B1 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD394B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD394B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD394B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD394B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD394BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD394BB | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Länge | 1 |
| 0xD394BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD394BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD394F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD394F5 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Länge | 1 |
| 0xD394F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD394F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD394F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Checksumme | 1 |
| 0xD394FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD394FB | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Länge | 1 |
| 0xD394FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD394FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD39512 | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3951A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3951C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Ungültig | 1 |
| 0xD3951D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD39570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Timeout | 1 |
| 0xD39571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Checksumme | 1 |
| 0xD39572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Alive | 1 |
| 0xD39573 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Länge | 1 |
| 0xD39577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Qualifier | 1 |
| 0xD39578 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD39579 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD3957A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD3957B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD3958C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3958F | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Länge | 1 |
| 0xD39590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD39591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD395BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Timeout | 1 |
| 0xD395BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Checksumme | 1 |
| 0xD395BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Alive | 1 |
| 0xD395BF | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Länge | 1 |
| 0xD395C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Ungültig | 1 |
| 0xD395C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD39646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Timeout | 1 |
| 0xD39647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Checksumme | 1 |
| 0xD39648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Alive | 1 |
| 0xD39649 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Länge | 1 |
| 0xD3964C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Ungültig | 1 |
| 0xD3964D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Undefiniert | 1 |
| 0xD39660 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Timeout | 1 |
| 0xD39661 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Checksumme | 1 |
| 0xD39662 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Alive | 1 |
| 0xD39663 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Länge | 1 |
| 0xD39666 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD39667 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Qualifier | 1 |
| 0xD39668 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD39669 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD396A6 | Botschaftsfehler (Nachlaufzeit Klemme 30 fehlergesteuert, ID: FLLUPT_KLEMME_30G_F) Sender: FEM, JBBF - Timeout | 1 |
| 0xD396AC | Botschaftsfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Timeout | 1 |
| 0xD396B0 | Signalfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Ungültig | 1 |
| 0xD39744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD39745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Checksumme | 1 |
| 0xD39746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD39747 | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Länge | 1 |
| 0xD397EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD397ED | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Länge | 1 |
| 0xD399AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD39A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD39A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD39B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD39B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD39B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Alive | 1 |
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
| 0xD3AC67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Qualifier | 1 |
| 0xD3AD01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Qualifier | 1 |
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
| 0x8100 | DEV_INFO_1 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8101 | DEV_INFO_2 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8102 | DEV_INFO_3 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8103 | DEV_INFO_4 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8104 | DEV_INFO_5 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8105 | DEV_INFO_6 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8106 | DEV_INFO_7 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8110 | UNUSED_1 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8111 | UNUSED_2 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8112 | UNUSED_3 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8113 | UNUSED_4 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8114 | UNUSED_5 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8115 | UNUSED_6 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8116 | UNUSED_7 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8117 | UNUSED_8 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8801 | ACT_CTRL_STATE | 0/1 | - | 0xFF | - | - | - | - |
| 0x9010 | UW_ACT_CTRL_STATE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9011 | UW_ACT_STATE | 0-n | - | 0x0F | UW_ACT_STATE | - | - | - |
| 0x9012 | UW_CTRL_STATE | 0-n | - | 0xF0 | UW_CTRL_STATE | - | - | - |
| 0x8802 | ADDR_OF_CELL | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8803 | ADDR_OF_CELL_BANK | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8804 | APPLY_CNT | times applied | high | unsigned int | - | 10 | 1 | 0 |
| 0x8805 | APPLY_MOVE_PERMISSON | 0/1 | - | 0xFF | - | - | - | - |
| 0x9050 | UW_APPLY_MOVE_PERMISSION | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9051 | UW_APPLY_PERMISSION | 0-n | - | 0x01 | UW_APPLY_PERMISSION | - | - | - |
| 0x9052 | UW_MOVE_PERMISSION | 0-n | - | 0x06 | UW_MOVE_PERMISSION | - | - | - |
| 0x8806 | APPLY_TIME | ms | high | unsigned int | - | 1 | 1 | 0 |
| 0x8807 | BOOSTSTEP_1_CNT | times | high | unsigned int | - | 1 | 1 | 0 |
| 0x8808 | BOOSTSTEP_N_CNT | times | - | unsigned char | - | 1 | 1 | 0 |
| 0x8809 | BT_SW_INFO | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8810 | BT_SW_SIG_FILT | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8811 | BT_SW_SIG_RAW | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8812 | BT_SW_V_S1 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8813 | BT_SW_V_S2 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8814 | BT_SW_V_S3 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8815 | BT_SW_V_S4 | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8816 | CHKSUM | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8817 | CHKSUM_INFO | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8818 | DI_TO_DF | mA/N | high | unsigned int | - | 1 | 1 | 0 |
| 0x8819 | QU_DSC_AND_KL | 0/1 | - | 0xFF | - | - | - | - |
| 0x9190 | UW_QU_DSC_AND_KL | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9191 | UW_QU_DSC | 0-n | - | 0x0F | UW_QU_DSC | - | - | - |
| 0x9192 | UW_SIG_KL | 0-n | - | 0xF0 | UW_SIG_KL | - | - | - |
| 0x8820 | ECU_QUALIFIER | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x9200 | UW_ECU_QUALIFIER | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x9201 | UW_QU_DME | 0-n | high | 0x000F | UW_QU_DME | - | - | - |
| 0x9202 | UW_QU_ICM_QL | 0-n | high | 0x00F0 | UW_QU_ICM_QL | - | - | - |
| 0x9203 | UW_QU_CAS | 0-n | high | 0x0F00 | UW_QU_CAS | - | - | - |
| 0x9204 | UW_QU_DSC | 0-n | high | 0xF000 | UW_QU_DSC | - | - | - |
| 0x8821 | EE_BLOCK_ID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8822 | SCS_LINE_AND_EPB_MODE_AND_V_VALID_BITS | 0/1 | - | 0xFF | - | - | - | - |
| 0x9220 | UW_SCS_LINE_AND_EPB_MODE_AND_V_VALID_BITS | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9221 | UW_EPB_MODE | 0-n | - | 0x0F | UW_EPB_MODE | - | - | - |
| 0x9222 | UW_SCS_LINE | 0-n | - | 0x10 | UW_SCS_LINE | - | - | - |
| 0x9223 | UW_V_VALID_BITS | 0-n | - | 0xE0 | UW_V_VALID_BITS | - | - | - |
| 0x8823 | EPB_MODE_AND_ACT_STATE | 0/1 | - | 0xFF | - | - | - | - |
| 0x9230 | UW_EPB_MODE_AND_ACT_STATE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9231 | UW_EPB_MODE | 0-n | - | 0x0F | UW_EPB_MODE | - | - | - |
| 0x9232 | UW_ACT_STATE | 0-n | - | 0xF0 | UW_ACT_STATE | - | - | - |
| 0x8824 | FORCE_MO | N | - | signed char | - | 20 | 1 | 0 |
| 0x8825 | FORCE_GRADIENT | N/s | - | unsigned char | - | 100 | 1 | 0 |
| 0x8826 | ACT_STATE_AND_GLITCH | 0/1 | - | 0xFF | - | - | - | - |
| 0x9260 | UW_ACT_STATE_AND_GLITCH | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9261 | UW_ACT_STATE | 0-n | - | 0x0F | UW_ACT_STATE | - | - | - |
| 0x9262 | UW_GLITCH | 0-n | - | 0xF0 | UW_GLITCH | - | - | - |
| 0x8827 | KL15_PLAUS | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8828 | KL15_PLAUS_INFO | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8829 | LAST_APPLY_FORCE | N | - | unsigned char | - | 10 | 1 | 0 |
| 0x8830 | MASTER_DFA | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8831 | MASTER_V_BAX | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8832 | MASTER_V_VEH | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8833 | MOTOR_CURRENT | 0.1A | high | unsigned int | - | 1 | 1 | 0 |
| 0x8835 | PW_ON_TESTCASE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8836 | REASON_OF_DENIAL | 0-n | - | 0xFF | UW_REASON_OF_DENIAL | - | - | - |
| 0x8837 | RSP_TO_ACTION_AND_SV_RUB_DEBUG | 0/1 | - | 0xFF | - | - | - | - |
| 0x9370 | UW_RSP_TO_ACTION_AND_SV_RUB_DEBUG | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9371 | UW_RSP_TO_ACTION | 0-n | - | 0x0F | UW_RSP_TO_ACTION | - | - | - |
| 0x9372 | UW_SV_RUB_DEBUG | 0-n | - | 0xF0 | UW_SV_RUB_DEBUG | - | - | - |
| 0x8838 | SLAVE_V_USED_AND_DFA | 0/1 | - | 0xFF | - | - | - | - |
| 0x9380 | UW_SLAVE_V_USED_AND_DFA | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9381 | UW_SLAVE_V_USED | 0-n | - | 0x0F | UW_SLAVE_V_USED | - | - | - |
| 0x9382 | UW_SLAVE_DFA | 0-n | - | 0xF0 | UW_SLAVE_DFA | - | - | - |
| 0x8839 | V_VALID_BITS_AND_SV_RUB_DEBUG | 0/1 | - | 0xFF | - | - | - | - |
| 0x9390 | UW_V_VALID_BITS_AND_SV_RUB_DEBUG | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9391 | UW_V_VALID_BITS | 0-n | - | 0x0F | UW_V_VALID_BITS | - | - | - |
| 0x9392 | UW_SV_RUB_DEBUG | 0-n | - | 0xF0 | UW_SV_RUB_DEBUG | - | - | - |
| 0x8840 | SLAVE_V_BAX | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8841 | SLAVE_V_VEH | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x8842 | SLAVE_VER_XX | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8843 | SLAVE_VER_YY | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8844 | SLAVE_VER_ZZ | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8845 | SPI_CMD_OR_ACK | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8846 | SPI_ERR_INFO | 0-n | - | 0xFF | UW_SPI_ERR_INFO | - | - | - |
| 0x8847 | SPI_MSG_ID | 0-n | - | 0xFF | UW_SPI_MSG_ID | - | - | - |
| 0x8848 | STELL_ANF_DSC | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8849 | TASK_INFO_MASTER | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8850 | TASK_INFO_SLAVE | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8851 | TEMP_MO | °C | - | signed char | - | 1 | 1 | 0 |
| 0x8852 | V_FORCE_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8853 | V_KL15_CL | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8854 | V_KL30E_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8855 | V_KL30E_PR | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8856 | V_KL30P_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8857 | V_KL30P_PR | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8858 | V_MON_MOT | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8859 | V_TEMP_MO | mV | - | unsigned char | - | 100 | 1 | 0 |
| 0x8860 | SPI_ERR_DETAIL | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x170C | BETRIEBSSPANNUNG | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | _STATUS_STEUERGERAET | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4029 | _TEMPERATUR_STEUERGERAET | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x8870 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x8861 | BT_LMP_RDBACK_LINE | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8862 | BT_LMP_INFO | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8863 | SLAVE_IND_STATE | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8864 | SLAVE_IND_DEBUG | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8865 | HYDRAULIC_HOLD | DEC (unspecified) | - | unsigned char | - | 1 | 1 | 0 |
| 0x8866 | FORCE_ACTUAL | N | - | signed char | - | 20 | 1 | 0 |
| 0x8867 | ACT_STATE_AND_EPB_MODE_ACTUAL | 0/1 | - | 0xFF | - | - | - | - |
| 0x9670 | UW_ACT_STATE_AND_EPB_MODE_ACTUAL | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x9671 | UW_ACT_STATE_ACTUAL | 0-n | - | 0xF0 | UW_ACT_STATE | - | - | - |
| 0x9672 | UW_EPB_MODE_ACTUAL | 0-n | - | 0x0F | UW_EPB_MODE | - | - | - |
| 0x8868 | FORCE_STORED_MO | N | - | signed char | - | 20 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMF_SW_VERSION_SLAVE | 0xD80E | STAT_SW_VERSION_SLAVE_WERT | Auslesen Softwareversion Slave | - | - | high | data[3] | - | - | - | - | - | 22 | - | - |
| EMF_MONTAGE_MODE | 0xD80F | - | Auslesen und Vorgeben Montagemodus (Sperrung Bedienung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD80F | RES_0xD80F |
| EMF_KLEMMEN | 0xD801 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD801 |
| EMF_RESET_FASTA | 0xA800 | - | Rücksetzen Lerndaten FASTA | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EMF_TASTER | 0xD80D | - | Auslesen Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80D |
| EMF_LERNDATEN_TASTER | 0xD808 | - | Auslesen Lerndaten Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD808 |
| EMF_KRAFTSENSOR | 0xD803 | - | Auslesen Kraftsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD803 |
| EMF_MONTAGE_POSITION | 0xA801 | - | Anfahren Montageposition | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EMF_FESTSTELLKRAFT | 0xD802 | - | Auslesen Feststellkraft | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD802 |
| EMF_AKTUATOR | 0xD800 | - | Auslesen Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD800 |
| DFAEMF | 0xD806 | - | Auslesen Bereich Geschwindigkeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD806 |
| EMF_LERNDATEN_AKTUATOR | 0xD80A | - | Auslesen Lerndaten Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80A |

### UW_ACT_STATE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: e_ST_APPLIED |
| 0x01 | 0x01: e_ST_DURING_APPLY |
| 0x02 | 0x02: e_ST_RELEASED |
| 0x03 | 0x03: e_ST_DURING_RELEASE |
| 0x04 | 0x04: e_ST_REAPPLIED |
| 0x05 | 0x05: e_ST_DURING_REAPPLY |
| 0x06 | 0x06: e_ST_MOUNTING_POS |
| 0x07 | 0x07: e_ST_DURING_RELEASE_TO_MOUNTING_POS |
| 0x08 | 0x08: e_ST_APPLIED_WITH_EINBREMSKRAFT |
| 0x09 | 0x09: e_ST_UNDEFINED |
| 0x0A | 0x0A: e_ST_REL_TO_MOUNT_POS_REQ |
| 0x0B | 0x0B: e_ST_DURING_APPLY_WITH_EINBREMSKRAFT |
| 0x0C | 0x0C: e_ST_ACT_STATE_LAST_ENUM_ELEMENT |
| 0xXY | out of range |

### UW_CTRL_STATE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: e_ST_INIT |
| 0x10 | 0x01: e_ST_IDLE |
| 0x20 | 0x02: e_ST_APPLY_WAIT_RELAY |
| 0x30 | 0x03: e_ST_APPLY |
| 0x40 | 0x04: e_ST_RELEASE_WAIT_RELAY |
| 0x50 | 0x05: e_ST_RELEASE |
| 0x60 | 0x06: e_ST_WAIT_MOTOR_STOP |
| 0x70 | 0x07: e_ST_CALIBRATION |
| 0x80 | 0x08: e_ST_BOOST_APPLY |
| 0x90 | 0x09: e_ST_HARDWARE_TEST |
| 0xA0 | 0x0A: e_ST_FORCE_PLAUS |
| 0xXY | out of range |

### UW_APPLY_PERMISSION

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: Not allowed |
| 0x01 | 0x01: Allowed |

### UW_MOVE_PERMISSION

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: e_MoveAllowed |
| 0x02 | 0x01: e_MoveEnd |
| 0x03 | 0x02: e_MoveStop |
| 0xXY | undefined |

### UW_QU_DSC

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0b0000: Zustand Initialisierung |
| 0x01 | 0b0001: Zustand Normalbetrieb |
| 0x02 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x03 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x04 | 0b0100: Zustand Diagnose |
| 0x05 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x06 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x07 | 0b0111: Zustand Powerdown |
| 0x08 | 0b1000: Zustand PowerSave |
| 0x09 | 0b1001: Zustand Nicht verfügbar |
| 0x0A | 0b1010: Zustand Reset |
| 0x0B | 0b1011: Zustand Reserviert 11 |
| 0x0C | 0b1100: Zustand Reserviert 12 |
| 0x0D | 0b1101: Zustand Reserviert 13 |
| 0x0E | 0b1110: Zustand Reserviert 14 |
| 0x0F | 0b1111: Signal ungültig |
| 0x10 | 0b0001: Zustand Normalbetrieb |
| 0x20 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x30 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x40 | 0b0100: Zustand Diagnose |
| 0x50 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x60 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x70 | 0b0111: Zustand Powerdown |
| 0x80 | 0b1000: Zustand PowerSave |
| 0x90 | 0b1001: Zustand Nicht verfügbar |
| 0xA0 | 0b1010: Zustand Reset |
| 0xB0 | 0b1011: Zustand Reserviert 11 |
| 0xC0 | 0b1100: Zustand Reserviert 12 |
| 0xD0 | 0b1101: Zustand Reserviert 13 |
| 0xE0 | 0b1110: Zustand Reserviert 14 |
| 0xF0 | 0b1111: Signal ungültig |
| 0xXY | out of range |

### UW_SIG_KL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: Init |
| 0x01 | 0x01: Reserved |
| 0x02 | 0x02: KL30 (all clamps off) |
| 0x03 | 0x03: KL30F-Change |
| 0x04 | 0x04: KL30F-On |
| 0x05 | 0x05: KL30B-Change |
| 0x06 | 0x06: KL30B-On |
| 0x07 | 0x07: KLR-Change |
| 0x08 | 0x08: KLR-On |
| 0x09 | 0x09: KL15-Change |
| 0x0A | 0x0A: KL15-On |
| 0x0B | 0x0B: KL50-Delay (comfort start active) |
| 0x0C | 0x0C: KL50-Change |
| 0x0D | 0x0D: KL50-On |
| 0x0E | 0x0E: Failure |
| 0x0F | 0x0F: Signal Invalid |
| 0x10 | 0x01: Reserved |
| 0x20 | 0x02: KL30 (all clamps off) |
| 0x30 | 0x03: KL30F-Change |
| 0x40 | 0x04: KL30F-On |
| 0x50 | 0x05: KL30B-Change |
| 0x60 | 0x06: KL30B-On |
| 0x70 | 0x07: KLR-Change |
| 0x80 | 0x08: KLR-On |
| 0x90 | 0x09: KL15-Change |
| 0xA0 | 0x0A: KL15-On |
| 0xB0 | 0x0B: KL50-Delay (comfort start active) |
| 0xC0 | 0x0C: KL50-Change |
| 0xD0 | 0x0D: KL50-On |
| 0xE0 | 0x0E: Failure |
| 0xF0 | 0x0F: Signal Invalid |
| 0xXY | out of range |

### UW_QU_DME

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0b0000: Zustand Initialisierung |
| 0x01 | 0b0001: Zustand Normalbetrieb |
| 0x02 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x03 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x04 | 0b0100: Zustand Diagnose |
| 0x05 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x06 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x07 | 0b0111: Zustand Powerdown |
| 0x08 | 0b1000: Zustand PowerSave |
| 0x09 | 0b1001: Zustand Nicht verfügbar |
| 0x0A | 0b1010: Zustand Reset |
| 0x0B | 0b1011: Zustand Reserviert 11 |
| 0x0C | 0b1100: Zustand Reserviert 12 |
| 0x0D | 0b1101: Zustand Reserviert 13 |
| 0x0E | 0b1110: Zustand Reserviert 14 |
| 0x0F | 0b1111: Signal ungültig |
| 0x10 | 0b0001: Zustand Normalbetrieb |
| 0x20 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x30 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x40 | 0b0100: Zustand Diagnose |
| 0x50 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x60 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x70 | 0b0111: Zustand Powerdown |
| 0x80 | 0b1000: Zustand PowerSave |
| 0x90 | 0b1001: Zustand Nicht verfügbar |
| 0xA0 | 0b1010: Zustand Reset |
| 0xB0 | 0b1011: Zustand Reserviert 11 |
| 0xC0 | 0b1100: Zustand Reserviert 12 |
| 0xD0 | 0b1101: Zustand Reserviert 13 |
| 0xE0 | 0b1110: Zustand Reserviert 14 |
| 0xF0 | 0b1111: Signal ungültig |
| 0xXY | out of range |

### UW_QU_ICM_QL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0b0000: Zustand Initialisierung |
| 0x01 | 0b0001: Zustand Normalbetrieb |
| 0x02 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x03 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x04 | 0b0100: Zustand Diagnose |
| 0x05 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x06 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x07 | 0b0111: Zustand Powerdown |
| 0x08 | 0b1000: Zustand PowerSave |
| 0x09 | 0b1001: Zustand Nicht verfügbar |
| 0x0A | 0b1010: Zustand Reset |
| 0x0B | 0b1011: Zustand Reserviert 11 |
| 0x0C | 0b1100: Zustand Reserviert 12 |
| 0x0D | 0b1101: Zustand Reserviert 13 |
| 0x0E | 0b1110: Zustand Reserviert 14 |
| 0x0F | 0b1111: Signal ungültig |
| 0x10 | 0b0001: Zustand Normalbetrieb |
| 0x20 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x30 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x40 | 0b0100: Zustand Diagnose |
| 0x50 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x60 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x70 | 0b0111: Zustand Powerdown |
| 0x80 | 0b1000: Zustand PowerSave |
| 0x90 | 0b1001: Zustand Nicht verfügbar |
| 0xA0 | 0b1010: Zustand Reset |
| 0xB0 | 0b1011: Zustand Reserviert 11 |
| 0xC0 | 0b1100: Zustand Reserviert 12 |
| 0xD0 | 0b1101: Zustand Reserviert 13 |
| 0xE0 | 0b1110: Zustand Reserviert 14 |
| 0xF0 | 0b1111: Signal ungültig |
| 0xXY | out of range |

### UW_QU_CAS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0b0000: Zustand Initialisierung |
| 0x01 | 0b0001: Zustand Normalbetrieb |
| 0x02 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x03 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x04 | 0b0100: Zustand Diagnose |
| 0x05 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x06 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x07 | 0b0111: Zustand Powerdown |
| 0x08 | 0b1000: Zustand PowerSave |
| 0x09 | 0b1001: Zustand Nicht verfügbar |
| 0x0A | 0b1010: Zustand Reset |
| 0x0B | 0b1011: Zustand Reserviert 11 |
| 0x0C | 0b1100: Zustand Reserviert 12 |
| 0x0D | 0b1101: Zustand Reserviert 13 |
| 0x0E | 0b1110: Zustand Reserviert 14 |
| 0x0F | 0b1111: Signal ungültig |
| 0x10 | 0b0001: Zustand Normalbetrieb |
| 0x20 | 0b0010: Zustand Normalbetrieb / Überspannung sensiert |
| 0x30 | 0b0011: Zustand Normalbetrieb / Unterspannung sensiert |
| 0x40 | 0b0100: Zustand Diagnose |
| 0x50 | 0b0101: Zustand Diagnose / Überspannung sensiert |
| 0x60 | 0b0110: Zustand Diagnose / Unterspannung sensiert |
| 0x70 | 0b0111: Zustand Powerdown |
| 0x80 | 0b1000: Zustand PowerSave |
| 0x90 | 0b1001: Zustand Nicht verfügbar |
| 0xA0 | 0b1010: Zustand Reset |
| 0xB0 | 0b1011: Zustand Reserviert 11 |
| 0xC0 | 0b1100: Zustand Reserviert 12 |
| 0xD0 | 0b1101: Zustand Reserviert 13 |
| 0xE0 | 0b1110: Zustand Reserviert 14 |
| 0xF0 | 0b1111: Signal ungültig |
| 0xXY | out of range |

### UW_EPB_MODE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: e_NORMAL_MODE |
| 0x01 | 0x01: e_NORMAL_MODE_NON_ACTIVE |
| 0x02 | 0x02: e_NORMAL_MODE_STILLLEGUNG |
| 0x03 | 0x03: e_NORMAL_MODE_ASSEMBLY |
| 0x04 | 0x04: e_NORMAL_MODE_EMERGENCY_REL |
| 0x05 | 0x05: e_DEGRADED_MODE |
| 0x06 | 0x06: e_DEGRADED_MODE_NON_ACTIVE |
| 0x07 | 0x07: e_DEGRADED_MODE_STILLLEGUNG |
| 0x08 | 0x08: e_DEGRADED_MODE_ASSEMBLY |
| 0x09 | 0x09: e_DEGRADED_MODE_EMERGENCY_REL |
| 0x0A | 0x0A: e_RP_MODE |
| 0x10 | 0x01: e_NORMAL_MODE_NON_ACTIVE |
| 0x20 | 0x02: e_NORMAL_MODE_STILLLEGUNG |
| 0x30 | 0x03: e_NORMAL_MODE_ASSEMBLY |
| 0x40 | 0x04: e_NORMAL_MODE_EMERGENCY_REL |
| 0x50 | 0x05: e_DEGRADED_MODE |
| 0x60 | 0x06: e_DEGRADED_MODE_NON_ACTIVE |
| 0x70 | 0x07: e_DEGRADED_MODE_STILLLEGUNG |
| 0x80 | 0x08: e_DEGRADED_MODE_ASSEMBLY |
| 0x90 | 0x09: e_DEGRADED_MODE_EMERGENCY_REL |
| 0xA0 | 0x0A: e_RP_MODE |
| 0xXY | out of range |

### UW_SCS_LINE

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_V_VALID_BITS

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_GLITCH

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_RSP_TO_ACTION

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_SV_RUB_DEBUG

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_SLAVE_V_USED

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_SLAVE_DFA

| WERT | UWTEXT |
| --- | --- |
| 0xXY | unspecified |

### UW_SPI_ERR_INFO

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: SV_DTC_ERR_INFO_NONE |
| 0x01 | 0x01: SV_DTC_ERR_INFO_SEND |
| 0x02 | 0x02: SV_DTC_ERR_INFO_RECEIVE |
| 0x04 | 0x04: SV_DTC_ERR_INFO_04 |
| 0x08 | 0x08: SV_DTC_ERR_INFO_08 |
| 0x10 | 0x10: SV_DTC_ERR_INFO_CLIENT |
| 0x20 | 0x20: SV_DTC_ERR_INFO_CALLBACK |
| 0x40 | 0x40: SV_DTC_ERR_INFO_40 |
| 0x80 | 0x80: SV_DTC_ERR_INFO_EXTERN |
| 0xXY | out of range |

### UW_SPI_MSG_ID

| WERT | UWTEXT |
| --- | --- |
| 0xXY | out of range |

### UW_REASON_OF_DENIAL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0x00: Action Acknowledged |
| 0x01 | 0x01: Unknown Request |
| 0x02 | 0x02: Over Speedlimit |
| 0x03 | 0x03: Unknown Threshold |
| 0x04 | 0x04: Speed Invalid |
| 0x05 | 0x05: No Testbench |
| 0x06 | 0x06: CAN Mismatch |
| 0x07 | 0x07: Button Invalid |
| 0x08 | 0x08: Motor Status is already Applied |
| 0x09 | 0x09: Invalid Auto function in degraded mode |
| 0x0A | 0x0A: Wrong relay state |
| 0x0B | 0x0B: Retrigger Invalid |
| 0x0C | 0x0C: Invalid automatic apply |
| 0x0D | 0x0D: Invalid automatic release |
| 0x0E | 0x0E: RP Invalid |
| 0x0F | 0x0F: Not in normal mode |
| 0x10 | 0x10: Not in degraded mode |
| 0x11 | 0x11: Number of startup test calls exceeded |
| 0x12 | 0x12: Startup test time exceeded |
| 0x13 | 0x13: Wrong threshold |
| 0x14 | 0x14: PFM failure |
| 0x15 | 0x15: Button not pressed for retrigger |
| 0x16 | 0x16: Force Gradient over maximum |
| 0x17 | 0x17: CAN DIAG mismatch |
| 0x18 | 0x18: Calibrate Invalid |
| 0x19 | 0x19: Wrong motor state |
| 0xXY | out of range |

### RES_0XD80D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_EMF | 0-n | high | unsigned char | - | TAB_EMF_TASTER | - | - | - | Bedienzustand |
| STAT_TASTER_EMF_DIGITAL_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | digitaler Status Taster |
| STAT_TASTER_EMF_1_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Taster Leitung 1 |
| STAT_TASTER_EMF_2_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Taster Leitung 2 |
| STAT_TASTER_EMF_3_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Taster Leitung 3 |
| STAT_TASTER_EMF_4_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Taster Leitung 4 |
| STAT_TASTER_EMF_5_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Taster Leitung 5 |

### TAB_EMF_TASTER

| WERT | TEXT |
| --- | --- |
| 0 | neutral |
| 1 | gezogen |
| 2 | gedrueckt |
| 3 | Fehler |
| FF | undefinierter Zustand |

### RES_0XD808

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_TASTER_FESTSTELLEN_WERT | - | high | unsigned long | - | - | 1 | 1 | 0 | Anzahl Bedienung Feststellen |
| STAT_ZAEHLER_TASTER_LOESEN_WERT | - | high | unsigned long | - | - | 1 | 1 | 0 | Anzahl Bedienungen Lösen |

### RES_0XD80F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE | 0/1 | high | unsigned char | - | - | - | - | - | 1 = aktiv;  0 = nicht aktiv |

### ARG_0XD80F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = aktiv; 0 = nicht aktiv |

### RES_0XD803

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_SENSOR_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Kraftsensor |
| STAT_KRAFT_SENSOR_WERT | N | high | int | - | - | 1 | 1 | 0 | aktuelle Kraft |

### RES_0XD800

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MOTOR_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Motor |
| STAT_SPANNUNG_MOTOR_UEBERWACHUNG_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Motor Überwachung |
| STAT_STROM_MOTOR_WERT | A | high | int | - | - | 1 | 1000 | 0 | Strom Motor |

### RES_0XD802

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FESTSTELLKRAFT_IST_WERT | N | high | int | - | - | 1 | 1 | 0 | Istkraft |
| STAT_FESTSTELLKRAFT_SOLL_WERT | N | high | int | - | - | 1 | 1 | 0 | Sollkraft |
| STAT_FESTSTELLKRAFT_LETZTE_WERT | N | high | int | - | - | 1 | 1 | 0 | Letzte Feststellkraft |
| STAT_LOESEKRAFT_LETZTE_WERT | N | high | int | - | - | 1 | 1 | 0 | Letzte Lösekraft |

### RES_0XD806

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PERIODE_DFAEMF_WERT | s | high | unsigned long | - | - | 1 | 1000000 | 0 | Periodendauer |
| STAT_GESCHWINDIGKEIT_MIN_WERT | km/h | high | unsigned int | - | - | 1 | 1 | 0 | Untergrenze Geschindigkeit |
| STAT_GESCHWINDIGKEIT_MAX_WERT | km/h | high | unsigned int | - | - | 1 | 1 | 0 | Obergrenze Geschindigkeit |

### RES_0XD80A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_AKTUATOR_FESTSTELLEN_WERT | - | high | unsigned long | - | - | 1 | 1 | 0 | Anzahl Feststellen |
| STAT_ZAEHLER_AKTUATOR_NOTENTRIEGELN_WERT | - | high | unsigned int | - | - | 1 | 1 | 0 | Anzahl Notentriegelung |
| STAT_ZAEHLER_AKTUATOR_BOOST_WERT | - | high | unsigned int | - | - | 1 | 1 | 0 | Anzahl Nachstellen |
| STAT_ZAEHLER_AKTUATOR_UEBERLAST_WERT | - | high | unsigned int | - | - | 1 | 1 | 0 | Anzahl Überlast |

### RES_0XD801

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Steuergerät |
| STAT_SPANNUNG_AKUATOR_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Aktuator |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Weckleitung |

### TAB_0X8801

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9010 | 0x9011 | 0x9012 |

### TAB_0X8805

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9050 | 0x9051 | 0x9052 |

### TAB_0X8819

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9190 | 0x9191 | 0x9192 |

### TAB_0X8820

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x9200 | 0x9201 | 0x9202 | 0x9203 | 0x9204 |

### TAB_0X8822

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x9220 | 0x9221 | 0x9222 | 0x9223 |

### TAB_0X8823

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9230 | 0x9231 | 0x9232 |

### TAB_0X8826

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9260 | 0x9261 | 0x9262 |

### TAB_0X8837

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9370 | 0x9371 | 0x9372 |

### TAB_0X8838

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9380 | 0x9381 | 0x9382 |

### TAB_0X8839

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9390 | 0x9391 | 0x9392 |

### DAT_0X4001

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STAT_STEUERGERAET | - | - | - | 0-n | high | unsigned char | - | E_STATUS_ECU | - | - | - | - | - | - |

### DAT_0X4029

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STAT_TEMP_SG_WERT_WERT | - | - | - | °C | high | unsigned char | - | - | 5 | 10 | -40 | - | - | - |

### DAT_0X402D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FESTSTELLKRAFT_IST_WERT | - | - | - | N | high | int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_FESTSTELLKRAFT_SOLL_WERT | - | - | - | N | high | int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_FESTSTELLKRAFT_LETZTE_WERT | - | - | - | N | high | int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_LOESEKRAFT_LETZTE_WERT | - | - | - | N | high | int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X402E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_TASTER_FESTSTELLEN_WERT | - | - | - | - | high | unsigned long | - | - | 1 | 1 | 0 | - | - | - |
| STAT_ZAEHLER_TASTER_LOESEN_WERT | - | - | - | - | high | unsigned long | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X402F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_AKTUATOR_FESTSTELLEN_WERT | - | - | - | - | high | unsigned long | - | - | 1 | 1 | 0 | - | - | - |
| STAT_ZAEHLER_AKTUATOR_NOTENTRIEGELN_WERT | - | - | - | - | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_ZAEHLER_AKTUATOR_BOOST_WERT | - | - | - | - | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_ZAEHLER_AKTUATOR_UEBERLAST_WERT | - | - | - | - | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4030

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_DEGRADIERUNG_WERT | - | - | - | - | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_ZAEHLER_KEIN_FESTSTELLEN_WERT | - | - | - | - | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4031

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_EMF | - | - | - | 0-n | high | unsigned char | - | E_TASTER_EMF | - | - | - | - | - | - |
| STAT_TASTER_EMF_DIGITAL_WERT | - | - | - | - | high | unsigned char | - | - | 1 | 1 | 0 | - | - | - |
| STAT_TASTER_EMF_1_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_TASTER_EMF_2_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_TASTER_EMF_3_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_TASTER_EMF_4_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_TASTER_EMF_5_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4034

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KRAFTSENSOR_AD_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_KRAFTSENSOR_WERT | - | - | - | N | high | int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4035

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MOTOR_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_SPANNUNG_MOTOR_UEBERWACHUNG_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_STROM_MOTOR_WERT | - | - | - | mA | high | int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4036

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_VERSORGUNG_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_SPANNUNG_AKUATOR_VERSORGUNG_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_SPANNUNG_WECKLEITUNG_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4037

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PERIODE_DFAEMF_WERT | - | - | - | s | high | unsigned long | - | - | 1 | 1000000 | 0 | - | - | - |
| STAT_GESCHWINDIGKEIT_MIN_WERT | - | - | - | km/h | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |
| STAT_GESCHWINDIGKEIT_MAX_WERT | - | - | - | km/h | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X4038

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_VERSION_SLAVE_WERT | - | - | - | - | high | data[3] | - | - | - | - | - | - | - | - |

### DAT_0X4100

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE | - | - | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | - |

### DAT_0XF190

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_WERT | - | - | - | - | high | string[17] | - | - | - | - | - | - | - | - |

### DAT_0X1701

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMZEIT_WERT | - | - | - | s | high | unsigned long | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X1703

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DM_DTC_ZEIT_WERT | - | - | - | s | high | unsigned long | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X170C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UBAT_WERT | - | - | - | mV | high | unsigned int | - | - | 1 | 1 | 0 | - | - | - |

### DAT_0X1727

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | - | - | - | °C | high | unsigned char | - | - | 5 | 10 | -40 | - | - | - |

### DAT_0X1728

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_FAHRZEUG_FZM_WERT | - | - | - | - | high | - | - | - | - | - | - | - | - | - |

### E_STATUS_ECU

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Normalbetrieb |
| 0x02 | Normalbetrieb/Überspannung |
| 0x03 | Normalbetrieb/Unterspannung |
| 0x04 | Diagnose |
| 0x05 | Diagnose/Überspannung |
| 0x06 | Diagnose/Unterspannung |
| 0x07 | PowerDown |
| 0x08 | PowerSave |
| 0x09 | Nicht verfügbar |
| 0x0A | Reset |
| 0x0B | Reserviert 11 |
| 0x0C | Reserviert 12 |
| 0x0D | Reserviert 13 |
| 0x0E | Reserviert 14 |
| 0x0F | ungültig |

### TAB_0X8867

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x9670 | 0x9671 | 0x9672 |

### SPEICHER_SEGMENT

| WERT | SEG_NAME | COMMENT |
| --- | --- | --- |
| 0x03 | EEPROM | Speichertyp EEPROM intern |
| 0x04 | RAMI | Speichertyp RAM intern |
| 0x05 | SLAVE_UC | Speichertyp memory of slave mC |
| 0x06 | ROMI | Speichertyp ROM/FLASH intern |
| 0x07 | UIF | logischer Speichertyp UIF |
| 0x09 | EEPROM_EXT | Speichertyp EEPROM extern |
| 0xFF | HIDDEN | not readable by UDS service |
