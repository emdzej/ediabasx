# CVMS_I15.prg

## General

|  |  |
| --- | --- |
| File | CVMS_I15.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 75 |
| Origin | BMW EI-602 RalfPompl |
| Revision | 3.002 |
| Author | HelbakoGmbH E-S GuidoGlissmann |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio Verdeck Modul Slave |  |  |
| ORIGIN | string | BMW EI-602 RalfPompl |  |  |
| REVISION | string | 3.002 |  |  |
| AUTHOR | string | HelbakoGmbH E-S GuidoGlissmann |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.91 |  |  |
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
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC = '1', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

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
| 0x000001 | Reinshagen / Delphi |
| 0x000002 | Leopold Kostal GmbH & Co. KG |
| 0x000003 | Hella Fahrzeugkomponenten GmbH |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako GmbH |
| 0x000008 | Robert Bosch GmbH |
| 0x000009 | Lear Corporation |
| 0x000010 | VDO |
| 0x000011 | Valeo GmbH |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine Electronics GmbH |
| 0x000018 | Continental Teves AG & Co. OHG |
| 0x000019 | Elektromatik Südafrika |
| 0x000020 | Harman Becker Automotive Systems |
| 0x000021 | Preh GmbH |
| 0x000022 | Alps Electric Co. Ltd. |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto SE |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi Automotive PLC |
| 0x000028 | DODUCO (Beru) |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer Corporation |
| 0x000033 | Jatco |
| 0x000034 | FUBA Automotive GmbH & Co. KG |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE (Fahrzeugtechnik Ebern) |
| 0x000041 | Megamos |
| 0x000042 | TRW Automotive GmbH |
| 0x000043 | WABCO Fahrzeugsysteme GmbH |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC Hella Electronics Corporation |
| 0x000046 | Gemel |
| 0x000047 | ZF Friedrichshafen AG |
| 0x000048 | GMPT |
| 0x000049 | Harman Becker Automotive Systems GmbH |
| 0x000050 | Remes GmbH |
| 0x000051 | ZF Lenksysteme GmbH |
| 0x000052 | Magneti Marelli S.p.A. |
| 0x000053 | Johnson Controls Inc. |
| 0x000054 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x000055 | Behr-Hella Thermocontrol GmbH |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon Innovation & Technology GmbH |
| 0x000058 | Autoliv AB |
| 0x000059 | Haberl Electronic GmbH & Co. KG |
| 0x000060 | Magna International Inc. |
| 0x000061 | Marquardt GmbH |
| 0x000062 | AB Elektronik GmbH |
| 0x000063 | SDVO/BORG |
| 0x000064 | Hirschmann Car Communication GmbH |
| 0x000065 | hoerbiger-electronics |
| 0x000066 | Thyssen Krupp Automotive |
| 0x000067 | Gentex Corporation |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steeting Europe |
| 0x000071 | NSI Beheer B.V. |
| 0x000072 | Aisin AW Co. Ltd. |
| 0x000073 | Schorlock |
| 0x000074 | Schrader Electronics Ltd. |
| 0x000075 | Huf-Electronics Bretten GmbH |
| 0x000076 | CEL |
| 0x000077 | AUDIO MOBIL Elektronik GmbH |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia-Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A. |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | Sonceboz S.A. |
| 0x000086 | Meta System S.p.A. |
| 0x000087 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x000088 | MANN+HUMMEL GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co. |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.a |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp |
| 0x000094 | Küster Automotive GmbH |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental AG |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls Inc. |
| 0x00009A | Takata-Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN Plc |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | peiker acustic GmbH & Co. KG |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Automotive Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0x0000A5 | Novero Dabendorf GmbH |
| 0x0000A6 | LAMES S.p.a. |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Harbin Wan Yu Technology Co |
| 0x0000A9 | ThyssenKrupp Presta AG |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors Stuttgart GmbH |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA S.p.A. |
| 0x0000AF | Alfmeier Präzision AG |
| 0x0000B0 | Eltek Deutechland GmbH |
| 0x0000B1 | OMRON Automotive Electronics Europe GmbH |
| 0x0000B2 | ASK Industries GmbH |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive |
| 0x0000B6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | Kyocera Display Europe GmbH |
| 0x0000B9 | Magna Powertrain AG & Co. KG |
| 0x0000BA | BorgWarner Beru Systems GmbH |
| 0x0000BB | BMW AG |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin Deutschland Zugangssysteme GmbH |
| 0x0000BE | Schaeffler Technologies AG & Co. KG |
| 0x0000BF | JTEKT Corporation |
| 0x0000C0 | VLF |
| 0x0000C1 | Flextronics |
| 0x0000C2 | LG Chem |
| 0x0000C3 | Panasonic |
| 0x0000C4 | Alpitronic GmbH |
| 0x0000C5 | Telemotive AG |
| 0x0000C6 | Garmin |
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
| 0x1750 | PWF_Basinetz | 0-n | - | 0xFF | - | 1 | 1 | 0.000000 |
| 0x1751 | PWF_Teilnetz | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X4053_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | Ansteuerkontrolle |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_VERDECKANTRIEB_RICHTUNG | - | - | - | - | - | Rchtung |
| PWM | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert |
| SOFTSTART_STOP | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Softstart / Softstop: 0=nicht aktiv 1=aktiv |
| ANTRIEB | 0-n | high | unsigned char | - | TAB_CV_VERDECKANTRIEB_WAHL | - | - | - | - | - | Auswahl Verdeckantrieb |

### ARG_0X4210

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | - | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | - |
| RELAIS_V03_1 | 0-n | - | unsigned char | - | TAB_RELAIS_RICHTUNG | - | - | - | - | - | - |
| RELAIS_V03_2 | 0-n | - | unsigned char | - | TAB_RELAIS_RICHTUNG | - | - | - | - | - | - |
| TREIBER_V03 | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| DIAGNOSTIC_VOLTAGE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| LED1 | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| LED2 | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| HALL_V_PER | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| HALL_V_TMP | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| HALL_V_MOT | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |
| HALL_V_OPT | 0/1 | - | unsigned char | - | - | - | - | - | - | - | - |

