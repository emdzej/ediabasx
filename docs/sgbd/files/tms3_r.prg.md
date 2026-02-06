# tms3_r.prg

## General

|  |  |
| --- | --- |
| File | tms3_r.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 72 |
| Origin | BMW EK-532 Berwanger |
| Revision | 5.000 |
| Author | Lear DCS Christian_Ahrens, Lear DCS Andreas_Lindner |
| ECU Comment | TMS_R - Treiber Modul Scheinwerfer Rechts, Dokumentiert in ZEDIS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TreiberModulScheinwerfer 3, rechts |  |  |
| ORIGIN | string | BMW EK-532 Berwanger |  |  |
| REVISION | string | 5.000 |  |  |
| AUTHOR | string | Lear DCS Christian_Ahrens, Lear DCS Andreas_Lindner |  |  |
| COMMENT | string | TMS_R - Treiber Modul Scheinwerfer Rechts, Dokumentiert in ZEDIS |  |  |
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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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
| 0x805E1B | Fahrtrichtungsanzeiger: Strangunterbrechung | 0 |
| 0x805E1F | Schrittmotortreiber Kurvenlicht: High-Voltage-Warning (Warnung) | 0 |
| 0x805E1C | Fahrtrichtungsanzeiger: Übertemperatur 2 (Abschaltung) | 0 |
| 0x805E3F | FUSI Fehler Blinken | 0 |
| 0x805E7A | BFL: Sensorflanke fehlt | 0 |
| 0x805E05 | Akzentleuchte: Kurzschluss Temperatursensor | 0 |
| 0xD9AC05 | Signal (Steuerung_Lichtverteilung_Fahrlicht_rechts): ungültig | 1 |
| 0x805E3A | Tagfahrlicht: Strangstrom kleiner als Sollwert | 0 |
| 0x805E75 | Verbauorterkennung unplausibel | 0 |
| 0x805E91 | Spannungsversorgung LED-DC/DC-Wandler gestört | 0 |
| 0x805E06 | Akzentleuchte: Leitungsunterbrechung Binning | 0 |
| 0xD9AC07 | Signal (Steuerung_Phase_Funktion_Sonderblinken): ungültig | 1 |
| 0x805E0F | Schrittmotortreiber Leuchtweitenregulierung: High-Voltage-Warning (Warnung) | 0 |
| 0x805E2C | Seitenmarkierungsleuchte: Übertemperatur 2 (Abschaltung) | 0 |
| 0xD98514 | B2-CAN Control Module Bus OFF | 0 |
| 0x805E59 | Stellmotor Leuchtweitenregulierung: Leitungsunterbrechung an Wicklung 1 | 0 |
| 0x805E15 | Fahrtrichtungsanzeiger: Kurzschluss Temperatursensor | 0 |
| 0x805E40 | Plausibilisierungsfehler Blinken | 0 |
| 0x805E2F | Schrittmotortreiber BlendfreiesFernlicht: High-Voltage-Warning (Warnung) | 0 |
| 0x805E49 | Stellmotor Blendfreies Fernlicht: Übertemperatur (Abschaltung) | 0 |
| 0x805E38 | Tagfahrlicht: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805E7C | Funktion Tagfahrlicht: Fremdfehler | 0 |
| 0x805E45 | Stellmotor Blendfreies Fernlicht: Kurzschluss an Wicklung 2 nach Masse | 0 |
| 0x805E0C | Akzentleuchte: Übertemperatur 2 (Abschaltung) | 0 |
| 0x024200 | Energiesparmode aktiv | 0 |
| 0x805E78 | LEDs nicht eingelernt | 0 |
| 0xD9AC0A | Signal (Steuerung_Funktion_Parklicht): ungültig | 1 |
| 0x805E6E | Welcome Light: Funktion defekt | 0 |
| 0x024209 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x805E07 | Akzentleuchte: Leitungsunterbrechung Temperatursensor | 0 |
| 0xD9AC02 | Signal (CRC_Steuerung_Licht_Außen_2): ungültig | 1 |
| 0x805E10 | Fahrtrichtungsanzeiger: Binningfehler | 0 |
| 0x805E58 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 2 nach Plus | 0 |
| 0x805E6B | Standlicht: Funktion defekt | 0 |
| 0x805E61 | DWA Blinken: Funktion  defekt | 0 |
| 0x024208 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x805E66 | Panik Blinken: Funktion  defekt | 0 |
| 0xD9AC0E | Signal (Steuerung Licht außen, 0x2EB) ungültig, Sender Sender FRM, FEM, BDC | 1 |
| 0x805E57 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 2 nach Masse | 0 |
| 0x805E2E | Schrittmotortreiber BlendfreiesFernlicht: Low-Voltage-Warning (Warnung) | 0 |
| 0x805E7F | Sensoren: Überspannung erkannt | 0 |
| 0x805E4B | Stellmotor Kurvenlicht: Kurzschluss an Wicklung 1 nach Masse | 0 |
| 0x805E44 | Stellmotor Blendfreies Fernlicht: Kurzschluss an Wicklung 2 | 0 |
| 0x805E8E | LED Einlernvorgang: Codierte Ausgangsspannung am TFL-DC/DC Converter nicht einstellbar | 0 |
| 0x805E0A | Akzentleuchte: Strangstrom größer als Sollwert | 0 |
| 0x805E70 | Überspannung erkannt | 1 |
| 0xD9AC09 | Signal (Steuerung_Funktion_Heimleuchten): ungültig | 1 |
| 0x805E1E | Schrittmotortreiber Kurvenlicht: Low-Voltage-Warning (Warnung) | 0 |
| 0x02420C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x805E53 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 1 | 0 |
| 0x805E26 | Seitenmarkierungsleuchte: Leitungsunterbrechung Binning | 0 |
| 0x805E16 | Fahrtrichtungsanzeiger: Leitungsunterbrechung Binning | 0 |
| 0x805E77 | Kurvenlicht: Schrittverlustgrenze überschritten | 0 |
| 0x805E8D | LED Einlernvorgang: Codierte Ausgangsspannung am LED-DC/DC Converter nicht einstellbar | 0 |
| 0x805E0E | Schrittmotortreiber Leuchtweitenregulierung: Low-Voltage-Warning (Warnung) | 0 |
| 0x02420D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x805E7B | BFL-Antrieb: Schrittverlustgrenze überschritten | 0 |
| 0x805E64 | Fernlichtblinken: Funktion defekt | 0 |
| 0x02420B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02FF42 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805E18 | Fahrtrichtungsanzeiger: Strangspannung kleiner als Sollwert | 0 |
| 0xD9AC00 | Signal (Status_Blinken): ungültig | 1 |
| 0x805E55 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 1 nach Plus | 0 |
| 0x805E00 | Akzentleuchte: Binningfehler | 0 |
| 0xD9AC01 | Signal (Alive_Steuerung_Licht_Außen_2): ungültig | 1 |
| 0x805E67 | Parklicht: Funktion defekt | 0 |
| 0x805E39 | Tagfahrlicht: Strangspannung kleiner als Sollwert | 0 |
| 0x805E73 | Steuergerät: Übertemperatur 2 | 0 |
| 0x805E43 | Stellmotor Blendfreies Fernlicht: Kurzschluss an Wicklung 1 nach Plus | 0 |
| 0xD9AC06 | Signal (Steuerung_Modus_Funktion_Sonderblinken): ungültig | 1 |
| 0x805E20 | Seitenmarkierungsleuchte: Binningfehler | 0 |
| 0x805E4A | Stellmotor Kurvenlicht: Kurzschluss an Wicklung 1 | 0 |
| 0x805E72 | Steuergerät: Temperatursensor defekt | 0 |
| 0x805E69 | Remote Light: Funktion  defekt | 0 |
| 0xD9AC10 | Signal (Takt_Blinken): ungültig | 1 |
| 0x02420A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x805E2B | Seitenmarkierungsleuchte: Strangunterbrechung | 0 |
| 0xD9AC0F | Signal (Status_Blinken_STOP): ungültig | 1 |
| 0x805E1A | Fahrtrichtungsanzeiger: Strangstrom größer als Sollwert | 0 |
| 0x805E54 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 1 nach Masse | 0 |
| 0x805E65 | Follow Me Home: Funktion  defekt | 0 |
| 0x805E92 | Spannungsversorgung TFL-DC/DC-Wandler gestört | 0 |
| 0x805E17 | Fahrtrichtungsanzeiger: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805E50 | Stellmotor Kurvenlicht: Leitungsunterbrechung an Wicklung 1 | 0 |
| 0xD9AC0D | Signal (Steuerung_Funktion_Tagfahrlicht): ungültig | 1 |
| 0x805E2A | Seitenmarkierungsleuchte: Strangstrom größer als Sollwert | 0 |
| 0x805E81 | Sensorversorgung: Störimpulse | 0 |
| 0x805E08 | Akzentleuchte: Strangspannung kleiner als Sollwert | 0 |
| 0x805E30 | Tagfahrlicht: Binningfehler | 0 |
| 0x805E01 | Akzentleuchte: Einlernfehler | 0 |
| 0x805E25 | Seitenmarkierungsleuchte: Kurzschluss Temperatursensor | 0 |
| 0x805E4E | Stellmotor Kurvenlicht: Kurzschluss an Wicklung 2 nach Masse | 0 |
| 0x805E2D | Seitenmarkierungsleuchte: Strangspannung größer als Sollwert | 0 |
| 0x805E82 | Schrittmotortreiber: Unterspannung erkannt | 0 |
| 0x805E6C | Überfallalarm: Funktion defekt | 0 |
| 0xD9AC08 | Signal (Steuerung_Funktion_Begrüßungslicht): ungültig | 1 |
| 0x805E4D | Stellmotor Kurvenlicht: Kurzschluss an Wicklung 2 | 0 |
| 0xD98BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x805E5B | Stellmotor Leuchtweitenregulierung: Übertemperatur (Abschaltung) | 0 |
| 0x805E1D | Fahrtrichtungsanzeiger: Strangspannung größer als Sollwert | 0 |
| 0x805E03 | Seitenmarkierungsleuchte: Funktion defekt | 0 |
| 0x805E42 | Stellmotor Blendfreies Fernlicht: Kurzschluss an Wicklung 1 nach Masse | 0 |
| 0x805E7E | Kurvenlicht: Sensorflanke fehlt | 0 |
| 0x805E22 | Seitenmarkierungsleuchte: Kurzschluss Binning | 0 |
| 0x805E71 | Unterspannung erkannt | 1 |
| 0x805E37 | Tagfahrlicht: Leitungsunterbrechung Binning | 0 |
| 0x805E48 | Stellmotor Blendfreies Fernlicht: Leitungsunterbrechung an Wicklung 2 | 0 |
| 0x805E3D | Tagfahrlicht: Übertemperatur 2 (Abschaltung) | 0 |
| 0x805E84 | LIN defekt | 0 |
| 0x805E27 | Seitenmarkierungsleuchte: Leitungsunterbrechung Temperatursensor | 0 |
| 0x805E3C | Tagfahrlicht: Strangunterbrechung | 0 |
| 0x805E12 | Fahrtrichtungsanzeiger: Kurzschluss Binning | 0 |
| 0x805E90 | LED Einlernvorgang: Berechnete PWM unplausibel | 0 |
| 0x805E28 | Seitenmarkierungsleuchte: Strangspannung kleiner als Sollwert | 0 |
| 0x805E36 | Tagfahrlicht: Kurzschluss Temperatursensor | 0 |
| 0x805E21 | Seitenmarkierungsleuchte: Einlernfehler | 0 |
| 0x805E33 | Tagfahrlicht: Kurzschluss Binning | 0 |
| 0x805E63 | Fernlicht/Lichthupe: Funktion  defekt | 0 |
| 0xD99402 | Botschaft (Steuerung_Licht_außen): Timeout | 1 |
| 0x805E31 | Tagfahrlicht: Einlernfehler | 0 |
| 0x805E56 | Stellmotor Leuchtweitenregulierung: Kurzschluss an Wicklung 2 | 0 |
| 0x805E5A | Stellmotor Leuchtweitenregulierung: Leitungsunterbrechung an Wicklung 2 | 0 |
| 0x805E3E | Tagfahrlicht: Strangspannung größer als Sollwert | 0 |
| 0x805E8B | LED Einlernvorgang: FRAZ_SYNC inaktiv | 0 |
| 0x805E46 | Stellmotor Blendfreies Fernlicht: Kurzschluss an Wicklung 2 nach Plus | 0 |
| 0x805E83 | Schrittmotortreiber: Überspannung erkannt | 0 |
| 0xD99401 | Botschaft (Steuerung_Licht_außen 2): Timeout | 1 |
| 0x805E32 | Tagfahrlicht: Funktion defekt | 0 |
| 0x805E4F | Stellmotor Kurvenlicht: Kurzschluss an Wicklung 2 nach Plus | 0 |
| 0x805E4C | Stellmotor Kurvenlicht: Kurzschluss an Wicklung 1 nach Plus | 0 |
| 0x805E7D | Kurvenlicht: Notprogramm | 0 |
| 0xD9AC0B | Signal (Steuerung_Funktion_Remote-Light): ungültig | 1 |
| 0x805E41 | Stellmotor Blendfreies Fernlicht: Kurzschluss an Wicklung 1 | 0 |
| 0x805E0D | Akzentleuchte: Strangspannung größer als Sollwert | 0 |
| 0x805E02 | Akzentleuchte: Kurzschluss Binning | 0 |
| 0x805E80 | Sensoren: Unterspannung erkannt | 0 |
| 0xD99400 | Botschaft (Blinken): Timeout | 1 |
| 0x805E8C | LED Einlernvorgang: Maximale Zeit ereicht | 0 |
| 0x805E47 | Stellmotor Blendfreies Fernlicht: Leitungsunterbrechung an Wicklung 1 | 0 |
| 0x805E52 | Stellmotor Kurvenlicht: Übertemperatur (Abschaltung) | 0 |
| 0x805E11 | Fahrtrichtungsanzeiger: Einlernfehler | 0 |
| 0x805E51 | Stellmotor Kurvenlicht: Leitungsunterbrechung an Wicklung 2 | 0 |
| 0x805E79 | BFL: Notprogramm | 0 |
| 0x805E8F | LED Einlernvorgang: Codierter Ausgangsstrom am TFL-DC/DC Converter nicht einstellbar | 0 |
| 0x805E0B | Akzentleuchte: Strangunterbrechung | 0 |
| 0xD9AC0C | Signal (Steuerung_Funktion_Standlicht): ungültig | 1 |
| 0x805E3B | Tagfahrlicht: Strangstrom größer als Sollwert | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | ja |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | D98487 | D9848F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D98401 | D9840A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D9845F | D98468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D98600 | D986FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D9840B | D98414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D9843F | D98449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D9850B | D98514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D9847D | D98486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D98501 | D9850A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D9841F | D9843E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D98469 | D98472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D98415 | D9841E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D98473 | D9847C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | D98C00 | D993FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | D99400 | D9C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D99400 | D9C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D98BFF | D98BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 805E00 | 805EFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| KomponentenDTC | 805E00 | 805EFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | SPANNUNGSVERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4001 | TEMPERATUR_TMS3 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4002 | STRANGSPANNUNG | V | High | unsigned char | - | 1.0 | 5.0 | 0.0 |
| 0x4003 | STRANGSTROM | mA | High | unsigned char | - | 5.0 | 1.0 | 0.0 |
| 0x4004 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x0001 | SENSE_DEFEKT | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | SENSE_NOK | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | WRITE_VER_NOK | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | USENSE_NOK | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | MOTOR_DEF | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | MOTOR_LWR_DEF | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | MOTOR_TREIBER | 0/1 | High | 0x80 | - | - | - | - |
| 0x4006 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x0008 | ASYNC | 0/1 | High | 0x01 | - | - | - | - |
| 0x0009 | NOCANMSG | 0/1 | High | 0x02 | - | - | - | - |
| 0x000A | PWM | 0/1 | High | 0x04 | - | - | - | - |
| 0x000B | PERMANENT | 0/1 | High | 0x08 | - | - | - | - |
| 0x4007 | FUSI_BLINKEN_FEHLERCODE | 0-n | High | 0xFF | FUSI_BLINKEN_FEHLERCODE | - | - | - |
| 0x4009 | SPANNUNG_SENSOR_VERSORUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x400B | BEREICH_SCHRITTVERLUST_GRENZE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD295 | SPANNUNGSVERSORGUNG_TFL | V | High | unsigned char | - | 1.0 | 5.0 | 0.0 |
| 0xD296 | SPANNUNGSVERSORGUNG_LED | V | High | unsigned char | - | 1.0 | 5.0 | 0.0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x420001 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x420002 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x420005 | Steuergerät: Übertemperatur 1 | 0 |
| 0x420006 | Reset | 0 |
| 0x420007 | Watchdog hat Reset ausgelöst | 0 |
| 0x420008 | Akzentleuchte: Übertemperatur 1 (Degradation) | 0 |
| 0x420009 | Tagfahrlicht: Übertemperatur 1 (Degradation) | 0 |
| 0x42000A | Stellmotor Blendfreies Fernlicht: Übertemperatur (Warnung) | 0 |
| 0x42000B | Fahrtrichtungsanzeiger: Übertemperatur 1 (Degradation) | 0 |
| 0x42000C | Seitenmarkierungsleuchte: Übertemperatur 1 (Degradation) | 0 |
| 0x42000D | Stellmotor Kurvenlicht: Übertemperatur (Warnung) | 0 |
| 0x42000E | Stellmotor Leuchtweitenregulierung: Übertemperatur (Warnung) | 0 |
| 0x420010 | Schrittmotortreiber Leuchtweitenregulierung: Cold-Warning (Warnung) | 0 |
| 0x420011 | Schrittmotortreiber Kurvenlicht: Cold-Warning (Warnung) | 0 |
| 0x420012 | Schrittmotortreiber BlendfreiesFernlicht: Cold-Warning (Warnung) | 0 |
| 0x420019 | Schrittmotortreiber Leuchtweitenregulierung: Hot-Warning (Warnung) | 0 |
| 0x42001A | Schrittmotortreiber Kurvenlicht: Hot-Warning (Warnung) | 0 |
| 0x42001B | Schrittmotortreiber BlendfreiesFernlicht: Hot-Warning (Warnung) | 0 |
| 0x42001C | Stellmotor Leuchtweitenregulierung: Codierung unplausibel | 0 |
| 0x42001D | Stellmotor Kurvenlicht: Codierung unplausibel | 0 |
| 0x42001E | Stellmotor Blendfreies Fernlicht: Codierung unplausibel | 0 |
| 0x420100 | DTC Inhibition Error 1 | 0 |
| 0x420101 | DTC Inhibition Error 2 | 0 |
| 0x420102 | DTC Inhibition Error 3 | 0 |
| 0x420103 | DTC Inhibition Error 4 | 0 |
| 0x420104 | DTC Inhibition Error 5 | 0 |
| 0x420105 | DTC Inhibition Error 6 | 0 |
| 0x420106 | DTC Inhibition Error 7 | 0 |
| 0x420107 | DTC Inhibition Error 8 | 0 |
| 0x420108 | DTC Inhibition Error 9 | 0 |
| 0x420109 | DTC Inhibition Error 10 | 0 |
| 0x420200 | CAN_E_TIMEOUT | 0 |
| 0x420201 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x420202 | CANIF_E_INVALID_RXPDUID | 0 |
| 0x420203 | CANIF_E_INVALID_TXPDUID | 0 |
| 0x420204 | CANIF_E_STOPPED | 0 |
| 0x420205 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x420206 | CANNM_E_INIT_FAILED | 0 |
| 0x420207 | CANTP_E_COMM | 0 |
| 0x420208 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x420209 | CNM_E_TX_PATH_FAILED | 0 |
| 0x42020A | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x42020B | COMM_E_NET_START_IND_CHANNEL_1 | 0 |
| 0x42020C | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x42020D | COMM_E_START_Tx_TIMEOUT_C1 | 0 |
| 0x42020E | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x42020F | COMM_E_STOP_Tx_TIMEOUT_C1 | 0 |
| 0x420210 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x420211 | FLS_E_COMPARE_FAILED | 0 |
| 0x420212 | FLS_E_ERASE_FAILED | 0 |
| 0x420213 | FLS_E_READ_FAILED | 0 |
| 0x420214 | FLS_E_WRITE_FAILED | 0 |
| 0x420215 | FR_E_ACCESS | 0 |
| 0x420216 | FRIF_E_JLE_SYNC | 0 |
| 0x420217 | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 |
| 0x420218 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x420219 | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x42021A | LINIF_E_RESPONSE | 0 |
| 0x42021B | MCU_E_CLOCK_FAILURE | 0 |
| 0x42021C | MCU_E_LOCK_FAILURE | 0 |
| 0x42021D | NVM_E_INTEGRITY_FAILED | 0 |
| 0x42021E | NVM_E_REQ_FAILED | 0 |
| 0x42021F | WDG_E_DISABLE_REJECTED | 0 |
| 0x420220 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x420221 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x420222 | WDGM_E_SET_MODE | 0 |
| 0x420300 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x420301 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x420700 | Secondary App Dummy DTC | 1 |
| 0x420701 | Secondary Network Dummy DTC | 1 |
| 0x805EDC | FUSI Shell SIF | 0 |
| 0xD99500 | Botschaft (Fahrgestellnummer): Timeout | 1 |
| 0xD9AD00 | Signal (Nummer_Fahrgestell_1): ungültig | 1 |
| 0xD9AD01 | Signal (Nummer_Fahrgestell_2): ungültig | 1 |
| 0xD9AD02 | Signal (Nummer_Fahrgestell_3): ungültig | 1 |
| 0xD9AD03 | Signal (Nummer_Fahrgestell_4): ungültig | 1 |
| 0xD9AD04 | Signal (Nummer_Fahrgestell_5): ungültig | 1 |
| 0xD9AD05 | Signal (Nummer_Fahrgestell_6): ungültig | 1 |
| 0xD9AD06 | Signal (Nummer_Fahrgestell_7): ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | ja |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | SPANNUNGSVERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4001 | TEMPERATUR_TMS3 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4005 | UW_EXCLUDED_DTC | HEX | High | signed long | - | - | - | - |
| 0x4008 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x0001 | FUSI_PFM | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | FUSI_TM | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | FUSI_CRM | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | FUSI_VMM | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | FUSI_NVMM | 0/1 | High | 0x10 | - | - | - | - |
| 0x400A | RESET_COUNTER | count | High | unsigned char | - | 1.0 | 1.0 | 0.0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_EINLERNVORGANG | 0xA536 | - | Einlernvorgang der LED Scheinwerfer | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA536 |
| BETRIEBSSTUNDEN_LEUCHTEN_LOESCHEN | 0xD5E2 | - | Betriebsstunden Leuchten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5E2 | - |
| STATUS_SCHEINWERFER_VARIANTE | 0xD63E | - | Lesen der codierbaren Variantenkennung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD63E |
| TMS_STATISTIKDATEN | 0xDF00 | - | Statistikdatenzähler TMS | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF00 | RES_0xDF00 |
| REFERENZLAUF_LWR | 0xDF01 | - | Referenzlauf Leuchtweitenregulierung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF01 | - |
| LWR_POSITION | 0xDF02 | - | LWR Position | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF02 | RES_0xDF02 |
| WALZE_REFERENZLAUF | 0xDF03 | - | Referenzlauf des Walzenmotors ansteuern | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF03 | - |
| WALZE_POSITION | 0xDF04 | - | Position der Walze für das blendfreie Fernlicht | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF04 | RES_0xDF04 |
| AHL_POSITION | 0xDF05 | - | AHL Position | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF05 | RES_0xDF05 |
| WALZE_SCHRITTVERLUSTE | 0xDF06 | - | Schrittverlustzähler der TMS Walze | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF06 | RES_0xDF06 |
| SCHEINWERFERHERSTELLERDATEN | 0xDF07 | - | Scheinwerferherstellerdaten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF07 | RES_0xDF07 |
| ANSTEUERUNG_WALZE | 0xDF08 | - | Ansteuerung der Walze des TMS | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF08 | RES_0xDF08 |
| TMS_HERSTELLERDATEN | 0xDF09 | STAT_HERSTELLERDATEN_TMS_WERT | TMS-Herstellerdaten | - | - | high | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AHL_REFERENZLAUF | 0xDF0A | - | Referenzlauf AHL | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF0A | - |
| LED_AUSGAENGE_TMS | 0xDF0B | - | LED Ausgänge des TMS | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF0B | RES_0xDF0B |
| LED_STROEME_TMS | 0xDF0C | - | Stromwert der LED-Kanaele | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF0C |
| BETR_H_TMS | 0xDF0E | - | Betriebsstundenzähler des TMS | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF0E | RES_0xDF0E |
| AHL_SCHRITTVERLUSTE | 0xDF0F | - | Zähler der Kurvenlicht Schrittverlust | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF0F | RES_0xDF0F |
| TEMPERATURVERTEILUNG_TMS | 0xDF12 | - | Temperaturverteilung TMS | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF12 | RES_0xDF12 |
| VERTEILUNG_WINKEL_ANSTEUERUNG_TMS | 0xDF13 | - | Winkelverteilung TMS | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF13 | RES_0xDF13 |
| LED_EINLERNDATEN | 0xF1F5 | STAT_LED_EINLERNDATEN_WERT | Job: - Result: LED Einlerndaten auslesen | - | - | - | data[151] | - | - | - | - | - | 22 | - | - |
| TMS_EEPROM_UPDATE | 0x461A | - | Daten aus RAM-Mirror in Nvram schreiben | - | - | - | - | - | - | - | - | - | 2F | - | - |
| LED_PWM_TMS | 0x461B | - | PWM-Tastverhältnis für jeden LED-Kanal vom TMS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x461B |
| ANALOG_INPUTS | 0xF1F6 | - | Spannungen und Temperaturen von TMS3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF1F6 |
| DIGITAL_INPUTS | 0xF1F7 | - | Digitale Eingänge von TMS3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF1F7 |
| _SETTING_REFERENCE | 0xFD00 | - | Manipulation von verschiedenen Ausgängen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD00 | - |
| DEBUG_DATEN | 0xF1FF | STAT_DEBUG_DATEN_WERT | Debug Daten auslesen | - | - | - | data[162] | - | - | - | - | - | 22 | - | - |
| _LICHTFUNKTIONEN | 0x4624 | - | Der Job dient zur Aktivierung von Lichtfunktionen (nicht Leuchtmittel). Damit können Zuordnungen in der Leuchtmittelmatrix getestet werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4624 | - |

