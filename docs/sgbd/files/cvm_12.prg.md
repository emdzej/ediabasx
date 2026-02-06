# cvm_12.prg

## General

|  |  |
| --- | --- |
| File | cvm_12.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 69 |
| Origin | BMW EI-60 MatthiasBabion |
| Revision | 1.100 |
| Author | HelbakoGmbH ES ggl |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio Verdeck Modul |  |  |
| ORIGIN | string | BMW EI-60 MatthiasBabion |  |  |
| REVISION | string | 1.100 |  |  |
| AUTHOR | string | HelbakoGmbH ES ggl |  |  |
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
| 0x022400 | Energiesparmode aktiv | 0 |
| 0x02FF24 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805000 | Hallsensor Heckscheibe unten: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805001 | Hallsensor Heckscheibe unten: Signal ungültig | 0 |
| 0x805002 | Hallsensor Heckscheibe unten: Kurschluss nach Plus | 0 |
| 0x805003 | Hallsensor Heckscheibenmotor: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805004 | Hallsensor Heckscheibenmotor: Signal ungültig | 0 |
| 0x805005 | Hallsensor Heckscheibenmotor: Kurschluss nach Plus | 0 |
| 0x805006 | Hallsensor Endposition Verdeckklappe links verriegelt: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805007 | Hallsensor Endposition Verdeckklappe links verriegelt: Signal ungültig | 0 |
| 0x805008 | Hallsensor Endposition Verdeckklappe links verriegelt: Kurschluss nach Plus | 0 |
| 0x805009 | Hallsensor Position Verdeckklappe offen: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x80500A | Hallsensor Position Verdeckklappe offen: Signal ungültig | 0 |
| 0x80500B | Hallsensor Position Verdeckklappe offen: Kurschluss nach Plus | 0 |
| 0x80500C | Hallsensor Endposition Verdeckklappe rechts verriegelt: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x80500D | Hallsensor Endposition Verdeckklappe rechts verriegelt: Signal ungültig | 0 |
| 0x80500E | Hallsensor Endposition Verdeckklappe rechts verriegelt: Kurschluss nach Plus | 0 |
| 0x80500F | Hallsensor Endposition Windlauf geschlossen: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805010 | Hallsensor Endposition Windlauf geschlossen: Signal ungültig | 0 |
| 0x805011 | Hallsensor Endposition Windlauf geschlossen: Kurschluss nach Plus | 0 |
| 0x805012 | Schalter Verdeckverschlussunterteil: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x805013 | Schalter Verdeckverschlussunterteil: Signal ungültig | 0 |
| 0x805014 | Schalter Verdeckverschlussunterteil: Kurzschluss nach Plus | 0 |
| 0x805015 | Hallsensor Verriegelungsmotor Windlauf: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805016 | Hallsensor Verriegelungsmotor Windlauf: Signal ungültig | 0 |
| 0x805017 | Hallsensor Verriegelungsmotor Windlauf: Kurschluss nach Plus | 0 |
| 0x805018 | Drehwinkelsensor Hauptsäule: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805019 | Drehwinkelsensor Hauptsäule: Kurschluss nach Plus | 0 |
| 0x80501A | Drehwinkelsensor Finne: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x80501B | Drehwinkelsensor Finne: Kurschluss nach Plus | 0 |
| 0x80501C | Hallsensor Endposition Finnen Totpunkt links: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x80501D | Hallsensor Endposition Finnen Totpunkt links: Signal ungültig | 0 |
| 0x80501E | Hallsensor Endposition Finnen Totpunkt links: Kurzschluss nach Plus | 0 |
| 0x80501F | Verdeckstecker nicht gesteckt | 0 |
| 0x805020 | Verdeckschalter Zu: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805022 | Verdeckschalter Auf oder Zu Kurschluss nach Plus | 0 |
| 0x805023 | Verdeckschalter Auf: Kurschluss nach Minus oder Unterbrechung | 0 |
| 0x805028 | Hallsensor Endposition Finnen Totpunkt rechts: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x805029 | Hallsensor Endposition Finnen Totpunkt rechts: Signal ungültig | 0 |
| 0x80502A | Hallsensor Endposition Finnen Totpunkt rechts: Kurzschluss nach Plus | 0 |
| 0x805030 | Versorgungsspannung der Positionssensoren Verdeckstecker Kurzschluss nach Minusr | 0 |
| 0x805031 | Versorgungsspannung der Positionssensoren  Karosseriestecker Kurzschluss nach Minusr | 0 |
| 0x805032 | Versorgungsspannung der Endpositionssensoren Verdeckstecker Kurzschluss nach Minusr | 0 |
| 0x805033 | Versorgungsspannung der Endpositionssensoren Karosseriestecker Kurzschluss nach Minusr | 0 |
| 0x805034 | Versorgungsspannung der Drehwinkelsensoren Kurzschluss nach Minusr | 0 |
| 0x805035 | Klemme 30 Spannung fehlerhaft | 0 |
| 0x805036 | Versorgungsspannung der Positionssensoren Verdeckstecker Kurzschluss nach Plus | 0 |
| 0x805037 | Versorgungsspannung der Positionssensoren Karosseriestecker Kurzschluss nach Plus | 0 |
| 0x805038 | Versorgungsspannung der Endpositionssensoren Verdeckstecker Kurzschluss nach Plus | 0 |
| 0x805039 | Versorgungsspannung der Endpositionssensoren Karosseriestecker Kurzschluss nach Plus | 0 |
| 0x80503A | Versorgungsspannung der Drehwinkelsensoren Kurzschluss nach Plus | 0 |
| 0x80503F | Schalter Verdeckkastenboden | 0 |
| 0x805040 | Ventil F1: Kurschluss nach Minus | 0 |
| 0x805041 | Ventil F1: Unterbrechung | 0 |
| 0x805042 | Ventil F1: Kurschluss nach Plus | 0 |
| 0x805043 | Ventil F2: Kurschluss nach Minus | 0 |
| 0x805044 | Ventil F2: Unterbrechung | 0 |
| 0x805045 | Ventil F2: Kurschluss nach Plus | 0 |
| 0x805046 | Ventil F3: Kurschluss nach Minus | 0 |
| 0x805047 | Ventil F3: Unterbrechung | 0 |
| 0x805048 | Ventil F3: Kurschluss nach Plus | 0 |
| 0x805049 | Relais PM1: Kurschluss nach Minus | 0 |
| 0x80504A | Relais PM1: Unterbrechung | 0 |
| 0x80504B | Relais PM1: Kurschluss nach Plus | 0 |
| 0x80504C | Relais PM2: Kurschluss nach Minus | 0 |
| 0x80504D | Relais PM2: Unterbrechung | 0 |
| 0x80504E | Relais PM2: Kurschluss nach Plus | 0 |
| 0x80504F | Relais 2 Heckscheibe (Zu): Kurschluss nach Minus | 0 |
| 0x805050 | Relais 2 Heckscheibe (Zu): Unterbrechung | 0 |
| 0x805051 | Relais 2 Heckscheibe (Zu): Kurschluss nach Plus | 0 |
| 0x805052 | Relais 1 Heckscheibe (Auf): Kurschluss nach Minus | 0 |
| 0x805053 | Relais 1 Heckscheibe (Auf): Unterbrechung | 0 |
| 0x805054 | Relais 1 Heckscheibe (Auf): Kurschluss nach Plus | 0 |
| 0x805055 | Verriegelungsmotor Windlauf: Kurzschluss nach Minus | 0 |
| 0x805056 | Verriegelungsmotor Windlauf: Unterbrechung | 0 |
| 0x805057 | Verriegelungsmotor Windlauf: Kurzschluss nach Plus | 0 |
| 0x805060 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x805061 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x805062 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x805063 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x805064 | Codierung: Signatur für Daten ungültig | 0 |
| 0x805065 | Drehwinkelsensor nicht angelernt | 0 |
| 0x805067 | Heckscheibe in Zwischenstellung nicht unten | 1 |
| 0x805068 | Speicherfehler RAM | 0 |
| 0x805069 | Speicherfehler ROM | 0 |
| 0x80506A | Wiederholsperre Heckscheibe | 1 |
| 0x80506B | Wiederholsperre Ventile | 1 |
| 0x80506C | Motorstartautomatik aktiv | 1 |
| 0x80506D | Standverbraucherabschaltung aktiv | 1 |
| 0x80506F | Geschwindigkeit in Zwischenposition zu hoc | 1 |
| 0x805070 | Außentemperatur zu niedrig | 1 |
| 0x805071 | Fensterheberposition unbekannt | 1 |
| 0x805072 | Geschwindigkeit zu hoch | 1 |
| 0x805073 | Heckklappe offen | 1 |
| 0x805074 | Unbekannte Verdeckposition | 1 |
| 0x805075 | ID-Geber hat Nahbereich verlassen | 1 |
| 0x805076 | Verdeckkastenboden nicht abgesenkt | 1 |
| 0x805077 | Wiederholsperre Hydraulikpumpe | 1 |
| 0x805078 | Wiederholsperre Verriegelungsmotor | 1 |
| 0x805079 | Zeitüberschreitung Freigabe CAS | 1 |
| 0x80507A | Zeitüberschreitung beim Ablegen-Ausheben des Verdecks | 1 |
| 0x80507B | Zeitüberschreitung beim Anheben Ausspannen der Finnen | 1 |
| 0x80507C | Zeitüberschreitung beim Ent-Verriegeln | 1 |
| 0x80507D | Zeitüberschreitung beim Öffnen-Schliessen der Verdeckklappe | 1 |
| 0x80507E | Unterspannung erkannt | 1 |
| 0x80507F | Überspannung erkannt | 1 |
| 0xD20468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD20BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur fuer Testzwecke | 1 |
| 0xD21400 | Ausfall Botschaft GESCHWINDIGKEIT | 1 |
| 0xD21401 | Ausfall Botschaft KLEMMEN | 1 |
| 0xD21402 | Ausfall Botschaft POWERMGMT_CTR_COS | 1 |
| 0xD21403 | Ausfall Botschaft CTR_FH_FAT | 1 |
| 0xD21404 | Ausfall Botschaft CTR_FH_SHD_ZENTRALE | 1 |
| 0xD21405 | Ausfall Botschaft STAT_ZV_KLAPPEN | 1 |
| 0xD21406 | Ausfall Botschaft A_TEMP | 1 |
| 0xD21407 | Ausfall Botschaft DT_PT_2 | 1 |
| 0xD21408 | Botschaft (3A0h, Fahrzeugzustand): Ausfall | 1 |
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
| 0x4600 | Aussentemperatur | °C | - | signed char | - | - | - | - |
| 0x4601 | Datum_Tag | - | - | unsigned char | - | - | - | - |
| 0x4602 | Datum_Monat | - | - | unsigned char | - | - | - | - |
| 0x4603 | Datum_Jahr | - | - | unsigned int | - | - | - | - |
| 0x4604 | Spannung_Kl30 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x4605 | Bedienquelle | 0-n | - | 0xFF | TAB_BEDIENANFORDERUNG | - | - | - |
| 0x4606 | Zeit_Überschreitung | s | - | unsigned int | - | - | - | - |
| 0x4607 | Max_Wert_Überschreitung | km/h | - | unsigned int | - | - | - | - |
| 0x4608 | Hallsensoren | HEX | high | unsigned int | - | - | - | - |
| 0x4609 | Drehwinkelgeber | HEX | - | unsigned char | - | - | - | - |
| 0x460A | Verriegelung | 0-n | - | 0xFF | TAB_UW_VERRIEGELUNG | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x240005 | Puffer für aktive Fehlermeldungen voll. | 0 |
| 0x240006 | Versand aktiver Fehlermeldungen mehrfach erfolglos. Puffer wird gelöscht. | 0 |
| 0x240007 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x240008 | NVM_E_WRITE_FAILED | 0 |
| 0x240009 | NVM_E_READ_FAILED | 0 |
| 0x24000a | NVM_E_CONTROL_FAILED | 0 |
| 0x24000b | NVM_E_ERASE_FAILED | 0 |
| 0x24000c | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x24000d | NVM_E_READ_ALL_FAILED | 0 |
| 0x24000f | Botschaft (328h, Relativzeit): Ausfall | 1 |
| 0x240010 | Botschaft (3A0h, Fahrzeugzustand): Ausfall | 1 |
| 0x240011 | PIA_E_IO_ERROR | 0 |
| 0xffffff | ungültiger Fehlerort | 1 |

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
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| POSITION_VERDECK | 0xDDD0 | - | Position Verdeck | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDDD0 | RES_0xDDD0 |
| POSITION_HECKSCHEIBE | 0xDDD1 | - | Position Heckscheibe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDDD1 | RES_0xDDD1 |
| HALLSENSOREN_VERDECK | 0xDDD2 | - | alle Hallsensoren Verdeck | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD2 |
| SCHALTER_VDKB_U | 0xDDD5 | - | Schalter Verdeckkastenboden unten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD5 |
| POSITION_VERRIEGELUNG | 0xDDD7 | - | Position Verriegelung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDDD7 | RES_0xDDD7 |
| DREHWINKELGEBER_VERDECK | 0xDDDA | - | Position der Drehwinkelgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDDA |
| BEDIENTASTER_VERDECK | 0xDDDD | - | Status Verdeck Bedientaster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDDD |
| BUS_IN_DATEN_VERDECK | 0xDDDF | - | Statuswerte über BUS empfangen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDDF |
| AKTORIK_VERDECK | 0xDDE0 | - | Status Relais und Ventile | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE0 |
| SPERRBEDINGUNGEN_VERDECK | 0xDDE1 | - | Status Sperrbedingungen von Verdeck | bit | - | - | BITFIELD | RES_0xDDE1 | - | - | - | - | 22 | - | - |
| ANLERNEN | 0xDDE6 | - | Status Anlernen Verdeck | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDDE6 | RES_0xDDE6 |
| ZUSATZINFO_GESCHWINDIGKEIT | 0xDDE7 | - | Speichert und löscht Daten wenn Geschwindigkeit zu hoch bei Verdeck in Zwischenstellung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDE7 | RES_0xDDE7 |
| _VERDECKZAEHLER | 0x4010 | - | Anzahl der Verdeckbewegungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010 |
| _VERDECKSTATUS | 0x4000 | - | Auslesen des Status des CVM | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4000 |
| _ROHDATEN | 0x4020 | - | Auslesen Analog-Digital-Wandler-Rohwerte | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4020 |
| _SYSTEMFLAGS | 0x4050 | STAT_FLAGS_WERT | - | - | unSysFlags | - | data[24] | - | - | - | - | 0x24 | 22 | - | - |
| _WIEDERHOLSPERREN_VERDECK | 0x4070 | - | Zählerstand der Wiederholsperren | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4070 |
| _STEUERN_OUTPUT | 0xF002 | - | Steuern aller Ausgänge (ohne zeitliche Begrenzung) | - | - | - | - | - | - | - | - | 0x24 | 31 | ARG_0xF002 | - |

### RES_0XDDD0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDECK_POSITION | 0-n | high | unsigned char | - | TAB_VERDECK_POSITION | - | - | - | Status Verdeckposition Interpretation siehe Tabelle |

### ARG_0XDDD0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CVM_STEUERN | - | - | - | - | - | Ansteuerung Verdeck |

### TAB_VERDECK_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Komplett geschlossen und verriegelt |
| 0x01 | Zwischenstellung |
| 0x02 | Komplett geöffnet und verriegelt |
| 0x03 | Beladeposition |
| 0x04 | Hardtop aufgesetzt |
| 0x05 | Komplett geschlossen |
| 0x06 | Komplett geöffnet |
| 0x08 | Notverriegelung durchgeführt |
| 0xFF | Ungültig |

### RES_0XDDD1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLZAEHLER_POS_HECKSCHEIBE_WERT | - | - | unsigned int | - | - | - | - | - | Zählerstand Hallinkremente Heckscheibe |

### ARG_0XDDD1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CVM_STEUERN | - | - | - | - | - | Ansteuerung Heckscheibe |

### RES_0XDDD2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLSENSOR_VKLV | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe links verriegelt 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_VKRV | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe rechts verriegelt 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_VKO | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe offen 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_WLG | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Windlauf geschlossen 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_TPFL | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Totpunkt Finnen links 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_TPFR | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Totpunkt Finnen rechts 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_HSU | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Heckscheibe unten 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_RES1 | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Reserve 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_RES2 | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Reserve 0 = Nicht Erregt 1 = Erregt |
| STAT_HALLSENSOR_RES3 | 0/1 | - | unsigned char | - | - | - | - | - | Hallsensor Reserve 0 = Nicht Erregt 1 = Erregt |

