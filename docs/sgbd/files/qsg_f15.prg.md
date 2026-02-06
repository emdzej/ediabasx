# qsg_f15.prg

## General

|  |  |
| --- | --- |
| File | qsg_f15.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 47 |
| Origin | BMW EA Reuter |
| Revision | 1.003 |
| Author | ZF OTEI1 Spieß |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | QuerMomentenVerteilung-Hinterachse-Steuergerät |  |  |
| ORIGIN | string | BMW EA Reuter |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | ZF OTEI1 Spieß |  |  |
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

### _STATUS_DRLS_USER_DATEN

STATUS_DRLS_USER_DATEN Modus  : Default

_No arguments._

### STEUERN_POWER_DOWN

SG in Power Down-Mode versetzen UDS  : $11 ECUReset UDS  : $41 enableErrorPowerShutDown Modus: Default

_No arguments._

### _TEST_JOB

Universeller Diagnose Job für Diagnose Tests Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_DATEN | int | Anzahl Daten der folgenden Diagnose Anfrage |
| DATEN_1 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_2 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_3 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_4 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_5 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_6 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_7 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_8 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_9 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_10 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_11 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_12 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_13 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_14 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_15 | int | Abhängig von Argument ANZAHL_DATEN |
| DATEN_16 | int | Abhängig von Argument ANZAHL_DATEN |

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

### ARG_0X407F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEBUG_SENDEMODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Sendemode 0: nichts senden; Sendemode 1: senden Basis-Modus, Zyklisch 1000ms; Sendemmde 2: senden Extended-Modus, Zyklisch 10ms; |

### ARG_0XAE40

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZAHL_ADAPTIONEN | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der Adaptionen, Range: 0 ... 255  0=Erstadaption, >0=Anzahl der hintereinander durchzuführenden Adaptionen |

### ARG_0XAE42

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLL_QUER_MOMENT_HINTERACHSE_STELLGLIED | + | - | Nm | high | int | - | - | 1.0 | 1.0 | 2500.0 | -2500.0 | 2500.0 | Vorgabe Quermomentenverteilung Hinterachse Stellglied Range: -2500 ... 2500Nm |

### ARG_0XDE6F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KM | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Km Range: 16777215 |
| KUPPLUNGSREIBLEISTUNG_LINKS | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | tbd Range: tbd |
| KUPPLUNGSREIBLEISTUNG_RECHTS | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | tbd Range: tbd |
| KILOMETERSTAND_LETZT_OELWECHSEL | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - | - | tbd Range: tbd |
| OELVERSCHLEISS_GEMITTELT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | tbd Range: tbd |

