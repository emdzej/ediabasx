# aag_f15.prg

## General

|  |  |
| --- | --- |
| File | aag_f15.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 66 |
| Origin | BMW EK-522 Tobias_Amon |
| Revision | 10.000 |
| Author | BERTRANDT-INGENIEURBUERO-GMBH EK-522 Behl |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Anhänger-Anschluss-Gerät 71 0F1CB0 |  |  |
| ORIGIN | string | BMW EK-522 Tobias_Amon |  |  |
| REVISION | string | 10.000 |  |  |
| AUTHOR | string | BERTRANDT-INGENIEURBUERO-GMBH EK-522 Behl |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.984 |  |  |
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
| 0x0000C7 | RSG Elotech Elektronische Baugruppen GmbH |
| 0x0000C8 | KEBODA TECHNOLOGY CORP |
| 0x0000C9 | Aptiv |
| 0x0000CA | SEG Automotive Germany GmbH |
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
| 0x44 | ECURSU | ECURsuSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0x61 | ECUSUPSPEC | ECUSupplierSpecificSession |
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

### ARG_0XAA60_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS_INIT | + | - | 0-n | high | unsigned char | - | TAB_MODUS_INIT | 1.0 | 1.0 | 0.0 | - | - | Auswahl Modus |

### ARG_0XAA61_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_AHV_MOTOR_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | Steuert den Motor der AHV an. Siehe Tabelle TAB_AHV_MOTOR_VERFAHREN |

### ARG_0XD5F1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_AUSSEN_LICHT_HINTEN | 1.0 | 1.0 | 0.0 | - | - | Steuert das Anhängemodul an. |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Ansteuerzeit in Sekunden |

### ARG_0XD5F2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_AUSSEN_LICHT_HINTEN | - | - | - | - | - | Steuert das Anhängemodul an. Siehe Tabelle TAB_AUSSEN_LICHT_HINTEN |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Angabe der Zeit in Sekunden |

### ARG_0XD5FE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FARBE | 0-n | - | unsigned char | - | TAB_AHM_LED | 1.0 | 1.0 | 0.0 | - | - | Steuert die LED mit der Farbe in Dauerlicht an; 0 = Ansteuerung aus (LED aus) 1 = Ansteuerung Grün 2 = Ansteuerung Rot |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Ansteuerzeit in Sekunden |

### ARG_0XD6BE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARGUMENT_TRAI_MANUAL | 0-n | high | unsigned char | - | TAB_TRAI_MANUAL | - | - | - | - | - | Manuellen Anhaengerbetrieb aktivieren / deaktivieren |

### ARG_0XDAF3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND | 0-n | high | unsigned char | - | TAB_LADE_RELAIS_STEUERN | - | - | - | - | - | Steuert das Lade- Relais 15G mit dem Zustand an; 1 = Relais deaktivieren, 2 = Relais aktivieren, 15 = Diagnose- Ansteuerung beenden |

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
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x027100 | Energiesparmode aktiv | 0 | - |
| 0x027108 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x027109 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02710A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02710B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02710C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02710D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF71 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x802800 | Bremslicht Anhänger: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802801 | Blinklicht Anhänger links: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802802 | Blinklicht Anhänger rechts: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802803 | Schlusslicht Anhänger links: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802804 | Schlusslicht Anhänger rechts: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802805 | Rückfahrlicht Anhänger: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802806 | Nebelschlusslicht Anhänger: Überlast oder Kurzschluss nach Masse | 0 | - |
| 0x802807 | Bremslicht Anhänger: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x802808 | Blinklicht Anhänger links: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x802809 | Blinklicht Anhänger rechts: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x80280A | Schlusslicht Anhänger links: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x80280B | Schlusslicht Anhänger rechts: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x80280C | Rückfahrlicht Anhänger: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x80280D | Nebelschlusslicht Anhänger: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x80280E | Stop / Turn Light Trailer Left: Überlast oder Kurzschluss  nach Masse | 0 | - |
| 0x80280F | Stop / Turn Light Trailer Right: Überlast oder Kurzschluss  nach Masse | 0 | - |
| 0x802810 | Tail And License Lights Trailer: Überlast oder Kurzschluss  nach Masse | 0 | - |
| 0x802811 | Reversing Light Trailer: Überlast oder Kurzschluss  nach Masse | 0 | - |
| 0x802812 | Stop / Turn Light Trailer Left: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x802813 | Stop / Turn Light Trailer Right: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x802814 | Tail And License Lights Trailer: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x802815 | Reversing Light Trailer: Leuchte defekt oder Leitungsunterbrechung | 0 | - |
| 0x80281E | Hardwaresignal Bremslicht: Leitungsunterbrechung oder Kurzschluss nach Masse | 0 | - |
| 0x80281F | Hardwaresignal Bremslicht: Leitungsfehler mit Kontakt nach Bordspannung | 0 | - |
| 0x802820 | Hardwaresignal Blinklicht: Leitungsunterbrechung oder Kurzschluss nach Masse | 0 | - |
| 0x802821 | Hardwaresignal Blinklicht: Leitungsfehler mit Kontakt nach Bordspannung | 0 | - |
| 0x80282B | AHV-Motor: Kurzschluss nach Plus | 0 | - |
| 0x80282C | AHV-Motor: Überstromabschaltung | 0 | - |
| 0x80282E | Anhängervorrichtung: Nachspannen fehlgeschlagen | 0 | - |
| 0x80282F | Anhängervorrichtung: Lösen fehlgeschlagen | 0 | - |
| 0x802830 | Anhängervorrichtung: Nicht initialisiert | 0 | - |
| 0x802831 | Mikroschalter-Steckdose: Defekt oder Leitungsfehler ggf. mit Kontakt zu Bordspannung | 0 | - |
| 0x802832 | Anhängervorrichtung: Zwischenposition erkannt | 0 | - |
| 0x802836 | AHV-Taster: Defekt oder Leitungsfehler mit Kurzschluß nach Minus | 0 | - |
| 0x802839 | Allgemein Stecker D nicht gesteckt | 0 | - |
| 0x80283A | Schalter Sperrbolzen 1 Kurzschluss nach Plus | 0 | - |
| 0x80283B | Not-Reversieren durch Sperrbolzen S2 aktiviert | 0 | - |
| 0x80283C | Schalter Sperrbolzen 1 Unplausibel | 0 | - |
| 0x80283D | Schalter Sperrbolzen 2 Kurzschluss nach Plus | 0 | - |
| 0x80283E | AHV - Verbauabsicherung fehlgeschlagen | 0 | - |
| 0x80283F | Schalter Sperrbolzen 2 Unplausibel | 0 | - |
| 0x802840 | Spannungsversorgung KL30f links fehlt/unterbrochen | 0 | - |
| 0x802841 | Spannungsversorgung KL30f rechts fehlt/unterbrochen | 0 | - |
| 0x802842 | Spannungsversorgung KL30b fehlt/unterbrochen | 0 | - |
| 0x802843 | Spannungsversorgung Lokale Überspannung KL30f rechts | 1 | - |
| 0x802844 | Spannungsversorgung Lokale Überspannung KL30b | 1 | - |
| 0x802845 | Spannungsversorgung Lokale Unterspannung KL30f links | 1 | - |
| 0x802846 | Spannungsversorgung Lokale Unterspannung KL30f rechts | 1 | - |
| 0x802847 | Spannungsversorgung Lokale Unterspannung KL30b | 1 | - |
| 0x802848 | Spannungsversorgung Globale Überspannung extern | 1 | - |
| 0x802849 | Spannungsversorgung Globale Überspannung intern | 1 | - |
| 0x80284A | Spannungsversorgung Globale Unterspannung extern | 1 | - |
| 0x80284B | Spannungsversorgung Globale Unterspannung intern | 1 | - |
| 0x80284C | Spannungsversorgung Lokale Überspannung KL30f links | 1 | - |
| 0x80284D | Motor Hallsensor Defekt | 0 | - |
| 0x80284E | Steuergerät intern Dataflash Defekt | 0 | - |
| 0x80284F | Steuergerät intern RAM/ROM defekt | 0 | - |
| 0x802850 | Steuergerät intern Watchdog | 0 | - |
| 0x802851 | AHV-Taster: Defekt oder Leitungsfehler mit Kurzschluß nach Plus | 0 | - |
| 0x802852 | AHV-Motor: Kurzschluss nach Minus oder Leitungsunterbrechung | 0 | - |
| 0x802857 | AHV-Taster - Wiederholschutz aktiv | 0 | - |
| 0x802858 | Allgemein Stecker A nicht gesteckt | 0 | - |
| 0x802859 | Ladeleitung: Spannungsversorgung fehlt/ unterbrochen | 0 | - |
| 0x80285A | Ladeleitung: Temperaturbedingte Abschaltung | 0 | - |
| 0x80285B | Ladeleitung: Lade-Relais defekt | 0 | - |
| 0x80285C | Ladeleitung: Gefahr der Rückspeisung | 0 | - |
| 0x80285D | Ladeleitung: Energiebedingte Abschaltung | 1 | - |
| 0xE54468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xE54BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xE5544E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 | - |
| 0xE55450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 | - |
| 0xE55451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 | - |
| 0xE55482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 | - |
| 0xE554AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 | - |
| 0xE554B0 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 | - |
| 0xE554B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 | - |
| 0xE554B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 | - |
| 0xE554BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 | - |
| 0xE554BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 | - |
| 0xE554F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 | - |
| 0xE554F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 | - |
| 0xE554F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 | - |
| 0xE554FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 | - |
| 0xE555BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 | - |
| 0xE555BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Checksumme | 1 | - |
| 0xE555BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Alive | 1 | - |
| 0xE555C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 | - |
| 0xE5560C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 | - |
| 0xE5565E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 | - |
| 0xE556AC | Botschaftsfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Timeout | 1 | - |
| 0xE556B0 | Signalfehler (Nachlaufzeit Stromversorgung, ID: FLLUPT_GPWSUP) Sender: CAS, FEM - Ungültig | 1 | - |
| 0xE55744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 | - |
| 0xE557E4 | Botschaftsfehler (Lampenzustand, ID: LAMPENZUSTAND) - Timeout | 1 | - |
| 0xE557E8 | Signalfehler (Lampenzustand, ID: LAMPENZUSTAND) - Ungültig | 1 | - |
| 0xE55858 | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Undefiniert | 1 | - |
| 0xE5594C | Signalfehler (Status Bordnetz Verbraucher Steuerung, ID: ST_BN_COS_CTR) Ungültig | 1 | - |
| 0xE55966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 | - |
| 0xE559AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 | - |
| 0xE559B5 | Botschaftsfehler (Status Bordnetz Verbraucher Steuerung, ID: ST_BN_COS_CTR) Timeout | 1 | - |
| 0xE559CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 | - |
| 0xE55A38 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Undefiniert | 1 | - |
| 0xE55CB9 | Botschaftsfehler (Spannung Bordnetz, ID: U_BN) Timeout | 1 | - |
| 0xE55F1B | Signalfehler (Spannung Bordnetz, ID: U_BN) Ungültig | 1 | - |
| 0xE56C0A | Signalfehler (Blinken, ID: BLINKEN) - Undefiniert | 1 | - |
| 0xE56D08 | Botschaftsfehler (Blinkrichtung, ID:FLSDIR ) - Timeout | 1 | - |
| 0xE56D09 | Botschaftsfehler (Blinkrichtung, ID:FLSDIR ) - Checksumme | 1 | - |
| 0xE56D0A | Botschaftsfehler (Blinkrichtung, ID:FLSDIR ) - Alive | 1 | - |
| 0xE56D0B | Signalfehler (Blinkrichtung, ID:FLSDIR ) - Ungültig | 1 | - |
| 0xE56D3F | Botschaftsfehler (Status Zentralverriegelung Tür Schluss, ID: ST_CLSY_DO_LA) - Timeout | 1 | - |
| 0xE56D42 | Signalfehler (Status Zentralverriegelung Tür Schluss, ID: ST_CLSY_DO_LA) - Ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Reset durch Kupplungsfunktion | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Reset durch Bremslichtfunktion | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Reset durch Schlusslichtfunktion | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Reset durch Blinklichtfunktion | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Sicherheitsfunktionsüberwachung der Kupplung | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Funktionale Sicherheit SG Integrität | 0/1 | High | 0x01 | - | - | - | - |
| 0x0007 | Funktionale Sicherheit globaler Fehler | 0/1 | High | 0x02 | - | - | - | - |
| 0x0008 | Funktionale Sicherheit allgemeiner sicherer Zustand | 0/1 | High | 0x04 | - | - | - | - |
| 0x4000 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4001 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4002 | Eingangsspannung_SET | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4003 | Ausgangsspannung_SET | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4004 | Temperatur | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4005 | fEPM | 0-n | High | 0xFF | TAB_FEPM_STATUS | - | - | - |
| 0x4006 | Anhängerstatus | 0-n | High | 0xFF | TAB_ANHAENGER_STATUS | - | - | - |
| 0x4007 | Eingangsspannung_DETECT | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4008 | Ausgangsspannung_DETECT | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x400A | Messwert 30B | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x400B | Motorzustand | 0-n | High | 0xFF | - | - | - | - |
| 0x400C | Klemmenzustand | 0-n | High | 0xFF | - | - | - | - |
| 0x400D | Entwickler Debug Info | 0-n | High | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### INDEX_RAM_ROM_URSACHE

