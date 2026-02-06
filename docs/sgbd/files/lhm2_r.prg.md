# lhm2_r.prg

## General

|  |  |
| --- | --- |
| File | lhm2_r.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 42 |
| Origin | BMW EK532 Werkstetter,Mario |
| Revision | 2.005 |
| Author | Continental B2 Fiessinger, Continental PG1_CF_SW_PG3_RCC_AS_ASW |
| ECU Comment | LHM2_R |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | LHM2_R |  |  |
| ORIGIN | string | BMW EK532 Werkstetter,Mario |  |  |
| REVISION | string | 2.005 |  |  |
| AUTHOR | string | Continental B2 Fiessinger, Continental PG1_CF_SW_PG3_RCC_AS_ASW |  |  |
| COMMENT | string | LHM2_R |  |  |
| PACKAGE | string | 1.25 |  |  |
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

### STATUS_SERIALNUMBER

Auslesen des SENSE-Wertes eines bestimmten Ausgangs  STATUS_SERIALNUMBER

_No arguments._

### STEUERN_DM_TEST

Wird ein unzulässiger Parameter übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat STEUERN_DM_TEST

| Name | Type | Description |
| --- | --- | --- |
| ARG_DTC | unsigned char | 0: Dummy-DTC im Komponentenfehlerbereich 1: Dummy-DTC im Netzwerkfehlerbereich |

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
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive World Headquarters |
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
| 0x5B00 | Zentralinstrument | - |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xDA140F | Botschaft 0x12F (KLEMMEN) - Signal ST_KL ungültig | 1 |
| 0x805B1F | Ausfall Temperatursensor 1 | 0 |
| 0xDA050B | B2-CAN Physikalischer Busfehler | 0 |
| 0x805B4B | Codierdaten passen nicht zum Verbauort (Fahrer- /Beifahrerseite) | 0 |
| 0x805B52 | Fehler Hardwarecodierung LED Binning 2 | 0 |
| 0xDA140C | Botschaft 0x12F (KLEMMEN) - Timeout | 1 |
| 0x805B29 | Lüfter 1 defekt | 0 |
| 0xDA1407 | Botschaft 0x1E4 (CTR_LP_EX_2) - Signal CTR_LDSTR_LOWB_LH ungültig | 1 |
| 0x805B22 | Ausfall Temperatursensor 4 | 0 |
| 0x024408 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0xDA1410 | Botschaft 0x1AE (ST_OP_LP_EX) - Timeout | 1 |
| 0xDA1400 | Botschaft 0x1E4 (CTR_LP_EX_2) - Timeout | 1 |
| 0x805B20 | Ausfall Temperatursensor 2 | 0 |
| 0x805B4C | Fehler Hardwarecodierung LED Binning 3 | 0 |
| 0x805B21 | Ausfall Temperatursensor 3 | 0 |
| 0xDA1411 | Botschaft 0x1AE (ST_OP_LP_EX) - Signal ST_LP_SW ungültig | 1 |
| 0x805B51 | CRC-Fehler Codierdaten | 0 |
| 0x02440A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x805B46 | Ausfall Rechts-Linkserkennung | 0 |
| 0xDA140D | Botschaft 0x12F (KLEMMEN) - CRC-Fehler | 1 |
| 0x805B00 | Abblendlicht defekt | 0 |
| 0xDA140B | Botschaft 0x1A1 (V_VEH) - Signal V_VEH_COG ungültig | 1 |
| 0x805B49 | Unterspannung | 0 |
| 0x805B4D | Fehler Hardwarecodierung LED Binning 4 | 0 |
| 0x805B03 | Tagfahrlicht defekt | 0 |
| 0x02440C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x805B4E | Fehler Hardwarecodierung LED Binning 5 | 0 |
| 0xDA140A | Botschaft 0x1A1 (V_VEH) - Fehler Alive-Counter | 1 |
| 0x805B02 | Abbiegelicht defekt | 0 |
| 0xDA140E | Botschaft 0x12F (KLEMMEN) - Fehler Alive-Counter | 1 |
| 0x805B24 | Übertemperaturabschaltung Abblendlicht | 0 |
| 0x805B01 | Fernlicht defekt | 0 |
| 0x805B4A | Überspannung | 0 |
| 0x02440B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0xDA1409 | Botschaft 0x1A1 (V_VEH) - CRC-Fehler | 1 |
| 0xDA1402 | Botschaft 0x1E4 (CTR_LP_EX_2) - Fehler Alive-Counter | 1 |
| 0x805B47 | Fehler Hardwarecodierung LED Binning 1 | 0 |
| 0x805B4F | Fehler Hardwarecodierung LED Binning 6 | 0 |
| 0xDA1403 | Botschaft 0x2EB (CTR_LP_EX) - Timeout | 1 |
| 0x805B2A | Lüfter 2 defekt | 0 |
| 0x02FF44 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xDA1408 | Botschaft 0x1A1 (V_VEH) - Timeout | 1 |
| 0x805B48 | interner Steuergerätefehler | 0 |
| 0x024400 | Energiesparmode aktiv | 0 |
| 0xDA1401 | Botschaft 0x1E4 (CTR_LP_EX_2) - CRC-Fehler | 1 |
| 0x024409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x805B23 | Übertemperatur | 0 |
| 0x805B50 | Fehler Hardwarecodierung LED Binning 7 | 0 |
| 0x805B1E | Ausfall Temperatursensor intern | 0 |
| 0xDA0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xDA1406 | Botschaft 0x1E4 (CTR_LP_EX_2) - Signal CTR_FN_DIPB_LH ungültig | 1 |
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
| SystembusDTC | DA050B | DA0514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA047D | DA0486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA041F | DA043E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA0469 | DA0472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA0501 | DA050A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA0487 | DA048F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA0401 | DA040A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA0473 | DA047C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA0415 | DA041E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA043F | DA0449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA045F | DA0468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | DA040B | DA0414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | DA0C00 | DA13FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | DA1400 | DA43FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | DA0BFF | DA0BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | DA1400 | DA43FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 805B00 | 805BFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xD513 | SPANNUNG_KL30_LHM | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0xD523 | TEMPERATUR_1 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0xD524 | TEMPERATUR_2 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0xD525 | TEMPERATUR_3 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0xD526 | TEMPERATUR_4 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0xD527 | TEMPERATUR_INTERN | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x440080 | CODING2_UNTERBRECHUNG | 0 |
| 0x44001E | FLS_E_ERASE_FAILED | 0 |
| 0x44001B | IOHWAB_E_IO_SEQUENCE | 0 |
| 0x440073 | MCU_E_CORE_RESET_EVENT | 0 |
| 0x440059 | FUSI_LEISTUNGSPLAUSIB2 | 0 |
| 0x44002C | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x44004D | NTC2_KURZSCHLUSS | 0 |
| 0x440078 | CODING1_KURZSCHLUSS | 0 |
| 0x44001D | FR_E_ACCESS | 0 |
| 0x440027 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x440065 | CTR_FN_CORNL_LH_INVALID | 1 |
| 0x440009 | SBC_E_OVERCURRENTVCC3 | 0 |
| 0x440053 | NTC3_UNTERBRECHUNG | 0 |
| 0x440038 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x440001 | CODING_EVENT_TRANSACTION_ERROR | 0 |
| 0x44003A | FLS_E_WRITE_FAILED | 0 |
| 0x44000D | ECUMA_RESET_ECC_EXEPTION | 0 |
| 0x440045 | KANAL1_DEFEKT | 0 |
| 0x44007C | CODING5_KURZSCHLUSS | 0 |
| 0x44005C | LICHTNOTLAUF_BEI_10V_BEENDET | 0 |
| 0x44004A | KANAL6_DEFEKT | 0 |
| 0x440041 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x440016 | PDUR_E_INIT_FAILED | 0 |
| 0x440048 | KANAL4_DEFEKT | 0 |
| 0x440063 | FAN_SUPPLY_KURZSCHLUSS | 0 |
| 0x440033 | FLS_E_READ_FAILED | 0 |
| 0x440082 | CODING4_UNTERBRECHUNG | 0 |
| 0x440068 | CTR_FN_REMLI_INVALID | 1 |
| 0x440032 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x44003C | CANNM_E_INIT_FAILED | 0 |
| 0x440006 | VSM_EVENTID_VEHICLESTATE_ERR | 0 |
| 0x440057 | FUSI_FEHLER | 0 |
| 0x440070 | MCU_E_MODE_TRANSITION_FAILURE | 0 |
| 0x440019 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x440049 | KANAL5_DEFEKT | 0 |
| 0x44000F | ECUMA_INT_INVALID_ISR | 0 |
| 0x44007E | CODING7_KURZSCHLUSS | 0 |
| 0x440044 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x44002B | CAN_E_TIMEOUT | 0 |
| 0x440007 | SBC_E_OVERTEMPERATUREVCC2 | 0 |
| 0x440051 | NTC1_UNTERBRECHUNG | 0 |
| 0x440034 | WDG_E_DISABLE_REJECTED | 0 |
| 0x44006A | CTR_FN_DRL_INVALID | 1 |
| 0x44002F | FLS_E_COMPARE_FAILED | 0 |
| 0x440031 | MCU_E_LOCK_FAILURE | 0 |
| 0x44004F | NTC4_KURZSCHLUSS | 0 |
| 0x440040 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x440012 | SWSEC_REGMON_IO_REG | 0 |
| 0x440046 | KANAL2_DEFEKT | 0 |
| 0x440035 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x44007A | CODING3_KURZSCHLUSS | 0 |
| 0x440055 | NTC5_UNTERBRECHUNG | 0 |
| 0x440021 | CANIF_E_INVALID_RXPDUID | 0 |
| 0x440075 | MCU_E_DMA_TIMEOUT | 0 |
| 0x440013 | ECUMA_RESET_CODETRAP | 0 |
| 0x440061 | FAN_CTR_KURZSCHLUSS | 0 |
| 0x440083 | CODING5_UNTERBRECHUNG | 0 |
| 0x440022 | CANTP_E_COMM | 0 |
| 0x440066 | CTR_MOD_FN_SPFLS_INVALID | 1 |
| 0x440037 | CNM_E_TX_PATH_FAILED | 0 |
| 0x44000C | SBC_E_CAN1_FAILURE | 0 |
| 0x440079 | CODING2_KURZSCHLUSS | 0 |
| 0x440026 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x440020 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x44000A | SBC_E_RESETCLAMP | 0 |
| 0x440054 | NTC4_UNTERBRECHUNG | 0 |
| 0x44003D | NVM_E_REQ_FAILED | 0 |
| 0x440010 | FSFY_CPU_MAIN_DEFECT | 0 |
| 0x440081 | CODING3_UNTERBRECHUNG | 0 |
| 0x440025 | COMM_E_STOP_Tx_TIMEOUT_C1 | 0 |
| 0x440077 | GND_KURZSCHLUSS_AN_KATHODE | 0 |
| 0x440014 | ECUMA_RESET_ILEGADR | 0 |
| 0x440072 | MCU_E_FLASH_ERROR | 0 |
| 0x440058 | FUSI_LEISTUNGSPLAUSIB1 | 0 |
| 0x44002E | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x44004E | NTC3_KURZSCHLUSS | 0 |
| 0x440062 | FAN_CTR_FEHLER | 0 |
| 0x440039 | CANIF_E_STOPPED | 0 |
| 0x440084 | CODING6_UNTERBRECHUNG | 0 |
| 0x440036 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x440069 | CTR_FN_FMH_INVALID | 1 |
| 0x44001F | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x44001A | WDG_E_MISS_TRIGGER | 0 |
| 0x440076 | ADC_E_TIMEOUT | 0 |
| 0x440023 | LINIF_E_RESPONSE | 0 |
| 0x440005 | SBC_E_OVERTEMPPREWARNING | 0 |
| 0x440024 | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 |
| 0x44007D | CODING6_KURZSCHLUSS | 0 |
| 0x44005B | DAUERSPANNUNG_AN_KATHODE | 0 |
| 0x44004B | KANAL7_DEFEKT | 0 |
| 0x440015 | NM_E_NETWORK_TIMEOUT | 0 |
| 0x440047 | KANAL3_DEFEKT | 0 |
| 0x440008 | SBC_E_SPI_FAIL_ERR | 0 |
| 0x440011 | SWSEC_REGMON_SYS_REG | 0 |
| 0x44003B | CANIF_E_INVALID_TXPDUID | 0 |
| 0x440052 | NTC2_UNTERBRECHUNG | 0 |
| 0x440042 | PIA_E_IO_ERROR | 0 |
| 0x44006B | CTR_FN_WELL_INVALID | 1 |
| 0x440064 | FAN_SUPPLY_UNTERBRECHUNG | 0 |
| 0x44001C | MCU_E_CLOCK_FAILURE | 0 |
| 0x440071 | MCU_E_LVD45_EVENT | 0 |
| 0x440018 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x44005A | SBC_E_UV_RESET | 0 |
| 0x44003E | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x44004C | NTC1_KURZSCHLUSS | 0 |
| 0x44000E | FSFY_INTERNAL_ECU_SW_FAILURE | 0 |
| 0x44007F | CODING1_UNTERBRECHUNG | 0 |
| 0x440043 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x44002A | COMM_E_START_Tx_TIMEOUT_C1 | 0 |
| 0x44002D | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x440002 | ECUM_E_RAM_CHECK_FAILED | 0 |
| 0x440074 | MCU_E_JTAG_RESET_EVENT | 0 |
| 0x440060 | FAN_CTR_UNTERBRECHUNG | 0 |
| 0x440028 | WDGM_E_SET_MODE | 0 |
| 0x440085 | CODING7_UNTERBRECHUNG | 0 |
| 0x44000B | SBC_E_WRONG_WD_SET | 0 |
| 0x440030 | FRIF_E_JLE_SYNC | 0 |
| 0x440067 | CTR_PHA_FN_SPFLS_INVALID | 1 |
| 0x44005D | SAFESTATE_LOWBEAM_ACTIVE | 0 |
| 0x440050 | NTC5_KURZSCHLUSS | 0 |
| 0x440017 | SPI_E_DATA_FAILURE | 0 |
| 0x440029 | COMM_E_NET_START_IND_CHANNEL_1 | 0 |
| 0x44007B | CODING4_KURZSCHLUSS | 0 |
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
| LEUCHTEN_FUNKTIONSTEST_LED_SCHEINWERFER | 0xA534 | - | Funktionscheck LED-Scheinwerfer | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA534 |
| LEUCHTEN_LHM_SENSE | 0xD513 | - | Strom-/ Spanungswerte LHM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD513 |
| LEUCHTEN_BETRIEBSDAUER_LHM | 0xD514 | - | Betriebsdauer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD514 | RES_0xD514 |
| LEUCHTEN_BINNING_LED | 0xD515 | - | Binningwerte LED | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD515 |
| LHM_TEMPERATURSENSOR_1 | 0xD523 | STAT_TEMP_1_SCHEINWERFER_WERT | Temperatur Scheinwefer (Fühlerwert 1) | °C | - | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| LHM_TEMPERATURSENSOR_2 | 0xD524 | STAT_TEMP_2_SCHEINWERFER_WERT | Temperatur Scheinwefer (Fühlerwert 2) | °C | - | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| LHM_TEMPERATURSENSOR_3 | 0xD525 | STAT_TEMP_3_SCHEINWERFER_WERT | Temperatur Scheinwefer (Fühlerwert 3) | °C | - | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| LHM_TEMPERATURSENSOR_4 | 0xD526 | STAT_TEMP_4_SCHEINWERFER_WERT | Temperatur Scheinwefer (Fühlerwert 4) | °C | - | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| LHM_TEMPERATURSENSOR_INTERN | 0xD527 | STAT_TEMP_INTERN_SCHEINWERFER_WERT | Temperatur Scheinwefer (Fühlerwert intern) | °C | - | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| LEUCHTEN_AUSSENLICHT_TEMP | 0xD53F | - | Status Temperatur LED-Scheinwerfer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD53F |
| LEUCHTEN_AUSSENLICHT_LUEFTER | 0xD5BF | - | STATUS/STEUERN Luefter 1 und 2 Aussenlicht | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD5BF | RES_0xD5BF |
| LEUCHTEN_AUSSENLICHT_AUSSTATTUNG | 0xD5DA | - | Ausgabe des codierten Fahrzeugs und vorhandenen Lichtfunktionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5DA |
| LEUCHTEN_AUSSENLICHT_TEMP_HISTOGRAMM | 0xD5DF | - | Zählerstande der Temperatorhistogramme | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD5DF | RES_0xD5DF |
| _LEUCHTEN_AUSSENLICHT_KANAELE | 0x6060 | - | Status/Steuern Kanaele | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x6060 | RES_0x6060 |
| _STATUS_FUSI_DATEN | 0x6066 | - | for FUSI testing | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6066 |
| _STEUERN_FUSI_CRC | 0x6067 | - | for FUSI testing | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6067 | - |
| _STEUERN_FUSI_LED | 0x6068 | - | for FUSI testing | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6068 | - |

### ARG_0XD514

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_KANAELE_LHM2 | 1.0 | 1.0 | 0.0 | - | - | Auswahl des LED Kanals |

### ARG_0XD5BF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEISTUNG | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe der Leistung von 0% bis 100% |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Zeitvorgabe in Sekunden von 1s bis 255s |

### ARG_0XD5DF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1...Histogramm löschen |

### RES_0XA534

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKTIONSTEST_KANAL_1 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_KANAL_2 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_KANAL_3 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_KANAL_4 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_KANAL_5 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_KANAL_6 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_KANAL_7 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_LUEFTER | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_BINNING | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_NTC | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |
| STAT_FUNKTIONSTEST_LI_RE_ERKENNUNG | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis Funktionstest: 1: kein Fehler 0: Fehler |

### RES_0XD513

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL_30_ISENSE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom Pfad |
| STAT_KL_30_SENSE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Versorgung |
| STAT_VF1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Pfad 1 |

### RES_0XD514

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KANAL_1_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 1 in Minuten |
| STAT_KANAL_2_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 2 in Minuten |
| STAT_KANAL_3_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 3 in Minuten |
| STAT_KANAL_4_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 4 in Minuten |
| STAT_KANAL_5_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 5 in Minuten |
| STAT_KANAL_6_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 6 in Minuten |
| STAT_KANAL_7_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Kanal 7 in Minuten |
| STAT_LUEFTER_WERT | min | high | unsigned long | - | - | 1.0 | 6.0 | 0.0 | Betriebsdauer Lüfter in Minuten |

