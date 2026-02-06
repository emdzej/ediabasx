# pcu_f15.prg

## General

|  |  |
| --- | --- |
| File | pcu_f15.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 30 |
| Origin | BMW EI-33 A.Schaeffer |
| Revision | 2.000 |
| Author | Hella EE4 T.Schmitz, Hella EE4 Aditya |
| ECU Comment | PCU500 - Energie Kontroll Einheit Dokumentiert in ZEDIS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Power Control Unit |  |  |
| ORIGIN | string | BMW EI-33 A.Schaeffer |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | Hella EE4 T.Schmitz, Hella EE4 Aditya |  |  |
| COMMENT | string | PCU500 - Energie Kontroll Einheit Dokumentiert in ZEDIS |  |  |
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
| 0x803D1E | PCU hat einen internen Systemfehler | 0 |
| 0x803D0E | PCU: Anschluss Netz N2, Kurzschluss nach Plus | 0 |
| 0x803D49 | PCU: ROM-Fehler (Prüfsumme) | 0 |
| 0x803D0A | PCU: Netz N1, Unterspannung | 1 |
| 0xD49400 | Zeitüberschreitung von ST_ENERG_GEN Frame | 1 |
| 0x803D0F | Zusatzbatterie (ES2): Kapazität nicht ausreichend | 0 |
| 0x803D01 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x803D1F | Interne Spannung nicht stabil | 0 |
| 0x803D05 | PCU: Netz N1, Überspannung | 1 |
| 0x803D4A | PCU: ROM-Fehler (ausgelöst durch EccH) | 0 |
| 0x803D19 | PCU: Übertemperatur | 1 |
| 0x803D00 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x803D4F | Unterspannung Kl. 30F erkannt (Langzeit) | 1 |
| 0x022E00 | Energiesparmode aktiv | 0 |
| 0x803D22 | Zusatzbatterie: Anschluss Netz N2, Kurzschluss nach Masse | 0 |
| 0x02FF2E | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x803D1A | Zusatzbatterie (ES2): Zusatzbatterie tiefentladen | 0 |
| 0xD49403 | Zeitüberschreitung von POWERMGMT_CTR_COS Frame | 1 |
| 0x803D50 | Signal zur Crash-Abschaltung empfangen | 1 |
| 0xD4840A | FA-CAN Control Module Bus OFF | 0 |
| 0x803D12 | Zusatzbatterie (ES2): Zusatzbatterie an PCU nicht angeschlossen | 0 |
| 0x803D1C | Unterspannung erkannt | 1 |
| 0xD49404 | Zeitüberschreitung von KLEMMEN Frame | 1 |
| 0x803D14 | PCU: Netz N2, Überspannung | 0 |
| 0xD49402 | Zeitüberschreitung von FLLUPT_GPWSUP Frame | 1 |
| 0x803D15 | PCU: Anschluss Netz N1, Leitungsunterbrechung | 0 |
| 0x803D1D | Überspannung erkannt | 1 |
| 0x803D4E | Unterspannung N2 erkannt (Langzeit) | 0 |
| 0x803D13 | PCU: Anschluss Netz N2, Kurzschluss nach Masse | 0 |
| 0x803D4B | PCU: Fehler bei RAM-Test | 0 |
| 0xD49401 | Zeitüberschreitung von DT_PT_2 Frame | 1 |
| 0x803D02 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x803D06 | PCU: Weckleitung, Leitungsunterbrechung oder Kurzschluss nach Masse | 0 |
| 0x803D4D | Unterspannung N1 erkannt (Langzeit) | 1 |
| 0x803D0B | PCU: Anschluss Netz N1, Kurzschluss nach Masse | 0 |
| 0x803D4C | PCU: Fehler bei der Prüfung des Stacks | 0 |
| 0xD48BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x803D17 | PCU: Netz N1, Überstrom | 1 |
| 0x803D09 | PCU: Weckleitung, Kurzschluss nach Plus | 0 |
| 0x803D0D | PCU: Weckleitung, Kurzschluss nach Masse | 0 |
| 0x803D10 | Zusatzbatterie (ES2): Zellschluss erkannt | 0 |
| 0x803D20 | Stromfluss in das Gerät auf N1 Seite für Stromrichtung N2 nach N1 | 1 |
| 0x803D03 | Codierung: Signatur für Daten ungültig | 0 |
| 0x803D1B | PCU: Netz N2, Unterspannung | 0 |
| 0x803D04 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x803D11 | PCU: Netz N2, Überstrom | 0 |
| 0xD49406 | Timeout: Keine CAN-Kommunikation trotz Klemme 15 ein | 1 |
| 0x803D21 | Stromfluss in das Gerät auf N2 Seite für Stromrichtung N1 nach N2 | 0 |
| 0x803D16 | PCU: Anschluss Netz N2, Leitungsunterbrechung | 0 |
| 0xD49405 | Zeitüberschreitung von CTR_CR Frame | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | D4845F | D48468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48501 | D4850A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48473 | D4847C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4850B | D48514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48415 | D4841E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48401 | D4840A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48469 | D48472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4841F | D4843E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4843F | D48449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48487 | D4848F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D48600 | D486FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4847D | D48486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D4840B | D48414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | D48C00 | D493FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | D49400 | D4C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D49400 | D4C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D48BFF | D48BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 803D00 | 803D7F | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1602 | SPANNUNG_BMS_UN2 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x803D34 | Lesen durch Flashtreiber ist fehlgeschlagen (Hardwarefehler) | 0 |
| 0x803D26 | DLC der empfangenen Nachricht ist kleiner als der DLC in der Datenbank spezifiziert | 1 |
| 0x803D3B | Übertragungsanforderung I-PDU an FIFO fehlgeschlagen oder Warteschlange wurde aufgrund Überlaufs geleert. | 0 |
| 0x803D35 | Schreiben durch Flashtreibers fehlgeschlagen wegen Hardwarefehler | 0 |
| 0x803D27 | NM-Timeout Timer ist außerhalb des Ready Sleep State abgelaufen | 0 |
| 0x803D2A | Einstellung des Transceiver-Modus nicht erfolgreich | 0 |
| 0x803D3D | ADC-Zeit abgelaufen | 0 |
| 0x803D45 | PCU: Netz N1, Unterspannung (Infoeintrag) | 1 |
| 0x803D40 | Mikrokontroller Quarzfehler | 0 |
| 0x803D31 | Schreiben des Flash EEPROM Emulation hat fehlgeschlagen | 0 |
| 0x803D2D | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x803D48 | Interne Spannung nicht stabil (Infoeintrag) | 0 |
| 0x803D23 | CAN Hardware Wartezeit abgelaufen | 0 |
| 0x803D41 | Mikrokontroller PLL lock Fehler | 0 |
| 0x803D38 | API Request Integrity ist fehlgeschlagen | 0 |
| 0x803D47 | Unterspannung Kl.30F erkannt (Infoeintrag) | 1 |
| 0x803D3C | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x803D28 | Sendepfad-finden fehlgeschlagen | 0 |
| 0x803D3E | SPI Zeit abgelaufen | 0 |
| 0x803D32 | Flash Treiber: Vergleich aufgrund Harwarefehler fehlgeschlagen | 0 |
| 0x803D29 | Wiederholungen der Übergang-Sequenz überschreitet die angegebene Hw Wiederholung | 0 |
| 0x803D3F | Mikrokontroller übergangszeit abgelaufen | 0 |
| 0x803D46 | PCU: Netz N2, Unterspannung (Infoeintrag) | 0 |
| 0x803D33 | Flash Treiber: Löschen aufgrund Hardwarefehler fehlgeschlagen | 0 |
| 0x803D44 | Batterie 2 wurde durch Fremdladung geladen. Bis Batterie 2 teilweise wieder entladen wurde, wird das erneute Laden durch den Generator geblockt. | 0 |
| 0x803D2E | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x803D39 | API Request ist fehlgeschlagen | 0 |
| 0x803D43 | Die Funktion Fremdladung ist aktiv | 0 |
| 0x803D25 | Der Controller befindet sich nicht in CANIF_CS_STARTED | 0 |
| 0x803D2B | Client Security Module Event ist fehlgeschlagen | 0 |
| 0x803D42 | PWM unerwarteter Interrupt Service Request | 0 |
| 0x803D30 | RAM überprüfung hat fehlgeschlagen | 0 |
| 0x803D36 | I-PDU Multiplexer Übertragung fehlgeschlagen | 0 |
| 0x803D2C | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x803D3A | Ungültige Post Build-Konfiguration Dateizeiger erkannt | 0 |
| 0x803D24 | CANIF Sendepuffer voll | 0 |
| 0x803D2F | API service EcuM_KillAllRUNRequest() aufgerufen | 0 |
| 0x803D37 | Mikrokontroller Taktfehler | 0 |
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
| PCU_DCDC_WANDLER | 0xAE01 | - | Wechsel oder Auslesen des Betriebszustandes vom DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE01 | RES_0xAE01 |
| PCU_DCDC_SPANNUNGSHISTOGRAMM | 0xDA56 | - | Spannungshistrogramm für PCU500 in den jeweiligen Betriebzuständen (Stand-by, Fremdladen, Wandlung N1 nach N2, Wandlung N2 nach N1) auslesen / Rücksetzen (0 = Histogramm löschen; 1 = Keine Aktion) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDA56 | RES_0xDA56 |
| DC_DC_DATA_LESEN | 0xDA57 | - | Daten des DC-DC Wandlers lesen - Eingangs-/Ausgangsspannung - Eingangs-/Ausgangsstrom - Temperatur des DC-DC-Wandlers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA57 |
| ZUSATZBATTERIE_ES2_ZAEHLER | 0xDA5B | - | Lade/Entladezähler für Zusatzbatterie  (ES2) auslesen/löschen (0 = Zähler löschen; 1 = Keine Aktion) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDA5B | RES_0xDA5B |