### RES_0XDDD5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_VDKB_UNTEN | 0/1 | - | unsigned char | - | - | - | - | - | Schalter Verdeckkastenboden unten 0 = AUS 1 = EIN |
| STAT_SCHALTER_RES1 | 0/1 | - | unsigned char | - | - | - | - | - | Reserve |

### RES_0XDDD7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLZAEHLER_POS_VERRIEGELUNG_WERT | - | - | unsigned int | - | - | - | - | - | Zählerstand Hallinkremente Verriegelung |

### ARG_0XDDD7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CVM_STEUERN | - | - | - | - | - | Ansteuerung Verriegelung Windlauf |

### TAB_CVM_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | OEFFNEN |
| 0x02 | SCHLIESSEN |

### RES_0XDDDA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_HAUPTSAEULE | 0-n | - | unsigned char | - | TAB_CVM_SEGMENT_HAUPTS | - | - | - | Position Hauptsäule Interpretation siehe Tabelle |
| STAT_POSITION_FINNEN | 0-n | - | unsigned char | - | TAB_CVM_SEGMENT_FINNEN | - | - | - | Position Finnen Interpretation siehe Tabelle |
| STAT_DREHWINKELGEBER_HAUPTS_WERT | HEX | - | unsigned char | - | - | - | - | - | gemittelter AD-Wert des Drehwinkelgebers Hauptsäule |
| STAT_DREHWINKELGEBER_FINNEN_WERT | HEX | - | unsigned char | - | - | - | - | - | gemittelter AD-Wert des Drehwinkelgebers Finnen |

