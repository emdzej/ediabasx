# rk_vr.prg

## General

|  |  |
| --- | --- |
| File | rk_vr.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 36 |
| Origin | BMW EF-63 Andreas_Hagl |
| Revision | 2.002 |
| Author | Continental SV_C_SC_C_T1_SW_SE Dr_Xiaohang_Zhang |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | RK_VR |  |  |
| ORIGIN | string | BMW EF-63 Andreas_Hagl |  |  |
| REVISION | string | 2.002 |  |  |
| AUTHOR | string | Continental SV_C_SC_C_T1_SW_SE Dr_Xiaohang_Zhang |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.11 |  |  |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Regelfunktion deaktiviert |
| 0x01 | Spezieller Energiesparmode | Regelfunktion deaktiviert |
| 0x03 | MOST-Mode | Regelfunktion deaktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x02A600 | Energiesparmodus aktiv | 0 |
| 0x02FFA6 | Dummy Applikationsfehler für DM-Test | 0 |
| 0x481120 | SG intern: Unterspannung erkannt | 1 |
| 0x481121 | SG intern: Überspannung erkannt | 1 |
| 0x481122 | SG intern: Radbeschleunigungssensor - Fehler bei Diagnosetest | 0 |
| 0x481123 | SG intern: Radbeschleunigungsensor - Wert unterhalb Schwelle | 0 |
| 0x481124 | SG intern: Radbeschleunigungsensor - Wert oberhalb Schwelle | 0 |
| 0x481125 | SG intern: Radbeschleunigungsensor - Statusfehler | 0 |
| 0x481126 | SG intern: Lastkreis Spule Druckstufe  - Spulenstrom zu hoch | 0 |
| 0x481127 | SG intern: Lastkreis Spule Druckstufe - Spulenabriss | 0 |
| 0x481128 | SG intern: Lastkreis Spule Druckstufe - Windungsschluss Spule | 0 |
| 0x48112A | SG intern: Lastkreis Spule Druckstufe - Kurzschluss nach Masse | 0 |
| 0x48112B | SG intern: Basissoftware - Online Stromregler Plausibilisierung Druckstufe | 0 |
| 0x48112C | SG intern: Basissoftware - ROM/SWE-Parameter Stromregler außerhalb des gültigen Bereichs | 0 |
| 0x48112D | SG intern: Basissoftware - EEEPROM Parameter Stromregler außerhalb des gültigen Bereichs | 0 |
| 0x48112E | SG intern: Basissoftware - Stromabgleich Checksumme ungueltig | 0 |
| 0x48112F | SG intern: Basissoftware - Spannungs-/Stromabgleichwerte fehlerhaft | 0 |
| 0x481131 | SG intern: Basissoftware - Stromregler Druckstufe nicht aktiv | 0 |
| 0x481132 | SG intern: Basissoftware - Stromregler Zugstufe nicht aktiv | 0 |
| 0x48113D | SG intern: CAF Version ist inkompatibel zu SG-SW | 0 |
| 0x48113E | SG intern: Variante aus Fahrzeugauftrag nicht im Steuergeraet-SW vorhanden | 0 |
| 0x48113F | SG intern: OSEK Time nicht synchron | 0 |
| 0x481141 | SG intern: Lastkreis Spule Zugstufe - Spulenstrom zu hoch | 0 |
| 0x481142 | SG intern: Lastkreis Spule Zugstufe - Spulenabriss | 0 |
| 0x481143 | SG intern: Lastkreis Spule Zugstufe - Windungsschluss Spule | 0 |
| 0x481145 | SG intern: Lastkreis Spule Zugstufe - Kurzschluss nach Masse | 0 |
| 0x481146 | SG intern: Basissoftware - Online Stromregler Plausibilisierung Zugstufe | 0 |
| 0x481147 | SG intern: Codierung - nicht codiert | 0 |
| 0x481148 | SG intern: Codierung - Übertragung fehlgeschlagen | 0 |
| 0x481149 | SG intern: Codierung - Signaturfehler | 0 |
| 0x48114A | SG intern: Codierung - falsche Fahrgestellnummer | 0 |
| 0x48114B | SG intern: Codierung - ungültige Codierdaten | 0 |
| 0x48114C | SG intern: Kennfeld-Fehler | 0 |
| 0x48114D | SG intern: Online Speicherfehler | 0 |
| 0x48114E | SG intern: CPU Fehler | 0 |
| 0xF2841F | FlexRay physical bus error on BUS | 0 |
| 0xF28420 | FlexRay controller error on BUS | 0 |
| 0xF28BFF | Dummy Netzwerkfehler für DM-Test  | 0 |
| 0xF29400 | FlexRay Botschaftsfehler -  Dombeschleunigung | 1 |
| 0xF29401 | FlexRay Botschaftsfehler -  Kilometerstand | 1 |
| 0xF29403 | FlexRay Botschaftsfehler - Höhenstand Fahrzeug | 1 |
| 0xF29404 | FlexRay Botschaftsfehler - Klemmen | 1 |
| 0xF29406 | FlexRay Botschaftsfehler - Geschwindigkeit Fahrzeug | 1 |
| 0xF29407 | FlexRay Botschaftsfehler - Vorgabe Dämpfer Anteil passiv | 1 |
| 0xF29408 | FlexRay Botschaftsfehler - Vorgabe Dämpfer Skyhookkraft | 1 |
| 0xF29409 | FlexRay Botschaftsfehler - Vorgabe Druckstufe Dämpfer Anteil passiv | 1 |
| 0xF2940A | FlexRay Botschaftsfehler - Daten Antriebsstrang 2 | 1 |
| 0xF2940B | FlexRay Botschaftsfehler -  Außentemperatur | 1 |
| 0xF2AC00 | FlexRay Signalfehler - Außentemperatur | 1 |
| 0xF2AC06 | FlexRay Signalfehler - Zustand Straße | 1 |
| 0xF2AC0B | FlexRay Signalfehler - Geschwindigkeit Fahrzeug | 1 |
| 0xF2AC11 | FlexRay Signalfehler - Höhenstand Fahrzeug | 1 |
| 0xF2AC12 | FlexRay Signalfehler - Status_Antrieb_Fahrzeug  | 1 |
| 0xF2AC13 | FlexRay Signalfehler -  Status Fahrzeug Zustand | 1 |
| 0xF2AC14 | FlexRay Signalfehler - Status Klemme | 1 |
| 0xF2AC15 | FlexRay Signalfehler - Status Klemme 15N | 1 |
| 0xF2AC21 | FlexRay Signalfehler - Dämpfer Druckstufe Anteil passiv langsam | 1 |
| 0xF2AC22 | FlexRay Signalfehler - Dämpfer Anteil passiv langsam | 1 |
| 0xF2AC23 | FlexRay Signalfehler - Steuerung Radknoten | 1 |
| 0xF2AC24 | FlexRay Signalfehler -  Qualifier Funktion VDC | 1 |
| 0xF2AC25 | FlexRay Signalfehler - Status Stillstand Fahrzeug VDC | 1 |
| 0xF2AC26 | FlexRay Signalfehler - Soll Skyhookkraft Dämpfer | 1 |
| 0xF2AC27 | FlexRay Signalfehler - Kilometerstand | 1 |
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
| 0x1704 | Spannung_Klemme30G | V | - | unsigned int | - | 10 | 1000 | - |
| 0x1705 | Status_Fahrzeug_Zustand  | Hex | - | unsigned char | - | - | - | - |
| 0x1706 | Radbeschleunigung | mg | - | signed int | - | 1013 | 159 | - |
| 0x1707 | Ist_Strom_Daempfer_Druck | A | - | unsigned int | - | - | 512 | - |
| 0x1708 | Ist_Strom_Daempfer_Zug | A | - | unsigned int | - | - | 512 | - |
| 0x1709 | Fehlermanager_Qualifier | 0-n | - | 0xC7F0 | FM_QU_ERROR | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xA60000 | Schreibfehler NVRAM  | 0 |
| 0xA60001 | Lesefehler NVRAM  | 0 |
| 0xA60002 | Kontrollfehler NVRAM  | 0 |
| 0xA60003 | Löschfehler NVRAM  | 0 |
| 0xA60004 | Blockschreibfehler NVRAM  | 0 |
| 0xA60005 | Konfigurationsfehler NVRAM  | 0 |
| 0xA60006 | Blocklesefehler NVRAM | 0 |
| 0xA6000C | Puffer DM ist voll | 0 |
| 0xA6000D | Puffer DM ist geloescht | 0 |
| 0xA6000E | Flexray Botschaftsfehler - Relativzeit | 1 |
| 0xA6000F | FlexRay Botschaftsfehler - Fahrzeugzustand | 1 |
| 0xA60010 | FlexRay Signalfehler - Status Energie FZM | 1 |
| 0xA60011 | FlexRay Signalfehler - Status Sperre Fehlerspeicher FZM | 1 |
| 0xA60012 | SG intern: Reset Fehler | 0 |
| 0xA60013 | SG intern: Fehler EEEPROM | 0 |
| 0xA60014 | Flex-Ray physikalischer Busfehler (Transceiver Fehler) Info | 0 |
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
| 0x1705 | Status_Fahrzeug_Zustand  | Hex | - | unsigned char | - | - | - | - |
| 0x1709 | Fehlermanager_Qualifier | 0-n | - | 0xC7F0 | FM_QU_ERROR | - | - | - |
| 0x170A | Status_Transceiver | Hex | - | unsigned int | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_EDCS_STROMREGLER_PAR | 0xDBB1 | - | Stromreglerwerte lesen | - | - | - | - | - | - | - | - | - | 2F | - | RES_0xDBB1 |
| STATUS_EDCS_STROMABGLEICH_ZUGSTUFE_VENTIL | 0xDBB2 | - | Stromabgleichwerte Ventil Zugstufe lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBB2 |
| STATUS_EDCS_DRUCKSTUFE_VENTIL | 0xDBB3 | - | Stromabgleichwerte Ventil Druckstufe lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBB3 |
| STEUERN_EDCS_DRUCKSTUFE_SOLLSTROM | 0xDBB4 | - | Vorgeben des  Sollstromes für die Ventil Druckstufe | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDBB4 | - |
| STATUS_EDCS_AW | 0xDBB5 | - | ADC-Analogwerte lesen | - | - | - | - | - | - | - | - | - | 2F | - | RES_0xDBB5 |
| STEUERN_EDCS_ZUGSTUFE_SOLLSTROM | 0xDBB7 | - | Vorgeben des Sollstromes für die Zugstufe | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDBB7 | - |
| STATUS_EDCS_AW_PHY | 0xDBBC | - | ADC-Analogwerte lesen | - | - | - | - | - | - | - | - | - | 2F | - | RES_0xDBBC |
| STEUERN_KENNFELD_SCHREIBEN | 0xDBC0 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBC0 | - |
| STATUS_KENNFELD_1 | 0xDBC1 | STAT_KENNFELD_DATA_189_WERT | Lesen der Kennfelddaten 1 | - | - | - | data[190] | - | - | - | - | - | 22 | - | - |
| STATUS_KENNFELD_2 | 0xDBC2 | STAT_KENNFELD_DATA_189_WERT | Lesen der Kennfelddaten 2 | - | - | - | data[190] | - | - | - | - | - | 22 | - | - |
| STATUS_REGLER_PARAMETER | 0xDBC7 | - | Regler Parameter auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBC7 |
| STATUS_EEPROM_STATUS | 0xDBC8 | - | EEPROM Status des Radknotens. | bit | - | - | BITFIELD | RES_0xDBC8 | - | - | - | - | 22 | - | - |
| STAT_FIXSTROM | 0xDBC9 | - | Fixstrom Value Zug | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBC9 |
| STATUS_SPANNUNGSABGLEICH | 0xDBDD | - | Status Spannungsabgleich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDD |
| BESCHLEUNIGUNGSSENSOR_TESTEN | 0xAB70 | - | Beschleunigungssensor testen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB70 |

