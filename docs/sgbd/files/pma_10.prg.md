# pma_10.prg

## General

|  |  |
| --- | --- |
| File | pma_10.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 54 |
| Origin | BMW EF-622 Freistadt |
| Revision | 4.000 |
| Author | Hella tbd Hansen |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | - |  |  |
| ORIGIN | string | BMW EF-622 Freistadt |  |  |
| REVISION | string | 4.000 |  |  |
| AUTHOR | string | Hella tbd Hansen |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.33 |  |  |
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
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
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
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
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
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
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
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
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
| 0x022C00 | Energiesparmode - aktiv | 0 |
| 0x02FF2C | Diagnosemaster - Dummy Application DTC | 1 |
| 0x481E00 | Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft | 0 |
| 0x481E01 | Steuergerät Intern - Zulieferer - Flashprozess fehlerhaft | 0 |
| 0x481E02 | PMA Funktionsfehler - Hands-On erkannt | 1 |
| 0x481E03 | PMA Funktionsfehler - Geöffnete Tür | 1 |
| 0x481E04 | PMA Funktionsfehler - Falsche Gangwahl | 1 |
| 0x481E05 | PMA Funktionsfehler - Falsche Blinkerwahl | 1 |
| 0x481E06 | PMA Funktionsfehler - Erkannter Schlupf | 1 |
| 0x481E07 | PMA Funktionsfehler - Keine geeignete Einparkroute vorhanden | 1 |
| 0x481E08 | Sensor Links - Sensor intern - Update Sensor Links fehlerhaft | 0 |
| 0x481E09 | Steuergerät Intern - Übertemperatur | 0 |
| 0x481E11 | Codierung - ungueltige Daten | 0 |
| 0x481E12 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x481E15 | Spannungsversorgung Lokale Unterspannung | 1 |
| 0x481E16 | Spannungsversorgung Lokale Überspannung | 1 |
| 0x481E17 | Sensorpins - Spannung Sensor links  - Kurzschluss nach UBat (KL30) | 0 |
| 0x481E18 | Sensorpins - Spannung Sensor links  - Kurzschluss nach Masse (KL31) | 0 |
| 0x481E19 | Reserve_Vorhalt | 0 |
| 0x481E1A | Reserve_Vorhalt | 0 |
| 0x481E1B | Sensor Links - Versorgung - Unterspannung vom Steuergerät | 1 |
| 0x481E1D | Sensor Links - Sensor intern - Flashfehler | 0 |
| 0x481E1E | Sensor Links - Sensor intern - HW/SW Inkompatibilität | 0 |
| 0x481E1F | Update Sensoren - nicht durchgeführt | 0 |
| 0x481E20 | Sensor Links - Allgemein - Dejustage erkannt | 0 |
| 0x481E21 | Sensorpins - Spannung Sensor rechts - Kurzschluss nach UBat (KL30) | 0 |
| 0x481E22 | Sensorpins - Spannung Sensor rechts - Kurzschluss nach Masse (KL31) | 0 |
| 0x481E23 | Reserve_Vorhalt | 0 |
| 0x481E24 | Sensorpins - Rechts oder Links - Kurzschluss nach Masse | 0 |
| 0x481E25 | Sensor Rechts - Versorgung - Unter- oder Überspannung | 0 |
| 0x481E26 | Sensorpins - Rechts oder Links - Kurzschluss nach UBatt | 0 |
| 0x481E27 | Sensor Rechts - Sensor intern - Flashfehler | 0 |
| 0x481E28 | Sensor Rechts - Sensor intern - HW/SW Inkompatibilität | 0 |
| 0x481E29 | Sensor Rechts - Sensor intern - Update Sensor Rechts fehlerhaft | 0 |
| 0x481E2A | Sensor Links - Allgemein - Übertemperatur | 0 |
| 0x481E2B | Sensor Rechts - Allgemein - Invalid Data Respones | 0 |
| 0x481E2C | Sensor Links - Versorgung - Unter- oder Überspannung | 0 |
| 0x481E2D | Reserve_Vorhalt | 0 |
| 0x481E2E | Reserve_Vorhalt | 0 |
| 0x481E2F | Sensor Rechts - Sensor intern - Fehlerbehandlung LIN | 0 |
| 0x481E30 | Sensor Links - Allgemein - Blindheit - Montagefehler | 0 |
| 0x481E31 | Codierung - Transaktion gescheitert | 0 |
| 0x481E32 | Codierung - Signatur fehlerhaft | 0 |
| 0x481E33 | Codierung - Falsches Fahrzeug | 0 |
| 0x481E3A | Reserve_Vorhalt | 0 |
| 0x481E3B | Sensor Links - Versorgung - Überspannung vom Steuergerät | 0 |
| 0x481E3C | Reserve_Vorhalt | 0 |
| 0x481E3D | Sensor Rechts - Versorgung - Unterspannung vom Steuergerät | 1 |
| 0x481E3E | Sensor Rechts - Versorgung - Überspannung vom Steuergerät | 0 |
| 0x481E3F | Sensor Rechts - Allgemein - Dejustage erkannt | 0 |
| 0x481E40 | Sensor Rechts - Allgemein - Übertemperatur | 0 |
| 0x481E41 | Reserve_Vorhalt | 0 |
| 0x481E42 | Reserve_Vorhalt | 0 |
| 0x481E43 | Sensor Links - Sensor intern - Fehlerbehandlung LIN | 0 |
| 0x481E44 | Sensor Rechts - Allgemein - Blindheit - Montagefehler | 0 |
| 0x481E45 | PMA Funktionsfehler - max Einparkgeschwindigkeit überschritten | 1 |
| 0x481E46 | Reserve_Vorhalt | 0 |
| 0x481E49 | Steuergerät Intern - RAM fehlerhaft | 0 |
| 0x481E4A | Sensor Links - Sensor intern - Signalpfad fehlerhaft | 0 |
| 0x481E4B | Sensor Rechts - Sensor intern - Signalpfad fehlerhaft | 0 |
| 0x481E4C | Sensor Links - Allgemein - Invalid Data Respones | 0 |
| 0x481E52 | Reserve_Vorhalt | 0 |
| 0x481E53 | Reserve_Vorhalt | 0 |
| 0x481E54 | Reserve_Vorhalt | 0 |
| 0x481E55 | Reserve_Vorhalt | 0 |
| 0x481E56 | Reserve_Vorhalt | 0 |
| 0x481E57 | Reserve_Vorhalt | 0 |
| 0x481E58 | Reserve_Vorhalt | 0 |
| 0x481E59 | Reserve_Vorhalt | 0 |
| 0x481E5A | Reserve_Vorhalt | 0 |
| 0x481E5B | Reserve_Vorhalt | 0 |
| 0x481E7D | Steuergerät Intern - ROM fehlerhaft | 0 |
| 0x481E7E | Sensor Rechts - Sensor intern Parametersatz ungültig - Defaultwerte | 0 |
| 0x481E7F | Sensor Links - Sensor intern Parametersatz ungültig - Defaultwerte | 0 |
| 0xD4041F | Busfehler (Flexray) - Physikalischer Bus Fehler | 0 |
| 0xD40420 | Busfehler (Flexray) - Controller Fehler | 0 |
| 0xD40BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD40D1E | Busfehler (LIN_X) - Fehler Sensor links | 0 |
| 0xD40D1F | Busfehler (LIN_X) - Fehler Sensor rechts | 0 |
| 0xD41428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD4142C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD4144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xD4144F | Botschaftsfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) - Timeout | 1 |
| 0xD41450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 |
| 0xD41451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 |
| 0xD41482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xD4149D | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Qualifier | 1 |
| 0xD4149E | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Qualifier | 1 |
| 0xD414AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD414B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xD414B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Undefiniert | 1 |
| 0xD414B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD414BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD414BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD414BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xD414C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD414C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xD414C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xD414E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xD414EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Alive | 1 |
| 0xD414EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 |
| 0xD414EF | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Undefiniert | 1 |
| 0xD414F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD414F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD414F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD414FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xD414FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xD414FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 |
| 0xD41508 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Ungültig | 1 |
| 0xD41509 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Undefiniert | 1 |
| 0xD4151C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xD4151D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Undefiniert | 1 |
| 0xD41544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xD41548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xD41549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Undefiniert | 1 |
| 0xD41570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD4157A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD4157B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Undefiniert | 1 |
| 0xD4158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD4158E | Signalfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) - Ungültig | 1 |
| 0xD41590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xD415A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD415A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD415A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Undefiniert | 1 |
| 0xD415BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xD415C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xD415C4 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Timeout | 1 |
| 0xD415C6 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Alive | 1 |
| 0xD415C8 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Ungültig | 1 |
| 0xD415CA | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Timeout | 1 |
| 0xD415D0 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Ungültig | 1 |
| 0xD415D1 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Undefiniert | 1 |
| 0xD4161C | Botschaftsfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Timeout | 1 |
| 0xD41620 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Ungültig | 1 |
| 0xD41621 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Undefiniert | 1 |
| 0xD41638 | Botschaftsfehler (Wegstrecke Rad, ID: MILE_WHL) - Timeout | 1 |
| 0xD4163A | Botschaftsfehler (Wegstrecke Rad, ID: MILE_WHL) - Alive | 1 |
| 0xD4163E | Signalfehler (Wegstrecke Rad, ID: MILE_WHL) - Ungültig | 1 |
| 0xD41652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Timeout | 1 |
| 0xD41656 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Ungültig | 1 |
| 0xD41657 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Undefiniert | 1 |
| 0xD41686 | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Timeout | 1 |
| 0xD41696 | Botschaftsfehler (Status Parkassistent 2, ID:ST_PMA_2) - Timeout | 1 |
| 0xD41697 | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) Timeout | 1 |
| 0xD416A7 | Botschaftsfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Timeout | 1 |
| 0xD416AB | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Ungültig | 1 |
| 0xD4171C | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Ungültig | 1 |
| 0xD41727 | Botschaftsfehler (Status Parkassistent 2, ID:ST_PMA_2) - Alive | 1 |
| 0xD4172A | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) Alive | 1 |
| 0xD41744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD4176A | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Alive | 1 |
| 0xD41779 | Signalfehler (Status Parkassistent 2, ID:ST_PMA_2) - Ungültig | 1 |
| 0xD4177A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) Ungültig | 1 |
| 0xD417BF | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Qualifier | 1 |
| 0xD417D6 | Signalfehler (Status Parkassistent 2, ID:ST_PMA_2) - Qualifier | 1 |
| 0xD4181C | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Undefiniert | 1 |
| 0xD41825 | Signalfehler (Status Parkassistent 2, ID:ST_PMA_2) - Undefiniert | 1 |
| 0xD4182A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) Undefiniert | 1 |
| 0xD418DC | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Timeout | 1 |
| 0xD41932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 |
| 0xD41936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 |
| 0xD41937 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Undefiniert | 1 |
| 0xD419AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD41A28 | Botschaftsfehler (Status System Parken, ID: ST_SY_PKG) - Timeout | 1 |
| 0xD41A2C | Signalfehler (Status System Parken, ID: ST_SY_PKG) - Ungültig | 1 |
| 0xD41A2D | Signalfehler (Status System Parken, ID: ST_SY_PKG) - Undefiniert | 1 |
| 0xD41A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 |
| 0xD41A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 |
| 0xD41A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Qualifier | 1 |
| 0xD41A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Qualifier | 1 |
| 0xD41A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Qualifier | 1 |
| 0xD41A84 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Qualifier | 1 |
| 0xD41A98 | Signalfehler (Wegstrecke Rad, ID: MILE_WHL) - Qualifier | 1 |
| 0xD41B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xD41B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xD42C05 | Signalfehler (Außentemperatur, ID: A_TEMP) - Undefiniert | 1 |
| 0xD42C0A | Signalfehler (Blinken, ID: BLINKEN) - Undefiniert | 1 |
| 0xD42C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD42C67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Qualifier | 1 |
| 0xD42D47 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Qualifier | 1 |
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

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | D4043F | D40449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4045F | D40468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4040B | D40414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D40487 | D4048F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D40469 | D40472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4041F | D4043E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4050B | D40514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D40473 | D4047C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D40415 | D4041E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D40501 | D4050A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4047D | D40486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D40401 | D4040A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | D40C00 | D413FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | D41400 | D443FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D40BFF | D40BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D41400 | D443FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 803180 | 80337F | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| KomponentenDTC | 481E00 | 481F7F | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | BETRIEBSSPANNUNG | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4029 | TEMPERATUR_STEUERGERAET | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x5000 | MINUTE | min | - | unsigned char | - | 1 | 1 | 0 |
| 0x5001 | SEKUNDE | s | - | unsigned char | - | 1 | 1 | 0 |
| 0x5002 | STUNDE | h | - | unsigned char | - | 1 | 1 | 0 |
| 0x5003 | TAG | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5004 | MONAT | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5005 | STATUS FR TRANSCEIVER DIAGNOSE | - | high | unsigned int | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x481E0A | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Schreiben gescheitert | 0 |
| 0x481E0B | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Lesen gescheitert | 0 |
| 0x481E0C | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Kontrolle gescheitert | 0 |
| 0x481E0D | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Loeschen gescheitert | 0 |
| 0x481E0E | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Schreiben gesamt gescheitert | 0 |
| 0x481E0F | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Lesen gesamt gescheitert | 0 |
| 0x481E10 | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Nichtflüchtiger Speicher fehlerhaft - Falsche Config-ID | 0 |
| 0x481E1C | Diagnosemaster - DM EVENT ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x481E34 | Diagnosemaster - Warteschlange voll | 0 |
| 0x481E35 | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x481E36 | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Flashprozess fehlerhaft - Loeschen gescheitert | 0 |
| 0x481E37 | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Flashprozess fehlerhaft - Schreiben gescheitert | 0 |
| 0x481E38 | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Flashprozess fehlerhaft - Lesen gescheitert | 0 |
| 0x481E39 | Steuergerät Intern - Zulieferer - Steuergerät Intern - Zulieferer - Flashprozess fehlerhaft - Vergleich gescheitert | 0 |
| 0x481E47 | PMA Funktion Korrekturfaktor GPS fehlt | 0 |
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
| 0x170C | BETRIEBSSPANNUNG | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | STATUS_STEUERGERAET | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4029 | TEMPERATUR_STEUERGERAET | °C | high | unsigned char | - | 5 | 10 | -40 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PMA_SENSORTEST | 0xA054 | - | Starten, Stoppen und Status Funktionsprüfung Sensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA054 |
| KORREKTURFAKTOR_RESET | 0xA1DD | - | KORREKTURFAKTOR_RESET | - | - | - | - | - | - | - | - | - | 31 | - | - |
| PIEZOTEST | 0xA1DE | - | PIEZOTEST | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1DE | RES_0xA1DE |
| PMA_SENSOR_UPDATE | 0xA374 | - | Starten und Status Sensor Software Update (links und rechts nacheinander) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA374 |
| _PMA_SENSORDATEN | 0xD682 | - | Auslesen Daten Sensor (links + rechts) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD682 |
| _PMA_PARKLUECKE | 0xD683 | - | Auslesen letzte Parklücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD683 |
| PMA_TEMPERATUR_SENSOREN | 0xD684 | - | Auslesen Temperatur Sensor (links + rechts) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD684 |
| PMA_SPANNUNG_SENSOREN | 0xD685 | - | Auslesen Spannung Sensor (links + rechts) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD685 |
| KORREKTURFAKTOR | 0xD687 | - | Setzt den gewünschten Korrekturfaktor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD687 | - |
| KORREKTURFAKTOR_AKTUALISIERUNG | 0xD688 | - | Schaltet die Aktualisierung des Korrektorfaktors an oder aus: | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD688 | - |
| LESEN_KORREKTURFAKTOR | 0xD689 | STAT_COR_FACT_WHL_MAG_WERT | Liest den momentanen Korrekturfaktor | % | - | high | unsigned char | - | 0.1 | 1.0 | 88.0 | - | 22 | - | - |
| VIN | 0xF190 | STAT_FAHRGESTELLNUMMER_WERT | Fahrgestellnummer | - | - | high | unsigned char | - | 1 | 1 | 0 | 0x2c | 22 | - | - |
| _TEMPERATUR_STEUERGERAET | 0x4029 | STAT_TEMP_SG_WERT | Temperatur des Steuergeräts | °C | - | high | unsigned char | - | 5 | 10 | -40 | 0x2c | 22 | - | - |
| BETRIEBSSPANNUNG | 0x170C | STAT_UBAT_WERT | Betriebsspannung am Steuergeräts | V | - | - | unsigned int | - | - | 1000 | - | 0x2c | 22 | - | - |
| _CTRL_LIN_MASTER | 0xf101 | - | Control the LIN Master | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf101 |
| _CTRL_SENSORS | 0xf102 | - | Sets Sensors to Measure/Alive Mode | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf102 |
| _EOL_TEST | 0xf100 | - | Switches functionalities on for EOL Tests | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf100 |
| _SENSOR_SWITCH | 0xf105 | - | switches sensor on and off | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf105 |
| _SENSOR_DEJUSTAGE | 0xf106 | - | Setzen der Sensordejustage | - | - | - | - | - | - | - | - | 0x2c | 2E | ARG_0xf106 | - |
| _WRITE_SERIAL | 0xf155 | - | Freischalten der Seriennummer | - | - | - | - | - | - | - | - | 0x2c | 2E | ARG_0xf155 | - |
| _DEJUSTAGE_RESET | 0xf108 | - | Reset der Sensordejustagezaehler | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf108 |
| _DEJUSTAGE_LESEN | 0x5005 | - | Lesen der aktuellen Dejustagezaehler | - | - | - | - | - | - | - | - | 0x2c | 22 | - | RES_0x5005 |
| SENSOR_TEMPERATURFEHLERZAEHLER | 0x5006 | - | Lesen der Sensor Temperaturfehlerzaehler | - | - | - | - | - | - | - | - | 0x2c | 22 | - | RES_0x5006 |
| _RESET_SENSOR_PARAM | 0xf156 | - | Reset der Sensortemperaturfehlerzaehler | - | - | - | - | - | - | - | - | 0x2c | 2E | ARG_0xf156 | - |
| READ_INTERNAL_SENS_DIAG | 0x5007 | - | Lesen der internen Sensordiagnose | - | - | - | - | - | - | - | - | 0x2c | 22 | - | RES_0x5007 |
| _TEST_SENSORUPDATE | 0xf107 | - | Startet automatisch das Update der Sensoren abwechselnd rechts und links mit jedem AUfruf | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf107 |
| _SENSOR_AUSSCHWINGZEIT | 0xf109 | - | spezieller SG Modus zum Ausgeben der Auschwingzeiten auf dem FR Bus; Parken nicht möglich | - | - | - | - | - | - | - | - | 0x2c | 31 | - | RES_0xf109 |