### TAB_CVM_SEGMENT_HAUPTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach KL31 |
| 0x01 | Segment 1: Verdeck aufgestellt |
| 0x02 | Segment 2: Hauptsäule in Bereich Finnen anheben beim Schließen |
| 0x03 | Segment 3: Hauptsäule in Bereich Finnen absenken beim Öffnen |
| 0x04 | Segment 4: Hauptsäule in Bereich Finnen drucklos |
| 0x05 | Segment 5: Verdeck abgelegt |
| 0x06 | Kurzschluss nach KL30 |
| 0xFF | Drehwinkelgeber nicht bewertet |

### TAB_CVM_SEGMENT_FINNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach KL31 |
| 0x01 | Segment 1: Finnen ausgespannt |
| 0x02 | Segment 2: Finnen in Zwischenstellung |
| 0x03 | Segment 3: Finnen in Zwischenstellung |
| 0x04 | Segment 4: Finnen in Zwischenstellung |
| 0x05 | Segment 5: Finnen aufgestellt |
| 0x06 | Kurzschluss nach KL30 |
| 0xFF | Drehwinkelgeber nicht bewertet |

### RES_0XDDDD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOEFF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Verdeck Bedientaster Auf 0 = Nicht gedrückt 1 = Gedrückt |
| STAT_VSCHL_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Verdeck Bedientaster Zu 0 = Nicht gedrückt 1 = Gedrückt |

### RES_0XDDDF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | - | - | - | Fahrzeuggeschwindigkeit über BUS |
| STAT_TEMPERATUR_WERT | °C | high | char | - | - | - | - | - | Außentemperatur über BUS |
| STAT_HECKKLAPPE | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_HECKKLAPPE | - | - | - | Zustand Heckklappe Interpretation siehe Tabelle |
| STAT_FENSTER_FAT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_FATH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFTH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_POS_FENSTER_FAT_WERT | cm | high | unsigned char | - | - | - | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFT_WERT | cm | high | unsigned char | - | - | - | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_FATH_WERT | cm | high | unsigned char | - | - | - | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFTH_WERT | cm | high | unsigned char | - | - | - | 2.0 | 0.0 | Position Fenster |
| STAT_KOMFORT_FUNKTION | 0-n | high | unsigned char | - | TAB_CVM_KOMFORT_FUNKTION | - | - | - | Status Komfort Funktion Interpretation siehe Tabelle |
| STAT_MSA | 0-n | high | unsigned char | - | TAB_CVM_STAT_MSA | - | - | - | Status Motor Start Automatik |
| STAT_KLEMMEN | 0-n | high | unsigned char | - | TAB_CVM_KLEMMEN_STATUS | - | - | - | Status Zustand Klemmen Interpretation siehe Tabelle |
| STAT_VERBRAUCHERSTEUERUNG | 0-n | high | unsigned char | - | TAB_VERBRAUCHERSTEUERUNG | - | - | - | Status Verbrauchersteuerung Interpretation siehe Tabelle |
| STAT_FREIGABE_VERDECK | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | - | - | - | Status Freigabe Verdeck Interpretation siehe Tabelle |
| STAT_FREIGABE_FENSTER | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | - | - | - | Status Freigabe Fenster Interpretation siehe Tabelle |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | - | - | - | Ausgabe Kilometerstand |
| STAT_RELATIVZEIT_WERT | s | high | unsigned long | - | - | - | - | - | Ausgabe Relativzeit Fahrzeug |