### FM_QU_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Keine zusätzliche Informationen |
| 0x0010 | ROM Fehler |
| 0x0020 | RAM Fehler |
| 0x0030 | EEPROM Fehler |
| 0x0040 | Stackueberlauf |
| 0x0050 | Watchdog Fehler |
| 0x0060 | ALU Fehler |
| 0x0070 | Register Test Fehler |
| 0x0080 | Bus Fehler |
| 0x0090 | Temperaturfehler |
| 0x00A0 | TXEN_BGE_clamped |
| 0x00B0 | UVVBAT_Flag |
| 0x00C0 | Spannungsfehler_IO |
| 0x00D0 | Überschreitung maximaler Taskzeit |
| 0x00E0 | Statuswort Null |
| 0x00F0 | Statuswort Eins |
| 0x0100 | Star Locked Bit gesetzt |
| 0x0110 | Star Configuration gesetzt |
| 0x0200 | Timeout |
| 0x0400 | Signal nie empfangen  |
| 0x0600 | Signal nie empfangen |
| 0x4000 | CRC Fehler  |
| 0x8000 | Alive Fehler  |
| 0xXXYY | Signal_UNKNOWN |

### RES_0XDBB1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUGSTUFE_SOLLSTROM_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Sollstrom Zugstufe-Ventil in A. |
| STAT_ZUGSTUFE_ISTSTROM_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Iststrom Zugstufe-Ventil in A. |
| STAT_ZUGSTUFE_PWM_WERT | % | - | int | - | - | - | 100.0 | - | PWM Wert Zugstufe-Ventil in %. |
| STAT_DRUCKSTUFE_SOLLSTROM_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Sollstrom Druckstufe-Ventil in A. |
| STAT_DRUCKSTUFE_ISTSTROM_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Iststrom Druckstufe-Ventil in A. |
| STAT_DRUCKSTUFE_PWM_WERT | % | - | int | - | - | - | 100.0 | - | PWM Wert Druckstufe-Ventil in % |

