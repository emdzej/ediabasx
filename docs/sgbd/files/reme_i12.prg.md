# reme_i12.prg

## General

|  |  |
| --- | --- |
| File | reme_i12.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 41 |
| Origin | BMW EA-441 Bernd_Sternecker |
| Revision | 7.000 |
| Author | BMW UA-711 Tschernoster, BMW UA-711 Wierer, BMW TI-544 Bauer, V |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | RE EME |  |  |
| ORIGIN | string | BMW EA-441 Bernd_Sternecker |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | BMW UA-711 Tschernoster, BMW UA-711 Wierer, BMW TI-544 Bauer, V |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.60 |  |  |
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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

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

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME, EME20, AE, REME, EMET, EMEZ ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

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

### ARG_0XADF4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

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
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 4 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020A00 | Energiesparmode aktiv | 0 |
| 0x02FF0A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x21DD00 | Elektrische Maschine Rotorlagesensor, elektrisch: Signal abgeschnitten | 0 |
| 0x21DD01 | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Signal zu hoch | 0 |
| 0x21DD02 | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Signal zu niedrig | 0 |
| 0x21DD03 | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Amplitude nicht plausibel | 0 |
| 0x21DD04 | Elektrische Maschine Rotorlagesensor, elektrisch: Phasenlage nicht plausibel | 0 |
| 0x21DD05 | Elektrische Maschine Rotorlagesensor, elektrisch: Signalerfassung ausserhalb Toleranzbereich | 0 |
| 0x21DD06 | Elektrische Maschine Rotorlagesensor, elektrisch: Winkelgeschwindigkeit zu hoch | 0 |
| 0x21DD07 | Elektrische Maschine Rotorlagesensor, elektrisch: Konfiguration | 0 |
| 0x21DD0B | Elektrische Maschine Rotorlagesensor, elektrisch: Konfiguration nicht plausibel | 0 |
| 0x21DD0C | Elektrische Maschine Rotorlagesensor, elektrisch: Interne Überwachungsfunktion nicht plausibel | 0 |
| 0x21DD0D | Elektrische Maschine Rotorlagesensor, elektrisch: Messsignal Änderung zu hoch in Zeiteinheit | 0 |
| 0x21DD0E | Elektrische Maschine Rotorlagesensor, elektrisch: Messsignal keine Änderung | 0 |
| 0x21DD0F | Elektrische Maschine Rotorlagesensor, elektrisch: Messsignal nicht plausibel | 0 |
| 0x21DD10 | Elektrische Maschine Temperatursensor, elektrisch: Überschreitung Schwellenwert 1 | 0 |
| 0x21DD11 | Elektrische Maschine Temperatursensor, elektrisch: Überschreitung Schwellenwert 2 | 0 |
| 0x21DD13 | Signal (Anforderung_Drehmoment_Hochspannung_Start_Generator, 0x192): Wert ungültig | 1 |
| 0x21DD14 | Signal (Abgesichert_Bereitschaft_Fahren, 0x1D0): Wert ungültig | 1 |
| 0x21DD15 | Signal (IST_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion, 0x100): Wert ungültig | 1 |
| 0x21DD16 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x21DD17 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x21DD18 | Elektrische Maschine Rotorlagesensor, elektrisch: Cosinus-Leitung unterbrochen | 0 |
| 0x21DD19 | Elektrische Maschine Rotorlagesensor, elektrisch: Cosinus-Leitung Kurzschluss nach Batterie | 0 |
| 0x21DD1A | Elektrische Maschine Rotorlagesensor, elektrisch: Cosinus-Leitung Kurzschluss nach Masse | 0 |
| 0x21DD1B | Elektrische Maschine Rotorlagesensor, elektrisch: Erregerleitung unterbrochen | 0 |
| 0x21DD1C | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-Leitung unterbrochen | 0 |
| 0x21DD1D | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-Leitung Kurzschluss nach Batterie | 0 |
| 0x21DD1E | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-Leitung Kurzschluss nach Masse | 0 |
| 0x21DD1F | Ungültige Hardware Typteilenummer (HWEL) | 0 |
| 0x21DD20 | REME Traktionsnetz Spannung, elektrisch: zu hoch | 0 |
| 0x21DD21 | REME Traktionsnetz Spannung, elektrisch: Vergleichsfehler | 0 |
| 0x21DD30 | REME Phasenstrom Phase U, elektrisch: Vergleichsfehler | 0 |
| 0x21DD31 | REME Phasenstrom Phase U, elektrisch: Strom zu hoch | 0 |
| 0x21DD32 | REME Phasenstrom Phase U, elektrisch: Strom zu niedrig | 0 |
| 0x21DD33 | REME Phasenstrom Phase U, elektrisch: Abweichung Nulllage zu hoch | 0 |
| 0x21DD34 | REME Phasenstrom Phase V, elektrisch: Vergleichsfehler | 0 |
| 0x21DD35 | REME Phasenstrom Phase V, elektrisch: Strom zu hoch | 0 |
| 0x21DD36 | REME Phasenstrom Phase V, elektrisch: Strom zu niedrig | 0 |
| 0x21DD37 | REME Phasenstrom Phase V, elektrisch: Abweichung Nulllage zu hoch | 0 |
| 0x21DD38 | REME Phasenstrom Phase W, elektrisch: Vergleichsfehler | 0 |
| 0x21DD39 | REME Phasenstrom Phase W, elektrisch: Strom zu hoch | 0 |
| 0x21DD3A | REME Phasenstrom Phase W, elektrisch: Strom zu niedrig | 0 |
| 0x21DD3B | REME Phasenstrom Phase W, elektrisch: Abweichung Nulllage zu hoch | 0 |
| 0x21DD3C | REME Phasenstrom Klemme U ,V, W: Summenfehler | 0 |
| 0x21DD50 | REME Interne Versorgungsspannung fuer Sensor: Überspannung | 0 |
| 0x21DD51 | REME Interne Versorgungsspannung fuer Sensor: Unterspannung | 0 |
| 0x21DD54 | REME Interne Versorgung fuer Treiber Ansteuerung IGBT: Überspannung | 0 |
| 0x21DD55 | REME Interne Versorgung fuer Treiber Ansteuerung IGBT: Unterspannung | 0 |
| 0x21DD57 | REME Interne Versorgungsspannung fuer Sensor: Kurzschluss gegen Plus | 0 |
| 0x21DD58 | REME Interne Versorgungsspannung fuer Sensor: Kurzschluss gegen Masse | 0 |
| 0x21DD5F | REME interner Baustein für Fehler: nicht plausibles Signal | 0 |
| 0x21DD60 | REME Phasenstrom Phase U,V,W elektrisch: Überschreitung Messbereich | 0 |
| 0x21DD61 | REME Traktionsnetzspannung. Elektrisch: HW-Abschaltung oberer Schwellenwert Spannung | 0 |
| 0x21DD62 | REME Interne Versorgung Treiber Ansteuerung IGBT, elektrisch: Fehler | 0 |
| 0x21DD63 | REME Interne Versorgungsspannung fuer Sensor: Spannung zu hoch | 0 |
| 0x21DD70 | REME Umrichter Endstufe IGBT (oben), elektrisch: Fehlfunktion | 0 |
| 0x21DD71 | REME Umrichter Endstufe IGBT (unten), elektrisch: Fehlfunktion | 0 |
| 0x21DD73 | REME Betriebsart Anforderung: Fehlerhaft | 0 |
| 0x21DD7E | REME Niedervolt Spannungsversorgung: Plausibilitätsfehler | 0 |
| 0x21DD81 | REME Niedervolt Spannungsversorgung, Plausibilität: Spannung zu hoch | 0 |
| 0x21DD90 | REME interner Fehler: Speicherfehler | 0 |
| 0x21DD91 | REME interner Fehler: Speicherfehler | 0 |
| 0x21DD92 | REME interner Fehler: Speicherfehler | 0 |
| 0x21DD93 | REME interner Fehler: Überwachung serielle Datenschnittstelle SPI | 0 |
| 0x21DD94 | REME, interner Fehler, Watchdog: Aktivierung erkannt | 0 |
| 0x21DDA0 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DDA1 | REME, Kontrollleiterplatte: Elektronikbaustein CPLD Takt Fehler | 0 |
| 0x21DDA2 | REME Controllerplatine: Zusammenbau unplausibel | 0 |
| 0x21DDA3 | REME Controllerplatine: fehlerhaft | 0 |
| 0x21DDB0 | REME, interner Fehler, CAN-Controller: Speichertest fehlgeschlagen | 0 |
| 0x21DDB1 | REME, Sicherheitsabschaltung: schwerer Aufprall vom Aufprallsensor erkannt | 0 |
| 0x21DDB2 | REME, Sicherheitsabschaltung: leichter Aufprall vom Aufprallsensor erkannt | 0 |
| 0x21DDB5 | REME, Ebene 3, Watchdog-Fehler: Fehlerzähler des externen Überwachungsmoduls entspricht nicht dem Gegenstück im Controller | 0 |
| 0x21DDB7 | REME Umrichter: Sicherheitsfunktion/ Schaltung aktiver Kurzschluss für elektrische Maschine nicht möglich | 0 |
| 0x21DDB8 | REME Umrichter: Sicherheitsfunktion/ Schaltung Freilauf für elektrische Maschine nicht möglich | 0 |
| 0x21DDB9 | REME Umrichter: Sicherheitsfunktion/ Schaltung Freilauf für elektrische Maschine nicht möglich | 0 |
| 0x21DDBA | REME Elektrische Maschine Drehzahl, elektrisch: Drehzahl zu hoch | 0 |
| 0x21DDC0 | REME Umrichter Endstufe IGBT Phase U, Temperatur: Überschreitung Schwellenwert | 0 |
| 0x21DDC1 | REME Umrichter Endstufe IGBT Phase U, Temperatur: Unterschreitung Schwellenwert | 0 |
| 0x21DDC2 | REME Umrichter Endstufe IGBT Phase V, Temperatur: Überschreitung Schwellenwert | 0 |
| 0x21DDC3 | REME Umrichter Endstufe IGBT Phase V, Temperatur: Unterschreitung Schwellenwert | 0 |
| 0x21DDC4 | REME Umrichter Endstufe IGBT Phase W, Temperatur: Überschreitung Schwellenwert | 0 |
| 0x21DDC5 | REME Umrichter Endstufe IGBT Phase W, Temperatur: Unterschreitung Schwellenwert | 0 |
| 0x21DDC6 | REME Umrichter Endstufe IGBT Phase U, Temperatur: nicht plausibel | 0 |
| 0x21DDC7 | REME Umrichter Endstufe IGBT Phase V, Temperatur: nicht plausibel | 0 |
| 0x21DDC8 | REME Umrichter Endstufe IGBT Phase W, Temperatur: nicht plausibel | 0 |
| 0x21DDD1 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x21DDD2 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x21DDD3 | Elektrische Maschine Temperatursensor, elektrisch: nicht plausibel | 0 |
| 0x21DDD4 | REME Zwischenkreis: Leistung nicht plausibel | 0 |
| 0x21DDD6 | Elektrische Maschine Drehzahl: nicht vorhanden | 0 |
| 0x21DDD8 | REME Stromregler: Stromgrößen  nicht plausibel | 0 |
| 0x21DDD9 | REME Temperatur in Zustand aktiver Kurzschluss: Überschreitung Schwellenwert | 0 |
| 0x21DDDA | Elektrische Maschine Rotorlagesensor Winkel Korrekturwert: unplausibel | 0 |
| 0x21DE05 | REME Betriebszustand: Montagemodus aktiv | 0 |
| 0x21DE06 | Überspannung erkannt | 1 |
| 0x21DE07 | Unterspannung erkannt | 1 |
| 0x21DE08 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DE09 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DE0A | Dummy-Fehlerspeichereintrag nur für Entwiklungszwecke | 0 |
| 0x21DE0B | REME Umrichter Endstufe IGBT Phasen U Temperature: nicht plausibel | 0 |
| 0x21DE0C | REME Umrichter Endstufe IGBT Phasen V Temperature: nicht plausibel | 0 |
| 0x21DE0D | REME Umrichter Endstufe IGBT Phasen W Temperature: nicht plausibel | 0 |
| 0x21DE0F | REME  Sicherheitsabschaltung: Crash-Schaltungstest fehlerhaft | 0 |
| 0x21DE10 | REME Phasenleitungen: Unterbrechung | 0 |
| 0x21DE11 | Elektrische Maschine: ungewolte Drehung des Rotors | 0 |
| 0x21DE12 | REME Phasenleitung U: Unterbrechung | 0 |
| 0x21DE13 | REME Phasenleitung V: Unterbrechung | 0 |
| 0x21DE14 | REME Phasenleitung W: Unterbrechung | 0 |
| 0x21DE15 | Dummy-Fehlerspeichereintrag nur für Entwiklungszwecke | 0 |
| 0x21DE16 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DE17 | REME, Klemme 15, Datenempfang: Fehlfunktion | 0 |
| 0x21DE18 | REME Umrichter Zwischenkreis Schaltung zum Entladen: Fehlerhaft | 0 |
| 0x21DE20 | EWS-Manipulationsschutz: Momentengenerierung Elektromaschine durch EWS gesperrt | 0 |
| 0x21DE21 | EWS-Manipulationsschutz: Momentengenerierung Elektromaschine durch EWS gesperrt | 0 |
| 0x21DE30 | REME, Monitoring, Rotorlage:  nicht plausibel | 0 |
| 0x21DE31 | REME, Monitoring, Überführung in sicheren Zustand: fehlerhaft | 0 |
| 0x21DE32 | REME, Monitoring, Rotordrehzahl: nicht plausibel | 0 |
| 0x21DE33 | REME, Monitoring, Phasenströme: nicht plausibel | 0 |
| 0x21DE34 | REME, Monitoring, Betriebsart: nicht plausibel | 0 |
| 0x21DE35 | REME, Monitoring, Zwischenkreisspannung: nicht plausibel | 0 |
| 0x21DE36 | REME, Monitoring, CAN: Eingangssignalerfassung fehlerhaft | 0 |
| 0x21DE37 | REME, Monitoring, Ist-Moment Berechnung: fehlerhaft | 0 |
| 0x21DE38 | REME, Monitoring, Moment: nicht plausibel | 0 |
| 0x21DE3B | REME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x21DE3C | Elektrische Maschine Temperatursensor: unplausible Temperatursprünge | 0 |
| 0x21DE3D | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten [1]) Togglererkennung | 0 |
| 0x21DF01 | Signal (Ist_Strom_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0x21DF02 | Signal (Ist_Spannung_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0x21DF03 | Signal (Strom_Maximal_Antrieb_E-Motor, 0x2E2): Wert ungültig | 1 |
| 0x21DF04 | Signal (Strom_Maximal_Generator_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF07 | Signal (Drehzahl_Soll_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF08 | Signal (Status_Daten_Regelung_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0A | Signal (Soll_Betriebsart_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0B | Signal (Soll_Drehmoment_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0C | Signal (Soll_Spannung_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF0D | Signal (Drehmoment_Maximal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0E | Signal (Drehmoment_Minimal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0F | Signal (Spannung_Gleichstrom_Hochspannung_Maximal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF10 | Signal (Spannung_Gleichstrom_Hochspannung_Minimal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF1E | Signal (Anforderung_Entladung_Zwischenkreis [2], 0x2E8): Wert ungültig | 1 |
| 0x21DF23 | Signal (Steuerung_Abschaltung_EKP_Crash [1], 0x19B): Wert ungültig | 1 |
| 0x21DF27 | Signal (Status_Klemme [5], 0x12F): Wert ungültig | 1 |
| 0x21DF29 | Signal (Wegstrecke_Kilometer [5], 0x330): Wert ungültig | 1 |
| 0x21DF2A | Signal (Status_Trennschalter_Hochvoltspeicher [1], 0x1FA): Wert ungültig | 1 |
| 0x21DF2B | Signal (Strom_Soll_E-Motor_1 [1], 0x2E2): Wert ungültig | 1 |
| 0x21DF32 | Signal (Zeit_Sekunde_Zähler_Relativ [7], 0x328): Wert ungültig | 1 |
| 0x21DF33 | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten, 0x1D0): Wert ungültig | 1 |
| 0x21DF34 | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten, 0x1D0): Wert Abschaltanforderung empfangen | 1 |
| 0x21DF35 | Signal (Anforderung_Drehmoment_Hochspannung_Start_Generator, 0x192): Wert Abschaltanforderung empfangen | 1 |
| 0x21DF37 | Signal (Anforderung_Trennschalter_Hochvoltspeicher_Schließen [1], 0x10B): Wert ungültig | 1 |
| 0xCB8486 | A-CAN Control Module Bus OFF | 0 |
| 0xCB8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCB9400 | A-CAN, Botschaft (Vorgabe Begrenzung E-Motor 1, 0x2E2): fehlt | 1 |
| 0xCB940A | A-CAN, Botschaft (Vorgabe Betriebsbereich Range Extender, 0x0AA): fehlt | 1 |
| 0xCB9411 | A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): fehlt | 1 |
| 0xCB9412 | A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192):Alive Fehler | 1 |
| 0xCB9413 | A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192):Prüfsumme falsch | 1 |
| 0xCB9415 | A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 1 |
| 0xCB941A | A-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCB941B | A-CAN, Botschaft (Klemmen, 0x12F): Alive Fehler | 1 |
| 0xCB941C | A-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCB942A | A-CAN, Botschaft (Status Betriebsart E-Motor Traktion, 0x2E8): fehlt | 1 |
| 0xCB9445 | A-CAN, Botschaft (Kilometerstand/ Reichweite, 0x330): fehlt | 1 |
| 0xCB9455 | A-CAN, Botschaft (Status Hybrid 2, 0x418): fehlt | 1 |
| 0xCB9465 | A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA): fehlt | 1 |
| 0xCB946A | A-CAN, Botschaft (Steuerung Crash, 0x19B): fehlt | 1 |
| 0xCB9470 | A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCB9480 | A-CAN, Botschaft (Absicherung Antriebsstrang, 0x1D0): fehlt | 1 |
| 0xCB9481 | A-CAN, Botschaft Absicherung Antriebsstrang, 0x1D0): Alive Fehler | 1 |
| 0xCB9482 | A-CAN, Botschaft (Absicherung Antriebsstrang, 0x1D0): Prüfsumme falsch | 1 |
| 0xCB9490 | A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): fehlt | 1 |
| 0xCB949B | A-CAN, Botschaft (Drehmoment Kurbelwelle 2, 0xA6): fehlt | 1 |
| 0xCB949C | A-CAN, Botschaft (Drehmoment Kurbelwelle 2, 0xA6): Alive Fehler | 1 |
| 0xCB949E | A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): Alive Fehler | 1 |
| 0xCB949F | A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): Prüfsumme falsch | 1 |
| 0xCB9500 | A-CAN, Botschaft (Drehmoment Kurbelwelle 2, 0xA6): Prüfsumme falsch | 1 |
| 0xCB9501 | A-CAN, Botschaft (PDU Vorgabe Trennschalter Hochvoltspeicher, 0x10B): fehlt | 1 |
| 0xCB9502 | Signal (Anforderung_Drehmoment_Hochspannung_Start_Generator, 0x192): Wert ungültig | 1 |
| 0xCB9503 | Signal (Abgesichert_Bereitschaft_Fahren, 0x1D0): Wert ungültig | 1 |
| 0xCB9504 | Signal (IST_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion, 0x100): Wert ungültig | 1 |
| 0xCB9505 | Signal (Ist_Strom_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0xCB9506 | Signal (Ist_Spannung_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0xCB9507 | Signal (Strom_Maximal_Antrieb_E-Motor, 0x2E2): Wert ungültig | 1 |
| 0xCB9508 | Signal (Strom_Maximal_Generator_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB950B | Signal (Drehzahl_Soll_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB950C | Signal (Status_Daten_Regelung_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB950E | Signal (Soll_Betriebsart_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB950F | Signal (Soll_Drehmoment_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB9510 | Signal (Soll_Spannung_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB9511 | Signal (Drehmoment_Maximal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB9512 | Signal (Drehmoment_Minimal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB9513 | Signal (Spannung_Gleichstrom_Hochspannung_Maximal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB9514 | Signal (Spannung_Gleichstrom_Hochspannung_Minimal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB9516 | Signal (Anforderung_Entladung_Zwischenkreis [2], 0x2E8): Wert ungültig | 1 |
| 0xCB9517 | Signal (Steuerung_Abschaltung_EKP_Crash [1], 0x19B): Wert ungültig | 1 |
| 0xCB9518 | Signal (Status_Klemme [5], 0x12F): Wert ungültig | 1 |
| 0xCB951A | Signal (Wegstrecke_Kilometer [5], 0x330): Wert ungültig | 1 |
| 0xCB951B | Signal (Status_Trennschalter_Hochvoltspeicher [1], 0x1FA): Wert ungültig | 1 |
| 0xCB951C | Signal (Strom_Soll_E-Motor_1 [1], 0x2E2): Wert ungültig | 1 |
| 0xCB951D | Signal (Zeit_Sekunde_Zähler_Relativ [7], 0x328): Wert ungültig | 1 |
| 0xCB951E | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten, 0x1D0): Wert ungültig | 1 |
| 0xCB951F | Signal (Anforderung_Trennschalter_Hochvoltspeicher_Schließen [1], 0x10B): Wert ungültig | 1 |
| 0xCB9523 | Signal (Steuerung_Abschaltung_EKP_Crash [1], 0x19B): Wert ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Betriebsart | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | Zwischenkreisspannung | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x4002 | Bordnetzspannung | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4003 | Kuehlwassertemperatur | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4004 | Istmoment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4005 | Status_KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | Statorstrom | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4007 | Drehzahl | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | Statortemperatur | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4009 | Teilnetzbetrieb aktiv | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | HV_SPANNUNG_AE | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x4029 | Durchfluss Kühlwasser | 1/h | High | unsigned char | - | 1.0 | 5.0 | 0.0 |
| 0x4030 | Solldrehzahl | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4031 | Regelungsparametersatz | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4032 | Soll Betriebsart | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4033 | Abstellzeit SG auf Basis Systemzeit | min | High | unsigned int | - | 8.0 | 1.0 | 0.0 |
| 0x4034 | Sollmoment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4035 | Maximale Auslastung der Context Save Area | % | High | signed int | - | 0.0015 | 1.0 | 0.0 |
| 0x4036 | Bitstatus des PLD-Fehlersignale | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4037 | Istwert Phasenstrom L1 | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4038 | Istwert Phasenstrom L2 | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4039 | Istwert Phasenstrom L3 | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4040 | Geschätzte Diodentemperatur im Leistungsmodul | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4041 | Geschätzte IGBT-Temperatur im Leistungsmodul | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4042 | Gefilterte DBC-Temperatur der Phase U | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4043 | Gefilterte DBC-Temperatur der Phase V | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4044 | Gefilterte DBC-Temperatur der Phase W | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4045 | Maximale Momentengrenze CAN | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4046 | Minimale Momentengrenze CAN | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4047 | Interne Versorgung 30V | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4048 | Interne Versorgung 5G1 | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4049 | Error Counter Monitoring | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4050 | Status Monitoring | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4051 | Entprellzähler Diagnoseinformation | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4052 | Fehlerzähler Externer Momentenvergleich | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | Entprellzähler RDYUVW-Signal | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | Gibt den Zustand an, in dem der Fehler erkannt wurde | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4055 | Gibt den alten Zustand an, in dem der Fehler erkannt wurde | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4056 | Eingänge Fehlerlogik | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4057 | Fehlerursache | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4058 | Status Endstufe | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4059 | Status RDYUVW Signal | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4060 | Normal Mode Error | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4061 | Flag for prohibition of torque | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4062 | Watchdog error | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4063 | Absolute Rotor Speed (Level-2) | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4064 | Amplitude error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4065 | Range check error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4066 | Sum check error (Levele-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4067 | Message error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4068 | Frame time out error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4069 | Message02 Error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4070 | Message03 Error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4071 | Frame 03 time out error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4072 | Message04 error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4073 | Logic error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4077 | Nm Status A-CAN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4078 | Rasterzähler für 10ms Drive-Task | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4079 | Rasterzähler für 10ms Postdrive-Task | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4080 | Rasterzähler für 10ms Predrive-Task | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4081 | Reset Information 1 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4082 | Reset Information 2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4083 | Reset Information 3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4084 | Reset Information 4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4085 | Reset Information 5 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4086 | Buffer 0 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4087 | Buffer 1 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4088 | Buffer 2 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4089 | Buffer 3 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4090 | Buffer 0 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4091 | Buffer 1 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4092 | Buffer 2 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4093 | Buffer 3 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4094 | Reset-ID Vorgeschichte 0 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4095 | Reset-ID Vorgeschichte 1 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4096 | Reset-ID Vorgeschichte 2 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4097 | Reset-ID Vorgeschichte 3 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4098 | Reset-ID Vorgeschichte 4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4099 | Reset-ID Vorgeschichte 5 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4100 | Reset-ID Vorgeschichte 6 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4101 | Reset-ID Vorgeschichte 7 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | Maximale Systemlast während des aktuellen Fahrzyklus | % | High | unsigned int | - | 0.0015 | 1.0 | 0.0 |
| 0x4103 | CAN KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | HW KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4106 | Status max. Invertermoment | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4107 | Status min. Invertermoment | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4108 | max. zulässiges Inverter-Moment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4109 | min. zulässiges Inverter-Moment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4110 | IGBT Temperatur des Leistungsmoduls fuer die Phase U ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4111 | IGBT Temperatur des Leistungsmoduls fuer die Phase V ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4112 | IGBT Temperatur des Leistungsmoduls fuer die Phase W ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4113 | Stator-Temperatur ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4114 | Istwert Strom Phase U ohne SRC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4115 | Istwert Strom Phase V ohne SRC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4116 | Istwert Strom Phase W ohne SRC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4117 | Istwert Zwischenkreisspannung ohne SRC | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x4118 | KL30 Spannung fuer den oberen Spannungsbereich ohne SRC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4119 | KL30 Spannung fuer den niedrigen Spannungsbereich ohne SRC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020A00 | Energiesparmode aktiv | 0 |
| 0x02FF0A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x21DD00 | Elektrische Maschine Rotorlagesensor, elektrisch: Signal abgeschnitten | 0 |
| 0x21DD01 | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Signal zu hoch | 0 |
| 0x21DD02 | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Signal zu niedrig | 0 |
| 0x21DD03 | Elektrische Maschine Rotorlagesensor, elektrisch: Sinus-/Cosinus-Amplitude nicht plausibel | 0 |
| 0x21DD04 | Elektrische Maschine Rotorlagesensor, elektrisch: Phasenlage nicht plausibel | 0 |
| 0x21DD05 | Elektrische Maschine Rotorlagesensor, elektrisch: Signalerfassung ausserhalb Toleranzbereich | 0 |
| 0x21DD06 | Elektrische Maschine Rotorlagesensor, elektrisch: Winkelgeschwindigkeit zu hoch | 0 |
| 0x21DD07 | Elektrische Maschine Rotorlagesensor, elektrisch: Konfiguration | 0 |
| 0x21DD0B | Elektrische Maschine Rotorlagesensor, elektrisch: Konfiguration nicht plausibel | 0 |
| 0x21DD0C | Elektrische Maschine Rotorlagesensor, elektrisch: Interne Überwachungsfunktion nicht plausibel | 0 |
| 0x21DD0D | Elektrische Maschine Rotorlagesensor, elektrisch: Messsignal Änderung zu hoch in Zeiteinheit | 0 |
| 0x21DD0E | Elektrische Maschine Rotorlagesensor, elektrisch: Messsignal keine Änderung | 0 |
| 0x21DD0F | Elektrische Maschine Rotorlagesensor, elektrisch: Messsignal nicht plausibel | 0 |
| 0x21DD10 | Elektrische Maschine Temperatursensor, elektrisch: Überschreitung Schwellenwert 1 | 0 |
| 0x21DD11 | Elektrische Maschine Temperatursensor, elektrisch: Überschreitung Schwellenwert 2 | 0 |
| 0x21DD13 | Signal (Anforderung_Drehmoment_Hochspannung_Start_Generator, 0x192): Wert ungültig | 1 |
| 0x21DD14 | Signal (Abgesichert_Bereitschaft_Fahren, 0x1D0): Wert ungültig | 1 |
| 0x21DD15 | Signal (IST_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion, 0x100): Wert ungültig | 1 |
| 0x21DD16 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x21DD17 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x21DD20 | REME Traktionsnetz Spannung, elektrisch: zu hoch | 0 |
| 0x21DD21 | REME Traktionsnetz Spannung, elektrisch: Vergleichsfehler | 0 |
| 0x21DD30 | REME Phasenstrom Phase U, elektrisch: Vergleichsfehler | 0 |
| 0x21DD31 | REME Phasenstrom Phase U, elektrisch: Strom zu hoch | 0 |
| 0x21DD32 | REME Phasenstrom Phase U, elektrisch: Strom zu niedrig | 0 |
| 0x21DD33 | REME Phasenstrom Phase U, elektrisch: Abweichung Nulllage zu hoch | 0 |
| 0x21DD34 | REME Phasenstrom Phase V, elektrisch: Vergleichsfehler | 0 |
| 0x21DD35 | REME Phasenstrom Phase V, elektrisch: Strom zu hoch | 0 |
| 0x21DD36 | REME Phasenstrom Phase V, elektrisch: Strom zu niedrig | 0 |
| 0x21DD37 | REME Phasenstrom Phase V, elektrisch: Abweichung Nulllage zu hoch | 0 |
| 0x21DD38 | REME Phasenstrom Phase W, elektrisch: Vergleichsfehler | 0 |
| 0x21DD39 | REME Phasenstrom Phase W, elektrisch: Strom zu hoch | 0 |
| 0x21DD3A | REME Phasenstrom Phase W, elektrisch: Strom zu niedrig | 0 |
| 0x21DD3B | REME Phasenstrom Phase W, elektrisch: Abweichung Nulllage zu hoch | 0 |
| 0x21DD3C | REME Phasenstrom Klemme U ,V, W: Summenfehler | 0 |
| 0x21DD50 | REME Interne Versorgungsspannung fuer Sensor: Überspannung | 0 |
| 0x21DD51 | REME Interne Versorgungsspannung fuer Sensor: Unterspannung | 0 |
| 0x21DD54 | REME Interne Versorgung fuer Treiber Ansteuerung IGBT: Überspannung | 0 |
| 0x21DD55 | REME Interne Versorgung fuer Treiber Ansteuerung IGBT: Unterspannung | 0 |
| 0x21DD57 | REME Interne Versorgungsspannung fuer Sensor: Kurzschluss gegen Plus | 0 |
| 0x21DD58 | REME Interne Versorgungsspannung fuer Sensor: Kurzschluss gegen Masse | 0 |
| 0x21DD5F | REME interner Baustein für Fehler: nicht plausibles Signal | 0 |
| 0x21DD60 | REME Phasenstrom Phase U,V,W elektrisch: Überschreitung Messbereich | 0 |
| 0x21DD61 | REME Traktionsnetzspannung. Elektrisch: HW-Abschaltung oberer Schwellenwert Spannung | 0 |
| 0x21DD62 | REME Interne Versorgung Treiber Ansteuerung IGBT, elektrisch: Fehler | 0 |
| 0x21DD63 | REME Interne Versorgungsspannung fuer Sensor: Spannung zu hoch | 0 |
| 0x21DD70 | REME Umrichter Endstufe IGBT (oben), elektrisch: Fehlfunktion | 0 |
| 0x21DD71 | REME Umrichter Endstufe IGBT (unten), elektrisch: Fehlfunktion | 0 |
| 0x21DD73 | REME Betriebsart Anforderung: Fehlerhaft | 0 |
| 0x21DD7E | REME Niedervolt Spannungsversorgung: Plausibilitätsfehler | 0 |
| 0x21DD81 | REME Niedervolt Spannungsversorgung, Plausibilität: Spannung zu hoch | 0 |
| 0x21DD90 | REME interner Fehler: Speicherfehler | 0 |
| 0x21DD91 | REME interner Fehler: Speicherfehler | 0 |
| 0x21DD92 | REME interner Fehler: Speicherfehler | 0 |
| 0x21DD93 | REME interner Fehler: Überwachung serielle Datenschnittstelle SPI | 0 |
| 0x21DD94 | REME, interner Fehler, Watchdog: Aktivierung erkannt | 0 |
| 0x21DDA0 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DDA1 | REME, Kontrollleiterplatte: Elektronikbaustein CPLD Takt Fehler | 0 |
| 0x21DDA2 | REME Controllerplatine: Zusammenbau unplausibel | 0 |
| 0x21DDA3 | REME Controllerplatine: fehlerhaft | 0 |
| 0x21DDB0 | REME, interner Fehler, CAN-Controller: Speichertest fehlgeschlagen | 0 |
| 0x21DDB1 | REME, Sicherheitsabschaltung: schwerer Aufprall vom Aufprallsensor erkannt | 0 |
| 0x21DDB2 | REME, Sicherheitsabschaltung: leichter Aufprall vom Aufprallsensor erkannt | 0 |
| 0x21DDB5 | REME, Ebene 3, Watchdog-Fehler: Fehlerzähler des externen Überwachungsmoduls entspricht nicht dem Gegenstück im Controller | 0 |
| 0x21DDB7 | REME Umrichter: Sicherheitsfunktion/ Schaltung aktiver Kurzschluss für elektrische Maschine nicht möglich | 0 |
| 0x21DDB8 | REME Umrichter: Sicherheitsfunktion/ Schaltung Freilauf für elektrische Maschine nicht möglich | 0 |
| 0x21DDB9 | REME Umrichter: Sicherheitsfunktion/ Schaltung Freilauf für elektrische Maschine nicht möglich | 0 |
| 0x21DDBA | REME Elektrische Maschine Drehzahl, elektrisch: Drehzahl zu hoch | 0 |
| 0x21DDC0 | REME Umrichter Endstufe IGBT Phase U, Temperatur: Überschreitung Schwellenwert | 0 |
| 0x21DDC1 | REME Umrichter Endstufe IGBT Phase U, Temperatur: Unterschreitung Schwellenwert | 0 |
| 0x21DDC2 | REME Umrichter Endstufe IGBT Phase V, Temperatur: Überschreitung Schwellenwert | 0 |
| 0x21DDC3 | REME Umrichter Endstufe IGBT Phase V, Temperatur: Unterschreitung Schwellenwert | 0 |
| 0x21DDC4 | REME Umrichter Endstufe IGBT Phase W, Temperatur: Überschreitung Schwellenwert | 0 |
| 0x21DDC5 | REME Umrichter Endstufe IGBT Phase W, Temperatur: Unterschreitung Schwellenwert | 0 |
| 0x21DDC6 | REME Umrichter Endstufe IGBT Phase U, Temperatur: nicht plausibel | 0 |
| 0x21DDC7 | REME Umrichter Endstufe IGBT Phase V, Temperatur: nicht plausibel | 0 |
| 0x21DDC8 | REME Umrichter Endstufe IGBT Phase W, Temperatur: nicht plausibel | 0 |
| 0x21DDD0 | REME Inverter, leistungsreduzierter Betrieb: Temperaturschwelle überschritten | 0 |
| 0x21DDD1 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x21DDD2 | Elektrische Maschine Temperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x21DDD3 | Elektrische Maschine Temperatursensor, elektrisch: nicht plausibel | 0 |
| 0x21DDD4 | REME Zwischenkreis: Leistung nicht plausibel | 0 |
| 0x21DDD6 | Elektrische Maschine Drehzahl: nicht vorhanden | 0 |
| 0x21DDD8 | REME Stromregler: Stromgrößen  nicht plausibel | 0 |
| 0x21DDD9 | REME Temperatur in Zustand aktiver Kurzschluss: Überschreitung Schwellenwert | 0 |
| 0x21DDDA | Elektrische Maschine Rotorlagesensor Winkel Korrekturwert: unplausibel | 0 |
| 0x21DDDC | Puffer für ausgehende Fehlermeldungen ist voll (ROE) | 0 |
| 0x21DDDD | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden (ROE) | 0 |
| 0x21DE05 | REME Betriebszustand: Montagemodus aktiv | 0 |
| 0x21DE06 | Überspannung erkannt | 1 |
| 0x21DE07 | Unterspannung erkannt | 1 |
| 0x21DE08 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DE09 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DE0A | Dummy-Fehlerspeichereintrag nur für Entwiklungszwecke | 0 |
| 0x21DE0B | REME Umrichter Endstufe IGBT Phasen U Temperature: nicht plausibel | 0 |
| 0x21DE0C | REME Umrichter Endstufe IGBT Phasen V Temperature: nicht plausibel | 0 |
| 0x21DE0D | REME Umrichter Endstufe IGBT Phasen W Temperature: nicht plausibel | 0 |
| 0x21DE0F | REME  Sicherheitsabschaltung: Crash-Schaltungstest fehlerhaft | 0 |
| 0x21DE10 | REME Phasenleitungen: Unterbrechung | 0 |
| 0x21DE11 | Elektrische Maschine: ungewolte Drehung des Rotors | 0 |
| 0x21DE12 | REME Phasenleitung U: Unterbrechung | 0 |
| 0x21DE13 | REME Phasenleitung V: Unterbrechung | 0 |
| 0x21DE14 | REME Phasenleitung W: Unterbrechung | 0 |
| 0x21DE15 | Dummy-Fehlerspeichereintrag nur für Entwiklungszwecke | 0 |
| 0x21DE16 | REME, Kontrollleiterplatte: Durchflusswandler Takt Fehler | 0 |
| 0x21DE17 | REME, Klemme 15, Datenempfang: Fehlfunktion | 0 |
| 0x21DE18 | REME Umrichter Zwischenkreis Schaltung zum Entladen: Fehlerhaft | 0 |
| 0x21DE20 | EWS-Manipulationsschutz: Momentengenerierung Elektromaschine durch EWS gesperrt | 0 |
| 0x21DE21 | EWS-Manipulationsschutz: Momentengenerierung Elektromaschine durch EWS gesperrt | 0 |
| 0x21DE22 | Resethistorie: Anforderung Reset von Reset-Gruppe | 0 |
| 0x21DE23 | Resethistorie: Anforderung Reset von Reset-ID | 0 |
| 0x21DE24 | Resethistorie: Anforderung Reset von Reset-ID-Bereich | 0 |
| 0x21DE25 | Resethistorie: Anforderung Reset von Überwachung MOCADC | 0 |
| 0x21DE26 | Resethistorie: Anforderung Reset von Überwachung MOCMEM | 0 |
| 0x21DE27 | Resethistorie: Anforderung Reset von Traps | 0 |
| 0x21DE30 | REME, Monitoring, Rotorlage:  nicht plausibel | 0 |
| 0x21DE31 | REME, Monitoring, Überführung in sicheren Zustand: fehlerhaft | 0 |
| 0x21DE32 | REME, Monitoring, Rotordrehzahl: nicht plausibel | 0 |
| 0x21DE33 | REME, Monitoring, Phasenströme: nicht plausibel | 0 |
| 0x21DE34 | REME, Monitoring, Betriebsart: nicht plausibel | 0 |
| 0x21DE35 | REME, Monitoring, Zwischenkreisspannung: nicht plausibel | 0 |
| 0x21DE36 | REME, Monitoring, CAN: Eingangssignalerfassung fehlerhaft | 0 |
| 0x21DE37 | REME, Monitoring, Ist-Moment Berechnung: fehlerhaft | 0 |
| 0x21DE38 | REME, Monitoring, Moment: nicht plausibel | 0 |
| 0x21DE3B | REME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x21DE3C | Elektrische Maschine Temperatursensor: unplausible Temperatursprünge | 0 |
| 0x21DE3D | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten [1]) Togglererkennung | 0 |
| 0x21DF00 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): fehlt | 1 |
| 0x21DF01 | Signal (Ist_Strom_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0x21DF02 | Signal (Ist_Spannung_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0x21DF03 | Signal (Strom_Maximal_Antrieb_E-Motor, 0x2E2): Wert ungültig | 1 |
| 0x21DF04 | Signal (Strom_Maximal_Generator_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF07 | Signal (Drehzahl_Soll_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF08 | Signal (Status_Daten_Regelung_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0A | Signal (Soll_Betriebsart_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0B | Signal (Soll_Drehmoment_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0C | Signal (Soll_Spannung_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF0D | Signal (Drehmoment_Maximal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0E | Signal (Drehmoment_Minimal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0x21DF0F | Signal (Spannung_Gleichstrom_Hochspannung_Maximal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF10 | Signal (Spannung_Gleichstrom_Hochspannung_Minimal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0x21DF1E | Signal (Anforderung_Entladung_Zwischenkreis [2], 0x2E8): Wert ungültig | 1 |
| 0x21DF23 | Signal (Steuerung_Abschaltung_EKP_Crash [1], 0x19B): Wert ungültig | 1 |
| 0x21DF27 | Signal (Status_Klemme [5], 0x12F): Wert ungültig | 1 |
| 0x21DF29 | Signal (Wegstrecke_Kilometer [5], 0x330): Wert ungültig | 1 |
| 0x21DF2A | Signal (Status_Trennschalter_Hochvoltspeicher [1], 0x1FA): Wert ungültig | 1 |
| 0x21DF2B | Signal (Strom_Soll_E-Motor_1 [1], 0x2E2): Wert ungültig | 1 |
| 0x21DF32 | Signal (Zeit_Sekunde_Zähler_Relativ [7], 0x328): Wert ungültig | 1 |
| 0x21DF33 | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten, 0x1D0): Wert ungültig | 1 |
| 0x21DF34 | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten, 0x1D0): Wert Abschaltanforderung empfangen | 1 |
| 0x21DF35 | Signal (Anforderung_Drehmoment_Hochspannung_Start_Generator, 0x192): Wert Abschaltanforderung empfangen | 1 |
| 0x21DF36 | Signal (Abgesichert_Bereitschaft_Fahren, 0x1D0): Wert Momentenaufbau/Kl. 50 nicht erlauben trotz einer Momentenanforderung empfangen | 1 |
| 0x21DF37 | Signal (Anforderung_Trennschalter_Hochvoltspeicher_Schließen [1], 0x10B): Wert ungültig | 1 |
| 0xCB8486 | A-CAN Control Module Bus OFF | 0 |
| 0xCB8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCB9400 | A-CAN, Botschaft (Vorgabe Begrenzung E-Motor 1, 0x2E2): fehlt | 1 |
| 0xCB940A | A-CAN, Botschaft (Vorgabe Betriebsbereich Range Extender, 0x0AA): fehlt | 1 |
| 0xCB9411 | A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): fehlt | 1 |
| 0xCB9412 | A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192):Alive Fehler | 1 |
| 0xCB9413 | A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192):Prüfsumme falsch | 1 |
| 0xCB9415 | A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 1 |
| 0xCB941A | A-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCB941B | A-CAN, Botschaft (Klemmen, 0x12F): Alive Fehler | 1 |
| 0xCB941C | A-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCB942A | A-CAN, Botschaft (Status Betriebsart E-Motor Traktion, 0x2E8): fehlt | 1 |
| 0xCB9445 | A-CAN, Botschaft (Kilometerstand/ Reichweite, 0x330): fehlt | 1 |
| 0xCB9455 | A-CAN, Botschaft (Status Hybrid 2, 0x418): fehlt | 1 |
| 0xCB9465 | A-CAN, Botschaft (Status Hochvoltspeicher 1, 0x1FA): fehlt | 1 |
| 0xCB946A | A-CAN, Botschaft (Steuerung Crash, 0x19B): fehlt | 1 |
| 0xCB9470 | A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCB9480 | A-CAN, Botschaft (Absicherung Antriebsstrang, 0x1D0): fehlt | 1 |
| 0xCB9481 | A-CAN, Botschaft Absicherung Antriebsstrang, 0x1D0): Alive Fehler | 1 |
| 0xCB9482 | A-CAN, Botschaft (Absicherung Antriebsstrang, 0x1D0): Prüfsumme falsch | 1 |
| 0xCB9490 | A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): fehlt | 1 |
| 0xCB949B | A-CAN, Botschaft (Drehmoment Kurbelwelle 2, 0xA6): fehlt | 1 |
| 0xCB949C | A-CAN, Botschaft (Drehmoment Kurbelwelle 2, 0xA6): Alive Fehler | 1 |
| 0xCB949E | A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): Alive Fehler | 1 |
| 0xCB949F | A-CAN, Botschaft (Ist Daten E-Motor Traktion, 0x100): Prüfsumme falsch | 1 |
| 0xCB9500 | A-CAN, Botschaft (Drehmoment Kurbelwelle 2, 0xA6): Prüfsumme falsch | 1 |
| 0xCB9501 | A-CAN, Botschaft (PDU Vorgabe Trennschalter Hochvoltspeicher, 0x10B): fehlt | 1 |
| 0xCB9502 | Signal (Anforderung_Drehmoment_Hochspannung_Start_Generator, 0x192): Wert ungültig | 1 |
| 0xCB9503 | Signal (Abgesichert_Bereitschaft_Fahren, 0x1D0): Wert ungültig | 1 |
| 0xCB9504 | Signal (IST_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion, 0x100): Wert ungültig | 1 |
| 0xCB9505 | Signal (Ist_Strom_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0xCB9506 | Signal (Ist_Spannung_Hochvoltspeicher, 0x112): Wert ungültig | 1 |
| 0xCB9507 | Signal (Strom_Maximal_Antrieb_E-Motor, 0x2E2): Wert ungültig | 1 |
| 0xCB9508 | Signal (Strom_Maximal_Generator_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB950B | Signal (Drehzahl_Soll_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB950C | Signal (Status_Daten_Regelung_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB950E | Signal (Soll_Betriebsart_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB950F | Signal (Soll_Drehmoment_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB9510 | Signal (Soll_Spannung_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB9511 | Signal (Drehmoment_Maximal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB9512 | Signal (Drehmoment_Minimal_E-Motor_1, 0xAA): Wert ungültig | 1 |
| 0xCB9513 | Signal (Spannung_Gleichstrom_Hochspannung_Maximal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB9514 | Signal (Spannung_Gleichstrom_Hochspannung_Minimal_E-Motor_1, 0x2E2): Wert ungültig | 1 |
| 0xCB9516 | Signal (Anforderung_Entladung_Zwischenkreis [2], 0x2E8): Wert ungültig | 1 |
| 0xCB9517 | Signal (Steuerung_Abschaltung_EKP_Crash [1], 0x19B): Wert ungültig | 1 |
| 0xCB9518 | Signal (Status_Klemme [5], 0x12F): Wert ungültig | 1 |
| 0xCB951A | Signal (Wegstrecke_Kilometer [5], 0x330): Wert ungültig | 1 |
| 0xCB951B | Signal (Status_Trennschalter_Hochvoltspeicher [1], 0x1FA): Wert ungültig | 1 |
| 0xCB951C | Signal (Strom_Soll_E-Motor_1 [1], 0x2E2): Wert ungültig | 1 |
| 0xCB951D | Signal (Zeit_Sekunde_Zähler_Relativ [7], 0x328): Wert ungültig | 1 |
| 0xCB951E | Signal (Anforderung_Hochspannung_Start_Generator_Ausschalten, 0x1D0): Wert ungültig | 1 |
| 0xCB951F | Signal (Anforderung_Trennschalter_Hochvoltspeicher_Schließen [1], 0x10B): Wert ungültig | 1 |
| 0xCBC3FD | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0xCBC3FE | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Betriebsart | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | Zwischenkreisspannung | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x4002 | Bordnetzspannung | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4003 | Kuehlwassertemperatur | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4004 | Istmoment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4005 | Status_KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | Statorstrom | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4007 | Drehzahl | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | Statortemperatur | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4009 | Teilnetzbetrieb aktiv | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | HV_SPANNUNG_AE | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x4029 | Durchfluss Kühlwasser | 1/h | High | unsigned char | - | 1.0 | 5.0 | 0.0 |
| 0x4030 | Solldrehzahl | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4031 | Regelungsparametersatz | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4032 | Soll Betriebsart | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4033 | Abstellzeit SG auf Basis Systemzeit | min | High | unsigned int | - | 8.0 | 1.0 | 0.0 |
| 0x4034 | Sollmoment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4035 | Maximale Auslastung der Context Save Area | % | High | signed int | - | 0.0015 | 1.0 | 0.0 |
| 0x4036 | Bitstatus des PLD-Fehlersignale | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4037 | Istwert Phasenstrom L1 | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4038 | Istwert Phasenstrom L2 | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4039 | Istwert Phasenstrom L3 | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4040 | Geschätzte Diodentemperatur im Leistungsmodul | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4041 | Geschätzte IGBT-Temperatur im Leistungsmodul | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4042 | Gefilterte DBC-Temperatur der Phase U | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4043 | Gefilterte DBC-Temperatur der Phase V | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4044 | Gefilterte DBC-Temperatur der Phase W | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4045 | Maximale Momentengrenze CAN | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4046 | Minimale Momentengrenze CAN | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4047 | Interne Versorgung 30V | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4048 | Interne Versorgung 5G1 | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4049 | Error Counter Monitoring | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4050 | Status Monitoring | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4051 | Entprellzähler Diagnoseinformation | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4052 | Fehlerzähler Externer Momentenvergleich | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | Entprellzähler RDYUVW-Signal | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | Gibt den Zustand an, in dem der Fehler erkannt wurde | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4055 | Gibt den alten Zustand an, in dem der Fehler erkannt wurde | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4056 | Eingänge Fehlerlogik | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4057 | Fehlerursache | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4058 | Status Endstufe | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4059 | Status RDYUVW Signal | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4060 | Normal Mode Error | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4061 | Flag for prohibition of torque | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4062 | Watchdog error | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4063 | Absolute Rotor Speed (Level-2) | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4064 | Amplitude error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4065 | Range check error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4066 | Sum check error (Levele-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4067 | Message error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4068 | Frame time out error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4069 | Message02 Error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4070 | Message03 Error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4071 | Frame 03 time out error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4072 | Message04 error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4073 | Logic error (Level-2) | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4077 | Nm Status A-CAN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4078 | Rasterzähler für 10ms Drive-Task | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4079 | Rasterzähler für 10ms Postdrive-Task | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4080 | Rasterzähler für 10ms Predrive-Task | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4081 | Reset Information 1 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4082 | Reset Information 2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4083 | Reset Information 3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4084 | Reset Information 4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4085 | Reset Information 5 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4086 | Buffer 0 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4087 | Buffer 1 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4088 | Buffer 2 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4089 | Buffer 3 für Flash Margin Read Errors | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4090 | Buffer 0 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4091 | Buffer 1 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4092 | Buffer 2 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4093 | Buffer 3 für ErrorInterrupts und Traps | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4094 | Reset-ID Vorgeschichte 0 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4095 | Reset-ID Vorgeschichte 1 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4096 | Reset-ID Vorgeschichte 2 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4097 | Reset-ID Vorgeschichte 3 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4098 | Reset-ID Vorgeschichte 4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4099 | Reset-ID Vorgeschichte 5 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4100 | Reset-ID Vorgeschichte 6 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4101 | Reset-ID Vorgeschichte 7 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | Maximale Systemlast während des aktuellen Fahrzyklus | % | High | unsigned int | - | 0.0015 | 1.0 | 0.0 |
| 0x4103 | CAN KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | HW KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4106 | Status max. Invertermoment | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4107 | Status min. Invertermoment | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4108 | max. zulässiges Inverter-Moment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4109 | min. zulässiges Inverter-Moment | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4110 | IGBT Temperatur des Leistungsmoduls fuer die Phase U ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4111 | IGBT Temperatur des Leistungsmoduls fuer die Phase V ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4112 | IGBT Temperatur des Leistungsmoduls fuer die Phase W ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4113 | Stator-Temperatur ohne SRC | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x4114 | Istwert Strom Phase U ohne SRC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4115 | Istwert Strom Phase V ohne SRC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4116 | Istwert Strom Phase W ohne SRC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x4117 | Istwert Zwischenkreisspannung ohne SRC | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x4118 | KL30 Spannung fuer den oberen Spannungsbereich ohne SRC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x4119 | KL30 Spannung fuer den niedrigen Spannungsbereich ohne SRC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X1721_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_XHISTBUF_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[0] |
| STAT_RESET_XHISTBUF_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[1] |
| STAT_RESET_XHISTBUF_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[2] |
| STAT_RESET_XHISTBUF_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[3] |
| STAT_RESET_XHISTBUF_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[4] |
| STAT_RESET_XHISTBUF_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[5] |
| STAT_RESET_XHISTBUF_07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[6] |
| STAT_RESET_XHISTBUF_08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[7] |

### RES_0XADF4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_ANFORDERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADF7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IGBT_FREILAUF_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_EME_FREILAUF_IGBTS | - | - | - | aktueller Status über das Ausführen des Jobs |

### RES_0XDDF0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_E_MOTOR_WERT | °C | high | signed int | - | - | 1.5625 | 100.0 | 0.0 | E-Motor Temperatur |
| STAT_TEMP_LE_UVW_MAX_WERT | °C | high | signed int | - | - | 1.5625 | 100.0 | 0.0 | Maximaltemperatur Inverter (Modelliert aus T_le_u, T_le_v, T_le_w) |
| STAT_TEMP_LE_U_WERT | °C | high | signed int | - | - | 1.5625 | 100.0 | 0.0 | Invertertemperatur Phase U |
| STAT_TEMP_LE_V_WERT | °C | high | signed int | - | - | 1.5625 | 100.0 | 0.0 | Invertertemperatur Phase V |
| STAT_TEMP_LE_W_WERT | °C | high | signed int | - | - | 1.5625 | 100.0 | 0.0 | Invertertemperatur Phase W |

### RES_0XDDF3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_HV_RMS_PHASE_U_WERT | A | high | signed int | - | - | 6.25 | 100.0 | 0.0 | RMS Zuleitungsstrom Phase U |
| STAT_STROM_AC_HV_RMS_PHASE_V_WERT | A | high | signed int | - | - | 6.25 | 100.0 | 0.0 | RMS Zuleitungsstrom Phase V |
| STAT_STROM_AC_HV_RMS_PHASE_W_WERT | A | high | signed int | - | - | 6.25 | 100.0 | 0.0 | RMS Zuleitungsstrom Phase W |

### RES_0XDDF7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Drehzah der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | signed int | - | - | 2.0 | 10.0 | -400.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | signed int | - | - | 2.0 | 10.0 | -400.0 | SOLL Moment der E-Maschine |

### RES_0XDE2A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FELDDATEN_1_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 1 |
| STAT_FELDDATEN_2_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 2 |
| STAT_FELDDATEN_3_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 3 |
| STAT_FELDDATEN_4_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 4 |
| STAT_FELDDATEN_5_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 5 |
| STAT_FELDDATEN_6_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 6 |
| STAT_FELDDATEN_7_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 7 |
| STAT_FELDDATEN_8_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 8 |
| STAT_FELDDATEN_9_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 9 |
| STAT_FELDDATEN_10_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 10 |
| STAT_FELDDATEN_11_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 11 |
| STAT_FELDDATEN_12_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 12 |
| STAT_FELDDATEN_13_DATA | DATA | high | data[112] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 13 |
| STAT_FELDDATEN_14_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Felddaten Teil 14 |

### RES_0XDE2E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |
| STAT_SACHNUMMER_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Sachnummer des Steuergeräts |
| STAT_RESERVE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Reserve (keine Änderung des Werts) |
| STAT_AENDERUNGSINDEX_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Änderungsindex des Steuergeräts |

### RES_0XDE72_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CRASH_ZAEHLER2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerstand aufgrund von Kl.30c-Auswertung |
| STAT_CRASH_ZAEHLER1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerstand aufgrund von Crashsignalauswertung |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_REASON | 0x1721 | - | Werte fuer den Reset Grund. Die Werte sind vom Zulieferer festzulegen. DefaultWert: 0xFF. Hinweis: Dieser DID ist optional, muss aber beim Reset dann zumindest mit 0xFF befuellt werden. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1721_D |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4_R | RES_0xADF4_R |
| EME_IGBT_FREILAUF | 0xADF7 | - | Öffnen der IGBTS, um die E-Maschine AC-seitig hochohmig wegzuschalten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF7_R |
| EME_TEMP_EMASCHINE | 0xDDF0 | - | Wert der aktuellen Temperatur der E-Maschine in Grad Celsius lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF0_D |
| EME_SPANNUNG_DC_HV | 0xDDF1 | STAT_SPANNUNG_DC_HV_WERT | DC Spannung der E-Maschine nach Gleichrichtung durch die EME (HV-Batterieseitig nach intern) | V | ISC_UdcLnk | High | signed int | - | 0.0313 | 1.0 | 0.0 | - | 22 | - | - |
| EME_STROM_EMASCHINE_AC | 0xDDF3 | - | HV-Strom des DCDC Wandlers und dem gemitteltem Effektivstrom der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF3_D |
| EME_STROM_EMASCHINE_DC | 0xDDF4 | STAT_EMK_STROM_DC_WERT | DC Strom (auf der HV Seite) verursacht durch die EMK | A | COM_TxIdcLnk | High | signed int | - | 2.0 | 10.0 | -409.6 | - | 22 | - | - |
| EME_POSITIONSGEBER | 0xDDF5 | STAT_POSITIONSGEBER_WERT | Winkelstellung der E-Maschinen in Grad | ° | ISC_AlRtrElSens | High | unsigned int | - | 360.0 | 65536.0 | 0.0 | - | 22 | - | - |
| EME_ELEKTRISCHE_MASCHINE | 0xDDF7 | - | Auslesen von Drehzahl und Drehmoment der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDF7_D |
| EME_INFO_EMK | 0xDDFC | STAT_INFO_EMK_WERT | Bitkodierte Deratinginformation  der E-Maschinenregelung | - | COM_TxStInfoMotRex | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ANTRIEBSART | 0xDDFE | STAT_EME_ANTRIEBSART_NR | Rückmeldung der aktuell anliegenden Antriebsart. z.B. Rekuperation, Boost etc. | 0-n | COM_txstModeActv | High | unsigned char | TAB_STAT_EME_ANTRIEBSART_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_FELDDATEN_LESEN | 0xDE2A | - | Felddaten der EME auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2A_D |
| EME_SERIENNUMMERN_BOSCH | 0xDE2E | - | Serien-, Sach- und Änderungsnummer des Steuergeräts (Bosch) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2E_D |
| AE_CRASH_ZAEHLER_LESEN | 0xDE72 | - | Lesen Crash-Zaehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE72_D |

### TAB_EME_FREILAUF_IGBTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet! |
| 0x01 | Start-/Ansteuerbedingung nicht erfüllt! |
| 0x03 | Funktion wartet auf Freigabe! |
| 0x05 | Funktion läuft! |
| 0x06 | Funktion beendet. |
| 0x07 | Funktion abgebrochen! |
| 0xFF | Ungültiger Wert |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_STAT_AKS_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein AKS |
| 0x01 | AKS |
| 0x02 | Fehler |

### TAB_STAT_EME_ANTRIEBSART_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | MSA |
| 0x01 | Boost |
| 0x02 | Boost |
| 0x03 | Rekuperation |
| 0x04 | HV Batterie Entladen |
| 0x05 | HV Batterie Laden |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört) |
| 0x01 | Freigabe erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0x03 | DH-Abgleich |
| 0x11 | Direktschreiben des SecretKey und EWS5 |
| 0x12 | Direktschreiben des SecretKey und EWS5 und DH-Abgleich |
| 0x22 | Direktschreiben + EWS6 + DH-Abgleich |
| 0x23 | DH-Abgleich + EWS6 |
| 0xXY | unbekannt |

### DIAGADRTXT

| WERT | NAME |
| --- | --- |
| 0x12 | DME |
| 0x13 | DME2 |
| 0x18 | EGS |
| 0x1A | AE |
| 0x3A | EME20 |
| 0x3A | EME |
| 0x0A | REME |
| 0x1A | EMET |
| 0x0A | EMEZ |

### TAB_AE_FUNKSTAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht verfuegbarer Wert |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |

### TAB_AE_STAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montage-Modus ist inaktiv |
| 0x01 | Montage-Modus ist aktiv |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |
