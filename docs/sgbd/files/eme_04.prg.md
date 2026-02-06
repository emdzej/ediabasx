# eme_04.prg

## General

|  |  |
| --- | --- |
| File | eme_04.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 167 |
| Origin | BMW EA-412 Roland_Koeppl |
| Revision | 8.012 |
| Author | CAS DHS-F Joerg_Scheiner, CAS DHS-F Sven_Kasner, BMW EA-412 Jos |
| ECU Comment | Für I-Stufe 11-03-500 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Maschine Elektronik Hybrid Gen. 1.5 |  |  |
| ORIGIN | string | BMW EA-412 Roland_Koeppl |  |  |
| REVISION | string | 8.012 |  |  |
| AUTHOR | string | CAS DHS-F Joerg_Scheiner, CAS DHS-F Sven_Kasner, BMW EA-412 Jos |  |  |
| COMMENT | string | Für I-Stufe 11-03-500 |  |  |
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

### _SPEICHER_LESEN_ASCII

0x23 _SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n (4095) |

### _RDBA_RCM

0x23 ReadDataByAdress: Reset Cause Monitoring Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 Diagnose Mode: ECUExtendedDiagnosticSession

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |

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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021A00 | Energiesparmode aktiv | 0 |
| 0x02FF1A | Dummy-DTC: Applikationsfehler zum Testen | 0 |
| 0x21EE00 | Interlock Leitung unterbrochen | 0 |
| 0x21EE01 | Interlock Leitung: Kurzschluss auf Versorgung 12V | 0 |
| 0x21EE02 | Interlock Leitung: Kurzschluss nach Masse | 0 |
| 0x21EE03 | EME, interner Fehler, CPLD: CPLD-Update fehlgeschlagen - bitte erneut durchführen | 0 |
| 0x21EE04 | EME, interner Fehler, CY320: 3,3V Referenz defekt | 0 |
| 0x21EE05 | EME, interner Fehler, CY320: 5V Referenz defekt | 0 |
| 0x21EE06 | Interlock Leitung: Allgemeiner Fehler | 0 |
| 0x21EE07 | Interlock Leitung: Durchführungsfehler | 0 |
| 0x21EE08 | Leistungselektronik Pulswechselrichter: Phase U unterbrochen | 0 |
| 0x21EE09 | Leistungselektronik Pulswechselrichter: Phase V unterbrochen | 0 |
| 0x21EE0A | Leistungselektronik Pulswechselrichter: Phase W unterbrochen | 0 |
| 0x21EE10 | EME, Klemme 50: Wert unplausibel | 0 |
| 0x21EE13 | EME, interner Fehler, DC/DC: Betrieb gestört | 0 |
| 0x21EE18 | EME, interner Fehler: ROM-Initialisierung fehlgeschlagen | 0 |
| 0x21EE19 | EME, interner Fehler: ROM-Fehler im Betrieb | 0 |
| 0x21EE1A | EME, interner Fehler: RAM-Initialisierung fehlgeschlagen | 0 |
| 0x21EE1B | EME, interner Fehler: RAM-Fehler im Betrieb | 0 |
| 0x21EE1C | EME, interner Fehler: EEPROM defekt | 0 |
| 0x21EE1D | EME, interner Fehler: CPLD defekt (Registerinhalt falsch) | 0 |
| 0x21EE20 | EME, interner Fehler A/D-Wandler: Spannungswert gegenüber der Referenz des CY320 unplausibel | 0 |
| 0x21EE29 | EME, interner Fehler Ebene 3 A/D-Wandler Strom Phase U: Spannungswert gegenüber der Referenz des CY320 unplausibel | 0 |
| 0x21EE2A | EME, interner Fehler Ebene 3 A/D-Wandler Strom Phase V: Spannungswert gegenüber der Referenz des CY320 unplausibel | 0 |
| 0x21EE2B | EME, interner Fehler Ebene 3 A/D-Wandler Position Sinus: Spannungswert gegenüber der Referenz des CY320 unplausibel | 0 |
| 0x21EE2C | EME, interner Fehler, CPLD: Taktgeber defekt | 0 |
| 0x21EE2D | EME, interner Fehler Ebene 3 A/D-Wandler Position Cosinus: Spannungswert gegenüber der Referenz des CY320 unplausibel | 0 |
| 0x21EE2E | EME, interner Fehler, E-Maschinenregelung, Parametersatz: Daten fehlerhaft (ZFS) | 0 |
| 0x21EE30 | EME, Versorgungsspannung: Spannung zu hoch / interner Sensor defekt | 0 |
| 0x21EE32 | EME, Versorgungsspannung: Spannung zu niedrig / interner Sensor defekt / Masseanschluss fehlt | 0 |
| 0x21EE33 | EME, Hochvoltversorgtes Schaltnetzteil: Netzteil defekt | 0 |
| 0x21EE36 | EME, interner Fehler, DC/DC-Wandler, Snubber Netzteil | 0 |
| 0x21EE38 | EME, interner Fehler, DC/DC-Wandler, Leistungshalbleiter: Spannungsversorgung defekt | 0 |
| 0x21EE39 | EME, interner Fehler, DC/DC-Wandler, Leistungshalbleiter: HW-Initialisierungsfehler Versorgungsspannung | 0 |
| 0x21EE3B | EME, interner Fehler, DC/DC-Wandler: HW-Initialisierungsfehler Analogkomparator | 0 |
| 0x21EE3D | EME, interner Fehler, DC/DC-Wandler, Temperatursensor: Hardware defekt (Temperatur über Messbereich) | 0 |
| 0x21EE3E | EME, interner Fehler, DC/DC-Wandler, Temperatursensor, Wertebereichsüberschreitung: Obere Schwelle | 0 |
| 0x21EE3F | EME, interner Fehler, DC/DC-Wandler: Taktgenerator defekt | 0 |
| 0x21EE40 | EME, interner Fehler, DC/DC-Wandler: Watchdog defekt | 0 |
| 0x21EE41 | EME, interner Fehler, DC/DC-Wandler: Fehler bei Initialisierung Tiefsetzstellerbetrieb | 0 |
| 0x21EE42 | EME, interner Fehler, DC/DC-Wandler: Fehler bei Initialisierung Hochsetzstellerbetrieb | 0 |
| 0x21EE44 | EME, interner Fehler, DC/DC-Wandler, Phasenmodulation: Notaus | 0 |
| 0x21EE46 | EME, interner Fehler, DC/DC-Wandler, Phasenmodulation: PWM-Signal ungültig | 0 |
| 0x21EE47 | EME, interner Fehler, DC/DC-Wandler, Phasenmodulation: Watchdog-Fehler | 0 |
| 0x21EE48 | EME, interner Fehler, DC/DC-Wandler: Löschen des PowerFail-Bits fehlgeschlagen | 0 |
| 0x21EE4B | EME, interner Fehler, DC/DC-Wandler, Fehlerstatussignal: Initialisierung der HW fehlgeschlagen | 0 |
| 0x21EE4C | EME, interner Fehler, DC/DC-Wandler:  Allgemeiner SPI-Kommunikationsfehler | 0 |
| 0x21EE4D | EME, interner Fehler, DC/DC-Wandler:  Allgemeiner HW-Deinitialisierungsfehler | 0 |
| 0x21EE53 | EME, interner Fehler, DC/DC-Wandler, Überspannung an Schaltnetzteil | 0 |
| 0x21EE54 | EME, DC/DC, Zwischenkreisspannung im Tiefsetzbetrieb: Wert über 1. Spannungsschwelle (SW) | 0 |
| 0x21EE55 | EME, DC/DC, Zwischenkreisspannung, Überspannungsschutz: Wert über Spannungsschwelle (HW) | 0 |
| 0x21EE56 | EME, DC/DC, Zwischenkreisspannung im Tiefsetzbetrieb: Wert unter Spannungsschwelle (SW) | 0 |
| 0x21EE59 | EME, DC/DC, Zwischenkreisspannung im Hochsetzbetrieb: Wert über Spannungsschwelle (SW) | 0 |
| 0x21EE5A | EME, DC/DC, Zwischenkreisspannung im Hochsetzbetrieb: Wert unter Spannungsschwelle (SW) | 0 |
| 0x21EE5B | EME, DC/DC, Bordnetzstrom im Tiefsetzbetrieb: Wert über Stromschwelle (SW) | 0 |
| 0x21EE5C | EME, DC/DC, Bordnetzstrom: Wert über Stromschwelle (HW) | 0 |
| 0x21EE5D | EME, DC/DC, Bordnetzspannung: Wert über Spannungsschwelle (HW) | 0 |
| 0x21EE5E | EME, DC/DC, Bordnetzspannung: Wert unter  Spannungsschwelle (SW) | 0 |
| 0x21EE5F | EME, DC/DC, Bordnetzspannung: Wert unplausibel | 0 |
| 0x21EE60 | EME, DC/DC, Bordnetzstrom: Wert unplausibel | 0 |
| 0x21EE61 | EME, DC/DC, Bordnetzstrom im Hochsetzbetrieb: Wert über Stromschwelle (SW) | 0 |
| 0x21EE62 | EME, DC/DC, Bordnetzspannung im Hochsetzbetrieb: Wert über Spannungsschwelle (SW) | 0 |
| 0x21EE63 | EME, DC/DC, Bordnetzspannung im Tiefsetzbetrieb: Wert über Spannungsschwelle (SW) | 0 |
| 0x21EE64 | EME, interner Fehler, DC/DC: Zeitüberschreitung bei Konfiguration des Tiefsetzbetriebs | 0 |
| 0x21EE65 | EME, interner Fehler, DC/DC: Zeitüberschreitung bei Konfiguration des Hochsetzbetriebs | 0 |
| 0x21EE66 | EME, interner Fehler, DC/DC: Zeitüberschreitung bei Konfiguration des Passivbetriebs | 0 |
| 0x21EE6A | EME, interner Fehler, DC/DC, Hochsetzbetrieb: Massebanderkennung fehlgeschlagen | 0 |
| 0x21EE6B | EME, interner Fehler, DC/DC, Tiefsetzbetrieb: Massebanderkennung fehlgeschlagen | 0 |
| 0x21EE6C | EME, interner Fehler, DC/DC-Wandler, PowerUp fehlgeschlagen | 0 |
| 0x21EE6D | EME, interner Fehler, DC/DC-Wandler, HW-Initialisierung: Voraussetzung nicht erfüllt | 0 |
| 0x21EE6E | EME, interner Fehler, DC/DC-Wandler, Temperatursensor Leistungsstufe Hochvolt: Wert unplausibel | 0 |
| 0x21EE6F | EME, interner Fehler, DC/DC-Wandler, Temperatursensor Leistungsstufe Niedervolt: Wert unplausibel | 0 |
| 0x21EE70 | EME, interner Fehler, DC/DC-Wandler, Temperatursensor Transformator: Wert unplausibel | 0 |
| 0x21EE72 | EME, interner Fehler, DC/DC: Sammelfehler der Klasse 1 | 0 |
| 0x21EE73 | EME, interner Fehler, DC/DC: Sammelfehler der Klasse 2 | 0 |
| 0x21EE74 | EME, interner Fehler, DC/DC: Sammelfehler der Klasse 3 | 0 |
| 0x21EE80 | EME, Stromplausibilisierung der drei Phasen: Summe der Phasenströme außerhalb des erlaubten Bereichs | 0 |
| 0x21EE88 | EME, interner Fehler, Ebene 2: Summe der Phasenströme außerhalb des erlaubten Bereichs. | 0 |
| 0x21EE89 | EME, interner Fehler, Ebene 2: ADCReady-Interrupt-Zähler hat zu hohen oder niedrigen Wert | 0 |
| 0x21EE8B | EME, interner Fehler, Ebene 2: Snapshot-Zähler hat zu hohen oder niedrigen Wert | 0 |
| 0x21EE8D | EME, interner Fehler, Ebene 2:  Vergleicher, der Iq aus Ebene 1 und Ebene 2 vergleicht, schlägt an | 0 |
| 0x21EE8E | EME, interner Fehler, Ebene 2:  Vergleicher, der den gefilterten Iq aus Ebene 1 und Ebene 2 vergleicht, schlägt an | 0 |
| 0x21EE8F | EME, interner Fehler, Ebene 2: Vergleicher, der das Ist-Moment aus Ebene 1 und Ebene 2 vergleicht, schlägt an | 0 |
| 0x21EE90 | EME, interner Fehler, Ebene 2: Vergleicher, der das Ist-Moment aus Ebene 2  mit dem zulässigen E2-Moment vergleicht, schlägt an | 0 |
| 0x21EE91 | EME, interner Fehler, Ebene 2: Winkelplausibilisierung fehlgeschlagen | 0 |
| 0x21EE92 | EME, interner Fehler, Ebene 2: Drehzahlplausibilisierung fehlgeschlagen | 0 |
| 0x21EE93 | EME, interner Fehler, Ebene 2: Programmablauffehler | 0 |
| 0x21EE94 | EME, interner Fehler, Ebene 2: Redundante Datenablage ist nicht konsistent (ZFS) | 0 |
| 0x21EE98 | EME, interner Fehler, Ebene 2: Deaktivierung des OEM-Moduls | 0 |
| 0x21EE99 | EME, interner Fehler, Ebene 2: Ermittelter e-Offset außerhalb der Toleranz | 0 |
| 0x21EE9A | EME, interner Fehler, Ebene 2, Notlauf-Anforderung: Unterschied Level 1 und Level 2 | 0 |
| 0x21EE9B | EME, interner Fehler, Ebene 2: Redundante Datenablage ist nicht konsistent (CAS) | 0 |
| 0x21EE9C | EME, interner Fehler, Ebene 2: Sensorwerte der Phasen U, V oder W außerhalb des gültigen Bereiches | 0 |
| 0x21EE9D | EME, interner Fehler, Ebene 2: Resetursachenermittlung konnte nicht aus dem EEPROM lesen | 0 |
| 0x21EE9E | EME, interner Fehler, Ebene 2: Resetursachenermittlung konnte die Überwachungsmodul-Resetinformationen nicht lesen | 0 |
| 0x21EEA0 | EME, interner Fehler, Ebene 3: die maximales Resetanzahl eines spezifischen Fehlers erreicht | 0 |
| 0x21EEA1 | EME, interner Fehler, Ebene 3: Reset durch externes Überwachungsmodul | 0 |
| 0x21EEA8 | EME, interner Fehler, Ebene 2:  Watchdog CY320 kann nicht konfiguriert werden | 0 |
| 0x21EEA9 | EME, interner Fehler, Ebene 2:  Fehlerzähler des Überwachungsmoduls ist größer 4 | 0 |
| 0x21EEAA | EME, interner Fehler, Ebene 2:  Fehlerzähler des Überwachungsmoduls verändert sich trotz Fehler nicht | 0 |
| 0x21EEAB | EME, interner Fehler, Ebene 2:  Abschaltpfad (z.B. AKS) nicht aktiv, obwohl das Frage-Antwort-Verfahren im Tabellenmodus läuft | 0 |
| 0x21EEAC | EME, interner Fehler, Ebene 2: BMW Layerout Daten nicht konsistent | 0 |
| 0x21EEAD | EME, Ebene 2: Interlock Signal fehlerhaft | 0 |
| 0x21EEC0 | EME, interner Fehler, Temperatursensor der Kontrollleiterplatine: Wert unplausibel | 0 |
| 0x21EEC1 | EME, interner Fehler, Temperatursensor der Kontrollleiterplatine, Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EEC2 | EME, interner Fehler, Temperatursensor der Kontrollleiterplatine, Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EEC4 | Externer Temperatursensor E-Maschine Signal: Wert unplausibel | 0 |
| 0x21EEC5 | Externer Temperatursensor E-Maschine Signal Wertebereichsverletzung : Untere Schwelle | 0 |
| 0x21EEC6 | Externer Temperatursensor E-Maschine Signal Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EEC9 | EME, interner Fehler, Temperatursensor Leistungselektronik, Pulswechselrichter, Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EECA | EME, interner Fehler, Temperatursensor Leistungselektronik, Pulswechselrichter, Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF00 | Externer Rotorlagesensor Sinussignal: Wert unplausibel | 0 |
| 0x21EF01 | Externer Rotorlagesensor Sinussignal Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EF02 | Externer Rotorlagesensor Sinussignal Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF03 | Externer Rotorlagesensor Cosinussignal: Wert unplausibel | 0 |
| 0x21EF04 | Externer Rotorlagesensor Cosinussignal Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EF05 | Externer Rotorlagesensor Cosinussignal Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF08 | Interne EME Temperatur Kontrollleiterplatte: Obere Temperaturschwelle überschritten | 0 |
| 0x21EF09 | Interne EME-Temperatur Leistungselektronik Pulswechselrichter: Obere Temperaturschwelle überschritten | 0 |
| 0x21EF0B | Interne EME-Temperatur Leistungselektronik Pulswechselrichter: 2. Temperaturschwelle (Leistungsbegrenzung) überschritten | 0 |
| 0x21EF0C | EME, interner Fehler, Stromsensor Leistungselektronik, Pulswechselrichter, Wertebereichsverletzung: Ebene 1 | 0 |
| 0x21EF0D | EME, interner Fehler, Stromsensor Leistungselektronik, Pulswechselrichter, Wertebereichsverletzung: Ebene 2 | 0 |
| 0x21EF0E | Interne EME-Temperatur DC/DC-Wandler Trafo: Obere Temperaturschwelle überschritten | 0 |
| 0x21EF0F | Interne EME-Temperatur Leistungselektronik Pulswechselrichter: Temperaturgradient steigt zu stark | 0 |
| 0x21EF10 | EME, Stromsensor Phase U: Überstrom oder Sensor defekt | 0 |
| 0x21EF11 | EME, interner Fehler, Stromsensor Phase U: Wert unplausibel | 0 |
| 0x21EF12 | EME, interner Fehler, Stromsensor Phase U, Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EF13 | EME, interner Fehler, Stromsensor Phase U, Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF15 | EME, interner Fehler, Stromsensor Phase U: Offset ausserhalb gültigen Bereichs (Ebene 1) | 0 |
| 0x21EF16 | EME, interner Fehler, Stromsensor Phase U,V oder W: Offset ausserhalb gültigen Bereichs (Ebene 2) | 0 |
| 0x21EF18 | EME, Stromsensor Phase V: Überstrom oder Sensor defekt | 0 |
| 0x21EF19 | EME, interner Fehler, Stromsensor Phase V: Wert unplausibel | 0 |
| 0x21EF1A | EME, interner Fehler, Stromsensor Phase V, Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EF1B | EME, interner Fehler, Stromsensor Phase V, Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF1D | EME, interner Fehler, Stromsensor Phase V: Offset ausserhalb gültigen Bereichs (Ebene 1) | 0 |
| 0x21EF20 | EME, Stromsensor Phase W: Überstrom oder Sensor defekt | 0 |
| 0x21EF21 | EME, interner Fehler, Stromsensor Phase W: Wert unplausibel | 0 |
| 0x21EF22 | EME, interner Fehler, Stromsensor Phase W, Wertebereichsverletzung: Untere Schwelle | 0 |
| 0x21EF23 | EME, interner Fehler, Stromsensor Phase W, Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF25 | EME, interner Fehler, Stromsensor Phase W: Offset ausserhalb gültigen Bereichs (Ebene 1) | 0 |
| 0x21EF30 | EME, Phase U: Leistungsendstufe Lowside defekt oder Leitungsschluss | 0 |
| 0x21EF31 | EME, Phase V: Leistungsendstufe Lowside defekt oder Leitungsschluss | 0 |
| 0x21EF32 | EME, Phase W: Leistungsendstufe Lowside defekt oder Leitungsschluss | 0 |
| 0x21EF33 | EME, Phase U: Leistungsendstufe Highside defekt oder Leitungsschluss | 0 |
| 0x21EF34 | EME, Phase V: Leistungsendstufe Highside defekt oder Leitungsschluss | 0 |
| 0x21EF35 | EME, Phase W: Leistungsendstufe Highside defekt oder Leitungsschluss | 0 |
| 0x21EF38 | EME, interner Fehler, interne Spannungsversorgung: 5V Schaltnetzteil Lowside defekt | 0 |
| 0x21EF39 | EME, interner Fehler, interne Spannungsversorgung: 5V Schaltnetzteil Highside defekt | 0 |
| 0x21EF3A | EME, interner Fehler, interne Spannungsversorgung: 15V Schaltnetzteil Highside defekt | 0 |
| 0x21EF40 | EME, E-Maschinenregelung, E-Maschine: Ermittelter e-Offset außerhalb der Toleranz | 0 |
| 0x21EF41 | EME, E-Maschinenregelung, E-Maschine: Temperatur über 1. Schwelle | 0 |
| 0x21EF42 | EME, E-Maschinenregelung, E-Maschine: Temperatur über 2. Schwelle | 0 |
| 0x21EF43 | EME, E-Maschinenregelung, E-Maschine: Überdrehzahl erkannt | 0 |
| 0x21EF44 | EME, interner Fehler, Ebene 3: Watchdog Abschaltpfadtest fehlgeschlagen | 0 |
| 0x21EF46 | EME, interner Fehler, Ebene 3: Endstufen-Test fehlgeschlagen | 0 |
| 0x21EF48 | Externer Crashsensor: Crash detektiert (KL30C) | 0 |
| 0x21EF4C | EME, Hochvoltzwischenkreis: Überspannungsschutz des Pulswechselrichters (HW-Schwellenwerte) | 0 |
| 0x21EF4D | EME, Hochvoltzwischenkreis: Überspannungsschutz des Pulswechselrichters (SW-Schwellenwerte) | 0 |
| 0x21EF4E | EME, Hochvoltzwischenkreis: Unterspannungsschutz des Pulswechselrichters (SW-Schwellenwerte) | 0 |
| 0x21EF4F | EWP5: Kommunikationsfehler | 0 |
| 0x21EF50 | EWP5: Drehzahlabweichung | 0 |
| 0x21EF51 | EWP5, Leistungsreduzierung: Unter-/Übertemperatur | 0 |
| 0x21EF52 | EWP5, Leistungsreduzierung: Trockenlauf | 0 |
| 0x21EF53 | EWP5: Abschaltung aufgrund Überstrom/Überspannung | 0 |
| 0x21EF54 | EWP5: Abschaltung aufgrund Übertemperatur/Trockenlauf | 0 |
| 0x21EF55 | Ladekontrollleuchte aktiv | 0 |
| 0x21EF7E | EME, interner Fehler, interne Spannungsversorgung: Fehler im HF-Bus (Highside) | 0 |
| 0x21EF7F | EME, interner Fehler, interne Spannungsversorgung: Fehler im HF-Bus (Lowside) | 0 |
| 0x21EF82 | Energetische Betriebsstrategie: Anforderung der Ladezustandsregelung nicht erfüllt (Batterie laden) | 0 |
| 0x21EF83 | EME, interner Fehler, DC/DC-Wandler: Kein Leistungstransfer - Zustand unplausibel | 0 |
| 0x21EF85 | DSC, OBD: Bremssystem-Steuergerät - interner Hardware Fehler | 0 |
| 0x21EF86 | DSC, OBD: Bremspedal Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung | 0 |
| 0x21EF87 | DSC, OBD: Bremspedal Positionssensor - Unterspannung | 0 |
| 0x21EF88 | EME, interner Fehler, DC/DC, Temperatursensor der Hochvolt-Leistungsendstufe: Wert unplausibel | 0 |
| 0x21EF89 | EME, interner Fehler, DC/DC, Temperatursensor der Niedervolt-Leistungsendstufe: Wert unplausibel | 0 |
| 0x21EF8A | EME, interner Fehler, DC/DC, Temperatursensor des Transformators: Wert unplausibel | 0 |
| 0x21EF8B | EME, interner Fehler, CPLD: Initialisierung fehlgeschlagen | 0 |
| 0x21EF8C | Ebene 2: CAN-Botschaften: Botschaftsfolgezähler fehlerhaft | 1 |
| 0x21EF8D | Ebene 2: CAN-Botschaften: CRC der Nutzdaten fehlerhaft | 1 |
| 0x21EF8E | Ebene 2: CAN-Botschaften: Ausfall | 1 |
| 0x21EF90 | Externer Crashsensor: Crash detektiert (CAN) | 0 |
| 0x21EF91 | BMW: NLM CAN Signalausfall von DME | 0 |
| 0x21EF92 | BMW: NLM CAN Signalausfall von IHKA, DSC, ICM | 0 |
| 0x21EF93 | BMW: NLM Signalausfall von LE, DCDC | 0 |
| 0x21EF94 | BMW: NLM CAN Signalausfall von SME | 0 |
| 0x21EFA5 | EME, interner Fehler, Ebene 2: Summenfehler FuSi Ebene 2 für BMW/HYM | 0 |
| 0x21EFA6 | EME: Hybridsystem gestört (CCM 585) | 0 |
| 0x21EFA7 | EME: Misslungener Startversuch (CCM 587, Hybrid Fahrzeug nicht fahrbereit) | 1 |
| 0x21EFA8 | EME: Ladevorgang HV Batterie abgebrochen (CCM 590, Ladevorgang beendet) | 1 |
| 0x21EFA9 | EME: Degradierung eKMV | 0 |
| 0x21EFAA | EME: Verbraucherreduzierung 12V | 1 |
| 0x21EFAB | EME: Verhindern Standfunktionen | 1 |
| 0x21EFAC | EME: Entlastungsanforderung an AEP | 1 |
| 0x21EFAD | EME: EA/AV/DA MSA und e-Fahren. | 0 |
| 0x21EFAE | EME: HV Abschaltung aufgrund der Entladeschutzfunktion | 0 |
| 0x21EFAF | EME, interner Fehler, Ebene 2: AKS aus Sicherheitsfunktion | 0 |
| 0x21EFB0 | EME, interner Fehler, Ebene 2: Hochvolt aus Sicherheitsfunktion | 0 |
| 0x21EFB1 | EME, interner Fehler, Ebene 2: Reset aus Sicherheitsfunktion | 0 |
| 0x21EFB2 | EME, interner Fehler, Ebene 2: DCDC-Wandler im Standby aus Sicherheitsfunktion | 0 |
| 0x21EFB3 | EME, interner Fehler, Ebene 2: Hochvolt Zwischenkreis entladen aus Sicherheitsfunktion | 0 |
| 0x21EFB4 | EME, interner Fehler, Ebene 2: Hochvolt Zwischenkreis Entladung verhindert aus Sicherheitsfunktion | 0 |
| 0x21EFB5 | EME, interner Fehler, Ebene 2: PM-Grenzen aus Sicherheitsfunktion | 0 |
| 0x21EFB6 | SME, HV-Schützöffner: Hochvolt im Betrieb abgefallen (KAT 7 Fehler der SME) | 0 |
| 0x21EFB7 | EME, interner Fehler: Initialisierungsfehler (Interrupt Test) | 0 |
| 0x21EFB8 | EME, interner Fehler: Initialisierungsfehler (Cache-Speicher) | 0 |
| 0x21EFB9 | EME, interner Fehler, DC/DC-Wandler:  Übertemperatur Kontrollleiterplatte | 0 |
| 0x21EFBA | EME, Schaltnetzteil für redundante Versorgungsspannung fehlerhaft | 0 |
| 0xCF840A | EME, CAN: FA-CAN wurde getrennt | 1 |
| 0xCF8486 | EME, CAN: A-CAN wurde getrennt | 1 |
| 0xCF8490 | EME, CAN: H-CAN wurde getrennt | 1 |
| 0xCF8500 | Botschaft (Winkel_Fahrpedal, FA-CAN, 0x0D9): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8501 | Botschaft (Diagnose OBD Hybrid 1, FA-CAN, 0x416): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8504 | Botschaft (Daten Antriebsstrang 2, FA-CAN, 0x3F9): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8505 | Botschaft (Anforderung Drehmoment Antrieb Hybrid, A-CAN, 0x0FF): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8506 | Botschaft (Drehmoment Kurbelwelle 1, FA-CAN, 0x0A5): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8507 | Botschaft (Drehmoment Kurbelwelle Hybrid, H-CAN, 0x10E): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8509 | Botschaft (Status Dynamisch Spannung Hochvoltspeicher, A-CAN, 0x182): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF850B | Botschaft (Ladung Hochvoltspeicher, A-CAN, 0x404): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF850D | Botschaft (Status Motor Start Auto, FA-CAN, 0x30B): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF850E | Botschaft (Anforderung Drehmoment Fahrerwunsch Hybrid, H-CAN, 0x10D): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF850F | Botschaft (Daten Anzeige Getriebestrang, A-CAN, 0x3FD): Botschaftsfolgezähler fehlerhaft | 1 |
| 0xCF8600 | Botschaft (Winkel_Fahrpedal, FA-CAN, 0x0D9): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF8603 | Botschaft (Anforderung Drehmoment Antrieb Hybrid, A-CAN, 0x0FF): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF8604 | Botschaft (Drehmoment Kurbelwelle 1, FA-CAN, 0x0A5): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF8605 | Botschaft (Drehmoment Kurbelwelle Hybrid, H-CAN, 0x10E): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF8608 | Botschaft (Ladung Hochvoltspeicher, A-CAN, 0x404): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF8609 | Botschaft (Status Dynamisch Spannung Hochvoltspeicher, A-CAN, 0x182): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF860A | Botschaft (Daten Antriebsstrang 2, FA-CAN, 0x3F9): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF860B | Botschaft (Status Motor Start Auto, FA-CAN, 0x30B): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF860C | Botschaft (Anforderung Drehmoment Fahrerwunsch Hybrid, H-CAN, 0x10D): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF860D | Botschaft (Daten Anzeige Getriebestrang, A-CAN, , 0x3FD): CRC der Nutzdaten fehlerhaft | 1 |
| 0xCF8700 | Botschaft (Außentemperatur, FA-CAN, 0x2CA): Ausfall | 1 |
| 0xCF8701 | Botschaft (Winkel_Fahrpedal, FA-CAN, 0x0D9): Ausfall | 1 |
| 0xCF8702 | Botschaft (Ist Drehzahl Rad ungesichert, FA-CAN, 0x254): Ausfall | 1 |
| 0xCF8703 | Botschaft (Bordnetz Spannungswert, FA-CAN, 0x281): Ausfall | 1 |
| 0xCF8704 | Botschaft (Steuerung Kühlung Antrieb Elektrisch, A-CAN, 0x340): Ausfall | 1 |
| 0xCF8705 | Botschaft (Steuerung Crashabschaltung EKP, FA-CAN, 0x135): Ausfall | 1 |
| 0xCF8706 | Botschaft (Diagnose OBD Motor, FA-CAN, 0x397): Ausfall | 1 |
| 0xCF8707 | Botschaft (Diagnose OBD Hybrid 1, FA-CAN, 0x416): Ausfall | 1 |
| 0xCF870A | Botschaft (Daten Anzeige Getriebestrang, A-CAN, 0x3FD): Ausfall | 1 |
| 0xCF870B | Botschaft (Daten Getriebestrang, FA-CAN, 0x1AF): Ausfall | 1 |
| 0xCF870C | Botschaft (Daten Antriebsstrang 1, FA-CAN, 0x3FB): Ausfall | 1 |
| 0xCF870D | Botschaft (Daten Antriebsstrang 2, FA-CAN, 0x3F9): Ausfall | 1 |
| 0xCF870E | Botschaft (Fahrzeugzustand, FA-CAN, 0x3A0): Ausfall | 1 |
| 0xCF870F | Botschaft (Identifikation Hochvoltspeicher, A-CAN, 0x363): Ausfall | 1 |
| 0xCF8710 | Botschaft (Klemmen, FA-CAN, 0x12F): Ausfall | 1 |
| 0xCF8711 | Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, A-CAN, 0x2F5): Ausfall | 1 |
| 0xCF8712 | Botschaft (Powermanagement Niederspannung, H-CAN, 0x3C9): Ausfall | 1 |
| 0xCF8713 | Botschaft (Relativzeit, FA-CAN, 0x328): Ausfall | 1 |
| 0xCF8714 | Botschaft (Freigabe Kühlung Hochvoltspeicher, FA-CAN, 0x37B): Ausfall | 1 |
| 0xCF8715 | Botschaft (Anforderung Klimaanlage, FA-CAN, 0x2F9): Ausfall | 1 |
| 0xCF8716 | Botschaft (Anforderung Drehmoment Antrieb Hybrid, A-CAN, 0x0FF): Ausfall | 1 |
| 0xCF8717 | Botschaft (Status Gurt Kontakt Sitzbelegung, FA-CAN, 0x297): Ausfall | 1 |
| 0xCF8718 | Botschaft (Status Getriebesteuergerät, A-CAN, 0x39A): Ausfall | 1 |
| 0xCF8719 | Botschaft (Status Hochvoltspeicher 1, A-CAN, 0x1FA): Ausfall | 1 |
| 0xCF871A | Botschaft (Status Hybrid 2, A-CAN, 0x418): Ausfall | 1 |
| 0xCF871B | Botschaft (Status Stabilisierung DSC, FA-CAN, 0x173): Ausfall | 1 |
| 0xCF871C | Botschaft (Status Motor Start Auto, FA-CAN, 0x30B): Ausfall | 1 |
| 0xCF871E | Botschaft (Status Hochvoltspeicher 2, A-CAN, 0x112): Ausfall | 1 |
| 0xCF871F | Botschaft (ZV und Klappenzustand, FA-CAN, 0x2FC): Ausfall | 1 |
| 0xCF8720 | Botschaft (SVC_IHKA, FA-CAN, 0x5F8): Ausfall | 1 |
| 0xCF8721 | Botschaft (Drehmoment Kurbelwelle 1, FA-CAN, 0x0A5): Ausfall | 1 |
| 0xCF8722 | Botschaft (Drehmoment Kurbelwelle Hybrid, H-CAN, 0x10E): Ausfall | 1 |
| 0xCF8724 | Botschaft (Geschwindigkeit Fahrzeug, FA-CAN, 0x1A1): Ausfall | 1 |
| 0xCF8725 | Botschaft (Radmoment Antrieb 4, FA-CAN, 0x0DC): Ausfall | 1 |
| 0xCF8729 | Botschaft (Status Dynamisch Spannung Hochvoltspeicher, A-CAN, 0x182): Ausfall | 1 |
| 0xCF872A | Botschaft (Ladung Hochvoltspeicher, A-CAN, 0x404): Ausfall | 1 |
| 0xCF872B | Botschaft (Status Betriebsart Hybrid 2, A-CAN, 0x41C): Ausfall | 1 |
| 0xCF872E | Botschaft (Anforderung Drehmoment Fahrerwunsch Hybrid, H-CAN, 0x10B): Ausfall | 1 |
| 0xCF8731 | Botschaft (Konfiguration Schalter Fahrdynamik, FA-CAN, 0x3A7): Ausfall | 1 |
| 0xCF8732 | Botschaft (Ist Bremsmoment Summe, FA-CAN, 0x0EF): Ausfall | 1 |
| 0xCF8733 | Botschaft (Kilometerstand/Reichweite, FA-CAN, 0x330): Ausfall | 1 |
| 0xCF8734 | Botschaft (OBD Anfrage Begrenzung Drehmoment, A-CAN, 0x41D): Ausfall | 1 |
| 0xCF8736 | Botschaft (Drehmoment Kurbelwelle 3, A-CAN, 0x0A7): Ausfall | 1 |
| 0xCF8BFF | Dummy-DTC: Netzwerkfehler zum Testen | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### RES_0X6301

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_E_MOTOR_WERT | °C | high | int | - | - | - | 64 | - | E-Motor-Temperatur |
| STAT_DCB_WERT | °C | high | int | - | - | - | 64 | - | DCB-Temperatur |
| STAT_CONTROL_BOARD_WERT | °C | high | int | - | - | - | 64 | - | Control-Board-Temperatur |
| STAT_E_MOTOR_MIN_WERT | °C | high | int | - | - | - | 64 | - | minimale gültige E-Motor-Temperatur -40°C |
| STAT_E_MOTOR_MAX_WERT | °C | high | int | - | - | - | 64 | - | maximale gültige E-Motor-Temperatur +180°C |
| STAT_DCB_MIN_WERT | °C | high | int | - | - | - | 64 | - | minimale gültige DCB-Temperatur -40°C |
| STAT_DCB_MAX_WERT | °C | high | int | - | - | - | 64 | - | maximale gültige DCB-Temperatur +105°C |
| STAT_CONTROL_BOARD_MIN_WERT | °C | high | int | - | - | - | 64 | - | minimale gültige Control-Board-Temperatur-Temperatur -40°C |
| STAT_CONTROL_BOARD_MAX_WERT | °C | high | int | - | - | - | 64 | - | maximale gültige Control-Board-Temperatur-Temperatur +125°C |