### ARG_0XAE01

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BETRIEBSMODUS | + | - | 0-n | high | unsigned char | - | TAB_DCDC_ANSTEUERUNG | - | - | - | - | - | Betriebszustand (Wandlungsrichtung) |
| VORGABE_SPANNUNG | + | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25000.0 | Vorgabe Spannung |
| VORGABE_EINGANGSSTROM | + | - | mA | high | unsigned char | - | - | 1.0 | 250.0 | 0.0 | 0.0 | 45000.0 | Vorgabe Eingangsstrom |
| VORGABE_AUSGANGSSTROM | + | - | mA | high | unsigned char | - | - | 1.0 | 250.0 | 0.0 | 0.0 | 45000.0 | Vorgabe Ausgangsstrom |

### ARG_0XDA56

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Histogramm löschen; 1 = Keine Aktion |

### ARG_0XDA5B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Zähler löschen; 1 = Keine Aktion |

### RES_0XAE01

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSMODUS | - | - | + | 0-n | high | unsigned char | - | TAB_DCDC_WANDLUNGSRICHTUNG | - | - | - | Betriebszustand (Wandlungsrichtung) |

### RES_0XDA56

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREMDLADEN_U1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 10 bis 11 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 11 bis 12 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12 bis 13 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 13 bis 14 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 14 bis 15 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 15 bis 16 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 16 bis 17 V und im Betriebsmodus Fremdladen |
| STAT_FREMDLADEN_U8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 17 bis 18 V und im Betriebsmodus Fremdladen |
| STAT_N1NACHN2_U1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 10 bis 11 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 11 bis 12 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12 bis 13 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 13 bis 14 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 14 bis 15 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 15 bis 16 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 16 bis 17 V und im Betriebsmodus N1 nach N2 |
| STAT_N1NACHN2_U8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 17 bis 18 V und im Betriebsmodus N1 nach N2 |
| STAT_N2NACHN1_U1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 10 bis 11 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 11 bis 12 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12 bis 13 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 13 bis 14 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 14 bis 15 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 15 bis 16 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 16 bis 17 V und im Betriebsmodus N2 nach N1 |
| STAT_N2NACHN1_U8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 17 bis 18 V und im Betriebsmodus N2 nach N1 |
| STAT_STANDBY_U1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 11,6 bis 11,8 V und im Betriebsmodus Stand-By |
| STAT_STANDBY_U2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 11,8 bis 12 V und im Betriebsmodus Stand-By |
| STAT_STANDBY_U3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12 bis 12,2 V und im Betriebsmodus Stand-By |
| STAT_STANDBY_U4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12,2 bis 12,4 V und im Betriebsmodus Stand-By |
| STAT_STANDBY_U5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12,4 bis 12,6 V und im Betriebsmodus Stand-By |
| STAT_STANDBY_U6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12,6 bis 12,8 V und im Betriebsmodus Stand-By |
| STAT_STANDBY_U7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit (Sekunde) in Spannungsbereich 12,8 bis 13 V und im Betriebsmodus Stand-By |

