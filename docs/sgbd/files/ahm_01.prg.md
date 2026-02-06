# ahm_01.prg

## General

|  |  |
| --- | --- |
| File | ahm_01.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 55 |
| Origin | BMW EI-60 UweLueddeke |
| Revision | 3.010 |
| Author | HelbakoGmbH SW-Entwicklung GerritBöger, HelbakoGmbH SW-Entwickl |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Anhängermodul IV |  |  |
| ORIGIN | string | BMW EI-60 UweLueddeke |  |  |
| REVISION | string | 3.010 |  |  |
| AUTHOR | string | HelbakoGmbH SW-Entwicklung GerritBöger, HelbakoGmbH SW-Entwickl |  |  |
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

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

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

### INTERNE_DATEN

Auslesen der Helabko SW-Version, Bootloader-Version und der Layout-Version UDS  : $22   ReadDataByIdentifier UDS  : $4100 interne Daten Modus: Default

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5B00 | Zentralinstrument | - |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | AB Volvo |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic |
| 0x0061 | Flextronics / Sidler Automotive |
| 0x0062 | EAO Automotive |
| 0x0063 | helag-electronic |
| 0x0064 | Magna International |
| 0x0065 | ARVINMERITOR |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semiconductor GmbH |
| 0x0070 | Alfmeier AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH&Co KG |
| 0x0073 | ebm-papst St. Georgen GmbH&Co. KG |
| 0xFFFF | unbekannter Hersteller |

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
| 0x027100 | Energiesparmode aktiv | 0 |
| 0x02FF71 | DM_TEST_APPL | 1 |
| 0x802800 | Bremslicht Anhänger: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802801 | Blinklicht Anhänger links: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802802 | Blinklicht Anhänger rechts: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802803 | Schlusslicht Anhänger links: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802804 | Schlusslicht Anhänger rechts: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802805 | Rückfahrlicht Anhänger: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802806 | Nebelschlusslicht Anhänger: Überlast oder Kurzschluss nach Masse | 0 |
| 0x802807 | Bremslicht Anhänger: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x802808 | Blinklicht Anhänger links: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x802809 | Blinklicht Anhänger rechts: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x80280A | Schlusslicht Anhänger links: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x80280B | Schlusslicht Anhänger rechts: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x80280C | Rückfahrlicht Anhänger: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x80280D | Nebelschlusslicht Anhänger: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x80280E | Stop / Turn Light Trailer Left: Überlast oder Kurzschluss  nach Masse | 0 |
| 0x80280F | Stop / Turn Light Trailer Right: Überlast oder Kurzschluss  nach Masse | 0 |
| 0x802810 | Tail And License Lights Trailer: Überlast oder Kurzschluss  nach Masse | 0 |
| 0x802811 | Reversing Light Trailer: Überlast oder Kurzschluss  nach Masse | 0 |
| 0x802812 | Stop / Turn Light Trailer Left: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x802813 | Stop / Turn Light Trailer Right: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x802814 | Tail And License Lights Trailer: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x802815 | Reversing Light Trailer: Leuchte defekt oder Leitungsunterbrechung | 0 |
| 0x802816 | AHM Steuergerätefehler: Treiberfehler / Dauerkurzschluss | 0 |
| 0x802817 | AHM Steuergerätefehler: Logikfehler / Speicherfehler | 0 |
| 0x802818 | AHM Klemme 30f_a: Spannungsversorgung fehlt / unterbrochen | 0 |
| 0x802819 | AHM Klemme 30f_b: Spannungsversorgung fehlt / unterbrochen | 0 |
| 0x80281A | AHM Klemme 30f_a: Unterspannung < 10,5 Volt | 1 |
| 0x80281B | AHM Klemme 30f_b: Unterspannung < 10,5 Volt | 1 |
| 0x80281C | AHM Klemme 30f_a: Überspannung > 15,5 Volt | 1 |
| 0x80281D | AHM Klemme 30f_b: Überspannung > 15,5 Volt | 1 |
| 0x80281E | AHM Hardwaresignal Bremslicht: Leitungsunterbrechung oder Kurzschluss nach Masse | 0 |
| 0x80281F | AHM Hardwaresignal Bremslicht: Leitungsfehler mit Kontakt nach Bordspannung | 0 |
| 0x802820 | AHM Hardwaresignal Blinklicht: Leitungsunterbrechung oder Kurzschluss nach Masse | 0 |
| 0x802821 | AHM Hardwaresignal Blinklicht: Leitungsfehler mit Kontakt nach Bordspannung | 0 |
| 0x802822 | Coding_Event_Not_Coded | 0 |
| 0x802823 | AHV: Interner Steuergerätefehler | 0 |
| 0x802824 | AHV: Unterspannung erkannt | 1 |
| 0x802825 | AHV: Überspannung erkannt | 1 |
| 0x802826 | AHV-Hallsensor: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x802827 | AHV-Hallsensor: Kurzschluss nach Plus | 0 |
| 0x802828 | AHV-Motor: Defekt oder mechanischer Fehler | 0 |
| 0x802829 | AHV-Motor: Leitungsunterbrechung | 0 |
| 0x80282A | AHV-Motor: Kurzschluss nach Minus | 0 |
| 0x80282B | AHV-Motor: Kurzschluss nach Plus | 0 |
| 0x80282C | AHV-Motor: Überstromabschaltung | 0 |
| 0x80282D | AHV-Motor: Offsetstromgrenze erreicht | 0 |
| 0x80282E | Anhängervorrichtung: Nachspannen fehlgeschlagen | 0 |
| 0x80282F | Anhängervorrichtung: Lösen fehlgeschlagen | 0 |
| 0x802830 | Anhängervorrichtung: Nicht initialisiert | 0 |
| 0x802831 | Mikroschalter-Steckdose: Defekt oder Leitungsfehler ggf. mit Kontakt zu Bordspannung | 0 |
| 0x802832 | Anhängervorrichtung: Zwischenposition erkannt | 0 |
| 0x802833 | Kommunikationsfehler LIN | 0 |
| 0x802834 | Anhängervorrichtung: CRC-Fehler bei Diagnosesteuerung AHV-Motor | 0 |
| 0x802835 | Anhängervorrichtung: Geschwindigkeit > 0 km/h bei Diagnosesteuerung AHV-Motor | 0 |
| 0x802836 | AHV-Taster: Defekt oder Leitungsfehler mit Kurzschluß nach Minus | 0 |
| 0x802837 | Schlusslicht Anhänger: Abschaltung wegen Unterspannung | 1 |
| 0x802838 | AHM: Warnblinken wurde aufrecht erhalten wegen Fehler Hardwaresignal Fahrtrichtungsanzeiger | 0 |
| 0xE5440B | K-CAN Bus | 0 |
| 0xE54414 | K-CAN Control Module Bus OFF | 0 |
| 0xE54BFF | DM_TEST_COM | 0 |
| 0xE54D1E | LIN-Bus: AHV antwortet nicht | 0 |
| 0xE54D1F | LIN_X Bus Error Slave 2 | 0 |
| 0xE54D20 | LIN_X Bus Error Slave 3 | 0 |
| 0xE54D21 | LIN_X Bus Error Slave 4 | 0 |
| 0xE55400 | Botschaft Blinken (1F6h): Ausfall | 1 |
| 0xE55401 | Botschaft Daten Antriebsstrang 2 (3F9h): Ausfall | 1 |
| 0xE55402 | Botschaft Fahrzeugzustand (3A0h): Ausfall | 1 |
| 0xE55403 | Botschaft Geschwindigkeit (1A1h): Ausfall | 1 |
| 0xE55404 | Botschaft Kilometerstand/Reichweite (330h): Ausfall | 1 |
| 0xE55405 | Botschaft Klemmen (12Fh): Ausfall | 1 |
| 0xE55406 | Botschaft Lampenzustand  (21Ah): Ausfall | 1 |
| 0xE55407 | Botschaft Nachlaufzeit Stromversorgung (3BEh): Ausfall | 1 |
| 0xE55408 | Botschaft Powermanagement Verbrauchersteuerung (3B3h): Ausfall | 1 |
| 0xE55409 | Botschaft Relativzeit (328h): Ausfall | 1 |
| 0xE5540A | Botschaft Status Stabilisierung DSC (173h): Ausfall | 1 |
| 0xE5540B | Botschaft Status Zentralverriegelung Tür Schloss (0ECh): Ausfall | 1 |
| 0xE56C00 | AHM hat ungültiges CAN-Signal weitergeleitet: Status_Klemme | 1 |
| 0xE56C04 | AHM hat ungültiges CAN-Signal weitergeleitet: Status_Kontakt_Heckklappe | 1 |
| 0xE56C05 | AHM hat ungültiges CAN-Signal weitergeleitet: Status_Kontakt_Heckscheibe | 1 |
| 0xE56C06 | AHM hat ungültiges CAN-Signal weitergeleitet: Alive_Geschw_Fahrzeug | 1 |
| 0xE56C08 | AHM hat ungültiges CAN-Signal weitergeleitet: Geschw_Fahrzeug_Schwerpunkt | 1 |
| 0x802857 | AHV-Taster: Wiederholschutz aktiv | 0 |
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
| 0x4600 | DETECTED_LOADS | Hex | - | unsigned char | - | - | - | - |
| 0x4601 | SUPERVISIONSTATE_BLK_L | Hex | - | unsigned char | - | - | - | - |
| 0x4602 | SUPERVISIONSTATE_BLK_R | Hex | - | unsigned char | - | - | - | - |
| 0x4603 | SUPERVISIONSTATE_BRL | Hex | - | unsigned char | - | - | - | - |
| 0x4604 | SUPERVISIONSTATE_SL_L | Hex | - | unsigned char | - | - | - | - |
| 0x4605 | SUPERVISIONSTATE_SL_R | Hex | - | unsigned char | - | - | - | - |
| 0x4606 | SUPERVISIONSTATE_RF | Hex | - | unsigned char | - | - | - | - |
| 0x4607 | SUPERVISIONSTATE_NSL | Hex | - | unsigned char | - | - | - | - |
| 0x4611 | INITIALSENSEVOLTAGE_BLK_L | Hex | - | unsigned char | - | - | - | - |
| 0x4612 | INITIALSENSEVOLTAGE_BLK_R | Hex | - | unsigned char | - | - | - | - |
| 0x4613 | INITIALSENSEVOLTAGE_BRL | Hex | - | unsigned char | - | - | - | - |
| 0x4614 | INITIALSENSEVOLTAGE_SL_L | Hex | - | unsigned char | - | - | - | - |
| 0x4615 | INITIALSENSEVOLTAGE_SL_R | Hex | - | unsigned char | - | - | - | - |
| 0x4616 | INITIALSENSEVOLTAGE_RF | Hex | - | unsigned char | - | - | - | - |
| 0x4617 | INITIALSENSEVOLTAGE_NSL | Hex | - | unsigned char | - | - | - | - |
| 0x4621 | INITIALRESVALUE_BLK_L | Hex | high | unsigned int | - | - | - | - |
| 0x4622 | INITIALRESVALUE_BLK_R | Hex | high | unsigned int | - | - | - | - |
| 0x4623 | INITIALRESVALUE_BRL | Hex | high | unsigned int | - | - | - | - |
| 0x4624 | INITIALRESVALUE_SL_L | Hex | high | unsigned int | - | - | - | - |
| 0x4625 | INITIALRESVALUE_SL_R | Hex | high | unsigned int | - | - | - | - |
| 0x4626 | INITIALRESVALUE_RF | Hex | high | unsigned int | - | - | - | - |
| 0x4627 | INITIALRESVALUE_NSL | Hex | high | unsigned int | - | - | - | - |
| 0x4631 | SUPERVISIONSTATE_BLK_L_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4632 | SUPERVISIONSTATE_BLK_R_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4633 | SUPERVISIONSTATE_RF_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4634 | SUPERVISIONSTATE_SL_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4641 | INITIALSENSEVOLTAGE_BLK_L_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4642 | INITIALSENSEVOLTAGE_BLK_R_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4643 | INITIALSENSEVOLTAGE_RF_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4644 | INITIALSENSEVOLTAGE_SL_SAE | Hex | - | unsigned char | - | - | - | - |
| 0x4651 | INITIALRESVALUE_BLK_L_SAE | Hex | high | unsigned int | - | - | - | - |
| 0x4652 | INITIALRESVALUE_BLK_R_SAE | Hex | high | unsigned int | - | - | - | - |
| 0x4653 | INITIALRESVALUE_RF_SAE | Hex | high | unsigned int | - | - | - | - |
| 0x4654 | INITIALRESVALUE_SL_SAE | Hex | high | unsigned int | - | - | - | - |
| 0x4660 | Sub_CAN_Blinkinformation | Hex | high | unsigned int | - | - | - | - |
| 0x4661 | Sub_Status | Hex | - | unsigned char | - | - | - | - |
| 0x0001 | Takt_Blinken | 0-n | low | 0x000F | Takt_Blinken | - | - | - |
| 0x0002 | Status_Blinken | 0-n | low | 0x0070 | Status_Blinken | - | - | - |
| 0x0003 | Status_Blinken_Stop | 0-n | low | 0x0300 | Status_Blinken_Stop | - | - | - |
| 0x0004 | Status_Klemmen | 0-n | - | 0x0F | Status_Klemmen | - | - | - |
| 0x0005 | Status_CAN_Bus | 0-n | - | 0x30 | Status_Canbus | - | - | - |
| 0x0006 | AHM-Blinklicht-Eingang | 0-n | - | 0xC0 | Status_AHM_Eingang | - | - | - |
| 0x4670 | Sub_WUP_Data_jüngster | - | high | unsigned int | - | - | - | - |
| 0x4671 | Sub_WUP_Data_älter | - | high | unsigned int | - | - | - | - |
| 0x4672 | Sub_WUP_Data_ältester | - | high | unsigned int | - | - | - | - |
| 0x0007 | Nachlaufzeit_KL30B | Sekunden | high | unsigned int | - | 10 | 16 | 0 |
| 0x0008 | Schwenkposition_AHV | 0-n | high | 0x0007 | TAB_AHV_POSITIONEN | - | - | - |
| 0x0009 | Status_Anhaenger | 0/1 | high | 0x0008 | - | - | - | - |

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

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AHV_MOTOR_STROM_WERT | 0xD5FC | STAT_AHV_MOTOR_STROM_WERT | Ausgabe des AHV-Motorstroms  in Ampere | A | - | - | unsigned char | - | - | 5 | - | - | 22 | - | - |
| AHV_STEUERN_MOTOR | 0xD5E4 | - | Steuert den Motor der AHV an,  0 = Ansteuerung Stopp 1 = Ansteuerung Richtung Ruheposition 2 = Ansteuerung Richtung Arbeitsposition | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5E4 | - |
| AHV_START_INITIALISIERUNG | 0xD5EA | - | Steuert die Initialisierung der AHV | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5EA | - |
| AHM_STEUERN_LAMPEN_FUNKTION_ECE | 0xD5F1 | - | Steuert das Anhängemodul an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5F1 | - |
| AHM_STEUERN_LAMPEN_FUNKTION_SAE | 0xD5F2 | - | Steuert das Anhängemodul an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5F2 | - |
| AHV_LED | 0xD5FE | - | Steuert die LED mit der Farbe in Dauerlicht an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5FE | - |
| AHV_ANALOG_EINGANG | 0xD5EC | - | Gibt den Status der Taster und Kontakte zur Anhängevorrichtung aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5EC |
| AHM_DIGITAL_ECE | 0xD5F3 | - | Liest den digitalen Status der Lampen ein. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F3 |
| AHM_DIGITAL_SAE | 0xD5F4 | - | Liest den digitalen Status der Lampen ein. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F4 |
| AHM_DIGITAL_INPUTS | 0xD5F5 | - | Liest den Status des Blinklicht- und Blinkereingangs des Fahrzeug aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F5 |
| AHM_ANALOG_OUTPUT_ECE | 0xD5F6 | - | Ausgabe der analogen Stromwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F6 |
| AHV_BUS_NACHRICHTEN | 0xD5F7 | - | Busnachrichten über Bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F7 |
| AHM_ANALOG_OUTPUT_SAE | 0xD5FF | - | Ausgabe der analogen Stromwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5FF |
| AHM_VARIANTE | 0xD5F0 | STAT_AHM_VARIANTEN_NR | Gibt die Variante/Verwendung des kodierten AHM aus. | 0-n | - | - | unsigned char | TAB_AHM_VARIANTE | - | - | - | - | 22 | - | - |
| AHV_DIAGNOSE_STATUS | 0xD5FD | STAT_DIAGNOSE_AHV | Status der INITIALISIERUNG. Es muss erst die Initialisierung gestartet werden. | 0-n | - | - | unsigned char | TAB_AHV_INIT | - | - | - | - | 22 | - | - |
| AHV_POSITION_NR | 0xD5FB | STAT_POSITION_AHV_NR | Position der AHV-Stellung | 0-n | - | - | unsigned char | TAB_AHV_POSITIONEN | - | - | - | - | 22 | - | - |
| AHM_INITIALISIERUNG | 0xD5EB | STAT_INITIALISIERUNG_AHV_INIT | Gibt den aktueller Zustand der Initialisierung (Anlernvorgang) aus | 0-n | - | - | unsigned char | TAB_INIT | - | - | - | - | 22 | - | - |
| AHV_INITIALISIERUNG | 0xD5E9 | STAT_AHV_INIT | Gibt den Status der aufgerufenen Initialisierung aus. Vorher wird durch STEUERN_INITIALISIERUNG_AHV die Initialisierung gestartet. | 0-n | - | - | unsigned char | TAB_INIT_VORGANG | - | - | - | - | 22 | - | - |

### TAB_AHV_ALIVE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Signal |
| 0x01 | nicht verriegelt |
| 0x02 | verriegelt |
| 0xFF | Signal ungültig |

### TAB_AHV_POSITIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Arbeitsposition |
| 0x01 | Ruheposition |
| 0x02 | Zwischenposition |
| 0x03 | Arbeitsposition ohne Nachspannen |
| 0xFF | nicht definiert |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### ARG_0XD5F2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_AUSSEN_LICHT_HINTEN | - | - | - | - | - | Steuert das Anhängemodul an. Siehe Tabelle  TAB_AUSSEN_LICHT_HINTEN |
| ZEIT | s | - | unsigned char | - | - | - | - | - | 0 | 255 | Angabe der Zeit in Sekunden |

### RES_0XD5F6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_SL_LI_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Schlusslicht links aus |
| STAT_STROM_NSL_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Nebelschlussleuchte aus |
| STAT_STROM_FRA_LI_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Blinker links aus |
| STAT_STROM_FRA_RE_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Blinker rechts aus |
| STAT_STROM_BRL_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Bremslicht aus |
| STAT_STROM_RFL_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Rückfahrlicht aus |
| STAT_STROM_SL_RE_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluß Schlusslicht rechts aus |

### RES_0XD5F4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAIL_LIGHT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status vom Schlusslicht aus; 0 = AUS 1 = EIN |
| STAT_STOP_TURN_LIGHT_RIGHT_EIN | 0-n | - | unsigned char | - | TAB_AHM_DIGITAL | - | - | - | Liest den Status von Brems-/Blinklicht rechts aus Siehe Tabelle TAB_AHM_DIGITAL |
| STAT_STOP_TURN_LIGHT_LEFT_EIN | 0-n | - | unsigned char | - | TAB_AHM_DIGITAL | - | - | - | Liest den Status von Brems-/Blinklicht links aus;  0 = AUS 1 = EIN  Siehe Tabelle TAB_AHM_DIGITAL |
| STAT_REVERSING_LIGHT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Rückfahrscheinwerfer aus; 0 = AUS 1 = EIN |

