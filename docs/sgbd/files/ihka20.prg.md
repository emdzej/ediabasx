# ihka20.prg

## General

|  |  |
| --- | --- |
| File | ihka20.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 127 |
| Origin | BMW EI-541 Wendrock |
| Revision | 1.002 |
| Author | Valeo EI-541 Brau |
| ECU Comment | IHKA [141] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz-/Klimaautomatik |  |  |
| ORIGIN | string | BMW EI-541 Wendrock |  |  |
| REVISION | string | 1.002 |  |  |
| AUTHOR | string | Valeo EI-541 Brau |  |  |
| COMMENT | string | IHKA [141] |  |  |
| PACKAGE | string | 1.14 |  |  |
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

### STEUERN_EINLAUFSCHUTZ_KOMPRESSOR_I3XX

Steuern des Kompressor Einlaufschutzes KWP2000: $3B InputOutputControlByLocalIdentifier $0B Einlaufschutz 

| Name | Type | Description |
| --- | --- | --- |
| EINLAUFSCHUTZ | unsigned char | 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten table DigitalArgument TEXT default: "aus" |

### STATUS_EINLAUFSCHUTZ_KOMPRESSOR_I3XX

Kompressor 

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
| 0xE7146F | K-CAN Botschaft (STAT_FUNKSCHLUESSEL, 0x23A,FA): OP_KEY_BUT_SPFN invalid signal | 1 |
| 0xE7146A | K-CAN Botschaft (FLLUPT_KLEMME_30G_F, 0x3BE, FA): FLLUPT_GPWSUP invalid signal | 1 |
| 0xE71469 | K-CAN Botschaft (FLLUPT_GPWSUP, 0x3BE, FA): Timeout | 1 |
| 0xE71468 | K-CAN Botschaft (FLLUPT_KLEMME_30G_F, 0x3AC, FA): FLLUPT_KL_30_ERCTR invalid signal | 1 |
| 0xE71467 | K-CAN Botschaft (FLLUPT_KLEMME_30G_F, 0x3AC, FA): Timeout | 1 |
| 0xE71466 | K-CAN Botschaft (SU_SW_DRDY_2,  0x3E6, FA): AVL_MOD_SW_DRDY_INTR invalid signal | 1 |
| 0xE71465 | K-CAN Botschaft (SU_SW_DRDY_2,  0x3E6, FA): Timeout | 1 |
| 0xE7145C | K-CAN Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA): ST_CLSY | 1 |
| 0xE7145B | K-CAN Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA): Timeout | 1 |
| 0xE7145A | K-CAN Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): RQ_HTFL_DME invalid signal | 1 |
| 0xE71459 | K-CAN Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): LIM_TORQ_CRSH_ACCM invalid signal | 1 |
| 0xE71458 | K-CAN Botschaft (HT_MGT_ENG_CTR, 0x1B9, FA): Timeout | 1 |
| 0xE71457 | K-CAN Botschaft (CTR_SFYC_1,  0x280, FA): CTR_OP_AIC_SFYC invalid signal | 1 |
| 0xE71456 | K-CAN Botschaft (CTR_SFYC_1,  0x280, FA): CTR_AL_SFYC invalid signal | 1 |
| 0xE71455 | K-CAN Botschaft (DT_PT_1,  0x3FB, FA): ST_INFS_DRV invalid signal | 1 |
| 0xE71454 | K-CAN Botschaft (CTR_ACCM, 0x38C, FA): PWR_ACCM_MAX invalid signal | 1 |
| 0xE71453 | K-CAN Botschaft (CTR_ACCM, 0x38C, FA): RLS_ACCM invalid signal | 1 |
| 0xE71452 | K-CAN Botschaft (CTR_ACCM, 0x38C, FA): Timeout | 1 |
| 0xE71451 | K-CAN Botschaft (DT_PT_1 ,  0x3FB, FA): Timeout | 1 |
| 0xE7144F | K-CAN Botschaft (STAT_Ventil_Klima, 0x2D6, FA): ST_AIC_CMPR_CLT invalid signal | 1 |
| 0xE7144E | K-CAN Botschaft (STAT_Ventil_Klima, 0x2D6, FA): Timeout | 1 |
| 0xE7144D | K-CAN Botschaft (ST_VA_HVBTC, 0x389, FA): ST_CSOV_AIC signal invalid | 1 |
| 0xE7144C | K-CAN Botschaft (ST_VA_HVBTC, 0x389, FA): Timeout | 1 |
| 0xE7144B | K-CAN Botschaft (ST_SOLS, 0x3D3, FA): ST_SOLS_PS invalid signal | 1 |
| 0xE7144A | K-CAN Botschaft (ST_SOLS, 0x3D3, FA): ST_SOLS_DR invalid signal | 1 |
| 0xE71449 | K-CAN Botschaft (ST_SOLS, 0x3D3, FA): Timeout | 1 |
| 0xE71448 | K-CAN Botschaft (STAT_SENSOR_AUC, 0x2D0, FA): DT_SEN_AUC invalid signal | 1 |
| 0xE71447 | K-CAN Botschaft (STAT_SENSOR_AUC, 0x2D0, FA): Timeout | 1 |
| 0xE71445 | K-CAN Botschaft (STAT_SCHICHTUNG_FOND, 0x2D3, FA): DT_STRA_RC_AIC invalid signal | 1 |
| 0xE71444 | K-CAN Botschaft (STAT_SCHICHTUNG_FOND, 0x2D3, FA): Timeout | 1 |
| 0xE71443 | K-CAN Botschaft (STAT_ENG_STA_AUTO, 0x30B, FA): ST_FN_MSA invalid signal | 1 |
| 0xE71442 | K-CAN Botschaft (STAT_ENG_STA_AUTO, 0x30B, FA): Timeout | 1 |
| 0xE71441 | K-CAN Botschaft (ST_HVSTO_1, 0x1FA, FA): AVL_TEMP_HTEX_HVSTO invalid signal | 1 |
| 0xE71440 | K-CAN Botschaft (ST_HVSTO_1, 0x1FA, FA): AVL_TEMP_HVSTO invalid signal | 1 |
| 0xE7143F | K-CAN Botschaft (ST_HVSTO_1, 0x1FA, FA): ST_CSOV_HVSTO invalid signal | 1 |
| 0xE7143E | K-CAN Botschaft (ST_HVSTO_1, 0x1FA, FA): ST_VA_COOL_HVSTO invalid signal | 1 |
| 0xE7143D | K-CAN Botschaft (ST_HVSTO_1, 0x1FA, FA): RQ_COOL_HVSTO invalid signal | 1 |
| 0xE7143C | K-CAN Botschaft (ST_HVSTO_1, 0x1FA, FA): Timeout | 1 |
| 0xE7143B | K-CAN Botschaft (STAT_FAS, 0x232, FA): ST_SHTR_DR invalid signal | 1 |
| 0xE7143A | K-CAN Botschaft (STAT_FAS, 0x232, FA): Timeout | 1 |
| 0xE71439 | K-CAN Botschaft (STAT_DRUCK_KAELTE, 0x2D2, FA): DT_PSEN_RFCI invalid signal | 1 |
| 0xE71438 | K-CAN Botschaft (STAT_DRUCK_KAELTE, 0x2D2, FA): Timeout | 1 |
| 0xE71437 | K-CAN Botschaft (ST_CABRF, 0x342, FA): ST_PO_CABRF_RETRF invalid signal | 1 |
| 0xE71436 | K-CAN Botschaft (ST_CABRF, 0x342, FA): ST_PO_CABRF invalid signal | 1 |
| 0xE71435 | K-CAN Botschaft (ST_CABRF, 0x342, FA): Timeout | 1 |
| 0xE71434 | K-CAN Botschaft (STAT_BFS, 0x22A, FA): ST_SHTR_PS invalid signal | 1 |
| 0xE71433 | K-CAN Botschaft (STAT_BFS, 0x22A, FA): Timeout | 1 |
| 0xE71432 | K-CAN Botschaft (STAT_FOG_UP_FRONT, 0x2D1, FA): DT_TEMP_WDW_FT invalid value | 1 |
| 0xE71431 | K-CAN Botschaft (STAT_FOG_UP_FRONT, 0x2D1, FA): DT_FOG_WDW_FT invalid value | 1 |
| 0xE71430 | K-CAN Botschaft (STAT_FOG_UP_FRONT, 0x2D1, FA): Timeout | 1 |
| 0xE7142F | K-CAN Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): CTR_PCOS invalid value | 1 |
| 0xE7142E | K-CAN Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): CTR_PWR_COS invalid value | 1 |
| 0xE7142D | K-CAN Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): CTR_PWR_SPCOS invalid value | 1 |
| 0xE7142C | K-CAN Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): SLCTN_SPCOS invalid value | 1 |
| 0xE7142B | K-CAN Botschaft (POWERMGMT_CTR_COS, 0x3B3, FA): Timeout | 1 |
| 0xE71423 | K-CAN Botschaft (LCD_BRIG_CLCTR, 0x393, FA):  DMPNG_LCD_LUM invalid signal | 1 |
| 0xE71422 | K-CAN Botschaft (LCD_BRIG_CLCTR, 0x393, FA): DSTN_LCD_LUM invalid signal | 1 |
| 0xE71421 | K-CAN Botschaft (LCD_BRIG_CLCTR, 0x393, FA): Timeout | 1 |
| 0xE71420 | K-CAN Botschaft (KLEMMEN, 0x12F, FA): ALIV_COU_KL invalid signal | 1 |
| 0xE7141F | K-CAN Botschaft (KLEMMEN, 0x12F, FA): ST_KL invalid signal | 1 |
| 0xE7141E | K-CAN Botschaft (KLEMMEN, 0x12F, FA): Timeout | 1 |
| 0xE7141A | K-CAN Botschaft (V_VEH, 0x1A1, FA): V_VEH_COG invalid signal | 1 |
| 0xE71419 | K-CAN Botschaft (V_VEH, 0x1A1, FA): Timeout | 1 |
| 0xE71418 | K-CAN Botschaft (FZZSTD, 0x3A0, FA): ST_ILK_ERRM_FZM invalid signal | 1 |
| 0xE71416 | K-CAN Botschaft (FZZSTD, 0x3A0, FA): Timeout | 1 |
| 0xE71415 | K-CAN Botschaft (FAHRZEUGTYP, 0x388, FA): TYP_STE invalid value | 1 |
| 0xE71414 | K-CAN Botschaft (A_TEMP, 0x2CA, FA): Timeout | 1 |
| 0xE71412 | K-CAN Botschaft (EINHEITEN, 0x2F7, FA): UN_TEMP invalid value | 1 |
| 0xE71411 | K-CAN Botschaft (EINHEITEN, 0x2F7, FA): Timeout | 1 |
| 0xE71410 | K-CAN Botschaft (TORQ_CRSH_1, 0xA5, FA): AVL_RPM_ENG_CRSH invalid value | 1 |
| 0xE7140E | K-CAN Botschaft (TORQ_CRSH_1, 0xA5, FA): Timeout | 1 |
| 0xE7140D | K-CAN Botschaft (DIMMUNG, 0x202, FA), CTR_ILUM_SW invalid signal | 1 |
| 0xE7140C | K-CAN Botschaft (DIMMUNG, 0x202, FA): Timeout | 1 |
| 0xE71408 | K-CAN Botschaft (DT_PT_2 , 0x3F9, FA): TEMP_ENG_DRV invalid signal | 1 |
| 0xE71407 | K-CAN Botschaft (DT_PT_2 , 0x3F9, FA): ST_DRV_VEH invalid signal | 1 |
| 0xE71406 | K-CAN Botschaft (DT_PT_2 , 0x3F9, FA): Timeout | 1 |
| 0xE71405 | K-CAN Botschaft (BEDIENUNG_KLIMA_SH, 0x2A2, FA):  OP_PFN_AMOD invalid signal | 1 |
| 0xE71404 | K-CAN Botschaft (BEDIENUNG_KLIMA_SH, 0x2A2, FA):  OP_IVNT invalid signal | 1 |
| 0xE71403 | K-CAN Botschaft (BEDIENUNG_KLIMA_SH, 0x1DA, FA):  OP_HTCL_RMAC invalid signal | 1 |
| 0xE71402 | K-CAN Botschaft (A_TEMP, 0x2CA, FA): TEMP_EX_UNFILT invalid signal | 1 |
| 0xE71401 | K-CAN Botschaft (A_TEMP, 0x2CA, FA): TEMP_EX invalid signal | 1 |
| 0xE70C38 | eKMV: Abschaltung wegen LIN-Kommunikationsfehler | 0 |
| 0xE70C37 | AC-LIN power supply: short circuit to Ubatt or open corcuit | 0 |
| 0xE70C36 | AC-LIN power supply: short circuit to Ground | 0 |
| 0xE70C35 | K-LIN: Klimabedienteill LIN Bus Kommunikation gestört (CRC, KOM-Error) | 0 |
| 0xE70C34 | K-LIN: Audiobedienteil LIN Bus Kommunikation gestört (CRC, KOM-Error) | 0 |
| 0xE70C33 | K-LIN: Audiobedienteil antwortet nicht | 0 |
| 0xE70C32 | K-LIN: Klimabedienteil antwortet nicht | 0 |
| 0xE70C31 | AC-LIN: PTC-Modul antwortet nicht | 0 |
| 0xE70C30 | AC-LIN: eKMV antwortet nicht | 0 |
| 0xE70C2D | AC-LIN: Gebläseendstufe antwortet nicht | 0 |
| 0xE70C2C | AC-LIN: Motor Umluft antwortet nicht | 0 |
| 0xE70C2B | AC-LIN: Motor Frischluft-Umluft-Staudruck antwortet nicht | 0 |
| 0xE70C29 | AC-LIN: Motor Temperatur-Luftmenge hinten antwortet nicht | 0 |
| 0xE70C28 | AC-LIN: Motor Schichtung vorn rechts antwortet nicht | 0 |
| 0xE70C27 | AC-LIN: Motor Schichtung vorn links antwortet nicht | 0 |
| 0xE70C24 | AC-LIN: Motor Belüftung-Fussraum rechts antwortet nicht | 0 |
| 0xE70C23 | AC-LIN: Motor Belüftung-Fussraum links antwortet nicht | 0 |
| 0xE70C21 | AC-LIN: Motor Mischluft rechts antwortet nicht | 0 |
| 0xE70C20 | AC-LIN: Motor Mischluft oder Mischluft links: antwortet nicht | 0 |
| 0xE70C1E | AC-LIN: Motor Entfrostung oder Zentralantrieb antwortet nicht | 0 |
| 0xE70BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur fuer Testzwecke | 1 |
| 0xE70414 | K-CAN Control Module Bus OFF | 0 |
| 0xE7040B | K-CAN Physikalischer Busfehler | 0 |
| 0x801254 | eKMV: Leistungsreduzierung der Standklimatisierung durch Powermanagement | 1 |
| 0x801253 | eKMV: Leistungsreduzierung vom Klimabetrieb durch Powermanagement | 1 |
| 0x801252 | eKMV: interner Komponentenfehler | 0 |
| 0x801251 | eKMV: Abschaltung wegen Anlaufprobleme | 0 |
| 0x80124E | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Hochvoltspeicher | 1 |
| 0x80124D | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Klima | 1 |
| 0x801237 | Heckscheibenheizung: Reduzierung HHS leistung wegen Powermanagement | 1 |
| 0x801236 | Mikrofilter: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801235 | Mischverbau | 0 |
| 0x801234 | Codierung: Signatur für Daten ungültig | 0 |
| 0x801233 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x801232 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x801231 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x801230 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x80122F | Falsche Audiobedienteilvariante verbaut | 0 |
| 0x80122E | Mikroschalter Zentralantrieb: Schaltzustand unplausibel | 0 |
| 0x80122D | Kulisse Zentralantrieb: Nockenerkennung unplausibel | 0 |
| 0x801228 | Powermanagement: Reduzierung Gebläseleistung | 1 |
| 0x801225 | Kompressor: Abschaltung wegen  Unterdruck im Kältemittelkreislauf | 0 |
| 0x801224 | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 |
| 0x801223 | Kompressor: Abschaltung wegen funktionsbedingter Randbedingungen | 1 |
| 0x801222 | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 |
| 0x801219 | eKMV: Übertemperatur Inverter | 0 |
| 0x801218 | eKMV: Abschaltung wegen Über- oder Unterspannung HV-Versorgung | 1 |
| 0x80120F | Keine Kommunikation über AC_LIN1 möglich | 0 |
| 0x80120E | Überspannung erkannt | 1 |
| 0x80120D | Unterspannung erkannt | 1 |
| 0x80120A | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 |
| 0x801209 | Gebläseendstufe: Kommunkationsfehler | 1 |
| 0x801208 | Gebläseendstufe: Strombegrenzung aktiv | 0 |
| 0x801207 | Gebläseendstufe: Unterbrechung zum Motor | 0 |
| 0x801206 | Gebläseendstufe: Unter- oder Überspannung erkannt | 1 |
| 0x801205 | Gebläseendstufe: Übertemperaturbegrenzung aktiv | 0 |
| 0x801204 | Gebläseendstufe: Kurzschluss oder blockiert | 0 |
| 0x8011FA | PTC-Modul: Unter- oder Überspannung | 0 |
| 0x8011F9 | PTC-Modul: Reduzierung Heizleistung wegen Powermanagement | 1 |
| 0x8011F8 | PTC-Modul: Übertemperatur | 1 |
| 0x8011F7 | PTC-Modul: Kommunikationsfehler | 0 |
| 0x8011F6 | PTC-Modul: Kurzschluss oder Unterbrechung im Heizstrang | 0 |
| 0x8011CB | Externes Klimabedienfeld: Unter- oder Überspannung erkannt | 0 |
| 0x8011CA | Externes Klimabedienfeld: Internen Elektronikfehler erkannt | 0 |
| 0x8011C9 | Externes Klimabedienfeld: Innentemperatursensor defekt | 0 |
| 0x8011C6 | Externes Klimabedienfeld: Tastenklemmer erkannt | 0 |
| 0x8011C4 | Externes FBM- und Audiobedienfeld: Internen Elektronikfehler erkannt | 0 |
| 0x8011C1 | Externes FBM- und Audiobedienfeld: Tastenklemmer erkannt | 0 |
| 0x8011BA | Schichtungspotentiometer: Kurzschluss nach Minus | 0 |
| 0x8011B9 | Schichtungspotentiometer: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B8 | Belüftungstemperatursensor rechts: Kurzschluss nach Minus | 0 |
| 0x8011B7 | Belüftungstemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B6 | Belüftungstemperatursensor oder Belüftungstemperatursensor links: Kurzschluss nach Minus | 0 |
| 0x8011B5 | Belüftungstemperatursensor oder Belüftungstemperatursensor links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B4 | Fussraumtemperatursensor rechts: Kurzschluss nach Minus | 0 |
| 0x8011B3 | Fussraumtemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B2 | Fussraumtemperatursensor oder Fussraumtemperatursensor links: Kurzschluss nach Minus | 0 |
| 0x8011B1 | Fussraumtemperatursensor oder Fussraumtemperatursensor links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011B0 | Verdampfertemperatursensor: Kurzschluss nach Minus | 0 |
| 0x8011AF | Verdampfertemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011AC | Motor Umluft: Blockierung | 0 |
| 0x8011AB | Motor Umluft: interner Motorfehler | 0 |
| 0x8011AA | Motor Umluft: Intitialisierungsfehler | 0 |
| 0x8011A3 | Motor Temperatur-Luftmenge hinten: Blockierung | 0 |
| 0x8011A2 | Motor Temperatur-Luftmenge hinten: interner Motorfehler | 0 |
| 0x8011A1 | Motor Temperatur-Luftmenge hinten: Intitialisierungsfehler | 0 |
| 0x8011A0 | Motor Schichtung vorn rechts: Blockierung | 0 |
| 0x80119F | Motor Schichtung vorn rechts: interner Motorfehler | 0 |
| 0x80119E | Motor Schichtung vorn rechts: Intitialisierungsfehler | 0 |
| 0x80119D | Motor Schichtung vorn links: Blockierung | 0 |
| 0x80119C | Motor Schichtung vorn links: interner Motorfehler | 0 |
| 0x80119B | Motor Schichtung vorn links: Intitialisierungsfehler | 0 |
| 0x801194 | Motor Belüftung-Fussraum rechts: Blockierung | 0 |
| 0x801193 | Motor Belüftung-Fussraum rechts: interner Motorfehler | 0 |
| 0x801192 | Motor Belüftung-Fussraum rechts: Intitialisierungsfehler | 0 |
| 0x801191 | Motor Belüftung-Fussraum links: Blockierung | 0 |
| 0x801190 | Motor Belüftung-Fussraum links: interner Motorfehler | 0 |
| 0x80118F | Motor Belüftung-Fussraum links: Intitialisierungsfehler | 0 |
| 0x80118B | Motor Mischluft rechts: Blockierung | 0 |
| 0x80118A | Motor Mischluft rechts: interner Motorfehler | 0 |
| 0x801189 | Motor Mischluft rechts: Intitialisierungsfehler | 0 |
| 0x801188 | Motor Mischluft oder Mischluft links: Blockierung | 0 |
| 0x801187 | Motor Mischluft oder Mischluft links: interner Motorfehler | 0 |
| 0x801186 | Motor Mischluft oder Mischluft links: Initialisierungsfehler | 0 |
| 0x801182 | Motor Entfrostung oder Zentralantrieb: Blockierung | 0 |
| 0x801181 | Motor Entfrostung oder Zentralantrieb: interner Motorfehler | 0 |
| 0x801180 | Motor Entfrostung oder Zentralantrieb: Intitialisierungsfehler | 0 |
| 0x02FF78 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x027800 | Energiesparmode aktiv | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | STAT_KM_STAND | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1701 | STAT_SYSTEMZEIT_WERT | s | High | signed long | - | 1.0 | 1.0 | 0.0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x078011 | EEP_E_ERASE_FAILED | 0 |
| 0x078007 | NVM_E_CONTROL_FAILED | 0 |
| 0x078037 | DEM_EVENT_7 | 0 |
| 0x078044 | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x078003 | NVM_E_REQ_FAILED | 0 |
| 0x07802E | FR_E_ACCESS | 0 |
| 0x078001 | Versand aktiver Fehlermeldungen mehrfach erfolglos. Puffer wird gelöscht. | 0 |
| 0x078009 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x07803A | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x078004 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x07802B | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x078000 | Puffer für aktive Fehlermeldungen voll. | 0 |
| 0x078020 | CANIF_E_INVALID_RXPDUID | 0 |
| 0x078043 | LINIF_E_RESPONSE | 0 |
| 0x078040 | eKMV: Start fehlgeschlagen | 1 |
| 0x078010 | CNM_E_TX_PATH_FAILED | 0 |
| 0x078016 | MCU_E_LOCK_FAILURE | 0 |
| 0x07800F | CANTP_E_COMM | 0 |
| 0x078019 | WDGM_E_SET_MODE | 0 |
| 0x078002 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x078030 | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 |
| 0x07802F | FRIF_E_JLE_SYNC | 0 |
| 0x078015 | MCU_E_CLOCK_FAILURE | 0 |
| 0x07803E | eKMV: Temperatursensor offen | 1 |
| 0x078032 | DEM_EVENT_2 | 0 |
| 0x07802C | PIA_E_IO_ERROR | 0 |
| 0x078029 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x07803C | FLS_E_READ_FAILED | 0 |
| 0x078008 | NVM_E_ERASE_FAILED | 0 |
| 0x078045 | Reset | 0 |
| 0x078036 | DEM_EVENT_6 | 0 |
| 0x078012 | EEP_E_WRITE_FAILED | 0 |
| 0x078033 | DEM_EVENT_3 | 0 |
| 0x078022 | Botschaft (3A0h, Fahrzeugzustand): Ausfall | 1 |
| 0x07803D | FLS_E_ERASE_FAILED | 0 |
| 0x07800A | NVM_E_READ_ALL_FAILED | 0 |
| 0x07800B | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x07803F | eKMV: Überstrom | 0 |
| 0x07802D | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x078046 | Botschaft (328h, Relativzeit): Ausfall | 1 |
| 0x07800D | CANNM_E_INIT_FAILED | 0 |
| 0x078034 | DEM_EVENT_4 | 0 |
| 0x07801F | CANIF_E_INVALID_TXPDUID | 0 |
| 0x078042 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x078018 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x078031 | DEM_EVENT_1 | 0 |
| 0x07801E | FEE_E_WRITE_FAILED | 0 |
| 0x078005 | NVM_E_WRITE_FAILED | 0 |
| 0x078035 | DEM_EVENT_5 | 0 |
| 0x078039 | FLS_E_WRITE_FAILED | 0 |
| 0x078006 | NVM_E_READ_FAILED | 0 |
| 0x078014 | EEP_E_COMPARE_FAILED | 0 |
| 0x078038 | DEM_EVENT_8 | 0 |
| 0x07800E | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x07802A | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x078017 | WDG_E_DISABLE_REJECTED | 0 |
| 0x07800C | CANIF_E_STOPPED | 0 |
| 0x078028 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x078013 | EEP_E_READ_FAILED | 0 |
| 0x07801A | CAN_E_TIMEOUT | 0 |
| 0x07803B | FLS_E_COMPARE_FAILED | 0 |
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
| KLAPPENMOTOR_IDENT | 0xA111 | - | Auslesen der herstellerspezifischen Daten eines  Klappenmotors. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA111 | RES_0xA111 |
| SITZHEIZUNG_VORNE_TASTER_LINKS | 0xD15D | STAT_TASTER_SITZHEIZUNG_VORNE_LINKS_EIN | 1: Taster Sitzheizung vorne rechts betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_RECHTS | 0xD15E | STAT_TASTER_SITZHEIZUNG_VORNE_RECHTS_EIN | 1: Taster Sitzheizung vorne rechts betätigt | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_VORNE_LED_RECHTS | 0xD15F | - | Status LED-Anzeige Sitzheizung vorne rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD15F |
| SITZHEIZUNG_VORNE_LED_LINKS | 0xD160 | - | Status LED-Anzeige Sitzheizung vorne links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD160 |
| FBM_SENS_TASTEN | 0xD592 | - | FBM-Sensorik | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD592 | RES_0xD592 |
| FBM_TASTEN | 0xD593 | - | FBM-Tasten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD593 | RES_0xD593 |
| STEUERN_SIGNALMODE | 0xD598 | - | Gibt an, ob die Signale der ZBE oder ACF bei Betätigung nach außen verschickt werden.  Wird bei Klemmenwechsel automatisch deaktiviert  (oder bei Arg. 0) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD598 | - |
| FBM_TASTEN_VORHANDEN_WERT | 0xD599 | STAT_FBM_TASTEN_VORHANDEN_WERT | Gibt aus, wieviele FBM-Tasten verbaut sind. | Tasten | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0 | - |
| TEMP_FUSSRAUM_LINKS_WERT | 0xD859 | STAT_TEMP_FUSSRAUM_LINKS_WERT | Temperatur Fussraum links | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| TEMP_FUSSRAUM_RECHTS_WERT | 0xD85A | STAT_TEMP_FUSSRAUM_RECHTS_WERT | Temperatur Fussraum rechts | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| TEMP_INNEN_UNBELUEFTET | 0xD85C | - | Ausgabe Rohwerte und gefilterter Wert vom unbelüfteten Innentemperatursensor (solarkompensiert). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD85C |
| BUS_IN_POTI_SCHICHTUNG_FOND_WERT | 0xD860 | STAT_BUS_IN_POTI_SCHICHTUNG_FOND_WERT | Ausgabe des Werts vom Schichtungspotentiometer Fond. | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KONFIGURATION_KLIMA_VORN | 0xD866 | - | Konfiguration der Klimaanlage vorn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD866 |
| KAELTEMITTEL_MEDIUM | 0xD868 | STAT_KAELTEMITTEL_MEDIUM_NR | Ausgabe der Art des Kältemittels. | 0-n | - | - | unsigned char | TAB_KAELTEMITTEL | - | - | - | - | 22 | - | - |
| STEUERN_KLAPPENMOTOR_VORN | 0xD86E | - | Aufruf für Ansteuerung der einzelnen Schrittmotore auf beliebige Öffnung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86E | - |
| KLIMA_TASTEN_VORN | 0xD86F | - | Tasten Klimabedienfeld | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD86F | RES_0xD86F |
| STEUERN_BEDIENUNG_TEMP | 0xD875 | - | Simuliert die Einstellung der Temperatur am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD875 | - |
| STEUERN_GEBLAESE | 0xD877 | - | Ansteuern der Gebläseendstufe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD877 | - |
| STEUERN_MOTOREN_KALIBRIERLAUF | 0xD88D | - | Kalibrierung der Schrittmotore. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| SCHRITTMOTOR_FEHLER | 0xD88E | - | Abfrage der Schrittmotor-Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD88E |
| STEUERN_SELBSTTEST_SCHRITTMOTOREN | 0xD88F | - | Aufruf startet den Selbsttest der Schrittmotoren. Alle Motore werden auf 50% angefahren und anschließend geprüft, ob die Position ereicht worden ist. Das Ergebnis kann mit dem Service SELBSTTEST_SCHRITTMOTOREN abgefragt werden. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_DISPLAY_TESTEN | 0xD89A | - | Steuert das Display mit Bitmustern an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD89A | - |
| STEUERN_PTC_MODULE_VORN | 0xD8A0 | - | Job zur Aktivierung des PTC-Moduls vorne ohne die erforderlichen Randbedingungen, wie z.B. Energiemanagement, Energieverteilungsalgoritmus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8A0 | - |
| VORHANDEN_FONDSCHICHTUNG | 0xD8AA | STAT_VORHANDEN_FONDSCHICHTUNGSPOTI | Ist ein Fondschichtungspotentiometer vorhanden? | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | 1: Solarsensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor vorhanden | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| AUDIO_TASTEN | 0xD8B5 | - | Tasten Audiobedienfeld | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8B5 | RES_0xD8B5 |
| LEDS_KLIMA_VORN | 0xD8C1 | - | LEDs Klimabedienfeld | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8C1 | RES_0xD8C1 |
| EKK_DREHZAHLERHOEHUNG | 0xD8C2 | STAT_EKK_DREHZAHLERHOEHUNG_EIN | Drehzahlerhöhung EKK | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| EKMV_DREHZAHL_GEN20 | 0xD8C3 | - | Drehzahl Kältemitteldichter | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8C3 | RES_0xD8C3 |
| EKMV_ANALOGWERTE_GEN20 | 0xD8C4 | - | Analogwertewerte von Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8C4 |
| EKMV_BETRIEBSZUSTAND_GEN20 | 0xD8C5 | - | Betriebszustände von Kältemittelverdichter Gen. 2.0 | bit | - | - | BITFIELD | RES_0xD8C5 | - | - | - | - | 22 | - | - |
| EKMV_RESET_GEN20 | 0xD8C6 | - | Reset Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8C6 | - |
| EKMV_AKS_GEN20 | 0xD8C7 | - | Isolationsprüfung eKMV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8C7 | RES_0xD8C7 |
| BUS_OUT_WASSERVENTIL_MONO_PWM_WERT | 0xD900 | STAT_BUS_OUT_WASSERVENTIL_MONO_WERT | Bussignal Mono-Wasserventil | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SOLLWERT_PTC_MODUL_VORN | 0xD902 | STAT_SOLLWERT_PTC_WERT | Ausgabe des Sollwerts für das PTC-Modul. | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_OUT_ZUSATZWASSERPUMPE_EIN | 0xD904 | STAT_BUS_OUT_ZUSATZWASSERPUMPE_EIN | Bussignal Zusatzwasserpumpe aktiv / nicht aktiv | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| TIMER_EINLAUFSCHUTZ | 0xD905 | STAT_TIMER_EINLAUFSCHUTZ_WERT | Ermittlung der verbleibenden Restzeit beim Einlaufschutz. | s | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_VORHANDEN | 0xD90E | STAT_VORHANDEN_SITZHEIZUNG_TASTER_VORNE | 1: Taster für Sitzheizung vorne codiert | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_KOMPRESSORKUPPLUNG | 0xD916 | STAT_VORHANDEN_KOMPRESSORKUPPLUNG | Kompressorkupplung vorhanden | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder schreiben des  neuen Status. Erst nach vollständigem Einlauf  wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918 | RES_0xD918 |
| KLIMA_VORN_LUFTVERTEILUNG_LI_RE | 0xD91A | - | Ausgabe des Status der Luftverteilung vorne. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD91A |
| BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | 0xD91D | STAT_BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | BUS-Signal PWM-Wert für Ansteuerung Klimakompressor | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927 | - |
| KLIMA_VORN_KLAPPEN_PRG_MITTE | 0xD928 | STAT_KLIMA_VORN_KLAPPEN_PRG_MITTE | Ausgabe Status Klappenprogramm. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_GEBLAESESTUFE_ANZ | 0xD92B | STAT_KLIMA_VORN_GEBLAESESTUFE_ANZ_WERT | Gibt den Wert der zentralen Gebläsestufenanzeige  im Display des Bedienteils aus. | Stufe | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_OFF_EIN | 0xD92C | STAT_KLIMA_VORN_OFF_EIN | Ausgabe des Funktionsstatus Klima OFF und der LED an der Taste OFF | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_DEFROST_EIN | 0xD92D | STAT_KLIMA_VORN_PRG_DEFROST_EIN | Ausgabe des Status der Funktion Defrost | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_MAX_AC_EIN | 0xD92E | STAT_KLIMA_VORN_PRG_MAX_AC_EIN | Ausgabe des Status der Funktion MAX AC | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_AUC_EIN | 0xD930 | STAT_KLIMA_VORN_PRG_AUC_EIN | Ausgabe des Status der Funktion AUC | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_UMLUFT_EIN | 0xD931 | STAT_KLIMA_VORN_PRG_UMLUFT_EIN | Ausgabe des Status der Funktion Umluft | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_HHS_EIN | 0xD932 | STAT_KLIMA_VORN_PRG_HHS_EIN | Ausgabe des Status der Funktion Heckscheibenheizung | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_AC_EIN | 0xD934 | STAT_KLIMA_VORN_PRG_AC_EIN | Ausgabe des Status der Funktion AC | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_KLIMASTIL_MITTE | 0xD936 | STAT_KLIMA_VORN_PRG_KLIMASTIL_MITTE_WERT | Ausgabe der Soft-Intense-Einstellung  Mitte in Stufen | Stufe | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0xD939 | STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | Ausgabe des Status der Funktion Standlüften | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_VORN_GEBLAESELEISTUNG_WERT | 0xD93F | STAT_KLIMA_VORN_GEBLAESELEISTUNG_WERT | Ausgabe der tatsächlichen Gebläseleistung, mit  der die Gebläseendstufe angesteuert wird. 0 % = AUS 100 % = Maximale Gebläseleistung | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLP_POS_DEFROST_WERT | 0xD941 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD941 |
| KLP_POS_SCHICHTUNG_LI_WERT | 0xD94A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94A |
| KLP_POS_SCHICHTUNG_RE_WERT | 0xD94B | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94B |
| KLP_POS_FRISCHLUFT_WERT | 0xD94C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94C |
| KLP_POS_UMLUFT_WERT | 0xD94D | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94D |
| KLP_POS_TEMP_LUFT_FOND_WERT | 0xD950 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD950 |
| MOTOR_KALIBRIERLAUF | 0xD953 | - | Abfrage des aktuellen Status des Kalibrierlaufs der Klappenmotoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD953 |
| SELBSTTEST_SCHRITTMOTORE | 0xD954 | STAT_SELBSTTEST_SCHRITTMOTORE_NR | Status Schrittmotorenselbsttests: 0 = nicht gestartet/nicht angefordert, 1 = Test läuft gerade, 2 = Test erfolgreich abgeschlossen, 3 = Test nicht erfolgreich abgeschlossen | 0-n | - | - | unsigned char | TAB_STATUS_SELBSTTEST | - | - | - | - | 22 | - | - |
| DRUCK_TEMP_SENSOR_VORHANDEN | 0xD956 | STAT_DRUCK_TEMP_SENSOR_VORHANDEN | 1: Kombinierter Druck- und Temperatursensor verbaut | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_LINKS_WERT | 0xD957 | STAT_TEMP_BELUEFTUNG_LINKS_WERT | Temperatur Belüftungsklappe links | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_RECHTS_WERT | 0xD958 | STAT_TEMP_BELUEFTUNG_RECHTS_WERT | Temperatur Belüftungsklappe rechts | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | 1: Drucksensor verbaut | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | Wasserventil vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A |
| TEMP_VERDAMPFER_WERT | 0xD95C | STAT_TEMP_VERDAMPFER_WERT | Temperatur Verdampfer | °C | - | high | char | - | - | - | - | - | 22 | - | - |
| BUS_IN_KOMPRESSORFREIGABE | 0xD960 | STAT_BUS_IN_KOMPRESSORFREIGABE_EIN | Gibt aus, ob die Motorelektronik die Klimakompressorfreigabe erteilt hat. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_SOLARSENSOR_WERT | 0xD962 | - | BUS-Signal Solarsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD962 |
| BUS_IN_AUC_SENSOR_WERT | 0xD964 | STAT_BUS_IN_AUC_SENSOR_WERT | BUS-Signal AUC-Sensor | Stufe | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_BESCHLAGSENSOR_WERT | 0xD966 | STAT_BUS_IN_BESCHLAGSENSOR_WERT | BUS-Signal Beschlagssensor | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_KAELTEMITTELDRUCK_WERT | 0xD968 | STAT_BUS_IN_R134A_DRUCK_WERT | BUS-Signal Kältemitteldruck | bar | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Bus signal Aussentempertatur | °C | - | - | int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KLIMA_TEMPERATUR_SOLLWERT | 0xD977 | - | Ausgabe der eingestellten Sollwert-Temperatur (links und rechts) der Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD977 |
| STEUERN_EINZELADRESSIERUNG | 0xD978 | - | Adressvergabe an einzelnen Motor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD978 | - |
| KLIMA_LIN_1_ADRESSEN | 0xD97B | - | Lesen aller ansprechbaren LIN-Adressen des LIN-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD97B |
| STEUERN_RESET_LIN | 0xD97C | - | Rücksetzen des LIN-Bus mit Wegschalten der LIN-Versorgungsspannung. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| KLAPPEN_VERSTELLBEREICH | 0xD980 | - | Auslesen des Verstellbereichs der einzelnen Klappen als Inkremente, die über den Eichlauf ermittelt werden konnten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD980 |
| STEUERN_AUTOADR_KLAPPENMOTOREN | 0xD981 | - | Startet die Autoadressierung zur Vergabe der Motoradressen im System anhand der Reihenfolge der Anschlüsse am Kabelbaum. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| KLIMA_TEMPERATUR_MITTE_SOLLWERT | 0xD988 | STAT_KLIMA_SOLLTEMP_MITTE_WERT | Ausgabe der eingestellten Sollwert-Temperatur der Klimaanlage. | °C | - | - | unsigned char | - | - | 2.0 | - | - | 22 | - | - |
| KLP_POS_MISCHLUFT_WERT | 0xD98A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98A |
| MOT_POS_ZENTRALANTRIEB_WERT | 0xD98B | - | Auslesen des Soll- und Ist-Werts des Motors für den Zentralantrieb mit Kulissenscheibe. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98B |
| KLP_POS_MISCHLUFT_LINKS_WERT | 0xD98C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98C |
| KLP_POS_MISCHLUFT_RECHTS_WERT | 0xD98E | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98E |
| MIKROSCHALTER_ZENTRALANTRIEB | 0xD98F | STAT_MIKROSCHALTER_ZENTRALANTRIEB_EIN | Ausgabe des Status des Mikroschalters am Zentralantrieb. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| TEMP_BELUEFTUNG_WERT | 0xD990 | STAT_TEMP_BELUEFTUNG_WERT | Temperatur Belüftung | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| TEMP_FUSSRAUM_WERT | 0xD991 | STAT_TEMP_FUSSRAUM_WERT | Temperatur Fussraum | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_AUDIOBEDIENTEIL | 0xD995 | STAT_VORHANDEN_AUDIOBEDIENTEIL | Gibt aus, ob ein Audiobedienteil an Klimaanlage  angeschlossen ist. z.B. Verbau Radio 1.2 (Basisradio), keine Audiobedienung am  Centerstack-Bedienfeld | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| POTI_SCHICHTUNG_MITTE_WERT | 0xD998 | STAT_POTI_SCHICHTUNG_MITTE_WERT | Ausgabe des Werts vom Schichtungspotentiometer für Belüftung. | % | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| MOT_POS_BEL_FUSS_LI_RE_WERT | 0xD99C | - | Auslesen der Soll- und Ist-Werte für den Zentralantrieb für Belüftung und Fussraum. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD99C |
| VARIANTE_AUDIOBEDIENTEIL | 0xD9A0 | STAT_VARIANTE_AUDIOBEDIENTEIL | Gibt aus, welche Variante vom Audiobedienteil an  Klimaelektronik angeschlossen ist. | 0-n | - | - | unsigned char | TAB_VARIANTE_AUDIOBEDIENTEIL | - | - | - | - | 22 | - | - |
| BUS_OUT_KOMPRESSORKUPPLUNG_EIN | 0xD9A1 | STAT_BUS_OUT_KOMPRESSORKUPPLUNG_EIN | Signal für die Anforderung an die Kompressorkupplung | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_ZWEITER_VERDAMPFERFUEHLER | 0xD9A2 | STAT_VORHANDEN_ZWEITER_VERDAMPFERFUEHLER | Gibt aus, ob zweiter Verdampferfühler am  Steuergerät angeschlossen ist. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| TEMP_ZWEITER_VERDAMPFERFUEHLER_WERT | 0xD9A3 | STAT_TEMP_ZWEITER_VERDAMPFERFUEHLER_WERT | Zweiter Temperaturfühler Verdampfer | °C | - | - | char | - | - | 5.0 | -10.0 | - | 22 | - | - |
| VORHANDEN_EKMV | 0xD9A4 | STAT_VORHANDEN_EKMV | Elektrischer Kältemittelverdichter | 0-n | - | high | unsigned char | TAB_KMV_HYBRID_GENERATION | - | - | - | - | 22 | - | - |
| STEUERN_ZENTRALANTRIEB | 0xD9A6 | - | Ansteuerung von Zentralantrieben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD9A6 | - |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_30B_EIN | 0xDB06 | STAT_STATUS_KLEMME_30B_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Liefert Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| _STATUS_VALEO_AUTOADR_KLAPPENMOTOREN | 0x4002 | - | VALEO Entwicklerjob Lesen Status Autoadressierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002 |
| _STATUS_VALEO_ANALOGEINGAENGE_ADC_WERT | 0x4010 | - | VALEO Entwicklerjob ADC Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010 |
| _STATUS_VALEO_STANDHEIZUNG_EINGANG_WERT | 0x4011 | STAT_STANDHEIZUNG | VALEO Entwicklerjob Zustand Eingang Standhiezung | 0-n | - | high | unsigned char | TAB_EINGANG_STATUS | - | - | - | - | 22 | - | - |
| _STEUERN_VALEO_AUSGANG | 0x4012 | - | VALEO Entwicklerjob Ansteuerung des Ausgangs | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4012 | - |
| _STATUS_VALEO_DIAGNOSE | 0x4013 | - | VALEO Entwicklerjob Status diagnose Ausgang | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4013 |
| _STEUERN_VALEO_AC_LIN_SPANNUNG_KALIBRIERUNG | 0x4014 | - | VALEO Entwicklerjob LIN Spannung kalibrierung | - | - | - | - | - | - | - | - | - | 2F | - | - |
| _STEUERN_VALEO_ECU_RESET_BEI_WATCHDOG | 0x4015 | - | VALEO Entwicklerjob ECU Reset | - | - | - | - | - | - | - | - | - | 2F | - | - |
| _STATUS_VALEO_CPU_LOAD | 0x4016 | - | VALEO Entwicklerjob Status CPU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4016 |
| _STEUERN_VALEO_RESET_CPU_LOAD | 0x4017 | - | VALEO Entwicklerjob Reset the CPU load | - | - | - | - | - | - | - | - | - | 2F | - | - |
| _STEUERN_VALEO_ENABLE | 0x4018 | - | VALEO Entwicklerjob. Enable all Valeo Diag Write jobs: _STEUERN_xx until reset | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4018 | - |
| _VALEO_PCB_HW_NUMBER | 0x4019 | - | VALEO Entwicklerjob. PCB / Electronic nomenclature index: industrial folder revision | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4019 | RES_0x4019 |
| _VALEO_PCB_PRODUCTION_DATA | 0x401A | - | VALEO Entwicklerjob. produktion Jahr, Monate und Tag | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401A | RES_0x401A |
| _VALEO_PART_NUMBER | 0x401B | - | VALEO Entwicklerjob. Valeo part number | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401B | RES_0x401B |
| _VALEO_PART_NUMBER_INDEX | 0x401C | - | VALEO Entwicklerjob. Valeo part number index | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401C | RES_0x401C |
| _VALEO_PCB_SERIAL_NUMBER | 0x401D | - | serial number of the PCB to be set at 0 at beginning of each day. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x401D | RES_0x401D |
| _VALEO_ICT_STEP_COUNTER | 0x401E | - | VALEO Entwicklerjob. indicates if product passed ICT (In Circuit Tester) and functional tests successfully or not. At end of ICT, when product is successfully tested, write 0x01 in the step counter address. At end of Final Tester, when product is successfully tested, write 0x03 in the step counter address | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401E | RES_0x401E |
| _STATUS_VALEO_STROM_BEGRENZUNG_KALIBRIERUNG | 0x401F | STAT_STROM_BEGRENZUNG_WERT | VALEO Entwicklerjob Read the value of the current limitation stored by the callibration process of the high-side | - | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| _STEUERN_VALEO_LESEN_SPEICHER | 0x4020 | - | VALEO Entwicklerjob. Read EEPROM value from block  number | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4020 | - |
| _STEUERN_VALEO_SCHREIBEN_SPEICHER | 0x4021 | - | VALEO Entwicklerjob. Write EERPOM values at block number | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4021 | - |

