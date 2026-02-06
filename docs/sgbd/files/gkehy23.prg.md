# gkehy23.prg

## General

|  |  |
| --- | --- |
| File | gkehy23.prg |
| Type | PRG |
| Jobs | 43 |
| Tables | 220 |
| Origin | BMW EA-71 H.Weller |
| Revision | 9.003 |
| Author | ZF TE-PH H.Grzelak, ZF ESA1 H.Kraus, ESG AB-E R.Mrvelj, ESG AB- |
| ECU Comment | EGS_EL [67] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Getriebesteuerung Elektrische-Schaltung |  |  |
| ORIGIN | string | BMW EA-71 H.Weller |  |  |
| REVISION | string | 9.003 |  |  |
| AUTHOR | string | ZF TE-PH H.Grzelak, ZF ESA1 H.Kraus, ESG AB-E R.Mrvelj, ESG AB- |  |  |
| COMMENT | string | EGS_EL [67] |  |  |
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

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

_No arguments._

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

### STATUS_EGS_DIAGNOSE_TESTJOB

Job fuer EGS Diagnosetest UDS

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_DATEN | int | Anzahl Datenbytes |
| DATEN_1 | int | Daten Byte 1 |
| DATEN_2 | int | Daten Byte 2 |
| DATEN_3 | int | Daten Byte 3 |
| DATEN_4 | int | Daten Byte 4 |
| DATEN_5 | int | Daten Byte 5 |
| DATEN_6 | int | Daten Byte 6 |
| DATEN_7 | int | Daten Byte 7 |
| DATEN_8 | int | Daten Byte 8 |
| DATEN_9 | int | Daten Byte 9 |
| DATEN_10 | int | Daten Byte 10 |
| DATEN_11 | int | Daten Byte 11 |
| DATEN_12 | int | Daten Byte 12 |

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_1

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x10 )

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_2

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x11 )

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_3

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x12 )

_No arguments._

### STATUS_AZG_KENNUNG

Status Substrattemperatur UDS: $22 ReadDataByCommonIdentifier UDS: $4630 Modus  : Default

_No arguments._

### BK_LESEN

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $5000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

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

### ARG_0X4010

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | low | char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4011

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | char | - | - | - | - | - | - | - | Übergabewert wird nicht ausgewertet |

### ARG_0X4150

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | low | char | - | - | - | - | - | - | - | Uebergabewert nur 0 |

