# hkl_01.prg

## General

|  |  |
| --- | --- |
| File | hkl_01.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 42 |
| Origin | BMW EK-531 Wagenhuber |
| Revision | 3.005 |
| Author | Bosch AE_BE_ENG3 Demir |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Heckklappenlift |  |  |
| ORIGIN | string | BMW EK-531 Wagenhuber |  |  |
| REVISION | string | 3.005 |  |  |
| AUTHOR | string | Bosch AE_BE_ENG3 Demir |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.37 |  |  |
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

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)] 35up: LH Diagnosemaster V11 oder höher pre35up: LH Diagnosemaster V6 - V9

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

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
| ?19? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_IDENTIFIER |
| ?1A? | ERROR_ECU_RESPONSE_INCORRECT_RESET_TYPE |
| ?1B? | ERROR_ECU_RESPONSE_INCORRECT_SERIAL_NUMBER_FORMAT |
| ?1C? | ERROR_ECU_RESPONSE_INCORRECT_DTC_BY_STATUS_MASK |
| ?1D? | ERROR_ECU_RESPONSE_INCORRECT_DTC_STATUS_AVAILABILITY_MASK |
| ?1E? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_IDENTIFIER |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_VERIFY |
| ?61? | ERROR_ECU_RESPONSE_ZGW |
| ?62? | ERROR_ECU_RESPONSE_BACKUP |
| ?70? | ERROR_CALID_CVN_INCORRECT_LEN |
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
| 0x0000B5 | Nexteer Automotive World Headquarters |
| 0x0000B6 | Hans Widmaier |
| 0x0000B7 | SB LiMotive Germany GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
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
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0x04 | GWTB | Gateway-Tabelle |
| 0x0D | SWFK | BEGU: Detaillierung auf SWE-Ebene |
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
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
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

### ARG_0X4004

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Anlieferungs-Zustandes 0 oder 1 = SETZEN |

### ARG_0X4007

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHRICHTUNG_M1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | 0 : Freilauf; 1 : Drehrichtung Öffnen; 2 : Drehrichtung Schliessen; |
| PWM_M1 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM (0-100%) |
| DREHRICHTUNG_M2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | 0 : Freilauf; 1 : Drehrichtung Öffnen; 2 : Drehrichtung Schliessen; |
| PWM_M2 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM (0-100%) |

### ARG_0XD221

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Akustikgeber ansteuern: 0 = ausschalten 1 = einschalten |

### ARG_0XD23F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT | 0-n | - | int | - | TAB_HKL_KONTAKTE | 1.0 | 1.0 | 0.0 | - | - | 1 = HKK = Heckklappenkontakt;  2 = HKKU = Heckklappenkontakt unten (nur E70) |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0= Kontakt geöffnet; 1= Kontakt geschlossen |

### ARG_0XD247

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER | 0-n | - | int | - | TAB_HKL_TASTER | 1.0 | 1.0 | 0.0 | 0.0 | 4.0 | 1 = TOEHK = Taster Heckklappe aussen; 2 = TOEHKK = Taster Heckklappe innen; 3 = TOEHKI = Innenraumtaster Heckklappe; 4 = TOEHKCL = Innenraumtaster Centerlock |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0= Taster nicht gedrückt; 1= Taster gedrückt |

### ARG_0XD248

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | int | - | TAB_BEWEGUNG | 1.0 | 1.0 | 0.0 | - | - | Bewegungsrichtung:  0 = STOPP; 1 = OEFFNEN; 2 = SCHLIESSEN siehe Tabelle: TAB_BEWEGUNG |

### ARG_0XD24B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Anlieferungs-Zustandes 1 = SETZEN |