### RES_0X6306

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_DC_WERT | A | - | int | - | - | 1 | 10 | 0 | HV-Strom  Bordnetz |
| STAT_STROM_AC_EFF_W_WERT | A | - | int | - | - | 1 | 16 | 0 | Effektiver Zuleitungsstrom Phase W |
| STAT_STROM_AC_EFF_V_WERT | A | - | int | - | - | 1 | 16 | 0 | Effektiver Zuleitungsstrom Phase V |
| STAT_STROM_AC_EFF_U_WERT | A | - | int | - | - | 1 | 16 | 0 | Effektiver Zuleitungsstrom Phase U |

### RES_0X6308

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL50L_NR | 0-n | - | unsigned char | - | TAB_STAT_KL50L_NR | - | - | - | Status Klemme 50 |
| STAT_SPANNUNG_UBAT_WERT | V | - | unsigned int | - | - | 0.015 | - | - | Spannung 12V Bordnetz |
| STAT_STROM_UBAT_WERT | A | - | unsigned int | - | - | 0.08 | - | -200 | Strom 12V Bordnetz |

### RES_0X6309

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | 2 | -5000 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | - | int | - | - | - | 2 | - | Tatsächliches Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | - | int | - | - | - | 2 | - |  Vorgegebenes Moment der E-Maschine |

### RES_0X630A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_LADEMODUS_NR | 0-n | - | unsigned char | - | TAB_STAT_DCDC_LADEMODUS_NR | - | - | - | Abfrage des DC/DC-Wandlers nach Betriebsmodus |
| STAT_LADUNG_HV_BATTERIE_BSW_WERT | % | - | unsigned int | - | - | - | 10 | - | Istwert Ladezustand Batterie |

### RES_0X630B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EME_ANTRIEBSART_NR | 0-n | - | unsigned char | - | TAB_STAT_EME_ANTRIEBSART_NR | - | - | - | Rückmeldung der aktuell anliegenden Antriebsart. z.B. Rekuperation, Boost etc. |

### RES_0X6310

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL30C_STATUS | 0-n | - | unsigned char | - | TAB_KL30C_STATUS | - | - | - | 0=Crash nicht erkannt, 1=Crash erkannt |

### RES_0X63DE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RLS_SPANNUNG_WERT | V | - | unsigned int | - | - | - | 1024 | - | - |
| STAT_RLS_SINUS_WERT | V | - | unsigned int | - | - | - | 1024 | - | - |
| STAT_RLS_COSINUS_WERT | V | - | unsigned int | - | - | - | 1024 | - | - |
| STAT_RLS_VALID_RANGE_SENSOR_LOW_WERT | V | - | unsigned int | - | - | - | 1024 | - | - |
| STAT_RLS_VALID_RANGE_SENSOR_HIGH_WERT | V | - | unsigned int | - | - | - | 1024 | - | - |

### RES_0X6314

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_SG_WERT_DCDC_TRAFO_WERT | °C | - | signed int | - | - | 1 | - | 0 | - |
| STAT_TEMP_SG_WERT_DCDC_SCHALTER_HV_WERT | °C | - | signed int | - | - | 1 | - | 0 | - |
| STAT_TEMP_SG_WERT_DCDC_SCHALTER_LV_WERT | °C | - | signed int | - | - | 1 | - | 0 | - |

### RES_0X6316

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMK_STROM_DC_WERT | A | - | signed int | - | - | 0.25 | - | 0 | - |
| STAT_SPANNUNG_DCDC_LV_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |

### RES_0X6318

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPI_XMUL_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_EPI_YMUL_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_EPI_XOFF_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_EPI_YOFF_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |

### RES_0X6320

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HVB_WERT | % | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_SOC_HVB_MIN_WERT | % | - | signed long | - | - | 1 | - | 0 | - |
| STAT_LADEGERAET | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_FREMDLADUNG | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_FAHRB | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_PWR_LOW | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_BA_DCDC_KOMM_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_I_DCDC_HV_OUT_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_U_DCDC_HV_OUT_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_I_DCDC_LV_OUT_WERT | A | - | signed int | - | - | 1 | - | 0 | - |
| STAT_U_DCDC_LV_OUT_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_BA_DCDC_IST_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ALS_DCDC_WERT | % | - | unsigned char | - | - | 0.5 | - | 0 | - |
| STAT_I_DCDC_HV_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_U_DCDC_HV_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_I_DCDC_LV_WERT | A | - | signed int | - | - | 1 | - | 0 | - |
| STAT_U_DCDC_LV_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |

### RES_0X6321

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_P_EM1_GEN_MAX_WERT | W | - | unsigned int | - | - | 2 | - | 0 | - |
| STAT_P_HVB_MOT_1S_WERT | W | - | unsigned int | - | - | 2 | - | 0 | - |
| STAT_P_WUNSCH_SOCR_WERT | W | - | signed int | - | - | 2 | - | 0 | - |
| STAT_P_BN_WERT | W | - | signed long | - | - | 1 | - | 0 | - |
| STAT_ANF_ANTRIEB_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_ANTRIEB_FUNK_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_DCDC_ENTL | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_DCDC_AUS | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_EKMV_AUS | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_SCHUBPHASE | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_MIN_BUCK | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |

### RES_0X6322

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INLK_DCDC_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_INLK_LE | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_FL_HV_ANF | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_KL30C | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_HV_EIN_ANF | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_HV_EIN | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_HV_AUS_ANF | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_HV_AUS | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_U_DC_HV_LE_WERT | V | - | unsigned int | - | - | 0.01 | - | 0 | - |
| STAT_HV_READY | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_HDCAC_EREQ | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_I0ANF_HVB | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_ENTL_DCDC | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |

### RES_0X6323

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_MSA_DCDC_WERT | Ah | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_MSA_EKK_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_ENTL_EKK_STD_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_ENTL_EKK15_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_ENTL_DCDC15_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_ENTL_EM1_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_ENTL_EKK_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_ENTL_DCDC_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_MSA_EM1_WERT | Ah | - | signed long | - | - | 1 | - | 0 | - |
| STAT_NV_UHVB_SB_NULL_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_1_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_2_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_3_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_4_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_5_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_6_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_7_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_8_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_9_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_10_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_11_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_12_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_13_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_14_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_15_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_16_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_17_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_18_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_19_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_20_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_21_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_22_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_23_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |
| STAT_NV_UHVB_SB_24_WERT | s | - | signed long | - | - | 0.1 | - | 0 | - |

### RES_0X6324

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_KM_SOC_LOW_MSAAV_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_SOC_LOW_MSAAV_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_SOC_LOW_MSAAV_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_SOC_HIGH_MSAAV_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_SOC_HIGH_MSAAV_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_SOC_HIGH_MSAAV_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_HVPM_MSAAV_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_HVPM_MSAAV_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_MSA_STOP_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_MSA_STOP_KL5S_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_MSA_STOP_GR5S_KL20S_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_MSA_STOP_GR20S_KL60S_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_MSA_STOP_GR60S_KL180S_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_MSA_STOP_GR180S_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_SOC_LOW_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_SOC_LOW_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_SOC_HIGH_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_SOC_HIGH_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_PWRLOW_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_PWRLOW_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_TEMP_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_TEMP_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_SOC_LOW_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_SOC_LOW_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_SOC_HIGH_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_SOC_HIGH_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_PWRLOW_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_PWRLOW_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_TEMP_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_TEMP_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_T_FZG_STOP_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_FZG_STOP_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NV_KM_HVPM_MSAEA_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_HVPM_MSAEA_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_HVPM_MSAEA_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_HVPM_MSAAV_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_PWR_LOW_MSAEA_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_PWR_LOW_MSAEA_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_PWR_LOW_MSAEA_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_PWR_LOW_MSAAV_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_PWR_LOW_MSAAV_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_PWR_LOW_MSAAV_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_TEMP_HVB_MSAEA_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_TEMP_HVB_MSAEA_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_TEMP_HVB_MSAEA_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |

### RES_0X6325

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_KM_DEG_EKMV_VM_AN_A_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EKMV_VM_AN_A_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_BUCK_VM_AN_A_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_BUCK_VM_AN_A_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_EKMV_VM_AUS_A_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EKMV_VM_AUS_A_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_BUCK_VM_AUS_A_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_BUCK_VM_AUS_A_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_EKMV_VM_AN_B_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EKMV_VM_AN_B_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_BUCK_VM_AN_B_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_BUCK_VM_AN_B_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EKMV_VM_AUS_B_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_BUCK_VM_AUS_B_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_BUCK_VM_AUS_B_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_EM1_LL_A_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EM1_LL_A_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_EM1_LL_B_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EM1_LL_B_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_EM1_NOTLL_A_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EM1_NOTLL_A_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_KM_DEG_EM1_NOTLL_B_WERT | 10 km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_T_DEG_EM1_NOTLL_B_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |

### RES_0X632D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_TAUSCH_1_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_TAUSCH_2_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X632E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADUNG_GESAMT_WERT | As | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ENTLADUNG_GESAMT_WERT | As | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_LADUNGSMENGE_BOOST_WERT | As | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_LADUNGSMENGE_RECUP_WERT | As | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X636E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_SMALLER_0C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_0C_10C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_10C_20C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_20C_30C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_30C_40C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_40C_45C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_45C_50C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_TEMPERATUR_HVBATTERIE_GR_50C_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X636F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_IN_SOC_SINCE_SOP_0_40_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_40_50_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_50_54_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_54_58_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_58_62_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_62_66_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_66_70_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TIME_IN_SOC_SINCE_SOP_70_100_WERT | min | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X636D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_HISTO_KL_MIN160A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_MIN160A_KL_MIN80A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_MIN80A_KL_MIN5A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_MIN5A_KL_0A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_0A_KL_5A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_5A_KL_80A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_80A_KL_160A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_I_HISTO_GRGL_160A_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |

### RES_0X6336

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAUER_TEMP_60_80_WERT | s | - | unsigned int | - | - | 0.01 | - | 0 | - |
| STAT_DAUER_TEMP_GR_80_WERT | s | - | unsigned int | - | - | 0.01 | - | 0 | - |
| STAT_DAUER_TEMP_KL_MIN_40_WERT | s | - | unsigned int | - | - | 0.01 | - | 0 | - |
| STAT_DAUER_LADESTROM_ZU_HOCH_WERT | s | - | unsigned long | - | - | 0.01 | - | 0 | - |
| STAT_DAUER_ENTLADESTROM_ZU_HOCH_WERT | s | - | unsigned long | - | - | 0.01 | - | 0 | - |
| STAT_DAUER_SPANNUNG_ZU_NIEDRIG_WERT | s | - | unsigned long | - | - | 0.01 | - | 0 | - |
| STAT_DAUER_SPANNUNG_ZU_HOCH_WERT | s | - | unsigned long | - | - | 0.01 | - | 0 | - |

### RES_0X6351

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T1_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T1_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T1_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T1_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T1_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6352

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T2_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T2_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T2_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T2_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T2_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6353

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T3_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T3_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T3_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T3_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T3_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6354

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T4_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T4_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T4_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T4_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T4_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6355

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T5_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T5_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T5_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T5_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T5_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6356

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T6_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T6_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T6_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T6_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T6_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6357

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_ENTLADEN_FUER_T7_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T7_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T7_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T7_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_ENTLADEN_FUER_T7_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6358

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T1_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T1_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T1_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T1_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T1_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6359

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T2_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T2_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T2_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T2_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T2_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X635A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T3_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T3_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T3_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T3_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T3_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X635B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T4_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T4_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T4_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T4_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T4_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X635C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T5_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T5_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T5_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T5_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T5_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X635D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T6_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T6_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T6_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T6_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T6_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X635E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RI_LADEN_FUER_T7_UND_SOC_30_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T7_UND_SOC_40_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T7_UND_SOC_50_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T7_UND_SOC_60_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |
| STAT_RI_LADEN_FUER_T7_UND_SOC_70_WERT | Ohm | - | unsigned int | - | - | 0.000244140625 | - | 0 | - |

### RES_0X6370

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HVB_SOC_Fahrb_0_20_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_20_25_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_25_30_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_30_33_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_33_36_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_36_39_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_39_42_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_42_45_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_45_48_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_48_51_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_51_56_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_56_65_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_65_80_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_HVB_SOC_Fahrb_80_100_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |

### RES_0X63A2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALTSTARTTEMP1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KALTSTARTTEMP2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KALTSTARTTEMP3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KALTSTARTTEMP4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63A4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NLM_ERREAKT_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |

### RES_0X63A5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_START_CCM_636_0_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_0_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_0_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_0_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_1_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_1_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_1_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_2_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_2_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_2_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_3_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_3_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_3_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_4_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_4_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_4_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_5_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_5_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_5_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_6_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_6_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_6_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_7_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_7_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_7_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_8_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_8_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_8_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_START_CCM_636_9_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ZEIT_STOP_CCM_636_9_WERT | sec | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_KM_START_CCM_636_9_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ABBRUCHBEDINGUNG_9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X636B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUM_OF_SOC_CHARGE_5_10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_10_15_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_15_20_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_20_25_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_25_30_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_30_35_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_35_40_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_40_45_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_45_50_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_CHARGE_50_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X636C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUM_OF_SOC_DISCHARGE_5_10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_10_15_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_15_20_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_20_25_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_25_30_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_30_35_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_35_40_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_40_45_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_45_50_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SUM_OF_SOC_DISCHARGE_50_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63A6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63A7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63A8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63A9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63AA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63AB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63AC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T1_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T1_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63AD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63AE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63AF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T2_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T2_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63B9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63BA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T3_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T3_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63BB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63BC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63BD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63BE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63BF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T4_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T4_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T5_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T5_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63C9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63CA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63CB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63CD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63CE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63CF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T6_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T6_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC1_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC2_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC2_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC3_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC3_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC4_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC4_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC5_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC5_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC6_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC6_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC7_T7_I1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_HV_BATT_HIST_SOC7_T7_I10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63D8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_ANZ_TEMP_LOW_HVB_MSAAV_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_TEMP_LOW_HVB_MSAAV_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_TEMP_LOW_HVB_MSAAV_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_ANZ_TEMP_LOW_HVB_MSAEA_AKT_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_TEMP_LOW_HVB_MSAEA_AKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_KM_TEMP_LOW_HVB_MSAEA_DEAKT_WERT | km | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_TEMP_LOW_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_AV_TEMP_LOW_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_TEMP_LOW_KURZ_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_PRZ_EA_TEMP_LOW_LANG_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NV_MSA_DEAKT_AKTIV_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_MSA_EA_AKTIV_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |
| STAT_NV_MSA_AV_AKTIV_WERT | - | - | unsigned int | - | - | 1 | - | 0 | - |