### TAB_CVM_ZUSTAENDE_HECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Geöffnet |
| 0xFF | Ungültig |

### TAB_CVM_ZUSTAENDE_FENSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Geoeffnet |
| 0xFF | Ungueltig |

### TAB_CVM_KOMFORT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Komfortöffnen |
| 0x02 | Komfortschließen |
| 0x05 | Komfortöffnen Schließzylinder |
| 0x06 | Komfortschließen Schließzylinder |
| 0x09 | Komfortöffnen Funkschlüssel |
| 0x0A | Komfortschließen Funkschlüssel |
| 0x0D | Komfortöffnen ID-Geber im Nahbereich |
| 0x0E | Komfortschließen ID-Geber im Nahbereich |
| 0x0B | Beladeposition anfahren |
| 0x08 | Beladeposition ablegen |
| 0xFF | Signal ungültig |

### TAB_CVM_STAT_MSA

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbrennungsmotor steht durch Fahrerwunsch |
| 0x08 | Verbrennungsmotor steht durch MSA-Anforderung |
| 0x04 | Startankündigung des Verbrennungsmotors durch Fahrerwunschq |
| 0x0C | Startankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x01 | Verbrennungsmotor startet durch Fahrerwunsch |
| 0x05 | Verbrennungsmotor startet durch MSA-Anforderung |
| 0x02 | Verbrennungsmotor läuft |
| 0x06 | Stopankündigung des Verbrennungsmotors durch Fahrerwunsch |
| 0x0E | Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x12 | Verbrennungsmotor im Auslauf durch Fahrerwunsch |
| 0x19 | Verbrennungsmotor im Auslauf durch MSA-Anforderung |
| 0x1E | Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung |
| 0xFF | Signal ungültig |

### TAB_CVM_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F Änderung |
| 0x04 | KL30F EIN |
| 0x05 | KL30B Änderung |
| 0x06 | KL30B EIN |
| 0x07 | KLR Änderung |
| 0x08 | KLR EIN |
| 0x09 | KL15 Änderung |
| 0x0A | KL15 EIN |
| 0x0B | KL50 Verzögerung |
| 0x0C | KL50 Änderung |
| 0x0D | KL50 EIN |
| 0x0E | Fehler |
| 0xFF | Signal ungültig |

### TAB_VERBRAUCHERSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Spezielle Standverbraucher dürfen sich einschalten |
| 0x02 | Standverbraucher müssen sich abschalten |
| 0xFF | Signal ungültig |

### TAB_CVM_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht freigegeben |
| 0x01 | Freigegeben |
| 0xFF | Signal ungültig |

### RES_0XDDE0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL_V1_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Ventil 1 0 = AUS 1 = EIN |
| STAT_VENTIL_V2_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Ventil 2 0 = AUS 1 = EIN |
| STAT_VENTIL_V3_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Ventil 3 0 = AUS 1 = EIN |
| STAT_VENTIL_RES_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Ventil Reserve 0 = AUS 1 = EIN |
| STAT_RELAIS_REL1_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Relais 1 Pumpe Verdeck öffnen 0 = AUS 1 = EIN |
| STAT_RELAIS_REL2_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Relais 2 Pumpe Verdeck schließen 0 = AUS 1 = EIN |
| STAT_RELAIS_REL3_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Relais 3 Heckscheibe absenken 0 = AUS 1 = EIN |
| STAT_RELAIS_REL4_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Schaltzustand Relais 4 Heckscheibe anheben 0 = AUS 1 = EIN |
| STAT_MOTOR_WINDLAUF | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_WINDLAUF | - | - | - | Interpretation siehe Tabelle |

### TAB_CVM_MOTOR_WINDLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Windlauf öffnet |
| 0x02 | Windlauf schließt |
| 0xFF | Status unbekannt |

### RES_0XDDE1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERR_UNTERSPANNUNG | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_UEBERSPANNUNG | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_SENSORVERSORGUNG | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_VERDECKKASTENBODEN | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_KODIERDATEN | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_TIMEOUT | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_POSITION_WINDLAUF | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_SENSORIK | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_AKTORIK | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_MOTOR_WINDLAUF | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_HYDRAULIKPUMPE | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_VENTILE | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_AUSSENTEMPERATUR | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_GESCHWINDIGKEIT | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_HECKKLAPPE | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_STANDVERBRAUCHER | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |
| STAT_SPERR_MOTORSTART | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt |

### RES_0XDDE6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAG_ANGELERNT | 0-n | high | unsigned char | - | TAB_CVM_ANGELERNT | - | - | - | Status angelernt |
| STAT_SEGMENTGRENZEN_HAUPTS_WERT | - | high | data[6] | - | - | - | - | - | Status Segmentgrenzen Hauptsäule |
| STAT_SEGMENTGRENZEN_FINNEN_WERT | - | high | data[6] | - | - | - | - | - | Status Segmentgrenzen Finnen |

### ARG_0XDDE6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CVM_ANLERNEN | - | - | - | - | - | Aktion Anlernen |