### ARG_0X4645

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4886

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4887

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4888

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4889

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | - | char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0XDA15

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | 0-n | - | char | - | TAB_STEUERN_LERNFKT_RUECKSETZEN | - | - | - | - | - | - |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
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
| 0x44D2D6 | Abtriebsdrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x44D2D2 | Abtriebsdrehzahlsensor: Kurzschluss nach Plus | 0 |
| 0x44DF48 | Abtriebsdrehzahlsensor: unzulässige Abweichung der Abtriebsdrehzahl von Fahrzeuggeschwindigkeit über CAN und von der internen Turbinendrehzahl | 0 |
| 0x44E1A1 | Anfahrkupplung IAE heiß | 0 |
| 0x44E181 | Anfahrkupplung IAE schließt nicht | 0 |
| 0x44E191 | Anfahrkupplung IAE schließt unerwartet | 0 |
| 0x44E171 | Anfahrkupplung IAE öffnet nicht | 0 |
| 0xCF1523 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26A3 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF20A3 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16B3 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18C3 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF1521 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft fehlt, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26A1 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft fehlt, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF20A1 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16B1 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18C1 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF19A1 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender Kombi (FA-CAN) | 1 |
| 0xCF1522 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26A2 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF20A2 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16B2 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18C2 | Botschaft-Gruppenfehler 1 (Auswirkung im Fahrbetrieb: deutlich) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF1533 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26B3 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF20B3 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16C3 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18D3 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF1531 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft fehlt, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26B1 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft fehlt, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF20B1 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16C1 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18D1 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF19B1 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender Kombi (FA-CAN) | 1 |
| 0xCF1532 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26B2 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF20B2 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16C2 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18D2 | Botschaft-Gruppenfehler 2 (Auswirkung im Fahrbetrieb: möglich) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF1543 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26C3 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF2803 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft Prüfsumme falsch, Empfänger EGS (A-CAN), Sender SME (A-CAN) | 1 |
| 0xCF20C3 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16D3 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18E3 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF1541 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26C1 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF2801 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (A-CAN), Sender SME (A-CAN) | 1 |
| 0xCF20C1 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16D1 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18E1 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF19C1 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft fehlt, Empfänger EGS (FA-CAN), Sender Kombi (FA-CAN) | 1 |
| 0xCF1542 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender DME/DDE (A-CAN) | 1 |
| 0xCF26C2 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender EME (A-CAN) | 1 |
| 0xCF2802 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft nicht aktuell, Empfänger EGS (A-CAN), Sender SME (A-CAN) | 1 |
| 0xCF20C2 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender CAS/FEM/JBBF/FRMFA (FA-CAN) | 1 |
| 0xCF16D2 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender DSC (FA-CAN) | 1 |
| 0xCF18E2 | Botschaft-Gruppenfehler 3 (Auswirkung im Fahrbetrieb: keine) Botschaft nicht aktuell, Empfänger EGS (FA-CAN), Sender ICM (FA-CAN) | 1 |
| 0xCF2103 | Botschaft (Bedienung Schaltpaddel, 0x207) Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender FEM/SZL_LWS/SCR (FA-CAN) | 1 |
| 0xCF2101 | Botschaft (Bedienung Schaltpaddel, 0x207) fehlt, Empfänger EGS (FA-CAN), Sender FEM/SZL_LWS/SCR (FA-CAN) | 1 |
| 0xCF2102 | Botschaft (Bedienung Schaltpaddel, 0x207) nicht aktuell, Empfänger EGS (FA-CAN), Sender FEM/SZL_LWS/SCR (FA-CAN) | 1 |
| 0xCF1461 | Botschaft (Diagnose OBD Motor, 397) für (EGS_EL, A-CAN und FA-CAN) von (DME1, A-CAN und FA-CAN) fehlt | 1 |
| 0xCF1511 | Botschaft (Drehmoment Getriebe Hybrid, 141)  für (DME1, FA-CAN) von (EGS_EL, FA-CAN) Signal (ERRT_HYB_CTR_UNIT)   Notlauf aktiv  fehlerhaft | 0 |
| 0xCF2501 | Botschaft (Status Anhänger, 0x2E4) fehlt, Empfänger EGS (FA-CAN), Sender AHM (FA-CAN) | 1 |
| 0xCF17A3 | Botschaft (Status Gangwahlschalter, 0x197) Prüfsumme falsch, Empfänger EGS (A-CAN), Sender GWS (A-CAN) | 1 |
| 0xCF17B3 | Botschaft (Status Gangwahlschalter, 0x197) Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender GWS (FA-CAN) | 1 |
| 0xCF17A1 | Botschaft (Status Gangwahlschalter, 0x197) fehlt, Empfänger EGS (A-CAN), Sender GWS (A-CAN) | 1 |
| 0xCF17B1 | Botschaft (Status Gangwahlschalter, 0x197) fehlt, Empfänger EGS (FA-CAN), Sender GWS (FA-CAN) | 1 |
| 0xCF17A2 | Botschaft (Status Gangwahlschalter, 0x197) nicht aktuell, Empfänger EGS (A-CAN), Sender GWS (A-CAN) | 1 |
| 0xCF17B2 | Botschaft (Status Gangwahlschalter, 0x197) nicht aktuell, Empfänger EGS (FA-CAN), Sender GWS (FA-CAN) | 1 |
| 0xCF2303 | Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297) Prüfsumme falsch, Empfänger EGS (FA-CAN), Sender ACSM (FA-CAN) | 1 |
| 0xCF2301 | Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297) fehlt, Empfänger EGS (FA-CAN), Sender ACSM (FA-CAN) | 1 |
| 0xCF2302 | Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297) nicht aktuell, Empfänger EGS (FA-CAN), Sender ACSM (FA-CAN) | 1 |
| 0x44E357 | CAN Rücklesen: Solldrehzahl EM (A-CAN; RQ_TORQ_CRSH_GRB ) | 1 |
| 0x44E367 | CAN Rücklesen: Solldrehzahl VM (FA-CAN; TAR_DT_GRB_MOT_1) | 1 |
| 0x44E3D7 | CAN Rücklesen: minimale Drehzahl EM (A-CAN; ST_GRB_ECU, ST_GRB_ECU) | 0 |
| 0x44E3D1 | CAN Rücklesen: minimale Drehzahl EM (FA-CAN; ST_GRB_HYB, ST_GRB_ECU) | 1 |
| 0x44E003 | Drehmoment-Sensor: Problem am Sensor (Fehler nur für die Entwicklung relevant; Fehler entspricht dem KFC_ENGSIG, FUNCSPEC02) | 0 |
| 0x44E002 | Drehmoment-Sensor: Problem innerhalb der EGS (Fehler nur für die Entwicklung relevant; Fehler entspricht dem KFC_ENGSIG, FUNCSPEC02) | 0 |
| 0x44E2B7 | Drehzahlanforderung Elektromotor: minimale Drehzahlvorgabe unplausibel | 0 |
| 0x44E2A7 | Drehzahlanforderung Elektromotor: unplausibel | 0 |
| 0x44E297 | Drehzahlanforderung Verbrennungsmotor: unplausibel | 0 |
| 0x44E1E2 | Drehzahlen: CAN-Rücklesefehler im Signal RPM_GRDT_TURB / RPM_GRDT_NEGL in Botschaft DT_GRDT (1AFh) auf A-CAN | 1 |
| 0x44E1E1 | Drehzahlen: CAN-Rücklesefehler im Signal RPM_GRDT_TURB / RPM_GRDT_NEGL in Botschaft DT_GRDT (1AFh) auf FA-CAN | 1 |
| 0x44CEE6 | EDS-Logik: Aktuatoransteuerung / Sollposition (D/R) unplausibel | 0 |
| 0x44E0E2 | EDS-Logik: Aktuatoransteuerung gegenüber Sollposition P unplausibel | 0 |
| 0x44E062 | EDS-Logik: R-Gangsicherung bei zu hoher Fahrzeuggeschwindigkeit | 0 |
| 0x44E0D2 | EDS-Logik: unerlaubtes Einlegen von P bei unplausibler Fahrzeuggeschwindigkeit | 0 |
| 0x44DF01 | EDS-Logik: Überbestimmter Radsatz | 0 |
| 0x44D251 | EGS Spannungsversorgung: Mindestspannung unterschritten (<6,5V) | 1 |
| 0x44D1D1 | EGS Spannungsversorgung: Mindestspannung unterschritten (<7V) | 1 |
| 0x44D1F1 | EGS Spannungsversorgung: Spannung zu groß (>17V) | 1 |
| 0x44D1E1 | EGS Spannungsversorgung: Spannung zu klein (7 bis 9V) | 1 |
| 0x44D207 | Endstufen Spannungsversorgung: FET läßt sich aufgrund defekter HW nicht einschalten oder SW-Fehler im Modul UDRMV | 0 |
| 0x44D201 | Endstufen Spannungsversorgung: Kurzschluss nach Masse | 0 |
| 0x44D202 | Endstufen Spannungsversorgung: Kurzschluss nach Plus | 0 |
| 0x44D203 | Endstufen Spannungsversorgung: Unterbrechung | 0 |
| 0x44E152 | Fahrzeuggeschwindigkeit: Blockierbremsung bei höherer Geschwindigkeit über eine Gradientenüberschreitung am Abtriebsdrehzahlsignal bei ausgefallener ABS-Funktion erkannt | 1 |
| 0x44E237 | Fehler in der Berechung der virtuellen Turbinendrehzahl: Level 2 | 0 |
| 0x44DFD2 | Fehlverbau: Inkompatibilität zwischen hydraulischem Schaltgerät und Steuergeräte-Software | 0 |
| 0x44E387 | Getriebeaufnahmemoment: Moment ist nach interner Verarbeitung zu groß | 0 |
| 0x44D671 | Hochtemperaturbetriebs-Anforderung: Level 1 | 1 |
| 0x44D672 | Hochtemperaturbetriebs-Anforderung: Level 2 | 1 |
| 0x44D673 | Hochtemperaturbetriebs-Anforderung: Level 1 | 1 |
| 0x44D674 | Hochtemperaturbetriebs-Anforderung: Level 2 | 1 |
| 0x44D675 | Hochtemperaturbetriebs-Anforderung: Level 3 | 1 |
| 0x44E4C1 | Hybridablaufsteuerung (HAS): Ablaufsteuerung kann nicht weiterschalten, Elektromotor-Istdrehzahl ist zu klein | 1 |
| 0xCF3841 | Hybridablaufsteuerung (HAS): HAS Sammelfehler | 0 |
| 0x44E4E1 | Hybridablaufsteuerung (HAS): Überwachung des max. Summenmoments auf unzulässige Verzögerung | 0 |
| 0x44E4D1 | Hybridablaufsteuerung (HAS): Überwachung EM-Istdrehzahl zur Sicherstellung der Ölversorgung | 1 |
| 0x44E4B1 | Hybridablaufsteuerung (HAS):: Ablaufsteuerung kann nicht weiterschalten,  Trennkupplung (K0) Differenzdrehzahl ist zu groß | 1 |
| 0x44E401 | Integrierte elektrische Pumpe (IEP): dauernder Ausfall (Ausbleiben der zyklischen Rückmeldung der Lebenderkennung) | 0 |
| 0x44E271 | Integrierte elektrische Pumpe (IEP): dauernder Ausfall (HW-Fehler) | 0 |
| 0x44CD71 | Integrierte elektrische Pumpe (IEP): Kurzschluss nach Masse | 0 |
| 0x44CD76 | Integrierte elektrische Pumpe (IEP): Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD72 | Integrierte elektrische Pumpe (IEP): Kurzschluss nach Plus | 0 |
| 0x44CD73 | Integrierte elektrische Pumpe (IEP): Unterbrechung | 0 |
| 0x44DCE2 | Kollision von Maßnahmen der Prioritätsklasse 2 (mehr als ein elektrisches Notprogramm gleichzeitig aktiv) | 0 |
| 0x44DCE1 | Kollision von Maßnahmen der Prioritätsklasse 3 (Raddrehzahlen und Abbtriebsdrehzahl nicht mehr verfügbar) | 0 |
| 0x44E571 | Kupplungsüberhitzungsschutz Stufe 3 | 0 |
| 0x44E561 | Kupplungsüberhitzungsschutz Stufe 4 | 0 |
| 0x44D331 | Lenkradtipp: Analog Eingang Kurzschluss nach Masse | 1 |
| 0x44D332 | Lenkradtipp: Analog Eingang Kurzschluss nach Plus | 1 |
| 0x44D334 | Lenkradtipp: Analog Eingang unplausibler elektrischer Status | 1 |
| 0x44D335 | Lenkradtipp: CAN Paddle Signal ungültig | 1 |
| 0x44E337 | Level 2: Trennkupplung K0: Ungewollter Kraftschluss | 0 |
| 0x44E341 | Level 2: Komplementüberwachung der minimalen EM Drehzahl | 1 |
| 0x44DE64 | Mikrocontroller Komponenten: Die Level1- und Level2-Implementierung einer sicherheitskritischen Funktion (des HW Lieferanten) liefern unterschiedliche Ergebnisse zurück | 0 |
| 0x44DE61 | Mikrocontroller Komponenten: Messungen aus Analog Digital Converter sind nicht mehr plausibel, Fehler in Kommunikation zwischen CPU / ASICs; Fehler in ECC-Logik,  Fehler in Register Check | 0 |
| 0x44D653 | Motoreingriff: Anforderung ist nach interner Verarbeitung in der Signalverarbeitung unplausibel zu hoch | 0 |
| 0x44D651 | Motoreingriff: Schaltablaufsteuerung - Komplement unplausibel oder Gradient unplausibel oder unerlaubter Positiver Motoreingriff | 0 |
| 0x44E257 | N6-Drehzahlsensor: Drehrichtung ungültig | 0 |
| 0x44E256 | N6-Drehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x44E252 | N6-Drehzahlsensor: Kurzschluss nach Plus | 0 |
| 0x44E412 | Negativer Motoreingriff: Anforderung ist nach interner Verarbeitung in der Signalverarbeitung unplausibel zu hoch | 0 |
| 0x44E417 | Negativer Motoreingriff: Schaltablaufsteuerung - unplausibel starke Intensität oder unerlaubter negativer Motoreingriff | 0 |
| 0x44E411 | Negativer Motoreingriff: Signalaufbereitung - Komplement unplausibel | 0 |
| 0x44D321 | Parksperre: fehlerhaft ausgelegt | 0 |
| 0x44D311 | Parksperre: fehlerhaft eingelegt | 0 |
| 0x44D322 | Parksperre: nach Ablauf Timer fehlerhaft ausgelegt | 0 |
| 0x44D371 | Parksperrenmagnet defekt | 0 |
| 0x44D381 | Parksperrenmagnet defekt bei ABS-Ausfall | 0 |
| 0x44DEE2 | Positionsanzeige: Fehler im EGS-internen Signalverlauf in Botschaft DT_DISP_GRDT (3FDh) | 0 |
| 0x44DED1 | Positionsanzeige: CAN-Rücklesefehler in Botschaft DT_DISP_GRDT (3FDh) auf dem A-CAN | 0 |
| 0x44DED2 | Positionsanzeige: CAN-Rücklesefehler in Botschaft DT_DISP_GRDT (3FDh) auf dem FA-CAN | 0 |
| 0x44D663 | Positionsplausibilisierung: Schalten von N oder P nach D oder R ohne Fahrerwunsch erkannt (mehr als 2 Kupplungen druckbeaufschlagt und Störzähler von Kupplung C am höchsten) | 0 |
| 0x44D664 | Positionsplausibilisierung: Schalten von N oder P nach D oder R ohne Fahrerwunsch erkannt (mehr als 2 Kupplungen druckbeaufschlagt und Störzähler von Kupplung D am höchsten) | 0 |
| 0x44D665 | Positionsplausibilisierung: Schalten von N oder P nach D oder R ohne Fahrerwunsch erkannt (mehr als 2 Kupplungen druckbeaufschlagt und Störzähler von Kupplung E am höchsten) | 0 |
| 0x44D661 | Positionsplausibilisierung: Schalten von N oder P nach D oder R ohne Fahrerwunsch erkannt (mehr als 2 Kupplungen druckbeaufschlagt) | 0 |
| 0x44D304 | Positionssensor: Parksperre zu lange in Zwischenposition | 0 |
| 0x44D305 | Positionssensor: elektrischer Fehler an L3 | 0 |
| 0x44D306 | Positionssensor: elektrischer Fehler an L4 | 0 |
| 0x44D303 | Positionssensor: unplausibel | 0 |
| 0x44D341 | Positionsventil: offen verklemmt in Druckversorgungsstellung | 0 |
| 0x44D6B2 | Positiver Motoreingriff: CAN-Rücklesefehler auf A-CAN | 0 |
| 0x44D6B1 | Positiver Motoreingriff: CAN-Rücklesefehler auf FA-CAN | 0 |
| 0x44DD04 | Programmierung nicht möglich: EWS nicht frei gegeben | 1 |
| 0x44DD03 | Programmierung nicht möglich: Fahrzeuggeschwindigkeit oder Abtrieb > Schwelle | 1 |
| 0x44DD01 | Programmierung nicht möglich: Getriebe nicht in P oder N | 1 |
| 0x44DD02 | Programmierung nicht möglich: Klemme 15 aus | 1 |
| 0x44DD05 | Programmierung nicht möglich: Verbrennungsmotor an oder MSA-Stopp oder Turbinendrehzahl > Schwelle | 1 |
| 0x44D611 | Reset: Unterspannung während Fahrt | 1 |
| 0xCF2CA1 | Schnittstelle DME/DDE (Anforderung Betriebsart Getriebestrang FAS, 0xA7) Signal ungültig ODER Schnittstelle DME/DDE (Soll Betriebsart Antriebstrang Getriebe, 0xA7) Signal ungültig ODER Schnittstelle DSC (Status_Bremsung_Fahrer, 0x173h) | 1 |
| 0xCF3192 | Schnittstelle ACSM: (Status Gurtschloß Schalter Fahrer, 0x297) Signal ungültig | 1 |
| 0xCF2FA1 | Schnittstelle CAS/FEM: (Status Türkontakt Fahrertür, 0x2FC - Status Türkontakt Fahrertür Abgesichert, 0x1E1) Signal ungültig | 1 |
| 0xCF2C21 | Schnittstelle DME/DDE (Drehzahl): (Ist_Drehzahl_Motor_Kurbelwelle  0xA5) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals (Qualifier_Ist_Drehzahl_Motor_Kurbelwelle, 0xA5) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals | 1 |
| 0xCF2CE1 | Schnittstelle DME/DDE (Fahrpedal): (AVL_ANG_ACPD, 0xD9) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals | 1 |
| 0x44DEF1 | Schnittstelle DME/DDE (Motorleerlaufsolldrehzahl): (TAR_RPM_IDLG_DRV/TAR_RPM_IDLG_DRV_EXT, 0x3FB) Signal ungültig | 1 |
| 0xCF2C01 | Schnittstelle DME/DDE (Soll Betriebsart Antriebstrang Getriebe, 0xA7) Signal ungültig | 1 |
| 0xCF2D01 | Schnittstelle DME/DDE: (Status OBD Zyklus, 0x397) Signal ungültig | 1 |
| 0x44E4A2 | Schnittstelle DME/DDE: Zwangshochschaltung aufgrund Anforderung thermischer Motorschutz oder Signal ungültig (Status Schalter Warmlauf Antrieb, 0x3FB) | 1 |
| 0xCF2F02 | Schnittstelle DSC (Raddrehzahl): (AVL_RPM_WHL_xxx, 0x254) Signal ungültig | 1 |
| 0x44D2E1 | Schnittstelle DSC (Raddrehzahl): unzulässige Abweichung der Raddrehzahl (AVL_RPM_WHL_xxx, 0x254) von Abtriebsdrehzahl und Turbinendrehzahl | 1 |
| 0xCF2E01 | Schnittstelle DSC: (Ist Bremsmoment Summe, 0xEF) Signal ungültig | 1 |
| 0xCF3501 | Schnittstelle DSC: (Status Bremsung Fahrer, 0x173) Signal ungültig | 1 |
| 0xCF31C1 | Schnittstelle EME/DME (Motordrehzahl): Motorüberdrehzahl | 0 |
| 0xCF3141 | Schnittstelle GWS: (Bedienung Getriebewahltaster P 1 2 / Bedienung Getriebewahltaster P 2 2 / Bedienung Gangwahlschalter Taster Parken, 0x197) Signal ungültig | 1 |
| 0xCF1701 | Schnittstelle GWS: (Status Gangwahlschalter, 0x197) Totalausfall der Kommunikation | 1 |
| 0xCF3102 | Schnittstelle GWS: (A-CAN) (OP_GWS_REL/OP_GWS, 0x197): Signal ungültig | 1 |
| 0xCF3101 | Schnittstelle GWS: (FA-CAN) (OP_GWS_REL/OP_GWS, 0x197): Signal ungültig | 1 |
| 0xCF3104 | Schnittstelle GWS: Komplementfehler des GWS A-CAN Signals | 1 |
| 0xCF3103 | Schnittstelle GWS: Komplementfehler des GWS FA-CAN Signals | 1 |
| 0x44D215 | Sensor Spannungsversorgung: Kurzschluss nach Masse oder Unterbrechung oder Spannung zu klein | 0 |
| 0x44D214 | Sensor Spannungsversorgung: Kurzschluss nach Plus / Spannung zu gross oder Sensorversorgung konnte nicht zur Reinitialisierung der Sensoren abgeschaltet werden | 0 |
| 0x44E142 | Sensorik: Ausfall von mindestens zwei Drehzahlen (Abtriebsdrehzahlsensor, Turbinendrehzahlsensor oder Raddrehzahl) | 0 |
| 0x44E141 | Sensorik: Doppelausfall von Substrattemperatursensor und Öltemperatursensor | 0 |
| 0x44E143 | Sensorik: Doppelausfall von Turbinendrehzahlsensor und Motordrehzahl | 0 |
| 0x44E144 | Sensorik: Unzulässige Abweichung von Abtriebsdrehzahl und Raddrehzahl | 0 |
| 0x44E145 | Sensorik: Unzulässige Abweichung von Abtriebsdrehzahl und Turbinendrehzahl bei noch nicht angelernter Hinterachse | 0 |
| 0x44D645 | Shift-By-Wire: Angezeigte Position ungleich eingelegter Position (N oder P statt D oder R / R statt D oder D statt R) | 0 |
| 0x44D646 | Shift-By-Wire: Falsche Datenapplikation | 0 |
| 0x44D642 | Shift-By-Wire: Falsche Weitergabe der Positionsvorgabe an den Schaltablauf | 0 |
| 0x44D643 | Shift-By-Wire: Positionswechsel von D/P/N nach R oder R/P/N nach D ohne Fahrerwunsch | 0 |
| 0x44D644 | Shift-By-Wire: kein Positionswechsel von N nach P / Auto-P oder R/D nach P oder R/D nach N trotz Fahrerwunsch | 0 |
| 0x44DCE4 | Sollstromvorgabe zu groß (OUT0, OUT1, OUT2, OUT3, OUT4, OUT5, OUT6) | 0 |
| 0x44E227 | Substrattemperatursensor: Substrattemperatur CG130 zu Substrattemperatur LM71 und Öltemperatur unplausibel | 0 |
| 0x44E217 | Substrattemperatursensor: Substrattemperatur LM71 zu Substrattemperatur CG130 und Öltemperatur unplausibel | 0 |
| 0x44D3F1 | Substrattemperatursensor: Übertemperatur im Getriebe (ca. 145°C) | 1 |
| 0x44D3E7 | Substrattemperatursensor: CG130 - Plausibilisierungsfehler der Chip internen Komparatorausgänge | 0 |
| 0x44D3E5 | Substrattemperatursensor: CG130 - Unterschreitung untere Schwelle | 0 |
| 0x44D3E6 | Substrattemperatursensor: CG130 - defekt | 0 |
| 0x44D3E4 | Substrattemperatursensor: CG130 - Überschreitung obere Schwelle | 0 |
| 0x44D407 | Substrattemperatursensor: LM71 - Timeout während Initialisierung oder allgemeiner Sensorfehler | 0 |
| 0x44D405 | Substrattemperatursensor: LM71 - Unterschreitung untere Schwelle | 0 |
| 0x44D406 | Substrattemperatursensor: LM71 - allgemeiner Sensorfehler | 0 |
| 0x44D404 | Substrattemperatursensor: LM71 - Überschreitung obere Schwelle | 0 |
| 0x44DFF2 | SysFunktion: Abbruch des Services ’Codierdaten/CPS schreiben’ (WriteDataByIdentifier) | 1 |
| 0x44DFF4 | SysFunktion: Fehlgeschlagener Vergleich zwischen CPS (Codierprüfstempel) und VIN (VehicleIdentifcationNumber) | 1 |
| 0x02FF18 | SysFunktion: Für Testzwecke der DM Testfunktion (ApplDcmRoutineControlDmTest). Wird gesetzt wenn: Diagnose (0x31) DIAG_RID_0304_DM_TEST mit reqData = 0 | 1 |
| 0xCF0BFF | SysFunktion: Für Testzwecke der DM Testfunktion (ApplDcmRoutineControlDmTest). Wird gesetzt wenn: Diagnose (0x31) DIAG_RID_0304_DM_TEST mit reqData = 1 | 1 |
| 0x44DFF3 | SysFunktion: Signaturprüfung der Nettocodierdaten durch das Steuergerät fehlgeschlagen | 1 |
| 0x44DFF6 | SysFunktion: Steuergerät neu programmiert und noch nicht codiert ODER Steuergerät arbeitet mit Default-Nettocodierdaten | 1 |
| 0x021800 | SysFunktion: VSM-Energy-Mode (oder auch Operation-Mode) ungleich NORMAL | 1 |
| 0x44E327 | Trennkupplung K0: zu heiß | 0 |
| 0x44E482 | Trennkupplung K0: Funktion eingeschränkt (Schließt nicht) | 0 |
| 0x44E492 | Trennkupplung K0: Funktion eingeschränkt (Öffnet nicht) | 0 |
| 0x44E2D1 | Trennkupplung K0: unzulässiger Schlupf Stufe 1 | 0 |
| 0x44E2E1 | Trennkupplung K0: unzulässiger Schlupf Stufe 2 | 0 |
| 0x44E2F1 | Trennkupplung K0: unzulässiger Schlupf Stufe 3 | 0 |
| 0x44D3D1 | Öltemperatursensor: Kurzschluss nach Masse | 0 |
| 0x44D3D2 | Öltemperatursensor: Kurzschluss nach Plus | 0 |
| 0x44E1F7 | Öltemperatursensor: Temperatursprung erkannt d.h. Temperaturdifferenz zwischen zwei Messungen größer als der zulässige Bereich | 0 |
| 0x44D3D8 | Öltemperatursensor: Timeout während Initialisierung oder elektrischer Nebenschluss | 0 |
| 0x44D3D3 | Öltemperatursensor: Unterbrechung | 0 |
| 0x44E207 | Öltemperatursensor: Öltemperatur zu Substrattemperatur LM71 und Substrattemperatur CG130 unplausibel | 0 |
| 0x44E432 | Übersetzungsüberwachung: Fehler Integrierte elektrische Pumpe (IEP) | 0 |
| 0x44D0D1 | Übersetzungsüberwachung: Kupplung A unplausibel | 0 |
| 0x44D0E1 | Übersetzungsüberwachung: Kupplung B unplausibel | 0 |
| 0x44D0F1 | Übersetzungsüberwachung: Kupplung C unplausibel | 0 |
| 0x44D101 | Übersetzungsüberwachung: Kupplung D unplausibel | 0 |
| 0x44D111 | Übersetzungsüberwachung: Kupplung E unplausibel | 0 |
| 0x44D121 | Übersetzungsüberwachung: Kupplungen A und B unplausibel | 0 |
| 0x44D131 | Übersetzungsüberwachung: Kupplungen A und C unplausibel | 0 |
| 0x44D141 | Übersetzungsüberwachung: Kupplungen A und D unplausibel | 0 |
| 0x44D151 | Übersetzungsüberwachung: Kupplungen A und E unplausibel | 0 |
| 0x44D061 | Übersetzungsüberwachung: Kupplungen A, B und C unplausibel | 0 |
| 0x44CFC1 | Übersetzungsüberwachung: Kupplungen A, B und D unplausibel | 0 |
| 0x44D071 | Übersetzungsüberwachung: Kupplungen A, B und E unplausibel | 0 |
| 0x44D1C1 | Übersetzungsüberwachung: Kupplungen A, C und D unplausibel | 0 |
| 0x44CFB1 | Übersetzungsüberwachung: Kupplungen A, D und E unplausibel | 0 |
| 0x44D1A1 | Übersetzungsüberwachung: Kupplungen B und C unplausibel | 0 |
| 0x44D161 | Übersetzungsüberwachung: Kupplungen B und D unplausibel | 0 |
| 0x44D171 | Übersetzungsüberwachung: Kupplungen B und E unplausibel | 0 |
| 0x44D0A1 | Übersetzungsüberwachung: Kupplungen B, C und D unplausibel | 0 |
| 0x44D081 | Übersetzungsüberwachung: Kupplungen B, C und E unplausibel | 0 |
| 0x44D091 | Übersetzungsüberwachung: Kupplungen B, D und E unplausibel | 0 |
| 0x44D191 | Übersetzungsüberwachung: Kupplungen C und D unplausibel | 0 |
| 0x44D181 | Übersetzungsüberwachung: Kupplungen C und E unplausibel | 0 |
| 0x44D0B1 | Übersetzungsüberwachung: Kupplungen C, D und E unplausibel | 0 |
| 0x44D1B1 | Übersetzungsüberwachung: Kupplungen D und E unplausibel | 0 |
| 0x44CFE1 | Übersetzungsüberwachung: Schaltung 1 -> x unplausibel | 0 |
| 0x44CFF1 | Übersetzungsüberwachung: Schaltung 2 -> x unplausibel | 0 |
| 0x44D001 | Übersetzungsüberwachung: Schaltung 3 -> x unplausibel | 0 |
| 0x44D011 | Übersetzungsüberwachung: Schaltung 4 -> x unplausibel | 0 |
| 0x44D021 | Übersetzungsüberwachung: Schaltung 5 -> x unplausibel | 0 |
| 0x44D031 | Übersetzungsüberwachung: Schaltung 6 -> x unplausibel | 0 |
| 0x44D041 | Übersetzungsüberwachung: Schaltung 7 -> x unplausibel | 0 |
| 0x44D051 | Übersetzungsüberwachung: Schaltung 8 -> x unplausibel | 0 |
| 0x44E032 | Übersetzungsüberwachung: alle Kupplungen unplausibel | 0 |
| 0x44E3E1 | Überwachung der Motorkühlwassertemperatur: (Temperatur_Motor_Antrieb, 0x3F9) Signal ungültig | 1 |
| 0xCF3828 | Überwachung  Motorsignale (Einzelmomente): (Ist_Drehmoment_Motorstart, 0x8E) Signal ungültig (Ist_Drehmoment_E-Motor_1_P2, 0x90) Signal ungültig (P2_Soll_Drehmoment_E-Motor_1_Motorsteuerung, 0x113) Signal ungültig | 1 |
| 0xCF35B8 | Überwachung  Motorsignale (Getriebeeingang): (Ist_Drehzahl_E-Motor_1_P2, 0x90) Signal ungültig und K0 offen | 1 |
| 0xCF35C8 | Überwachung  Motorsignale (Getriebeeingang):(Ist_Drehzahl_E-Motor_1_P2, 0x90) Signal ungültig und K0 geschlossen | 1 |
| 0xCF3538 | Überwachung Motorsignale (Einzelmomente): (Soll_Drehmoment_Verbrennungsmotor_unbegrenzt, 0x18E) Signal ungültig | 1 |
| 0xCF3838 | Überwachung Motorsignale (Summenmomente): (Ist_Drehmoment_Kurbelwelle, 0xA5) Signal ungültig (Ist_Drehmoment_Kurbelwelle_DME/EGS, 0xA5) Signal ungültig | 1 |
| 0xCF3818 | Überwachung Motorsignale zur Dokumentation: (Ist_Drehmoment_E-Motor_1_P2, 0x90) Signal ungültig (Ist_Drehmoment_Kurbelwelle_Minimal, 0xA6) Signal ungültig (Ist_Drehmoment_Kurbelwelle_Fahrerwunsch_FAS, 0xA7) Signal ungültig | 1 |
| 0x44E541 | Überwachung Zündungssignal: Status_Klemme, 0x12F Signal unglültig | 1 |
| 0x44E3F1 | Überwachung der Fahrdynamikregelung: (Qualifier_Funktion_FDR, 0x173) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals (Qualifier_Funktion_ABS, 0x173) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals Qualifier_Funktion_ASC, 0x173) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals | 1 |
| 0xCF16E2 | Überwachung der Fahrdynamikregelung: (Qualifier_Funktion_FDR, 0x173) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals (Qualifier_Funktion_ABS, 0x173) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals Qualifier_Funktion_ASC, 0x173) Signal ungültig oder Signal-Qualifier signalisiert eine schlechte Qualität des Nutzsignals | 1 |
| 0xCF14D1 | CAN Rücklesen: Betriebsartumschaltung Momentensteuerung/Drehzahlsteuerung der DME durch EGS (A-CAN; RQ_TORQ_CRSH_GRB) | 1 |
| 0x44E511 | CAN: (FA-CAN) CAN-Rücklesefehler -   Notlauf aktiv | 0 |
| 0xCF0486 | CAN: (A-CAN) Baustein ausser Betrieb oder elektrischer Fehler | 1 |
| 0xCF047F | CAN: (A-CAN) Kommunikationsfehler | 1 |
| 0x44E267 | CAN: (A-CAN) CAN-Rücklesefehler - Negativer Motoreingriff (Status Anforderung Drehmoment Getriebe / Soll Drehmoment Kurbelwelle Schnell, 0xB0) | 0 |
| 0xCF040A | CAN: (FA-CAN) Baustein ausser Betrieb oder elektrischer Fehler | 1 |
| 0xCF0403 | CAN: (FA-CAN) Kommunikationsfehler | 1 |
| 0x44E521 | CAN: (FA-CAN) CAN-Rücklesefehler - Negativer Motoreingriff (Status Anforderung Drehmoment Getriebe / Soll Drehmoment Kurbelwelle Schnell, 0xB0) | 0 |
| 0x44CCD7 | EDS A: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CCD1 | EDS A: Kurzschluss nach Masse | 0 |
| 0x44CCD6 | EDS A: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CCD2 | EDS A: Kurzschluss nach Plus | 0 |
| 0x44CCD4 | EDS A: Stromüberwachung hat zu großen Wert erkannt | 0 |
| 0x44CCD5 | EDS A: Stromüberwachung hat zu kleinen Wert während Schaltung erkannt | 0 |
| 0x44CCD3 | EDS A: Unterbrechung | 0 |
| 0x44CCD9 | EDS A: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CCD8 | EDS A: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CCF7 | EDS B: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CCF1 | EDS B: Kurzschluss nach Masse | 0 |
| 0x44CCF6 | EDS B: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CCF2 | EDS B: Kurzschluss nach Plus | 0 |
| 0x44CCF4 | EDS B: Stromüberwachung hat zu großen Wert erkannt | 0 |
| 0x44CCF5 | EDS B: Stromüberwachung hat zu kleinen Wert während Schaltung erkannt | 0 |
| 0x44CCF3 | EDS B: Unterbrechung | 0 |
| 0x44CCF9 | EDS B: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CCF8 | EDS B: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CD17 | EDS C: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CD11 | EDS C: Kurzschluss nach Masse | 0 |
| 0x44CD16 | EDS C: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD12 | EDS C: Kurzschluss nach Plus | 0 |
| 0x44CD14 | EDS C: Stromüberwachung hat zu großen Wert während Schaltung erkannt | 0 |
| 0x44CD15 | EDS C: Stromüberwachung hat zu kleinen Wert erkannt | 0 |
| 0x44CD13 | EDS C: Unterbrechung | 0 |
| 0x44CD19 | EDS C: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CD18 | EDS C: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CCE7 | EDS D: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CCE1 | EDS D: Kurzschluss nach Masse | 0 |
| 0x44CCE6 | EDS D: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CCE2 | EDS D: Kurzschluss nach Plus | 0 |
| 0x44CCE4 | EDS D: Stromüberwachung hat zu großen Wert während Schaltung erkannt | 0 |
| 0x44CCE5 | EDS D: Stromüberwachung hat zu kleinen Wert erkannt | 0 |
| 0x44CCE3 | EDS D: Unterbrechung | 0 |
| 0x44CCE9 | EDS D: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CCE8 | EDS D: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CD07 | EDS E: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CD01 | EDS E: Kurzschluss nach Masse | 0 |
| 0x44CD06 | EDS E: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD02 | EDS E: Kurzschluss nach Plus | 0 |
| 0x44CD04 | EDS E: Stromüberwachung hat zu großen Wert während Schaltung erkannt | 0 |
| 0x44CD05 | EDS E: Stromüberwachung hat zu kleinen Wert erkannt | 0 |
| 0x44CD03 | EDS E: Unterbrechung | 0 |
| 0x44CD09 | EDS E: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CD08 | EDS E: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CD27 | EDS K0: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CD21 | EDS K0: Kurzschluss nach Masse | 0 |
| 0x44CD26 | EDS K0: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD22 | EDS K0: Kurzschluss nach Plus | 0 |
| 0x44CD24 | EDS K0: Stromüberwachung hat zu großen Wert während Schaltung erkannt | 0 |
| 0x44CD25 | EDS K0: Stromüberwachung hat zu kleinen Wert während Schaltung erkannt | 0 |
| 0x44CD23 | EDS K0: Unterbrechung | 0 |
| 0x44CD29 | EDS K0: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CD28 | EDS K0: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CD47 | EDS Pos: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CD41 | EDS Pos: Kurzschluss nach Masse | 0 |
| 0x44CD46 | EDS Pos: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD42 | EDS Pos: Kurzschluss nach Plus | 0 |
| 0x44CD43 | EDS Pos: Unterbrechung | 0 |
| 0x44CD49 | EDS Pos: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CD48 | EDS Pos: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44CD37 | EDS SYS: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CD31 | EDS SYS: Kurzschluss nach Masse | 0 |
| 0x44CD36 | EDS SYS: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD32 | EDS SYS: Kurzschluss nach Plus | 0 |
| 0x44CD34 | EDS SYS: Stromüberwachung hat zu großen Wert während Schaltung erkannt | 0 |
| 0x44CD35 | EDS SYS: Stromüberwachung hat zu kleinen Wert während Schaltung erkannt | 0 |
| 0x44CD33 | EDS SYS: Unterbrechung | 0 |
| 0x44CD39 | EDS SYS: dynamischer Nebenschluss - bei >=50mA Ansteuerung | 0 |
| 0x44CD38 | EDS SYS: statischer Nebenschluss - bei 0mA Ansteuerung | 0 |
| 0x44D5F1 | EEPROM: Daten können nicht gelesen werden (bei Initialisierung der EGS) oder es ist in Summe nur noch 1 Block beschreibbar | 0 |
| 0x44D5E1 | EPROM: Checksummenüberwachung hat im Daten-, Programm-, Boot-, Abgleichdaten- oder Fertigungsdatenblock eine Abweichung festgestellt | 0 |
| 0x44CD87 | MV Parksperrenhaltemagnet: Allgemeiner Fehler, Feedback Signal ist nicht plausibel | 0 |
| 0x44CD81 | MV Parksperrenhaltemagnet: Kurzschluss nach Masse | 0 |
| 0x44CD86 | MV Parksperrenhaltemagnet: Kurzschluss nach Masse, niederohmiger Nebenschluss nach Masse oder Unterbrechung | 0 |
| 0x44CD82 | MV Parksperrenhaltemagnet: Kurzschluss nach Plus | 0 |
| 0x44CD83 | MV Parksperrenhaltemagnet: Unterbrechung | 0 |
| 0x44E247 | N6-Drehzahlsensor:unzulässig Abweichung der N6-Drehzahl von Fahrzeuggeschwindigkeit über CAN und von der internen Abtriebsdrehzahl | 0 |
| 0x44DE51 | Safety Reaction Manager: Eine vom Errorhandler angeforderte Fehlerreaktion wurde nicht innerhalb einer definierten Zeitspanne ausgelöst. | 0 |
| 0x44D5D9 | Watchdog: Problem in der Watchdog-Kommunikation oder im externen Watchdog festgestellt | 0 |
| 0x44D5D3 | Watchdog: Probleme mit SW Komponenten festgestellt oder Checksummenfehler | 0 |
| 0x44D5D1 | Watchdog: Clocküberwachung - Frequenzabweichung erkannt | 0 |
| 0x44D5D6 | Watchdog: Output Safety System - Ein oder mehrere Testfälle des Endstufen-Tests haben während Initialisierung einen Fehler erkannt | 0 |
| 0x44D5D2 | Watchdog: Output Safety System - Reset aller EGS-Hardwarekomponenten durch Watchdog auf Sicherheitspfad, aufgrund fehlerhafter Watchdog Bedienung | 0 |
| 0x44D5D7 | Watchdog: Programm Flow Control hat eine Abweichung im Ablauf festgestellt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Rohwert Getriebeöl-Temperatur | °C | high | unsigned char | - | - | - | -40 |
| 0x0002 | Batteriespannung | V | high | unsigned char | - | 8 | 100 | - |
| 0x0003 | Zurückgelegte Kilometer [km] als Hex-Wert | km | - | 3 | - | - | - | - |
| 0x0004 | Systemzeit [s] als Hex-Wert | s | - | 4 | - | - | - | - |
| 0x0005 | Sensorversorgungsspannung | V | - | unsigned char | - | 8 | 100 | - |
| 0x0006 | Rohwert Chip1 - Temperatur | °C | - | unsigned char | - | - | - | -40 |
| 0x0007 | Spannung der Druckregler und Magentventile | V | - | unsigned char | - | 8 | 100 | - |
| 0x0008 | Fahrpedalwinkel | % | - | unsigned char | - | 39.21 | 100 | - |
| 0x0009 | Abtriebsdrehzahl-Rohwert | U/min | - | unsigned char | - | 32 | 1 | - |
| 0x000A | Turbinendrehzahl | U/min | - | unsigned char | - | 32 | 1 | - |
| 0x000B | Getriebeeingangsdrehzahl | U/min | - | unsigned char | - | 32 | 1 | - |
| 0x000C | Mittlere, toleranzabgeglichene, nicht fehlerbehandelte Drehzahl der Räder der aktiven Achse | U/min | - | unsigned int | - | - | - | - |
| 0x000D | Motoristmoment | Nm | - | unsigned char | - | 4 | 1 | -100 |
| 0x000E | Aktueller Gang | 0-n | - | 0xFF | istgang | - | - | - |
| 0x000F | Aktive Maßnahmen Byte 1 | - | - | unsigned char | - | - | - | - |
| 0x0010 | Aktive Maßnahmen Byte 2 | - | - | unsigned char | - | - | - | - |
| 0x0011 | Aktive Maßnahmen Byte 3 | - | - | unsigned char | - | - | - | - |
| 0x0012 | Aktive Maßnahmen Byte 4 | - | - | unsigned char | - | - | - | - |
| 0x0013 | Aktive Maßnahmen Byte 5 | - | - | unsigned char | - | - | - | - |
| 0x0014 | Aktive Maßnahmen Byte 6 | - | - | unsigned char | - | - | - | - |
| 0x0015 | Aktive Maßnahmen Byte 7 | - | - | unsigned char | - | - | - | - |
| 0x0016 | Aktive Maßnahmen Byte 8 | - | - | unsigned char | - | - | - | - |
| 0x0017 | EEPromcheck-Fehlerflags | 0-n | - | 0xFF | sck_Error | - | - | - |
| 0x0018 | Status Zündung | 0-n | - | 0xFF | st_KL15 | - | - | - |
| 0x0019 | Zeit seit Reset / KL15 ein | ms | - | unsigned char | - | 30 | 1 | - |
| 0x001A | Schaltungart | 0-n | - | 0xFF | sgt_Gear0 | - | - | - |
| 0x001B | Diskrete Eingänge | 0-n | - | 0xF0 | sgt_Inp0 | - | - | - |
| 0x001C | Ansteuerungszustand MVs | 0-n | - | 0xF0 | sgt_Out0 | - | - | - |
| 0x001D | Signalstatus für Signale von Getriebe/EGS | 0-n | - | 0xFF | sgt_Sig0 | - | - | - |
| 0x001E | Signalstatus für CAN-Signale von Motorsteuerung | 0-n | - | 0xF0 | sgt_Sig1 | - | - | - |
| 0x001F | Signalstatus für CAN-Signale von ASC/DSC/GWS | 0-n | - | 0xFF | sgt_Sig2 | - | - | - |
| 0x0020 | Rohwert Chip2 - Temperatur | °C | - | unsigned char | - | - | - | -40 |
| 0x0021 | Fahrdynamikregelung des Antiblockiersystem | 0-n | - | 0xFF | UW_TAB_0021 | - | - | - |
| 0x0022 | Fahrdynamikregelung | 0-n | - | 0xFF | UW_TAB_0022 | - | - | - |
| 0x0023 | Fahrdynamikregelung der Antriebsschlupferkennung | 0-n | - | 0xFF | UW_TAB_0023 | - | - | - |
| 0x0042 | angeforderter Motoreingriff der EGS | Nm | - | signed int | - | - | - | - |
| 0x0043 | Bestromung der EDS an OUT0...4 und OUT6 (Umrechnung:6*2 Zeichen,2 Zeichen entsprechen Hex-Wert. Hex-Wert muss mit 10 multipliziert werden. Einheit [mA]) | TEXT | - | 6 | - | - | - | - |
| 0x0044 | Signalstatus für CAN-Signale von FEM/CAS | 0-n | - | 0xFF | UW_TAB_0044 | - | - | - |
| 0x004A | Mittlere, toleranzabgeglichene, nicht fehlerbehandelte Drehzahl der Räder der aktiven Achse | U/min | - | unsigned char | - | 32 | - | - |
| 0x004B | KL15 Pin-Spannung | V | - | unsigned char | - | 0,08 | - | - |
| 0x004C | Roh Raddrehzahlwert FL | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x004D | Roh Raddrehzahlwert FR | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x004E | Roh Raddrehzahlwert RL | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x004F | Roh Raddrehzahlwert RR | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x0051 | Status der Überwachten Klemmen vom CANBUS und vom PIN | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x0052 | Vorgabe der HAS Ablaufvariante durch die HST | 0-n | - | 0x0F | UW_TAB_0052 | - | - | - |
| 0x0053 | Aktueller Ist-/Zielzustand Hybridablauf | 0/1 | - | 0xFF | - | - | - | - |
| 0x0054 | Solldrehzahlvorgabe an die E-Maschine | U/min | - | unsigned char | - | 32 | - | - |
| 0x0055 | E-Maschinenistmoment mit Getriebeeingriff | Nm | - | unsigned char | - | 4 | - | -500 |
| 0x0056 | Maximal zulässiges Motormoment für Hybridantriebsstrang (geführter Getriebeschutz) | Nm | - | unsigned char | - | 4 | - | -100 |
| 0x0057 | K0-Istmoment | Nm | - | unsigned char | - | 4 | - | -100 |
| 0x0058 | K0-Istzustand | 0-n | - | 0x0F | UW_TAB_0058 | - | - | - |
| 0x0059 | Physikalischer Zustand integriertes Anfahrelement | 0-n | - | 0x0F | UW_TAB_0059 | - | - | - |
| 0x005A | Istzustand elektrische Zusatzpumpe IEP | 0-n | - | 0x0F | UW_TAB_005A | - | - | - |
| 0x005B | ISTGANG und ZIELGANG | 0/1 | - | 0xFF | - | - | - | - |
| 0x005E | Kraftschlussinformation und Drehrichtungsinformation | 0/1 | - | 0xFF | - | - | - | - |
| 0x005F | Motormoment | Nm | - | unsigned char | - | 4 | - | -100 |
| 0x0064 | Sollstrom OUT0 | mA | - | unsigned char | - | 4 | - | - |
| 0x0065 | Sollstrom OUT1 | mA | - | unsigned char | - | 4 | - | - |
| 0x0066 | Sollstrom OUT2 | mA | - | unsigned char | - | 4 | - | - |
| 0x0067 | Sollstrom OUT3 | mA | - | unsigned char | - | 4 | - | - |
| 0x0068 | Sollstrom OUT4 | mA | - | unsigned char | - | 4 | - | - |
| 0x0069 | Sollstrom OUT5 | mA | - | unsigned char | - | 4 | - | - |
| 0x006A | Sollstrom OUT6 | mA | - | unsigned char | - | 4 | - | - |
| 0x006B | Sollstrom OUT7 | mA | - | unsigned char | - | 4 | - | - |
| 0x006C | Sollstrom OUT8 | mA | - | unsigned char | - | 4 | - | - |
| 0x006D | Sollstrom OUT9 | mA | - | unsigned char | - | 4 | - | - |
| 0x006E | Sollstrom OUT10 | mA | - | unsigned char | - | 4 | - | - |
| 0x006F | Sollstrom OUT11 | mA | - | unsigned char | - | 4 | - | - |
| 0x0070 | CAN Botschaften 1 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0072 | CAN Botschaften 2 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0074 | CAN Botschaften 3 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0075 | CAN Botschaften 4 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0076 | CAN Botschaften 5 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0077 | CAN Botschaften 6 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0078 | CAN Botschaften 7 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0079 | CAN Botschaften 8 | 0/1 | - | 0xFF | - | - | - | - |
| 0x007B | Maximal zulässiges Motormoment | Nm | - | unsigned char | - | 8 | - | -400 |
| 0x007C | Status Antrieb | - | - | unsigned char | - | - | - | - |
| 0x0087 | Drehzahl Verbrennungsmotor Getriebeeingangsdrehzahl | U/min | - | unsigned char | - | 32 | - | - |
| 0x0088 | PMA Signale | 0/1 | - | 0xFF | - | - | - | - |
| 0x03E9 | Hot Shutdown: Substrattemperatur (LM71) | °C | - | unsigned char | - | - | - | -40 |
| 0x03EA | Hot Shutdown: Substrattemperatur (CG130) | °C | - | unsigned char | - | - | - | -40 |
| 0x03EB | Hot Shutdown:Status der Sensoren | 0-n | - | 0xFF | UW_TAB_03EB | - | - | - |
| 0x03EC | Hot Shutdown:Schwelle für Heißabschaltung | °C | - | unsigned char | - | - | - | -40 |
| 0x03ED | Exceptionnummer | - | - | unsigned int | - | - | - | - |
| 0x03EE | Bitfeld für ROM Checksummenfehler | 0-n | - | 0xFFFF | UW_TAB_03EE | - | - | - |
| 0x03EF | KFC_RESSUP:Parameter des Exception Handlers bzgl. Adressinformationen | - | - | signed long | - | - | - | - |
| 0x03F0 | KFC_WDOG:Umweltbedingung 1 | 0-n | - | 0xFFFF | UW_TAB_03F0 | - | - | - |
| 0x03F1 | KFC_WDOG:Umweltbedingung 2 | 0-n | - | 0xFFFF | UW_TAB_03F1 | - | - | - |
| 0x03F2 | KFC_MCCOMP:Umweltbedingung 1 | 0-n | - | 0xFF | UW_TAB_03F2 | - | - | - |
| 0x03F3 | KFC_MCCOMP:Umweltbedingung 2 | TEXT | - | 4 | - | - | - | - |
| 0x0BB9 | Trennkupplung E-Maschine Temperatur | °C | - | unsigned int | - | - | - | -40 |
| 0x0BBA | Anfahrkupplung Temperatur | °C | - | unsigned int | - | - | - | -40 |
| 0x0BBB | IAE Kühlung Iststrom | min | - | signed int | - | - | - | - |
| 0x0BBC | Fülldruck PF K0 | mBar | - | signed int | - | 10 | - | - |
| 0x0BBD | Zähler PF K0 | - | - | unsigned int | - | - | - | - |
| 0x0BBE | Fehlerursache PosMe (8HP, 8P) und NegMe (8P) | 0-n | - | 0xFF | UW_TAB_0BBE | - | - | - |
| 0x0BBF | Schnellfüllzeit TSF K0 | ms | - | signed int | - | 2 | - | - |
| 0x0BC0 | Zähler TSF K0 | - | - | unsigned int | - | - | - | - |
| 0x0BC1 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC2 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC3 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC4 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC5 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC6 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC7 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC8 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC9 | EDS-Logik: geschaltete Kupplungen | 0/1 | - | 0xFF | - | - | - | - |
| 0x0BCA | EDS-Logik: R Gangsicherung | 0/1 | - | 0xFF | - | - | - | - |
| 0x1389 | Getriebesollposition | 0-n | - | 0xFF | UW_TAB_1389 | - | - | - |
| 0x138A | Im Puffer abgelegte Getriebesollposition | 0-n | - | 0xFF | UW_TAB_1389 | - | - | - |
| 0x138B | Im Puffer abgelegte Fahrtrichtung | 0-n | - | 0xFF | UW_TAB_138B | - | - | - |
| 0x138C | Zwischengröße der Anzeigeposition PRND | 0-n | - | 0xFF | UW_TAB_1389 | - | - | - |
| 0x138D | Fahrzeuggeschwindigkeit | - | low | unsigned int | - | - | 16 | - |
| 0x138E | Im Puffer abgelegtes Flag für mech. Notlauf | 0-n | - | 0xFF | UW_TAB_138E | - | - | - |
| 0x138F | Zustand Parksperre | 0-n | - | 0xFF | UW_TAB_138F | - | - | - |
| 0x1390 | Parksperrenstatus | 0-n | - | 0xFF | UW_TAB_1390 | - | - | - |
| 0x1391 | Zustand Parksperre | 0-n | - | 0xFF | UW_TAB_1391 | - | - | - |
| 0x1392 | Zustand  Hotmode | 0-n | - | 0xFF | UW_TAB_1392 | - | - | - |
| 0x1393 | KFC_INFO4:AutoP, wenn Fahrer Fahrzeug verlässt und das Getriebe in R oder D steht | - | - | unsigned char | - | - | - | - |
| 0x1394 | KFC_INFO5:AutoP von EMF angefordert | - | - | unsigned char | - | - | - | - |
| 0x1395 | KFC_INFO6:Nach abgeschlossenem E-GNER Modus Position P erfolgreich ausgelegt | - | - | unsigned char | - | - | - | - |
| 0x1396 | KFC_INFO7:Nach abgeschlossenem E-GNER Modus Position P nicht erfolgreich ausgelegt | - | - | unsigned char | - | - | - | - |
| 0x1397 | KFC_INFO8:Getriebeposition N durch E-GNER Modus und Fahrzeuggeschwindigkeit > Schwelle | - | - | unsigned char | - | - | - | - |
| 0x1398 | Zustand verschiedener EWS4 Systeme | 0-n | - | 0xFF | UW_TAB_1398 | - | - | - |
| 0x1399 | Status verschiedener Auto-P Eingangsgrößen | 0-n | - | 0xFF | UW_TAB_1399 | - | - | - |
| 0x139A | Hold-N angefordert | - | - | unsigned char | - | - | - | - |
| 0x13A3 | Anzahl Fahrzeug verlassen bei geschlossenem Gurt | - | - | unsigned char | - | - | - | - |
| 0x13A4 | Fehlerursache ABK Ebene 2 | - | - | unsigned char | - | - | - | - |
| 0x13A5 | Zähler für Auto-P bei Fahreranwesenheit unbekannt | - | - | unsigned char | - | - | - | - |
| 0x13A6 | Zähler für Diag-N (Diagnose in N) wenn Fahrtrichtung falsch und Geschwindigkeit zu hoch | - | - | unsigned char | - | - | - | - |
| 0x13A7 | Zähler für Diag-P (Diagnose in P) wenn Getriebetemperatur zu hoch und P eingelegt wird | - | - | unsigned char | - | - | - | - |
| 0xF001 | Betriebszustand HAS-Ist | 0-n | - | 0x0F | UW_TAB_0053_IST | - | - | - |
| 0xF002 | Betriebszustand HAS-Ziel | 0-n | - | 0xF0 | UW_TAB_0053_SOLL | - | - | - |
| 0xF003 | Diagnose OBD Motor FA-CAN | 0/1 | - | 0x01 | - | - | - | - |
| 0xF004 | Diagnose OBD Motor A-CAN | 0/1 | - | 0x02 | - | - | - | - |
| 0xF005 | Status Gangwahlschalter FA-CAN | 0/1 | - | 0x04 | - | - | - | - |
| 0xF006 | Status Gangwahlschalter A-CAN | 0/1 | - | 0x08 | - | - | - | - |
| 0xF007 | Ist Drehzahl Rad ungesichert | 0/1 | - | 0x10 | - | - | - | - |
| 0xF008 | Status Stabilisierung DSC | 0/1 | - | 0x20 | - | - | - | - |
| 0xF009 | Ist Bremsmoment Summe | 0/1 | - | 0x40 | - | - | - | - |
| 0xF010 | Status Fahrzeugstillstand | 0/1 | - | 0x80 | - | - | - | - |
| 0xF011 | Fahrzeugzustand | 0/1 | - | 0x01 | - | - | - | - |
| 0xF012 | Klemmen | 0/1 | - | 0x02 | - | - | - | - |
| 0xF013 | ZV und Klappenzustand | 0/1 | - | 0x04 | - | - | - | - |
| 0xF014 | Status Türsensoren Abgesichert | 0/1 | - | 0x08 | - | - | - | - |
| 0xF015 | Status Fahrzeugstillstand Parkbremse | 0/1 | - | 0x10 | - | - | - | - |
| 0xF016 | Neigung Fahrbahn | 0/1 | - | 0x20 | - | - | - | - |
| 0xF017 | Längsbeschleunigung Schwerpunkt | 0/1 | - | 0x40 | - | - | - | - |
| 0xF018 | Querbeschleunigung Schwerpunkt | 0/1 | - | 0x80 | - | - | - | - |
| 0xF019 | Konfiguration Schalter Fahrdynamik | 0/1 | - | 0x01 | - | - | - | - |
| 0xF020 | Geschwindigkeit Fahrzeug | 0/1 | - | 0x02 | - | - | - | - |
| 0xF021 | Giergeschwindigkeit Fahrzeug | 0/1 | - | 0x04 | - | - | - | - |
| 0xF022 | Masse/Gewicht Fahrzeug | 0/1 | - | 0x08 | - | - | - | - |
| 0xF023 | Relativzeit | 0/1 | - | 0x10 | - | - | - | - |
| 0xF024 | Außentemperatur | 0/1 | - | 0x20 | - | - | - | - |
| 0xF025 | Status Anzeige Fahrdynamik | 0/1 | - | 0x40 | - | - | - | - |
| 0xF026 | Kilometerstand/Reichweite | 0/1 | - | 0x80 | - | - | - | - |
| 0xF027 | Status Anhänger | 0/1 | - | 0x01 | - | - | - | - |
| 0xF028 | Status Gurt Kontakt Sitzbelegung | 0/1 | - | 0x02 | - | - | - | - |
| 0xF029 | Bedienung Schaltpaddel | 0/1 | - | 0x04 | - | - | - | - |
| 0xF030 | Drehmoment Kurbelwelle 1 | 0/1 | - | 0x08 | - | - | - | - |
| 0xF031 | Drehmoment Kurbelwelle 2 | 0/1 | - | 0x10 | - | - | - | - |
| 0xF032 | Drehmoment Kurbelwelle 3 | 0/1 | - | 0x20 | - | - | - | - |
| 0xF033 | Daten Antriebsstrang 1 | 0/1 | - | 0x40 | - | - | - | - |
| 0xF034 | Daten Antriebsstrang 2 | 0/1 | - | 0x80 | - | - | - | - |
| 0xF035 | Winkel Fahrpedal | 0/1 | - | 0x01 | - | - | - | - |
| 0xF036 | Radmoment Antrieb 1 | 0/1 | - | 0x02 | - | - | - | - |
| 0xF037 | Status Motor Start Auto | 0/1 | - | 0x04 | - | - | - | - |
| 0xF038 | Radmoment Antrieb 3 | 0/1 | - | 0x08 | - | - | - | - |
| 0xF039 | Radmoment Antrieb 7 | 0/1 | - | 0x10 | - | - | - | - |
| 0xF040 | Hybrid Vorgabe | 0/1 | - | 0x20 | - | - | - | - |
| 0xF041 | Ist Daten E-Motor 1 Langzeit | 0/1 | - | 0x40 | - | - | - | - |
| 0xF042 | Ist Daten E-Motor 1 | 0/1 | - | 0x80 | - | - | - | - |
| 0xF043 | Drehmoment Antriebsstrang Hybrid 1 | 0/1 | - | 0x01 | - | - | - | - |
| 0xF044 | Daten Antrieb Elektrisch | 0/1 | - | 0x02 | - | - | - | - |
| 0xF045 | Lenkwinkel Vorderachse Effektiv | 0/1 | - | 0x04 | - | - | - | - |
| 0xF046 | Status Hochvoltspeicher 2 | 0/1 | - | 0x08 | - | - | - | - |
| 0xF047 | Vorgabe Hochvoltspeicher | 0/1 | - | 0x10 | - | - | - | - |
| 0xF048 | Status Kontakt Handbremse | 0/1 | - | 0x20 | - | - | - | - |
| 0xF049 | undefiniert | 0/1 | - | 0x40 | - | - | - | - |
| 0xF050 | undefiniert | 0/1 | - | 0x80 | - | - | - | - |
| 0xF051 | undefiniert | 0/1 | - | 0x01 | - | - | - | - |
| 0xF052 | undefiniert | 0/1 | - | 0x02 | - | - | - | - |
| 0xF053 | undefiniert | 0/1 | - | 0x04 | - | - | - | - |
| 0xF054 | undefiniert | 0/1 | - | 0x08 | - | - | - | - |
| 0xF055 | undefiniert | 0/1 | - | 0x10 | - | - | - | - |
| 0xF056 | undefiniert | 0/1 | - | 0x20 | - | - | - | - |
| 0xF057 | undefiniert | 0/1 | - | 0x40 | - | - | - | - |
| 0xF058 | undefiniert | 0/1 | - | 0x80 | - | - | - | - |
| 0xF059 | undefiniert | 0/1 | - | 0x01 | - | - | - | - |
| 0xF060 | undefiniert | 0/1 | - | 0x02 | - | - | - | - |
| 0xF061 | undefiniert | 0/1 | - | 0x04 | - | - | - | - |
| 0xF062 | undefiniert | 0/1 | - | 0x08 | - | - | - | - |
| 0xF063 | undefiniert | 0/1 | - | 0x10 | - | - | - | - |
| 0xF064 | undefiniert | 0/1 | - | 0x20 | - | - | - | - |
| 0xF065 | undefiniert | 0/1 | - | 0x40 | - | - | - | - |
| 0xF066 | undefiniert | 0/1 | - | 0x80 | - | - | - | - |
| 0xF067 | Klemme 15 CAN | 0-n | - | 0x000F | UW_TAB_KL15 | - | - | - |
| 0xF068 | Status Klemme 15 CAN | 0-n | - | 0x0020 | UW_TAB_KL15_STATUS | - | - | - |
| 0xF069 | EGS interner Zustand Klemme 15 | 0/1 | - | 0x0040 | - | - | - | - |
| 0xF06A | Zustand Klemme 15 Plausi | 0-n | - | 0x0100 | UW_TAB_KL15_PLAUSI | - | - | - |
| 0xF06B | Klemme 15 CAN Div | 0-n | - | 0x0400 | UW_TAB_KL15_DIV | - | - | - |
| 0xF06C | Schaltzustand Kupplung A | 0/1 | - | 0x01 | - | - | - | - |
| 0xF06D | Schaltzustand Kupplung B | 0/1 | - | 0x02 | - | - | - | - |
| 0xF06E | Schaltzustand Kupplung C | 0/1 | - | 0x04 | - | - | - | - |
| 0xF06F | Schaltzustand Kupplung D | 0/1 | - | 0x08 | - | - | - | - |
| 0xF070 | Schaltzustand Kupplung E | 0/1 | - | 0x10 | - | - | - | - |
| 0xF071 | Kupplung A geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x01 | - | - | - | - |
| 0xF072 | Kupplung B geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x02 | - | - | - | - |
| 0xF073 | Kupplung C geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x04 | - | - | - | - |
| 0xF074 | Kupplung D geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x08 | - | - | - | - |
| 0xF075 | Kupplung E geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x10 | - | - | - | - |
| 0xF076 | Istgang | 0-n | - | 0x0F | UW_TAB_ISTGANG | - | - | - |
| 0xF077 | Zielgang | 0-n | - | 0xF0 | UW_TAB_ZIELGANG | - | - | - |
| 0xF078 | Kraftschluss | 0-n | - | 0x0F | UW_TAB_KRAFTSCHLUSS | - | - | - |
| 0xF079 | NAB Drehrichtung | 0-n | - | 0x20 | UW_TAB_NAB_DREHRICHTUNG | - | - | - |
| 0xF080 | NTU Drehrichtung | 0-n | - | 0x80 | UW_TAB_NTU_DREHRICHTUNG | - | - | - |
| 0xF081 | Modussignal | 0/1 | - | 0x01 | - | - | - | - |
| 0xF082 | Positionssignal | 0/1 | - | 0x02 | - | - | - | - |
| 0xF083 | Bremssignal | 0/1 | - | 0x04 | - | - | - | - |
| 0xFFFF | ohne Bedeutung | - | - | unsigned char | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x44CFD1 | Übersetzungsüberwachung: Symptom Gangüberwachung unplausibel | 0 |
| 0x44D0C1 | Übersetzungsüberwachung: Symptom Schaltungsüberwachung unplausibel | 0 |
| 0x44D3D6 | Öltemperatursensor: Elektrischer- oder Plausibilisierungsfehler oder Temperatursprung erkannt | 0 |
| 0x44D4D1 | Shift-By-Wire: Infozähler für Auto-P bei Fahrzeugverlassen | 1 |
| 0x44D4E1 | Shift-By-Wire: Infozähler für Hilferuf von DSC oder EMF in Getriebeposition N | 1 |
| 0x44D4E2 | Shift-By-Wire: Infozähler für Hilferuf von DSC oder EMF in Getriebeposition R/D | 1 |
| 0x44D4F2 | Shift-By-Wire: Infozähler für Gurtdummy | 1 |
| 0x44D502 | Shift-By-Wire: Infozähler für Gurtdummy und Fahreranwesendheit unbekannt | 1 |
| 0x44D512 | Shift-By-Wire: Infozähler für falsche Fahrrichtung | 1 |
| 0x44D522 | Shift-By-Wire: Infozähler für Auto-P bei angezogener Handbremse nach Zeit- und Temperatur-Schwelle | 1 |
| 0x44D621 | Reset (Hardware-Supplier): interne Exception, z.B. Division durch Null | 0 |
| 0x44D622 | Reset (Hardware-Supplier): Frage-/ Antwort Kommunikation | 0 |
| 0x44D623 | Reset (Hardware-Supplier): Programmablaufkontrolle | 0 |
| 0x44D624 | Reset (Hardware-Supplier): Komplementüberwachung im Level2 | 0 |
| 0x44D625 | Reset (Hardware-Supplier): vermutete Unterspannung im Init | 1 |
| 0x44D626 | Reset (Hardware-Supplier): vermutete Unterspannung im Betrieb oder Notlauf | 1 |
| 0x44D627 | Reset (Hardware-Supplier): vermutete Unterspannung im Standby | 1 |
| 0x44D631 | Reset (System-Supplier): Shift-By-Wire - Komplement unplausibel | 0 |
| 0x44D632 | Reset (System-Supplier): Signalaufbereitung oder ZF ErrorReactionManager - Komplement unplausibel | 0 |
| 0x44D633 | Reset (System-Supplier): Schaltablaufsteuerung Inkonsistenz von Istgang oder Zielgang | 0 |
| 0x44D634 | Reset (System-Supplier): Schaltablaufsteuerung Inkonsistenz vom Kraftfluss | 0 |
| 0x44D635 | Reset (System-Supplier): Schaltablaufsteuerung Inkonsistenz vom Kraftfluss zum Gang | 0 |
| 0x44D636 | Reset (System-Supplier): Schaltablaufsteuerung Inkonsistenzen von Zustandsgraphen (Ventilen/Kupplung) oder Pointerfehler | 0 |
| 0x44D637 | Reset (System-Supplier): Schaltablaufsteuerung - Komplement oder EDS/MV Ströme unplausibel | 0 |
| 0x44D638 | Reset (System-Supplier): ZF ErrorReactionManager - unplausible Reaktion des Errorhandlers | 0 |
| 0x44D639 | Reset (System-Supplier): ZF ErrorReactionManager - fehlende Reaktion des Errorhandlers | 0 |
| 0x44D63A | Reset (System-Supplier): Rückkehr zur Normalfunktion über Reset | 0 |
| 0x44D671 | Hochtemperaturbetriebs-Anforderung: Level 1 | 0 |
| 0x44D672 | Hochtemperaturbetriebs-Anforderung: Level 2 | 0 |
| 0x44DD31 | EWS: Fahrerwunsch P verlassen wurde durch EWS verhindert | 1 |
| 0x44DD32 | EWS: Manipulationsversuch | 1 |
| 0x44DD51 | Parksperre: Missbrauch | 1 |
| 0x44DD64 | SysFunktion: keine gültige Zeitbotschaft RELATIVZEIT (328h) vom Systime-Master auf dem FA-CAN empfangen | 1 |
| 0x44E162 | SysFunktion: Alle Fehlergruppen wurden gesperrt (z.B. über UDS ControlDTCSetting beim SW-Update der EGS) | 1 |
| 0x44E312 | Integrierte elektrische Pumpe (IEP): temporärer Ausfall | 0 |
| 0x44E422 | Übersetzungsüberwachung: Symptom Integrierte elektrische Pumpe (IEP) | 0 |
| 0x44E471 | Übersetzungsüberwachung: Sollposition D / R jedoch konnte Kraftschluss nicht hergestellt werden. Fehler noch nicht abschließend erkannt. | 0 |
| 0x44E4F2 | Shift-By-Wire: Infozähler für Hold-N | 1 |
| 0x44E532 | Hybridablaufsteuerung (HAS): asynchrones K0 schließen | 1 |
| 0x44E551 | Vergleich Zündungssignale: HW-Pin KL15 und CAN-Signal Status_Klemme (0x12F) | 1 |
| 0xCF3002 | SysFunktion: keine gültige Zeitbotschaft RELATIVZEIT (328h) vom Systime-Master auf dem FA-CAN empfangen | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Rohwert Getriebeöl-Temperatur | °C | high | unsigned char | - | - | - | -40 |
| 0x0002 | Batteriespannung | V | high | unsigned char | - | 8 | 100 | - |
| 0x0003 | Zurückgelegte Kilometer [km] als Hex-Wert | km | - | 3 | - | - | - | - |
| 0x0004 | Systemzeit [s] als Hex-Wert | s | - | 4 | - | - | - | - |
| 0x0005 | Sensorversorgungsspannung | V | - | unsigned char | - | 8 | 100 | - |
| 0x0006 | Rohwert Chip1 - Temperatur | °C | - | unsigned char | - | - | - | -40 |
| 0x0007 | Spannung der Druckregler und Magentventile | V | - | unsigned char | - | 8 | 100 | - |
| 0x0008 | Fahrpedalwinkel | % | - | unsigned char | - | 39.21 | 100 | - |
| 0x0009 | Abtriebsdrehzahl-Rohwert | U/min | - | unsigned char | - | 32 | 1 | - |
| 0x000A | Turbinendrehzahl | U/min | - | unsigned char | - | 32 | 1 | - |
| 0x000B | Getriebeeingangsdrehzahl | U/min | - | unsigned char | - | 32 | 1 | - |
| 0x000C | Mittlere, toleranzabgeglichene, nicht fehlerbehandelte Drehzahl der Räder der aktiven Achse | U/min | - | unsigned int | - | - | - | - |
| 0x000D | Motoristmoment | Nm | - | unsigned char | - | 4 | 1 | -100 |
| 0x000E | Aktueller Gang | 0-n | - | 0xFF | istgang | - | - | - |
| 0x000F | Aktive Maßnahmen Byte 1 | - | - | unsigned char | - | - | - | - |
| 0x0010 | Aktive Maßnahmen Byte 2 | - | - | unsigned char | - | - | - | - |
| 0x0011 | Aktive Maßnahmen Byte 3 | - | - | unsigned char | - | - | - | - |
| 0x0012 | Aktive Maßnahmen Byte 4 | - | - | unsigned char | - | - | - | - |
| 0x0013 | Aktive Maßnahmen Byte 5 | - | - | unsigned char | - | - | - | - |
| 0x0014 | Aktive Maßnahmen Byte 6 | - | - | unsigned char | - | - | - | - |
| 0x0015 | Aktive Maßnahmen Byte 7 | - | - | unsigned char | - | - | - | - |
| 0x0016 | Aktive Maßnahmen Byte 8 | - | - | unsigned char | - | - | - | - |
| 0x0017 | EEPromcheck-Fehlerflags | 0-n | - | 0xFF | sck_Error | - | - | - |
| 0x0018 | Status Zündung | 0-n | - | 0xFF | st_KL15 | - | - | - |
| 0x0019 | Zeit seit Reset / KL15 ein | ms | - | unsigned char | - | 30 | 1 | - |
| 0x001A | Schaltungart | 0-n | - | 0xFF | sgt_Gear0 | - | - | - |
| 0x001B | Diskrete Eingänge | 0-n | - | 0xF0 | sgt_Inp0 | - | - | - |
| 0x001C | Ansteuerungszustand MVs | 0-n | - | 0xF0 | sgt_Out0 | - | - | - |
| 0x001D | Signalstatus für Signale von Getriebe/EGS | 0-n | - | 0xFF | sgt_Sig0 | - | - | - |
| 0x001E | Signalstatus für CAN-Signale von Motorsteuerung | 0-n | - | 0xF0 | sgt_Sig1 | - | - | - |
| 0x001F | Signalstatus für CAN-Signale von ASC/DSC/GWS | 0-n | - | 0xFF | sgt_Sig2 | - | - | - |
| 0x0020 | Rohwert Chip2 - Temperatur | °C | - | unsigned char | - | - | - | -40 |
| 0x0021 | Fahrdynamikregelung des Antiblockiersystem | 0-n | - | 0xFF | UW_TAB_0021 | - | - | - |
| 0x0022 | Fahrdynamikregelung | 0-n | - | 0xFF | UW_TAB_0022 | - | - | - |
| 0x0023 | Fahrdynamikregelung der Antriebsschlupferkennung | 0-n | - | 0xFF | UW_TAB_0023 | - | - | - |
| 0x0042 | angeforderter Motoreingriff der EGS | Nm | - | signed int | - | - | - | - |
| 0x0043 | Bestromung der EDS an OUT0...4 und OUT6 (Umrechnung:6*2 Zeichen,2 Zeichen entsprechen Hex-Wert. Hex-Wert muss mit 10 multipliziert werden. Einheit [mA]) | TEXT | - | 6 | - | - | - | - |
| 0x0044 | Signalstatus für CAN-Signale von FEM/CAS | 0-n | - | 0xFF | UW_TAB_0044 | - | - | - |
| 0x004A | Mittlere, toleranzabgeglichene, nicht fehlerbehandelte Drehzahl der Räder der aktiven Achse | U/min | - | unsigned char | - | 32 | - | - |
| 0x004B | KL15 Pin-Spannung | V | - | unsigned char | - | 0,08 | - | - |
| 0x004C | Roh Raddrehzahlwert FL | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x004D | Roh Raddrehzahlwert FR | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x004E | Roh Raddrehzahlwert RL | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x004F | Roh Raddrehzahlwert RR | Rad/s | - | unsigned char | - | - | - | -40 |
| 0x0051 | Status der Überwachten Klemmen vom CANBUS und vom PIN | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x0052 | Vorgabe der HAS Ablaufvariante durch die HST | 0-n | - | 0x0F | UW_TAB_0052 | - | - | - |
| 0x0053 | Aktueller Ist-/Zielzustand Hybridablauf | 0/1 | - | 0xFF | - | - | - | - |
| 0x0054 | Solldrehzahlvorgabe an die E-Maschine | U/min | - | unsigned char | - | 32 | - | - |
| 0x0055 | E-Maschinenistmoment mit Getriebeeingriff | Nm | - | unsigned char | - | 4 | - | -500 |
| 0x0056 | Maximal zulässiges Motormoment für Hybridantriebsstrang (geführter Getriebeschutz) | Nm | - | unsigned char | - | 4 | - | -100 |
| 0x0057 | K0-Istmoment | Nm | - | unsigned char | - | 4 | - | -100 |
| 0x0058 | K0-Istzustand | 0-n | - | 0x0F | UW_TAB_0058 | - | - | - |
| 0x0059 | Physikalischer Zustand integriertes Anfahrelement | 0-n | - | 0x0F | UW_TAB_0059 | - | - | - |
| 0x005A | Istzustand elektrische Zusatzpumpe IEP | 0-n | - | 0x0F | UW_TAB_005A | - | - | - |
| 0x005B | ISTGANG und ZIELGANG | 0/1 | - | 0xFF | - | - | - | - |
| 0x005E | Kraftschlussinformation und Drehrichtungsinformation | 0/1 | - | 0xFF | - | - | - | - |
| 0x005F | Motormoment | Nm | - | unsigned char | - | 4 | - | -100 |
| 0x0064 | Sollstrom OUT0 | mA | - | unsigned char | - | 4 | - | - |
| 0x0065 | Sollstrom OUT1 | mA | - | unsigned char | - | 4 | - | - |
| 0x0066 | Sollstrom OUT2 | mA | - | unsigned char | - | 4 | - | - |
| 0x0067 | Sollstrom OUT3 | mA | - | unsigned char | - | 4 | - | - |
| 0x0068 | Sollstrom OUT4 | mA | - | unsigned char | - | 4 | - | - |
| 0x0069 | Sollstrom OUT5 | mA | - | unsigned char | - | 4 | - | - |
| 0x006A | Sollstrom OUT6 | mA | - | unsigned char | - | 4 | - | - |
| 0x006B | Sollstrom OUT7 | mA | - | unsigned char | - | 4 | - | - |
| 0x006C | Sollstrom OUT8 | mA | - | unsigned char | - | 4 | - | - |
| 0x006D | Sollstrom OUT9 | mA | - | unsigned char | - | 4 | - | - |
| 0x006E | Sollstrom OUT10 | mA | - | unsigned char | - | 4 | - | - |
| 0x006F | Sollstrom OUT11 | mA | - | unsigned char | - | 4 | - | - |
| 0x0070 | CAN Botschaften 1 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0072 | CAN Botschaften 2 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0074 | CAN Botschaften 3 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0075 | CAN Botschaften 4 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0076 | CAN Botschaften 5 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0077 | CAN Botschaften 6 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0078 | CAN Botschaften 7 | 0/1 | - | 0xFF | - | - | - | - |
| 0x0079 | CAN Botschaften 8 | 0/1 | - | 0xFF | - | - | - | - |
| 0x007B | Maximal zulässiges Motormoment | Nm | - | unsigned char | - | 8 | - | -400 |
| 0x007C | Status Antrieb | - | - | unsigned char | - | - | - | - |
| 0x0087 | Drehzahl Verbrennungsmotor Getriebeeingangsdrehzahl | U/min | - | unsigned char | - | 32 | - | - |
| 0x0088 | PMA Signale | 0/1 | - | 0xFF | - | - | - | - |
| 0x03E9 | Hot Shutdown: Substrattemperatur (LM71) | °C | - | unsigned char | - | - | - | -40 |
| 0x03EA | Hot Shutdown: Substrattemperatur (CG130) | °C | - | unsigned char | - | - | - | -40 |
| 0x03EB | Hot Shutdown:Status der Sensoren | 0-n | - | 0xFF | UW_TAB_03EB | - | - | - |
| 0x03EC | Hot Shutdown:Schwelle für Heißabschaltung | °C | - | unsigned char | - | - | - | -40 |
| 0x03ED | Exceptionnummer | - | - | unsigned int | - | - | - | - |
| 0x03EE | Bitfeld für ROM Checksummenfehler | 0-n | - | 0xFFFF | UW_TAB_03EE | - | - | - |
| 0x03EF | KFC_RESSUP:Parameter des Exception Handlers bzgl. Adressinformationen | - | - | signed long | - | - | - | - |
| 0x03F0 | KFC_WDOG:Umweltbedingung 1 | 0-n | - | 0xFFFF | UW_TAB_03F0 | - | - | - |
| 0x03F1 | KFC_WDOG:Umweltbedingung 2 | 0-n | - | 0xFFFF | UW_TAB_03F1 | - | - | - |
| 0x03F2 | KFC_MCCOMP:Umweltbedingung 1 | 0-n | - | 0xFF | UW_TAB_03F2 | - | - | - |
| 0x03F3 | KFC_MCCOMP:Umweltbedingung 2 | TEXT | - | 4 | - | - | - | - |
| 0x0BB9 | Trennkupplung E-Maschine Temperatur | °C | - | unsigned int | - | - | - | -40 |
| 0x0BBA | Anfahrkupplung Temperatur | °C | - | unsigned int | - | - | - | -40 |
| 0x0BBB | IAE Kühlung Iststrom | min | - | signed int | - | - | - | - |
| 0x0BBC | Fülldruck PF K0 | mBar | - | signed int | - | 10 | - | - |
| 0x0BBD | Zähler PF K0 | - | - | unsigned int | - | - | - | - |
| 0x0BBE | Fehlerursache PosMe (8HP, 8P) und NegMe (8P) | 0-n | - | 0xFF | UW_TAB_0BBE | - | - | - |
| 0x0BBF | Schnellfüllzeit TSF K0 | ms | - | signed int | - | 2 | - | - |
| 0x0BC0 | Zähler TSF K0 | - | - | unsigned int | - | - | - | - |
| 0x0BC1 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC2 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC3 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC4 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC5 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC6 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC7 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC8 | IAE Anlegepunkt Adaptions-Speicher 0 | mBar | - | signed int | - | - | - | - |
| 0x0BC9 | EDS-Logik: geschaltete Kupplungen | 0/1 | - | 0xFF | - | - | - | - |
| 0x0BCA | EDS-Logik: R Gangsicherung | 0/1 | - | 0xFF | - | - | - | - |
| 0x1389 | Getriebesollposition | 0-n | - | 0xFF | UW_TAB_1389 | - | - | - |
| 0x138A | Im Puffer abgelegte Getriebesollposition | 0-n | - | 0xFF | UW_TAB_1389 | - | - | - |
| 0x138B | Im Puffer abgelegte Fahrtrichtung | 0-n | - | 0xFF | UW_TAB_138B | - | - | - |
| 0x138C | Zwischengröße der Anzeigeposition PRND | 0-n | - | 0xFF | UW_TAB_1389 | - | - | - |
| 0x138D | Fahrzeuggeschwindigkeit | - | low | unsigned int | - | - | 16 | - |
| 0x138E | Im Puffer abgelegtes Flag für mech. Notlauf | 0-n | - | 0xFF | UW_TAB_138E | - | - | - |
| 0x138F | Zustand Parksperre | 0-n | - | 0xFF | UW_TAB_138F | - | - | - |
| 0x1390 | Parksperrenstatus | 0-n | - | 0xFF | UW_TAB_1390 | - | - | - |
| 0x1391 | Zustand Parksperre | 0-n | - | 0xFF | UW_TAB_1391 | - | - | - |
| 0x1392 | Zustand  Hotmode | 0-n | - | 0xFF | UW_TAB_1392 | - | - | - |
| 0x1393 | KFC_INFO4:AutoP, wenn Fahrer Fahrzeug verlässt und das Getriebe in R oder D steht | - | - | unsigned char | - | - | - | - |
| 0x1394 | KFC_INFO5:AutoP von EMF angefordert | - | - | unsigned char | - | - | - | - |
| 0x1395 | KFC_INFO6:Nach abgeschlossenem E-GNER Modus Position P erfolgreich ausgelegt | - | - | unsigned char | - | - | - | - |
| 0x1396 | KFC_INFO7:Nach abgeschlossenem E-GNER Modus Position P nicht erfolgreich ausgelegt | - | - | unsigned char | - | - | - | - |
| 0x1397 | KFC_INFO8:Getriebeposition N durch E-GNER Modus und Fahrzeuggeschwindigkeit > Schwelle | - | - | unsigned char | - | - | - | - |
| 0x1398 | Zustand verschiedener EWS4 Systeme | 0-n | - | 0xFF | UW_TAB_1398 | - | - | - |
| 0x1399 | Status verschiedener Auto-P Eingangsgrößen | 0-n | - | 0xFF | UW_TAB_1399 | - | - | - |
| 0x139A | Hold-N angefordert | - | - | unsigned char | - | - | - | - |
| 0x13A3 | Anzahl Fahrzeug verlassen bei geschlossenem Gurt | - | - | unsigned char | - | - | - | - |
| 0x13A4 | Fehlerursache ABK Ebene 2 | - | - | unsigned char | - | - | - | - |
| 0x13A5 | Zähler für Auto-P bei Fahreranwesenheit unbekannt | - | - | unsigned char | - | - | - | - |
| 0x13A6 | Zähler für Diag-N (Diagnose in N) wenn Fahrtrichtung falsch und Geschwindigkeit zu hoch | - | - | unsigned char | - | - | - | - |
| 0x13A7 | Zähler für Diag-P (Diagnose in P) wenn Getriebetemperatur zu hoch und P eingelegt wird | - | - | unsigned char | - | - | - | - |
| 0xF001 | Betriebszustand HAS-Ist | 0-n | - | 0x0F | UW_TAB_0053_IST | - | - | - |
| 0xF002 | Betriebszustand HAS-Ziel | 0-n | - | 0xF0 | UW_TAB_0053_SOLL | - | - | - |
| 0xF003 | Diagnose OBD Motor FA-CAN | 0/1 | - | 0x01 | - | - | - | - |
| 0xF004 | Diagnose OBD Motor A-CAN | 0/1 | - | 0x02 | - | - | - | - |
| 0xF005 | Status Gangwahlschalter FA-CAN | 0/1 | - | 0x04 | - | - | - | - |
| 0xF006 | Status Gangwahlschalter A-CAN | 0/1 | - | 0x08 | - | - | - | - |
| 0xF007 | Ist Drehzahl Rad ungesichert | 0/1 | - | 0x10 | - | - | - | - |
| 0xF008 | Status Stabilisierung DSC | 0/1 | - | 0x20 | - | - | - | - |
| 0xF009 | Ist Bremsmoment Summe | 0/1 | - | 0x40 | - | - | - | - |
| 0xF010 | Status Fahrzeugstillstand | 0/1 | - | 0x80 | - | - | - | - |
| 0xF011 | Fahrzeugzustand | 0/1 | - | 0x01 | - | - | - | - |
| 0xF012 | Klemmen | 0/1 | - | 0x02 | - | - | - | - |
| 0xF013 | ZV und Klappenzustand | 0/1 | - | 0x04 | - | - | - | - |
| 0xF014 | Status Türsensoren Abgesichert | 0/1 | - | 0x08 | - | - | - | - |
| 0xF015 | Status Fahrzeugstillstand Parkbremse | 0/1 | - | 0x10 | - | - | - | - |
| 0xF016 | Neigung Fahrbahn | 0/1 | - | 0x20 | - | - | - | - |
| 0xF017 | Längsbeschleunigung Schwerpunkt | 0/1 | - | 0x40 | - | - | - | - |
| 0xF018 | Querbeschleunigung Schwerpunkt | 0/1 | - | 0x80 | - | - | - | - |
| 0xF019 | Konfiguration Schalter Fahrdynamik | 0/1 | - | 0x01 | - | - | - | - |
| 0xF020 | Geschwindigkeit Fahrzeug | 0/1 | - | 0x02 | - | - | - | - |
| 0xF021 | Giergeschwindigkeit Fahrzeug | 0/1 | - | 0x04 | - | - | - | - |
| 0xF022 | Masse/Gewicht Fahrzeug | 0/1 | - | 0x08 | - | - | - | - |
| 0xF023 | Relativzeit | 0/1 | - | 0x10 | - | - | - | - |
| 0xF024 | Außentemperatur | 0/1 | - | 0x20 | - | - | - | - |
| 0xF025 | Status Anzeige Fahrdynamik | 0/1 | - | 0x40 | - | - | - | - |
| 0xF026 | Kilometerstand/Reichweite | 0/1 | - | 0x80 | - | - | - | - |
| 0xF027 | Status Anhänger | 0/1 | - | 0x01 | - | - | - | - |
| 0xF028 | Status Gurt Kontakt Sitzbelegung | 0/1 | - | 0x02 | - | - | - | - |
| 0xF029 | Bedienung Schaltpaddel | 0/1 | - | 0x04 | - | - | - | - |
| 0xF030 | Drehmoment Kurbelwelle 1 | 0/1 | - | 0x08 | - | - | - | - |
| 0xF031 | Drehmoment Kurbelwelle 2 | 0/1 | - | 0x10 | - | - | - | - |
| 0xF032 | Drehmoment Kurbelwelle 3 | 0/1 | - | 0x20 | - | - | - | - |
| 0xF033 | Daten Antriebsstrang 1 | 0/1 | - | 0x40 | - | - | - | - |
| 0xF034 | Daten Antriebsstrang 2 | 0/1 | - | 0x80 | - | - | - | - |
| 0xF035 | Winkel Fahrpedal | 0/1 | - | 0x01 | - | - | - | - |
| 0xF036 | Radmoment Antrieb 1 | 0/1 | - | 0x02 | - | - | - | - |
| 0xF037 | Status Motor Start Auto | 0/1 | - | 0x04 | - | - | - | - |
| 0xF038 | Radmoment Antrieb 3 | 0/1 | - | 0x08 | - | - | - | - |
| 0xF039 | Radmoment Antrieb 7 | 0/1 | - | 0x10 | - | - | - | - |
| 0xF040 | Hybrid Vorgabe | 0/1 | - | 0x20 | - | - | - | - |
| 0xF041 | Ist Daten E-Motor 1 Langzeit | 0/1 | - | 0x40 | - | - | - | - |
| 0xF042 | Ist Daten E-Motor 1 | 0/1 | - | 0x80 | - | - | - | - |
| 0xF043 | Drehmoment Antriebsstrang Hybrid 1 | 0/1 | - | 0x01 | - | - | - | - |
| 0xF044 | Daten Antrieb Elektrisch | 0/1 | - | 0x02 | - | - | - | - |
| 0xF045 | Lenkwinkel Vorderachse Effektiv | 0/1 | - | 0x04 | - | - | - | - |
| 0xF046 | Status Hochvoltspeicher 2 | 0/1 | - | 0x08 | - | - | - | - |
| 0xF047 | Vorgabe Hochvoltspeicher | 0/1 | - | 0x10 | - | - | - | - |
| 0xF048 | Status Kontakt Handbremse | 0/1 | - | 0x20 | - | - | - | - |
| 0xF049 | undefiniert | 0/1 | - | 0x40 | - | - | - | - |
| 0xF050 | undefiniert | 0/1 | - | 0x80 | - | - | - | - |
| 0xF051 | undefiniert | 0/1 | - | 0x01 | - | - | - | - |
| 0xF052 | undefiniert | 0/1 | - | 0x02 | - | - | - | - |
| 0xF053 | undefiniert | 0/1 | - | 0x04 | - | - | - | - |
| 0xF054 | undefiniert | 0/1 | - | 0x08 | - | - | - | - |
| 0xF055 | undefiniert | 0/1 | - | 0x10 | - | - | - | - |
| 0xF056 | undefiniert | 0/1 | - | 0x20 | - | - | - | - |
| 0xF057 | undefiniert | 0/1 | - | 0x40 | - | - | - | - |
| 0xF058 | undefiniert | 0/1 | - | 0x80 | - | - | - | - |
| 0xF059 | undefiniert | 0/1 | - | 0x01 | - | - | - | - |
| 0xF060 | undefiniert | 0/1 | - | 0x02 | - | - | - | - |
| 0xF061 | undefiniert | 0/1 | - | 0x04 | - | - | - | - |
| 0xF062 | undefiniert | 0/1 | - | 0x08 | - | - | - | - |
| 0xF063 | undefiniert | 0/1 | - | 0x10 | - | - | - | - |
| 0xF064 | undefiniert | 0/1 | - | 0x20 | - | - | - | - |
| 0xF065 | undefiniert | 0/1 | - | 0x40 | - | - | - | - |
| 0xF066 | undefiniert | 0/1 | - | 0x80 | - | - | - | - |
| 0xF067 | Klemme 15 CAN | 0-n | - | 0x000F | UW_TAB_KL15 | - | - | - |
| 0xF068 | Status Klemme 15 CAN | 0-n | - | 0x0020 | UW_TAB_KL15_STATUS | - | - | - |
| 0xF069 | EGS interner Zustand Klemme 15 | 0/1 | - | 0x0040 | - | - | - | - |
| 0xF06A | Zustand Klemme 15 Plausi | 0-n | - | 0x0100 | UW_TAB_KL15_PLAUSI | - | - | - |
| 0xF06B | Klemme 15 CAN Div | 0-n | - | 0x0400 | UW_TAB_KL15_DIV | - | - | - |
| 0xF06C | Schaltzustand Kupplung A | 0/1 | - | 0x01 | - | - | - | - |
| 0xF06D | Schaltzustand Kupplung B | 0/1 | - | 0x02 | - | - | - | - |
| 0xF06E | Schaltzustand Kupplung C | 0/1 | - | 0x04 | - | - | - | - |
| 0xF06F | Schaltzustand Kupplung D | 0/1 | - | 0x08 | - | - | - | - |
| 0xF070 | Schaltzustand Kupplung E | 0/1 | - | 0x10 | - | - | - | - |
| 0xF071 | Kupplung A geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x01 | - | - | - | - |
| 0xF072 | Kupplung B geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x02 | - | - | - | - |
| 0xF073 | Kupplung C geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x04 | - | - | - | - |
| 0xF074 | Kupplung D geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x08 | - | - | - | - |
| 0xF075 | Kupplung E geschaltet EDS_LOGIK R-Gangerkennung | 0/1 | - | 0x10 | - | - | - | - |
| 0xF076 | Istgang | 0-n | - | 0x0F | UW_TAB_ISTGANG | - | - | - |
| 0xF077 | Zielgang | 0-n | - | 0xF0 | UW_TAB_ZIELGANG | - | - | - |
| 0xF078 | Kraftschluss | 0-n | - | 0x0F | UW_TAB_KRAFTSCHLUSS | - | - | - |
| 0xF079 | NAB Drehrichtung | 0-n | - | 0x20 | UW_TAB_NAB_DREHRICHTUNG | - | - | - |
| 0xF080 | NTU Drehrichtung | 0-n | - | 0x80 | UW_TAB_NTU_DREHRICHTUNG | - | - | - |
| 0xF081 | Modussignal | 0/1 | - | 0x01 | - | - | - | - |
| 0xF082 | Positionssignal | 0/1 | - | 0x02 | - | - | - | - |
| 0xF083 | Bremssignal | 0/1 | - | 0x04 | - | - | - | - |
| 0xFFFF | ohne Bedeutung | - | - | unsigned char | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4006

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAN_LEARN_FIRST_BITS | BIT | - | BITFIELD | - | RES_LEARN1 | - | - | - | Gibt für die ersten 32 CAN-Botschaften an, ob Sie gelernt wurden |
| STAT_CAN_LEARN_SECOND_BITS | BIT | - | BITFIELD | - | RES_LEARN2 | - | - | - | Gibt für die zweiten 32 CAN-Botschaften an, ob Sie gelernt wurden |