| WERT | TEXT |
| --- | --- |
| 01 | Funktionale Sicherheit SG Integrität |
| 02 | Funktionale Sicherheit globaler Fehler |
| 04 | Funktionale Sicherheit allgemeiner sicherer Zustand |

### INDEX_WD_URSACHEN2

| WERT | TEXT |
| --- | --- |
| 01 | Reset der Kupplungsfunktion |
| 02 | Reset durch Bremslichtfunktion |
| 04 | Reset durch Schlusslichtfunktion |
| 08 | Reset durch Blinklichtfunktion |
| 16 | Sicherheitsfunktionsüberwachung der Kupplung |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x802853 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0x802854 | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0x802855 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 | - |
| 0x802856 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XAA60_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | aktueller STATUS der Routine |

### RES_0XAA61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | aktueller STATUS der Routine |
| STAT_AHV_MOTOR_STROM_WERT | - | - | + | A | - | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Ausgabe des AHV-Motorstroms in Ampere; 0,2 bis 50,8 A |
| STAT_POSITION_AHV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_AHV_POSITIONEN | 1.0 | 1.0 | 0.0 | Position der AHV-Stellung; Siehe Tabelle TAB_AHV_POSITIONEN, nicht initialisiert liefert Zwischenposition zurück |

### RES_0XAA62_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_VERBAUABSICHERUNG | - | - | - | 0 - Routine nicht gestartet; 1 - Routine läuft;  2 - Kupplung nicht verbaut; 3 - Kupplung  verbaut |

### RES_0XD5EC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_AHV_EIN | 0-n | - | unsigned char | - | TAB_AHV_TASTER | 1.0 | 1.0 | 0.0 | Gibt den Status des Taster für die Anhängevorrichtung aus: 0 = Taste nicht gedrückt; 1 = Taste gedrückt; 2 = Tastersignal fehlerhaft |
| STAT_SCHALTER_AH_STECKDOSE_GESTECKT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status des Mikroschalters in der Anhängersteckdose aus dem AHV-SG aus: 0= Nicht gesteckt; 1 = Gesteckt. |

### RES_0XD5F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Schlusslicht rechts aus; 0 = AUS 1 = EIN |
| STAT_SL_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Schlusslicht links aus; 0 = AUS 1 = EIN |
| STAT_FRA_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Blinklicht rechts aus; 0 = AUS 1 = EIN |
| STAT_FRA_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Blinklicht links aus; 0 = AUS 1 = EIN |
| STAT_BRL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Bremslicht aus; 0 = AUS 1 = EIN |
| STAT_NSL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Nebelschlusslicht aus; 0 = AUS 1 = EIN |
| STAT_RFL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Rückfahrscheinwerfer aus;0 = AUS 1 = EIN |

### RES_0XD5F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAIL_LIGHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status vom Schlusslicht aus; 0 = AUS 1 = EIN |
| STAT_STOP_TURN_LIGHT_RIGHT_EIN | 0-n | - | unsigned char | - | TAB_AHM_DIGITAL | 1.0 | 1.0 | 0.0 | Liest den Status von Brems-/Blinklicht rechts aus Siehe Tabelle TAB_AHM_DIGITAL |
| STAT_STOP_TURN_LIGHT_LEFT_EIN | 0-n | - | unsigned char | - | TAB_AHM_DIGITAL | 1.0 | 1.0 | 0.0 | Liest den Status von Brems-/Blinklicht links aus; 0 = AUS 1 = EIN Siehe Tabelle TAB_AHM_DIGITAL |
| STAT_REVERSING_LIGHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status von Rückfahrscheinwerfer aus;0 = AUS 1 = EIN |

### RES_0XD5F5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IN_FRA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status des Blinklichteinganges vom Fahrzeug aus; 0 = AUS 1 = EIN |
| STAT_IN_BRL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest den Status des Bremslicht  vom Fahrzeug aus; 0 = AUS 1 = EIN |

### RES_0XD5F6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_SL_LI_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Schlusslicht links aus |
| STAT_STROM_NSL_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Nebelschlussleuchte aus |
| STAT_STROM_FRA_LI_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Blinker links aus |
| STAT_STROM_FRA_RE_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Blinker rechts aus |
| STAT_STROM_BRL_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Bremslicht aus |
| STAT_STROM_RFL_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Rückfahrlicht aus |
| STAT_STROM_SL_RE_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluß Schlusslicht rechts aus |

### RES_0XD5F7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_HK_OFFEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des über CAN gesendeten Heckklappenstatus; 0 = geschlossen 1 = offen |
| STAT_BUS_IN_KL_15_EIN | 0-n | - | unsigned char | - | TAB_KL_15 | - | - | - | Ausgabe des über CAN gesendeten Kl.15 Status;0 = Kl.15 aus 1 = Kl.15 ein |
| STAT_BUS_IN_HS_OFFEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des über CAN gesendeten Heckscheibenstatus (F07: kleine Heckklappe) mögliche Zustände: 0 = Geschlossen 1 = Offen |

### RES_0XD5F8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_GRUEN_AHV | 0-n | - | unsigned char | - | TAB_AHV_LED | 1.0 | 1.0 | 0.0 | Status LED grün |
| STAT_LED_ROT_AHV | 0-n | - | unsigned char | - | TAB_AHV_LED | 1.0 | 1.0 | 0.0 | Status LED rot |

### RES_0XD5F9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDANSCHLAGSENSOR_01_AHV | 0-n | - | unsigned char | - | TAB_AHV_ENDANSCHLAGSENSOR | 1.0 | 1.0 | 0.0 | Status Endanaschlagsensor 1 |
| STAT_ENDANSCHLAGSENSOR_02_AHV | 0-n | - | unsigned char | - | TAB_AHV_ENDANSCHLAGSENSOR | 1.0 | 1.0 | 0.0 | Status Endanaschlagsensor 2 |

### RES_0XD5FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_TAIL_LIGHT_PART1_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluss Tail And License Light Part 1 aus (AHM4: Lastkreis 1) |
| STAT_STROM_TAIL_LIGHT_PART2_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluss Tail And License Light Part 2 aus (AHM4: Lastkreis 2) |
| STAT_STROM_STOP_TURN_LIGHT_LEFT_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluss Stop Turn Light Left aus (AHM4: Lastkreis 3) |
| STAT_STROM_STOP_TURN_LIGHT_RIGHT_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluss Stop Turn Light Right aus (AHM4: Lastkreis 4) |
| STAT_STROM_REVERSING_LIGHT_WERT | A | - | unsigned char | - | - | 1.0 | 20.0 | 0.0 | Liest den Messwert Stromfluss Reversing Light aus (AHM4: Lastkreis 6) |