### BF_QSG_ADAPTION

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_LINKS_NR | 0-n | low | unsigned char | 0x0C | TAB_ADAPTION_LINKS | - | - | - | Adaption links table STAT_ADAPTION_LINKS WERT |
| STAT_ADAPTION_RECHTS_NR | 0-n | low | unsigned char | 0x03 | TAB_ADAPTION_RECHTS | - | - | - | Adpation rechts table STAT_ADAPTION_RECHTS WERT |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020F00 | Transportmodus: aktiv | 0 |
| 0x02FF0F | Dummy-Fehlerspeichereintrag im Komponentenbereich nur für Testzwecke | 0 |
| 0x440401 | QSG: Interner Fehler Stellermodule uC1/2 | 0 |
| 0x440402 | Versorgungsspannung: zu niedrig (kleiner 9,5V) | 1 |
| 0x440403 | Versorgungsspannung: zu hoch (größer 16,5 V) | 1 |
| 0x440404 | Klemme 15: CAN und Flexray nicht plausibel | 1 |
| 0x440405 | Öltemperatursensor links: Kurzschluss nach Masse | 0 |
| 0x440406 | Öltemperatursensor links: Kurzschluss Plus oder Unterbrechung | 0 |
| 0x440408 | Öltemperatursensor rechts: Kurzschluss nach Masse | 0 |
| 0x440409 | Öltemperatursensor rechts:  Kurzschluss Plus oder Unterbrechung | 0 |
| 0x44040B | Versorgung Lagesensor Stellmotor links: Kurzschluss Masse oder Unterspannung | 0 |
| 0x44040C | Versorgung  Lagesensor Stellmotor links: Kurzschluss Plus | 0 |
| 0x44040D | Versorgung  Lagesensor Stellmotor rechts: Kurzschluss Masse oder Unterspannung | 0 |
| 0x44040E | Versorgung Lagesensor Stellmotor rechts: Kurzschluss Plus | 0 |
| 0x440410 | Lagesensor Stellmotor links: Signalverlust | 0 |
| 0x440411 | Lagesensor Stellmotor links: Signalfehler | 0 |
| 0x440414 | Lagesensor Stellmotor rechts: Signalverlust | 0 |
| 0x440415 | Lagesensor Stellmotor rechts: Signalfehler | 0 |
| 0x440417 | Temperatursensor Stellmotor links: Kurzschluss Masse | 0 |
| 0x440418 | Temperatursensor Stellmotor links: Kurzschluss Plus oder Unterbrechung | 0 |
| 0x44041A | Temperatursensor Stellmotor rechts: Kurzschluss Masse | 0 |
| 0x44041B | Temperatursensor Stellmotor rechts: Kurzschluss Plus oder Unterbrechung | 0 |
| 0x44041D | Stellmotor links, Phase U / V / W: Kurzschluss Plus | 0 |
| 0x44041E | Stellmotor links, Phase U / V / W: Kurzschluss Masse | 0 |
| 0x44041F | Stellmotor links, Phase U / V / W: Unterbrechung | 0 |
| 0x440420 | Stellmotor links: elektrischer Fehler | 0 |
| 0x440426 | Stellmotor rechts, Phase U / V / W: Kurzschluss Plus | 0 |
| 0x440427 | Stellmotor rechts, Phase U / V / W: Kurzschluss Masse | 0 |
| 0x440428 | Stellmotor rechts, Phase U / V / W: Unterbrechung | 0 |
| 0x440429 | Stellmotor rechts: elektrischer Fehler | 0 |
| 0x440433 | Getriebeöl: zu alt | 0 |
| 0x440450 | Adaption: ungültig | 0 |
| 0x440452 | Lagesensor Stellmotor links: Daten ungültig | 0 |
| 0x440454 | Lagesensor Stellmotor rechts: Daten ungültig | 0 |
| 0x440456 | Programmierbedingung: nicht erfüllt | 0 |
| 0x440457 | QMVH: Verschleisende erreicht links | 0 |
| 0x440458 | QMVH: Verschleisende erreicht rechts | 0 |
| 0x440459 | QMVH: Mechanischer Fehler links | 0 |
| 0x44045A | QMVH: Mechanischer Fehler rechts | 0 |
| 0x440495 | QSG: Interner Fehler; Gatewaymodul uC3 | 0 |
| 0xCCC41F | Flexray: Bus Off; Physikalischer Bus Fehler | 1 |
| 0xCCC420 | Flexray: Bus Off; Controller Fehler | 1 |
| 0xCCC487 | Flexray: Bus Off; Startup fehlgeschlagen | 1 |
| 0xCCCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCCD404 | Botschaft (Soll Quermomentenverteilung Hinterachse, 67.0.2) fehlt, Sender ICM_QL | 1 |
| 0xCCD405 | Botschaft (Soll Quermomentenverteilung Hinterachse, 67.0.2) nicht aktuell, Sender ICM_QL | 1 |
| 0xCCD406 | Botschaft (Soll Quermomentenverteilung Hinterachse, 67.0.2) Prüfsumme falsch, Sender ICM_QL | 1 |
| 0xCCD409 | Botschaft (Ist Drehzahl Rad, 46.0.1) fehlt, Sender DSC_Modul | 1 |
| 0xCCD40B | Botschaft (Klemmen, 116.0.2) fehlt, Sender BDC | 1 |
| 0xCCD40E | Botschaft (Klemmen, 116.0.2) nicht aktuell, Sender BDC | 1 |
| 0xCCD40F | Botschaft (Klemmen, 116.0.2) Prüfsumme falsch, Sender BDC | 1 |
| 0xCCD412 | Botschaft (Ist Drehzahl Rad, 46.0.1) nicht aktuell, Sender DSC_Modul | 1 |
| 0xCCD413 | Botschaft (Ist Drehzahl Rad, 46.0.1) Prüfsumme falsch, Sender DSC_Modul | 1 |
| 0xCCEC00 | Signal (Ist Drehzahl Rad, 46.0.1) ungültig AVL_RPM_WHL_RRH, AVL_RPM_WHL_RLH,QU_AVL_RPM_WHL_RRH,QU_AVL_RPM_WHL_RLH,Sender DSC_Modul | 1 |
| 0xCCEC01 | Signal (Soll Quermomentenverteilung Hinterachse, 67.0.2)ungültig TAR_LTRQD_BAX, QU_TAR_LTRQD_BAX, Sender ICM_QL | 1 |
| 0xCCEC02 | Signal (Klemmen, 46.0.1) ungültig ST_VEH_CON, Sender BDC | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4100 | Batteriespannung | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4101 | Betriebsart Koordinator | HEX | High | unsigned char | - | - | - | - |
| 0x4102 | Aktuelle Position links | ° | High | unsigned int | - | 1.0 | 2.0 | -5000.0 |
| 0x4103 | Aktuelle Position rechts | ° | High | unsigned int | - | 1.0 | 2.0 | -5000.0 |
| 0x4104 | Aktuelles Motordrehmoment links | Nm | High | unsigned char | - | 2.0 | 1000.0 | -250.0 |
| 0x4105 | Aktuelles Motordrehmoment rechts | Nm | High | unsigned char | - | 2.0 | 1000.0 | -250.0 |
| 0x4106 | Betriebsart Aktuatoren | 0-n | Low | 0xFF | UW_TAB_4106 | - | - | - |
| 0x4107 | Temperatur Stellmotor links / rechts | 0-n | High | 0xFF | UW_TAB_4107 | - | - | - |
| 0x4108 | Getriebeöltemperatur  links, rechts | 0-n | High | 0xFF | UW_TAB_4108 | - | - | - |
| 0x4109 | Temperatur Lamellen links, rechts | 0-n | High | 0xFF | UW_TAB_4109 | - | - | - |
| 0x4110 | Angeforderte Drehmomentführung | Nm | High | unsigned char | - | 20.0 | 1.0 | -2500.0 |
| 0x4111 | Aktuelle Drehmomentführung | Nm | High | unsigned char | - | 20.0 | 1.0 | -2500.0 |
| 0x4112 | Raddrehzahl hinten links | km/h | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x4113 | Raddrehzahl hinten rechts | km/h | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x4114 | Motordrehzahl | 1/min | High | unsigned char | - | 50.0 | 1.0 | 0.0 |
| 0x4115 | SF TR Prüfung links | HEX | High | unsigned char | - | - | - | - |
| 0x4116 | SF TR Prüfung rechts | HEX | High | unsigned char | - | - | - | - |
| 0x4117 | Service Qualifier | HEX | High | unsigned char | - | - | - | - |
| 0x4118 | Status ICM | HEX | High | unsigned char | - | - | - | - |
| 0x4119 | Signal Qualifier | HEX | Low | unsigned char | - | - | - | - |
| 0x4120 | Notauscode | HEX | High | unsigned char | - | - | - | - |
| 0x4121 | Versorgungsspannung Sensoren | 0-n | High | 0xFF | UW_TAB_4121 | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x44040F | Steuergerät: Interner Fehler; APPL RAM Fehler links | 0 |
| 0x440413 | Steuergerät: Interner Fehler; APPL RAM Fehler rechts | 0 |
| 0x440423 | Versorgungsspannung Gatewaycontroller zu niedrig | 0 |
| 0x44042D | Steuergerät: Interner Fehler;  Compare Timeout Redundanzprüfung Raddrehzahl links | 0 |
| 0x44042E | Steuergerät: Interner Fehler; Compare Timeout Redundanzprüfung Raddrehzahl rechts | 0 |
| 0x44042F | Steuergerät: Interner Fehler; Fehler Redundanz Raddrehzahl links | 0 |
| 0x440430 | Steuergerät: Interner Fehler; Fehler Redundanz Raddrehzahl rechts | 0 |
| 0x440431 | Steuergerät: Interner Fehler;  Compare Timeout Redundanzprüfung Sollvorgabe links | 0 |
| 0x440432 | Steuergerät: Interner Fehler;  Compare Timeout Redundanzprüfung Sollvorgabe rechts | 0 |
| 0x440434 | Steuergerät: Interner Fehler Stellermodul; Übertragungsfehler interner CAN | 0 |
| 0x440435 | Steuergerät: Interner Fehler; Ausfall interner CAN | 0 |
| 0x440446 | Steuergerät: Interner Fehler; Gradientenbegrenzung Einganggroessen Wirkungskette links | 0 |
| 0x440447 | Steuergerät: Interner Fehler; Gradientenbegrenzung Einganggroessen Wirkungskette rechts | 0 |
| 0x440448 | Steuergerät: Interner Fehler; X-Gate bei Startup nicht bereit links | 0 |
| 0x440449 | Steuergerät: Interner Fehler; X-Gate bei Startup nicht bereit rechts | 0 |
| 0x44044A | Steuergerät: Interner Fehler; Einganggroessen Betriebsartenkoordinator unplausibel links | 0 |
| 0x44044B | Getriebe: mechanischer Fehler; Fehlererkennung Lageplausibilitaet TV Einheit rechts | 0 |
| 0x44044C | Getriebe: mechanischer Fehler; Fehlererkennung Lageplausibilitaet TV Einheit links | 0 |
| 0x44044D | Getriebe: mechanischer Fehler; Senkenlage nicht plausibel rechts | 0 |
| 0x44044E | Getriebe: mechanischer Fehler; Senkenlage nicht plausibel links | 0 |
| 0x44044F | Steuergerät: Interner Fehler; Einganggroessen Betriebsartenkoordinator unplausibel rechts | 0 |
| 0x44045B | Notabschaltung fehlgeschlagen links | 0 |
| 0x44045C | Versorgungsspannung kritisch zu niedrig links | 1 |
| 0x44045D | Versorgungsspannung kritisch zu niedrig rechts | 1 |
| 0x44045E | Öltemperatursensor links: Wert nicht plausibel | 0 |
| 0x44045F | Öltemperatursensor rechts: Wert nicht plausibel | 0 |
| 0x440460 | Temperatursensor Stellmotor links: Wert nicht plausibel | 0 |
| 0x440461 | Temperatursensor Stellmotor rechts: Wert nicht plausibel | 0 |
| 0x440462 | Steuergerät: Interner Fehler; DRLS links; Fehler in redundanter  Signalauswertung | 0 |
| 0x440463 | Steuergerät: Interner Fehler; DRLS rechts; Fehler in redundanter  Signalauswertung | 0 |
| 0x440464 | Steuergerät: Interner Fehler; RAM Fehler links | 0 |
| 0x440465 | Steuergerät: Interner Fehler; RAM Fehler rechts | 0 |
| 0x440466 | Steuergerät: Interner Fehler; ROM Pruefsummenfehler links | 0 |
| 0x440467 | Steuergerät: Interner Fehler; ROM Pruefsummenfehler rechts | 0 |
| 0x440468 | Steuergerät: Interner Fehler; EEPROM Integritaetsfehler links | 0 |
| 0x440469 | Steuergerät: Interner Fehler; EEPROM Integritaetsfehler rechts | 0 |
| 0x44046A | Steuergerät: Interner Fehler; ICC Fehler links | 0 |
| 0x44046B | Steuergerät: Interner Fehler; ICC Fehler rechts | 0 |
| 0x44046C | Stellmotor links: Übertemperatur | 0 |
| 0x44046D | Stellmotor rechts: Übertemperatur | 0 |
| 0x44046E | Momenten-Stelleinheit links: Übertemperatur | 0 |
| 0x44046F | Momenten-Stelleinheit rechts: Übertemperatur | 0 |
| 0x440470 | Kupplung Momenten-Stelleinheit links: Übertemperatur | 0 |
| 0x440471 | Kupplung Momenten-Stelleinheit rechts: Übertemperatur | 0 |
| 0x440472 | Endstufe links im Steuergerät: Übertemperatur | 0 |
| 0x440473 | Endstufe rechts im Steuergerät: Übertemperatur | 0 |
| 0x440474 | Steuergerät: Interner Fehler; Fehler Redundanz Sollvorgabe links | 0 |
| 0x440475 | Steuergerät: Interner Fehler; Fehler Redundanz Solllvorgabe rechts | 0 |
| 0x440476 | Notabschaltung fehlgeschlagen rechts | 0 |
| 0x440477 | Steuergerät: Interner Fehler; XGATE Taskverlust Fehler links | 0 |
| 0x440478 | Steuergerät: Interner Fehler; XGATE Taskverlust Fehler rechts | 0 |
| 0x44047B | Getriebe: Initialisierung nicht erfolgreich rechts | 0 |
| 0x44047C | Getriebe: Flankenspiel unplausibel rechts | 0 |
| 0x44047E | Getriebe: Initialisierung nicht erfolgreich links | 0 |
| 0x44047F | Getriebe: Flankenspiel unplausibel links | 0 |
| 0x440481 | Stellmotor links: Elektrischer Fehler; Strommessungsfehler | 0 |
| 0x440482 | Stellmotor rechts: Elektrischer Fehler; Strommessungsfehler | 0 |
| 0x440483 | Steuergerät: Interner Fehler; interner Zustand oder Reaktion unplausibel links | 0 |
| 0x440484 | Steuergerät: Interner Fehler; interner Zustand oder Reaktion unplausibel rechts | 0 |
| 0x440485 | Steuergerät: Interner Fehler; ADC Modulfehler links | 0 |
| 0x440486 | Steuergerät: Interner Fehler; ADC Modulfehler rechts | 0 |
| 0x440487 | Steuergerät: Interner Fehler; Programmablauf X-Gate fehlerhaft links | 0 |
| 0x440488 | Steuergerät: Interner Fehler; Programmablauf X-Gate fehlerhaft rechts | 0 |
| 0x440489 | Steuergerät: Interner Fehler; Abschaltpfad Aktuator defekt links | 0 |
| 0x44048A | Steuergerät: Interner Fehler; Abschaltpfad Aktuator defekt rechts | 0 |
| 0x44048B | Stellmotor links: Elektrischer Fehler; Motoransteuerung unplausibel | 0 |
| 0x44048C | Stellmotor rechts: Elektrischer Fehler; Motoransteuerung unplausibel | 0 |
| 0x44048D | Stellmotor links: Elektrischer Fehler in Motoransteuerung Erkennung durch UCom | 0 |
| 0x44048E | Steuergerät: Interner Fehler; Reset durch Zugriff auf ungueltige Adresse | 0 |
| 0x44048F | Steuergerät: Interner Fehler; Reset durch Clock monitor Fehler | 0 |
| 0x440490 | Steuergerät: Interner Fehler; Reset durch Watchdog | 0 |
| 0x440491 | Stellmotor rechts: Elektrischer Fehler in Motoransteuerung Erkennung durch UCom | 0 |
| 0x440496 | Steuergerät: Interner Fehler; Timeout caused by hardware error | 0 |
| 0x440497 | Steuergerät: Interner Fehler; Transmit buffers full | 0 |
| 0x440498 | Steuergerät: Interner Fehler; CAN Interface is in STOPPED mode | 0 |
| 0x44049A | DM_Queue_DELETED | 0 |
| 0x44049B | DM_Queue_FULL | 0 |
| 0x44049E | Steuergerät: Interner Fehler; EEP_E_READY_SECTORS | 0 |
| 0x44049F | Steuergerät: Interner Fehler; EEP_E_WORN_OUT | 0 |
| 0x4404A0 | Steuergerät: Interner Fehler; FR_E_ACCESS | 0 |
| 0x4404A2 | Sending of a service message failed | 0 |
| 0x4404A3 | API request integrity failed | 0 |
| 0x4404A4 | API request failed | 0 |
| 0x4404A7 | Steuergerät: Interner Fehler; CANSM_E_MODE_CHANGE_NETWORK_0 | 0 |
| 0x4404A8 | Steuergerät: Interner Fehler; CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x4404AA | CANTP_E_COM | 0 |
| 0x4404AB | CANTP_E_OPER_NOT_SUPPORTED | 0 |
| 0x4404B1 | Steuergerät: Interner Fehler Gatewaymodul; Übertragungsfehler interner CAN | 0 |
| 0x4404B2 | Steuergerät: Interner Fehler Gatewaymodul; ECC 1bit Fehler | 0 |
| 0x4404B3 | Steuergerät: Interner Fehler Gatewaymodul; Illegal Address Reset uC3 | 0 |
| 0x4404B4 | Steuergerät: Interner Fehler Gatewaymodul; Clock Monitor Reset uC3 | 0 |
| 0x4404B5 | Steuergerät: Interner Fehler Gatewaymodul; COP Reset uC3 | 0 |
| 0xCCC488 | Job List Execution lost synchronicity to the FlexRay Global Time | 1 |
| 0xCCC489 | ERROR_PROTOCOL_STARTUP_TIME | 1 |
| 0xCCC48A | ERROR_ECU_ASYNCHRON_MODE | 1 |
| 0xCCD467 | Botschaft (Relativzeit, 276.2.8) fehlt, Sender Kombi | 1 |
| 0xCCD474 | Botschaft (Fahrzeugzustand, 275.1.8) fehlt, Sender ZGW | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4100 | Batteriespannung | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4101 | Betriebsart Koordinator | HEX | High | unsigned char | - | - | - | - |
| 0x4102 | Aktuelle Position links | ° | High | unsigned int | - | 1.0 | 2.0 | -5000.0 |
| 0x4103 | Aktuelle Position rechts | ° | High | unsigned int | - | 1.0 | 2.0 | -5000.0 |
| 0x4104 | Aktuelles Motordrehmoment links | Nm | High | unsigned char | - | 2.0 | 1000.0 | -250.0 |
| 0x4105 | Aktuelles Motordrehmoment rechts | Nm | High | unsigned char | - | 2.0 | 1000.0 | -250.0 |
| 0x4106 | Betriebsart Aktuatoren | 0-n | Low | 0xFF | UW_TAB_4106 | - | - | - |
| 0x4107 | Temperatur Stellmotor links / rechts | 0-n | High | 0xFF | UW_TAB_4107 | - | - | - |
| 0x4108 | Getriebeöltemperatur  links, rechts | 0-n | High | 0xFF | UW_TAB_4108 | - | - | - |
| 0x4109 | Temperatur Lamellen links, rechts | 0-n | High | 0xFF | UW_TAB_4109 | - | - | - |
| 0x4110 | Angeforderte Drehmomentführung | Nm | High | unsigned char | - | 20.0 | 1.0 | -2500.0 |
| 0x4111 | Aktuelle Drehmomentführung | Nm | High | unsigned char | - | 20.0 | 1.0 | -2500.0 |
| 0x4112 | Raddrehzahl hinten links | km/h | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x4113 | Raddrehzahl hinten rechts | km/h | High | unsigned char | - | 2.0 | 1.0 | -200.0 |
| 0x4114 | Motordrehzahl | 1/min | High | unsigned char | - | 50.0 | 1.0 | 0.0 |
| 0x4115 | SF TR Prüfung links | HEX | High | unsigned char | - | - | - | - |
| 0x4116 | SF TR Prüfung rechts | HEX | High | unsigned char | - | - | - | - |
| 0x4117 | Service Qualifier | HEX | High | unsigned char | - | - | - | - |
| 0x4118 | Status ICM | HEX | High | unsigned char | - | - | - | - |
| 0x4119 | Signal Qualifier | HEX | Low | unsigned char | - | - | - | - |
| 0x4120 | Notauscode | HEX | High | unsigned char | - | - | - | - |
| 0x4121 | Versorgungsspannung Sensoren | 0-n | High | 0xFF | UW_TAB_4121 | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4071

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DS_ARBEIT_GESAMT_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_GESAMT Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ARBEIT_OELTEMP_KL_1_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_1 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ARBEIT_OELTEMP_KL_2_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_2 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ARBEIT_OELTEMP_KL_3_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_3 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ARBEIT_OELTEMP_KL_4_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_4 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ZEIT_KUPPL_KL_1_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ENDSTUFENSTOPS_ENDST_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_ENDST Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ENDSTUFENSTOPS_MOTOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_MOTOR Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ENDSTUFENSTOPS_OEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_OEL Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ENDSTUFENSTOPS_LAM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_LAM Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_KILOMETERSTAND_AKTUELL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_KILOMETERSTAND_AKTUELL Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_KILOMETERSTAND_EINBAU_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_KILOMETERSTAND_EINBAU Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_ZEIT_SPANNUNG_KL1_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | DS_ZEIT_SPANNUNG_KL1_MOTOR_EIN Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_SPANNUNG_KL2_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | DS_ZEIT_SPANNUNG_KL2_MOTOR_EIN Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_SPANNUNG_KL3_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | DS_ZEIT_SPANNUNG_KL3_MOTOR_EIN Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_SPANNUNG_KL4_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | DS_ZEIT_SPANNUNG_KL4_MOTOR_EIN Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ASM_INTEGRAL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ASM_INTEGTRAL Bereich von 0 [Nms] bis 4294967295 [Nms] |
| STAT_DS_MAX_ZEIT_LAGE_ZU_HOCH_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_MAX_ZEIT_LAGE_ZU_HOCH Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_MAX_ZEIT_LAGE_ZU_NIEDRIG_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_MAX_ZEIT_LAGE_ZU_NIEDRIG Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_ABLAGESCHEMA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_ABLAGESCHEMA Bereich von 0 [0/1] bis 255 [0/1] |
| STAT_DS_DIFFM_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFM Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_DIFFPSI_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFPSI Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_DIFFANGLE_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFANGLE Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_DIFFLENGTH_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFLENGTH Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_PIT01_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_PIT01 Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_PIT23_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_PIT23 Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_LAGEINIT_PLAUSI_MAX_ZEIT_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_LAGEINIT_PLAUSI_MAX_ZEIT Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_ZEIT_OELTEMP_KL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_OELVERSCHLEISS_AKTUELL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_OELVERSCHLEISS_AKTUELL  Bereich von 0 [0/1] bis 4294967295 [0/1] |
| STAT_DS_OELVERSCHLEISS_LETZT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_OELVERSCHLEISS_LETZT Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_KM_LETZT_OELWECHSEL_WERT | km | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | DS_KM_LETZT_OELWECHSEL Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_ADAPTIONEN_ABGESCHLOSSEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ADAPTIONEN_ABGESCHLOSSEN Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ADAPTIONEN_ABGEBROCHEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ADAPTIONEN_ABGEBROCHEN Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ERSTADAPTIONSWERT_WERT | ° | high | int | - | - | 1.0 | 5.0 | 0.0 | DS_ERSTADAPTIONSWERT Bereich von -32768 [°] bis 32767 [°] |
| STAT_DS_ADAPTIONSWERT_AKTUELL_WERT | ° | high | int | - | - | 1.0 | 5.0 | 0.0 | DS_ADAPTIONSWERT_AKTUELL Bereich von -32768 [0/1] bis 32767 [0/1] |
| STAT_DS_STEIGUNG_ANFANG_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | DS_STEIGUNG_ANFANG Bereich von -32768 [0/1] bis 32767 [0/1] |
| STAT_DS_STEIGUNG_AKTUELL_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | DS_STEIGUNG_AKTUELL Bereich von -32768 [0/1] bis 32767 [0/1] |
| STAT_DS_ZWEIFUSSFAHRER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZWEIFUSSFAHRER Bereich von 0 [0/1] bis 4294967295 [0/1] |
| STAT_DS_DREHZAHLSCHUTZ_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_DREHZAHLSCHUTZ Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_SPORTLICHER_BETRIEB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_SPORTLICHER_BETRIEB Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_KM_DATEN_ZURUECKGESETZT_WERT | km | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | DS_KM_DATEN_ZURUECKGESETZT Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_GESCHW_FAHRZEUG_MAX_WERT | km/h | high | int | - | - | 1.0 | 1.0 | 0.0 | DS_GESCHW_FAHRZEUG_MAX Bereich von -32768 [km/h] bis 32767 [km/h] |
| STAT_DS_RESERVE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_RESERVE Bereich von 0 [0/1] bis 4294967295 [0/1] |
| STAT_DS_CRC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_CRC Bereich von 0 [0/1] bis 65535 [0/1] |