### RES_0X63D9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DCDC_ALS_HIST_BEREICH_NULL_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_NV_DCDC_ALS_HIST_BEREICH_1_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_NV_DCDC_ALS_HIST_BEREICH_2_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |
| STAT_NV_DCDC_ALS_HIST_BEREICH_3_WERT | s | - | unsigned long | - | - | 0.1 | - | 0 | - |

### RES_0X63DA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_NL_EME_KM_1_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_2_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_3_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_4_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_5_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_6_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_7_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_8_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_9_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_10_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_11_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_12_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_13_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_14_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_15_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_KM_16_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_1_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_2_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_3_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_4_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_5_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_6_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_7_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_8_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_9_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_10_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_11_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_12_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_13_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_14_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_15_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_WERT_16_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_1_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_2_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_3_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_4_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_5_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_6_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_7_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_8_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_9_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_10_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_11_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_12_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_13_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_14_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_15_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_ANF_NL_EME_ZEIT_16_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63DB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NLM_DEAK_MSA_KM_1_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_2_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_3_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_4_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_5_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_6_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_7_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_8_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_9_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_10_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_11_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_12_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_13_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_14_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_15_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_KM_16_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_1_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_2_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_3_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_4_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_5_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_6_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_7_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_8_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_9_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_10_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_11_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_12_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_13_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_14_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_15_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_WERT_16_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_1_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_2_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_3_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_4_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_5_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_6_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_7_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_8_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_9_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_10_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_11_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_12_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_13_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_14_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_15_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_DEAK_MSA_ZEIT_16_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63DC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NLM_ERREAKT_KM_1_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_2_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_3_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_4_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_5_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_6_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_7_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_8_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_9_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_10_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_11_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_12_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_13_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_14_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_15_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_KM_16_WERT | km | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_2_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_3_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_4_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_5_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_6_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_7_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_8_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_9_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_10_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_11_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_12_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_13_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_14_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_15_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_WERT_16_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_1_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_2_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_3_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_4_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_5_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_6_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_7_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_8_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_9_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_10_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_11_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_12_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_13_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_14_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_15_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_NLM_ERREAKT_ZEIT_16_WERT | s | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X6369

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HV_BATT_ACTUAL_VALUE_MIN_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_1_MIN_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_2_MIN_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_3_MIN_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_4_MIN_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_5_MIN_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X636A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HV_BATT_ACTUAL_VALUE_MAX_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_1_MAX_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_2_MAX_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_3_MAX_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_4_MAX_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_SOC_HV_BATT_DAY_BEFORE_5_MAX_WERT | % | - | unsigned long | - | - | 1 | - | 0 | - |

### RES_0X63DD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TA_PST_AVL_TEMP_HTEX_HVSTO_WERT | °C | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_B_BATT_COOLRQ | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_BATT_SRVRQ | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_DIAG_SOC_GRENZE | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_DREHRICHT_EM1 | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_FG_INJ | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_INLK_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_INLK_SYS | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_INTISO_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_ISO_WARNUNG_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_LLR_EMGRENZ | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_NL_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_SME_SEARCH_RQ_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_SW_OFF_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_SW_OFFDL_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_TVLV_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_B_XIRQ_SME | 0/1 | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_BA_DCDC_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_BA_EM1_IST_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_BA_EM1_SOLL_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_BA_EM1_SOLL_STEUERN_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_ECUM_ESYSTEMSTATE_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_F_DCDC1_GEN_LD_WERT | % | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_F_EM1LIMXCTL_GEN_BAM_WERT | - | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_F_EM1LIMXCTL_MOT_BAM_WERT | - | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_GANGI_VM_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_HIST_TEMPCLASS_IDX_SME_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_HIST_TEMPCLASS_VAR_SME_WERT | min | - | unsigned int | - | - | 5 | - | 0 | - |
| STAT_TA_PST_I_BATT_SME_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_I_DCDC_HV_WERT | - | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_I_DCDC_HV_OUT_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_I_DCDC_LV_WERT | - | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_I_DCDC_LV_OUT_WERT | A | - | signed int | - | - | 1 | - | 0 | - |
| STAT_TA_PST_I_ENTL_MIN_SME_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_I_HV_LE_MAX_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_I_HV_LE_MIN_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_I_LAD_MAX_SME_WERT | A | - | signed int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MAX_10S_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MAX_1S_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MAX_1S_PM_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MAX_XCTL_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MIN_10S_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MIN_1S_PM_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_MIN_XCTL_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_RAMP_XCTL_WERT | Nm/s | - | unsigned char | - | - | 100 | - | 0 | - |
| STAT_TA_PST_MD_EM1_SOLL_DME_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_SOLL_DME_Q_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_MD_EM1_SOLL_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_MD_EM1_SOLL_STEUERN_WERT | - | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_MDK_LAD_ASSIST_BOOST_WERT | Nm | - | signed int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_N_EM1_SOLL_DME_WERT | 1/min | - | unsigned int | - | - | 0.5 | - | -5000 | - |
| STAT_TA_PST_N_EM1_SOLL_DME_Q_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_N_EM1_SOLL_WERT | 1/min | - | unsigned int | - | - | 0.5 | - | -5000 | - |
| STAT_TA_PST_N_EM1_MAX_XCTL_WERT | 1/min | - | unsigned int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_N_EM1_MIN_XCTL_WERT | 1/min | - | unsigned int | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_N_EM1_RAMP_XCTL_WERT | (1/min)/s | - | unsigned int | - | - | 2.5 | - | 0 | - |
| STAT_TA_PST_N_EM1_SOLL_STEUERN_WERT | - | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_P_EM1_DYN_GEN_WERT | W | - | unsigned int | - | - | 2 | - | 0 | - |
| STAT_TA_PST_P_EM1_DYN_MOT_WERT | W | - | unsigned int | - | - | 2 | - | 0 | - |
| STAT_TA_PST_P_EM1_STAT_GEN_WERT | W | - | unsigned int | - | - | 2 | - | 0 | - |
| STAT_TA_PST_P_EM1_STAT_MOT_WERT | W | - | unsigned int | - | - | 2 | - | 0 | - |
| STAT_TA_PST_PR_LADEN_SOC_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_PWG_IST_WERT | % | - | unsigned int | - | - | 0.025 | - | 0 | - |
| STAT_TA_PST_Q_ACT_BATT_SME_WERT | - | - | unsigned int | - | - | 16.5 | - | 0 | - |
| STAT_TA_PST_Q_NENN_BATT_SME_WERT | - | - | unsigned int | - | - | 16.5 | - | 0 | - |
| STAT_TA_PST_SNR_BATT_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_SOC_HVPM_IST_WERT | % | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_SOC_MAX_CELL_SME_WERT | - | - | unsigned char | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_SOC_MIN_CELL_SME_WERT | - | - | unsigned char | - | - | 0.5 | - | 0 | - |
| STAT_TA_PST_SOC_SME_WERT | % | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_ST_ANTRIEB_EL_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_AVL_U_SRC_HVSTO_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_CMP_ORNG_SME_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_DCDC_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_ENERG_FZM_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_ERR_EM1_WERT | - | - | unsigned long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_FL_TURKNT_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_HAUBE_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_HECKKLAPPE_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_HVB_COOLING_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_ILK_ERRM_FZM_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_LE_MSA_AV_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_MOD_START_VAR_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_PRECHRG_LOCK_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_SCHL_ST_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_SW_OFFDLA_SME_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_SW_SME_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_VEH_CON_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_ST_VM_BRENNT_WERT | - | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_TN_BATT_SWOPEN_SME_WERT | min | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_U_BATT_SME_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_BATT0_ST_WERT | V | - | unsigned char | - | - | 1 | - | 0 | - |
| STAT_TA_PST_U_DC_HV_LE_MAX_WERT | V | - | unsigned int | - | - | 0.25 | - | 0 | - |
| STAT_TA_PST_U_DC_HV_LE_MIN_WERT | V | - | unsigned int | - | - | 0.25 | - | 0 | - |
| STAT_TA_PST_U_DC_HV_LE_SOLL_WERT | V | - | unsigned int | - | - | 0.01 | - | 0 | - |
| STAT_TA_PST_U_DCDC_HV_WERT | V | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_U_DCDC_HV_OUT_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_DCDC_LV_WERT | V | - | signed long | - | - | 1 | - | 0 | - |
| STAT_TA_PST_U_DCDC_LV_OUT_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_EM1_DYN_GEN_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_EM1_DYN_MOT_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_EM1_STAT_GEN_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_EM1_STAT_MOT_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_ENTL_MIN_SME_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_LAD_MAX_SME_WERT | V | - | unsigned int | - | - | 0.1 | - | 0 | - |
| STAT_TA_PST_U_MAX_CELL_SME_WERT | V | - | unsigned char | - | - | 0.02 | - | 0 | - |
| STAT_TA_PST_U_MIN_CELL_SME_WERT | V | - | unsigned char | - | - | 0.02 | - | 0 | - |
| STAT_TA_PST_U_ZK_SME_WERT | V | - | unsigned char | - | - | 4 | - | 0 | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_EPSOFFSET | 0x6300 | STAT_EPSOFF_WERT | EPS Offset -180,00° .. +180,00° | ° | GETEPSOFFSET | high | int | - | 180 | 32768 | - | 0x1A | 22 | - | - |
| STATUS_TEMPERATUREN | 0x6301 | - | Temperaturen lesen vom E-Motor DCB (Endstufen) Control Board | - | GETINVERTERTEMPERATURES | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6301 |
| STATUS_HVIL_GESAMT | 0x6302 | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes falls HVIL unterbrochen, dann n.i.O. | 0-n | B_err_interlk | - | unsigned char | TAB_STAT_HVIL_GESAMT_NR | - | - | - | 0x1A | 22 | - | - |
| STATUS_HV_ISOLATION | 0x6303 | STAT_HV_ISOLATION_NR | Auslesen des Isolationswächters falls Iso-Fehler, dann n.i.O. | 0-n | B_extiso_sm | - | unsigned char | TAB_STAT_HV_ISOLATION_NR | - | - | - | 0x1A | 22 | - | - |
| STATUS_PRECHARGE | 0x6304 | STAT_PRECHARGE_NR | Variable in der Basis SW: ECUM_eSystemState= Run  ->  Precharge abgeschlossen. Den Precharge macht aber die SME | 0-n | ECUM_eSystemState | - | unsigned char | TAB_STAT_PRECHARGE_NR | - | - | - | 0x1A | 22 | - | - |
| STATUS_SPANNUNG_DC_HV | 0x6305 | STAT_SPANNUNG_DC_HV_WERT | DC Spannung der EMK EMR (HV-Batterieseitig ) (nach intern) | V | U_dc_hv_le_ist | - | unsigned int | - | 0.01 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HV_STROM | 0x6306 | - | HV-Strom  Bordnetz | - | T_ecu_em1 | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6306 |
| STATUS_POSITIONSGEBER | 0x6307 | STAT_POSITIONSGEBER_WERT | Winkelstellung der E-Maschinen in Grad | ° | T_em1 | - | int | - | 180 | 32768 | 0 | 0x1A | 22 | - | - |
| STATUS_LV_BAT | 0x6308 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6308 |
| STATUS_ELEKTRISCHE_MASCHINE | 0x6309 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6309 |
| STATUS_DCDC_LADEMODUS | 0x630A | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x630A |
| STATUS_EME_ANTRIEBSART | 0x630B | - | Auswahl: normal, explizit keine E-Maschinen unterstützung positive Momentengrenzen auf Null setzen, Md_em1_max_1s/10s_pm. Umsetzung in der Funktion P_emko_emlim | - | - | - | - | - | - | - | - | 0x1A | 22;2E | ARG_0x630B | RES_0x630B |
| STATUS_KL30C_SPANNUNG | 0x6310 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6310 |
| STATUS_PUMPEN | 0x630D | STAT_EME_PUMPE_DREHZAHL_WERT | - | - | N_colpp_eme_ly | - | unsigned int | - | 1 | 1 | 0 | 0x1A | 22 | - | - |
| STATUS_TEMPERATUR_HVB | 0x6313 | STAT_TEMPERATUR_HVB_WERT | - | °C | T_hvb_plaus | - | signed long | - | 1 | 1 | 0 | 0x1A | 22 | - | - |
| STATUS_TEMP_DCDC | 0x6314 | - | - | - | - | - | - | - | - | 1 | - | 0x1A | 22 | - | RES_0x6314 |
| STATUS_SPANNUNG_DC_HV_DCDC | 0x6315 | STAT_SPANNUNG_DC_HV_DCDC_WERT | - | V | U_dcdc1_hv_ly | - | unsigned int | - | 0.1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_EMK_STROM_DC | 0x6316 | - | - | - | - | - | - | - | - | 1 | - | 0x1A | 22 | - | RES_0x6316 |
| STATUS_DCDC_LV | 0x6317 | STAT_STROM_DCDC_LV_WERT | - | A | I_dcdc1_lv_ly | - | signed int | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_EPI | 0x6318 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6318 |
| STATUS_ERSTSTARTBEGRENZUNG | 0x6319 | STAT_ERSTSTARTBEGRAKTIV_WERT | - | - | ACAL_ErststartBegrAktiv | - | unsigned int | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_INFO_EMK | 0x631A | STAT_INFO_EMK_WERT | - | - | St_info_em1 | - | unsigned int | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HVPM_DC/DC_ANSTEUERUNG | 0x6320 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6320 |
| STATUS_HVPM_VERBRAUCHERREDUZIERUNG | 0x6321 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6321 |
| STATUS_HVPM_HV_SYSTEM_ON_OFF | 0x6322 | - | - | - | - | - | - | - | - | 1 | - | 0x1A | 22 | - | RES_0x6322 |
| STATUS_HVPM_ENERGIEBORDNETZ | 0x6323 | - | - | - | - | - | - | - | - | 1 | - | 0x1A | 22 | - | RES_0x6323 |
| STATUS_HVPM_MSA | 0x6324 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6324 |
| STATUS_HVPM_PKOR | 0x6325 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6325 |
| STATUS_REFERENZKAPAZITAET_HVB | 0x6326 | STAT_REF_KAPAZITAET_HVB_WERT | - | As | NV_SOH_CAP_REFERENCE | - | unsigned int | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_SOC_HVB | 0x6327 | STAT_SOC_HVB_WERT | - | % | Soc_hvb_ist_ly | - | unsigned int | - | 0.1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_RUHESPANNUNG | 0x632A | STAT_OCV | - | 0/1 | B_ocv_ist | - | unsigned char | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_ESOC_SOC | 0x632B | STAT_ESOC_SOC_TABLE_OUT_WERT | - | % | Soc_ocv_table_out_ist | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_LADUNGSMENGE_HVB | 0x632C | STAT_AKTUELLE_LADUNGSMENGE_HVB_WERT | - | As | NV_SOH_Q_SUM_TESTER | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HVB_TAUSCH_LESEN | 0x632D | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x632D |
| STATUS_HVB_LADUNGSMENGE | 0x632E | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x632E |
| STATUS_ALTERUNG_INNENWIDERSTAND | 0x6334 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | - | % | NV_SOH_INNENWIDERSTAND | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_ALTERUNG_KAPAZITAET | 0x6335 | STAT_ALTERUNG_KAPAZITAET_WERT | - | % | NV_SOH_KAPAZITAET | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HVB_WARRANTY | 0x6336 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6336 |
| STATUS_ENTLADE_INNENWIDERSTAND_T1 | 0x6351 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6351 |
| STATUS_ENTLADE_INNENWIDERSTAND_T2 | 0x6352 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6352 |
| STATUS_ENTLADE_INNENWIDERSTAND_T3 | 0x6353 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6353 |
| STATUS_ENTLADE_INNENWIDERSTAND_T4 | 0x6354 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6354 |
| STATUS_ENTLADE_INNENWIDERSTAND_T5 | 0x6355 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6355 |
| STATUS_ENTLADE_INNENWIDERSTAND_T6 | 0x6356 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6356 |
| STATUS_ENTLADE_INNENWIDERSTAND_T7 | 0x6357 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6357 |
| STATUS_LADE_INNENWIDERSTAND_T1 | 0x6358 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6358 |
| STATUS_LADE_INNENWIDERSTAND_T2 | 0x6359 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6359 |
| STATUS_LADE_INNENWIDERSTAND_T3 | 0x635A | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x635A |
| STATUS_LADE_INNENWIDERSTAND_T4 | 0x635B | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x635B |
| STATUS_LADE_INNENWIDERSTAND_T5 | 0x635C | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x635C |
| STATUS_LADE_INNENWIDERSTAND_T6 | 0x635D | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x635D |
| STATUS_LADE_INNENWIDERSTAND_T7 | 0x635E | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x635E |
| STATUS_MITTELWERT_RI_FAKTOR_1S | 0x635F | STAT_MITTELWERT_FUER_RI_FAKTOR_1S_WERT | - | - | NV_SOH_RI_CORR_FCTR_LT | - | signed long | - | 0.01 | - | 0 | 0x1A | 22 | - | - |
| STATUS_MITTELWERT_RI_FAKTOR_5S | 0x6360 | STAT_MITTELWERT_FUER_RI_FAKTOR_5S_WERT | - | - | NV_SOH_RI_CORR_FCTR_ST | - | signed long | - | 0.01 | - | 0 | 0x1A | 22 | - | - |
| STATUS_ANZEIGE_SOC | 0x6361 | STAT_ANZEIGE_SOC_WERT | - | % | NV_ANZ_SOC | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HVB_HISTORIE_STROMBELASTUNG | 0x636D | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x636D |
| STATUS_HVB_HISTORIE_TEMPERATUR | 0x636E | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x636E |
| STATUS_HVB_HISTORIE_SOC_SEIT_EINBAU | 0x636F | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x636F |
| STATUS_HVPM_ENERGIEBORDNETZ_2 | 0x6370 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6370 |
| STATUS_KALTSTARTZAEHLER | 0x63A2 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A2 |
| STATUS_BETRIEBSART_HYBRID | 0x63A3 | STAT_BA_HYBRID_WERT | - | - | Ba_hybrid | - | unsigned char | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_NLK_ER_ANF | 0x63A4 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A4 |
| STATUS_HVPM_SPANNUNGSFREIHEIT | 0x63A5 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A5 |
| STATUS_HVB_HISTORIE_SOC_LADEHUEBE | 0x636B | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x636B |
| STATUS_HVB_HISTORIE_SOC_ENTLADEHUEBE | 0x636C | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x636C |
| STATUS_HV_BATT_HIST_SOC1_T1 | 0x63A6 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A6 |
| STATUS_HV_BATT_HIST_SOC2_T1 | 0x63A7 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A7 |
| STATUS_HV_BATT_HIST_SOC3_T1 | 0x63A8 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A8 |
| STATUS_HV_BATT_HIST_SOC4_T1 | 0x63A9 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63A9 |
| STATUS_HV_BATT_HIST_SOC5_T1 | 0x63AA | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63AA |
| STATUS_HV_BATT_HIST_SOC6_T1 | 0x63AB | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63AB |
| STATUS_HV_BATT_HIST_SOC7_T1 | 0x63AC | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63AC |
| STATUS_HV_BATT_HIST_SOC1_T2 | 0x63AD | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63AD |
| STATUS_HV_BATT_HIST_SOC2_T2 | 0x63AE | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63AE |
| STATUS_HV_BATT_HIST_SOC3_T2 | 0x63AF | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63AF |
| STATUS_HV_BATT_HIST_SOC4_T2 | 0x63B0 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B0 |
| STATUS_HV_BATT_HIST_SOC5_T2 | 0x63B1 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B1 |
| STATUS_HV_BATT_HIST_SOC6_T2 | 0x63B2 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B2 |
| STATUS_HV_BATT_HIST_SOC7_T2 | 0x63B3 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B3 |
| STATUS_HV_BATT_HIST_SOC1_T3 | 0x63B4 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B4 |
| STATUS_HV_BATT_HIST_SOC2_T3 | 0x63B5 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B5 |
| STATUS_HV_BATT_HIST_SOC3_T3 | 0x63B6 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B6 |
| STATUS_HV_BATT_HIST_SOC4_T3 | 0x63B7 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B7 |
| STATUS_HV_BATT_HIST_SOC5_T3 | 0x63B8 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B8 |
| STATUS_HV_BATT_HIST_SOC6_T3 | 0x63B9 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63B9 |
| STATUS_HV_BATT_HIST_SOC7_T3 | 0x63BA | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63BA |
| STATUS_HV_BATT_HIST_SOC1_T4 | 0x63BB | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63BB |
| STATUS_HV_BATT_HIST_SOC2_T4 | 0x63BC | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63BC |
| STATUS_HV_BATT_HIST_SOC3_T4 | 0x63BD | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63BD |
| STATUS_HV_BATT_HIST_SOC4_T4 | 0x63BE | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63BE |
| STATUS_HV_BATT_HIST_SOC5_T4 | 0x63BF | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63BF |
| STATUS_HV_BATT_HIST_SOC6_T4 | 0x63C0 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C0 |
| STATUS_HV_BATT_HIST_SOC7_T4 | 0x63C1 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C1 |
| STATUS_HV_BATT_HIST_SOC1_T5 | 0x63C2 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C2 |
| STATUS_HV_BATT_HIST_SOC2_T5 | 0x63C3 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C3 |
| STATUS_HV_BATT_HIST_SOC3_T5 | 0x63C4 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C4 |
| STATUS_HV_BATT_HIST_SOC4_T5 | 0x63C5 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C5 |
| STATUS_HV_BATT_HIST_SOC5_T5 | 0x63C6 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C6 |
| STATUS_HV_BATT_HIST_SOC6_T5 | 0x63C7 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C7 |
| STATUS_HV_BATT_HIST_SOC7_T5 | 0x63C8 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C8 |
| STATUS_HV_BATT_HIST_SOC1_T6 | 0x63C9 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63C9 |
| STATUS_HV_BATT_HIST_SOC2_T6 | 0x63CA | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63CA |
| STATUS_HV_BATT_HIST_SOC3_T6 | 0x63CB | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63CB |
| STATUS_HV_BATT_HIST_SOC4_T6 | 0x63CC | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63CC |
| STATUS_HV_BATT_HIST_SOC5_T6 | 0x63CD | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63CD |
| STATUS_HV_BATT_HIST_SOC6_T6 | 0x63CE | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63CE |
| STATUS_HV_BATT_HIST_SOC7_T6 | 0x63CF | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63CF |
| STATUS_HV_BATT_HIST_SOC1_T7 | 0x63D0 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D0 |
| STATUS_HV_BATT_HIST_SOC2_T7 | 0x63D1 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D1 |
| STATUS_HV_BATT_HIST_SOC3_T7 | 0x63D2 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D2 |
| STATUS_HV_BATT_HIST_SOC4_T7 | 0x63D3 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D3 |
| STATUS_HV_BATT_HIST_SOC5_T7 | 0x63D4 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D4 |
| STATUS_HV_BATT_HIST_SOC6_T7 | 0x63D5 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D5 |
| STATUS_HV_BATT_HIST_SOC7_T7 | 0x63D6 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D6 |
| STATUS_12VBATT_ENTL_STANDKL | 0x63D7 | STAT_NV_ENTL_12VBATT_STD_WERT | - | Ah | NV_ENTL_12VBATT_STD | - | unsigned int | - | 0.2 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HVPM_MSA_2 | 0x63D8 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D8 |
| STATUS_HVPM_DCDC_ALS | 0x63D9 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63D9 |
| STATUS_ANF_NL | 0x63DA | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63DA |
| STATUS_NLM_DEAK | 0x63DB | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63DB |
| STATUS_NLM_ERREAKT | 0x63DC | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63DC |
| STATUS_MAXIMALER_ANZEIGE_SOC | 0x6362 | STAT_MAXIMALER_ANZEIGE_SOC_WERT | - | % | NV_ANZ_SOC_MAX | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_MINIMALER_ANZEIGE_SOC | 0x6363 | STAT_MINIMALER_ANZEIGE_SOC_WERT | - | % | NV_ANZ_SOC_MIN | - | signed long | - | 1 | - | 0 | 0x1A | 22 | - | - |
| STATUS_HVB_HISTORIE_MIN_SOC | 0x6369 | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6369 |
| STATUS_HVB_HISTORIE_MAX_SOC | 0x636A | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x636A |
| STATUS_TA_PRUEFSTAND | 0x63DD | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63DD |
| STATUS_RLS_SINUS_COSINUS | 0x63DE | - | - | - | - | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x63DE |
| STEUERN_ROTORLAGESENSOR_ANLERNEN | 0xF500 | - | - | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF500 | RES_0xF500 |
| STEUERN_DCDC_WANDLER | 0xF502 | - | RIDI_DCDC - Steuern der HV-Spannung des DC/DC-Wandlers | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF502 | RES_0xF502 |
| STEUERN_HV_SYSTEM_ON_OFF | 0xF503 | - | RIDI_HYSYS - Hoch-/Runterfahren HV-System | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF503 | RES_0xF503 |
| STEUERN_EME_PUMPE | 0xF504 | - | RIDI_EMECWP5 - Vorgabe der Drehzahl Kühlwasserpumpe für die EME | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF504 | RES_0xF504 |
| STEUERN_DME_LEERLAUFREGELUNG_AKTIVIEREN | 0xF505 | - | RIDI_DMELLR - Leerlaufregler der DME aktivieren | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF505 | - |
| STEUERN_ELEKTRISCHE_MASCHINE_GENERATORBETRIEB | 0xF506 | - | RIDI_EMGENERATOR negative Momentengrenzen auf Null setzen, Md_em1_min_1s/10s_pm. Umsetzung in der Funktion P_emko_emlim | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF506 | - |
| STEUERN_HVPM_INFOSPEICHER_STRZLR_LOESCHEN | 0xF507 | - | RIDI_HVPM_STRZLR_CLR - Löschen Infospeicher HSPM | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF507 | - |
| STEUERN_HVPM_INFOSPEICHER_SPMON_LOESCHEN | 0xF508 | - | RIDI_HVPM_SPMON_CLR - Löschen Infospeicher HVPM | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF508 | - |
| STEUERN_ENTLADEMODUS | 0xF509 | - | RIDI_ENTLADEMODUS - Schütze müssen geschlossen sein und Temperatur der Batterie über 10°C und  KL15 On Kein Gang | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF509 | RES_0xF509 |
| STEUERN_LADEMODUS | 0xF50A | - | RIDI_LADEMODUS - Schütze müssen geschlossen sein und Temperatur der Batterie über 10°C und  KL15 On Kein Gang | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF50A | RES_0xF50A |
| STEUERN_REFERENZKAPAZITAET_HVB | 0xF50B | - | RIDI_REFKAP_HVB - Die auf dem Tester ermittelte Referenzkapazität wird auf die EME geschrieben | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF50B | - |
| STEUERN_ELEKTRISCHE_MASCHINE | 0xF50C | - | RIDI_EMASCHINE - Über STEUERN_ELEKTRISCHE_MASCHINE lassen sich die Betriebsart der E-Maschine (Momenten- oder Drehzahl-Vorgabe) einstellung und das Moment bzw. die Drehzahl vorgeben. Betriebsart = 0 --> Momenten-Vorgabe Md_em1_soll_steuern Betriebsart = 1 --> Drehzahl-Vorgabe N_em1_soll_steuern | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF50C | - |
| STEUERN_HVPM_INFOSPEICHER_MSA_LOESCHEN | 0xF50D | - | RIDI_HVPM_MSA_CLR - Alle Infospeicher aus Job STATUS_HVPM_MSA Null setzen | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF50D | - |
| STEUERN_HVPM_INFOSPEICHER_PKOR_LOESCHEN | 0xF50E | - | RIDI_HVPM_PKOR_CLR - Alle Infospeicher aus Job STATUS_HVPM_EKMV Null setzen | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF50E | - |
| STEUERN_EEP_RECALL_DEFAULT | 0xF50F | - | Zurücksetzen der ZFS-EEPROM-Parameter auf Defaultwerte | - | - | - | - | - | - | - | - | 0x1A | 31 | - | - |
| STEUERN_NLM_INFO_ERS_LOESCHEN | 0xF510 | - | RIDI_NLM_ERS_CLR - Historienspeicher NLM Infos Ersatzreaktionen Null setzen | - | - | - | - | - | - | - | - | 0x1A | 2E | ARG_0xF510 | - |
| STEUERN_PHASENUNTERBRECHUNG_STILLSTAND | 0xF511 | - | Phasenunterbrechung im Stillstand | - | - | - | - | - | - | - | - | 0x1A | 31 | - | RES_0xF511 |
| STEUERN_START_DCDC_CPLD_UPDATE | 0xF512 | - | Start und Status CPLD-Update | - | - | - | - | - | - | - | - | 0x1A | 31 | ARG_0xF512 | RES_0xF512 |

