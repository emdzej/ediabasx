# cid_01t.prg

## General

|  |  |
| --- | --- |
| File | cid_01t.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 32 |
| Origin | BMW EI-42 Kar |
| Revision | 1.001 |
| Author | TPO PCIT JME, Volke EI-42 AS, TPO PCIT BC |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CID - Central Information Display (TPO) |  |  |
| ORIGIN | string | BMW EI-42 Kar |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | TPO PCIT JME, Volke EI-42 AS, TPO PCIT BC |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.05 |  |  |
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
| 0x0000A2 | Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | ADC Automotive Distance Control Systems GmbH |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hintergrundbeleuchtung und Anzeige abgeschaltet |
| 0x01 | Spezieller Energiesparmode | Hintergrundbeleuchtung und Anzeige abgeschaltet |
| 0x02 | ECOS-Mode | Hintergrundbeleuchtung und Anzeige abgeschaltet |
| 0x03 | MOST-Mode | Hintergrundbeleuchtung und Anzeige abgeschaltet |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027300 | Energiesparmode aktiv | 1 |
| 0x02FF73 | Test-DTC Appl für Diagnosemaster | 0 |
| 0x800303 | Hardwarefehler: LED-Kette defekt | 0 |
| 0x800304 | Hardwarefehler: Spannungsversorgung von Hintergrundbeleuchtung defekt | 0 |
| 0x800307 | Hardwarefehler: Temperatursensor für Hintergrundbeleuchtung defekt | 0 |
| 0x800308 | Hardwarefehler: Temperatursensor für Hauptleiterplatte defekt | 0 |
| 0x800309 | Hardwarefehler: Temperatursensor für TFT Panel defekt | 0 |
| 0x80030A | Hardwarefehler:  Sensor für Umgebungshelligkeit ist defekt | 0 |
| 0x80030B | Hardwarefehler: Bordnetzspannungsmesspfad ist defekt | 0 |
| 0x800330 | Übertemperatur am TFT Panel erkannt | 1 |
| 0x800331 | Übertemperatur der Hauptleiterplatte erkannt | 1 |
| 0x800333 | Übertemperatur an der Hintergrundbeleuchtung erkannt | 1 |
| 0x800334 | PWM Reduktion auf Grundübertemperatur | 1 |
| 0x80034A | Codierung: Steuergerät nicht codiert | 0 |
| 0x80034B | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x80034C | Codierung: Signatur für Daten ungültig | 0 |
| 0x80034D | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x800351 | Videoverbindung: V-SYNC fehlt | 1 |
| 0x800352 | Videoverbindung: LVDS-Lock fehlt | 1 |
| 0x800355 | Videoverbindung: Anzahl der Zeilen nicht in Ordnung | 1 |
| 0x800370 | Unterspannung erkannt | 1 |
| 0x800371 | Überspannung erkannt | 1 |
| 0xE5D402 | Botschaft (0x328 Relativzeit): Ausfall | 1 |
| 0xE5C40B | K-CAN Bus | 0 |
| 0xE5C414 | K-CAN Control Module Bus OFF | 0 |
| 0xE5CBFF | Test-DTC Com für Diagnosemaster | 0 |
| 0xE5D415 | Botschaft (0x2CE CTR_Monitor): Ausfall | 1 |
| 0xE5D416 | Botschaft (0x3A0 Fahrzeugzustand): Ausfall | 1 |
| 0xE5D417 | Botschaft (0x202 DIMMUNG): Ausfall | 1 |
| 0xE5D418 | Botschaft (0x12F KLEMME): Ausfall | 1 |
| 0xE5D420 | Botschaft (0x393 LCD_BRIG_CLCTR): Ausfall | 1 |
| 0xE5EC02 | Signal (0x202) ungültig empfangen: CTR_ILUM_SW | 1 |
| 0xE5EC03 | Signal (0x393) ungültig empfangen: DSTN_LCD_LUM | 1 |
| 0xE5EC04 | Signal (0x393) ungültig empfangen: DMPNG_LCD_LUM | 1 |
| 0xE5EC05 | Signal (0x12F) ungültig empfangen: ST_KL | 1 |
| 0xE5EC06 | Signal (0x3A0) ungültig empfangen: Status_Sperre_Fehlerspeicher_FZM | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x800313 | Softwarefehler: Unerwarteter Reset | 0 |
| 0x800314 | Softwarefehler: Division durch 0 | 0 |
| 0x800315 | Softwarefehler: Unbekannter Befehl | 0 |
| 0x80031A | PIA_E_IO_ERROR | 0 |
| 0x800335 | DEM_Queue_DELETED | 0 |
| 0x800336 | NVM_E_WRITE_FAILED | 0 |
| 0x800340 | DEM_Queue_FULL | 0 |
| 0x800343 | NVM_E_READ_FAILED | 0 |
| 0x800344 | NVM_E_CONTROL_FAILED | 0 |
| 0x800345 | NVM_E_ERASE_FAILED | 0 |
| 0x800346 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x800347 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x800349 | NVM_E_READ_ALL_FAILED | 0 |
| 0x80034F | EAD_NVM_BLOCK_SIZE_MISMATCH | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_BACKLIGHT_CID | 0xD5C4 | - | Ansteuerung der Hintergrundbeleuchtung des CIDs per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4 | - |
| BUS_IN_HELLIGKEIT_SOLL | 0xD5C6 | STAT_BUS_IN_HELLIGKEIT_SOLL_WERT | Gibt den Helligkeits-Sollwert des Photosensors  vom Kombi über BUS aus. | % | - | - | char | - | - | - | - | - | 22 | - | - |
| STROM_KREIS_X_WERT | 0xD5C3 | - | Gibt die Stromaufnahme der LED-Ketten der Hintergrundbeleuchtung aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5C3 |
| DISPLAY_WERTE_LESEN | 0xD5C0 | - | Gibt die aktuellen Statuswerte des CID aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5C0 |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemmen 58G in Prozent | % | - | - | int | - | - | - | - | - | 22 | - | - |
| STEUERN_CID_EIN | 0xD5C2 | - | Schaltet per Diagnose das CID ein und aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2 | - |
| STEUERN_TESTBILD_CID | 0xD5C1 | - | Steuert die Testbild-Ausgabe vom CID an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1 | - |
| STEUERN_PATTERN | 0x4306 | - | Test-Pattern | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4306 | - |
| STEUREN_LUMINANCE_CID | 0x4304 | - | Gibt konstanten Helligkeitswert vor (cd/m2) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4304 | - |
| STATUS_SENSORS | 0x4302 | - | Gibt den Wert aller Sensoren zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4302 |
| STEUERN_RGB_CID | 0x4301 | - | Gibt RGB-Wert vor | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4301 | - |
| TEMP_RECORD | 0x4308 | - | Temperatur Historie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4308 |
| TEMP_COUNTER_RESET | 0x4354 | - | Temperatur-Zähler zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4354 | - |

