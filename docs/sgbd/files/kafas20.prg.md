# kafas20.prg

## General

|  |  |
| --- | --- |
| File | kafas20.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 93 |
| Origin | BMW EI-611 Fischer_Julian |
| Revision | 3.005 |
| Author | BMW EI-611 Fischer_Julian, Autoliv AS Lilja_Martin, Autoliv AEE |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kamerabasiertes Fahrerassistenzsystem |  |  |
| ORIGIN | string | BMW EI-611 Fischer_Julian |  |  |
| REVISION | string | 3.005 |  |  |
| AUTHOR | string | BMW EI-611 Fischer_Julian, Autoliv AS Lilja_Martin, Autoliv AEE |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.42 |  |  |
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

### STATUS_READ_MICRO_CORE_DUMP_01

Auslesen des Micro core dumps UDS  : $23 ReadMemoryByAdress

_No arguments._

### STATUS_READ_MICRO_CORE_DUMP_04

Auslesen des Micro core dumps UDS  : $23 ReadMemoryByAdress

_No arguments._

### STATUS_READ_MICRO_CORE_DUMP_05

Auslesen des Micro core dumps UDS  : $23 ReadMemoryByAdress

_No arguments._

### STATUS_READ_MICRO_CORE_DUMP_02

Auslesen des Micro core dumps UDS  : $23 ReadMemoryByAdress

_No arguments._

### STATUS_READ_MICRO_CORE_DUMP_03

Auslesen des Micro core dumps UDS  : $23 ReadMemoryByAdress

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
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
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
| 0x20 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x21 | Fehler momentan vorhanden und bereits gespeichert |
| 0x24 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x25 | Fehler momentan vorhanden und bereits gespeichert |
| 0x28 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x29 | Fehler momentan vorhanden und bereits gespeichert |
| 0x2C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x2D | Fehler momentan vorhanden und bereits gespeichert |
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
| 0x60 | Fehler gespeichert |
| 0x61 | Fehler gespeichert |
| 0x64 | Fehler gespeichert |
| 0x65 | Fehler gespeichert |
| 0x68 | Fehler gespeichert |
| 0x69 | Fehler gespeichert |
| 0x6C | Fehler gespeichert |
| 0x6D | Fehler gespeichert |
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
| 0x3D88 | Lüfter 2 | 1 |
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
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
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
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
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

### ARG_0X4000

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BREMS_TYP_FW | 0-n | high | int | - | TAB_BREMS_TYP_FCW | 1.0 | 1.0 | 0.0 | - | - | Definiert die Bremsansteuerung für FCW |

### ARG_0X4006

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_FLA_LOESCHEN | 0/1 | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = FASTA-Daten löschen |

### ARG_0X400A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFLINE_YAW | Pixel | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Offline yaw calibration |
| OFFLINE_HORIZON | Pixel | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Offline horizone calibration |
| OFFLINE_ROLL | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Offline roll calibration |
| ONLINE_YAW | Pixel | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Online yaw calibration |
| ONLINE_HORIZON | Pixel | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Online horizon calibration |
| ONLINE_ROLL | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Online roll calibration |
| CAM_HEIGHT | mm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera height |
| GRABBING_SHIFT | Pixel | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Grabbing shift |
| VIN | - | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | VIN |

### ARG_0X400B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E_SLINPI_SIGN_STATE | 0-n | high | unsigned char | - | TAB_SLINPI_SIGN_STATE | - | - | - | - | - | 0x00 = Sign is invalid  0x01 = Sign is valid   0x02 = reserved  0x03 = reserved |
| SIGN_INDEX | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-31 |
| E_CIRCULAR_TRAFFIC_SIGNS | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-161 (see sign enumeration table)  254 = unknown |
| E_SIGN_SYSTEM_OF_UNITS | 0-n | high | char | - | TAB_SIGN_SYSTEM_OF_UNITS | - | - | - | - | - | 0 = no system,  1 = metric system, -KPH in Europe  2 = angloamerican system -MPH |
| SIGN_SCORE | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-10 |
| POS_X | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-63 |
| POS_Y | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-63 |
| POS_Z | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-63 |
| E_SUPPLEMENTAL_SIGNS | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-161 (see sign enumeration table)  254 = unknown |
| SPPL_SIGN_RELATIVE_POS | 0/1 | high | char | - | - | - | - | - | - | - | 0 = supp sign is above speed sign.   1 = supp sign is below speed sign. |
| SPPL_SIGN_SCORE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-10 |

### ARG_0X400C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHUTDOWN | 0-n | high | char | - | TAB_SHUTDOWN | - | - | - | - | - | 00 - Restore the EyeQ2 Watchdog 01 - Shutdown EyeQ2 Watchdog. Generate cyclic messages 02 - Shutdown EyeQ2 Watchdog. Do not generate cyclic messages |

### ARG_0X4015

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARN_TYP | 0-n | high | unsigned char | - | TAB_WARN_TYP_PPP | - | - | - | - | - | 0x00 = Off 0x01 = Predection dection Pre warning. Signal: warning_headway-observation_FGS  (SYS3637) = 0100b 0x02 = Predection detection acute warning Signal: warning_headway-observation_FGS  (SYS3637) = 0001b |

### ARG_0X4018

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_GENERIC_EYEQ2_INFO | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = The  EyeQ2 restarts  parameter is set to 0. |

### ARG_0XA37C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KAFAS_KOMBI_ANZEIGE | - | - | - | - | - | 00h  alle Anzeigen im Kombi ausgeschaltet 01h  set ST_TLC aktiv,  02h  Balken rechts anzeigen,  04h  Balken links anzeigen,  07h  Balken rechts und links anzeigen;  08h  Aktivierungsanzeige = Verfügbarkeitsschwelle anzeigen; 10h  Verfügbarkeit rechts; 20h  Verfügbarkeit links;  FFh  Ungültig |

### ARG_0XD399

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25.0 | Ansteuerdauer in Sekunden  1 - 25 Sekunden  0 = Ansteuerung AUS |
| ANLAUFRAMPE | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| STOPRAMPE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| AMPLITUDE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 14.0 | Vibrationsstärke; es sind Amplituden von 0-14 (dezimal) möglich. |
| FREQUENZ | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 14.0 | Frequenz der Vibration, Frequenzstufen von 0-14 (dezimal) sind möglich. |

### ARG_0XD3A6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = Demo-Mode einschalten,  0 = Demo-Mode ausschalten |

### ARG_0XD3A7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARN_TYP | 0-n | - | unsigned char | - | TAB_FCW_WARN_TYP | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | Auswahl gemäß TAB_FCW_WARN_TYP 0 = Aus; 1 = Vorwarnung; 2 = Akkutwarnung; 3 = Distanzwarnung |

### ARG_0XD3A8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERFUEGBARKEIT | 0-n | - | unsigned char | - | TAB_FCW_VERFUEGBARKEIT | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Auswahl gemäß TAB_FCW_VERFUEGBARKEIT 0 = FCW verfügbar; 1 = nicht verfügbar, Umweltbedingungen 2 = nicht verfügbar, Blockade |

### ARG_0XD3A9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTUELLES_SEGMENT_ZEICHEN | 0-n | - | unsigned char | - | TAB_ART_ZEICHEN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Zeichen angezeigt werden soll: Argumente siehe TAB_ART_ZEICHEN |
| AKTUELLES_SEGMENT_GESCHWINDIGKEIT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebungszeichen alles, 5 bis 150 in 5-er Schritten. |
| KOMMENDES_SEGMENT_ZEICHEN | 0-n | - | unsigned char | - | TAB_ART_ZEICHEN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Zeichen angezeigt werden soll: Argument siehe TAB_ART_ZEICHEN |
| KOMMENDES_SEGMENT_GESCHWINDIGKEIT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| ANZEIGE_UEBERHOLVERBOTSZEICHEN | 0-n | - | unsigned char | - | TAB_ART_UEBERHOL_ZEICHEN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Überholverbotszeichen angezeigt werden soll: Argumente siehe TAB_ART_UEBERHOL_ZEICHEN |
| LAENDERKODIERUNG_VERKEHRSZEICHEN | 0-n | - | unsigned char | - | TAB_ART_LAENDERKODIERUNG | 1.0 | 1.0 | 0.0 | - | - | Angabe der Länderkodierung der Verkehrszeichen, Argumente siehe TAB_ART_LAENDERKODIERUNG |
| ANZEIGE_TEXT_MELDUNG | 0-n | - | unsigned char | - | TAB_ART_TEXT_MELDUNG | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Textmeldung angezeigt werden soll: Argumente siehe TAB_ART_MELDUNG |
| GESCHWINDIGKEIT_EINHEIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Steuert in welcher Einheit die Anzeige im Kombi erfolgt (kmh oder mph). 0 ist km/h und 1 ist mph. |