### TAB_STAT_HV_ISOLATION_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | ok |
| 0x01 | nicht ok |
| 0x02 | Test nicht möglich |

### TAB_STAT_PRECHARGE_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Zwischenkreis nicht geladen |
| 0x01 | Zwischenkreis geladen |

### TAB_STAT_HVIL_GESAMT_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Interlock nicht unterbrochen |
| 0x01 | Interlock unterbrochen |

### TAB_ST_DIAG_DCDC_ANF

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle an EME-SW |
| 1 | Anforderung Buck-Modus |
| 2 | Anforderung Boost-Modus |
| 3 | Anforderung Standby-Modus |

### TAB_ST_B_DIAG_DCDC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_B_SOC_DIAG_LAD_LMT | - | - | unsigned char | 0x01 | - | - | - | - | - | - | 0: Abbruchbedingung EME-SW |
| STAT_B_I_DIAG_DCDC_LV_OUT | 0/1 | - | unsigned char | 0x02 | - | - | - | - | - | - | 0: Systemgrenze verwenden |
| STAT_B_I_DIAG_DCDC_HV_OUT | 0/1 | - | unsigned char | 0x04 | - | - | - | - | - | - | 0: Systemgrenze verwenden |
| STAT_B_U_DIAG_DCDC_LV_OUT | 0/1 | - | unsigned char | 0x08 | - | - | - | - | - | - | 0: Systemgrenze verwenden |
| STAT_B_U_DIAG_DCDC_HV_OUT | 0/1 | - | unsigned char | 0x10 | - | - | - | - | - | - | 0: Systemgrenze verwenden |

### RES_ST_DIAG_DCDC_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | PENDING |
| 1 | SUCCESS |
| 2 | FAILURE |

### RES_ST_DIAG_DCDC_GRENZEN

| WERT | TEXT |
| --- | --- |
| 1 | SUCCESS |
| 2 | FAILURE |

### TAB_ST_DIAG_HV_ANF

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle an EME-SW |
| 1 | Hochfahren HV-System angefordert |
| 2 | Runterfahren HV-System angefordert |

### RES_ST_DIAG_HVSTART

| WERT | TEXT |
| --- | --- |
| 0 | PENDING |
| 1 | SUCCESS |
| 2 | FAILURE |

### ARG_EME_ANTRIEBSART

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_EME_ANTRIEBSART | - | - | unsigned char | - | TAB_ST_EME_ANTRIEBSART | 1 | 1 | 0 | 0 | 1 | Ansteuerung EME Antriebsart, keine EM Unterstuetzung |

### TAB_ST_EME_ANTRIEBSART

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle an EME-SW |
| 1 | Keine EM-Unterstuetzung |

### TAB_ST_EM_GENERATOR

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle an EME-SW |
| 1 | EM Generatorbetrieb |

### TAB_ST_DME_LLR

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle an EME-SW |
| 1 | LLR auf DME aktivieren |

### TAB_STAT_KL50L_NR

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Ein |

### TAB_STAT_DCDC_LADEMODUS_NR

| WERT | TEXT |
| --- | --- |
| 0 | Off |
| 1 | Buck |
| 2 | Boost |
| 3 | geregelt |

### TAB_STAT_EME_ANTRIEBSART_NR

| WERT | TEXT |
| --- | --- |
| 0 | MSA |
| 1 | Boost |
| 2 | Boost |
| 3 | Rekuperation |
| 4 | Batterie Entladen |
| 5 | Batterie Laden |

### TAB_ST_ROTORLAGESENSOR_ANLERNEN

| WERT | TEXT |
| --- | --- |
| 0 | Spannungskalibrierung |
| 1 | Stromkalibrierung |
| 2 | EPS-Offsetkalibrierung |

### RES_0X6312

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENWIDERSTAND_WERT | - | - | unsigned int | - | - | - | - | - | Wert des Innenwiderstandes der HV-Batterie |
| STAT_INNENWIDERSTAND_EINH | - | - | unsigned char | - | - | - | - | - | Einheit des Innenwiderstandes der HV-Batterie |

### TAB_KL30C_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Crash nicht erkannt |
| 1 | Crash erkannt |

### TAB_ROTORLAGE_SENSOR_STATUS

| WERT | TEXT |
| --- | --- |
| 70 | Die Routine Rotorlagesensor Anlernen wurde fehlerhaft beendet. |
| 73 | Die Routine Rotorlagesensor Anlernen wurde gestartet und läuft. |
| 82 | Die Routine Rotorlagesensor Anlernen wurde erfolgreich beendet. |

### TAB_EM_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0 | Momentenvorgabe |
| 1 | Drehzahlvorgabe |

### TAB_HV_SYS_ON_OFF

| WERT | TEXT |
| --- | --- |
| WERT | TEXT |
| 0 | Keine Anforderung |
| 1 | Anforderung HV ein |
| 2 | Anforderung HV aus |

### ARG_0X630B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_EME_ANTRIEBSART | 0-n | - | unsigned char | - | TAB_ST_EME_ANTRIEBSART | 1 | 1 | - | - | 1 | Ansteuerung EME Antriebsart, keine EM Unterstuetzung |

### RES_0XF500

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_MODE | - | - | + | 0-n | - | unsigned char | - | TAB_ROTORLAGE_SENSOR_STATUS | 1 | 1 | 0 | Status und Mode |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | ° | - | int | - | - | 180 | 32768 | 0 | EPS Offset |

### ARG_0XF500

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_ROTORLAGESENSOR_ANLERNEN | + | - | 0-n | - | unsigned char | - | TAB_ST_ROTORLAGESENSOR_ANLERNEN | - | - | - | - | - | - |

### RES_0XF502

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_DIAG_DCDC_MODUS | - | - | + | 0-n | - | unsigned char | - | RES_ST_DIAG_DCDC_MODUS | 1 | 1 | 0 | Result DCDC-Modus |
| STAT_ST_DIAG_DCDC_GRENZEN | - | - | + | 0-n | - | unsigned char | - | RES_ST_DIAG_DCDC_GRENZEN | 1 | 1 | 0 | Result DCDC-Grenzen |

### ARG_0XF502

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_DCDC_ANF | + | - | 0-n | - | unsigned char | - | TAB_ST_DIAG_DCDC_ANF | - | - | - | - | - | DCDC Betriebsmodus |
| ST_B_DIAG_DCDC_WERT | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Steuerung der Systemgrenzen (bitkodiert, dezimal z.B. 111111b = 31.) |
| SOC_DIAG_LAD_LMT | + | - | % | - | unsigned int | - | - | 1 | 1 | 0 | 0 | 100 | HV-SOC |
| I_DIAG_DCDC_LV_OUT | + | - | A | - | signed int | - | - | 10 | 1 | 0 | -200 | 200 | I_LV Systemgrenze für Steuerung |
| I_DIAG_DCDC_HV_OUT | + | - | A | - | signed int | - | - | 10 | 1 | 0 | -25 | 25 | I_HV Systemgrenze für Steuerung |
| U_DIAG_DCDC_LV_OUT | + | - | V | - | unsigned int | - | - | 10 | 1 | 0 | 0 | 33 | U_LV Systemgrenze für Steuerung |
| U_DIAG_DCDC_HV_OUT | + | - | V | - | unsigned int | - | - | 10 | 1 | 0 | 0 | 300 | U_LV Systemgrenze für Steuerung |

### RES_0XF503

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HY_SYSTEM_ON_OFF | - | - | + | 0-n | - | unsigned char | - | TAB_HV_SYS_ON_OFF | 1 | 1 | 0 | 0 - keine Anforderung 1 - Anforderung HV ein 2 - Anforderung HV aus |

### ARG_0XF503

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DIAG_HV_ANF | + | - | 0-n | - | unsigned char | - | TAB_ST_DIAG_HV_ANF | - | - | - | - | - | HV-System Hoch- u. Runterfahren |

### RES_0XF504

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EME_PUMPE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | 0= Ansteueuerung nicht aktiv 1 = Ansteuerung aktiv |

