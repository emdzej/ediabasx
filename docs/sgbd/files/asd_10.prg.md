# asd_10.prg

## General

|  |  |
| --- | --- |
| File | asd_10.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 49 |
| Origin | BMW_AG EI-41 IngeborgPortenhauser |
| Revision | 2.000 |
| Author | HarmanBecker CoC_AMP ChristianKnott |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Active Sound Design M5 |  |  |
| ORIGIN | string | BMW_AG EI-41 IngeborgPortenhauser |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | HarmanBecker CoC_AMP ChristianKnott |  |  |
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

### _STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### _STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### _STEUERN_HARMAN_SW_VERSION

Read SW Versions UDS: $31    RoutineControl $01    startRoutine $F0 00 RoutineIdentifier PM Mode $FF    Developer Functions $20    Version $xx    Sort $00    Get Status $0D    PM Mode Endmarker

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
| 0xD8D401 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5): Ausfall oder Signal ungültig | 1 |
| 0xD8D400 | Botschaft (Daten Antriebsstrang 2, 0x3F9): Ausfall oder Signal ungültig | 1 |
| 0x805383 | Überspannung erkannt | 1 |
| 0x805382 | Unterspannung erkannt | 1 |
| 0x8053A5 | Ungültige Codierdaten für Equalizing | 0 |
| 0x805388 | Steuergerät: Übertemperatur erkannt | 0 |
| 0x805386 | RAD ON Leitung: Kurzschluss nach Masse | 0 |
| 0x805385 | RAD ON Leitung: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0xD8C41E | IuK-CAN Control Module Bus OFF | 0 |
| 0x805381 | Interner Steuergerätefehler Software | 0 |
| 0x805380 | Interner Steuergerätefehler Hardware | 0 |
| 0x805391 | Fehler Lautsprecherkanal rechts vorne (Leitungsunterbrechung oder Kurzschluss nach Masse oder Plus) | 0 |
| 0x805393 | Fehler Lautsprecherkanal rechts hinten (Leitungsunterbrechung oder Kurzschluss nach Masse oder Plus) | 0 |
| 0x805390 | Fehler Lautsprecherkanal links vorne (Leitungsunterbrechung oder Kurzschluss nach Masse oder Plus) | 0 |
| 0x805392 | Fehler Lautsprecherkanal links hinten (Leitungsunterbrechung oder Kurzschluss nach Masse oder Plus) | 0 |
| 0x023F00 | Energiesparmode aktiv | 0 |
| 0xD8CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x02FF3F | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x8053A4 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x8053A0 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x8053A2 | Codierung: Signatur für Daten ungültig | 0 |
| 0x8053A1 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x8053A3 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0xD8C468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | D8C50B | D8C514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C41F | D8C43E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C45F | D8C468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C473 | D8C47C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 18C600 | 18C6FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C47D | D8C486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C40B | D8C414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C501 | D8C50A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C415 | D8C41E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C43F | D8C449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C469 | D8C472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C401 | D8C40A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D8C487 | D8C48F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | D8CC00 | D8D3FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | D8D400 | D903FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D8D400 | D903FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D8CBFF | D8CBFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 805380 | 8053FF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x3F100E | Botschaft (Winkel Fahrpedal, 0xD9): Ausfall oder Signal ungültig | 1 |
| 0x3F1005 | NVM_E_READ_FAILED | 0 |
| 0x3F100B | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1): Ausfall oder Signal ungültig | 1 |
| 0x3F1001 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x3F100C | Botschaft (Konfiguration Schalter Fahrdynamik, 0x3A7): Ausfall oder Signal ungültig | 1 |
| 0x3F100D | Botschaft (Status Cabrio Dach, 0x342): Ausfall oder Signal ungültig | 1 |
| 0x3F1009 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x3F1003 | NVM_E_ERASE_FAILED | 0 |
| 0x3F1010 | Botschaft (Status M-Drive 2,0x42E) Ausfall oder Signal ungültig | 1 |
| 0x3F1007 | NVM_E_WRITE_FAILED | 0 |
| 0x3F1004 | NVM_E_READ_ALL_FAILED | 0 |
| 0x3F1000 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x3F1006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x3F1002 | NVM_E_CONTROL_FAILED | 0 |
| 0x3F100F | Signal (Motoröl-Temperatur): Ausfall oder Signal ungültig | 0 |
| 0x3F100A | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x3F1008 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SINUSGENERATOR | 0xA001 | - | Gibt einen Sinuston auf einen oder mehrere Kanäle aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001 | - |
| LAUTSPRECHER_IMPEDANZMESSUNG | 0xA021 | - | Impedanzmessung (AC-Messung) auf einem oder mehreren Kanälen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA021 | RES_0xA021 |
| HIFI_DIAGNOSE_BUSLOSER_AMP | 0xA08C | - | RADON-OUT-Leitung folgt ohne Beeinflussung der RADON-IN-Leitung für die Diagnose des buslose Verstärkers | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA08C |
| TEST_VERBAU_VERSTAERKER | 0xA0A2 | - | Testet alle externen Anschlüsse (z. B. Lautsprecher, Mikrophon, RAD_ON) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0A2 | RES_0xA0A2 |
| STATUS_ANALOG_TEMPERATUR | 0xD026 | - | Abfrage der Temperaturen des Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD026 |
| RADON | 0xD028 | - | Ein- oder Ausschalten bzw. Abfragen des Radon-Signals. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD028 | RES_0xD028 |
| ASD_AUDIOQUELLE | 0xD09C | - | Audioquelle für MUTE | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD09C | RES_0xD09C |
| RADON_IN | 0xD09F | STAT_RADON_IN | Status des eingehenden RADON-Signals | 0-n | - | - | unsigned char | TRadOnLead | 1.0 | 1.0 | 0.0 | - | 22 | - | - |

