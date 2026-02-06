# trsvc01.prg

## General

|  |  |
| --- | --- |
| File | trsvc01.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 154 |
| Origin | BMW EI-61 Armin Zeller |
| Revision | 5.601 |
| Author | CEL R&D Sivarajah.Sivaganan, CEL R&D Rolf.Huppert, BMW EI-612 M |
| ECU Comment | TRSVC [25] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Top_Rear_Side_View_Kamera |  |  |
| ORIGIN | string | BMW EI-61 Armin Zeller |  |  |
| REVISION | string | 5.601 |  |  |
| AUTHOR | string | CEL R&D Sivarajah.Sivaganan, CEL R&D Rolf.Huppert, BMW EI-612 M |  |  |
| COMMENT | string | TRSVC [25] |  |  |
| PACKAGE | string | 1.19 |  |  |
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

### RESET_CALIBRATION_VALUES

Reset calibration values d38e, CCQ, onl cal record UDS    : $2E $D3 $8E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | unsigned char | 0x00: TVL camera 0x01: TVR camera 0x02: RV camera |

### SET_CALIBRATION_DEBUG_OVERLAYS

Set development use only - enable / disable calibration overalys UDS    : $2E $41 $DB Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| OVRLY_ENABLE | char | 1 - Enable  calibration debug overlay 0 - Disable calibration debug overlay |

### STATUS_CALIBRATION_PERFORMED

Status of calibration performed or not UDS    : $22 ReadDataByCommonIdentifier $41 $59 Modus  : Default

_No arguments._

### SET_CALIBRATION_PERFORMED