### RES_0XD6BE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRAI_MANUAL | 0-n | high | unsigned char | - | TAB_TRAI_MANUAL | - | - | - | Status manueller Anhaengerbetrieb |

### RES_0XDAF3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANSTEUERUNG_LADE_RELAIS | 0-n | high | unsigned char | - | TAB_LADE_RELAIS_STATUS | - | - | - | Status des Lade- Relais 15G |

### RES_0XDAF4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_LADE_RELAIS_IN_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannungen des Lade- Relais 15G Eingangsseitig (Auflösung 0.01V) |
| STAT_SPANNUNG_LADE_RELAIS_OUT_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannungen des Lade- Relais 15G Ausgangsseitig (Auflösung 0.01V) |
| STAT_TEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur des Lade- Relais |
| STAT_FEPM | 0/1 | high | unsigned char | - | - | - | - | - | Gibt den Status des fEPM Signals aus; 0 = keine fEPM-Freigabe, 1 = fEPM-Freigabe (fEPM - flexible Energy and Power Management) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AHV_INIT | 0xAA60 | - | Lernt Endanschläge für Anhängervorichtung. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA60_R | RES_0xAA60_R |
| AHV_MOTOR_ANSTEUERN | 0xAA61 | - | Ansteuerung AHV Motor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA61_R | RES_0xAA61_R |
| AHV_VERBAUABSICHERUNG | 0xAA62 | - | Test der Verkabelung zum Kupplungsmotor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA62_R |
| AHV_ANALOG_EINGANG | 0xD5EC | - | Gibt den Status der Taster und Kontakte zur Anhängevorrichtung aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5EC_D |
| AHM_VARIANTE | 0xD5F0 | STAT_AHM_VARIANTEN_NR | Gibt die Variante des codierten Anhängermoduls aus. | 0-n | - | - | unsigned char | TAB_AHM_VARIANTE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AHM_STEUERN_LAMPEN_FUNKTION_ECE | 0xD5F1 | - | Steuert das Anhängemodul an  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5F1_D | - |
| AHM_STEUERN_LAMPEN_FUNKTION_SAE | 0xD5F2 | - | Steuert das Anhängemodul an  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5F2_D | - |
| AHM_DIGITAL_ECE | 0xD5F3 | - | List den digitalen Status der Lampen ein. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F3_D |
| AHM_DIGITAL_SAE | 0xD5F4 | - | Liest den digitalen Status der Lampen ein. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F4_D |
| AHM_DIGITAL_INPUTS | 0xD5F5 | - | Liest den Status des Blinklicht- und Blinkereingangs des Fahrzeug aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F5_D |
| AHM_ANALOG_OUTPUT_ECE | 0xD5F6 | - | Ausgabe der analogen Stromwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F6_D |
| AHV_BUS_NACHRICHTEN | 0xD5F7 | - | Busnachrichten über Bus  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F7_D |
| AHV_LED_STATUS | 0xD5F8 | - | Status AHV-LED grün und rot | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F8_D |
| AHV_ENDANSCHLAGSENSOR | 0xD5F9 | - | Status Endanschlagsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5F9_D |
| AHV_POSITION_NR | 0xD5FB | STAT_POSITION_AHV_NR | Position der AHV-Stellung; Siehe Tabelle TAB_AHV_POSITIONEN | 0-n | - | - | unsigned char | TAB_AHV_POSITIONEN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AHV_LED | 0xD5FE | - | Steuert die LED mit der Farbe in Dauerlicht an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5FE_D | - |
| AHM_ANALOG_OUTPUT_SAE | 0xD5FF | - | Ausgabe der analogen Stromwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5FF_D |
| TRAI_MANUAL | 0xD6BE | - | Lesen bzw. Setzen Entfernen des Status manueller Anhängerbetrieb | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD6BE_D | RES_0xD6BE_D |
| LADE_RELAIS_ANSTEUERUNG | 0xDAF3 | - | Status und steuern Lade- Relais 15G | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAF3_D | RES_0xDAF3_D |
| STATUS_LADE_RELAIS | 0xDAF4 | - | Statusinformationen des Lade- Relais 15G | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAF4_D |