### RES_0XD515

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BINNING_KLASSE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 1 |
| STAT_BINNING_KLASSE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 2 |
| STAT_BINNING_KLASSE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 3 |
| STAT_BINNING_KLASSE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 4 |
| STAT_BINNING_KLASSE_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 5 |
| STAT_BINNING_KLASSE_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 6 |
| STAT_BINNING_KLASSE_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand BINNING Klasse 7 |

### RES_0XD53F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_1_SCHEINWERFER_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur Scheinwefer (Fühlerwert 1) |
| STAT_TEMP_2_SCHEINWERFER_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur Scheinwefer (Fühlerwert 2) |
| STAT_TEMP_3_SCHEINWERFER_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur Scheinwefer (Fühlerwert 3) |
| STAT_TEMP_4_SCHEINWERFER_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur Scheinwefer (Fühlerwert 4) |
| STAT_TEMP_5_SCHEINWERFER_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur Scheinwefer (Fühlerwert 5) |

### RES_0XD5BF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_VERSORGNG | 0/1 | high | unsigned char | - | - | - | - | - | Lüfterversorgung: 0: Lüfter 1+2 aus 1: Lüfter 1+2 ein |
| STAT_LUEFTER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller Tastwert der Lüfter in % |
| STAT_LUEFTER_1_DIAGNOSE | 0/1 | high | unsigned char | - | - | - | - | - | Lüfterdiagnose 0: kein Fehler 1: Fehler |
| STAT_LUEFTER_2_DIAGNOSE | 0/1 | high | unsigned char | - | - | - | - | - | Lüfterdiagnose 0: kein Fehler 1: Fehler |