### RES_0X4072

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DS_ARBEIT_GESAMT_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_GESAMT Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_EINDR_MOMENT_KL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_EINDR_MOMENT_KL_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_AUSDR_MOMENT_KL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_AUSDR_MOMENT_KL_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ARBEIT_OELTEMP_KL_1_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_1 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ARBEIT_OELTEMP_KL_2_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_2 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ARBEIT_OELTEMP_KL_3_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_3 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ARBEIT_OELTEMP_KL_4_WERT | kJ | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ARBEIT_OELTEMP_KL_4 Bereich von 0 [kJ] bis 4294967295 [kJ] |
| STAT_DS_ZEIT_KUPPL_KL_1_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_1_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_1_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_2_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_2_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_3_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_3_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_KUPPL_KL_4_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_KUPPL_KL_4_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ENDSTUFENSTOPS_ENDST_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_ENDST Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ENDSTUFENSTOPS_MOTOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_MOTOR Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ENDSTUFENSTOPS_OEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_OEL Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ENDSTUFENSTOPS_LAM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ENDSTUFENSTOPS_LAM Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_KILOMETERSTAND_AKTUELL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_KILOMETERSTAND_AKTUELL Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_KILOMETERSTAND_EINBAU_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_KILOMETERSTAND_EINBAU Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_ZEIT_SPANNUNG_KL1_WERT | s | high | unsigned long | - | - | 1.0 | 50.0 | 0.0 | DS_ZEIT_SPANNUNG_KL1_KL15_EIN Bereich von 0 [s] bis 85899345,9 [s] |
| STAT_DS_ZEIT_SPANNUNG_KL2_WERT | s | high | unsigned long | - | - | 1.0 | 50.0 | 0.0 | DS_ZEIT_SPANNUNG_KL2_KL15_EIN Bereich von 0 [s] bis 85899345,9 [s] |
| STAT_DS_ZEIT_SPANNUNG_KL3_WERT | s | high | unsigned long | - | - | 1.0 | 50.0 | 0.0 | DS_ZEIT_SPANNUNG_KL3_KL15_EIN Bereich von 0 [s] bis 85899345,9 [s] |
| STAT_DS_ZEIT_SPANNUNG_KL4_WERT | s | high | unsigned long | - | - | 1.0 | 50.0 | 0.0 | DS_ZEIT_SPANNUNG_KL4_KL15_EIN Bereich von 0 [s] bis 85899345,9 [s] |
| STAT_DS_ASM_INTEGRAL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ASM_INTEGTRAL Bereich von 0 [Nms] bis 4294967295 [Nms] |
| STAT_DS_MAX_ZEIT_LAGE_ZU_HOCH_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_MAX_ZEIT_LAGE_ZU_HOCH Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_MAX_ZEIT_LAGE_ZU_NIEDRIG_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_MAX_ZEIT_LAGE_ZU_NIEDRIG Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_ABLAGESCHEMA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_ABLAGESCHEMA Bereich von 0 [0/1] bis 255 [0/1] |
| STAT_DS_DIFFM_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFM Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_DIFFPSI_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFPSI Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_DIFFANGLE_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFANGLE Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_DIFFLENGTH_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_DIFFLENGTH Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_PIT01_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_PIT01 Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_PIT23_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_PIT23 Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_LAGEINIT_PLAUSI_MAX_ZEIT_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DS_LAGEINIT_PLAUSI_MAX_ZEIT Bereich von 0 [ms] bis 255 [ms] |
| STAT_DS_ZEIT_OELTEMP_KL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_1 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_2 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_3 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_4 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_ZEIT_OELTEMP_KL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZEIT_OELTEMP_KL_5 Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_OELVERSCHLEISS_AKTUELL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_OELVERSCHLEISS_AKTUELL  Bereich von 0 [0/1] bis 4294967295 [0/1] |
| STAT_DS_OELVERSCHLEISS_LETZT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_OELVERSCHLEISS_LETZT Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_KM_LETZT_OELWECHSEL_WERT | km | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | DS_KM_LETZT_OELWECHSEL Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_ADAPTIONEN_ABGESCHLOSSEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ADAPTIONEN_ABGESCHLOSSEN Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ADAPTIONEN_ABGEBROCHEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_ADAPTIONEN_ABGEBROCHEN Bereich von 0 [0/1] bis 65535 [0/1] |
| STAT_DS_ERSTADAPTIONSWERT_WERT | ° | high | int | - | - | 1.0 | 5.0 | 0.0 | DS_ERSTADAPTIONSWERT Bereich von -32768 [°] bis 32767 [°] |
| STAT_DS_ADAPTIONSWERT_AKTUELL_WERT | ° | high | int | - | - | 1.0 | 5.0 | 0.0 | DS_ADAPTIONSWERT_AKTUELL Bereich von -32768 [0/1] bis 32767 [0/1] |
| STAT_DS_STEIGUNG_ANFANG_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | DS_STEIGUNG_ANFANG Bereich von -32768 [0/1] bis 32767 [0/1] |
| STAT_DS_STEIGUNG_AKTUELL_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | DS_STEIGUNG_AKTUELL Bereich von -32768 [0/1] bis 32767 [0/1] |
| STAT_DS_ZWEIFUSSFAHRER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_ZWEIFUSSFAHRER Bereich von 0 [0/1] bis 4294967295 [0/1] |
| STAT_DS_DREHZAHLSCHUTZ_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_DREHZAHLSCHUTZ Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_SPORTLICHER_BETRIEB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_SPORTLICHER_BETRIEB Bereich von 0 [s] bis 4294967295 [s] |
| STAT_DS_KM_DATEN_ZURUECKGESETZT_WERT | km | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | DS_KM_DATEN_ZURUECKGESETZT Bereich von 0 [km] bis 4294967295 [km] |
| STAT_DS_GESCHW_FAHRZEUG_MAX_WERT | km/h | high | int | - | - | 1.0 | 1.0 | 0.0 | DS_GESCHW_FAHRZEUG_MAX Bereich von -32768 [km/h] bis 32767 [km/h] |
| STAT_DS_RESERVE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DS_RESERVE Bereich von 0 [0/1] bis 4294967295 [0/1] |
| STAT_DS_CRC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DS_CRC Bereich von 0 [0/1] bis 65535 [0/1] |

### RES_0XAE40

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_ADAPTIONEN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Adaptionen |

### RES_0XAE42

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_QUER_MOMENT_HINTERACHSE_STELLGLIED_WERT | + | - | - | Nm | high | int | - | - | 1.0 | 1.0 | -2500.0 | Quermomentenverteilung Hinterachse Stellglied Range: -2500 ... 2500Nm |

### RES_0XDE62

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBEDATEN_NR | 0-n | high | unsigned char | - | TAB_FUNKTIONEN_1 | - | - | - | Status Getrieberesponse table STAT_FUNKTIONEN_1 WERT |
| STAT_GETRIEBEZUSTAND_NR | 0-n | high | unsigned char | - | TAB_FUNKTIONEN_1 | - | - | - | GETRIEBEZUSTAND table STAT_FUNKTIONEN_1 WERT |
| STAT_FUNKTIONEN_RESERVE1_NR | 0-n | high | unsigned int | - | - | - | - | - | RESERVE |
| STAT_ADAPTION_NR | 0-n | high | unsigned char | - | TAB_FUNKTIONEN_2 | - | - | - | Status Adaption table STAT_FUNKTIONEN_2 WERT |
| STAT_FUNKTIONSTEST_NR | 0-n | high | unsigned char | - | TAB_FUNKTIONEN_2 | - | - | - | Status Funktionstest table STAT_FUNKTIONEN_2 WERT |

### RES_0XDE63

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Byte aus Software |
| STAT_SERVICEQUALIFIER_NR | 0-n | high | unsigned char | - | TAB_QSG_SERVICEQUALIFIER | - | - | - | Service-Qualifier table STAT_QSG_SERVICEQUALIFIER WERT |
| STAT_VERFUEGBARKEIT_QMVH_WERT | % | high | unsigned char | - | - | 100.0 | 14.0 | 0.0 | Verfuegbarkeit QMVH Bereich von 0 [%] bis 100 [%] |
| STAT_BITFIELD_ADAPTION | Bit | high | BITFIELD | - | BF_QSG_ADAPTION | - | - | - | Bitfield |
| STAT_TEMPERATUR_GETRIEBE_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Getriebe Bereich von -40 [°C] bis 212 [°C] |
| STAT_VEHICLE_SPEED_WERT | km/h | high | int | - | - | 1.0 | 10.0 | 0.0 | Vehicle speed Bereich von -200 [km/h] bis 400 [km/h] |
| STAT_ENGINE_SPEED_WERT | 1/min | high | unsigned char | - | - | 50.0 | 1.0 | 0.0 | Engine Speed Bereich von 0 [Upm] bis 12000 [Upm] |
| STAT_QSG_MESSUNG_UBAT_KL_30_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | QSG Messung Ubat an Kl. 30 Bereich von 0 [V] bis 20 [V] |

### RES_0XDE64

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERFUEGBARKEIT_TV_LINKS_WERT | % | high | unsigned char | - | - | 100.0 | 14.0 | 0.0 | Verfuegbarkeit TV links Bereich von 0 [%] bis 100 [%] |
| STAT_LAGE_INFO_AKTUATOR_LINKS_WERT | - | high | unsigned int | - | - | 1.0 | 2.0 | -5000.0 | Lage Info Aktuator links Bereich von -5000 [°] bis 5000 [°] |
| STAT_IST_MOMENT_MOTOR_LINKS_WERT | Nm | high | unsigned int | - | - | 1.0 | 65535.0 | -0.038 | Ist-Moment Motor links Bereich von -0,250 [Nm] bis 0,250 [Nm] |
| STAT_TEMPERATUR_TV_EINHEIT_LINKS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur TV-Einheit links Bereich von -40 [°C] bis 200 [°C] |
| STAT_TEMPERATUR_MOTOR_LINKS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Motor links Bereich von -40 [°C] bis 200 [°C] |
| STAT_TEMPERATUR_LAMELLE_LINKS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Lamelle links Bereich von -40 [°C] bis 200 [°C] |
| STAT_SENSORVERSORGUNGSSPANNUNG_LINKS_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Sensorversorgungsspannung links Bereich von 0 [V] bis 10 [V] |

### RES_0XDE65

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERFUEGBARKEIT_TV_RECHTS_WERT | % | high | unsigned char | - | - | 100.0 | 14.0 | 0.0 | Verfuegbarkeit TV rechts Bereich von 0 [%] bis 100 [%] |
| STAT_LAGE_INFO_AKTUATOR_RECHTS_WERT | ° | high | unsigned int | - | - | 1.0 | 2.0 | -5000.0 | Lage Info Aktuator rechts Bereich von -5000 [°] bis 5000 [°] |
| STAT_IST_MOMENT_MOTOR_RECHTS_WERT | Nm | high | unsigned int | - | - | 1.0 | 65535.0 | -0.038 | Ist-Moment Motor rechts Bereich von -0,250 [Nm] bis 0,250 [Nm] |
| STAT_TEMPERATUR_TV_EINHEIT_RECHTS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur TV-Einheit rechts Bereich von -40 [°C] bis 200 [°C] |
| STAT_TEMPERATUR_MOTOR_RECHTS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Motor rechts Bereich von -40 [°C] bis 200 [°C] |
| STAT_TEMPERATUR_LAMELLE_RECHTS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Lamelle rechts Bereich von -40 [°C] bis 200 [°C] |
| STAT_SENSORVERSORGUNGSSPANNUNG_RECHTS_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Sensorversorgungsspannung rechts Bereich von 0 [V] bis 10 [V] |

### RES_0XDE66

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_TV_MOMENT_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -2500.0 | Soll TV Moment Bereich von -2500 [Nm] bis 2500 [Nm] |
| STAT_IST_TV_MOMENT_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | -2500.0 | Ist TV Moment Bereich von -2500 [Nm] bis 2500 [Nm] |
| STAT_MOMENTENVORGABE_NR | 0-n | high | unsigned char | - | TAB_FUNKTIONEN_2 | - | - | - | Status der Funktion Steuern_Momentenvorgabe table STAT_FUNKTIONEN_2 |
| STAT_MOMENTENVORGABE_RESERVE1_NR | 0-n | high | unsigned char | - | - | - | - | - | RESERVE |

### RES_0XDE67

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHI_OFFSET_LINKS_WERT | ° | high | int | - | - | 1.0 | 5.0 | 0.0 | Phi Offset links Bereich von -4000 [°] bis 4000 [°] |
| STAT_PHI_OFFSET_RECHTS_WERT | ° | high | int | - | - | 1.0 | 5.0 | 0.0 | Phi Offset rechts Bereich von -4000 [°] bis 4000 [°] |
| STAT_KLASSIFIZIERUNG_RESERVE1_NR | 0-n | high | unsigned int | - | - | - | - | - | RESERVE |

### RES_0XDE6F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETER_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Hex-Antwort von SG |
| STAT_KUPPLUNGSREIBLEISTUNG_LINKS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Hex-Antwort von SG |
| STAT_KUPPLUNGSREIBLEISTUNG_RECHTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Hex-Antwort von SG |
| STAT_KILOMETERSTAND_LETZT_OELWECHSEL_WERT | - | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | Hex-Antwort von SG |
| STAT_OELVERSCHLEISS_GEMITTELT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Hex-Antwort von SG |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_QSG_ADAPTION | 0xAE40 | - | Ansteuerung QSG-Adaption | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE40 | RES_0xAE40 |
| STEUERN_QSG_FUNKTIONSTEST | 0xAE41 | - | Ansteuerung QSG Funktionstest | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_QSG_MOMENTENVORGABE | 0xAE42 | - | Ansteuerung Momentenvorgabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE42 | RES_0xAE42 |
| STEUERN_QSG_GETRIEBEDATEN | 0xAE44 | - | Ansteuerung Getriebedaten | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_QSG_OELVERSCHLEISS_RUECKSETZEN | 0xAE45 | - | Ölverschleiss zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_QSG_MOTORTAUSCH | 0xAE46 | - | Ansteuerung nach Motortausch | - | - | - | - | - | - | - | - | - | 31 | - | - |
| QSG_FUNKTIONEN | 0xDE62 | - | Funktionsstatus QSG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE62 |
| QSG_STATUS | 0xDE63 | - | QSG Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE63 |
| QSG_TV_EINHEIT_LINKS | 0xDE64 | - | TV-Einheit links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE64 |
| QSG_TV_EINHEIT_RECHTS | 0xDE65 | - | TV-Einheit rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE65 |
| QSG_TV_MOMENT | 0xDE66 | - | TV-Moment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE66 |
| QSG_KLASSIFIZIERUNG | 0xDE67 | - | Klassifizierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE67 |
| QSG_GETRIEBEZUSTAND | 0xDE6F | - | QSG Getriebezustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDE6F | RES_0xDE6F |
| _ZF_ID | 0x4070 | STAT_ZF_VERSION_TEXT | Kennung 14 Byte ASCII Kennung_id[2] Code_version[4] Variante[1] Entwicklung (E), Serie (S), Fault_Injection (F) Jahr[2] Monat[2] Tag[2] Reserve[1] | TEXT | - | high | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| QSG_FASTA_DATEN_LINKS | 0x4071 | - | QSG FASTA-Daten links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4071 |
| QSG_FASTA_DATEN_RECHTS | 0x4072 | - | QSG FASTA-Daten rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4072 |
| _QSG_DRLS_EEPROM_LINKS | 0x4073 | STAT_DRLS_EEPROM_LINKS_DATA | DRLS EEPROM LINKS Byte 1 bis Byte 16 | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _QSG_DRLS_EEPROM_RECHTS | 0x4074 | STAT_DRLS_EEPROM_RECHTS_DATA | DRLS EEPROM RECHTS Byte 1 bis Byte 16 | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _DEBUGFRAME | 0x407F | - | Debugframe | - | - | - | - | - | - | - | - | - | 2E | ARG_0x407F | - |

### TAB_ADAPTION_LINKS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Adaptionswerte vorhanden links |
| 0x04 | Adaptionswerte vorhanden, Adaptionswert links |
| 0x08 | Aenderung Adaptionswert zur Erstadaption links |
| 0x0C | Aenderung Adaptionswert zur vorherigen Adaption links |
| 0xFF | Ungültig |

### TAB_ADAPTION_RECHTS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Adaptionswerte vorhanden rechts |
| 0x01 | Adaptionswerte vorhanden, Adaptionswert rechts |
| 0x02 | Aenderung Adaptionswert zur Erstadaption rechts |
| 0x03 | Aenderung Adaptionswert zur vorherigen Adaption rechts |
| 0xFF | Ungültig |

### TAB_FUNKTIONEN_1

| WERT | TEXT |
| --- | --- |
| 0x01 | NOT_AVAILABLE |
| 0x02 | RUNNING |
| 0x03 | AVAILABLE |
| 0x04 | ERROR |
| 0xFF | Signal Invalid |

### TAB_FUNKTIONEN_2

| WERT | TEXT |
| --- | --- |
| 0x01 | IDLE |
| 0x02 | RUNNING |
| 0x03 | ERROR |
| 0xFF | Signal Invalid |

### TAB_QSG_SERVICEQUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x20 | Operation - Service ist verfügbar |
| 0x21 | Operation - Service ist verfügbar: HabAcht Stellung rechts |
| 0x22 | Operation - Service ist verfügbar: HabAcht Stellung links |
| 0x23 | Operation - Service ist verfügbar: HabAcht Stellung links und rechts |
| 0x60 | Fehler - Service nicht verfügbar: interner Fehler |
| 0x61 | Fehler - Service nicht verfügbar: Aktives Rampen auf 0 Nm |
| 0x70 | Service nicht vorhanden |
| 0x80 | Initialisierung |
| 0xE0 | Standby - Service nicht verfügbar: WarteCCP bzw. Shutdown 2 |
| 0xE1 | Standby - Service nicht verfügbar: Kupplungsinitialisierung |
| 0xE2 | Standby - Service nicht verfügbar: Schutzaus: fehlende Raddrehzahlinformationen |
| 0xE3 | Standby - Service nicht verfügbar: Schutzaus: fehlende Sollmoment von ICM |
| 0xE4 | Standby - Service nicht verfügbar: Schutzaus: Übertemperatur |
| 0xE5 | Standby - Service nicht verfügbar: MSA |
| 0xE6 | Standby - Service nicht verfügbar: Schutzaus: Unterspannung |
| 0xE7 | Standby - Service nicht verfügbar: Schutzaus: Überspannung |
| 0xE8 | Standby - Service nicht verfügbar: Schutzaus: sonstiges |
| 0xE9 | Standby - Service nicht verfügbar: Aktives Rampen auf 0Nm |
| 0xEA | Standby - Service nicht verfügbar: Adaption |
| 0xEB | Standby - Service nicht verfügbar: Werkstattfunktionstest |
| 0xFF | Signal ungültig |

### UW_TAB_4106

| WERT | TEXT |
| --- | --- |
| 0x11 | links: Notaus; rechts: Notaus |
| 0x12 | links: Notaus; rechts: Reinitialisierung |
| 0x13 | links: Notaus; rechts: Herunterfahren passiv |
| 0x14 | links: Notaus; rechts: Leerlauf |
| 0x15 | links: Notaus; rechts: Erstinbetriebnahme |
| 0x16 | links: Notaus; rechts: Getriebedaten |
| 0x17 | links: Notaus; rechts: Werkstattfunktionstest |
| 0x18 | links: Notaus; rechts: Adaption |
| 0x19 | links: Notaus; rechts:  Adaption Rampe |
| 0x1A | links: Notaus; rechts: Normal |
| 0x1B | links: Notaus; rechts: Initialisierung |
| 0x1C | links: Notaus; rechts: passiver Nachlauf |
| 0x1D | links: Notaus; rechts: Motor Start Stopp Automatik |
| 0x21 | links: Reinitialisierung; rechts: Notaus |
| 0x22 | links: Reinitialisierung; rechts: Reinitialisierung |
| 0x23 | links: Reinitialisierung; rechts: Herunterfahren passiv |
| 0x24 | links: Reinitialisierung; rechts: Leerlauf |
| 0x25 | links: Reinitialisierung; rechts: Erstinbetriebnahme |
| 0x26 | links: Reinitialisierung; rechts: Getriebedaten |
| 0x27 | links: Reinitialisierung; rechts: Werkstattfunktionstest |
| 0x28 | links: Reinitialisierung; rechts: Adaption |
| 0x29 | links: Reinitialisierung; rechts: Adaption Rampe |
| 0x2A | links: Reinitialisierung; rechts: Normal |
| 0x2B | links: Reinitialisierung; rechts: Initialisierung |
| 0x2C | links: Reinitialisierung; rechts: passiver Nachlauf |
| 0x2D | links: Reinitialisierung; rechts: Motor Start Stopp Automatik |
| 0x31 | links: Herunterfahren passiv; rechts: Notaus |
| 0x32 | links: Herunterfahren passiv; rechts: Reinitialisierung |
| 0x33 | links: Herunterfahren passiv; rechts: Herunterfahren passiv |
| 0x34 | links: Herunterfahren passiv; rechts: Leerlauf |
| 0x35 | links: Herunterfahren passiv; rechts: Erstinbetriebnahme |
| 0x36 | links: Herunterfahren passiv; rechts: Getriebedaten |
| 0x37 | links: Herunterfahren passiv; rechts: Werkstattfunktionstest |
| 0x38 | links: Herunterfahren passiv; rechts: Adaption |
| 0x39 | links: Herunterfahren passiv; rechts: Adaption Rampe |
| 0x3A | links: Herunterfahren passiv; rechts: Normal |
| 0x3B | links: Herunterfahren passiv; rechts: Initialisierung |
| 0x3C | links: Herunterfahren passiv; rechts: passiver Nachlauf |
| 0x3D | links: Herunterfahren passiv; rechts: Motor Start Stopp Automatik |
| 0x41 | links: Leerlauf; rechts: Notaus |
| 0x42 | links: Leerlauf; rechts: Reinitialisierung |
| 0x43 | links: Leerlauf; rechts: Herunterfahren passiv |
| 0x44 | links: Leerlauf; rechts: Leerlauf |
| 0x45 | links: Leerlauf; rechts: Erstinbetriebnahme |
| 0x46 | links: Leerlauf; rechts: Getriebedaten |
| 0x47 | links: Leerlauf; rechts: Werkstattfunktionstest |
| 0x48 | links: Leerlauf; rechts: Adaption |
| 0x49 | links: Leerlauf; rechts: Adaption Rampe |
| 0x4A | links: Leerlauf; rechts: Normal |
| 0x4B | links: Leerlauf; rechts:  Initialisierung |
| 0x4C | links: Leerlauf; rechts: passiver Nachlauf |
| 0x4D | links: Leerlauf; rechts: Motor Start Stopp Automatik |
| 0x51 | links: Erstinbetriebnahme; rechts: Notaus |
| 0x52 | links: Erstinbetriebnahme; rechts: Reinitialisierung |
| 0x53 | links: Erstinbetriebnahme; rechts: Herunterfahren passiv |
| 0x54 | links: Erstinbetriebnahme; rechts: Leerlauf |
| 0x55 | links: Erstinbetriebnahme; rechts: Erstinbetriebnahme |
| 0x56 | links: Erstinbetriebnahme; rechts: Getriebedaten |
| 0x57 | links: Erstinbetriebnahme; rechts: Werkstattfunktionstest |
| 0x58 | links: Erstinbetriebnahme; rechts: Adaption |
| 0x59 | links: Erstinbetriebnahme; rechts: Adaption Rampe |
| 0x5A | links: Erstinbetriebnahme; rechts: Normal |
| 0x5B | links: Erstinbetriebnahme; rechts: Initialisierung |
| 0x5C | links: Erstinbetriebnahme; rechts: passiver Nachlauf |
| 0x5D | links: Erstinbetriebnahme; rechts: Motor Start Stopp Automatik |
| 0x61 | links: Getriebedaten; rechts: Notaus |
| 0x62 | links: Getriebedaten; rechts: Reinitialisierung |
| 0x63 | links: Getriebedaten; rechts: Herunterfahren passiv |
| 0x64 | links: Getriebedaten; rechts: Leerlauf |
| 0x65 | links: Getriebedaten; rechts: Erstinbetriebnahme |
| 0x66 | links: Getriebedaten; rechts: Getriebedaten |
| 0x67 | links: Getriebedaten; rechts: Werkstattfunktionstest |
| 0x68 | links: Getriebedaten; rechts: Adaption |
| 0x69 | links: Getriebedaten; rechts: Adaption Rampe |
| 0x6A | links: Getriebedaten; rechts: Normal |
| 0x6B | links: Getriebedaten; rechts: Initialisierung |
| 0x6C | links: Getriebedaten; rechts: passiver Nachlauf |
| 0x6D | links: Getriebedaten; rechts: Motor Start Stopp Automatik |
| 0x71 | links: Werkstattfunktionstest; rechts: Notaus |
| 0x72 | links: Werkstattfunktionstest; rechts: Reinitialisierung |
| 0x73 | links: Werkstattfunktionstest; rechts: Herunterfahren passiv |
| 0x74 | links: Werkstattfunktionstest; rechts: Leerlauf |
| 0x75 | links: Werkstattfunktionstest; rechts: Erstinbetriebnahme |
| 0x76 | links: Werkstattfunktionstest; rechts: Getriebedaten |
| 0x77 | links: Werkstattfunktionstest; rechts: Werkstattfunktionstest |
| 0x78 | links: Werkstattfunktionstest; rechts: Adaption |
| 0x79 | links: Werkstattfunktionstest; rechts: Adaption Rampe |
| 0x7A | links: Werkstattfunktionstest; rechts: Normal |
| 0x7B | links: Werkstattfunktionstest; rechts: Initialisierung |
| 0x7C | links: Werkstattfunktionstest; rechts: passiver Nachlauf |
| 0x7D | links: Werkstattfunktionstest; rechts: Motor Start Stopp Automatik |
| 0x81 | links: Adaption; rechts: Notaus |
| 0x82 | links: Adaption; rechts: Reinitialisierung |
| 0x83 | links: Adaption; rechts: Herunterfahren passiv |
| 0x84 | links: Adaption; rechts: Leerlauf |
| 0x85 | links: Adaption; rechts: Erstinbetriebnahme |
| 0x86 | links: Adaption; rechts: Getriebedaten |
| 0x87 | links: Adaption; rechts: Werkstattfunktionstest |
| 0x88 | links: Adaption; rechts: Adaption |
| 0x89 | links: Adaption; rechts: Adaption Rampe |
| 0x8A | links: Adaption; rechts: Normal |
| 0x8B | links: Adaption; rechts: Initialisierung |
| 0x8C | links: Adaption; rechts: passiver Nachlauf |
| 0x8D | links: Adaption; rechts: Motor Start Stopp Automatik |
| 0x91 | links: Adaption Rampe; rechts: Notaus |
| 0x92 | links: Adaption Rampe; rechts: Reinitialisierung |
| 0x93 | links: Adaption Rampe; rechts: Herunterfahren passiv |
| 0x94 | links: Adaption Rampe; rechts: Leerlauf |
| 0x95 | links: Adaption Rampe; rechts: Erstinbetriebnahme |
| 0x96 | links: Adaption Rampe; rechts: Getriebedaten |
| 0x97 | links: Adaption Rampe; rechts: Werkstattfunktionstest |
| 0x98 | links: Adaption Rampe; rechts: Adaption |
| 0x99 | links: Adaption Rampe; rechts: Adaption Rampe |
| 0x9A | links: Adaption Rampe; rechts: Normal |
| 0x9B | links: Adaption Rampe; rechts: Initialisierung |
| 0x9C | links: Adaption Rampe; rechts: passiver Nachlauf |
| 0x9D | links: Adaption Rampe; rechts: Motor Start Stopp Automatik |
| 0xA1 | links: Normal; rechts: Notaus |
| 0xA2 | links: Normal; rechts: Reinitialisierung |
| 0xA3 | links: Normal; rechts: Herunterfahren passiv |
| 0xA4 | links: Normal; rechts: Leerlauf |
| 0xA5 | links: Normal; rechts: Erstinbetriebnahme |
| 0xA6 | links: Normal; rechts: Getriebedaten |
| 0xA7 | links: Normal; rechts: Werkstattfunktionstest |
| 0xA8 | links: Normal; rechts: Adaption |
| 0xA9 | links: Normal; rechts: Adaption Rampe |
| 0xAA | links: Normal; rechts: Normal |
| 0xAB | links: Normal; rechts: Initialisierung |
| 0xAC | links: Normal; rechts: passiver Nachlauf |
| 0xAD | links: Normal; rechts: Motor Start Stopp Automatik |
| 0xB1 | links: Initialisierung; rechts: Notaus |
| 0xB2 | links: Initialisierung; rechts: Reinitialisierung |
| 0xB3 | links: Initialisierung; rechts: Herunterfahren passiv |
| 0xB4 | links: Initialisierung; rechts: Leerlauf |
| 0xB5 | links: Initialisierung; rechts: Erstinbetriebnahme |
| 0xB6 | links: Initialisierung; rechts: Getriebedaten |
| 0xB7 | links: Initialisierung; rechts: Werkstattfunktionstest |
| 0xB8 | links: Initialisierung; rechts: Adaption |
| 0xB9 | links: Initialisierung; rechts: Adaption Rampe |
| 0xBA | links: Initialisierung; rechts: Normal |
| 0xBB | links: Initialisierung; rechts: Initialisierung |
| 0xBC | links: Initialisierung; rechts: passiver Nachlauf |
| 0xBD | links: Initialisierung; rechts: Motor Start Stopp Automatik |
| 0xC1 | links: passiver Nachlauf; rechts: Notaus |
| 0xC2 | links: passiver Nachlauf; rechts: Reinitialisierung |
| 0xC3 | links: passiver Nachlauf; rechts: Herunterfahren passiv |
| 0xC4 | links: passiver Nachlauf; rechts: Leerlauf |
| 0xC5 | links: passiver Nachlauf; rechts: Erstinbetriebnahme |
| 0xC6 | links: passiver Nachlauf; rechts: Getriebedaten |
| 0xC7 | links: passiver Nachlauf; rechts: Werkstattfunktionstest |
| 0xC8 | links: passiver Nachlauf; rechts: Adaption |
| 0xC9 | links: passiver Nachlauf; rechts: Adaption Rampe |
| 0xCA | links: passiver Nachlauf; rechts: Normal |
| 0xCB | links: passiver Nachlauf; rechts: Initialisierung |
| 0xCC | links: passiver Nachlauf; rechts: passiver Nachlauf |
| 0xCD | links: passiver Nachlauf; rechts: Motor Start Stopp Automatik |
| 0xD1 | links: Motor Start Stopp Automatik; rechts: Notaus |
| 0xD2 | links: Motor Start Stopp Automatik; rechts: Reinitialisierung |
| 0xD3 | links: Motor Start Stopp Automatik; rechts: Herunterfahren passiv |
| 0xD4 | links: Motor Start Stopp Automatik; rechts: Leerlauf |
| 0xD5 | links: Motor Start Stopp Automatik; rechts: Erstinbetriebnahme |
| 0xD6 | links: Motor Start Stopp Automatik; rechts: Getriebedaten |
| 0xD7 | links: Motor Start Stopp Automatik; rechts: Werkstattfunktionstest |
| 0xD8 | links: Motor Start Stopp Automatik; rechts: Adaption |
| 0xD9 | links: Motor Start Stopp Automatik; rechts: Adaption Rampe |
| 0xDA | links: Motor Start Stopp Automatik; rechts: Normal |
| 0xDB | links: Motor Start Stopp Automatik; rechts: Initialisierung |
| 0xDC | links: Motor Start Stopp Automatik; rechts: passiver Nachlauf |
| 0xDD | links: Motor Start Stopp Automatik; rechts: Motor Start Stopp Automatik |

### UW_TAB_4107