### TAB_CVM_ANGELERNT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Drehwinkelgeber angelernt |
| 0x01 | Drehwinkelgeber Hauptsäule angelernt |
| 0x08 | Drehwinkelgeber Finnen angelernt |
| 0x09 | Drehwinkelgeber Hauptsäule und Finnen angelernt |
| 0xFF | Status unbekannt |

### TAB_CVM_ANLERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Loeschen |
| 0x01 | Anlernen |

### RES_0XDDE7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_LETZTER_WERT | km/h | high | unsigned char | - | - | - | - | - | Letzte maximale Geschwindigkeitsüberschreitung |
| STAT_ZEITPUNKT_LETZTER_WERT | s | high | unsigned long | - | - | - | - | - | Zeitpunkt letzte Geschwindigkeitsüberschreitung |
| STAT_DAUER_LETZTER_WERT | s | high | unsigned char | - | - | - | - | - | Dauer der letzten Geschwindigkeitsüberschreitung |
| STAT_VERDECKKLAPPE_OFFEN_LETZTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren letzte Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_VERDECKKLAPPE_VERR_RECHTS_LETZTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren letzte Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_VERDECKKLAPPE_VERR_LINKS_LETZTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren letzte Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_VERSCHLUSS_VERRIEGELT_LETZTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren letzte Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_FINNEN_TOTPUNKT_RECHTS_LETZTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren letzte Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_FINNEN_TOTPUNKT_LINKS_LETZTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren letzte Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_POSITION_HAUTSAEULE_LETZTE | 0-n | high | unsigned char | - | TAB_CVM_POSITION_HAUPTSAEULE_GESCHWINDIGKEIT | - | - | - | Position der Haupsäule bei der letzten Geschwindigkeitsüberschreitung |
| STAT_POSITION_FINNEN_LETZTE | 0-n | high | unsigned char | - | TAB_CVM_POSITION_FINNEN_GESCHWINDIGKEIT | - | - | - | Position der Finnen bei der letzten Geschwindigkeitsüberschreitung |
| STAT_GESCHWINDIGKEIT_MAXIMUM_WERT | km/h | high | unsigned char | - | - | - | - | - | maximale Geschwindigkeitsüberschreitung |
| STAT_ZEITPUNKT_MAXIMUM_WERT | s | high | unsigned long | - | - | - | - | - | Zeitpunkt maximale Geschwindigkeitsüberschreitung |
| STAT_DAUER_MAXIMUM_WERT | s | high | unsigned char | - | - | - | - | - | Dauer der  maximalen Geschwindigkeitsüberschreitung |
| STAT_VERDECKKLAPPE_OFFEN_MAXIMUM | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren bei der maximalen Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_VERDECKKLAPPE_VERR_RECHTS_MAXIMUM | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren bei der maximalen Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_VERDECKKLAPPE_VERR_LINKS_MAXIMUM | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren bei der maximalen Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_VERSCHLUSS_VERRIEGELT_MAXIMUM | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren bei der maximalen Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_FINNEN_TOTPUNKT_RECHTS_MAXIMUM | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren bei der maximalen Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_FINNEN_TOTPUNKT_LINKS_MAXIMUM | 0/1 | high | unsigned char | - | - | - | - | - | Status der Hallsensoren bei der maximalen Geschwindigkeitsüberschreitung 0 = Nicht Erregt 1 = Erregt |
| STAT_POSITION_HAUTSAEULE_MAXIMUM | 0-n | high | unsigned char | - | TAB_CVM_POSITION_HAUPTSAEULE_GESCHWINDIGKEIT | - | - | - | Position der Haupsäule bei der maximalen Geschwindigkeitsüberschreitung |
| STAT_POSITION_FINNEN_MAXIMUM | 0-n | high | unsigned char | - | TAB_CVM_POSITION_FINNEN_GESCHWINDIGKEIT | - | - | - | Position der Finnen bei der maximalen Geschwindigkeitsüberschreitung |

### ARG_0XDDE7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen aller bisher gespeicherten Daten |

### TAB_CVM_POSITION_HAUPTSAEULE_GESCHWINDIGKEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach KL31 |
| 0x01 | Verdeck aufgestellt |
| 0x02 | Hauptsäule in Segment Finnen anheben beim Schließen |
| 0x03 | Hauptsäule in Segment Finnen absenken beim Öffnen |
| 0x04 | Hauptsäule in Segment Finnen drucklos |
| 0x05 | Verdeck abgelegt |
| 0x06 | Kurzschluss nach KL30 |
| 0xFF | Drehwinkelgeber nicht bewertet |

### TAB_CVM_POSITION_FINNEN_GESCHWINDIGKEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach KL31 |
| 0x01 | Finnen ausgespannt |
| 0x02 | Finnen in Zwischenstellung |
| 0x03 | Finnen in Zwischenstellung |
| 0x04 | Finnen in Zwischenstellung |
| 0x05 | Finnen aufgestellt |
| 0x06 | Kurzschluss nach KL30 |
| 0xFF | Drehwinkelgeber nicht bewertet |

### RES_0X4010

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_SCHLIESSEN_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl der Schliessvorgänge |
| STAT_ZAEHLER_OEFFNEN_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl der Öffnenvorgänge |