### RES_0X461B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_TASTVERHAELTNIS_KANAL_0_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_1_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_2_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_3_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_4_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_5_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_6_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_7_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |
| STAT_PWM_TASTVERHAELTNIS_KANAL_8_WERT | % | high | unsigned int | - | - | 1 | 1 | 0 | - |

### RES_0XF1F6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_LED_CH8_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung LED Channel 8 |
| STAT_V_LED_CH9_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung LED Channel 9 |
| STAT_KL30F_BOOST_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung Kl30f Boost |
| STAT_SENSOR_SUPPLY_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung Sensor Supply |
| STAT_LED_VOLTAGE_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung Led |
| STAT_KL30F_BUCK_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung Kl30f Buck |
| STAT_OV_DIAG_V_WERT | mV | - | unsigned int | - | - | - | - | - | Spannung 0V Diag |
| STAT_INT1_LED_DCDC_WERT | °C | high | unsigned char | - | - | - | - | -40 | Temperatur Intern 1 LED DCDC |
| STAT_EXT2_WERT | °C | high | unsigned char | - | - | - | - | -40 | Temperatur Extern 2 |
| STAT_EXT1_WERT | °C | high | unsigned char | - | - | - | - | -40 | Temperatur Extern 1 |
| STAT_INT3_TFL_DCDC_WERT | °C | high | unsigned char | - | - | - | - | -40 | Temperatur Intern 3 TFL DCDC |
| STAT_INT2_UC_WERT | °C | high | unsigned char | - | - | - | - | -40 | Temperatur Intern 2 uC |