### TAB_AHM_DIGITAL

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | blinkt |
| 0x02 | EIN |

### ARG_0XD5FE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FARBE | 0-n | - | unsigned char | - | TAB_AHM_LED | - | - | - | - | - | Steuert die LED mit der Farbe in Dauerlicht an;  0 = Ansteuerung aus (LED aus) 1 = Ansteuerung Grün 2 = Ansteuerung Rot |
| ZEIT | s | - | unsigned char | - | - | - | - | - | 0 | 255 | Ansteuerzeit in Sekunden |

### TAB_AHM_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnosesteuerung beenden |
| 0x01 | Ansteuerung GRÜN |
| 0x02 | Ansteuerung ROT |

### RES_0XD5FF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_TAIL_LIGHT_PART1_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluss Tail And License Light Part 1 aus (AHM4: Lastkreis 1) |
| STAT_STROM_TAIL_LIGHT_PART2_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluss Tail And License Light Part 2 aus (AHM4: Lastkreis 2) |
| STAT_STROM_STOP_TURN_LIGHT_LEFT_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluss Stop Turn Light Left aus (AHM4: Lastkreis 3) |
| STAT_STROM_STOP_TURN_LIGHT_RIGHT_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluss Stop Turn Light Right aus (AHM4: Lastkreis 4) |
| STAT_STROM_REVERSING_LIGHT_WERT | A | - | unsigned char | - | - | - | 20 | - | Liest den Messwert Stromfluss Reversing Light aus (AHM4: Lastkreis 6) |