### RES_0XDA57

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_N1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung im Netz 1 |
| STAT_SPANNUNG_N2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung im Netz 2 |
| STAT_STROM_N1_WERT | A | high | unsigned int | - | - | 1.0 | 100.0 | -55.555 | Strom im Netz 1 |
| STAT_STROM_N2_WERT | A | high | unsigned int | - | - | 1.0 | 100.0 | -55.555 | Strom im Netz 2 |
| STAT_KLEMME15_WUP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Status der Klemme 15 (Weckleitung) |
| STAT_KLEMME30B | 0/1 | high | unsigned char | - | - | - | - | - | Status der Klemme 30B (Signal über CAN-Bus): 0 = Klemme 30B aus / 1 = Klemme 30B ein |
| STAT_TEMPERATUR1_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TEMPERATUR2_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TEMPERATUR3_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TEMPERATUR4_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TEMPERATUR5_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TEMPERATUR6_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TEMPERATUR_MIKROPROZESSOR_WERT | °C | high | int | - | - | 1.0 | 10.0 | -100.0 | Temperatur des µC des DC-DC-Wandlers |
| STAT_KLEMME30F_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Versorgungsspannung |

### RES_0XDA5B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEZAEHLER_WERT | Ah | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezähler |
| STAT_ENTLADEZAEHLER_WERT | Ah | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Entladezähler |

### TAB_DCDC_WANDLUNGSRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Systemstart |
| 0x01 | Standby - Betriebsbereit |
| 0x02 | Temporärer Fehler |
| 0x03 | Permanenter Fehler |
| 0x04 | Schlafbereit |
| 0x05 | Wandlung N1 nach N2: Ausgelastet - keine weitere Erhöhung des Ausgangsstroms |
| 0x06 | Wandlung N1 nach N2: Begrenzung - langsame Erhöhung des Ausgangsstroms |
| 0x07 | Wandlung  N1 nach N2 |
| 0x08 | Wandlung N1 nach N2: Überlastung - Verringerung des Ausgangsstroms |
| 0x09 | Wandlung N2 nach N1: Standheizung aktiv |
| 0x0A | Wandlung N2 nach N1 |
| 0x0B | Fremdladung |
| 0x0C | Ladung |
| 0x0D | Manual Standby |
| 0x0E | Manualler Modus: Wandlung N1 nach N2 |
| 0x0F | Manualler Modus: Wandlung N2 nach N1 |

### TAB_DCDC_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