### RES_0X4000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWG_HAUPTS | 0-n | - | unsigned char | - | TAB_SEGMENT_HAUPTS | - | - | - | Segment in dem sich die Haupsäule befindet 0=Kurzschluss Masse 1...5: gültige Segmente 6=Kurzschluss +Ub |
| STAT_DWG_HAUPTS_ROH_WERT | HEX | - | unsigned char | - | - | - | - | - | Rohwert des Hauptsäule-DWG |
| STAT_DWG_FIINEN | 0-n | - | unsigned char | - | TAB_SEGMENT_FINNEN | - | - | - | Segment in dem sich die Finnen befinden 0=Kurzschluss Masse 1...5: gültige Segmente 6=Kurzschluss +Ub |
| STAT_DWG_FINNEN_ROH_WERT | HEX | - | unsigned char | - | - | - | - | - | Rohwert des Finnen-DWG |
| STAT_HALL_VKLAPPE_VERRIEGELT_LINKS | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |
| STAT_HALL_VKLAPPE_VERRIEGELT_RECHTS | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |
| STAT_HALL_VKLAPPE_OFFEN | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |
| STAT_HALL_VERSCHLUSS_VERRIEGELT | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |
| STAT_SCHALTER_VERSCHLUSS_UNTERTEIL | 0-n | - | unsigned char | - | TAB_DIAGSCHALTER | - | - | - | 0x00: Schalter nicht bewertet 0x01: Schalter offen 0x02: Schalter geschlossen  0x03: Schalter fehlerhaft |
| STAT_HALL_HECKSCHEIBE_UNTEN | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |
| STAT_VERRIEGELUNG | 0-n | - | unsigned char | - | TAB_VERRIEGELUNG | - | - | - | - |
| STAT_VENTIL1 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_VENTIL2 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_VENTIL3 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_VENTIL4 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS1 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS2 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS3 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS4 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_TABELLENSTATUS_WERT | HEX | - | unsigned char | - | - | - | - | - | - |
| STAT_MOT1 | 0-n | - | unsigned char | - | TAB_STAT_AUSGANG_MOTOR | - | - | - | 0x00 Relais nicht geschaltet (Ausgang an Treiber) 0x01 Relais geschaltet (Ausgng auf GND) |
| STAT_MOT2 | 0-n | - | unsigned char | - | TAB_STAT_AUSGANG_MOTOR | - | - | - | 0x00 Relais nicht geschaltet (Ausgang an Treiber) 0x01 Relais geschaltet (Ausgng auf GND) |
| STAT_HALL_FINNEN_TOTPUNKT_LINKS | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |
| STAT_VENTIL | BIT | - | BITFIELD | - | TAB_VENTILSTATUS | - | - | - | Status der Highsidetreiber-Statusleitungen |
| STAT_HALL_FINNEN_TOTPUNKT_RECHTS | 0-n | - | unsigned char | - | TAB_HALL | - | - | - | 0x00: Hallsensor nicht bewertet 0x01: Hallsensor bedeckt 0x02: Hallsensor nicht bedeckt 0x03: Hallsensor fehlerhaft |

### TAB_SEGMENT_HAUPTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach KL31 |
| 0x01 | Verdeck aufgestellt |
| 0x02 | Hauptsäule in Segment Finnen anheben beim Schließen |
| 0x03 | Hauptsäule in Segment Finnen absenken beim Öffnen |
| 0x04 | Hauptsäule in Segment Finnen drucklos |
| 0x05 | Verdeck abgelegt |
| 0x06 | Kurzschluss nach KL30 |
| 0xFF | Drehwinkelgeber nicht bewertet |

### TAB_SEGMENT_FINNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach KL31 |
| 0x01 | Finnen ausgespannt |
| 0x02 | Finnen in Zwischenstellung |
| 0x03 | Finnen in Zwischenstellung |
| 0x04 | Finnen in Zwischenstellung |
| 0x05 | Finnen aufgestellt |
| 0x06 | Kurzschluss nach KL30 |
| 0xFF | Drehwinkelgeber nicht bewertet |

### TAB_HALL

| WERT | TEXT |
| --- | --- |
| 0x00 | Hallsensor nicht bewertet |
| 0x01 | Hallsensor bedeckt |
| 0x02 | Hallsensor nicht bedeckt |
| 0x03 | Hallsensor fehlerhaft |
| 0xff | unbekannter Status |

### TAB_DIAGSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Schalter nicht bewertet |
| 0x01 |  Schalter offen |
| 0x02 | Schalter geschlossen |
| 0x03 | Schalter fehlerhaft |
| 0xff | ungültiger Zustand |

### TAB_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht initialisiert |
| 0x01 | Verriegelung geschlossen |
| 0x02 | Verriegelung in Zwischenstellung |
| 0x03 | Verriegelung offen |
| 0x04 | Blockfahrt |
| 0xff | ungültig |

### TAB_STAT_AUSGANG_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang Tristate |
| 0x01 | Ausgang an KL30 |
| 0x02 | Ausgang an KL31 |
| 0xff | Status ungültig |

### TAB_VENTILSTATUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | NAME | MASKE | INFO | MUL | DIV | ADD | LABEL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL1_3_OK | 0/1 |  | unsigned char |  | 0x01 |  |  |  |  |  |
| STAT_VENTIL2_4_OK | 0/1 |  | unsigned char |  | 0x02 |  |  |  |  |  |
| STAT_RELAIS2_4_OK | 0/1 |  | unsigned char |  | 0x04 |  |  |  |  |  |
| STAT_RELAIS1_3_OK | 0/1 |  | unsigned char |  | 0x08 |  |  |  |  |  |