### RES_0X4007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNFKT_HINTERACHSE | 0/1 | low | char | - | - | - | - | - | 0: Hinterachse gelernt    1: Nicht gelernt |
| STAT_CAN_LEARN_FIRST_BITS | BIT | - | BITFIELD | - | RES_LEARN1 | - | - | - | Gibt für die ersten 32 CAN-Botschaften an, ob Sie als zu lernend parametrisiert wurden |
| STAT_CAN_LEARN_SECOND_BITS | BIT | - | BITFIELD | - | RES_LEARN2 | - | - | - | Gibt für die zweiten 32 CAN-Botschaften an, ob Sie als zu lernend parametrisiert wurden |

### RES_0X4008

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LESEN_STELLGLIED_OUT0_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT1_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT2_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT3_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT4_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT5_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT6_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT7_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT10_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT11_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT13_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |
| STAT_LESEN_STELLGLIED_OUT14_WERT | mA | high | unsigned int | - | - | - | 10 | - | Ausgabe des Stromwertes im Aktuator im Bereich 0 bis 6553,5 mA |

### RES_0X403C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAL_ID_LESEN_TEXT | TEXT | high | string[16] | - | - | - | - | - | CAL-ID |
| STAT_CVN_LESEN_DATA | DATA | - | data[4] | - | - | - | - | - | CVN, siehe DATA nicht WERT |