### TAB_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0 | BLACK |
| 1 | WHITE |
| 2 | RED |
| 3 | GREEN |
| 4 | BLUE |
| 5 | ADJUST |
| 6 | COLORBAR |
| 7 | GREYSCALE |
| 8 | CHECKERBOARD |
| 9 | PIXELONOFF |
| 10 | GREYLEVEL |
| 11 | RGBLEVEL |
| 12 | CROSS |
| 13 | CROSSTALK |
| 14 | SWITCHING |
| 15 | TEST |
| 255 | OFF |

### ARG_0X4301

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RGB | 1-n | - | unsigned long | - | - | - | - | - | - | - | 0xBBCCDD  AA=Rot, BB=Grün,CC=Blau |

### ARG_0X4304

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Luminance | n | - | int | - | - | - | - | - | - | - | Luminance Level in Candela/m2 |

### RES_0X4302

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_PCB_TEMP_WERT | hex | - | int | - | - | - | - | - | ADC Register Wert PCB temperature |
| STAT_ADC_LED1_TEMP_WERT | hex | - | int | - | - | - | - | - | ADC Register Wert LED1 temperature |
| STAT_ADC_LED2_TEMP_WERT | hex | - | int | - | - | - | - | - | ADC Register Wert LED2 temperature |
| STAT_ADC_SUPPLY_VOLTAGE_WERT | hex | - | int | - | - | - | - | - | ADC Register Wert Versorgungsspannung |
| STAT_BACKLIGHT_SENSOR_WERT | hex | - | int | - | - | - | - | - | Register Wert Hintergrundbeleuchtungs-Sensor |
| STAT_AMBIENT_SENSOR_WERT | hex | - | int | - | - | - | - | - | Register Wert Umgebungshelligkeits-Sensor |
| STAT_DIMMING_WERT | hex | - | int | - | - | - | - | - | Dimmungs-Wert |
| STAT_PWM_WERT | hex | - | int | - | - | - | - | - | PWM-Wert |
| STAT_TEMP_PCB_WERT | hex | - | char | - | - | - | - | - | PCB Temperatur |
| STAT_TEMP_LED1_WERT | hex | - | char | - | - | - | - | - | LED1 Temperatur |
| STAT_TEMP_LED2_WERT | hex | - | char | - | - | - | - | - | LED2 Temperatur |
| STAT_VBAT_WERT | hex | - | char | - | - | - | 10 | - | Batterie Spannung |
| STAT_STATUS_WERT | hex | - | char | - | - | - | - | - | Status |
| STAT_ADC_PANEL_TEMP_WERT | hex | - | int | - | - | - | - | - | ADC Register Wert PANEL Temperatur |
| STAT_TEMP_PANEL_WERT | hex | - | char | - | - | - | - | - | PANEL temperature |
| STAT_VSYNC_WERT | hex | - | char | - | - | - | - | - | Vertikale Sync Frequenz |
| STAT_HSYNC_WERT | hex | - | int | - | - | - | - | - | Horizontale Sync Frequenz |
| STAT_AMBIENT_LUMINANCE_WERT | hex | - | int | - | - | - | - | - | Umgebungshelligkeit |
| STAT_BACKLIGHT_LUMINANCE_WERT | hex | - | int | - | - | - | - | - | Helligkeit Hintergrundbeleuchtung |

### ARG_0X4306

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TESTBILD | 0-n | - | int | - | TAB_TESTBILD | - | - | - | - | - | Gibt Testbild unabhängig der Signale der HU aus. Kann auch ohne HU ausgegeben werden: Mögliche Werte: SCHWARZES_BILD, BLAUES_BILD, ROTES_BILD, GRUENES_BILD, NO_SIGNAL |

### RES_0X4308

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_READING_T1_WERT | °C | - | char | - | - | - | - | - | gelesene Temperatur T1 |
| STAT_TEMP_READING_T2_WERT | °C | - | char | - | - | - | - | - | gelesene Temperatur T2 |
| STAT_TEMP_READING_T3_WERT | °C | - | char | - | - | - | - | - | gelesene Temperatur T3 |
| STAT_TEMP_READING_T4_WERT | °C | - | char | - | - | - | - | - | gelesene Temperatur T4 |
| STAT_TEMP_COUNTER_T1_WERT | - | - | int | - | - | - | - | - | Temperatur Zähler T1 |
| STAT_TEMP_COUNTER_T2_WERT | - | - | int | - | - | - | - | - | Temperatur Zähler T2 |
| STAT_TEMP_COUNTER_T3_WERT | - | - | int | - | - | - | - | - | Temperatur Zähler T3 |
| STAT_TEMP_COUNTER_T4_WERT | - | - | int | - | - | - | - | - | Temperatur Zähler T4 |
| STAT_TEMP_SENSOR_WERT | - | - | char | - | - | - | - | - | Temperatur Sensor |

### ARG_0X4354

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STORE_TO_EPROM | hex | - | char | - | - | - | - | - | - | - | Speichert neue Einstellung ins EEPROM, wenn 0x01 |
| NEW_VALUE_COUNTER_T1 | hex | - | int | - | - | - | - | - | - | - | Neuer Wert für Temperatur Zähler  T1 |
| NEW_VALUE_COUNTER_T2 | hex | - | int | - | - | - | - | - | - | - | Neuer Wert für Temperatur Zähler  T2 |
| NEW_VALUE_COUNTER_T3 | hex | - | int | - | - | - | - | - | - | - | Neuer Wert für Temperatur Zähler  T3 |
| NEW_VALUE_COUNTER_T4 | hex | - | int | - | - | - | - | - | - | - | Neuer Wert für Temperatur Zähler  T4 |

### RES_0XD5C0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHOTOSENSOR_CID_WERT | lux | - | int | - | - | - | - | - | Analogwert Fototransistor im CID (Umgebungssensor) in LUX: zwischen 40 und 1200 LUX (0xFFFF bedeutet ungültige Werte). |
| STAT_TEMP_BACKLIGHT_WERT | °C | - | char | - | - | - | - | - | Temperatur der Hintergrundbeleuchtung,  0xFF bedeutet ungültig |
| STAT_TEMP_PCB_WERT | °C | - | char | - | - | - | - | - | Temperatur der Leiterplatte, 0xFF bedeutet ungültig |
| STAT_TEMP_LCD_WERT | °C | - | char | - | - | - | - | - | Temperatur an den LCDs, 0xFF bedeutet ungültig |
| STAT_BACKLIGHT_PWM_WERT | % | - | char | - | - | - | - | - | PWM-Wert der Hintergrundbeleuchtung: 0 - 100, 0 = dunkel, 100 = hell, 0xFF bedeutet ungültig |
| STAT_HELLIGKEIT_SOLL_WERT | % | - | char | - | - | - | - | - | Soll-Helligkeitswert vom Dimm-Modul im CID:  0 - 100 %  0 = dunkel, 100 = hell, 0xFF bedeutet ungültig |
| STAT_HELLIGKEIT_IST_WERT | % | - | char | - | - | - | - | - | Ist-Helligkeitswert vom Sensor im CID:  0 - 100 %  0 = dunkel, 100 = hell, 0xFF bedeutet ungültig |

### RES_0XD5C3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_KREIS_1_WERT | mA | - | unsigned char | - | - | - | - | - | Gibt die Stromaufnahme der LED-Kette 1 aus.  Genauigkeit 1 mA. |
| STAT_STROM_KREIS_2_WERT | mA | - | unsigned char | - | - | - | - | - | Gibt die Stromaufnahme der LED-Kette 2 aus.  Genauigkeit 1 mA. |

### ARG_0XD5C4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | char | - | - | - | - | - | - | - | Gibt den PWM-Wert an, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD5C2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | Schaltet per Diagnose das Diaplay mit Hintergrundbeleuchtung ein und aus: 0 = AUS, 1 = EIN |

### ARG_0XD5C1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TESTBILD | 0-n | - | char | - | TAB_TESTBILD_CID | - | - | - | 0 | - | Gibt Testbild unabhängig der Signale der HU aus. Kann auch ohne HU ausgegeben werden: Mögliche Werte: 0 = NORMALES_BILD, 1 = SCHWARZES_BILD, 2 = BLAUES_BILD,  3 = ROTES_BILD, 4 = GRUENES_BILD, 5 = NO_SIGNAL |

### TAB_TESTBILD_CID

| WERT | TEXT |
| --- | --- |
| 255 | Normales Bild |
| 0 | Schwarzes Bild |
| 4 | Blaues Bild |
| 2 | Rotes Bild |
| 3 | Grünes Bild |
| 1 | Weisses Bild |
| 5 | ADJUST |
| 6 | COLORBAR |
| 7 | GREYSCALE |
| 8 | CHECKERBOARD |
| 9 | PIXELONOFF |
| 10 | GREYLEVEL |
| 11 | RGBLEVEL |
| 12 | CROSS |
| 13 | CROSSTALK |
| 14 | SWITCHING |
| 15 | TEST |