Set of calibration performed UDS    : $2E WriteDataByCommonIdentifier $41 $59 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CALIB_PERFMED | unsigned char | set |

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
| 0x020600 | Energiesparmode aktiv | 1 |
| 0x02FF06 | Test-DTC Appl für Diagnosemaste | 1 |
| 0x800B80 | Top View Camera rechts: Dejustage erkannt | 0 |
| 0x800B81 | Top View Camera links: Dejustage erkannt | 0 |
| 0x800B82 | LVDS-Übertragung von Top View Camera rechts fehlerhaft | 0 |
| 0x800B83 | LVDS-Übertragung von Top View Camera links fehlerhaft | 0 |
| 0x800B84 | LVDS-Übertragung von Side View Camera rechts fehlerhaft | 0 |
| 0x800B85 | LVDS-Übertragung von Side View Camera links fehlerhaft | 0 |
| 0x800B86 | LVDS-Übertragung von Rear View Camera fehlerhaft | 0 |
| 0x800B8C | Top View Camera rechts: max. zulässiger Strom überschritten | 0 |
| 0x800B8D | Top View Camera links: max. zulässiger Strom überschritten | 0 |
| 0x800B8E | Side View Camera rechts: max. zulässiger Strom überschritten | 0 |
| 0x800B8F | Side View Camera links: max. zulässiger Strom überschritten | 0 |
| 0x800B90 | Rear View Camera: max. zulässiger Strom überschritten | 0 |
| 0x800B91 | Top View Camera links: Übertemperatur erkannt | 1 |
| 0x800B92 | Top View Camera rechts: Übertemperatur erkannt | 1 |
| 0x800B93 | Side View Camera links: Übertemperatur erkannt | 1 |
| 0x800B94 | Side View Camerarechts: Übertemperatur erkannt | 1 |
| 0x800B95 | Rear View Camera: Übertemperatur erkannt | 1 |
| 0x800B96 | Rear View Camera: Dejustage erkannt | 0 |
| 0x800B97 | Top View Camera rechts nicht kalibriert | 0 |
| 0x800B98 | Top View Camera links nicht kalibriert | 0 |
| 0x800B99 | Rear View Camera nicht kalibriert | 0 |
| 0x800B9A | Interner Steuergerätefehler: DSP SDRAM Defekt | 0 |
| 0x800B9B | Interner Steuergerätefehler: DSP Programmierfehler | 0 |
| 0x800B9C | Interner Steuergerätefehler: Flash Module und DSP passen nicht zusammen | 0 |
| 0x800B9D | Übertemperatur im Steuergerät erkannt | 1 |
| 0x800B9E | Überspannung erkannt | 1 |
| 0x800B9F | Unterspannung erkannt | 1 |
| 0x800BA1 | Top View Camera rechts: interne Kamerafehler | 0 |
| 0x800BA2 | Top View Camera links: interne Kamerafehler | 0 |
| 0x800BA3 | Side View Camera rechts: interne Kamerafehler | 0 |
| 0x800BA4 | Side View Camera links: interne Kamerafehler | 0 |
| 0x800BA5 | Rear View Camera: interne Kamerafehler | 0 |
| 0x800BA7 | Interner Steuergerätefehler: Interner Spannungsfehler | 0 |
| 0x800BA8 | Interner Steuergerätefehler: Host Controller RAM Defekt | 0 |
| 0x800BA9 | FBAS-Ausgang: Kurzschluss | 0 |
| 0x800BAA | FBAS-Ausgang: Unterbrechung oder nicht verbunden | 0 |
| 0x800BAF | Rear View Camera: Verschmutzung erkannt | 1 |
| 0x800BD1 | Codierung: Steuergerät nicht codiert | 0 |
| 0x800BD2 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x800BD3 | Codierung: Signatur für Daten ungültig | 0 |
| 0x800BD4 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x800BD5 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x800BD6 | Heizung Rear View Camera: Kurzschluss | 0 |
| 0x800BD7 | Heizung Rear View Camera: Unterbrechung | 0 |
| 0x800BD8 | TV_L Kamera nicht angeschlossen | 0 |
| 0x800BD9 | TV_R Kamera nicht angeschlossen | 0 |
| 0x800BDA | SV_L Kamera nicht angeschlossen | 0 |
| 0x800BDB | SV_R Kamera nicht angeschlossen | 0 |
| 0x800BDC | RV Kamera nicht angeschlossen | 0 |
| 0x800BDD | TV_L Kamera nicht angelernt | 0 |
| 0x800BDE | TV_R Kamera nicht angelernt | 0 |
| 0x800BDF | SV_L Kamera nicht angelernt | 0 |
| 0x800BE0 | SV_R Kamera nicht angelernt | 0 |
| 0x800BE1 | RV Kamera nicht angelernt | 0 |
| 0xCA840B | CAN-Fehler | 0 |
| 0xCA8414 | CAN: Control-Modul Bus OFF | 0 |
| 0xCA8BFF | DM_TEST_COM | 1 |
| 0xCA8C00 | LIN-Bus: Top View Camera rechts antwortet nicht | 0 |
| 0xCA8C01 | LIN-Bus: Top View Camer links antwortet nicht | 0 |
| 0xCA8C02 | LIN-Bus: Side View Camera rechts antwortet nicht | 0 |
| 0xCA8C03 | LIN-Bus: Side View Camera links antwortet nicht | 0 |
| 0xCA8C04 | LIN-Bus: Rear View Camera antwortet nicht | 0 |
| 0xCA9400 | K-CAN ID 328h (Relativzeit) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9401 | K-CAN ID 330h (Kilometerstand/Reichweite) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9402 | K-CAN ID 1A1h (Geschwindigkeit Fahrzeug) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9403 | K-CAN ID 3A0h (Fahrzeugzustand) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9404 | K-CAN ID 21Ah (Lampenzustand) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9405 | K-CAN ID 387h (Bedienung Taster SideView) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9406 | K-CAN ID 302h (IST Lenkwinkel K-CAN ) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9407 | K-CAN ID 12Fh (Klemmen) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9408 | K-CAN ID 2E4h (Status Anhänger) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9409 | K-CAN ID 314h (Status Fahrlicht) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA940A | K-CAN ID 3F9h (Daten Antriebsstrang 2) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA940C | K-CAN ID 2BBh (Wegstrecke Fahrzeug) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA940D | K-CAN ID 2FCh (ZV und Klappenzustand) Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9422 | K-CAN ID 36Dh Abstandsmeldung PDC Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9423 | K-CAN ID 2CAh Aussentemperatur Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9424 | K-CAN ID 281h Bordnetz Spannungswert Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9425 | K-CAN ID 306h (Fahrzeugneigung) Timeoutfehler | 1 |
| 0xCA9427 | K-CAN ID 3AFh Status System Parken Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9428 | K-CAN ID 377h Status Funktion PDC Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA9429 | K-CAN ID 3B0h Status Gang Rueckwaerts Timeoutfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCA942B | K-CAN ID 41Ah (Status Emblem) Timeoutfehler | 1 |
| 0xCAAC00 | K-CAN ID 328h (Sekundenzähler SysFkt) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC01 | K-CAN ID 330h (Kilometerstand/Reichweite) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC02 | K-CAN ID 1A1h (Geschwindigkeit Fahrzeug) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC03 | K-CAN ID 3A0h (Fahrzeugzustand) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC05 | K-CAN ID 387h (Bedienung Taster SideView) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC06 | K-CAN ID 302h (IST Lenkwinkel K-CAN ) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC07 | K-CAN ID 12Fh (Klemmen) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC08 | K-CAN ID 2E4h (Status Anhänger) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC09 | K-CAN ID 314h (Status Fahrlicht) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC0A | K-CAN ID 3F9h (Daten Antriebsstrang) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC0C | K-CAN ID 2BBh (Wegstrecke) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC0D | K-CAN ID 2FCh (ZV und Klappenzustand) Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC0E | K-CAN ID 36Dh Abstandsmelung PDC Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC0F | K-CAN ID 2CAh Aussentemperatu Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC10 | K-CAN ID 281h Bordnetz Spannungswert Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC11 | K-CAN ID 306h (Fahrzeugneigung) Defaultfehler | 1 |
| 0xCAAC12 | K-Can ID 3B0h Status Gang Rueckwaerts Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC13 | K-CAN ID 3AFh Status System Parken Defaultfehler, dies ist kein TRSVC ECU Fehler | 1 |
| 0xCAAC14 | K-CAN ID 377h (Status Funktion PDC) | 1 |
| 0xCAAC16 | K-CAN ID 41Ah (Status Emblem) Dafaultfehler | 1 |
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
| 0x1700 | KILOMETER | Hex | - | data[3] | - | - | - | - |
| 0x1701 | ABSOLUTE_TIME | Hex | - | data[4] | - | - | - | - |
| 0x4010 | BATTERY_VOLTAGE | Volt | - | unsigned char | - | 0.05 | - | 8 |
| 0x4011 | EVENT_SUBTYPE_4011 | 0-n | - | 0xFF | ENVC_4011 | - | - | - |
| 0x4012 | EVENT_SUBTYPE_4012 | 0-n | - | 0xFF | ENVC_4012 | - | - | - |
| 0x4013 | EVENT_SUBTYPE_4013 | 0-n | - | 0xFF | ENVC_4013 | - | - | - |
| 0x4014 | EVENT_SUBTYPE_4014 | 0-n | - | 0xFF | ENVC_4014 | - | - | - |
| 0x4015 | EVENT_SUBTYPE_4015 | 0-n | - | 0xFF | ENVC_4015 | - | - | - |
| 0x4016 | EVENT_SUBTYPE_4016 | 0-n | - | 0xFF | ENVC_4016 | - | - | - |
| 0x4017 | CAM_CALIBRATION | 0-n | - | 0xFF | ENVC_4017 | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x060002 | SW-Fehler DSP | 0 |
| 0x060003 | Bild eingefroren | 0 |
| 0x060004 | Keine Seriennummer TV_L CAM | 0 |
| 0x060005 | Keine Seriennummer TV_R CAM | 0 |
| 0x060006 | Keine Seriennummer SV_L CAM | 0 |
| 0x060007 | Keine Seriennummer SV_R CAM | 0 |
| 0x060008 | Keine Seriennummer RV CAM | 0 |
| 0x060013 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x060014 | NVM_E_WRITE_FAILED | 0 |
| 0x060015 | NVM_E_READ_FAILED | 0 |
| 0x060016 | NVM_E_CONTROL_FAILED | 0 |
| 0x060017 | NVM_E_ERASE_FAILED | 0 |
| 0x060018 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x060019 | NVM_E_READ_ALL_FAILED | 0 |
| 0x06001A | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x06001B | PIA_E_IO_ERROR | 0 |
| 0x06001C | DM_Queue_FULL | 0 |
| 0x06001D | DM_Queue_DELETED | 0 |
| 0x060000 | Interner Spannungsfehler | 0 |
| 0x800bb1 | DEM_EVENT_HOST_SW_ERROR | 0 |
| 0x800bb2 | DEM_EVENT_DSP_SW_ERROR | 0 |
| 0x800bb3 | DEM_EVENT_DSP_PICTURE_FREEZE | 0 |
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
| 0x4010 | BATTERY_VOLTAGE | Hex | - | unsigned char | - | 0.05 | - | 8 |
| 0x4011 | EVENT_SUBTYPE_4011 | 0-n | - | 0xFF | ENVC_4011 | - | - | - |
| 0x4012 | EVENT_SUBTYPE_4012 | 0-n | - | 0xFF | ENVC_4012 | - | - | - |
| 0x4013 | EVENT_SUBTYPE_4013 | 0-n | - | 0xFF | ENVC_4013 | - | - | - |
| 0x4014 | EVENT_SUBTYPE_4014 | 0-n | - | 0xFF | ENVC_4014 | - | - | - |
| 0x4015 | EVENT_SUBTYPE_4015 | 0-n | - | 0xFF | ENVC_4015 | - | - | - |
| 0x4016 | EVENT_SUBTYPE_4016 | 0-n | - | 0xFF | ENVC_4016 | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Auslesen der im CAS über Bus versendeten Nachlaufzeit der Klemme 15N. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument NACHLAUFZEIT_KLEMME_15N. - Beim CAS-Steuergerät (Sender) wird der Wert des internen Timers im CAS ausgegeben und nicht der Wert der als CAN-Botschaft qualifiziert gesendet wird. | s | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| ONLINE_KALIBRIERUNG_QUALITAET | 0xD3CE | - | Qualität der Onlinekalibrierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3CE |
| ONLINE_KALIBRIER_STATUS | 0xD3CC | - | Ausgabe Kalibrierstatus Topview rechts und links, Rückfahrkamera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3CC |
| WINKELVERDREHUNG_RV_KAM | 0xD3B6 | - | Ausgabe der Kalibrierdaten für die  Verdrehung der Rückfahrkameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3B6 |
| ABWEICHUNG_RV_KAM | 0xD3B5 | - | Ausgabe der Abweichung von der virtuellen  Kameraposition zur rellen Kameraposition nach der  Kalibrierung der Rückfahrkamera. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3B5 |
| TESTBILD_KAMERA | 0xD3B4 | - | Startet die Testbildausgabe in den Kameras. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B4 | - |
| TRVC_KALIB_VERDREHUNG_SERVICE | 0xD3B3 | - | Startet die Kalibrierung der TopView- und Rückfahrkameras  mit Hilfe der Software im Service. Es wird solange das Referenzbild angezeigt,  bis Argument REFERENZBILD wieder auf 0 oder 2 geht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B3 | - |
| TRVC_KALIB_ABWEICHUNG_SERVICE | 0xD3B2 | - | Startet die Kalibrierung der TopView- und  RearView-Kameras mit Hilfe der Software im Service. Es wird solange das Referenzbild angezeigt,  bis Argument REFERENZBILD wieder auf 0 oder 2 geht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B2 | - |
| EMBLEMCAMERA | 0xD3B0 | - | Steuerung Emblemkamera /  Auslesen aktuellen Zustand | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3B0 | RES_0xD3B0 |
| AUTOADRESSIERUNG_KAMERAS | 0xD3A1 | - | Ausgabe Status Autoadressierung der Kameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3A1 |
| HEIZUNG_RFK_KAMERA | 0xD3A0 | - | Ausgabe des Status der Heizung an der Rückfahrkamera oder Ansteuerung des Ausgangs. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3A0 | RES_0xD3A0 |
| STROMAUFNAHME_RV_KAM | 0xD39E | STAT_STROM_KAM_RV_WERT | Ausgabe der Stromaufnahme der Rückfahrkamera in mA. | mA | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_STATUS_AUSSENSPIEGEL | 0xD395 | - | Status der Außenspiegel über BUS. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD395 |
| BUS_IN_AKTIVIERUNGSIGNAL_TRV | 0xD392 | - | Liefert oder simuliert die Signale der Aktivierung  von TopView, RearView, wie sie über  BUS empfangen wird. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD392 | RES_0xD392 |
| STEUERN_KALIB_KAM_RESET | 0xD38E | - | RESET der Kamera-Kalibrierung in den Anlieferzustand. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD38E | - |
| BUS_IN_STATUS_TUEREN | 0xD383 | - | Status der Türen vorn über BUS. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD383 |
| STROMAUFNAHME_TSV_KAM | 0xD380 | - | Ausgabe der Stromaufnahme der Top-SideView-Kameras in mA. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD380 |
| AUSSTATTUNG_TRSVC | 0xD37F | - | Rückgabe des Verbaus der Top-/ Side-/ und RearViewkameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37F |
| BUS_IN_TASTE_SV_EIN | 0xD37D | - | Status/Steuern des Signals des Tasters für die SideView-Kamera, das über den Bus empfangen wird. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD37D | RES_0xD37D |
| BUS_IN_STATUS_HECKKLAPPE | 0xD37C | STAT_BUS_IN_STATUS_HECKKLAPPE | Status der Heckklappe über BUS. | 0-n | - | - | int | TAB_BUS_STATUS_HECKKLAPPE | - | - | - | - | 22 | - | - |
| ABWEICHUNG_TV_KAM_RECHTS | 0xD37B | - | Ausgabe der Abweichung von der virtuellen  Kameraposition zur rellen Kameraposition nach der  Kalibrierung der Kamera. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37B |
| ABWEICHUNG_TV_KAM_LINKS | 0xD37A | - | Ausgabe der Abweichung von der virtuellen  Kameraposition zur rellen Kameraposition nach der  Kalibrierung der Kamera. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37A |
| WINKELVERDREHUNG_TV_KAM_LINKS | 0xD379 | - | Ausgabe der Kalibrierdaten für die Verdrehung der Kameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD379 |
| WINKELVERDREHUNG_TV_KAM_RECHTS | 0xD378 | - | Ausgabe der Kalibrierdaten für die Verdrehung der Kameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD378 |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Liefert das Signal der Geschwindigkeit, wie sie über BUS empfangen wird. | km/h | - | - | int | - | - | - | - | - | 22 | - | - |
| STEUERN_AUTOADR_KAMERAS | 0xA302 | - | Startet den Anlernvorgang für die Kameras im Steuergerät und Zuweisung der LIN-Adressen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA302 |
| STEUERN_TESTBILD_VIDEOAUSGABE | 0xA301 | - | Ansteuerung der Testbilder der Videoausgabe aus  verschiedenen Quellen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA301 | - |
| AUTOKALIBRIERUNG_TRVC | 0xA300 | - | Startet die automatische Kalibrierung der TopView- und  Rückfahrkamera und Ausgabe des Status der Kalibrierung. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA300 | RES_0xA300 |
| TEST_VIDEOAUSGANG | 0xA01B | - | Steuert und bewertet den Test der Videoeingänge. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01B | RES_0xA01B |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A | - |
| _RID_CAMERA_SOFTWARE_UPDATE | 0xF027 | - | Startet das Software update fuer die angeschlossenen und ausgewaehlten Kameras. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF027 | RES_0xF027 |
| _RID_WRITE_CAF_DEFAULT_CONTENTS | 0xF026 | - | Stellt die CAF Defaultwerte wieder her bei der Aufrufoption 11 22 33 44 | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF026 | - |
| _RID_WRITE_DEFAULT_EE_CONTENTS | 0xF025 | - | Beschreibt das EEPROM mit Default Werten bei der Aufrufoption 11 22 33 44 | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF025 | - |
| _RID_LIN_READ_CAMERA_ADC | 0xF01E | - | Abfrage der ADC Werte einer Kamera,            Startoption: Kamera-id                      Results:           Byte 1: Kamera ID           Byte 2: Status           Byte 3: Batteriespannung           Byte 4: Spannung am Thermistor            Byte 5: Spannung am Imager | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF01E | RES_0xF01E |
| _ENABLE_FULL_SCREEN_SV_LEFT_VIEW_MODE | 0xF019 | - | Aktiviert den Vollbildmodus fuer die Kamera Sideview links. Parameter Overlayunterdrueckung (1 Byte) | - | - | - | - | - | - | - | - | - | - | ARG_0xF019 | - |
| _ENABLE_FULL_SCREEN_SV_RIGHT_VIEW_MODE | 0xF018 | - | Aktiviert den Vollbildmodus fuer die Kamera Sideview rechts. Parameter Overlayunterdrueckung (1 Byte) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF018 | - |
| _CAMERA_POWER | 0xF012 | - | Erlaubt das Zu- und Abschalten der Kameraversorgungsspannung Byte 1: 0x01 = Kamera 1 (J7 RV) 0x02 = Kamera 2 (J3 TVL) 0x04 = Kamera 3 (J4 SVL) 0x08 = Kamera 4 (J5 TVR) 0x10 = Kamera 5 (J6 SVR) Byte 2: Maskierbyte (wie oben) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF012 | - |
| _CALIBRATION_FOR_BMW_ASSEMBLY | 0xF00C | - | Aktiviert die Kamerakalibrierung in der BMW Fertigung mit folgenden Aufrufparametern:           Byte 1: Kamera   01: Topview Rechts               02: Tpview Links                         Byte 2: Kalibrieroption  00: Display nach Kalibriervorgang beibehalten               01: Display nach Kalibriervorgang abschalten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00C | RES_0xF00C |
| _ENABLE_FULL_SCREEN_TV_LEFT_VIEW_MODE_(FISHEYE_CORRECTION_ACTIVE) | 0xF00B | - | Aktiviert die Vollbild Ansicht Topview Kamera rechts mit aktiver Fischaugen Korrektur. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00B | - |
| _ENABLE_FULL_SCREEN_TV_RIGHT_VIEW_MODE_(FISHEYE_CORRECTION_ACTIVE) | 0xF00A | - | Aktiviert die Vollbild Ansicht Topview Kamera links mit aktiver Fischaugen Korrektur. | - | - | - | - | - | - | - | - | - | - | ARG_0xF00A | - |
| _ENABLE_FULL_SCREEN_REAR_VIEW_MODE | 0xF009 | - | Aktiviert die Vollbild Ansicht Rearview Kamera. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _ENABLE_SIDE_VIEW_MODE | 0xF008 | - | Aktiviert die gemischte (beide Kameras) Sideview Ansicht. | - | - | - | - | - | - | - | - | - | - | - | - |
| _ENABLE_TOP_VIEW_MODE | 0xF007 | - | Aktiviert die gemischte (beide Kameras) Topview Ansicht. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _OUTPUT_VIDEO_TEST_PATTERN | 0xF005 | - | Aktiviert die Ausgabe von Video Testmustern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF005 | - |
| _WRITE_CAMERA_DATA(EEPROM) | 0xF003 | - | Beschreibt das EEPROM einer Kamera | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003 | - |
| _READ_CAMERA_DATA(EEPROM) | 0xF002 | - | Liest das EEPROM einer Kamera | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002 | RES_0xF002 |
| _WRITE_CAMERA_REGISTER | 0xF001 | - | Beschreibt die I2C Register einer Kamera | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001 | - |
| _READ_CAMERA_REGISTER | 0xF000 | - | Liest die I2C Register einer Kamera | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000 | RES_0xF000 |
| _RV_HEATING_EXTENDED_STATUS | 0x41A5 | STAT_RV_HEATING_EXTENDED_STATUS_WERT | Extended RV Heating Status | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| _ONLINE_CALLIB_STORAGE_INHIBIT | 0x41A4 | - | Online calibration result storage inhibit parameter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x41A4 | RES_0x41A4 |
| _TV_INHIBIT_FLAG | 0x41A3 | - | Kotrollparameter zur De-/Aktivierung der TV Funktionalitaet. Achtung: Wird erst nach dem naechsten Klemmenwechsel/Reset vollstaendig aktiv. Funktion wird zwar unterbunden aber die CAN Nachrichten werden nicht richtig aktualisiert. 1 -> TV deaktiviert, 0 -> TV aktiv. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x41A3 | RES_0x41A3 |
| _REARVIEW_TEMPORAL_FILTERING | 0x41A2 | - | Kotrollparameter Rearview Filterung fuer Bewegungserkennung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x41A2 | RES_0x41A2 |
| _SIDEVIEW_TEMPORAL_FILTERING | 0x41A1 | - | Kotrollparameter Sideview Filterung fuer Bewegungserkennung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x41A1 | RES_0x41A1 |
| _TOPVIEW_TEMPORAL_FILTERING | 0x41A0 | - | Kotrollparameter Topview Filterung fuer Bewegungserkennung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x41A0 | RES_0x41A0 |
| _IDLE_MODE_VIDEO_TEST_INDEX | 0x419F | - | Kotrollparameter fuer Video Tests bei inaktiver Bildausgabe (z.B. Schmutzerkennung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x419F |
| _UVIEW_AKTIV_PARAMETER | 0x419E | - | Schreribt und liest den Parameter UVIEW, mit dem TV im TV oder im UVIEW Mode parametriert wird | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x419E | RES_0x419E |
| _TOPVIEW_VEHICLE_FEATURE_POSITION | 0x419D | - | Liest und schreibt den Status der Aktivierung der Vehicle Feature Overlays (Positionsmarker) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x419D | RES_0x419D |
| _ONLINE_CALIBRATION_CONTROL | 0x4198 | - | Gibt globale Kontrollparameter zur Online Kalibrierung aus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4198 | RES_0x4198 |
| _OBJECT_DETECTION_PARAMETERS | 0x4197 | - | Gibt Parameter zur Objekterkennung Online Kalibrierung aus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4197 | RES_0x4197 |
| _OBJECT_DETECTION_THRESHOLDS | 0x4196 | STAT_OBJECT_DETECTION_THRESHOLDS_WERT | Gibt Schwellwerte zur Objekterkennung Online Kalibrierung aus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4196 | RES_0x4196 |
| _FRAMERATE_RED_SLAVE_READ | 0x4191 | - | Liest die Slave Response Frames der Framrate Reduktions Architektur. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4191 |
| _FRAMERATE_RED_MASTER_WRITE | 0x4190 | - | Beschreibt den Master Frame der Framerate Reduktions Architektur. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4190 | - |
| _FRAMERATE_REDUCTION_ENABLE | 0x4189 | - | Schreibt und liest den Parameter zur Framerate Reduktion in dunkler Umgebung (00=aus, 11=ein, 01=halbautomatische Reduzierung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4189 | RES_0x4189 |
| _VIDEO_OUTPUT_IDLE_ENABLE | 0x4184 | STAT_VIDEO_OUTPUT_IDLE_ENABLE_WERT | Freischaltung des Videoausgangs im IDLE Mode | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| _SERVICE_CAL_PRESENTATION_STYLE | 0x417E | STAT_SERVICE_CAL_PRESENTATION_STYLE_WERT | Darstellungsparameter der Service Kalibrierung | - | - | - | data[6] | - | - | - | - | - | 22 | - | - |
| _BMW_RV_ASSEMBLY_CALIBRATION_SOLVER_PARAMETERS | 0x4176 | STAT_BMW_RV_ASSEMBLY_CALIBRATION_SOLVER_PARAMETERS_WERT | Kalibrierparameter Rear View Kamera (Fertigung) | - | - | - | data[47] | - | - | - | - | - | 22 | - | - |
| _CALIBRATION_TARGET_POSITION_RV | 0x4171 | STAT_CALIBRATION_TARGET_POSITION_RV_WERT | Zielposition der Kamera Rear View | - | - | - | data[12] | - | - | - | - | - | 22 | - | - |
| _CALIBRATION_TARGET_POSITION_TVL | 0x4170 | STAT_CALIBRATION_TARGET_POSITION_TVL_WERT | Zielposition der Kamera Topview links | - | - | - | data[12] | - | - | - | - | - | 22 | - | - |
| _CALIBRATION_TARGET_POSITION_TVR | 0x4169 | STAT_CALIBRATION_TARGET_POSITION_TVR_WERT | Zielposition der Kamera Topview rechts | - | - | - | data[12] | - | - | - | - | - | 22 | - | - |
| _BMW_ASSEMBLY_CALIBRATION_FULL_SCREEN_REAR_GRID_LAYOUT | 0x4168 | STAT_BMW_ASSEMBLY_CALIBRATION_FULL_SCREEN_REAR_GRID_LAYOUT_WERT | Beschreibung des Kalibriergitters Rearview Kamera Vollbildmodus | - | - | - | data[10] | - | - | - | - | - | 22 | - | - |
| _VIDEO_FREEZE_WATCHDOG_STATUS | 0x4167 | STAT_VIDEO_FREEZE_WATCHDOG_STATUS_WERT | Liefert den aktuellen Status des Video Freeze Watchdogs | - | - | - | data[16] | - | - | - | - | - | 22 | - | - |
| _CAMERA_POSITION_CELCALIB | 0x4165 | - | Lesen / Steuern Overlayparameter TV/SV/RV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4165 | RES_0x4165 |
| _CAMERA_POSITION_REARVIEW | 0x4162 | STAT_CAMERA_POSITION_REARVIEW_WERT | Relative Position Kamera Rearview, folgende Daten werden benutzt  int16  rot__x_deg_64ths  int16  rot_z1_deg_64ths  int16  rot_z2_deg_64ths  int16  pointx_mm  int16  pointy_mm  int16  pointz_mm | - | - | - | data[12] | - | - | - | - | - | 22 | - | - |
| _CAMERA_POSITION_TOPVIEW_LEFT | 0x4161 | STAT_CAMERA_POSITION_TOPVIEW_LEFT_WERT | Relative Position Kamera Topview Links, folgende Daten werden benutzt  int16  rot__x_deg_64ths  int16  rot_z1_deg_64ths  int16  rot_z2_deg_64ths  int16  pointx_mm  int16  pointy_mm  int16  pointz_mm | - | - | - | data[12] | - | - | - | - | - | 22 | - | - |
| _CAMERA_POSITION_TOPVIEW_RIGHT | 0x4160 | STAT_CAMERA_POSITION_TOPVIEW_RIGHT_WERT | Relative Position Kamera Topview Rechts, folgende Daten werden benutzt  int16  rot__x_deg_64ths  int16  rot_z1_deg_64ths  int16  rot_z2_deg_64ths  int16  pointx_mm  int16  pointy_mm  int16  pointz_mm | - | - | - | data[12] | - | - | - | - | - | 22 | - | - |
| _CALIBRATION_PERFORMED_STATUS | 0x4159 | STAT_CALIBRATION_PERFORMED_STATUS_WERT | Ausgabe der Kalibrierstati Topview rechts/links gemaess folgender Bitmaske  0x01 = Top view links. 0x02 = Top view rechts. 0x10 = Rear view. | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| _CURRENT_USER_CONTRAST | 0x4145 | STAT_CURRENT_USER_CONTRAST_WERT | Aktuelle Kontrast Einstellungen TV, SV und RV. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| _CURRENT_USER_BRIGHTNESS | 0x4144 | STAT_CURRENT_USER_BRIGHTNESS_WERT | Aktuelle Helligkeits Einstellungen TV, SV und RV. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| _LIN_VSYNC | 0x4140 | STAT_LIN_VSYNC_WERT | LIN Vsync. Byte 1: 0x01 LIN Vsync | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| _CEL_SERIAL_NUMBER | 0x4133 | STAT_CEL_SERIAL_NUMBER_WERT | CEL Seriennummer | - | - | - | data[16] | - | - | - | - | - | 22 | - | - |
| _FULL_SCREEN_REAR_FISHEYE_FILTER_PARAMS | 0x412B | STAT_FULL_SCREEN_TVR_FISHEYE_FILTER_PARAMS_WERT | Filterparameter Fischauge TV_R Kamera Fullscreen Modus | - | - | - | data[20] | - | - | - | - | - | 22 | - | - |
| _TV_REAR_FISHEYE_FILTER_PARAMS | 0x412A | STAT_TV_REAR_FISHEYE_FILTER_PARAMS_WERT | Filterparameter Fischauge RV Kamera | - | - | - | data[20] | - | - | - | - | - | 22 | - | - |
| _TV_LEFT_FISHEYE_FILTER_PARAMS | 0x4129 | STAT_TV_LEFT_FISHEYE_FILTER_PARAMS_WERT | Filterparameter Fischauge TV_L Kamera | - | - | - | data[20] | - | - | - | - | - | 22 | - | - |
| _TV_RIGHT_FISHEYE_FILTER_PARAMS | 0x4128 | STAT_TV_RIGHT_FISHEYE_FILTER_PARAMS_WERT | Filterparameter Fischauge TV_R Kamera | - | - | - | data[20] | - | - | - | - | - | 22 | - | - |
| _REAR_CAMERA_CALIBRATION_DATA | 0x4118 | STAT_REAR_CAMERA_CALIBRATION_DATA_WERT | Kalibrierdaten RV Kamera | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| _TV_LEFT_CAMERA_CALIBRATION_DATA | 0x4117 | STAT_TV_LEFT_CAMERA_CALIBRATION_DATA_WERT | Kalibrierdaten TV_L Kamera | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| _TV_RIGHT_CAMERA_CALIBRATION_DATA | 0x4116 | STAT_TV_RIGHT_CAMERA_CALIBRATION_DATA_WERT | Kalibrierdaten TV_R Kamera | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| _REAR_CAMERA_STATUS | 0x4110 | STAT_REAR_CAMERA_STATUS_WERT | Kamera Status RV Kamera | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| _SV_LEFT_CAMERA_STATUS | 0x410F | STAT_SV_LEFT_CAMERA_STATUS_WERT | Kamera Status SV_L Kamera | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| _SV_RIGHT_CAMERA_STATUS | 0x410E | STAT_SV_RIGHT_CAMERA_STATUS_WERT | Kamera Status SV_R Kamera | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| _TV_LEFT_CAMERA_STATUS | 0x410D | STAT_TV_LEFT_CAMERA_STATUS_WERT | Kamera Status TV_L Kamera | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| _TV_RIGHT_CAMERA_STATUS | 0x410C | STAT_TV_RIGHT_CAMERA_STATUS_WERT | Kamera Status TV_R Kamera | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| _REAR_CAMERA_SERIAL_NUMBER | 0x410B | STAT_REAR_CAMERA_SERIAL_NUMBER_WERT | Im Host gecachte Seriennummer Kamera RV | - | - | - | data[14] | - | - | - | - | - | 22 | - | - |
| _SV_LEFT_CAMERA_SERIAL_NUMBER | 0x410A | STAT_SV_LEFT_CAMERA_SERIAL_NUMBER_WERT | Im Host gecachte Seriennummer Kamera SV_L | - | - | - | data[14] | - | - | - | - | - | 22 | - | - |
| _SV_RIGHT_CAMERA_SERIAL_NUMBER | 0x4109 | STAT_SV_RIGHT_CAMERA_SERIAL_NUMBER_WERT | Im Host gecachte Seriennummer Kamera SV_R | - | - | - | data[14] | - | - | - | - | - | 22 | - | - |
| _TV_LEFT_CAMERA_SERIAL_NUMBER | 0x4108 | STAT_TV_LEFT_CAMERA_SERIAL_NUMBER_WERT | Im Host gecachte Seriennummer Kamera TV_L | - | - | - | data[14] | - | - | - | - | - | 22 | - | - |
| _TV_RIGHT_CAMERA_SERIAL_NUMBER | 0x4107 | STAT_TV_RIGHT_CAMERA_SERIAL_NUMBER_WERT | Im Host gecachte Seriennummer Kamera TV_R | - | - | - | data[14] | - | - | - | - | - | 22 | - | - |
| _ECU_TEMPERATURE | 0x4106 | STAT_ECU_TEMPERATURE_WERT | Interne Temperatur der ECU | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| _DSP_PRE-PBL_SUPPLIER_VERSION | 0x4105 | STAT_DSP_PRE_PBL_SUPPLIER_VERSION_WERT | Hersteller Versionsbezeichnung DSP PRE-PBL Applikation | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| _DSP_PBL-B_SUPPLIER_VERSION | 0x4104 | STAT_DSP_PBL_B_SUPPLIER_VERSION_WERT | Hersteller Versionsbezeichnung DSP PBL-B Applikation | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| _DSP_PBL-A_SUPPLIER_VERSION | 0x4103 | STAT_DSP_PBL_A_SUPPLIER_VERSION_WERT | Hersteller Versionsbezeichnung DSP PBL-A Applikation | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| _DSP_APPLICATION_SUPPLIER_VERSION | 0x4102 | STAT_DSP_APPLICATION_SUPPLIER_VERSION_WERT | Hersteller Versionsbezeichnung DSP Applikation | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| _HOST_APPLICATION_SUPPLIER_VERSION | 0x4101 | STAT_HOST_APPLICATION_SUPPLIER_VERSION_WERT | Hersteller Versionsbezeichnung Host Applikation | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| _ECU_VARIANT | 0x4100 | - | Abfrage der ECU Variante: 0 = hardwarecodierte Variante (default) 1 = TV. 2 = TV + SV 3 = TV + Rear 4 = TV + SV + Rear 5 = Rear | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4100 | RES_0x4100 |

### RES_0X410F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_LEFT_CAMERA_STATUS_WERT | - | - | int | - | - | - | - | - | Camera status (via LIN) |

### RES_0X4115

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REAR_CAMERA_ID_WERT | - | - | - | - | - | - | - | - | Camera CMOS module ID (via LIN) |

### RES_0X410D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV_LEFT_CAMERA_STATUS_WERT | - | - | int | - | - | - | - | - | Camera status (via LIN) |

### ARG_0XF000

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_REGISTER | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Register Nr: 0x00 to 0xFF |

### ARG_0XF001

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_REGISTER | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Register Nr: 0x00 .. 0xFF |
| ARG_DATA | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Data : 0x00 .. 0xFF |

### ARG_0XF002

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: Only one camera at time supported 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV |
| ARG_ADDRESS | + | + | - | - | unsigned int | - | - | - | - | - | - | - | Address-LSB, addressr-MSB |
| ARG_SIZE | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Size: Bit 2 to Bit 5; Bit 0,1,6,7 reserved  0x04 =1 Byte 0x08 =2 Bytes 0x0C =3 Bytes 0x10 =4 Bytes 0x14 =5 Bytes 0x18 =6 Bytes 0x1C =7 Bytes 0x20 =8 Bytes |

### ARG_0XF003

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_ADDRESS | + | + | - | - | unsigned int | - | - | - | - | - | - | - | Address-LSB, addressr-MSB |
| ARG_SIZE_TYPE | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Type & Size: bit 0 : 0 = EEPROM; 1 = Reserved bit 1 .. 5 : Size ( Max 8 bytes) bit 6..7 : Reserved |
| ARG_DATA | + | + | - | - | data[8] | - | - | - | - | - | - | - | Always 8 bytes. Please fill the unused ones with 00 |

### ARG_0XF004

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_DATA | - | - | data[8] | - | - | - | - | - | - | - | Data : 8 bytes |

### ARG_0XF005

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SOURCE | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Where source is: 0 = ECU image generated by DSP 1 .. 5 = Specified Camera (via LIN) 6 = ECU image generated by NTSC encoder |
| ARG_PATTERN | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Patterns: 0 = Colour bar (only one supported for cameras) 1 = RGB (10-bit stored in 16-bits per colour). 2 = Checkerboard (small) 3 = Checkerboard (large) 4 = Single pixel on (X, Y parameter). 5 = Single pixel off  (X, Y parameter). 6 = Alignment cross pattern. |
| ARG_DATA | + | - | - | - | data[6] | - | - | - | - | - | - | - | Data:  <16-bit R><16-bit G><16-bit B> or <16-bit X><16-bit Y><16-bit n/a> |

### ARG_0XF00B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_OVERLAY | + | - | - | - | char | - | - | - | - | - | - | - | 0 = Overlay on 1 = Overlay off |

### ARG_0XF00A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_OVERLAY | + | - | - | - | char | - | - | - | - | - | - | - | 0 = Overlay on 1 = Overlay off |

### RES_0XF027

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWUPD_TV_L_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_CAMSW | - | - | - | Gibt den Status der Kamerasoftware aus: 0x00 = Kamerasoftware ist nicht aktuell 0x01 = Update läuft 0x02 = Kamerasoftware ist aktuell |
| STAT_SWUPD_TV_R_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_CAMSW | - | - | - | Gibt den Status der Kamerasoftware aus: 0x00 = Kamerasoftware ist nicht aktuell 0x01 = Update läuft 0x02 = Kamerasoftware ist aktuell |
| STAT_SWUPD_SV_L_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_CAMSW | - | - | - | Gibt den Status der Kamerasoftware aus: 0x00 = Kamerasoftware ist nicht aktuell 0x01 = Update läuft 0x02 = Kamerasoftware ist aktuell |
| STAT_SWUPD_SV_R_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_CAMSW | - | - | - | Gibt den Status der Kamerasoftware aus: 0x00 = Kamerasoftware ist nicht aktuell 0x01 = Update läuft 0x02 = Kamerasoftware ist aktuell |
| STAT_SWUPD_RV_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_CAMSW | - | - | - | Gibt den Status der Kamerasoftware aus: 0x00 = Kamerasoftware ist nicht aktuell 0x01 = Update läuft 0x02 = Kamerasoftware ist aktuell |

### TAB_TRSVC_CAMSW

| WERT | TEXT |
| --- | --- |
| 0x00 | Kamerasoftware ist nicht aktuell |
| 0x01 | Update läuft |
| 0x02 | Kamerasoftware ist aktuell |
| 0x03 | Kamera-upgrade fehlgeschlagen |
| 0x04 | Kameraupgrade nicht moeglich/angefordert |

### ARG_0XF00C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | + | - | - | - | char | - | - | - | - | - | - | - | Camera IDs (only one permitted): 0x01 = TVL 0x02 = TVR 0x10 = RV |
| ARG_CALIB_ACTIVE | + | - | - | - | char | - | - | - | - | - | - | - | Calib-acitve is a boolean that instructs the system to perform a calibrate (0x01) and turn the display off on completion. If set to 0x00 then the video mode is left on, so the capture status can be seen, and when cancelled will return the capture status via grid-locked. |

### ARG_0XF00D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | byte 1 is data values, byte 2 is a mask: 0x01 = DSP 3V3 and 1V4 0x02 = AVCC 0x04 = DSP Reset |

### ARG_0XF00F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = Left MUX 0x02 = Right MUX Mask Byte 2: (as above) |

### ARG_0XF010

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = DSP IIC Clock 0x02 = DSP IIC Data Mask Byte 2: (as above) |

### ARG_0XF011

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = FLASH A19 0x02 = FLASH A20 Mask Byte 2: (as above) |

### ARG_0XF012

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | + | - | - | - | unsigned int | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = Camera 1 (J7 RV) 0x02 = Camera 2 (J3 TVL) 0x04 = Camera 3 (J4 SVL) 0x08 = Camera 4 (J5 TVR) 0x10 = Camera 5 (J6 SVR) Mask Byte 2: (as above) | - | Camera IDs (only one permitted): 0x01 = TVL 0x02 = TVR 0x10 = RV |

### ARG_0XF014

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = /STB 0x02 = /EN Mask Byte 1: (as above) |

### ARG_0XF016

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | Data Byte 1: 0x01 = Enable |

### ARG_0XF017

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PATTERN | - | - | char | - | - | - | - | - | - | - | Data Byte 1: Pattern # (TBD) |
| ARG_CAMERA | - | - | char | - | - | - | - | - | - | - | Data Byte 2: 0x01 = Camera 1 (J7 RV) 0x02 = Camera 2 (J3 TVL) 0x04 = Camera 3 (J4 SVL) 0x08 = Camera 4 (J5 TVR) 0x10 = Camera 5 (J6 SVR) |

### ARG_0XF018

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | + | - | - | - | char | - | - | - | - | - | - | - | 0 = Off 1 = On |

### ARG_0XF027

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | + | - | - | - | char | - | - | - | - | - | - | - | 0x01 = TVL Kamera           0x02 = TVR Kamera           0x03 = SVL Kamera           0x04 = SVR Kamera           0x10 = RV Kamera |

### ARG_0XF01E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_CAMERA | + | - | - | - | char | - | - | - | - | - | - | - | Camera ID |

### ARG_0XF025

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_BYTE_EINS | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 11 |
| ARG_DATA_BYTE_ZWEI | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 22 |
| ARG_DATA_BYTE_DREI | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 33 |
| ARG_DATA_BYTE_VIER | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 44 |

### ARG_0XF026

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_BYTE_EINS | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 11 |
| ARG_DATA_BYTE_ZWEI | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 22 |
| ARG_DATA_BYTE_DREI | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 33 |
| ARG_DATA_BYTE_VIER | + | - | - | - | char | - | - | - | - | - | - | - | DEFAULT: 44 |

### RES_0XF01E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RES_DATA_CAMERA_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Camera ID |
| STAT_RES_DATA_RSP_STATUS_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Response Status gueltig/unguetltig |
| STAT_RES_DATA_V_BAT_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Batteriespannung |
| STAT_RES_DATA_V_THERMISTOR_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Spannung am Thermistor |
| STAT_RES_DATA_V_IMAGER_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Spannung am Imager |

### ARG_0XF019

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | + | - | - | - | char | - | - | - | - | - | - | - | 0 = Off 1 = On |

### ARG_0X4165

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_TV_OVERLAY | + | + | - | - | unsigned char | - | - | - | - | - | 0 | 7 | Aktivierparameter TV Overlay |
| ARG_DATA_SV_OVERLAY | + | + | - | - | unsigned char | - | - | - | - | - | 0 | 7 | Aktivierparameter SV Overlay |
| ARG_DATA_RV_OVERLAY | + | + | - | - | unsigned char | - | - | - | - | - | 0 | 7 | Aktivierparameter RV Overlay |

### ARG_0X4100

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned char | - | - | - | - | - | 0 | 4 | 0 = Use H/W build configured variant value.  1 = TV. 2 = TV + SV 3 = TV + Rear 4 = TV + SV + Rear Write value 0 to restore normal behaviour |

### ARG_0XF015

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = /STB 0x02 = /EN Mask Byte 1: (as above) |

### ARG_0XF024

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREEZE_WATCHDOG | + | - | - | - | data[16] | - | - | - | - | - | - | - | line,GL,B0,B1,Cr,Cb,T1,P1,P2,T2,P1,P2,T3,P1,P2 Of these,line is 16 bit (LSB first),the others bytes. 1.Normal:Restores all F024 tests to normal. 2.Colour:colours in the next four bytes. B0 Luminance for 0 bits. B1 Luminance for 1 bits. Cr Red chrominance for all bits. Cb Blue chrominance for all bits. Note channel-specific tests are independent of global tests,except Global test  normal  removes these tests. T1 Counter mode on channel 1.Values are:0.Normal 1.Freeze:counter stops incrementing when it reaches the value in P1. 2.Slow:counter incremented every P1 frames. 3.Drag:Every P2 frames,hold current value for P1+1 frames. Then jump to correct point. Example: 1,2,3,4,4,4,7,8,9 4. Bypass:Every P2 frames,do not insert a counter image for P1+1 frames. Then jump to correct point. Example:1,2,3,4,-,-,7,8,9 5. Jump:Every P2 frames,jump forward by P1. Example:1,2,3,4,7,8,9 P1 and P2 Discussed above.T2,P1,P2 Same as T1 etc,for channel 2.T3,P1,P2 Same as T1 etc,for channel 3. |

### RES_0XF000

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_READ_CAMERA_REGISTER_WERT | - | - | + | - | - | data[15] | - | - | - | - | - | Rsp: [TVL] <register>, <value>,  [TVR] <register>, <value>,  [SVL] <register>, <value>, [SVR] <register>, <value>,  [RV] <register>, <value> |

### RES_0XF002

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_READ_CAMERA_DATA(EEPROM)_WERT | - | - | + | - | - | data[9] | - | - | - | - | - | Rsp: <cameria-id><data …> <cameria-id><data …> ...  ((1+Len) * NumCams) |

### RES_0XF00C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION__FOR_BMW_ASSEMBLY_WERT | - | - | + | - | - | data[12] | - | - | - | - | - | Rsp: <camera-id>, <initial err LSB>, <intial err MSB>, <final error LSB>, <final error MSB>, <calib-active>, <success>, <grid-locked>, <_padding>, <camera-updated-ok>, <calib-complete> |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_VARIANTE_WERT | - | - | unsigned char | - | - | - | - | - | ECU Variante 0 - hardwarecodiert (default) 1 - TV 2 - TV + SV 3 - TV + RV 4 - TV + SV + RV 5 - RV |

### RES_4133

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CEL_SERIAL_NUMBER_WERT | - | - | data[16] | - | - | - | - | - | CEL Serial number |

### RES_0XF18C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BMW_SERIAL_NUMBER_WERT | ASCII | - | string[10] | - | - | - | - | - | BMW Serail number |

### TAB_KAMERA_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x0000 | TVL Kamera |
| 0x0001 | TVR Kamera |
| 0x0002 | RV Kamera |

### TAB_STEUERN_REFERENZBILD

| WERT | TEXT |
| --- | --- |
| 0x0000 | exit without storage |
| 0x0001 | adjust view with provided parameters |
| 0x0002 | store and exit |

### ENVC_4011

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | Prebootloader fehlt |
| 0x02 | Prebootloader Programmierfehler |
| 0x04 | Prebootloader korrupt (CRC) |
| 0x08 | Konfigurationsparameter korrupt |

### ENVC_4012

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | Fehlerhafter Prebootloader PBL 1 |
| 0x02 | Fehlerhafter Prebootloader PBL 2 |
| 0x04 | Kommunikationsfehler zum Host PBL 1 |

### ENVC_4013

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | Speicherfehler RAM |
| 0x02 | Speicherfehler ROM |
| 0x04 | Speicherfehler EEPROM |
| 0x08 | Imagerfehler Vsync |
| 0x10 | Imagerfehler Versorgungsspannung |
| 0x20 | IIC Fehler |
| 0x40 | Kamerafehler Versorgungsspannung |
| 0x80 | Kamerafehler Reset |

### ENVC_4014

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | 5V Spannungsfehler |
| 0x02 | 3V3 Spannungsfehler |
| 0x04 | 1V7 Spannungsfehler |

### ENVC_4015

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | FBAS Kurzschluss GND |
| 0x02 | FBAS Kurzschluss V batt |
| 0x04 | FBAS Kurzschluss gegeneinander |

### ENVC_4016

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | ungueltige Seriennummer |
| 0x02 | Kamera nicht vorhanden oder nicht angelernt |
| 0x03 | falsche Linse |

### TAB_FRAMERATE_TRSVC

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine gueltige Framerate empfangen |
| 0x01 | Framerate 30 fr/s |
| 0x02 | Framerate 15 fr/s |
| 0x03 | Framerate 7.5 fr/s |

### RES_0X4165

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV_OVERLAY_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Aktivierte TV Overlays |
| STAT_SV_OVERLAY_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Aktivierte SV Overlays |
| STAT_RV_OVERLAY_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Aktivierte RV Overlays |

### RES_0X419D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TOPVIEW_VEHICLE_FEATURE_POSITION_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Beschreibung Topview Orientierungspunkt |

### ARG_0X419D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEATURES_VIEW_ENABLE | + | + | - | - | unsigned char | - | - | - | - | - | 0 | 1 | Aktiviert oder deaktiviert die Anzeige der Positionsoverlays im TV Mode |

### ARG_0X4196

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TV_NEW_TARGET_PEAK_THRESH | + | + | - | - | unsigned int | - | - | - | - | - | - | - | TV_NEW_TARGET_PEAK_THRESH |
| TV_CORR_PEAK_THRESH | + | + | - | - | unsigned int | - | - | - | - | - | - | - | TV_CORR_PEAK_THRESH |
| TV_NEW_TARGET_PCE_THRESH | + | + | - | - | unsigned char | - | - | - | - | - | - | - | TV_NEW_TARGET_PCE_THRESH |
| TV_CORR_PCE_THRESH | + | + | - | - | unsigned char | - | - | - | - | - | - | - | TV_CORR_PCE_THRESH |
| RV_NEW_TARGET_PEAK_THRESH | + | + | - | - | unsigned int | - | - | - | - | - | - | - | RV_NEW_TARGET_PEAK_THRESH |
| RV_CORR_TARGET_PEAK_THRESH | + | + | - | - | unsigned int | - | - | - | - | - | - | - | RV_CORR_TARGET_PEAK_THRESH |
| RV_NEW_TARGET_PCE_THRESH | + | + | - | - | unsigned char | - | - | - | - | - | - | - | RV_NEW_TARGET_PCE_THRESH |
| RV_CORR_PCE_THRESH | + | + | - | - | unsigned char | - | - | - | - | - | - | - | RV_CORR_PCE_THRESH |

### RES_0X4196

| RESULTNAME | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV_NEW_TARGET_PEAK_THRESH_WERT | - | - | - | - | unsigned int | - | - | - | - | - | - | - | TV_NEW_TARGET_PEAK_THRESH |
| STAT_TV_CORR_PEAK_THRESH_WERT | - | - | - | - | unsigned int | - | - | - | - | - | - | - | TV_CORR_PEAK_THRESH |
| STAT_TV_NEW_TARGET_PCE_THRESH_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | TV_NEW_TARGET_PCE_THRESH |
| STAT_TV_CORR_PCE_THRESH_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | TV_CORR_PCE_THRESH |
| STAT_RV_NEW_TARGET_PEAK_THRESH_WERT | - | - | - | - | unsigned int | - | - | - | - | - | - | - | RV_NEW_TARGET_PEAK_THRESH |
| STAT_RV_CORR_TARGET_PEAK_THRESH_WERT | - | - | - | - | unsigned int | - | - | - | - | - | - | - | RV_CORR_TARGET_PEAK_THRESH |
| STAT_RV_NEW_TARGET_PCE_THRESH_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | RV_NEW_TARGET_PCE_THRESH |
| STAT_RV_CORR_PCE_THRESH_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | RV_CORR_PCE_THRESH |

### ARG_0X4197

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIN_SPEED_MM_PER_S | - | - | unsigned int | - | - | - | - | - | - | - | MIN_SPEED_MM_PER_S |
| MAX_SPEED_MM_PER_S | - | - | unsigned int | - | - | - | - | - | - | - | MAX_SPEED_MM_PER_S |
| MAX_SPEED_DELTA_MM_PER_S | - | - | unsigned int | - | - | - | - | - | - | - | MAX_SPEED_DELTA_MM_PER_S |
| MAX_STEER_DELTA_DEG_64THS | - | - | unsigned int | - | - | - | - | - | - | - | MAX_STEER_DELTA_DEG_64THS |
| MIN_TRACK_DISTANCE_MM | - | - | unsigned int | - | - | - | - | - | - | - | MIN_TRACK_DISTANCE_MM |
| RV_NUM_REGIONS | - | - | unsigned char | - | - | - | - | - | - | - | RV_NUM_REGIONS |
| TV_NUM_REGIONS | - | - | unsigned char | - | - | - | - | - | - | - | TV_NUM_REGIONS |
| MAX_LOST_COUNT | - | - | unsigned char | - | - | - | - | - | - | - | MAX_LOST_COUNT |
| MIN_TRACK_COUNT | - | - | unsigned char | - | - | - | - | - | - | - | MIN_TRACK_COUNT |
| MAX_TRACK_COUNT | - | - | unsigned char | - | - | - | - | - | - | - | MAX_TRACK_COUNT |
| NUM_ODT_REGIONS | - | - | unsigned char | - | - | - | - | - | - | - | NUM_ODT_REGIONS |
| RESTRICT_FIL | - | - | unsigned char | - | - | - | - | - | - | - | RESTRICT_FIL |
| OVERLAY_ENABLED | - | - | unsigned char | - | - | - | - | - | - | - | OVERLAY_ENABLED |
| UPDATE_TIME_CONSTANT | - | - | unsigned char | - | - | - | - | - | - | - | UPDATE_TIME_CONSTANT |
| MIN_ON_GROUND_PERCENT | - | - | unsigned char | - | - | - | - | - | - | - | MIN_ON_GROUND_PERCENT |
| MIN_TURNING_PERCENT | - | - | unsigned char | - | - | - | - | - | - | - | MIN_TURNING_PERCENT |
| TURNING_ANGLE_THRESHOLD_DEGREES | - | - | unsigned char | - | - | - | - | - | - | - | TURNING_ANGLE_THRESHOLD_DEGREES |

### RES_0X4197

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SPEED_MM_PER_S_WERT | - | - | unsigned int | - | - | - | - | - | MIN_SPEED_MM_PER_S |
| STAT_MAX_SPEED_MM_PER_S_WERT | - | - | unsigned int | - | - | - | - | - | MAX_SPEED_MM_PER_S |
| STAT_MAX_SPEED_DELTA_MM_PER_S_WERT | - | - | unsigned int | - | - | - | - | - | MAX_SPEED_DELTA_MM_PER_S |
| STAT_MAX_STEER_DELTA_DEG_64THS_WERT | - | - | unsigned int | - | - | - | - | - | MAX_STEER_DELTA_DEG_64THS |
| STAT_MIN_TRACK_DISTANCE_MM_WERT | - | - | unsigned int | - | - | - | - | - | MIN_TRACK_DISTANCE_MM |
| STAT_RV_NUM_REGIONS_WERT | - | - | unsigned char | - | - | - | - | - | RV_NUM_REGIONS |
| STAT_TV_NUM_REGIONS_WERT | - | - | unsigned char | - | - | - | - | - | TV_NUM_REGIONS |
| STAT_MAX_LOST_COUNT_WERT | - | - | unsigned char | - | - | - | - | - | MAX_LOST_COUNT |
| STAT_MIN_TRACK_COUNT_WERT | - | - | unsigned char | - | - | - | - | - | MIN_TRACK_COUNT |
| STAT_MAX_TRACK_COUNT_WERT | - | - | unsigned char | - | - | - | - | - | MAX_TRACK_COUNT |
| STAT_NUM_ODT_REGIONS_WERT | - | - | unsigned char | - | - | - | - | - | NUM_ODT_REGIONS |
| STAT_RESTRICT_FIL_WERT | - | - | unsigned char | - | - | - | - | - | RESTRICT_FIL |
| STAT_OVERLAY_ENABLED_WERT | - | - | unsigned char | - | - | - | - | - | OVERLAY_ENABLED |
| STAT_UPDATE_TIME_CONSTANT_WERT | - | - | unsigned char | - | - | - | - | - | UPDATE_TIME_CONSTANT |
| STAT_MIN_ON_GROUND_PERCENT_WERT | - | - | unsigned char | - | - | - | - | - | MIN_ON_GROUND_PERCENT |
| STAT_MIN_TURNING_PERCENT_WERT | - | - | unsigned char | - | - | - | - | - | MIN_TURNING_PERCENT |
| STAT_TURNING_ANGLE_THRESHOLD_DEGREES_WERT | - | - | unsigned char | - | - | - | - | - | TURNING_ANGLE_THRESHOLD_DEGREES |

### ARG_0X4198

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ONL_ENABLE | + | + | - | - | unsigned char | - | - | - | - | - | - | - | ONL_ENABLE |
| PASS_1 | + | + | - | - | unsigned char | - | - | - | - | - | - | - | PASS_1 |
| PASS_2 | + | + | - | - | unsigned char | - | - | - | - | - | - | - | PASS_2 |
| HEIGHT_DETECT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | HEIGHT_DETECT |
| MAX_SOLVES | + | + | - | - | unsigned char | - | - | - | - | - | - | - | MAX_SOLVES |
| WORST_RESULTS_COUNT_LESS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WORST_RESULTS_COUNT_LESS |
| WORST_LESS_0_AMOUNT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WORST_LESS_0_AMOUNT |
| WORST_LESS_1_AMOUNT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WORST_LESS_1_AMOUNT |
| WORST_LESS_2_AMOUNT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WORST_LESS_2_AMOUNT |
| WORST_AMOUNT_1_TENTHS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WORST_AMOUNT_1_TENTHS |
| WORST_AMOUNT_2_TENTHS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WORST_AMOUNT_2_TENTHS |
| COMPENSATE_STEERING_MULT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | COMPENSATE_STEERING_MULT |
| COMPENSATE_STEERING_OFFS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | COMPENSATE_STEERING_OFFS |
| COMPENSATE_SPEED_MULT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | COMPENSATE_SPEED_MULT |
| WEIGHT_MEAN_POS_TO_VERT | + | + | - | - | unsigned char | - | - | - | - | - | - | - | WEIGHT_MEAN_POS_TO_VERT |
| NEW_HEIGHT_METHOD | + | + | - | - | unsigned char | - | - | - | - | - | - | - | NEW_HEIGHT_METHOD |
| SPEEDO_METHOD | + | + | - | - | unsigned char | - | - | - | - | - | - | - | SPEEDO_METHOD |
| MIN_MULTIPLIER_128THS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | MIN_MULTIPLIER_128THS |
| MAX_MULTIPLIER_128THS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | MAX_MULTIPLIER_128THS |
| SPEED_MULTIPLIER_100THS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | SPEED_MULTIPLIER_100THS |
| MAX_STEER_OFFS_DEG_10THS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | MAX_STEER_OFFS_DEG_10THS |
| STEER_OFFSET_MULTIPLIER | + | + | - | - | unsigned char | - | - | - | - | - | - | - | STEER_OFFSET_MULTIPLIER |
| STEER_MULTIPLIER_100THS | + | + | - | - | unsigned char | - | - | - | - | - | - | - | STEER_MULTIPLIER_100THS |
| PACKING_BYTE | + | + | - | - | unsigned char | - | - | - | - | - | - | - | PACKING_BYTE |

### RES_0X4198

| RESULTNAME | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ONL_ENABLE_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | ONL_ENABLE |
| STAT_PASS_1_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | PASS_1 |
| STAT_PASS_2_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | PASS_2 |
| STAT_HEIGHT_DETECT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | HEIGHT_DETECT |
| STAT_MAX_SOLVES_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | MAX_SOLVES |
| STAT_WORST_RESULTS_COUNT_LESS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WORST_RESULTS_COUNT_LESS |
| STAT_WORST_LESS_0_AMOUNT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WORST_LESS_0_AMOUNT |
| STAT_WORST_LESS_1_AMOUNT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WORST_LESS_1_AMOUNT |
| STAT_WORST_LESS_2_AMOUNT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WORST_LESS_2_AMOUNT |
| STAT_WORST_AMOUNT_1_TENTHS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WORST_AMOUNT_1_TENTHS |
| STAT_WORST_AMOUNT_2_TENTHS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WORST_AMOUNT_2_TENTHS |
| STAT_COMPENSATE_STEERING_MULT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | COMPENSATE_STEERING_MULT |
| STAT_COMPENSATE_STEERING_OFFS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | COMPENSATE_STEERING_OFFS |
| STAT_COMPENSATE_SPEED_MULT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | COMPENSATE_SPEED_MULT |
| STAT_WEIGHT_MEAN_POS_TO_VERT_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | WEIGHT_MEAN_POS_TO_VERT |
| STAT_NEW_HEIGHT_METHOD_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | NEW_HEIGHT_METHOD |
| STAT_SPEEDO_METHOD_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | SPEEDO_METHOD |
| STAT_MIN_MULTIPLIER_128THS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | MIN_MULTIPLIER_128THS |
| STAT_MAX_MULTIPLIER_128THS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | MAX_MULTIPLIER_128THS |
| STAT_SPEED_MULTIPLIER_100THS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | SPEED_MULTIPLIER_100THS |
| STAT_MAX_STEER_OFFS_DEG_10THS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | MAX_STEER_OFFS_DEG_10THS |
| STAT_STEER_OFFSET_MULTIPLIER_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | STEER_OFFSET_MULTIPLIER |
| STAT_STEER_MULTIPLIER_100THS_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | STEER_MULTIPLIER_100THS |
| STAT_PACKING_WERT | - | - | - | - | unsigned char | - | - | - | - | - | - | - | STEER_MULTIPLIER_100THS |

### RES_0X419E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UVIEW_PARAMETER_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | TV/UV Aktivierungsparameter (0=TV, 1=UVIEW) |

### ARG_0X419E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAMETER_UVIEW_AKTIVIERUNG | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Legt fest, ob TV im TV (0) oder im U-View Mode aktiviert wird |

### RES_0X419F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IVM_TESTMODE_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | IVM Testmode Parameter |

### RES_0X41A0

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV_TEMPORAL_FILTERING_WERT | - | - | - | - | - | data[4] | - | - | - | - | - | TV Filterparameter Bewegungserkennung |

### RES_0X41A1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_TEMPORAL_FILTERING_WERT | - | - | - | - | - | data[4] | - | - | - | - | - | SV Filterparameter Bewegungserkennung |

### RES_0X41A2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RV_TEMPORAL_FILTERING_WERT | - | - | - | - | - | data[4] | - | - | - | - | - | RV Filterparameter Bewegungserkennung |

### RES_0X41A3

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV_INHIBIT_PARAMETER_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Kotrollparameter zur De-/Aktivierung der TV Funktionalitaet. Achtung: Wird erst nach dem naechsten Klemmenwechsel/Reset vollstaendig aktiv. Funktion wird zwar unterbunden aber die CAN Nachrichten werden nicht richtig aktualisiert. 1 -> TV deaktiviert, 0 -> TV aktiv. |

### RES_0X4189

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRAMERATE_REDUCTION_ENABLE_WERT | - | - | - | - | - | unsigned char | - | - | - | - | - | Aktivierung der Framerate Reduktionsautomatik Kameras |

### ARG_0X4189

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FRAMERATE_REDUCTION_ENABLE_FLAG | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Aktivierung der automatischen Framerate Reduction bei dunkler Umgebung (0=aus, 1=ein) |

### RES_0X4191

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRAMERATE_TVL_IST | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | aktuelle Framerate TVL Kamera |
| STAT_FRAMERATE_TVL_SOLL | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | optimale Framerate TVL Kamera |
| STAT_FRAMERATE_TVR_IST | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | aktuelle Framerate TVR Kamera |
| STAT_FRAMERATE_TVR_SOLL | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | optimale Framerate TVR Kamera |
| STAT_FRAMERATE_SVL_IST | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | aktuelle Framerate SVL Kamera |
| STAT_FRAMERATE_SVL_SOLL | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | optimale Framerate SVL Kamera |
| STAT_FRAMERATE_SVR_IST | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | aktuelle Framerate SVR Kamera |
| STAT_FRAMERATE_SVR_SOLL | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | optimale Framerate SVR Kamera |
| STAT_FRAMERATE_RV_IST | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | aktuelle Framerate RV Kamera |
| STAT_FRAMERATE_RV_SOLL | - | - | - | 0-n | - | unsigned char | - | TAB_FRAMERATE_TRSVC | - | - | - | optimale Framerate RV Kamera |

### ARG_0X4190

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FRAMERATE_REDUCTION_MASTER_FRAME | + | + | - | - | data[5] | - | - | - | - | - | - | - | Master Frame Werte in der Reihenfolge TVL,TVR,SVL,SVR,RV Kamera |

### ARG_0X41A0

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TV_TEMPORAL_FILTER_PARAMETER | + | + | - | - | data[4] | - | - | - | - | - | - | - | TV Filterparameter Bewegungserkennung |

### ARG_0X41A1

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SV_TEMPORAL_FILTER_PARAMETER | + | + | - | - | data[4] | - | - | - | - | - | - | - | SV Filterparameter Bewegungserkennung |

### ARG_0X41A2

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RV_TEMPORAL_FILTER_PARAMETER | + | + | - | - | data[4] | - | - | - | - | - | - | - | RV Filterparameter Bewegungserkennung |

### ARG_0X41A3

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TV_INHIBIT_PARAMETER | + | + | - | - | unsigned char | - | - | - | - | - | - | - | Kotrollparameter zur De-/Aktivierung der TV Funktionalitaet. Achtung: Wird erst nach dem naechsten Klemmenwechsel/Reset vollstaendig aktiv. Funktion wird zwar unterbunden aber die CAN Nachrichten werden nicht richtig aktualisiert. 1 -> TV deaktiviert, 0 -> TV aktiv. |

### TAB_KAMERA_D38E

| WERT | TEXT |
| --- | --- |
| 0x0000 | TV_L |
| 0x0001 | TV_R |
| 0x0002 | RV |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### ENVC_4017

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein aktiver Fehler |
| 0x01 | Fisheye Kalibrierparameter korrupt |
| 0x02 | Fahrzeugkalibrierung nicht durchgefuehrt |

### RES_0X41A4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ONLINE_CALIB_STORAGE_INHIBIT_WERT | - | - | unsigned char | - | - | - | - | - | Onine calibration result storage inhibit parameter. |

### ARG_0X41A4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ONLINE_CALIB_STORAGE_INHIBIT_PARAMETER | - | - | unsigned char | - | - | - | - | - | - | - | - |

### TAB_BUS_STATUS_HECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Heckklappe  geschlossen |
| 0x01 | Heckklappe  geöffnet |
| 0x03 | Signal ungültig |

### TAB_BUS_TUERKONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Signal unplausibel |
| 0x03 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_BUS_STATUS_SPIEGEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Spiegel ausgeklappt |
| 0x01 | Spiegel eingeklappt |
| 0x03 | Signal ungültig |

### TAB_STAT_EMBLEMCAMERA

| WERT | TEXT |
| --- | --- |
| 0x00 | Emblemkamera ist eingefahren |
| 0x01 | Emblemkamera ist ausgefahren |
| 0x02 | Emblemkamera fährt ein |
| 0x03 | Emblemkamera fährt aus |
| 0x04 | Fehler (Emblemkamera-Mechanik klemmt, Endschalter klemmt) |
| 0xFF | nicht definiert |

### TAB_STEUERN_EMBLEMCAMERA

| WERT | TEXT |
| --- | --- |
| 0x00 | Einfahren der Emblemkamera |
| 0x01 | Ausfahren der Emblemkamera |

### TAB_KAMERA_SERVICE

| WERT | TEXT |
| --- | --- |
| 0x0000 | TV_L |
| 0x0001 | TV_R |
| 0x0002 | RV |

### TAB_TRVC_REFERENZBILD

| WERT | TEXT |
| --- | --- |
| 0x0000 | ABBRUCH |
| 0x0001 | JUSTAGE |
| 0x0002 | SPEICHERN |

### TAB_KAMERA_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x0000 | TV_L |
| 0x0001 | TV_R |
| 0x0002 | RV |
| 0x0003 | SV_L |
| 0x0004 | SV_R |

### TAB_TRSVC_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x0000 | REALBILD |
| 0x0001 | TESTBILD |

### TAB_ECU_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | hardwarecodiert (default) |
| 0x01 | TV |
| 0x02 | TV + SV |
| 0x03 | TV + RV |
| 0x04 | TV + SV + RV |
| 0x05 | RV |

### TAB_ARG_DATA

| WERT | TEXT |
| --- | --- |
| 0x00 | Use H/W build configured variant value |
| 0x01 | TV |
| 0x02 | TV + SV |
| 0x03 | TV + Rear |
| 0x04 | TV + SV + Rear |

### TAB_CALIBRATION_PERFORMED_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Top view links |
| 0x02 | Top view rechts |
| 0x10 | Rear view |

### TSIGNALART

| WERT | TEXT |
| --- | --- |
| 0x01 | Realbild |
| 0x02 | Testbild |
| 0x03 | Signal abschalten |
| 0x04 | Testbild mit Alive Counter (ACNT) |
| 0x05 | Testbild mit stehendem ACNT |
| 0x06 | Testbild mit leicht gestörtem ACNT |
| 0x07 | Testbild mit stark gestörtem ACNT |
| 0x08 | Testbild mit leicht springendem ACNT |
| 0x09 | Testbild mit stark springendem ACNT |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TVIDEOAUSGANG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Ausgänge |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0004 | Ausgang 3 |
| 0x0008 | Ausgang 4 |
| 0x0010 | Ausgang 5 |
| 0x0020 | Ausgang 6 |
| 0x0040 | Ausgang 7 |
| 0x0080 | Ausgang 8 |
| 0x0100 | Ausgang 9 |
| 0xFFFF | Nicht definiert |

### TLEITUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TAB_KAMERA

| WERT | TEXT |
| --- | --- |
| 0x0000 | ALLE |
| 0x0001 | TV_L |
| 0x0002 | TV_R |
| 0x0003 | RV |

### TAB_TRVC_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung abgeschlossen oder nicht angefordert |
| 0x01 | Kalibrierung läuft |
| 0x02 | Kalibrierung erfolgreich durchgeführt |
| 0x03 | Kamera nicht verbaut |
| 0x04 | Ausrichtungsziel nicht gefunden |
| 0x07 | Kalibrierung abgebrochen |

### TAB_TRSVC_AUTOADR

| WERT | TEXT |
| --- | --- |
| 0x00 | Anlernen abgeschlossen oder nicht angefordert |
| 0x01 | Anlernen läuft |
| 0x02 | Anlernen erfolgreich durchgeführt |
| 0x03 | Fehler: Kamera nicht in SG codiert |
| 0x04 | Fehler: Kamera nicht angeschlossen |
| 0x05 | Fehler: Falsche Kamera angeschlossen |

### RES_0XD378

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDREHUNGX_KAM_TV_R_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_KAM_TV_R_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_KAM_TV_R_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XD379

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDREHUNGX_KAM_TV_L_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_KAM_TV_L_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_KAM_TV_L_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XD37A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABWEICHUNGX_KAM_TV_L_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der x-Achse |
| STAT_ABWEICHUNGY_KAM_TV_L_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der y-Achse |
| STAT_ABWEICHUNGZ_KAM_TV_L_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der z-Achse |

### RES_0XD37B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABWEICHUNGX_KAM_TV_R_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der x-Achse |
| STAT_ABWEICHUNGY_KAM_TV_R_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der y-Achse |
| STAT_ABWEICHUNGZ_KAM_TV_R_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der z-Achse |

### RES_0XD37D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_TASTE_SV_EIN | 0/1 | - | int | - | - | - | - | - | Signal Taster SideView-KAMERA über BUS, 0= Taster nicht gedrueckt, 1= Taster gedrueckt |

### ARG_0XD37D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE_SV_EIN | 0/1 | - | int | - | - | - | - | - | - | - | Simuliert Signal Taster SideView-KAMERA über BUS,  0= Taster nicht gedrueckt 1= Taster gedrueckt |

### RES_0XD37F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_TOPVIEW_KAM | 0/1 | - | int | - | - | - | - | - | TopView-Kameras: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_SIDEVIEW_KAM | 0/1 | - | int | - | - | - | - | - | SideView-Kameras: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_REARVIEW_KAM | 0/1 | - | int | - | - | - | - | - | Rückfahrkamera: 0=nicht vorhanden, 1=vorhanden |

### RES_0XD380

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_KAM_SV_L_WERT | mA | - | int | - | - | - | - | - | Ausgabe der Stromaufnahme der Kamera in mA |
| STAT_STROM_KAM_SV_R_WERT | mA | - | int | - | - | - | - | - | Ausgabe der Stromaufnahme der Kamera in mA |
| STAT_STROM_KAM_TV_L_WERT | mA | - | int | - | - | - | - | - | Ausgabe der Stromaufnahme der Kamera in mA |
| STAT_STROM_KAM_TV_R_WERT | mA | - | int | - | - | - | - | - | Ausgabe der Stromaufnahme der Kamera in mA |

### RES_0XD383

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_STATUS_TUER_VL | 0-n | - | int | - | TAB_BUS_TUERKONTAKT | - | - | - | Signal Status Türe vorne links über BUS: 0 = Türe geschlossen 1 = Türe geöffnet 3 = Signal ungültig |
| STAT_BUS_IN_STATUS_TUER_VR | 0-n | - | int | - | TAB_BUS_TUERKONTAKT | - | - | - | Signal Status Türe vorne rechts über BUS: 0 = Türe geschlossen 1 = Türe geöffnet 3 = Signal ungültig |

### ARG_0XD38E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | TAB_KAMERA_SERVICE | - | - | - | - | - | 0 = TV_L, 1 = TV_R, 2 = RV |

### RES_0XD392

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_TV_EIN | 0/1 | - | int | - | - | - | - | - | Signal für De-/ Aktivierung TopView über BUS,  0 = nicht aktiviert, 1 = aktiviert |
| STAT_BUS_IN_RV_EIN | 0/1 | - | int | - | - | - | - | - | Signal für De-/ Aktivierung RearView über BUS,  0 = nicht aktiviert, 1 = aktiviert |

### ARG_0XD392

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSSIGNAL_TV | 0/1 | - | int | - | - | - | - | - | - | - | Gibt an, ob TopView aus oder ein simuliert werden soll:  0=AUS, 1=EIN |
| AKTIVIERUNGSSIGNAL_RV | 0/1 | - | int | - | - | - | - | - | - | - | Gibt an, ob RearView aus oder ein simuliert werden soll:  0=AUS, 1=EIN |

### RES_0XD395

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_STATUS_AUSSENSPIEGEL_LINKS | 0-n | - | int | - | TAB_BUS_STATUS_SPIEGEL | - | - | - | Signal Status Außenspiegel links über BUS: 0 = Spiegel ausgeklappt 1 = Spiegel eingeklappt 3 = Signal ungültig |
| STAT_BUS_IN_STATUS_AUSSENSPIEGEL_RECHTS | 0-n | - | int | - | TAB_BUS_STATUS_SPIEGEL | - | - | - | Signal Status Außenspiegel rechts über BUS: 0 = Spiegel ausgeklappt 1 = Spiegel eingeklappt 3 = Signal ungültig |

### RES_0XD3A0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZUNG_RFK_KAM_EIN | 0/1 | - | int | - | - | - | - | - | Ausgabe des Status der Heizung an der Rückfahrkamera 0 = AUS,  1 = EIN |

### ARG_0XD3A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Angabe der Ansteuerung der Heizung an der Rückfahrkamera:  0 = AUS,  1 = EIN |

### RES_0XD3A1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADR_TV_L | 0/1 | - | char | - | - | - | - | - | Status Anlernen TopViewCam links: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_TV_R | 0/1 | - | char | - | - | - | - | - | Status Anlernen TopViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_SV_L | 0/1 | - | char | - | - | - | - | - | Status Anlernen SideViewCam links: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_SV_R | 0/1 | - | char | - | - | - | - | - | Status Anlernen SideViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_RV | 0/1 | - | char | - | - | - | - | - | Status Anlernen RearViewCam: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |

### RES_0XD3B0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMBLEMCAMERA | 0-n | - | unsigned char | - | TAB_STAT_EMBLEMCAMERA | - | - | - | Status Emblemkamera siehe TAB_STAT_EMBLEMCAMERA |

### ARG_0XD3B0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_EMBLEMCAMERA | 0-n | - | unsigned char | - | TAB_STEUERN_EMBLEMCAMERA | - | - | - | - | - | Steuern Emblemkamera siehe TAB_STEUERN_EMBLEMCAMERA |

### ARG_0XD3B2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | unsigned int | - | TAB_KAMERA_SERVICE | - | - | - | - | - | Gibt an, welche Kamera kalibriert werden soll:  0 = TV_L,  1 = TV_R,  2 = RV |
| REFERENZBILD | 0-n | - | unsigned int | - | TAB_TRVC_REFERENZBILD | - | - | - | - | - | Für ausgewählte Kamera:  0 = Kalibrierung ohne Speichern der Daten abbrechen und zurück zur normalen Ansicht 1 = Referenzbild mit Ansicht der Justagelinien durch der Veränderung durch Werte in Argumenten  ABWEICHUNG... 2 = Kalibrierung mit Speichern der Daten beenden und zurück zur normalen Ansicht |
| ABWEICHUNGX | mm | - | int | - | - | - | - | - | - | - | Abweichung entlang der x-Achse in mm (d.h. Eingabe -50 führt zu Verschiebung von -50mm) |
| ABWEICHUNGY | mm | - | int | - | - | - | - | - | - | - | Abweichung entlang der y-Achse in mm (d.h. Eingabe -50 führt zu Verschiebung von -50mm) |
| ABWEICHUNGZ | mm | - | int | - | - | - | - | - | - | - | Abweichung entlang der z-Achse in mm (d.h. Eingabe -50 führt zu Verschiebung von -50mm) |

### ARG_0XD3B3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | unsigned int | - | TAB_KAMERA_SERVICE | - | - | - | - | - | Gibt an, welche Kamera kalibriert werden soll:  0 = TV_L,  1 = TV_R,  2 = RV |
| REFERENZBILD | 0-n | - | unsigned int | - | TAB_TRVC_REFERENZBILD | - | - | - | - | - | Für ausgewählte Kamera:  0 = Kalibrierung ohne Speichern der Daten abbrechen und zurück zur normalen Ansicht 1 = Referenzbild mit Ansicht der Justagelinien durch der Veränderung durch Werte in Argumenten  VERDREHUNG... 2 = Kalibrierung mit Speichern der Daten beenden und zurück zur normalen Ansicht |
| VERDREHUNGX | Grad | - | int | - | - | - | - | - | - | - | Abweichung der Winkelverdrehung in 10-tel Grad (d.h. Eingabe -23 führt zu Verdrehung von 2,3°) |
| VERDREHUNGY | Grad | - | int | - | - | - | - | - | - | - | Abweichung der Winkelverdrehung in 10-tel Grad (d.h. Eingabe -23 führt zu Verdrehung von 2,3°) |
| VERDREHUNGZ | Grad | - | int | - | - | - | - | - | - | - | Abweichung der Winkelverdrehung in 10-tel Grad (d.h. Eingabe -23 führt zu Verdrehung von 2,3°) |

### ARG_0XD3B4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | TAB_KAMERA_TESTBILD | - | - | - | - | - | Gibt an, welche Kamera ein Testbild ausgeben soll:  0 = TV_L,  1 = TV_R,  2 = RV,  3 = SV_L,  4 = SV_R |
| TESTBILD | 0-n | - | int | - | TAB_TRSVC_TESTBILD | - | - | - | - | - | 0 = Realbild,  1  = Testbild (Farbeverlauf und Text welche Kamera) |
| TIMEOUT | s | - | int | - | - | - | - | - | - | - | Ausgabezeit für das Testbild in Sekunden fest. Default: 10, Bereich: 1-30, 0 = Normalbetrieb, 255 ohne Timeout. |

### RES_0XD3B5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABWEICHUNGX_KAM_RV_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der x-Achse |
| STAT_ABWEICHUNGY_KAM_RV_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der y-Achse |
| STAT_ABWEICHUNGZ_KAM_RV_WERT | mm | - | int | - | - | - | - | - | Abweichung der virtuellen Kameraposition von der z-Achse |

### RES_0XD3B6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDREHUNGX_KAM_RV_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_KAM_RV_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_KAM_RV_WERT | Grad | - | int | - | - | - | 10.0 | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XD3CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ONLINEKALIBRIERUNG_REARVIEW | 0-n | high | unsigned char | - | TAB_STATUS_ONLINEKALIBRIERUNG | - | - | - | Ausgabe Kalibrierstatus Rearview (siehe Tabelle TAB_STATUS_ONLINEKALIBRIERUNG) |
| STAT_ONLINEKALIBRIERUNG_TOPVIEW_LINKS | 0-n | high | unsigned char | - | TAB_STATUS_ONLINEKALIBRIERUNG | - | - | - | Ausgabe Kalibrierstatus Topview links (siehe Tabelle TAB_STATUS_ONLINEKALIBRIERUNG) |
| STAT_ONLINEKALIBRIERUNG_TOPVIEW_RECHS | 0-n | high | unsigned char | - | TAB_STATUS_ONLINEKALIBRIERUNG | - | - | - | Ausgabe Kalibrierstatus Topview rechts (siehe Tabelle TAB_STATUS_ONLINEKALIBRIERUNG) |

### TAB_STATUS_ONLINEKALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung nicht möglich |
| 0x01 | Schneller Kalibriermodus |
| 0x02 | Normaler Kalibriermodus |
| 0x03 | Reserviert |
| 0xFF | Ungültig |

### RES_0XD3CE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ONLINEKALIB_QUALITAET_REARVIEW | 0-n | high | unsigned char | - | TAB_QUALITAET_ONLINEKALIBRIERUNG | - | - | - | Qualität der Onlinekalibrierung Rearview |
| STAT_ONLINEKALIB_QUALITAET_TOPVIEW_LINKS | 0-n | high | unsigned char | - | TAB_QUALITAET_ONLINEKALIBRIERUNG | - | - | - | Qualität der Onlinekalibrierung Topview links |
| STAT_ONLINEKALIB_QUALITAET_TOPVIEW_RECHTS | 0-n | high | unsigned char | - | TAB_QUALITAET_ONLINEKALIBRIERUNG | - | - | - | Qualität der Onlinekalibrierung Topview rechts |

### TAB_QUALITAET_ONLINEKALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | 0% |
| 0x01 | 1-49% |
| 0x02 | 50-74% |
| 0x03 | 75-99% |
| 0x04 | 100% |
| 0xFF | Ungültig |

### ARG_0XA01A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | - | - | - | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### RES_0XA01B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Gibt wieder, als Integer, welche Ausgänge getestet wurden. 0 bedeutet alle Ausgänge wurden getestet. |
| STAT_TEST_VIDEOAUSGANG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status der getesteten Ausgänge wieder. Die offene Leitung zu erkennen ist optional, zwingend ist die Erkennung von Kurzschlüssen. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_AUSGAENGE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, auf wie vielen Ausgängen Fehler vorlagen. |
| STAT_FEHLER_1_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |

### ARG_0XA01B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUSGANG | + | - | - | - | unsigned int | - | - | - | - | - | - | - | Wählt den zu testenden Ausgang. Tabelle TVideoAusgang |

### RES_0XA300

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_TV_L_NR | - | - | + | 0-n | - | unsigned char | - | TAB_TRVC_KALIBRIERUNG | - | - | - | Ausgabe des Status der Kalibierung einer Kamera:  0x00 Kalibrierung abgeschlossen oder nicht angefordert 0x01 Kalibrierung läuft 0x02 Kalibrierung erfolgreich durchgeführt 0x03 Kamera nicht verbaut 0x04 Ausrichtungsziel nicht gefunden  0x07 Kalibrierung abgebrochen |
| STAT_KALIBRIERUNG_TV_R_NR | - | - | + | 0-n | - | unsigned char | - | TAB_TRVC_KALIBRIERUNG | - | - | - | Ausgabe des Status der Kalibierung einer Kamera:  0x00 Kalibrierung abgeschlossen oder nicht angefordert 0x01 Kalibrierung läuft 0x02 Kalibrierung erfolgreich durchgeführt 0x03 Kamera nicht verbaut 0x04 Ausrichtungsziel nicht gefunden  0x07 Kalibrierung abgebrochen |
| STAT_KALIBRIERUNG_RV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_TRVC_KALIBRIERUNG | - | - | - | Ausgabe des Status der Kalibierung einer Kamera:  0x00 Kalibrierung abgeschlossen oder nicht angefordert 0x01 Kalibrierung läuft 0x02 Kalibrierung erfolgreich durchgeführt 0x03 Kamera nicht verbaut 0x04 Ausrichtungsziel nicht gefunden  0x07 Kalibrierung abgebrochen |

### ARG_0XA300

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | + | - | 0-n | - | unsigned char | - | TAB_KAMERA | - | - | - | - | - | Gibt an, welche Kamera kalibriert werden soll: 0x00 = ALLE, alle angeschlossen Kameras (sequenziell in ECU) 0x01 = TV_L, TopView-Kamera links 0x02 = TV_R, TopView-Kamera rechts 0x03 = RV, RearView-Kamera |

### ARG_0XA301

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOURCE | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Gibt an, welche Quelle für den Videoausgang verwendet werden soll: 0 = ECU-Testbild generiert von DSP 1 = Testbild der TV_R-Kamera 2 = Testbild der TV_L-Kamera 3 = Testbild der SV_R-Kamera 4 = Testbild der SV_L-Kamera 5 = Testbild der RV-Kamera 6 = ECU-Testbild generiert von NTSC-Encoder |

### RES_0XA302

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADR_TV_L_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | - | - | - | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_TV_R_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | - | - | - | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_SV_L_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | - | - | - | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_SV_R_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | - | - | - | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_RV_KAM | - | - | + | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | - | - | - | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