### RES_0XDBB2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_OFFSET_WERT | - | - | int | - | - | - | - | - | ADC-Offset Zugstufe-Ventil. |
| STAT_ADC_STEIGUNG_WERT | - | - | unsigned int | - | - | - | - | - | ADC-Steigung Zugstufe-Ventil. |
| STAT_CMRR_WERT | - | - | unsigned int | - | - | - | - | - | Filterwert Zugstufe-Stromabgleich. |

### RES_0XDBB3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_OFFSET_WERT | - | - | int | - | - | - | - | - | ADC-Offset Druckstufe-Ventil. |
| STAT_ADC_STEIGUNG_WERT | - | - | unsigned int | - | - | - | - | - | ADC-Steigung Druckstufe-Ventil. |
| STAT_CMRR_WERT | - | - | unsigned int | - | - | - | - | - | Filterwert  Druckstufe-Stromabgleich. |

### ARG_0XDBB4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLSTROM | mA | - | unsigned int | - | - | - | - | - | 0.0 | 1600.0 | Sollstrom Ventil Druckstufe vorgeben. 0x00: Beenden der Sollstromvorgabe des Druckstufeventils. |

### RES_0XDBB5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUGSTUFE_VENTILSTROM_WERT | - | - | unsigned int | - | - | - | - | - | ADC-Wert für Zugstufe-Ventilstrom. |
| STAT_DRUCKSTUFE_VENTILSTROM_WERT | - | - | unsigned int | - | - | - | - | - | ADC-Wert für Druckstufe-Ventilstrom. |
| STAT_KL30_SPANNUNG_WERT | V | - | unsigned int | - | - | - | - | - | ADC_Kl30 Spannung in Volt |
| STAT_TEMPERATUR_WERT | °C | - | unsigned int | - | - | - | - | - | ADC Temperatur in °C |
| STAT_ACC_X_ACHSE_WERT | mg | - | unsigned int | - | - | - | - | - | Beschleunigung X-Achse in mg. |