### RES_0XF1F7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_WALZE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Flankensensorzustand Walze |
| STAT_SENSOR_KL_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Flankensensorzustand Kurvenlicht |
| STAT_FRAZ_SYNC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Zustand FRAZ_SYNC Leitung |
| STAT_TMS_SIDE_DETECT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0 = TMS links, 1 = TMS rechts |
| STAT_PGOOD_EIN | 0/1 | high | unsigned char | - | - | - | - | - | PowerGood Signal vom Buck-DCDC-Wandler |
| STAT_OC_TFL_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Überstromsignal vom Tagfahrlicht-DCDC-Wandler |

### ARG_0XFD00

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSGANG | 0-n | high | unsigned char | - | TAB_AUSGANG | - | - | - | - | - | - |
| WERT | - | - | unsigned int | - | - | - | - | - | - | - | - |

### TAB_AUSGANG

| WERT | TEXT |
| --- | --- |
| 1 | ULED |
| 2 | UTFL |
| 3 | ITFL |
| 4 | IDC_DERATING_CURRENT |
| 5 | SML_DERATING_CURRENT |
| 6 | AZL_DERATING_CURRENT |
| 7 | TFL_DERATING_CURRENT |

### TAB_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Einlernvorgang läuft noch |
| 0x01 | Einlernvorgang erfolgreich abgeschlossen |
| 0xFF | Einlernvorgang mit Fehler abgebrochen |

### TMS_ZAEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Betriebszeit TMS |
| 0x02 | TFL |
| 0x03 | FRAZ |
| 0x04 | AZL |
| 0x05 | SML |
| 0x06 | Hubmagnet |
| 0x07 | Stellmotor Haltebestromung LWR |
| 0x08 | Stellmotor Haltebestromung AHL |
| 0x09 | Stellmotor Haltebestromung Walze |
| 0x0A | Stellmotor Stellbestromung LWR |
| 0x0B | Stellmotor Stellbestromung AHL |
| 0x0C | Stellmotor Stellbestromung Walze |
| 0x0D | SG Reset |
| 0xFE | alle Zähler |

### TAB_LED_LEUCHTKANAELE

| WERT | TEXT |
| --- | --- |
| 0x06 | Seitenmarkierungsleuchte |
| 0x07 | Akzentleuchte |
| 0x08 | Tagfahrlicht (alle LED-Kanaele) |
| 0x09 | Tagfahrlicht Kanal 1 |
| 0x0A | Tagfahrlicht Kanal 2 |
| 0x0F | alle LED Kanaele |

### FUSI_BLINKEN_FEHLERCODE

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | F2_BC1_ERROR |
| 2 | F2_BC2_ERROR |
| 3 | F4_ERROR |
| 4 | SIF_ERROR |
| 5 | SHUTDOWN_VOLTAGE_ERROR |

### TAB_0X4004

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 |

### TAB_0X4006

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0008 | 0x0009 | 0x000A | 0x000B |

### TAB_0X4008

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 |

### SCHEINWERFERVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | AHL/ECE |
| 0x20 | Bixenon/ECE |
| 0x30 | Bixenon/SAE |
| 0x40 | Halogen/ECE |
| 0x50 | Halogen/SAE |
| 0x60 | LED/ECE |
| 0x70 | LED/SAE |

### FARZEUGVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | F01-F04 (+LCI) |
| 0x01 | F07 (+LCI) |
| 0x02 | F10/F11/F18 (+LCI) |
| 0x03 | F12/F13 |
| 0x04 | F25 |
| 0x05 | RR4 |
| 0x06 | F20/F21 |
| 0x07 | F22/F23 |
| 0x08 | F30/F31 |
| 0x0A | RR01 |
| 0x10 | I01 |
| 0x11 | I12 |
| 0x18 | F56 |
| 0x19 | F45 |

### SCHEINWERFERHERSTELLER

| WERT | TEXT |
| --- | --- |
| 0x01 | AL |
| 0x03 | Hella |
| 0x04 | ZKW |
| 0x05 | Valeo |

### BF_SCHEINWERFERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHEINWERFERHERSTELLER | 0-n | high | unsigned char | 0x0F | SCHEINWERFERHERSTELLER | - | - | - | Scheinwerferhersteller Bit 1-4 |
| STAT_SCHEINWERFERVARIANTE | 0-n | high | unsigned char | 0xF0 | SCHEINWERFERVARIANTE | - | - | - | Scheinwerfervariante Bit 5-8 |

### TAB_STATUS_LICHTFUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | HARD_OFF |
| 1 | HARD_ON |
| 2 | PASSIVE |
| 3 | SOFT_ON |
| 4 | SOFT_OFF |
| 5 | ERROR |

### TAB_LICHTFUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | DAYTIME_RUNNING_LIGHT |
| 1 | POSITION_LIGHT_MODE1 |
| 2 | POSITION_LIGHT_MODE2 |
| 3 | POSITION_LIGHT_MODE3 |
| 4 | PARKING_LIGHT |
| 5 | WELCOME_LIGHT_MODE1 |
| 6 | WELCOME_LIGHT_MODE2 |
| 7 | WELCOME_LIGHT_MODE3 |
| 8 | WELCOME_LIGHT_MODE4 |
| 9 | FOLLOW_ME_HOME_LIGHT |
| 10 | REMOTE_LIGHT |
| 11 | FLASHING_MAIN_BEAM |
| 12 | DWA_ALARM |
| 13 | PANIC_MODE |
| 14 | ATTACK_ALARM |
| 15 | INDICATOR |
| 16 | SIDEMARKER |

### ARG_0X4624

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LICHTFUNKTION | 0-n | - | unsigned char | - | TAB_LICHTFUNKTION | - | - | - | - | - | - |
| STATUS_LICHTFUNKTION | 0-n | - | unsigned char | - | TAB_STATUS_LICHTFUNKTION | - | - | - | - | - | - |