### RES_0XF101

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routinenstatus |

### RES_0XF102

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routinenstatus |

### RES_0XF100

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routinenstatus |

### RES_0XF105

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routinenstatus |

### ARG_0XF106

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_RECHTS_DEJUSTAGE | - | - | signed char | - | - | 1 | 10 | - | - | - | Dejustageoffset des rechten Sensors |
| SENSOR_LINKS_DEJUSTAGE | - | - | signed char | - | - | 1 | 10 | - | - | - | Dejustageoffset des linken Sensors |

### ARG_0XF155

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SN1 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN2 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN3 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN4 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN5 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN6 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN7 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN8 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN9 | - | - | unsigned char | - | - | - | - | - | - | - | - |
| SN10 | - | - | unsigned char | - | - | - | - | - | - | - | - |

### RES_0XF108

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routinenstatus |

### RES_0X5005

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_RECHTS_DEJUSTAGEZAEHLER_WERT | - | high | unsigned char | - | - | - | - | - | Wert des rechten Sensordejustagezaehlers |
| STAT_SENSOR_LINKS_DEJUSTAGEZAEHLER_WERT | - | high | unsigned char | - | - | - | - | - | Wert des linken Sensordejustagezaehlers |

### RES_0X5006

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_RECHTS_ZAEHLER_WERT | - | high | unsigned int | - | - | - | - | - | Wert des rechten Zaehlers |
| STAT_SENSOR_LINKS_ZAEHLER_WERT | - | high | unsigned int | - | - | - | - | - | Wert des linken Zaehlers |

