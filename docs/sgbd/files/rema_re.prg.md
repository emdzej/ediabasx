# rema_re.prg

## General

|  |  |
| --- | --- |
| File | rema_re.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 76 |
| Origin | BMW EI-622 E.Schuster |
| Revision | 2.001 |
| Author | Autoliv System&Requirements B.Knörle |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Reversibler elektromotorischer Aufroller Rechts - SGBD-Index  0F1948 hex |  |  |
| ORIGIN | string | BMW EI-622 E.Schuster |  |  |
| REVISION | string | 2.001 |  |  |
| AUTHOR | string | Autoliv System&Requirements B.Knörle |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.34 |  |  |
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

### ARG_0X401B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PCR_INHC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Nach Erreichen einer definierten Anzahl an PreCrash Auslösungen wird das Steuergerät für diese Funktion gesperrt. |
| BSR_INHC_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Nach Erreichen einer definierten Anzahl an BSR Auslösungen wird das Steuergerät für diese Funktion gesperrt. |

### ARG_0X401C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BP_INHC_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Zähler der Gürt parken Aktivierungen. Wenn dieser Zähler einen definierten Grenzwert erreicht, wird der Gürt parken-Funktion deaktiviert. |

### ARG_0X401D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INT_SYS_ZEIT_POR_HH_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 23.0 | ECU-interne Systemzeit (h) =Zeit nach Power-on/Reset |
| INT_SYS_ZEIT_POR_MM_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 59.0 | ECU-interne Systemzeit (min) =Zeit nach Power-on/Reset |
| INT_SYS_ZEIT_POR_SS_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 59.0 | ECU-interne Systemzeit (s) =Zeit nach Power-on/Reset |
| INT_SYS_ZEIT_POR_CC_WERT | ms | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | 990.0 | ECU-interne Systemzeit (ms) =Zeit nach Power-on/Reset |

### ARG_0XA510

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PCR_PROFIL | + | - | 0-n | high | unsigned char | - | TAB_PRECRASH_BELT_PROFILE | - | - | - | - | - | Nummer des PreCrash Profils |
| AKTIVIERUNGSZEIT_WERT | + | - | ms | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | - | - | PreCrash Dauer Auflösung 100ms |

### ARG_0XA512

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INHALT_CRASH_STATUS | + | - | 0-n | high | unsigned char | - | TAB_CR_NACHRICHT_EXT_ACR | - | - | - | - | - | Crash Status und Trigger der Funktion ReMA und/oder FH/SHD |
| INHALT_FORCE | + | - | 0-n | high | unsigned char | - | TAB_FORCE_EXT_ACT | 1.0 | 1.0 | 0.0 | - | - | Erforderlicher PreCrash Level |

### ARG_0XA513

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GURTPARKEN_BETRIEBSZUSTAND | + | - | 0-n | high | unsigned char | - | TAB_GURTPARKEN_BETRIEBSZUSTAND | - | - | - | - | - | Info zum Betriebszustand des REMA |

### ARG_0XF010

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PCR_PROFIL | + | - | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | - | - | - | - | - | Nummer des PreCrash Profils |
| AKTIVIERUNGSDAUER_WERT | + | - | ms | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | - | - | PreCrash Dauer (Auflösung 100ms) |