### RES_0X4110

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT25_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT26_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT27_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT28_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT29_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT30_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT31_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT32_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT33_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT34_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT35_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT36_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT37_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT38_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT39_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT40_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT41_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT42_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT43_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT44_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT45_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT46_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT47_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT48_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT49_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT50_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT51_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT52_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT53_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT54_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT55_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT56_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT57_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT58_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT59_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT60_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT61_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT62_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT63_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT64_GLS_KF1_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |

### RES_0X4111

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT25_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT26_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT27_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT28_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT29_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT30_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT31_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT32_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT33_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT34_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT35_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT36_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT37_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT38_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT39_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT40_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT41_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT42_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT43_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT44_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT45_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT46_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT47_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT48_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT49_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT50_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT51_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT52_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT53_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT54_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT55_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT56_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT57_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT58_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT59_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT60_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT61_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT62_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT63_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT64_GLS_KF1_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |

### RES_0X4112

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT25_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT26_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT27_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT28_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT29_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT30_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT31_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT32_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT33_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT34_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT35_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT36_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT37_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT38_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT39_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT40_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT41_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT42_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT43_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT44_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT45_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT46_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT47_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT48_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT49_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT50_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT51_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT52_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT53_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT54_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT55_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT56_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT57_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT58_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT59_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT60_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT61_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT62_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT63_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT64_GLS_KF1_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |

### RES_0X4113

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT2_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT3_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT4_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT5_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT6_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT7_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT8_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT9_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT10_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT11_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT12_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT13_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT14_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT15_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT16_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT17_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT18_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT19_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT20_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT21_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT22_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT23_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT24_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT25_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT26_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT27_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT28_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT29_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT30_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT31_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT32_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT33_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT34_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT35_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT36_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT37_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT38_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT39_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT40_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT41_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT42_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT43_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT44_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT45_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT46_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT47_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT48_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT49_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT50_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT51_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT52_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT53_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT54_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT55_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT56_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT57_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT58_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT59_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT60_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT61_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT62_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT63_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT64_GLS_KF1_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |

### RES_0X4114

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT25_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT26_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT27_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT28_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT29_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT30_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT31_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT32_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT33_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT34_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT35_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT36_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT37_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT38_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT39_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT40_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT41_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT42_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT43_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT44_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT45_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT46_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT47_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT48_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT49_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT50_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT51_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT52_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT53_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT54_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT55_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT56_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT57_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT58_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT59_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT60_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT61_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT62_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT63_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT64_GLS_KF1_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |

### RES_0X4115

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT25_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT26_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT27_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT28_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT29_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT30_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT31_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT32_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT33_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT34_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT35_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT36_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT37_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT38_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT39_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT40_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT41_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT42_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT43_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT44_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT45_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT46_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT47_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT48_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT49_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT50_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT51_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT52_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT53_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT54_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT55_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT56_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT57_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT58_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT59_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT60_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT61_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT62_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT63_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT64_GLS_KF1_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |

### RES_0X4116

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT25_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT26_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT27_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT28_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT29_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT30_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT31_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT32_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT33_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT34_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT35_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT36_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT37_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT38_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT39_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT40_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT41_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT42_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT43_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT44_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT45_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT46_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT47_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT48_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT49_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT50_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT51_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT52_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT53_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT54_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT55_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT56_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT57_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT58_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT59_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT60_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT61_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT62_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT63_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT64_GLS_KF1_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |

### RES_0X411D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT25_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT26_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT27_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT28_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT29_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT30_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT31_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT32_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT33_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT34_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT35_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT36_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT37_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT38_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT39_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT40_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT41_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT42_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT43_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT44_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT45_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT46_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT47_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT48_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT49_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT50_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT51_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT52_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT53_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT54_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT55_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT56_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT57_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT58_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT59_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT60_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT61_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT62_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT63_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT64_GLS_KF1_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |

### RES_0X411E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT25_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT26_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT27_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT28_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT29_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT30_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT31_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT32_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT33_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT34_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT35_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT36_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT37_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT38_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT39_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT40_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT41_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT42_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT43_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT44_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT45_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT46_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT47_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT48_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT49_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT50_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT51_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT52_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT53_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT54_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT55_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT56_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT57_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT58_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT59_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT60_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT61_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT62_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT63_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT64_GLS_KF1_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |

### RES_0X411F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT25_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT26_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT27_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT28_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT29_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT30_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT31_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT32_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT33_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT34_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT35_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT36_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT37_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT38_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT39_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT40_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT41_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT42_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT43_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT44_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT45_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT46_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT47_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT48_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT49_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT50_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT51_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT52_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT53_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT54_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT55_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT56_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT57_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT58_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT59_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT60_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT61_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT62_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT63_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT64_GLS_KF1_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |

### RES_0X4120

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT25_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT26_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT27_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT28_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT29_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT30_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT31_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT32_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT33_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT34_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT35_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT36_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT37_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT38_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT39_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT40_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT41_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT42_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT43_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT44_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT45_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT46_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT47_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT48_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT49_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT50_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT51_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT52_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT53_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT54_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT55_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT56_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT57_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT58_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT59_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT60_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT61_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT62_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT63_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT64_GLS_KF1_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |

### RES_0X4121

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT25_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT26_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT27_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT28_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT29_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT30_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT31_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT32_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT33_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT34_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT35_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT36_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT37_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT38_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT39_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT40_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT41_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT42_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT43_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT44_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT45_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT46_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT47_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT48_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT49_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT50_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT51_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT52_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT53_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT54_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT55_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT56_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT57_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT58_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT59_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT60_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT61_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT62_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT63_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT64_GLS_KF1_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |

### RES_0X4122

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT25_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT26_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT27_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT28_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT29_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT30_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT31_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT32_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT33_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT34_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT35_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT36_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT37_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT38_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT39_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT40_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT41_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT42_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT43_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT44_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT45_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT46_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT47_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT48_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT49_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT50_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT51_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT52_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT53_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT54_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT55_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT56_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT57_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT58_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT59_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT60_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT61_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT62_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT63_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT64_GLS_KF1_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |

### RES_0X4123

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT25_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT26_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT27_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT28_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT29_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT30_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT31_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT32_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT33_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT34_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT35_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT36_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT37_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT38_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT39_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT40_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT41_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT42_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT43_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT44_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT45_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT46_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT47_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT48_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT49_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT50_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT51_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT52_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT53_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT54_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT55_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT56_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT57_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT58_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT59_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT60_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT61_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT62_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT63_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT64_GLS_KF1_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |

### RES_0X4124

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT25_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT26_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT27_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT28_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT29_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT30_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT31_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT32_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT33_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT34_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT35_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT36_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT37_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT38_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT39_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT40_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT41_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT42_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT43_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT44_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT45_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT46_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT47_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT48_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT49_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT50_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT51_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT52_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT53_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT54_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT55_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT56_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT57_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT58_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT59_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT60_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT61_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT62_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT63_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT64_GLS_KF1_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |

### RES_0X4125

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT25_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT26_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT27_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT28_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT29_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT30_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT31_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT32_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT33_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT34_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT35_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT36_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT37_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT38_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT39_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT40_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT41_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT42_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT43_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT44_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT45_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT46_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT47_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT48_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT49_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT50_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT51_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT52_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT53_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT54_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT55_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT56_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT57_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT58_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT59_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT60_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT61_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT62_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT63_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT64_GLS_KF1_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |

### RES_0X4126

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT25_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT26_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT27_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT28_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT29_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT30_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT31_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT32_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT33_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT34_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT35_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT36_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT37_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT38_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT39_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT40_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT41_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT42_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT43_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT44_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT45_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT46_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT47_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT48_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT49_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT50_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT51_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT52_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT53_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT54_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT55_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT56_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT57_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT58_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT59_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT60_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT61_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT62_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT63_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT64_GLS_KF1_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |

### RES_0X4127

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT25_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT26_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT27_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT28_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT29_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT30_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT31_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT32_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT33_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT34_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT35_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT36_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT37_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT38_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT39_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT40_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT41_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT42_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT43_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT44_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT45_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT46_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT47_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT48_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT49_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT50_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT51_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT52_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT53_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT54_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT55_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT56_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT57_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT58_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT59_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT60_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT61_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT62_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT63_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT64_GLS_KF1_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |

### RES_0X4128

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT25_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT26_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT27_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT28_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT29_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT30_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT31_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT32_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT33_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT34_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT35_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT36_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT37_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT38_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT39_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT40_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT41_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT42_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT43_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT44_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT45_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT46_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT47_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT48_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT49_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT50_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT51_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT52_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT53_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT54_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT55_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT56_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT57_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT58_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT59_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT60_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT61_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT62_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT63_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT64_GLS_KF1_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |

### RES_0X4129

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT25_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT26_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT27_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT28_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT29_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT30_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT31_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT32_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT33_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT34_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT35_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT36_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT37_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT38_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT39_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT40_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT41_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT42_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT43_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT44_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT45_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT46_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT47_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT48_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT49_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT50_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT51_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT52_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT53_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT54_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT55_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT56_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT57_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT58_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT59_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT60_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT61_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT62_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT63_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT64_GLS_KF1_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |

### RES_0X412A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |

### RES_0X412B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |

### RES_0X412C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |

### RES_0X412D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |

### RES_0X412E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |

### RES_0X4130

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_A_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung A |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_B_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung B |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_C_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung C |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_D_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung D |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_E_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung E |

### RES_0X4131

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_A_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung A |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_B_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung B |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_C_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung C |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_D_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung D |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_E_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung E |

### RES_0X4133

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_1_2_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 1-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_2_3_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 2-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_3_4_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 3-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_4_5_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 4-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_5_6_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 5-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_6_7_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 6-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_7_8_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 7-8 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_1_3_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 1-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_2_4_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 2-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_3_5_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 3-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_4_6_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 4-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_5_7_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 5-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_6_8_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 6-8 in der GLS-Adaption |

### RES_0X4134

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_2_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 2-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_3_2_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 3-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_4_3_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 4-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_5_4_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 5-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_6_5_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 6-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_7_6_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 7-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_7_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_3_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 3-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_4_2_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 4-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_5_3_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 5-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_6_4_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 6-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_7_5_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 7-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_6_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_5_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 5-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_6_3_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 6-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_7_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 7-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_2_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_4_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-4 in der GLS-Adaption |

### RES_0X4136

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_1_2_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 1-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_2_3_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 2-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_3_4_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 3-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_4_5_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 4-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_5_6_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 5-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_6_7_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 6-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_7_8_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 7-8 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_1_3_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 1-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_2_4_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 2-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_3_5_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 3-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_4_6_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 4-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_5_7_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 5-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_6_8_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 6-8 in der GLS-Adaption |

### RES_0X4137

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_2_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 2-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_3_2_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 3-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_4_3_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 4-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_5_4_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 5-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_6_5_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 6-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_7_6_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 7-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_7_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_3_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 3-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_4_2_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 4-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_5_3_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 5-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_6_4_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 6-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_7_5_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 7-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_6_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_5_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 5-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_6_3_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 6-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_7_1_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 7-1 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_2_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_4_WERT | mbar | high | unsigned int | - | - | - | - | - | Zähler der Rückschaltung 8-4 in der GLS-Adaption |

### RES_0X413A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_A_WERT | mbar | high | int | - | - | - | - | - | Adaption Kupplung A |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_B_WERT | mbar | high | int | - | - | - | - | - | Adaption Kupplung B |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_C_WERT | mbar | high | int | - | - | - | - | - | Adaption Kupplung C |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_D_WERT | mbar | high | int | - | - | - | - | - | Adaption Kupplung D |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_E_WERT | mbar | high | int | - | - | - | - | - | Adaption Kupplung E |

### RES_0X4140

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_A_WERT | ms | high | int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung A |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_B_WERT | ms | high | int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung B |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_C_WERT | ms | high | int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung C |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_D_WERT | ms | high | int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung D |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_E_WERT | ms | high | int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung E |

### RES_0X4143

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_BFLGLSHS_1_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 1-2 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_2_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 2-3 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_3_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 3-4 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_4_5_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 4-5 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_5_6_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 5-6 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_6_7_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 6-7 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_7_8_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 7-8 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_2_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 2-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_5_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_6_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_7_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-7 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_5_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_6_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-4 |

### RES_0X4144

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_BFLGLSHS_1_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 1-2 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_2_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 2-3 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_3_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 3-4 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_4_5_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 4-5 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_5_6_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 5-6 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_6_7_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 6-7 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_7_8_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 7-8 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_2_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 2-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_5_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_6_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_7_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-7 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_5_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_6_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_3_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_1_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_2_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_4_WERT | mbar | high | int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-4 |

### RES_0X4160

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT2_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT3_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT4_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT5_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT6_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT7_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT8_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT9_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT10_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT11_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT12_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT13_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT14_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT15_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT16_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT17_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT18_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT19_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT20_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT21_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT22_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT23_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT24_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT25_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT26_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT27_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT28_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT29_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT30_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT31_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT32_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT33_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT34_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT35_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT36_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT37_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT38_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT39_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT40_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT41_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT42_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT43_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT44_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT45_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT46_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT47_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT48_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT49_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT50_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT51_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT52_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT53_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT54_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT55_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT56_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT57_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT58_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT59_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT60_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT61_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT62_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT63_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT64_GLS_KF2_1_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 1-2 |

### RES_0X4161

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT2_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT3_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT4_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT5_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT6_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT7_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT8_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT9_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT10_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT11_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT12_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT13_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT14_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT15_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT16_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT17_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT18_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT19_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT20_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT21_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT22_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT23_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT24_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT25_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT26_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT27_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT28_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT29_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT30_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT31_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT32_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT33_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT34_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT35_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT36_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT37_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT38_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT39_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT40_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT41_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT42_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT43_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT44_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT45_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT46_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT47_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT48_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT49_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT50_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT51_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT52_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT53_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT54_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT55_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT56_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT57_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT58_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT59_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT60_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT61_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT62_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT63_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT64_GLS_KF2_2_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 2-3 |

### RES_0X4162

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT2_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT3_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT4_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT5_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT6_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT7_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT8_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT9_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT10_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT11_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT12_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT13_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT14_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT15_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT16_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT17_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT18_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT19_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT20_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT21_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT22_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT23_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT24_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT25_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT26_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT27_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT28_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT29_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT30_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT31_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT32_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT33_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT34_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT35_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT36_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT37_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT38_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT39_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT40_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT41_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT42_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT43_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT44_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT45_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT46_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT47_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT48_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT49_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT50_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT51_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT52_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT53_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT54_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT55_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT56_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT57_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT58_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT59_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT60_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT61_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT62_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT63_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT64_GLS_KF2_3_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 3-4 |

### RES_0X4163

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT2_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT3_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT4_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT5_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT6_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT7_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT8_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT9_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT10_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT11_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT12_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT13_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT14_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT15_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT16_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT17_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT18_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT19_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT20_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT21_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT22_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT23_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT24_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT25_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT26_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT27_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT28_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT29_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT30_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT31_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT32_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT33_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT34_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT35_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT36_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT37_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT38_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT39_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT40_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT41_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT42_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT43_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT44_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT45_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT46_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT47_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT48_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT49_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT50_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT51_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT52_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT53_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT54_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT55_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT56_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT57_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT58_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT59_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT60_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT61_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT62_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT63_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT64_GLS_KF2_4_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 4-5 |

### RES_0X4164

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT2_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT3_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT4_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT5_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT6_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT7_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT8_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT9_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT10_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT11_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT12_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT13_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT14_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT15_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT16_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT17_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT18_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT19_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT20_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT21_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT22_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT23_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT24_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT25_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT26_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT27_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT28_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT29_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT30_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT31_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT32_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT33_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT34_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT35_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT36_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT37_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT38_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT39_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT40_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT41_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT42_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT43_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT44_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT45_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT46_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT47_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT48_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT49_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT50_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT51_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT52_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT53_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT54_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT55_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT56_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT57_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT58_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT59_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT60_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT61_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT62_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT63_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT64_GLS_KF2_5_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 5-6 |

### RES_0X4165

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT2_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT3_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT4_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT5_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT6_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT7_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT8_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT9_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT10_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT11_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT12_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT13_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT14_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT15_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT16_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT17_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT18_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT19_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT20_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT21_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT22_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT23_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT24_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT25_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT26_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT27_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT28_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT29_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT30_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT31_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT32_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT33_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT34_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT35_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT36_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT37_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT38_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT39_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT40_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT41_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT42_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT43_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT44_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT45_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT46_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT47_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT48_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT49_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT50_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT51_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT52_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT53_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT54_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT55_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT56_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT57_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT58_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT59_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT60_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT61_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT62_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT63_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT64_GLS_KF2_6_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 6-7 |

### RES_0X4166

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT2_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT3_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT4_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT5_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT6_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT7_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT8_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT9_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT10_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT11_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT12_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT13_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT14_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT15_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT16_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT17_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT18_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT19_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT20_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT21_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT22_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT23_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT24_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT25_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT26_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT27_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT28_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT29_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT30_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT31_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT32_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT33_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT34_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT35_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT36_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT37_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT38_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT39_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT40_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT41_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT42_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT43_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT44_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT45_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT46_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT47_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT48_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT49_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT50_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT51_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT52_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT53_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT54_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT55_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT56_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT57_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT58_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT59_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT60_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT61_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT62_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT63_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT64_GLS_KF2_7_8_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Hochschaltung 7-8 |

### RES_0X416D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT2_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT3_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT4_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT5_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT6_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT7_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT8_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT9_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT10_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT11_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT12_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT13_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT14_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT15_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT16_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT17_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT18_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT19_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT20_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT21_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT22_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT23_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT24_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT25_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT26_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT27_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT28_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT29_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT30_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT31_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT32_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT33_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT34_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT35_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT36_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT37_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT38_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT39_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT40_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT41_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT42_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT43_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT44_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT45_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT46_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT47_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT48_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT49_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT50_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT51_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT52_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT53_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT54_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT55_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT56_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT57_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT58_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT59_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT60_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT61_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT62_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT63_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT64_GLS_KF2_2_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 2-1 |

### RES_0X416E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT2_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT3_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT4_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT5_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT6_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT7_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT8_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT9_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT10_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT11_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT12_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT13_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT14_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT15_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT16_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT17_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT18_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT19_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT20_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT21_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT22_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT23_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT24_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT25_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT26_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT27_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT28_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT29_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT30_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT31_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT32_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT33_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT34_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT35_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT36_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT37_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT38_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT39_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT40_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT41_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT42_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT43_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT44_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT45_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT46_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT47_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT48_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT49_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT50_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT51_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT52_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT53_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT54_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT55_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT56_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT57_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT58_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT59_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT60_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT61_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT62_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT63_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT64_GLS_KF2_3_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 3-2 |

### RES_0X416F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT2_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT3_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT4_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT5_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT6_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT7_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT8_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT9_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT10_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT11_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT12_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT13_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT14_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT15_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT16_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT17_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT18_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT19_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT20_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT21_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT22_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT23_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT24_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT25_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT26_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT27_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT28_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT29_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT30_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT31_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT32_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT33_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT34_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT35_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT36_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT37_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT38_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT39_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT40_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT41_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT42_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT43_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT44_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT45_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT46_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT47_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT48_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT49_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT50_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT51_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT52_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT53_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT54_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT55_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT56_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT57_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT58_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT59_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT60_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT61_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT62_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT63_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT64_GLS_KF2_4_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 4-3 |

### RES_0X4170

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT2_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT3_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT4_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT5_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT6_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT7_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT8_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT9_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT10_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT11_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT12_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT13_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT14_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT15_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT16_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT17_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT18_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT19_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT20_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT21_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT22_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT23_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT24_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT25_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT26_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT27_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT28_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT29_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT30_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT31_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT32_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT33_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT34_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT35_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT36_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT37_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT38_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT39_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT40_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT41_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT42_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT43_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT44_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT45_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT46_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT47_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT48_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT49_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT50_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT51_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT52_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT53_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT54_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT55_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT56_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT57_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT58_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT59_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT60_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT61_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT62_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT63_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT64_GLS_KF2_5_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 5-4 |

### RES_0X4171

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT2_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT3_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT4_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT5_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT6_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT7_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT8_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT9_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT10_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT11_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT12_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT13_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT14_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT15_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT16_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT17_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT18_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT19_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT20_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT21_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT22_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT23_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT24_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT25_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT26_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT27_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT28_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT29_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT30_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT31_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT32_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT33_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT34_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT35_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT36_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT37_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT38_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT39_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT40_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT41_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT42_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT43_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT44_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT45_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT46_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT47_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT48_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT49_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT50_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT51_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT52_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT53_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT54_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT55_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT56_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT57_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT58_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT59_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT60_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT61_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT62_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT63_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT64_GLS_KF2_6_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 6-5 |

### RES_0X4172

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT2_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT3_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT4_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT5_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT6_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT7_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT8_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT9_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT10_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT11_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT12_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT13_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT14_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT15_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT16_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT17_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT18_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT19_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT20_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT21_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT22_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT23_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT24_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT25_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT26_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT27_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT28_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT29_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT30_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT31_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT32_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT33_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT34_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT35_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT36_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT37_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT38_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT39_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT40_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT41_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT42_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT43_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT44_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT45_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT46_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT47_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT48_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT49_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT50_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT51_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT52_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT53_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT54_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT55_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT56_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT57_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT58_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT59_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT60_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT61_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT62_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT63_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT64_GLS_KF2_7_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 7-6 |

### RES_0X4173

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT2_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT3_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT4_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT5_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT6_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT7_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT8_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT9_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT10_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT11_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT12_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT13_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT14_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT15_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT16_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT17_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT18_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT19_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT20_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT21_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT22_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT23_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT24_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT25_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT26_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT27_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT28_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT29_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT30_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT31_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT32_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT33_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT34_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT35_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT36_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT37_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT38_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT39_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT40_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT41_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT42_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT43_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT44_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT45_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT46_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT47_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT48_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT49_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT50_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT51_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT52_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT53_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT54_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT55_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT56_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT57_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT58_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT59_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT60_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT61_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT62_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT63_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT64_GLS_KF2_8_7_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Rückschaltung 8-7 |

### RES_0X4174

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT2_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT3_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT4_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT5_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT6_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT7_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT8_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT9_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT10_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT11_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT12_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT13_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT14_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT15_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT16_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT17_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT18_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT19_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT20_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT21_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT22_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT23_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT24_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT25_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT26_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT27_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT28_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT29_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT30_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT31_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT32_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT33_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT34_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT35_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT36_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT37_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT38_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT39_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT40_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT41_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT42_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT43_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT44_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT45_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT46_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT47_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT48_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT49_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT50_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT51_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT52_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT53_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT54_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT55_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT56_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT57_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT58_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT59_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT60_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT61_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT62_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT63_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT64_GLS_KF2_3_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |

### RES_0X4175

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT2_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT3_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT4_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT5_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT6_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT7_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT8_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT9_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT10_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT11_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT12_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT13_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT14_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT15_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT16_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT17_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT18_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT19_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT20_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT21_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT22_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT23_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT24_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT25_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT26_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT27_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT28_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT29_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT30_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT31_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT32_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT33_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT34_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT35_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT36_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT37_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT38_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT39_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT40_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT41_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT42_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT43_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT44_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT45_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT46_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT47_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT48_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT49_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT50_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT51_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT52_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT53_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT54_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT55_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT56_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT57_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT58_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT59_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT60_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT61_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT62_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT63_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT64_GLS_KF2_4_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |

### RES_0X4176

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT2_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT3_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT4_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT5_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT6_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT7_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT8_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT9_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT10_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT11_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT12_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT13_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT14_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT15_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT16_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT17_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT18_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT19_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT20_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT21_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT22_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT23_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT24_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT25_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT26_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT27_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT28_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT29_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT30_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT31_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT32_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT33_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT34_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT35_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT36_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT37_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT38_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT39_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT40_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT41_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT42_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT43_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT44_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT45_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT46_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT47_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT48_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT49_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT50_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT51_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT52_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT53_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT54_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT55_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT56_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT57_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT58_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT59_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT60_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT61_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT62_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT63_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT64_GLS_KF2_5_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |

### RES_0X4177

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT2_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT3_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT4_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT5_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT6_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT7_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT8_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT9_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT10_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT11_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT12_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT13_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT14_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT15_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT16_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT17_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT18_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT19_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT20_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT21_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT22_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT23_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT24_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT25_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT26_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT27_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT28_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT29_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT30_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT31_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT32_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT33_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT34_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT35_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT36_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT37_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT38_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT39_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT40_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT41_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT42_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT43_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT44_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT45_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT46_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT47_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT48_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT49_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT50_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT51_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT52_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT53_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT54_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT55_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT56_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT57_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT58_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT59_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT60_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT61_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT62_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT63_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT64_GLS_KF2_6_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |

### RES_0X4178

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT2_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT3_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT4_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT5_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT6_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT7_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT8_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT9_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT10_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT11_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT12_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT13_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT14_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT15_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT16_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT17_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT18_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT19_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT20_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT21_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT22_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT23_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT24_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT25_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT26_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT27_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT28_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT29_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT30_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT31_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT32_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT33_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT34_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT35_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT36_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT37_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT38_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT39_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT40_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT41_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT42_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT43_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT44_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT45_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT46_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT47_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT48_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT49_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT50_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT51_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT52_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT53_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT54_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT55_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT56_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT57_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT58_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT59_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT60_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT61_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT62_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT63_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT64_GLS_KF2_7_5_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |

### RES_0X4179

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT2_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT3_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT4_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT5_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT6_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT7_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT8_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT9_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT10_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT11_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT12_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT13_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT14_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT15_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT16_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT17_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT18_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT19_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT20_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT21_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT22_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT23_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT24_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT25_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT26_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT27_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT28_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT29_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT30_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT31_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT32_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT33_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT34_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT35_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT36_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT37_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT38_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT39_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT40_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT41_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT42_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT43_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT44_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT45_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT46_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT47_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT48_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT49_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT50_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT51_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT52_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT53_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT54_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT55_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT56_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT57_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT58_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT59_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT60_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT61_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT62_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT63_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT64_GLS_KF2_8_6_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |

### RES_0X417A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT2_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT3_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT4_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT5_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT6_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT7_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT8_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT9_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT10_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT11_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT12_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT13_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT14_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT15_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT16_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT17_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT18_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT19_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT20_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT21_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT22_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT23_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT24_GLS_KF2_5_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |

### RES_0X417B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT2_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT3_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT4_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT5_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT6_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT7_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT8_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT9_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT10_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT11_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT12_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT13_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT14_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT15_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT16_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT17_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT18_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT19_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT20_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT21_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT22_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT23_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT24_GLS_KF2_6_3_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |

### RES_0X417C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT2_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT3_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT4_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT5_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT6_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT7_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT8_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT9_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT10_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT11_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT12_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT13_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT14_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT15_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT16_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT17_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT18_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT19_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT20_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT21_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT22_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT23_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT24_GLS_KF2_7_1_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |

### RES_0X417D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT2_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT3_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT4_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT5_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT6_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT7_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT8_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT9_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT10_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT11_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT12_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT13_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT14_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT15_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT16_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT17_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT18_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT19_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT20_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT21_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT22_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT23_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT24_GLS_KF2_8_2_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |

### RES_0X417E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT2_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT3_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT4_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT5_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT6_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT7_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT8_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT9_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT10_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT11_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT12_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT13_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT14_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT15_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT16_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT17_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT18_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT19_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT20_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT21_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT22_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT23_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT24_GLS_KF2_8_4_WERT | bar | high | char | - | - | - | 100 | - | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |

### RES_0X4307

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTO_N | 0/1 | high | int | 0x0001 | - | - | - | - | -- |
| STAT_AUTO_P | 0/1 | high | int | 0x0002 | - | - | - | - | -- |
| STAT_DIAG_N | 0/1 | high | int | 0x0004 | - | - | - | - | -- |
| STAT_DIAG_P | 0/1 | high | int | 0x0008 | - | - | - | - | -- |
| STAT_POS_DRV_REQ | 0-n | high | int | 0x00F0 | TAB_POS_SBW | - | - | - | -- |
| STAT_IGN | 0/1 | high | int | 0x0200 | - | - | - | - | -- |
| STAT_SEAT | 0/1 | high | int | 0x0800 | - | - | - | - | -- |
| STAT_BELT | 0/1 | high | int | 0x1000 | - | - | - | - | -- |
| STAT_DOOR | 0/1 | high | int | 0x2000 | - | - | - | - | -- |
| STAT_BRAKE | 0/1 | high | int | 0x4000 | - | - | - | - | -- |
| STAT_FREE | 0/1 | high | int | 0x8000 | - | - | - | - | -- |

### RES_0X431E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_N_HALTE_COUNT_DATENSATZ_1_WERT | - | - | char | - | - | - | - | - | - |
| STAT_N_HALTE_SYSTIME_DATENSATZ_1_WERT | sec | - | long | - | - | - | - | - | - |
| STAT_N_HALTE_DISTANZE_DATENSATZ_1_WERT | km | - | int | - | - | 10 | - | - | - |
| STAT_N_HALTE_COUNT_DATENSATZ_2_WERT | - | - | char | - | - | - | - | - | - |
| STAT_N_HALTE_SYSTIME_DATENSATZ_2_WERT | sec | - | long | - | - | - | - | - | - |
| STAT_N_HALTE_DISTANZE_DATENSATZ_2_WERT | km | - | int | - | - | 10 | - | - | - |
| STAT_N_HALTE_COUNT_DATENSATZ_3_WERT | - | - | char | - | - | - | - | - | - |
| STAT_N_HALTE_SYSTIME_DATENSATZ_3_WERT | sec | - | long | - | - | - | - | - | - |
| STAT_N_HALTE_DISTANZE_DATENSATZ_3_WERT | km | - | int | - | - | 10 | - | - | - |

### RES_0X4400

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAGNETVENTIL_POS | 0-n | low | char | - | TAB_MAGNETVENTILE | - | - | - | - |
| STAT_MAGNETVENTIL_MSA | 0-n | low | char | - | TAB_MAGNETVENTILE | - | - | - | - |
| STAT_MAGNETVENTIL_PS | 0-n | low | char | - | TAB_MAGNETVENTILE | - | - | - | - |

### RES_0X4403

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PEGEL_L1_LEITUNG | - | - | - | 0-n | low | char | - | l_leitung | - | - | - | 0: Pegel low 1: Pegel high |
| STAT_PEGEL_L2_LEITUNG | - | - | - | 0-n | low | char | - | l_leitung | - | - | - | 0: Pegel low 1: Pegel high |
| STAT_PEGEL_L3_LEITUNG | - | - | - | 0-n | low | char | - | l_leitung | - | - | - | 0: Pegel low 1: Pegel high |
| STAT_PEGEL_L4_LEITUNG | - | - | - | 0-n | low | char | - | l_leitung | - | - | - | 0: Pegel low 1: Pegel high |

### RES_0X4425

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERSATZPROGRAMM_1 | BIT | high | BITFIELD | - | TAB_ERSATZMASSNAHMEN1 | - | - | - | Zeigt den Status der ersten 32 Ersatzmaßnahmen (von 64) |
| STAT_ERSATZPROGRAMM_2 | BIT | high | BITFIELD | - | TAB_ERSATZMASSNAHMEN2 | - | - | - | Zeigt den Status der letzten 32 Ersatzmaßnahmen (von 64) |

### RES_0X4440

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATURBEREICH_1_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 1 von -40° bis 0° |
| STAT_TEMPERATURBEREICH_2_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 2 von 0° bis 40° |
| STAT_TEMPERATURBEREICH_3_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 3 von 40° bis 90° |
| STAT_TEMPERATURBEREICH_4_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 4 von 90° bis 105° |
| STAT_TEMPERATURBEREICH_5_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 5 von 105° bis 120° |
| STAT_TEMPERATURBEREICH_6_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 6 von 120° bis 130° |
| STAT_TEMPERATURBEREICH_7_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 7 von 130° bis 135° |
| STAT_TEMPERATURBEREICH_8_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 8 von 135° bis 140° |
| STAT_TEMPERATURBEREICH_9_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 9 von 140° bis 145° |
| STAT_TEMPERATURBEREICH_10_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 10 von 145° bis 150° |
| STAT_TEMPERATURBEREICH_11_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 11 von 150° bis 155° |
| STAT_TEMPERATURBEREICH_12_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 12 von 155° bis 170° |
| STAT_TEMPERATURBEREICH_13_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich konnte nicht sicher festgestellt werden |

### RES_0X4441

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATURBEREICH_1_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 1 von -40° bis 40° |
| STAT_TEMPERATURBEREICH_2_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 2 von    40° bis 80° |
| STAT_TEMPERATURBEREICH_3_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 3 von  80° bis 90° |
| STAT_TEMPERATURBEREICH_4_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 4 von  90° bis 95° |
| STAT_TEMPERATURBEREICH_5_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 5 von 95° bis 100° |
| STAT_TEMPERATURBEREICH_6_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 6 von 100° bis 105° |
| STAT_TEMPERATURBEREICH_7_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 7 von 105° bis 110° |
| STAT_TEMPERATURBEREICH_8_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 8 von 110° bis 115° |
| STAT_TEMPERATURBEREICH_9_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 9 von 115° bis 120° |
| STAT_TEMPERATURBEREICH_10_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 10 von 120° bis 130° |
| STAT_TEMPERATURBEREICH_11_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 11 von 130° bis 140° |
| STAT_TEMPERATURBEREICH_12_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich 12 von 140° bis 170° |
| STAT_TEMPERATURBEREICH_13_WERT | s | - | unsigned long | - | - | - | - | - | Temperaturbereich konnte nicht sicher festgestellt werden |

### RES_0X4500

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIC | 0-n | low | char | - | nic | - | - | - | 0: NIC ausgeschaltet, 1: NIC eingeschaltet |
| STAT_SPORTTASTER | 0-n | low | char | - | sporttaster | - | - | - | 2: zum Sporttaster Service 4501 oder. 4502 benutzen |
| STAT_CODIERUNG_MIL | 0-n | low | char | - | mil | - | - | - | 0: MIL aus; 1: MIL ein |
| STAT_CODIERUNG_SCANTOOL | 0-n | low | char | - | scantool | - | - | - | 0: Kommunikation aus; 1: Kommunikation ein |
| STAT_CODIERUNG_MIL_CYCLES_WERT | - | low | char | - | - | - | - | - | Wert bestimmt nach wie vielen Zyklen das MIL aktiviert wird (0 = US = 2 Zyklen, 1= ECE = 3 Zyklen) |

### RES_0X4501

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_3000_DATA | DATA | - | data[2] | - | - | - | - | - | Codierung 0x3000, siehe _DATA nicht _WERT |
| STAT_CODIERUNG_3001_DATA | DATA | - | data[2] | - | - | - | - | - | Codierung 0x3001, siehe _DATA nicht _WERT |

### RES_0X4502

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_MOD_3000_DATA | DATA | - | data[2] | - | - | - | - | - | Codierung 0x3000, siehe _DATA nicht _WERT |
| STAT_CODIERUNG_MOD_3001_DATA | DATA | - | data[2] | - | - | - | - | - | Codierung 0x3001, siehe _DATA nicht _WERT |

### RES_0X4840

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_IEP | 0-n | high | char | 0x0F | TAB_IEP_STATUS | - | - | - | Zusatzoelpumpe Status |
| STAT_STATUS_IEP_ERROR | 0-n | high | char | 0xF0 | TAB_IEP_ERROR_STATUS | - | - | - | Zusatzoelpumpe Error Status |

### RES_0X4870

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CNT_RST_SUCCESS_SUM_DATA | DATA | - | data[2] | - | - | - | - | - | Erfolgszähler RZN |
| STAT_CNT_RST_FAIL_SUM_DATA | DATA | - | data[2] | - | - | - | - | - | Mißerfolgszähler RZN |

### RES_0XDA1D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADGESCHWINDIGKEIT_HL_WERT | rad/s | - | unsigned int | - | - | 1 | 64 | -512 | Radgeschwindigkeit hinten links M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |
| STAT_RADGESCHWINDIGKEIT_HR_WERT | rad/s | - | unsigned int | - | - | 1 | 64 | -512 | Radgeschwindigkeit hinten rechts M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |
| STAT_RADGESCHWINDIGKEIT_VL_WERT | rad/s | - | unsigned int | - | - | 1 | 64 | -512 | Radgeschwindigkeit vorne links M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |
| STAT_RADGESCHWINDIGKEIT_VR_WERT | rad/s | - | unsigned int | - | - | 1 | 64 | -512 | Radgeschwindigkeit vorne rechts M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |

### RES_0XDA24

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_MINUS | 0-n | - | int | - | TAB_SCHALTWIPPE | - | - | - | 0: Schaltwippe minus nicht betätigt 1: Schaltwippe minus betätigt |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_PLUS | 0-n | - | int | - | TAB_SCHALTWIPPE | - | - | - | 0: Schaltwippe plus nicht betätigt 1: Schaltwippe plus betätigt |

### RES_0XDA27

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WAEHLHEBELANZEIGE | 0-n | - | int | - | TAB_WAEHLHEBELANZEIGE | - | - | - | Waehlhebelanzeige als Wert siehe table TAB_WAEHLHEBELANZEIGE |
| STAT_WAEHLHEBELSTELLUNG | 0-n | - | int | - | TAB_WAEHLHEBELSTELLUNG | - | - | - | Waehlhebelstellung: R,0,A,S,+,-,n.def. als Wert, siehe table TAB_WAEHLHEBELSTELLUNG |
| STAT_WAEHLHEBELSTELLUNG_P_TASTER | 0-n | - | int | - | TAB_P_TASTER | - | - | - | Hier muss die Wählhebelposition aus dem A-CAN-Signal Bedienung_Gangwahlschalter_Taster_Parken als Wert ausgegeben.TAB_P_TASTER |

### RES_0XDA28

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSLICHTSCHALTER_EIN | 0-n | - | int | - | TAB_STATUS_BLS | - | - | - | 1 = Bremslichtschalter betätigt |
| STAT_BREMSLICHTTESTSCHALTER_EIN | 0-n | - | int | - | TAB_STATUS_BLS | - | - | - | 1 = Bremslichttestschalter betätigt |

### RES_0XDA2A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANGSDREHZAHL_WERT | 1/min | - | int | - | - | - | - | - | Getriebeeingangsdrehzahl der ersten Welle Bereich von 0 [1/min] bis 10000 [1/min] |
| STAT_AUSGANGSDREHZAHL_WERT | 1/min | - | int | - | - | - | - | - | Getriebeausgangsdrehzahl Bereich von 0 [1/min] bis 10000 [1/min] |

### RES_0XDA37

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_D_ZAEHLER_WERT | sec | - | unsigned long | - | - | - | - | - | Die Zeit, die der Fahrer in Position D gefahren ist |
| STAT_S_ZAEHLER_WERT | sec | - | unsigned long | - | - | - | - | - | Die Zeit, die der Fahrer in Position S gefahren ist |
| STAT_M_ZAEHLER_WERT | sec | - | unsigned long | - | - | - | - | - | Die Zeit, die der Fahrer im Manuellen Modus gefahren ist |

### RES_0XDA40

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HA_BERECHNETER_WERT | - | - | int | - | - | - | 1000 | - | Berechneter Wert aus den 11 eingelernten Werten |
| STAT_HA_WERT | - | - | int | - | - | - | 1000 | - | Eingelernter Wert der Hinterachse |
| STAT_HA_LERNFLAG | 0-n | - | int | - | TAB_HA | - | - | - | 0 = nicht eingelernt 1= eingelernt |
| STAT_HA_START_WERT | - | - | int | - | - | - | 1000 | - | Vorgabewerte für ersten gemessenen Lernwert |
| STAT_ANZAHL_HA_LERN_WERT | - | - | int | - | - | - | - | - | Es wird festgehalten, wie viele Werte für das Lernen gemessen werden |
| STAT_HA_AVR_WERT | - | - | int | - | - | - | 1000 | - | Statistisch berechnete Werte aus der Anzahl der Anlernwerte |
| STAT_HA_1_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_2_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_3_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_4_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_5_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_6_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_7_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_8_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_9_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_10_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |
| STAT_HA_11_MESS_WERT | - | - | int | - | - | - | 1000 | - | Rückgabe der Messwerte. Die Anzahl der Messwerte ist durch ANZAHL_HA_LERN_WERTE festgelegt |

### RES_LEARN1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARN_DIAGNOSE_OBD_MOTOR_FA | - | - | - | 0/1 | high | long | 0x00000001 | - | - | - | - | -- |
| STAT_LEARN_DIAGNOSE_OBD_MOTOR_A | - | - | - | 0/1 | high | long | 0x00000002 | - | - | - | - | -- |
| STAT_LEARN_STATUS_GANGWAHLSCHALTER_FA | - | - | - | 0/1 | high | long | 0x00000004 | - | - | - | - | -- |
| STAT_LEARN_STATUS_GANGWAHLSCHALTER_A | - | - | - | 0/1 | high | long | 0x00000008 | - | - | - | - | -- |
| STAT_LEARN_IST_DREHZAHL_RAD_UNGESICHERT_FA | - | - | - | 0/1 | high | long | 0x00000010 | - | - | - | - | -- |
| STAT_LEARN_STATUS_STABILISIERUNG_DSC_FA | - | - | - | 0/1 | high | long | 0x00000020 | - | - | - | - | -- |
| STAT_LEARN_IST_BREMSMOMENT_SUMME_FA | - | - | - | 0/1 | high | long | 0x00000040 | - | - | - | - | -- |
| STAT_LEARN_STATUS_FAHRZEUGSTILLSTAND_FA | - | - | - | 0/1 | high | long | 0x00000080 | - | - | - | - | -- |
| STAT_LEARN_FAHRZEUGZUSTAND_FA | - | - | - | 0/1 | high | long | 0x00000100 | - | - | - | - | -- |
| STAT_LEARN_KLEMMEN_FA | - | - | - | 0/1 | high | long | 0x00000200 | - | - | - | - | -- |
| STAT_LEARN_ZV_UND_KLAPPENZUSTAND_FA | - | - | - | 0/1 | high | long | 0x00000400 | - | - | - | - | -- |
| STAT_LEARN_STATUS_TUERSENSOREN_ABGESICHERT_FA | - | - | - | 0/1 | high | long | 0x00000800 | - | - | - | - | -- |
| STAT_LEARN_STATUS_FAHRZEUGSTILLSTAND_PARKBREMSE_FA | - | - | - | 0/1 | high | long | 0x00001000 | - | - | - | - | -- |
| STAT_LEARN_NEIGUNG_FAHRBAHN_FA | - | - | - | 0/1 | high | long | 0x00002000 | - | - | - | - | -- |
| STAT_LEARN_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_FA | - | - | - | 0/1 | high | long | 0x00004000 | - | - | - | - | -- |
| STAT_LEARN_QUERBESCHLEUNIGUNG_SCHWERPUNKT_FA | - | - | - | 0/1 | high | long | 0x00008000 | - | - | - | - | -- |
| STAT_LEARN_KONFIGURATION_SCHALTER_FAHRDYNAMIK_FA | - | - | - | 0/1 | high | long | 0x00010000 | - | - | - | - | -- |
| STAT_LEARN_GESCHWINDIGKEIT_FAHRZEUG_FA | - | - | - | 0/1 | high | long | 0x00020000 | - | - | - | - | -- |
| STAT_LEARN_GIERGESCHWINDIGKEIT_FAHRZEUG_FA | - | - | - | 0/1 | high | long | 0x00040000 | - | - | - | - | -- |
| STAT_LEARN_MASSE_GEWICHT_FAHRZEUG_FA | - | - | - | 0/1 | high | long | 0x00080000 | - | - | - | - | -- |
| STAT_LEARN_RELATIVZEIT_FA | - | - | - | 0/1 | high | long | 0x00100000 | - | - | - | - | -- |
| STAT_LEARN_AUSSENTEMPERATUR_FA | - | - | - | 0/1 | high | long | 0x00200000 | - | - | - | - | -- |
| STAT_LEARN_STATUS_ANZEIGE_FAHRDYNAMIK_FA | - | - | - | 0/1 | high | long | 0x00400000 | - | - | - | - | -- |
| STAT_LEARN_KILOMETER_REICHWEITE_FA | - | - | - | 0/1 | high | long | 0x00800000 | - | - | - | - | -- |
| STAT_LEARN_STATUS_ANHAENGER_FA | - | - | - | 0/1 | high | long | 0x01000000 | - | - | - | - | -- |
| STAT_LEARN_STATUS_GURT_KONTAKT_SITZBELEGUNG_FA | - | - | - | 0/1 | high | long | 0x02000000 | - | - | - | - | -- |
| STAT_LEARN_BEDIENUNG_SCHALTPADDEL_FA | - | - | - | 0/1 | high | long | 0x04000000 | - | - | - | - | -- |
| STAT_LEARN_DREHMOMENT_KURBELWELLE_1_A | - | - | - | 0/1 | high | long | 0x08000000 | - | - | - | - | -- |
| STAT_LEARN_DREHMOMENT_KURBELWELLE_2_A | - | - | - | 0/1 | high | long | 0x10000000 | - | - | - | - | -- |
| STAT_LEARN_DREHMOMENT_KURBELWELLE_3_A | - | - | - | 0/1 | high | long | 0x20000000 | - | - | - | - | -- |
| STAT_LEARN_DATEN_ANTRIEBSSTRANG_1_A | - | - | - | 0/1 | high | long | 0x40000000 | - | - | - | - | -- |
| STAT_LEARN_DATEN_ANTRIEBSSTRANG_2_A | - | - | - | 0/1 | high | long | 0x80000000 | - | - | - | - | -- |

### RES_LEARN2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARN_WINKEL_FAHRPEDAL_A | - | - | - | 0/1 | high | long | 0x00000001 | - | - | - | - | -- |
| STAT_LEARN_RADMOMENT_ANTRIEB_1_A | - | - | - | 0/1 | high | long | 0x00000002 | - | - | - | - | -- |
| STAT_LEARN_STATUS_MOTOR_START_AUTO_A | - | - | - | 0/1 | high | long | 0x00000004 | - | - | - | - | -- |
| STAT_LEARN_RADMOMENT_ANTRIEB_3_A | - | - | - | 0/1 | high | long | 0x00000008 | - | - | - | - | -- |
| STAT_LEARN_RADMOMENT_ANTRIEB_7_A | - | - | - | 0/1 | high | long | 0x00000010 | - | - | - | - | -- |
| STAT_LEARN_HYBRID_VORGABE_A | - | - | - | 0/1 | high | long | 0x00000020 | - | - | - | - | -- |
| STAT_LEARN_IST_DATEN_E_MOTOR_1_LANGZEIT_A | - | - | - | 0/1 | high | long | 0x00000040 | - | - | - | - | -- |
| STAT_LEARN_IST_DATEN_E_MOTOR_1_A | - | - | - | 0/1 | high | long | 0x00000080 | - | - | - | - | -- |
| STAT_LEARN_DREHMOMENT_ANTRIEBSSTRANG_HYBRID_1_FA | - | - | - | 0/1 | high | long | 0x00000100 | - | - | - | - | -- |
| STAT_LEARN_DATEN_ANTRIEB_ELEKTRISCH_A | - | - | - | 0/1 | high | long | 0x00000200 | - | - | - | - | -- |
| STAT_LEARN_LENKWINKEL_VORDERACHSE_EFFEKTIV_FA | - | - | - | 0/1 | high | long | 0x00000400 | - | - | - | - | -- |
| STAT_LEARN_STATUS_HOCHVOLTSPEICHER_2_A | - | - | - | 0/1 | high | long | 0x00000800 | - | - | - | - | -- |
| STAT_LEARN_VORGABE_HOCHVOLTSPEICHER_A | - | - | - | 0/1 | high | long | 0x00001000 | - | - | - | - | -- |
| STAT_LEARN_STATUS_KONTAKT_HANDBREMSE_FA | - | - | - | 0/1 | high | long | 0x00002000 | - | - | - | - | -- |