| WERT | TEXT |
| --- | --- |
| 0x00 | links: -40 °C, rechts: -40 °C |
| 0x01 | links: -40 °C, rechts: -20 °C |
| 0x02 | links: -40 °C, rechts: 0 °C |
| 0x03 | links: -40 °C, rechts: 20 °C |
| 0x04 | links: -40 °C, rechts: 40 °C |
| 0x05 | links: -40 °C, rechts: 60 °C |
| 0x06 | links: -40 °C, rechts: 80 °C |
| 0x07 | links: -40 °C, rechts: 100 °C |
| 0x08 | links: -40 °C, rechts: 120 °C |
| 0x09 | links: -40 °C, rechts: 140 °C |
| 0x0A | links: -40 °C, rechts: 160 °C |
| 0x0B | links: -40 °C, rechts: 180 °C |
| 0x0C | links: -40 °C, rechts: 200 °C |
| 0x0D | links: -40 °C, rechts: 220 °C |
| 0x0E | links: -40 °C, rechts: 240 °C |
| 0x0F | undefiniert |
| 0x10 | links: -20 °C, rechts: -40 °C |
| 0x11 | links: -20 °C, rechts: -20 °C |
| 0x12 | links: -20 °C, rechts: 0 °C |
| 0x13 | links: -20 °C, rechts: 20 °C |
| 0x14 | links: -20 °C, rechts: 40 °C |
| 0x15 | links: -20 °C, rechts: 60 °C |
| 0x16 | links: -20 °C, rechts: 80 °C |
| 0x17 | links: -20 °C, rechts: 100 °C |
| 0x18 | links: -20 °C, rechts: 120 °C |
| 0x19 | links: -20 °C, rechts: 140 °C |
| 0x1A | links: -20 °C, rechts: 160 °C |
| 0x1B | links: -20 °C, rechts: 180 °C |
| 0x1C | links: -20 °C, rechts: 200 °C |
| 0x1D | links: -20 °C, rechts: 220 °C |
| 0x1E | links: -20 °C, rechts: 240 °C |
| 0x1F | undefiniert |
| 0x20 | links: 0 °C, rechts: -40 °C |
| 0x21 | links: 0 °C, rechts: -20 °C |
| 0x22 | links: 0 °C, rechts: 0 °C |
| 0x23 | links: 0 °C, rechts: 20 °C |
| 0x24 | links: 0 °C, rechts: 40 °C |
| 0x25 | links: 0 °C, rechts: 60 °C |
| 0x26 | links: 0 °C, rechts: 80 °C |
| 0x27 | links: 0 °C, rechts: 100 °C |
| 0x28 | links: 0 °C, rechts: 120 °C |
| 0x29 | links: 0 °C, rechts: 140 °C |
| 0x2A | links: 0 °C, rechts: 160 °C |
| 0x2B | links: 0 °C, rechts: 180 °C |
| 0x2C | links: 0 °C, rechts: 200 °C |
| 0x2D | links: 0 °C, rechts: 220 °C |
| 0x2E | links: 0 °C, rechts: 240 °C |
| 0x2F | undefiniert |
| 0x30 | links: 20 °C, rechts: -40 °C |
| 0x31 | links: 20 °C, rechts: -20 °C |
| 0x32 | links: 20 °C, rechts: 0 °C |
| 0x33 | links: 20 °C, rechts: 20 °C |
| 0x34 | links: 20 °C, rechts: 40 °C |
| 0x35 | links: 20 °C, rechts: 60 °C |
| 0x36 | links: 20 °C, rechts: 80 °C |
| 0x37 | links: 20 °C, rechts: 100 °C |
| 0x38 | links: 20 °C, rechts: 120 °C |
| 0x39 | links: 20 °C, rechts: 140 °C |
| 0x3A | links: 20 °C, rechts: 160 °C |
| 0x3B | links: 20 °C, rechts: 180 °C |
| 0x3C | links: 20 °C, rechts: 200 °C |
| 0x3D | links: 20 °C, rechts: 220 °C |
| 0x3E | links: 20 °C, rechts: 240 °C |
| 0x3F | undefiniert |
| 0x40 | links: 40 °C, rechts: -40 °C |
| 0x41 | links: 40 °C, rechts: -20 °C |
| 0x42 | links: 40 °C, rechts: 0 °C |
| 0x43 | links: 40 °C, rechts: 20 °C |
| 0x44 | links: 40 °C, rechts: 40 °C |
| 0x45 | links: 40 °C, rechts: 60 °C |
| 0x46 | links: 40 °C, rechts: 80 °C |
| 0x47 | links: 40 °C, rechts: 100 °C |
| 0x48 | links: 40 °C, rechts: 120 °C |
| 0x49 | links: 40 °C, rechts: 140 °C |
| 0x4A | links: 40 °C, rechts: 160 °C |
| 0x4B | links: 40 °C, rechts: 180 °C |
| 0x4C | links: 40 °C, rechts: 200 °C |
| 0x4D | links: 40 °C, rechts: 220 °C |
| 0x4E | links: 40 °C, rechts: 240 °C |
| 0x4F | undefiniert |
| 0x50 | links: 60 °C, rechts: -40 °C |
| 0x51 | links: 60 °C, rechts: -20 °C |
| 0x52 | links: 60 °C, rechts: 0 °C |
| 0x53 | links: 60 °C, rechts: 20 °C |
| 0x54 | links: 60 °C, rechts: 40 °C |
| 0x55 | links: 60 °C, rechts: 60 °C |
| 0x56 | links: 60 °C, rechts: 80 °C |
| 0x57 | links: 60 °C, rechts: 100 °C |
| 0x58 | links: 60 °C, rechts: 120 °C |
| 0x59 | links: 60 °C, rechts: 140 °C |
| 0x5A | links: 60 °C, rechts: 160 °C |
| 0x5B | links: 60 °C, rechts: 180 °C |
| 0x5C | links: 60 °C, rechts: 200 °C |
| 0x5D | links: 60 °C, rechts: 220 °C |
| 0x5E | links: 60 °C, rechts: 240 °C |
| 0x5F | undefiniert |
| 0x60 | links: 80 °C, rechts: -40 °C |
| 0x61 | links: 80 °C, rechts: -20 °C |
| 0x62 | links: 80 °C, rechts: 0 °C |
| 0x63 | links: 80 °C, rechts: 20 °C |
| 0x64 | links: 80 °C, rechts: 40 °C |
| 0x65 | links: 80 °C, rechts: 60 °C |
| 0x66 | links: 80 °C, rechts: 80 °C |
| 0x67 | links: 80 °C, rechts: 100 °C |
| 0x68 | links: 80 °C, rechts: 120 °C |
| 0x69 | links: 80 °C, rechts: 140 °C |
| 0x6A | links: 80 °C, rechts: 160 °C |
| 0x6B | links: 80 °C, rechts: 180 °C |
| 0x6C | links: 80 °C, rechts: 200 °C |
| 0x6D | links: 80 °C, rechts: 220 °C |
| 0x6E | links: 80 °C, rechts: 240 °C |
| 0x6F | undefiniert |
| 0x70 | links: 100 °C, rechts: -40 °C |
| 0x71 | links: 100 °C, rechts: -20 °C |
| 0x72 | links: 100 °C, rechts: 0 °C |
| 0x73 | links: 100 °C, rechts: 20 °C |
| 0x74 | links: 100 °C, rechts: 40 °C |
| 0x75 | links: 100 °C, rechts: 60 °C |
| 0x76 | links: 100 °C, rechts: 80 °C |
| 0x77 | links: 100 °C, rechts: 100 °C |
| 0x78 | links: 100 °C, rechts: 120 °C |
| 0x79 | links: 100 °C, rechts: 140 °C |
| 0x7A | links: 100 °C, rechts: 160 °C |
| 0x7B | links: 100 °C, rechts: 180 °C |
| 0x7C | links: 100 °C, rechts: 200 °C |
| 0x7D | links: 100 °C, rechts: 220 °C |
| 0x7E | links: 100 °C, rechts: 240 °C |
| 0x7F | undefiniert |
| 0x80 | links: 120 °C, rechts: -40 °C |
| 0x81 | links: 120 °C, rechts: -20 °C |
| 0x82 | links: 120 °C, rechts: 0 °C |
| 0x83 | links: 120 °C, rechts: 20 °C |
| 0x84 | links: 120 °C, rechts: 40 °C |
| 0x85 | links: 120 °C, rechts: 60 °C |
| 0x86 | links: 120 °C, rechts: 80 °C |
| 0x87 | links: 120 °C, rechts: 100 °C |
| 0x88 | links: 120 °C, rechts: 120 °C |
| 0x89 | links: 120 °C, rechts: 140 °C |
| 0x8A | links: 120 °C, rechts: 160 °C |
| 0x8B | links: 120 °C, rechts: 180 °C |
| 0x8C | links: 120 °C, rechts: 200 °C |
| 0x8D | links: 120 °C, rechts: 220 °C |
| 0x8E | links: 120 °C, rechts: 240 °C |
| 0x8F | undefiniert |
| 0x90 | links: 140 °C, rechts: -40 °C |
| 0x91 | links: 140 °C, rechts: -20 °C |
| 0x92 | links: 140 °C, rechts: 0 °C |
| 0x93 | links: 140 °C, rechts: 20 °C |
| 0x94 | links: 140 °C, rechts: 40 °C |
| 0x95 | links: 140 °C, rechts: 60 °C |
| 0x96 | links: 140 °C, rechts: 80 °C |
| 0x97 | links: 140 °C, rechts: 100 °C |
| 0x98 | links: 140 °C, rechts: 120 °C |
| 0x99 | links: 140 °C, rechts: 140 °C |
| 0x9A | links: 140 °C, rechts: 160 °C |
| 0x9B | links: 140 °C, rechts: 180 °C |
| 0x9C | links: 140 °C, rechts: 200 °C |
| 0x9D | links: 140 °C, rechts: 220 °C |
| 0x9E | links: 140 °C, rechts: 240 °C |
| 0x9F | undefiniert |
| 0xA0 | links: 160 °C, rechts: -40 °C |
| 0xA1 | links: 160 °C, rechts: -20 °C |
| 0xA2 | links: 160 °C, rechts: 0 °C |
| 0xA3 | links: 160 °C, rechts: 20 °C |
| 0xA4 | links: 160 °C, rechts: 40 °C |
| 0xA5 | links: 160 °C, rechts: 60 °C |
| 0xA6 | links: 160 °C, rechts: 80 °C |
| 0xA7 | links: 160 °C, rechts: 100 °C |
| 0xA8 | links: 160 °C, rechts: 120 °C |
| 0xA9 | links: 160 °C, rechts: 140 °C |
| 0xAA | links: 160 °C, rechts: 160 °C |
| 0xAB | links: 160 °C, rechts: 180 °C |
| 0xAC | links: 160 °C, rechts: 200 °C |
| 0xAD | links: 160 °C, rechts: 220 °C |
| 0xAE | links: 160 °C, rechts: 240 °C |
| 0xAF | undefiniert |
| 0xB0 | links: 180 °C, rechts: -40 °C |
| 0xB1 | links: 180 °C, rechts: -20 °C |
| 0xB2 | links: 180 °C, rechts: 0 °C |
| 0xB3 | links: 180 °C, rechts: 20 °C |
| 0xB4 | links: 180 °C, rechts: 40 °C |
| 0xB5 | links: 180 °C, rechts: 60 °C |
| 0xB6 | links: 180 °C, rechts: 80 °C |
| 0xB7 | links: 180 °C, rechts: 100 °C |
| 0xB8 | links: 180 °C, rechts: 120 °C |
| 0xB9 | links: 180 °C, rechts: 140 °C |
| 0xBA | links: 180 °C, rechts: 160 °C |
| 0xBB | links: 180 °C, rechts: 180 °C |
| 0xBC | links: 180 °C, rechts: 200 °C |
| 0xBD | links: 180 °C, rechts: 220 °C |
| 0xBE | links: 180 °C, rechts: 240 °C |
| 0xBF | undefiniert |
| 0xC0 | links: 200 °C, rechts: -40 °C |
| 0xC1 | links: 200 °C, rechts: -20 °C |
| 0xC2 | links: 200 °C, rechts: 0 °C |
| 0xC3 | links: 200 °C, rechts: 20 °C |
| 0xC4 | links: 200 °C, rechts: 40 °C |
| 0xC5 | links: 200 °C, rechts: 60 °C |
| 0xC6 | links: 200 °C, rechts: 80 °C |
| 0xC7 | links: 200 °C, rechts: 100 °C |
| 0xC8 | links: 200 °C, rechts: 120 °C |
| 0xC9 | links: 200 °C, rechts: 140 °C |
| 0xCA | links: 200 °C, rechts: 160 °C |
| 0xCB | links: 200 °C, rechts: 180 °C |
| 0xCC | links: 200 °C, rechts: 200 °C |
| 0xCD | links: 200 °C, rechts: 220 °C |
| 0xCE | links: 200 °C, rechts: 240 °C |
| 0xCF | undefiniert |
| 0xD0 | links: 220 °C, rechts: -40 °C |
| 0xD1 | links: 220 °C, rechts: -20 °C |
| 0xD2 | links: 220 °C, rechts: 0 °C |
| 0xD3 | links: 220 °C, rechts: 20 °C |
| 0xD4 | links: 220 °C, rechts: 40 °C |
| 0xD5 | links: 220 °C, rechts: 60 °C |
| 0xD6 | links: 220 °C, rechts: 80 °C |
| 0xD7 | links: 220 °C, rechts: 100 °C |
| 0xD8 | links: 220 °C, rechts: 120 °C |
| 0xD9 | links: 220 °C, rechts: 140 °C |
| 0xDA | links: 220 °C, rechts: 160 °C |
| 0xDB | links: 220 °C, rechts: 180 °C |
| 0xDC | links: 220 °C, rechts: 200 °C |
| 0xDD | links: 220 °C, rechts: 220 °C |
| 0xDE | links: 220 °C, rechts: 240 °C |
| 0xDF | undefiniert |
| 0xE0 | links: 240 °C, rechts: -40 °C |
| 0xE1 | links: 240 °C, rechts: -20 °C |
| 0xE2 | links: 240 °C, rechts: 0 °C |
| 0xE3 | links: 240 °C, rechts: 20 °C |
| 0xE4 | links: 240 °C, rechts: 40 °C |
| 0xE5 | links: 240 °C, rechts: 60 °C |
| 0xE6 | links: 240 °C, rechts: 80 °C |
| 0xE7 | links: 240 °C, rechts: 100 °C |
| 0xE8 | links: 240 °C, rechts: 120 °C |
| 0xE9 | links: 240 °C, rechts: 140 °C |
| 0xEA | links: 240 °C, rechts: 160 °C |
| 0xEB | links: 240 °C, rechts: 180 °C |
| 0xEC | links: 240 °C, rechts: 200 °C |
| 0xED | links: 240 °C, rechts: 220 °C |
| 0xEE | links: 240 °C, rechts: 240 °C |
| 0xEF | undefiniert |
| 0xF0 | undefiniert |
| 0xF1 | undefiniert |
| 0xF2 | undefiniert |
| 0xF3 | undefiniert |
| 0xF4 | undefiniert |
| 0xF5 | undefiniert |
| 0xF6 | undefiniert |
| 0xF7 | undefiniert |
| 0xF8 | undefiniert |
| 0xF9 | undefiniert |
| 0xFA | undefiniert |
| 0xFB | undefiniert |
| 0xFC | undefiniert |
| 0xFD | undefiniert |
| 0xFE | undefiniert |
| 0xFF | undefiniert |

### UW_TAB_4108