### RES_0XD15F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | unsigned char | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | unsigned char | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | unsigned char | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_NR | 0-n | - | unsigned char | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD160

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | unsigned char | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | unsigned char | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | unsigned char | - | - | - | - | - | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_NR | 0-n | - | unsigned char | - | TAB_SH_SL_LED | - | - | - | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### TAB_SH_SL_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED an |
| 0x01 | Eine LED an |
| 0x02 | Zwei LEDs an |
| 0x03 | Drei LEDs an |
| 0xFF | Keine LEDs angeschlossen |

### RES_0XD592

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_2_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_3_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_4_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_5_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_6_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_7_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_8_SENS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht berührt, 1 = Taste berührt |

### ARG_0XD592

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Normalbetrieb, 1 = Berührung simulieren |

### RES_0XD593

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_2_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_3_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_4_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_5_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_6_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_7_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_8_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Taste nicht betätigt, 1 = Taste betätigt |

### ARG_0XD593

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SGBD-Autor durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

### TAB_FBM_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_TASTEN |
| 0x01 | FBM_1 |
| 0x02 | FBM_2 |
| 0x03 | FBM_3 |
| 0x04 | FBM_4 |
| 0x05 | FBM_5 |
| 0x06 | FBM_6 |
| 0x07 | FBM_7 |
| 0x08 | FBM_8 |

### ARG_0XD598

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGNALMODE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | SIGNALMODE:  0 = NICHT BLOCKIERT = Signale werden verschickt,  1 = BLOCKIERT = Signale werden blockiert, keine Auswirkung auf andere Funktionen (Steuergeräte) |

### ARG_0XD5A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_SH_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | SH_L_VORN |
| 0x02 | SH_R_VORN |

### RES_0XD85C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_INNEN_WERT | °C | - | char | - | - | - | - | - | Errechnete Innentemperatur |
| STAT_TEMP_INNEN_NTC1_WERT | °C | - | char | - | - | - | - | - | Oberflächentemperatur am NTC1 Innentemperaturfühler |
| STAT_TEMP_INNEN_NTC2_WERT | °C | - | char | - | - | - | - | - | Umgebungstemperatur am NTC2 Innentemperaturfühler |
| STAT_TEMP_INNEN_SOLAR_WERT | W/m² | - | int | - | - | - | - | - | Solarwert von Innentemperaturfühler |

### RES_0XD866

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_ZUSATZWASSERPUMPE | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_KLIMA_DISPLAY_EINHEIT_NR | 0-n | - | unsigned char | - | TAB_TEMP_EINHEIT | - | - | - | 0 = Celsius,  1 = Fahrenheit |
| STAT_KLIMA_VARIANTE_NR | 0-n | - | unsigned char | - | TAB_KLIMAVARIANTE | - | - | - | Klimavariante:  0 = 2-zonig 1 = 2,5-zonig 2 = 4-zonig 3 = 1-zonig |
| STAT_VORHANDEN_EMOTORWASSERPUMPE | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_PTC_VORN | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_UMWAELZPUMPE | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |

### TAB_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Celsius |
| 0x01 | Fahrenheit |

### TAB_KLIMAVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | 2-zonig |
| 0x01 | 2,5-zonig |
| 0x02 | 4-zonig |
| 0x03 | 1-zonig |
| 0x04 | 1-zonig IHKR |
| 0x05 | 1-zonig IHKA |

### TAB_KAELTEMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | R134A |
| 0x01 | CO2 |

### ARG_0XD86E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPE | 0-n | - | unsigned char | - | TAB_KLAPPEN_VORN | - | - | - | - | - | Zu verwendende Text für die Tabelle zur Ansteuerung der Motoren: ENTFROSTUNG, BEL_LI_AUSSEN, BEL_LI_MITTE, BEL_LI, BELUEFTUNG, BEL_RE, BEL_RE_MITTE, BEL_RE_AUSSEN, FUSS_LI, FUSS_GES_LI, FUSS_GES_RE, FUSS_RE, FUSSRAUM, SCHICHT_LI, SCHICHT_RE, SCHICHTUNG, FL_STAU, UMLUFT, FUSS_FOND_LI, FUSS_FOND, FUSS_FOND_RE, SCHICHT_FOND_LI, SCHICHT_FOND_RE, SCHICHT_FOND, TEMP_LUFTMENGE_FOND, KNIE_LI, KNIE_RE, MISCH_LI, MISCH_RE. Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument KLAPPE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| KLAPPENOEFFNUNG | % | - | unsigned char | - | - | - | - | - | 0.0 | 100.0 | Gibt an, wie weit die Klappe geöffnet werden soll: 0 ... 100%,  0%=Geschlossen, 100%=Offen |

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
| 0x05 | FUSS_GES_LI |
| 0x0E | SCHICHT_FOND |
| 0x08 | SCHICHTUNG |
| 0x05 | FUSSRAUM |
| 0x04 | BEL_RE |
| 0x04 | BELUEFTUNG |
| 0x01 | BEL_LI |
| 0x0E | TEMP_LUFTMENGE_FOND |
| 0x06 | FUSS_GES_RE |
| 0x10 | MISCH_LI |
| 0x11 | MISCH_RE |