### TAB_AHM_DIGITAL

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | blinkt |
| 0x02 | EIN |

### TAB_AHM_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnosesteuerung beenden |
| 0x01 | Ansteuerung GRÜN |
| 0x02 | Ansteuerung ROT |

### TAB_AHM_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert |
| 0x01 | Nur Anhängerbeleuchtung |
| 0x02 | Anhängerbeleuchtung und teilelektrische Anhängervorrichtung |
| 0x03 | Anhängerbeleuchtung und vollelektrische Anhängervorrichtung |
| 0xFF | unbekannte Variante |

### TAB_AHV_ENDANSCHLAGSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Leitungsunterbrechung |
| 0x02 | Kurzschluss nach Plus |
| 0x03 | Kurzschluss nach Minus |
| 0x04 | Endanschlag erreicht |
| 0x05 | Endanschlag nicht erreicht |
| 0xFF | nicht definiert |

### TAB_AHV_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | LED aus |
| 0x01 | LED ein oder blinkt |
| 0x02 | LED defekt |
| 0xFF | undefiniert |

### TAB_AHV_MOTOR_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0 | keine Änderung |
| 1 | einschwenken |
| 2 | ausschwenken |

### TAB_AHV_POSITIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Arbeitsposition |
| 0x01 | Ruheposition |
| 0x02 | Zwischenposition |
| 0x03 | Arbeitsposition ohne Nachspannen |
| 0x04 | Anhängevorrichtung schwenkt ein |
| 0x05 | Anhängevorrichtung schwenkt aus |
| 0xFF | nicht definiert |

### TAB_AHV_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrueckt |
| 0x01 | gedrueckt |
| 0x02 | Tastersignal fehlerhaft |
| 0xFF | undefiniert |

### TAB_ANHAENGER_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Anhänger abgekoppelt |
| 1 | Anhänger angekoppelt |
| 3 | Status nicht verfügbar |
| 0xFF | Wert ungültig |

### TAB_AUSSEN_LICHT_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Bremslicht |
| 0x02 | Blinklicht rechts |
| 0x03 | Blinklicht links |
| 0x04 | Warnblinken |
| 0x05 | Schlusslicht |
| 0x06 | Rückfahrlicht |
| 0x07 | Parklicht rechts |
| 0x08 | Parklicht links |
| 0x09 | Nebelschlusslicht |

### TAB_FEPM_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | keine fEPM-Freigabe |
| 1 | fEPM-Freigabe |
| 0xFF | Wert ungültig |

### TAB_KL_15

| WERT | TEXT |
| --- | --- |
| 0x00 | KL.15 aus |
| 0x01 | KL.15 ein |
| 0xFF | KL. 15 Status unbekannt |

### TAB_LADE_RELAIS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais nicht codiert |
| 0x01 | Relais inaktiv |
| 0x02 | Relais aktiv |
| 0xFF | Wert ungültig |

### TAB_LADE_RELAIS_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x01 | Relais deaktivieren |
| 0x02 | Relais aktivieren |
| 0x0F | Diagnose-Ansteuerung beenden |

### TAB_MODUS_INIT

| WERT | TEXT |
| --- | --- |
| 0 | automatisch |
| 1 | einschwenken |
| 2 | ausschwenken |
| 3 | INIT löschen |

### TAB_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

### TAB_TRAI_MANUAL

| WERT | TEXT |
| --- | --- |
| 0x00 | kein manueller Anhängerbetrieb |
| 0x01 | manueller Anhängerbetrieb |
| 0xFF | Wert ungültig |

### TAB_VERBAUABSICHERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine nicht gestartet |
| 0x01 | Routine läuft |
| 0x02 | Kupplung nicht verbaut |
| 0x03 | Kupplung verbaut |

### TAB_WD_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x21 | FuSi Reset Kupplung |
| 0x1B | FuSi Reset Bremslicht |
| 0x1C | FuSi Reset Positionslicht |
| 0x1D | FuSi Reset Blinker |
| 0x1F | FuSi Kupplungsüberwachung |

### TAB_0X4000

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 |

### TAB_0X4001

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0006 | 0x0007 | 0x0008 |
