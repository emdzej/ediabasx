# cdm_rr4.prg

## General

|  |  |
| --- | --- |
| File | cdm_rr4.prg |
| Type | PRG |
| Jobs | 37 |
| Tables | 82 |
| Origin | BMW EK-531 Wagenhuber |
| Revision | 6.002 |
| Author | MBtech ES Koch |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Coach door module |  |  |
| ORIGIN | string | BMW EK-531 Wagenhuber |  |  |
| REVISION | string | 6.002 |  |  |
| AUTHOR | string | MBtech ES Koch |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.36 |  |  |
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

### STATUS_BETRIEBSMODE

Aktueller Betriebsmode SG muss sich im Energiersparmode befinden UDS  : $22   ReadDataByIdentifier UDS  : $100E Sub-Parameter Betriebsmode Modus: Default

_No arguments._

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

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
| 0x3D80 | Lüfter | 1 |
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
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
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
| 0x5EA0 | Wireless Charging Ablage | - |
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
| 0x6000 | Abschattungs-Elektronik-Dach | 1 |
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
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Technology Schweden |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
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

### ARG_0XD5AA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned int | - | TAB_SUCHBELEUCHTUNG | 1.0 | 1.0 | 0.0 | - | - | Steuerung der Suchbeleuchtung über Diagnose ein- oder auschalten 0: aus = Steuerung über Diagnose ausschalten 1: ein = Steuerung über Diagnose einschalten |
| DIMMBELEUCHTUNGSWERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Beleuchtungswert: Bereich: 0 bis 253 -> Nachtbeleuchtung Bereich: 254 -> Tag (Lichtschalter aus) Bereich: 255 -> Signal fehlerhaft, Licht aus |

### ARG_0XDCED

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VORHANG_TUER_FAH_AUF | 0-n | - | char | - | TAB_VORHANG_AUF | 1.0 | 1.0 | 0.0 | - | - | Vorhang: Tür Fahrer hinten: Steuern: öffnen |

### ARG_0XDCEF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VORHANG_TUER_BFH_AUF | 0-n | - | char | - | TAB_VORHANG_AUF | 1.0 | 1.0 | 0.0 | - | - | Vorhang: Tür Beifahrer hinten: Steuern: öffnen |

### ARG_0XDCF7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_COSI_BEIDE_EIN | 0/1 | - | char | - | - | - | - | - | - | - | COSI Coach Door Sicherung:  Steuern: verriegeln |

### ARG_0XDCF8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_COSI_BEIDE_AUS | 0/1 | - | char | - | - | - | - | - | - | - | COSI Coach Door Sicherung:  Steuern: entriegeln |

### ARG_0XDCF9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TUER_FAH_ZUZIEHEN | 0-n | - | char | - | TAB_ZZH_MOTOR | - | - | - | - | - | Zuziehhilfe: Tuer Fahrerseite: Steuern: zuziehen/schließen 0: Motor STOPP 1: Applikationsansteuerung Tür schließen 2: Fertigungsansteuerung Tür schließen ohne Diagnose für 200ms.     ACHTUNG: Keine Abschaltung bei Blockierung o.ä. |

### ARG_0XDCFA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TUER_BFH_ZUZIEHEN | 0-n | - | char | - | TAB_ZZH_MOTOR | - | - | - | - | - | Zuziehhilfe: Tuer Beifahrerseite: Steuern: zuziehen/schließen 0: Motor STOPP 1: Applikationsansteuerung Tür schließen 2: Fertigungsansteuerung Tür schließen ohne Diagnose für 200ms.     ACHTUNG: Keine Abschaltung bei Blockierung o.ä. |

### ARG_0XDCFB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_KUEHLERFIGUR_EINFAHREN | 0-n | - | char | - | TAB_KUEHLERFIGUR_EINFAHREN | 1.0 | 1.0 | 0.0 | - | - | Kühlerfigur: Steuern: einfahren 1: Applikationsansteuerung Kühlerfigur einfahren |

### ARG_0XDCFC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_KUEHLERFIGUR_AUSFAHREN | 0-n | - | char | - | TAB_KUEHLERFIGUR_AUSFAHREN | 1.0 | 1.0 | 0.0 | - | - | Kühlerfigur: Steuern: ausfahren 1: Applikationsansteuerung Kühlerfigur ausfahren |

### ARG_0XDCFD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_CID_KLAPPE_AUF | 0-n | - | char | - | TAB_CID_KLAPPE_AUF | 1.0 | 1.0 | 0.0 | - | - | 0: Klappe STOP, 1: Applikationsansteuerung Klappe öffnen   2: Fertigungsansteuerung Klappe öffnen ohne Diagnose für 200ms.     ACHTUNG: Keine Abschaltung bei Blockierung o.ä. |

### ARG_0XDCFE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_CID_KLAPPE_ZU | 0-n | - | char | - | TAB_CID_KLAPPE_ZU | 1.0 | 1.0 | 0.0 | - | - | 0: Klappe STOP, 1: Applikationsansteuerung Klappe schließen   2: Fertigungsansteuerung Klappe schließen ohne Diagnose für 200ms.     ACHTUNG: Keine Abschaltung bei Blockierung o.ä. |

### ARG_0XDD01

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VORHANG_HECK_BEIDE_AUF | 0-n | - | char | - | TAB_VORHANG_ALLE_AUF | 1.0 | 1.0 | 0.0 | - | - | Vorhang: Heck beide: Steuern: öffnen |

### ARG_0XDD02

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_KUEHLERFIGUR_MONTAGE | 0-n | - | char | - | TAB_KUEHLERFIGUR_MONTAGE | 1.0 | 1.0 | 0.0 | - | - | Kühlerfigur: Steuern: Montagestellung 0: Montagestellung verlassen 1: Montagestellung einnehmen |

### ARG_0XDD03

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VORHANG_ALLE_AUF | 0-n | - | char | - | TAB_VORHANG_ALLE_AUF | 1.0 | 1.0 | 0.0 | - | - | Vorhang: alle Vorhänge: Steuern: öffnen |

### ARG_0XDD05

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_KF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Initialisierung Kühlerfigur |

### ARG_0XDD06

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_VH_FAH | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Initialisierung Vorhang Fahrerseite hinten |

### ARG_0XDD07

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_VH_BFH | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Initialisierung Vorhang Beifahrerseite hinten |

### ARG_0XDD08

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_VH_HECK | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Initialisierung Vorhang Heck |