### ARG_0XD24D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE_WEITERFAHRT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Taste für Weiterfahrt Heckklappe: 0 = nicht gedrückt 1 = gedrückt |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026B00 | Energiesparmode aktiv | 0 |
| 0x02FF6B | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x801701 | Interner Steuergerätefehler | 0 |
| 0x801703 | Unterspannung erkannt | 1 |
| 0x801704 | Überspannung erkannt | 1 |
| 0x801706 | HKL Spielschutz aktiv | 1 |
| 0x801707 | HKL-Motor links: Kurzschluss nach Plus | 0 |
| 0x801708 | HKL-Motor links: Kurzschluss nach Minus oder KL30 Sicherung defekt | 0 |
| 0x801709 | HKL-Motor links: Unterbrechung | 0 |
| 0x801710 | HKL-Motor rechts: Kurzschluss nach Plus | 0 |
| 0x801711 | HKL-Motor rechts: Kurzschluss nach Minus oder KL30 Sicherung defekt | 0 |
| 0x801712 | HKL-Motor rechts: Unterbrechung | 0 |
| 0x801713 | HKL-Hallsensor 1 links: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x801714 | HKL-Hallsensor 1 links: Kurzschluss nach Plus | 0 |
| 0x801715 | HKL-Hallsensor 2 links: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x801716 | HKL-Hallsensor 2 links: Kurzschluss nach Plus | 0 |
| 0x801717 | HKL-Hallsensor 1 rechts: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x801718 | HKL-Hallsensor 1 rechts: Kurzschluss nach Plus | 0 |
| 0x801719 | HKL-Hallsensor 2 rechts: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x801720 | HKL-Hallsensor 2 rechts: Kurzschluss nach Plus | 0 |
| 0x801727 | HKL-Taste innen Beleuchtung: Kurzschluss nach Minus | 0 |
| 0x801728 | HKL-Taste innen Beleuchtung: Kurzschluss nach Plus | 0 |
| 0x801729 | HKL-Taste innen Beleuchtung: Unterbrechung | 0 |
| 0x801730 | HKL-Sensorversorgungsspannung Hallsensor | 0 |
| 0x801732 | Manueller Schliessvorgang nach Abschaltung HKL | 0 |
| 0x80175F | HKFM Buzzer: Kurzschluss nach Minus | 0 |
| 0x801760 | HKFM Buzzer: Kurzschluss nach Plus | 0 |
| 0x801771 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x801772 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x801773 | Codierung: Signatur für Daten ungültig | 0 |
| 0x801774 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x801775 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0xE3C40B | K-CAN Physikalischer Busfehler | 0 |
| 0xE3C414 | K-CAN Control Module Bus OFF | 0 |
| 0xE3CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE3D401 | Fahrzeuggeschwindigkeit ungültig | 1 |
| 0xE3D402 | Temperatur ausserhalb Betriebsbereich | 1 |
| 0xE3D403 | Klemmenstatus ungültig | 1 |
| 0xE3D404 | Innenraumtaster ungültig | 1 |
| 0xE3D405 | CAN-ID - Signal Taster Heckklappenlift aussen und innen (an und in Heckklappe) | 1 |
| 0xE3D406 | CAN-ID - Signal Taster Fernbedienung | 1 |
| 0xE3D407 | CAN-ID - Signal Softcloseautomatik | 1 |
| 0xE3D408 | CAN-ID - Signal Centerlocktaster ungültig | 1 |
| 0xE3D409 | Weiterfahr-Taste klemmt oder defekt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1705 | BATTERY_VOLTAGE | Volts | - | unsigned char | - | 1 | 10 | 0 |
| 0x1706 | RESERVED_BYTE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x1707 | CODING_CHECKSUM | Hex | - | unsigned char | - | 1 | 1 | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x6B9300 | NVM: EEPROM Falsche Konfigurations_ID | 0 |
| 0x6B9301 | NVM: EEPROM Löschen fehlerhaft | 0 |
| 0x6B9302 | NVM: EEPROM Kontrolle fehlerhaft | 0 |
| 0x6B9303 | NVM: EEPROM Lesen aller Blöcke fehlerhaft | 0 |
| 0x6B9304 | NVM: EEPROM Lesen fehlerhaft | 0 |
| 0x6B9305 | NVM: EEPROM Schreiben aller Blöcke fehlerhaft | 0 |
| 0x6B9306 | NVM: EEPROM Schreiben fehlerhaft | 0 |
| 0x6B9307 | PIA: IO Fehler | 0 |
| 0x6B9308 | Timeout Ansteuerung Heckklappe | 0 |
| 0x6B9309 | Unangeforderte Ansteuerung eines Motors (Relais-Kleber) | 0 |
| 0x6B930B | Hallsensor Auswerteschaltung defekt  | 0 |
| 0x6B9310 | Fehler Checksumme Codierdaten | 0 |
| 0x6B9311 | Fehler HKL-Daten | 0 |
| 0x6B9312 | SG-Reset erkannt | 0 |
| 0x6B9318 | Botschaft (328h, Relativzeit): Timeout Systemzeit | 1 |
| 0x6B9319 | DM: Queue deleted | 0 |
| 0x6B931A | DM: Queue full | 0 |
| 0x6B931B | Botschaft (3A0h, Fahrzeugzustand): Ausfall Fahrzeugzustand | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1705 | BATTERY_VOLTAGE | Volts | - | unsigned char | - | 1 | 10 | 0 |
| 0x1706 | RESERVED_BYTE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x1707 | CODING_CHECKSUM | Hex | - | unsigned char | - | 1 | 1 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4001

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MMI_WINKEL_GESPEICHERT_WERT | % | high | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des abgespeicherten MMI Winkels in Prozent |
| STAT_MMI_WINKEL_EMPFANGEN_WERT | % | high | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des über CAN empfangenen MMI Winkels in Prozent |