### RES_0XD5DA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_FERNLICHT_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_STANDLICHT_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_TAGFAHRLICHT_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_FAHRTRICHTUNGSANZEIGE_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_ABBIEGELICHT_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_AKZENTLEUCHTE_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_SEITENMARKIERUNGSLEUCHTE_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |
| STAT_GEZIELTES_ANLEUCHTEN_VERBAU | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Leuchtmittel: 0x00 = nicht verbaut 0x01 = verbaut |

### RES_0XD5DF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_TEMPKLASSE_50_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich < 50 °C |
| STAT_SENSOR_1_TEMPKLASSE_50_60_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  50 °C - 60 °C |
| STAT_SENSOR_1_TEMPKLASSE_60_70_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  60 °C - 70 °C |
| STAT_SENSOR_1_TEMPKLASSE_70_80_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  70 °C - 80 °C |
| STAT_SENSOR_1_TEMPKLASSE_80_90_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  80 °C - 90 °C |
| STAT_SENSOR_1_TEMPKLASSE_90_100_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  90 °C - 100 °C |
| STAT_SENSOR_1_TEMPKLASSE_100_110_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  100 °C - 110 °C |
| STAT_SENSOR_1_TEMPKLASSE_110_120_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  110 °C - 120 °C |
| STAT_SENSOR_1_TEMPKLASSE_120_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  120 °C - 130 °C |
| STAT_SENSOR_1_TEMPKLASSE_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  > 130 °C |
| STAT_SENSOR_2_TEMPKLASSE_50_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich < 50 °C |
| STAT_SENSOR_2_TEMPKLASSE_50_60_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  50 °C - 60 °C |
| STAT_SENSOR_2_TEMPKLASSE_60_70_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  60 °C - 70 °C |
| STAT_SENSOR_2_TEMPKLASSE_70_80_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  70 °C - 80 °C |
| STAT_SENSOR_2_TEMPKLASSE_80_90_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  80 °C - 90 °C |
| STAT_SENSOR_2_TEMPKLASSE_90_100_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  90 °C - 100 °C |
| STAT_SENSOR_2_TEMPKLASSE_100_110_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  100 °C - 110 °C |
| STAT_SENSOR_2_TEMPKLASSE_110_120_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  110 °C - 120 °C |
| STAT_SENSOR_2_TEMPKLASSE_120_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  120 °C - 130 °C |
| STAT_SENSOR_2_TEMPKLASSE_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  > 130 °C |
| STAT_SENSOR_3_TEMPKLASSE_50_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich < 50 °C |
| STAT_SENSOR_3_TEMPKLASSE_50_60_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  50 °C - 60 °C |
| STAT_SENSOR_3_TEMPKLASSE_60_70_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  60 °C - 70 °C |
| STAT_SENSOR_3_TEMPKLASSE_70_80_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  70 °C - 80 °C |
| STAT_SENSOR_3_TEMPKLASSE_80_90_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  80 °C - 90 °C |
| STAT_SENSOR_3_TEMPKLASSE_90_100_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   90 °C - 100 °C |
| STAT_SENSOR_3_TEMPKLASSE_100_110_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   100 °C - 110 °C |
| STAT_SENSOR_3_TEMPKLASSE_110_120_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  110 °C - 120 °C |
| STAT_SENSOR_3_TEMPKLASSE_120_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   120 °C - 130 °C |
| STAT_SENSOR_3_TEMPKLASSE_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   > 130 °C |
| STAT_SENSOR_4_TEMPKLASSE_50_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  < 50 °C |
| STAT_SENSOR_4_TEMPKLASSE_50_60_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   50 °C - 60 °C |
| STAT_SENSOR_4_TEMPKLASSE_60_70_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   60 °C - 70 °C |
| STAT_SENSOR_4_TEMPKLASSE_70_80_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   70 °C - 80 °C |
| STAT_SENSOR_4_TEMPKLASSE_80_90_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   80 °C - 90 °C |
| STAT_SENSOR_4_TEMPKLASSE_90_100_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   90 °C - 100 °C |
| STAT_SENSOR_4_TEMPKLASSE_100_110_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   100 °C - 110 °C |
| STAT_SENSOR_4_TEMPKLASSE_110_120_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  110 °C - 120 °C |
| STAT_SENSOR_4_TEMPKLASSE_120_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   120 °C - 130 °C |
| STAT_SENSOR_4_TEMPKLASSE_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  > 130 °C |
| STAT_SENSOR_5_TEMPKLASSE_50_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich  < 50 °C |
| STAT_SENSOR_5_TEMPKLASSE_50_60_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   50 °C - 60 °C |
| STAT_SENSOR_5_TEMPKLASSE_60_70_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   60 °C - 70 °C |
| STAT_SENSOR_5_TEMPKLASSE_70_80_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   70 °C - 80 °C |
| STAT_SENSOR_5_TEMPKLASSE_80_90_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   80 °C - 90 °C |
| STAT_SENSOR_5_TEMPKLASSE_90_100_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   90 °C - 100 °C |
| STAT_SENSOR_5_TEMPKLASSE_100_110_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   100 °C - 110 °C |
| STAT_SENSOR_5_TEMPKLASSE_110_120_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   110 °C - 120 °C |
| STAT_SENSOR_5_TEMPKLASSE_120_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   120 °C - 130 °C |
| STAT_SENSOR_5_TEMPKLASSE_130_WERT | min | high | unsigned long | - | - | 1.0 | 2.0 | 0.0 | Temperaturbereich   > 130 °C |

### ARG_0X6060

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KANAL1_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 1 (0-250; 250 = 100% PWM) |
| KANAL2_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 2 (0-250; 250 = 100% PWM) |
| KANAL3_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 3 (0-250; 250 = 100% PWM) |
| KANAL4_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 4 (0-250; 250 = 100% PWM) |
| KANAL5_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 5 (0-250; 250 = 100% PWM) |
| KANAL6_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 6 (0-250; 250 = 100% PWM) |
| KANAL7_HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Helligkeitswert Kanal 7 (0-250; 250 = 100% PWM) |
| KANAL1_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 1  Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |
| KANAL2_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 2. Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |
| KANAL3_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 3. Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |
| KANAL4_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 4. Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |
| KANAL5_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 5. Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |
| KANAL6_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 6. Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |
| KANAL7_STROM | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Vorgabe Stromwert in mA für Kanal 7. Bei Übergabe des Wertes  FF  wird der über die Binningcodierung codierte Stromwert verwendet. |

### ARG_0X6067

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DURATION | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Time, specified in 0.1 seconds, e.g.  2.7 . |

### ARG_0X6068

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUSI_COMPONENT_NR | 0-n | high | unsigned char | - | TAB_FUSI_COMPONENT | - | - | - | - | - | Specifies FuSi component 1 or 2 |
| DURATION | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Time, specified in 0.1 seconds, e.g.  2.7 . |

### RES_0X6060

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_KANAL_1_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_2_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_3_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_4_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_5_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_6_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_7_PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Tastverhältnis, 8-Bit-Wert (255 = 100%) |
| STAT_LED_KANAL_1_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 1 |
| STAT_LED_KANAL_2_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 2 |
| STAT_LED_KANAL_3_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 3 |
| STAT_LED_KANAL_4_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 4 |
| STAT_LED_KANAL_5_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 5 |
| STAT_LED_KANAL_6_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 6 |
| STAT_LED_KANAL_7_STROM_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe des Stromwerts Kanal 7 |

### RES_0X6066

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CH1S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel1 SafetyModule1 Current |
| STAT_CH1S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel1 SafetyModule1 Intensity |
| STAT_CH1S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel1 SafetyModule2 Current |
| STAT_CH1S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel1 SafetyModule2 Intensity |
| STAT_CH1LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel1 Led Intensity |
| STAT_CH1LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel1 LED Current |
| STAT_CH2S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel2 SafetyModule1 Current |
| STAT_CH2S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel2 SafetyModule1 Intensity |
| STAT_CH2S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel2 SafetyModule2 Current |
| STAT_CH2S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel2 SafetyModule2 Intensity |
| STAT_CH2LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel2 Led Intensity |
| STAT_CH2LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel2 LED Current |
| STAT_CH3S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel3 SafetyModule1 Current |
| STAT_CH3S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel3 SafetyModule1 Intensity |
| STAT_CH3S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel3 SafetyModule2 Current |
| STAT_CH3S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel3 SafetyModule2 Intensity |
| STAT_CH3LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel3 Led Intensity |
| STAT_CH3LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel3 LED Current |
| STAT_CH4S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel4 SafetyModule1 Current |
| STAT_CH4S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel4 SafetyModule1 Intensity |
| STAT_CH4S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel4 SafetyModule2 Current |
| STAT_CH4S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel4 SafetyModule2 Intensity |
| STAT_CH4LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel4 Led Intensity |
| STAT_CH4LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel4 LED Current |
| STAT_CH5S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel5 SafetyModule1 Current |
| STAT_CH5S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel5 SafetyModule1 Intensity |
| STAT_CH5S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel5 SafetyModule2 Current |
| STAT_CH5S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel5 SafetyModule2 Intensity |
| STAT_CH5LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel5 Led Intensity |
| STAT_CH5LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel5 LED Current |
| STAT_CH6S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel6 SafetyModule1 Current |
| STAT_CH6S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel6 SafetyModule1 Intensity |
| STAT_CH6S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel6 SafetyModule2 Current |
| STAT_CH6S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel6 SafetyModule2 Intensity |
| STAT_CH6LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel6 Led Intensity |
| STAT_CH6LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel6 LED Current |
| STAT_CH7S1CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel7 SafetyModule1 Current |
| STAT_CH7S1INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel7 SafetyModule1 Intensity |
| STAT_CH7S2CURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel7 SafetyModule2 Current |
| STAT_CH7S2INT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel7 SafetyModule2 Intensity |
| STAT_CH7LEDINT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel7 Led Intensity |
| STAT_CH7LEDCURR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel7 LED Current |
| STAT_SAFETYSTATE1_SAFEACTIVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SAFETYSTATE1_SAFEACTIVE_WERT |
| STAT_SAFETYSTATE2_SAFEACTIVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SAFETYSTATE2_SAFEACTIVE_WERT |

### TAB_KANAELE_LHM2

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Kanäle |
| 0x01 | Kanal 1 |
| 0x02 | Kanal 2 |
| 0x03 | Kanal 3 |
| 0x04 | Kanal 4 |
| 0x05 | Kanal 5 |
| 0x06 | Kanal 6 |
| 0x07 | Kanal 7 |
| 0x08 | Lüfter |

### TAB_FUSI_COMPONENT

| WERT | TEXT |
| --- | --- |
| 1 | FuSi component 1 |
| 2 | FuSi component 2 |