### RES_STEP

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIP_1_PLUS | - | - | - | 0/1 | - | char | 0x01 | - | - | - | - | -- |
| STAT_TIP_1_MINUS | - | - | - | 0/1 | - | char | 0x02 | - | - | - | - | -- |
| STAT_TIP_2_PLUS | - | - | - | 0/1 | - | char | 0x04 | - | - | - | - | -- |
| STAT_TIP_2_MINUS | - | - | - | 0/1 | - | char | 0x08 | - | - | - | - | -- |
| STAT_S | - | - | - | 0/1 | - | char | 0x10 | - | - | - | - | -- |
| STAT_P | - | - | - | 0/1 | - | char | 0x20 | - | - | - | - | -- |
| STAT_N_C_ | - | - | - | 0/1 | - | char | 0x40 | - | - | - | - | -- |
| STAT_RL | - | - | - | 0/1 | - | char | 0x80 | - | - | - | - | -- |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANHAENGERBETRIEB_EIN | 0xDA10 | STAT_ANHAENGERBETRIEB_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| GETRIEBEOELTMEPERATUR_WERT | 0xDA12 | STAT_GETRIEBEOELTMEPERATUR_WERT | - | Grad C | - | - | int | - | 1 | 1 | -48 | - | 22 | - | - |
| STEUERN_LERNFKT_RUECKSETZEN | 0xDA15 | - | Rüchsetzten  der Lernfunktion | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA15 | - |
| GESCHWINDIGKEIT_WERT | 0xDA1C | STAT_GESCHWINDIGKEIT_WERT | - | km/h | - | - | int | - | 1 | 16 | 0 | - | 22 | - | - |
| RADGESCHWINDIGKEIT_WERT | 0xDA1D | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA1D |
| KICK_DOWN_EIN | 0xDA1F | STAT_KICK_DOWN_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| GANGANZEIGE | 0xDA20 | STAT_GANGANZEIGE | - | 0-n | - | - | int | TAB_GANGANZEIGE | - | - | - | - | 22 | - | - |
| WANDLERKUPPLUNG | 0xDA22 | STAT_WANDLERKUPPLUNG | Status Lesen Istwerte | 0-n | - | - | int | TAB_WANDLERKUPPLUNG | - | - | - | - | 22 | - | - |
| KILOMETERSTAND_WERT | 0xDA23 | STAT_KILOMETERSTAND_WERT | - | km | - | - | unsigned long | - | 8 | 1 | 0 | - | 22 | - | - |
| TASTER_LENKRAD_SCHALTWIPPE_MINUS | 0xDA24 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA24 |
| MOTOROELTEMPERATUR_WERT | 0xDA25 | STAT_MOTOROELTEMPERATUR_WERT | - | Grad C | - | - | int | - | 1 | 1 | -48 | - | 22 | - | - |
| MOTORTEMPERATUR_WERT | 0xDA26 | STAT_MOTORTEMPERATUR_WERT | - | Grad C | - | - | int | - | 1 | 1 | -48 | - | 22 | - | - |
| WAEHLHEBEL_ANZEIGE_STELLUNG | 0xDA27 | - | Statusabfrage der Wählhebelanzeige und Wählhebelstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA27 |
| BREMSLICHTSCHALTER_EIN | 0xDA28 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA28 |
| ANLASSERFREIGABE_AKTIV | 0xDA29 | STAT_ANLASSERFREIGABE_AKTIV | Abfrage, ob Motorstartfreigabe zugelassen | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| EINAUSGANG_DREHZAHL | 0xDA2A | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA2A |
| FAHRPEDAL_WERT | 0xDA2C | STAT_FAHRPEDAL_WERT | - | % | - | - | int | - | - | - | - | - | 22 | - | - |
| ISTGANG | 0xDA2E | STAT_ISTGANG | - | 0-n | - | - | int | TAB_ISTGANG | - | - | - | - | 22 | - | - |
| HANDBREMSE_EIN | 0xDA31 | STAT_HANDBREMSE_EIN | - | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| UBAT_WERT | 0xDA33 | STAT_UBAT_WERT | - | V | - | - | int | - | 25 | 1000 | 0 | - | 22 | - | - |
| MOTORDREHZAHLEN | 0xDA34 | STAT_MOTORDREHZAHL_WERT | Statusabfrage der Motordrehzahl über CAN | U/min | - | - | int | - | - | - | - | - | 22 | - | - |
| D_S_M_ZAEHLER | 0xDA37 | - | Die Zeit, die der Fahrer in Getriebeposition D, in S und in Manuellem Modus gefahren ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA37 |
| EGS_KL15 | 0xDA38 | STAT_KL15_EIN | Statusabfrage der Klemme 15 auf Pin 9 | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_LERNFKT | 0xDA40 | - | Statusabfrage des Starts und Rücksetzten der Lernfunktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA40 |
| FINGER_PRINT | 0x1000 | STAT_FINGER_PRINT_DATA | Prüfstempel als 3 Byte breite Sedezimalzahl | DATA | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| GANGANZEIGE_TEXT | 0x4000 | STAT_GANGANZEIGE_TEXT | Textausgabe des eingelegten Gangs | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| WAEHLHEBEL_STELLUNG | 0x4001 | STAT_TEXT_WAEHLHEBEL_STELLUNG_TEXT | Textausgabe der Wählhebelstellung | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| WAEHLHEBEL_STELLUNG_P | 0x4002 | STAT_TEXT_WAEHLHEBEL_STELLUNG_P_TEXT | Textausgabe des Status des P-Tasters | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| GETRIEBE_ISTGANG | 0x4004 | STAT_TEXT_ISTGANG_TEXT | Ausgabe des Getriebe-Istgang-Textes | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| CAN_LERNFUNKTION_GELERNT | 0x4006 | - | Funktionen die aktuell gelernt sind | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4006 |
| CAN_LERNFUNKTION_AKTIV | 0x4007 | - | Funktionen die gelernt werden können | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007 |
| LESEN_STELLGLIED | 0x4008 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008 |
| CAN_LERNFUNKTION_RUECKSETZEN | 0x4010 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4010 | - |
| GELERNTE_PADDLES_RUECKSETZEN | 0x4011 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4011 | - |
| RB_SACHNUMMER_LESEN | 0x4020 | STAT_RB_SACHNUMMER_LESEN_TEXT | RB Sachnummer | TEXT | - | high | string[32] | - | - | - | - | - | 22 | - | - |
| ZF_SACHNUMMER_LESEN | 0x4021 | STAT_ZF_SACHNUMMER_LESEN_TEXT | ZF Sachnummer | TEXT | - | high | string[12] | - | - | - | - | - | 22 | - | - |
| CAL_ID_CVN_LESEN | 0x403C | - | CAL-ID und CVN lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x403C |
| ADAPTIONSWERTE_GLS_KF1_1_2 | 0x4110 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 1-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4110 |
| ADAPTIONSWERTE_GLS_KF1_2_3 | 0x4111 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 2-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4111 |
| ADAPTIONSWERTE_GLS_KF1_3_4 | 0x4112 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 3-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4112 |
| ADAPTIONSWERTE_GLS_KF1_4_5 | 0x4113 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 4-5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4113 |
| ADAPTIONSWERTE_GLS_KF1_5_6 | 0x4114 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 5-6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4114 |
| ADAPTIONSWERTE_GLS_KF1_6_7 | 0x4115 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 6-7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4115 |
| ADAPTIONSWERTE_GLS_KF1_7_8 | 0x4116 | - | KF1: Auslesen der GLS-Adaption der Hochschaltung 7-8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4116 |
| ADAPTIONSWERTE_GLS_KF1_2_1 | 0x411D | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 2-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x411D |
| ADAPTIONSWERTE_GLS_KF1_3_2 | 0x411E | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 3-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x411E |
| ADAPTIONSWERTE_GLS_KF1_4_3 | 0x411F | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 4-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x411F |
| ADAPTIONSWERTE_GLS_KF1_5_4 | 0x4120 | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 5-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4120 |
| ADAPTIONSWERTE_GLS_KF1_6_5 | 0x4121 | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 6-5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4121 |
| ADAPTIONSWERTE_GLS_KF1_7_6 | 0x4122 | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 7-6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4122 |
| ADAPTIONSWERTE_GLS_KF1_8_7 | 0x4123 | - | KF1: Auslesen der GLS-Adaption der Rückschaltung 8-7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4123 |
| ADAPTIONSWERTE_GLS_KF1_3_1 | 0x4124 | - | KF1: Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4124 |
| ADAPTIONSWERTE_GLS_KF1_4_2 | 0x4125 | - | KF1: Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4125 |
| ADAPTIONSWERTE_GLS_KF1_5_3 | 0x4126 | - | KF1: Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4126 |
| ADAPTIONSWERTE_GLS_KF1_6_4 | 0x4127 | - | KF1: Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4127 |
| ADAPTIONSWERTE_GLS_KF1_7_5 | 0x4128 | - | KF1: Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4128 |
| ADAPTIONSWERTE_GLS_KF1_8_6 | 0x4129 | - | KF1: Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4129 |
| ADAPTIONSWERTE_GLS_KF1_5_1 | 0x412A | - | KF1: Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412A |
| ADAPTIONSWERTE_GLS_KF1_6_3 | 0x412B | - | KF1: Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412B |
| ADAPTIONSWERTE_GLS_KF1_7_1 | 0x412C | - | KF1: Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412C |
| ADAPTIONSWERTE_GLS_KF1_8_2 | 0x412D | - | KF1: Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412D |
| ADAPTIONSWERTE_GLS_KF1_8_4 | 0x412E | - | KF1: Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412E |
| ADAPTIONSWERTE_KSFCTR | 0x4130 | - | Auslesen der Zähler der kupplungsbezogenen Schnellfüllungsadaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4130 |
| ADAPTIONSWERTE_KPFCTR | 0x4131 | - | Auslesen der Zähler der kupplungsbezogenen Fülldruckadaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4131 |
| ADAPTIONSWERTE_GLSHSCTRKF1 | 0x4133 | - | KF1: Auslesen der Zähler der Hochschaltungsadaptionen in der GLS-Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4133 |
| ADAPTIONSWERTE_GLSRSCTRKF1 | 0x4134 | - | KF1: Auslesen der Zähler der Rückschaltungsadaptionen in der GLS-Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4134 |
| ADAPTIONSWERTE_GLSHSCTRKF2 | 0x4136 | - | KF2: Auslesen der Zähler der Hochschaltungsadaptionen in der GLS-Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4136 |
| ADAPTIONSWERTE_GLSRSCTRKF2 | 0x4137 | - | KF2: Auslesen der Zähler der Rückschaltungsadaptionen in der GLS-Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4137 |
| ADAPTIONSWERTE_KPF | 0x413A | - | Adaption Kupplung A, B, C, D, E | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x413A |
| ADAPTIONSWERTE_KSF | 0x4140 | - | Schnellfuelzeit Adaption Kupplung A, B, C, D, E | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4140 |
| ADAPTIONSWERTE_BFLGLSKF1 | 0x4143 | - | Auslesen der Beeinflussungsadaptionen der GLS Kennfeld 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4143 |
| ADAPTIONSWERTE_BFLGLSKF2 | 0x4144 | - | Auslesen der Beeinflussungsadaptionen der GLS Kennfeld 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4144 |
| ADAPTIONSWERTE_LOESCHEN | 0x4150 | - | Löscht alle Adaptionswerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4150 | - |
| ADAPTIONSWERTE_GLS_KF2_1_2 | 0x4160 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 1-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4160 |
| ADAPTIONSWERTE_GLS_KF2_2_3 | 0x4161 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 2-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4161 |
| ADAPTIONSWERTE_GLS_KF2_3_4 | 0x4162 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 3-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4162 |
| ADAPTIONSWERTE_GLS_KF2_4_5 | 0x4163 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 4-5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4163 |
| ADAPTIONSWERTE_GLS_KF2_5_6 | 0x4164 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 5-6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4164 |
| ADAPTIONSWERTE_GLS_KF2_6_7 | 0x4165 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 6-7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4165 |
| ADAPTIONSWERTE_GLS_KF2_7_8 | 0x4166 | - | KF2: Auslesen der GLS-Adaption der Hochschaltung 7-8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4166 |
| ADAPTIONSWERTE_GLS_KF2_2_1 | 0x416D | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 2-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x416D |
| ADAPTIONSWERTE_GLS_KF2_3_2 | 0x416E | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 3-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x416E |
| ADAPTIONSWERTE_GLS_KF2_4_3 | 0x416F | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 4-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x416F |
| ADAPTIONSWERTE_GLS_KF2_5_4 | 0x4170 | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 5-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4170 |
| ADAPTIONSWERTE_GLS_KF2_6_5 | 0x4171 | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 6-5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4171 |
| ADAPTIONSWERTE_GLS_KF2_7_6 | 0x4172 | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 7-6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4172 |
| ADAPTIONSWERTE_GLS_KF2_8_7 | 0x4173 | - | KF2: Auslesen der GLS-Adaption der Rückschaltung 8-7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4173 |
| ADAPTIONSWERTE_GLS_KF2_3_1 | 0x4174 | - | KF2: Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4174 |
| ADAPTIONSWERTE_GLS_KF2_4_2 | 0x4175 | - | KF2: Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4175 |
| ADAPTIONSWERTE_GLS_KF2_5_3 | 0x4176 | - | KF2: Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4176 |
| ADAPTIONSWERTE_GLS_KF2_6_4 | 0x4177 | - | KF2: Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4177 |
| ADAPTIONSWERTE_GLS_KF2_7_5 | 0x4178 | - | KF2: Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4178 |
| ADAPTIONSWERTE_GLS_KF2_8_6 | 0x4179 | - | KF2: Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4179 |
| ADAPTIONSWERTE_GLS_KF2_5_1 | 0x417A | - | KF2: Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x417A |
| ADAPTIONSWERTE_GLS_KF2_6_3 | 0x417B | - | KF2: Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x417B |
| ADAPTIONSWERTE_GLS_KF2_7_1 | 0x417C | - | KF2: Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x417C |
| ADAPTIONSWERTE_GLS_KF2_8_2 | 0x417D | - | KF2: Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x417D |
| ADAPTIONSWERTE_GLS_KF2_8_4 | 0x417E | - | KF2: Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x417E |
| IUMPR_GEN_DEN | 0x4200 | STAT_IUMPR_GEN_DEN_WERT | Status IUMPR_GEN_DEN als Integerwert | - | - | high | int | - | - | - | - | - | 22 | - | - |
| IUMPR_IGN_CYC_CNT | 0x4201 | STAT_IUMPR_IGN_CYC_CNT_WERT | Status IIGN_CYC_CNT als Integerwert | - | - | high | int | - | - | - | - | - | 22 | - | - |
| AUTO_P_EMF3_ZAEHLER | 0x4300 | STAT_AUTO_P_EMF3_ZAEHLER_WERT | Anzahl von P (EMF3) | - | - | high | char | - | - | - | - | - | 22 | - | - |
| AUTO_P_EMF2_ZAEHLER | 0x4301 | STAT_AUTO_P_EMF2_ZAEHLER_WERT | Zähler Auto-P wegen EMF-Komfortebene | - | - | high | char | - | - | - | - | - | 22 | - | - |
| AUTO_P_EMF1_ZAEHLER | 0x4302 | STAT_AUTO_P_EMF1_ZAEHLER_WERT | Zähler Auto-P wegen EMF-Anforderung in N | - | - | high | char | - | - | - | - | - | 22 | - | - |
| TEST_STEPTRONIC | 0x4304 | - | Bitcodiert: b7=RL b6=n.c. b5=P b4=S b3=Tip2- b2=Tip2+ b1=Tip1- b0=Tip1+ | BIT | - | - | BITFIELD | RES_STEP | - | - | - | - | 22 | - | - |
| TEST_LEVER | 0x4305 | STAT_LEVER | Bitcodiert: 0=Mid 5=D 6=N 7=R 21=V 22=VV 23=H 24=HH 31=SD 32=M- 33=M+ 128=undef | 0-n | - | - | char | t_lever | - | - | - | - | 22 | - | - |
| POS_PRND | 0x4306 | STAT_POS_PRND | Wählhebelstellung 5=D 6=N 7=R 8=P | 0-n | - | low | char | pos | - | - | - | - | 22 | - | - |
| STATUS_SBW | 0x4307 | - | -- | bit | - | - | BITFIELD | RES_0x4307 | - | - | - | - | 22 | - | - |
| CNT_ADAPT_MODE | 0x4308 | STAT_CNT_ADAPT_MODE_WERT | Gesamtzeit in D | - | - | high | long | - | - | - | - | - | 22 | - | - |
| CNT_SPORT_MODE | 0x4309 | STAT_CNT_SPORT_MODE_WERT | Gesamtzeit im SPORT-MODE | - | - | high | long | - | - | - | - | - | 22 | - | - |
| CNT_MANUAL_MODE | 0x430A | STAT_CNT_MANUAL_MODE_WERT | Gesamtzeit im MANUAL-MODE | - | - | high | long | - | - | - | - | - | 22 | - | - |
| STAT_N_HALTE_AKTIVIERUNG | 0x431E | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x431E |
| CNT_ID828 | 0x4320 | STAT_CNT_828_WERT | Zähler für die Fahrermeldung ID828 | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| AMB_COND | 0x4325 | STAT_AMB_COND_WERT | Umweltbedingungen vom Direkteintrag von einen KFC | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STAT_INFO9_COUNTER | 0x4326 | STAT_INFO9_COUNTER_WERT | Zähler für den Gurtdummy | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STAT_INFO10_COUNTER | 0x4327 | STAT_INFO10_COUNTER_WERT | Rollen entgegen der gewählten Fahrtrichtung | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STAT_INFO11_COUNTER | 0x4328 | STAT_INFO11_COUNTER_WERT | Zähler für Auto-P bei Stehen mit Handbremse in D und Getriebeüberhitzung beim F30h | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| MAGNETVENTILE | 0x4400 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4400 |
| DR_MV_SPANNUNG | 0x4402 | STAT_DR_MV_SPANNUNG_WERT | Spannungswert Magnetventile zwischen 0 und 20,4V | V | - | high | int | - | 3113 | 10000000 | 0 | - | 22 | - | - |
| PEGEL_L_LEITUNG | 0x4403 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4403 |
| SIGNAL_SUBSTRATTEMPERATUR | 0x4405 | STAT_SIGNAL_SUBSTRATTEMPERATUR | 0x00: kein Fehler, 0x08 Hängenbleiber, 0x20  Minimal Threshold, 0x40 Maximal Threshold, 0x80 Temperatursprung | 0-n | - | high | int | t_subtrat | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_SUBSTRATTEMPERATUR | 0x4406 | STAT_SIGNAL_TEXT_SUBSTRATTEMPERATUR_TEXT | Textausgabe der Substrattemperatur | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_GETRIEBEOELTEMPERATUR | 0x4407 | STAT_SIGNAL_GETRIEBEOELTEMPERATUR | 0: Signal Getriebeöltemperatur iO | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_GETRIEBEOELTEMPERATUR | 0x4408 | STAT_SIGNAL_TEXT_GETRIEBEOELTEMPERATUR_TEXT | Textausgabe des Signalzustandes Getriebeöltemperatur | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_EINGANGSDREHZAHL | 0x4409 | STAT_SIGNAL_EINGANGSDREHZAHL | 0: Signalzustand Eingangsdrehzahl iO; 2: Turbinendrehzahlsensor Kurzschluss gegen Batterie; 5: Turbinendrehzahlsensor Kurzschluss nach Masse / Unterbrechung | 0-n | - | high | int | stat_ntu | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_EINGANGSDREHZAHL | 0x440A | STAT_SIGNAL_TEXT_EINGANGSDREHZAHL_TEXT | Textausgabe des Signalzustandes Eingangsdrehzahl | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_ABTRIEBSDREHZAHL | 0x440B | STAT_SIGNAL_ABTRIEBSDREHZAHL | 0: Signalzustand Abtriebsdrehzahl iO; 1: Dynamischer Ersatzwert (Raddrehzahlen); 2: Statischer Ersatzwert | 0-n | - | high | int | stat_nab | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_ABTRIEBSDREHZAHL | 0x440C | STAT_SIGNAL_TEXT_ABTRIEBSDREHZAHL_TEXT | Textausgabe des Signalzustandes Abtriebsdrehzahl | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_MOTORDREHZAHL | 0x440D | STAT_SIGNAL_MOTORDREHZAHL | 0: Signalzustand Motordrehzahl iO 2: Signalzustand Motordrehzahl niO | 0-n | - | high | int | motordrehzahlstatus | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_MOTORDREHZAHL | 0x440E | STAT_SIGNAL_TEXT_MOTORDREHZAHL_TEXT | Textausgabe des Signalzustandes Motordrehzahl | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_DROSSELKLAPPE | 0x440F | STAT_SIGNAL_DROSSELKLAPPE | 0: Signalzustand Drosselklappe iO 2: Signalzustand Drosselklappe niO | 0-n | - | high | int | drosselklappenstatus | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_DROSSELKLAPPE | 0x4410 | STAT_SIGNAL_TEXT_DROSSELKLAPPE_TEXT | Textausgabe Signalzustand Drosselklappe | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_PARKSPERRENANFORDERUNG | 0x4412 | STAT_SIGNAL_TEXT_PARKSPERRENANFORDERUNG_TEXT | Textausgabe Parksperrenanforderung | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_MOMENT_1 | 0x4413 | STAT_SIGNAL_MOMENT_1_WERT | Spezifikation eines Moments zwischen -1024 und 1023.5 Nm | Nm | - | high | int | - | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_MOMENT_1 | 0x4414 | STAT_SIGNAL_TEXT_MOMENT_1_TEXT | Textausgabe des Moments: 0 = Signal o.k.; 1 = Signal enthält Ersatzwert; 2 = Signal fehlerhaft | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_BREMSSIGNAL | 0x4416 | STAT_SIGNAL_TEXT_BREMSSIGNAL_TEXT | Textausgabe des Bremssignals: 0: Nicht Getreten, 1: Getreten | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_DREHRICHTUNG | 0x4417 | STAT_SIGNAL_DREHRICHTUNG | 0: Drehrichtung undefiniert, 1: Drehrichtung vorwärts, 2: Drehrichtung rückwärts | 0-n | - | high | int | t_dreh | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_DREHRICHTUNG | 0x4418 | STAT_SIGNAL_TEXT_DREHRICHTUNG_TEXT | Textausgabe der Drehrichtung 0 = nicht def., 1 = Vorwaerts, 2 = Rueckwaerts | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_RADGESCHWINDIGKEIT | 0x4419 | STAT_SIGNAL_RADGESCHWINDIGKEIT_WERT | Angabe der Radgeschwindigkeit zwischen 0 und 4095,94 rad/s | rad/s | - | high | int | - | - | 16 | - | - | 22 | - | - |
| SIGNAL_TEXT_RADGESCHWINDIGKEIT | 0x441A | STAT_SIGNAL_TEXT_RADGESCHWINDIGKEIT_TEXT | Textausgabe der Radgeschwindigkeit: 0 = Signal o.k., 1 = Signal enthält Ersatzwert, 2 = Signal fehlerhaft | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_FAHRERTUER | 0x441B | STAT_SIGNAL_FAHRERTUER | 0 = Fahrertür ist geschlossen, 1 = Fahrertür ist offen | 0-n | - | high | int | t_ft | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_FAHRERTUER | 0x441C | STAT_SIGNAL_TEXT_FAHRERTUER_TEXT | Textausgabe des Fahrertürsignals:0 = Signal o.k., 1 = Signal enthält Ersatzwert, 2 = Signal fehlerhaft | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_FAHRERSITZ | 0x441D | STAT_SIGNAL_FAHRERSITZ | 0 = Fahrersitz nicht belegt, 1 = Fahrersitz belegt | 0-n | - | high | int | t_fs | - | - | - | - | 22 | - | - |
| SIGNAL_TEXT_FAHRERSITZ | 0x441E | STAT_SIGNAL_TEXT_FAHRERSITZ_TEXT | Textausgabe des Fahrersitzsignals: 0 = Signal o.k., 1 = Signal enthält Ersatzwert, 2 = Signal fehlerhaft | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SIGNAL_KL15_TEXT | 0x4420 | STAT_TEXT_KL15_TEXT | Textausgabe von Kl15: 0 = Aus, 1 = Ein | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SCHALTSCHEMA_AGS | 0x4423 | STAT_SCHALTSCHEMA_AGS | Status Schaltschema AGS | 0-n | - | high | int | TAB_AGS | - | - | - | - | 22 | - | - |
| SCHALTSCHEMA_AGS_TEXT | 0x4424 | STAT_TEXT_SCHALTSCHEMA_AGS_TEXT | Textausgabe des Status Schaltschema AGS | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| ERSATZPROGRAMM | 0x4425 | - | ZF-Ersatzprogramme: 1 = Ersatzprogramm aktiv 0 = Ersatzprogramm nicht aktiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4425 |
| POSITION_AUS_FAHRERWUNSCH | 0x442B | STAT_POSITION_AUS_FAHRERWUNSCH | 0x00 Mittelstellung, 0x05 D, 0x06 N, 0x07 R | 0-n | - | high | int | TAB_POS_FW | - | - | - | - | 22 | - | - |
| POSITION_AUS_FAHRERWUNSCH_TEXT | 0x442C | STAT_TEXT_POSITION_AUS_FAHRERWUNSCH_TEXT | Textausgabe zum Fahrerwunsch 0x00 Mittelstellung, 0x05 D, 0x06 N, 0x07 R | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| MOTORISTMOMENT | 0x442F | STAT_MOTORISTMOMENT_WERT | Wert des MotorIstmoments im Bereich -1024 bis 1023,5 Nm | Nm | - | high | int | - | - | - | - | - | 22 | - | - |
| MOTORISTMOMENT_TEXT | 0x4430 | STAT_TEXT_MOTORISTMOMENT_TEXT | Textausgabe des Motoristmoments: 0 = Signal o.k., 1 = Signal enthält Ersatzwert, 2 = Signal fehlerhaft | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| MOTORSOLLMOMENT | 0x4431 | STAT_MOTORSOLLMOMENT_WERT | Wert des Motorsollmoments im Bereich -32768 bis 32767 Nm | Nm | - | high | int | - | - | - | - | - | 22 | - | - |
| MOTORSOLLMOMENT_TEXT | 0x4432 | STAT_TEXT_MOTORSOLLMOMENT_TEXT | Textausgabe des Motorsollmoments: 0 = Signal o.k., 1 = Signal enthält Ersatzwert, 2 = Signal fehlerhaft | TEXT | - | - | string | - | - | - | - | - | 22 | - | - |
| SUBSTRATTEMPERATURKOLLEKTIV | 0x4440 | - | Zeit in einem bestimmten Temperaturbereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4440 |
| OELTEMPERATURKOLLEKTIV | 0x4441 | - | Zeit in einem bestimmten Temperaturbereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4441 |
| STAT_HOCHSCHALTUNGSZAEHLER | 0x4445 | STAT_COUNT_FORCEDSHIFTUP_WERT | Anzahl der vom Motor angeforderten Hochschaltungen | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CODIERUNG | 0x4500 | - | -- | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4500 |
| STAT_CODIERBYTES | 0x4501 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4501 |
| STATUS_CODIERUNG_MOD | 0x4502 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4502 |
| STAT_GETRIEBEVORADAPTION_STATUS | 0x4620 | STAT_GETRIEBEVORADA_STATUS | Status der Getriebevoradaption Result: | 0-n | - | - | unsigned char | TAB_GETRIEBEVORADA_STATUS | - | - | - | - | 22 | - | - |
| STAT_GETRIEBEVORADAPTION_ZUSTAND | 0x4621 | STAT_GETRIEBEVORADA_ZUSTAND | Zustand der Getriebevoradaption Result: | 0-n | - | - | unsigned char | TAB_GETRIEBEVORADA_ZUSTAND | - | - | - | - | 22 | - | - |
| STAT_IEP_STUNDEN_OFF | 0x4640 | STAT_IEP_STUNDEN_OFF_WERT | Result: phys = hex [h] / 1Bit/Stunde) | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_IEP_STUNDEN_LP1 | 0x4642 | STAT_IEP_STUNDEN_LP1_WERT | Result: phys = hex [h] / 1Bit/Stunde) | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_IEP_STUNDEN_LP2 | 0x4643 | STAT_IEP_STUNDEN_LP2_WERT | Result: phys = hex [h] / 1Bit/Stunde) | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_IEP_STUNDEN_LP3 | 0x4644 | STAT_IEP_STUNDEN_LP3_WERT | Result: phys = hex [h] / 1Bit/Stunde) | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| DEL_IEP_STUNDEN | 0x4645 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4645 | - |
| STAT_PID_30 | 0x4646 | STAT_PID_30_WERT | Anzahl der Warm-Ups | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STAT_HAS_VORGABE_BETRIEBSART_TRENNKUPPLUNG | 0x4800 | STAT_HAS_BETRIEBSART_TRENNKUPPLUNG | Vorgabe für die Motortrennkupplung an die HAS | 0-n | - | - | char | TAB_HAS_BETRIEBSART_TRENNKUPPLUNG | - | - | - | - | 22 | - | - |
| STAT_HAS_VORGABE_BETRIEBSART_VERBRENNUNGSMOTOR | 0x4801 | STAT_HAS_BETRIEBSART_VM | Vorgabe  für den Verbrennungsmotor an die HAS | 0-n | - | - | char | TAB_HAS_BETRIEBSART_VERBRENNUNGSMOTOR | - | - | - | - | 22 | - | - |
| STAT_HAS_VORGABE_BETRIEBESZUSTAND_ZIEL | 0x4802 | STAT_HAS_BETRIEBESZUSTAND_ZIEL | Ziel-Betriebszustand der HAS (Bestätigung der Hybrid Zustandssteuerung) | 0-n | - | - | char | TAB_HAS_BETRIEBESZUSTAND_ZIEL | - | - | - | - | 22 | - | - |
| STAT_HAS_VORGABE_BETRIEBESZUSTAND_IST | 0x4803 | STAT_HAS_BETRIEBESZUSTAND_IST | Ablaufvariante der HST (Angeforderte Ablaufvariante der Hybridstrategie) | 0-n | - | - | char | TAB_HAS_BETRIEBESZUSTAND_ZIEL | - | - | - | - | 22 | - | - |
| STAT_HAS_VORGABE_ABLAUFVARIANTE | 0x4804 | STAT_HAS_ABLAUFVARIANTE | Ablaufvariante der HST (Angeforderte Ablaufvariante der Hybridstrategie) | 0-n | - | - | char | TAB_HAS_ABLAUFVARIANTE | - | - | - | - | 22 | - | - |
| STAT_ABLAUF_HAS | 0x4805 | STAT_HAS_ABLAUF | Status des HAS Ablaufs | 0-n | - | - | char | TAB_ABLAUF_HAS | - | - | - | - | 22 | - | - |
| STAT_TRENNKUPPLUNG_TEMPERATUR | 0x4820 | STAT_TRENNKUPPLUNG_TEMPERATUR_WERT | K0 Temperatur (aus Temp.modell) 1°c pro bit | °c | - | high | signed int | - | - | - | - | - | 22 | - | - |
| STAT_TRENNKUPPLUNG | 0x4821 | STAT_TRENNKUPPLUNG | Statusrückmeldung zur Motortrennkupplung K0 | 0-n | - | - | char | TAB_TRENNKUPPLUNG | - | - | - | - | 22 | - | - |
| STAT_TRENNKUPPLUNG_ISTMOMENT | 0x4822 | STAT_TRENNKUPPLUNG_ISTMOMENT_WERT | K0-Istmoment im Bereich von 32768 - 32767 Nm | Nm | - | high | signed int | - | - | - | - | - | 22 | - | - |
| STAT_ANFAHRKUPPLUNG_TEMPERATUR | 0x4830 | STAT_ANFAHRKUPPLUNG_TEMPERATUR_WERT | IAE Temperatur (aus Temp.modell) von -40°C bis 65495°C | °c | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_ANFAHRKUPPLUNG_KUEHLUNG_ISTSTROM | 0x4831 | STAT_ANFAHRKUP_KUEHL_ISTSTROM_WERT | IAE Kühlung Iststrom von -3276,8 l/min bis 3276,7 l/min | l/min | - | - | signed int | - | - | - | - | - | 22 | - | - |
| STAT_ANFAHRKUPPLUNG | 0x4832 | STAT_ANFAHRKUPPLUNG | Status IAE | 0-n | - | - | char | TAB_ANFAHRKUPPLUNG | - | - | - | - | 22 | - | - |
| STAT_ANFAHRKUPPLUNG_ISTMOMENT | 0x4833 | STAT_ANFAHRKUPPLUNG_ISTMOMENT_WERT | Ist-Drehmoment an der IAE von -200 bis 1300 Nm | Nm | - | - | signed int | - | - | - | - | - | 22 | - | - |
| STAT_ELEKTRISCHE_ZUSATZPUMPE | 0x4840 | - | - | bit | - | - | BITFIELD | RES_0x4840 | - | - | - | - | 22 | - | - |
| STAT_IEP_TESTERSERVICE_RESULT | 0x4848 | STAT_IEP_TESTERSERVICE | Testerservice IEP | 0-n | - | - | unsigned char | TAB_IEP_TESTERSERVICE | - | - | - | - | 22 | - | - |
| STAT_EM_ISTMOMENT | 0x4850 | STAT_EM_ISTMOMENT_WERT | EM Istmoment | Nm | - | - | signed int | - | - | - | - | - | 22 | - | - |
| STAT_ELEKTROMOTOR_ISTDREHZAHL | 0x4851 | STAT_ELEKTROMOTOR_ISTDREHZAHL_WERT | EM Istdrehzahl | 1/min | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_VM_ISTMOMENT | 0x4852 | STAT_VM_ISTMOMENT_WERT | VM Istmoment | Nm | - | - | signed int | - | - | - | - | - | 22 | - | - |
| STAT_RZN_BY_RESET_CNT | 0x4870 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4870 |
| STAT_ADAPTIONSWERTE_TSF_CRT_C0 | 0x4880 | STAT_ADAPTIONSWERTE_TSF_CRT_WERT | Result: Bewertungszähler TSF- Adaption | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_ADAPTIONSWERTE_P_CRT_C0 | 0x4881 | STAT_ADAPTIONSWERTE_P_CTR_C0_WERT | Result: Bewertungszähler PF- Adaption | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_ADAPTIONSWERTE_T_C0 | 0x4882 | STAT_ADAPTIONSWERTE_T_C0_WERT | Result: Adaptionswert Schnellfüllzeit | ms | - | - | int | - | - | - | - | - | 22 | - | - |
| STAT_ADAPTIONSWERTE_P_C0 | 0x4883 | STAT_ADAPTIONSWERTE_P_C0_WERT | Result: Adaptionswert Fülldruck | mbar | - | - | int | - | - | - | - | - | 22 | - | - |
| STAT_ADAPTIONSWERTE_P_CRT_IAE | 0x4884 | STAT_ADAPTIONSWERTE_P_CRT_IAE_WERT | Result: Bewertungszähler IAE PF- Adaption | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STAT_ADAPTIONSWERTE_P_IAE | 0x4885 | STAT_ADAPTIONSWERTE_P_IAE_WERT | Result: Adaptionswert IAE Fülldruckadaption | mbar | - | - | int | - | - | - | - | - | 22 | - | - |
| DEL_ADAPTIONSWERTE_T_C0 | 0x4886 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4886 | - |
| DEL_ADAPTIONSWERTE_P_C0 | 0x4887 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4887 | - |
| DEL_ADAPTIONSWERTE_TSF_CRT_C0 | 0x4888 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4888 | - |
| DEL_ADAPTIONSWERTE_P_CRT_C0 | 0x4889 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4889 | - |
| START_STOP_IEP_TEST | 0xF007 | - | Starten des Service mit ID;ADR;STR Stoppen mit ID;ADR;STPR | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STAT_STEUERN_GETRIEBEVORADAPTION | 0xF4BA | - | Starten des Service mit ID;ADR;STR Stoppen mit ID;ADR;STPR | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STAT_STEUERN_C0VORADAPTION | 0xF4BB | - | Starten des Service mit ID;ADR;STR Stoppen mit ID;ADR;STPR | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört) |
| 0x01 | Freigabe erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### TAB_0X0051

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 0x05 | 0xF067 | 0xF068 | 0xF069 | 0xF06A | 0xF06B |

### TAB_0X0053

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 0x02 | 0xF001 | 0xF002 |

### TAB_0X005B

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 0x02 | 0xF076 | 0xF077 |

### TAB_0X005E

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 0x03 | 0xF078 | 0xF079 | 0xF080 |

### TAB_0X0070

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF003 | 0xF004 | 0xF005 | 0xF006 | 0xF007 | 0xF008 | 0xF009 | 0xF010 |

### TAB_0X0072

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF011 | 0xF012 | 0xF013 | 0xF014 | 0xF015 | 0xF016 | 0xF017 | 0xF018 |

### TAB_0X0074

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF019 | 0xF020 | 0xF021 | 0xF022 | 0xF023 | 0xF024 | 0xF025 | 0xF026 |

### TAB_0X0075

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF027 | 0xF028 | 0xF029 | 0xF030 | 0xF031 | 0xF032 | 0xF033 | 0xF034 |

### TAB_0X0076

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF035 | 0xF036 | 0xF037 | 0xF038 | 0xF039 | 0xF040 | 0xF041 | 0xF042 |

### TAB_0X0077

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF043 | 0xF044 | 0xF045 | 0xF046 | 0xF047 | 0xF048 | 0xF049 | 0xF050 |

### TAB_0X0078

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF051 | 0xF052 | 0xF053 | 0xF054 | 0xF055 | 0xF056 | 0xF057 | 0xF058 |

### TAB_0X0079

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x08 | 0xF059 | 0xF060 | 0xF061 | 0xF062 | 0xF063 | 0xF064 | 0xF065 | 0xF066 |

### TAB_0X0088

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 0x03 | 0xF081 | 0xF082 | 0xF083 |

### TAB_0X0BC9

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 0x05 | 0xF06C | 0xF06D | 0xF06E | 0xF06F | 0xF070 |

### TAB_0X0BCA

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 0x05 | 0xF071 | 0xF072 | 0xF073 | 0xF074 | 0xF075 |

### TAB_ABLAUF_HAS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Ablauf aktiv |
| 0x01 | Ablauf aktiv , Phase 1 (normaler Ablauf) |
| 0x02 | Ablauf aktiv , Phase 2 (normaler Ablauf) |
| 0x03 | Ablauf aktiv , Phase 3 (normaler Ablauf) |
| 0x04 | Ablauf aktiv , Phase 4 (normaler Ablauf) |
| 0x05 | Ablauf aktiv , Phase 5 (normaler Ablauf) |
| 0x06 | Ablauf aktiv , Phase 6 (normaler Ablauf) |
| 0x07 | Ablauf aktiv , Phase 7 (normaler Ablauf) |
| 0x08 | Ablauf aktiv , Phase 8 (Ende normaler Ablauf) |
| 0x09 | Ablauf aktiv , Phase 9 (Abbruch aktiv) |
| 0x0A | Ablauf aktiv , Phase 10 (Abbruch aktiv) |
| 0x0B | Ablauf aktiv , Phase 11 (Abbruch aktiv) |
| 0x0C | Ablauf aktiv , Phase 12 (Abbruch aktiv) |
| 0x0D | Ablauf abgebrochen (Abbruch aktiv) |
| 0x0E | Ablauf abgeschlossen (Abbruch abgeschlossen) |
| 0x0F | Signal ungültig |
| 0xFF | undefiniert |