### ARG_0XF156

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_PARAM | - | - | unsigned char | - | TAB_SENSOR_PARAM | - | - | - | - | - | 1 = Temperaturfehlerzaehler, 2 = Flashresult |
| SENSOR_SIDE | - | - | unsigned char | - | TAB_SENSOR_SIDE | - | - | - | - | - | 1 = rechter Sensor, 2 = linker Sensor, 3 = beide Sensoren |

### RES_0X5007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_TEMEPRATUR_SENSOR_LINKS_WERT | °C | - | unsigned char | - | - | - | - | - | Sensor links Temperatur |
| STAT_PMA_U_SENSOR_LINKS_WERT | V | high | unsigned int | - | - | 346 | 100000 | - | Sensor links Spannung |
| STAT_SENSOR_LINKS_IMPULSANTWORT_WERT | kHz | high | unsigned int | - | - | 4883 | 100000 | - | Sensor links Impulsantwort |
| STAT_SENSOR_LINKS_SETTLING_TIME_WERT | ms | - | unsigned char | - | - | - | 20 | - | Sensor links  SettlingTime |
| STAT_SENSOR_LINKS_BLINDHEIT | 0-n | - | char | - | TAB_SENSOR_BLINDHEIT | - | - | - | Sensor links  SettlingErrCode |
| STAT_SENSOR_LINKS_FLASH | 0-n | - | char | - | TAB_SENSOR_ERROR_CODE | - | - | - | Sensor links Flash Error |
| STAT_SENSOR_LINKS_PARAMETER | 0-n | - | char | - | TAB_SENSOR_ERROR_CODE | - | - | - | Sensor links Parameter Error |
| STAT_SENSOR_LINKS_PASSWORT | 0-n | - | char | - | TAB_SENSOR_ERROR_CODE | - | - | - | Sensor links Password Error |
| STAT_SENSOR_LINKS_MEDIAN_WERT | - | - | unsigned char | - | - | 2 | - | - | Sensor links  SignalNoiseMedian |
| STAT_SENSOR_LINKS_PERCENT_WERT | % | - | unsigned char | - | - | - | - | - | Sensor links  SignalNoisePercentLevel |
| STAT_SENSOR_LINKS_PATH_WERT | - | - | unsigned char | - | - | - | - | - | Sensor links  SignalPathTestLevel |
| STAT_PMA_TEMPERATUR_SENSOR_RECHTS_WERT | °C | - | unsigned char | - | - | - | - | - | Sensor rechts Temperatur |
| STAT_PMA_U_SENSOR_RECHTS_WERT | V | high | unsigned int | - | - | 346 | 100000 | - | Sensor rechts Spannung |
| STAT_SENSOR_RECHTS_IMPULSANTWORT_WERT | kHz | high | unsigned int | - | - | 4883 | 100000 | - | Sensor rechts Impulsantwort |
| STAT_SENSOR_RECHTS_SETTLING_TIME_WERT | ms | - | unsigned char | - | - | - | 20 | - | Sensor rechts  SettlingTime |
| STAT_SENSOR_RECHTS_BLINDHEIT | 0-n | - | char | - | TAB_SENSOR_BLINDHEIT | - | - | - | Sensor rechts  SettlingErrCode |
| STAT_SENSOR_RECHTS_FLASH | 0-n | - | char | - | TAB_SENSOR_ERROR_CODE | - | - | - | Sensor rechts Flash Error |
| STAT_SENSOR_RECHTS_PARAMETER | 0-n | - | char | - | TAB_SENSOR_ERROR_CODE | - | - | - | Sensor rechts Parameter Error |
| STAT_SENSOR_RECHTS_PASSWORT | 0-n | - | char | - | TAB_SENSOR_ERROR_CODE | - | - | - | Sensor rechts Password Error |
| STAT_SENSOR_RECHTS_MEDIAN_WERT | - | - | unsigned char | - | - | 2 | - | - | Sensor rechts  SignalNoiseMedian |
| STAT_SENSOR_RECHTS_PERCENT_WERT | % | - | unsigned char | - | - | - | - | - | Sensor rechts  SignalNoisePercentLevel |
| STAT_SENSOR_RECHTS_PATH_WERT | - | - | unsigned char | - | - | - | - | - | Sensor rechts  SignalPathTestLevel |