### ARG_0XA1A4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_CV_ELEMENT | - | - | - | - | - | Auswahl des Verdeckelements oder Verdeckfunktion (siehe TAB_CV_ELEMENT) |
| ARG_RICHTUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |
| ARG_ZEIT | + | - | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in ms (0 bis 65534 ms) |

### ARG_0XA1A6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_ANSTEUERUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANST_BAUGRUPPE | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANST_BAUGRUPPE) Achtung: Vor der Ansteuerung sicherstellen, dass keine Kollisionsgefahr besteht! |

### ARG_0XA1A7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BAUGRUPPE | + | - | 0-n | high | unsigned char | - | TAB_CV_STEST_BAUGRUPPE_S | - | - | - | - | - | Auswahl der Baugruppe, die getestet werden soll |

### ARG_0XD2A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### ARG_0XD7A1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANSTEUERUNG) |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG_HECKSCHEIBE | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERUNG_HECKSCHEIBE) |

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
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x022300 | Energiesparmode aktiv | 0 | - |
| 0x022308 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022309 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02230A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02230B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02230C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF23 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x48300C | Verdeck, Verdeckklappe geschlossen, VSW 5.1 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x48300D | Verdeck, Verdeckklappe geschlossen, VSW 5.1 : Signal ungültig | 0 | - |
| 0x48300E | Verdeck, Verdeckklappe offen, VSW 5.2 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x48300F | Verdeck, Verdeckklappe offen, VSW 5.2 : Signal ungültig | 0 | - |
| 0x483010 | Verdeck, Verdeckklappe unten links, VSW 5.3 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x483011 | Verdeck, Verdeckklappe unten links, VSW 5.3 : Signal ungültig | 0 | - |
| 0x483046 | Fußpunkt Endlagensensoren wegen KS +Ub eines Sensors zum Schutz der Messwiderstände abgeschaltet | 0 | - |
| 0x483047 | Fußpunkt Positionssensoren wegen KS +Ub eines Sensors zum Schutz der Messwiderstände abgeschaltet | 0 | - |
| 0x48307B | Verdeckklappenantrieb links: Kurzschluss | 0 | - |
| 0x48307C | Verdeckklappenantrieb links: Unterbrechung | 0 | - |
| 0x48307D | Verdeckklappenantrieb rechts: Kurzschluss | 0 | - |
| 0x48307E | Verdeckklappenantrieb rechts: Unterbrechung | 0 | - |
| 0x483080 | Speicherfehler RAM | 0 | - |
| 0x483081 | Speicherfehler ROM | 0 | - |
| 0x483082 | Funktionseinschränkung: Motorstartautomatik aktiv | 1 | - |
| 0x483083 | Funktionseinschränkung: Standverbraucherabschaltung aktiv | 1 | - |
| 0x48308D | Funktionseinschränkung: Wiederholsperre Heckscheibenantrieb | 1 | - |
| 0x48308F | Funktionseinschränkung: Zeitüberschreitung Freigabe Heckscheibe | 1 | - |
| 0x483092 | Zeitüberschreitung beim Öffnen-Schliessen der Verdeckklappe | 1 | - |
| 0x483095 | Funktionseinschränkung wegen Unterspannung | 1 | - |
| 0x483096 | Funktionseinschränkung wegen Überspannung | 1 | - |
| 0x483098 | Überspannung erkannt | 1 | - |
| 0x483099 | Unterspannung erkannt | 1 | - |
| 0x4830A0 | Funktionseinschränkung: Zeitüberschreitung beim Öffnen/ Schließen der Heckscheibe | 1 | - |
| 0x4830A1 | Funktionseinschränkung: Wiederholsperre Verdeckklappenantriebe | 1 | - |
| 0x4830A2 | Funktionseinschränkung: Verdeckklappe/Verdeckkastendeckel unplausibel | 1 | - |
| 0x4830A9 | Funktionseinschränkung: Abbruch wegen fehlender Freigabe Heckscheibe | 1 | - |
| 0x4830CA | Verdeck, Verdeckklappe geschlossen rechts, VSW 5.5 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x4830CB | Verdeck, Verdeckklappe geschlossen rechts, VSW 5.5 : Signal ungültig | 0 | - |
| 0x4830CC | Verdeck, Verdeckklappe offen rechts, VSW 5.6 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x4830CD | Verdeck, Verdeckklappe offen rechts, VSW 5.6 : Signal ungültig | 0 | - |
| 0x4830CE | Verdeck, Verdeckklappe unten rechts, VSW 5.7 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x4830CF | Verdeck, Verdeckklappe unten rechts, VSW 5.7 : Signal ungültig | 0 | - |
| 0x4830D0 | Versorgungsspannung der Positionssensoren: Kurzschluss | 0 | - |
| 0x4830D1 | Versorgungsspannung der Endlagensensoren: Kurzschluss | 0 | - |
| 0x4830D2 | Versorgungsspannung der Motorsensoren: Kurzschluss | 0 | - |
| 0x4830D3 | Versorgungsspannung der Optionalen Sensoren: Kurzschluss | 0 | - |
| 0x4830D5 | Klemme 30B_R Spannung fehlerhaft | 1 | - |
| 0x4830D6 | Klemme 30B_L Spannung fehlerhaft | 1 | - |
| 0x4830D8 | Analoger Heckscheibentaster: Kurzschluss nach Minus | 0 | - |
| 0x4830D9 | Analoger Heckscheibentaster: Hängt im Zustand Öffnen | 0 | - |
| 0x4830DA | Analoger Heckscheibentaster: Hängt im Zustand Schließen | 0 | - |
| 0x4830DB | Analoger Heckscheibentaster: Signal ungültig | 0 | - |
| 0x4830DC | Freigabeleitung: Kurzschluss nach Plus | 0 | - |
| 0x4830DD | Freigabeleitung: Unterbrechung | 0 | - |
| 0x4830DE | Freigabeleitung: Signal ungültig | 0 | - |
| 0x4830E0 | Heckscheibenantrieb: kein Flankenwechsel am Inkrementalsensor | 0 | - |
| 0x4830E3 | Spannung Klemme 30B_L ist ungleich Spannung Klemme 30B_R | 0 | - |
| 0x4830F8 | Heckscheibe, Heckscheibe unten VSW 13.1: Unterbrechung oder Kurzschluss | 0 | - |
| 0x4830F9 | Heckscheibe, Heckscheibe unten VSW 13.1: Signal ungültig | 0 | - |
| 0x4830FC | Heckscheibenantrieb, Inkrementalgeber Position VSW 13.4: Unterbrechung oder Kurzschluss | 0 | - |
| 0x4830FD | Heckscheibenantrieb, Inkrementalgeber Position VSW 13.4: Signal ungültig | 0 | - |
| 0x4830FE | Heckscheibenantrieb: Kurzschluss | 0 | - |
| 0x4830FF | Heckscheibenantrieb: Unterbrechung | 0 | - |
| 0xD1C468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xD1CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD1D400 | Ausfall Botschaft GESCHWINDIGKEIT | 1 | - |
| 0xD1D401 | Ausfall Botschaft KLEMMEN | 1 | - |
| 0xD1D402 | Ausfall Botschaft POWERMGMT_CTR_COS | 1 | - |
| 0xD1D404 | Ausfall Botschaft CTR_FH_SHD_ZENTRALE | 1 | - |
| 0xD1D407 | Ausfall Botschaft DT_PT_2 | 1 | - |
| 0xD1D408 | Ausfall Botschaft Fahrzeugzustand | 1 | - |
| 0xD1D40A | Ausfall Botschaft ST_CABRF | 1 | - |
| 0xD1D40B | Ausfall Botschaft CTR_CAB_RF_RC | 1 | - |
| 0xD1D40F | Ausfall Botschaft RELATIVZEIT | 1 | - |
| 0xD1D420 | ALIVE- oder CRC-Fehler Botschaft GESCHWINDIGKEIT | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4600 | Aussentemperatur | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4601 | Datum_Tag | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4602 | Datum_Monat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4603 | Datum_Jahr | - | Low | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4604 | Spannung_Kl30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4605 | Bedienquelle | 0-n | High | 0xFF | TAB_CV_BEDIENANFORDERUNG | - | - | - |
| 0x4608 | Sensoren | 0-n | High | 0xFFFF | TAB_SENSOREN_FF | - | - | - |
| 0x460C | Spannung_Kl30_R | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x460D | Spannung_Kl30_L | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x230000 | DEM_CAN_E_TIMEOUT | 0 | - |
| 0x230001 | CANIF_E_FULL_TX_BUFFER | 0 | - |
| 0x230002 | CANIF_E_STOPPED | 0 | - |
| 0x230003 | CANIF_E_INVALID_DLC | 0 | - |
| 0x230004 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 | - |
| 0x230005 | CANNM_E_INIT_FAILED | 0 | - |
| 0x230006 | CANNM_E_NETWORK_TIMEOUT | 0 | - |
| 0x230007 | CANNM_E_TX_PATH_FAILED | 0 | - |
| 0x230008 | CANTP_E_COM | 0 | - |
| 0x230009 | CANTP_E_OPER_NOT_SUPPORTED | 0 | - |
| 0x23000A | CANTRCV_30_E_NO_TRCV_CNTRL | 0 | - |
| 0x23000B | CANSM_E_MODE_CHANGE_NETWORK_0 | 0 | - |
| 0x23000D | CANSM_E_SETTRSCVMODE_NETWORK_0 | 0 | - |
| 0x23000E | CSM_E_ERROR_EVENT | 0 | - |
| 0x230010 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0x230011 | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0x230012 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x230013 | ECUM_E_RAM_CHECKED_FAILED | 0 | - |
| 0x230014 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x230015 | FLS_E_ERASE_FAILED | 0 | - |
| 0x230016 | FLS_E_READ_FAILED | 0 | - |
| 0x230017 | FLS_E_WRITE_FAILED | 0 | - |
| 0x230018 | IPDUM_E_TRANSMIT_FAILED | 0 | - |
| 0x230019 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x23001A | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x23001B | NVM_E_REQ_FAILED | 0 | - |
| 0x23001C | PDUR_E_INIT_FAILED | 0 | - |
| 0x23001D | PDUR_E_PDU_INSTANCE_LOST | 0 | - |
| 0x23001E | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x23001F | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x230020 | WDGM_E_ALIVE_SUPERVISION | 0 | - |
| 0x230021 | WDGM_E_SET_MODE | 0 | - |
| 0x230022 | FEE_FORMAT_FAILED | 0 | - |
| 0x230023 | FEE_E_STARTUP_FAILED | 0 | - |
| 0x230024 | MCU_E_WRITE_FAILURE | 0 | - |
| 0x230026 | MCU_E_POWER_DOWN_MODE_FAILURE | 0 | - |
| 0x230027 | PORT_E_WRITE_FAILURE | 0 | - |
| 0x230028 | WDG_23_DRVA_E_MODE_SWITCH_FAILED | 0 | - |
| 0x230029 | WDG_23_DRVA_E_DISABLE_REJECTED | 0 | - |
| 0x23002A | FEE_E_WRITE_FAILED | 0 | - |
| 0x23002B | FEE_E_READ_FAILED | 0 | - |
| 0x230031 | SPI_E_SEQ_FAILED | 0 | - |
| 0x23003F | PWM_E_REWRITE_FAILED | 0 | - |
| 0x230048 | Taster Heckscheibe anheben: Kurzschluss nach Masse oder hängt | 0 | - |
| 0x230049 | Taster Heckscheibe anheben: Kurzschluss nach Plus | 0 | - |
| 0x23004A | Taster Heckscheibe absenken: Kurzschluss nach Masse  oder hängt | 0 | - |
| 0x23004B | Taster Heckscheibe absenken: Kurzschluss nach Plus | 0 | - |
| 0x23004E | Masse-Ausgang (masseschaltende Kontakte): Kurzschluss nach Plus | 0 | - |
| 0x230085 | Funktionseinschränkung: Außentemperatur zu niedrig | 1 | - |
| 0x2300B4 | Heckscheibenantrieb, Inkrementalgeber: nicht angelernt | 0 | - |
| 0x2300B5 | Inkrementalsensor Reserve1 Karosseriestecker : Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300B6 | Inkrementalsensor Reserve1 Karosseriestecker : Signal ungültig | 0 | - |
| 0x2300B8 | Inkrementalsensor Reserve Verdeckstecker : Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300B9 | Inkrementalsensor Reserve Verdeckstecker : Signal ungültig | 0 | - |
| 0x2300BB | Inkrementalsensor Reserve2 Karosseriestecker: Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300BC | Inkrementalsensor Reserve2 Karosseriestecker: Signal ungültig | 0 | - |
| 0x2300C0 | Positionssensor Reserve1 Karosseriestecker: Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300C1 | Positionssensor Reserve1 Karosseriestecker: Signal ungültig | 0 | - |
| 0x2300C2 | Positionssensor Reserve2 Karosseriestecker: Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300C3 | Positionssensor Reserve2 Karosseriestecker: Signal ungültig | 0 | - |
| 0x2300C4 | Positionssensor Reserve1 Verdeckstecker: Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300C5 | Positionssensor Reserve1 Verdeckstecker: Signal ungültig | 0 | - |
| 0x2300C6 | Positionssensor Reserve2 Verdeckstecker: Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300C7 | Positionssensor Reserve2 Verdeckstecker: Signal ungültig | 0 | - |
| 0x2300E1 | Verdeckklappenantrieb links: kein Flankenwechsel am Inkrementalsensor | 0 | - |
| 0x2300E2 | Verdeckklappenantrieb rechts: kein Flankenwechsel am Inkrementalsensor | 0 | - |
| 0x2300FA | Heckscheibenantrieb Richtungssensor: Unterbrechung oder Kurzschluss | 0 | - |
| 0x2300FB | Heckscheibenantrieb Richtungssensor: Signal ungültig | 0 | - |
| 0x230105 | Ausfall Botschaft STAT_ZV_KLAPPEN | 1 | - |
| 0x23013F | Verdeckstecker nicht gesteckt | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4600 | Aussentemperatur | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4601 | Datum_Tag | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4602 | Datum_Monat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4603 | Datum_Jahr | - | Low | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4604 | Spannung_Kl30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4605 | Bedienquelle | 0-n | High | 0xFF | TAB_CV_BEDIENANFORDERUNG | - | - | - |
| 0x4608 | Sensoren | 0-n | High | 0xFFFF | TAB_SENSOREN_FF | - | - | - |
| 0x460C | Spannung_Kl30_R | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x460D | Spannung_Kl30_L | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_VERDECKKLAPPE_VERRIEGELT_LINKS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_SCHALTER_VERDECKKLAPPE_VERRIEGELT_RECHTS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_VERDECKKLAPPE_GESCHLOSSEN_LINKS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_VERDECKKLAPPE_GESCHLOSSEN_RECHTS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_SCHALTER_VERDECKKLAPPE_OFFEN_LINKS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_SCHALTER_VERDECKKLAPPE_OFFEN_RECHTS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_RESERVE1_KAROSSERIESTECKER | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_RESERVE2_KAROSSERIESTECKER | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_RESERVE1_VERDECKSTECKER | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_RESERVE2_VERDECKSTECKER | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | - |
| STAT_HALL_HECKSCHEIBE_UNTEN | 0-n | - | unsigned char | - | - | - | - | - | Position Inkrementalsensor rechter Verdeckantrieb |
| STAT_HECKSCHEIBE_POSITION_WERT | Inkremente | high | signed int | - | - | - | - | - | Position Faltdach |
| STAT_HECKSCHEIBE_OEFFNUNG_WERT | cm | - | signed char | - | - | 1 | 2 | 0 | Öffnungsweite Faltdach in Prozent |
| STAT_VERDECKKLAPPEANTRIEB_RICHTUNG | 0-n | - | unsigned char | - | TAB_CVM_VERDECKKLAPPENANTRIEB | - | - | - | Richtung Ansteuerung Verdeckantrieb |
| STAT_VERDECKKLAPPEANTRIEB_LINKS_PWM_WERT | % | - | unsigned char | - | - | - | - | - | PWM linker Verdeckantrieb |
| STAT_VERDECKKLAPPEANTRIEB_RECHTS_PWM_WERT | % | - | unsigned char | - | - | - | - | - | PWM rechter Verdeckantrieb |
| STAT_HECKSCHEIBENANTRIEB | 0-n | - | unsigned char | - | TAB_CV_ANSTEUERUNG_HECKSCHEIBE | - | - | - | Status Faltdachantrieb |
| STAT_TABELLENSTATUS_WERT | HEX | - | unsigned char | - | - | - | - | - | State Ablaufsteuerung |
| STAT_FREIGABELEITUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status der Freigabeleitung |