### RES_0X4002

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIALISIERUNG | 0-n | high | int | - | - | 1.0 | 1.0 | 0.0 | 0 = System nicht initialisiert; 1 = Schritt 1 der Initialisierung; 2 = Initialisierung erfolgreich; 3 = Fehler bei der Initialisierung; 4 = Schritt 2 der Initialisierung |
| STAT_UNKLARE_POSITION | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | 0 = Keine unklare Position; 1 = unklare Position |
| STAT_RESET | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | 0 = Normalfunktion; 1 = unerwarteter Reset erkannt |

### RES_0X4003

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über BUS in km/h |
| STAT_BUS_IN_AUSSENTEMPERATUR_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur über BUS in Grad Celsius |
| STAT_BUS_IN_TOEHK_EIN | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Taster Heckklappe aussen (TOEHK) über CAN-BUS: 0 = Taster TOEHK nicht Betaetigt 1 = Taster TOEHK Betaetigt |
| STAT_BUS_IN_TOEHKK_EIN | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Taster Heckklappe innen (TOEHKK) über CAN-BUS: 0 = Taster TOEHKK nicht Betaetigt 1 = Taster TOEHKK Betaetigt |
| STAT_BUS_IN_TOEHKI_EIN | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Taster Heckklappe im Innenraum (TOEHKI) über CAN-BUS: 0 = Taster TOEHKI nicht Betaetigt 1 = Taster TOEHKI Betaetigt |
| STAT_BUS_IN_FBD | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Taster Heccklappe Fernbediennung über CAN-BUS: 0 = Taster FBD nicht Betaetigt 1 = Taster FBD Betaetigt |
| STAT_BUS_IN_HKL_KONTAKT | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Hecklappenkontakt über CAN-BUS: 0 = Heckklappenkontakt offen, 1 = Heckklappenkontakt geschlossen |
| STAT_SW_HKL_KONTAKT_PLAUSIBILISIERT | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Hecklappenkontakt nach Plausibilisierung: 0 = Heckklappenkontakt offen, 1 = Heckklappenkontakt geschlossen |
| STAT_BUS_IN_ZV_HKL | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Hinweis: Dieses Signal wird zur Zeit nicht verwendet!  Zentralverriegelung Hecklappenlift über CAN-BUS: 0 = Heckklappe verriegelt, 1 = Heckklappe entrigelt |
| STAT_BUS_IN_KL50 | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Klemme 50 über CAN-BUS |
| STAT_BUS_IN_TOEHKCL_EIN | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Taster Zentralsichern im Kofferraum (TOEHKCL) über CAN-BUS: 0 = Taster TOEHKCL nicht Betaetigt, 1 = Taster TOEHKCL Betaetigt |
| STAT_BUS_IN_MSA_SIGNAL | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | MSA-Signal über CAN-Bus: 1= MSA-Start 0: Kein MSA-Start |