### ARG_0XDBB7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLSTROM | mA | - | unsigned int | - | - | - | - | - | 0.0 | 1600.0 | Vorgeben der Sollstromvorgabe Zugstufe-Ventil  in mA. 0x00: Beenden der sollstromvorgabe Druckstufe-Ventil. |

### RES_0XDBBC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUGSTUFE_VENTILSTROM_PHY_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Ventilstrom der Zugstufe in A. |
| STAT_DRUCKSTUFE_VENTILSTROM_PHY_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Ventilstrom der Druckstufe in A. |
| STAT_KL30_SPANNUNG_PHY_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Klemme 30 Spannung |
| STAT_TEMPERATUR_PHY_WERT | °C | - | int | - | - | - | - | - | ADC Temperatur in °C. |
| STAT_ACC_X_ACHSE_PHY_WERT | m/s^2 | - | int | - | - | 981.0 | 100000.0 | 0.0 | Beschleunigung X-Achse |

### ARG_0XDBC0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CRC_FLAG | - | - | unsigned char | - | - | - | - | - | - | - | Flag zur CRC-Berechnung: 0- kein CRC; 1- mit CRC |
| KENNFELD_DATA_0_BIS_189 | - | - | data[190] | - | - | - | - | - | - | - | Kennfeld-Datenbytes 0-189 |

### RES_0XDBC7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_SOLL_ON_LIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Soll Einschalt Stromschwelle  |
| STAT_I_SOLL_OFF_LIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Soll Auschalt Stromschwelle |
| STAT_I_IST_OFF_LIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Ist Ausschalt Stromschwelle |
| STAT_IO_WERT | - | - | int | - | - | - | - | - | Faktor zur Approximation der Diodenkennlinie  |
| STAT_IREFCHG_DIDTLIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Detektionsschwelle für erhebliche Schwankung des Referenzstroms |
| STAT_IREFCHG_DECAYLIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Grenzwert für das Ende der DECAY Funktion  |
| STAT_D3_MIN_WERT | - | - | int | - | - | - | - | - | interner Faktor (Minimalwert)  |
| STAT_D3_MAX_WERT | - | - | int | - | - | - | - | - | interner Faktor (Maximalwert)  |
| STAT_HI_LO_CURRENT_LIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Grenzwert für Übergang vom High zum Low Strom Modus  |
| STAT_LO_HI_CURRENT_LIMIT_WERT | A | - | int | - | - | - | 1000.0 | - | Grenzwert für Übergang vom Low zum High Strom Modus  |
| STAT_ADC_OFFSET0_TIMER_WERT | - | - | int | - | - | - | - | - | Zykluszähler ADC Offset Sampling  |
| STAT_ADC_OFFSET0_VALUE_WERT | - | - | int | - | - | - | - | - | Initialwert für ADC Offset 0 |
| STAT_ADC_OFFSET0_TOL_WERT | - | - | int | - | - | - | - | - | Toleranzgrenzen für den Offset-Wert  |
| STAT_MAX_CALC_CURR_WERT | A | - | int | - | - | - | 1000.0 | - | Maximal Stromgrenze für Strommessung |
| STAT_MAX_OUT_CURR_WERT | A | - | int | - | - | - | 1000.0 | - | Maximaler Ausgangsstrom |
| STAT_R_MIN_WERT | Ohm | - | int | - | - | - | 1000.0 | - | Minimaler Lastwiderstand im Lastkreis |
| STAT_R_MAX_WERT | Ohm | - | int | - | - | - | 1000.0 | - | Minimaler Lastwiderstand im Lastkreis |
| STAT_R0_WERT | Ohm | - | int | - | - | - | 1000.0 | - | Widerstand im Lastkreis |
| STAT_L0_WERT | H | - | int | - | - | - | 1000000.0 | - | Spule und Gegeninduktivität |
| STAT_R_FACTOR_WERT | - | - | int | - | - | - | - | - | Korrekturfaktor für Widerstand  |
| STAT_L_FACTOR_WERT | - | - | int | - | - | - | - | - | Korrekturfaktor für Induktivität |
| STAT_U_F_MIN_WERT | V | - | int | - | - | - | 1000.0 | - | minimale Spannung an der Freilaufdiode |
| STAT_U_F_MAX_WERT | V | - | int | - | - | - | 1000.0 | - | maximale Spannung an zwei Freilaufdioden |
| STAT_U_F_1D_WERT | V | - | int | - | - | - | 1000.0 | - | Spannung an der Freilaufdiode |
| STAT_DUMMY_05_WERT | - | - | unsigned int | - | - | - | - | - | Platzhalter |
| STAT_1_DURCHLAUFZEIT_WERT | s | - | unsigned int | - | - | - | 1000000.0 | - | Laufzeit des Controllers auf dem Ziel Steuergerät |
| STAT_NENNER1_WERT | - | - | int | - | - | - | - | - | Korrekturwert für den Gesamtwiderstand |
| STAT_I_MITTE_WERT | A | - | int | - | - | - | 1000.0 | - | Strommittelwert (aus Imin und Imax gebildet) |
| STAT_FILTER_GRENZWERT_0_WERT | A | - | int | - | - | - | 1000.0 | - | Filter Grenzwert 0 |
| STAT_FILTER_GRENZWERT_1_WERT | A | - | int | - | - | - | 1000.0 | - | Filter Grenzwert 1 |
| STAT_VALVE_KL0_U_WERT | - | - | int | - | - | - | - | - | Korrekturfaktor KL0 |
| STAT_VALVE_ML0_U_WERT | - | - | int | - | - | - | - | - | Korrekturfaktor ML0 |
| STAT_PUSH_TIMER_1_WERT | - | - | unsigned int | - | - | - | - | - | Push Timer 1 |
| STAT_PUSH_TIMER_2_WERT | - | - | unsigned int | - | - | - | - | - | Push Timer 2 |
| STAT_PUSH_CURRENT_1_WERT | A | - | int | - | - | - | 1000.0 | - | Stoß Strom 1 |
| STAT_PUSH_CURRENT_2_WERT | A | - | int | - | - | - | 1000.0 | - | Stoß Strom 2 |
| STAT_DITHER_VALUE_1_WERT | - | - | int | - | - | - | - | - | Dither Wert 1 |
| STAT_DITHER_VALUE_2_WERT | - | - | int | - | - | - | - | - | Dither Wert 2 |
| STAT_DITHER_CURRENT_0_WERT | A | - | int | - | - | - | 1000.0 | - | Dither Strom 0  |
| STAT_DITHER_CURRENT_1_WERT | A | - | int | - | - | - | 1000.0 | - | Dither Strom 1 |
| STAT_DITHER_CURRENT_2_WERT | A | - | int | - | - | - | 1000.0 | - | Dither Strom 2 |