### RES_0X4020_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEN_K01_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K01 |
| STAT_SEN_V02_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V02 |
| STAT_SEN_V03_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V03 |
| STAT_SEN_V04_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V04 |
| STAT_SEN_K05_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K05 |
| STAT_SEN_V11_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V11 |
| STAT_SEN_K12_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K12 |
| STAT_SEN_V13_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V13 |
| STAT_SEN_K14_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K14 |
| STAT_SEN_K21_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K21 |
| STAT_SEN_V22_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V22 |
| STAT_SEN_V23_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V23 |
| STAT_SEN_K31_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K31 |
| STAT_SEN_K32_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor K32 |
| STAT_SEN_V35_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V35 |
| STAT_SEN_V36_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor V36 |
| STAT_U_KL30B_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung KL30B |
| STAT_U_KL30B_L_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung KL30B_L |
| STAT_U_KL30B_R_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung KL30B_R |
| STAT_U_VER_TMP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung HALL_V_TMP |
| STAT_U_VER_PER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung HALL_V_PER |
| STAT_U_VER_MOT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung HALL_V_MOT |
| STAT_U_VER_OPT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung HALL_V_OPT |
| STAT_U_GND_PERM_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Fusspunkt der Endlagensensoren |
| STAT_U_GND_MOT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Fusspunkt der Positions- und Motorsensoren |
| STAT_U_GND_S01_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am GND-Anschluss des Schalters S01 |
| STAT_U_LST_K01_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb K01 Anschluss 1 |
| STAT_U_LST_K01_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb K01 Anschluss 2 |
| STAT_U_I_K01_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Stromspiegel des Antrieb K01 |
| STAT_U_LST_V02_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb V02 Anschluss 1 |
| STAT_U_LST_V02_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb V02 Anschluss 2 |
| STAT_U_I_V02_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Stromspiegel des Antrieb V02 |
| STAT_U_LST_V03_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb V03 Anschluss 1 |
| STAT_U_LST_V03_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb V03 Anschluss 2 |
| STAT_U_I_V03_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Stromspiegel des Antrieb V03 |
| STAT_U_LST_K04_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb K04 Anschluss 1 |
| STAT_U_LST_K04_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Antrieb K04 Anschluss 2 |
| STAT_U_I_K04_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung am Stromspiegel des Antrieb K04 |
| STAT_TEMP01_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Temperatursensor Treiber 1 |
| STAT_TEMP02_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Temperatursensor Treiber2 |
| STAT_U_BEDIEN_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Eingangsspannung analoger Bedientaster |