### TAB_AHV_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | AHV-Motor gestartet |
| 0x01 | AHV-Motor nicht gestartet: CRC-Fehler |
| 0x02 | AHV-Motor nicht gestartet: Fahrzeuggeschwindigkeit > 0 km/h |
| 0x03 | Antwort von AHV ungültig |

### TAB_AHM_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert |
| 0x01 | Nur Anhängerbeleuchtung |
| 0x02 | Anhängerbeleuchtung und teilelektrische Anhängervorrichtung |
| 0x03 | Anhängerbeleuchtung und vollelektrische Anhängervorrichtung |
| 0xFF | unbekannte Variante |

### ARG_0XD5EA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_AHM_INIT | - | - | - | - | - | Steuert die Initialisierung der AHV. Siehe Tabelle  TAB_AHM_INIT |

### TAB_AHM_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | AUSSCHWENKEN |
| 0x02 | EINSCHWENKEN |
| 0x03 | Initialisierung abbrechen |

### RES_0XD5F7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_HK_OFFEN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe des über CAN gesendeten Heckklappenstatus;  0 = geschlossen 1 = offen |
| STAT_BUS_IN_KL_15_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe des über CAN gesendeten Kl.15 Status; 0 = Kl.15 aus 1 = Kl.15 ein |
| STAT_BUS_IN_HS_OFFEN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe des über CAN gesendeten Heckscheibenstatus (F07: kleine Heckklappe) mögliche Zustände: 0 = Geschlossen 1 = Offen |

### ARG_0XD5E4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | unsigned char | - | TAB_AHV_VERFAHREN | - | - | - | - | - | Steuert den Motor der AHV an. Siehe Tabelle  TAB_AHV_VERFAHREN |

### TAB_AHV_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Änderung |
| 0x01 | Ansteuerung Richtung Ruheposition |
| 0x02 | Ansteuerung Richtung Arbeitsposition |
| 0x03 | Ansteuerung abbrechen |

### RES_0XD5EC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_AHV_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt den Status des Taster für die Anhängevorrichtung aus: 0 = Taste nicht gedrückt; 1 = Taste gedrückt |
| STAT_SCHALTER_AH_STECKDOSE_GESTECKT | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status des Mikroschalters in der Anhängersteckdose aus dem AHV-SG aus: 0= Nicht gesteckt; 1 = Gesteckt. |

### TAB_INIT_VORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Init nicht angefordert oder abgeschlossen |
| 0x01 | Init in Abarbeitung |
| 0xFF | nicht definiert |

### ARG_0XD5F1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_AUSSEN_LICHT_HINTEN | - | - | - | - | - | Steuert das Anhängemodul an. |
| ZEIT | s | - | unsigned char | - | - | - | - | - | 0 | 255 | Ansteuerzeit in Sekunden |

### TAB_AUSSEN_LICHT_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Bremslicht |
| 0x02 | Blinklicht rechts |
| 0x03 | Blinklicht links |
| 0x04 | Warnblinken |
| 0x05 | Schlusslicht |
| 0x06 | Rückfahrlicht |
| 0x07 | Parklicht rechts |
| 0x08 | Parklicht links |
| 0x09 | Nebelschlusslicht |

### RES_0XD5F3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL_RECHTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Schlusslicht rechts aus; 0 = AUS 1 = EIN |
| STAT_SL_LINKS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Schlusslicht links aus; 0 = AUS 1 = EIN |
| STAT_FRA_RECHTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Blinklicht rechts aus;  0 = AUS 1 = EIN |
| STAT_FRA_LINKS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Blinklicht links aus;  0 = AUS 1 = EIN |
| STAT_BRL_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Bremslicht aus;  0 = AUS 1 = EIN |
| STAT_NSL_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Nebelschlusslicht aus;  0 = AUS 1 = EIN |
| STAT_RFL_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status von Rückfahrscheinwerfer aus; 0 = AUS 1 = EIN |

### RES_0XD5F5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IN_FRA_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status des Blinklichteinganges vom Fahrzeug aus;  0 = AUS 1 = EIN |
| STAT_IN_BRL_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Liest den Status des Bremslicht  vom Fahrzeug aus;  0 = AUS 1 = EIN |

