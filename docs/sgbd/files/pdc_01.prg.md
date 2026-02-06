# pdc_01.prg

## General

|  |  |
| --- | --- |
| File | pdc_01.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 31 |
| Origin | BMW EI-612 Patrick_Matters |
| Revision | 2.006 |
| Author | Valeo_Schalter_und_Sensoren_GmbH EI-612 Werner_Götte |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | PDC |  |  |
| ORIGIN | string | BMW EI-612 Patrick_Matters |  |  |
| REVISION | string | 2.006 |  |  |
| AUTHOR | string | Valeo_Schalter_und_Sensoren_GmbH EI-612 Werner_Götte |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.24 |  |  |
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
| 0x0000B4 | APAG Elektronik AG |
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
| 0x026400 | Energiesparmode aktiv | 1 |
| 0x02FF64 | DM_TEST_APPL | 0 |
| 0x803180 | CODING_EVENT_NOT_CODED | 0 |
| 0x803181 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x803182 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x803183 | CODING_EVENT_WRONG_VEHICLE | 0 |
| 0x803184 | CODING_EVENT_INVALID_DATA | 0 |
| 0x803190 | Interner Steuergerätefehler | 0 |
| 0x8031D2 | Unterspannung erkannt | 1 |
| 0x8031D3 | Überspannung erkannt | 1 |
| 0x803200 | Spannungsversorgung Ultraschallsensoren: Kurzschluss zwischen Plus und Minus | 0 |
| 0x803201 | Spannungsversorgung Ultraschallsensoren vorn: Kurzschluss zwischen Plus und Minus | 0 |
| 0x803202 | Spannungsversorgung Ultraschallsensoren hinten: Kurzschluss zwischen Plus und Minus | 0 |
| 0x803203 | Ultraschallsensor hinten Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803204 | Ultraschallsensor hinten Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803205 | Ultraschallsensor hinten Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803206 | Ultraschallsensor hinten Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x803207 | Ultraschallsensor hinten Seite links: Sensor antwortet nicht | 0 |
| 0x803208 | Ultraschallsensor hinten Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803209 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80320A | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x80320B | Ultraschallsensor hinten Außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80320C | Ultraschallsensor hinten Außen links: Sensor defekt (Receivezweig) | 0 |
| 0x80320D | Ultraschallsensor hinten Außen links: Sensor antwortet nicht | 0 |
| 0x80320E | Ultraschallsensor hinten Außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x80320F | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803210 | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803211 | Ultraschallsensor hinten Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803212 | Ultraschallsensor hinten Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x803213 | Ultraschallsensor hinten Mitte links: Sensor antwortet nicht | 0 |
| 0x803214 | Ultraschallsensor hinten Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803215 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803216 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803217 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803218 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803219 | Ultraschallsensor hinten Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80321A | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80321B | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80321C | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x80321D | Ultraschallsensor hinten Außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80321E | Ultraschallsensor hinten Außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80321F | Ultraschallsensor hinten Außen rechts: Sensor antwortet nicht | 0 |
| 0x803220 | Ultraschallsensor hinten Außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803221 | Ultraschallsensor hinten Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803222 | Ultraschallsensor hinten Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803223 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803224 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803225 | Ultraschallsensor hinten Seite rechts: Sensor antwortet nicht | 0 |
| 0x803226 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803227 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803228 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803229 | Ultraschallsensor vorn Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80322A | Ultraschallsensor vorn Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x80322B | Ultraschallsensor vorn Seite links: Sensor antwortet nicht | 0 |
| 0x80322C | Ultraschallsensor vorn Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x80322D | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80322E | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x80322F | Ultraschallsensor vorn Außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803230 | Ultraschallsensor vorn Außen links: Sensor defekt (Receivezweig) | 0 |
| 0x803231 | Ultraschallsensor vorn Außen links: Sensor antwortet nicht | 0 |
| 0x803232 | Ultraschallsensor vorn Außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803233 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803234 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803235 | Ultraschallsensor vorn Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803236 | Ultraschallsensor vorn Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x803237 | Ultraschallsensor vorn Mitte links: Sensor antwortet nicht | 0 |
| 0x803238 | Ultraschallsensor vorn Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803239 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80323A | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x80323B | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80323C | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80323D | Ultraschallsensor vorn Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80323E | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80323F | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803240 | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803241 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803242 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803243 | Ultraschallsensor vorn Außen rechts: Sensor antwortet nicht | 0 |
| 0x803244 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803245 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803246 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803247 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803248 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803249 | Ultraschallsensor vorn Seite rechts: Sensor antwortet nicht | 0 |
| 0x80324A | Ultraschallsensor vorn Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80325B | Ultraschallsensor vorn Zentral, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80325C | Ultraschallsensor vorn Zentral, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x80325D | Ultraschallsensor vorn Zentral: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80325E | Ultraschallsensor vorn Zentral: Sensor defekt (Receivezweig) | 0 |
| 0x80325F | Ultraschallsensor vorn Zentral: Sensor antwortet nicht | 0 |
| 0x803260 | Ultraschallsensor vorn Zentral: Sensor defekt (Verify-Fehler) | 0 |
| 0x803261 | Ultraschallsensor hinten Zentral, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803262 | Ultraschallsensor hinten Zentral, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x803263 | Ultraschallsensor hinten Zentral: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803264 | Ultraschallsensor hinten Zentral: Sensor defekt (Receivezweig) | 0 |
| 0x803265 | Ultraschallsensor hinten Zentral: Sensor antwortet nicht | 0 |
| 0x803266 | Ultraschallsensor hinten Zentral: Sensor defekt (Verify-Fehler) | 0 |
| 0x803271 | Akustische Abstandwarnung nicht möglich | 1 |
| 0x803281 | TOP VIEW nicht verfügbar | 1 |
| 0x803282 | REAR VIEW nicht verfügbar | 1 |
| 0x803283 | Parkassistent nicht verfügbar | 1 |
| 0x803294 | PDC aktiv ohne Aktivierung | 1 |
| 0x803295 | TOP VIEW aktiv ohne Aktivierung | 1 |
| 0x803296 | REAR VIEW aktiv ohne Aktivierung | 1 |
| 0x803297 | Parkassistent aktiv ohne Aktivierung | 1 |
| 0xE20468 | Body-CAN Control Module Bus OFF | 0 |
| 0xE20BFF | DM_TEST_COM | 0 |
| 0xE21400 | Botschaft (12Fh, Klemmen): Ausfall | 1 |
| 0xE21401 | Botschaft (30Ah, Bedienung Taster Parken): Ausfall | 1 |
| 0xE21402 | Botschaft (330h, Kilometerstand/Reichweite): Ausfall | 1 |
| 0xE21403 | Botschaft (2CAh, Außentemperatur): Ausfall | 1 |
| 0xE21404 | Botschaft (379h, Status Qualifier Top-View): Ausfall | 1 |
| 0xE21405 | Botschaft (37Ah, Status Qualifier Rear-View): Ausfall | 1 |
| 0xE21406 | Botschaft (378h, Status Parkassistent): Ausfall | 1 |
| 0xE21407 | Botschaft (3F9h, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xE21408 | Botschaft (3B0h, Status Gang Rückwärts): Ausfall | 1 |
| 0xE21409 | Botschaft (2BBh, Wegstrecke Fahrzeug): Ausfall | 1 |
| 0xE2140A | Botschaft (2E4h, Status Anhänger): Ausfall | 1 |
| 0xE2140B | Botschaft (1A1h, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE21500 | Botschaft (378h, Status Parkassistent): Alive-Zähler-Fehler | 1 |
| 0xE21501 | Botschaft (379h, Status Qualifier Top-View): Alive-Zähler-Fehler | 1 |
| 0xE21502 | Botschaft (37Ah, Status Qualifier Rear-View): Alive-Zähler-Fehler | 1 |
| 0xE21600 | Botschaft (378h, Status Parkassistent): Prüfsummenfehler | 1 |
| 0xE21601 | Botschaft (379h, Status Qualifier Top-View): Prüfsummenfehler | 1 |
| 0xE21602 | Botschaft (37Ah, Status Qualifier Rear-View): Prüfsummenfehler | 1 |
| 0xE21700 | Signal (1A1h) ungültig empfangen: Fahrzustand_Fahrzeug | 1 |
| 0xE21701 | Signal (3AEh) ungültig empfangen: Anfrage_Aktivierung_Funktion_Parken | 1 |
| 0xE21702 | Signal (330h) ungültig empfangen: Wegstrecke_Kilometer | 1 |
| 0xE21703 | Signal (2BBh) ungültig empfangen: Wegstrecke_Fahrzeug | 1 |
| 0xE21704 | Signal (30Ah) ungültig empfangen: Bedienung_Taster_Parken | 1 |
| 0xE21705 | Signal (378h) ungültig empfangen: Qualifier_Funktion_Parkassistent | 1 |
| 0xE21706 | Signal (37Ah) ungültig empfangen: Qualifier_Funktion_Rear-View | 1 |
| 0xE21707 | Signal (379h) ungültig empfangen: Qualifier_Funktion_Top-View | 1 |
| 0xE21708 | Signal (3B0h) ungültig empfangen: Status_Gang_Rückwärts | 1 |
| 0xE21709 | Signal (3F9h) ungültig empfangen: Status_Gangwahl_Antrieb | 1 |
| 0xE2170A | Signal (12Fh) ungültig empfangen: Status_Klemme | 1 |
| 0xE2170B | Signal (2E4h) ungültig empfangen: Status_Anhänger | 1 |
| 0xE2170C | Signal (2CAh) ungültig empfangen: Temperatur_Außen | 1 |
| 0xE2170D | Signal (1A1h) ungültig empfangen: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xE2170F | Signal (3A0h) ungültig empfangen: Status_Sperre_Fehlerspeicher_FZM | 1 |
| 0xE21710 | Signal (378h) ungültig empfangen: Alive_Status_Parkassistent | 1 |
| 0xE21711 | Signal (379h) ungültig empfangen: Alive_Status_Top-View | 1 |
| 0xE21712 | Signal (37Ah) ungültig empfangen: Alive_Status_Rear-View | 1 |
| 0xE21716 | Signal (3AEh) ungültig empfangen: Anzeige_Menu | 1 |
| 0xE21717 | Signal (38Ah) ungültig empfangen: Status_MMI-Funktion_PDC | 1 |
| 0xE21718 | Signal (2E4h) ungültig empfangen: Status_Position_AHV | 1 |
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
| 0x4100 | Aussentemperatur | °C | - | unsigned char | - | 0,5 | - | -40 |
| 0x4103 | Batteriespannung | V | - | unsigned char | - | - | 12,6 | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x643185 | DM_Queue_FULL | 0 |
| 0x643186 | DM_Queue_DELETED | 0 |
| 0x643187 | NVM_E_WRITE_FAILED | 0 |
| 0x643188 | NVM_E_READ_FAILED | 0 |
| 0x643189 | NVM_E_CONTROL_FAILED | 0 |
| 0x64318A | NVM_E_ERASE_FAILED | 0 |
| 0x64318B | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x64318C | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x64318D | NVM_E_READ_ALL_FAILED | 0 |
| 0x64318E | PIA_E_IO_ERROR | 0 |
| 0x6431D2 | Unterspannung erkannt | 1 |
| 0x6431D3 | Überspannung erkannt | 1 |
| 0x643200 | Spannungsversorgung Ultraschallsensoren: Kurzschluss zwischen Plus und Minus | 0 |
| 0x643201 | Spannungsversorgung Ultraschallsensoren vorn: Kurzschluss zwischen Plus und Minus | 0 |
| 0x643202 | Spannungsversorgung Ultraschallsensoren hinten: Kurzschluss zwischen Plus und Minus | 0 |
| 0x643203 | Ultraschallsensor hinten Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643204 | Ultraschallsensor hinten Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643205 | Ultraschallsensor hinten Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643206 | Ultraschallsensor hinten Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x643207 | Ultraschallsensor hinten Seite links: Sensor antwortet nicht | 0 |
| 0x643208 | Ultraschallsensor hinten Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x643209 | Ultraschallsensor hinten außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x64320A | Ultraschallsensor hinten außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x64320B | Ultraschallsensor hinten außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x64320C | Ultraschallsensor hinten außen links: Sensor defekt (Receivezweig) | 0 |
| 0x64320D | Ultraschallsensor hinten außen links: Sensor antwortet nicht | 0 |
| 0x64320E | Ultraschallsensor hinten außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x64320F | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643210 | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643211 | Ultraschallsensor hinten Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643212 | Ultraschallsensor hinten Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x643213 | Ultraschallsensor hinten Mitte links: Sensor antwortet nicht | 0 |
| 0x643214 | Ultraschallsensor hinten Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x643215 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643216 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643217 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643218 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x643219 | Ultraschallsensor hinten Mitte rechts: Sensor antwortet nicht | 0 |
| 0x64321A | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x64325B | Ultraschallsensor vorn Zentral, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x64325C | Ultraschallsensor vorn Zentral, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x64325D | Ultraschallsensor vorn Zentral: Sensor defekt (Ausschwingzeit) | 0 |
| 0x64325E | Ultraschallsensor vorn Zentral: Sensor defekt (Receivezweig) | 0 |
| 0x64325F | Ultraschallsensor vorn Zentral: Sensor antwortet nicht | 0 |
| 0x643260 | Ultraschallsensor vorn Zentral: Sensor defekt (Verify-Fehler) | 0 |
| 0x64321B | Ultraschallsensor hinten außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x64321C | Ultraschallsensor hinten außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x64321D | Ultraschallsensor hinten außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x64321E | Ultraschallsensor hinten außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x64321F | Ultraschallsensor hinten außen rechts: Sensor antwortet nicht | 0 |
| 0x643220 | Ultraschallsensor hinten außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x643221 | Ultraschallsensor hinten Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643222 | Ultraschallsensor hinten Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643223 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643224 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x643225 | Ultraschallsensor hinten Seite rechts: Sensor antwortet nicht | 0 |
| 0x643226 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x643227 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643228 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643229 | Ultraschallsensor vorn Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x64322A | Ultraschallsensor vorn Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x64322B | Ultraschallsensor vorn Seite links: Sensor antwortet nicht | 0 |
| 0x64322C | Ultraschallsensor vorn Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x64322D | Ultraschallsensor vorn außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x64322E | Ultraschallsensor vorn außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x64322F | Ultraschallsensor vorn außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643230 | Ultraschallsensor vorn außen links: Sensor defekt (Receivezweig) | 0 |
| 0x643231 | Ultraschallsensor vorn außen links: Sensor antwortet nicht | 0 |
| 0x643232 | Ultraschallsensor vorn außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x643233 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643234 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643235 | Ultraschallsensor vorn Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643236 | Ultraschallsensor vorn Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x643237 | Ultraschallsensor vorn Mitte links: Sensor antwortet nicht | 0 |
| 0x643238 | Ultraschallsensor vorn Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x643239 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x64323A | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x64323B | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x64323C | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x64323D | Ultraschallsensor vorn Mitte rechts: Sensor antwortet nicht | 0 |
| 0x64323E | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x643261 | Ultraschallsensor hinten Zentral, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643262 | Ultraschallsensor hinten Zentral, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643263 | Ultraschallsensor hinten Zentral: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643264 | Ultraschallsensor hinten Zentral: Sensor defekt (Receivezweig) | 0 |
| 0x643265 | Ultraschallsensor hinten Zentral: Sensor antwortet nicht | 0 |
| 0x643266 | Ultraschallsensor hinten Zentral: Sensor defekt (Verify-Fehler) | 0 |
| 0x64323F | Ultraschallsensor vorn außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643240 | Ultraschallsensor vorn außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643241 | Ultraschallsensor vorn außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643242 | Ultraschallsensor vorn außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x643243 | Ultraschallsensor vorn außen rechts: Sensor antwortet nicht | 0 |
| 0x643244 | Ultraschallsensor vorn außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x643245 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x643246 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung der Signalleitung oder Unterbrechung der Masse | 0 |
| 0x643247 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x643248 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x643249 | Ultraschallsensor vorn Seite rechts: Sensor antwortet nicht | 0 |
| 0x64324A | Ultraschallsensor vorn Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x643280 | PDC nicht verfügbar | 1 |
| 0x643281 | TOP VIEW nicht verfügbar | 1 |
| 0x643282 | REAR VIEW nicht verfügbar | 1 |
| 0x643283 | Parkassistent nicht verfügbar | 1 |
| 0x643294 | PDC aktiv ohne Aktivierung | 1 |
| 0x643295 | TOP VIEW aktiv ohne Aktivierung | 1 |
| 0x643296 | REAR VIEW aktiv ohne Aktivierung | 1 |
| 0x643297 | Parkassistent aktiv ohne Aktivierung | 1 |
| 0x643271 | Akustische Abstandwarnung nicht möglich | 1 |
| 0x64430C | Botschaft (328h, Relativzeit): Ausfall | 1 |
| 0x64430D | Botschaft (3A0h, Fahrzeugzustand): Ausfall | 1 |
| 0xFFFFFE | unbekannter Fehlerort | 0 |

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
| 0x4100 | Aussentemperatur | °C | - | unsigned char | - | 0,5 | - | -40 |
| 0x4103 | Batteriespannung | V | - | unsigned char | - | - | 12,6 | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PDC_HSR_ABSTAND_WERT | 0xD64F | STAT_PDC_HSR_ABSTAND_WERT | Gibt den berechneten Abstand Sensor hinten Seite rechts in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_PDC_TASTE_EIN | 0xD66E | STAT_BUS_IN_PDC_TASTE_EIN | Liefert das Signal der PDC-Taste, wie sie über BUS empfangen wird. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_VAL_ASZ_WERT | 0xD651 | STAT_PDC_VAL_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorn Außen links in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SYSTEM | 0xD676 | - | Aufruf aktiviert oder deaktiviert das PDC-System. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD676 | - |
| PDC_HSL_ABSTAND_WERT | 0xD64A | STAT_PDC_HSL_ABSTAND_WERT | Gibt den berechneten Abstand Sensor hinten Seite links in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_FUNKTIONSANZEIGE | 0xD640 | STAT_FUNKTIONSANZEIGE_PDC | Status der Funktionsanzeige im PDC | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_HZE_ABSTAND_WERT | 0xD65A | STAT_PDC_HZE_ABSTAND_WERT | Gibt den berechneten Abstand Sensor hinten Zentral in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_KONFIGURATION | 0xD66F | - | Liefert die (zuvor) codierte Konfiguration des Systems | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD66F |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| PDC_VZE_ASZ_WERT | 0xD67E | STAT_PDC_VZE_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorne Zentral in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Bus signal Aussentempertatur | °C | - | - | unsigned int | - | 1 | 2 | -40 | - | 22 | - | - |
| PDC_VSL_ABSTAND_WERT | 0xD644 | STAT_PDC_VSL_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorn Seite links in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_HML_ABSTAND_WERT | 0xD64C | STAT_PDC_HML_ABSTAND_WERT | Gibt den berechneten Abstand Sensor hinten Mitte links in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_HML_ASZ_WERT | 0xD658 | STAT_PDC_HML_ASZ_WERT | Gibt die Ausschwingzeit des Sensor hinten Mitte links in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_VZE_ABSTAND_WERT | 0xD65B | STAT_PDC_VZE_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorne Zentral in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_VAR_ASZ_WERT | 0xD653 | STAT_PDC_VAR_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorn Außen rechts in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| BUS_IN_RUECKWAERTSGANG | 0xD67B | STAT_BUS_IN_RUECKWAERTSGANG_EIN | Liefert den Status des Rückwärtsgang über Bus. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_VAR_ABSTAND_WERT | 0xD647 | STAT_PDC_VAR_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorn Außen rechts in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_HSR_ASZ_WERT | 0xD66B | STAT_PDC_HSR_ASZ_WERT | Gibt die Ausschwingzeit Sensor hinten Seite rechts in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_HZE_ASZ_WERT | 0xD67D | STAT_PDC_HZE_ASZ_WERT | Gibt die Ausschwingzeit Sensor hinten Zentral in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SENSORTEST | 0xD673 | - | Startet die Eigendiagnose der Sensoren, Ergebnisse werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD673 | - |
| PDC_HAL_ABSTAND_WERT | 0xD64B | STAT_PDC_HAL_ABSTAND_WERT | Gibt den berechneten Abstand Sensor hinten Außen links in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_WEGSTRECKE_WERT | 0xD67A | STAT_BUS_IN_WEGSTRECKE_WERT | Liefert die Wegstrecke, wie sie über BUS empfangen wird. | m | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_HMR_ABSTAND_WERT | 0xD64E | STAT_PDC_HMR_ABSTAND_WERT | Rückgabe des berechneten Abstand Sensor hinten mitte rechts in cm. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_STATUS_ROLLEN | 0xD679 | STAT_BUS_IN_STATUS_ROLLEN | Liefert den Status der Fahrzeugbewegung über Bus. | 0-n | - | - | unsigned char | TAB_PDC_ROLLEN | - | - | - | - | 22 | - | - |
| PDC_VMR_ASZ_WERT | 0xD654 | STAT_PDC_VMR_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorn Mitte rechts in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SPANNUNG_KLEMME_15_WERT | 0xDAD1 | STAT_SPANNUNG_KLEMME_15_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| BUS_IN_KILOMETERSTAND_WERT | 0xD670 | STAT_BUS_IN_KILOMETERSTAND_WERT | Liefert den Kilometerstand, wie sie über BUS empfangen wird. | km | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| PDC_VAL_ABSTAND_WERT | 0xD645 | STAT_PDC_VAL_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorn Außen links in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_HMR_ASZ_WERT | 0xD66A | STAT_PDC_HMR_ASZ_WERT | Gibt die Ausschwingzeit Sensor hinten Mitte rechts in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_VMR_ABSTAND_WERT | 0xD648 | STAT_PDC_VMR_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorn Mitte rechts in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_AKTIVIERUNGSIGNAL | 0xD388 | - | Liefert oder simuliert die Signale der Aktivierung  von PDC, TV, RV und PMA, wie sie über BUS empfangen wird. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD388 | RES_0xD388 |
| PDC_VSR_ASZ_WERT | 0xD655 | STAT_PDC_VSR_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorn Seite rechts in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| BUS_IN_ANHAENGER_VORHANDEN | 0xD66D | STAT_BUS_IN_ANHAENGER_VORHANDEN | Liefert den Status des Anhängers über Bus. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_STAT_SYSTEM | 0xD671 | STAT_PDC_SYSTEM | Liefert den Status des Systems | 0-n | - | - | unsigned char | TAB_PDC_STATUS | - | - | - | - | 22 | - | - |
| PDC_HSL_ASZ_WERT | 0xD656 | STAT_PDC_HSL_ASZ_WERT | Gibt die Ausschwingzeit Sensor hinten Seite links in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_HAL_ASZ_WERT | 0xD657 | STAT_PDC_HAL_ASZ_WERT | Gibt die Ausschwingzeit Sensor hinten Außen links in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_SENSORTEST | 0xD674 | STAT_PDC_SENSORTEST_NR | Gibt den Status des Sensortests aus. Das Ergebnis des Sensortests wird als Fehlerspeichereinträge umgesetzt. | 0-n | - | - | unsigned char | TAB_PDC_SENSORTEST | - | - | - | - | 22 | - | - |
| PDC_HAR_ASZ_WERT | 0xD659 | STAT_PDC_HAR_ASZ_WERT | Gibt die Ausschwingzeit Sensor hinten Aussen rechts in µs zurück | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_VML_ABSTAND_WERT | 0xD646 | STAT_PDC_VML_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorn Mitte links in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_HAR_ABSTAND_WERT | 0xD64D | STAT_PDC_HAR_ABSTAND_WERT | Gibt den berechneten Abstand Sensor hinten Außen rechts in cm in zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| PDC_VML_ASZ_WERT | 0xD652 | STAT_PDC_VML_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorn Mitte links in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| PDC_SIGNALWEGE_SENSOREN | 0xD67C | - | Gibt die Signalwege der Ultraschallsensoren der PDC aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD67C |
| PDC_VSL_ASZ_WERT | 0xD650 | STAT_PDC_VSL_ASZ_WERT | Gibt die Ausschwingzeit Sensor vorn Seite links in µs zurück. | µs | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Liefert das Signal der Geschwindigkeit, wie sie über BUS empfangen wird. | km/h | - | - | int | - | - | - | - | - | 22 | - | - |
| PDC_VSR_ABSTAND_WERT | 0xD649 | STAT_PDC_VSR_ABSTAND_WERT | Gibt den berechneten Abstand Sensor vorn Seite rechts in cm zurück. | cm | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| Interne_SW-Version | 0x4000 | - | Interne SW-Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000 |
| LAST_FUNCTION | 0x4001 | STAT_LAST_FUNCTION_WERT | Gibt die Last Function zurück | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |

### RES_0X4000

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTZAEHLER_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt den Hauptzaehler der internen Softwareversion zurück |
| STAT_NEBENZAEHLER_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt den Nebenzaehler der internen Softwareversion zurück |
| STAT_UNTERZAEHLER_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt den Unterzaehler der internen Softwareversion zurück |
| STAT_JAHR_WERT | - | - | - | HEX | - | int | - | - | - | - | - | Gibt das Jahr der internen Softwareversion zurück |
| STAT_MONAT_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt den Monat der internen Softwareversion zurück |
| STAT_TAG_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt den Tag der internen Softwareversion zurück |
| STAT_STUNDE_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt die Stunde der internen Softwareversion zurück |
| STAT_MINUTE_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt die Minute der internen Softwareversion zurück |
| STAT_SEKUNDE_WERT | - | - | - | HEX | - | char | - | - | - | - | - | Gibt die Sekunde der internen Softwareversion zurück |

### ARG_0XD676

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Schaltet das PDC-System an oder aus:  0 = AUS = PDC nicht aktiv,  1 = EIN = PDC aktiv |

### RES_0XD66F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PDC_ANZAHL_LAUTSPRECHER_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl der direkt am Steuergerät angeschlossenen Lautsprecher |
| STAT_PDC_ANZAHL_SENSOREN_VORN_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl der angeschlossenen PDC Sensoren vorn. |
| STAT_PDC_ANZAHL_SENSOREN_HINTEN_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl der angeschlossenen PDC Sensoren hinten. |

### ARG_0XD673

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Startet den Sensortest für die Ultraschallsensoren. 1 = Start |

### TAB_PDC_ROLLEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrzeug steht |
| 0x01 | Fahrzeug fährt vorwärts |
| 0x02 | Fahrzeug fährt rückwärts |
| 0x03 | Fahrzeug fährt |
| 0xFF | ungültiger Wert |

### RES_0XD388

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_PDC_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Signal für De-/ Aktivierung PDC über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_TV_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Signal für De-/ Aktivierung TV über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_RV_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Signal für De-/ Aktivierung Rückfahrkamera über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_PMA_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Signal für De-/ Aktivierung PMA über BUS:  0 = nicht aktiviert,  1 = aktiviert |

### ARG_0XD388

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSSIGNAL_PDC | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Gibt an, wie das Aktivierungssignal für PDC simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_TV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Gibt an, wie das Aktivierungssignal für TV simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_RV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Gibt an, wie das Aktivierungssignal für Rückfahrkamera simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_PMA | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Gibt an, wie das Aktivierungssignal für PMA simuliert  werden soll:  0 = AUS 1 = EIN |

### TAB_PDC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC nicht aktiv |
| 0x01 | PDC aktiv |
| 0x02 | PDC hat Fehler erkannt |

### TAB_PDC_SENSORTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht angefordert oder Test bereits abgeschlossen |
| 0x01 | Test läuft |

### RES_0XD67C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSL_HSL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HSL_HAL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HAL_HSL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HAL_HAL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HAL_HML_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HML_HAL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HML_HML_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HML_HMR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HMR_HML_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HMR_HMR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HMR_HAR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HAR_HMR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HAR_HAR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HAR_HSR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HSR_HAR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_HSR_HSR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VSL_VSL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VSL_VAL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VAL_VSL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VAL_VAL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VAL_VML_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VML_VAL_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VML_VML_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VML_VMR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VMR_VML_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VMR_VMR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VMR_VAR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VAR_VMR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VAR_VAR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VAR_VSR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VSR_VAR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
| STAT_VSR_VSR_WERT | cm | - | unsigned char | - | - | - | - | - | Signalwege der Wandler |