| WERT | TEXT |
| --- | --- |
| 0x00 | links: -40 °C, rechts: -40 °C |
| 0x01 | links: -40 °C, rechts: -20 °C |
| 0x02 | links: -40 °C, rechts: 0 °C |
| 0x03 | links: -40 °C, rechts: 20 °C |
| 0x04 | links: -40 °C, rechts: 40 °C |
| 0x05 | links: -40 °C, rechts: 60 °C |
| 0x06 | links: -40 °C, rechts: 80 °C |
| 0x07 | links: -40 °C, rechts: 100 °C |
| 0x08 | links: -40 °C, rechts: 120 °C |
| 0x09 | links: -40 °C, rechts: 140 °C |
| 0x0A | links: -40 °C, rechts: 160 °C |
| 0x0B | links: -40 °C, rechts: 180 °C |
| 0x0C | links: -40 °C, rechts: 200 °C |
| 0x0D | links: -40 °C, rechts: 220 °C |
| 0x0E | links: -40 °C, rechts: 240 °C |
| 0x0F | undefiniert |
| 0x10 | links: -20 °C, rechts: -40 °C |
| 0x11 | links: -20 °C, rechts: -20 °C |
| 0x12 | links: -20 °C, rechts: 0 °C |
| 0x13 | links: -20 °C, rechts: 20 °C |
| 0x14 | links: -20 °C, rechts: 40 °C |
| 0x15 | links: -20 °C, rechts: 60 °C |
| 0x16 | links: -20 °C, rechts: 80 °C |
| 0x17 | links: -20 °C, rechts: 100 °C |
| 0x18 | links: -20 °C, rechts: 120 °C |
| 0x19 | links: -20 °C, rechts: 140 °C |
| 0x1A | links: -20 °C, rechts: 160 °C |
| 0x1B | links: -20 °C, rechts: 180 °C |
| 0x1C | links: -20 °C, rechts: 200 °C |
| 0x1D | links: -20 °C, rechts: 220 °C |
| 0x1E | links: -20 °C, rechts: 240 °C |
| 0x1F | undefiniert |
| 0x20 | links: 0 °C, rechts: -40 °C |
| 0x21 | links: 0 °C, rechts: -20 °C |
| 0x22 | links: 0 °C, rechts: 0 °C |
| 0x23 | links: 0 °C, rechts: 20 °C |
| 0x24 | links: 0 °C, rechts: 40 °C |
| 0x25 | links: 0 °C, rechts: 60 °C |
| 0x26 | links: 0 °C, rechts: 80 °C |
| 0x27 | links: 0 °C, rechts: 100 °C |
| 0x28 | links: 0 °C, rechts: 120 °C |
| 0x29 | links: 0 °C, rechts: 140 °C |
| 0x2A | links: 0 °C, rechts: 160 °C |
| 0x2B | links: 0 °C, rechts: 180 °C |
| 0x2C | links: 0 °C, rechts: 200 °C |
| 0x2D | links: 0 °C, rechts: 220 °C |
| 0x2E | links: 0 °C, rechts: 240 °C |
| 0x2F | undefiniert |
| 0x30 | links: 20 °C, rechts: -40 °C |
| 0x31 | links: 20 °C, rechts: -20 °C |
| 0x32 | links: 20 °C, rechts: 0 °C |
| 0x33 | links: 20 °C, rechts: 20 °C |
| 0x34 | links: 20 °C, rechts: 40 °C |
| 0x35 | links: 20 °C, rechts: 60 °C |
| 0x36 | links: 20 °C, rechts: 80 °C |
| 0x37 | links: 20 °C, rechts: 100 °C |
| 0x38 | links: 20 °C, rechts: 120 °C |
| 0x39 | links: 20 °C, rechts: 140 °C |
| 0x3A | links: 20 °C, rechts: 160 °C |
| 0x3B | links: 20 °C, rechts: 180 °C |
| 0x3C | links: 20 °C, rechts: 200 °C |
| 0x3D | links: 20 °C, rechts: 220 °C |
| 0x3E | links: 20 °C, rechts: 240 °C |
| 0x3F | undefiniert |
| 0x40 | links: 40 °C, rechts: -40 °C |
| 0x41 | links: 40 °C, rechts: -20 °C |
| 0x42 | links: 40 °C, rechts: 0 °C |
| 0x43 | links: 40 °C, rechts: 20 °C |
| 0x44 | links: 40 °C, rechts: 40 °C |
| 0x45 | links: 40 °C, rechts: 60 °C |
| 0x46 | links: 40 °C, rechts: 80 °C |
| 0x47 | links: 40 °C, rechts: 100 °C |
| 0x48 | links: 40 °C, rechts: 120 °C |
| 0x49 | links: 40 °C, rechts: 140 °C |
| 0x4A | links: 40 °C, rechts: 160 °C |
| 0x4B | links: 40 °C, rechts: 180 °C |
| 0x4C | links: 40 °C, rechts: 200 °C |
| 0x4D | links: 40 °C, rechts: 220 °C |
| 0x4E | links: 40 °C, rechts: 240 °C |
| 0x4F | undefiniert |
| 0x50 | links: 60 °C, rechts: -40 °C |
| 0x51 | links: 60 °C, rechts: -20 °C |
| 0x52 | links: 60 °C, rechts: 0 °C |
| 0x53 | links: 60 °C, rechts: 20 °C |
| 0x54 | links: 60 °C, rechts: 40 °C |
| 0x55 | links: 60 °C, rechts: 60 °C |
| 0x56 | links: 60 °C, rechts: 80 °C |
| 0x57 | links: 60 °C, rechts: 100 °C |
| 0x58 | links: 60 °C, rechts: 120 °C |
| 0x59 | links: 60 °C, rechts: 140 °C |
| 0x5A | links: 60 °C, rechts: 160 °C |
| 0x5B | links: 60 °C, rechts: 180 °C |
| 0x5C | links: 60 °C, rechts: 200 °C |
| 0x5D | links: 60 °C, rechts: 220 °C |
| 0x5E | links: 60 °C, rechts: 240 °C |
| 0x5F | undefiniert |
| 0x60 | links: 80 °C, rechts: -40 °C |
| 0x61 | links: 80 °C, rechts: -20 °C |
| 0x62 | links: 80 °C, rechts: 0 °C |
| 0x63 | links: 80 °C, rechts: 20 °C |
| 0x64 | links: 80 °C, rechts: 40 °C |
| 0x65 | links: 80 °C, rechts: 60 °C |
| 0x66 | links: 80 °C, rechts: 80 °C |
| 0x67 | links: 80 °C, rechts: 100 °C |
| 0x68 | links: 80 °C, rechts: 120 °C |
| 0x69 | links: 80 °C, rechts: 140 °C |
| 0x6A | links: 80 °C, rechts: 160 °C |
| 0x6B | links: 80 °C, rechts: 180 °C |
| 0x6C | links: 80 °C, rechts: 200 °C |
| 0x6D | links: 80 °C, rechts: 220 °C |
| 0x6E | links: 80 °C, rechts: 240 °C |
| 0x6F | undefiniert |
| 0x70 | links: 100 °C, rechts: -40 °C |
| 0x71 | links: 100 °C, rechts: -20 °C |
| 0x72 | links: 100 °C, rechts: 0 °C |
| 0x73 | links: 100 °C, rechts: 20 °C |
| 0x74 | links: 100 °C, rechts: 40 °C |
| 0x75 | links: 100 °C, rechts: 60 °C |
| 0x76 | links: 100 °C, rechts: 80 °C |
| 0x77 | links: 100 °C, rechts: 100 °C |
| 0x78 | links: 100 °C, rechts: 120 °C |
| 0x79 | links: 100 °C, rechts: 140 °C |
| 0x7A | links: 100 °C, rechts: 160 °C |
| 0x7B | links: 100 °C, rechts: 180 °C |
| 0x7C | links: 100 °C, rechts: 200 °C |
| 0x7D | links: 100 °C, rechts: 220 °C |
| 0x7E | links: 100 °C, rechts: 240 °C |
| 0x7F | undefiniert |
| 0x80 | links: 120 °C, rechts: -40 °C |
| 0x81 | links: 120 °C, rechts: -20 °C |
| 0x82 | links: 120 °C, rechts: 0 °C |
| 0x83 | links: 120 °C, rechts: 20 °C |
| 0x84 | links: 120 °C, rechts: 40 °C |
| 0x85 | links: 120 °C, rechts: 60 °C |
| 0x86 | links: 120 °C, rechts: 80 °C |
| 0x87 | links: 120 °C, rechts: 100 °C |
| 0x88 | links: 120 °C, rechts: 120 °C |
| 0x89 | links: 120 °C, rechts: 140 °C |
| 0x8A | links: 120 °C, rechts: 160 °C |
| 0x8B | links: 120 °C, rechts: 180 °C |
| 0x8C | links: 120 °C, rechts: 200 °C |
| 0x8D | links: 120 °C, rechts: 220 °C |
| 0x8E | links: 120 °C, rechts: 240 °C |
| 0x8F | undefiniert |
| 0x90 | links: 140 °C, rechts: -40 °C |
| 0x91 | links: 140 °C, rechts: -20 °C |
| 0x92 | links: 140 °C, rechts: 0 °C |
| 0x93 | links: 140 °C, rechts: 20 °C |
| 0x94 | links: 140 °C, rechts: 40 °C |
| 0x95 | links: 140 °C, rechts: 60 °C |
| 0x96 | links: 140 °C, rechts: 80 °C |
| 0x97 | links: 140 °C, rechts: 100 °C |
| 0x98 | links: 140 °C, rechts: 120 °C |
| 0x99 | links: 140 °C, rechts: 140 °C |
| 0x9A | links: 140 °C, rechts: 160 °C |
| 0x9B | links: 140 °C, rechts: 180 °C |
| 0x9C | links: 140 °C, rechts: 200 °C |
| 0x9D | links: 140 °C, rechts: 220 °C |
| 0x9E | links: 140 °C, rechts: 240 °C |
| 0x9F | undefiniert |
| 0xA0 | links: 160 °C, rechts: -40 °C |
| 0xA1 | links: 160 °C, rechts: -20 °C |
| 0xA2 | links: 160 °C, rechts: 0 °C |
| 0xA3 | links: 160 °C, rechts: 20 °C |
| 0xA4 | links: 160 °C, rechts: 40 °C |
| 0xA5 | links: 160 °C, rechts: 60 °C |
| 0xA6 | links: 160 °C, rechts: 80 °C |
| 0xA7 | links: 160 °C, rechts: 100 °C |
| 0xA8 | links: 160 °C, rechts: 120 °C |
| 0xA9 | links: 160 °C, rechts: 140 °C |
| 0xAA | links: 160 °C, rechts: 160 °C |
| 0xAB | links: 160 °C, rechts: 180 °C |
| 0xAC | links: 160 °C, rechts: 200 °C |
| 0xAD | links: 160 °C, rechts: 220 °C |
| 0xAE | links: 160 °C, rechts: 240 °C |
| 0xAF | undefiniert |
| 0xB0 | links: 180 °C, rechts: -40 °C |
| 0xB1 | links: 180 °C, rechts: -20 °C |
| 0xB2 | links: 180 °C, rechts: 0 °C |
| 0xB3 | links: 180 °C, rechts: 20 °C |
| 0xB4 | links: 180 °C, rechts: 40 °C |
| 0xB5 | links: 180 °C, rechts: 60 °C |
| 0xB6 | links: 180 °C, rechts: 80 °C |
| 0xB7 | links: 180 °C, rechts: 100 °C |
| 0xB8 | links: 180 °C, rechts: 120 °C |
| 0xB9 | links: 180 °C, rechts: 140 °C |
| 0xBA | links: 180 °C, rechts: 160 °C |
| 0xBB | links: 180 °C, rechts: 180 °C |
| 0xBC | links: 180 °C, rechts: 200 °C |
| 0xBD | links: 180 °C, rechts: 220 °C |
| 0xBE | links: 180 °C, rechts: 240 °C |
| 0xBF | undefiniert |
| 0xC0 | links: 200 °C, rechts: -40 °C |
| 0xC1 | links: 200 °C, rechts: -20 °C |
| 0xC2 | links: 200 °C, rechts: 0 °C |
| 0xC3 | links: 200 °C, rechts: 20 °C |
| 0xC4 | links: 200 °C, rechts: 40 °C |
| 0xC5 | links: 200 °C, rechts: 60 °C |
| 0xC6 | links: 200 °C, rechts: 80 °C |
| 0xC7 | links: 200 °C, rechts: 100 °C |
| 0xC8 | links: 200 °C, rechts: 120 °C |
| 0xC9 | links: 200 °C, rechts: 140 °C |
| 0xCA | links: 200 °C, rechts: 160 °C |
| 0xCB | links: 200 °C, rechts: 180 °C |
| 0xCC | links: 200 °C, rechts: 200 °C |
| 0xCD | links: 200 °C, rechts: 220 °C |
| 0xCE | links: 200 °C, rechts: 240 °C |
| 0xCF | undefiniert |
| 0xD0 | links: 220 °C, rechts: -40 °C |
| 0xD1 | links: 220 °C, rechts: -20 °C |
| 0xD2 | links: 220 °C, rechts: 0 °C |
| 0xD3 | links: 220 °C, rechts: 20 °C |
| 0xD4 | links: 220 °C, rechts: 40 °C |
| 0xD5 | links: 220 °C, rechts: 60 °C |
| 0xD6 | links: 220 °C, rechts: 80 °C |
| 0xD7 | links: 220 °C, rechts: 100 °C |
| 0xD8 | links: 220 °C, rechts: 120 °C |
| 0xD9 | links: 220 °C, rechts: 140 °C |
| 0xDA | links: 220 °C, rechts: 160 °C |
| 0xDB | links: 220 °C, rechts: 180 °C |
| 0xDC | links: 220 °C, rechts: 200 °C |
| 0xDD | links: 220 °C, rechts: 220 °C |
| 0xDE | links: 220 °C, rechts: 240 °C |
| 0xDF | undefiniert |
| 0xE0 | links: 240 °C, rechts: -40 °C |
| 0xE1 | links: 240 °C, rechts: -20 °C |
| 0xE2 | links: 240 °C, rechts: 0 °C |
| 0xE3 | links: 240 °C, rechts: 20 °C |
| 0xE4 | links: 240 °C, rechts: 40 °C |
| 0xE5 | links: 240 °C, rechts: 60 °C |
| 0xE6 | links: 240 °C, rechts: 80 °C |
| 0xE7 | links: 240 °C, rechts: 100 °C |
| 0xE8 | links: 240 °C, rechts: 120 °C |
| 0xE9 | links: 240 °C, rechts: 140 °C |
| 0xEA | links: 240 °C, rechts: 160 °C |
| 0xEB | links: 240 °C, rechts: 180 °C |
| 0xEC | links: 240 °C, rechts: 200 °C |
| 0xED | links: 240 °C, rechts: 220 °C |
| 0xEE | links: 240 °C, rechts: 240 °C |
| 0xEF | undefiniert |
| 0xF0 | undefiniert |
| 0xF1 | undefiniert |
| 0xF2 | undefiniert |
| 0xF3 | undefiniert |
| 0xF4 | undefiniert |
| 0xF5 | undefiniert |
| 0xF6 | undefiniert |
| 0xF7 | undefiniert |
| 0xF8 | undefiniert |
| 0xF9 | undefiniert |
| 0xFA | undefiniert |
| 0xFB | undefiniert |
| 0xFC | undefiniert |
| 0xFD | undefiniert |
| 0xFE | undefiniert |
| 0xFF | undefiniert |

### UW_TAB_4109

| WERT | TEXT |
| --- | --- |
| 0x00 | links: -40 °C, rechts: -40 °C |
| 0x01 | links: -40 °C, rechts: -20 °C |
| 0x02 | links: -40 °C, rechts: 0 °C |
| 0x03 | links: -40 °C, rechts: 20 °C |
| 0x04 | links: -40 °C, rechts: 40 °C |
| 0x05 | links: -40 °C, rechts: 60 °C |
| 0x06 | links: -40 °C, rechts: 80 °C |
| 0x07 | links: -40 °C, rechts: 100 °C |
| 0x08 | links: -40 °C, rechts: 120 °C |
| 0x09 | links: -40 °C, rechts: 140 °C |
| 0x0A | links: -40 °C, rechts: 160 °C |
| 0x0B | links: -40 °C, rechts: 180 °C |
| 0x0C | links: -40 °C, rechts: 200 °C |
| 0x0D | links: -40 °C, rechts: 220 °C |
| 0x0E | links: -40 °C, rechts: 240 °C |
| 0x0F | undefiniert |
| 0x10 | links: -20 °C, rechts: -40 °C |
| 0x11 | links: -20 °C, rechts: -20 °C |
| 0x12 | links: -20 °C, rechts: 0 °C |
| 0x13 | links: -20 °C, rechts: 20 °C |
| 0x14 | links: -20 °C, rechts: 40 °C |
| 0x15 | links: -20 °C, rechts: 60 °C |
| 0x16 | links: -20 °C, rechts: 80 °C |
| 0x17 | links: -20 °C, rechts: 100 °C |
| 0x18 | links: -20 °C, rechts: 120 °C |
| 0x19 | links: -20 °C, rechts: 140 °C |
| 0x1A | links: -20 °C, rechts: 160 °C |
| 0x1B | links: -20 °C, rechts: 180 °C |
| 0x1C | links: -20 °C, rechts: 200 °C |
| 0x1D | links: -20 °C, rechts: 220 °C |
| 0x1E | links: -20 °C, rechts: 240 °C |
| 0x1F | undefiniert |
| 0x20 | links: 0 °C, rechts: -40 °C |
| 0x21 | links: 0 °C, rechts: -20 °C |
| 0x22 | links: 0 °C, rechts: 0 °C |
| 0x23 | links: 0 °C, rechts: 20 °C |
| 0x24 | links: 0 °C, rechts: 40 °C |
| 0x25 | links: 0 °C, rechts: 60 °C |
| 0x26 | links: 0 °C, rechts: 80 °C |
| 0x27 | links: 0 °C, rechts: 100 °C |
| 0x28 | links: 0 °C, rechts: 120 °C |
| 0x29 | links: 0 °C, rechts: 140 °C |
| 0x2A | links: 0 °C, rechts: 160 °C |
| 0x2B | links: 0 °C, rechts: 180 °C |
| 0x2C | links: 0 °C, rechts: 200 °C |
| 0x2D | links: 0 °C, rechts: 220 °C |
| 0x2E | links: 0 °C, rechts: 240 °C |
| 0x2F | undefiniert |
| 0x30 | links: 20 °C, rechts: -40 °C |
| 0x31 | links: 20 °C, rechts: -20 °C |
| 0x32 | links: 20 °C, rechts: 0 °C |
| 0x33 | links: 20 °C, rechts: 20 °C |
| 0x34 | links: 20 °C, rechts: 40 °C |
| 0x35 | links: 20 °C, rechts: 60 °C |
| 0x36 | links: 20 °C, rechts: 80 °C |
| 0x37 | links: 20 °C, rechts: 100 °C |
| 0x38 | links: 20 °C, rechts: 120 °C |
| 0x39 | links: 20 °C, rechts: 140 °C |
| 0x3A | links: 20 °C, rechts: 160 °C |
| 0x3B | links: 20 °C, rechts: 180 °C |
| 0x3C | links: 20 °C, rechts: 200 °C |
| 0x3D | links: 20 °C, rechts: 220 °C |
| 0x3E | links: 20 °C, rechts: 240 °C |
| 0x3F | undefiniert |
| 0x40 | links: 40 °C, rechts: -40 °C |
| 0x41 | links: 40 °C, rechts: -20 °C |
| 0x42 | links: 40 °C, rechts: 0 °C |
| 0x43 | links: 40 °C, rechts: 20 °C |
| 0x44 | links: 40 °C, rechts: 40 °C |
| 0x45 | links: 40 °C, rechts: 60 °C |
| 0x46 | links: 40 °C, rechts: 80 °C |
| 0x47 | links: 40 °C, rechts: 100 °C |
| 0x48 | links: 40 °C, rechts: 120 °C |
| 0x49 | links: 40 °C, rechts: 140 °C |
| 0x4A | links: 40 °C, rechts: 160 °C |
| 0x4B | links: 40 °C, rechts: 180 °C |
| 0x4C | links: 40 °C, rechts: 200 °C |
| 0x4D | links: 40 °C, rechts: 220 °C |
| 0x4E | links: 40 °C, rechts: 240 °C |
| 0x4F | undefiniert |
| 0x50 | links: 60 °C, rechts: -40 °C |
| 0x51 | links: 60 °C, rechts: -20 °C |
| 0x52 | links: 60 °C, rechts: 0 °C |
| 0x53 | links: 60 °C, rechts: 20 °C |
| 0x54 | links: 60 °C, rechts: 40 °C |
| 0x55 | links: 60 °C, rechts: 60 °C |
| 0x56 | links: 60 °C, rechts: 80 °C |
| 0x57 | links: 60 °C, rechts: 100 °C |
| 0x58 | links: 60 °C, rechts: 120 °C |
| 0x59 | links: 60 °C, rechts: 140 °C |
| 0x5A | links: 60 °C, rechts: 160 °C |
| 0x5B | links: 60 °C, rechts: 180 °C |
| 0x5C | links: 60 °C, rechts: 200 °C |
| 0x5D | links: 60 °C, rechts: 220 °C |
| 0x5E | links: 60 °C, rechts: 240 °C |
| 0x5F | undefiniert |
| 0x60 | links: 80 °C, rechts: -40 °C |
| 0x61 | links: 80 °C, rechts: -20 °C |
| 0x62 | links: 80 °C, rechts: 0 °C |
| 0x63 | links: 80 °C, rechts: 20 °C |
| 0x64 | links: 80 °C, rechts: 40 °C |
| 0x65 | links: 80 °C, rechts: 60 °C |
| 0x66 | links: 80 °C, rechts: 80 °C |
| 0x67 | links: 80 °C, rechts: 100 °C |
| 0x68 | links: 80 °C, rechts: 120 °C |
| 0x69 | links: 80 °C, rechts: 140 °C |
| 0x6A | links: 80 °C, rechts: 160 °C |
| 0x6B | links: 80 °C, rechts: 180 °C |
| 0x6C | links: 80 °C, rechts: 200 °C |
| 0x6D | links: 80 °C, rechts: 220 °C |
| 0x6E | links: 80 °C, rechts: 240 °C |
| 0x6F | undefiniert |
| 0x70 | links: 100 °C, rechts: -40 °C |
| 0x71 | links: 100 °C, rechts: -20 °C |
| 0x72 | links: 100 °C, rechts: 0 °C |
| 0x73 | links: 100 °C, rechts: 20 °C |
| 0x74 | links: 100 °C, rechts: 40 °C |
| 0x75 | links: 100 °C, rechts: 60 °C |
| 0x76 | links: 100 °C, rechts: 80 °C |
| 0x77 | links: 100 °C, rechts: 100 °C |
| 0x78 | links: 100 °C, rechts: 120 °C |
| 0x79 | links: 100 °C, rechts: 140 °C |
| 0x7A | links: 100 °C, rechts: 160 °C |
| 0x7B | links: 100 °C, rechts: 180 °C |
| 0x7C | links: 100 °C, rechts: 200 °C |
| 0x7D | links: 100 °C, rechts: 220 °C |
| 0x7E | links: 100 °C, rechts: 240 °C |
| 0x7F | undefiniert |
| 0x80 | links: 120 °C, rechts: -40 °C |
| 0x81 | links: 120 °C, rechts: -20 °C |
| 0x82 | links: 120 °C, rechts: 0 °C |
| 0x83 | links: 120 °C, rechts: 20 °C |
| 0x84 | links: 120 °C, rechts: 40 °C |
| 0x85 | links: 120 °C, rechts: 60 °C |
| 0x86 | links: 120 °C, rechts: 80 °C |
| 0x87 | links: 120 °C, rechts: 100 °C |
| 0x88 | links: 120 °C, rechts: 120 °C |
| 0x89 | links: 120 °C, rechts: 140 °C |
| 0x8A | links: 120 °C, rechts: 160 °C |
| 0x8B | links: 120 °C, rechts: 180 °C |
| 0x8C | links: 120 °C, rechts: 200 °C |
| 0x8D | links: 120 °C, rechts: 220 °C |
| 0x8E | links: 120 °C, rechts: 240 °C |
| 0x8F | undefiniert |
| 0x90 | links: 140 °C, rechts: -40 °C |
| 0x91 | links: 140 °C, rechts: -20 °C |
| 0x92 | links: 140 °C, rechts: 0 °C |
| 0x93 | links: 140 °C, rechts: 20 °C |
| 0x94 | links: 140 °C, rechts: 40 °C |
| 0x95 | links: 140 °C, rechts: 60 °C |
| 0x96 | links: 140 °C, rechts: 80 °C |
| 0x97 | links: 140 °C, rechts: 100 °C |
| 0x98 | links: 140 °C, rechts: 120 °C |
| 0x99 | links: 140 °C, rechts: 140 °C |
| 0x9A | links: 140 °C, rechts: 160 °C |
| 0x9B | links: 140 °C, rechts: 180 °C |
| 0x9C | links: 140 °C, rechts: 200 °C |
| 0x9D | links: 140 °C, rechts: 220 °C |
| 0x9E | links: 140 °C, rechts: 240 °C |
| 0x9F | undefiniert |
| 0xA0 | links: 160 °C, rechts: -40 °C |
| 0xA1 | links: 160 °C, rechts: -20 °C |
| 0xA2 | links: 160 °C, rechts: 0 °C |
| 0xA3 | links: 160 °C, rechts: 20 °C |
| 0xA4 | links: 160 °C, rechts: 40 °C |
| 0xA5 | links: 160 °C, rechts: 60 °C |
| 0xA6 | links: 160 °C, rechts: 80 °C |
| 0xA7 | links: 160 °C, rechts: 100 °C |
| 0xA8 | links: 160 °C, rechts: 120 °C |
| 0xA9 | links: 160 °C, rechts: 140 °C |
| 0xAA | links: 160 °C, rechts: 160 °C |
| 0xAB | links: 160 °C, rechts: 180 °C |
| 0xAC | links: 160 °C, rechts: 200 °C |
| 0xAD | links: 160 °C, rechts: 220 °C |
| 0xAE | links: 160 °C, rechts: 240 °C |
| 0xAF | undefiniert |
| 0xB0 | links: 180 °C, rechts: -40 °C |
| 0xB1 | links: 180 °C, rechts: -20 °C |
| 0xB2 | links: 180 °C, rechts: 0 °C |
| 0xB3 | links: 180 °C, rechts: 20 °C |
| 0xB4 | links: 180 °C, rechts: 40 °C |
| 0xB5 | links: 180 °C, rechts: 60 °C |
| 0xB6 | links: 180 °C, rechts: 80 °C |
| 0xB7 | links: 180 °C, rechts: 100 °C |
| 0xB8 | links: 180 °C, rechts: 120 °C |
| 0xB9 | links: 180 °C, rechts: 140 °C |
| 0xBA | links: 180 °C, rechts: 160 °C |
| 0xBB | links: 180 °C, rechts: 180 °C |
| 0xBC | links: 180 °C, rechts: 200 °C |
| 0xBD | links: 180 °C, rechts: 220 °C |
| 0xBE | links: 180 °C, rechts: 240 °C |
| 0xBF | undefiniert |
| 0xC0 | links: 200 °C, rechts: -40 °C |
| 0xC1 | links: 200 °C, rechts: -20 °C |
| 0xC2 | links: 200 °C, rechts: 0 °C |
| 0xC3 | links: 200 °C, rechts: 20 °C |
| 0xC4 | links: 200 °C, rechts: 40 °C |
| 0xC5 | links: 200 °C, rechts: 60 °C |
| 0xC6 | links: 200 °C, rechts: 80 °C |
| 0xC7 | links: 200 °C, rechts: 100 °C |
| 0xC8 | links: 200 °C, rechts: 120 °C |
| 0xC9 | links: 200 °C, rechts: 140 °C |
| 0xCA | links: 200 °C, rechts: 160 °C |
| 0xCB | links: 200 °C, rechts: 180 °C |
| 0xCC | links: 200 °C, rechts: 200 °C |
| 0xCD | links: 200 °C, rechts: 220 °C |
| 0xCE | links: 200 °C, rechts: 240 °C |
| 0xCF | undefiniert |
| 0xD0 | links: 220 °C, rechts: -40 °C |
| 0xD1 | links: 220 °C, rechts: -20 °C |
| 0xD2 | links: 220 °C, rechts: 0 °C |
| 0xD3 | links: 220 °C, rechts: 20 °C |
| 0xD4 | links: 220 °C, rechts: 40 °C |
| 0xD5 | links: 220 °C, rechts: 60 °C |
| 0xD6 | links: 220 °C, rechts: 80 °C |
| 0xD7 | links: 220 °C, rechts: 100 °C |
| 0xD8 | links: 220 °C, rechts: 120 °C |
| 0xD9 | links: 220 °C, rechts: 140 °C |
| 0xDA | links: 220 °C, rechts: 160 °C |
| 0xDB | links: 220 °C, rechts: 180 °C |
| 0xDC | links: 220 °C, rechts: 200 °C |
| 0xDD | links: 220 °C, rechts: 220 °C |
| 0xDE | links: 220 °C, rechts: 240 °C |
| 0xDF | undefiniert |
| 0xE0 | links: 240 °C, rechts: -40 °C |
| 0xE1 | links: 240 °C, rechts: -20 °C |
| 0xE2 | links: 240 °C, rechts: 0 °C |
| 0xE3 | links: 240 °C, rechts: 20 °C |
| 0xE4 | links: 240 °C, rechts: 40 °C |
| 0xE5 | links: 240 °C, rechts: 60 °C |
| 0xE6 | links: 240 °C, rechts: 80 °C |
| 0xE7 | links: 240 °C, rechts: 100 °C |
| 0xE8 | links: 240 °C, rechts: 120 °C |
| 0xE9 | links: 240 °C, rechts: 140 °C |
| 0xEA | links: 240 °C, rechts: 160 °C |
| 0xEB | links: 240 °C, rechts: 180 °C |
| 0xEC | links: 240 °C, rechts: 200 °C |
| 0xED | links: 240 °C, rechts: 220 °C |
| 0xEE | links: 240 °C, rechts: 240 °C |
| 0xEF | undefiniert |
| 0xF0 | undefiniert |
| 0xF1 | undefiniert |
| 0xF2 | undefiniert |
| 0xF3 | undefiniert |
| 0xF4 | undefiniert |
| 0xF5 | undefiniert |
| 0xF6 | undefiniert |
| 0xF7 | undefiniert |
| 0xF8 | undefiniert |
| 0xF9 | undefiniert |
| 0xFA | undefiniert |
| 0xFB | undefiniert |
| 0xFC | undefiniert |
| 0xFD | undefiniert |
| 0xFE | undefiniert |
| 0xFF | undefiniert |