### RDTCI_02_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 2 | reportDTCByStatusMask |
| 20 | ISOSAEReserved_14_7F |
| 21 | ISOSAEReserved_14_7F |
| 22 | ISOSAEReserved_14_7F |
| 23 | ISOSAEReserved_14_7F |
| 24 | ISOSAEReserved_14_7F |
| 25 | ISOSAEReserved_14_7F |
| 26 | ISOSAEReserved_14_7F |
| 27 | ISOSAEReserved_14_7F |
| 28 | ISOSAEReserved_14_7F |
| 29 | ISOSAEReserved_14_7F |
| 30 | ISOSAEReserved_14_7F |
| 31 | ISOSAEReserved_14_7F |
| 32 | ISOSAEReserved_14_7F |
| 33 | ISOSAEReserved_14_7F |
| 34 | ISOSAEReserved_14_7F |
| 35 | ISOSAEReserved_14_7F |
| 36 | ISOSAEReserved_14_7F |
| 37 | ISOSAEReserved_14_7F |
| 38 | ISOSAEReserved_14_7F |
| 39 | ISOSAEReserved_14_7F |
| 40 | ISOSAEReserved_14_7F |
| 41 | ISOSAEReserved_14_7F |
| 42 | ISOSAEReserved_14_7F |
| 43 | ISOSAEReserved_14_7F |
| 44 | ISOSAEReserved_14_7F |
| 45 | ISOSAEReserved_14_7F |
| 46 | ISOSAEReserved_14_7F |
| 47 | ISOSAEReserved_14_7F |
| 48 | ISOSAEReserved_14_7F |
| 49 | ISOSAEReserved_14_7F |
| 50 | ISOSAEReserved_14_7F |
| 51 | ISOSAEReserved_14_7F |
| 52 | ISOSAEReserved_14_7F |
| 53 | ISOSAEReserved_14_7F |
| 54 | ISOSAEReserved_14_7F |
| 55 | ISOSAEReserved_14_7F |
| 56 | ISOSAEReserved_14_7F |
| 57 | ISOSAEReserved_14_7F |
| 58 | ISOSAEReserved_14_7F |
| 59 | ISOSAEReserved_14_7F |
| 60 | ISOSAEReserved_14_7F |
| 61 | ISOSAEReserved_14_7F |
| 62 | ISOSAEReserved_14_7F |
| 63 | ISOSAEReserved_14_7F |
| 64 | ISOSAEReserved_14_7F |
| 65 | ISOSAEReserved_14_7F |
| 66 | ISOSAEReserved_14_7F |
| 67 | ISOSAEReserved_14_7F |
| 68 | ISOSAEReserved_14_7F |
| 69 | ISOSAEReserved_14_7F |
| 70 | ISOSAEReserved_14_7F |
| 71 | ISOSAEReserved_14_7F |
| 72 | ISOSAEReserved_14_7F |
| 73 | ISOSAEReserved_14_7F |
| 74 | ISOSAEReserved_14_7F |
| 75 | ISOSAEReserved_14_7F |
| 76 | ISOSAEReserved_14_7F |
| 77 | ISOSAEReserved_14_7F |
| 78 | ISOSAEReserved_14_7F |
| 79 | ISOSAEReserved_14_7F |
| 80 | ISOSAEReserved_14_7F |
| 81 | ISOSAEReserved_14_7F |
| 82 | ISOSAEReserved_14_7F |
| 83 | ISOSAEReserved_14_7F |
| 84 | ISOSAEReserved_14_7F |
| 85 | ISOSAEReserved_14_7F |
| 86 | ISOSAEReserved_14_7F |
| 87 | ISOSAEReserved_14_7F |
| 88 | ISOSAEReserved_14_7F |
| 89 | ISOSAEReserved_14_7F |
| 90 | ISOSAEReserved_14_7F |
| 91 | ISOSAEReserved_14_7F |
| 92 | ISOSAEReserved_14_7F |
| 93 | ISOSAEReserved_14_7F |
| 94 | ISOSAEReserved_14_7F |
| 95 | ISOSAEReserved_14_7F |
| 96 | ISOSAEReserved_14_7F |
| 97 | ISOSAEReserved_14_7F |
| 98 | ISOSAEReserved_14_7F |
| 99 | ISOSAEReserved_14_7F |
| 100 | ISOSAEReserved_14_7F |
| 101 | ISOSAEReserved_14_7F |
| 102 | ISOSAEReserved_14_7F |
| 103 | ISOSAEReserved_14_7F |
| 104 | ISOSAEReserved_14_7F |
| 105 | ISOSAEReserved_14_7F |
| 106 | ISOSAEReserved_14_7F |
| 107 | ISOSAEReserved_14_7F |
| 108 | ISOSAEReserved_14_7F |
| 109 | ISOSAEReserved_14_7F |
| 110 | ISOSAEReserved_14_7F |
| 111 | ISOSAEReserved_14_7F |
| 112 | ISOSAEReserved_14_7F |
| 113 | ISOSAEReserved_14_7F |
| 114 | ISOSAEReserved_14_7F |
| 115 | ISOSAEReserved_14_7F |
| 116 | ISOSAEReserved_14_7F |
| 117 | ISOSAEReserved_14_7F |
| 118 | ISOSAEReserved_14_7F |
| 119 | ISOSAEReserved_14_7F |
| 120 | ISOSAEReserved_14_7F |
| 121 | ISOSAEReserved_14_7F |
| 122 | ISOSAEReserved_14_7F |
| 123 | ISOSAEReserved_14_7F |
| 124 | ISOSAEReserved_14_7F |
| 125 | ISOSAEReserved_14_7F |
| 126 | ISOSAEReserved_14_7F |
| 127 | ISOSAEReserved_14_7F |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00_01 |
| 1 | ISOSAEReserved_00_01 |
| 2 | infiniteTimeToResponse |
| 3 | vehicleManufacturerSpecific_03_7F |
| 4 | vehicleManufacturerSpecific_03_7F |
| 5 | vehicleManufacturerSpecific_03_7F |
| 6 | vehicleManufacturerSpecific_03_7F |
| 7 | vehicleManufacturerSpecific_03_7F |
| 8 | vehicleManufacturerSpecific_03_7F |
| 9 | vehicleManufacturerSpecific_03_7F |
| 10 | vehicleManufacturerSpecific_03_7F |
| 11 | vehicleManufacturerSpecific_03_7F |
| 12 | vehicleManufacturerSpecific_03_7F |
| 13 | vehicleManufacturerSpecific_03_7F |
| 14 | vehicleManufacturerSpecific_03_7F |
| 15 | vehicleManufacturerSpecific_03_7F |
| 16 | vehicleManufacturerSpecific_03_7F |
| 17 | vehicleManufacturerSpecific_03_7F |
| 18 | vehicleManufacturerSpecific_03_7F |
| 19 | vehicleManufacturerSpecific_03_7F |
| 20 | vehicleManufacturerSpecific_03_7F |
| 21 | vehicleManufacturerSpecific_03_7F |
| 22 | vehicleManufacturerSpecific_03_7F |
| 23 | vehicleManufacturerSpecific_03_7F |
| 24 | vehicleManufacturerSpecific_03_7F |
| 25 | vehicleManufacturerSpecific_03_7F |
| 26 | vehicleManufacturerSpecific_03_7F |
| 27 | vehicleManufacturerSpecific_03_7F |
| 28 | vehicleManufacturerSpecific_03_7F |
| 29 | vehicleManufacturerSpecific_03_7F |
| 30 | vehicleManufacturerSpecific_03_7F |
| 31 | vehicleManufacturerSpecific_03_7F |
| 32 | vehicleManufacturerSpecific_03_7F |
| 33 | vehicleManufacturerSpecific_03_7F |
| 34 | vehicleManufacturerSpecific_03_7F |
| 35 | vehicleManufacturerSpecific_03_7F |
| 36 | vehicleManufacturerSpecific_03_7F |
| 37 | vehicleManufacturerSpecific_03_7F |
| 38 | vehicleManufacturerSpecific_03_7F |
| 39 | vehicleManufacturerSpecific_03_7F |
| 40 | vehicleManufacturerSpecific_03_7F |
| 41 | vehicleManufacturerSpecific_03_7F |
| 42 | vehicleManufacturerSpecific_03_7F |
| 43 | vehicleManufacturerSpecific_03_7F |
| 44 | vehicleManufacturerSpecific_03_7F |
| 45 | vehicleManufacturerSpecific_03_7F |
| 46 | vehicleManufacturerSpecific_03_7F |
| 47 | vehicleManufacturerSpecific_03_7F |
| 48 | vehicleManufacturerSpecific_03_7F |
| 49 | vehicleManufacturerSpecific_03_7F |
| 50 | vehicleManufacturerSpecific_03_7F |
| 51 | vehicleManufacturerSpecific_03_7F |
| 52 | vehicleManufacturerSpecific_03_7F |
| 53 | vehicleManufacturerSpecific_03_7F |
| 54 | vehicleManufacturerSpecific_03_7F |
| 55 | vehicleManufacturerSpecific_03_7F |
| 56 | vehicleManufacturerSpecific_03_7F |
| 57 | vehicleManufacturerSpecific_03_7F |
| 58 | vehicleManufacturerSpecific_03_7F |
| 59 | vehicleManufacturerSpecific_03_7F |
| 60 | vehicleManufacturerSpecific_03_7F |
| 61 | vehicleManufacturerSpecific_03_7F |
| 62 | vehicleManufacturerSpecific_03_7F |
| 63 | vehicleManufacturerSpecific_03_7F |
| 64 | vehicleManufacturerSpecific_03_7F |
| 65 | vehicleManufacturerSpecific_03_7F |
| 66 | vehicleManufacturerSpecific_03_7F |
| 67 | vehicleManufacturerSpecific_03_7F |
| 68 | vehicleManufacturerSpecific_03_7F |
| 69 | vehicleManufacturerSpecific_03_7F |
| 70 | vehicleManufacturerSpecific_03_7F |
| 71 | vehicleManufacturerSpecific_03_7F |
| 72 | vehicleManufacturerSpecific_03_7F |
| 73 | vehicleManufacturerSpecific_03_7F |
| 74 | vehicleManufacturerSpecific_03_7F |
| 75 | vehicleManufacturerSpecific_03_7F |
| 76 | vehicleManufacturerSpecific_03_7F |
| 77 | vehicleManufacturerSpecific_03_7F |
| 78 | vehicleManufacturerSpecific_03_7F |
| 79 | vehicleManufacturerSpecific_03_7F |
| 80 | vehicleManufacturerSpecific_03_7F |
| 81 | vehicleManufacturerSpecific_03_7F |
| 82 | vehicleManufacturerSpecific_03_7F |
| 83 | vehicleManufacturerSpecific_03_7F |
| 84 | vehicleManufacturerSpecific_03_7F |
| 85 | vehicleManufacturerSpecific_03_7F |
| 86 | vehicleManufacturerSpecific_03_7F |
| 87 | vehicleManufacturerSpecific_03_7F |
| 88 | vehicleManufacturerSpecific_03_7F |
| 89 | vehicleManufacturerSpecific_03_7F |
| 90 | vehicleManufacturerSpecific_03_7F |
| 91 | vehicleManufacturerSpecific_03_7F |
| 92 | vehicleManufacturerSpecific_03_7F |
| 93 | vehicleManufacturerSpecific_03_7F |
| 94 | vehicleManufacturerSpecific_03_7F |
| 95 | vehicleManufacturerSpecific_03_7F |
| 96 | vehicleManufacturerSpecific_03_7F |
| 97 | vehicleManufacturerSpecific_03_7F |
| 98 | vehicleManufacturerSpecific_03_7F |
| 99 | vehicleManufacturerSpecific_03_7F |
| 100 | vehicleManufacturerSpecific_03_7F |
| 101 | vehicleManufacturerSpecific_03_7F |
| 102 | vehicleManufacturerSpecific_03_7F |
| 103 | vehicleManufacturerSpecific_03_7F |
| 104 | vehicleManufacturerSpecific_03_7F |
| 105 | vehicleManufacturerSpecific_03_7F |
| 106 | vehicleManufacturerSpecific_03_7F |
| 107 | vehicleManufacturerSpecific_03_7F |
| 108 | vehicleManufacturerSpecific_03_7F |
| 109 | vehicleManufacturerSpecific_03_7F |
| 110 | vehicleManufacturerSpecific_03_7F |
| 111 | vehicleManufacturerSpecific_03_7F |
| 112 | vehicleManufacturerSpecific_03_7F |
| 113 | vehicleManufacturerSpecific_03_7F |
| 114 | vehicleManufacturerSpecific_03_7F |
| 115 | vehicleManufacturerSpecific_03_7F |
| 116 | vehicleManufacturerSpecific_03_7F |
| 117 | vehicleManufacturerSpecific_03_7F |
| 118 | vehicleManufacturerSpecific_03_7F |
| 119 | vehicleManufacturerSpecific_03_7F |
| 120 | vehicleManufacturerSpecific_03_7F |
| 121 | vehicleManufacturerSpecific_03_7F |
| 122 | vehicleManufacturerSpecific_03_7F |
| 123 | vehicleManufacturerSpecific_03_7F |
| 124 | vehicleManufacturerSpecific_03_7F |
| 125 | vehicleManufacturerSpecific_03_7F |
| 126 | vehicleManufacturerSpecific_03_7F |
| 127 | vehicleManufacturerSpecific_03_7F |
| 128 | ISOSAEReserved_80_FF |
| 129 | ISOSAEReserved_80_FF |
| 130 | ISOSAEReserved_80_FF |
| 131 | ISOSAEReserved_80_FF |
| 132 | ISOSAEReserved_80_FF |
| 133 | ISOSAEReserved_80_FF |
| 134 | ISOSAEReserved_80_FF |
| 135 | ISOSAEReserved_80_FF |
| 136 | ISOSAEReserved_80_FF |
| 137 | ISOSAEReserved_80_FF |
| 138 | ISOSAEReserved_80_FF |
| 139 | ISOSAEReserved_80_FF |
| 140 | ISOSAEReserved_80_FF |
| 141 | ISOSAEReserved_80_FF |
| 142 | ISOSAEReserved_80_FF |
| 143 | ISOSAEReserved_80_FF |
| 144 | ISOSAEReserved_80_FF |
| 145 | ISOSAEReserved_80_FF |
| 146 | ISOSAEReserved_80_FF |
| 147 | ISOSAEReserved_80_FF |
| 148 | ISOSAEReserved_80_FF |
| 149 | ISOSAEReserved_80_FF |
| 150 | ISOSAEReserved_80_FF |
| 151 | ISOSAEReserved_80_FF |
| 152 | ISOSAEReserved_80_FF |
| 153 | ISOSAEReserved_80_FF |
| 154 | ISOSAEReserved_80_FF |
| 155 | ISOSAEReserved_80_FF |
| 156 | ISOSAEReserved_80_FF |
| 157 | ISOSAEReserved_80_FF |
| 158 | ISOSAEReserved_80_FF |
| 159 | ISOSAEReserved_80_FF |
| 160 | ISOSAEReserved_80_FF |
| 161 | ISOSAEReserved_80_FF |
| 162 | ISOSAEReserved_80_FF |
| 163 | ISOSAEReserved_80_FF |
| 164 | ISOSAEReserved_80_FF |
| 165 | ISOSAEReserved_80_FF |
| 166 | ISOSAEReserved_80_FF |
| 167 | ISOSAEReserved_80_FF |
| 168 | ISOSAEReserved_80_FF |
| 169 | ISOSAEReserved_80_FF |
| 170 | ISOSAEReserved_80_FF |
| 171 | ISOSAEReserved_80_FF |
| 172 | ISOSAEReserved_80_FF |
| 173 | ISOSAEReserved_80_FF |
| 174 | ISOSAEReserved_80_FF |
| 175 | ISOSAEReserved_80_FF |
| 176 | ISOSAEReserved_80_FF |
| 177 | ISOSAEReserved_80_FF |
| 178 | ISOSAEReserved_80_FF |
| 179 | ISOSAEReserved_80_FF |
| 180 | ISOSAEReserved_80_FF |
| 181 | ISOSAEReserved_80_FF |
| 182 | ISOSAEReserved_80_FF |
| 183 | ISOSAEReserved_80_FF |
| 184 | ISOSAEReserved_80_FF |
| 185 | ISOSAEReserved_80_FF |
| 186 | ISOSAEReserved_80_FF |
| 187 | ISOSAEReserved_80_FF |
| 188 | ISOSAEReserved_80_FF |
| 189 | ISOSAEReserved_80_FF |
| 190 | ISOSAEReserved_80_FF |
| 191 | ISOSAEReserved_80_FF |
| 192 | ISOSAEReserved_80_FF |
| 193 | ISOSAEReserved_80_FF |
| 194 | ISOSAEReserved_80_FF |
| 195 | ISOSAEReserved_80_FF |
| 196 | ISOSAEReserved_80_FF |
| 197 | ISOSAEReserved_80_FF |
| 198 | ISOSAEReserved_80_FF |
| 199 | ISOSAEReserved_80_FF |
| 200 | ISOSAEReserved_80_FF |
| 201 | ISOSAEReserved_80_FF |
| 202 | ISOSAEReserved_80_FF |
| 203 | ISOSAEReserved_80_FF |
| 204 | ISOSAEReserved_80_FF |
| 205 | ISOSAEReserved_80_FF |
| 206 | ISOSAEReserved_80_FF |
| 207 | ISOSAEReserved_80_FF |
| 208 | ISOSAEReserved_80_FF |
| 209 | ISOSAEReserved_80_FF |
| 210 | ISOSAEReserved_80_FF |
| 211 | ISOSAEReserved_80_FF |
| 212 | ISOSAEReserved_80_FF |
| 213 | ISOSAEReserved_80_FF |
| 214 | ISOSAEReserved_80_FF |
| 215 | ISOSAEReserved_80_FF |
| 216 | ISOSAEReserved_80_FF |
| 217 | ISOSAEReserved_80_FF |
| 218 | ISOSAEReserved_80_FF |
| 219 | ISOSAEReserved_80_FF |
| 220 | ISOSAEReserved_80_FF |
| 221 | ISOSAEReserved_80_FF |
| 222 | ISOSAEReserved_80_FF |
| 223 | ISOSAEReserved_80_FF |
| 224 | ISOSAEReserved_80_FF |
| 225 | ISOSAEReserved_80_FF |
| 226 | ISOSAEReserved_80_FF |
| 227 | ISOSAEReserved_80_FF |
| 228 | ISOSAEReserved_80_FF |
| 229 | ISOSAEReserved_80_FF |
| 230 | ISOSAEReserved_80_FF |
| 231 | ISOSAEReserved_80_FF |
| 232 | ISOSAEReserved_80_FF |
| 233 | ISOSAEReserved_80_FF |
| 234 | ISOSAEReserved_80_FF |
| 235 | ISOSAEReserved_80_FF |
| 236 | ISOSAEReserved_80_FF |
| 237 | ISOSAEReserved_80_FF |
| 238 | ISOSAEReserved_80_FF |
| 239 | ISOSAEReserved_80_FF |
| 240 | ISOSAEReserved_80_FF |
| 241 | ISOSAEReserved_80_FF |
| 242 | ISOSAEReserved_80_FF |
| 243 | ISOSAEReserved_80_FF |
| 244 | ISOSAEReserved_80_FF |
| 245 | ISOSAEReserved_80_FF |
| 246 | ISOSAEReserved_80_FF |
| 247 | ISOSAEReserved_80_FF |
| 248 | ISOSAEReserved_80_FF |
| 249 | ISOSAEReserved_80_FF |
| 250 | ISOSAEReserved_80_FF |
| 251 | ISOSAEReserved_80_FF |
| 252 | ISOSAEReserved_80_FF |
| 253 | ISOSAEReserved_80_FF |
| 254 | ISOSAEReserved_80_FF |
| 255 | ISOSAEReserved_80_FF |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 5 | reserved |
| 6 | reserved |
| 7 | reserved |
| 8 | reserved |
| 9 | reserved |
| 10 | reserved |
| 11 | reserved |
| 12 | reserved |
| 13 | reserved |
| 14 | reserved |
| 15 | reserved |
| 16 | reserved |
| 17 | reserved |
| 18 | reserved |
| 19 | reserved |
| 20 | reserved |
| 21 | reserved |
| 22 | reserved |
| 23 | reserved |
| 24 | reserved |
| 25 | reserved |
| 26 | reserved |
| 27 | reserved |
| 28 | reserved |
| 29 | reserved |
| 30 | reserved |
| 31 | reserved |
| 32 | reserved |
| 33 | reserved |
| 34 | reserved |
| 35 | reserved |
| 36 | reserved |
| 37 | reserved |
| 38 | reserved |
| 39 | reserved |
| 40 | reserved |
| 41 | reserved |
| 42 | reserved |
| 43 | reserved |
| 44 | reserved |
| 45 | reserved |
| 46 | reserved |
| 47 | reserved |
| 48 | reserved |
| 49 | reserved |
| 50 | reserved |
| 51 | reserved |
| 52 | reserved |
| 53 | reserved |
| 54 | reserved |
| 55 | reserved |
| 56 | reserved |
| 57 | reserved |
| 58 | reserved |
| 59 | reserved |
| 60 | reserved |
| 61 | reserved |
| 62 | reserved |
| 63 | reserved |
| 64 | reserved |
| 65 | reserved |
| 66 | reserved |
| 67 | reserved |
| 68 | reserved |
| 69 | reserved |
| 70 | reserved |
| 71 | reserved |
| 72 | reserved |
| 73 | reserved |
| 74 | reserved |
| 75 | reserved |
| 76 | reserved |
| 77 | reserved |
| 78 | reserved |
| 79 | reserved |
| 80 | reserved |
| 81 | reserved |
| 82 | reserved |
| 83 | reserved |
| 84 | reserved |
| 85 | reserved |
| 86 | reserved |
| 87 | reserved |
| 88 | reserved |
| 89 | reserved |
| 90 | reserved |
| 91 | reserved |
| 92 | reserved |
| 93 | reserved |
| 94 | reserved |
| 95 | reserved |
| 96 | reserved |
| 97 | reserved |
| 98 | reserved |
| 99 | reserved |
| 100 | reserved |
| 101 | reserved |
| 102 | reserved |
| 103 | reserved |
| 104 | reserved |
| 105 | reserved |
| 106 | reserved |
| 107 | reserved |
| 108 | reserved |
| 109 | reserved |
| 110 | reserved |
| 111 | reserved |
| 112 | reserved |
| 113 | reserved |
| 114 | reserved |
| 115 | reserved |
| 116 | reserved |
| 117 | reserved |
| 118 | reserved |
| 119 | reserved |
| 120 | reserved |
| 121 | reserved |
| 122 | reserved |
| 123 | reserved |
| 124 | reserved |
| 125 | reserved |
| 126 | reserved |
| 127 | reserved |
| 128 | Debug-Information (system supplier specific) |
| 129 | Debug-Information (system supplier specific) |
| 130 | Debug-Information (system supplier specific) |
| 131 | Debug-Information (system supplier specific) |
| 132 | Debug-Information (system supplier specific) |
| 133 | Debug-Information (system supplier specific) |
| 134 | Debug-Information (system supplier specific) |
| 135 | Debug-Information (system supplier specific) |
| 136 | Debug-Information (system supplier specific) |
| 137 | Debug-Information (system supplier specific) |
| 138 | Debug-Information (system supplier specific) |
| 139 | Debug-Information (system supplier specific) |
| 140 | Debug-Information (system supplier specific) |
| 141 | Debug-Information (system supplier specific) |
| 142 | Debug-Information (system supplier specific) |
| 143 | Debug-Information (system supplier specific) |
| 144 | Debug-Information (system supplier specific) |
| 145 | Debug-Information (system supplier specific) |
| 146 | Debug-Information (system supplier specific) |
| 147 | Debug-Information (system supplier specific) |
| 148 | Debug-Information (system supplier specific) |
| 149 | Debug-Information (system supplier specific) |
| 150 | Debug-Information (system supplier specific) |
| 151 | Debug-Information (system supplier specific) |
| 152 | Debug-Information (system supplier specific) |
| 153 | Debug-Information (system supplier specific) |
| 154 | Debug-Information (system supplier specific) |
| 155 | Debug-Information (system supplier specific) |
| 156 | Debug-Information (system supplier specific) |
| 157 | Debug-Information (system supplier specific) |
| 158 | Debug-Information (system supplier specific) |
| 159 | Debug-Information (system supplier specific) |
| 160 | Debug-Information (system supplier specific) |
| 161 | Debug-Information (system supplier specific) |
| 162 | Debug-Information (system supplier specific) |
| 163 | Debug-Information (system supplier specific) |
| 164 | Debug-Information (system supplier specific) |
| 165 | Debug-Information (system supplier specific) |
| 166 | Debug-Information (system supplier specific) |
| 167 | Debug-Information (system supplier specific) |
| 168 | Debug-Information (system supplier specific) |
| 169 | Debug-Information (system supplier specific) |
| 170 | Debug-Information (system supplier specific) |
| 171 | Debug-Information (system supplier specific) |
| 172 | Debug-Information (system supplier specific) |
| 173 | Debug-Information (system supplier specific) |
| 174 | Debug-Information (system supplier specific) |
| 175 | Debug-Information (system supplier specific) |
| 176 | Debug-Information (system supplier specific) |
| 177 | Debug-Information (system supplier specific) |
| 178 | Debug-Information (system supplier specific) |
| 179 | Debug-Information (system supplier specific) |
| 180 | Debug-Information (system supplier specific) |
| 181 | Debug-Information (system supplier specific) |
| 182 | Debug-Information (system supplier specific) |
| 183 | Debug-Information (system supplier specific) |
| 184 | Debug-Information (system supplier specific) |
| 185 | Debug-Information (system supplier specific) |
| 186 | Debug-Information (system supplier specific) |
| 187 | Debug-Information (system supplier specific) |
| 188 | Debug-Information (system supplier specific) |
| 189 | Debug-Information (system supplier specific) |
| 190 | Debug-Information (system supplier specific) |
| 191 | Debug-Information (system supplier specific) |
| 192 | Debug-Information (system supplier specific) |
| 193 | Debug-Information (system supplier specific) |
| 194 | Debug-Information (system supplier specific) |
| 195 | Debug-Information (system supplier specific) |
| 196 | Debug-Information (system supplier specific) |
| 197 | Debug-Information (system supplier specific) |
| 198 | Debug-Information (system supplier specific) |
| 199 | Debug-Information (system supplier specific) |
| 200 | Debug-Information (system supplier specific) |
| 201 | Debug-Information (system supplier specific) |
| 202 | Debug-Information (system supplier specific) |
| 203 | Debug-Information (system supplier specific) |
| 204 | Debug-Information (system supplier specific) |
| 205 | Debug-Information (system supplier specific) |
| 206 | Debug-Information (system supplier specific) |
| 207 | Debug-Information (system supplier specific) |
| 208 | Debug-Information (system supplier specific) |
| 209 | Debug-Information (system supplier specific) |
| 210 | Debug-Information (system supplier specific) |
| 211 | Debug-Information (system supplier specific) |
| 212 | Debug-Information (system supplier specific) |
| 213 | Debug-Information (system supplier specific) |
| 214 | Debug-Information (system supplier specific) |
| 215 | Debug-Information (system supplier specific) |
| 216 | Debug-Information (system supplier specific) |
| 217 | Debug-Information (system supplier specific) |
| 218 | Debug-Information (system supplier specific) |
| 219 | Debug-Information (system supplier specific) |
| 220 | Debug-Information (system supplier specific) |
| 221 | Debug-Information (system supplier specific) |
| 222 | Debug-Information (system supplier specific) |
| 223 | Debug-Information (system supplier specific) |
| 224 | Debug-Information (system supplier specific) |
| 225 | Debug-Information (system supplier specific) |
| 226 | Debug-Information (system supplier specific) |
| 227 | Debug-Information (system supplier specific) |
| 228 | Debug-Information (system supplier specific) |
| 229 | Debug-Information (system supplier specific) |
| 230 | Debug-Information (system supplier specific) |
| 231 | Debug-Information (system supplier specific) |
| 232 | Debug-Information (system supplier specific) |
| 233 | Debug-Information (system supplier specific) |
| 234 | Debug-Information (system supplier specific) |
| 235 | Debug-Information (system supplier specific) |
| 236 | Debug-Information (system supplier specific) |
| 237 | Debug-Information (system supplier specific) |
| 238 | Debug-Information (system supplier specific) |
| 239 | Debug-Information (system supplier specific) |
| 240 | Debug-Information (system supplier specific) |
| 241 | Debug-Information (system supplier specific) |
| 242 | Debug-Information (system supplier specific) |
| 243 | Debug-Information (system supplier specific) |
| 244 | Debug-Information (system supplier specific) |
| 245 | Debug-Information (system supplier specific) |
| 246 | Debug-Information (system supplier specific) |
| 247 | Debug-Information (system supplier specific) |
| 248 | Debug-Information (system supplier specific) |
| 249 | Debug-Information (system supplier specific) |
| 250 | Debug-Information (system supplier specific) |
| 251 | Debug-Information (system supplier specific) |
| 252 | Debug-Information (system supplier specific) |
| 253 | Debug-Information (system supplier specific) |
| 254 | Debug-Information (system supplier specific) |
| 255 | reserved |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |
| 2 | reserved |
| 3 | reserved |
| 4 | reserved |
| 5 | reserved |
| 6 | reserved |
| 7 | reserved |
| 8 | reserved |
| 9 | reserved |
| 10 | reserved |
| 11 | reserved |
| 12 | reserved |
| 13 | reserved |
| 14 | reserved |
| 15 | reserved |
| 16 | reserved |
| 17 | reserved |
| 18 | reserved |
| 19 | reserved |
| 20 | reserved |
| 21 | reserved |
| 22 | reserved |
| 23 | reserved |
| 24 | reserved |
| 25 | reserved |
| 26 | reserved |
| 27 | reserved |
| 28 | reserved |
| 29 | reserved |
| 30 | reserved |
| 31 | reserved |
| 32 | reserved |
| 33 | reserved |
| 34 | reserved |
| 35 | reserved |
| 36 | reserved |
| 37 | reserved |
| 38 | reserved |
| 39 | reserved |
| 40 | reserved |
| 41 | reserved |
| 42 | reserved |
| 43 | reserved |
| 44 | reserved |
| 45 | reserved |
| 46 | reserved |
| 47 | reserved |
| 48 | reserved |
| 49 | reserved |
| 50 | reserved |
| 51 | reserved |
| 52 | reserved |
| 53 | reserved |
| 54 | reserved |
| 55 | reserved |
| 56 | reserved |
| 57 | reserved |
| 58 | reserved |
| 59 | reserved |
| 60 | reserved |
| 61 | reserved |
| 62 | reserved |
| 63 | reserved |
| 64 | reserved |
| 65 | reserved |
| 66 | reserved |
| 67 | reserved |
| 68 | reserved |
| 69 | reserved |
| 70 | reserved |
| 71 | reserved |
| 72 | reserved |
| 73 | reserved |
| 74 | reserved |
| 75 | reserved |
| 76 | reserved |
| 77 | reserved |
| 78 | reserved |
| 79 | reserved |
| 80 | reserved |
| 81 | reserved |
| 82 | reserved |
| 83 | reserved |
| 84 | reserved |
| 85 | reserved |
| 86 | reserved |
| 87 | reserved |
| 88 | reserved |
| 89 | reserved |
| 90 | reserved |
| 91 | reserved |
| 92 | reserved |
| 93 | reserved |
| 94 | reserved |
| 95 | reserved |
| 96 | reserved |
| 97 | reserved |
| 98 | reserved |
| 99 | reserved |
| 100 | reserved |
| 101 | reserved |
| 102 | reserved |
| 103 | reserved |
| 104 | reserved |
| 105 | reserved |
| 106 | reserved |
| 107 | reserved |
| 108 | reserved |
| 109 | reserved |
| 110 | reserved |
| 111 | reserved |
| 112 | reserved |
| 113 | reserved |
| 114 | reserved |
| 115 | reserved |
| 116 | reserved |
| 117 | reserved |
| 118 | reserved |
| 119 | reserved |
| 120 | reserved |
| 121 | reserved |
| 122 | reserved |
| 123 | reserved |
| 124 | reserved |
| 125 | reserved |
| 126 | reserved |
| 127 | reserved |
| 128 | reserved |
| 129 | reserved |
| 130 | reserved |
| 131 | reserved |
| 132 | reserved |
| 133 | reserved |
| 134 | reserved |
| 135 | reserved |
| 136 | reserved |
| 137 | reserved |
| 138 | reserved |
| 139 | reserved |
| 140 | reserved |
| 141 | reserved |
| 142 | reserved |
| 143 | reserved |
| 144 | reserved |
| 145 | reserved |
| 146 | reserved |
| 147 | reserved |
| 148 | reserved |
| 149 | reserved |
| 150 | reserved |
| 151 | reserved |
| 152 | reserved |
| 153 | reserved |
| 154 | reserved |
| 155 | reserved |
| 156 | reserved |
| 157 | reserved |
| 158 | reserved |
| 159 | reserved |
| 160 | reserved |
| 161 | reserved |
| 162 | reserved |
| 163 | reserved |
| 164 | reserved |
| 165 | reserved |
| 166 | reserved |
| 167 | reserved |
| 168 | reserved |
| 169 | reserved |
| 170 | reserved |
| 171 | reserved |
| 172 | reserved |
| 173 | reserved |
| 174 | reserved |
| 175 | reserved |
| 176 | reserved |
| 177 | reserved |
| 178 | reserved |
| 179 | reserved |
| 180 | reserved |
| 181 | reserved |
| 182 | reserved |
| 183 | reserved |
| 184 | reserved |
| 185 | reserved |
| 186 | reserved |
| 187 | reserved |
| 188 | reserved |
| 189 | reserved |
| 190 | reserved |
| 191 | reserved |
| 192 | reserved |
| 193 | reserved |
| 194 | reserved |
| 195 | reserved |
| 196 | reserved |
| 197 | reserved |
| 198 | reserved |
| 199 | reserved |
| 200 | reserved |
| 201 | reserved |
| 202 | reserved |
| 203 | reserved |
| 204 | reserved |
| 205 | reserved |
| 206 | reserved |
| 207 | reserved |
| 208 | reserved |
| 209 | reserved |
| 210 | reserved |
| 211 | reserved |
| 212 | reserved |
| 213 | reserved |
| 214 | reserved |
| 215 | reserved |
| 216 | reserved |
| 217 | reserved |
| 218 | reserved |
| 219 | reserved |
| 220 | reserved |
| 221 | reserved |
| 222 | reserved |
| 223 | reserved |
| 224 | reserved |
| 225 | reserved |
| 226 | reserved |
| 227 | reserved |
| 228 | reserved |
| 229 | reserved |
| 230 | reserved |
| 231 | reserved |
| 232 | reserved |
| 233 | reserved |
| 234 | reserved |
| 235 | reserved |
| 236 | reserved |
| 237 | reserved |
| 238 | reserved |
| 239 | reserved |
| 240 | reserved |
| 241 | reserved |
| 242 | reserved |
| 243 | reserved |
| 244 | reserved |
| 245 | reserved |
| 246 | reserved |
| 247 | reserved |
| 248 | reserved |
| 249 | reserved |
| 250 | reserved |
| 251 | reserved |
| 252 | reserved |
| 253 | reserved |
| 254 | reserved |
| 255 | reserved |

### TAB_ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| -1 | Mode ungültig |
| 0 | Energiesparmode nicht aktiv |
| 1 | Produktionsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### ID_LIEF_TEXT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Reinshagen => Delphi |
| 2 | Kostal |
| 3 | Hella |
| 4 | Siemens |
| 5 | Eaton |
| 6 | UTA |
| 7 | Helbako |
| 8 | Bosch |
| 9 | Loewe => Lear |
| 16 | VDO |
| 17 | Valeo |
| 18 | MBB |
| 19 | Kammerer |
| 20 | SWF |
| 21 | Blaupunkt |
| 22 | Philips |
| 23 | Alpine |
| 24 | Continental Teves |
| 25 | Elektromatik Suedafrika |
| 32 | Becker |
| 33 | Preh |
| 34 | Alps |
| 35 | Motorola |
| 36 | Temic |
| 37 | Webasto |
| 38 | MotoMeter |
| 39 | Delphi PHI |
| 40 | DODUCO => BERU |
| 41 | DENSO |
| 48 | NEC |
| 49 | DASA |
| 50 | Pioneer |
| 51 | Jatco |
| 52 | Fuba |
| 53 | UK-NSI |
| 54 | AABG |
| 55 | Dunlop |
| 56 | Sachs |
| 57 | ITT |
| 64 | FTE |
| 65 | Megamos |
| 66 | TRW |
| 67 | Wabco |
| 68 | ISAD Electronic Systems |
| 69 | HEC (Hella Electronics Corporation) |
| 70 | Gemel |
| 71 | ZF |
| 72 | GMPT |
| 73 | Harman Kardon |
| 80 | Remes |
| 81 | ZF Lenksysteme |
| 82 | Magneti Marelli |
| 83 | Borg Instruments |
| 84 | GETRAG |
| 85 | BHTC (Behr Hella Thermocontrol) |
| 86 | Siemens VDO Automotive |
| 87 | Visteon |
| 88 | Autoliv |
| 89 | Haberl |
| 96 | Magna Steyr |
| 97 | Marquardt |
| 98 | AB-Elektronik |
| 99 | Siemens VDO Borg |
| 100 | Hirschmann Electronics |
| 101 | Hoerbiger Electronics |
| 102 | Thyssen Krupp Automotive Mechatronics |
| 103 | Gentex GmbH |
| 104 | Atena GmbH |
| 105 | Magna-Donelly |
| 112 | Koyo Steering Europe |
| 113 | NSI B.V |
| 114 | AISIN AW CO.LTD |
| 115 | Shorlock |
| 116 | Schrader |
| 117 | BERU Electronics GmbH |
| 118 | CEL |
| 119 | Audio Mobil |
| 120 | rd electronic |
| 121 | iSYS RTS GmbH |
| 128 | Westfalia Automotive GmbH |
| 129 | Tyco Electronics |
| 130 | Paragon AG |
| 131 | IEE S.A |
| 132 | TEMIC AUTOMOTIVE of NA |
| 133 | AKsys GmbH |
| 134 | META System |
| 135 | Hülsbeck & Fürst GmbH & Co KG |
| 136 | Mann & Hummel Automotive GmbH |
| 137 | Brose Fahrzeugteile GmbH & Co |
| 144 | Keihin |
| 145 | Vimercati S.p.A. |
| 146 | CRH |
| 147 | TPO Display Corp. |
| 148 | KÜSTER Automotive Control |
| 149 | Hitachi Automotive |
| 150 | Continental Automotive |
| 151 | TI-Automotive |
| 152 | Hydro |
| 153 | Johnson Controls |
| 154 | Takata- Petri |
| 155 | Mitsubishi Electric B.V. (Melco) |
| 156 | Autokabel |
| 157 | GKN-Driveline |
| 158 | Zollner Elektronik AG |
| 159 | PEIKER acustics GmbH |
| 160 | Bosal-Oris |
| 161 | Cobasys |
| 162 | Lighting Reutlingen GmbH |
| 163 | CONTI VDO |
| 164 | ADC Automotive Distance Control Systems GmbH |
| 165 | Funkwerk Dabendorf GmbH |
| 166 | Lame |
| 167 | Magna/Closures |
| 168 | Wanyu |
| 16777215 | unbekannter Hersteller |