### RES_0X4100_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWFL_WERT | HEX | high | unsigned int | - | - | - | - | - | SW-Version der Applikation |
| STAT_BTLD_WERT | HEX | high | unsigned int | - | - | - | - | - | SW-Version des Bootloaders |

### RES_0XA1A4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Status der zuletzt gestarteten Selbsttest-Routine |
| STAT_BAUGRUPPE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STEST_BAUGRUPPE_S | - | - | - | getestete Baugruppe |
| STAT_SELBSTTEST | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STEST_ERGEBNIS | - | - | - | Ergebnis des Selbsttests |

### RES_0XD2A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_GESTEUERTE_HECKSCHEIBE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: gesteuerte Heckscheibe nicht vorhanden 0x01: gesteuerte Heckscheibe vorhanden |
| STAT_VORHANDEN_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_BELADEHILFE_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_NAHBEREICHSERKENNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Nahbereichserkennung vorhanden 0x01: Nahbereichserkennung vorhanden |
| STAT_VORHANDEN_BELADEHILFSFUNKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Beladehilfsfunktion vorhanden 0x01:  Beladehilfsfunktion vorhanden |
| STAT_VORHANDEN_SHD | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Schiebedach nicht vorhanden 0x01: elektrisches Schiebedach vorhanden |
| STAT_VORHANDEN_ESH | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrischer Schiebehimmel nicht vorhanden 0x01: elektrischer Schiebehimmel vorhanden |
| STAT_VORHANDEN_WINDSCHOTT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Windschott nicht vorhanden 0x01: elektrisches Windschott vorhanden |