### TAKT_BLINKEN

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | nicht blinken |
| 0x0001 | Normalblinktakt |
| 0x0002 | Defektblinktakt |
| 0x0003 | Doppelblinkimpuls |
| 0x000F | Signal ungültig |
| 0xXXYY | unbekannt |

### STATUS_BLINKEN_STOP

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Blinktakt läuft weiter |
| 0x0100 | Synchronisation |
| 0x0200 | neuen Blinktakt starten |
| 0x0300 | Signal ungültig |
| 0xXXYY | unbekannt |

### STATUS_BLINKEN

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Beide Blinker aus |
| 0x0010 | Blinker links EIN |
| 0x0020 | Blinker rechts EIN |
| 0x0030 | Beide Blinker EIN |
| 0x0070 | Signal ungültig |
| 0xXXYY | unbekannt |

### TAB_0X4660

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0001 | 0x0002 | 0x0003 |

### TAB_0X4661

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0004 | 0x0005 | 0x0006 |

### STATUS_KLEMMEN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F Änderung |
| 0x04 | KL30F-EIN |
| 0x05 | KL30B Änderung |
| 0x06 | KL30B-EIN |
| 0x07 | KLR Änderung |
| 0x08 | KLR-EIN |
| 0x09 | KL15 Änderung |
| 0x0A | KL15-EIN |
| 0x0B | KL50 Verzögerung |
| 0x0C | KL50 Änderung |
| 0x0D | KL50-EIN |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xXY | unbekannt |

### STATUS_AHM_EINGANG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | statisch (1s) AUS bei BusSleep/BusOff |
| 0x40 | statisch (1s) EIN bei BusSleep/BusOff |
| 0x80 | statisch (1s) AUS schon bei BusAktiv |
| 0xC0 | statisch (1s) EIN schon bei BusAktiv |
| 0xXY | unbekannt |

### STATUS_CANBUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Bus wach |
| 0x10 | Bus sleep |
| 0x20 | Bus off |
| 0xXY | unbekannt |

### TAB_0X4670

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0007 | 0x0008 | 0x0009 |

### TAB_0X4671

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0007 | 0x0008 | 0x0009 |

### TAB_0X4672

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0007 | 0x0008 | 0x0009 |