### ARG_0XD3AB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| METHODE | 0-n | - | unsigned char | - | TAB_METHODE_SLI | 1.0 | 1.0 | 0.0 | - | - | Argumente siehe TAB_METHODE_SLI |

### ARG_0XD3AD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTEMPFEHLUNG_FLA | 0-n | - | unsigned char | - | TAB_STFLA_CONTROL | 1.0 | 1.0 | 0.0 | - | - | Schaltempfehlung für FLA:  0 = Keine Empfehlung 1 = AUS 2 = EIN 3 = Zurück zum Normalbetrieb |
| GFA_OBJECT_RANGE | m | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszugebende Entfernung zum Objekt |
| GFA_RIGHT_BOUNDARY | Grad | - | unsigned char | - | - | 10.0 | 1.0 | 150.0 | -15.0 | 10.4 | Auszugebende rechte Grenze in 0,1 Grad-Schritten des blendfreien Bereiches |
| GFA_LEFT_BOUNDARY | Grad | - | unsigned char | - | - | 10.0 | 1.0 | 104.0 | -10.4 | 15.0 | Auszugebende linke Grenze in 0,1 Grad-Schritten des blendfreien Bereiches |
| GFA_LOWER_BOUNDARY | Grad | - | unsigned char | - | - | 20.0 | 1.0 | 100.0 | -5.0 | 5.0 | Auszugebende untere Grenze in 0,05 Schritten des blendfreien Bereichs |

### ARG_0XD3BD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NEUSTART | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = Neustart wird durchgeführt |

### ARG_0XD3CD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung KAFAS-Scheibenheizung: 0 = aus 1 = ein |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in Sekunden |