### RES_0X4020

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL01_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe offen |
| STAT_HALL02_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe Dämpfung |
| STAT_HALL04_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe zu rechts |
| STAT_HALL05_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe zu links |
| STAT_HALL06_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Windlauf geschlossen |
| STAT_HALL07_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Totpunkt Finnen |
| STAT_HALL08_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Inkrementalgeber Verriegelung |
| STAT_SCHALTER10_WERT | HEX | - | unsigned char | - | - | - | - | - | Mikroschalter Verschluss-Unterteil |
| STAT_HALL12_WERT | HEX | - | unsigned char | - | - | - | - | - | Bedientaster öffnen |
| STAT_HALL13_WERT | HEX | - | unsigned char | - | - | - | - | - | Bedientaster schließen |
| STAT_HALL14_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Heckscheibe unten |
| STAT_HALL15_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Inkrementalgeber Heckscheibe |
| STAT_I_MOT_WERT | HEX | - | unsigned char | - | - | - | - | - | Strom Verriegelungsmotor |
| STAT_U_MOT1_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Ausgang Mot1 |
| STAT_U_MOT2_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Ausgang Mot2 |
| STAT_U_MOT3_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Ausgang Mot3 |
| STAT_FINNEN_WERT | HEX | - | unsigned char | - | - | - | - | - | Drehwinkelgeber Finnen |
| STAT_HAUTSAEULE_WERT | HEX | - | unsigned char | - | - | - | - | - | Drehwinkelgeber Hauptsäule |
| STAT_12VSW_A2_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Karossriestecker Gruppe 2 |
| STAT_12VSW_A1_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Karossriestecker Gruppe 1 |
| STAT_KLEMME30_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Klemme 30 |
| STAT_NTC_WERT | HEX | - | unsigned char | - | - | - | - | - | Temperaturfühler Pumpe |
| STAT_12VSW_B2_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Verdeckstecker Gruppe 2 |
| STAT_12VSW_B1_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Verdeckstecker Gruppe 1 |
| STAT_5VSW_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Drewinkelgeber |
| STAT_KLEMME15_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Klemme 15 |
| STAT_HALL03_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensoreingang 03 |
| STAT_HALL09_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensoreingang 09 |
| STAT_HALL11_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensoreingang 11 |
| STAT_HALL16_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensoreingang 16 |

### RES_0X4070

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_VENTILE_WERT | - | high | unsigned int | - | - | - | - | - | Stand Zähler Wiederholsperre Ventile |
| STAT_SPERRE_VENTILE_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Sperre Wiederholsperre Ventile |
| STAT_FREIGABE_VENTILE_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Freigabe Wiederholsperre Ventile |
| STAT_ZAEHLER_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | - | - | - | Stand Zähler Wiederholsperre Hydraulikpumpe |
| STAT_SPERRE_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Sperre Wiederholsperre Hydraulikpumpe |
| STAT_FREIGABE_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Freigabe Wiederholsperre Hydraulikpumpe |
| STAT_ZAEHLER_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | - | - | - | Stand Zähler Wiederholsperre Verriegelung |
| STAT_SPERRE_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Sperre Wiederholsperre Verriegelung |
| STAT_FREIGABE_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Freigabe Wiederholsperre Verriegelung |
| STAT_ZAEHLER_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | - | - | - | Stand Zähler Wiederholsperre Heckscheibe |
| STAT_SPERRE_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Sperre Wiederholsperre Heckscheibe |
| STAT_FREIGABE_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | - | - | - | Aktueller Grenzwert Freigabe Wiederholsperre Heckscheibe |

### TAB_SERIENNUMMER

| WERT | TEXT |
| --- | --- |
| 0x30 | 0 |
| 0x31 | 1 |
| 0x32 | 2 |
| 0x33 | 3 |
| 0x34 | 4 |
| 0x35 | 5 |
| 0x36 | 6 |
| 0x37 | 7 |
| 0x38 | 8 |
| 0x39 | 9 |
| 0xFF | ungültiges Zeichen |

### TAB_VERDECK_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | VERDECK_STOP |
| 0x01 | VERDECK_OEFFNEN |
| 0x02 | VERDECK_SCHLIESSEN |

### ARG_0XF002

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HYDRAULIK | + | - | - | - | unsigned char | - | - | - | - | - | - | - |  |
| VERRIEGELUNG | + | - | - | - | unsigned char | - | - | - | - | - | - | - |  |
| LED | + | - | - | - | unsigned char | - | - | - | - | - | - | - |  |

### TAB_BEDIENANFORDERUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Bedienanforderung |
| 0x01 | Bedientaster Öffnen |
| 0x02 | Bedientaster Schließen |
| 0x05 | Komfortöffnen Türschloss |
| 0x06 | Komfortschließen Türschloss |
| 0x09 | Komfortöffnen ID-Geber |
| 0x0A | Komfortschließen ID-Geber |
| 0x11 | Komforöffnen Funkschlüssel |
| 0x12 | Komfortschließen Funkschlüssel |
| 0xFF | Bedienanforderung ungültig |

### TAB_UW_VERRIEGELUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Nicht initialisiert |
| 0x01 | Verriegelung geschlossen |
| 0x02 | Verriegelung in Zwischenstellung |
| 0x03 | Verriegelung offen |
| 0x04 | Blockfahrt |
| 0xff | ungültig |