### RES_0X4006

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HKL_OUT_RELAY_1A | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal Relay_1A |
| STAT_HKL_OUT_RELAY_1B | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal Relay_1B |
| STAT_HKL_OUT_RELAY_2A | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal Relay_2A |
| STAT_HKL_OUT_RELAY_2B | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal Relay_2B |
| STAT_HKL_OUT_FREILAUF_MOT1 | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal fuer Freilauf Motor 1 |
| STAT_HKL_OUT_FREILAUF_MOT2 | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal fuer Freilauf Motor 2(im HKFM identisch zu Motor1) |
| STAT_HKL_OUT_PWM_MOT_LINKS_WERT | % | high | int | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert fuer Motor links in Prozent |
| STAT_HKL_OUT_PWM_MOT_RECHTS_WERT | % | high | int | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert fuer Motor rechts in Prozent |
| STAT_HKL_OUT_U_MFSE | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal fuer Einschalten Versorgungsspannung MFSE(nicht verwendet) |
| STAT_HKL_OUT_U_LAMPE | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal fuer Einschalten Versogungspannung Lampe(nicht verwendet in PL6) |
| STAT_HKL_OUT_U_HALL | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal fuer Einschalten Versogungspannung Hall |
| STAT_HKL_OUT_U_BAT | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Digital Signal fuer Einschalten Versogungspannung UBAT(EN_VBAT_SW im HKFM) |

### RES_0XD221

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_BUZZER | 0/1 | high | int | - | - | - | - | - | Akustikgeber (Buzzer) codiert und vorhanden: 0 = nicht vorhanden 1 = vorhanden |

### RES_0XD230

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_POS_M_LINKS_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ist-Position Links (Hallinkremente) |
| STAT_IST_POS_M_RECHTS_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ist-Position Rechts (Hallinkremente) |
| STAT_OEFF_WINKEL_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Oeffnungswinkel (in Prozent des max-Winkels) der Heckklappe |
| STAT_MAX_POS_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Liefert die max angelernte Position in Inkremente |

### RES_0XD236

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNG_MOTOR_HKL_LINKS | 0-n | - | int | - | TAB_BEWEGUNG | 1.0 | 1.0 | 0.0 | Bewegungsrichtung links:  0 = keine Bewegung, 1 = Öffnen, 2 = Schliessen siehe Tabelle: TAB_BEWEGUNG |
| STAT_BEWEGUNG_MOTOR_HKL_RECHTS | 0-n | - | int | - | TAB_BEWEGUNG | 1.0 | 1.0 | 0.0 | Bewegungsrichtung links: 0 = keine Bewegung, 1 = Öffnen, 2 = Schliessen |
| STAT_MOTORSTROM_HKL_LINKS_WERT | A | high | int | - | - | 213.0 | 1000.0 | 0.0 | Wert des linken Motorstroms in Ampere |
| STAT_MOTORSTROM_HKL_RECHTS_WERT | A | high | int | - | - | 213.0 | 1000.0 | 0.0 | Wert des rechten Motorstroms in Ampere |

### RES_0XD24D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_WEITERFAHRT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taste für Weiterfahrt Heckklappe: 0 = nicht gedrückt 1 = gedrückt |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HKL_BUZZER | 0xD221 | - | Akustikgeber (Buzzer) für Heckklappenlift | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD221 | RES_0xD221 |
| STATUS_IST_POSITION | 0xD230 | - | HKL-Ist-Position  (Hallinkremente) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD230 |
| POSITION_HKL | 0xD231 | STAT_POSITION_HKL_NR | Position in 0 - 8 Segmente | 0-n | - | - | int | TAB_HKL_POSITIONEN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ANLERNVORGANG_HKL_INIT | 0xD232 | STAT_ANLERNVORGANG_HKL_INIT | 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung | 0-n | - | - | int | TAB_INIT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| OEFFNUNGSWINKEL_MMI_HKL_WERT | 0xD233 | STAT_OEFFNUNGSWINKEL_MMI_HKL_WERT | Öffnungswinkel in % im Steuergerät gespeichert | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HKKU_GESCHLOSSEN | 0xD235 | STAT_HKKU_GESCHLOSSEN | Status des Heckklappen-Kontakts unten (bei zweiteiliger Klappe); 0= Kontakt offen, 1= Kontakt geschlossen | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BEWEGUNG_MOTOR_HKL | 0xD236 | - | Liefert Status der HKL-Motoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD236 |
| STEUERN_KONTAKT_HKL | 0xD23F | - | Simuliert die Signale der Kontakte für den Heckklappenlift. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD23F | - |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Signal Geschwindigkeit des Fahrzeugs über BUS | km/h | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_AUSSENTEMPERATUR_WERT | 0xD241 | STAT_BUS_IN_AUSSENTEMPERATUR_WERT | Signal Aussentemperatur über BUS | °C | - | low | int | - | 1.0 | 256.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHK_EIN | 0xD242 | STAT_BUS_IN_TOEHK_EIN | Signal Taster Heckklappe aussen über BUS, 0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHKK_EIN | 0xD243 | STAT_BUS_IN_TOEHKK_EIN | Signal Taster Heckklappe innen über BUS: 0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHKI_EIN | 0xD244 | STAT_BUS_IN_TOEHKI_EIN | Signal Taster Innenraum für Heckklappe über BUS,  0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_HKK_GESCHLOSSEN | 0xD245 | STAT_BUS_IN_HKK_GESCHLOSSEN | Ausgabe des Status des Heckklappenkontakt: 0 = offen, 1 = geschlossen | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHKCL_EIN | 0xD246 | STAT_BUS_IN_TOEHKCL_EIN | Signal Taster Centerlock für Heckklappe über BUS,  0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_TASTEN_HKL | 0xD247 | - | Simuliert die Signale der Tasten für den Heckklappenlift. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD247 | - |
| STEUERN_HECKKLAPPENANTRIEB | 0xD248 | - | Ansteuerung der Heckklappe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD248 | - |
| SET_ANLIEFERUNGSZUSTAND_HKL | 0xD24B | - | Setzen des Anlieferungs-Zustandes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD24B | - |
| TASTE_HKL_WEITERFAHRT | 0xD24D | - | Taste für Weiterfahrt der Öffnung von  Heckklappe bei F07 in Richtung offen. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD24D | RES_0xD24D |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Spannungswert am Steuergerät an Klemme 30B (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Status Klemme 50 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| DEV_STATUS_WINKEL_MMI | 0x4001 | - | Liefert den über CAN empfangenen und gespeicherten MMI-Winkel in Prozent | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001 |
| DEV_STATUS_SYST_HKL | 0x4002 | - | Liefert den Status des Anlernvorgangs des HKLs; Liefert den Status der unklaren Position; Liefert den Status ob unerwartetes Reset erkannt wurde | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002 |
| DEV_STATUS_BUS_MSG | 0x4003 | - | Liefert die Werte die über CAN-Bus empfangen wurden. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003 |
| DEV_STEUERN_ANLIEFERUNG_ZUSTAND | 0x4004 | - | Versetzt den HKL in den Anlieferzustand | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4004 | - |
| DEV_STATUS_HKL_OUTPUTS | 0x4006 | - | Liefert die Stati über HKL SG Ausgänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4006 |
| DEV_STEUERN_MOT | 0x4007 | - | Direkte Anteuerung der HKL-Motoren mittels vorgegebener Drehrichtung und PWM-Wert. Ansteuerung erfolgt bis Timeout(Codierbar je nach Richtung) und ohne Blockiererkennung. Anlernen durch diesen Job ist nicht möglich. Der Job wird unabhängig von Fehlerspeicher und Spielschutz ausgeführt. Wird der PWM-Wert auf 0 gesetzt, wird der Motor in Freilauf gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4007 | - |

### TAB_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### TAB_HKL_KONTAKTE

| WERT | TEXT |
| --- | --- |
| 0x01 | HKK |
| 0x02 | HKKU |

### TAB_HKL_POSITIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Positionssegment 0 |
| 0x01 | Positionssegment 1 |
| 0x02 | Positionssegment 2 |
| 0x03 | Positionssegment 3 |
| 0x04 | Positionssegment 4 |
| 0x05 | Positionssegment 5 |
| 0x06 | Positionssegment 6 |
| 0x07 | Positionssegment 7 |
| 0x08 | Positionssegment 8 |
| 0x09 | Positionssegment 9 |
| 0xFF | Nicht definiert |

### TAB_HKL_TASTER

| WERT | TEXT |
| --- | --- |
| 0x01 | TOEHK, Taster Heckklappe aussen |
| 0x02 | TOEHKK, Taster Heckklappe innen |
| 0x03 | TOEHKI, Innenraumtaster Heckklappe |
| 0x04 | TOEHKCL, Innenraumtaster Centerlock |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |
