# fka_01.prg

## General

|  |  |
| --- | --- |
| File | fka_01.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 54 |
| Origin | BMW EI63 Schusser |
| Revision | 5.000 |
| Author | Preh 1713 Holzheimer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Fond-Klima-Anlage |  |  |
| ORIGIN | string | BMW EI63 Schusser |  |  |
| REVISION | string | 5.000 |  |  |
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

### _HARDWARE_VARIANTE

UDS  : $22   ReadDataByIdentifier UDS  : $4010 HARDWARE_VARIANTE Modus: Default

_No arguments._

### STEUERN_HWAP

Beschreibung Es muessen immer alle vier Argumente für die HWAP Identifier von 0-255 bzw. 0x00-0xFF uebergeben werden. Die Version wird automatisch mit 0xFF besetzt UDS  : $2E   WriteDataByIdentifier UDS  : $4002 STEUERN_HWAP Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | HWAP Identifier[1] Wert hex |
| BYTE2 | int | HWAP Identifier[2] Wert hex |
| BYTE3 | int | HWAP Identifier[3] Wert hex |
| BYTE4 | int | HWAP Identifier[4] Wert hex |

### STATUS_FLASHBAR

UDS  : $23 ReadMemoryByAdress UDS  : $x12010401 READ FPROT Register Modus: Default

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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Fertigungsmode: Gebläse, PTC, Bedienteil deaktiviert |
| 0x01 | Spezieller Energiesparmode | Fertigungsmode: Gebläse, PTC, Bedienteil deaktiviert |
| 0x02 | ECOS-Mode | keine Deaktivierung |
| 0x03 | MOST-Mode | Fertigungsmode: Gebläse, PTC, Bedienteil deaktiviert |
| 0x04 | Betriebsmode 4 | Fertigungsmode: Gebläse deaktiviert |
| 0x05 | Betriebsmode 5 | Fertigungsmode: Gebläse deaktiviert |
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
| 0x801000 | PTC-Modul: Kurzschluß nach Plus der PWM-Leitung oder Unterbrechung der Masse am PTC-Modul links | 0 |
| 0x801001 | PTC-Modul: Übertemperatur an Leiterplatte links | 0 |
| 0x801002 | PTC-Modul: Kurzschluß nach Plus der PWM-Leitung oder Unterbrechung der Masse am PTC-Modul rechts | 0 |
| 0x801003 | PTC-Modul: Übertemperatur an Leiterplatte rechts | 0 |
| 0x801004 | PTC-Modul: Über- oder Unterspannung am PTC-Modul links | 1 |
| 0x801005 | PTC-Modul: Über- oder Unterspannung am PTC-Modul rechts | 1 |
| 0x801006 | PTC-Modul: Kurzschluß nach Minus oder Unterbrechung PTC-Modul links | 0 |
| 0x801007 | PTC-Modul: Kurzschluß nach Minus oder Unterbrechung PTC-Modul rechts | 0 |
| 0x801008 | PTC-Modul: Kurzschluß nach Plus oder interner PTC-Fehler links | 0 |
| 0x801009 | PWM-Signal, PTC links hinten: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x80100A | PTC-Modul: Kurzschluß nach Plus oder interner PTC-Fehler rechts | 0 |
| 0x80100B | PWM-Signal, PTC rechts hinten: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x80100C | PWM-Signal, Gebläseendstufe hinten: Kurzschluß nach Plus | 0 |
| 0x80100D | PWM-Signal, Gebläseendstufe hinten: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x80100E | Fühler Innentemperatur: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80100F | Fühler Innentemperatur: Kurzschluß nach Masse | 0 |
| 0x801010 | Fühler Belüftungstemperatur links hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801011 | Fühler Belüftungstemperatur links hinten:  Kurzschluß nach Masse | 0 |
| 0x801012 | Fühler Belüftungstemperatur rechts hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801013 | Fühler Belüftungstemperatur rechts hinten:  Kurzschluß nach Masse | 0 |
| 0x801014 | Fühler Fußraum hinten links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801015 | Fühler Fußraum hinten links:  Kurzschluß nach Masse | 0 |
| 0x801016 | Fühler Fußraum hinten rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801017 | Fühler Fußraum hinten rechts:  Kurzschluß nach Masse | 0 |
| 0x801018 | Schichtungspotentiometer links hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801019 | Schichtungspotentiometer links hinten:  Kurzschluß nach Masse | 0 |
| 0x80101A | Schichtungspotentiometer rechts hinten:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80101B | Schichtungspotentiometer rechts hinten:  Kurzschluß nach Masse | 0 |
| 0x80101C | DC/DC Konverter Monitor: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80101E | Externe 5 Volt: Spannung über 8 Volt | 0 |
| 0x80101F | Externe 5 Volt: Spannung unter 2 Volt | 0 |
| 0x801020 | InnenfühlerGebläse: Motor blockiert | 0 |
| 0x801021 | Interner Steuergerätefehler | 1 |
| 0x801022 | Unterspannung erkannt | 1 |
| 0x801023 | Überspannung erkannt | 1 |
| 0x801024 | Steuergerät wurde nach dem Flashen nicht codiert | 1 |
| 0x801025 | Die während einer Codierdatentransaktion gesendeten Daten sind unplausibel | 0 |
| 0x801026 | Signatur über Nettocodierdaten ist ungültig | 0 |
| 0x801027 | Steuergerät ist nicht für das Fahrzeug codiert, in welchem es verbaut ist | 0 |
| 0x801028 | Fehler während der Codierdatentransaktion aufgetreten | 0 |
| 0x801029 | Leiterplatte: Hardware Variante kann nicht erkannt werden | 0 |
| 0x80102A | Heiz/Klimasystem: Leistung reduziert aufgrund Verbraucherreduzierung | 1 |
| 0x80102B | PTC-Modul hinten links: Kurzschluß nach Plus der PWM-Leitung | 0 |
| 0x80102C | PTC-Modul hinten links: Übertemperatur an Leiterplatte | 0 |
| 0x80102D | PTC-Modul hinten rechts: Kurzschluß nach Plus der PWM-Leitung | 0 |
| 0x80102E | PTC-Modul hinten rechts: Übertemperatur an Leiterplatte | 0 |
| 0x80102F | PTC-Modul hinten: Keine Ansteuerung wegen Unterspannung | 1 |
| 0x801030 | PTC-Modul hinten links: Kurzschluß oder interner PTC-Fehler | 0 |
| 0x801031 |  PWM-Signal, PTC hinten links: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x801032 | PTC-Modul hinten rechts: Kurzschluß oder interner PTC-Fehler | 0 |
| 0x801033 | PWM-Signal, PTC hinten rechts: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0xE7440B | K-CAN Bus: Defekt erkannt | 0 |
| 0xE74414 | K-CAN: Control Module Bus OFF | 0 |
| 0xE75400 | Botschaft (0x2CA, Außentemperatur): Ausfall | 1 |
| 0xE75401 | Botschaft (0x3F8, Steuerung Klima Fond): Ausfall | 1 |
| 0xE75402 | Botschaft (0x202, Dimmung): Ausfall | 1 |
| 0xE75403 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xE75404 | Botschaft (0x330, Kilometerstand/Reichweite): Ausfall | 1 |
| 0xE75405 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xE75406 | Botschaft (0x393, LCD Helligkeit Regelung): Ausfall | 1 |
| 0xE75407 | Botschaft (0x3B3, Powermanagement Verbrauchersteuerung): Ausfall | 1 |
| 0xE75408 | Botschaft (0x22E, Status BFSH): Ausfall | 1 |
| 0xE75409 | Botschaft (0x236, Status FASH): Ausfall | 1 |
| 0xE7540A | Botschaft (0x242, Status Klima Front): Ausfall | 1 |
| 0xE7540B | Botschaft (0x2EA, Status Klima Luftverteilung BF): Ausfall | 1 |
| 0xE7540C | Botschaft (0x2E6, Status Klima Luftverteilung FA): Ausfall | 1 |
| 0xE7540D | Signal (Temperatur_Außen in 0x2CA): ungültig empfangen | 1 |
| 0xE7540E | Signal (Steuerung_Motor_Gebläse_Fond in 0x3F8): ungültig empfangen | 1 |
| 0xE7540F | Signal (Temperatur_Soll_Fußraum_FAH in 0x3F8): ungültig empfangen | 1 |
| 0xE75410 | Signal (Temperatur_Soll_Fußraum_BFH in 0x3F8): ungültig empfangen | 1 |
| 0xE75411 | Signal (Steuerung_Beleuchtung_Schalter in 0x202): ungültig empfangen | 1 |
| 0xE75412 | Signal (Status_Antrieb_Fahrzeug in 0x3F9): ungültig empfangen | 1 |
| 0xE75413 | Signal (Temperatur_Motor_Antrieb in 0x3F9): ungültig empfangen | 1 |
| 0xE75414 | Signal (Status_Klemme in 0x12F): ungültig empfangen | 1 |
| 0xE75415 | Signal (Ziel_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 |
| 0xE75416 | Signal (Dämpfung_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 |
| 0xE75417 | Signal (Steuerung_Leistung_Verbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE75418 | Signal (Status_Sitzklima_BFH in 0x22E): ungültig empfangen | 1 |
| 0xE75419 | Signal (Status_Sitzheizung_BFH in 0x22E): ungültig empfangen | 1 |
| 0xE7541A | Signal (Status_Sitzklima_FAH in 0x236): ungültig empfangen | 1 |
| 0xE7541B | Signal (Status_Sitzheizung_FAH in 0x236): ungültig empfangen | 1 |
| 0xE7541C | Signal (Temperatur_Soll_FA in 0x242): ungültig empfangen | 1 |
| 0xE7541D | Signal (Temperatur_Soll_BF in 0x242): ungültig empfangen | 1 |
| 0xE7541E | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xE7541F | Botschaft (0x247, Status Klima Luftverteilung Fond): Ausfall | 1 |
| 0xE75420 | Signal (Status_Luftverteilung_Unten_FAH in 0x247): ungültig empfangen | 1 |
| 0xE75421 | Signal (Status_Luftverteilung_Unten_BFH in 0x247): ungültig empfangen | 1 |
| 0xE75422 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE75423 | Signal (Geschwindigkeit_Fahrzeug_Schwerpunkt in 0x1A1): ungültig empfangen | 1 |
| 0x027900 | Energiesparmode aktiv | 1 |
| 0x02FF79 | Debug Funktion Applikation | 1 |
| 0xE74BFF | Debug Funktion Netzwerk | 1 |
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

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x790000 | Fehler beim Eeprom Schreiben | 0 |
| 0x790001 | Fehler beim Eeprom  Lesen | 0 |
| 0x790002 | Fehler im Eeprom Control Bereich | 0 |
| 0x790003 | Fehler beim Eeprom Löschen | 0 |
| 0x790004 | Fehler beim Eeprom komplett schreiben | 0 |
| 0x790005 | Fehler beim Eeprom komplett lesen | 0 |
| 0x790006 | Fehler in der Konfigurations-ID des Eeprom | 0 |
| 0x790007 | Botschaft (Sekundenzähler Zeitbotschaft): Ausfall | 1 |
| 0x790008 | Diagnose Master Queue gelöscht | 1 |
| 0x790009 | Diagnose Master Queue voll | 1 |
| 0x79000A | Reset wg. Überschreitung der Tasklaufzeit | 0 |
| 0x79000B | Spannungsreglerabschaltung fehlgeschlagen | 0 |
| 0x79000C | der externe Watchdog hat einen Reset ausgelöst | 0 |
| 0x79000D | es wurde ein Reset wg. des SWI-Interrupts ausgeführt | 0 |
| 0x79000E | es wurde ein Reset wg. des XIRQ-Interrupts ausgeführt | 0 |
| 0x79000F | es wurde ein Reset wg. eines ungültigen OP-Codes ausgeführt | 0 |
| 0x790010 | es wurde ein Reset wg. eines COP-Failure-Interrupts ausgeführt | 0 |
| 0x790011 | es wurde ein Reset wg. des Clock monitor Interrupts ausgeführt | 0 |
| 0x790012 | es wurde ein Reset wg. des CRG PLL lock-Interrupts ausgeführt | 0 |
| 0x790013 | es wurde ein Reset wg. des CRG self-clock mode-Interrupts ausgeführt | 0 |
| 0x790014 | es wurde ein Reset wg. eines nicht erwarteten Interrupts ausgeführt | 0 |
| 0x790015 | das Betriebssystem hat einen Reset wg. eines erkannten Fehlers ausgelöst | 0 |
| 0x790020 | NM-Timeout Timer has abnormally expired outside of the Ready Sleep State | 0 |
| 0x790021 | Fehler im Eeprom Control Bereich | 0 |
| 0x790022 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x790023 | Transmit buffers full | 0 |
| 0x790024 | CAN Interface is in STOPPED mode | 0 |
| 0x790025 | NM initialization has failed  | 0 |
| 0x790026 | Call of CanIf function CanIf_Transmit has failed  | 0 |
| 0x790027 | Another error occurred during a reception or a transmission | 0 |
| 0x790028 | NM transmission path has failed  | 0 |
| 0x790029 | bei der jeweiligen Aktion in der FLS wurden Fehler erkannt | 0 |
| 0x79002A | Flash write failed (HW) | 0 |
| 0x79002B | Flash read failed (HW) | 0 |
| 0x79002C | bei der jeweiligen Aktion in der FLS wurden Fehler erkannt | 0 |
| 0x79002D | MCU_E_CLOCK_FAILURE | 0 |
| 0x79002E | MCU_E_LOCK_FAILURE | 0 |
| 0x79002F | Disabling of watchdog not allowed | 0 |
| 0x790030 | Switching between watchdog modes failed. | 0 |
| 0x790031 | Watchdog drivers mode switch has failed | 0 |
| 0x790032 | Timeout caused by hardware error | 0 |
| 0x790033 | FEE_E_WRITE_FAILED | 0 |
| 0x790034 | Botschaft Fahrzeugzustand (0x3A0): Ausfall | 1 |
| 0x790035 | Start transmission has failed | 0 |
| 0x790036 | Stop transmission has failed | 0 |
| 0x790037 | The service EcuM_KillAllRUNRequests was issued | 0 |
| 0x790038 | Reception of NM messages in “No Communication” mode | 0 |
| 0x79003A | Alive-supervision has failed and a watchdog reset will occur | 0 |
| 0x79003B | Access to FlexRay CC event id | 0 |
| 0x79003C | Job List Execution lost synchronicity to the FlexRay Global Time | 0 |
| 0x79003D | No/incorrect communication to transceiver. | 0 |
| 0x79003E | sending of a service message failed | 0 |
| 0x79003F | MCU_E_QUARTZ_FAILURE | 0 |
| 0x790040 | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x790041 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x790042 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x790043 | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x790044 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x790045 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x790046 | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x790047 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x790048 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x790049 | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x79004A | WDG_E_MISS_TRIGGER | 0 |
| 0x79004B | MCU_E_RC_MEASURE | 0 |
| 0x79004C | FLS_E_UNEXPECTED_FLASH_ID | 0 |
| 0x79004D | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x79004F | FEE_E_CACHE_READ | 0 |
| 0x790050 | FEE_E_GC_ERASE | 0 |
| 0x790051 | FEE_E_GC_READ | 0 |
| 0x790052 | FEE_E_GC_WRITE | 0 |
| 0x790053 | FEE_E_INIT | 0 |
| 0x790054 | FEE_E_INVALIDATE | 0 |
| 0x790055 | FEE_E_READ | 0 |
| 0x790056 | FEE_E_WRITE_CYCLES_EXHAUSTED | 0 |
| 0x790057 | FLS_E_OPER | 0 |
| 0x790058 | FLS_E_PROTECTION_FAILED | 0 |
| 0x790059 | FEE_E_WRITE | 0 |
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
| 0x5006 | ERROR_REASON | Nummer | - | unsigned char | - | 1 | 1 | 0 |
| 0x5007 | ERROR_PAR | Nummer | - | unsigned char | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemmen 58G in Prozent | % | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_ANZ_SOFT_INTENSE | 0xD878 | STAT_KLIMA_HINTEN_SOFT_INTENSE_WERT | - | Stufe | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_GEBLAESELEISTUNG_WERT | 0xD884 | STAT_KLIMA_HINTEN_GEBLAESELEISTUNG_WERT | Gebläseleistung in % der Gebläseendstufe der FKA. | % | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_GEBLAESESTUFE_ANZ_WERT | 0xD87A | STAT_KLIMA_HINTEN_GEBLAESESTUFE_ANZ_WERT | - | Stufe | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_KLAPPEN_PRG_AUTO_EIN | 0xD87F | STAT_KLIMA_HINTEN_KLAPPEN_PRG_AUTO_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_KLAPPEN_PRG_MAN_EIN | 0xD880 | STAT_KLIMA_HINTEN_KLAPPEN_PRG_MAN_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_LUFTVERTEILUNG | 0xD879 | STAT_KLIMA_HINTEN_LUFTVERTEILUNG_NR | - | 0-n | - | - | int | TAB_LUFTVERTEILUNG | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_OFF_EIN | 0xD881 | STAT_KLIMA_HINTEN_OFF_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_PRG_GEBL_AUTO_EIN | 0xD883 | STAT_KLIMA_HINTEN_PRG_GEBL_AUTO_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_PRG_MAX_AC_EIN | 0xD864 | STAT_KLIMA_HINTEN_PRG_MAX_AC_EIN | Ermittlung der Funktionszustände der Heizung/Klima | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KLIMA_HINTEN_TEMPERATUR_SOLLWERT | 0xD89B | - | Ausgabe der eingestellten Sollwert-Temperatur an den Wählrädern (links und rechts) des Bedienteils hinten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD89B |
| KONFIGURATION_KLIMA_HINTEN | 0xD867 | - | Ermittlung der Ausstattugsvarianten und Konfiguration, wird in erster Linie aus der Codierung abgeleitet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD867 |
| LED_HINTEN_AUTO_EIN | 0xD87C | STAT_LED_HINTEN_AUTO_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LED_HINTEN_MAX_AC_EIN | 0xD87D | STAT_LED_HINTEN_MAX_AC_EIN | Ermittlung der Anzeigezustände der LEDs am Bedienfeld | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| POTI_SCHICHTUNG_HINTEN_LINKS_WERT | 0xD898 | STAT_POTI_SCHICHTUNG_HINTEN_LINKS_WERT | - | % | - | - | int | - | - | - | - | - | 22 | - | - |
| POTI_SCHICHTUNG_HINTEN_RECHTS_WERT | 0xD899 | STAT_POTI_SCHICHTUNG_HINTEN_RECHTS_WERT | - | % | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_LED_LINKS | 0xD164 | - | Status LED-Anzeige Sitzheizung hinten links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD164 |
| SITZHEIZUNG_HINTEN_LED_RECHTS | 0xD163 | - | Status LED-Anzeige Sitzheizung hinten rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD163 |
| SITZHEIZUNG_HINTEN_TASTER_LINKS | 0xD161 | STAT_TASTER_SITZHEIZUNG_HINTEN_LINKS_EIN | 1: Taster Sitzheizung hinten links betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_RECHTS | 0xD162 | STAT_TASTER_SITZHEIZUNG_HINTEN_RECHTS_EIN | 1: Taster Sitzheizung hinten rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_VORHANDEN | 0xD86C | STAT_VORHANDEN_SITZHEIZUNG_TASTER_HINTEN | 1: Taster Sitzheizung hinten codiert | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_HINTEN_LED_LINKS | 0xD16C | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung hinten links. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD16C |
| SITZLUEFTUNG_HINTEN_LED_RECHTS | 0xD16B | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung hinten rechts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD16B |
| SITZLUEFTUNG_HINTEN_TASTER_LINKS | 0xD169 | STAT_TASTER_SITZLUEFTUNG_HINTEN_LINKS_EIN | Ausgabe des Status der Taste für die Einstellung der Sitzbelüftung hinten links. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_HINTEN_TASTER_RECHTS | 0xD16A | STAT_TASTER_SITZLUEFTUNG_HINTEN_RECHTS_EIN | Ausgabe des Status der Taste für die Einstellung der Sitzbelüftung hinten rechts. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZLUEFTUNG_HINTEN_TASTER_VORHANDEN | 0xD86D | STAT_VORHANDEN_SITZLUEFTUNG_TASTER_HINTEN | Sitzbelüftung hinten vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SOLLWERT_PTC_MODULE_HINTEN | 0xD871 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD871 |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STEUERN_BEDIENUNG_TEMP | 0xD875 | - | Simuliert die Einstellung der Temperatur am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD875 | - |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927 | - |
| STEUERN_DISPLAY_TESTEN | 0xD89A | - | Steuert das Display mit Bitmustern an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD89A | - |
| STEUERN_GEBLAESE | 0xD877 | - | Ansteuern der Gebläseendstufe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD877 | - |
| STEUERN_KLIMA_TASTEN_HINTEN | 0xD8AF | - | Simulation der Betätigung der Tasten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8AF | - |
| STEUERN_LEDS_TESTEN | 0xD87E | - | Aufruf zur Testansteuerung von LED-Gruppen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD87E | - |
| STEUERN_PTC_MODULE_HINTEN | 0xD873 | - | Aktivierung der PTC-Module hinten ohne die erforderlichen Randbedingungen, wie z.B. Energiemanagement, Energieverteilungsalgoritmus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD873 | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0 | - |
| STEUERN_SL_TASTEN | 0xD596 | - | Simulation der Betätigung der Tasten für die Sitzlüftung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD596 | - |
| TASTE_HINTEN_AUTO_EIN | 0xD876 | STAT_TASTE_HINTEN_AUTO_EIN | Ausgabe des Status für die Tasten der Klimabetätigung. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTE_HINTEN_LUFTVERTEILUNG_EIN | 0xD862 | STAT_TASTE_HINTEN_LUFTVERTEILUNG_EIN | Ausgabe des Status für die Tasten der Klimabetätigung. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTE_HINTEN_MAX_AC_EIN | 0xD863 | STAT_TASTE_HINTEN_MAX_AC_EIN | Ausgabe des Status für die Tasten der Klimabetätigung. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_HINTEN_LINKS_WERT | 0xD890 | STAT_TEMP_BELUEFTUNG_HINTEN_LINKS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_HINTEN_RECHTS_WERT | 0xD891 | STAT_TEMP_BELUEFTUNG_HINTEN_RECHTS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_FUSSRAUM_HINTEN_LINKS_WERT | 0xD892 | STAT_TEMP_FUSSRAUM_HINTEN_LINKS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_FUSSRAUM_HINTEN_RECHTS_WERT | 0xD893 | STAT_TEMP_FUSSRAUM_HINTEN_RECHTS_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| TEMP_INNEN_UNGEDAEMPFT_HINTEN_WERT | 0xD896 | STAT_TEMP_INNEN_UNGEDAEMPFT_HINTEN_WERT | - | °C | - | - | int | - | - | - | - | - | 22 | - | - |
| WIPPE_HINTEN_PLUS_MINUS | 0xD861 | - | Ausgabe des Status für die Tasten der Klimabetätigung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD861 |
| FASTA_DATEN_LESEN | 0x4005 | STAT_FASTA_DATEN_LESEN_WERT | FASTA DATEN LESEN | - | - | - | string[94] | - | - | - | - | - | 22 | - | - |

### TAB_SOLLTEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | TEMP_LINKS |
| 0x02 | TEMP_RECHTS |

### TAB_PTC_MODUL

| WERT | TEXT |
| --- | --- |
| 0x00 | EINZELNER |
| 0x01 | LINKS |
| 0x02 | RECHTS |

### TAB_0XD879

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | UNTEN |
| 0x02 | MITTE |
| 0x03 | MITTE_UNTEN |
| 0x04 | AUTO |
| 0x08 | SONDERPROGRAMM |
| 0x20 | INDIVIDUAL |
| 0xFF | UNGUELTIG (BASIS) |

### TAB_KLIMA_TASTEN_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTO |
| 0x01 | LUFTVERTEILUNG |
| 0x02 | GBL_MINUS |
| 0x03 | GBL_PLUS |
| 0x04 | MAX_AC |
| 0x05 | SH_LI |
| 0x06 | SH_RE |
| 0x07 | SL_LI |
| 0x08 | SL_RE |

### TAB_SL_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | SL_L_HINTEN |
| 0x01 | SL_R_HINTEN |

### TAB_DIGITAL_ARGUMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT GEDRUECKT |
| 0x01 | GEDRUECKT |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | SH_L_HINTEN |
| 0x01 | SH_R_HINTEN |

### TAB_LED_KLIMA_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE |
| 0x01 | AUTO_LI |
| 0x03 | MAX_AC |
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
| 0xFF | ExternControl aus |

### TAB_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden |

### TAB_LUFTVERTEILUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | UNTEN |
| 0x02 | MITTE |
| 0x03 | MITTE_UNTEN |
| 0x04 | AUTO |
| 0x20 | INDIVIDUAL |
| 0x28 | SONDERPROGRAMM |
| 0x3F | UNGUELTIG (BASIS) |

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

### RES_0XD89B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_HINTEN_SOLLTEMP_LINKS_WERT | °C | - | int | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad links. |
| STAT_KLIMA_HINTEN_SOLLTEMP_RECHTS_WERT | °C | - | int | - | - | - | - | - | Ausgabe der eingestellten Sollwert-Temperatur am Wählrad rechts. |

### RES_0XD867

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_DISPLAY_HINTEN_EINHEIT_NR | 0-n | - | int | - | TAB_TEMP_EINHEIT | - | - | - | 0 = Celsius,  1 = Fahrenheit |
| STAT_VORHANDEN_PTC_HINTEN | 0/1 | - | int | - | - | - | - | - | 0 = nicht vorhanden  1 = vorhanden |

### TAB_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x0000 | Celsius |
| 0x0001 | Fahrenheit |

### ARG_0XD87E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | 0-n | - | int | - | TAB_LED_KLIMA_HINTEN | - | - | - | - | - | Gibt an, welche LEDs angesteuert werden sollen: ALLE (default), AUTO, MAX_AC |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Gibt an, ob die LED ein- oder ausgeschaltet werden soll: 0 = AUS, 1 = EIN |

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

### RES_0XD16C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_HINTEN_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### ARG_0XD877

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | int | - | - | - | - | - | 0 | 100 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### ARG_0XD8AF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_KLIMA_TASTEN_HINTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: LV_RE, LV_LI, LV_MITTE, AUTO_RE, AUTO_LI, AUTO_MITTE, GBL_PLUS_RE, GBL_MINUS_RE, GBL_PLUS_LI, GBL_MINUS_LI, GBL_PLUS_MITTE, GBL_MINUS_MITTE, LUFTMENGE_RE, LUFTMENGE_LI, MAX_AC, KLIMA; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD927

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

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

### RES_0XD861

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_HINTEN_PLUS_EIN | 0/1 | - | int | - | - | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_WIPPE_HINTEN_MINUS_EIN | 0/1 | - | int | - | - | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt |

### ARG_0XD89A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUSTER | 0-n | - | int | - | TAB_BITMUSTER | - | - | - | - | - | Gibt an, welches Bitmuster angesteuert werden soll: BITMUSTER1 bis BITMUSTER6 . BITMUSTER5 alle Elemente anzeigen |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Bitmuster: 0 = AUS, 1 = EIN |

### TAB_BITMUSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | BITMUSTER_1 |
| 0x01 | BITMUSTER_2 |
| 0x02 | BITMUSTER_3 |
| 0x03 | BITMUSTER_4 |
| 0x04 | BITMUSTER_5 |
| 0x05 | BITMUSTER_6 |

### ARG_0XD875

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ORT | 0-n | - | int | - | TAB_SOLLTEMP | - | - | - | - | - | STOP (Abbruch der Ansteuerung), TEMP_LINKS (Vorgabe Temperatur links), TEMP_RECHTS (Vorgabe Temperatur rechts), TEMP_MITTE (Vorgabe Temperatur mitte) |
| TEMPERATUR | °C | - | int | - | - | - | - | - | 16 | 28 | Vorgabe der einzustellenden Temperatur in 1-er Schritten: Bereich 16 - 28 |

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