### ARG_0XF504

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL_EME_PUMPE | + | - | % | - | unsigned char | - | - | - | - | - | 0 | 100 | Sollwert für Pumpemansteuerung |

### ARG_0XF505

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_DME_LLR | 0-n | - | unsigned char | - | TAB_ST_DME_LLR | 1 | 1 | 0 | 0 | 1 | Leerlaufregler der DME aktivieren |

### ARG_0XF506

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_EM_GENERATOR | 0-n | - | unsigned char | - | TAB_ST_EM_GENERATOR | 1 | 1 | 0 | 0 | 1 | HV-System Hoch- u. Runterfahren |

### ARG_0XF507

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | unsigned char | - | - | - | - | - | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XF508

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | unsigned char | - | - | - | - | - | - | - | wegen Kompatibilität zu ToolSet32 |

### RES_0XF509

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTLADEMODUS_WERT | + | + | + | - | - | unsigned char | - | - | - | - | - | 0 = n.i.O. (mindestens eine Voraussetzung ist nicht erfüllt) 1 = i.O. |
| STAT_SOC_SOLL_UNTEN_WERT | + | + | + | - | - | unsigned char | - | - | - | - | - | 0 = n.i.O. SoC-Soll_Unten ist kleiner als SoC-Min 1 = i.O     SoC-Soll_Unten ist grösser als SoC-Min |
| STAT_ENTLADEN_HVB_WERT | + | + | + | - | - | unsigned char | - | - | - | - | - | Entladeprozess ist beendet 1 = Das Entladen ist abgeschlossen 0 = Das Entladen ist noch nicht abgeschlossen |

### ARG_0XF509

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENTLADEMODUS | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 1 | Aufforderung des Testers an die EME den Entlademodus zu setzen:  0 = Keine Aufforderung,  1 = Aufforderung liegt vor |
| SOC_SOLL_UNTEN | + | - | % | - | unsigned int | - | - | - | - | - | 0 | 100 | Der untere SoC-Sollwert wird gesetzt (Beim Entladeprocess der anzusteuernde SoC-Wert) |

### RES_0XF50A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEMODUS_WERT | + | + | + | - | - | unsigned char | - | - | - | - | - | 0 = n.i.O. (mindestens eine Voraussetzung ist nicht erfüllt) 1 = i.O. |
| STAT_SOC_SOLL_OBEN_WERT | + | + | + | - | - | unsigned char | - | - | - | - | - | 0 = n.i.O. SoC-Soll_Oben ist grösser als SoC-Max 1 = i.O     SoC-Soll_Oben ist grösser als SoC-Max |
| STAT_LADEN_HVB_WERT | + | + | + | - | - | unsigned char | - | - | - | - | - | Ladeprozess ist beendet 1 = Das Laden ist abgeschlossen 0 = Das Laden ist noch nicht abgeschlossen |

### ARG_0XF50A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LADEMODUS | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 1 | Auforderung des Testers an die EME den Lademodus zu setzen 1 Aufforderung vom Tester liegt vor 0 keine Aufforderung vom Tester |
| SOC_SOLL_OBEN | + | - | % | - | unsigned int | - | - | - | - | - | 0 | 100 | Der obere SoC-Sollwert wird gesetzt (Beim Ladeprocess der anzusteuernde SoC-Wert) |

### ARG_0XF50B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REFERENZKAPAZITAET_HVB | As | - | unsigned int | - | - | - | - | - | 0 | 50000 | Die auf dem Tester ermittelte Referenzkapazität wird auf die EME geschrieben |

### ARG_0XF50C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EM_BETRIEBSART | + | - | 0-n | - | unsigned char | - | TAB_EM_BETRIEBSART | - | - | - | 0 | 1 | Betriebsart für EM-Steuerung: 0=Momentenvorgabe, 1= Drehzahlvorgabe |
| MOMENTENVORGABE | + | - | Nm | - | signed int | - | - | 0,1 | - | 0 | - | - | Momentenvorgabe |
| DREHZAHLVORGABE | + | - | 1/min | - | unsigned int | - | - | 1 | - | 0 | - | - | Drehzahlvorgabe |

### ARG_0XF50D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | unsigned char | - | - | - | - | - | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XF50E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | unsigned char | - | - | - | - | - | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XF510

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | unsigned char | - | - | - | - | - | - | - | wegen Kompatibilität zu ToolSet32 |

### ARG_0XF512

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | + | - | - | - | signed long | - | - | - | - | - | - | - | Freigabecode |

### RES_0XF511

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHASE_U_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | 0x02 = Phase Open, 0x03 = Phase OK, 0xFF = Phase Unknown |
| STAT_PHASE_V_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | 0x02 = Phase Open, 0x03 = Phase OK, 0xFF = Phase Unknown |
| STAT_PHASE_W_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | 0x02 = Phase Open, 0x03 = Phase OK, 0xFF = Phase Unknown |

### RES_0XF512

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_CPLD_UPDATE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Status CPLD Update: 0 = INVALID, 1 = VALID |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM-Stand                         (3 Bytes 1Bit=1km) | km | - | unsigned int | - | - | - | - |
| 0x1701 | Systemzeit                       (1Bit=1sec) | sec | - | unsigned long | - | - | - | - |
| 0x1702 | SAE-Code                        (3 Bytes) | - | - | unsigned int | - | - | - | - |
| 0x4100 | Systemstatus | - | - | unsigned char | - | - | - | - |
| 0x4101 | Bordnetzstrom LV | A | - | signed int | - | - | 64 | - |
| 0x4103 | Strom im Zwischenkreis | A | - | unsigned int | - | - | - | - |
| 0x4105 | Spannung im Zwischenkreis | V | - | unsigned int | - | - | 32 | - |
| 0x4203 | BMW Layer:Ist- Wellenmoment der EM1 | - | - | signed int | BMW_Md_em1_ist | - | 2 | - |
| 0x4210 | BMW Layer:Temperaturwert der HV Schalter des DcDc Wandlers. Signal für das Wärmemanagement in der DME. | - | - | signed int | BMW_T_dcdc1 | - | 10 | - |
| 0x4211 | BMW Layer:Vorhalt: Temperaturwert der LV Schalter des DcDc Wandlers | - | - | signed int | BMW_T_dcdc1_kuehl | - | 10 | - |
| 0x4212 | BMW Layer:Temperatur LE-Steuergerät (nach intern) | - | - | signed int | BMW_T_ecu_em1 | - | 10 | - |
| 0x4213 | BMW Layer:Temperatur EM1 | - | - | signed int | BMW_T_em1 | - | 10 | - |
| 0x4216 | BMW Layer:Istdrehzahl EM1 | - | - | unsigned int | BMW_N_em1_ist | - | 2 | -5000 |
| 0x4218 | BMW Layer:Nkw | - | - | unsigned int | BMW_Nkw | - | 4 | - |
| 0x4223 | BMW Layer:Ladezustand der HV-Batterie Nur Dummy für KIFA-KSP | - | - | unsigned int | BMW_Soc_hvpm_ist | - | 10 | - |
| 0x4224 | BMW Layer:DC Spannung der EMR (HV-Batterieseitig ) (nach intern) | - | - | unsigned int | BMW_U_dc_hv_le_ist | - | 100 | - |
| 0x4225 | BMW Layer:Istspannung HV-Seite | - | - | unsigned int | BMW_U_dcdc1_hv | - | 10 | - |
| 0x4226 | BMW Layer:Istspannung LV-Seite | - | - | unsigned int | BMW_U_dcdc1_lv | - | 10 | - |
| 0x4229 | BMW Layer:Grund für AKS-Fehlerreaktion durch BMW-Ebene 2 Signal aus BMW-Ebene 2 | - | - | unsigned char | BMW_AKSgrund_UE2 | - | - | - |
| 0x4232 | BMW Layer:Aktuelle Betriebsart E-Maschine. | - | - | unsigned char | BMW_Ba_em1_ist | - | - | - |
| 0x4233 | BMW Layer:Grund für DCDC-Standby-Fehlerreaktion durch BMW-Ebene 2 Signal aus BMW-Ebene 2 | - | - | unsigned char | BMW_DCDCStbygrund_UE2 | - | - | - |
| 0x4234 | BMW Layer:Grund für HV-Aus-Fehlerreaktion durch BMW-Ebene 2 Signal aus BMW-Ebene 2 | - | - | unsigned char | BMW_HVAusgrund_UE2 | - | - | - |
| 0x4237 | BMW Layer:Grund für Steuergeräte-Reset-Fehlerreaktion durch BMW-Ebene 2 Signal aus BMW-Ebene 2 | - | - | unsigned char | BMW_Resetgrund_UE2 | - | - | - |
| 0x4241 | BMW Layer:Istzustand Batterieschütze | - | - | unsigned char | BMW_St_sw_sme | - | - | - |
| 0x4243 | BMW Layer:Grund für Zwischenkreisentladung-Fehlerreaktion durch BMW-Ebene 2 Signal aus BMW-Ebene 2 | - | - | unsigned char | BMW_ZKEntlgrund_UE2 | - | - | - |
| 0x4244 | BMW Layer:Grund für Verhinderung Zwischenkreisentladung-Fehlerreaktion durch BMW-Ebene 2 Signal aus BMW-Ebene 2 | - | - | unsigned char | BMW_ZKEntlverhgrund_UE2 | - | - | - |

### RCMTEXT

| NR | TEXT |
| --- | --- |
| 0 | No Error |
| 1 | Rom Init Phase Failed |
| 2 | Rom Runtime Failed |
| 3 | Ram Init Phase Failed |
| 4 | Ram Runtime Failed |
| 5 | ADC Pulsetest Failed |
| 6 | Adct Compare Current U |
| 7 | Adct Compare Current V |
| 8 | Adct Compare Sine |
| 9 | Adct Compare Cosine |
| 10 | L2 Sns Phase U Out Of Range High |
| 11 | L2 Sns Phase V Out Of Range Low |
| 12 | L2 Sns Phase V Out Of Range High |
| 13 | L2 Sns Phase W Out Of Range Low |
| 14 | L2 Sns Off Phase Out Of Range |
| 15 | Wda Test Failed |
| 16 | Inverter Cpld Init Failed |
| 17 | Power Stage Test Failed |
| 18 | Adc Rdy Int Counter |
| 19 | L2 Snapshot Counter |
| 20 | L2 Layerout Data |
| 21 | L2 Interlock Error |
| 22 | L2 Comp Iq Error |
| 23 | L2 Comp Iq Filtered Error |
| 24 | L2 Rcm Could Not Get Mmc Reset Information |
| 25 | L2 Comp Torque Auth Error |
| 26 | L2 Phase Curr Sum Out Of Range |
| 27 | L2 Comp Angle Plausi Error |
| 28 | L2 Speed Plausi Error |
| 29 | L2 Torque Mismatch |
| 30 | L2 Redundant Data |
| 31 | L2 Cas Redundant Data |
| 32 | L2 TO Can Msg |
| 33 | L2 CRC Of Can Msg Faulty |
| 34 | L2 Cnt Of Can Msg Faulty |
| 35 | L2 Sns Phase U Out Of Range Low |
| 36 | L2 Eps Out Of Tolerance |
| 37 | SCB Configuration Failed |
| 38 | EC Limit Of MM Reached |
| 39 | EC In MM Does Not Change |
| 40 | L2 Limphome Error |
| 41 | CPLD Clock |
| 42 | 33V of CY320 Faulty |
| 43 | 5V of CY320 Faulty |
| 44 | No L2 Asc In Table Mode |
| 45 | Hwe Eep Empty Or Corrupted |
| 46 | Hwe Version Mismatch |
| 47 | Em ZFS Para Set Failed |
| 48 | L2 Sns Cal Const Out Of Rng |
| 49 | L2 Sns Phase W Out Of Range High |
| 50 | L2 High Voltage Problem |
| 51 | DcDc HW Init Err |
| 52 | DcDc HW Init PreCond Failed |
| 53 | Crt Failed |
| 54 | L3 Ext Watchdog Reset |
| 55 | Power Down Failed |
| 56 | Int Init Phase Failed |
| 57 | Reg Init Phase Failed |
| 58 | Reserved 58 |
| 59 | Reserved 59 |
| 60 | Reserved 60 |
| 61 | Reserved 61 |
| 62 | Reserved 62 |
| 63 | Reserved 63 |
| 64 | Reserved 64 |
| 65 | Reserved 65 |
| 66 | Reserved 66 |
| 67 | Reserved 67 |
| 68 | Reserved 68 |
| 69 | Reserved 69 |
| 70 | Reserved 70 |
| 71 | Reserved 71 |
| 0xFF | undefinierter Resetgrund |