### TAB_AGS

| WERT | TEXT |
| --- | --- |
| 0x00 | XE |
| 0x01 | E |
| 0x02 | S |
| 0x03 | XS |
| 0x04 | A1 |
| 0x05 | A2 |
| 0x06 | A3 |
| 0x07 | A4 |
| 0x08 | STEPTR |
| 0x09 | SO |
| 0x0A | B0 |
| 0x0B | LM |
| 0x0C | HM |
| 0x0D | WL |
| 0x0E | LD |
| 0x0F | ACC |
| 0xFF | nicht definiert |

### TAB_ANFAHRKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kupplung geöffnet |
| 0x01 | Kupplung geschlossen |
| 0x02 | Kupplung geregelt (Entkopplung bei Zustandsübergang) |
| 0x03 | Kupplung geregelt (Anfahren / Kriechen) |
| 0x07 | Signal ungültig |
| 0xFF | undefiniert |

### TAB_ERSATZMASSNAHMEN1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DI_ER_S0 | - | - | - | 0/1 | high | long | 0x00000001 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S1 | - | - | - | 0/1 | high | long | 0x00000002 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S2 | - | - | - | 0/1 | high | long | 0x00000004 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S3 | - | - | - | 0/1 | high | long | 0x00000008 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S4 | - | - | - | 0/1 | high | long | 0x00000010 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S5 | - | - | - | 0/1 | high | long | 0x00000020 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S6 | - | - | - | 0/1 | high | long | 0x00000040 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S7 | - | - | - | 0/1 | high | long | 0x00000080 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S8 | - | - | - | 0/1 | high | long | 0x00000100 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S9 | - | - | - | 0/1 | high | long | 0x00000200 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S10 | - | - | - | 0/1 | high | long | 0x00000400 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S11 | - | - | - | 0/1 | high | long | 0x00000800 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S12 | - | - | - | 0/1 | high | long | 0x00001000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S13 | - | - | - | 0/1 | high | long | 0x00002000 | - | - | - | - | Vorhalt |
| STAT_KMN_NOPOSTRQREQ | - | - | - | 0/1 | high | long | 0x00004000 | - | - | - | - | projektspezifisch BMW: Positiven Motoreingriff deaktivieren |
| STAT_KMN_DISPOFF | - | - | - | 0/1 | high | long | 0x00008000 | - | - | - | - | projektspezifisch BMW: Kombianzeige dunkel schalten |
| STAT_DI_ER_S16 | - | - | - | 0/1 | high | long | 0x00010000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S17 | - | - | - | 0/1 | high | long | 0x00020000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S18 | - | - | - | 0/1 | high | long | 0x00040000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S19 | - | - | - | 0/1 | high | long | 0x00080000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S20 | - | - | - | 0/1 | high | long | 0x00100000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S21 | - | - | - | 0/1 | high | long | 0x00200000 | - | - | - | - | Vorhalt |
| STAT_KMN_GFIX | - | - | - | 0/1 | high | long | 0x00400000 | - | - | - | - | Aktuellen Gang halten; Bei Schaltung Rueckkehr in alten Gang |
| STAT_DI_ER_S23 | - | - | - | 0/1 | high | long | 0x00800000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S24 | - | - | - | 0/1 | high | long | 0x01000000 | - | - | - | - | Vorhalt |
| STAT_KMN_ENPG4FIX | - | - | - | 0/1 | high | long | 0x02000000 | - | - | - | - | Elektrischer Notlauf 4. Gang |
| STAT_KMN_ENPG1 | - | - | - | 0/1 | high | long | 0x04000000 | - | - | - | - | Schalten in 1. Gang ueber Neutral |
| STAT_KMN_ENPG2 | - | - | - | 0/1 | high | long | 0x08000000 | - | - | - | - | Schalten in 2. Gang ueber Neutral |
| STAT_KMN_ENPG3 | - | - | - | 0/1 | high | long | 0x10000000 | - | - | - | - | Schalten in 3. Gang ueber Neutral |
| STAT_KMN_ENPG4 | - | - | - | 0/1 | high | long | 0x20000000 | - | - | - | - | Schalten in 4. Gang ueber Neutral |
| STAT_KMN_ENPG5 | - | - | - | 0/1 | high | long | 0x40000000 | - | - | - | - | Schalten in 5. Gang ueber Neutral |
| STAT_KMN_ENPG6 | - | - | - | 0/1 | high | long | 0x80000000 | - | - | - | - | Schalten in 6. Gang ueber Neutral |

### TAB_ERSATZMASSNAHMEN2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMN_ENPG7 | - | - | - | 0/1 | high | long | 0x00000001 | - | - | - | - | Schalten in 7. Gang ueber Neutral |
| STAT_KMN_ENPG8 | - | - | - | 0/1 | high | long | 0x00000002 | - | - | - | - | Schalten in 8. Gang ueber Neutral |
| STAT_KMN_ADAPTOFF | - | - | - | 0/1 | high | long | 0x00000004 | - | - | - | - | Alle Adaptionen deaktivieren |
| STAT_KMN_FAULTINFO | - | - | - | 0/1 | high | long | 0x00000008 | - | - | - | - | Notprogramm ist aktiv (Flag auf CAN) |
| STAT_KMN_HISOFF | - | - | - | 0/1 | high | long | 0x00000010 | - | - | - | - | Deaktivierung HIS-Funktion in ATSYS |
| STAT_KMN_NWHEELSUBST | - | - | - | 0/1 | high | long | 0x00000020 | - | - | - | - | Radgeschwindigkeit durch weiteres Signal ersetzen |
| STAT_KMN_NOUTSUBST | - | - | - | 0/1 | high | long | 0x00000040 | - | - | - | - | Abtriebsdrehzahl durch weiteres Signal ersetzen |
| STAT_KMN_OUT11LSSOFF | - | - | - | 0/1 | high | long | 0x00000080 | - | - | - | - | Endstufe OUT11 deaktivieren |
| STAT_KMN_OUT13LSSOFF | - | - | - | 0/1 | high | long | 0x00000100 | - | - | - | - | Endstufe OUT13 deaktivieren |
| STAT_KMN_OUT14LSSOFF | - | - | - | 0/1 | high | long | 0x00000200 | - | - | - | - | Endstufe OUT14 deaktivieren |
| STAT_KMN_TCCLSSOFF | - | - | - | 0/1 | high | long | 0x00000400 | - | - | - | - | Druckregler fuer Wandlerkupplung auf 0mA setzen |
| STAT_KMN_PSYSLSSOFF | - | - | - | 0/1 | high | long | 0x00000800 | - | - | - | - | Druckregler fuer Systemdruck auf 0mA setzen |
| STAT_KMN_IMINOFF2 | - | - | - | 0/1 | high | long | 0x00001000 | - | - | - | - | Minimalbestromte Druckregler fuer Getriebekupplungen auf 0mA setzen |
| STAT_KMN_NOTRQREQ | - | - | - | 0/1 | high | long | 0x00002000 | - | - | - | - | Alivecounter Motoreingriff einfrieren |
| STAT_KMN_NOTRLOSS | - | - | - | 0/1 | high | long | 0x00004000 | - | - | - | - | Alivecounter Getriebeaufnahmemoment einfrieren |
| STAT_KMN_NOPOSDISP | - | - | - | 0/1 | high | long | 0x00008000 | - | - | - | - | Alivecounter Anzeige einfrieren |
| STAT_KMN_NICOFF | - | - | - | 0/1 | high | long | 0x00010000 | - | - | - | - | NIC deaktivieren |
| STAT_KMN_TCCOPEN | - | - | - | 0/1 | high | long | 0x00020000 | - | - | - | - | Wandlerkupplung oeffnen über Minimalbestromung |
| STAT_KMN_PSYSMAX2 | - | - | - | 0/1 | high | long | 0x00040000 | - | - | - | - | Max. Systemdruck ausloesen über Minimalbestromung |
| STAT_DI_ER_S51 | - | - | - | 0/1 | high | long | 0x00080000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S52 | - | - | - | 0/1 | high | long | 0x00100000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S53 | - | - | - | 0/1 | high | long | 0x00200000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S54 | - | - | - | 0/1 | high | long | 0x00400000 | - | - | - | - | Vorhalt |
| STAT_KMN_HSS2OFF | - | - | - | 0/1 | high | long | 0x00800000 | - | - | - | - | HighSide Endstufe 2 deaktivieren |
| STAT_KMN_HSS1OFF | - | - | - | 0/1 | high | long | 0x01000000 | - | - | - | - | HighSide Endstufe 1 deaktivieren |
| STAT_KMN_LSSOFF | - | - | - | 0/1 | high | long | 0x02000000 | - | - | - | - | Alle LowSide Endstufen deaktivieren |
| STAT_KMN_LAUNCHTRQLIM | - | - | - | 0/1 | high | long | 0x04000000 | - | - | - | - | Anfahrmomentenbegrenzung ausloesen |
| STAT_KMN_HOLDPOSP | - | - | - | 0/1 | high | long | 0x08000000 | - | - | - | - | Wenn PS eingelegt, Parksperre halten |
| STAT_KMN_NOPOSD | - | - | - | 0/1 | high | long | 0x10000000 | - | - | - | - | Aktives verlassen von Position D bzw. D verhindern; Antriebsstrang öffnen |
| STAT_KMN_NOPOSR | - | - | - | 0/1 | high | long | 0x20000000 | - | - | - | - | Aktives verlassen von Position R bzw. R verhindern; Antriebsstrang öffnen |
| STAT_KMN_SHLOCKOFF | - | - | - | 0/1 | high | long | 0x40000000 | - | - | - | - | Shiftlock-Funktion deaktivieren (Erhaltung Verfuegbarkeit) |
| STAT_KMN_AUTOMODE | - | - | - | 0/1 | high | long | 0x80000000 | - | - | - | - | Tippen und Sportprogramm verbieten |

### TAB_GANGANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x07 | 7. Gang |
| 0x08 | 8. Gang |
| 0x09 | 9. Gang |
| 0x0A | Rückwärtsgang |
| 0xFF | Signal ungültig |

### TAB_GETRIEBEVORADA_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Stillstandsadaption nicht gestartet |
| 0x10 | Stillstandsadaption beendet |
| 0x40 | Stillstandsadaption wegen Sicherheitskriterien abgebrochen |
| 0x60 | Stillstandsadaption wegen erkanntem Fehler abgebrochen |
| 0x80 | Stillstandsadaption konnte nicht gestoppt werden |
| 0xC0 | Stillstandsadaption läuft |
| 0xFF | undefiniert |

### TAB_GETRIEBEVORADA_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine nicht aktiv |
| 0x01 | alle Bedingungen erfüllt |
| 0x02 | Stillstandsadaption erfolgreich durchgeführt |
| 0x03 | Getriebeöltemperatur zu klein |
| 0x04 | Getriebeöltemperatur zu groß |
| 0x05 | Fußbremse nicht betätigt |
| 0x06 | Position D nicht eingelegt |
| 0x07 | Fahrpedal betätigt |
| 0x08 | Fahrzeug nicht im Stillstand |
| 0x09 | Motordrehzahl außerhalb Fenster |
| 0x0A | Parkbremse/EMF nicht aktiv |
| 0x0B | Allgemeine Abbruchkriterien für Adaptionen nicht erfüllt (Notprogramme oder auch Sonderzustände die Adaptionsgüte beeinflussen) |
| 0x0C | Nicht alle Kupplungen konnten adaptiert werden. Da wo es möglich war, werden die Adaptionswerte gesichert. |
| 0x64 | K0 geschlossen |
| 0x65 | Position N/P nicht eingelegt |
| 0x66 | K0 nicht geschlossen |
| 0xFF | Notgang oder andere nicht definierte Zustände |

### TAB_HA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht eingelernt |
| 0x01 | eingelernt |
| 0xFF | nicht definiert |

### TAB_HAS_ABLAUFVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Motorstart angefordert |
| 0x01 | Start nur durch SGR |
| 0x02 | Start nur durch EM |
| 0x03 | Start durch SGR und EM |
| 0x04 | Start nur durch RS |
| 0x0F | Signal ungültig |
| 0xFF | undefiniert |

### TAB_HAS_BETRIEBESZUSTAND_ZIEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Angekoppelt P/N |
| 0x02 | Abgekoppelt P/N |
| 0x03 | E-Fahren |
| 0x04 | Stop |
| 0x05 | Laden |
| 0x06 | Abgekoppelt VM an P/N |
| 0x07 | Abgekoppelt VM an D/R |
| 0x08 | Hybridfahren |
| 0x0E | Init |
| 0x0F | Fehler |
| 0xFF | undefiniert |

### TAB_HAS_BETRIEBSART_TRENNKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Kraftschluss |
| 0x01 | Kraftschluss |
| 0xFF | undefiniert |

### TAB_HAS_BETRIEBSART_VERBRENNUNGSMOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Sollzustand Verbrenner aus |
| 0x01 | Sollzustand Verbrenner ein |
| 0xFF | undefiniert |

### TAB_IEP_ERROR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x10 | Pumpe temporär Fehler |
| 0x20 | Pumpe permanent Fehler (Beinhaltet auch Lebenderkennung) |
| 0x30 | Pumpe Signalausfall |
| 0xF0 | undefiniert |

### TAB_IEP_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Pumpe Aus |
| 0x01 | Pumpe Sleep |
| 0x02 | Pumpe läuft Stufe 1 |
| 0x03 | Pumpe läuft Stufe 2 |
| 0x04 | Pumpe läuft Stufe 3 |
| 0x0F | undefiniert |

### TAB_IEP_TESTERSERVICE

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Letzter Durchlauf i.O. |
| 0x11 | Leistungspunkt 1 |
| 0x12 | Leistungspunkt 2 |
| 0x13 | Leistungspunkt 3 |
| 0xFB | Abbruch durch Stop-RoutineControl ueber Tester |
| 0xFC | Abbruch durch Systemhaus |
| 0xFD | Abbruch durch nicht gegebene Prüfbedingung |
| 0xFE | Abbruch durch Fehlermeldung von IEP sv_epumperr (elektrischer Fehler IEP) |
| 0xFF | Abbruch aus unbekanntem Grund |

### TAB_ISTGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Gang: N |
| 0x01 | Gang: 1 |
| 0x02 | Gang: 2 |
| 0x03 | Gang: 3 |
| 0x04 | Gang: 4 |
| 0x05 | Gang: 5 |
| 0x06 | Gang: 6 |
| 0x07 | Gang: 7 |
| 0x08 | Gang: 8 |
| 0x0A | Rückwärtsgang |
| 0xFF | ungültig |

### TAB_MAGNETVENTILE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Kurzschluss Masse |
| 0x02 | Kurzschluss Plus |
| 0x04 | Unterbrechung |
| 0x05 | Kurzschluss Masse/Unterbrechung |
| 0x06 | Kurzschluss Plus/Unterbrechung |
| 0x10 | falsche Konfiguration |
| 0x20 | Strom zu niedrig |
| 0x40 | Strom zu hoch |
| 0xFF | ungültig |

### TAB_POS_FW

| WERT | TEXT |
| --- | --- |
| 0x00 | Mittelstellung |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | nicht definiert |

### TAB_POS_SBW

| WERT | TEXT |
| --- | --- |
| 0x50 | D |
| 0x60 | N |
| 0x70 | R |
| 0x80 | P |
| 0xFF | ungültig |

### TAB_P_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | P nicht betätigt |
| 0x01 | P  betätigt |
| 0x02 | Einfachfehler |
| 0xFF | Signal ungültig |

### TAB_SCHALTWIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schaltwippe nicht betätigt |
| 0x01 | Schaltwippe betätigt |
| 0xFF | Signal ungültig |

### TAB_STATUS_BLS

| WERT | TEXT |
| --- | --- |
| 0x0000 | Bremslichtschalter nicht betätigt |
| 0x0001 | Bremslichtschalter betätigt |
| 0xFFFF | Ungültiger Wert |

### TAB_STEUERN_LERNFKT_RUECKSETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Hinterachse  zurücksetzen |
| 0x01 | Gelernte  CAN Botschaften  zurücksetzen |
| 0x02 | Hinterachse  und  gelernte  CAN Botschaften  zurücksetzen |
| 0xFF | Signal ungültig |

### TAB_TRENNKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | Schnellfüllung |
| 0x02 | Füllausgleichsphase |
| 0x03 | angelegt (touch point) |
| 0x04 | Druck-Stellung (Md-Vorgabe Ablaufsteuerung) |
| 0x05 | Schliessrampe |
| 0x06 | schlupfgeregelt |
| 0x07 | geregelt-geschlossen (Mikroschlupf) |
| 0x08 | geschlossen |
| 0x09 | lastfrei |
| 0x10 | Notlauf (Momentenbegrenzung aktiv) |
| 0x11 | Notlauf (Momentenbegrenzung aktiv) |
| 0x12 | Notlauf (Momentenbegrenzung aktiv) |
| 0x13 | Notlauf (Momentenbegrenzung aktiv) |
| 0x14 | Notlauf (Momentenbegrenzung aktiv) |
| 0x15 | Notlauf (Momentenbegrenzung aktiv) |
| 0x16 | Notlauf (Momentenbegrenzung aktiv) |
| 0x17 | Notlauf (Momentenbegrenzung aktiv) |
| 0x18 | Notlauf (Momentenbegrenzung aktiv) |
| x019 | Notlauf (Momentenbegrenzung aktiv) |
| 0x1A | Notlauf (Momentenbegrenzung aktiv) |
| 0x1B | Notlauf (Momentenbegrenzung aktiv) |
| 0x1C | Notlauf (Momentenbegrenzung aktiv) |
| 0x1D | Notlauf (Momentenbegrenzung aktiv) |
| 0x1E | Notlauf (Momentenbegrenzung aktiv) |
| 0x1F | Notlauf (Momentenbegrenzung aktiv) |
| 0x3F | Signal ungültig |
| 0xFF | undefiniert |

### TAB_WAEHLHEBELANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung |
| 0x01 | P |
| 0x02 | R |
| 0x03 | N |
| 0x04 | D |
| 0xFF | Signal ungülti |

### TAB_WAEHLHEBELSTELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | NA |
| 0x01 | R |
| 0x02 | N |
| 0x03 | D |
| 0x04 | M- |
| 0x05 | M+ |
| 0x06 | M/S |
| 0x07 | M |
| 0x0A | V |
| 0x0B | VV |
| 0x0C | H |
| 0x0E | HH |
| 0xFF | Signal ungültig |

### TAB_WANDLERKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Wandlerkupplung geöffnet |
| 0x01 | Wandlerkupplung geregelt low |
| 0x02 | Wandlerkupplung geregelt high |
| 0x03 | Wandlerkupplung geschlossen low |
| 0x04 | Wandlerkupplung geschlossen high |
| 0x08 | Wandlerkupplung Übergang nach auf |
| 0x09 | Wandlerkupplung Übergang nach ger low |
| 0x0A | Wandlerkupplung Übergang nach ger high |
| 0x0B | Wandlerkupplung Übergang nach zu low |
| 0x0C | Wandlerkupplung Übergang nach zu high |
| 0xFF | Signal ungültig |

### UW_TAB_0021

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Antiblockiersystem i.O. |
| 0xFF | Antiblockiersystem n.i.O. |

### UW_TAB_0022

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Fahrdynamikreglung i.O |
| 0xFF | Fahrdynamikreglung n.i.O |

### UW_TAB_0023

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Antriebsschlupferkennung i.O |
| 0xFF | Antriebsschlupferkennung n.i.O |

### UW_TAB_0044

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Schlüssel i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x0001 | Schlüssel i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x0002 | Schlüssel i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x0003 | Schlüssel i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x0004 | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x0005 | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x0006 | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x0007 | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x0008 | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x0009 | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x000A | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x000B | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x000C | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x000D | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x000E | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x000F | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x00FF | ungültig |

### UW_TAB_0052

| WERT | UWTEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | Ablaufvariante 1 |
| 0x02 | Ablaufvariante 2 |
| 0x03 | Ablaufvariante 3 |
| 0x04 | Ablaufvariante 4 |
| 0x05 | Ablaufvariante 5 |
| 0x06 | Ablaufvariante 6 |
| 0x07 | Ablaufvariante 7 |
| 0x08 | Ablaufvariante 8 |
| 0x09 | Ablaufvariante 9 |
| 0x0A | Ablaufvariante 10 |
| 0x0B | Ablaufvariante 11 |
| 0x0C | Ablaufvariante 12 |
| 0x0D | Ablaufvariante 13 |
| 0x0E | Ablaufvariante 14 |
| 0x0F | Ablaufvariante 15 |
| 0xFF | undefiniert |

### UW_TAB_0053_IST

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Betriebszustand HAS-Ist Inaktiv |
| 0x01 | Betriebszustand HAS-Ist Angekoppelt P/N |
| 0x02 | Betriebszustand HAS-Ist Abgekoppelt P/N |
| 0x03 | Betriebszustand HAS-Ist E-Fahren |
| 0x04 | Betriebszustand HAS-Ist Stopp |
| 0x05 | Betriebszustand HAS-Ist Laden |
| 0x06 | Betriebszustand HAS-Ist Abgekoppelt VM an P/N |
| 0x07 | Betriebszustand HAS-Ist Abgekoppelt VM an D/R |
| 0x08 | Betriebszustand HAS-Ist Hybridfahren |
| 0x0E | Betriebszustand HAS-Ist Init |
| 0x0F | Betriebszustand HAS-Ist Fehler |

### UW_TAB_0053_SOLL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Betriebszustand HAS-Ziel Inaktiv |
| 0x10 | Betriebszustand HAS-Ziel Angekoppelt P/N |
| 0x20 | Betriebszustand HAS-Ziel Abgekoppelt P/N |
| 0x30 | Betriebszustand HAS-Ziel E-Fahren |
| 0x40 | Betriebszustand HAS-Ziel Stopp |
| 0x50 | Betriebszustand HAS-Ziel Laden |
| 0x60 | Betriebszustand HAS-Ziel Abgekoppelt VM an P/N |
| 0x70 | Betriebszustand HAS-Ziel Abgekoppelt VM an D/R |
| 0x80 | Betriebszustand HAS-Ziel Hybridfahren |
| 0xE0 | Betriebszustand HAS-Ziel Init |
| 0xF0 | Betriebszustand HAS-Ziel Fehler |

### UW_TAB_0058

| WERT | UWTEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | angelegt |
| 0x02 | druckstellung |
| 0x03 | schlupfgeregelt |
| 0x04 | geregeltgeschlossen |
| 0x05 | geschlossen |
| 0xFF | undefiniert |

### UW_TAB_0059

| WERT | UWTEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | offen |
| 0x02 | Angelegt / Kriechen |
| 0x03 | anfahren (Anfahren ohne Entkopplungsanforderung) |
| 0x04 | entkoppelt (IAE ist im Entkopplungsbetrieb) |
| 0x05 | entkoppelt anfahren (IAE ist im Entkopplungsbetrieb mit Mindestschlupf im Anfahrbetrieb) |
| 0x06 | synchronisieren (IAE baut Restschlupf ab) |
| 0x07 | zu (IAE ohne Schlupf geschlossen; Überanpressung) |
| 0x08 | öffnen |
| 0xFF | undefiniert |

### UW_TAB_005A

| WERT | UWTEXT |
| --- | --- |
| 0x00 | IEP aus |
| 0x01 | IEP sleep |
| 0x02 | IEP LP1 |
| 0x03 | IEP LP2 |
| 0x04 | IEP LP3 |
| 0xFF | undefiniert |

### UW_TAB_03EB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Status Substrattemperatur: LM71=ok CG130=ok |
| 0x01 | Status Substrattemperatur: LM71=Ersatzwert CG130=ok |
| 0x02 | Status Substrattemperatur: LM71=Fehler CG130=ok |
| 0x03 | Status Substrattemperatur: LM71=undefiniert CG130=ok |
| 0x04 | Status Substrattemperatur: LM71=ok CG130=Ersatzwert |
| 0x05 | Status Substrattemperatur: LM71=Ersatzwert CG130=Ersatzwert |
| 0x06 | Status Substrattemperatur: LM71=Fehler CG130=Ersatzwert |
| 0x07 | Status Substrattemperatur: LM71=undefiniert CG130=Ersatzwert |
| 0x08 | Status Substrattemperatur: LM71=ok CG130=Fehler |
| 0x09 | Status Substrattemperatur: LM71=Ersatzwert CG130=Fehler |
| 0x0A | Status Substrattemperatur: LM71=Fehler CG130=Fehler |
| 0x0B | Status Substrattemperatur: LM71=undefiniert CG130=Fehler |
| 0x0C | Status Substrattemperatur: LM71=ok CG130=undefiniert |
| 0x0D | Status Substrattemperatur: LM71=Ersatzwert CG130=undefiniert |
| 0x0E | Status Substrattemperatur: LM71=Fehler CG130=undefiniert |
| 0x0F | Status Substrattemperatur: LM71=undefiniert CG130=undefiniert |
| 0xFF | undefiniert |

### UW_TAB_03EE

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x0001 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x0002 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x0003 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x0004 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x0005 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x0006 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x0007 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x0008 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x0009 | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x000A | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x000B | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x000C | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x000D | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x000E | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x000F | Checksumme  Volcano configuration  i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x0010 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x0011 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x0012 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x0013 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x0014 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x0015 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x0016 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x0017 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x0018 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x0019 | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x001A | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x001B | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0x001C | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  i.o. |
| 0x001D | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  i.o. Checksumme  Drive program  n.i.o. |
| 0x001E | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  i.o. |
| 0x001F | Checksumme  Volcano configuration  n.i.o Checksumme  ZF adjustment data  n.i.o. Checksumme  OEM-Boot data  n.i.o. Checksumme  Drive data  n.i.o. Checksumme  Drive program  n.i.o. |
| 0xFFFF | undefiniert |

### UW_TAB_03F0

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Synchronisation in IWD - CPU Kommunikation i.o. SPI Daten i.o. SPI i.o. IPT i.o. |
| 0x0001 | Synchronisation in IWD - CPU Kommunikation i.o. SPI Daten i.o. SPI i.o. IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0x0002 | Synchronisation in IWD - CPU Kommunikation i.o. SPI Daten i.o. keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT i.o. |
| 0x0003 | Synchronisation in IWD - CPU Kommunikation i.o. SPI Daten i.o. keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level. |
| 0x0004 | Synchronisation in IWD - CPU Kommunikation i.o. Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation SPI i.o. IPT i.o. |
| 0x0005 | Synchronisation in IWD - CPU Kommunikation i.o. Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation SPI i.o. IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0x0006 | Synchronisation in IWD - CPU Kommunikation i.o. Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT i.o. |
| 0x0007 | Synchronisation in IWD - CPU Kommunikation i.o. Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0x0008 | Synchronisationsfehler in IWD - CPU Kommunikation SPI Daten i.o. SPI i.o. IPT i.o. |
| 0x0009 | Synchronisationsfehler in IWD - CPU Kommunikation SPI Daten i.o. SPI i.o. IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0x000A | Synchronisationsfehler in IWD - CPU Kommunikation SPI Daten i.o. keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT i.o. |
| 0x000B | Synchronisationsfehler in IWD - CPU Kommunikation SPI Daten i.o. keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0x000C | Synchronisationsfehler in IWD - CPU Kommunikation Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation SPI i.o. IPT i.o. |
| 0x000D | Synchronisationsfehler in IWD - CPU Kommunikation Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation SPI i.o. IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0x000E | Synchronisationsfehler in IWD - CPU Kommunikation. Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT i.o. |
| 0x000F | Synchronisationsfehler in IWD - CPU Kommunikation Ungültige SPI Daten, Fehler in IWD - CPU Kommunikation keine SPI Daten, Fehler in IWD - CPU Kommunikation IPT - Timeout, WD Modul erreicht nicht gewünschten IWD Target Level |
| 0xFFFF | undefiniert |