### RES_0XD86F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_VORN_UMLUFT_AUC_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_HHS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_KLIMA_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_MAX_AC_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_ALL_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_REST_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_AUTO_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_AUTO_LI_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_AUTO_RE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_PLUS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_MINUS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_PLUS_LI_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_MINUS_LI_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_PLUS_RE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_WIPPE_MINUS_RE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_TOGGLE_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_TOGGLE_LINKS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_TOGGLE_RECHTS_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_BELUEFTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_FUSSRAUM_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_BF_BELUEFTUNG_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_LV_BF_FUSSRAUM_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_VORN_RESERVIERT1_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT2_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT3_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT4_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT5_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |
| STAT_TASTE_VORN_RESERVIERT6_EIN | 0-n | - | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |

### ARG_0XD86F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_TASTEN_KLIMA | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: LV_RE, LV_LI, LV_MITTE, AUTO_RE, AUTO_LI, AUTO_MITTE, GBL_PLUS_RE, GBL_MINUS_RE, GBL_PLUS_LI, GBL_MINUS_LI, GBL_PLUS_MITTE, GBL_MINUS_MITTE, MAX_AC, KLIMA, UML_AUC, ALL, DEFROST, HHS; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### TAB_TASTEN_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | NORMALBETRIEB |
| 0x01 | AUC_UMLUFT |
| 0x02 | HHS |
| 0x03 | ENTFROSTUNG |
| 0x04 | KLIMA |
| 0x05 | MAX_AC |
| 0x06 | ALL |
| 0x07 | KLIMA_OFF |
| 0x08 | REST |
| 0x09 | AUTO |
| 0x0A | AUTO_LI |
| 0x0B | AUTO_RE |
| 0x0C | WIPPE_PLUS |
| 0x0D | WIPPE_MINUS |
| 0x0E | WIPPE_PLUS_LI |
| 0x0F | WIPPE_PLUS_RE |
| 0x10 | WIPPE_MINUS_LI |
| 0x11 | WIPPE_MINUS_RE |
| 0x12 | LV_TOGGLE_MITTE |
| 0x13 | LV_TOGGLE_LINKS |
| 0x14 | LV_TOGGLE_RECHTS |
| 0x15 | LV_ENTFROSTUNG |
| 0x16 | LV_BELUEFTUNG |
| 0x17 | LV_FUSSRAUM |
| 0x18 | LV_BF_BELUEFTUNG |
| 0x19 | LV_BF_FUSSRAUM |
| 0x1A | DUMMY |
| 0x1B | DUMMY |
| 0x1C | DUMMY |
| 0xFF | Ungueltig |