### RES_0XD2A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### RES_0XD3EA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KL30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert KL30 (Versorgung Logik) |
| STAT_VERSORGUNG_LOGIK_KL30 | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Logik-Versorgung KL30 (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SPANNUNG_KL30_R_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert KL30_R (Versorgung Lastkreis rechts) |
| STAT_VERSORGUNG_LAST_KL30_R | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Versorgung Lastkreis rechts KL30_R (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SPANNUNG_KL30_L_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert KL30_L (Versorgung Lastkreis links) |
| STAT_VERSORGUNG_LAST_KL30_L | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Versorgung Lastkreis links KL30_L (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_PERMANENT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_PERMANENT | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_TEMPORAER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_TEMPORAER | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_MOTOR_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_MOTOR | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_OPTIONAL_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_OPTIONAL | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_FUSSPUNKT_SENSOR_PERMANENT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sensorversorgung |
| STAT_FUSSPUNKT_SENSOR_TEMPORAER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sensorversorgung |
| STAT_SUPPLY_C_SCHALTER_ANALOG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |

### RES_0XD3EB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDECKKLAPPE_LINKS_HIGHSIDE1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Verdeckklappenantrieb links Highside1 (0 = AUS; 1 = EIN) |
| STAT_VERDECKKLAPPE_LINKS_LOWSIDE1_ANSTEUERUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Ansteuerung Verdeckklappenantrieb links Lowside1 |
| STAT_VERDECKKLAPPE_LINKS1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Eingangsspannung Verdeckklappenantrieb links 1 (Klemmenspannung des Motors) |
| STAT_VERDECKKLAPPE_LINKS_HIGHSIDE2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Verdeckklappenantrieb links Highside2 (0 = AUS; 1 = EIN) |
| STAT_VERDECKKLAPPE_LINKS_LOWSIDE2_ANSTEUERUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Ansteuerung Verdeckklappenantrieb links Lowside2 |
| STAT_VERDECKKLAPPE_LINKS2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Eingangsspannung Verdeckklappenantrieb links 2 (Klemmenspannung des Motors) |
| STAT_VERDECKKLAPPE_RECHTS_HIGHSIDE1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Verdeckklappenantrieb rechts Highside1 (0 = AUS; 1 = EIN) |
| STAT_VERDECKKLAPPE_RECHTS_LOWSIDE1_ANSTEUERUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Ansteuerung Verdeckklappenantrieb rechts Lowside1 |
| STAT_VERDECKKLAPPE_RECHTS1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Eingangsspannung Verdeckklappenantrieb rechts 1 (Klemmenspannung des Motors) |
| STAT_VERDECKKLAPPE_RECHTS_HIGHSIDE2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Verdeckklappenantrieb rechts Highside2 (0 = AUS; 1 = EIN) |
| STAT_VERDECKKLAPPE_RECHTS_LOWSIDE2_ANSTEUERUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Ansteuerung Verdeckklappenantrieb rechts Lowside2 |
| STAT_VERDECKKLAPPE_RECHTS2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Eingangsspannung Verdeckklappenantrieb rechts 2 (Klemmenspannung des Motors) |
| STAT_RELAIS_HSM1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais 1 für Heckscheibenantrieb (0 = AUS / 1 = EIN) |
| STAT_RELAIS_HSM1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais 1 für Heckscheibenantrieb (Klemmenspannung des Motors) |
| STAT_RELAIS_HSM2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais 2 für Heckscheibenantrieb (0 = AUS / 1 = EIN) |
| STAT_RELAIS_HSM2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais 2 für Heckscheibenantrieb (Klemmenspannung des Motors) |
| STAT_RELAIS_RES_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RELAIS_RES_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_MOTOR_HECKSCHEIBE | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_HECKSCHEIBE | - | - | - | Status Heckscheibenantrieb (siehe TAB) |

### RES_0XD3EC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_VKL_VERRIEGELT_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_OFFEN_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_GESCHLOSSEN_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_VERRIEGELT_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_OFFEN_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_GESCHLOSSEN_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve - Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_INK_RESERVE_LINKS_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Reserve - Anzahl der Inkremente |
| STAT_SENSOR_RESERVE_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve - Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_INK_RESERVE_RECHTS_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Reserve - Anzahl der Inkremente |
| STAT_SENSOR_HECKSCHEIBE_UNTEN | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_INK_HECKSCHEIBENANTRIEB | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_INK_POSITION_HECKSCHEIBE_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Inkremente |
| STAT_SENSOR_RESERVE1 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve - Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_INK_RESERVE1_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Reserve - Anzahl der Inkremente |
| STAT_SENSOR_RESERVE2 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve - Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE3 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve - Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE4 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve - Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |

### RES_0XD7A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKSCHEIBE | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_HECKSCHEIBE | - | - | - | Taster für die Heckschebe (siehe Tabelle) |
| STAT_TASTER_RESERVE | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_HECKSCHEIBE | - | - | - | Reserve-Ergebnis |

### RES_0XD7A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POS_HECKSCHEIBE | 0-n | high | unsigned char | - | TAB_CV_POSITION_HECKSCHEIBE | - | - | - | Position der Heckscheibe (siehe Tabelle) |
| STAT_INK_POS_HECKSCHEIBE_WERT | Inkremente | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Zählerstand Hallinkremente für Position Heckscheibe |
| STAT_SENSOR_HECKSCHEIBE_UNTEN | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand Sensor Heckscheibe unten (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Reserve |

### RES_0XD809_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION | 0-n | high | unsigned char | - | TAB_CV_STAT_POS_VERDECKKLAPPE | - | - | - | aktuelle Position der Verdeckklappe |
| STAT_RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_STAT_VERDECKKLAPPENANTRIEBE | - | - | - | Bewegungsrichtung der Verdeckklappe |
| STAT_PWM_LINKS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Verdeckklappenantrieb links |
| STAT_PWM_RECHTS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Verdeckklappenantrieb rechts |

### RES_0XD849_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_VERDECKKLAPPENANTRIEBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerstand Wiederholsperre Verdeckklappenantriebe |
| STAT_SPERRE_VERDECKKLAPPENANTRIEBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Verdeckklappenantriebe |
| STAT_FREIGABE_VERDECKKLAPPENANTRIEBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Verdeckklappenantriebe |
| STAT_ZAEHLER_HECKSCHEIBENANTRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerstand Wiederholsperre Heckscheibenantrieb |
| STAT_SPERRE_HECKSCHEIBENANTRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Heckscheibenantrieb |
| STAT_FREIGABE_HECKSCHEIBENANTRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Heckscheibenantrieb |
| STAT_ZAEHLER_RESERVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_SPERRE_RESERVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_FREIGABE_RESERVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |
| STAT_SPERRE_MOTORTREIBER | 0-n | high | unsigned char | - | TAB_CV_PUMPE_TEMPERATUR | - | - | - | Status Sperre der Verdeckklappenantriebe wegen Platinentemperatur Motortreiber |
| STAT_SPANNUNG_SENSOR_LINKS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert des Temperatursensors (NTC) für Verdeckklappenantrieb links |
| STAT_SPANNUNG_SENSOR_RECHTS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert des Temperatursensors (NTC) für Verdeckklappenantrieb rechts |
| STAT_SPANNUNG_GRENZWERT_PREALARM_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Grenzwert für Prealarm-Zustand |
| STAT_SPANNUNG_GRENZWERT_ALARM_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Grenzwert für Alarm-Zustand |

### RES_0XDDDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über BUS |
| STAT_TEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Außentemperatur über BUS |
| STAT_HECKKLAPPE | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_HECKKLAPPE | 1.0 | 1.0 | 0.0 | Zustand Heckklappe Interpretation siehe Tabelle |
| STAT_FENSTER_FAT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_FATH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFTH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_POS_FENSTER_FAT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_FATH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFTH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_KOMFORT_FUNKTION | 0-n | high | unsigned char | - | TAB_CVM_KOMFORT_FUNKTION | 1.0 | 1.0 | 0.0 | Status Komfort Funktion Interpretation siehe Tabelle |
| STAT_MSA | 0-n | high | unsigned char | - | TAB_CVM_STAT_MSA | 1.0 | 1.0 | 0.0 | Status Motor Start Automatik |
| STAT_KLEMMEN | 0-n | high | unsigned char | - | TAB_CVM_KLEMMEN_STATUS | 1.0 | 1.0 | 0.0 | Status Zustand Klemmen Interpretation siehe Tabelle |
| STAT_VERBRAUCHERSTEUERUNG | 0-n | high | unsigned char | - | TAB_VERBRAUCHERSTEUERUNG | 1.0 | 1.0 | 0.0 | Status Verbrauchersteuerung Interpretation siehe Tabelle |
| STAT_FREIGABE_VERDECK | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | 1.0 | 1.0 | 0.0 | Status Freigabe Verdeck Interpretation siehe Tabelle |
| STAT_FREIGABE_FENSTER | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | 1.0 | 1.0 | 0.0 | Status Freigabe Fenster Interpretation siehe Tabelle |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Kilometerstand |
| STAT_RELATIVZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Relativzeit Fahrzeug |
| STAT_ZENTRALVERRIEGELUNG | 0-n | high | unsigned char | - | TAB_STAT_ZENTRALVERRIEGELUNG | - | - | - | Status Zentralverriegelung Fahrzeug Interpretation siehe Tabelle |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CV_STEUERN_TASTEN | 0xA1A4 | - | Verdeckansteuerung durch Simulation Tastenbedienung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A4_R | RES_0xA1A4_R |
| CV_STEUERN_BAUGRUPPE | 0xA1A6 | - | Baugruppe ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A6_R | RES_0xA1A6_R |
| CV_SELBSTTEST | 0xA1A7 | - | Selbsttestroutine Cabrioverdeck | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A7_R | RES_0xA1A7_R |
| CV_AUSSTATTUNG | 0xD2A0 | - | Cabrioverdeck Ausstattung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A0_D |
| CV_FREIGABE | 0xD2A5 | - | Cabrioverdeck Freigabe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A5_D | RES_0xD2A5_D |
| CV_SG_VERSORGUNG | 0xD3EA | - | Spannungsversorgung Cabrio-SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EA_D |
| CV_AKTORIK | 0xD3EB | - | Status Aktorik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EB_D |
| CV_SENSORIK | 0xD3EC | - | Cabrioverdeck Sensorik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EC_D |
| CV_TASTER_HECKSCHEIBE | 0xD7A0 | - | Heckscheibentaster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7A0_D |
| CV_HECKSCHEIBE | 0xD7A1 | - | Heckscheibenantrieb | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7A1_D | RES_0xD7A1_D |
| CV_EL_VERDECKKLAPPENANTRIEB | 0xD809 | - | Verdeckklappenantriebe elektrisch | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD809_D |
| CV_WIEDERHOLSPERREN_S | 0xD849 | - | Wiederholsperren im CVM-Slave | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD849_D |
| CV_BUS_IN_DATEN | 0xDDDF | - | Status Fahrzeug und Bordnetz | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDDF_D |
| CV_FREIGABELEITUNG | 0xDE4E | STAT_FREIGABE | Status der Freigabe | 0-n | - | high | unsigned char | TAB_CV_STAT_FREIGABE | - | - | - | - | 22 | - | - |
| _STATUS_INTERN | 0x4000 | - | Status Aktorik, Sensorik, Tabellensteuerung | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4000_D |
| _ROHDATEN | 0x4020 | - | Auslesen der AD-Wandler Rohwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4020_D |
| _CV_STEUERN_VERDECKKLAPPENANTRIEBE | 0x4053 | - | Verdeckklappenantriebe elektrisch | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4053_D | - |
| _CV_READ_HELBAKO_VERSION | 0x4100 | - | Auslesen der Helbako internen SW-Versionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100_D |
| _CV_OUTPUT | 0x4210 | - | Alle Ausgänge ansteuern | - | - | - | - | - | - | - | - | 0x24 | 2E | ARG_0x4210 | - |

### TAB_CVM_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht freigegeben |
| 0x01 | Freigegeben |
| 0xFF | Signal ungültig |

### TAB_CVM_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F Änderung |
| 0x04 | KL30F EIN |
| 0x05 | KL30B Änderung |
| 0x06 | KL30B EIN |
| 0x07 | KLR Änderung |
| 0x08 | KLR EIN |
| 0x09 | KL15 Änderung |
| 0x0A | KL15 EIN |
| 0x0B | KL50 Verzögerung |
| 0x0C | KL50 Änderung |
| 0x0D | KL50 EIN |
| 0x0E | Fehler |
| 0xFF | Signal ungültig |

### TAB_CVM_KOMFORT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Komfortöffnen |
| 0x02 | Komfortschließen |
| 0x05 | Komfortöffnen Schließzylinder |
| 0x06 | Komfortschließen Schließzylinder |
| 0x09 | Komfortöffnen Funkschlüssel |
| 0x0A | Komfortschließen Funkschlüssel |
| 0x0D | Komfortöffnen ID-Geber im Nahbereich |
| 0x0E | Komfortschließen ID-Geber im Nahbereich |
| 0x0B | Beladeposition anfahren |
| 0x08 | Beladeposition ablegen |
| 0xFF | Signal ungültig |

### TAB_CVM_MOTOR_HECKSCHEIBE

| WERT | TEXT |
| --- | --- |
| 0x00 | Heckscheibenantrieb steht |
| 0x01 | Heckscheibe fährt nach unten |
| 0x02 | Heckscheibe fährt nach oben |
| 0xFF | Wert ungültig |

### TAB_CVM_STAT_MSA

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbrennungsmotor steht durch Fahrerwunsch |
| 0x08 | Verbrennungsmotor steht durch MSA-Anforderung |
| 0x04 | Startankündigung des Verbrennungsmotors durch Fahrerwunschq |
| 0x0C | Startankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x01 | Verbrennungsmotor startet durch Fahrerwunsch |
| 0x05 | Verbrennungsmotor startet durch MSA-Anforderung |
| 0x02 | Verbrennungsmotor läuft |
| 0x06 | Stopankündigung des Verbrennungsmotors durch Fahrerwunsch |
| 0x0E | Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x12 | Verbrennungsmotor im Auslauf durch Fahrerwunsch |
| 0x19 | Verbrennungsmotor im Auslauf durch MSA-Anforderung |
| 0x1E | Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung |
| 0xFF | Signal ungültig |

### TAB_CVM_VERDECKKLAPPENANTRIEB

| WERT | TEXT |
| --- | --- |
| 0x00 | Antrieb steht |
| 0x01 | Antrieb öffnet Verdeckklappe |
| 0x02 | Antrieb schließt Verdeckklappe |
| 0x04 | Antrieb Haltefunktion |
| 0xff | Signal ungueltig |

### TAB_CVM_ZUSTAENDE_FENSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Geoeffnet |
| 0xFF | Ungueltig |

### TAB_CVM_ZUSTAENDE_HECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Geöffnet |
| 0xFF | Ungültig |

### TAB_CV_ANSTEUERRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### TAB_CV_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Diagnose |

### TAB_CV_ANSTEUERUNG_HECKSCHEIBE

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | NACH_UNTEN |
| 0x02 | NACH_OBEN |

### TAB_CV_ANST_BAUGRUPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x33 | Verriegelung öffnen |
| 0x55 | Verriegelung schließen |
| 0xAA | Verdeckklappe schließen |
| 0xCC | Verdeckklappe öffnen |
| 0xFF | Ansteuerung ungültig |

### TAB_CV_BEDIENANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bedienanforderung |
| 0x01 | Bedientaster Öffnen |
| 0x02 | Bedientaster Schließen |
| 0x05 | Komfortöffnen Türschloss |
| 0x06 | Komfortschließen Türschloss |
| 0x09 | Komfortöffnen ID-Geber |
| 0x0A | Komfortschließen ID-Geber |
| 0x11 | Komforöffnen Funkschlüssel |
| 0x12 | Komfortschließen Funkschlüssel |
| 0xFF | Bedienanforderung ungültig |

### TAB_CV_BEDIENTASTER_HECKSCHEIBE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | betätigt in Richtung nach unten |
| 0x02 | betätigt in Richtung nach oben |
| 0xFF | Wert ungültig |

### TAB_CV_ELEMENT

| WERT | TEXT |
| --- | --- |
| 0x01 | Verdeck |
| 0x02 | Beladehilfe |
| 0x03 | Heckscheibe |

### TAB_CV_POSITION_HECKSCHEIBE

| WERT | TEXT |
| --- | --- |
| 0x00 | Heckscheibe komplett oben |
| 0x01 | Heckscheibe in Zwischenstellung |
| 0x02 | Heckscheibe komplett unten |
| 0x03 | Heckscheibe nicht initialisiert |
| 0x04 | Blockfahrt |
| 0xFF | Wert ungültig |

### TAB_CV_PUMPE_TEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Einschränkung |
| 0x01 | eingeschränkte Dachbewegung erlaubt |
| 0x02 | Dachbewegung gesperrt |
| 0xFF | Signal ungültig |

### TAB_CV_SENSORIK_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor inaktiv |
| 0x01 | Sensor aktiv |
| 0x02 | Sensorsignal ungültig |
| 0x03 | Kurzschluss nach KL31 |
| 0x04 | Weicher Kurzschluss nach KL30 |
| 0x05 | Harter Kurzschluss nach KL30 |
| 0x06 | Versorgungsspannung ist abgeschaltet oder fehlerhaft |
| 0x07 | Sensor auscodiert oder noch nicht vorhanden |

### TAB_CV_STAT_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Freigabe momentan nicht erteilt |
| 0x01 | Freigabe momentan erteilt |
| 0x02 | Fehler an der Freigabeleitung erkannt |
| 0xFF | Signal ungültig |

### TAB_CV_STAT_POS_VERDECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Verdeckklappe geschlossen und verriegelt |
| 0x01 | Verdeckklappe geschlossen und nicht verriegelt |
| 0x02 | Verdeckklappe in Zwischenstellung |
| 0x03 | Verdeckklappe geöffnet |
| 0xFF | Wert ungültig |

### TAB_CV_STAT_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angekommen, Verfahren noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültig |

### TAB_CV_STAT_SPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Spannung ausgeschaltet |
| 0x01 | Normalspannung |
| 0x02 | Unterspannung |
| 0x03 | Überspannung |
| 0x04 | Spannung fehlerhaft |
| 0x05 | Spannung abgeschaltet, wegen Fehler |
| 0x06 | Spannungsfilter Neustart |
| 0x07 | Positive Flanke an Spannung |
| 0x0F | Initialisierung |
| 0xFF | ungültig |

### TAB_CV_STAT_VERDECKKLAPPENANTRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | Verdeckklappenantriebe stehen |
| 0x01 | Verdeckklappe wird geöffnet |
| 0x02 | Verdeckklappe wird geschlossen |
| 0x04 | Verdeckklappe wird gehalten |
| 0xFF | Wert ungültig |

### TAB_CV_STEST_BAUGRUPPE_S

| WERT | TEXT |
| --- | --- |
| 0x01 | Verdeckklappenantriebe |
| 0x02 | Heckscheibenantrieb |
| 0xFF | keine Baugruppe |

### TAB_CV_STEST_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler  |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Kurzschluss nach Plus |
| 0x03 | Leitungsunterbrechung |
| 0x04 | keine Inkremente vom Hallsensor erkannt |
| 0x05 | Antrieb links: Kurzschluss nach Masse |
| 0x06 | Antrieb links: Kurzschluss nach Plus |
| 0x07 | Antrieb links: Leitungsunterbrechung |
| 0x08 | Antrieb links: keine Inkremente vom Hallsensor erkannt |
| 0x09 | Antrieb rechts: Kurzschluss nach Masse |
| 0x0A | Antrieb rechts: Kurzschluss nach Plus |
| 0x0B | Antrieb rechts: Leitungsunterbrechung |
| 0x0C | Antrieb rechts: keine Inkremente vom Hallsensor erkannt |
| 0xFF | ungültiger Wert |

### TAB_CV_VERDECKANTRIEB_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | OEFFNEN |
| 0x02 | SCHLIESSEN |
| 0x03 | PWM_WECHSEL |

### TAB_CV_VERDECKANTRIEB_WAHL

| WERT | TEXT |
| --- | --- |
| 0x01 | LINKS |
| 0x02 | RECHTS |
| 0x03 | BEIDE_ANTRIEBE |

### TAB_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais auf Ubatt |
| 0x01 | Relais auf Masse |

### TAB_SENSOREN_FF

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Sensor |
| 0x0001 | Verdeck aufgestellt rechts |
| 0x0002 | Verdeck abgelegt rechts |
| 0x0004 | Verdeckverschluss geschlossen |
| 0x0008 | Verdeckverschluss geöffnet |
| 0x0010 | Verdeck verriegelt links |
| 0x0020 | Verdeck verriegelt rechts |
| 0x0030 | Verdeck verriegelt links und rechts |
| 0x0040 | Verdeckklappe verriegelt links |
| 0x0080 | Verdeckklappe verriegelt  rechts |
| 0x00C0 | Verdeckklappe verriegelt links und rechts |
| 0x0100 | Verdeckklappe geöffnet links |
| 0x0200 | Verdeckklappe geöffnet rechts |
| 0x0300 | Verdeckklappe geöffnet links und rechts |
| 0x0400 | Verdeckklappe geschlossen links |
| 0x0800 | Verdeckklappe geschlossen rechts |
| 0x0C00 | Verdeckklappe geschlossen links und rechts |
| 0x1000 | Heckscheibe unten |
| 0x2000 | Heckscheibe oben (Inkrmentalposition) |
| 0xFFFF | Wert  ungültig |

### TAB_STAT_ZENTRALVERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status empfangen |
| 0x01 | Mindestens eine Tür entriegelt |
| 0x02 | Mindestens eine Tür verriegelt |
| 0x03 | Mindestens eine Tür entriegelt / mind eine Tür verriegelt |
| 0x04 | interner ZV-Master gesichert |
| 0x05 | interner ZV-Master gesichert |
| 0x06 | interner ZV-Master gesichert |
| 0x07 | interner ZV-Master gesichert |
| 0x0f | Signal ungültig |

### TAB_VERBRAUCHERSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Spezielle Standverbraucher dürfen sich einschalten |
| 0x02 | Standverbraucher müssen sich abschalten |
| 0xFF | Signal ungültig |