### RES_0XDBC8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUG_CUR_ABGLEICH_VALID | 0/1 | - | char | 0x01 | - | - | - | - | Zug-Stromabgleich 1: gültig; 0= ungültig |
| STAT_DRUCK_CUR_ABGLEICH_VALID | 0/1 | - | char | 0x02 | - | - | - | - | Druck-Stromabgleich valid. 1: gültig; 0= ungültig |
| STAT_ZUG_FIX_CUR_VALID | 0/1 | - | char | 0x04 | - | - | - | - | Zug-Fixstrom valid. 1: gültig; 0= ungültig |
| STAT_DRUCK_FIX_CUR_VALID | 0/1 | - | char | 0x08 | - | - | - | - | Druck-Fixstrom valid. 1: gültig; 0= ungültig |
| STAT_DITHER_PAR_VALID | 0/1 | - | char | 0x10 | - | - | - | - | Dither-Parameter valid. 1: gültig; 0= ungültig |
| STAT_CODIER_PAR_VALID | 0/1 | - | char | 0x20 | - | - | - | - | Codier-Parameter valid. 1: gültig; 0= ungültig |
| STAT_KENNFELD_VALID | 0/1 | - | char | 0x40 | - | - | - | - | Kennfelddaten valid. 1: gültig; 0= ungültig |
| STAT_SPANNUNGSABGLEICH_VALID | 0/1 | - | char | 0x80 | - | - | - | - | Spannungsabgleich valid. 1: gültig; 0= ungültig |

### RES_0XDBC9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUG_FIX_CURRENT_VALUE_WERT | - | - | int | - | - | - | - | - | Fixstrom Value Zug  |
| STAT_ZUG_FIX_CURRENT_CHECK_WERT | - | - | int | - | - | - | - | - | Fixstrom Check Zug  |
| STAT_DRUCK_FIX_CURRENT_VALUE_WERT | - | - | int | - | - | - | - | - | Fixstrom Value Druck  |
| STAT_DRUCK_FIX_CURRENT_CHECK_WERT | - | - | int | - | - | - | - | - | Fixstrom Check Druck  |

### RES_0XDBDD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REF_SPANNUNG_ABGLEICH_WERT | - | - | unsigned int | - | - | - | - | - | Korrekturwert Referenzspannung  |
| STAT_KL15_SPANNUNG_ABGLEICH_WERT | - | - | unsigned int | - | - | - | - | - | Korrekturwert Kl15 Spannungsteiler  |

### RES_0XAB70

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_STATUS | + | - | - | 0-n | - | unsigned char | - | TAB_RK_BESCHL_SENSOR_STATUS | - | - | - | Beschleunigungssensor testen  |

### TAB_RK_BESCHL_SENSOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Beschl. Sensor I.O. |
| 0x01 | Beschl. Sensor defekt |
| 0xFF | Undefinierter Zustand |