### DM_TAB_ROE_ACTIVATED_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Aktive Fehlermeldung deaktiviert |
| 1 | Aktive Fehlermeldung aktiviert |
| 2 | Status der aktiven Fehlermeldung nicht feststellbar |
| 3 | Status der aktiven Fehlermeldung nicht feststellbar |
| 4 | Status der aktiven Fehlermeldung nicht feststellbar |
| 5 | Status der aktiven Fehlermeldung nicht feststellbar |
| 6 | Status der aktiven Fehlermeldung nicht feststellbar |
| 7 | Status der aktiven Fehlermeldung nicht feststellbar |
| 8 | Status der aktiven Fehlermeldung nicht feststellbar |
| 9 | Status der aktiven Fehlermeldung nicht feststellbar |
| 10 | Status der aktiven Fehlermeldung nicht feststellbar |
| 11 | Status der aktiven Fehlermeldung nicht feststellbar |
| 12 | Status der aktiven Fehlermeldung nicht feststellbar |
| 13 | Status der aktiven Fehlermeldung nicht feststellbar |
| 14 | Status der aktiven Fehlermeldung nicht feststellbar |
| 15 | Status der aktiven Fehlermeldung nicht feststellbar |
| 16 | Status der aktiven Fehlermeldung nicht feststellbar |
| 17 | Status der aktiven Fehlermeldung nicht feststellbar |
| 18 | Status der aktiven Fehlermeldung nicht feststellbar |
| 19 | Status der aktiven Fehlermeldung nicht feststellbar |
| 20 | Status der aktiven Fehlermeldung nicht feststellbar |
| 21 | Status der aktiven Fehlermeldung nicht feststellbar |
| 22 | Status der aktiven Fehlermeldung nicht feststellbar |
| 23 | Status der aktiven Fehlermeldung nicht feststellbar |
| 24 | Status der aktiven Fehlermeldung nicht feststellbar |
| 25 | Status der aktiven Fehlermeldung nicht feststellbar |
| 26 | Status der aktiven Fehlermeldung nicht feststellbar |
| 27 | Status der aktiven Fehlermeldung nicht feststellbar |
| 28 | Status der aktiven Fehlermeldung nicht feststellbar |
| 29 | Status der aktiven Fehlermeldung nicht feststellbar |
| 30 | Status der aktiven Fehlermeldung nicht feststellbar |
| 31 | Status der aktiven Fehlermeldung nicht feststellbar |
| 32 | Status der aktiven Fehlermeldung nicht feststellbar |
| 33 | Status der aktiven Fehlermeldung nicht feststellbar |
| 34 | Status der aktiven Fehlermeldung nicht feststellbar |
| 35 | Status der aktiven Fehlermeldung nicht feststellbar |
| 36 | Status der aktiven Fehlermeldung nicht feststellbar |
| 37 | Status der aktiven Fehlermeldung nicht feststellbar |
| 38 | Status der aktiven Fehlermeldung nicht feststellbar |
| 39 | Status der aktiven Fehlermeldung nicht feststellbar |
| 40 | Status der aktiven Fehlermeldung nicht feststellbar |
| 41 | Status der aktiven Fehlermeldung nicht feststellbar |
| 42 | Status der aktiven Fehlermeldung nicht feststellbar |
| 43 | Status der aktiven Fehlermeldung nicht feststellbar |
| 44 | Status der aktiven Fehlermeldung nicht feststellbar |
| 45 | Status der aktiven Fehlermeldung nicht feststellbar |
| 46 | Status der aktiven Fehlermeldung nicht feststellbar |
| 47 | Status der aktiven Fehlermeldung nicht feststellbar |
| 48 | Status der aktiven Fehlermeldung nicht feststellbar |
| 49 | Status der aktiven Fehlermeldung nicht feststellbar |
| 50 | Status der aktiven Fehlermeldung nicht feststellbar |
| 51 | Status der aktiven Fehlermeldung nicht feststellbar |
| 52 | Status der aktiven Fehlermeldung nicht feststellbar |
| 53 | Status der aktiven Fehlermeldung nicht feststellbar |
| 54 | Status der aktiven Fehlermeldung nicht feststellbar |
| 55 | Status der aktiven Fehlermeldung nicht feststellbar |
| 56 | Status der aktiven Fehlermeldung nicht feststellbar |
| 57 | Status der aktiven Fehlermeldung nicht feststellbar |
| 58 | Status der aktiven Fehlermeldung nicht feststellbar |
| 59 | Status der aktiven Fehlermeldung nicht feststellbar |
| 60 | Status der aktiven Fehlermeldung nicht feststellbar |
| 61 | Status der aktiven Fehlermeldung nicht feststellbar |
| 62 | Status der aktiven Fehlermeldung nicht feststellbar |
| 63 | Status der aktiven Fehlermeldung nicht feststellbar |
| 64 | Status der aktiven Fehlermeldung nicht feststellbar |
| 65 | Status der aktiven Fehlermeldung nicht feststellbar |
| 66 | Status der aktiven Fehlermeldung nicht feststellbar |
| 67 | Status der aktiven Fehlermeldung nicht feststellbar |
| 68 | Status der aktiven Fehlermeldung nicht feststellbar |
| 69 | Status der aktiven Fehlermeldung nicht feststellbar |
| 70 | Status der aktiven Fehlermeldung nicht feststellbar |
| 71 | Status der aktiven Fehlermeldung nicht feststellbar |
| 72 | Status der aktiven Fehlermeldung nicht feststellbar |
| 73 | Status der aktiven Fehlermeldung nicht feststellbar |
| 74 | Status der aktiven Fehlermeldung nicht feststellbar |
| 75 | Status der aktiven Fehlermeldung nicht feststellbar |
| 76 | Status der aktiven Fehlermeldung nicht feststellbar |
| 77 | Status der aktiven Fehlermeldung nicht feststellbar |
| 78 | Status der aktiven Fehlermeldung nicht feststellbar |
| 79 | Status der aktiven Fehlermeldung nicht feststellbar |
| 80 | Status der aktiven Fehlermeldung nicht feststellbar |
| 81 | Status der aktiven Fehlermeldung nicht feststellbar |
| 82 | Status der aktiven Fehlermeldung nicht feststellbar |
| 83 | Status der aktiven Fehlermeldung nicht feststellbar |
| 84 | Status der aktiven Fehlermeldung nicht feststellbar |
| 85 | Status der aktiven Fehlermeldung nicht feststellbar |
| 86 | Status der aktiven Fehlermeldung nicht feststellbar |
| 87 | Status der aktiven Fehlermeldung nicht feststellbar |
| 88 | Status der aktiven Fehlermeldung nicht feststellbar |
| 89 | Status der aktiven Fehlermeldung nicht feststellbar |
| 90 | Status der aktiven Fehlermeldung nicht feststellbar |
| 91 | Status der aktiven Fehlermeldung nicht feststellbar |
| 92 | Status der aktiven Fehlermeldung nicht feststellbar |
| 93 | Status der aktiven Fehlermeldung nicht feststellbar |
| 94 | Status der aktiven Fehlermeldung nicht feststellbar |
| 95 | Status der aktiven Fehlermeldung nicht feststellbar |
| 96 | Status der aktiven Fehlermeldung nicht feststellbar |
| 97 | Status der aktiven Fehlermeldung nicht feststellbar |
| 98 | Status der aktiven Fehlermeldung nicht feststellbar |
| 99 | Status der aktiven Fehlermeldung nicht feststellbar |
| 100 | Status der aktiven Fehlermeldung nicht feststellbar |
| 101 | Status der aktiven Fehlermeldung nicht feststellbar |
| 102 | Status der aktiven Fehlermeldung nicht feststellbar |
| 103 | Status der aktiven Fehlermeldung nicht feststellbar |
| 104 | Status der aktiven Fehlermeldung nicht feststellbar |
| 105 | Status der aktiven Fehlermeldung nicht feststellbar |
| 106 | Status der aktiven Fehlermeldung nicht feststellbar |
| 107 | Status der aktiven Fehlermeldung nicht feststellbar |
| 108 | Status der aktiven Fehlermeldung nicht feststellbar |
| 109 | Status der aktiven Fehlermeldung nicht feststellbar |
| 110 | Status der aktiven Fehlermeldung nicht feststellbar |
| 111 | Status der aktiven Fehlermeldung nicht feststellbar |
| 112 | Status der aktiven Fehlermeldung nicht feststellbar |
| 113 | Status der aktiven Fehlermeldung nicht feststellbar |
| 114 | Status der aktiven Fehlermeldung nicht feststellbar |
| 115 | Status der aktiven Fehlermeldung nicht feststellbar |
| 116 | Status der aktiven Fehlermeldung nicht feststellbar |
| 117 | Status der aktiven Fehlermeldung nicht feststellbar |
| 118 | Status der aktiven Fehlermeldung nicht feststellbar |
| 119 | Status der aktiven Fehlermeldung nicht feststellbar |
| 120 | Status der aktiven Fehlermeldung nicht feststellbar |
| 121 | Status der aktiven Fehlermeldung nicht feststellbar |
| 122 | Status der aktiven Fehlermeldung nicht feststellbar |
| 123 | Status der aktiven Fehlermeldung nicht feststellbar |
| 124 | Status der aktiven Fehlermeldung nicht feststellbar |
| 125 | Status der aktiven Fehlermeldung nicht feststellbar |
| 126 | Status der aktiven Fehlermeldung nicht feststellbar |
| 127 | Status der aktiven Fehlermeldung nicht feststellbar |
| 128 | Status der aktiven Fehlermeldung nicht feststellbar |
| 129 | Status der aktiven Fehlermeldung nicht feststellbar |
| 130 | Status der aktiven Fehlermeldung nicht feststellbar |
| 131 | Status der aktiven Fehlermeldung nicht feststellbar |
| 132 | Status der aktiven Fehlermeldung nicht feststellbar |
| 133 | Status der aktiven Fehlermeldung nicht feststellbar |
| 134 | Status der aktiven Fehlermeldung nicht feststellbar |
| 135 | Status der aktiven Fehlermeldung nicht feststellbar |
| 136 | Status der aktiven Fehlermeldung nicht feststellbar |
| 137 | Status der aktiven Fehlermeldung nicht feststellbar |
| 138 | Status der aktiven Fehlermeldung nicht feststellbar |
| 139 | Status der aktiven Fehlermeldung nicht feststellbar |
| 140 | Status der aktiven Fehlermeldung nicht feststellbar |
| 141 | Status der aktiven Fehlermeldung nicht feststellbar |
| 142 | Status der aktiven Fehlermeldung nicht feststellbar |
| 143 | Status der aktiven Fehlermeldung nicht feststellbar |
| 144 | Status der aktiven Fehlermeldung nicht feststellbar |
| 145 | Status der aktiven Fehlermeldung nicht feststellbar |
| 146 | Status der aktiven Fehlermeldung nicht feststellbar |
| 147 | Status der aktiven Fehlermeldung nicht feststellbar |
| 148 | Status der aktiven Fehlermeldung nicht feststellbar |
| 149 | Status der aktiven Fehlermeldung nicht feststellbar |
| 150 | Status der aktiven Fehlermeldung nicht feststellbar |
| 151 | Status der aktiven Fehlermeldung nicht feststellbar |
| 152 | Status der aktiven Fehlermeldung nicht feststellbar |
| 153 | Status der aktiven Fehlermeldung nicht feststellbar |
| 154 | Status der aktiven Fehlermeldung nicht feststellbar |
| 155 | Status der aktiven Fehlermeldung nicht feststellbar |
| 156 | Status der aktiven Fehlermeldung nicht feststellbar |
| 157 | Status der aktiven Fehlermeldung nicht feststellbar |
| 158 | Status der aktiven Fehlermeldung nicht feststellbar |
| 159 | Status der aktiven Fehlermeldung nicht feststellbar |
| 160 | Status der aktiven Fehlermeldung nicht feststellbar |
| 161 | Status der aktiven Fehlermeldung nicht feststellbar |
| 162 | Status der aktiven Fehlermeldung nicht feststellbar |
| 163 | Status der aktiven Fehlermeldung nicht feststellbar |
| 164 | Status der aktiven Fehlermeldung nicht feststellbar |
| 165 | Status der aktiven Fehlermeldung nicht feststellbar |
| 166 | Status der aktiven Fehlermeldung nicht feststellbar |
| 167 | Status der aktiven Fehlermeldung nicht feststellbar |
| 168 | Status der aktiven Fehlermeldung nicht feststellbar |
| 169 | Status der aktiven Fehlermeldung nicht feststellbar |
| 170 | Status der aktiven Fehlermeldung nicht feststellbar |
| 171 | Status der aktiven Fehlermeldung nicht feststellbar |
| 172 | Status der aktiven Fehlermeldung nicht feststellbar |
| 173 | Status der aktiven Fehlermeldung nicht feststellbar |
| 174 | Status der aktiven Fehlermeldung nicht feststellbar |
| 175 | Status der aktiven Fehlermeldung nicht feststellbar |
| 176 | Status der aktiven Fehlermeldung nicht feststellbar |
| 177 | Status der aktiven Fehlermeldung nicht feststellbar |
| 178 | Status der aktiven Fehlermeldung nicht feststellbar |
| 179 | Status der aktiven Fehlermeldung nicht feststellbar |
| 180 | Status der aktiven Fehlermeldung nicht feststellbar |
| 181 | Status der aktiven Fehlermeldung nicht feststellbar |
| 182 | Status der aktiven Fehlermeldung nicht feststellbar |
| 183 | Status der aktiven Fehlermeldung nicht feststellbar |
| 184 | Status der aktiven Fehlermeldung nicht feststellbar |
| 185 | Status der aktiven Fehlermeldung nicht feststellbar |
| 186 | Status der aktiven Fehlermeldung nicht feststellbar |
| 187 | Status der aktiven Fehlermeldung nicht feststellbar |
| 188 | Status der aktiven Fehlermeldung nicht feststellbar |
| 189 | Status der aktiven Fehlermeldung nicht feststellbar |
| 190 | Status der aktiven Fehlermeldung nicht feststellbar |
| 191 | Status der aktiven Fehlermeldung nicht feststellbar |
| 192 | Status der aktiven Fehlermeldung nicht feststellbar |
| 193 | Status der aktiven Fehlermeldung nicht feststellbar |
| 194 | Status der aktiven Fehlermeldung nicht feststellbar |
| 195 | Status der aktiven Fehlermeldung nicht feststellbar |
| 196 | Status der aktiven Fehlermeldung nicht feststellbar |
| 197 | Status der aktiven Fehlermeldung nicht feststellbar |
| 198 | Status der aktiven Fehlermeldung nicht feststellbar |
| 199 | Status der aktiven Fehlermeldung nicht feststellbar |
| 200 | Status der aktiven Fehlermeldung nicht feststellbar |
| 201 | Status der aktiven Fehlermeldung nicht feststellbar |
| 202 | Status der aktiven Fehlermeldung nicht feststellbar |
| 203 | Status der aktiven Fehlermeldung nicht feststellbar |
| 204 | Status der aktiven Fehlermeldung nicht feststellbar |
| 205 | Status der aktiven Fehlermeldung nicht feststellbar |
| 206 | Status der aktiven Fehlermeldung nicht feststellbar |
| 207 | Status der aktiven Fehlermeldung nicht feststellbar |
| 208 | Status der aktiven Fehlermeldung nicht feststellbar |
| 209 | Status der aktiven Fehlermeldung nicht feststellbar |
| 210 | Status der aktiven Fehlermeldung nicht feststellbar |
| 211 | Status der aktiven Fehlermeldung nicht feststellbar |
| 212 | Status der aktiven Fehlermeldung nicht feststellbar |
| 213 | Status der aktiven Fehlermeldung nicht feststellbar |
| 214 | Status der aktiven Fehlermeldung nicht feststellbar |
| 215 | Status der aktiven Fehlermeldung nicht feststellbar |
| 216 | Status der aktiven Fehlermeldung nicht feststellbar |
| 217 | Status der aktiven Fehlermeldung nicht feststellbar |
| 218 | Status der aktiven Fehlermeldung nicht feststellbar |
| 219 | Status der aktiven Fehlermeldung nicht feststellbar |
| 220 | Status der aktiven Fehlermeldung nicht feststellbar |
| 221 | Status der aktiven Fehlermeldung nicht feststellbar |
| 222 | Status der aktiven Fehlermeldung nicht feststellbar |
| 223 | Status der aktiven Fehlermeldung nicht feststellbar |
| 224 | Status der aktiven Fehlermeldung nicht feststellbar |
| 225 | Status der aktiven Fehlermeldung nicht feststellbar |
| 226 | Status der aktiven Fehlermeldung nicht feststellbar |
| 227 | Status der aktiven Fehlermeldung nicht feststellbar |
| 228 | Status der aktiven Fehlermeldung nicht feststellbar |
| 229 | Status der aktiven Fehlermeldung nicht feststellbar |
| 230 | Status der aktiven Fehlermeldung nicht feststellbar |
| 231 | Status der aktiven Fehlermeldung nicht feststellbar |
| 232 | Status der aktiven Fehlermeldung nicht feststellbar |
| 233 | Status der aktiven Fehlermeldung nicht feststellbar |
| 234 | Status der aktiven Fehlermeldung nicht feststellbar |
| 235 | Status der aktiven Fehlermeldung nicht feststellbar |
| 236 | Status der aktiven Fehlermeldung nicht feststellbar |
| 237 | Status der aktiven Fehlermeldung nicht feststellbar |
| 238 | Status der aktiven Fehlermeldung nicht feststellbar |
| 239 | Status der aktiven Fehlermeldung nicht feststellbar |
| 240 | Status der aktiven Fehlermeldung nicht feststellbar |
| 241 | Status der aktiven Fehlermeldung nicht feststellbar |
| 242 | Status der aktiven Fehlermeldung nicht feststellbar |
| 243 | Status der aktiven Fehlermeldung nicht feststellbar |
| 244 | Status der aktiven Fehlermeldung nicht feststellbar |
| 245 | Status der aktiven Fehlermeldung nicht feststellbar |
| 246 | Status der aktiven Fehlermeldung nicht feststellbar |
| 247 | Status der aktiven Fehlermeldung nicht feststellbar |
| 248 | Status der aktiven Fehlermeldung nicht feststellbar |
| 249 | Status der aktiven Fehlermeldung nicht feststellbar |
| 250 | Status der aktiven Fehlermeldung nicht feststellbar |
| 251 | Status der aktiven Fehlermeldung nicht feststellbar |
| 252 | Status der aktiven Fehlermeldung nicht feststellbar |
| 253 | Status der aktiven Fehlermeldung nicht feststellbar |
| 254 | Status der aktiven Fehlermeldung nicht feststellbar |
| 255 | Status der aktiven Fehlermeldung nicht feststellbar |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### CDTCI_GODTC_DOP