### ARG_0XD5E2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Betriebsstunden löschen: 0 = keine Aktion 1 = Ein |

### ARG_0XDF00

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | 0-n | high | unsigned char | - | TMS_ZAEHLER | - | - | - | - | - | Auswahl des zu löschenden Zählers |

### ARG_0XDF01

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Referenzlauf 0 = keine Aktion 1 = Ein |

### ARG_0XDF02

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_LWR | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Winkel fuer LWR in 1/100° > 100 entspricht 1° |
| GESCHW_LWR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit für LWR |

### ARG_0XDF03

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Referenzlauf 0 = keine Aktion 1 = Ein |

### ARG_0XDF04

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WALZE_POSITION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Positionsvorgabe WALZE (Positionen 1...15) |
| WALZE_GESCHW | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit Walze |

### ARG_0XDF05

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AHL_POSITION | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Positionsvorgabe Kurvenlicht in 1/10° > 10 entspricht 1° |
| AHL_GESCHW | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit Kurvenlicht |

### ARG_0XDF06

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Zähler löschen: 0 = keine Aktion 1 = Start |

### ARG_0XDF07

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HERSTELLERDATEN_SCHEINWERFER | - | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Scheinwerfer-Herstellerdaten |

### ARG_0XDF08

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Zähler löschen: 0 = keine Aktion 1 = Start |

### ARG_0XDF0A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Referenzlauf 0 = keine Aktion 1 = Ein |

### ARG_0XDF0B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KANAL | 0-n | high | unsigned char | - | TAB_LED_LEUCHTKANAELE | - | - | - | - | - | Ansteuern der LED Kanaele |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Angabe der Zeit in Sekunden 0: aus  255: max |

### ARG_0XDF0E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Löschen der Betriebsstunden des TMS: 0 = keine Aktion 1 = Start |

### ARG_0XDF0F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zähler löschen: 0 = keine Aktion 1 = Start |

### ARG_0XDF12

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperaturverteilung in TMS loeschen: 0 = keine Aktion 1 = Löschen |

### ARG_0XDF13

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Winkelverteilung in TMS loeschen: 0 = keine Aktion 1 = Löschen |

### RES_0XA536

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLERNVORGANG | - | - | + | 0-n | high | unsigned char | - | TAB_EINLERNVORGANG | - | - | - | Abfrage des Einlernvorganges |

### RES_0XD63E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUGTYP | 0-n | high | unsigned char | - | FARZEUGVARIANTE | - | - | - | Fahrzeugtyp aus Tabelle |
| STAT_LEUCHTENINFO | Bit | high | BITFIELD | - | BF_SCHEINWERFERINFO | - | - | - | Variante |
| STAT_SCHEINWERFER_VERSIONSNUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Scheinwerferversionsnummer |

### RES_0XDF00

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSSTUNDEN_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | liefert die Betriebsstunden des TMS |
| STAT_BETRIEBSSTUNDEN_TFL_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | liefert die Betriebsstunden des TFL |
| STAT_BETRIEBSSTUNDEN_FRAZ_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | liefert die Betriebsstunden des FRAZ |
| STAT_BETRIEBSSTUNDEN_AZL_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | liefert die Betriebsstunden des AZL |
| STAT_BETRIEBSSTUNDEN_SML_WERT | s | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | liefert die Betriebsstunden des SML |
| STAT_BETRIEBSSTUNDEN_HUBMAGNET_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | liefert die Betriebsstunden des Hubmagnet |
| STAT_BETRIEBSSTUNDEN_MOTOR_LWR_STELLSTROM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | liefert die Betriebsstunden des LWR-Motor |
| STAT_BETRIEBSSTUNDEN_MOTOR_AHL_STELLSTROM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | liefert die Betriebsstunden des AHL-Motor |
| STAT_BETRIEBSSTUNDEN_MOTOR_WALZE_STELLSTROM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | liefert die Betriebsstunden des Walzenmotors |
| STAT_BETRIEBSSTUNDEN_MOTOR_LWR_HALTESTROM_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | liefert die Betriebsstunden des LWR-Motor |
| STAT_BETRIEBSSTUNDEN_MOTOR_AHL_HALTESTROM_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | liefert die Betriebsstunden des AHL-Motor |
| STAT_BETRIEBSSTUNDEN_MOTOR_WALZE_HALTESTROM_WERT | s | high | unsigned long | - | - | 30.0 | 1.0 | 0.0 | liefert die Betriebsstunden des Walzenmotors |
| STAT_RESETZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Resetvorgänge |