### TAB_TASTENSTATUS_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |
| 0x02 | nicht verbaut |
| 0xFF | Ungültig |

### ARG_0XD875

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ORT | 0-n | - | unsigned char | - | TAB_SOLLTEMP | - | - | - | - | - | STOP (Abbruch der Ansteuerung), TEMP_LINKS (Vorgabe Temperatur links), TEMP_RECHTS (Vorgabe Temperatur rechts), TEMP_MITTE (Vorgabe Temperatur mitte) |
| TEMPERATUR | °C | - | unsigned char | - | - | 2.0 | - | - | 16.0 | 28.0 | Vorgabe der einzustellenden Temperatur in 0,5-er Schritten: Bereich 16 - 28 |

### TAB_SOLLTEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | TEMP_LINKS |
| 0x02 | TEMP_RECHTS |
| 0x03 | TEMP_MITTE |

### ARG_0XD877

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | unsigned char | - | - | - | - | - | 0.0 | 100.0 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### RES_0XD88E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTMOTOR_BLOCKIERUNG_WERT | Fehler | - | unsigned int | - | - | - | - | - | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Blockierung Schrittmotor |
| STAT_SCHRITTMOTOR_ANTWORT_FEHLT_WERT | Fehler | - | unsigned int | - | - | - | - | - | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Antwort Schrittmotor |
| STAT_SCHRITTMOTOR_INTERNER_FEHLER_WERT | Fehler | - | unsigned int | - | - | - | - | - | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler interner Motorfehler |

### ARG_0XD89A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUSTER | 0-n | high | unsigned char | - | TAB_BITMUSTER | - | - | - | - | - | Gibt an, welches Bitmuster angesteuert werden soll: BITMUSTER1 bis BITMUSTERn Informationen in der diskreten Wertetabelle |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Bitmuster: 0 = AUS, 1 = EIN |

### TAB_BITMUSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | BITMUSTER_1 |
| 0x01 | BITMUSTER_2 |
| 0x02 | BITMUSTER_3 |
| 0x03 | BITMUSTER_4 |
| 0x04 | BITMUSTER_5 |
| 0x05 | BITMUSTER_6 |
| 0x06 | BITMUSTER_7 |
| 0x07 | BITMUSTER_8 |

### ARG_0XD8A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PTC | 0-n | - | unsigned char | - | TAB_PTC_MODUL | - | - | - | - | - | Gibt an, welches PTC-Modul angesteuert werden soll: EINZELNER (default); LINKS; RECHTS |
| SOLLWERT | % | - | unsigned char | - | - | - | - | - | 0.0 | 100.0 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100% |

### TAB_PTC_MODUL

| WERT | TEXT |
| --- | --- |
| 0 | EINZELNER |
| 1 | LINKS |
| 2 | RECHTS |

### RES_0XD8B5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_ON_OFF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status ON/OFF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_MODE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status MODE-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_EJECT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status EJECT-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_TP_AM_FM_TRF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status TP/AM/FM/TRF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_LINKS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status Skip-Taste links: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status Skip-Taste rechts: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |

### ARG_0XD8B5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_TASTEN_AUDIO | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: EIN_AUS, MODE, TP, EJECT, SUCHLAUF_LI, SUCHLAUF_RE; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

### TAB_TASTEN_AUDIO

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_TASTEN |
| 0x01 | MODE |
| 0x02 | EJECT |
| 0x03 | SUCHLAUF_LI |
| 0x04 | SUCHLAUF_RE |
| 0x05 | EIN_AUS |
| 0x06 | TP |

### RES_0XD8C1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_LED_UMLUFT_AUC_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_HHS_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_KLIMA_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_MAX_AC_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_ALL_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_REST_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_AUTO_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_AUTO_LI_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_AUTO_RE_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_LV_ENTFROSTUNG_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_LV_BELUEFTUNG_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_LV_FUSSRAUM_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_UMLUFT_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_RESERVIERT2_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_RESERVIERT3_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_RESERVIERT4_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |
| STAT_KLIMA_VORN_LED_RESERVIERT5_EIN | 0-n | - | unsigned char | - | TAB_LEDSTATUS_KLIMA | - | - | - | LED: 0 = AUS, 1 = EIN, 2=nicht verbaut |