### UW_TAB_03F1

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0001 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0002 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0003 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0004 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0005 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0006 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0007 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0008 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0009 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x000A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x000B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x000C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x000D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x000E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x000F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0010 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0011 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0012 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0013 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0014 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0015 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0016 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0017 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0018 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0019 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x001A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x001B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x001C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x001D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x001E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x001F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0020 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0021 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0022 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0023 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0024 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0025 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0026 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0027 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0028 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0029 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x002A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x002B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x002C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x002D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x002E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x002F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0030 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0031 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0032 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0033 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0034 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0035 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0036 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0037 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0038 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0039 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x003A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x003B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x003C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x003D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x003E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x003F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0040 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0041 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0042 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0043 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0044 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0045 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0046 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0047 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0048 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0049 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x004A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x004B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x004C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x004D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x004E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x004F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0050 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0051 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0052 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0053 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0054 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0055 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0056 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0057 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0058 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0059 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x005A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x005B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x005C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x005D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x005E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x005F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0060 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0061 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0062 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0063 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0064 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0065 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0066 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0067 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0068 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0069 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x006A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x006B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x006C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x006D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x006E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x006F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0070 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0071 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0072 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0073 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0074 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0075 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0076 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0077 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0078 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0079 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x007A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x007B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x007C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x007D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x007E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x007F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0080 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0081 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0082 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0083 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0084 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0085 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0086 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0087 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0088 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0089 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x008A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x008B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x008C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x008D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x008E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x008F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0090 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0091 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0092 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0093 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0094 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0095 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0096 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0097 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0098 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0099 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x009A | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x009B | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x009C | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x009D | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x009E | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x009F | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00A0 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00A1 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00A2 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00A3 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00A4 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00A5 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00A6 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00A7 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00A8 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00A9 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00AA | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00AB | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00AC | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00AD | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00AE | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00AF | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00B0 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00B1 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00B2 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00B3 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00B4 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00B5 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00B6 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00B7 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00B8 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00B9 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00BA | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00BB | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00BC | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00BD | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00BE | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00BF | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00C0 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00C1 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00C2 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00C3 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00C4 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00C5 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00C6 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00C7 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00C8 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00C9 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00CA | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00CB | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00CC | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00CD | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00CE | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00CF | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00D0 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00D1 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00D2 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00D3 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00D4 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00D5 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00D6 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00D7 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00D8 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00D9 | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00DA | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00DB | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00DC | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00DD | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00DE | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00DF | Konfigurations Register nicht fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00E0 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00E1 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00E2 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00E3 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00E4 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00E5 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00E6 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00E7 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00E8 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00E9 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00EA | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00EB | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00EC | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00ED | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00EE | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00EF | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00F0 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00F1 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00F2 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00F3 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00F4 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00F5 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00F6 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00F7 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x00F8 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x00F9 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x00FA | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x00FB | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x00FC | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x00FD | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x00FE | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x00FF | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0100 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0101 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0102 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0103 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0104 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0105 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0106 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0107 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0108 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0109 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x010A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x010B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x010C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x010D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x010E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x010F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0110 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0111 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0112 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0113 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0114 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0115 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0116 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0117 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0118 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0119 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x011A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x011B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x011C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x011D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x011E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x011F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0120 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0121 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0122 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0123 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0124 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0125 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0126 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0127 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0128 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0129 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x012A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x012B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x012C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x012D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x012E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x012F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0130 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0131 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0132 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0133 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0134 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0135 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0136 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0137 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0138 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0139 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x013A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x013B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x013C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x013D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x013E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x013F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0140 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0141 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0142 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0143 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0144 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0145 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0146 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0147 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0148 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0149 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x014A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x014B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x014C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x014D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x014E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x014F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0150 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0151 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0152 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0153 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0154 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0155 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0156 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0157 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0158 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0159 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x015A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x015B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x015C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x015D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x015E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x015F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0160 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0161 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0162 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0163 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0164 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0165 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0166 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0167 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0168 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0169 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x016A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x016B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x016C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x016D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x016E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x016F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0170 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0171 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0172 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0173 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0174 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0175 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0176 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0177 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0178 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0179 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x017A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x017B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x017C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x017D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x017E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x017F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0180 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0181 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0182 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0183 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0184 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0185 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0186 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0187 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0188 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0189 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x018A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x018B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x018C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x018D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x018E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x018F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0190 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0191 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0192 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0193 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0194 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0195 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0196 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0197 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0198 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0199 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x019A | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x019B | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x019C | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x019D | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x019E | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x019F | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01A0 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01A1 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01A2 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01A3 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01A4 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01A5 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01A6 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01A7 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01A8 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01A9 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01AA | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01AB | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01AC | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01AD | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01AE | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01AF | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01B0 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01B1 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01B2 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01B3 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01B4 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01B5 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01B6 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01B7 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01B8 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01B9 | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01BA | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01BB | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01BC | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01BD | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01BE | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01BF | Konfigurations Register nicht fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01C0 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01C1 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01C2 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01C3 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01C4 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01C5 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01C6 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01C7 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01C8 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01C9 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01CA | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01CB | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01CC | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01CD | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01CE | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01CF | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01D0 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01D1 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01D2 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01D3 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01D4 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01D5 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01D6 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01D7 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01D8 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01D9 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01DA | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01DB | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01DC | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01DD | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01DE | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01DF | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01E0 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01E1 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01E2 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01E3 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01E4 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01E5 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01E6 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01E7 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01E8 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01E9 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01EA | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01EB | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01EC | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01ED | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01EE | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01EF | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01F0 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01F1 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01F2 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01F3 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01F4 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01F5 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01F6 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01F7 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x01F8 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x01F9 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x01FA | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x01FB | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x01FC | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x01FD | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x01FE | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x01FF | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0200 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0201 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0202 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0203 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0204 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0205 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0206 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0207 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0208 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0209 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x020A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x020B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x020C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x020D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x020E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x020F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0210 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0211 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0212 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0213 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0214 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0215 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0216 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0217 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0218 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0219 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x021A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x021B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x021C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x021D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x021E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x021F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0220 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0221 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0222 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0223 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0224 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0225 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0226 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0227 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0228 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0229 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x022A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x022B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x022C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x022D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x022E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x022F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0230 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0231 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0232 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0233 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0234 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0235 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0236 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0237 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0238 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0239 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x023A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x023B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x023C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x023D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x023E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x023F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0240 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0241 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0242 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0243 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0244 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0245 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0246 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0247 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0248 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0249 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x024A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x024B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x024C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x024D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x024E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x024F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0250 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0251 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0252 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0253 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0254 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0255 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0256 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0257 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0258 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0259 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x025A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x025B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x025C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x025D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x025E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x025F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0260 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0261 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0262 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0263 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0264 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0265 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0266 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0267 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0268 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0269 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x026A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x026B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x026C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x026D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x026E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x026F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0270 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0271 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0272 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0273 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0274 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0275 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0276 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0277 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0278 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0279 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x027A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x027B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x027C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x027D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x027E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x027F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0280 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0281 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0282 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0283 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0284 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0285 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0286 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0287 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0288 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0289 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x028A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x028B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x028C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x028D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x028E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x028F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0290 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0291 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0292 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0293 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0294 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0295 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0296 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0297 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0298 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0299 | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x029A | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x029B | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x029C | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x029D | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x029E | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x029F | Konfigurations Register fehlerhaft erkannt MISR nicht fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02A0 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02A1 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02A2 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02A3 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02A4 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02A5 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02A6 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02A7 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02A8 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02A9 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02AA | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02AB | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02AC | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02AD | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02AE | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02AF | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02B0 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02B1 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02B2 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02B3 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02B4 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02B5 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02B6 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02B7 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02B8 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02B9 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02BA | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02BB | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02BC | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02BD | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02BE | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02BF | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02C0 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02C1 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02C2 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02C3 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02C4 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02C5 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02C6 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02C7 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02C8 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02C9 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02CA | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02CB | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02CC | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02CD | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02CE | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02CF | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02D0 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02D1 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02D2 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02D3 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02D4 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02D5 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02D6 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02D7 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02D8 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02D9 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02DA | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02DB | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02DC | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02DD | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02DE | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02DF | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02E0 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02E1 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02E2 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02E3 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02E4 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02E5 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02E6 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02E7 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02E8 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02E9 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02EA | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02EB | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02EC | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02ED | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02EE | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02EF | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02F0 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02F1 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02F2 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02F3 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02F4 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02F5 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02F6 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02F7 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x02F8 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x02F9 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x02FA | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x02FB | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x02FC | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x02FD | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x02FE | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x02FF | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0300 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0301 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0302 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0303 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0304 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0305 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0306 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0307 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0308 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0309 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x030A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x030B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x030C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x030D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x030E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x030F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC nicht fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0310 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0311 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0312 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0313 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0314 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0315 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0316 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0317 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0318 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0319 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x031A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x031B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x031C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x031D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x031E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x031F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0320 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0321 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0322 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0323 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0324 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0325 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0326 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0327 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0328 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0329 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x032A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x032B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x032C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x032D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x032E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x032F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0330 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0331 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0332 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0333 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0334 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0335 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0336 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0337 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0338 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0339 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x033A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x033B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x033C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x033D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x033E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x033F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0340 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0341 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0342 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0343 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0344 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0345 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0346 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0347 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat keinen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0348 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0349 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x034A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x034B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x034C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x034D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x034E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x034F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste A OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0350 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0351 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0352 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0353 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0354 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0355 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0356 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0357 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste B OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0358 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0359 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x035A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x035B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x035C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x035D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x035E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x035F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste C OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0360 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0361 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0362 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0363 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0364 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0365 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0366 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0367 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste D OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0368 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0369 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x036A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x036B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x036C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x036D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x036E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x036F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste E OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0370 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0371 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x0372 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x0373 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x0374 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x0375 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x0376 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x0377 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste F OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0x0378 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI kein PFC Fehler erkannt |
| 0x0379 | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = INI PFC Fehler erkannt |
| 0x037A | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY kein PFC Fehler erkannt |
| 0x037B | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = SBY PFC Fehler erkannt |
| 0x037C | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU kein PFC Fehler erkannt |
| 0x037D | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = CRU PFC Fehler erkannt |
| 0x037E | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH kein PFC Fehler erkannt |
| 0x037F | Konfigurations Register fehlerhaft erkannt MISR fehlerhaft erkannt ECC fehlerhaft erkannt Rechnerkerntest hat einen Fehler erkannt Taskliste der Fehler verursachenden PFC = Taskliste G OMM Mode der Fehler verursachenden PFC = LPH PFC Fehler erkannt |
| 0xFFFF | ungültig |

### UW_TAB_03F2

| WERT | UWTEXT |
| --- | --- |
| 0x00 | SPI Fehler detektiert=0 ADC Fehler detektiert=0 |
| 0x01 | SPI Fehler detektiert=0 ADC Fehler detektiert=1 |
| 0x02 | SPI Fehler detektiert=1 ADC Fehler detektiert=0 |
| 0x03 | SPI Fehler detektiert=1 ADC Fehler detektiert=1 |
| 0xFF | undefiniert |

### UW_TAB_0BBE

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0001 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0002 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0003 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0004 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0005 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0006 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0007 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0008 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0009 | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x000A | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x000B | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x000C | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x000D | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x000E | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x000F | Gradientenfehler POSME nicht aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0010 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0011 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0012 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0013 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0014 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0015 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0016 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0017 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität nicht aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x0018 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x0019 | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x001A | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x001B | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität nicht aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x001C | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x001D | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME nicht aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x001E | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME nicht aktiv |
| 0x001F | Gradientenfehler POSME aktiv;Fehlerflag negative Intensität aktiv;Fehlerflag positive Intensität aktiv;Signalplausibilisierungsfehler NEGME aktiv;Signalplausibilisierungsfehler POSME aktiv |
| 0x00FF | ungültig |

### UW_TAB_1389

| WERT | UWTEXT |
| --- | --- |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | P |
| 0xFF | undefiniert |

### UW_TAB_138B

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | vorwärts |
| 0x02 | rückwärts |
| 0xFF | ungültig |

### UW_TAB_138E

| WERT | UWTEXT |
| --- | --- |
| 0x00 | mech. Notlauf nicht aktiv |
| 0x01 | mech. Notlauf aktiv |
| 0xFF | undefiniert |

### UW_TAB_138F

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Parksperre nicht eingelegt |
| 0x01 | Parksperre eingelegt |
| 0x02 | Parksperre in Zwischenposition |
| 0x03 | Zustand der Parksperre unbekannt |
| 0xFF | undefiniert |

### UW_TAB_1390

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Parksperre undefiniert |
| 0x01 | Parksperre freigegeben |
| 0x02 | Freigeben der Parksperre |
| 0x03 | Einlegen der Parksperre |
| 0x04 | Parksperre eingerastet |
| 0xFF | ungültig |

### UW_TAB_1391

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Parksperre nicht eingelegt |
| 0x01 | Parksperre eingelegt |
| 0xFF | undefiniert |

### UW_TAB_1392

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Hotmode aktiv |
| 0x01 | Hotmode1 aktiv |
| 0x02 | Hotmode2 aktiv |
| 0xFF | undefiniert |

### UW_TAB_1398

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | E-Label Zustand entspricht Entwicklung Keine nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel ungültig erkannt |
| 0x0001 | E-Label Zustand entspricht Entwicklung Keine nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel gültig erkannt |
| 0x0002 | E-Label Zustand entspricht Entwicklung Keine nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel ungültig erkannt |
| 0x0003 | E-Label Zustand entspricht Entwicklung Keine nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel gültig erkannt |
| 0x0004 | E-Label Zustand entspricht Entwicklung Nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel ungültig erkannt |
| 0x0005 | E-Label Zustand entspricht Entwicklung Nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel gültig erkannt |
| 0x0006 | E-Label Zustand entspricht Entwicklung Nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel ungültig erkannt |
| 0x0007 | E-Label Zustand entspricht Entwicklung Nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel gültig erkannt |
| 0x0008 | E-Label Zustand entspricht Serie Keine nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel ungültig erkannt |
| 0x0009 | E-Label Zustand entspricht Serie Keine nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel gültig erkannt |
| 0x000A | E-Label Zustand entspricht Serie Keine nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel ungültig erkannt |
| 0x000B | E-Label Zustand entspricht Serie Keine nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel gültig erkannt |
| 0x000C | E-Label Zustand entspricht Serie Nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel ungültig erkannt |
| 0x000D | E-Label Zustand entspricht Serie Nicht authorisierte DMW-Antwort empfangen EWS auf primärem Pfad aktiv Schlüssel gültig erkannt |
| 0x000E | E-Label Zustand entspricht Serie Nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel ungültig erkannt |
| 0x000F | E-Label Zustand entspricht Serie Nicht authorisierte DMW-Antwort empfangen EWS auf redundantem Pfad aktiv Schlüssel gültig erkannt |
| 0xFFFF | undefiniert |

### UW_TAB_1399

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x0001 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x0002 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x0003 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x0004 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x0005 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x0006 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x0007 | Fahrersitz nicht belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x0008 | Fahrersitz nicht belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x0009 | Fahrersitz nicht belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x000A | Fahrersitz nicht belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x000B | Fahrersitz nicht belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x000C | Fahrersitz nicht belegt Fahrertür offen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x000D | Fahrersitz nicht belegt Fahrertür offen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x000E | Fahrersitz nicht belegt Fahrertür offen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x000F | Fahrersitz nicht belegt Fahrertür offen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x0010 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x0011 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x0012 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x0013 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x0014 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x0015 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x0016 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x0017 | Fahrersitz belegt Fahrertür geschlossen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x0018 | Fahrersitz belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x0019 | Fahrersitz belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x001A | Fahrersitz belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x001B | Fahrersitz belegt Fahrertür offen Fahrergurt nicht geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0x001C | Fahrersitz belegt Fahrertür offen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal nicht betätigt |
| 0x001D | Fahrersitz belegt Fahrertür offen Fahrergurt geschlossen Bremspedal nicht betätigt Fahrpedal betätigt |
| 0x001E | Fahrersitz belegt Fahrertür offen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal nicht betätigt |
| 0x001F | Fahrersitz belegt Fahrertür offen Fahrergurt geschlossen Bremspedal betätigt Fahrpedal betätigt |
| 0xFFFF | undefiniert |

### UW_TAB_ISTGANG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | R-Gang |
| 0x01 | 1.Gang |
| 0x02 | 2.Gang |
| 0x03 | 3.Gang |
| 0x04 | 4.Gang |
| 0x05 | 5.Gang |
| 0x06 | 6.Gang |
| 0x07 | 7.Gang |
| 0x08 | 8.Gang |
| 0x09 | 9.Gang |
| 0x0A | kein Gang |
| 0x0F | undefiniert |

### UW_TAB_KL15

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Init |
| 0x0001 | Reserve |
| 0x0002 | KL 30 (Alle Klemmen aus) |
| 0x0003 | KL 30F-Änderung |
| 0x0004 | KL 30F-Ein |
| 0x0005 | KL 30B-Änderung |
| 0x0006 | KL 30B-Ein |
| 0x0007 | KL R-Änderung |
| 0x0008 | KL R-Ein |
| 0x0009 | KL 15-Änderung |
| 0x000A | KL 15-Ein |
| 0x000B | KL 50-Verzögerung (Komfortstart aktiv, Diesel vorglühen, VVT-Relais anziehen) |
| 0x000C | KL 50-Änderung |
| 0x000D | KL 50-Ein |
| 0x000E | Fehler |
| 0x000F | undefiniert |

### UW_TAB_KL15_DIV

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Initialisierung |
| 0x0200 | Fehler |
| 0x0400 | Signal ungültig |
| 0x0600 | alle anderen Werte |

### UW_TAB_KL15_PLAUSI

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | noch keine Plausi durchgeführt |
| 0x0080 | KL15 plausibel |
| 0x0100 | KL15 unplausibel |

### UW_TAB_KL15_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Signal o.k. |
| 0x0010 | Signal fehlerhaft, dynamisch geeigneter Ersatzwert (PIN-Signal alleine) |
| 0x0020 | Signal fehlerhaft |

### UW_TAB_KRAFTSCHLUSS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Kraftschluss |
| 0x01 | Kraftschluss vorwärts aufbauend/abbauend |
| 0x02 | Kraftschluss vorwärts |
| 0x03 | Kraftschluss rückwärts aufbauend/abbauend |
| 0x04 | Kraftschluss rückwärts |
| 0x05 | schlupfendes Schaltelement (8HP/8P: Bremse B) vorwärts |
| 0x06 | schlupfendes Schaltelement (8HP/8P: Bremse B) rückwärts (SAB) |
| 0x0F | undefiniert |

### UW_TAB_NAB_DREHRICHTUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Drehrichtung unbestimmt |
| 0x10 | Drehrichtung vorwärts |
| 0x20 | Drehrichtung rückwärts |
| 0xF0 | undefiniert |

### UW_TAB_NTU_DREHRICHTUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Drehrichtung unbestimmt |
| 0x40 | Drehrichtung Motor und Turbine gleichsinnig |
| 0x80 | Drehrichtung Motor und Turbine ungleichsinnig |
| 0xF0 | undefiniert |

### UW_TAB_ZIELGANG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | R-Gang |
| 0x10 | 1.Gang |
| 0x20 | 2.Gang |
| 0x30 | 3.Gang |
| 0x40 | 4.Gang |
| 0x50 | 5.Gang |
| 0x60 | 6.Gang |
| 0x70 | 7.Gang |
| 0x80 | 8.Gang |
| 0x90 | 9.Gang |
| 0xA0 | kein Gang |
| 0xF0 | undefiniert |

### DROSSELKLAPPENSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Signal gültig |
| 0x01 | Signal Ersatzwert |
| 0x02 | Signal ungültig |

### ISTGANG

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Gang: 1 |
| 0x02 | Gang: 2 |
| 0x03 | Gang: 3 |
| 0x04 | Gang: 4 |
| 0x05 | Gang: 5 |
| 0x06 | Gang: 6 |
| 0x07 | Gang: 7 |
| 0x08 | Gang: 8 |
| 0x09 | Rückwärtsgang |
| 0xFF | ungültig |

### L_LEITUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Pegel low |
| 0x01 | Pegel high |

### MIL

| WERT | TEXT |
| --- | --- |
| 0x00 | MIL aus |
| 0x01 | MIL ein |
| 0xFF | ungültig |

### MOTORDREHZAHLSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Signal gültig |
| 0x01 | Signal Ersatzwert |
| 0x02 | Signal ungültig |

### NIC

| WERT | TEXT |
| --- | --- |
| 0x00 | NIC ausgeschaltet |
| 0x01 | NIC eingeschaltet |
| 0x02 | NIC applikativ eingeschaltet |
| 0xFF | ungültig |

### POS

| WERT | TEXT |
| --- | --- |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | P |
| 0xFF | ungültig |

### SCANTOOL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kommunikation aus |
| 0x01 | Kommunikation ein |
| 0xFF | ungültig |

### SCK_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Fehler im überwachten RAM |
| 0x01 | Kein Fehler im überwachten RAM |
| 0x02 | Prüfung noch nicht abgeschlossen(sendet nur ATSYS) |
| 0xFF | undefiniert |

### SGT_GEAR0

| WERT | UWTEXT |
| --- | --- |
| 0x00 | N-P; P-N; D |
| 0x01 | Gang: 1 |
| 0x02 | Gang: 2 |
| 0x03 | Gang: 3 |
| 0x04 | Gang: 4 |
| 0x05 | Gang: 5 |
| 0x06 | Gang: 6 |
| 0x07 | Gang: 7 |
| 0x08 | Gang: 8 |
| 0x09 | Gang: R |
| 0x0A | 1-2 |
| 0x0B | 2-3 |
| 0x0C | 3-4 |
| 0x0D | 4-5 |
| 0x0E | 5-6 |
| 0x0F | 6-7 |
| 0x10 | 7-8 |
| 0x11 | 8-7 |
| 0x12 | 7-6 |
| 0x13 | 6-5 |
| 0x14 | 5-4 |
| 0x15 | 4-3 |
| 0x16 | 3-2 |
| 0x17 | 2-1 |
| 0x18 | N/P/D-R |
| 0x19 | N/P/R-D |
| 0x1A | R-P |
| 0x1B | D-P |
| 0x1C | R-N |
| 0x1D | D-N |
| 0x1E | P |
| 0x1F | N |
| 0x20 | 1-3 |
| 0x21 | 2-4 |
| 0x22 | 3-1 |
| 0x23 | 3-5 |
| 0x24 | 4-2 |
| 0x25 | 4-6 |
| 0x26 | 5-1 |
| 0x27 | 5-3 |
| 0x28 | 5-7 |
| 0x29 | 6-3 |
| 0x2A | 6-4 |
| 0x2B | 6-8 |
| 0x2C | 7-1 |
| 0x2D | 7-5 |
| 0x2E | 8-2 |
| 0x2F | 8-4 |
| 0x30 | 8-6 |
| 0x31 | N-P |
| 0x32 | P-N |
| 0x33 | nicht definiert |
| 0x34 | P-R |
| 0x35 | D-R |
| 0x36 | P-D |
| 0x37 | R-D |
| 0x38 | D |
| 0x39 | N-R |
| 0x3A | N-D |
| 0x3B | nicht definiert |
| 0x3C | nicht definiert |
| 0x3D | nicht definiert |
| 0x3E | nicht definiert |
| 0x3F | nicht definiert |
| 0x40 | nicht definiert |
| 0x41 | Gang: 1 |
| 0x42 | Gang: 2 |
| 0x43 | Gang: 3 |
| 0x44 | Gang: 4 |
| 0x45 | Gang: 5 |
| 0x46 | Gang: 6 |
| 0x47 | Gang: 7 |
| 0x48 | Gang: 8 |
| 0x49 | Gang: R |
| 0x4A | 1-2 |
| 0x4B | 2-3 |
| 0x4C | 3-4 |
| 0x4D | 4-5 |
| 0x4E | 5-6 |
| 0x4F | 6-7 |
| 0x50 | 7-8 |
| 0x51 | 8-7 |
| 0x52 | 7-6 |
| 0x53 | 6-5 |
| 0x54 | 5-4 |
| 0x55 | 4-3 |
| 0x56 | 3-2 |
| 0x57 | 2-1 |
| 0x58 | N/P/D-R |
| 0x59 | N/P/R-D |
| 0x5A | R-P |
| 0x5B | D-P |
| 0x5C | R-N |
| 0x5D | D-N |
| 0x5E | P |
| 0x5F | N |
| 0x60 | 1-3 |
| 0x61 | 2-4 |
| 0x62 | 3-1 |
| 0x63 | 3-5 |
| 0x64 | 4-2 |
| 0x65 | 4-6 |
| 0x66 | 5-1 |
| 0x67 | 5-3 |
| 0x68 | 5-7 |
| 0x69 | 6-3 |
| 0x6A | 6-4 |
| 0x6B | 6-8 |
| 0x6C | 7-1 |
| 0x6D | 7-5 |
| 0x6E | 8-2 |
| 0x6F | 8-4 |
| 0x70 | 8-6 |
| 0x71 | nicht definiert |
| 0x72 | nicht definiert |
| 0x73 | nicht definiert |
| 0x74 | nicht definiert |
| 0x75 | nicht definiert |
| 0x76 | nicht definiert |
| 0x77 | nicht definiert |
| 0x78 | nicht definiert |
| 0x79 | nicht definiert |
| 0x7A | nicht definiert |
| 0x7B | nicht definiert |
| 0x7C | nicht definiert |
| 0x7D | nicht definiert |
| 0x7E | nicht definiert |
| 0x7F | nicht definiert |
| 0x80 | nicht definiert |
| 0x81 | Gang: 1 |
| 0x82 | Gang: 2 |
| 0x83 | Gang: 3 |
| 0x84 | Gang: 4 |
| 0x85 | Gang: 5 |
| 0x86 | Gang: 6 |
| 0x87 | Gang: 7 |
| 0x88 | Gang: 8 |
| 0x89 | Gang: R |
| 0x8A | 1-2 |
| 0x8B | 2-3 |
| 0x8C | 3-4 |
| 0x8D | 4-5 |
| 0x8E | 5-6 |
| 0x8F | 6-7 |
| 0x90 | 7-8 |
| 0x91 | 8-7 |
| 0x92 | 7-6 |
| 0x93 | 6-5 |
| 0x94 | 5-4 |
| 0x95 | 4-3 |
| 0x96 | 3-2 |
| 0x97 | 2-1 |
| 0x98 | N/P/D-R |
| 0x99 | N/P/R-D |
| 0x9A | R-P |
| 0x9B | D-P |
| 0x9C | R-N |
| 0x9D | D-N |
| 0x9E | P |
| 0x9F | N |
| 0xA0 | 1-3 |
| 0xA1 | 2-4 |
| 0xA2 | 3-1 |
| 0xA3 | 3-5 |
| 0xA4 | 4-2 |
| 0xA5 | 4-6 |
| 0xA6 | 5-1 |
| 0xA7 | 5-3 |
| 0xA8 | 5-7 |
| 0xA9 | 6-3 |
| 0xAA | 6-4 |
| 0xAB | 6-8 |
| 0xAC | 7-1 |
| 0xAD | 7-5 |
| 0xAE | 8-2 |
| 0xAF | 8-4 |
| 0xB0 | 8-6 |
| 0xB1 | nicht definiert |
| 0xB2 | nicht definiert |
| 0xB3 | nicht definiert |
| 0xB4 | nicht definiert |
| 0xB5 | nicht definiert |
| 0xB6 | nicht definiert |
| 0xB7 | nicht definiert |
| 0xB8 | nicht definiert |
| 0xB9 | nicht definiert |
| 0xBA | nicht definiert |
| 0xBB | nicht definiert |
| 0xBC | nicht definiert |
| 0xBD | nicht definiert |
| 0xBE | nicht definiert |
| 0xBF | nicht definiert |
| 0xFF | ungültig |

### SGT_INP0

| WERT | UWTEXT |
| --- | --- |
| 0x10 | Pegel an L1 Pin high=1 |
| 0x20 | Pegel an L2 Pin high=1 |
| 0x30 | Pegel an L1 und L2 Pin high=1 |
| 0x40 | Pegel an L3 Pin high=1 |
| 0x50 | Pegel an L1 und L3 Pin high=1 |
| 0x60 | Pegel an L2 und L3 Pin high=1 |
| 0x70 | Pegel an L1, L2 und L3 Pin high=1 |
| 0x80 | Pegel an L4 Pin high=1 |
| 0x90 | Pegel an L1 und L4 Pin high=1 |
| 0xA0 | Pegel an L2 und L4 Pin high=1 |
| 0xB0 | Pegel an L1, L2 und L4 Pin high=1 |
| 0xC0 | Pegel an L3 und L4 Pin high=1 |
| 0xD0 | Pegel an L1, L3 und L4 Pin high=1 |
| 0xE0 | Pegel an L2, L3 und L4 Pin high=1 |
| 0xF0 | Pegel an L1, L2, L3 und L4 Pin high=1 |
| 0xFF | ungültig |

### SGT_OUT0

| WERT | UWTEXT |
| --- | --- |
| 0x00 | GET_OUT7 und GET_OUT11 nicht aktiv |
| 0x40 | GET_OUT11 aktiv |
| 0x80 | GET_OUT7 aktiv |
| 0xC0 | GET_OUT7 und GET_OUT11 aktiv |
| 0xFF | ungültig |

### SGT_SIG0

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | Status Abtriebsdrehzahl |
| 0x02 | Status Turbinendrehzahl |
| 0x04 | Status PS-Sensor |
| 0x08 | Status OeltempSensor |
| 0x10 | Status SubstrattempSensor |
| 0x20 | Zustand Flag cgtf_PlausiTol |
| 0x40 | Zustand Wandlerkupplung = Zug |
| 0xFF | ungültig |

### SGT_SIG1

| WERT | UWTEXT |
| --- | --- |
| 0x00 | alles i.O. |
| 0x20 | Status Momentensignale n.i.O. |
| 0x40 | Status Drosselklappe n.i.O. |
| 0x60 | Status Momentensignale n.i.O. und Status Drosselklappe n.i.O. |
| 0x80 | Status Motordrehzahl n.i.O. |
| 0xA0 | Status Momentensignale n.i.O. und Status Motordrehzahl n.i.O. |
| 0xC0 | Status Motordrehzahl n.i.O. und Status Drosselklappe n.i.O. |
| 0xE0 | Status Momentensignale n.i.O. und Status Drosselklappe n.i.O. und Status Motordrehzahl n.i.O. |
| 0xFF | ungültig |

### SGT_SIG2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0001 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0002 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0003 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0004 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0005 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0006 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0007 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0008 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0009 | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x000A | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x000B | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x000C | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x000D | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x000E | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x000F | GWS i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0010 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0011 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0012 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0013 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0014 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0015 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0016 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0017 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0018 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0019 | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x001A | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x001B | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x001C | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x001D | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x001E | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x001F | GWS i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0020 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0021 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0022 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0023 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0024 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0025 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0026 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0027 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0028 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0029 | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x002A | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x002B | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x002C | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x002D | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x002E | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x002F | GWS i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0030 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0031 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0032 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0033 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0034 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0035 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0036 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0037 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0038 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0039 | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x003A | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x003B | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x003C | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x003D | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x003E | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x003F | GWS i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0040 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0041 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0042 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0043 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0044 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0045 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0046 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0047 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0048 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0049 | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x004A | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x004B | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x004C | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x004D | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x004E | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x004F | GWS n.i.o. P-Taster i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0050 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0051 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0052 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0053 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0054 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0055 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0056 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0057 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0058 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0059 | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x005A | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x005B | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x005C | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x005D | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x005E | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x005F | GWS n.i.o. P-Taster i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0060 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0061 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0062 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0063 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0064 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0065 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0066 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0067 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0068 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0069 | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x006A | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x006B | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x006C | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x006D | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x006E | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x006F | GWS n.i.o. P-Taster n.i.o. ABS i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0070 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0071 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0072 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0073 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0074 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0075 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x0076 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x0077 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x0078 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x0079 | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x007A | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x007B | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0x007C | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne i.o. |
| 0x007D | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten i.o. Raddrehzahl vorne n.i.o. |
| 0x007E | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne i.o. |
| 0x007F | GWS n.i.o. P-Taster n.i.o. ABS n.i.o. Bremslichtkontakt n.i.o. Bremsmoment n.i.o. Raddrehzahl hinten n.i.o. Raddrehzahl vorne n.i.o. |
| 0xFFFF | undefiniert |

### SPORTTASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Sporttaster ausgeschaltet |
| 0x01 | Sporttaster eingeschaltet |
| 0xFF | ungültig |

### ST_KL15

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Zündung undefiniert |
| 0x01 | Zündung aus->ein |
| 0x02 | Zündung ein |
| 0x03 | Zündung ein->aus |
| 0x04 | Zündung aus |
| 0xFF | ungültig |

### STAT_NAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Abtriebsdrehzahlsignal i.O. |
| 0x01 | Dynamischer Ersatzwert (Raddrehzahl) |
| 0x02 | Statischer Ersatzwert |

### STAT_NTU

| WERT | TEXT |
| --- | --- |
| 0x00 | Eingangsdrehzahlsignal i.O. |
| 0x02 | Eingangsdrehzahlsignal Kurzschluss nach Plus |
| 0x05 | Eingangsdrehzahlsignal Kurzschluss nach Masse / Unterbrechung |

### T_DREH

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehrichtung undefiniert |
| 0x01 | Drehrichtung vorwaerts |
| 0x02 | Drehrichtung rückwaerts |
| 0xFF | Signal ungültig |

### T_FS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrersitz nicht belegt |
| 0x01 | Fahrersitz belegt |
| 0xFF | Signal ungültig |

### T_FT

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrertuer geschlossen |
| 0x01 | Fahrertuer offen |
| 0xFF | Signal ungültig |

### T_LEVER

| WERT | TEXT |
| --- | --- |
| 0x00 | Mid |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x15 | V |
| 0x16 | VV |
| 0x17 | H |
| 0x18 | HH |
| 0x1F | SD |
| 0x20 | M- |
| 0x21 | M+ |
| 0x80 | undefiniert |

### T_SUBTRAT

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x08 | Hängenbleiber |
| 0x20 | Minimal Threshold |
| 0x40 | Maximal Threshold |
| 0x80 | Temperatursprung |
| 0xFF | Signal ungültig |