### RES_0XDF02

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POS_LWR_WERT | ° | high | int | - | - | 1.0 | 100.0 | 0.0 | Winkel für LWR |

### RES_0XDF04

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WALZE_POSITION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position Walze (Positionen 1...15) |

### RES_0XDF05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AHL_POSITION_WERT | ° | high | int | - | - | 1.0 | 100.0 | 0.0 | Position Kurvenlicht |

### RES_0XDF06

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTVERLUST_BEREICH_1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 1 |
| STAT_SCHRITTVERLUST_BEREICH_2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 2 |
| STAT_SCHRITTVERLUST_BEREICH_3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 3 |
| STAT_SCHRITTVERLUST_BEREICH_4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 4 |
| STAT_SCHRITTVERLUST_BEREICH_5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 5 |
| STAT_SCHRITTVERLUST_BEREICH_6_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 6 |

### RES_0XDF07

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLERDATEN_SCHEINWERFER_WERT | - | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Scheinwerfer-Herstellerdaten |

### RES_0XDF08

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 1 |
| STAT_POSITION_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 2 |
| STAT_POSITION_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 3 |
| STAT_POSITION_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 4 |
| STAT_POSITION_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 5 |
| STAT_POSITION_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 6 |
| STAT_POSITION_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 7 |
| STAT_POSITION_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 8 |
| STAT_POSITION_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 9 |
| STAT_POSITION_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 10 |
| STAT_POSITION_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 11 |
| STAT_POSITION_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 12 |
| STAT_POSITION_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 13 |
| STAT_POSITION_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 14 |
| STAT_POSITION_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Walzenposition 15 |

### RES_0XDF0B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_1 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_2 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_3 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_4 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_5 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_SEITENMARKIERUNGSLEUCHTE | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_AKZENTLEUCHTE | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_TAGFAHRLICHT_KANAL_1 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |
| STAT_TAGFAHRLICHT_KANAL_2 | 0/1 | high | unsigned char | - | - | - | - | - | Status LED Kanal: 1: ein 0: aus |

### RES_0XDF0C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert FRAZ Kanal 1 |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert FRAZ Kanal 2 |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_3_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert FRAZ Kanal 2 |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_4_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert FRAZ Kanal 4 |
| STAT_FAHRTRICHTUNGSANZEIGER_KANAL_5_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert FRAZ Kanal 5 |
| STAT_SEITENMARKIERUNGSLEUCHTE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Seitenmarkierungsleuchte |
| STAT_AKZENTLEUCHTE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Akzentleuchte |
| STAT_TAGFAHRLICHT_KANAL_1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Tagfahrlicht Kanal 1 |
| STAT_TAGFAHRLICHT_KANAL_2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Tagfahrlicht Kanal 2 |

### RES_0XDF0E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSSTUNDEN_TMS_STUNDEN_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden des TMS Stundenwert |
| STAT_BETRIEBSSTUNDEN_TMS_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden des TMS Minutenwert |
| STAT_BETRIEBSSTUNDEN_TMS_SEKUNDEN_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden des TMS Sekundenwert |

### RES_0XDF0F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTVERLUST_BEREICH_1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 1 |
| STAT_SCHRITTVERLUST_BEREICH_2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 2 |
| STAT_SCHRITTVERLUST_BEREICH_3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 3 |
| STAT_SCHRITTVERLUST_BEREICH_4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 4 |
| STAT_SCHRITTVERLUST_BEREICH_5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 5 |
| STAT_SCHRITTVERLUST_BEREICH_6_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schrittverluste im Bereich 6 |

### RES_0XDF12

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_KL_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Wert ]-unendlich;0°[ |
| STAT_TEMP_KL_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Wert [0°;95°[ |
| STAT_TEMP_KL_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Wert [95°;115°[ |
| STAT_TEMP_KL_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Wert [115°;135°[ |
| STAT_TEMP_KL_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Wert [135°;155°[ |
| STAT_TEMP_KL_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Wert [155°;+unendlich[ |

### RES_0XDF13

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_MINUS_16_14_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -14° und -16° |
| STAT_WINKEL_MINUS_14_12_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -12° und -14° |
| STAT_WINKEL_MINUS_12_10_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -10° und -12° |
| STAT_WINKEL_MINUS_10_8_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -8° und -10° |
| STAT_WINKEL_MINUS_8_6_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -6° und -8° |
| STAT_WINKEL_MINUS_6_4_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -4° und -6° |
| STAT_WINKEL_MINUS_4_2_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen -2° und -4° |
| STAT_WINKEL_MINUS_2_0_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 0° und -2° |
| STAT_WINKEL_0_2_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 0° und 2° |
| STAT_WINKEL_2_4_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 2° und 4° |
| STAT_WINKEL_4_6_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 4° und 6° |
| STAT_WINKEL_6_8_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 6° und 8° |
| STAT_WINKEL_8_10_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 8° und 10° |
| STAT_WINKEL_10_12_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 10° und 12° |
| STAT_WINKEL_12_14_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 12° und 14° |
| STAT_WINKEL_14_16_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkel zwischen 14° und 16° |