### ARG_0XD8C1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | 0-n | - | unsigned char | - | TAB_KLIMA_LEDS_ANSTEUERUNG | - | - | - | - | - | Ansteuerung der LEDs |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0=Normalbetrieb, 1=Ansteuerung aktivieren |

### TAB_LEDSTATUS_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | LED aus |
| 0x01 | LED an |
| 0x02 | LED nicht verbaut |
| 0xFF | Ungültig |

### TAB_KLIMA_LEDS_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_LEDS_AUS |
| 0x01 | ALLE_LEDS_AN |

### RES_0XD8C3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EKMV_DREHZAHL_SOLL_WERT | % | high | unsigned char | - | - | - | 2.0 | - | Soll-Drehzahl in % |
| STAT_EKMV_DREHZAHL_IST_WERT | % | high | unsigned char | - | - | - | 2.0 | - | Ist-Drehzahl in % |

### ARG_0XD8C3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | % | high | unsigned char | - | - | 2.0 | - | - | - | - | Vorgabe der Drehzahl in Prozent. |

### RES_0XD8C4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | % | high | unsigned char | - | - | - | 2.0 | - | Ausgabe der Ist-Drehzahl |
| STAT_LEISTUNG_WERT | kW | high | unsigned char | - | - | - | 25.0 | - | Ausgabe der Leistung in KW auf 2 Nachkommastellen genau. Vom SG wird der Wert mit Faktor 25 geliefert und in der SGBD durch 25 dividiert. |
| STAT_STROM_DC_WERT | A | high | unsigned char | - | - | - | 4.0 | - | Ausgabe des Stroms der Hochspannung. |
| STAT_HOCHSPANNUNG_WERT | V | high | unsigned char | - | - | 2.0 | - | - | Ausgabe der Hochspannung in Volt. |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | - | - | -50.0 | Ausgabe der Temperatur in Grad Celsius. Das Steuergerät liefert den Wert mit Offset 50. SGBD subtrahiert 50. |
| STAT_STROM_AC_WERT | A | high | unsigned char | - | - | - | - | - | Ausgabe des Stroms. |

### RES_0XD8C5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATUR_EIN | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Begrenzung wegen Übertemperatur, 1 = aktiv |
| STAT_UEBERSTROM_EIN | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Begrenzung wegen Überstrom, 1 = aktiv |
| STAT_UNTER_UEBERSPANNUNG_EIN | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Abschaltung wegen Über-/Unterspannung, 1 = aktiv |
| STAT_ABSCHALTUNG_UEBERTEMP_EIN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Abschaltung wegen kritischer Übertemperatur, 1 = aktiv |
| STAT_ABSCHALTUNG_DREHMOMENT_EIN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Abschaltung wegen Drehmomentüberschreitung, 1 = aktiv |
| STAT_ABSCHALTUNG_KOMMFEHLER_EIN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Abschaltung wegen LIN-Kommuniaktionsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_VERSORGUNGSFEHLER_EIN | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Abschaltung wegen externem Versorgungsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_INVFEHLER_EIN | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Abschaltung wegen Fehler Inverterversorgung, 1 = aktiv |
| STAT_ABSCHALTUNG_SENSORIK_EIN | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Abschaltung wegen Fehler in Sensorik: Temperatur- oder Phasenstromsensor defekt, 1 = aktiv |
| STAT_ABSCHALTUNG_KURZSCHLUSS_EIN | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Abschaltung wegen Kurzschluss, 1 = aktiv |
| STAT_ABSCHALTUNG_ANLAUFFEHLER_EIN | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Abschaltung wegen Anlauffehler, 1 = aktiv |
| STAT_BETRIEB_NR | 0-n | high | unsigned int | 0x3800 | TAB_BETRIEBSSTATUS_EKMVGEN20 | - | - | - | Status zum Betrieb |
| STAT_KOMMUNIKATION | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Status der Kommunikation, 0 = kein Fehler, 1 = Fehler aktiv |
| STAT_KOMMUNIKATION_2 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Status der Kommunikation 2, 0 = kein Fehler, 1 = Fehler aktiv |

### TAB_BETRIEBSSTATUS_EKMVGEN20

| WERT | TEXT |
| --- | --- |
| 0x0000 | eKMV aus |
| 0x0800 | eKMV ein |
| 0x1000 | eKMV in Degradation |
| 0x1800 | eKMV Stopp |
| 0x2000 | eKMV Shutdown |
| 0x2800 | eKMV im Aufstart |
| 0x3000 | eKMV Reset nicht möglich |
| 0x3800 | ungültig |

### ARG_0XD8C6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reset Kältemittelverdichter: 0 = kein Reset 1 = Reset durchführen |

### RES_0XD8C7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_EKMV | 0-n | high | unsigned char | - | TAB_AKS_EKMV | - | - | - | Ergebnis der Isolationsprüfung: 0 = kein aktiver Kurzschluss 1 = aktiver Kurzschluss Low-Side 2 = aktiver Kurzschluss High-Side |

### ARG_0XD8C7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | 0-n | high | unsigned char | - | TAB_AKS_EKMV | - | - | - | - | - | Isolationprüfung: 0x00 = kein aktiver Kurzschluss 0x01 = aktiver Kurzschluss Low-Side 0x02 = aktiver Kurzschluss High-Side |

### TAB_AKS_EKMV

| WERT | TEXT |
| --- | --- |
| 0x00 | kein aktiver Kurzschluss |
| 0x01 | aktiver Kurzschluss Low-Side |
| 0x02 | aktiver Kurzschluss High-Side |

### RES_0XD918

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status Einlaufschutz: 0 = Einlaufschutz abgeschlossen 1 = Einlaufschutz noch gesetzt |

### ARG_0XD918

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### RES_0XD91A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_LUFTVERTEILUNG_LINKS_NR | 0-n | - | unsigned char | - | TAB_LUFTVERTEILUNG | - | - | - | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 5=OBEN_UNTEN (Nur Fahrer); 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); |
| STAT_KLIMA_VORN_LUFTVERTEILUNG_RECHTS_NR | 0-n | - | unsigned char | - | TAB_LUFTVERTEILUNG | - | - | - | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 5=OBEN_UNTEN (Nur Fahrer); 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); |

### TAB_LUFTVERTEILUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Null |
| 0x01 | Unten |
| 0x02 | Mitte |
| 0x03 | Mitte und Unten |
| 0x05 | Oben und Unten (nur Fahrer) |
| 0x07 | Oben und Mitte und Unten |
| 0x08 | Automatik |
| 0x20 | Individual |
| 0x28 | Sonderprogramm |
| 0x29 | Max. AC |
| 0x2A | Entfrostung |
| 0x2B | AUS |
| 0x3F | Ungültig (Basis) |

### ARG_0XD927

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### RES_0XD941

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_DEFROST_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_DEFROST_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert der Klappenstellung: 0...100 |

### RES_0XD94A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_LI_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_LI_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD94B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_RE_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_RE_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD94C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FRISCHLUFT_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FRISCHLUFT_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD94D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_UMLUFT_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_UMLUFT_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100 |

### RES_0XD950

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_TEMP_LUFT_FOND_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_TEMP_LUFT_FOND_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert der Klappenstellung: 0...100 |

### RES_0XD953

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERLAUF_NR | 0-n | - | unsigned char | - | TAB_STATUS_KALIBRIERLAUF | - | - | - | 0 = in diesem Klemmenzyklus noch nicht gestartet, 1 = Kalibrierlauf läuft gerade, 2 = Kalibrierlauf abgeschlossen |
| STAT_KALIBRIERLAUF_ERGEBNIS | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Kalibrierlauf abgeschlossen NIO, 1 = Kalibierlauf abgeschlossen IO und Daten gespeichert; Das Ergebnis bezieht sich auf den zuletzt durchgeführten Kalibrierlauf. Das Ergebnis darf nur im Anschluss eines vollständig durchlaufenen Kalibrierlaufs abgespeichert werden. |
| STAT_MOTOR_1_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_2_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_3_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_4_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_5_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_6_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_7_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_8_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_9_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_10_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_11_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_12_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_13_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_14_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_15_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_16_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_17_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_18_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_19_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_20_NR | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |

### TAB_STATUS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | in diesem Klemmenzyklus noch nicht gestartet |
| 0x01 | Kalibrierlauf läuft gerade |
| 0x02 | Kalibrierlauf abgeschlossen |

### TAB_KALIB_ERG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung NIO |
| 0x01 | Kalibrierung IO |
| 0x02 | Klappe nicht verbaut |

### TAB_STATUS_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gestartet/nicht angefordert |
| 0x01 | Test läuft gerade |
| 0x02 | Test erfolgreich abgeschlossen |
| 0x03 | Test nicht erfolgreich abgeschlossen |

### RES_0XD95A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_WASSERVENTIL_MONO | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_WASSERVENTIL_DUO | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD962

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_SOLARSENSOR_LINKS_WERT | W/m² | - | int | - | - | - | - | - | Solarsensor |
| STAT_BUS_IN_SOLARSENSOR_RECHTS_WERT | W/m² | - | int | - | - | - | - | - | Solarsensor |

### RES_0XD977

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORNE_SOLLTEMP_LINKS_WERT | °C | - | unsigned char | - | - | - | 2.0 | - | Ausgabe der eingestellten Sollwert-Temperatur links. |
| STAT_KLIMA_VORNE_SOLLTEMP_RECHTS_WERT | °C | - | unsigned char | - | - | - | 2.0 | - | Ausgabe der eingestellten Sollwert-Temperatur rechts. |

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

### RES_0XD98A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100: 0 = Kalt 100 = Warm |

### RES_0XD98B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_ISTPOS_ZENTRALANTRIEB_WERT | Grad | - | unsigned int | - | - | - | - | - | Istwert Kulissenstellung: 0...360 Grad 0 = 100% Defrost 120 = 100% Belüftung 242 = 100% Fussraum |
| STAT_MOT_SOLLPOS_ZENTRALANTRIEB_WERT | Grad | - | unsigned int | - | - | - | - | - | Sollwert Kulissenstellung: 0...360 Grad 0 = 100% Defrost 120 = 100% Belüftung 242 = 100% Fussraum |