| WERT | TEXT |
| --- | --- |
| 0 | EMISSION_REL |
| 16777210 | DEM_DTC_GROUP_NETWORK_COM_DTCS |
| 16777211 | DEM_DTC_GROUP_POWERTRAIN_DTCS |
| 16777212 | DEM_DTC_GROUP_CHASSIS_DTCS |
| 16777213 | DEM_DTC_GROUP_BODY_DTCS |

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### ARG_0XA001

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 7500.0 | Frequenzeinstellung: 20..20 000 Hz |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | -96.0 | 0.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen.Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.  Bei Verstärkern: Integer,-96..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem ausgegeben werden soll. Tabelle TAudioKanal |

### ARG_0XA021

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 7500.0 | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | -50.0 | 0.0 | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei Verstärkern: Integer, -50..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem gemessen werden soll. Tabelle TAudioKanal |
| ARG_MESSDAUER | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 300.0 | 3000.0 | legt die Dauer der Messung fest. Bereich: 50-1000ms Bei Verstärkern: Bereich: 200-3000ms |

### ARG_0XA0A2

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | 0-n | high | unsigned long | - | TAB_VERBAU_ROUTINE | - | - | - | - | - | Routinen, die getestet werden sollen |

### ARG_0XD028

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RADON | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | - | - | Setzen des Ausgangssignals RADON. |

### ARG_0XD09C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIOQUELLE | 0-n | high | unsigned char | - | TAB_ASD_AUDIOQUELLEN | - | - | - | - | - | Signalwahl für MUTE: 0 = alle Signale 1 = ASD-Signal 2 = Entertainment-Signale Achtung: Bei TOPHIFI muss das Entertainment-Signal seperat  im TOPHIFI-Verstärker stummgeschaltet werden |
| ARG_DEMUTE | 0-n | high | unsigned char | - | TDemuteStatus | - | - | - | - | - | 0 = Stummschaltung aus 1 = Stummschalten ein |

### RES_0XA021

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| STAT_LEVEL_WERT | - | - | + | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Bei Verstärkern: Integer, -50..0 [dB] |
| STAT_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | bezeichnet den Kanal, auf dem gemessen wurde. |
| STAT_MESSDAUER_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder. Bereich: 50-1000ms Bei Verstärkern: Bereich: 800-3000ms |
| STAT_LAUTSPRECHER_IMPEDANZMESSUNG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_KANAELE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_1_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_1_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_1_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_2_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_2_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_2_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_3_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_3_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_3_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_4_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_4_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_4_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_5_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_5_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_5_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_6_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_6_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_6_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_7_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_7_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_7_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_8_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_8_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_8_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_9_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_9_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_9_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_10_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_10_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_10_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_11_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_11_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_11_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_12_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_12_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_12_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_13_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_13_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_13_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_14_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_14_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_14_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_15_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_15_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_15_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_16_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_16_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_16_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |

### RES_0XA08C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIFIDIAGNOSE_EIN | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Ansteuerung für HIFI-Diagnose des buslosen Verstärkers: 0 = AUS 1 = EIN |

### RES_0XA0A2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_VERBAU_VERSTAERKER | - | - | + | 0-n | high | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | high | unsigned long | - | TAB_VERBAU_ROUTINE | - | - | - | ausgeführte Testroutine |

### RES_0XD026

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_FOT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Fibre Optical Transceivers (FOT). Bereich: -127,&,127 |
| STAT_TEMP_ENDSTU_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur der Endstufe. Bereich: -32767,&, 32767 |
| STAT_TEMP_GYRO_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Gyro. Bereich: -127,&,127 |
| STAT_TEMP_MOD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Moduls (normalerweise prozessornah). Bereich: -127,&,127 |
| STAT_TEMP_HDD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des HDD-Laufwerks. Bereich: -127,&,127 |
| STAT_TEMP_DVD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des DVD-Laufwerks. Bereich: -127,&,127 |

### RES_0XD028

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADON | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | Status des Ausgangssignals RADON |

### RES_0XD09C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEMUTE_ASD | 0-n | high | unsigned char | - | TDemuteStatus | - | - | - | Status vom ASD-Signal: 0 = Stummschaltung aus 1 = Stummschaltung ein |
| STAT_DEMUTE_ENTERTAINMENT | 0-n | high | unsigned char | - | TDemuteStatus | - | - | - | Status vom Entertainment-Signal: 0 = Stummschaltung aus 1 = Stummschaltung ein |

### TRADONLEAD

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0xFF | Nicht definiert |

### TAB_VERBAU_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0x00000001 | Lautsprecherausgangsleitungen |
| 0x00000002 | RAD ON Leitung |
| 0x00000004 | Verbindung Verstärker zum Mikrofon 1 |
| 0x00000008 | Verbindung Verstärker zum Mikrofon 2 |
| 0x00000010 | Lichtinszenierung |
| 0x00000020 | AGA-Lautsprecher |
| 0x00000040 | AGA-Sensoren |
| 0xFFFFFFFF | nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Stummschaltung aus |
| 0x01 | Stummschaltung ein |
| 0xFF | Nicht definiert |

### TKANALFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Außerhalb Toleranz |
| 0x04 | Kurzschluss Untereinander |
| 0xFF | Nicht definiert |

### TAUDIOKANAL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Kanäle |
| 0x00000001 | Links vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000002 | Rechts vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000004 | Center vorne (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000008 | Seite links (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000010 | Seite rechts (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000020 | Links hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000040 | Rechts hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000080 | Links vorne Bass (Erweiterter Kanal) |
| 0x00000100 | Rechts vorne Bass (Erweiterter Kanal) |
| 0x00000200 | Links hinten Bass (Erweiterter Kanal) |
| 0x00000400 | Rechts hinten Bass (Erweiterter Kanal) |
| 0x00000800 | Center hinten (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00001000 | Linker Kopfhörer links |
| 0x00002000 | Linker Kopfhörer rechts |
| 0x00004000 | Rechter Kopfhörer links |
| 0x00008000 | Rechter Kopfhörer rechts |
| 0x00010000 | Links vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00020000 | Rechts vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00040000 | Center vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00080000 | Seite links (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00100000 | Seite rechts (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00200000 | Links hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00400000 | Rechts hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00800000 | Center hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0xFFFFFFFF | Nicht definiert |

### TAB_ASD_AUDIOQUELLEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Signale |
| 0x01 | ASD-Signale |
| 0x02 | Entertainment-Signale |
| 0xFF | ungültig |