### ARG_0XF701

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONFIG_PERIOD_WERT | + | + | ms | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | - | - | Zykluszeit der Nachricht = ((FLOOR((CONFIG_PERIOD/25);1)+1)*5ms |
| COD_DATA_BLOCK_MSB_WERT | + | + | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Kodierdatenblöcke 24...17 entsprechend Bit 7...0 |
| COD_DATA_BLOCK_MID_WERT | + | + | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Kodierdatenblöcke 16...9 entsprechend Bit 7...0 |
| COD_DATA_BLOCK_LSB_WERT | + | + | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Kodierdatenblöcke 8...1 entsprechend Bit 7...0 |

### ARG_0XF704

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONFIG_PERIOD_WERT | + | + | ms | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Zykluszeit der Nachricht = ((FLOOR((CONFIG_PERIOD/10);1)+1)*10ms |
| MSMNT_ADR1_WERT | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse des 1-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |
| MSMNT_ADR2_WERT | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse des 2-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |
| MSMNT_ADR3_WERT | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse des 3-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |
| MSMNT_ADR4_WERT | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse des 4-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
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
| 0x024E00 | Energiesparmode aktiv | 0 |
| 0x02FF4E | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x481900 | Interner Steuergerätefehler | 0 |
| 0x481901 | PIA_E_IO_ERROR | 0 |
| 0x481903 | Interner Softwarefehler | 0 |
| 0x481904 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x481905 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x481906 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x481907 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x481908 | Codierung: Signatur für Daten ungültig | 0 |
| 0x481914 | Maximale Anzahl Aktivierungen Pre-Crash erreicht | 0 |
| 0x481915 | Maximale Anzahl Aktivierungen Gurtlose-entfernen erreicht | 0 |
| 0x481925 | Maximale Anzahl Aktivierungen Gurt-parken erreicht | 0 |
| 0xDC840A | FA-CAN Control Module Bus OFF | 0 |
| 0xDC8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xDC9400 | Botschaft (0x104, PreCrash Erkennung): Ausfall | 1 |
| 0xDC9401 | Botschaft (0x104, PreCrash Erkennung): Prüfsummenfehler | 1 |
| 0xDC9402 | Signal (0x104) ungültig: Alive_PreCrash_Erkennung | 1 |
| 0xDC9403 | Botschaft (0x104, PreCrash Erkennung): Alive-Zähler-Fehler | 1 |
| 0xDC9404 | Signal (0x104) ungültig: Ist_Verzögerung_I-Brake | 1 |
| 0xDC9405 | Signal (0x104) ungültig: Qualifier_Funktion_PreCrash_Erkennung | 1 |
| 0xDC9406 | Signal (0x104) ungültig: Zeit_Kollision_Voraussage | 1 |
| 0xDC9407 | Signal (0x104) ungültig: Annäherungsgeschwindigkeit_PreCrash | 1 |
| 0xDC9410 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDC9411 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Prüfsummenfehler | 1 |
| 0xDC9412 | Signal (0x19F) ungültig: Alive_Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDC9413 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Alive-Zähler-Fehler | 1 |
| 0xDC9414 | Signal (0x19F) ungültig: Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDC9416 | Signal (0x19F) ungültig: Qualifier_Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDC9420 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDC9421 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Prüfsummenfehler | 1 |
| 0xDC9422 | Signal (0x199) ungültig: Alive_Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDC9423 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Alive-Zähler-Fehler | 1 |
| 0xDC9424 | Signal (0x199) ungültig: Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDC9426 | Signal (0x199) ungültig: Qualifier_Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDC9430 | Botschaft (0x19A, Querbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDC9431 | Botschaft (0x19A, Querbeschleunigung Schwerpunkt): Prüfsummenfehler | 1 |
| 0xDC9432 | Signal (0x19A) ungültig: Alive_Querbeschleunigung_Schwerpunkt | 1 |
| 0xDC9433 | Botschaft (0x19A, Querbeschleunigung Schwerpunkt): Alive-Zähler-Fehler | 1 |
| 0xDC9434 | Signal (0x19A) ungültig: Querbeschleunigung_Schwerpunkt | 1 |
| 0xDC9436 | Signal (0x19A) ungültig: Qualifier_Querbeschleunigung_Schwerpunkt | 1 |
| 0xDC9440 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDC9441 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Prüfsummenfehler | 1 |
| 0xDC9442 | Signal (0x1A1) ungültig: Alive_Geschwindigkeit_Fahrzeug | 1 |
| 0xDC9443 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Alive-Zähler-Fehler | 1 |
| 0xDC9445 | Signal (0x1A1) ungültig: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xDC9446 | Signal (0x1A1) ungültig: Qualifier_Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xDC9447 | Signal (0x1A1) ungültig: Fahrzustand_Fahrzeug | 1 |
| 0xDC9450 | Botschaft (0x302, Lenkwinkel Vorderachse Effektiv): Ausfall | 1 |
| 0xDC9451 | Botschaft (0x302, Lenkwinkel Vorderachse Effektiv): Prüfsummenfehler | 1 |
| 0xDC9452 | Signal (0x302) ungültig: Alive_Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xDC9453 | Botschaft (0x302, Lenkwinkel Vorderachse Effektiv): Alive-Zähler-Fehler | 1 |
| 0xDC9454 | Signal (0x302) ungültig: Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xDC9455 | Signal (0x302) ungültig: Qualifier_Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xDC9460 | Botschaft (0xEF, Ist Bremsmoment Summe): Ausfall | 1 |
| 0xDC9461 | Botschaft (0xEF, Ist Bremsmoment Summe): Prüfsummenfehler | 1 |
| 0xDC9462 | Signal (0xEF) ungültig: Alive_Ist_Bremsmoment_Summe | 1 |
| 0xDC9463 | Botschaft (0xEF, Ist Bremsmoment Summe): Alive-Zähler-Fehler | 1 |
| 0xDC9464 | Signal (0xEF) ungültig: Ist_Bremsmoment_Summe | 1 |
| 0xDC9465 | Signal (0xEF) ungültig: Qualifier_Ist_Bremsmoment_Summe | 1 |
| 0xDC9468 | Signal (0xEF) ungültig: Ist_Bremsmoment_Summe_Fahrerwunsch | 1 |
| 0xDC9469 | Signal (0xEF) ungültig: Qualifier_Ist_Bremsmoment_Summe_Fahrerwunsch | 1 |
| 0xDC9470 | Botschaft (0xD9, Winkel Fahrpedal): Ausfall | 1 |
| 0xDC9471 | Botschaft (0xD9, Winkel Fahrpedal): Prüfsummenfehler | 1 |
| 0xDC9472 | Signal (0xD9) ungültig: Alive_Winkel_Fahrpedal | 1 |
| 0xDC9473 | Botschaft (0xD9, Winkel Fahrpedal): Alive-Zähler-Fehler | 1 |
| 0xDC9475 | Signal (0xD9) ungültig: Ist_Winkel_Fahrpedal | 1 |
| 0xDC9476 | Signal (0xD9) ungültig: Qualifier_Ist_Winkel_Fahrpedal | 1 |
| 0xDC9477 | Signal (0xD9) ungültig: Ist_Winkel_Fahrpedal_Virtuell | 1 |
| 0xDC9478 | Signal (0xD9) ungültig: Gradient_Ist_Winkel_Fahrpedal | 1 |
| 0xDC9480 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xDC9481 | Botschaft (0x12F, Klemmen): Prüfsummenfehler | 1 |
| 0xDC9482 | Signal (0x12F) ungültig: Alive_Zähler_Klemme | 1 |
| 0xDC9483 | Botschaft (0x12F, Klemmen): Alive-Zähler-Fehler | 1 |
| 0xDC9484 | Signal (0x12F) ungültig: Status_Fahrzeug_Zustand | 1 |
| 0xDC9485 | Signal (0x12F) ungültig: Status_Klemme | 1 |
| 0xDC9486 | Signal (0x12F) ungültig: Steuerung_Motor_Stop | 1 |
| 0xDC9487 | Signal (0x12F) ungültig: Status_Startbedingung_Kraftschluss | 1 |
| 0xDC9488 | Signal (0x12F) ungültig: Status_Start-Stop-Taster | 1 |
| 0xDC9490 | Botschaft (0x297, Status Gurt Kontakt Sitzbelegung): Ausfall | 1 |
| 0xDC9491 | Signal (0x297) ungültig: Status_Gurtschloß_Schalter_FA | 1 |
| 0xDC9492 | Signal (0x297) ungültig: Status_Gurtschloß_Schalter_BF | 1 |
| 0xDC9493 | Botschaft (0x297, Status Gurt Kontakt Sitzbelegung): Alive-Zähler-Fehler | 1 |
| 0xDC9494 | Botschaft (0x297, Status Gurt Kontakt Sitzbelegung): Prüfsummenfehler | 1 |
| 0xDC949F | Signal (0x297) ungültig: Alive_Zähler_Status_Gurt_Kontakt_Sitzbelegung | 1 |
| 0xDC94B0 | Botschaft (0x1FE, Crash): Ausfall | 1 |
| 0xDC94B1 | Signal (0x1FE) ungültig: Status_Überschreitung_Schwellwert_Beschleunigung | 1 |
| 0xDC94B2 | Signal (0x1FE) ungültig: Anzahl_Ausgelöste_Zündpillen | 1 |
| 0xDC94C2 | Signal (0x3A0) ungültig: Status_Energie_FZM | 1 |
| 0xDC94C3 | Signal (0x3A0) ungültig: Status_Sperre_Fehlerspeicher_FZM | 1 |
| 0xDC94D0 | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0xDC94D1 | Signal (0x328) ungültig: Zeit_Sekunde_Zähler_Relativ | 1 |
| 0xDC94E0 | Botschaft (0x18D, Fahrzeug Dynamik Daten Geschätzt): Ausfall | 1 |
| 0xDC94E1 | Signal (0x18D) ungültig: Schwimmwinkel_Geschätzt | 1 |
| 0xDC94E2 | Signal (0x18D) ungültig: Qualifier_Fahrzeug_Dynamik_Daten_Geschätzt | 1 |
| 0xDC94E3 | Signal (0x18D) ungültig: Schwimmwinkel_Geschätzt_Fehler_Amplitude | 1 |
| 0xDC94E4 | Signal (0x18D) ungültig: Schwimmwinkelgeschwindigkeit_Geschätzt | 1 |
| 0xDC94E5 | Signal (0x18D) ungültig: Quergeschwindigkeit_Geschätzt_Fehler_Amplitude | 1 |
| 0xDC94E6 | Signal (0x18D) ungültig: Schwimmwinkelgeschwindigkeit_Geschätzt_Fehler_Amplitude | 1 |
| 0xDC94E7 | Signal (0x18D) ungültig: Quergeschwindigkeit_Geschätzt | 1 |
| 0xDC94F0 | Botschaft (0x330, KilometerstandReichweite): Ausfall | 1 |
| 0xDC94F1 | Signal (0x330) ungültig: Wegstrecke_Kilometer | 1 |
| 0xDC9500 | Botschaft (0x2CA,  Außentemperatur): Ausfall | 1 |
| 0xDC9501 | Signal (0x2CA) ungültig: Temperatur_Außen | 1 |
| 0xDC9530 | Botschaft (0x97, Status Precrash Master): Ausfall | 1 |
| 0xDC9531 | Botschaft (0x97, Status Precrash Master): Prüfsummenfehler | 1 |
| 0xDC9532 | Signal (0x97) ungültig: Alive_Status_PreCrash_Master | 1 |
| 0xDC9533 | Botschaft (0x97, Status Precrash Master): Alive-Zähler-Fehler | 1 |
| 0xDC9534 | Signal (0x97) ungültig: Status_Objekt_Typ_PreCrash_Master | 1 |
| 0xDC9535 | Signal (0x97) ungültig: Status_Position_Objekt_PreCrash_Master | 1 |
| 0xDC9536 | Signal (0x97) ungültig: Status_Winkel_Objekt_PreCrash_Master | 1 |
| 0xDC9537 | Signal (0x97) ungültig: Status_Annäherungsgeschwindigkeit_Objekt_PreCrash_Master | 1 |
| 0xDC9538 | Signal (0x97) ungültig: Steuerung_Funktion_PreCrash | 1 |
| 0xDC9539 | Signal (0x97) ungültig: Vorgabe_Kraft_Kennlinie_Gurt_PreCrash | 1 |
| 0xDC9540 | Botschaft (0x98,  Status Precrash Sensor): Ausfall | 1 |
| 0xDC9541 | Botschaft (0x98, Status Precrash Sensor): Prüfsummenfehler | 1 |
| 0xDC9542 | Signal (0x98) ungültig: Alive_Status_PreCrash_Sensor | 1 |
| 0xDC9543 | Botschaft (0x98, Status Precrash Sensor): Alive-Zähler-Fehler | 1 |
| 0xDC9544 | Signal (0x98) ungültig: Status_Objekt_Typ_PreCrash_Sensor | 1 |
| 0xDC9545 | Signal (0x98) ungültig: Status_Position_Objekt_PreCrash_Sensor | 1 |
| 0xDC9546 | Signal (0x98) ungültig: Status_Winkel_Objekt_PreCrash_Sensor | 1 |
| 0xDC9547 | Signal (0x98) ungültig: Status_Annäherungsgeschwindigkeit_Objekt_PreCrash_Sensor | 1 |
| 0xDC9548 | Signal (0x98) ungültig: Status_Aufprallzeit_Objekt_PreCrash_Sensor | 1 |
| 0xDC9549 | Signal (0x98) ungültig: Qualifier_Funktion_PreCrash | 1 |
| 0xDC9550 | Botschaft (0x19B, Steuerung Crash): Ausfall | 1 |
| 0xDC9551 | Botschaft (0x19B, Steuerung Crash): Prüfsummenfehler | 1 |
| 0xDC9552 | Signal (0x19B) ungültig: Alive_Steuerung_Crash | 1 |
| 0xDC9553 | Botschaft (0x19B, Steuerung Crash): Alive-Zähler-Fehler | 1 |
| 0xDC9554 | Signal (0x19B) ungültig: Status_Überschreitung_Beschleunigung_Schwellwert | 1 |
| 0xDC9555 | Signal (0x19B) ungültig: Steuerung_PreCrash_Master | 1 |
| 0xDC9570 | Botschaft (0x23F, Status Parametrisierung I-Brake): Ausfall | 1 |
| 0xDC9571 | Signal (0x23F) ungültig: Alive_Status_Parametrisierung_I-Brake | 1 |
| 0xDC9573 | Botschaft (0x23F, Status Parametrisierung I-Brake): Alive-Zähler-Fehler | 1 |
| 0xDC9574 | Signal (0x23F) ungültig: Qualifier_Service_Vorbefüllung_Bremse | 1 |
| 0xDC9575 | Signal (0x23F) ungültig: Qualifier_Service_Parametrisierung_DBC | 1 |
| 0xDC957F | Signal (0x3A7) ungültig: Alive_Konfiguration_Schalter_Fahrdynamik | 1 |
| 0xDC9580 | Botschaft (0x3A7, Anforderung Konfiguration Schalter Fahrdynamik): Ausfall | 1 |
| 0xDC9581 | Botschaft (0x3A7, Anforderung Konfiguration Schalter Fahrdynamik): Prüfsummenfehler | 1 |
| 0xDC9583 | Botschaft (0x3A7, Anforderung Konfiguration Schalter Fahrdynamik): Alive-Zähler-Fehler | 1 |
| 0xDC9584 | Signal (0x3A7) ungültig: Anforderung_Konfiguration_Schalter_Fahrdynamik | 1 |
| 0xDC958F | Signal (0x3F9) ungültig: Alive_Zähler_Daten_Antriebstrang_2 | 1 |
| 0xDC9590 | Botschaft (0x3B0, Status Gang Rückwärts): Ausfall | 1 |
| 0xDC9594 | Signal (0x3B0) ungültig: Status_Gang_Rückwärts | 1 |
| 0xDC95A0 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xDC95A1 | Botschaft (0x3F9, Daten Antriebsstrang 2): Prüfsummenfehler | 1 |
| 0xDC95A3 | Botschaft (0x3F9, Daten Antriebsstrang 2): Alive-Zähler-Fehler | 1 |
| 0xDC95A4 | Signal (0x3F9) ungültig: Status_Gangwahl_Antrieb | 1 |
| 0xDC95B0 | Botschaft (0x2FC, STAT_ZV_KLAPPEN): Ausfall | 1 |
| 0xDC95B1 | Signal (0x2FC) ungültig: ST_DSW_DRD | 1 |
| 0xDC95B2 | Signal (0x2FC) ungültig: ST_DSW_PSD | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4006 | STAT_SPANNUNG_KL30B_WERT | mV | High | unsigned char | - | 100.0 | 1.0 | 0.0 |
| 0x4007 | STAT_SPANNUNG_KL30_WERT | mV | High | unsigned char | - | 100.0 | 1.0 | 0.0 |
| 0x4009 | STAT_EXT_TEMPERATUR_WERT | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x400A | STAT_INT_TEMPERATUR_WERT | °C | High | unsigned char | - | 1.0 | 1.0 | -80.0 |
| 0x401D | STAT_INT_SYSTEMZEIT_WERT | ms | High | signed long | - | 10.0 | 1.0 | 0.0 |

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
| 0x4E1710 | A/D Wandler: Fehler | 0 |
| 0x4E1711 | Gurtsensor: Fehler | 0 |
| 0x4E1716 | Interner Takt: Fehler | 0 |
| 0x4E1717 | Interne Temperaturmessung: nicht verfügbar | 0 |
| 0x4E1718 | Signal POWER_STAGE_ENABLE: Fehler | 0 |
| 0x4E1719 | POWER_STAGE: Unterbrechung | 0 |
| 0x4E171A | POWER_STAGE: Kurzschluß | 0 |
| 0x4E171B | POWER_STAGE: Selbstschutz | 0 |
| 0x4E171C | PWM Zyklus: fehlerhaft | 0 |
| 0x4E171D | Systemtemperatur: Grenzwert erreicht | 0 |
| 0x4E1720 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x4E1722 | FEE_E_WRITE_FAILED | 0 |
| 0x4E1723 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x4E1724 | NVM_E_REQ_FAILED | 0 |
| 0x4E1725 | PIA_E_IO_ERROR | 0 |
| 0x4E1726 | Flash Speicher: beschädigt | 0 |
| 0x4E1727 | FLS_E_COMPARE_FAILED | 0 |
| 0x4E1728 | FLS_E_ERASE_FAILED | 0 |
| 0x4E1729 | FLS_E_READ_FAILED | 0 |
| 0x4E172A | FLS_E_UNEXPECTED_FLASH_ID | 0 |
| 0x4E172B | FLS_E_WRITE_FAILED | 0 |
| 0x4E172D | RAM Speicher: beschädigt | 0 |
| 0x4E1730 | ECU_OEM_CODING_DEFECTIVE | 0 |
| 0x4E1740 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x4E1741 | SPI_SYNCH_TRANSMIT_FAILED | 0 |
| 0x4E1750 | CAN_E_TIMEOUT | 0 |
| 0x4E1751 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x4E1754 | CANIF_E_STOPPED | 0 |
| 0x4E1755 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x4E1756 | CANNM_E_INIT_FAILED | 0 |
| 0x4E1757 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x4E1758 | CNM_E_TX_PATH_FAILED | 0 |
| 0x4E175A | CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x4E175B | CANTP_E_COMM | 0 |
| 0x4E175C | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x4E175D | CNM_E_TX_PATH_FAILED | 0 |
| 0x4E1760 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x4E1761 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x4E1762 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x4E1770 | MCU_E_CLOCK_FAILURE | 0 |
| 0x4E1771 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x4E1772 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x4E1773 | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x4E1774 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x4E1775 | MCU_E_LOCK_FAILURE | 0 |
| 0x4E1776 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x4E1777 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x4E1778 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x4E1779 | MCU_E_RC_MEASURE | 0 |
| 0x4E177A | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x4E177B | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x4E177C | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x4E177D | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x4E1780 | WDG_E_DISABLE_REJECTED | 0 |
| 0x4E1781 | WDG_E_MISS_TRIGGER | 0 |
| 0x4E1782 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x4E1783 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x4E1784 | WDGM_E_SET_MODE | 0 |
| 0x4E1786 | Externer Watchdog: Fehler (Task Überlauf) | 0 |
| 0x4E1787 | Externer Watchdog Test: fehlerhaft | 0 |
| 0x4E1788 | Interner Watchdog: Fehler (Task läuft nicht vollständig) | 0 |
| 0x4E1789 | Reset: durch ungültigen Interrupt | 0 |
| 0x4E178A | Interner Watchdog Test: fehlerhaft | 0 |
| 0x4E17A0 | Batterie-Spannungsmessung nicht plausibel | 0 |
| 0x4E17A1 | Steuergerät Unterspannung | 0 |
| 0x4E17A2 | Steuergerät Überspannung | 0 |
| 0x4E17A3 | Unterspannung Klemme 30 während PreCrash | 0 |
| 0x4E17A7 | Motor: blockiert | 0 |
| 0x4E17A8 | Motorstrom: Fehler | 0 |
| 0x4E17A9 | Motor: Unterbrechung | 0 |
| 0x4E17AA | Motor: Kurzschluß | 0 |
| 0x4E17C0 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x4E17C1 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x4E17D0 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x4E17D1 | Signal (0x97) ungültig empfangen: Kraft_Kennlinie_Gurt_PreCrash_ungültig | 1 |
| 0x4E17D2 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4006 | STAT_SPANNUNG_KL30B_WERT | mV | High | unsigned char | - | 100.0 | 1.0 | 0.0 |
| 0x4007 | STAT_SPANNUNG_KL30_WERT | mV | High | unsigned char | - | 100.0 | 1.0 | 0.0 |
| 0x4009 | STAT_EXT_TEMPERATUR_WERT | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x400A | STAT_INT_TEMPERATUR_WERT | °C | High | unsigned char | - | 1.0 | 1.0 | -80.0 |
| 0x401D | STAT_INT_SYSTEMZEIT_WERT | ms | High | signed long | - | 10.0 | 1.0 | 0.0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4019

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STOF | 0-n | high | unsigned char | - | TAB_STOF | 1.0 | 1.0 | 0.0 | Status der Funktion |
| STAT_AMV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VDA Algorithmus Hauptversion |
| STAT_ALV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VDA Algorithmus Unterversion |
| STAT_APV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VDA Algorithmus Patchversion |
| STAT_CMV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VDA Kalibrierung Hauptversion |
| STAT_CLV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VDA Kalibrierung Unterversion |
| STAT_CPV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VDA Kalibrierung Patchversion |

### RES_0X401B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCR_INHC_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nach Erreichen einer definierten Anzahl an PreCrash Auslösungen wird das Steuergerät für diese Funktion gesperrt. |
| STAT_BSR_INHC_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nach Erreichen einer definierten Anzahl an BSR Auslösungen wird das Steuergerät für diese Funktion gesperrt. |

### RES_0X401D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INT_SYSTEMZEIT_WERT | ms | high | long | - | - | 10.0 | 1.0 | 0.0 | ECU-interne Systemzeit (=Zeit nach Power-on/Reset) |

### RES_0X4020

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_ABS_INT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | u32NvmStmRelTime: ReMA ECU internal absolute time |
| STAT_REL_TIME_CAN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relative time from CAN message (0x328) - T_SEC_COU_REL |
| STAT_UO_CALC_MXV_WERT | °/s | high | int | - | - | 1.0 | 64.0 | 0.0 | Output signal of UO calculation function - UO_MaxValue |
| STAT_UO_CALC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of UO calculation function - UO_TimeStampMax |
| STAT_UO_CALC_MNV_WERT | °/s | high | int | - | - | 1.0 | 64.0 | 0.0 | Output signal of UO calculation function - UO_MinValue |
| STAT_UO_CALC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of UO calculation function - UO_TimeStampMin |
| STAT_LAT_ACC_MXV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered lateral acceleration signal - AY_filtered_2_MaxValue |
| STAT_LAT_ACC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered lateral acceleration signal - AY_filtered_2_TimeStampMax |
| STAT_LAT_ACC_MNV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered lateral acceleration signal - AY_filtered_2_MinValue |
| STAT_LAT_ACC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered lateral acceleration signal - AY_filtered_2_TimeStampMin |
| STAT_COR_VEH_VEL_MXV_WERT | ms | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_MaxValue |
| STAT_COR_VEH_VEL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_TimeStampMax |
| STAT_COR_VEH_VEL_MNV_WERT | m/s | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_MinValue |
| STAT_COR_VEH_VEL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_TimeStampMin |
| STAT_FS_CIL_MXV_WERT | ° | high | unsigned int | - | - | 0.0028 | 1.0 | -90.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_MaxValue |
| STAT_FS_CIL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_TimeStampMax |
| STAT_FS_CIL_MNV_WERT | ° | high | unsigned int | - | - | 0.0028 | 1.0 | -90.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_MinValue |
| STAT_FS_CIL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_TimeStampMin |
| STAT_BS_CALC_MXV_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.8 | Output signal of BS calculation function - BS_MaxValue |
| STAT_BS_CALC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of BS calculation function - BS_TimeStampMax |
| STAT_BS_CALC_MNV_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.8 | Output signal of BS calculation function - BS_MinValue |
| STAT_BS_CALC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of BS calculation function - BS_TimeStampMin |
| STAT_DEV_SAFAF_MXV_WERT | °/s | high | int | - | - | 1.0 | 16.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_MaxValue |
| STAT_DEV_SAFAF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_TimeStampMax |
| STAT_DEV_SAFAF_MNV_WERT | °/s | high | int | - | - | 1.0 | 16.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_MinValue |
| STAT_DEV_SAFAF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_TimeStampMin |
| STAT_BRTQ_DVC_MXV_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -32000.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_MaxValue |
| STAT_BRTQ_DVC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_TimeStampMax |
| STAT_BRTQ_DVC_MNV_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -32000.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_MinValue |
| STAT_BRTQ_DVC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_TimeStampMin |
| STAT_DEV_BRTQ_DVC_MXV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_MaxValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_TimeStampMax |
| STAT_DEV_BRTQ_DVC_MNV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_MinValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_TimeStampMin |
| STAT_DEV_BRTQ_DVC_AEKB_MXV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_MaxValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_AEKB_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_TimeStampMax |
| STAT_DEV_BRTQ_DVC_AEKB_MNV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_MinValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_AEKB_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_TimeStampMin |
| STAT_EKB0_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK0 - EBK0_severity_MaxValue [Criticality] |
| STAT_EKB0_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK0 - EBK0_severity_TimeStampMax |
| STAT_EKB0_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK0 - EBK0_severity_MinValue [Criticality] |
| STAT_EKB0_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK0 - EBK0_severity_TimeStampMin |
| STAT_EKB1_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK1 - EBK1_severity_MaxValue [Criticality] |
| STAT_EKB1_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK1 - EBK1_severity_TimeStampMax |
| STAT_EKB1_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK1 - EBK1_severity_MinValue [Criticality] |
| STAT_EKB1_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK1 - EBK1_severity_TimeStampMin |
| STAT_EKB2_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK2 - EBK2_severity_MaxValue [Criticality] |
| STAT_EKB2_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK2 - EBK2_severity_TimeStampMax |
| STAT_EKB2_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK2 - EBK2_severity_MinValue [Criticality] |
| STAT_EKB2_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK2 - EBK2_severity_TimeStampMin |
| STAT_EKB_AX_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_MaxValue [Criticality] |
| STAT_EKB_AX_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_TimeStampMax |
| STAT_EKB_AX_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_MinValue [Criticality] |
| STAT_EKB_AX_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_TimeStampMin |
| STAT_EKB_SOFT_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_MaxValue [Criticality] |
| STAT_EKB_SOFT_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_TimeStampMax |
| STAT_EKB_SOFT_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_MinValue [Criticality] |
| STAT_EKB_SOFT_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_TimeStampMin |
| STAT_EKB11_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK11 - EBK11_severity_MaxValue [Criticality] |
| STAT_EKB11_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK11 - EBK11_severity_TimeStampMax |
| STAT_EKB11_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK11 - EBK11_severity_MinValue [Criticality] |
| STAT_EKB11_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK11 - EBK11_severity_TimeStampMin |
| STAT_FS_CIL_LACC_MXV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_MaxValue |
| STAT_FS_CIL_LACC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_TimeStampMax |
| STAT_FS_CIL_LACC_MNV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_MinValue |
| STAT_FS_CIL_LACC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_TimeStampMin |
| STAT_SA_CORR_MXV_WERT | ° | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_MaxValue |
| STAT_SA_CORR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_TimeStampMax |
| STAT_SA_CORR_MNV_WERT | ° | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_MinValue |
| STAT_SA_CORR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_TimeStampMin |
| STAT_SR_CORR_CORSA_MXV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip anglecorresponding SR value - SR_corrected_correspSA_MaxValue |
| STAT_SR_CORR_CORSA_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip anglecorresponding SR value -  SR_corrected_correspSA_TimeStampMax |
| STAT_SR_CORR_CORSA_MNV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip anglecorresponding SR value - SR_corrected_correspSA_MinValue |
| STAT_SR_CORR_CORSA_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip anglecorresponding SR value -  SR_corrected_correspSA_TimeStampMin |
| STAT_SR_CORR_MXV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) - SR_corrected_MaxValue |
| STAT_SR_CORR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) -  SR_corrected_TimeStampMax |
| STAT_SR_CORR_MNV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) - SR_corrected_MinValue |
| STAT_SR_CORR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) -  SR_corrected_TimeStampMin |
| STAT_SA_CORR_CORSR_MXV_WERT | °/s | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle corresponding SA value - SA_corrected_correspSR_MaxValue |
| STAT_SA_CORR_CORSR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle corresponding SA value -  SA_corrected_correspSR_TimeStampMax |
| STAT_SA_CORR_CORSR_MNV_WERT | °/s | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle corresponding SA value - SA_corrected_correspSR_MinValue |
| STAT_SA_CORR_CORSR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle corresponding SA value -  SA_corrected_correspSR_TimeStampMin |
| STAT_US_CRIT_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_MaxValue [Criticality] |
| STAT_US_CRIT_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_TimeStampMax |
| STAT_US_CRIT_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_MinValue [Criticality] |
| STAT_US_CRIT_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_TimeStampMin |
| STAT_OS_CRIT_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_MaxValue [Criticality] |
| STAT_OS_CRIT_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_TimeStampMax |
| STAT_OS_CRIT_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_MinValue [Criticality] |
| STAT_OS_CRIT_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_TimeStampMin |
| STAT_OV_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_MaxValue [Criticality] |
| STAT_OV_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_TimeStampMax |
| STAT_OV_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_MinValue [Criticality] |
| STAT_OV_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_TimeStampMin |
| STAT_BS_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_MaxValue [Criticality] |
| STAT_BS_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_TimeStampMax |
| STAT_BS_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_MinValue [Criticality] |
| STAT_BS_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_TimeStampMin |
| STAT_SC_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Skidding Criterion - SC_pre2_MaxValue [Criticality] |
| STAT_SC_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Skidding Criterion - SC_pre2_TimeStampMax |
| STAT_SC_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Skidding Criterion - SC_pre2_MinValue [Criticality] |
| STAT_SC_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Skidding Criterion - SC_pre2_TimeStampMin |
| STAT_EMD_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_MaxValue |
| STAT_EMD_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_TimeStampMax |
| STAT_EMD_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_MinValue |
| STAT_EMD_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_TimeStampMin |
| STAT_EBC_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_MaxValue |
| STAT_EBC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_TimeStampMax |
| STAT_EBC_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_MinValue |
| STAT_EBC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_TimeStampMin |
| STAT_IBR_AVDF_MXV_WERT | m/s² | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_MaxValue |
| STAT_IBR_AVDF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_TimeStampMax |
| STAT_IBR_AVDF_MNV_WERT | m/s² | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_MinValue |
| STAT_IBR_AVDF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_TimeStampMin |
| STAT_IBR_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_MaxValue [PreCraqshSeverity] |
| STAT_IBR_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_TimeStampMax |
| STAT_IBR_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_MinValue [PreCraqshSeverity] |
| STAT_IBR_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_TimeStampMin |
| STAT_ACSM_CTF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_MaxValue |
| STAT_ACSM_CTF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_TimeStampMax |
| STAT_ACSM_CTF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_MinValue |
| STAT_ACSM_CTF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_TimeStampMin |
| STAT_ACSM_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_MaxValue [PreCrashSeverity] |
| STAT_ACSM_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_TimeStampMax |
| STAT_ACSM_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_MinValue [PreCrashSeverity] |
| STAT_ACSM_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_TimeStampMin |
| STAT_KAFAS_CVF_MXV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | -126.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_MaxValue |
| STAT_KAFAS_CVF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_TimeStampMax |
| STAT_KAFAS_CVF_MNV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | -126.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_MinValue |
| STAT_KAFAS_CVF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_TimeStampMin |
| STAT_KAFAS_TTCF_MXV_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_MaxValue |
| STAT_KAFAS_TTCF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_TimeStampMax |
| STAT_KAFAS_TTCF_MNV_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_MinValue |
| STAT_KAFAS_TTCF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_TimeStampMin |
| STAT_KAFAS_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_MaxValue |
| STAT_KAFAS_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_TimeStampMax |
| STAT_KAFAS_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_MinValue |
| STAT_KAFAS_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_TimeStampMin |
| STAT_CORR_SA_MXV_WERT | ° | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Output of VDA - u16CorrectedSlipAngle_MaxValue |
| STAT_CORR_SA_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedSlipAngle_TimeStampMax |
| STAT_CORR_SA_MNV_WERT | ° | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Output of VDA - u16CorrectedSlipAngle_MinValue |
| STAT_CORR_SA_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedSlipAngle_TimeStampMin |
| STAT_CORR_VEH_VEL_MXV_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_MaxValue |
| STAT_CORR_VEH_VEL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_TimeStampMax |
| STAT_CORR_VEH_VEL_MNV_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_MinValue |
| STAT_CORR_VEH_VEL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_TimeStampMin |
| STAT_RADAR_CVF_MXV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_MaxValue |
| STAT_RADAR_CVF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_TimeStampMax |
| STAT_RADAR_CVF_MNV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_MinValue |
| STAT_RADAR_CVF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_TimeStampMin |
| STAT_RADAR_TTCF_MXV_WERT | ms | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_MaxValue |
| STAT_RADAR_TTCF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_TimeStampMax |
| STAT_RADAR_TTCF_MNV_WERT | ms | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_MinValue |
| STAT_RADAR_TTCF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_TimeStampMin |
| STAT_FRR_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_MaxValue [PreCrashSeverity] |
| STAT_FRR_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_TimeStampMax |
| STAT_FRR_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_MinValue [PreCrashSeverity] |
| STAT_FRR_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_TimeStampMin |
| STAT_QSER_PRMSN_DF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_MaxValue |
| STAT_QSER_PRMSN_DF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_TimeStampMax |
| STAT_QSER_PRMSN_DF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_MinValue |
| STAT_QSER_PRMSN_DF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_TimeStampMin |
| STAT_DBC_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_MaxValue [PreCrashSeverity] |
| STAT_DBC_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_TimeStampMax |
| STAT_DBC_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_MinValue [PreCrashSeverity] |
| STAT_DBC_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_TimeStampMin |
| STAT_PCSL_RAW_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_MaxValue |
| STAT_PCS_RAW_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_TimeStampMax |
| STAT_PCSL_RAW_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_MinValue |
| STAT_PCS_RAW_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_TimeStampMin |
| STAT_PCSL_REQ_BELT_PROF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_MaxValue [BeltProfileNo] |
| STAT_PCSL_REQ_BELT_PROF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_TimeStampMax |
| STAT_PCSL_REQ_BELT_PROF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_MinValue [BeltProfileNo] |
| STAT_PCSL_REQ_BELT_PROF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_TimeStampMin |
| STAT_ACT_FHSVSHD_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_MaxValue |
| STAT_ACT_FHSVSHD_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_TimeStampMax |
| STAT_ACT_FHSVSHD_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_MinValue |
| STAT_ACT_FHSVSHD_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_TimeStampMin |

### RES_0X4021

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_ABS_INT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | u32NvmStmRelTime: ReMA ECU internal absolute time |
| STAT_REL_TIME_CAN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relative time from CAN message (0x328) - T_SEC_COU_REL |
| STAT_UO_CALC_MXV_WERT | °/s | high | int | - | - | 1.0 | 64.0 | 0.0 | Output signal of UO calculation function - UO_MaxValue |
| STAT_UO_CALC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of UO calculation function - UO_TimeStampMax |
| STAT_UO_CALC_MNV_WERT | °/s | high | int | - | - | 1.0 | 64.0 | 0.0 | Output signal of UO calculation function - UO_MinValue |
| STAT_UO_CALC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of UO calculation function - UO_TimeStampMin |
| STAT_LAT_ACC_MXV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered lateral acceleration signal - AY_filtered_2_MaxValue |
| STAT_LAT_ACC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered lateral acceleration signal - AY_filtered_2_TimeStampMax |
| STAT_LAT_ACC_MNV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered lateral acceleration signal - AY_filtered_2_MinValue |
| STAT_LAT_ACC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered lateral acceleration signal - AY_filtered_2_TimeStampMin |
| STAT_COR_VEH_VEL_MXV_WERT | ms | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_MaxValue |
| STAT_COR_VEH_VEL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_TimeStampMax |
| STAT_COR_VEH_VEL_MNV_WERT | m/s | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_MinValue |
| STAT_COR_VEH_VEL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_TimeStampMin |
| STAT_FS_CIL_MXV_WERT | ° | high | unsigned int | - | - | 0.0028 | 1.0 | -90.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_MaxValue |
| STAT_FS_CIL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_TimeStampMax |
| STAT_FS_CIL_MNV_WERT | ° | high | unsigned int | - | - | 0.0028 | 1.0 | -90.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_MinValue |
| STAT_FS_CIL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_TimeStampMin |
| STAT_BS_CALC_MXV_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.8 | Output signal of BS calculation function - BS_MaxValue |
| STAT_BS_CALC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of BS calculation function - BS_TimeStampMax |
| STAT_BS_CALC_MNV_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.8 | Output signal of BS calculation function - BS_MinValue |
| STAT_BS_CALC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of BS calculation function - BS_TimeStampMin |
| STAT_DEV_SAFAF_MXV_WERT | °/s | high | int | - | - | 1.0 | 16.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_MaxValue |
| STAT_DEV_SAFAF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_TimeStampMax |
| STAT_DEV_SAFAF_MNV_WERT | °/s | high | int | - | - | 1.0 | 16.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_MinValue |
| STAT_DEV_SAFAF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_TimeStampMin |
| STAT_BRTQ_DVC_MXV_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -32000.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_MaxValue |
| STAT_BRTQ_DVC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_TimeStampMax |
| STAT_BRTQ_DVC_MNV_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -32000.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_MinValue |
| STAT_BRTQ_DVC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_TimeStampMin |
| STAT_DEV_BRTQ_DVC_MXV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_MaxValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_TimeStampMax |
| STAT_DEV_BRTQ_DVC_MNV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_MinValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_TimeStampMin |
| STAT_DEV_BRTQ_DVC_AEKB_MXV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_MaxValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_AEKB_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_TimeStampMax |
| STAT_DEV_BRTQ_DVC_AEKB_MNV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_MinValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_AEKB_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_TimeStampMin |
| STAT_EKB0_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK0 - EBK0_severity_MaxValue [Criticality] |
| STAT_EKB0_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK0 - EBK0_severity_TimeStampMax |
| STAT_EKB0_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK0 - EBK0_severity_MinValue [Criticality] |
| STAT_EKB0_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK0 - EBK0_severity_TimeStampMin |
| STAT_EKB1_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK1 - EBK1_severity_MaxValue [Criticality] |
| STAT_EKB1_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK1 - EBK1_severity_TimeStampMax |
| STAT_EKB1_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK1 - EBK1_severity_MinValue [Criticality] |
| STAT_EKB1_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK1 - EBK1_severity_TimeStampMin |
| STAT_EKB2_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK2 - EBK2_severity_MaxValue [Criticality] |
| STAT_EKB2_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK2 - EBK2_severity_TimeStampMax |
| STAT_EKB2_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK2 - EBK2_severity_MinValue [Criticality] |
| STAT_EKB2_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK2 - EBK2_severity_TimeStampMin |
| STAT_EKB_AX_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_MaxValue [Criticality] |
| STAT_EKB_AX_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_TimeStampMax |
| STAT_EKB_AX_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_MinValue [Criticality] |
| STAT_EKB_AX_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_TimeStampMin |
| STAT_EKB_SOFT_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_MaxValue [Criticality] |
| STAT_EKB_SOFT_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_TimeStampMax |
| STAT_EKB_SOFT_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_MinValue [Criticality] |
| STAT_EKB_SOFT_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_TimeStampMin |
| STAT_EKB11_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK11 - EBK11_severity_MaxValue [Criticality] |
| STAT_EKB11_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK11 - EBK11_severity_TimeStampMax |
| STAT_EKB11_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK11 - EBK11_severity_MinValue [Criticality] |
| STAT_EKB11_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK11 - EBK11_severity_TimeStampMin |
| STAT_FS_CIL_LACC_MXV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_MaxValue |
| STAT_FS_CIL_LACC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_TimeStampMax |
| STAT_FS_CIL_LACC_MNV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_MinValue |
| STAT_FS_CIL_LACC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_TimeStampMin |
| STAT_SA_CORR_MXV_WERT | ° | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_MaxValue |
| STAT_SA_CORR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_TimeStampMax |
| STAT_SA_CORR_MNV_WERT | ° | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_MinValue |
| STAT_SA_CORR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_TimeStampMin |
| STAT_SR_CORR_CORSA_MXV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip anglecorresponding SR value - SR_corrected_correspSA_MaxValue |
| STAT_SR_CORR_CORSA_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip anglecorresponding SR value -  SR_corrected_correspSA_TimeStampMax |
| STAT_SR_CORR_CORSA_MNV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip anglecorresponding SR value - SR_corrected_correspSA_MinValue |
| STAT_SR_CORR_CORSA_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip anglecorresponding SR value -  SR_corrected_correspSA_TimeStampMin |
| STAT_SR_CORR_MXV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) - SR_corrected_MaxValue |
| STAT_SR_CORR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) -  SR_corrected_TimeStampMax |
| STAT_SR_CORR_MNV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) - SR_corrected_MinValue |
| STAT_SR_CORR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) -  SR_corrected_TimeStampMin |
| STAT_SA_CORR_CORSR_MXV_WERT | °/s | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle corresponding SA value - SA_corrected_correspSR_MaxValue |
| STAT_SA_CORR_CORSR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle corresponding SA value -  SA_corrected_correspSR_TimeStampMax |
| STAT_SA_CORR_CORSR_MNV_WERT | °/s | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle corresponding SA value - SA_corrected_correspSR_MinValue |
| STAT_SA_CORR_CORSR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle corresponding SA value -  SA_corrected_correspSR_TimeStampMin |
| STAT_US_CRIT_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_MaxValue [Criticality] |
| STAT_US_CRIT_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_TimeStampMax |
| STAT_US_CRIT_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_MinValue [Criticality] |
| STAT_US_CRIT_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_TimeStampMin |
| STAT_OS_CRIT_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_MaxValue [Criticality] |
| STAT_OS_CRIT_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_TimeStampMax |
| STAT_OS_CRIT_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_MinValue [Criticality] |
| STAT_OS_CRIT_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_TimeStampMin |
| STAT_OV_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_MaxValue [Criticality] |
| STAT_OV_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_TimeStampMax |
| STAT_OV_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_MinValue [Criticality] |
| STAT_OV_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_TimeStampMin |
| STAT_BS_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_MaxValue [Criticality] |
| STAT_BS_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_TimeStampMax |
| STAT_BS_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_MinValue [Criticality] |
| STAT_BS_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_TimeStampMin |
| STAT_SC_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Skidding Criterion - SC_pre2_MaxValue [Criticality] |
| STAT_SC_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Skidding Criterion - SC_pre2_TimeStampMax |
| STAT_SC_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Skidding Criterion - SC_pre2_MinValue [Criticality] |
| STAT_SC_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Skidding Criterion - SC_pre2_TimeStampMin |
| STAT_EMD_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_MaxValue |
| STAT_EMD_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_TimeStampMax |
| STAT_EMD_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_MinValue |
| STAT_EMD_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_TimeStampMin |
| STAT_EBC_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_MaxValue |
| STAT_EBC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_TimeStampMax |
| STAT_EBC_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_MinValue |
| STAT_EBC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_TimeStampMin |
| STAT_IBR_AVDF_MXV_WERT | m/s² | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_MaxValue |
| STAT_IBR_AVDF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_TimeStampMax |
| STAT_IBR_AVDF_MNV_WERT | m/s² | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_MinValue |
| STAT_IBR_AVDF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_TimeStampMin |
| STAT_IBR_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_MaxValue [PreCraqshSeverity] |
| STAT_IBR_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_TimeStampMax |
| STAT_IBR_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_MinValue [PreCraqshSeverity] |
| STAT_IBR_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_TimeStampMin |
| STAT_ACSM_CTF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_MaxValue |
| STAT_ACSM_CTF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_TimeStampMax |
| STAT_ACSM_CTF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_MinValue |
| STAT_ACSM_CTF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_TimeStampMin |
| STAT_ACSM_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_MaxValue [PreCrashSeverity] |
| STAT_ACSM_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_TimeStampMax |
| STAT_ACSM_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_MinValue [PreCrashSeverity] |
| STAT_ACSM_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_TimeStampMin |
| STAT_KAFAS_CVF_MXV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | -126.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_MaxValue |
| STAT_KAFAS_CVF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_TimeStampMax |
| STAT_KAFAS_CVF_MNV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | -126.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_MinValue |
| STAT_KAFAS_CVF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_TimeStampMin |
| STAT_KAFAS_TTCF_MXV_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_MaxValue |
| STAT_KAFAS_TTCF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_TimeStampMax |
| STAT_KAFAS_TTCF_MNV_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_MinValue |
| STAT_KAFAS_TTCF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_TimeStampMin |
| STAT_KAFAS_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_MaxValue |
| STAT_KAFAS_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_TimeStampMax |
| STAT_KAFAS_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_MinValue |
| STAT_KAFAS_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_TimeStampMin |
| STAT_CORR_SA_MXV_WERT | ° | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Output of VDA - u16CorrectedSlipAngle_MaxValue |
| STAT_CORR_SA_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedSlipAngle_TimeStampMax |
| STAT_CORR_SA_MNV_WERT | ° | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Output of VDA - u16CorrectedSlipAngle_MinValue |
| STAT_CORR_SA_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedSlipAngle_TimeStampMin |
| STAT_CORR_VEH_VEL_MXV_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_MaxValue |
| STAT_CORR_VEH_VEL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_TimeStampMax |
| STAT_CORR_VEH_VEL_MNV_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_MinValue |
| STAT_CORR_VEH_VEL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_TimeStampMin |
| STAT_RADAR_CVF_MXV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_MaxValue |
| STAT_RADAR_CVF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_TimeStampMax |
| STAT_RADAR_CVF_MNV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_MinValue |
| STAT_RADAR_CVF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_TimeStampMin |
| STAT_RADAR_TTCF_MXV_WERT | ms | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_MaxValue |
| STAT_RADAR_TTCF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_TimeStampMax |
| STAT_RADAR_TTCF_MNV_WERT | ms | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_MinValue |
| STAT_RADAR_TTCF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_TimeStampMin |
| STAT_FRR_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_MaxValue [PreCrashSeverity] |
| STAT_FRR_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_TimeStampMax |
| STAT_FRR_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_MinValue [PreCrashSeverity] |
| STAT_FRR_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_TimeStampMin |
| STAT_QSER_PRMSN_DF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_MaxValue |
| STAT_QSER_PRMSN_DF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_TimeStampMax |
| STAT_QSER_PRMSN_DF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_MinValue |
| STAT_QSER_PRMSN_DF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_TimeStampMin |
| STAT_DBC_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_MaxValue [PreCrashSeverity] |
| STAT_DBC_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_TimeStampMax |
| STAT_DBC_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_MinValue [PreCrashSeverity] |
| STAT_DBC_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_TimeStampMin |
| STAT_PCSL_RAW_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_MaxValue |
| STAT_PCS_RAW_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_TimeStampMax |
| STAT_PCSL_RAW_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_MinValue |
| STAT_PCS_RAW_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_TimeStampMin |
| STAT_PCSL_REQ_BELT_PROF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_MaxValue [BeltProfileNo] |
| STAT_PCSL_REQ_BELT_PROF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_TimeStampMax |
| STAT_PCSL_REQ_BELT_PROF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_MinValue [BeltProfileNo] |
| STAT_PCSL_REQ_BELT_PROF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_TimeStampMin |
| STAT_ACT_FHSVSHD_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_MaxValue |
| STAT_ACT_FHSVSHD_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_TimeStampMax |
| STAT_ACT_FHSVSHD_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_MinValue |
| STAT_ACT_FHSVSHD_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_TimeStampMin |

### RES_0X4022

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_ABS_INT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | u32NvmStmRelTime: ReMA ECU internal absolute time |
| STAT_REL_TIME_CAN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relative time from CAN message (0x328) - T_SEC_COU_REL |
| STAT_UO_CALC_MXV_WERT | °/s | high | int | - | - | 1.0 | 64.0 | 0.0 | Output signal of UO calculation function - UO_MaxValue |
| STAT_UO_CALC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of UO calculation function - UO_TimeStampMax |
| STAT_UO_CALC_MNV_WERT | °/s | high | int | - | - | 1.0 | 64.0 | 0.0 | Output signal of UO calculation function - UO_MinValue |
| STAT_UO_CALC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of UO calculation function - UO_TimeStampMin |
| STAT_LAT_ACC_MXV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered lateral acceleration signal - AY_filtered_2_MaxValue |
| STAT_LAT_ACC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered lateral acceleration signal - AY_filtered_2_TimeStampMax |
| STAT_LAT_ACC_MNV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered lateral acceleration signal - AY_filtered_2_MinValue |
| STAT_LAT_ACC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered lateral acceleration signal - AY_filtered_2_TimeStampMin |
| STAT_COR_VEH_VEL_MXV_WERT | ms | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_MaxValue |
| STAT_COR_VEH_VEL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_TimeStampMax |
| STAT_COR_VEH_VEL_MNV_WERT | m/s | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_MinValue |
| STAT_COR_VEH_VEL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Corrected (reverse gear etc.) vehicle velocity signal - VX_sign_mps_TimeStampMin |
| STAT_FS_CIL_MXV_WERT | ° | high | unsigned int | - | - | 0.0028 | 1.0 | -90.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_MaxValue |
| STAT_FS_CIL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_TimeStampMax |
| STAT_FS_CIL_MNV_WERT | ° | high | unsigned int | - | - | 0.0028 | 1.0 | -90.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_MinValue |
| STAT_FS_CIL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16SteeringAngleFrontAxleFiltered_TimeStampMin |
| STAT_BS_CALC_MXV_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.8 | Output signal of BS calculation function - BS_MaxValue |
| STAT_BS_CALC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of BS calculation function - BS_TimeStampMax |
| STAT_BS_CALC_MNV_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.8 | Output signal of BS calculation function - BS_MinValue |
| STAT_BS_CALC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output signal of BS calculation function - BS_TimeStampMin |
| STAT_DEV_SAFAF_MXV_WERT | °/s | high | int | - | - | 1.0 | 16.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_MaxValue |
| STAT_DEV_SAFAF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_TimeStampMax |
| STAT_DEV_SAFAF_MNV_WERT | °/s | high | int | - | - | 1.0 | 16.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_MinValue |
| STAT_DEV_SAFAF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16SteeringAngleFrontAxleFiltered - HWR_TimeStampMin |
| STAT_BRTQ_DVC_MXV_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -32000.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_MaxValue |
| STAT_BRTQ_DVC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_TimeStampMax |
| STAT_BRTQ_DVC_MNV_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -32000.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_MinValue |
| STAT_BRTQ_DVC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16BrakingTorqueDVChoiceFiltered_TimeStampMin |
| STAT_DEV_BRTQ_DVC_MXV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_MaxValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_TimeStampMax |
| STAT_DEV_BRTQ_DVC_MNV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_MinValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered before EBK latch function - BRP_Rate_TimeStampMin |
| STAT_DEV_BRTQ_DVC_AEKB_MXV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_MaxValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_AEKB_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_TimeStampMax |
| STAT_DEV_BRTQ_DVC_AEKB_MNV_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_MinValue [NM / sample] |
| STAT_DEV_BRTQ_DVC_AEKB_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Derivation of u16BrakingTorqueDVChoiceFiltered after EBK latch function - BRP_Rate_afterLatch_TimeStampMin |
| STAT_EKB0_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK0 - EBK0_severity_MaxValue [Criticality] |
| STAT_EKB0_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK0 - EBK0_severity_TimeStampMax |
| STAT_EKB0_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK0 - EBK0_severity_MinValue [Criticality] |
| STAT_EKB0_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK0 - EBK0_severity_TimeStampMin |
| STAT_EKB1_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK1 - EBK1_severity_MaxValue [Criticality] |
| STAT_EKB1_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK1 - EBK1_severity_TimeStampMax |
| STAT_EKB1_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK1 - EBK1_severity_MinValue [Criticality] |
| STAT_EKB1_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK1 - EBK1_severity_TimeStampMin |
| STAT_EKB2_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK2 - EBK2_severity_MaxValue [Criticality] |
| STAT_EKB2_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK2 - EBK2_severity_TimeStampMax |
| STAT_EKB2_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK2 - EBK2_severity_MinValue [Criticality] |
| STAT_EKB2_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK2 - EBK2_severity_TimeStampMin |
| STAT_EKB_AX_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_MaxValue [Criticality] |
| STAT_EKB_AX_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_TimeStampMax |
| STAT_EKB_AX_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_MinValue [Criticality] |
| STAT_EKB_AX_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_AX - EBK_AX_severity_TimeStampMin |
| STAT_EKB_SOFT_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_MaxValue [Criticality] |
| STAT_EKB_SOFT_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_TimeStampMax |
| STAT_EKB_SOFT_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_MinValue [Criticality] |
| STAT_EKB_SOFT_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK_SOFT - EBK_SOFT_severity_TimeStampMin |
| STAT_EKB11_SEV_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK11 - EBK11_severity_MaxValue [Criticality] |
| STAT_EKB11_SEV_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK11 - EBK11_severity_TimeStampMax |
| STAT_EKB11_SEV_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of EBK11 - EBK11_severity_MinValue [Criticality] |
| STAT_EKB11_SEV_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of EBK11 - EBK11_severity_TimeStampMin |
| STAT_FS_CIL_LACC_MXV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_MaxValue |
| STAT_FS_CIL_LACC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_TimeStampMax |
| STAT_FS_CIL_LACC_MNV_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_MinValue |
| STAT_FS_CIL_LACC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u16LongitudinalAccelerationFiltered_TimeStampMin |
| STAT_SA_CORR_MXV_WERT | ° | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_MaxValue |
| STAT_SA_CORR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_TimeStampMax |
| STAT_SA_CORR_MNV_WERT | ° | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_MinValue |
| STAT_SA_CORR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle value after quadrant correction (1st quadrant of SA/SR diagram) - SA_corrected_TimeStampMin |
| STAT_SR_CORR_CORSA_MXV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip anglecorresponding SR value - SR_corrected_correspSA_MaxValue |
| STAT_SR_CORR_CORSA_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip anglecorresponding SR value -  SR_corrected_correspSA_TimeStampMax |
| STAT_SR_CORR_CORSA_MNV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip anglecorresponding SR value - SR_corrected_correspSA_MinValue |
| STAT_SR_CORR_CORSA_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip anglecorresponding SR value -  SR_corrected_correspSA_TimeStampMin |
| STAT_SR_CORR_MXV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) - SR_corrected_MaxValue |
| STAT_SR_CORR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) -  SR_corrected_TimeStampMax |
| STAT_SR_CORR_MNV_WERT | °/s | high | int | - | - | 1.0 | 2.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) - SR_corrected_MinValue |
| STAT_SR_CORR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle rate value after quadrant correction (1st quadrant of SA/SR diagram) -  SR_corrected_TimeStampMin |
| STAT_SA_CORR_CORSR_MXV_WERT | °/s | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle corresponding SA value - SA_corrected_correspSR_MaxValue |
| STAT_SA_CORR_CORSR_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle corresponding SA value -  SA_corrected_correspSR_TimeStampMax |
| STAT_SA_CORR_CORSR_MNV_WERT | °/s | high | int | - | - | 1.0 | 32.0 | 0.0 | Slip angle corresponding SA value - SA_corrected_correspSR_MinValue |
| STAT_SA_CORR_CORSR_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Slip angle corresponding SA value -  SA_corrected_correspSR_TimeStampMin |
| STAT_US_CRIT_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_MaxValue [Criticality] |
| STAT_US_CRIT_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_TimeStampMax |
| STAT_US_CRIT_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_MinValue [Criticality] |
| STAT_US_CRIT_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8UnderSteeringCriticality_TimeStampMin |
| STAT_OS_CRIT_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_MaxValue [Criticality] |
| STAT_OS_CRIT_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_TimeStampMax |
| STAT_OS_CRIT_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_MinValue [Criticality] |
| STAT_OS_CRIT_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8OverSteeringCriticality_TimeStampMin |
| STAT_OV_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_MaxValue [Criticality] |
| STAT_OV_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_TimeStampMax |
| STAT_OV_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_MinValue [Criticality] |
| STAT_OV_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Oversteering Criterion - OV_pre2_TimeStampMin |
| STAT_BS_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_MaxValue [Criticality] |
| STAT_BS_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_TimeStampMax |
| STAT_BS_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_MinValue [Criticality] |
| STAT_BS_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Bodyslip Criterion - BS_pre2_TimeStampMin |
| STAT_SC_PRE2_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Skidding Criterion - SC_pre2_MaxValue [Criticality] |
| STAT_SC_PRE2_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Skidding Criterion - SC_pre2_TimeStampMax |
| STAT_SC_PRE2_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 16.0 | 0.0 | Output of Skidding Criterion - SC_pre2_MinValue [Criticality] |
| STAT_SC_PRE2_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of Skidding Criterion - SC_pre2_TimeStampMin |
| STAT_EMD_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_MaxValue |
| STAT_EMD_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_TimeStampMax |
| STAT_EMD_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_MinValue |
| STAT_EMD_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - b8EvasiveManeuverDetected_TimeStampMin |
| STAT_EBC_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_MaxValue |
| STAT_EBC_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_TimeStampMax |
| STAT_EBC_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_MinValue |
| STAT_EBC_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u8EmergencyBreakCriticality_TimeStampMin |
| STAT_IBR_AVDF_MXV_WERT | m/s² | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_MaxValue |
| STAT_IBR_AVDF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_TimeStampMax |
| STAT_IBR_AVDF_MNV_WERT | m/s² | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_MinValue |
| STAT_IBR_AVDF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8IBRAKEActualValueDecelerationFiltered_TimeStampMin |
| STAT_IBR_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_MaxValue [PreCraqshSeverity] |
| STAT_IBR_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_TimeStampMax |
| STAT_IBR_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_MinValue [PreCraqshSeverity] |
| STAT_IBR_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of I-Brake PCS Mapping - I_Brake_PCS_TimeStampMin |
| STAT_ACSM_CTF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_MaxValue |
| STAT_ACSM_CTF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_TimeStampMax |
| STAT_ACSM_CTF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_MinValue |
| STAT_ACSM_CTF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8ACSMCrashTypeFiltered_TimeStampMin |
| STAT_ACSM_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_MaxValue [PreCrashSeverity] |
| STAT_ACSM_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_TimeStampMax |
| STAT_ACSM_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_MinValue [PreCrashSeverity] |
| STAT_ACSM_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of ACSM PCS Mapping - PCS_ACSM_TimeStampMin |
| STAT_KAFAS_CVF_MXV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | -126.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_MaxValue |
| STAT_KAFAS_CVF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_TimeStampMax |
| STAT_KAFAS_CVF_MNV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | -126.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_MinValue |
| STAT_KAFAS_CVF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASClosingVelocityFiltered_TimeStampMin |
| STAT_KAFAS_TTCF_MXV_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_MaxValue |
| STAT_KAFAS_TTCF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_TimeStampMax |
| STAT_KAFAS_TTCF_MNV_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_MinValue |
| STAT_KAFAS_TTCF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8KAFASTimeToCollisionFiltered_TimeStampMin |
| STAT_KAFAS_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_MaxValue |
| STAT_KAFAS_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_TimeStampMax |
| STAT_KAFAS_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_MinValue |
| STAT_KAFAS_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of KAFAS PCS Mapping - KAFAS_PCS_TimeStampMin |
| STAT_CORR_SA_MXV_WERT | ° | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Output of VDA - u16CorrectedSlipAngle_MaxValue |
| STAT_CORR_SA_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedSlipAngle_TimeStampMax |
| STAT_CORR_SA_MNV_WERT | ° | high | unsigned int | - | - | 1.0 | 10.0 | -204.7 | Output of VDA - u16CorrectedSlipAngle_MinValue |
| STAT_CORR_SA_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedSlipAngle_TimeStampMin |
| STAT_CORR_VEH_VEL_MXV_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_MaxValue |
| STAT_CORR_VEH_VEL_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_TimeStampMax |
| STAT_CORR_VEH_VEL_MNV_WERT | km/h | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_MinValue |
| STAT_CORR_VEH_VEL_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output of VDA - u16CorrectedVehicleVelocity_TimeStampMin |
| STAT_RADAR_CVF_MXV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_MaxValue |
| STAT_RADAR_CVF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_TimeStampMax |
| STAT_RADAR_CVF_MNV_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_MinValue |
| STAT_RADAR_CVF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARClosingVelocityFiltered_TimeStampMin |
| STAT_RADAR_TTCF_MXV_WERT | ms | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_MaxValue |
| STAT_RADAR_TTCF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_TimeStampMax |
| STAT_RADAR_TTCF_MNV_WERT | ms | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_MinValue |
| STAT_RADAR_TTCF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8RADARTimeToCollisionFiltered_TimeStampMin |
| STAT_FRR_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_MaxValue [PreCrashSeverity] |
| STAT_FRR_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_TimeStampMax |
| STAT_FRR_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_MinValue [PreCrashSeverity] |
| STAT_FRR_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of FRR PCS Mapping - FRR_PCS_TimeStampMin |
| STAT_QSER_PRMSN_DF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_MaxValue |
| STAT_QSER_PRMSN_DF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_TimeStampMax |
| STAT_QSER_PRMSN_DF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_MinValue |
| STAT_QSER_PRMSN_DF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Filtered signal from CIL - u8QuSerPRMSNDbcFiltered_TimeStampMin |
| STAT_DBC_PCS_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_MaxValue [PreCrashSeverity] |
| STAT_DBC_PCS_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_TimeStampMax |
| STAT_DBC_PCS_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_MinValue [PreCrashSeverity] |
| STAT_DBC_PCS_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Output value of DBC PCS Mapping - DBC_PCS_TimeStampMin |
| STAT_PCSL_RAW_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_MaxValue |
| STAT_PCS_RAW_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_TimeStampMax |
| STAT_PCSL_RAW_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_MinValue |
| STAT_PCS_RAW_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | PreCrash Severity (PCS), Output of PCM - u8PreCrashSeverityLevelRaw_TimeStampMin |
| STAT_PCSL_REQ_BELT_PROF_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_MaxValue [BeltProfileNo] |
| STAT_PCSL_REQ_BELT_PROF_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_TimeStampMax |
| STAT_PCSL_REQ_BELT_PROF_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_MinValue [BeltProfileNo] |
| STAT_PCSL_REQ_BELT_PROF_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Requested Belt Profile, Output of PCM - u8PreCrashSeverityLevel_TimeStampMin |
| STAT_ACT_FHSVSHD_MXV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_MaxValue |
| STAT_ACT_FHSVSHD_TSMX_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_TimeStampMax |
| STAT_ACT_FHSVSHD_MNV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_MinValue |
| STAT_ACT_FHSVSHD_TSMN_WERT | s | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Flag for FH/SV/SHD, Output of PCM - b8ActivateFhSvShd_TimeStampMin |

### RES_0X4024

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESAMTSYSTEMZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ECU Gesamtsystemzeit (Life time) |
| STAT_GESAMTSYSTEMZEIT_OFFSET_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Offset der ECU Gesamtsystemzeit |

### RES_0X4025

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STOF | 0-n | high | unsigned char | - | TAB_STOF | 1.0 | 1.0 | 0.0 | Status der Funktion |
| STAT_PAMV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PCM Algorithmus Hauptversion |
| STAT_PALV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PCM Algorithmus Unterversion |
| STAT_PAPV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PCM Algorithmus Patchversion |
| STAT_PCMV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PCM Kalibrierung Hauptversion |
| STAT_PCLV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PCM Kalibrierung Unterversion |
| STAT_PCPV_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PCM Kalibrierung Patchversion |

### RES_0X4FFF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_E1_B1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B1 | 0-n | high | unsigned char | - | TAB_PAS | - | - | - | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B1 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B2 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B2 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B3 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B3 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B4 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B4 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B5 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B5 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B6 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B6 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B7 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B7 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E1_B8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E1_B8 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E1_B8 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_ISTC_E1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit des Crash Ereignisses |
| STAT_IST_E2_B1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systenzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B1 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B1 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B2 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B2 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B3_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B3 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B3 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B4_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B4 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B4 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B5_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B5 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B5 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B6_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B6 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B6 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B7_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B7 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B7 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_IST_E2_B8_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der PCR Aktivierung seit letztem PO/R |
| STAT_PAS_E2_B8 | 0-n | high | unsigned char | - | TAB_PAS | 1.0 | 1.0 | 0.0 | Quelle der PreCrash Aktivierung |
| STAT_PCRP_E2_B8 | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | 1.0 | 1.0 | 0.0 | Aktiviertes PreCrash Profil |
| STAT_ISTC_E2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit des Crash Ereignisses |

### RES_0XA510

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERGEBNIS_EXT_PCR_AKT | - | - | + | 0-n | high | unsigned char | - | TAB_RES_EXT_ACT | 1.0 | 1.0 | 0.0 | Ergebnis der letzten externen PreCrash Aktivierung |
| STAT_PCR_PROFIL | + | - | - | 0-n | high | unsigned char | - | TAB_PRECRASH_BELT_PROFILE | - | - | - | Nummer des PreCrash Profils |
| STAT_AKTIVIERUNGSZEIT_WERT | + | - | - | ms | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | PreCrash Dauer |

### RES_0XA511

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERGEBNIS_EXT_BSR_AKT | - | - | + | 0-n | high | unsigned char | - | TAB_RES_EXT_ACT | 1.0 | 1.0 | 0.0 | Ergebnis der letzten externen BSR Aktivierung |

### RES_0XA512

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INHALT_CRASH_STATUS | + | - | - | 0-n | high | unsigned char | - | TAB_CR_NACHRICHT_EXT_ACR | - | - | - | Crash Status und Trigger der Funktion ReMA und/oder FH/SHD |
| STAT_INHALT_FORCE | + | - | - | 0-n | high | unsigned char | - | TAB_FORCE_EXT_ACT | 1.0 | 1.0 | 0.0 | Erforderlicher PreCrash Level |
| STAT_ANZAHL_FRAMES_GESENDET_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gesendeten Frames der Nachricht 0x97 - ST_PCSH_MST, wie in der Codierung vorgegeben |
| STAT_CYCLE_TIME_WERT | + | - | - | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Zykluszeit zwischen zwei Frames der Nachricht 0x97 - ST_PCSH_MST, wie in der Codierung vorgegeben |
| STAT_ERGEBNIS_EXT_PCM_CAN_AKT | - | - | + | 0-n | high | unsigned char | - | TAB_RES_EXT_PCM_CAN_ACT | 1.0 | 1.0 | 0.0 | Ergebnis der letzten externen PCM CAN Aktivierung: 0x01 = Beendet OK 0x02 = aktiv (letzte Anforderung) |

### RES_0XA513

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_GURTPARKEN | - | - | + | 0-n | high | unsigned char | - | TAB_ZUSTAND_GURTPARKEN | - | - | - | aktueller Status des Gurtparken-Vorgangs |
| STAT_GURTPARKEN_BETRIEBSZUSTAND | + | - | - | 0-n | high | unsigned char | - | TAB_GURTPARKEN_BETRIEBSZUSTAND | - | - | - | Info zum Betriebszustand des REMA |

### RES_0XD510

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GURTSCHALTER | 0-n | high | unsigned char | - | TAB_GURTSCHALTER | 1.0 | 1.0 | 0.0 | Status Gurtschalter FA und BF |
| STAT_ANALOGWERT_KL30_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | KL.30 Spannung gefiltert und skaliert |
| STAT_ANALOGWERT_KL30B_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | KL.30b Spannung gefiltert und skaliert |
| STAT_STATUS_KL30 | 0-n | high | unsigned char | - | TAB_VOLT | 1.0 | 1.0 | 0.0 | KL30 Status |
| STAT_HWS | 0-n | high | unsigned char | - | TAB_HW | 1.0 | 1.0 | 0.0 | Aktueller Hardware Status |
| STAT_TEMPM | 0-n | high | unsigned char | - | TAB_TEMPM | 1.0 | 1.0 | 0.0 | Status nach Temperaturmodell |
| STAT_TEMPS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -80.0 | Interne Temperatur |
| STAT_VDA | 0-n | high | unsigned char | - | TAB_STAT_VDA | 1.0 | 1.0 | 0.0 | VDA Status und Verfügbarkeit |
| STAT_PCM | 0-n | high | unsigned char | - | TAB_STAT_PCM | 1.0 | 1.0 | 0.0 | PCM Status und Verfügbarkeit |
| STAT_BSR | 0-n | high | unsigned char | - | TAB_STAT_BSR | 1.0 | 1.0 | 0.0 | BSR Status und Verfügbarkeit |
| STAT_BSR_LOOP | 0-n | high | unsigned char | - | TAB_STAT_BSR_LOOP | 1.0 | 1.0 | 0.0 | BSR_Loop Status und Verfügbarkeit |
| STAT_BEFU | 0-n | high | unsigned char | - | TAB_STAT_BEFU | 1.0 | 1.0 | 0.0 | Gurtstraffung Funktion Einstellung Status und Verfügbarkeit |

### RES_0XD51C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYST_PCR_ACT_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der ersten PCR Aktivierung in 10 Millisekunden Entry #1 |
| STAT_PCR_ACT_1 | 0-n | high | unsigned char | - | TAB_STAT_PCR_ACT | 1.0 | 1.0 | 0.0 | Status PreCrash Aktivierung 1 |
| STAT_PCR_PROFILE_1 | 0-n | high | unsigned char | - | TAB_PRECRASH_BELT_PROFILE | 1.0 | 1.0 | 0.0 | Ausführung Gurtprofil-Nummer Entry #1 |
| STAT_SYST_PCR_1_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit des Crashes in 10 Millisekunden Entry #1 |
| STAT_SYST_PCR_ACT_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit der ersten PCR Aktivierung in 10 Millisekunden Entry #2 |
| STAT_PCR_ACT_2 | 0-n | high | unsigned char | - | TAB_STAT_PCR_ACT | - | - | - | Status PreCrash Aktivierung 2 |
| STAT_PCR_PROFILE_2 | 0-n | high | unsigned char | - | TAB_PRECRASH_BELT_PROFILE | - | - | - | Ausführung Gurtprofil-Nummer Entry #2 |
| STAT_SYST_PCR_2_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Interne Systemzeit des Crashes in 10 Millisekunden Entry #2 |

### RES_0XD51D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TVDA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | VDA: Eingang PCM Trigger Zähler |
| STAT_TKAF_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | KAFAS CAN: Eingang PCM Trigger Zähler |
| STAT_TFRR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FRR: Eingang PCM Trigger Zähler |
| STAT_TDBC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DBC: Eingang PCM Trigger Zähler |
| STAT_TPCMC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | PCM CAN: Eingang PCM Trigger Zähler |
| STAT_TROLL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ACSM Rollover CAN + I-brake CAN : Eingang PCM Trigger Zähler |
| STAT_TPDIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DIAG Straffung Anforderung: Eingang PCM Trigger Zähler |
| STAT_TBSR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler BSR-Straffung durch Algo |
| STAT_TBSRDIAG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler BSR-Straffung durch DIAG-Anforderung |
| STAT_AVDA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | VDA Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_AKAF_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | KAFAS Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_AFRR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FRR Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_ADBC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DBC Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_APCMC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | PCM CAN Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_AROLL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ACSM Rollover + I-brake Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_APDIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DIAG Straffung Aktivierungszähler von tatsächlich gestarteten Straffungen |
| STAT_ABSR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | BSR-Algo Straffung Aktivierungszähler von tatsächlich gestarteten BSR-Straffungen |
| STAT_ABSRDIAG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | BSR-DIAG Straffung Aktivierungszähler von tatsächlich gestarteten BSR-Straffungen |

### RES_0XD51E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GURTPARKEN_AKTIVIERUNGEN_GESAMT | 0-n | high | unsigned long | - | - | - | - | - | Summe aller Aktivierungsvorgänge der Gurtparken-Funktion |
| STAT_GURTPARKEN_POSITIONSBESTIMMUNG_TRIGGER | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Trigger für OPS (Positionsbestimmung Gurt) |
| STAT_GURTPARKEN_OFFENE_TUER_TRIGGER | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Trigger für BPDO (Gurtparken bei offener Tür) |
| STAT_GURTPARKEN_GESCHLOSSENE_TUER_TRIGGER | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Trigger für BPDC (Gurtparken bei geschlossener Tür) |
| STAT_GURTPARKEN_DIAGNOSE_TRIGGER | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Trigger für Gurtparken per Diagnosejob |
| STAT_GURTPARKEN_AKTIVIERUNGEN_POSITIONSBESTIMMUNG | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Positionsbestimmungen (OPS) |
| STAT_GURTPARKEN_AKTIVIERUNGEN_OFFENE_TUER | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Aktivierungen Gurtparken bei offener Tür (BPDO) |
| STAT_GURTPARKEN_AKTIVIERUNGEN_GESCHLOSSENE_TUER | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Aktivierungen Gurtparken bei geschlossener Tür (BPDC) |
| STAT_GURTPARKEN_AKTIVIERUNGEN_DIAGNOSE | 0-n | high | unsigned long | - | - | - | - | - | Anzahl der Aktivierungen Gurtparken per Diagnosejob |

### RES_0XD522

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOBBING_SENS_STATUS_NR | 0-n | high | unsigned char | - | TAB_BOB_SENS_STATE | 1.0 | 1.0 | 0.0 | Bobbing Sensor Status: Error/absent/present |
| STAT_BOBBIN_SENS_POSITION_WERT | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | Bobbin Sensor Position in ° |
| STAT_BOBBIN_SENS_DIRECTION_NR | 0-n | high | unsigned char | - | TAB_BOB_SENS_DIRECTION | - | - | - | Bobbin sensor direction: 0x55=Releasing direction 0xAA=Tensioning direction |
| STAT_BOBBIN_SENS_SPEED_WERT | °/s | high | long | - | - | 5.0 | 1.0 | 0.0 | Bobbin speed in °/s, LSB =5°/s, Precision = 10°/s |
| STAT_BOBBIN_MOVE_NR | 0-n | high | unsigned char | - | TAB_BOB_MOV_EVENT | 1.0 | 1.0 | 0.0 | Bobbin Movement |

### RES_0XF010

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCR_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_RES_PCR_ACT | - | - | - | Ergebnis der PCR Aktivierung über Diagnose ohne Gurtabfrage |
| STAT_PCR_PROFIL | + | - | - | 0-n | high | unsigned char | - | TAB_PCR_PROFILE | - | - | - | Nummer des PreCrash Profils |
| STAT_AKTIVIERUNGSDAUER_WERT | + | - | - | ms | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | PreCrash Dauer (Auflösung 100ms) |

### RES_0XF011

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BSR_OHNE_GURTABFRAGE | - | - | + | 0-n | high | unsigned char | - | TAB_RES_PCR_ACT | - | - | - | Ergebnis BSR Aktivierung ohne Gurtabfrage |

### RES_0XF701

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONFIG_PERIOD_WERT | + | + | + | ms | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Zykluszeit der Nachricht = ((FLOOR((CONFIG_PERIOD/25);1)+1)*5ms |
| STAT_COD_DATA_BLOCK_MSB_WERT | + | + | + | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierdatenblöcke 24...17 entsprechend Bit 7...0 |
| STAT_COD_DATA_BLOCK_MID_WERT | + | + | + | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierdatenblöcke 16...9 entsprechend Bit 7...0 |
| STAT_COD_DATA_BLOCK_LSB_WERT | + | + | + | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierdatenblöcke 8...1 entsprechend Bit 7...0 |

### RES_0XF704

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONFIG_PERIOD_WERT | + | + | + | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Zykluszeit der Nachricht = ((FLOOR((CONFIG_PERIOD/10);1)+1)*10ms |
| STAT_MSMNT_ADR1_WERT | + | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Adresse des 1-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |
| STAT_MSMNT_ADR2_WERT | + | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Adresse des 2-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |
| STAT_MSMNT_ADR3_WERT | + | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Adresse des 3-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |
| STAT_MSMNT_ADR4_WERT | + | + | + | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Adresse des 4-ten Frames, der gesendet wird im Bereich: 0x40000000 ... 0x4000FFFF |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GURTSTRAFFUNG | 0xA510 | - | Gurtlose, PreCrash-Straffung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA510 | RES_0xA510 |
| GURTLOSE_ENTFERNEN | 0xA511 | - | Gurtlose entfernen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA511 |
| TELEGRAMM_STATUS_PRECRASH_MASTER | 0xA512 | - | Auslösen der PCM Nachricht auf CAN (PCM - PreCrashMaster) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA512 | RES_0xA512 |
| GURTPARKEN | 0xA513 | - | Ansteuern der Funktion  Gurtparken | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA513 | RES_0xA513 |
| STEUERGERAETE_STATUS | 0xD510 | - | Auslesen SG-Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD510 |
| CRASH_STATISTIK | 0xD51C | - | Crash-Statistik: Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD51C |
| STATISTIK | 0xD51D | - | Precrash Statistik und Gurtlose entfernen Statistik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD51D |
| GURTPARKEN_ZAEHLER | 0xD51E | - | Zählerstände der Gurtparken-Funktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD51E |
| GURTSENSOR | 0xD522 | - | Gurtsensor: Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD522 |
| VDA | 0x4019 | - | Fahrzeug Dynamik Algorithmus (VDA) Status  lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4019 |
| SUMMENZAEHLER | 0x401B | - | Zähler der gestarteten PreCrash und BSR Aktivierungen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x401B | RES_0x401B |
| GURTPARKEN_ZAEHLER | 0x401C | - | Zähler der gestarteten Gurt parken Aktivierungen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x401C | - |
| INTERNE_SYSTEMZEIT | 0x401D | - | ECU-interne Systemzeit (=Zeit nach Power-on/Reset) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x401D | RES_0x401D |
| ACTIVATION_LOGGER_1 | 0x4020 | - | Aktivierungslogger 1 (ältester Eintrag) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4020 |
| ACTIVATION_LOGGER_2 | 0x4021 | - | Aktivierungslogger 2 (mittlerer Eintrag) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4021 |
| ACTIVATION_LOGGER_3 | 0x4022 | - | Aktivierungslogger 3 (neuer Eintrag) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4022 |
| ECU_GESAMTSYSTEMZEIT | 0x4024 | - | ECU Gesamtsystemzeit (Life time) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4024 |
| PCM | 0x4025 | - | PreCrashMaster (PCM) Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4025 |
| CRASH_STATISTIK_UNGEFILTERT | 0x4FFF | - | Service zum Lesen des Ringspeichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4FFF |
| CRASH_STATISTIK_LOESCHEN | 0xF000 | - | Ringspeicher wird komplett gelöscht und auf die NVM-Default Werte gesetzt | - | - | - | - | - | - | - | - | - | 31 | - | - |
| GURTSTRAFFUNG_OHNE_GURTABFRAGE | 0xF010 | - | PreCrash Aktivierung ohne Abfrage der Gurtschloß-Information | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010 | RES_0xF010 |
| BSR_OHNE_GURTABFRAGE | 0xF011 | - | BSR Aktivierung ohne Gurtabfrage | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF011 |
| CAN_MESSUNGEN | 0xF701 | - | Start/Stop Entwicklungsnachricht Measurement Frame 0x7C6 auf CAN-Bus senden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF701 | RES_0xF701 |
| CAN_SPEICHER_LESEN | 0xF704 | - | Start/Stop Entwicklungsnachricht Read Memory Frame 0x7C7 auf CAN-Bus senden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF704 | RES_0xF704 |

### TAB_BOB_MOV_EVENT

| WERT | TEXT |
| --- | --- |
| 0x55 | Bobbin dreht nicht |
| 0xAA | Bobbin dreht |
| 0xFF | Ungültig |

### TAB_BOB_SENS_DIRECTION

| WERT | TEXT |
| --- | --- |
| 0x55 | Richtung Lösen |
| 0xAA | Richtung Straffen |
| 0xFF | Ungültig |

### TAB_BOB_SENS_STATE

| WERT | TEXT |
| --- | --- |
| 0x55 | Bobbin Sensor NOK |
| 0xAA | Bobbin Sensor OK |
| 0xFF | Ungültig |

### TAB_CR_NACHRICHT_EXT_ACR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Kollision erkannt |
| 0x01 | Trigger ReMA |
| 0x02 | Trigger FH, SHD |
| 0x03 | Trigger ReMA / FH, SHD |
| 0x80 | Situation nicht mehr vorhanden |
| 0xFF | Signal ungültig |

### TAB_FORCE_EXT_ACT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Kollision erkannt |
| 0x01 | Profil 1 |
| 0x02 | Profil 2 |
| 0x03 | Profil 3 |
| 0x04 | Profil 4 |
| 0x05 | Profil 5 |
| 0x06 | Profil 6 |
| 0x07 | Profil 7 |
| 0x08 | Profil 8 |
| 0x0D | Nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Ungültig |

### TAB_GURTPARKEN_BETRIEBSZUSTAND

| WERT | TEXT |
| --- | --- |
| 1 | Positionsbestimmung |
| 2 | Gurtparken, Tür offen |
| 3 | Gurtparken, Tür geschlossen |

### TAB_GURTSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Gurtkontakt Fahrerseite: Status nicht gesteckt, Gurtkontakt Beifahrerseite: Status nicht gesteckt |
| 0x01 | Gurtkontakt Fahrerseite: Status gesteckt, Gurtkontakt Beifahrerseite: Status nicht gesteckt |
| 0x02 | Gurtkontakt Fahrerseite: Status nicht verbaut, Gurtkontakt Beifahrerseite: Status nicht gesteckt |
| 0x03 | Gurtkontakt Fahrerseite: Status nicht gültig, Gurtkontakt Beifahrerseite: Status nicht gesteckt |
| 0x10 | Gurtkontakt Fahrerseite: Status nicht gesteckt, Gurtkontakt Beifahrerseite: Status gesteckt |
| 0x11 | Gurtkontakt Fahrerseite: Status gesteckt, Gurtkontakt Beifahrerseite: Status gesteckt |
| 0x12 | Gurtkontakt Fahrerseite: Status nicht verbaut, Gurtkontakt Beifahrerseite: Status gesteckt |
| 0x13 | Gurtkontakt Fahrerseite: Status nicht gültig, Gurtkontakt Beifahrerseite: Status gesteckt |
| 0x20 | Gurtkontakt Fahrerseite: Status nicht gesteckt, Gurtkontakt Beifahrerseite: Status nicht verbaut |
| 0x21 | Gurtkontakt Fahrerseite: Status gesteckt, Gurtkontakt Beifahrerseite: Status nicht verbaut |
| 0x22 | Gurtkontakt Fahrerseite: Status nicht verbaut, Gurtkontakt Beifahrerseite: Status nicht verbaut |
| 0x23 | Gurtkontakt Fahrerseite: Status nicht gültig, Gurtkontakt Beifahrerseite: Status nicht verbaut |
| 0x30 | Gurtkontakt Fahrerseite: Status nicht gesteckt, Gurtkontakt Beifahrerseite: Status nicht gültig |
| 0x31 | Gurtkontakt Fahrerseite: Status gesteckt, Gurtkontakt Beifahrerseite: Status nicht gültig |
| 0x32 | Gurtkontakt Fahrerseite: Status nicht verbaut, Gurtkontakt Beifahrerseite: Status nicht gültig |
| 0x33 | Gurtkontakt Fahrerseite: Status nicht gültig, Gurtkontakt Beifahrerseite: Status nicht gültig |
| 0xFF | Ungültig |

### TAB_HW

| WERT | TEXT |
| --- | --- |
| 0x00 | Hardware voll funktionsfähig |
| 0x01 | Hardware teilweise funktionsfähig (Funktionale Einschränkungen) |
| 0x02 | Hardware fehlerhaft (Keine Funktion) |
| 0x03 | Hardware nicht bereit (Selbsttest nicht vollständig) |
| 0xFF | Ungültig |

### TAB_PAS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine PCR Aktivierung |
| 0x01 | VDA (Fzg Dynamik Algo) |
| 0x02 | KAFAS |
| 0x04 | FRR |
| 0x08 | PCM via CAN |
| 0x10 | Rollover |
| 0x20 | Diagnose Aktivierung |
| 0x40 | DBC Aktivierung |
| 0xFF | Ungültig |

### TAB_PCR_PROFILE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Profil |
| 0x01 | PCR Profil 1 |
| 0x02 | PCR Profil 2 |
| 0x03 | PCR Profil 3 |
| 0x04 | PCR Profil 4 |
| 0x05 | PCR Profil 5 |
| 0x06 | PCR Profil 6 |
| 0x07 | PCR Profil 7 |
| 0x08 | PCR Profil 8 |
| 0x09 | Retraktor Check |
| 0xFF | Ungültig |

### TAB_PRECRASH_BELT_PROFILE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Profil |
| 0x01 | PreCrash Level 1 |
| 0x02 | PreCrash Level 2 |
| 0x03 | PreCrash Level 3 |
| 0x04 | PreCrash Level 4 |
| 0x05 | PreCrash Level 5 |
| 0x06 | PreCrash Level 6 |
| 0x07 | PreCrash Level 7 |
| 0x08 | PreCrash Level 8 |
| 0x09 | Retraktor Check |
| 0xFF | Profil ungültig |

### TAB_RES_EXT_ACT

| WERT | TEXT |
| --- | --- |
| 0x00 | Beendet NOK (Anforderung wegen Fehler abgebrochen) |
| 0x01 | Beendet OK (Anforderung durchgeführt oder Fehler abgebrochen) |
| 0x02 | In Ausführung (letzte Anforderung aktiv) |
| 0xFF | Ungültig |

### TAB_RES_EXT_PCM_CAN_ACT

| WERT | TEXT |
| --- | --- |
| 0x01 | Beendet OK (Anforderung durchgeführt oder Fehler abgebrochen) |
| 0x02 | In Ausführung (letzte Anforderung aktiv) |
| 0xFF | Ungültig |

### TAB_RES_PCR_ACT

| WERT | TEXT |
| --- | --- |
| 0x00 | Beendet NOK (Anforderung wegen Fehler abgebrochen) |
| 0x01 | Beendet OK (Anforderung durchgeführt oder Fehler abgebrochen) |
| 0x02 | In Ausführung (letzte Anforderung aktiv) |
| 0xFF | Ungültig |

### TAB_STAT_BEFU

| WERT | TEXT |
| --- | --- |
| 0x00 | BEFU nicht kodiert, BEFU nicht verfügbar |
| 0x10 | BEFU kodiert, BEFU nicht verfügbar |
| 0x11 | BEFU kodiert, BEFU verfügbar |
| 0xFF | Ungültig |

### TAB_STAT_BSR

| WERT | TEXT |
| --- | --- |
| 0x00 | BSR nicht kodiert, BSR nicht verfügbar |
| 0x10 | BSR kodiert, BSR nicht verfügbar |
| 0x11 | BSR kodiert, BSR verfügbar |
| 0xFF | Ungültig |

### TAB_STAT_BSR_LOOP

| WERT | TEXT |
| --- | --- |
| 0x00 | BSR_LOOP nicht kodiert, BSR_LOOP nicht verfügbar |
| 0x10 | BSR_LOOP kodiert, BSR_LOOP nicht verfügbar |
| 0x11 | BSR_LOOP kodiert, BSR_LOOP verfügbar |
| 0xFF | Ungültig |

### TAB_STAT_PCM

| WERT | TEXT |
| --- | --- |
| 0x00 | PCM nicht kodiert, PCM nicht verfügbar |
| 0x10 | PCM kodiert, PCM nicht verfügbar |
| 0x11 | PCM kodiert, PCM verfügbar |
| 0xFF | Ungültig |

### TAB_STAT_PCR_ACT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktivierung |
| 0x01 | Aktivierung durch VDA |
| 0x02 | Aktivierung durch KAFAS |
| 0x04 | Aktivierung durch FRR |
| 0x08 | Aktivierung durch PCM via CAN |
| 0x10 | Aktivierung durch ROLLOVER |
| 0x20 | Aktivierung durch DIAG |
| 0x40 | Aktivierung durch DBC |
| 0xFF | Ungültig |

### TAB_STAT_VDA

| WERT | TEXT |
| --- | --- |
| 0x00 | VDA nicht kodiert, VDA nicht verfügbar |
| 0x10 | VDA kodiert, VDA nicht verfügbar |
| 0x11 | VDA kodiert, VDA verfügbar |
| 0xFF | Ungültig |

### TAB_STOF

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert |
| 0x01 | Nicht aktiv (bereit, keine Auslösung) |
| 0x02 | Aktiv (Ausgang zu einem Event gesetzt) |
| 0x03 | Reserviert |
| 0x04 | Fehler |
| 0x05 | Reserviert |
| 0xFF | Ungültig |

### TAB_TEMPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Temperatur nach Systemtemperatur Modell OK |
| 0x01 | Sehr warm, keine neue Straffung erlaubt |
| 0x02 | Übertemperatur, Abbruch der Straffung erforderlich |
| 0xFF | Ungültig |

### TAB_VOLT

| WERT | TEXT |
| --- | --- |
| 0x00 | Normaler Betriebsspannungsbereich |
| 0x01 | Unterspannung |
| 0x02 | Überspannung |
| 0xFF | Ungültig |

### TAB_ZUSTAND_GURTPARKEN

| WERT | TEXT |
| --- | --- |
| 0 | Gurtparken beendet mit Fehler |
| 1 | Gurtparken erfolgreich beendet |
| 2 | Gurtparken aktiv (noch nicht beendet) |