### UW_TAB_4121

| WERT | TEXT |
| --- | --- |
| 0x00 | links: 0 V, rechts: 0 V |
| 0x01 | links: 0 V, rechts: 1 V |
| 0x02 | links: 0 V, rechts: 2 V |
| 0x03 | links: 0 V, rechts: 3 V |
| 0x04 | links: 0 V, rechts: 4 V |
| 0x05 | links: 0 V, rechts: 5 V |
| 0x06 | links: 0 V, rechts: 6 V |
| 0x07 | links: 0 V, rechts: 7 V |
| 0x08 | links: 0 V, rechts: 8 V |
| 0x09 | links: 0 V, rechts: 9 V |
| 0x0A | links: 0 V, rechts: 10 V |
| 0x0B | links: 0 V, rechts: 11 V |
| 0x0C | links: 0 V, rechts: 12 V |
| 0x0D | links: 0 V, rechts: 13 V |
| 0x0E | links: 0 V, rechts: 14 V |
| 0x0F | links: 0 V, rechts: 15 V |
| 0x10 | links: 1 V, rechts: 0 V |
| 0x11 | links: 1 V, rechts: 1 V |
| 0x12 | links: 1 V, rechts: 2 V |
| 0x13 | links: 1 V, rechts: 3 V |
| 0x14 | links: 1 V, rechts: 4 V |
| 0x15 | links: 1 V, rechts: 5 V |
| 0x16 | links: 1 V, rechts: 6 V |
| 0x17 | links: 1 V, rechts: 7 V |
| 0x18 | links: 1 V, rechts: 8 V |
| 0x19 | links: 1 V, rechts: 9 V |
| 0x1A | links: 1 V, rechts: 10 V |
| 0x1B | links: 1 V, rechts: 11 V |
| 0x1C | links: 1 V, rechts: 12 V |
| 0x1D | links: 1 V, rechts: 13 V |
| 0x1E | links: 1 V, rechts: 14 V |
| 0x1F | links: 1 V, rechts: 15 V |
| 0x20 | links: 2 V, rechts: 0 V |
| 0x21 | links: 2 V, rechts: 1 V |
| 0x22 | links: 2 V, rechts: 2 V |
| 0x23 | links: 2 V, rechts: 3 V |
| 0x24 | links: 2 V, rechts: 4 V |
| 0x25 | links: 2 V, rechts: 5 V |
| 0x26 | links: 2 V, rechts: 6 V |
| 0x27 | links: 2 V, rechts: 7 V |
| 0x28 | links: 2 V, rechts: 8 V |
| 0x29 | links: 2 V, rechts: 9 V |
| 0x2A | links: 2 V, rechts: 10 V |
| 0x2B | links: 2 V, rechts: 11 V |
| 0x2C | links: 2 V, rechts: 12 V |
| 0x2D | links: 2 V, rechts: 13 V |
| 0x2E | links: 2 V, rechts: 14 V |
| 0x2F | links: 2 V, rechts: 15 V |
| 0x30 | links: 3 V, rechts: 0 V |
| 0x31 | links: 3 V, rechts: 1 V |
| 0x32 | links: 3 V, rechts: 2 V |
| 0x33 | links: 3 V, rechts: 3 V |
| 0x34 | links: 3 V, rechts: 4 V |
| 0x35 | links: 3 V, rechts: 5 V |
| 0x36 | links: 3 V, rechts: 6 V |
| 0x37 | links: 3 V, rechts: 7 V |
| 0x38 | links: 3 V, rechts: 8 V |
| 0x39 | links: 3 V, rechts: 9 V |
| 0x3A | links: 3 V, rechts: 10 V |
| 0x3B | links: 3 V, rechts: 11 V |
| 0x3C | links: 3 V, rechts: 12 V |
| 0x3D | links: 3 V, rechts: 13 V |
| 0x3E | links: 3 V, rechts: 14 V |
| 0x3F | links: 3 V, rechts: 15 V |
| 0x40 | links: 4 V, rechts: 0 V |
| 0x41 | links: 4 V, rechts: 1 V |
| 0x42 | links: 4 V, rechts: 2 V |
| 0x43 | links: 4 V, rechts: 3 V |
| 0x44 | links: 4 V, rechts: 4 V |
| 0x45 | links: 4 V, rechts: 5 V |
| 0x46 | links: 4 V, rechts: 6 V |
| 0x47 | links: 4 V, rechts: 7 V |
| 0x48 | links: 4 V, rechts: 8 V |
| 0x49 | links: 4 V, rechts: 9 V |
| 0x4A | links: 4 V, rechts: 10 V |
| 0x4B | links: 4 V, rechts: 11 V |
| 0x4C | links: 4 V, rechts: 12 V |
| 0x4D | links: 4 V, rechts: 13 V |
| 0x4E | links: 4 V, rechts: 14 V |
| 0x4F | links: 4 V, rechts: 15 V |
| 0x50 | links: 5 V, rechts: 0 V |
| 0x51 | links: 5 V, rechts: 1 V |
| 0x52 | links: 5 V, rechts: 2 V |
| 0x53 | links: 5 V, rechts: 3 V |
| 0x54 | links: 5 V, rechts: 4 V |
| 0x55 | links: 5 V, rechts: 5 V |
| 0x56 | links: 5 V, rechts: 6 V |
| 0x57 | links: 5 V, rechts: 7 V |
| 0x58 | links: 5 V, rechts: 8 V |
| 0x59 | links: 5 V, rechts: 9 V |
| 0x5A | links: 5 V, rechts: 10 V |
| 0x5B | links: 5 V, rechts: 11 V |
| 0x5C | links: 5 V, rechts: 12 V |
| 0x5D | links: 5 V, rechts: 13 V |
| 0x5E | links: 5 V, rechts: 14 V |
| 0x5F | links: 5 V, rechts: 15 V |
| 0x60 | links: 6 V, rechts: 0 V |
| 0x61 | links: 6 V, rechts: 1 V |
| 0x62 | links: 6 V, rechts: 2 V |
| 0x63 | links: 6 V, rechts: 3 V |
| 0x64 | links: 6 V, rechts: 4 V |
| 0x65 | links: 6 V, rechts: 5 V |
| 0x66 | links: 6 V, rechts: 6 V |
| 0x67 | links: 6 V, rechts: 7 V |
| 0x68 | links: 6 V, rechts: 8 V |
| 0x69 | links: 6 V, rechts: 9 V |
| 0x6A | links: 6 V, rechts: 10 V |
| 0x6B | links: 6 V, rechts: 11 V |
| 0x6C | links: 6 V, rechts: 12 V |
| 0x6D | links: 6 V, rechts: 13 V |
| 0x6E | links: 6 V, rechts: 14 V |
| 0x6F | links: 6 V, rechts: 15 V |
| 0x70 | links: 7 V, rechts: 0 V |
| 0x71 | links: 7 V, rechts: 1 V |
| 0x72 | links: 7 V, rechts: 2 V |
| 0x73 | links: 7 V, rechts: 3 V |
| 0x74 | links: 7 V, rechts: 4 V |
| 0x75 | links: 7 V, rechts: 5 V |
| 0x76 | links: 7 V, rechts: 6 V |
| 0x77 | links: 7 V, rechts: 7 V |
| 0x78 | links: 7 V, rechts: 8 V |
| 0x79 | links: 7 V, rechts: 9 V |
| 0x7A | links: 7 V, rechts: 10 V |
| 0x7B | links: 7 V, rechts: 11 V |
| 0x7C | links: 7 V, rechts: 12 V |
| 0x7D | links: 7 V, rechts: 13 V |
| 0x7E | links: 7 V, rechts: 14 V |
| 0x7F | links: 7 V, rechts: 15 V |
| 0x80 | links: 8 V, rechts: 0 V |
| 0x81 | links: 8 V, rechts: 1 V |
| 0x82 | links: 8 V, rechts: 2 V |
| 0x83 | links: 8 V, rechts: 3 V |
| 0x84 | links: 8 V, rechts: 4 V |
| 0x85 | links: 8 V, rechts: 5 V |
| 0x86 | links: 8 V, rechts: 6 V |
| 0x87 | links: 8 V, rechts: 7 V |
| 0x88 | links: 8 V, rechts: 8 V |
| 0x89 | links: 8 V, rechts: 9 V |
| 0x8A | links: 8 V, rechts: 10 V |
| 0x8B | links: 8 V, rechts: 11 V |
| 0x8C | links: 8 V, rechts: 12 V |
| 0x8D | links: 8 V, rechts: 13 V |
| 0x8E | links: 8 V, rechts: 14 V |
| 0x8F | links: 8 V, rechts: 15 V |
| 0x90 | links: 9 V, rechts: 0 V |
| 0x91 | links: 9 V, rechts: 1 V |
| 0x92 | links: 9 V, rechts: 2 V |
| 0x93 | links: 9 V, rechts: 3 V |
| 0x94 | links: 9 V, rechts: 4 V |
| 0x95 | links: 9 V, rechts: 5 V |
| 0x96 | links: 9 V, rechts: 6 V |
| 0x97 | links: 9 V, rechts: 7 V |
| 0x98 | links: 9 V, rechts: 8 V |
| 0x99 | links: 9 V, rechts: 9 V |
| 0x9A | links: 9 V, rechts: 10 V |
| 0x9B | links: 9 V, rechts: 11 V |
| 0x9C | links: 9 V, rechts: 12 V |
| 0x9D | links: 9 V, rechts: 13 V |
| 0x9E | links: 9 V, rechts: 14 V |
| 0x9F | links: 9 V, rechts: 15 V |
| 0xA0 | links: 10 V, rechts: 0 V |
| 0xA1 | links: 10 V, rechts: 1 V |
| 0xA2 | links: 10 V, rechts: 2 V |
| 0xA3 | links: 10 V, rechts: 3 V |
| 0xA4 | links: 10 V, rechts: 4 V |
| 0xA5 | links: 10 V, rechts: 5 V |
| 0xA6 | links: 10 V, rechts: 6 V |
| 0xA7 | links: 10 V, rechts: 7 V |
| 0xA8 | links: 10 V, rechts: 8 V |
| 0xA9 | links: 10 V, rechts: 9 V |
| 0xAA | links: 10 V, rechts: 10 V |
| 0xAB | links: 10 V, rechts: 11 V |
| 0xAC | links: 10 V, rechts: 12 V |
| 0xAD | links: 10 V, rechts: 13 V |
| 0xAE | links: 10 V, rechts: 14 V |
| 0xAF | links: 10 V, rechts: 15 V |
| 0xB0 | links: 11 V, rechts: 0 V |
| 0xB1 | links: 11 V, rechts: 1 V |
| 0xB2 | links: 11 V, rechts: 2 V |
| 0xB3 | links: 11 V, rechts: 3 V |
| 0xB4 | links: 11 V, rechts: 4 V |
| 0xB5 | links: 11 V, rechts: 5 V |
| 0xB6 | links: 11 V, rechts: 6 V |
| 0xB7 | links: 11 V, rechts: 7 V |
| 0xB8 | links: 11 V, rechts: 8 V |
| 0xB9 | links: 11 V, rechts: 9 V |
| 0xBA | links: 11 V, rechts: 10 V |
| 0xBB | links: 11 V, rechts: 11 V |
| 0xBC | links: 11 V, rechts: 12 V |
| 0xBD | links: 11 V, rechts: 13 V |
| 0xBE | links: 11 V, rechts: 14 V |
| 0xBF | links: 11 V, rechts: 15 V |
| 0xC0 | links: 12 V, rechts: 0 V |
| 0xC1 | links: 12 V, rechts: 1 V |
| 0xC2 | links: 12 V, rechts: 2 V |
| 0xC3 | links: 12 V, rechts: 3 V |
| 0xC4 | links: 12 V, rechts: 4 V |
| 0xC5 | links: 12 V, rechts: 5 V |
| 0xC6 | links: 12 V, rechts: 6 V |
| 0xC7 | links: 12 V, rechts: 7 V |
| 0xC8 | links: 12 V, rechts: 8 V |
| 0xC9 | links: 12 V, rechts: 9 V |
| 0xCA | links: 12 V, rechts: 10 V |
| 0xCB | links: 12 V, rechts: 11 V |
| 0xCC | links: 12 V, rechts: 12 V |
| 0xCD | links: 12 V, rechts: 13 V |
| 0xCE | links: 12 V, rechts: 14 V |
| 0xCF | links: 12 V, rechts: 15 V |
| 0xD0 | links: 13 V, rechts: 0 V |
| 0xD1 | links: 13 V, rechts: 1 V |
| 0xD2 | links: 13 V, rechts: 2 V |
| 0xD3 | links: 13 V, rechts: 3 V |
| 0xD4 | links: 13 V, rechts: 4 V |
| 0xD5 | links: 13 V, rechts: 5 V |
| 0xD6 | links: 13 V, rechts: 6 V |
| 0xD7 | links: 13 V, rechts: 7 V |
| 0xD8 | links: 13 V, rechts: 8 V |
| 0xD9 | links: 13 V, rechts: 9 V |
| 0xDA | links: 13 V, rechts: 10 V |
| 0xDB | links: 13 V, rechts: 11 V |
| 0xDC | links: 13 V, rechts: 12 V |
| 0xDD | links: 13 V, rechts: 13 V |
| 0xDE | links: 13 V, rechts: 14 V |
| 0xDF | links: 13 V, rechts: 15 V |
| 0xE0 | links: 14 V, rechts: 0 V |
| 0xE1 | links: 14 V, rechts: 1 V |
| 0xE2 | links: 14 V, rechts: 2 V |
| 0xE3 | links: 14 V, rechts: 3 V |
| 0xE4 | links: 14 V, rechts: 4 V |
| 0xE5 | links: 14 V, rechts: 5 V |
| 0xE6 | links: 14 V, rechts: 6 V |
| 0xE7 | links: 14 V, rechts: 7 V |
| 0xE8 | links: 14 V, rechts: 8 V |
| 0xE9 | links: 14 V, rechts: 9 V |
| 0xEA | links: 14 V, rechts: 10 V |
| 0xEB | links: 14 V, rechts: 11 V |
| 0xEC | links: 14 V, rechts: 12 V |
| 0xED | links: 14 V, rechts: 13 V |
| 0xEE | links: 14 V, rechts: 14 V |
| 0xEF | links: 14 V, rechts: 15 V |
| 0xF0 | links: 15 V, rechts: 0 V |
| 0xF1 | links: 15 V, rechts: 1 V |
| 0xF2 | links: 15 V, rechts: 2 V |
| 0xF3 | links: 15 V, rechts: 3 V |
| 0xF4 | links: 15 V, rechts: 4 V |
| 0xF5 | links: 15 V, rechts: 5 V |
| 0xF6 | links: 15 V, rechts: 6 V |
| 0xF7 | links: 15 V, rechts: 7 V |
| 0xF8 | links: 15 V, rechts: 8 V |
| 0xF9 | links: 15 V, rechts: 9 V |
| 0xFA | links: 15 V, rechts: 10 V |
| 0xFB | links: 15 V, rechts: 11 V |
| 0xFC | links: 15 V, rechts: 12 V |
| 0xFD | links: 15 V, rechts: 13 V |
| 0xFE | links: 15 V, rechts: 14 V |
| 0xFF | links: 15 V, rechts: 15 V |