### ARG_0XF002

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTRY_CODE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | Country Code that should be used for the country code simulation. Each Byte represents an ASCII letter (for example 44h 45h = DE) |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x025D00 | Energiesparmode aktiv | 0 |
| 0x02FF5D | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x800A07 | Aktuator Lenkrad defekt | 1 |
| 0x800A20 | Sensitivität verstellt | 1 |
| 0x800A22 | Interner Steuergerätefehler | 0 |
| 0x800A23 | Interner Steuergerätefehler: Fahrgestellnummer passt nicht zum Fahrzeug | 0 |
| 0x800A24 | EyeQ Memory Test fehlgeschlagen | 0 |
| 0x800AB1 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x800AB2 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x800AB3 | Codierung: Signatur für Daten ungültig | 0 |
| 0x800AB4 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x800AB5 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x800AB8 | Überspannung erkannt | 1 |
| 0x800AB9 | Unterspannung erkannt | 1 |
| 0x800ABA | KAFAS-Kamera: Interner Kamerafehler | 0 |
| 0x800ABB | LVDS Kommunikationsfehler Kamera - Steuergerät | 0 |
| 0x800ABC | KAFAS-Kamera: Kamera passt nicht zum Fahrzeugtyp | 0 |
| 0x800ABD | Bildverarbeitungsfehler | 0 |
| 0x800ABE | KAFAS-Kamera: Blindheit | 1 |
| 0x800ABF | KAFAS-Kamera: Online-Kalibrierfehler | 0 |
| 0x800AC0 | KAFAS-Kamera: Abschaltung wegen Übertemperatur | 0 |
| 0x800AC1 | iBrake Anzeige im Kombi defekt | 1 |
| 0x800AC2 | iBrake akustische Warnung nicht möglich | 1 |
| 0x800AC3 | iBrake Warnung im Kombi nicht codiert | 1 |
| 0x800AC4 | Kamerakalibrierung fehlgeschlagen | 0 |
| 0x800AC5 | Scheibenheizung KAFAS: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x800AC7 | Scheibenheizung KAFAS: Kurzschluss nach Minus | 0 |
| 0xE0440A | FA-CAN Control Module Bus OFF | 0 |
| 0xE04BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE04C00 | SF-CAN Control Module Bus OFF | 0 |
| 0xE04C01 | Botschaft (70Ah, Systemzeit SF-CAN): Ausfall | 1 |
| 0xE04C02 | Signal (70Ah): ungültig empfangen SF-CAN: Systemzeit SF-CAN | 1 |
| 0xE06C00 | Signal (173h): ungültig empfangen: Alive_Status_Stabilisierung, Status_Bremsung_Fahrer | 1 |
| 0xE06C01 | Signal (19Fh): ungültig empfangen: Giergeschwindigkeit_Fahrzeug | 1 |
| 0xE06C02 | Signal (1A1h): ungülltig empfangen oder Qualifier meldet Fehler: Geschwindigkeit_Farhzeug_Schwerpunkt, Fahrzustand_Fahrzeug | 1 |
| 0xE06C03 | Signal (1EEh): unültig empfangen: Bedienung_Lenkstocktaster | 1 |
| 0xE06C04 | Signal (2A6h): unültig empfangen: Bedienung_Wischertaster, Bedienung_Wischerpotentiometer | 1 |
| 0xE06C05 | Signal (2CAh): ungültig empfangen: Temperatur_Außen | 1 |
| 0xE06C07 | Signal (301h): ungültig empfangen: Ist_Lenkwinkel_Fahrer, Ist_Lenkwinkelgeschwindigkeit_Fahrer | 1 |
| 0xE06C08 | Signal (330h): ungültig empfangen: Wegstrecke_Kilometer | 1 |
| 0xE06C0B | Signal (34Eh): ungültig empfangen: Status_Betriebszeit_Navigation, Status_Version_Protokoll_Navigation, Status_Version_HW_Navigation, Status_Version_HW_Navigation_Hersteller, Status_Version_Karte_Navigation, Status_Version_Karte_Navigation_Hersteller, Status_Ländercodierung_Navigation | 1 |
| 0xE06C0C | Schnittstelle DSC (Ist Bremsmoment Summe, 0xEF) Signal ungültig | 1 |
| 0xE06C0E | Signal (2F8h): ungültig empfangen: Anzeige_Stunde, Anzeige_Minute, Anzeige_Sekunde,  Anzeige_Datum_Tag, Anzeige_Datum_Wochentag, Anzeige_Datum_Monat, Anzeige_Datum_Jahr, Status_Anzeige_Uhrzeit_Datum | 1 |
| 0xE06C0F | Signal (36Ah): ungültig empfangen: Anzeige_Fernlicht_Assisten, Anforderung_Bedienung_Fernlicht_Assistent | 1 |
| 0xE06C12 | Signal (27Ah): ungültig empfangen: Status_Anzahl_Pakete, Zähler_Nav-Graph_Sync, CRC16_Nav-Graph_Sync, Modus_Übertragung_Nav-Graph_Sync, Index_Segment_Löschen_Nav-Graph, Steuerung_Löschen_Nav-Graph, Zusatzinformation_Nav-Graph_Sync | 1 |
| 0xE06C14 | Signal (1F6h): ungültig empfangen: Status_Blinken | 1 |
| 0xE06C15 | Signal (380h): ungültig empfangen: Nummer_Fahrgestell_1-7 | 1 |
| 0xE06C16 | Signal (252h): ungültig empfangen: Position_Wischerblatt, Status_Wischer | 1 |
| 0xE06C17 | Signal (2C5h): ungültig empfangen: Ist_Geschwindigkeit_Tacho, Qualifier_Ist_Geschwindigkeit_Tacho, | 1 |
| 0xE06C18 | Signal (328h): ungültig empfangen: Zeit_Sekunde_Zähler_Relativ | 1 |
| 0xE06C1A | Signal (343h): ungültig empfangen: Status_Taster_Warnung_Fahrspurverlassen, Status_Funktionsbeleuchtung_Warnung_Fahrspurverlassen | 1 |
| 0xE06C1B | Signal (347h) oder Signal (346h): invalid received: Alive_Status_Koordination_Vibration_Lenkrad, Qualifier_Service_Koordination_Vibration_Lenkrad | 1 |
| 0xE06C32 | Signal: (281h) ungültig empfangen: Measured-Quantity_Voltage_14V | 1 |
| 0xE06C35 | Signal (12Fh): ungültig empfangen: Status_Fahrzeug_Zustand, Status_Klemme, Status_Klemme_15n | 1 |
| 0xE06C37 | Signal (199h): ungültig empfangen: Längsbeschleunigung_Schwerpunkt | 1 |
| 0xE06C3B | Signal (96h): ungültig empfangen: Position_Hell-Dunke-Grenze_Abblendlicht, Leuchtweite_Abblendlicht_FLA, Position_Hell-Dunkel-Grenze_Links_Fernlicht_FLA, Position_Hell_Dunkel-Grenze_Rechts_Fernlicht_FLA,  Status_Position_Hell-Dunkel-Grenze_Fernlicht_FLA, Status_Leuchtweite_Abblendlicht_FLA | 1 |
| 0xE06C3C | Signal (31Eh): ungültig empfangen: Status_Taster_Bremsassistent, Status_Funttionsbeleuchtung_Bremsassistent | 1 |
| 0xE06C3D | Signal (D9h): ungültig empfangen: Ist_Winkel_Fahrpedal: Qualifier_Ist_Winkel_Fahrpedal,  Ist_Winkel_Fahrpedal_Virtuell, Gradient_Ist_Winkel_Fahrpedal, Status_Schnittstelle_Fahrerassistenzsystem | 1 |
| 0xE06C3E | Signal (420h): ungültig empfangen: Qualifier_Soll_FAS_Bremsassistent_Warnschwelle | 1 |
| 0xE06C3F | Signal (302h): ungültig empfangen: Lenkwinkel_Vorderachse_effektiv, Qualifier_Lenkwinkel_Vorderachse_effektiv | 1 |
| 0xE06C40 | Signal (19Ah): ungültig empfangen: Querbeschleunigung_Schwerpunkt,  Qualifier_Querbeschleunigung_Schwerpunkt, | 1 |
| 0xE06C41 | Signal (2F7h): ungültig empfangen: Einheit_Wegstrecke | 1 |
| 0xE06C43 | Signal Status_Verfügbarkeit_Kette_Bremsung ungültig empfangen oder Bremskette nicht verfügbar | 1 |
| 0xE06C44 | Signal Status_Verfügbarkeit_Kette_Warnung ungültig empfangen oder Warnkette nicht verfügbar | 1 |
| 0xE07C00 | Botschaft (19Fh, Giergeschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE07C01 | Botschaft (1A1h, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE07C02 | Botschaft (2C5h, Status Anzeige Fahrdynamik): Ausfall | 1 |
| 0xE07C03 | Botschaft (1EEh, Bedienung Lenkstocktaster): Ausfall | 1 |
| 0xE07C04 | Botschaft (2A6h, Bedienung Wischertaster): Ausfall | 1 |
| 0xE07C05 | Botschaft (2CAh, Außentemperatur): Ausfall | 1 |
| 0xE07C06 | Botschaft (2F8h, UhrzeitDatum): Ausfall | 1 |
| 0xE07C07 | Botschaft (301h, Ist Lenkwinkel Fahrer): Ausfall | 1 |
| 0xE07C08 | Botschaft (330h, KilometerstandReichweite): Ausfall | 1 |
| 0xE07C0A | Botschaft (34Eh, Navigation System Information): Ausfall | 1 |
| 0xE07C0B | Botschaft (EFh, Ist Bremsmoment Summe): Ausfall | 1 |
| 0xE07C0C | Botschaft (1F6h, Blinken): Ausfall | 1 |
| 0xE07C0E | Botschaft (173h, Status Stabilisierung DSC): Ausfall | 1 |
| 0xE07C0F | Botschaft (21Ah, Lampenzustand): Ausfall | 1 |
| 0xE07C10 | Botschaft (36Ah, Status Fernlicht Assistent): Ausfall | 1 |
| 0xE07C11 | Botschaft (328h, Relativzeit): Ausfall | 1 |
| 0xE07C13 | Botschaft (348h, Übereinstimmung Navigationsgraph): Ausfall | 1 |
| 0xE07C15 | Botschaft (347h, Status Koordination Vibration Lenkrad oder 346h Status Vibration Lenkrad): Ausfall | 1 |
| 0xE07C19 | Botschaft (343h, Status Bedienelement Warnung Fahrspurverlassen): Ausfall | 1 |
| 0xE07C21 | Botschaft (12Fh, Klemmen): Ausfall | 1 |
| 0xE07C22 | Botschaft (199h, Längsbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xE07C25 | Botschaft (281h, VEH_SUPPLY_VOLTAGE (BN_UVL)):Ausfall | 1 |
| 0xE07C28 | Botschaft (96h Status stufenloser Fernlicht Assisten): Ausfall | 1 |
| 0xE07C29 | Botschaft (31Eh, Status Bedienelement Bremsassistent): Ausfall | 1 |
| 0xE07C2A | Botschaft (D9h, Winkel Fahrpedal): Ausfall | 1 |
| 0xE07C2B | Message (302h, Lenkwinkel Vorderachse Effektiv): loss | 1 |
| 0xE07C2C | Botschaft (19Ah, Querbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xE07C2D | Botschaft (2F7h, Einheiten): Ausfall | 1 |
| 0xE07C2E | Botschaft (21Fh, Status Objekt Koordination: Ausfall) | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6F00 | Vehicle State | - | Low | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F01 | Camera Current | mA | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F02 | ECU Vbat | V | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU Temp 1 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F04 | ECU Temp 2 | °C | - | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F05 | CAM_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F06 | Internal MCU-EQ CAN | HEX | Low | unsigned char | - | - | - | - |
| 0x6F08 | ECU IO PINS | HEX | High | unsigned int | - | - | - | - |
| 0x6F09 | EQ2_UPTIME | Text | High | 3 | - | - | - | - |
| 0x6F0A | EQ2_I2C_INF | HEX | High | unsigned char | - | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | ja |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x5D0001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x5D0002 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x5D0009 | PIA_E_IO_ERROR | 0 |
| 0x5D000A | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x5D000B | FLS_E_ERASE_FAILED | 0 |
| 0x5D000C | FLS_E_WRITE_FAILED | 0 |
| 0x5D000D | FLS_E_READ_FAILED | 0 |
| 0x5D000E | FLS_E_COMPARE_FAILED | 0 |
| 0x5D000F | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x5D0010 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x5D0013 | Überhitzung wird per CAN vom Vibrations-Aktuator im Lenkrad an das KaFAS-Steuergerät gemeldet | 1 |
| 0x5D0015 | MCU_E_CLOCK_FAILURE | 0 |
| 0x5D0016 | MCU_E_LOCK_FAILURE | 0 |
| 0x5D0017 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x5D0018 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x5D0019 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x5D001A | KAFAS-Kamera: Nickwinkelfehler | 0 |
| 0x5D001B | KAFAS-Kamera: Rollwinkelfehler | 0 |
| 0x5D001C | KAFAS-Kamera: Gierwinkelfehler | 0 |
| 0x5D001D | KAFAS-Kamera: Kamerasensor defekt | 0 |
| 0x5D001E | Kamera Kommunikation Speicher | 0 |
| 0x5D001F | NVM_E_INTEGRITY_FAILED | 0 |
| 0x5D0020 | NVM_E_REQ_FAILED | 0 |
| 0x5D0021 | WDG_E_DISABLE_REJECTED | 0 |
| 0x5D0022 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x5D0023 | WDGM_E_SET_MODE | 0 |
| 0x5D0024 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x5D0025 | WDG_E_MISS_TRIGGER | 0 |
| 0x5D0026 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x5D0027 | CNM_E_TX_PATH_FAILED | 0 |
| 0x5D0028 | CANNM_E_INIT_FAILED | 0 |
| 0x5D0029 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x5D002A | CAN_E_TIMEOUT | 0 |
| 0x5D002B | CANTP_E_COMM | 0 |
| 0x5D002C | CANIF_E_INVALID_TXPDUID | 0 |
| 0x5D002D | CANIF_E_INVALID_RXPDUID | 0 |
| 0x5D002E | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x5D002F | CANIF_E_STOPPED | 0 |
| 0x5D0030 | Nachricht 278h: Signal nicht verfügbar | 1 |
| 0x5D0031 | Nachricht 27Ah: Signal nicht verfügbar | 1 |
| 0x5D0032 | Nachricht 3F7h: Signal nicht verfügbar | 1 |
| 0x5D0033 | Nachricht 3CCh: Signal nicht verfügbar | 1 |
| 0x5D0034 | Nachricht 42Ch: Signal nicht verfügbar | 1 |
| 0x5D0035 | Nachricht 27Ah: Keine Antwort auf re-sync | 1 |
| 0x5D0036 | COM_RX_LIMITED | 0 |
| 0x5D0037 | EyeQ2 reset (triggered by Watchdog) | 0 |
| 0x5D0038 | Qualifier error | 0 |
| 0x5D0039 | Botschaft (163h, VEH_TLT_RW (TLT_RW)): Ausfall | 1 |
| 0x5D003A | Botschaft (21Eh, VEH_STAT_NIVI (STAT_NIVI)): Ausfall | 1 |
| 0x5D003B | Signal (163h): ungültig empfangen: AVL_LOGR_RW, QU_AVL_LOGR_RW | 1 |
| 0x5D003C | Kamera Überspannung SW | 0 |
| 0x5D003D | Kamera Überspannung HW | 0 |
| 0x5D003E | EyeQ2 I2C nicht rechtzeitig | 0 |
| 0x5D003F | EyeQ2  I2C transaction failed | 0 |
| 0x5D0040 | EyeQ2 Camera self reset | 0 |
| 0x5D0041 | EyeQ2 Camera Empty fuse bank | 0 |
| 0x5D0042 | EyeQ2 Timeout of 700 ms reached | 0 |
| 0x5D0043 | EyeQ2 Constant I2C interrupts | 0 |
| 0x5D0044 | EyeQ2 Camera initialization failed - before LVDS activation | 0 |
| 0x5D0045 | EyeQ2 Camera initialization failed - after LVDS activation | 0 |
| 0x5D0046 | EyeQ2 Camera ID reading failed | 0 |
| 0x5D0047 | EyeQ2 Camera LVDS_DEFECT | 0 |
| 0x5D0048 | Functional Safety monitoring Data | 1 |
| 0x5D0049 | Functional Safety Q-Assist Deaktivierung fehlgeschlagen | 1 |
| 0x5D004A | EyeQ2 Video Error | 0 |
| 0xC90402 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6F00 | Vehicle State | - | Low | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F01 | Camera Current | mA | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F02 | ECU Vbat | V | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU Temp 1 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F04 | ECU Temp 2 | °C | - | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F05 | CAM_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F07 | QUAL_ERROR | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6F08 | ECU IO PINS | HEX | High | unsigned int | - | - | - | - |
| 0x6F09 | EQ2_UPTIME | Text | High | 3 | - | - | - | - |
| 0x6F0A | EQ2_I2C_INF | HEX | High | unsigned char | - | - | - | - |
| 0x6F0B | FUSA_FAULTS | Text | High | 5 | - | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4001

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_OP_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer FLA durch Fahrer aktiviert [s] |
| STAT_DELTA_TIME_FLA_NIGHT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer in der Umgebungshelligkeit FLA Aktivierung erlaubt  [s] |
| STAT_DELTA_TIME_FLA_ACT_HB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Einschaltempfehlung FLA  [s] |
| STAT_DELTA_TIME_FLA_ACT_LB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Abschaltempfehlung [s] |
| STAT_FLA_COUNT_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Übersteuerung durch Fahrer |
| STAT_OPTIME_TOTAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absoluter Betriebszeitzähler [s] |

### RES_0X4002

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CNTRY_CODE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ISO Country Code des Landes in welchem das Fahrzeug die meisten  Kilometer zurückgelegt hat. |
| STAT_OPTIME_TOTAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absoluter Betriebszeitzähler |
| STAT_OPTIME_NIGHT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit in der Nacht. Basiert auf BV-Algo Nachtentscheidung |
| STAT_OPTIME_WIPER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit während Regen. Basiert auf Algo Regenentscheidung |
| STAT_DRIVEN_DIST_TOTAL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer |
| STAT_DRIVEN_DIST_URBAN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer auf Straßentyp Urban oder Residential Area |
| STAT_DRIVEN_DIST_RURAL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer auf Straßentyp Rural oder Highway |
| STAT_DRIVEN_DIST_MOWAY_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer auf Straßentyp Motorway |
| STAT_DRIVEN_DIST_NA_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer ohne verfügbaren Straßentyp |
| STAT_AMNT_EYEQ_RESET_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgten Resets des BV-Prozessors während normalem Betrieb |
| STAT_AMNT_ONLINE_CALIB_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler über die Erfolgten Online-Kalibriervorgänge |

### RES_0X4003

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_DRIV_LEFT_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit Verfübarkeit auf der linken Seite |
| STAT_TLC_DRIV_RIGHT_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit Verfübarkeit auf der rechten Seite |
| STAT_TLC_DRIV_DIST_REL_SPD_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene  mit aktivem TLC und relavanter Geschwindigkeit |
| STAT_TLC_AMNT_WARN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl ausgegebener TLC Warnungen |
| STAT_TLC_AMNT_DEACT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Deaktivierung der TLC-Funktion durch den Fahrer |
| STAT_TLC_DRIV_DIST_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Kilometer mit aktiviertem TLC |

### RES_0X4004

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FCW_DRIVEN_DIST_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivierter FCW Funktion |
| STAT_FCW_DRIVEN_DIST_FS_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer im Fail Safe Mode |
| STAT_FCW_DRIVEN_DIST_FS_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivierter FCW Funktion im Fail Safe Mode |
| STAT_FCW_DRIVEN_DIST_FOR_OFF_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivierter FCW Funktion und Vorwarnstufe  aus  |
| STAT_FCW_DRIVEN_DIST_FOR_EARLY_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivierter FCW Funktion und Vorwarnstufe  früh  |
| STAT_FCW_DRIVEN_DIST_FOR_LATE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivierter FCW Funktion und Vorwarnstufe  spät  |
| STAT_FCW_AMNT_FOR_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Vorwarnungen |
| STAT_FCW_AMNT_ACUTE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Akutwarnungen |
| STAT_FCW_AMNT_ACUTE_45_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Akutwarnungen im Bereich 0 km/h¿ 45 km/h |
| STAT_FCW_AMNT_ACUTE_90_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Akutwarnungen im Bereich 45 km/h¿ 90 km/h |
| STAT_FCW_AMNT_ACUTE_135_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Akutwarnungen im Bereich 90 km/h¿ 135 km/h |
| STAT_FCW_PREFILLS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der von FCW ausgelösten Pre-Fill Anforderungen |
| STAT_FCW_PRECRASH_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der von FCW ausgelösten Pre-Crash Meldungen |
| STAT_FCW_DEACT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Deaktivierung der FCW-Funktion durch den Fahrer |
| STAT_FCW_FS_CC_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der ausgelösten Fail-Save CC-Meldungen |

### RES_0X4005

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLI_AMT_CAM_DET_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kameradetektionen von Verkehrsschildern |
| STAT_SLI_MATCH_URBAN_WERT | Counts | high | char | - | - | 1.0 | 1.0 | 0.0 | Anteil der  Kameradetektion die mit den expliziten Speed Limits auf dem Straßentyp Urban oder Residential Area übereinstimmen |
| STAT_SLI_MATCH_RURAL_WERT | Counts | high | char | - | - | 1.0 | 1.0 | 0.0 | Anteil der  Kameradetektion die mit den expliziten Speed Limits auf dem Straßentyp Rural oder Highway übereinstimmen |
| STAT_SLI_MATCH_MOWAY_WERT | Counts | high | char | - | - | 1.0 | 1.0 | 0.0 | Anteil der  Kameradetektion die mit den expliziten Speed Limits auf dem Straßentyp Motorway übereinstimmen |
| STAT_SLI_REP_URBAN_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Urbanoder Residential Area wiederholen |
| STAT_SLI_REP_RURAL_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Rural oder Highway wiederholen |
| STAT_SLI_REP_MOWAY_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Motorway wiederholen |
| STAT_SLI_OVER_SLI_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Entfernung mit mindestens 20 km/h über dem erkannten Speed Limit |
| STAT_SLI_SSS_TIME_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Zusatzzeichen mit Zeitbeschränkung |
| STAT_SLI_NPI_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Kilometer mit erkanntem Überholverbot |
| STAT_SLI_NP_WITHDRAW_DIST_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aufhebungen Überholverbot infolge Überschreitung Haltedistanz |
| STAT_SLI_NP_WITHDRAW_SIGN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aufhebungen Überholverbot infolge Detektion Aufhebungsschild |

### RES_0X400E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BYTE_0_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. Bit: 0 UP1V0D_freeze_fault 1 UP1V8D_freeze_fault 2 UP2V5D_freeze_fault 3 UP3V3D_freeze_fault 4 UP5V0D_freeze_fault 5 VTEMP1_freeze_fault 6 VTEMP2_freeze_fault 7 V_BAT1_freeze_fault |
| STAT_BYTE_1_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. Bit: 0 UP1V0D_freeze_fault 1 UP1V8D_freeze_fault 2 UP2V5D_freeze_fault 3 UP3V3D_freeze_fault 4 UP5V0D_freeze_fault 5 VTEMP1_freeze_fault 6 VTEMP2_freeze_fault 7 V_BAT1_freeze_fault |
| STAT_BYTE_2_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present.  Bit: 0 UP1V0D_voltage_fault 1 UP1V8D_voltage_fault 2 UP2V5D_voltage_fault 3 UP3V3D_voltage_fault 4 UP5V0D_voltage_fault 5 VTEMP1_temperature_fault 6 VTEMP2_temperature_fault 7 V_BAT1_voltage_fault |
| STAT_BYTE_3_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. Bit: 0 ECU_inconsistent_temperature_fault |
| STAT_BYTE_4_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. Bit: 0 Eq2Unavailable 1 Eq2FaultHandlingAliveError 2 Eq2FaultHandlingCrcError 3 VideoError_400 4 TempStatus_400 5 CamLVDS_Defect_400 6 CamEEP_Fail_400 7 BurntPixel_400 |
| STAT_BYTE_5_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. Bit: 0 DDR_Failure_400 1 WdgMSafetyAliveSupervisonFault |
| STAT_BYTE_6_FAULT_WERT | HEX | high | unsigned char | - | - | - | - | - | The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. Bit: 0 ActiveFaultClass Bit 0* 1 ActiveFaultClass Bit 1* 2 ActiveFaultClass Bit 2* 3 (not disp_drasy_available)  4 (not aAssistFunctionAvailable) 5 (not qAssistActive) 6 Not in use 7 Safe state entered disp_drasy_available  means that the bit is  0  when the signal is availablem, and  1  when it is not available |

### RES_0X4010

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PPP_WARNING_ZONE | 0-n | high | unsigned int | - | TAB_PPP_WARNING_ZONE | - | - | - | Art der Warnzone |
| STAT_PPP_AMNT_DZ_EVENTS_0_TO_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der DZ-Events im Bereich 0 < x < 20 km/h gezählt wird |
| STAT_PPP_AMNT_DZ_EVENTS_20_TO_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der DZ-Events im Bereich 20 < x < 40 km/h gezählt wird |
| STAT_PPP_AMNT_DZ_EVENTS_40_TO_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der DZ-Events im Bereich 40 < x < 60 km/h gezählt wird |
| STAT_PPP_AMNT_PDZ1_EVENTS_0_TO_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PDZ1-Events im Bereich 0 < x < 20 km/h gezählt wird |
| STAT_PPP_AMNT_PDZ1_EVENTS_20_TO_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PDZ1-Events im Bereich 20 < x < 40 km/h gezählt wird |
| STAT_PPP_AMNT_PDZ1_EVENTS_40_TO_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PDZ1-Events im Bereich 40 < x < 60 km/h gezählt wird |
| STAT_PPP_AMNT_PDZ2_EVENTS_0_TO_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PDZ2-Events im Bereich 0 < x < 20 km/h gezählt wird |
| STAT_PPP_AMNT_PDZ2_EVENTS_20_TO_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PDZ2-Events im Bereich 20 < x < 40 km/h gezählt wird |
| STAT_PPP_AMNT_PDZ2_EVENTS_40_TO_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PDZ2-Events im Bereich 40 < x < 60 km/h gezählt wird |
| STAT_PPP_AMNT_PREWARNUNG_REQUESTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Pre-Warning-Requests gezählt wird |
| STAT_PPP_AMNT_ACUTEWARNING_REQUESTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Acute-Warning-Requests gezählt wird. |
| STAT_PPP_AMNT_HBA_REQUESTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der HBA-Requests gezählt wird. |
| STAT_PPP_AMNT_PREFILL_REQUESTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Prefill-Requests gezählt wird. |
| STAT_PPP_AMNT_BRAKE_REQUESTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Brake-Requests gezählt wird. |
| STAT_PPP_DEACT_DRIVER_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Abschaltungen der Funktion pFGS durch den Fahrer gezählt wird. (Statuswechsel der Aktivierung durch Tasterbetätigung) |
| STAT_PPP_DEACT_AVAILABILITY_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Abschaltungen der Funktion pFGS durch das KAFAS System aufgrund des Verfügbarkeitskonzeptes (z.B. Erkennungsqualifier, Degradationskonzept,...) gezählt wird. |
| STAT_PPP_DEACT_WARNING_CHAIN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Abschaltungen der Funktion pPP durch das KAFAS System aufgrund der Brems-und Warnkette gezählt wird. |
| STAT_PPP_OPERATION_TIME_CL50_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem immer ab Kl 50 die Betriebszeit in Sekunden gezählt wird. |
| STAT_PPP_OPERATION_TIME_ACTIVE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem immer ab Kl 50 die Betriebszeit in Sekunden gezählt wird, während die pFGS-Funktion aktiviert ist. |
| STAT_PPP_FS_CC_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der ausgelösten Check Control Meldungen aufgrund reduzierter Sicht für die Funktion pFGS gezählt wird. |
| STAT_PPP_DRIVEN_TIME_FS_ACT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Betriebszeit ab Kl 50 in Sekunden ermittelt wird, in der pFGS im Status  reduzierte Sicht  und vom Fahrer aktiviert ist. |

### RES_0X4011

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CCM_AMNT_BRAKE_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der CCM-Bremsungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 0 km/h und kleiner 20 km/h ist. |
| STAT_CCM_AMNT_BRAKE_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der CCM-Bremsungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 20 km/h und kleiner 40 km/h ist. |
| STAT_CCM_AMNT_BRAKE_GEQ40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der CCM-Bremsungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 40 km/h ist |

### RES_0X4012

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENVINT_DRIVEN_DIST_FS_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Cont the number of km driven with degraded availability |
| STAT_ENVINT_DRIVEN_TIME_FS_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Count the time in seconds driven with degraded availability |

### RES_0X4016

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TYPE_OF_WARNING | 0-n | high | unsigned char | - | TABLE_TYPE_OF_WARNING | - | - | - | 0x01 if only a Brake request according to 2) is triggered 0x02 if only an Acute warning request according to 1)  is triggered 0x03 if both an Acute warning request and a Brake request is triggered |
| STAT_TIMESTAMP_ACUTE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The time stamp is the system time value (message 328h) when the warning happened |
| STAT_TIMESTAMP_BRAKE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The time stamp is the system time value (message 328h) when the warning happened. |

### RES_0X4050

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRAME_INDEX_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | This is a frame counter, that shall be increased for every frame that is not skipped. Frames that are skipped for any reason shall not increment this counter. When the counter reaches over 65535, it shall restart from 0. The counter shall restart from 0 at every startup of the EyeQ2. |
| STAT_VIDEO_ERROR_COUNT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | The number of bad frames received from the camera (frames dropped due to data/sync errors). This counter shall be increased with one for each cycle the  Video error  signal is set in the 0x400 message. |
| STAT_DROPPED_FRAME_COUNT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | The number of dropped frames. This counter shall be increased when there is a video error and when the EyeQ2 skips a frame for any other reason, such as too long processing time for the preceding frame. |
| STAT_CAMERA_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | The camera temperature, as read by the EyeQ2 via I2C. The camera temperature shall be read from the EyeQ2 every 10 seconds. |

### RES_0XD341

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_ENTGEGENKOMMENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob ein entgegenkommendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_VORAUSFAHRENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob ein vorausfahrendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_GESCHWINDIGKEITSLIMIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob die Geschwindigkeit unterhalb der Grenze erkannt worden ist:  0 = Geschwindigkeit oberhalb der Schwelle, Fernlicht wird eingeschaltet,  1 = Geschwindigkeit unterhalb der Schwelle, Fernlicht wird abgeschaltet |
| STAT_FLA_UMGEBUNGSHELLIGKEIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob Umgebungshelligkeit (Tag) erkannt worden ist:  0 = kein Helligkeit (Nacht) erkannt,  1 = Helligkeit (Tag) erkannt |
| STAT_FLA_ORTSCHAFTSERKENNUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob eine ausreichende Beleuchtung erkannt worden ist:  0 = keine ausreichende Beleuchtung erkannt,  1 = ausreichende Beleuchtung erkannt |
| STAT_FLA_NEBELERKENNUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob Nebel erkannt worden ist:  0 = kein Nebel,  1 = Nebel erkannt |
| STAT_FLA_AUTOBAHNMODE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob Autobahn erkannt worden ist:  0 = keine Autobahn,  1 = Autobahn erkannt |
| STAT_FLA_VERZOEGERUNGSZEIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob wegen einer Zeiterzögerung das Fernlicht nicht eingeschaltet wird:  0 = keine Zeitverzögerung,  1 = Zeitverzögerung |

### RES_0XD374

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_TLC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Time-to-Line Crossing vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_FLA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Fernlichtassistent vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_SLI | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Speed-Limit-Info vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_NPI | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion NoPassing-Info vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_FCW | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Forward-Collision-Warning vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_PED | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Pedistrian Recognition (Fußgängererkennung) vorhanden ist: 0= nicht vorhanden; 1= vorhanden |

### RES_0XD393

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAFAS_KAM_VIN_TEXT | TEXT | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der 7-stelligen Fahrgestellnummer aus der Kamera. |
| STAT_KAFAS_ECU_VIN_TEXT | TEXT | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der 7-stelligen Fahrgestellnummer aus dem Steuergerät. |
| STAT_KAFAS_VIN_STATUS_NR | 0-n | - | unsigned char | - | TAB_KAFAS_STAT_VIN | 1.0 | 1.0 | 0.0 | Gibt aus, ob die Zuordnung Kamera zu Steuergerät übereinstimmt:  0x00: KEINE UEBEREINSTIMMUNG,  0x01: UEBEREINSTIMMUNG |

### RES_0XD396

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFLINE_YAW_WERT | Pixel | - | int | - | - | 1.0 | 1.0 | 0.0 | Offline Yaw-Winkel |
| STAT_OFFLINE_HORIZON_WERT | Pixel | - | int | - | - | 1.0 | 1.0 | 0.0 | Offline Horizon-Winkel |
| STAT_OFFLINE_ROLL_WERT | Grad | - | int | - | - | 1.0 | 100.0 | 0.0 | Offline Roll-Winkel |
| STAT_ONLINE_YAW_WERT | Pixel | - | int | - | - | 1.0 | 1.0 | 0.0 | Online Yaw-Winkel |
| STAT_ONLINE_HORIZON_WERT | Pixel | - | int | - | - | 1.0 | 1.0 | 0.0 | Online Horizon-Winkel |
| STAT_ONLINE_ROLL_WERT | Grad | - | int | - | - | 1.0 | 100.0 | 0.0 | Online Roll-Winkel |
| STAT_KAM_HOEHE_WERT | mm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kamera-Verbauhöhe |
| STAT_BRENNWEITE_WERT | Pixel | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Brennweite |
| STAT_GRABBING_SHIFT_WERT | Pixel | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Grabbing-Shift |
| STAT_FAHRGESTELLNR_TEXT | TEXT | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | Fahrgestellnummer in der Kamera |

### RES_0XD3AA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAMERA_ZEICHEN_NR | 0-n | - | unsigned char | - | TAB_ZEICHEN_KAMERA | 1.0 | 1.0 | 0.0 | Gibt aus, welches Zeichen von der Kamera erkannt wurde:  Results siehe TAB_ZEICHEN_KAMERA |
| STAT_KAMERA_GESCHWINDIGKEIT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, welche Geschwindigkeit in den Zeichen erkannt wurde: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| STAT_KARTE_ZEICHEN_NR | 0-n | - | unsigned char | - | TAB_ZEICHEN_KARTE | 1.0 | 1.0 | 0.0 | Gibt aus, welches Zeichen aus der Karte gelesen wurde:  Results siehe TAB_ZEICHEN_KARTE |
| STAT_KARTE_GESCHWINDIGKEIT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, welche Geschwindigkeit aus der Karte gelesen wurde: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| STAT_FUSIONIERT_ZEICHEN_NR | 0-n | - | unsigned char | - | TAB_ZEICHEN_FUSIONIERT | 1.0 | 1.0 | 0.0 | Gibt aus, welches Zeichen aus den fusioniertem Erkennungsergebnis ausgegeben wird: Results siehe TAB_ZEICHEN_FUSIONIERT |
| STAT_FUSIONIERT_GESCHWINDIGKEIT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, welche Geschwindigkeit aus dem fusionierten Erkennungsergebnis ausgegeben wird: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten |
| STAT_GUETE_KAM_SLI_GESCHW_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, mit welcher Güte das Beschränkungs- und Aufhebungszeichen für Geschwindigkeiten mit der Kamera erkannt wurde: 0 - 100 |

### RES_0XD3AD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTEMPFEHLUNG_FLA | 0-n | - | unsigned char | - | TAB_FLA_EMPFEHLUNG | 1.0 | 1.0 | 0.0 | Schaltempfehlung 2-stufiger FLA:  0 = Keine Emfehlung (Defekt erkannt, Sichtfeld verdreckt), 1 = Fernlicht AUS, 2 = Fernlicht EIN |
| STAT_GFA_OBJECT_RANGE_WERT | m | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Entfernung zum Objekt |
| STAT_GFA_RIGHT_BOUNDARY_WERT | Grad | - | unsigned char | - | - | 1.0 | 10.0 | -15.0 | Rechte Grenze des blendfreien Bereiches |
| STAT_GFA_LEFT_BOUNDARY_WERT | Grad | - | unsigned char | - | - | 1.0 | 10.0 | -10.4 | Linke Grenze des blendfreien Bereiches |
| STAT_GFA_LOWER_BOUNDARY_WERT | Grad | - | unsigned char | - | - | 1.0 | 20.0 | -5.0 | Untere Grenze des blendfreien Bereichs |

### RES_0XD3BD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBST_KALIBRIERUNG | 0-n | high | unsigned char | - | TAB_SELBST_KALIBRIERUNG_KAFAS | 1.0 | 1.0 | 0.0 | Ergebnisse sind wie folgt zu interpretieren 0 = nicht gestartet 1 = Kalibrierung aktiv 2 = Kalibrierung angehalten 3 = Kalibrierung abgeschlossen 4 = Kalibrierung Timeout |
| STAT_SELBST_KALIBRIERUNG_FORTSCHRITT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fortschritt der Selbstkalibrierung in % |
| STAT_SELBST_KALIBRIERUNG_KILOMETER_WERT | km | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Gefahrene Kilometer mit der Selbstkalibrierung |
| STAT_SELBST_KALIBRIERUNG_ABBRUCH_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fortschritt bis Abbruch der Selbstkalibrierung 100% = Abbruch |
| STAT_SELBST_KALIBRIERUNG_ABBRUCH_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Abbrüche der Selbstkalibrierung |

### RES_0XD3CD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAFAS_HEIZUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | KAFAS-Heizung: 0 = aus 1 = ein |

### RES_0XF001

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEBUG_AUSGABE | - | - | + | 0-n | high | unsigned int | - | TAB_STAT_DEBUG_AUSGABE | 1.0 | 1.0 | 0.0 | Liefert den Status ob die Ausgabe der Debug-Nachrichten aktiv ist |

### RES_0XF002

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_COUNTRY_CODE | - | - | + | 0-n | high | unsigned char | - | TAB_SIM_COUNTRY_CODE | 1.0 | 1.0 | 0.0 | Status über aktivierte Country-Code Simulation |

### RES_0XF003

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PEDANTIC_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_PEDANTIC_MODE | 1.0 | 1.0 | 0.0 | Aktivierungsstatus des Pedantic Mode für SLI und NPI |

### RES_0XF004

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_RESULT | + | - | - | 0-n | high | unsigned int | - | TAB_ERASE_RESULT | - | - | - | Löschergebnis |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _BREMSENANSTEUERUNG_FCW | 0x4000 | - | Definiert den Typ des Bremseingriffs der FCW-Funktion | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4000 | - |
| _FASTA_FLA_DATA | 0x4001 | - | _FASTA_FLA_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001 |
| _KAFAS_ECU_DATA | 0x4002 | - | _KAFAS_ECU_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002 |
| _KAFAS_TLC_DATA | 0x4003 | - | _KAFAS_TLC_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003 |
| KAFAS_FCW_DATA | 0x4004 | - | KAFAS_FCW_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004 |
| _KAFAS_SLI_DATA | 0x4005 | - | _KAFAS_SLI_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005 |
| _FASTA_FLA_LOESCHEN | 0x4006 | - | _FASTA_FLA_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006 | - |
| _STEURUNG_KALIBRIERDATEN_KAFAS | 0x400A | - | Control_KAFAS_Calibration_Data | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400A | - |
| _STEUERN_SLI_NPI_KAMERA_ERKENNUNG | 0x400B | - | This job simulates SLI and NPI camera recognitions. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B | - |
| _STEURUNG_SHUTDOWN_WATCHDOG | 0x400C | - | Shut down the EyeQ2 Watchdog for the current driving cycle | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C | - |
| _STATUS_SAFETY_DIAG_INFO | 0x400E | - | This job shall respond with information about the errors detected by the Safety Diagnostic Manager. The parameter values shall indicate 0 for fault_not_present and 1 for fault_present. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E |
| _STATUS_WARNZEITPUNKT_FCW | 0x400F | STAT_WARN_FLAV_FCW | currently selected warning flavor | 0-n | - | high | unsigned char | TABLE_STAT_WARN_FLAV_FCW | - | - | - | - | 22 | - | - |
| FASTA_PPP_DATA | 0x4010 | - | FASTA_PPP_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010 |
| FASTA_CCM_DATA | 0x4011 | - | FASTA_CCM_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011 |
| _KAFAS_ENVINT_DATA | 0x4012 | - | _KAFAS_ENVINT_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4012 |
| _STEUERN_WARNAUSGABE_PPP | 0x4015 | - | This job should allow the triggering of the pre -and acute warnings for pedestrian detection. If the warning is not switched off by the parameter ¿off¿ of this job it should be switched off latest after 10 seconds. If any parameter below is out of range a negative response RequestOutOfRange shall be returned. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4015 | - |
| PPP_ANFORDERUNGEN | 0x4016 | - | This job shall respond with the timestamp and type of warning.  It shall be possible to read the information over a clamp change, which means the information needs to be store in a NVRAM.  The response value shall be set to 0x00 as default value (i.e. if no acute warning or brake request have been triggered this job shall respond with zeros)  The type of warning and timestamps shall be related to the type of warning. 1) Acute warning request  When signal WARN_HDWOBS_FGS in message 198h (SYS3637) is set to 0001b Timestamp_acute = the actual system time when the warning happened.  2) Brake request When signal TAR_DCRN_FGS in the message 198h (SYS3637) changes from 0xFE to a value less than 0xFE. Timestamp_brake = the actual system time when the warning happened. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4016 |
| _GENERIC_EYEQ2_INFO | 0x4017 | STAT_EYEQ2_RESTARTS_WERT | EyeQ2 restarts, 1 byte Counter for number of EyeQ2 restarts caused by camera error  debouncing  as described in DTC 0x800ABB - Camera Connection Error | Counts | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _RESET_GENERIC_EYEQ2_INFO | 0x4018 | - | This DID is used to reset the FASTA parameter in DID 0x4017 GENERIC_EYEQ2_INFO. The  EyeQ2 restarts  parameter is set to 0. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4018 | - |
| _STATUS_CAMERA_MONITORING_WERT | 0x4050 | - | The DID can be used to monitor the status of the camera -> EyeQ2 image transfer, as well as the camera temperature. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4050 |
| STEUERN_ANZEIGE_KOMBI_TLC | 0xA37C | - | Ansteuerung der Anzeige im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xA37C | - |
| ABSCHALTGRUND_FERNLICHT | 0xD341 | - | Abschaltgründe für Fernlicht. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD341 |
| KONFIGURATION_KAFAS | 0xD374 | - | Ausgabe der Ausstattung von KAFAS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD374 |
| KAFAS_VINS_LESEN | 0xD393 | - | Auslesen der Fahrgestellnummer aus der Kamera und dem Steuergerät. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD393 |
| KALIBRIERDATEN_KAFAS | 0xD396 | - | Ausgabe der Kalibrierdaten der KAFAS-Kamera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD396 |
| KAMERAVERBINDUNG_ECU | 0xD397 | STAT_KAFAS_VERBINDUNG_KAM_NR | Werte siehe TAB_KAM_VERBINDUNG | 0-n | - | - | unsigned char | TAB_KAM_ECU_VERB | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TLC_AKTUATOR | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD399 | - |
| DEMO_MODE_FLA | 0xD3A6 | - | Demo-Mode für Fernlichtassisten ein-/ausschalten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A6 | - |
| FCW_WARNAUSGABE | 0xD3A7 | - | Triggern der Warnausgabe fuer Forward Collision Warning | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A7 | - |
| FCW_VERFUEGBARKEITSVERLUST | 0xD3A8 | - | Ausgabe des Verfügbarkeitsverlustes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A8 | - |
| STEUERN_ANZEIGE_KOMBI_SLI | 0xD3A9 | - | Ansteuerung der Anzeige für Verkehrzeichenerkennung im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A9 | - |
| ERGEBNIS_SLI | 0xD3AA | - | Ausgabe des Ergebnis der Verkehrzeichenerkennung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3AA |
| STEUERN_METHODE_SLI | 0xD3AB | - | Gibt vor, welche Methode bei der Speed-Limit-Info abgewendet werden soll. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AB | - |
| EMPFEHLUNG_FLA_STFLA | 0xD3AD | - | Empfehlung vom Fernlichtassisten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3AD | RES_0xD3AD |
| SELBST_KALIBRIERUNG | 0xD3BD | - | Neustart und Status Selbstkalibrierung der KAFAS-Kamera | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3BD | RES_0xD3BD |
| KAFAS_SCHEIBENHEIZUNG | 0xD3CD | - | KAFAS-Scheibeheizung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3CD | RES_0xD3CD |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Spannungswert am Steuergerät an Klemme 15N (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _DEBUG_AUSGABE | 0xF001 | - | Debug Ausgabe für KAFAS | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001 |
| _SIM_COUNTRY_CODE | 0xF002 | - | Simulation der Country Codes für SLI und NPI | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002 | RES_0xF002 |
| _PEDANTIC_MODE | 0xF003 | - | Pedantic Mode für  SLI und NPI | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF003 |
| _ERASE_MICRO_CORE_DUMP | 0xF004 | - | Löschen vom MicroCoreDump | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF004 |

### TABLE_STAT_WARN_FLAV_FCW

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorwarnung  aus  |
| 0x01 | Vorwarnung  früh  |
| 0x02 | Vorwarnung  spät  |

### TABLE_TYPE_OF_WARNING

| WERT | TEXT |
| --- | --- |
| 0x01 | - |
| 0x02 | - |
| 0x03 | - |

### TAB_ART_LAENDERKODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ECE white |
| 0x01 | ECE yellow |
| 0x02 | US white |
| 0x03 | US yellow |
| 0x04 | generic |
| 0x05 | reserved |
| 0x06 | reserved |
| 0x07 | reserved |
| 0x08 | reserved |
| 0x09 | reserved |
| 0x0A | reserved |
| 0x0B | reserved |
| 0x0C | reserved |
| 0x0D | reserved |
| 0x0E | signal invalid |

### TAB_ART_TEXT_MELDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | none |
| 0x01 | available only with navigation DVD |
| 0x02 | not available in this country |
| 0x03 | navigation data not available |
| 0x04 | reserved |
| 0x05 | reserved |
| 0x06 | reserved |
| 0x07 | signal invalid |

### TAB_ART_UEBERHOL_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Überholverbot |
| 0x01 | Überholverbot PKW |
| 0x02 | Überholverbot Linksverkehr |
| 0xFF | Ungültig |

### TAB_ART_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zeichen verfügbar |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0xFF | Ungültig |

### TAB_BREMS_TYP_FCW

| WERT | TEXT |
| --- | --- |
| 0x00 | Bremsenansteuerung aus |
| 0x01 | HBA-Stufe 1 |
| 0x02 | HBA-Stufe 2 |
| 0x03 | HBA-Stufe 3 |
| 0x04 | Prefill |

### TAB_ERASE_RESULT

| WERT | TEXT |
| --- | --- |
| 0x0001 | Loeschung erfolgreich |
| 0x0003 | Loeschung Timeout |
| 0x0004 | Loeschung beendet, fehlerhaft |
| 0x0005 | Loeschung Verbindungsfehler |
| 0x0006 | Ladeproblem Fault Manager Konfiguration |
| 0x0007 | Fehler: Flash memory handler |
| 0x0008 | Fehler: Loeschung Micro Core Dump sector |
| 0x0009 | EQ verweigert Anfrage |
| 0xFFFF | Ungueltiger Wert |

### TAB_FCW_VERFUEGBARKEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | verfuegbar |
| 0x01 | nicht verfuegbar, Umweltbedingungen |
| 0x02 | nicht verfuegbar, Blockade |

### TAB_FCW_WARN_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Vorwarnung |
| 0x02 | Akkutwarnung |
| 0x03 | Distanzwarnung |

### TAB_FLA_EMPFEHLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Keine Empfehlung |
| 0x0001 | Fernlicht AUS |
| 0x0002 | Fernlicht EIN |
| 0xFFFF | Ungültig |

### TAB_KAFAS_KOMBI_ANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Anzeige im Kombi ausgeschaltet |
| 0x01 | set ST_TLC aktiv |
| 0x02 | Balken rechts anzeigen |
| 0x04 | Balken links anzeigen |
| 0x07 | Balken rechts und links anzeigen |
| 0x08 | Aktivierungsanzeige = Verfügbarkeitsschwelle anzeigen |
| 0x10 | Verfügbarkeit rechts |
| 0x20 | Verfügbarkeit links |
| 0xFF | Ungültig |

### TAB_KAFAS_STAT_VIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Übereinstimmung |
| 0x01 | Übereinstimmung |
| 0xFF | Ungültig |

### TAB_KAM_ECU_VERB

| WERT | TEXT |
| --- | --- |
| 0x00 | Kameraverbindung in Ordnung |
| 0x01 | Fehler nur an Versorgungsleitungen |
| 0x02 | Fehler nur an Videoleitungen |
| 0x03 | Fehler nur an Datenleitungen |
| 0x04 | Fehler an Video- und Versorgungsleitungen |
| 0xFF | nicht definiert |

### TAB_METHODE_SLI

| WERT | TEXT |
| --- | --- |
| 0x00 | Nur kamerabasierte Erkennung der Verkehrszeichen aktivieren |
| 0x01 | Nur kartenbasierte Erkennung der Verkehrszeichen aktivieren |
| 0x02 | Fusionierte Erkennung aktivieren |
| 0xFF | Auf Standard zurücksetzen |

### TAB_PEDANTIC_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Pedantic Mode nicht aktiv |
| 0x01 | Pedantic Mode aktiv |
| 0xFF | ungültig |

### TAB_PPP_WARNING_ZONE

| WERT | TEXT |
| --- | --- |
| 0 | Event in DZ |
| 1 | Event in PDZ1 |
| 2 | Event in PDZ2 |
| 4 | Vorwarnung |
| 8 | Akutwarnung |
| 16 | HBA-Schwellwertanpassung |
| 32 | Brake Prefill |
| 64 | Bremse |
| 128 | Pre-Crash |

### TAB_SELBST_KALIBRIERUNG_KAFAS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung nicht gestartet |
| 0x01 | Kalibrierung aktiv |
| 0x02 | Kalibrierung angehalten |
| 0x03 | Kalibrierung abgeschlossen |
| 0x04 | Kalibrierung Timeout |
| 0xFF | Ungültig |

### TAB_SHUTDOWN

| WERT | TEXT |
| --- | --- |
| 00 | Restore the EQ2 Watchdog |
| 01 | Shutdown EQ2 Watchdog. Generate cyclic msg |
| 02 | Shutdown EQ2 Watchdog. Do not generate cyclic msg |

### TAB_SIGN_SYSTEM_OF_UNITS

| WERT | TEXT |
| --- | --- |
| 00 | No system |
| 01 | Metric system, -KPH in europe |
| 02 | Angloamerican system -MPH |

### TAB_SIM_COUNTRY_CODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Country-Code Simulation aktiv |
| 0x01 | Country-Code Simulation aktiv |
| 0xFF | unbelegt |

### TAB_SLINPI_SIGN_STATE

| WERT | TEXT |
| --- | --- |
| 00 | Sign is invalid |
| 01 | Sign is valid |
| 02 | Reserved |
| 03 | Reserved |

### TAB_STAT_DEBUG_AUSGABE

| WERT | TEXT |
| --- | --- |
| 0x0000 | Debug-Ausgabe nicht aktiv |
| 0x0001 | Debug-Ausgabe aktiv |
| 0xFFFF | ungültig |

### TAB_STFLA_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Empfehlung |
| 0x01 | AUS |
| 0x02 | EIN |
| 0x03 | Zurück_zum_Normalbetrieb |

### TAB_WARN_TYP_PPP

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | Pre-warning of predestrian detection |
| 0x02 | Acute warning of predestrian detection |

### TAB_ZEICHEN_FUSIONIERT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ergebnis |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | ungültiges Ergebnis |
| 0xFF | Ungültig |

### TAB_ZEICHEN_KAMERA

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Zeichen erkannt |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | Ungültige Kamerainformation |
| 0xFF | Ungültig |

### TAB_ZEICHEN_KARTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zeichen vorhanden |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | Ungültige Karteninformation |
| 0xFF | Ungültig |
