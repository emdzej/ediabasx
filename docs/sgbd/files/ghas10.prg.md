# ghas10.prg

## General

|  |  |
| --- | --- |
| File | ghas10.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 31 |
| Origin | BMW Entwicklung Marcus_Müller |
| Revision | 1.203 |
| Author | GKN_Driveline EE&Software Stefan_Fries |
| ECU Comment | Geregelte Hinterachssperre |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Geregelte HinterAchsSperre |  |  |
| ORIGIN | string | BMW Entwicklung Marcus_Müller |  |  |
| REVISION | string | 1.203 |  |  |
| AUTHOR | string | GKN_Driveline EE&Software Stefan_Fries |  |  |
| COMMENT | string | Geregelte Hinterachssperre |  |  |
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
| 0xCCD415 | Botschaft (40.1.4 , Drehmoment Kurbelwelle 1 - Winkel Fahrpedal) Alive-Zähler-Fehler, Empfänger GHAS, Sender DME1 | 1 |
| 0x482B8C | GHAS Stellmotor, Ansteuerung: Motor+ oder Motor- offene Leitung | 0 |
| 0xCCEC01 | Botschaft (40.1.4 , Winkel Fahrpedal) Signal undefiniert, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCEC03 | Botschaft (55.3.4 , Geschwindigkeit Fahrzeug) Signal undefiniert, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482BA6 | GHAS Stellmotor, Ansteuerung: Motor+ und Motor- Leitungen vertauscht | 0 |
| 0x482BA5 | GHAS interner Steuergerätefehler: Hardware Funktionsüberwachung hat ausgelöst | 0 |
| 0xCCD40C | Botschaft (67.0.2 , Soll Quermomentenverteilung Hinterachse) fehlt, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482B92 | GHAS Stellmotor, Ansteuerung: Motorendstufentreiber überlastet und temporär nicht verfügbar (Übertemperaturschutz aktiv) | 0 |
| 0xCCD422 | Botschaft (56.1.2 , Neigung Fahrbahn - Lenkwinkel Vorderachse Effektiv) Prüfsummenfehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482B83 | GHAS Klemme 30b: Überspannung | 1 |
| 0xCCEC0E | Botschaft (47.1.2 , Status Stabilisierung DSC) Signal ungültig, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0xCCD403 | Botschaft (46.0.1 , Ist Drehzahl Rad) fehlt, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482BD0 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x482B9F | GHAS interner Steuergerätefehler: Software Funktionsüberwachung hat ausgelöst | 0 |
| 0xCCD41F | Botschaft (116.0.2 , Klemmen) Alive-Zähler-Fehler, Empfänger GHAS, Sender CAS | 1 |
| 0x02FF0F | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x482B8F | GHAS Oeltemperatursensor, Signal: Temperatur nicht plausibel | 0 |
| 0xCCC41F | GHAS FlexRay: Physikalischer Fehler | 0 |
| 0x482BD1 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0xCCEC19 | Botschaft (46.0.1 , Ist Drehzahl Rad) Signal ungültig, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0xCCD426 | Botschaft (55.0.2 , Längsbeschleunigung Schwerpunkt - Querbeschleunigung Schwerpunkt) Prüfsummenfehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482B87 | GHAS Stellmotor Hallsensor 2, Signal: Spannung ausserhalb gültigem Bereich | 0 |
| 0xCCD417 | Botschaft (55.3.4 , Geschwindigkeit Fahrzeug) Alive-Zähler-Fehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCD407 | Botschaft (47.1.2 , Status Stabilisierung DSC) fehlt, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0xCCD412 | Botschaft (41.3.4 , Radmoment Antrieb 1 - Radmoment Antrieb 2) fehlt, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCEC14 | Botschaft (271.4.8 , Toleranzabgleich Rad) Signal ungültig, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCEC09 | Botschaft (56.1.2 , Neigung Fahrbahn - Lenkwinkel Vorderachse Effektiv) Signal ungültig, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCEC18 | Botschaft (41.3.4 , Radmoment Antrieb 1 - Radmoment Antrieb 2) Signal ungültig, Empfänger GHAS, Sender DME1 | 1 |
| 0x482BA8 | GHAS Sperre: Sperre überlastet und temporär nicht verfügbar  (Übertemperaturschutz aktiv) | 0 |
| 0xCCEC08 | Botschaft (40.3.4 , Radmoment Antrieb 5 - Radmoment Antrieb 4) Signal undefiniert, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD419 | Botschaft (55.0.2 , Längsbeschleunigung Schwerpunkt - Querbeschleunigung Schwerpunkt) Alive-Zähler-Fehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482B8E | GHAS Stellmotor Ansteuerung: Motor+ oder Motor- Kurzschluss nach Plus | 0 |
| 0xCCEC02 | Botschaft (46.0.1 , Ist Drehzahl Rad) Signal undefiniert, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482B81 | GHAS Klemme 30: Überspannung | 1 |
| 0xCCEC10 | Botschaft (252.1.4, Außentemperatur) Signal undefiniert, Empfänger GHAS, Sender Kombi | 1 |
| 0xCCD405 | Botschaft (56.0.2 , Vertikalbeschleunigung Schwerpunkt - Giergeschwindigkeit Fahrzeug) fehlt, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCEC06 | Botschaft (271.4.8 , Toleranzabgleich Rad) Signal undefiniert, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482B80 | GHAS Klemme 30: Unterspannung | 1 |
| 0x482B8B | GHAS Stellmotor, Ansteuerung: Strommessung nicht plausibel | 0 |
| 0xCCD421 | Botschaft (40.3.4 , Radmoment Antrieb 5 - Radmoment Antrieb 4)Alive-Zähler-Fehler, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD424 | Botschaft (46.0.1 , Ist Drehzahl Rad) Prüfsummenfehler, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482B96 | GHAS Steuergerät : Motorendstufentreiber Initialisierungsfehler | 0 |
| 0xCCD401 | Botschaft (56.1.2 , Neigung Fahrbahn - Lenkwinkel Vorderachse Effektiv) fehlt, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482BD3 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0xCCEC20 | Botschaft (252.1.4 , Außentemperatur) Signal ungültig, Empfänger GHAS, Sender Kombi | 1 |
| 0xCCEC0C | Botschaft (56.0.2 , Vertikalbeschleunigung Schwerpunkt - Giergeschwindigkeit Fahrzeug) Signal ungültig, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482BA1 | GHAS interner Steuergerätefehler: Software Fehlfunktion | 0 |
| 0xCCD41B | Botschaft (230.0.2 , Daten Antriebsstrang 2) Alive-Zähler-Fehler, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD40A | Botschaft (276.2.8 , Relativzeit) fehlt, Empfänger GHAS, Sender Kombi | 1 |
| 0xCCEC07 | Botschaft (41.3.4 , Radmoment Antrieb 1 - Radmoment Antrieb 2) Signal undefiniert, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD40F | Botschaft (275.7.8 , Fahrgestellnummer) fehlt, Empfänger GHAS, Sender CAS | 1 |
| 0xCCEC16 | Botschaft (275.1.8 , Fahrzeugzustand) Signal ungültig, Empfänger GHAS, Sender JBBF | 1 |
| 0xCCD428 | Botschaft (230.0.2 , Daten Antriebsstrang 2) Prüfsummenfehler, Empfänger GHAS, Sender DME1 | 1 |
| 0x482B89 | GHAS Stellmotor Temperatursensor, Signal: Temperatur ausserhalb gültigem Bereich | 0 |
| 0x482B94 | GHAS interner Steuergerätefehler: Motorendstufe defekt | 0 |
| 0xCCD40E | Botschaft (271.4.8 , Toleranzabgleich Rad) fehlt, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCD414 | Botschaft (56.1.2 , Neigung Fahrbahn - Lenkwinkel Vorderachse Effektiv) Alive-Zähler-Fehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCD420 | Botschaft (41.3.4 , Radmoment Antrieb 1 - Radmoment Antrieb 2)Alive-Zähler-Fehler, Empfänger GHAS, Sender DME1 | 1 |
| 0x482B84 | GHAS Stellmotor Hallsensoren, Versorgungsspannung: ausserhalb gültigem Bereich | 0 |
| 0xCCEC0D | Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt - Querbeschleunigung Schwerpunkt) Signal ungültig, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCD404 | Botschaft (55.3.4 , Geschwindigkeit Fahrzeug) fehlt, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482BD4 | Codierung: Signatur für Daten ungültig | 0 |
| 0xCCD41D | Botschaft (67.0.2 , Soll Quermomentenverteilung Hinterachse) Alive-Zähler-Fehler, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482B8D | GHAS Stellmotor, Ansteuerung: Motor+ oder Motor- Kurzschluss nach Masse | 0 |
| 0xCCD42A | Botschaft (67.0.2 , Soll Quermomentenverteilung Hinterachse) Prüfsummenfehler, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482BAC | GHAS, DSC Funktion: nicht verfügbar | 1 |
| 0xCCD409 | Botschaft (252.1.4 , Außentemperatur) fehlt, Empfänger GHAS, Sender Kombi | 1 |
| 0x482BA7 | GHAS Sperre: Sperre nicht an SG angelernt (Kalibrierung Sperre fehlt) | 0 |
| 0xCCD425 | Botschaft (56.0.2 , Vertikalbeschleunigung Schwerpunkt - Giergeschwindigkeit Fahrzeug) Prüfsummenfehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482B88 | GHAS Stellmotor Hallsensoren, Signale: Hallsensor Signalleitungen vertauscht | 0 |
| 0x482BAE | GHAS Sperre: Initialisierung konnte nicht im erlaubten Zeitfenster abgeschlossen werden | 0 |
| 0xCCD416 | Botschaft (46.0.1 , Ist Drehzahl Rad) Alive-Zähler-Fehler, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0xCCD408 | Botschaft (230.0.2 , Daten Antriebsstrang 2) fehlt, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD42B | Botschaft (116.0.2 , Klemmen) Prüfsummenfehler, Empfänger GHAS, Sender CAS | 1 |
| 0xCCEC13 | Botschaft (67.0.2 , Soll Quermomentenverteilung Hinterachse) Signal ungültig, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482B9E | GHAS interner Steuergerätefehler: Steuergerät defekt | 0 |
| 0xCCD413 | Botschaft (40.3.4 , Radmoment Antrieb 5 - Radmoment Antrieb 4) fehlt, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD41E | Botschaft (55.3.4 , Geschwindigkeit Fahrzeug) Prüfsummenfehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x020F00 | Energiesparmode aktiv | 0 |
| 0x482B85 | GHAS Stellmotor Temperatursensor, Signal: Temperatur nicht plausibel | 0 |
| 0xCCC420 | GHAS FlexRay: Controller Fehler | 0 |
| 0x482BD2 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0xCCEC0A | Botschaft (40.1.4 , Drehmoment Kurbelwelle 1 - Winkel Fahrpedal) Signal ungültig, Empfänger GHAS, Sender DME1 | 1 |
| 0x482B82 | GHAS Klemme 30b: Unterspannung | 1 |
| 0xCCD42D | Botschaft (40.3.4 , Radmoment Antrieb 5 - Radmoment Antrieb 4) Prüfsummenfehler, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCEC0F | Botschaft (230.0.2 , Daten Antriebsstrang 2) Signal ungültig, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD406 | Botschaft (55.0.2 , Längsbeschleunigung Schwerpunkt - Querbeschleunigung Schwerpunkt) fehlt, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482BAD | GHAS Sperre: mechanisches Spiel in der Sperre zu gross | 0 |
| 0x482B86 | GHAS Stellmotor Hallsensor 1, Signal: Spannung ausserhalb gültigem Bereich | 0 |
| 0xCCD42C | Botschaft (41.3.4 , Radmoment Antrieb 1 - Radmoment Antrieb 2) Prüfsummenfehler, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD423 | Botschaft (40.1.4 , Drehmoment Kurbelwelle 1 - Winkel Fahrpedal) Prüfsummenfehler, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCEC05 | Botschaft (55.0.2 , Längsbeschleunigung Schwerpunkt - Querbeschleunigung Schwerpunkt) Signal undefiniert, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCEC17 | Botschaft (116.0.2 , Klemmen) Signal ungültig, Empfänger GHAS, Sender CAS | 1 |
| 0x482BA9 | GHAS Stellmotor Hallsensoren, Signale: nicht plausibel (Motorposition nicht plausibel) | 0 |
| 0xCCD418 | Botschaft (56.0.2 , Vertikalbeschleunigung Schwerpunkt - Giergeschwindigkeit Fahrzeug) Alive-Zähler-Fehler, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x482B9C | GHAS interner Steuergerätefehler: unerwarteter Reset | 1 |
| 0xCCD40B | Botschaft (276.4.8 , Kilometerstand - Reichweite) fehlt, Empfänger GHAS, Sender Kombi | 1 |
| 0xCCEC11 | Botschaft (56.1.2 , Neigung Fahrbahn - Lenkwinkel Vorderachse Effektiv) Signal undefiniert, Empfänger GHAS, Sender ICM_QL | 1 |
| 0xCCD410 | Botschaft (116.0.2 , Klemmen) fehlt, Empfänger GHAS, Sender CAS | 1 |
| 0xCCEC15 | Botschaft (275.7.8 , Fahrgestellnummer) Signal ungültig, Empfänger GHAS, Sender CAS | 1 |
| 0xCCEC1A | Botschaft (40.3.4 , Radmoment Antrieb 5 - Radmoment Antrieb 4) Signal ungültig, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCD427 | Botschaft (47.1.2 , Status Stabilisierung DSC) Prüfsummenfehler, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482B8A | GHAS Oeltemperatursensor, Signal: Temperatur ausserhalb gütligem Bereich | 0 |
| 0x482B93 | GHAS Stellmotor, Ansteuerung: Motorendstufentreiber überlastet und permanent nicht verfügbar | 0 |
| 0xCCD402 | Botschaft (40.1.4 , Drehmoment Kurbelwelle 1 - Winkel Fahrpedal) fehlt, Empfänger GHAS, Sender DME1 | 1 |
| 0xCCEC0B | Botschaft (55.3.4 , Geschwindigkeit Fahrzeug) Signal ungültig, Empfänger GHAS, Sender ICM_QL | 1 |
| 0x482BA0 | GHAS interner Steuergerätefehler: ROM Fehler detektiert | 0 |
| 0xCCD41A | Botschaft (47.1.2 , Status Stabilisierung DSC) Alive-Zähler-Fehler, Empfänger GHAS, Sender DSC_Modul | 1 |
| 0x482BAB | GHAS Sperre: Stellmotor dreht frei | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 16 |
| F_HLZ_VIEW | nein |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | CCC473 | CCC47C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC50B | CCC514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC469 | CCC472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC501 | CCC50A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC40B | CCC414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC43F | CCC449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC47D | CCC486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC41F | CCC43E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC415 | CCC41E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC45F | CCC468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC401 | CCC40A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC487 | CCC48F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CCC600 | CCC6FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | CCCC00 | CCD3FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | CCCBFF | CCCBFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | CCD400 | CD03FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | CCD400 | CD03FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 482B80 | 482BFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4001 | SPANNUNG_KL30 | V | - | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4002 | SPANNUNG_KL30B | V | - | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4003 | Statussignale Leistungsteil | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4005 | SPERRMOMENT | Nm | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | POSITION_SPERRE_VORGABE | Inkremente | - | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x4007 | POSITION_SPERRE | Inkremente | - | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x4008 | REKALIBRIERUNG_OFFSET_SPERRE | Inkremente | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x4009 | TEMP_OEL | °C | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x400A | TEMP_MOTOR | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x400B | TEMP_KUPPLUNG | °C | - | unsigned char | - | 2.0 | 1.0 | -40.0 |
| 0x400C | MOTORSTROM_VORGABE | A | - | unsigned char | - | 1.0 | 3.0 | -40.0 |
| 0x400D | MOTORSTROM | A | - | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x400E | MOTOR_PWM_VORGABE | % | - | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x400F | GMO_FLAGS_GRUPPE_A | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | SPERRMOMENT_VORGABE_IPM | Nm | High | unsigned char | - | 10.0 | 1.0 | -10.0 |
| 0x4013 | ZUSTAND_ECUM | 0-n | - | 0xFF | ZUSTAND_ECUM | 1.0 | 1.0 | 0.0 |
| 0x4014 | GMO_FLAGS_GRUPPE_B | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | GMO_FLAGS_GRUPPE_C | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4016 | APPL_FLAGS_GRUPPE_A | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4017 | TEMP_EX | °C | - | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4018 | ENERGIE_SPERRE | J | High | unsigned int | - | 65536.0 | 1.0 | 0.0 |
| 0x401B | DELTA_N_SPERRE | 1/min | - | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x401C | ENERGIE_SPERRE_AKTUELL | J | - | unsigned char | - | 1.0 | 1.0 | 0.0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x482BE0 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x482BE1 | FLS_E_WRITE_FAILED | 0 |
| 0x482B90 | GHAS Steuergerät : Motorendstufentreiber Initialisierungsfehler Rohfehler (GMO-Flag B.5) | 0 |
| 0xCCD411 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x482BDD | FLS_E_COMPARE_FAILED | 0 |
| 0x482BD9 | FLS_E_READ_FAILED | 0 |
| 0x482BDF | NVM_E_WRITE_FAILED | 0 |
| 0x482BAA | GHAS Getriebehinterachssperre: fehlgeschlagene Kalibrierung | 0 |
| 0x482BD5 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x482BD7 | NVM_E_READ_ALL_FAILED | 0 |
| 0x482B91 | GHAS Steuergerät: Motorendstufe überlastet | 0 |
| 0x482BDC | NVM_E_CONTROL_FAILED | 0 |
| 0x482BDA | NVM_E_READ_FAILED | 0 |
| 0x482BE2 | NVM_E_ERASE_FAILED | 0 |
| 0x482BDB | PIA_E_IO_ERROR | 0 |
| 0x482BD8 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x482B9D | GHAS interner Steuergerätefehler: unerwarteter Reset Rohfehler(GMO-Flag A.2) | 0 |
| 0x482BE3 | FLS_E_ERASE_FAILED | 0 |
| 0x482BDE | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x482B95 | GHAS Stellmotor Hallsensoren, Versorgungsspannung: ausserhalb gültigem Bereich Rohfehler (GMO-Flag C.6) | 0 |
| 0x482BD6 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4001 | SPANNUNG_KL30 | V | - | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4002 | SPANNUNG_KL30B | V | - | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4003 | Statussignale Leistungsteil | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4005 | SPERRMOMENT | Nm | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | POSITION_SPERRE_VORGABE | Inkremente | - | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x4007 | POSITION_SPERRE | Inkremente | - | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x4008 | REKALIBRIERUNG_OFFSET_SPERRE | Inkremente | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x4009 | TEMP_OEL | °C | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x400A | TEMP_MOTOR | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x400B | TEMP_KUPPLUNG | °C | - | unsigned char | - | 2.0 | 1.0 | -40.0 |
| 0x400C | MOTORSTROM_VORGABE | A | - | unsigned char | - | 1.0 | 3.0 | -40.0 |
| 0x400D | MOTORSTROM | A | - | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x400E | MOTOR_PWM_VORGABE | % | - | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x400F | GMO_FLAGS_GRUPPE_A | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | SPERRMOMENT_VORGABE_IPM | Nm | High | unsigned char | - | 10.0 | 1.0 | -10.0 |
| 0x4013 | ZUSTAND_ECUM | 0-n | - | 0xFF | ZUSTAND_ECUM | 1.0 | 1.0 | 0.0 |
| 0x4014 | GMO_FLAGS_GRUPPE_B | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | GMO_FLAGS_GRUPPE_C | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4016 | APPL_FLAGS_GRUPPE_A | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4017 | TEMP_EX | °C | - | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4018 | ENERGIE_SPERRE | J | High | unsigned int | - | 65536.0 | 1.0 | 0.0 |
| 0x401B | DELTA_N_SPERRE | 1/min | - | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x401C | ENERGIE_SPERRE_AKTUELL | J | - | unsigned char | - | 1.0 | 1.0 | 0.0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_DEMAND_SELFTEST | 0xAB63 | - | Kalibrierung des System | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB63 |
| POSITION_SPERRE | 0xDC45 | - | Ausgabe der aktuellen Sperrenposition (in Inkrementen) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC45 |
| TEMP_MOTOR | 0xDC46 | STAT_MOTORTEMP_WERT | Motortemperatur Bereich von -50 Grad C bis 250 Grad C | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_OEL | 0xDC47 | STAT_OELTEMP_WERT | Öltemperatur Hinterachsgetriebe Bereich von -50 Grad C bis 250 Grad C | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_HALLSENSOREN | 0xDC48 | STAT_SPANNUNG_HALLSENSOR_WERT | Versorgungsspannung Hallsensoren | Volt | - | - | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_MOTORTEMPSENSOR | 0xDC49 | STAT_SPANNUNG_MOTORTEMPSENSOR_WERT | Versorgungsspannung Motortemperatursensor | Volt | - | - | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_OELTEMPSENSOR | 0xDC4A | STAT_SPANNUNG_OELTEMPSENSOR_WERT | Versorgungsspannung Öltemperatursensor | Volt | - | - | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| MOTORSTROM | 0xDC4B | STAT_MOTORSTROM_WERT | Status Motorstrom | A | - | - | int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SPERRMOMENT | 0xDC4C | - | Vorgeben und Auslesen des Sperrmoments | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDC4C | RES_0xDC4C |
| SPANNUNG_KL30 | 0x4001 | STAT_SPANNUNG_KL30_WERT | Versorgungsspannung GHAS Klemme 30 | V | - | high | unsigned char | - | 1.0 | 10.0 | 5.0 | - | 22 | - | - |
| SPANNUNG_KL30B | 0x4002 | STAT_SPANNUNG_KL30B_WERT | Versorgungsspannung GHAS Klemme 30B | V | - | high | unsigned char | - | 1.0 | 10.0 | 5.0 | - | 22 | - | - |
| ZUSTAND_IPM | 0x4003 | STAT_ZUSTAND_IPM_WERT | Betriebszustand Hardwareregler (IPM) | HEX | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPERRMOMENT_VORGABE_TASC | 0x4004 | STAT_SPERRMOMENT_VORGABE_WERT | Sperrmoment Vorgabe GHAS (TASC) | Nm | - | high | unsigned char | - | 10.0 | 1.0 | 0.0 | - | 22 | - | - |
| POSITION_SPERRE_VORGABE_ABSOLUT | 0x4006 | STAT_POSITION_SPERRE_VORGABE_ABSOLUT_WERT | Sollposition Sperre Ungültigkeitsbezeichner (0xFF) | Inkremente | - | high | unsigned char | - | 4.0 | 1.0 | -100.0 | - | 22 | - | - |
| POSITION_SPERRE_ABSOLUT | 0x4007 | STAT_POSITION_SPERRE_ABSOLUT_WERT | Istposition Sperre Ungültigkeitsbezeichner FFh | Inkremente | - | high | unsigned char | - | 4.0 | 1.0 | -100.0 | - | 22 | - | - |
| REKALIBRIERUNG_OFFSET_SPERRE | 0x4008 | STAT_REKALIBRIERUNG_OFFSET_SPERRE_WERT | Offset Sperre aus Rekalibrierung Ungültigkeitswert 0xFF | Inkremente | - | high | unsigned char | - | 2.0 | 1.0 | -100.0 | - | 22 | - | - |
| TEMP_KUPPLUNG | 0x400B | STAT_TEMP_KUPPLUNG_WERT | Kupplungstemperatur GHAS Ungültigkeitsbezeichner FFh | - | - | high | unsigned char | - | 2.0 | 1.0 | -40.0 | - | 22 | - | - |
| MOTORSTROM_VORGABE | 0x400C | STAT_MOTORSTROM_VORGABE_WERT | Sollstrom Aktuatormotor Sperre Ungültigkeitsbezeichner FFh | A | - | high | unsigned char | - | 1.0 | 3.0 | -40.0 | - | 22 | - | - |
| MOTOR_PWM_VORGABE | 0x400E | STAT_MOTOR_PWM_VORGABE_WERT | PWM Duty Aktuatormotor Sperre | % | - | high | unsigned char | - | 1.0 | 1.0 | -100.0 | - | 22 | - | - |
| GMO_FLAGS_GRUPPE_A | 0x400F | STAT_GMO_FLAGS_GRUPPE_A_WERT | GHAS intern GMO  Failure Flag Status Gruppe A | HEX | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPERRMOMENT_BEGRENZUNG_DSC | 0x4010 | STAT_SPERRMOMENT_BEGRENZUNG_WERT | Begrenzung des maximalen Sperrmoments | Nm | - | high | unsigned int | - | 3.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPERRMOMENT_VORGABE_DSC | 0x4011 | STAT_SPERRMOMENT_VORGABE_WERT | Sperrmoment Vorgabe DSC | Nm | - | high | int | - | 1.5 | 1.0 | -3072.0 | - | 22 | - | - |
| SPERRMOMENT_VORGABE_IPM | 0x4012 | STAT_SPERRMOMENT_VORGABE_IPM_WERT | Soll Sperrmoment GHAS (IPM intern) Ungültigkeitsbezeichner FFh | Nm | - | high | unsigned char | - | 10.0 | 1.0 | -10.0 | - | 22 | - | - |
| ZUSTAND_ECUM | 0x4013 | STAT_ZUSTAND_ECUM | Zustand GHAS ECU State Manager  (MOS) | 0-n | - | high | unsigned char | ZUSTAND_ECUM | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GMO_FLAGS_GRUPPE_B | 0x4014 | STAT_GMO_FLAGS_GRUPPE_B_WERT | GHAS intern GMO  Failure Flag Status Gruppe B | HEX | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GMO_FLAGS_GRUPPE_C | 0x4015 | STAT_GMO_FLGS_GRUPPE_C_WERT | GHAS intern GMO  Failure Flag Status Gruppe C | HEX | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| APPL_FLAGS_GRUPPE_A | 0x4016 | STAT_APPL_FLAGS_GRUPPE_A_WERT | GHAS intern Application Failure Flag Status Gruppe A | HEX | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_EX | 0x4017 | STAT_TEMP_EX_WERT | Außentemperatur Ungültigkeitsbezeichner FFh | °C | - | high | unsigned char | - | 0.5 | 1.0 | -40.0 | - | 22 | - | - |
| ENERGIE_SPERRE | 0x4018 | STAT_ENERGIE_SPERRE_WERT | Gesamte umgesetzte Energie Sperre | - | - | high | unsigned int | - | 65536.0 | 1.0 | 0.0 | - | 22 | - | - |
| REKALIBRIERUNG_ERFORDERLICH_SPERRE | 0x4019 | STAT_REKALIBRIERUNG_ERFORDERLICH_SPERRE_WERT | Fortschritt bis zur nächsten, selbständigen Rekalibrierung der Sperre 0% Startwert nach erfolgreich durchgeführter Rekalibrierung  100% Rekalibrierung erforderlich | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SWID_LIEFERANT | 0x401A | STAT_SWID_LIEFERANT_TEXT | GKN interne Software Identifikationsnummer | TEXT | - | high | string[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DELTA_N_SPERRE | 0x401B | STAT_DELTA_N_SPERRE_WERT | Differenzdrehzahl Sperre Ungültigkeitsbezeichner FFh | 1/min | - | high | char | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| ENERGIE_SPERRE_AKTUELL | 0x401C | STAT_ENERGIE_SPERRE_AKTUELL_WERT | Aktuell umgesetzte Energie Sperre innerhalb der letzten Minute tbc | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_GHAS_BELASTUNG_GESAMT | 0x401D | - | GHAS und HAG Belastung über gesamte Betriebszeit für FASTA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401D |
| FASTA_GHAS_BELASTUNG_EINFAHRPHASE | 0x401E | - | GHAS und HAG Belastung über Einfahrphase (2000 km) für FASTA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401E |
| FASTA_GHAS_VERSCHLEISS_GESAMT | 0x401F | - | GHAS Verschleiss (Rekalibrierungs-Offset) über gesamte Betriebszeit für FASTA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401F |

### ARG_0XDC4C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRMOMENT | Nm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2500.0 | Vorgabe eines Sperrmoment |

### RES_0XAB63

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELFTEST | - | - | + | 0-n | - | char | - | TAB_ON_DEMAND_SELFTEST | 1.0 | 1.0 | 0.0 | Status Kalibrierung |

### RES_0XDC45

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_HALL_1_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Rohwert Hallsensor 1 (in Inkrementen) |
| STAT_POSITION_HALL_2_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Rohwert Hallsensor 2 (in Inkrementen) |
| STAT_POSITION_SPERRE_ABSOLUT_WERT | Inkremente | high | unsigned char | - | - | 4.0 | 1.0 | -100.0 | Istposition Sperre Ungültigkeitsbezeichner FFh |

### RES_0XDC4C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRMOMENT_WERT | Nm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Sperrmoment |

### RES_0X401D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENERGIEEINTRAG_GHAS_WERT | J | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieeintrag Hinterachssperre Ungültigkeitswert 4294967295J Default 4294967295J |
| STAT_HAG_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Temperatur Hinterachsgetriebe Ungültigkeitswert 255°C Default 0°C |
| STAT_MOTOR_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Temperatur  Aktuatormotor Hinterachsgetriebe Ungültigkeitswert 255°C Default 0°C |
| STAT_ANZAHL_UEBERTEMPERATUR_AKTUATORMOTOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Übertemperaturereignisse Aktuatormotor Hinterachsgetriebe Default 0 255 bedeutet 255 oder mehr Übertemperaturereignisse kein Ungültigkeitswert |
| STAT_BETRIEBSZEIT_HAG_TEMP_KLEINER_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur kleiner 0°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_0_BIS_50_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 0°C und 50°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_50_BIS_100_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 50°C und 100°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_100_BIS_125_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 100°C und 125°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_125_BIS_150_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 125°C und 150°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_GROESSER_150_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur größer 150°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_SPERRMOMENT_KLEINER_500_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment kleiner 500Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_500_BIS_1000_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment zwischen 500Nm und 1000Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_1000_BIS_1500_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment zwischen 1000Nm und 1500Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_1500_BIS_2000_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment zwischen 1500Nm und 2000Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_GROESSER_2000_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment größer 2000Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |

### RES_0X401E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENERGIEEINTRAG_GHAS_WERT | J | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Energieeintrag Hinterachssperre Ungültigkeitswert 4294967295J Default 4294967295J |
| STAT_HAG_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Temperatur Hinterachsgetriebe Ungültigkeitswert 255°C Default 0°C |
| STAT_BETRIEBSZEIT_HAG_TEMP_KLEINER_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur kleiner 0°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_0_BIS_50_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 0°C und 50°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_50_BIS_100_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 50°C und 100°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_100_BIS_125_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 100°C und 125°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_125_BIS_150_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur zwischen 125°C und 150°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_HAG_TEMP_GROESSER_150_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Temperatur größer 150°C und Motor läuft Ungültigkeitswert 65535min Default 0min |
| STAT_BETRIEBSZEIT_SPERRMOMENT_KLEINER_500_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment kleiner 500Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_500_BIS_1000_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment zwischen 500Nm und 1000Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_1000_BIS_1500_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment zwischen 1000Nm und 1500Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_1500_BIS_2000_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment zwischen 1500Nm und 2000Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |
| STAT_BETRIEBSZEIT_SPERRMOMENT_GROESSER_2000_WERT | s | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Betriebszeit GHAS mit Sperrmoment größer 2000Nm und Motor läuft Ungültigkeitswert  42949672,95s Default 0s |

### RES_0X401F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_2TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 2.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_5TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 5.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_10TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 10.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_20TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 20.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_30TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 30.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_40TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 40.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_50TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 50.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_60TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 60.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_70TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 70.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_80TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 80.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_90TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 90.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_100TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 100.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_110TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 110.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_120TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 120.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_130TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 130.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_140TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 140.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_150TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 150.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_160TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 160.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_170TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 170.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_180TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 180.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_190TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 190.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_200TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 200.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_210TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 210.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_220TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 220.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_230TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 230.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_240TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 240.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_250TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 250.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_260TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 260.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_270TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 270.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_280TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 280.000 km Ungültigkeitswert 32767 Default 32767 |
| STAT_REKALIBRIERUNG_OFFSET_SPERRE_290TKM_WERT | Inkremente | high | int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre aus Rekalibrierung bei 290.000 km Ungültigkeitswert 32767 Default 32767 |

### ZUSTAND_ECUM

| WERT | TEXT |
| --- | --- |
| 1 | Init |
| 2 | Run |
| 3 | Shutdown |
| 4 | Standby |
| 5 | Power On Selftest (IOST) |

### TAB_ON_DEMAND_SELFTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | läuft nicht |
| 0x01 | läuft |
| 0x02 | Fehler |
| 0x03 | Erfolg |
| 0xFF | nicht definiert |