### TAB_SENSOR_ERROR_CODE

| WERT | TEXT |
| --- | --- |
| 0x0 | kein Fehler |
| 0x1 | Fehler |
| 0xff | Falsche Antwort |

### TAB_SENSOR_BLINDHEIT

| WERT | TEXT |
| --- | --- |
| 0x0 | kein Fehler |
| 0x1 | teilweise beschaedigt |
| 0x2 | Schaden mit Blindheit |
| 0x3 | tbd |
| 0xff | falscher Wert |

### TAB_SENSOR_PARAM

| WERT | TEXT |
| --- | --- |
| 0x1 | Temperaturfehlerzaehler |
| 0x2 | Flashresult |
| 0xff | falscher Parameter |

### TAB_SENSOR_SIDE

| WERT | TEXT |
| --- | --- |
| 0x1 | rechter Sensor |
| 0x2 | linker Sensor |
| 0x3 | beide Sensoren |
| 0xff | falsche Auswahl |

### RES_0XF107

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routinenstatus |

### RES_0XF109

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | - |

### ARG_0XA1DE

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ROUTINE_LAUFZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ROUTINE_LAUFZEIT in Sekunden (z.B. 20s) |

### ARG_0XD687

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COR_FACT_WHL_MAG | % | high | unsigned char | - | - | 10.0 | 1.0 | -880.0 | 88.0 | 112.0 | Gewünschter Korrekturfaktor |

### ARG_0XD688

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | - Beschreibung: Schaltet die Aktualisierung des Korrektorfaktors an oder aus:  - 0 = AUS = Aktualisierung nicht aktiv,  - 1 = EIN = Aktualisierung aktiv |

### RES_0XA054

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA1DE

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIEZOTEST_ROUTINE_RESULTS | - | - | + | 0-n | high | unsigned char | - | PIESOTEST_ROUTINE_RESULTS | - | - | - | STAT_piezotest_ROUTINE_RESULTS |

### RES_0XA374

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XD682

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_AUSSCHWINGZEIT_LINKS_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausschwingzeit Membran links |
| STAT_PMA_ABSTAND_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abstand des detektierten Objekts mit dem kürzesten Abstand links (65533 = kein Objekt; 65534 = nicht verbaut; 65535 = Ungültig) |
| STAT_PMA_AUSSCHWINGZEIT_RECHTS_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausschwingzeit Membran rechts |
| STAT_PMA_ABSTAND_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abstand des detektierten Objekts mit dem kürzesten Abstand rechts (65533 = kein Objekt; 65534 = nicht verbaut; 65535 = Ungültig) |

### RES_0XD683

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_PARKLUECKE_LAENGE_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Länge Parklücke links |
| STAT_PMA_PARKLUECKE_TIEFE_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tiefe Parklücke links |
| STAT_PMA_STARTPOSITION_X_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | X Abstand Mittelpunkt Hinterachse zum Koordinatensystem P links |
| STAT_PMA_STARTPOSITION_Y_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Y Abstand Mittelpunkt Hinterachse zum Koordinatensystem P links |
| STAT_PMA_STARTWINKEL_LINKS_WERT | ° | - | int | - | - | 1.0 | 10.0 | 0.0 | Verdrehung Fahrzeuglängsachse zum Koordinatensystem P links |
| STAT_PMA_PARKLUECKE_LAENGE_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Länge Parklücke rechts |
| STAT_PMA_PARKLUECKE_TIEFE_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tiefe Parklücke rechts |
| STAT_PMA_STARTPOSITION_X_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | X Abstand Mittelpunkt Hinterachse zum Koordinatensystem P rechts |
| STAT_PMA_STARTPOSITION_Y_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Y Abstand Mittelpunkt Hinterachse zum Koordinatensystem P rechts |
| STAT_PMA_STARTWINKEL_RECHTS_WERT | ° | - | int | - | - | 1.0 | 10.0 | 0.0 | Verdrehung Fahrzeuglängsachse zum Koordinatensystem P rechts |

### RES_0XD684

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_TEMPERATUR_SENSOR_LINKS_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Sensor links |
| STAT_PMA_TEMPERATUR_SENSOR_RECHTS_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Sensor rechts |

### RES_0XD685

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_U_SENSOR_LINKS_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Sensorversorgung links |
| STAT_PMA_U_SENSOR_RECHTS_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Sensorversorgung rechts |

### PIESOTEST_ROUTINE_RESULTS

| WERT | TEXT |
| --- | --- |
| 1 | Job aktiv |
| 2 | Beide Sensoren in Ordnung |
| 3 | Sensor rechts in Ordnung, links nicht in Ordnung |
| 4 | Sensor links in Ordnung, rechts nicht in Ordnung |
| 5 | beide Sensoren nicht in Ordnung |
| 6 | undefiniert |

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