### ARG_0XDD09

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_CID | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Initialisierung CID-Klappe |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0x01 | Allgemeiner Fertigungs- und Energiesparmode | Verfahren der CID-Klappe, Kühlerfigur, Vorhänge und Zuziehhilfe nicht möglich |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Betriebsmode 4 | - |
| 0x05 | Betriebsmode 5 | - |
| 0x06 | Rollenmode | - |
| 0x07 | Fertigungsmode Untermodus 7 | Keine Einschränkung der Funktionen |
| 0x08 | Fertigungsmode Untermodus 8 | Keine Einschränkung der Funktionen |
| 0x09 | Fertigungsmode Untermodus 9 | Keine Einschränkung der Funktionen |
| 0x0A | Fertigungsmode Untermodus 10 | Keine Einschränkung der Funktionen |
| 0x0B | Fertigungsmode Untermodus 11 | Keine Einschränkung der Funktionen |
| 0x0C | Fertigungsmode Untermodus 12 | Keine Einschränkung der Funktionen |
| 0x0D | Fertigungsmode Untermodus 13 | Keine Einschränkung der Funktionen |
| 0x0E | Fertigungsmode Untermodus 14 | Keine Einschränkung der Funktionen |
| 0x0F | Fertigungsmode Untermodus 15 | Keine Einschränkung der Funktionen |
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
| 0x8038AB | Zuziehhilfe-Taster Fahrerseite: Verklemmung | 0 |
| 0x8038AC | Zuziehhilfe-Taster Beifahrerseite: Verklemmung | 0 |
| 0x8038AD | Zuziehhilfe-Motor Haupt- und/oder Kupplungsmotor Fahrerseite: Unterbrechung | 0 |
| 0x8038B1 | Zuziehhilfe-Motor Haupt- und/oder Kupplungsmotor Fahrerseite: Kurzschluss nach Plus | 0 |
| 0x8038AF | Zuziehhilfe-Motor Haupt- und/oder Kupplungsmotor Fahrerseite: Kurzschluss nach Masse | 0 |
| 0x8038AE | Zuziehhilfe-Motor Haupt- und/oder Kupplungsmotor Beifahrerseite: Unterbrechung | 0 |
| 0x8038B2 | Zuziehhilfe-Motor Haupt- und/oder Kupplungsmotor Beifahrerseite: Kurzschluss nach Plus | 0 |
| 0x8038B0 | Zuziehhilfe-Motor Haupt- und/oder Kupplungsmotor Beifahrerseite: Kurzschluss nach Masse | 0 |
| 0x8038A5 | Zuziehhilfe-Drehwinkelsensor Fahreseite: Kurzschluss nach Plus | 0 |
| 0x8038A6 | Zuziehhilfe-Drehwinkelsensor Fahrerseite: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x8038A7 | Zuziehhilfe-Drehwinkelsensor Beifahrerseite: Kurzschluss nach Plus | 0 |
| 0x8038A8 | Zuziehhilfe-Drehwinkelsensor Beifahrerseite: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803970 | ZV-Status Fahrerseite: Hallsensor defekt | 0 |
| 0x80396F | ZV-Status Beifahrerseite: Hallsensor defekt | 0 |
| 0x803979 | ZV-Fahrerseite ohne Reaktion | 1 |
| 0x803978 | ZV-Beifahrerseite ohne Reaktion | 1 |
| 0x8038D4 | Vorhang Heck: Initialisierung fehlgeschlagen | 0 |
| 0x8038D2 | Vorhang Fahrerseite Tuer: Initialisierung fehlgeschlagen | 0 |
| 0x8038D3 | Vorhang Beifahrerseite Tuer: Initialisierung fehlgeschlagen | 0 |
| 0x8038BB | Vorhang-Motoren Heck: Unterbrechung | 0 |
| 0x80389E | Vorhang-Motoren Heck: Kurzschluss nach Plus | 0 |
| 0x80389D | Vorhang-Motoren Heck: Kurzschluss nach Masse | 0 |
| 0x8038B9 | Vorhang-Motor Tür Fahrer hinten: Unterbrechung | 0 |
| 0x803890 | Vorhang-Motor Tür Fahrer hinten: Kurzschluss nach Plus | 0 |
| 0x8038A1 | Vorhang-Motor Tür Fahrer hinten: Kurzschluss nach Masse | 0 |
| 0x8038BE | Vorhang-Motor Tür Fahrer hinten:  Hallsensor 2 defekt | 0 |
| 0x8038A3 | Vorhang-Motor Tür Fahrer hinten:  Hallsensor 1 defekt | 0 |
| 0x8038BA | Vorhang-Motor Tür Beifahrer hinten: Unterbrechung | 0 |
| 0x803891 | Vorhang-Motor Tür Beifahrer hinten: Kurzschluss nach Plus | 0 |
| 0x8038A2 | Vorhang-Motor Tür Beifahrer hinten: Kurzschluss nach Masse | 0 |
| 0x8038BD | Vorhang-Motor Tür Beifahrer hinten:  Hallsensor 2 defekt | 0 |
| 0x8038A4 | Vorhang-Motor Tür Beifahrer hinten:  Hallsensor 1 defekt | 0 |
| 0x8038C0 | Vorhang-Motor Heckscheibe Fahrerseite: Hallsensor 2 defekt | 0 |
| 0x80389F | Vorhang-Motor Heckscheibe Fahrerseite: Hallsensor 1 defekt | 0 |
| 0x8038BF | Vorhang-Motor Heckscheibe Beifahrerseite: Hallsensor 2 defekt | 0 |
| 0x8038A0 | Vorhang-Motor Heckscheibe Beifahrerseite: Hallsensor 1 defekt | 0 |
| 0x8038D6 | Türinnengriff Fahrer vorne: Hallsensor defekt | 0 |
| 0x8038D7 | Türinnengriff Fahrer vorne: Hallsensor defekt | 0 |
| 0x80396E | Türinnengriff Fahrer oder Beifahrer: Hallsensor unplausibel | 1 |
| 0x80389B | Türinnengriff Fahrer hinten: Hallsensor defekt | 0 |
| 0x8038D5 | Türinnengriff Beifahrer vorne: Hallsensor defekt | 0 |
| 0x80389C | Türinnengriff Beifahrer hinten: Hallsensor defekt | 0 |
| 0x8038D8 | Tür-Vorrast Fahrer vorne: Hallsensor defekt | 0 |
| 0x803899 | Tür-Vorrast Fahrer hinten: Hallsensor defekt | 0 |
| 0x80389A | Tür-Vorrast Beifahrer hinten: Hallsensor defekt | 0 |
| 0x803897 | Suchbeleuchtung: Kurzschluss nach Plus | 0 |
| 0x803896 | Suchbeleuchtung: Kurzschluss nach Masse | 0 |
| 0xCA6C30 | Signal (0xEC) ungültig empfangen: Status Zentralverriegelung Fahrertür (FAT) lokal | 1 |
| 0xCA6C31 | Signal (0xEC) ungültig empfangen: Status Zentralverriegelung Beifahrertür (BFT) lokal | 1 |
| 0xCA6C28 | Signal (0xEC) ungültig empfangen: Status Türkontakt Fahrertür (FAT) lokal | 1 |
| 0xCA6C29 | Signal (0xEC) ungültig empfangen: Status Türkontakt Beifahrertür (BFT) lokal | 1 |
| 0xCA6C39 | Signal (0x3F9) ungültig empfangen: Alive_Daten_Antriebsstrang_2 | 1 |
| 0xCA6C32 | Signal (0x2FC) ungültig empfangen: Status Kontakt Motorhaube | 1 |
| 0xCA6C33 | Signal (0x26F) ungültig empfangen: Status_Motor_läuft_Antrieb | 1 |
| 0xCA6C38 | Signal (0x12F) ungültig empfangen: Alive_Klemmen | 1 |
| 0xCA6C01 | Signal (0xEC) ungültig empfangen: Status_Zentralverriegelung_FATH_Lokal | 1 |
| 0xCA6C02 | Signal (0xEC) ungültig empfangen: Status_Zentralverriegelung_BFTH_Lokal | 1 |
| 0xCA6C04 | Signal (0xEC) ungültig empfangen: Status_Türkontakt_FATH_Lokal | 1 |
| 0xCA6C03 | Signal (0xEC) ungültig empfangen: Status_Türkontakt_BFTH_Lokal | 1 |
| 0xCA6C14 | Signal (0x620) ungültig empfangen: Bedienung_Heckrollo_FA | 1 |
| 0xCA6C0C | Signal (0x2CA) ungültig empfangen: Temperatur_Außen | 1 |
| 0xCA6C11 | Signal (0x2A0) ungültig empfangen: Status_Hotelstellung_Peripherie | 1 |
| 0xCA6C16 | Signal (0x270) ungültig empfangen: Bedienung_Seitenrollo_1_FAH_FAH | 1 |
| 0xCA6C18 | Signal (0x270) ungültig empfangen: Bedienung_Seitenrollo_1_BFH_FAH | 1 |
| 0xCA6C15 | Signal (0x270) ungültig empfangen: Bedienung_Heckrollo_FAH | 1 |
| 0xCA6C1B | Signal (0x26F) ungültig empfangen: Bedienung_Seitenrollo_1_FAH_BFH | 1 |
| 0xCA6C1D | Signal (0x26F) ungültig empfangen: Bedienung_Seitenrollo_1_BFH_BFH | 1 |
| 0xCA6C1A | Signal (0x26F) ungültig empfangen: Bedienung_Heckrollo_BFH | 1 |
| 0xCA6C10 | Signal (0x26E) ungültig empfangen: Status_Komfortfunktion | 1 |
| 0xCA6C05 | Signal (0x26E) ungültig empfangen: Status_Kindersicherung | 1 |
| 0xCA6C27 | Signal (0x246) ungültig empfangen: Status_Taste_CID | 1 |
| 0xCA6C0F | Signal (0x23A) ungültig empfangen: Bedienung_Schlüssel_Taste_Sonderfunktion | 1 |
| 0xCA6C00 | Signal (0x1FE) ungültig empfangen: Steuerung_Crash_Zentralverriegelung | 1 |
| 0xCA6C08 | Signal (0x1A1) ungültig empfangen: Qualifier_Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xCA6C07 | Signal (0x1A1) ungültig empfangen: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xCA6C0B | Signal (0x1A1) ungültig empfangen: Alive_Geschwindigkeit_Fahrzeug | 1 |
| 0xCA6C25 | Signal (0x163) ungültig empfangen: Ist_Querneigung_Fahrbahn | 1 |
| 0xCA6C24 | Signal (0x163) ungültig empfangen: Ist_Längsneigung_Fahrbahn | 1 |
| 0xCA6C20 | Signal (0x12F) ungültig empfangen: Status_Klemme_30b | 1 |
| 0xCA6C1F | Signal (0x12F) ungültig empfangen: Status_Klemme | 1 |
| 0x803895 | Kühlerfigur-Motor: Unterbrechung | 0 |
| 0x803894 | Kühlerfigur-Motor: Kurzschluss nach Plus | 0 |
| 0x803893 | Kühlerfigur-Motor: Kurzschluss nach Masse | 0 |
| 0x8038C1 | Kühlerfigur-Motor: Hallsensor 2 defekt | 0 |
| 0x803892 | Kühlerfigur-Motor: Hallsensor 1 defekt | 0 |
| 0x8038C4 | Kühlerfigur-Motor: Endposition nicht erreicht | 0 |
| 0x8038D0 | Kühlerfigur Motor: einer oder beide Hallsensoren Spannung undefiniert | 0 |
| 0x8038D1 | Kühlerfigur Motor: einer oder beide Hallsensoren Open Load, Kurzschluss nach Plus oder Übertemperatur | 0 |
| 0x8038CF | Kühlerfigur Motor: einer oder beide Hallsensoren Kurzschluss nach Masse | 0 |
| 0x80388E | Klemme 30B_3 (Vorhang, Zuziehhilfe Beifahrerseite): Überspannung erkannt  | 1 |
| 0x80388F | Klemme 30B_3 (Vorhang, Zuziehhilfe Beifahrerseite): Unterspannung erkannt  | 1 |
| 0x80388C | Klemme 30B_2 (Vorhänge Heckscheibe, Kühlerfigur): Überspannung erkannt | 1 |
| 0x80388D | Klemme 30B_2 (Vorhänge Heckscheibe, Kühlerfigur): Unterspannung erkannt  | 1 |
| 0x80388A | Klemme 30B_1 (Vorhang, Zuziehhilfe Fahrerseite, Suchbeleuchtung): Überspannung erkannt | 1 |
| 0x80388B | Klemme 30B_1 (Vorhang, Zuziehhilfe Fahrerseite, Suchbeleuchtung): Unterspannung erkannt | 1 |
| 0x803881 | Interner Steuergeraetefehler Software | 0 |
| 0x803880 | Interner Steuergeraetefehler Hardware | 0 |
| 0x020500 | Energiesparmodus aktiv | 1 |
| 0xCA4BFF | Diagnosemaster Test: Dummy DTC Netzwerk | 1 |
| 0x02FF05 | Diagnosemaster Test: Dummy DTC Applikation | 1 |
| 0x8038B8 | Codierung: ungueltige Daten | 0 |
| 0x8038B4 | Codierung: nicht codiert | 0 |
| 0x8038B7 | Codierung: falsches Fahrzeug | 0 |
| 0x8038B5 | Codierung: Uebertragung fehlgeschlagen | 0 |
| 0x8038B6 | Codierung: Signaturfehler | 0 |
| 0x8038CD | CoSi: Tür-Vorrast Fahrerseite: Hallsensor unlogisch | 0 |
| 0x8038CE | CoSi: Tür-Vorrast Beifahrerseite: Hallsensor unlogisch | 0 |
| 0x8038C5 | CoSi: Tür-Hauptrast Fahrerseite: Hallsensor unlogisch | 0 |
| 0x8038C6 | CoSi: Tür-Hauptrast Beifahrerseite Hallsensor unlogisch | 0 |
| 0x803885 | CoSi-Status Fahrerseite: Hallsensor defekt | 0 |
| 0x803886 | CoSi-Status Beifahrerseite: Hallsensor defekt | 0 |
| 0x803889 | CoSi-Motoren einer oder beide: Unterbrechung | 0 |
| 0x803888 | CoSi-Motoren einer oder beide: Kurzschluss nach Masse | 0 |
| 0x803887 | CoSi-Motoren  einer oder beide: Kurzschluss nach Plus | 0 |
| 0x80397D | CoSi-Motor Fahrerseite: Unterbrechung | 0 |
| 0x80397F | CoSi-Motor Fahrerseite: Kurzschluss nach Plus | 0 |
| 0x80397E | CoSi-Motor Fahrerseite: Kurzschluss nach Masse | 0 |
| 0x803972 | CoSi-Motor Fahrerseite: H-Brücke defekt | 0 |
| 0x80397C | CoSi-Motor Beifahrerseite: Kurzschluss nach Plus | 0 |
| 0x80397B | CoSi-Motor Beifahrerseite: Kurzschluss nach Masse | 0 |
| 0x803971 | CoSi-Motor Beifahrerseite: H-Brücke defekt | 0 |
| 0x80397A | CoSi-Motor Beifahrereseite: Unterbrechung | 0 |
| 0x803973 | CoSi TIG Manipulationsversuch | 1 |
| 0x803975 | CoSi Spielschutz aktiv (Fahrerseite) | 0 |
| 0x803974 | CoSi Spielschutz aktiv (Beifahrerseite) | 0 |
| 0x803977 | CoSi Hall unplausibel (Fahrerseite) | 0 |
| 0x803976 | CoSi Hall unplausibel (Beifahrerseite) | 0 |
| 0x8038CC | CID Kalibrierung ungültig | 0 |
| 0x803883 | CID Hall Sensor defekt | 0 |
| 0x8038C9 | CID-LIN: Motor Versorgungsspannung Fehler | 0 |
| 0x8038CA | CID-LIN: Motor Temperatur Fehler | 0 |
| 0x8038CB | CID-LIN: Motor Fehler in Elektrik | 0 |
| 0x8038C8 | CID-LIN: Kurzschluss | 0 |
| 0x8038C7 | CID-LIN: Keine Kommunikation | 0 |
| 0xCA540B | Botschaft (0x3F9,Daten Antriebsstrang 2 Ausfall): Ausfall | 1 |
| 0xCA6C37 | Botschaft (0x3F9, Daten_Antriebsstrang_2): Prüfsummenfehler | 1 |
| 0xCA6C36 | Botschaft (0x3F9, Daten_Antriebsstrang_2): Alive-Zähler-Fehler | 1 |
| 0xCA6C35 | Botschaft (0x12F, Klemmen): Prüfsummenfehler | 1 |
| 0xCA6C34 | Botschaft (0x12F, Klemmen): Alive-Zähler-Fehler | 1 |
| 0xCA5400 | Botschaft (0xEC, Status Zentralverriegelung Tür Schloss): Ausfall | 1 |
| 0xCA5405 | Botschaft (0x2CA, Außentemperatur): Ausfall | 1 |
| 0xCA5406 | Botschaft (0x2A0, Steuerung Zentralverriegelung): Ausfall | 1 |
| 0xCA5401 | Botschaft (0x26E, Steuerung FH/SHD Zentrale (Komfort)): Ausfall | 1 |
| 0xCA540A | Botschaft (0x246, Status Klima Front Bedienteil): Ausfall | 1 |
| 0xCA5402 | Botschaft (0x1a1 , Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xCA5404 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Prüfsummenfehler | 1 |
| 0xCA5403 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Alive-Zähler-Fehler | 1 |
| 0xCA5408 | Botschaft (0x163, Neigung Fahrbahn): Ausfall | 1 |
| 0xCA5407 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xCA4468 | Body-CAN Control Module Bus OFF | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1727 | TEMPERATUR_AUSSEN | °C | - | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | KLEMME_30B1 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x4002 | KLEMME_30B2 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x4003 | KLEMME_30B3 | V | - | unsigned char | - | 1 | 10 | 0 |

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
| 0x050401 | DM_Queue_FULL | 0 |
| 0x050402 | DM_Queue_DELETED | 0 |
| 0x051001 | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0x052001 | NVM_E_WRITE_FAILED | 0 |
| 0x052002 | NVM_E_READ_FAILED | 0 |
| 0x052003 | NVM_E_CONTROL_FAILED | 0 |
| 0x052004 | NVM_E_ERASE_FAILED | 0 |
| 0x052006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x052007 | NVM_E_READ_ALL_FAILED | 0 |
| 0x052010 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x4000 | Spannungsfehler V_COSI | 0 |
| 0x4007 | Codierung der Fahrerposition ungültig bzw. fehlt | 0 |
| 0x400A | Main relay 1 switched of from MCH | 0 |
| 0x400B | Main relay 2 switched of from MCH | 0 |
| 0x400C | Main relay 3 switched of from MCH | 0 |
| 0x400D | MASC function detected | 0 |
| 0x400E | Selftest RAM Walkpath | 0 |
| 0x400F | Selftest RAM Startup | 0 |
| 0x4010 | Selftest ROM | 0 |
| 0x4011 | Selftest CPU ALU | 0 |
| 0x4012 | Selftest CPU Instructionset | 0 |
| 0x4013 | Selftest Stack | 0 |
| 0x4014 | Selftest Watchdog Startup | 0 |
| 0x4015 | Selftest Watchdog Shutdown | 0 |
| 0x4016 | Selftest ADC | 0 |
| 0x4017 | Selftest Activity | 0 |
| 0x4018 | CoSi Monitor | 0 |
| 0x4019 | Fahren mit offener Coach Door bei v>25km/h | 0 |
| 0x401A | CAN Nachricht konnte nicht gesendet werden | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | KLEMME_30B1 | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4002 | KLEMME_30B2 | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4003 | KLEMME_30B3 | V | high | unsigned char | - | 1 | 10 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XDA82

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_BFH_ENTRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer nicht entriegelt 1: Schloss Beifahrertuer entriegelt RR4 vordere Tuer RR5 hintere Tuer |
| STAT_ZV_BFH_VERRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer nicht verriegelt 1: Schloss Beifahrertuer verriegelt RR4 vordere Tuer RR5 hintere Tuer |
| STAT_ZV_BFH_GESICHERT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer nicht gesichert 1: Schloss Beifahrertuer gesichert RR4 vordere Tuer RR5 hintere Tuer |
| STAT_ZV_CRASH_MODE_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Crashmode nicht aktiv 1: Crashmode aktiv |

### RES_0XDA84

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FAH_ENTRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer  nicht entriegelt 1: Schloss Fahrertuer  entriegelt RR4 vordere Tuer RR5 hintere Tuer |
| STAT_ZV_FAH_VERRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer  nicht verriegelt 1: Schloss Fahrertuer  verriegelt RR4 vordere Tuer RR5 hintere Tuer |
| STAT_ZV_FAH_GESICHERT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer  nicht gesichert 1: Schloss Fahrertuer  gesichert RR4 vordere Tuer RR5 hintere Tuer |
| STAT_ZV_CRASH_MODE_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Crashmode nicht aktiv 1: Crashmode aktiv |

### RES_0XDA8B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FA | 0-n | high | unsigned char | - | TAB_ZV_HALLSENSOREN_CDM | - | - | - | Zentralverriegelung Hallsensor Fahrerseite: Siehe Tabelle TAB_ZV_HALLSENSOREN_CDM |
| STAT_ZV_BF | 0-n | high | unsigned char | - | TAB_ZV_HALLSENSOREN_CDM | - | - | - | Zentralverriegelung Hallsensor Beifahrer: Siehe Tabelle TAB_ZV_HALLSENSOREN_CDM |

### RES_0XDCE0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANG_MOTOR_HECK_FAH_NR | 0-n | - | int | - | TAB_VORHANG_MOTOR | 1.0 | 1.0 | 0.0 | Status Vorhang Motor Heckscheibe Fahrerseite |
| STAT_VORHANG_MOTOR_HECK_BFH_NR | 0-n | - | int | - | TAB_VORHANG_MOTOR | 1.0 | 1.0 | 0.0 | Status Vorhang Motor Heckscheibe Beifahrerseite |
| STAT_VORHANG_MOTOR_TUER_FAH_NR | 0-n | - | int | - | TAB_VORHANG_MOTOR | 1.0 | 1.0 | 0.0 | Status Vorhang Motor Seitenscheibe Fahrerseite |
| STAT_VORHANG_MOTOR_TUER_BFH_NR | 0-n | - | int | - | TAB_VORHANG_MOTOR | 1.0 | 1.0 | 0.0 | Status Vorhang Motor Seitenscheibe Beifahrerseite |
| STAT_VORHANG_HECK_FAH_NR | 0-n | - | int | - | TAB_VORHANG | 1.0 | 1.0 | 0.0 | Status Vorhang Heckscheibe Fahrerseite |
| STAT_VORHANG_HECK_BFH_NR | 0-n | - | int | - | TAB_VORHANG | 1.0 | 1.0 | 0.0 | Status Vorhang Heckscheibe Beifahrerseite |
| STAT_VORHANG_TUER_FAH_NR | 0-n | - | int | - | TAB_VORHANG | 1.0 | 1.0 | 0.0 | Status Vorhang Seitenscheibe Fahrerseite |
| STAT_VORHANG_TUER_BFH_NR | 0-n | - | int | - | TAB_VORHANG | 1.0 | 1.0 | 0.0 | Status Vorhang Seitenscheibe Beifahrerseite |
| STAT_VORHANG_ALLE_TASTER_FA_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Fahrer.  Der Fahrer steuert zentral alle Vorhänge: Fahrertür hinten, Beifahrertür hinten und Heckvorhänge.  Taster 0 = nicht gedrückt, 1= gedrückt |
| STAT_VORHANG_HECK_TASTER_FAH_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Fahrerseite hinten.  Passagier Fahrerseite hinten steuert Vorhang Heck.  Taster: 0= nicht gedrückt, 1 gedrückt |
| STAT_VORHANG_HECK_TASTER_BFH_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Beifahrerseite hinten.  Passagier Beifahrerseite hinten steuert Vorhang Heck. Taster: 0= nicht gedrückt, 1 gedrückt |
| STAT_VORHANG_TUER_FAH_TASTER_FAH_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Fahrerseite hinten.  Passagier Fahrerseite hinten steuert Vorhang Fahrertür.  Taster: 0= nicht gedrückt, 1 gedrückt |
| STAT_VORHANG_TUER_FAH_TASTER_BFH_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Beifahrerseite hinten.  Passagier Beifahrerseite hinten steuert Vorhang Fahrertür.   Taster: 0= nicht gedrückt, 1 gedrückt |
| STAT_VORHANG_TUER_BFH_TASTER_FAH_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Fahrerseite hinten.  Passagier Fahrerseite hinten steuert Vorhang Beifahrertür.  Taster: 0= nicht gedrückt, 1 gedrückt |
| STAT_VORHANG_TUER_BFH_TASTER_BFH_GEDRUECKT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Taster Beifahrerseite hinten.  Passagier Beifahrerseite hinten steuert Vorhang Beifahrertür.  Taster: 0= nicht gedrückt, 1 gedrückt |
| STAT_VORHANG_SPIELSCHUTZ_TUER_FAH_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz Vorhang: Seitenscheibe Fahrerseite:0= inaktiv, 1= aktiv |
| STAT_VORHANG_SPIELSCHUTZ_TUER_BFH_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz Vorhang: Seitenscheibe Beifahrerseite:0= inaktiv, 1= aktiv |
| STAT_VORHANG_SPIELSCHUTZ_HECK_FAH_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz Vorhang: Heckscheibe Fahrerseite:0= inaktiv, 1= aktiv |
| STAT_VORHANG_SPIELSCHUTZ_HECK_BFH_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz Vorhang: Heckscheibe Beifahrerseite:0= inaktiv, 1= aktiv |
| STAT_VORHANG_SPIELSCHUTZ_TUER_FAH_ZEIT_WERT | s | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz noch für x Sekunden aktiv Vorhang: Seitenscheibe Fahrerseite |
| STAT_VORHANG_SPIELSCHUTZ_TUER_BFH_ZEIT_WERT | s | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz noch für x Sekunden aktiv Vorhang: Seitenscheibe Beifahrerseite |
| STAT_VORHANG_SPIELSCHUTZ_HECK_FAH_ZEIT_WERT | s | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz noch für x Sekunden aktiv Vorhang: Heckscheibe Fahrerseite |
| STAT_VORHANG_SPIELSCHUTZ_HECK_BFH_ZEIT_WERT | s | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz noch für x Sekunden aktiv Vorhang: Heckscheibe Beifahrerseite |
| STAT_VORHANG_POSITION_TUER_FAH_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Position Vorhang: Seitenscheibe Fahrerseite in % geschlossen |
| STAT_VORHANG_POSITION_TUER_BFH_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Position Vorhang: Seitenscheibe Beifahrerseite in % geschlossen |
| STAT_VORHANG_POSITION_HECK_FAH_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Position Vorhang: Heckscheibe Fahrerseite in % geschlossen |
| STAT_VORHANG_POSITION_HECK_BFH_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Position Vorhang: Heckscheibe Beifahrerseite in % geschlossen |

### RES_0XDCE1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COSI_FAH_NR | 0-n | - | unsigned char | - | TAB_COSI | - | - | - | Coachdoor Sicherung Fahrerseite: 0= nicht eingelegt, 1= eingelegt, 2: Kurzschluss nach Masse, 3: Kurzschluss nach Plus oder Unterbrechung |
| STAT_COSI_BFH_NR | 0-n | - | unsigned char | - | TAB_COSI | - | - | - | Coachdoor Sicherung Beifahrerseite: 0= nicht eingelegt, 1= eingelegt, 2: Kurzschluss nach Masse, 3: Kurzschluss nach Plus oder Unterbrechung |
| STAT_TUER_INNENGRIFF_FAH_NR | 0-n | - | unsigned char | - | TAB_TUER_CDM | - | - | - | Coachdoor Türinnengriff (Hallsensor) Fahrer: 0= geöffnet, 1= geschlossen, 2: Kurzschluss nach Masse, 3: Kurzschluss nach Plus oder Unterbrechung |
| STAT_TUER_INNENGRIFF_BFH_NR | 0-n | - | unsigned char | - | TAB_TUER_CDM | - | - | - | Coachdoor Türinnengriff (Hallsensor) Beifahrer: 0= geöffnet, 1= geschlossen, 2: Kurzschluss nach Masse, 3: Kurzschluss nach Plus oder Unterbrechung |
| STAT_TUER_VORRAST_FAH_NR | 0-n | - | unsigned char | - | TAB_TUER_CDM | - | - | - | Coachdoor Vorrast (Hallsensor) Tür Fahrerseite: 0= geöffnet, 1= geschlossen, 2: Kurzschluss nach Masse, 3: Kurzschluss nach Plus oder Unterbrechung |
| STAT_TUER_VORRAST_BFH_NR | 0-n | - | unsigned char | - | TAB_TUER_CDM | - | - | - | Coachdoor Vorrast (Hallsensor) Tür Beifahrerseite: 0= geöffnet, 1= geschlossen, 2: Kurzschluss nach Masse, 3: Kurzschluss nach Plus oder Unterbrechung |
| STAT_TUER_HAUPTRAST_FAH_NR | 0-n | - | unsigned char | - | TAB_HAUPTRAST_CDM | - | - | - | Hauptrast Tür Fahrer:  0= geöffnet, 1= geschlossen, CAN-Signal |
| STAT_TUER_HAUPTRAST_BFH_NR | 0-n | - | unsigned char | - | TAB_HAUPTRAST_CDM | 1.0 | 1.0 | 0.0 | Hauptrast Tür Beifahrer: 0= geöffnet, 1= geschlossen, CAN-Signal |
| STAT_COSI_FEHLER_ZAEHLER_FAH | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | CoSi Fehlerzähler Fahrerseite |
| STAT_COSI_FEHLER_ZAEHLER_BFH | 0-n | - | unsigned char | - | TAB_HAUPTRAST_CDM | - | - | - | CoSi Fehlerzähler Beifahrerseite |

### RES_0XDCE2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_KLAPPE_NR | 0-n | - | char | - | TAB_CID_KLAPPE | 1.0 | 1.0 | 0.0 | Status CID Klappe |
| STAT_CID_MOTOR_NR | 0-n | - | char | - | TAB_CID_MOTOR | 1.0 | 1.0 | 0.0 | Status CID Motor |
| STAT_CID_TASTE_CAN_SIGNAL_NR | 0-n | - | char | - | TAB_CID_STATUS_TASTE | 1.0 | 1.0 | 0.0 | Status CID CAN Signal Status_Taste_CID |
| STAT_CID_MOTOR_CAN_SIGNAL_NR | 0-n | - | char | - | TAB_CID_MOTOR_CAN | 1.0 | 1.0 | 0.0 | Status CID CAN Signal Steuerung_Position_Monitor_Front |

### RES_0XDCE3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLERFIGUR_AUSGEFAHREN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Kühlerfigur: 0= undefiniert, 1= ausgefahren |
| STAT_KUEHLERFIGUR_EINGEFAHREN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Kühlerfigur: 0= undefiniert, 1= eingefahren |
| STAT_KUEHLERFIGUR_ZWISCHENSTELLUNG | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Kühlerfigur: 0= undefiniert. 1= Zwischenstellung |
| STAT_KUEHLERFIGUR_NR | 0-n | - | int | - | TAB_KF_MOTOR | 1.0 | 1.0 | 0.0 | Kühlerfigur: Zustand |
| STAT_KUEHLERFIGUR_POS_NR | 0-n | - | int | - | TAB_KF_POS | 1.0 | 1.0 | 0.0 | Kühlerfigur: Position |
| STAT_KUEHLERFIGUR_SPIELSCHUTZ_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz Kühlerfigur:0= inaktiv, 1= aktiv |
| STAT_KUEHLERFIGUR_SPIELSCHUTZ_ZEIT_WERT | s | - | char | - | - | 1.0 | 1.0 | 0.0 | Spielschutz noch für x Sekunden aktiv Kühlerfigur |

### RES_0XDCE6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEMME_30B_1_WERT | V | - | int | - | - | 1.0 | 10.0 | 0.0 | Klemme 30B_1, Spannung am Steuergerät, CDM Spezifisch  (Auflösung: 0,1 V) |
| STAT_KLEMME_30B_2_WERT | V | - | int | - | - | 1.0 | 10.0 | 0.0 | Klemme 30B_2, Spannung am Steuergerät, CDM Spezifisch  (Auflösung: 0,1 V) |
| STAT_KLEMME_30B_3_WERT | V | - | int | - | - | 1.0 | 10.0 | 0.0 | Klemme 30B_3, Spannung am Steuergerät, CDM Spezifisch  (Auflösung: 0,1 V) |

### RES_0XDCEA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZZH_DREHWINKELSENSOR_FAH_SPG_WERT | V | - | int | - | - | 1.0 | 10.0 | 0.0 | Zuziehhilfe: Drehwinkelsensor Fahrerseite  (Auflösung 0,?? V) i.O. Bereich: 0,4V und 4,6V |
| STAT_ZZH_DREHWINKELSENSOR_BFH_SPG_WERT | V | - | int | - | - | 1.0 | 10.0 | 0.0 | Zuziehhilfe: Drehwinkelsensor Beifahrerseite (Auflösung 0,?? V) i.O. Bereich: 0,4V und 4,6V |
| STAT_ZZH_TASTER_FAH_GEDRUECKT | 0/1 | - | int | - | - | - | - | - | Zuziehhilfe: Taster Fahrerseite: 0= nicht gedrückt, 1= gedrückt |
| STAT_ZZH_TASTER_BFH_GEDRUECKT | 0/1 | - | int | - | - | - | - | - | Zuziehhilfe: Taster Beifahrerseite: 0= nicht gedrückt, 1= gedrückt |
| STAT_ZZH_FAH_SCHLIESST | 0/1 | - | int | - | - | - | - | - | Zuziehhilfe: Tür Fahrerseite schließt: 0= schließt nicht, 1= schließt |
| STAT_ZZH_BFH_SCHLIESST | 0/1 | - | int | - | - | - | - | - | Zuziehhilfe: Tür Beifahrerseite schließt: 0= schließt nicht, 1= schließt |
| STAT_ZZH_MOTOR_FAH_NR | 0-n | - | int | - | TAB_ZZH_MOTOR_STATUS | - | - | - | Zuziehhilfe: Motor Fahrerseite |
| STAT_ZZH_MOTOR_BFH_NR | 0-n | - | int | - | TAB_ZZH_MOTOR_STATUS | - | - | - | Zuziehhilfe: Motor Beifahrerseite |
| STAT_ABSCHALTSCHWELLE_WERT | °/s | - | int | - | - | 1.0 | 100.0 | 0.0 | Abschaltschwelle |
| STAT_KW_TEMP_WERT | °C | - | int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Temperatur |
| STAT_KW_SPANNUNG_WERT | V | - | int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Spannung |
| STAT_KW_L_NEIGUNG_WERT | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Längsneigung |
| STAT_KW_Q_NEIGUNG_WERT | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Querneigung |

### RES_0XDCF0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VARIANTE_VORHANG_NR | 0-n | - | unsigned char | - | TAB_VORHANG_KODIERT | 1.0 | 1.0 | 0.0 | Variante Vorhang: 0= keine Vorhänge kodiert, 1= Heck- und Seitenvorhänge kodiert, 2= Seitenvorhänge kodiert, 3= Heckvorhänge kodiert |
| STAT_CODIERUNG_LENKSEITE_NR | 0-n | - | char | - | TAB_LENKSEITE | 1.0 | 1.0 | 0.0 | Codierung Lenkseite: 0: ungueltige Lenkseite, 1: Linkslenker, 2: Rechtslenker |

### RES_0XDCF5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLERFIGUR_INIT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Initialisierung: Kühlerfigur 0 = nicht eingelernt,  1 = eingelernt |
| STAT_VORHANG_FAH_INIT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Initialisierung: Vorhang Fahrerseite hinten 0 = nicht eingelernt,  1 = eingelernt |
| STAT_VORHANG_BFH_INIT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Initialisierung: Vorhang Beifahrerseite hinten 0 = nicht eingelernt,  1 = eingelernt |
| STAT_VORHANG_HECK_INIT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Initialisierung: Vorhang Heck 0 = nicht eingelernt,  1 = eingelernt |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SUCHBELEUCHTUNG | 0xD5AA | - | Suchbeleuchtung: Steuern | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5AA | - |
| ZV_BEIFAHRER_HINTEN | 0xDA82 | - | Zentralverriegelung: Status Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA82 |
| ZV_FAHRER_HINTEN | 0xDA84 | - | Zentralverriegelung: Status Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA84 |
| ZV_HALLSENSOREN | 0xDA8B | - | Hallsensoren Verriegelung ZV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA8B |
| KISI_FH | 0xDA99 | STAT_KISI_FH_AKTIV | 0: Kindersicherung: Fensterheber und Sonnenrollo hinten sind nicht gesperrt (Kisi inaktiv). 1: Kindersicherung: Fensterheber und Sonnenrollo hinten sind gesperrt (Kisi aktiv). Hinweis: Bei Verwendung des Coach Door Moduls (CDM) sind keine Sonnenrollos verbaut. | 0-n | - | - | int | TAB_KISI_FH | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_VORHANG | 0xDCE0 | - | Vorhang: Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCE0 |
| STATUS_TUER | 0xDCE1 | - | Türsignale: Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCE1 |
| STATUS_CID | 0xDCE2 | - | CID Monitor: Position, Motor und CAN Signale | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCE2 |
| STATUS_KUEHLERFIGUR | 0xDCE3 | - | Kühlerfigursteuerung: Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCE3 |
| STATUS_KUEHLERFIGUR_BUSSIGNAL | 0xDCE5 | STAT_KUEHLERFIGUR_BUSSIGNAL_NR | Kühlerfigur: CAN-Bussignale, Verfahranforderung per ZBE | 0-n | - | - | char | TAB_KF_BUSSIGNAL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_30B_SPANNUNGEN | 0xDCE6 | - | Klemme 30B 1-3 in Volt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCE6 |
| STATUS_HOTELSTELLUNG | 0xDCE9 | STAT_ZV_HOTELSTELLUNG_AKTIV | Zentralverriegelung/ZV: Hotelstellung Peripherie: 0= Hotelstellung inaktiv, 1= Hotelstellung aktiv | 0-n | - | - | int | TAB_ZV_HOTELSTELLUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ZUZIEHHILFE | 0xDCEA | - | Zuziehhilfe: Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCEA |
| STATUS_SUCHBELEUCHTUNG | 0xDCEB | STAT_SUCHBELEUCHTUNG | Suchbeleuchtung Ansteuerung durch FRM: 0= kein Signal vom FRM empfange, 1= Signal vom FRM empfange ---Diagnose-Bedingung: Duty Cycle vom FRM auf 100% stellen!--- | 0-n | - | - | unsigned char | TAB_STAT_SUCHBELEUCHTUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_VORHANG_TUER_FAH | 0xDCED | - | Vorhang: Tür Fahrer hinten: Steuern: öffnen/schließen Öffnen/Schließen abhängig vom vorhergehenden Zustand | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCED | - |
| STEUERN_VORHANG_TUER_BFH | 0xDCEF | - | Vorhang: Tür Beifahrer hinten: Steuern: öffnen/schließen Öffnen/Schließen abhängig vom vorhergehenden Zustand | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCEF | - |
| STATUS_VARIANTE | 0xDCF0 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF0 |
| STATUS_INITIALISIERUNG_CDM | 0xDCF5 | - | Status Intitialisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF5 |
| STEUERN_COSI_BEIDE_EIN | 0xDCF7 | - | COSI Coach Door Sicherung: Steuern: verriegeln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCF7 | - |
| STEUERN_COSI_BEIDE_AUS | 0xDCF8 | - | COSI Coach Door Sicherung:  Steuern: entriegeln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCF8 | - |
| STEUERN_TUER_FAH_ZUZIEHEN | 0xDCF9 | - | Zuziehhilfe: Tuer Fahrerseite: Steuern: zuziehen/schließen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCF9 | - |
| STEUERN_TUER_BFH_ZUZIEHEN | 0xDCFA | - | Zuziehhilfe: Tuer Beifahrerseite: Steuern: zuziehen/schließen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCFA | - |
| STEUERN_KUEHLERFIGUR_EINFAHREN | 0xDCFB | - | Kühlerfigur: Steuern: einfahren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCFB | - |
| STEUERN_KUEHLERFIGUR_AUSFAHREN | 0xDCFC | - | Kühlerfigur: Steuern: ausfahren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCFC | - |
| STEUERN_CID_KLAPPE_AUF | 0xDCFD | - | CID Klappe öffnen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCFD | - |
| STEUERN_CID_KLAPPE_ZU | 0xDCFE | - | CID Klappe schließen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCFE | - |
| STEUERN_VORHANG_HECK_BEIDE | 0xDD01 | - | Vorhang: Heck beide: Steuern: Öffnet/Schließt beide Vorhänge im Heck Öffnen/Schließen abhängig vom vorhergehenden Zustand | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD01 | - |
| STEUERN_KUEHLERFIGUR_MONTAGE | 0xDD02 | - | Kühlerfigur: Steuern: Montagestellung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD02 | - |
| STEUERN_VORHANG_ALLE | 0xDD03 | - | Vorhang: alle Vorhänge: Steuern: Öffnet/Schließt alle 4 Vorhänge Öffnen/Schließen abhängig vom vorhergehenden Zustand | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD03 | - |
| STEUERN_INITIALISIERUNG_KF | 0xDD05 | - | Initialisierung: Kühlerfigur | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD05 | - |
| STEUERN_INITIALISIERUNG_VH_FAH | 0xDD06 | - | Initialisierung Vorhang Fahrerseite hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD06 | - |
| STEUERN_INITIALISIERUNG_VH_BFH | 0xDD07 | - | Initialisierung Vorhang Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD07 | - |
| STEUERN_INITIALISIERUNG_VH_HECK | 0xDD08 | - | Initialisierung Vorhang Heck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD08 | - |
| STEUERN_INITIALISIERUNG_CID | 0xDD09 | - | Initialisierung: CID-Klappe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD09 | - |

### TAB_CID_KLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Klappe geschlossen |
| 0x01 | Klappe geöffnet |
| 0x02 | Klappe in Bewegung |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_CID_KLAPPE_AUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor STOPP |
| 0x01 | Klappe öffnen |
| 0x02 | Klappe öffnen ohne Diagnose für 200ms |

### TAB_CID_KLAPPE_ZU

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor STOPP |
| 0x01 | Klappe schließen |
| 0x02 | Klappe schließen ohne Diagnose für 200ms |

### TAB_CID_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Motor öffnet |
| 0x02 | Motor schließt |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_CID_MOTOR_CAN

| WERT | TEXT |
| --- | --- |
| 0x00 | Notöffnen Monitor |
| 0x01 | Monitor einklappen |
| 0x02 | Monitor ausklappen |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_CID_STATUS_TASTE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID-Taste nicht betätigt |
| 0x01 | CID-Taste betätigt |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_COSI

| WERT | TEXT |
| --- | --- |
| 0 | nicht eingelegt |
| 1 | eingelegt |
| 2 | Kurzschluss nach Masse |
| 3 | Kurzschluss nach Plus oder Unterbrechung |
| 255 | nicht definiert |

### TAB_HAUPTRAST_CDM

| WERT | TEXT |
| --- | --- |
| 0 | geöffnet |
| 1 | geschlossen |
| 255 | undefiniert |

### TAB_KF_BUSSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Verfahranforderung vorhanden |
| 0x01 | Kuehlerfigur einfahren |
| 0x02 | Kuehlerfigur ausfahren |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_KF_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Figur keine Bewegung |
| 0x01 | Figur ausfahren |
| 0x02 | Figur einfahren |
| 0x03 | Fehler: Kurzschluß gegen Masse |
| 0x04 | Fehler: Figur nicht in vorgegebener Zeit ausgefahren |
| 0x05 | Fehler: Figur nicht in vorgegebener Zeit eingefahren |
| 0xFF | nicht definiert |

### TAB_KF_POS

| WERT | TEXT |
| --- | --- |
| 0x01 | Kuehlerfigur ausgefahren |
| 0x02 | Kuehlerfigur in Zwischenstellung |
| 0x03 | Kuehlerfigur eingefahren |
| 0x04 | Kuehlerfigur in Montageposition |
| 0xFF | nicht definiert |

### TAB_KISI_FH

| WERT | TEXT |
| --- | --- |
| 0x00 | KiSi inaktiv |
| 0x01 | KiSi aktiv |
| 0xFF | undefinierter Zustand |

### TAB_KUEHLERFIGUR_AUSFAHREN

| WERT | TEXT |
| --- | --- |
| 0x01 | Kühlerfigur ausfahren |

### TAB_KUEHLERFIGUR_EINFAHREN

| WERT | TEXT |
| --- | --- |
| 0x01 | Kühlerfigur einfahren |

### TAB_KUEHLERFIGUR_MONTAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Montagestellung verlassen |
| 0x01 | Montagestellung einnehmen |

### TAB_LENKSEITE

| WERT | TEXT |
| --- | --- |
| 0x00 | ungueltige Lenkseite |
| 0x01 | Linkslenker |
| 0x02 | Rechtslenker |
| 0xFF | nicht definiert |

### TAB_STAT_SUCHBELEUCHTUNG

| WERT | TEXT |
| --- | --- |
| 0 | kein Signal vom FRM empfangen |
| 1 | Signal vom FRM empfangen |
| 255 | undefiniert |

### TAB_SUCHBELEUCHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |

### TAB_TUER_CDM

| WERT | TEXT |
| --- | --- |
| 0 | geöffnet |
| 1 | geschlossen |
| 2 | Kurzschluss nach Masse |
| 3 | Kurzschluss nach Plus oder Unterbrechung |
| 255 | nicht definiert |

### TAB_VORHANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Endposition geöffnet |
| 0x01 | Zwischenstellung |
| 0x02 | Endposition geschlossen |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_VORHANG_ALLE_AUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motoren STOPP |
| 0x01 | Vorhänge öffnen |

### TAB_VORHANG_AUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor STOPP |
| 0x01 | Vorhang öffnen |

### TAB_VORHANG_KODIERT

| WERT | TEXT |
| --- | --- |
| 0 | keine Vorhänge kodiert |
| 1 | Heck-und Seitenvorhänge kodiert |
| 2 | Seitenvorhänge kodiert |
| 3 | Heckvorhänge kodiert |
| 255 | nicht definiert |

### TAB_VORHANG_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bewegung |
| 0x01 | Schließt |
| 0x02 | Öffnet |
| 0x03 | Fehler |
| 0xFF | Nicht definiert |

### TAB_ZV_HALLSENSOREN_CDM

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht eingelegt |
| 0x01 | Eingelegt |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kurzschluss nach Plus oder Unterbrechung |
| 0xFF | Ungültiger Wert |

### TAB_ZV_HOTELSTELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Hotelstellung inaktiv |
| 0x01 | Hotelstellung aktiv |
| 0xFF | undefinierter Zustand |

### TAB_ZZH_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor STOPP |
| 0x01 | Tür schließen |
| 0x02 | Tür schließen ohne Diagnose für 200ms |

### TAB_ZZH_MOTOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Motor bewegt sich |
| 0x02 | Signal ungültig |
| 0xFF | nicht definiert |
