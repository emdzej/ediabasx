# ihkarr4.prg

## General

|  |  |
| --- | --- |
| File | ihkarr4.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 113 |
| Origin | BMW EI-541 Sapmaz |
| Revision | 3.002 |
| Author | Preh 1713 Holzheimer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Heiz-Klima-Anlage+Centerstack+Bookmark |  |  |
| ORIGIN | string | BMW EI-541 Sapmaz |  |  |
| REVISION | string | 3.002 |  |  |
| AUTHOR | string | Preh 1713 Holzheimer |  |  |
| COMMENT | string |  |  |  |
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

### STEUERN_HWAP

Beschreibung Es muessen immer alle vier Argumente für die HWAP Identifier von 0-255 bzw. 0x00-0xFF uebergeben werden. Die Version wird automatisch mit 0xFF besetzt UDS  : $2E   WriteDataByIdentifier UDS  : $4002 STEUERN_HWAP Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | HWAP Identifier[1] Wert hex |
| BYTE2 | int | HWAP Identifier[2] Wert hex |
| BYTE3 | int | HWAP Identifier[3] Wert hex |
| BYTE4 | int | HWAP Identifier[4] Wert hex |

### _FBM_VERSION

UDS  : $22   ReadDataByIdentifier UDS  : $400C FBM Version Modus: Default

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
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Fertigungsmode: HHS, Gebläse, MAG, Standlüften, PATT, ZWP+WV, PTC deaktiviert |
| 0x01 | Spezieller Energiesparmode | Fertigungsmode: HHS, Gebläse, MAG, Standlüften, PATT, ZWP+WV, PTC deaktiviert |
| 0x02 | ECOS-Mode | Fertigungsmode: PATT deaktiviert |
| 0x03 | MOST-Mode | Fertigungsmode: HHS, Gebläse, MAG, Standlüften, PATT, ZWP+WV, PTC deaktiviert |
| 0x04 | Betriebsmode 4 | Fertigungsmode: HHS, Gebläse, Standlüften deaktiviert |
| 0x05 | Betriebsmode 5 | Fertigungsmode: HHS, Gebläse deaktiviert |
| 0x06 | Rollenmode | keine Deaktivierung |
| 0x07 | Betriebsmode 7 | keine Deaktivierung |
| 0x08 | Betriebsmode 8 | keine Deaktivierung |
| 0x09 | Betriebsmode 9 | keine Deaktivierung |
| 0x0A | Betriebsmode 10 | keine Deaktivierung |
| 0x0B | Betriebsmode 11 | keine Deaktivierung |
| 0x0C | Betriebsmode 12 | keine Deaktivierung |
| 0x0D | Betriebsmode 13 | keine Deaktivierung |
| 0x0E | Betriebsmode 14 | keine Deaktivierung |
| 0x0F | Betriebsmode 15 | keine Deaktivierung |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x801180 | Motor Entfrostung: Intitialisierungsfehler | 0 |
| 0x801181 | Motor Entfrostung:  interner Motorfehler | 0 |
| 0x801182 | Motor Entfrostung:  Blockierung | 0 |
| 0x801183 | Motor Belüftung links außen: Intitialisierungsfehler | 0 |
| 0x801184 | Motor Belüftung links außen: interner Motorfehler | 0 |
| 0x801185 | Motor Belüftung links außen: Blockierung | 0 |
| 0x801186 | Motor Belüftung links mitte: Intitialisierungsfehler | 0 |
| 0x801187 | Motor Belüftung links mitte: interner Motorfehler | 0 |
| 0x801188 | Motor Belüftung links mitte: Blockierung | 0 |
| 0x801189 | Motor Belüftung rechts mitte: Intitialisierungsfehler | 0 |
| 0x80118A | Motor Belüftung rechts mitte: interner Motorfehler | 0 |
| 0x80118B | Motor Belüftung rechts mitte: Blockierung | 0 |
| 0x80118C | Motor Belüftung rechts außen: Intitialisierungsfehler | 0 |
| 0x80118D | Motor Belüftung rechts außen: interner Motorfehler | 0 |
| 0x80118E | Motor Belüftung rechts außen: Blockierung | 0 |
| 0x80118F | Motor Fußraum vorn links: Intitialisierungsfehler | 0 |
| 0x801190 | Motor Fußraum vorn links: interner Motorfehler | 0 |
| 0x801191 | Motor Fußraum vorn links: Blockierung | 0 |
| 0x801192 | Motor Fußraum vorn rechts:  Intitialisierungsfehler | 0 |
| 0x801193 | Motor Fußraum vorn rechts:  interner Motorfehler | 0 |
| 0x801194 | Motor Fußraum vorn rechts:  Blockierung | 0 |
| 0x801195 | Motor Fußraum hinten links: Intitialisierungsfehler | 0 |
| 0x801196 | Motor Fußraum hinten links: interner Motorfehler | 0 |
| 0x801197 | Motor Fußraum hinten links: Blockierung | 0 |
| 0x801198 | Motor Fußraum hinten rechts: Intitialisierungsfehler | 0 |
| 0x801199 | Motor Fußraum hinten rechts: interner Motorfehler | 0 |
| 0x80119A | Motor Fußraum hinten rechts: Blockierung | 0 |
| 0x80119B | Motor Schichtung vorn links:  Intitialisierungsfehler | 0 |
| 0x80119C | Motor Schichtung vorn links:  interner Motorfehler | 0 |
| 0x80119D | Motor Schichtung vorn links:  Blockierung | 0 |
| 0x80119E | Motor Schichtung vorn rechts: Intitialisierungsfehler | 0 |
| 0x80119F | Motor Schichtung vorn rechts: interner Motorfehler | 0 |
| 0x8011A0 | Motor Schichtung vorn rechts: Blockierung | 0 |
| 0x8011A1 | Motor Schichtung hinten links: Intitialisierungsfehler | 0 |
| 0x8011A2 | Motor Schichtung hinten links: interner Motorfehler | 0 |
| 0x8011A3 | Motor Schichtung hinten links: Blockierung | 0 |
| 0x8011A4 | Motor Schichtung hinten rechts:  Intitialisierungsfehler | 0 |
| 0x8011A5 | Motor Schichtung hinten rechts:  interner Motorfehler | 0 |
| 0x8011A6 | Motor Schichtung hinten rechts:  Blockierung | 0 |
| 0x8011A7 | Motor Frischluft/Staudruck:  Intitialisierungsfehler | 0 |
| 0x8011A8 | Motor Frischluft/Staudruck:  interner Motorfehler | 0 |
| 0x8011A9 | Motor Frischluft/Staudruck:  Blockierung | 0 |
| 0x8011AA | Motor Umluft: Intitialisierungsfehler | 0 |
| 0x8011AB | Motor Umluft: interner Motorfehler | 0 |
| 0x8011AC | Motor Umluft: Blockierung | 0 |
| 0x8011AD | Fühler Innentemperatur:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011AE | Fühler Innentemperatur:  Kurzschluß nach Minus | 0 |
| 0x8011AF | Verdampfertemperaturfühler:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B0 | Verdampfertemperaturfühler:  Kurzschluß nach Minus | 0 |
| 0x8011B1 | Fühler Wärmetauscher links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B2 | Fühler Wärmetauscher links:  Kurzschluß nach Minus | 0 |
| 0x8011B3 | Fühler Wärmetauscher rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B4 | Fühler Wärmetauscher rechts:  Kurzschluß nach Minus | 0 |
| 0x8011B5 | Fühler Belüftungstemperatur links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B6 | Fühler Belüftungstemperatur links:  Kurzschluß nach Minus | 0 |
| 0x8011B7 | Fühler Belüftungstemperatur rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B8 | Fühler Belüftungstemperatur rechts:  Kurzschluß nach Minus | 0 |
| 0x8011C1 | FBM-Taste 1:  Taste klemmt | 0 |
| 0x8011C2 | FBM-Taste 2: Taste klemmt | 0 |
| 0x8011C3 | FBM-Taste 3:  Taste klemmt | 0 |
| 0x8011C4 | FBM-Taste 4: Taste klemmt | 0 |
| 0x8011C5 | FBM-Taste 5:  Taste klemmt | 0 |
| 0x8011C6 | FBM-Taste 6:  Taste klemmt | 0 |
| 0x8011C7 | FBM-Taste 7: Taste klemmt | 0 |
| 0x8011C8 | FBM-Taste 8- Taste klemmt | 0 |
| 0x8011C9 | Eject-Taste:  Taste klemmt | 0 |
| 0x8011CA | MODE-Taste:  Taste klemmt | 0 |
| 0x8011CB | TP, AM/FM, TRF-Taste:  Taste klemmt | 0 |
| 0x8011CC | Wippe links-Taste:  Taste klemmt | 0 |
| 0x8011CD | Wippe rechts-Taste:  Taste klemmt | 0 |
| 0x8011CE | ON/OFF-Lautstaerke-Regler: Taste klemmt | 0 |
| 0x8011CF | FBM nicht angeschlossen | 0 |
| 0x8011F6 | PTC-Modul: Kurzschluß Heizstrang | 0 |
| 0x8011F7 | PTC-Modul: Unterbrechung Heizstrang | 0 |
| 0x8011F8 | PTC-Modul: Übertemperatur an Leiterplatte | 0 |
| 0x8011F9 | PTC-Modul: Interner Komponentenfehler | 0 |
| 0x8011FA | PTC-Modul: Unterspannung | 1 |
| 0x8011FB | PTC-Modul: Überspannung  | 1 |
| 0x8011FC | PATT-Modul, Signaleitung; Kurzschluß nach Plus | 0 |
| 0x8011FD | PATT-Modul, Signaleitung: Kurzschluß nach Minus oder Unterbrechung | 0 |
| 0x8011FE | PATT-Modul reagiert nicht oder nicht angeschlossen. (fehlendes Alive-Signal) | 0 |
| 0x8011FF | PATT- irreversible Modulfehler | 0 |
| 0x801201 | Patt-Modul: reversibler Fehler | 1 |
| 0x801202 | Gebläseendstufe: Defekte Freilaufdiode | 0 |
| 0x801203 | Gebläseendstufe: Blockierter Motor  | 1 |
| 0x801204 | Gebläseendstufe: Kurzschluß im Lastkreis | 0 |
| 0x801205 | Gebläseendstufe: Übertemperatur an Leiterplatte | 1 |
| 0x801206 | Gebläseendstufe: Unter-/Überspannung  | 1 |
| 0x801207 | Gebläseendstufe: Unterbrechung im Lastkreis | 0 |
| 0x801208 | Gebläseendstufe: Überlast am Gebläsemotor | 0 |
| 0x801209 | LIN-Bus Versorgung: Kurzschluß gegen Masse | 0 |
| 0x80120A | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 |
| 0x80120B | Innenfühlergebläse: Motor blockiert | 0 |
| 0x80120C | Interner Steuergerätefehler | 1 |
| 0x80120D | Unterspannung erkannt | 1 |
| 0x80120E | Überspannung erkannt | 1 |
| 0x80120F | keine Kommunikation über AC_LIN1 möglich | 1 |
| 0x801211 | Steuergerät wurde nach dem Flashen nicht codiert | 1 |
| 0x801212 | Die während einer Codierdatentransaktion gesendeten Daten sind unplausibel | 0 |
| 0x801213 | Signatur über Nettocodierdaten ist ungültig | 0 |
| 0x801214 | Steuergerät ist nicht für das Fahrzeugcodiert, in welchen es verbaut ist | 0 |
| 0x801215 | Fehler während der Codierdatentransaktion aufgetreten | 0 |
| 0x801222 | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 |
| 0x801223 | Kompressor: Abschaltung wegen funktionsbedingter Randbedingungen | 1 |
| 0x801224 | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 |
| 0x801225 | Kompressor: Abschaltung wegen Unterdruck im Kältemittelkreislauf | 0 |
| 0x80122C | Kalibrierung der Wahlräder nicht vollständig durchgeführt | 0 |
| 0x80122D | Wahlrad Temperatur vorne links oben: Kurzschluss nach Masse | 0 |
| 0x80122E | Wahlrad Temperatur vorne links oben: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80122F | Wahlrad Temperatur vorne links unten: Kurzschluss nach Masse | 0 |
| 0x801230 | Wahlrad Temperatur vorne links unten: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801231 | Wahlrad Temperatur vorne rechts oben: Kurzschluss nach Masse | 0 |
| 0x801232 | Wahlrad Temperatur vorne rechts oben: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801233 | Wahlrad Temperatur vorne rechts unten: Kurzschluss nach Masse | 0 |
| 0x801234 | Wahlrad Temperatur vorne rechts unten: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801235 | Wahlrad Klimastil vorne links: Kurzschluss nach Masse | 0 |
| 0x801236 | Wahlrad Klimastil vorne links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801237 | Wahlrad Klimastil vorne rechts: Kurzschluss nach Masse | 0 |
| 0x801238 | Wahlrad Klimastil vorne rechts:: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80123D | VCC Peripherie: Abschaltung wegen Überspannung | 0 |
| 0x80123E | VCC Peripherie: Abschaltung wegen Unterspannung | 0 |
| 0x80123F | Poti Versorgung: Abschaltung wegen Spannung über 6 Volt | 0 |
| 0x801240 | Poti Versorgung: Abschaltung wegen Spannung unter 4 Volt | 0 |
| 0x801241 | Plungerpotentiometer links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801242 | Plungerpotentiometer links:  Kurzschluß nach Minus | 0 |
| 0x801243 | Plungerpotentiometer rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801244 | Plungerpotentiometer rechts:  Kurzschluß nach Minus | 0 |
| 0x801245 | CID-Taste:  Taste klemmt | 0 |
| 0x801246 | Baugruppe Klimatasten: Klimatasten nicht angeschlossen | 0 |
| 0x80124F | KL30 Peripherie: Abschaltung wegen Überspannung | 0 |
| 0x801250 | KL30 Peripherie: Abschaltung wegen Unterspannung oder Übertemperatur | 0 |
| 0x801253 | Heiz/Klimasystem: Leistung reduziert aufgrund Verbraucherreduzierung | 1 |
| 0x801300 | FKA, Wahlrad Temperatur hinten links oben: Kurzschluss nach Masse | 0 |
| 0x801301 | FKA, Wahlrad Temperatur hinten links oben: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801302 | FKA, Wahlrad Temperatur hinten links unten: Kurzschluss nach Masse | 0 |
| 0x801303 | FKA, Wahlrad Temperatur hinten links unten: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801304 | FKA, Wahlrad Temperatur hinten rechts oben: Kurzschluss nach Masse | 0 |
| 0x801305 | FKA, Wahlrad Temperatur hinten rechts oben: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801306 | FKA, Wahlrad Temperatur hinten rechts unten: Kurzschluss nach Masse | 0 |
| 0x801307 | FKA, Wahlrad Temperatur hinten rechts unten: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801308 | FKA, Wahlrad Klimastil hinten: Kurzschluss nach Masse | 0 |
| 0x801309 | FKA, Wahlrad Klimastil hinten:: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801316 | FKA, Innenfühlergebläse: Motor blockiert | 0 |
| 0x801317 | FKA, PWM-Signal, Gebläseendstufe hinten: Kurzschluß nach Plus | 0 |
| 0x801318 | FKA, PWM-Signal, Gebläseendstufe hinten: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x801319 | FKA, Fühler Belüftungstemperatur links hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80131A | FKA, Fühler Belüftungstemperatur links hinten:  Kurzschluß nach Minus | 0 |
| 0x80131B | FKA, Fühler Belüftungstemperatur rechts hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80131C | FKA, Fühler Belüftungstemperatur rechts hinten:  Kurzschluß nach Minus | 0 |
| 0x80131D | FKA, Fühler Fussraum links hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80131E | FKA, Fühler Fussraum links hinten:  Kurzschluß nach Minus | 0 |
| 0x80131F | FKA, Fühler Fussraum rechts hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801320 | FKA, Fühler Fussraum rechts hinten:  Kurzschluß nach Minus | 0 |
| 0x801321 | FKA, Fühler Innentemperatur hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801322 | FKA, Fühler Innentemperatur hinten:  Kurzschluß nach Minus | 0 |
| 0x801323 | FKA VCC Peripherie: Abschaltung wegen Überspannung | 0 |
| 0x801324 | FKA VCC Peripherie: Abschaltung wegen Unterspannung | 0 |
| 0x801325 | FKA KL30 Peripherie: Abschaltung wegen Überspannung | 0 |
| 0x801326 | FKA KL30 Peripherie: Abschaltung wegen Unterspannung oder Übertemperatur | 0 |
| 0x801327 | FKA, PTC-Modul hinten links: Kurzschluß nach Plus der PWM-Leitung | 0 |
| 0x801328 | FKA, PTC-Modul hinten links: Übertemperatur an Leiterplatte | 0 |
| 0x801329 | FKA, PTC-Modul hinten rechts: Kurzschluß nach Plus der PWM-Leitung | 0 |
| 0x80132A | FKA, PTC-Modul hinten rechts: Übertemperatur an Leiterplatte | 0 |
| 0x80132B | FKA, PTC-Modul hinten: Keine Ansteuerung wegen Unterspannung | 1 |
| 0x80132C | FKA, PTC-Modul hinten links: Kurzschluß oder interner PTC-Fehler | 0 |
| 0x80132D | FKA, PWM-Signal, PTC hinten links: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x80132E | FKA, PTC-Modul hinten rechts: Kurzschluß oder interner PTC-Fehler | 0 |
| 0x80132F | FKA, PWM-Signal, PTC hinten rechts: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x801330 | FKA, Schieberegister: Problem mit Sitzheizen- und Sitzlüften Tasten und Leds | 0 |
| 0xE7040B | K-CAN Bus: Defekt erkannt  | 0 |
| 0xE70414 | K-CAN: Control Module Bus OFF | 0 |
| 0xE70C1E | AC-LIN-1: Motor Entfrostung antwortet nicht | 0 |
| 0xE70C1F | AC-LIN-1: Motor Belüftung links außen antwortet nicht | 0 |
| 0xE70C20 | AC-LIN-1: Motor Belüftung links mitte antwortet nicht | 0 |
| 0xE70C21 | AC-LIN-1: Motor Belüftung rechts mitte antwortet nicht | 0 |
| 0xE70C22 | AC-LIN-1: Motor Belüftung rechts außen antwortet nicht | 0 |
| 0xE70C23 | AC-LIN-1: Motor Fußraum vorn links antwortet nicht | 0 |
| 0xE70C24 | AC-LIN-1: Motor Fußraum vorn rechts antwortet nicht | 0 |
| 0xE70C25 | AC-LIN-1: Motor Fußraum hinten links antwortet nicht | 0 |
| 0xE70C26 | AC-LIN-1: Motor Fußraum hinten rechts antwortet nicht | 0 |
| 0xE70C27 | AC-LIN-1: Motor Schichtung vorn links antwortet nicht | 0 |
| 0xE70C28 | AC-LIN-1: Motor Schichtung vorn rechts antwortet nicht | 0 |
| 0xE70C29 | AC-LIN-1: Motor Schichtung hinten links antwortet nicht | 0 |
| 0xE70C2A | AC-LIN-1: Motor Schichtung hinten rechts antwortet nicht | 0 |
| 0xE70C2B | AC-LIN-1: Motor Frischluft/Staudruck antwortet nicht | 0 |
| 0xE70C2C | AC-LIN-1: Motor Umluft antwortet nicht | 0 |
| 0xE70C2D | AC-LIN-1: Gebläseendstufe antwortet nicht | 0 |
| 0xE70C2E | AC-LIN-2: PTC-Modul antwortet nicht | 0 |
| 0xE70C32 | AC-LIN-3: FKA antwortet nicht | 0 |
| 0xE71400 | Botschaft (0x2CA, Außentemperatur): Ausfall | 1 |
| 0xE71401 | Botschaft (0x202, Dimmung): Ausfall | 1 |
| 0xE71402 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xE71403 | Botschaft (0x330, Kilometerstand/Reichweite): Ausfall | 1 |
| 0xE71404 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xE71405 | Botschaft (0x393, LCD Helligkeit Regelung): Ausfall | 1 |
| 0xE71406 | Botschaft (0x3B3, Powermanagement Verbrauchersteuerung): Ausfall | 1 |
| 0xE71407 | Botschaft (0x3D3, Status Solarsensor): Ausfall | 1 |
| 0xE71408 | Botschaft (0x22A, Status BFS): Ausfall | 1 |
| 0xE71409 | Botschaft (0x2D2 Status Druck Kältekreislauf): Ausfall | 1 |
| 0xE7140A | Botschaft (0x232, Status FAS): Ausfall | 1 |
| 0xE7140B | Botschaft (0x2D1, Status Beschlag Scheibe V): Ausfall | 1 |
| 0xE7140D | Botschaft (0x2D3, Status Schichtung Fond): Ausfall | 1 |
| 0xE7140E | Botschaft (0x2D0, Status Sensor AUC): Ausfall | 1 |
| 0xE71410 | Botschaft (0x2D6, Status Ventil Klimakompressor): Ausfall | 1 |
| 0xE71411 | Botschaft (0x2CF, Status Zusatzwasserpumpe): Ausfall | 1 |
| 0xE71413 | Botschaft (0x0A5, Drehmoment Kurbelwelle 1): Ausfall | 1 |
| 0xE71414 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE71415 | Botschaft (0x3FB, Daten Antriebsstrang 1): Ausfall | 1 |
| 0xE71416 | Botschaft (0x1B9, Wärmemanagement Motorsteuerung: Ausfall | 1 |
| 0xE71417 | Signal (Temperatur_Außen in 0x2CA): ungültig empfangen | 1 |
| 0xE71418 | Signal (Steuerung_Beleuchtung_Schalter in 0x202): ungültig empfangen | 1 |
| 0xE71419 | Signal (Status_Antrieb_Fahrzeug in 0x3F9): ungültig empfangen | 1 |
| 0xE7141A | Signal (Temperatur_Motor_Antrieb in 0x3F9): ungültig empfangen | 1 |
| 0xE7141B | Signal (Status_Klemme in 0x12F): ungültig empfangen | 1 |
| 0xE7141C | Signal (Status_Solarsensor_BF in 0x3D3): ungültig empfangen | 1 |
| 0xE7141D | Signal (Status_Solarsensor_FA in 0x3D3): ungültig empfangen | 1 |
| 0xE7141E | Signal (Status_Sitzheizung_BF in 0x22A): ungültig empfangen | 1 |
| 0xE7141F | Signal (Status_Sitzklima_BF in 0x22A): ungültig empfangen | 1 |
| 0xE71420 | Signal (Daten_Drucksensor_Kältekreislauf in 0x2D2): ungültig empfangen | 1 |
| 0xE71421 | Signal (Status_Sitzheizung_FA in 0x232): ungültig empfangen | 1 |
| 0xE71422 | Signal (Status_Sitzklima_FA in 0x232): ungültig empfangen | 1 |
| 0xE71423 | Signal (Daten_Beschlag_Scheibe_V in 0x2D1): ungültig empfangen | 1 |
| 0xE71427 | Signal (Daten_Schichtung_Fond_Klima in 0x2D3): ungültig empfangen | 1 |
| 0xE71428 | Signal (Status_Schichtung_Fond_Klima in 0x2D3): ungültig empfangen | 1 |
| 0xE71429 | Signal (Daten_Sensor_AUC in 0x2D0): ungültig empfangen | 1 |
| 0xE7142C | Signal (Status_Klima_Kompressor_Kupplung in 0x2D6): ungültig empfangen | 1 |
| 0xE7142D | Signal (Status_Zusatzwasserpumpe in 0x2CF): ungültig empfangen | 1 |
| 0xE71431 | Signal (Ist_Drehzahl_Motor_Kurbelwelle in 0x0A5): ungültig empfangen | 1 |
| 0xE71432 | Signal (Geschwindigkeit_Fahrzeug_Schwerpunkt in 0x1A1): ungültig empfangen | 1 |
| 0xE71433 | Signal (Ziel_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 |
| 0xE71434 | Signal (Dämpfung_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 |
| 0xE71435 | Signal (Steuerung_Leistung_Verbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71436 | Signal (Steuerung_Standverbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71437 | Signal (Steuerung_Leistung_Sonderverbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71438 | Signal Status_Wärmestrom_DME  in 0x1B9): ungültig empfangen | 1 |
| 0xE71439 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xE7143A | Botschaft (0x38C, Steuerung Klimakompressor): Ausfall | 1 |
| 0xE7143B | Signal (Freigabe_Klimakompressor in 0x38C): ungültig empfangen | 1 |
| 0xE7143C | Signal (Leistung_Klimakompressor_Maximal in 0x38C): ungültig empfangen | 1 |
| 0xE7143D | Botschaft (0x1FA, Status Hochvoltspeicher 1): Ausfall | 1 |
| 0xE7143E | Signal (Ist_Temperatur_Wärmetauscher_Hochvoltspeicher  in 0x1FA): ungültig empfangen | 1 |
| 0xE7143F | Signal (Anforderung_Kühlung_Hochvoltspeicher in 0x1FA): ungültig empfangen | 1 |
| 0xE71440 | Botschaft (0x389, Status Ventil Hochvoltbatterie-Kühlung): Ausfall | 1 |
| 0xE71441 | Signal (Status_Kälteabsperrventil_Klima in 0x389): ungültig empfangen | 1 |
| 0xE71442 | Botschaft (0x22E, Status BFSH): Ausfall | 1 |
| 0xE71443 | Botschaft (0x236, Status FASH): Ausfall | 1 |
| 0xE71444 | Signal (Status_Sitzklima_BFH in 0x22E): ungültig empfangen | 1 |
| 0xE71445 | Signal (Status_Sitzheizung_BFH in 0x22E): ungültig empfangen | 1 |
| 0xE71446 | Signal (Status_Sitzklima_FAH in 0x236): ungültig empfangen | 1 |
| 0xE71447 | Signal (Status_Sitzheizung_FAH in 0x236): ungültig empfangen | 1 |
| 0xE71448 | Botschaft (0x30B, Status Motor Start Auto): Ausfall | 1 |
| 0xE71449 | Signal (Status_Funktion_MSA in 0x30B): ungültig empfangen | 1 |
| 0xE7144A | Botschaft (0x1B2, Status Klima Kälteabsperrventile): Ausfall | 1 |
| 0xE7144B | Signal (Status_Kälteabsperrventil_Front in 0x1B2): ungültig empfangen | 1 |
| 0xE7144C | Signal (Status_Kälteabsperrventil_Fond in 0x1B2): ungültig empfangen | 1 |
| 0xE7144D | Signal (Daten_Temperatur_Scheibe_V in 0x2D1): ungültig empfangen | 1 |
| 0x027800 | Energiesparmode aktiv | 1 |
| 0x02FF78 | Debug Funktion Applikation | 1 |
| 0xE70BFF | Debug Funktion Netzwerk | 1 |
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
| 0x5000 | AUSSEN_TEMPERATUR | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x5001 | KUEHLMITTEL_TEMPERATUR | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x5002 | FUELLSTAND_TANK | Liter | - | unsigned char | - | 1 | 1 | 0 |
| 0x5003 | DRUCKSENSOR_WERT | bar | - | unsigned char | - | 1 | 2 | 0 |
| 0x5005 | DREHZAHL | U/min | - | unsigned char | - | 50 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x780000 | Fehler beim Eeprom Schreiben | 0 |
| 0x780001 | Fehler beim Eeprom  Lesen | 0 |
| 0x780002 | Fehler im Eeprom Control Bereich | 0 |
| 0x780003 | Fehler beim Eeprom Löschen | 0 |
| 0x780004 | Fehler beim Eeprom komplett schreiben | 0 |
| 0x780005 | Fehler beim Eeprom komplett lesen | 0 |
| 0x780006 | Fehler in der Konfigurations-ID des Eeprom | 0 |
| 0x780007 | Botschaft (Sekundenzähler Zeitbotschaft): Ausfall | 1 |
| 0x780008 | Diagnose Master Queue gelöscht | 1 |
| 0x780009 | Diagnose Master Queue voll | 1 |
| 0x78000A | CSM Error Event | 1 |
| 0x78000B | Reset wg. Überschreitung der Tasklaufzeit | 0 |
| 0x78000C | Spannungsreglerabschaltung fehlgeschlagen | 0 |
| 0x78000D | der externe Watchdog hat einen Reset ausgelöst | 0 |
| 0x78000E | es wurde ein Reset wg. des SWI-Interrupts ausgeführt | 0 |
| 0x78000F | es wurde ein Reset wg. des XIRQ-Interrupts ausgeführt | 0 |
| 0x780010 | es wurde ein Reset wg. eines ungültigen OP-Codes ausgeführt | 0 |
| 0x780011 | es wurde ein Reset wg. eines COP-Failure-Interrupts ausgeführt | 0 |
| 0x780012 | es wurde ein Reset wg. des Clock monitor Interrupts ausgeführt | 0 |
| 0x780013 | es wurde ein Reset wg. des CRG PLL lock-Interrupts ausgeführt | 0 |
| 0x780014 | es wurde ein Reset wg. des CRG self-clock mode-Interrupts ausgeführt | 0 |
| 0x780015 | es wurde ein Reset wg. eines nicht erwarteten Interrupts ausgeführt | 0 |
| 0x780016 | das Betriebssystem hat einen Reset wg. eines erkannten Fehlers ausgelöst | 0 |
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
| 0x5000 | AUSSEN_TEMPERATUR | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x5001 | KUEHLMITTEL_TEMPERATUR | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x5002 | FUELLSTAND_TANK | Liter | - | unsigned char | - | 1 | 1 | 0 |
| 0x5006 | ERROR_REASON | Nummer | - | unsigned char | - | 1 | 1 | 0 |
| 0x5007 | ERROR_PAR | Nummer | - | unsigned char | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| AUDIO_SKIP_EIN | 0xD8B3 | - | Auflisten Status Skip-Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8B3 |
| AUDIO_TASTE_EJECT_EIN | 0xD8B1 | STAT_TASTE_EJECT_EIN | Auflisten des Status der Audio-Tasten. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| AUDIO_TASTE_MODE_EIN | 0xD8B0 | STAT_TASTE_MODE_EIN | Auflisten Status Audio-Tasten. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| AUDIO_TASTE_ON_OFF_EIN | 0xD8B4 | STAT_TASTE_ON_OFF_EIN | Auflisten Status der Audio-Tasten. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| AUDIO_TASTE_TP_AM_FM_TRF_EIN | 0xD8B2 | STAT_TASTE_TP_AM_FM_TRF_EIN | Auflisten des Status der Audio-Tasten. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_AUC_SENSOR_WERT | 0xD964 | STAT_BUS_IN_AUC_SENSOR_WERT | - | Stufe | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_BESCHLAGSENSOR_WERT | 0xD966 | STAT_BUS_IN_BESCHLAGSENSOR_WERT | - | % | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_KAELTEMITTELDRUCK_WERT | 0xD968 | STAT_BUS_IN_R134A_DRUCK_WERT | - | bar | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_KOMPRESSORFREIGABE | 0xD960 | STAT_BUS_IN_KOMPRESSORFREIGABE_EIN | Gibt aus, ob die Motorelektronik die Klimakompressorfreigabe erteilt hat. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_SOLARSENSOR_WERT | 0xD962 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD962 |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Bus signal Aussentempertatur | °C | - | - | int | - | 1 | 2 | -40 | - | 22 | - | - |
| BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | 0xD91D | STAT_BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | - | % | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_OUT_WASSERVENTIL_PWM_WERT | 0xD89D | - | Bussignal Duo Wasserventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD89D |
| BUS_OUT_ZUSATZWASSERPUMPE_EIN | 0xD904 | STAT_BUS_OUT_ZUSATZWASSERPUMPE_EIN | Bussignal Zusatzwasserpumpe aktiv / nicht aktiv | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemmen 58G in Prozent | % | - | - | int | - | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | 1: Drucksensor verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder schreiben des  neuen Status. Erst nach vollständigem Einlauf  wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918 | RES_0xD918 |
| ENDLAGESCHALTER_MITTELGRILL_LI_RE | 0xD993 | - | Ausgabe des Status der Endlageschalter am Mittelgrill. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD993 |
| KALIBRIERUNG_WAHLRAEDER | 0xA110 | - | Kalibrierung der Wahlräder am Bedienteil zum Steuergerät. Nach Abschluss der Kalibrierung sind die Daten in einen nicht  flüchtigen Speicher zu schreiben. Die Zustandsänderungen der Kalibrierung  sind mit jedem Start und Ende in den nicht flüchtigen Speicher zu schreiben. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA110 |
| KLAPPENMOTOR_IDENT | 0xA111 | - | Auslesen der herstellerspezifischen Daten eines  Klappenmotors. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA111 | RES_0xA111 |
| KLAPPEN_VERSTELLBEREICH | 0xD980 | - | Auslesen des Verstellbereichs der einzelnen Klappen als Inkremente, die über den Eichlauf ermittelt werden konnten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD980 |
| KLIMA_HINTEN_GEBLAESELEISTUNG_WERT | 0xD884 | STAT_KLIMA_HINTEN_GEBLAESELEISTUNG_WERT | Gebläseleistung in % der Gebläseendstufe der FKA. | % | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_KLIMASTIL_SOLLWERT | 0xD996 | STAT_KLIMA_HINTEN_SOLLWERT_KLIMASTIL | Ausgabe des eingestellten Klimastils an dem Wahlrad für die Klimaanlage hinten. | 0-n | - | - | char | TAB_KLIMASTIL_STUFEN | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_OFF_EIN | 0xD881 | STAT_KLIMA_HINTEN_OFF_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_TEMP_OBEN_UNTEN_SOLLWERT | 0xD987 | - | Ausgabe der eingestellte Sollwert-Temperatur für oberen und unteren Bereich an den Wahlrädern (links und rechts) für die Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD987 |
| KLIMA_LIN_1_ADRESSEN | 0xD97B | - | Lesen aller ansprechbaren LIN-Adressen des LIN-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD97B |
| KLIMA_LIN_2_ADRESSEN | 0xD985 | - | Lesen aller ansprechbaren LIN-Adressen des LIN2-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD985 |
| KLIMA_VORN_GEBLAESELEISTUNG_WERT | 0xD93F | STAT_KLIMA_VORN_GEBLAESELEISTUNG_WERT | Ausgabe der tatsächlichen Gebläseleistung, mit  der die Gebläseendstufe angesteuert wird. 0 % = AUS 100 % = Maximale Gebläseleistung | % | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_KLIMASTIL_LI_RE_SOLLWERT | 0xD994 | - | Ausgabe des eingestellten Kliamstil an den Wahlrädern (links und rechts)  für die Klimaanlage vorn. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD994 |
| KLIMA_VORN_OFF_EIN | 0xD92C | STAT_KLIMA_VORN_OFF_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_AC_EIN | 0xD934 | STAT_KLIMA_VORN_PRG_AC_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_AUC_EIN | 0xD930 | STAT_KLIMA_VORN_PRG_AUC_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_DEFROST_EIN | 0xD92D | STAT_KLIMA_VORN_PRG_DEFROST_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_HHS_EIN | 0xD932 | STAT_KLIMA_VORN_PRG_HHS_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_KLIMASTIL_LI_RE | 0xD937 | - | Ausgabe der Soft-Intense Einstellungen am Bedienteil links und rechts in Stufen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD937 |
| KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0xD939 | STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_UMLUFT_EIN | 0xD931 | STAT_KLIMA_VORN_PRG_UMLUFT_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_TEMP_OBEN_UNTEN_SOLLWERT | 0xD986 | - | Ausgabe der eingestellten Sollwert-Temperatur für oberen und unteren Bereich an den Wahlrädern (links und rechts) für die Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD986 |
| KLP_POS_BELUEFTUNG_KNIE_LI_RE_WERT | 0xD955 | - | Auslesen des Soll- und Ist-Wert der Klappenpositionen der Kniebelüftung links und rechts (RR). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD955 |
| KLP_POS_BELUEFTUNG_LI_AUSSEN_WERT | 0xD945 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD945 |
| KLP_POS_BELUEFTUNG_LI_WERT | 0xD943 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD943 |
| KLP_POS_BELUEFTUNG_RE_AUSSEN_WERT | 0xD946 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD946 |
| KLP_POS_BELUEFTUNG_RE_WERT | 0xD944 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD944 |
| KLP_POS_DEFROST_WERT | 0xD941 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD941 |
| KLP_POS_FRISCHLUFT_WERT | 0xD94C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94C |
| KLP_POS_FUSSRAUM_LI_RE_WERT | 0xD948 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD948 |
| KLP_POS_FUSS_FOND_LI_RE_WERT | 0xD94F | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94F |
| KLP_POS_SCHICHTUNG_LI_WERT | 0xD94A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94A |
| KLP_POS_SCHICHTUNG_RE_WERT | 0xD94B | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94B |
| KLP_POS_SCHICHT_FOND_LI_RE_WERT | 0xD952 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD952 |
| KLP_POS_UMLUFT_WERT | 0xD94D | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94D |
| KONFIGURATION_KLIMA_VORN | 0xD866 | - | Konfiguration der Klimaanlage vorn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD866 |
| LED_VORN_DEFROST_EIN | 0xD921 | STAT_LED_VORN_DEFROST_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LED_VORN_HHS_EIN | 0xD920 | STAT_LED_VORN_HHS_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LED_VORN_KLIMA_OFF_EIN | 0xD99F | STAT_LED_VORN_KLIMA__OFF_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LED_VORN_UMLUFT_EIN | 0xD91F | STAT_LED_VORN_UMLUFT_EIN | Ermittlung der Anzeigezustände der LEDs am Bedienfeld. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| MOTOR_KALIBRIERLAUF | 0xD953 | - | Abfrage des aktuellen Status des Kalibrierlaufs der Klappenmotoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD953 |
| POTENTIOMETER_SEITENGRILL_LI_RE | 0xD98D | - | Ausgabe des Status der Potentiometer an den Seitengrills. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98D |
| ROHWERTE_WAHLRAEDER_KLIMA | 0xD997 | - | Rohwerte der Wahlräder am Bedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD997 |
| SCHRITTMOTOR_FEHLER | 0xD88E | - | Abfrage der Schrittmotor-Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD88E |
| SELBSTTEST_SCHRITTMOTORE | 0xD954 | STAT_SELBSTTEST_SCHRITTMOTORE_NR | Status Schrittmotorenselbsttests: 0 = nicht gestartet/nicht angefordert, 1 = Test läuft gerade, 2 = Test erfolgreich abgeschlossen, 3 = Test nicht erfolgreich abgeschlossen | 0-n | - | - | int | TAB_STATUS_SELBSTTEST | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_LED_LINKS | 0xD164 | - | Status LED-Anzeige Sitzheizung hinten links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD164 |
| SITZHEIZUNG_HINTEN_LED_RECHTS | 0xD163 | - | Status LED-Anzeige Sitzheizung hinten rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD163 |
| SITZHEIZUNG_HINTEN_TASTER_LINKS | 0xD161 | STAT_TASTER_SITZHEIZUNG_HINTEN_LINKS_EIN | 1: Taster Sitzheizung hinten links betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_RECHTS | 0xD162 | STAT_TASTER_SITZHEIZUNG_HINTEN_RECHTS_EIN | 1: Taster Sitzheizung hinten rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_VORNE_LED_LINKS | 0xD160 | - | Status LED-Anzeige Sitzheizung vorne links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD160 |
| SITZHEIZUNG_VORNE_LED_RECHTS | 0xD15F | - | Status LED-Anzeige Sitzheizung vorne rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD15F |
| SITZHEIZUNG_VORNE_TASTER_LINKS | 0xD15D | STAT_TASTER_SITZHEIZUNG_VORNE_LINKS_EIN | 1: Taster Sitzheizung vorne rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_RECHTS | 0xD15E | STAT_TASTER_SITZHEIZUNG_VORNE_RECHTS_EIN | 1: Taster Sitzheizung vorne rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_HINTEN_LED_LINKS | 0xD16C | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung hinten links. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD16C |
| SITZLUEFTUNG_HINTEN_LED_RECHTS | 0xD16B | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung hinten rechts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD16B |
| SITZLUEFTUNG_HINTEN_TASTER_LINKS | 0xD169 | STAT_TASTER_SITZLUEFTUNG_HINTEN_LINKS_EIN | Ausgabe des Status der Taste für die Einstellung der Sitzbelüftung hinten links. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_HINTEN_TASTER_RECHTS | 0xD16A | STAT_TASTER_SITZLUEFTUNG_HINTEN_RECHTS_EIN | Ausgabe des Status der Taste für die Einstellung der Sitzbelüftung hinten rechts. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_HINTEN_TASTER_VORHANDEN | 0xD86D | STAT_VORHANDEN_SITZLUEFTUNG_TASTER_HINTEN | Sitzbelüftung hinten vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_VORNE_LED_LINKS | 0xD168 | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung vorn links. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD168 |
| SITZLUEFTUNG_VORNE_LED_RECHTS | 0xD167 | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung vorn rechts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD167 |
| SITZLUEFTUNG_VORNE_TASTER_LINKS | 0xD165 | STAT_TASTER_SITZLUEFTUNG_VORNE_LINKS_EIN | Ausgabe des Status der Taste für die Einstellung der Sitzbelüftung vorn links. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_VORNE_TASTER_RECHTS | 0xD166 | STAT_TASTER_SITZLUEFTUNG_VORNE_RECHTS_EIN | Ausgabe des Status der Taste für die Einstellung der Sitzbelüftung vorn rechts. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_VORN_TASTER_VORHANDEN | 0xD90F | STAT_VORHANDEN_SITZLUEFTUNG_TASTER_VORNE | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | 1: Solarsensor vorhanden / codiert | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SOLLWERT_PTC_MODULE_HINTEN | 0xD871 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD871 |
| SPANNUNG_KLEMME_30F_WERT | 0xDADB | STAT_SPANNUNG_KLEMME_30F_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_PATT | 0xD917 | STAT_PATT_FUNKTION_NR | Auslesen der Funktionszustände PATT AUS. | 0-n | - | - | int | TAB_PATT_FUNKTION | - | - | - | - | 22 | - | - |
| STEUERN_AUDIO_TASTEN | 0xD8B5 | - | Job zur Simulation der Betätigung der Audiotasten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8B5 | - |
| STEUERN_AUTOADR_KLAPPENMOTOREN | 0xD981 | - | Startet die Autoadressierung zur Vergabe der Motoradressen im System anhand der Reihenfolge der Anschlüsse am Kabelbaum. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_BEDIENUNG_TEMP | 0xD875 | - | Simuliert die Einstellung der Temperatur am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD875 | - |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927 | - |
| STEUERN_EINZELADRESSIERUNG | 0xD978 | - | Adressvergabe an einzelnen Motor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD978 | - |
| STEUERN_FBM_SENS_TASTEN | 0xD592 | - | Simulation der Berührung der FBM-Tasten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD592 | - |
| STEUERN_FBM_TASTEN | 0xD593 | - | Simulation der Betätigung der FBM-Tasten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD593 | - |
| STEUERN_GEBLAESE | 0xD877 | - | Ansteuern der Gebläseendstufe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD877 | - |
| STEUERN_GEBLAESE_HINTEN | 0xD87B | - | Ansteuern der Gebläseendstufe hinten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD87B | - |
| STEUERN_KLAPPENMOTOR_VORN | 0xD86E | - | Aufruf für Ansteuerung der einzelnen Schrittmotore auf beliebige Öffnung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86E | - |
| STEUERN_KLIMA_TASTEN_VORN | 0xD86F | - | Simulation der Betätigung der Tasten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86F | - |
| STEUERN_LEDS_TESTEN | 0xD87E | - | Aufruf zur Testansteuerung von LED-Gruppen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD87E | - |
| STEUERN_MOTOREN_KALIBRIERLAUF | 0xD88D | - | Kalibrierung der Schrittmotore. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_PATT | 0xD907 | - | Aktivierung PATT (ohne Randbedingungen) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD907 | - |
| STEUERN_PTC_MODULE_HINTEN | 0xD873 | - | Aktivierung der PTC-Module hinten ohne die erforderlichen Randbedingungen, wie z.B. Energiemanagement, Energieverteilungsalgoritmus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD873 | - |
| STEUERN_RESET_LIN | 0xD97C | - | Rücksetzen des LIN-Bus mit Wegschalten der LIN-Versorgungsspannung. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_SELBSTTEST_SCHRITTMOTOREN | 0xD88F | - | Aufruf startet den Selbsttest der Schrittmotoren. Alle Motore werden auf 50% angefahren und anschließend geprüft, ob die Position ereicht worden ist. Das Ergebnis kann mit dem Service SELBSTTEST_SCHRITTMOTOREN abgefragt werden. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0 | - |
| STEUERN_SL_TASTEN | 0xD596 | - | Simulation der Betätigung der Tasten für die Sitzlüftung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD596 | - |
| TASTER_CID_FLAP_EIN | 0xD145 | STAT_TASTER_CID_FLAP_EIN | Ausgabe der Stellung für Taster CID,  ob betätigt oder nicht betätigt. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_1_EIN | 0xD155 | STAT_TASTER_FBM_1_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_1_SENS_EIN | 0xD144 | STAT_TASTER_FBM_1_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_2_EIN | 0xD156 | STAT_TASTER_FBM_2_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_2_SENS_EIN | 0xD152 | STAT_TASTER_FBM_2_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_3_EIN | 0xD157 | STAT_TASTER_FBM_3_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_3_SENS_EIN | 0xD153 | STAT_TASTER_FBM_3_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_4_EIN | 0xD158 | STAT_TASTER_FBM_4_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_4_SENS_EIN | 0xD16D | STAT_TASTER_FBM_4_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_5_EIN | 0xD159 | STAT_TASTER_FBM_5_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_5_SENS_EIN | 0xD16E | STAT_TASTER_FBM_5_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_6_EIN | 0xD15A | STAT_TASTER_FBM_6_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_6_SENS_EIN | 0xD16F | STAT_TASTER_FBM_6_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_7_EIN | 0xD15B | STAT_TASTER_FBM_7_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_7_SENS_EIN | 0xD590 | STAT_TASTER_FBM_7_SENS_EIN | Rückgabe des Status der Berührung der FBM-Taste. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_8_EIN | 0xD15C | STAT_TASTER_FBM_8_EIN | Rückgabe des Status der Betätigung des FBM-Tasters. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_FBM_8_SENS_EIN | 0xD591 | STAT_TASTER_FBM_8_SENS_EIN | Gibt den Status der Berührung der FBM-Taste zurück. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTE_VORN_DEFROST_EIN | 0xD93A | STAT_TASTE_VORN_DEFROST_EIN | Auflistung des Status der Tasten am Klimabedienteil. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTE_VORN_HHS_EIN | 0xD90C | STAT_TASTE_VORN_HHS_EIN | Auflisten des Status der Tasten am Klimabedienteil. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTE_VORN_KLIMA_OFF_EIN | 0xD99E | STAT_TASTE_VORN_KLIMA_OFF_EIN | Auflisten des Status der Tasten am Klimabedienteil. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTE_VORN_UMLUFT_AUC_EIN | 0xD93C | STAT_TASTE_VORN_UMLUFT_AUC_EIN | Auflistung des Status der Tasten am Klimabedienteil. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_HINTEN_LINKS_WERT | 0xD890 | STAT_TEMP_BELUEFTUNG_HINTEN_LINKS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_HINTEN_RECHTS_WERT | 0xD891 | STAT_TEMP_BELUEFTUNG_HINTEN_RECHTS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_LINKS_WERT | 0xD957 | STAT_TEMP_BELUEFTUNG_LINKS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_RECHTS_WERT | 0xD958 | STAT_TEMP_BELUEFTUNG_RECHTS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_FUSSRAUM_HINTEN_LINKS_WERT | 0xD892 | STAT_TEMP_FUSSRAUM_HINTEN_LINKS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_FUSSRAUM_HINTEN_RECHTS_WERT | 0xD893 | STAT_TEMP_FUSSRAUM_HINTEN_RECHTS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_INNEN_GEDAEMPFT_WERT | 0xD85D | STAT_TEMP_INNEN_GEDAEMPFT_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_INNEN_UNGEDAEMPFT_HINTEN_WERT | 0xD896 | STAT_TEMP_INNEN_UNGEDAEMPFT_HINTEN_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_INNEN_UNGEDAEMPFT_WERT | 0xD85B | STAT_TEMP_INNEN_UNGEDAEMPFT_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_VERDAMPFER_WERT | 0xD95C | STAT_TEMP_VERDAMPFER_WERT | - | °C | - | - | int | - | - | 5 | -10 | - | 22 | - | - |
| TEMP_WT_LI_WERT | 0xD95D | STAT_TEMP_WT_LI_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_WT_RE_WERT | 0xD85E | STAT_TEMP_WT_RE_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TIMER_EINLAUFSCHUTZ | 0xD905 | STAT_TIMER_EINLAUFSCHUTZ_WERT | Ermittlung der verbleibenden Restzeit beim Einlaufschutz. | s | - | - | int | - | - | - | - | - | 22 | - | - |
| VORHANDEN_HECKKLIMA | 0xD90B | STAT_VORHANDEN_HECKKLIMA | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| VORHANDEN_PATT | 0xD869 | STAT_VORHANDEN_PATT | Status der automatischen Selbstreinigung | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A |
| FASTA_DATEN_LESEN | 0x4005 | STAT_FASTA_DATEN_LESEN_WERT | - | - | - | - | string[211] | - | - | - | - | 0x78 | 22 | - | - |

### TAB_KLIMA_TASTEN_VORN

| WERT | TEXT |
| --- | --- |
| 0x00 | KLIMA_OFF |
| 0x01 | UMLUFT |
| 0x02 | HHS |
| 0x03 | DEFROST |

### TAB_KLAPPEN_VORN

| WERT | TEXT |
| --- | --- |
| 0x00 | ENTFROSTUNG |
| 0x01 | BEL_LI_AUSSEN |
| 0x02 | BEL_LI_MITTE |
| 0x03 | BEL_RE_MITTE |
| 0x04 | BEL_RE_AUSSEN |
| 0x05 | FUSS_LI |
| 0x06 | FUSS_RE |
| 0x07 | SCHICHT_LI |
| 0x08 | SCHICHT_RE |
| 0x09 | FL_STAU |
| 0x0A | UMLUFT |
| 0x0B | FUSS_FOND_LI |
| 0x0C | FUSS_FOND_RE |
| 0x0D | SCHICHT_FOND_LI |
| 0x0E | SCHICHT_FOND_RE |
| 0x0F | KNIEAUSSTR_LI |
| 0x10 | KNIEAUSSTR_RE |

### TAB_SOLLTEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | TEMP_VORNE_LINKS_OBEN |
| 0x02 | TEMP_VORNE_LINKS_UNTEN |
| 0x03 | TEMP_VORNE_RECHTS_OBEN |
| 0x04 | TEMP_VORNE_RECHTS_UNTEN |
| 0x05 | TEMP_HINTEN_LINKS_OBEN |
| 0x06 | TEMP_HINTEN_LINKS_UNTEN |
| 0x07 | TEMP_HINTEN_RECHTS_OBEN |
| 0x08 | TEMP_HINTEN_RECHTS_UNTEN |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | SH_L_VORN |
| 0x01 | SH_R_VORN |
| 0x02 | SH_L_HINTEN |
| 0x03 | SH_R_HINTEN |

### TAB_SL_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | SL_L_VORNE |
| 0x01 | SL_R_VORNE |
| 0x02 | SL_L_HINTEN |
| 0x03 | SL_R_HINTEN |

### TAB_PTC_MODUL

| WERT | TEXT |
| --- | --- |
| 0x00 | EINZELNER |
| 0x01 | LINKS |
| 0x02 | RECHTS |

### TAB_ERGEBNIS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierlauf abgeschlossen NIO |
| 0x01 | Kalibierlauf abgeschlossen IO und Daten gespeichert |

### TAB_DIGITAL_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |

### TAB_DIGITAL_ARGUMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |

### TAB_KAELTEMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | R134 |
| 0x01 | CO2 |

### TAB_TASTENSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |

### TAB_LUFTVERTEILUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | UNTEN |
| 0x02 | MITTE |
| 0x03 | MITTE_UNTEN |
| 0x05 | OBEN_UNTEN (Nur Fahrer) |
| 0x07 | OBEN_MITTE_UNTEN |
| 0x08 | AUTO |
| 0x20 | INDIVIDUAL |
| 0x28 | SONDERPROGRAMM |
| 0x29 | Max_AC |
| 0x2A | Defrost |
| 0x2B | OFF |
| 0x3F | UNGUELTIG (BASIS) |

### TAB_LED_KLIMA_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE |
| 0x04 | DEFROST |
| 0x05 | AC_OFF |
| 0x06 | HHS |
| 0x08 | UMLUFT |
| 0x0A | SITZHEIZUNG_LI_STUFE1 |
| 0x0B | SITZHEIZUNG_LI_STUFE2 |
| 0x0C | SITZHEIZUNG_LI_STUFE3 |
| 0x0D | SITZLÜFTUNG_LI_STUFE1 |
| 0x0E | SITZLÜFTUNG_LI_STUFE2 |
| 0x0F | SITZLÜFTUNG_LI_STUFE3 |
| 0x10 | SITZHEIZUNG_RE_STUFE1 |
| 0x11 | SITZHEIZUNG_RE_STUFE2 |
| 0x12 | SITZHEIZUNG_RE_STUFE3 |
| 0x13 | SITZLÜFTUNG_RE_STUFE1 |
| 0x14 | SITZLÜFTUNG_RE_STUFE2 |
| 0x15 | SITZLÜFTUNG_RE_STUFE3 |
| 0x16 | SITZHEIZUNG_FKA_LI_STUFE1 |
| 0x17 | SITZHEIZUNG_FKA_LI_STUFE2 |
| 0x18 | SITZHEIZUNG_FKA_LI_STUFE3 |
| 0x19 | SITZLÜFTUNG_FKA_LI_STUFE1 |
| 0x1A | SITZLÜFTUNG_FKA_LI_STUFE2 |
| 0x1B | SITZLÜFTUNG_FKA_LI_STUFE3 |
| 0x1C | SITZHEIZUNG_FKA_RE_STUFE1 |
| 0x1D | SITZHEIZUNG_FKA_RE_STUFE2 |
| 0x1E | SITZHEIZUNG_FKA_RE_STUFE3 |
| 0x1F | SITZLÜFTUNG_FKA_RE_STUFE1 |
| 0x20 | SITZLÜFTUNG_FKA_RE_STUFE2 |
| 0x21 | SITZLÜFTUNG_FKA_RE_STUFE3 |
| 0xFF | ExternControl aus |

### TAB_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden |

### RES_0XD163

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD164

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD918

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_EIN | 0/1 | - | int | - | - | - | - | - | Ausgabe Status Einlaufschutz: 0 = Einlaufschutz abgeschlossen 1 = Einlaufschutz noch gesetzt |

### ARG_0XD918

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | int | - | - | - | - | - | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### RES_0XD945

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_LI_AUSSEN_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_LI_AUSSEN_WERT | % | - | int | - | - | - | - | - | Sollwert der Klappenstellung: 0...100 |

### RES_0XD997

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WAHLRAD_VORN_KLIMASTIL_LINKS_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_VORN_KLIMASTIL_RECHTS_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_VORN_TEMP_LINKS_OBEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_VORN_TEMP_LINKS_UNTEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_VORN_TEMP_RECHTS_OBEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_VORN_TEMP_RECHTS_UNTEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_HINTEN_KLIMASTIL_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_HINTEN_TEMP_LINKS_OBEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_HINTEN_TEMP_LINKS_UNTEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_HINTEN_TEMP_RECHTS_OBEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |
| STAT_WAHLRAD_HINTEN_TEMP_RECHTS_UNTEN_WERT | hex | - | char | - | - | - | - | - | Ausgabe des Rohwertes des Wahlrades in hex. |

### RES_0XD987

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_HINTEN_SOLLTEMP_LINKS_OBEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad links oben. |
| STAT_KLIMA_HINTEN_SOLLTEMP_LINKS_UNTEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad links unten. |
| STAT_KLIMA_HINTEN_SOLLTEMP_RECHTS_OBEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad rechts oben. |
| STAT_KLIMA_HINTEN_SOLLTEMP_RECHTS_UNTEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad rechts unten. |

### RES_0XD94B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_RE_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_RE_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD168

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD8B3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKIP_LINKS_EIN | 0/1 | - | int | - | - | - | - | - | Ausgabe Status Skip-Taste links: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | int | - | - | - | - | - | Ausgabe Status Skip-Taste rechts: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |

### RES_0XD993

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDLAGESCHALTER_GRILL_LI_MITTE_EIN | 0/1 | - | int | - | - | - | - | - | Ausgabe des Status des Endlageschalters am Mittelgrill links: 0 = AUS, 1 = EIN |
| STAT_ENDLAGESCHALTER_GRILL_RE_MITTE_EIN | 0/1 | - | int | - | - | - | - | - | Ausgabe des Status des Endlageschalters am Mittelgrill rechts: 0 = AUS, 1 = EIN |

### RES_0XD955

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_KNIEBELUEFTUNG_LI_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_KNIEBELUEFTUNG_RE_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_KNIEBELUEFTUNG_LI_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_KNIEBELUEFTUNG_RE_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD944

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_RE_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_RE_WERT | % | - | int | - | - | - | - | - | Sollwert der Klappenstellung: 0...100 |

### RES_0XD980

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSTELLBEREICH_KLAPPE1_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE2_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE3_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE4_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE5_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE6_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE7_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE8_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE9_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE10_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE11_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE12_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE13_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE14_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE15_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE16_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE17_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE18_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE19_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE20_WERT | Inkremente | - | int | - | - | - | - | - | Angabe des Verstellbereiches in Inkrementen. |

### ARG_0XD877

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | int | - | - | - | - | - | 0 | 100 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### RES_0XD948

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSSRAUM_LI_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_FUSSRAUM_RE_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSSRAUM_LI_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_FUSSRAUM_RE_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD88E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTMOTOR_BLOCKIERUNG_WERT | Fehler | - | int | - | - | - | - | - | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Blockierung Schrittmotor |
| STAT_SCHRITTMOTOR_ANTWORT_FEHLT_WERT | Fehler | - | int | - | - | - | - | - | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Antwort Schrittmotor |
| STAT_SCHRITTMOTOR_INTERNER_FEHLER_WERT | Fehler | - | int | - | - | - | - | - | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler interner Motorfehler |

### ARG_0XD86E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPE | 0-n | - | int | - | TAB_KLAPPEN_VORN | - | - | - | - | - | Zu verwendende Text für die Tabelle zur Ansteuerung der Motoren: ENTFROSTUNG, BEL_LI_AUSSEN, BEL_LI_MITTE, BEL_LI, BELUEFTUNG, BEL_RE, BEL_RE_MITTE, BEL_RE_AUSSEN, FUSS_LI, FUSS_GES_LI, FUSS_GES_RE, FUSS_RE, FUSSRAUM, SCHICHT_LI, SCHICHT_RE, SCHICHTUNG, FL_STAU, UMLUFT, FUSS_FOND_LI, FUSS_FOND, FUSS_FOND_RE, SCHICHT_FOND_LI, SCHICHT_FOND_RE, SCHICHT_FOND, TEMP_LUFTMENGE_FOND, KNIE_LI, KNIE_RE. Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument KLAPPE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| KLAPPENOEFFNUNG | % | - | int | - | - | - | - | - | 0 | 100 | Gibt an, wie weit die Klappe geöffnet werden soll: 0 ... 100%,  0%=Geschlossen, 100%=Offen |

### RES_0XD160

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD866

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_ZUSATZWASSERPUMPE | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_KLIMA_DISPLAY_EINHEIT_NR | 0-n | - | int | - | TAB_TEMP_EINHEIT | - | - | - | 0 = Celsius,  1 = Fahrenheit |
| STAT_KLIMA_VARIANTE_NR | 0-n | - | int | - | TAB_KLIMAVARIANTE | - | - | - | Klimavariante:  0 = 2-zonig 1 = 2,5-zonig 2 = 4-zonig 3 = 1-zonig |
| STAT_VORHANDEN_EMOTORWASSERPUMPE | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_PTC_VORN | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_UMWAELZPUMPE | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |

### TAB_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x0000 | Celsius |
| 0x0001 | Fahrenheit |

### TAB_KLIMAVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x0000 | 2-zonig |
| 0x0001 | 2,5-zonig |
| 0x0002 | 4-zonig |
| 0x0003 | 1-zonig |

### RES_0XD167

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD89D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_OUT_WASSERVENTIL_LI_PWM_WERT | % | - | int | - | - | - | - | - | PWM-Wert Wasserventil links in Prozent |
| STAT_BUS_OUT_WASSERVENTIL_RE_PWM_WERT | % | - | int | - | - | - | - | - | PWM-Wert Wasserventil rechts in Prozent |

### RES_0XD953

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERLAUF_NR | 0-n | - | int | - | TAB_STATUS_KALIBRIERLAUF | - | - | - | 0 = in diesem Klemmenzyklus noch nicht gestartet, 1 = Kalibrierlauf läuft gerade, 2 = Kalibrierlauf abgeschlossen |
| STAT_KALIBRIERLAUF_ERGEBNIS | 0/1 | - | int | - | - | - | - | - | 0 = Kalibrierlauf abgeschlossen NIO, 1 = Kalibierlauf abgeschlossen IO und Daten gespeichert; Das Ergebnis bezieht sich auf den zuletzt durchgeführten Kalibrierlauf. Das Ergebnis darf nur im Anschluss eines vollständig durchlaufenen Kalibrierlaufs abgespeichert werden. |
| STAT_MOTOR_1_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_2_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_3_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_4_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_5_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_6_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_7_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_8_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_9_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_10_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_11_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_12_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_13_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_14_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_15_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_16_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_17_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_18_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_19_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_20_NR | 0-n | - | int | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |

### TAB_STATUS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x0000 | in diesem Klemmenzyklus noch nicht gestartet |
| 0x0001 | Kalibrierlauf läuft gerade |
| 0x0002 | Kalibrierlauf abgeschlossen |

### TAB_KALIB_ERG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kalibrierung NIO |
| 0x0001 | Kalibrierung IO |
| 0x0002 | Klappe nicht verbaut |

### RES_0XD871

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLWERT_PTC_HINTEN_LINKS_WERT | % | - | int | - | - | - | - | - | Sollwert in Prozent 0 - 100 % |
| STAT_SOLLWERT_PTC_HINTEN_RECHTS_WERT | % | - | int | - | - | - | - | - | Sollwert in Prozent 0 - 100 % |

### ARG_0XD596

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_SL_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SL_L_VORNE, SL_R_VORNE, SL_L_HINTEN, SL_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### RES_0XD97B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe Adresse Slave 16 |
| STAT_MOT_0X3F_WERT | - | - | int | - | - | - | - | - | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | int | - | - | - | - | - | 0 = kein Fehler, 255 = unbekannter Fehler |

### ARG_0XD593

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SGBD-Autor durchgeführt. |
| AKTION | 0/1 | - | int | - | TAB_AKTION | - | - | - | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### TAB_FBM_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | FBM_8 |
| 0x01 | FBM_7 |
| 0x02 | FBM_6 |
| 0x03 | FBM_5 |
| 0x04 | FBM_4 |
| 0x05 | FBM_3 |
| 0x06 | FBM_2 |
| 0x07 | FBM_1 |

### RES_0XD94A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_LI_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_LI_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### ARG_0XD978

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_STEPPER_ADDRESS | - | - | char | - | - | - | - | - | - | - | Aktuelle Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| NEW_STEPPER_ADDRESS | - | - | char | - | - | - | - | - | - | - | Neue Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| DIRECTION | 0-n | - | char | - | TAB_LAUFRICHTUNG | - | - | - | - | - | Laufrichtung des zu programmierenden Klappenmotors. 0x00 = Laufrichtung im Uhrzeigersinn für steigenden Schrittzahlen, 0x01 = Laufrichtung gegen Uhrzeigersinn, 0xFF = Laufrichtung gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_ENABLE | 0-n | - | char | - | TAB_NOTLAUF | - | - | - | - | - | Notlaufaktivierung des zu programmierenden Klappenmotors. 0x00 = Notlauf aktiviert, 0x01 = Notlauf deaktiviert, 0xFF = Notlauf gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_DIRECTION | 0-n | - | char | - | TAB_NOTLAUF_ENDPOS | - | - | - | - | - | Notlaufendposition des zu programmierenden Klappenmotors. 0x00 = Zu niedrigen Schrittzahlen, 0x01 = Zu hohen Schrittzahlen, 0xFF = Notlaufendposition gemäß aktueller Programmierung. Default = 0xFF |

### TAB_LAUFRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | UHRZEIGERSINN |
| 0x01 | GEGEN_UHRZEIGERSINN |
| 0xFF | DEFAULT |

### TAB_NOTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | AKTIVIERT |
| 0x01 | DEAKTIVIERT |
| 0xFF | DEFAULT |

### TAB_NOTLAUF_ENDPOS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZU_NIEDRIGEN_SCHRITTZAHLEN |
| 0x01 | ZU_HOHEN_SCHRITTZAHLEN |
| 0xFF | DEFAULT |

### RES_0XD98D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POTENTIOMETER_SEITENGRILL_LI_WERT | % | - | int | - | - | - | - | - | Ausgabe Potentiometer für Seitengrill und Kniebelüftung links |
| STAT_POTENTIOMETER_SEITENGRILL_RE_WERT | % | - | int | - | - | - | - | - | Ausgabe Potentiometer für Seitengrill und Kniebelüftung rechts |

### RES_0XD95A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_WASSERVENTIL_MONO | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_WASSERVENTIL_DUO | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD94D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_UMLUFT_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_UMLUFT_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### ARG_0XD592

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = nicht berührt, 1 = berührt |

### ARG_0XD86F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_KLIMA_TASTEN_VORN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: LV_RE, LV_LI, LV_MITTE, AUTO_RE, AUTO_LI, AUTO_MITTE, GBL_PLUS_RE, GBL_MINUS_RE, GBL_PLUS_LI, GBL_MINUS_LI, GBL_PLUS_MITTE, GBL_MINUS_MITTE, MAX_AC, KLIMA, UML_AUC, ALL, DEFROST, HHS; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD907

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTION | 0-n | - | int | - | TAB_STEUERN_PATT | - | - | - | - | - | Gibt an, welche Funktion ausgeführt werden soll:  0 = AUS (Funktion ausschalten),  1 = STANDBY (Standby-Betrieb),  2 = STANDBETRIEB (Ozonisierung) |

### TAB_STEUERN_PATT

| WERT | TEXT |
| --- | --- |
| 0x0000 | AUS |
| 0x0001 | STANDBY |
| 0x0002 | STANDBETRIEB |

### ARG_0XD8B5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_TASTEN_AUDIO | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: EIN_AUS, MODE, TP, EJECT, SUCHLAUF_LI, SUCHLAUF_RE; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | TAB_AKTION | - | - | - | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### TAB_TASTEN_AUDIO

| WERT | TEXT |
| --- | --- |
| 0x00 | MODE |
| 0x01 | EJECT |
| 0x02 | SUCHLAUF_LI |
| 0x03 | SUCHLAUF_RE |
| 0x04 | EIN_AUS |
| 0x05 | TP |
| 0x06 | CID |

### TAB_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | STOPP |
| 1 | START |

### RES_0XD994

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_SOLLWERT_KLIMASTIL_LINKS | 0-n | - | char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Sollwert-Klimastils am Wählrad vorn links. |
| STAT_KLIMA_VORN_SOLLWERT_KLIMASTIL_RECHTS | 0-n | - | char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Sollwert-Klimastils am Wählrad vorn rechts. |

### TAB_KLIMASTIL_STUFEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Klima aus |
| 0x01 | Klimastil Low |
| 0x02 | Klimastil Low-Medium |
| 0x03 | Klimastil Medium |
| 0x04 | Klimastil Medium-High |
| 0x05 | Klimastil High |
| 0x06 | Klima Max AC |

### ARG_0XD87E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | 0-n | - | int | - | TAB_LED_KLIMA_HINTEN | - | - | - | - | - | Gibt an, welche LEDs angesteuert werden sollen: ALLE (default), AUTO, MAX_AC |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Gibt an, ob die LED ein- oder ausgeschaltet werden soll: 0 = AUS, 1 = EIN |

### RES_0XD94F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSS_FOND_LI_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_FUSS_FOND_RE_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSS_FOND_LI_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_FUSS_FOND_RE_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD941

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_DEFROST_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_DEFROST_WERT | % | - | int | - | - | - | - | - | Sollwert der Klappenstellung: 0...100 |

### RES_0XD986

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORNE_SOLLTEMP_LINKS_OBEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad links oben. |
| STAT_KLIMA_VORNE_SOLLTEMP_LINKS_UNTEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad links unten. |
| STAT_KLIMA_VORNE_SOLLTEMP_RECHTS_OBEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad rechts oben. |
| STAT_KLIMA_VORNE_SOLLTEMP_RECHTS_UNTEN_WERT | % | - | char | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad rechts unten. |

### RES_0XD952

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHT_FOND_LI_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_SCHICHT_FOND_RE_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHT_FOND_LI_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_SCHICHT_FOND_RE_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### TAB_PATT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x0000 | Warten auf PATT-Betrieb |
| 0x0001 | Vorbereitung Ozonisierung |
| 0x0002 | Ozonisierungsbetrieb |
| 0x0003 | Abbaubetrieb |
| 0x0004 | Ausblasbetrieb |
| 0x0005 | PATT-Zyklus abgeschlossen |
| 0x0006 | Klappenpositionslauf |

### ARG_0XD5A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_SH_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD873

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PTC | 0-n | - | int | - | TAB_PTC_MODUL | - | - | - | - | - | Gibt an, welches PTC-Modul angesteuert werden soll: EINZELNER (default), LINKS, RECHTS |
| SOLLWERT | % | - | int | - | - | - | - | - | 0 | 100 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100 |

### RES_0XD94C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FRISCHLUFT_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FRISCHLUFT_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD16C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XA110

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_WAHLRAEDER | - | - | + | 0/1 | - | char | - | - | - | - | - | Gibt aus, ob die Kalibrierung über alle Wahlräder erfolgreich war. 0 = Kalibrierung nicht durchgeführt 1 = Kalibrierung vollständig durchgeführt |
| STAT_KALIBRIERUNG_ROUTINE | - | - | + | 0-n | - | char | - | TAB_KALIBRIERUNG_ROUTINE_WAHLRAEDER | - | - | - | Gibt aus, im welchem Zustand sich die Routine befindet. 0 = Kalibrierung nicht gestartet (in diesem Klemmenzyklus oder nach STPR) 1 = Alle Wahlräder vorn auf Endanschlag links 2 = Alle Wahlräder vorn auf Endanschlag rechts 3 = Alle Wahlräder hinten auf Endanschlag links 4 = Alle Wahlräder hinten auf Endanschlag rechts 5 = Kalibrierung beendet |
| STAT_WAHLRAD_VORN_KLIMASTIL_LINKS | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_VORN_KLIMASTIL_RECHTS | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_VORN_TEMP_LINKS_OBEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_VORN_TEMP_LINKS_UNTEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_VORN_TEMP_RECHTS_OBEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_VORN_TEMP_RECHTS_UNTEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_HINTEN_KLIMASTIL | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_HINTEN_TEMP_LINKS_OBEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_HINTEN_TEMP_LINKS_UNTEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_HINTEN_TEMP_RECHTS_OBEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |
| STAT_WAHLRAD_HINTEN_TEMP_RECHTS_UNTEN | - | - | + | 0/1 | - | char | - | - | - | - | - | Ausgabe des Kalibrierstatus des Wahlrades: 0 = Nicht kalibriert 1 = Kalibriert |

### TAB_KALIBRIERUNG_ROUTINE_WAHLRAEDER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung nicht gestartet |
| 0x01 | Alle Wahlräder vorn auf Endanschlag links |
| 0x02 | Alle Wahlräder vorn auf Endanschlag rechts |
| 0x03 | Alle Wahlräder hinten auf Endanschlag links |
| 0x04 | Alle Wahlräder hinten auf Endanschlag rechts |
| 0x05 | Kalibrierung beendet |

### RES_0XD946

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_RE_AUSSEN_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_RE_AUSSEN_WERT | % | - | int | - | - | - | - | - | Sollwert der Klappenstellung: 0...100 |

### ARG_0XD927

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### ARG_0XD87B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | int | - | - | - | - | - | 0 | 100 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### RES_0XD937

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_PRG_KLIMASTIL_LINKS_WERT | Stufe | - | int | - | - | - | - | - | Ausgabe der Soft-Intense-Einstellung links in Stufen: 1 - 7 |
| STAT_KLIMA_VORN_PRG_KLIMASTIL_RECHTS_WERT | Stufe | - | int | - | - | - | - | - | Ausgabe der Soft-Intense-Einstellung rechts in Stufen: 1 - 7 |

### RES_0XD15F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD16B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_HINTEN_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### TAB_SH_SL_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED an |
| 0x01 | Eine LED an |
| 0x02 | Zwei LEDs an |
| 0x03 | Drei LEDs an |
| 0xFF | Keine LEDs angeschlossen |

### RES_0XA111

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENCE_WERT | + | - | - | - | - | int | - | - | - | - | - | Aktuelle Referenznummer Klappenmotors |
| STAT_SUPPLIER_WERT | + | - | - | - | - | int | - | - | - | - | - | Aktuelle Lieferantennummer Klappenmotors |
| STAT_ASIC_WERT | + | - | - | - | - | int | - | - | - | - | - | Aktuelle ASIC-Nummer Klappenmotors |

### ARG_0XA111

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIN_DEVICE_ADDRESS | + | - | - | - | char | - | - | - | - | - | - | - | Adresse LIN-Bus-Teilnehmer. default = 0x20 |

### RES_0XD985

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | int | - | - | - | - | - | Ausgabe der Adresse Slave 16 |
| STAT_MOT_0X3F_WERT | - | - | int | - | - | - | - | - | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | int | - | - | - | - | - | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XD943

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_LI_WERT | % | - | int | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_LI_WERT | % | - | int | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### ARG_0XD875

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ORT | 0-n | - | int | - | TAB_SOLLTEMP | - | - | - | - | - | STOP (Abbruch der Ansteuerung), TEMP_LINKS (Vorgabe Temperatur links), TEMP_RECHTS (Vorgabe Temperatur rechts), TEMP_MITTE (Vorgabe Temperatur mitte) |
| TEMPERATUR | °C | - | int | - | - | - | - | - | 16 | 28 | Vorgabe der einzustellenden Temperatur in 1-er Schritten: Bereich 16 - 28 |

### RES_0XD962

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_SOLARSENSOR_LINKS_WERT | W/m² | - | int | - | - | - | - | - | Solar sensor |
| STAT_BUS_IN_SOLARSENSOR_RECHTS_WERT | W/m² | - | int | - | - | - | - | - | Solar sensor |

### TAB_STATUS_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x0000 | nicht gestartet/nicht angefordert |
| 0x0001 | Test läuft gerade |
| 0x0002 | Test erfolgreich abgeschlossen |
| 0x0003 | Test nicht erfolgreich abgeschlossen |