### RES_0XD98C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_LINKS_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_LINKS_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100 0 = Kalt 100 = Warm |

### RES_0XD98E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_RECHTS_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_RECHTS_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Klappenstellung: 0...100 0 = Kalt 100 = Warm |

### RES_0XD99C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_ISTPOS_BEL_FUSS_LINKS_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Zentralantrieb Belüftung Fussraum: 0...100 % |
| STAT_MOT_ISTPOS_BEL_FUSS_RECHTS_WERT | % | - | unsigned char | - | - | - | - | - | Istwert Zentralantrieb Belüftung Fussraum: 0...100 % |
| STAT_MOT_SOLLPOS_BEL_FUSS_LINKS_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Zentralantrieb Belüftung Fussraum: 0...100 % |
| STAT_MOT_SOLLPOS_BEL_FUSS_RECHTS_WERT | % | - | unsigned char | - | - | - | - | - | Sollwert Zentralantrieb Belüftung Fussraum: 0...100 % |

### TAB_VARIANTE_AUDIOBEDIENTEIL

| WERT | TEXT |
| --- | --- |
| 0x00 | ohne FBM, TP |
| 0x01 | mit FBM, TP |
| 0x02 | ohne FBM, FM/AM |
| 0x03 | mit FBM, FM/AM |

### TAB_KMV_HYBRID_GENERATION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | Kältemittelverdichter Gen1.5 vorhanden |
| 0x02 | Kältemittelverdichter Gen2.0 vorhanden |

### ARG_0XD9A6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZENTRALANTRIEB | 0-n | - | unsigned char | - | TAB_ZENTRALANTRIEBE | - | - | - | - | - | Auswahl Zentralantrieb |
| SOLLPOSITION | Grad | - | unsigned int | - | - | - | - | - | 0.0 | 360.0 | Sollwert Kulissenstellung: 0..360 Grad |

### TAB_ZENTRALANTRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | ZENTRALANTRIEB |
| 0x01 | BEL_FUSS_LINKS |
| 0x02 | BEL_FUSS_RECHTS |

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

### RES_0X4002

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADR | 0-n | low | unsigned char | 11000000 | - | - | - | - | real status autoadresierung |
| STAT_AUTOADR_ERROR | 0-n | - | unsigned char | - | TAB_AUTOADR_ERROR | - | - | - | Error: 0:  no error  1:  by preparing the network for autoaddressing  2: by resetting the network after an autoaddressing  3: by setting the actuators in service mode  4: by setting the actuators in normal mode  5:  by addressing & programming the actuators.  6:  unknow error occured. |
| STAT_AUTOADR_MOTOR_0_1_2_3 | 0-n | low | unsigned char | - | - | - | - | - | Lin Motorenr: Motor 0 to Motor 3. (11111111 11111111) |
| STAT_AUTOADR_MOTOR_4_5_6_7 | 0-n | low | unsigned char | - | - | - | - | - | Lin Motorenr: Motor 4 to Motor 7. (01111111 11111111) |
| STAT_AUTOADR_MOTOR_8_9_10_11 | 0-n | low | unsigned char | - | - | - | - | - | Lin Motorenr: Motor 8 to Motor 11. (01111111 11111111) |
| STAT_AUTOADR_MOTOR_12_13_14 | 0-n | low | unsigned char | - | - | - | - | - | Lin Motorenr: Motor 8 to Motor 11. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_0_1_2_3 | 0-n | - | unsigned char | - | - | - | - | - | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_4_5_6_7 | 0-n | - | unsigned char | - | - | - | - | - | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_8_9_10_11 | 0-n | - | unsigned int | - | - | - | - | - | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |
| STAT_PROGRAMM_MOTOR_12_13_14 | 0-n | - | unsigned int | - | - | - | - | - | Programming status: 1: programmed 0: not programmed  Motor 15 to Motor 1. (01111111 11111111) |

### TAB_AUTOADR_ERROR

| WERT | TEXT |
| --- | --- |
| 0x01 | no error |
| 0x02 | by preparing the network for autoaddressing  |
| 0x04 | by resetting the network after an autoaddressing |
| 0x08 | by setting the actuators in service mode |
| 0x10 | by setting the actuators in normal mode  |
| 0x20 | by addressing & programming the actuators |
| 0x40 | Not used |
| 0x80 | unknow error occured |

### RES_0X4010

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_VERDAMPFER | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_ZWEITE_VERDAMPFER | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_BELUEFTUNG_LINKS | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_BELEUFTUNG_RECHTS | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_FUSSRAUM_LINKS | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_FUSSRAUM_RECHTS | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_SCHICHTUNG_POTI | 0-n | high | unsigned int | - | - | - | - | - | ADC Temperaturfühler Wert |
| STAT_ADC_KLEMME_30 | 0-n | high | unsigned int | - | - | - | - | - | Spannungswert am Steuergerät an Klemme 30 |
| STAT_ADC_LIN_DIAG_STROM | 0-n | high | unsigned int | - | - | - | - | - | Stromswert  diagnose |
| STAT_ADC_LIN_DIAG_SPANNUNG | 0-n | high | unsigned int | - | - | - | - | - | Spannungswert  diagnose |

### ARG_0X4012

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STANDHEIZUNG_AUSGANG | 0-n | high | unsigned char | - | TAB_AUSGANG_STEUERN | - | - | - | - | - | Ansteuerung des Ausgangs |
| AC_LIN_SPANNUNG_CMD_AUSGANG | 0-n | high | unsigned char | - | TAB_AUSGANG_STEUERN | - | - | - | - | - | Ansteuerung des Ausgangs |
| AC_LIN_SPANNUNG_DEN_AUSGAN | 0-n | high | unsigned char | - | TAB_AUSGANG_STEUERN | - | - | - | - | - | Ansteuerung des Ausgangs |

### TAB_AUSGANG_STEUERN

| WERT | TEXT |
| --- | --- |
| 0 | Ausgang aus |
| 1 | Ausgang ein |

### RES_0X4013

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAGNOSE_STANDHEIZUNG_AUSGANG | 0-n | high | unsigned char | - | TAB_EINGANG_STATUS | - | - | - | Status Diagnose ausgang |
| STAT_DIAGNOSE_EXTERNE_5V_SPANNUNG | 0-n | high | unsigned char | - | TAB_EINGANG_STATUS | - | - | - | Status Diagnose ausgang |

### TAB_EINGANG_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Eingang aus |
| 1 | Eingang ein |

### RES_0X4016

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU_LOAD_ACTUAL_WERT | % | high | unsigned char | - | - | - | - | - | CPU load actual |
| STAT_CPU_LOAD_MIN_WERT | % | high | unsigned char | - | - | - | - | - | CPU load min |
| STAT_CPU_LOAD_MAX_WERT | % | high | unsigned char | - | - | - | - | - | CPU load max |

### ARG_0X4018

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY_VALEO_WERT | - | high | int | - | - | - | - | - | - | - | Key |

### RES_0X4019

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_NUMBER_WERT | - | high | unsigned int | - | - | - | - | - | Hardware Number |

### ARG_0X4019

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HW_NUMBER | - | high | unsigned int | - | - | - | - | - | - | - | Hardware Number |

### RES_0X401A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FACTORY_DATE_YY_WERT | - | high | unsigned char | - | - | - | - | - | Produktion Jahr |
| STAT_FACTORI_DATE_MM_WERT | - | high | unsigned char | - | - | - | - | - | Produktion Monat |
| STAT_FACTORI_DATE_DD_WERT | - | high | unsigned char | - | - | - | - | - | Produktion Tag. |

### ARG_0X401A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FACTORY_DATE_YY | - | high | unsigned char | - | - | - | - | - | - | - | Produktion Jahr |
| FACTORI_DATE_MM | - | high | unsigned char | - | - | - | - | - | - | - | Produktion Monat |
| FACTORI_DATE_DD | - | high | unsigned char | - | - | - | - | - | - | - | Produktion Tag. |

### RES_0X401B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_PART_NUMBER_WERT | - | high | unsigned long | - | - | - | - | - | Status valeo Number |

### ARG_0X401B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_PART_NUMBER | - | high | unsigned long | - | - | - | - | - | - | - | Valeo part number |

### RES_0X401C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_PART_NUMBER_INDEX_WERT | - | high | unsigned char | - | - | - | - | - | Valeo Part number index |

### ARG_0X401C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_PART_NUMBER_INDEX | - | high | unsigned char | - | - | - | - | - | - | - | Valeo Part number index |

### RES_0X401D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_PCB_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | - | - | - | Status PCB serial number |

### ARG_0X401D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_PCB_SERIAL_NUMBER | - | high | unsigned long | - | - | - | - | - | - | - | Steuern PCB serial number |

### RES_0X401E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ICT_STEP_COUNTER_WERT | - | high | unsigned char | - | - | - | - | - | Status ICT step counter |

### ARG_0X401E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ICT_STEP_COUNTER | - | high | unsigned char | - | - | - | - | - | - | - | Steuern ICT step counter |

### ARG_0X4020

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPEICHER_BLOCK | - | high | unsigned char | - | - | - | - | - | - | - | Blocknummer |

### ARG_0X4021

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEICHER_BLOCK | - | high | unsigned char | - | - | - | - | - | - | - | Blocknummer |
| SCHLUESSEL | - | high | unsigned long | - | - | - | - | - | - | - | Schluessel |
| SPEICHER_ANZAHL_DATEN | - | high | unsigned char | - | - | - | - | - | - | - | Ausgabe Anzahl Daten |
| DATA1 | - | high | unsigned char | - | - | - | - | - | - | - | Data 1 |
